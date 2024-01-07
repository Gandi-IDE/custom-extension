import Scratch from "Scratch";
import blockInfo from "./info";
import TileMap, { round } from "./tilemap";
import vs from "./shader/vs.vs?raw"
import fs from "./shader/fs.fs?raw"
import { getDrawable, range } from "./uitl";
import { MODE, POSITION, SHOW_MODE } from "./constant"
import translation_map from "./lang"

// TODO:获取tile，设置tile超出是糊有bug
// TODO:造型不自动加载
// TODO: 代码有待优化，赶时间做的，drawcall用elementdraw来优化
/*
该扩展修改了 scratch-render的webglrender的_drawThese函数（在第30行）
所有修改均标注了by：nights
加入了specialDraw，如果drawable有这个属性那么就在绘制该精灵前调用这个函数并且传入渲染相关参数
drawable如果有specialSkip那么scratch-render调用时就不会渲染该drawable，然后可以自己调用drawThese并传入filterSkip可以检测是否skip
注意：drawthese只会在绘制舞台的时候绘制，选取颜色时， 不会被绘制

检测是否需要tilemap（碰到x颜色GPU运算，选取颜色等都不渲染）
根据我的研究，scratch-render在碰撞像素>一个cpu检测MAX值时会使用GPU颜色检测
但CPU不会，为了避免这种恐怖bug，检测是否等于scratch舞台的projection并且DrawMode==‘default’，是的化就绘制
*/
// 模式
const mode = MODE.GANDI_PRODUCT

class TileMapExt {
    constructor(runtime) {

        this.runtime = runtime ?? Scratch.vm.runtime

        this.renderer = this.runtime.renderer;
        this.twgl = this.renderer.exports.twgl;
        this.gl = this.renderer.gl

        this.originalDrawThese = this.renderer._drawThese;
        this.renderer._drawThese = (..._arguments) => {
            this.drawThese.call(this.renderer, ..._arguments) // 调用
        };

        this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
        this.createTileMapProgramInfo()
    }
    createTileMapProgramInfo() {
        // 获取该设备支持的最多纹理单元，批量渲染时需要
        var fscode = fs.replaceAll('SKIN_NUM', this.maxTextureUnits)
        // 由于webgl1 片元着色器不支持动态数组获取所以手动ifelse判定
        let color_if = ''
        for (let index = 0; index < this.maxTextureUnits; index++) {
            color_if += `if(textureid==${index}){color = texture2D(u_skins[${index}], v_texcoord);}`
            if (index != this.maxTextureUnits - 1) {
                color_if += 'else '
            }
        }
        fscode = fscode.replaceAll('COLOR_IF_GET', color_if)

        this.tileProgramInfo = this.twgl.createProgramInfo(this.gl, [
            vs.replaceAll('SKIN_NUM', this.maxTextureUnits),
            fscode
        ]);
    }
    // 修改scratch-render webglrender的_drawThese函数
    // 我修改的地方都标注了 ”By: Nights“  filterSkip
    drawThese(drawables, drawMode, projection, opts = {}, filterSkip) {
        const gl = this._gl;

        // 检测是否需要tilemap（碰到x颜色GPU运算，选取颜色等都不渲染）
        // 根据我的研究，scratch-render在碰撞像素>一个cpu检测MAX值时会使用GPU颜色检测
        // 但CPU不会，为了避免这种恐怖bug，检测是否等于scratch舞台的projection，是的化就绘制
        //ShaderManager.DRAW_MODE.default = 'default'
        const allowSpecialDraw = projection == this._projection && drawMode == 'default' // By:nights

        let currentShader = null;

        const framebufferSpaceScaleDiffers = (
            'framebufferWidth' in opts && 'framebufferHeight' in opts &&
            opts.framebufferWidth !== this._nativeSize[0] && opts.framebufferHeight !== this._nativeSize[1]
        );

        const numDrawables = drawables.length;
        for (let drawableIndex = 0; drawableIndex < numDrawables; ++drawableIndex) {
            const drawableID = drawables[drawableIndex];
            const twgl = this.exports.twgl // By:nights 获取twgl

            // If we have a filter, check whether the ID fails
            if (opts.filter && !opts.filter(drawableID)) continue;

            const drawable = this._allDrawables[drawableID];
            /** @todo check if drawable is inside the viewport before anything else */

            // Hidden drawables (e.g., by a "hide" block) are not drawn unless
            // the ignoreVisibility flag is used (e.g. for stamping or touchingColor).
            if (!drawable.getVisible() && !opts.ignoreVisibility) continue;

            // drawableScale is the "framebuffer-pixel-space" scale of the drawable, as percentages of the drawable's
            // "native size" (so 100 = same as skin's "native size", 200 = twice "native size").
            // If the framebuffer dimensions are the same as the stage's "native" size, there's no need to calculate it.
            const drawableScale = framebufferSpaceScaleDiffers ? [
                drawable.scale[0] * opts.framebufferWidth / this._nativeSize[0],
                drawable.scale[1] * opts.framebufferHeight / this._nativeSize[1]
            ] : drawable.scale;

            // If the skin or texture isn't ready yet, skip it.
            if (!drawable.skin || !drawable.skin.getTexture(drawableScale)) continue;

            // Skip private skins, if requested.
            if (opts.skipPrivateSkins && drawable.skin.private) continue;

            if (allowSpecialDraw && drawable.skipDraw && (!filterSkip || filterSkip(drawable))) { // 必须是在允许特殊绘制时才能跳过
                // 有时候可能需要跳过绘制
                // 比如在tilemap图层里面的绘制的，普通的draw就允许跳过，如果在tilemap层里就禁止跳过
                continue
            }

            if (drawable.specialDraw) { //By:nights 检测是否是特殊绘制
                if (allowSpecialDraw) {
                    // 退出scratch绘制
                    this._doExitDrawRegion();

                    drawable.specialDraw(projection, drawableScale, drawMode, opts);
                    // 因为每次特殊绘制都会绘制scratch精灵
                    // 没必要自己再弄个区域，直接设为null
                    this._regionId = null;
                }
            }
            const uniforms = {};

            let effectBits = drawable.enabledEffects;
            effectBits &= Object.prototype.hasOwnProperty.call(opts, 'effectMask') ? opts.effectMask : effectBits;
            const newShader = this._shaderManager.getShader(drawMode, effectBits);

            // Manually perform region check. Do not create functions inside a
            // loop.
            if (this._regionId !== newShader) {
                this._doExitDrawRegion();
                this._regionId = newShader;

                currentShader = newShader;
                gl.useProgram(currentShader.program);
                twgl.setBuffersAndAttributes(gl, currentShader, this._bufferInfo);
                Object.assign(uniforms, {
                    u_projectionMatrix: projection
                });
            }

            Object.assign(uniforms,
                drawable.skin.getUniforms(drawableScale),
                drawable.getUniforms());

            // Apply extra uniforms after the Drawable's, to allow overwriting.
            if (opts.extraUniforms) {
                Object.assign(uniforms, opts.extraUniforms);
            }
            if (drawable.specialDrawZ) {
                // 设置 Z 图层，直接修改modelMatrix
                uniforms.u_modelMatrix[14] = drawable.specialDrawZ
                //debugger
                //twgl.m4.translate(uniforms.u_modelMatrix, [0, 0, 0.1], uniforms.u_modelMatrix)

            }
            if (uniforms.u_skin) {
                twgl.setTextureParameters(
                    gl, uniforms.u_skin, {
                    minMag: drawable.skin.useNearest(drawableScale, drawable) ? gl.NEAREST : gl.LINEAR
                }
                );
            }

            twgl.setUniforms(currentShader, uniforms);
            twgl.drawBufferInfo(gl, this._bufferInfo, gl.TRIANGLES);
        }

        this._doExitDrawRegion();
        this._regionId = null;
    }

    getInfo() {
        return blockInfo(Scratch, mode);
    }
    initTileMap(drawable) {
        if (!drawable.tileMap) {
            // 初始化
            drawable.skipDraw = false
            drawable.specialDrawZ = null
            drawable.tileMap = new TileMap(this)
        }
    }
    show(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)

        // 显示精灵？
        if (args.SHOW_MODE == SHOW_MODE.SPRITE) {
            // drawThese里面是通过该属性判断是否绘制tilemap的
            drawable.specialDraw = null
        } else {
            drawable.specialDraw = (projection, drawableScale, drawMode, opts) => {
                // TODO:改成option
                drawable.tileMap.tileMapRender(
                    this.tileProgramInfo,
                    this.twgl,
                    this.renderer,
                    drawable,
                    projection,
                    drawableScale,
                    drawMode,
                    opts,
                    util.target
                )
            }
        }

        this.makeDirty()
    }
    setTileSize(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)

        // 重新设置大小
        drawable.tileMap.tileSize = {
            x: Math.max(args.W, 0),
            y: Math.max(args.H, 0)
        }
        // 需要重新绘制一遍
        this.makeDirty()
    }
    setMapSize(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)
        // 重新设置大小
        drawable.tileMap.setMapSize(args.W, args.H)
        // 需要重新绘制一遍
        this.makeDirty()
    }
    setTileView(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)
        // 更新摄像机
        drawable.tileMap.view = {
            x: args.X,
            y: args.Y
        }
        // 需要重新绘制一遍
        this.makeDirty()
    }


    createTileSet(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)

        // 创建
        drawable.tileMap.createTileSet(args.TILE_ID, {
            texture: args.TEXTURE,
            x: args.X, // pos
            y: args.Y,
            w: args.W, // size
            h: args.H,
            ox: args.OX, // offset
            oy: args.OY,
        })
    }
    deleteTileSet(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)
        // 检测tileset中是否有该ID的tileset？
        if (drawable.tileMap.tileSet[args.TILE_ID]) {
            // 如果有就删除
            drawable.tileMap.deleteTileSet(args.TILE_ID)
        }
    }
    deleteAllTileSet(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)
        // 清空所有tileset
        drawable.tileMap.deleteAllTileSet()
    }
    getAllTileSet(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)
        // 获取tileset数据
        return JSON.stringify(drawable.tileMap.tileSet)
    }





    getTile(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)
        // 检测目标tile是否存在
        const map = drawable.tileMap
        if (!this.isTileExsit(drawable, args)) return '-1'
        if (!map.isLayerExist(args.LAYER)) return '-1'
        const x = Math.round(args.X) - 1
        const y = Math.round(args.Y) - 1
        // 获取tile

        return map.getTile(map.getLayerByName(args.LAYER), x, y)
    }
    setTile(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)
        const map = drawable.tileMap
        // 检测目标tile是否存在
        if (!this.isTileExsit(drawable, args)) return
        if (!map.isLayerExist(args.LAYER)) return
        // 设置tile
        const x = Math.round(args.X) - 1
        const y = Math.round(args.Y) - 1

        map.setTile(map.getLayerByName(args.LAYER), x, y, args.TILE_ID)
        this.makeDirty()
    }
    clearTile(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)
        const map = drawable.tileMap
        // 检测目标tile是否存在
        if (!this.isTileExsit(drawable, args)) return '-1'
        if (!map.isLayerExist(args.LAYER)) return '-1'
        // 设置tile
        const x = Math.round(args.X) - 1
        const y = Math.round(args.Y) - 1
        map.setTile(map.getLayerByName(args.LAYER), x, y, -1)
        // 需要重新绘制一遍
        this.makeDirty()
    }
    clearAllTile(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)
        const map = drawable.tileMap
        if (!map.isLayerExist(args.LAYER)) return '-1'

        // 清除
        map.clearAllTile(map.getLayerByName(args.LAYER))
        // 需要重新绘制一遍
        this.makeDirty()
    }

    tileToPos(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)
        const tilemap = drawable.tileMap
        const x = Math.round(args.X)
        const y = Math.round(args.Y)

        if (args.POSITION == POSITION.X) {
            return ((tilemap.tileSize.x * (x + 1 - tilemap.viewId.x) + tilemap.offset.x) * tilemap.scale.x) + drawable._position[0]
        } else {
            // scratch中Y是反的
            return ((- tilemap.tileSize.y * (y + 1 - tilemap.viewId.y) + tilemap.offset.y) * tilemap.scale.y) + drawable._position[1]
        }
    }
    posToTile(args, util) {
        // 获取 drawable 并检测tilemap是否需要初始化
        const drawable = this.getDrawableInit(util)
        const tilemap = drawable.tileMap

        if (args.POSITION_TILEMAP == POSITION.X) {
            let subX = (drawable._position[0] + tilemap.offset.x * tilemap.scale.x) - args.X
            let tileXOffset = subX / (tilemap.tileSize.x * tilemap.scale.x)
            return tilemap.viewId.x - tileXOffset + 1
        } else {
            // scratch中Y是反的
            let subY = args.Y - (drawable._position[1] + tilemap.offset.y * tilemap.scale.y)
            let tileYOffset = subY / (tilemap.tileSize.y * tilemap.scale.y)
            return tilemap.viewId.y - tileYOffset + 1
        }
    }
    joinTileMap(args, uitl) {
        // 获取 drawable
        const drawable = getDrawable(uitl, this.renderer)

        // 获取要加入的tilemap
        const target = this.renderer._allDrawables[args.TILEMAP]
        // 获取我之前的tilemap
        const parent = drawable.tileMapParent
        if (target === drawable || target === parent) {
            // 我加入我自己，或者加入我的父
            return;
        }
        drawable.skipDraw = false
        drawable.tileMapParent = null
        if (parent && parent.tileMap) {// 如果有就先退出
            parent.tileMap.removeChild(drawable._id)
        }
        if (target && target.tileMap) {
            drawable.skipDraw = true // 设置跳过，不绘制，tilemap来绘制
            drawable.tileMapParent = target // 那么就设置为父
            target.tileMap.addChild(drawable._id) // 并加入
        }
    }
    setLayerInTileMap(args, uitl) {
        // 获取 drawable
        const drawable = getDrawable(uitl, this.renderer)


        const parent = drawable.tileMapParent

        if (parent && parent.tileMap) {// 如果加入了tilemap那就设置否则啥也不干
            const tilemap = parent.tileMap
            const row = range(Math.round(args.ROW) - 1, 0, tilemap.mapSize.y)
            const layer = range(Math.round(args.LAYER) - 1, 0, tilemap.tileLayers.length)
            tilemap.setChildZ(drawable._id, row, layer)
        }
    }
    quitTilemap(args, uitl) {
        const drawable = getDrawable(uitl, this.renderer)
        const parent = drawable.tileMapParent
        if (parent && parent.tileMap) {// 如果有退出
            drawable.skipDraw = false
            drawable.tileMapParent = null
            parent.tileMap.removeChild(drawable._id)
        }
    }


    createTileLayer(args, uitl) {
        const drawable = this.getDrawableInit(uitl)
        drawable.tileMap.createTileLayer(args.LAYER_NAME)
    }
    deleteTileLayer(args, uitl) {
        const drawable = this.getDrawableInit(uitl)
        drawable.tileMap.deleteTileLayer(args.LAYER_NAME)
    }
    getTileLayers(args, uitl) {
        const drawable = this.getDrawableInit(uitl)
        return JSON.stringify(drawable.tileMap.tileLayers)
    }

    makeDirty() {
        this.renderer.dirty = true
        //this.renderer.draw()
    }
    /**
     * 获取drawable并且检测tilemap是否初始化，若未初始化则
     * 初始化
     */
    getDrawableInit(util) {
        const d = getDrawable(util, this.renderer)
        this.initTileMap(d)
        return d
    }
    /**
     * 更具drawable获取tilemap并检测该tile是否存在
     */
    isTileExsit(drawable, args) {
        const size = drawable.tileMap.mapSize
        // scratch转js索引
        return args.X - 1 < size.x && args.Y - 1 < size.y && args.X - 1 >= 0 && args.Y - 1 >= 0
    }
    getSpriteDrawableMenu() {
        const { targets } = this.runtime;

        return targets
            .filter((target) => !target.isStage && target.isOriginal)
            .map((target) => ({
                text: target.sprite.name,
                value: target.drawableID.toString(),
            }));
    }
    /**
     * 获取所有精灵
     */
    drawablesMenu() {
        const menu = this.getSpriteDrawableMenu();
        return menu
    }
}

if (mode === MODE.GANDI_DEV) {
    window.tempExt = {
        Extension: TileMapExt,
        info: {
            name: 'nights.Tilemap.extensionName',
            description: 'nights.Tilemap.description',
            extensionId: 'nightsTilemap',
            // iconURL: icon,
            // insetIconURL: cover,
            featured: true,
            disabled: false,
        },
        l10n: {
            'zh-cn': {
                'nights.Tilemap.extensionName': '瓦片地图',
                'nights.Tilemap.description': '高性能瓦片地图渲染，快有点意思...',
            },
            'en': {
                'nights.Tilemap.extensionName': 'Tilemap',
                'nights.Tilemap.description': 'High-performance tile map rendering, it\'s getting interestingly fast...',
            },
        },
    }
} else if (mode == MODE.TURBOWARP) {
    Scratch.extensions.register(new TileMapExt());
} else if (mode == MODE.GANDI_PRODUCT) {

}

export default TileMapExt