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

/**
 * A record of enabled dynamic argument blocks.
 * @type {Object}
 */
const enabledDynamicArgBlocksInfo = {};

let proxingBlocklyBlocks = false;
const blockTextPos = 2; // 积木文本位置。0 无icon积木 1小ICON（image参数） 2 有icon积木

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
function createButtons(Blockly) {
  const size = 0.55;
  const minusImage =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAw" +
    "MC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPS" +
    "JNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAw" +
    "IDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K";

  const plusImage =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC" +
    "9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT" +
    "ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz" +
    "FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW" +
    "MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS" +
    "44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==";
  // const minusImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA0MCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIzOSIgaGVpZ2h0PSIzMSIgcng9IjE1LjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjIiLz4KPHBhdGggZD0iTTE0LjE2NjUgMTZIMjUuODMzMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==';
  // const plusImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA0MCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIzOSIgaGVpZ2h0PSIzMSIgcng9IjE1LjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjIiLz4KPHBhdGggZD0iTTE5Ljk5OTggMTAuMTY0MVYyMS44MzA3TTE0LjE2NjUgMTUuOTk3NEgyNS44MzMyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K';

  const plusSelectImage =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA1NCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI1MyIgaGVpZ2h0PSIzMSIgcng9IjE1LjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjIiLz4KPHBhdGggZD0iTTE3Ljk5OTggMTAuMTY0MVYyMS44MzA3TTEyLjE2NjUgMTUuOTk3NEgyMy44MzMyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzkuNzYzOCAxOC44Mzg2QzM5LjMyNTQgMTkuMjE4MiAzOC42NzQ2IDE5LjIxODIgMzguMjM2MiAxOC44Mzg2TDM1LjMwMzMgMTYuMjk4NkMzNC40ODY4IDE1LjU5MTQgMzQuOTg2OSAxNC4yNSAzNi4wNjcxIDE0LjI1TDQxLjkzMjkgMTQuMjVDNDMuMDEzMSAxNC4yNSA0My41MTMyIDE1LjU5MTQgNDIuNjk2NyAxNi4yOTg2TDM5Ljc2MzggMTguODM4NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=";

  class FieldButton extends Blockly.FieldImage {
    constructor(src, width = 30 * size, height = 30 * size) {
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
      super(plusSelectImage, 54, 32);
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
function proxyBlocklyBlocksObject(runtime, fm) {
  if (proxingBlocklyBlocks) return;
  proxingBlocklyBlocks = true;
  const Blockly = getScratchBlocks(runtime);
  if (!Blockly) return;
  setLocales(Blockly);
  Blockly.Blocks = new Proxy(Blockly.Blocks, {
    set(target, opcode, blockDefinition) {
      if (Object.prototype.hasOwnProperty.call(enabledDynamicArgBlocksInfo, opcode)) {
        initExpandableBlock(runtime, blockDefinition, enabledDynamicArgBlocksInfo[opcode], fm);
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
function initExpandableBlock(runtime, blockDefinition, dynamicArgInfo, fm) {
  const Blockly = getScratchBlocks(runtime);
  const { PlusSelectButton, PlusButton, MinusButton } = createButtons(Blockly);

  const moveButtonToTheRightPlace = function () {
    this.moveInputBefore("PLUS", null);
    // const { afterArg } = this.dynamicArgInfo_;
    // if (afterArg) {
    //   this.moveInputBefore('PLUS', afterArg);
    //   this.moveInputBefore(afterArg, 'PLUS');
    // } else {
    //   this.moveInputBefore('PLUS', null);
    // }
    const cnt = this.dynamicArgumentTypes_.length;
    if (cnt === 0) {
      this.removeInput("MINUS");
    } else {
      if (!this.getInput("MINUS")) this.appendDummyInput("MINUS").appendField(new MinusButton());
      // move - behind +
      this.moveInputBefore("MINUS", "PLUS");
      this.moveInputBefore("PLUS", "MINUS");
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

    // this.appendDummyInput('DYNAMIC_ARGS'); // .appendField(this.plusButton_).appendField(this.minusButton_);
    this.appendDummyInput("PLUS").appendField(this.plusButton_);
    // moveButtonToTheRightPlace.call(this);
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
      const element = document.createElement("div");
      element.innerText = `${Blockly.ScratchMsgs.translate("DELETE_DYNAMIC_PARAMETER")} ${idx + 1}`;
      const input = this.inputList.find((i) => i.name === id);
      const pathElement = input.connection.targetConnection
        ? input.connection.targetConnection.sourceBlock_.svgPath_
        : input.outlinePath;
      element.addEventListener("mouseenter", () => {
        const replacementGlowFilterId =
          this.workspace.options.replacementGlowFilterId || "blocklyReplacementGlowFilter";
        pathElement.setAttribute("filter", `url(#${replacementGlowFilterId})`);
      });
      element.addEventListener("mouseleave", () => {
        pathElement.removeAttribute("filter");
      });
      contextMenu.push({
        text: element,
        enabled: true,
        callback: () => {
          pathElement.removeAttribute("filter");
          this.removeDynamicArg(id);
        },
      });
    });
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
      [index] = lastArgName.match(/\d+/g);
    }

    this.dynamicArgumentIds_.push(`DYNAMIC_ARGS${Number(index) + 1}`);
    this.dynamicArgumentTypes_.push(type);
    // 对object额外增加一个参数
    if (dynamicArgInfo.type === "getObj") {
      this.dynamicArgumentIds_.push(`DYNAMIC_ARGS${Number(index) + 2}`);
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

  blockDefinition.removeDynamicArg = function (id, removeExtra = true) {
    // object积木删除时总是额外减少一个积木
    if (removeExtra && dynamicArgInfo.type === "getObj") {
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
      Blockly.Events.fire(new Blockly.Events.BlockChange(this, "mutation", null, oldMutation, newMutation));
      setTimeout(() => {
        const target = runtime.getEditingTarget();
        const block = target.blocks._blocks[this.id];
        Object.keys(block.inputs).forEach((name) => {
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

    const cnt = this.dynamicArgumentIds_.length;
    // 刷新文本
    if (this.dynamicArgInfo_.emptyText) {
      this.inputList[0].fieldRow[blockTextPos].setText(
        fm(cnt === 0 ? this.dynamicArgInfo_.emptyText : this.dynamicArgInfo_.text)
      );
    }

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

  blockDefinition.createAllDynamicArgInputs_ = function (connectionMap) {
    // Create arguments and labels as appropriate.
    for (let i = 0; this.dynamicArgumentTypes_[i]; i++) {
      const argumentType = this.dynamicArgumentTypes_[i];
      if (!(argumentType === "n" || argumentType === "b" || argumentType === "s")) {
        throw new Error(`Found an dynamic argument with an invalid type: ${argumentType}`);
      }

      const id = this.dynamicArgumentIds_[i];
      const input = this.appendValueInput(id);
      // Add a separator character before the argument, eg. ","
      // 增加参数间的分隔符
      if ((i !== 0 || this.dynamicArgInfo_.afterArg) && this.dynamicArgInfo_.joinCh) {
        if (this.dynamicArgInfo_.joinCh2 && i % 2 === 1) {
          input.appendField(fm(this.dynamicArgInfo_.joinCh2));
        } else {
          input.appendField(fm(this.dynamicArgInfo_.joinCh));
        }
      }
      if (argumentType === "b") {
        input.setCheck("Boolean");
      }
      this.populateArgument_(argumentType, connectionMap, id, input, i);
    }
    // Move the + and - buttons to the far right.
    moveButtonToTheRightPlace.call(this);
    // 将动态参数移到某个特定参数之后
    const { afterArg } = this.dynamicArgInfo_;
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
      if (blockType === "ndList") return Math.max(3, 4 - i);
      let values = fm(defaultValues).split(",");
      if (blockType === "getProp" || blockType === "addItem") return values[0];
      if (blockType === "getObj") values = values.map((v) => v.split("="));
      const len = values.length;
      if (blockType === "getObj") {
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

/**
 * Initializes expandable blocks for a given extension.
 * @param {Object} extension - The extension object.
 */
function initExpandableBlocks(extension, fm) {
  const { runtime } = extension;
  const { id, blocks: blocksInfo } = extension.getInfo();
  blocksInfo.forEach((i) => {
    if (i.enableDynamicArgs) {
      const { dynamicArgsInfo } = i;
      dynamicArgsInfo.dynamicArgTypes = dynamicArgsInfo.dynamicArgTypes || ["s"];
      enabledDynamicArgBlocksInfo[`${id}_${i.opcode}`] = dynamicArgsInfo;
    }
  });
  proxyBlocklyBlocksObject(runtime, fm);
}

import math from './math.js';
const witcat_interpreter_picture = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2NDIuNTY0OCIgaGVpZ2h0PSIzNjUuOTI1MTEiIHZpZXdCb3g9IjAsMCw2NDIuNTY0OCwzNjUuOTI1MTEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMzIwIiB5MT0iLTAuMDgxODYiIHgyPSIzMjAiIHkyPSIzNjAuMDgxODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2MzYzRhIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM2MzYzRhIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMzIwIiB5MT0iMzYwLjA4MTg1IiB4Mj0iMzIwIiB5Mj0iLTAuMDgxODUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWUxZTI2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWUxZTI2IiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjQuOTc2MTYiIHkxPSIwLjM0NzI1IiB4Mj0iMjQuOTc2MTYiIHkyPSIxODQuOTQ3MjUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0Ljk1MjMsLTM1LjMwNjk5KSBzY2FsZSgyLDIpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2MwYzBjYyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzE4MTgxYSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMjgyNCw0LjU1MzUyKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0tMC42MDAyNywzNjAuNDIyOTV2LTM2MC44NDU4NGg2NDEuMjAwNTV2MzYwLjg0NTg0eiIgZmlsbD0iIzMzMzM0MCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTS0xLjI4MjQsMzYwLjA4MTg2di0zNjAuMTYzNzFoNjQyLjU2NDh2MzYwLjE2MzcxeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik02NDEuMjgyNCwtMC4wODE4NXYzNjAuMTYzNzFoLTY0Mi41NjQ4di0zNjAuMTYzNzF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0idXJsKCNjb2xvci0yKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTMuNzQ1NjEsMzQuNTM3MDcpIHNjYWxlKDAuNDI3NzksMC40Mjc3OSkiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiM2NjY2ODAiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJTYW5zIFNlcmlmIiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjwvdGV4dD48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NzguODY3NjksMjExLjU2OTc4KSBzY2FsZSgwLjQ0NjQyLDAuNDQ2NDIpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjNjY2NjgwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTk5LjAxODQ2LDM5LjUzNzA3KSBzY2FsZSgwLjQyNzc5LDAuNDI3NzkpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjNjY2NjgwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc0LjQ1NDMyLDE3LjE5NjQ4KSBzY2FsZSgwLjUsMC41KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzY2NjY4MCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5LjE3NTM1LDI1Ni42Nzg5NSkgc2NhbGUoMC40Mjc3OSwwLjQyNzc5KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2MwYzBjYyIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3LjQ3NjE1LDE3LjY1MzUpIHNjYWxlKDAuNSwwLjUpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSJ1cmwoI2NvbG9yLTMpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjE3LjA2Njg3LDE4LjMzNTYzKSBzY2FsZSgwLjUsMC41KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2MwYzBjYyIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDUxNi41NjIxLDE4LjEwMzY5KSBzY2FsZSgwLjUsMC41KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzY2NjY4MCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4NS4xNDMyNywyODUuNzI5OTEpIHNjYWxlKDAuNSwwLjUpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjNjY2NjgwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjgwLjU0NTcxLDE4LjEwMzY5KSBzY2FsZSgwLjUsMC41KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzY2NjY4MCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzNS4yNTk5NCw5MC4yMzk2OCkgc2NhbGUoMC40Mjc3OSwwLjQyNzc5KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzY2NjY4MCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NC42NzMzMSwxNzMuNDU5MzEpIHNjYWxlKDAuNDI3NzksMC40Mjc3OSkiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNjMGMwY2MiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJTYW5zIFNlcmlmIiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjwvdGV4dD48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NjYuMTgwODEsMTUuNDMwNjYpIHNjYWxlKDAuNDI3NzksMC40Mjc3OSkiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNjMGMwY2MiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJTYW5zIFNlcmlmIiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjwvdGV4dD48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NjIuOTA1ODksMjYxLjg1NTQyKSBzY2FsZSgwLjUsMC41KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2MwYzBjYyIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNS4wNzUwNCwzMDguMjQwMTMpIHNjYWxlKDAuNSwwLjUpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjNjY2NjgwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48L3RleHQ+PHBhdGggZD0iTTI2NC43MDQ2NCwyMTguMTA4OTR2LTYwLjI0MjM2aDExMC4yNzc2OXY2MC4yNDIzNnoiIGZpbGw9IiMwYzBjMGMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNjQuODk3OTUsMTU2LjMzMzczdi0xMy41NjUyOGgxMTAuMjc3Njl2MTMuNTY1Mjh6IiBmaWxsPSIjZDVkOWRmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMzc1LjExMjEyLDE1Ni45Njc2OGgtMTEwLjY4NDIzIiBmaWxsPSJub25lIiBzdHJva2U9IiM4YjkzOWMiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMzY0LjcwMzIsMTQ4Ljg0MDk4di00LjkwNzQ3aDQuOTA3NDd2NC45MDc0N3oiIGZpbGw9IiM4YjkzOWMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0zNDguNjMyNzQsMTQ4Ljg5MzI2di00LjkwNzQ3aDQuOTA3NDd2NC45MDc0N3oiIGZpbGw9IiM4YjkzOWMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0zNTYuNjU5MDUsMTQ4Ljg2MTUzdi00LjkwNzQ3aDQuOTA3NDd2NC45MDc0N3oiIGZpbGw9IiM4YjkzOWMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNjUuMzYyNzYsMTU1Ljc1OTAzdi02LjEwMjIxaDEwOS4yMDQxN3Y2LjEwMjIxeiIgZmlsbD0iI2NiY2NjZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI2NC4xNzUzMywyMTcuNjA3MzR2LTc1LjcxNjIzaDExMS42NDkzNnY3NS43MTYyM3oiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhiOTM5YyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI4Mi4zMTQ1NSwxODguODEyNDh2LTUuMTMzMTJsMjMuMTQ0ODgsLTEyLjM3NDQ5djcuMTk1NTRsLTE1LjQ5MTAzLDcuNzQ1NTJsMTUuNDkxMDMsNy43OTEzNXY3LjE0OTcxek0zMjEuMDQyMTIsMTY4LjE4ODMzaDYuNTk5NzNsLTEwLjgxNjIyLDM2LjI5ODUxaC02LjU5OTczek0zMzIuNDA4MzIsMTcxLjMwNDg3bDIzLjE0NDg4LDEyLjM3NDQ5djUuMTMzMTJsLTIzLjE0NDg4LDEyLjM3NDQ5di03LjE0OTcxbDE1LjUzNjg2LC03Ljc5MTM1bC0xNS41MzY4NiwtNy43NDU1MnoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjwvZz48L2c+PC9zdmc+";

const witcat_interpreter_icon = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMjcuODI5MjUiIGhlaWdodD0iMTI3LjgyOTI2IiB2aWV3Qm94PSIwLDAsMTI3LjgyOTI1LDEyNy44MjkyNiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIzMjAuMDAwMDIiIHkxPSIxMTYuMDg1MzciIHgyPSIzMjAuMDAwMDIiIHkyPSIyNDMuOTE0NjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWUxZTI2IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxZTFlMjYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU2LjA4NTM4LC0xMTYuMDg1MzcpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjY4LjAwMjE2LDI0My45MTQ2M2MtNS4wNDI3MiwwIC0xMS45MTY3NywtNC40NTMxOSAtMTEuOTE2NzcsLTExLjYzNjQ5YzAsLTI2LjMxOTcyIDAsLTg5LjI5MTI2IDAsLTEwNC4xNTc3NGMwLC02LjE2MDY0IDYuODc0MDUsLTEyLjAzNTAzIDExLjkxNjc3LC0xMi4wMzUwM2gxMDQuNDI0MzRjNS4wNDI3MiwwIDExLjQ4ODE0LDQuMTUzMDUgMTEuNDg4MTQsMTEuODIwNzFjMCwyNi44MjI3OSAwLDg5LjQyOTYxIDAsMTA0LjE1Nzc0YzAsNi4xNzM3MiAtNi44NzQwNSwxMS44NTA4MSAtMTEuOTE2NzcsMTEuODUwODF6IiBmaWxsPSIjMzMzMzQwIi8+PHBhdGggZD0iTTI2OC4wMDIxNiwyNDMuOTE0NjNjLTUuMDQyNzIsMCAtMTEuOTE2NzcsLTQuNDUzMTkgLTExLjkxNjc3LC0xMS42MzY0OWMwLC0yNi4zMTk3MiAwLC04OS4yOTEyNiAwLC0xMDQuMTU3NzRjMCwtNi4xNjA2NCA2Ljg3NDA1LC0xMi4wMzUwMyAxMS45MTY3NywtMTIuMDM1MDNoMTA0LjQyNDM0YzUuMDQyNzIsMCAxMS40ODgxNCw0LjE1MzA1IDExLjQ4ODE0LDExLjgyMDcxYzAsMjYuODIyNzkgMCw4OS40Mjk2MSAwLDEwNC4xNTc3NGMwLDYuMTczNzIgLTYuODc0MDUsMTEuODUwODEgLTExLjkxNjc3LDExLjg1MDgxeiIgZmlsbD0idXJsKCNjb2xvci0xKSIvPjxwYXRoIGQ9Ik0yNjkuODc2NDUsMTgzLjM4NzU4di03LjAyNjA4bDMxLjY4MDA5LC0xNi45Mzc4N3Y5Ljg0OTA1bC0yMS4yMDM3LDEwLjYwMTg2bDIxLjIwMzcsMTAuNjY0NTl2OS43ODYzM3pNMzIyLjg4NTcxLDE1NS4xNTc3OWg5LjAzMzUzbC0xNC44MDQ5NSw0OS42ODQ0MmgtOS4wMzM1M3pNMzM4LjQ0MzQ2LDE1OS40MjM2MmwzMS42ODAwOSwxNi45Mzc4N3Y3LjAyNjA4bC0zMS42ODAwOSwxNi45Mzc4N3YtOS43ODYzM2wyMS4yNjY0NCwtMTAuNjY0NTlsLTIxLjI2NjQzLC0xMC42MDE4NXoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvc3ZnPg==";

const witcat_interpreter_extensionId = "WitCatInterpreter";

const {
    BlockType, ArgumentType, TargetType, Cast,
} = Scratch;

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字、布尔和文本（极端情况下还有 null 或 undefined，需要同时处理 */

let hacked = false;

class WitCatInterpreter {
    constructor(runtime) {
        this.runtime = runtime;
        this.descMap = [];
        this.asyncMap = [];
        this.returnMap = {};
        this.variableMap = {};
        this.taskMap = {};
        this.whileOutNumber = 999;

        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                "WitCatInterpreter.name": "白猫的解释器",
                "WitCatInterpreter.docs": "📖拓展教程",
                "WitCatInterpreter.code": "代码",
                "WitCatInterpreter.runs": "执行",
                "WitCatInterpreter.rule": "规则",
                "WitCatInterpreter.run": "执行代码[code]并[wait]",
                "WitCatInterpreter.asyncMarkUp": "标记函数[func]为[async]函数",
                "WitCatInterpreter.async.1": "异步",
                "WitCatInterpreter.async.2": "同步",
                "WitCatInterpreter.wait.1": "等待",
                "WitCatInterpreter.wait.2": "不等待",
                "WitCatInterpreter.expression": "表达式[code]",
                "WitCatInterpreter.response": "执行函数[func]:传参=[params] 内部代码=[code]",
                "WitCatInterpreter.returns": "返回[return]",
                "WitCatInterpreter.taskOn": "触发线程[task]",
                "WitCatInterpreter.taskRemove": "移除线程缓存[task]",
                "WitCatInterpreter.whileOut": "设置循环溢出[while]",
                "WitCatInterpreter.createClass": "创建类[class]",
                "WitCatInterpreter.classFunc": "创建方法[func]",
                "WitCatInterpreter.classAttribute": "创建[pub]属性[attribute]初始化为[num]",
                "WitCatInterpreter.setInfo": "设置函数[func]的描述为[desc]",
                "WitCatInterpreter.delInfo": "删除函数[func]的描述",
                "WitCatInterpreter.setInfoss": "设置函数",
                "WitCatInterpreter.setInfos": "设置带参函数",
                "WitCatInterpreter.setInfo.1": "参数描述",
                "WitCatInterpreter.setInfo.2": ",",
                "WitCatInterpreter.exportInfo": "导出函数文档",
                "WitCatInterpreter.attribute.1": "公开",
                "WitCatInterpreter.attribute.2": "私有",
            },
            en: {
                "WitCatInterpreter.name": "WitCat’s Interpreter",
                "WitCatInterpreter.docs": "📖 Tutorial",
                "WitCatInterpreter.code": "code",
                "WitCatInterpreter.runs": "run",
                "WitCatInterpreter.rule": "rule",
                "WitCatInterpreter.run": "Run code[code]and[wait]",
                "WitCatInterpreter.asyncMarkUp": "Mark func[func]to[async]",
                "WitCatInterpreter.async.1": "async",
                "WitCatInterpreter.async.2": "sync",
                "WitCatInterpreter.wait.1": "wait",
                "WitCatInterpreter.wait.2": "no-wait",
                "WitCatInterpreter.expression": "Expression[code]",
                "WitCatInterpreter.response": "Func[func]:params=[params] codeInsite=[code]",
                "WitCatInterpreter.returns": "Return[return]",
                "WitCatInterpreter.taskOn": "Trigger thread[task]",
                "WitCatInterpreter.taskRemove": "Remove thread[task]",
                "WitCatInterpreter.whileOut": "Set loop overflow[while]",
                "WitCatInterpreter.createClass": "创建类[class]",
                "WitCatInterpreter.classFunc": "创建方法[func]",
                "WitCatInterpreter.classAttribute": "创建[pub]属性[attribute]初始化为[num]",
                "WitCatInterpreter.setInfo": "设置函数[func]的描述为[desc]",
                "WitCatInterpreter.delInfo": "删除函数[func]的描述",
                "WitCatInterpreter.setInfoss": "设置函数",
                "WitCatInterpreter.setInfos": "设置带参函数",
                "WitCatInterpreter.setInfo.1": "参数描述",
                "WitCatInterpreter.setInfo.2": ",",
                "WitCatInterpreter.exportInfo": "导出函数文档",
                "WitCatInterpreter.attribute.1": "公开",
                "WitCatInterpreter.attribute.2": "私有",
            }
        })
        initExpandableBlocks(this, this.formatMessage.bind(this));
    }

    /**
     * 翻译
     * @param {string} id
     * @return {string}
     */
    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id
        });
    }

    getInfo() {
        return {
            id: witcat_interpreter_extensionId, // 拓展id
            name: this.formatMessage("WitCatInterpreter.name"), // 拓展名
            blockIconURI: witcat_interpreter_icon,
            menuIconURI: witcat_interpreter_icon,
            color1: "#333340",
            color2: "#1e1e26",
            blocks: [
                {
                    blockType: "button",
                    text: this.formatMessage('WitCatInterpreter.docs'),
                    onClick: this.docs,
                },
                "---" + this.formatMessage("WitCatInterpreter.code"),
                {
                    opcode: "run",
                    blockType: "command",
                    text: this.formatMessage("WitCatInterpreter.run"),
                    arguments: {
                        code: {
                            type: "string",
                            defaultValue: "print(1+1)"
                        },
                        wait: {
                            type: "Boolean",
                            menu: "wait"
                        },
                    },
                },
                {
                    opcode: "runreturn",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatInterpreter.run"),
                    arguments: {
                        code: {
                            type: "string",
                            defaultValue: "print(1+1)"
                        },
                        wait: {
                            type: "Boolean",
                            menu: "wait"
                        },
                    },
                },
                {
                    opcode: "taskOn",
                    blockType: "command",
                    text: this.formatMessage("WitCatInterpreter.taskOn"),
                    arguments: {
                        task: {
                            type: "string",
                            defaultValue: "func"
                        },
                    },
                },
                {
                    opcode: "taskRemove",
                    blockType: "command",
                    text: this.formatMessage("WitCatInterpreter.taskRemove"),
                    arguments: {
                        task: {
                            type: "string",
                            defaultValue: "func"
                        },
                    },
                },
                {
                    opcode: "taskOnWithReturn",
                    blockType: "reporter",
                    allowDropAnywhere: true,
                    text: this.formatMessage("WitCatInterpreter.taskOn"),
                    arguments: {
                        task: {
                            type: "string",
                            defaultValue: "func"
                        },
                    },
                },
                {
                    opcode: "expressions",
                    blockType: "reporter",
                    allowDropAnywhere: true,
                    text: this.formatMessage("WitCatInterpreter.expression"),
                    arguments: {
                        code: {
                            type: "string",
                            defaultValue: "1==1"
                        },
                    },
                },
                "---" + this.formatMessage("WitCatInterpreter.runs"),
                {
                    opcode: "asyncMarkUp",
                    blockType: "command",
                    text: this.formatMessage("WitCatInterpreter.asyncMarkUp"),
                    arguments: {
                        func: {
                            type: "string",
                            defaultValue: "print"
                        },
                        async: {
                            type: "string",
                            menu: "async"
                        },
                    },
                },
                {
                    opcode: "response",
                    blockType: "hat",
                    isEdgeActivated: false,
                    shouldRestartExistingThreads: false,
                    text: this.formatMessage("WitCatInterpreter.response"),
                    arguments: {
                        func: {
                            type: "string",
                            defaultValue: "print"
                        },
                        params: {
                            type: "ccw_hat_parameter"
                        },
                        code: {
                            type: "ccw_hat_parameter"
                        },
                    },
                },
                {
                    opcode: "returns",
                    blockType: "command",
                    isTerminal: true,
                    text: this.formatMessage("WitCatInterpreter.returns"),
                    arguments: {
                        return: {
                            type: "string",
                            defaultValue: "witcat"
                        },
                    },
                },
                "---" + this.formatMessage("WitCatInterpreter.rule"),
                {
                    opcode: "whileOut",
                    blockType: "command",
                    text: this.formatMessage("WitCatInterpreter.whileOut"),
                    arguments: {
                        while: {
                            type: "number",
                            defaultValue: "1000"
                        },
                    },
                },
                {
                    opcode: "setInfo",
                    blockType: "command",
                    enableDynamicArgs: true,
                    text: this.formatMessage("WitCatInterpreter.setInfo"),
                    arguments: {
                        func: {
                            type: "string",
                            defaultValue: "func"
                        },
                        desc: {
                            type: "string",
                            defaultValue: "用于打印文本的函数"
                        },
                    },
                    dynamicArgsInfo: {
                        afterArg: 'func',
                        emptyText: 'WitCatInterpreter.setInfoss',
                        text: 'WitCatInterpreter.setInfos',
                        joinCh: 'WitCatInterpreter.setInfo.2',
                        defaultValues: this.formatMessage("WitCatInterpreter.setInfo.1"),
                    },
                },
                {
                    opcode: "delInfo",
                    blockType: "command",
                    text: this.formatMessage("WitCatInterpreter.delInfo"),
                    arguments: {
                        func: {
                            type: "string",
                            defaultValue: "func"
                        },
                    },
                },
                {
                    opcode: "exportInfo",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatInterpreter.exportInfo"),
                    arguments: {
                        while: {
                            type: "number",
                            defaultValue: "1000"
                        },
                    },
                },

                // {
                //     opcode: "createClass",
                //     blockType: "hat",
                //     isEdgeActivated: false,
                //     shouldRestartExistingThreads: false,
                //     text: this.formatMessage("WitCatInterpreter.createClass"),
                //     arguments: {
                //         class: {
                //             type: "string",
                //             defaultValue: "witcat"
                //         },
                //     },
                // },
                // {
                //     opcode: "classFunc",
                //     blockType: "conditional",
                //     text: this.formatMessage("WitCatInterpreter.classFunc"),
                //     arguments: {
                //         func: {
                //             type: "string",
                //             defaultValue: "log"
                //         },
                //     },
                // },
                // {
                //     opcode: "classAttribute",
                //     blockType: "command",
                //     text: this.formatMessage("WitCatInterpreter.classAttribute"),
                //     arguments: {
                //         pub: {
                //             type: "string",
                //             menu: "attribute"
                //         },
                //         attribute: {
                //             type: "string",
                //             defaultValue: "log"
                //         },
                //         num: {
                //             type: "string",
                //             defaultValue: "0"
                //         },
                //     },
                // },
            ],
            menus: {
                wait: [
                    {
                        text: this.formatMessage('WitCatInterpreter.wait.1'),
                        value: true
                    },
                    {
                        text: this.formatMessage('WitCatInterpreter.wait.2'),
                        value: false
                    },
                ],
                async: [
                    {
                        text: this.formatMessage('WitCatInterpreter.async.1'),
                        value: 'async'
                    },
                    {
                        text: this.formatMessage('WitCatInterpreter.async.2'),
                        value: 'sync'
                    },
                ],
                attribute: [
                    {
                        text: this.formatMessage('WitCatInterpreter.attribute.1'),
                        value: 'public'
                    },
                    {
                        text: this.formatMessage('WitCatInterpreter.attribute.2'),
                        value: 'self'
                    },
                ],
            },
        };
    }

    /** 打开教程 */
    docs() {
        let a = document.createElement('a');
        a.href = "https://www.ccw.site/post/d6d96e80-3f58-4a19-b7e6-c567d3a6a583";
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        a.click();
    }

    setInfo(args) {
        console.log(args);
        const func = {
            name: String(args.func),
            desc: String(args.desc),
            args: []
        }
        for (let i = 1; args[`DYNAMIC_ARGS${i}`]; i++) {
            const key = args[`DYNAMIC_ARGS${i}`];
            func.args.push(key);
        }
        this.descMap.push(func);
        return JSON.stringify(func);
    }

    delInfo(args) {
        const func = this.descMap.find(item => item.name === args.func);
        if (func) {
            const index = this.descMap.indexOf(func);
            this.descMap.splice(index, 1);
        }
    }

    exportInfo() {
        return JSON.stringify(this.descMap);
    }

    response() {
        return true;
    }

    taskOn(args) {
        const body = this.taskMap[args.task];
        if (body)
            return this.runcode(body);
    }

    taskRemove(args) {
        delete this.taskMap[args.task];
    }

    taskOnWithReturn(args) {
        const body = this.taskMap[args.task];
        if (body)
            return this.runcode(body);
    }

    returns(args, util) {
        const topBlock = util.thread?.topBlock;
        if (topBlock) {
            this.returnMap[topBlock] = args.return;
            util.stopThisScript();
        }
    }

    whileOut(args) {
        this.whileOutNumber = Number(args.while);
    }

    asyncMarkUp(args) {
        if (args.async == 'async') {
            if (this.asyncMap.indexOf(args.func) == -1)
                this.asyncMap.push(args.func);
        } else {
            if (this.asyncMap.indexOf(args.func) != -1)
                this.asyncMap.splice(this.asyncMap.indexOf(args.func), 1);
        }
    }

    /**
     * 计算
     * @param {object} args
     * @param {SCarg} args.code
     * @return {number}
     */
    async run(args) {
        if (args.wait)
            await this.runcode(String(args.code));
        else
            this.runcode(String(args.code));
    }

    async runreturn(args) {
        if (args.wait)
            return await this.runcode(String(args.code));
        else
            this.runcode(String(args.code));
        return 'null';
    }

    async expressions(args) {
        return await this.expression(String(args.code));
    }
    /**
     * 运行代码
     * @param {string} code 需要执行的代码
     * @return {number}
     */
    runcode = async (code) => {
        const lines = code.split('\n').map(line => line.trim()).filter(line => line);
        let i = 0, returns = null;

        while (i < lines.length && returns === null) {
            const line = lines[i].split('//')[0].trim();
            if (line.match(/else\s*{/)) {
                let b = 0;
                i++;
                while (i < lines.length && b < 1) {
                    const line = lines[i].trim();

                    if (line.startsWith('}')) {
                        b++;
                        continue;
                    }

                    i++;
                }
                continue;
            }

            if (line === 'break') return { break: true };
            if (line === 'continue') return { continue: true };

            // 匹配函数调用，比如 func(param1, param2)
            const functionCallMatch = line.match(/^(\w+)\((.*)\)$/);
            if (functionCallMatch) {
                const funcName = functionCallMatch[1];
                const params = functionCallMatch[2].split(',').map(param => param.trim());
                if (funcName === 'return') {
                    returns = await this.expression(params[0]);
                    continue;
                } else
                    await this.runCodeRow(funcName, params, null); // 不传递函数体
                i++;
                continue;
            }

            let liner = line;
            // 匹配函数定义，比如 func(args) { ... }
            if (liner.startsWith('}'))
                liner = liner.substring(1, line.length).trim();
            const functionDefMatch = liner.match(/^(\w+)\((.*)\)\s*{$/);
            if (functionDefMatch) {
                const funcName = functionDefMatch[1];
                const params = functionDefMatch[2].split(',').map(param => param.trim());
                let body = '';

                // 找到对应的函数体，直到遇到独立的行
                i++; // 移动到函数体的第一行
                let b = 1;
                while (i < lines.length && b > 0) {
                    if (lines[i].trim().startsWith('}'))
                        --b;
                    if (lines[i].trim().includes('{') && b > 0)
                        ++b;
                    body += lines[i] + '\n';
                    i++;
                }
                body = body.slice(0, body.lastIndexOf('}')).trim();
                let returnValue = null;
                returnValue = await this.runCodeRow(funcName, params, body.trim());
                if (funcName == 'if' || funcName == 'elif') {
                    console.log(returnValue);
                    if (returnValue === false) {
                        i--;
                        let b = 0;
                        while (i < lines.length && b < 1) {
                            const line = lines[i].trim();

                            if (line.match(/elif\s*\(([^()]*)\)\s*\{/)) {
                                b++;
                                continue;
                            }
                            if (line.match(/else\s*{/)) {
                                b++;
                                continue;
                            }
                            if (line.startsWith('}')) {
                                b++;
                                continue;
                            }
                            i++;
                        }
                        if (lines[i]) {
                            const line = lines[i].trim();
                            if (line.match(/else\s*{/))
                                i++;
                        }
                    } else if (returnValue === true) {
                        let b = 0;
                        --i;
                        while (i < lines.length && b < 2) {
                            const line = lines[i].trim();

                            if (line.match(/else\s*{/)) {
                                b++;
                                continue;
                            }
                            if (line.startsWith('}') && b == 1) {
                                b++;
                                continue;
                            }
                            i++;
                        }
                    } else {
                        i = lines.length;
                        returns = returnValue;
                        continue;
                    }
                } else if (returnValue !== null) {
                    return returnValue
                }
                continue;
            }

            const letAssignmentPattern = /let\s+(\w+)\s*=\s*(.+)/;
            const match = line.match(letAssignmentPattern);

            if (match) {
                const variableName = match[1]; // 提取变量名
                const valueExpression = match[2].trim(); // 提取赋值部分

                // 进行后续操作，这里可以使用 await
                const value = await this.expression(valueExpression);
                this.variableMap[variableName] = value; // 存储变量的值
            }

            i++;
        }
        return returns;
    }

    /**
     * 执行一行代码
     * @param {string} func 函数名
     * @param {Array} args 传入的参数列表
     * @param {string} body 函数体内容
     * @returns {void}
     */
    runCodeRow = async (func, args, body) => {
        if (func === 'if' || func === 'elif') {
            const condition = await this.expression(args[0]); // 假设 args[0] 是条件

            if (condition === 'true') {
                const returns = await this.runcode(body);
                if (returns !== null) return returns;
                return true;
            } else {
                return false;
            }
        } else if (func === 'on') {
            this.taskMap[args[0]] = body;
            return null;
        } else if (func === 'task') {
            const body = this.taskMap[args[0]];
            if (body)
                return this.runcode(body);
        } else {
            return new Promise(async (resolve, reject) => {
                const out = this.runtime.startHatsWithParams(
                    `${witcat_interpreter_extensionId}_response`,
                    {
                        parameters: { params: JSON.stringify(args), code: body },
                        fields: { TEXT: Cast.toString(func) },
                    },
                );
                const checkThreads = () => {
                    const waiting = out.some(thread => this.runtime.threads.indexOf(thread) !== -1);
                    if (!waiting) {
                        out.forEach(item => {
                            if (item.topBlock) {
                                const topBlockContent = item.topBlock;
                                // 执行代码
                                const v = this.returnMap[topBlockContent];
                                if (v !== null) {
                                    delete this.returnMap[topBlockContent];
                                    resolve(v);
                                }
                            }
                        });

                        resolve(null);
                    } else {
                        setTimeout(checkThreads, 100);
                    }
                };
                if (out.length == 0) {
                    let returns = null;
                    if (func === 'while') {
                        let i = 0;
                        while (await this.expression(args[0]) === 'true' && this.whileOutNumber > i && returns === null) {
                            const s = await this.runcode(body);
                            if (s?.continue === true) {
                                //继续下一次循环，不需要操作，因为之前的代码已经返回了
                            } else {
                                if (s?.break === true) {
                                    returns = null;
                                    resolve(returns);
                                }
                                if (s !== null) {
                                    returns = s;
                                    resolve(returns);
                                }
                            }
                            ++i;
                        }
                        if (this.whileOutNumber == i && await this.expression(args[0]) === 'true') {
                            console.warn(`解释器：超过循环上限，请联系作品作者，当前上限为：${this.whileOutNumber}\nInterpreter:the cycle limit has exceeded, please contact the author, the current limit is ${this.whileOutNumber}`);
                        }
                    } else if (func === 'for') {
                        await this.runcode(args[0].split('\\n').join('\n'));
                        let i = 0;
                        while (await this.expression(args[1]) === 'true' && this.whileOutNumber > i && returns === null) {
                            const s = await this.runcode(body);
                            if (s?.continue === true) {
                                //继续下一次循环，不需要操作，因为之前的代码已经返回了
                            } else {
                                if (s?.break === true) {
                                    returns = null;
                                    resolve(returns);
                                }
                                if (s !== null) {
                                    returns = s;
                                    resolve(returns);
                                }
                            }
                            await this.runcode(args[2].split('\\n').join('\n'));
                            ++i;
                        }
                        if (this.whileOutNumber == i && await this.expression(args[1]) === 'true') {
                            console.warn(`解释器：超过循环上限，请联系作品作者，当前上限为：${this.whileOutNumber}\nInterpreter:the cycle limit has exceeded, please contact the author, the current limit is ${this.whileOutNumber}`);
                        }
                    } else if (func === 'rmtask') {
                        delete this.taskMap[await this.expression(args[1])];
                    }
                    resolve(returns);
                }
                else {
                    if (this.asyncMap.indexOf(func) == -1)
                        checkThreads();
                    else
                        resolve(null);
                }
            });
        }
    }


    async expression(args) {

        // 临时函数用于计算比较和逻辑表达式
        const evaluateCondition = (condition) => {
            // 处理括号
            while (condition.match(/\([^()]*\)/)) {
                const innerConditionMatch = condition.match(/\(([^()]+)\)/);
                if (innerConditionMatch) {
                    const innerValue = evaluateCondition(innerConditionMatch[1]);
                    condition = condition.replace(innerConditionMatch[0], innerValue);
                }
            }

            // 处理逻辑运算符
            // 先处理 ! 逻辑运算
            if (condition.startsWith('!')) {
                condition = condition.replace(/!(\S+)/g, (match, inner) => {
                    const value = evaluateCondition(inner);
                    return !value; // 取反
                });
            }

            // 处理 && 和 ||
            const andMatch = condition.split('&&');
            if (andMatch.length > 1) {
                return andMatch.every(part => evaluateCondition(part.trim())); // 所有部分都为真
            }

            const orMatch = condition.split('||');
            if (orMatch.length > 1) {
                return orMatch.some(part => evaluateCondition(part.trim())); // 任何部分为真
            }

            // 处理比较表达式，如 a == b, a < b 等
            const comparisonMatch = condition.match(/([^()=<>!|&]+)\s*([!=<>]=?)\s*([^()=<>!|&]+)/);
            if (comparisonMatch) {
                let left = comparisonMatch[1].trim();
                const operator = comparisonMatch[2];
                let right = comparisonMatch[3].trim();
                let result;

                const isNumeric = (str) => {
                    return !isNaN(str) && !isNaN(parseFloat(str));
                }

                if (isNumeric(left)) left = parseFloat(left);
                if (isNumeric(right)) right = parseFloat(right);

                // 根据操作符计算结果
                switch (operator) {
                    case '==':
                        result = left == right; // 注意类型转换
                        break;
                    case '!=':
                        result = left != right; // 注意类型转换
                        break;
                    case '>':
                        result = left > right;
                        break;
                    case '<':
                        result = left < right;
                        break;
                    case '>=':
                        result = left >= right;
                        break;
                    case '<=':
                        result = left <= right;
                        break;
                    default:
                        return condition; // 不支持的操作符，返回原条件
                }
                return result; // 返回布尔值
            }

            try {
                const s = math.evaluate(condition);
                // 没有匹配，则进行数学运算
                return s === undefined ? condition : s;
            } catch (error) {
                return condition; // 如果运算出错，返回原条件
            }
        };

        let v;
        // 替换变量
        v = String(args).replace(/\$([^\s()=<>!|&]+)\$/g, (match, varName) => {
            const value = this.getVariable(varName);
            return value !== null ? value : match; // 如果变量存在，替换为其值；否则返回原始匹配
        });

        // 匹配函数调用，比如 func(param1, param2)
        const functionCallMatch = v.match(/^(\w+)\((.*)\)$/);
        if (functionCallMatch) {
            const funcName = functionCallMatch[1];
            const params = functionCallMatch[2].split(',').map(param => param.trim());
            if (funcName === 'original') return params
            const s = await this.runCodeRow(funcName, params, null);
            v = String(s); // 不传递函数体
        }

        // 处理比较和逻辑表达式
        const finalResult = String(evaluateCondition(v));
        return finalResult; // 返回最终计算结果
    }

    getVariable = (name) => {
        return this.variableMap[name] || null; // 返回变量值 
    }

}

window.tempExt = {
    Extension: WitCatInterpreter,
    info: {
        name: "WitCatInterpreter.name",
        description: "WitCatInterpreter.descp",
        extensionId: witcat_interpreter_extensionId,
        iconURL: witcat_interpreter_picture,
        insetIconURL: witcat_interpreter_icon,
        featured: true,
        disabled: false,
        collaborator: "白猫 @ CCW",
        collaboratorList: [
            {
                collaborator: '白猫 @ CCW',
                collaboratorURL: 'https://www.ccw.site/student/6173f57f48cf8f4796fc860e'
            },
        ],
    },
    l10n: {
        "zh-cn": {
            "WitCatInterpreter.name": "白猫的解释器",
            "WitCatInterpreter.descp": "更简单的开发模组支持"
        },
        en: {
            "WitCatInterpreter.name": "WitCat’s Interpreter",
            "WitCatInterpreter.descp": "Easier development mod support"
        }
    }
};
