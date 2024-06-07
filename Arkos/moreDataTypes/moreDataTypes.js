/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import initExpandableBlocks from './use-extendable-block.js';
import SafeObject from './SafeObject.js';
import l10n from './l10n.js';
// import cover from './assets/cover.png';
// import icon from './assets/icon.svg';

const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxOC4yNSIgaGVpZ2h0PSIxOC4yNSIgdmlld0JveD0iMCwwLDE4LjI1LDE4LjI1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzEwLjg3NSwtMTcwLjg3NSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMzE5LjQzNzUsMTc0LjYxNzE5djJjMCwwLjM0NTE4IC0wLjI3OTgyLDAuNjI1IC0wLjYyNSwwLjYyNWgtNC4xODc1Yy0wLjM0NTE4LDAgLTAuNjI1LC0wLjI3OTgyIC0wLjYyNSwtMC42MjV2LTJjMCwtMC4zNDUxOCAwLjI3OTgyLC0wLjYyNSAwLjYyNSwtMC42MjVoNC4xODc1YzAuMzQ1MTgsMCAwLjYyNSwwLjI3OTgyIDAuNjI1LDAuNjI1ek0zMjYsMTc0LjYxNzE5djJjMCwwLjM0NTE4IC0wLjI3OTgyLDAuNjI1IC0wLjYyNSwwLjYyNWgtNC4xODc1Yy0wLjM0NTE4LDAgLTAuNjI1LC0wLjI3OTgyIC0wLjYyNSwtMC42MjV2LTJjMCwtMC4zNDUxOCAwLjI3OTgyLC0wLjYyNSAwLjYyNSwtMC42MjVoNC4xODc1YzAuMzQ1MTgsMCAwLjYyNSwwLjI3OTgyIDAuNjI1LDAuNjI1ek0zMTkuNDM3NSwxNzguOTkyMTl2MmMwLDAuMzQ1MTggLTAuMjc5ODIsMC42MjUgLTAuNjI1LDAuNjI1aC00LjE4NzVjLTAuMzQ1MTgsMCAtMC42MjUsLTAuMjc5ODIgLTAuNjI1LC0wLjYyNXYtMmMwLC0wLjM0NTE4IDAuMjc5ODIsLTAuNjI1IDAuNjI1LC0wLjYyNWg0LjE4NzVjMC4zNDUxOCwwIDAuNjI1LDAuMjc5ODIgMC42MjUsMC42MjV6TTMyNiwxNzl2MmMwLDAuMzQ1MTggLTAuMjc5ODIsMC42MjUgLTAuNjI1LDAuNjI1aC00LjE4NzVjLTAuMzQ1MTgsMCAtMC42MjUsLTAuMjc5ODIgLTAuNjI1LC0wLjYyNXYtMmMwLC0wLjM0NTE4IDAuMjc5ODIsLTAuNjI1IDAuNjI1LC0wLjYyNWg0LjE4NzVjMC4zNDUxOCwwIDAuNjI1LDAuMjc5ODIgMC42MjUsMC42MjV6TTMxOS40Mzc1LDE4My4zODI4MXYyYzAsMC4zNDUxOCAtMC4yNzk4MiwwLjYyNSAtMC42MjUsMC42MjVoLTQuMTg3NWMtMC4zNDUxOCwwIC0wLjYyNSwtMC4yNzk4MiAtMC42MjUsLTAuNjI1di0yYzAsLTAuMzQ1MTggMC4yNzk4MiwtMC42MjUgMC42MjUsLTAuNjI1aDQuMTg3NWMwLjM0NTE4LDAgMC42MjUsMC4yNzk4MiAwLjYyNSwwLjYyNXpNMzI2LDE4My4zODI4MXYyYzAsMC4zNDUxOCAtMC4yNzk4MiwwLjYyNSAtMC42MjUsMC42MjVoLTQuMTg3NWMtMC4zNDUxOCwwIC0wLjYyNSwtMC4yNzk4MiAtMC42MjUsLTAuNjI1di0yYzAsLTAuMzQ1MTggMC4yNzk4MiwtMC42MjUgMC42MjUsLTAuNjI1aDQuMTg3NWMwLjM0NTE4LDAgMC42MjUsMC4yNzk4MiAwLjYyNSwwLjYyNXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0zMTAuODc1LDE4OS4xMjV2LTE4LjI1aDE4LjI1djE4LjI1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PC9nPjwvZz48L3N2Zz4=';
const cover = 'https://m.ccw.site/user_projects_assets/40d3aa39d5101bd5df854cf3a079fa4a.png';
const { Scratch } = window;
const { Cast } = Scratch;

const extensionId = 'moreDataTypes';
// const extensionId = 'test';

/** 保存扩展配置的舞台注释的Id */
const EXT_CONFIG_COMMENT_ID = '_ArkosExtensionConfig_';

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字和文本，需要同时处理 */

/** @typedef {any} Util util 参数，暂时定为 any */

let showPrefix = true;
const hackFun = (runtime) => {
  /**
     * 在Gandi编辑器获取scratchBlocks与获取VM的方法
     * 来自凌（FurryR） https://github.com/FurryR/lpp-scratch 的LPP扩展
     */
  const hijack = (fn) => {
    const _orig = Function.prototype.apply;
    Function.prototype.apply = (thisArg) => thisArg;
    const result = fn();
    Function.prototype.apply = _orig;
    return result;
  };

  /**
       * 获取 ScratchBlocks 和 VM 实例
       * @returns {{ScratchBlocks, vm}}
       */
  const getScratchVM = (runtime) => {
    function getEvent(e) {
      return e instanceof Array ? e[e.length - 1] : e;
    }
    const { vm } = hijack(getEvent(runtime._events.QUESTION)).props;
    return vm;
  };
  const vm = getScratchVM(runtime);
  // 防止重复patch
  if (!runtime || vm.__ArkosADSPatched) return;
  vm.__ArkosADSPatched = true;
  // hackFun.hacked = true;

  // const { vm } = getScratchBlocksAndVM(runtime);

  // 序列化作品时，对变量中的SafeObject转为形如"<SafeObject> {...}"的字符串存入作品，用于下次解析
  const origToJSON = vm.toJSON;
  vm.toJSON = function toJSON(obj) {
    const orig = SafeObject.prototype.toString;
    const info = { nextId: 0, seen: new Map() };
    SafeObject.prototype.toString = function toString() {
      return `<SafeObject> ${SafeObject.stringifyWithRef(this.value, info)}`;
    };
    // 序列化作品
    const res = origToJSON.call(vm, obj);
    SafeObject.prototype.toString = orig;
    return res;
  };

  // By Nights: 支持XML的BlockType
  if (!Scratch.BlockType.XML) {
    Scratch.BlockType.XML = 'XML';
    const origFun = runtime._convertForScratchBlocks;
    runtime._convertForScratchBlocks = function (blockInfo, categoryInfo) {
      if (blockInfo.blockType === Scratch.BlockType.XML) {
        return {
          info: blockInfo,
          xml: blockInfo.xml,
        };
      }
      return origFun.call(this, blockInfo, categoryInfo);
    };
  }

  // 在返回值气泡/变量监视器中显示时，增加类型提示前缀
  const visualShow = (value) => {
    let v = value;
    if (showPrefix && value instanceof SafeObject) {
      // 仅修改提示内容，不影响实际值
      if (Array.isArray(value.value)) v = '(list)  ';
      else v = '(object)  ';
      v += SafeObject.stringify(value);
    }
    return v;
  };
  // 返回值气泡框内容
  const origVR = runtime.visualReport;
  runtime.visualReport = function (blockId, value) {
    return origVR.call(this, blockId, visualShow(value));
  };

  // 修改变量/列表monitor内容
  const origRUM = runtime.requestUpdateMonitor;
  runtime.requestUpdateMonitor = function (monitor) {
    // console.log(monitor);
    const entries = monitor?._root?.entries;
    if (entries) {
      const list = entries.find((l) => l[0] === 'value');
      if (list) {
        if (list[1] instanceof SafeObject) {
          list[1] = visualShow(list[1]);
        } else if (Array.isArray(list[1])) {
          list[1] = list[1].map((v) => visualShow(v));
        }
      }
    }
    return origRUM.call(this, monitor);
  };
};

class moreDataTypes {
  constructor(runtime) {
    if (!runtime) return;
    this.runtime = runtime;

    // 放到 runtime 里，或许可以和其他扩展联动
    runtime.SafeObject = SafeObject;

    hackFun(runtime);

    /** 临时数据
     * @type {SafeObject}
     */
    this.tempData = new SafeObject();

    /** 是否启用嵌套功能 */
    // this.enableNesting = true;

    /** 是否在访问a.a.a=1，或a.a.push(1)时，当a.a不存在，自动创建对象或列表 */
    this.autoCreate = false;
    showPrefix = true;
    this.showMoreListBlocks = false;
    this.showMoreObjBlocks = false;
    this.inputJSONAllowed = true;
    this.idxStartsFrom1 = true;
    this.caseSensitive = true;

    runtime.on('PROJECT_LOADED', () => {
      // 从作品注释读取扩展配置
      this.parseExtConfig();
      // 在作品保存时，SafeObject对象会转换为形如 '<SafeObject> {...}' 的字符串
      // 因此当作品加载时，尝试将作品的变量、列表中，形如 '<SafeObject> {...}' 的字符串重新转换为SafeObject对象
      SafeObject.parseAllVarInProject(runtime);
    });

    this.initFormatMessage(l10n);
    initExpandableBlocks(this, this.fm.bind(this));
  }

  /**
   * 获取“数据名”参数
   * @param {'data'|'list'|'obj'} type 类型
   * @returns
   */
  __dataNameOrObjMsg(type) {
    return this.fm(
      `defaultValue.${type}Name`,
      // 'defaultValue.dataName',
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
    this.fm = (id) => {
      const ID = `${extensionId}.${id}`;
      return _formatMessage({
        id: ID,
        default: id,
        description: ID,
      });
    };
  }

  getInfo() {
    const deprecatedBlocks = [
      /* ----------------------------隐藏的积木↓------------------------------------*/
      // 返回一个空数组/对象
      {
        opcode: 'newEmptyObjOrArray',
        blockType: Scratch.BlockType.REPORTER,
        text: this.fm('block.newEmptyObjOrArray'),
        disableMonitor: true,
        hideFromPalette: true, // !this.enableNesting,
        arguments: {
          OPTION: {
            type: Scratch.ArgumentType.STRING,
            // defaultValue: this.fm("defaultValue.JSON"),
            menu: 'EMPTY_LIST_OR_OBJ',
          },
        },
      },
      // 数据量
      {
        opcode: 'getCountOfTempData',
        blockType: Scratch.BlockType.REPORTER,
        hideFromPalette: true,
        disableMonitor: true,
        text: this.fm('block.getCountOfTempData'),
      },
      // 获取列表第一个xx的索引
      {
        opcode: 'getListItemIdxByItem',
        blockType: Scratch.BlockType.REPORTER,
        disableMonitor: true,
        text: this.fm('block.getListItemIdxByItem'),
        hideFromPalette: true,
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.__dataNameOrObjMsg('list'),
          },
          VALUE: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.thing'),
          },
        },
      },
      // 创建空对象
      {
        opcode: 'createOrClearObject',
        blockType: Scratch.BlockType.COMMAND,
        hideFromPalette: true, // 积木隐藏（这个积木的用法容易让人误会）
        text: this.fm('block.createOrClearObject'),
        arguments: {
          NAME: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.__dataNameOrObjMsg('data'),
          },
        },
      },
      // 创建空列表
      {
        opcode: 'createOrClearList',
        blockType: Scratch.BlockType.COMMAND,
        hideFromPalette: true, // 积木隐藏（这个积木的用法容易让人误会）
        text: this.fm('block.createOrClearList'),
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
        text: this.fm('block.addItemToList'),
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.__dataNameOrObjMsg('list'),
          },
          VALUE: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.thing'),
          },
        },
      },
      // 设置列表
      {
        opcode: 'setItemOfList',
        hideFromPalette: true,
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.setItemOfList'),
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
            defaultValue: this.fm('defaultValue.thing'),
          },
        },
      },
      // 删除列表XX项
      {
        opcode: 'delItemOfList',
        blockType: Scratch.BlockType.COMMAND,
        hideFromPalette: true,
        text: this.fm('block.delItemOfList'),
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
      // '---',
      // 获取列表XX项
      {
        opcode: 'getItemOfList',
        blockType: Scratch.BlockType.REPORTER,
        hideFromPalette: true,
        disableMonitor: true,
        text: this.fm('block.getItemOfList'),
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
      // 列表长度
      {
        opcode: 'lengthOfList',
        blockType: Scratch.BlockType.REPORTER,
        hideFromPalette: true,
        disableMonitor: true,
        text: this.fm('block.lengthOfList'),
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
        hideFromPalette: true,
        text: this.fm('block.ifListItemExist'),
        // isDynamic: true,
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.__dataNameOrObjMsg('list'),
          },
          VALUE: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.thing'),
          },
        },
      },
    ];
    const listBlocks = [
      `---${this.fm('tag.list')}`, // 列表
      // {
      //   opcode: 'setTempData',
      //   blockType: Scratch.BlockType.XML,
      //   xml: `<block type="${extensionId}_setTempData">`
      //       + '<value name="NAME">'
      //           + '<shadow type="text">'
      //               + `<field name="TEXT">${this.__dataNameOrObjMsg('list')}</field>`
      //           + '</shadow>'
      //       + '</value>'
      //       + '<value name="OP">'
      //           + `<shadow type="${extensionId}_DATA_SET_OPTION"></shadow>`
      //       + '</value>'
      //       + '<value name="VALUE">'
      //           + '<shadow type="text">'
      //               + '<field name="TEXT">100</field>'
      //           + '</shadow>'
      //           + `<block type="${extensionId}_getNewList"></block>`
      //       + '</value>'
      //   + '</block>',
      // },
      // '---',
      // 向列表加入
      {
        opcode: 'addItemToList2',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.addItemToList2'),
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
            defaultValue: this.fm('defaultValue.thing'),
          },
        },
        enableDynamicArgs: true,
        dynamicArgsInfo: {
          type: 'getProp',
          defaultValues: 'block.defaultProps',
          afterArg: 'NAME_OR_OBJ',
          // dynamicArgTypes: ['s', 'n'],
        },
      },
      // // 删除对象名为xx的内容
      // {
      //   opcode: 'delPropOfObject',
      //   blockType: Scratch.BlockType.COMMAND,
      //   text: this.fm('block.delPropOfObject'),
      //   // isDynamic: true,
      //   arguments: {
      //     NAME_OR_OBJ: {
      //       type: Scratch.ArgumentType.STRING,
      //       defaultValue: this.__dataNameOrObjMsg('list'),
      //     },
      //     PROP: {
      //       type: Scratch.ArgumentType.STRING,
      //       defaultValue: '1',
      //     },
      //   },
      // },
      // 向列表插入
      {
        opcode: 'insertItemIntoList',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.insertItemIntoList'),
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
            defaultValue: this.fm('defaultValue.thing'),
          },
        },
      },
      // // 设置列表
      // {
      //   opcode: 'setPropOfObject',
      //   blockType: Scratch.BlockType.COMMAND,
      //   text: this.fm('block.setPropOfObject'),
      //   // isDynamic: true,
      //   arguments: {
      //     NAME_OR_OBJ: {
      //       type: Scratch.ArgumentType.STRING,
      //       defaultValue: this.__dataNameOrObjMsg('list'),
      //     },
      //     PROP: {
      //       type: Scratch.ArgumentType.STRING,
      //       defaultValue: '1',
      //     },
      //     OP: {
      //       type: Scratch.ArgumentType.STRING,
      //       menu: 'ITEM_SET_OPTION',
      //     },
      //     VALUE: {
      //       type: Scratch.ArgumentType.STRING,
      //       defaultValue: this.fm('defaultValue.thing'),
      //     },
      //   },
      // },
      // // 获取对象名为XX的内容
      // {
      //   opcode: 'getPropOfObject',
      //   blockType: Scratch.BlockType.REPORTER,
      //   disableMonitor: true,
      //   text: this.fm('block.getPropOfObject'),
      //   arguments: {
      //     NAME_OR_OBJ: {
      //       type: Scratch.ArgumentType.STRING,
      //       defaultValue: this.__dataNameOrObjMsg('list'),
      //     },
      //     PROP: {
      //       type: Scratch.ArgumentType.STRING,
      //       defaultValue: '1',
      //     },
      //   },
      // },
      {
        opcode: 'indexOf',
        blockType: Scratch.BlockType.REPORTER,
        disableMonitor: true,
        text: this.fm('block.indexOf'),
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.__dataNameOrObjMsg('list'),
          },
          VALUE: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.thing'),
          },
          N: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: -1,
          },
        },
      },
      // // 对象长度
      // {
      //   opcode: 'sizeOfObject',
      //   blockType: Scratch.BlockType.REPORTER,
      //   disableMonitor: true,
      //   text: this.fm('block.sizeOfObject'),
      //   // isDynamic: true,
      //   arguments: {
      //     NAME_OR_OBJ: {
      //       type: Scratch.ArgumentType.STRING,
      //       defaultValue: this.__dataNameOrObjMsg('list'),
      //     },
      //   },
      // },
      // // 对象属性是否存在
      // {
      //   opcode: 'ifObjectPropExist',
      //   blockType: Scratch.BlockType.BOOLEAN,
      //   text: this.fm('block.ifObjectPropExist'),
      //   // isDynamic: true,
      //   arguments: {
      //     NAME_OR_OBJ: {
      //       type: Scratch.ArgumentType.STRING,
      //       defaultValue: this.__dataNameOrObjMsg('list'),
      //     },
      //     PROP: {
      //       type: Scratch.ArgumentType.STRING,
      //       defaultValue: this.fm('defaultValue.thing'),
      //     },
      //   },
      // },
      // {
      //   blockType: Scratch.BlockType.LABEL,
      //   text: this.fm('tip'),
      // },
      {
        blockType: Scratch.BlockType.BUTTON,
        text: this.showMoreListBlocks
          ? this.fm('button.hideMoreList')
          : this.fm('button.showMoreList'),
        onClick: () => {
          this.showMoreListBlocks = !this.showMoreListBlocks;
          this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
          // this.storeExtConfig();
        },
      },
      // 向列表加入(返回值版)
      {
        opcode: 'addItemToListAndReturn',
        blockType: Scratch.BlockType.REPORTER,
        hideFromPalette: !this.showMoreListBlocks,
        text: this.fm('block.addItemToListAndReturn'),
        arguments: {
          OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '[1,2]', // this.__dataNameOrObjMsg('list'),
          },
          OP: {
            type: Scratch.ArgumentType.STRING,
            menu: 'LIST_ADD_OR_REMOVE',
          },
          VALUE: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.thing'),
          },
        },
      },
      // 从列表弹出
      {
        opcode: 'pop',
        blockType: Scratch.BlockType.REPORTER,
        text: this.fm('block.pop'),
        hideFromPalette: !this.showMoreListBlocks,
        arguments: {
          LIST: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '[1,2,3]', // this.__dataNameOrObjMsg('list'),
          },
          IDX: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: -1,
          },
        },
      },
      // 合并列表
      {
        opcode: 'mergeList',
        blockType: Scratch.BlockType.REPORTER,
        hideFromPalette: !this.showMoreListBlocks,
        text: this.fm('block.mergeList'),
        arguments: {
          OP: {
            type: Scratch.ArgumentType.STRING,
            menu: 'OP_LISTS',
          },
          LIST1: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '[1,2,3]', // `${this.__dataNameOrObjMsg('list')}1`,
          },
          LIST2: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '[2,3,4]', // `${this.__dataNameOrObjMsg('list')}2`,
          },
        },
      },
      // slice
      {
        opcode: 'slice',
        blockType: Scratch.BlockType.REPORTER,
        hideFromPalette: !this.showMoreListBlocks,
        text: this.fm('block.slice'),
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '[1,2,3,4]', // this.__dataNameOrObjMsg('list'),
          },
          A: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '1',
          },
          B: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '3',
          },
        },
      },
      // split
      {
        opcode: 'split',
        blockType: Scratch.BlockType.REPORTER,
        hideFromPalette: !this.showMoreListBlocks,
        text: this.fm('block.split'),
        arguments: {
          CH: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: ',',
          },
          STR: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'a,b,c,d',
          },
        },
      },
      // join
      {
        opcode: 'join',
        blockType: Scratch.BlockType.REPORTER,
        hideFromPalette: !this.showMoreListBlocks,
        text: this.fm('block.join'),
        arguments: {
          CH: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: ',',
          },
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '["a","b","c","d"]', // this.__dataNameOrObjMsg('list'),
          },
        },
      },
      // 列表反转、排序等操作
      {
        opcode: 'opList',
        blockType: Scratch.BlockType.COMMAND,
        hideFromPalette: !this.showMoreListBlocks,
        text: this.fm('block.opList'),
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
        hideFromPalette: !this.showMoreListBlocks,
        text: this.fm('block.sortListByProp'),
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '[{"name":"a","score":100}, {"name":"b","score":90}]', // this.__dataNameOrObjMsg('list'),
          },
          PROP: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'score', // this.fm('defaultValue.prop'),
          },
          OP: {
            type: Scratch.ArgumentType.STRING,
            menu: 'SORT_ORDER',
          },
        },
      },
      // ...(this.showMoreListBlocks ? [`---${this.fm('tag.ScratchList')}`] : []), // 原版列表操作
      // 获取原版列表
      {
        opcode: 'getScratchList',
        blockType: Scratch.BlockType.REPORTER,
        disableMonitor: true,
        hideFromPalette: !this.showMoreListBlocks,
        text: this.fm('block.getScratchList'),
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
        text: this.fm('block.setScratchList'),
        hideFromPalette: !this.showMoreListBlocks,
        arguments: {
          NAME: {
            type: Scratch.ArgumentType.STRING,
            menu: 'LIST_MENU',
          },
          OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '[1,2,3]', // this.__dataNameOrObjMsg('list'),
          },
        },
      },
    ];
    const objBlocks = [
      `---${this.fm('tag.complexData')}`,
      // 返回一个空对象
      {
        opcode: 'getNewObject',
        disableMonitor: true,
        blockType: Scratch.BlockType.REPORTER,
        text: this.fm('block.getNewObject'),
        enableDynamicArgs: true,
        dynamicArgsInfo: {
          type: 'getObj',
          emptyText: 'block.getNewObject',
          text: 'block.createObj',
          joinCh: ',',
          joinCh2: '=',
          defaultValues: 'block.defaultObj',
        },
      },
      // 返回一个空列表
      {
        opcode: 'getNewList',
        blockType: Scratch.BlockType.REPORTER,
        disableMonitor: true,
        text: this.fm('block.getNewList'),
        enableDynamicArgs: true,
        dynamicArgsInfo: {
          emptyText: 'block.getNewList',
          text: 'block.createList',
          joinCh: ',',
          defaultValues: 'block.defaultList',
        },
      },
      // 返回一个N个NUM的列表
      {
        opcode: 'createListWithLength',
        blockType: Scratch.BlockType.REPORTER,
        disableMonitor: true,
        text: this.fm('block.createListWithLength'),
        arguments: {
          N: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 5,
          },
          VALUE: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '0',
          },
        },
        enableDynamicArgs: true,
        dynamicArgsInfo: {
          type: 'ndList',
          afterArg: 'N',
          joinCh: 'x',
          dynamicArgTypes: ['n'],
        },
      },
      // {
      //   opcode: 'setTempData',
      //   blockType: Scratch.BlockType.XML,
      //   xml: `<block type="${extensionId}_setTempData">`
      //       + '<value name="NAME">'
      //           + '<shadow type="text">'
      //               + `<field name="TEXT">${this.__dataNameOrObjMsg('obj')}</field>`
      //           + '</shadow>'
      //       + '</value>'
      //       + '<value name="OP">'
      //           + `<shadow type="${extensionId}_DATA_SET_OPTION"></shadow>`
      //       + '</value>'
      //       + '<value name="VALUE">'
      //           + '<shadow type="text">'
      //               + '<field name="TEXT">↑塞入上方积木</field>'
      //           + '</shadow>'
      //           // + `<block type="${extensionId}_getNewObject"></block>`
      //       + '</value>'
      //   + '</block>',
      // },
      '---',
      // 设置对象
      {
        opcode: 'setPropOfObject',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.setPropOfObject'),
        // isDynamic: true,
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.__dataNameOrObjMsg('obj'),
          },
          PROP: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.prop'),
          },
          OP: {
            type: Scratch.ArgumentType.STRING,
            menu: 'ITEM_SET_OPTION',
          },
          VALUE: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.thing'),
          },
        },
        enableDynamicArgs: true,
        dynamicArgsInfo: {
          type: 'getProp',
          defaultValues: 'block.defaultProps',
          afterArg: 'PROP',
          // dynamicArgTypes: ['s', 'n'],
        },
      },
      // 获取对象名为XX的内容
      {
        opcode: 'getPropOfObject',
        blockType: Scratch.BlockType.REPORTER,
        disableMonitor: true,
        text: this.fm('block.getPropOfObject'),
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.__dataNameOrObjMsg('obj'),
          },
          PROP: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.prop'),
          },
        },
        enableDynamicArgs: true,
        dynamicArgsInfo: {
          type: 'getProp',
          defaultValues: 'block.defaultProps',
          afterArg: 'PROP',
          // dynamicArgTypes: ['s', 'n'],
        },
      },
      // 删除对象名为xx的内容
      {
        opcode: 'delPropOfObject',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.delPropOfObject'),
        // isDynamic: true,
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.__dataNameOrObjMsg('obj'),
          },
          PROP: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.prop'),
          },
        },
      },
      // 对象长度
      {
        opcode: 'sizeOfObject',
        blockType: Scratch.BlockType.REPORTER,
        disableMonitor: true,
        text: this.fm('block.sizeOfObject'),
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
        text: this.fm('block.ifObjectPropExist'),
        // isDynamic: true,
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.__dataNameOrObjMsg('obj'),
          },
          PROP: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.prop'),
          },
        },
      },
      {
        blockType: Scratch.BlockType.BUTTON,
        text: this.showMoreObjBlocks
          ? this.fm('button.hideMoreObj')
          : this.fm('button.showMoreObj'),
        onClick: () => {
          this.showMoreObjBlocks = !this.showMoreObjBlocks;
          this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
          // this.storeExtConfig();
        },
      },
      // '---',
      // 设置对象(并返回)
      {
        opcode: 'setPropOfObjectAndReturn',
        blockType: Scratch.BlockType.REPORTER,
        text: this.fm('block.setPropOfObjectAndReturn'),
        hideFromPalette: !this.showMoreObjBlocks,
        arguments: {
          OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '{"a":1}', // this.__dataNameOrObjMsg('obj'),
          },
          PROP: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.prop'),
          },
          OP: {
            type: Scratch.ArgumentType.STRING,
            menu: 'ITEM_SET_OPTION',
          },
          VALUE: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.thing'),
          },
        },
      },
      // 根据键值创建列表
      {
        opcode: 'createObjFromKeyValue',
        blockType: Scratch.BlockType.REPORTER,
        text: this.fm('block.createObjFromKeyValue'),
        hideFromPalette: !this.showMoreObjBlocks,
        arguments: {
          KEYS: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '["a","b"]',
          },
          VALUES: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '[1,2]',
          },
        },
      },
      // 获取对象所有键
      {
        opcode: 'getAllProperties',
        blockType: Scratch.BlockType.REPORTER,
        hideFromPalette: !this.showMoreObjBlocks,
        disableMonitor: true,
        text: this.fm('block.getAllProperties'),
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '{"a":1,"b":2}', // this.__dataNameOrObjMsg('obj'),
          },
          OPTION: {
            type: Scratch.ArgumentType.STRING,
            menu: 'KEYS_OR_VALUES_OR_ENTRIES',
          },
        },
      },
      // 获取对象键对应值
      {
        opcode: 'getSubObject',
        blockType: Scratch.BlockType.REPORTER,
        hideFromPalette: !this.showMoreObjBlocks,
        disableMonitor: true,
        text: this.fm('block.getSubObject'),
        arguments: {
          OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '{"a":1,"b":2,"c":3}',
          },
          TYPE: {
            type: Scratch.ArgumentType.STRING,
            menu: 'VALUES_OR_OBJ',
          },
          KEYS: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '["a","b"]',
          },
        },
      },
      // 清空
      {
        opcode: 'clear',
        blockType: Scratch.BlockType.COMMAND,
        hideFromPalette: !this.showMoreObjBlocks,
        text: this.fm('block.clear'),
        arguments: {
          NAME: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.__dataNameOrObjMsg('obj'),
          },
        },
      },
      // 合并对象
      {
        opcode: 'mergeObject',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.mergeObject'),
        hideFromPalette: !this.showMoreObjBlocks,
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.__dataNameOrObjMsg('obj'),
          },
          OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: '{"key":"value"}', // `${this.__dataNameOrObjMsg('obj')}2`,
          },
        },
      },
      // ...(this.showMoreObjBlocks ? [`---${this.fm('tag.object')}`] : []),
      // 获取对象第n项的xx
      {
        opcode: 'getPropOfObjectByIdx',
        blockType: Scratch.BlockType.REPORTER,
        disableMonitor: true,
        text: this.fm('block.getPropOfObjectByIdx'),
        hideFromPalette: !this.showMoreObjBlocks,
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
      // 设置对象原型
      {
        opcode: 'setProtoOfObj',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.setProtoOfObj'),
        hideFromPalette: !this.showMoreObjBlocks,
        arguments: {
          NAME_OR_OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.__dataNameOrObjMsg('obj'),
          },
          OBJ: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: `${this.__dataNameOrObjMsg('obj')}2`,
          },
        },
      },
    ];
    const configBlocks = [
      `---${this.fm('tag.config')}`, // 设置
      {
        opcode: 'setAutoCreate',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.setAutoCreate'),
        arguments: {
          ON: {
            type: Scratch.ArgumentType.STRING,
            menu: 'ON_OFF',
            defaultValue: this.autoCreate ? 'on' : 'off',
          },
        },
      },
      {
        opcode: 'setShowPrefix',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.setShowPrefix'),
        arguments: {
          ON: {
            type: Scratch.ArgumentType.STRING,
            menu: 'ON_OFF',
            defaultValue: showPrefix ? 'on' : 'off',
          },
        },
      },
      {
        opcode: 'allowInputJSON',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.allowInputJSON'),
        arguments: {
          ON: {
            type: Scratch.ArgumentType.STRING,
            menu: 'ON_OFF',
            defaultValue: this.inputJSONAllowed ? 'on' : 'off',
          },
        },
      },
      {
        opcode: 'indexStart',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.indexStart'),
        arguments: {
          IDX: {
            type: Scratch.ArgumentType.STRING,
            menu: '1OR0',
            defaultValue: this.idxStartsFrom1 ? '1' : '0',
          },
        },
      },
      {
        opcode: 'setCase',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.setCase'),
        arguments: {
          ON: {
            type: Scratch.ArgumentType.STRING,
            menu: 'ON_OFF',
            defaultValue: this.caseSensitive ? 'on' : 'off',
          },
        },
      },
    ];
    const blocks = [
      `---${this.fm('tag.tools')}`, // 工具
      // 获取某内容类型
      {
        opcode: 'typeOf',
        blockType: Scratch.BlockType.REPORTER,
        text: this.fm('block.typeOf'),
        arguments: {
          VALUE: {
            type: null,
            // defaultValue: 'foo',
          },
        },
      },
      // 判断类型 checkType TYPE_MENU
      {
        opcode: 'checkType',
        blockType: Scratch.BlockType.BOOLEAN,
        text: this.fm('block.checkType'),
        arguments: {
          VALUE: {
            type: null,
          },
          TYPE: {
            type: Scratch.ArgumentType.STRING,
            menu: 'TYPE_MENU',
          },
        },
      },
      // ===
      {
        opcode: 'strictlyEqual',
        blockType: Scratch.BlockType.BOOLEAN,
        text: this.fm('block.strictlyEqual'),
        arguments: {
          A: {
            type: null,
          },
          B: {
            type: null,
          },
        },
      },
      // 由JSON返回对象
      {
        opcode: 'getObjFromJson',
        blockType: Scratch.BlockType.REPORTER,
        text: this.fm('block.getObjFromJson'),
        arguments: {
          VALUE: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: `{${this.fm('defaultValue.JSON')}}`,
          },
        },
      },
      // 获取某内容JSON
      {
        opcode: 'JSONOf',
        blockType: Scratch.BlockType.REPORTER,
        text: this.fm('block.JSONOf'),
        arguments: {
          VALUE: {
            type: null,
            // defaultValue: 'foo',
          },
        },
      },
      // 复制对象
      {
        opcode: 'copyFrom',
        blockType: Scratch.BlockType.REPORTER,
        text: this.fm('block.copyFrom'),
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
      `---${this.fm('tag.tempVar')}`, // 临时变量
      // 清空所有数据
      {
        opcode: 'deleteAllTempData',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.deleteAllTempData'),
      },
      // 已有数据名称
      {
        opcode: 'listAllData',
        blockType: Scratch.BlockType.REPORTER,
        disableMonitor: true,
        text: this.fm('block.listAllData'),
      },
      // 删除数据
      {
        opcode: 'delTempData',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.delTempData'),
        arguments: {
          NAME: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.dataName'),
          },
        },
      },
      // 判断数据存在
      {
        opcode: 'ifTempDataExist',
        blockType: Scratch.BlockType.BOOLEAN,
        text: this.fm('block.ifTempDataExist'),
        arguments: {
          NAME: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.dataName'),
          },
        },
      },
      '---',
      // `---${this.fm('tag.var')}`, // 工具
      // 设置数据
      {
        opcode: 'setTempData',
        blockType: Scratch.BlockType.COMMAND,
        text: this.fm('block.setTempData'),
        arguments: {
          NAME: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.dataName'),
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
        text: this.fm('block.getTempData'),
        arguments: {
          NAME: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: this.fm('defaultValue.dataName'),
          },
          // OPTION: {
          //   type: Scratch.ArgumentType.STRING,
          //   menu: 'DATA_GET_OPTION',
          // },
        },
      },
      ...objBlocks,
      ...listBlocks,
      ...configBlocks,
      ...deprecatedBlocks,
    ];
    blocks.forEach((block) => {
      if (typeof block === 'object') {
        block.tooltip = this.fm(`tooltip.${block.opcode}`);
      }
      // 添加小icon
      if (
        [
          Scratch.BlockType.COMMAND,
          Scratch.BlockType.REPORTER,
          Scratch.BlockType.BOOLEAN,
        ].includes(block.blockType)
      ) {
        block.text = `[IMG]${block.text}`;
        if (!block.arguments) block.arguments = {};
        block.arguments.IMG = {
          type: Scratch.ArgumentType.IMAGE,
          dataURI: icon,
        };
      }
    });
    return {
      id: extensionId, // 拓展id
      name: this.fm('extensionName'),
      docsURI: this.fm('docsURI'),
      color1: '#DA4D16',
      menuIconURI: icon,
      // blockIconURI: icon,
      blocks,
      menus: {
        '1OR0': {
          acceptReporters: true,
          items: ['1', '0'],
        },
        ON_OFF: {
          acceptReporters: true,
          items: [
            {
              text: this.fm('menu.on'),
              value: 'on',
            },
            {
              text: this.fm('menu.off'),
              value: 'off',
            },
          ],
        },
        TYPE_MENU: [
          {
            text: this.fm('menu.list'),
            value: 'list',
          },
          {
            text: this.fm('menu.object'),
            value: 'obj',
          },
          {
            text: this.fm('menu.listOrObj'),
            value: 'lOrO',
          },
        ],
        LIST_ADD_OR_REMOVE: [
          {
            text: this.fm('menu.addTo'),
            value: 'add',
          },
          {
            text: this.fm('menu.removeFrom'),
            value: 'remove',
          },
          {
            text: this.fm('menu.ifNotExistsaddTo'),
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
            text: this.fm('menu.shuffle'),
            value: 'shuf',
          },
          {
            text: this.fm('menu.reverse'),
            value: 'rev',
          },
          {
            text: this.fm('menu.ascSort'),
            value: 'asc',
          },
          {
            text: this.fm('menu.descSort'),
            value: 'desc',
          },
          {
            text: this.fm('menu.removeDuplicates'),
            value: 'dedup',
          },
        ],
        OP_LISTS: [
          {
            text: this.fm('menu.merge'),
            value: 'merge',
          },
          {
            text: this.fm('menu.union'),
            value: 'union',
          },
          {
            text: this.fm('menu.intersection'),
            value: 'intersec',
          },
          {
            text: this.fm('menu.difference'),
            value: 'diff',
          },
        ],
        SORT_ORDER: [
          {
            text: this.fm('menu.ascSort'),
            value: 'asc',
          },
          {
            text: this.fm('menu.descSort'),
            value: 'desc',
          },
        ],
        VALUES_OR_OBJ: [
          {
            text: this.fm('menu.subObj'),
            value: 'obj',
          },
          {
            text: this.fm('menu.values'),
            value: 'v',
          },
        ],
        KEYS_OR_VALUES_OR_ENTRIES: [
          {
            text: this.fm('menu.keys'),
            value: 'keys',
          },
          {
            text: this.fm('menu.values'),
            value: 'values',
          },
          {
            text: this.fm('menu.entries'),
            value: 'entries',
          },
        ],
        COPY_MENU: [
          {
            text: this.fm('menu.shallow'), // 空列表
            value: 'shallow',
          },
          {
            text: this.fm('menu.deep'), // 空对象
            value: 'deep',
          },
        ],
        EMPTY_LIST_OR_OBJ: [
          {
            text: this.fm('menu.emptyList'), // 空列表
            value: '[]',
          },
          {
            text: this.fm('menu.emptyObj'), // 空对象
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
    let options = this.getAllExtConfig();
    if (!options) return;
    options = options[extensionId];
    if (!options) return;
    if (options.autoCreate !== undefined) this.autoCreate = Cast.toBoolean(options.autoCreate);
    if (options.showPrefix !== undefined) showPrefix = Cast.toBoolean(options.showPrefix);
    if (options.caseSensitive !== undefined) {
      this.caseSensitive = Cast.toBoolean(options.caseSensitive);
    }
    if (options.allowInputJSON !== undefined) {
      this.inputJSONAllowed = Cast.toBoolean(options.allowInputJSON);
    }
    if (options.idxFrom1 !== undefined) {
      this.idxStartsFrom1 = Cast.toBoolean(options.idxFrom1);
    }
    // if (options.moreObj !== undefined) {
    //   this.showMoreObjBlocks = Cast.toBoolean(options.moreObj);
    //   this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
    // }
    // if (options.moreList !== undefined) {
    //   this.showMoreListBlocks = Cast.toBoolean(options.moreList);
    //   this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
    // }
  }

  /**
   * 生成当前扩展的配置
   * @returns {object} 配置信息
   */
  generateExtConfig() {
    const options = {};
    options.autoCreate = this.autoCreate;
    options.showPrefix = showPrefix;
    // options.moreObj = this.showMoreObjBlocks;
    // options.moreList = this.showMoreListBlocks;
    options.allowInputJSON = this.inputJSONAllowed;
    options.idxFrom1 = this.idxStartsFrom1;
    options.caseSensitive = this.caseSensitive;
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
      const text = `${this.fm('config.tip')}\n${JSON.stringify(config)}`;
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
        text: this.fm('menu.op.set'), // 设为
        value: 'set',
      },
      {
        text: this.fm('menu.op.add'), // 增加
        value: 'add',
      },
      // {
      //   text: this.fm('menu.op.parse'), // 解析JSON
      //   value: 'parse',
      // },
    ];
    // if (this.enableNesting) {
    //   menu.push(
    //     {
    //       text: this.fm('menu.op.shallowCopy'), // 浅拷贝
    //       value: 'shallowCopy',
    //     },
    //     {
    //       text: this.fm('menu.op.deepCopy'), // 深拷贝
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
        text: this.fm('menu.op.set'), // 设为
        value: 'set',
      },
      {
        text: this.fm('menu.op.add'), // 增加
        value: 'add',
      },
      {
        text: this.fm('menu.op.insert'), // 增加
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
        text: this.fm('menu.op.set'), // 设为
        value: 'set',
      },
      {
        text: this.fm('menu.op.add'), // 增加
        value: 'add',
      },
    ];
    // if (this.enableNesting) {
    //   menu.push(
    //     {
    //       text: this.fm('menu.op.parse_warning'), // 解析JSON
    //       value: 'parse',
    //     },
    //     {
    //       text: this.fm('menu.op.shallowCopy'), // 浅拷贝
    //       value: 'shallowCopy',
    //     },
    //     {
    //       text: this.fm('menu.op.deepCopy'), // 深拷贝
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
        text: this.fm('menu.value'), // 设为
        value: 'set',
      },
    ];
    // if (this.enableNesting) {
    //   menu.push(
    //     {
    //       text: this.fm('menu.op.parse_warning'), // 解析JSON
    //       value: 'parse',
    //     },
    //     {
    //       text: this.fm('menu.op.shallowCopy'), // 浅拷贝
    //       value: 'shallowCopy',
    //     },
    //     {
    //       text: this.fm('menu.op.deepCopy'), // 深拷贝
    //       value: 'deepCopy',
    //     },
    //   );
    // }
    return menu;
  }

  /**
   * 返回一个读数据操作的动态菜单（值|运行返回对象 / 返回JSON）
   * @returns {Array} 菜单列表
   */
  __dataGetOptionMenu() {
    const menu = [
      {
        text: this.fm('menu.value'), // 值
        value: 'value',
      },
    ];
    // if (this.enableNesting) {
    //   menu.push({
    //     text: this.fm('menu.getOption.json'), // 返回JSON
    //     value: 'json',
    //   });
    // }
    return menu;
  }

  /**
   * 返回一个读数据操作的动态菜单（值|运行返回对象 / 返回JSON）
   * @returns {Array} 菜单列表
   */
  __getOptionMenu() {
    const menu = [
      {
        text: this.fm('menu.value'), // 值
        value: 'value',
      },
    ];
    // if (this.enableNesting) {
    //   menu.push({
    //     text: this.fm('menu.getOption.json'), // 返回JSON
    //     value: 'json',
    //   });
    // }
    return menu;
  }

  /**
   * 返回一个读对象操作的动态菜单（名称/ 内容|允许返回对象 / 返回JSON）
   * @returns {Array} 菜单列表
   */
  __objectGetOptionMenu() {
    const menu = [
      {
        text: this.fm('menu.conInfo.name'), // 名称
        value: 'name',
      },
      {
        text: this.fm('menu.conInfo.value'), // 内容值
        value: 'value',
      },
    ];
    // if (this.enableNesting) {
    //   menu.push({
    //     text: this.fm('menu.conInfo.json'), // 返回JSON
    //     value: 'json',
    //   });
    // }
    return menu;
  }

  // 变量积木

  /**
   * 任意内容转Sc允许的值(开启嵌套时允许返回对象，否则对象返回JSON)
   * @param {*} value
   * @returns {string|number|object}
   */
  anythingToSCArg(value) {
    return SafeObject.toSafeObject(value ?? '');
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
   * 列出所有已存在的变量（逗号隔开）
   * @returns {number}
   */
  listAllData() {
    return Object.keys(this.tempData.value).join(',');
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
  __setDataByOption(obj, prop, OP, VALUE) {
    switch (OP) {
      case 'set':
        obj[prop] = VALUE;
        return true;
      case 'add':
        obj[prop] = Cast.toNumber(obj[prop]) + Cast.toNumber(VALUE);
        return true;
      case 'insert': {
        const list = obj;
        const idx = prop;
        list.splice(idx, 0, VALUE);
        return true;
      }
      case 'parse': {
        try {
          if (typeof VALUE !== 'string') return false;
          const parsed = SafeObject.simpleParse(VALUE);
          if (typeof parsed !== 'object' || parsed === null) return false;
          obj[prop] = parsed;
        } catch (e) {
          return false;
        }
        return true;
      }
      case 'shallowCopy': {
        const value = SafeObject.getActualObject(VALUE);
        if (typeof value !== 'object' || value === null) return false;
        if (Array.isArray(value)) {
          obj[prop] = new SafeObject([...value]);
          return true;
        }
        obj[prop] = new SafeObject({ ...value });
        return true;
      }
      case 'deepCopy':
        if (typeof VALUE !== 'object' || VALUE === null) return false;
        try {
          obj[prop] = SafeObject.deepCopy(VALUE);
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
      const obj = SafeObject.simpleParse(VALUE);
      // if (typeof obj !== "object" || obj === null) return '';
      return this.anythingToSCArg(obj);
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
   * 使用了 Nights 动态参数
   * 创建列表[arg1, arg2, ...]
   * @return {SafeObject}
   */
  getNewList(args) {
    const list = [];
    for (let i = 1; ; i += 1) {
      const value = args[`DYNAMIC_ARGS${i}`];
      if (value === undefined) return new SafeObject(list);
      list.push(value);
    }
  }

  /**
   * 使用了 Nights 动态参数
   * 创建对象{key1:value1, key2...}
   * @return {SafeObject}
   */
  getNewObject(args) {
    // console.log(this.runtime._editingTarget.blocks);
    const obj = Object.create(null);
    for (let i = 1; ; i += 2) {
      const key = args[`DYNAMIC_ARGS${i}`];
      if (key === undefined) return new SafeObject(obj);
      const value = args[`DYNAMIC_ARGS${i + 1}`];
      obj[key] = value;
    }
  }

  /**
   * 创建包含 N 个 VALUE 的列表
   * @param {*} N 数量
   * @param {*} VALUE 内容
   * @return {SafeObject}
   */
  createListWithLength(args) {
    const arg = [];
    arg.push(Cast.toNumber(args.N));
    for (let i = 1; ;i += 1) {
      const a = args[`DYNAMIC_ARGS${i}`];
      if (a === undefined) break;
      arg.push(a);
    }
    let res;

    // 最内层
    // 对于复杂类型，深拷贝复制
    if (typeof args.VALUE === 'object' && args.VALUE !== null) {
      res = Array.from({ length: arg.pop() }, () => SafeObject.deepCopy(args.VALUE));
    } else {
      // 普通类型
      res = Array.from({ length: arg.pop() }, () => args.VALUE);
    }

    while (arg.length) {
      const arr = res;
      res = Array.from({ length: arg.pop() }, () => SafeObject.deepCopy(arr));
    }
    return new SafeObject(res);
  }

  setAutoCreate({ ON }) {
    this.autoCreate = String(ON).toLowerCase() === 'on';
    this.storeExtConfig();
  }

  setShowPrefix({ ON }) {
    showPrefix = String(ON).toLowerCase() === 'on';
    this.storeExtConfig();
  }

  allowInputJSON({ ON }) {
    this.inputJSONAllowed = String(ON).toLowerCase() === 'on';
    this.storeExtConfig();
  }

  indexStart({ IDX }) {
    this.idxStartsFrom1 = Number(IDX) === 1;
    this.storeExtConfig();
  }

  setCase({ ON }) {
    this.caseSensitive = String(ON).toLowerCase() === 'on';
    this.storeExtConfig();
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
   * 判断xx的类型
   * @param {SCarg} VALUE
   * @param {'list'|'obj'|'lOrO'} TYPE
   * @return {boolean}
   */
  checkType({ VALUE, TYPE }) {
    const value = SafeObject.getActualObject(VALUE);
    const isObj = typeof value === 'object' && value !== null;
    switch (TYPE) {
      case 'list':
        return Array.isArray(value);
      case 'obj':
        return isObj && !Array.isArray(value);
      case 'lOrO':
        return isObj;
      default:
        return false;
    }
  }

  /**
   * 严格相等。主要用于判断两个对象是否为同一个
   * @param {SCarg} A
   * @param {SCarg} B
   * @return {boolean}
   */
  strictlyEqual({ A, B }) {
    return SafeObject.getActualObject(A) === SafeObject.getActualObject(B);
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
      return new SafeObject(Object.assign(Object.create(null), obj));
    }
  }

  /**
   * 根据OPTION读数据
   * @param {*} data 数据
   * @param {string} OPTION value/ json
   */
  __getDataByOption(data) {
    // if (OPTION === 'json') {
    //   if (typeof data === 'object') data = SafeObject.stringify(data);
    //   return this.anythingToSCArg(data);
    // }
    return SafeObject.toSafeObject(data ?? '');
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

  clear({ NAME }) {
    const obj = this.__getObjByNameOrObj(NAME);
    if (!obj) return;
    if (Array.isArray(obj)) {
      // 清空传入的列表
      obj.length = 0;
      return;
    }
    // 清空传入的对象
    Object.keys(obj).forEach((key) => {
      delete obj[key];
    });
    // this.tempData.value[Cast.toString(NAME)] = new SafeObject();
  }

  createObjFromKeyValue({ KEYS, VALUES }) {
    const keys = this.__getListByNameOrObj(KEYS);
    const values = this.__getListByNameOrObj(VALUES);
    if (!keys || !values) return new SafeObject();
    const obj = Object.create(null);

    for (let i = 0; i < keys.length; i += 1) {
      if (i < values.length) {
        obj[keys[i]] = values[i];
      } else {
        obj[keys[i]] = '';
      }
    }
    return new SafeObject(obj);
  }

  /**
   * 根据数据名or对象，获取对象
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * param {undefined|1|2} type undefined: 不做要求 1: 返回数组，2: 返回非数组对象
   * @param {0|1|2} [autoCreate=0] 是否在名字不存在时自动创建。0不创建1对象2列表
   * @returns {object | false} 返回对象或false(读取失败)
   */
  __getObjByNameOrObj(NAME_OR_OBJ, autoCreate = 0) {
    let obj;
    if (typeof NAME_OR_OBJ === 'object') {
      obj = NAME_OR_OBJ;
    } else {
      const str = Cast.toString(NAME_OR_OBJ);
      obj = this.tempData.value[str];
      if (!obj) {
        if (this.inputJSONAllowed && (str[0] === '{' || str[0] === '[')) {
          // 尝试以JSON解析
          try {
            obj = SafeObject.simpleParse(str);
          } catch (e) {
            return false;
          }
        } else if (autoCreate > 0) {
          obj = new SafeObject(autoCreate === 2 ? [] : undefined);
          this.tempData.value[str] = obj;
        } else return false;
      }
    }
    obj = SafeObject.getActualObject(obj);
    if (typeof obj === 'object' && obj !== null) {
      // && !Array.isArray(obj)) {
      return obj;
    }
    return false;
  }

  /**
   * 根据数据名or对象，获取数组对象
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {boolean} [autoCreate=false] 列表不存在是否自动创建
   * @returns {Array | false} 返回数组对象或false(读取失败)
   */
  __getListByNameOrObj(NAME_OR_OBJ, autoCreate = false) {
    const list = this.__getObjByNameOrObj(NAME_OR_OBJ, autoCreate * 2);
    if (Array.isArray(list)) return list;
    return false;
  }

  /**
   * 根据数据名or对象，获取非数组对象
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @returns {object | false} 返回非数组的对象或false(读取失败)
   */
  __getPureObjByNameOrObj(NAME_OR_OBJ) {
    const obj = this.__getObjByNameOrObj(NAME_OR_OBJ);
    if (!Array.isArray(obj)) {
      return obj;
    }
    return false;
  }

  /**
   * (旧版)向列表加入
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} VALUE
   */
  addItemToList({ NAME_OR_OBJ, VALUE }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ, this.autoCreate);
    if (!list) return;
    this.__setDataByOption(list, list.length, 'set', VALUE);
  }

  /**
   * 向列表加入/移出
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {'add'|'remove'|'addIfNotExists'} OP 操作
   * @param {*} VALUE
   */
  addItemToList2(args) {
    const hasNextKey = args.DYNAMIC_ARGS1 !== undefined;
    const type = (1 + !hasNextKey) * this.autoCreate;
    let list = this.__getObjByNameOrObj(args.NAME_OR_OBJ, type);
    if (!list) return;
    if (hasNextKey) [list] = this.__getDeepestObjAndProp(list, args, null, this.autoCreate, true);
    if (!Array.isArray(list)) return;
    this.__addOrRemoveFromList(list, args.OP, args.VALUE);
  }

  /**
   * 向列表加入/移出，并返回列表
   * @param {*} OBJ 传入对象
   * @param {'add'|'remove'|'addIfNotExists'} OP 操作
   * @param {*} VALUE
   */
  addItemToListAndReturn({ OBJ, OP, VALUE }) {
    const list = this.__getListByNameOrObj(OBJ);
    if (!list) return '';
    this.__addOrRemoveFromList(list, OP, VALUE);
    return this.anythingToSCArg(list);
  }

  /**
   * 判断相等（支持对象，字符串大小写）
   * @param {*} v1
   * @param {*} v2
   * @returns {boolean}
   */
  isEqual(v1, v2) {
    const aIsObj = typeof v1 === 'object';
    const bIsObj = typeof v2 === 'object';
    // 比对象
    if (aIsObj && bIsObj) {
      return SafeObject.getActualObject(v1) === SafeObject.getActualObject(v2);
    }
    // 比原始值
    if (!aIsObj && !bIsObj) return this.compare(v1, v2) === 0;
    return false;
  }

  /**
   * 比大小，支持是否区分大小写
   * @param {*} v1
   * @param {*} v2
   * @returns {-1|0|1}
   */
  compare(v1, v2) {
    let n1 = Number(v1);
    let n2 = Number(v2);
    if (n1 === 0 && Cast.isWhiteSpace(v1)) {
      n1 = NaN;
    } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {
      n2 = NaN;
    }
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      // 有一个是非数字，就转为字符串比较
      let s1 = String(v1);
      if (!this.caseSensitive) s1 = s1.toLowerCase();
      let s2 = String(v2);
      if (!this.caseSensitive) s2 = s2.toLowerCase();
      if (s1 < s2) return -1;
      if (s1 > s2) return 1;
      return 0;
    }
    // Handle the special case of Infinity
    if (
      (n1 === Infinity && n2 === Infinity)
            || (n1 === -Infinity && n2 === -Infinity)
    ) {
      return 0;
    }
    return n1 - n2;
    // return Cast.compare(a, b);
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
        const index = this.__indexOf(list, VALUE);
        if (index > -1) {
          list.splice(index, 1);
        }
        break;
      }
      case 'addIfNotExists':
        if (this.__indexOf(list, VALUE) === -1) {
          list.push(VALUE);
        }
        break;
      default:
        break;
    }
  }

  /**
   * 获取实际索引（从1开始）。支持负数
   * @param {SCarg} IDX
   * @returns {number}
   */
  _getActualIdx(IDX, list) {
    if (IDX === 'random') return Math.floor(Math.random() * list.length);
    let idx = Cast.toNumber(IDX);
    if (idx < 0) idx += list.length;
    else if (this.idxStartsFrom1) idx -= 1;
    return idx;
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
    const list = this.__getListByNameOrObj(NAME_OR_OBJ, this.autoCreate);
    if (!list) return;
    const idx = this._getActualIdx(IDX, list);
    if (idx < 0 || idx > list.length) return;

    this.__setDataByOption(list, idx, OP, VALUE);
  }

  /**
   * 插入到列表第x项前
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {number} IDX 第x项
   * @param {*} VALUE
   */
  insertItemIntoList({ NAME_OR_OBJ, IDX, VALUE }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ, this.autoCreate);
    if (!list) return;
    const idx = this._getActualIdx(IDX, list);
    if (idx < 0 || idx > list.length) return;
    list.splice(idx, 0, null);
    const success = this.__setDataByOption(list, idx, 'set', VALUE);
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

    const idx = this._getActualIdx(IDX, list);
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

    const idx = this._getActualIdx(IDX, list);
    if (idx < 0 || idx > list.length - 1) return '';

    return this.__getDataByOption(list[idx], OPTION);
  }

  // 弹出某一项并返回
  pop({ LIST, IDX }) {
    const list = this.__getListByNameOrObj(LIST);
    if (!list) return '';

    const idx = this._getActualIdx(IDX, list);
    if (idx < 0 || idx > list.length - 1) return '';

    const res = this.__getDataByOption(list[idx]);
    list.splice(idx, 1);
    return res;
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
    const idx = this.__indexOf(list, VALUE);
    return idx > -1;
  }

  /**
   * 获取列表第一个xx的索引
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} VALUE
   * @returns {number}
   */
  getListItemIdxByItem({ NAME_OR_OBJ, VALUE }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return -1 + this.idxStartsFrom1;

    return this.__indexOf(list, VALUE) + this.idxStartsFrom1;
  }

  // 查找第几次出现的位置
  indexOf({ NAME_OR_OBJ, VALUE, N }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return -1 + this.idxStartsFrom1;
    const n = Cast.toNumber(N);

    const idx = this.__indexOf(list, VALUE, n);
    return idx + this.idxStartsFrom1;
  }

  /**
   * 合并两个LIST
   * @param {'merge'|'union'|'intersec'|'diff'} OP 操作
   * @param {*} LIST1 列表1
   * @param {*} LIST2 列表2
   */
  mergeList({ OP, LIST1, LIST2 }) {
    const list1 = this.__getListByNameOrObj(LIST1);
    const list2 = this.__getListByNameOrObj(LIST2);
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

  split({ CH, STR }) {
    const str = Cast.toString(STR);
    return new SafeObject(str.split(Cast.toString(CH)));
  }

  slice({ NAME_OR_OBJ, A, B }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return new SafeObject([]);
    let a = A === '' ? 0 : Cast.toNumber(A);
    let b = B === '' ? undefined : Cast.toNumber(B);
    if (a > 0) a -= 1;
    if (b === -1) b = undefined;
    else if (b < 0) b += 1;
    return new SafeObject(list.slice(a, b));
  }

  join({ CH, NAME_OR_OBJ }) {
    const list = this.__getListByNameOrObj(NAME_OR_OBJ);
    if (!list) return '';
    return list.join(Cast.toString(CH));
  }

  /**
   * 对象assign
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} OBJ 对象
   */
  mergeObject({ NAME_OR_OBJ, OBJ }) {
    const obj2 = this.__getObjByNameOrObj(OBJ);
    if (!obj2) return;
    const o2isArray = Array.isArray(obj2);
    const auto = this.autoCreate * (o2isArray + 1);
    const obj = this.__getObjByNameOrObj(NAME_OR_OBJ, auto);
    if (!obj) return;
    const o1isArray = Array.isArray(obj);
    if (o1isArray && o2isArray) obj.push(...obj2);
    else if (!o1isArray && !o2isArray)Object.assign(obj, obj2);
  }

  /**
   * 设置对象原型
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} OBJ 对象
   */
  setProtoOfObj({ NAME_OR_OBJ, OBJ }) {
    const obj2 = this.__getPureObjByNameOrObj(OBJ);
    if (!obj2) return;
    const obj = this.__getPureObjByNameOrObj(NAME_OR_OBJ);
    if (!obj) return;
    try {
      Object.setPrototypeOf(obj, obj2);
    } catch (e) {
      if (e.message === 'Cyclic __proto__ value') {
        this.logError(this.fm('warn.cyclicProto'));
      } else this.logError(e.message);
    }
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
        list.sort((a, b) => this.compare(a, b));
        break;
      case 'desc':
        list.sort((a, b) => this.compare(b, a));
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
    const asc = OP === 'asc' ? 1 : -1;
    try {
      list.sort((a, b) => {
        const a1 = SafeObject.getActualObject(a);
        const b1 = SafeObject.getActualObject(b);
        return this.compare(a1[prop], b1[prop]) * asc;
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
      this.runtime.logSystem.warn(`[${this.fm('extensionName')}]`, ...args);
      if (!this.runtime.isPlayerOnly) this.runtime.logSystem.show();
    } else console.error(`${this.fm('extensionName')}: `, ...args);
  }

  /**
   * 设置对象
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} PROP 属性名
   * @param {string} OP 操作：set/ add
   * @param {*} VALUE
   */
  setPropOfObject(args) {
    const obj1 = this.__getObjByNameOrObj(args.NAME_OR_OBJ, this.autoCreate);
    if (!obj1) return;
    const [obj, key] = this.__getDeepestObjAndProp(obj1, args, args.PROP, this.autoCreate);
    if (!obj) return;
    this.__setDataByOption(obj, key, args.OP, args.VALUE);

    // if (Array.isArray(obj)) {
    //   const idx = this._getActualIdx(PROP, obj);
    //   if (idx < 0 || idx > obj.length) {
    //     // 非数字的属性，直接记录
    //     if (isNaN(PROP)) {
    //       if (PROP === 'length') {
    //         this.__setDataByOption(
    //           obj,
    //           PROP,
    //           OP,
    //           Math.max(0, Cast.toNumber(VALUE)),
    //         );
    //       }
    //       this.__setDataByOption(obj, PROP, OP, VALUE);
    //     }
    //     return;
    //   }
    //   this.__setDataByOption(obj, idx, OP, VALUE);
    // } else {
    //   this.__setDataByOption(obj, PROP, OP, VALUE);
    // }
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
    const obj = this.__getObjByNameOrObj(OBJ);
    if (!obj) return '';
    this.__setDataByOption(obj, Cast.toString(PROP), OP, VALUE);
    return this.anythingToSCArg(obj);
  }

  /**
   * 删除对象名为xx的内容
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} PROP 属性名
   */
  delPropOfObject({ NAME_OR_OBJ, PROP }) {
    const obj = this.__getObjByNameOrObj(NAME_OR_OBJ);
    if (!obj) return;
    if (Array.isArray(obj)) {
      const idx = this._getActualIdx(PROP, obj);
      if (idx < 0 || idx > obj.length - 1) {
        // 非数字的属性，直接删除
        if (isNaN(PROP)) delete obj[PROP];
        return;
      }
      obj.splice(idx, 1);
    } else delete obj[PROP];
  }

  /**
   * 根据args读取多层对象
   * @param {*} obj 对象
   * @param {*} args 例如{DYNAMIC_ARGS1:... DYNAMIC_ARGS2:...}
   * @param {*} firstArg 第一个参数key
   * @param {boolean} [autoCreate=false] 是否自动创建路径上不存在的对象，例如a.a.a=1，如果a.a不存在，自动创建为对象
   * @returns {[object, key]} [最深层对象, 属性键]
   */
  __getDeepestObjAndProp(obj, args, firstArg, autoCreate = false, getList = false) {
    let parent = obj;
    let key = firstArg;
    let i = 0;
    if (getList) {
      i += 1;
      key = args.DYNAMIC_ARGS1;
      if (key === undefined) return [null, ''];
    }
    for (; ;i += 1) {
      // const isArray = ;
      // && !isNaN(key)
      if (Array.isArray(parent)) {
        if (isNaN(key)) {
          // 非法键
          if (key in Array.prototype) {
            return [null, ''];
          }
        } else {
          key = this._getActualIdx(key, parent);
          if (key < 0 || key > parent.length) return [null, ''];
        }
      }
      const nextKey = args[`DYNAMIC_ARGS${i + 1}`];
      // 没有下一个键
      if (!getList && nextKey === undefined) return [parent, key];
      // 更新parent
      const oldP = parent;
      parent = SafeObject.getActualObject(parent[key]);
      // 不是对象，失败，返回
      if (typeof parent !== 'object' || parent === null) {
        if (autoCreate && key !== '') {
          if (getList && nextKey === undefined) oldP[key] = new SafeObject([]);
          else oldP[key] = new SafeObject();
          parent = oldP[key].value;
        } else return [null, ''];
      }
      if (getList && nextKey === undefined) return [parent, ''];
      if (!Array.isArray(parent) && parent instanceof Object) {
        // 以 null 为原型，避免原型污染
        Object.setPrototypeOf(parent, null);
      }
      key = nextKey;
    }
  }

  /**
   * 获取对象名为XX的内容
   * @param {*} NAME_OR_OBJ 数据名或传入对象
   * @param {*} PROP 属性名
   * @param {string} OPTION  value/json
   * @returns {*}
   */
  getPropOfObject(args) {
    const res = this.__getObjByNameOrObj(args.NAME_OR_OBJ);
    if (!res) return '';
    const [obj, key] = this.__getDeepestObjAndProp(res, args, args.PROP);
    if (!obj) return '';
    return this.anythingToSCArg(obj[key]);
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
    const isArray = Array.isArray(obj);

    let list = obj;
    if (!isArray) {
      list = Object.keys(obj);
    }
    const idx = this._getActualIdx(IDX, list);
    if (idx < 0 || idx > obj.length - 1) {
      return '';
    }
    if (isArray) {
      if (OPTION === 'name') return idx + 1;
      return this.__getDataByOption(list[idx], OPTION);
    }
    const key = list[idx];
    if (key === undefined) return '';
    if (OPTION === 'name') return key;

    return this.__getDataByOption(obj[key], OPTION);
  }

  getSubObject({ OBJ, TYPE, KEYS }) {
    let obj = this.__getObjByNameOrObj(OBJ);
    if (!obj) obj = Object.create(null);
    let keys = this.__getListByNameOrObj(KEYS);
    if (!keys) keys = [];
    const isGettingObj = TYPE === 'obj';
    const res = isGettingObj ? Object.create(null) : [];
    keys.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (isGettingObj) res[key] = obj[key];
        else res.push(obj[key]);
      }
    });
    return SafeObject.toSafeObject(res);
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
    const isArray = Array.isArray(obj);

    let res;
    switch (Cast.toString(OPTION)) {
      case 'keys':
        res = Object.keys(obj);
        if (isArray && this.idxStartsFrom1) {
          res = res.map((key) => (isNaN(key) ? key : String(Number(key) + 1)));
        }
        break;
      case 'values':
        res = Object.values(obj);
        break;
      case 'entries':
        res = Object.entries(obj).map((item) => {
          if (isArray && this.idxStartsFrom1 && !isNaN(item[0])) {
            item[0] = String(Number(item[0]) + 1);
          }
          return SafeObject.toSafeObject(item);
        });
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
    if (Array.isArray(obj)) return obj.length;
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
    // 普通对象，判断key是否存在
    if (!Array.isArray(obj)) return Object.prototype.hasOwnProperty.call(obj, Cast.toString(PROP));

    // 列表，遍历判断
    const idx = this.__indexOf(obj, PROP);
    return idx > -1;
  }

  /**
   * 查找列表中是否有某个内容，返回索引。和scratch比较一致，但支持对象查找
   * @param {Array} list 数组
   * @param {*} item 要查找的内容
   * @param {number} [n=1] 第几次出现，默认1。支持负数（从后往前）
   * @returns {number} 0开始的索引，找不到返回-1
   */
  __indexOf(list, item, n = 1) {
    const findFromEnd = n < 0;
    const N = Math.round(Math.abs(n));
    const len = list.length;

    let cnt = 0;
    for (let i = 0; i < len; i += 1) {
      const idx = findFromEnd ? len - 1 - i : i;
      const it = list[idx];
      if (this.isEqual(it, item)) {
        cnt += 1;
      }
      if (cnt === N) return idx;
    }
    return -1;
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
    const obj = this.__getListByNameOrObj(OBJ);
    if (!obj) return;
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
    docsURI:
      'https://learn.ccw.site/article/3b5fb890-b480-4157-b104-dacd53449549',
    collaborator: 'Arkos @ CCW',
  },
  l10n: {
    'zh-cn': {
      [`${extensionId}.extensionName`]: '高级数据结构',
      [`${extensionId}.description`]:
        '🗄️ 引入对象等高级数据结构，支持嵌套对象。',
    },
    en: {
      [`${extensionId}.extensionName`]: 'Advanced Data Structure',
      [`${extensionId}.description`]:
        '🗄️ Introducing advanced data structures like objects, with support for nested object!',
    },
  },
};
