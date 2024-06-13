/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import Prism from './prism.js';
import { witcat_markdown_icon, witcat_markdown_picture } from './assets/index.js';
import markdown from './MarkDown.js';

const witcat_markdown_extensionId = 'WitCatMarkDowns';
let markdownmousedown = {};
let touchEvent = {};
/**
 * 获取到的返回值
 */

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字、布尔和文本（极端情况下还有 null 或 undefined，需要同时处理 */

export default class WitCatMarkDown {
  constructor(runtime) {
    window.addEventListener('mousedown', (e) => {
      markdownmousedown = e;
    });

    window.addEventListener('mousemove', (e) => {
      touchEvent = e;
    });

    this.runtime = runtime;

    this.resize = null;
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
    document.documentElement.style.setProperty('--witcat-markdown-scale', '1');
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
      .WitCatMarkDownOut::-webkit-scrollbar{
          display: none;
      }
      .WitCatMarkDown::-webkit-scrollbar{
          display: none;
      }
      .WitCatMarkDown{
          color:black;
      }
      .WitCatMarkDown br{
        display: block;
          height: 0px;
      }
      .WitCatMarkDown{
          transform-origin: 0 0;
          transform:var(--witcat-markdown-scale);
      }
      .WitCatMarkDown ul{
          padding-inline-start: 40px;
          list-style:none;
      }
      .WitCatMarkDown ol{
          padding-inline-start: 40px;
          list-style:auto;
      }
      .WitCatMarkDown blockquote{
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 40px;
          margin-inline-end: 40px;
      }
      .WitCatMarkDownpolier{
        display: inline-block;
        white-space: nowrap;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
      }
      .WitCatMarkDownpolier button{
        background-color: #00000000;
        color: #1A96E2;
        position: absolute;
        right: 0px;
        bottom: 0px;
        border-radius: 0.5em;
      }
      .WitCatMarkDownHide{
        background-color: #252525;
        color: #252525;
        text-shadow: none;
        border-radius: 0.5em;
      }
      .WitCatMarkDownHide:hover{
        color: white !important;
      }
      .WitCatMarkDowng-container {
        width: 240px;
        height: 10px;
        border-radius: 0.5em;
        background: #eee;
      }
      .WitCatMarkDowng-progress {
        width: 50%;
        height: inherit;
        border-radius: 0.5em;
        background: #0f0;
      }
      .WitCatMarkDownTable{
        border: 1px solid black;
        border-collapse: separate;
      }
      .WitCatMarkDownTable td{
        border: 1px solid black;
        padding: 8px;
      }
      code[class*=language-],
pre[class*=language-] {
    color: #000;
    background: 0 0;
    text-shadow: 0 1px #fff;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none
}

code[class*=language-] ::-moz-selection,
code[class*=language-]::-moz-selection,
pre[class*=language-] ::-moz-selection,
pre[class*=language-]::-moz-selection {
    text-shadow: none;
    background: #b3d4fc
}

code[class*=language-] ::selection,
code[class*=language-]::selection,
pre[class*=language-] ::selection,
pre[class*=language-]::selection {
    text-shadow: none;
    background: #b3d4fc
}

@media print {

    code[class*=language-],
    pre[class*=language-] {
        text-shadow: none
    }
}

pre[class*=language-] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto
}

:not(pre)>code[class*=language-],
pre[class*=language-] {
    background: #00000000
}

:not(pre)>code[class*=language-] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal
}

.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
    color: #708090
}

.token.punctuation {
    color: #999
}

.token.namespace {
    opacity: .7
}

.token.boolean,
.token.constant,
.token.deleted,
.token.number,
.token.property,
.token.symbol,
.token.tag {
    color: #905
}

.token.attr-name,
.token.builtin,
.token.char,
.token.inserted,
.token.selector,
.token.string {
    color: #690
}

.language-css .token.string,
.style .token.string,
.token.entity,
.token.operator,
.token.url {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, .5)
}

.token.atrule,
.token.attr-value,
.token.keyword {
    color: #07a
}

.token.class-name,
.token.function {
    color: #dd4a68
}

.token.important,
.token.regex,
.token.variable {
    color: #e90
}

.token.bold,
.token.important {
    font-weight: 700
}

.token.italic {
    font-style: italic
}

.token.entity {
    cursor: help
}

.token a {
    color: inherit
}

span.inline-color-wrapper {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyIDIiPjxwYXRoIGZpbGw9ImdyYXkiIGQ9Ik0wIDBoMnYySDB6Ii8+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0wIDBoMXYxSDB6TTEgMWgxdjFIMXoiLz48L3N2Zz4=);
    background-position: center;
    background-size: 110%;
    display: inline-block;
    height: 1.333ch;
    width: 1.333ch;
    margin: 0 .333ch;
    box-sizing: border-box;
    border: 1px solid #fff;
    outline: 1px solid rgba(0, 0, 0, .5);
    overflow: hidden
}

span.inline-color {
    display: block;
    height: 120%;
    width: 120%
}
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
        'WitCatMarkDown.name': '白猫的markdown',
        'WitCatMarkDown.docs': '📖拓展教程',
        'WitCatMarkDown.docss': '📖示例内容',
        'WitCatMarkDown.tutorial':
          '# 欢迎使用 Markdown 拓展\r\n\r\n这是首次使用 **Markdown 拓展** 自动生成的内容，包含 Markdown 语法和拓展介绍\r\n\r\n## 文本样式\r\n\r\n加粗|**加粗1** __加粗2__  \r\n斜体|*斜体1* _斜体2_\r\n***\r\n若你在写常规文本时，需要换行，直接换行是无法成功换行的。\r\n就像这样  \r\n需要换行的话，需要在一行末尾加上两个空格  \r\n就像这样\r\n\r\n## 引用\r\n\r\n> 白猫的markdown拓展！！！\r\n\r\n## 链接\r\n\r\n*鼠标点击*打开链接\r\n\r\n[ccw 官网](https://www.ccw.site)\r\n\r\n## 图片\r\n\r\n如下：一个图片\r\n\r\n![展示](https://m.xiguacity.cn/avatar/6173f57f48cf8f4796fc860e/dbadfc1c-3ab5-49a2-aa69-01465f3f0738.jpg?x-oss-process=image%2Fresize%2Cs_150%2Fformat%2Cwebp)\r\n\r\n*图片可拖动为文件到任意窗口使用*\r\n\r\n## 无序列表\r\n\r\n- 项目\r\n  - 项目 1\r\n    - 项目 A\r\n    - 项目 B\r\n  - 项目 2\r\n\r\n## 有序列表\r\n\r\n1. 项目 1\r\n   1. 项目 A\r\n   2. 项目 B\r\n2. 项目 2\r\n\r\n## 任务列表\r\n\r\n- [x] A 计划\r\n  - [x] A1 计划\r\n  - [ ] A2 计划\r\n- [ ] B 计划\r\n\r\n## 代码块\r\n\r\n    print(\"wit_cat!!!\")\r\n    print(\"白猫！！！\")\r\n\r\n## 分割线\r\n***\r\n没错就是这个\r\n\r\n***',
        'WitCatMarkDown.create': '创建 markdown ID[id]X[x]Y[y]宽[width]高[height]内容[text]',
        'WitCatMarkDown.delete': '删除 markdown ID[id]',
        'WitCatMarkDown.deleteall': '删除所有 markdown ',
        'WitCatMarkDown.get': ' markdown ID[id]的[type]',
        'WitCatMarkDown.set': '设置 markdown ID[id]的[type]为[text]',
        "WitCatMarkDown.sets": "设置 markdown ID[id]第[num]个[type]的样式为[text]",
        'WitCatMarkDown.settextalign': '设置 markdown ID[id]第[num]个[type]为[text]',
        'WitCatMarkDown.imgstyle': ' markdown ID[id]的第[num]张图片的宽[width]高[height]',
        'WitCatMarkDown.loadfontfamily': '从[text]加载字体名[name]',
        'WitCatMarkDown.setfontfamily': '设置 markdown ID[id]的字体为[name]',
        'WitCatBBcodes.code': '设置 markdown ID[id]第[num]个代码框的高亮为[name]',
        'WitCatMarkDown.ide': '设置 markdown ID[id]为[name]',
        'WitCatMarkDown.size': 'markdown大小自适应[type]',
        'WitCatMarkDown.type.1': 'X',
        'WitCatMarkDown.type.2': 'Y',
        'WitCatMarkDown.type.3': '宽',
        'WitCatMarkDown.type.4': '高',
        'WitCatMarkDown.type.5': '内容',
        'WitCatMarkDown.type.6': 'json',
        'WitCatMarkDown.type.7': '透视',
        'WitCatMarkDown.type.8': '内容高度',
        'WitCatMarkDown.type.9': '纵向滚动位置',
        'WitCatMarkDown.type.10': '内容宽度',
        'WitCatMarkDown.type.11': '横向滚动位置',
        'WitCatMarkDown.ide.1': '可编辑',
        'WitCatMarkDown.ide.2': '不可编辑',
        'WitCatMarkDown.types.1': '启动',
        'WitCatMarkDown.types.2': '关闭',
        'WitCatMarkDown.getwidth': '获取内容[content]的渲染[type]',
        'WitCatMarkDown.click': '上次点击的元素的[clickmenu]',
        'WitCatMarkDown.touchs': '碰到的元素的[clickmenu]',
        'WitCatMarkDown.clickmenu.1': 'markdown来源',
        'WitCatMarkDown.clickmenu.2': '类型',
        'WitCatMarkDown.clickmenu.3': '序号',
        'WitCatMarkDown.touch': '碰到markdown[id]第[number]个[type]元素?',
        'WitCatMarkDown.move': 'markdown[id]第[number]个[type]元素偏移X[x]Y[y]',
        'WitCatMarkDown.scale': 'markdown[id]第[number]个[type]元素缩放X[x]Y[y]',
        'WitCatMarkDown.rot': 'markdown[id]第[number]个[type]元素旋转[y]',
        'WitCatMarkDown.3dmove': 'markdown[id]第[number]个[type]元素3D偏移X[x]Y[y]Z[z]',
        'WitCatMarkDown.3drot': 'markdown[id]第[number]个[type]元素3D旋转X[x]Y[y]Z[z]',
        'WitCatMarkDown.setinsite': 'markdown[id]第[number]个[type]元素的[input]设为[text]',
        'WitCatMarkDown.transition': '为markdown[id]设置过渡为[s]秒的[timing]',
        'WitCatMarkDown.timing.1': '线性',
        'WitCatMarkDown.timing.2': '缓出',
        'WitCatMarkDown.timing.3': '缓入',
        'WitCatMarkDown.timing.4': '缓出入',
        'WitCatMarkDown.timing.5': '缓动',
        'WitCatMarkDown.textalign.1': '左对齐',
        'WitCatMarkDown.textalign.2': '右对齐',
        'WitCatMarkDown.setinsite.1': '阴影',
        'WitCatMarkDown.setinsite.2': '文字阴影',
        "WitCatMarkDown.setstyle.1": "文本",
        "WitCatMarkDown.setstyle.2": "粗体",
        "WitCatMarkDown.setstyle.3": "斜体",
        "WitCatMarkDown.setstyle.4": "大号",
        "WitCatMarkDown.setstyle.5": "更大号",
        "WitCatMarkDown.setstyle.6": "超大号",
        "WitCatMarkDown.setstyle.7": "链接",
        "WitCatMarkDown.setstyle.8": "代码框",
      },
      en: {
        'WitCatMarkDown.name': 'WitCat’s markdown',
        'WitCatMarkDown.docs': '📖 Tutorial',
        'WitCatMarkDown.docss': '📖Example Content',
        'WitCatMarkDown.tutorial':
          '# Welcome to the Markdown extension\r\nThis is the first automatically generated content using **Markdown extensions **, including Markdown syntax and extensions\r\n## Text style\r\n\r\nbold | **bold1** __bold2__  \r\nitalics | *italics1*  _italics2_\r\n***\r\nIf you need to wrap a line when writing regular text, you won\'t be able to wrap a line directly.\r\nJust like this  \r\nTo wrap a line, add two Spaces at the end of the line  \r\nJust like this\r\n\r\n## Reference\r\n\r\n> wit_cat\`s Mark Down!!!\r\n\r\n## Link\r\n\r\n*Left mouse click* to open the link\r\n\r\n[Cocrea](https://cocrea.world)\r\n\r\n## Picture\r\n\r\nlook! This is a picture!\r\n\r\n![show] (https://m.xiguacity.cn/avatar/6173f57f48cf8f4796fc860e/dbadfc1c-3ab5-49a2-aa69-01465f3f0738.jpg?x-oss-process=image%2Fresize%2Cs_150%2Fformat%2Cwebp)\r\n\r\n*Image can be dragged for file to any window to use*\r\n\r\n## Unordered list\r\n\r\n- Item 1\r\n    - Item A\r\n    - Item B\r\n- Item 2\r\n\r\n## Ordered list\r\n\r\n1. Item 1\r\n    1. Item A\r\n    2. Item B\r\n2. Item 2\r\n\r\n## Task list\r\n\r\n- [x] Plan A\r\n    - [x] plan A1\r\n    - [ ] Plan A2\r\n- [ ] Plan B\r\n\r\n## Code block\r\n\r\n    print(\"wit_cat!!!\" )\r\n    print(\" White Cat!!\")\r\n\r\n## Divider\r\n***\r\nYeah, that\'s it.\r\n\r\n***',
        'WitCatMarkDown.create': 'Create markdown ID[id]X[x]Y[y] width [width] height [height] content [text]',
        'WitCatMarkDown.delete': 'Delete markdown ID[id]',
        'WitCatMarkDown.deleteall': 'Delete all markdown',
        'WitCatMarkDown.get': 'ID[id]markdown`s[type]',
        'WitCatMarkDown.set': 'set markdown ID[id]`s[type] to [text]',
        "WitCatMarkDown.sets": "Set the style of markdown ID[id] and the [num] [type] to [text]",
        'WitCatMarkDown.settextalign': 'set markdown ID[id] num [num]`s[type] to [text]',
        'WitCatMarkDown.imgstyle': 'markdown ID[id] width of [num] picture [width] height [height]',
        'WitCatMarkDown.loadfontfamily': 'load[name]from url[text]',
        'WitCatMarkDown.setfontfamily': 'set markdown ID[id]`s font family[name]',
        'WitCatBBcodes.code': 'Set the [num] code box highlighted by markdown ID[id] to [name]',
        'WitCatMarkDown.ide': 'Set markdown ID[id] to [name]',
        'WitCatMarkDown.size': 'markdown size adaptive[type]',
        'WitCatMarkDown.type.1': 'X',
        'WitCatMarkDown.type.2': 'Y',
        'WitCatMarkDown.type.3': 'width',
        'WitCatMarkDown.type.4': 'height',
        'WitCatMarkDown.type.5': 'content',
        'WitCatMarkDown.type.6': 'json',
        'WitCatMarkDown.type.7': 'perspective',
        'WitCatMarkDown.type.8': 'Content height',
        'WitCatMarkDown.type.9': 'Longitudinal roll position',
        'WitCatMarkDown.type.10': 'Content width',
        'WitCatMarkDown.type.11': 'Horizontal roll position',
        'WitCatMarkDown.ide.1': 'editable',
        'WitCatMarkDown.ide.2': 'uneditable',
        'WitCatMarkDown.types.1': 'turn on',
        'WitCatMarkDown.types.2': 'turn off',
        'WitCatMarkDown.getwidth': 'get[content]`s render[type]',
        'WitCatMarkDown.click': 'Last clicked element`s[clickmenu]',
        'WitCatMarkDown.touchs': 'Touch element`s[clickmenu]',
        'WitCatMarkDown.clickmenu.1': 'markdown Source',
        'WitCatMarkDown.clickmenu.2': 'type',
        'WitCatMarkDown.clickmenu.3': 'Serial number',
        'WitCatMarkDown.touch': 'markdown[id]num[number]`s[type]element is encountered?',
        'WitCatMarkDown.move': 'markdown[id]num[number]`s[type] element offset X[x]Y[y]',
        'WitCatMarkDown.scale': 'markdown[id]num[number]`s[type] element scale X[x]Y[y]',
        'WitCatMarkDown.rot': 'markdown[id]num[number]`s[type] element rotat [y]',
        'WitCatMarkDown.3dmove': 'markdown[id]num[number]`s[type] element 3Doffset X[x]Y[y]Z[z]',
        'WitCatMarkDown.3drot': 'markdown[id]num[number]`s[type] element 3Drotat X[x]Y[y]Z[z]',
        'WitCatMarkDown.setinsite': 'Set markdown[id]num[number]`s[type] element [input] to [text]',
        'WitCatMarkDown.transition': 'Set [timing] for markdown[id] to transition to [s] seconds',
        'WitCatMarkDown.timing.1': 'linear',
        'WitCatMarkDown.timing.2': 'ease-out',
        'WitCatMarkDown.timing.3': 'ease-in',
        'WitCatMarkDown.timing.4': 'ease-in-out',
        'WitCatMarkDown.timing.5': 'ease',
        'WitCatMarkDown.textalign.1': 'Align left',
        'WitCatMarkDown.textalign.2': 'Align right',
        'WitCatMarkDown.setinsite.1': 'shadow',
        'WitCatMarkDown.setinsite.2': 'text shadow',
        "WitCatMarkDown.setstyle.1": "text",
        "WitCatMarkDown.setstyle.2": "bold",
        "WitCatMarkDown.setstyle.3": "italic",
        "WitCatMarkDown.setstyle.4": "Large size",
        "WitCatMarkDown.setstyle.5": "more large size",
        "WitCatMarkDown.setstyle.6": "supersize",
        "WitCatMarkDown.setstyle.7": "link",
        "WitCatMarkDown.setstyle.8": "Code box",
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
      id: witcat_markdown_extensionId, // 拓展id
      name: this.formatMessage('WitCatMarkDown.name'), // 拓展名
      blockIconURI: witcat_markdown_icon,
      menuIconURI: witcat_markdown_icon,
      color1: '#1c7321',
      color2: '#114514',
      blocks: [
        {
          blockType: 'button',
          text: this.formatMessage('WitCatMarkDown.docs'),
          onClick: this.docs,
        },
        `---${this.formatMessage('WitCatMarkDown.name')}`,
        {
          opcode: 'create',
          blockType: 'command',
          text: this.formatMessage('WitCatMarkDown.create'),
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
          text: this.formatMessage('WitCatMarkDown.set'),
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
          opcode: "sets",
          blockType: "command",
          text: this.formatMessage("WitCatMarkDown.sets"),
          arguments: {
            id: {
              type: "string",
              defaultValue: 'i',
            },
            num: {
              type: "number",
              defaultValue: '1',
            },
            type: {
              type: "string",
              menu: 'settype',
            },
            text: {
              type: "string",
              defaultValue: '{"color":"red"}',
            },
          },
        },
        {
          opcode: 'imgstyle',
          blockType: 'command',
          text: this.formatMessage('WitCatMarkDown.imgstyle'),
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
          text: this.formatMessage('WitCatBBcodes.code'),
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
          text: this.formatMessage('WitCatMarkDown.ide'),
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
          text: this.formatMessage('WitCatMarkDown.size'),
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
          text: this.formatMessage('WitCatMarkDown.setfontfamily'),
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
          text: this.formatMessage('WitCatMarkDown.loadfontfamily'),
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
          opcode: 'delete',
          blockType: 'command',
          text: this.formatMessage('WitCatMarkDown.delete'),
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
          text: this.formatMessage('WitCatMarkDown.deleteall'),
          arguments: {},
        },
        {
          opcode: 'get',
          blockType: 'reporter',
          text: this.formatMessage('WitCatMarkDown.get'),
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
          text: this.formatMessage('WitCatMarkDown.getwidth'),
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
          text: this.formatMessage('WitCatMarkDown.click'),
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
          text: this.formatMessage('WitCatMarkDown.touchs'),
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
          text: this.formatMessage('WitCatMarkDown.touch'),
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
          text: this.formatMessage('WitCatMarkDown.settextalign'),
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
          text: this.formatMessage('WitCatMarkDown.move'),
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
          text: this.formatMessage('WitCatMarkDown.scale'),
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
          text: this.formatMessage('WitCatMarkDown.rot'),
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
          text: this.formatMessage('WitCatMarkDown.3dmove'),
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
          text: this.formatMessage('WitCatMarkDown.3drot'),
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
          text: this.formatMessage('WitCatMarkDown.setinsite'),
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
          text: this.formatMessage('WitCatMarkDown.transition'),
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
          text: this.formatMessage('WitCatMarkDown.docss'),
          disableMonitor: true,
          arguments: {},
        },
      ],
      menus: {
        type: [
          {
            text: this.formatMessage('WitCatMarkDown.type.1'),
            value: 'x',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.2'),
            value: 'y',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.3'),
            value: 'width',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.4'),
            value: 'height',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.5'),
            value: 'content',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.8'),
            value: 'ContentHeight',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.9'),
            value: 'Longitudinal',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.10'),
            value: 'ContentWidth',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.11'),
            value: 'Horizontal',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.6'),
            value: 'json',
          },
        ],
        types: [
          {
            text: this.formatMessage('WitCatMarkDown.type.1'),
            value: 'x',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.2'),
            value: 'y',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.3'),
            value: 'width',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.4'),
            value: 'height',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.5'),
            value: 'content',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.7'),
            value: 'perspective',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.9'),
            value: 'Longitudinal',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.11'),
            value: 'Horizontal',
          },
        ],
        typess: [
          {
            text: this.formatMessage('WitCatMarkDown.types.1'),
            value: 'true',
          },
          {
            text: this.formatMessage('WitCatMarkDown.types.2'),
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
            text: this.formatMessage('WitCatMarkDown.ide.1'),
            value: 'true',
          },
          {
            text: this.formatMessage('WitCatMarkDown.ide.2'),
            value: 'false',
          },
        ],
        width: [
          {
            text: this.formatMessage('WitCatMarkDown.type.3'),
            value: 'width',
          },
          {
            text: this.formatMessage('WitCatMarkDown.type.4'),
            value: 'height',
          },
        ],
        clickmenu: [
          {
            text: this.formatMessage('WitCatMarkDown.clickmenu.1'),
            value: 'markdown',
          },
          {
            text: this.formatMessage('WitCatMarkDown.clickmenu.2'),
            value: 'type',
          },
          {
            text: this.formatMessage('WitCatMarkDown.clickmenu.3'),
            value: 'number',
          },
        ],
        timing: [
          {
            text: this.formatMessage('WitCatMarkDown.timing.1'),
            value: 'linear',
          },
          {
            text: this.formatMessage('WitCatMarkDown.timing.2'),
            value: 'ease-out',
          },
          {
            text: this.formatMessage('WitCatMarkDown.timing.3'),
            value: 'ease-in',
          },
          {
            text: this.formatMessage('WitCatMarkDown.timing.4'),
            value: 'ease-in-out',
          },
          {
            text: this.formatMessage('WitCatMarkDown.timing.5'),
            value: 'ease',
          },
        ],
        textalign: [
          {
            text: this.formatMessage('WitCatMarkDown.textalign.1'),
            value: 'left',
          },
          {
            text: this.formatMessage('WitCatMarkDown.textalign.2'),
            value: 'right',
          },
        ],
        setinsite: [
          {
            text: this.formatMessage('WitCatMarkDown.setinsite.1'),
            value: 'shadow',
          },
          {
            text: this.formatMessage('WitCatMarkDown.setinsite.2'),
            value: 'textShadow',
          },
        ],
        show: [
          {
            text: this.formatMessage('WitCatMarkDown.show.1'),
            value: 'more',
          },
          {
            text: this.formatMessage('WitCatMarkDown.show.2'),
            value: 'fold',
          },
        ],
        settype: {
          acceptReporters: true,
          items: [
            {
              text: this.formatMessage('WitCatMarkDown.setstyle.1'),
              value: 'p'
            },
            {
              text: this.formatMessage('WitCatMarkDown.setstyle.2'),
              value: 'strong'
            },
            {
              text: this.formatMessage('WitCatMarkDown.setstyle.3'),
              value: 'em'
            },
            {
              text: this.formatMessage('WitCatMarkDown.setstyle.4'),
              value: 'h3'
            },
            {
              text: this.formatMessage('WitCatMarkDown.setstyle.5'),
              value: 'h2'
            },
            {
              text: this.formatMessage('WitCatMarkDown.setstyle.6'),
              value: 'h1'
            },
            {
              text: this.formatMessage('WitCatMarkDown.setstyle.7'),
              value: 'a'
            },
            {
              text: this.formatMessage('WitCatMarkDown.setstyle.8'),
              value: 'code'
            },
          ],
        },
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
  * 设置样式
  * @param {Object} args 
  */
  sets(args) {
    if (this.canvas() === null || this.inputParent() === null) {
      return;
    }
    let search = null;
    let search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
    }
    if (search !== null) {
      if (Number(args.num) > 0) {
        let target = search.getElementsByTagName(args.type)[args.num - 1];
        if (target !== undefined) {
          try {
            let styles = JSON.parse(args.text);
            let styles_1 = Object.keys(styles);
            let styles_2 = "";
            let forbid = [];
            styles_1.forEach(e => {
              if (!forbid.includes(e))
                if (!styles[e].includes("url"))
                  styles_2 += `${e}:${styles[e]};`;
            });
            target.style = styles_2;
          }
          catch (e) {
            console.error("WitCatMarkDown", e);
            if (e.message.includes("is not valid JSON"))
              console.error("WitCatMarkDown", "请输入正确的json字符串");
          }
        }
      }
    }
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
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
    }
    if (search !== null) {
      this.inputParent().removeChild(search);
      search = null;
    }
    if (search === null) {
      search = document.createElement('div');
      search.id = `WitCatMarkDown${args.id}`;
      search.className = 'WitCatMarkDownOut';
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
    search.innerHTML = `<div class='WitCatMarkDown'>${markdown.toHTML(String(args.text))}</div>`;

  }

  imgstyle(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
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
   * 设置markdown
   * @param {object} args
   * @param {SCarg} args.id ID
   * @param {SCarg} args.type 属性类型
   * @param {SCarg} args.text 属性值
   */
  set(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
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
          search.innerHTML = `<div class='WitCatMarkDown'>${markdown.toHTML(String(args.text))}</div>`;
          Prism.highlightAll();
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

  /**
   * 设置字体
   * @param {object} args
   * @param {string} args.id ID
   * @param {string} args.name 要设置的字体
   */
  setfont(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
    }
    if (search !== null) {
      search.style.fontFamily = `"${args.name}"`;
    }
  }

  ide(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
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
    search.className = 'WitCatMarkDown';
    search.innerHTML = `<div class='WitCatMarkDown'>${markdown.toHTML(String(args.content))}</div>`;
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
          document.documentElement.style.setProperty('--witcat-markdown-scale', `scale(${parseFloat(this.canvas().offsetWidth) / 360})`);
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
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
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
    if (JSON.stringify(markdownmousedown) !== '{}') {
      const s = document.getElementsByClassName('WitCatMarkDown');
      s.forEach((e) => {
        if (e.contains(markdownmousedown.target)) {
          switch (args.clickmenu) {
            case 'markdown':
              out = e.parentElement.id.split('WitCatMarkDown')[1];
              break;
            case 'type':
              out = markdownmousedown.target.tagName.toLowerCase();
              break;
            case 'number':
              const ss = e.getElementsByTagName(markdownmousedown.target.tagName.toLowerCase());
              for (let i = 0; i < ss.length; i++) {
                if (ss[i] === markdownmousedown.target) {
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
      const s = document.getElementsByClassName('WitCatMarkDown');
      s.forEach((e) => {
        if (e.contains(touchEvent.target)) {
          switch (args.clickmenu) {
            case 'markdown':
              out = e.parentElement.id.split('WitCatMarkDown')[1];
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
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
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
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
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

  /**
   * 设置代码框高亮
   * @param {object} args
   */
  code(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
    }
    if (search !== null) {
      if (search.getElementsByTagName('pre').length > args.num - 1 && args.num > 0) {
        const a = search.getElementsByTagName('pre')[args.num - 1].children;
        a.forEach((e) => {
          e.className = args.name;
        });
        Prism.highlightAll();
      }
    }
  }

  scale(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
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
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
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
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
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
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
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
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
    if (search_1 instanceof HTMLDivElement) {
      search = search_1;
      search.style.transition = `all ${args.s}s ${args.timing}`;
    }
  }

  settextalign(args) {
    let search = null;
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
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
    const search_1 = document.getElementById(`WitCatMarkDown${args.id}`);
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
    const search = document.getElementById(`WitCatMarkDown${args.id}`);
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
    const search = document.getElementsByClassName('WitCatMarkDown');
    for (const item of Array.from(search)) {
      item.parentElement.remove();
    }
  }

  /**
   * 获取示例markdown
   * @returns {string}
   */
  docss() {
    return this.formatMessage('WitCatMarkDown.tutorial');
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
        return element.innerText;
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
  Extension: WitCatMarkDown,
  info: {
    name: "WitCatMarkDown.name",
    description: "WitCatMarkDown.descp",
    extensionId: witcat_markdown_extensionId,
    iconURL: witcat_markdown_picture,
    insetIconURL: witcat_markdown_icon,
    featured: true,
    disabled: false,
    collaborator: "白猫 @ CCW",
    collaboratorURL: "https://www.ccw.site/student/6173f57f48cf8f4796fc860e",
    collaboratorList: [
      {
        collaborator: "白猫 @ CCW",
        collaboratorURL: "https://www.ccw.site/student/6173f57f48cf8f4796fc860e",
      },
      {
        collaborator: "酷可mc @ CCW",
        collaboratorURL: "https://www.ccw.site/student/203910367",
      }
    ]
  },
  l10n: {
    "zh-cn": {
      "WitCatMarkDown.name": "白猫的markdown V1.0",
      "WitCatMarkDown.descp": "更优雅的文本框"
    },
    en: {
      "WitCatMarkDown.name": "WitCat’s markdown V1.0",
      "WitCatMarkDown.descp": "Make your text box more colorful"
    }
  }
};