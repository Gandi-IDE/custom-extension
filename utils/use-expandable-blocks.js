// 基于Nights/FurryR/zxq的可扩展积木
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/* eslint-disable max-classes-per-file */

/**
 * Label options for different input types.
 * @type {{s: string, n: string, b: string}}
 */
const INPUT_TYPES_OPTIONS_LABEL = {
  s: "ADD_TEXT_PARAMETER",
  n: "ADD_NUM_PARAMETER",
  b: "ADD_BOOL_PARAMETER",
};

const leftArrow =
  "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNi4zMzU2MSIgaGVpZ2h0PSI0Ni42NjgzOSIgdmlld0JveD0iMCwwLDI2LjMzNTYxLDQ2LjY2ODM5Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzA2LjgzMjIsLTE1Ni42NjU4KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTMyOC4wNDY4LDIwMi40NTcyNWwtMjAuMzM1NSwtMjAuMzM3Yy0wLjU2Mjg3LC0wLjU2MjY0IC0wLjg3OTExLC0xLjMyNTg5IC0wLjg3OTExLC0yLjEyMTc1YzAsLTAuNzk1ODYgMC4zMTYyNCwtMS41NTkxMSAwLjg3OTExLC0yLjEyMTc1bDIwLjMzNTUsLTIwLjMzMjVjMC44NTc5OCwtMC44NTc3MiAyLjE0ODExLC0xLjExNDI3IDMuMjY4OTYsLTAuNjUwMDNjMS4xMjA4NSwwLjQ2NDIzIDEuODUxNzgsMS41NTc4NSAxLjg1MjA0LDIuNzcxMDN2NDAuNjY5NWMtMC4wMDAyNiwxLjIxMzE5IC0wLjczMTE4LDIuMzA2OCAtMS44NTIwNCwyLjc3MTAzYy0xLjEyMDg1LDAuNDY0MjMgLTIuNDEwOTgsMC4yMDc2OSAtMy4yNjg5NiwtMC42NTAwM3oiLz48L2c+PC9nPjwvc3ZnPg==";

const rightArrow =
  "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNi4zMzU2MSIgaGVpZ2h0PSI0Ni42NjgzOSIgdmlld0JveD0iMCwwLDI2LjMzNTYxLDQ2LjY2ODM5Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzA2LjgzMjE5LC0xNTYuNjY1ODEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMzExLjk1MzE5LDIwMi40NTU3NWMtMC44NTc5OCwwLjg1NzcyIC0yLjE0ODExLDEuMTE0MjYgLTMuMjY4OTYsMC42NTAwM2MtMS4xMjA4NiwtMC40NjQyMyAtMS44NTE3OCwtMS41NTc4NCAtMS44NTIwNCwtMi43NzEwM3YtNDAuNjY5NWMwLjAwMDI2LC0xLjIxMzE4IDAuNzMxMTksLTIuMzA2OCAxLjg1MjA0LC0yLjc3MTAzYzEuMTIwODUsLTAuNDY0MjQgMi40MTA5OCwtMC4yMDc2OSAzLjI2ODk2LDAuNjUwMDNsMjAuMzM1NSwyMC4zMzI1YzAuNTYyODcsMC41NjI2NCAwLjg3OTExLDEuMzI1ODkgMC44NzkxMSwyLjEyMTc1YzAsMC43OTU4NiAtMC4zMTYyNCwxLjU1OTExIC0wLjg3OTExLDIuMTIxNzVsLTIwLjMzNTUsMjAuMzM3eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48L2c+PC9nPjwvc3ZnPg==";

const minusButton =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAw" +
  "MC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPS" +
  "JNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAw" +
  "IDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K";

const plusButton =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC" +
  "9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT" +
  "ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz" +
  "FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW" +
  "MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS" +
  "44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==";

const defaultPlusSelectImage =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA1NCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI1MyIgaGVpZ2h0PSIzMSIgcng9IjE1LjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjIiLz4KPHBhdGggZD0iTTE3Ljk5OTggMTAuMTY0MVYyMS44MzA3TTEyLjE2NjUgMTUuOTk3NEgyMy44MzMyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzkuNzYzOCAxOC44Mzg2QzM5LjMyNTQgMTkuMjE4MiAzOC42NzQ2IDE5LjIxODIgMzguMjM2MiAxOC44Mzg2TDM1LjMwMzMgMTYuMjk4NkMzNC40ODY4IDE1LjU5MTQgMzQuOTg2OSAxNC4yNSAzNi4wNjcxIDE0LjI1TDQxLjkzMjkgMTQuMjVDNDMuMDEzMSAxNC4yNSA0My41MTMyIDE1LjU5MTQgNDIuNjk2NyAxNi4yOTg2TDM5Ljc2MzggMTguODM4NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";

/**
 * A record of enabled dynamic argument blocks.
 * @type {Object}
 */
const enabledDynamicArgBlocksInfo = {};
const extInfo = {};

let proxingBlocklyBlocks = false;

/**
 * By FurryR
 * Hijacks the Function.prototype.apply method.
 * @param {Function} fn - The function to execute while the apply method is hijacked.
 * @returns {*} The result of the function execution.
 */
function hijack(fn) {
  const _orig = Function.prototype.apply;
  // eslint-disable-next-line no-extend-native
  Function.prototype.apply = (thisArg) => thisArg;
  const result = fn();
  // eslint-disable-next-line no-extend-native
  Function.prototype.apply = _orig;
  return result;
}

/**
 * Retrieves the event listener from an event object.
 * @param {Event|Event[]} e - The event object or array of event objects.
 * @returns {Event} The event listener.
 */
function getEventListener(e) {
  return e instanceof Array ? e[e.length - 1] : e;
}

/**
 * Retrieves ScratchBlocks from the runtime or window object.
 * @param {Runtime} runtime - The runtime object.
 * @returns {Object} The ScratchBlocks object.
 */
function getScratchBlocks(runtime) {
  // In Gandi, ScratchBlocks can be accessed from the runtime.
  // In TW, ScratchBlocks can be directly accessed from the window.
  return (
    runtime.scratchBlocks ||
    window.ScratchBlocks ||
    hijack(getEventListener(runtime._events.EXTENSION_ADDED))?.ScratchBlocks
  );
}

/**
 * Sets localization messages for Blockly.
 * @param {Blockly} Blockly - The Blockly object.
 */
function setLocales(Blockly) {
  Object.assign(Blockly.ScratchMsgs.locales.en, {
    ADD_TEXT_PARAMETER: "Add Text Parameter",
    ADD_NUM_PARAMETER: "Add Num Parameter",
    ADD_BOOL_PARAMETER: "Add Booln Parameter",
    DELETE_DYNAMIC_PARAMETER: "Delete Dynamic Parameter",
  });

  Object.assign(Blockly.ScratchMsgs.locales["zh-cn"], {
    ADD_TEXT_PARAMETER: "添加文本参数",
    ADD_NUM_PARAMETER: "添加数字参数",
    ADD_BOOL_PARAMETER: "添加布尔值参数",
    DELETE_DYNAMIC_PARAMETER: "删除动态参数",
  });
}

/**
 * Translates a key using Blockly's translation messages.
 * @param {Blockly} Blockly - The Blockly object.
 * @param {string} key - The key to translate.
 * @returns {string} The translated string.
 */
function translate(Blockly, key) {
  return Blockly.ScratchMsgs.translate(key);
}

/**
 * Creates custom buttons for Blockly blocks.
 * @param {Blockly} Blockly - The Blockly object.
 * @returns {Object} An object containing custom button classes.
 */
function createButtons(Blockly, plusImage = rightArrow, minusImage = leftArrow) {
  let w = 25;
  let h = 47;
  let size = 0.35;
  if (plusImage === "+") {
    plusImage = plusButton;
    w = 18;
    h = 18;
    size = 0.7;
  }
  if (minusImage === "-") {
    minusImage = minusButton;
    w = 18;
    h = 18;
    size = 0.7;
  }
  class FieldButton extends Blockly.FieldImage {
    constructor(src, width = w * size, height = h * size) {
      super(src, width, height, undefined, false);
      this.initialized = false;
    }

    init() {
      super.init();

      if (!this.initialized) {
        this.getSvgRoot().style.cursor = "pointer";
        Blockly.bindEventWithChecks_(this.getSvgRoot(), "mousedown", this, (e) => {
          // Prevent event bubbling, otherwise clicking the button will execute the block (clicking the button).
          e.stopPropagation();
        });
        Blockly.bindEventWithChecks_(this.getSvgRoot(), "mouseup", this, this.handleClick.bind(this));
      }
      this.initialized = true;
    }

    handleClick(e) {
      if (!this.sourceBlock_ || !this.sourceBlock_.workspace) return;
      if (this.sourceBlock_.workspace.isDragging()) return;
      if (this.sourceBlock_.isInFlyout) return;
      this.onClick(e);
    }

    onClick() {
      // Implemented by subclass
    }
  }
  // (+ ▽) Optional button for adding new types
  class PlusSelectButton extends FieldButton {
    constructor() {
      super(defaultPlusSelectImage, 54, 32);
    }

    onClick(e) {
      const menuOptions = this.sourceBlock_.dynamicArgOptionalTypes_.map((i) => ({
        text: translate(Blockly, INPUT_TYPES_OPTIONS_LABEL[i]),
        enabled: true,
        callback: () => {
          this.sourceBlock_.addDynamicArg(i);
        },
      }));
      Blockly.ContextMenu.show(e, menuOptions, false);
    }
  }
  // + button
  class PlusButton extends FieldButton {
    constructor() {
      super(plusImage);
    }

    onClick() {
      this.sourceBlock_.addDynamicArg(this.sourceBlock_.dynamicArgOptionalTypes_[0]);
    }
  }
  // - button
  class MinusButton extends FieldButton {
    constructor() {
      super(minusImage);
    }

    onClick() {
      const { dynamicArgumentIds_ } = this.sourceBlock_;
      this.sourceBlock_.removeDynamicArg(dynamicArgumentIds_[dynamicArgumentIds_.length - 1]);
    }
  }
  return {
    PlusSelectButton,
    PlusButton,
    MinusButton,
  };
}

/**
 * Proxies the Blockly Blocks object to enable dynamic argument blocks.
 * @param {Runtime} runtime - The runtime object.
 */
function proxyBlocklyBlocksObject(runtime) {
  if (proxingBlocklyBlocks) return;
  proxingBlocklyBlocks = true;
  const Blockly = getScratchBlocks(runtime);
  if (!Blockly) return;
  setLocales(Blockly);
  Blockly.Blocks = new Proxy(Blockly.Blocks, {
    set(target, opcode, blockDefinition) {
      if (Object.prototype.hasOwnProperty.call(enabledDynamicArgBlocksInfo, opcode)) {
        initExpandableBlock(runtime, blockDefinition, enabledDynamicArgBlocksInfo[opcode]);
      }
      return Reflect.set(target, opcode, blockDefinition);
    },
  });
}

/**
 * Initializes an expandable block with dynamic arguments.
 * @param {Runtime} runtime - The runtime object.
 * @param {Object} blockDefinition - The block definition.
 * @param {string[]} dynamicArgInfo - The dynamic argument types.
 */
function initExpandableBlock(runtime, blockDefinition, dynamicArgInfo) {
  const { PlusSelectButton, PlusButton, MinusButton } = dynamicArgInfo.extInfo;
  const Blockly = getScratchBlocks(runtime);

  /**
   * Get value of function/array or the value itself.
   * @param {*} value - value/function/array
   * @param {*} i - The index to pass to the function/array
   * @param {*} defaultValue - (optional) The default value. (if value is undefined)
   * @param {*} valueWhenOutOfRange - (optional) The value when the index is out of range.
   * @returns {*} The result.
   */
  function getValue(value, i, defaultValue, valueWhenOutOfRange) {
    if (value === undefined) return defaultValue;
    if (Array.isArray(value)) {
      if (i < value.length) return value[i];
      if (valueWhenOutOfRange !== undefined) return valueWhenOutOfRange;
      return value[value.length - 1];
    }
    return typeof value === "function" ? value(i) : value;
  }

  /**
   * 第 i 次（从0开始）点击 + 按钮增加的参数数量，默认 1。越界时返回 0
   * @param {number} i
   * @returns
   */
  function getParamsIncPerClick(i) {
    return getValue(this.dynamicArgInfo_.paramsIncrement, i, 1, 0);
  }

  /**
   * 根据参数数量，计算点了几次 + 按钮的次数
   * @param {number} num 参数数量
   */
  function getAddClickCount(num) {
    let sum = 0;
    let i = 0;
    while (sum < num) {
      const inc = getParamsIncPerClick.call(this, i);
      if (inc === 0) throw new Error(`Unreachable param num`); // 无法到达的参数数量
      sum += inc;
      i++;
    }
    return i;
  }

  /**
   * 计算某个编号的参数所属组的索引数组
   * @param {number} num 参数编号
   * @returns {Array<number>}
   */
  function getParamsGroupindexes(num) {
    let sum = 0;
    let i = 0;
    let inc = 0;
    while (sum < num) {
      inc = getParamsIncPerClick.call(this, i);
      if (inc === 0) throw new Error(`Unreachable param num`); // 无法到达的参数数量
      sum += inc;
      i++;
    }
    sum -= inc;
    return Array.from({ length: inc }, (_, j) => sum + j + 1);
  }

  /**
   * 计算下一次点击 + 按钮增加的参数数量
   * @returns
   */
  function getNextParamInc() {
    return getParamsIncPerClick.call(this, getAddClickCount.call(this, this.dynamicArgumentTypes_.length));
  }

  const moveButtonToTheRightPlace = function () {
    // this.moveInputBefore('PLUS', null);
    const showPlus = getNextParamInc.call(this) > 0; // 是否显示 +
    if (showPlus) {
      this.getInput("PLUS").setVisible(true);
      // + 按钮不存在，创建
      // if (!this.getInput('PLUS')) this.appendDummyInput('PLUS').appendField(new PlusButton());
      // 调整 + 按钮位置
      const { afterArg } = this.dynamicArgInfo_;
      if (afterArg) {
        this.moveInputBefore("PLUS", afterArg);
        this.moveInputBefore(afterArg, "PLUS");
      } else {
        this.moveInputBefore("PLUS", null);
      }
    } else {
      // 删除 + 按钮
      this.getInput("PLUS").setVisible(false);
      // this.removeInput('PLUS', true);
    }
    if (this.getInput("ENDTEXT")) this.moveInputBefore("ENDTEXT", "PLUS");
    const cnt = this.dynamicArgumentTypes_.length;
    if (cnt === 0) {
      // 删除 - 按钮
      this.removeInput("MINUS");
    } else {
      if (!this.getInput("MINUS")) this.appendDummyInput("MINUS").appendField(new MinusButton());
      // 调整 - 按钮位置
      this.moveInputBefore("MINUS", "PLUS");
    }
  };

  const orgInit = blockDefinition.init;
  blockDefinition.init = function () {
    orgInit.call(this);

    this.dynamicArgumentIds_ = [];
    this.dynamicArgumentTypes_ = [];
    this.dynamicArgInfo_ = dynamicArgInfo;
    this.dynamicArgOptionalTypes_ = dynamicArgInfo.dynamicArgTypes;
    this.plusButton_ = dynamicArgInfo.dynamicArgTypes.length > 1 ? new PlusSelectButton() : new PlusButton();
    this.minusButton_ = new MinusButton();

    const { afterArg, endText } = dynamicArgInfo;
    updatePreText(this, 0);
    const endTxt = getValue(endText, 0, "");
    if (endTxt !== "") this.appendDummyInput("ENDTEXT").appendField(endTxt, "ENDTEXT");
    this.appendDummyInput("PLUS").appendField(this.plusButton_);
    // 将 + 按钮移到 afterArg 后面
    if (afterArg) {
      const plusInput = this.getInput("PLUS");
      const endTxtInput = this.getInput("ENDTEXT");
      const afterArgInput = this.getInput(afterArg);
      const plusIndex = this.inputList.indexOf(plusInput);
      const endTxtIndex = this.inputList.indexOf(endTxtInput);
      const afterArgIndex = this.inputList.indexOf(afterArgInput);
      if (plusIndex > -1 && afterArgIndex > -1) {
        // 删除 PLUS 输入
        this.inputList.splice(plusIndex, 1);
        // 插入 PLUS 输入到 afterArg 后面
        this.inputList.splice(afterArgIndex + 1, 0, plusInput);
        if (endTxtIndex > -1) {
          this.inputList.splice(endTxtIndex, 1);
          this.inputList.splice(afterArgIndex + 1, 0, endTxtInput);
        }
      }
    }
  };

  // Supports deleting specified parameters with right-click
  blockDefinition.customContextMenu = function (contextMenu) {
    this.dynamicArgOptionalTypes_.forEach((i) =>
      contextMenu.push({
        text: translate(Blockly, INPUT_TYPES_OPTIONS_LABEL[i]),
        enabled: true,
        callback: () => {
          this.addDynamicArg(i);
        },
      })
    );

    // 右键删除有bug，暂时不使用
    // 是否允许右键删除
    // const allowDelete = this.dynamicArgInfo_.allowDeleteByRightClickMenu ?? true; // 默认 true
    // if (allowDelete) {
    //   const len = this.dynamicArgumentIds_.length;
    //   let sum = 0;
    //   let i = 0;
    //   let inc = 0;
    //   const args = [];
    //   while (sum < len) {
    //     inc = getParamsIncPerClick.call(this, i);
    //     sum += inc;
    //     if (sum <= len) args.push(this.dynamicArgumentIds_[sum - 1]);
    //     i++;
    //   }

    //   args.forEach((id, idx) => {
    //     const element = document.createElement('div');
    //     element.innerText = `${Blockly.ScratchMsgs.translate('DELETE_DYNAMIC_PARAMETER')} ${idx + 1}`;

    //     const matches = id.match(/^([^\d]+)(\d+)$/);
    //     const name = matches[1];
    //     const i = Number(matches[2]);
    //     const ids = getParamsGroupindexes.call(this, i).map((it) => `${name}${it}`);
    //     const elems = [];
    //     this.inputList
    //       .filter((it) => ids.includes(it.name))
    //       .forEach((input) => {
    //         const pathElement = input.connection.targetConnection
    //           ? input.connection.targetConnection.sourceBlock_.svgPath_
    //           : input.outlinePath;
    //         element.addEventListener('mouseenter', () => {
    //           const replacementGlowFilterId =
    //             this.workspace.options.replacementGlowFilterId || 'blocklyReplacementGlowFilter';
    //           pathElement.setAttribute('filter', `url(#${replacementGlowFilterId})`);
    //         });
    //         element.addEventListener('mouseleave', () => {
    //           pathElement.removeAttribute('filter');
    //         });
    //         elems.push(pathElement);
    //       });
    //     contextMenu.push({
    //       text: element,
    //       enabled: true,
    //       callback: () => {
    //         elems.forEach((it) => it.removeAttribute('filter'));
    //         this.removeDynamicArg(id);
    //       },
    //     });
    //   });
    // }
  };

  blockDefinition.attachShadow_ = function (input, argumentType, defaultValue = "") {
    if (argumentType === "n" || argumentType === "s") {
      const blockType = argumentType === "n" ? "math_number" : "text";
      Blockly.Events.disable();
      const newBlock = this.workspace.newBlock(blockType);
      try {
        if (argumentType === "n") {
          newBlock.setFieldValue(defaultValue, "NUM");
        } else {
          newBlock.setFieldValue(defaultValue, "TEXT");
        }
        newBlock.setShadow(true);
        if (!this.isInsertionMarker()) {
          newBlock.initSvg();
          newBlock.render(false);
        }
      } finally {
        Blockly.Events.enable();
      }
      if (Blockly.Events.isEnabled()) {
        Blockly.Events.fire(new Blockly.Events.BlockCreate(newBlock));
      }
      newBlock.outputConnection.connect(input.connection);
    }
  };

  blockDefinition.mutationToDom = function () {
    const container = document.createElement("mutation");
    container.setAttribute("dynamicargids", JSON.stringify(this.dynamicArgumentIds_));
    container.setAttribute("dynamicargtypes", JSON.stringify(this.dynamicArgumentTypes_));
    return container;
  };

  blockDefinition.domToMutation = function (xmlElement) {
    this.dynamicArgumentIds_ = JSON.parse(xmlElement.getAttribute("dynamicargids")) || [];
    this.dynamicArgumentTypes_ = JSON.parse(xmlElement.getAttribute("dynamicargtypes")) || [];
    this.updateDisplay_();
  };

  blockDefinition.addDynamicArg = function (type) {
    const oldMutationDom = this.mutationToDom();
    const oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);

    Blockly.Events.setGroup(true);

    let index = 0;
    const lastArgName = this.dynamicArgumentIds_.slice(-1)[0];
    if (lastArgName) {
      // 获取最后一个参数的索引
      [index] = lastArgName.match(/\d+/g);
    }
    index = Number(index);

    // 计算本次点击增加的参数数量
    const cnt = getNextParamInc.call(this);
    for (let i = 0; i < cnt; i++) {
      this.dynamicArgumentIds_.push(`DYNAMIC_ARGS${index + i + 1}`);
      this.dynamicArgumentTypes_.push(type);
    }
    this.updateDisplay_();

    const newMutationDom = this.mutationToDom();
    const newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);
    if (oldMutation !== newMutation) {
      Blockly.Events.fire(new Blockly.Events.BlockChange(this, "mutation", null, oldMutation, newMutation));
    }

    Blockly.Events.setGroup(false);
  };

  /**
   * 根据id删除动态积木（同时成组删除关联的其他参数）
   * @param {string} id 参数id
   */
  blockDefinition.removeDynamicArg = function (id) {
    Blockly.Events.setGroup(true);

    const oldMutationDom = this.mutationToDom();
    const oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);

    const matches = id.match(/^([^\d]+)(\d+)$/);
    const name = matches[1];
    // 当前动态参数序号
    const i = Number(matches[2]);
    // 查找要移除的参数的索引数组
    const paramsToRemove = getParamsGroupindexes.call(this, i);
    // 移除参数组的每个参数
    paramsToRemove.forEach((it) => {
      const curId = `${name}${it}`;
      const idx = this.dynamicArgumentIds_.indexOf(curId);
      this.dynamicArgumentIds_.splice(idx, 1);
      this.dynamicArgumentTypes_.splice(idx, 1);
      this.removeInput(curId);
    });

    // 更新显示
    this.updateDisplay_();

    const newMutationDom = this.mutationToDom();
    const newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);
    if (oldMutation !== newMutation) {
      Blockly.Events.fire(new Blockly.Events.BlockChange(this, "mutation", null, oldMutation, newMutation));
      setTimeout(() => {
        const target = runtime.getEditingTarget();
        const block = target.blocks._blocks[this.id];
        Object.keys(block.inputs).forEach((name) => {
          // 对于每个被删除的动态参数
          if (/^DYNAMIC_ARGS\d+$/.test(name) && !this.dynamicArgumentIds_.includes(name)) {
            target.blocks.deleteBlock(block.inputs[name].shadow, {
              source: "default",
              targetId: target.id,
            });
            delete block.inputs[name];
            if (runtime.emitTargetBlocksChanged) {
              runtime.emitTargetBlocksChanged(target.id, ["deleteInput", { id: block.id, inputName: name }]);
            }
          }
        });
      }, 0);
    }

    Blockly.Events.setGroup(false);
  };

  blockDefinition.updateDisplay_ = function () {
    const wasRendered = this.rendered;
    this.rendered = false;

    const connectionMap = this.disconnectDynamicArgBlocks_();
    this.removeAllDynamicArgInputs_();

    this.createAllDynamicArgInputs_(connectionMap);
    this.deleteShadows_(connectionMap);

    this.rendered = wasRendered;
    if (wasRendered && !this.isInsertionMarker()) {
      this.initSvg();
      this.render();
    }
  };

  blockDefinition.disconnectDynamicArgBlocks_ = function () {
    // Remove old stuff
    const connectionMap = {};
    for (let i = 0; this.inputList[i]; i++) {
      const input = this.inputList[i];
      if (input.connection && /^DYNAMIC_ARGS\d+$/.test(input.name)) {
        const target = input.connection.targetBlock();
        const saveInfo = {
          shadow: input.connection.getShadowDom(),
          block: target,
        };
        connectionMap[input.name] = saveInfo;

        // Remove the shadow DOM, then disconnect the block.  Otherwise a shadow
        // block will respawn instantly, and we'd have to remove it when we remove
        // the input.
        input.connection.setShadowDom(null);
        if (target) {
          input.connection.disconnect();
        }
      }
    }
    return connectionMap;
  };

  blockDefinition.removeAllDynamicArgInputs_ = function () {
    // Delete inputs directly instead of with block.removeInput to avoid splicing
    // out of the input list at every index.
    const inputList = [];
    for (let i = 0; this.inputList[i]; i++) {
      const input = this.inputList[i];
      if (/^DYNAMIC_ARGS\d+$/.test(input.name)) {
        input.dispose();
      } else {
        inputList.push(input);
      }
    }
    this.inputList = inputList;
  };

  function updatePreText(block, num) {
    const { preText, afterArg } = block.dynamicArgInfo_;
    if (preText) {
      // 动态参数前的文本修改为 preText
      // console.log(this.inputList);
      const txt = getValue(preText, num, "");
      const input = afterArg
        ? block.inputList.find((i) => i.name === afterArg) // 改afterArg前面的文本
        : block.inputList.findLast((it) => it.name !== "PLUS" && it.name !== "MINUS" && it.name !== "ENDTEXT"); // 改第一个参数前的文本

      // 查找afterArg对应的参数前面的文本（Blockly.FieldLabel）
      input.fieldRow.findLast((it) => it instanceof Blockly.FieldLabel)?.setText(txt);
    }
  }

  blockDefinition.createAllDynamicArgInputs_ = function (connectionMap) {
    // Create arguments and labels as appropriate.
    const num = this.dynamicArgumentTypes_.length;
    const { endText, joinCh, afterArg } = this.dynamicArgInfo_;
    updatePreText(this, num);
    for (let i = 0; i < num; i++) {
      const argumentType = this.dynamicArgumentTypes_[i];
      if (!(argumentType === "n" || argumentType === "b" || argumentType === "s")) {
        throw new Error(`Found an dynamic argument with an invalid type: ${argumentType}`);
      }

      const id = this.dynamicArgumentIds_[i];
      const input = this.appendValueInput(id);
      // 增加参数间的分隔符
      // Add a separator character before the argument, eg. ","
      if (joinCh && (i !== 0 || afterArg)) {
        input.appendField(getValue(joinCh, i, ""));
      }
      if (argumentType === "b") {
        input.setCheck("Boolean");
      }
      this.populateArgument_(argumentType, connectionMap, id, input, i);
    }
    // 动态参数后的文本
    const txt = getValue(endText, num, "");
    if (txt === "") {
      this.removeInput("ENDTEXT", true); // 删除ENDTEXT输入
    } else {
      // console.log(endTxtInput.fieldRow);
      const field = this.getField("ENDTEXT");
      if (field) field.setValue(txt);
      else this.appendDummyInput("ENDTEXT").appendField(txt, "ENDTEXT");
    }
    // Move the + and - buttons to the far right.
    moveButtonToTheRightPlace.call(this);
    // 将动态参数移到某个特定参数之后
    if (afterArg) {
      const cnt = this.dynamicArgumentTypes_.length;
      for (let i = cnt - 1; i >= 0; i--) {
        const id = this.dynamicArgumentIds_[i];
        this.moveInputBefore(id, afterArg);
        this.moveInputBefore(afterArg, id);
      }
    }
  };

  blockDefinition.populateArgument_ = function (type, connectionMap, id, input, i) {
    let oldBlock = null;
    let oldShadow = null;
    if (connectionMap && id in connectionMap) {
      const saveInfo = connectionMap[id];
      oldBlock = saveInfo.block;
      oldShadow = saveInfo.shadow;
    }

    const getDefaultValue = (id, i) => {
      const { defaultValues } = this.dynamicArgInfo_;
      const type = typeof defaultValues;
      if (type === "function") return defaultValues(i, id);
      if (Array.isArray(defaultValues)) {
        const len = defaultValues.length;
        if (i < len - 1) return defaultValues[i];
        if (i === len - 1) return defaultValues[len - 1];
        return `${defaultValues[len - 1]}${i - len + 2}`;
      }
      return defaultValues;
    };

    if (connectionMap && oldBlock) {
      // Reattach the old block and shadow DOM.
      connectionMap[input.name] = null;
      oldBlock.outputConnection.connect(input.connection);
      if (type !== "b") {
        const shadowDom = oldShadow || this.buildShadowDom_(type);
        input.connection.setShadowDom(shadowDom);
      }
    } else {
      this.attachShadow_(input, type, getDefaultValue(id, i));
    }
  };

  blockDefinition.deleteShadows_ = Blockly.ScratchBlocks.ProcedureUtils.deleteShadows_;

  blockDefinition.buildShadowDom_ = Blockly.ScratchBlocks.ProcedureUtils.buildShadowDom_;
}

const patchSymbol = Symbol("patch");

/**
 * Initializes expandable blocks for a given extension.
 * @param {Object} extension - The extension object.
 * @param {string} plusImage - The image data for the plus button.
 * @param {string} minusImage - The image data for the minus button.
 */
function initExpandableBlocks(extension, plusImage = rightArrow, minusImage = leftArrow) {
  // 创建按钮
  const { runtime } = extension;
  const Blockly = getScratchBlocks(runtime);
  const { PlusSelectButton, PlusButton, MinusButton } = createButtons(Blockly, plusImage, minusImage);
  proxyBlocklyBlocksObject(runtime);

  if (extension[patchSymbol]) return;
  extension[patchSymbol] = true;
  const origGetInfo = extension.getInfo;
  // patch getInfo，每次调用时同时刷新最新的可扩展参数信息
  extension.getInfo = function () {
    const info = origGetInfo.call(this);
    const { id, blocks: blocksInfo } = info;
    // 注册扩展信息
    extInfo[id] = { id, PlusSelectButton, PlusButton, MinusButton };
    blocksInfo.forEach((i) => {
      // 如果积木定义了可扩展参数
      const { dynamicArgsInfo } = i;
      if (dynamicArgsInfo) {
        dynamicArgsInfo.dynamicArgTypes = dynamicArgsInfo.dynamicArgTypes || ["s"];
        dynamicArgsInfo.extInfo = extInfo[id];
        enabledDynamicArgBlocksInfo[`${id}_${i.opcode}`] = dynamicArgsInfo;
      }
    });
    return info;
  };
}

/**
 * get values of dynamic args from args
 * @param {object} args - arguments objects
 * @returns {Array} values of dynamic args
 */
function getDynamicArgs(args) {
  return Object.keys(args)
    .filter((key) => key.startsWith("DYNAMIC_ARGS"))
    .map((key) => args[key]);
}

export { getDynamicArgs, initExpandableBlocks };
