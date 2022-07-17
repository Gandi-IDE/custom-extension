import Cast from '../utils/cast.js'
// import cover from './assets/icon.svg'
// import icon from './assets/icon.svg'

console.log(Cast.toNumber('123'))
console.log(Cast.toNumber('aab'))
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
        'ArkosExt.turnDegreesToDir': '朝方向[dir]旋转[degree]度',
        'ArkosExt.getEffect': '获取特效[EFFECT]的值',
        'ArkosExt.color': '颜色',
        'ArkosExt.fisheye': '鱼眼',
        'ArkosExt.whirl': '旋涡',
        'ArkosExt.pixelate': '像素化',
        'ArkosExt.mosaic': '马赛克',
        'ArkosExt.brightness': '亮度',
        'ArkosExt.ghost': '虚像',
        'ArkosExt.ifVisible': '角色可见？',
        'ArkosExt.getRotationStyle': '当前旋转方式',
        'ArkosExt.getWidthOrHeight': '获取当前造型的[t]',
        'ArkosExt.setSize': '强行将大小设为[size]',
        'ArkosExt.width': '长',
        'ArkosExt.height': '宽',
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
        'ArkosExt.turnDegreesToDir': 'turn[degree] degrees toward direction[dir]',
        'ArkosExt.getEffect': 'effect[EFFECT]',
        'ArkosExt.color': 'color',
        'ArkosExt.fisheye': 'fisheye',
        'ArkosExt.whirl': 'whirl',
        'ArkosExt.pixelate': 'pixelate',
        'ArkosExt.mosaic': 'mosaic',
        'ArkosExt.brightness': 'brightness',
        'ArkosExt.ghost': 'ghost',
        'ArkosExt.ifVisible': 'visible?',
        'ArkosExt.getRotationStyle': 'rotation style',
        'ArkosExt.getWidthOrHeight': 'get [t] of the current costume',
        'ArkosExt.setSize': 'Force the size to [size] %',
        'ArkosExt.width': 'width',
        'ArkosExt.height': 'height',
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
          text: this.formatMessage('ArkosExt.turnDegreesToDir'),
          arguments: {
            degree: {
              type: 'number',
              defaultValue: 45,
            },
            dir: {
              type: 'angle',
              defaultValue: 10,
            },
          },
        },
        {
          //获取特效值
          opcode: 'getEffect',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.getEffect'),
          arguments: {
            EFFECT: {
              type: 'string',
              menu: 'effectMenu',
            },
          },
        },
        {
          //是否隐藏
          opcode: 'ifVisible',
          blockType: 'Boolean',
          text: this.formatMessage('ArkosExt.ifVisible'),
        },
        {
          //获取旋转方式
          opcode: 'getRotationStyle',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.getRotationStyle'),
        },
        {
          //获取造型长宽
          opcode: 'getWidthOrHeight',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.getWidthOrHeight'),
          arguments: {
            t: {
              type: 'string',
              menu: 'WOrH',
            },
          },
        },
        {
          //强行设置大小
          opcode: 'setSize',
          blockType: 'reporter',
          text: this.formatMessage('ArkosExt.setSize'),
          arguments: {
            size: {
              type: 'number',
              defaultValue: 500,
            },
          },
        },
      ],
      menus: {
        //长0宽1 菜单
        WOrH: [
          {
            text: this.formatMessage('ArkosExt.width'),
            value: '0'
          },
          {
            text: this.formatMessage('ArkosExt.height'),
            value: '1'
          },
        ],
        //特效菜单
        effectMenu: [
          {
            text: this.formatMessage('ArkosExt.color'),
            value: 'color'
          },
          {
            text: this.formatMessage('ArkosExt.fisheye'),
            value: 'fisheye'
          },
          {
            text: this.formatMessage('ArkosExt.whirl'),
            value: 'whirl'
          },
          {
            text: this.formatMessage('ArkosExt.pixelate'),
            value: 'pixelate'
          },
          {
            text: this.formatMessage('ArkosExt.mosaic'),
            value: 'mosaic'
          },
          {
            text: this.formatMessage('ArkosExt.brightness'),
            value: 'brightness'
          },
          {
            text: this.formatMessage('ArkosExt.ghost'),
            value: 'ghost'
          }
        ]
      },
    }
  }

  strictlyEquals(args) {
    // 实际上在这里直接使用严格相等是不太明智的，因为有一定的可能会遇到数字和字符比较，
    // 而在Scratch中数字和字符在表现完全一样的时候几乎没有区别。
    // 因此包上Cast.toString()以使得数字和字符能够正常比较（类似 9 = "9" )
    return Cast.toString(args.ONE) === Cast.toString(args.TWO)
  }

  getDirFromAToB(args) {
    // 一定要先转化为数字；
    const X1 = Cast.toNumber(args.X1)
    const X2 = Cast.toNumber(args.X2)
    const Y1 = Cast.toNumber(args.Y1)
    const Y2 = Cast.toNumber(args.Y2)

    // 这里利用atan函数的性质atan(+inf)=90,atan(-inf)=-90,atan(NaN)=NaN可以省很多代码
    let a = Math.atan((X2 - X1) / (Y2 - Y1)) / Math.PI * 180 + (Y1 > Y2 ? 180 : 0)
    if (a > 180) a -= 360
    return a;
  }

  differenceBetweenDirections(args) {
    const a = Cast.toNumber(args.a)
    const b = Cast.toNumber(args.b)
    let dif = b - a
    dif -= Math.round(dif / 360) * 360
    if (dif === -180) dif = 180
    return dif
  }

  disFromAToB(args) {
    const X1 = Cast.toNumber(args.X1)
    const X2 = Cast.toNumber(args.X2)
    const Y1 = Cast.toNumber(args.Y1)
    const Y2 = Cast.toNumber(args.Y2)
    return Math.sqrt((X1 - X2) * (X1 - X2) + (Y1 - Y2) * (Y1 - Y2))
  }

  indexof(args) {
    const str = Cast.toString(args.str)
    const substr = Cast.toString(args.substr)
    const a = str.indexOf(substr, Cast.toNumber(args.pos) - 1)
    if (a === -1) {
      // Scratch列表中也有查询积木，其中找不到返回的是0。建议维持原有的风格。
      return 0
    }
    return a + 1
  }

  insertStr(args) {
    const str = Cast.toString(args.str)
    const substr = Cast.toString(args.substr)
    let pos = Cast.toNumber(args.pos) - 1
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
    const degree = Cast.toNumber(args.degree);
    const dir = Cast.toNumber(args.dir);
    const dif = this.differenceBetweenDirections({a: util.target.direction, b: dir});
    if(Math.abs(dif) < degree) 
      util.target.setDirection(dir);
    else if(dif < 0)
      util.target.setDirection(util.target.direction - degree);
    else
      util.target.setDirection(util.target.direction + degree);
  }

  //获取特效的数值
  getEffect (args, util) {
    let effect = Cast.toString(args.EFFECT).toLowerCase();
    if (!util.target.effects.hasOwnProperty(effect)) return 0;
    effect = util.target.effects[effect]
    return effect;
  }

  //角色是否可见
  ifVisible (args, util) {
    return  util.target.visible;
  }

  //获取图层(逝一逝)
  // getLayer (args, util) {
  //   return util.target.layer;
  // }

  //获取当前角色的旋转方式
  getRotationStyle (args, util) {
    let t = util.target.rotationStyle
    return t;
  }

  //获取当前造型的长/宽
  getWidthOrHeight (args, util) {
    const costumeSize = util.target.renderer.getCurrentSkinSize(this.drawableID);
    return costumeSize[args.t];
  }

  //强行设置大小(逝一逝)
  setSize (args, util) {
    if (util.target.isStage) {
        return;
    }
    if (util.target.renderer) {
        args.size = Cast.toNumber(args.size);
        if(args.size < 0.1) args.size = 0.1;
        util.target.size = args.size;
        const {direction, scale} = util.target._getRenderedDirectionAndScale();
        util.target.renderer.updateDrawableDirectionScale(util.target.drawableID, direction, scale);
        if (util.target.visible) {
            util.target.emit(RenderedTarget.EVENT_TARGET_VISUAL_CHANGE, util.target);
            util.target.runtime.requestRedraw();
        }
    }
    util.target.runtime.requestTargetsUpdate(util.target);
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
