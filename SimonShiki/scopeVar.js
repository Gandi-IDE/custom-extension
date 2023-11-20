// Name: Scope Variables
// ID: scopeVar
// Description: Manage your data inside your stack (or substack).
// 作者 By: SimonShiki <https://scratch.mit.edu/users/SinanGentoo/>
// 原作者Original: Skyhigh173
// 搬运：Arkos

import cover from './assets/cover.png'
import icon from './assets/icon.png'

const extensionId = "shikiScopeVar";

import Cast from "../utils/cast.js";

class ScopeVar {
  constructor(runtime) {
    this.runtime = runtime;

    this.initFormatMessage({
      "zh-cn": {
        extensionName: "局部变量",
        description: "更优雅、便捷的变量使用方式",

        urlButton: "📖 扩展教程",
        "tip.compiler": "⚠️ 编译模式下，原版分支积木/自制积木的域会失效",
        "url": "https://learn.ccw.site/article/49da22df-a178-4cce-86c7-366df75f7d75",

        "block.scope": "局部域",
        "block.create": "声明局部变量 [VAR]，并设为 [VALUE]",
        "block.set": "局部变量 [VAR] 设为 [VALUE]",
        "block.change": "局部变量 [VAR] 增加 [INCREMENT]",
        "block.get": "局部变量 [VAR]",

        // ↓遍历积木，灵感来自 YUEN
        "block.repeatWithVar": "以 [VAR] 为计数器，从 [N1] 到 [N2]",
        "block.forEachWithList": "遍历列表 [LIST] 每项，编号[I]内容[VAR]",
      },

      en: {
        extensionName: "Scope Variables",
        description: "Manage your data inside.",

        urlButton: "📖 Tutorial",
        "tip.compiler": "⚠️ In compile mode, the scope of branch blocks/custom blocks will be invalid.",
        "url": "https://learn.ccw.site/article/49da22df-a178-4cce-86c7-366df75f7d75",

        "block.scope": "scope",
        "block.create": "create scoped [VAR] with [VALUE]",
        "block.set": "set scoped [VAR] to [VALUE]",
        "block.change": "change scoped [VAR] by [INCREMENT]",
        "block.get": "get scoped [VAR]",

        "block.repeatWithVar": "counter [VAR] from [N1] to [N2]",
        "block.forEachWithList": "for each [I], [VAR] of [LIST]",
      },
    });
  }

  /** by YUEN，在 l10n 每条信息前加上 extensionId. */ 
  initFormatMessage(l10n) {
    const languages = ["zh-cn", "en"];
    for (const [language, messages] of Object.entries(l10n)) {
      l10n[language] = {};
      if (!languages.includes(language)) return;
      Object.entries(messages).forEach(([id, message]) => {
        l10n[language][`${extensionId}.${id}`] = message;
      });
    }
    const _formatMessage = this.runtime.getFormatMessage(l10n);
    this.formatMessage = (id) => {
      id = `${extensionId}.${id}`;
      return _formatMessage({
        id,
        default: id,
        description: id,
      });
    };
  }

  getInfo() {
    return {
      id: extensionId,
      name: this.formatMessage("extensionName"),
      color1: "#9999FF",
      // blockIconURI: icon,
      menuIconURI: icon,
      blocks: [
        {
          blockType: "button",
          text: this.formatMessage("urlButton"),
          onClick: () => {
            const a = document.createElement("a");
            a.href = this.formatMessage("url");
            a.rel = "noopener noreferrer";
            a.target = "_blank";
            a.click();
          },
        },
        '---',
        // '---' + this.formatMessage("tip.compiler"),
        {
          opcode: "scope",
          blockType: "conditional",
          branchCount: 1,
          text: [this.formatMessage("block.scope")],
        },
        "---",
        {
          opcode: "create",
          blockType: "command",
          text: this.formatMessage("block.create"),
          arguments: {
            VAR: {
              type: "string",
              defaultValue: "i",
            },
            VALUE: {
              type: "string",
              defaultValue: "0",
            },
          },
        },
        {
          opcode: "set",
          blockType: "command",
          text: this.formatMessage("block.set"),
          arguments: {
            VAR: {
              type: "string",
              defaultValue: "i",
            },
            VALUE: {
              type: "string",
              defaultValue: "0",
            },
          },
        },
        {
          opcode: "change",
          blockType: "command",
          text: this.formatMessage("block.change"),
          arguments: {
            VAR: {
              type: "string",
              defaultValue: "i",
            },
            INCREMENT: {
              type: "number",
              defaultValue: "1",
            },
          },
        },
        {
          opcode: "get",
          blockType: "reporter",
          text: this.formatMessage("block.get"),
          arguments: {
            VAR: {
              type: "string",
              defaultValue: "i",
            },
          },
        },
        '---',
        {
          opcode: 'repeatWithVar',
          blockType: 'conditional',
          text: [this.formatMessage('block.repeatWithVar')],
          branchCount: 1,
          arguments: {
            N1: {
              type: "number",
              defaultValue: 1,
            },
            N2: {
              type: "number",
              defaultValue: 10,
            },
            VAR: {
              type: "string",
              defaultValue: 'i',
            },
          },
        },
        {
          opcode: 'forEachWithList',
          blockType: 'conditional',
          text: [this.formatMessage('block.forEachWithList')],
          branchCount: 1,
          arguments: {
            LIST: {
              type: "string",
              menu: 'LIST_MENU',
            },
            VAR: {
              type: "string",
              defaultValue: 'item',
            },
            I: {
              type: "string",
              defaultValue: 'i',
            },
          },
        },
        // {
        //   opcode: 'glowScript',
        //   BlockType: 'command',
        //   text: '高亮积木 [ID] 持续时间 [TIME] s',
        //   arguments: {
        //     ID: {
        //       type: 'string',
        //       defaultValue: '',
        //     },
        //     TIME: {
        //       type: 'number',
        //       defaultValue: 3,
        //     },
        //   },
        // },
      ],
      menus: {
        LIST_MENU: {
          items: '__listMenu',
          acceptReporters: true,
        },
      }
    };
  }

  // glowScript({ ID, TIME }) {
  //   this.runtime.glowBlock(ID, true);
  //   setTimeout(() => {
  //     this.runtime.glowBlock(ID, false);
  //   }, TIME * 1000);
  // }

  /**
   * 获取列表的菜单
   */
  __listMenu() {
    const menus = [];
    // 放入全局列表
    let variables = this.runtime._stageTarget.variables;
    Object.keys(variables).forEach((variable) => {
      if (variables[variable].type === 'list') {
        menus.push({
          text: variables[variable].name,
          value: variables[variable].id,
        });
      }
    });
    // 放入私有列表
    if (this.runtime._editingTarget&&
      this.runtime._editingTarget !== this.runtime._stageTarget) {
      variables = this.runtime._editingTarget.variables;
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
   * 从内往外读取每个作用域，查找有name的作用域的vars（如果没找到，则初始化最内层）
   * @param {string} name 要查找的局部变量名
   * @param {*} thread 
   * @returns {*} vars
   */
  _getVarObjByName(name, thread) {
    const { stackFrames, stack } = thread;

    // current block is top-level, read it from thread
    if (stackFrames.length < 2) {
      // initialize in thread
      if (typeof thread.vars !== "object") {
        thread.vars = {};
      }
      return thread.vars;
    }
    
    // look up the i from outer scope up
    for (let i = stackFrames.length - 2; i >= 0; i--) {
      const { executionContext } = stackFrames[i];

      if (
        executionContext !== null &&
        typeof executionContext.vars === "object" &&
        name in executionContext.vars
      ) {
        return executionContext.vars;;
      } else {
        // 如果该层是自制积木或返回值就退出（自制积木不应该再继续访问外部的局部变量）
        const block = thread.target.blocks.getBlock(stack[i]);
        if ((block && block.opcode === 'procedures_call') ||
          stackFrames[i].op.opcode === 'procedures_call_with_return') {
          return this._getOrInitScopeVars(thread);
        }
      }
    }

    // return if it exists in top-level
    if (typeof thread.vars === "object" && name in thread.vars) {
      return thread.vars;
    }

    // initialize in outer scope
    return this._getOrInitScopeVars(thread);
  }

  /**
   * 返回某层级的vars
   * @param {*} thread 
   * @param {number} back 往前层数
   * @returns {*} vars
   */
  _getOrInitScopeVars(thread, back = 1) {
    const stackFrames = thread.stackFrames;

    let vars;
    if (stackFrames.length - 1 < back) {
      if (typeof thread.vars !== "object") {
        thread.vars = {};
      }
      vars = thread.vars;
    } else {
      const outerStackFrame = stackFrames[stackFrames.length - 1 - back];
      if (!outerStackFrame.executionContext) {
        outerStackFrame.executionContext = {};
      }
      const { executionContext } = outerStackFrame;
      if (typeof executionContext.vars !== "object") {
        executionContext.vars = {};
      }
      vars =  executionContext.vars;
    }
    return vars;
  }

  /**
   * 局部域branch积木
   */
  scope(args, util) {
    util.startBranch(1, false);
  }

  /**
   * 创建（声明）局部变量
   * @param {string} VAR 局部变量名
   * @param {*} VALUE 设为的值
   */
  create({VAR, VALUE}, util) {
    const varName = Cast.toString(VAR);
    const vars = this._getOrInitScopeVars(util.thread);
    vars[varName] = VALUE;
  }

  /**
   * 设置局部变量
   * @param {string} VAR 局部变量名
   * @param {*} VALUE 设为的值
   */
  set({VAR, VALUE}, util) {
    const varName = Cast.toString(VAR);

    const vars = this._getVarObjByName(varName, util.thread);

    vars[varName] = VALUE;
  }

  /**
   * 增加局部变量
   * @param {string} VAR 局部变量名
   * @param {number} INCREMENT 值
   */
  change({VAR, INCREMENT}, util) {
    const varName = Cast.toString(VAR);
    const vars = this._getVarObjByName(varName, util.thread);
    const castedValue = Cast.toNumber(vars[varName]);
    const dValue = Cast.toNumber(INCREMENT);
    vars[varName] = castedValue + dValue;
  }

  /**
   * 读取局部变量
   * @param {string} VAR 局部变量名
   * @returns {*} 结果
   */
  get({VAR}, util) {
    const varName = Cast.toString(VAR);
    const vars = this._getVarObjByName(varName, util.thread);
    return vars[varName] ?? "";
  }

  /**
   * 从 N1 到 N2 ,将计数存在 VAR
   * @param {N1} 开始值
   * @param {N2} 结束值
   * @param {VAR} 局部变量名  
   */
  repeatWithVar({N1, N2, VAR}, util) {
    const stackFrame = util.stackFrame;

    if (typeof stackFrame.loopCounter === 'undefined') {
      // N1，N2存入stackFrame，防止后面发生变化
      stackFrame.n1 = Math.round(Cast.toNumber(N1));
      stackFrame.n2 = Math.round(Cast.toNumber(N2));
      stackFrame.step = Math.sign (stackFrame.n2 - stackFrame.n1);
      if(stackFrame.step === 0) return;
      stackFrame.loopCounter = stackFrame.n1;
    } else {
      // 每次增加步长
      stackFrame.loopCounter += stackFrame.step;
    }
    const {n1, n2, step, loopCounter} = stackFrame;
    
    const varName = Cast.toString(VAR);
    const vars = this._getOrInitScopeVars(util.thread, 0);
    vars[varName] = loopCounter;

    if (step > 0 ? loopCounter > n2: loopCounter < n2) {
      return;
    }
    util.startBranch(1, true);
  }

  /**
   * 遍历原版列表LIST的每一项，存在局部变量VAR
   * @param {LIST} 次数 
   * @param {VAR} 局部变量名，存列表项 
   * @param {I} 局部变量名，存列表索引
   */
  forEachWithList({LIST, VAR, I}, util) {

    // 还没有创建列表
    if (LIST === 'empty') return;
    // 根据Id或列表名查找，没找到则返回
    let list = util.target.lookupVariableById(LIST);
    if (
      (!list &&
        (list = util.target.lookupVariableByNameAndType(
          LIST,
          'list'
        )),
      !list)
    )
      return;

    const times = list.value.length;
    if (times < 1) return;
    if (typeof util.stackFrame.loopCounter === 'undefined') {
      util.stackFrame.loopCounter = times;
    }

    util.stackFrame.loopCounter--;
    
    const varName = Cast.toString(VAR);
    const idxName = Cast.toString(I);
    const vars = this._getOrInitScopeVars(util.thread, 0);
    const idx = times - util.stackFrame.loopCounter -1;
    if (idx < 0 && idx > list.value.length - 1) return;
    vars[idxName] = idx + 1;
    vars[varName] = list.value[idx] ?? '';

    if (util.stackFrame.loopCounter >= 0) {
      util.startBranch(1, true);
    }
  }
}

const extension = {
  Extension: ScopeVar,
  info: {
    name: `${extensionId}.extensionName`,
    description: `${extensionId}.description`,
    docsURI: "https://extensions.turbowarp.org/SimonShiki/scopeVar",
    extensionId,
    iconURL: cover,
    insetIconURL: icon,
    featured: true,
    disabled: false,
    // collaborator: 'editor @ ',
    collaboratorList: [
      {
        collaborator: "SimonShiki @ ClipCC",
        collaboratorURL: "https://github.com/SimonShiki",
      },
      {
        collaborator: "Skyhigh173",
        collaboratorURL: "https://github.com/Skyhigh173",
      },
      {
        collaborator: "Arkos(搬运者) @ CCW",
        collaboratorURL:
          "https://www.ccw.site/student/6107c5323e593a0c25f850f8",
      },
    ],
  },
  l10n: {
    "zh-cn": {
      [`${extensionId}.extensionName`]: "局部变量",
      [`${extensionId}.description`]: "✨ 更优雅、便捷的变量使用方式",
    },
    en: {
      [`${extensionId}.extensionName`]: "Scope Variables",
      [`${extensionId}.description`]: "✨ A more elegant and convenient way to use variables.",
    },
  },
};
window.tempExt = extension;
