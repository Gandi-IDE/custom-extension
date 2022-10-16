const Cast = require('../../util/cast');
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const { string } = require('prop-types');
// var dgram = require("dgram");
//感谢Arkos开源的扩展代码，作为参照编写框架
//欸，别把作者忘了。Danny欸
class AuEx_Communication {
    constructor(runtime) {
        this.runtime = runtime
        this._formatMessage = runtime.getFormatMessage({
            'zh-cn': {
                'DannyDevCOM.extensionName': 'AUSの通讯模块',
                'DannyDevCOM.tit1': '通讯',
                'DannyDevCOM.tit1.1': 'http',
                'DannyDevCOM.tit1.2': 'WebSocket',
                'DannyDevCOM.tit2': '数据处理',
                'DannyDevCOM.tit3': 'JSON',
                'DannyDevCOM.http': 'HTTP以[g_way]方式访问[site]参数[p]发送[body]',
                'DannyDevCOM.http_pm': '网址参数构造 id[id](创建/修改)名称[name]内容[text]',
                'DannyDevCOM.http_pm_des': '销毁网址参数构造[id]',
                'DannyDevCOM.wsocket_create': 'ws.创建websocket,协议[yi],并返回cid',
                'DannyDevCOM.wsocket_connect': 'ws.id[id]socket连接[host]',
                'DannyDevCOM.wsocket_send': 'ws.发送id[id]数据[text]',
                'DannyDevCOM.wsocket_recv': 'ws.接收数据id[id]',
                'DannyDevCOM.wsocket_conclose': 'ws.连接关闭id[id]',
                'DannyDevCOM.wsocket_close': 'ws.销毁websocket id[id]',
                'DannyDevCOM.socket_create': 'sock.创建[yi]方式[method]并返回ccid',
                'DannyDevCOM.socket_create_chk': 'sock.创建是否成功[ccid]并返回id',
                'DannyDevCOM.socket_recv': 'sock.收到数据id [id]',
                'DannyDevCOM.socket_send': 'sock.发送数据id [id] ip[ip]数据[TEXT]',
                'DannyDevCOM.socket_conclose': 'sock.断开连接id[id]',
                'DannyDevCOM.socket_connect': 'sock.连接/启动服务 id[id] ip [ip] 接收长度[buff]',
                'DannyDevCOM.socket_breakev': 'sock.断开连接id[id]ip[ip]',
                'DannyDevCOM.socket_close': 'sock.销毁socket对象 id[id]',
                'DannyDevCOM.socket_parse': 'sock.解析返回的数据data[data]属性[type]',
                'DannyDevCOM.socket_opchk': 'sock.操作是否成功[cid]',
                'DannyDevCOM.code_RC4': 'RC4加解密 密钥[KEY] 文本[TEXT]',
                'DannyDevCOM.code_base64_en': 'base64编码文本[TEXT]',
                'DannyDevCOM.code_base64_de': 'base64解码文本[TEXT]',
                'DannyDevCOM.code_base58_en': 'base58编码文本[TEXT]',
                'DannyDevCOM.code_base58_de': 'base58解码码文本[TEXT]',
                'DannyDevCOM.code_base_custom_en': '自定义base加密 字符集[ALPHABET] 文本[TEXT]',
                'DannyDevCOM.code_base_custom_de': '自定义base解密 字符集[ALPHABET] 文本[TEXT]',
                'DannyDevCOM.str': '字符串',
                'DannyDevCOM.int': '整数',
                'DannyDevCOM.float': '浮点数',
                'DannyDevCOM.list': '列表',
                'DannyDevCOM.logic': '逻辑',
                'DannyDevCOM.json_create': '创建json 载入[json_] 并返回id',
                'DannyDevCOM.json_load': '载入json id[id]json[json_]',
                'DannyDevCOM.json_get_all_item': '获取json id[id]中所有属性名',
                'DannyDevCOM.json_add_from_id': '将id[_id]对应的json加入json/改变值 id[id] 属性名[name]',
                'DannyDevCOM.json_add': '加入/改变对象到json id[id]类型[type]属性名[name]内容[TEXT]',
                'DannyDevCOM.json_get_item': '获取json id [id]中某属性名为[name]项的值',
                'DannyDevCOM.json_del_item': '删除json id [id]中某属性名为[name]项的值',
                'DannyDevCOM.json_get': '获取json id[id]',
                'DannyDevCOM.json_destroy': '销毁json id[id]',
                'DannyDevCOM.help': '使用帮助',
                'DannyDevCOM.help.t': 'http访问出现fail to load XX可能是域名/ip不存在，也有可能是出现跨域问题，可以联系本站站住修改HTTP协议头或者自行修改浏览器跨域设置。如果ws无法发送数据，请F12打开开发者工具查看是否报错，如果报错则是无法连接，目前浏览器还不支持侦察此类报错。更多帮助请进入 https://gitee.com/ausx/scCOM',
            },
            en: {
                'DannyDevCOM.extensionName': 'AUSのcommunication',
                'DannyDevCOM.tit1': 'communication',
                'DannyDevCOM.tit1.1': 'http',
                'DannyDevCOM.tit1.2': 'WebSocket',
                'DannyDevCOM.tit2': '数据处理',
                'DannyDevCOM.tit2': 'solve data',
                'DannyDevCOM.tit3': 'JSON',
                'DannyDevCOM.http': 'http access[g_way]to[site]parameter[p]send[body]',
                'DannyDevCOM.http_pm': 'URL Parameter Construction id [id] (Create/Modify) Name [name] Content [text]',
                'DannyDevCOM.http_pm_des': 'Destroy URL parameter structure [id]',
                'DannyDevCOM.wsocket_create': 'ws.create websocket,protocol', 'DannyDevCOM.wsocket_connect': 'id[id]websocket connect[host]',
                'DannyDevCOM.wsocket_send': 'ws.send id[id] data[text]',
                'DannyDevCOM.wsocket_recv': 'ws.recv id [id]',
                'DannyDevCOM.wsocket_conclose': 'ws.When connection closed id[id]',
                'DannyDevCOM.wsocket_close': 'ws.destroy socket id[id]',
                'DannyDevCOM.socket_ sreate ': 'sock. Create [yi] method [method] and return ID',
                'DannyDevCOM.socket_create_chk': 'sock.create successfully[ccid]？',
                'DannyDevCOM.socket_ recv': 'sock. Received data ID [id] ',
                'DannyDevCOM.socket_ send': 'sock. Send data ID [id] data [text] ',
                'DannyDevCOM.socket_ close ': 'sock. Connection closing ID [id]',
                'DannyDevCOM.socket_ connect': 'sock. Connect to/start server ID [id] IP [ip] ,buff[buff]',
                'DannyDevCOM.socket_breakev': 'sock.break connection off id[id]ip[ip]',
                'DannyDevCOM.socket_ close': 'sock. Destroy the socket object ID [id] ',
                'DannyDevCOM.socket_ parse ': 'sock. Parse the returned data [data] attribute [type]',
                'DannyDevCOM.socket_opchk': 'sock.run operation successfully[cid]？',
                'DannyDevCOM.code_RC4': 'RC4 KEY[KEY] TEXT[TEXT]',
                'DannyDevCOM.code_base64_en': 'base64 encoding[TEXT]',
                'DannyDevCOM.code_base64_de': 'base64 decoding[TEXT]',
                'DannyDevCOM.code_base58_en': 'base58 encoding[TEXT]',
                'DannyDevCOM.code_base58_de': 'base58 decoding[TEXT]',
                'DannyDevCOM.code_base_custom_en': 'Custom base encryption,ALPHABET[ALPHABET] TEXT[TEXT]',
                'DannyDevCOM.code_base_custom_de': 'Custom base decryption,ALPHABET[ALPHABET] TEXT[TEXT]',
                'DannyDevCOM.str': 'string',
                'DannyDevCOM.int': 'int',
                'DannyDevCOM.float': 'float',
                'DannyDevCOM.list': 'list',
                'DannyDevCOM.logic': 'logic',
                'DannyDevCOM.json_create': 'create json,load[json_] and return id',
                'DannyDevCOM.json_load': ' load json id[id]json[json_]',
                'DannyDevCOM.json_get_all_item': 'get all attribute name of json id[id]',
                'DannyDevCOM.json_add_from_id': 'Add the JSON corresponding to ID [_id] to JSON/change a value ID [id] attribute name [name]',
                'DannyDevCOM.json_add': 'Add object/change a value to JSON ID [id], type [type], attribute name [name], content [TEXT]',
                'DannyDevCOM.json_get_item': 'Get the value of an attribute named [name] in JSON ID [id]',
                'DannyDevCOM.json_del_item': 'Delete the value of an attribute named [name] in JSON ID [ID]',
                'DannyDevCOM.json_get': 'get json id[id]',
                'DannyDevCOM.json_destroy': 'destroy json id[id]',
                'DannyDevCOM.help': 'help',
                'DannyDevCOM.help.t': "If the http access fails to load XX, it may be that the domain name/ip does not exist, or it may be a cross domain problem. You can contact our website to modify the HTTP protocol header or modify the browser's cross domain settings. If ws is unable to send data, please F12 open the developer tool to check whether an error is reported. If an error is reported, the connection cannot be made. At present, the browser does not support detecting such errors. For more help, please go to https://gitee.com/ausx/scCOM",
            },
        })
        window.DannyDevCOM = { 'wsrecv_': [], 'wsnotalive_': [], 'json_list': [], 'wsock': [], 'http_pm_': [] }
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
            id: 'DannyDevNet', // 拓展id
            name: this.formatMessage('DannyDevCOM.extensionName'), // 拓展名
            color1: '#FF8383',
            blocks: [
                "---" + this.formatMessage("DannyDevCOM.tit1"),
                "---" + this.formatMessage("DannyDevCOM.tit1.1"),
                {
                    opcode: 'http',
                    blockType: 'reporter',
                    text: this.formatMessage('DannyDevCOM.http'),
                    arguments: {
                        g_way: {
                            type: 'string',
                            menu: 'HTTP_method'
                        },
                        site: {
                            type: 'string',
                            defaultValue: '/'
                        },
                        p: {
                            type: 'string',
                            defaultValue: 'None'
                        },
                        body: {
                            type: 'string',
                            defaultValue: ' '
                        },
                    }
                },
                {
                    opcode: 'http_pm_cm',
                    blockType: BlockType.COMMAND,
                    text: this.formatMessage('DannyDevCOM.http_pm'),
                    arguments: {
                        id: {
                            type: 'string',
                            defaultValue: '1'
                        },
                        name: {
                            type: 'string',
                            defaultValue: 'a'
                        },
                        text: {
                            type: 'string',
                            defaultValue: 'b'
                        },
                    }
                },
                {
                    opcode: 'http_pm_des',
                    blockType: BlockType.COMMAND,
                    text: this.formatMessage('DannyDevCOM.http_pm_des'),
                    arguments: {
                        id: {
                            type: 'string',
                            defaultValue: '1'
                        }
                    },
                },
                "---" + this.formatMessage("DannyDevCOM.tit1.2"),
                {
                    opcode: 'ws_cre_sock',
                    blockType: 'reporter',
                    text: this.formatMessage('DannyDevCOM.wsocket_create'),
                    arguments: {
                        yi: {
                            type: 'string',
                            menu: 'ws_method'
                        },
                    }
                },
                {
                    opcode: 'ws_conn_sock',
                    blockType: 'Boolean',
                    text: this.formatMessage('DannyDevCOM.wsocket_connect'),
                    arguments: {
                        id: {
                            type: 'string',
                            defaultValue: '0'
                        },
                        host: {
                            type: 'string',
                            defaultValue: '0.0.0.0:1212/'
                        },
                    }
                },
                {
                    opcode: 'ws_recv',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.wsocket_recv'),
                    arguments: {
                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        }
                    },
                },
                {
                    opcode: 'ws_close',
                    blockType: BlockType.BOOLEAN,
                    text: this.formatMessage('DannyDevCOM.wsocket_conclose'),
                    arguments: {
                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        }
                    },
                },
                {
                    opcode: 'ws_destroy',
                    blockType: BlockType.COMMAND,
                    text: this.formatMessage('DannyDevCOM.wsocket_close'),
                    arguments: {
                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        }
                    },
                },
                {
                    opcode: 'ws_send',
                    blockType: BlockType.BOOLEAN,
                    text: this.formatMessage('DannyDevCOM.wsocket_send'),
                    arguments: {
                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        },
                        text: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    },
                },
                //         {
                //           opcode: 'sock_cre',
                //         blockType: BlockType.REPORTER,
                //       text: this.formatMessage('DannyDevCOM.socket_create'),
                //     arguments: {
                //
                //                      yi: {
                //                        type: ArgumentType.STRING,
                //                      menu: 'sock_yi'
                //                },
                //
                //                      method: {
                //                        type: ArgumentType.STRING,
                //                      menu: 'sock_method'
                //                },
                //              buff: {
                //                type: ArgumentType.STRING,
                //              defaultValue: ' '
                //        }
                //  },
                //},
                "---" + this.formatMessage("DannyDevCOM.tit2"),
                {
                    opcode: 'RC4_coding',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.code_RC4'),
                    arguments: {
                        KEY: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Danny'
                        },
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: '我来了'
                        }
                    },
                },
                {
                    opcode: 'b64encoding',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.code_base64_en'),
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Danny'
                        },
                    },

                },
                {
                    opcode: 'b64decoding',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.code_base64_de'),
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'RGFubnk='
                        },
                    },

                },
                {
                    opcode: 'b58encoding',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.code_base58_en'),
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Danny'
                        },
                    },

                },
                {
                    opcode: 'b58decoding',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.code_base58_de'),
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: '8iTbLRE'
                        },
                    },

                },
                {
                    opcode: 'bcostomencoding',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.code_base_custom_en'),
                    arguments: {
                        ALPHABET: {
                            type: ArgumentType.STRING,
                            defaultValue: '!@#$%^&*()'
                        },
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Danny'
                        },
                    },

                },
                {
                    opcode: 'bcostomdecoding',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.code_base_custom_de'),
                    arguments: {
                        ALPHABET: {
                            type: ArgumentType.STRING,
                            defaultValue: '!@#$%^&*()'
                        },
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: '#)$&)#%!$$#@'
                        },
                    },

                },

                "---" + this.formatMessage("DannyDevCOM.tit3"),
                {
                    opcode: 'json_create',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.json_create'),
                    arguments: {
                        json_: {
                            type: ArgumentType.STRING,
                            defaultValue: '{}'
                        },
                    },
                },
                {
                    opcode: 'json_load',
                    blockType: BlockType.BOOLEAN,
                    text: this.formatMessage('DannyDevCOM.json_load'),
                    arguments: {
                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        json_: {
                            type: ArgumentType.STRING,
                            defaultValue: '{}'
                        },
                    },
                },
                {
                    opcode: 'json_get_all_item',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.json_get_all_item'),
                    arguments: {
                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                    },
                },
                {
                    opcode: 'json_add_from_id',
                    blockType: BlockType.BOOLEAN,
                    text: this.formatMessage('DannyDevCOM.json_add_from_id'),
                    arguments: {
                        _id: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        name: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                    },
                },
                {
                    opcode: 'json_add',
                    blockType: BlockType.BOOLEAN,
                    text: this.formatMessage('DannyDevCOM.json_add'),
                    arguments: {

                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        type: {
                            type: ArgumentType.STRING,
                            menu: 'JSON_add'
                        },
                        name: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                    },
                },
                {
                    opcode: 'json_get_item',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.json_get_item'),
                    arguments: {

                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        name: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },

                    },
                },
                {
                    opcode: 'json_del_item',
                    blockType: BlockType.BOOLEAN,
                    text: this.formatMessage('DannyDevCOM.json_del_item'),
                    arguments: {

                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        name: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },

                    },
                },
                {
                    opcode: 'GETjson',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.json_get'),
                    arguments: {

                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                    }
                },
                {
                    opcode: 'DESTROYjson',
                    blockType: BlockType.BOOLEAN,
                    text: this.formatMessage('DannyDevCOM.json_destroy'),
                    arguments: {

                        id: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                    },
                },

                {
                    opcode: 'help',
                    blockType: BlockType.REPORTER,
                    text: this.formatMessage('DannyDevCOM.help') + 'ver 1.00B1',
                },

            ],
            menus: {
                HTTP_method: [
                    {
                        text: 'GET',
                        value: 'GET'
                    },
                    {
                        text: 'POST',
                        value: 'POST'
                    },
                    {
                        text: 'HEAD',
                        value: 'HEAD'
                    },
                    {
                        text: 'PUT',
                        value: 'PUT'
                    },
                    {
                        text: 'DELETE',
                        value: 'DELETE'
                    },
                    {
                        text: 'OPTIONS',
                        value: 'OPTIONS'
                    },
                ],
                ws_method: [
                    {
                        text: 'WS',
                        value: 'WS'
                    },
                    {
                        text: 'WSS',
                        value: 'WSS'
                    },
                ],
                JSON_add: [
                    {
                        text: this.formatMessage('DannyDevCOM.str'),
                        value: '0'
                    },
                    {
                        text: this.formatMessage('DannyDevCOM.int'),
                        value: '1'
                    },
                    {
                        text: this.formatMessage('DannyDevCOM.float'),
                        value: '2'
                    },
                    {
                        text: this.formatMessage('DannyDevCOM.list'),
                        value: '3'
                    },
                    {
                        text: this.formatMessage('DannyDevCOM.logic'),
                        value: '4'
                    },
                ],

                sock_yi: [
                    {
                        text: 'TCP',
                        value: '0'
                    },
                    {
                        text: 'UDP',
                        value: '1'
                    },
                ],
                sock_method: [
                    {
                        text: 'client',
                        value: '0'
                    },
                    {
                        text: 'server',
                        value: '1'
                    },
                ],
            }
        }
    }
    httpGet(theUrl, body, method) {
        try {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open(method, theUrl, false); // false 为同步请求
            xmlHttp.send(body);
            return xmlHttp.responseText;
        }
        catch (error) {
            return error
        }
    }

    http(args) {
        function get_p(p) {
            pt = '?'
            for (let i = 0, len = window.DannyDevCOM.http_pm_.length; i < len; i++) {
                if (window.DannyDevCOM.http_pm_[i]['id'] == String(p)) {
                    for (let i_ = 0, len_ = window.DannyDevCOM.http_pm_[i_].p.length; i_ < len_; i_++) {
                        if (i_ == 0) {
                            pt += window.DannyDevCOM.http_pm_[i].p[i_].name + '=' + window.DannyDevCOM.http_pm_[i].p[i_].value
                        }
                        else {
                            pt += '&' + window.DannyDevCOM.http_pm_[i].p[i_].name + '=' + window.DannyDevCOM.http_pm_[i].p[i_].value
                        }
                    }
                }
            }
            return pt
        }
        const { g_way, site, p, body } = args
        if (p == 'None') {
            return this.httpGet(site, body, g_way);
        }
        else {
            return this.httpGet(site + get_p(p), body, g_way);
        }

    }

    ws_cre_sock(args) {
        const { yi } = args
        if (yi == 'WS') {
            id = Date.now()
            window.DannyDevCOM.wsock.push({ 'id': String(id), 'ip': null, 'port': null, 'obj': null, 'way': 'WS' })
            return String(id)
        }
        if (yi == 'WSS') {
            id = Date.now()
            window.DannyDevCOM.wsock.push({ 'id': String(id), 'ip': null, 'port': null, 'obj': null, 'way': 'WSS' })
            return String(id)
        }
        return '未知协议'
    }
    ws_conn_sock(args) {
        const { id, host } = args
        console.log(id, host)
        for (let i = 0, len = window.DannyDevCOM.wsock.length; i < len; i++) {
            if (String(id) == window.DannyDevCOM.wsock[i]["id"]) {
                for (let i = 0, len = window.DannyDevCOM.wsrecv_.length; i < len; i++) {
                    if (String(id) == window.DannyDevCOM.wsrecv_[i]["id"]) {
                        delete window.DannyDevCOM.wsnotalive_[String(id)]
                    }
                }

                try {
                    window.DannyDevCOM.wsock[i]['obj'] = new WebSocket(window.DannyDevCOM.wsock[i]["way"] + '://' + host)
                    console.log(window.DannyDevCOM.wsock)
                    window.DannyDevCOM.wsock[i]['obj'].onmessage = function (evt) {

                        window.abc = evt.data
                        window.DannyDevCOM.wsrecv_.push({ 'id': window.DannyDevCOM.wsock[i]['id'], 'nr': evt.data })
                    }
                    window.DannyDevCOM.wsock[i]['obj'].onclose = function (evt) {
                        window.DannyDevCOM.wsnotalive_.push(window.DannyDevCOM.wsock[i]['id'])
                    }
                    return true
                }
                catch (error) {

                    return false
                }
            }
        }

        return false
    }
    ws_recv(args) {
        const { id } = args
        console.log(window.DannyDevCOM.wsrecv_)
        for (let i = 0, len = window.DannyDevCOM.wsrecv_.length; i < len; i++) {
            if (String(id) == window.DannyDevCOM.wsrecv_[i]["id"]) {
                console.log(window.DannyDevCOM.wsrecv_)
                try {
                    var a = String(window.DannyDevCOM.wsrecv_[i]["nr"])
                    window.DannyDevCOM.wsrecv_.splice(i, 1);
                    return a
                }
                catch (error) {

                    return ''
                }
            }
        }
        return false
    }
    ws_close(args) {
        const { id } = args
        for (let i = 0, len = window.DannyDevCOM.wsrecv_.length; i < len; i++) {
            if (String(id) == window.DannyDevCOM.wsrecv_[i]["id"]) {
                window.DannyDevCOM.wsnotalive_.splice(i, 1)
                return true
            }
        }
        return false
    }
    ws_destroy(args) {
        const { id } = args
        for (let i = 0, len = window.DannyDevCOM.wsock.length; i < len; i++) {
            console.log(window.DannyDevCOM.wsock[i])
            if (String(id) == window.DannyDevCOM.wsock[i]["id"]) {
                try {
                    if (window.DannyDevCOM.wsock[i]["obj"] == null) { }
                    else { window.DannyDevCOM.wsock[i]["obj"].close() }
                    window.DannyDevCOM.wsock.splice(i, 1);
                    // alert(window.DannyDevCOM.wsock)
                    return ''
                }
                catch (error) { console.log(error) }
            }
        }
    }
    ws_send(args) {
        const { id, text } = args
        for (let i = 0, len = window.DannyDevCOM.wsock.length; i < len; i++) {
            if (String(id) == window.DannyDevCOM.wsock[i]["id"]) {
                console.log(window.DannyDevCOM.wsrecv_)
                console.log(window.DannyDevCOM.wsock[i])

                try {
                    if (window.DannyDevCOM.wsock[i]["obj"] == null) { return false } else { window.DannyDevCOM.wsock[i]["obj"].send(text); return true }
                }
                catch (error) {

                    return false
                }
            }

        }

        return false
    }
    help() {
        return this.formatMessage('DannyDevCOM.help.t')
    }
    RC4_coding(args) {
        var key = ''
        var data = ''
        const { KEY, TEXT } = args
        key = String(KEY)
        data = String(TEXT)//对js不识别字符串进行处理
        var seq = Array(256); //如果有机会编译成离线可执行程序，会考虑支持AVX512
        var das = Array(data.length);
        for (var i = 0; i < 256; i++) {
            seq[i] = i;
            var j = (j + seq[i] + key.charCodeAt(i % key.length)) % 256;
            var temp = seq[i];
            seq[i] = seq[j];
            seq[j] = temp;
        }
        for (var i = 0; i < data.length; i++) {
            das[i] = data.charCodeAt(i)
        }
        for (var x = 0; x < das.length; x++) {
            var i = (i + 1) % 256;
            var j = (j + seq[i]) % 256;
            var temp = seq[i];
            seq[i] = seq[j];
            seq[j] = temp;
            var k = (seq[i] + (seq[j] % 256)) % 256;
            das[x] = String.fromCharCode(das[x] ^ seq[k]);
        }
        return das.join('');
    }
    b64encoding(args) {
        const { TEXT } = args
        return window.btoa(encodeURIComponent(String(TEXT))); // 编码
    }
    b64decoding(args) {
        const { TEXT } = args
        try {
            return decodeURIComponent(window.atob(String(TEXT))); // 解码
        }
        catch (error) {
            return error
        }
    }
    b58encoding(args) {
        const { TEXT } = args
        var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
        var ALPHABET_MAP = {};
        var BASE = 58;
        for (var i = 0; i < ALPHABET.length; i++) {
            ALPHABET_MAP[ALPHABET.charAt(i)] = i;
        }
        function ToUTF8(str) {
            var result = new Array();

            var k = 0;
            for (var i = 0; i < str.length; i++) {
                var j = encodeURI(str[i]);
                if (j.length == 1) {
                    // 未转换的字符
                    result[k++] = j.charCodeAt(0);
                } else {
                    // 转换成%XX形式的字符
                    var bytes = j.split("%");
                    for (var l = 1; l < bytes.length; l++) {
                        result[k++] = parseInt("0x" + bytes[l]);
                    }
                }
            }

            return result;
        }


        // 如果有特殊需求，要转成utf16，可以用以下函数
        function ToUTF16(str) {
            var result = new Array();

            var k = 0;
            for (var i = 0; i < str.length; i++) {
                var j = str[i].charCodeAt(0);
                result[k++] = j & 0xFF;
                result[k++] = j >> 8;
            }

            return result;
        }
        // 传进已经转成字节的数组 -->buffer(utf8格式) 
        function encode(buffer) {
            if (buffer.length === 0) return '';
            var i,
                j,
                digits = [0];
            for (i = 0; i < buffer.length; i++) {
                for (j = 0; j < digits.length; j++) {
                    digits[j] <<= 8;
                }
                digits[0] += buffer[i];
                var carry = 0;
                for (j = 0; j < digits.length; ++j) {
                    digits[j] += carry;
                    carry = (digits[j] / BASE) | 0;
                    digits[j] %= BASE;
                }
                while (carry) {
                    digits.push(carry % BASE);
                    carry = (carry / BASE) | 0;
                }
            }
            // deal with leading zeros
            for (i = 0; buffer[i] === 0 && i < buffer.length - 1; i++) digits.push(0);
            return digits
                .reverse()
                .map(function (digit) {
                    return ALPHABET[digit];
                })
                .join('');
        }


        return encode(ToUTF8(String(TEXT)))
    }
    b58decoding(args) {
        const { TEXT } = args
        var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
        var ALPHABET_MAP = {};
        var BASE = 58;
        for (var i = 0; i < ALPHABET.length; i++) {
            ALPHABET_MAP[ALPHABET.charAt(i)] = i;
        }
        function decode(string) {
            if (string.length === 0) return [];
            var i,
                j,
                bytes = [0];
            for (i = 0; i < string.length; i++) {
                var c = string[i];
                // c是不是ALPHABET_MAP的key 
                if (!(c in ALPHABET_MAP)) throw new Error('Non-base58 character');
                for (j = 0; j < bytes.length; j++) bytes[j] *= BASE;
                bytes[0] += ALPHABET_MAP[c];
                var carry = 0;
                for (j = 0; j < bytes.length; ++j) {
                    bytes[j] += carry;
                    carry = bytes[j] >> 8;
                    // 0xff --> 11111111
                    bytes[j] &= 0xff;
                }
                while (carry) {
                    bytes.push(carry & 0xff);
                    carry >>= 8;
                }
            }
            for (i = 0; string[i] === '1' && i < string.length - 1; i++) bytes.push(0);
            return bytes.reverse();
        }

        function byteToString(arr) {
            if (typeof arr === 'string') {
                return arr;
            }
            var str = '',
                _arr = arr;
            for (var i = 0; i < _arr.length; i++) {
                // 数组中每个数字转为二进制 匹配出开头为1的直到0的字符
                // eg:123-->"1111011"-->{0:"1111",groups: undefined, index: 0, input: "1111011"}
                var one = _arr[i].toString(2),
                    v = one.match(/^1+?(?=0)/);
                if (v && one.length == 8) {
                    var bytesLength = v[0].length;
                    var store = _arr[i].toString(2).slice(7 - bytesLength);
                    for (var st = 1; st < bytesLength; st++) {
                        store += _arr[st + i].toString(2).slice(2);
                    }
                    str += String.fromCharCode(parseInt(store, 2));
                    i += bytesLength - 1;
                } else {
                    str += String.fromCharCode(_arr[i]);
                }
            }
            return str;
        }
        return byteToString(decode(String(TEXT)))
    }
    bcostomencoding(args) {
        const { ALPHABET, TEXT } = args
        var ALPHABET_MAP = {};
        var BASE = ALPHABET.length;
        for (var i = 0; i < ALPHABET.length; i++) {
            ALPHABET_MAP[ALPHABET.charAt(i)] = i;
        }
        function ToUTF8(str) {
            var result = new Array();

            var k = 0;
            for (var i = 0; i < str.length; i++) {
                var j = encodeURI(str[i]);
                if (j.length == 1) {
                    // 未转换的字符
                    result[k++] = j.charCodeAt(0);
                } else {
                    // 转换成%XX形式的字符
                    var bytes = j.split("%");
                    for (var l = 1; l < bytes.length; l++) {
                        result[k++] = parseInt("0x" + bytes[l]);
                    }
                }
            }

            return result;
        }


        // 如果有特殊需求，要转成utf16，可以用以下函数
        function ToUTF16(str) {
            var result = new Array();

            var k = 0;
            for (var i = 0; i < str.length; i++) {
                var j = str[i].charCodeAt(0);
                result[k++] = j & 0xFF;
                result[k++] = j >> 8;
            }

            return result;
        }
        // 传进已经转成字节的数组 -->buffer(utf8格式) 
        function encode(buffer) {
            if (buffer.length === 0) return '';
            var i,
                j,
                digits = [0];
            for (i = 0; i < buffer.length; i++) {
                for (j = 0; j < digits.length; j++) {
                    digits[j] <<= 8;
                }
                digits[0] += buffer[i];
                var carry = 0;
                for (j = 0; j < digits.length; ++j) {
                    digits[j] += carry;
                    carry = (digits[j] / BASE) | 0;
                    digits[j] %= BASE;
                }
                while (carry) {
                    digits.push(carry % BASE);
                    carry = (carry / BASE) | 0;
                }
            }
            // deal with leading zeros
            for (i = 0; buffer[i] === 0 && i < buffer.length - 1; i++) digits.push(0);
            return digits
                .reverse()
                .map(function (digit) {
                    return ALPHABET[digit];
                })
                .join('');
        }


        return encode(ToUTF8(String(TEXT)))
    }
    bcostomdecoding(args) {
        const { ALPHABET, TEXT } = args
        var ALPHABET_MAP = {};
        var BASE = ALPHABET.length;
        for (var i = 0; i < ALPHABET.length; i++) {
            ALPHABET_MAP[ALPHABET.charAt(i)] = i;
        }
        function decode(string) {
            if (string.length === 0) return [];
            var i,
                j,
                bytes = [0];
            for (i = 0; i < string.length; i++) {
                var c = string[i];
                // c是不是ALPHABET_MAP的key 
                if (!(c in ALPHABET_MAP)) throw new Error('Non-base58 character');
                for (j = 0; j < bytes.length; j++) bytes[j] *= BASE;
                bytes[0] += ALPHABET_MAP[c];
                var carry = 0;
                for (j = 0; j < bytes.length; ++j) {
                    bytes[j] += carry;
                    carry = bytes[j] >> 8;
                    // 0xff --> 11111111
                    bytes[j] &= 0xff;
                }
                while (carry) {
                    bytes.push(carry & 0xff);
                    carry >>= 8;
                }
            }
            for (i = 0; string[i] === '1' && i < string.length - 1; i++) bytes.push(0);
            return bytes.reverse();
        }

        function byteToString(arr) {
            if (typeof arr === 'string') {
                return arr;
            }
            var str = '',
                _arr = arr;
            for (var i = 0; i < _arr.length; i++) {
                // 数组中每个数字转为二进制 匹配出开头为1的直到0的字符
                // eg:123-->"1111011"-->{0:"1111",groups: undefined, index: 0, input: "1111011"}
                var one = _arr[i].toString(2),
                    v = one.match(/^1+?(?=0)/);
                if (v && one.length == 8) {
                    var bytesLength = v[0].length;
                    var store = _arr[i].toString(2).slice(7 - bytesLength);
                    for (var st = 1; st < bytesLength; st++) {
                        store += _arr[st + i].toString(2).slice(2);
                    }
                    str += String.fromCharCode(parseInt(store, 2));
                    i += bytesLength - 1;
                } else {
                    str += String.fromCharCode(_arr[i]);
                }
            }
            return str;
        }
        return byteToString(decode(String(TEXT)))
    }
    json_create(args) {
        const { json_ } = args
        function create(j) {
            id = Date.now()
            a = {}
            try {
                a = JSON.parse(j)
            }
            catch (error) { }
            window.DannyDevCOM.json_list.push({ 'id': String(id), 'json': a })
            return id
        }
        return create(json_)

    }
    json_load(args) {
        const { id, json_ } = args
        function load(id, j) {
            var a = {}
            try {
                a = JSON.parse(j)
                for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
                    if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                        window.DannyDevCOM.json_list[i]['json'] = a
                        return true
                    }
                }
            }
            catch (error) { return false }
            return false

        }
        return load(id, json_)
    }
    json_get_all_item(args) {
        const { id } = args
        var b = []
        try {
            for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
                if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                    b = Object.keys(window.DannyDevCOM.json_list[i]['json'])
                }
            }
        }
        catch (error) { b = [] }
        var d = ''
        for (let c of b) {
            if (c == b[-1]) {
                d += c
            }
            else {
                d += c + ' '
            }
        }

        return d
    }
    check(id) {
        for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
            if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                return true
            }
        }
        return false
    }
    getjson(id) {
        for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
            if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                return window.DannyDevCOM.json_list[i]['json']
            }
        }
        return {}
    }
    json_add_from_id(args) {
        const { _id, id, name } = args
        function check(id) {
            for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
                if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                    return true
                }
            }
            return false
        }
        function getjson(id) {
            for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
                if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                    return window.DannyDevCOM.json_list[i]['json']
                }
            }
            return {}
        }
        function add_item_from_id(id, id1, name) {
            if (check(id) & check(id1)) {
                for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
                    if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                        window.DannyDevCOM.json_list[i]['json'][name] = getjson(id1)
                        return true
                    }
                }
            }
            else { return false }
            return false
        }
        return add_item_from_id(id, _id, name)
    }
    json_add(args) {
        const { id, type, name, TEXT } = args
        function check(id) {
            for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
                if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                    return true
                }
            }
            return false
        }
        function getjson(id) {
            for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
                if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                    return window.DannyDevCOM.json_list[i]['json']
                }
            }
            return {}
        }
        function add_item(id, name, type, content) {
            if (check(id)) {
                for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
                    if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                        if (type == '0') {//字符串
                            window.DannyDevCOM.json_list[i]['json'][String(name)] = String(content)
                            return true
                        }
                        if (type == '1') {//整数
                            window.DannyDevCOM.json_list[i]['json'][String(name)] = parseInt(content)
                            return true
                        }
                        if (type == '2') {//浮点数
                            window.DannyDevCOM.json_list[i]['json'][String(name)] = parseFloat(content)
                            return true
                        }
                        if (type == '3') {//列表
                            window.DannyDevCOM.json_list[i]['json'][String(name)] = content.split(' ')
                            return true
                        }
                        if (type == '4') {//逻辑
                            if (String(content) == 'true') {
                                window.DannyDevCOM.json_list[i]['json'][String(name)] = true
                                return true
                            }
                            else {
                                window.DannyDevCOM.json_list[i]['json'][String(name)] = false
                                return true
                            }
                        }

                    }
                }

            }
            return false
        }
        return add_item(id, name, type, TEXT)
    }
    GETjson(args) {
        const { id } = args
        for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
            if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                return JSON.stringify(window.DannyDevCOM.json_list[i]['json'])
            }
        }
        return ''
    }
    DESTROYjson(args) {
        const { id } = args
        for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
            if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                window.DannyDevCOM.json_list.splice(i, 1);
                return true
            }
        }
        return false
    }
    json_get_item(args) { //
        const { id, name } = args
        try {
            for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
                if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                    if (typeof (window.DannyDevCOM.json_list[i]['json'][name]) == 'string') { //id_0 字符串
                        return window.DannyDevCOM.json_list[i]['json'][name]
                    }
                    if (typeof (window.DannyDevCOM.json_list[i]['json'][name]) == 'number') { //id_1&2 整数&浮点
                        return window.DannyDevCOM.json_list[i]['json'][name]
                    }
                    if (window.DannyDevCOM.json_list[i]['json'][name] instanceof Array) { //id_4列表
                        var a = ''
                        for (let i_ = 0, len = window.DannyDevCOM.json_list[i]['json'][name].length; i_ < len; i_++) {
                            if (i_ == window.DannyDevCOM.json_list[i]['json'][name].length) {
                                a += window.DannyDevCOM.json_list[i]['json'][name][i]
                            }
                            else {
                                a += window.DannyDevCOM.json_list[i]['json'][name][i] + ' '
                            }
                        }
                    }
                    if (typeof (window.DannyDevCOM.json_list[i]['json'][name]) == 'boolean') { // id_4 逻辑
                        return window.DannyDevCOM.json_list[i]['json'][name]
                    }

                }
            }
        } catch { }
        return ''
    }
    json_del_item(args) { //删除项
        const { id, name } = args
        try {
            for (let i = 0, len = window.DannyDevCOM.json_list.length; i < len; i++) {
                if (window.DannyDevCOM.json_list[i]['id'] == String(id)) {
                    Reflect.deleteProperty(window.DannyDevCOM.json_list[i]['json'], String(name))
                    return true
                }
            }
        } catch { }
        return false
    }
    _ws(host, data) {
        id = this.ws_conn_sock({ 'id': 'WS', 'host': host })
        this.ws_send({ 'id': id, 'text': data })
        recv = this.ws_recv({ 'id': id })
        for (; ;) { if (recv != '') { break } }
        return recv
    }

    sock_cre(args) {
        const { yi, method } = args
        j = JSON.parse(this._ws('127.0.0.1:23089/socket/create', JSON.stringify({ 'yi': yi, 'method': method })))
        return j['id']

    }
    http_pm_cm(args) {
        const { id, name, text } = args
        let a = false
        for (let i = 0, len = window.DannyDevCOM.http_pm_.length; i < len; i++) {
            if (window.DannyDevCOM.http_pm_[i]['id'] == String(id)) {
                a = true
            }
        }
        if (a) { } else { window.DannyDevCOM.http_pm_.push({ 'id': String(id), 'p': [] }) }
        for (let i = 0, len = window.DannyDevCOM.http_pm_.length; i < len; i++) {
            if (window.DannyDevCOM.http_pm_[i]['id'] == String(id)) {
                for (let i_ = 0, len_ = window.DannyDevCOM.http_pm_[i]['p'].length; i_ < len_; i_++) {
                    if (window.DannyDevCOM.http_pm_[i]['p'][i_].name == name) {
                        window.DannyDevCOM.http_pm_[i]['p'][i_].value = text
                        return ''
                    }
                }
                window.DannyDevCOM.http_pm_[i]['p'].push({ "name": name, 'value': text })
            }
        }
    }
    http_pm_des(args) {
        const { id } = args
        try {
            for (let i = 0, len = window.DannyDevCOM.http_pm_.length; i < len; i++) {
                if (window.DannyDevCOM.http_pm_[i]['id'] == String(id)) {
                    window.DannyDevCOM.http_pm_.splice(i, 1)
                    return
                }
            }
        }
        catch (error) { }
    }
}

window.tempExt = {
    Extension: AuEx_Communication,
    info: {
        name: 'DannyDevNet.extensionName',
        description: 'DannyDevNet.description',
        extensionId: 'DannyDevNet',
        iconURL: "data:image/png;base64,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",
        insetIconURL: "data:image/png;base64,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",
        featured: true,
        disabled: false,
        collaborator: 'only for hcn test',
    },
    l10n: {
        'zh-cn': {
            'DannyDevNet.extensionName': 'AUSの通讯模块',
            'DannyDevNet.description': 'AUSの通讯与编解码',
        },
        en: {
            'DannyDevNet.extensionName': 'AUSのcommunication',
            'DannyDevNet.description': 'AUSのcommunication and en/decode',
        },
    },
}
