"use strict";

const yin_window_picture = "data:image/png;base64,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";

const yin_window_icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjExMCIgcng9IjUiIGZpbGw9IiNlMGUwZTAiIHN0cm9rZT0iI2IwYjBiMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIwIiByeD0iNSIgZmlsbD0iIzRhNGE0YSIvPgogIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjQiIGZpbGw9IiNmZjVmNTciLz4KICA8Y2lyY2xlIGN4PSI0NSIgY3k9IjMwIiByPSI0IiBmaWxsPSIjZmZiZDJlIi8+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSIzMCIgcj0iNCIgZmlsbD0iIzI4Yzk0MCIvPgogIDxyZWN0IHg9IjIwIiB5PSI0NSIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2MwYzBjMCIvPgogIDxyZWN0IHg9IjI1IiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI2NSIgZmlsbD0iI2Y1ZjVmNSIvPgogIDxyZWN0IHg9IjQwIiB5PSI3NSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjOTBjYWY5IiBzdHJva2U9IiM0MmE1ZjUiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxyZWN0IHg9Ijk1IiB5PSI3NSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZjYzgwIiBzdHJva2U9IiNmZmE3MjYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxyZWN0IHg9IjIwIiB5PSIxMjUiIHdpZHRoPSIxNjAiIGhlaWdodD0iNSIgZmlsbD0iIzRhNGE0YSIvPgo8L3N2Zz4K";
const yin_window_extensionId = "KookyCorderWindow";

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数 */

let windowInstances = {};

let buttonClickStates = {};

class PurpleYinWindow {
    constructor(runtime) {
        this.runtime = runtime;
        this.currentWindowId = null;
        this.data = null;
        this._ask;
        this._bar = 0;
        this.winClose = false;
        this._pVal;
        this._rangeValue;
        
        // 多语言支持
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                "YinWindow.name": "[窗口与弹窗扩展]",
                "YinWindow.createWindow": "创建窗口 [windowId], 标题栏高斯模糊[blur]，主体高斯模糊[blur2]",
                "YinWindow.setIcon": "设置窗口 [windowId] 的图标 [base64]",
                "YinWindow.setBackground": "设置窗口 [windowId] 背景颜色为 [color]",
                "YinWindow.setSize": "设置窗口 [windowId] 高为 [height] 宽为 [width]",
                "YinWindow.addText": "在窗口 [windowId] 中加入文本组件 [textId] 内容为 [content] 位置x [x] y [y]",
                "YinWindow.addButton": "在窗口 [windowId] 中增加按钮组件 [buttonId] 按钮颜色 [color] 内容 [content] 位置x [x] y [y]",
                "YinWindow.addTextBox": "在窗口 [windowId] 中增加文本框 [textBoxId] 文本框状态 [state] 位置x [x] y [y] 文本初始内容 [initialContent]提示[prompt]",
                "YinWindow.addTextArea": "在窗口 [windowId] 中增加多行文本框 [textAreaId] 状态 [state] 位置x [x] y [y] 宽 [width] 高 [height] 初始内容 [initialContent]提示[prompt]",
                "YinWindow.addTxtArea": "在窗口 [windowId] 中创建TXT多行文本 [txtAreaId] 位置x [x] y [y] 宽 [width] 高 [height] 初始内容[content]",
                "YinWindow.addImage":"在窗口 [windowId] 中增加一个图像 [imageId] [base64] 位置x [x] y [y]",
                "YinWindow.whenButtonClicked": "当按钮 [buttonId] 被点击时",
                "YinWindow.getTextBoxContent": "获取文本框 [textBoxId] 的内容",
                "Yindow.whenWindowsWasClosed":"当窗口关闭按钮被点击时",
                "YinWindow.anAlert": "创建一个Alert弹窗，内容[textAlert]",
                "YinWindow.anPrompt":"创建一个prompt弹窗，内容[textPrompt]",
                "YinWindow.getVal":"获取prompt的值",
                "YinWindow.popupAsk": "创建弹窗并询问[ask]",
                "YinWindow.popupPrompt": "创建一个提示弹窗，内容[prompt]",
                "YinWindow.getAsk": "获取询问的返回",
                "YinWindow.progressBar": "创建进度条弹窗，进度[theNew]%",
                "YinWindow.getProgress": "进度",
                "YinWindow.range":"创建一个滑杆弹窗，最大值为[max]，最小值为[min], 初始值为[value]",
                "YinWindow.getRange":"获取滑杆弹窗的值",
                "YinWindow.deleteText": "删除文本 [textId]",
                "YinWindow.deleteButton": "删除按钮 [buttonId]",
                "YinWindow.deleteImage": "删除图像 [imageId]",
                "YinWindow.deleteTextBox": "删除文本框 [textBoxId]",
                "YinWindow.deleteTextArea": "删除多行文本框 [textAreaId]",
                "YinWindow.deleteTxtArea": "删除TXT多行文本 [txtAreaId]",
                "YinWindow.inpot":"载入文件并解析为base64",
                "Yinwindow.RGB":"RGB格式R[red]，G[green]，B[blue]转十六进制",
                "YinWindow.docs": "📖 窗口扩展使用说明。",
                "YinWindow.new":"1.0.3"
            },
            "en": {
                "YinWindow.name": "[Window Extension]",
                "YinWindow.createWindow": "Create window [windowId], title bar Gaussian blur [blur], window Gaussian blur [blur2]",
                "YinWindow.setIcon": "Set icon for window [windowId] [base64]",
                "YinWindow.setBackground": "Set background color for window [windowId] [color]",
                "YinWindow.setSize": "Set window [windowId] height [height] width [width]",
                "YinWindow.addText": "Add text component [textId] to window [windowId] with content [content] position x [x] y [y]",
                "YinWindow.addButton": "Add button [buttonId] to window [windowId] color [color] content [content] position x [x] y [y]",
                "YinWindow.addTextBox": "Add text box [textBoxId] to window [windowId] state [state] position x [x] y [y] initial content [initialContent] the prompt[Prompt]",
                "YinWindow.addTextArea": "Add multi-line text box [textAreaId] to window [windowId] state [state] position x [x] y [y] width [width] height [height] initial content [initialContent] prompt[prompt]",
                "YinWindow.addTxtArea": "Create TXT multi-line text [txtAreaId] in window [windowId] position x [x] y [y] width [width] height [height] initial content[content]",
                "YinWindow.whenButtonClicked": "When button [buttonId] is clicked",
                "Yindow.whenWindowsWasClosed":"when windows was closed",
                "YinWindow.getTextBoxContent": "Get content of text box [textBoxId]",
                "YinWindow.anAlert": "Create an alert popup with the content [textAlert]",
                "YinWindow.anPrompt":"Create an prompt popup with the content [textPrompt]",
                "YinWindow.getVal":"get value of prompt",
                "YinWindow.popupPrompt": "Create a prompt pop-up with the content [prompt]",
                "YinWindow.popupAsk": "Create a popup and ask [ask], then return the answer",
                "YinWindow.getAsk": "Get the response to the inquiry",
                "YinWindow.progressBar": "Create progress bar popup, progress [theNew]%",
                "YinWindow.getProgress": "progress",
                "YinWindow.range": "Create a slider popup window with max value [max], min value [min], and initial value [value]",
                "YinWindow.getRange": "Get the value of the slider popup window",
                "YinWindow.addImage": "Add image [imageId] to window [windowId] [base64] position x [x] y [y]",
                "YinWindow.deleteText": "Delete text [textId]",
                "YinWindow.deleteButton": "Delete button [buttonId]",
                "YinWindow.deleteImage": "Delete image [imageId]",
                "YinWindow.deleteTextBox": "Delete text box [textBoxId]",
                "YinWindow.deleteTextArea": "Delete multi-line text box [textAreaId]",
                "YinWindow.deleteTxtArea": "Delete TXT multi-line text [txtAreaId]",
                "YinWindow.inpot":" Try encoding the files into Base64",
                "Yinwindow.RGB":"Convert RGB [red] [green] [blue] to hex",
                "YinWindow.docs": "📖 Window Extension Instructions",
                "YinWindow.new":"The 1.0.3"
            }
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
            description: id
        });
    }

    getInfo() {
        return {
            id: yin_window_extensionId,
            name: this.formatMessage("YinWindow.name"),
            blockIconURI: yin_window_icon, // 需提供窗口图标
            menuIconURI: yin_window_icon, // 需提供窗口图标
            color1: "#4A6FE3",
            color2: "#3A5ECD",
            color3: "#5c99df",
            blocks: [
                { // 教程按钮
                    blockType: "button",
                    text: this.formatMessage('YinWindow.docs'),
                    onClick: this.docs,
                },
                { // 教程按钮
                    blockType: "button",
                    text: this.formatMessage('YinWindow.new'),
                    onClick: this.news,
                },
                "---" + "第一板块 创建窗口",
                { // 创建窗口
                    opcode: "createWindow",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.createWindow"),
                    arguments: {
                        windowId: {
                            type: "string",
                            defaultValue: "window1"
                        },
                        blur: {
                            type: "boolean",
                            menu: "blurs"
                        },
                        blur2: {
                            type: "boolean",
                            menu: "blurs"
                        }
                    }
                },
                "---" + "第二板块 设置",
                { // 设置窗口图标
                    opcode: "setIcon",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.setIcon"),
                    arguments: {
                        windowId: {
                            type: "string",
                            defaultValue: "window1"
                        },
                        base64: {
                            type: "string",
                            defaultValue: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjExMCIgcng9IjUiIGZpbGw9IiNlMGUwZTAiIHN0cm9rZT0iI2IwYjBiMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIwIiByeD0iNSIgZmlsbD0iIzRhNGE0YSIvPgogIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjQiIGZpbGw9IiNmZjVmNTciLz4KICA8Y2lyY2xlIGN4PSI0NSIgY3k9IjMwIiByPSI0IiBmaWxsPSIjZmZiZDJlIi8+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSIzMCIgcj0iNCIgZmlsbD0iIzI4Yzk0MCIvPgogIDxyZWN0IHg9IjIwIiB5PSI0NSIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2MwYzBjMCIvPgogIDxyZWN0IHg9IjI1IiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI2NSIgZmlsbD0iI2Y1ZjVmNSIvPgogIDxyZWN0IHg9IjQwIiB5PSI3NSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjOTBjYWY5IiBzdHJva2U9IiM0MmE1ZjUiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxyZWN0IHg9Ijk1IiB5PSI3NSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZjYzgwIiBzdHJva2U9IiNmZmE3MjYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxyZWN0IHg9IjIwIiB5PSIxMjUiIHdpZHRoPSIxNjAiIGhlaWdodD0iNSIgZmlsbD0iIzRhNGE0YSIvPgo8L3N2Zz4K"
                        }
                    }
                },
                { // 设置窗口背景颜色
                    opcode: "setBackground",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.setBackground"),
                    arguments: {
                        windowId: {
                            type: "string",
                            defaultValue: "window1"
                        },
                        color: {
                            type: "string",
                            defaultValue: "#FFFFFF"
                        }
                    }
                },
                { // 设置窗口尺寸
                    opcode: "setSize",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.setSize"),
                    arguments: {
                        windowId: {
                            type: "string",
                            defaultValue: "window1"
                        },
                        height: {
                            type: "number",
                            defaultValue: 300
                        },
                        width: {
                            type: "number",
                            defaultValue: 400
                        }
                    }
                },
                "---" + "第三版块 组件",
                { // 添加文本组件
                    opcode: "addText",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.addText"),
                    arguments: {
                        windowId: {
                            type: "string",
                            defaultValue: "window1"
                        },
                        textId: {
                            type: "string",
                            defaultValue: "text1"
                        },
                        content: {
                            type: "string",
                            defaultValue: "文本内容"
                        },
                        x: {
                            type: "number",
                            defaultValue: 10
                        },
                        y: {
                            type: "number",
                            defaultValue: 10
                        }
                    }
                },
                { // 添加按钮组件
                    opcode: "addButton",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.addButton"),
                    arguments: {
                        windowId: {
                            type: "string",
                            defaultValue: "window1"
                        },
                        buttonId: {
                            type: "string",
                            defaultValue: "button1"
                        },
                        color: {
                            type: "string",
                            defaultValue: "#4CAF50"
                        },
                        content: {
                            type: "string",
                            defaultValue: "按钮"
                        },
                        x: {
                            type: "number",
                            defaultValue: 10
                        },
                        y: {
                            type: "number",
                            defaultValue: 50
                        }
                    }
                },
                { // 添加文本框组件
                    opcode: "addTextBox",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.addTextBox"),
                    arguments: {
                        windowId: {
                            type: "string",
                            defaultValue: "window1"
                        },
                        textBoxId: {
                            type: "string",
                            defaultValue: "textBox1"
                        },
                        state: {
                            type: "string",
                            menu: "textBoxState"
                        },
                        x: {
                            type: "number",
                            defaultValue: 10
                        },
                        y: {
                            type: "number",
                            defaultValue: 90
                        },
                        initialContent: {
                            type: "string",
                            defaultValue: ""
                        },
                        prompt: {
                            type: "string",
                            defaultValue: "文本提示"
                        }
                    }
                },
                { // 添加多行文本框组件
                    opcode: "addTextArea",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.addTextArea"),
                    arguments: {
                        windowId: {
                            type: "string",
                            defaultValue: "window1"
                        },
                        textAreaId: {
                            type: "string",
                            defaultValue: "textArea1"
                        },
                        state: {
                            type: "string",
                            menu: "textBoxState" // 复用文本框的状态菜单
                        },
                        x: {
                            type: "number",
                            defaultValue: 10
                        },
                        y: {
                            type: "number",
                            defaultValue: 130
                        },
                        width: {
                            type: "number",
                            defaultValue: 200
                        },
                        height: {
                            type: "number",
                            defaultValue: 100
                        },
                        initialContent: {
                            type: "string",
                            defaultValue: ""
                        },
                        prompt: {
                            type: "string",
                            defaultValue: "请输入..."
                        }
                    }
                },
                { // 添加TXT风格多行文本
                    opcode: "addTxtArea",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.addTxtArea"),
                    arguments: {
                        windowId: {
                            type: "string",
                            defaultValue: "window1"
                        },
                        txtAreaId: {
                            type: "string",
                            defaultValue: "txt1"
                        },
                        x: {
                            type: "number",
                            defaultValue: 10
                        },
                        y: {
                            type: "number",
                            defaultValue: 130
                        },
                        width: {
                            type: "number",
                            defaultValue: 250
                        },
                        height: {
                            type: "number",
                            defaultValue: 150
                        },
                        content: {
                            type: "string",
                            defaultValue: "第一行文本\n第二行文本\n第三行文本"
                        }
                    }
                },
                { // 添加图像组件
                    opcode: "addImage",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.addImage"),
                    arguments: {
                        windowId: {
                            type: "string",
                            defaultValue: "window1"
                        },
                        imageId: {
                            type: "string",
                            defaultValue: "image1"
                        },
                        base64: {
                            type: "string",
                            defaultValue: "data:image/png;base64,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"
                        },
                        x: {
                            type: "number",
                            defaultValue: 10
                        },
                        y: {
                            type: "number",
                            defaultValue: 130
                        }
                    }
                },
                "---"+"第五板块 弹窗",
                {
                    opcode: "alert",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.anAlert"),
                    arguments: {
                        textAlert: {
                            type: "string",
                            defaultValue: "你好，我是一个Alert弹窗"
                        }
                    }
                },
                {
                    opcode: "prompt",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.anPrompt"),
                    arguments: {
                        textPrompt: {
                            type: "string",
                            defaultValue: "Prompt弹窗：你叫什么名字"
                        }
                    }
                },
                {
                    opcode: "popupPrompt",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.popupPrompt"),
                    arguments: {
                        prompt: {
                            type: "string",
                            defaultValue: "提示（prompt）"
                        }
                    }
                },
                {
                    opcode: "getVal",
                    blockType: "reporter",
                    text: this.formatMessage("YinWindow.getVal"),
                },
                {
                    opcode: "popupAsk",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.popupAsk"),
                    arguments:{
                        ask: {
                            type: "string",
                            defaultValue: "你好吗？"
                        }
                    },
                    await: true
                },
                {
                    opcode: "getAsk",
                    blockType: "Boolean",
                    text: this.formatMessage("YinWindow.getAsk")
                },
                {
                    opcode: "progressBar",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.progressBar"),
                    arguments: {
                        theNew: {
                            type: "number",
                            defaultValue: 50
                        }
                    }
                },
                {
                    opcode: "getProgress",
                    blockType: "reporter",
                    text: this.formatMessage("YinWindow.getProgress")
                },
                {
                    opcode: "range",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.range"),
                    arguments: {
                        max: {
                            type: "number",
                            defaultValue: 100
                        },
                        min: {
                            type: "number",
                            defaultValue: 0
                        },
                        value: {
                            type: "number",
                            defaultValue: 50
                        }
                    }
                },
                {
                    opcode: "getRange",
                    blockType: "reporter",
                    text: this.formatMessage("YinWindow.getRange"),
                },
                "---" + "第四板块 删除组件",
                { // 删除文本
                    opcode: "deleteText",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.deleteText"),
                    arguments: {
                        textId: {
                            type: "string",
                            defaultValue: "text1"
                        }
                    }
                },
                { // 删除按钮
                    opcode: "deleteButton",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.deleteButton"),
                    arguments: {
                        buttonId: {
                            type: "string",
                            defaultValue: "button1"
                        }
                    }
                },
                { // 删除图像
                    opcode: "deleteImage",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.deleteImage"),
                    arguments: {
                        imageId: {
                            type: "string",
                            defaultValue: "image1"
                        }
                    }
                },
                { // 删除文本框
                    opcode: "deleteTextBox",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.deleteTextBox"),
                    arguments: {
                        textBoxId: {
                            type: "string",
                            defaultValue: "textBox1"
                        }
                    }
                },
                { // 删除多行文本框
                    opcode: "deleteTextArea",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.deleteTextArea"),
                    arguments: {
                        textAreaId: {
                            type: "string",
                            defaultValue: "textArea1"
                        }
                    }
                },
                { // 删除TXT多行文本
                    opcode: "deleteTxtArea",
                    blockType: "command",
                    text: this.formatMessage("YinWindow.deleteTxtArea"),
                    arguments: {
                        txtAreaId: {
                            type: "string",
                            defaultValue: "txt1"
                        }
                    }
                },
                "---" + "第五板块 组件效果",
                { // 按钮点击事件
                    opcode: "whenButtonClicked",
                    blockType: "Boolean",
                    text: this.formatMessage("YinWindow.whenButtonClicked"),
                    arguments: {
                        buttonId: {
                            type: "string",
                            defaultValue: "button1"
                        }
                    }
                },
                { // 获取文本框内容
                    opcode: "getTextBoxContent",
                    blockType: "reporter",
                    text: this.formatMessage("YinWindow.getTextBoxContent"),
                    arguments: {
                        textBoxId: {
                            type: "string",
                            defaultValue: "textBox1"
                        }
                    }
                },
                {
                    opcode: "whenWindowsWasClosed",
                    blockType: "Boolean",
                    text: this.formatMessage("Yindow.whenWindowsWasClosed"),
                },
                "---"+"第六板块，辅助工具",
                {
                    opcode: "inpot",
                    blockType : "reporter",
                    text: this.formatMessage("YinWindow.inpot")
                },
                {
                    opcode: "rgb",
                    blockType: "reporter",
                    text: this.formatMessage("Yinwindow.RGB"),
                    arguments: {
                        red: {
                            type: "number",
                            defaultValue: 255
                        },
                        green: {
                            type: "number",
                            defaultValue: 255
                        },
                        blue: {
                            type: "number",
                            defaultValue:255
                        }
                    }
                }
            ],
            menus: {
                textBoxState: {
                    acceptReporters: true,
                    items: [
                        { text: "可操作", value: "enabled" },
                        { text: "不可操作", value: "disabled" }
                    ]
                },
                blurs: {
                    acceptReporters: true,
                    items: [
                        { text: "存在", value: true },
                        { text: "不存在", value: false }
                    ]
                }
            }
        };
    }

    docs() {
        let a = document.createElement('a');
        a.href = "https://learn.ccw.site/article/d0ad50d7-762d-4b10-a9a1-2c7cf4a790ac";
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        a.click();
    }
    
    news() {
        let a = document.createElement('a');
        a.href = "https://learn.ccw.site/article/11056f65-ec77-4196-b479-9e4ecfdbbe21?preview=true";
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        a.click();
    }

    /**
     * 创建窗口
     * @param {string} args.windowId - 窗口ID
     * @param {string} args.blur
     * @param {string} args.blur2
     */
    createWindow(args) {
        const { windowId, blur, blur2 } = args;
        
        // 创建窗口元素
        const windowElement = document.createElement('div');
        windowElement.id = `custom-window-${windowId}`;
        windowElement.className = 'custom-window';
        windowElement.style.position = 'absolute';
        windowElement.style.left = '50px';
        windowElement.style.top = '50px';
        windowElement.style.width = '300px';
        windowElement.style.border = '1px solid #ccc';
        windowElement.style.borderRadius = '5px';
        windowElement.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        windowElement.style.backgroundColor = '#fff';
        windowElement.style.zIndex = '1000';
        windowElement.style.overflow = 'hidden';

        if (blur2){
            windowElement.style.background = "rgba(255, 255, 255, 0.2)";
            windowElement.style.backdropFilter = "blur(10px)";
            windowElement.style.webkitBackdropFilter = "blur(10px)";
            windowElement.style.borderRadius = "8px";
        }
        
        const titleBar = document.createElement('div');
        titleBar.className = 'window-title-bar';
        titleBar.style.padding = '8px';
        titleBar.style.backgroundColor = '#f0f0f0';
        titleBar.style.cursor = 'move';
        titleBar.style.display = 'flex';
        titleBar.style.alignItems = 'center';
        titleBar.textContent = windowId;

        if (blur){
            titleBar.style.background = "rgba(255, 255, 255, 0.2)";
            titleBar.style.backdropFilter = "blur(10px)";
            titleBar.style.webkitBackdropFilter = "blur(10px)";
            titleBar.style.borderRadius = "8px";
        }
        
        const contentArea = document.createElement('div');
        contentArea.id = `window-content-${windowId}`;
        contentArea.className = 'window-content';
        contentArea.style.padding = '10px';
        contentArea.style.minHeight = '200px';
        contentArea.style.overflow = 'auto';
        contentArea.style.position = 'relative';
        

        const closeButton = document.createElement('button');
        closeButton.className = 'window-close-button';
        closeButton.style.marginLeft = 'auto';
        closeButton.style.padding = '2px 6px';
        closeButton.style.border = 'none';
        closeButton.style.backgroundColor = '#ff5252';
        closeButton.style.color = 'white';
        closeButton.style.borderRadius = '3px';
        closeButton.style.cursor = 'pointer';
        closeButton.textContent = 'X';
        
        closeButton.addEventListener('click', () => {
            this.winClose = true;
            windowElement.style.display = 'none';
        });

        closeButton.addEventListener('mouseup', ()=>{
            this.winClose = false;
                
        })

        titleBar.appendChild(closeButton);
        windowElement.appendChild(titleBar);
        windowElement.appendChild(contentArea);

        document.body.appendChild(windowElement);

        this.makeDraggable(windowElement, titleBar);

        windowInstances[windowId] = {
            element: windowElement,
            contentArea: contentArea,
            components: {},
            size: {
                width: 300,
                height: 200 + 36
            }
        };
        
        console.log(`创建窗口: ${windowId}`);
        this.currentWindowId = windowId;
    }

    /**
     * 设置窗口图标
     * @param {string} args.windowId - 窗口ID
     * @param {string} args.base64 - 图标Base64编码
     */
    setIcon(args) {
        const { windowId, base64 } = args;
        const windowInstance = windowInstances[windowId];
        
        if (!windowInstance) {
            console.error(`窗口 ${windowId} 不存在`);
            return;
        }

        const titleBar = windowInstance.element.querySelector('.window-title-bar');

        const existingIcon = titleBar.querySelector('.window-icon');
        if (existingIcon) {
            titleBar.removeChild(existingIcon);
        }

        if (base64) {
            const icon = document.createElement('img');
            icon.className = 'window-icon';
            icon.src = base64;
            icon.style.width = '16px';
            icon.style.height = '16px';
            icon.style.marginRight = '8px';

            titleBar.insertBefore(icon, titleBar.firstChild);
        }
    }

    /**
     * 设置窗口背景颜色
     * @param {string} args.windowId - 窗口ID
     * @param {string} args.color - 背景颜色
     */
    setBackground(args) {
        const { windowId, color } = args;
        const windowInstance = windowInstances[windowId];
        
        if (!windowInstance) {
            console.error(`窗口 ${windowId} 不存在`);
            return;
        }

        windowInstance.contentArea.style.backgroundColor = color;
    }

    /**
     * 设置窗口尺寸
     * @param {string} args.windowId - 窗口ID
     * @param {number} args.height - 窗口高度
     * @param {number} args.width - 窗口宽度
     */
    setSize(args) {
        const { windowId, height, width } = args;
        const windowInstance = windowInstances[windowId];
        
        if (!windowInstance) {
            console.error(`窗口 ${windowId} 不存在`);
            return;
        }

        const validHeight = Math.max(100, height);
        const validWidth = Math.max(100, width);

        windowInstance.element.style.height = `${validHeight}px`;
        windowInstance.element.style.width = `${validWidth}px`;

        const titleBarHeight = 36;
        windowInstance.contentArea.style.height = `${validHeight - titleBarHeight}px`;

        windowInstance.size = {
            width: validWidth,
            height: validHeight
        };
        
        console.log(`设置窗口 ${windowId} 尺寸为: ${validWidth}x${validHeight}`);
    }

    /**
     * 添加文本组件
     * @param {string} args.windowId - 窗口ID
     * @param {string} args.textId - 文本组件ID
     * @param {string} args.content - 文本内容
     * @param {number} args.x - x坐标
     * @param {number} args.y - y坐标
     */
    addText(args) {
        const { windowId, textId, content, x, y } = args;
        const windowInstance = windowInstances[windowId];
        
        if (!windowInstance) {
            console.error(`窗口 ${windowId} 不存在`);
            return;
        }

        const existingElement = windowInstance.contentArea.querySelector(`#text-${textId}`);
        if (existingElement) {
            existingElement.textContent = content;
            existingElement.style.left = `${x}px`;
            existingElement.style.top = `${y}px`;
            return;
        }

        const textElement = document.createElement('div');
        textElement.id = `text-${textId}`;
        textElement.className = 'window-text-component';
        textElement.style.position = 'absolute';
        textElement.style.left = `${x}px`;
        textElement.style.top = `${y}px`;
        textElement.style.marginBottom = '0';
        textElement.textContent = content;

        windowInstance.contentArea.appendChild(textElement);

        windowInstance.components[textId] = {
            type: 'text',
            element: textElement,
            position: { x, y }
        };
    }

    /**
     * 添加按钮组件
     * @param {string} args.windowId - 窗口ID
     * @param {string} args.buttonId - 按钮ID
     * @param {string} args.color - 按钮颜色
     * @param {string} args.content - 按钮内容
     * @param {number} args.x - x坐标
     * @param {number} args.y - y坐标
     */
    addButton(args) {
        const { windowId, buttonId, color, content, x, y } = args;
        const windowInstance = windowInstances[windowId];
        
        if (!windowInstance) {
            console.error(`窗口 ${windowId} 不存在`);
            return;
        }

        const existingElement = windowInstance.contentArea.querySelector(`#button-${buttonId}`);
        if (existingElement) {
            existingElement.textContent = content;
            existingElement.style.backgroundColor = color;
            existingElement.style.left = `${x}px`;
            existingElement.style.top = `${y}px`;
            return;
        }

        const buttonElement = document.createElement('button');
        buttonElement.id = `button-${buttonId}`;
        buttonElement.className = 'window-button-component';
        buttonElement.style.position = 'absolute';
        buttonElement.style.left = `${x}px`;
        buttonElement.style.top = `${y}px`;
        buttonElement.style.marginBottom = '0';
        buttonElement.style.padding = '6px 12px';
        buttonElement.style.border = 'none';
        buttonElement.style.borderRadius = '4px';
        buttonElement.style.backgroundColor = color;
        buttonElement.style.color = 'white';
        buttonElement.style.cursor = 'pointer';
        buttonElement.textContent = content;

        buttonElement.addEventListener('click', () => {
            console.log(`按钮 ${buttonId} 被点击`);
        });

        windowInstance.contentArea.appendChild(buttonElement);

        windowInstance.components[buttonId] = {
            type: 'button',
            element: buttonElement,
            position: { x, y }
        };
    }

    /**
     * 添加文本框组件
     * @param {string} args.windowId - 窗口ID
     * @param {string} args.textBoxId - 文本框ID
     * @param {string} args.state - 文本框状态
     * @param {number} args.x - x坐标
     * @param {number} args.y - y坐标
     * @param {string} args.initialContent - 初始内容
     * @param {string} args.prompt - 提示文本
     */
    addTextBox(args) {
        const { windowId, textBoxId, state, x, y, initialContent, prompt } = args;
        const windowInstance = windowInstances[windowId];
        
        if (!windowInstance) {
            console.error(`窗口 ${windowId} 不存在`);
            return;
        }

        const contentToUse = initialContent || prompt || "文本";

        const existingElement = windowInstance.contentArea.querySelector(`#textbox-${textBoxId}`);
        if (existingElement) {
            existingElement.disabled = (state === 'disabled');
            existingElement.value = contentToUse;
            existingElement.placeholder = prompt || "";
            existingElement.style.left = `${x}px`;
            existingElement.style.top = `${y}px`;

            windowInstance.components[textBoxId].value = contentToUse;
            return;
        }

        const textBoxElement = document.createElement('input');
        textBoxElement.id = `textbox-${textBoxId}`;
        textBoxElement.className = 'window-textbox-component';
        textBoxElement.style.position = 'absolute';
        textBoxElement.style.left = `${x}px`;
        textBoxElement.style.top = `${y}px`;
        textBoxElement.style.marginBottom = '0';
        textBoxElement.style.padding = '6px';
        textBoxElement.style.width = '150px';
        textBoxElement.disabled = (state === 'disabled');
        textBoxElement.value = contentToUse;
        textBoxElement.placeholder = prompt || "";

        windowInstance.contentArea.appendChild(textBoxElement);

        windowInstance.components[textBoxId] = {
            type: 'textbox',
            element: textBoxElement,
            position: { x, y },
            value: contentToUse
        };

        const updateValue = () => {
            const newValue = textBoxElement.value || prompt || "文本";

            if (!textBoxElement.value) {
                textBoxElement.value = newValue;
            }

            windowInstance.components[textBoxId].value = newValue;
        };

        textBoxElement.addEventListener('input', updateValue);
        textBoxElement.addEventListener('change', updateValue);
        textBoxElement.addEventListener('blur', updateValue);

        updateValue();
    }

    /**
     * 添加多行文本框组件
     * @param {string} args.windowId - 窗口ID
     * @param {string} args.textAreaId - 多行文本框ID
     * @param {string} args.state - 多行文本框状态
     * @param {number} args.x - x坐标
     * @param {number} args.y - y坐标
     * @param {number} args.width - 宽度
     * @param {number} args.height - 高度
     * @param {string} args.initialContent - 初始内容
     * @param {string} args.prompt - 提示文本
     */
    addTextArea(args) {
        const { windowId, textAreaId, state, x, y, width, height, initialContent, prompt } = args;
        const windowInstance = windowInstances[windowId];
        
        if (!windowInstance) {
            console.error(`窗口 ${windowId} 不存在`);
            return;
        }

        const contentToUse = initialContent || prompt || "";

        const existingElement = windowInstance.contentArea.querySelector(`#textarea-${textAreaId}`);
        if (existingElement) {
            existingElement.disabled = (state === 'disabled');
            existingElement.value = contentToUse;
            existingElement.style.left = `${x}px`;
            existingElement.style.top = `${y}px`;
            existingElement.style.width = `${width}px`;
            existingElement.style.height = `${height}px`;

            windowInstance.components[textAreaId].value = contentToUse;
            return;
        }

        const textAreaElement = document.createElement('textarea');
        textAreaElement.id = `textarea-${textAreaId}`;
        textAreaElement.className = 'window-textarea-component';
        textAreaElement.style.position = 'absolute';
        textAreaElement.style.left = `${x}px`;
        textAreaElement.style.top = `${y}px`;
        textAreaElement.style.width = `${width}px`;
        textAreaElement.style.height = `${height}px`;
        textAreaElement.style.padding = '6px';
        textAreaElement.style.border = '1px solid #ccc';
        textAreaElement.style.borderRadius = '4px';
        textAreaElement.style.resize = 'none';
        textAreaElement.disabled = (state === 'disabled');
        textAreaElement.value = contentToUse;
        textAreaElement.placeholder = prompt || "";

        windowInstance.contentArea.appendChild(textAreaElement);

        windowInstance.components[textAreaId] = {
            type: 'textarea',
            element: textAreaElement,
            position: { x, y },
            value: contentToUse
        };

        const updateValue = () => {
            windowInstance.components[textAreaId].value = textAreaElement.value || '';
        };
        
        textAreaElement.addEventListener('input', updateValue);
        textAreaElement.addEventListener('change', updateValue);
        textAreaElement.addEventListener('blur', updateValue);
    }

    /**
     * 添加TXT风格多行文本（支持换行、保留格式）
     * @param {string} args.windowId - 窗口ID
     * @param {string} args.txtAreaId - TXT文本框ID
     * @param {number} args.x - x坐标
     * @param {number} args.y - y坐标
     * @param {number} args.width - 宽度
     * @param {number} args.height - 高度
     * @param {string} args.content - 初始内容（支持\n换行）
     */
    addTxtArea(args) {
        const { windowId, txtAreaId, x, y, width, height, content } = args;
        const windowInstance = windowInstances[windowId];
        
        if (!windowInstance) {
            console.error(`窗口 ${windowId} 不存在`);
            return;
        }

        const formattedContent = content || "请输入文本...\n支持多行换行";

        const existingElement = windowInstance.contentArea.querySelector(`#txtarea-${txtAreaId}`);
        if (existingElement) {
            existingElement.value = formattedContent;
            existingElement.style.left = `${x}px`;
            existingElement.style.top = `${y}px`;
            existingElement.style.width = `${width}px`;
            existingElement.style.height = `${height}px`;
            windowInstance.components[txtAreaId].value = formattedContent;
            return;
        }

        const txtAreaElement = document.createElement('textarea');
        txtAreaElement.id = `txtarea-${txtAreaId}`;
        txtAreaElement.className = 'window-txtarea-component';
        txtAreaElement.style.position = 'absolute';
        txtAreaElement.style.left = `${x}px`;
        txtAreaElement.style.top = `${y}px`;
        txtAreaElement.style.width = `${width}px`;
        txtAreaElement.style.height = `${height}px`;
        txtAreaElement.style.padding = '10px';
        txtAreaElement.style.fontFamily = 'Consolas, "Courier New", monospace';
        txtAreaElement.style.fontSize = '14px';
        txtAreaElement.style.lineHeight = '1.5';
        txtAreaElement.style.border = '1px solid #999';
        txtAreaElement.style.borderRadius = '2px';
        txtAreaElement.style.backgroundColor = '#f8f8f8';
        txtAreaElement.style.resize = 'both';
        txtAreaElement.style.overflow = 'auto';
        txtAreaElement.value = formattedContent;
        txtAreaElement.spellcheck = false;

        windowInstance.contentArea.appendChild(txtAreaElement);

        windowInstance.components[txtAreaId] = {
            type: 'txtarea',
            element: txtAreaElement,
            position: { x, y },
            value: formattedContent
        };

        txtAreaElement.addEventListener('input', () => {
            windowInstance.components[txtAreaId].value = txtAreaElement.value;
        });
    }

    /**
     * 添加图像组件
     * @param {string} args.windowId - 窗口ID
     * @param {string} args.imageId - 图像ID
     * @param {string} args.base64 - 图像Base64编码
     * @param {number} args.x - x坐标
     * @param {number} args.y - y坐标
     */
    addImage(args) {
        const { windowId, imageId, base64, x, y } = args;
        const windowInstance = windowInstances[windowId];
        
        if (!windowInstance) {
            console.error(`窗口 ${windowId} 不存在`);
            return;
        }
        
        if (!base64) {
            console.error(`图像Base64不能为空`);
            return;
        }

        const existingElement = windowInstance.contentArea.querySelector(`#image-${imageId}`);
        if (existingElement) {
            existingElement.src = base64;
            existingElement.style.left = `${x}px`;
            existingElement.style.top = `${y}px`;
            return;
        }

        const imageElement = document.createElement('img');
        imageElement.id = `image-${imageId}`;
        imageElement.className = 'window-image-component';
        imageElement.style.position = 'absolute';
        imageElement.style.left = `${x}px`;
        imageElement.style.top = `${y}px`;
        imageElement.style.maxWidth = '200px';
        imageElement.style.maxHeight = '150px';
        imageElement.style.objectFit = 'contain';
        imageElement.src = base64;

        windowInstance.contentArea.appendChild(imageElement);

        windowInstance.components[imageId] = {
            type: 'image',
            element: imageElement,
            position: { x, y }
        };
    }

    /**
     * 添加图像组件
     * @param {string} args.windowId - 窗口ID
     * @param {string} args.imageId - 图像ID
     * @param {string} args.base64 - 图像Base64编码
     * @param {number} args.x - x坐标
     * @param {number} args.y - y坐标
     */
    addImage(args) {
        const { windowId, imageId, base64, x, y } = args;
        const windowInstance = windowInstances[windowId];
        
        if (!windowInstance) {
            console.error(`窗口 ${windowId} 不存在`);
            return;
        }
        
        if (!base64) {
            console.error(`图像Base64不能为空`);
            return;
        }

        const existingElement = windowInstance.contentArea.querySelector(`#image-${imageId}`);
        if (existingElement) {
            existingElement.src = base64;
            existingElement.style.left = `${x}px`;
            existingElement.style.top = `${y}px`;
            return;
        }

        const imageElement = document.createElement('img');
        imageElement.id = `image-${imageId}`;
        imageElement.className = 'window-image-component';
        imageElement.style.position = 'absolute';
        imageElement.style.left = `${x}px`;
        imageElement.style.top = `${y}px`;
        imageElement.style.maxWidth = '200px';
        imageElement.style.maxHeight = '150px';
        imageElement.style.objectFit = 'contain';
        imageElement.src = base64;

        windowInstance.contentArea.appendChild(imageElement);

        windowInstance.components[imageId] = {
            type: 'image',
            element: imageElement,
            position: { x, y }
        };
    }

    /**
     * 删除文本组件
     * @param {string} args.textId - 文本ID
     */
    deleteText(args) {
        const { textId } = args;

        for (const windowId in windowInstances) {
            const windowInstance = windowInstances[windowId];
            const component = windowInstance.components[textId];
            
            if (component && component.type === 'text') {
                windowInstance.contentArea.removeChild(component.element);
                delete windowInstance.components[textId];
                console.log(`删除文本组件: ${textId}`);
                return;
            }
        }
        
        console.warn(`未找到文本组件: ${textId}`);
    }

    /**
     * 删除按钮组件
     * @param {string} args.buttonId - 按钮ID
     */
    deleteButton(args) {
        const { buttonId } = args;

        for (const windowId in windowInstances) {
            const windowInstance = windowInstances[windowId];
            const component = windowInstance.components[buttonId];
            
            if (component && component.type === 'button') {
                windowInstance.contentArea.removeChild(component.element);
                delete windowInstance.components[buttonId];
                console.log(`删除按钮组件: ${buttonId}`);
                return;
            }
        }
        
        console.warn(`未找到按钮组件: ${buttonId}`);
    }

    /**
     * 删除图像组件
     * @param {string} args.imageId - 图像ID
     */
    deleteImage(args) {
        const { imageId } = args;

        for (const windowId in windowInstances) {
            const windowInstance = windowInstances[windowId];
            const component = windowInstance.components[imageId];
            
            if (component && component.type === 'image') {
                windowInstance.contentArea.removeChild(component.element);
                delete windowInstance.components[imageId];
                console.log(`删除图像组件: ${imageId}`);
                return;
            }
        }
        
        console.warn(`未找到图像组件: ${imageId}`);
    }

    /**
     * 删除文本框组件
     * @param {string} args.textBoxId - 文本框ID
     */
    deleteTextBox(args) {
        const { textBoxId } = args;
        for (const windowId in windowInstances) {
            const windowInstance = windowInstances[windowId];
            const component = windowInstance.components[textBoxId];
            
            if (component && component.type === 'textbox') {
                windowInstance.contentArea.removeChild(component.element);
                delete windowInstance.components[textBoxId];
                console.log(`删除文本框组件: ${textBoxId}`);
                return;
            }
        }
        
        console.warn(`未找到文本框组件: ${textBoxId}`);
    }

    /**
     * 删除多行文本框组件
     * @param {string} args.textAreaId - 多行文本框ID
     */
    deleteTextArea(args) {
        const { textAreaId } = args;
        for (const windowId in windowInstances) {
            const windowInstance = windowInstances[windowId];
            const component = windowInstance.components[textAreaId];
            
            if (component && component.type === 'textarea') {
                windowInstance.contentArea.removeChild(component.element);
                delete windowInstance.components[textAreaId];
                console.log(`删除多行文本框组件: ${textAreaId}`);
                return;
            }
        }
        
        console.warn(`未找到多行文本框组件: ${textAreaId}`);
    }

    /**
     * 删除TXT多行文本组件
     * @param {string} args.txtAreaId - TXT文本框ID
     */
    deleteTxtArea(args) {
        const { txtAreaId } = args;
        for (const windowId in windowInstances) {
            const windowInstance = windowInstances[windowId];
            const component = windowInstance.components[txtAreaId];
            if (component && component.type === 'txtarea') {
                windowInstance.contentArea.removeChild(component.element);
                delete windowInstance.components[txtAreaId];
                console.log(`删除TXT多行文本: ${txtAreaId}`);
                return;
            }
        }
        console.warn(`未找到TXT多行文本: ${txtAreaId}`);
    }
    
    /**
     * 获取文本框或多行文本框内容
     * @param {string} args.textBoxId - 文本框或多行文本框ID
     * @returns {string} 内容
     */
    getTextBoxContent(args) {
        const { textBoxId } = args;

        for (const windowId in windowInstances) {
            const windowInstance = windowInstances[windowId];
            const component = windowInstance.components[textBoxId];
            
            if (component) {
                return component.value || '';
            }
        }
        
        return '';
    }
    /**
     * 当按钮被点击时（Boolean 积木）
     * @param {string} args.buttonID
     * @returns {boolean} 按钮是否被点击过
     */
    whenButtonClicked(args) {
        const { buttonId } = args;
        
        if (!(buttonId in buttonClickStates)) {
            buttonClickStates[buttonId] = false;
            
            for (const windowId in windowInstances) {
                const windowInstance = windowInstances[windowId];
                const component = windowInstance.components[buttonId];
                
                if (component && component.type === 'button') {
                    component.element.addEventListener('click', () => {
                        buttonClickStates[buttonId] = true;
                    });
                }else{
                    buttonClickStates[buttonId] = false;
                }
            }
        }

        const click = buttonClickStates[buttonId];
        buttonClickStates[buttonId] = false;

        return click;
    }

    whenWindowsWasClosed() {
        return this.winClose
    }

    alert(args) {
        const {textAlert} = args;

        alert(textAlert);
    }

    prompt(args) {
        const {textPrompt} = args;

        this._pVal = prompt(textPrompt)
    }

    popupPrompt(args){
        const {prompt} = args;

        const overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.45);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            animation: fadeIn 0.2s ease;
        `;

        const popupPrompt = document.createElement("div");
        popupPrompt.className = "popup";
        popupPrompt.style.cssText = `
            background: #FFFFFF;
            color: #1F2937;
            padding: 32px 40px 28px;
            border-radius: 12px;
            width: 400px;
            max-width: 90vw;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
            border: 1px solid rgba(0, 0, 0, 0.04);
            font-size: 15px;
            line-height: 1.6;
            position: relative;
            animation: scaleIn 0.25s ease;
        `;
        popupPrompt.textContent = prompt;

        const promptButton = document.createElement("button");
        promptButton.textContent = "确 定";
        promptButton.style.cssText = `
            display: block;
            margin: 24px 0 0 auto;
            padding: 10px 40px;
            background: #B3D9FF;
            color: #FFFFFF;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.15s;
        `;

        promptButton.addEventListener('click', () => {
            overlay.remove();
        });

        popupPrompt.appendChild(promptButton);
        overlay.appendChild(popupPrompt);
        document.body.appendChild(overlay);
    }

    getVal(){
        return this._pVal
    }

    popupAsk(args){
        const {ask} = args;

        const overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.45);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            animation: fadeIn 0.2s ease;
        `;

        const popupAsk = document.createElement("div");
        popupAsk.className = "popup";
        popupAsk.style.cssText = `
            background: #FFFFFF;
            color: #1F2937;
            padding: 32px 40px 28px;
            border-radius: 12px;
            width: 400px;
            max-width: 90vw;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
            border: 1px solid rgba(0, 0, 0, 0.04);
            font-size: 15px;
            line-height: 1.6;
            position: relative;
            animation: scaleIn 0.25s ease;
        `;
        popupAsk.textContent = ask;

        const tButton = document.createElement("button");
        tButton.textContent = "是";
        tButton.style.cssText = `
            display: block;
            margin: 24px 0 0 auto;
            padding: 10px 40px;
            background: #B3D9FF;
            color: #FFFFFF;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.15s;
        `;

        const fButton = document.createElement("button");
        fButton.textContent = "否";
        fButton.style.cssText = `
            display: block;
            margin: 24px 0 0 auto;
            padding: 10px 40px;
            background: #B3D9FF;
            color: #FFFFFF;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.15s;
        `;

        popupAsk.appendChild(tButton);
        popupAsk.appendChild(fButton);
        overlay.appendChild(popupAsk);
        document.body.appendChild(overlay);

        tButton.addEventListener('click', () => {
            overlay.remove();
            this._ask = true;
        });

        fButton.addEventListener('click', () => {
            overlay.remove();
            this._ask = false;
        });
        
    }

    getAsk() {
        return this._ask;
    }

    progressBar(args) {
        const {theNew} = args;

        this._bar = theNew;

        const existingOverlay = document.getElementById("progressOverlay");
    
        if (existingOverlay) {
            const bar = document.getElementById("progressBar");
            const text = document.getElementById("progressText");
            
            if (bar) {
                const value = Math.max(0, Math.min(100, theNew));
                bar.style.width = value + "%";
            }
            if (text) {
                text.textContent = Math.round(theNew) + "%";
            }
            return;
        }

        const overlay = document.createElement("div");
        overlay.id = "progressOverlay";
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.45);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
        `;

        const popup = document.createElement("div");
        popup.style.cssText = `
            background: white;
            padding: 30px 40px 35px;
            border-radius: 12px;
            width: 400px;
            max-width: 90vw;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        `;

        const titleEl = document.createElement("div");
        titleEl.textContent = "加载中...";
        titleEl.style.cssText = `
            font-size: 16px;
            color: #1F2937;
            font-weight: 500;
            margin-bottom: 16px;
        `;

        const track = document.createElement("div");
        track.style.cssText = `
            width: 100%;
            height: 20px;
            background: #E5E7EB;
            border-radius: 10px;
            overflow: hidden;
        `;

        const bar = document.createElement("div");
        bar.id = "progressBar";
        bar.style.cssText = `
            width: ${Math.max(0, Math.min(100, theNew))}%;
            height: 100%;
            background: linear-gradient(90deg, #1890FF, #69C0FF);
            border-radius: 10px;
            transition: width 0.3s ease;
        `;

        const text = document.createElement("div");
        text.id = "progressText";
        text.textContent = Math.round(theNew) + "%";
        text.style.cssText = `
            margin-top: 12px;
            font-size: 20px;
            font-weight: bold;
            color: #1890FF;
        `;

        const buttonBar = document.createElement("button");
        buttonBar.textContent = "关闭";
        buttonBar.style.cssText = `
            display: block;
            margin: 24px auto 0;
            padding: 10px 40px;
            background: #1890FF;
            color: #FFFFFF;
            border: none;
            border-radius: 20px;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.15s;
        `;
        buttonBar.addEventListener('mouseenter', () => {
            buttonBar.style.background = '#1677FF';
        });
        buttonBar.addEventListener('mouseleave', () => {
            buttonBar.style.background = '#1890FF';
        });
        buttonBar.addEventListener('click', () => {
            overlay.remove();
            this._bar = 0;
        });

        track.appendChild(bar);
        popup.appendChild(titleEl);
        popup.appendChild(track);
        popup.appendChild(text);
        popup.appendChild(buttonBar);
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
    }

    getProgress() {
        return this._bar;
    }

    range(args) {
        const {max, min, value} = args;

        const overlay = document.createElement("div");
        overlay.id = "progressOverlay";
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.45);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
        `;

        const popupPrompt = document.createElement("div");
        popupPrompt.className = "popup";
        popupPrompt.style.cssText = `
            background: #FFFFFF;
            color: #1F2937;
            padding: 32px 40px 28px;
            border-radius: 12px;
            width: 400px;
            max-width: 90vw;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
            border: 1px solid rgba(0, 0, 0, 0.04);
            font-size: 15px;
            line-height: 1.6;
            position: relative;
            animation: scaleIn 0.25s ease;
        `;

        const slider = document.createElement("input");
        slider.type = 'range';
        slider.min = min;
        slider.max = max;
        slider.value = value;

        const valueDisplay = document.createElement('span');
        valueDisplay.textContent = slider.value;
        valueDisplay.style.cssText = `
            display: block;
            font-size: 32px;
            font-weight: bold;
            color: #007aff;
            text-align: center;
            margin-bottom: 12px;
        `;

        slider.addEventListener('input', function() {
            valueDisplay.textContent = this.value;
        });

        const promptButton = document.createElement("button");
        promptButton.textContent = "确 定";
        promptButton.style.cssText = `
            display: block;
            margin: 24px 0 0 auto;
            padding: 10px 40px;
            background: #B3D9FF;
            color: #FFFFFF;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.15s;
        `;

        promptButton.addEventListener('click', () => {
            this._rangeValue = slider.value;
            overlay.remove();
        });

        popupPrompt.appendChild(valueDisplay);
        popupPrompt.appendChild(slider);
        popupPrompt.appendChild(promptButton);

        overlay.appendChild(popupPrompt);
        document.body.appendChild(overlay);
    }

    getRange(){
        return this._rangeValue
    }
    
    inpot() {
        return new Promise((resolve) => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return resolve('');
                
                const reader = new FileReader();
                reader.onload = (event) => {
                    const base64 = event.target.result;
                    this.selectedImage = base64;
                    resolve(base64);
                };
                reader.readAsDataURL(file);
            };
            
            input.click();
        });
    }

    /**
     * @param {number} args.red
     * @param {number} args.green
     * @param {number} args.blue
     */
    rgb(args) {
        const { red, green, blue } = args;
        
        const r = Number(red);
        const g = Number(green);
        const b = Number(blue);

        const theRed = r.toString(16).padStart(2, '0');
        const theGreen = g.toString(16).padStart(2, '0');
        const theBlue = b.toString(16).padStart(2, '0');

        return "#" + theRed + theGreen + theBlue;
    }

    /**
     * 使元素可拖动
     * @param {HTMLElement} element - 要拖动的元素
     * @param {HTMLElement} handle - 拖动手柄
     */
    makeDraggable(element, handle) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        handle.onmousedown = dragMouseDown;
        
        function dragMouseDown(e) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }
        
        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            const newTop = element.offsetTop - pos2;
            const newLeft = element.offsetLeft - pos1;

            const maxTop = window.innerHeight - element.offsetHeight;
            const maxLeft = window.innerWidth - element.offsetWidth;
            
            element.style.top = Math.max(0, Math.min(maxTop, newTop)) + "px";
            element.style.left = Math.max(0, Math.min(maxLeft, newLeft)) + "px";
        }
        
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}

window.tempExt = {
    Extension: PurpleYinWindow,
    info: {
        name: "YinWindow.name",
        description: "YinWindow.descp",
        extensionId: yin_window_extensionId,
        iconURL: yin_window_picture,
        insetIconURL: yin_window_icon,
        collaborator: "𝓚𝓸𝓸𝓴𝔂𝓒蓝羽 @ CCW",
    },
    l10n: {
        "zh-cn": {
            "YinWindow.name": "[beta]窗口与弹窗扩展",
            "YinWindow.descp": "创建和管理自定义窗口，弹出各式各样d弹窗"
        }
    }
}; 
