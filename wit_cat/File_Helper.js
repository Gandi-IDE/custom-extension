// import Cast from "cast.js";

const _picture = "data:image/png;base64,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";

const _icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAD2VJREFUeJzt3U9wHFV+B/Dve/13ekYaS7ZhvfiPkI3xQvBSpMxmU0tClcuk4MZWilP2EnLVgZOhOBPwiYOvy4lUpYpKha0coILLFRbYYoOJK0CwjY1sSbaXALIlzZ+e/vteDvIosi21ZGm6eyR9P7eZ7un3s2u+ev3nvTcC63T59Kv7DKmOCC0OA/qgkGKPVvonEBjSWlSF0BYgxHrbIbqb1lqLWAjdhsaMkOJ/tdJXAXFRC/1lquSZ0aOvTa6nhTV9cac+fOUpaLwAiGcB7F9PAUQ5Gwf0+xB4Z+/Tr398rx9edUD0e2POVXfwRSH0mAYO3WtDRGUTwAWtxck9QeMt8dzJcJWfWdnE6ZefN6R8UwP71lciUfkEMJkq9dLI0TfeXcW+y7t56ni9aciTQojf9K48ov6gtX57IFVjw8dOzC23z7IBGT91fK9pGB8IgYfzKY+ofFrjmyRNn9l/7MTUUtuXDMj4qeN7TVP+XkCM5FgbUV/Q0BNJov56qZDIO9+4eep43TSMDxgO2ioExIhpGB/cPHW8fue2uwIyf83B0yraWoTAw01Dnrzr/cUvJk6//LyU8l+LK4uovyilfr347tZCD6LfG3MMKd8spyyi/mBI+aZ+b8zpvl4IyFV38EU+56CtTgP7rrqDL3ZfLwRECD1WTklE/WVxFiQwP7aKw0eI5mng0NSHrzwFdHsQjRdKrYio39zKxK1TLPFsmbUQ9Z/5TIjLp1/dZ0o9UXI1RH0nUWLENKQ6ssZpIWsnJIS46xkl0bK0VoBWhbZpSHXEFFocLjofle0PY8ef/V2xjdKGNv0//4TO9PlC2xRaHJaAPlhoq0Qbhj4ohRR7yi6DqB9pgb1SK/2Tsgsh6kdC434JgaGyCyHqSwJDUmtRLbsOon6ktajK+XWriOhOQmhLclE3ouXwaR1RJgaEKAMDQpSBASHKwIAQZWBAiDIwIEQZzGJaqcEYPLDwUld2oRNEhTRNm4OujMAYXliNB2njWyBp5d5uIQER1gDMn/7NwmsNoNkKimiaNov6YZj1wwsvVed76AICwlMsogwMCFEGBoQoAwNClIEBIcrAgBBlYECIMjAgRBkYEKIMDAhRBgaEKAMDQpSBASHKwIAQZejJcHchTex8/B8ytlsQDhdwpN7Rj/4ttIqX3f7jf/8WWiXrbqdn80GcQS4STwWyillznadYRBkYEKIMDAhRBgaEKAMDQpSBASHKwIAQZWBAiDIwIEQZGBCiDAwIUQZpGPwNT6KlGIaAtAx2IkRLsUwJ07YNBFG64s7CHl5+ozSQJCsfg6gw9hCEWv47qaObKx/CMmB6rolGa+Xf6rD2/RrC2b7s9puz7RWPQVQU+8DfL7tNhzcQXfrtisfwXBPSMiUqjtHL2og2vIpjwDLl/F2s+oCz0v5EW0o3ExKYvxip1+xSCyLqF/WaDcucv3m1cAtrsGaj4hbzk4VE/cpzTQwu6ixuu8e7ve6iWmFIaGuqeRaG6+5t792WBiGA4boL10kwMxdCaV1ogURlkEJgqO7AW+IMasnuwnNNuLaB2WaEdmf5pVWINrpqxcK2ARtSLj2iZNnzKSkFhusOap6JmUaYW4FEZbAtiaFBB7aV/YhjxXEmtmXgvmEPA+FZCMWg0MYmVIiB8CzuG/ZWDAewyoXjhAC86CLcmSm0qr9E4D6y7kKJiuYG51BrfwqpA2CVY3Tv6ZaV1AEGW/+BSnAOzdpfITHvW0udRIUykx8w0PoIVvL9vX92LQ1ayfcYmv0XBM4htKq/hJaVtRyGKFdCdVBrf4pKeH7Nx1jzQw8BjUp4Hk40jrb3JDruY4Dg0HnqA1qhEnyFqv8ZpF55IG6WdT8VlDrCQPsTVIJzaFV/hcjmItZUHju6ilr7I5jpbE+O17PH5mZ6E9sa/4bQ3o9m9S+hjMFeHZpoRUY6h1r7D3CiKz09bs/HlTjROOxoAn7l5/ArT0BLjhSm/AgVwuuchdf5AgK9n7SXy8ArgRTVzllUggtoV4+g4zzC6xPqLa1QCc+h2j4Dqf3cmsl1ZKLUPgZav0el8xWvT6hn7GgKtfYfYKYrT5tdr0KG7i5cn1h70ar+Cqk5VESztMkYyQxq7U/gxFOFtVno2HYnnoI9+88InENoV/8CSnpFNk8blFQ+qu0/wg0vQKDYEeaFT/7oPj9xw4vwvSfguz/nhTwtSagQXvAFPP9sLhfgq1Ha7CiBFFX/DCqdr9H2nuCDRvp/Cw/6Pp8fN1Wi0qcPSu1joP0JvOArtLxfIHQeKrskKpEbfoOqfwZGOld2KQD6ICBdRjqHevMDxP5ZtL0jiJzRskuiAtnhZVT9M7DS6bJLuU3fBKTLSqexrfk+4s4utKq/QGw9UHZJlCMrvo5a+9M1jbQtQt8FpMtKvsPQ3O8QWT9F23uSQdlkrPg6qv5nsOM/lV1Kpr4NSJcd/wn23O8Q2g+i7T2JxNxRdkm0DmYyjar/Wc/HTOWl7wPS5URX4ERXEFoj8L3H2aNsMPM9xlnYBT7k64UNE5AuJ56AMzfBU68NYqOcSi1nwwWkq3vqxaD0Jyu6imrn8w0bjK4NG5CublBiYwd8788R2qN84FgWreBEl+H5/9V3t2vXasMHpMtKp1Fv/jtSow7ffRwd9xAgNs0/r7/pBJXgPLzgi755wNcrQp//x025vqgSHvzKY+i4j3JRiZwI1UEl+Bpe56tc52SUadP+iZXaR83/T1T9zxG4B9FxD/MWcY+YyTQqwZdwg4ulDSIsyqYNSJdAikpwHpXgPCJrN3z3MUT2CK9T7pVWsKMJeMFXsONrZVdTmE0fkMXs+Brs+BpSOYCO+ygC92eck7ICqXy4wXlUgq9hqGbZ5RRu016DrIaGQGiPInB/hsjeV3Y5fcWOJuEG5+FElwufpNRPtlQPcicBDTcahxuN3+pVHkHgHIIyamWXVgqZNuCGF1EJzm3J3mIpW7oHWU5kPYDAOYjQeQhaWGWXkyuhYzjhJbjhRdjx9bLL6TtbugdZjh1fhx1fh259hNAZRWjvR2Tv3TRhETqGHU3BicbhhJc3/Z2o9WBAMgikcMNLcMNL0DAQ2XsR2PsROaMbLixCx7DDy3CjcdjRFEOxSgzIKgmkCyOKdctAbO1CZO1GaI8gNbeXXd6SjOQGnGgCdnwNVvwdQ7EGDMgaCKQLt4xr/h+Ryhoiazdi6wHE1i6kRr2Uuox0Dlb8Haz4Opx4ClJtzqfbRWJAesBQLVTCC6iEFwAASriIrV2IrV1IjO1IzB09f94ilQ8zmYaZ3rgViu9KXwFkM2JAciB1sHA61qWEjcTcgVQOQhkDSGUNStaghYVUVpc8jqHaEDqGVC0YqgWZNmGmczDSG+v+3QtaHQakIFJHt+ZGbOz5EVsNByQRZWBAiDIwIEQZGBCiDAwIUQYGhCgDA0KUgQEhysCAEGVgQIgyMCBEGTgWq2RJkqLVbiMIQsRxAgCwLBOu66BWrcI0jZIr3NoYkJLMzjXxww/TaDRbmfsNDtRw/307UK8PFFQZLcaAFCwMI1yZvIZWq72q/RvNFhrNFgZqVYzs2w3HsXOukBbjNUiBms0Wzl/4dtXhuO2zrTbOXfgWzea9f5bWjgEpSLPZxqXxCSTp2ueFp2mKS+MTaK4hYLQ2DEgBwijC+JVJKLX+JciUUhgfn0QYckZhERiQAkxOXkeS9G5FkSRNMTG5dRaQLhMDkrNGo7Xinaq1aLbamJ3j8qB5Y0By9sOPN/I79g+b42fO+hkDkiOlFOYa+f2VbzRb67rop5UxIDlq+x1one/a4O02F4fLEwOSoyAIc2+Dd7PyxYDkqDu2Kk9Jkn8bWxkDkiMhimijgEa2MAYkR5aV/08kFNHGVsaA5Mh1nU3RxlbGgOTIq1QgZX7/xYaU8CqV3I5PDEiupBTYtm0wt+PX64OQktcgeWJAcnb/zvx+fer++3fkdmyax4DkrFr1sH14W8+Pu314G6oeT6/yxoAUYPcDu2DbvbvbZNsWdj+wq2fHo+UxIAWwLBMPHRjpyQIMpmnioQMPwrI4W7oIDEhBKq6LQwdH19WT2LaFhw+OosJbu4VhQArkui4eOXRgTdckO3YM4ZFDBxiOgrGfLphpmnhwZA/u27kd3/94A7OzDSilltnXwNC2Onbu3A6v4hZcKQEMSGmqVQ+jVQ9aa/h+B0EYIU0SQAhY5vzCca7rFjKei5bHgJRMCIFq1UO12tvfUafe4DUIUQYGhCgDA0KUgQEhysCAEGVgQIgyMCBEGRgQogwMCFEGBoQoAwNClIEBIcrAgBBlYECIMjAgRBkYEKIMDAhRBgaEKAMDQpSBASHKwIAQZWBAiDIwIEQZGBCiDAwIUQYGhCiDVEovvXIy0RaXKq2kBtKyCyHqR1ojlYlSc2UXQtSPUq3mpEr11bILIepHKtGTMo71xbILIepHcaK/lUGcMiBESwji9KIMwvjLOOGNLKLF4kQhCOMvZarkGb8Tl10PUV/xOzFSJc/I0aOvTXaCZLzsgoj6hdYafpCMjx59bVICQJyq9ztBUnZdRH2hE6ZIUvU+0B1qIvDOXCsqtSiiftFoRYDAO8CtgOx9+vWPk0RdaPNahLa4th8jSdSFvU+//jGwaLCi1uLkbCOCUrq86ohKpJTGbDOC1uJk972FgOwJGm9prSdnGmE51RGVbKYRQms9uSdovNV9byEg4rmTYarUS36QoOXzVIu2lpYfww8SpEq9JJ47udBL3DYfZOToG+9qrd+eaYQIQt7Voq0hCJNu7/H2yNE33l287a4JUwOpGtMa30zPBggjjoSnzS2MUkzPBtAa3wykauzO7XcFZPjYibkkTZ9RWk/8ONNhT0KbVhAm+HGmA6X1RJKmzwwfO3HX1A+x3IfHTx3faxrGB0Lg4aFBBzXPyrdaogK1/PjWaRW+SdL0mf3HTkwttd+yAQGAm6eO15uGPCmE+I3nmhgadCBl5keI+ppSGjONEH6QQGv99kCqxpbqObpW9W2fOP3y84aUbwoh9m0btFGtsDehjaftx7eec+jJVKmX7rwgX8qquwP93phz1R18UQg9ZpryUL1mw3UMCMEehfqX1hpBmGKuFSFJ1AWtxck9QeOtxbdys6zp2z314StPQeMFy5DPVlxzv1exYJlcQYj6R5wo+J0YfpCMJ6l6HwLvdIeP3It1//m/fPrVfYZUR1zHOuxaxkHLEgelIfYYQtalgCGlYHIoN0pppTTSVKs5lejJONHfBnF6MQjjL1Mlz4wefW1yPcf/P7DcZJN/M21RAAAAAElFTkSuQmCC";

const extensionId = "WitCatFileHelper";
let FLAG = 0, download = 0, uri, input;
let filename = "";
//键值对
let db;
let request = window.indexedDB.open("witcat", 2);
request.onupgradeneeded = function (event) {
    console.log("初始化文件助手键值对");
    let objectStore;
    db = event.target.result;
    if (!db.objectStoreNames.contains('key')) {
        objectStore = db.createObjectStore('key', {
            keyPath: 'key',
        });
        console.log("File Helper: load with", objectStore);
    }
}
request.onerror = function () {
    alert("此浏览器貌似不支持使用文件助手键值对，建议使用chrome或者edge\nThis browser does not seem to support the use of File Helper key-value pairs, you can use Chrome or Edge");
};
request.onsuccess = function () {
    db = request.result;
    console.log('witcat:load key-value success');
};


setInterval(() => {
    if (download > 0) {
        download--;
    }
}, 1000)

class WitCatFileHelper {
    constructor(runtime) {
        this.runtime = runtime;
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                "WitCatFileHelper.name": "[beta]白猫的文件助手",
                "WitCatFileHelper.filehelper": "文件处理",
                "WitCatFileHelper.inputmanagement": "键值对",
                "WitCatFileHelper.imageprocess": "图片",
                "WitCatFileHelper.Multiplelinestext": "多行文本",
                "WitCatFileHelper.downloads": "将内容[text]按[s]分割后命名为[name]并下载多行文本",
                "WitCatFileHelper.download": "将内容[text]命名为[name]并下载",
                "WitCatFileHelper.downloadbase": "将data url[text]命名为[name]并下载",
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
                "WitCatFileHelper.openfiles": "打开图片",
                "WitCatFileHelper.openfiless": "打开[name]并读取为[type]",
                "WitCatFileHelper.downloadurl": "通过网址[url]下载文件[name]",
                "WitCatFileHelper.openfile.1": "UTF-8(文本)",
                "WitCatFileHelper.openfile.2": "data url",
                "WitCatFileHelper.img": "压缩图片(data url)[base]，质量(0-1)[num]",
                "WitCatFileHelper.file": "上次打开文件的[type]",
                "WitCatFileHelper.file.1": "文件名",
                "WitCatFileHelper.file.2": "文件后缀",
                "WitCatFileHelper.file.3": "文件大小",
                "WitCatFileHelper.docs": "📖拓展教程",
                "WitCatFileHelper.imghw": "data url图片[img]的[hw]",
                "WitCatFileHelper.imghw.1": "宽",
                "WitCatFileHelper.imghw.2": "高",
                "WitCatFileHelper.arrayjoin": "用[s]作为分隔符合并数组[text]",
            },
            en: {
                "WitCatFileHelper.name": "[beta]WitCat’s File Helper",
                "WitCatFileHelper.filehelper": "File",
                "WitCatFileHelper.inputmanagement": "Key-value pair",
                "WitCatFileHelper.imageprocess": "Image",
                "WitCatFileHelper.Multiplelinestext": "Multi-line text",
                "WitCatFileHelper.downloads": "Download split text [text] by [s] named [name]",
                "WitCatFileHelper.download": "Download text [text] named [name]",
                "WitCatFileHelper.downloadbase": "Download data url [text] named [name]",
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
                "WitCatFileHelper.openfiles": "load image",
                "WitCatFileHelper.openfiless": "load[name]read as[type]",
                "WitCatFileHelper.downloadurl": "download file[name]by url[url]",
                "WitCatFileHelper.openfile.1": "UTF-8(text)",
                "WitCatFileHelper.openfile.2": "data url",
                "WitCatFileHelper.img": "compress image(data url) [base] quality(0~1) [num]",
                "WitCatFileHelper.file": "[type] of last file",
                "WitCatFileHelper.file.1": "name",
                "WitCatFileHelper.file.2": "extension",
                "WitCatFileHelper.file.3": "size",
                "WitCatFileHelper.docs": "📖 Tutorial",
                "WitCatFileHelper.imghw": "[hw] of image(data url) [img]",
                "WitCatFileHelper.imghw.1": "width",
                "WitCatFileHelper.imghw.2": "height",
                "WitCatFileHelper.arrayjoin": "join array [text], seperating by [s]",
            }
        })
    }

    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id
        });
    }

    getInfo() {
        return {
            id: extensionId, // 拓展id
            name: this.formatMessage("WitCatFileHelper.name"), // 拓展名
            blockIconURI: _icon,
            menuIconURI: _icon,
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
                    opcode: "downloadbase",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.downloadbase"),
                    arguments: {
                        text: {
                            type: "string",
                            defaultValue: 'base64 img',
                        },
                        name: {
                            type: "string",
                            defaultValue: 'wit_cat.txt',
                        },
                    },
                },
                {
                    opcode: "downloadurl",
                    blockType: "command",
                    text: this.formatMessage("WitCatFileHelper.downloadurl"),
                    arguments: {
                        url: {
                            type: "string",
                            defaultValue: 'https://zhishi.oss-cn-beijing.aliyuncs.com/works-covers/6a2fa95b-0542-4eac-bd63-3e58a1a7f2b0.txt',
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
                    opcode: "openfiles",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.openfiles"),
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
                        type: {
                            type: "string",
                            menu: 'file',
                        },
                    },
                },
                "---" + this.formatMessage("WitCatFileHelper.imageprocess"),
                {
                    opcode: "img",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.img"),
                    disableMonitor: true,
                    arguments: {
                        base: {
                            type: "string",
                            defaultValue: 'base64 img',
                        },
                        num: {
                            type: "number",
                            defaultValue: '0.5',
                        },
                    },
                },
                {
                    opcode: "imghw",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.imghw"),
                    arguments: {
                        img: {
                            type: "string",
                            defaultValue: 'base64 img',
                        },
                        hw: {
                            type: "string",
                            menu: 'imghw',
                        },
                    },
                },
                "---" + this.formatMessage("WitCatFileHelper.inputmanagement"),
                {
                    opcode: "upload",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatFileHelper.upload"),
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
                            defaultValue: "i",
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
                            defaultValue: 'aSUyMGxvdmUlMjBjaGluYQ==',
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
                ],
                imghw: [
                    {
                        text: this.formatMessage('WitCatFileHelper.imghw.1'),
                        value: 'width'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.imghw.2'),
                        value: 'height'
                    },
                ],
                openfile: [
                    {
                        text: this.formatMessage('WitCatFileHelper.openfile.1'),
                        value: 'utf-8'
                    },
                    {
                        text: this.formatMessage('WitCatFileHelper.openfile.2'),
                        value: 'base64'
                    },
                ],
            }
        };
    }
    //打开教程
    docs() {
        let a = document.createElement('a');
        a.href = "https://www.ccw.site/post/d6d96e80-3f58-4a19-b7e6-c567d3a6a583";
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        a.click();
    }
    //下载多行文件
    downloads(args) {
        downloadable(() => {
            let h = args.text;

            let s = args.s;
            if (s != "") {
                h = args.text.split(s).join("\n");
            } else {
                h = args.text;
            }

            // 字符内容转变成blob地址
            let blob = new Blob([h]);
            let download = URL.createObjectURL(blob);
            downloadFile(download, args.name, this.formatMessage("WitCatFileHelper.downloadask"), h);
        });
    }
    //下载文件
    download(args) {
        downloadable(() => {
            const content = args.text;

            // 字符内容转变成blob地址
            let blob = new Blob([content]);
            let download = URL.createObjectURL(blob);
            downloadFile(download, args.name, this.formatMessage("WitCatFileHelper.downloadask"), content);
        });
    }
    //下载base64
    downloadbase(args) {
        downloadable(() => {
            try {
                downloadFileByBase64(args.text, args.name);
            }
            catch {
                return;
            }
        });
    }
    //下载url文件
    downloadurl(args) {
        var url = args.url;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true); // 异步
        xhr.responseType = 'blob'; // blob 类型
        xhr.onload = function () {
            if (xhr.status != 200) {
                console.error("error:can`t get file");
                return;
            }
            if (window.navigator.msSaveOrOpenBlob) {
                // IE
                navigator.msSaveBlob(xhr.response, filename);
            } else {
                var download = URL.createObjectURL(xhr.response);
                downloadFile(download, args.name, this.formatMessage("WitCatFileHelper.downloadask"), args.url);
            }
        };
        xhr.send();
    }
    //读取本地变量
    upload(args) {
        const name = args.name;
        let h = this.runtime.ccwAPI.getProjectUUID();
        //寻找状态
        return new Promise(resolve => {
            read("witcat" + h + "#" + name, e => {
                read(e.value + h + "©" + name, e => {
                    resolve(e.value);
                });
            });
        });
    }
    //保存本地变量
    save(args) {
        const text = args.text;
        const name = args.name;
        let h = this.runtime.ccwAPI.getProjectUUID();
        //寻找状态
        read("witcat" + h + "#" + name, show => {
            if (h === "") {
                alert("请先保存作品");
            } else {
                if (show.value == undefined) {
                    add("@witcat" + h + "©" + name, text);
                    add("witcat" + h + "#" + name, "@witcat");
                }
                else {
                    add(show.value + h + "©" + name, text);
                }
            }
        });
    }
    //删除本地变量
    delete(args) {
        const name = args.name;
        let h = this.runtime.ccwAPI.getProjectUUID();
        //寻找状态
        read("witcat" + h + "#" + name, e => {
            deletes(e.value + h + "©" + name);
            deletes("witcat" + h + "#" + name);
        });

    }
    //字符串分割
    segmentation(args) {
        let text = args.text;
        let s = args.s;
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
    //加密
    encrypt(args) {
        try {
            let str = args.text;
            let jiaMi = encodeURIComponent(str);
            let jiaM = btoa(jiaMi);
            return jiaM;
        }
        catch {
            return "";
        }
    }
    //解密
    decrypt(args) {
        try {
            let jiaM = args.text;
            let jieMi = atob(jiaM);
            let jieM = decodeURIComponent(jieMi);
            return jieM;
        }
        catch {
            return "";
        }
    }
    //打开文件
    openfile() {
        FLAG = 1;
        return new Promise(resolve => {
            input = document.createElement("input");
            input.type = "file";
            input.style = "display:none;";
            input.click();
            input.onchange = () => {
                const reader = new FileReader();
                const file = input.files[0];
                reader.onload = (e) => {
                    FLAG = 0;
                    resolve(e.target.result);
                };
                reader.onerror = () => {
                    FLAG = 0;
                    resolve();
                };
                filename = getFileName(input.value);
                reader.readAsText(file);
            }
            window.onfocus = () => {
                // 开始计时或者播放
                setTimeout(() => {
                    if (FLAG === 1) {
                        FLAG = 0;
                        resolve("");
                    }
                }, 1000);
            }
        });
    }
    //打开图片
    openfiles() {
        FLAG = 1;
        return new Promise(resolve => {
            input = document.createElement("input");
            input.type = "file";
            input.accept = ".jpeg,.jpg,.png,.ico";
            input.style = "display:none;";
            input.click();
            input.onchange = () => {
                const reader = new FileReader();
                const readers = new FileReader();
                const file = input.files[0];
                reader.onload = (e) => {
                    FLAG = 0;
                    if (uri.byteLength / 1024 > 10) {
                        compressImg(e.target.result, 0.5, e => {
                            resolve(e);
                        });
                    }
                    else {
                        resolve(e.target.result);
                    }
                };
                reader.onerror = () => {
                    FLAG = 0;
                    resolve();
                };
                filename = getFileName(input.value);
                if (checkImgType(file)) {
                    readers.readAsArrayBuffer(file);
                }
                readers.onload = (e) => {
                    uri = e.target.result;
                    console.log(uri.byteLength / 1024 + " KB");
                    reader.readAsDataURL(file);
                };
            }
            window.onfocus = () => {
                // 开始计时或者播放
                setTimeout(() => {
                    if (FLAG === 1) {
                        FLAG = 0;
                        resolve("");
                    }
                }, 1000);
            }
        });
    }
    //打开任意文件
    openfiless(args) {
        try {
            FLAG = 1;
            return new Promise(resolve => {
                input = document.createElement("input");
                input.type = "file";
                input.accept = args.name;
                input.style = "display:none;";
                input.click();
                input.onchange = () => {
                    const reader = new FileReader();
                    const readers = new FileReader();
                    const file = input.files[0];
                    reader.onload = (e) => {
                        FLAG = 0;
                        resolve(e.target.result);
                    };
                    reader.onerror = (e) => {
                        FLAG = 0;
                        resolve("error:", e);
                    };
                    filename = getFileName(input.value);
                    readers.readAsArrayBuffer(file);
                    readers.onload = (e) => {
                        uri = e.target.result;
                        console.log(uri.byteLength / 1024 + " KB");
                        if (uri.byteLength / 1024 / 1024 < 50) {
                            if (args.type == "base64") {
                                reader.readAsDataURL(file);
                            }
                            if (args.type == "utf-8") {
                                reader.readAsText(file);
                            }
                        }
                        else {
                            console.error("文件过大\nfile is too lage.");
                            resolve("error");
                        }
                    };
                }
                window.onfocus = () => {
                    // 开始计时或者播放
                    setTimeout(() => {
                        if (FLAG === 1) {
                            FLAG = 0;
                            resolve("");
                        }
                    }, 1000);
                }
            });
        }
        catch (e) {
            console.error("witcat open any file error:", e);
        }
    }
    //打开文件的信息
    file(args) {
        try {
            if (args.type === "name") {
                return filename;
            }
            else if (args.type === "suffix") {
                return filename.substring(filename.lastIndexOf(".") + 1);
            }
            else {
                return getFileSize(input) / 1024 + "KB";
            }
        }
        catch {
            return "";
        }
    }
    //压缩图片质量
    img(args) {
        return new Promise(resolve => {
            try {
                compressImg(args.base, args.num, e => {
                    resolve(e);
                });
            }
            catch {
                resolve("");
            }
        });
    }
    //设置状态
    showvar(args) {
        const name = args.name;
        let h = this.runtime.ccwAPI.getProjectUUID();
        //寻找状态
        read("witcat" + h + "#" + name, e => {
            read(e.value + h + "©" + name, ev => {
                if (h === "") {
                    alert("请先保存作品");
                } else {
                    if (ev.value != undefined) {
                        deletes(e.value + h + "©" + name);
                        add("witcat" + h + "#" + name, args.show);
                        add(args.show + h + "©" + name, ev.value);
                    }
                }
            });
        });
    }
    //修改别人的键
    saveother(args) {
        let name = args.name;
        let h = args.id;
        let text = args.text;
        //寻找状态
        read("witcat" + h + "#" + name, e => {
            if (e.value === "#witcat" || e.value === undefined) {
                add("#witcat" + h + "©" + name, text);
            }
        });
    }
    //获取别人的键
    uploadother(args) {
        let name = args.name;
        let h = args.id;
        //寻找状态
        return new Promise(resolve => {
            read("witcat" + h + "#" + name, e => {
                if (e.value != undefined && e.value != "@witcat") {
                    read(e.value + h + "©" + name, ev => {
                        resolve(ev.value);
                    });
                }
                else {
                    resolve("");
                }
            });
        });
    }
    //获取键状态
    other(args) {
        let name = args.name;
        let h = args.id;
        //寻找状态
        return new Promise(resolve => {
            read("witcat" + h + "#" + name, e => {
                if (e.value == "#witcat") {
                    resolve("公开");
                }
                if (e.value == "$witcat") {
                    resolve("只读");
                }
                if (e.value == "@witcat") {
                    resolve("私有");
                }
                resolve("键不存在");

            });
        });
    }
    //删除多行文本行
    deleteMultiplelinestext(args) {
        let texts = multipleText(args.text);
        let num = args.num;
        if (args.num === "last") {
            num = texts.length;
        }
        if (args.num === "first") {
            num = 1;
        }
        texts.splice(num - 1, 1);
        return texts.join("\n");
    }
    //插入多行文本
    addMultiplelinestext(args) {
        let texts = multipleText(args.texts);
        let num = args.num;
        if (args.num === "last") {
            num = texts.length + 1;
        }
        if (args.num === "first") {
            num = 1;
        }
        texts.splice(num - 1, 0, args.text);
        return texts.join("\n");
    }
    //多行文本第几行
    whatMultiplelinestext(args) {
        let text = args.text.split("\n");
        let num = args.num;
        if (args.num === "last") {
            num = text.length;
        }
        if (args.num === "first") {
            num = 1;
        }
        if (text.length >= num && num > 0) {
            return text[num - 1].split("\r")[0];
        }
        else {
            return "";
        }
    }
    //多行文本行数
    numMultiplelinestext(args) {
        let text = args.text.split("\n");
        return text.length;
    }
    //多行文本转数组
    turnMultiplelinestext(args) {
        let texts = multipleText(args.text);
        return JSON.stringify(texts);
    }
    //数组转多行文本
    turnsMultiplelinestext(args) {
        let texts = JSON.parse(args.text);
        return texts.join("\n");
    }
    //判断键值对
    number() {
        console.warn("文件助手：判断键值对积木已下线\nFile Helper: Determine the key value pair block has been offline");/*
        return new Promise(resolve => {
            console.log(args.num)
            read(args.num, e => {
                return e.value;
            });
        });*/
    }
    //键值对内容
    numbers() {
        console.warn("文件助手：键值对数量积木已下线\nFile Helper: number of key value pair block has been offline");/*
        return new Promise(resolve => {
            read("witcat" + h + "#" + name, e => {
                return e.value;
            });
        });*/
    }
    //可下载文本数量
    downloadnum() {
        return 3 - download;
    }
    //图片宽高获取
    imghw(args) {
        return new Promise(resolve => {
            let newImage = new Image()
            // 这里将src传入需要获取信息的图片地址或base64
            newImage.src = args.img;
            // onload是异步的,封装的话可以用promise
            newImage.onload = () => {
                // 输出图片信息 比如可以获取图片宽高
                if (args.hw === "width") {
                    resolve(newImage.width);
                }
                else {
                    resolve(newImage.height);
                }
            }
            setTimeout(() => {
                resolve("");
            }, 100);
        });
    }
    //数组合并
    arrayjoin(args) {
        return JSON.parse(args.text).join(args.s);
    }
}

window.tempExt = {
    Extension: WitCatFileHelper,
    info: {
        name: "WitCatFileHelper.name",
        description: "WitCatFileHelper.descp",
        extensionId: extensionId,
        iconURL: _picture,
        insetIconURL: _icon,
        featured: true,
        disabled: false,
        collaborator: "白猫 @ CCW"
    },
    l10n: {
        "zh-cn": {
            "WitCatFileHelper.name": "[beta]白猫的文件助手",
            "WitCatFileHelper.descp": "读取/处理本地数据"
        },
        en: {
            "WitCatFileHelper.name": "[beta]WitCat’s File Helper",
            "WitCatFileHelper.descp": "Handling local data"
        }
    }
};

/* vim: set expandtab tabstop=2 shiftwidth=2: */

//多行文本解码
function multipleText(text) {
    let texts = text.split("\n");
    let a = [];
    if (text.indexOf("\r") !== -1) {
        texts.forEach(e => {
            a.push(e.split("\r")[0]);
        });
    }
    else {
        a = texts;
    }
    return a;
}
//压缩base64图片
function compressImg(base64, multiple, useImg) {
    // 第一个参数就是需要加密的base65，
    // 第二个是压缩系数 0-1，
    // 第三个压缩后的回调 用来获取处理后的 base64
    if (!base64) {
        return
    }
    // const _this = this
    const length = base64.length / 1024
    // 压缩方法
    let newImage = new Image()
    let quality = 0.6    // 压缩系数0-1之间
    newImage.src = base64
    newImage.setAttribute('crossOrigin', 'Anonymous') // url为外域时需要
    let imgWidth,
        imgHeight
    let w = undefined
    newImage.onload = function () {
        // 这里面的 this 指向 newImage
        // 通过改变图片宽高来实现压缩
        w = this.width * multiple
        imgWidth = this.width
        imgHeight = this.height
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        if (Math.max(imgWidth, imgHeight) > w) {
            if (imgWidth > imgHeight) {
                canvas.width = w
                // 等比例缩小
                canvas.height = w * (imgHeight / imgWidth)
            } else {
                canvas.height = w
                // 等比例缩小
                canvas.width = w * (imgWidth / imgHeight)
            }
        } else {
            canvas.width = imgWidth
            canvas.height = imgHeight
            // quality 设置转换为base64编码后图片的质量，取值范围为0-1  没什么压缩效果
            // 还是得通过设置 canvas 的宽高来压缩
            quality = 0.6
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height) //  // 这里面的 this 指向 newImage
        let smallBase64 = canvas.toDataURL('image/jpeg', quality) // 压缩语句
        // 必须通过回调函数返回，否则无法及时拿到该值，回调函数异步执行
        console.log(`压缩前：${length}KB`)
        console.log(`压缩后：${smallBase64.length / 1024} KB`)


        useImg(smallBase64)

    }
    newImage.onerror = function () {
        useImg("")
    }
}
//将base64转换为blob
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
// * desc: 下载方法
// * @param url  ：返回数据的blob对象或链接
// * @param fileName  ：下载后文件名标记
function downloadFile(url, name = "	wit_cat.txt", ask, contant) {
    let SuffixName = name.split(".")[name.split(".").length - 1];
    if (SuffixName.toLowerCase() === "bat" || SuffixName.toLowerCase() === "cmd" || SuffixName.toLowerCase() === "vbs" || SuffixName.toLowerCase() === "ps1" || SuffixName.toLowerCase() === "sh") {
        let a = confirm(ask + SuffixName + ":\n" + contant);
        if (a === false) {
            return;
        }
    }
    var a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.target = "_blank";
    a.click();
    a.remove();
}
// * desc: 下载参数入口
// * @param base64  ：返回数据的blob对象或链接
// * @param fileName  ：下载后文件名标记
function downloadFileByBase64(base64, fileName) {
    var myBlob = dataURLtoBlob(base64);
    var myUrl = URL.createObjectURL(myBlob);
    downloadFile(myUrl, fileName);
}

//获取文件名
function getFileName(o) {
    var pos = o.lastIndexOf("\\");
    return o.substring(pos + 1);
}
//获取打开文件的大小
function getFileSize(obj) {
    var objValue = obj.value;
    if (objValue == "") return;
    var fileLenth = -1;
    try {
        //对于非IE获得要上传文件的大小
        fileLenth = parseInt(obj.files[0].size);
    } catch (e) {
        fileLenth = -1;
    }

    return fileLenth;
}
//设置键值对
function add(key_, value) {
    let json = {};
    json.key = key_;
    json.value = value;
    var transaction = db.transaction(['key'], "readwrite");
    var store = transaction.objectStore('key');

    var objectStore = transaction.objectStore('key');
    var request = objectStore.get(key_);

    request.onerror = function () {
        return;
    };

    request.onsuccess = function () {
        if (request.result) {
            store.put(json);
        } else {
            store.add(json);
        }
    };

    store.onerror = function () {
        console.error('数据写入失败');
    }
}
//删除键值对
function deletes(key_) {
    var transaction = db.transaction(['key'], "readwrite");
    var store = transaction.objectStore('key');
    store.delete(key_);
}
//读取键值对
function read(key_, recall) {
    var transaction = db.transaction(['key']);
    var objectStore = transaction.objectStore('key');
    var request = objectStore.get(key_);

    request.onerror = function () {
        recall("");
    };

    request.onsuccess = function () {
        if (request.result) {
            recall(request.result);
        } else {
            recall("")
        }
    };
}
//判断打开文件是否为图片
function checkImgType(file) {
    if (!/\.(jpg|jpeg|png|JPG|PNG|ico|ICO)$/.test(file.name)) {
        return false;
    } else {
        return true;
    }
}
//判断是否允许下载文件
function downloadable(callback) {
    download += 1;
    if (download < 3) {
        callback();
    }
    else {
        console.warn("下载太频繁！\nToo many downloads!");
    }
}
