
// round
export function round(floor, x) {
    return floor ? Math.floor(x) : Math.ceil(x)
}

// 分割json，每份chunkSize个
export function splitJSON(jsonObj, chunkSize) {
    const keys = Object.keys(jsonObj);
    const chunks = [];

    for (let i = 0; i < keys.length; i += chunkSize) {
        const chunkKeys = keys.slice(i, i + chunkSize);
        const chunkObj = {};

        for (const key of chunkKeys) {
            chunkObj[key] = jsonObj[key];
        }

        chunks.push(chunkObj);
    }

    return chunks;
}

class TileMap {
    constructor(tileExt) {
        this.tileExt = tileExt
        this.twgl = tileExt.twgl
        this.renderer = tileExt.renderer
        this.gl = tileExt.gl

        this.view = {
            x: 0,
            y: 0
        }
        this.tileSize = {
            x: 0,
            y: 0
        }
        this.mapSize = {
            x: 0,
            y: 0
        }
        // 偏移值
        this.offset = {
            // scratch投影矩阵的缘故
            x: 0,
            y: 0,
        }
        this.scale = {
            x: 0,
            y: 0
        }
        // tile从哪里开始渲染（viewPos从那个tile开始）
        this.viewId = {
            x: 0,
            y: 0,
        }

        this.tileSet = {}

        this.buffer = this.gl.createBuffer()
        this.maxTextureUnits = 1//this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
        // 缓存深度缓冲区数组，记录了一行的深度缓冲区值
        this.depthBufferCache = []
        // 记录子及其数据
        this.children = {}

        this.tileLayers = []
        // 所有tilemapdata数据，每一层的
        this.tileData = []
        this.depthuUnit = 0
        this.createTileLayer("default_layer")
    }

    // TODO:drawable缩放
    // TODO:小数 depthRange
    tileMapRender(tileProgramInfo, twgl, renderer, drawable, projection, drawableScale, drawMode, opts, target) {
        const m4 = twgl.m4
        const gl = renderer._gl // :3

        this.scale = {
            x: drawable._scale[0] / 100,
            y: drawable._scale[1] / 100
        }

        // 获取Tile的宽度和高度
        const tileSize = this.tileSize
        // 获取drawable的位置，就是渲染点
        const viewPos = this.view

        // 要绘制的tile数量

        const drawSize = {
            x: Math.ceil(renderer._nativeSize[0] / (tileSize.x * this.scale.x)) + 2,
            y: Math.ceil(renderer._nativeSize[1] / (tileSize.y * this.scale.y)) + 2,
        }

        // 偏移值
        this.offset = {
            // scratch投影矩阵的缘故
            x: viewPos.x % tileSize.x,
            y: viewPos.y % tileSize.y,
        }
        //(this.offset)
        // tile从哪里开始渲染（viewPos从那个tile开始）
        const viewId = {
            x: round(viewPos.x > 0, viewPos.x / tileSize.x),
            y: round(viewPos.y > 0, viewPos.y / tileSize.y),
        }
        this.viewId = viewId

        // 从offset开始的位置偏移
        const renderOffset = {
            x: 0,
            y: 0
        }
        let attr = []
        let count = 0
        /**
         * tileTextureData用于记录每个tile.texture需要绘制的数据
         */
        // {number:number[]}
        let tilesTextureData = {}
        this.depthBufferCache = []

        const program = tileProgramInfo.program

        // 深度单位，一行tilemap的深度的单位
        this.depthuUnit = 1 / (drawSize.y * this.tileData.length)

        gl.clear(gl.DEPTH_BUFFER_BIT)
        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(gl.LESS)
        gl.useProgram(program)

        const drawLayer = (data, x, y, depth, renderOffset) => {
            const tileId = data[y][x]
            const tile = this.tileSet[tileId]

            if (tile) {
                let textureUnit = Object.keys(tilesTextureData).indexOf(tile.texture.toString())
                if (textureUnit === -1) {
                    // tilesTextureData 还没创建待会才创建
                    textureUnit = Object.keys(tilesTextureData).length
                }
                textureUnit = textureUnit % this.maxTextureUnits


                const offsetX = renderOffset.x + (tile.ox ?? 0)
                const offsetY = renderOffset.y + (tile.oy ?? 0)

                const pos = [
                    [offsetX, offsetY, tile.x, tile.y, textureUnit, depth],
                    [offsetX + tile.w, offsetY, tile.x + tile.w, tile.y, textureUnit, depth],
                    [offsetX + tile.w, offsetY + tile.h, tile.x + tile.w, tile.y + tile.h, textureUnit, depth],
                    [offsetX, offsetY + tile.h, tile.x, tile.y + tile.h, textureUnit, depth]
                ]

                attr.push(
                    ...pos[0],
                    ...pos[1],
                    ...pos[2],

                    ...pos[0],
                    ...pos[2],
                    ...pos[3],

                )
                count += 6
                /**
                 * tileTextureData用于记录每个tile.texture需要绘制的数据
                 */
                if (!tilesTextureData[tile.texture]) {
                    tilesTextureData[tile.texture] = {
                        count: 0,
                        buffer: []
                    }
                }
                tilesTextureData[tile.texture].count += 6
                tilesTextureData[tile.texture].buffer.push(
                    ...pos[0],
                    ...pos[1],
                    ...pos[2],

                    ...pos[0],
                    ...pos[2],
                    ...pos[3],
                )
            }
        }

        // 当前深度缓冲区 step
        let depthStep = 0
        for (let y = viewId.y; y < viewId.y + drawSize.y; y++) {// 从下向上渲染
            renderOffset.x = 0
            //const depth = (y - viewId.y) / drawSize.y

            //this.depthBufferCache.push([])
            for (let x = viewId.x; x < viewId.x + drawSize.x; x++) {
                /*
                每个tile都单独
                0--1
                |\ |
                | \|
                3--2
                */
                // y - viewId.y绘制第一行的时候是0，绘制最后1后的时候是drawSize.y
                if (x > this.mapSize.x - 1 || x < 0 || y < 0 || y > this.mapSize.y - 1) {

                } else {

                    if (!this.isElementExist(this.tileData[0], x, y)) {
                        continue
                    }

                    // 遍历层
                    for (const index in this.tileData) {
                        const layerid = this.tileData.length - index - 1
                        drawLayer(this.tileData[layerid], x, y, depthStep + layerid * this.depthuUnit, renderOffset)
                    }
                }
                renderOffset.x += tileSize.x

            }
            this.depthBufferCache.push(depthStep)
            depthStep += this.depthuUnit * this.tileData.length
            renderOffset.y += tileSize.y
        }
        const modelMatrix = m4.copy(drawable.getUniforms().u_modelMatrix)

        // drawable的矩阵缩放会根据skin大小缩放（比如svgSkin的mip纹理每个skin都不同大小），但是tilemap不需要所以除掉
        const skinSize = drawable.skin.size
        modelMatrix[0] /= -skinSize[0]
        modelMatrix[1] /= -skinSize[0]

        modelMatrix[4] /= skinSize[1]
        modelMatrix[5] /= skinSize[1]

        // 矩阵变换，删除skin中心
        modelMatrix[12] = drawable._position[0];
        modelMatrix[13] = drawable._position[1];

        const offset = m4.translation([-this.offset.x, -this.offset.y, 0]);
        m4.multiply(modelMatrix, offset, modelMatrix);

        const unifrom = {
            // 直接在cpu计算projection与modelMatrix
            u_modelProjectionMatrix: m4.multiply(projection, modelMatrix)
        }
        // 根据硬件支持的最大纹理单元数量自动分割为多次批量渲染
        // 顺序无所谓，因为有深度测试
        const batchDrawData = splitJSON(tilesTextureData, this.maxTextureUnits)

        // 分好了就按照每次的绘制
        for (const dataForDrawCall of batchDrawData) {
            // one drawcall
            let count = 0
            // 该批量绘制用到的顶点缓冲区
            let attributeBuffer = []
            // 该批量渲染用的skin以及skinSize
            let u_skins = []
            let u_skinSizes = []

            for (const costumeId in dataForDrawCall) {
                const data = dataForDrawCall[costumeId]
                count += data.count
                attributeBuffer = attributeBuffer.concat(data.buffer)

                const costumes = target.sprite.costumes[costumeId]
                if (!costumes) {
                    return
                }
                ////(costumes)
                const skinId = costumes.skinId
                const skin = renderer._allSkins[skinId]

                u_skins.push(skin.getTexture([100, 100]))//TODO:修改drawableScale
                u_skinSizes.push(...skin.size)
            }
            Object.assign(unifrom, {
                u_skins, u_skinSizes
            })
            twgl.setUniforms(tileProgramInfo, unifrom)
            this.bindBufferAndDraw(attributeBuffer, count, program, gl)
        }
        // 子的drawableId用于绘制
        let childrenDrawableId = []
        // rowUnit代表每一行有多少深度值
        const rowUnit = this.depthuUnit * this.tileData.length
        for (const drawableId in this.children) {
            childrenDrawableId.push(drawableId)
            // 当前绘制的精灵
            const drawable = renderer._allDrawables[drawableId]
            // 当前绘制精灵的数据（图层数据）
            const data = this.children[drawableId]
            // 行数据
            const colDepth = (data.row - viewId.y) * rowUnit
            // 每一行的图层数据
            const layerDepth = data.layer * this.depthuUnit
            let z = colDepth + layerDepth
            z = Math.min(Math.max(z, 0), 1)
            drawable.specialDrawZ = z
        }
        // 禁止skip，绘制所有子
        renderer._drawThese(childrenDrawableId, drawMode, projection, opts, () => false)
        gl.disable(gl.DEPTH_TEST)
    }

    bindBufferAndDraw(attributeBuffer, count, program, gl) {
        // 根据顶点缓冲区绘制
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(attributeBuffer), gl.DYNAMIC_DRAW)

        // 设置 aposition 属性指针
        var apositionLoc = gl.getAttribLocation(program, "a_position");
        gl.vertexAttribPointer(apositionLoc, 2, gl.FLOAT, false, 4 * 6, 0);
        gl.enableVertexAttribArray(apositionLoc);

        // 设置 atexcoord 属性指针
        var atexcoordLoc = gl.getAttribLocation(program, "a_texcoord");
        gl.vertexAttribPointer(atexcoordLoc, 2, gl.FLOAT, false, 4 * 6, 4 * 2);
        gl.enableVertexAttribArray(atexcoordLoc);

        //设置 atextureid 属性指针
        var atexidLoc = gl.getAttribLocation(program, "a_textureid");
        gl.vertexAttribPointer(atexidLoc, 1, gl.FLOAT, false, 4 * 6, 4 * 4);
        gl.enableVertexAttribArray(atexidLoc);

        // 设置 adepth 属性指针
        var adepthLoc = gl.getAttribLocation(program, "a_depth");
        gl.vertexAttribPointer(adepthLoc, 1, gl.FLOAT, false, 4 * 6, 4 * 5);
        gl.enableVertexAttribArray(adepthLoc);

        gl.drawArrays(gl.TRIANGLES, 0, count)
    }

    setTile(layer, x, y, t) {
        // 设置瓦片
        this.tileData[layer][y][x] = t
    }
    getTile(layer, x, y) {
        // 获取瓦片
        return this.tileData[layer][y][x]
    }
    clearAllTile(layer) {
        // 清空所有瓦片
        const targetLayer = this.tileData[layer]
        for (const y in targetLayer) {
            for (const x in targetLayer[y]) {
                this.setTile(layer, x, y, -1)
            }
        }
    }
    // 重设瓦片地图大小
    setMapSize(w, h) {
        if (w === this.mapSize.x && h === this.mapSize.y) {
            // 大小一样，不修改
            return
        }

        this.mapSize.x = w
        this.mapSize.y = h
        // 修改每一层的

        for (const tileDataIndex in this.tileData) {
            this.tileData[tileDataIndex] = this.create2DArray(w, h, this.tileData[tileDataIndex])
        }
    }
    // 创建一共2d数组，如果有old那就按照old加否则就-1
    create2DArray(w, h, old = []) {
        //TODO:可以检测，如果是比old大的就直接在old上面改，减小开销
        let newArray = []
        for (let y = 0; y < h; y++) {
            let row = []
            for (let x = 0; x < w; x++) {
                // 如果原地图有就用原地图。如果超出了原地图那么就设为-1（空）
                if (y > old.length - 1) {
                    row.push(-1)
                    continue
                }
                // 判断x是否超出
                if (x > old[0].length - 1) {
                    row.push(-1)
                    continue
                }
                // 若没超出
                row.push(old[y][x])
            }
            newArray.push(row)
        }
        return newArray
    }
    deleteTileSet(id) {
        // 删除Tileset
        delete this.tileSet[id]
    }
    createTileSet(id, data) {
        // 设置tileset
        this.tileSet[id] = data
    }
    deleteAllTileSet() {
        // 删除所有tileset
        this.tileSet = {}
    }

    // 创建瓦片层
    createTileLayer(name) {
        if (!this.tileLayers.includes(name)) {
            // 如果是新的，那么根据地图大小创建
            this.tileData[this.tileLayers.length] = this.create2DArray(this.mapSize.x, this.mapSize.y)
            // 加入图层
            this.tileLayers.push(name)
        }
    }
    // 删除瓦片层
    deleteTileLayer(name) {
        if (name == 'default_layer') {
            // 不删除默认层
            return
        }
        let index = this.tileLayers.indexOf(name)
        if (index !== -1) {
            this.tileData.splice(index, 1);
            this.tileLayers.splice(index, 1);
        }
    }

    // 添加精灵到地图
    addChild(drawableId) {
        // 默认值
        this.children[drawableId] = { row: 0, layer: 0 }
    }
    // 从地图删除精灵
    removeChild(drawableId) {
        this.renderer._allDrawables[drawableId].specialDrawZ = null
        delete this.children[drawableId]
    }
    // 设置地图里精灵的Z排序
    setChildZ(drawableId, row, layer) {
        this.children[drawableId] = {
            row: Math.round(row),
            layer: Math.round(layer)
        }
    }

    // uitls
    isLayerExist(layerName) {
        // 检测图层是否存在
        return this.tileLayers.includes(layerName)
    }
    getLayerByName(layerName) {
        // 根据图层名获取图层
        return this.tileLayers.indexOf(layerName)
    }
    isElementExist(arr, x, y) {
        // 检测二维数组中是否存在x，y项
        if (x < arr.length && y < arr[x].length) {
            return true;  // 如果存在，返回 true
        } else {
            return false;  // 如果不存在，返回 false
        }
    }
}

export default TileMap
