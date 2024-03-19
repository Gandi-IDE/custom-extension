class Network {
  constructor(runtime) {
    this.runtime = runtime;
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'NetworkExt.ExtName': '网络扩展',
        'NetworkExt.description': '让你的作品可以访问网络',
        'NetworkExt.httpget': 'GET方法同步请求[url]',
        'NetworkExt.httppost': 'POST方法同步请求[url]请求主体[body]',
        'NetworkExt.setheader': '设置异步请求头部[key]=[value]',
        'NetworkExt.status': '异步请求状态码',
        'NetworkExt.setmethod': '设置异步请求方法为[method]',
        'NetworkExt.sendasyncreq': '发送异步请求,方法为[method],主体为(没有填null)[body],url为[url]',
        'NetworkExt.seturl': '设置异步请求url[url]',
        'NetworkExt.whenasync': '当异步请求结束[content]',
      },

      en: {
        'NetworkExt.ExtName': 'Network extension',
        'NetworkExt.httpget': 'GET method synchronization request [url]',
        'NetworkExt.httppost': 'POST method synchronization request [url] request body [body]',
        'NetworkExt.setheader': 'Set asynchronous request header [key] = [value]',
        'NetworkExt.status': 'Asynchronous request status code',
        'NetworkExt.setmethod': 'Set the asynchronous request method to [method]',
        'NetworkExt.sendasyncreq': '发送异步请求,方法为[method],主体为(没有填null)[body],url为[url]',
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
              defaultValue: 'https://extensions.turbowarp.org/hello.txt',
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
              defaultValue: 'https://extensions.turbowarp.org/hello.txt',
            },
            body: {
              type: 'string',
              defaultValue: 'body',
            },
          },
        },
        {
          opcode: 'sendasyncreq',
          blockType: 'command',
          text: this.formatMessage('NetworkExt.sendasyncreq'),
          arguments: {
            url: {
              type: 'string',
              defaultValue: 'https://extensions.turbowarp.org/hello.txt',
            },
            body: {
              type: 'string',
              defaultValue: 'null',
            },
            method: {
              type: 'string',
              defaultValue: 'GET',
            },
          },
        },
        {
          opcode: 'whenasync',
          blockType: 'event',
          text: this.formatMessage('NetworkExt.whenasync'),
          arguments: {
            content: {
              type: 'ccw_hat_parameter',
            },
          },
        },
      ],
    }
  }
  sendasyncreq(args)
  {
    let xhr=new XMLHttpRequest();
    xhr.open(args.method,args.url,true);
    xhr.onreadystatechange = () => {
      if(xhr.readyState == XMLHttpRequest.DONE)
      {
        this.runtime.startHatsWithParams(
          'whenasync',
          {
            parameters: [xhr.responseText]
          }
        )
      }
    }
    if(args.body=='null') xhr.send(null);
    else xhr.send(args.body);
  }
  httpget(args)
  {
    console.log(args);
    let xhr= new XMLHttpRequest();
    xhr.open('GET',args.url,false);
    xhr.send(null);
    return xhr.responseText;
  }
  httppost(args)
  {
    let xhr=new XMLHttpRequest();
    xhr.open('POST',args.url,false);
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
