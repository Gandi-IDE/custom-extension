const OLD_PREFIX = '<SafeObject> ';

const OBJ_ID_KEY = '@id🗄️';
const OBJ_REF = '@ref🗄️';

/**
 * 更适合Scratch体质的Object
 * - 继承String，避免object保存在作品中时出错（Inspired by Nights）
 * - 对于object，原型设为 null，避免原型污染
 */
class SafeObject extends String {
  /**
     * 以 obj 作为值初始化 SafeObject
     * @param {object} obj 对象或数组
     */
  constructor(obj = Object.create(null)) {
    super('<SafeObject>');
    this.assign(typeof obj === 'object' ? obj : Object.create(null));
  }

  /**
     * 以 value 作为值赋给 SafeObject
     * @param {any} value 值
     */
  assign(value) {
    if (typeof value !== 'object') {
      throw new Error('Invalid object to assign for SafeObject');
    }
    this.value = SafeObject.getActualObject(value);
    // 不是数组，且原型链的终点是Object，则原型改为 null，避免污染
    if (!Array.isArray(this.value) && this.value instanceof Object) {
      // 以 null 为原型，避免原型污染
      Object.setPrototypeOf(this.value, null);
    }
  }

  /**
     * 将字符串解析为 SafeObject
     * @param {string} string 字符串
     * @returns {SafeObject} SafeObject
     */
  static parse(string) {
    return JSON.parse(string, (key, value) => SafeObject.toSafeObject(value));
  }

  static simpleParse(string) {
    return SafeObject.toSafeObject(JSON.parse(string)); // reviver疑似性能开销较大，故取消
  }

  /**
     * 将 SafeObject 转换为字符串
     * 遇到循环引用报错时，用'<Circular Reference>'代替循环引用对象
     * @param {SafeObject} obj SafeObject
     * @returns {string} 字符串
   */
  static stringify(obj) {
    try {
      // 没有循环引用，直接序列化
      return JSON.stringify(obj, (key, v) => SafeObject.getActualObject(v));
    } catch (e) {
      // 遇到循环引用
      try {
        const parents = new Map();
        return JSON.stringify(obj, function (key, v) {
          const value = SafeObject.getActualObject(v);
          // 原始值直接返回
          if (typeof value !== 'object' || value === null) return value;
          // 检查对象是否出现过
          if (parents.has(value)) {
          // 检查父亲链，是否包含自己
            for (let p = this; p; p = parents.get(p)) {
              if (p === value) return '<Circular Reference>';
            }
          } else {
          // 记录父子关系
            parents.set(value, this);
          }
          return value;
        });
      } catch (e2) {
        return `error: ${e2.message}`;
      }
    }
  }

  /**
     * 如果是 SafeObject，取出其实际对象。否则返回原值
     * @param {object} obj The object to check.
     * @returns {object} The actual object.
     */
  static getActualObject(obj) {
    if (obj instanceof SafeObject) {
      return obj.value;
    }
    return obj;
  }

  /**
     * 如果是对象，套一层 SafeObject
     * @param {any} value 值
     * @returns {SafeObject} SafeObject
     */
  static toSafeObject(obj) {
    if (
      typeof obj === 'object'
        && obj !== null
        && !(obj instanceof SafeObject)
    ) {
      return new SafeObject(obj);
    }
    return obj;
  }

  /**
     * 深拷贝，支持处理循环引用
     * @param {*} obj
     * @param {*} cache
     * @returns
     */
  static deepCopy(OBJ, cache = new Map()) {
    // 检测循环引用
    if (cache.has(OBJ)) {
      return cache.get(OBJ);
    }
    const obj = SafeObject.getActualObject(OBJ);
    // 处理基本数据类型
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    const safeObj = new SafeObject();
    // 在缓存中记录
    cache.set(OBJ, safeObj);
    let copyObj;
    // 处理数组
    if (Array.isArray(obj)) {
      copyObj = [];
      safeObj.assign(copyObj);
      // 递归复制数组元素
      obj.forEach((item, index) => {
        copyObj[index] = SafeObject.deepCopy(item, cache);
      });
      return safeObj;
    }
    // 处理对象
    copyObj = {};
    safeObj.assign(copyObj);
    // 递归复制对象属性
    Object.keys(obj).forEach((key) => {
      copyObj[key] = SafeObject.deepCopy(obj[key], cache);
    });
    return safeObj;
  }

  /**
     * 返回 SafeObject 字符串表示(例如："<SafeObject> [1,2,3]")
     * @returns {string} 字符串表示
     */
  toString() {
    // return `${
    //   Array.isArray(this.value) ? LIST_PREFIX : OBJ_PREFIX
    // }${SafeObject.stringify(this.value)}`;
    // return `<SafeObject> ${SafeObject.stringify(this.value)}`;
    return SafeObject.stringify(this.value);
  }

  valueOf() {
    return this.toString();
  }

  /**
   * stringify，保留引用（用于保存到作品)
   * - 对于首次对象，转为{@id🗄️: 0, value: {...}}的形式，记录id
   * - 对于第二次出现的对象，使用'@ref🗄️id'的形式，通过id引用对象
   * @param {Object} obj 要序列化的对象
   * @param {{nextId: number, seen: Map<Object, number>}} info 记录ID，对象对应ID
   * @returns {string} 序列化结果
   */
  static stringifyWithRef(obj, info = { nextId: 0, seen: new Map() }) {
    // const parents = new Map();
    return JSON.stringify(obj, function (key, v) {
      const value = SafeObject.getActualObject(v);
      // 非对象直接返回
      if (typeof value !== 'object' || value === null) return value;
      if (OBJ_ID_KEY in this && key === 'value') {
        return value;
      }
      const id = info.seen.get(value);
      // 对象之前出现过，存引用
      if (id !== undefined) {
        return `${OBJ_REF}${id}`;
      }
      // 第一次出现，存{id, value}，记录ID
      const warp = { [OBJ_ID_KEY]: info.nextId, value };
      info.seen.set(value, info.nextId);
      info.nextId += 1;
      return warp;
    });
  }

  /**
   * 解析字符串为对象。可解析出对象引用关系
   * - 例如，一个含循环引用的对象的字符串表示：{@id🗄️: 0, value: {a:1, b: '@ref🗄️0'}}
   * @param {string} string 待解析字符串
   * @param {Map<number, Object>} map id到对象的映射
   * @returns {Object} 解析结果
   */
  static parseWithRef(string, info = { map: new Map(), refsToResolve: [] }) {
    const res = JSON.parse(string, function (key, value) {
      // 如果是对象引用（'@ref🗄️123'）
      if (typeof value === 'string' && value.startsWith(OBJ_REF)) {
        const id = parseInt(value.slice(OBJ_REF.length), 10);
        // 根据id查找对象
        const obj = info.map.get(id);
        if (obj === undefined) {
          // 未找到对象，标记为待解决
          info.refsToResolve.push([this, key, id]);
          return 'not found';
        }
        return obj;
      }
      if (typeof value !== 'object' || value === null) return value;
      // 是{@id🗄️: 0, value:{...}}的对象，记录对象id，返回value
      if (OBJ_ID_KEY in value) {
        // 记录ID
        info.map.set(value[OBJ_ID_KEY], value.value);
        return SafeObject.toSafeObject(value.value);
      }
      // 普通对象
      return SafeObject.toSafeObject(value);
    });
    return res;
  }

  /**
   * 处理调用parseWithRef后未解决的引用
   * @param {*} info
   * @private
   */
  static resolveRef(info = { map: new Map(), refsToResolve: [] }) {
    const remains = [];
    info.refsToResolve.forEach((item) => {
      const [obj, key, id] = item;
      // 补充未解决的引用
      const value = info.map.get(id);
      if (value === undefined) {
        obj[key] = 'not found';
        remains.push(item);
      } else {
        obj[key] = value;
      }
    });
    info.refsToResolve = remains;
  }

  /**
     * 尝试匹配形如 <SafeObject> {"a": 1, "b": 2} 的字符串，转为SafeObject对象
     * @param {string} string 要转换的字符串
     * @returns {string | SafeObject} 转换结果（如果失败，返回原内容）
     */
  static tryParseSafeObjectString(string, info) {
    // 检测<SafeObject> 开头的字符串
    if (!string.startsWith(OLD_PREFIX)) return string;
    const jsonString = string.slice(OLD_PREFIX.length);

    try {
      // 尝试解析 JSON 字符串为对象
      const obj = SafeObject.parseWithRef(jsonString, info);
      if (typeof obj !== 'object' || obj === null) return string;
      return obj;
    } catch (error) {
      console.error('Error parsing SafeObject:', error);
      return string;
    }
  }

  /**
     * 将作品里的存放形如<SafeObject> {...}字符串的变量、列表转为SafeObject
     * 可以解析出对象间的相互引用
     * @param {*} runtime runtime 对象
     */
  static parseAllVarInProject(runtime) {
    const info = { map: new Map(), refsToResolve: [] };
    runtime.targets.forEach(({ variables }) => {
      Object.values(variables).forEach((variable) => {
        if (variable.type === '') {
          // 变量
          if (typeof variable.value === 'string') {
            variable.value = SafeObject.tryParseSafeObjectString(variable.value, info);
          }
        } else if (variable.type === 'list') {
          // 列表
          const list = variable.value;
          for (let i = 0; i < list.length; i += 1) {
            if (typeof list[i] === 'string') {
              list[i] = SafeObject.tryParseSafeObjectString(list[i], info);
            }
          }
        }
      });
    });
    // 解决剩下的引用
    SafeObject.resolveRef(info);
  }

  // toJSON() {
  //   return '<SafeObject>';
  // }
}

export default SafeObject;
