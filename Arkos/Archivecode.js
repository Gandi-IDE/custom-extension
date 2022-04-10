import Cast from '../utils/cast.js'

//合作者：Nights:帮忙写了代码框架，并且给予了许多技术上的指导




class Archive_code {
  constructor(runtime) {
    this.archive_code = ''         //生成的序列结果
    this.deserializeSuccessfully = false   //存反序列化是否成功
    this.content = {}      //存需要处理的内容

    this.runtime = runtime
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
      id: 'Archivecode',
      name: this.formatMessage('ArchiveCodeExt.extensionName'),
      blocks: [
        {
          //开始序列化
          opcode: 'init',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('ArchiveCodeExt.init')
        },
        {
          //将内容加入序列 名称xx 值xx
          opcode: 'serialization',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('ArchiveCodeExt.serialization'),
          arguments: {
            name: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '用户id'
            },
            value: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '114514',
            }
          }
        },
        {
          //将变量加入序列
          opcode: 'serializationForVariable',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('ArchiveCodeExt.serializationForVariable'),
          arguments: {
            name: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '金币'
            },
            var: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '金币',
              menu: 'varMenu'
            }
          }
        },
        {
          //将列表加入序列
          opcode: 'serializationForList',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('ArchiveCodeExt.serializationForList'),
          arguments: {
            name: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '背包'
            },
            list: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '背包',
              menu: 'listMenu'
            }
          }
        },
        {
          //序列化结束
          opcode: 'stop',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('ArchiveCodeExt.stop'),
        },
        {
          //返回序列化结果
          opcode: 'result',
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('ArchiveCodeExt.result'),
        },


        {
          //反序列化
          opcode: 'deserialization',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('ArchiveCodeExt.deserialization'),
          arguments: {
            code: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: `"金币":200,"背包":["木头","面包"]`
            }
          }
        },
        {
          //返回名称为..的内容
          opcode: 'getContent',
          blockType: Scratch.BlockType.REPORTER,
          text: this.formatMessage('ArchiveCodeExt.getContent'),
          arguments: {
            key: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '金币',
              menu: 'varMenu'
            }
          }
        },
        {
          //将内容保存到变量
          opcode: 'saveContentToVar',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('ArchiveCodeExt.saveContentToVar'),
          arguments: {
            key: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '金币',
              menu: 'varMenu'
            },
            var: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '金币',
              menu: 'varMenu'
            }
          }
        },
        {
          //将内容保存到列表
          opcode: 'saveContentToList',
          blockType: Scratch.BlockType.COMMAND,
          text: this.formatMessage('ArchiveCodeExt.saveContentToList'),
          arguments: {
            key: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '背包',
              menu: 'listMenu'
            },
            var: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '背包',
              menu: 'listMenu'
            }
          }
        },
        {
          //反序列化是否成功
          opcode: 'deserializable',
          blockType: Scratch.BlockType.BOOLEAN,
          text: this.formatMessage('ArchiveCodeExt.deserializable'),
        },
      ],
      menus: {
        varMenu: {
          acceptReporters: true,
          items: [{ text: '金币', value: 'a' }, 'b', 'c']

        },
        listMenu: {
          acceptReporters: true,
          items: [{ text: '背包', value: 'a' }, 'b', 'c']

        },
      },
    };
  }



  init() {
    this.archive_code = '';
  }
  result() {
    return this.archive_code;
  }

  serialization() {

  }

  deserializable() {
    return this.deserializeSuccessfully
  }
}

Scratch.extensions.register(new Archive_code());