const LIST_PREFIX = '(list) ';
const OBJ_PREFIX = '(object) ';
const OLD_PREFIX = '<SafeObject> ';

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
    return SafeObject.toSafeObject(JSON.parse(string)); // reviver疑似性能开销较大，故取消
    // return JSON.parse(string, (key, value) => SafeObject.toSafeObject(value));
  }

  /**
     * 将 SafeObject 转换为字符串
     * @param {SafeObject} obj SafeObject
     * @returns {string} 字符串
     */
  static stringify(obj) {
    // 记录已出现对象，避免循环引用
    const seen = [];
    const res = JSON.stringify(obj, (key, value) => {
      const actualObj = SafeObject.getActualObject(value);
      if (typeof actualObj === 'object' && actualObj !== null) {
        // 检测到循环引用，替换为提示字符串
        if (seen.includes(actualObj)) {
          return '<Circular Reference>';
        }
        seen.push(actualObj);
      }
      return actualObj;
    });
    return res;
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
    return `${
      Array.isArray(this.value) ? LIST_PREFIX : OBJ_PREFIX
    }${SafeObject.stringify(this.value)}`;
    // return `<SafeObject> ${SafeObject.stringify(this.value)}`;
  }

  /**
     * 尝试匹配形如 <SafeObject> {"a": 1, "b": 2} 的字符串，转为SafeObject对象
     * @param {string} string 要转换的字符串
     * @returns {string | SafeObject} 转换结果（如果失败，返回原内容）
     */
  static tryParseSafeObjectString(string) {
    let match;
    if (string.startsWith(`${OBJ_PREFIX}`)) {
      match = [0, string.slice(OBJ_PREFIX.length)];
    } else if (string.startsWith(`${LIST_PREFIX}`)) {
      match = [0, string.slice(LIST_PREFIX.length)];
    } else if (string.startsWith(OLD_PREFIX)) {
      match = [0, string.slice(OLD_PREFIX.length)];
    }
    // 使用正则表达式匹配 <SafeObject> {...}
    // let match = string.match(/<SafeObject>\s*(.+)$/);
    // if (!match) match = string.match(/<SafeObject\s+(.*?)>$/); // 匹配 <SafeObject {...}>

    if (match) {
      // 提取匹配到的 JSON 字符串
      const jsonString = match[1];

      try {
        // 尝试解析 JSON 字符串为对象
        const obj = SafeObject.parse(jsonString);
        if (typeof obj !== 'object' || obj === null) return string;
        return obj;
      } catch (error) {
        console.error('Error parsing SafeObject:', error);
        return string;
      }
    } else {
      return string;
    }
  }

  /**
     * 将作品里的存放形如<SafeObject> {...}字符串的变量、列表转为SafeObject
     * @param {*} runtime runtime 对象
     */
  static parseAllVarInProject(runtime) {
    runtime.targets.forEach(({ variables }) => {
      Object.values(variables).forEach((variable) => {
        if (variable.type === '') {
          // 变量
          if (typeof variable.value === 'string') {
            variable.value = SafeObject.tryParseSafeObjectString(
              variable.value,
            );
          }
        } else if (variable.type === 'list') {
          // 列表
          const list = variable.value;
          for (let i = 0; i < list.length; i += 1) {
            if (typeof list[i] === 'string') {
              list[i] = SafeObject.tryParseSafeObjectString(list[i]);
            }
          }
        }
      });
    });
  }

  // toJSON() {
  //   return '<SafeObject>';
  // }
}

export default SafeObject;
