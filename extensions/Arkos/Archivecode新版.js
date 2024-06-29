import Cast from '../utils/cast.js'
//import cover from './assets/cover2.png'
//import icon from './assets/icon2.svg'

//合作者：
//  Nights: 搭了框架，以及一些技术帮助
//  -6: 修复了许多纰漏和 bug ，加入了新的加密算法
//  Arkos: 什么都不会的屑蒟蒻 
// console.log(Cast.toNumber('123'))
//console.log(Cast.toNumber('aab'))

let LZString = _LZString();

class Archive_code {
  constructor(runtime) {
    this.runtime = runtime
    this.convertedSuccessfully = false   //JSON转容器是否成功
    //content为一个大容器，内部存很多小容器
    this.content = {
      "1":{
        金币: 200,
        背包: ["木头", 233]
      },
      "2":{
        Arkos:{score:95},
        yk1boy:{score:100}
      }
    }

    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'ArchiveCodeExt.extensionName': '存档码',
        'ArchiveCodeExt.info1': '🏺 容器操作',
        'ArchiveCodeExt.info2': '🔧 JSON处理',
        'ArchiveCodeExt.info3': '💡 附加积木',
        'ArchiveCodeExt.clearContainer': '清空容器[con]',
        'ArchiveCodeExt.addContentToContainer': '将内容[value]命名为[name]加入容器[con](已有则覆盖)',
        'ArchiveCodeExt.addVariableToContainer': '将变量[var]内容命名为[name]加入容器[con](已有则覆盖)',
        'ArchiveCodeExt.addListToContainer': '将列表[list]内容命名为[name]加入容器[con](已有则覆盖)',
        //'ArchiveCodeExt.stop': '序列化结束',
        'ArchiveCodeExt.containerToJSON': '容器[con]内容对应字符串',
        'ArchiveCodeExt.parseJSONToContainer': '读取字符串到容器[con]：[code]',
        'ArchiveCodeExt.getContent': '容器[con]中名称为[key]的内容',
        //'ArchiveCodeExt.showContent2json':'读取结果',
        'ArchiveCodeExt.saveContentToVar': '将容器[con]中名称为[key]的内容保存到变量[var]',
        'ArchiveCodeExt.saveContentToList': '将容器[con]中名称为[key]的内容保存到列表[list]',
        'ArchiveCodeExt.ifConvertedSuccessfully': '读取成功？',
        'ArchiveCodeExt.getAmount': '容器[con]中内容的总数',
        'ArchiveCodeExt.ifExist': '容器[con]是否存在名为[key]的内容',
        'ArchiveCodeExt.getContentByNumber': '获取容器[con]中第[index]个内容的[type]',
        'ArchiveCodeExt.encrypt': '以[method]加密[str],密匙[key]',
        'ArchiveCodeExt.decrypt': '以[method]解密[str],密匙[key]',
        'ArchiveCodeExt.writeClipboard': '复制[str]到剪贴板',
        'ArchiveCodeExt.getLengthOfList': '容器[con]中名称为[key]的列表的长度',
        'ArchiveCodeExt.getContentOfList': '容器[con]中名称为[key]的列表的第[n]项',
        'ArchiveCodeExt.getUnicode': '字符[c]的Unicode',
        'ArchiveCodeExt.getCharByUnicode': 'Unicode[code]对应字符',
        'ArchiveCodeExt.methodMenu.1': 'Arkos加密法',
        'ArchiveCodeExt.methodMenu.2': '分裂加密法',
        'ArchiveCodeExt.methodMenu.3': 'LZString压缩',
        'ArchiveCodeExt.infoMenu.1': '名称',
        'ArchiveCodeExt.infoMenu.2': '内容',
        'ArchiveCodeExt.infoMenu.3': '类型',
        'ArchiveCodeExt.infoMenu.4': '列表长度',
        'ArchiveCodeExt.delete': '删除容器[con]中名为[key]的内容',
        'ArchiveCodeExt.getContentInContainer': '获得容器[container]中名为[key]的内容',
      },

      en: {
        'ArchiveCodeExt.extensionName': 'Archive Code',
        'ArchiveCodeExt.clearContainer': 'empty container[con]',
        'ArchiveCodeExt.addContentToContainer': 'add content[value] to container[con], name as[name]',
        'ArchiveCodeExt.addVariableToContainer': 'add variable[var] to container[con], name as[name]',
        'ArchiveCodeExt.addListToContainer': 'add list[list] to container[con], name as[name]',
        //'ArchiveCodeExt.stop': 'end serialization',
        'ArchiveCodeExt.containerToJSON': 'container[con] in string form',
        'ArchiveCodeExt.parseJSONToContainer': 'parse string[code] to container[con]',
        'ArchiveCodeExt.getContent': 'content of[key]',
        'ArchiveCodeExt.saveContentToVar': 'save[key]in container[con]to variable[var]',
        'ArchiveCodeExt.saveContentToList': 'save[key]in container[con]to list[list]',
        'ArchiveCodeExt.ifConvertedSuccessfully': 'parse successfullly?',
        'ArchiveCodeExt.getAmount': 'the amount of contents in container[con]',
        'ArchiveCodeExt.ifExist': 'container[con] contains[key]?',
        'ArchiveCodeExt.getContentByNumber': 'get [type]of #[index]content in container[con]',
        'ArchiveCodeExt.encrypt': 'use[method]to encrypt[str]with key[key]',
        'ArchiveCodeExt.decrypt': 'use[method]to decrypt[str]with key[key]',
        'ArchiveCodeExt.writeClipboard': 'copy[str]to clipboard',
        'ArchiveCodeExt.getContentOfList': '#[n] of list[key]in container[con]',
        'ArchiveCodeExt.getLengthOfList': 'length of list[key]in container[con]',
        'ArchiveCodeExt.getUnicode': 'get Unicode of[c]',
        'ArchiveCodeExt.getCharByUnicode': ' character of Unicode[code]',
        'ArchiveCodeExt.methodMenu.1': 'Arkos cipher',
        'ArchiveCodeExt.methodMenu.2': 'mitotic encryption',
        'ArchiveCodeExt.methodMenu.3': 'LZString',
        'ArchiveCodeExt.infoMenu.1': 'name',
        'ArchiveCodeExt.infoMenu.2': 'value',
        'ArchiveCodeExt.infoMenu.3': 'type',
        'ArchiveCodeExt.infoMenu.4': 'lenth of list',
        'ArchiveCodeExt.delete': 'delete content[key] in container[con]',
        'ArchiveCodeExt.getContentIncontainer': 'get [key] in [container]',
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
      id: 'Archivecode',  //  Archivecode
      name: this.formatMessage('ArchiveCodeExt.extensionName'),
      color1: '#2FBC95',
      // menuIconURI: cover,
      // blockIconURI: icon,
      blocks: [
        "---" + this.formatMessage("ArchiveCodeExt.info1"),  //🏺容器操作
        {
          //清空容器
          opcode: 'clearContainer',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.clearContainer'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
          }
        },
        {
          //将内容加入容器 名称xx 值xx
          opcode: 'addContentToContainer',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.addContentToContainer'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
            name: {
              type: 'string',
              defaultValue: '用户id'
            },
            value: {
              type: 'string',
              defaultValue: '114514',
            }
          }
        },
        {
          //将变量加入序列
          opcode: 'addVariableToContainer',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.addVariableToContainer'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
            name: {
              type: 'string',
              defaultValue: '金币'
            },
            var: {
              type: 'string',
              menu: 'varMenu'
            }
          }
        },
        {
          //将列表加入序列
          opcode: 'addListToContainer',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.addListToContainer'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
            name: {
              type: 'string',
              defaultValue: '背包'
            },
            list: {
              type: 'string',
              menu: 'listMenu'
            }
          }
        },
        // {
        //   //序列化结束
        //   opcode: 'stop',
        //   blockType: 'command',
        //   text: this.formatMessage('ArchiveCodeExt.stop'),
        // },
        {
          //返回序列化结果
          opcode: 'containerToJSON',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.containerToJSON'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
          }
        },


        {
          //反序列化
          opcode: 'parseJSONToContainer',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.parseJSONToContainer'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
            code: {
              type: 'string',
              defaultValue: `{"金币":200,"背包":["木头","面包"]}`
            }
          }
        },
        {
          //反序列化是否成功
          opcode: 'ifConvertedSuccessfully',
          blockType: 'Boolean',
          text: this.formatMessage('ArchiveCodeExt.ifConvertedSuccessfully'),
        },
        {
          //返回容器中数据数量
          opcode: 'getAmount',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.getAmount'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
          }
        },
        {
          //获取第n(从1开始)个内容，的(1名称2内容3类型4列表长度)
          opcode: 'getContentByNumber',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.getContentByNumber'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
            index: {
              type: 'number',
              //menu: 'varMenu2',
              defaultValue: '1'
            },
            type: {
              type: 'number',
              menu: 'infoMenu',
            }
          }
        },
        // {
        //   //返回反序列化结果
        //   opcode: 'showContent2json',
        //   blockType: 'reporter',
        //   text: this.formatMessage('ArchiveCodeExt.showContent2json'),
        // },
        {
          //返回名称为..的内容
          opcode: 'ifExist',
          blockType: 'Boolean',
          text: this.formatMessage('ArchiveCodeExt.ifExist'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
            key: {
              type: 'string',
              //menu: 'varMenu2',
              defaultValue: '金币'
            }
          }
        },
        {
          //返回名称为..的内容
          opcode: 'getContent',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.getContent'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
            key: {
              type: 'string',
              //menu: 'varMenu2',
              defaultValue: '金币'
            }
          }
        },
        {
          //返回名称为..的列表的第n项
          opcode: 'getLengthOfList',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.getLengthOfList'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
            key: {
              type: 'string',
              //menu: 'varMenu2',
              defaultValue: '背包'
            },
          }
        },
        {
          //返回名称为..的列表的第n项
          opcode: 'getContentOfList',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.getContentOfList'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
            key: {
              type: 'string',
              //menu: 'varMenu2',
              defaultValue: '背包'
            },
            n: {
              type: 'number',
              //menu: 'varMenu2',
              defaultValue: '1'
            }
          }
        },
        {
          //将内容保存到变量
          opcode: 'saveContentToVar',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.saveContentToVar'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
            key: {
              type: 'string',
              //menu: 'varMenu2',
              defaultValue: '金币'
            },
            var: {
              type: 'string',
              menu: 'varMenu'
            }
          }
        },
        {
          //将内容保存到列表
          opcode: 'saveContentToList',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.saveContentToList'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
            key: {
              type: 'string',
              //menu: 'listMenu2',
              defaultValue: '背包'
            },
            list: {
              type: 'string',
              menu: 'listMenu'
            }
          }
        },
        {
          //删除内容
          opcode: 'delete',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.delete'),
          arguments: {
            con: {
              type: 'string',
              defaultValue: '1',
              menu: 'containerMenu'
            },
            key: {
              type: 'string',
              defaultValue: '金币'
            },
          }
        },
        "---" + this.formatMessage("ArchiveCodeExt.info2"),  //🔧 JSON处理
        {
          //直接获得container容器中的key内容
          opcode: 'getContentInContainer',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.getContentInContainer'),
          arguments: {
            container: {
              type: 'string',
              defaultValue: '{"金币":100,"经验值":50}'
            },
            key: {
              type: 'string',
              defaultValue: '金币'
            },
          }
        },
        "---" + this.formatMessage("ArchiveCodeExt.info3"),  //💡 附加积木
        {
          //加密
          opcode: 'encrypt',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.encrypt'),
          arguments: {
            str: {
              type: 'string',
              defaultValue: '我好帅114514'
            },
            key: {
              type: 'string',
              defaultValue: 'Arkos'
            },
            method: {
              type: 'string',
              menu: 'methodMenu'
            },
          }
        },
        {
          //解密
          opcode: 'decrypt',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.decrypt'),
          arguments: {
            str: {
              type: 'string',
              defaultValue: '搧宊怑ȼȻɋɉɌɈ'
            },
            key: {
              type: 'string',
              defaultValue: 'Arkos'
            },
            method: {
              type: 'string',
              menu: 'methodMenu'
            },
          }
        },
        {
          //复制到剪切板
          opcode: 'writeClipboard',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.writeClipboard'),
          arguments: {
            str: {
              type: 'string',
              defaultValue: '要复制的东西'
            }
          }
        },
        {
          //获取字符unicode
          opcode: 'getUnicode',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.getUnicode'),
          arguments: {
            c: {
              type: 'string',
              defaultValue: 'A'
            }
          }
        },
        {
          //由unicode得到字符
          opcode: 'getCharByUnicode',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.getCharByUnicode'),
          arguments: {
            code: {
              type: 'string',
              defaultValue: '65'
            }
          }
        },
      ],
      menus: {
        containerMenu: {
          items: 'findAllContainer',
          acceptReporters: true,
        },
        varMenu: {
          items: 'findAllVar'
        },
        listMenu: {
          items: 'findAllList'
        },
        varMenu2: {
          //解析后得到的列表
          items: 'findAllVarContents'
        },
        listMenu2: {
          items: 'findAllListsContents'
        },
        methodMenu: [
          {
            text: this.formatMessage('ArchiveCodeExt.methodMenu.1'),
            value: '1'
          },
          // {
          //   text: this.formatMessage('ArchiveCodeExt.methodMenu.2'),
          //   value: '2'
          // },
          {
            text: this.formatMessage('ArchiveCodeExt.methodMenu.3'),
            value: '3'
          },
        ],
        infoMenu: [{
            text: this.formatMessage('ArchiveCodeExt.infoMenu.1'),
            value: '1'
          },
          {
            text: this.formatMessage('ArchiveCodeExt.infoMenu.2'),
            value: '2'
          },
          {
            text: this.formatMessage('ArchiveCodeExt.infoMenu.3'),
            value: '3'
          },
          {
            text: this.formatMessage('ArchiveCodeExt.infoMenu.4'),
            value: '4'
          },
        ]
      },
    };
  }

  findAllContainer() {
    const list = [];
    let temp = this.content;
    Object.keys(temp).forEach(obj => {
      //if ( Array.isArray (temp[obj]) ) {
        list.push(obj);
      //}
    });
    if (list.length === 0) {
      list.push({
        text: '-',
        value: 'empty',
      });
    }
    return list;
  }

  _createContainerIfNotExist(con){
    if(!(con in this.content))
      this.content[con]={};
  }

  clearContainer(args) {
    this._createContainerIfNotExist(args.con)
    this.content[args.con] = {};
  }

  containerToJSON(args) {
    if(!(args.con in this.content)) return '';
    return JSON.stringify(this.content[args.con]);
  }

  addContentToContainer(args) {
    if(!(args.con in this.content)) return;
    this.content[args.con][args.name] = args.value;
  }

  addVariableToContainer(args, util) {
    if(!(args.con in this.content)) return;
    if (args.var !== 'empty') {
      const variable = util.target.lookupVariableById(args.var);
      this.content[args.con][args.name] = variable.value;
    }
  }

  addListToContainer(args, util) {
    if(!(args.con in this.content)) return;
    if (args.list !== 'empty') {
      const list = util.target.lookupVariableById(args.list);
      this.content[args.con][args.name] = list.value;
    }
  }
  
  //直接获得{container}中的key内容
  getContentInContainer(args) {
    let content;
    try {
      content = JSON.parse(Cast.toString(args.container))
      if(typeof(content) === 'object' && !Array.isArray(content) && content !== null) {
        return this._anythingToNumberString(content[args.key]);
      }else{
        return ''
      }
    } catch (e) {
      return ''
    }
  }

  parseJSONToContainer(args) {
    this._createContainerIfNotExist(args.con)
    let content;
    this.convertedSuccessfully = false;
    try {
      // 如果解析失败，不要修改content。
      content = JSON.parse(Cast.toString(args.code))
      // 考虑数组[]情况。
      if(typeof(content) === 'object' && !Array.isArray(content) && content !== null) {
        this.content[args.con] = content;
        this.convertedSuccessfully = true;
      }
    } catch (e) {
      //this.content2 = {}
    }
    //console.log(typeof this.content)
  }

  ifConvertedSuccessfully() {
    return this.convertedSuccessfully
  }

  ifExist(args) {
    if(!(args.con in this.content)) return false;
    return Cast.toString(args.key) in this.content[args.con];
  }

  getAmount(args) {
    if(!(args.con in this.content)) return '';
    return Object.keys(this.content[args.con]).length;
  }

  getContentByNumber(args) {
    if(!(args.con in this.content)) return '';
    let key = Object.keys(this.content[args.con])[args.index - 1]
    if (key === undefined) return '';
    let value = this.content[args.con][key]
    switch (args.type) {
      case '1'://名称
        return key;
      case '2'://内容
        return this._anythingToNumberString(value);
      case '3'://类型
        switch(typeof value){
          case "object":
            // 本地化问题：返回的值是中文
            // 这一点可以统一用英文或者符号或者做成判断<名字为(abc)的数值是列表?>
            // 或者符号化
            // 列表 容器 变量 没有
            // List Container Variable Unset
            // []   {}   ""   undefined
            return Array.isArray(value) ? '列表' : '容器';
          case "string":
          case "number":
          case "boolean":
            return '变量';
          default:
            return '';
        }
      case '4'://列表长度
        return Array.isArray(value) ? value.length : '';
      default:
        return '';
    }

  }

  getContent(args) {
    if(!(args.con in this.content)) return '';
    return this._anythingToNumberString(this.content[args.con][args.key]);
  }

  getUnicode(args) {
    return Cast.toString(args.c).charCodeAt(0)
  }

  getCharByUnicode(args) {
    return String.fromCharCode(Cast.toNumber(args.code))
  }

  getContentOfList(args) {
    if(!(args.con in this.content)) return '';
    let t = this.content[args.con][args.key]
    if (Array.isArray(t)) {
      let i = Cast.toNumber(args.n) - 1;
      if (i < 0 || i >= t.length) {
        return '';
      }
      return t[i];
    } else {
      return '';
    }
  }

  getLengthOfList(args, util) {
    if(!(args.con in this.content)) return '';
    let t = this.content[args.con][args.key]
    return Array.isArray(t) ? t.length : '';
  }

  _anythingToNumberString(value) {
    switch(typeof(value)){
      case "string":
      case "number":
        break;
      case "object":
        if(Array.isArray(value)) {
          value = JSON.stringify(value); //列表直接用 JSON 格式显示
          // 在原版scratch中如果直接使用列表作为变量，得到的结果是由空格分隔的。如果列表中每一项都是单个字符(数字不算)，则结果不用空格分割。这里还原原版行为。
          // 如果直接String()的话，项目会默认用逗号分割。
          // let areChars = true;
          // value.forEach((v, i) => {
          //   if (!(typeof v === "string" && v.length === 1)) {
          //     areChars = false;
          //   }
          // });
          // value = value.join(areChars ? '' : ' ');
        } else {
          // 否则，就直接stringify
          value = JSON.stringify(value);
        }
        break;
      default:
        value = ''; //包含了undefined
    }
    return value;
  }

  saveContentToVar(args, util) {
    if(!(args.con in this.content)) return;
    if (args.var !== 'empty') {
      const variable = util.target.lookupVariableById(args.var);
      let value = this._anythingToNumberString(this.content[args.con][args.key]);
      variable.value = value;
    }
  }

  saveContentToList(args, util) {
    if(!(args.con in this.content)) return;
    if (args.list !== 'empty') {
      const list = util.target.lookupVariableById(args.list);
      if (!(args.key in this.content[args.con])) {
        // 如果啥都没有就清空
        list.value = [];
        return;
      }
      let value = this.content[args.con][args.key];
      if (!Array.isArray(value)) {
        //如果要读取的内容不是列表而是什么奇奇怪怪的东西，就把它包装成列表
        value = [value];
      }
      value.forEach((v, i) => {
        // 防止数组内容混入奇奇怪怪的东西
        value[i] = this._anythingToNumberString(v);
      });
      list.value = value;
    }
  }

  delete(args) {
    if(!(args.con in this.content)) return;
    delete this.content[args.con][args.key];
  }

  //将密匙转换为一个值
  keyVar(k) {
    k = Cast.toString(k)
    let t = 13;
    for (let i = 0; i < k.length; i++) {
      t += k.charCodeAt(i)
      t %= 65536
    }
    return t
  }

  //加密
  encrypt(args) {
    args.key = Cast.toString(args.key)
    args.str = Cast.toString(args.str)
    switch (args.method) {
      case '1':
        return this.ArkosEncrypt(args);
      case '2':
        return this.encrypt2(args);
      case '3':
        return LZString.scompress(args.str, args.key);
      default:
        return '';
    }
  }

  //解密
  decrypt(args) {
    args.key = Cast.toString(args.key)
    args.str = Cast.toString(args.str)
    switch (args.method) {
      case '1':
        return this.ArkosDecrypt(args);
      case '2':
        return this.decrypt2(args);
      case '3':
        return LZString.sdecompress(args.str, args.key);
      default:
        return '';
    }
  }

  //发现 Unicode 为 0  10  13  55296~57343(2047个字符) 的字符无法被正常复制，故排除掉这些字符。
  getCode(c) {
    c = Cast.toString(c).charCodeAt(0)
    if (c === 0) return NaN
    else if (c < 10) return c-1  //排除0
    else if (c < 13) return c-2  //排除0 10
    else if (c < 55296) return c-3  //排除0 10 13
    else if (c > 55296) return c-2050  //排除0 10 13 55296~57343(2047个字符)
    else return NaN
  }

  //Arkos加密法
  ArkosEncrypt(args) {
    args.key = this.keyVar(args.key)
    args.str = Cast.toString(args.str)
    let b = ''
    for (let i = 0; i < args.str.length; i++) {
      b += this.enChar1(args.str[i], args.key + i)
    }
    return b
  }


  //Arkos解密
  ArkosDecrypt(args) {
    args.key = this.keyVar(args.key)
    args.str = Cast.toString(args.str)
    let b = ''
    for (let i = 0; i < args.str.length; i++) {
      b += this.deChar1(args.str[i], args.key + i)
    }
    //console.log('123')
    return b
  }

  enChar1(c, p) {
    // 目前我知道的unicode字符最大编码是131071
    let t = (c.charCodeAt(0) + p) % 54533  //
    t += 9 - 2 * (t % 10)

    return String.fromCharCode(t)
  }


  deChar1(c, p) {
    let t = c.charCodeAt(0)
    t += 9 - 2 * (t % 10)
    t = (t - p + 54533) % 54533
    return String.fromCharCode(t)
  }


  //分裂加密法
  encrypt2(args) {
    args.key = this.keyVar(args.key)
    args.str = String(args.str)
    let b = ''
    for (let i = 0; i < args.str.length; i++) {
      b += this.enChar2(args.str[i], args.key + i)
    }
    return b
  }

  //分裂解密
  decrypt2(args) {
    args.key = this.keyVar(args.key)
    args.str = String(args.str)
    let b = ''
    for (let i = 0; i < args.str.length; i += 2) {
      b += this.deChar2(args.str[i], (i + 2 > args.str.length) ? '\0' : args.str[i + 1], args.key + i / 2)
    }
    //console.log('123')
    return b
  }

  enChar2(c, p) {
    let t = (c.charCodeAt(0) + p) % 65536
    t = t - t % 10 + (9 - t % 10)

    let c1 = String.fromCharCode(t >> 8)
    let c2 = String.fromCharCode(t % 256)
    return c1 + c2
  }

  deChar2(c1, c2, p) {
    let t = c1.charCodeAt(0) * 256 + c2.charCodeAt(0)
    t %= 65536
    t = t - t % 10 + (9 - t % 10)
    t = (t - p + 65536) % 65536
    return String.fromCharCode(t)
  }

  writeClipboard(args) {
    // 错误处理...
    if("navigator" in window && "clipboard" in navigator && "writeText" in navigator.clipboard) {
      navigator.clipboard.writeText(Cast.toString(args.str)).catch(x => writeClipboard2(args));
    } else {
      writeClipboard2(args);
    }
  }

  writeClipboard2(args) {
    prompt("无法访问剪贴板，请选择在下方文字点击右键或按 Ctrl+C 复制。", Cast.toString(args.str));
  }

  compare(propName) {
    return (a, b) => {
      a = a[propName]
      b = b[propName]
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    }
  }

  findAllVar() {
    const list = [];
    let temp;
    try {
      temp = this.runtime._stageTarget.variables
      Object.keys(temp).forEach(obj => {
        if (temp[obj].type === '') {
          list.push({
            text: temp[obj].name,
            value: temp[obj].id,
          });
        }
      });
      if (!this.runtime._editingTarget.isStage) {
        temp = this.runtime._editingTarget.variables
        Object.keys(temp).forEach(obj => {
          if (temp[obj].type === '') {
            list.push({
              text: '[私有变量]' + temp[obj].name,
              value: temp[obj].id,
            });
          }
        });
      }
    } catch (e) {
    }
    if (list.length === 0) {
      list.push({
        text: `-`,
        value: 'empty',
      });
    }
    // Object.keys(this.runtime._editingTarget.variables).forEach(key => {
    //   list.forEach((obj) => {
    //     if (obj.value === key) {
    //       obj.text = `*${obj.text}`;
    //     }
    //   });
    // });
    list.sort(this.compare("text"));
    return list;
  }

  findAllList() {
    const list = [];
    let temp;
    try {
      temp = this.runtime._stageTarget.variables
      Object.keys(temp).forEach(obj => {
        if (temp[obj].type === 'list') {
          list.push({
            text: temp[obj].name,
            value: temp[obj].id,
          });
        }
      });
      if (!this.runtime._editingTarget.isStage) {
        temp = this.runtime._editingTarget.variables
        Object.keys(temp).forEach(obj => {
          if (temp[obj].type === 'list') {
            list.push({
              text: '[私有列表]' + temp[obj].name,
              value: temp[obj].id,
            });
          }
        });
      }
    } catch (e) {
    }
    if (list.length === 0) {
      list.push({
        text: `-`,
        value: 'empty',
      });
    }
    list.sort(this.compare("text"));
    return list;
  }

  findAllVarContents() {
    const list = [];
    let temp = this.content
    Object.keys(temp).forEach(obj => {
      if (typeof temp[obj] !== 'object') {
        list.push({
          text: obj,
          value: obj,
        });
      }
    });
    if (list.length === 0) {
      list.push({
        text: '-',
        value: 'empty',
      });
    }
    list.sort(this.compare("text"));
    return list;
  }

  findAllListsContents() {
    const list = [];
    let temp = this.content
    Object.keys(temp).forEach(obj => {
      if (typeof temp[obj] === 'object') {
        list.push({
          text: obj,
          value: obj,
        });
      }
    });
    if (list.length === 0) {
      list.push({
        text: '-',
        value: 'empty',
      });
    }
    list.sort(this.compare("text"));
    return list;
  }


}


// - lz-strings.js (modified) -

// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
function _LZString() {

  // private property
  var f = String.fromCharCode;

  var LZString = {
    scompress: function(uncompressed, key) {
      if (key.length !== 0)
        key = this.scompress(key, "");
      return this._compress(uncompressed, 14, function(x, i) {
        if (key.length !== 0)
          x ^= (key.charCodeAt(i % key.length) * (i + 1)) & ((1 << 14) - 1);
        return f(x + 0x4E00);
      });
    },

    _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
      if (uncompressed == null) return "";
      var i, value,
        context_dictionary = {},
        context_dictionaryToCreate = {},
        context_c = "",
        context_wc = "",
        context_w = "",
        context_enlargeIn = 2, // Compensate for the first entry which should not count
        context_dictSize = 3,
        context_numBits = 2,
        context_data = [],
        context_data_val = 0,
        context_data_position = 0,
        ii;

      for (ii = 0; ii < uncompressed.length; ii += 1) {
        context_c = uncompressed.charAt(ii);
        if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
          context_dictionary[context_c] = context_dictSize++;
          context_dictionaryToCreate[context_c] = true;
        }

        context_wc = context_w + context_c;
        if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
          context_w = context_wc;
        } else {
          if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
            if (context_w.charCodeAt(0) < 256) {
              for (i = 0; i < context_numBits; i++) {
                context_data_val = (context_data_val << 1);
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val, context_data.length));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
              }
              value = context_w.charCodeAt(0);
              for (i = 0; i < 8; i++) {
                context_data_val = (context_data_val << 1) | (value & 1);
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val, context_data.length));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            } else {
              value = 1;
              for (i = 0; i < context_numBits; i++) {
                context_data_val = (context_data_val << 1) | value;
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val, context_data.length));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = 0;
              }
              value = context_w.charCodeAt(0);
              for (i = 0; i < 16; i++) {
                context_data_val = (context_data_val << 1) | (value & 1);
                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val, context_data.length));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
                value = value >> 1;
              }
            }
            context_enlargeIn--;
            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }
            delete context_dictionaryToCreate[context_w];
          } else {
            value = context_dictionary[context_w];
            for (i = 0; i < context_numBits; i++) {
              context_data_val = (context_data_val << 1) | (value & 1);
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val, context_data.length));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }


          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          // Add wc to the dictionary.
          context_dictionary[context_wc] = context_dictSize++;
          context_w = String(context_c);
        }
      }

      // Output the code for w.
      if (context_w !== "") {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
          if (context_w.charCodeAt(0) < 256) {
            for (i = 0; i < context_numBits; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val, context_data.length));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i = 0; i < 8; i++) {
              context_data_val = (context_data_val << 1) | (value & 1);
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val, context_data.length));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i = 0; i < context_numBits; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val, context_data.length));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i = 0; i < 16; i++) {
              context_data_val = (context_data_val << 1) | (value & 1);
              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val, context_data.length));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i = 0; i < context_numBits; i++) {
            context_data_val = (context_data_val << 1) | (value & 1);
            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val, context_data.length));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
      }

      // Mark the end of the stream
      value = 2;
      for (i = 0; i < context_numBits; i++) {
        context_data_val = (context_data_val << 1) | (value & 1);
        if (context_data_position == bitsPerChar - 1) {
          context_data_position = 0;
          context_data.push(getCharFromInt(context_data_val, context_data.length));
          context_data_val = 0;
        } else {
          context_data_position++;
        }
        value = value >> 1;
      }

      // Flush the last char
      while (true) {
        context_data_val = (context_data_val << 1);
        if (context_data_position == bitsPerChar - 1) {
          context_data.push(getCharFromInt(context_data_val, context_data.length));
          break;
        } else context_data_position++;
      }
      return context_data.join('');
    },

    sdecompress: function(compressed, key) {
      if (key.length !== 0)
        key = this.scompress(key, "");
      return this._decompress(compressed.length, 1 << (14 - 1), function(i) {
        let x = compressed.charCodeAt(i) - 0x4E00;
        if (key.length !== 0)
          x ^= (key.charCodeAt(i % key.length) * (i + 1)) & ((1 << 14) - 1);
        return x;
      });
    },

    _decompress: function(length, resetValue, getNextValue) {
      var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {
          val: getNextValue(0),
          position: resetValue,
          index: 1
        };

      for (i = 0; i < 3; i += 1) {
        dictionary[i] = i;
      }

      bits = 0;
      maxpower = Math.pow(2, 2);
      power = 1;
      while (power != maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb > 0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (next = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2, 8);
          power = 1;
          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }
          c = f(bits);
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2, 16);
          power = 1;
          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }
          c = f(bits);
          break;
        case 2:
          return "";
      }
      dictionary[3] = c;
      w = c;
      result.push(c);
      while (true) {
        if (data.index > length) {
          return "";
        }

        bits = 0;
        maxpower = Math.pow(2, numBits);
        power = 1;
        while (power != maxpower) {
          resb = data.val & data.position;
          data.position >>= 1;
          if (data.position == 0) {
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }
          bits |= (resb > 0 ? 1 : 0) * power;
          power <<= 1;
        }

        switch (c = bits) {
          case 0:
            bits = 0;
            maxpower = Math.pow(2, 8);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }

            dictionary[dictSize++] = f(bits);
            c = dictSize - 1;
            enlargeIn--;
            break;
          case 1:
            bits = 0;
            maxpower = Math.pow(2, 16);
            power = 1;
            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;
              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }
            dictionary[dictSize++] = f(bits);
            c = dictSize - 1;
            enlargeIn--;
            break;
          case 2:
            return result.join('');
        }

        if (enlargeIn == 0) {
          enlargeIn = Math.pow(2, numBits);
          numBits++;
        }

        if (dictionary[c]) {
          entry = dictionary[c];
        } else {
          if (c === dictSize) {
            entry = w + w.charAt(0);
          } else {
            // throw new Error("LZString: decompress error.");
            // return null;
            return "";
          }
        }
        result.push(entry);

        // Add w+entry[0] to the dictionary.
        dictionary[dictSize++] = w + entry.charAt(0);
        enlargeIn--;

        w = entry;

        if (enlargeIn == 0) {
          enlargeIn = Math.pow(2, numBits);
          numBits++;
        }

      }
    }
  };
  return LZString;
}


window.tempExt = {
  Extension: Archive_code,
  info: {
    name: 'hcn.extensionName',
    description: 'hcn.description',
    extensionId: 'Archivecode',
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