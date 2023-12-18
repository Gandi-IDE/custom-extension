/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
const { Scratch } = window;
const { Cast } = Scratch;

const extensionId = 'moreDataTypes';
// const extensionId = 'test';

/** 保存扩展配置的舞台注释的Id */
const EXT_CONFIG_COMMENT_ID = '_ArkosExtensionConfig_';

// import cover from './assets/cover1.png'
// import icon from './assets/icon1.svg'

const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOC4yNSIgaGVpZ2h0PSIxOC4yNSIgdmlld0JveD0iMCwwLDE4LjI1LDE4LjI1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzEwLjg3NSwtMTcwLjg3NSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMzE5LjQzNzUsMTc0LjYxNzE5djJjMCwwLjM0NTE4IC0wLjI3OTgyLDAuNjI1IC0wLjYyNSwwLjYyNWgtNC4xODc1Yy0wLjM0NTE4LDAgLTAuNjI1LC0wLjI3OTgyIC0wLjYyNSwtMC42MjV2LTJjMCwtMC4zNDUxOCAwLjI3OTgyLC0wLjYyNSAwLjYyNSwtMC42MjVoNC4xODc1YzAuMzQ1MTgsMCAwLjYyNSwwLjI3OTgyIDAuNjI1LDAuNjI1ek0zMjYsMTc0LjYxNzE5djJjMCwwLjM0NTE4IC0wLjI3OTgyLDAuNjI1IC0wLjYyNSwwLjYyNWgtNC4xODc1Yy0wLjM0NTE4LDAgLTAuNjI1LC0wLjI3OTgyIC0wLjYyNSwtMC42MjV2LTJjMCwtMC4zNDUxOCAwLjI3OTgyLC0wLjYyNSAwLjYyNSwtMC42MjVoNC4xODc1YzAuMzQ1MTgsMCAwLjYyNSwwLjI3OTgyIDAuNjI1LDAuNjI1ek0zMTkuNDM3NSwxNzguOTkyMTl2MmMwLDAuMzQ1MTggLTAuMjc5ODIsMC42MjUgLTAuNjI1LDAuNjI1aC00LjE4NzVjLTAuMzQ1MTgsMCAtMC42MjUsLTAuMjc5ODIgLTAuNjI1LC0wLjYyNXYtMmMwLC0wLjM0NTE4IDAuMjc5ODIsLTAuNjI1IDAuNjI1LC0wLjYyNWg0LjE4NzVjMC4zNDUxOCwwIDAuNjI1LDAuMjc5ODIgMC42MjUsMC42MjV6TTMyNiwxNzl2MmMwLDAuMzQ1MTggLTAuMjc5ODIsMC42MjUgLTAuNjI1LDAuNjI1aC00LjE4NzVjLTAuMzQ1MTgsMCAtMC42MjUsLTAuMjc5ODIgLTAuNjI1LC0wLjYyNXYtMmMwLC0wLjM0NTE4IDAuMjc5ODIsLTAuNjI1IDAuNjI1LC0wLjYyNWg0LjE4NzVjMC4zNDUxOCwwIDAuNjI1LDAuMjc5ODIgMC42MjUsMC42MjV6TTMxOS40Mzc1LDE4My4zODI4MXYyYzAsMC4zNDUxOCAtMC4yNzk4MiwwLjYyNSAtMC42MjUsMC42MjVoLTQuMTg3NWMtMC4zNDUxOCwwIC0wLjYyNSwtMC4yNzk4MiAtMC42MjUsLTAuNjI1di0yYzAsLTAuMzQ1MTggMC4yNzk4MiwtMC42MjUgMC42MjUsLTAuNjI1aDQuMTg3NWMwLjM0NTE4LDAgMC42MjUsMC4yNzk4MiAwLjYyNSwwLjYyNXpNMzI2LDE4My4zODI4MXYyYzAsMC4zNDUxOCAtMC4yNzk4MiwwLjYyNSAtMC42MjUsMC42MjVoLTQuMTg3NWMtMC4zNDUxOCwwIC0wLjYyNSwtMC4yNzk4MiAtMC42MjUsLTAuNjI1di0yYzAsLTAuMzQ1MTggMC4yNzk4MiwtMC42MjUgMC42MjUsLTAuNjI1aDQuMTg3NWMwLjM0NTE4LDAgMC42MjUsMC4yNzk4MiAwLjYyNSwwLjYyNXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0zMTAuODc1LDE4OS4xMjV2LTE4LjI1aDE4LjI1djE4LjI1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PC9nPjwvZz48L3N2Zz4=';
const cover = 'https://m.ccw.site/user_projects_assets/40d3aa39d5101bd5df854cf3a079fa4a.png';

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字和文本，需要同时处理 */

/** @typedef {any} Util util 参数，暂时定为 any */

let LIST_NAME;
let OBJ_NAME;

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
    return JSON.stringify(obj, (key, value) => SafeObject.getActualObject(value));
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
   * 返回 SafeObject 字符串表示(例如："（列表）[1,2,3]")
   * @returns {string} 字符串表示
   */
  toString() {
    return `${
      Array.isArray(this.value) ? LIST_NAME : OBJ_NAME
    }${SafeObject.stringify(this.value)}`;
  }

  // toJSON() {
  //   return '<SafeObject>';
  // }
}

class moreDataTypes {
  constructor(runtime) {
    this.runtime = runtime;

    /** 数据
     * @type {SafeObject}
     */
    this.tempData = new SafeObject();

    /** 是否启用嵌套功能 */
    this.enableNesting = false;

    runtime.on('PROJECT_LOADED', () => {
      // 从作品注释读取扩展配置
      this.parseExtConfig();
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
      'tag.tempVar': ['临时变量', 'Temp Data'],
      'tag.complexData': [' 复杂数据类型', 'Complex Data'],
      'tag.list': ['列表操作', 'List Operation'],
      'tag.object': ['对象操作', 'Object Operation'],
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
      'defaultValue.dataName': ['我的数据', 'my data'],
      'defaultValue.listName': ['我的列表', 'my list'],
      'defaultValue.objName': ['我的对象', 'my object'],
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
      'menu.op.parse': ['从JSON解析', 'parse from JSON'],
      'menu.op.parse_warning': ['从JSON解析', 'parse from JSON'],
      'menu.op.shallowCopy': ['单层拷贝对象', 'shallow copy from'],
      'menu.op.deepCopy': ['深度拷贝对象', 'deep copy from'],
      'block.getTempData': ['数据[NAME]', 'data[NAME]'],
      'menu.getOption.objectAllowed': ['值', 'value'],
      'menu.getOption.json': ['JSON', 'JSON'],
      'block.getObjFromJson': [
        '将JSON[VALUE]解析为对象',
        'parse JSON [VALUE] to object',
      ],
      'block.newEmptyObjOrArray': ['返回一个[OPTION]', 'create an [OPTION]'],
      'menu.emptyList': ['空列表', 'empty list'],
      'menu.emptyObj': ['空对象', 'empty object'],
      'block.typeOf': ['[VALUE]的类型', 'type of [VALUE]'],
      'block.JSONOf': ['[VALUE]对应JSON', 'JSON of [VALUE]'],
      'block.createOrClearList': [
        '将名为[NAME]的数据设为空列表',
        'set [NAME] to an empty list',
      ],
      'block.addItemToList': [
        '向列表[NAME_OR_OBJ]加入[VALUE][OP]',
        'add [VALUE][OP] to list [NAME_OR_OBJ]',
      ],
      'defaultValue.thing': ['东西', 'thing'],
      'block.setItemOfList': [
        '将列表[NAME_OR_OBJ]第[IDX]项[OP][VALUE]',
        'item [IDX] of list [NAME_OR_OBJ][OP][VALUE]',
      ],
      'block.insertItemIntoList': [
        '在列表[NAME_OR_OBJ]第[IDX]项前插入[VALUE][OP]',
        'insert [VALUE][OP] at [IDX] of list [NAME_OR_OBJ]',
      ],
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
        '将名为[NAME]的数据设为空对象',
        'set [NAME] to an empty object',
      ],
      'block.setPropOfObject': [
        '对象[NAME_OR_OBJ]的[PROP][OP][VALUE]',
        '[PROP] of object [NAME_OR_OBJ][OP][VALUE]',
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
      'block.sizeOfObject': [
        '对象[NAME_OR_OBJ]中内容数',
        'size of object [NAME_OR_OBJ]',
      ],
      'block.ifObjectPropExist': [
        '对象[NAME_OR_OBJ]包含[PROP]？',
        'object [NAME_OR_OBJ] has [PROP]?',
      ],
    });

    LIST_NAME = this.formatMessage('name.list');
    OBJ_NAME = this.formatMessage('name.object');
  }

  /**
   * 获取“数据名”参数
   * @param {'data'|'list'|'obj'} type 类型
   * @returns
   */
  __dataNameOrObjMsg() {
    return this.formatMessage(
      `defaultValue.${this.enableNesting ? 'dataNameOrObj' : 'dataName'}`,
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
        // 按钮：显示嵌套功能
        {
          blockType: Scratch.BlockType.BUTTON,
          hideFromPalette: this.enableNesting,
          text: this.formatMessage('button.showNestingSupportedBlock'),
          onClick: () => {
            // if (confirm(this.formatMessage('confirm.enableNesting?'))) {
            this.enableNesting = true;
            this.storeExtConfig();
            this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
            // }
          },
        },
        // 按钮：隐藏嵌套功能
        {
          blockType: Scratch.BlockType.BUTTON,
          text: this.formatMessage('button.hideNestingSupportedBlock'),
          hideFromPalette: !this.enableNesting,
          onClick: () => {
            this.enableNesting = false;
            this.storeExtConfig();
            this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
          },
        },
        // `---${this.formatMessage('tag.tools')}`, // 工具
        // 获取某内容类型
        {
          opcode: 'typeOf',
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('block.typeOf'),
          hideFromPalette: !this.enableNesting,
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
          // hideFromPalette: !this.enableNesting,
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
          hideFromPalette: !this.enableNesting,
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              // defaultValue: this.formatMessage("defaultValue.JSON"),
              defaultValue:
                '[{"姓名":"小明","成绩":100},{"姓名":"小红","成绩":98}]',
            },
          },
        },
        // 返回一个空数组/对象
        {
          opcode: 'newEmptyObjOrArray',
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('block.newEmptyObjOrArray'),
          disableMonitor: true,
          hideFromPalette: !this.enableNesting,
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
        // 创建空列表
        {
          opcode: 'createOrClearList',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.createOrClearList'),
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.__dataNameOrObjMsg('list'),
            },
          },
        },
        // 向列表加入
        {
          opcode: 'addItemToList',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.addItemToList'),
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
            OP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'INSERT_OPTION',
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
              menu: 'ITEM_SET_OPTION',
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.thing'),
            },
          },
        },
        // 插入列表
        {
          opcode: 'insertItemIntoList',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('block.insertItemIntoList'),
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
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.thing'),
            },
            OP: {
              type: Scratch.ArgumentType.STRING,
              menu: 'INSERT_OPTION',
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
        `---${this.formatMessage('tag.object')}`, // 对象
        // 创建空对象
        {
          opcode: 'createOrClearObject',
          blockType: Scratch.BlockType.COMMAND,
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
            // OPTION: {
            //   type: Scratch.ArgumentType.STRING,
            //   menu: 'GET_OPTION',
            // },
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
      ],
      menus: {
        DATA_SET_OPTION: {
          items: '__dataSetOptionMenu',
        },
        ITEM_SET_OPTION: {
          items: '__itemSetOptionMenu',
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
      {
        text: this.formatMessage('menu.op.parse'), // 解析JSON
        value: 'parse',
      },
    ];
    if (this.enableNesting) {
      menu.push(
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
    return SafeObject.toSafeObject(value) ?? '';
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
      case 'parse':
        try {
          if (typeof VALUE !== 'string') return false;
          const obj = SafeObject.parse(VALUE);
          if (typeof obj !== 'object' || obj === null) return false;
          data[prop] = obj;
        } catch (e) {
          return false;
        }
        return true;
      case 'shallowCopy':
        if (typeof VALUE !== 'object' || VALUE === null) return false;
        if (Array.isArray(VALUE)) {
          data[prop] = [...VALUE];
          return true;
        }
        data[prop] = { ...VALUE };
        return true;

      case 'deepCopy':
        if (typeof VALUE !== 'object' || VALUE === null) return false;
        try {
          data[prop] = SafeObject.parse(SafeObject.stringify(VALUE));
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
   * @param {SCarg} OP 操作：set/ add/ parse/ shallowCopy/ deepCopy
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
   * @return {[] | {}}
   */
  newEmptyObjOrArray({ OPTION }) {
    return OPTION === '[]' ? new SafeObject([]) : new SafeObject();
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
    return SafeObject.stringify(VALUE);
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
    this.tempData.value[Cast.toString(NAME)] = [];
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
   * 向列表加入
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} VALUE
   * @param {SCarg} OP 操作：set/ parse/ shallowCopy/ deepCopy
   */
  addItemToList({ NAME_OR_OBJ, VALUE, OP }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return;
    this.__setDataByOption(list, list.length, OP, VALUE);
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

  /**
   * 插入到列表第x项前
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {number} IDX 第x项
   * @param {*} VALUE
   * @param {string} OP 操作：set/ parse/ shallowCopy/ deepCopy
   */
  insertItemIntoList({
    NAME_OR_OBJ, IDX, VALUE, OP,
  }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return;
    const idx = Cast.toNumber(IDX) - 1;
    if (idx < 0 || idx > list.length) return;
    list.splice(idx, 0, null);
    const success = this.__setDataByOption(list, idx, OP, VALUE);
    if (!success) {
      list.splice(idx, 1);
    }
  }

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
   * @param {string} OP 操作：set/ add/ parse/ shallowCopy/ deepCopy
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
