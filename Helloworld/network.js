class Network {
  constructor(runtime) {
    this.runtime = runtime
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'NetworkExt.ExtName': '网络扩展',
        'NetworkExt.description': '让你的作品可以访问网络',
        'NetworkExt.httpget': 'GET方法同步请求[url]',
        'NetworkExt.httppost': 'POST方法同步请求[url]请求主体[body]',
        'NetworkExt.setheader': '设置异步请求头部[key]=[value]',
        'NetworkExt.status': '异步请求状态码',
        'NetworkExt.setmethod': '设置异步请求方法为[method]',
        'NetworkExt.seturl': '设置异步请求url[url]',
        'NetworkExt.whenasync': '当异步请求结束',
      },

      en: {
        'NetworkExt.ExtName': 'Network extension',
        'NetworkExt.httpget': 'GET method synchronization request [url]',
        'NetworkExt.httppost': 'POST method synchronization request [url] request body [body]',
        'NetworkExt.setheader': 'Set asynchronous request header [key] = [value]',
        'NetworkExt.status': 'Asynchronous request status code',
        'NetworkExt.setmethod': 'Set the asynchronous request method to [method]',
        'NetworkExt.seturl': 'Set asynchronous request url[url]',
        'NetworkExt.whenasync': 'When the asynchronous request ends.',
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
      id: 'HelloworldNetworkExt', // 拓展id
      name: this.formatMessage('NetworkExt.ExtName'), // 拓展名
      color1: '#e000ff',
      blocks: [
        {
          opcode: 'httpget',
          blockType: 'reporter',
          text: this.formatMessage('NetworkExt.httpget'),
          arguments: {
            url: {
              type: 'string',
              defaultValue: 'url',
            },
          },
        },
        {
          opcode: 'httppost',
          blockType: 'reporter',
          text: this.formatMessage('NetworkExt.httppost'),
          arguments: {
            url: {
              type: 'string',
              defaultValue: 'url',
            },
            body: {
              type: 'string',
              defaultValue: 'body',
            },
          },
        },
        {
          opcode: 'setheader',
          blockType: 'command',
          text: this.formatMessage('NetworkExt.setheader'),
          arguments: {
            key: {
              type: 'number',
              defaultValue: 0,
            },
            value: {
              type: 'number',
              defaultValue: 0,
            },
          },
        },
        {
          opcode: 'status',
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
          opcode: 'setmethod',
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
          opcode: 'seturl',
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
          opcode: 'whenasync',
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
      ],
    }
  }
  httpget(args)
  {
    let xhr= new XMLHttpRequest();
    xhr.open('GET',args.url,false);
    xhr.send(null);
    return xhr.responseText;
  }
  httppost(args)
  {
    let xhr=new XMLHttpRequest();
    xhr.open('GET',args.url,false);
    xhr.send(args.body);
    return xhr.responseText;
  }
}

window.tempExt = {
    Extension: Network,
    info: {
      name: 'NetworkExt.ExtName',
      description: 'NetworkExt.description',
      extensionId: 'HelloworldNetworkExt',
      // iconURL: icon,
      // insetIconURL: cover,
      featured: true,
      disabled: false,
      collaborator: 'Helloworld@CCW',
    },
    l10n: {
      'zh-cn': {
        'NetworkExt.ExtName': '网络扩展',
        'hcn.description': '让你的作品可以访问网络',
      },
      en: {
        'hcn.extensionName': 'Network extension',
        'hcn.description': 'Make your work accessible to the Internet.',
      },
    },
  }
