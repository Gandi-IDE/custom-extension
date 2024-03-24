// import Cast from "cast.js";
import { Base64 } from "./base64.js";
import JSZip from "jszip";
import { witcat_file_helper_icon, witcat_file_helper_extensionId } from "./assets/index.js";

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字、布尔和文本（极端情况下还有 null 或 undefined，需要同时处理 */

export default class WitCatFileHelper {
    constructor(runtime) {
        /**
         * 被打开的文件列表(类似input.files)
         * @type {File[]}
         */
        this.filelist = [];

        /**
         * 预读取的文件内容
         * @type {string[]}
         */
        this.filecontent = [];

        /**
         * 短时间内连续下载数量
         */
        this.downloadcnt = 0;

        /**
         * 压缩文件的ID列表
         */
        this.zip = {};

        setInterval(() => {
            if (this.downloadcnt > 0) {
                this.downloadcnt--;
            }
        }, 1000)

        this.runtime = runtime;
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                "WitCatFileHelper.name": "白猫的文件助手",
                "WitCatFileHelper.filehelper": "文件处理",
                "WitCatFileHelper.inputmanagement": "键值对",
                "WitCatFileHelper.imageprocess": "图片",
                "WitCatFileHelper.Multiplelinestext": "多行文本",
                "WitCatFileHelper.downloads": "将内容[text]按[s]分割后命名为[name]并下载多行文本",
                "WitCatFileHelper.download": "将内容[text]命名为[name]并下载",
                "WitCatFileHelper.save": "设置键[name]的值为[text]",
                "WitCatFileHelper.upload": "获取键[name]的值",
                "WitCatFileHelper.delete": "删除键[name]",
                "WitCatFileHelper.segmentation": "将[text]按[s]分割为[thing]",
                "WitCatFileHelper.encrypt": "base64编码[text]",
                "WitCatFileHelper.decrypt": "base64解码[text]",
                "WitCatFileHelper.openfile": "打开文件",
                "WitCatFileHelper.showvar": "设置其他作品[show]键[name]的值",
                "WitCatFileHelper.saveother": "设置作品ID[id]的键[name]的值为[text]",
                "WitCatFileHelper.uploadother": "获取作品[id]的键[name]的值",
                "WitCatFileHelper.other": "作品[id]的键[name]的状态",
                "WitCatFileHelper.showon": "只读",
                "WitCatFileHelper.showoff": "私有",
                "WitCatFileHelper.showall": "公开",
                "WitCatFileHelper.deleteMultiplelinestext": "删除[text]的第[num]行",
                "WitCatFileHelper.addMultiplelinestext": "将[text]插入到[texts]的第[num]行之前",
                "WitCatFileHelper.whatMultiplelinestext": "[text]的第[num]行",
                "WitCatFileHelper.numMultiplelinestext": "[text]的行数",
                "WitCatFileHelper.replacementMultiplelinestext": "替换[text]的第[num]行为[texts]",
                "WitCatFileHelper.thing.1": "数组",
                "WitCatFileHelper.thing.2": "多行文本",
                "WitCatFileHelper.number": "第[num]个键值对的[type]",
                "WitCatFileHelper.numbers": "键值对数量",
                "WitCatFileHelper.number.1": "键",
                "WitCatFileHelper.number.2": "值",
                "WitCatFileHelper.turnMultiplelinestext": "将多行文本[text]转化为数组",
                "WitCatFileHelper.turnsMultiplelinestext": "将数组[text]转化为多行文本",
                "WitCatFileHelper.downloadnum": "可下载文件数量",
                "WitCatFileHelper.downloadask": "作品企图下载疑似会威胁电脑的文件，是否继续？\n内容如下：",
                "WitCatFileHelper.openfiless": "打开[name]的[nums]并读取为[type]",
                "WitCatFileHelper.openfiless.1": "单文件",
                "WitCatFileHelper.openfiless.2": "多文件",
                "WitCatFileHelper.openfile.1": "UTF-8(文本)",
                "WitCatFileHelper.openfile.2": "zip(压缩文件)",
                "WitCatFileHelper.file": "上次打开第[num]个文件的[type]",
                "WitCatFileHelper.file.1": "文件名",
                "WitCatFileHelper.file.2": "文件后缀",
                "WitCatFileHelper.file.3": "文件大小(KB)",
                "WitCatFileHelper.file.4": "文件内容",
                "WitCatFileHelper.file.5": "文件大小(字节数)",
                "WitCatFileHelper.file.6": "文件大小(自动单位)",
                "WitCatFileHelper.docs": "📖拓展教程",
                "WitCatFileHelper.arrayjoin": "用[s]作为分隔符合并数组[text]",
                "WitCatFileHelper.asks": "文件大小太大，可能导致浏览器崩溃，确定继续？",
                "WitCatFileHelper.zip": "压缩文件",
                "WitCatFileHelper.DownloadZip": "将zip包[id]命名为[name]并下载",
                "WitCatFileHelper.CreateZip": "创建或重置ID为[id]的zip包",
                "WitCatFileHelper.ExportZip": "将zip包[id]导出为blob",
                "WitCatFileHelper.SetZip": "设置ID为[id]的zip包为[content]",
                "WitCatFileHelper.CreateFold": "为zip包[id]目录[way]创建文件夹[name]",
                "WitCatFileHelper.CreateFile": "为zip包[id]目录[way]创建或复写类型为[type]内容为[content]的文件[name]",
                "WitCatFileHelper.DeleteFile": "为zip包[id]目录[way]删除文件[name]",
                "WitCatFileHelper.DeleteFold": "为zip包[id]目录[way]删除文件夹[name]",
                "WitCatFileHelper.lastfile": "用[type]读取上次打开第[num]个文件的内容",
                "WitCatFileHelper.getzipfiles": "zip包[id]目录[way]下的所有文件",
                "WitCatFileHelper.zipfile": "用[type]读取zip包[id]目录[way]文件[name]的内容",
                "WitCatFileHelper.outzip": "清除并释放zip包[id]",
                "WitCatFileHelper.dragfile": "当文件被拖到舞台",
            },
            en: {
                "WitCatFileHelper.name": "WitCat’s File Helper",
                "WitCatFileHelper.filehelper": "File",
                "WitCatFileHelper.inputmanagement": "Key-value pair",
                "WitCatFileHelper.imageprocess": "Image",
                "WitCatFileHelper.Multiplelinestext": "Multi-line text",
                "WitCatFileHelper.downloads": "Download split text [text] by [s] named [name]",
                "WitCatFileHelper.download": "Download text [text] named [name]",
                "WitCatFileHelper.save": "Set value of key [name] to [text]",
                "WitCatFileHelper.upload": "value of key [name]",
                "WitCatFileHelper.delete": "Delete key [name]",
                "WitCatFileHelper.segmentation": "Split [text] by [s] to [thing]",
                "WitCatFileHelper.encrypt": "base64 encode[text]",
                "WitCatFileHelper.decrypt": "base64 decode[text]",
                "WitCatFileHelper.openfile": "load file",
                "WitCatFileHelper.showvar": "Other project [show] value of key [name]",
                "WitCatFileHelper.saveother": "Set value of key [name] of project [id] to [text]",
                "WitCatFileHelper.uploadother": "value of key [name] of project [id]",
                "WitCatFileHelper.other": "get permission of value [name] of project [id]",
                // Is value [name] of project [id] readable?
                // Is value [name] of project [id] modifiable?
                "WitCatFileHelper.showon": "can read",
                "WitCatFileHelper.showoff": "can't read",
                "WitCatFileHelper.showall": "can read and modify",
                "WitCatFileHelper.deleteMultiplelinestext": "delete the [num] line of [text]",
                "WitCatFileHelper.addMultiplelinestext": "insert [text] before line [num] of [texts]",
                "WitCatFileHelper.whatMultiplelinestext": "line [num] of [text]",
                "WitCatFileHelper.numMultiplelinestext": "number of lines in [text]",
                "WitCatFileHelper.replacementMultiplelinestext": "substitution of [num] behavior of [text] [texts]",
                "WitCatFileHelper.thing.1": "array",
                "WitCatFileHelper.thing.2": "multi-line text",
                "WitCatFileHelper.number": "[type] of key [num]",
                "WitCatFileHelper.numbers": "key count",
                "WitCatFileHelper.number.1": "key",
                "WitCatFileHelper.number.2": "value",
                "WitCatFileHelper.turnMultiplelinestext": "convert multi-line [text] to array",
                "WitCatFileHelper.turnsMultiplelinestext": "convert array[text] to multi-line text",
                "WitCatFileHelper.downloadnum": "number of downloadable files",
                "WitCatFileHelper.downloadask": "The project attempts to download a suspicious file, continue? \n File content: ",
                "WitCatFileHelper.openfiless": "load[name]`s[nums]file read as[type]",
                "WitCatFileHelper.openfiless.1": "Single",
                "WitCatFileHelper.openfiless.2": "multi",
                "WitCatFileHelper.openfile.1": "UTF-8(text)",
                "WitCatFileHelper.openfile.2": "zip(Compressed file)",
                "WitCatFileHelper.file": "[type] of [num] file opened",
                "WitCatFileHelper.file.1": "name",
                "WitCatFileHelper.file.2": "extension",
                "WitCatFileHelper.file.3": "size(KB)",
                "WitCatFileHelper.file.4": "content",
                "WitCatFileHelper.file.5": "size(bytes)",
                "WitCatFileHelper.file.6": "size(auto-unit)",
                "WitCatFileHelper.docs": "📖 Tutorial",
                "WitCatFileHelper.arrayjoin": "join array [text], seperating by [s]",
                "WitCatFileHelper.asks": "The file size is too large and may cause the browser to crash, are you sure to continue?",
                "WitCatFileHelper.zip": "Compressed file",
                "WitCatFileHelper.DownloadZip": "name the zip package [id] as [name] and download it",
                "WitCatFileHelper.CreateZip": "Create or reset the zip package [id]",
                "WitCatFileHelper.ExportZip": "Export zip package [id] as blob",
                "WitCatFileHelper.SetZip": "Set the zip package ID [id] to [content].",
                "WitCatFileHelper.CreateFold": "Create folder [name] for zip package [id] directory [way]",
                "WitCatFileHelper.CreateFile": "Create or reset file [name] with type [type] and content [content] for zip package [id] directory [way]",
                "WitCatFileHelper.DeleteFile": "Delete files [name] for zip package [id] directory [way]",
                "WitCatFileHelper.DeleteFold": "Delete folder [name] for zip package [id] directory [way]",
                "WitCatFileHelper.lastfile": "Use [type] to read the contents of the [num] file that was last opened",
                "WitCatFileHelper.getzipfiles": "All files in zip package [id] directory [way]",
                "WitCatFileHelper.zipfile": "Use [type] to read the contents of zip package [id] directory [way] file [name]",
                "WitCatFileHelper.outzip": "Clear and release zip package [id]",
            }
        })
    }

    /**
     * 翻译
     * @param {string} id
     * @returns {string}
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
            id: witcat_file_helper_extensionId, // 拓展id
            name: this.formatMessage("WitCatFileHelper.name"), // 拓展名
            blockIconURI: witcat_file_helper_icon,
            menuIconURI: witcat_file_helper_icon,
            color1: "#60D6F4",
            color2: "#55a7f7",
            blocks: [
                {
                    blockType: "button",
                    text: this.formatMessage('WitCatFileHelper.docs'),
                    onClick: this.docs,
                },
                "---" + this.formatMessage("WitCatFileHelper.filehelper"),
                {
                    opcode: "downloads",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.downloads"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: 'awa!!!|awa!!!',
                        },
                        name: {
                            type: "string",
                            defaultValue: 'wit_cat.txt',
                        },
                        s: {
                            type: "string",
                            defaultValue: '|',
                        },
                    },
                },
                {
                    opcode: "download",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.download"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: 'awa!!!',
                        },
                        name: {
                            type: "string",
                            defaultValue: 'wit_cat.txt',
                        },
                    },
                },
                {
                    opcode: "downloadnum",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.downloadnum"),
                    arguments: {},
                },
                {
                    opcode: "openfile",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.openfile"),
                    disableMonitor: true,
                    arguments: {},
                },
                {
                    opcode: "openfiless",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.openfiless"),
                    disableMonitor: true,
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: ".txt,.cpp",
                        },
                        nums: {
                            type: "string",
                            menu: "openfiless",
                        },
                        type: {
                            type: "string",
                            menu: "openfile",
                        }
                    },
                },
                {
                    opcode: "file",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.file"),
                    disableMonitor: true,
                    arguments: {
                        num: {
                            type: "number",
                            defaultValue: '1',
                        },
                        type: {
                            type: "string",
                            menu: 'file',
                        },
                    },
                },
                {
                    opcode: "lastfile",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.lastfile"),
                    disableMonitor: true,
                    arguments: {
                        num: {
                            type: "number",
                            defaultValue: '1',
                        },
                        type: {
                            type: "string",
                            menu: 'openfile',
                        },
                    },
                },
                //键值对（已下线）
                {
                    opcode: "upload",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.upload"),
                    hideFromPalette: true,
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: 'i',
                        },
                    },
                },
                {
                    opcode: "save",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.save"),
                    hideFromPalette: true,
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: '0',
                        },
                        name: {
                            type: "string",
                            defaultValue: 'i',
                        },
                    },
                },
                {
                    opcode: "delete",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.delete"),
                    hideFromPalette: true,
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: 'i',
                        },
                    },
                },
                {
                    opcode: "showvar",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.showvar"),
                    hideFromPalette: true,
                    arguments: {
                        name: {
                            type: "string",
                            defaultValue: "i",
                        },
                        show: {
                            type: "string",
                            menu: "setvariable",
                        },
                    },
                },
                {
                    opcode: "number",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.number"),
                    hideFromPalette: true,
                    arguments: {
                        num: {
                            type: "number",
                            defaultValue: "1",
                        },
                        type: {
                            type: "string",
                            menu: "type",
                        },
                    },
                },
                {
                    opcode: "numbers",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.numbers"),
                    hideFromPalette: true,
                    arguments: {},
                },
                {
                    opcode: "saveother",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.saveother"),
                    hideFromPalette: true,
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "6373950041d21d2d2cd0da9b",
                        },
                        name: {
                            type: "string",
                            defaultValue: "i",
                        },
                        text: {
                            type: "string",
                            defaultValue: "wit_cat!",
                        },
                    },
                },
                {
                    opcode: "uploadother",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.uploadother"),
                    hideFromPalette: true,
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "6373950041d21d2d2cd0da9b",
                        },
                        name: {
                            type: "string",
                            defaultValue: "i",
                        },
                    },
                },
                {
                    opcode: "other",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.other"),
                    hideFromPalette: true,
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "6373950041d21d2d2cd0da9b",
                        },
                        name: {
                            type: "string",
                            defaultValue: "i",
                        },
                    },
                },
                "---" + this.formatMessage("WitCatFileHelper.zip"),
                {
                    opcode: "DownloadZip",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.DownloadZip"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                        name: {
                            type: "string",
                            defaultValue: 'witcat.zip',
                        },
                    },
                },
                {
                    opcode: "CreateZip",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.CreateZip"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                    },
                },
                {
                    opcode: "SetZip",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.SetZip"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                        content: {
                            type: "string",
                            defaultValue: 'blob',
                        },
                    },
                },
                {
                    opcode: "outzip",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.outzip"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                    },
                },
                {
                    opcode: "ExportZip",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.ExportZip"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                    },
                },
                {
                    opcode: "CreateFold",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.CreateFold"),
                    arguments: {
                        way: {
                            type: "string",
                            defaultValue: '',
                        },
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                        name: {
                            type: "string",
                            defaultValue: 'witcat',
                        },
                    },
                },
                {
                    opcode: "CreateFile",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.CreateFile"),
                    arguments: {
                        way: {
                            type: "string",
                            defaultValue: 'fold1/flod2',
                        },
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                        type: {
                            type: "string",
                            menu: 'openfile',
                        },
                        name: {
                            type: "string",
                            defaultValue: 'witcat.txt',
                        },
                        content: {
                            type: "string",
                            defaultValue: 'witcat',
                        },
                    },
                },
                {
                    opcode: "DeleteFold",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.DeleteFold"),
                    arguments: {
                        way: {
                            type: "string",
                            defaultValue: '',
                        },
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                        name: {
                            type: "string",
                            defaultValue: 'witcat',
                        },
                    },
                },
                {
                    opcode: "DeleteFile",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.DeleteFile"),
                    arguments: {
                        way: {
                            type: "string",
                            defaultValue: 'fold1/flod2',
                        },
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                        name: {
                            type: "string",
                            defaultValue: 'witcat.txt',
                        },
                    },
                },
                {
                    opcode: "getzipfiles",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.getzipfiles"),
                    arguments: {
                        way: {
                            type: "string",
                            defaultValue: '',
                        },
                        type: {
                            type: "string",
                            menu: 'openfile',
                        },
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                    },
                },
                {
                    opcode: "zipfile",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.zipfile"),
                    arguments: {
                        way: {
                            type: "string",
                            defaultValue: '',
                        },
                        id: {
                            type: "string",
                            defaultValue: 'i',
                        },
                        name: {
                            type: "string",
                            defaultValue: 'witcat.txt',
                        },
                        type: {
                            type: "string",
                            menu: 'openfile',
                        },
                        types: {
                            type: "string",
                            menu: 'file',
                        },
                    },
                },
                "---" + "Base64",
                {
                    opcode: "encrypt",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.encrypt"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: 'i love china',
                        },
                    },
                },
                {
                    opcode: "decrypt",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.decrypt"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: 'aSBsb3ZlIGNoaW5h',
                        },
                    },
                },
                "---" + this.formatMessage("WitCatFileHelper.Multiplelinestext"),
                {
                    opcode: "arrayjoin",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.arrayjoin"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: '["wow","!!!"]',
                        },
                        s: {
                            type: "string",
                            defaultValue: '/',
                        },
                    },
                },
                {
                    opcode: "segmentation",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.segmentation"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: 'wow/!!!',
                        },
                        s: {
                            type: "string",
                            defaultValue: '/',
                        },
                        thing: {
                            type: "string",
                            menu: 'thing',
                        }
                    },
                },
                {
                    opcode: "deleteMultiplelinestext",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.deleteMultiplelinestext"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: "wit_cat!!!\nwit_cat!!!",
                        },
                        num: {
                            type: "number",
                            defaultValue: "1",
                        }
                    },
                },
                {
                    opcode: "addMultiplelinestext",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.addMultiplelinestext"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: "wit_cat!!!",
                        },
                        texts: {
                            type: "string",
                            defaultValue: "wit_cat!!!\nwit_cat!!!",
                        },
                        num: {
                            type: "string",
                            defaultValue: "last",
                        }
                    },
                },
                {
                    opcode: "whatMultiplelinestext",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.whatMultiplelinestext"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: "wit_cat!!!",
                        },
                        num: {
                            type: "string",
                            defaultValue: "1",
                        }
                    },
                },
                {
                    opcode: "numMultiplelinestext",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.numMultiplelinestext"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: "wit_cat!!!\nwit_cat!!!",
                        },
                    },
                },
                {
                    opcode: "turnMultiplelinestext",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.turnMultiplelinestext"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: "wit_cat!!!\nwit_cat!!!",
                        },
                    },
                },
                {
                    opcode: "turnsMultiplelinestext",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.turnsMultiplelinestext"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: "[\"wit_cat!!!\",\"wit_cat!!!\"]",
                        },
                    },
                },
            ],
            menus: {
                setvariable: [
                    {
                        text: this.formatMessage('WitCatFileHelper.showall'),
                        value: '#witcat'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.showon'),
                        value: '$witcat'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.showoff'),
                        value: '@witcat'
                    },
                ],
                thing: [
                    {
                        text: this.formatMessage('WitCatFileHelper.thing.1'),
                        value: 'true'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.thing.2'),
                        value: 'false'
                    },
                ],
                type: [
                    {
                        text: this.formatMessage('WitCatFileHelper.number.1'),
                        value: 'name'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.number.2'),
                        value: 'content'
                    },
                ],
                file: [
                    {
                        text: this.formatMessage('WitCatFileHelper.file.1'),
                        value: 'name'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.file.2'),
                        value: 'suffix'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.file.3'),
                        value: 'size'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.file.5'),
                        value: 'sizeB'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.file.6'),
                        value: 'sizeH'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.file.4'),
                        value: 'content'
                    },
                ],
                openfile: [
                    {
                        text: this.formatMessage('WitCatFileHelper.openfile.1'),
                        value: 'utf-8'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.openfile.2'),
                        value: 'zip'
                    },
                ],
                openfiless: [
                    {
                        text: this.formatMessage('WitCatFileHelper.openfiless.1'),
                        value: 'Single'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.openfiless.2'),
                        value: 'multiple'
                    },
                ],
            }
        };
    }
    /**
     * 打开教程
     * @returns {void}
     */
    docs() {
        let a = document.createElement('a');
        a.href = "https://www.ccw.site/post/d6d96e80-3f58-4a19-b7e6-c567d3a6a583";
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        a.click();
    }

    /** 判断是否允许下载文件
     * @param {()=>void} callback 可以下载则调用
     */
    _downloadable(callback) {
        if (this.downloadcnt < 3) {
            this.downloadcnt += 1;
            callback();
        }
        else {
            console.warn("下载太频繁！\nToo many downloads!");
        }
    }

    /**
     * 下载方法
     * @param {string} text 下载的文本
     * @param {string} name 下载后文件名
     * @return {void}
     */
    _downloadText(text, name) {
        // 字符内容转变成blob地址
        const blob = new Blob([text]);
        const url = URL.createObjectURL(blob);
        let SuffixName = "";
        if (name.includes(".")) {
            SuffixName = name.substring(name.lastIndexOf(".") + 1);
        }
        // 疑似危险的文件后缀
        const maliext = ["bat", "cmd", "vbs", "ps1", "sh"];
        if (maliext.includes(SuffixName.toLowerCase())) {
            const ask = this.formatMessage("WitCatFileHelper.downloadask");
            // 如果生成大量文字，则截短文字
            let showtext = text;
            const max_length = 1000;
            const short_length = 20;
            if (showtext.length > max_length) {
                showtext = `${showtext.slice(0, max_length - short_length)
                    }(... 省略 ${showtext.length - max_length + short_length
                    } 字符)`;
            }
            let a = confirm(ask + "\n\n" + showtext);
            if (!a) {
                return;
            }
        }
        const a = document.createElement("a");
        a.href = url;
        a.download = name;
        a.target = "_blank";
        a.click();
    }

    /**
     * 下载多行文件
     * @param {Object} args
     * @param {SCarg} args.text 文本
     * @param {SCarg} args.name 文件名
     * @param {SCarg} args.s 分隔符
     * @returns {void}
     */
    downloads(args) {
        this._downloadable(() => {
            let h = String(args.text);

            let s = String(args.s);
            if (s != "") {
                h = h.split(s).join("\n");
            }

            this._downloadText(h, String(args.name));
        });
    }
    /**
     * 下载文本文件
     * @param {object} args
     * @param {SCarg} args.text 文本
     * @param {SCarg} args.name 文件名
     * @returns {void}
     */
    download(args) {
        this._downloadable(() => {
            const content = String(args.text);
            this._downloadText(content, String(args.name));
        });
    }
    /**
     * 读取本地变量
     * @deprecated
     */
    upload() {
        console.warn("文件助手：读取本地变量积木已下线\nFile Helper: read key value pair block has been offline");
    }
    /**
     * 保存本地变量
     * @deprecated
     */
    save() {
        console.warn("文件助手：保存本地变量积木已下线\nFile Helper: save key value pair block has been offline");
    }
    /**
     * 删除本地变量
     * @deprecated
     */
    delete() {
        console.warn("文件助手：删除本地变量积木已下线\nFile Helper: delete key value pair block has been offline");
    }
    /**
     * 字符串分割
     * @param {object} args
     * @param {SCarg} args.text 文本
     * @param {SCarg} args.s 分隔符
     * @param {SCarg|"true"|"false"} args.thing 分割为数组？
     * @returns {string} 分割结果
     */
    segmentation(args) {
        let text = String(args.text);
        let s = String(args.s);
        let array = text.split(s);
        let r = "";
        if (args.thing === "true") {
            r = JSON.stringify(array);
        }
        else {
            r = array.join("\n");
        }
        return r;
    }
    /**
     * base64编码
     * @param {object} args
     * @param {SCarg} args.text 要编码的文本
     * @returns {string} 编码结果
     */
    encrypt(args) {
        try {
            return Base64.encode(String(args.text))
        }
        catch {
            return "";
        }
    }
    /**
     * base64解码
     * @param {object} args
     * @param {SCarg} args.text 要解码的文本
     * @returns {string} 解码结果
     */
    decrypt(args) {
        try {
            return Base64.decode(String(args.text))
        }
        catch {
            return "";
        }
    }

    /**
     * 打开文件选择框
     * @param {string} accept 接受的文件扩展名
     * @param {boolean} multiple 接受多个文件
     * @return {Promise<File[]>} [异步地]返回选择后的文件列表input.files转换成的数组(可能没有文件)
     */
    _inputfileclick(accept, multiple) {
        return new Promise((resolve, reject) => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = accept;
            input.style.display = "none";
            input.multiple = multiple;
            input.click();
            input.addEventListener("change", () => {
                if (input.files === null) {
                    reject(new Error("不应该看到这个"));
                } else {
                    // 返回了关键的 input.files，而不是整个 input。
                    // 之后如果要考虑“读取素材库文件”，“拖动导入文件”等
                    // 只能获得 Blob/File 的情况，可以方便适配
                    // 这里加 Array.from 是因为 input.files 是 FileList，
                    // 不是 File[]，一些数组拥有的功能它没有。虽然一般情况下
                    // 不会注意到区别，但是类型检查会把这种情况查出来。
                    resolve(Array.from(input.files));
                }
            }, { once: true }); // 只触发一次
            window.addEventListener("focus", () => {
                setTimeout(() => {
                    if (input.files === null) {
                        reject(new Error("不应该看到这个"));
                    } else {
                        resolve(Array.from(input.files));
                    }
                }, 1000);
            }, { once: true }); // 只触发一次
        });
    }

    /**
     * 提前加载所有已经打开的文件，注意是 async 的
     */
    async _preloadcontent() {
        this.filecontent = [];
        for (let file of this.filelist) {
            this.filecontent.push(String(await _readerasync(file, "text")));
        }
    }

    /**
     * 打开文件
     * @returns {Promise<string>} 文件内容
     */
    async openfile() {
        // 因为可以返回 Promise，所以这里直接用 async
        const filelist = await this._inputfileclick("", false);
        // 首先，检查所有打开的文件大小
        if (filelist.some((file) => file.size > 50 * 1024 * 1024)) { // 50M
            let usercheck = confirm(this.formatMessage("WitCatFileHelper.asks"));
            if (!usercheck) {
                console.error("文件过大\nfile is too lage.");
                return "";
            }
        }

        // 检查通过后，才把文件列表更新到类里。
        // 注意读取后的 File[] 保存到了 this.filelist
        this.filelist = filelist;
        // 提前加载所有文件的内容，这样就不需要担心后面读取文件内容的时候要异步了
        this._preloadcontent();

        const file = this.filelist[0];
        if (file === undefined) {
            // 记住这是 async
            return "";
        }
        return String(await _readerasync(file, "text"));
    }

    /**
     * 打开任意文件
     * @param {object} args
     * @param {SCarg} args.name 文件类型
     * @param {SCarg|"Single"|"multiple"} args.nums 单选/多选
     * @param {SCarg|"base64"|"utf-8"} args.type 返回值类型
     * @returns {Promise<string>} 文件内容
     */
    async openfiless(args) {
        try {
            // 因为可以返回 Promise，所以这里直接用 async
            // 注意读取后的 File[] 保存到了 this.filelist
            let accepttype = String(args.name);
            let multiple = args.nums === "multiple";

            const filelist = await this._inputfileclick(accepttype, multiple);
            // 首先，检查所有打开的文件大小
            if (filelist.some((file) => file.size > 50 * 1024 * 1024)) { // 50M
                let usercheck = confirm(this.formatMessage("WitCatFileHelper.asks"));
                if (!usercheck) {
                    console.error("文件过大\nfile is too lage.");
                    return "";
                }
            }

            // 检查通过后，才把文件列表更新到类里。
            this.filelist = filelist;
            // 提前加载所有文件的内容，这样就不需要担心后面读取文件内容的时候要异步了
            this._preloadcontent();

            // 返回第一个文件的内容
            if (this.filelist.length === 0) {
                console.warn("File_Helper.js: 没有选择文件")
                // 这是 async 函数
                return "";
            }

            const file = this.filelist[0];

            /** @type {"text"|"arraybuffer"|"dataurl"} */
            let mode = "text";
            switch (args.type) {
                case "base64":
                    mode = "dataurl";
                    break;
                case "utf-8":
                    mode = "text";
                    break;
                case "zip":
                    mode = "blob";
            }
            return String(await _readerasync(file, mode));
        }
        catch (e) {
            console.error("witcat open any file error:", e);
            return "";
        }
    }

    /**
     * 打开文件的信息
     * @param {object} args
     * @param {SCarg|"name"|"suffix"|"size"|"content"} args.type
     * @param {SCarg} args.num
     * @returns {string}
     */
    file(args) {
        try {
            const file = this.filelist[Number(args.num) - 1];
            switch (args.type) {
                case "name":
                    return file.name;
                case "suffix":
                    let n = file.name;
                    if (n.includes(".")) {
                        return n.substring(n.lastIndexOf(".") + 1);
                    } else {
                        return "";
                    }
                case "size":
                    return file.size / 1024 + "KB";
                case "sizeH":
                    return HumanSize(file.size);
                case "sizeB":
                    return file.size;
                case "content":
                    // 直接读取预加载的文件内容
                    return this.filecontent[Number(args.num) - 1];
                default:
                    return "";
            }
        }
        catch {
            return "";
        }
    }
    async lastfile(args) {
        try {
            const file = this.filelist[Number(args.num) - 1];
            let mode = "text";
            switch (args.type) {
                case "base64":
                    mode = "dataurl";
                    break;
                case "utf-8":
                    mode = "text";
                    break;
                case "zip":
                    mode = "blob";
                    break;
            }
            return String(await _readerasync(file, mode));
        }
        catch {
            return "";
        }
    }
    /**
     * 设置状态
     * @deprecated
     */
    showvar() {
        console.warn("文件助手：判断键值对积木已下线\nFile Helper: Determine the key value pair block has been offline");
    }
    /**
     * 修改别人的键
     * @deprecated
     */
    saveother() {
        console.warn("文件助手：判断键值对积木已下线\nFile Helper: Determine the key value pair block has been offline");
    }
    /**
     * 获取别人的键
     * @deprecated
     */
    uploadother() {
        console.warn("文件助手：判断键值对积木已下线\nFile Helper: Determine the key value pair block has been offline");
    }
    /**
     * 获取键状态
     * @deprecated
     */
    other() {
        console.warn("文件助手：判断键值对积木已下线\nFile Helper: Determine the key value pair block has been offline");
    }
    /**
     * 删除多行文本行
     * @param {object} args
     * @param {SCarg} args.text 多行文本
     * @param {SCarg} args.num 删除的文本行数(1开始)
     * @returns {string} 结果
     */
    deleteMultiplelinestext(args) {
        let texts = multipleText(String(args.text));
        let num = 0;
        // 已经是 Scratch 3.0 了，这种遗老就不要了吧
        switch (args.num) {
            case "first":
                num = 1;
                break;
            case "last":
                num = texts.length;
                break;
            default:
                num = Number(args.num);
        }
        texts.splice(num - 1, 1);
        return texts.join("\n");
    }
    /**
     * 插入多行文本
     * @param {object} args
     * @param {SCarg} args.texts 多行文本
     * @param {SCarg} args.num 插入文本位置
     * @param {SCarg} args.text 要插入的文本
     * @returns {string} 结果
     */
    addMultiplelinestext(args) {
        let texts = multipleText(String(args.texts));
        let num = 0;
        switch (args.num) {
            case "first":
                num = 1;
                break;
            case "last":
                num = texts.length + 1;
                break;
            default:
                num = Number(args.num);
        }
        texts.splice(num - 1, 0, String(args.text));
        return texts.join("\n");
    }
    /**
     * 多行文本第几行
     * @param {object} args
     * @param {SCarg} args.text 多行文本
     * @param {SCarg} args.num 获取的行数
     * @returns {string} 结果
     */
    whatMultiplelinestext(args) {
        let text = String(args.text).split("\n");
        let num = 0;
        switch (args.num) {
            case "first":
                num = 1;
                break;
            case "last":
                num = text.length;
                break;
            default:
                num = Number(args.num);
        }
        if (text.length >= num && num > 0) {
            // 万一是小数呢？
            return text[num - 1].split("\r")[0];
        }
        else {
            return "";
        }
    }
    /**
     * 多行文本行数
     * @param {object} args
     * @param {SCarg} args.text 多行文本
     * @returns {number} 行数
     */
    numMultiplelinestext(args) {
        let text = String(args.text).split("\n");
        return text.length;
    }
    /**
     * 多行文本转数组
     * @param {object} args
     * @param {SCarg} args.text 多行文本
     * @returns {string} 数组的JSON
     */
    turnMultiplelinestext(args) {
        let texts = multipleText(String(args.text));
        return JSON.stringify(texts);
    }
    /**
     * 数组转多行文本
     * @param {object} args
     * @param {SCarg} args.text 数组
     * @returns {Promise<string>} 多行文本
     */
    turnsMultiplelinestext(args) {
        let texts = JSON.parse(String(args.text));
        return texts.join("\n");
    }
    /**
     * 判断键值对
     * @deprecated
     */
    number() {
        console.warn("文件助手：判断键值对积木已下线\nFile Helper: Determine the key value pair block has been offline");/*
        return new Promise(resolve => {
            read(args.num, e => {
                return e.value;
            });
        });*/
    }
    /**
     * 键值对内容
     * @deprecated
     */
    numbers() {
        console.warn("文件助手：键值对数量积木已下线\nFile Helper: number of key value pair block has been offline");/*
        return new Promise(resolve => {
            read("witcat" + h + "#" + name, e => {
                return e.value;
            });
        });*/
    }
    /**
     * 可下载文本数量
     * @returns {number}
     */
    downloadnum() {
        return 3 - this.downloadcnt;
    }
    /**
     * 数组合并成文本
     * @param {object} args
     * @param {SCarg} args.text 要插入的文本
     * @param {SCarg} args.s 分隔符
     * @returns {Promise<string>} 结果
     */
    arrayjoin(args) {
        return JSON.parse(String(args.text)).join(args.s);
    }

    DownloadZip(args) {
        this._downloadable(() => {
            if (this.zip[String(args.id)] !== undefined) {
                if (this.zip[String(args.id)].generateAsync !== undefined) {
                    this.zip[String(args.id)].generateAsync({ type: "blob" })
                        .then(function (blob) {
                            // 创建 <a> 标签
                            var link = document.createElement('a');
                            link.href = URL.createObjectURL(blob);
                            link.download = String(args.name);
                            document.body.appendChild(link);
                            link.click();
                            URL.revokeObjectURL(link.href);
                            document.body.removeChild(link);
                        });
                }
            }
        });
    }

    CreateZip(args) {
        this.zip[String(args.id)] = new JSZip();
    }

    outzip(args) {
        if (this.zip[String(args.id)] !== undefined) {
            delete this.zip[String(args.id)];
        }
    }

    ExportZip(args) {
        if (this.zip[String(args.id)] !== undefined) {
            return new Promise((resolve) => {
                generateZipBlobURL(this.zip[String(args.id)])
                    .then(blobURL => {
                        resolve(blobURL);
                    });
            })
        }
    }

    SetZip(args) {
        new Promise((resolve) => {
            convertBlobToJSZip(String(args.content))
                .then(zip => {
                    resolve(zip);
                })
                .catch(error => {
                    console.error(error);
                });
        }).then(zip => {
            this.zip[String(args.id)] = zip;
        });
    }

    CreateFold(args) {
        if (this.zip[String(args.id)] !== undefined) {
            this.zip[String(args.id)].folder(`${String(args.way) === '' ? '' : String(args.way) + '/'}${String(args.name)}`);
        }
    }

    CreateFile(args) {
        if (this.zip[String(args.id)] !== undefined) {
            switch (String(args.type)) {
                case 'utf-8':
                    this.zip[String(args.id)].file(`${String(args.way) === '' ? '' : String(args.way) + '/'}${String(args.name)}`, String(args.content));
                    break;
                case 'zip':
                    new Promise(function (resolve, reject) {
                        const xhr = new XMLHttpRequest();
                        xhr.open('GET', String(args.content), true);
                        xhr.responseType = 'blob';

                        xhr.onload = function () {
                            if (xhr.status === 200) {
                                resolve(xhr.response);
                            } else {
                                reject(new Error('Failed to fetch Blob from Blob URL.'));
                            }
                        };

                        xhr.onerror = function () {
                            reject(new Error('Failed to fetch Blob from Blob URL.'));
                        };

                        xhr.send();
                    }).then((xhr) => {
                        this.zip[String(args.id)].file(`${String(args.way) === '' ? '' : String(args.way) + '/'}${String(args.name)}`, xhr);
                    });
                    break;
                default:
                    break;
            }
        }
    }

    getzipfiles(args) {
        if (this.zip[String(args.id)] !== undefined) {
            const result = [];
            const path = String(args.way) !== "" ? String(args.way) + "/" : "";
            this.zip[String(args.id)].forEach((relativePath, file) => {
                if (relativePath.startsWith(path)) {
                    const remainingPath = relativePath.substring(path.length);
                    const parts = remainingPath.split('/');
                    const isDirectory = file.dir;

                    if (parts.length === 1 && remainingPath !== '') {
                        let s = {};
                        s.name = (relativePath.split('/')[relativePath.split('/').length - 1]);
                        s.type = ("file");
                        s.path = (relativePath);
                        result.push(s);
                    } else if (parts.length > 1 && isDirectory) {
                        const directory = parts[0];
                        let s = {};
                        s.name = (directory.split('/')[directory.split('/').length - 1]);
                        s.type = ("fold");
                        s.path = (directory);
                        if (result.find(obj => JSON.stringify(obj) == JSON.stringify(s)) == undefined) {
                            result.push(s);
                        }
                    }
                }
            });

            return JSON.stringify(result);
        }
    }

    async zipfile(args) {
        if (this.zip[String(args.id)] !== undefined) {
            let zip = this.zip[String(args.id)];
            const folderNameToDelete = `${String(args.way) === '' ? '' : String(args.way) + '/'}${String(args.name)}`;
            return new Promise((resolve, reject) => {
                zip.file(folderNameToDelete).async('blob').then(async function (file) {
                    let mode = "text";
                    switch (args.type) {
                        case "base64":
                            mode = "dataurl";
                            break;
                        case "utf-8":
                            mode = "text";
                            break;
                        case "zip":
                            mode = "blob";
                        default:
                            break;
                    }
                    resolve(String(await _readerasync(file, mode)));
                })
            })
        }
    }


    DeleteFile(args) {
        if (this.zip[String(args.id)] !== undefined) {
            this.zip[String(args.id)].remove(`${String(args.way) === '' ? '' : String(args.way) + '/'}${String(args.name)}`);
        }
    }

    DeleteFold(args) {
        if (this.zip[String(args.id)] !== undefined) {
            const folderNameToDelete = `${String(args.way) === '' ? '' : String(args.way) + '/'}${String(args.name)}`;

            Object.keys(this.zip[String(args.id)].files).forEach((filename) => {
                if (filename.startsWith(folderNameToDelete)) {
                    delete this.zip[String(args.id)].files[filename];
                }
            });
        }
    }
}

/**
 * 多行文本解码
 * @param {string} text
 * @returns {string[]}
 */
function multipleText(text) {
    // 最好用正则处理\r，\n，\r\n三种换行符
    // let texts = text.split(/\r\n?|\n/g);

    let texts = text.split("\n");
    // 如果末尾是 \r，那么去掉。
    let a = texts.map(line => line.slice(-1) === "\r" ? line.slice(0, -1) : line);
    return a;
}

/**
 * 把文件大小转换成合适的单位 (K, M, G, T, P)
 * @param {number} size 文件大小
 * @returns {string}
 */
function HumanSize(size) {
    const units = ["", "K", "M", "G", "T", "P"];
    let i = 0;
    let sizen = size;
    while (i < units.length - 1 && sizen > 1024) {
        i++;
        sizen /= 1024;
    }
    if (i === 0) { // 没有单位
        return String(sizen);
    } else {
        // 保留两位小数
        return sizen.toFixed(2) + units[i];
    }
}

/**
 * 将blob转换为zip
 * @param {blob} blob 传入的zip
 * @returns {Promise} zip对象
 */
function convertBlobToJSZip(blob) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', blob, true);
        xhr.responseType = 'blob';

        xhr.onload = function () {
            if (xhr.status === 200) {
                // 使用 JSZip.loadAsync() 方法将 Blob 转换为 JSZip 对象
                JSZip.loadAsync(xhr.response)
                    .then(zip => {
                        resolve(zip); // 成功时将 JSZip 对象解析为 Promise 的结果
                    })
                    .catch(error => {
                        reject(error); // 如果转换失败，则将错误传递给 Promise 的错误处理程序
                    });
            } else {
                reject(new Error('Failed to fetch Blob from Blob URL.'));
            }
        };

        xhr.onerror = function () {
            reject(new Error('Failed to fetch Blob from Blob URL.'));
        };

        xhr.send();
    });
}

/**
 * 将zip文件转换为blob
 * @param {JSZip} zip 需要转换的zip对象
 * @returns {Promise} 转换后的blob链接
 */
function generateZipBlobURL(zip) {
    return zip.generateAsync({ type: "blob" })
        .then(blob => {
            const blobURL = URL.createObjectURL(blob);
            return blobURL;
        });
}

/**
 * 将zip中某一路径的文件返回
 * @param {JSZip} zip 需要解析路径的zip
 * @param {string} path 需要解析的路径
 * @returns {JSON} 读取的文件结果（文件：file，文件夹：fold）
 */
function getAllDirectoriesAndFiles(zip, path) {
    const result = {};

    zip.forEach((relativePath, file) => {
        if (relativePath.startsWith(path)) {
            const remainingPath = relativePath.substring(path.length);
            const isDirectory = file.dir.split('/')[file.dir.split('/').length - 1];

            result[relativePath] = isDirectory ? "fold" : "file";
        }
    });

    return result;
}

/**
 * 读取文件
 * @param {File|Blob} file File 或者 Blob
 * @param {"arraybuffer"|"dataurl"|"text"} mode 读取模式
 * @return {Promise<string|ArrayBuffer|null>} [异步地]返回读取后的内容
 */
function _readerasync(file, mode) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = (e) => {
            reject(e);
        };
        switch (mode) {
            case "arraybuffer":
                reader.readAsArrayBuffer(file);
                break;
            case "dataurl":
                reader.readAsDataURL(file);
                break;
            case "text":
                reader.readAsText(file);
                break;
            case "blob":
                resolve(URL.createObjectURL(file));
                break;
            default:
                reject(new Error("mode 错误: 应该是 arraybuffer, dataurl, blob 或者 text"));
                return;
        }
    });
}