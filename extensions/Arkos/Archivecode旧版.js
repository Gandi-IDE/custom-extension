import Cast from '../utils/cast.js'
//import cover from './assets/cover2.png'
//import icon from './assets/icon2.svg'

//合作者：Nights:帮忙写了代码框架，并且给予了一些技术上的指导
// console.log(Cast.toNumber('123'))
//console.log(Cast.toNumber('aab'))

class Archive_code {
  constructor(runtime) {
    this.runtime = runtime
    this._archive_code = ''         //生成的序列结果
    this.deserializeSuccessfully = false   //存反序列化是否成功
    //存需要序列化的内容  
    this.content = {
      金币: 200,
      背包: ["木头", 233]
    }
    //存反序列化结果
    //this.content2 = {};
    //Object.assign(this.content2,this.content)
    this.setArchive_code();
    //this.setContent2json();

    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'ArchiveCodeExt.extensionName': '存档码',
        'ArchiveCodeExt.init': '清空容器',
        'ArchiveCodeExt.serialization': '将内容[value]命名为[name]加入容器(已有则覆盖)',
        'ArchiveCodeExt.serializationForVariable': '将变量[var]内容命名为[name]加入容器(已有则覆盖)',
        'ArchiveCodeExt.serializationForList': '将列表[list]内容命名为[name]加入容器(已有则覆盖)',
        //'ArchiveCodeExt.stop': '序列化结束',
        'ArchiveCodeExt.result': '容器内容对应字符串',
        'ArchiveCodeExt.deserialization': '读取字符串到容器：[code]',
        'ArchiveCodeExt.getContent': '容器中名称为[key]的内容',
        //'ArchiveCodeExt.showContent2json':'读取结果',
        'ArchiveCodeExt.saveContentToVar': '将容器中名称为[key]的内容保存到变量[var]',
        'ArchiveCodeExt.saveContentToList': '将容器中名称为[key]的内容保存到列表[list]',
        'ArchiveCodeExt.deserializable': '读取成功？',
        'ArchiveCodeExt.getAmount': '容器中内容的总数',
        'ArchiveCodeExt.ifExist': '容器是否存在名为[key]的内容',
        'ArchiveCodeExt.getContentByNumber': '获取容器中第[index]个内容的[type]',
        'ArchiveCodeExt.encrypt': '以[method]加密[str],密匙[key]',
        'ArchiveCodeExt.decrypt': '以[method]解密[str],密匙[key]',
        'ArchiveCodeExt.writeClipboard': '复制[str]到剪贴板',
        'ArchiveCodeExt.getLengthOfList': '容器中名称为[key]的列表的长度',
        'ArchiveCodeExt.getContentOfList': '容器中名称为[key]的列表的第[n]项',
        'ArchiveCodeExt.getUnicode': '字符[c]的Unicode',
        'ArchiveCodeExt.getCharByUnicode': 'Unicode[code]对应字符',
        'ArchiveCodeExt.methodMenu.1': 'Arkos加密法',
        'ArchiveCodeExt.methodMenu.2': '分裂加密法',
        'ArchiveCodeExt.infoMenu.1': '名称',
        'ArchiveCodeExt.infoMenu.2': '内容',
        'ArchiveCodeExt.infoMenu.3': '类型',
        'ArchiveCodeExt.infoMenu.4': '列表长度',
        'ArchiveCodeExt.delete': '删除容器中名为[key]的内容',

      },

      en: {
        'ArchiveCodeExt.extensionName': 'Archive Code',
        'ArchiveCodeExt.init': 'empty Container',
        'ArchiveCodeExt.serialization': 'add content[value] to Container, name as[name]',
        'ArchiveCodeExt.serializationForVariable': 'add variable[var] to Container, name as[name]',
        'ArchiveCodeExt.serializationForList': 'add list[list] to Container, name as[name]',
        //'ArchiveCodeExt.stop': 'end serialization',
        'ArchiveCodeExt.result': 'Container in string form',
        'ArchiveCodeExt.deserialization': 'parse string[code] to Container',
        'ArchiveCodeExt.getContent': 'content of[key]',
        'ArchiveCodeExt.saveContentToVar': 'save [key]to variable[var]',
        'ArchiveCodeExt.saveContentToList': 'save[key]to list[list]',
        'ArchiveCodeExt.deserializable': 'parse successfullly?',
        'ArchiveCodeExt.getAmount': 'the amount of contents in Container',
        'ArchiveCodeExt.ifExist': 'Container contains[key]?',
        'ArchiveCodeExt.getContentByNumber': 'get [type]of #[index]content',
        'ArchiveCodeExt.encrypt': 'use[method]to encrypt[str]with key[key]',
        'ArchiveCodeExt.decrypt': 'use[method]to decrypt[str]with key[key]',
        'ArchiveCodeExt.writeClipboard': 'copy[str]to clipboard',
        //'ArchiveCodeExt.showContent2json':'deserialization result',
        'ArchiveCodeExt.getContentOfList': '#[n] of list[key]',
        'ArchiveCodeExt.getLengthOfList': 'length of list[key]',
        'ArchiveCodeExt.getUnicode': 'get Unicode of[c]',
        'ArchiveCodeExt.getCharByUnicode': ' character of Unicode[code]',
        'ArchiveCodeExt.methodMenu.1': 'Arkos cipher',
        'ArchiveCodeExt.methodMenu.2': 'mitotic encryption',
        'ArchiveCodeExt.infoMenu.1': 'name',
        'ArchiveCodeExt.infoMenu.2': 'value',
        'ArchiveCodeExt.infoMenu.3': 'type',
        'ArchiveCodeExt.infoMenu.4': 'lenth of list',
        'ArchiveCodeExt.delete': 'Delete content[key] in Container'
      },
    })

  }

  //每次读取archive_code会生成一次
  get archive_code() {
    this.setArchive_code();
    return this._archive_code;
  }

  //根据content的内容，将其JSON化，存到archive_code
  setArchive_code() {
    this._archive_code = JSON.stringify(this.content);
  }

  // setContent2json(){
  //   this.content2json = JSON.stringify(this.content2);
  // }

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
        {
          //开始序列化
          opcode: 'init',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.init')
        },
        {
          //将内容加入序列 名称xx 值xx
          opcode: 'serialization',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.serialization'),
          arguments: {
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
          opcode: 'serializationForVariable',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.serializationForVariable'),
          arguments: {
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
          opcode: 'serializationForList',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.serializationForList'),
          arguments: {
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
          opcode: 'result',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.result'),
        },


        {
          //反序列化
          opcode: 'deserialization',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.deserialization'),
          arguments: {
            code: {
              type: 'string',
              defaultValue: `{"金币":200,"背包":["木头","面包"]}`
            }
          }
        },
        {
          //反序列化是否成功
          opcode: 'deserializable',
          blockType: 'Boolean',
          text: this.formatMessage('ArchiveCodeExt.deserializable'),
        },
        {
          //返回容器中数据数量
          opcode: 'getAmount',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.getAmount'),
        },
        {
          //获取第n(从1开始)个内容，的(1名称2内容3类型4列表长度)
          opcode: 'getContentByNumber',
          blockType: 'reporter',
          text: this.formatMessage('ArchiveCodeExt.getContentByNumber'),
          arguments: {
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
            key: {
              type: 'string',
              defaultValue: '金币'
            },
          }
        },
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
        ],
        infoMenu: [
          {
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



  init() {
    // console.log('editingTarget :', this.runtime._editingTarget)
    // console.log('stageTarget :', this.runtime._stageTarget)
    // console.log('_stageTarget.variables',JSON.stringify(this.runtime._stageTarget.variables))
    this.content = {};
    this.setArchive_code();
  }

  result() {
    return this.archive_code;
  }

  // showContent2json() {
  //   this.setContent2json();
  //   return this.content2json;
  // }

  stop() {
    this.setArchive_code();
  }

  serialization(args) {
    // if (this.archive_code !== '')
    //   this.archive_code += ','
    // this.archive_code += `"${args.name}":${JSON.stringify(args.value)}`
    this.content[args.name] = args.value;
  }

  serializationForVariable(args, util) {
    // if (this.archive_code !== '')
    //   this.archive_code += ','
    // const variable = util.target.lookupVariableById(args.var);
    // this.archive_code += `"${args.name}":${JSON.stringify(variable.value)}`
    if (args.var !== 'empty') {
      const variable = util.target.lookupVariableById(args.var);
      this.content[args.name] = variable.value;
    }
  }

  serializationForList(args, util) {
    // if (this.archive_code !== '')
    //   this.archive_code += ','
    // const list = util.target.lookupVariableById(args.list);
    // this.archive_code += `"${args.name}":${JSON.stringify(list)}`
    if (args.list !== 'empty') {
      const list = util.target.lookupVariableById(args.list);
      this.content[args.name] = list.value;
    }
  }

  deserialization(args) {
    try {
      this.content = JSON.parse(args.code)
      if(typeof(this.content)==='object'&& this.content !== null ){
        this.deserializeSuccessfully = true;
      }else{
        this.content = {};
        this.deserializeSuccessfully = false;
      }
    } catch (e) {
      this.deserializeSuccessfully = false;
      //this.content2 = {}
    }
    //console.log(typeof this.content)
  }

  deserializable() {
    return this.deserializeSuccessfully
  }

  ifExist(args) {
    return (this.content.hasOwnProperty(args.key));
  }

  getAmount() {
    let count = 0;
    for (let key in this.content) {
      count++;
    }
    return count;
  }

  getContentByNumber(args) {
    let key = Object.keys(this.content)[args.index - 1]
    if (key === undefined) return '';
    switch (args.type) {
      case '1'://名称
        return key;
      case '2'://内容
        return this.content[key];
      case '3'://类型
        return (typeof this.content[key] === 'object') ? '列表' : '变量';
      case '4'://列表长度
        return (typeof this.content[key] === 'object') ? this.content[key].length : '';
      default:
        return '';
    }

  }

  getContent(args, util) {
    // const variable = util.target.lookupVariableById(args.var);
    // variable.value = args.key;

    return (this.content[args.key] === undefined) ? '' : String(this.content[args.key])
  }

  getUnicode(args) {
    return args.c.charCodeAt(0)
  }

  getCharByUnicode(args) {
    return String.fromCharCode(args.code)
  }

  getContentOfList(args, util) {
    // const variable = util.target.lookupVariableById(args.var);
    // variable.value = args.key;
    //如果没有这项，或者不是列表
    let t = this.content[args.key]
    if (t === undefined || typeof t !== 'object') {
      return '';
    } else {
      if (t[args.n - 1] === undefined) return '';
      else return t[args.n - 1]
    }
  }

  getLengthOfList(args, util) {
    // const variable = util.target.lookupVariableById(args.var);
    // variable.value = args.key;
    //如果没有这项，或者不是列表
    let t = this.content[args.key]
    if (t === undefined || typeof t !== 'object') {
      return '';
    } else {
      return t.length;
    }
  }



  saveContentToVar(args, util) {
    if (args.var !== 'empty') {
      const variable = util.target.lookupVariableById(args.var);
      variable.value = String(this.content[args.key]);
      if (variable.value === "undefined") variable.value = '';
    }
  }

  saveContentToList(args, util) {
    if (args.list !== 'empty') {
      const list = util.target.lookupVariableById(args.list);
      list.value = this.content[args.key];
      if (list.value === undefined) list.value = [];
      if (typeof list.value !== 'object') {
        list.value = [list.value];
      }
    }
  }

  delete(args) {
    Reflect.deleteProperty(this.content, args.key);
  }

  //将密匙转换为一个值
  keyVar(k) {
    k = String(k)
    let t = 13;
    for (let i = 0; i < k.length; i++) {
      t += k.charCodeAt(i)
      t %= 65536
    }
    return t
  }

  //加密
  encrypt(args) {
    switch (args.method) {
      case '1':
        return this.ArkosEncrypt(args);
      case '2':
        return this.encrypt2(args);
      default:
        return '';
    }
  }

  //解密
  decrypt(args) {
    switch (args.method) {
      case '1':
        return this.ArkosDecrypt(args);
      case '2':
        return this.decrypt2(args);
      default:
        return '';
    }
  }

  //Arkos加密法
  ArkosEncrypt(args) {
    args.key = this.keyVar(args.key)
    args.str = String(args.str)
    let b = ''
    for (let i = 0; i < args.str.length; i++) {
      b += this.enChar1(args.str[i], args.key + i)
    }
    return b
  }


  //Arkos解密
  ArkosDecrypt(args) {
    args.key = this.keyVar(args.key)
    args.str = String(args.str)
    let b = ''
    for (let i = 0; i < args.str.length; i++) {
      b += this.deChar1(args.str[i], args.key + i)
    }
    //console.log('123')
    return b
  }

  enChar1(c, p) {
    let t = (c.charCodeAt(0) + p) % 54533  //
    t = t - t % 10 + (9 - t % 10)

    return String.fromCharCode(t)
  }


  deChar1(c, p) {
    let t = c.charCodeAt(0)
    //t%=65536
    t = t - t % 10 + (9 - t % 10)
    t = (t - p) % 54533
    if (t < 0) t += 54533
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
    navigator.clipboard.writeText(args.str);
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
    let temp = this.runtime._stageTarget.variables
    Object.keys(temp).forEach(obj => {
      if (temp[obj].type === '') {
        list.push({
          text: `${temp[obj].name}`,
          value: temp[obj].id,
        });
      }
    });
    try {
      temp = this.runtime._editingTarget.variables
    } catch (e) {
      temp = 'e'
    }
    if (temp !=='e' && this.runtime._editingTarget !== this.runtime._stageTarget) {
      Object.keys(temp).forEach(obj => {
        if (temp[obj].type === '') {
          list.push({
            text: `[私有变量]${temp[obj].name}`,
            value: temp[obj].id,
          });
        }
      });
    }
    if (list.length === 0) {
      list.push({
        text: `*没有变量*`,
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
    let temp = this.runtime._stageTarget.variables
    Object.keys(temp).forEach(obj => {
      if (temp[obj].type === 'list') {
        //console.log(temp[obj].type)
        list.push({
          text: `${temp[obj].name}`,
          value: temp[obj].id,
        });
      }
    });
    try {
      temp = this.runtime._editingTarget.variables
    } catch (e) {
      temp = 'e'
    }
    if (temp !=='e'  && this.runtime._editingTarget !== this.runtime._stageTarget) {
      Object.keys(temp).forEach(obj => {
        if (temp[obj].type === 'list') {
          list.push({
            text: `[私有列表]${temp[obj].name}`,
            value: temp[obj].id,

          });
        }
      });
    }
    if (list.length === 0) {
      list.push({
        text: `*没有列表*`,
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
        text: '*没有变量*',
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
        text: '*没有列表*',
        value: 'empty',
      });
    }
    list.sort(this.compare("text"));
    return list;
  }


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