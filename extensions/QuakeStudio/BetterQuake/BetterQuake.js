// Name: Better Quake
// ID: betterquake
// Description: Better shader loader.
// By: Fath11
// Original: Fath11
// License: MPL-2.0

(() => {
  // src/l10n/index.ts
  var l10n_default = {
    en: {
      _extensionName: "QuakeFragmment",
      _me: "me",
      _stage: "stage",
      _example: "Example",
      _Enable: "Enable",
      _Disable: "Disable",
      "_[SHOULD] auto re-render": "[SHOULD] auto re-render",
      "_All loaded shaders": "All loaded shaders",
      "Remove [SHADER]": "Remove [SHADER]",
      "Reload [SHADER]": "Reload [SHADER]",
      "Apply [SHADER] to [TARGET]": "Apply [SHADER] to [TARGET]",
      "Detach [SHADER] from [TARGET]": "Detach [SHADER] from [TARGET]",
      _Uniforms: "Uniforms",
      "_Set number [UNIFORM] of [TARGET] to [VALUE]": "Set number [UNIFORM] of [TARGET] to [VALUE]",
      "_Set vector 2 [UNIFORM] of [TARGET] to [VALUE1][VALUE2]": "Set vector 2 [UNIFORM] of [TARGET] to [VALUE1][VALUE2]",
      "_Set vector 3 [UNIFORM] of [TARGET] to [VALUE1][VALUE2][VALUE3]": "Set vector 3 [UNIFORM] of [TARGET] to [VALUE1][VALUE2][VALUE3]",
      "_Set vector 4 [UNIFORM] of [TARGET] to [VALUE1][VALUE2][VALUE3][VALUE4]": "Set vector 4 [UNIFORM] of [TARGET] to [VALUE1][VALUE2][VALUE3][VALUE4]",
      "_Set matrix [UNIFORM] of [TARGET] to [MATRIX]": "Set matrix [UNIFORM] of [TARGET] to [MATRIX]",
      "_Set texture [UNIFORM] of [TARGET] to [TEXTURE]": "Set texture [UNIFORM] of [TARGET] to [TEXTURE]",
      _Textures: "Textures",
      "_All textures": "All textures",
      "_Delete all textures": "Delete all textures",
      "_Delete texture called [NAME]": "Delete texture called [NAME]",
      "_Create/Update texture called [NAME] with [TEXTURE]": "Create/Update texture called [NAME] with [TEXTURE]"
    },
    "zh-cn": {
      _extensionName: "\u96F7\u795E Pro",
      _me: "\u81EA\u5DF1",
      _stage: "\u821E\u53F0",
      _example: "\u793A\u4F8B",
      _Enable: "\u542F\u7528",
      _Disable: "\u7981\u7528",
      "_[SHOULD] auto re-render": "[SHOULD] \u81EA\u52A8\u91CD\u65B0\u6E32\u67D3",
      "_All loaded shaders": "\u6240\u6709\u5DF2\u52A0\u8F7D\u7684\u7740\u8272\u5668",
      "_Remove [SHADER]": "\u79FB\u9664 [SHADER]",
      "_Reload [SHADER]": "\u91CD\u65B0\u52A0\u8F7D [SHADER]",
      "_Apply [SHADER] to [TARGET]": "\u5C06 [SHADER] \u5E94\u7528\u4E8E [TARGET]",
      "_Detach [SHADER] from [TARGET]": "\u4ECE [TARGET] \u5206\u79BB [SHADER]",
      _Uniforms: "\u7EDF\u4E00\u53D8\u91CF",
      "_Set number [UNIFORM] of [TARGET] to [VALUE]": "\u5C06 [TARGET] \u7684\u7EDF\u4E00\u53D8\u91CF [UNIFORM] \u8BBE\u7F6E\u4E3A [VALUE]",
      "_Set vector 2 [UNIFORM] of [TARGET] to [VALUE1][VALUE2]": "\u5C06 [TARGET] \u7684\u4E8C\u7EF4\u5411\u91CF [UNIFORM] \u8BBE\u7F6E\u4E3A [VALUE1][VALUE2]",
      "_Set vector 3 [UNIFORM] of [TARGET] to [VALUE1][VALUE2][VALUE3]": "\u5C06 [TARGET] \u7684\u4E09\u7EF4\u5411\u91CF [UNIFORM] \u8BBE\u7F6E\u4E3A [VALUE1][VALUE2][VALUE3]",
      "_Set vector 4 [UNIFORM] of [TARGET] to [VALUE1][VALUE2][VALUE3][VALUE4]": "\u5C06 [TARGET] \u7684\u56DB\u7EF4\u5411\u91CF [UNIFORM] \u8BBE\u7F6E\u4E3A [VALUE1][VALUE2][VALUE3][VALUE4]",
      "_Set matrix [UNIFORM] of [TARGET] to [MATRIX]": "\u5C06 [TARGET] \u7684\u77E9\u9635 [UNIFORM] \u8BBE\u7F6E\u4E3A [MATRIX]",
      "_Set texture [UNIFORM] of [TARGET] to [TEXTURE]": "\u5C06 [TARGET] \u7684\u7EB9\u7406 [UNIFORM] \u8BBE\u7F6E\u4E3A [TEXTURE]",
      _Textures: "\u7EB9\u7406",
      "_All textures": "\u6240\u6709\u7EB9\u7406",
      "_Delete all textures": "\u5220\u9664\u6240\u6709\u7EB9\u7406",
      "_Delete texture called [NAME]": "\u5220\u9664\u540D\u4E3A [NAME] \u7684\u7EB9\u7406",
      "_Create/Update texture called [NAME] with [TEXTURE]": "\u4F7F\u7528 [TEXTURE] \u521B\u5EFA/\u66F4\u65B0\u540D\u4E3A [NAME] \u7684\u7EB9\u7406"
    },
    ms: {
      _extensionName: "QuakeFragmment",
      _me: "saya",
      _stage: "pentas",
      _example: "Contoh",
      _Enable: "Hidupkan",
      _Disable: "Matikan",
      "_[SHOULD] auto re-render": "[SHOULD] lukis semula sendiri",
      "_All loaded shaders": "Semua shader dimuatkan",
      "_Remove [SHADER]": "Buang [SHADER]",
      "_Reload [SHADER]": "Set semula [SHADER]",
      "_Apply [SHADER] to [TARGET]": "Sambungkan [SHADER] ke [TARGET]",
      "_Detach [SHADER] from [TARGET]": "Cabut [SHADER] dari [TARGET]",
      _Uniforms: "Uniforms",
      "_Set number [UNIFORM] of [TARGET] to [VALUE]": "Tetapkan nombor [UNIFORM] daripada [TARGET] kepada [VALUE]",
      "_Set vector 2 [UNIFORM] of [TARGET] to [VALUE1][VALUE2]": "Tetapkan vektor 2 [UNIFORM] daripada [TARGET] kepada [VALUE1][VALUE2]",
      "_Set vector 3 [UNIFORM] of [TARGET] to [VALUE1][VALUE2][VALUE3]": "Tetapkan vektor 3 [UNIFORM] daripada [TARGET] kepada [VALUE1][VALUE2][VALUE3]",
      "_Set vector 4 [UNIFORM] of [TARGET] to [VALUE1][VALUE2][VALUE3][VALUE4]": "Tetapkan vektor 4 [UNIFORM] daripada [TARGET] kepada [VALUE1][VALUE2][VALUE3][VALUE4]",
      "_Set matrix [UNIFORM] of [TARGET] to [MATRIX]": "Tetapkan matriks [UNIFORM] daripada [TARGET] kepada [MATRIX]",
      "_Set texture [UNIFORM] of [TARGET] to [TEXTURE]": "Tetapkan tekstur [UNIFORM] daripada [TARGET] kepada [TEXTURE]",
      _Textures: "Tekstur",
      "_All textures": "Semua tekstur",
      "_Delete all textures": "Padam semua tekstur",
      "_Delete texture called [NAME]": "Padam tekstur dipanggil [NAME]",
      "_Create/Update texture called [NAME] with [TEXTURE]": "Cipta/Kemas kini tekstur dipanggil [NAME] dengan [TEKSTUR]"
    }
  };

  // node_modules/twgl.js/dist/5.x/twgl-full.module.js
  var VecType = Float32Array;
  function create$1(x, y, z) {
    const dst = new VecType(3);
    if (x) {
      dst[0] = x;
    }
    if (y) {
      dst[1] = y;
    }
    if (z) {
      dst[2] = z;
    }
    return dst;
  }
  function add(a, b, dst) {
    dst = dst || new VecType(3);
    dst[0] = a[0] + b[0];
    dst[1] = a[1] + b[1];
    dst[2] = a[2] + b[2];
    return dst;
  }
  function multiply$1(a, b, dst) {
    dst = dst || new VecType(3);
    dst[0] = a[0] * b[0];
    dst[1] = a[1] * b[1];
    dst[2] = a[2] * b[2];
    return dst;
  }
  var MatType = Float32Array;
  function identity(dst) {
    dst = dst || new MatType(16);
    dst[0] = 1;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 1;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = 1;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
  }
  function inverse(m, dst) {
    dst = dst || new MatType(16);
    const m00 = m[0 * 4 + 0];
    const m01 = m[0 * 4 + 1];
    const m02 = m[0 * 4 + 2];
    const m03 = m[0 * 4 + 3];
    const m10 = m[1 * 4 + 0];
    const m11 = m[1 * 4 + 1];
    const m12 = m[1 * 4 + 2];
    const m13 = m[1 * 4 + 3];
    const m20 = m[2 * 4 + 0];
    const m21 = m[2 * 4 + 1];
    const m22 = m[2 * 4 + 2];
    const m23 = m[2 * 4 + 3];
    const m30 = m[3 * 4 + 0];
    const m31 = m[3 * 4 + 1];
    const m32 = m[3 * 4 + 2];
    const m33 = m[3 * 4 + 3];
    const tmp_0 = m22 * m33;
    const tmp_1 = m32 * m23;
    const tmp_2 = m12 * m33;
    const tmp_3 = m32 * m13;
    const tmp_4 = m12 * m23;
    const tmp_5 = m22 * m13;
    const tmp_6 = m02 * m33;
    const tmp_7 = m32 * m03;
    const tmp_8 = m02 * m23;
    const tmp_9 = m22 * m03;
    const tmp_10 = m02 * m13;
    const tmp_11 = m12 * m03;
    const tmp_12 = m20 * m31;
    const tmp_13 = m30 * m21;
    const tmp_14 = m10 * m31;
    const tmp_15 = m30 * m11;
    const tmp_16 = m10 * m21;
    const tmp_17 = m20 * m11;
    const tmp_18 = m00 * m31;
    const tmp_19 = m30 * m01;
    const tmp_20 = m00 * m21;
    const tmp_21 = m20 * m01;
    const tmp_22 = m00 * m11;
    const tmp_23 = m10 * m01;
    const t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
    const t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
    const t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
    const t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
    const d = 1 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
    dst[0] = d * t0;
    dst[1] = d * t1;
    dst[2] = d * t2;
    dst[3] = d * t3;
    dst[4] = d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
    dst[5] = d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
    dst[6] = d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
    dst[7] = d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
    dst[8] = d * (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
    dst[9] = d * (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
    dst[10] = d * (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
    dst[11] = d * (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
    dst[12] = d * (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
    dst[13] = d * (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
    dst[14] = d * (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
    dst[15] = d * (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));
    return dst;
  }
  function transformPoint(m, v, dst) {
    dst = dst || create$1();
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    const d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];
    dst[0] = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
    dst[1] = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
    dst[2] = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;
    return dst;
  }
  function transformDirection(m, v, dst) {
    dst = dst || create$1();
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    dst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
    dst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
    dst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];
    return dst;
  }
  var BYTE$2 = 5120;
  var UNSIGNED_BYTE$3 = 5121;
  var SHORT$2 = 5122;
  var UNSIGNED_SHORT$3 = 5123;
  var INT$3 = 5124;
  var UNSIGNED_INT$3 = 5125;
  var FLOAT$3 = 5126;
  var UNSIGNED_SHORT_4_4_4_4$1 = 32819;
  var UNSIGNED_SHORT_5_5_5_1$1 = 32820;
  var UNSIGNED_SHORT_5_6_5$1 = 33635;
  var HALF_FLOAT$1 = 5131;
  var UNSIGNED_INT_2_10_10_10_REV$1 = 33640;
  var UNSIGNED_INT_10F_11F_11F_REV$1 = 35899;
  var UNSIGNED_INT_5_9_9_9_REV$1 = 35902;
  var FLOAT_32_UNSIGNED_INT_24_8_REV$1 = 36269;
  var UNSIGNED_INT_24_8$1 = 34042;
  var glTypeToTypedArray = {};
  {
    const tt = glTypeToTypedArray;
    tt[BYTE$2] = Int8Array;
    tt[UNSIGNED_BYTE$3] = Uint8Array;
    tt[SHORT$2] = Int16Array;
    tt[UNSIGNED_SHORT$3] = Uint16Array;
    tt[INT$3] = Int32Array;
    tt[UNSIGNED_INT$3] = Uint32Array;
    tt[FLOAT$3] = Float32Array;
    tt[UNSIGNED_SHORT_4_4_4_4$1] = Uint16Array;
    tt[UNSIGNED_SHORT_5_5_5_1$1] = Uint16Array;
    tt[UNSIGNED_SHORT_5_6_5$1] = Uint16Array;
    tt[HALF_FLOAT$1] = Uint16Array;
    tt[UNSIGNED_INT_2_10_10_10_REV$1] = Uint32Array;
    tt[UNSIGNED_INT_10F_11F_11F_REV$1] = Uint32Array;
    tt[UNSIGNED_INT_5_9_9_9_REV$1] = Uint32Array;
    tt[FLOAT_32_UNSIGNED_INT_24_8_REV$1] = Uint32Array;
    tt[UNSIGNED_INT_24_8$1] = Uint32Array;
  }
  function getGLTypeForTypedArray(typedArray) {
    if (typedArray instanceof Int8Array) {
      return BYTE$2;
    }
    if (typedArray instanceof Uint8Array) {
      return UNSIGNED_BYTE$3;
    }
    if (typedArray instanceof Uint8ClampedArray) {
      return UNSIGNED_BYTE$3;
    }
    if (typedArray instanceof Int16Array) {
      return SHORT$2;
    }
    if (typedArray instanceof Uint16Array) {
      return UNSIGNED_SHORT$3;
    }
    if (typedArray instanceof Int32Array) {
      return INT$3;
    }
    if (typedArray instanceof Uint32Array) {
      return UNSIGNED_INT$3;
    }
    if (typedArray instanceof Float32Array) {
      return FLOAT$3;
    }
    throw new Error("unsupported typed array type");
  }
  function getGLTypeForTypedArrayType(typedArrayType) {
    if (typedArrayType === Int8Array) {
      return BYTE$2;
    }
    if (typedArrayType === Uint8Array) {
      return UNSIGNED_BYTE$3;
    }
    if (typedArrayType === Uint8ClampedArray) {
      return UNSIGNED_BYTE$3;
    }
    if (typedArrayType === Int16Array) {
      return SHORT$2;
    }
    if (typedArrayType === Uint16Array) {
      return UNSIGNED_SHORT$3;
    }
    if (typedArrayType === Int32Array) {
      return INT$3;
    }
    if (typedArrayType === Uint32Array) {
      return UNSIGNED_INT$3;
    }
    if (typedArrayType === Float32Array) {
      return FLOAT$3;
    }
    throw new Error("unsupported typed array type");
  }
  function getTypedArrayTypeForGLType(type) {
    const CTOR = glTypeToTypedArray[type];
    if (!CTOR) {
      throw new Error("unknown gl type");
    }
    return CTOR;
  }
  var isArrayBuffer$1 = typeof SharedArrayBuffer !== "undefined" ? function isArrayBufferOrSharedArrayBuffer(a) {
    return a && a.buffer && (a.buffer instanceof ArrayBuffer || a.buffer instanceof SharedArrayBuffer);
  } : function isArrayBuffer(a) {
    return a && a.buffer && a.buffer instanceof ArrayBuffer;
  };
  function error$1(...args) {
    console.error(...args);
  }
  var isTypeWeakMaps = /* @__PURE__ */ new Map();
  function isType(object, type) {
    if (!object || typeof object !== "object") {
      return false;
    }
    let weakMap = isTypeWeakMaps.get(type);
    if (!weakMap) {
      weakMap = /* @__PURE__ */ new WeakMap();
      isTypeWeakMaps.set(type, weakMap);
    }
    let isOfType = weakMap.get(object);
    if (isOfType === void 0) {
      const s = Object.prototype.toString.call(object);
      isOfType = s.substring(8, s.length - 1) === type;
      weakMap.set(object, isOfType);
    }
    return isOfType;
  }
  function isBuffer(gl, t) {
    return typeof WebGLBuffer !== "undefined" && isType(t, "WebGLBuffer");
  }
  function isTexture(gl, t) {
    return typeof WebGLTexture !== "undefined" && isType(t, "WebGLTexture");
  }
  function isSampler(gl, t) {
    return typeof WebGLSampler !== "undefined" && isType(t, "WebGLSampler");
  }
  var STATIC_DRAW = 35044;
  var ARRAY_BUFFER$1 = 34962;
  var ELEMENT_ARRAY_BUFFER$2 = 34963;
  var BUFFER_SIZE = 34660;
  var BYTE$1 = 5120;
  var UNSIGNED_BYTE$2 = 5121;
  var SHORT$1 = 5122;
  var UNSIGNED_SHORT$2 = 5123;
  var INT$2 = 5124;
  var UNSIGNED_INT$2 = 5125;
  var FLOAT$2 = 5126;
  var defaults$2 = {
    attribPrefix: ""
  };
  function setBufferFromTypedArray(gl, type, buffer, array, drawType) {
    gl.bindBuffer(type, buffer);
    gl.bufferData(type, array, drawType || STATIC_DRAW);
  }
  function createBufferFromTypedArray(gl, typedArray, type, drawType) {
    if (isBuffer(gl, typedArray)) {
      return typedArray;
    }
    type = type || ARRAY_BUFFER$1;
    const buffer = gl.createBuffer();
    setBufferFromTypedArray(gl, type, buffer, typedArray, drawType);
    return buffer;
  }
  function isIndices(name) {
    return name === "indices";
  }
  function getNormalizationForTypedArrayType(typedArrayType) {
    if (typedArrayType === Int8Array) {
      return true;
    }
    if (typedArrayType === Uint8Array) {
      return true;
    }
    return false;
  }
  function getArray$1(array) {
    return array.length ? array : array.data;
  }
  var texcoordRE = /coord|texture/i;
  var colorRE = /color|colour/i;
  function guessNumComponentsFromName(name, length2) {
    let numComponents;
    if (texcoordRE.test(name)) {
      numComponents = 2;
    } else if (colorRE.test(name)) {
      numComponents = 4;
    } else {
      numComponents = 3;
    }
    if (length2 % numComponents > 0) {
      throw new Error(`Can not guess numComponents for attribute '${name}'. Tried ${numComponents} but ${length2} values is not evenly divisible by ${numComponents}. You should specify it.`);
    }
    return numComponents;
  }
  function getNumComponents$1(array, arrayName, numValues) {
    return array.numComponents || array.size || guessNumComponentsFromName(arrayName, numValues || getArray$1(array).length);
  }
  function makeTypedArray(array, name) {
    if (isArrayBuffer$1(array)) {
      return array;
    }
    if (isArrayBuffer$1(array.data)) {
      return array.data;
    }
    if (Array.isArray(array)) {
      array = {
        data: array
      };
    }
    let Type = array.type ? typedArrayTypeFromGLTypeOrTypedArrayCtor(array.type) : void 0;
    if (!Type) {
      if (isIndices(name)) {
        Type = Uint16Array;
      } else {
        Type = Float32Array;
      }
    }
    return new Type(array.data);
  }
  function glTypeFromGLTypeOrTypedArrayType(glTypeOrTypedArrayCtor) {
    return typeof glTypeOrTypedArrayCtor === "number" ? glTypeOrTypedArrayCtor : glTypeOrTypedArrayCtor ? getGLTypeForTypedArrayType(glTypeOrTypedArrayCtor) : FLOAT$2;
  }
  function typedArrayTypeFromGLTypeOrTypedArrayCtor(glTypeOrTypedArrayCtor) {
    return typeof glTypeOrTypedArrayCtor === "number" ? getTypedArrayTypeForGLType(glTypeOrTypedArrayCtor) : glTypeOrTypedArrayCtor || Float32Array;
  }
  function attribBufferFromBuffer(gl, array) {
    return {
      buffer: array.buffer,
      numValues: 2 * 3 * 4,
      // safely divided by 2, 3, 4
      type: glTypeFromGLTypeOrTypedArrayType(array.type),
      arrayType: typedArrayTypeFromGLTypeOrTypedArrayCtor(array.type)
    };
  }
  function attribBufferFromSize(gl, array) {
    const numValues = array.data || array;
    const arrayType = typedArrayTypeFromGLTypeOrTypedArrayCtor(array.type);
    const numBytes = numValues * arrayType.BYTES_PER_ELEMENT;
    const buffer = gl.createBuffer();
    gl.bindBuffer(ARRAY_BUFFER$1, buffer);
    gl.bufferData(ARRAY_BUFFER$1, numBytes, array.drawType || STATIC_DRAW);
    return {
      buffer,
      numValues,
      type: getGLTypeForTypedArrayType(arrayType),
      arrayType
    };
  }
  function attribBufferFromArrayLike(gl, array, arrayName) {
    const typedArray = makeTypedArray(array, arrayName);
    return {
      arrayType: typedArray.constructor,
      buffer: createBufferFromTypedArray(gl, typedArray, void 0, array.drawType),
      type: getGLTypeForTypedArray(typedArray),
      numValues: 0
    };
  }
  function createAttribsFromArrays(gl, arrays) {
    const attribs = {};
    Object.keys(arrays).forEach(function(arrayName) {
      if (!isIndices(arrayName)) {
        const array = arrays[arrayName];
        const attribName = array.attrib || array.name || array.attribName || defaults$2.attribPrefix + arrayName;
        if (array.value) {
          if (!Array.isArray(array.value) && !isArrayBuffer$1(array.value)) {
            throw new Error("array.value is not array or typedarray");
          }
          attribs[attribName] = {
            value: array.value
          };
        } else {
          let fn;
          if (array.buffer && array.buffer instanceof WebGLBuffer) {
            fn = attribBufferFromBuffer;
          } else if (typeof array === "number" || typeof array.data === "number") {
            fn = attribBufferFromSize;
          } else {
            fn = attribBufferFromArrayLike;
          }
          const { buffer, type, numValues, arrayType } = fn(gl, array, arrayName);
          const normalization = array.normalize !== void 0 ? array.normalize : getNormalizationForTypedArrayType(arrayType);
          const numComponents = getNumComponents$1(array, arrayName, numValues);
          attribs[attribName] = {
            buffer,
            numComponents,
            type,
            normalize: normalization,
            stride: array.stride || 0,
            offset: array.offset || 0,
            divisor: array.divisor === void 0 ? void 0 : array.divisor,
            drawType: array.drawType
          };
        }
      }
    });
    gl.bindBuffer(ARRAY_BUFFER$1, null);
    return attribs;
  }
  function getBytesPerValueForGLType(gl, type) {
    if (type === BYTE$1)
      return 1;
    if (type === UNSIGNED_BYTE$2)
      return 1;
    if (type === SHORT$1)
      return 2;
    if (type === UNSIGNED_SHORT$2)
      return 2;
    if (type === INT$2)
      return 4;
    if (type === UNSIGNED_INT$2)
      return 4;
    if (type === FLOAT$2)
      return 4;
    return 0;
  }
  var positionKeys = ["position", "positions", "a_position"];
  function getNumElementsFromNonIndexedArrays(arrays) {
    let key;
    let ii;
    for (ii = 0; ii < positionKeys.length; ++ii) {
      key = positionKeys[ii];
      if (key in arrays) {
        break;
      }
    }
    if (ii === positionKeys.length) {
      key = Object.keys(arrays)[0];
    }
    const array = arrays[key];
    const length2 = getArray$1(array).length;
    if (length2 === void 0) {
      return 1;
    }
    const numComponents = getNumComponents$1(array, key);
    const numElements = length2 / numComponents;
    if (length2 % numComponents > 0) {
      throw new Error(`numComponents ${numComponents} not correct for length ${length2}`);
    }
    return numElements;
  }
  function getNumElementsFromAttributes(gl, attribs) {
    let key;
    let ii;
    for (ii = 0; ii < positionKeys.length; ++ii) {
      key = positionKeys[ii];
      if (key in attribs) {
        break;
      }
      key = defaults$2.attribPrefix + key;
      if (key in attribs) {
        break;
      }
    }
    if (ii === positionKeys.length) {
      key = Object.keys(attribs)[0];
    }
    const attrib = attribs[key];
    if (!attrib.buffer) {
      return 1;
    }
    gl.bindBuffer(ARRAY_BUFFER$1, attrib.buffer);
    const numBytes = gl.getBufferParameter(ARRAY_BUFFER$1, BUFFER_SIZE);
    gl.bindBuffer(ARRAY_BUFFER$1, null);
    const bytesPerValue = getBytesPerValueForGLType(gl, attrib.type);
    const totalElements = numBytes / bytesPerValue;
    const numComponents = attrib.numComponents || attrib.size;
    const numElements = totalElements / numComponents;
    if (numElements % 1 !== 0) {
      throw new Error(`numComponents ${numComponents} not correct for length ${length}`);
    }
    return numElements;
  }
  function createBufferInfoFromArrays(gl, arrays, srcBufferInfo) {
    const newAttribs = createAttribsFromArrays(gl, arrays);
    const bufferInfo = Object.assign({}, srcBufferInfo ? srcBufferInfo : {});
    bufferInfo.attribs = Object.assign({}, srcBufferInfo ? srcBufferInfo.attribs : {}, newAttribs);
    const indices = arrays.indices;
    if (indices) {
      const newIndices = makeTypedArray(indices, "indices");
      bufferInfo.indices = createBufferFromTypedArray(gl, newIndices, ELEMENT_ARRAY_BUFFER$2);
      bufferInfo.numElements = newIndices.length;
      bufferInfo.elementType = getGLTypeForTypedArray(newIndices);
    } else if (!bufferInfo.numElements) {
      bufferInfo.numElements = getNumElementsFromAttributes(gl, bufferInfo.attribs);
    }
    return bufferInfo;
  }
  function createBufferFromArray(gl, array, arrayName) {
    const type = arrayName === "indices" ? ELEMENT_ARRAY_BUFFER$2 : ARRAY_BUFFER$1;
    const typedArray = makeTypedArray(array, arrayName);
    return createBufferFromTypedArray(gl, typedArray, type);
  }
  function createBuffersFromArrays(gl, arrays) {
    const buffers = {};
    Object.keys(arrays).forEach(function(key) {
      buffers[key] = createBufferFromArray(gl, arrays[key], key);
    });
    if (arrays.indices) {
      buffers.numElements = arrays.indices.length;
      buffers.elementType = getGLTypeForTypedArray(makeTypedArray(arrays.indices));
    } else {
      buffers.numElements = getNumElementsFromNonIndexedArrays(arrays);
    }
    return buffers;
  }
  function augmentTypedArray(typedArray, numComponents) {
    let cursor = 0;
    typedArray.push = function() {
      for (let ii = 0; ii < arguments.length; ++ii) {
        const value = arguments[ii];
        if (value instanceof Array || isArrayBuffer$1(value)) {
          for (let jj = 0; jj < value.length; ++jj) {
            typedArray[cursor++] = value[jj];
          }
        } else {
          typedArray[cursor++] = value;
        }
      }
    };
    typedArray.reset = function(opt_index) {
      cursor = opt_index || 0;
    };
    typedArray.numComponents = numComponents;
    Object.defineProperty(typedArray, "numElements", {
      get: function() {
        return this.length / this.numComponents | 0;
      }
    });
    return typedArray;
  }
  function createAugmentedTypedArray(numComponents, numElements, opt_type) {
    const Type = opt_type || Float32Array;
    return augmentTypedArray(new Type(numComponents * numElements), numComponents);
  }
  function applyFuncToV3Array(array, matrix, fn) {
    const len = array.length;
    const tmp = new Float32Array(3);
    for (let ii = 0; ii < len; ii += 3) {
      fn(matrix, [array[ii], array[ii + 1], array[ii + 2]], tmp);
      array[ii] = tmp[0];
      array[ii + 1] = tmp[1];
      array[ii + 2] = tmp[2];
    }
  }
  function transformNormal(mi, v, dst) {
    dst = dst || create$1();
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
    dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
    dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
    return dst;
  }
  function reorientDirections(array, matrix) {
    applyFuncToV3Array(array, matrix, transformDirection);
    return array;
  }
  function reorientNormals(array, matrix) {
    applyFuncToV3Array(array, inverse(matrix), transformNormal);
    return array;
  }
  function reorientPositions(array, matrix) {
    applyFuncToV3Array(array, matrix, transformPoint);
    return array;
  }
  function reorientVertices(arrays, matrix) {
    Object.keys(arrays).forEach(function(name) {
      const array = arrays[name];
      if (name.indexOf("pos") >= 0) {
        reorientPositions(array, matrix);
      } else if (name.indexOf("tan") >= 0 || name.indexOf("binorm") >= 0) {
        reorientDirections(array, matrix);
      } else if (name.indexOf("norm") >= 0) {
        reorientNormals(array, matrix);
      }
    });
    return arrays;
  }
  function createXYQuadVertices(size, xOffset, yOffset) {
    size = size || 2;
    xOffset = xOffset || 0;
    yOffset = yOffset || 0;
    size *= 0.5;
    return {
      position: {
        numComponents: 2,
        data: [
          xOffset + -1 * size,
          yOffset + -1 * size,
          xOffset + 1 * size,
          yOffset + -1 * size,
          xOffset + -1 * size,
          yOffset + 1 * size,
          xOffset + 1 * size,
          yOffset + 1 * size
        ]
      },
      normal: [
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1
      ],
      texcoord: [
        0,
        0,
        1,
        0,
        0,
        1,
        1,
        1
      ],
      indices: [0, 1, 2, 2, 1, 3]
    };
  }
  function createPlaneVertices(width, depth, subdivisionsWidth, subdivisionsDepth, matrix) {
    width = width || 1;
    depth = depth || 1;
    subdivisionsWidth = subdivisionsWidth || 1;
    subdivisionsDepth = subdivisionsDepth || 1;
    matrix = matrix || identity();
    const numVertices = (subdivisionsWidth + 1) * (subdivisionsDepth + 1);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    for (let z = 0; z <= subdivisionsDepth; z++) {
      for (let x = 0; x <= subdivisionsWidth; x++) {
        const u = x / subdivisionsWidth;
        const v = z / subdivisionsDepth;
        positions.push(
          width * u - width * 0.5,
          0,
          depth * v - depth * 0.5
        );
        normals.push(0, 1, 0);
        texcoords.push(u, v);
      }
    }
    const numVertsAcross = subdivisionsWidth + 1;
    const indices = createAugmentedTypedArray(
      3,
      subdivisionsWidth * subdivisionsDepth * 2,
      Uint16Array
    );
    for (let z = 0; z < subdivisionsDepth; z++) {
      for (let x = 0; x < subdivisionsWidth; x++) {
        indices.push(
          (z + 0) * numVertsAcross + x,
          (z + 1) * numVertsAcross + x,
          (z + 0) * numVertsAcross + x + 1
        );
        indices.push(
          (z + 1) * numVertsAcross + x,
          (z + 1) * numVertsAcross + x + 1,
          (z + 0) * numVertsAcross + x + 1
        );
      }
    }
    const arrays = reorientVertices({
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    }, matrix);
    return arrays;
  }
  function createSphereVertices(radius, subdivisionsAxis, subdivisionsHeight, opt_startLatitudeInRadians, opt_endLatitudeInRadians, opt_startLongitudeInRadians, opt_endLongitudeInRadians) {
    if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
      throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
    }
    opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
    opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
    opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
    opt_endLongitudeInRadians = opt_endLongitudeInRadians || Math.PI * 2;
    const latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
    const longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians;
    const numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    for (let y = 0; y <= subdivisionsHeight; y++) {
      for (let x = 0; x <= subdivisionsAxis; x++) {
        const u = x / subdivisionsAxis;
        const v = y / subdivisionsHeight;
        const theta = longRange * u + opt_startLongitudeInRadians;
        const phi = latRange * v + opt_startLatitudeInRadians;
        const sinTheta = Math.sin(theta);
        const cosTheta = Math.cos(theta);
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);
        const ux = cosTheta * sinPhi;
        const uy = cosPhi;
        const uz = sinTheta * sinPhi;
        positions.push(radius * ux, radius * uy, radius * uz);
        normals.push(ux, uy, uz);
        texcoords.push(1 - u, v);
      }
    }
    const numVertsAround = subdivisionsAxis + 1;
    const indices = createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);
    for (let x = 0; x < subdivisionsAxis; x++) {
      for (let y = 0; y < subdivisionsHeight; y++) {
        indices.push(
          (y + 0) * numVertsAround + x,
          (y + 0) * numVertsAround + x + 1,
          (y + 1) * numVertsAround + x
        );
        indices.push(
          (y + 1) * numVertsAround + x,
          (y + 0) * numVertsAround + x + 1,
          (y + 1) * numVertsAround + x + 1
        );
      }
    }
    return {
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    };
  }
  var CUBE_FACE_INDICES = [
    [3, 7, 5, 1],
    // right
    [6, 2, 0, 4],
    // left
    [6, 7, 3, 2],
    // ??
    [0, 1, 5, 4],
    // ??
    [7, 6, 4, 5],
    // front
    [2, 3, 1, 0]
    // back
  ];
  function createCubeVertices(size) {
    size = size || 1;
    const k = size / 2;
    const cornerVertices = [
      [-k, -k, -k],
      [+k, -k, -k],
      [-k, +k, -k],
      [+k, +k, -k],
      [-k, -k, +k],
      [+k, -k, +k],
      [-k, +k, +k],
      [+k, +k, +k]
    ];
    const faceNormals = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1]
    ];
    const uvCoords = [
      [1, 0],
      [0, 0],
      [0, 1],
      [1, 1]
    ];
    const numVertices = 6 * 4;
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    const indices = createAugmentedTypedArray(3, 6 * 2, Uint16Array);
    for (let f = 0; f < 6; ++f) {
      const faceIndices = CUBE_FACE_INDICES[f];
      for (let v = 0; v < 4; ++v) {
        const position = cornerVertices[faceIndices[v]];
        const normal = faceNormals[f];
        const uv = uvCoords[v];
        positions.push(position);
        normals.push(normal);
        texcoords.push(uv);
      }
      const offset = 4 * f;
      indices.push(offset + 0, offset + 1, offset + 2);
      indices.push(offset + 0, offset + 2, offset + 3);
    }
    return {
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    };
  }
  function createTruncatedConeVertices(bottomRadius, topRadius, height, radialSubdivisions, verticalSubdivisions, opt_topCap, opt_bottomCap) {
    if (radialSubdivisions < 3) {
      throw new Error("radialSubdivisions must be 3 or greater");
    }
    if (verticalSubdivisions < 1) {
      throw new Error("verticalSubdivisions must be 1 or greater");
    }
    const topCap = opt_topCap === void 0 ? true : opt_topCap;
    const bottomCap = opt_bottomCap === void 0 ? true : opt_bottomCap;
    const extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);
    const numVertices = (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    const indices = createAugmentedTypedArray(3, radialSubdivisions * (verticalSubdivisions + extra / 2) * 2, Uint16Array);
    const vertsAroundEdge = radialSubdivisions + 1;
    const slant = Math.atan2(bottomRadius - topRadius, height);
    const cosSlant = Math.cos(slant);
    const sinSlant = Math.sin(slant);
    const start = topCap ? -2 : 0;
    const end = verticalSubdivisions + (bottomCap ? 2 : 0);
    for (let yy = start; yy <= end; ++yy) {
      let v = yy / verticalSubdivisions;
      let y = height * v;
      let ringRadius;
      if (yy < 0) {
        y = 0;
        v = 1;
        ringRadius = bottomRadius;
      } else if (yy > verticalSubdivisions) {
        y = height;
        v = 1;
        ringRadius = topRadius;
      } else {
        ringRadius = bottomRadius + (topRadius - bottomRadius) * (yy / verticalSubdivisions);
      }
      if (yy === -2 || yy === verticalSubdivisions + 2) {
        ringRadius = 0;
        v = 0;
      }
      y -= height / 2;
      for (let ii = 0; ii < vertsAroundEdge; ++ii) {
        const sin = Math.sin(ii * Math.PI * 2 / radialSubdivisions);
        const cos = Math.cos(ii * Math.PI * 2 / radialSubdivisions);
        positions.push(sin * ringRadius, y, cos * ringRadius);
        if (yy < 0) {
          normals.push(0, -1, 0);
        } else if (yy > verticalSubdivisions) {
          normals.push(0, 1, 0);
        } else if (ringRadius === 0) {
          normals.push(0, 0, 0);
        } else {
          normals.push(sin * cosSlant, sinSlant, cos * cosSlant);
        }
        texcoords.push(ii / radialSubdivisions, 1 - v);
      }
    }
    for (let yy = 0; yy < verticalSubdivisions + extra; ++yy) {
      if (yy === 1 && topCap || yy === verticalSubdivisions + extra - 2 && bottomCap) {
        continue;
      }
      for (let ii = 0; ii < radialSubdivisions; ++ii) {
        indices.push(
          vertsAroundEdge * (yy + 0) + 0 + ii,
          vertsAroundEdge * (yy + 0) + 1 + ii,
          vertsAroundEdge * (yy + 1) + 1 + ii
        );
        indices.push(
          vertsAroundEdge * (yy + 0) + 0 + ii,
          vertsAroundEdge * (yy + 1) + 1 + ii,
          vertsAroundEdge * (yy + 1) + 0 + ii
        );
      }
    }
    return {
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    };
  }
  function expandRLEData(rleData, padding) {
    padding = padding || [];
    const data = [];
    for (let ii = 0; ii < rleData.length; ii += 4) {
      const runLength = rleData[ii];
      const element = rleData.slice(ii + 1, ii + 4);
      element.push.apply(element, padding);
      for (let jj = 0; jj < runLength; ++jj) {
        data.push.apply(data, element);
      }
    }
    return data;
  }
  function create3DFVertices() {
    const positions = [
      // left column front
      0,
      0,
      0,
      0,
      150,
      0,
      30,
      0,
      0,
      0,
      150,
      0,
      30,
      150,
      0,
      30,
      0,
      0,
      // top rung front
      30,
      0,
      0,
      30,
      30,
      0,
      100,
      0,
      0,
      30,
      30,
      0,
      100,
      30,
      0,
      100,
      0,
      0,
      // middle rung front
      30,
      60,
      0,
      30,
      90,
      0,
      67,
      60,
      0,
      30,
      90,
      0,
      67,
      90,
      0,
      67,
      60,
      0,
      // left column back
      0,
      0,
      30,
      30,
      0,
      30,
      0,
      150,
      30,
      0,
      150,
      30,
      30,
      0,
      30,
      30,
      150,
      30,
      // top rung back
      30,
      0,
      30,
      100,
      0,
      30,
      30,
      30,
      30,
      30,
      30,
      30,
      100,
      0,
      30,
      100,
      30,
      30,
      // middle rung back
      30,
      60,
      30,
      67,
      60,
      30,
      30,
      90,
      30,
      30,
      90,
      30,
      67,
      60,
      30,
      67,
      90,
      30,
      // top
      0,
      0,
      0,
      100,
      0,
      0,
      100,
      0,
      30,
      0,
      0,
      0,
      100,
      0,
      30,
      0,
      0,
      30,
      // top rung front
      100,
      0,
      0,
      100,
      30,
      0,
      100,
      30,
      30,
      100,
      0,
      0,
      100,
      30,
      30,
      100,
      0,
      30,
      // under top rung
      30,
      30,
      0,
      30,
      30,
      30,
      100,
      30,
      30,
      30,
      30,
      0,
      100,
      30,
      30,
      100,
      30,
      0,
      // between top rung and middle
      30,
      30,
      0,
      30,
      60,
      30,
      30,
      30,
      30,
      30,
      30,
      0,
      30,
      60,
      0,
      30,
      60,
      30,
      // top of middle rung
      30,
      60,
      0,
      67,
      60,
      30,
      30,
      60,
      30,
      30,
      60,
      0,
      67,
      60,
      0,
      67,
      60,
      30,
      // front of middle rung
      67,
      60,
      0,
      67,
      90,
      30,
      67,
      60,
      30,
      67,
      60,
      0,
      67,
      90,
      0,
      67,
      90,
      30,
      // bottom of middle rung.
      30,
      90,
      0,
      30,
      90,
      30,
      67,
      90,
      30,
      30,
      90,
      0,
      67,
      90,
      30,
      67,
      90,
      0,
      // front of bottom
      30,
      90,
      0,
      30,
      150,
      30,
      30,
      90,
      30,
      30,
      90,
      0,
      30,
      150,
      0,
      30,
      150,
      30,
      // bottom
      0,
      150,
      0,
      0,
      150,
      30,
      30,
      150,
      30,
      0,
      150,
      0,
      30,
      150,
      30,
      30,
      150,
      0,
      // left side
      0,
      0,
      0,
      0,
      0,
      30,
      0,
      150,
      30,
      0,
      0,
      0,
      0,
      150,
      30,
      0,
      150,
      0
    ];
    const texcoords = [
      // left column front
      0.22,
      0.19,
      0.22,
      0.79,
      0.34,
      0.19,
      0.22,
      0.79,
      0.34,
      0.79,
      0.34,
      0.19,
      // top rung front
      0.34,
      0.19,
      0.34,
      0.31,
      0.62,
      0.19,
      0.34,
      0.31,
      0.62,
      0.31,
      0.62,
      0.19,
      // middle rung front
      0.34,
      0.43,
      0.34,
      0.55,
      0.49,
      0.43,
      0.34,
      0.55,
      0.49,
      0.55,
      0.49,
      0.43,
      // left column back
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      // top rung back
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      // middle rung back
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      // top
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      // top rung front
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      // under top rung
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      // between top rung and middle
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      // top of middle rung
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      // front of middle rung
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      // bottom of middle rung.
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      // front of bottom
      0,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      1,
      // bottom
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0,
      // left side
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      0
    ];
    const normals = expandRLEData([
      // left column front
      // top rung front
      // middle rung front
      18,
      0,
      0,
      1,
      // left column back
      // top rung back
      // middle rung back
      18,
      0,
      0,
      -1,
      // top
      6,
      0,
      1,
      0,
      // top rung front
      6,
      1,
      0,
      0,
      // under top rung
      6,
      0,
      -1,
      0,
      // between top rung and middle
      6,
      1,
      0,
      0,
      // top of middle rung
      6,
      0,
      1,
      0,
      // front of middle rung
      6,
      1,
      0,
      0,
      // bottom of middle rung.
      6,
      0,
      -1,
      0,
      // front of bottom
      6,
      1,
      0,
      0,
      // bottom
      6,
      0,
      -1,
      0,
      // left side
      6,
      -1,
      0,
      0
    ]);
    const colors = expandRLEData([
      // left column front
      // top rung front
      // middle rung front
      18,
      200,
      70,
      120,
      // left column back
      // top rung back
      // middle rung back
      18,
      80,
      70,
      200,
      // top
      6,
      70,
      200,
      210,
      // top rung front
      6,
      200,
      200,
      70,
      // under top rung
      6,
      210,
      100,
      70,
      // between top rung and middle
      6,
      210,
      160,
      70,
      // top of middle rung
      6,
      70,
      180,
      210,
      // front of middle rung
      6,
      100,
      70,
      210,
      // bottom of middle rung.
      6,
      76,
      210,
      100,
      // front of bottom
      6,
      140,
      210,
      80,
      // bottom
      6,
      90,
      130,
      110,
      // left side
      6,
      160,
      160,
      220
    ], [255]);
    const numVerts = positions.length / 3;
    const arrays = {
      position: createAugmentedTypedArray(3, numVerts),
      texcoord: createAugmentedTypedArray(2, numVerts),
      normal: createAugmentedTypedArray(3, numVerts),
      color: createAugmentedTypedArray(4, numVerts, Uint8Array),
      indices: createAugmentedTypedArray(3, numVerts / 3, Uint16Array)
    };
    arrays.position.push(positions);
    arrays.texcoord.push(texcoords);
    arrays.normal.push(normals);
    arrays.color.push(colors);
    for (let ii = 0; ii < numVerts; ++ii) {
      arrays.indices.push(ii);
    }
    return arrays;
  }
  function createCrescentVertices(verticalRadius, outerRadius, innerRadius, thickness, subdivisionsDown, startOffset, endOffset) {
    if (subdivisionsDown <= 0) {
      throw new Error("subdivisionDown must be > 0");
    }
    startOffset = startOffset || 0;
    endOffset = endOffset || 1;
    const subdivisionsThick = 2;
    const offsetRange = endOffset - startOffset;
    const numVertices = (subdivisionsDown + 1) * 2 * (2 + subdivisionsThick);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    function lerp(a, b, s) {
      return a + (b - a) * s;
    }
    function createArc(arcRadius, x, normalMult, normalAdd, uMult, uAdd) {
      for (let z = 0; z <= subdivisionsDown; z++) {
        const uBack = x / (subdivisionsThick - 1);
        const v = z / subdivisionsDown;
        const xBack = (uBack - 0.5) * 2;
        const angle = (startOffset + v * offsetRange) * Math.PI;
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        const radius = lerp(verticalRadius, arcRadius, s);
        const px = xBack * thickness;
        const py = c * verticalRadius;
        const pz = s * radius;
        positions.push(px, py, pz);
        const n = add(multiply$1([0, s, c], normalMult), normalAdd);
        normals.push(n);
        texcoords.push(uBack * uMult + uAdd, v);
      }
    }
    for (let x = 0; x < subdivisionsThick; x++) {
      const uBack = (x / (subdivisionsThick - 1) - 0.5) * 2;
      createArc(outerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
      createArc(outerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 0);
      createArc(innerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
      createArc(innerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 1);
    }
    const indices = createAugmentedTypedArray(3, subdivisionsDown * 2 * (2 + subdivisionsThick), Uint16Array);
    function createSurface(leftArcOffset, rightArcOffset) {
      for (let z = 0; z < subdivisionsDown; ++z) {
        indices.push(
          leftArcOffset + z + 0,
          leftArcOffset + z + 1,
          rightArcOffset + z + 0
        );
        indices.push(
          leftArcOffset + z + 1,
          rightArcOffset + z + 1,
          rightArcOffset + z + 0
        );
      }
    }
    const numVerticesDown = subdivisionsDown + 1;
    createSurface(numVerticesDown * 0, numVerticesDown * 4);
    createSurface(numVerticesDown * 5, numVerticesDown * 7);
    createSurface(numVerticesDown * 6, numVerticesDown * 2);
    createSurface(numVerticesDown * 3, numVerticesDown * 1);
    return {
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    };
  }
  function createCylinderVertices(radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap) {
    return createTruncatedConeVertices(
      radius,
      radius,
      height,
      radialSubdivisions,
      verticalSubdivisions,
      topCap,
      bottomCap
    );
  }
  function createTorusVertices(radius, thickness, radialSubdivisions, bodySubdivisions, startAngle, endAngle) {
    if (radialSubdivisions < 3) {
      throw new Error("radialSubdivisions must be 3 or greater");
    }
    if (bodySubdivisions < 3) {
      throw new Error("verticalSubdivisions must be 3 or greater");
    }
    startAngle = startAngle || 0;
    endAngle = endAngle || Math.PI * 2;
    const range = endAngle - startAngle;
    const radialParts = radialSubdivisions + 1;
    const bodyParts = bodySubdivisions + 1;
    const numVertices = radialParts * bodyParts;
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    const indices = createAugmentedTypedArray(3, radialSubdivisions * bodySubdivisions * 2, Uint16Array);
    for (let slice = 0; slice < bodyParts; ++slice) {
      const v = slice / bodySubdivisions;
      const sliceAngle = v * Math.PI * 2;
      const sliceSin = Math.sin(sliceAngle);
      const ringRadius = radius + sliceSin * thickness;
      const ny = Math.cos(sliceAngle);
      const y = ny * thickness;
      for (let ring = 0; ring < radialParts; ++ring) {
        const u = ring / radialSubdivisions;
        const ringAngle = startAngle + u * range;
        const xSin = Math.sin(ringAngle);
        const zCos = Math.cos(ringAngle);
        const x = xSin * ringRadius;
        const z = zCos * ringRadius;
        const nx = xSin * sliceSin;
        const nz = zCos * sliceSin;
        positions.push(x, y, z);
        normals.push(nx, ny, nz);
        texcoords.push(u, 1 - v);
      }
    }
    for (let slice = 0; slice < bodySubdivisions; ++slice) {
      for (let ring = 0; ring < radialSubdivisions; ++ring) {
        const nextRingIndex = 1 + ring;
        const nextSliceIndex = 1 + slice;
        indices.push(
          radialParts * slice + ring,
          radialParts * nextSliceIndex + ring,
          radialParts * slice + nextRingIndex
        );
        indices.push(
          radialParts * nextSliceIndex + ring,
          radialParts * nextSliceIndex + nextRingIndex,
          radialParts * slice + nextRingIndex
        );
      }
    }
    return {
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    };
  }
  function createDiscVertices(radius, divisions, stacks, innerRadius, stackPower) {
    if (divisions < 3) {
      throw new Error("divisions must be at least 3");
    }
    stacks = stacks ? stacks : 1;
    stackPower = stackPower ? stackPower : 1;
    innerRadius = innerRadius ? innerRadius : 0;
    const numVertices = (divisions + 1) * (stacks + 1);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    const indices = createAugmentedTypedArray(3, stacks * divisions * 2, Uint16Array);
    let firstIndex = 0;
    const radiusSpan = radius - innerRadius;
    const pointsPerStack = divisions + 1;
    for (let stack = 0; stack <= stacks; ++stack) {
      const stackRadius = innerRadius + radiusSpan * Math.pow(stack / stacks, stackPower);
      for (let i = 0; i <= divisions; ++i) {
        const theta = 2 * Math.PI * i / divisions;
        const x = stackRadius * Math.cos(theta);
        const z = stackRadius * Math.sin(theta);
        positions.push(x, 0, z);
        normals.push(0, 1, 0);
        texcoords.push(1 - i / divisions, stack / stacks);
        if (stack > 0 && i !== divisions) {
          const a = firstIndex + (i + 1);
          const b = firstIndex + i;
          const c = firstIndex + i - pointsPerStack;
          const d = firstIndex + (i + 1) - pointsPerStack;
          indices.push(a, b, c);
          indices.push(a, c, d);
        }
      }
      firstIndex += divisions + 1;
    }
    return {
      position: positions,
      normal: normals,
      texcoord: texcoords,
      indices
    };
  }
  function createBufferFunc(fn) {
    return function(gl) {
      const arrays = fn.apply(this, Array.prototype.slice.call(arguments, 1));
      return createBuffersFromArrays(gl, arrays);
    };
  }
  function createBufferInfoFunc(fn) {
    return function(gl) {
      const arrays = fn.apply(null, Array.prototype.slice.call(arguments, 1));
      return createBufferInfoFromArrays(gl, arrays);
    };
  }
  var create3DFBufferInfo = createBufferInfoFunc(create3DFVertices);
  var create3DFBuffers = createBufferFunc(create3DFVertices);
  var createCubeBufferInfo = createBufferInfoFunc(createCubeVertices);
  var createCubeBuffers = createBufferFunc(createCubeVertices);
  var createPlaneBufferInfo = createBufferInfoFunc(createPlaneVertices);
  var createPlaneBuffers = createBufferFunc(createPlaneVertices);
  var createSphereBufferInfo = createBufferInfoFunc(createSphereVertices);
  var createSphereBuffers = createBufferFunc(createSphereVertices);
  var createTruncatedConeBufferInfo = createBufferInfoFunc(createTruncatedConeVertices);
  var createTruncatedConeBuffers = createBufferFunc(createTruncatedConeVertices);
  var createXYQuadBufferInfo = createBufferInfoFunc(createXYQuadVertices);
  var createXYQuadBuffers = createBufferFunc(createXYQuadVertices);
  var createCrescentBufferInfo = createBufferInfoFunc(createCrescentVertices);
  var createCrescentBuffers = createBufferFunc(createCrescentVertices);
  var createCylinderBufferInfo = createBufferInfoFunc(createCylinderVertices);
  var createCylinderBuffers = createBufferFunc(createCylinderVertices);
  var createTorusBufferInfo = createBufferInfoFunc(createTorusVertices);
  var createTorusBuffers = createBufferFunc(createTorusVertices);
  var createDiscBufferInfo = createBufferInfoFunc(createDiscVertices);
  var createDiscBuffers = createBufferFunc(createDiscVertices);
  function isWebGL2(gl) {
    return !!gl.texStorage2D;
  }
  var glEnumToString = /* @__PURE__ */ function() {
    const haveEnumsForType = {};
    const enums = {};
    function addEnums(gl) {
      const type = gl.constructor.name;
      if (!haveEnumsForType[type]) {
        for (const key in gl) {
          if (typeof gl[key] === "number") {
            const existing = enums[gl[key]];
            enums[gl[key]] = existing ? `${existing} | ${key}` : key;
          }
        }
        haveEnumsForType[type] = true;
      }
    }
    return function glEnumToString2(gl, value) {
      addEnums(gl);
      return enums[value] || (typeof value === "number" ? `0x${value.toString(16)}` : value);
    };
  }();
  var defaults$1 = {
    textureColor: new Uint8Array([128, 192, 255, 255]),
    textureOptions: {},
    crossOrigin: void 0
  };
  var isArrayBuffer2 = isArrayBuffer$1;
  var getShared2DContext = /* @__PURE__ */ function() {
    let s_ctx;
    return function getShared2DContext2() {
      s_ctx = s_ctx || (typeof document !== "undefined" && document.createElement ? document.createElement("canvas").getContext("2d") : null);
      return s_ctx;
    };
  }();
  var ALPHA = 6406;
  var RGB = 6407;
  var RGBA$1 = 6408;
  var LUMINANCE = 6409;
  var LUMINANCE_ALPHA = 6410;
  var DEPTH_COMPONENT$1 = 6402;
  var DEPTH_STENCIL$1 = 34041;
  var CLAMP_TO_EDGE$1 = 33071;
  var NEAREST = 9728;
  var LINEAR$1 = 9729;
  var TEXTURE_2D$2 = 3553;
  var TEXTURE_CUBE_MAP$1 = 34067;
  var TEXTURE_3D$1 = 32879;
  var TEXTURE_2D_ARRAY$1 = 35866;
  var TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
  var TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
  var TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
  var TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
  var TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
  var TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
  var TEXTURE_MIN_FILTER = 10241;
  var TEXTURE_MAG_FILTER = 10240;
  var TEXTURE_WRAP_S = 10242;
  var TEXTURE_WRAP_T = 10243;
  var TEXTURE_WRAP_R = 32882;
  var TEXTURE_MIN_LOD = 33082;
  var TEXTURE_MAX_LOD = 33083;
  var TEXTURE_BASE_LEVEL = 33084;
  var TEXTURE_MAX_LEVEL = 33085;
  var TEXTURE_COMPARE_MODE = 34892;
  var TEXTURE_COMPARE_FUNC = 34893;
  var UNPACK_ALIGNMENT = 3317;
  var UNPACK_ROW_LENGTH = 3314;
  var UNPACK_IMAGE_HEIGHT = 32878;
  var UNPACK_SKIP_PIXELS = 3316;
  var UNPACK_SKIP_ROWS = 3315;
  var UNPACK_SKIP_IMAGES = 32877;
  var UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443;
  var UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
  var UNPACK_FLIP_Y_WEBGL = 37440;
  var R8 = 33321;
  var R8_SNORM = 36756;
  var R16F = 33325;
  var R32F = 33326;
  var R8UI = 33330;
  var R8I = 33329;
  var RG16UI = 33338;
  var RG16I = 33337;
  var RG32UI = 33340;
  var RG32I = 33339;
  var RG8 = 33323;
  var RG8_SNORM = 36757;
  var RG16F = 33327;
  var RG32F = 33328;
  var RG8UI = 33336;
  var RG8I = 33335;
  var R16UI = 33332;
  var R16I = 33331;
  var R32UI = 33334;
  var R32I = 33333;
  var RGB8 = 32849;
  var SRGB8 = 35905;
  var RGB565$1 = 36194;
  var RGB8_SNORM = 36758;
  var R11F_G11F_B10F = 35898;
  var RGB9_E5 = 35901;
  var RGB16F = 34843;
  var RGB32F = 34837;
  var RGB8UI = 36221;
  var RGB8I = 36239;
  var RGB16UI = 36215;
  var RGB16I = 36233;
  var RGB32UI = 36209;
  var RGB32I = 36227;
  var RGBA8 = 32856;
  var SRGB8_ALPHA8 = 35907;
  var RGBA8_SNORM = 36759;
  var RGB5_A1$1 = 32855;
  var RGBA4$1 = 32854;
  var RGB10_A2 = 32857;
  var RGBA16F = 34842;
  var RGBA32F = 34836;
  var RGBA8UI = 36220;
  var RGBA8I = 36238;
  var RGB10_A2UI = 36975;
  var RGBA16UI = 36214;
  var RGBA16I = 36232;
  var RGBA32I = 36226;
  var RGBA32UI = 36208;
  var DEPTH_COMPONENT16$1 = 33189;
  var DEPTH_COMPONENT24$1 = 33190;
  var DEPTH_COMPONENT32F$1 = 36012;
  var DEPTH32F_STENCIL8$1 = 36013;
  var DEPTH24_STENCIL8$1 = 35056;
  var BYTE = 5120;
  var UNSIGNED_BYTE$1 = 5121;
  var SHORT = 5122;
  var UNSIGNED_SHORT$1 = 5123;
  var INT$1 = 5124;
  var UNSIGNED_INT$1 = 5125;
  var FLOAT$1 = 5126;
  var UNSIGNED_SHORT_4_4_4_4 = 32819;
  var UNSIGNED_SHORT_5_5_5_1 = 32820;
  var UNSIGNED_SHORT_5_6_5 = 33635;
  var HALF_FLOAT = 5131;
  var HALF_FLOAT_OES = 36193;
  var UNSIGNED_INT_2_10_10_10_REV = 33640;
  var UNSIGNED_INT_10F_11F_11F_REV = 35899;
  var UNSIGNED_INT_5_9_9_9_REV = 35902;
  var FLOAT_32_UNSIGNED_INT_24_8_REV = 36269;
  var UNSIGNED_INT_24_8 = 34042;
  var RG = 33319;
  var RG_INTEGER = 33320;
  var RED = 6403;
  var RED_INTEGER = 36244;
  var RGB_INTEGER = 36248;
  var RGBA_INTEGER = 36249;
  var formatInfo = {};
  {
    const f = formatInfo;
    f[ALPHA] = { numColorComponents: 1 };
    f[LUMINANCE] = { numColorComponents: 1 };
    f[LUMINANCE_ALPHA] = { numColorComponents: 2 };
    f[RGB] = { numColorComponents: 3 };
    f[RGBA$1] = { numColorComponents: 4 };
    f[RED] = { numColorComponents: 1 };
    f[RED_INTEGER] = { numColorComponents: 1 };
    f[RG] = { numColorComponents: 2 };
    f[RG_INTEGER] = { numColorComponents: 2 };
    f[RGB] = { numColorComponents: 3 };
    f[RGB_INTEGER] = { numColorComponents: 3 };
    f[RGBA$1] = { numColorComponents: 4 };
    f[RGBA_INTEGER] = { numColorComponents: 4 };
    f[DEPTH_COMPONENT$1] = { numColorComponents: 1 };
    f[DEPTH_STENCIL$1] = { numColorComponents: 2 };
  }
  var s_textureInternalFormatInfo;
  function getTextureInternalFormatInfo(internalFormat) {
    if (!s_textureInternalFormatInfo) {
      const t = {};
      t[ALPHA] = { textureFormat: ALPHA, colorRenderable: true, textureFilterable: true, bytesPerElement: [1, 2, 2, 4], type: [UNSIGNED_BYTE$1, HALF_FLOAT, HALF_FLOAT_OES, FLOAT$1] };
      t[LUMINANCE] = { textureFormat: LUMINANCE, colorRenderable: true, textureFilterable: true, bytesPerElement: [1, 2, 2, 4], type: [UNSIGNED_BYTE$1, HALF_FLOAT, HALF_FLOAT_OES, FLOAT$1] };
      t[LUMINANCE_ALPHA] = { textureFormat: LUMINANCE_ALPHA, colorRenderable: true, textureFilterable: true, bytesPerElement: [2, 4, 4, 8], type: [UNSIGNED_BYTE$1, HALF_FLOAT, HALF_FLOAT_OES, FLOAT$1] };
      t[RGB] = { textureFormat: RGB, colorRenderable: true, textureFilterable: true, bytesPerElement: [3, 6, 6, 12, 2], type: [UNSIGNED_BYTE$1, HALF_FLOAT, HALF_FLOAT_OES, FLOAT$1, UNSIGNED_SHORT_5_6_5] };
      t[RGBA$1] = { textureFormat: RGBA$1, colorRenderable: true, textureFilterable: true, bytesPerElement: [4, 8, 8, 16, 2, 2], type: [UNSIGNED_BYTE$1, HALF_FLOAT, HALF_FLOAT_OES, FLOAT$1, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1] };
      t[DEPTH_COMPONENT$1] = { textureFormat: DEPTH_COMPONENT$1, colorRenderable: true, textureFilterable: false, bytesPerElement: [2, 4], type: [UNSIGNED_INT$1, UNSIGNED_SHORT$1] };
      t[R8] = { textureFormat: RED, colorRenderable: true, textureFilterable: true, bytesPerElement: [1], type: [UNSIGNED_BYTE$1] };
      t[R8_SNORM] = { textureFormat: RED, colorRenderable: false, textureFilterable: true, bytesPerElement: [1], type: [BYTE] };
      t[R16F] = { textureFormat: RED, colorRenderable: false, textureFilterable: true, bytesPerElement: [4, 2], type: [FLOAT$1, HALF_FLOAT] };
      t[R32F] = { textureFormat: RED, colorRenderable: false, textureFilterable: false, bytesPerElement: [4], type: [FLOAT$1] };
      t[R8UI] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [1], type: [UNSIGNED_BYTE$1] };
      t[R8I] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [1], type: [BYTE] };
      t[R16UI] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [2], type: [UNSIGNED_SHORT$1] };
      t[R16I] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [2], type: [SHORT] };
      t[R32UI] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [4], type: [UNSIGNED_INT$1] };
      t[R32I] = { textureFormat: RED_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [4], type: [INT$1] };
      t[RG8] = { textureFormat: RG, colorRenderable: true, textureFilterable: true, bytesPerElement: [2], type: [UNSIGNED_BYTE$1] };
      t[RG8_SNORM] = { textureFormat: RG, colorRenderable: false, textureFilterable: true, bytesPerElement: [2], type: [BYTE] };
      t[RG16F] = { textureFormat: RG, colorRenderable: false, textureFilterable: true, bytesPerElement: [8, 4], type: [FLOAT$1, HALF_FLOAT] };
      t[RG32F] = { textureFormat: RG, colorRenderable: false, textureFilterable: false, bytesPerElement: [8], type: [FLOAT$1] };
      t[RG8UI] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [2], type: [UNSIGNED_BYTE$1] };
      t[RG8I] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [2], type: [BYTE] };
      t[RG16UI] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [4], type: [UNSIGNED_SHORT$1] };
      t[RG16I] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [4], type: [SHORT] };
      t[RG32UI] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [8], type: [UNSIGNED_INT$1] };
      t[RG32I] = { textureFormat: RG_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [8], type: [INT$1] };
      t[RGB8] = { textureFormat: RGB, colorRenderable: true, textureFilterable: true, bytesPerElement: [3], type: [UNSIGNED_BYTE$1] };
      t[SRGB8] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [3], type: [UNSIGNED_BYTE$1] };
      t[RGB565$1] = { textureFormat: RGB, colorRenderable: true, textureFilterable: true, bytesPerElement: [3, 2], type: [UNSIGNED_BYTE$1, UNSIGNED_SHORT_5_6_5] };
      t[RGB8_SNORM] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [3], type: [BYTE] };
      t[R11F_G11F_B10F] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [12, 6, 4], type: [FLOAT$1, HALF_FLOAT, UNSIGNED_INT_10F_11F_11F_REV] };
      t[RGB9_E5] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [12, 6, 4], type: [FLOAT$1, HALF_FLOAT, UNSIGNED_INT_5_9_9_9_REV] };
      t[RGB16F] = { textureFormat: RGB, colorRenderable: false, textureFilterable: true, bytesPerElement: [12, 6], type: [FLOAT$1, HALF_FLOAT] };
      t[RGB32F] = { textureFormat: RGB, colorRenderable: false, textureFilterable: false, bytesPerElement: [12], type: [FLOAT$1] };
      t[RGB8UI] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: [3], type: [UNSIGNED_BYTE$1] };
      t[RGB8I] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: [3], type: [BYTE] };
      t[RGB16UI] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: [6], type: [UNSIGNED_SHORT$1] };
      t[RGB16I] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: [6], type: [SHORT] };
      t[RGB32UI] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: [12], type: [UNSIGNED_INT$1] };
      t[RGB32I] = { textureFormat: RGB_INTEGER, colorRenderable: false, textureFilterable: false, bytesPerElement: [12], type: [INT$1] };
      t[RGBA8] = { textureFormat: RGBA$1, colorRenderable: true, textureFilterable: true, bytesPerElement: [4], type: [UNSIGNED_BYTE$1] };
      t[SRGB8_ALPHA8] = { textureFormat: RGBA$1, colorRenderable: true, textureFilterable: true, bytesPerElement: [4], type: [UNSIGNED_BYTE$1] };
      t[RGBA8_SNORM] = { textureFormat: RGBA$1, colorRenderable: false, textureFilterable: true, bytesPerElement: [4], type: [BYTE] };
      t[RGB5_A1$1] = { textureFormat: RGBA$1, colorRenderable: true, textureFilterable: true, bytesPerElement: [4, 2, 4], type: [UNSIGNED_BYTE$1, UNSIGNED_SHORT_5_5_5_1, UNSIGNED_INT_2_10_10_10_REV] };
      t[RGBA4$1] = { textureFormat: RGBA$1, colorRenderable: true, textureFilterable: true, bytesPerElement: [4, 2], type: [UNSIGNED_BYTE$1, UNSIGNED_SHORT_4_4_4_4] };
      t[RGB10_A2] = { textureFormat: RGBA$1, colorRenderable: true, textureFilterable: true, bytesPerElement: [4], type: [UNSIGNED_INT_2_10_10_10_REV] };
      t[RGBA16F] = { textureFormat: RGBA$1, colorRenderable: false, textureFilterable: true, bytesPerElement: [16, 8], type: [FLOAT$1, HALF_FLOAT] };
      t[RGBA32F] = { textureFormat: RGBA$1, colorRenderable: false, textureFilterable: false, bytesPerElement: [16], type: [FLOAT$1] };
      t[RGBA8UI] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [4], type: [UNSIGNED_BYTE$1] };
      t[RGBA8I] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [4], type: [BYTE] };
      t[RGB10_A2UI] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [4], type: [UNSIGNED_INT_2_10_10_10_REV] };
      t[RGBA16UI] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [8], type: [UNSIGNED_SHORT$1] };
      t[RGBA16I] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [8], type: [SHORT] };
      t[RGBA32I] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [16], type: [INT$1] };
      t[RGBA32UI] = { textureFormat: RGBA_INTEGER, colorRenderable: true, textureFilterable: false, bytesPerElement: [16], type: [UNSIGNED_INT$1] };
      t[DEPTH_COMPONENT16$1] = { textureFormat: DEPTH_COMPONENT$1, colorRenderable: true, textureFilterable: false, bytesPerElement: [2, 4], type: [UNSIGNED_SHORT$1, UNSIGNED_INT$1] };
      t[DEPTH_COMPONENT24$1] = { textureFormat: DEPTH_COMPONENT$1, colorRenderable: true, textureFilterable: false, bytesPerElement: [4], type: [UNSIGNED_INT$1] };
      t[DEPTH_COMPONENT32F$1] = { textureFormat: DEPTH_COMPONENT$1, colorRenderable: true, textureFilterable: false, bytesPerElement: [4], type: [FLOAT$1] };
      t[DEPTH24_STENCIL8$1] = { textureFormat: DEPTH_STENCIL$1, colorRenderable: true, textureFilterable: false, bytesPerElement: [4], type: [UNSIGNED_INT_24_8] };
      t[DEPTH32F_STENCIL8$1] = { textureFormat: DEPTH_STENCIL$1, colorRenderable: true, textureFilterable: false, bytesPerElement: [4], type: [FLOAT_32_UNSIGNED_INT_24_8_REV] };
      Object.keys(t).forEach(function(internalFormat2) {
        const info = t[internalFormat2];
        info.bytesPerElementMap = {};
        info.bytesPerElement.forEach(function(bytesPerElement, ndx) {
          const type = info.type[ndx];
          info.bytesPerElementMap[type] = bytesPerElement;
        });
      });
      s_textureInternalFormatInfo = t;
    }
    return s_textureInternalFormatInfo[internalFormat];
  }
  function getBytesPerElementForInternalFormat(internalFormat, type) {
    const info = getTextureInternalFormatInfo(internalFormat);
    if (!info) {
      throw "unknown internal format";
    }
    const bytesPerElement = info.bytesPerElementMap[type];
    if (bytesPerElement === void 0) {
      throw "unknown internal format";
    }
    return bytesPerElement;
  }
  function getFormatAndTypeForInternalFormat(internalFormat) {
    const info = getTextureInternalFormatInfo(internalFormat);
    if (!info) {
      throw "unknown internal format";
    }
    return {
      format: info.textureFormat,
      type: info.type[0]
    };
  }
  function isPowerOf2(value) {
    return (value & value - 1) === 0;
  }
  function canGenerateMipmap(gl, width, height, internalFormat) {
    if (!isWebGL2(gl)) {
      return isPowerOf2(width) && isPowerOf2(height);
    }
    const info = getTextureInternalFormatInfo(internalFormat);
    if (!info) {
      throw "unknown internal format";
    }
    return info.colorRenderable && info.textureFilterable;
  }
  function canFilter(internalFormat) {
    const info = getTextureInternalFormatInfo(internalFormat);
    if (!info) {
      throw "unknown internal format";
    }
    return info.textureFilterable;
  }
  function getTextureTypeForArrayType(gl, src, defaultType) {
    if (isArrayBuffer2(src)) {
      return getGLTypeForTypedArray(src);
    }
    return defaultType || UNSIGNED_BYTE$1;
  }
  function guessDimensions(gl, target, width, height, numElements) {
    if (numElements % 1 !== 0) {
      throw "can't guess dimensions";
    }
    if (!width && !height) {
      const size = Math.sqrt(numElements / (target === TEXTURE_CUBE_MAP$1 ? 6 : 1));
      if (size % 1 === 0) {
        width = size;
        height = size;
      } else {
        width = numElements;
        height = 1;
      }
    } else if (!height) {
      height = numElements / width;
      if (height % 1) {
        throw "can't guess dimensions";
      }
    } else if (!width) {
      width = numElements / height;
      if (width % 1) {
        throw "can't guess dimensions";
      }
    }
    return {
      width,
      height
    };
  }
  function setPackState(gl, options) {
    if (options.colorspaceConversion !== void 0) {
      gl.pixelStorei(UNPACK_COLORSPACE_CONVERSION_WEBGL, options.colorspaceConversion);
    }
    if (options.premultiplyAlpha !== void 0) {
      gl.pixelStorei(UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.premultiplyAlpha);
    }
    if (options.flipY !== void 0) {
      gl.pixelStorei(UNPACK_FLIP_Y_WEBGL, options.flipY);
    }
  }
  function setSkipStateToDefault(gl) {
    gl.pixelStorei(UNPACK_ALIGNMENT, 4);
    if (isWebGL2(gl)) {
      gl.pixelStorei(UNPACK_ROW_LENGTH, 0);
      gl.pixelStorei(UNPACK_IMAGE_HEIGHT, 0);
      gl.pixelStorei(UNPACK_SKIP_PIXELS, 0);
      gl.pixelStorei(UNPACK_SKIP_ROWS, 0);
      gl.pixelStorei(UNPACK_SKIP_IMAGES, 0);
    }
  }
  function setTextureSamplerParameters(gl, target, parameteriFn, options) {
    if (options.minMag) {
      parameteriFn.call(gl, target, TEXTURE_MIN_FILTER, options.minMag);
      parameteriFn.call(gl, target, TEXTURE_MAG_FILTER, options.minMag);
    }
    if (options.min) {
      parameteriFn.call(gl, target, TEXTURE_MIN_FILTER, options.min);
    }
    if (options.mag) {
      parameteriFn.call(gl, target, TEXTURE_MAG_FILTER, options.mag);
    }
    if (options.wrap) {
      parameteriFn.call(gl, target, TEXTURE_WRAP_S, options.wrap);
      parameteriFn.call(gl, target, TEXTURE_WRAP_T, options.wrap);
      if (target === TEXTURE_3D$1 || isSampler(gl, target)) {
        parameteriFn.call(gl, target, TEXTURE_WRAP_R, options.wrap);
      }
    }
    if (options.wrapR) {
      parameteriFn.call(gl, target, TEXTURE_WRAP_R, options.wrapR);
    }
    if (options.wrapS) {
      parameteriFn.call(gl, target, TEXTURE_WRAP_S, options.wrapS);
    }
    if (options.wrapT) {
      parameteriFn.call(gl, target, TEXTURE_WRAP_T, options.wrapT);
    }
    if (options.minLod !== void 0) {
      parameteriFn.call(gl, target, TEXTURE_MIN_LOD, options.minLod);
    }
    if (options.maxLod !== void 0) {
      parameteriFn.call(gl, target, TEXTURE_MAX_LOD, options.maxLod);
    }
    if (options.baseLevel !== void 0) {
      parameteriFn.call(gl, target, TEXTURE_BASE_LEVEL, options.baseLevel);
    }
    if (options.maxLevel !== void 0) {
      parameteriFn.call(gl, target, TEXTURE_MAX_LEVEL, options.maxLevel);
    }
    if (options.compareFunc !== void 0) {
      parameteriFn.call(gl, target, TEXTURE_COMPARE_FUNC, options.compareFunc);
    }
    if (options.compareMode !== void 0) {
      parameteriFn.call(gl, target, TEXTURE_COMPARE_MODE, options.compareMode);
    }
  }
  function setTextureParameters(gl, tex, options) {
    const target = options.target || TEXTURE_2D$2;
    gl.bindTexture(target, tex);
    setTextureSamplerParameters(gl, target, gl.texParameteri, options);
  }
  function make1Pixel(color) {
    color = color || defaults$1.textureColor;
    if (isArrayBuffer2(color)) {
      return color;
    }
    return new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
  }
  function setTextureFilteringForSize(gl, tex, options, width, height, internalFormat) {
    options = options || defaults$1.textureOptions;
    internalFormat = internalFormat || RGBA$1;
    const target = options.target || TEXTURE_2D$2;
    width = width || options.width;
    height = height || options.height;
    gl.bindTexture(target, tex);
    if (canGenerateMipmap(gl, width, height, internalFormat)) {
      gl.generateMipmap(target);
    } else {
      const filtering = canFilter(internalFormat) ? LINEAR$1 : NEAREST;
      gl.texParameteri(target, TEXTURE_MIN_FILTER, filtering);
      gl.texParameteri(target, TEXTURE_MAG_FILTER, filtering);
      gl.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE$1);
      gl.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE$1);
    }
  }
  function shouldAutomaticallySetTextureFilteringForSize(options) {
    return options.auto === true || options.auto === void 0 && options.level === void 0;
  }
  function getCubeFaceOrder(gl, options) {
    options = options || {};
    return options.cubeFaceOrder || [
      TEXTURE_CUBE_MAP_POSITIVE_X,
      TEXTURE_CUBE_MAP_NEGATIVE_X,
      TEXTURE_CUBE_MAP_POSITIVE_Y,
      TEXTURE_CUBE_MAP_NEGATIVE_Y,
      TEXTURE_CUBE_MAP_POSITIVE_Z,
      TEXTURE_CUBE_MAP_NEGATIVE_Z
    ];
  }
  function getCubeFacesWithNdx(gl, options) {
    const faces = getCubeFaceOrder(gl, options);
    const facesWithNdx = faces.map(function(face, ndx) {
      return { face, ndx };
    });
    facesWithNdx.sort(function(a, b) {
      return a.face - b.face;
    });
    return facesWithNdx;
  }
  function setTextureFromElement(gl, tex, element, options) {
    options = options || defaults$1.textureOptions;
    const target = options.target || TEXTURE_2D$2;
    const level = options.level || 0;
    let width = element.width;
    let height = element.height;
    const internalFormat = options.internalFormat || options.format || RGBA$1;
    const formatType = getFormatAndTypeForInternalFormat(internalFormat);
    const format = options.format || formatType.format;
    const type = options.type || formatType.type;
    setPackState(gl, options);
    gl.bindTexture(target, tex);
    if (target === TEXTURE_CUBE_MAP$1) {
      const imgWidth = element.width;
      const imgHeight = element.height;
      let size;
      let slices;
      if (imgWidth / 6 === imgHeight) {
        size = imgHeight;
        slices = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
      } else if (imgHeight / 6 === imgWidth) {
        size = imgWidth;
        slices = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
      } else if (imgWidth / 3 === imgHeight / 2) {
        size = imgWidth / 3;
        slices = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
      } else if (imgWidth / 2 === imgHeight / 3) {
        size = imgWidth / 2;
        slices = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2];
      } else {
        throw "can't figure out cube map from element: " + (element.src ? element.src : element.nodeName);
      }
      const ctx = getShared2DContext();
      if (ctx) {
        ctx.canvas.width = size;
        ctx.canvas.height = size;
        width = size;
        height = size;
        getCubeFacesWithNdx(gl, options).forEach(function(f) {
          const xOffset = slices[f.ndx * 2 + 0] * size;
          const yOffset = slices[f.ndx * 2 + 1] * size;
          ctx.drawImage(element, xOffset, yOffset, size, size, 0, 0, size, size);
          gl.texImage2D(f.face, level, internalFormat, format, type, ctx.canvas);
        });
        ctx.canvas.width = 1;
        ctx.canvas.height = 1;
      } else if (typeof createImageBitmap !== "undefined") {
        width = size;
        height = size;
        getCubeFacesWithNdx(gl, options).forEach(function(f) {
          const xOffset = slices[f.ndx * 2 + 0] * size;
          const yOffset = slices[f.ndx * 2 + 1] * size;
          gl.texImage2D(f.face, level, internalFormat, size, size, 0, format, type, null);
          createImageBitmap(element, xOffset, yOffset, size, size, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then(function(imageBitmap) {
            setPackState(gl, options);
            gl.bindTexture(target, tex);
            gl.texImage2D(f.face, level, internalFormat, format, type, imageBitmap);
            if (shouldAutomaticallySetTextureFilteringForSize(options)) {
              setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
            }
          });
        });
      }
    } else if (target === TEXTURE_3D$1 || target === TEXTURE_2D_ARRAY$1) {
      const smallest = Math.min(element.width, element.height);
      const largest = Math.max(element.width, element.height);
      const depth = largest / smallest;
      if (depth % 1 !== 0) {
        throw "can not compute 3D dimensions of element";
      }
      const xMult = element.width === largest ? 1 : 0;
      const yMult = element.height === largest ? 1 : 0;
      gl.pixelStorei(UNPACK_ALIGNMENT, 1);
      gl.pixelStorei(UNPACK_ROW_LENGTH, element.width);
      gl.pixelStorei(UNPACK_IMAGE_HEIGHT, 0);
      gl.pixelStorei(UNPACK_SKIP_IMAGES, 0);
      gl.texImage3D(target, level, internalFormat, smallest, smallest, smallest, 0, format, type, null);
      for (let d = 0; d < depth; ++d) {
        const srcX = d * smallest * xMult;
        const srcY = d * smallest * yMult;
        gl.pixelStorei(UNPACK_SKIP_PIXELS, srcX);
        gl.pixelStorei(UNPACK_SKIP_ROWS, srcY);
        gl.texSubImage3D(target, level, 0, 0, d, smallest, smallest, 1, format, type, element);
      }
      setSkipStateToDefault(gl);
    } else {
      gl.texImage2D(target, level, internalFormat, format, type, element);
    }
    if (shouldAutomaticallySetTextureFilteringForSize(options)) {
      setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
    }
    setTextureParameters(gl, tex, options);
  }
  function noop() {
  }
  function urlIsSameOrigin(url) {
    if (typeof document !== "undefined") {
      const a = document.createElement("a");
      a.href = url;
      return a.hostname === location.hostname && a.port === location.port && a.protocol === location.protocol;
    } else {
      const localOrigin = new URL(location.href).origin;
      const urlOrigin = new URL(url, location.href).origin;
      return urlOrigin === localOrigin;
    }
  }
  function setToAnonymousIfUndefinedAndURLIsNotSameOrigin(url, crossOrigin) {
    return crossOrigin === void 0 && !urlIsSameOrigin(url) ? "anonymous" : crossOrigin;
  }
  function loadImage(url, crossOrigin, callback) {
    callback = callback || noop;
    let img;
    crossOrigin = crossOrigin !== void 0 ? crossOrigin : defaults$1.crossOrigin;
    crossOrigin = setToAnonymousIfUndefinedAndURLIsNotSameOrigin(url, crossOrigin);
    if (typeof Image !== "undefined") {
      img = new Image();
      if (crossOrigin !== void 0) {
        img.crossOrigin = crossOrigin;
      }
      const clearEventHandlers = function clearEventHandlers2() {
        img.removeEventListener("error", onError);
        img.removeEventListener("load", onLoad);
        img = null;
      };
      const onError = function onError2() {
        const msg = "couldn't load image: " + url;
        error$1(msg);
        callback(msg, img);
        clearEventHandlers();
      };
      const onLoad = function onLoad2() {
        callback(null, img);
        clearEventHandlers();
      };
      img.addEventListener("error", onError);
      img.addEventListener("load", onLoad);
      img.src = url;
      return img;
    } else if (typeof ImageBitmap !== "undefined") {
      let err;
      let bm;
      const cb = function cb2() {
        callback(err, bm);
      };
      const options = {};
      if (crossOrigin) {
        options.mode = "cors";
      }
      fetch(url, options).then(function(response) {
        if (!response.ok) {
          throw response;
        }
        return response.blob();
      }).then(function(blob) {
        return createImageBitmap(blob, {
          premultiplyAlpha: "none",
          colorSpaceConversion: "none"
        });
      }).then(function(bitmap) {
        bm = bitmap;
        setTimeout(cb);
      }).catch(function(e) {
        err = e;
        setTimeout(cb);
      });
      img = null;
    }
    return img;
  }
  function isTexImageSource(obj) {
    return typeof ImageBitmap !== "undefined" && obj instanceof ImageBitmap || typeof ImageData !== "undefined" && obj instanceof ImageData || typeof HTMLElement !== "undefined" && obj instanceof HTMLElement;
  }
  function loadAndUseImage(obj, crossOrigin, callback) {
    if (isTexImageSource(obj)) {
      setTimeout(function() {
        callback(null, obj);
      });
      return obj;
    }
    return loadImage(obj, crossOrigin, callback);
  }
  function setTextureTo1PixelColor(gl, tex, options) {
    options = options || defaults$1.textureOptions;
    const target = options.target || TEXTURE_2D$2;
    gl.bindTexture(target, tex);
    if (options.color === false) {
      return;
    }
    const color = make1Pixel(options.color);
    if (target === TEXTURE_CUBE_MAP$1) {
      for (let ii = 0; ii < 6; ++ii) {
        gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, RGBA$1, 1, 1, 0, RGBA$1, UNSIGNED_BYTE$1, color);
      }
    } else if (target === TEXTURE_3D$1 || target === TEXTURE_2D_ARRAY$1) {
      gl.texImage3D(target, 0, RGBA$1, 1, 1, 1, 0, RGBA$1, UNSIGNED_BYTE$1, color);
    } else {
      gl.texImage2D(target, 0, RGBA$1, 1, 1, 0, RGBA$1, UNSIGNED_BYTE$1, color);
    }
  }
  function loadTextureFromUrl(gl, tex, options, callback) {
    callback = callback || noop;
    options = options || defaults$1.textureOptions;
    setTextureTo1PixelColor(gl, tex, options);
    options = Object.assign({}, options);
    const img = loadAndUseImage(options.src, options.crossOrigin, function(err, img2) {
      if (err) {
        callback(err, tex, img2);
      } else {
        setTextureFromElement(gl, tex, img2, options);
        callback(null, tex, img2);
      }
    });
    return img;
  }
  function loadCubemapFromUrls(gl, tex, options, callback) {
    callback = callback || noop;
    const urls = options.src;
    if (urls.length !== 6) {
      throw "there must be 6 urls for a cubemap";
    }
    const level = options.level || 0;
    const internalFormat = options.internalFormat || options.format || RGBA$1;
    const formatType = getFormatAndTypeForInternalFormat(internalFormat);
    const format = options.format || formatType.format;
    const type = options.type || UNSIGNED_BYTE$1;
    const target = options.target || TEXTURE_2D$2;
    if (target !== TEXTURE_CUBE_MAP$1) {
      throw "target must be TEXTURE_CUBE_MAP";
    }
    setTextureTo1PixelColor(gl, tex, options);
    options = Object.assign({}, options);
    let numToLoad = 6;
    const errors = [];
    const faces = getCubeFaceOrder(gl, options);
    let imgs;
    function uploadImg(faceTarget) {
      return function(err, img) {
        --numToLoad;
        if (err) {
          errors.push(err);
        } else {
          if (img.width !== img.height) {
            errors.push("cubemap face img is not a square: " + img.src);
          } else {
            setPackState(gl, options);
            gl.bindTexture(target, tex);
            if (numToLoad === 5) {
              getCubeFaceOrder().forEach(function(otherTarget) {
                gl.texImage2D(otherTarget, level, internalFormat, format, type, img);
              });
            } else {
              gl.texImage2D(faceTarget, level, internalFormat, format, type, img);
            }
            if (shouldAutomaticallySetTextureFilteringForSize(options)) {
              gl.generateMipmap(target);
            }
          }
        }
        if (numToLoad === 0) {
          callback(errors.length ? errors : void 0, tex, imgs);
        }
      };
    }
    imgs = urls.map(function(url, ndx) {
      return loadAndUseImage(url, options.crossOrigin, uploadImg(faces[ndx]));
    });
  }
  function loadSlicesFromUrls(gl, tex, options, callback) {
    callback = callback || noop;
    const urls = options.src;
    const internalFormat = options.internalFormat || options.format || RGBA$1;
    const formatType = getFormatAndTypeForInternalFormat(internalFormat);
    const format = options.format || formatType.format;
    const type = options.type || UNSIGNED_BYTE$1;
    const target = options.target || TEXTURE_2D_ARRAY$1;
    if (target !== TEXTURE_3D$1 && target !== TEXTURE_2D_ARRAY$1) {
      throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
    }
    setTextureTo1PixelColor(gl, tex, options);
    options = Object.assign({}, options);
    let numToLoad = urls.length;
    const errors = [];
    let imgs;
    const level = options.level || 0;
    let width = options.width;
    let height = options.height;
    const depth = urls.length;
    let firstImage = true;
    function uploadImg(slice) {
      return function(err, img) {
        --numToLoad;
        if (err) {
          errors.push(err);
        } else {
          setPackState(gl, options);
          gl.bindTexture(target, tex);
          if (firstImage) {
            firstImage = false;
            width = options.width || img.width;
            height = options.height || img.height;
            gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null);
            for (let s = 0; s < depth; ++s) {
              gl.texSubImage3D(target, level, 0, 0, s, width, height, 1, format, type, img);
            }
          } else {
            let src = img;
            let ctx;
            if (img.width !== width || img.height !== height) {
              ctx = getShared2DContext();
              src = ctx.canvas;
              ctx.canvas.width = width;
              ctx.canvas.height = height;
              ctx.drawImage(img, 0, 0, width, height);
            }
            gl.texSubImage3D(target, level, 0, 0, slice, width, height, 1, format, type, src);
            if (ctx && src === ctx.canvas) {
              ctx.canvas.width = 0;
              ctx.canvas.height = 0;
            }
          }
          if (shouldAutomaticallySetTextureFilteringForSize(options)) {
            gl.generateMipmap(target);
          }
        }
        if (numToLoad === 0) {
          callback(errors.length ? errors : void 0, tex, imgs);
        }
      };
    }
    imgs = urls.map(function(url, ndx) {
      return loadAndUseImage(url, options.crossOrigin, uploadImg(ndx));
    });
  }
  function setTextureFromArray(gl, tex, src, options) {
    options = options || defaults$1.textureOptions;
    const target = options.target || TEXTURE_2D$2;
    gl.bindTexture(target, tex);
    let width = options.width;
    let height = options.height;
    let depth = options.depth;
    const level = options.level || 0;
    const internalFormat = options.internalFormat || options.format || RGBA$1;
    const formatType = getFormatAndTypeForInternalFormat(internalFormat);
    const format = options.format || formatType.format;
    const type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);
    if (!isArrayBuffer2(src)) {
      const Type = getTypedArrayTypeForGLType(type);
      src = new Type(src);
    } else if (src instanceof Uint8ClampedArray) {
      src = new Uint8Array(src.buffer);
    }
    const bytesPerElement = getBytesPerElementForInternalFormat(internalFormat, type);
    const numElements = src.byteLength / bytesPerElement;
    if (numElements % 1) {
      throw "length wrong size for format: " + glEnumToString(gl, format);
    }
    let dimensions;
    if (target === TEXTURE_3D$1 || target === TEXTURE_2D_ARRAY$1) {
      if (!width && !height && !depth) {
        const size = Math.cbrt(numElements);
        if (size % 1 !== 0) {
          throw "can't guess cube size of array of numElements: " + numElements;
        }
        width = size;
        height = size;
        depth = size;
      } else if (width && (!height || !depth)) {
        dimensions = guessDimensions(gl, target, height, depth, numElements / width);
        height = dimensions.width;
        depth = dimensions.height;
      } else if (height && (!width || !depth)) {
        dimensions = guessDimensions(gl, target, width, depth, numElements / height);
        width = dimensions.width;
        depth = dimensions.height;
      } else {
        dimensions = guessDimensions(gl, target, width, height, numElements / depth);
        width = dimensions.width;
        height = dimensions.height;
      }
    } else {
      dimensions = guessDimensions(gl, target, width, height, numElements);
      width = dimensions.width;
      height = dimensions.height;
    }
    setSkipStateToDefault(gl);
    gl.pixelStorei(UNPACK_ALIGNMENT, options.unpackAlignment || 1);
    setPackState(gl, options);
    if (target === TEXTURE_CUBE_MAP$1) {
      const elementsPerElement = bytesPerElement / src.BYTES_PER_ELEMENT;
      const faceSize = numElements / 6 * elementsPerElement;
      getCubeFacesWithNdx(gl, options).forEach((f) => {
        const offset = faceSize * f.ndx;
        const data = src.subarray(offset, offset + faceSize);
        gl.texImage2D(f.face, level, internalFormat, width, height, 0, format, type, data);
      });
    } else if (target === TEXTURE_3D$1 || target === TEXTURE_2D_ARRAY$1) {
      gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, src);
    } else {
      gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, src);
    }
    return {
      width,
      height,
      depth,
      type
    };
  }
  function setEmptyTexture(gl, tex, options) {
    const target = options.target || TEXTURE_2D$2;
    gl.bindTexture(target, tex);
    const level = options.level || 0;
    const internalFormat = options.internalFormat || options.format || RGBA$1;
    const formatType = getFormatAndTypeForInternalFormat(internalFormat);
    const format = options.format || formatType.format;
    const type = options.type || formatType.type;
    setPackState(gl, options);
    if (target === TEXTURE_CUBE_MAP$1) {
      for (let ii = 0; ii < 6; ++ii) {
        gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, options.width, options.height, 0, format, type, null);
      }
    } else if (target === TEXTURE_3D$1 || target === TEXTURE_2D_ARRAY$1) {
      gl.texImage3D(target, level, internalFormat, options.width, options.height, options.depth, 0, format, type, null);
    } else {
      gl.texImage2D(target, level, internalFormat, options.width, options.height, 0, format, type, null);
    }
  }
  function createTexture(gl, options, callback) {
    callback = callback || noop;
    options = options || defaults$1.textureOptions;
    const tex = gl.createTexture();
    const target = options.target || TEXTURE_2D$2;
    let width = options.width || 1;
    let height = options.height || 1;
    const internalFormat = options.internalFormat || RGBA$1;
    gl.bindTexture(target, tex);
    if (target === TEXTURE_CUBE_MAP$1) {
      gl.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE$1);
      gl.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE$1);
    }
    let src = options.src;
    if (src) {
      if (typeof src === "function") {
        src = src(gl, options);
      }
      if (typeof src === "string") {
        loadTextureFromUrl(gl, tex, options, callback);
      } else if (isArrayBuffer2(src) || Array.isArray(src) && (typeof src[0] === "number" || Array.isArray(src[0]) || isArrayBuffer2(src[0]))) {
        const dimensions = setTextureFromArray(gl, tex, src, options);
        width = dimensions.width;
        height = dimensions.height;
      } else if (Array.isArray(src) && (typeof src[0] === "string" || isTexImageSource(src[0]))) {
        if (target === TEXTURE_CUBE_MAP$1) {
          loadCubemapFromUrls(gl, tex, options, callback);
        } else {
          loadSlicesFromUrls(gl, tex, options, callback);
        }
      } else {
        setTextureFromElement(gl, tex, src, options);
        width = src.width;
        height = src.height;
      }
    } else {
      setEmptyTexture(gl, tex, options);
    }
    if (shouldAutomaticallySetTextureFilteringForSize(options)) {
      setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
    }
    setTextureParameters(gl, tex, options);
    return tex;
  }
  var error = error$1;
  function getElementById(id) {
    return typeof document !== "undefined" && document.getElementById ? document.getElementById(id) : null;
  }
  var TEXTURE0 = 33984;
  var ARRAY_BUFFER = 34962;
  var ELEMENT_ARRAY_BUFFER$1 = 34963;
  var COMPILE_STATUS = 35713;
  var LINK_STATUS = 35714;
  var FRAGMENT_SHADER = 35632;
  var VERTEX_SHADER = 35633;
  var SEPARATE_ATTRIBS = 35981;
  var ACTIVE_UNIFORMS = 35718;
  var ACTIVE_ATTRIBUTES = 35721;
  var TRANSFORM_FEEDBACK_VARYINGS = 35971;
  var ACTIVE_UNIFORM_BLOCKS = 35382;
  var UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 35396;
  var UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 35398;
  var UNIFORM_BLOCK_DATA_SIZE = 35392;
  var UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 35395;
  var FLOAT = 5126;
  var FLOAT_VEC2 = 35664;
  var FLOAT_VEC3 = 35665;
  var FLOAT_VEC4 = 35666;
  var INT = 5124;
  var INT_VEC2 = 35667;
  var INT_VEC3 = 35668;
  var INT_VEC4 = 35669;
  var BOOL = 35670;
  var BOOL_VEC2 = 35671;
  var BOOL_VEC3 = 35672;
  var BOOL_VEC4 = 35673;
  var FLOAT_MAT2 = 35674;
  var FLOAT_MAT3 = 35675;
  var FLOAT_MAT4 = 35676;
  var SAMPLER_2D = 35678;
  var SAMPLER_CUBE = 35680;
  var SAMPLER_3D = 35679;
  var SAMPLER_2D_SHADOW = 35682;
  var FLOAT_MAT2x3 = 35685;
  var FLOAT_MAT2x4 = 35686;
  var FLOAT_MAT3x2 = 35687;
  var FLOAT_MAT3x4 = 35688;
  var FLOAT_MAT4x2 = 35689;
  var FLOAT_MAT4x3 = 35690;
  var SAMPLER_2D_ARRAY = 36289;
  var SAMPLER_2D_ARRAY_SHADOW = 36292;
  var SAMPLER_CUBE_SHADOW = 36293;
  var UNSIGNED_INT = 5125;
  var UNSIGNED_INT_VEC2 = 36294;
  var UNSIGNED_INT_VEC3 = 36295;
  var UNSIGNED_INT_VEC4 = 36296;
  var INT_SAMPLER_2D = 36298;
  var INT_SAMPLER_3D = 36299;
  var INT_SAMPLER_CUBE = 36300;
  var INT_SAMPLER_2D_ARRAY = 36303;
  var UNSIGNED_INT_SAMPLER_2D = 36306;
  var UNSIGNED_INT_SAMPLER_3D = 36307;
  var UNSIGNED_INT_SAMPLER_CUBE = 36308;
  var UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311;
  var TEXTURE_2D$1 = 3553;
  var TEXTURE_CUBE_MAP = 34067;
  var TEXTURE_3D = 32879;
  var TEXTURE_2D_ARRAY = 35866;
  var typeMap = {};
  function getBindPointForSamplerType(gl, type) {
    return typeMap[type].bindPoint;
  }
  function floatSetter(gl, location2) {
    return function(v) {
      gl.uniform1f(location2, v);
    };
  }
  function floatArraySetter(gl, location2) {
    return function(v) {
      gl.uniform1fv(location2, v);
    };
  }
  function floatVec2Setter(gl, location2) {
    return function(v) {
      gl.uniform2fv(location2, v);
    };
  }
  function floatVec3Setter(gl, location2) {
    return function(v) {
      gl.uniform3fv(location2, v);
    };
  }
  function floatVec4Setter(gl, location2) {
    return function(v) {
      gl.uniform4fv(location2, v);
    };
  }
  function intSetter(gl, location2) {
    return function(v) {
      gl.uniform1i(location2, v);
    };
  }
  function intArraySetter(gl, location2) {
    return function(v) {
      gl.uniform1iv(location2, v);
    };
  }
  function intVec2Setter(gl, location2) {
    return function(v) {
      gl.uniform2iv(location2, v);
    };
  }
  function intVec3Setter(gl, location2) {
    return function(v) {
      gl.uniform3iv(location2, v);
    };
  }
  function intVec4Setter(gl, location2) {
    return function(v) {
      gl.uniform4iv(location2, v);
    };
  }
  function uintSetter(gl, location2) {
    return function(v) {
      gl.uniform1ui(location2, v);
    };
  }
  function uintArraySetter(gl, location2) {
    return function(v) {
      gl.uniform1uiv(location2, v);
    };
  }
  function uintVec2Setter(gl, location2) {
    return function(v) {
      gl.uniform2uiv(location2, v);
    };
  }
  function uintVec3Setter(gl, location2) {
    return function(v) {
      gl.uniform3uiv(location2, v);
    };
  }
  function uintVec4Setter(gl, location2) {
    return function(v) {
      gl.uniform4uiv(location2, v);
    };
  }
  function floatMat2Setter(gl, location2) {
    return function(v) {
      gl.uniformMatrix2fv(location2, false, v);
    };
  }
  function floatMat3Setter(gl, location2) {
    return function(v) {
      gl.uniformMatrix3fv(location2, false, v);
    };
  }
  function floatMat4Setter(gl, location2) {
    return function(v) {
      gl.uniformMatrix4fv(location2, false, v);
    };
  }
  function floatMat23Setter(gl, location2) {
    return function(v) {
      gl.uniformMatrix2x3fv(location2, false, v);
    };
  }
  function floatMat32Setter(gl, location2) {
    return function(v) {
      gl.uniformMatrix3x2fv(location2, false, v);
    };
  }
  function floatMat24Setter(gl, location2) {
    return function(v) {
      gl.uniformMatrix2x4fv(location2, false, v);
    };
  }
  function floatMat42Setter(gl, location2) {
    return function(v) {
      gl.uniformMatrix4x2fv(location2, false, v);
    };
  }
  function floatMat34Setter(gl, location2) {
    return function(v) {
      gl.uniformMatrix3x4fv(location2, false, v);
    };
  }
  function floatMat43Setter(gl, location2) {
    return function(v) {
      gl.uniformMatrix4x3fv(location2, false, v);
    };
  }
  function samplerSetter(gl, type, unit, location2) {
    const bindPoint = getBindPointForSamplerType(gl, type);
    return isWebGL2(gl) ? function(textureOrPair) {
      let texture;
      let sampler;
      if (!textureOrPair || isTexture(gl, textureOrPair)) {
        texture = textureOrPair;
        sampler = null;
      } else {
        texture = textureOrPair.texture;
        sampler = textureOrPair.sampler;
      }
      gl.uniform1i(location2, unit);
      gl.activeTexture(TEXTURE0 + unit);
      gl.bindTexture(bindPoint, texture);
      gl.bindSampler(unit, sampler);
    } : function(texture) {
      gl.uniform1i(location2, unit);
      gl.activeTexture(TEXTURE0 + unit);
      gl.bindTexture(bindPoint, texture);
    };
  }
  function samplerArraySetter(gl, type, unit, location2, size) {
    const bindPoint = getBindPointForSamplerType(gl, type);
    const units = new Int32Array(size);
    for (let ii = 0; ii < size; ++ii) {
      units[ii] = unit + ii;
    }
    return isWebGL2(gl) ? function(textures) {
      gl.uniform1iv(location2, units);
      textures.forEach(function(textureOrPair, index) {
        gl.activeTexture(TEXTURE0 + units[index]);
        let texture;
        let sampler;
        if (!textureOrPair || isTexture(gl, textureOrPair)) {
          texture = textureOrPair;
          sampler = null;
        } else {
          texture = textureOrPair.texture;
          sampler = textureOrPair.sampler;
        }
        gl.bindSampler(unit, sampler);
        gl.bindTexture(bindPoint, texture);
      });
    } : function(textures) {
      gl.uniform1iv(location2, units);
      textures.forEach(function(texture, index) {
        gl.activeTexture(TEXTURE0 + units[index]);
        gl.bindTexture(bindPoint, texture);
      });
    };
  }
  typeMap[FLOAT] = { Type: Float32Array, size: 4, setter: floatSetter, arraySetter: floatArraySetter };
  typeMap[FLOAT_VEC2] = { Type: Float32Array, size: 8, setter: floatVec2Setter, cols: 2 };
  typeMap[FLOAT_VEC3] = { Type: Float32Array, size: 12, setter: floatVec3Setter, cols: 3 };
  typeMap[FLOAT_VEC4] = { Type: Float32Array, size: 16, setter: floatVec4Setter, cols: 4 };
  typeMap[INT] = { Type: Int32Array, size: 4, setter: intSetter, arraySetter: intArraySetter };
  typeMap[INT_VEC2] = { Type: Int32Array, size: 8, setter: intVec2Setter, cols: 2 };
  typeMap[INT_VEC3] = { Type: Int32Array, size: 12, setter: intVec3Setter, cols: 3 };
  typeMap[INT_VEC4] = { Type: Int32Array, size: 16, setter: intVec4Setter, cols: 4 };
  typeMap[UNSIGNED_INT] = { Type: Uint32Array, size: 4, setter: uintSetter, arraySetter: uintArraySetter };
  typeMap[UNSIGNED_INT_VEC2] = { Type: Uint32Array, size: 8, setter: uintVec2Setter, cols: 2 };
  typeMap[UNSIGNED_INT_VEC3] = { Type: Uint32Array, size: 12, setter: uintVec3Setter, cols: 3 };
  typeMap[UNSIGNED_INT_VEC4] = { Type: Uint32Array, size: 16, setter: uintVec4Setter, cols: 4 };
  typeMap[BOOL] = { Type: Uint32Array, size: 4, setter: intSetter, arraySetter: intArraySetter };
  typeMap[BOOL_VEC2] = { Type: Uint32Array, size: 8, setter: intVec2Setter, cols: 2 };
  typeMap[BOOL_VEC3] = { Type: Uint32Array, size: 12, setter: intVec3Setter, cols: 3 };
  typeMap[BOOL_VEC4] = { Type: Uint32Array, size: 16, setter: intVec4Setter, cols: 4 };
  typeMap[FLOAT_MAT2] = { Type: Float32Array, size: 32, setter: floatMat2Setter, rows: 2, cols: 2 };
  typeMap[FLOAT_MAT3] = { Type: Float32Array, size: 48, setter: floatMat3Setter, rows: 3, cols: 3 };
  typeMap[FLOAT_MAT4] = { Type: Float32Array, size: 64, setter: floatMat4Setter, rows: 4, cols: 4 };
  typeMap[FLOAT_MAT2x3] = { Type: Float32Array, size: 32, setter: floatMat23Setter, rows: 2, cols: 3 };
  typeMap[FLOAT_MAT2x4] = { Type: Float32Array, size: 32, setter: floatMat24Setter, rows: 2, cols: 4 };
  typeMap[FLOAT_MAT3x2] = { Type: Float32Array, size: 48, setter: floatMat32Setter, rows: 3, cols: 2 };
  typeMap[FLOAT_MAT3x4] = { Type: Float32Array, size: 48, setter: floatMat34Setter, rows: 3, cols: 4 };
  typeMap[FLOAT_MAT4x2] = { Type: Float32Array, size: 64, setter: floatMat42Setter, rows: 4, cols: 2 };
  typeMap[FLOAT_MAT4x3] = { Type: Float32Array, size: 64, setter: floatMat43Setter, rows: 4, cols: 3 };
  typeMap[SAMPLER_2D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1 };
  typeMap[SAMPLER_CUBE] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP };
  typeMap[SAMPLER_3D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D };
  typeMap[SAMPLER_2D_SHADOW] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1 };
  typeMap[SAMPLER_2D_ARRAY] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY };
  typeMap[SAMPLER_2D_ARRAY_SHADOW] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY };
  typeMap[SAMPLER_CUBE_SHADOW] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP };
  typeMap[INT_SAMPLER_2D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1 };
  typeMap[INT_SAMPLER_3D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D };
  typeMap[INT_SAMPLER_CUBE] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP };
  typeMap[INT_SAMPLER_2D_ARRAY] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY };
  typeMap[UNSIGNED_INT_SAMPLER_2D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D$1 };
  typeMap[UNSIGNED_INT_SAMPLER_3D] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_3D };
  typeMap[UNSIGNED_INT_SAMPLER_CUBE] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_CUBE_MAP };
  typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = { Type: null, size: 0, setter: samplerSetter, arraySetter: samplerArraySetter, bindPoint: TEXTURE_2D_ARRAY };
  function floatAttribSetter(gl, index) {
    return function(b) {
      if (b.value) {
        gl.disableVertexAttribArray(index);
        switch (b.value.length) {
          case 4:
            gl.vertexAttrib4fv(index, b.value);
            break;
          case 3:
            gl.vertexAttrib3fv(index, b.value);
            break;
          case 2:
            gl.vertexAttrib2fv(index, b.value);
            break;
          case 1:
            gl.vertexAttrib1fv(index, b.value);
            break;
          default:
            throw new Error("the length of a float constant value must be between 1 and 4!");
        }
      } else {
        gl.bindBuffer(ARRAY_BUFFER, b.buffer);
        gl.enableVertexAttribArray(index);
        gl.vertexAttribPointer(
          index,
          b.numComponents || b.size,
          b.type || FLOAT,
          b.normalize || false,
          b.stride || 0,
          b.offset || 0
        );
        if (gl.vertexAttribDivisor) {
          gl.vertexAttribDivisor(index, b.divisor || 0);
        }
      }
    };
  }
  function intAttribSetter(gl, index) {
    return function(b) {
      if (b.value) {
        gl.disableVertexAttribArray(index);
        if (b.value.length === 4) {
          gl.vertexAttrib4iv(index, b.value);
        } else {
          throw new Error("The length of an integer constant value must be 4!");
        }
      } else {
        gl.bindBuffer(ARRAY_BUFFER, b.buffer);
        gl.enableVertexAttribArray(index);
        gl.vertexAttribIPointer(
          index,
          b.numComponents || b.size,
          b.type || INT,
          b.stride || 0,
          b.offset || 0
        );
        if (gl.vertexAttribDivisor) {
          gl.vertexAttribDivisor(index, b.divisor || 0);
        }
      }
    };
  }
  function uintAttribSetter(gl, index) {
    return function(b) {
      if (b.value) {
        gl.disableVertexAttribArray(index);
        if (b.value.length === 4) {
          gl.vertexAttrib4uiv(index, b.value);
        } else {
          throw new Error("The length of an unsigned integer constant value must be 4!");
        }
      } else {
        gl.bindBuffer(ARRAY_BUFFER, b.buffer);
        gl.enableVertexAttribArray(index);
        gl.vertexAttribIPointer(
          index,
          b.numComponents || b.size,
          b.type || UNSIGNED_INT,
          b.stride || 0,
          b.offset || 0
        );
        if (gl.vertexAttribDivisor) {
          gl.vertexAttribDivisor(index, b.divisor || 0);
        }
      }
    };
  }
  function matAttribSetter(gl, index, typeInfo) {
    const defaultSize = typeInfo.size;
    const count = typeInfo.count;
    return function(b) {
      gl.bindBuffer(ARRAY_BUFFER, b.buffer);
      const numComponents = b.size || b.numComponents || defaultSize;
      const size = numComponents / count;
      const type = b.type || FLOAT;
      const typeInfo2 = typeMap[type];
      const stride = typeInfo2.size * numComponents;
      const normalize = b.normalize || false;
      const offset = b.offset || 0;
      const rowOffset = stride / count;
      for (let i = 0; i < count; ++i) {
        gl.enableVertexAttribArray(index + i);
        gl.vertexAttribPointer(
          index + i,
          size,
          type,
          normalize,
          stride,
          offset + rowOffset * i
        );
        if (gl.vertexAttribDivisor) {
          gl.vertexAttribDivisor(index + i, b.divisor || 0);
        }
      }
    };
  }
  var attrTypeMap = {};
  attrTypeMap[FLOAT] = { size: 4, setter: floatAttribSetter };
  attrTypeMap[FLOAT_VEC2] = { size: 8, setter: floatAttribSetter };
  attrTypeMap[FLOAT_VEC3] = { size: 12, setter: floatAttribSetter };
  attrTypeMap[FLOAT_VEC4] = { size: 16, setter: floatAttribSetter };
  attrTypeMap[INT] = { size: 4, setter: intAttribSetter };
  attrTypeMap[INT_VEC2] = { size: 8, setter: intAttribSetter };
  attrTypeMap[INT_VEC3] = { size: 12, setter: intAttribSetter };
  attrTypeMap[INT_VEC4] = { size: 16, setter: intAttribSetter };
  attrTypeMap[UNSIGNED_INT] = { size: 4, setter: uintAttribSetter };
  attrTypeMap[UNSIGNED_INT_VEC2] = { size: 8, setter: uintAttribSetter };
  attrTypeMap[UNSIGNED_INT_VEC3] = { size: 12, setter: uintAttribSetter };
  attrTypeMap[UNSIGNED_INT_VEC4] = { size: 16, setter: uintAttribSetter };
  attrTypeMap[BOOL] = { size: 4, setter: intAttribSetter };
  attrTypeMap[BOOL_VEC2] = { size: 8, setter: intAttribSetter };
  attrTypeMap[BOOL_VEC3] = { size: 12, setter: intAttribSetter };
  attrTypeMap[BOOL_VEC4] = { size: 16, setter: intAttribSetter };
  attrTypeMap[FLOAT_MAT2] = { size: 4, setter: matAttribSetter, count: 2 };
  attrTypeMap[FLOAT_MAT3] = { size: 9, setter: matAttribSetter, count: 3 };
  attrTypeMap[FLOAT_MAT4] = { size: 16, setter: matAttribSetter, count: 4 };
  var errorRE = /ERROR:\s*\d+:(\d+)/gi;
  function addLineNumbersWithError(src, log = "", lineOffset = 0) {
    const matches = [...log.matchAll(errorRE)];
    const lineNoToErrorMap = new Map(matches.map((m, ndx) => {
      const lineNo = parseInt(m[1]);
      const next = matches[ndx + 1];
      const end = next ? next.index : log.length;
      const msg = log.substring(m.index, end);
      return [lineNo - 1, msg];
    }));
    return src.split("\n").map((line, lineNo) => {
      const err = lineNoToErrorMap.get(lineNo);
      return `${lineNo + 1 + lineOffset}: ${line}${err ? `

^^^ ${err}` : ""}`;
    }).join("\n");
  }
  var spaceRE = /^[ \t]*\n/;
  function prepShaderSource(shaderSource) {
    let lineOffset = 0;
    if (spaceRE.test(shaderSource)) {
      lineOffset = 1;
      shaderSource = shaderSource.replace(spaceRE, "");
    }
    return { lineOffset, shaderSource };
  }
  function reportError(progOptions, msg) {
    progOptions.errorCallback(msg);
    if (progOptions.callback) {
      setTimeout(() => {
        progOptions.callback(`${msg}
${progOptions.errors.join("\n")}`);
      });
    }
    return null;
  }
  function checkShaderStatus(gl, shaderType, shader, errFn) {
    errFn = errFn || error;
    const compiled = gl.getShaderParameter(shader, COMPILE_STATUS);
    if (!compiled) {
      const lastError = gl.getShaderInfoLog(shader);
      const { lineOffset, shaderSource } = prepShaderSource(gl.getShaderSource(shader));
      const error2 = `${addLineNumbersWithError(shaderSource, lastError, lineOffset)}
Error compiling ${glEnumToString(gl, shaderType)}: ${lastError}`;
      errFn(error2);
      return error2;
    }
    return "";
  }
  function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
    let transformFeedbackVaryings;
    let transformFeedbackMode;
    let callback;
    if (typeof opt_locations === "function") {
      opt_errorCallback = opt_locations;
      opt_locations = void 0;
    }
    if (typeof opt_attribs === "function") {
      opt_errorCallback = opt_attribs;
      opt_attribs = void 0;
    } else if (opt_attribs && !Array.isArray(opt_attribs)) {
      const opt = opt_attribs;
      opt_errorCallback = opt.errorCallback;
      opt_attribs = opt.attribLocations;
      transformFeedbackVaryings = opt.transformFeedbackVaryings;
      transformFeedbackMode = opt.transformFeedbackMode;
      callback = opt.callback;
    }
    const errorCallback = opt_errorCallback || error;
    const errors = [];
    const options = {
      errorCallback(msg, ...args) {
        errors.push(msg);
        errorCallback(msg, ...args);
      },
      transformFeedbackVaryings,
      transformFeedbackMode,
      callback,
      errors
    };
    {
      let attribLocations = {};
      if (Array.isArray(opt_attribs)) {
        opt_attribs.forEach(function(attrib, ndx) {
          attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
        });
      } else {
        attribLocations = opt_attribs || {};
      }
      options.attribLocations = attribLocations;
    }
    return options;
  }
  var defaultShaderType = [
    "VERTEX_SHADER",
    "FRAGMENT_SHADER"
  ];
  function getShaderTypeFromScriptType(gl, scriptType) {
    if (scriptType.indexOf("frag") >= 0) {
      return FRAGMENT_SHADER;
    } else if (scriptType.indexOf("vert") >= 0) {
      return VERTEX_SHADER;
    }
    return void 0;
  }
  function deleteProgramAndShaders(gl, program, notThese) {
    const shaders = gl.getAttachedShaders(program);
    for (const shader of shaders) {
      if (notThese.has(shader)) {
        gl.deleteShader(shader);
      }
    }
    gl.deleteProgram(program);
  }
  var wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));
  function createProgramNoCheck(gl, shaders, programOptions) {
    const program = gl.createProgram();
    const {
      attribLocations,
      transformFeedbackVaryings,
      transformFeedbackMode
    } = getProgramOptions(programOptions);
    for (let ndx = 0; ndx < shaders.length; ++ndx) {
      let shader = shaders[ndx];
      if (typeof shader === "string") {
        const elem = getElementById(shader);
        const src = elem ? elem.text : shader;
        let type = gl[defaultShaderType[ndx]];
        if (elem && elem.type) {
          type = getShaderTypeFromScriptType(gl, elem.type) || type;
        }
        shader = gl.createShader(type);
        gl.shaderSource(shader, prepShaderSource(src).shaderSource);
        gl.compileShader(shader);
        gl.attachShader(program, shader);
      }
    }
    Object.entries(attribLocations).forEach(([attrib, loc]) => gl.bindAttribLocation(program, loc, attrib));
    {
      let varyings = transformFeedbackVaryings;
      if (varyings) {
        if (varyings.attribs) {
          varyings = varyings.attribs;
        }
        if (!Array.isArray(varyings)) {
          varyings = Object.keys(varyings);
        }
        gl.transformFeedbackVaryings(program, varyings, transformFeedbackMode || SEPARATE_ATTRIBS);
      }
    }
    gl.linkProgram(program);
    return program;
  }
  function createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    const shaderSet = new Set(shaders);
    const program = createProgramNoCheck(gl, shaders, progOptions);
    function hasErrors(gl2, program2) {
      const errors = getProgramErrors(gl2, program2, progOptions.errorCallback);
      if (errors) {
        deleteProgramAndShaders(gl2, program2, shaderSet);
      }
      return errors;
    }
    if (progOptions.callback) {
      waitForProgramLinkCompletionAsync(gl, program).then(() => {
        const errors = hasErrors(gl, program);
        progOptions.callback(errors, errors ? void 0 : program);
      });
      return void 0;
    }
    return hasErrors(gl, program) ? void 0 : program;
  }
  function wrapCallbackFnToAsyncFn(fn) {
    return function(gl, arg1, ...args) {
      return new Promise((resolve, reject) => {
        const programOptions = getProgramOptions(...args);
        programOptions.callback = (err, program) => {
          if (err) {
            reject(err);
          } else {
            resolve(program);
          }
        };
        fn(gl, arg1, programOptions);
      });
    };
  }
  var createProgramAsync = wrapCallbackFnToAsyncFn(createProgram);
  var createProgramInfoAsync = wrapCallbackFnToAsyncFn(createProgramInfo);
  async function waitForProgramLinkCompletionAsync(gl, program) {
    const ext = gl.getExtension("KHR_parallel_shader_compile");
    const checkFn = ext ? (gl2, program2) => gl2.getProgramParameter(program2, ext.COMPLETION_STATUS_KHR) : () => true;
    let waitTime = 0;
    do {
      await wait(waitTime);
      waitTime = 1e3 / 60;
    } while (!checkFn(gl, program));
  }
  async function waitForAllProgramsLinkCompletionAsync(gl, programs) {
    for (const program of Object.values(programs)) {
      await waitForProgramLinkCompletionAsync(gl, program);
    }
  }
  function getProgramErrors(gl, program, errFn) {
    errFn = errFn || error;
    const linked = gl.getProgramParameter(program, LINK_STATUS);
    if (!linked) {
      const lastError = gl.getProgramInfoLog(program);
      errFn(`Error in program linking: ${lastError}`);
      const shaders = gl.getAttachedShaders(program);
      const errors = shaders.map((shader) => checkShaderStatus(gl, gl.getShaderParameter(shader, gl.SHADER_TYPE), shader, errFn));
      return `${lastError}
${errors.filter((_) => _).join("\n")}`;
    }
    return void 0;
  }
  function createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    return createProgram(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback);
  }
  function isBuiltIn(info) {
    const name = info.name;
    return name.startsWith("gl_") || name.startsWith("webgl_");
  }
  var tokenRE = /(\.|\[|]|\w+)/g;
  var isDigit = (s) => s >= "0" && s <= "9";
  function addSetterToUniformTree(fullPath, setter, node, uniformSetters) {
    const tokens = fullPath.split(tokenRE).filter((s) => s !== "");
    let tokenNdx = 0;
    let path = "";
    for (; ; ) {
      const token = tokens[tokenNdx++];
      path += token;
      const isArrayIndex = isDigit(token[0]);
      const accessor = isArrayIndex ? parseInt(token) : token;
      if (isArrayIndex) {
        path += tokens[tokenNdx++];
      }
      const isLastToken = tokenNdx === tokens.length;
      if (isLastToken) {
        node[accessor] = setter;
        break;
      } else {
        const token2 = tokens[tokenNdx++];
        const isArray = token2 === "[";
        const child = node[accessor] || (isArray ? [] : {});
        node[accessor] = child;
        node = child;
        uniformSetters[path] = uniformSetters[path] || /* @__PURE__ */ function(node2) {
          return function(value) {
            setUniformTree(node2, value);
          };
        }(child);
        path += token2;
      }
    }
  }
  function createUniformSetters(gl, program) {
    let textureUnit = 0;
    function createUniformSetter(program2, uniformInfo, location2) {
      const isArray = uniformInfo.name.endsWith("[0]");
      const type = uniformInfo.type;
      const typeInfo = typeMap[type];
      if (!typeInfo) {
        throw new Error(`unknown type: 0x${type.toString(16)}`);
      }
      let setter;
      if (typeInfo.bindPoint) {
        const unit = textureUnit;
        textureUnit += uniformInfo.size;
        if (isArray) {
          setter = typeInfo.arraySetter(gl, type, unit, location2, uniformInfo.size);
        } else {
          setter = typeInfo.setter(gl, type, unit, location2, uniformInfo.size);
        }
      } else {
        if (typeInfo.arraySetter && isArray) {
          setter = typeInfo.arraySetter(gl, location2);
        } else {
          setter = typeInfo.setter(gl, location2);
        }
      }
      setter.location = location2;
      return setter;
    }
    const uniformSetters = {};
    const uniformTree = {};
    const numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);
    for (let ii = 0; ii < numUniforms; ++ii) {
      const uniformInfo = gl.getActiveUniform(program, ii);
      if (isBuiltIn(uniformInfo)) {
        continue;
      }
      let name = uniformInfo.name;
      if (name.endsWith("[0]")) {
        name = name.substr(0, name.length - 3);
      }
      const location2 = gl.getUniformLocation(program, uniformInfo.name);
      if (location2) {
        const setter = createUniformSetter(program, uniformInfo, location2);
        uniformSetters[name] = setter;
        addSetterToUniformTree(name, setter, uniformTree, uniformSetters);
      }
    }
    return uniformSetters;
  }
  function createTransformFeedbackInfo(gl, program) {
    const info = {};
    const numVaryings = gl.getProgramParameter(program, TRANSFORM_FEEDBACK_VARYINGS);
    for (let ii = 0; ii < numVaryings; ++ii) {
      const varying = gl.getTransformFeedbackVarying(program, ii);
      info[varying.name] = {
        index: ii,
        type: varying.type,
        size: varying.size
      };
    }
    return info;
  }
  function createUniformBlockSpecFromProgram(gl, program) {
    const numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);
    const uniformData = [];
    const uniformIndices = [];
    for (let ii = 0; ii < numUniforms; ++ii) {
      uniformIndices.push(ii);
      uniformData.push({});
      const uniformInfo = gl.getActiveUniform(program, ii);
      uniformData[ii].name = uniformInfo.name;
    }
    [
      ["UNIFORM_TYPE", "type"],
      ["UNIFORM_SIZE", "size"],
      // num elements
      ["UNIFORM_BLOCK_INDEX", "blockNdx"],
      ["UNIFORM_OFFSET", "offset"]
    ].forEach(function(pair) {
      const pname = pair[0];
      const key = pair[1];
      gl.getActiveUniforms(program, uniformIndices, gl[pname]).forEach(function(value, ndx) {
        uniformData[ndx][key] = value;
      });
    });
    const blockSpecs = {};
    const numUniformBlocks = gl.getProgramParameter(program, ACTIVE_UNIFORM_BLOCKS);
    for (let ii = 0; ii < numUniformBlocks; ++ii) {
      const name = gl.getActiveUniformBlockName(program, ii);
      const blockSpec = {
        index: gl.getUniformBlockIndex(program, name),
        usedByVertexShader: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
        usedByFragmentShader: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
        size: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_DATA_SIZE),
        uniformIndices: gl.getActiveUniformBlockParameter(program, ii, UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
      };
      blockSpec.used = blockSpec.usedByVertexShader || blockSpec.usedByFragmentShader;
      blockSpecs[name] = blockSpec;
    }
    return {
      blockSpecs,
      uniformData
    };
  }
  function setUniformTree(tree, values) {
    for (const name in values) {
      const prop = tree[name];
      if (typeof prop === "function") {
        prop(values[name]);
      } else {
        setUniformTree(tree[name], values[name]);
      }
    }
  }
  function setUniforms(setters, ...args) {
    const actualSetters = setters.uniformSetters || setters;
    const numArgs = args.length;
    for (let aNdx = 0; aNdx < numArgs; ++aNdx) {
      const values = args[aNdx];
      if (Array.isArray(values)) {
        const numValues = values.length;
        for (let ii = 0; ii < numValues; ++ii) {
          setUniforms(actualSetters, values[ii]);
        }
      } else {
        for (const name in values) {
          const setter = actualSetters[name];
          if (setter) {
            setter(values[name]);
          }
        }
      }
    }
  }
  function createAttributeSetters(gl, program) {
    const attribSetters = {};
    const numAttribs = gl.getProgramParameter(program, ACTIVE_ATTRIBUTES);
    for (let ii = 0; ii < numAttribs; ++ii) {
      const attribInfo = gl.getActiveAttrib(program, ii);
      if (isBuiltIn(attribInfo)) {
        continue;
      }
      const index = gl.getAttribLocation(program, attribInfo.name);
      const typeInfo = attrTypeMap[attribInfo.type];
      const setter = typeInfo.setter(gl, index, typeInfo);
      setter.location = index;
      attribSetters[attribInfo.name] = setter;
    }
    return attribSetters;
  }
  function setAttributes(setters, buffers) {
    for (const name in buffers) {
      const setter = setters[name];
      if (setter) {
        setter(buffers[name]);
      }
    }
  }
  function setBuffersAndAttributes(gl, programInfo, buffers) {
    if (buffers.vertexArrayObject) {
      gl.bindVertexArray(buffers.vertexArrayObject);
    } else {
      setAttributes(programInfo.attribSetters || programInfo, buffers.attribs);
      if (buffers.indices) {
        gl.bindBuffer(ELEMENT_ARRAY_BUFFER$1, buffers.indices);
      }
    }
  }
  function createProgramInfoFromProgram(gl, program) {
    const uniformSetters = createUniformSetters(gl, program);
    const attribSetters = createAttributeSetters(gl, program);
    const programInfo = {
      program,
      uniformSetters,
      attribSetters
    };
    if (isWebGL2(gl)) {
      programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl, program);
      programInfo.transformFeedbackInfo = createTransformFeedbackInfo(gl, program);
    }
    return programInfo;
  }
  var notIdRE = /\s|{|}|;/;
  function createProgramInfo(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    const errors = [];
    shaderSources = shaderSources.map(function(source) {
      if (!notIdRE.test(source)) {
        const script = getElementById(source);
        if (!script) {
          const err = `no element with id: ${source}`;
          progOptions.errorCallback(err);
          errors.push(err);
        } else {
          source = script.text;
        }
      }
      return source;
    });
    if (errors.length) {
      return reportError(progOptions, "");
    }
    const origCallback = progOptions.callback;
    if (origCallback) {
      progOptions.callback = (err, program2) => {
        origCallback(err, err ? void 0 : createProgramInfoFromProgram(gl, program2));
      };
    }
    const program = createProgramFromSources(gl, shaderSources, progOptions);
    if (!program) {
      return null;
    }
    return createProgramInfoFromProgram(gl, program);
  }
  function checkAllPrograms(gl, programs, programSpecs, noDeleteShadersSet, programOptions) {
    for (const [name, program] of Object.entries(programs)) {
      const options = { ...programOptions };
      const spec = programSpecs[name];
      if (!Array.isArray(spec)) {
        Object.assign(options, spec);
      }
      const errors = getProgramErrors(gl, program, options.errorCallback);
      if (errors) {
        for (const program2 of Object.values(programs)) {
          const shaders = gl.getAttachedShaders(program2);
          gl.deleteProgram(program2);
          for (const shader of shaders) {
            if (!noDeleteShadersSet.has(shader)) {
              gl.deleteShader(shader);
            }
          }
        }
        return errors;
      }
    }
    return void 0;
  }
  function createPrograms(gl, programSpecs, programOptions = {}) {
    const noDeleteShadersSet = /* @__PURE__ */ new Set();
    const programs = Object.fromEntries(Object.entries(programSpecs).map(([name, spec]) => {
      const options = { ...programOptions };
      const shaders = Array.isArray(spec) ? spec : spec.shaders;
      if (!Array.isArray(spec)) {
        Object.assign(options, spec);
      }
      shaders.forEach(noDeleteShadersSet.add, noDeleteShadersSet);
      return [name, createProgramNoCheck(gl, shaders, options)];
    }));
    if (programOptions.callback) {
      waitForAllProgramsLinkCompletionAsync(gl, programs).then(() => {
        const errors2 = checkAllPrograms(gl, programs, programSpecs, noDeleteShadersSet, programOptions);
        programOptions.callback(errors2, errors2 ? void 0 : programs);
      });
      return void 0;
    }
    const errors = checkAllPrograms(gl, programs, programSpecs, noDeleteShadersSet, programOptions);
    return errors ? void 0 : programs;
  }
  function createProgramInfos(gl, programSpecs, programOptions) {
    programOptions = getProgramOptions(programOptions);
    function createProgramInfosForPrograms(gl2, programs2) {
      return Object.fromEntries(Object.entries(programs2).map(
        ([name, program]) => [name, createProgramInfoFromProgram(gl2, program)]
      ));
    }
    const origCallback = programOptions.callback;
    if (origCallback) {
      programOptions.callback = (err, programs2) => {
        origCallback(err, err ? void 0 : createProgramInfosForPrograms(gl, programs2));
      };
    }
    const programs = createPrograms(gl, programSpecs, programOptions);
    if (origCallback || !programs) {
      return void 0;
    }
    return createProgramInfosForPrograms(gl, programs);
  }
  var createProgramsAsync = wrapCallbackFnToAsyncFn(createPrograms);
  var createProgramInfosAsync = wrapCallbackFnToAsyncFn(createProgramInfos);
  var TRIANGLES = 4;
  var UNSIGNED_SHORT = 5123;
  function drawBufferInfo(gl, bufferInfo, type, count, offset, instanceCount) {
    type = type === void 0 ? TRIANGLES : type;
    const indices = bufferInfo.indices;
    const elementType = bufferInfo.elementType;
    const numElements = count === void 0 ? bufferInfo.numElements : count;
    offset = offset === void 0 ? 0 : offset;
    if (elementType || indices) {
      if (instanceCount !== void 0) {
        gl.drawElementsInstanced(type, numElements, elementType === void 0 ? UNSIGNED_SHORT : bufferInfo.elementType, offset, instanceCount);
      } else {
        gl.drawElements(type, numElements, elementType === void 0 ? UNSIGNED_SHORT : bufferInfo.elementType, offset);
      }
    } else {
      if (instanceCount !== void 0) {
        gl.drawArraysInstanced(type, offset, numElements, instanceCount);
      } else {
        gl.drawArrays(type, offset, numElements);
      }
    }
  }
  var DEPTH_COMPONENT = 6402;
  var DEPTH_COMPONENT24 = 33190;
  var DEPTH_COMPONENT32F = 36012;
  var DEPTH24_STENCIL8 = 35056;
  var DEPTH32F_STENCIL8 = 36013;
  var RGBA4 = 32854;
  var RGB5_A1 = 32855;
  var RGB565 = 36194;
  var DEPTH_COMPONENT16 = 33189;
  var STENCIL_INDEX = 6401;
  var STENCIL_INDEX8 = 36168;
  var DEPTH_STENCIL = 34041;
  var DEPTH_ATTACHMENT = 36096;
  var STENCIL_ATTACHMENT = 36128;
  var DEPTH_STENCIL_ATTACHMENT = 33306;
  var attachmentsByFormat = {};
  attachmentsByFormat[DEPTH_STENCIL] = DEPTH_STENCIL_ATTACHMENT;
  attachmentsByFormat[STENCIL_INDEX] = STENCIL_ATTACHMENT;
  attachmentsByFormat[STENCIL_INDEX8] = STENCIL_ATTACHMENT;
  attachmentsByFormat[DEPTH_COMPONENT] = DEPTH_ATTACHMENT;
  attachmentsByFormat[DEPTH_COMPONENT16] = DEPTH_ATTACHMENT;
  attachmentsByFormat[DEPTH_COMPONENT24] = DEPTH_ATTACHMENT;
  attachmentsByFormat[DEPTH_COMPONENT32F] = DEPTH_ATTACHMENT;
  attachmentsByFormat[DEPTH24_STENCIL8] = DEPTH_STENCIL_ATTACHMENT;
  attachmentsByFormat[DEPTH32F_STENCIL8] = DEPTH_STENCIL_ATTACHMENT;
  var renderbufferFormats = {};
  renderbufferFormats[RGBA4] = true;
  renderbufferFormats[RGB5_A1] = true;
  renderbufferFormats[RGB565] = true;
  renderbufferFormats[DEPTH_STENCIL] = true;
  renderbufferFormats[DEPTH_COMPONENT16] = true;
  renderbufferFormats[STENCIL_INDEX] = true;
  renderbufferFormats[STENCIL_INDEX8] = true;

  // src/vertexShaderSource.glsl
  var vertexShaderSource_default = `#version 300 es\r
#ifdef GL_ES\r
precision mediump float;\r
#endif\r
\r
#ifdef DRAW_MODE_line\r
uniform vec2 u_stageSize;\r
in vec2 a_lineThicknessAndLength;\r
in vec4 a_penPoints;\r
in vec4 a_lineColor;\r
\r
out vec4 v_lineColor;\r
out float v_lineThickness;\r
out float v_lineLength;\r
out vec4 v_penPoints;\r
\r
// Add this to divisors to prevent division by 0, which results in NaNs propagating through calculations.\r
// Smaller values can cause problems on some mobile devices.\r
const float epsilon = 1e-3;\r
#endif\r
\r
#if !(defined(DRAW_MODE_line) || defined(DRAW_MODE_background))\r
uniform mat4 u_projectionMatrix;\r
uniform mat4 u_modelMatrix;\r
in vec2 a_texCoord;\r
#endif\r
\r
in vec2 a_position;\r
\r
out vec2 vUv;\r
\r
void main() {\r
	#ifdef DRAW_MODE_line\r
	// Calculate a rotated ("tight") bounding box around the two pen points.\r
	// Yes, we're doing this 6 times (once per vertex), but on actual GPU hardware,\r
	// it's still faster than doing it in JS combined with the cost of uniformMatrix4fv.\r
\r
	// Expand line bounds by sqrt(2) / 2 each side-- this ensures that all antialiased pixels\r
	// fall within the quad, even at a 45-degree diagonal\r
	vec2 position = a_position;\r
	float expandedRadius = (a_lineThicknessAndLength.x * 0.5) + 1.4142135623730951;\r
\r
	// The X coordinate increases along the length of the line. It's 0 at the center of the origin point\r
	// and is in pixel-space (so at n pixels along the line, its value is n).\r
	vUv.x = mix(0.0, a_lineThicknessAndLength.y + (expandedRadius * 2.0), a_position.x) - expandedRadius;\r
	// The Y coordinate is perpendicular to the line. It's also in pixel-space.\r
	vUv.y = ((a_position.y - 0.5) * expandedRadius) + 0.5;\r
\r
	position.x *= a_lineThicknessAndLength.y + (2.0 * expandedRadius);\r
	position.y *= 2.0 * expandedRadius;\r
\r
	// 1. Center around first pen point\r
	position -= expandedRadius;\r
\r
	// 2. Rotate quad to line angle\r
	vec2 pointDiff = a_penPoints.zw;\r
	// Ensure line has a nonzero length so it's rendered properly\r
	// As long as either component is nonzero, the line length will be nonzero\r
	// If the line is zero-length, give it a bit of horizontal length\r
	pointDiff.x = (abs(pointDiff.x) < epsilon && abs(pointDiff.y) < epsilon) ? epsilon : pointDiff.x;\r
	// The "normalized" vector holds rotational values equivalent to sine/cosine\r
	// We're applying the standard rotation matrix formula to the position to rotate the quad to the line angle\r
	// pointDiff can hold large values so we must divide by u_lineLength instead of calling GLSL's normalize function:\r
	// https://asawicki.info/news_1596_watch_out_for_reduced_precision_normalizelength_in_opengl_es\r
	vec2 normalized = pointDiff / max(a_lineThicknessAndLength.y, epsilon);\r
	position = mat2(normalized.x, normalized.y, -normalized.y, normalized.x) * position;\r
\r
	// 3. Translate quad\r
	position += a_penPoints.xy;\r
\r
	// 4. Apply view transform\r
	position *= 2.0 / u_stageSize;\r
	gl_Position = vec4(position, 0, 1);\r
\r
	v_lineColor = a_lineColor;\r
	v_lineThickness = a_lineThicknessAndLength.x;\r
	v_lineLength = a_lineThicknessAndLength.y;\r
	v_penPoints = a_penPoints;\r
	#elif defined(DRAW_MODE_background)\r
	gl_Position = vec4(a_position * 2.0, 0, 1);\r
	#else\r
	gl_Position = u_projectionMatrix * u_modelMatrix * vec4(a_position, 0, 1);\r
	vUv = a_texCoord;\r
	#endif\r
}\r
\r
// copy pasted from scratch\r
// when custom vertex shaders are a thing, please yell at fath11 to make more built-in shaders for debugging purposes\r
// he needs to get yelled at`;

  // src/fragmentShaderSource.glsl
  var fragmentShaderSource_default = "#version 300 es\r\n#ifdef GL_ES\r\nprecision mediump float;\r\n#endif\r\n\r\nin vec2 vUv;\r\nout vec4 fragColor;\r\nuniform sampler2D tDiffuse;\r\nuniform float time;\r\n\r\nuniform vec4 u_color;\r\n\r\nvoid main() {\r\n  fragColor = texture(tDiffuse, vUv) * u_color;\r\n  fragColor.rg *= sin(time);\r\n}\r\n\r\n// super simple fragment shader that can be used for debugging\r\n// more of these but for testing textures or matrices and other stuff will be GREAT\r\n// but i suppose fath11 cant bother to do it even tho he's the one that wrote this\r\n// please yell at fath11 to make debugging easier if you think its too hard";

  // src/assets/BetterQuakeIcon.svg
  var BetterQuakeIcon_default = "PHN2ZyB3aWR0aD0iMTI5IiBoZWlnaHQ9IjEyOSIgdmlld0JveD0iMCAwIDEyOSAxMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxwYXRoDQogICAgZD0iTTUwLjU3NzMgOTAuNzA0QzQ4LjIxOTMgOTIuNzE4OSA0NS4wNjg4IDkzLjcyNjMgNDEuMTI1OSA5My43MjYzQzM4LjExMDkgOTMuNzI2MyAzNS41MjA5IDkzLjA3NDUgMzMuMzU2MiA5MS43NzA3QzMxLjE1MjggOTAuNjY0NiAyOS4zNzQ2IDg5LjIyMjYgMjguMDIxOCA4Ny40NDQ4QzI2LjM1OTYgODUuNTg3OSAyNS4yNTc5IDgzLjE1ODQgMjQuNzE2NyA4MC4xNTU5QzI0LjA5ODIgNzcuMTUzNCAyMy43ODg5IDcxLjQwNTIgMjMuNzg4OSA2Mi45MTE0QzIzLjc4ODkgNTQuNDE3NCAyNC4wOTgyIDQ4LjYyOTggMjQuNzE2NyA0NS41NDgzQzI1LjI1NzkgNDIuNjI0OCAyNi4zNTk2IDQwLjIzNDcgMjguMDIxOCAzOC4zNzc5QzI5LjM3NDYgMzYuNiAzMS4xNTI4IDM1LjExODYgMzMuMzU2MiAzMy45MzM0QzM1LjUyMDkgMzIuNzg3NyAzOC4xMTA5IDMyLjE3NTMgNDEuMTI1OSAzMi4wOTYzQzQ0LjE3OTggMzIuMTc1MyA0Ni44Mjc3IDMyLjc4NzcgNDkuMDY5NyAzMy45MzM0QzUxLjE5NTggMzUuMTE4NiA1Mi44OTY2IDM2LjYgNTQuMTcyMiAzOC4zNzc5QzU1LjgzNDQgNDAuMjM0NyA1Ni45NzQ4IDQyLjYyNDggNTcuNTkzMyA0NS41NDgzQzU4LjE3MzEgNDguNjI5OCA1OC40NjMgNTQuNDE3NCA1OC40NjMgNjIuOTExNEM1OC40NjMgNzIuMDM3MyA1OC4wNTcxIDc4LjA2MiA1Ny4yNDU0IDgwLjk4NTVMNDcuMzg4MiA3Mi45ODU1TDM5Ljc5MjQgODEuOTMzN0w1MC41NzczIDkwLjcwNFpNNjEuMDcyMyA5OS4yOTY3TDcxLjc0MTIgMTA4LjA2N0w3OS4zMzcgOTkuMDU5N0w2OC4yMDQyIDg5Ljk5MjlDNjkuMzYzOSA4OC4wMTc2IDcwLjE5NSA4NS4yNTIyIDcwLjY5NzYgODEuNjk2NkM3MS4wODQxIDc4LjE0MTEgNzEuMjc3NCA3MS44NzkzIDcxLjI3NzQgNjIuOTExNEM3MS4yNzc0IDUyLjg3NjcgNzEuMDI2MSA0Ni4xNjA3IDcwLjUyMzYgNDIuNzYzMUM2OS45ODI0IDM5LjM2NTUgNjguOTk2NyAzNi42MTk5IDY3LjU2NjQgMzQuNTI2QzY1LjU5NSAzMC41MzU4IDYyLjM4NjYgMjYuOTgwMyA1Ny45NDExIDIzLjg1OTNDNTMuNDU3MSAyMC42OTg4IDQ3Ljg1MiAxOS4wNzkgNDEuMTI1OSAxOUMzNC40NzcyIDE5LjA3OSAyOC45MzAxIDIwLjY5ODggMjQuNDg0NyAyMy44NTkzQzE5Ljk2MiAyNi45ODAzIDE2LjY3NjMgMzAuNTM1OCAxNC42Mjc2IDM0LjUyNkMxMy4zNTE5IDM2LjYxOTkgMTIuNDA0OSAzOS4zNjU1IDExLjc4NjQgNDIuNzYzMUMxMS4yMDY2IDQ2LjE2MDcgMTAuOTE2NiA1Mi44NzY3IDEwLjkxNjYgNjIuOTExNEMxMC45MTY2IDcyLjc4NzkgMTEuMjA2NiA3OS40NjQ2IDExLjc4NjQgODIuOTQxMUMxMi4wOTU2IDg0Ljc5NzkgMTIuNDgyMiA4Ni4zMzg2IDEyLjk0NjEgODcuNTYzM0MxMy40NDg2IDg4Ljc0ODUgMTQuMDA5MSA4OS45OTI5IDE0LjYyNzYgOTEuMjk2N0MxNi42NzYzIDk1LjI4NjggMTkuOTYyIDk4LjgwMjggMjQuNDg0NyAxMDEuODQ1QzI4LjkzMDEgMTA1LjAwNSAzNC40NzcyIDEwNi42NjUgNDEuMTI1OSAxMDYuODIzQzQ5LjQzNyAxMDYuNjY1IDU2LjA4NTcgMTA0LjE1NiA2MS4wNzIzIDk5LjI5NjdaIg0KICAgIGZpbGw9IiNFNjUxRTkiIC8+DQogIDxwYXRoDQogICAgZD0iTTU2LjUxNDcgOTAuNzA0QzU0LjE1NjggOTIuNzE4OSA1MS4wMDYzIDkzLjcyNjMgNDcuMDYzNCA5My43MjYzQzQ0LjA0ODQgOTMuNzI2MyA0MS40NTg0IDkzLjA3NDUgMzkuMjkzNyA5MS43NzA3QzM3LjA5MDMgOTAuNjY0NiAzNS4zMTIxIDg5LjIyMjYgMzMuOTU5MyA4Ny40NDQ4QzMyLjI5NzEgODUuNTg3OSAzMS4xOTU0IDgzLjE1ODQgMzAuNjU0MiA4MC4xNTU5QzMwLjAzNTcgNzcuMTUzNCAyOS43MjY0IDcxLjQwNTIgMjkuNzI2NCA2Mi45MTE0QzI5LjcyNjQgNTQuNDE3NCAzMC4wMzU3IDQ4LjYyOTggMzAuNjU0MiA0NS41NDgzQzMxLjE5NTQgNDIuNjI0OCAzMi4yOTcxIDQwLjIzNDcgMzMuOTU5MyAzOC4zNzc5QzM1LjMxMjEgMzYuNiAzNy4wOTAzIDM1LjExODYgMzkuMjkzNyAzMy45MzM0QzQxLjQ1ODQgMzIuNzg3NyA0NC4wNDg0IDMyLjE3NTMgNDcuMDYzNCAzMi4wOTYzQzUwLjExNzMgMzIuMTc1MyA1Mi43NjUyIDMyLjc4NzcgNTUuMDA3MiAzMy45MzM0QzU3LjEzMzIgMzUuMTE4NiA1OC44MzQxIDM2LjYgNjAuMTA5NyAzOC4zNzc5QzYxLjc3MTkgNDAuMjM0NyA2Mi45MTIzIDQyLjYyNDggNjMuNTMwOCA0NS41NDgzQzY0LjExMDYgNDguNjI5OCA2NC40MDA1IDU0LjQxNzQgNjQuNDAwNSA2Mi45MTE0QzY0LjQwMDUgNzIuMDM3MyA2My45OTQ2IDc4LjA2MiA2My4xODI5IDgwLjk4NTVMNTMuMzI1NyA3Mi45ODU1TDQ1LjcyOTkgODEuOTMzN0w1Ni41MTQ3IDkwLjcwNFpNNjcuMDA5OCA5OS4yOTY3TDc3LjY3ODcgMTA4LjA2N0w4NS4yNzQ5IDk5LjA1OTdMNzQuMTQxNyA4OS45OTI5Qzc1LjMwMTQgODguMDE3NiA3Ni4xMzI0IDg1LjI1MjIgNzYuNjM1MSA4MS42OTY2Qzc3LjAyMTYgNzguMTQxMSA3Ny4yMTQ4IDcxLjg3OTMgNzcuMjE0OCA2Mi45MTE0Qzc3LjIxNDggNTIuODc2NyA3Ni45NjM2IDQ2LjE2MDcgNzYuNDYxMSA0Mi43NjMxQzc1LjkxOTkgMzkuMzY1NSA3NC45MzQyIDM2LjYxOTkgNzMuNTAzOSAzNC41MjZDNzEuNTMyNSAzMC41MzU4IDY4LjMyNCAyNi45ODAzIDYzLjg3ODYgMjMuODU5M0M1OS4zOTQ2IDIwLjY5ODggNTMuNzg5NSAxOS4wNzkgNDcuMDYzNCAxOUM0MC40MTQ3IDE5LjA3OSAzNC44Njc2IDIwLjY5ODggMzAuNDIyMiAyMy44NTkzQzI1Ljg5OTUgMjYuOTgwMyAyMi42MTM4IDMwLjUzNTggMjAuNTY1MSAzNC41MjZDMTkuMjg5NCAzNi42MTk5IDE4LjM0MjQgMzkuMzY1NSAxNy43MjM5IDQyLjc2MzFDMTcuMTQ0MSA0Ni4xNjA3IDE2Ljg1NDEgNTIuODc2NyAxNi44NTQxIDYyLjkxMTRDMTYuODU0MSA3Mi43ODc5IDE3LjE0NDEgNzkuNDY0NiAxNy43MjM5IDgyLjk0MTFDMTguMDMzMSA4NC43OTc5IDE4LjQxOTYgODYuMzM4NiAxOC44ODM2IDg3LjU2MzNDMTkuMzg2MSA4OC43NDg1IDE5Ljk0NjYgODkuOTkyOSAyMC41NjUxIDkxLjI5NjdDMjIuNjEzOCA5NS4yODY4IDI1Ljg5OTUgOTguODAyOCAzMC40MjIyIDEwMS44NDVDMzQuODY3NiAxMDUuMDA1IDQwLjQxNDcgMTA2LjY2NSA0Ny4wNjM0IDEwNi44MjNDNTUuMzc0NCAxMDYuNjY1IDYyLjAyMzIgMTA0LjE1NiA2Ny4wMDk4IDk5LjI5NjdaIg0KICAgIGZpbGw9IiMxNUY2RUEiIC8+DQogIDxwYXRoDQogICAgZD0iTTUzLjU0NiA5MC43MDRDNTEuMTg4IDkyLjcxODkgNDguMDM3NiA5My43MjYzIDQ0LjA5NDcgOTMuNzI2M0M0MS4wNzk2IDkzLjcyNjMgMzguNDg5NyA5My4wNzQ1IDM2LjMyNSA5MS43NzA3QzM0LjEyMTYgOTAuNjY0NiAzMi4zNDM0IDg5LjIyMjYgMzAuOTkwNSA4Ny40NDQ4QzI5LjMyODMgODUuNTg3OSAyOC4yMjY2IDgzLjE1ODQgMjcuNjg1NCA4MC4xNTU5QzI3LjA2NjkgNzcuMTUzNCAyNi43NTc3IDcxLjQwNTIgMjYuNzU3NyA2Mi45MTE0QzI2Ljc1NzcgNTQuNDE3NCAyNy4wNjY5IDQ4LjYyOTggMjcuNjg1NCA0NS41NDgzQzI4LjIyNjYgNDIuNjI0OCAyOS4zMjgzIDQwLjIzNDcgMzAuOTkwNSAzOC4zNzc5QzMyLjM0MzQgMzYuNiAzNC4xMjE2IDM1LjExODYgMzYuMzI1IDMzLjkzMzRDMzguNDg5NyAzMi43ODc3IDQxLjA3OTYgMzIuMTc1MyA0NC4wOTQ3IDMyLjA5NjNDNDcuMTQ4NiAzMi4xNzUzIDQ5Ljc5NjUgMzIuNzg3NyA1Mi4wMzg1IDMzLjkzMzRDNTQuMTY0NSAzNS4xMTg2IDU1Ljg2NTQgMzYuNiA1Ny4xNDEgMzguMzc3OUM1OC44MDMyIDQwLjIzNDcgNTkuOTQzNiA0Mi42MjQ4IDYwLjU2MjEgNDUuNTQ4M0M2MS4xNDE5IDQ4LjYyOTggNjEuNDMxOCA1NC40MTc0IDYxLjQzMTggNjIuOTExNEM2MS40MzE4IDcyLjAzNzMgNjEuMDI1OSA3OC4wNjIgNjAuMjE0MSA4MC45ODU1TDUwLjM1NyA3Mi45ODU1TDQyLjc2MTEgODEuOTMzN0w1My41NDYgOTAuNzA0Wk02NC4wNDEgOTkuMjk2N0w3NC43MDk5IDEwOC4wNjdMODIuMzA1OCA5OS4wNTk3TDcxLjE3MyA4OS45OTI5QzcyLjMzMjcgODguMDE3NiA3My4xNjM3IDg1LjI1MjIgNzMuNjY2MyA4MS42OTY2Qzc0LjA1MjkgNzguMTQxMSA3NC4yNDYxIDcxLjg3OTMgNzQuMjQ2MSA2Mi45MTE0Qzc0LjI0NjEgNTIuODc2NyA3My45OTQ5IDQ2LjE2MDcgNzMuNDkyMyA0Mi43NjMxQzcyLjk1MTEgMzkuMzY1NSA3MS45NjU0IDM2LjYxOTkgNzAuNTM1MiAzNC41MjZDNjguNTYzNyAzMC41MzU4IDY1LjM1NTMgMjYuOTgwMyA2MC45MDk5IDIzLjg1OTNDNTYuNDI1OSAyMC42OTg4IDUwLjgyMDggMTkuMDc5IDQ0LjA5NDcgMTlDMzcuNDQ2IDE5LjA3OSAzMS44OTg5IDIwLjY5ODggMjcuNDUzNSAyMy44NTkzQzIyLjkzMDggMjYuOTgwMyAxOS42NDUxIDMwLjUzNTggMTcuNTk2MyAzNC41MjZDMTYuMzIwNyAzNi42MTk5IDE1LjM3MzYgMzkuMzY1NSAxNC43NTUxIDQyLjc2MzFDMTQuMTc1MyA0Ni4xNjA3IDEzLjg4NTQgNTIuODc2NyAxMy44ODU0IDYyLjkxMTRDMTMuODg1NCA3Mi43ODc5IDE0LjE3NTMgNzkuNDY0NiAxNC43NTUxIDgyLjk0MTFDMTUuMDY0NCA4NC43OTc5IDE1LjQ1MDkgODYuMzM4NiAxNS45MTQ4IDg3LjU2MzNDMTYuNDE3MyA4OC43NDg1IDE2Ljk3NzggODkuOTkyOSAxNy41OTYzIDkxLjI5NjdDMTkuNjQ1MSA5NS4yODY4IDIyLjkzMDggOTguODAyOCAyNy40NTM1IDEwMS44NDVDMzEuODk4OSAxMDUuMDA1IDM3LjQ0NiAxMDYuNjY1IDQ0LjA5NDcgMTA2LjgyM0M1Mi40MDU3IDEwNi42NjUgNTkuMDU0NCAxMDQuMTU2IDY0LjA0MSA5OS4yOTY3WiINCiAgICBmaWxsPSJ3aGl0ZSIgLz4NCiAgPHBhdGggZD0iTTY5LjMwMjEgNzUuNjM2NEg5MS4wNzI5Vjc4LjY3MDRINjkuMzAyMVY3NS42MzY0WiIgZmlsbD0iI0ZBRkYwMCIgLz4NCiAgPHBhdGggZD0iTTYuOTU4MzMgNTkuNDU0NUgxMy44ODU0VjY3LjU0NTRINi45NTgzM1Y1OS40NTQ1WiIgZmlsbD0iI0U2NTFFOSIgLz4NCiAgPHBhdGggZD0iTTY3LjMyMjkgMzcuMjA0NUg4OS4wOTM3VjQyLjI2MTNINjcuMzIyOVYzNy4yMDQ1WiIgZmlsbD0iI0U2NTFFOSIgLz4NCiAgPHBhdGggZD0iTTY2LjMzMzMgODguNzg0MUg5OFY5Ni44NzVINjYuMzMzM1Y4OC43ODQxWiIgZmlsbD0iIzE1RjZFQSIgLz4NCiAgPHBhdGggZD0iTTIwLjgxMjUgMTAwLjkySDQzLjU3MjlWMTA1Ljk3N0gyMC44MTI1VjEwMC45MloiIGZpbGw9IiMxNUY2RUEiIC8+DQogIDxwYXRoIGQ9Ik0zIDg4Ljc4NDFIMjQuNzcwOFY5MS44MTgxSDNWODguNzg0MVoiIGZpbGw9IiNGQUZGMDAiIC8+DQogIDxwYXRoIGQ9Ik02Ljk1ODMzIDI3LjA5MDlIMzguNjI1VjM1LjE4MThINi45NTgzM1YyNy4wOTA5WiIgZmlsbD0iI0ZBRkYwMCIgLz4NCiAgPHJlY3QgeD0iOTguMDM4MyIgeT0iMjgiIHdpZHRoPSIxMC41OTIxIiBoZWlnaHQ9IjQyLjM2ODQiIGZpbGw9IiMxNUY2RUEiIC8+DQogIDxyZWN0IHg9IjgyLjYzMTYiIHk9IjU0Ljk2MTciIHdpZHRoPSIxMC41OTIxIiBoZWlnaHQ9IjQyLjM2ODQiDQogICAgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDgyLjYzMTYgNTQuOTYxNykiIGZpbGw9IiMxNUY2RUEiIC8+DQogIDxyZWN0IHg9Ijk0LjQwNjciIHk9IjMxLjYzMTYiIHdpZHRoPSIxMC41OTIxIiBoZWlnaHQ9IjQyLjM2ODQiIGZpbGw9IiNFNjUxRTkiIC8+DQogIDxyZWN0IHg9Ijc5IiB5PSI1OC41OTMzIiB3aWR0aD0iMTAuNTkyMSIgaGVpZ2h0PSI0Mi4zNjg0IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgNzkgNTguNTkzMykiDQogICAgZmlsbD0iI0U2NTFFOSIgLz4NCiAgPHJlY3QgeD0iOTUuNjE3MiIgeT0iMjkuMjEwNSIgd2lkdGg9IjEwLjU5MjEiIGhlaWdodD0iNDIuMzY4NCIgZmlsbD0id2hpdGUiIC8+DQogIDxyZWN0IHg9IjgwLjIxMDUiIHk9IjU2LjE3MjMiIHdpZHRoPSIxMC41OTIxIiBoZWlnaHQ9IjQyLjM2ODQiDQogICAgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDgwLjIxMDUgNTYuMTcyMykiIGZpbGw9IndoaXRlIiAvPg0KPC9zdmc+";

  // src/index.js
  ((Scratch2) => {
    const icon = `data:image/svg+xml;base64,${BetterQuakeIcon_default}`;
    const extensionId = "betterquake";
    class BetterQuake {
      constructor(runtime) {
        this.runtime = runtime;
        if (!this.runtime.QuakeManager)
          this.runtime.QuakeManager = {};
        this.runtime.QuakeManager.loadedShaders = [];
        this.runtime.QuakeManager.textures = [];
        this.QuakeManager = this.runtime.QuakeManager;
        this.gl = runtime.renderer._gl;
        this.autoReRender = true;
        const skinClass = this.runtime.renderer.getSkinClass ? this.runtime.renderer.getSkinClass() : null;
        const isGandi = this.runtime.gandi ? true : false;
        const oldDrawThese = this.runtime.renderer._drawThese;
        this.newDrawThese = (drawables, drawMode, projection, opts = {}) => {
          const renderer = this.runtime.renderer;
          const gl = renderer._gl;
          let currentShader = null;
          if (renderer.spineManager) {
            renderer.spineManager.updateTime();
          }
          const framebufferSpaceScaleDiffers = "framebufferWidth" in opts && "framebufferHeight" in opts && opts.framebufferWidth !== renderer._nativeSize[0] && opts.framebufferHeight !== renderer._nativeSize[1];
          const startIndex = Math.max(0, opts.startIndex ?? 0);
          const endIndex = Math.min(
            drawables.length,
            opts.endIndex ?? drawables.length
          );
          for (let drawableIndex = startIndex; drawableIndex < endIndex; ++drawableIndex) {
            const drawableID = drawables[drawableIndex];
            if (opts.filter && !opts.filter(drawableID))
              continue;
            const drawable = renderer._allDrawables[drawableID];
            if (!drawable.getVisible() && !opts.ignoreVisibility)
              continue;
            const drawableScale = framebufferSpaceScaleDiffers ? [
              drawable.scale[0] * opts.framebufferWidth / renderer._nativeSize[0],
              drawable.scale[1] * opts.framebufferHeight / renderer._nativeSize[1]
            ] : drawable.scale;
            if (!drawable.skin || !drawable.skin.getTexture(drawableScale))
              continue;
            if (isGandi && (!skinClass || !(drawable.skin instanceof skinClass))) {
              renderer._doExitDrawRegion();
              drawable.skin.render(drawable, drawableScale, projection, opts);
              gl.enable(gl.BLEND);
              continue;
            }
            const uniforms = {};
            let effectBits = drawable.enabledEffects;
            effectBits &= Object.prototype.hasOwnProperty.call(opts, "effectMask") ? opts.effectMask : effectBits;
            if (drawable.enabledExtraEffect !== 0 && isGandi) {
              effectBits |= drawable.enabledExtraEffect;
              drawable.injectExtraEffectUniforms(uniforms);
            }
            const drawableShader = runtime.QuakeManager.loadedShaders[drawable.BetterQuake?.shader];
            const newShader = drawableShader ? drawableShader.programInfo : renderer._shaderManager.getShader(drawMode, effectBits);
            if (renderer._regionId !== newShader) {
              renderer._doExitDrawRegion();
              renderer._regionId = newShader;
              currentShader = newShader;
              gl.useProgram(currentShader.program);
              setBuffersAndAttributes(
                gl,
                currentShader,
                renderer._bufferInfo
              );
              Object.assign(uniforms, {
                u_projectionMatrix: projection
              });
            }
            if (drawable.customizedProjection && drawMode !== "straightAlpha") {
              Object.assign(uniforms, {
                u_projectionMatrix: drawable.customizedProjection
              });
            } else {
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
            if (drawableShader) {
              drawable.BetterQuake.uniforms.time = this.runtime.ioDevices.clock.projectTimer();
              drawable.BetterQuake.uniforms.tDiffuse = uniforms.u_skin;
              drawable.BetterQuake.uniforms.Resolution = [gl.canvas.clientWidth, gl.canvas.clientHeight];
              Object.assign(uniforms, drawable.BetterQuake.uniforms);
            }
            if (uniforms.u_skin || drawable.BetterQuake.uniforms.tDiffuse) {
              setTextureParameters(
                gl,
                uniforms.u_skin ? uniforms.u_skin : drawable.BetterQuake.uniforms.tDiffuse,
                {
                  minMag: drawable.skin.useNearest(drawableScale, drawable) ? gl.NEAREST : gl.LINEAR
                }
              );
            }
            setUniforms(currentShader, uniforms);
            drawBufferInfo(gl, renderer._bufferInfo, gl.TRIANGLES);
          }
          renderer._regionId = null;
          renderer.dirty = this.autoReRender;
        };
        this.runtime.renderer._drawThese = this.newDrawThese;
      }
      getInfo() {
        return {
          id: extensionId,
          name: "Better Quake",
          color1: "#6645F6",
          color2: "#5237c5",
          color3: "#6645F6",
          blockIconURI: icon,
          menuIconURI: icon,
          blocks: [
            "---",
            {
              opcode: "setAutoReRender",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate("[SHOULD] auto re-render"),
              arguments: {
                SHOULD: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "SHOULD_MENU"
                }
              }
            },
            "---",
            {
              opcode: "allLoadedShaders",
              blockType: Scratch2.BlockType.REPORTER,
              text: Scratch2.translate("All loaded shaders"),
              arguments: {},
              disableMonitor: true
            },
            {
              opcode: "removeShader",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate("Remove [SHADER]"),
              arguments: {
                SHADER: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "SHADER_MENU"
                }
              }
            },
            {
              opcode: "reloadShader",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate("Reload [SHADER]"),
              arguments: {
                SHADER: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "SHADER_MENU"
                }
              }
            },
            "---",
            {
              opcode: "applyShader",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate("Apply [SHADER] to [TARGET]"),
              arguments: {
                SHADER: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "SHADER_MENU"
                },
                TARGET: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "DRAWABLES_MENU"
                }
              }
            },
            {
              opcode: "detachShader",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate("Detach [SHADER] from [TARGET]"),
              arguments: {
                SHADER: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "SHADER_MENU"
                },
                TARGET: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "DRAWABLES_MENU"
                }
              }
            },
            {
              blockType: Scratch2.BlockType.LABEL,
              text: Scratch2.translate("Uniforms")
            },
            {
              opcode: "setNumber",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate(
                "Set number [UNIFORM] of [TARGET] to [VALUE]"
              ),
              arguments: {
                UNIFORM: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Uniform"
                },
                TARGET: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "DRAWABLES_MENU"
                },
                VALUE: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 0
                }
              }
            },
            {
              opcode: "setVec2",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate(
                "Set vector 2 [UNIFORM] of [TARGET] to [VALUE1][VALUE2]"
              ),
              arguments: {
                UNIFORM: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Uniform"
                },
                TARGET: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "DRAWABLES_MENU"
                },
                VALUE1: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 0
                },
                VALUE2: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 0
                }
              }
            },
            {
              opcode: "setVec3",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate(
                "Set vector 3 [UNIFORM] of [TARGET] to [VALUE1][VALUE2][VALUE3]"
              ),
              arguments: {
                UNIFORM: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Uniform"
                },
                TARGET: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "DRAWABLES_MENU"
                },
                VALUE1: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 0
                },
                VALUE2: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 0
                },
                VALUE3: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 0
                }
              }
            },
            {
              opcode: "setVec4",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate(
                "Set vector 4 [UNIFORM] of [TARGET] to [VALUE1][VALUE2][VALUE3][VALUE4]"
              ),
              arguments: {
                UNIFORM: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Uniform"
                },
                TARGET: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "DRAWABLES_MENU"
                },
                VALUE1: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 0
                },
                VALUE2: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 0
                },
                VALUE3: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 0
                },
                VALUE4: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 0
                }
              }
            },
            {
              opcode: "setMatrix",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate(
                "Set matrix [UNIFORM] of [TARGET] to [MATRIX]"
              ),
              arguments: {
                UNIFORM: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Uniform"
                },
                TARGET: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "DRAWABLES_MENU"
                },
                MATRIX: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "[[], []]"
                }
              }
            },
            {
              opcode: "setArray",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate(
                "Set array [UNIFORM] of [TARGET] to [ARRAY]"
              ),
              arguments: {
                UNIFORM: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Uniform"
                },
                TARGET: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "DRAWABLES_MENU"
                },
                ARRAY: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "[]"
                }
              }
            },
            {
              opcode: "setTexture",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate(
                "Set texture [UNIFORM] of [TARGET] to [TEXTURE]"
              ),
              arguments: {
                UNIFORM: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Uniform"
                },
                TARGET: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "DRAWABLES_MENU"
                },
                TEXTURE: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Scratch Cat"
                }
              }
            },
            {
              blockType: Scratch2.BlockType.LABEL,
              text: Scratch2.translate("Textures")
            },
            {
              opcode: "allTextures",
              blockType: Scratch2.BlockType.REPORTER,
              text: Scratch2.translate("All textures"),
              arguments: {},
              disableMonitor: true
            },
            {
              opcode: "deleteAllTextures",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate("Delete all textures"),
              arguments: {}
            },
            {
              opcode: "deleteTexture",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate("Delete texture called [NAME]"),
              arguments: {
                NAME: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Scratch Cat"
                }
              }
            },
            {
              opcode: "createUpdateTexture",
              blockType: Scratch2.BlockType.COMMAND,
              text: Scratch2.translate(
                "Create/Update texture called [NAME] with [TEXTURE]"
              ),
              arguments: {
                NAME: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Scratch Cat"
                },
                TEXTURE: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "dc7f14b8438834de154cebaf827b6b4d.svg"
                }
              }
            }
          ],
          menus: {
            DRAWABLES_MENU: {
              acceptReporters: true,
              items: "_getDrawablesMenu"
            },
            SHADER_MENU: {
              acceptReporters: true,
              items: "_shaderList"
            },
            SHOULD_MENU: {
              items: [
                {
                  text: Scratch2.translate("Enable"),
                  value: "true"
                },
                {
                  text: Scratch2.translate("Disable"),
                  value: "false"
                }
              ]
            }
          }
        };
      }
      setAutoReRender({ SHOULD }) {
        this.autoReRender = SHOULD == "true" ? true : false;
      }
      removeShader({ SHADER }) {
        const shaderInfo = this.QuakeManager.loadedShaders[SHADER];
        if (!shaderInfo) {
          console.error(`Shader ${SHADER} not found.`);
          return;
        }
        const shaderProgram = shaderInfo.programInfo.program;
        const gl = this.gl;
        const shaders = gl.getAttachedShaders(shaderProgram);
        shaders.forEach((shader) => {
          gl.detachShader(shaderProgram, shader);
          gl.deleteShader(shader);
        });
        gl.deleteProgram(shaderProgram);
        delete this.QuakeManager.loadedShaders[SHADER];
        for (let i = 0; i < this.runtime.renderer._allDrawables.length; i++) {
          const drawable = this.runtime.renderer._allDrawables[i];
          if (drawable?.BetterQuake?.shader === SHADER) {
            delete drawable.BetterQuake;
          }
        }
      }
      reloadShader({ SHADER }) {
        let drawableShader = this.QuakeManager.loadedShaders[SHADER];
        const shaderUsers = [];
        for (let i = 0; i < this.runtime.renderer._allDrawables.length; i++) {
          const drawable = this.runtime.renderer._allDrawables[i];
          if (drawable?.BetterQuake?.shader === SHADER) {
            shaderUsers.push(drawable);
          }
        }
        if (drawableShader) {
          this.removeShader({ SHADER });
        } else {
          drawableShader = {};
        }
        const asset = this.runtime.getGandiAssetContent ? this.runtime.getGandiAssetContent(SHADER) : null;
        if (asset) {
          drawableShader.source = asset.decodeText();
        }
        const programInfo = createProgramInfo(this.gl, [
          vertexShaderSource_default,
          SHADER === "__example__" ? fragmentShaderSource_default : drawableShader.source
        ]);
        drawableShader.programInfo = programInfo;
        this.QuakeManager.loadedShaders[SHADER] = drawableShader;
        shaderUsers.forEach((drawable) => {
          drawable.BetterQuake = {};
          drawable.BetterQuake.shader = SHADER;
          drawable.BetterQuake.uniforms = {
            // not needed, but usefull for quick debugging
            u_color: [Math.random(), Math.random(), Math.random(), 1]
          };
        });
        this.runtime.renderer.dirty = true;
      }
      allLoadedShaders() {
        return JSON.stringify(Object.keys(this.QuakeManager.loadedShaders));
      }
      applyShader({ SHADER, TARGET }, util) {
        const target = this._getTargetByIdOrName(TARGET, util);
        const drawable = this.runtime.renderer._allDrawables[target.drawableID];
        let drawableShader = this.QuakeManager.loadedShaders[SHADER];
        if (!drawableShader) {
          this.reloadShader({ SHADER });
          drawableShader = this.QuakeManager.loadedShaders[SHADER];
        }
        if (!drawable.BetterQuake) {
          drawable.BetterQuake = {};
        }
        drawable.BetterQuake.shader = SHADER;
        drawable.BetterQuake.uniforms = {
          u_color: [Math.random(), Math.random(), Math.random(), 1]
        };
        this.runtime.renderer.dirty = true;
      }
      // detach a shader from a target
      detachShader({ SHADER, TARGET }, util) {
        const target = this._getTargetByIdOrName(TARGET, util);
        const drawable = this.runtime.renderer._allDrawables[target.drawableID];
        if (drawable.BetterQuake?.shader === SHADER) {
          delete drawable.BetterQuake;
        }
      }
      setNumber({ UNIFORM, TARGET, VALUE }, util) {
        const target = this._getTargetByIdOrName(TARGET, util);
        const drawable = this.runtime.renderer._allDrawables[target.drawableID];
        if (!drawable.BetterQuake)
          return;
        drawable.BetterQuake.uniforms[UNIFORM] = VALUE;
      }
      setVec2({ UNIFORM, TARGET, VALUE1, VALUE2 }, util) {
        const target = this._getTargetByIdOrName(TARGET, util);
        const drawable = this.runtime.renderer._allDrawables[target.drawableID];
        if (!drawable.BetterQuake)
          return;
        drawable.BetterQuake.uniforms[UNIFORM] = [VALUE1, VALUE2];
      }
      setVec3({ UNIFORM, TARGET, VALUE1, VALUE2, VALUE3 }, util) {
        const target = this._getTargetByIdOrName(TARGET, util);
        const drawable = this.runtime.renderer._allDrawables[target.drawableID];
        if (!drawable.BetterQuake)
          return;
        drawable.BetterQuake.uniforms[UNIFORM] = [VALUE1, VALUE2, VALUE3];
      }
      setVec4({ UNIFORM, TARGET, VALUE1, VALUE2, VALUE3, VALUE4 }, util) {
        const target = this._getTargetByIdOrName(TARGET, util);
        const drawable = this.runtime.renderer._allDrawables[target.drawableID];
        if (!drawable.BetterQuake)
          return;
        drawable.BetterQuake.uniforms[UNIFORM] = [VALUE1, VALUE2, VALUE3, VALUE4];
      }
      setMatrix({ UNIFORM, TARGET, MATRIX }, util) {
        const target = this._getTargetByIdOrName(TARGET, util);
        const drawable = this.runtime.renderer._allDrawables[target.drawableID];
        if (!drawable.BetterQuake)
          return;
        let converted = JSON.parse(MATRIX);
        if (!Array.isArray(converted))
          return;
        converted = converted.map(function(str) {
          return parseFloat(str);
        });
        drawable.BetterQuake.uniforms[UNIFORM] = converted;
      }
      setArray({ UNIFORM, TARGET, ARRAY }, util) {
        const target = this._getTargetByIdOrName(TARGET, util);
        const drawable = this.runtime.renderer._allDrawables[target.drawableID];
        if (!drawable.BetterQuake)
          return;
        drawable.BetterQuake.uniforms[UNIFORM] = ARRAY;
      }
      setTexture({ UNIFORM, TARGET, TEXTURE }, util) {
        const target = this._getTargetByIdOrName(TARGET, util);
        const drawable = this.runtime.renderer._allDrawables[target.drawableID];
        if (!drawable.BetterQuake)
          return;
        drawable.BetterQuake.uniforms[UNIFORM] = this.QuakeManager.textures[Scratch2.Cast.toString(TEXTURE)];
      }
      allTextures() {
        return JSON.stringify(Object.keys(this.QuakeManager.textures));
      }
      deleteTexture({ NAME }) {
        if (this.QuakeManager.textures[NAME]) {
          this.gl.deleteTexture(this.QuakeManager.textures[NAME]);
          delete this.QuakeManager.textures[NAME];
        }
      }
      deleteAllTextures() {
        this.QuakeManager.textures.forEach((texture) => {
          this.gl.deleteTexture(texture);
        });
        this.QuakeManager.textures = [];
      }
      createUpdateTexture({ NAME, TEXTURE }, util) {
        const textureName = Scratch2.Cast.toString(NAME);
        this.deleteTexture(textureName);
        if (/(.*?)\.(png|svg|jpg|jpeg)/.test(String(TEXTURE))) {
          const id = String(TEXTURE).split(".")[0];
          const ext = String(TEXTURE).split(".")[1];
          const assetType = ext === "svg" ? this.runtime.storage.AssetType.ImageVector : this.runtime.storage.AssetType.ImageBitmap;
          const asset = this.runtime.storage.load(assetType, id, ext).then((asset2) => {
            const texture = createTexture(this.gl, {
              src: asset2.encodeDataURI()
            });
            this.QuakeManager.textures[textureName] = texture;
          });
        } else {
          const texture = createTexture(this.gl, { src: TEXTURE });
          this.QuakeManager.textures[textureName] = texture;
        }
      }
      _getTargetByIdOrName(name, util) {
        if (name === "__myself__")
          return util.target;
        if (name === "__stage__")
          return this.runtime.getTargetForStage();
        let target = this.runtime.getSpriteTargetByName(name);
        if (!target) {
          target = this.runtime.getTargetById(name);
          if (!target)
            return null;
        }
        return target;
      }
      // get a list of all the sprites
      _getSpriteMenu() {
        const { targets } = this.runtime;
        const menu = targets.filter((target) => !target.isStage && target.isOriginal).map((target) => ({
          text: target.sprite.name,
          value: target.sprite.name
        }));
        if (menu.length === 0) {
          menu.push({
            text: "-",
            value: "empty"
          });
        }
        return menu;
      }
      // get a list of all the drawables
      // like sprites, stage
      /** @todo add pen and video layer next, not sure about canvas layer tho since idk how it works */
      _getDrawablesMenu() {
        const menu = this._getSpriteMenu();
        if (!this.runtime._editingTarget)
          return menu;
        const editingTargetName = this.runtime._editingTarget.sprite.name;
        const index = menu.findIndex((item) => item.value === editingTargetName);
        if (index !== -1) {
          menu.splice(index, 1);
        }
        menu.unshift(
          {
            text: Scratch2.translate("me"),
            value: "__myself__"
          },
          {
            text: Scratch2.translate("stage"),
            value: "__stage__"
          }
        );
        return menu;
      }
      // get a list of all the shaders
      /** @todo separate vertex and fragment shaders */
      _shaderList() {
        const list = this.runtime.getGandiAssetsFileList ? this.runtime.getGandiAssetsFileList("glsl").map((item) => item.fullName) : [];
        list.push({
          text: Scratch2.translate("example"),
          value: "__example__"
        });
        return list;
      }
    }
    if (Scratch2.vm?.runtime) {
      Scratch2.extensions.register(new BetterQuake(Scratch2.vm.runtime));
    } else {
      window.tempExt = {
        Extension: BetterQuake,
        info: {
          name: "BetterQuake.extensionName",
          description: "BetterQuake.description",
          extensionId: "BetterQuake",
          //iconURL: banner.png,
          insetIconURL: icon,
          featured: true,
          disabled: false,
          collaboratorList: [
            {
              collaborator: "Fath11@QuakeStudio",
              collaboratorURL: "https://cocrea.world/@Fath11"
            },
            {
              collaborator: "\u9177\u53EFmc @ CCW",
              collaboratorURL: "https://www.ccw.site/student/203910367"
            },
            {
              collaborator: "\u718A\u8C37 \u51CC",
              collaboratorURL: "https://github.com/FurryR"
            }
          ]
        },
        l10n: {
          // ig no ones translating this since its under 900 lines of code :,)
          "zh-cn": {
            "BetterQuake.extensionName": "\u96F7\u795E Pro V1.1",
            "BetterQuake.description": "\u66F4\u597D\u7684\u7740\u8272\u52A0\u8F7D\u5668"
          },
          en: {
            "BetterQuake.extensionName": "Better Quake V1.1",
            "BetterQuake.description": "Better shader loader"
          }
        }
      };
    }
  })(Scratch);

  // src/withL10n.ts
  (function(Scratch2) {
    Scratch2.translate.setup(l10n_default);
  })(Scratch);
})();
/*! Bundled license information:

twgl.js/dist/5.x/twgl-full.module.js:
  (* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
  Available via the MIT license.
  see: http://github.com/greggman/twgl.js for details *)
*/
