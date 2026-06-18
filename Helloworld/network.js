class Network {
  constructor(runtime) {
    this.runtime = runtime;
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'NetworkExt.ExtName': '网络扩展',
        'NetworkExt.description': '让你的作品可以访问网络',
        'NetworkExt.httpget': 'GET方法同步请求[url]查询字符串[query]没有则留空',
        'NetworkExt.httppost': 'POST方法同步请求[url]请求主体[body]',
        'NetworkExt.encoding': 'json转换uri编码字符串[json]',
        'NetworkExt.decoding': 'uri编码字符串转换json[uri]',
        // 'NetworkExt.content': '异步请求返回内容',
        // 'NetworkExt.setheader': '设置异步请求头部[key]=[value]',
        // 'NetworkExt.status': '异步请求状态码',
        // 'NetworkExt.setmethod': '设置异步请求方法为[method]',
        // 'NetworkExt.sendasyncreq': '发送异步请求,方法为[method],主体为(没有填null)[body],url为[url]',
        // 'NetworkExt.seturl': '设置异步请求url[url]',
        // 'NetworkExt.whenasync': '当异步请求结束',
      },

      en: {
        'NetworkExt.ExtName': 'Network extension',
        'NetworkExt.httpget': 'GET method synchronization request [url]',
        'NetworkExt.httppost': 'POST method synchronization request [url] request body [body]',
        'NetworkExt.encoding': 'json转换uri编码字符串[json]',
        'NetworkExt.decoding': 'uri编码字符串转换json[uri]',
        // 'NetworkExt.content': '异步请求返回内容',
        // 'NetworkExt.setheader': 'Set asynchronous request header [key] = [value]',
        // 'NetworkExt.status': 'Asynchronous request status code',
        // 'NetworkExt.setmethod': 'Set the asynchronous request method to [method]',
        // 'NetworkExt.sendasyncreq': '发送异步请求,方法为[method],主体为(没有填null)[body],url为[url]',
        // 'NetworkExt.seturl': 'Set asynchronous request url[url]',
        // 'NetworkExt.whenasync': 'When the asynchronous request ends.',
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
      id: 'HelloworldNetworkExt',
      name: this.formatMessage('NetworkExt.ExtName'),
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
            query: {
              type: 'string',
              defaultValue: undefined,
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
          opcode: 'encoding',
          blockType: 'reporter',
          text: this.formatMessage('NetworkExt.encoding'),
          arguments: {
            json: {
              type: 'string',
              defaultValue: '{"nihao":"666","wohao":"777"}',
            },
          },
        },
        {
          opcode: 'decoding',
          blockType: 'reporter',
          text: this.formatMessage('NetworkExt.decoding'),
          arguments: {
            uri: {
              type: 'string',
              defaultValue: 'nihao=666&wohao=777',
            },
          },
        }
      ],
    }
  }
  encoding(args)
  {
    let obj=JSON.parse(args.json);
    let encodedString = Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
    return encodedString;
  }
  decoding(args)
  {
    let encodedString=args.uri;
    let decodedObj = {};
    encodedString.split('&').forEach(function(keyValue)
    {
        var pair = keyValue.split('=');
        decodedObj[pair[0]] = pair[1];
    });
    return JSON.stringify(decodedObj);
  }
  httpget(args)
  {
    // console.log(args);
    let xhr= new XMLHttpRequest();
    let url=args.url;
    if(args.query)
    {
      url+='?';
      url+=args.query;
    }
    xhr.open('GET',url,false);
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
