import { GandiExtension, BlockUtil, ArgumentType, ReporterScope, BlockType } from '@cocrea/extension-kit'
import { extensionId } from './extInfo'
import zhCn from "./l10n/zh-cn.json";
import en from "./l10n/en.json";
import cover from "./assets/cover.png";
import blockIcon from "./assets/icon.png";
var DannyDevCOM = { 'wsrecv_': [], 'wsnotalive_': [], 'json_list': [], 'wsock': [], 'http_pm_': [], 'http_header': [] }
export default class DannyDEVCOMM extends GandiExtension {
  get extensionId(): string {

    return extensionId;
  }

  get localization() {
    return {
      'zh-cn': zhCn,
      'en': en,
    };
  }

  get documentURL(): string {
    return 'https://www.ccw.site/post/1424d473-f1a4-4268-86dd-8f4de4d6592f';
  }

  get menuIconURI(): string {
    return blockIcon;
  }

  get blockIconURI(): string {
    return blockIcon;
  }

  get coverURI(): string {
    return cover;
  }

  get authorInfo() {
    return {
      labelName: 'Danny & YUEN',  //作者显示名称
      username: 'DannyDev', //用户名
      homepage: 'https://www.ccw.site/student/5c4b101db73fd8498278630c', //主页
      email: '3414034955@qq.com' //邮箱
    };
  }
  init() {

    //menus
    const HTTP_method = BlockUtil.createMenu('HTTP_method');
    HTTP_method.items.push({ text: 'GET', value: 'GET' });
    HTTP_method.items.push({ text: 'POST', value: 'POST' });
    HTTP_method.items.push({ text: 'HEAD', value: 'HEAD' });
    HTTP_method.items.push({ text: 'PUT', value: 'PUT' });
    HTTP_method.items.push({ text: 'DELETE', value: 'DELETE' });
    HTTP_method.items.push({ text: 'OPTIONS', value: 'OPTIONS' });
    const ws_method = BlockUtil.createMenu('ws_method');
    ws_method.items.push({ text: 'WS', value: 'WS' });
    ws_method.items.push({ text: 'WSS', value: 'WSS' });
    const JSON_add = BlockUtil.createMenu('JSON_add');
    JSON_add.items.push({ text: 'STRING', value: '0' });
    JSON_add.items.push({ text: 'INT', value: '1' });
    JSON_add.items.push({ text: 'FLOAT', value: '2' });
    JSON_add.items.push({ text: 'LIST', value: '3' });
    JSON_add.items.push({ text: 'LOGIC', value: '4' });
    const sock_yi = BlockUtil.createMenu('sock_yi');
    sock_yi.items.push({ text: 'TCP', value: '0' });
    sock_yi.items.push({ text: 'UDP', value: '1' });
    const sock_method = BlockUtil.createMenu('sock_method');
    sock_method.items.push({ text: 'client', value: '0' });
    sock_method.items.push({ text: 'server', value: '1' });
    const data_solve = BlockUtil.createMenu('data_solve');
    data_solve.items.push({ text: 'Nothing', value: '0' });
    data_solve.items.push({ text: 'Download', value: '1' });
    data_solve.items.push({ text: 'data_solvejson', value: '2' });
    const srew = BlockUtil.createMenu('srew');
    srew.items.push({ text: 'ip', value: '0' });
    srew.items.push({ text: 'port', value: '1' });
    srew.items.push({ text: 'data', value: '2' });
    srew.items.push({ text: 'op', value: '3' });
    //blocks
    this.addTextLabel('DannyDevCOM.tit1')
    this.addTextLabel('DannyDevCOM.tit1.1')

    const http = BlockUtil.createReporter();
    http.setReporterScope(ReporterScope.TARGET)
    http.setOpcode('http')
    http.setText('DannyDevCOM.http')
    const g_way = BlockUtil.createArgument(ArgumentType.STRING, 'GET', HTTP_method);
    const site = BlockUtil.createArgument(ArgumentType.STRING, '/')
    const p = BlockUtil.createArgument(ArgumentType.STRING, 'None')
    const header = BlockUtil.createArgument(ArgumentType.STRING, '1')
    const body = BlockUtil.createArgument(ArgumentType.STRING, ' ')
    const after = BlockUtil.createArgument(ArgumentType.STRING, '0', data_solve)
    http.setArguments({ g_way, site, p, header, body, after })
    this.addBlock(http)

    const http_pm_cm = BlockUtil.createCommand();
    http_pm_cm.setOpcode('http_pm_cm')
    http_pm_cm.setText('DannyDevCOM.http_pm')
    let id = BlockUtil.createArgument(ArgumentType.STRING, '1');
    let name = BlockUtil.createArgument(ArgumentType.STRING, 'a')
    const text = BlockUtil.createArgument(ArgumentType.STRING, 'b')
    http_pm_cm.setArguments({ id, name, text })
    this.addBlock(http_pm_cm)

    const http_pm_des = BlockUtil.createCommand();
    http_pm_des.setOpcode('http_pm_des')
    http_pm_des.setText('DannyDevCOM.http_pm_des')
    http_pm_des.setArguments({ id })
    this.addBlock(http_pm_des)

    const http_header_cm = BlockUtil.createCommand();
    http_header_cm.setOpcode('http_header_cm')
    http_header_cm.setText('DannyDevCOM.http_header')
    http_header_cm.setArguments({ id, name, text })
    this.addBlock(http_header_cm)

    const http_header_des = BlockUtil.createCommand();
    http_header_des.setOpcode('http_header_des')
    http_header_des.setText('DannyDevCOM.http_header_des')
    http_header_des.setArguments({ id })
    this.addBlock(http_header_des)


    this.addTextLabel('DannyDevCOM.tit1.2')

    const ws_cre_sock = BlockUtil.createReporter();
    ws_cre_sock.setReporterScope(ReporterScope.TARGET)
    ws_cre_sock.setOpcode('ws_cre_sock')
    ws_cre_sock.setText('DannyDevCOM.wsocket_create')
    const yi = BlockUtil.createArgument(ArgumentType.STRING, 'WS', ws_method);
    ws_cre_sock.setArguments({ yi })
    this.addBlock(ws_cre_sock)

    const ws_conn_sock = BlockUtil.createBool();
    ws_conn_sock.setReporterScope(ReporterScope.TARGET)
    ws_conn_sock.setOpcode('ws_conn_sock')
    ws_conn_sock.setText('DannyDevCOM.wsocket_connect')
    const host = BlockUtil.createArgument(ArgumentType.STRING, ' ')
    const timeout = BlockUtil.createArgument(ArgumentType.STRING, '3000')
    ws_conn_sock.setArguments({ id, host, timeout })
    this.addBlock(ws_conn_sock)

    const ws_check_sock = BlockUtil.createReporter();
    ws_check_sock.setReporterScope(ReporterScope.TARGET)
    ws_check_sock.setOpcode('ws_check_sock')
    ws_check_sock.setText('DannyDevCOM.wsocket_check')
    ws_check_sock.setArguments({ id })
    this.addBlock(ws_check_sock)

    const ws_send = BlockUtil.createBool();
    ws_send.setReporterScope(ReporterScope.TARGET)
    ws_send.setOpcode('ws_send')
    ws_send.setText('DannyDevCOM.wsocket_send')
    ws_send.setArguments({ id, text })
    this.addBlock(ws_send)

    const ws_recv = BlockUtil.createReporter();
    ws_recv.setReporterScope(ReporterScope.TARGET)
    ws_recv.setOpcode('ws_recv')
    ws_recv.setText('DannyDevCOM.wsocket_recv')
    ws_recv.setArguments({ id })
    this.addBlock(ws_recv)

    const ws_close = BlockUtil.createReporter();
    ws_close.setReporterScope(ReporterScope.TARGET)
    ws_close.setOpcode('ws_close')
    ws_close.setText('DannyDevCOM.wsocket_conclose')
    ws_close.setArguments({ id })
    this.addBlock(ws_close)

    const ws_destroy = BlockUtil.createCommand();
    ws_destroy.setOpcode('ws_destroy')
    ws_destroy.setText('DannyDevCOM.wsocket_close')
    ws_destroy.setArguments({ id })
    this.addBlock(ws_destroy)

    this.addTextLabel('DannyDevCOM.tit1.3')

    const socket_create = BlockUtil.createReporter();
    socket_create.setOpcode('create_socket')
    socket_create.setText('DannyDevCOM.socket_create')
    socket_create.setArguments({ yi:BlockUtil.createArgument(ArgumentType.STRING,'0',sock_yi),method:BlockUtil.createArgument(ArgumentType.STRING,'0',sock_method) })
    this.addBlock(socket_create)

    const socket_connect = BlockUtil.createBool();
    socket_connect.setOpcode('conn_socket')
    socket_connect.setText('DannyDevCOM.socket_connect')
    let ip= BlockUtil.createArgument(ArgumentType.STRING,' ')
    let port=BlockUtil.createArgument(ArgumentType.STRING,'0')
    let buff=BlockUtil.createArgument(ArgumentType.STRING,'3000')
    socket_connect.setArguments({id,ip,port,buff})
    this.addBlock(socket_connect)
    
    const socket_send = BlockUtil.createBool();
    socket_send.setOpcode('send_socket')
    socket_send.setText('DannyDevCOM.socket_send')
    let data=BlockUtil.createArgument(ArgumentType.STRING,'3000')
    socket_send.setArguments({id,ip,port,data})
    this.addBlock(socket_send)

    const socket_recv = BlockUtil.createReporter();
    socket_recv.setOpcode('recv_socket')
    socket_recv.setText('DannyDevCOM.socket_recv')
    socket_recv.setArguments({id})
    this.addBlock(socket_recv)

    const socket_parse = BlockUtil.createReporter();
    socket_parse.setOpcode('solve_socket')
    socket_parse.setText('DannyDevCOM.socket_parse')
    socket_parse.setArguments({data,type:BlockUtil.createArgument(ArgumentType.STRING,'0',srew)})
    this.addBlock(socket_parse)
    
    const socket_conclose = BlockUtil.createBool();
    socket_conclose.setOpcode('clsconn_socket')
    socket_conclose.setText('DannyDevCOM.socket_conclose')
    socket_conclose.setArguments({id})
    this.addBlock(socket_conclose)    

    const socket_close = BlockUtil.createCommand();
    socket_close.setOpcode('des_socket')
    socket_close.setText('DannyDevCOM.socket_conclose')
    socket_close.setArguments({id})
    this.addBlock(socket_close)


    this.addTextLabel('DannyDevCOM.tit2')

    const RC4_coding = BlockUtil.createReporter();
    RC4_coding.setReporterScope(ReporterScope.TARGET)
    RC4_coding.setOpcode('RC4_coding')
    RC4_coding.setText('DannyDevCOM.code_RC4')
    const key = BlockUtil.createArgument(ArgumentType.STRING, 'Danny')
    let TEXT = BlockUtil.createArgument(ArgumentType.STRING, 'Danny')
    RC4_coding.setArguments({ KEY: key, TEXT })
    this.addBlock(RC4_coding)

    const b64encoding = BlockUtil.createReporter();
    b64encoding.setReporterScope(ReporterScope.TARGET)
    b64encoding.setOpcode('b64encoding')
    b64encoding.setText('DannyDevCOM.code_base64_en')
    TEXT = BlockUtil.createArgument(ArgumentType.STRING, 'abcd')
    b64encoding.setArguments({ key, TEXT })
    this.addBlock(b64encoding)

    const b64decoding = BlockUtil.createReporter();
    b64decoding.setReporterScope(ReporterScope.TARGET)
    b64decoding.setOpcode('b64decoding')
    b64decoding.setText('DannyDevCOM.code_base64_de')
    TEXT = BlockUtil.createArgument(ArgumentType.STRING, 'RGFubnk=')
    b64decoding.setArguments({ key, TEXT })
    this.addBlock(b64decoding)

    const b58encoding = BlockUtil.createReporter();
    b58encoding.setReporterScope(ReporterScope.TARGET)
    b58encoding.setOpcode('b58encoding')
    b58encoding.setText('DannyDevCOM.code_base58_en')
    TEXT = BlockUtil.createArgument(ArgumentType.STRING, 'Danny')
    b58encoding.setArguments({ key, TEXT })
    this.addBlock(b58encoding)

    const b58decoding = BlockUtil.createReporter();
    b58decoding.setReporterScope(ReporterScope.TARGET)
    b58decoding.setOpcode('b58decoding')
    b58decoding.setText('DannyDevCOM.code_base58_de')
    TEXT = BlockUtil.createArgument(ArgumentType.STRING, '8iTbLRE')
    b58decoding.setArguments({ key, TEXT })
    this.addBlock(b58decoding)

    const bcostomencoding = BlockUtil.createReporter();
    bcostomencoding.setReporterScope(ReporterScope.TARGET)
    bcostomencoding.setOpcode('bcostomencoding')
    bcostomencoding.setText('DannyDevCOM.code_base_custom_en')
    TEXT = BlockUtil.createArgument(ArgumentType.STRING, 'Danny')
    const ALPHABET = BlockUtil.createArgument(ArgumentType.STRING, '!@#$%^&*()')
    bcostomencoding.setArguments({ ALPHABET, TEXT })
    this.addBlock(bcostomencoding)

    const bcostomdecoding = BlockUtil.createReporter();
    bcostomdecoding.setReporterScope(ReporterScope.TARGET)
    bcostomdecoding.setOpcode('bcostomdecoding')
    bcostomdecoding.setText('DannyDevCOM.code_base_custom_de')
    TEXT = BlockUtil.createArgument(ArgumentType.STRING, '#)$&)#%!$$#@')
    bcostomdecoding.setArguments({ ALPHABET, TEXT })
    this.addBlock(bcostomdecoding)

    this.addTextLabel('DannyDevCOM.tit3')

    const json_create = BlockUtil.createReporter();
    json_create.setReporterScope(ReporterScope.TARGET)
    json_create.setOpcode('json_create')
    json_create.setText('DannyDevCOM.json_create')
    let json_ = BlockUtil.createArgument(ArgumentType.STRING, ' ')
    json_create.setArguments({ json_ })
    this.addBlock(json_create)

    const json_load = BlockUtil.createReporter();
    json_load.setReporterScope(ReporterScope.TARGET)
    json_load.setOpcode('json_load')
    json_load.setText('DannyDevCOM.json_load')
    json_load.setArguments({ id, json_ })
    this.addBlock(json_load)

    const json_get_all_item = BlockUtil.createReporter();
    json_get_all_item.setReporterScope(ReporterScope.TARGET)
    json_get_all_item.setOpcode('json_get_all_item')
    json_get_all_item.setText('DannyDevCOM.json_get_all_item')
    json_get_all_item.setArguments({ id })
    this.addBlock(json_get_all_item)

    const json_add_from_id = BlockUtil.createBool();
    json_add_from_id.setReporterScope(ReporterScope.TARGET)
    json_add_from_id.setOpcode('json_add_from_id')
    json_add_from_id.setText('DannyDevCOM.json_add_from_id')
    let _id = BlockUtil.createArgument(ArgumentType.STRING, '2')
    json_add_from_id.setArguments({ _id, id, name })
    this.addBlock(json_add_from_id)

    const json_add_ = BlockUtil.createBool();
    json_add_.setReporterScope(ReporterScope.TARGET)
    json_add_.setOpcode('json_add')
    json_add_.setText('DannyDevCOM.json_add')
    TEXT = BlockUtil.createArgument(ArgumentType.STRING, '')
    let type = BlockUtil.createArgument(ArgumentType.STRING, 'STRING', JSON_add)
    name = BlockUtil.createArgument(ArgumentType.STRING, ' ')
    json_add_.setArguments({ id, type, name, TEXT })
    this.addBlock(json_add_)

    const json_get_item = BlockUtil.createReporter();
    json_get_item.setReporterScope(ReporterScope.TARGET)
    json_get_item.setOpcode('json_get_item')
    json_get_item.setText('DannyDevCOM.json_get_item')
    json_get_item.setArguments({ id, name })
    this.addBlock(json_get_item)

    const json_del_item = BlockUtil.createBool();
    json_del_item.setReporterScope(ReporterScope.TARGET)
    json_del_item.setOpcode('json_del_item')
    json_del_item.setText('DannyDevCOM.json_del_item')
    name = BlockUtil.createArgument(ArgumentType.STRING, 'a')
    json_del_item.setArguments({ id, name })
    this.addBlock(json_del_item)

    const GETjson = BlockUtil.createReporter();
    GETjson.setReporterScope(ReporterScope.TARGET)
    GETjson.setOpcode('GETjson')
    GETjson.setText('DannyDevCOM.json_get')
    GETjson.setArguments({ id })
    this.addBlock(GETjson)

    const DESTROYjson = BlockUtil.createBool();
    DESTROYjson.setReporterScope(ReporterScope.TARGET)
    DESTROYjson.setOpcode('DESTROYjson')
    DESTROYjson.setText('DannyDevCOM.json_destroy')
    DESTROYjson.setArguments({ id })
    this.addBlock(DESTROYjson)

    this.addTextLabel("DannyDevCOM.tit4")

    const tocommand = BlockUtil.createCommand();
    //tocommand.setHideFromPalette(true)
    tocommand.setOpcode("tocommand")
    tocommand.setText("DannyDevCOM.tocommand")
    let a = BlockUtil.createArgument(ArgumentType.STRING, ' ')
    tocommand.setArguments({ a })
    this.addBlock(tocommand)

    this.addTextLabel('DannyDevCOM.tit5')

    const check_alink = BlockUtil.createBool();
    check_alink.setReporterScope(ReporterScope.TARGET)
    check_alink.setOpcode('check_alink')
    check_alink.setText('DannyDevCOM.check_alink')
    this.addBlock(check_alink)
  }
  timeFn(d1) {//di作为一个变量传进来
    let dateBegin = d1
    let dateEnd = new Date();//获取当前时间
    let dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
    let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
    let leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
    //计算相差分钟数
    let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
    //计算相差秒数
    let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    let seconds = Math.round(leave3 / 1000)
    //console.log(" 相差 "+dayDiff+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
    //console.log(dateDiff+"时间差的毫秒数",dayDiff+"计算出相差天数",leave1+"计算天数后剩余的毫秒数"
    //,hours+"计算出小时数",minutes+"计算相差分钟数",seconds+"计算相差秒数");
    return [dateDiff, seconds, hours, dayDiff]
  }
  tocommand(args) { }
  downLoad(content, fileName) {
    var aEle = document.createElement("a");// 创建a标签
    let blob = new Blob([content]);
    aEle.download = fileName;// 设置下载文件的文件名
    aEle.href = URL.createObjectURL(blob);
    aEle.click();// 设置点击事件

  }
  httpGet(theUrl, body, method, header) {
    try {
      let xmlHttp = new XMLHttpRequest();
      xmlHttp.open(method, theUrl, false); // false 为同步请求 true 异步请求
      for (let i = 0, len = header.length; i < len; i++) {
        xmlHttp.setRequestHeader(header[i].name, header[i].value);
      }
      xmlHttp.send(body);
      return xmlHttp.responseText;
    }
    catch (error) {
      return error
    }
  }
  get_p(p) {
    let pt = '?'
    for (let i = 0, len = DannyDevCOM.http_pm_.length; i < len; i++) {
      if (DannyDevCOM.http_pm_[i]['id'] == String(p)) {
        for (let i_ = 0, len_ = DannyDevCOM.http_pm_[i].p.length; i_ < len_; i_++) {
          if (i_ == 0) {
            pt += DannyDevCOM.http_pm_[i].p[i_].name + '=' + DannyDevCOM.http_pm_[i].p[i_].value
          }
          else {
            pt += '&' + DannyDevCOM.http_pm_[i].p[i_].name + '=' + DannyDevCOM.http_pm_[i].p[i_].value
          }
        }
      }
    }
    return pt
  }
  get_header(id) {
    for (let i = 0, len = DannyDevCOM.http_header.length; i < len; i++) {
      if (DannyDevCOM.http_header[i]['id'] == String(id)) { return DannyDevCOM.http_header[i].p }
      return []
    }
    return []
  }
  async http(args) {
    let ret = ''
    const { g_way, site, p, header, body, after } = args
    if (p == 'None') {
      ret = this.httpGet(site, body, g_way, this.get_header(header));
    }
    else {
      ret = this.httpGet(site + this.get_p(p), body, g_way, this.get_header(header));
    }
    if (after == "0") { return ret }
    if (after == "1") {
      let name = ''
      let nl = name.split("/")
      if (nl[nl.length - 1] == '') { nl[nl.length - 1] = 'index.html' }
      this.downLoad(ret, nl[nl.length - 1])
      return ret
    }
    if (after == "2") {
      return this.json_create({ json_: ret })
    }
  }

  ws_cre_sock(args) {
    const { yi } = args
    if (yi == 'WS') {
      let id = Date.now()
      DannyDevCOM.wsock.push({ 'id': String(id), 'ip': null, 'port': null, 'obj': null, 'way': 'WS' })
      return String(id)
    }
    if (yi == 'WSS') {
      let id = Date.now()
      DannyDevCOM.wsock.push({ 'id': String(id), 'ip': null, 'port': null, 'obj': null, 'way': 'WSS' })
      return String(id)
    }
    return '未知协议'
  }
  async ws_conn_sock(args) {
    const { id, host, timeout } = args
    console.log(id, host)
    for (let i = 0, len = DannyDevCOM.wsock.length; i < len; i++) {
      if (String(id) == DannyDevCOM.wsock[i]["id"]) {
        for (let i = 0, len = DannyDevCOM.wsrecv_.length; i < len; i++) {
          if (String(id) == DannyDevCOM.wsrecv_[i]["id"]) {
            delete DannyDevCOM.wsnotalive_[String(id)]
          }
        }

        try {
          DannyDevCOM.wsock[i]['timeout'] = [timeout, new Date()]
          DannyDevCOM.wsock[i]['obj'] = new WebSocket(DannyDevCOM.wsock[i]["way"] + '://' + host)
          console.log(DannyDevCOM.wsock)
          DannyDevCOM.wsock[i]['obj'].onmessage = function (evt) {
            DannyDevCOM.wsrecv_.push({ 'id': DannyDevCOM.wsock[i]['id'], 'nr': evt.data })
          }
          return true
        }
        catch (error) {
          alert(error)

          return false
        }
      }
    }

    return false
  }
  ws_check_sock(args) {
    const { id, host, timeout } = args
    console.log(id, host)
    var status = false
    for (let i = 0, len = DannyDevCOM.wsock.length; i < len; i++) {

      try {
        if (this.timeFn(DannyDevCOM.wsock[i]['timeout'][1])[0] > DannyDevCOM.wsock[i]['timeout'][0]) { return -2 }
        else { return DannyDevCOM.wsock[i]['obj'].readyState }
      }

      catch (error) {

        return 0
      }
    }
    return -1
  }
  async ws_recv(args) {
    const { id } = args
    console.log(DannyDevCOM.wsrecv_)
    for (let i = 0, len = DannyDevCOM.wsrecv_.length; i < len; i++) {
      if (String(id) == DannyDevCOM.wsrecv_[i]["id"]) {
        console.log(DannyDevCOM.wsrecv_)
        try {
          let a = String(DannyDevCOM.wsrecv_[i]["nr"])
          DannyDevCOM.wsrecv_.splice(i, 1);
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
    for (let i = 0, len = DannyDevCOM.wsrecv_.length; i < len; i++) {
      if (String(id) == DannyDevCOM.wsrecv_[i]["id"]) {
        DannyDevCOM.wsnotalive_.splice(i, 1)
        return true
      }
    }
    return false
  }
  ws_destroy(args) {
    const { id } = args
    for (let i = 0, len = DannyDevCOM.wsock.length; i < len; i++) {
      console.log(DannyDevCOM.wsock[i])
      if (String(id) == DannyDevCOM.wsock[i]["id"]) {
        try {
          if (DannyDevCOM.wsock[i]["obj"] == null) { }
          else { DannyDevCOM.wsock[i]["obj"].close() }
          DannyDevCOM.wsock.splice(i, 1);
          // alert(DannyDevCOM.wsock)
          return ''
        }
        catch (error) { console.log(error) }
      }
    }
  }
  async ws_send(args) {
    const { id, text } = args
    for (let i = 0, len = DannyDevCOM.wsock.length; i < len; i++) {
      if (String(id) == DannyDevCOM.wsock[i]["id"]) {
        console.log(DannyDevCOM.wsrecv_)
        console.log(DannyDevCOM.wsock[i])

        try {
          if (DannyDevCOM.wsock[i]["obj"] == null) { return false } else { DannyDevCOM.wsock[i]["obj"].send(text); return true }
        }
        catch (error) {

          return false
        }
      }

    }

    return false
  }
  help() {
    return 'DannyDevCOM.help.t'
  }
  async RC4_coding(args) {
    let key = ''
    let data = ''
    const { KEY, TEXT } = args
    key = String(KEY)
    data = String(TEXT)//对js不识别字符串进行处理
    let seq = Array(256); //如果有机会编译成离线可执行程序，会考虑支持AVX512
    let das = Array(data.length);
    let i = 0
    let j = 0
    let temp = null
    let k = 0
    for (let i = 0; i < 256; i++) {
      seq[i] = i;
      j = (j + seq[i] + key.charCodeAt(i % key.length)) % 256;
      temp = seq[i];
      seq[i] = seq[j];
      seq[j] = temp;
    }
    for (let i = 0; i < data.length; i++) {
      das[i] = data.charCodeAt(i)
    }
    for (let x = 0; x < das.length; x++) {
      i = (i + 1) % 256;
      j = (j + seq[i]) % 256;
      temp = seq[i];
      seq[i] = seq[j];
      seq[j] = temp;
      k = (seq[i] + (seq[j] % 256)) % 256;
      das[x] = String.fromCharCode(das[x] ^ seq[k]);
    }
    return das.join('');
  }
  async b64encoding(args) {
    const { TEXT } = args
    return window.btoa(encodeURIComponent(String(TEXT))); // 编码
  }
  async b64decoding(args) {
    const { TEXT } = args
    try {
      return decodeURIComponent(window.atob(String(TEXT))); // 解码
    }
    catch (error) {
      return error
    }
  }
  ToUTF8(str) {
    let result = new Array();

    let k = 0;
    for (let i = 0; i < str.length; i++) {
      let j = encodeURI(str[i]);
      if (j.length == 1) {
        // 未转换的字符
        result[k++] = j.charCodeAt(0);
      } else {
        // 转换成%XX形式的字符
        let bytes = j.split("%");
        for (let l = 1; l < bytes.length; l++) {
          result[k++] = parseInt("0x" + bytes[l]);
        }
      }
    }

    return result;
  }
  byteToString(arr) {
    if (typeof arr === 'string') {
      return arr;
    }
    let str = '',
      _arr = arr;
    for (let i = 0; i < _arr.length; i++) {
      // 数组中每个数字转为二进制 匹配出开头为1的直到0的字符
      // eg:123-->"1111011"-->{0:"1111",groups: undefined, index: 0, input: "1111011"}
      let one = _arr[i].toString(2),
        v = one.match(/^1+?(?=0)/);
      if (v && one.length == 8) {
        let bytesLength = v[0].length;
        let store = _arr[i].toString(2).slice(7 - bytesLength);
        for (let st = 1; st < bytesLength; st++) {
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
  async b58encoding(args) {
    const { TEXT } = args
    let ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let ALPHABET_MAP = {};
    let BASE = 58;
    for (let i = 0; i < ALPHABET.length; i++) {
      ALPHABET_MAP[ALPHABET.charAt(i)] = i;
    }


    // 如果有特殊需求，要转成utf16，可以用以下函数
    function ToUTF16(str) {
      let result = new Array();

      let k = 0;
      for (let i = 0; i < str.length; i++) {
        let j = str[i].charCodeAt(0);
        result[k++] = j & 0xFF;
        result[k++] = j >> 8;
      }

      return result;
    }
    // 传进已经转成字节的数组 -->buffer(utf8格式) 
    function encode(buffer) {
      if (buffer.length === 0) return '';
      let i,
        j,
        digits = [0];
      for (i = 0; i < buffer.length; i++) {
        for (j = 0; j < digits.length; j++) {
          digits[j] <<= 8;
        }
        digits[0] += buffer[i];
        let carry = 0;
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


    return encode(this.ToUTF8(String(TEXT)))
  }
  async b58decoding(args) {
    const { TEXT } = args
    let ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let ALPHABET_MAP = {};
    let BASE = 58;
    for (let i = 0; i < ALPHABET.length; i++) {
      ALPHABET_MAP[ALPHABET.charAt(i)] = i;
    }
    function decode(string) {
      if (string.length === 0) return [];
      let i,
        j,
        bytes = [0];
      for (i = 0; i < string.length; i++) {
        let c = string[i];
        // c是不是ALPHABET_MAP的key 
        if (!(c in ALPHABET_MAP)) throw new Error('Non-base58 character');
        for (j = 0; j < bytes.length; j++) bytes[j] *= BASE;
        bytes[0] += ALPHABET_MAP[c];
        let carry = 0;
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

    return this.byteToString(decode(String(TEXT)))
  }
  async bcostomencoding(args) {
    const { ALPHABET, TEXT } = args
    let ALPHABET_MAP = {};
    let BASE = ALPHABET.length;
    for (let i = 0; i < ALPHABET.length; i++) {
      ALPHABET_MAP[ALPHABET.charAt(i)] = i;
    }
    // 传进已经转成字节的数组 -->buffer(utf8格式) 
    function encode(buffer) {
      if (buffer.length === 0) return '';
      let i,
        j,
        digits = [0];
      for (i = 0; i < buffer.length; i++) {
        for (j = 0; j < digits.length; j++) {
          digits[j] <<= 8;
        }
        digits[0] += buffer[i];
        let carry = 0;
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


    return encode(this.ToUTF8(String(TEXT)))
  }
  async bcostomdecoding(args) {
    const { ALPHABET, TEXT } = args
    let ALPHABET_MAP = {};
    let BASE = ALPHABET.length;
    for (let i = 0; i < ALPHABET.length; i++) {
      ALPHABET_MAP[ALPHABET.charAt(i)] = i;
    }
    function decode(string) {
      if (string.length === 0) return [];
      let i,
        j,
        bytes = [0];
      for (i = 0; i < string.length; i++) {
        let c = string[i];
        // c是不是ALPHABET_MAP的key 
        if (!(c in ALPHABET_MAP)) throw new Error('Non-base58 character');
        for (j = 0; j < bytes.length; j++) bytes[j] *= BASE;
        bytes[0] += ALPHABET_MAP[c];
        let carry = 0;
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
    return this.byteToString(decode(String(TEXT)))
  }
  json_create(args) {
    const { json_ } = args
    let j = json_
    let id = Date.now()
    let a = {}
    try {
      a = JSON.parse(j)
    }
    catch (error) { }
    DannyDevCOM.json_list.push({ 'id': String(id), 'json': a })
    return id

  }
  json_load(args) {
    const { id, json_ } = args
    function load(id, j) {
      let a = {}
      try {
        a = JSON.parse(j)
        for (let i = 0, len = DannyDevCOM.json_list.length; i < len; i++) {
          if (DannyDevCOM.json_list[i]['id'] == String(id)) {
            DannyDevCOM.json_list[i]['json'] = a
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
    let b = []
    try {
      for (let i = 0, len = DannyDevCOM.json_list.length; i < len; i++) {
        if (DannyDevCOM.json_list[i]['id'] == String(id)) {
          b = Object.keys(DannyDevCOM.json_list[i]['json'])
        }
      }
    }
    catch (error) { b = [] }
    let d = ''
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
    for (let i = 0, len = DannyDevCOM.json_list.length; i < len; i++) {
      if (DannyDevCOM.json_list[i]['id'] == String(id)) {
        return true
      }
    }
    return false
  }
  getjson(id) {
    for (let i = 0, len = DannyDevCOM.json_list.length; i < len; i++) {
      if (DannyDevCOM.json_list[i]['id'] == String(id)) {
        return DannyDevCOM.json_list[i]['json']
      }
    }
    return {}
  }
  json_add_from_id(args) {
    const { _id, id, name } = args

    let id1 = _id
    if (this.check(id) && this.check(id1)) {
      for (let i = 0, len = DannyDevCOM.json_list.length; i < len; i++) {
        if (DannyDevCOM.json_list[i]['id'] == String(id)) {
          DannyDevCOM.json_list[i]['json'][name] = this.getjson(id1)
          return true
        }
      }
    }
    else { return false }
    return false

  }
  json_add(args) {
    const { id, type, name, TEXT } = args
    let content = TEXT
    if (this.check(id)) {
      for (let i = 0, len = DannyDevCOM.json_list.length; i < len; i++) {
        if (DannyDevCOM.json_list[i]['id'] == String(id)) {
          if (type == '0') {//字符串
            DannyDevCOM.json_list[i]['json'][String(name)] = String(content)
            return true
          }
          if (type == '1') {//整数
            DannyDevCOM.json_list[i]['json'][String(name)] = parseInt(content)
            return true
          }
          if (type == '2') {//浮点数
            DannyDevCOM.json_list[i]['json'][String(name)] = parseFloat(content)
            return true
          }
          if (type == '3') {//列表
            DannyDevCOM.json_list[i]['json'][String(name)] = content.split(' ')
            return true
          }
          if (type == '4') {//逻辑
            if (String(content) == 'true') {
              DannyDevCOM.json_list[i]['json'][String(name)] = true
              return true
            }
            else {
              DannyDevCOM.json_list[i]['json'][String(name)] = false
              return true
            }
          }

        }
      }

    }
    return false
  }

  async GETjson(args) {
    const { id } = args
    for (let i = 0, len = DannyDevCOM.json_list.length; i < len; i++) {
      if (DannyDevCOM.json_list[i]['id'] == String(id)) {
        return JSON.stringify(DannyDevCOM.json_list[i]['json'])
      }
    }
    return ''
  }

  DESTROYjson(args) {
    const { id } = args
    for (let i = 0, len = DannyDevCOM.json_list.length; i < len; i++) {
      if (DannyDevCOM.json_list[i]['id'] == String(id)) {
        DannyDevCOM.json_list.splice(i, 1);
        return true
      }
    }
    return false
  }
  json_get_item(args) { //
    const { id, name } = args
    try {
      for (let i = 0, len = DannyDevCOM.json_list.length; i < len; i++) {
        if (DannyDevCOM.json_list[i]['id'] == String(id)) {
          if (typeof (DannyDevCOM.json_list[i]['json'][name]) == 'string') { //id_0 字符串
            return DannyDevCOM.json_list[i]['json'][name]
          }
          if (typeof (DannyDevCOM.json_list[i]['json'][name]) == 'number') { //id_1&2 整数&浮点
            return DannyDevCOM.json_list[i]['json'][name]
          }
          if (DannyDevCOM.json_list[i]['json'][name] instanceof Array) { //id_4列表
            let a = ''
            for (let i_ = 0, len = DannyDevCOM.json_list[i]['json'][name].length; i_ < len; i_++) {
              if (i_ == DannyDevCOM.json_list[i]['json'][name].length) {
                a += DannyDevCOM.json_list[i]['json'][name][i]
              }
              else {
                a += DannyDevCOM.json_list[i]['json'][name][i] + ' '
              }
            }
          }
          if (typeof (DannyDevCOM.json_list[i]['json'][name]) == 'boolean') { // id_4 逻辑
            return DannyDevCOM.json_list[i]['json'][name]
          }

        }
      }
    } catch { }
    return ''
  }
  json_del_item(args) { //删除项
    const { id, name } = args
    try {
      for (let i = 0, len = DannyDevCOM.json_list.length; i < len; i++) {
        if (DannyDevCOM.json_list[i]['id'] == String(id)) {
          Reflect.deleteProperty(DannyDevCOM.json_list[i]['json'], String(name))
          return true
        }
      }
    } catch { }
    return false
  }

  http_pm_cm(args) {
    const { id, name, text } = args
    let a = false
    for (let i = 0, len = DannyDevCOM.http_pm_.length; i < len; i++) {
      if (DannyDevCOM.http_pm_[i]['id'] == String(id)) {
        a = true
      }
    }
    if (a) { } else { DannyDevCOM.http_pm_.push({ 'id': String(id), 'p': [] }) }
    for (let i = 0, len = DannyDevCOM.http_pm_.length; i < len; i++) {
      if (DannyDevCOM.http_pm_[i]['id'] == String(id)) {
        for (let i_ = 0, len_ = DannyDevCOM.http_pm_[i]['p'].length; i_ < len_; i_++) {
          if (DannyDevCOM.http_pm_[i]['p'][i_].name == name) {
            DannyDevCOM.http_pm_[i]['p'][i_].value = text
            return ''
          }
        }
        DannyDevCOM.http_pm_[i]['p'].push({ "name": name, 'value': text })
      }
    }
  }
  http_pm_des(args) {
    const { id } = args
    try {
      for (let i = 0, len = DannyDevCOM.http_pm_.length; i < len; i++) {
        if (DannyDevCOM.http_pm_[i]['id'] == String(id)) {
          DannyDevCOM.http_pm_.splice(i, 1)
          return
        }
      }
    }
    catch (error) { }
  }
  http_header_cm(args) {
    const { id, name, text } = args
    let a = false
    for (let i = 0, len = DannyDevCOM.http_header.length; i < len; i++) {
      if (DannyDevCOM.http_header[i]['id'] == String(id)) {
        a = true
      }
    }
    if (a) { } else { DannyDevCOM.http_header.push({ 'id': String(id), 'p': [] }) }

    for (let i = 0, len = DannyDevCOM.http_header.length; i < len; i++) {
      if (DannyDevCOM.http_header[i]['id'] == String(id)) {
        for (let i_ = 0, len_ = DannyDevCOM.http_header[i]['p'].length; i_ < len_; i_++) {
          if (DannyDevCOM.http_header[i]['p'][i_].name == name) {
            DannyDevCOM.http_header[i]['p'][i_].value = text
            return ''
          }
        }
        DannyDevCOM.http_header[i]['p'].push({ "name": name, 'value': text })
      }
    }
  }
  http_header_des(args) {
    const { id } = args
    try {
      for (let i = 0, len = DannyDevCOM.http_header.length; i < len; i++) {
        if (DannyDevCOM.http_header[i]['id'] == String(id)) {
          DannyDevCOM.http_header.splice(i, 1)
          return
        }
      }
    }
    catch (error) { }
  }
  async _wsget(url, msg, timeout = 5000) {
    let ret = null
    let d = new Date()
    let ws = new WebSocket(url)
    ws.onopen = function (evt) {
      console.log('Connect to Aurora-link successfully')
      ws.send(JSON.stringify(msg))
    }
    ws.onmessage = function (evt) {
      ret = evt.data
      console.log(ret)
    };
    ws.onerror = function () {
      if (!ret) {
        ret = 'error close'
      }
    }
    ws.onclose= function(){
      if (!ret){
        ret='error close'
      }
    }
    await new Promise((resolve) => {
      let timer = setInterval(() => {
        if (ret) {
          clearInterval(timer)
          resolve(true)
        }
        if (this.timeFn(d)[0] >= timeout) {
          ret = 'error timeout'
        }
      }, 50)
    })
    ws.close()
    return ret
  }
  async check_alink(args) {
    let _ret = null
    await this._wsget('ws://127.0.0.1:23089', {}).then(function (ret) {
      _ret = ret
    })
    try {
      JSON.parse(_ret)
      return true
    } catch (error) {
      return false
    }
  }
  async create_socket(args) {
    let _ret = null
    const { yi, method } = args
    await this._wsget('ws://127.0.0.1:23089/socket/create', { yi, method }).then(function (ret) {
      _ret = ret
    })
    let j = JSON.parse(_ret)
    if (j['code'] == 200)
      return j.id
    else {
      return ''
    }
  }
  async conn_socket(args) {
    let _ret = null
    const { id, ip, port, buff } = args
    await this._wsget('ws://127.0.0.1:23089/socket/conn_st', { id, ip: ip + ':' + port, buff }).then(function (ret) {
      _ret = ret
    })
    let j = JSON.parse(_ret)
    return j.id == 200
  }
  async send_socket(args) {
    let _ret = null
    const { id, ip, port, data } = args
    await this._wsget('ws://127.0.0.1:23089/socket/send', { id, ip: ip + ':' + port, data }).then(function (ret) {
      _ret = JSON.parse(ret)
    })
    return _ret.id==200
  }

  async recv_socket(args) {
    let _ret = null
    const { id } = args
    await this._wsget('ws://127.0.0.1:23089/socket/recv', { id }).then(function (ret) {
      _ret = JSON.parse(ret)
        })
    if (_ret['code'] == 200) {
      return _ret['msg']

    }
    return ''
  }
  async clsconn_socket(args) {
    let _ret = null
    const { id } = args
    await this._wsget('ws://127.0.0.1:23089/socket/close_conn', { id }).then(function (ret) {
      _ret = JSON.parse(ret)
        })
    return _ret['code'] == 200
  }
  async des_socket(args) {
    let _ret = null
    const { id } = args
    await this._wsget('ws://127.0.0.1:23089/socket/destroy', { id }).then(function (ret) {
      _ret = JSON.parse(ret)
        })
    return _ret['code'] == 200
  }
  async solve_data(args) {
    const { data, type } = args
    if (type == '0') {//ip
      return data.ip.split(':')[0]
    }
    if (type == '1') {//port
      return data.ip.split(':')[1]
    }
    if (type == '2') {//data
      return this.b64decoding({ TEXT: data.res })
    }
    if (type == '3') {//op
      return data.op
    }
    return ''
  }
}

