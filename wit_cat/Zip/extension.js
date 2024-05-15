import JSZip from "jszip";
import { witcat_Zip_icon, witcat_Zip_extensionId, witcat_Zip_icons } from "./assets/index.js";

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字、布尔和文本（极端情况下还有 null 或 undefined，需要同时处理 */

export default class WitCatZip {
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
                "WitCatZip.name": "白猫的压缩文件",
                "WitCatZip.filehelper": "文件处理",
                "WitCatZip.openfile.1": "UTF-8(文本)",
                "WitCatZip.openfile.2": "zip(压缩文件)",
                "WitCatZip.docs": "📖拓展教程",
                "WitCatZip.zip": "压缩文件:联动文件助手",
                "WitCatZip.CreateZip": "创建或重置ID为[id]的zip包",
                "WitCatZip.ExportZip": "将zip包[id]导出为blob",
                "WitCatZip.SetZip": "设置ID为[id]的zip包为[content]",
                "WitCatZip.CreateFold": "为zip包[id]目录[way]创建文件夹[name]",
                "WitCatZip.CreateFile": "为zip包[id]目录[way]创建或复写类型为[type]内容为[content]的文件[name]",
                "WitCatZip.DeleteFile": "为zip包[id]目录[way]删除文件[name]",
                "WitCatZip.DeleteFold": "为zip包[id]目录[way]删除文件夹[name]",
                "WitCatZip.lastfile": "用[type]读取上次打开第[num]个文件的内容",
                "WitCatZip.getzipfiles": "zip包[id]目录[way]下的所有文件",
                "WitCatZip.zipfile": "用[type]读取zip包[id]目录[way]文件[name]的内容",
                "WitCatZip.outzip": "清除并释放zip包[id]",
                "WitCatZip.dragfile": "当文件被拖到舞台",
            },
            en: {
                "WitCatZip.name": "WitCat’s Zip",
                "WitCatZip.filehelper": "File",
                "WitCatZip.openfile.1": "UTF-8(text)",
                "WitCatZip.openfile.2": "zip(Compressed file)",
                "WitCatZip.docs": "📖 Tutorial",
                "WitCatZip.zip": "Compressed file:Linkage File Helper",
                "WitCatZip.CreateZip": "Create or reset the zip package [id]",
                "WitCatZip.ExportZip": "Export zip package [id] as blob",
                "WitCatZip.SetZip": "Set the zip package ID [id] to [content].",
                "WitCatZip.CreateFold": "Create folder [name] for zip package [id] directory [way]",
                "WitCatZip.CreateFile": "Create or reset file [name] with type [type] and content [content] for zip package [id] directory [way]",
                "WitCatZip.DeleteFile": "Delete files [name] for zip package [id] directory [way]",
                "WitCatZip.DeleteFold": "Delete folder [name] for zip package [id] directory [way]",
                "WitCatZip.lastfile": "Use [type] to read the contents of the [num] file that was last opened",
                "WitCatZip.getzipfiles": "All files in zip package [id] directory [way]",
                "WitCatZip.zipfile": "Use [type] to read the contents of zip package [id] directory [way] file [name]",
                "WitCatZip.outzip": "Clear and release zip package [id]",
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
            id: witcat_Zip_extensionId, // 拓展id
            name: this.formatMessage("WitCatZip.name"), // 拓展名
            blockIconURI: witcat_Zip_icons,
            menuIconURI: witcat_Zip_icon,
            color1: "#97B1BE",
            color2: "#8096a1",
            blocks: [
                {
                    blockType: "button",
                    text: this.formatMessage('WitCatZip.docs'),
                    onClick: this.docs,
                },
                "---" + this.formatMessage("WitCatZip.zip"),
                {
                    opcode: "CreateZip",
                    blockType: "command",
                    text: this.formatMessage("WitCatZip.CreateZip"),
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
                    text: this.formatMessage("WitCatZip.SetZip"),
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
                    text: this.formatMessage("WitCatZip.outzip"),
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
                    text: this.formatMessage("WitCatZip.ExportZip"),
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
                    text: this.formatMessage("WitCatZip.CreateFold"),
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
                    text: this.formatMessage("WitCatZip.CreateFile"),
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
                    text: this.formatMessage("WitCatZip.DeleteFold"),
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
                    text: this.formatMessage("WitCatZip.DeleteFile"),
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
                    text: this.formatMessage("WitCatZip.getzipfiles"),
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
                    text: this.formatMessage("WitCatZip.zipfile"),
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
            ],
            menus: {
                openfile: [
                    {
                        text: this.formatMessage('WitCatZip.openfile.1'),
                        value: 'utf-8'
                    },
                    {
                        text: this.formatMessage('WitCatZip.openfile.2'),
                        value: 'zip'
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
        a.href = "https://learn.ccw.site/article/f69e3c2e-9f35-4fe3-81bb-076385b1dd3d";
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        a.click();
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

    async CreateFile(args) {
        if (this.zip[String(args.id)] !== undefined) {
            switch (String(args.type)) {
                case 'utf-8':
                    this.zip[String(args.id)].file(`${String(args.way) === '' ? '' : String(args.way) + '/'}${String(args.name)}`, String(args.content));
                    break;
                case 'zip':
                    if (String(args.content).startsWith('blob:')) {
                        try {
                            const blob = await this.fetchBlob(String(args.content));
                            this.zip[String(args.id)].file(`${String(args.way) === '' ? '' : String(args.way) + '/'}${String(args.name)}`, blob);
                        } catch (error) {
                            console.error('Failed to fetch Blob from Blob URL:', error);
                        }
                    } else {
                        console.error('The provided URL is not a valid Blob URL.');
                    }
                    break;
                default:
                    break;
            }
        }
    }

    async fetchBlob(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const blob = await response.blob();
            return blob;
        } catch (error) {
            throw new Error('Failed to fetch Blob from Blob URL: ' + error.message);
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