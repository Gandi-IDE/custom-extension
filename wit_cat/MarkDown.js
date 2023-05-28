const witcat_fps_picture = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjg1MTY2MTUyNTQ2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzMzMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTc2OCAxMjhhMTcwLjY2NjY2NyAxNzAuNjY2NjY3IDAgMCAxIDE3MC42NjY2NjcgMTcwLjY2NjY2N3Y0MjYuNjY2NjY2YTE3MC42NjY2NjcgMTcwLjY2NjY2NyAwIDAgMS0xNzAuNjY2NjY3IDE3MC42NjY2NjdIMjU2YTE3MC42NjY2NjcgMTcwLjY2NjY2NyAwIDAgMS0xNzAuNjY2NjY3LTE3MC42NjY2NjdWMjk4LjY2NjY2N2ExNzAuNjY2NjY3IDE3MC42NjY2NjcgMCAwIDEgMTcwLjY2NjY2Ny0xNzAuNjY2NjY3aDUxMnogbTAgODUuMzMzMzMzSDI1NmE4NS4zMzMzMzMgODUuMzMzMzMzIDAgMCAwLTg1LjEyIDc4LjkzMzMzNEwxNzAuNjY2NjY3IDI5OC42NjY2Njd2NDI2LjY2NjY2NmE4NS4zMzMzMzMgODUuMzMzMzMzIDAgMCAwIDc4LjkzMzMzMyA4NS4xMkwyNTYgODEwLjY2NjY2N2g1MTJhODUuMzMzMzMzIDg1LjMzMzMzMyAwIDAgMCA4NS4xMi03OC45MzMzMzRMODUzLjMzMzMzMyA3MjUuMzMzMzMzVjI5OC42NjY2NjdhODUuMzMzMzMzIDg1LjMzMzMzMyAwIDAgMC03OC45MzMzMzMtODUuMTJMNzY4IDIxMy4zMzMzMzN6IG0tNDIuNjY2NjY3IDQyNi42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSAwIDg1LjMzMzMzM2gtODUuMzMzMzMzYTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEgMC04NS4zMzMzMzNoODUuMzMzMzMzeiBtLTg1LjMzMzMzMy0zNDEuMzMzMzMzYTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEgMCA4NS4zMzMzMzNoLTEyOHYyOTguNjY2NjY3YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEtODUuMzMzMzMzIDBWMzg0SDI5OC42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMSAwLTg1LjMzMzMzM2gzNDEuMzMzMzMzeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMjMzNCI+PC9wYXRoPjwvc3ZnPg==";

const witcat_fps_icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjg1MTY2MTUyNTQ2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzMzMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTc2OCAxMjhhMTcwLjY2NjY2NyAxNzAuNjY2NjY3IDAgMCAxIDE3MC42NjY2NjcgMTcwLjY2NjY2N3Y0MjYuNjY2NjY2YTE3MC42NjY2NjcgMTcwLjY2NjY2NyAwIDAgMS0xNzAuNjY2NjY3IDE3MC42NjY2NjdIMjU2YTE3MC42NjY2NjcgMTcwLjY2NjY2NyAwIDAgMS0xNzAuNjY2NjY3LTE3MC42NjY2NjdWMjk4LjY2NjY2N2ExNzAuNjY2NjY3IDE3MC42NjY2NjcgMCAwIDEgMTcwLjY2NjY2Ny0xNzAuNjY2NjY3aDUxMnogbTAgODUuMzMzMzMzSDI1NmE4NS4zMzMzMzMgODUuMzMzMzMzIDAgMCAwLTg1LjEyIDc4LjkzMzMzNEwxNzAuNjY2NjY3IDI5OC42NjY2Njd2NDI2LjY2NjY2NmE4NS4zMzMzMzMgODUuMzMzMzMzIDAgMCAwIDc4LjkzMzMzMyA4NS4xMkwyNTYgODEwLjY2NjY2N2g1MTJhODUuMzMzMzMzIDg1LjMzMzMzMyAwIDAgMCA4NS4xMi03OC45MzMzMzRMODUzLjMzMzMzMyA3MjUuMzMzMzMzVjI5OC42NjY2NjdhODUuMzMzMzMzIDg1LjMzMzMzMyAwIDAgMC03OC45MzMzMzMtODUuMTJMNzY4IDIxMy4zMzMzMzN6IG0tNDIuNjY2NjY3IDQyNi42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSAwIDg1LjMzMzMzM2gtODUuMzMzMzMzYTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEgMC04NS4zMzMzMzNoODUuMzMzMzMzeiBtLTg1LjMzMzMzMy0zNDEuMzMzMzMzYTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEgMCA4NS4zMzMzMzNoLTEyOHYyOTguNjY2NjY3YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEtODUuMzMzMzMzIDBWMzg0SDI5OC42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMSAwLTg1LjMzMzMzM2gzNDEuMzMzMzMzeiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMjMzNCI+PC9wYXRoPjwvc3ZnPg==";

const witcat_fps_extensionId = "WitCatMarkDown";

/**
 * 获取到的返回值
 */

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字、布尔和文本（极端情况下还有 null 或 undefined，需要同时处理 */

class WitCatMarkDown {
    constructor(runtime) {
        this.runtime = runtime;
        /** Scratch fps 开关 */
        this.scfpson = false;

        /**
         * Scratch 所使用的 canvas，获取不到返回 null
         * @return {HTMLcanvasElement | null}
         */
        this.canvas = () => {
            try {
                const canvas = runtime.renderer.canvas;
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
                const canvas = runtime.renderer.canvas;
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
        let ScrollStyle = document.createElement("style");
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
        .WitCatMarkDown::-webkit-scrollbar{
            display: none;
        }
        .WitCatMarkDown{
            color:black;
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
        `;
        document.body.appendChild(ScrollStyle);

        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                "WitCatMarkDown.name": "[beta]白猫的富文本",
                "WitCatMarkDown.docs": "📖拓展教程",
                "WitCatMarkDown.docss": "📖示例内容",
                "WitCatMarkDown.tutorial": `# 欢迎使用 Markdown 拓展\r\n\r\n这是首次使用 **Markdown 拓展** 自动生成的内容，包含 Markdown 语法和拓展介绍\r\n\r\n## 文本样式\r\n\r\n加粗|**加粗1** __加粗2__  \r\n斜体|*斜体1* _斜体2_\r\n***\r\n若你在写常规文本时，需要换行，直接换行是无法成功换行的。\r\n就像这样  \r\n需要换行的话，需要在一行末尾加上两个空格  \r\n就像这样\r\n\r\n## 引用\r\n\r\n> 白猫的富文本拓展！！！\r\n\r\n## 链接\r\n\r\n*鼠标点击*打开链接\r\n\r\n[ccw 官网](https://www.ccw.site)\r\n\r\n## 图片\r\n\r\n如下：一个图片\r\n\r\n![展示](https://m.xiguacity.cn/avatar/6173f57f48cf8f4796fc860e/dbadfc1c-3ab5-49a2-aa69-01465f3f0738.jpg?x-oss-process=image%2Fresize%2Cs_150%2Fformat%2Cwebp)\r\n\r\n*图片可拖动为文件到任意窗口使用*\r\n\r\n## 无序列表\r\n\r\n- 项目\r\n  - 项目 1\r\n    - 项目 A\r\n    - 项目 B\r\n  - 项目 2\r\n\r\n## 有序列表\r\n\r\n1. 项目 1\r\n   1. 项目 A\r\n   2. 项目 B\r\n2. 项目 2\r\n\r\n## 任务列表\r\n\r\n- [x] A 计划\r\n  - [x] A1 计划\r\n  - [ ] A2 计划\r\n- [ ] B 计划\r\n\r\n## 代码块\r\n\r\n    print(\"wit_cat!!!\")\r\n    print(\"白猫！！！)\r\n\r\n## 分割线\r\n***\r\n没错就是这个\r\n\r\n***`,
                "WitCatMarkDown.create": "创建富文本ID[id]X[x]Y[y]宽[width]高[height]内容[text]",
                "WitCatMarkDown.set": "设置富文本ID[id]第[num]个[type]的样式为[text]",
                "WitCatMarkDown.delete": "删除富文本ID[id]",
                "WitCatMarkDown.deleteall": "删除所有富文本",
                "WitCatMarkDown.get": "富文本ID[id]的[type]",
                "WitCatMarkDown.type.1": "X",
                "WitCatMarkDown.type.2": "Y",
                "WitCatMarkDown.type.3": "宽",
                "WitCatMarkDown.type.4": "高",
                "WitCatMarkDown.type.5": "内容",
                "WitCatMarkDown.type.6": "json",
                "WitCatMarkDown.types.1": "文本",
                "WitCatMarkDown.types.2": "粗体",
                "WitCatMarkDown.types.3": "斜体",
                "WitCatMarkDown.types.4": "大号",
                "WitCatMarkDown.types.5": "更大号",
                "WitCatMarkDown.types.6": "超大号",
                "WitCatMarkDown.types.7": "链接",
                "WitCatMarkDown.types.8": "代码框",
            },
            en: {
                "WitCatMarkDown.name": "[beta]WitCat’s Mark Down",
                "WitCatMarkDown.docs": "📖 Tutorial",
                "WitCatMarkDown.docss": "📖Example Content",
                "WitCatMarkDown.tutorial": `# Welcome to the Markdown extension\r\nThis is the first automatically generated content using **Markdown extensions **, including Markdown syntax and extensions\r\n## Text style\r\n\r\nbold | **bold1** __bold2__  \r\nitalics | *italics1*  _italics2_\r\n***\r\nIf you need to wrap a line when writing regular text, you won't be able to wrap a line directly.\r\nJust like this  \r\nTo wrap a line, add two Spaces at the end of the line  \r\nJust like this\r\n\r\n## Reference\r\n\r\n> wit_cat\`s Mark Down!!!\r\n\r\n## Link\r\n\r\n*Left mouse click* to open the link\r\n\r\n[Cocrea](https://cocrea.world)\r\n\r\n## Picture\r\n\r\nlook! This is a picture!\r\n\r\n![show] (https://m.xiguacity.cn/avatar/6173f57f48cf8f4796fc860e/dbadfc1c-3ab5-49a2-aa69-01465f3f0738.jpg?x-oss-process=image%2Fresize%2Cs_150%2Fformat%2Cwebp)\r\n\r\n*Image can be dragged for file to any window to use*\r\n\r\n## Unordered list\r\n\r\n- Item 1\r\n    - Item A\r\n    - Item B\r\n- Item 2\r\n\r\n## Ordered list\r\n\r\n1. Item 1\r\n    1. Item A\r\n    2. Item B\r\n2. Item 2\r\n\r\n## Task list\r\n\r\n- [x] Plan A\r\n    - [x] plan A1\r\n    - [ ] Plan A2\r\n- [ ] Plan B\r\n\r\n## Code block\r\n\r\n    print(\"wit_cat!!!\" )\r\n    print(\" White Cat!!)\r\n\r\n## Divider\r\n***\r\nYeah, that's it.\r\n\r\n***`,
                "WitCatMarkDown.create": "Create Mark Down ID[id]X[x]Y[y] width [width] height [height] content [text]",
                "WitCatMarkDown.set": "Set the style of rich text ID[id] and the [num] [type] to [text]",
                "WitCatMarkDown.delete": "Delete Mark Down ID[id]",
                "WitCatMarkDown.deleteall": "Delete all Mark Down",
                "WitCatMarkDown.get": "ID[id]Mark Down`s[type]",
                "WitCatMarkDown.type.1": "X",
                "WitCatMarkDown.type.2": "Y",
                "WitCatMarkDown.type.3": "width",
                "WitCatMarkDown.type.4": "height",
                "WitCatMarkDown.type.5": "content",
                "WitCatMarkDown.type.6": "json",
                "WitCatMarkDown.types.1": "text",
                "WitCatMarkDown.types.2": "bold",
                "WitCatMarkDown.types.3": "italic",
                "WitCatMarkDown.types.4": "Large size",
                "WitCatMarkDown.types.5": "more large size",
                "WitCatMarkDown.types.6": "supersize",
                "WitCatMarkDown.types.7": "link",
                "WitCatMarkDown.types.8": "Code box",
            }
        })
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
            description: id
        });
    }

    getInfo() {
        return {
            id: witcat_fps_extensionId, // 拓展id
            name: this.formatMessage("WitCatMarkDown.name"), // 拓展名
            blockIconURI: witcat_fps_icon,
            menuIconURI: witcat_fps_icon,
            color1: "#d230ff",
            color2: "#a827cc",
            blocks: [
                {
                    blockType: "button",
                    text: this.formatMessage('WitCatMarkDown.docs'),
                    onClick: this.docs,
                },
                "---" + this.formatMessage("WitCatMarkDown.name"),
                {
                    opcode: "create",
                    blockType: "command",
                    text: this.formatMessage("WitCatMarkDown.create"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                        x: {
                            type: "number",
                            defaultValue: '0',
                        },
                        y: {
                            type: "number",
                            defaultValue: '0',
                        },
                        width: {
                            type: "number",
                            defaultValue: '100',
                        },
                        height: {
                            type: "number",
                            defaultValue: '100',
                        },
                        text: {
                            type: "string",
                            defaultValue: '##酷可！！！',
                        },
                    },
                },
                {
                    opcode: "set",
                    blockType: "command",
                    text: this.formatMessage("WitCatMarkDown.set"),
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
                            menu: 'types',
                        },
                        text: {
                            type: "string",
                            defaultValue: '{"color":"red"}',
                        },
                    },
                },
                {
                    opcode: "delete",
                    blockType: "command",
                    text: this.formatMessage("WitCatMarkDown.delete"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                    },
                },
                {
                    opcode: "deleteall",
                    blockType: "command",
                    text: this.formatMessage("WitCatMarkDown.deleteall"),
                    arguments: {},
                },
                {
                    opcode: "get",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatMarkDown.get"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                        type: {
                            type: "string",
                            menu: 'type',
                        },
                    },
                },
                {
                    opcode: "docss",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatMarkDown.docss"),
                    arguments: {},
                },
            ],
            menus: {
                type: [
                    {
                        text: this.formatMessage('WitCatMarkDown.type.1'),
                        value: 'x'
                    },
                    {
                        text: this.formatMessage('WitCatMarkDown.type.2'),
                        value: 'y'
                    },
                    {
                        text: this.formatMessage('WitCatMarkDown.type.3'),
                        value: 'width'
                    },
                    {
                        text: this.formatMessage('WitCatMarkDown.type.4'),
                        value: 'height'
                    },
                    {
                        text: this.formatMessage('WitCatMarkDown.type.5'),
                        value: 'content'
                    },
                    {
                        text: this.formatMessage('WitCatMarkDown.type.6'),
                        value: 'json'
                    },
                ],
                types: {
                    acceptReporters: true,
                    items: [
                        {
                            text: this.formatMessage('WitCatMarkDown.types.1'),
                            value: 'p'
                        },
                        {
                            text: this.formatMessage('WitCatMarkDown.types.2'),
                            value: 'strong'
                        },
                        {
                            text: this.formatMessage('WitCatMarkDown.types.3'),
                            value: 'em'
                        },
                        {
                            text: this.formatMessage('WitCatMarkDown.types.4'),
                            value: 'h3'
                        },
                        {
                            text: this.formatMessage('WitCatMarkDown.types.5'),
                            value: 'h2'
                        },
                        {
                            text: this.formatMessage('WitCatMarkDown.types.6'),
                            value: 'h1'
                        },
                        {
                            text: this.formatMessage('WitCatMarkDown.types.7'),
                            value: 'a'
                        },
                        {
                            text: this.formatMessage('WitCatMarkDown.types.8'),
                            value: 'code'
                        },
                    ],
                },
            },
        };
    }

    /** 打开教程 */
    docs() {
        let a = document.createElement('a');
        a.href = "https://www.ccw.site/post/d6d96e80-3f58-4a19-b7e6-c567d3a6a583";
        a.rel = "noopener noreferrer";
        a.target = "_blank";
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
    /**
     * 创建文本框
     * @param {Object} args 
     */
    create(args) {
        if (this.canvas() === null || this.inputParent() === null) {
            console.error(this.canvas(), this.inputParent())
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
        let search_1 = document.getElementById("WitCatMarkDown" + args.id);
        if (search_1 instanceof HTMLDivElement) {
            search = search_1;
        }
        if (search !== null) {
            this.inputParent().removeChild(search);
            search = null;
        }
        if (search === null) {
            search = document.createElement("div");
            search.id = "WitCatMarkDown" + args.id;
            search.className = "WitCatMarkDown";
            search.style.overflow = "auto";
            search.style.webkitUserSelect = "text";
            search.style.userSelect = "text";
            this.inputParent().appendChild(search);
        }

        let sstyle = search.style;
        sstyle.position = "absolute";
        sstyle.left = `${x}%`;
        sstyle.top = `${y}%`;
        sstyle.width = `${width}%`;
        sstyle.height = `${height}%`;
        search.innerHTML = markdown.toHTML(args.text);
        search.setAttribute("name", args.text);
    }
    /**
     * 设置样式
     * @param {Object} args 
     */
    set(args) {
        if (this.canvas() === null || this.inputParent() === null) {
            return;
        }
        let search = null;
        let search_1 = document.getElementById("WitCatMarkDown" + args.id);
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
     * 获取代码返回值
     * @param {Object} args
     */
    get(args) {
        if (this.canvas() === null || this.inputParent() === null) {
            return;
        }
        let search = null;
        let search_1 = document.getElementById("WitCatMarkDown" + args.id);
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
        let search = document.getElementById("WitCatMarkDown" + args.id);
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
        let search = document.getElementsByClassName("WitCatMarkDown");
        for (const item of Array.from(search)) {
            this.inputParent().removeChild(item);
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
            console.warn("Input.js: 获取到的元素的类型不正确: ", element);
            return "";
        }
        switch (type) {
            case "x":
                return parseFloat(element.style.left) / 100 * this.runtime.stageWidth;
            case "y":
                return parseFloat(element.style.top) / 100 * this.runtime.stageHeight;
            case "width":
                return parseFloat(element.style.width) / 100 * this.runtime.stageWidth;
            case "height":
                return parseFloat(element.style.height) / 100 * this.runtime.stageHeight;
            case "content":
                return element.getAttribute("name");
            case "json":
                // 直接把整个东西转成 JSON 对象，再拼接
                return JSON.stringify(
                    {
                        X: this._getattrib(element, "x"),
                        Y: this._getattrib(element, "y"),
                        width: this._getattrib(element, "width"),
                        height: this._getattrib(element, "height"),
                        content: this._getattrib(element, "content"),
                    }
                )
            default:
                return "";
        }
    }
}

window.tempExt = {
    Extension: WitCatMarkDown,
    info: {
        name: "WitCatMarkDown.name",
        description: "WitCatMarkDown.descp",
        extensionId: witcat_fps_extensionId,
        iconURL: witcat_fps_picture,
        insetIconURL: witcat_fps_icon,
        featured: true,
        disabled: false,
        collaborator: "白猫 @ CCW"
    },
    l10n: {
        "zh-cn": {
            "WitCatMarkDown.name": "[beta]白猫的FPS",
            "WitCatMarkDown.descp": "运行速度！！！"
        },
        en: {
            "WitCatMarkDown.name": "[beta]WitCat’s FPS",
            "WitCatMarkDown.descp": "Detect running speed!!!"
        }
    }
};





//



// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

/*jshint browser:true, devel:true */

(function (expose) {

    /**
     *  class Markdown
     *
     *  Markdown processing in Javascript done right. We have very particular views
     *  on what constitutes 'right' which include:
     *
     *  - produces well-formed HTML (this means that em and strong nesting is
     *    important)
     *
     *  - has an intermediate representation to allow processing of parsed data (We
     *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
     *
     *  - is easily extensible to add new dialects without having to rewrite the
     *    entire parsing mechanics
     *
     *  - has a good test suite
     *
     *  This implementation fulfills all of these (except that the test suite could
     *  do with expanding to automatically run all the fixtures from other Markdown
     *  implementations.)
     *
     *  ##### Intermediate Representation
     *
     *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
     *
     *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
     **/
    var Markdown = expose.Markdown = function (dialect) {
        switch (typeof dialect) {
            case "undefined":
                this.dialect = Markdown.dialects.Gruber;
                break;
            case "object":
                this.dialect = dialect;
                break;
            default:
                if (dialect in Markdown.dialects) {
                    this.dialect = Markdown.dialects[dialect];
                }
                else {
                    throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
                }
                break;
        }
        this.em_state = [];
        this.strong_state = [];
        this.debug_indent = "";
    };

    /**
     *  parse( markdown, [dialect] ) -> JsonML
     *  - markdown (String): markdown string to parse
     *  - dialect (String | Dialect): the dialect to use, defaults to gruber
     *
     *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
     **/
    expose.parse = function (source, dialect) {
        // dialect will default if undefined
        var md = new Markdown(dialect);
        return md.toTree(source);
    };

    /**
     *  toHTML( markdown, [dialect]  ) -> String
     *  toHTML( md_tree ) -> String
     *  - markdown (String): markdown string to parse
     *  - md_tree (Markdown.JsonML): parsed markdown tree
     *
     *  Take markdown (either as a string or as a JsonML tree) and run it through
     *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
     **/
    expose.toHTML = function toHTML(source, dialect, options) {
        var input = expose.toHTMLTree(source, dialect, options);

        return expose.renderJsonML(input);
    };

    /**
     *  toHTMLTree( markdown, [dialect] ) -> JsonML
     *  toHTMLTree( md_tree ) -> JsonML
     *  - markdown (String): markdown string to parse
     *  - dialect (String | Dialect): the dialect to use, defaults to gruber
     *  - md_tree (Markdown.JsonML): parsed markdown tree
     *
     *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
     *  to this function, it is first parsed into a markdown tree by calling
     *  [[parse]].
     **/
    expose.toHTMLTree = function toHTMLTree(input, dialect, options) {
        // convert string input to an MD tree
        if (typeof input === "string") input = this.parse(input, dialect);

        // Now convert the MD tree to an HTML tree

        // remove references from the tree
        var attrs = extract_attr(input),
            refs = {};

        if (attrs && attrs.references) {
            refs = attrs.references;
        }

        var html = convert_tree_to_html(input, refs, options);
        merge_text_nodes(html);
        return html;
    };

    // For Spidermonkey based engines
    function mk_block_toSource() {
        return "Markdown.mk_block( " +
            uneval(this.toString()) +
            ", " +
            uneval(this.trailing) +
            ", " +
            uneval(this.lineNumber) +
            " )";
    }

    // node
    function mk_block_inspect() {
        var util = require("util");
        return "Markdown.mk_block( " +
            util.inspect(this.toString()) +
            ", " +
            util.inspect(this.trailing) +
            ", " +
            util.inspect(this.lineNumber) +
            " )";

    }

    var mk_block = Markdown.mk_block = function (block, trail, line) {
        // Be helpful for default case in tests.
        if (arguments.length == 1) trail = "\n\n";

        var s = new String(block);
        s.trailing = trail;
        // To make it clear its not just a string
        s.inspect = mk_block_inspect;
        s.toSource = mk_block_toSource;

        if (line != undefined)
            s.lineNumber = line;

        return s;
    };

    function count_lines(str) {
        var n = 0, i = -1;
        while ((i = str.indexOf("\n", i + 1)) !== -1) n++;
        return n;
    }

    // Internal - split source into rough blocks
    Markdown.prototype.split_blocks = function splitBlocks(input, startLine) {
        input = input.replace(/(\r\n|\n|\r)/g, "\n");
        // [\s\S] matches _anything_ (newline or space)
        // [^] is equivalent but doesn't work in IEs.
        var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
            blocks = [],
            m;

        var line_no = 1;

        if ((m = /^(\s*\n)/.exec(input)) != null) {
            // skip (but count) leading blank lines
            line_no += count_lines(m[0]);
            re.lastIndex = m[0].length;
        }

        while ((m = re.exec(input)) !== null) {
            if (m[2] == "\n#") {
                m[2] = "\n";
                re.lastIndex--;
            }
            blocks.push(mk_block(m[1], m[2], line_no));
            line_no += count_lines(m[0]);
        }

        return blocks;
    };

    /**
     *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
     *  - block (String): the block to process
     *  - next (Array): the following blocks
     *
     * Process `block` and return an array of JsonML nodes representing `block`.
     *
     * It does this by asking each block level function in the dialect to process
     * the block until one can. Succesful handling is indicated by returning an
     * array (with zero or more JsonML nodes), failure by a false value.
     *
     * Blocks handlers are responsible for calling [[Markdown#processInline]]
     * themselves as appropriate.
     *
     * If the blocks were split incorrectly or adjacent blocks need collapsing you
     * can adjust `next` in place using shift/splice etc.
     *
     * If any of this default behaviour is not right for the dialect, you can
     * define a `__call__` method on the dialect that will get invoked to handle
     * the block processing.
     */
    Markdown.prototype.processBlock = function processBlock(block, next) {
        var cbs = this.dialect.block,
            ord = cbs.__order__;

        if ("__call__" in cbs) {
            return cbs.__call__.call(this, block, next);
        }

        for (var i = 0; i < ord.length; i++) {
            //D:this.debug( "Testing", ord[i] );
            var res = cbs[ord[i]].call(this, block, next);
            if (res) {
                //D:this.debug("  matched");
                if (!isArray(res) || (res.length > 0 && !(isArray(res[0]))))
                    this.debug(ord[i], "didn't return a proper array");
                //D:this.debug( "" );
                return res;
            }
        }

        // Uhoh! no match! Should we throw an error?
        return [];
    };

    Markdown.prototype.processInline = function processInline(block) {
        return this.dialect.inline.__call__.call(this, String(block));
    };

    /**
     *  Markdown#toTree( source ) -> JsonML
     *  - source (String): markdown source to parse
     *
     *  Parse `source` into a JsonML tree representing the markdown document.
     **/
    // custom_tree means set this.tree to `custom_tree` and restore old value on return
    Markdown.prototype.toTree = function toTree(source, custom_root) {
        var blocks = source instanceof Array ? source : this.split_blocks(source);

        // Make tree a member variable so its easier to mess with in extensions
        var old_tree = this.tree;
        try {
            this.tree = custom_root || this.tree || ["markdown"];

            blocks:
            while (blocks.length) {
                var b = this.processBlock(blocks.shift(), blocks);

                // Reference blocks and the like won't return any content
                if (!b.length) continue blocks;

                this.tree.push.apply(this.tree, b);
            }
            return this.tree;
        }
        finally {
            if (custom_root) {
                this.tree = old_tree;
            }
        }
    };

    // Noop by default
    Markdown.prototype.debug = function () {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(this.debug_indent);
        if (typeof print !== "undefined")
            print.apply(print, args);
        if (typeof console !== "undefined" && typeof console.log !== "undefined")
            console.log.apply(null, args);
    }

    Markdown.prototype.loop_re_over_block = function (re, block, cb) {
        // Dont use /g regexps with this
        var m,
            b = block.valueOf();

        while (b.length && (m = re.exec(b)) != null) {
            b = b.substr(m[0].length);
            cb.call(this, m);
        }
        return b;
    };

    /**
     * Markdown.dialects
     *
     * Namespace of built-in dialects.
     **/
    Markdown.dialects = {};

    /**
     * Markdown.dialects.Gruber
     *
     * The default dialect that follows the rules set out by John Gruber's
     * markdown.pl as closely as possible. Well actually we follow the behaviour of
     * that script which in some places is not exactly what the syntax web page
     * says.
     **/
    Markdown.dialects.Gruber = {
        block: {
            atxHeader: function atxHeader(block, next) {
                var m = block.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);

                if (!m) return undefined;

                var header = ["header", { level: m[1].length }];
                Array.prototype.push.apply(header, this.processInline(m[2]));

                if (m[0].length < block.length)
                    next.unshift(mk_block(block.substr(m[0].length), block.trailing, block.lineNumber + 2));

                return [header];
            },

            setextHeader: function setextHeader(block, next) {
                var m = block.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);

                if (!m) return undefined;

                var level = (m[2] === "=") ? 1 : 2;
                var header = ["header", { level: level }, m[1]];

                if (m[0].length < block.length)
                    next.unshift(mk_block(block.substr(m[0].length), block.trailing, block.lineNumber + 2));

                return [header];
            },

            code: function code(block, next) {
                // |    Foo
                // |bar
                // should be a code block followed by a paragraph. Fun
                //
                // There might also be adjacent code block to merge.

                var ret = [],
                    re = /^(?: {0,3}\t| {4})(.*)\n?/,
                    lines;

                // 4 spaces + content
                if (!block.match(re)) return undefined;

                block_search:
                do {
                    // Now pull out the rest of the lines
                    var b = this.loop_re_over_block(
                        re, block.valueOf(), function (m) { ret.push(m[1]); });

                    if (b.length) {
                        // Case alluded to in first comment. push it back on as a new block
                        next.unshift(mk_block(b, block.trailing));
                        break block_search;
                    }
                    else if (next.length) {
                        // Check the next block - it might be code too
                        if (!next[0].match(re)) break block_search;

                        // Pull how how many blanks lines follow - minus two to account for .join
                        ret.push(block.trailing.replace(/[^\n]/g, "").substring(2));

                        block = next.shift();
                    }
                    else {
                        break block_search;
                    }
                } while (true);

                return [["code_block", ret.join("\n")]];
            },

            horizRule: function horizRule(block, next) {
                // this needs to find any hr in the block to handle abutting blocks
                var m = block.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);

                if (!m) {
                    return undefined;
                }

                var jsonml = [["hr"]];

                // if there's a leading abutting block, process it
                if (m[1]) {
                    jsonml.unshift.apply(jsonml, this.processBlock(m[1], []));
                }

                // if there's a trailing abutting block, stick it into next
                if (m[3]) {
                    next.unshift(mk_block(m[3]));
                }

                return jsonml;
            },

            // There are two types of lists. Tight and loose. Tight lists have no whitespace
            // between the items (and result in text just in the <li>) and loose lists,
            // which have an empty line between list items, resulting in (one or more)
            // paragraphs inside the <li>.
            //
            // There are all sorts weird edge cases about the original markdown.pl's
            // handling of lists:
            //
            // * Nested lists are supposed to be indented by four chars per level. But
            //   if they aren't, you can get a nested list by indenting by less than
            //   four so long as the indent doesn't match an indent of an existing list
            //   item in the 'nest stack'.
            //
            // * The type of the list (bullet or number) is controlled just by the
            //    first item at the indent. Subsequent changes are ignored unless they
            //    are for nested lists
            //
            lists: (function () {
                // Use a closure to hide a few variables.
                var any_list = "[*+-]|\\d+\\.",
                    bullet_list = /[*+-]/,
                    number_list = /\d+\./,
                    // Capture leading indent as it matters for determining nested lists.
                    is_list_re = new RegExp("^( {0,3})(" + any_list + ")[ \t]+"),
                    indent_re = "(?: {0,3}\\t| {4})";

                // TODO: Cache this regexp for certain depths.
                // Create a regexp suitable for matching an li for a given stack depth
                function regex_for_depth(depth) {

                    return new RegExp(
                        // m[1] = indent, m[2] = list_type
                        "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" +
                        // m[3] = cont
                        "(^" + indent_re + "{0," + (depth - 1) + "}[ ]{0,4})"
                    );
                }
                function expand_tab(input) {
                    return input.replace(/ {0,3}\t/g, "    ");
                }

                // Add inline content `inline` to `li`. inline comes from processInline
                // so is an array of content
                function add(li, loose, inline, nl) {
                    if (loose) {
                        li.push(["para"].concat(inline));
                        return;
                    }
                    // Hmmm, should this be any block level element or just paras?
                    var add_to = li[li.length - 1] instanceof Array && li[li.length - 1][0] == "para"
                        ? li[li.length - 1]
                        : li;

                    // If there is already some content in this list, add the new line in
                    if (nl && li.length > 1) inline.unshift(nl);

                    for (var i = 0; i < inline.length; i++) {
                        var what = inline[i],
                            is_str = typeof what == "string";
                        if (is_str && add_to.length > 1 && typeof add_to[add_to.length - 1] == "string") {
                            add_to[add_to.length - 1] += what;
                        }
                        else {
                            add_to.push(what);
                        }
                    }
                }

                // contained means have an indent greater than the current one. On
                // *every* line in the block
                function get_contained_blocks(depth, blocks) {

                    var re = new RegExp("^(" + indent_re + "{" + depth + "}.*?\\n?)*$"),
                        replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
                        ret = [];

                    while (blocks.length > 0) {
                        if (re.exec(blocks[0])) {
                            var b = blocks.shift(),
                                // Now remove that indent
                                x = b.replace(replace, "");

                            ret.push(mk_block(x, b.trailing, b.lineNumber));
                        }
                        else {
                            break;
                        }
                    }
                    return ret;
                }

                // passed to stack.forEach to turn list items up the stack into paras
                function paragraphify(s, i, stack) {
                    var list = s.list;
                    var last_li = list[list.length - 1];

                    if (last_li[1] instanceof Array && last_li[1][0] == "para") {
                        return;
                    }
                    if (i + 1 == stack.length) {
                        // Last stack frame
                        // Keep the same array, but replace the contents
                        last_li.push(["para"].concat(last_li.splice(1, last_li.length - 1)));
                    }
                    else {
                        var sublist = last_li.pop();
                        last_li.push(["para"].concat(last_li.splice(1, last_li.length - 1)), sublist);
                    }
                }

                // The matcher function
                return function (block, next) {
                    var m = block.match(is_list_re);
                    if (!m) return undefined;

                    function make_list(m) {
                        var list = bullet_list.exec(m[2])
                            ? ["bulletlist"]
                            : ["numberlist"];

                        stack.push({ list: list, indent: m[1] });
                        return list;
                    }


                    var stack = [], // Stack of lists for nesting.
                        list = make_list(m),
                        last_li,
                        loose = false,
                        ret = [stack[0].list],
                        i;

                    // Loop to search over block looking for inner block elements and loose lists
                    loose_search:
                    while (true) {
                        // Split into lines preserving new lines at end of line
                        var lines = block.split(/(?=\n)/);

                        // We have to grab all lines for a li and call processInline on them
                        // once as there are some inline things that can span lines.
                        var li_accumulate = "";

                        // Loop over the lines in this block looking for tight lists.
                        tight_search:
                        for (var line_no = 0; line_no < lines.length; line_no++) {
                            var nl = "",
                                l = lines[line_no].replace(/^\n/, function (n) { nl = n; return ""; });

                            // TODO: really should cache this
                            var line_re = regex_for_depth(stack.length);

                            m = l.match(line_re);
                            //print( "line:", uneval(l), "\nline match:", uneval(m) );

                            // We have a list item
                            if (m[1] !== undefined) {
                                // Process the previous list item, if any
                                if (li_accumulate.length) {
                                    add(last_li, loose, this.processInline(li_accumulate), nl);
                                    // Loose mode will have been dealt with. Reset it
                                    loose = false;
                                    li_accumulate = "";
                                }

                                m[1] = expand_tab(m[1]);
                                var wanted_depth = Math.floor(m[1].length / 4) + 1;
                                //print( "want:", wanted_depth, "stack:", stack.length);
                                if (wanted_depth > stack.length) {
                                    // Deep enough for a nested list outright
                                    //print ( "new nested list" );
                                    list = make_list(m);
                                    last_li.push(list);
                                    last_li = list[1] = ["listitem"];
                                }
                                else {
                                    // We aren't deep enough to be strictly a new level. This is
                                    // where Md.pl goes nuts. If the indent matches a level in the
                                    // stack, put it there, else put it one deeper then the
                                    // wanted_depth deserves.
                                    var found = false;
                                    for (i = 0; i < stack.length; i++) {
                                        if (stack[i].indent != m[1]) continue;
                                        list = stack[i].list;
                                        stack.splice(i + 1, stack.length - (i + 1));
                                        found = true;
                                        break;
                                    }

                                    if (!found) {
                                        //print("not found. l:", uneval(l));
                                        wanted_depth++;
                                        if (wanted_depth <= stack.length) {
                                            stack.splice(wanted_depth, stack.length - wanted_depth);
                                            //print("Desired depth now", wanted_depth, "stack:", stack.length);
                                            list = stack[wanted_depth - 1].list;
                                            //print("list:", uneval(list) );
                                        }
                                        else {
                                            //print ("made new stack for messy indent");
                                            list = make_list(m);
                                            last_li.push(list);
                                        }
                                    }

                                    //print( uneval(list), "last", list === stack[stack.length-1].list );
                                    last_li = ["listitem"];
                                    list.push(last_li);
                                } // end depth of shenegains
                                nl = "";
                            }

                            // Add content
                            if (l.length > m[0].length) {
                                li_accumulate += nl + l.substr(m[0].length);
                            }
                        } // tight_search

                        if (li_accumulate.length) {
                            add(last_li, loose, this.processInline(li_accumulate), nl);
                            // Loose mode will have been dealt with. Reset it
                            loose = false;
                            li_accumulate = "";
                        }

                        // Look at the next block - we might have a loose list. Or an extra
                        // paragraph for the current li
                        var contained = get_contained_blocks(stack.length, next);

                        // Deal with code blocks or properly nested lists
                        if (contained.length > 0) {
                            // Make sure all listitems up the stack are paragraphs
                            forEach(stack, paragraphify, this);

                            last_li.push.apply(last_li, this.toTree(contained, []));
                        }

                        var next_block = next[0] && next[0].valueOf() || "";

                        if (next_block.match(is_list_re) || next_block.match(/^ /)) {
                            block = next.shift();

                            // Check for an HR following a list: features/lists/hr_abutting
                            var hr = this.dialect.block.horizRule(block, next);

                            if (hr) {
                                ret.push.apply(ret, hr);
                                break;
                            }

                            // Make sure all listitems up the stack are paragraphs
                            forEach(stack, paragraphify, this);

                            loose = true;
                            continue loose_search;
                        }
                        break;
                    } // loose_search

                    return ret;
                };
            })(),

            blockquote: function blockquote(block, next) {
                if (!block.match(/^>/m))
                    return undefined;

                var jsonml = [];

                // separate out the leading abutting block, if any. I.e. in this case:
                //
                //  a
                //  > b
                //
                if (block[0] != ">") {
                    var lines = block.split(/\n/),
                        prev = [],
                        line_no = block.lineNumber;

                    // keep shifting lines until you find a crotchet
                    while (lines.length && lines[0][0] != ">") {
                        prev.push(lines.shift());
                        line_no++;
                    }

                    var abutting = mk_block(prev.join("\n"), "\n", block.lineNumber);
                    jsonml.push.apply(jsonml, this.processBlock(abutting, []));
                    // reassemble new block of just block quotes!
                    block = mk_block(lines.join("\n"), block.trailing, line_no);
                }


                // if the next block is also a blockquote merge it in
                while (next.length && next[0][0] == ">") {
                    var b = next.shift();
                    block = mk_block(block + block.trailing + b, b.trailing, block.lineNumber);
                }

                // Strip off the leading "> " and re-process as a block.
                var input = block.replace(/^> ?/gm, ""),
                    old_tree = this.tree,
                    processedBlock = this.toTree(input, ["blockquote"]),
                    attr = extract_attr(processedBlock);

                // If any link references were found get rid of them
                if (attr && attr.references) {
                    delete attr.references;
                    // And then remove the attribute object if it's empty
                    if (isEmpty(attr)) {
                        processedBlock.splice(1, 1);
                    }
                }

                jsonml.push(processedBlock);
                return jsonml;
            },

            referenceDefn: function referenceDefn(block, next) {
                var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
                // interesting matches are [ , ref_id, url, , title, title ]

                if (!block.match(re))
                    return undefined;

                // make an attribute node if it doesn't exist
                if (!extract_attr(this.tree)) {
                    this.tree.splice(1, 0, {});
                }

                var attrs = extract_attr(this.tree);

                // make a references hash if it doesn't exist
                if (attrs.references === undefined) {
                    attrs.references = {};
                }

                var b = this.loop_re_over_block(re, block, function (m) {

                    if (m[2] && m[2][0] == "<" && m[2][m[2].length - 1] == ">")
                        m[2] = m[2].substring(1, m[2].length - 1);

                    var ref = attrs.references[m[1].toLowerCase()] = {
                        href: m[2]
                    };

                    if (m[4] !== undefined)
                        ref.title = m[4];
                    else if (m[5] !== undefined)
                        ref.title = m[5];

                });

                if (b.length)
                    next.unshift(mk_block(b, block.trailing));

                return [];
            },

            para: function para(block, next) {
                // everything's a para!
                return [["para"].concat(this.processInline(block))];
            }
        }
    };

    Markdown.dialects.Gruber.inline = {

        __oneElement__: function oneElement(text, patterns_or_re, previous_nodes) {
            var m,
                res,
                lastIndex = 0;

            patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
            var re = new RegExp("([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")");

            m = re.exec(text);
            if (!m) {
                // Just boring text
                return [text.length, text];
            }
            else if (m[1]) {
                // Some un-interesting text matched. Return that first
                return [m[1].length, m[1]];
            }

            var res;
            if (m[2] in this.dialect.inline) {
                res = this.dialect.inline[m[2]].call(
                    this,
                    text.substr(m.index), m, previous_nodes || []);
            }
            // Default for now to make dev easier. just slurp special and output it.
            res = res || [m[2].length, m[2]];
            return res;
        },

        __call__: function inline(text, patterns) {

            var out = [],
                res;

            function add(x) {
                //D:self.debug("  adding output", uneval(x));
                if (typeof x == "string" && typeof out[out.length - 1] == "string")
                    out[out.length - 1] += x;
                else
                    out.push(x);
            }

            while (text.length > 0) {
                res = this.dialect.inline.__oneElement__.call(this, text, patterns, out);
                text = text.substr(res.shift());
                forEach(res, add)
            }

            return out;
        },

        // These characters are intersting elsewhere, so have rules for them so that
        // chunks of plain text blocks don't include them
        "]": function () { },
        "}": function () { },

        __escape__: /^\\[\\`\*_{}\[\]()#\+.!\-]/,

        "\\": function escaped(text) {
            // [ length of input processed, node/children to add... ]
            // Only esacape: \ ` * _ { } [ ] ( ) # * + - . !
            if (this.dialect.inline.__escape__.exec(text))
                return [2, text.charAt(1)];
            else
                // Not an esacpe
                return [1, "\\"];
        },

        "![": function image(text) {

            // Unlike images, alt text is plain text only. no other elements are
            // allowed in there

            // ![Alt text](/path/to/img.jpg "Optional title")
            //      1          2            3       4         <--- captures
            var m = text.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);

            if (m) {
                if (m[2] && m[2][0] == "<" && m[2][m[2].length - 1] == ">")
                    m[2] = m[2].substring(1, m[2].length - 1);

                m[2] = this.dialect.inline.__call__.call(this, m[2], /\\/)[0];

                var attrs = { alt: m[1], href: m[2] || "" };
                if (m[4] !== undefined)
                    attrs.title = m[4];

                return [m[0].length, ["img", attrs]];
            }

            // ![Alt text][id]
            m = text.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/);

            if (m) {
                // We can't check if the reference is known here as it likely wont be
                // found till after. Check it in md tree->hmtl tree conversion
                return [m[0].length, ["img_ref", { alt: m[1], ref: m[2].toLowerCase(), original: m[0] }]];
            }

            // Just consume the '!['
            return [2, "!["];
        },

        "[": function link(text) {

            var orig = String(text);
            // Inline content is possible inside `link text`
            var res = Markdown.DialectHelpers.inline_until_char.call(this, text.substr(1), "]");

            // No closing ']' found. Just consume the [
            if (!res) return [1, "["];

            var consumed = 1 + res[0],
                children = res[1],
                link,
                attrs;

            // At this point the first [...] has been parsed. See what follows to find
            // out which kind of link we are (reference or direct url)
            text = text.substr(consumed);

            // [link text](/path/to/img.jpg "Optional title")
            //                 1            2       3         <--- captures
            // This will capture up to the last paren in the block. We then pull
            // back based on if there a matching ones in the url
            //    ([here](/url/(test))
            // The parens have to be balanced
            var m = text.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);
            if (m) {
                var url = m[1];
                consumed += m[0].length;

                if (url && url[0] == "<" && url[url.length - 1] == ">")
                    url = url.substring(1, url.length - 1);

                // If there is a title we don't have to worry about parens in the url
                if (!m[3]) {
                    var open_parens = 1; // One open that isn't in the capture
                    for (var len = 0; len < url.length; len++) {
                        switch (url[len]) {
                            case "(":
                                open_parens++;
                                break;
                            case ")":
                                if (--open_parens == 0) {
                                    consumed -= url.length - len;
                                    url = url.substring(0, len);
                                }
                                break;
                        }
                    }
                }

                // Process escapes only
                url = this.dialect.inline.__call__.call(this, url, /\\/)[0];

                attrs = { href: url || "" };
                if (m[3] !== undefined)
                    attrs.title = m[3];

                link = ["link", attrs].concat(children);
                return [consumed, link];
            }

            // [Alt text][id]
            // [Alt text] [id]
            m = text.match(/^\s*\[(.*?)\]/);

            if (m) {

                consumed += m[0].length;

                // [links][] uses links as its reference
                attrs = { ref: (m[1] || String(children)).toLowerCase(), original: orig.substr(0, consumed) };

                link = ["link_ref", attrs].concat(children);

                // We can't check if the reference is known here as it likely wont be
                // found till after. Check it in md tree->hmtl tree conversion.
                // Store the original so that conversion can revert if the ref isn't found.
                return [consumed, link];
            }

            // [id]
            // Only if id is plain (no formatting.)
            if (children.length == 1 && typeof children[0] == "string") {

                attrs = { ref: children[0].toLowerCase(), original: orig.substr(0, consumed) };
                link = ["link_ref", attrs, children[0]];
                return [consumed, link];
            }

            // Just consume the "["
            return [1, "["];
        },


        "<": function autoLink(text) {
            var m;

            if ((m = text.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/)) != null) {
                if (m[3]) {
                    return [m[0].length, ["link", { href: "mailto:" + m[3] }, m[3]]];

                }
                else if (m[2] == "mailto") {
                    return [m[0].length, ["link", { href: m[1] }, m[1].substr("mailto:".length)]];
                }
                else
                    return [m[0].length, ["link", { href: m[1] }, m[1]]];
            }

            return [1, "<"];
        },

        "`": function inlineCode(text) {
            // Inline code block. as many backticks as you like to start it
            // Always skip over the opening ticks.
            var m = text.match(/(`+)(([\s\S]*?)\1)/);

            if (m && m[2])
                return [m[1].length + m[2].length, ["inlinecode", m[3]]];
            else {
                // TODO: No matching end code found - warn!
                return [1, "`"];
            }
        },

        "  \n": function lineBreak(text) {
            return [3, ["linebreak"]];
        }

    };

    // Meta Helper/generator method for em and strong handling
    function strong_em(tag, md) {

        var state_slot = tag + "_state",
            other_slot = tag == "strong" ? "em_state" : "strong_state";

        function CloseTag(len) {
            this.len_after = len;
            this.name = "close_" + md;
        }

        return function (text, orig_match) {

            if (this[state_slot][0] == md) {
                // Most recent em is of this type
                //D:this.debug("closing", md);
                this[state_slot].shift();

                // "Consume" everything to go back to the recrusion in the else-block below
                return [text.length, new CloseTag(text.length - md.length)];
            }
            else {
                // Store a clone of the em/strong states
                var other = this[other_slot].slice(),
                    state = this[state_slot].slice();

                this[state_slot].unshift(md);

                //D:this.debug_indent += "  ";

                // Recurse
                var res = this.processInline(text.substr(md.length));
                //D:this.debug_indent = this.debug_indent.substr(2);

                var last = res[res.length - 1];

                //D:this.debug("processInline from", tag + ": ", uneval( res ) );

                var check = this[state_slot].shift();
                if (last instanceof CloseTag) {
                    res.pop();
                    // We matched! Huzzah.
                    var consumed = text.length - last.len_after;
                    return [consumed, [tag].concat(res)];
                }
                else {
                    // Restore the state of the other kind. We might have mistakenly closed it.
                    this[other_slot] = other;
                    this[state_slot] = state;

                    // We can't reuse the processed result as it could have wrong parsing contexts in it.
                    return [md.length, md];
                }
            }
        }; // End returned function
    }

    Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
    Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
    Markdown.dialects.Gruber.inline["*"] = strong_em("em", "*");
    Markdown.dialects.Gruber.inline["_"] = strong_em("em", "_");


    // Build default order from insertion order.
    Markdown.buildBlockOrder = function (d) {
        var ord = [];
        for (var i in d) {
            if (i == "__order__" || i == "__call__") continue;
            ord.push(i);
        }
        d.__order__ = ord;
    };

    // Build patterns for inline matcher
    Markdown.buildInlinePatterns = function (d) {
        var patterns = [];

        for (var i in d) {
            // __foo__ is reserved and not a pattern
            if (i.match(/^__.*__$/)) continue;
            var l = i.replace(/([\\.*+?|()\[\]{}])/g, "\\$1")
                .replace(/\n/, "\\n");
            patterns.push(i.length == 1 ? l : "(?:" + l + ")");
        }

        patterns = patterns.join("|");
        d.__patterns__ = patterns;
        //print("patterns:", uneval( patterns ) );

        var fn = d.__call__;
        d.__call__ = function (text, pattern) {
            if (pattern != undefined) {
                return fn.call(this, text, pattern);
            }
            else {
                return fn.call(this, text, patterns);
            }
        };
    };

    Markdown.DialectHelpers = {};
    Markdown.DialectHelpers.inline_until_char = function (text, want) {
        var consumed = 0,
            nodes = [];

        while (true) {
            if (text.charAt(consumed) == want) {
                // Found the character we were looking for
                consumed++;
                return [consumed, nodes];
            }

            if (consumed >= text.length) {
                // No closing char found. Abort.
                return null;
            }

            var res = this.dialect.inline.__oneElement__.call(this, text.substr(consumed));
            consumed += res[0];
            // Add any returned nodes.
            nodes.push.apply(nodes, res.slice(1));
        }
    }

    // Helper function to make sub-classing a dialect easier
    Markdown.subclassDialect = function (d) {
        function Block() { }
        Block.prototype = d.block;
        function Inline() { }
        Inline.prototype = d.inline;

        return { block: new Block(), inline: new Inline() };
    };

    Markdown.buildBlockOrder(Markdown.dialects.Gruber.block);
    Markdown.buildInlinePatterns(Markdown.dialects.Gruber.inline);

    Markdown.dialects.Maruku = Markdown.subclassDialect(Markdown.dialects.Gruber);

    Markdown.dialects.Maruku.processMetaHash = function processMetaHash(meta_string) {
        var meta = split_meta_hash(meta_string),
            attr = {};

        for (var i = 0; i < meta.length; ++i) {
            // id: #foo
            if (/^#/.test(meta[i])) {
                attr.id = meta[i].substring(1);
            }
            // class: .foo
            else if (/^\./.test(meta[i])) {
                // if class already exists, append the new one
                if (attr["class"]) {
                    attr["class"] = attr["class"] + meta[i].replace(/./, " ");
                }
                else {
                    attr["class"] = meta[i].substring(1);
                }
            }
            // attribute: foo=bar
            else if (/\=/.test(meta[i])) {
                var s = meta[i].split(/\=/);
                attr[s[0]] = s[1];
            }
        }

        return attr;
    }

    function split_meta_hash(meta_string) {
        var meta = meta_string.split(""),
            parts = [""],
            in_quotes = false;

        while (meta.length) {
            var letter = meta.shift();
            switch (letter) {
                case " ":
                    // if we're in a quoted section, keep it
                    if (in_quotes) {
                        parts[parts.length - 1] += letter;
                    }
                    // otherwise make a new part
                    else {
                        parts.push("");
                    }
                    break;
                case "'":
                case '"':
                    // reverse the quotes and move straight on
                    in_quotes = !in_quotes;
                    break;
                case "\\":
                    // shift off the next letter to be used straight away.
                    // it was escaped so we'll keep it whatever it is
                    letter = meta.shift();
                default:
                    parts[parts.length - 1] += letter;
                    break;
            }
        }

        return parts;
    }

    Markdown.dialects.Maruku.block.document_meta = function document_meta(block, next) {
        // we're only interested in the first block
        if (block.lineNumber > 1) return undefined;

        // document_meta blocks consist of one or more lines of `Key: Value\n`
        if (!block.match(/^(?:\w+:.*\n)*\w+:.*$/)) return undefined;

        // make an attribute node if it doesn't exist
        if (!extract_attr(this.tree)) {
            this.tree.splice(1, 0, {});
        }

        var pairs = block.split(/\n/);
        for (p in pairs) {
            var m = pairs[p].match(/(\w+):\s*(.*)$/),
                key = m[1].toLowerCase(),
                value = m[2];

            this.tree[1][key] = value;
        }

        // document_meta produces no content!
        return [];
    };

    Markdown.dialects.Maruku.block.block_meta = function block_meta(block, next) {
        // check if the last line of the block is an meta hash
        var m = block.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);
        if (!m) return undefined;

        // process the meta hash
        var attr = this.dialect.processMetaHash(m[2]);

        var hash;

        // if we matched ^ then we need to apply meta to the previous block
        if (m[1] === "") {
            var node = this.tree[this.tree.length - 1];
            hash = extract_attr(node);

            // if the node is a string (rather than JsonML), bail
            if (typeof node === "string") return undefined;

            // create the attribute hash if it doesn't exist
            if (!hash) {
                hash = {};
                node.splice(1, 0, hash);
            }

            // add the attributes in
            for (a in attr) {
                hash[a] = attr[a];
            }

            // return nothing so the meta hash is removed
            return [];
        }

        // pull the meta hash off the block and process what's left
        var b = block.replace(/\n.*$/, ""),
            result = this.processBlock(b, []);

        // get or make the attributes hash
        hash = extract_attr(result[0]);
        if (!hash) {
            hash = {};
            result[0].splice(1, 0, hash);
        }

        // attach the attributes to the block
        for (a in attr) {
            hash[a] = attr[a];
        }

        return result;
    };

    Markdown.dialects.Maruku.block.definition_list = function definition_list(block, next) {
        // one or more terms followed by one or more definitions, in a single block
        var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
            list = ["dl"],
            i, m;

        // see if we're dealing with a tight or loose block
        if ((m = block.match(tight))) {
            // pull subsequent tight DL blocks out of `next`
            var blocks = [block];
            while (next.length && tight.exec(next[0])) {
                blocks.push(next.shift());
            }

            for (var b = 0; b < blocks.length; ++b) {
                var m = blocks[b].match(tight),
                    terms = m[1].replace(/\n$/, "").split(/\n/),
                    defns = m[2].split(/\n:\s+/);

                // print( uneval( m ) );

                for (i = 0; i < terms.length; ++i) {
                    list.push(["dt", terms[i]]);
                }

                for (i = 0; i < defns.length; ++i) {
                    // run inline processing over the definition
                    list.push(["dd"].concat(this.processInline(defns[i].replace(/(\n)\s+/, "$1"))));
                }
            }
        }
        else {
            return undefined;
        }

        return [list];
    };

    // splits on unescaped instances of @ch. If @ch is not a character the result
    // can be unpredictable

    Markdown.dialects.Maruku.block.table = function table(block, next) {

        var _split_on_unescaped = function (s, ch) {
            ch = ch || '\\s';
            if (ch.match(/^[\\|\[\]{}?*.+^$]$/)) { ch = '\\' + ch; }
            var res = [],
                r = new RegExp('^((?:\\\\.|[^\\\\' + ch + '])*)' + ch + '(.*)'),
                m;
            while (m = s.match(r)) {
                res.push(m[1]);
                s = m[2];
            }
            res.push(s);
            return res;
        }

        var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
            // find at least an unescaped pipe in each line
            no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
            i, m;
        if (m = block.match(leading_pipe)) {
            // remove leading pipes in contents
            // (header and horizontal rule already have the leading pipe left out)
            m[3] = m[3].replace(/^\s*\|/gm, '');
        } else if (!(m = block.match(no_leading_pipe))) {
            return undefined;
        }

        var table = ["table", ["thead", ["tr"]], ["tbody"]];

        // remove trailing pipes, then split on pipes
        // (no escaped pipes are allowed in horizontal rule)
        m[2] = m[2].replace(/\|\s*$/, '').split('|');

        // process alignment
        var html_attrs = [];
        forEach(m[2], function (s) {
            if (s.match(/^\s*-+:\s*$/)) html_attrs.push({ align: "right" });
            else if (s.match(/^\s*:-+\s*$/)) html_attrs.push({ align: "left" });
            else if (s.match(/^\s*:-+:\s*$/)) html_attrs.push({ align: "center" });
            else html_attrs.push({});
        });

        // now for the header, avoid escaped pipes
        m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ''), '|');
        for (i = 0; i < m[1].length; i++) {
            table[1][1].push(['th', html_attrs[i] || {}].concat(
                this.processInline(m[1][i].trim())));
        }

        // now for body contents
        forEach(m[3].replace(/\|\s*$/mg, '').split('\n'), function (row) {
            var html_row = ['tr'];
            row = _split_on_unescaped(row, '|');
            for (i = 0; i < row.length; i++) {
                html_row.push(['td', html_attrs[i] || {}].concat(this.processInline(row[i].trim())));
            }
            table[2].push(html_row);
        }, this);

        return [table];
    }

    Markdown.dialects.Maruku.inline["{:"] = function inline_meta(text, matches, out) {
        if (!out.length) {
            return [2, "{:"];
        }

        // get the preceeding element
        var before = out[out.length - 1];

        if (typeof before === "string") {
            return [2, "{:"];
        }

        // match a meta hash
        var m = text.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);

        // no match, false alarm
        if (!m) {
            return [2, "{:"];
        }

        // attach the attributes to the preceeding element
        var meta = this.dialect.processMetaHash(m[1]),
            attr = extract_attr(before);

        if (!attr) {
            attr = {};
            before.splice(1, 0, attr);
        }

        for (var k in meta) {
            attr[k] = meta[k];
        }

        // cut out the string and replace it with nothing
        return [m[0].length, ""];
    };

    Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;

    Markdown.buildBlockOrder(Markdown.dialects.Maruku.block);
    Markdown.buildInlinePatterns(Markdown.dialects.Maruku.inline);

    var isArray = Array.isArray || function (obj) {
        return Object.prototype.toString.call(obj) == "[object Array]";
    };

    var forEach;
    // Don't mess with Array.prototype. Its not friendly
    if (Array.prototype.forEach) {
        forEach = function (arr, cb, thisp) {
            return arr.forEach(cb, thisp);
        };
    }
    else {
        forEach = function (arr, cb, thisp) {
            for (var i = 0; i < arr.length; i++) {
                cb.call(thisp || arr, arr[i], i, arr);
            }
        }
    }

    var isEmpty = function (obj) {
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                return false;
            }
        }

        return true;
    }

    function extract_attr(jsonml) {
        return isArray(jsonml)
            && jsonml.length > 1
            && typeof jsonml[1] === "object"
            && !(isArray(jsonml[1]))
            ? jsonml[1]
            : undefined;
    }



    /**
     *  renderJsonML( jsonml[, options] ) -> String
     *  - jsonml (Array): JsonML array to render to XML
     *  - options (Object): options
     *
     *  Converts the given JsonML into well-formed XML.
     *
     *  The options currently understood are:
     *
     *  - root (Boolean): wether or not the root node should be included in the
     *    output, or just its children. The default `false` is to not include the
     *    root itself.
     */
    expose.renderJsonML = function (jsonml, options) {
        options = options || {};
        // include the root element in the rendered output?
        options.root = options.root || false;

        var content = [];

        if (options.root) {
            content.push(render_tree(jsonml));
        }
        else {
            jsonml.shift(); // get rid of the tag
            if (jsonml.length && typeof jsonml[0] === "object" && !(jsonml[0] instanceof Array)) {
                jsonml.shift(); // get rid of the attributes
            }

            while (jsonml.length) {
                content.push(render_tree(jsonml.shift()));
            }
        }

        return content.join("\n\n");
    };

    function escapeHTML(text) {
        return text.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function render_tree(jsonml) {
        // basic case
        if (typeof jsonml === "string") {
            return escapeHTML(jsonml);
        }

        var tag = jsonml.shift(),
            attributes = {},
            content = [];

        if (jsonml.length && typeof jsonml[0] === "object" && !(jsonml[0] instanceof Array)) {
            attributes = jsonml.shift();
        }

        while (jsonml.length) {
            content.push(render_tree(jsonml.shift()));
        }

        var tag_attrs = "";
        for (var a in attributes) {
            tag_attrs += " " + a + '="' + escapeHTML(attributes[a]) + '"';
        }

        // be careful about adding whitespace here for inline elements
        if (tag == "img" || tag == "br" || tag == "hr") {
            return "<" + tag + tag_attrs + "/>";
        }
        else {
            return "<" + tag + tag_attrs + ">" + content.join("") + "</" + tag + ">";
        }
    }

    function convert_tree_to_html(tree, references, options) {
        var i;
        options = options || {};

        // shallow clone
        var jsonml = tree.slice(0);

        if (typeof options.preprocessTreeNode === "function") {
            jsonml = options.preprocessTreeNode(jsonml, references);
        }

        // Clone attributes if they exist
        var attrs = extract_attr(jsonml);
        if (attrs) {
            jsonml[1] = {};
            for (i in attrs) {
                jsonml[1][i] = attrs[i];
            }
            attrs = jsonml[1];
        }

        // basic case
        if (typeof jsonml === "string") {
            return jsonml;
        }

        // convert this node
        switch (jsonml[0]) {
            case "header":
                jsonml[0] = "h" + jsonml[1].level;
                delete jsonml[1].level;
                break;
            case "bulletlist":
                jsonml[0] = "ul";
                break;
            case "numberlist":
                jsonml[0] = "ol";
                break;
            case "listitem":
                jsonml[0] = "li";
                break;
            case "para":
                jsonml[0] = "p";
                break;
            case "markdown":
                jsonml[0] = "html";
                if (attrs) delete attrs.references;
                break;
            case "code_block":
                jsonml[0] = "pre";
                i = attrs ? 2 : 1;
                var code = ["code"];
                code.push.apply(code, jsonml.splice(i, jsonml.length - i));
                jsonml[i] = code;
                break;
            case "inlinecode":
                jsonml[0] = "code";
                break;
            case "img":
                jsonml[1].src = jsonml[1].href;
                delete jsonml[1].href;
                break;
            case "linebreak":
                jsonml[0] = "br";
                break;
            case "link":
                jsonml[0] = "a";
                break;
            case "link_ref":
                jsonml[0] = "a";

                // grab this ref and clean up the attribute node
                var ref = references[attrs.ref];

                // if the reference exists, make the link
                if (ref) {
                    delete attrs.ref;

                    // add in the href and title, if present
                    attrs.href = ref.href;
                    if (ref.title) {
                        attrs.title = ref.title;
                    }

                    // get rid of the unneeded original text
                    delete attrs.original;
                }
                // the reference doesn't exist, so revert to plain text
                else {
                    return attrs.original;
                }
                break;
            case "img_ref":
                jsonml[0] = "img";

                // grab this ref and clean up the attribute node
                var ref = references[attrs.ref];

                // if the reference exists, make the link
                if (ref) {
                    delete attrs.ref;

                    // add in the href and title, if present
                    attrs.src = ref.href;
                    if (ref.title) {
                        attrs.title = ref.title;
                    }

                    // get rid of the unneeded original text
                    delete attrs.original;
                }
                // the reference doesn't exist, so revert to plain text
                else {
                    return attrs.original;
                }
                break;
        }

        // convert all the children
        i = 1;

        // deal with the attribute node, if it exists
        if (attrs) {
            // if there are keys, skip over it
            for (var key in jsonml[1]) {
                i = 2;
                break;
            }
            // if there aren't, remove it
            if (i === 1) {
                jsonml.splice(i, 1);
            }
        }

        for (; i < jsonml.length; ++i) {
            jsonml[i] = convert_tree_to_html(jsonml[i], references, options);
        }

        return jsonml;
    }


    // merges adjacent text nodes into a single node
    function merge_text_nodes(jsonml) {
        // skip the tag name and attribute hash
        var i = extract_attr(jsonml) ? 2 : 1;

        while (i < jsonml.length) {
            // if it's a string check the next item too
            if (typeof jsonml[i] === "string") {
                if (i + 1 < jsonml.length && typeof jsonml[i + 1] === "string") {
                    // merge the second string into the first and remove it
                    jsonml[i] += jsonml.splice(i + 1, 1)[0];
                }
                else {
                    ++i;
                }
            }
            // if it's not a string recurse
            else {
                merge_text_nodes(jsonml[i]);
                ++i;
            }
        }
    }

})((function () {
    if (typeof exports === "undefined") {
        window.markdown = {};
        return window.markdown;
    }
    else {
        return exports;
    }
})());
