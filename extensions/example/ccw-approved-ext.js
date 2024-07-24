import Cast from '../utils/cast.js'
// import cover from './assets/icon.svg'
// import icon from './assets/icon.svg'
class ArkosExtensions {
  constructor(runtime) {
    this.runtime = runtime
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'ArkosExt.extensionName': 'Arkosの拓展',
        'ArkosExt.stringEquality': '(区分大小写)[ONE]=[TWO]',
        'ArkosExt.directionFromAtoB': '点x1:[X1]y1:[Y1]朝向点x2:[X2]y2:[Y2]的方向',
        'ArkosExt.differenceBetweenDirections': '由方向1[a]到方向2[b]的角度差',
        'ArkosExt.distance': '点x1:[X1]y1:[Y1]到点x2:[X2]y2:[Y2]的距离',
        'ArkosExt.searchString': '在[str]中查找[substr]的位置(从位置[pos]开始找)',
        'ArkosExt.insertString': '在[str]的第[pos]个字符前插入[substr]',
        'ArkosExt.replaceString': '将[str]中的第[start]个到第[end]个字符,替换为[substr]',
      },

      en: {
        'ArkosExt.extensionName': "Arkos' Extensions",
        'ArkosExt.stringEquality': '(case sensitive)[ONE]=[TWO]',
        'ArkosExt.directionFromAtoB': 'direction from x1:[X1]y1:[Y1]to x2:[X2]y2:[Y2]',
        'ArkosExt.differenceBetweenDirections': 'direction[b] minus direction[a]',
        'ArkosExt.distance': 'distance between x1:[X1]y1:[Y1]and x2:[X2]y2:[Y2]',
        'ArkosExt.searchString': 'position of[substr]in[str],start from[pos]',
        'ArkosExt.insertString': 'insert[substr]at[pos]of[str]',
        'ArkosExt.replaceString': 'replace from[start]to[end]of[str],with[substr]',
      },
    })
  }

  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    })
  }

  getInfo() {
    return {
      id: 'hcnTest', // 拓展id
      name: this.formatMessage('ArkosExt.extensionName'), // 拓展名
      color1: '#FF8383',
      // menuIconURI: icon,
      // blockIconURI: icon,
      blocks: [
        {
          // 判断相等（区分大小写）
          opcode: 'strictlyEquals',
          blockType: 'Boolean',
          text: this.formatMessage('ArkosExt.stringEquality'),
          arguments: {
            ONE: {
              type: 'string',
              defaultValue: 'A',
            },
            TWO: {
              type: 'string',
              defaultValue: 'a',
            },
          },
        },
        {
          // 计算点A到点B的方向
          opcode: 'getDirFromAToB',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.directionFromAtoB'),
          arguments: {
            X1: {
              type: 'number',
              defaultValue: 0,
            },
            Y1: {
              type: 'number',
              defaultValue: 0,
            },
            X2: {
              type: 'number',
              defaultValue: 0,
            },
            Y2: {
              type: 'number',
              defaultValue: 0,
            },
          },
        },
        {
          // 计算角b-角a的角度差
          opcode: 'differenceBetweenDirections',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.differenceBetweenDirections'),
          arguments: {
            a: {
              type: 'number',
              defaultValue: 0,
            },
            b: {
              type: 'number',
              defaultValue: 0,
            },
          },
        },
        {
          // 两点距离
          opcode: 'disFromAToB',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.distance'),
          arguments: {
            X1: {
              type: 'number',
              defaultValue: 0,
            },
            Y1: {
              type: 'number',
              defaultValue: 0,
            },
            X2: {
              type: 'number',
              defaultValue: 0,
            },
            Y2: {
              type: 'number',
              defaultValue: 0,
            },
          },
        },
        {
          // 查找子字符串，从pos开始
          opcode: 'indexof',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.searchString'),
          arguments: {
            str: {
              type: 'string',
              defaultValue: 'banana',
            },
            substr: {
              type: 'string',
              defaultValue: 'na',
            },
            pos: {
              type: 'number',
              defaultValue: 1,
            },
          },
        },
        {
          // 在字符串中插入子字符串
          opcode: 'insertStr',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.insertString'),
          arguments: {
            str: {
              type: 'string',
              defaultValue: 'ac',
            },
            substr: {
              type: 'string',
              defaultValue: 'b',
            },
            pos: {
              type: 'number',
              defaultValue: 2,
            },
          },
        },
        {
          // 替换字符串中的从..到..的字符串
          opcode: 'replaceStr',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.replaceString'),
          arguments: {
            str: {
              type: 'string',
              defaultValue: 'ABCDEF',
            },
            substr: {
              type: 'string',
              defaultValue: 'XX',
            },
            start: {
              type: 'number',
              defaultValue: 3,
            },
            end: {
              type: 'number',
              defaultValue: 4,
            },
          },
        },
        {
          //朝..方向旋转..角度
          opcode: 'turnDegreesToDir',
          blockType: 'command',
          text: 'turn[degree]degrees toward direction[dir]',
          arguments: {
            degree: {
              type: 'number',
              defaultValue: 0,
            },
            dir: {
              type: 'angle',
              defaultValue: 0,
            },
          },
        },
      ],
    }
  }

  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO
  }

  numGreaterThen(args) {
    return args.ONE > args.TWO
  }

  getDirFromAToB(args) {
    const { X1, X2, Y1, Y2 } = args
    let a = (Math.atan((X2 - X1) / (Y2 - Y1)) / Math.PI) * 180.0
    if (Y1 < Y2) return a
    if (Y1 > Y2) {
      a += 180
      if (a > 180.0) a -= 360.0
      return a
    }
    if (X2 > X1) return 90
    if (X2 < X1) return -90
    return NaN
  }

  differenceBetweenDirections(args) {
    const { a, b } = args
    let dif = (b - a) % 360
    if (dif > 180) dif -= 360
    return dif
  }

  disFromAToB(args) {
    const { X1, X2, Y1, Y2 } = args
    return Math.sqrt((X1 - X2) * (X1 - X2) + (Y1 - Y2) * (Y1 - Y2))
  }

  indexof(args) {
    const str = Cast.toString(args.str)
    const substr = Cast.toString(args.substr)
    const a = str.indexOf(substr, args.pos - 1)
    if (a === -1) {
      return ''
    }
    return a + 1
  }

  insertStr(args) {
    const str = Cast.toString(args.str)
    const substr = Cast.toString(args.substr)
    let pos = args.pos - 1
    if (pos < 0) {
      pos = 0
    }
    return str.slice(0, pos) + substr + str.slice(pos)
  }

  replaceStr(args) {
    const str = Cast.toString(args.str)
    const substr = Cast.toString(args.substr)
    let start = Cast.toNumber(args.start)
    let end = Cast.toNumber(args.end)
    if (start > end) {
      const t = end
      end = start
      start = t
    }
    if (start < 1) start = 1
    return str.slice(0, start - 1) + substr + str.slice(end)
  }

  turnDegreesToDir(args, util) {
    //
    // util.target.setDirection(util.target.direction + degrees);
    console.log('---util-------------\n', util)
    console.log('---args-------------\n', args)
    console.log('---runtime-------------\n', this.runtime)
  }
}



window.tempExt = {
    Extension: ArkosExtensions,
    info: {
      name: 'hcn.extensionName',
      description: 'hcn.description',
      extensionId: 'hcnTest',
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
