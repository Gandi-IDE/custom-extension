(function (Scratch) {
  "use strict";

  //ExpandableBlock begin
  const PICTRUE = {
    plus: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNzFjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MWMwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==",
    minus:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAwIDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K",
  };

  const BLOCK_DEFAULT = {
    connect: ["DEFAULT", "DEFAULT2"],
  };

  const BLOCK_INPUT = {
    connect: {
      ADD: {
        type: "string",
      },
    },
  };

  const INPUT_JUDGE = {
    connect: "ADD",
  };

  const CONNECT_TEXT = {
    connect: ",",
  };
  const CONNECT_BEGIN = {
    connect: 1,
  };

  const BLOCK_BEGIN = {
    connect: "",
  };
  const BLOCK_END = {
    connect: "",
  };

  const GET_INPUT = {
    connect: {
      ADD: function (index) {
        return index % 2 ? "apple" : "banana";
      },
    },
  };

  const setExpandableBlocks = (expandableBlocks, runtime) => {
    // 在编辑器获取scratchBlocks与获取VM的方法来自 https://github.com/FurryR/lpp-scratch 的LPP扩展
    const hijack = (fn) => {
      const _orig = Function.prototype.apply;
      Function.prototype.apply = (thisArg) => thisArg;
      const result = fn();
      Function.prototype.apply = _orig;
      return result;
    };
    const getScratch = (runtime) => {
      function getEvent(e) {
        return e instanceof Array ? e[e.length - 1] : e;
      }
      const vm = hijack(getEvent(runtime._events["QUESTION"])).props.vm;
      return {
        scratchBlocks: hijack(getEvent(vm._events["EXTENSION_ADDED"]))
          ?.ScratchBlocks,
        vm,
      };
    };
    // 创建按钮
    const createButtons = (Blockly) => {
      // 按钮
      class FieldButton extends Blockly.FieldImage {
        constructor(src) {
          super(src, 25, 25, undefined, false);
          this.initialized = false;
        }
        init() {
          // Field has already been initialized once.
          super.init();
          if (!this.initialized) {
            // 初始化按钮
            Blockly.bindEventWithChecks_(
              this.getSvgRoot(),
              "mousedown",
              this,
              (e) => {
                e.stopPropagation();
                // 阻止事件冒泡，要不然你点按钮就会执行积木（点击积木）
              }
            );
            Blockly.bindEventWithChecks_(
              this.getSvgRoot(),
              "mouseup",
              this,
              this.handleClick.bind(this)
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
      // 图片
      const minusImage = PICTRUE.minus;
      const plusImage = PICTRUE.plus;

      return {
        PlusButton,
        MinusButton,
      };
    };
    const createExpandableBlock = (runtime, Blockly) => {
      const { PlusButton, MinusButton } = createButtons(Blockly);
      // 这个是scratch函数的utils
      const ProcedureUtils = Blockly.ScratchBlocks.ProcedureUtils;

      return {
        attachShadow_: function (input, argumentType, text) {
          if (argumentType == "number" || argumentType == "string") {
            let blockType = argumentType == "number" ? "math_number" : "text";
            Blockly.Events.disable();
            let newBlock;
            try {
              newBlock = this.workspace.newBlock(blockType);
              if (argumentType == "number") {
                newBlock.setFieldValue(Scratch.Cast.toString(text), "NUM");
              } else if (argumentType == "string") {
                newBlock.setFieldValue(Scratch.Cast.toString(text), "TEXT");
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
        updateShape: function () {
          let wasRendered = this.rendered;
          this.rendered = false;

          // 更新参数
          Blockly.Events.setGroup(true);
          // 先记录现在的 mutation
          let oldExtraState = Blockly.Xml.domToText(this.mutationToDom(this));

          // 创建新的积木
          let opcode_ = this.opcode_,
            inputs = BLOCK_INPUT[opcode_],
            inputKeys = Object.keys(inputs),
            i;
          for (i = 1; i <= this.itemCount_; i++) {
            if (!this.getInput(`${inputKeys[0]}${i}`)) {
              for (let j = 0; j < inputKeys.length; j++) {
                let inputKey = inputKeys[j],
                  input;

                input =
                  inputs[inputKey].type === "substack"
                    ? this.appendStatementInput(`${inputKey}${i}`)
                    : inputs[inputKey].type === "list" ||
                      inputs[inputKey].type === "text"
                      ? this.appendDummyInput(`${inputKey}${i}`)
                      : this.appendValueInput(`${inputKey}${i}`);
                if (inputs[inputKey].type === "text") {
                  if (
                    j < inputKeys.length - 1 ||
                    inputs[inputKey].canEndInput
                  ) {
                    let text = inputs[inputKey].text;
                    Array.isArray(inputs[inputKey].text)
                      ? i === 1 && j === 0
                        ? input.appendField(text[0])
                        : input.appendField(text[1])
                      : input.appendField(text);
                  }
                } else if (inputs[inputKey].type === "boolean") {
                  input.setCheck("Boolean");
                } else if (inputs[inputKey].type === "list") {
                  input.appendField(
                    new Blockly.FieldDropdown(inputs[inputKey].val),
                    `${inputKey}${i}`
                  );
                  const fields = runtime
                    .getEditingTarget()
                    ?.blocks.getBlock(this.id)?.fields;
                  if (fields) {
                    fields[`${inputKey}${i}`] = {
                      id: null,
                      name: `${inputKey}${i}`,
                      value: "+",
                    };
                  }
                  this.moveInputBefore(`${inputKey}${i}`, "END");
                } else if (inputs[inputKey].type === "substack") {
                  input.setCheck(null);
                } else {
                  this.attachShadow_(
                    input,
                    inputs[inputKey].type,
                    GET_INPUT[opcode_][inputKey](i)
                  );
                }
                if ((i > 1 || CONNECT_BEGIN[opcode_]) && j === 0)
                  input.appendField(CONNECT_TEXT[opcode_]);
              }
            }
          }
          if (runtime._editingTarget) {
            // 移除 input 并记录
            let iTemp = i;
            for (let j = 0; j < inputKeys.length; j++) {
              i = iTemp;
              const blocks = runtime._editingTarget.blocks;
              const targetBlock = blocks.getBlock(this.id);
              const toDel = [];
              let inputKey = inputKeys[j];
              while (this.getInput(`${inputKey}${i}`)) {
                const input = targetBlock.inputs[`${inputKey}${i}`];
                if (input) {
                  if (input.block !== null) {
                    const blockInInput = blocks.getBlock(input.block);
                    blockInInput.topLevel = true;
                    blockInInput.parent = null;
                    blocks.moveBlock({
                      id: blockInInput.id,
                      oldParent: this.id,
                      oldInput: `${inputKey}${i}`,
                      newParent: undefined,
                      newInput: undefined,
                      //newCoordinate: e.newCoordinate
                    });
                  }
                  if (input.shadow !== null && input.shadow == input.block) {
                    blocks.deleteBlock(input.shadow);
                  }
                }
                this.removeInput(`${inputKey}${i}`);
                if (inputs[inputKey].type === "list") {
                  const fields = runtime
                    .getEditingTarget()
                    ?.blocks.getBlock(this.id)?.fields;
                  if (fields) {
                    delete fields[`${inputKey}${i}`];
                  }
                } else {
                  toDel.push(`${inputKey}${i}`);
                }
                i++;
              }
              setTimeout(() => {
                toDel.forEach((i) => {
                  delete targetBlock.inputs[i];
                });
              }, 0);
            }
          }

          // 移动按钮
          this.removeInput("MINUS");
          this.moveInputBefore("BEGIN", "BEGIN");
          this.moveInputBefore("END", null);
          if (this.itemCount_ > 0) {
            this.minusButton = new MinusButton();
            this.appendDummyInput("MINUS").appendField(this.minusButton);
            this.moveInputBefore("MINUS", null);
          } else {
            let flag = 0,
              inputList = this.inputList;
            for (let i = 0; i < inputList.length; i++) {
              if (inputList[i]["name"] === "MINUS") flag = 1;
            }
            if (flag) this.removeInput("MINUS");
          }
          this.moveInputBefore("PLUS", null);

          // 更新 oldItemCount，oldItemCount用于生成domMutation的
          this.oldItemCount = this.itemCount_;
          // 新的 mutation
          const newExtraState = Blockly.Xml.domToText(this.mutationToDom(this));
          if (oldExtraState != newExtraState) {
            // 判断是否一样，不一样就fire一个mutation更新事件
            Blockly.Events.fire(
              new Blockly.Events.BlockChange(
                this,
                "mutation",
                null,
                oldExtraState,
                newExtraState // 状态
              )
            );
          }
          Blockly.Events.setGroup(false);

          this.rendered = wasRendered;
          if (wasRendered && !this.isInsertionMarker()) {
            this.initSvg();
            this.render();
          }
        },
        mutationToDom: function () {
          // 可以保存别的数据，会保存到sb3中，oldItemCount就是有多少个参数
          const container = document.createElement("mutation");
          container.setAttribute("items", `${this.oldItemCount}`);
          return container;
        },
        domToMutation: function (xmlElement) {
          // 读取 mutationToDom 保存的数据
          this.itemCount_ = parseInt(xmlElement.getAttribute("items"), 0);
          this.updateShape(); // 读了之后更新
        },
        init: function (type) {
          // 积木初始化
          this.itemCount_ = 0;
          this.oldItemCount = this.itemCount_;
          this.opcode_ = type[0];

          this.plusButton = new PlusButton();

          if (this.removeInput) {
            this.removeInput("BEGIN");
            this.removeInput("END");
            this.removeInput("PLUS");
          }
          this.appendDummyInput("BEGIN").appendField(BLOCK_BEGIN[this.opcode_]);
          this.appendDummyInput("END").appendField(BLOCK_END[this.opcode_]);
          this.appendDummyInput("PLUS").appendField(this.plusButton);
          if (this.moveInputBefore) {
            this.moveInputBefore("BEGIN", "BEGIN");
            this.moveInputBefore("END", null);
            this.moveInputBefore("PLUS", null);
          }
        },
      };
    };
    const { scratchBlocks } = getScratch(runtime);
    if (!scratchBlocks) return;
    const expandableAttr = createExpandableBlock(runtime, scratchBlocks);
    scratchBlocks.Blocks = new Proxy(scratchBlocks.Blocks, {
      set(target, property, value) {
        // 设置
        if (expandableBlocks[property]) {
          Object.keys(expandableAttr).forEach((key) => {
            if (key != "init") {
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
  //ExpandableBlock end

  /*Icon积木/菜单/小图标*/
  const Icon =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCwwLDgwLDgwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI3NC4wOTQ1NyIgeTE9IjIxNC4wOTQ1OSIgeDI9IjIwNS45MDU1NCIgeTI9IjE0NS45MDU1MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4ZmQwZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4ZmQwZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAuMDAwMDUsLTE0MC4wMDAwNykiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIyMC4xNjI2NiwyMjAuMDAwMDdjLTExLjEzNTUsMCAtMjAuMTYyNiwtOS4wMjcxIC0yMC4xNjI2LC0yMC4xNjI2di0zOS42NzQ4YzAsLTExLjEzNTUgOS4wMjcxLC0yMC4xNjI2IDIwLjE2MjYsLTIwLjE2MjZoMzkuNjc0OGMxMS4xMzU1LDAgMjAuMTYyNiw5LjAyNzEgMjAuMTYyNiwyMC4xNjI2djM5LjY3NDhjMCwxMS4xMzU1IC05LjAyNzEsMjAuMTYyNiAtMjAuMTYyNiwyMC4xNjI2eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIyMi42NDIzMywyMTUuMDAwMDdjLTkuNzQzNTYsMCAtMTcuNjQyMjcsLTcuODk4NzEgLTE3LjY0MjI3LC0xNy42NDIyN3YtMzQuNzE1NDVjMCwtOS43NDM1NiA3Ljg5ODcxLC0xNy42NDIyOCAxNy42NDIyNywtMTcuNjQyMjhoMzQuNzE1NDVjOS43NDM1NiwwIDE3LjY0MjI4LDcuODk4NzIgMTcuNjQyMjgsMTcuNjQyMjh2MzQuNzE1NDVjMCw5Ljc0MzU2IC03Ljg5ODcyLDE3LjY0MjI3IC0xNy42NDIyOCwxNy42NDIyN3oiIGZpbGw9IiM1M2FhZTciIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIyNS4zODU4MywxODQuODk0OTl2LTcuNTkwODJjLTQuODI2NDgsLTIuMDYzMzggLTcuODg1ODIsLTUuMTMwMTQgLTcuODg1ODIsLTguNTU0MTZjMCwtNi4yMTMyIDEwLjA3MzU5LC0xMS4yNSAyMi41LC0xMS4yNWMxMi40MjY0MSwwIDIyLjUsNS4wMzY4IDIyLjUsMTEuMjVjMCwwLjM3NjQgLTAuMDM2OTcsMC43NDg0NyAtMC4xMDkxOSwxLjExNTM3Yy0wLjk5OTk2LC00LjU3MDA5IC04Ljc0NTIyLC04LjEyNjE4IC0xOC4xNTE2MiwtOC4xMjYxOGMtMTAuMDg1MTcsMCAtMTguMjYwODEsNC4wODc4MiAtMTguMjYwODEsOS4xMzA0YzAsMi4yMzAxOSAxLjU5OTE4LDQuMjczNjEgNC4yNTU0Niw1Ljg1OTI1bDguNTEwMzgsMi44NTA1M2MwLjU5MTE5LDAuMDkzMTYgMS4xOTUzNiwwLjE3MTY4IDEuODEwODIsMC4yMzQ3MmwxNC4wNTkxNSwtNC43MDkwOHY3LjU5MDgyYzQuODI2NDgsMi4wNjMzOCA3Ljg4NTgyLDUuMTMwMTQgNy44ODU4Miw4LjU1NDE2YzAsNi4yMTMyIC0xMC4wNzM1OSwxMS4yNSAtMjIuNSwxMS4yNWMtMTIuNDI2NCwwIC0yMi41LC01LjAzNjggLTIyLjUsLTExLjI1YzAsLTAuMzc2NCAwLjAzNjk3LC0wLjc0ODQ3IDAuMTA5MTksLTEuMTE1MzdjMC45OTk5Niw0LjU3MDA5IDguNzQ1MjMsOC4xMjYxOCAxOC4xNTE2Myw4LjEyNjE4YzEwLjA4NTE3LDAgMTguMjYwODEsLTQuMDg3ODIgMTguMjYwODEsLTkuMTMwNGMwLC0yLjIzMDE5IC0xLjU5OTE4LC00LjI3MzYxIC00LjI1NTQ2LC01Ljg1OTI1bC04LjUxMDM4LC0yLjg1MDUzYy0wLjU5MTE5LC0wLjA5MzE2IC0xLjE5NTM2LC0wLjE3MTY4IC0xLjgxMDgyLC0wLjIzNDcyek0yNDAsMTgwaDBoMGgweiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS45OTk5NDU6MzkuOTk5OTI1OTMxMTAzMTgtLT4=";
  /*insetIcon大图标*/
  const insetIcon =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzc1IiB2aWV3Qm94PSIwLDAsNjAwLDM3NSI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGN4PSIyNTAuODYxMDQiIGN5PSIxMzMuODQwNjMiIHI9IjEwOS4yODkxMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjE2MDc4Ii8+PC9yYWRpYWxHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjYzLjYzMDE0IiB5MT0iMTA5LjUyNTM2IiB4Mj0iOTAuNzgyNzUiIHkyPSIxMDkuNTI1MzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMTYwNzgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI5MC43ODI3NSIgeTE9IjEwOS41MjU0MSIgeDI9IjExNy45MzUzNiIgeTI9IjEwOS41MjU0MSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0zIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4xNjA3OCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjM2Mi4wNjQ2NCIgeTE9IjEwOS41MjUzIiB4Mj0iMzg5LjIxNzI1IiB5Mj0iMTA5LjUyNTMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4xNjA3OCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIzODkuMjE3MjUiIHkxPSIxMDkuNTI1MzQiIHgyPSI0MTYuMzY5ODYiIHkyPSIxMDkuNTI1MzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4xNjA3OCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI5MS4wNDY4NyIgeTE9IjI2OS4yMTcyOCIgeDI9IjE5MC43Mzg4OCIgeTI9IjE2OS41MjUyNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci02Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4xNjA3OCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjMwOC42Mzc4NSIgeTE9IjE5MC43MDQ0MiIgeDI9IjM2NS45NzE1NyIgeTI9IjI0OC4wMzgxNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci03Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwLjE2MDc4Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAsNy41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNLTYwLDM2Ny41di0zNzVoNjAwdjM3NXoiIGZpbGw9IiM1M2FhZTciIHN0cm9rZS1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTTM0My4xNzk4NSwxNTguMjc3OTdjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NyAtMi43MTUyNSwtMi43MTUyNnYtMC4wMDAwMWMwLC0wLjAwMjE1IDAsLTAuMDA0MyAwLjAwMDAxLC0wLjAwNjQ1YzAsLTAuMDAwMDEgMCwtMC4wMDAwMSAwLC0wLjAwMDAydi0xMy41Njk4MmgtMC4wMDAwMXYtOC4xNDU3N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMiwwIDAuMDA2NDgsMC4wMDAwMWgxMy41Njk4MnYtMC4wMDAwMWg4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjcgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzIgMCwwLjAwNjQ3djEzLjU2OTgydjB2NS40MzA1MmgwLjAwMDAxdjEzLjU3NjI3YzAsMC4wMDUyOCAtMC4wMDAwMiwwLjAxMDU3IC0wLjAwMDA1LDAuMDE1ODR2Mi42OTk0MmgwLjAwMDAzdjguMTQ1NzdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMsLTAuMDAwMDEgLTAuMDA2NDYsLTAuMDAwMDFoLTIxLjcwOTEzYy0wLjAwMjE2LDAuMDAwMDEgLTAuMDA0MzEsMC4wMDAwMSAtMC4wMDY0NywwLjAwMDAxYy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjVjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI2IDIuNzE1MjYsLTIuNzE1MjZjMC4wMDAwMSwwIDAuMDAwMDEsMCAwLjAwMDAyLDB2MGgxNi4zMDA2NGMxLjQ5NTM4LC0wLjAwNDkzIDIuNzA2MSwtMS4yMTg3IDIuNzA2MSwtMi43MTUyNWgwLjAwMDAydi0xMC44NjEwMmgtMC4wMDAwMnYtMC4wMDAwMWgtMC4wMDAwMWMwLC0xLjQ5NjU0IC0xLjIxMDcxLC0yLjcxMDMxIC0yLjcwNjEsLTIuNzE1MjVoLTE2LjMwMDYzdjB6TTM0OC42MDEyNSwxMzYuNTU1OTRjLTEuNDk1MzgsMC4wMDQ5NCAtMi43MDYxLDEuMjE4NzEgLTIuNzA2MSwyLjcxNTI0aC0wLjAwMDA0djEwLjg3MDE1YzAuMDA0OTMsMS40OTUzOCAxLjIxODcxLDIuNzA2MTEgMi43MTUyNSwyLjcwNjExdjAuMDAwMDNoMTAuODcwMTVjMS40OTUzOCwtMC4wMDQ5NCAyLjcwNjEsLTEuMjE4NyAyLjcwNjEsLTIuNzE1MjRoMC4wMDAwNHYtMTAuODcwMTVjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDN6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzZmYjhlYiIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTEyLjM4Mjg2LDEzMy44NDA3MWMwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxM2MwLjAwMjE1LC0wLjAwMDAxIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0wLjAwMDAxLDAgLTAuMDAwMDEsMCAtMC4wMDAwMiwwdjAuMDAwMDFoLTE2LjMwMDY0Yy0xLjQ5NTM4LDAuMDA0OTQgLTIuNzA2MSwxLjIxODcxIC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNXYwLjAwMDAyaDAuMDAwMDVjMCwxLjQ5MzEyIDEuMjA1MTgsMi43MDQ3NiAyLjY5NTg0LDIuNzE1MTloMTYuMzA0NDFjMC4wMDIxNSwwIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NiwtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNXYxMC44NjEwNGMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNSwyLjcxNTI1Yy0wLjAwMjE1LDAgLTAuMDA0MzEsMCAtMC4wMDY0NiwwaC0yMS43MDkxMmMtMC4wMDIxNiwwLjAwMDAxIC0wLjAwNDMxLDAgLTAuMDA2NDcsMGMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAxLDAgMC4wMDAwMiwwdi0wLjAwMDAxaDE2LjMwMDY0YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDV2LTAuMDAwMDJoLTAuMDAwMDVjMCwtMS40OTMxMiAtMS4yMDUxOSwtMi43MDQ3NiAtMi42OTU4NCwtMi43MTUxOWgtMTYuMzA0NGMtMC4wMDIxNiwwIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDYsMC4wMDAwMWMtMC45MDkwNCwwIC0xLjcxMzc0LC0wLjQ0NjcyIC0yLjIwNjU2LC0xLjEzMjZjLTAuMzIwMTksLTAuNDQ1NTkgLTAuNTA4NzUsLTAuOTkyMTQgLTAuNTA4NzUsLTEuNTgyNzNjMCwtMC4wMDU3MSAwLjAwMDAxLC0wLjAxMTQxIDAuMDAwMDUsLTAuMDE3MTF6IiBmaWxsPSIjNmZiOGViIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xNDcuNjgxMTgsMTU4LjI3ODAzYy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjVjMCwtMC4wMDIxNiAwLC0wLjAwNDMyIDAuMDAwMDEsLTAuMDA2NDd2LTEzLjU2OTgyaC0wLjAwMDAxdi04LjE0NTc3YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNSAyLjcxNTI2LC0yLjcxNTI1YzAuMDAyMTUsMCAwLjAwNDMyLDAgMC4wMDY0NywwLjAwMDAxaDEzLjU2OTgydi0wLjAwMDAxaDguMTQ1NzhjMS40OTk1OSwwIDIuNzE1MjUsMS4yMTU2NyAyLjcxNTI1LDIuNzE1MjVjMCwwLjAwMjE2IDAsMC4wMDQzMiAtMC4wMDAwMSwwLjAwNjQ3djEzLjU2OTgyaDAuMDAwMDF2OC4xNDU3OGMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNSwyLjcxNTI1Yy0wLjAwMjE1LDAgLTAuMDA0MzIsMCAtMC4wMDY0NywtMC4wMDAwMWgtMTMuNTY5ODJ2MC4wMDAwMXpNMTUzLjEwMjU5LDEzNi41NTU5OGMtMS40OTUzOCwwLjAwNDk0IC0yLjcwNjEsMS4yMTg3MSAtMi43MDYxLDIuNzE1MjRoLTAuMDAwMDR2MTAuODcwMTVjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NzEsMi43MDYxIDIuNzE1MjUsMi43MDYxdjAuMDAwMDRoMTAuODcwMTVjMS40OTUzOCwtMC4wMDQ5NCAyLjcwNjExLC0xLjIxODcgMi43MDYxMSwtMi43MTUyNGgwLjAwMDAzdi0xMC44NzAxNmMtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjUsLTIuNzA2MXYtMC4wMDAwNHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjNmZiOGViIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xOTEuMTI1MjgsMTMxLjEyNTQ1YzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDNoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLjAwMDAxLDAuMDA0MzIgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI1IC0yLjcxNTI1LDIuNzE1MjVjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNWMwLC0wLjAwMDAxIDAsLTAuMDAwMDIgMCwtMC4wMDAwM2gtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDFoLTAuMDAwMDRjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcyIC0yLjcxNTI0LDIuNzA2MTF2MTYuMjk0MThjMC4wMDAwMSwwLjAwMjE2IDAuMDAwMDEsMC4wMDQzMSAwLjAwMDAxLDAuMDA2NDdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjUsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY3IC0yLjcxNTI2LC0yLjcxNTI2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMSAwLC0wLjAwMDAyaC0wLjAwMDAxdi0xNi4zMDA2M2MtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjExIC0yLjcxNTI0LC0yLjcwNjExaC0wLjAwMDAxdjAuMDAwMDFjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4zMDA2NGgtMC4wMDAwMWMwLDAuMDAwMDEgMCwwLjAwMDAyIDAsMC4wMDAwM2MwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjVjMCwtMC4wMDIxNiAwLC0wLjAwNDMyIDAuMDAwMDEsLTAuMDA2NDd2LTE5LjAwMDNoLTAuMDAwMDFjMCwwIDAsLTAuMDAwMDIgMCwtMC4wMDAwNXYtNS40MzA1MXoiIGZpbGw9IiM2ZmI4ZWIiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTIzNy4yODQ2MywxNDQuNjg0NThjMC4wMDAwNCwwLjAwNTcgMC4wMDAwNiwwLjAxMTQxIDAuMDAwMDYsMC4wMTcxMmMwLDAuMjUzNzggLTAuMDM0ODIsMC40OTk0MyAtMC4wOTk5MywwLjczMjQyYy0wLjA4NjQyLDAuMzA5MjQgLTAuMjI2MjEsMC41OTYxOSAtMC40MDg4MiwwLjg1MDMyYy0wLjQ5MjgyLDAuNjg1ODggLTEuMjk3NTIsMS4xMzI1OSAtMi4yMDY1NSwxLjEzMjU5Yy0wLjAwMjE1LDAgLTAuMDA0MzEsLTAuMDAwMDEgLTAuMDA2NDcsLTAuMDAwMDFoLTE2LjMwNDQxYy0xLjQ5MDY2LDAuMDEwNDMgLTIuNjk1ODQsMS4yMjIwNyAtMi42OTU4NCwyLjcxNTE5aC0wLjAwMDA1djAuMDAwMDNoMC4wMDAwNWMwLDEuNDk2NTQgMS4yMTA3MiwyLjcxMDMxIDIuNzA2MTEsMi43MTUyNGgxNi4zMDA2M3YwLjAwMDAxYzAuMDAwMDEsMCAwLjAwMDAyLDAgMC4wMDAwMywwYzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI2YzAsMS40OTk1OSAtMS4yMTU2NywyLjcxNTI1IC0yLjcxNTI2LDIuNzE1MjVjLTAuMDAyMTUsMCAtMC4wMDQzMiwwLjAwMDAxIC0wLjAwNjQ3LDBoLTIxLjcwOTEzYy0wLjAwMjE1LDAgLTAuMDA0MywwIC0wLjAwNjQ2LDBjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NSAtMi43MTUyNiwtMi43MTUyNXYtMTAuODUxODRjLTAuMDAwMDEsLTAuMDAzMDUgLTAuMDAwMDEsLTAuMDA2MDkgLTAuMDAwMDEsLTAuMDA5MTR2LTEwLjg2MTA1YzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNSAyLjcxNTI1LC0yLjcxNTI1YzAuMDAyMTUsMCAwLjAwNDMxLDAuMDAwMDEgMC4wMDY0NiwwLjAwMDAxaDIxLjcwOTEzYzAuMDAyMTUsLTAuMDAwMDEgMC4wMDQzMSwtMC4wMDAwMSAwLjAwNjQ3LC0wLjAwMDAxYzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjYgMi43MTUyNiwyLjcxNTI1YzAsMC4wMDQ4MiAtMC4wMDAwMSwwLjAwOTY1IC0wLjAwMDA0LDAuMDE0NDd6TTIyOS4xNTgyMywxNDEuOTg2NDRjMS40OTA2NiwtMC4wMTA0MyAyLjY5NTg0LC0xLjIyMjA4IDIuNjk1ODQsLTIuNzE1MTloMC4wMDAwNXYtMC4wMDAwMmgtMC4wMDAwNWMwLC0xLjQ5NjU0IC0xLjIxMDcyLC0yLjcxMDMxIC0yLjcwNjExLC0yLjcxNTI0aC0xMC44ODNjLTEuNDkzNjQsMC4wMDY5NyAtMi43MDIzMSwxLjIxOTk1IC0yLjcwMjMxLDIuNzE1MjNoLTAuMDAwMDV2MC4wMDAwMmgwLjAwMDA1YzAsMS40OTM4OSAxLjIwNjQyLDIuNzA2IDIuNjk4MTQsMi43MTUyeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM2ZmI4ZWIiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTI3OC4wMTM2NCwxMzEuMTI1MzljMC4wMDUyOCwwIDAuMDEwNTcsMC4wMDAwMiAwLjAxNTg0LDAuMDAwMDVoMi42OTk0MnYtMC4wMDAwM2g4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjYgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAtMC4wMDAwMSwwLjAwNDMxIC0wLjAwMDAxLDAuMDA2NDd2MjEuNzA5MTNjMC4wMDAwMSwwLjAwMjE2IDAuMDAwMDEsMC4wMDQzMSAwLjAwMDAxLDAuMDA2NDdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjUsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY3IC0yLjcxNTI2LC0yLjcxNTI2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMSAwLC0wLjAwMDAyaC0wLjAwMDAxdi0xNi4zMDA2M2MtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjQsLTIuNzA2MXYtMC4wMDAwMmgtMTAuODYxMDJ2MC4wMDAwMWgtMC4wMDAwMXYwLjAwMDAxYy0xLjQ5NjU0LDAgLTIuNzEwMzEsMS4yMTA3MiAtMi43MTUyNSwyLjcwNjF2MTYuMzAwNjR2MGMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMxIDAuMDAwMDEsLTAuMDA2NDd2LTE5LjAwMDNoLTAuMDAwMDFjMCwwIDAsLTAuMDAwMDIgMCwtMC4wMDAwNXYtNS40MzA1MWgwLjAwMDA4di0xOS4wMDAzN2MtMC4wMDAwMSwtMC4wMDIxNiAtMC4wMDAwMSwtMC4wMDQzMiAtMC4wMDAwMSwtMC4wMDY0N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNmMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY3IDIuNzE1MjYsMi43MTUyNmMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmgwLjAwMDAxdjE2LjMwMDY0YzAuMDA0OTMsMS40OTUzOCAxLjIxODcsMi43MDYxIDIuNzE1MjQsMi43MDYxdjAuMDAwMDVoMC4wMDkxMmMwLjAwMzA0LDAuMDAwMDEgMC4wMDYxMSwwLjAwMDAyIDAuMDA5MTUsMC4wMDAwNXoiIGZpbGw9IiM2ZmI4ZWIiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTI5OS43MzU3NSwxNTguMjc3OTdjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NiAtMi43MTUyNSwtMi43MTUyNWMwLC0wLjAwMjE2IDAsLTAuMDA0MzEgMCwtMC4wMDY0NnYtMjEuNzA5MTJjLTAuMDAwMDEsLTAuMDAyMTYgMCwtMC4wMDQzMiAwLC0wLjAwNjQ3YzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI1LC0yLjcxNTI2YzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI2YzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAydjB2MjEuNzIyMDR2MGMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1eiIgZmlsbD0iIzZmYjhlYiIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMjk3LjAyMDQ0LDExNy41NDkwOWMwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjUgMi43MTUyNiwtMi43MTUyNWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY3IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1Yy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjV6IiBmaWxsPSIjNmZiOGViIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0zMjEuNDU3OCwxMzEuMTI1MzljMC4wMDUyOCwwIDAuMDEwNTcsMC4wMDAwMiAwLjAxNTg0LDAuMDAwMDVoMi42OTk0MnYtMC4wMDAwM2g4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjYgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzEgMCwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLDAuMDA0MzEgMCwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NyAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDF2LTAuMDAwMDFoLTEwLjg2MTAydjAuMDAwMDF2MGgtMC4wMDAwMXYwLjAwMDAxYy0xLjQ5NjU0LDAgLTIuNzEwMzEsMS4yMTA3MiAtMi43MTUyNCwyLjcwNjF2MTYuMzAwNjR2MGMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMxIDAsLTAuMDA2NDd2LTE5LjAwMDN2MGMwLDAgMCwtMC4wMDAwMiAwLC0wLjAwMDA1di01LjQzMDUxeiIgZmlsbD0iIzZmYjhlYiIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMzEzLjMxMTk1LDE3OS45ODI4OWMwLjAwMDA0LDAuMDA1NyAwLjAwMDA1LDAuMDExNDEgMC4wMDAwNSwwLjAxNzEyYzAsMC4yNTM3OCAtMC4wMzQ4MSwwLjQ5OTQzIC0wLjA5OTkzLDAuNzMyNDJjLTAuMDg2NDIsMC4zMDkyNCAtMC4yMjYyMSwwLjU5NjE5IC0wLjQwODgyLDAuODUwMzJjLTAuNDkyODIsMC42ODU4OCAtMS4yOTc1MiwxLjEzMjU5IC0yLjIwNjU2LDEuMTMyNTljLTAuMDAyMTYsMCAtMC4wMDQzMSwtMC4wMDAwMSAtMC4wMDY0NiwtMC4wMDAwMWgtMTYuMzA0MzljLTEuNDkwNjYsMC4wMTA0MyAtMi42OTU4NCwxLjIyMjA3IC0yLjY5NTg0LDIuNzE1MTloLTAuMDAwMDV2MC4wMDAwMmgwLjAwMDA1YzAsMS40OTY1NCAxLjIxMDcxLDIuNzEwMzEgMi43MDYxLDIuNzE1MjRoMTYuMzAwNjN2MC4wMDAwMWMwLjAwMDAxLDAgMC4wMDAwMSwwIDAuMDAwMDIsMGMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTggLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0wLjAwMjE2LDAgLTAuMDA0MzEsMCAtMC4wMDY0NywtMC4wMDAwMWgtMjEuNzA5MTJjLTAuMDAyMTYsMCAtMC4wMDQzMSwwLjAwMDAxIC0wLjAwNjQ2LDAuMDAwMDFjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NiAtMi43MTUyNSwtMi43MTUyNnYtMTAuODUxODJjLTAuMDAwMDEsLTAuMDAzMDQgLTAuMDAwMDIsLTAuMDA2MSAtMC4wMDAwMiwtMC4wMDkxNXYtMTAuODYxMDRjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMC4wMDIxNiwwIDAuMDA0MzEsMC4wMDAwMSAwLjAwNjQ2LDAuMDAwMDFoMjEuNzA5MTJjMC4wMDIxNiwtMC4wMDAwMSAwLjAwNDMyLC0wLjAwMDAxIDAuMDA2NDcsLTAuMDAwMDFjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjVjMCwwLjAwNDgzIC0wLjAwMDAyLDAuMDA5NjUgLTAuMDAwMDQsMC4wMTQ0N3pNMzA1LjE4NTU1LDE3Ny4yODQ3NmMxLjQ5MDY2LC0wLjAxMDQzIDIuNjk1ODUsLTEuMjIyMDggMi42OTU4NSwtMi43MTUxOWgwLjAwMDA1di0wLjAwMDAyaC0wLjAwMDA1YzAsLTEuNDk2NTQgLTEuMjEwNzEsLTIuNzEwMzEgLTIuNzA2MSwtMi43MTUyNGgtMTAuODgzMDFjLTEuNDkzNjUsMC4wMDY5NyAtMi43MDIzMSwxLjIxOTk1IC0yLjcwMjMxLDIuNzE1MjNoLTAuMDAwMDV2MC4wMDAwMmgwLjAwMDA1YzAsMS40OTM4OSAxLjIwNjQyLDIuNzA2IDIuNjk4MTQsMi43MTUyMXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjNmZiOGViIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0yMjMuNzA4NDUsMTY2LjQyMzcxYzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDRoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY3IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTUgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ2djIxLjcwOTEyYzAuMDAwMDEsMC4wMDIxNSAwLjAwMDAxLDAuMDA0MzEgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NyAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjJjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDFoLTAuMDAwMDRjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4yOTQxOGMwLjAwMDAxLDAuMDAyMTUgMCwwLjAwNDMxIDAsMC4wMDY0N2MwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNSwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjcgLTIuNzE1MjYsLTIuNzE1MjZjMCwtMC4wMDAwMSAwLC0wLjAwMDAxIDAsLTAuMDAwMDJoLTAuMDAwMDF2LTE2LjMwMDYzYy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxaC0wLjAwMDAxdjAuMDAwMDFjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4zMDA2MmgtMC4wMDAwMWMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNSAwLC0wLjAwNDMxIDAsLTAuMDA2NDd2LTE5LjAwMDI5djBjMCwwIDAsLTAuMDAwMDEgMCwtMC4wMDAwNXYtNS40MzA1MXoiIGZpbGw9IiM2ZmI4ZWIiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTIwMS45ODY0LDE5My41NzYyOGMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY3IC0yLjcxNTI1LC0yLjcxNTI1YzAsLTAuMDAyMTUgMCwtMC4wMDQzMSAwLC0wLjAwNjQ2di0yMS43MDkxMmMtMC4wMDAwMSwtMC4wMDIxNSAwLC0wLjAwNDMxIDAsLTAuMDA2NDdjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI2IDIuNzE1MjUsLTIuNzE1MjZjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJ2MHYyMS43MjIwM3YwYzAsMS40OTk1OSAtMS4yMTU2NywyLjcxNTI1IC0yLjcxNTI2LDIuNzE1MjV6IiBmaWxsPSIjNmZiOGViIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0yNDIuNzE1MjMsMTkwLjg2MTAyYzAsLTAuMDAyMTUgLTAuMDAwMDEsLTAuMDA0MzEgMCwtMC4wMDY0N3YtMTMuNTY5ODJ2MHYtOC4xNDU3N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMiwwIDAuMDA2NDgsMC4wMDAwMWgxMy41Njk4MXYtMC4wMDAwMWg4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjcgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNSAwLDAuMDA0MzIgLTAuMDAwMDEsMC4wMDY0N3YxMy41Njk4MmgwLjAwMDAxdjguMTQ1NzdjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDcsMGgtMTMuNTY5ODJ2MGgtMi42OTY5M2MtMC4wMDMwNCwwLjAwMDAyIC0wLjAwNjA5LDAuMDAwMDMgLTAuMDA5MTUsMC4wMDAwNWgtMC4wMDkxMXYwLjAwMDA1Yy0xLjQ5NjU0LDAgLTIuNzEwMzEsMS4yMTA3MiAtMi43MTUyNSwyLjcwNjF2MTYuMzAwNjNoLTAuMDAwMDFjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjYsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY3IC0yLjcxNTI1LC0yLjcxNTI2YzAsLTAuMDAyMTYgMCwtMC4wMDQzMSAwLjAwMDAxLC0wLjAwNjQ3di0yMS42OTU2OWMtMC4wMDAwNSwtMC4wMDY2MyAtMC4wMDAwNywtMC4wMTMyOCAtMC4wMDAwNywtMC4wMTk5NHpNMjUwLjg1MTg4LDE3MS44NTQyM2MtMS40OTUzOCwwLjAwNDkzIC0yLjcwNjEsMS4yMTg3MSAtMi43MDYxLDIuNzE1MjVoLTAuMDAwMDR2MTAuODcwMTVjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NzEsMi43MDYxIDIuNzE1MjQsMi43MDYxdjAuMDAwMDNoMTAuODcwMTVjMS40OTUzOCwtMC4wMDQ5MyAyLjcwNjEsLTEuMjE4NyAyLjcwNjEsLTIuNzE1MjRoMC4wMDAwNHYtMTAuODcwMTVjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDR6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzZmYjhlYiIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMjc4LjAxMzY1LDE5My41NzYzYy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNSAwLjAwMDAxLC0wLjAwNDMxIDAuMDAwMDEsLTAuMDA2NDZ2LTE5LjAwMDM4aC0wLjAwMDA3di01LjQzMDUxaDAuMDAwMDd2LTE5LjAwMDMzYy0wLjAwMDAxLC0wLjAwMjE1IC0wLjAwMDAxLC0wLjAwNDMyIC0wLjAwMDAxLC0wLjAwNjQ3YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNiAyLjcxNTI1LC0yLjcxNTI2YzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI2YzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAyaDAuMDAwMDF2MjEuNzIyMDNoLTAuMDAwMDFjMCwwLjAwMDAxIDAsMC4wMDAwMyAwLDAuMDAwMDVjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJoMC4wMDAwMXYyMS43MjIwM2gtMC4wMDAwMWMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2eiIgZmlsbD0iIzZmYjhlYiIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNOTMuNTA3MjEsMTkzLjgxODczdi03LjU5MDgyYy04LjU4MDQxLC0yLjA2MzM4IC0xNC4wMTkyNCwtNS4xMzAxMyAtMTQuMDE5MjQsLTguNTU0MTZjMCwtNi4yMTMyIDE3LjkwODYsLTExLjI1IDM5Ljk5OTk5LC0xMS4yNWMyMi4wOTEzOSwwIDQwLjAwMDAxLDUuMDM2OCA0MC4wMDAwMSwxMS4yNWMwLDAuMzc2NCAtMC4wNjU3MywwLjc0ODQ3IC0wLjE5NDEyLDEuMTE1MzdjLTEuNzc3NywtNC41NzAwOSAtMTUuNTQ3MDgsLTguMTI2MTkgLTMyLjI2OTU1LC04LjEyNjE5Yy0xNy45MjkxOSwwIC0zMi40NjM2OCw0LjA4NzgyIC0zMi40NjM2OCw5LjEzMDRjMCwyLjIzMDE5IDIuODQyOTgsNC4yNzM2MiA3LjU2NTI2LDUuODU5MjVsMTUuMTI5NTcsMi44NTA1M2MxLjk5MDE3LDAuMTc2NCA0LjA2MzEsMC4zMDAzMyA2LjE5ODMsMC4zNjYwM2MtMS4zMDQ1MywwLjAzNjExIC0yLjYyNzQ3LDAuMDU0NTkgLTMuOTY1NzYsMC4wNTQ1OXYweiIgZmlsbD0iIzZmYjhlYiIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNDAyLjc4NDQ1LDE2Ni40MjM3OHY3LjU5MDgyYzguNTgwNDEsMi4wNjMzOCAxNC4wMTkyNCw1LjEzMDEzIDE0LjAxOTI0LDguNTU0MTZjMCw2LjIxMzIgLTE3LjkwODYxLDExLjI1IC0zOS45OTk5OSwxMS4yNWMtMjIuMDkxMzksMCAtNDAuMDAwMDEsLTUuMDM2OCAtNDAuMDAwMDEsLTExLjI1YzAsLTAuMzc2NCAwLjA2NTcyLC0wLjc0ODQ3IDAuMTk0MTIsLTEuMTE1MzdjMS43Nzc3LDQuNTcwMDkgMTUuNTQ3MDgsOC4xMjYxOSAzMi4yNjk1NSw4LjEyNjE5YzE3LjkyOTE5LDAgMzIuNDYzNjksLTQuMDg3ODIgMzIuNDYzNjksLTkuMTMwNGMwLC0yLjIzMDE5IC0yLjg0Mjk4LC00LjI3MzYyIC03LjU2NTI2LC01Ljg1OTI1bC0xNS4xMjk1NywtMi44NTA1M2MtMS45OTAxNywtMC4xNzY0IC00LjA2MzEsLTAuMzAwMzMgLTYuMTk4MywtMC4zNjYwM2MxLjMwNDUzLC0wLjAzNjExIDIuNjI3NDcsLTAuMDU0NTkgMy45NjU3NiwtMC4wNTQ1OXYweiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM2ZmI4ZWIiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTI0OC4xNDU4LDExMi4xMTg1MmMwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNnYwYzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI2YzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAydjB2MTYuMzAwNjNjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NzEsMi43MDYxMSAyLjcxNTI1LDIuNzA2MTF2MC4wMDAwNWgwLjAwOTEyYzEuNDk1MzgsMC4wMDQ5NCAyLjcwNjEsMS4yMTg3IDIuNzA2MSwyLjcxNTI0aDAuMDAwMDV2MC4wMDAwM2gtMC4wMDAwNWMwLDAuMDAwMDIgMCwwLjAwMDA0IDAsMC4wMDAwNmgwLjAwMDA1djAuMDAwMDNoLTAuMDAwMDVjMCwxLjQ5NjU0IC0xLjIxMDcxLDIuNzEwMyAtMi43MDYxLDIuNzE1MjRoLTAuMDA5MTJ2MC4wMDAwNWMtMS40OTM0OCwwIC0yLjcwNTM1LDEuMjA1NzkgLTIuNzE1MiwyLjY5Njk3djEwLjg4ODRjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NzEsMi43MDYxIDIuNzE1MjUsMi43MDYxdjAuMDAwMDVoMC4wMDkxMmMxLjQ5NTM4LDAuMDA0OTQgMi43MDYxLDEuMjE4NzEgMi43MDYxLDIuNzE1MjRoMC4wMDAwNXYwLjAwMDAyaC0wLjAwMDA1YzAsMS40OTY1NCAtMS4yMTA3MSwyLjcxMDMxIC0yLjcwNjEsMi43MTUyNGMtMC4wMDAwMSwwIC01LjQzOTY2LDAgLTUuNDM5NjcsMGMtMC40NDk0NiwwIC0wLjg3MzQyLC0wLjEwOTIxIC0xLjI0Njc4LC0wLjMwMjUzYy0wLjg3MjM3LC0wLjQ1MTY4IC0xLjQ2ODU2LC0xLjM2MjU5IC0xLjQ2ODU2LC0yLjQxMjc2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMiAwLC0wLjAwMDAzdjB2LTE2LjMwMDYzYy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNSwtMi43MDYxdi0wLjAwMDA1aC0wLjAwOTEyYy0xLjQ5NTM4LC0wLjAwNDk0IC0yLjcwNjEsLTEuMjE4NyAtMi43MDYxLC0yLjcxNTI0aC0wLjAwMDA1di0wLjAwMDAyaDAuMDAwMDVjMCwtMS4wMTAxNyAwLjU1MTYzLC0xLjg5MTUgMS4zNzAxLC0yLjM1OTE4YzAuMzk0MDksLTAuMjI1MjEgMC44NTAwNSwtMC4zNTQ1IDEuMzM2MDgsLTAuMzU2MWgwLjAwOTEydi0wLjAwMDA1YzEuNDk2NTQsMCAyLjcxMDMxLC0xLjIxMDcyIDIuNzE1MjQsLTIuNzA2MXYtMTYuMzAwNjNjMCwtMC4wMDAwMSAwLC0wLjAwMDAxIDAsLTAuMDAwMDJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMTY2LjY4ODA0LDE2OS4xMzkwMWMwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNmMwLjAwMjE1LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxMWMwLjAwMjE1LC0wLjAwMDAxIDAuMDA0MzIsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY3IDIuNzE1MjYsMi43MTUyNmMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1Yy0wLjAwMDAxLDAgLTAuMDAwMDEsMCAtMC4wMDAwMiwwdjAuMDAwMDFoLTE2LjMwMDYyYy0xLjQ5NTM4LDAuMDA0OTMgLTIuNzA2MTEsMS4yMTg3IC0yLjcwNjExLDIuNzE1MjRoLTAuMDAwMDV2MC4wMDAwMmgwLjAwMDA1YzAsMS40OTMxMSAxLjIwNTE5LDIuNzA0NzYgMi42OTU4NSwyLjcxNTE5aDE2LjMwNDRjMC4wMDIxNSwwIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NiwtMC4wMDAwMWMxLjQ5OTU4LDAgMi43MTUyNSwxLjIxNTY1IDIuNzE1MjUsMi43MTUyNXYxMC44NjEwNGMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNSAtMi43MTUyNSwyLjcxNTI1Yy0wLjAwMjE1LDAgLTAuMDA0MzEsLTAuMDAwMDEgLTAuMDA2NDYsLTAuMDAwMDFoLTIxLjcwOTEyYy0wLjAwMjE1LDAuMDAwMDEgLTAuMDA0MzEsMC4wMDAwMSAtMC4wMDY0NywwLjAwMDAxYy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjcgLTIuNzE1MjYsLTIuNzE1MjVjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI2IDIuNzE1MjYsLTIuNzE1MjZjMC4wMDAwMSwwIDAuMDAwMDEsMCAwLjAwMDAyLDB2MGgxNi4zMDA2M2MxLjQ5NTM4LC0wLjAwNDkzIDIuNzA2MSwtMS4yMTg3IDIuNzA2MSwtMi43MTUyNWgwLjAwMDA1di0wLjAwMDAyaC0wLjAwMDA1YzAsLTEuNDkzMTEgLTEuMjA1MTksLTIuNzA0NzYgLTIuNjk1ODQsLTIuNzE1MTloLTE2LjMwNDM5Yy0wLjAwMjE1LDAgLTAuMDA0MzEsMCAtMC4wMDY0NiwwYy0wLjkwOTAzLDAgLTEuNzEzNzQsLTAuNDQ2NzEgLTIuMjA2NTYsLTEuMTMyNTljLTAuMzIwMiwtMC40NDU1OSAtMC41MDg3NSwtMC45OTIxNSAtMC41MDg3NSwtMS41ODI3NGMwLC0wLjAwNTcxIDAuMDAwMDEsLTAuMDExNDEgMC4wMDAwNiwtMC4wMTcxMXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTMyMy4yMjczLDE5My41NzY3MmMtMS40OTk2MSwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4YzAsLTAuMDAyMTUgMC4wMDAwMSwtMC4wMDQzMSAwLjAwMDAxLC0wLjAwNjQ2di0yMS43MDkzOGMtMC4wMDAwMSwtMC4wMDIxNSAtMC4wMDAwMSwtMC4wMDQzMiAtMC4wMDAwMSwtMC4wMDY0N2MwLC0xLjQ5OTYyIDEuMjE1NjgsLTIuNzE1MjkgMi43MTUyOCwtMi43MTUyOWMxLjQ5OTYyLDAgMi43MTUyOSwxLjIxNTY4IDIuNzE1MjksMi43MTUyOWMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmgwLjAwMDAxdi0wLjAwMDAyaDAuMDAwMDFjMCwtMS40OTk2MiAxLjIxNTY3LC0yLjcxNTI5IDIuNzE1MjgsLTIuNzE1MjloMi43MTUyM3YtMC4wMDAwNWgyLjcwNjEzYzAuMDAzMDQsLTAuMDAwMDEgMC4wMDYwOSwtMC4wMDAwMSAwLjAwOTE1LC0wLjAwMDAxYzEuNDk5NjEsMCAyLjcxNTI5LDEuMjE1NjcgMi43MTUyOSwyLjcxNTI5YzAsMS40OTk2MiAtMS4yMTU2OCwyLjcxNTI5IC0yLjcxNTI5LDIuNzE1Mjl2MC4wMDAwMWgtMi43MTUyM3YwLjAwMDA0aC0yLjcwODhjLTAuMDAyMTYsMC4wMDAwMSAtMC4wMDQzMiwwLjAwMDAxIC0wLjAwNjQ4LDAuMDAwMDFjLTAuMDAyMTYsMCAtMC4wMDQzMiwwIC0wLjAwNjQ3LC0wLjAwMDAxaC0yLjcwODgydjE5LjAwNzA1aC0wLjAwMDAxYzAsMS40OTk2MiAtMS4yMTU2NywyLjcxNTI4IC0yLjcxNTI5LDIuNzE1Mjh6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik05MC43ODI3NSwxMDkuNTI1MzhoNy4yMDAwMXYxMC43OTE0NmMwLjAwMDAxLDAuMDAyODYgMC4wMDAwMSwwLjAwNTcyIDAuMDAwMDEsMC4wMDg1OGMwLDEuOTg4MjMgLTEuNjExNzgsMy42MDAwMSAtMy42LDMuNjAwMDFjLTEuOTg4MjMsMCAtMy42MDAwMSwtMS42MTE3OCAtMy42MDAwMSwtMy42MDAwMWMwLC0wLjAwMDAxIDAsLTAuMDAwMDIgMCwtMC4wMDAwM2gtMC4wMDAwMXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTk3Ljk4Mjc3LDEwOS41MjUzOWg3LjIwMDAxdjEwLjc5MTQ2YzAuMDAwMDEsMC4wMDI4NiAwLjAwMDAxLDAuMDA1NzIgMC4wMDAwMSwwLjAwODU4YzAsMS45ODgyMyAtMS42MTE3OCwzLjYwMDAxIC0zLjYsMy42MDAwMWMtMS45ODgyMywwIC0zLjYwMDAxLC0xLjYxMTc4IC0zLjYwMDAxLC0zLjYwMDAxYzAsLTAuMDAwMDEgMCwtMC4wMDAwMiAwLC0wLjAwMDAzaC0wLjAwMDAxeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMzc0LjgxNzIxLDEwOS41MjUzMWg3LjIwMDAxdjEwLjc5MTQ2YzAuMDAwMDEsMC4wMDI4NiAwLjAwMDAxLDAuMDA1NzIgMC4wMDAwMSwwLjAwODU4YzAsMS45ODgyMyAtMS42MTE3OCwzLjYwMDAxIC0zLjYsMy42MDAwMWMtMS45ODgyMywwIC0zLjYwMDAxLC0xLjYxMTc4IC0zLjYwMDAxLC0zLjYwMDAxYzAsLTAuMDAwMDEgMCwtMC4wMDAwMiAwLC0wLjAwMDAzaC0wLjAwMDAxeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMzgyLjAxNzIzLDEwOS41MjUzMmg3LjIwMDAxdjEwLjc5MTQ2YzAuMDAwMDEsMC4wMDI4NiAwLjAwMDAxLDAuMDA1NzIgMC4wMDAwMSwwLjAwODU4YzAsMS45ODgyMyAtMS42MTE3OCwzLjYwMDAxIC0zLjYsMy42MDAwMWMtMS45ODgyMywwIC0zLjYwMDAxLC0xLjYxMTc4IC0zLjYwMDAxLC0zLjYwMDAxYzAsLTAuMDAwMDEgMCwtMC4wMDAwMiAwLC0wLjAwMDAzaC0wLjAwMDAxeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNDk2LjI5MTUsMTgyLjcxNTI2YzAsLTEuNDk5NiAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjQsLTIuNzE1MjZ2MGMxLjQ5OTYsMCAyLjcxNTI2LDEuMjE1NjYgMi43MTUyNiwyLjcxNTI2djAuMDAwMDJ2MHYxNi4zMDA2MmMwLjAwNDk0LDEuNDk1MzggMS4yMTg3LDIuNzA2MSAyLjcxNTI0LDIuNzA2MXYwLjAwMDA0aDAuMDA5MTJjMS40OTUzOCwwLjAwNDk0IDIuNzA2MSwxLjIxODcgMi43MDYxLDIuNzE1MjRoMC4wMDAwNnYwLjAwMDA0aC0wLjAwMDA2YzAsMC4wMDAwMiAwLDAuMDAwMDQgMCwwLjAwMDA2aDAuMDAwMDZ2MC4wMDAwNGgtMC4wMDAwNmMwLDEuNDk2NTQgLTEuMjEwNzIsMi43MTAzIC0yLjcwNjEsMi43MTUyNGgtMC4wMDkxMnYwLjAwMDA0Yy0xLjQ5MzQ4LDAgLTIuNzA1MzYsMS4yMDU4IC0yLjcxNTIsMi42OTY5OHYxMC44ODg0YzAuMDA0OTQsMS40OTUzOCAxLjIxODcsMi43MDYxIDIuNzE1MjQsMi43MDYxdjAuMDAwMDRoMC4wMDkxMmMxLjQ5NTM4LDAuMDA0OTQgMi43MDYxLDEuMjE4NyAyLjcwNjEsMi43MTUyNGgwLjAwMDA0djAuMDAwMDJoLTAuMDAwMDRjMCwxLjQ5NjU0IC0xLjIxMDcyLDIuNzEwMzIgLTIuNzA2MSwyLjcxNTI0Yy0wLjAwMDAyLDAgLTUuNDM5NjYsMCAtNS40Mzk2NiwwYy0wLjQ0OTQ2LDAgLTAuODczNDIsLTAuMTA5MjIgLTEuMjQ2NzgsLTAuMzAyNTRjLTAuODcyMzYsLTAuNDUxNjggLTEuNDY4NTYsLTEuMzYyNTggLTEuNDY4NTYsLTIuNDEyNzZjMCwwIDAsLTAuMDAwMDIgMCwtMC4wMDAwNHYwdi0xNi4zMDA2MmMtMC4wMDQ5NCwtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjYsLTIuNzA2MXYtMC4wMDAwNmgtMC4wMDkxMmMtMS40OTUzOCwtMC4wMDQ5NCAtMi43MDYxLC0xLjIxODcgLTIuNzA2MSwtMi43MTUyNGgtMC4wMDAwNnYtMC4wMDAwMmgwLjAwMDA2YzAsLTEuMDEwMTggMC41NTE2NCwtMS44OTE1IDEuMzcwMSwtMi4zNTkxOGMwLjM5NDEsLTAuMjI1MiAwLjg1MDA0LC0wLjM1NDUgMS4zMzYwOCwtMC4zNTYxaDAuMDA5MTJ2LTAuMDAwMDRjMS40OTY1NCwwIDIuNzEwMywtMS4yMTA3MiAyLjcxNTI0LC0yLjcwNjF2LTE2LjMwMDY0YzAsMCAwLDAgMCwtMC4wMDAwMnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik00NjMuNzA4MzIsMjA0LjQzNzVjMCwtMS40OTk2IDEuMjE1NjgsLTIuNzE1MjYgMi43MTUyNCwtMi43MTUyNmMwLjAwMjE2LDAgMC4wMDQzLDAgMC4wMDY0NiwwaDIxLjcwOTEyYzAuMDAyMTYsMCAwLjAwNDMyLDAgMC4wMDY0NiwwYzEuNDk5NTgsMCAyLjcxNTI2LDEuMjE1NjggMi43MTUyNiwyLjcxNTI2YzAsMS40OTk2IC0xLjIxNTY2LDIuNzE1MjQgLTIuNzE1MjYsMi43MTUyNGMtMC4wMDAwMiwwIDAsMCAtMC4wMDAwMiwwdjBoLTE2LjMwMDYyYy0xLjQ5NTM4LDAuMDA0OTIgLTIuNzA2MSwxLjIxODcgLTIuNzA2MSwyLjcxNTI0aC0wLjAwMDA2djAuMDAwMDJoMC4wMDAwNmMwLDEuNDkzMTIgMS4yMDUyLDIuNzA0NzYgMi42OTU4NiwyLjcxNTJoMTYuMzA0NGMwLjAwMjE2LDAgMC4wMDQzMiwtMC4wMDAwMiAwLjAwNjQ2LC0wLjAwMDAyYzEuNDk5NTgsMCAyLjcxNTI0LDEuMjE1NjYgMi43MTUyNCwyLjcxNTI2djEwLjg2MTA0YzAsMS40OTk2IC0xLjIxNTY4LDIuNzE1MjQgLTIuNzE1MjQsMi43MTUyNGMtMC4wMDIxNiwwIC0wLjAwNDMyLDAgLTAuMDA2NDYsMGgtMjEuNzA5MTJjLTAuMDAyMTYsMCAtMC4wMDQzLDAgLTAuMDA2NDYsMGMtMS40OTk1OCwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI0YzAsLTEuNDk5NiAxLjIxNTY4LC0yLjcxNTI2IDIuNzE1MjYsLTIuNzE1MjZjMC4wMDAwMiwwIDAsMCAwLjAwMDAyLDB2MGgxNi4zMDA2NGMxLjQ5NTM4LC0wLjAwNDkyIDIuNzA2MSwtMS4yMTg3IDIuNzA2MSwtMi43MTUyNGgwLjAwMDA2di0wLjAwMDAyaC0wLjAwMDA2YzAsLTEuNDkzMTIgLTEuMjA1MiwtMi43MDQ3NiAtMi42OTU4NCwtMi43MTUyaC0xNi4zMDQzOGMtMC4wMDIxNiwwIC0wLjAwNDMsMCAtMC4wMDY0NiwwYy0wLjkwOTA0LDAgLTEuNzEzNzQsLTAuNDQ2NyAtMi4yMDY1NiwtMS4xMzI1OGMtMC4zMjAyLC0wLjQ0NTYgLTAuNTA4NzQsLTAuOTkyMTYgLTAuNTA4NzQsLTEuNTgyNzRjMCwtMC4wMDU3MiAwLC0wLjAxMTQgMC4wMDAwNiwtMC4wMTcxMnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTUwOS44Njc4NCwyMjguODc0NzJjLTEuNDk5NiwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4YzAsLTAuMDAyMTYgMC4wMDAwMiwtMC4wMDQzIDAuMDAwMDIsLTAuMDA2NDZ2LTIxLjcwOTM4Yy0wLjAwMDAyLC0wLjAwMjE2IC0wLjAwMDAyLC0wLjAwNDMyIC0wLjAwMDAyLC0wLjAwNjQ4YzAsLTEuNDk5NjIgMS4yMTU2OCwtMi43MTUyOCAyLjcxNTI4LC0yLjcxNTI4YzEuNDk5NjIsMCAyLjcxNTMsMS4yMTU2OCAyLjcxNTMsMi43MTUyOHYwLjAwMDAydjB2LTAuMDAwMDJoMC4wMDAwMmMwLC0xLjQ5OTYyIDEuMjE1NjgsLTIuNzE1MjggMi43MTUyOCwtMi43MTUyOGgyLjcxNTIydi0wLjAwMDA0aDIuNzA2MTRjMC4wMDMwNCwwIDAuMDA2MSwwIDAuMDA5MTYsMGMxLjQ5OTYsMCAyLjcxNTMsMS4yMTU2NiAyLjcxNTMsMi43MTUyOGMwLDEuNDk5NjIgLTEuMjE1NjgsMi43MTUyOCAtMi43MTUzLDIuNzE1Mjh2MGgtMi43MTUyMnYwLjAwMDA0aC0yLjcwODhjLTAuMDAyMTYsMCAtMC4wMDQzMiwwLjAwMDAyIC0wLjAwNjQ4LDAuMDAwMDJjLTAuMDAyMTYsMCAtMC4wMDQzMiwwIC0wLjAwNjQ4LC0wLjAwMDAyaC0yLjcwODgydjE5LjAwNzA2djBjMCwxLjQ5OTYyIC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MywyLjcxNTI4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMzU3LjgxMzI0LDI4Ni43NTgwNmMwLC0xLjQ5OTYgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI0LC0yLjcxNTI2djBjMS40OTk2LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNnYwLjAwMDAydjB2MTYuMzAwNjJjMC4wMDQ5NCwxLjQ5NTM4IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNGgwLjAwOTEyYzEuNDk1MzgsMC4wMDQ5NCAyLjcwNjEsMS4yMTg3IDIuNzA2MSwyLjcxNTI0aDAuMDAwMDZ2MC4wMDAwNGgtMC4wMDAwNmMwLDAuMDAwMDIgMCwwLjAwMDA0IDAsMC4wMDAwNmgwLjAwMDA2djAuMDAwMDRoLTAuMDAwMDZjMCwxLjQ5NjU0IC0xLjIxMDcyLDIuNzEwMyAtMi43MDYxLDIuNzE1MjRoLTAuMDA5MTJ2MC4wMDAwNGMtMS40OTM0OCwwIC0yLjcwNTM2LDEuMjA1OCAtMi43MTUyLDIuNjk2OTh2MTAuODg4NGMwLjAwNDk0LDEuNDk1MzggMS4yMTg3LDIuNzA2MSAyLjcxNTI0LDIuNzA2MXYwLjAwMDA0aDAuMDA5MTJjMS40OTUzOCwwLjAwNDk0IDIuNzA2MSwxLjIxODcgMi43MDYxLDIuNzE1MjRoMC4wMDAwNHYwLjAwMDAyaC0wLjAwMDA0YzAsMS40OTY1NCAtMS4yMTA3MiwyLjcxMDMyIC0yLjcwNjEsMi43MTUyNGMtMC4wMDAwMiwwIC01LjQzOTY2LDAgLTUuNDM5NjYsMGMtMC40NDk0NiwwIC0wLjg3MzQyLC0wLjEwOTIyIC0xLjI0Njc4LC0wLjMwMjU0Yy0wLjg3MjM2LC0wLjQ1MTY4IC0xLjQ2ODU2LC0xLjM2MjU4IC0xLjQ2ODU2LC0yLjQxMjc2YzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDR2MHYtMTYuMzAwNjJjLTAuMDA0OTQsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI2LC0yLjcwNjF2LTAuMDAwMDZoLTAuMDA5MTJjLTEuNDk1MzgsLTAuMDA0OTQgLTIuNzA2MSwtMS4yMTg3IC0yLjcwNjEsLTIuNzE1MjRoLTAuMDAwMDZ2LTAuMDAwMDJoMC4wMDAwNmMwLC0xLjAxMDE4IDAuNTUxNjQsLTEuODkxNSAxLjM3MDEsLTIuMzU5MThjMC4zOTQxLC0wLjIyNTIgMC44NTAwNCwtMC4zNTQ1IDEuMzM2MDgsLTAuMzU2MWgwLjAwOTEydi0wLjAwMDA0YzEuNDk2NTQsMCAyLjcxMDMsLTEuMjEwNzIgMi43MTUyNCwtMi43MDYxdi0xNi4zMDA2NGMwLDAgMCwwIDAsLTAuMDAwMDJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMzg0Ljk2NjAyLDMwOC40ODAzYzAsLTEuNDk5NiAxLjIxNTY4LC0yLjcxNTI2IDIuNzE1MjQsLTIuNzE1MjZjMC4wMDIxNiwwIDAuMDA0MywwIDAuMDA2NDYsMGgyMS43MDkxMmMwLjAwMjE2LDAgMC4wMDQzMiwwIDAuMDA2NDYsMGMxLjQ5OTU4LDAgMi43MTUyNiwxLjIxNTY4IDIuNzE1MjYsMi43MTUyNmMwLDEuNDk5NiAtMS4yMTU2NiwyLjcxNTI0IC0yLjcxNTI2LDIuNzE1MjRjLTAuMDAwMDIsMCAwLDAgLTAuMDAwMDIsMHYwaC0xNi4zMDA2MmMtMS40OTUzOCwwLjAwNDkyIC0yLjcwNjEsMS4yMTg3IC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNnYwLjAwMDAyaDAuMDAwMDZjMCwxLjQ5MzEyIDEuMjA1MiwyLjcwNDc2IDIuNjk1ODYsMi43MTUyaDE2LjMwNDRjMC4wMDIxNiwwIDAuMDA0MzIsLTAuMDAwMDIgMC4wMDY0NiwtMC4wMDAwMmMxLjQ5OTU4LDAgMi43MTUyNCwxLjIxNTY2IDIuNzE1MjQsMi43MTUyNnYxMC44NjEwNGMwLDEuNDk5NiAtMS4yMTU2OCwyLjcxNTI0IC0yLjcxNTI0LDIuNzE1MjRjLTAuMDAyMTYsMCAtMC4wMDQzMiwwIC0wLjAwNjQ2LDBoLTIxLjcwOTEyYy0wLjAwMjE2LDAgLTAuMDA0MywwIC0wLjAwNjQ2LDBjLTEuNDk5NTgsMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNGMwLC0xLjQ5OTYgMS4yMTU2OCwtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDIsMCAwLDAgMC4wMDAwMiwwdjBoMTYuMzAwNjRjMS40OTUzOCwtMC4wMDQ5MiAyLjcwNjEsLTEuMjE4NyAyLjcwNjEsLTIuNzE1MjRoMC4wMDAwNnYtMC4wMDAwMmgtMC4wMDAwNmMwLC0xLjQ5MzEyIC0xLjIwNTIsLTIuNzA0NzYgLTIuNjk1ODQsLTIuNzE1MmgtMTYuMzA0MzhjLTAuMDAyMTYsMCAtMC4wMDQzLDAgLTAuMDA2NDYsMGMtMC45MDkwNCwwIC0xLjcxMzc0LC0wLjQ0NjcgLTIuMjA2NTYsLTEuMTMyNThjLTAuMzIwMiwtMC40NDU2IC0wLjUwODc0LC0wLjk5MjE2IC0wLjUwODc0LC0xLjU4Mjc0YzAsLTAuMDA1NzIgMCwtMC4wMTE0IDAuMDAwMDYsLTAuMDE3MTJ6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0zNzEuMzg5NTYsMzMyLjkxNzVjLTEuNDk5NiwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4YzAsLTAuMDAyMTYgMC4wMDAwMiwtMC4wMDQzIDAuMDAwMDIsLTAuMDA2NDZ2LTIxLjcwOTM4Yy0wLjAwMDAyLC0wLjAwMjE2IC0wLjAwMDAyLC0wLjAwNDMyIC0wLjAwMDAyLC0wLjAwNjQ4YzAsLTEuNDk5NjIgMS4yMTU2OCwtMi43MTUyOCAyLjcxNTI4LC0yLjcxNTI4YzEuNDk5NjIsMCAyLjcxNTMsMS4yMTU2OCAyLjcxNTMsMi43MTUyOHYwLjAwMDAydjB2LTAuMDAwMDJoMC4wMDAwMmMwLC0xLjQ5OTYyIDEuMjE1NjgsLTIuNzE1MjggMi43MTUyOCwtMi43MTUyOGgyLjcxNTIydi0wLjAwMDA0aDIuNzA2MTRjMC4wMDMwNCwwIDAuMDA2MSwwIDAuMDA5MTYsMGMxLjQ5OTYsMCAyLjcxNTMsMS4yMTU2NiAyLjcxNTMsMi43MTUyOGMwLDEuNDk5NjIgLTEuMjE1NjgsMi43MTUyOCAtMi43MTUzLDIuNzE1Mjh2MGgtMi43MTUyMnYwLjAwMDA0aC0yLjcwODhjLTAuMDAyMTYsMCAtMC4wMDQzMiwwLjAwMDAyIC0wLjAwNjQ4LDAuMDAwMDJjLTAuMDAyMTYsMCAtMC4wMDQzMiwwIC0wLjAwNjQ4LC0wLjAwMDAyaC0yLjcwODgydjE5LjAwNzA2djBjMCwxLjQ5OTYyIC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MywyLjcxNTI4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNNDQ3LjQxNjk0LDMzMi45MTc1Yy0xLjQ5OTYsMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNnYtMC4wMDAwMmMwLC0wLjAwMjE2IDAsLTAuMDA0MyAwLjAwMDAyLC0wLjAwNjQ0YzAsMCAwLDAgMCwtMC4wMDAwMnYtMTMuNTY5ODJoLTAuMDAwMDJ2LTguMTQ1NzZjMCwtMS40OTk2IDEuMjE1NjYsLTIuNzE1MjQgMi43MTUyNiwtMi43MTUyNGMwLjAwMjE2LDAgMC4wMDQzMiwwIDAuMDA2NDgsMGgxMy41Njk4MnYwaDguMTQ1NzZjMS40OTk2LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNGMwLDAuMDAyMTYgMCwwLjAwNDMyIDAsMC4wMDY0OHYxMy41Njk4MnYwdjUuNDMwNTJoMC4wMDAwMnYxMy41NzYyOGMwLDAuMDA1MjggLTAuMDAwMDIsMC4wMTA1OCAtMC4wMDAwNCwwLjAxNTg0djIuNjk5NDJoMC4wMDAwNHY4LjE0NTc4YzAsMS40OTk2IC0xLjIxNTY2LDIuNzE1MjQgLTIuNzE1MjYsMi43MTUyNGMtMC4wMDIxNiwwIC0wLjAwNDMsMCAtMC4wMDY0NiwwaC0yMS43MDkxNGMtMC4wMDIxNiwwIC0wLjAwNDMyLDAgLTAuMDA2NDgsMGMtMS40OTk2LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjRjMCwtMS40OTk2IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNiwtMi43MTUyNmMwLjAwMDAyLDAgMC4wMDAwMiwwIDAuMDAwMDIsMHYwaDE2LjMwMDY0YzEuNDk1MzgsLTAuMDA0OTIgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDJ2LTEwLjg2MTAyaC0wLjAwMDAydjBoLTAuMDAwMDJjMCwtMS40OTY1NCAtMS4yMTA3MiwtMi43MTAzIC0yLjcwNjEsLTIuNzE1MjRoLTE2LjMwMDY0djB6TTQ1Mi44MzgzNCwzMTEuMTk1NDZjLTEuNDk1MzgsMC4wMDQ5NCAtMi43MDYxLDEuMjE4NyAtMi43MDYxLDIuNzE1MjRoLTAuMDAwMDR2MTAuODcwMTZjMC4wMDQ5NCwxLjQ5NTM4IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNGgxMC44NzAxNGMxLjQ5NTM4LC0wLjAwNDk0IDIuNzA2MSwtMS4yMTg3IDIuNzA2MSwtMi43MTUyNGgwLjAwMDA0di0xMC44NzAxNmMtMC4wMDQ5NCwtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjQsLTIuNzA2MXYtMC4wMDAwMnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik00MzEuMTI1MzgsMzA1Ljc2NDkyYzAuMDA1MjgsMCAwLjAxMDU4LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA0aDIuNjk5NDJ2LTAuMDAwMDRoOC4xNDU3OGMxLjQ5OTYsMCAyLjcxNTI2LDEuMjE1NjYgMi43MTUyNiwyLjcxNTI0YzAsMC4wMDIxNiAwLDAuMDA0MzIgMCwwLjAwNjQ4djIxLjcwOTEyYzAuMDAwMDIsMC4wMDIxNiAwLDAuMDA0MzIgMCwwLjAwNjQ4YzAsMS40OTk2IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjYsMi43MTUyNmMtMS40OTk2LDAgLTIuNzE1MjYsLTEuMjE1NjggLTIuNzE1MjYsLTIuNzE1MjZjMCwwIDAsMCAwLC0wLjAwMDAyaC0wLjAwMDAydi0xNi4zMDA2NGMtMC4wMDQ5NCwtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjQsLTIuNzA2MXYwdjBoLTEwLjg2MTAydjB2MGgtMC4wMDAwMnYwYy0xLjQ5NjU0LDAgLTIuNzEwMywxLjIxMDcyIC0yLjcxNTI0LDIuNzA2MXYxNi4zMDA2NHYwYzAsMCAwLDAgMCwwLjAwMDAyYzAsMS40OTk2IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjYsMi43MTUyNmMtMS40OTk2LDAgLTIuNzE1MjQsLTEuMjE1NjggLTIuNzE1MjQsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMgMCwtMC4wMDY0NnYtMTkuMDAwM3YwYzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDR2LTUuNDMwNTJ6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNNDE0LjgzMzg4LDMzMi45MTc1MmMtMS40OTk2LDAgLTIuNzE1MjQsLTEuMjE1NjYgLTIuNzE1MjQsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMgMCwtMC4wMDY0NnYtMjEuNzA5MTJjLTAuMDAwMDIsLTAuMDAyMTYgMCwtMC4wMDQzMiAwLC0wLjAwNjQ4YzAsLTEuNDk5NiAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjQsLTIuNzE1MjZjMS40OTk2LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNmMwLDAgMCwwIDAsMC4wMDAwMnYwdjIxLjcyMjA0djBjMCwxLjQ5OTYgLTEuMjE1NjYsMi43MTUyNCAtMi43MTUyNiwyLjcxNTI0eiIvPjxwYXRoIGQ9Ik00MTIuMTE4NTYsMjkyLjE4ODY0YzAsLTEuNDk5NiAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjYsLTIuNzE1MjZjMS40OTk2LDAgMi43MTUyNiwxLjIxNTY4IDIuNzE1MjYsMi43MTUyNmMwLDEuNDk5NiAtMS4yMTU2NiwyLjcxNTI0IC0yLjcxNTI2LDIuNzE1MjRjLTEuNDk5NiwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI0eiIvPjwvZz48cGF0aCBkPSJNMjQyLjcxNTI4LDQ4Ljg3NTE2Yy0xLjQ5OTYsMCAtMi43MTUyOCwtMS4yMTU2OCAtMi43MTUyOCwtMi43MTUyOGMwLC0wLjAwMjE2IDAuMDAwMDIsLTAuMDA0MyAwLjAwMDAyLC0wLjAwNjQ2di0yMS43MDkzOGMtMC4wMDAwMiwtMC4wMDIxNiAtMC4wMDAwMiwtMC4wMDQzMiAtMC4wMDAwMiwtMC4wMDY0OGMwLC0xLjQ5OTYyIDEuMjE1NjgsLTIuNzE1MjggMi43MTUyOCwtMi43MTUyOGMxLjQ5OTYyLDAgMi43MTUzLDEuMjE1NjggMi43MTUzLDIuNzE1Mjh2MC4wMDAwMnYwdi0wLjAwMDAyaDAuMDAwMDJjMCwtMS40OTk2MiAxLjIxNTY4LC0yLjcxNTI4IDIuNzE1MjgsLTIuNzE1MjhoMi43MTUyMnYtMC4wMDAwNGgyLjcwNjE0YzAuMDAzMDQsMCAwLjAwNjEsMCAwLjAwOTE2LDBjMS40OTk2LDAgMi43MTUzLDEuMjE1NjYgMi43MTUzLDIuNzE1MjhjMCwxLjQ5OTYyIC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MywyLjcxNTI4djBoLTIuNzE1MjJ2MC4wMDAwNGgtMi43MDg4Yy0wLjAwMjE2LDAgLTAuMDA0MzIsMC4wMDAwMiAtMC4wMDY0OCwwLjAwMDAyYy0wLjAwMjE2LDAgLTAuMDA0MzIsMCAtMC4wMDY0OCwtMC4wMDAwMmgtMi43MDg4MnYxOS4wMDcwNnYwYzAsMS40OTk2MiAtMS4yMTU2OCwyLjcxNTI4IC0yLjcxNTMsMi43MTUyOHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTI1Ni4yOTE3NCwyNC40Mzc1YzAsLTEuNDk5NiAxLjIxNTY4LC0yLjcxNTI2IDIuNzE1MjQsLTIuNzE1MjZjMC4wMDIxNiwwIDAuMDA0MywwIDAuMDA2NDYsMGgyMS43MDkxMmMwLjAwMjE2LDAgMC4wMDQzMiwwIDAuMDA2NDYsMGMxLjQ5OTU4LDAgMi43MTUyNiwxLjIxNTY4IDIuNzE1MjYsMi43MTUyNmMwLDEuNDk5NiAtMS4yMTU2NiwyLjcxNTI0IC0yLjcxNTI2LDIuNzE1MjRjLTAuMDAwMDIsMCAwLDAgLTAuMDAwMDIsMHYwaC0xNi4zMDA2MmMtMS40OTUzOCwwLjAwNDkyIC0yLjcwNjEsMS4yMTg3IC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNnYwLjAwMDAyaDAuMDAwMDZjMCwxLjQ5MzEyIDEuMjA1MiwyLjcwNDc2IDIuNjk1ODYsMi43MTUyaDE2LjMwNDRjMC4wMDIxNiwwIDAuMDA0MzIsLTAuMDAwMDIgMC4wMDY0NiwtMC4wMDAwMmMxLjQ5OTU4LDAgMi43MTUyNCwxLjIxNTY2IDIuNzE1MjQsMi43MTUyNnYxMC44NjEwNGMwLDEuNDk5NiAtMS4yMTU2OCwyLjcxNTI0IC0yLjcxNTI0LDIuNzE1MjRjLTAuMDAyMTYsMCAtMC4wMDQzMiwwIC0wLjAwNjQ2LDBoLTIxLjcwOTEyYy0wLjAwMjE2LDAgLTAuMDA0MywwIC0wLjAwNjQ2LDBjLTEuNDk5NTgsMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNGMwLC0xLjQ5OTYgMS4yMTU2OCwtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDIsMCAwLDAgMC4wMDAwMiwwdjBoMTYuMzAwNjRjMS40OTUzOCwtMC4wMDQ5MiAyLjcwNjEsLTEuMjE4NyAyLjcwNjEsLTIuNzE1MjRoMC4wMDAwNnYtMC4wMDAwMmgtMC4wMDAwNmMwLC0xLjQ5MzEyIC0xLjIwNTIsLTIuNzA0NzYgLTIuNjk1ODQsLTIuNzE1MmgtMTYuMzA0MzhjLTAuMDAyMTYsMCAtMC4wMDQzLDAgLTAuMDA2NDYsMGMtMC45MDkwNCwwIC0xLjcxMzc0LC0wLjQ0NjcgLTIuMjA2NTYsLTEuMTMyNThjLTAuMzIwMiwtMC40NDU2IC0wLjUwODc0LC0wLjk5MjE2IC0wLjUwODc0LC0xLjU4Mjc0YzAsLTAuMDA1NzIgMCwtMC4wMTE0IDAuMDAwMDYsLTAuMDE3MTJ6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yODguODc0OTIsMi43MTUyNmMwLC0xLjQ5OTYgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI0LC0yLjcxNTI2djBjMS40OTk2LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNnYwLjAwMDAydjB2MTYuMzAwNjJjMC4wMDQ5NCwxLjQ5NTM4IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNGgwLjAwOTEyYzEuNDk1MzgsMC4wMDQ5NCAyLjcwNjEsMS4yMTg3IDIuNzA2MSwyLjcxNTI0aDAuMDAwMDZ2MC4wMDAwNGgtMC4wMDAwNmMwLDAuMDAwMDIgMCwwLjAwMDA0IDAsMC4wMDAwNmgwLjAwMDA2djAuMDAwMDRoLTAuMDAwMDZjMCwxLjQ5NjU0IC0xLjIxMDcyLDIuNzEwMyAtMi43MDYxLDIuNzE1MjRoLTAuMDA5MTJ2MC4wMDAwNGMtMS40OTM0OCwwIC0yLjcwNTM2LDEuMjA1OCAtMi43MTUyLDIuNjk2OTh2MTAuODg4NGMwLjAwNDk0LDEuNDk1MzggMS4yMTg3LDIuNzA2MSAyLjcxNTI0LDIuNzA2MXYwLjAwMDA0aDAuMDA5MTJjMS40OTUzOCwwLjAwNDk0IDIuNzA2MSwxLjIxODcgMi43MDYxLDIuNzE1MjRoMC4wMDAwNHYwLjAwMDAyaC0wLjAwMDA0YzAsMS40OTY1NCAtMS4yMTA3MiwyLjcxMDMyIC0yLjcwNjEsMi43MTUyNGMtMC4wMDAwMiwwIC01LjQzOTY2LDAgLTUuNDM5NjYsMGMtMC40NDk0NiwwIC0wLjg3MzQyLC0wLjEwOTIyIC0xLjI0Njc4LC0wLjMwMjU0Yy0wLjg3MjM2LC0wLjQ1MTY4IC0xLjQ2ODU2LC0xLjM2MjU4IC0xLjQ2ODU2LC0yLjQxMjc2YzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDR2MHYtMTYuMzAwNjJjLTAuMDA0OTQsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI2LC0yLjcwNjF2LTAuMDAwMDZoLTAuMDA5MTJjLTEuNDk1MzgsLTAuMDA0OTQgLTIuNzA2MSwtMS4yMTg3IC0yLjcwNjEsLTIuNzE1MjRoLTAuMDAwMDZ2LTAuMDAwMDJoMC4wMDAwNmMwLC0xLjAxMDE4IDAuNTUxNjQsLTEuODkxNSAxLjM3MDEsLTIuMzU5MThjMC4zOTQxLC0wLjIyNTIgMC44NTAwNCwtMC4zNTQ1IDEuMzM2MDgsLTAuMzU2MWgwLjAwOTEydi0wLjAwMDA0YzEuNDk2NTQsMCAyLjcxMDMsLTEuMjEwNzIgMi43MTUyNCwtMi43MDYxdi0xNi4zMDA2NGMwLDAgMCwwIDAsLTAuMDAwMDJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMzQ3Ljc0OTk2LDM3LjE1MjYyYzAsLTEuNDk5NiAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjQsLTIuNzE1MjZ2MGMxLjQ5OTYsMCAyLjcxNTI2LDEuMjE1NjYgMi43MTUyNiwyLjcxNTI2djAuMDAwMDJ2MHYxNi4zMDA2MmMwLjAwNDk0LDEuNDk1MzggMS4yMTg3LDIuNzA2MSAyLjcxNTI0LDIuNzA2MXYwLjAwMDA0aDAuMDA5MTJjMS40OTUzOCwwLjAwNDk0IDIuNzA2MSwxLjIxODcgMi43MDYxLDIuNzE1MjRoMC4wMDAwNnYwLjAwMDA0aC0wLjAwMDA2YzAsMC4wMDAwMiAwLDAuMDAwMDQgMCwwLjAwMDA2aDAuMDAwMDZ2MC4wMDAwNGgtMC4wMDAwNmMwLDEuNDk2NTQgLTEuMjEwNzIsMi43MTAzIC0yLjcwNjEsMi43MTUyNGgtMC4wMDkxMnYwLjAwMDA0Yy0xLjQ5MzQ4LDAgLTIuNzA1MzYsMS4yMDU4IC0yLjcxNTIsMi42OTY5OHYxMC44ODg0YzAuMDA0OTQsMS40OTUzOCAxLjIxODcsMi43MDYxIDIuNzE1MjQsMi43MDYxdjAuMDAwMDRoMC4wMDkxMmMxLjQ5NTM4LDAuMDA0OTQgMi43MDYxLDEuMjE4NyAyLjcwNjEsMi43MTUyNGgwLjAwMDA0djAuMDAwMDJoLTAuMDAwMDRjMCwxLjQ5NjU0IC0xLjIxMDcyLDIuNzEwMzIgLTIuNzA2MSwyLjcxNTI0Yy0wLjAwMDAyLDAgLTUuNDM5NjYsMCAtNS40Mzk2NiwwYy0wLjQ0OTQ2LDAgLTAuODczNDIsLTAuMTA5MjIgLTEuMjQ2NzgsLTAuMzAyNTRjLTAuODcyMzYsLTAuNDUxNjggLTEuNDY4NTYsLTEuMzYyNTggLTEuNDY4NTYsLTIuNDEyNzZjMCwwIDAsLTAuMDAwMDIgMCwtMC4wMDAwNHYwdi0xNi4zMDA2MmMtMC4wMDQ5NCwtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjYsLTIuNzA2MXYtMC4wMDAwNmgtMC4wMDkxMmMtMS40OTUzOCwtMC4wMDQ5NCAtMi43MDYxLC0xLjIxODcgLTIuNzA2MSwtMi43MTUyNGgtMC4wMDAwNnYtMC4wMDAwMmgwLjAwMDA2YzAsLTEuMDEwMTggMC41NTE2NCwtMS44OTE1IDEuMzcwMSwtMi4zNTkxOGMwLjM5NDEsLTAuMjI1MiAwLjg1MDA0LC0wLjM1NDUgMS4zMzYwOCwtMC4zNTYxaDAuMDA5MTJ2LTAuMDAwMDRjMS40OTY1NCwwIDIuNzEwMywtMS4yMTA3MiAyLjcxNTI0LC0yLjcwNjF2LTE2LjMwMDY0YzAsMCAwLDAgMCwtMC4wMDAwMnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0zNjEuMzI2MjgsODMuMzEyMDZjLTEuNDk5NiwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4YzAsLTAuMDAyMTYgMC4wMDAwMiwtMC4wMDQzIDAuMDAwMDIsLTAuMDA2NDZ2LTIxLjcwOTM4Yy0wLjAwMDAyLC0wLjAwMjE2IC0wLjAwMDAyLC0wLjAwNDMyIC0wLjAwMDAyLC0wLjAwNjQ4YzAsLTEuNDk5NjIgMS4yMTU2OCwtMi43MTUyOCAyLjcxNTI4LC0yLjcxNTI4YzEuNDk5NjIsMCAyLjcxNTMsMS4yMTU2OCAyLjcxNTMsMi43MTUyOHYwLjAwMDAydjB2LTAuMDAwMDJoMC4wMDAwMmMwLC0xLjQ5OTYyIDEuMjE1NjgsLTIuNzE1MjggMi43MTUyOCwtMi43MTUyOGgyLjcxNTIydi0wLjAwMDA0aDIuNzA2MTRjMC4wMDMwNCwwIDAuMDA2MSwwIDAuMDA5MTYsMGMxLjQ5OTYsMCAyLjcxNTMsMS4yMTU2NiAyLjcxNTMsMi43MTUyOGMwLDEuNDk5NjIgLTEuMjE1NjgsMi43MTUyOCAtMi43MTUzLDIuNzE1Mjh2MGgtMi43MTUyMnYwLjAwMDA0aC0yLjcwODhjLTAuMDAyMTYsMCAtMC4wMDQzMiwwLjAwMDAyIC0wLjAwNjQ4LDAuMDAwMDJjLTAuMDAyMTYsMCAtMC4wMDQzMiwwIC0wLjAwNjQ4LC0wLjAwMDAyaC0yLjcwODgydjE5LjAwNzA2djBjMCwxLjQ5OTYyIC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MywyLjcxNTI4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMzc0LjkwMjc0LDU4Ljg3NDRjMCwtMS40OTk2IDEuMjE1NjgsLTIuNzE1MjYgMi43MTUyNCwtMi43MTUyNmMwLjAwMjE2LDAgMC4wMDQzLDAgMC4wMDY0NiwwaDIxLjcwOTEyYzAuMDAyMTYsMCAwLjAwNDMyLDAgMC4wMDY0NiwwYzEuNDk5NTgsMCAyLjcxNTI2LDEuMjE1NjggMi43MTUyNiwyLjcxNTI2YzAsMS40OTk2IC0xLjIxNTY2LDIuNzE1MjQgLTIuNzE1MjYsMi43MTUyNGMtMC4wMDAwMiwwIDAsMCAtMC4wMDAwMiwwdjBoLTE2LjMwMDYyYy0xLjQ5NTM4LDAuMDA0OTIgLTIuNzA2MSwxLjIxODcgLTIuNzA2MSwyLjcxNTI0aC0wLjAwMDA2djAuMDAwMDJoMC4wMDAwNmMwLDEuNDkzMTIgMS4yMDUyLDIuNzA0NzYgMi42OTU4NiwyLjcxNTJoMTYuMzA0NGMwLjAwMjE2LDAgMC4wMDQzMiwtMC4wMDAwMiAwLjAwNjQ2LC0wLjAwMDAyYzEuNDk5NTgsMCAyLjcxNTI0LDEuMjE1NjYgMi43MTUyNCwyLjcxNTI2djEwLjg2MTA0YzAsMS40OTk2IC0xLjIxNTY4LDIuNzE1MjQgLTIuNzE1MjQsMi43MTUyNGMtMC4wMDIxNiwwIC0wLjAwNDMyLDAgLTAuMDA2NDYsMGgtMjEuNzA5MTJjLTAuMDAyMTYsMCAtMC4wMDQzLDAgLTAuMDA2NDYsMGMtMS40OTk1OCwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI0YzAsLTEuNDk5NiAxLjIxNTY4LC0yLjcxNTI2IDIuNzE1MjYsLTIuNzE1MjZjMC4wMDAwMiwwIDAsMCAwLjAwMDAyLDB2MGgxNi4zMDA2NGMxLjQ5NTM4LC0wLjAwNDkyIDIuNzA2MSwtMS4yMTg3IDIuNzA2MSwtMi43MTUyNGgwLjAwMDA2di0wLjAwMDAyaC0wLjAwMDA2YzAsLTEuNDkzMTIgLTEuMjA1MiwtMi43MDQ3NiAtMi42OTU4NCwtMi43MTUyaC0xNi4zMDQzOGMtMC4wMDIxNiwwIC0wLjAwNDMsMCAtMC4wMDY0NiwwYy0wLjkwOTA0LDAgLTEuNzEzNzQsLTAuNDQ2NyAtMi4yMDY1NiwtMS4xMzI1OGMtMC4zMjAyLC0wLjQ0NTYgLTAuNTA4NzQsLTAuOTkyMTYgLTAuNTA4NzQsLTEuNTgyNzRjMCwtMC4wMDU3MiAwLC0wLjAxMTQgMC4wMDAwNiwtMC4wMTcxMnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIuNzE1MjEsMy40MDI2NGMwLC0xLjQ5OTYgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI0LC0yLjcxNTI2djBjMS40OTk2LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNnYwLjAwMDAydjB2MTYuMzAwNjJjMC4wMDQ5NCwxLjQ5NTM4IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNGgwLjAwOTEyYzEuNDk1MzgsMC4wMDQ5NCAyLjcwNjEsMS4yMTg3IDIuNzA2MSwyLjcxNTI0aDAuMDAwMDZ2MC4wMDAwNGgtMC4wMDAwNmMwLDAuMDAwMDIgMCwwLjAwMDA0IDAsMC4wMDAwNmgwLjAwMDA2djAuMDAwMDRoLTAuMDAwMDZjMCwxLjQ5NjU0IC0xLjIxMDcyLDIuNzEwMyAtMi43MDYxLDIuNzE1MjRoLTAuMDA5MTJ2MC4wMDAwNGMtMS40OTM0OCwwIC0yLjcwNTM2LDEuMjA1OCAtMi43MTUyLDIuNjk2OTh2MTAuODg4NGMwLjAwNDk0LDEuNDk1MzggMS4yMTg3LDIuNzA2MSAyLjcxNTI0LDIuNzA2MXYwLjAwMDA0aDAuMDA5MTJjMS40OTUzOCwwLjAwNDk0IDIuNzA2MSwxLjIxODcgMi43MDYxLDIuNzE1MjRoMC4wMDAwNHYwLjAwMDAyaC0wLjAwMDA0YzAsMS40OTY1NCAtMS4yMTA3MiwyLjcxMDMyIC0yLjcwNjEsMi43MTUyNGMtMC4wMDAwMiwwIC01LjQzOTY2LDAgLTUuNDM5NjYsMGMtMC40NDk0NiwwIC0wLjg3MzQyLC0wLjEwOTIyIC0xLjI0Njc4LC0wLjMwMjU0Yy0wLjg3MjM2LC0wLjQ1MTY4IC0xLjQ2ODU2LC0xLjM2MjU4IC0xLjQ2ODU2LC0yLjQxMjc2YzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDR2MHYtMTYuMzAwNjJjLTAuMDA0OTQsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI2LC0yLjcwNjF2LTAuMDAwMDZoLTAuMDA5MTJjLTEuNDk1MzgsLTAuMDA0OTQgLTIuNzA2MSwtMS4yMTg3IC0yLjcwNjEsLTIuNzE1MjRoLTAuMDAwMDZ2LTAuMDAwMDJoMC4wMDAwNmMwLC0xLjAxMDE4IDAuNTUxNjQsLTEuODkxNSAxLjM3MDEsLTIuMzU5MThjMC4zOTQxLC0wLjIyNTIgMC44NTAwNCwtMC4zNTQ1IDEuMzM2MDgsLTAuMzU2MWgwLjAwOTEydi0wLjAwMDA0YzEuNDk2NTQsMCAyLjcxMDMsLTEuMjEwNzIgMi43MTUyNCwtMi43MDYxdi0xNi4zMDA2NGMwLDAgMCwwIDAsLTAuMDAwMDJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNLTI5Ljg2Nzk1LDQuOTU2MjRjMCwtMi43MzcyNiAxLjIxNTY4LC00Ljk1NjI0IDIuNzE1MjQsLTQuOTU2MjRjMC4wMDIxNiwwIDAuMDA0MywwIDAuMDA2NDYsMGgyMS43MDkxMmMwLjAwMjE2LDAgMC4wMDQzMiwwIDAuMDA2NDYsMGMxLjQ5OTU4LDAgMi43MTUyNiwyLjIxOTAyIDIuNzE1MjYsNC45NTYyNGMwLDIuNzM3MjYgLTEuMjE1NjYsNC45NTYyIC0yLjcxNTI2LDQuOTU2MmMtMC4wMDAwMiwwIDAsMCAtMC4wMDAwMiwwdjBoLTE2LjMwMDYyYy0xLjQ5NTM4LDAuMDA4OTggLTIuNzA2MSwyLjIyNDUyIC0yLjcwNjEsNC45NTYyaC0wLjAwMDA2djAuMDAwMDRoMC4wMDAwNmMwLDIuNzI1NDIgMS4yMDUyLDQuOTM3MDYgMi42OTU4Niw0Ljk1NjEyaDE2LjMwNDRjMC4wMDIxNiwwIDAuMDA0MzIsLTAuMDAwMDQgMC4wMDY0NiwtMC4wMDAwNGMxLjQ5OTU4LDAgMi43MTUyNCwyLjIxODk4IDIuNzE1MjQsNC45NTYyNHYxOS44MjQ5MmMwLDIuNzM3MjYgLTEuMjE1NjgsNC45NTYyIC0yLjcxNTI0LDQuOTU2MmMtMC4wMDIxNiwwIC0wLjAwNDMyLDAgLTAuMDA2NDYsMGgtMjEuNzA5MTJjLTAuMDAyMTYsMCAtMC4wMDQzLDAgLTAuMDA2NDYsMGMtMS40OTk1OCwwIC0yLjcxNTI2LC0yLjIxODk4IC0yLjcxNTI2LC00Ljk1NjJjMCwtMi43MzcyNiAxLjIxNTY4LC00Ljk1NjI0IDIuNzE1MjYsLTQuOTU2MjRjMC4wMDAwMiwwIDAsMCAwLjAwMDAyLDB2MGgxNi4zMDA2NGMxLjQ5NTM4LC0wLjAwODk4IDIuNzA2MSwtMi4yMjQ1MiAyLjcwNjEsLTQuOTU2MmgwLjAwMDA2di0wLjAwMDA0aC0wLjAwMDA2YzAsLTIuNzI1NDIgLTEuMjA1MiwtNC45MzcwNiAtMi42OTU4NCwtNC45NTYxMmgtMTYuMzA0MzhjLTAuMDAyMTYsMCAtMC4wMDQzLDAgLTAuMDA2NDYsMGMtMC45MDkwNCwwIC0xLjcxMzc0LC0wLjgxNTM4IC0yLjIwNjU2LC0yLjA2NzMyYy0wLjMyMDIsLTAuODEzMzYgLTAuNTA4NzQsLTEuODExMDIgLTAuNTA4NzQsLTIuODg5MDJjMCwtMC4wMTA0NCAwLC0wLjAyMDggMC4wMDAwNiwtMC4wMzEyNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTE2LjI5MTU3LDQ5LjU2MjFjLTEuNDk5NiwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4YzAsLTAuMDAyMTYgMC4wMDAwMiwtMC4wMDQzIDAuMDAwMDIsLTAuMDA2NDZ2LTIxLjcwOTM4Yy0wLjAwMDAyLC0wLjAwMjE2IC0wLjAwMDAyLC0wLjAwNDMyIC0wLjAwMDAyLC0wLjAwNjQ4YzAsLTEuNDk5NjIgMS4yMTU2OCwtMi43MTUyOCAyLjcxNTI4LC0yLjcxNTI4YzEuNDk5NjIsMCAyLjcxNTMsMS4yMTU2OCAyLjcxNTMsMi43MTUyOHYwLjAwMDAydjB2LTAuMDAwMDJoMC4wMDAwMmMwLC0xLjQ5OTYyIDEuMjE1NjgsLTIuNzE1MjggMi43MTUyOCwtMi43MTUyOGgyLjcxNTIydi0wLjAwMDA0aDIuNzA2MTRjMC4wMDMwNCwwIDAuMDA2MSwwIDAuMDA5MTYsMGMxLjQ5OTYsMCAyLjcxNTMsMS4yMTU2NiAyLjcxNTMsMi43MTUyOGMwLDEuNDk5NjIgLTEuMjE1NjgsMi43MTUyOCAtMi43MTUzLDIuNzE1Mjh2MGgtMi43MTUyMnYwLjAwMDA0aC0yLjcwODhjLTAuMDAyMTYsMCAtMC4wMDQzMiwwLjAwMDAyIC0wLjAwNjQ4LDAuMDAwMDJjLTAuMDAyMTYsMCAtMC4wMDQzMiwwIC0wLjAwNjQ4LC0wLjAwMDAyaC0yLjcwODgydjE5LjAwNzA2djBjMCwxLjQ5OTYyIC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MywyLjcxNTI4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjM3LjI4NDc2LDMyNy40MTY5NmMxLjQ5OTYsMCAyLjcxNTI0LDEuMjE1NjYgMi43MTUyNCwyLjcxNTI0djBjMCwwLjAwMjE2IDAsMC4wMDQzMiAwLDAuMDA2NDh2MjEuNzA5MDRjMCwwLjAwMjE2IDAsMC4wMDQzMiAwLDAuMDA2NDh2MGMwLDEuNDk5NTggLTEuMjE1NjQsMi43MTUyNCAtMi43MTUyNCwyLjcxNTI0aC04LjE0NTc2di01LjQzMDQ4aDIuNzE1MjZ2LTAuMDAwMDRjMS40OTY1NCwwIDIuNzEwMywtMS4yMTA3MiAyLjcxNTI0LC0yLjcwNjF2LTEwLjg3OTIyYy0wLjAwNDkyLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxdi0wLjAwMDA0aC0yLjcxNTI2di01LjQzMDQ4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNOTMuMzc1MTgsMzI3LjQxNjk4djUuNDMwNDhoLTIuNzE1MjZ2MC4wMDAwNGMtMS40OTY1NCwwIC0yLjcxMDMsMS4yMTA3MiAtMi43MTUyNCwyLjcwNjF2MTAuODc5MjJjMC4wMDQ5MiwxLjQ5NTM4IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNGgyLjcxNTI2djUuNDMwNDhoLTguMTQ1NzZjLTEuNDk5NiwwIC0yLjcxNTI0LC0xLjIxNTY2IC0yLjcxNTI0LC0yLjcxNTI0djBjMCwtMC4wMDIxNiAwLC0wLjAwNDMyIDAsLTAuMDA2NDh2LTIxLjcwOTA0YzAsLTAuMDAyMTYgMCwtMC4wMDQzMiAwLC0wLjAwNjQ4djBjMCwtMS40OTk1OCAxLjIxNTY0LC0yLjcxNTI0IDIuNzE1MjQsLTIuNzE1MjR6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMTA0LjIzNjM4LDMzMC4xMzIyMmMwLC0xLjQ5OTYgMS4yMTU2OCwtMi43MTUyNiAyLjcxNTI0LC0yLjcxNTI2YzAuMDAyMTYsMCAwLjAwNDMsMCAwLjAwNjQ2LDBoMjEuNzA5MTJjMC4wMDIxNiwwIDAuMDA0MzIsMCAwLjAwNjQ2LDBjMS40OTk1OCwwIDIuNzE1MjYsMS4yMTU2OCAyLjcxNTI2LDIuNzE1MjZjMCwxLjQ5OTYgLTEuMjE1NjYsMi43MTUyNCAtMi43MTUyNiwyLjcxNTI0Yy0wLjAwMDAyLDAgMCwwIC0wLjAwMDAyLDB2MGgtMTYuMzAwNjJjLTEuNDk1MzgsMC4wMDQ5MiAtMi43MDYxLDEuMjE4NyAtMi43MDYxLDIuNzE1MjRoLTAuMDAwMDZ2MC4wMDAwMmgwLjAwMDA2YzAsMS40OTMxMiAxLjIwNTIsMi43MDQ3NiAyLjY5NTg2LDIuNzE1MmgxNi4zMDQ0YzAuMDAyMTYsMCAwLjAwNDMyLC0wLjAwMDAyIDAuMDA2NDYsLTAuMDAwMDJjMS40OTk1OCwwIDIuNzE1MjQsMS4yMTU2NiAyLjcxNTI0LDIuNzE1MjZ2MTAuODYxMDRjMCwxLjQ5OTYgLTEuMjE1NjgsMi43MTUyNCAtMi43MTUyNCwyLjcxNTI0Yy0wLjAwMjE2LDAgLTAuMDA0MzIsMCAtMC4wMDY0NiwwaC0yMS43MDkxMmMtMC4wMDIxNiwwIC0wLjAwNDMsMCAtMC4wMDY0NiwwYy0xLjQ5OTU4LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjRjMCwtMS40OTk2IDEuMjE1NjgsLTIuNzE1MjYgMi43MTUyNiwtMi43MTUyNmMwLjAwMDAyLDAgMCwwIDAuMDAwMDIsMHYwaDE2LjMwMDY0YzEuNDk1MzgsLTAuMDA0OTIgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDZ2LTAuMDAwMDJoLTAuMDAwMDZjMCwtMS40OTMxMiAtMS4yMDUyLC0yLjcwNDc2IC0yLjY5NTg0LC0yLjcxNTJoLTE2LjMwNDM4Yy0wLjAwMjE2LDAgLTAuMDA0MywwIC0wLjAwNjQ2LDBjLTAuOTA5MDQsMCAtMS43MTM3NCwtMC40NDY3IC0yLjIwNjU2LC0xLjEzMjU4Yy0wLjMyMDIsLTAuNDQ1NiAtMC41MDg3NCwtMC45OTIxNiAtMC41MDg3NCwtMS41ODI3NGMwLC0wLjAwNTcyIDAsLTAuMDExNCAwLjAwMDA2LC0wLjAxNzEyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNOTIuODc1MTgsMzE3LjA1NThoNS40MzA1OHY4LjEzOTRjMCwwLjAwMjE2IDAsMC4wMDQzMiAwLDAuMDA2NDhjMCwxLjQ5OTYgLTEuMjE1NjgsMi43MTUyOCAtMi43MTUyOCwyLjcxNTI4Yy0xLjQ5OTYsMCAtMi43MTUyOCwtMS4yMTU2OCAtMi43MTUyOCwtMi43MTUyOHYtMC4wMDAwMmgtMC4wMDAwMnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTk4LjMwNTc2LDMxNy4wNTU4aDUuNDMwNTZ2OC4xMzk0YzAsMC4wMDIxNiAwLDAuMDA0MzIgMCwwLjAwNjQ4YzAsMS40OTk2IC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MjgsMi43MTUyOGMtMS40OTk2LDAgLTIuNzE1MjgsLTEuMjE1NjggLTIuNzE1MjgsLTIuNzE1Mjh2LTAuMDAwMDJ2MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTEzMS4zODg5MiwzMTYuNTU1OGg1LjQzMDU2djguMTM5NGMwLDAuMDAyMTYgMCwwLjAwNDMyIDAsMC4wMDY0OGMwLDEuNDk5NiAtMS4yMTU2OCwyLjcxNTI4IC0yLjcxNTI4LDIuNzE1MjhjLTEuNDk5NiwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4di0wLjAwMDAydjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0xMzYuODE5NSwzMTYuNTU1OGg1LjQzMDU2djguMTM5NGMwLDAuMDAyMTYgMCwwLjAwNDMyIDAsMC4wMDY0OGMwLDEuNDk5NiAtMS4yMTU2OCwyLjcxNTI4IC0yLjcxNTI4LDIuNzE1MjhjLTEuNDk5NiwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4di0wLjAwMDAydjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0xNDIuMjUwMDgsMzQ5LjEzODg2aDUuNDMwNTZ2OC4xMzk0YzAsMC4wMDIxNiAwLjAwMDAyLDAuMDA0MyAwLjAwMDAyLDAuMDA2NDZjMCwxLjQ5OTYgLTEuMjE1NjgsMi43MTUyOCAtMi43MTUyOCwyLjcxNTI4Yy0xLjQ5OTYsMCAtMi43MTUzLC0xLjIxNTY4IC0yLjcxNTMsLTIuNzE1MjhjMCwwIDAsMCAwLC0wLjAwMDAydjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0xNTMuMTExMjQsMzE2LjU1NThoNS40MzA1NnY4LjEzOTRjMCwwLjAwMjE2IDAsMC4wMDQzMiAwLDAuMDA2NDhjMCwxLjQ5OTYgLTEuMjE1NjgsMi43MTUyOCAtMi43MTUyOCwyLjcxNTI4Yy0xLjQ5OTYsMCAtMi43MTUyOCwtMS4yMTU2OCAtMi43MTUyOCwtMi43MTUyOHYtMC4wMDAwMnYweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMTQ3LjY4MDY2LDMxNi41NTU4aDUuNDMwNTZ2OC4xMzk0YzAsMC4wMDIxNiAwLDAuMDA0MzIgMCwwLjAwNjQ4YzAsMS40OTk2IC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MjgsMi43MTUyOGMtMS40OTk2LDAgLTIuNzE1MjgsLTEuMjE1NjggLTIuNzE1MjgsLTIuNzE1Mjh2LTAuMDAwMDJ2MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTE2My45NzI0NiwzMDguNDA5OThjMCwtMS40OTk2IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNCwtMi43MTUyNnYwYzEuNDk5NiwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjZ2MC4wMDAwMnYwdjE2LjMwMDYyYzAuMDA0OTQsMS40OTUzOCAxLjIxODcsMi43MDYxIDIuNzE1MjQsMi43MDYxdjAuMDAwMDRoMC4wMDkxMmMxLjQ5NTM4LDAuMDA0OTQgMi43MDYxLDEuMjE4NyAyLjcwNjEsMi43MTUyNGgwLjAwMDA2djAuMDAwMDRoLTAuMDAwMDZjMCwwLjAwMDAyIDAsMC4wMDAwNCAwLDAuMDAwMDZoMC4wMDAwNnYwLjAwMDA0aC0wLjAwMDA2YzAsMS40OTY1NCAtMS4yMTA3MiwyLjcxMDMgLTIuNzA2MSwyLjcxNTI0aC0wLjAwOTEydjAuMDAwMDRjLTEuNDkzNDgsMCAtMi43MDUzNiwxLjIwNTggLTIuNzE1MiwyLjY5Njk4djEwLjg4ODRjMC4wMDQ5NCwxLjQ5NTM4IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNGgwLjAwOTEyYzEuNDk1MzgsMC4wMDQ5NCAyLjcwNjEsMS4yMTg3IDIuNzA2MSwyLjcxNTI0aDAuMDAwMDR2MC4wMDAwMmgtMC4wMDAwNGMwLDEuNDk2NTQgLTEuMjEwNzIsMi43MTAzMiAtMi43MDYxLDIuNzE1MjRjLTAuMDAwMDIsMCAtNS40Mzk2NiwwIC01LjQzOTY2LDBjLTAuNDQ5NDYsMCAtMC44NzM0MiwtMC4xMDkyMiAtMS4yNDY3OCwtMC4zMDI1NGMtMC44NzIzNiwtMC40NTE2OCAtMS40Njg1NiwtMS4zNjI1OCAtMS40Njg1NiwtMi40MTI3NmMwLDAgMCwtMC4wMDAwMiAwLC0wLjAwMDA0djB2LTE2LjMwMDYyYy0wLjAwNDk0LC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNiwtMi43MDYxdi0wLjAwMDA2aC0wLjAwOTEyYy0xLjQ5NTM4LC0wLjAwNDk0IC0yLjcwNjEsLTEuMjE4NyAtMi43MDYxLC0yLjcxNTI0aC0wLjAwMDA2di0wLjAwMDAyaDAuMDAwMDZjMCwtMS4wMTAxOCAwLjU1MTY0LC0xLjg5MTUgMS4zNzAxLC0yLjM1OTE4YzAuMzk0MSwtMC4yMjUyIDAuODUwMDQsLTAuMzU0NSAxLjMzNjA4LC0wLjM1NjFoMC4wMDkxMnYtMC4wMDAwNGMxLjQ5NjU0LDAgMi43MTAzLC0xLjIxMDcyIDIuNzE1MjQsLTIuNzA2MXYtMTYuMzAwNjRjMCwwIDAsMCAwLC0wLjAwMDAyeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTE3NC44MzMyNCwzMTYuNTU1OGg1LjQzMDU2djguMTM5NGMwLDAuMDAyMTYgMCwwLjAwNDMyIDAsMC4wMDY0OGMwLDEuNDk5NiAtMS4yMTU2OCwyLjcxNTI4IC0yLjcxNTI4LDIuNzE1MjhjLTEuNDk5NiwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4di0wLjAwMDAydjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0xODAuMjYzODIsMzE2LjU1NThoNS40MzA1OHY4LjEzOTRjMCwwLjAwMjE2IDAsMC4wMDQzMiAwLDAuMDA2NDhjMCwxLjQ5OTYgLTEuMjE1NjgsMi43MTUyOCAtMi43MTUyOCwyLjcxNTI4Yy0xLjQ5OTYsMCAtMi43MTUyOCwtMS4yMTU2OCAtMi43MTUyOCwtMi43MTUyOHYtMC4wMDAwMmgtMC4wMDAwMnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTE4NS42OTQ0LDM0OS4xMzg4Nmg1LjQzMDU2djguMTM5NGMwLDAuMDAyMTYgMCwwLjAwNDMgMCwwLjAwNjQ2YzAsMS40OTk2IC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MjgsMi43MTUyOGMtMS40OTk2LDAgLTIuNzE1MjgsLTEuMjE1NjggLTIuNzE1MjgsLTIuNzE1MjhjMCwwIDAsMCAwLC0wLjAwMDAydjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0xOTYuNTU1NTYsMzE2LjU1NThoNS40MzA1NnY4LjEzOTRjMCwwLjAwMjE2IDAuMDAwMDIsMC4wMDQzMiAwLjAwMDAyLDAuMDA2NDhjMCwxLjQ5OTYgLTEuMjE1NjgsMi43MTUyOCAtMi43MTUyOCwyLjcxNTI4Yy0xLjQ5OTYsMCAtMi43MTUyOCwtMS4yMTU2OCAtMi43MTUyOCwtMi43MTUyOHYtMC4wMDAwMmgtMC4wMDAwMnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTE5MS4xMjQ5OCwzMTYuNTU1OGg1LjQzMDU2djguMTM5NGMwLDAuMDAyMTYgMCwwLjAwNDMyIDAsMC4wMDY0OGMwLDEuNDk5NiAtMS4yMTU2OCwyLjcxNTI4IC0yLjcxNTI4LDIuNzE1MjhjLTEuNDk5NiwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4di0wLjAwMDAydjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMDQuNzAxNDIsMzU0LjU2OTg4Yy0xLjQ5OTYsMCAtMi43MTUyOCwtMS4yMTU2OCAtMi43MTUyOCwtMi43MTUyOGMwLC0wLjAwMjE2IDAuMDAwMDIsLTAuMDA0MyAwLjAwMDAyLC0wLjAwNjQ2di0yMS43MDkzOGMtMC4wMDAwMiwtMC4wMDIxNiAtMC4wMDAwMiwtMC4wMDQzMiAtMC4wMDAwMiwtMC4wMDY0OGMwLC0xLjQ5OTYyIDEuMjE1NjgsLTIuNzE1MjggMi43MTUyOCwtMi43MTUyOGMxLjQ5OTYyLDAgMi43MTUzLDEuMjE1NjggMi43MTUzLDIuNzE1Mjh2MC4wMDAwMnYwdi0wLjAwMDAyaDAuMDAwMDJjMCwtMS40OTk2MiAxLjIxNTY4LC0yLjcxNTI4IDIuNzE1MjgsLTIuNzE1MjhoMi43MTUyMnYtMC4wMDAwNGgyLjcwNjE0YzAuMDAzMDQsMCAwLjAwNjEsMCAwLjAwOTE2LDBjMS40OTk2LDAgMi43MTUzLDEuMjE1NjYgMi43MTUzLDIuNzE1MjhjMCwxLjQ5OTYyIC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MywyLjcxNTI4djBoLTIuNzE1MjJ2MC4wMDAwNGgtMi43MDg4Yy0wLjAwMjE2LDAgLTAuMDA0MzIsMC4wMDAwMiAtMC4wMDY0OCwwLjAwMDAyYy0wLjAwMjE2LDAgLTAuMDA0MzIsMCAtMC4wMDY0OCwtMC4wMDAwMmgtMi43MDg4MnYxOS4wMDcwNnYwYzAsMS40OTk2MiAtMS4yMTU2OCwyLjcxNTI4IC0yLjcxNTMsMi43MTUyOHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIyMy43MDg0MiwzMTYuNTU1OGg1LjQzMDU2djguMTM5NGMwLDAuMDAyMTYgMC4wMDAwMiwwLjAwNDMyIDAuMDAwMDIsMC4wMDY0OGMwLDEuNDk5NiAtMS4yMTU2OCwyLjcxNTI4IC0yLjcxNTI4LDIuNzE1MjhjLTEuNDk5NiwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4di0wLjAwMDAyaC0wLjAwMDAyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjE4LjI3Nzg0LDMxNi41NTU4aDUuNDMwNTZ2OC4xMzk0YzAsMC4wMDIxNiAwLDAuMDA0MzIgMCwwLjAwNjQ4YzAsMS40OTk2IC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MjgsMi43MTUyOGMtMS40OTk2LDAgLTIuNzE1MjgsLTEuMjE1NjggLTIuNzE1MjgsLTIuNzE1Mjh2LTAuMDAwMDJ2MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTS00LjM3NDI4LDIyNC4yMzcwNWMwLC0xLjQ5OTYgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI0LC0yLjcxNTI2djBjMS40OTk2LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNnYwLjAwMDAydjB2MTYuMzAwNjJjMC4wMDQ5NCwxLjQ5NTM4IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNGgwLjAwOTEyYzEuNDk1MzgsMC4wMDQ5NCAyLjcwNjEsMS4yMTg3IDIuNzA2MSwyLjcxNTI0aDAuMDAwMDZ2MC4wMDAwNGgtMC4wMDAwNmMwLDAuMDAwMDIgMCwwLjAwMDA0IDAsMC4wMDAwNmgwLjAwMDA2djAuMDAwMDRoLTAuMDAwMDZjMCwxLjQ5NjU0IC0xLjIxMDcyLDIuNzEwMyAtMi43MDYxLDIuNzE1MjRoLTAuMDA5MTJ2MC4wMDAwNGMtMS40OTM0OCwwIC0yLjcwNTM2LDEuMjA1OCAtMi43MTUyLDIuNjk2OTh2MTAuODg4NGMwLjAwNDk0LDEuNDk1MzggMS4yMTg3LDIuNzA2MSAyLjcxNTI0LDIuNzA2MXYwLjAwMDA0aDAuMDA5MTJjMS40OTUzOCwwLjAwNDk0IDIuNzA2MSwxLjIxODcgMi43MDYxLDIuNzE1MjRoMC4wMDAwNHYwLjAwMDAyaC0wLjAwMDA0YzAsMS40OTY1NCAtMS4yMTA3MiwyLjcxMDMyIC0yLjcwNjEsMi43MTUyNGMtMC4wMDAwMiwwIC01LjQzOTY2LDAgLTUuNDM5NjYsMGMtMC40NDk0NiwwIC0wLjg3MzQyLC0wLjEwOTIyIC0xLjI0Njc4LC0wLjMwMjU0Yy0wLjg3MjM2LC0wLjQ1MTY4IC0xLjQ2ODU2LC0xLjM2MjU4IC0xLjQ2ODU2LC0yLjQxMjc2YzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDR2MHYtMTYuMzAwNjJjLTAuMDA0OTQsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI2LC0yLjcwNjF2LTAuMDAwMDZoLTAuMDA5MTJjLTEuNDk1MzgsLTAuMDA0OTQgLTIuNzA2MSwtMS4yMTg3IC0yLjcwNjEsLTIuNzE1MjRoLTAuMDAwMDZ2LTAuMDAwMDJoMC4wMDAwNmMwLC0xLjAxMDE4IDAuNTUxNjQsLTEuODkxNSAxLjM3MDEsLTIuMzU5MThjMC4zOTQxLC0wLjIyNTIgMC44NTAwNCwtMC4zNTQ1IDEuMzM2MDgsLTAuMzU2MWgwLjAwOTEydi0wLjAwMDA0YzEuNDk2NTQsMCAyLjcxMDMsLTEuMjEwNzIgMi43MTUyNCwtMi43MDYxdi0xNi4zMDA2NGMwLDAgMCwwIDAsLTAuMDAwMDJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNLTM2Ljk1NzQ0LDI0NS45NTkzMWMwLC0xLjQ5OTYgMS4yMTU2OCwtMi43MTUyNiAyLjcxNTI0LC0yLjcxNTI2YzAuMDAyMTYsMCAwLjAwNDMsMCAwLjAwNjQ2LDBoMjEuNzA5MTJjMC4wMDIxNiwwIDAuMDA0MzIsMCAwLjAwNjQ2LDBjMS40OTk1OCwwIDIuNzE1MjYsMS4yMTU2OCAyLjcxNTI2LDIuNzE1MjZjMCwxLjQ5OTYgLTEuMjE1NjYsMi43MTUyNCAtMi43MTUyNiwyLjcxNTI0Yy0wLjAwMDAyLDAgMCwwIC0wLjAwMDAyLDB2MGgtMTYuMzAwNjJjLTEuNDk1MzgsMC4wMDQ5MiAtMi43MDYxLDEuMjE4NyAtMi43MDYxLDIuNzE1MjRoLTAuMDAwMDZ2MC4wMDAwMmgwLjAwMDA2YzAsMS40OTMxMiAxLjIwNTIsMi43MDQ3NiAyLjY5NTg2LDIuNzE1MmgxNi4zMDQ0YzAuMDAyMTYsMCAwLjAwNDMyLC0wLjAwMDAyIDAuMDA2NDYsLTAuMDAwMDJjMS40OTk1OCwwIDIuNzE1MjQsMS4yMTU2NiAyLjcxNTI0LDIuNzE1MjZ2MTAuODYxMDRjMCwxLjQ5OTYgLTEuMjE1NjgsMi43MTUyNCAtMi43MTUyNCwyLjcxNTI0Yy0wLjAwMjE2LDAgLTAuMDA0MzIsMCAtMC4wMDY0NiwwaC0yMS43MDkxMmMtMC4wMDIxNiwwIC0wLjAwNDMsMCAtMC4wMDY0NiwwYy0xLjQ5OTU4LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjRjMCwtMS40OTk2IDEuMjE1NjgsLTIuNzE1MjYgMi43MTUyNiwtMi43MTUyNmMwLjAwMDAyLDAgMCwwIDAuMDAwMDIsMHYwaDE2LjMwMDY0YzEuNDk1MzgsLTAuMDA0OTIgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDZ2LTAuMDAwMDJoLTAuMDAwMDZjMCwtMS40OTMxMiAtMS4yMDUyLC0yLjcwNDc2IC0yLjY5NTg0LC0yLjcxNTJoLTE2LjMwNDM4Yy0wLjAwMjE2LDAgLTAuMDA0MywwIC0wLjAwNjQ2LDBjLTAuOTA5MDQsMCAtMS43MTM3NCwtMC40NDY3IC0yLjIwNjU2LC0xLjEzMjU4Yy0wLjMyMDIsLTAuNDQ1NiAtMC41MDg3NCwtMC45OTIxNiAtMC41MDg3NCwtMS41ODI3NGMwLC0wLjAwNTcyIDAsLTAuMDExNCAwLjAwMDA2LC0wLjAxNzEyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNOS4yMDIwOCwyNzAuMzk2NTNjLTEuNDk5NiwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4YzAsLTAuMDAyMTYgMC4wMDAwMiwtMC4wMDQzIDAuMDAwMDIsLTAuMDA2NDZ2LTIxLjcwOTM4Yy0wLjAwMDAyLC0wLjAwMjE2IC0wLjAwMDAyLC0wLjAwNDMyIC0wLjAwMDAyLC0wLjAwNjQ4YzAsLTEuNDk5NjIgMS4yMTU2OCwtMi43MTUyOCAyLjcxNTI4LC0yLjcxNTI4YzEuNDk5NjIsMCAyLjcxNTMsMS4yMTU2OCAyLjcxNTMsMi43MTUyOHYwLjAwMDAydjB2LTAuMDAwMDJoMC4wMDAwMmMwLC0xLjQ5OTYyIDEuMjE1NjgsLTIuNzE1MjggMi43MTUyOCwtMi43MTUyOGgyLjcxNTIydi0wLjAwMDA0aDIuNzA2MTRjMC4wMDMwNCwwIDAuMDA2MSwwIDAuMDA5MTYsMGMxLjQ5OTYsMCAyLjcxNTMsMS4yMTU2NiAyLjcxNTMsMi43MTUyOGMwLDEuNDk5NjIgLTEuMjE1NjgsMi43MTUyOCAtMi43MTUzLDIuNzE1Mjh2MGgtMi43MTUyMnYwLjAwMDA0aC0yLjcwODhjLTAuMDAyMTYsMCAtMC4wMDQzMiwwLjAwMDAyIC0wLjAwNjQ4LDAuMDAwMDJjLTAuMDAyMTYsMCAtMC4wMDQzMiwwIC0wLjAwNjQ4LC0wLjAwMDAyaC0yLjcwODgydjE5LjAwNzA2djBjMCwxLjQ5OTYyIC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MywyLjcxNTI4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNNTguMDc2ODQsMjcwLjM5NjUxYy0xLjQ5OTYsMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNnYtMC4wMDAwMmMwLC0wLjAwMjE2IDAsLTAuMDA0MyAwLjAwMDAyLC0wLjAwNjQ0YzAsMCAwLDAgMCwtMC4wMDAwMnYtMTMuNTY5ODJoLTAuMDAwMDJ2LTguMTQ1NzZjMCwtMS40OTk2IDEuMjE1NjYsLTIuNzE1MjQgMi43MTUyNiwtMi43MTUyNGMwLjAwMjE2LDAgMC4wMDQzMiwwIDAuMDA2NDgsMGgxMy41Njk4MnYwaDguMTQ1NzZjMS40OTk2LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNGMwLDAuMDAyMTYgMCwwLjAwNDMyIDAsMC4wMDY0OHYxMy41Njk4MnYwdjUuNDMwNTJoMC4wMDAwMnYxMy41NzYyOGMwLDAuMDA1MjggLTAuMDAwMDIsMC4wMTA1OCAtMC4wMDAwNCwwLjAxNTg0djIuNjk5NDJoMC4wMDAwNHY4LjE0NTc4YzAsMS40OTk2IC0xLjIxNTY2LDIuNzE1MjQgLTIuNzE1MjYsMi43MTUyNGMtMC4wMDIxNiwwIC0wLjAwNDMsMCAtMC4wMDY0NiwwaC0yMS43MDkxNGMtMC4wMDIxNiwwIC0wLjAwNDMyLDAgLTAuMDA2NDgsMGMtMS40OTk2LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjRjMCwtMS40OTk2IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNiwtMi43MTUyNmMwLjAwMDAyLDAgMC4wMDAwMiwwIDAuMDAwMDIsMHYwaDE2LjMwMDY0YzEuNDk1MzgsLTAuMDA0OTIgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDJ2LTEwLjg2MTAyaC0wLjAwMDAydjBoLTAuMDAwMDJjMCwtMS40OTY1NCAtMS4yMTA3MiwtMi43MTAzIC0yLjcwNjEsLTIuNzE1MjRoLTE2LjMwMDY0djB6TTYzLjQ5ODI0LDI0OC42NzQ0N2MtMS40OTUzOCwwLjAwNDk0IC0yLjcwNjEsMS4yMTg3IC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNHYxMC44NzAxNmMwLjAwNDk0LDEuNDk1MzggMS4yMTg3LDIuNzA2MSAyLjcxNTI0LDIuNzA2MXYwLjAwMDA0aDEwLjg3MDE0YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDR2LTEwLjg3MDE2Yy0wLjAwNDk0LC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxdi0wLjAwMDAyeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTQxLjc4NTI4LDI0My4yNDM5NWMwLjAwNTI4LDAgMC4wMTA1OCwwLjAwMDAyIDAuMDE1ODQsMC4wMDAwNGgyLjY5OTQydi0wLjAwMDA0aDguMTQ1NzhjMS40OTk2LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNGMwLDAuMDAyMTYgMCwwLjAwNDMyIDAsMC4wMDY0OHYyMS43MDkxMmMwLjAwMDAyLDAuMDAyMTYgMCwwLjAwNDMyIDAsMC4wMDY0OGMwLDEuNDk5NiAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI2LDIuNzE1MjZjLTEuNDk5NiwwIC0yLjcxNTI2LC0xLjIxNTY4IC0yLjcxNTI2LC0yLjcxNTI2YzAsMCAwLDAgMCwtMC4wMDAwMmgtMC4wMDAwMnYtMTYuMzAwNjRjLTAuMDA0OTQsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2MHYwaC0xMC44NjEwMnYwdjBoLTAuMDAwMDJ2MGMtMS40OTY1NCwwIC0yLjcxMDMsMS4yMTA3MiAtMi43MTUyNCwyLjcwNjF2MTYuMzAwNjR2MGMwLDAgMCwwIDAsMC4wMDAwMmMwLDEuNDk5NiAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI2LDIuNzE1MjZjLTEuNDk5NiwwIC0yLjcxNTI0LC0xLjIxNTY4IC0yLjcxNTI0LC0yLjcxNTI2YzAsLTAuMDAyMTYgMCwtMC4wMDQzIDAsLTAuMDA2NDZ2LTE5LjAwMDN2MGMwLDAgMCwtMC4wMDAwMiAwLC0wLjAwMDA0di01LjQzMDUyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM0Mjg4YjkiIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTI1LjQ5Mzc4LDI3MC4zOTY1NWMtMS40OTk2LDAgLTIuNzE1MjQsLTEuMjE1NjYgLTIuNzE1MjQsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMgMCwtMC4wMDY0NnYtMjEuNzA5MTJjLTAuMDAwMDIsLTAuMDAyMTYgMCwtMC4wMDQzMiAwLC0wLjAwNjQ4YzAsLTEuNDk5NiAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjQsLTIuNzE1MjZjMS40OTk2LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNmMwLDAgMCwwIDAsMC4wMDAwMnYwdjIxLjcyMjA0djBjMCwxLjQ5OTYgLTEuMjE1NjYsMi43MTUyNCAtMi43MTUyNiwyLjcxNTI0eiIvPjxwYXRoIGQ9Ik0yMi43Nzg0NiwyMjkuNjY3NjdjMCwtMS40OTk2IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNiwtMi43MTUyNmMxLjQ5OTYsMCAyLjcxNTI2LDEuMjE1NjggMi43MTUyNiwyLjcxNTI2YzAsMS40OTk2IC0xLjIxNTY2LDIuNzE1MjQgLTIuNzE1MjYsMi43MTUyNGMtMS40OTk2LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjR6Ii8+PC9nPjxwYXRoIGQ9Ik03Ni4wMjc3NywxNS42NTM5NGMwLC0xLjQ5OTYgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI0LC0yLjcxNTI2djBjMS40OTk2LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNnYwLjAwMDAydjB2MTYuMzAwNjJjMC4wMDQ5NCwxLjQ5NTM4IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNGgwLjAwOTEyYzEuNDk1MzgsMC4wMDQ5NCAyLjcwNjEsMS4yMTg3IDIuNzA2MSwyLjcxNTI0aDAuMDAwMDZ2MC4wMDAwNGgtMC4wMDAwNmMwLDAuMDAwMDIgMCwwLjAwMDA0IDAsMC4wMDAwNmgwLjAwMDA2djAuMDAwMDRoLTAuMDAwMDZjMCwxLjQ5NjU0IC0xLjIxMDcyLDIuNzEwMyAtMi43MDYxLDIuNzE1MjRoLTAuMDA5MTJ2MC4wMDAwNGMtMS40OTM0OCwwIC0yLjcwNTM2LDEuMjA1OCAtMi43MTUyLDIuNjk2OTh2MTAuODg4NGMwLjAwNDk0LDEuNDk1MzggMS4yMTg3LDIuNzA2MSAyLjcxNTI0LDIuNzA2MXYwLjAwMDA0aDAuMDA5MTJjMS40OTUzOCwwLjAwNDk0IDIuNzA2MSwxLjIxODcgMi43MDYxLDIuNzE1MjRoMC4wMDAwNHYwLjAwMDAyaC0wLjAwMDA0YzAsMS40OTY1NCAtMS4yMTA3MiwyLjcxMDMyIC0yLjcwNjEsMi43MTUyNGMtMC4wMDAwMiwwIC01LjQzOTY2LDAgLTUuNDM5NjYsMGMtMC40NDk0NiwwIC0wLjg3MzQyLC0wLjEwOTIyIC0xLjI0Njc4LC0wLjMwMjU0Yy0wLjg3MjM2LC0wLjQ1MTY4IC0xLjQ2ODU2LC0xLjM2MjU4IC0xLjQ2ODU2LC0yLjQxMjc2YzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDR2MHYtMTYuMzAwNjJjLTAuMDA0OTQsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI2LC0yLjcwNjF2LTAuMDAwMDZoLTAuMDA5MTJjLTEuNDk1MzgsLTAuMDA0OTQgLTIuNzA2MSwtMS4yMTg3IC0yLjcwNjEsLTIuNzE1MjRoLTAuMDAwMDZ2LTAuMDAwMDJoMC4wMDAwNmMwLC0xLjAxMDE4IDAuNTUxNjQsLTEuODkxNSAxLjM3MDEsLTIuMzU5MThjMC4zOTQxLC0wLjIyNTIgMC44NTAwNCwtMC4zNTQ1IDEuMzM2MDgsLTAuMzU2MWgwLjAwOTEydi0wLjAwMDA0YzEuNDk2NTQsMCAyLjcxMDMsLTEuMjEwNzIgMi43MTUyNCwtMi43MDYxdi0xNi4zMDA2NGMwLDAgMCwwIDAsLTAuMDAwMDJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNNTcuMDIwNzEsNjEuODEzMzhjLTEuNDk5NiwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4YzAsLTAuMDAyMTYgMC4wMDAwMiwtMC4wMDQzIDAuMDAwMDIsLTAuMDA2NDZ2LTIxLjcwOTM4Yy0wLjAwMDAyLC0wLjAwMjE2IC0wLjAwMDAyLC0wLjAwNDMyIC0wLjAwMDAyLC0wLjAwNjQ4YzAsLTEuNDk5NjIgMS4yMTU2OCwtMi43MTUyOCAyLjcxNTI4LC0yLjcxNTI4YzEuNDk5NjIsMCAyLjcxNTMsMS4yMTU2OCAyLjcxNTMsMi43MTUyOHYwLjAwMDAydjB2LTAuMDAwMDJoMC4wMDAwMmMwLC0xLjQ5OTYyIDEuMjE1NjgsLTIuNzE1MjggMi43MTUyOCwtMi43MTUyOGgyLjcxNTIydi0wLjAwMDA0aDIuNzA2MTRjMC4wMDMwNCwwIDAuMDA2MSwwIDAuMDA5MTYsMGMxLjQ5OTYsMCAyLjcxNTMsMS4yMTU2NiAyLjcxNTMsMi43MTUyOGMwLDEuNDk5NjIgLTEuMjE1NjgsMi43MTUyOCAtMi43MTUzLDIuNzE1Mjh2MGgtMi43MTUyMnYwLjAwMDA0aC0yLjcwODhjLTAuMDAyMTYsMCAtMC4wMDQzMiwwLjAwMDAyIC0wLjAwNjQ4LDAuMDAwMDJjLTAuMDAyMTYsMCAtMC4wMDQzMiwwIC0wLjAwNjQ4LC0wLjAwMDAyaC0yLjcwODgydjE5LjAwNzA2djBjMCwxLjQ5OTYyIC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MywyLjcxNTI4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNODYuODg4ODUsMzcuMzc2MThjMCwtMS40OTk2IDEuMjE1NjgsLTIuNzE1MjYgMi43MTUyNCwtMi43MTUyNmMwLjAwMjE2LDAgMC4wMDQzLDAgMC4wMDY0NiwwaDIxLjcwOTEyYzAuMDAyMTYsMCAwLjAwNDMyLDAgMC4wMDY0NiwwYzEuNDk5NTgsMCAyLjcxNTI2LDEuMjE1NjggMi43MTUyNiwyLjcxNTI2YzAsMS40OTk2IC0xLjIxNTY2LDIuNzE1MjQgLTIuNzE1MjYsMi43MTUyNGMtMC4wMDAwMiwwIDAsMCAtMC4wMDAwMiwwdjBoLTE2LjMwMDYyYy0xLjQ5NTM4LDAuMDA0OTIgLTIuNzA2MSwxLjIxODcgLTIuNzA2MSwyLjcxNTI0aC0wLjAwMDA2djAuMDAwMDJoMC4wMDAwNmMwLDEuNDkzMTIgMS4yMDUyLDIuNzA0NzYgMi42OTU4NiwyLjcxNTJoMTYuMzA0NGMwLjAwMjE2LDAgMC4wMDQzMiwtMC4wMDAwMiAwLjAwNjQ2LC0wLjAwMDAyYzEuNDk5NTgsMCAyLjcxNTI0LDEuMjE1NjYgMi43MTUyNCwyLjcxNTI2djEwLjg2MTA0YzAsMS40OTk2IC0xLjIxNTY4LDIuNzE1MjQgLTIuNzE1MjQsMi43MTUyNGMtMC4wMDIxNiwwIC0wLjAwNDMyLDAgLTAuMDA2NDYsMGgtMjEuNzA5MTJjLTAuMDAyMTYsMCAtMC4wMDQzLDAgLTAuMDA2NDYsMGMtMS40OTk1OCwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI0YzAsLTEuNDk5NiAxLjIxNTY4LC0yLjcxNTI2IDIuNzE1MjYsLTIuNzE1MjZjMC4wMDAwMiwwIDAsMCAwLjAwMDAyLDB2MGgxNi4zMDA2NGMxLjQ5NTM4LC0wLjAwNDkyIDIuNzA2MSwtMS4yMTg3IDIuNzA2MSwtMi43MTUyNGgwLjAwMDA2di0wLjAwMDAyaC0wLjAwMDA2YzAsLTEuNDkzMTIgLTEuMjA1MiwtMi43MDQ3NiAtMi42OTU4NCwtMi43MTUyaC0xNi4zMDQzOGMtMC4wMDIxNiwwIC0wLjAwNDMsMCAtMC4wMDY0NiwwYy0wLjkwOTA0LDAgLTEuNzEzNzQsLTAuNDQ2NyAtMi4yMDY1NiwtMS4xMzI1OGMtMC4zMjAyLC0wLjQ0NTYgLTAuNTA4NzQsLTAuOTkyMTYgLTAuNTA4NzQsLTEuNTgyNzRjMCwtMC4wMDU3MiAwLC0wLjAxMTQgMC4wMDAwNiwtMC4wMTcxMnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTQ1MC4zODIwNiwzNS4yOTg1MmMwLC0xLjQ5OTYgMS4yMTU2OCwtMi43MTUyNiAyLjcxNTI0LC0yLjcxNTI2YzAuMDAyMTYsMCAwLjAwNDMsMCAwLjAwNjQ2LDBoMjEuNzA5MTJjMC4wMDIxNiwwIDAuMDA0MzIsMCAwLjAwNjQ2LDBjMS40OTk1OCwwIDIuNzE1MjYsMS4yMTU2OCAyLjcxNTI2LDIuNzE1MjZjMCwxLjQ5OTYgLTEuMjE1NjYsMi43MTUyNCAtMi43MTUyNiwyLjcxNTI0Yy0wLjAwMDAyLDAgMCwwIC0wLjAwMDAyLDB2MGgtMTYuMzAwNjJjLTEuNDk1MzgsMC4wMDQ5MiAtMi43MDYxLDEuMjE4NyAtMi43MDYxLDIuNzE1MjRoLTAuMDAwMDZ2MC4wMDAwMmgwLjAwMDA2YzAsMS40OTMxMiAxLjIwNTIsMi43MDQ3NiAyLjY5NTg2LDIuNzE1MmgxNi4zMDQ0YzAuMDAyMTYsMCAwLjAwNDMyLC0wLjAwMDAyIDAuMDA2NDYsLTAuMDAwMDJjMS40OTk1OCwwIDIuNzE1MjQsMS4yMTU2NiAyLjcxNTI0LDIuNzE1MjZ2MTAuODYxMDRjMCwxLjQ5OTYgLTEuMjE1NjgsMi43MTUyNCAtMi43MTUyNCwyLjcxNTI0Yy0wLjAwMjE2LDAgLTAuMDA0MzIsMCAtMC4wMDY0NiwwaC0yMS43MDkxMmMtMC4wMDIxNiwwIC0wLjAwNDMsMCAtMC4wMDY0NiwwYy0xLjQ5OTU4LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjRjMCwtMS40OTk2IDEuMjE1NjgsLTIuNzE1MjYgMi43MTUyNiwtMi43MTUyNmMwLjAwMDAyLDAgMCwwIDAuMDAwMDIsMHYwaDE2LjMwMDY0YzEuNDk1MzgsLTAuMDA0OTIgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDZ2LTAuMDAwMDJoLTAuMDAwMDZjMCwtMS40OTMxMiAtMS4yMDUyLC0yLjcwNDc2IC0yLjY5NTg0LC0yLjcxNTJoLTE2LjMwNDM4Yy0wLjAwMjE2LDAgLTAuMDA0MywwIC0wLjAwNjQ2LDBjLTAuOTA5MDQsMCAtMS43MTM3NCwtMC40NDY3IC0yLjIwNjU2LC0xLjEzMjU4Yy0wLjMyMDIsLTAuNDQ1NiAtMC41MDg3NCwtMC45OTIxNiAtMC41MDg3NCwtMS41ODI3NGMwLC0wLjAwNTcyIDAsLTAuMDExNCAwLjAwMDA2LC0wLjAxNzEyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNNDM5LjAyMDg2LDIyLjIyMjFoNS40MzA1OHY4LjEzOTRjMCwwLjAwMjE2IDAsMC4wMDQzMiAwLDAuMDA2NDhjMCwxLjQ5OTYgLTEuMjE1NjgsMi43MTUyOCAtMi43MTUyOCwyLjcxNTI4Yy0xLjQ5OTYsMCAtMi43MTUyOCwtMS4yMTU2OCAtMi43MTUyOCwtMi43MTUyOHYtMC4wMDAwMmgtMC4wMDAwMnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTQ0NC40NTE0NCwyMi4yMjIxaDUuNDMwNTZ2OC4xMzk0YzAsMC4wMDIxNiAwLDAuMDA0MzIgMCwwLjAwNjQ4YzAsMS40OTk2IC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MjgsMi43MTUyOGMtMS40OTk2LDAgLTIuNzE1MjgsLTEuMjE1NjggLTIuNzE1MjgsLTIuNzE1Mjh2LTAuMDAwMDJ2MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTQ4Mi45NjUyNCwxMy41NzYyOGMwLC0xLjQ5OTYgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI0LC0yLjcxNTI2djBjMS40OTk2LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNnYwLjAwMDAydjB2MTYuMzAwNjJjMC4wMDQ5NCwxLjQ5NTM4IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNGgwLjAwOTEyYzEuNDk1MzgsMC4wMDQ5NCAyLjcwNjEsMS4yMTg3IDIuNzA2MSwyLjcxNTI0aDAuMDAwMDZ2MC4wMDAwNGgtMC4wMDAwNmMwLDAuMDAwMDIgMCwwLjAwMDA0IDAsMC4wMDAwNmgwLjAwMDA2djAuMDAwMDRoLTAuMDAwMDZjMCwxLjQ5NjU0IC0xLjIxMDcyLDIuNzEwMyAtMi43MDYxLDIuNzE1MjRoLTAuMDA5MTJ2MC4wMDAwNGMtMS40OTM0OCwwIC0yLjcwNTM2LDEuMjA1OCAtMi43MTUyLDIuNjk2OTh2MTAuODg4NGMwLjAwNDk0LDEuNDk1MzggMS4yMTg3LDIuNzA2MSAyLjcxNTI0LDIuNzA2MXYwLjAwMDA0aDAuMDA5MTJjMS40OTUzOCwwLjAwNDk0IDIuNzA2MSwxLjIxODcgMi43MDYxLDIuNzE1MjRoMC4wMDAwNHYwLjAwMDAyaC0wLjAwMDA0YzAsMS40OTY1NCAtMS4yMTA3MiwyLjcxMDMyIC0yLjcwNjEsMi43MTUyNGMtMC4wMDAwMiwwIC01LjQzOTY2LDAgLTUuNDM5NjYsMGMtMC40NDk0NiwwIC0wLjg3MzQyLC0wLjEwOTIyIC0xLjI0Njc4LC0wLjMwMjU0Yy0wLjg3MjM2LC0wLjQ1MTY4IC0xLjQ2ODU2LC0xLjM2MjU4IC0xLjQ2ODU2LC0yLjQxMjc2YzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDR2MHYtMTYuMzAwNjJjLTAuMDA0OTQsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI2LC0yLjcwNjF2LTAuMDAwMDZoLTAuMDA5MTJjLTEuNDk1MzgsLTAuMDA0OTQgLTIuNzA2MSwtMS4yMTg3IC0yLjcwNjEsLTIuNzE1MjRoLTAuMDAwMDZ2LTAuMDAwMDJoMC4wMDAwNmMwLC0xLjAxMDE4IDAuNTUxNjQsLTEuODkxNSAxLjM3MDEsLTIuMzU5MThjMC4zOTQxLC0wLjIyNTIgMC44NTAwNCwtMC4zNTQ1IDEuMzM2MDgsLTAuMzU2MWgwLjAwOTEydi0wLjAwMDA0YzEuNDk2NTQsMCAyLjcxMDMsLTEuMjEwNzIgMi43MTUyNCwtMi43MDYxdi0xNi4zMDA2NGMwLDAgMCwwIDAsLTAuMDAwMDJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNNDk2LjU0MTU2LDU5LjczNTcyYy0xLjQ5OTYsMCAtMi43MTUyOCwtMS4yMTU2OCAtMi43MTUyOCwtMi43MTUyOGMwLC0wLjAwMjE2IDAuMDAwMDIsLTAuMDA0MyAwLjAwMDAyLC0wLjAwNjQ2di0yMS43MDkzOGMtMC4wMDAwMiwtMC4wMDIxNiAtMC4wMDAwMiwtMC4wMDQzMiAtMC4wMDAwMiwtMC4wMDY0OGMwLC0xLjQ5OTYyIDEuMjE1NjgsLTIuNzE1MjggMi43MTUyOCwtMi43MTUyOGMxLjQ5OTYyLDAgMi43MTUzLDEuMjE1NjggMi43MTUzLDIuNzE1Mjh2MC4wMDAwMnYwdi0wLjAwMDAyaDAuMDAwMDJjMCwtMS40OTk2MiAxLjIxNTY4LC0yLjcxNTI4IDIuNzE1MjgsLTIuNzE1MjhoMi43MTUyMnYtMC4wMDAwNGgyLjcwNjE0YzAuMDAzMDQsMCAwLjAwNjEsMCAwLjAwOTE2LDBjMS40OTk2LDAgMi43MTUzLDEuMjE1NjYgMi43MTUzLDIuNzE1MjhjMCwxLjQ5OTYyIC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MywyLjcxNTI4djBoLTIuNzE1MjJ2MC4wMDAwNGgtMi43MDg4Yy0wLjAwMjE2LDAgLTAuMDA0MzIsMC4wMDAwMiAtMC4wMDY0OCwwLjAwMDAyYy0wLjAwMjE2LDAgLTAuMDA0MzIsMCAtMC4wMDY0OCwtMC4wMDAwMmgtMi43MDg4MnYxOS4wMDcwNnYwYzAsMS40OTk2MiAtMS4yMTU2OCwyLjcxNTI4IC0yLjcxNTMsMi43MTUyOHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTUxNS41NDg1NiwyMS43MjE2NGg1LjQzMDU2djguMTM5NGMwLDAuMDAyMTYgMC4wMDAwMiwwLjAwNDMyIDAuMDAwMDIsMC4wMDY0OGMwLDEuNDk5NiAtMS4yMTU2OCwyLjcxNTI4IC0yLjcxNTI4LDIuNzE1MjhjLTEuNDk5NiwwIC0yLjcxNTI4LC0xLjIxNTY4IC0yLjcxNTI4LC0yLjcxNTI4di0wLjAwMDAyaC0wLjAwMDAyeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDI4OGI5IiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNNTEwLjExNzk4LDIxLjcyMTY0aDUuNDMwNTZ2OC4xMzk0YzAsMC4wMDIxNiAwLDAuMDA0MzIgMCwwLjAwNjQ4YzAsMS40OTk2IC0xLjIxNTY4LDIuNzE1MjggLTIuNzE1MjgsMi43MTUyOGMtMS40OTk2LDAgLTIuNzE1MjgsLTEuMjE1NjggLTIuNzE1MjgsLTIuNzE1Mjh2LTAuMDAwMDJ2MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQyODhiOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiPjxwYXRoIGQ9Ik0yMzguNzE3ODksMzYuNjk0NzRjMCwtNi43MDY0OCA1LjQzNjY4LC0xMi4xNDMyMiAxMi4xNDMxNywtMTIuMTQzMjJ2MGM2LjcwNjQ4LDAgMTIuMTQzMjIsNS40MzY3NCAxMi4xNDMyMiwxMi4xNDMyMmMwLDAuMDAwMDQgMCwwLjAwMDA0IDAsMC4wMDAwOHYwdjcyLjg5OTg3YzAuMDIyMDQsNi42ODc2NSA1LjQ1MDMzLDEyLjEwMjMxIDEyLjE0MzE4LDEyLjEwMjMxdjAuMDAwMjNoMC4wNDA3OWM2LjY4NzY1LDAuMDIyMDkgMTIuMTAyMjUsNS40NTAyOCAxMi4xMDIyNSwxMi4xNDMxM2gwLjAwMDIzdjAuMDAwMTJoLTAuMDAwMjNjMCwwLjAwMDA5IDAsMC4wMDAxOCAwLDAuMDAwMjdoMC4wMDAyM3YwLjAwMDEyaC0wLjAwMDIzYzAsNi42OTI4NSAtNS40MTQ1NiwxMi4xMjEwMyAtMTIuMTAyMjUsMTIuMTQzMTRoLTAuMDQwNzl2MC4wMDAyM2MtNi42NzkxNywwIC0xMi4wOTg5LDUuMzkyNTUgLTEyLjE0Mjk1LDEyLjA2MTQydjQ4LjY5NTI0YzAuMDIyMDQsNi42ODc2NSA1LjQ1MDMzLDEyLjEwMjI0IDEyLjE0MzE4LDEyLjEwMjI0djAuMDAwMjNoMC4wNDA3OGM2LjY4NzY1LDAuMDIyMDkgMTIuMTAyMjUsNS40NTAzMiAxMi4xMDIyNSwxMi4xNDMxNGgwLjAwMDIzdjAuMDAwMDloLTAuMDAwMjNjMCw2LjY5Mjg1IC01LjQxNDU2LDEyLjEyMTA5IC0xMi4xMDIyNSwxMi4xNDMxNGMtMC4wMDAwNCwwIC0yNC4zMjczLDAgLTI0LjMyNzM0LDBjLTIuMDEwMDksMCAtMy45MDYxMywtMC40ODg0MSAtNS41NzU4NiwtMS4zNTI5OGMtMy45MDE0MiwtMi4wMjAwMiAtNi41Njc3MSwtNi4wOTM3OCAtNi41Njc3MSwtMTAuNzkwMzZjMCwtMC4wMDAwNCAwLC0wLjAwMDA5IDAsLTAuMDAwMTN2MHYtNzIuODk5ODdjLTAuMDIyMDQsLTYuNjg3NjUgLTUuNDUwMjksLTEyLjEwMjI0IC0xMi4xNDMxOCwtMTIuMTAyMjR2LTAuMDAwMjNoLTAuMDQwNzhjLTYuNjg3NjUsLTAuMDIyMDkgLTEyLjEwMjI0LC01LjQ1MDI5IC0xMi4xMDIyNCwtMTIuMTQzMTNoLTAuMDAwMjN2LTAuMDAwMDhoMC4wMDAyM2MwLC00LjUxNzcgMi40NjcwMSwtOC40NTkxOSA2LjEyNzM3LC0xMC41NTA3NmMxLjc2MjQ1LC0xLjAwNzE4IDMuODAxNiwtMS41ODU0IDUuOTc1MjIsLTEuNTkyNTZoMC4wNDA3OHYtMC4wMDAyM2M2LjY5Mjg1LDAgMTIuMTIxMSwtNS40MTQ1OSAxMi4xNDMxNCwtMTIuMTAyMjR2LTcyLjg5OTg3YzAsLTAuMDAwMDQgMCwtMC4wMDAwNCAwLC0wLjAwMDA4eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9InVybCgjY29sb3ItMSkiLz48Zz48cGF0aCBkPSJNNjMuNjMwMTQsODIuMzcyNzNoMjcuMTUyNTd2NDAuNjk2NmMwLjAwMDA0LDAuMDEwNzggMC4wMDAwNCwwLjAyMTU3IDAuMDAwMDQsMC4wMzIzNmMwLDcuNDk3OTkgLTYuMDc4MzIsMTMuNTc2MyAtMTMuNTc2MjYsMTMuNTc2M2MtNy40OTc5OCwwIC0xMy41NzYzLC02LjA3ODMyIC0xMy41NzYzLC0xMy41NzYzYzAsLTAuMDAwMDQgMCwtMC4wMDAwOCAwLC0wLjAwMDEyaC0wLjAwMDA0eiIgZmlsbD0idXJsKCNjb2xvci0yKSIvPjxwYXRoIGQ9Ik05MC43ODI3NSw4Mi4zNzI3N2gyNy4xNTI1N3Y0MC42OTY2YzAuMDAwMDQsMC4wMTA3OCAwLjAwMDA0LDAuMDIxNTcgMC4wMDAwNCwwLjAzMjM2YzAsNy40OTc5OSAtNi4wNzgzMiwxMy41NzYzMSAtMTMuNTc2MjcsMTMuNTc2MzFjLTcuNDk3OTgsMCAtMTMuNTc2MywtNi4wNzgzMiAtMTMuNTc2MywtMTMuNTc2MzFjMCwtMC4wMDAwNCAwLC0wLjAwMDA4IDAsLTAuMDAwMTJoLTAuMDAwMDR6IiBmaWxsPSJ1cmwoI2NvbG9yLTMpIi8+PC9nPjxnPjxwYXRoIGQ9Ik0zNjIuMDY0NjQsODIuMzcyNjdoMjcuMTUyNTd2NDAuNjk2NmMwLjAwMDA0LDAuMDEwNzggMC4wMDAwNCwwLjAyMTU3IDAuMDAwMDQsMC4wMzIzNWMwLDcuNDk3OTggLTYuMDc4MzIsMTMuNTc2MzEgLTEzLjU3NjI2LDEzLjU3NjMxYy03LjQ5Nzk4LDAgLTEzLjU3NjMsLTYuMDc4MzIgLTEzLjU3NjMsLTEzLjU3NjMxYzAsLTAuMDAwMDQgMCwtMC4wMDAwNyAwLC0wLjAwMDExaC0wLjAwMDA0eiIgZmlsbD0idXJsKCNjb2xvci00KSIvPjxwYXRoIGQ9Ik0zODkuMjE3MjUsODIuMzcyNzFoMjcuMTUyNTd2NDAuNjk2NmMwLjAwMDA0LDAuMDEwNzggMC4wMDAwNCwwLjAyMTU3IDAuMDAwMDQsMC4wMzIzNmMwLDcuNDk3OTkgLTYuMDc4MzIsMTMuNTc2MyAtMTMuNTc2MjcsMTMuNTc2M2MtNy40OTc5OCwwIC0xMy41NzYzLC02LjA3ODMyIC0xMy41NzYzLC0xMy41NzYzYzAsLTAuMDAwMDQgMCwtMC4wMDAwNyAwLC0wLjAwMDExaC0wLjAwMDA0eiIgZmlsbD0idXJsKCNjb2xvci01KSIvPjwvZz48cGF0aCBkPSJNODcuOTQ1MzYsMTc3LjAxMzI5YzAsLTUuODQ4NDEgNC43NDExMywtMTAuNTg5NTQgMTAuNTg5NTEsLTEwLjU4OTU0YzAuMDA4MzksMCAwLjAxNjgsMC4wMDAwNCAwLjAyNTE5LDAuMDAwMDRoODQuNjY1NzZjMC4wMDgzOSwtMC4wMDAwNCAwLjAxNjg1LC0wLjAwMDA0IDAuMDI1MjMsLTAuMDAwMDRjNS44NDg0MSwwIDEwLjU4OTU0LDQuNzQxMTMgMTAuNTg5NTQsMTAuNTg5NTRjMCw1Ljg0ODQxIC00Ljc0MTA4LDEwLjU4OTUgLTEwLjU4OTU0LDEwLjU4OTVjLTAuMDAwMDQsMCAtMC4wMDAwNCwwIC0wLjAwMDA4LDB2MC4wMDAwNGgtNjMuNTcyNThjLTUuODMyLDAuMDE5MjMgLTEwLjU1Mzg2LDQuNzUyOTQgLTEwLjU1Mzg2LDEwLjU4OTQ2aC0wLjAwMDJ2MC4wMDAwOGgwLjAwMDJjMCw1LjgyMzE1IDQuNzAwMjUsMTAuNTQ4NiAxMC41MTM4NCwxMC41ODkyN2g2My41ODczM2MwLjAwODM5LDAgMC4wMTY4MSwtMC4wMDAwNCAwLjAyNTE5LC0wLjAwMDA0YzUuODQ4MzgsMCAxMC41ODk1MSw0Ljc0MTA1IDEwLjU4OTUxLDEwLjU4OTV2NDIuMzU4MTZjMCw1Ljg0ODQxIC00Ljc0MTEzLDEwLjU4OTUxIC0xMC41ODk1MSwxMC41ODk1MWMtMC4wMDgzOSwwIC0wLjAxNjgxLC0wLjAwMDA0IC0wLjAyNTE5LC0wLjAwMDA0aC04NC42NjU3OWMtMC4wMDgzOSwwLjAwMDA0IC0wLjAxNjgxLDAuMDAwMDQgLTAuMDI1MjMsMC4wMDAwNGMtNS44NDg0MiwwIC0xMC41ODk1NCwtNC43NDExMyAtMTAuNTg5NTQsLTEwLjU4OTUxYzAsLTUuODQ4NDEgNC43NDExMiwtMTAuNTg5NTQgMTAuNTg5NTQsLTEwLjU4OTU0YzAuMDAwMDQsMCAwLjAwMDA0LDAgMC4wMDAwOCwwdjBoNjMuNTcyNjJjNS44MzIsLTAuMDE5MjMgMTAuNTUzODIsLTQuNzUyOTUgMTAuNTUzODIsLTEwLjU4OTUxaDAuMDAwMnYtMC4wMDAwOGgtMC4wMDAyYzAsLTUuODIzMTUgLTQuNzAwMjUsLTEwLjU0ODYgLTEwLjUxMzgsLTEwLjU4OTI3aC02My41ODcyOWMtMC4wMDgzOSwwIC0wLjAxNjgxLDAgLTAuMDI1MiwwYy0zLjU0NTIzLDAgLTYuNjgzNiwtMS43NDIxOCAtOC42MDU2LC00LjQxNzExYy0xLjI0ODc4LC0xLjczNzgxIC0xLjk4NDEzLC0zLjg2OTM5IC0xLjk4NDEzLC02LjE3MjdjMCwtMC4wMjIyNyAwLjAwMDA0LC0wLjA0NDUgMC4wMDAyMywtMC4wNjY3M3oiIGZpbGw9InVybCgjY29sb3ItNikiLz48cGF0aCBkPSJNMzI2LjcxNTE4LDI4Mi45MDgwOGMtNS44NDgzOSwwIC0xMC41ODk0NCwtNC43NDEwOCAtMTAuNTg5NDQsLTEwLjU4OTQ0YzAsLTAuMDA4MzggMC4wMDAwNCwtMC4wMTY4MSAwLjAwMDA0LC0wLjAyNTE5di04NC42NjUzN2MtMC4wMDAwNCwtMC4wMDgzOSAtMC4wMDAwNCwtMC4wMTY4NCAtMC4wMDAwNCwtMC4wMjUyM2MwLC01Ljg0ODQzIDQuNzQxMDgsLTEwLjU4OTQ4IDEwLjU4OTQ0LC0xMC41ODk0OGM1Ljg0ODQzLDAgMTAuNTg5NDgsNC43NDEwOCAxMC41ODk0OCwxMC41ODk0OGMwLDAuMDAwMDQgMCwwLjAwMDAzIDAsMC4wMDAwN2gwLjAwMDA0di0wLjAwMDA3aDAuMDAwMDRjMCwtNS44NDg0MyA0Ljc0MTA1LC0xMC41ODk0OCAxMC41ODk0NCwtMTAuNTg5NDhoMTAuNTg5MjV2LTAuMDAwMTloMTAuNTUzNzVjMC4wMTE4NiwtMC4wMDAwNCAwLjAyMzc1LC0wLjAwMDA0IDAuMDM1NjksLTAuMDAwMDRjNS44NDgzOSwwIDEwLjU4OTQ4LDQuNzQxMDUgMTAuNTg5NDgsMTAuNTg5NDhjMCw1Ljg0ODQzIC00Ljc0MTA5LDEwLjU4OTQ4IC0xMC41ODk0OCwxMC41ODk0OHYwLjAwMDA0aC0xMC41ODkyNXYwLjAwMDE2aC0xMC41NjQxN2MtMC4wMDg0MiwwLjAwMDA0IC0wLjAxNjg0LDAuMDAwMDQgLTAuMDI1MjcsMC4wMDAwNGMtMC4wMDg0MiwwIC0wLjAxNjg1LDAgLTAuMDI1MjQsLTAuMDAwMDRoLTEwLjU2NDI0djc0LjEyNjQ0aC0wLjAwMDA0YzAsNS44NDg0MyAtNC43NDEwNSwxMC41ODk0NCAtMTAuNTg5NDgsMTAuNTg5NDR6IiBmaWxsPSJ1cmwoI2NvbG9yLTcpIi8+PC9nPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjMwMDoxODcuNS0tPg==";

  const extID = "qxsckstring";

  let i10ndefaultValue = {
    "qxsckstring.name": "String",

    "qxsckstring.list.upper": "uppercase",
    "qxsckstring.list.lower": "lowercase",

    "qxsckstring.list.start": "beginning",
    "qxsckstring.list.end": "end",

    "qxsckstring.list.left": "the left",
    "qxsckstring.list.right": "the right",
    "qxsckstring.list.both": "both sides",

    "qxsckstring.list.delete": "delete",
    "qxsckstring.list.substr": "substr",

    "qxsckstring.length":
      "length of [STR] ,full-angle to [FULL] half-angle to [HALF]",
    "qxsckstring.width": "width of [STR] in font [FONT]",

    "qxsckstring.charCodeAt": "unicode of letter [NUM] of [STR]",
    "qxsckstring.fromCharCode": "char from unicode [UNI]",

    "qxsckstring.connect": "connect [DEFAULT] , [DEFAULT2]",
    "qxsckstring.slice": "letter [NUM] to [NUM2] of [STR]",
    "qxsckstring.substr": "substr start [NUM] length [NUM2] of [STR]",

    "qxsckstring.count": "count of [STR2] in [STR]",
    "qxsckstring.find": "find index of [NUM] th [STR2] in [STR]",
    "qxsckstring.findAll": "find indices of all [STR2] in [STR]",
    "qxsckstring.replace": "replace [NUM] th [STR2] in [STR] to [STR3]",
    "qxsckstring.replaceAll": "replace all [STR2] in [STR] to [STR3]",

    "qxsckstring.includes": "[STR] include [STR2] ?",
    "qxsckstring.typeWith": "is [STR] [TYPE] with [STR2] ?",
    "qxsckstring.reverse": "reverse [STR]",
    "qxsckstring.toggleCase": "convert [STR] to [TYPE]",
    "qxsckstring.repeat": "[NUM] times of [STR]",
    "qxsckstring.split": "split [STR] by [STR2]",
    "qxsckstring.join": "join [ARR] by [STR]",
    "qxsckstring.deleteString": "delete all [STR2] pn [TYPE] of [STR]",
    "qxsckstring.swap": "swap [STR2] and [STR3] in [STR]",
    "qxsckstring.add":
      "add [STR2] to [STR] [TYPE] until length is [NUM], exceeding [TYPE2]",

    "qxsckstring.replaceIndex":
      "replace letter [NUM] to [NUM2] of [STR] to [STR2]",
    "qxsckstring.delete": "delete letter [NUM] to [NUM2] of [STR]",
    "qxsckstring.insert": "insert [STR2] before letter [NUM] of [STR]",

    "qxsckstring.tooltip.length":
      "length of string and process the lengths of half width and full width characters separately",
    "qxsckstring.tooltip.width": "width of string in specified font",
    "qxsckstring.tooltip.charCodeAt": "Unicode encoding of characters in string",
    "qxsckstring.tooltip.fromCharCode": "character corresponding to Unicode encoding",
    "qxsckstring.tooltip.connect": "connect two or more strings",
    "qxsckstring.tooltip.slice":
      "substr string based on scope,\n" +
      'supports positive and negative indices',
    "qxsckstring.tooltip.substr":
      "substr string based on length,\n" +
      'supports positive and negative indices',
    "qxsckstring.tooltip.count": "number of substring in string",
    "qxsckstring.tooltip.find":
      "find position of substring in string,\n" +
      'negative index indicates finding the nth-last substring',
    "qxsckstring.tooltip.findAll": "find all positions of substring in string",
    "qxsckstring.tooltip.replace":
      "replace substring in string with a new string,\n" +
      'negative index indicates finding the nth-last substring',
    "qxsckstring.tooltip.replaceAll": "replace all substrings in string with a new string",
    "qxsckstring.tooltip.strictlyEquals": "strictly compare two strings",
    "qxsckstring.tooltip.includes": "determine whether a string is a substring of another string",
    "qxsckstring.tooltip.typeWith": "determine whether a string is beginning or end of another string",
    "qxsckstring.tooltip.reverse": "reverse string",
    "qxsckstring.tooltip.toggleCase": "convert strings to uppercase or lowercase",
    "qxsckstring.tooltip.repeat": "repeat string",
    "qxsckstring.tooltip.split": "split string to array",
    "qxsckstring.tooltip.join": "join array to string",
    "qxsckstring.tooltip.deleteString":
      "delete specified string on the left and right sides of the string\n" +
      'if the string to be deleted is empty, then delete the all whitespace characters',
    "qxsckstring.tooltip.swap":
      "swap two substrings in a string,\n" +
      'prioritize the longer substring',
    "qxsckstring.tooltip.add":
      "pad string with another string,\n" +
      'the delete option means if the last substring added exceeds the specified length, \n' +
      'it is not added at all; \n' +
      'the truncate option means only the part that fits the remaining length is added',
    "qxsckstring.tooltip.replaceIndex": "replace specified range of string",
    "qxsckstring.tooltip.delete": "delete specified range of string",
    "qxsckstring.tooltip.insert": "insert another string into a string",
  };

  Scratch.translate.setup({
    en: {
      ...i10ndefaultValue,
    },
    zh: {
      "qxsckstring.name": "字符串",

      "qxsckstring.list.upper": "大写",
      "qxsckstring.list.lower": "小写",

      "qxsckstring.list.start": "开头",
      "qxsckstring.list.end": "末尾",

      "qxsckstring.list.left": "左侧",
      "qxsckstring.list.right": "右侧",
      "qxsckstring.list.both": "两侧",

      "qxsckstring.list.delete": "删除",
      "qxsckstring.list.substr": "截取",

      "qxsckstring.length": "[STR] 的长度，全角长 [FULL] 半角长 [HALF]",
      "qxsckstring.width": "[STR] 在字体 [FONT] 下的宽度",
      "qxsckstring.charCodeAt": "[STR] 第 [NUM] 位的 unicode",
      "qxsckstring.fromCharCode": "unicode [UNI] 对应的字符",
      "qxsckstring.connect": "连接 [DEFAULT] , [DEFAULT2]",
      "qxsckstring.slice": "[STR] 第 [NUM] 到 [NUM2] 位",
      "qxsckstring.substr": "[STR] 第 [NUM] 位开始长 [NUM2] 的内容",
      "qxsckstring.count": "[STR] 中 [STR2] 的数量",
      "qxsckstring.find": "寻找 [STR] 中第 [NUM] 个 [STR2]",
      "qxsckstring.findAll": "寻找 [STR] 中所有 [STR2]",
      "qxsckstring.replace": "替换 [STR] 中第 [NUM] 个 [STR2] 为 [STR3]",
      "qxsckstring.replaceAll": "替换 [STR] 中所有 [STR2] 为 [STR3]",
      "qxsckstring.includes": "[STR] 包括 [STR2] ？",
      "qxsckstring.typeWith": "[STR] 以 [STR2] [TYPE] ？",
      "qxsckstring.reverse": "反转 [STR]",
      "qxsckstring.toggleCase": "将 [STR] 转为 [TYPE]",
      "qxsckstring.repeat": "重复 [NUM] 个 [STR]",
      "qxsckstring.split": "用 [STR2] 分割 [STR]",
      "qxsckstring.join": "用 [STR] 合并 [ARR]",
      "qxsckstring.deleteString": "删除 [STR] [TYPE] 的 [STR2]",
      "qxsckstring.swap": "交换 [STR] 中的 [STR2] 和 [STR3]",
      "qxsckstring.add":
        "在 [STR] [TYPE] 加上 [STR2] 直到长度为 [NUM] ，超出部分 [TYPE2]",
      "qxsckstring.replaceIndex": "替换 [STR] 第 [NUM] 到 [NUM2] 位为 [STR2]",
      "qxsckstring.delete": "删除 [STR] 第 [NUM] 到 [NUM2] 位",
      "qxsckstring.insert": "在 [STR] 第 [NUM] 位前插入 [STR2]",

      "qxsckstring.tooltip.length":
        "字符串的长度，分别处理半角字符与全角字符的长度",
      "qxsckstring.tooltip.width": "字符串在指定字体下的宽度",
      "qxsckstring.tooltip.charCodeAt": "字符串中字符的 unicode 编码",
      "qxsckstring.tooltip.fromCharCode": "unicode 编码对应的字符",
      "qxsckstring.tooltip.connect": "连接两个及以上的字符串",
      "qxsckstring.tooltip.slice":
        "根据范围截取字符串，\n" +
        '支持正负索引',
      "qxsckstring.tooltip.substr":
        "根据长度截取字符串，\n" +
        '支持正负索引',
      "qxsckstring.tooltip.count": "子串在字符串中的数量",
      "qxsckstring.tooltip.find":
        "寻找字符串中子串的位置，\n" +
        '负序号表示寻找第倒数个子串',
      "qxsckstring.tooltip.findAll": "寻找字符串中所有子串的位置",
      "qxsckstring.tooltip.replace":
        "替换字符串中的子串为一个新字符串，\n" +
        '负序号表示替换第倒数个子串',
      "qxsckstring.tooltip.replaceAll": "替换字符串中所有子串为一个新字符串",
      "qxsckstring.tooltip.strictlyEquals": "严格比较两个字符串",
      "qxsckstring.tooltip.includes": "判断字符串是否是另一个字符串的子串",
      "qxsckstring.tooltip.typeWith":
        "判断字符串是否在另一个字符串的开头或结尾",
      "qxsckstring.tooltip.reverse": "反转字符串",
      "qxsckstring.tooltip.toggleCase": "转换字符串为大写或小写",
      "qxsckstring.tooltip.repeat": "重复的字符串",
      "qxsckstring.tooltip.split": "分割字符串",
      "qxsckstring.tooltip.join": "合并字符串",
      "qxsckstring.tooltip.deleteString":
        "删除字符串左右侧的指定字符串\n" +
        '要删除的字符串为空则删除所有空白字符',
      "qxsckstring.tooltip.swap":
        "交换字符串中的两个子串，\n" +
        '较长子串优先',
      "qxsckstring.tooltip.add":
        "填充字符串，\n" +
        '删除选项表示最后一个填入的子串如果超过限定长度整个不填入；\n' +
        '截取则表示截取可填入剩余长度的部分填入',
      "qxsckstring.tooltip.replaceIndex": "替换字符串的指定范围",
      "qxsckstring.tooltip.delete": "删除字符串的指定范围",
      "qxsckstring.tooltip.insert": "往字符串中插入字符串",
    },
  });
  class StringExt {
    constructor(runtime) {
      this.runtime = runtime ?? Scratch?.vm?.runtime;
      if (!this.runtime) {
        return;
      }
      // 注册可拓展积木
      setExpandableBlocks(
        {
          qxsckstring_connect: ["connect"],
        },
        this.runtime
      );
    }
    formatMessage = function (id) {
      return Scratch.translate({ id: id, default: i10ndefaultValue[id] });
    };

    getInfo() {
      const blocks = [
        //command,reporter,Boolean,hat,conditional,loop
        {
          opcode: "length",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.length"),
          //hideFromPalette: true,
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str",
            },
            FULL: {
              type: "string",
              defaultValue: "1",
            },
            HALF: {
              type: "string",
              defaultValue: "0.5",
            },
          },
        },
        {
          opcode: "width",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.width"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str",
            },
            FONT: {
              type: "string",
              defaultValue: "Arial 30px",
            },
          },
        },

        "---",

        {
          opcode: "charCodeAt",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.charCodeAt"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str",
            },
            NUM: {
              type: "string",
              defaultValue: "1",
            },
          },
        },
        {
          opcode: "fromCharCode",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.fromCharCode"),
          arguments: {
            UNI: {
              type: "string",
              defaultValue: "115",
            },
          },
        },

        "---",

        {
          opcode: "connect",
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage("qxsckstring.connect"),
          disableMonitor: true,
          arguments: {
            DEFAULT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "apple",
            },
            DEFAULT2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "banana",
            },
          },
        },
        {
          opcode: "slice",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.slice"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str",
            },
            NUM: {
              type: "string",
              defaultValue: "1",
            },
            NUM2: {
              type: "string",
              defaultValue: "3",
            },
          },
        },
        {
          opcode: "substr",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.substr"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str",
            },
            NUM: {
              type: "string",
              defaultValue: "1",
            },
            NUM2: {
              type: "string",
              defaultValue: "3",
            },
          },
        },

        "---",

        {
          opcode: "count",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.count"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str str",
            },
            STR2: {
              type: "string",
              defaultValue: "str",
            },
          },
        },
        {
          opcode: "find",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.find"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str str",
            },
            STR2: {
              type: "string",
              defaultValue: "str",
            },
            NUM: {
              type: "string",
              defaultValue: "1",
            },
          },
        },
        {
          opcode: "findAll",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.findAll"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str str",
            },
            STR2: {
              type: "string",
              defaultValue: "str",
            },
          },
        },
        {
          opcode: "replace",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.replace"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str str",
            },
            STR2: {
              type: "string",
              defaultValue: "str",
            },
            STR3: {
              type: "string",
              defaultValue: "num",
            },
            NUM: {
              type: "string",
              defaultValue: "1",
            },
          },
        },
        {
          opcode: "replaceAll",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.replaceAll"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str str",
            },
            STR2: {
              type: "string",
              defaultValue: "str",
            },
            STR3: {
              type: "string",
              defaultValue: "num",
            },
          },
        },

        "---",

        {
          opcode: "strictlyEquals",
          blockType: "Boolean",
          text: "[STR] === [STR2]",
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str",
            },
            STR2: {
              type: "string",
              defaultValue: "Str",
            },
          },
        },
        {
          opcode: "includes",
          blockType: "Boolean",
          text: this.formatMessage("qxsckstring.includes"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str",
            },
            STR2: {
              type: "string",
              defaultValue: "str",
            },
          },
        },
        {
          opcode: "typeWith",
          blockType: "Boolean",
          text: this.formatMessage("qxsckstring.typeWith"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str",
            },
            STR2: {
              type: "string",
              defaultValue: "s",
            },
            TYPE: {
              type: "string",
              menu: "typeWith.List",
            },
          },
        },
        {
          opcode: "reverse",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.reverse"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str",
            },
          },
        },
        {
          opcode: "toggleCase",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.toggleCase"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str",
            },
            TYPE: {
              type: "string",
              menu: "toggleCase.List",
            },
          },
        },
        {
          opcode: "repeat",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.repeat"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str",
            },
            NUM: {
              type: "string",
              defaultValue: "2",
            },
          },
        },
        {
          opcode: "split",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.split"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str1num",
            },
            STR2: {
              type: "string",
              defaultValue: "1",
            },
          },
        },
        {
          opcode: "join",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.join"),
          arguments: {
            ARR: {
              type: "string",
              defaultValue: '["str","num"]',
            },
            STR: {
              type: "string",
              defaultValue: "1",
            },
          },
        },
        {
          opcode: "deleteString",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.deleteString"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "numstrnum",
            },
            STR2: {
              type: "string",
              defaultValue: "num",
            },
            TYPE: {
              type: "string",
              menu: "deleteString.List",
            },
          },
        },
        {
          opcode: "swap",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.swap"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str and num",
            },
            STR2: {
              type: "string",
              defaultValue: "str",
            },
            STR3: {
              type: "string",
              defaultValue: "num",
            },
          },
        },
        {
          opcode: "add",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.add"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "str",
            },
            STR2: {
              type: "string",
              defaultValue: "ing",
            },
            NUM: {
              type: "string",
              defaultValue: "7",
            },
            TYPE: {
              type: "string",
              menu: "typeWith.List",
            },
            TYPE2: {
              type: "string",
              menu: "add.List",
            },
          },
        },

        "---",

        {
          opcode: "replaceIndex",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.replaceIndex"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "snumr",
            },
            NUM: {
              type: "string",
              defaultValue: "2",
            },
            NUM2: {
              type: "string",
              defaultValue: "4",
            },
            STR2: {
              type: "string",
              defaultValue: "t",
            },
          },
        },
        {
          opcode: "delete",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.delete"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "snumtr",
            },
            NUM: {
              type: "string",
              defaultValue: "2",
            },
            NUM2: {
              type: "string",
              defaultValue: "4",
            },
          },
        },
        {
          opcode: "insert",
          blockType: "reporter",
          text: this.formatMessage("qxsckstring.insert"),
          arguments: {
            STR: {
              type: "string",
              defaultValue: "sr",
            },
            NUM: {
              type: "string",
              defaultValue: "2",
            },
            STR2: {
              type: "string",
              defaultValue: "t",
            },
          },
        },
      ];
      blocks.forEach((block) => {
        if (typeof block === "object") {
          block.tooltip = this.formatMessage(
            `qxsckstring.tooltip.${block.opcode}`
          );
        }
      });
      return {
        id: extID,
        name: this.formatMessage("qxsckstring.name"),
        color1: "#85a7fb",
        color2: "#dbe5ff",
        color3: "#6690fa",
        menuIconURI: Icon,
        //blockIconURI: Icon,
        docsURI: "",
        blocks,
        menus: {
          "toggleCase.List": [
            {
              text: this.formatMessage("qxsckstring.list.upper"),
              value: "upper",
            },
            {
              text: this.formatMessage("qxsckstring.list.lower"),
              value: "lower",
            },
          ],
          "typeWith.List": { items: "getSartAndEnd" },
          "deleteString.List": [
            {
              text: this.formatMessage("qxsckstring.list.both"),
              value: "both",
            },
            {
              text: this.formatMessage("qxsckstring.list.left"),
              value: "left",
            },
            {
              text: this.formatMessage("qxsckstring.list.right"),
              value: "right",
            },
          ],
          "add.List": [
            {
              text: this.formatMessage("qxsckstring.list.delete"),
              value: "delete",
            },
            {
              text: this.formatMessage("qxsckstring.list.substr"),
              value: "substr",
            },
          ],
        },
      };
    }

    getSartAndEnd() {
      return [
        {
          text: this.formatMessage("qxsckstring.list.start"),
          value: "start",
        },
        {
          text: this.formatMessage("qxsckstring.list.end"),
          value: "end",
        },
      ];
    }

    isFullAngle(char) {
      return /[^\x00-\xff]/.test(char);
    }
    toNum(val) {
      return isNaN(Number(val)) ? 0 : Number(val);
    }
    getIndex(str, index) {
      //根据字符串获取对应的index
      let anyIndex = Number(index), //用于判断index是否是数字
        numIndex = parseInt(this.toNum(index)), //假定index是数字
        lastIndex = str.length + numIndex + 1; //假定index是负数index
      let index_ = isNaN(anyIndex) //是否为数字
        ? 0 //返回0
        : numIndex > 0 //是否是正数index
          ? numIndex > str.length
            ? str.length //超过长度限制返回最大长度
            : numIndex //否则返回
          : numIndex < 0
            ? lastIndex > 0 //负数index是否大于0
              ? lastIndex //正常返回
              : 1 //不大于0返回1
            : 0;
      return index_;
    }
    getAllArgs(args, opcode_) {
      let inputKeys = Object.keys(BLOCK_INPUT[opcode_]);
      let itemList = {},
        default_ = {};
      for (let i = 0; i < BLOCK_DEFAULT[opcode_].length; i++) {
        default_[BLOCK_DEFAULT[opcode_][i]] = args[BLOCK_DEFAULT[opcode_][i]];
      }
      itemList["0"] = default_;
      let argIndex = 1;
      while (true) {
        if (`${INPUT_JUDGE[opcode_]}${argIndex}` in args) {
          let list = {};
          for (let i = 0; i < inputKeys.length; i++) {
            let argName = `${inputKeys[i]}${argIndex}`;
            if (argName in args) list[inputKeys[i]] = args[argName];
          }
          itemList[`${argIndex}`] = list;
        } else break;
        argIndex++;
      }
      itemList["length"] = argIndex;
      return itemList;
    }

    length(args) {
      let length = 0,
        str = String(args.STR),
        fullAngle = this.toNum(args.FULL),
        halfAngle = this.toNum(args.HALF);
      for (let i in str)
        length += this.isFullAngle(str[i]) ? fullAngle : halfAngle;
      return length;
    }
    width(args) {
      let str = String(args.STR),
        font = String(args.FONT);
      let measureText;
      if (!measureText) {
        measureText = document.createElement("canvas");
      }
      const ctx = measureText.getContext("2d");
      ctx.font = font;
      return ctx.measureText(str).width;
    }

    charCodeAt(args) {
      let str = String(args.STR),
        num = this.getIndex(str, args.NUM);
      return num !== 0 ? str.charCodeAt(num - 1) : "";
    }
    fromCharCode(args) {
      return String.fromCharCode(this.toNum(args.UNI));
    }

    connect(args) {
      let itemList = this.getAllArgs(args, "connect");
      let string = String(itemList[0].DEFAULT) + String(itemList[0].DEFAULT2);
      for (let i = 1; i < itemList.length; i++) {
        string += String(itemList[i].ADD);
      }
      return string;
    }
    slice(args) {
      let str = String(args.STR),
        num = this.getIndex(str, args.NUM),
        num2 = this.getIndex(str, args.NUM2);
      return num !== 0 && num2 !== 0 ? str.slice(num - 1, num2) : "";
    }
    substr(args) {
      let str = String(args.STR),
        num = this.getIndex(str, args.NUM),
        num2 = this.toNum(args.NUM2);
      let last = this.getIndex(str, num + num2 - 1);
      return num !== 0 && last !== 0 ? str.slice(num - 1, last) : "";
    }

    count(args) {
      let str = String(args.STR),
        str2 = String(args.STR2),
        count = 0,
        idx = -1;
      if (str2 === "" || str === "") return 0;
      else if (str.indexOf(str2) === -1) return 0;
      while (true) {
        idx = str.indexOf(str2, idx + 1);
        if (idx === -1) return count;
        count++, (idx += str2.length - 1);
      }
    }
    find(args) {
      let str = String(args.STR),
        str2 = String(args.STR2),
        num = parseInt(this.toNum(args.NUM));
      if (num === 0) return -1;
      let type = num > 0,
        str_,
        str2_,
        num_;
      if (type) {
        (str_ = str), (str2_ = str2);
        num_ = num;
      } else {
        (str_ = this.reverse({ STR: str })),
          (str2_ = this.reverse({ STR: str2 }));
        num_ = num * -1;
      }
      let idx = -1;
      for (let i = 0; i < num_; i++) {
        idx = str_.indexOf(str2_, idx + 1);
        if (idx === -1) return -1;
      }
      return (
        (type ? idx : this.getIndex(str, (idx + 1) * -1) - str2.length) + 1
      );
    }
    findAll(args) {
      let str = String(args.STR),
        str2 = String(args.STR2);
      let indexList = [],
        idx = -1;
      while (true) {
        idx = str.indexOf(str2, idx + 1);
        indexList.push(idx);
        if (idx === -1) {
          indexList.pop();
          return JSON.stringify(indexList.map((val) => val + 1));
        }
      }
    }
    replace(args) {
      let str = String(args.STR),
        str2 = String(args.STR2),
        str3 = String(args.STR3),
        num = parseInt(this.toNum(args.NUM));
      if (num === 0) return -1;
      let type = num > 0,
        str_,
        str2_,
        num_;
      if (type) {
        (str_ = str), (str2_ = str2);
        num_ = num;
      } else {
        (str_ = this.reverse({ STR: str })),
          (str2_ = this.reverse({ STR: str2 }));
        num_ = num * -1;
      }
      let idx = -1;
      for (let i = 0; i < num_; i++) {
        idx = str_.indexOf(str2_, idx + 1);
        if (idx === -1) return -1;
      }
      let index =
        (type ? idx : this.getIndex(str, (idx + 1) * -1) - str2.length) + 1;
      return str.slice(0, index - 1) + str.slice(index - 1).replace(str2, str3);
    }
    replaceAll(args) {
      let str = String(args.STR),
        str2 = String(args.STR2),
        str3 = String(args.STR3);
      return str.replaceAll(str2, str3);
    }

    strictlyEquals(args) {
      let str = String(args.STR),
        str2 = String(args.STR2);
      return str === str2;
    }
    includes(args) {
      let str = String(args.STR),
        str2 = String(args.STR2);
      return str.includes(str2);
    }
    typeWith(args) {
      let str = String(args.STR),
        str2 = String(args.STR2);
      if (args.TYPE === "start") {
        return str.startsWith(str2);
      } else if (args.TYPE === "end") {
        return str.endsWith(str2);
      }
    }
    reverse(args) {
      let str = String(args.STR);
      return str.split("").reverse().join("");
    }
    toggleCase(args) {
      let str = String(args.STR);
      return args.TYPE === "upper" ? str.toUpperCase() : str.toLowerCase();
    }
    repeat(args) {
      let str = "";
      for (let i = 0; i < this.toNum(args.NUM); i++) str += String(args.STR);
      return str;
    }
    split(args) {
      let str = String(args.STR),
        str2 = String(args.STR2);
      return JSON.stringify(str.split(str2));
    }
    join(args) {
      let str = String(args.STR),
        arr = args.ARR;
      try {
        arr = JSON.parse(arr);
      } catch {
        arr = [];
      }
      return arr.join(str);
    }
    deleteString(args) {
      let str = String(args.STR),
        str2 = String(args.STR2),
        type = args.TYPE;

      if (str2 === '') return str.trim();

      function removeLeft(str, pattern) {
        const regex = new RegExp("^" + pattern + "+");
        return str.replace(regex, "");
      }

      function removeRight(str, pattern) {
        const regex = new RegExp(pattern + "+$");
        return str.replace(regex, "");
      }

      if (type === "left") {
        return removeLeft(str, str2);
      } else if (type === "right") {
        return removeRight(str, str2);
      } else {
        return removeRight(removeLeft(str, str2), str2);
      }
    }
    swap(args) {
      let str = String(args.STR),
        str2 = String(args.STR2),
        str3 = String(args.STR3),
        temp;
      if (str === "") return "";
      if (str2 === str3) return str;
      if (str.length < str2.length || str.length < str3.length) return str;
      if (str2.length < str3.length)
        (temp = str3), (str3 = str2), (str2 = temp);
      let arr = str.split(str2);
      let arr2 = arr.map((val) => {
        return val.replaceAll(str3, str2);
      });
      let returnStr = arr2.join(str3);
      return returnStr;
    }
    add(args) {
      let str = String(args.STR),
        str2 = String(args.STR2),
        num = this.toNum(args.NUM),
        type = args.TYPE,
        type2 = args.TYPE2;
      let len, cnt, padStr;
      if (type2 === "substr") {
        if (type === "start") {
          return str.padStart(num, str2);
        } else {
          return str.padEnd(num, str2);
        }
      } else {
        len = num - str.length;
        if (len <= 0) return str;
        cnt = Math.floor(len / str2.length);
        padStr = str2.repeat(cnt).slice(0, len);
        if (type === "start") {
          return padStr + str;
        } else {
          return str + padStr;
        }
      }
    }

    replaceIndex(args) {
      let str = String(args.STR),
        str2 = String(args.STR2),
        num = this.getIndex(str, args.NUM),
        num2 = this.getIndex(str, args.NUM2);
      return str.slice(0, num - 1) + str2 + str.slice(num2);
    }
    delete(args) {
      let str = String(args.STR),
        num = this.getIndex(str, args.NUM),
        num2 = this.getIndex(str, args.NUM2);
      return str.slice(0, num - 1) + str.slice(num2);
    }
    insert(args) {
      let str = String(args.STR),
        str2 = String(args.STR2),
        num = this.getIndex(str, args.NUM);
      return str.slice(0, num - 1) + str2 + str.slice(num - 1);
    }
  }

  if (Scratch.vm?.runtime) {
    Scratch.extensions.register(new StringExt(Scratch.vm.runtime));
  } else {
    Reflect.set(window, "tempExt", {
      Extension: StringExt,
      info: {
        name: "qxsckstring.name",
        description: "qxsckstring.description",
        extensionId: extID,
        iconURL: insetIcon,
        insetIconURL: insetIcon,
        featured: true,
        disabled: false,
        collaboratorList: [
          {
            collaborator: "CK七星松@CCW",
            collaboratorURL:
              "https://www.ccw.site/student/6065b24029ff8179017ac0cc",
          },
          {
            collaborator: "bilioicik@CCW",
            collaboratorURL:
              "https://www.ccw.site/student/6218cd094daafc57cebfc1d3",
          },
        ],
      },
      l10n: {
        "zh-cn": {
          "qxsckstring.name": "字符串",
          "qxsckstring.description": "更优雅的关于字符串的积木",
        },
        en: {
          "qxsckstring.name": "String",
          "qxsckstring.description": "Some beautiful blocks about string.",
        },
      },
    });
  }
})(Scratch);
