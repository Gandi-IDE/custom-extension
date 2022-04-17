class StrictEqualityExtension {
    getInfo() {
      return {
        id: 'strictequalityexample', // change this if you make an actual extension!
        name: 'Strict Equality',
        blocks: [
          {
            opcode: 'strictlyEquals',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'dfdfd [ONE] strictly equals [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'dynamicMenu',
                defaultValue: 'Second value'
              },
              TWO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Second value'
              }
            }
          }
        ],
        menus: {
            staticMenu: {
                items: ['dd 1', '鼠标 2', '33w 3']
            },
            dynamicMenu: {
                items: 'getDynamicMenuItems'//['static 1', 'static 2', 'static 3']//
            }
        }
      };
    }
    strictlyEquals(args) {
      // Note strict equality: Inputs must match exactly: in type, case, etc.
      return args.ONE === args.TWO;
    }

    getDynamicMenuItems() {
        return ['ddd 1', '大V 2', 'dd了 3'];
    }
  }
  Scratch.extensions.register(new StrictEqualityExtension());