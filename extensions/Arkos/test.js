import Cast from '../utils/cast.js'

class StrictEqualityExtension {
  constructor(runtime) {
    this.runtime = runtime
    }
    getInfo() {
      return {
        id: 'strictequalityexample', // change this if you make an actual extension!
        name: 'Strict Equality',
        blocks: [
          {
            opcode: 'strictlyEquals',
            blockType: 'Boolean',
            text: 'dfdfd [ONE] strictly equals [TWO]',
            arguments: {
              ONE: {
                type: 'string',
                menu: 'dynamicMenu',
                defaultValue: 'Second value'
              },
              TWO: {
                type: 'string',
                defaultValue: 'Second value'
              }
            }
          },
          {
            opcode: 'getType',
            blockType: 'reporter',
            text: '获得[n]的类型',
            arguments: {
              n: {
                type: 'string',
                defaultValue: '1'
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

    getType(args) {
      console.log(Cast.toString(args.n));
      console.log(typeof Cast.toString(args.n));
      return typeof(args.n);
    }

  }


  window.tempExt = {
    Extension: StrictEqualityExtension,
    info: {
      name: 'hcn.extensionName',
      description: 'hcn.description',
      extensionId: 'strictequalityexample',
      // iconURL: icon,
      // insetIconURL: cover,
      featured: true,
      disabled: false,
      collaborator: 'only for hcn test',
    },
    l10n: {
      'zh-cn': {
        'hcn.extensionName': 'hcn 的测试',
        'hcn.description': 'hcn 的测试',
      },
      en: {
        'hcn.extensionName': 'hcn test',
        'hcn.description': 'hcn test',
      },
    },
  }
  