/**
 * example-ext.js — An example extension demonstrating common block patterns.
 */

(function (Scratch) {
  const {
    vm, // Note: in Gandi, vm is not fully available for now (only used to access vm.runtime for compatibility reasons)
    runtime,
    ArgumentType,
    BlockType,
    TargetType,
    Cast,
    translate,
    extensions,
  } = Scratch;


  // ------------------------------------------------------------------
  // 1. Localization strings
  // ------------------------------------------------------------------
  translate.setup({
    zh: {
      'extName': '示例扩展',
      'tag.utils': '🛠 实用工具',
      'tag.math': '🔢 数学',
      'tag.event': '🔔 事件',
      'btn.hello': '👋 信息',
      'btn.clicked': '你点击了按钮！',
      'block.moveToRandom': '移到随机位置',
      'block.pointTowardRandom': '面向随机方向',
      'block.letterOf': '[TEXT] 的第 [INDEX] 个字符',
      'block.mathOp': '[OP] [A] 和 [B]',
      'block.randomInt': '随机整数 [MIN] 到 [MAX]',
      'block.effect': '将 [EFFECT] 特效设为 [VAL]',
      'block.isEven': '[NUM] 是偶数？',
      'block.whenTimer': '当计时器大于 [SEC] 秒',
      'block.greenFlagReset': '当绿旗被点击后',
      'hat.key': '键值',
      'menu.op.add': '加',
      'menu.op.subtract': '减',
      'menu.op.multiply': '乘',
      'menu.op.divide': '除',
      'menu.effect.color': '颜色',
      'menu.effect.fisheye': '鱼眼',
      'menu.effect.whirl': '旋涡',
      'menu.effect.pixelate': '像素化',
      'menu.effect.mosaic': '马赛克',
      'menu.effect.brightness': '亮度',
      'menu.effect.ghost': '虚像',
      'default.text': 'abcdef',
    },
    en: {
      'extName': 'Example Extension',
      'tag.utils': '🛠 Utilities',
      'tag.math': '🔢 Math',
      'tag.event': '🔔 Events',
      'btn.hello': '👋 Info',
      'btn.clicked': 'You clicked the button!',
      'block.moveToRandom': 'move to random position',
      'block.pointTowardRandom': 'point toward random direction',
      'block.letterOf': 'letter [INDEX] of [TEXT]',
      'block.mathOp': '[OP] of [A] and [B]',
      'block.randomInt': 'random integer from [MIN] to [MAX]',
      'block.effect': 'set [EFFECT] effect to [VAL]',
      'block.isEven': '[NUM] is even?',
      'block.whenTimer': 'when timer > [SEC] seconds',
      'block.greenFlagReset': 'when green flag clicked',
      'hat.key': 'key',
      'menu.op.add': 'add',
      'menu.op.subtract': 'subtract',
      'menu.op.multiply': 'multiply',
      'menu.op.divide': 'divide',
      'menu.effect.color': 'color',
      'menu.effect.fisheye': 'fisheye',
      'menu.effect.whirl': 'whirl',
      'menu.effect.pixelate': 'pixelate',
      'menu.effect.mosaic': 'mosaic',
      'menu.effect.brightness': 'brightness',
      'menu.effect.ghost': 'ghost',
      'default.text': 'abcdef',
    },
  });

  // ------------------------------------------------------------------
  // 2. Extension class
  // ------------------------------------------------------------------
  class ExampleExtension {
    constructor(_runtime) {
      this._runtime = _runtime;
    }

    // ------------------------------------------------------------------
    // 3. getInfo() — block definitions
    // ------------------------------------------------------------------
    getInfo() {
      return {
        id: 'exampleExtension',
        name: translate({ id: 'extName' }),
        color1: '#FF8C1A',
        color2: '#DB6E00',
        // will show a doc button in the menu
        doc: 'your-extension-docs-url',
        // icon: 'your-extension-icon',

        blocks: [
          // ─── Button ─────────────────────────────────────────────
          {
            blockType: BlockType.BUTTON,
            text: translate({ id: 'btn.hello' }),
            // Gandi-specific: onClick is a function that gets called when the button is clicked.
            onClick: () => {
              alert(translate({ id: 'btn.clicked' }));
            },
            // for TurboWarp/vanilla Scratch, use 'func' for method name
            // func: 'methodName'
          },
          // Gandi-specific: '---' creates a separator. '---'+text creates a label.
          '---' + translate({ id: 'tag.utils' }),
          // For TurboWarp/vanilla Scratch compatibility, use BlockType.LABEL instead:
          // { 
          //   blockType: BlockType.LABEL,
          //   text: translate({ id: 'tag.utils' })
          // },

          // ─── Command: move to random position ──────────────────
          {
            opcode: 'moveToRandom',
            blockType: BlockType.COMMAND,
            text: translate({ id: 'block.moveToRandom' }),
            filter: [TargetType.SPRITE],
          },

          // ─── Command: point toward random direction ────────────
          {
            opcode: 'pointTowardRandom',
            blockType: BlockType.COMMAND,
            text: translate({ id: 'block.pointTowardRandom' }),
            filter: [TargetType.SPRITE],
          },

          // ─── Command: set graphic effect (disabled example) ───
          // Disabled to show the disabled: true pattern
          {
            opcode: 'setEffect',
            blockType: BlockType.COMMAND,
            text: translate({ id: 'block.effect' }),
            arguments: {
              EFFECT: {
                type: ArgumentType.STRING,
                menu: 'EFFECT_MENU',
              },
              VAL: {
                type: ArgumentType.NUMBER,
                defaultValue: 25,
              },
            },
            filter: [TargetType.SPRITE],
            disabled: true,
          },
          '---' + translate({ id: 'tag.math' }),

          // ─── Reporter: letter of text ──────────────────────────
          {
            opcode: 'letterOf',
            blockType: BlockType.REPORTER,
            text: translate({ id: 'block.letterOf' }),
            arguments: {
              TEXT: {
                type: ArgumentType.STRING,
                defaultValue: translate({ id: 'default.text' }),
              },
              INDEX: {
                type: ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },

          // ─── Reporter: math operation with menu ────────────────
          {
            opcode: 'mathOp',
            blockType: BlockType.REPORTER,
            text: translate({ id: 'block.mathOp' }),
            arguments: {
              OP: {
                type: ArgumentType.STRING,
                menu: 'OP_MENU',
              },
              A: {
                type: ArgumentType.NUMBER,
                defaultValue: 10,
              },
              B: {
                type: ArgumentType.NUMBER,
                defaultValue: 3,
              },
            },
          },

          // ─── Reporter: random integer ──────────────────────────
          {
            opcode: 'randomInt',
            blockType: BlockType.REPORTER,
            text: translate({ id: 'block.randomInt' }),
            arguments: {
              MIN: {
                type: ArgumentType.NUMBER,
                defaultValue: 1,
              },
              MAX: {
                type: ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
          },

          // ─── Boolean: is number even? ──────────────────────────
          {
            opcode: 'isEven',
            blockType: BlockType.BOOLEAN,
            text: translate({ id: 'block.isEven' }),
            arguments: {
              NUM: {
                type: ArgumentType.NUMBER,
                defaultValue: 42,
              },
            },
          },

          // ─── Hidden Boolean (utility, not shown in palette) ────
          {
            opcode: 'hiddenBoolDemo',
            blockType: BlockType.BOOLEAN,
            text: '[VAL]',
            hideFromPalette: true, // Hide from palette
            arguments: {
              VAL: {
                type: ArgumentType.STRING,
                defaultValue: '0',
              },
            },
          },
        ],

        // ─── Menus ──────────────────────────────────────────────
        menus: {
          // Static menu — inline array
          OP_MENU: [
            {
              text: translate({ id: 'menu.op.add' }),
              value: 'add',
            },
            {
              text: translate({ id: 'menu.op.subtract' }),
              value: 'subtract',
            },
            {
              text: translate({ id: 'menu.op.multiply' }),
              value: 'multiply',
            },
            {
              text: translate({ id: 'menu.op.divide' }),
              value: 'divide',
            },
          ],

          // Graphic effect menu
          EFFECT_MENU: [
            {
              text: translate({ id: 'menu.effect.color' }),
              value: 'color',
            },
            {
              text: translate({ id: 'menu.effect.fisheye' }),
              value: 'fisheye',
            },
            {
              text: translate({ id: 'menu.effect.whirl' }),
              value: 'whirl',
            },
            {
              text: translate({ id: 'menu.effect.pixelate' }),
              value: 'pixelate',
            },
            {
              text: translate({ id: 'menu.effect.mosaic' }),
              value: 'mosaic',
            },
            {
              text: translate({ id: 'menu.effect.brightness' }),
              value: 'brightness',
            },
            {
              text: translate({ id: 'menu.effect.ghost' }),
              value: 'ghost',
            },
          ],

          // Dynamic menu — items are generated by a function
          LIST_MENU: {
            acceptReporters: true,
            items: 'getListMenu',
          },
        },
      };
    }

    // ------------------------------------------------------------------
    // 4. Block implementations
    // ------------------------------------------------------------------

    // -- COMMAND blocks --

    moveToRandom(args, util) {
      if (util && util.target && !util.target.isStage) {
        util.target.setXY(
          Math.random() * 480 - 240,
          Math.random() * 360 - 180
        );
      }
    }

    pointTowardRandom(args, util) {
      if (util && util.target && !util.target.isStage) {
        util.target.setDirection(Math.random() * 360);
      }
    }

    setEffect(args, util) {
      if (util && util.target && !util.target.isStage) {
        util.target.setEffect(
          Cast.toString(args.EFFECT),
          Cast.toNumber(args.VAL),
        );
      }
    }

    // -- REPORTER blocks --

    letterOf(args) {
      const text = Cast.toString(args.TEXT);
      const idx = Cast.toNumber(args.INDEX) - 1;
      if (idx < 0 || idx >= text.length) return '';
      return text.charAt(idx);
    }

    mathOp(args) {
      const a = Cast.toNumber(args.A);
      const b = Cast.toNumber(args.B);
      switch (args.OP) {
        case 'add':
          return a + b;
        case 'subtract':
          return a - b;
        case 'multiply':
          return a * b;
        case 'divide':
          return b === 0 ? Infinity : a / b;
        default:
          return 0;
      }
    }

    randomInt(args) {
      const min = Math.ceil(Cast.toNumber(args.MIN));
      const max = Math.floor(Cast.toNumber(args.MAX));
      if (min > max) return 0;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // -- BOOLEAN blocks --

    isEven(args) {
      return Cast.toNumber(args.NUM) % 2 === 0;
    }

    hiddenBoolDemo(args) {
      // Scratch-style truthiness conversion
      const val = Cast.toString(args.VAL).toLowerCase();
      if (
        val === 'false' ||
        val === '0' ||
        val === 'null' ||
        val === 'undefined' ||
        val === ''
      ) {
        return false;
      }
      return true;
    }

    // ------------------------------------------------------------------
    // 5. Dynamic menu generator
    // ------------------------------------------------------------------
    getListMenu() {
      const items = [];
      // Look up global (stage) variables
      const stage = this._runtime.getTargetForStage();
      if (stage && stage.variables) {
        Object.keys(stage.variables).forEach((id) => {
          const v = stage.variables[id];
          if (v.type === 'list') {
            items.push({ text: v.name, value: v.id });
          }
        });
      }
      if (items.length === 0) {
        items.push({ text: '-', value: '' });
      }
      return items;
    }
  }

  // ------------------------------------------------------------------
  // 6. Register
  // ------------------------------------------------------------------
  extensions.register(new ExampleExtension(runtime));
})(Scratch);
