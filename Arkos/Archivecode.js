import Cast from '../utils/cast.js'

//合作者：Nights:帮忙写了代码框架，并且给予了许多技术上的指导
// console.log(Cast.toNumber('123'))
console.log(Cast.toNumber('aab'))

class Archive_code {
  constructor(runtime) {
    this.runtime = runtime
    this.archive_code = ''         //生成的序列结果
    this.deserializeSuccessfully = false   //存反序列化是否成功
     //存需要处理的内容  
    this.content = { 
      金币: 200,
      背包: ["木头",233]
    }     

    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'ArchiveCodeExt.extensionName': '存档码',
        'ArchiveCodeExt.init': '开始序列化',
        'ArchiveCodeExt.serialization': '将内容加入序列：名称:[name] 值:[value]',
        'ArchiveCodeExt.serializationForVariable': '将变量加入序列：名称:[name] 变量:[var]',
        'ArchiveCodeExt.serializationForList': '将列表加入序列：名称:[name] 列表:[list]',
        'ArchiveCodeExt.stop': '序列化结束',
        'ArchiveCodeExt.result': '序列化结果',
        'ArchiveCodeExt.deserialization': '反序列化：[code]',
        'ArchiveCodeExt.getContent': '名称为[key]的内容',
        'ArchiveCodeExt.saveContentToVar': '将名称为[key]的内容保存到变量[var]',
        'ArchiveCodeExt.saveContentToList': '将名称为[key]的内容保存到列表[list]',
        'ArchiveCodeExt.deserializable': '反序列化成功？',
      },

      en: {
        'ArchiveCodeExt.extensionName': 'Archive Code',
        'ArchiveCodeExt.init': 'start serialization',
        'ArchiveCodeExt.serialization': 'add content to series:name:[name] content:[value]',
        'ArchiveCodeExt.serializationForVariable': 'add variable to series:name:[name] variable:[var]',
        'ArchiveCodeExt.serializationForList': 'add list to series:name:[name] list:[list]',
        'ArchiveCodeExt.stop': 'end serialization',
        'ArchiveCodeExt.result': 'serialization result',
        'ArchiveCodeExt.deserialization': 'deserialize：[code]',
        'ArchiveCodeExt.getContent': 'content of[key]',
        'ArchiveCodeExt.saveContentToVar': 'save [key]to variable[var]',
        'ArchiveCodeExt.saveContentToList': 'save[key]to list[list]',
        'ArchiveCodeExt.deserializable': 'deserializeSuccessfully?',

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
        {
          //序列化结束
          opcode: 'stop',
          blockType: 'command',
          text: this.formatMessage('ArchiveCodeExt.stop'),
        },
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
              defaultValue: `"金币":200,"背包":["木头","面包"]`
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
              menu: 'varMenu2'
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
              menu: 'varMenu2'
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
              menu: 'listMenu2'
            },
            list: {
              type: 'string',
              menu: 'listMenu'
            }
          }
        },
        {
          //反序列化是否成功
          opcode: 'deserializable',
          blockType: 'Boolean',
          text: this.formatMessage('ArchiveCodeExt.deserializable'),
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
      },
    };
  }



  init() {
    // console.log('editingTarget :', this.runtime._editingTarget)
    // console.log('stageTarget :', this.runtime._stageTarget)
    // console.log('_stageTarget.variables',JSON.stringify(this.runtime._stageTarget.variables))
    this.content = {};
    this.archive_code = '';
  }

  result() {
    return this.archive_code;
  }

  stop() {
    this.archive_code = JSON.stringify(this.content);
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
    if(args.var !== 'empty'){
      const variable = util.target.lookupVariableById(args.var);
      this.content[args.name] = variable.value;
    }
  }

  serializationForList(args, util) {
    // if (this.archive_code !== '')
    //   this.archive_code += ','
    // const list = util.target.lookupVariableById(args.list);
    // this.archive_code += `"${args.name}":${JSON.stringify(list)}`
    if(args.list !== 'empty'){
      const list = util.target.lookupVariableById(args.list);
      this.content[args.name] = list.value;
    }
  }

  deserialization(args) {
    this.content = JSON.parse(args.code)
    console.log(typeof this.content)
  }

  deserializable() {
    return this.deserializeSuccessfully
  }

  getContent(args, util) {
    // const variable = util.target.lookupVariableById(args.var);
    // variable.value = args.key;
    if(args.key !== 'empty'){
      return this.content[args.key];
    }
    else{
      return '';
    }
  }


  saveContentToVar(args, util) {
    if(args.var !== 'empty'){
      const variable = util.target.lookupVariableById(args.var);
      variable.value = this.content[args.key];
    }
  }

  saveContentToList(args, util) {
    if(args.list !== 'empty'){
      const variable = util.target.lookupVariableById(args.list);
      variable.value = this.content[args.key];
    }
  }



  findAllVar() {
    const list =[];
    let temp = this.runtime._stageTarget.variables
    Object.keys(temp).forEach(obj => {
      if (temp[obj].type === '') {
        list.push({
          text: `[公共变量]${temp[obj].name}`,
          value: temp[obj].id,
        });
      }
    });
    temp = this.runtime._editingTarget.variables
    Object.keys(temp).forEach(obj => {
      if (temp[obj].type === '') {
        list.push({
          text: `[私有变量]${temp[obj].name}`,
          value: temp[obj].id,
        });
      }
    });
    if(list.length === 0)
    {
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
    return list;
  }

  findAllList() {
    const list = [];
    let temp = this.runtime._stageTarget.variables
    Object.keys(temp).forEach(obj => {
      if (temp[obj].type !== '') {
        list.push({
          text: `[公共列表]${temp[obj].name}`,
          value: temp[obj].id,
        });
      }
    });
    temp = this.runtime._editingTarget.variables
    Object.keys(temp).forEach(obj => {
      if (temp[obj].type !== '') {
        list.push({
          text: `[私有列表]${temp[obj].name}`,
          value: temp[obj].id,

        });
      }
    });
    if(list.length === 0)
    {
      list.push({
        text: `*没有列表*`,
        value: 'empty',
      });
    }
    return list;
  }

  findAllVarContents(){
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
    if(list.length === 0)
    {
      list.push({
        text: '*没有变量*',
        value: 'empty',
      });
    }
    return list;
  }

  findAllListsContents(){
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
    if(list.length === 0)
    {
      list.push({
        text: '*没有列表*',
        value: 'empty',
      });
    }
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
