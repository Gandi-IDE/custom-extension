import { GandiExtension, BlockUtil, ArgumentType, ReporterScope, BlockType } from '@cocrea/extension-kit'
import { extensionId } from './extInfo'
import ext from './ext.js';
import cover from "./assets/cover.jpg";
import blockIcon from "./assets/icon.png";
var zh_cn = {}
var en = {}
class runtime {
  getFormatMessage(l10n) {
    zh_cn = l10n['zh-cn']
    en = l10n['en']
    //中文插件介绍
    zh_cn['name'] = 'AUSの通讯模块' //名称
    zh_cn['desc'] = 'AUSの通讯与编解码' //介绍
    zh_cn['docURL'] = 'https://www.ccw.site/post/1424d473-f1a4-4268-86dd-8f4de4d6592f' //文档地址
    //英文
    en['name'] = 'AUSのcommunication' //同上
    en['desc'] = 'AUSのcommunication and en/decode' //同上
    en['docURL'] = 'https://www.ccw.site/post/1424d473-f1a4-4268-86dd-8f4de4d6592f' //同上
    return this._formatMessage
  }
  _formatMessage(t) {
    return t
  }
}
export default class ddevcom extends GandiExtension {
  get extensionId(): string {
    return extensionId;
  }

  get localization() {
    ext.constructor(runtime);
    let l=[]
    l=Object.getOwnPropertyNames(Object.getPrototypeOf(ext))
    for (let i = 0, len = l.length; i < len; i++) {
      this[l[i]]=ext[l[i]]
    }
    return {
      'zh-cn': zh_cn,
      'en': en,
    };
  }

  get documentURL(): string {
    return zh_cn['docURL'];
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
      labelName: 'Danny @ CCW',  //作者显示名称
      username: 'DannyDev', //用户名
      homepage: 'https://www.ccw.site/student/5c4b101db73fd8498278630c', //主页
      email: '3414034955@qq.com' //邮箱
    };
  }

  get blockPrefix(): string {
    return '';
  }

  get deprecatedBlocksByOpcodes(): string[] {
    return [];
  }

  init() {
    //Menu

    let inf = ext.getInfo()
    let menu = {}
    let menus = inf['menus']
    let menu_key = []
    menu_key = Object.keys(menus)
    let menu__ = []
    for (let i = 0, len = menu_key.length; i < len; i++) {
      menu__ = menus[menu_key[i]]
      if (typeof (Object.keys(menu__)) == 'number') {
        menu[menu_key[i]] = BlockUtil.createMenu(menu_key[i]);
        for (let i_ = 0, len_ = menu__.length; i_ < len_; i_++) {
          menu[menu_key[i]].items.push({ text: menu__[i_].text, value: menu__[i_].value });
        }
      }
      else {
        //动态menu
        menu[menu_key[i]] = BlockUtil.createDynamicMenu(menu_key[i], menu__['items'], true)
      }
    }
    let blck = inf['blocks']
    let blk_=[]
    let blk=null
    let argu = []
    let argu_ = {}
    for (let i = 0, len = blck.length; i < len; i++) {
      if (typeof (blck[i]) == 'string') {//title

      }
      else {
        //获取参数
        argu_ = {}
        argu = blck[i]['arguments']
        for (let i_ = 0, len_ = Object.keys(argu).length; i_ < len_; i_++) {
          let a = argu[Object.keys(argu)[i_]]
          let d = null
          if ('defaultValue' in a) { d = a['defaultValue'] }
          let b = null
          if ('menu' in a) {
            b = BlockUtil.createArgument(a['type'], d, menu[a['menu']]);
          }
          else { b = BlockUtil.createArgument(a['type'], d); }
          argu[Object.keys(argu)[i_]] = b
        }
        //设置block
        blk = null
        if (blck[i]['blockType'] == BlockType.BOOLEAN) { blk = BlockUtil.createBool(); blk.setReporterScope(ReporterScope.GLOBAL) }
        if (blck[i]['blockType'] == BlockType.BUTTON) { blk = BlockUtil.createButton(); }
        if (blck[i]['blockType'] == BlockType.COMMAND) { blk = BlockUtil.createCommand(); }
        if (blck[i]['blockType'] == BlockType.CONDITIONAL) {blk = BlockUtil.createConditional(); blk.setBranchCount(2);blk.setIsTerminal(true)}
        if (blck[i]['blockType'] == BlockType.EVENT) { blk = BlockUtil.createEvent();     blk.setShouldRestartExistingThreads(false);blk.setIsEdgeActivated(true);}
        if (blck[i]['blockType'] == BlockType.HAT) { blk = BlockUtil.createHat(); blk.setShouldRestartExistingThreads(false);blk.setIsEdgeActivated(true);}
        if (blck[i]['blockType'] == BlockType.LOOP) { blk = BlockUtil.createLoop(); }
        if (blck[i]['blockType'] == BlockType.REPORTER) {blk = BlockUtil.createReporter(); blk.setReporterScope(ReporterScope.TARGET)}blk.setOpcode(blck[i]['opcode']);blk.setText(blck[i]['text']);blk.setArguments(argu);}
        blk.setOpcode(blck[i]['opcode'])
        blk.setText(blck[i]['text'])
        blk.setArguments(argu)
        blk_.push(blk)
        this.addBlock(blk)
      }
    }

  //block opcode functions
  test(args) {
    const { A, B, C } = args;
    console.log('test', A, B, C);
  }
  
}
