/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import Prism from './prism.js';
import { witcat_BBcode_icon, witcat_BBcode_picture } from './assets/index.js';
import htmltobbcode from './htmlToBBCode.js';
import bbcode from './bbcode.js';

const witcat_BBcode_extensionId = 'WitCatBBcode';
let bbcodemousedown = {};
let touchEvent = {};
/**
 * 获取到的返回值
 */

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字、布尔和文本（极端情况下还有 null 或 undefined，需要同时处理 */

export default class WitCatBBcode {
  constructor(runtime) {
    window.addEventListener('mousedown', (e) => {
      bbcodemousedown = e;
    });

    window.addEventListener('mousemove', (e) => {
      touchEvent = e;
    });

    this.runtime = runtime;

    this.resize = null;
    this.maxParsedable = 100;
    /**
     * Scratch 所使用的 canvas，获取不到返回 null
     * @return {HTMLcanvasElement | null}
     */
    this.canvas = () => {
      try {
        const { canvas } = runtime.renderer;
        if (canvas instanceof HTMLCanvasElement) {
          return canvas;
        }
      } catch (err) {
        return null;
      }
    };

    /**
     * 所有输入框所在的父角色，目前设为 canvas 的父角色。
     * 获取不到返回 null
     * @return {HTMLElement | null}
     */
    this.inputParent = () => {
      try {
        const { canvas } = runtime.renderer;
        if (canvas instanceof HTMLCanvasElement) {
          return canvas.parentElement;
        }
      } catch (err) {
        console.error(err);
        return null;
      }
    };

    /**
     * 创建滚动条
     */
    document.documentElement.style.setProperty('--witcat-bbcode-scale', '1');
    const ScrollStyle = document.createElement('style');
    ScrollStyle.innerText = `
      h1{
          font-size:2.0em;
      }
      h3{
          font-size:1.17em;
      }
      h5{
          font-size:0.83em;
      }
      h6{
          font-size:0.67em;
      }
      .WitCatBBcodeOut::-webkit-scrollbar{
          display: none;
      }
      .WitCatBBcode::-webkit-scrollbar{
          display: none;
      }
      .WitCatBBcode{
          color:black;
      }
      .WitCatBBcode{
          transform-origin: 0 0;
          transform:var(--witcat-bbcode-scale);
      }
      .WitCatBBcode ul{
          padding-inline-start: 40px;
          list-style:none;
      }
      .WitCatBBcode ol{
          padding-inline-start: 40px;
          list-style:auto;
      }
      .WitCatBBcode blockquote{
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 40px;
          margin-inline-end: 40px;
      }
      .WitCatBBcodepolier{
        display: inline-block;
        white-space: nowrap;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
      }
      .WitCatBBcodepolier button{
        background-color: #00000000;
        color: #1A96E2;
        position: absolute;
        right: 0px;
        bottom: 0px;
        border-radius: 0.5em;
      }
      .WitCatBBcodeHide{
        background-color: #252525;
        color: #252525;
        text-shadow: none;
        border-radius: 0.5em;
      }
      .WitCatBBcodeHide:hover{
        color: white !important;
      }
      .WitCatBBcodeg-container {
        width: 240px;
        height: 10px;
        border-radius: 0.5em;
        background: #eee;
      }
      .WitCatBBcodeg-progress {
        width: 50%;
        height: inherit;
        border-radius: 0.5em;
        background: #0f0;
      }
      .WitCatBBcodeTable{
        border: 1px solid black;
        border-collapse: separate;
      }
      .WitCatBBcodeTable td{
        border: 1px solid black;
        padding: 8px;
      }
      code[class*=language-],pre[class*=language-]{color:#ccc;background:0 0;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:0px;margin:0px;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999}.token.punctuation{color:#ccc}.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.function,.token.number{color:#f08d49}.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555}.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd}.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699}.token.entity,.token.operator,.token.url{color:#67cdcc}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}
      `;
    document.body.appendChild(ScrollStyle);
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerText = `
    function showText(a) {
      if (a.innerText === '展开' || a.innerText === 'more') {
        a.parentElement.style.height = '100%';
      }
      else if (a.innerText === '收起' || a.innerText === 'fold') {
        a.parentElement.style.height = (a.parentElement.getAttribute('height')) + 'px';
      }
      a.innerText = a.innerText === 'more' ? 'fold' : a.innerText === 'fold' ? 'more' : a.innerText === '展开' ? '收起' : '展开';
    }
    `
    document.body.appendChild(script)

    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'WitCatBBcode.name': '白猫的BBcode',
        'WitCatBBcode.docs': '📖拓展教程',
        'WitCatBBcode.docss': '📖示例内容',
        'WitCatBBcode.tutorial':
          '[size=40]欢迎来到[color=#ffff00]白猫[/color]的BBcode[/size]\n\n加粗：\n[b]粗体字 Bold text[/b]\n\n斜体：\n[i]斜体字 Italic[/i]\n\n删除线：\n[s]删除线[/s]\n\n下划线：\n[u]下划线[/u]\n\n改变字号：\n[size=2]大小可变[/size]\n\n改变颜色：\n[color=#ff0000]我是红色[/color]\n\n网页链接：\n[url=https://ccw.site/]示例网址[/url]\n\n引用：\n[quote]《我三》是《艺三》难以企及的标杆[/quote]\n\n列表（无序）：\n[list]\n[*]列表项目\n[*]列表项目\n[/list]\n\n列表（数字）：\n[list=1]\n[*]列表项目A\n[*]列表项目B\n[/list]\n\n列表（字母）：\n[list=a]\n[*]列表项目A\n[*]列表项目B\n[/list]\n\n插入图片：\n[img=5]https://m.xiguacity.cn/works-covers/f6348af6-ba33-4172-b99d-246733242a00.png?x-oss-process=image%2Fresize%2Cs_360%2Fformat%2Cwebp[/img]\n\n插入代码：\n[code]printf("hello world!")[/code]\n使用代码高亮积木为代码配置语言高亮\n\n当然，你也可以嵌套：\n[color=#ff0000][b][size=100]aaa[/size][/b][/color]',
        'WitCatBBcode.create': '创建 BBcode ID[id]X[x]Y[y]宽[width]高[height]内容[text]',
        'WitCatBBcode.delete': '删除 BBcode ID[id]',
        'WitCatBBcode.deleteall': '删除所有 BBcode ',
        'WitCatBBcode.get': ' BBcode ID[id]的[type]',
        'WitCatBBcode.set': '设置 BBcode ID[id]的[type]为[text]',
        'WitCatBBcode.settextalign': '设置 BBcode ID[id]第[num]个[type]为[text]',
        'WitCatBBcode.imgstyle': ' BBcode ID[id]的第[num]张图片的宽[width]高[height]',
        'WitCatBBcode.loadfontfamily': '从[text]加载字体名[name]',
        'WitCatBBcode.setfontfamily': '设置 BBcode ID[id]的字体为[name]',
        'WitCatBBcode.code': '设置 BBcode ID[id]第[num]个代码框的高亮为[name]',
        'WitCatBBcode.ide': '设置 BBcode ID[id]为[name]',
        'WitCatBBcode.size': 'BBcode大小自适应[type]',
        'WitCatBBcode.type.1': 'X',
        'WitCatBBcode.type.2': 'Y',
        'WitCatBBcode.type.3': '宽',
        'WitCatBBcode.type.4': '高',
        'WitCatBBcode.type.5': '内容',
        'WitCatBBcode.type.6': 'json',
        'WitCatBBcode.type.7': '透视',
        'WitCatBBcode.type.8': '内容高度',
        'WitCatBBcode.type.9': '纵向滚动位置',
        'WitCatBBcode.type.10': '内容宽度',
        'WitCatBBcode.type.11': '横向滚动位置',
        'WitCatBBcode.ide.1': '可编辑',
        'WitCatBBcode.ide.2': '不可编辑',
        'WitCatBBcode.types.1': '启动',
        'WitCatBBcode.types.2': '关闭',
        'WitCatBBcode.getwidth': '获取内容[content]的渲染[type]',
        'WitCatBBcode.click': '上次点击的元素的[clickmenu]',
        'WitCatBBcode.touchs': '碰到的元素的[clickmenu]',
        'WitCatBBcode.clickmenu.1': 'bbcode来源',
        'WitCatBBcode.clickmenu.2': '类型',
        'WitCatBBcode.clickmenu.3': '序号',
        'WitCatBBcode.touch': '碰到BBcode[id]第[number]个[type]元素?',
        'WitCatBBcode.move': 'BBcode[id]第[number]个[type]元素偏移X[x]Y[y]',
        'WitCatBBcode.scale': 'BBcode[id]第[number]个[type]元素缩放X[x]Y[y]',
        'WitCatBBcode.rot': 'BBcode[id]第[number]个[type]元素旋转[y]',
        'WitCatBBcode.3dmove': 'BBcode[id]第[number]个[type]元素3D偏移X[x]Y[y]Z[z]',
        'WitCatBBcode.3drot': 'BBcode[id]第[number]个[type]元素3D旋转X[x]Y[y]Z[z]',
        'WitCatBBcode.setinsite': 'BBcode[id]第[number]个[type]元素的[input]设为[text]',
        'WitCatBBcode.transition': '为BBcode[id]设置过渡为[s]秒的[timing]',
        'WitCatBBcode.morecontent': '设置展开消息ID[id]为[show]',
        'WitCatBBcode.meter': '设置进度条ID[id]的百分比为[text]',
        'WitCatBBcode.show.1': '展开',
        'WitCatBBcode.show.2': '收起',
        'WitCatBBcode.timing.1': '线性',
        'WitCatBBcode.timing.2': '缓出',
        'WitCatBBcode.timing.3': '缓入',
        'WitCatBBcode.timing.4': '缓出入',
        'WitCatBBcode.timing.5': '缓动',
        'WitCatBBcode.textalign.1': '左对齐',
        'WitCatBBcode.textalign.2': '右对齐',
        'WitCatBBcode.setinsite.1': '阴影',
        'WitCatBBcode.setinsite.2': '文字阴影',
        'WitCatBBcode.setnum': '⚠️设置解析最大数为[num]',
      },
      en: {
        'WitCatBBcode.name': 'WitCat’s BBcode',
        'WitCatBBcode.docs': '📖 Tutorial',
        'WitCatBBcode.docss': '📖Example Content',
        'WitCatBBcode.tutorial':
          '[size=40] Welcome to [color=#ffff00] White Cat [/color] BBcode[/size]\n\nBold:\n[/b] Bold text[/b]\n\nItalics:\n[i] Italic[/i]\n\nDelete line:\n[s] stripper line [/s]\n\nUnderline:\n[u] Underline [/u]\n\nChange the font size:\n[size=2] Variable size [/size]\n\nChange color:\n[color=#ff0000] I am red [/color]\n\nWeb link:\n[url=https://ccw.site/] Example url [/url]\n\nQuote:\n[quote] "My Three" is "Art Three" difficult to match the benchmark [/quote]\n\nList (unordered) :\n[list]\n[*] List items\n[*] List items\n[/list]\n\nList (numbers) :\n[list=1]\n[*] List item A\n[*] List item B\n[/list]\n\nList (letters) :\n[list=a]\n[*] List item A\n[*] List item B\n[/list]\n\nInsert picture:\n[img=5]https://m.xiguacity.cn/works-covers/f6348af6-ba33-4172-b99d-246733242a00.png?x-oss-process=image%2Fresize%2Cs_360 %2Fformat%2Cwebp[/img]\n\nInsert code:\n[code]printf("hello world!" )[/code]\nConfigure language highlighting for code using code highlighting blocks\n\nOf course, you can also nest:\n[color=#ff0000][b][size=100]aaa[/size][/b][/color]',
        'WitCatBBcode.create': 'Create BBcode ID[id]X[x]Y[y] width [width] height [height] content [text]',
        'WitCatBBcode.delete': 'Delete BBcode ID[id]',
        'WitCatBBcode.deleteall': 'Delete all BBcode',
        'WitCatBBcode.get': 'ID[id]BBcode`s[type]',
        'WitCatBBcode.set': 'set BBcode ID[id]`s[type] to [text]',
        'WitCatBBcode.settextalign': 'set BBcode ID[id] num [num]`s[type] to [text]',
        'WitCatBBcode.imgstyle': 'BBcode ID[id] width of [num] picture [width] height [height]',
        'WitCatBBcode.loadfontfamily': 'load[name]from url[text]',
        'WitCatBBcode.setfontfamily': 'set BBcode ID[id]`s font family[name]',
        'WitCatBBcode.code': 'Set the [num] code box highlighted by BBcode ID[id] to [name]',
        'WitCatBBcode.ide': 'Set BBcode ID[id] to [name]',
        'WitCatBBcode.size': 'BBcode size adaptive[type]',
        'WitCatBBcode.type.1': 'X',
        'WitCatBBcode.type.2': 'Y',
        'WitCatBBcode.type.3': 'width',
        'WitCatBBcode.type.4': 'height',
        'WitCatBBcode.type.5': 'content',
        'WitCatBBcode.type.6': 'json',
        'WitCatBBcode.type.7': 'perspective',
        'WitCatBBcode.type.8': 'Content height',
        'WitCatBBcode.type.9': 'Longitudinal roll position',
        'WitCatBBcode.type.10': 'Content width',
        'WitCatBBcode.type.11': 'Horizontal roll position',
        'WitCatBBcode.ide.1': 'editable',
        'WitCatBBcode.ide.2': 'uneditable',
        'WitCatBBcode.types.1': 'turn on',
        'WitCatBBcode.types.2': 'turn off',
        'WitCatBBcode.getwidth': 'get[content]`s render[type]',
        'WitCatBBcode.click': 'Last clicked element`s[clickmenu]',
        'WitCatBBcode.touchs': 'Touch element`s[clickmenu]',
        'WitCatBBcode.clickmenu.1': 'bbcode Source',
        'WitCatBBcode.clickmenu.2': 'type',
        'WitCatBBcode.clickmenu.3': 'Serial number',
        'WitCatBBcode.touch': 'BBcode[id]num[number]`s[type]element is encountered?',
        'WitCatBBcode.move': 'BBcode[id]num[number]`s[type] element offset X[x]Y[y]',
        'WitCatBBcode.scale': 'BBcode[id]num[number]`s[type] element scale X[x]Y[y]',
        'WitCatBBcode.rot': 'BBcode[id]num[number]`s[type] element rotat [y]',
        'WitCatBBcode.3dmove': 'BBcode[id]num[number]`s[type] element 3Doffset X[x]Y[y]Z[z]',
        'WitCatBBcode.3drot': 'BBcode[id]num[number]`s[type] element 3Drotat X[x]Y[y]Z[z]',
        'WitCatBBcode.setinsite': 'Set BBcode[id]num[number]`s[type] element [input] to [text]',
        'WitCatBBcode.transition': 'Set [timing] for BBcode[id] to transition to [s] seconds',
        'WitCatBBcode.morecontent': 'Set the expanded message ID[id] to [show]',
        'WitCatBBcode.meter': 'Set the percentage of progress bar ID[id] to [text]',
        'WitCatBBcode.show.1': 'show',
        'WitCatBBcode.show.2': 'hide',
        'WitCatBBcode.timing.1': 'linear',
        'WitCatBBcode.timing.2': 'ease-out',
        'WitCatBBcode.timing.3': 'ease-in',
        'WitCatBBcode.timing.4': 'ease-in-out',
        'WitCatBBcode.timing.5': 'ease',
        'WitCatBBcode.textalign.1': 'Align left',
        'WitCatBBcode.textalign.2': 'Align right',
        'WitCatBBcode.setinsite.1': 'shadow',
        'WitCatBBcode.setinsite.2': 'text shadow',
        'WitCatBBcode.setnum': '⚠️ set maximum parsedable to[num]',
      },
    });
  }

  /**
   * 翻译
   * @param {string} id
   * @return {string}
   */
  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    });
  }

  getInfo() {
    return {
      id: witcat_BBcode_extensionId, // 拓展id
      name: this.formatMessage('WitCatBBcode.name'), // 拓展名
      blockIconURI: witcat_BBcode_icon,
      menuIconURI: witcat_BBcode_icon,
      color1: '#e16c96',
      color2: '#c75f85',
      blocks: [
        {
          blockType: 'button',
          text: this.formatMessage('WitCatBBcode.docs'),
          onClick: this.docs,
        },
        {
          opcode: 'setnum',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.setnum'),
          arguments: {
            num: {
              type: 'number',
              defaultValue: '300',
            },
          },
        },
        `---${this.formatMessage('WitCatBBcode.name')}`,
        {
          opcode: 'create',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.create'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            x: {
              type: 'number',
              defaultValue: '0',
            },
            y: {
              type: 'number',
              defaultValue: '0',
            },
            width: {
              type: 'number',
              defaultValue: '100',
            },
            height: {
              type: 'number',
              defaultValue: '100',
            },
            text: {
              type: 'string',
              defaultValue: 'wit_cat!!!',
            },
          },
        },
        {
          opcode: 'set',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.set'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            type: {
              type: 'string',
              menu: 'types',
            },
            text: {
              type: 'string',
              defaultValue: '0',
            },
          },
        },
        {
          opcode: 'imgstyle',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.imgstyle'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            num: {
              type: 'number',
              defaultValue: '1',
            },
            width: {
              type: 'string',
              defaultValue: '100',
            },
            height: {
              type: 'string',
              defaultValue: '100',
            },
          },
        },
        {
          opcode: 'code',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.code'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            num: {
              type: 'number',
              defaultValue: '1',
            },
            name: {
              type: 'string',
              menu: 'code',
            },
          },
        },
        {
          opcode: 'ide',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.ide'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            num: {
              type: 'number',
              defaultValue: '1',
            },
            name: {
              type: 'string',
              menu: 'ide',
            },
          },
        },
        {
          opcode: 'size',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.size'),
          arguments: {
            type: {
              type: 'boolean',
              menu: 'typess',
            },
          },
        },
        {
          opcode: 'setfont',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.setfontfamily'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            name: {
              type: 'string',
              defaultValue: 'arial',
            },
          },
        },
        {
          opcode: 'loadfont',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.loadfontfamily'),
          arguments: {
            text: {
              type: 'string',
              defaultValue: 'url',
            },
            name: {
              type: 'string',
              defaultValue: 'arial',
            },
          },
        },
        {
          opcode: 'morecontent',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.morecontent'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            show: {
              type: 'string',
              menu: 'show',
            },
          },
        },
        {
          opcode: 'meter',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.meter'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            text: {
              type: 'number',
              defaultValue: '0',
            },
          },
        },
        {
          opcode: 'delete',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.delete'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
          },
        },
        {
          opcode: 'deleteall',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.deleteall'),
          arguments: {},
        },
        {
          opcode: 'get',
          blockType: 'reporter',
          text: this.formatMessage('WitCatBBcode.get'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            type: {
              type: 'string',
              menu: 'type',
            },
          },
        },
        {
          opcode: 'getwidth',
          blockType: 'reporter',
          text: this.formatMessage('WitCatBBcode.getwidth'),
          arguments: {
            content: {
              type: 'string',
              defaultValue: 'witcat',
            },
            type: {
              type: 'string',
              menu: 'width',
            },
          },
        },
        {
          opcode: 'click',
          blockType: 'reporter',
          text: this.formatMessage('WitCatBBcode.click'),
          arguments: {
            clickmenu: {
              type: 'string',
              menu: 'clickmenu',
            },
          },
        },
        {
          opcode: 'touchs',
          blockType: 'reporter',
          text: this.formatMessage('WitCatBBcode.touchs'),
          arguments: {
            clickmenu: {
              type: 'string',
              menu: 'clickmenu',
            },
          },
        },
        {
          opcode: 'touch',
          blockType: 'Boolean',
          text: this.formatMessage('WitCatBBcode.touch'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            number: {
              type: 'number',
              defaultValue: '1',
            },
            type: {
              type: 'string',
              defaultValue: 'img',
            },
          },
        },
        {
          opcode: 'settextalign',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.settextalign'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            num: {
              type: 'number',
              defaultValue: '1',
            },
            type: {
              type: 'string',
              defaultValue: 'all',
            },
            text: {
              type: 'number',
              menu: 'textalign',
            },
          },
        },
        {
          opcode: 'move',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.move'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            number: {
              type: 'number',
              defaultValue: '1',
            },
            type: {
              type: 'string',
              defaultValue: 'img',
            },
            x: {
              type: 'number',
              defaultValue: '0',
            },
            y: {
              type: 'number',
              defaultValue: '0',
            },
          },
        },
        {
          opcode: 'scale',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.scale'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            number: {
              type: 'number',
              defaultValue: '1',
            },
            type: {
              type: 'string',
              defaultValue: 'img',
            },
            x: {
              type: 'number',
              defaultValue: '0',
            },
            y: {
              type: 'number',
              defaultValue: '0',
            },
          },
        },
        {
          opcode: 'rot',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.rot'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            number: {
              type: 'number',
              defaultValue: '1',
            },
            type: {
              type: 'string',
              defaultValue: 'img',
            },
            y: {
              type: 'number',
              defaultValue: '0',
            },
          },
        },
        {
          opcode: 'dmove',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.3dmove'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            number: {
              type: 'number',
              defaultValue: '1',
            },
            type: {
              type: 'string',
              defaultValue: 'img',
            },
            x: {
              type: 'number',
              defaultValue: '0',
            },
            y: {
              type: 'number',
              defaultValue: '0',
            },
            z: {
              type: 'number',
              defaultValue: '0',
            },
          },
        },
        {
          opcode: 'drot',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.3drot'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            number: {
              type: 'number',
              defaultValue: '1',
            },
            type: {
              type: 'string',
              defaultValue: 'img',
            },
            x: {
              type: 'number',
              defaultValue: '0',
            },
            y: {
              type: 'number',
              defaultValue: '0',
            },
            z: {
              type: 'number',
              defaultValue: '0',
            },
          },
        },
        {
          opcode: 'setinsite',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.setinsite'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            number: {
              type: 'number',
              defaultValue: '1',
            },
            type: {
              type: 'string',
              defaultValue: 'img',
            },
            input: {
              type: 'string',
              menu: 'setinsite',
            },
            text: {
              type: 'string',
              defaultValue: '0',
            },
          },
        },
        {
          opcode: 'transition',
          blockType: 'command',
          text: this.formatMessage('WitCatBBcode.transition'),
          arguments: {
            id: {
              type: 'string',
              defaultValue: 'i',
            },
            s: {
              type: 'number',
              defaultValue: '1',
            },
            timing: {
              type: 'string',
              menu: 'timing',
            },
          },
        },
        {
          opcode: 'docss',
          blockType: 'reporter',
          text: this.formatMessage('WitCatBBcode.docss'),
          disableMonitor: true,
          arguments: {},
        },
      ],
      menus: {
        type: [
          {
            text: this.formatMessage('WitCatBBcode.type.1'),
            value: 'x',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.2'),
            value: 'y',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.3'),
            value: 'width',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.4'),
            value: 'height',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.5'),
            value: 'content',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.8'),
            value: 'ContentHeight',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.9'),
            value: 'Longitudinal',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.10'),
            value: 'ContentWidth',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.11'),
            value: 'Horizontal',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.6'),
            value: 'json',
          },
        ],
        types: [
          {
            text: this.formatMessage('WitCatBBcode.type.1'),
            value: 'x',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.2'),
            value: 'y',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.3'),
            value: 'width',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.4'),
            value: 'height',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.5'),
            value: 'content',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.7'),
            value: 'perspective',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.9'),
            value: 'Longitudinal',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.11'),
            value: 'Horizontal',
          },
        ],
        typess: [
          {
            text: this.formatMessage('WitCatBBcode.types.1'),
            value: 'true',
          },
          {
            text: this.formatMessage('WitCatBBcode.types.2'),
            value: 'false',
          },
        ],
        code: [
          {
            text: 'javascript',
            value: 'language-javascript',
          },
          {
            text: 'css',
            value: 'language-css',
          },
          {
            text: 'HTML',
            value: 'language-html',
          },
          {
            text: 'python',
            value: 'language-python',
          },
        ],
        ide: [
          {
            text: this.formatMessage('WitCatBBcode.ide.1'),
            value: 'true',
          },
          {
            text: this.formatMessage('WitCatBBcode.ide.2'),
            value: 'false',
          },
        ],
        width: [
          {
            text: this.formatMessage('WitCatBBcode.type.3'),
            value: 'width',
          },
          {
            text: this.formatMessage('WitCatBBcode.type.4'),
            value: 'height',
          },
        ],
        clickmenu: [
          {
            text: this.formatMessage('WitCatBBcode.clickmenu.1'),
            value: 'bbcode',
          },
          {
            text: this.formatMessage('WitCatBBcode.clickmenu.2'),
            value: 'type',
          },
          {
            text: this.formatMessage('WitCatBBcode.clickmenu.3'),
            value: 'number',
          },
        ],
        timing: [
          {
            text: this.formatMessage('WitCatBBcode.timing.1'),
            value: 'linear',
          },
          {
            text: this.formatMessage('WitCatBBcode.timing.2'),
            value: 'ease-out',
          },
          {
            text: this.formatMessage('WitCatBBcode.timing.3'),
            value: 'ease-in',
          },
          {
            text: this.formatMessage('WitCatBBcode.timing.4'),
            value: 'ease-in-out',
          },
          {
            text: this.formatMessage('WitCatBBcode.timing.5'),
            value: 'ease',
          },
        ],
        textalign: [
          {
            text: this.formatMessage('WitCatBBcode.textalign.1'),
            value: 'left',
          },
          {
            text: this.formatMessage('WitCatBBcode.textalign.2'),
            value: 'right',
          },
        ],
        setinsite: [
          {
            text: this.formatMessage('WitCatBBcode.setinsite.1'),
            value: 'shadow',
          },
          {
            text: this.formatMessage('WitCatBBcode.setinsite.2'),
            value: 'textShadow',
          },
        ],
        show: [
          {
            text: this.formatMessage('WitCatBBcode.show.1'),
            value: 'more',
          },
          {
            text: this.formatMessage('WitCatBBcode.show.2'),
            value: 'fold',
          },
        ],
      },
    };
  }

  /** 打开教程 */
  docs() {
    const a = document.createElement('a');
    a.href = 'https://www.ccw.site/post/7d129e01-e30a-4d88-92d2-320b555ed0f5';
    a.rel = 'noopener noreferrer';
    a.target = '_blank';
    a.click();
  }

  /**
   * 限制值的范围，如果值是NaN，返回最小值
   * @param {number} x 数值
   * @param {number} min 最小值
   * @param {number} max 最大值
   * @return {number}
   */
  _clamp(x, min, max) {
    return isNaN(x) ? min : x < min ? min : x > max ? max : x;
    // return isNaN(x) ? min : Math.min(max, Math.max(min, x));
  }

  setnum(args) {
    this.maxParsedable = Number(args.num);
  }

  /**
   * 创建文本框
   * @param {Object} args
   */
  create(args) {
    if (this.canvas() === null || this.inputParent() === null) {
      console.error(this.canvas(), this.inputParent());
      return;
    }
    let x = Number(args.x);
    let y = Number(args.y);
    let width = Number(args.width);
    let height = Number(args.height);
    x = this._clamp(x, 0, this.runtime.stageWidth);
    y = this._clamp(y, 0, this.runtime.stageHeight);
    width = this._clamp(width, 0, this.runtime.stageWidth - x);
    height = this._clamp(height, 0, this.runtime.stageHeight - y);
    x = (x / this.runtime.stageWidth) * 100;
    y = (y / this.runtime.stageHeight) * 100;
    width = (width / this.runtime.stageWidth) * 100;
    height = (height / this.runtime.stageHeight) * 100;

    /** @type {HTMLDivElement|null} */
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
    }
    if (search !== null) {
      this.inputParent().removeChild(search);
      search = null;
    }
    if (search === null) {
      search = document.createElement('div');
      search.id = `WitCatBBcode${args.id}`;
      search.className = 'WitCatBBcodeOut';
      search.style.overflow = 'auto';
      search.style.webkitUserSelect = 'text';
      search.style.userSelect = 'text';
      this.inputParent().appendChild(search);
    }

    const sstyle = search.style;
    sstyle.position = 'absolute';
    sstyle.left = `${x}%`;
    sstyle.top = `${y}%`;
    sstyle.width = `${width}%`;
    sstyle.height = `${height}%`;
    search.innerHTML = `<div class='WitCatBBcode'>${new bbcode.Parser().toHTML(String(args.text), this.runtime, this.maxParsedable)}</div>`;
  }

  imgstyle(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
    }
    if (search !== null) {
      if (search.getElementsByTagName('img').length > args.num - 1 && args.num > 0) {
        search.getElementsByTagName('img')[args.num - 1].style.width = args.width == '' ? '' : `${args.width}px`;
        search.getElementsByTagName('img')[args.num - 1].style.height = args.height == '' ? '' : `${args.height}px`;
      }
    }
  }

  /**
   * 设置bbcode
   * @param {object} args
   * @param {SCarg} args.id ID
   * @param {SCarg} args.type 属性类型
   * @param {SCarg} args.text 属性值
   */
  set(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
    }
    if (search !== null) {
      const sstyle = search.style;
      let x;
      let y;
      let width;
      let height;
      switch (args.type) {
        case 'x':
          x = this._clamp(Number(args.text), 0, this.runtime.stageWidth);
          x = (x / this.runtime.stageWidth) * 100;
          sstyle.left = `${x}%`;
          break;
        case 'y':
          y = this._clamp(Number(args.text), 0, this.runtime.stageHeight);
          y = (y / this.runtime.stageHeight) * 100;
          sstyle.top = `${y}%`;
          break;
        case 'width':
          x = (parseFloat(sstyle.left) / 100) * this.runtime.stageWidth;
          width = this._clamp(Number(args.text), 0, this.runtime.stageWidth - x);
          width = (width / this.runtime.stageWidth) * 100;
          sstyle.width = `${Number(width)}%`;
          break;
        case 'height':
          y = (parseFloat(sstyle.top) / 100) * this.runtime.stageHeight;
          height = this._clamp(Number(args.text), 0, this.runtime.stageHeight - y);
          height = (height / this.runtime.stageHeight) * 100;
          sstyle.height = `${Number(height)}%`;
          break;
        case 'content':
          search.innerHTML = `<div class='WitCatBBcode'>${new bbcode.Parser().toHTML(String(args.text), this.runtime, this.maxParsedable)}</div>`;
          break;
        case 'perspective':
          search.firstChild.style.perspective = `${Number(args.text)}px`;
          break;
        case 'Longitudinal':
          search.scrollTo({ top: Number(args.text) });
          break;
        case 'Horizontal':
          search.scrollTo({ left: Number(args.text) });
          break;
        default:
          break;
      }
    }
  }

  morecontent(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcodepolier${args.id}`);
    if (search_1 instanceof HTMLSpanElement) {
      search = search_1;
    }
    if (search !== null) {
      let a = search.getElementsByTagName("button")[0];
      if (args.show === "more") {
        search.style.height = `100%`;
        if (a)
          a.innerText = a.innerText === 'more' || a.innerText === 'fold' ? 'fold' : '收起';
      }
      else {
        search.style.height = `${search.getAttribute("height")}px`;
        if (a)
          a.innerText = a.innerText === 'fold' || a.innerText === 'more' ? 'more' : '展开';
      }
    }
  }

  meter(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcodeMeter${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
    }
    if (search !== null) {
      search.style.width = `${Number(args.text)}%`;
    }
  }

  /**
   * 设置字体
   * @param {object} args
   * @param {string} args.id ID
   * @param {string} args.name 要设置的字体
   */
  setfont(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
    }
    if (search !== null) {
      search.style.fontFamily = `"${args.name}"`;
    }
  }

  /**
   * 设置代码框高亮
   * @param {object} args
   */
  code(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
    }
    if (search !== null) {
      if (search.getElementsByTagName('code').length > args.num - 1 && args.num > 0) {
        const a = search.getElementsByTagName('code')[args.num - 1].children;
        a.forEach((e) => {
          e.className = args.name;
        });
        Prism.highlightAll();
      }
    }
  }

  ide(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
    }
    if (search !== null) {
      search.setAttribute('contenteditable', args.name);
      search.style.outline = 'none';
    }
  }

  getwidth(args) {
    if (this.canvas() === null || this.inputParent() === null) {
      console.error(this.canvas(), this.inputParent());
      return;
    }
    const search = document.createElement('span');
    search.style.position = 'fixed';
    search.className = 'WitCatBBcode';
    search.innerHTML = `<div class='WitCatBBcode'>${new bbcode.Parser().toHTML(String(args.content), this.runtime, this.maxParsedable)}</div>`;
    document.body.appendChild(search);
    const cvsw = this.canvas().offsetWidth;
    const cvsh = this.canvas().offsetHeight;
    let outw;
    let out;
    switch (args.type) {
      case 'width':
        outw = search.offsetWidth;
        search.remove();
        out = outw * (this.runtime.stageWidth / (cvsw * 0.748));
        return out;
      case 'height':
        outw = search.offsetHeight;
        search.remove();
        out = outw * (this.runtime.stageHeight / (cvsh * 0.777));
        return out;
    }
    return '';
  }

  size(args) {
    if (this.canvas() === null) {
      return;
    }
    if (args.type === 'true') {
      if (this.resize === null) {
        this.resize = new ResizeObserver(() => {
          document.documentElement.style.setProperty('--witcat-bbcode-scale', `scale(${parseFloat(this.canvas().offsetWidth) / 360})`);
        });
        this.resize.observe(this.canvas(), { attributes: true, attributeFilter: ['style'] });
      }
    } else {
      if (this.resize !== null) {
        this.resize.disconnect();
        this.resize = null;
      }
    }
  }

  setinsite(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
      const ele = search.getElementsByTagName(String(args.type))[Number(args.number) - 1];
      if (ele !== undefined) {
        switch (String(args.input)) {
          case "shadow":
            ele.style.boxShadow = String(args.text);
            break;
          case "textShadow":
            ele.style.textShadow = String(args.text);
            break;
          default:
            break;
        }
      }
    }
  }

  /**
   * 加载字体
   * @param {object} args
   * @param {string} args.id ID
   * @param {string} args.name 要获取的字体
   */
  loadfont(args) {
    if (
      String(args.text).startsWith('https://m.ccw.site') ||
      String(args.text).startsWith('https://m.xiguacity') ||
      String(args.text).startsWith('https://static.xiguacity')
    ) {
      const xhr = new XMLHttpRequest(); // 定义一个异步对象
      xhr.open('GET', String(args.text), true); // 异步GET方式加载字体
      xhr.responseType = 'arraybuffer'; // 把异步获取类型改为arraybuffer二进制类型
      xhr.onload = function () {
        document.fonts.add(new FontFace(String(args.name), this.response)); // 将字体对象添加到页面中
      };
      xhr.send();
    } else {
      console.warn('不允许的链接\nDisallowed links');
    }
  }

  click(args) {
    let out = '';
    if (JSON.stringify(bbcodemousedown) !== '{}') {
      const s = document.getElementsByClassName('WitCatBBcode');
      s.forEach((e) => {
        if (e.contains(bbcodemousedown.target)) {
          switch (args.clickmenu) {
            case 'bbcode':
              out = e.parentElement.id.split('WitCatBBcode')[1];
              break;
            case 'type':
              out = bbcodemousedown.target.tagName.toLowerCase();
              break;
            case 'number':
              const ss = e.getElementsByTagName(bbcodemousedown.target.tagName.toLowerCase());
              for (let i = 0; i < ss.length; i++) {
                if (ss[i] === bbcodemousedown.target) {
                  out = i + 1;
                  return;
                }
              }
              break;
            default:
              break;
          }
        }
      });
    }
    return out;
  }

  touchs(args) {
    let out = '';
    if (JSON.stringify(touchEvent) !== '{}') {
      const s = document.getElementsByClassName('WitCatBBcode');
      s.forEach((e) => {
        if (e.contains(touchEvent.target)) {
          switch (args.clickmenu) {
            case 'bbcode':
              out = e.parentElement.id.split('WitCatBBcode')[1];
              break;
            case 'type':
              out = touchEvent.target.tagName.toLowerCase();
              break;
            case 'number':
              const ss = e.getElementsByTagName(touchEvent.target.tagName.toLowerCase());
              for (let i = 0; i < ss.length; i++) {
                if (ss[i] === touchEvent.target) {
                  out = i + 1;
                  return;
                }
              }
              break;
            default:
              break;
          }
        }
      });
    }
    return out;
  }

  touch(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
      if (Number(args.number) > 0) {
        const ele = search.getElementsByTagName(String(args.type))[Number(args.number) - 1];
        if (ele !== undefined) {
          return JSON.stringify(touchEvent) !== '{}' && touchEvent.target === ele;
        }
      } else {
        const ele = search.getElementsByTagName(String(args.type));
        return JSON.stringify(touchEvent) !== '{}' && ele.some((e) => e === touchEvent.target);
      }
    }
    return false;
  }

  move(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
      const ele = search.getElementsByTagName(String(args.type))[Number(args.number) - 1];
      if (ele !== undefined) {
        ele.style.transition = search.style.transition;
        ele.style.display = 'inline-block';
        const regex = /translate\([^,]+px, [^,]+px\)/g;
        ele.style.transform = `${ele.style.transform.replace(regex, '')} translate(${args.x}px,${args.y}px)`;
      }
    }
  }

  scale(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
      const ele = search.getElementsByTagName(String(args.type))[Number(args.number) - 1];
      if (ele !== undefined) {
        ele.style.transition = search.style.transition;
        ele.style.display = 'inline-block';
        const regex = /scale\([^,], [^,]\)/g;
        ele.style.transform = `${ele.style.transform.replace(regex, '')} scale(${args.x},${args.y})`;
      }
    }
  }

  rot(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
      const ele = search.getElementsByTagName(String(args.type))[Number(args.number) - 1];
      if (ele !== undefined) {
        ele.style.transition = search.style.transition;
        ele.style.display = 'inline-block';
        const regex = /rotate\([^)]+deg\)/g;
        ele.style.transform = `${ele.style.transform.replace(regex, '')} rotate(${args.y}deg)`;
      }
    }
  }

  dmove(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
      const ele = search.getElementsByTagName(String(args.type))[Number(args.number) - 1];
      if (ele !== undefined) {
        ele.style.transition = search.style.transition;
        ele.style.display = 'inline-block';
        const regex = /translate3d\([^,]+px, [^,]+px, [^,]+px\)/g;
        ele.style.transform = `${ele.style.transform.replace(regex, '')} translate3d(${args.x}px,${args.y}px,${args.z
          }px)`;
      }
    }
  }

  drot(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
      const ele = search.getElementsByTagName(String(args.type))[Number(args.number) - 1];
      if (ele !== undefined) {
        ele.style.display = 'inline-block';
        ele.style.transform = `${ele.style.transform.replace(/rotateX\([^,]+deg\)/g, '')} rotateX(${args.x}deg)`;
        ele.style.transform = `${ele.style.transform.replace(/rotateY\([^,]+deg\)/g, '')} rotateY(${args.y}deg)`;
        ele.style.transform = `${ele.style.transform.replace(/rotateZ\([^,]+deg\)/g, '')} rotateZ(${args.z}deg)`;
      }
    }
  }

  transition(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
      search.style.transition = `all ${args.s}s ${args.timing}`;
    }
  }

  settextalign(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
      if (String(args.type) === 'all') {
        search.firstChild.style.float = String(args.text);
      } else {
        const ele = search.getElementsByTagName(String(args.type))[Number(args.num) - 1];
        if (ele !== undefined) {
          ele.style.float = String(args.text);
        }
      }
    }
  }

  /**
   * 获取代码返回值
   * @param {Object} args
   */
  get(args) {
    if (this.canvas() === null || this.inputParent() === null) {
      return;
    }
    let search = null;
    const search_1 = document.getElementById(`WitCatBBcode${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
    }
    if (search !== null) {
      return this._getattrib(search, args.type);
    }
  }

  /**
   * 删除文本框
   * @param {Object} args
   * @returns
   */
  delete(args) {
    if (this.inputParent() === null) {
      return;
    }
    const search = document.getElementById(`WitCatBBcode${args.id}`);
    if (search !== null) {
      this.inputParent().removeChild(search);
    }
  }

  /**
   * 删除所有文本框
   * @param {Object} args
   * @returns
   */
  deleteall() {
    if (this.inputParent() === null) {
      return;
    }
    const search = document.getElementsByClassName('WitCatBBcode');
    for (const item of Array.from(search)) {
      item.parentElement.remove();
    }
  }

  /**
   * 获取示例BBcode
   * @returns {string}
   */
  docss() {
    return this.formatMessage('WitCatBBcode.tutorial');
  }

  /**
   * 获取文本框的属性
   * @param {Element} element 文本框元素
   * @param {string} type 属性类型
   * @returns {number|string}
   */
  _getattrib(element, type) {
    // 用于通过类型检查，确保不出错
    if (!(element instanceof HTMLDivElement)) {
      console.warn('Input.js: 获取到的元素的类型不正确: ', element);
      return '';
    }
    switch (type) {
      case 'x':
        return (parseFloat(element.style.left) / 100) * this.runtime.stageWidth;
      case 'y':
        return (parseFloat(element.style.top) / 100) * this.runtime.stageHeight;
      case 'width':
        return (parseFloat(element.style.width) / 100) * this.runtime.stageWidth;
      case 'height':
        return (parseFloat(element.style.height) / 100) * this.runtime.stageHeight;
      case 'content':
        return htmltobbcode(String(element.innerHTML));
      case 'ContentHeight':
        return element.scrollHeight;
      case 'ContentWidth':
        return element.scrollWidth;
      case 'Longitudinal':
        return element.scrollTop;
      case 'Horizontal':
        return element.scrollLeft;
      case 'json':
        // 直接把整个东西转成 JSON 对象，再拼接
        return JSON.stringify({
          X: this._getattrib(element, 'x'),
          Y: this._getattrib(element, 'y'),
          width: this._getattrib(element, 'width'),
          height: this._getattrib(element, 'height'),
          content: this._getattrib(element, 'content'),
        });
      default:
        return '';
    }
  }
}

window.tempExt = {
  Extension: WitCatBBcode,
  info: {
    name: "WitCatBBcode.name",
    description: "WitCatBBcode.descp",
    extensionId: witcat_BBcode_extensionId,
    iconURL: witcat_BBcode_picture,
    insetIconURL: witcat_BBcode_icon,
    featured: true,
    disabled: false,
    collaborator: "白猫 @ CCW"
  },
  l10n: {
    "zh-cn": {
      "WitCatBBcode.name": "白猫的BBcode",
      "WitCatBBcode.descp": "更优雅的文本框"
    },
    en: {
      "WitCatBBcode.name": "WitCat’s BBcode",
      "WitCatBBcode.descp": "Make your text box more colorful"
    }
  }
};
