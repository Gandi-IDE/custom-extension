// 基于Nights/FurryR/zxq的可扩展积木
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/* eslint-disable max-classes-per-file */

import rightArrow from './assets/arrow_right.svg';
import leftArrow from './assets/arrow_left.svg';

/**
 * Label options for different input types.
 * @type {{s: string, n: string, b: string}}
 */
const INPUT_TYPES_OPTIONS_LABEL = {
  s: 'ADD_TEXT_PARAMETER',
  n: 'ADD_NUM_PARAMETER',
  b: 'ADD_BOOL_PARAMETER',
};

const minusButton =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAw' +
  'MC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPS' +
  'JNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAw' +
  'IDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K';

const plusButton =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC' +
  '9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT' +
  'ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz' +
  'FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW' +
  'MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS' +
  '44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==';

const defaultPlusSelectImage =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA1NCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI1MyIgaGVpZ2h0PSIzMSIgcng9IjE1LjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjIiLz4KPHBhdGggZD0iTTE3Ljk5OTggMTAuMTY0MVYyMS44MzA3TTEyLjE2NjUgMTUuOTk3NEgyMy44MzMyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzkuNzYzOCAxOC44Mzg2QzM5LjMyNTQgMTkuMjE4MiAzOC42NzQ2IDE5LjIxODIgMzguMjM2MiAxOC44Mzg2TDM1LjMwMzMgMTYuMjk4NkMzNC40ODY4IDE1LjU5MTQgMzQuOTg2OSAxNC4yNSAzNi4wNjcxIDE0LjI1TDQxLjkzMjkgMTQuMjVDNDMuMDEzMSAxNC4yNSA0My41MTMyIDE1LjU5MTQgNDIuNjk2NyAxNi4yOTg2TDM5Ljc2MzggMTguODM4NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=';

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
    ADD_TEXT_PARAMETER: 'Add Text Parameter',
    ADD_NUM_PARAMETER: 'Add Num Parameter',
    ADD_BOOL_PARAMETER: 'Add Booln Parameter',
    DELETE_DYNAMIC_PARAMETER: 'Delete Dynamic Parameter',
  });

  Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
    ADD_TEXT_PARAMETER: '添加文本参数',
    ADD_NUM_PARAMETER: '添加数字参数',
    ADD_BOOL_PARAMETER: '添加布尔值参数',
    DELETE_DYNAMIC_PARAMETER: '删除动态参数',
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
  if (plusImage === '+') {
    plusImage = plusButton;
    w = 18;
    h = 18;
    size = 0.7;
  }
  if (minusImage === '-') {
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
        this.getSvgRoot().style.cursor = 'pointer';
        Blockly.bindEventWithChecks_(this.getSvgRoot(), 'mousedown', this, (e) => {
          // Prevent event bubbling, otherwise clicking the button will execute the block (clicking the button).
          e.stopPropagation();
        });
        Blockly.bindEventWithChecks_(this.getSvgRoot(), 'mouseup', this, this.handleClick.bind(this));
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
  const { fm, PlusSelectButton, PlusButton, MinusButton } = dynamicArgInfo.extInfo;
  const Blockly = getScratchBlocks(runtime);

  /**
   * Retrieves the formatted text from a text or function.
   * @param {undefined|string|function} text - The text or function to format.
   * @param {*} i - The index to pass to the function.
   * @returns {string} The formatted text.
   */
  function getFmText(text, i) {
    if (!text) return '';
    return typeof text === 'function' ? text(i) : fm(text);
  }

  const moveButtonToTheRightPlace = function () {
    // this.moveInputBefore('PLUS', null);
    const { afterArg } = this.dynamicArgInfo_;
    if (afterArg) {
      this.moveInputBefore('PLUS', afterArg);
      this.moveInputBefore(afterArg, 'PLUS');
    } else {
      this.moveInputBefore('PLUS', null);
    }
    if (this.getInput('ENDTEXT')) this.moveInputBefore('ENDTEXT', 'PLUS');
    const cnt = this.dynamicArgumentTypes_.length;
    if (cnt === 0) {
      this.removeInput('MINUS');
    } else {
      if (!this.getInput('MINUS')) this.appendDummyInput('MINUS').appendField(new MinusButton());
      // move - behind +
      this.moveInputBefore('MINUS', 'PLUS');
      // this.moveInputBefore('PLUS', 'MINUS');
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
    const endTxt = getFmText(endText, 0);
    if (endTxt !== '') this.appendDummyInput('ENDTEXT').appendField(endTxt, 'ENDTEXT');
    this.appendDummyInput('PLUS').appendField(this.plusButton_);
    // 将 + 按钮移到 afterArg 后面
    if (afterArg) {
      const plusInput = this.getInput('PLUS');
      const endTxtInput = this.getInput('ENDTEXT');
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
    this.dynamicArgumentIds_.forEach((id, idx) => {
      const element = document.createElement('div');
      element.innerText = `${Blockly.ScratchMsgs.translate('DELETE_DYNAMIC_PARAMETER')} ${idx + 1}`;
      const input = this.inputList.find((i) => i.name === id);
      const pathElement = input.connection.targetConnection
        ? input.connection.targetConnection.sourceBlock_.svgPath_
        : input.outlinePath;
      element.addEventListener('mouseenter', () => {
        const replacementGlowFilterId =
          this.workspace.options.replacementGlowFilterId || 'blocklyReplacementGlowFilter';
        pathElement.setAttribute('filter', `url(#${replacementGlowFilterId})`);
      });
      element.addEventListener('mouseleave', () => {
        pathElement.removeAttribute('filter');
      });
      contextMenu.push({
        text: element,
        enabled: true,
        callback: () => {
          pathElement.removeAttribute('filter');
          this.removeDynamicArg(id);
        },
      });
    });
  };

  blockDefinition.attachShadow_ = function (input, argumentType, defaultValue = '') {
    if (argumentType === 'n' || argumentType === 's') {
      const blockType = argumentType === 'n' ? 'math_number' : 'text';
      Blockly.Events.disable();
      const newBlock = this.workspace.newBlock(blockType);
      try {
        if (argumentType === 'n') {
          newBlock.setFieldValue(defaultValue, 'NUM');
        } else {
          newBlock.setFieldValue(defaultValue, 'TEXT');
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
    const container = document.createElement('mutation');
    container.setAttribute('dynamicargids', JSON.stringify(this.dynamicArgumentIds_));
    container.setAttribute('dynamicargtypes', JSON.stringify(this.dynamicArgumentTypes_));
    return container;
  };

  blockDefinition.domToMutation = function (xmlElement) {
    this.dynamicArgumentIds_ = JSON.parse(xmlElement.getAttribute('dynamicargids')) || [];
    this.dynamicArgumentTypes_ = JSON.parse(xmlElement.getAttribute('dynamicargtypes')) || [];
    this.updateDisplay_();
  };

  blockDefinition.addDynamicArg = function (type) {
    const oldMutationDom = this.mutationToDom();
    const oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);

    Blockly.Events.setGroup(true);

    let index = 0;
    const lastArgName = this.dynamicArgumentIds_.slice(-1)[0];
    if (lastArgName) {
      [index] = lastArgName.match(/\d+/g);
    }

    this.dynamicArgumentIds_.push(`DYNAMIC_ARGS${Number(index) + 1}`);
    this.dynamicArgumentTypes_.push(type);
    // 对object额外增加一个参数
    if (dynamicArgInfo.type === 'getObj') {
      this.dynamicArgumentIds_.push(`DYNAMIC_ARGS${Number(index) + 2}`);
      this.dynamicArgumentTypes_.push(type);
    }
    this.updateDisplay_();

    const newMutationDom = this.mutationToDom();
    const newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);
    if (oldMutation !== newMutation) {
      Blockly.Events.fire(new Blockly.Events.BlockChange(this, 'mutation', null, oldMutation, newMutation));
    }

    Blockly.Events.setGroup(false);
  };

  blockDefinition.removeDynamicArg = function (id, removeExtra = true) {
    // object积木删除时总是额外减少一个积木
    if (removeExtra && dynamicArgInfo.type === 'getObj') {
      const matches = id.match(/^([^\d]+)(\d+)$/);
      if (matches) {
        const name = matches[1];
        const i = Number(matches[2]);
        if (i % 2 === 1) {
          this.removeDynamicArg(`${name}${i + 1}`, false);
        } else {
          this.removeDynamicArg(`${name}${i - 1}`, false);
        }
      }
    }
    Blockly.Events.setGroup(true);

    const oldMutationDom = this.mutationToDom();
    const oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);

    const idx = this.dynamicArgumentIds_.indexOf(id);
    this.dynamicArgumentIds_.splice(idx, 1);
    this.dynamicArgumentTypes_.splice(idx, 1);
    this.removeInput(id);
    this.updateDisplay_();

    const newMutationDom = this.mutationToDom();
    const newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);
    if (oldMutation !== newMutation) {
      Blockly.Events.fire(new Blockly.Events.BlockChange(this, 'mutation', null, oldMutation, newMutation));
      setTimeout(() => {
        const target = runtime.getEditingTarget();
        const block = target.blocks._blocks[this.id];
        Object.keys(block.inputs).forEach((name) => {
          if (/^DYNAMIC_ARGS\d+$/.test(name) && !this.dynamicArgumentIds_.includes(name)) {
            target.blocks.deleteBlock(block.inputs[name].shadow, {
              source: 'default',
              targetId: target.id,
            });
            delete block.inputs[name];
            if (runtime.emitTargetBlocksChanged) {
              runtime.emitTargetBlocksChanged(target.id, ['deleteInput', { id: block.id, inputName: name }]);
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
      const txt = getFmText(preText, num);
      const input = afterArg
        ? block.inputList.find((i) => i.name === afterArg) // 改afterArg前面的文本
        : block.inputList.findLast((it) => it.name !== 'PLUS' && it.name !== 'MINUS' && it.name !== 'ENDTEXT'); // 改第一个参数前的文本

      // 查找afterArg对应的参数前面的文本（Blockly.FieldLabel）
      input.fieldRow.findLast((it) => it instanceof Blockly.FieldLabel)?.setText(txt);
    }
  }


  blockDefinition.createAllDynamicArgInputs_ = function (connectionMap) {
    // Create arguments and labels as appropriate.
    const num = this.dynamicArgumentTypes_.length;
    const { endText, joinCh, joinCh2, afterArg } = this.dynamicArgInfo_;
    updatePreText(this, num);
    for (let i = 0; i < num; i++) {
      const argumentType = this.dynamicArgumentTypes_[i];
      if (!(argumentType === 'n' || argumentType === 'b' || argumentType === 's')) {
        throw new Error(`Found an dynamic argument with an invalid type: ${argumentType}`);
      }

      const id = this.dynamicArgumentIds_[i];
      const input = this.appendValueInput(id);
      // 增加参数间的分隔符
      // Add a separator character before the argument, eg. ","
      if (joinCh && (i !== 0 || afterArg)) {
        if (joinCh2 && i % 2 === 1) {
          input.appendField(getFmText(joinCh2, i));
        } else {
          input.appendField(getFmText(joinCh, i));
        }
      }
      if (argumentType === 'b') {
        input.setCheck('Boolean');
      }
      this.populateArgument_(argumentType, connectionMap, id, input, i);
    }
    // 动态参数后的文本
    const txt = getFmText(endText, num);
    if (txt === '') {
      this.removeInput('ENDTEXT', true); // 删除ENDTEXT输入
    } else {
      // console.log(endTxtInput.fieldRow);
      const field = this.getField('ENDTEXT');
      if (field) field.setValue(txt);
      else this.appendDummyInput('ENDTEXT').appendField(txt, 'ENDTEXT');
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
      const { type: blockType, defaultValues } = this.dynamicArgInfo_;
      if (blockType === 'ndList') return Math.max(3, 4 - i);
      let values = fm(defaultValues).split(',');
      if (blockType === 'getProp' || blockType === 'addItem') return values[0];
      if (blockType === 'getObj') values = values.map((v) => v.split('='));
      const len = values.length;
      if (blockType === 'getObj') {
        const idx = Math.floor(i / 2);
        if (idx > len - 1) {
          return `${values[len - 1][i % 2]}${idx - len + 2}`;
        }
        return values[idx][i % 2];
      }
      if (i > len - 1) {
        return `${getDefaultValue(id, len - 1)}${i - len + 2}`;
      }
      return values[i];
    };

    if (connectionMap && oldBlock) {
      // Reattach the old block and shadow DOM.
      connectionMap[input.name] = null;
      oldBlock.outputConnection.connect(input.connection);
      if (type !== 'b') {
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

/**
 * Initializes expandable blocks for a given extension.
 * @param {Object} extension - The extension object.
 * @param {Function} fm - FormatMessage function.
 * @param {string} plusImage - The image data for the plus button.
 * @param {string} minusImage - The image data for the minus button.
 */
function initExpandableBlocks(extension, fm, plusImage = rightArrow, minusImage = leftArrow) {
  const { runtime } = extension;
  const { id, blocks: blocksInfo } = extension.getInfo();
  // 创建按钮
  const Blockly = getScratchBlocks(runtime);
  const { PlusSelectButton, PlusButton, MinusButton } = createButtons(Blockly, plusImage, minusImage);
  // 注册扩展信息
  extInfo[id] = { id, fm, PlusSelectButton, PlusButton, MinusButton };
  blocksInfo.forEach((i) => {
    if (i.dynamicArgsInfo) {
      const { dynamicArgsInfo } = i;
      dynamicArgsInfo.dynamicArgTypes = dynamicArgsInfo.dynamicArgTypes || ['s'];
      dynamicArgsInfo.extInfo = extInfo[id];
      enabledDynamicArgBlocksInfo[`${id}_${i.opcode}`] = dynamicArgsInfo;
    }
  });
  proxyBlocklyBlocksObject(runtime);
}

export default initExpandableBlocks;
