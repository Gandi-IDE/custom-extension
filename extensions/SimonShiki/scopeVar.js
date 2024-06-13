/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint quotes: ['error', 'double'] */
// Name: Scope Variables
// ID: scopeVar
// Description: Manage your data inside your stack (or substack).
// 作者 By: SimonShiki <https://scratch.mit.edu/users/SinanGentoo/>
// 原作者Original: Skyhigh173
// 搬运：Arkos

const cover = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAFuCAIAAADmtjC6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGj2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTEwLTAyVDEzOjM2OjE3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0xMS0yMFQxNzoyMTozMyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0xMS0yMFQxNzoyMTozMyswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMTIyMWJmYi1mNmVhLTk5NGMtODMxZC03ODRjZGFkZDE0NTAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1YjgxNWY5Yi05ZGM5LTdjNDQtOThiNy05NGM2NGMzYWQ0NTIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphNjBlOGE3NC1iNmU5LTIxNGUtYjE5Yy0xNDc3M2IwYTZmOTciPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MGI4MjA1M2YtZWI1Yy1lMTRiLWE2ZDItYjljN2U3YTdjMmMyPC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTYwZThhNzQtYjZlOS0yMTRlLWIxOWMtMTQ3NzNiMGE2Zjk3IiBzdEV2dDp3aGVuPSIyMDIzLTEwLTAyVDEzOjM2OjE3KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjExMjIxYmZiLWY2ZWEtOTk0Yy04MzFkLTc4NGNkYWRkMTQ1MCIgc3RFdnQ6d2hlbj0iMjAyMy0xMS0yMFQxNzoyMTozMyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlfUvNUAACHjSURBVHic7d3Lc2TXfdjx3+/0C8BgBpgXB5QoeUYuRRomFXO4UESqKgmVmH7ErpIoKRXG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";
const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACuCAYAAACWa4e1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTExLTIwVDAxOjAyOjI3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0xMS0yMFQxNzozMzoyOCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0xMS0yMFQxNzozMzoyOCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3OWFmN2MwNS03NmY1LTljNGQtYjQwNC00NTkxZDJiNDMzOTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphZmEzMmRlZC1kODk4LThmNDgtOTIwYi1mNGM1MTljNzMzZWMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NTE4YjBjZC0zMjc2LTMyNDktODg0OS03OTA2OGU3Y2UwYTciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1MThiMGNkLTMyNzYtMzI0OS04ODQ5LTc5MDY4ZTdjZTBhNyIgc3RFdnQ6d2hlbj0iMjAyMy0xMS0yMFQwMTowMjoyNyswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OWFmN2MwNS03NmY1LTljNGQtYjQwNC00NTkxZDJiNDMzOTEiIHN0RXZ0OndoZW49IjIwMjMtMTEtMjBUMTc6MzM6MjgrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5aW+i1AAAPmklEQVR4nO3df3DT933H8Ze++i0LvgJjEARRu3S5uO1q7NQXIMtSwg1G7nptnIZLLl3brKwrXnYZMbQlhNyVkHEHJHRdIUvGNU3aNblkJaylsPpIDO0Rk2TMsEtrLjcqLV8CDthCspH18/v97g9bRBhZ+v7+Ib0fd7mrpa++3498z3746quvv1+HKIogtWHPxrdvDhdSneHC1U6/yM8K8ZnmkJBtkfLamJvtA4Com+1NMN5zCaf/3OZdHZf1HbF6DgrYvl7YcHxNa27k/nAh1eET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";
const extensionId = "shikiScopeVar";
// const extensionId = "shikiScopeVartest";

const { Cast } = window.Scratch;

class ScopeVar {
  constructor(runtime) {
    this.runtime = runtime;

    this.initFormatMessage({
      "zh-cn": {
        extensionName: "局部变量",
        description: "更优雅、便捷的变量使用方式",

        urlButton: "📖 扩展教程",
        "tip.compiler": "⚠️ 编译模式下原版作用域失效(详见文档)",
        "tip.compiler2": "⚠️ 带有警告标识的积木会破坏编译，降低性能，谨慎使用",
        url: "https://learn.ccw.site/article/49da22df-a178-4cce-86c7-366df75f7d75",

        "block.scope": "⚠️局部域",
        "block.create": "声明局部变量 [VAR]，并设为 [VALUE]",
        "block.set": "局部变量 [VAR] 设为 [VALUE]",
        "block.change": "局部变量 [VAR] 增加 [INCREMENT]",
        "block.get": "局部变量 [VAR]",

        // ↓遍历积木，灵感来自 YUEN
        "block.repeatWithVar": "⚠️重复执行[N]次，以[VAR]为计数器",
        "block.forEachWithList": "⚠️遍历 [LIST] 每项，索引[I]内容[VAR]",
        "tip.nolist": "还没有列表",
      },

      en: {
        extensionName: "Scope Variables",
        description: "Manage your data inside.",

        urlButton: "📖 Tutorial",
        "tip.compiler": "⚠️Not compatible in compile mode(See documentation)",
        "tip.compiler2": "⚠️ The blocks with warning emoji will break compilation",
        url: "https://learn.ccw.site/article/49da22df-a178-4cce-86c7-366df75f7d75",

        "block.scope": "⚠️scope",
        "block.create": "create scoped var [VAR] with [VALUE]",
        "block.set": "set scoped var [VAR] to [VALUE]",
        "block.change": "change scoped var [VAR] by [INCREMENT]",
        "block.get": "scoped var[VAR]",

        "block.repeatWithVar": "⚠️repeat[N]times with[VAR]as counter",
        "block.forEachWithList": "⚠️for each [I], [VAR] of [LIST]",
        "tip.nolist": "no lists",
      },
    });
  }

  /** by YUEN，在 l10n 每条信息前加上 extensionId. */
  initFormatMessage(l10n) {
    const languages = ["zh-cn", "en"];
    Object.entries(l10n).forEach(([language, messages]) => {
      l10n[language] = {};
      if (!languages.includes(language)) return;
      Object.entries(messages).forEach(([id, message]) => {
        l10n[language][`${extensionId}.${id}`] = message;
      });
    });
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
      docsURI: this.formatMessage("url"),
      // blockIconURI: icon,
      menuIconURI: icon,
      blocks: [
        {
          blockType: "label",
          text: this.formatMessage("tip.compiler"),
        },
        {
          blockType: "label",
          text: this.formatMessage("tip.compiler2"),
        },
        // `---${this.formatMessage("tip.compiler")}`,
        // `---${this.formatMessage("tip.compiler2")}`,
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
        "---",
        {
          opcode: "repeatWithVar",
          blockType: "conditional",
          text: [this.formatMessage("block.repeatWithVar")],
          branchCount: 1,
          arguments: {
            N: {
              type: "number",
              defaultValue: 10,
            },
            VAR: {
              type: "string",
              defaultValue: "i",
            },
          },
        },
        {
          opcode: "forEachWithList",
          blockType: "conditional",
          text: [this.formatMessage("block.forEachWithList")],
          branchCount: 1,
          arguments: {
            LIST: {
              type: "string",
              menu: "LIST_MENU",
            },
            VAR: {
              type: "string",
              defaultValue: "item",
            },
            I: {
              type: "string",
              defaultValue: "i",
            },
          },
        },
        {
          opcode: "glowScript",
          BlockType: "command",
          text: "高亮积木 [ID] 持续时间 [TIME] s",
          hideFromPalette: true,
          arguments: {
            ID: {
              type: "string",
              defaultValue: "",
            },
            TIME: {
              type: "number",
              defaultValue: 3,
            },
          },
        },
      ],
      menus: {
        LIST_MENU: {
          items: "__listMenu",
          acceptReporters: true,
        },
      },
    };
  }

  glowScript({ ID, TIME }) {
    this.runtime.glowBlock(ID, true);
    setTimeout(() => {
      this.runtime.glowBlock(ID, false);
    }, TIME * 1000);
  }

  /**
   * 获取列表的菜单
   */
  __listMenu() {
    const menus = [];
    // 放入全局列表
    let { variables } = this.runtime._stageTarget;
    Object.keys(variables).forEach((variable) => {
      if (variables[variable].type === "list") {
        menus.push({
          text: variables[variable].name,
          value: variables[variable].id,
        });
      }
    });
    // 放入私有列表
    if (this.runtime._editingTarget
      && this.runtime._editingTarget !== this.runtime._stageTarget) {
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
        text: "-",
        value: "empty",
      });
    }
    return menus;
  }

  /**
   * 从内往外读取每个作用域，查找有name的作用域的vars（如果没找到，则初始化最内层）
   * @param {string} name 要查找的局部变量名
   * @param {*} thread
   * @param {boolean} isThreadVar 是否是线程变量
   * @returns {*} vars
   */
  _getVarObjByName(name, thread, isThreadVar = false) {
    const { stackFrames, stack } = thread;

    // current block is top-level, read it from thread
    if (stackFrames.length < 2 || isThreadVar) {
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
        executionContext !== null
        && typeof executionContext.vars === "object"
        && name in executionContext.vars
      ) {
        return executionContext.vars;
      }
      // 如果该层是自制积木或返回值就退出（自制积木不应该再继续访问外部的局部变量）
      const block = thread.target.blocks.getBlock(stack[i]);
      if ((block && block.opcode === "procedures_call")
          || stackFrames[i].op.opcode === "procedures_call_with_return") {
        return this._getOrInitScopeVars(thread);
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
    const { stackFrames } = thread;

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
      vars = executionContext.vars;
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
  create({ VAR, VALUE }, util) {
    const varName = Cast.toString(VAR);
    const vars = this._getOrInitScopeVars(util.thread);
    vars[varName] = VALUE;
  }

  /**
   * 设置局部变量
   * @param {string} VAR 局部变量名
   * @param {*} VALUE 设为的值
   */
  set({ VAR, VALUE }, util) {
    const varName = Cast.toString(VAR);

    const vars = this._getVarObjByName(varName, util.thread);

    vars[varName] = VALUE;
  }

  /**
   * 增加局部变量
   * @param {string} VAR 局部变量名
   * @param {number} INCREMENT 值
   */
  change({ VAR, INCREMENT }, util) {
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
  get({ VAR }, util) {
    const varName = Cast.toString(VAR);
    const vars = this._getVarObjByName(varName, util.thread);
    return vars[varName] ?? "";
  }

  /**
   * 重复 N 次，将计数存在 VAR
   * @param {N} 开始值
   * @param {VAR} 局部变量名
   */
  repeatWithVar({ N, VAR }, util) {
    const { stackFrame } = util;

    if (typeof stackFrame.loopCounter === "undefined") {
      // N存入stackFrame，防止后面发生变化
      stackFrame.n = Math.round(Cast.toNumber(N));
      stackFrame.loopCounter = 1;
    } else {
      stackFrame.loopCounter += 1;
    }
    if (stackFrame.loopCounter > stackFrame.n) {
      return;
    }

    const varName = Cast.toString(VAR);
    const vars = this._getOrInitScopeVars(util.thread, 0);
    vars[varName] = stackFrame.loopCounter;

    util.startBranch(1, true);
  }

  /**
   * 根据列表名或 id 获取 Scratch 列表
   * @param {string} str Scratch 列表名或id
   * @param {Target} target 要查找的角色
   */
  getListByIdOrName(str, target) {
    let list = target.lookupVariableById(str);
    if (!list) {
      list = target.lookupVariableByNameAndType(str, "list");
      if (!list) return null;
    }
    return list;
  }

  /**
   * 遍历原版列表LIST的每一项，存在局部变量VAR
   * @param {LIST} 次数
   * @param {VAR} 局部变量名，存列表项
   * @param {I} 局部变量名，存列表索引
   */
  forEachWithList({ LIST, VAR, I }, util) {
    const { stackFrame } = util;
    let list;
    let type;
    const { SafeObject } = this.runtime;
    const toSafeObject = (v) => (SafeObject ? SafeObject.toSafeObject(v) : v);
    if (typeof stackFrame.loopCounter === "undefined") {
      // 支持传入对象、列表
      if (typeof LIST === "object") {
        if (LIST === null) return;
        list = LIST;
        // 联动高级数据结构扩展
        if (SafeObject) {
          list = SafeObject.getActualObject(list);
        }
        type = Array.isArray(list) ? "list" : "obj";
      } else {
        // 根据输入字符串查找列表
        const str = Cast.toString(LIST);
        if (str === "empty") return; // 未选择列表
        list = this.getListByIdOrName(str, util.target);
        if (list) {
          list = list.value;
          type = "list";
        } else {
          // 没找到列表，尝试解析JSON
          try {
            let parsed;
            if (SafeObject) {
              parsed = SafeObject.parse(str);
              parsed = SafeObject.getActualObject(parsed);
            } else {
              parsed = JSON.parse(str);
              Object.entries(parsed).forEach(([key, value]) => {
                if (typeof value === "object") {
                  parsed[key] = JSON.stringify(value);
                }
              });
            }
            if (typeof parsed !== "object" || parsed === null) return;
            list = parsed;
            type = Array.isArray(parsed) ? "list" : "obj";
          } catch (e) {
            return;
          }
        }
      }
      if (type === "obj") {
        stackFrame.keys = Object.keys(list);
        stackFrame.n = stackFrame.keys.length;
      } else {
        stackFrame.n = list.length;
      }
      stackFrame.loopCounter = 1;
      stackFrame.list = list;
      stackFrame.type = type;
      stackFrame.varName = Cast.toString(VAR);
      stackFrame.idxName = Cast.toString(I);
    } else {
      stackFrame.loopCounter += 1;
      list = stackFrame.list;
      type = stackFrame.type;
    }
    if (stackFrame.loopCounter > stackFrame.n) {
      return;
    }
    const idx = stackFrame.loopCounter - 1;
    const vars = this._getOrInitScopeVars(util.thread, 0);
    if (type === "obj") {
      const prop = stackFrame.keys[idx];
      vars[stackFrame.idxName] = prop;
      vars[stackFrame.varName] = toSafeObject(list[prop]) ?? "";
    } else {
      vars[stackFrame.idxName] = idx + 1;
      vars[stackFrame.varName] = toSafeObject(list[idx]) ?? "";
    }
    util.startBranch(1, true);
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
