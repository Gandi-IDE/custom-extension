var tilemap = function(Scratch2) {
  "use strict";
  const SHOW_MODE = {
    SPRITE: "sprite",
    TILEMAP: "tilemap"
  };
  const POSITION = {
    X: "x",
    Y: "y"
  };
  const translation_map = {
    "zh-cn": {
      "nights.tilemap.name": "瓦片地图",
      "nights.tilemap.show": "设置[SHOW_MODE]",
      "nights.tilemap.setTileSize": "设置瓦片大小 宽:[W]像素 高:[H]像素",
      "nights.tilemap.setMapSize": "设置地图大小 宽:[W]个瓦片 高:[H]个瓦片",
      "nights.tilemap.setTileView": "设置地图摄像机 x:[X] y:[Y]",
      "nights.tilemap.createTileSet": "创建从图片[TEXTURE]的 坐标:[X][Y] 大小:[W][H] 偏移:[OX][OY] 的瓦片命名为[TILE_ID]",
      "nights.tilemap.deleteTileSet": "删除瓦片集名为[TILE_ID]的瓦片",
      "nights.tilemap.deleteAllTileSet": "删除全部瓦片集",
      "nights.tilemap.getAllTileSet": "所有瓦片集",
      "nights.tilemap.getTile": "获取[LAYER]层的瓦片的[X][Y]的瓦片名称",
      "nights.tilemap.setTile": "设置地图中[LAYER]层的[X][Y]瓦片为[TILE_ID]瓦片",
      "nights.tilemap.clearTile": "擦除地图中[LAYER]层的[X][Y]的瓦片",
      "nights.tilemap.clearAllTile": "擦除[LAYER]层",
      "nights.tilemap.createTileLayer": "创建瓦片层，命名为[LAYER_NAME]",
      "nights.tilemap.deleteTileLayer": "删除瓦片层[LAYER_NAME]",
      "nights.tilemap.getTileLayers": "获取所有瓦片层",
      "nights.tilemap.joinTileMap": "加入[TILEMAP]的瓦片地图",
      "nights.tilemap.setLayerInTileMap": "图层(非原版图层)设为地图中的第[LAYER]层第[ROW]行瓦片",
      "nights.tilemap.quitTilemap": "退出当前地图",
      "nights.tilemap.tileToPos": "地图中第X列第Y行的瓦片的[POSITION]坐标",
      "nights.tilemap.posToTile": "位于x:[X]y:[Y]位置的瓦片是在地图中的第几[POSITION_TILEMAP]？",
      "nights.tilemap.basic": "基础操作",
      "nights.tilemap.tileset": "瓦片集合",
      "nights.tilemap.tile": "瓦片操作",
      "nights.tilemap.tilelayer": "瓦片层",
      "nights.tilemap.layer": "图层管理",
      "nights.tilemap.position": "坐标变换",
      "nights.tilemap.showTilemap": "显示精灵以及瓦片地图",
      "nights.tilemap.hideTilemap": "仅显示精灵"
    },
    en: {
      "nights.tilemap.name": "Tilemap",
      "nights.tilemap.show": "Set [SHOW_MODE]",
      "nights.tilemap.setTileSize": "Set tile size, width: [W] pixels, height: [H] pixels",
      "nights.tilemap.setMapSize": "Set map size, width: [W] tiles, height: [H] tiles",
      "nights.tilemap.setTileView": "Set tile camera position, x: [X], y: [Y]",
      "nights.tilemap.createTileSet": "Create a tile named [TILE_ID] from the picture [TEXTURE] with coordinates [X][Y], size [W][H], and offset [OX][OY].",
      "nights.tilemap.deleteTileSet": "Delete tile set named [TILE_ID]",
      "nights.tilemap.deleteAllTileSet": "Delete all tile sets",
      "nights.tilemap.getAllTileSet": "All tile sets",
      "nights.tilemap.getTile": "Get the name of the tile at column [X], row [Y] in layer [LAYER]",
      "nights.tilemap.setTile": "Set tile at column [X], row [Y] in layer [LAYER] to [TILE_ID]",
      "nights.tilemap.clearTile": "Clear tile at column [X], row [Y] in layer [LAYER]",
      "nights.tilemap.clearAllTile": "Clear all tiles in layer [LAYER]",
      "nights.tilemap.createTileLayer": "Create a new tile layer named [LAYER_NAME]",
      "nights.tilemap.deleteTileLayer": "Delete tile layer named [LAYER_NAME]",
      "nights.tilemap.getTileLayers": "Get all tile layers",
      "nights.tilemap.joinTileMap": "Join the tilemap [TILEMAP]",
      "nights.tilemap.setLayerInTileMap": "Set the non-original layer as the [ROW]th row in the [LAYER]th layer of the map",
      "nights.tilemap.quitTilemap": "Exit current map",
      "nights.tilemap.tileToPos": "The tile at column [X], row [Y] in the map has the [POSITION] position.",
      "nights.tilemap.posToTile": "Which [POSITION_TILEMAP] is the tile located at x:[X] y:[Y] in the map?",
      "nights.tilemap.basic": "Basic Operations",
      "nights.tilemap.tileset": "Tilesets",
      "nights.tilemap.tilelayer": "Tile Layer",
      "nights.tilemap.tile": "Tile Operations",
      "nights.tilemap.layer": "Layer Management",
      "nights.tilemap.position": "Coordinate Transformation",
      "nights.tilemap.showTilemap": "Show Sprites and Tilemap",
      "nights.tilemap.hideTilemap": "Show Sprites Only"
    }
  };
  const blockInfo = (Scratch3, mode) => {
    const t = (s) => {
      return Scratch3.translate({ id: s, default: s }) ?? s;
    };
    Scratch3.translate.setup(translation_map);
    const info = {
      id: "nightstilemap",
      name: t("nights.tilemap.name"),
      blocks: [
        {
          blockType: Scratch3.BlockType.LABEL,
          text: t("nights.tilemap.basic")
        },
        {
          opcode: "show",
          blockType: Scratch3.BlockType.COMMAND,
          text: t("nights.tilemap.show"),
          arguments: {
            SHOW_MODE: {
              type: Scratch3.ArgumentType.STRING,
              menu: "SHOW_MODE"
            }
          }
        },
        {
          opcode: "setTileSize",
          text: t("nights.tilemap.setTileSize"),
          blockType: Scratch3.BlockType.COMMAND,
          arguments: {
            W: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            H: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: "setMapSize",
          text: t("nights.tilemap.setMapSize"),
          blockType: Scratch3.BlockType.COMMAND,
          arguments: {
            W: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            H: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: "setTileView",
          text: t("nights.tilemap.setTileView"),
          blockType: Scratch3.BlockType.COMMAND,
          arguments: {
            X: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            Y: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          blockType: Scratch3.BlockType.LABEL,
          text: t("nights.tilemap.tileset")
        },
        {
          opcode: "createTileSet",
          text: t("nights.tilemap.createTileSet"),
          blockType: Scratch3.BlockType.COMMAND,
          arguments: {
            TEXTURE: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            X: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            Y: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            W: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            H: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            OX: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            OY: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            TILE_ID: {
              type: Scratch3.ArgumentType.STRING,
              defaultValue: "草坪"
            }
          }
        },
        {
          opcode: "deleteTileSet",
          text: t("nights.tilemap.deleteTileSet"),
          blockType: Scratch3.BlockType.COMMAND,
          arguments: {
            TILE_ID: {
              type: Scratch3.ArgumentType.STRING,
              defaultValue: "草坪"
            }
          }
        },
        {
          opcode: "deleteAllTileSet",
          text: t("nights.tilemap.deleteAllTileSet"),
          blockType: Scratch3.BlockType.COMMAND
        },
        {
          opcode: "getAllTileSet",
          text: t("nights.tilemap.getAllTileSet"),
          blockType: Scratch3.BlockType.REPORTER
        },
        {
          blockType: Scratch3.BlockType.LABEL,
          text: t("nights.tilemap.tile")
        },
        {
          opcode: "getTile",
          text: t("nights.tilemap.getTile"),
          blockType: Scratch3.BlockType.REPORTER,
          arguments: {
            X: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            Y: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            LAYER: {
              type: Scratch3.ArgumentType.STRING,
              defaultValue: "default_layer"
            }
          }
        },
        {
          opcode: "setTile",
          text: t("nights.tilemap.setTile"),
          blockType: Scratch3.BlockType.COMMAND,
          arguments: {
            X: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            Y: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            TILE_ID: {
              type: Scratch3.ArgumentType.STRING,
              defaultValue: "草坪"
            },
            LAYER: {
              type: Scratch3.ArgumentType.STRING,
              defaultValue: "default_layer"
            }
          }
        },
        {
          opcode: "clearTile",
          text: t("nights.tilemap.clearTile"),
          blockType: Scratch3.BlockType.COMMAND,
          arguments: {
            X: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            Y: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            TILE_ID: {
              type: Scratch3.ArgumentType.STRING,
              defaultValue: "草坪"
            },
            LAYER: {
              type: Scratch3.ArgumentType.STRING,
              defaultValue: "default_layer"
            }
          }
        },
        {
          opcode: "clearAllTile",
          text: t("nights.tilemap.clearAllTile"),
          blockType: Scratch3.BlockType.COMMAND,
          arguments: {
            LAYER: {
              type: Scratch3.ArgumentType.STRING,
              defaultValue: "default_layer"
            }
          }
        },
        {
          blockType: Scratch3.BlockType.LABEL,
          text: t("nights.tilemap.tileLayer")
        },
        {
          opcode: "createTileLayer",
          text: t("nights.tilemap.createTileLayer"),
          blockType: Scratch3.BlockType.COMMAND,
          arguments: {
            LAYER_NAME: {
              type: Scratch3.ArgumentType.STRING,
              defaultValue: "建筑物"
            }
          }
        },
        {
          opcode: "deleteTileLayer",
          text: t("nights.tilemap.deleteTileLayer"),
          blockType: Scratch3.BlockType.COMMAND,
          arguments: {
            LAYER_NAME: {
              type: Scratch3.ArgumentType.STRING,
              defaultValue: "建筑物"
            }
          }
        },
        {
          opcode: "getTileLayers",
          text: t("nights.tilemap.getTileLayers"),
          blockType: Scratch3.BlockType.REPORTER
        },
        {
          blockType: Scratch3.BlockType.LABEL,
          text: t("nights.tilemap.layer")
        },
        {
          opcode: "joinTileMap",
          text: t("nights.tilemap.joinTileMap"),
          blockType: Scratch3.BlockType.COMMAND,
          arguments: {
            TILEMAP: {
              type: Scratch3.ArgumentType.STRING,
              menu: "SPRITE_MENU_WITH_ALL"
            }
          }
        },
        {
          opcode: "setLayerInTileMap",
          text: t("nights.tilemap.setLayerInTileMap"),
          blockType: Scratch3.BlockType.COMMAND,
          arguments: {
            LAYER: {
              type: Scratch3.ArgumentType.NUMBER,
              menu: 0
            },
            ROW: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: "quitTilemap",
          text: t("nights.tilemap.quitTilemap"),
          blockType: Scratch3.BlockType.COMMAND
        },
        {
          blockType: Scratch3.BlockType.LABEL,
          text: t("nights.tilemap.position")
        },
        {
          opcode: "tileToPos",
          text: t("nights.tilemap.tileToPos"),
          blockType: Scratch3.BlockType.REPORTER,
          arguments: {
            X: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            Y: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            POSITION: {
              type: Scratch3.ArgumentType.STRING,
              menu: "POSITION"
            }
          }
        },
        {
          opcode: "posToTile",
          text: t("nights.tilemap.posToTile"),
          blockType: Scratch3.BlockType.REPORTER,
          arguments: {
            X: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            Y: {
              type: Scratch3.ArgumentType.NUMBER,
              defaultValue: 0
            },
            POSITION_TILEMAP: {
              type: Scratch3.ArgumentType.STRING,
              menu: "POSITION_TILEMAP"
            }
          }
        }
      ],
      menus: {
        SHOW_MODE: {
          items: [
            {
              value: SHOW_MODE.TILEMAP,
              text: t("nights.tilemap.showTilemap")
            },
            {
              value: SHOW_MODE.SPRITE,
              text: t("nights.tilemap.hideTilemap")
            }
          ]
        },
        POSITION: {
          items: [
            {
              value: POSITION.X,
              text: t("x")
            },
            {
              value: POSITION.Y,
              text: t("y")
            }
          ]
        },
        POSITION_TILEMAP: {
          items: [
            {
              value: POSITION.X,
              text: t("列")
            },
            {
              value: POSITION.Y,
              text: t("行")
            }
          ]
        },
        SPRITE_MENU_WITH_ALL: {
          acceptReporters: false,
          items: "drawablesMenu"
        }
      },
      translation_map
    };
    return info;
  };
  function round(floor, x) {
    return floor ? Math.floor(x) : Math.ceil(x);
  }
  function splitJSON(jsonObj, chunkSize) {
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
      this.tileExt = tileExt;
      this.twgl = tileExt.twgl;
      this.renderer = tileExt.renderer;
      this.gl = tileExt.gl;
      this.view = {
        x: 0,
        y: 0
      };
      this.tileSize = {
        x: 0,
        y: 0
      };
      this.mapSize = {
        x: 0,
        y: 0
      };
      this.offset = {
        // scratch投影矩阵的缘故
        x: 0,
        y: 0
      };
      this.scale = {
        x: 0,
        y: 0
      };
      this.viewId = {
        x: 0,
        y: 0
      };
      this.tileSet = {};
      this.buffer = this.gl.createBuffer();
      this.maxTextureUnits = 1;
      this.depthBufferCache = [];
      this.children = {};
      this.tileLayers = [];
      this.tileData = [];
      this.depthuUnit = 0;
      this.createTileLayer("default_layer");
    }
    // TODO:drawable缩放
    // TODO:小数 depthRange
    tileMapRender(tileProgramInfo, twgl, renderer, drawable, projection, drawableScale, drawMode, opts, target) {
      const m4 = twgl.m4;
      const gl = renderer._gl;
      this.scale = {
        x: drawable._scale[0] / 100,
        y: drawable._scale[1] / 100
      };
      const tileSize = this.tileSize;
      const viewPos = this.view;
      const drawSize = {
        x: Math.ceil(renderer._nativeSize[0] / (tileSize.x * this.scale.x)) + 2,
        y: Math.ceil(renderer._nativeSize[1] / (tileSize.y * this.scale.y)) + 2
      };
      this.offset = {
        // scratch投影矩阵的缘故
        x: viewPos.x % tileSize.x,
        y: viewPos.y % tileSize.y
      };
      const viewId = {
        x: round(viewPos.x > 0, viewPos.x / tileSize.x),
        y: round(viewPos.y > 0, viewPos.y / tileSize.y)
      };
      this.viewId = viewId;
      const renderOffset = {
        x: 0,
        y: 0
      };
      let tilesTextureData = {};
      this.depthBufferCache = [];
      const program = tileProgramInfo.program;
      this.depthuUnit = 1 / (drawSize.y * this.tileData.length);
      gl.clear(gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LESS);
      gl.useProgram(program);
      const drawLayer = (data, x, y, depth, renderOffset2) => {
        const tileId = data[y][x];
        const tile = this.tileSet[tileId];
        if (tile) {
          let textureUnit = Object.keys(tilesTextureData).indexOf(tile.texture.toString());
          if (textureUnit === -1) {
            textureUnit = Object.keys(tilesTextureData).length;
          }
          textureUnit = textureUnit % this.maxTextureUnits;
          const offsetX = renderOffset2.x + (tile.ox ?? 0);
          const offsetY = renderOffset2.y + (tile.oy ?? 0);
          const pos = [
            [offsetX, offsetY, tile.x, tile.y, textureUnit, depth],
            [offsetX + tile.w, offsetY, tile.x + tile.w, tile.y, textureUnit, depth],
            [offsetX + tile.w, offsetY + tile.h, tile.x + tile.w, tile.y + tile.h, textureUnit, depth],
            [offsetX, offsetY + tile.h, tile.x, tile.y + tile.h, textureUnit, depth]
          ];
          if (!tilesTextureData[tile.texture]) {
            tilesTextureData[tile.texture] = {
              count: 0,
              buffer: []
            };
          }
          tilesTextureData[tile.texture].count += 6;
          tilesTextureData[tile.texture].buffer.push(
            ...pos[0],
            ...pos[1],
            ...pos[2],
            ...pos[0],
            ...pos[2],
            ...pos[3]
          );
        }
      };
      let depthStep = 0;
      for (let y = viewId.y; y < viewId.y + drawSize.y; y++) {
        renderOffset.x = 0;
        for (let x = viewId.x; x < viewId.x + drawSize.x; x++) {
          if (x > this.mapSize.x - 1 || x < 0 || y < 0 || y > this.mapSize.y - 1)
            ;
          else {
            if (!this.isElementExist(this.tileData[0], x, y)) {
              continue;
            }
            for (const index in this.tileData) {
              const layerid = this.tileData.length - index - 1;
              drawLayer(this.tileData[layerid], x, y, depthStep + layerid * this.depthuUnit, renderOffset);
            }
          }
          renderOffset.x += tileSize.x;
        }
        this.depthBufferCache.push(depthStep);
        depthStep += this.depthuUnit * this.tileData.length;
        renderOffset.y += tileSize.y;
      }
      const modelMatrix = m4.copy(drawable.getUniforms().u_modelMatrix);
      const skinSize = drawable.skin.size;
      modelMatrix[0] /= -skinSize[0];
      modelMatrix[1] /= -skinSize[0];
      modelMatrix[4] /= skinSize[1];
      modelMatrix[5] /= skinSize[1];
      modelMatrix[12] = drawable._position[0];
      modelMatrix[13] = drawable._position[1];
      const offset = m4.translation([-this.offset.x, -this.offset.y, 0]);
      m4.multiply(modelMatrix, offset, modelMatrix);
      const unifrom = {
        // 直接在cpu计算projection与modelMatrix
        u_modelProjectionMatrix: m4.multiply(projection, modelMatrix)
      };
      const batchDrawData = splitJSON(tilesTextureData, this.maxTextureUnits);
      for (const dataForDrawCall of batchDrawData) {
        let count = 0;
        let attributeBuffer = [];
        let u_skins = [];
        let u_skinSizes = [];
        for (const costumeId in dataForDrawCall) {
          const data = dataForDrawCall[costumeId];
          count += data.count;
          attributeBuffer = attributeBuffer.concat(data.buffer);
          const costumes = target.sprite.costumes[costumeId];
          if (!costumes) {
            return;
          }
          const skinId = costumes.skinId;
          const skin = renderer._allSkins[skinId];
          u_skins.push(skin.getTexture([100, 100]));
          u_skinSizes.push(...skin.size);
        }
        Object.assign(unifrom, {
          u_skins,
          u_skinSizes
        });
        twgl.setUniforms(tileProgramInfo, unifrom);
        this.bindBufferAndDraw(attributeBuffer, count, program, gl);
      }
      let childrenDrawableId = [];
      const rowUnit = this.depthuUnit * this.tileData.length;
      for (const drawableId in this.children) {
        childrenDrawableId.push(drawableId);
        const drawable2 = renderer._allDrawables[drawableId];
        const data = this.children[drawableId];
        const colDepth = (data.row - viewId.y) * rowUnit;
        const layerDepth = data.layer * this.depthuUnit;
        let z = colDepth + layerDepth;
        z = Math.min(Math.max(z, 0), 1);
        drawable2.specialDrawZ = z;
      }
      renderer._drawThese(childrenDrawableId, drawMode, projection, opts, () => false);
      gl.disable(gl.DEPTH_TEST);
    }
    bindBufferAndDraw(attributeBuffer, count, program, gl) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(attributeBuffer), gl.DYNAMIC_DRAW);
      var apositionLoc = gl.getAttribLocation(program, "a_position");
      gl.vertexAttribPointer(apositionLoc, 2, gl.FLOAT, false, 4 * 6, 0);
      gl.enableVertexAttribArray(apositionLoc);
      var atexcoordLoc = gl.getAttribLocation(program, "a_texcoord");
      gl.vertexAttribPointer(atexcoordLoc, 2, gl.FLOAT, false, 4 * 6, 4 * 2);
      gl.enableVertexAttribArray(atexcoordLoc);
      var atexidLoc = gl.getAttribLocation(program, "a_textureid");
      gl.vertexAttribPointer(atexidLoc, 1, gl.FLOAT, false, 4 * 6, 4 * 4);
      gl.enableVertexAttribArray(atexidLoc);
      var adepthLoc = gl.getAttribLocation(program, "a_depth");
      gl.vertexAttribPointer(adepthLoc, 1, gl.FLOAT, false, 4 * 6, 4 * 5);
      gl.enableVertexAttribArray(adepthLoc);
      gl.drawArrays(gl.TRIANGLES, 0, count);
    }
    setTile(layer, x, y, t) {
      this.tileData[layer][y][x] = t;
    }
    getTile(layer, x, y) {
      return this.tileData[layer][y][x];
    }
    clearAllTile(layer) {
      const targetLayer = this.tileData[layer];
      for (const y in targetLayer) {
        for (const x in targetLayer[y]) {
          this.setTile(layer, x, y, -1);
        }
      }
    }
    // 重设瓦片地图大小
    setMapSize(w, h) {
      if (w === this.mapSize.x && h === this.mapSize.y) {
        return;
      }
      this.mapSize.x = w;
      this.mapSize.y = h;
      for (const tileDataIndex in this.tileData) {
        this.tileData[tileDataIndex] = this.create2DArray(w, h, this.tileData[tileDataIndex]);
      }
    }
    // 创建一共2d数组，如果有old那就按照old加否则就-1
    create2DArray(w, h, old = []) {
      let newArray = [];
      for (let y = 0; y < h; y++) {
        let row = [];
        for (let x = 0; x < w; x++) {
          if (y > old.length - 1) {
            row.push(-1);
            continue;
          }
          if (x > old[0].length - 1) {
            row.push(-1);
            continue;
          }
          row.push(old[y][x]);
        }
        newArray.push(row);
      }
      return newArray;
    }
    deleteTileSet(id) {
      delete this.tileSet[id];
    }
    createTileSet(id, data) {
      this.tileSet[id] = data;
    }
    deleteAllTileSet() {
      this.tileSet = {};
    }
    // 创建瓦片层
    createTileLayer(name) {
      if (!this.tileLayers.includes(name)) {
        this.tileData[this.tileLayers.length] = this.create2DArray(this.mapSize.x, this.mapSize.y);
        this.tileLayers.push(name);
      }
    }
    // 删除瓦片层
    deleteTileLayer(name) {
      if (name == "default_layer") {
        return;
      }
      let index = this.tileLayers.indexOf(name);
      if (index !== -1) {
        this.tileData.splice(index, 1);
        this.tileLayers.splice(index, 1);
      }
    }
    // 添加精灵到地图
    addChild(drawableId) {
      this.children[drawableId] = { row: 0, layer: 0 };
    }
    // 从地图删除精灵
    removeChild(drawableId) {
      this.renderer._allDrawables[drawableId].specialDrawZ = null;
      delete this.children[drawableId];
    }
    // 设置地图里精灵的Z排序
    setChildZ(drawableId, row, layer) {
      this.children[drawableId] = {
        row: Math.round(row),
        layer: Math.round(layer)
      };
    }
    // uitls
    isLayerExist(layerName) {
      return this.tileLayers.includes(layerName);
    }
    getLayerByName(layerName) {
      return this.tileLayers.indexOf(layerName);
    }
    isElementExist(arr, x, y) {
      if (x < arr.length && y < arr[x].length) {
        return true;
      } else {
        return false;
      }
    }
  }
  const vs = "// 位置\r\nattribute vec2 a_position;\r\n// 纹理位置\r\nattribute vec2 a_texcoord;\r\n// 获取u_skinSizes的索引\r\nattribute float a_textureid;\r\n// 深度测试\r\nattribute float a_depth;\r\n// 投影矩阵*模型矩阵\r\nuniform mat4 u_modelProjectionMatrix;\r\n// 根据硬件支持的最大纹理批量绘制\r\nuniform vec2 u_skinSizes[SKIN_NUM];\r\n\r\nvarying vec2 v_texcoord;\r\nvarying float v_textureid;\r\n\r\nvoid main() {\r\n    // 转为int\r\n    int textureid = int(a_textureid);\r\n    gl_Position = u_modelProjectionMatrix * vec4(a_position, a_depth, 1.0);\r\n    v_texcoord = a_texcoord / u_skinSizes[textureid];\r\n    v_textureid = a_textureid;\r\n}";
  const fs = "precision mediump float;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying float v_textureid;\r\n\r\nuniform sampler2D u_skins[SKIN_NUM];\r\n\r\nvoid main() {\r\n    int textureid = int(v_textureid);\r\n    vec4 color;\r\n    COLOR_IF_GET\r\n    if (color.a == 0.0) discard;\r\n    gl_FragColor = color;\r\n}";
  function getDrawable(util, renderer) {
    const drawableId = util.target.drawableID;
    return renderer._allDrawables[drawableId];
  }
  function range(x, min, max) {
    return Math.max(Math.min(x, max), min);
  }
  class TileMapExt {
    constructor(runtime) {
      this.runtime = runtime ?? Scratch2.vm.runtime;
      this.renderer = this.runtime.renderer;
      this.twgl = this.renderer.exports.twgl;
      this.gl = this.renderer.gl;
      this.originalDrawThese = this.renderer._drawThese;
      this.renderer._drawThese = (..._arguments) => {
        this.drawThese.call(this.renderer, ..._arguments);
      };
      this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
      this.createTileMapProgramInfo();
    }
    createTileMapProgramInfo() {
      var fscode = fs.replaceAll("SKIN_NUM", this.maxTextureUnits);
      let color_if = "";
      for (let index = 0; index < this.maxTextureUnits; index++) {
        color_if += `if(textureid==${index}){color = texture2D(u_skins[${index}], v_texcoord);}`;
        if (index != this.maxTextureUnits - 1) {
          color_if += "else ";
        }
      }
      fscode = fscode.replaceAll("COLOR_IF_GET", color_if);
      this.tileProgramInfo = this.twgl.createProgramInfo(this.gl, [
        vs.replaceAll("SKIN_NUM", this.maxTextureUnits),
        fscode
      ]);
    }
    // 修改scratch-render webglrender的_drawThese函数
    // 我修改的地方都标注了 ”By: Nights“  filterSkip
    drawThese(drawables, drawMode, projection, opts = {}, filterSkip) {
      const gl = this._gl;
      const allowSpecialDraw = projection == this._projection && drawMode == "default";
      let currentShader = null;
      const framebufferSpaceScaleDiffers = "framebufferWidth" in opts && "framebufferHeight" in opts && opts.framebufferWidth !== this._nativeSize[0] && opts.framebufferHeight !== this._nativeSize[1];
      const numDrawables = drawables.length;
      for (let drawableIndex = 0; drawableIndex < numDrawables; ++drawableIndex) {
        const drawableID = drawables[drawableIndex];
        const twgl = this.exports.twgl;
        if (opts.filter && !opts.filter(drawableID))
          continue;
        const drawable = this._allDrawables[drawableID];
        if (!drawable.getVisible() && !opts.ignoreVisibility)
          continue;
        const drawableScale = framebufferSpaceScaleDiffers ? [
          drawable.scale[0] * opts.framebufferWidth / this._nativeSize[0],
          drawable.scale[1] * opts.framebufferHeight / this._nativeSize[1]
        ] : drawable.scale;
        if (!drawable.skin || !drawable.skin.getTexture(drawableScale))
          continue;
        if (opts.skipPrivateSkins && drawable.skin.private)
          continue;
        if (allowSpecialDraw && drawable.skipDraw && (!filterSkip || filterSkip(drawable))) {
          continue;
        }
        if (drawable.specialDraw) {
          if (allowSpecialDraw) {
            this._doExitDrawRegion();
            drawable.specialDraw(projection, drawableScale, drawMode, opts);
            this._regionId = null;
          }
        }
        const uniforms = {};
        let effectBits = drawable.enabledEffects;
        effectBits &= Object.prototype.hasOwnProperty.call(opts, "effectMask") ? opts.effectMask : effectBits;
        const newShader = this._shaderManager.getShader(drawMode, effectBits);
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
        Object.assign(
          uniforms,
          drawable.skin.getUniforms(drawableScale),
          drawable.getUniforms()
        );
        if (opts.extraUniforms) {
          Object.assign(uniforms, opts.extraUniforms);
        }
        if (drawable.specialDrawZ) {
          uniforms.u_modelMatrix[14] = drawable.specialDrawZ;
        }
        if (uniforms.u_skin) {
          twgl.setTextureParameters(
            gl,
            uniforms.u_skin,
            {
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
      return blockInfo(Scratch2);
    }
    initTileMap(drawable) {
      if (!drawable.tileMap) {
        drawable.skipDraw = false;
        drawable.specialDrawZ = null;
        drawable.tileMap = new TileMap(this);
      }
    }
    show(args, util) {
      const drawable = this.getDrawableInit(util);
      if (args.SHOW_MODE == SHOW_MODE.SPRITE) {
        drawable.specialDraw = null;
      } else {
        drawable.specialDraw = (projection, drawableScale, drawMode, opts) => {
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
          );
        };
      }
      this.makeDirty();
    }
    setTileSize(args, util) {
      const drawable = this.getDrawableInit(util);
      drawable.tileMap.tileSize = {
        x: Math.max(args.W, 0),
        y: Math.max(args.H, 0)
      };
      this.makeDirty();
    }
    setMapSize(args, util) {
      const drawable = this.getDrawableInit(util);
      drawable.tileMap.setMapSize(args.W, args.H);
      this.makeDirty();
    }
    setTileView(args, util) {
      const drawable = this.getDrawableInit(util);
      drawable.tileMap.view = {
        x: args.X,
        y: args.Y
      };
      this.makeDirty();
    }
    createTileSet(args, util) {
      const drawable = this.getDrawableInit(util);
      drawable.tileMap.createTileSet(args.TILE_ID, {
        texture: args.TEXTURE,
        x: args.X,
        // pos
        y: args.Y,
        w: args.W,
        // size
        h: args.H,
        ox: args.OX,
        // offset
        oy: args.OY
      });
    }
    deleteTileSet(args, util) {
      const drawable = this.getDrawableInit(util);
      if (drawable.tileMap.tileSet[args.TILE_ID]) {
        drawable.tileMap.deleteTileSet(args.TILE_ID);
      }
    }
    deleteAllTileSet(args, util) {
      const drawable = this.getDrawableInit(util);
      drawable.tileMap.deleteAllTileSet();
    }
    getAllTileSet(args, util) {
      const drawable = this.getDrawableInit(util);
      return JSON.stringify(drawable.tileMap.tileSet);
    }
    getTile(args, util) {
      const drawable = this.getDrawableInit(util);
      const map = drawable.tileMap;
      if (!this.isTileExsit(drawable, args))
        return "-1";
      if (!map.isLayerExist(args.LAYER))
        return "-1";
      const x = Math.round(args.X) - 1;
      const y = Math.round(args.Y) - 1;
      return map.getTile(map.getLayerByName(args.LAYER), x, y);
    }
    setTile(args, util) {
      const drawable = this.getDrawableInit(util);
      const map = drawable.tileMap;
      if (!this.isTileExsit(drawable, args))
        return;
      if (!map.isLayerExist(args.LAYER))
        return;
      const x = Math.round(args.X) - 1;
      const y = Math.round(args.Y) - 1;
      map.setTile(map.getLayerByName(args.LAYER), x, y, args.TILE_ID);
      this.makeDirty();
    }
    clearTile(args, util) {
      const drawable = this.getDrawableInit(util);
      const map = drawable.tileMap;
      if (!this.isTileExsit(drawable, args))
        return "-1";
      if (!map.isLayerExist(args.LAYER))
        return "-1";
      const x = Math.round(args.X) - 1;
      const y = Math.round(args.Y) - 1;
      map.setTile(map.getLayerByName(args.LAYER), x, y, -1);
      this.makeDirty();
    }
    clearAllTile(args, util) {
      const drawable = this.getDrawableInit(util);
      const map = drawable.tileMap;
      if (!map.isLayerExist(args.LAYER))
        return "-1";
      map.clearAllTile(map.getLayerByName(args.LAYER));
      this.makeDirty();
    }
    tileToPos(args, util) {
      const drawable = this.getDrawableInit(util);
      const tilemap2 = drawable.tileMap;
      const x = Math.round(args.X);
      const y = Math.round(args.Y);
      if (args.POSITION == POSITION.X) {
        return (tilemap2.tileSize.x * (x + 1 - tilemap2.viewId.x) + tilemap2.offset.x) * tilemap2.scale.x + drawable._position[0];
      } else {
        return (-tilemap2.tileSize.y * (y + 1 - tilemap2.viewId.y) + tilemap2.offset.y) * tilemap2.scale.y + drawable._position[1];
      }
    }
    posToTile(args, util) {
      const drawable = this.getDrawableInit(util);
      const tilemap2 = drawable.tileMap;
      if (args.POSITION_TILEMAP == POSITION.X) {
        let subX = drawable._position[0] + tilemap2.offset.x * tilemap2.scale.x - args.X;
        let tileXOffset = subX / (tilemap2.tileSize.x * tilemap2.scale.x);
        return tilemap2.viewId.x - tileXOffset + 1;
      } else {
        let subY = args.Y - (drawable._position[1] + tilemap2.offset.y * tilemap2.scale.y);
        let tileYOffset = subY / (tilemap2.tileSize.y * tilemap2.scale.y);
        return tilemap2.viewId.y - tileYOffset + 1;
      }
    }
    joinTileMap(args, uitl) {
      const drawable = getDrawable(uitl, this.renderer);
      const target = this.renderer._allDrawables[args.TILEMAP];
      const parent = drawable.tileMapParent;
      if (target === drawable || target === parent) {
        return;
      }
      drawable.skipDraw = false;
      drawable.tileMapParent = null;
      if (parent && parent.tileMap) {
        parent.tileMap.removeChild(drawable._id);
      }
      if (target && target.tileMap) {
        drawable.skipDraw = true;
        drawable.tileMapParent = target;
        target.tileMap.addChild(drawable._id);
      }
    }
    setLayerInTileMap(args, uitl) {
      const drawable = getDrawable(uitl, this.renderer);
      const parent = drawable.tileMapParent;
      if (parent && parent.tileMap) {
        const tilemap2 = parent.tileMap;
        const row = range(Math.round(args.ROW) - 1, 0, tilemap2.mapSize.y);
        const layer = range(Math.round(args.LAYER) - 1, 0, tilemap2.tileLayers.length);
        tilemap2.setChildZ(drawable._id, row, layer);
      }
    }
    quitTilemap(args, uitl) {
      const drawable = getDrawable(uitl, this.renderer);
      const parent = drawable.tileMapParent;
      if (parent && parent.tileMap) {
        drawable.skipDraw = false;
        drawable.tileMapParent = null;
        parent.tileMap.removeChild(drawable._id);
      }
    }
    createTileLayer(args, uitl) {
      const drawable = this.getDrawableInit(uitl);
      drawable.tileMap.createTileLayer(args.LAYER_NAME);
    }
    deleteTileLayer(args, uitl) {
      const drawable = this.getDrawableInit(uitl);
      drawable.tileMap.deleteTileLayer(args.LAYER_NAME);
    }
    getTileLayers(args, uitl) {
      const drawable = this.getDrawableInit(uitl);
      return JSON.stringify(drawable.tileMap.tileLayers);
    }
    makeDirty() {
      this.renderer.dirty = true;
    }
    /**
     * 获取drawable并且检测tilemap是否初始化，若未初始化则
     * 初始化
     */
    getDrawableInit(util) {
      const d = getDrawable(util, this.renderer);
      this.initTileMap(d);
      return d;
    }
    /**
     * 更具drawable获取tilemap并检测该tile是否存在
     */
    isTileExsit(drawable, args) {
      const size = drawable.tileMap.mapSize;
      return args.X - 1 < size.x && args.Y - 1 < size.y && args.X - 1 >= 0 && args.Y - 1 >= 0;
    }
    getSpriteDrawableMenu() {
      const { targets } = this.runtime;
      return targets.filter((target) => !target.isStage && target.isOriginal).map((target) => ({
        text: target.sprite.name,
        value: target.drawableID.toString()
      }));
    }
    /**
     * 获取所有精灵
     */
    drawablesMenu() {
      const menu = this.getSpriteDrawableMenu();
      return menu;
    }
  }
  return TileMapExt;
}(Scratch);
