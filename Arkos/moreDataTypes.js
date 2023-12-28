/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
const { Scratch } = window;
const { Cast } = Scratch;

const extensionId = 'moreDataTypes';

/** 保存扩展配置的舞台注释的Id */
const EXT_CONFIG_COMMENT_ID = '_ArkosExtensionConfig_';

// import cover from './assets/cover1.png'
// import icon from './assets/icon1.svg'

const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOC4yNSIgaGVpZ2h0PSIxOC4yNSIgdmlld0JveD0iMCwwLDE4LjI1LDE4LjI1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzEwLjg3NSwtMTcwLjg3NSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMzE5LjQzNzUsMTc0LjYxNzE5djJjMCwwLjM0NTE4IC0wLjI3OTgyLDAuNjI1IC0wLjYyNSwwLjYyNWgtNC4xODc1Yy0wLjM0NTE4LDAgLTAuNjI1LC0wLjI3OTgyIC0wLjYyNSwtMC42MjV2LTJjMCwtMC4zNDUxOCAwLjI3OTgyLC0wLjYyNSAwLjYyNSwtMC42MjVoNC4xODc1YzAuMzQ1MTgsMCAwLjYyNSwwLjI3OTgyIDAuNjI1LDAuNjI1ek0zMjYsMTc0LjYxNzE5djJjMCwwLjM0NTE4IC0wLjI3OTgyLDAuNjI1IC0wLjYyNSwwLjYyNWgtNC4xODc1Yy0wLjM0NTE4LDAgLTAuNjI1LC0wLjI3OTgyIC0wLjYyNSwtMC42MjV2LTJjMCwtMC4zNDUxOCAwLjI3OTgyLC0wLjYyNSAwLjYyNSwtMC42MjVoNC4xODc1YzAuMzQ1MTgsMCAwLjYyNSwwLjI3OTgyIDAuNjI1LDAuNjI1ek0zMTkuNDM3NSwxNzguOTkyMTl2MmMwLDAuMzQ1MTggLTAuMjc5ODIsMC42MjUgLTAuNjI1LDAuNjI1aC00LjE4NzVjLTAuMzQ1MTgsMCAtMC42MjUsLTAuMjc5ODIgLTAuNjI1LC0wLjYyNXYtMmMwLC0wLjM0NTE4IDAuMjc5ODIsLTAuNjI1IDAuNjI1LC0wLjYyNWg0LjE4NzVjMC4zNDUxOCwwIDAuNjI1LDAuMjc5ODIgMC42MjUsMC42MjV6TTMyNiwxNzl2MmMwLDAuMzQ1MTggLTAuMjc5ODIsMC42MjUgLTAuNjI1LDAuNjI1aC00LjE4NzVjLTAuMzQ1MTgsMCAtMC42MjUsLTAuMjc5ODIgLTAuNjI1LC0wLjYyNXYtMmMwLC0wLjM0NTE4IDAuMjc5ODIsLTAuNjI1IDAuNjI1LC0wLjYyNWg0LjE4NzVjMC4zNDUxOCwwIDAuNjI1LDAuMjc5ODIgMC42MjUsMC42MjV6TTMxOS40Mzc1LDE4My4zODI4MXYyYzAsMC4zNDUxOCAtMC4yNzk4MiwwLjYyNSAtMC42MjUsMC42MjVoLTQuMTg3NWMtMC4zNDUxOCwwIC0wLjYyNSwtMC4yNzk4MiAtMC42MjUsLTAuNjI1di0yYzAsLTAuMzQ1MTggMC4yNzk4MiwtMC42MjUgMC42MjUsLTAuNjI1aDQuMTg3NWMwLjM0NTE4LDAgMC42MjUsMC4yNzk4MiAwLjYyNSwwLjYyNXpNMzI2LDE4My4zODI4MXYyYzAsMC4zNDUxOCAtMC4yNzk4MiwwLjYyNSAtMC42MjUsMC42MjVoLTQuMTg3NWMtMC4zNDUxOCwwIC0wLjYyNSwtMC4yNzk4MiAtMC42MjUsLTAuNjI1di0yYzAsLTAuMzQ1MTggMC4yNzk4MiwtMC42MjUgMC42MjUsLTAuNjI1aDQuMTg3NWMwLjM0NTE4LDAgMC42MjUsMC4yNzk4MiAwLjYyNSwwLjYyNXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0zMTAuODc1LDE4OS4xMjV2LTE4LjI1aDE4LjI1djE4LjI1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PC9nPjwvZz48L3N2Zz4=';
const cover = 'https://m.ccw.site/user_projects_assets/40d3aa39d5101bd5df854cf3a079fa4a.png';

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字和文本，需要同时处理 */

/** @typedef {any} Util util 参数，暂时定为 any */

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
  constructor(obj = {}) {
    super('<SafeObject>');
    this.assign(typeof obj === 'object' ? obj : {});
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
    if (!Array.isArray(this.value)) {
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
    // return `${
    //   Array.isArray(this.value) ? LIST_NAME : OBJ_NAME
    // }${SafeObject.stringify(this.value)}`;
    return `<SafeObject> ${SafeObject.stringify(this.value)}`;
  }

  /**
   * 尝试匹配形如 <SafeObject> {"a": 1, "b": 2} 的字符串，转为SafeObject对象
   * @param {string} string 要转换的字符串
   * @returns {string | SafeObject} 转换结果（如果失败，返回原内容）
   */
  static tryParseSafeObjectString(string) {
    // 使用正则表达式匹配 <SafeObject> {...}
    let match = string.match(/<SafeObject>\s*(.+)$/);
    if (!match) match = string.match(/<SafeObject\s+(.*?)>$/);// 匹配 <SafeObject {...}>

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

class moreDataTypes {
  constructor(runtime) {
    this.runtime = runtime;

    // 放到 runtime 里，或许可以和其他扩展联动
    runtime.SafeObject = SafeObject;

    /** 临时数据
     * @type {SafeObject}
     */
    this.tempData = new SafeObject();

    /** 是否启用嵌套功能 */
    this.enableNesting = true;

    runtime.on('PROJECT_LOADED', () => {
      // 从作品注释读取扩展配置
      this.parseExtConfig();
      // 在作品保存时，SafeObject对象会转换为形如 '<SafeObject> {...}' 的字符串
      // 因此当作品加载时，尝试将作品的变量、列表中，形如 '<SafeObject> {...}' 的字符串重新转换为SafeObject对象
      SafeObject.parseAllVarInProject(runtime);
    });

    this.initFormatMessage({
      extensionName: ['高级数据结构', 'Advanced Data Structure'],
      docsURI: [
        'https://learn.ccw.site/article/3b5fb890-b480-4157-b104-dacd53449549',
        'https://learn.ccw.site/article/3b5fb890-b480-4157-b104-dacd53449549',
      ],
      'name.list': ['（列表）', '(list) '],
      'name.object': ['（对象）', '(object) '],
      'tag.tempData': ['数据', 'Data'],
      'tag.tools': ['常用工具', 'Common Tools'],
      'tag.tempVar': ['临时数据', 'Temporary Data'],
      'tag.complexData': [' 复杂数据类型', 'Complex Data'],
      'tag.list': ['列表操作', 'List Operation'],
      'tag.object': ['对象操作', 'Object Operation'],
      'tag.ScratchList': ['🐱原版列表', '🐱Scratch List'],
      'block.getScratchList': ['🗄️原版列表[NAME]', '🗄️Scratch list[NAME]'],
      'block.setScratchList': ['将原版列表[NAME]指向🗄️列表[OBJ]', 'set Scratch list[NAME]to🗄️[OBJ]'],
      'config.tip': [
        '该注释用于保存Arkos扩展信息\n你可以拖动/缩放这个注释。不建议直接编辑注释文字。可以删除这个注释来清除扩展配置信息',
        'Configuration for Arkos Extension(Inspired by TurboWarp)\nYou can move, resize, and minimize this comment, but better not edit it by hand. This comment can be deleted to remove the stored settings.',
      ],
      'block.deleteAllTempData': ['清空所有数据', 'delete all data'],
      'block.getCountOfTempData': ['数据量', 'data count'],
      'block.delTempData': [
        '删除名为[NAME]的数据',
        'delete data with name[NAME]',
      ],
      'block.ifTempDataExist': [
        '存在名为[NAME]的数据？',
        'data with name[NAME]exists?',
      ],
      'defaultValue.dataName': ['数据', 'data'],
      'defaultValue.listName': ['我的列表', 'my list'],
      'defaultValue.objName': ['我的对象', 'my object'],
      'defaultValue.JSON': [
        '"姓名":"小明","年龄":"12","朋友":["埃米","泰拉"]',
        '"name":"Tera","age":"12","friends":["Amy","XiaoMing"]',
      ],
      'defaultValue.dataNameOrObj': [
        '名称(或传入对象)',
        'name (or input object)',
      ],
      'button.showNestingSupportedBlock': [
        '显示高级积木',
        'Show Advanced Block',
      ],
      'button.hideNestingSupportedBlock': [
        '隐藏高级积木',
        'Hide Advanced Block',
      ],
      'confirm.enableNesting?': [
        '确定要开启对象嵌套？\n\n开启后，将允许对象里嵌套对象，同时将允许圆形积木返回复杂数据类型(如列表、对象)。\n\n🚨警告：带有“”标识的积木表示有可能返回复杂数据类型（如列表、对象），这些类型切记不能存入原版Scratch变量、列表里，否则将作品无法打开！！\n',
        'Are you sure you want to enable nested objects?\n\nEnabling this option will allow nesting objects within other objects, and it will also permit reporter blocks to return complex data types (such as lists and objects).\n\n🚨Warning: Blocks marked with "" may potentially return complex data types (e.g., lists, objects). Remember not to store these types in original Scratch variables or lists, as it may render the project unopenable!!',
      ],

      'block.setTempData': ['将数据[NAME][OP][VALUE]', 'data[NAME][OP][VALUE]'],
      'menu.op.set': ['设为', 'set to'],
      'menu.op.add': ['增加', 'change by'],
      'menu.op.insert': ['前插入', 'insert before'],
      'menu.op.parse': ['从JSON解析', 'parse from JSON'],
      'menu.op.parse_warning': ['从JSON解析', 'parse from JSON'],
      'menu.op.shallowCopy': ['单层拷贝对象', 'shallow copy from'],
      'menu.op.deepCopy': ['深度拷贝对象', 'deep copy from'],

      'block.copyFrom': ['🗄️[OP]复制对象[OBJ]', '🗄️[OP]object[OBJ]'],
      'menu.shallow': ['单层', 'shallow copy'],
      'menu.deep': ['完全', 'deep copy'],

      'block.getTempData': ['数据[NAME]', 'data[NAME]'],
      'menu.getOption.objectAllowed': ['值', 'value'],
      'menu.getOption.json': ['JSON', 'JSON'],
      'block.getObjFromJson': [
        '🗄️JSON[VALUE]解析为对象',
        '🗄️parse JSON [VALUE] to object',
      ],
      'block.newEmptyObjOrArray': ['🗄️返回一个[OPTION]', '🗄️create an [OPTION]'],
      'menu.emptyList': ['空列表', 'empty list'],
      'menu.emptyObj': ['空对象', 'empty object'],
      'block.getNewList': ['🗄️空列表', '🗄️ empty list'],
      'block.getNewObject': ['🗄️空对象', '🗄️ empty object'],
      'block.typeOf': ['[VALUE]的类型', 'type of [VALUE]'],
      'block.JSONOf': ['[VALUE]对应JSON', 'JSON of object[VALUE]'],
      'block.createOrClearList': [
        '将数据(填名称)[NAME]设为空列表',
        'set data with NAME[NAME] to an empty list',
      ],
      'block.addItemToList': [
        '向列表[NAME_OR_OBJ]加入[VALUE]',
        'add [VALUE] to list [NAME_OR_OBJ]',
      ],

      'block.mergeList': [
        '🗄️[OP][LIST1][LIST2]',
        '🗄️[OP][LIST1][LIST2]',
      ],
      'menu.merge': ['合并列表', 'merge lists'],
      'menu.union': ['合并列表并去重', 'merge lists and remove duplicates'],
      'menu.intersection': ['列表交集', 'common elements between lists'],
      'menu.difference': ['列表1有而列表2没有', 'elements in list1 but not in list2'],

      'block.mergeObject': [
        '给对象[NAME_OR_OBJ]追加🗄️对象[OBJ]里的属性(已有属性则覆盖)',
        'copy 🗄️object[OBJ] properties to object[NAME_OR_OBJ] (overwrite existing properties)',
      ],
      'block.opList': [
        '将列表[NAME_OR_OBJ][OP]',
        '[OP]list[NAME_OR_OBJ]',
      ],
      'menu.shuffle': ['打乱', 'shuffle'],
      'menu.reverse': ['反转', 'reverse'],
      'menu.ascSort': ['升序排序', 'sort (ascending)'],
      'menu.descSort': ['降序排序', 'sort (descending)'],
      'menu.removeDuplicates': ['去重', 'remove duplicates from'],
      'block.sortListByProp': [
        '将列表[NAME_OR_OBJ]里的每个对象以属性[PROP][OP]',
        '[OP]list[NAME_OR_OBJ]containing objects by property[PROP]',
      ],

      'block.addItemToList2': [
        '向列表[NAME_OR_OBJ][OP][VALUE]',
        '[VALUE][OP]list[NAME_OR_OBJ]',
      ],
      'menu.addTo': ['加入', 'add to'],
      'menu.removeFrom': ['移除', 'remove from'],
      'menu.ifNotExistsaddTo': ['(如果不存在)加入', '(if not exists) add to'],

      'block.addItemToListAndReturn': [
        '🗄️向列表[OBJ][OP][VALUE]',
        '🗄️[VALUE][OP]list[OBJ]',
      ],
      'block.createListWithLength': [
        '🗄️创建包含[N]个[VALUE]的列表',
        '🗄️create a list with [N]x[VALUE]',
      ],
      'defaultValue.thing': ['东西', 'thing'],
      'block.setItemOfList': [
        '列表[NAME_OR_OBJ]第[IDX]项[OP][VALUE]',
        'item [IDX] of list [NAME_OR_OBJ][OP][VALUE]',
      ],
      // 'block.insertItemIntoList': [
      //   '在列表[NAME_OR_OBJ]第[IDX]项前插入[VALUE]',
      //   'insert [VALUE] at [IDX] of list [NAME_OR_OBJ]',
      // ],
      'menu.value': ['值', 'value'],
      'block.delItemOfList': [
        '删除列表[NAME_OR_OBJ]第[IDX]项',
        'delete item [IDX] of list [NAME_OR_OBJ]',
      ],
      'block.getItemOfList': [
        '列表[NAME_OR_OBJ]第[IDX]项',
        'item [IDX] of list [NAME_OR_OBJ]',
      ],
      'block.lengthOfList': [
        '列表[NAME_OR_OBJ]长度',
        'length of list [NAME_OR_OBJ]',
      ],
      'block.ifListItemExist': [
        '列表[NAME_OR_OBJ]包含[VALUE]？',
        'list [NAME_OR_OBJ] contains [VALUE]?',
      ],
      'block.getListItemIdxByItem': [
        '列表[NAME_OR_OBJ]中第一个[VALUE]的编号',
        'item # of [VALUE] in list [NAME_OR_OBJ]',
      ],
      'block.createOrClearObject': [
        '将数据(填名称)[NAME]设为空对象',
        'set data with NAME[NAME]to an empty object',
      ],
      'block.setPropOfObject': [
        '对象[NAME_OR_OBJ]的[PROP][OP][VALUE]',
        '[PROP] of object [NAME_OR_OBJ][OP][VALUE]',
      ],
      'block.setPropOfObjectAndReturn': [
        '🗄️对象[OBJ]的[PROP][OP][VALUE]',
        '🗄️[PROP] of object [OBJ][OP][VALUE]',
      ],
      'defaultValue.prop': ['属性', 'property'],
      'block.delPropOfObject': [
        '删除对象[NAME_OR_OBJ]中名为[PROP]的内容',
        'delete [PROP] of object [NAME_OR_OBJ]',
      ],
      'block.getPropOfObject': [
        '对象[NAME_OR_OBJ]的[PROP]',
        '[PROP] of object [NAME_OR_OBJ]',
      ],
      'block.getPropOfObjectByIdx': [
        '对象[NAME_OR_OBJ]第[IDX]项的[OPTION]',
        '[OPTION] of item [IDX] of object [NAME_OR_OBJ]',
      ],
      'menu.conInfo.name': ['名称', 'name'],
      'menu.conInfo.value': ['内容', 'content'],
      'menu.conInfo.objValue': ['内容', 'content'],
      'menu.conInfo.json': ['JSON', 'JSON'],
      'block.getAllProperties': [
        '对象[NAME_OR_OBJ]的所有[OPTION]',
        'get all[OPTION] of object [NAME_OR_OBJ]',
      ],
      'menu.keys': ['属性名', 'keys'],
      'menu.values': ['属性值', 'values'],
      'menu.entries': [' [键, 值] 对', 'entries'],
      'block.sizeOfObject': [
        '对象[NAME_OR_OBJ]中内容数',
        'size of object [NAME_OR_OBJ]',
      ],
      'block.ifObjectPropExist': [
        '对象[NAME_OR_OBJ]包含[PROP]？',
        'object [NAME_OR_OBJ] has [PROP]?',
      ],
    });

    // LIST_NAME = this.formatMessage('name.list');
    // OBJ_NAME = this.formatMessage('name.object');
  }

  /**
   * 获取“数据名”参数
   * @param {'data'|'list'|'obj'} type 类型
   * @returns
   */
  __dataNameOrObjMsg(type) {
    return this.formatMessage(
    //   // `defaultValue.${this.enableNesting ? 'dataNameOrObj' : 'dataName'}`,
      // `defaultValue.${type}Name`,
      'defaultValue.dataName',
    );
  }

  /**
   * 读取中英文l10n信息，并给每个信息id前加上扩展id
   * @param {{[id:string]:[string, string]}} l10n 中英文l10n信息
   */
  initFormatMessage(l10n) {
    const res = { 'zh-cn': {}, en: {} };

    Object.entries(l10n).forEach(([id, msgs]) => {
      const ID = `${extensionId}.${id}`;
      [res['zh-cn'][ID], res.en[ID]] = msgs;
    });
    const _formatMessage = this.runtime.getFormatMessage(res);
    this.formatMessage = (id) => {
      const ID = `${extensionId}.${id}`;
      return _formatMessage({
        ID,
        default: ID,
        description: ID,
      });
    };
  }

  getInfo() {
    return {
      id: extensionId, // 拓展id
      name: this.formatMessage('extensionName'),
      docsURI: this.formatMessage('docsURI'),
      color1: '#DA4D16',
      menuIconURI: icon,
      blockIconURI: icon,
      blocks: [
        // "---" + this.formatMessage("tag.tempData"), // 数据
        // 清空所有数据
        {
          opcode: 'deleteAllTempData',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.deleteAllTempData'),
        },
        // 数据量
        {
          opcode: 'getCountOfTempData',
          blockType: Scratch.BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.getCountOfTempData'),
        },
        // 删除数据
        {
          opcode: 'delTempData',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.delTempData'),
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.dataName'),
            },
          },
        },
        // 判断数据存在
        {
          opcode: 'ifTempDataExist',
          blockType: Scratch.BlockType.BOOLEAN,
          text: this.formatMessage('block.ifTempDataExist'),
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.dataName'),
            },
          },
        },
        // // 按钮：显示嵌套功能
        // {
        //   blockType: Scratch.BlockType.BUTTON,
        //   hideFromPalette: this.enableNesting,
        //   text: this.formatMessage('button.showNestingSupportedBlock'),
        //   onClick: () => {
        //     // if (confirm(this.formatMessage('confirm.enableNesting?'))) {
        //     this.enableNesting = true;
        //     this.storeExtConfig();
        //     this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
        //     // }
        //   },
        // },
        // // 按钮：隐藏嵌套功能
        // {
        //   blockType: Scratch.BlockType.BUTTON,
        //   text: this.formatMessage('button.hideNestingSupportedBlock'),
        //   hideFromPalette: !this.enableNesting,
        //   onClick: () => {
        //     this.enableNesting = false;
        //     this.storeExtConfig();
        //     this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
        //   },
        // },
        // `---${this.formatMessage('tag.tools')}`, // 工具
        '---',
        // 获取某内容类型
        {
          opcode: 'typeOf',
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('block.typeOf'),
          // hideFromPalette: !this.enableNesting,
          arguments: {
            VALUE: {
              type: null,
              // defaultValue: 'foo',
            },
          },
        },
        // 获取某内容JSON
        {
          opcode: 'JSONOf',
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('block.JSONOf'),
          hideFromPalette: !this.enableNesting,
          arguments: {
            VALUE: {
              type: null,
              // defaultValue: 'foo',
            },
          },
        },
        // 由JSON返回对象
        {
          opcode: 'getObjFromJson',
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('block.getObjFromJson'),
          // hideFromPalette: !this.enableNesting,
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue:
                `{${this.formatMessage('defaultValue.JSON')}}`,
            },
          },
        },
        // 复制对象
        {
          opcode: 'copyFrom',
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('block.copyFrom'),
          hideFromPalette: !this.enableNesting,
          arguments: {
            OP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'COPY_MENU',
            },
            OBJ: {
              type: null,
            },
          },
        },
        // 返回一个空数组/对象
        {
          opcode: 'newEmptyObjOrArray',
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('block.newEmptyObjOrArray'),
          disableMonitor: true,
          hideFromPalette: true, // !this.enableNesting,
          arguments: {
            OPTION: {
              type: Scratch.ArgumentType.STRING,
              // defaultValue: this.formatMessage("defaultValue.JSON"),
              menu: 'EMPTY_LIST_OR_OBJ',
            },
          },
        },
        `---${this.formatMessage('tag.tempVar')}`, // 变量
        // 设置数据
        {
          opcode: 'setTempData',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.setTempData'),
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.dataName'),
            },
            OP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'DATA_SET_OPTION',
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '100',
            },
          },
        },
        // 获取数据
        {
          opcode: 'getTempData',
          blockType: Scratch.BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.getTempData'),
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.dataName'),
            },
            // OPTION: {
            //   type: Scratch.ArgumentType.STRING,
            //   menu: 'DATA_GET_OPTION',
            // },
          },
        },
        // "---" + this.formatMessage("tag.complexData"),
        `---${this.formatMessage('tag.list')}`, // 列表
        // 返回一个空列表
        {
          opcode: 'getNewList',
          blockType: Scratch.BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.getNewList'),
        },
        // 返回一个N个NUM的列表
        {
          opcode: 'createListWithLength',
          blockType: Scratch.BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.createListWithLength'),
          arguments: {
            N: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10,
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0',
            },
          },
        },
        // 向列表加入(返回值版)
        {
          opcode: 'addItemToListAndReturn',
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('block.addItemToListAndReturn'),
          arguments: {
            OBJ: {
              type: null,
            },
            OP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'LIST_ADD_OR_REMOVE',
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.thing'),
            },
          },
        },
        '---',
        // 创建空列表
        {
          opcode: 'createOrClearList',
          blockType: Scratch.BlockType.COMMAND,
          // hideFromPalette: true, // 积木隐藏（这个积木的用法容易让人误会）
          text: this.formatMessage('block.createOrClearList'),
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('list'),
            },
          },
        },
        // 向列表加入(旧版，隐藏)
        {
          opcode: 'addItemToList',
          blockType: Scratch.BlockType.COMMAND,
          hideFromPalette: true,
          text: this.formatMessage('block.addItemToList'),
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('list'),
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.thing'),
            },
          },
        },
        // 向列表加入
        {
          opcode: 'addItemToList2',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.addItemToList2'),
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('list'),
            },
            OP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'LIST_ADD_OR_REMOVE',
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.thing'),
            },
          },
        },
        // 设置列表
        {
          opcode: 'setItemOfList',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.setItemOfList'),
          // isDynamic: true,
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('list'),
            },
            IDX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
            OP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'LIST_SET_OPTION',
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.thing'),
            },
          },
        },
        // 删除列表XX项
        {
          opcode: 'delItemOfList',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.delItemOfList'),
          // isDynamic: true,
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('list'),
            },
            IDX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
          },
        },
        '---',
        // 获取列表XX项
        {
          opcode: 'getItemOfList',
          blockType: Scratch.BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.getItemOfList'),
          // isDynamic: true,
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('list'),
            },
            IDX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
            // OPTION: {
            //   type: Scratch.ArgumentType.STRING,
            //   menu: 'GET_OPTION',
            // },
          },
        },
        // 列表长度
        {
          opcode: 'lengthOfList',
          blockType: Scratch.BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.lengthOfList'),
          // isDynamic: true,
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('list'),
            },
          },
        },
        // 列表包含xx?
        {
          opcode: 'ifListItemExist',
          blockType: Scratch.BlockType.BOOLEAN,
          text: this.formatMessage('block.ifListItemExist'),
          // isDynamic: true,
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('list'),
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.thing'),
            },
          },
        },
        // 获取列表第一个xx的索引
        {
          opcode: 'getListItemIdxByItem',
          blockType: Scratch.BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.getListItemIdxByItem'),
          // isDynamic: true,
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('list'),
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.thing'),
            },
          },
        },
        '---',
        // 合并列表
        {
          opcode: 'mergeList',
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('block.mergeList'),
          arguments: {
            OP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'OP_LISTS',
            },
            LIST1: {
              type: null,
            },
            LIST2: {
              type: null,
            },
          },
        },
        // 列表反转、排序等操作
        {
          opcode: 'opList',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.opList'),
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('list'),
            },
            OP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'LIST_OP',
            },
          },
        },
        // 含对象的列表排序
        {
          opcode: 'sortListByProp',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.sortListByProp'),
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('list'),
            },
            PROP: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.prop'),
            },
            OP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'SORT_ORDER',
            },
          },
        },
        `---${this.formatMessage('tag.object')}`, // 对象
        // 返回一个空对象
        {
          opcode: 'getNewObject',
          disableMonitor: true,
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('block.getNewObject'),
        },
        // 设置对象(并返回)
        {
          opcode: 'setPropOfObjectAndReturn',
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('block.setPropOfObjectAndReturn'),
          arguments: {
            OBJ: {
              type: null,
            },
            PROP: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.prop'),
            },
            OP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'ITEM_SET_OPTION',
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.thing'),
            },
          },
        },
        '---',
        // 创建空对象
        {
          opcode: 'createOrClearObject',
          blockType: Scratch.BlockType.COMMAND,
          // hideFromPalette: true, // 积木隐藏（这个积木的用法容易让人误会）
          text: this.formatMessage('block.createOrClearObject'),
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('obj'),
            },
          },
        },
        // 设置对象
        {
          opcode: 'setPropOfObject',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.setPropOfObject'),
          // isDynamic: true,
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('obj'),
            },
            PROP: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.prop'),
            },
            OP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'ITEM_SET_OPTION',
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.thing'),
            },
          },
        },
        // 删除对象名为xx的内容
        {
          opcode: 'delPropOfObject',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.delPropOfObject'),
          // isDynamic: true,
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('obj'),
            },
            PROP: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.prop'),
            },
          },
        },
        '---',
        // 获取对象名为XX的内容
        {
          opcode: 'getPropOfObject',
          blockType: Scratch.BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.getPropOfObject'),
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('obj'),
            },
            PROP: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.prop'),
            },
            // OPTION: {
            //   type: Scratch.ArgumentType.STRING,
            //   menu: 'GET_OPTION',
            // },
          },
        },
        // 对象长度
        {
          opcode: 'sizeOfObject',
          blockType: Scratch.BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.sizeOfObject'),
          // isDynamic: true,
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('obj'),
            },
          },
        },
        // 对象属性是否存在
        {
          opcode: 'ifObjectPropExist',
          blockType: Scratch.BlockType.BOOLEAN,
          text: this.formatMessage('block.ifObjectPropExist'),
          // isDynamic: true,
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('obj'),
            },
            PROP: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.prop'),
            },
          },
        },
        // 获取对象第n项的xx
        {
          opcode: 'getPropOfObjectByIdx',
          blockType: Scratch.BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.getPropOfObjectByIdx'),
          // isDynamic: true,
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('obj'),
            },
            IDX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
            OPTION: {
              type: Scratch.ArgumentType.STRING,
              menu: 'OBJECT_GET_OPTION',
            },
          },
        },
        // 获取对象所有键
        {
          opcode: 'getAllProperties',
          blockType: Scratch.BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.getAllProperties'),
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('obj'),
            },
            OPTION: {
              type: Scratch.ArgumentType.STRING,
              menu: 'KEYS_OR_VALUES_OR_ENTRIES',
            },
          },
        },
        '---',
        // 合并对象
        {
          opcode: 'mergeObject',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.mergeObject'),
          arguments: {
            NAME_OR_OBJ: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('obj'),
            },
            OBJ: {
              type: null,
            },
          },
        },
        `---${this.formatMessage('tag.ScratchList')}`, // 原版列表操作
        // 获取原版列表
        {
          opcode: 'getScratchList',
          blockType: Scratch.BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.getScratchList'),
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              menu: 'LIST_MENU',
            },
          },
        },
        // 设置原版列表
        {
          opcode: 'setScratchList',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.setScratchList'),
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              menu: 'LIST_MENU',
            },
            OBJ: {
              type: null,
            },
          },
        },
      ],
      menus: {
        LIST_ADD_OR_REMOVE: [
          {
            text: this.formatMessage('menu.addTo'),
            value: 'add',
          },
          {
            text: this.formatMessage('menu.removeFrom'),
            value: 'remove',
          },
          {
            text: this.formatMessage('menu.ifNotExistsaddTo'),
            value: 'addIfNotExists',
          },
        ],
        LIST_MENU: {
          acceptReporters: true,
          items: 'listMenu',
        },
        DATA_SET_OPTION: {
          items: '__dataSetOptionMenu',
        },
        ITEM_SET_OPTION: {
          items: '__itemSetOptionMenu',
        },
        LIST_SET_OPTION: {
          items: '__listSetOptionMenu',
        },
        INSERT_OPTION: {
          items: '__insertOptionMenu',
        },
        DATA_GET_OPTION: {
          items: '__dataGetOptionMenu',
        },
        GET_OPTION: {
          items: '__getOptionMenu',
        },
        OBJECT_GET_OPTION: {
          items: '__objectGetOptionMenu',
        },
        LIST_OP: [
          {
            text: this.formatMessage('menu.shuffle'),
            value: 'shuf',
          },
          {
            text: this.formatMessage('menu.reverse'),
            value: 'rev',
          },
          {
            text: this.formatMessage('menu.ascSort'),
            value: 'asc',
          },
          {
            text: this.formatMessage('menu.descSort'),
            value: 'desc',
          },
          {
            text: this.formatMessage('menu.removeDuplicates'),
            value: 'dedup',
          },
        ],
        OP_LISTS: [
          {
            text: this.formatMessage('menu.merge'),
            value: 'merge',
          },
          {
            text: this.formatMessage('menu.union'),
            value: 'union',
          },
          {
            text: this.formatMessage('menu.intersection'),
            value: 'intersec',
          },
          {
            text: this.formatMessage('menu.difference'),
            value: 'diff',
          },
        ],
        SORT_ORDER: [
          {
            text: this.formatMessage('menu.ascSort'),
            value: 'asc',
          },
          {
            text: this.formatMessage('menu.descSort'),
            value: 'desc',
          },
        ],
        KEYS_OR_VALUES_OR_ENTRIES: [
          {
            text: this.formatMessage('menu.keys'),
            value: 'keys',
          },
          {
            text: this.formatMessage('menu.values'),
            value: 'values',
          },
          {
            text: this.formatMessage('menu.entries'),
            value: 'entries',
          },
        ],
        COPY_MENU: [
          {
            text: this.formatMessage('menu.shallow'), // 空列表
            value: 'shallow',
          },
          {
            text: this.formatMessage('menu.deep'), // 空对象
            value: 'deep',
          },
        ],
        EMPTY_LIST_OR_OBJ: [
          {
            text: this.formatMessage('menu.emptyList'), // 空列表
            value: '[]',
          },
          {
            text: this.formatMessage('menu.emptyObj'), // 空对象
            value: '{}',
          },
        ],
      },
    };
  }

  // ******************** ↓扩展配置读取&保存（参考了 tw 的通过注释来保存配置） ********************

  /** 查找扩展配置的注释（在舞台区） */
  findExtConfigComment() {
    const stage = this.runtime.getTargetForStage();
    if (!stage || !stage.comments) return undefined;
    return stage.comments[EXT_CONFIG_COMMENT_ID];
  }

  /**
   * 从注释获取所有扩展配置
   * @returns  {{[extensionId: string]:object}}  {扩展1:...扩展2:...}
   */
  getAllExtConfig() {
    const comment = this.findExtConfigComment();
    if (!comment) return undefined;
    const lines = comment.text.split('\n');
    if (lines.length === 0) {
      console.warn(
        `${extensionId}: Extension config comment does not contain valid line.`,
      );
      return undefined;
    }
    // 配置信息存在最后一行
    const jsonText = lines[lines.length - 1];
    try {
      const parsed = JSON.parse(jsonText);
      if (!parsed || typeof parsed !== 'object') {
        throw new Error('Invalid object');
      }
      return parsed;
    } catch (e) {
      console.warn(`${extensionId}: Config comment has invalid JSON`, e);
      return undefined;
    }
  }

  /** 从舞台注释应用扩展配置 */
  parseExtConfig() {
    let config = this.getAllExtConfig();
    if (!config) return;
    config = config[extensionId];
    if (!config) return;
    if (config.enableNesting) {
      this.enableNesting = Cast.toBoolean(config.enableNesting);
      this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
    }
  }

  /**
   * 生成当前扩展的配置
   * @returns {object} 配置信息
   */
  generateExtConfig() {
    const options = {};
    options.enableNesting = this.enableNesting;
    return options;
  }

  storeExtConfig() {
    // 设置配置
    let config = this.getAllExtConfig();
    if (!config) config = {};
    config[extensionId] = this.generateExtConfig();

    const existingComment = this.findExtConfigComment();
    if (existingComment) {
      const lines = existingComment.text.split('\n');
      if (lines.length === 0) {
        lines.push('');
      }
      // 配置信息存在最后一行
      lines[lines.length - 1] = JSON.stringify(config);
      existingComment.text = lines.join('\n');
    } else {
      const target = this.runtime.getTargetForStage();
      // TODO: smarter position logic
      const text = `${this.formatMessage('config.tip')}\n${JSON.stringify(
        config,
      )}`;
      target.createComment(
        EXT_CONFIG_COMMENT_ID,
        null,
        text,
        1,
        1,
        400,
        200,
        false,
      );
    }
    this.runtime.emitProjectChanged();
  }
  // ******************** ↓动态菜单 ********************

  /**
     * Scratch列表的菜单
     * @returns {text: "列表名", value: "列表id"}[];
     */
  listMenu() {
    const menus = [];
    let { variables } = this.runtime._stageTarget;
    Object.keys(variables).forEach((variable) => {
      if (variables[variable].type === 'list') {
        menus.push({
          text: variables[variable].name,
          value: variables[variable].id,
        });
      }
    });
    try {
      variables = this.runtime._editingTarget.variables;
    } catch (e) {
      variables = 'error';
    }
    if (
      variables !== 'error'
      && this.runtime._editingTarget !== this.runtime._stageTarget
    ) {
      Object.keys(variables).forEach((variable) => {
        if (variables[variable].type) {
          menus.push({
            text: `[PRIVATE] ${variables[variable].name}`,
            value: variables[variable].id,
          });
        }
      });
    }
    if (menus.length === 0) {
      menus.push({
        text: '-',
        value: 'empty',
      });
    }
    return menus;
  }

  /**
   * 返回一个写数据操作的动态菜单（设为、增加、解析JSON、浅拷贝、深拷贝）
   * @returns {Array} 菜单列表
   */
  __dataSetOptionMenu() {
    const menu = [
      {
        text: this.formatMessage('menu.op.set'), // 设为
        value: 'set',
      },
      {
        text: this.formatMessage('menu.op.add'), // 增加
        value: 'add',
      },
      // {
      //   text: this.formatMessage('menu.op.parse'), // 解析JSON
      //   value: 'parse',
      // },
    ];
    // if (this.enableNesting) {
    //   menu.push(
    //     {
    //       text: this.formatMessage('menu.op.shallowCopy'), // 浅拷贝
    //       value: 'shallowCopy',
    //     },
    //     {
    //       text: this.formatMessage('menu.op.deepCopy'), // 深拷贝
    //       value: 'deepCopy',
    //     },
    //   );
    // }
    return menu;
  }

  /**
   * 返回一个写列表操作的动态菜单（设为、增加、前插入）
   * @returns {Array} 菜单列表
   */
  __listSetOptionMenu() {
    const menu = [
      {
        text: this.formatMessage('menu.op.set'), // 设为
        value: 'set',
      },
      {
        text: this.formatMessage('menu.op.add'), // 增加
        value: 'add',
      },
      {
        text: this.formatMessage('menu.op.insert'), // 增加
        value: 'insert',
      },
    ];
    return menu;
  }

  /**
   * 返回一个写数据操作的动态菜单（设为、增加、解析JSON、浅拷贝、深拷贝）
   * @returns {Array} 菜单列表
   */
  __itemSetOptionMenu() {
    const menu = [
      {
        text: this.formatMessage('menu.op.set'), // 设为
        value: 'set',
      },
      {
        text: this.formatMessage('menu.op.add'), // 增加
        value: 'add',
      },
    ];
    // if (this.enableNesting) {
    //   menu.push(
    //     {
    //       text: this.formatMessage('menu.op.parse_warning'), // 解析JSON
    //       value: 'parse',
    //     },
    //     {
    //       text: this.formatMessage('menu.op.shallowCopy'), // 浅拷贝
    //       value: 'shallowCopy',
    //     },
    //     {
    //       text: this.formatMessage('menu.op.deepCopy'), // 深拷贝
    //       value: 'deepCopy',
    //     },
    //   );
    // }
    return menu;
  }

  /**
   * 返回一个插入数据操作的动态菜单（设为、解析JSON、浅拷贝、深拷贝）
   * @returns {Array} 菜单列表
   */
  __insertOptionMenu() {
    const menu = [
      {
        text: this.formatMessage('menu.value'), // 设为
        value: 'set',
      },
    ];
    if (this.enableNesting) {
      menu.push(
        {
          text: this.formatMessage('menu.op.parse_warning'), // 解析JSON
          value: 'parse',
        },
        {
          text: this.formatMessage('menu.op.shallowCopy'), // 浅拷贝
          value: 'shallowCopy',
        },
        {
          text: this.formatMessage('menu.op.deepCopy'), // 深拷贝
          value: 'deepCopy',
        },
      );
    }
    return menu;
  }

  /**
   * 返回一个读数据操作的动态菜单（值|运行返回对象 / 返回JSON）
   * @returns {Array} 菜单列表
   */
  __dataGetOptionMenu() {
    const menu = [
      {
        text: this.enableNesting
          ? this.formatMessage('menu.getOption.objectAllowed') // 允许返回对象
          : this.formatMessage('menu.value'), // 值
        value: 'value',
      },
    ];
    if (this.enableNesting) {
      menu.push({
        text: this.formatMessage('menu.getOption.json'), // 返回JSON
        value: 'json',
      });
    }
    return menu;
  }

  /**
   * 返回一个读数据操作的动态菜单（值|运行返回对象 / 返回JSON）
   * @returns {Array} 菜单列表
   */
  __getOptionMenu() {
    const menu = [
      {
        text: this.enableNesting
          ? this.formatMessage('menu.getOption.objectAllowed') // 允许返回对象
          : this.formatMessage('menu.value'), // 值
        value: 'value',
      },
    ];
    if (this.enableNesting) {
      menu.push({
        text: this.formatMessage('menu.getOption.json'), // 返回JSON
        value: 'json',
      });
    }
    return menu;
  }

  /**
   * 返回一个读对象操作的动态菜单（名称/ 内容|允许返回对象 / 返回JSON）
   * @returns {Array} 菜单列表
   */
  __objectGetOptionMenu() {
    const menu = [
      {
        text: this.formatMessage('menu.conInfo.name'), // 名称
        value: 'name',
      },
      {
        text: this.enableNesting
          ? this.formatMessage('menu.conInfo.objValue') // 内容，允许返回对象
          : this.formatMessage('menu.conInfo.value'), // 内容值
        value: 'value',
      },
    ];
    if (this.enableNesting) {
      menu.push({
        text: this.formatMessage('menu.conInfo.json'), // 返回JSON
        value: 'json',
      });
    }
    return menu;
  }

  // 变量积木

  /**
   * 任意内容转Sc允许的值(开启嵌套时允许返回对象，否则对象返回JSON)
   * @param {*} value
   * @returns {string|number|object}
   */
  anythingToSCArg(value) {
    return value ?? '';
    // // SC里这两个值返回空内容
    // if (value === null || value === undefined) return '';
    // // 开启嵌套时直接返回
    // if (this.enableNesting) {
    //   return SafeObject.toSafeObject(value);
    // }

    // if (typeof value === 'object') {
    //   return SafeObject.stringify(value);
    // }
    // return value;
  }

  /**
   * 清空所有数据
   */
  deleteAllTempData() {
    this.tempData = new SafeObject();
  }

  /**
   * 数据量
   * @returns {number}
   */
  getCountOfTempData() {
    return Object.keys(this.tempData.value).length;
  }

  /**
   * 删除数据
   * @param {SCarg} NAME
   */
  delTempData({ NAME }) {
    delete this.tempData.value[Cast.toString(NAME)];
  }

  /**
   * 判断数据存在
   * @param {SCarg} NAME
   * @returns {boolean}
   */
  ifTempDataExist({ NAME }) {
    return Object.prototype.hasOwnProperty.call(
      this.tempData.value,
      Cast.toString(NAME),
    );
  }

  /**
   * 根据OP，修改传入的对象/数组
   * @param {Array | object} data 要修改的对象/数组
   * @param {number | string} prop 要修改的项目索引
   * @param {string} OP 操作：set/ add/ parse/ shallowCopy/ deepCopy
   * @param {*} VALUE
   * @returns {boolean} 操作是否成功
   */
  __setDataByOption(data, prop, OP, VALUE) {
    data = SafeObject.getActualObject(data);
    switch (OP) {
      case 'set':
        data[prop] = VALUE;
        return true;
      case 'add':
        data[prop] = Cast.toNumber(data[prop]) + Cast.toNumber(VALUE);
        return true;
      case 'insert': {
        const list = data;
        const idx = prop;
        list.splice(idx, 0, VALUE);
        return true;
      }
      case 'parse': {
        try {
          if (typeof VALUE !== 'string') return false;
          const obj = SafeObject.parse(VALUE);
          if (typeof obj !== 'object' || obj === null) return false;
          data[prop] = obj;
        } catch (e) {
          return false;
        }
        return true;
      }
      case 'shallowCopy': {
        const value = SafeObject.getActualObject(VALUE);
        if (typeof value !== 'object' || value === null) return false;
        if (Array.isArray(value)) {
          data[prop] = new SafeObject([...value]);
          return true;
        }
        data[prop] = new SafeObject({ ...value });
        return true;
      }
      case 'deepCopy':
        if (typeof VALUE !== 'object' || VALUE === null) return false;
        try {
          data[prop] = SafeObject.deepCopy(VALUE);
        } catch (e) {
          return false;
        }
        return true;
      default:
        return false;
    }
  }

  /**
   * 设置数据
   * @param {SCarg} NAME
   * @param {SCarg} OP 操作：set/ add
   * @param {*} VALUE
   */
  setTempData({ NAME, OP, VALUE }) {
    const name = Cast.toString(NAME);
    this.__setDataByOption(this.tempData.value, name, OP, VALUE);
  }

  /**
   * 从JSON解析，返回对象
   * @param {SCarg} VALUE
   * @return {* | ''} 返回对象
   */
  getObjFromJson({ VALUE }) {
    try {
      if (typeof VALUE !== 'string') return '';
      const obj = SafeObject.parse(VALUE);
      // if (typeof obj !== "object" || obj === null) return '';
      return obj;
    } catch (e) {
      return '';
    }
  }

  /**
   * 创建或清空列表/对象
   * @param {string} OPTION []/{}
   * @return {SafeObject}
   */
  newEmptyObjOrArray({ OPTION }) {
    return OPTION === '[]' ? new SafeObject([]) : new SafeObject();
  }

  /**
   * 创建空对象
   * @return {SafeObject}
   */
  getNewObject() {
    return new SafeObject();
  }

  /**
   * 创建空列表
   * @return {SafeObject}
   */
  getNewList() {
    return new SafeObject([]);
  }

  /**
   * 创建包含 N 个 VALUE 的列表
   * @param {*} N 数量
   * @param {*} VALUE 内容
   * @return {SafeObject}
   */
  createListWithLength({ N, VALUE }) {
    const n = Cast.toNumber(N);
    let res;
    // 对于复杂类型，深拷贝复制
    if (typeof VALUE === 'object' && VALUE !== null) {
      res = Array.from({ length: n }, () => SafeObject.deepCopy(VALUE));
    } else {
    // 普通类型
      res = Array.from({ length: n }, () => VALUE);
    }
    return new SafeObject(res);
  }

  /**
   * 获取xx的类型
   * @param {SCarg} VALUE
   * @return {string} 类别
   */
  typeOf({ VALUE }) {
    const value = SafeObject.getActualObject(VALUE);
    if (Array.isArray(value)) return 'list';
    return typeof value;
  }

  /**
   * 获取xx的JSON
   * @param {SCarg} VALUE
   * @return {string} JSON
   */
  JSONOf({ VALUE }) {
    if (VALUE === null || VALUE === undefined) return '';
    return SafeObject.stringify(VALUE);
  }

  /**
   * 浅拷贝/完全拷贝对象
   * @param {string} OP 操作
   * @param {SCarg} OBJ 要拷贝的对象
   * @return {SCarg} 拷贝结果
   */
  copyFrom({ OP, OBJ }) {
    if (OBJ === null || OBJ === undefined) return '';
    // 不是对象，直接返回结果
    if (typeof OBJ !== 'object') return OBJ;
    // 深拷贝
    if (OP === 'deep') {
      try {
        return SafeObject.deepCopy(OBJ);
      } catch (e) {
        return `error: ${e.message}`;
      }
    } else {
      // 浅拷贝
      const obj = SafeObject.getActualObject(OBJ);
      if (Array.isArray(obj)) {
        return new SafeObject([...obj]);
      }
      return new SafeObject({ ...obj });
    }
  }

  /**
   * 根据OPTION读数据
   * @param {*} data 数据
   * @param {string} OPTION value/ json
   */
  __getDataByOption(data, OPTION) {
    if (OPTION === 'json') {
      if (typeof data === 'object') data = SafeObject.stringify(data);
      return this.anythingToSCArg(data);
    }
    return this.anythingToSCArg(data);
  }

  /**
   * 根据名字获取数据
   * @param {SCarg} NAME 数据名
   * @param {string} OPTION value/ json
   * @returns {*}
   */
  getTempData({ NAME, OPTION }) {
    const data = this.tempData.value[Cast.toString(NAME)];
    return this.__getDataByOption(data, OPTION);
  }

  // /**
  //  * 创建或清空列表/对象
  //  * @param {SCarg} NAME 数据名
  //  * @param {string} OPTION []/{}
  //  */
  // createOrClearListOrObject({ NAME, OPTION }) {
  //   this.tempData.value[Cast.toString(NAME)] = OPTION === "[]" ? [] : {};
  // }

  /**
   * 创建或清空列表
   * @param {SCarg} NAME 数据名
   */
  createOrClearList({ NAME }) {
    if (typeof NAME === 'object') {
      const value = SafeObject.getActualObject(NAME);
      if (Array.isArray(value)) {
        // 清空传入的列表
        value.length = 0;
      }
      return;
    }
    this.tempData.value[Cast.toString(NAME)] = new SafeObject([]);
  }

  /**
   * 创建或清空对象
   * @param {SCarg} NAME 数据名
   */
  createOrClearObject({ NAME }) {
    if (typeof NAME === 'object') {
      const value = SafeObject.getActualObject(NAME);
      if (value !== null && !Array.isArray(value)) {
        // 清空传入的对象
        Object.keys(value).forEach((key) => {
          delete value[key];
        });
      }
      return;
    }
    this.tempData.value[Cast.toString(NAME)] = new SafeObject();
  }

  /**
   * 根据数据名or对象，获取数组对象
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @returns {Array | false} 返回数组对象或false(读取失败)
   */
  __getListByNameOrObj(NAME_OR_OBJ) {
    let list;
    if (typeof NAME_OR_OBJ === 'object') {
      list = NAME_OR_OBJ;
    } else {
      list = this.tempData.value[Cast.toString(NAME_OR_OBJ)];
    }
    list = SafeObject.getActualObject(list);
    if (Array.isArray(list)) return list;
    return false;
  }

  /**
   * (旧版)向列表加入
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} VALUE
   */
  addItemToList({ NAME_OR_OBJ, VALUE }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return;
    this.__setDataByOption(list, list.length, 'set', VALUE);
  }

  /**
   * 向列表加入/移出
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {'add'|'remove'|'addIfNotExists'} OP 操作
   * @param {*} VALUE
   */
  addItemToList2({ NAME_OR_OBJ, OP, VALUE }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return;
    this.__addOrRemoveFromList(list, OP, VALUE);
  }

  /**
   * 向列表加入/移出，并返回列表
   * @param {*} OBJ 传入对象
   * @param {'add'|'remove'|'addIfNotExists'} OP 操作
   * @param {*} VALUE
   */
  addItemToListAndReturn({ OBJ, OP, VALUE }) {
    const list = this.__getArray(OBJ);
    if (!list) return OBJ;
    this.__addOrRemoveFromList(list, OP, VALUE);
    return OBJ;
  }

  /**
   * 向列表加入/移出，并返回列表
   * @param {Array} list 传入列表
   * @param {'add'|'remove'|'addIfNotExists'} OP 操作
   * @param {*} VALUE 内容
   */
  __addOrRemoveFromList(list, OP, VALUE) {
    switch (OP) {
      case 'add':
        list.push(VALUE);
        break;
      case 'remove': {
        const index = this.getListItemIdxByItem({ NAME_OR_OBJ: list, VALUE });
        if (index > 0) {
          list.splice(index - 1, 1);
        }
        break;
      }
      case 'addIfNotExists':
        if (!this.ifListItemExist({ NAME_OR_OBJ: list, VALUE })) {
          list.push(VALUE);
        }
        break;
      default:
        break;
    }
  }

  /**
   * 设置列表第x项
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {number} IDX 第x项
   * @param {string} OP 操作：set/ add/ parse/ shallowCopy/ deepCopy
   * @param {*} VALUE
   */
  setItemOfList({
    NAME_OR_OBJ, IDX, OP, VALUE,
  }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return;
    const idx = Cast.toNumber(IDX) - 1;
    if (idx < 0 || idx > list.length) return;

    this.__setDataByOption(list, idx, OP, VALUE);
  }

  // /**
  //  * 插入到列表第x项前
  //  * @param {*} NAME_OR_OBJ 数据名或传入对象
  //  * @param {number} IDX 第x项
  //  * @param {*} VALUE
  //  * @param {string} OP 操作：set/ parse/ shallowCopy/ deepCopy
  //  */
  // insertItemIntoList({
  //   NAME_OR_OBJ, IDX, VALUE, OP,
  // }) {
  //   const list = this.__getListByNameOrObj(NAME_OR_OBJ);
  //   if (!list) return;
  //   const idx = Cast.toNumber(IDX) - 1;
  //   if (idx < 0 || idx > list.length) return;
  //   list.splice(idx, 0, null);
  //   const success = this.__setDataByOption(list, idx, OP, VALUE);
  //   if (!success) {
  //     list.splice(idx, 1);
  //   }
  // }

  /**
   * 删除列表XX项
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {number} IDX 第x项
   */
  delItemOfList({ NAME_OR_OBJ, IDX }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return;

    const idx = Cast.toNumber(IDX) - 1;
    if (idx < 0 || idx > list.length - 1) return;
    list.splice(idx, 1);
  }

  /**
   * 获取列表XX项
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {number} IDX 第x项
   * @param {string} OPTION  value/ json
   * @returns {SCarg}
   */
  getItemOfList({ NAME_OR_OBJ, IDX, OPTION }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return '';

    const idx = Cast.toNumber(IDX) - 1;
    if (idx < 0 || idx > list.length - 1) return '';

    return this.__getDataByOption(list[idx], OPTION);
  }

  /**
   * 列表长度
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @returns {number} 长度
   */
  lengthOfList({ NAME_OR_OBJ }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return 0;

    return list.length;
  }

  /**
   * 列表包含xx?
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} VALUE
   * @returns {boolean}
   */
  ifListItemExist({ NAME_OR_OBJ, VALUE }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return false;

    if (list.indexOf(VALUE) >= 0) {
      return true;
    }
    if (typeof VALUE === 'object') return false;
    // Try using Scratch comparison operator on each item.
    // (Scratch considers the string '123' equal to the number 123).
    for (let i = 0; i < list.length; i += 1) {
      if (typeof list[i] !== 'object' && Cast.compare(list[i], VALUE) === 0) {
        return true;
      }
    }
    return false;
  }

  /**
   * 获取列表第一个xx的索引
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} VALUE
   * @returns {number}
   */
  getListItemIdxByItem({ NAME_OR_OBJ, VALUE }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return 0;

    const idx = list.indexOf(VALUE);
    if (idx >= 0) {
      return idx + 1;
    }
    if (typeof VALUE === 'object') return 0;

    for (let i = 0; i < list.length; i += 1) {
      if (typeof list[i] !== 'object' && Cast.compare(list[i], VALUE) === 0) {
        return i + 1;
      }
    }
    return 0;
  }

  /**
   * 合并两个LIST
   * @param {'merge'|'union'|'intersec'|'diff'} OP 操作
   * @param {*} LIST1 列表1
   * @param {*} LIST2 列表2
   */
  mergeList({ OP, LIST1, LIST2 }) {
    const list1 = this.__getArray(LIST1);
    const list2 = this.__getArray(LIST2);
    let res = [];
    if (list1 && list2) {
      switch (OP) {
        case 'merge':
          res = list1.concat(list2);
          break;
          // 并集
        case 'union':
          res = [...new Set(list1.concat(list2))];
          break;
        // 交集
        case 'intersec':
          res = list1.filter((element) => list2.includes(element));
          break;
        // 差集(list1有list2没有)
        case 'diff':
          res = list1.filter((element) => !list2.includes(element));
          break;
        default:
          break;
      }
    }
    return new SafeObject(res);
  }

  /**
   * 对象assign
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} OBJ 对象
   */
  mergeObject({ NAME_OR_OBJ, OBJ }) {
    const obj2 = this.__getObj(OBJ);
    if (!obj2) return;
    const obj = this.__getObjByNameOrObj(NAME_OR_OBJ);
    if (!obj) return;
    Object.assign(obj, obj2);
  }

  /**
   * 操作列表
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {'shuf'|'rev'|'asc'|'desc'|'dedup'} OP 操作
   */
  opList({ NAME_OR_OBJ, OP }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return;
    switch (OP) {
      case 'shuf':
        list.sort(() => Math.random() - 0.5);
        break;
      case 'rev':
        list.reverse();
        break;
      case 'asc':
        list.sort((a, b) => Cast.compare(a, b));
        break;
      case 'desc':
        list.sort((a, b) => Cast.compare(b, a));
        break;
      case 'dedup': {
        // 去重列表（在原列表上操作）
        const origList = [...list];
        list.length = 0;
        origList.forEach((item) => {
          if (!list.includes(item)) list.push(item);
        });
        break;
      }
      default:
        break;
    }
  }

  /**
   * 根据对象属性排序数组
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} PROP 属性名
   * @param {'asc'|'desc'} OP 排序方式
   */
  sortListByProp({ NAME_OR_OBJ, PROP, OP }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return;
    const prop = Cast.toString(PROP);
    const asc = (OP === 'asc' ? 1 : -1);
    try {
      list.sort((a, b) => {
        const a1 = SafeObject.getActualObject(a);
        const b1 = SafeObject.getActualObject(b);
        return Cast.compare(a1[prop], b1[prop]) * asc;
      });
    } catch (e) {
      this.logError(e);
    }
  }

  /**
   * 使用 Gandi 控制台弹出报错信息
   * @param  {...any} args 报错信息
   */
  logError(...args) {
    if (this.runtime.logSystem) {
      // error的红字看不清，还是使用warn
      this.runtime.logSystem.warn(`[${this.formatMessage('name')}]`, ...args);
      if (!this.runtime.isPlayerOnly) this.runtime.logSystem.show();
    } else console.error(`${this.formatMessage('extensionName')}: `, ...args);
  }

  /**
   * 根据数据名or对象，获取对象
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @returns {object | false} 返回对象或false(读取失败)
   */
  __getObjByNameOrObj(NAME_OR_OBJ) {
    let obj;
    if (typeof NAME_OR_OBJ === 'object') {
      obj = NAME_OR_OBJ;
    } else {
      obj = this.tempData.value[Cast.toString(NAME_OR_OBJ)];
    }
    obj = SafeObject.getActualObject(obj);
    if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
      return obj;
    }
    return false;
  }

  /**
   * 设置对象
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} PROP 属性名
   * @param {string} OP 操作：set/ add
   * @param {*} VALUE
   */
  setPropOfObject({
    NAME_OR_OBJ, PROP, OP, VALUE,
  }) {
    const obj = this.__getObjByNameOrObj(NAME_OR_OBJ);
    if (!obj) return;

    this.__setDataByOption(obj, Cast.toString(PROP), OP, VALUE);
  }

  /**
   * 从传入内容获取对象(列表返回null)
   * @param {*} OBJ 传入内容
   * @returns {object | null} 对象
   */
  __getObj(OBJ) {
    if (OBJ === null || typeof OBJ !== 'object') return null;
    const obj = SafeObject.getActualObject(OBJ);
    if (Array.isArray(obj)) return null;
    return obj;
  }

  /**
   * 从传入内容获取列表
   * @param {*} OBJ 传入内容
   * @returns {Array | null} 列表
   */
  __getArray(OBJ) {
    if (OBJ === null || typeof OBJ !== 'object') return null;
    const obj = SafeObject.getActualObject(OBJ);
    if (!Array.isArray(obj)) return null;
    return obj;
  }

  /**
   * 设置对象
   * @param {*} OBJ 传入对象
   * @param {*} PROP 属性名
   * @param {string} OP 操作：set/ add
   * @param {*} VALUE
   */
  setPropOfObjectAndReturn({
    OBJ, PROP, OP, VALUE,
  }) {
    const obj = this.__getObj(OBJ);
    if (!obj) return OBJ;
    this.__setDataByOption(obj, Cast.toString(PROP), OP, VALUE);
    return OBJ;
  }

  /**
   * 删除对象名为xx的内容
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} PROP 属性名
   */
  delPropOfObject({ NAME_OR_OBJ, PROP }) {
    const obj = this.__getObjByNameOrObj(NAME_OR_OBJ);
    if (!obj) return;

    delete obj[Cast.toString(PROP)];
  }

  /**
   * 获取对象名为XX的内容
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} PROP 属性名
   * @param {string} OPTION  value/json
   * @returns {*}
   */
  getPropOfObject({ NAME_OR_OBJ, PROP, OPTION }) {
    const obj = this.__getObjByNameOrObj(NAME_OR_OBJ);
    if (!obj) return '';

    return this.__getDataByOption(obj[Cast.toString(PROP)], OPTION);
  }

  /**
   * 获取对象第n项的xx
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {number} IDX 索引
   * @param {string} OPTION  name/ value/ json
   * @returns {*}
   */
  getPropOfObjectByIdx({ NAME_OR_OBJ, IDX, OPTION }) {
    const obj = this.__getObjByNameOrObj(NAME_OR_OBJ);
    if (!obj) return '';

    const key = Object.keys(obj)[Cast.toNumber(IDX) - 1];
    if (key === undefined) return '';
    if (OPTION === 'name') return key;

    return this.__getDataByOption(obj[key], OPTION);
  }

  /**
   * 获取对象keys
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {'keys'|'values'|'entries'} OPTION
   * @returns {*}
   */
  getAllProperties({ NAME_OR_OBJ, OPTION }) {
    const obj = this.__getObjByNameOrObj(NAME_OR_OBJ);
    if (!obj) return SafeObject.toSafeObject([]);

    let res;
    switch (Cast.toString(OPTION)) {
      case 'keys':
        res = Object.keys(obj);
        break;
      case 'values':
        res = Object.values(obj);
        break;
      case 'entries':
        res = Object.entries(obj).map((item) => SafeObject.toSafeObject(item));
        break;
      default:
        res = [];
    }
    return SafeObject.toSafeObject(res);
  }

  /**
   * 对象长度
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @returns {number}
   */
  sizeOfObject({ NAME_OR_OBJ }) {
    const obj = this.__getObjByNameOrObj(NAME_OR_OBJ);
    if (!obj) return 0;
    return Object.keys(obj).length;
  }

  /**
   * 对象是否有某个属性
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} PROP 属性名
   * @returns {boolean}
   */
  ifObjectPropExist({ NAME_OR_OBJ, PROP }) {
    const obj = this.__getObjByNameOrObj(NAME_OR_OBJ);
    if (!obj) return false;
    return Object.prototype.hasOwnProperty.call(obj, Cast.toString(PROP));
  }

  /**
   * 获取原版 Scratch 原版列表
   * @param {*} NAME 列表名
   * @returns {SafeObject | ''}
   */
  getScratchList({ NAME }, util) {
    if (NAME === 'empty') return '';
    let list = util.target.lookupVariableById(NAME);
    if (!list) {
      list = util.target.lookupVariableByNameAndType(NAME, 'list');
      if (!list) return '';
    }
    return SafeObject.toSafeObject(list.value);
  }

  /**
   * 修改原版 Scratch 原版列表
   * @param {*} NAME 列表名
   * @param {*} OBJ 要设为的对象
   */
  setScratchList({ NAME, OBJ }, util) {
    const obj = SafeObject.getActualObject(OBJ);
    if (!Array.isArray(obj)) {
      return;
    }
    if (NAME === 'empty') return;
    let list = util.target.lookupVariableById(NAME);
    if (!list) {
      list = util.target.lookupVariableByNameAndType(NAME, 'list');
      if (!list) return;
    }
    list.value = obj;
  }
}

window.tempExt = {
  Extension: moreDataTypes,
  info: {
    name: `${extensionId}.extensionName`,
    description: `${extensionId}.description`,
    extensionId,
    iconURL: cover,
    insetIconURL: icon,
    featured: true,
    disabled: false,
    docsURI: 'https://learn.ccw.site/article/3b5fb890-b480-4157-b104-dacd53449549',
    collaborator: 'Arkos @ CCW',
  },
  l10n: {
    'zh-cn': {
      [`${extensionId}.extensionName`]: '高级数据结构',
      [`${extensionId}.description`]: '🗄️ 引入对象等高级数据结构，支持嵌套对象。',
    },
    en: {
      [`${extensionId}.extensionName`]: 'Advanced Data Structure',
      [`${extensionId}.description`]: '🗄️ Introducing advanced data structures like objects, with support for nested object!',
    },
  },
};
