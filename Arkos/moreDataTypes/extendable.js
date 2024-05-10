/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
/**
 * By Nights' Extendables, 999 Thanks!
 * The code that gets vm is from FurryR
 */

/**
 * eg.
setExpandableBlocks({
  sb_list: [INPUT_TYPES.STRING, 'list', '空列表', '列表:', '苹果,香蕉,菠萝,东西'],
  sb_obj: [INPUT_TYPES.STRING, 'obj', '空对象', '对象:', '姓名=小明,得分=100,属性=东西'],
}, this.runtime);
 */

// 图片
const minusImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAw'
  + 'MC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPS'
  + 'JNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAw'
  + 'IDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K';

const plusImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC'
  + '9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT'
  + 'ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz'
  + 'FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW'
  + 'MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS'
  + '44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==';

const smallIcon = true;
const btnSize = 16;

export const INPUT_TYPES = {
  STRING: 's',
  NUMBER: 'n',
  BOOLEAN: 'b',
};

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
export const getScratchBlocksAndVM = (runtime) => {
  function getEvent(e) {
    return e instanceof Array ? e[e.length - 1] : e;
  }
  const { vm } = hijack(getEvent(runtime._events.QUESTION)).props;
  return {
    scratchBlocks: hijack(getEvent(vm._events.EXTENSION_ADDED))
      ?.ScratchBlocks,
    vm,
  };
};

let init = false;
export const setExpandableBlocks = (expandableBlocks, runtime, fm) => {
  // 避免上传作品时二次调用。只调用一次
  if (init) return;
  init = true;

  /**
   * 创建按钮
   * @param {*} Blockly
   * @returns {{PlusButton, MinusButton}}
   */
  const createButtons = (Blockly) => {
    // 按钮
    class FieldButton extends Blockly.FieldImage {
      constructor(src) {
        super(src, btnSize, btnSize, undefined, false);
        this.initialized = false;
      }

      init() {
        // Field has already been initialized once.
        super.init();
        if (!this.initialized) {
          // 第一次初始化
          Blockly.bindEventWithChecks_(
            this.getSvgRoot(),
            'mousedown',
            this,
            (e) => {
              e.stopPropagation();
              // 阻止事件冒泡，要不然你点按钮就会执行积木（点击积木）
            },
          );
          Blockly.bindEventWithChecks_(
            this.getSvgRoot(),
            'mouseup',
            this,
            this.handleClick.bind(this),
          );
          // 绑定上这个按钮点击事件
        }
        this.initialized = true;
      }

      handleClick(e) {
        if (!this.sourceBlock_ || !this.sourceBlock_.workspace) {
          return false;
        }
        if (this.sourceBlock_.workspace.isDragging()) {
          return false;
        }
        if (this.sourceBlock_.isInFlyout) {
          return false;
        }
        this.onclick(e);
        return true;
      }

      onclick(e) {
        // 子类实现
      }
    }

    // + 按钮
    class PlusButton extends FieldButton {
      constructor() {
        super(plusImage);
      }

      onclick() {
        const block = this.sourceBlock_;
        // 增加积木数量改变
        block.itemCount_ += 1;
        block.updateShape(); // 更新
      }
    }

    // - 按钮
    class MinusButton extends FieldButton {
      constructor() {
        super(minusImage);
      }

      onclick() {
        // 获取这个 field 的积木
        const block = this.sourceBlock_;
        // 增加积木数量改变
        block.itemCount_ -= 1;
        if (block.itemCount_ < 0) {
          // 不能有 -1 个参数
          block.itemCount_ = 0;
        }
        block.updateShape(); // 更新
      }
    }

    return {
      PlusButton,
      MinusButton,
    };
  };

  const createExpandableBlock = (runtime, Blockly) => {
    const { PlusButton, MinusButton } = createButtons(Blockly);
    // 这个是scratch函数的utils
    const { ProcedureUtils } = Blockly.ScratchBlocks;

    return {
      /**
       * 添加参数
       * @param {*} input
       * @param {'n'|'s'} argumentType n:数字|s:字符串
       * @param {*} defaultValue 参数默认值
       */
      attachShadow_(input, argumentType, defaultValue = '') {
        if (argumentType === 'n' || argumentType === 's') {
          const blockType = argumentType === 'n' ? 'math_number' : 'text';
          Blockly.Events.disable();
          try {
            var newBlock = this.workspace.newBlock(blockType);
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
      },

      updateShape() {
        const getDefaultValue = (name, i) => {
          if (this.opcode === 'ndList') return Math.max(3, 4 - i);
          let values = fm(this.values).split(',');
          if (this.opcode === 'getProp' || this.opcode === 'addItem') return values[0];
          if (this.opcode === 'obj') values = values.map((v) => v.split('='));
          const len = values.length;
          if (i > len - 1) {
            return `${getDefaultValue(name, len - 1)}${i - len + 2}`;
          }
          if (this.opcode === 'obj') {
            if (name === 'VALUE') return values[i][1];
            return values[i][0];
          }
          return values[i];
        };

        const moveInputAfter = (from, to) => {
          this.moveInputBefore(from, to);
          this.moveInputBefore(to, from);
        };

        const addInput = (name, i, prefix = ', ') => {
          const key = `${name}${i}`;
          if (!this.getInput(key)) {
            const input = this.appendValueInput(key);

            if (this.argType === INPUT_TYPES.BOOLEAN) {
              input.setCheck('Boolean');
            } else {
              this.attachShadow_(input, this.argType, getDefaultValue(name, i));
            }
            // s = string, b = boolean, n = number
            // 这个attachShadow_是来自scratch 自定义函数 的积木
            input.appendField(prefix);

            if (this.opcode === 'getProp') {
              const previousArg = i === 0 ? 'PROP' : `${name}${i - 1}`;
              moveInputAfter(key, previousArg);
            } else if (this.opcode === 'ndList') {
              const previousArg = i === 0 ? 'N' : `${name}${i - 1}`;
              moveInputAfter(key, previousArg);
            } else if (this.opcode === 'addItem') {
              const previousArg = i === 0 ? 'NAME_OR_OBJ' : `${name}${i - 1}`;
              moveInputAfter(key, previousArg);
            }
          }
        };
        const toDel = [];
        const removeInput = (blocks, targetBlock, name, i) => {
          const key = `${name}${i}`;
          if (!this.getInput(key)) return false;
          const input = targetBlock.inputs[key];
          if (input) {
            // blocks.deleteBlock(input.shadow);
            if (input.block !== null) {
              const blockInInput = blocks.getBlock(input.block);
              blockInInput.topLevel = true;
              blockInInput.parent = null;
              blocks.moveBlock({
                id: blockInInput.id,
                oldParent: this.id,
                oldInput: key,
                newParent: undefined,
                newInput: undefined,
                // newCoordinate: e.newCoordinate
              });
            }
            if (input.shadow !== null && input.shadow === input.block) {
              blocks.deleteBlock(input.shadow);
            }
          }
          toDel.push(key);
          this.removeInput(key);
          return true;
        };

        const wasRendered = this.rendered;
        this.rendered = false;

        // 更新参数
        Blockly.Events.setGroup(true);
        // 先记录现在的 mutation
        const oldExtraState = Blockly.Xml.domToText(this.mutationToDom(this));
        // 创建新的积木
        if (this.text) {
          this.inputList[0].fieldRow[2 - smallIcon].setText(
            fm(this.itemCount_ === 0 ? this.emptyText : this.text),
          );
        }
        let i;
        for (i = 0; i < this.itemCount_; i += 1) {
          if (this.opcode === 'getProp' || this.opcode === 'ndList' || this.opcode === 'addItem') {
            addInput('ARG', i, fm(this.joinCh));
          } else addInput('ARG', i, i > 0 ? ',' : '');
          if (this.opcode === 'obj') addInput('VALUE', i, '=');
        }
        // 将 + - 按钮移动到最右边
        // if (this.opcode === 'getProp') {
        //   // 找到最后一个参数位置
        //   const key = this.itemCount_ === 0 ? 'PROP' : `ARG${this.itemCount_ - 1}`;
        //   moveInputAfter('PLUS', key);
        //   // this.moveInputBefore('PLUS', 'PROP');
        // } else {
        //   this.moveInputBefore('PLUS', null);
        // }
        this.moveInputBefore('PLUS', null);
        if (this.itemCount_ === 0) {
          this.removeInput('MINUS');
        } else {
          if (!this.getInput('MINUS')) this.appendDummyInput('MINUS').appendField(new MinusButton());
          moveInputAfter('MINUS', 'PLUS');
        }
        if (runtime._editingTarget) {
          // 移除 input 并记录
          const { blocks } = runtime._editingTarget;
          const targetBlock = blocks.getBlock(this.id);
          let end = false;
          while (!end) {
            end = !removeInput(blocks, targetBlock, 'ARG', i);
            if (!end && this.opcode === 'obj') removeInput(blocks, targetBlock, 'VALUE', i);
            i += 1;
          }
          setTimeout(() => {
            toDel.forEach((key) => {
              delete targetBlock.inputs[key];
            });
          }, 0);
        }

        // 更新 oldItemCount，oldItemCount用于生成domMutation的
        this.oldItemCount = this.itemCount_;
        // 新的 mutation
        const newExtraState = Blockly.Xml.domToText(this.mutationToDom(this));
        if (oldExtraState !== newExtraState) {
          // 判断是否一样，不一样就fire一个mutation更新事件
          Blockly.Events.fire(
            new Blockly.Events.BlockChange(
              this,
              'mutation',
              null,
              oldExtraState,
              newExtraState, // 状态
            ),
          );
        }
        Blockly.Events.setGroup(false);

        this.rendered = wasRendered;
        if (wasRendered && !this.isInsertionMarker()) {
          this.initSvg();
          this.render();
        }
      },
      mutationToDom() {
        // 可以保存别的数据，会保存到sb3中，oldItemCount就是有多少个参数
        const container = document.createElement('mutation');
        container.setAttribute('items', `${this.oldItemCount}`);
        return container;
      },
      domToMutation(xmlElement) {
        // 读取 mutationToDom 保存的数据
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape(); // 读了之后更新
      },
      init(info) {
        // 积木初始化
        this.itemCount_ = 0;
        this.oldItemCount = this.itemCount_;

        this.plusButton = new PlusButton();
        this.minusButton = new MinusButton();

        this.appendDummyInput('PLUS').appendField(this.plusButton);
        // this.appendDummyInput('MINUS')
        //   .appendField(this.minusButton);
        [this.argType, this.opcode, this.emptyText, this.text, this.values, this.joinCh] = info;
        if (!this.joinCh) this.joinCh = ',';

        // if (this.opcode === 'getProp') {
        //   this.moveInputBefore('PLUS', 'PROP');
        //   this.moveInputBefore('PROP', 'PLUS');
        // }
      },
    };
  };

  const { scratchBlocks } = getScratchBlocksAndVM(runtime);
  const expandableAttr = createExpandableBlock(runtime, scratchBlocks);
  scratchBlocks.Blocks = new Proxy(scratchBlocks.Blocks, {
    set(target, property, value) {
      // 设置
      if (expandableBlocks[property]) {
        Object.keys(expandableAttr).forEach((key) => {
          if (key != 'init') {
            // 设置，除了init，后面设置
            value[key] = expandableAttr[key];
          }
        });
        const orgInit = value.init;
        value.init = function () {
          // 先用原本的init
          orgInit.call(this);
          // 然后再init expandable 的
          expandableAttr.init.call(this, expandableBlocks[property]);
        };
      }
      return Reflect.set(target, property, value);
    },
  });
};