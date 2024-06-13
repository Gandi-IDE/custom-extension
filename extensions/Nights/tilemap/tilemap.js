
// Tilemap
(function (Scratch$1) {
  'use strict';

  const SHOW_MODE = {
    SHOW: "sprite",
    HIDE: "tilemap",
  };

  const MAP_MODE = {
    SQUARE: "orthogonal",
    ISOMETRIC: "equidistance",
  };

  const ROUND_TYEP = {
    FLOOR: 0,
    CEIL: 1,
  };

  const POS_ATT = {
    X: "x",
    Y: "y",
  };

  const SCRATCH_TYPE = {
    GANDI: "gandi", // gandi 的 scratch-render 有些特殊需要改一下
    TURBOWARP: "turbowarp",
  };

  const SCRATCH_BUILD_TYPE = SCRATCH_TYPE.GANDI;

  const createBuffer = (gl, bufferType, size, usage) => {
    let buffer = gl.createBuffer();
    gl.bindBuffer(bufferType, buffer);
    gl.bufferData(bufferType, size, usage);
    return buffer;
  };

  const getCallerInfo = (u) => {
    return {
      target: u.target,
      sprite: u.target.sprite,
      drawable: u.runtime.renderer._allDrawables[u.target.drawableID],
    };
  };

  const getSkinByName = (u, name) => {
    const skinId = u.target.sprite.costumes_.filter((obj) => obj.name === name)[0]
      .skinId;
    const skin = u.runtime.renderer._allSkins[skinId];
    return skin;
  };
  const coalesce = (value, defaultValue) => {
    // 数值可能是Nan时用来代替 ??
    return Number.isNaN(value) || value === undefined || value === null
      ? defaultValue
      : value;
  };
  const range = (v, min, max) => {
    return Math.max(min, Math.min(v, max));
  };

  const getPosFromScratch = (args) => {
    return {
      x: floorNum(args.POS_X) - 1,
      y: floorNum(args.POS_Y) - 1,
    };
  };

  const floorNum = (v) => {
    return Math.floor(Scratch$1.Cast.toNumber(v));
  };

  const round = (num, type) => {
    const f = num > 0 ? 1 : -1;
    switch (type) {
      case ROUND_TYEP.CEIL:
        return Math.ceil(Math.abs(num)) * f;
      case ROUND_TYEP.FLOOR:
        return Math.floor(Math.abs(num)) * f;
      default:
        throw new Error(`Unknown rounding type ${type}`);
    }
  };

  /**
   * 不用twgl.m4.transformPoint开销过大，只需要加工X,Y基向量+平移即可！
   */
  const transformPoint = (m, v) => {
    const dst = [];
    var v0 = v[0];
    var v1 = v[1];
    dst[0] = v0 * m[0] + v1 * m[4] + m[12];
    dst[1] = v0 * m[1] + v1 * m[5] + m[13];
    return dst;
  };

  const htmlColorToUint32Color = (color) => {
    let hex = color.replace("#", "");
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    let num = parseInt(hex, 16);
    let r = (num >> 16) & 255;
    let g = (num >> 8) & 255;
    let b = num & 255;
    let a = 255;

    return (a << 24) | (r << 16) | (g << 8) | b;
  };

  const MAX_SIZE = 3000;

  class TilemapData {
    constructor() {
      this._data = new Uint32Array(); // 使用紧凑数组读取效率更高，占内存更少
      this._size = { x: 0, y: 0 };
      this.resize(10, 10);
    }
    resize(x, y) {
      let newSize = {
        x: this._constraintSize(x),
        y: this._constraintSize(y),
      };
      if (newSize.x == this._size.x && newSize.y == this._size.y) {
        // 新大小与原本大小一样，不修改
        return;
      }

      const newData = new Uint32Array(newSize.x * newSize.y);
      for (let x = 0; x < newSize.x; x++) {
        for (let y = 0; y < newSize.y; y++) {
          // 将新的地图数据设为和之前一样的数据
          newData[x + y * newSize.x] = this._data[x + y * this._size.x] ?? 0;
          // 若新的那么就为-1（放大，0代表空）
        }
      }
      this._size = newSize;
      this._data = newData;
    }
    clearTileData() {
      const size = this._size;
      for (let x = 0; x < size.x; x++) {
        for (let y = 0; y < size.y; y++) {
          this._data[x + y * size.x] = 0;
        }
      }
    }
    _posInMap(x, y, size = this._size) {
      if (x < 0 || x > size.x - 1 || y < 0 || y > size.y - 1) {
        return false;
      }
      return true;
    }
    getData(pos) {
      if (!this._posInMap(pos.x, pos.y)) return false;
      return this._data[pos.x + pos.y * this._size.x];
    }
    setData(pos, v) {
      if (!this._posInMap(pos.x, pos.y)) return false;
      this._autoResize(pos.x, pos.y);
      this._data[pos.x + pos.y * this._size.x] = v;
    }
    _autoResize(x, y) {
      // 多增加 25 防止频繁修改大小
      if (x > this._size.x && y > this._size.y) {
        this.resize(x + 25, y + 25);
      } else if (y > this._size.y) {
        this.resize(x, y + 25);
      } else if (x > this._size.x) {
        this.resize(x + 25, y);
      }
    }
    _constraintSize(num) {
      return range(num, 0, MAX_SIZE);
    }
  }

  const ZERO_VEC2 = { x: 0, y: 0 };

  class Tilemap {
    constructor(app, drawable, tilemapName) {
      this.app = app;
      /** @type {TilemapRender} */
      this.render = app.render;

      this.camera = ZERO_VEC2; // 摄像机
      this.offset = ZERO_VEC2; // 坐标偏移
      this.name = tilemapName;
      this.tileStart = ZERO_VEC2; // 瓦片开始绘制的索引
      this.tileSize = ZERO_VEC2; // 瓦片大小
      this.retlTileSize = ZERO_VEC2;
      this.scale = ZERO_VEC2;
      // 绘制几个瓦片
      this.drawTileNum = ZERO_VEC2;

      this.tilesetName = null;
      this.mapData = new TilemapData();
      this.layer = 0;
      this.mode = MAP_MODE.SQUARE;
      this.drawable = drawable;
      this.members = new Set();
      this.show = true;

      this.currentTileset = null;
    }
    get tileset() {
      return this.app.tilesets.get(this.tilesetName);
    }
    calculation() {
      const m4 = this.render.twgl.m4;
      const drawable = this.drawable;
      switch (this.mode) {
        case MAP_MODE.ISOMETRIC:
          this.tileSize.y = Math.round(this.retlTileSize.y / 2);
          break;
        case MAP_MODE.SQUARE:
          this.tileSize.y = this.retlTileSize.y;
          break;
        default:
          throw new Error(`Unknown map mode ${this.mode}`);
      }
      this.tileSize.x = this.retlTileSize.x;
      this.nativeSize = this.app.renderer._nativeSize;
      this.scale = {
        x: drawable._scale[0] / 100,
        y: drawable._scale[1] / 100,
      };
      this.camera = {
        x:
          Math.ceil(drawable._position[0] + this.nativeSize[0] / 2) /
          this.scale.x,
        y:
          Math.ceil(drawable._position[1] - this.nativeSize[1] / 2) /
          this.scale.y,
      };
      this.offset = {
        x: this.camera.x % this.tileSize.x,
        y: this.camera.y % this.tileSize.y,
      };
      this.tileStart = {
        x: -round(this.camera.x / this.tileSize.x, ROUND_TYEP.FLOOR),
        y: round(this.camera.y / this.tileSize.y, ROUND_TYEP.FLOOR),
      };
      this.drawTileNum = {
        x: Math.ceil(this.nativeSize[0] / (this.tileSize.x * this.scale.x)) + 1,
        y: Math.ceil(this.nativeSize[1] / (this.tileSize.y * this.scale.y)) + 1,
      };
      this.haflDrawNum = {
        x: Math.ceil(this.drawTileNum.x / 2),
        y: Math.ceil(this.drawTileNum.y / 2),
      };
      const model = m4.identity();
      m4.translate(
        model,
        [-this.nativeSize[0] / 2, this.nativeSize[1] / 2, 0],
        model
      );
      m4.scale(model, [this.scale.x, this.scale.y, 1], model);
      m4.translate(model, [this.offset.x, this.offset.y, 0], model);
      this.render.setModel(model);
    }
    calculationMembers() {
      const sort = {};
      this.members.forEach((drawable) => {
        if (this.app.renderer._drawList.includes(drawable._id)) {
          const layer = drawable.tilemapData.sort;
          if (!sort[layer]) sort[layer] = [];
          sort[layer].push(drawable);
        } else {
          // 加入tilemap的 drawable 被删除
          this.members.delete(drawable);
        }
      });
      return sort;
    }
    draw() {
      if (!this.show || !this.tileset) return;
      this.currentTileset = this.tileset;
      this.calculation();
      const toRenderMembers = this.calculationMembers();

      const stepOffset = { x: 0, y: 0 };

      stepOffset.y = this.drawTileNum.y * this.tileSize.y;
      for (let y = -this.drawTileNum.y; y < this.drawTileNum.y * 2; y++) {
        this.drawRow(
          y,
          stepOffset,
          toRenderMembers,
          y < 0 || y > this.drawTileNum.y
        );
      }
    }
    // 需要考察中心出屏幕边界的是否在屏幕里面
    drawRow(y, stepOffset, toRenderMembers, beyondRendering) {
      let equOffset = 0;
      if (this.mode == MAP_MODE.ISOMETRIC && y % 2 != 0) {
        equOffset += Math.round(this.tileSize.x / 2);
      }
      stepOffset.x = -this.tileSize.x * this.drawTileNum.x;
      for (let x = -this.drawTileNum.x; x < this.drawTileNum.x * 2; x++) {
        this.drawTile(
          equOffset + stepOffset.x,
          stepOffset.y,
          this.tileStart.x + x,
          this.tileStart.y + y,
          (x < 0 || x > this.drawTileNum.x) && beyondRendering
        );
        stepOffset.x += this.tileSize.x;
      }
      this.render.drawMembers(this.tileStart.y + y, toRenderMembers);
      stepOffset.y -= this.tileSize.y;
    }

    update(opt) {
      this.retlTileSize = {
        x: range(opt.tileSize.x, 0, 1024),
        y: range(opt.tileSize.y, 0, 1024),
      };
      this.layer = range(opt.layer, 0, Infinity);
      this.tilesetName = opt.tilesetName;
      this.mode = opt.mode;
    }
    /**
     * 绘制一个tile
     * @param {Number} offsetX 位置偏移
     * @param {Number} offsetY 位置偏移
     * @param {Number} x 数据索引
     * @param {Number} y 数据索引
     */
    drawTile(offsetX, offsetY, x, y, beyondRendering) {
      const id = this.mapData.getData({ x, y });
      if (!id) return;
      /** @type {TileData} */
      const tileData = this.currentTileset.mapping.get(id);
      if (!tileData) return; // 呗删掉的tileset

      const rof = tileData.isClip ? [0, 0] : tileData.skin._rotationCenter;

      if (beyondRendering) {
        const X = (offsetX - rof[1]) * this.scale.x - tileData.offset.y;
        if (X > this.nativeSize[0]) {
          return;
        }
        if (X + tileData.width < 0) {
          return;
        }
        const Y = (offsetY + rof[1]) * this.scale.y - tileData.offset.y;
        if (Y + tileData.height < -this.nativeSize[1]) {
          return;
        }
        if (Y > 0) {
          return;
        }
      }
      const clip = tileData.clip;
      const texture = tileData.getTexture([
        this.scale.x * clip.width,
        this.scale.y * clip.height,
      ]);

      this.render.addTile(
        texture,
        tileData.width,
        tileData.height,
        clip.x,
        clip.y,
        clip.width,
        clip.height,
        offsetX - rof[0],
        offsetY + rof[1],
        tileData.color,
        tileData.matrix
      );
    }
    destory() {
      const tileData = this.drawable.tilemapData;
      if (tileData) {
        delete tileData.tilemaps[this.name];
      }
    }
    getTileData(pos) {
      if (!this.tileset) return;
      const data = this.mapData.getData(pos);
      if (!data) return;
      return this.tileset.mapping.get(data);
    }
    setTileData(pos, tileName) {
      if (tileName === "0") {
        this.mapData.setData(pos, 0);
        return;
      }
      if (!this.tileset) return;
      const data = this.tileset.nameMapping.get(tileName);
      if (data === undefined) return; // data 可能为 0
      this.mapData.setData(pos, data);
    }
    mapToPos(x, y) {
      const drawable = this.drawable;
      return {
        x: x * (this.retlTileSize.x * this.scale.x) + drawable._position[0],
        y: drawable._position[1] - y * (this.retlTileSize.y * this.scale.y),
      };
    }
    posToMap(x, y) {
      const drawable = this.drawable;
      return {
        x: (x - drawable._position[0]) / (this.retlTileSize.x * this.scale.x),
        y: (drawable._position[1] - y) / (this.retlTileSize.y * this.scale.y),
      };
    }
    clearTileData() {
      this.mapData.clearTileData();
    }
  }

  var fragString = "precision lowp float;\r\nuniform sampler2D uTextures[%TEXTURE_NUM%];\r\n\r\nvarying vec2 vRegion;\r\nvarying float vTextureId;\r\nvarying vec4 vColor;\r\n\r\nvoid main(void) {\r\n    vec4 color;\r\n    %GET_COLOR%\r\n    gl_FragColor = color * vColor;\r\n}";

  var vertString = "precision lowp float;\r\n\r\nattribute vec2 aPosition;\r\nattribute vec2 aRegion;\r\nattribute float aTextureId;\r\nattribute vec4 aColor;\r\n\r\nuniform mat4 uProjectionModel;\r\n\r\nvarying vec2 vRegion;\r\nvarying float vTextureId;\r\nvarying vec4 vColor;\r\n\r\nvoid main(void) {\r\n    vRegion = aRegion;\r\n    vTextureId = aTextureId;\r\n    vColor = aColor;\r\n    gl_Position = uProjectionModel * vec4(aPosition, 0.0, 1.0);\r\n}";

  const generateFragShader = (fs, max) => {
    let code = "";
    fs = fs.replace("%TEXTURE_NUM%", max.toString());

    for (let index = 0; index < max; index++) {
      if (index == 0) {
        code += `if(vTextureId == ${index}.0)`;
      } else if (index == max - 1) {
        code += `else`;
      } else {
        code += `else if(vTextureId == ${index}.0)`;
      }
      code += `{color = texture2D(uTextures[${index}], vRegion);}`;
    }
    fs = fs.replace("%GET_COLOR%", code);

    return fs;
  };

  const createProgramInfo = (gl, twgl, max) => {
    return twgl.createProgramInfo(gl, [
      vertString,
      generateFragShader(fragString, max),
    ]).program;
  };

  const VERTEX_PER_TILE = 4;
  const INDEX_PER_TILE = 6;
  //                       aPosition  aRegion   aTextureId  aColor
  const BYTES_PER_VERTEX = 4 * 2 + 4 * 2 + 4 + 4;
  const FLOAT32_PER_TILE =
    (VERTEX_PER_TILE * BYTES_PER_VERTEX) / Float32Array.BYTES_PER_ELEMENT;
  // 不多创建一个drawable，节省内存
  const drawableAttribute = {
    enabledEffects: false,
    _direction: 90,
  };

  class TilemapRender {
    constructor(runtime) {
      this._render = runtime.renderer;

      this.twgl = this._render.exports.twgl;
      /**@type {WebGLRenderingContext} */
      this._gl = this._render.gl;

      this.MAX_TEXTURE_UNITS = this._gl.getParameter(
        this._gl.MAX_TEXTURE_IMAGE_UNITS
      );
      this.MAX_BATCH = Math.floor(2 ** 16 / 6);
      this.TEXTURES_UNIT_ARRAY = Array.from(
        { length: this.MAX_TEXTURE_UNITS },
        (_, index) => index
      );
      // 待传入GPU的数量
      this.count = 0;

      const gl = this._gl;
      this._program = createProgramInfo(gl, this.twgl, this.MAX_TEXTURE_UNITS);

      this._vertexData = new ArrayBuffer(
        BYTES_PER_VERTEX * VERTEX_PER_TILE * this.MAX_BATCH
      );
      this._indexData = new Uint16Array(INDEX_PER_TILE * this.MAX_BATCH);

      this._projectionModel = this.twgl.m4.identity();

      this._typedVertexFloat = new Float32Array(this._vertexData);
      this._typedVertexUint = new Uint32Array(this._vertexData);
      this._usedVertexData = 0;
      // TODO:useage

      this._indexBufferObject = createBuffer(
        gl,
        gl.ELEMENT_ARRAY_BUFFER,
        this._indexData.byteLength,
        gl.STATIC_DRAW
      );
      this._vertexBufferObject = createBuffer(
        gl,
        gl.ARRAY_BUFFER,
        this._vertexData.byteLength,
        gl.STATIC_DRAW
      );
      gl.useProgram(this._program);
      gl.uniform1iv(
        gl.getUniformLocation(this._program, "uTextures"),
        this.TEXTURES_UNIT_ARRAY
      );
      this._initIndexBuffer();
      this._usedTextures = [];
      this._needBind = new Set();

      this.modelMatrix = this.twgl.m4.identity();
      this.projectionLoc = gl.getUniformLocation(
        this._program,
        "uProjectionModel"
      );
    }
    startRegion(opts) {
      this.opts = opts;
      // const gl = this.renderer.gl
      // gl.enable(gl.SCISSOR_TEST);
      // gl.scissor(0, 0, gl.canvas.width, gl.canvas.height);

      const gl = this._gl;
      this.twgl.bindFramebufferInfo(gl, null);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBufferObject);
      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBufferObject);
      //this.twgl.bindFramebufferInfo(gl, null);
      const projection = this.twgl.m4.multiply(
        this._render._projection,
        this.modelMatrix
      );
      // scratch 不开启 SCISSOR_TEST **可能**是因为碰撞像素 》 CPU最大橡树时，会启用，裁剪了就没用了
      // gl.enable(gl.SCISSOR_TEST);
      // gl.scissor(0, 0, gl.canvas.width, gl.canvas.height);
      //gl.disable(gl.DEPTH_TEST)
      gl.useProgram(this._program);
      this._initVertexAttribute();
      gl.uniformMatrix4fv(this.projectionLoc, false, projection);

      this._afterFlush();
    }
    setModel(modelMatrix) {
      const gl = this._gl;
      const projection = this._render._projection;
      this.modelMatrix = this.twgl.m4.copy(modelMatrix);
      this.twgl.m4.multiply(projection, modelMatrix, modelMatrix);
      gl.uniformMatrix4fv(this.projectionLoc, false, modelMatrix);
    }
    exitRegion() {
      // const gl = this._gl
      // gl.disable(gl.SCISSOR_TEST);
    }
    _useTexture(texture) {
      let textureUnit = this._usedTextures.indexOf(texture);
      if (textureUnit === -1) {
        this._usedTextures.push(texture);
        textureUnit = this._usedTextures.length - 1;
        this._needBind.add(textureUnit);
      }
      return textureUnit;
    }
    _pushToVertexFloat(n) {
      this._typedVertexFloat[this._usedVertexData++] = n;
    }
    _pushToVertexUint(n) {
      this._typedVertexUint[this._usedVertexData++] = n;
    }
    _addVertex(x, y, u, v, textureUnit, color) {
      const pos = transformPoint(this.currentTileMatrix, [x, y, 0]);

      this._pushToVertexFloat(this.currentOffset[0] + pos[0]);
      this._pushToVertexFloat(this.currentOffset[1] + pos[1]);
      this._pushToVertexFloat(u);
      this._pushToVertexFloat(v);
      this._pushToVertexFloat(textureUnit);
      this._pushToVertexUint(color);
    }
    addTile(
      texture,
      width,
      height,
      u0,
      v0,
      u1,
      v1,
      offsetX,
      offsetY,
      color,
      matrix
    ) {
      if (this.count >= this.MAX_BATCH) {
        this.flush();
      }
      if (this._usedTextures.length >= this.MAX_TEXTURE_UNITS) {
        this.flush();
      }
      this.count++;
      this.currentTileMatrix = matrix;
      this.currentOffset = [offsetX, offsetY];
      const textureUnit = this._useTexture(texture);

      /**
       * 0-----1
       * | \   |
       * |   \ |
       * 3-----2
       */
      const texU = u0 + u1;
      const texV = v0 + v1;

      this._addVertex(0, 0, u0, v0, textureUnit, color); // 0
      this._addVertex(width, 0, texU, v0, textureUnit, color); // 1
      this._addVertex(width, -height, texU, texV, textureUnit, color); // 2
      this._addVertex(0, -height, u0, texV, textureUnit, color); // 3
    }
    drawMembers(y, toRenderMembers) {
      if (toRenderMembers[y]) {
        const drawableIDs = [];
        if (this.count > 0) {
          this.flush();
        }
        for (const members of toRenderMembers[y]) {
          members.tilemapData.skipDraw = false;
          drawableIDs.push(members._id);
        }
        this._render._drawThese(
          drawableIDs,
          "default",
          this._render._projection,
          this.opts
        );
        for (const members of toRenderMembers[y]) {
          members.tilemapData.skipDraw = true;
        }
        this.startRegion(this.opts);
      }
    }
    flush() {
      const gl = this._gl;
      for (const unit of this._needBind) {
        const texture = this._usedTextures[unit];
        gl.activeTexture(gl.TEXTURE0 + unit);
        gl.bindTexture(gl.TEXTURE_2D, texture);
      }
      gl.bufferSubData(
        gl.ARRAY_BUFFER,
        0,
        this._typedVertexFloat.subarray(0, this.count * FLOAT32_PER_TILE)
      );
      gl.drawElements(
        gl.TRIANGLES,
        this.count * INDEX_PER_TILE,
        gl.UNSIGNED_SHORT,
        0
      );
      this._afterFlush();
    }
    _afterFlush() {
      this._needBind.clear();
      this._usedTextures = [];
      this._usedVertexData = 0;
      this.count = 0;
    }
    _initIndexBuffer() {
      const gl = this._gl;
      const indexData = this._indexData;
      let vertexIndex = 0;
      for (
        let arrayIndex = 0;
        arrayIndex < INDEX_PER_TILE * this.MAX_BATCH;
        arrayIndex += INDEX_PER_TILE
      ) {
        indexData[arrayIndex + 0] = vertexIndex + 0;
        indexData[arrayIndex + 1] = vertexIndex + 3;
        indexData[arrayIndex + 2] = vertexIndex + 2;

        indexData[arrayIndex + 3] = vertexIndex + 0;
        indexData[arrayIndex + 4] = vertexIndex + 1;
        indexData[arrayIndex + 5] = vertexIndex + 2;

        vertexIndex += VERTEX_PER_TILE;
      }

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBufferObject);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexData, gl.STATIC_DRAW);
    }

    _initVertexAttribute() {
      const gl = this._gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBufferObject);
      const aPosition = gl.getAttribLocation(this._program, "aPosition");
      const aRegion = gl.getAttribLocation(this._program, "aRegion");
      const aTextureId = gl.getAttribLocation(this._program, "aTextureId");
      const aColor = gl.getAttribLocation(this._program, "aColor");

      const stride = BYTES_PER_VERTEX;

      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, stride, 0);
      gl.enableVertexAttribArray(aPosition);

      gl.vertexAttribPointer(aRegion, 2, gl.FLOAT, false, stride, 2 * 4);
      gl.enableVertexAttribArray(aRegion);

      gl.vertexAttribPointer(aTextureId, 1, gl.FLOAT, false, stride, 4 * 4);
      gl.enableVertexAttribArray(aTextureId);

      gl.vertexAttribPointer(aColor, 4, gl.UNSIGNED_BYTE, true, stride, 5 * 4);
      gl.enableVertexAttribArray(aColor);
    }
    getTexture(skin, scale) {
      const gl = this._gl;

      const texture = skin.getTexture(scale);
      if (!skin.tilemapInit) {
        skin.tilemapInit = true;
        this.twgl.setTextureParameters(gl, texture, {
          minMag: skin.useNearest(scale, drawableAttribute)
            ? gl.NEAREST
            : gl.LINEAR,
        });
      }
      return texture;
    }
    makeDirty() {
      this._render.dirty = true;
    }
  }

  var lang = {
    "zh-cn": {
      "nights.tilemap.name": "瓦片地图",

      "nights.tilemap.base": "基础操作",
      "nights.tilemap.mapdata": "地图数据",
      "nights.tilemap.tileset": "瓦片集合",
      "nights.tilemap.layer": "瓦片图层",
      "nights.tilemap.position": "坐标",

      "nights.tilemap.setShowMode": "地图[NAME] [MODE]",
      "nights.tilemap.updateTilemap":
        "创建/更新 该角色的[NAME]地图 瓦片大小:[TILE_SIZE_X] [TILE_SIZE_Y] 层:[LAYER] 瓦片集:[TILE_SET] 模式: [TILEMAP_MODE]",
      "nights.tilemap.destoryTilemap": "销毁[NAME]地图",
      "nights.tilemap.resizeTileData":
        "设置[NAME]地图大小 :[SIZE_X] [SIZE_Y]（不会清除原本数据）",
      "nights.tilemap.setTileData":
        "设置[NAME]地图数据 位置:[POS_X] [POS_Y] 为 [VALUE]",
      "nights.tilemap.clearTileData": "清除[NAME]地图数据",
      "nights.tilemap.getTileName":
        "获取[NAME]地图 位置:[POS_X] [POS_Y] 瓦片的名称",
      "nights.tilemap.createTileSet":
        "创建/更新 [NAME]瓦片集的瓦片 名字:[TILE_NAME] 数据:[DATA]",
      "nights.tilemap.removeTileSet": "移除[NAME]瓦片集的[TILE_NAME]瓦片",
      "nights.tilemap.joinTileMapLayer": "加入[NAME]地图图层",
      "nights.tilemap.setLayerInTileMap":
        "设置我在当前地图的图层为地图的第[LAYER]行",
      "nights.tilemap.quitTileMap": "退出当前所在的图层",
      "nights.tilemap.posToMap":
        "世界坐标 [POS_X] [POS_Y] 转[NAME]地图的坐标 [POS_ATT]",
      "nights.tilemap.mapToPos":
        "[NAME]地图的坐标 [POS_X] [POS_Y] 转世界坐标 [POS_ATT]",

      "nights.tilemap.mapMode.square": "正交地图（正方形）",
      "nights.tilemap.mapMode.isometric": "等距地图（菱形）",

      "nights.tilemap.showMode.hide": "隐藏",
      "nights.tilemap.showMode.show": "显示",

      "nights.tilemap.default.tilesetName": "城市",
      "nights.tilemap.default.tileDataName": "草坪1",
      "nights.tilemap.default.mapName": "地面",

      "nights.tilemap.default.texture": "造型1",
    },
    en: {
      "nights.tilemap.name": "TileMap",

      "nights.tilemap.base": "Basic Operations",
      "nights.tilemap.mapdata": "Map Data",
      "nights.tilemap.tileset": "Tileset",
      "nights.tilemap.layer": "Tile Layer",
      "nights.tilemap.position": "Position",

      "nights.tilemap.setShowMode": "Set Show Mode of [NAME] to [MODE]",
      "nights.tilemap.updateTilemap":
        "Create/Update Tilemap for [NAME] Tile Size:[TILE_SIZE_X] [TILE_SIZE_Y] Layer:[LAYER] Tile Set:[TILE_SET] Mode: [TILEMAP_MODE]",
      "nights.tilemap.destoryTilemap": "Destroy Tilemap for [NAME]",
      "nights.tilemap.resizeTileData":
        "Resize Tile Data for [NAME] Map to :[SIZE_X] [SIZE_Y] (Preserve Data)",
      "nights.tilemap.setTileData":
        "Set Tile Data for [NAME] Map at Position [POS_X] [POS_Y] to [VALUE]",
      "nights.tilemap.clearTileData": "Clear Tile Data for [NAME] Map",
      "nights.tilemap.getTileName":
        "Get Tile Name at Position [POS_X] [POS_Y] in [NAME] Map",
      "nights.tilemap.createTileSet":
        "Create/Update Tile [TILE_NAME] in [NAME] Tileset with Data:[DATA]",
      "nights.tilemap.removeTileSet":
        "Remove Tile [TILE_NAME] from [NAME] Tileset",
      "nights.tilemap.joinTileMapLayer": "Join [NAME] Map Layer",
      "nights.tilemap.setLayerInTileMap":
        "Set My Layer in Current Map to Row [LAYER]",
      "nights.tilemap.quitTileMap": "Quit Current Layer",
      "nights.tilemap.posToMap":
        "World Coordinates [POS_X] [POS_Y] converted to [NAME] Map Coordinates [POS_ATT]",
      "nights.tilemap.mapToPos":
        "[NAME] Map Coordinates [POS_X] [POS_Y] converted to World Coordinates [POS_ATT]",

      "nights.tilemap.mapMode.square": "Square Map",
      "nights.tilemap.mapMode.isometric": "Isometric Map",

      "nights.tilemap.showMode.hide": "Hide",
      "nights.tilemap.showMode.show": "Show",

      "nights.tilemap.default.tilesetName": "city",
      "nights.tilemap.default.tileDataName": "grass1",
      "nights.tilemap.default.mapName": "ground",

      "nights.tilemap.default.texture": "costume1",
    },
  };

  var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAKJJREFUaEPtl0EKgDAMBM3/Hx1PooVKIQtuitOrDU2zcTONzMxjsSIinltaxbRKplIoLvDSfp+1HQqgwF2BUtvRQu4WWg2x7t+HCds92Vl+XMCtWuBCbhdCARQAJXhSTv+CEln+8knpnqTq+bCQWkE1fn8FQAlQApQAJUCJqwIlfsJG3TaqjnJ3/P4o4a6gev7+CuBCbhdCARQAp8FpcFrB6RO34z+/zh7Y2AAAAABJRU5ErkJggg==";

  const translate = (id) => {
    return Scratch.translate({ id, default: lang.en[id] });
  };

  var blocks = (Scratch) => {
    Scratch.translate.setup(lang);
    return {
      id: "nightstilemap",
      name: translate("nights.tilemap.name"),
      color1: "#3CB371",
      blockIconURI: img,
      docsURI: "https://github.com/Nightre/Tilemap/blob/main/docs.md",
      blocks: [
        {
          blockType: Scratch.BlockType.LABEL,
          text: translate("nights.tilemap.base"),
        },
        {
          opcode: "setShowMode",
          text: translate("nights.tilemap.setShowMode"),
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.mapName"),
            },
            MODE: {
              type: Scratch.ArgumentType.STRING,
              menu: "SHOW_MODE",
            },
          },
        },
        {
          opcode: "updateTilemap",
          text: translate("nights.tilemap.updateTilemap"),
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.mapName"),
            },
            LAYER: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0,
            },
            TILE_SET: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.tilesetName"),
            },
            TILE_SIZE_X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 20,
            },
            TILE_SIZE_Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 20,
            },
            TILEMAP_MODE: {
              type: Scratch.ArgumentType.STRING,
              menu: "TILEMAP_MODE",
            },
          },
        },
        {
          opcode: "destoryTilemap",
          text: translate("nights.tilemap.destoryTilemap"),
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.mapName"),
            },
          },
        },

        {
          blockType: Scratch.BlockType.LABEL,
          text: translate("nights.tilemap.mapdata"),
        },
        {
          opcode: "resizeTileData",
          text: translate("nights.tilemap.resizeTileData"),
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            SIZE_X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100,
            },
            SIZE_Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100,
            },
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.mapName"),
            },
          },
        },
        {
          opcode: "setTileData",
          text: translate("nights.tilemap.setTileData"),
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            POS_X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
            POS_Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.tileDataName"),
            },
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.mapName"),
            },
          },
        },
        {
          opcode: "clearTileData",
          text: translate("nights.tilemap.clearTileData"),
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.mapName"),
            },
          },
        },
        {
          opcode: "getTileName",
          text: translate("nights.tilemap.getTileName"),
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            POS_X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
            POS_Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.mapName"),
            },
          },
        },

        {
          blockType: Scratch.BlockType.LABEL,
          text: translate("nights.tilemap.tileset"),
        },
        // {
        //     opcode: 'getAllTileSet',
        //     text: translate("nights.tilemap."),
        //     blockType: Scratch.BlockType.REPORTER,
        //     arguments: {
        //         NAME: {
        //             type: Scratch.ArgumentType.STRING,
        //             defaultValue: translate("nights.tilemap.default.tilesetName"),
        //         },
        //     }
        // },
        {
          opcode: "createTileSet",
          text: translate("nights.tilemap.createTileSet"),
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.tilesetName"),
            },
            TILE_NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.tileDataName"),
            },
            DATA: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: JSON.stringify({
                texture: translate("nights.tilemap.default.texture"),
                clip: { x: 0, y: 0, width: 50, height: 50 },
                scale: { x: 1, y: 1 },
                offset: { x: 0, y: 0 },
                anchor: { x: 25, y: -25 },
                rotate: 90,
                color: "FFFFFFFF",
              }),
            },
          },
        },
        {
          opcode: "removeTileSet",
          text: translate("nights.tilemap.removeTileSet"),
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.tilesetName"),
            },
            TILE_NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.tilesetName"),
            },
          },
        },
        {
          blockType: Scratch.BlockType.LABEL,
          text: translate("nights.tilemap.layer"),
        },
        {
          opcode: "joinTileMapLayer",
          text: translate("nights.tilemap.joinTileMapLayer"),
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.mapName"),
            },
          },
        },
        {
          opcode: "setLayerInTileMap",
          text: translate("nights.tilemap.setLayerInTileMap"),
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            LAYER: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0,
            },
          },
        },
        {
          opcode: "quitTileMap",
          text: translate("nights.tilemap.quitTileMap"),
          blockType: Scratch.BlockType.COMMAND,
        },
        {
          blockType: Scratch.BlockType.LABEL,
          text: translate("nights.tilemap.position"),
        },
        {
          opcode: "posToMap",
          text: translate("nights.tilemap.posToMap"),
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.mapName"),
            },
            POS_ATT: {
              type: Scratch.ArgumentType.STRING,
              menu: "POS_ATT",
            },
            POS_X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0,
            },
            POS_Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0,
            },
          },
        },
        {
          opcode: "mapToPos",
          text: translate("nights.tilemap.mapToPos"),
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: translate("nights.tilemap.default.mapName"),
            },
            POS_ATT: {
              type: Scratch.ArgumentType.STRING,
              menu: "POS_ATT",
            },
            POS_X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
            POS_Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
          },
        },
        // {
        //     blockType: Scratch.BlockType.LABEL,
        //     text: translate("nights.tilemap.")
        // },
        // {
        //     opcode: 'collisionWithTilemap',
        //     text: translate("nights.tilemap."),
        //     blockType: Scratch.BlockType.BOOLEAN,
        //     arguments: {
        //         POS_X: {
        //             type: Scratch.ArgumentType.NUMBER,
        //             defaultValue: 0,
        //         },
        //         POS_Y: {
        //             type: Scratch.ArgumentType.NUMBER,
        //             defaultValue: 0,
        //         },
        //         NAME: {
        //             type: Scratch.ArgumentType.NUMBER,
        //             defaultValue: translate("nights.tilemap.default.mapName"),
        //         },
        //     }
        // }
      ],
      menus: {
        TILEMAP_MODE: {
          items: [
            {
              value: MAP_MODE.SQUARE,
              text: translate("nights.tilemap.mapMode.square"),
            },
            {
              value: MAP_MODE.ISOMETRIC,
              text: translate("nights.tilemap.mapMode.isometric"),
            },
          ],
        },
        SHOW_MODE: {
          items: [
            {
              value: SHOW_MODE.SHOW,
              text: translate("nights.tilemap.showMode.show"),
            },
            {
              value: SHOW_MODE.HIDE,
              text: translate("nights.tilemap.showMode.hide"),
            },
          ],
        },
        POS_ATT: {
          items: [
            {
              value: POS_ATT.X,
              text: "x",
            },
            {
              value: POS_ATT.Y,
              text: "y",
            },
          ],
        },
      },
    };
  };

  function _drawThese(drawables, drawMode, projection, opts = {}) {
    const gl = this._gl;
    const twgl = this.exports.twgl;
    let currentShader = null;
    const framebufferSpaceScaleDiffers =
      "framebufferWidth" in opts &&
      "framebufferHeight" in opts &&
      opts.framebufferWidth !== this._nativeSize[0] &&
      opts.framebufferHeight !== this._nativeSize[1];

    const numDrawables = drawables.length;
    // By:nights start
    // this.tilemapFirstRender gandi ide 雷神会绘制两次
    // 判断是否需要绘制tilemap
    const canDrawTilemap =
      drawMode == "default" &&
      projection == this._projection &&
      (!this.tilemapFirstRender || SCRATCH_BUILD_TYPE == SCRATCH_TYPE.TURBOWARP);
    // By:nights end

    for (let drawableIndex = 0; drawableIndex < numDrawables; ++drawableIndex) {
      const drawableID = drawables[drawableIndex];

      // If we have a filter, check whether the ID fails
      if (opts.filter && !opts.filter(drawableID)) continue;

      const drawable = this._allDrawables[drawableID];
      // By:nights start
      // 如果有tilemap的跳过绘制，就跳过
      if (
        canDrawTilemap &&
        drawable.tilemapData &&
        drawable.tilemapData.skipDraw
      ) {
        continue;
      }
      // By:nights end
      /** @todo check if drawable is inside the viewport before anything else */

      // Hidden drawables (e.g., by a "hide" block) are not drawn unless
      // the ignoreVisibility flag is used (e.g. for stamping or touchingColor).
      if (!drawable.getVisible() && !opts.ignoreVisibility) continue;

      // drawableScale is the "framebuffer-pixel-space" scale of the drawable, as percentages of the drawable's
      // "native size" (so 100 = same as skin's "native size", 200 = twice "native size").
      // If the framebuffer dimensions are the same as the stage's "native" size, there's no need to calculate it.
      const drawableScale = framebufferSpaceScaleDiffers
        ? [
            (drawable.scale[0] * opts.framebufferWidth) / this._nativeSize[0],
            (drawable.scale[1] * opts.framebufferHeight) / this._nativeSize[1],
          ]
        : drawable.scale;

      // If the skin or texture isn't ready yet, skip it.
      if (!drawable.skin || !drawable.skin.getTexture(drawableScale)) continue;

      // Skip private skins, if requested.
      if (opts.skipPrivateSkins && drawable.skin.private) continue;
      // By:nights start
      // 绘制tilemap
      if (
        canDrawTilemap &&
        drawable.tilemapData &&
        drawable.tilemapData.drawTilemaps
      ) {
        let enterRegion = false; // 是否进入tilemap region
        if (this._regionId !== "tilemap") {
          // region 不是tilemap
          this._doExitDrawRegion(); // 退出之前的region
          this._regionId = "tilemap"; // 设置regionid
          // 设置退出tilemap region操作
          this._exitRegion = drawable.tilemapData.exitTilemapRegion;
          enterRegion = true;
        }
        // 告诉tilemap是否是enterRegion以进行进入Region初始化操作
        drawable.tilemapData.drawTilemaps(enterRegion, opts);
      }
      // By:nights end
      const uniforms = {};

      let effectBits = drawable.enabledEffects;
      effectBits &= Object.prototype.hasOwnProperty.call(opts, "effectMask")
        ? opts.effectMask
        : effectBits;
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
          u_projectionMatrix: projection,
        });
      }

      Object.assign(
        uniforms,
        drawable.skin.getUniforms(drawableScale),
        drawable.getUniforms()
      );

      // Apply extra uniforms after the Drawable's, to allow overwriting.
      if (opts.extraUniforms) {
        Object.assign(uniforms, opts.extraUniforms);
      }

      if (uniforms.u_skin) {
        twgl.setTextureParameters(gl, uniforms.u_skin, {
          minMag: drawable.skin.useNearest(drawableScale, drawable)
            ? gl.NEAREST
            : gl.LINEAR,
        });
      }

      twgl.setUniforms(currentShader, uniforms);
      twgl.drawBufferInfo(gl, this._bufferInfo, gl.TRIANGLES);
    }

    this._regionId = null;
    this.tilemapFirstRender = false;
  }

  class Override {
    constructor(runtime) {
      runtime.renderer._drawThese = (..._arguments) => {
        _drawThese.call(runtime.renderer, ..._arguments); // 调用
      };
      const oldDraw = runtime.renderer.draw;
      runtime.renderer.draw = function () {
        // this.tilemapFirstRender gandi ide 雷神会绘制两次
        runtime.renderer.tilemapFirstRender = true;
        oldDraw.call(runtime.renderer);
      };
    }
  }

  const MAX_TILE_SET = 1024;

  class TileData {
    constructor() {
      this.tilemapRender = null;
      this.tileName = null;
      this.color = 0xffffffff;
      this.data = {};
    }
    update(data) {
      if (data.texture) {
        this.skin = data.texture;
      }
      // if (!this.skin) {
      //     return
      // }

      if (
        this.matrix == undefined ||
        data.offset ||
        data.anchor ||
        data.scale ||
        data.rotate ||
        data.anchor
      ) {
        const m4 = this.tilemapRender.twgl.m4;
        const offset = data.offset || this.data?.offset;
        const anchor = data.anchor || this.data?.anchor;
        const scale = data.scale || this.data?.scale;
        const rotate = data.rotate || this.data?.rotate;

        const matrix = m4.identity();
        m4.translate(matrix, [offset?.x ?? 0, offset?.y ?? 0, 0], matrix);
        m4.translate(matrix, [anchor?.x ?? 0, anchor?.y ?? 0, 0], matrix);
        m4.scale(matrix, [scale?.x ?? 1, scale?.y ?? 1, 1], matrix);
        m4.rotateZ(matrix, ((90 - (rotate ?? 90)) * Math.PI) / 180, matrix);
        // -undefined = -Nan 所以需要用 coalesce
        m4.translate(
          matrix,
          [coalesce(-anchor?.x, 0), coalesce(-anchor?.y, 0), 0],
          matrix
        );
        this.matrix = matrix;
      }

      const oldClip = this.data.clip;
      data.clip = {
        x: data.clip?.x ?? oldClip?.x,
        y: data.clip?.y ?? oldClip?.y,
        width: data.clip?.width ?? oldClip?.width,
        height: data.clip?.height ?? oldClip?.height,
      };
      const clip = data.clip;
      this.updateClip(data.clip);
      this.isClip = !(
        this.clip?.x == 0 &&
        this.clip?.y == 0 &&
        this.clip?.width == 1 &&
        this.clip?.height == 1
      );
      this._width = clip?.width;
      this._height = clip?.height;

      if (data.color) {
        this.color = htmlColorToUint32Color(data.color);
      }

      // data 必须有，tile检测是否在屏幕内要用
      this.offset = data.offset ?? this.data.offset ?? { x: 0, y: 0 };
      const newData = Object.assign({}, this.data);
      // 合并this.data和data，若有重复字段，以data的值为准
      Object.assign(newData, data);
      // 更新this.data为合并后的结果
      this.data = newData;
    }
    // 根据大小updateClip
    updateClip(clip = this.data.clip) {
      const skinSize = this.skin.size;

      this.clip = {
        x: coalesce(clip?.x / skinSize[0], 0),
        y: coalesce(clip?.y / skinSize[1], 0),
        width: coalesce(clip?.width / skinSize[0], 1),
        height: coalesce(clip?.height / skinSize[1], 1),
      };
    }
    get width() {
      return this._width ?? this.skin.size[0];
    }
    get height() {
      return this._height ?? this.skin.size[1];
    }
    enable(tileName, tilemapRender) {
      this.tileName = tileName;
      this.tilemapRender = tilemapRender;
    }
    getTexture(size) {
      const skin = this.skin;
      if (!skin) {
        return;
      }
      return this.tilemapRender.getTexture(this.skin, size);
    }
  }

  class TileSet {
    constructor(tilemapRender) {
      this._tilemapRender = tilemapRender;
      // name => tileData
      this._tileDatas = new Map();
      // id => tileData
      this.mapping = new Map();
      // name => id
      this.nameMapping = new Map();

      this.count = 0;
    }
    addTileData(tileName, data) {
      if (this._tileDatas.size >= MAX_TILE_SET) {
        return;
      }

      if (this._tileDatas.has(tileName)) {
        const tileData = this._tileDatas.get(tileName);
        tileData.update(data);
      } else {
        this.count++; // 使用 Unit16 存储，无法有负数，用0代表空，所以在开始之前count++
        const id = this.count;
        const tileData = new TileData();
        tileData.enable(tileName, this._tilemapRender);
        tileData.update(data);

        this.mapping.set(id, tileData);
        this.nameMapping.set(tileName, id);
        this._tileDatas.set(tileName, tileData);
      }

      // if (!this.nameMapping.has(tileName)) {
      //     this.count += 1 // 使用 Unit16 存储，无法有负数，用0代表空，所以在开始之前count++
      // }
      // tileData.enable(tileName, this._tilemapRender)
      // this.mapping.set(this.count, tileData)
      // this.nameMapping.set(tileName, this.count)
      // this._tileDatas.set(tileName, tileData)
    }
    removeTileData(tileName) {
      this.mapping.delete(this.nameMapping.get(tileName));
      this.nameMapping.delete(tileName);
      this._tileDatas.delete(tileName);
    }
    getTileData(tileName) {
      return this._tileDatas.get(tileName);
    }

    toJson() {
      const json = [];
      this._tileDatas.forEach((_, k) => {
        json.push(k);
      });
      return json;
    }
  }

  const Cast = Scratch$1.Cast;

  // 这个class 用来用scratch积木的数据来操控Tilemap
  // TODO:纹理更新
  class TilemapScratch {
    constructor(runtime) {
      this.runtime = runtime || Scratch$1?.vm?.runtime;
      if (this.runtime) {
        this.renderer = this.runtime.renderer;
        this.m4 = this.renderer.exports.twgl.m4;

        //this.tilemap = new Tilemap(this.runtime)

        // 所有tilemap共用一个tilemapRender
        this.render = new TilemapRender(this.runtime);
        this.override = new Override(this.runtime);
        this.tilemaps = new Map();
        this.tilesets = new Map();
        this.waste = false;
      } else {
        this.waste = true;
      }
      // const gl = this.renderer.gl
      // gl.enable(gl.SCISSOR_TEST);
      // gl.scissor(0, 0, gl.canvas.width, gl.canvas.height);
    }
    getInfo() {
      return blocks(Scratch$1);
    }

    //////////////////////////////////////////////////////////////////////////

    getTilemap(args, callback, defaultReturn) {
      const tilemapName = Cast.toString(args.NAME);

      if (this.tilemaps.has(tilemapName)) {
        return callback(this.tilemaps.get(tilemapName));
      }
      return defaultReturn;
    }
    drawTilemaps(drawable, enterRegion, opts) {
      if (enterRegion) {
        this.render.startRegion(opts);
      }
      if (drawable.tilemapData) {
        const tilemaps = Object.values(drawable.tilemapData.tilemaps);
        for (const tilemap of tilemaps.sort((a, b) => a.layer - b.layer)) {
          tilemap.draw();
        }
      }
      if (this.render.count > 0) {
        this.render.flush();
      }
    }

    //////////////////////////////////////////////////////////////////////////

    setShowMode(args) {
      this.getTilemap(args, (tilemap) => {
        tilemap.show = args.MODE == SHOW_MODE.SHOW;
      });
      this.render.makeDirty();
    }
    updateTilemap(args, utils) {
      const { drawable } = getCallerInfo(utils, this.runtime);
      const tilemapName = Cast.toString(args.NAME);
      if (!this.tilemaps.has(tilemapName)) {
        const newTilemap = new Tilemap(this, drawable, tilemapName);

        if (!drawable.tilemapData) {
          drawable.tilemapData = {
            drawTilemaps: (enterRegion, opts) =>
              this.drawTilemaps(drawable, enterRegion, opts),
            exitTilemapRegion: () => this.render.exitRegion(),
            tilemaps: {},
          };
        }

        drawable.tilemapData.tilemaps[tilemapName] = newTilemap;
        this.tilemaps.set(tilemapName, newTilemap);
      }
      this.tilemaps.get(tilemapName).update({
        tileSize: {
          x: floorNum(args.TILE_SIZE_X),
          y: floorNum(args.TILE_SIZE_Y),
        },
        layer: floorNum(args.LAYER),
        mode: args.TILEMAP_MODE,
        tilesetName: Cast.toString(args.TILE_SET),
      });
      this.render.makeDirty();
    }
    destoryTilemap(args) {
      this.getTilemap(args, (tilemap) => {
        this.tilemaps.delete(tilemap.name);
        tilemap.destory();
      });
      this.render.makeDirty();
    }
    //////////////////////////////////////////////////////////////////////////
    resizeTileData(args) {
      this.getTilemap(args, (tilemap) => {
        tilemap.mapData.resize(floorNum(args.SIZE_X), floorNum(args.SIZE_Y));
      });
      this.render.makeDirty();
    }
    setTileData(args) {
      this.getTilemap(args, (tilemap) => {
        tilemap.setTileData(getPosFromScratch(args), Cast.toString(args.VALUE));
      });
      this.render.makeDirty();
    }
    getTileName(args) {
      return this.getTilemap(
        args,
        (tilemap) => {
          const data = tilemap.getTileData(getPosFromScratch(args));
          if (!data) return "";
          return data.tileName;
        },
        "0"
      );
    }
    clearTileData(args) {
      this.getTilemap(args, (tilemap) => {
        tilemap.clearTileData();
      });
    }
    //////////////////////////////////////////////////////////////////////////
    // getAllTileSet(args) {
    //     const data = this.tilesets.get(Cast.toString(args.NAME))
    //     if (!data) return '{}'
    //     return JSON.stringify(data.toJson())
    // }
    createTileSet(args, utils) {
      const tilesetName = Cast.toString(args.NAME);
      if (!this.tilesets.has(tilesetName)) {
        this.tilesets.set(tilesetName, new TileSet(this.render));
      }
      const tileset = this.tilesets.get(tilesetName);
      if (!tileset) return;
      const data = JSON.parse(args.DATA);
      if (data.texture) {
        data.texture = getSkinByName(utils, data.texture, this.runtime);
      }
      tileset.addTileData(Cast.toString(args.TILE_NAME), data);
      this.render.makeDirty();
    }
    removeTileSet(args) {
      const tileset = this.tilesets.get(Cast.toString(args.NAME));
      if (!tileset) return;
      tileset.removeTileData(Cast.toString(args.TILE_NAME));
      this.render.makeDirty();
    }
    joinTileMapLayer(args, utils) {
      const { drawable } = getCallerInfo(utils, this.runtime);
      if (
        drawable.tilemapData &&
        drawable.tilemapData.tilemaps &&
        Object.keys(drawable.tilemapData.tilemaps).length > 0
      ) {
        return; // 有tilemap无法加入其他tilemap
      }
      this.getTilemap(args, (tilemap) => {
        if (!drawable.tilemapData) {
          drawable.tilemapData = {
            skipDraw: true,
            parentTilemap: null,
          };
        }
        drawable.tilemapData.parentTilemap = tilemap;
        tilemap.members.add(drawable);
      });
      this.render.makeDirty();
    }
    setLayerInTileMap(args, utils) {
      const { drawable } = getCallerInfo(utils, this.runtime);
      const tileData = drawable.tilemapData;
      if (tileData) {
        tileData.sort = floorNum(args.LAYER) - 1; // - 1 scratch一般索引第一个是1，所以减一
      }
      this.render.makeDirty();
    }
    quitTileMap(_, utils) {
      const { drawable } = getCallerInfo(utils, this.runtime);
      const tileData = drawable.tilemapData;
      if (tileData && tileData.parentTilemap) {
        tileData.parentTilemap.members.delete(drawable);
        tileData.parentTilemap = null;
      }
      this.render.makeDirty();
    }
    ///////////////////////////////////////////////////////////
    mapToPos(args) {
      return this.getTilemap(args, (tilemap) => {
        const data = tilemap.mapToPos(floorNum(args.POS_X), floorNum(args.POS_Y));
        return args.POS_ATT == POS_ATT.X ? data.x : data.y;
      });
    }
    posToMap(args) {
      return this.getTilemap(args, (tilemap) => {
        const data = tilemap.posToMap(
          Cast.toNumber(args.POS_X),
          Cast.toNumber(args.POS_Y)
        );
        return args.POS_ATT == POS_ATT.X ? data.x : data.y;
      });
    }
  }

  Scratch$1.extensions.register(new TilemapScratch());

})(Scratch);
