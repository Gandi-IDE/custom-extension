import moment from "moment-timezone";
import {franc, francAll} from 'franc-min'
import pinyin from "pinyin";
import { kukemc_i18n_extensionId, kukemc_i18n_icon, supportedTranslateCodes } from "./assets";


export default class KukeMCI18n {
  constructor(runtime) {
    this.runtime = runtime;
    this.lastRequestTimestamp = 0;
    
    /*
    获取 ScratchVM
    该段代码来源于lpp项目，并遵循MIT开源协议。
    */

    function hijack(fn) {
      const _orig = Function.prototype.apply
      Function.prototype.apply = function (thisArg) {
        return thisArg
      }
      const result = fn()
      Function.prototype.apply = _orig
      return result
    }
    let virtualMachine = null;

    if (this.runtime._events['QUESTION'] instanceof Array) {
      for (const value of this.runtime._events['QUESTION']) {
        const v = hijack(value)
        if (v?.props?.vm) {
          virtualMachine = v?.props?.vm
          break
        }
      }
    } else if (this.runtime._events['QUESTION']) {
      virtualMachine = hijack(this.runtime._events['QUESTION'])?.props?.vm
    }
    if (!virtualMachine)
      throw new Error('I18n cannot get Virtual Machine instance.')
    this.vm = virtualMachine
    /** default config */
    
    this._initialedI18n = {
      locales: {
        [this.language]: {
          key: "value",
        },
      },
    };
    this.i18n = {
      ...this._initialedI18n.locales[this.language],
    };

    this.supportedConvertibleUnits = [
      ["中文", "Chinese", "cn"],
      ["国际", "International", "intl"],
    ];

    this.supportedPinyin = [
      ["默认模式", "default", "default"],
      ["多音字模式", "heteronym", "heteronym"],
      ["无声调", "no tone", "tone"],
      ["无声调&多音字", "no tone&heteronym", "toneheteronym"],
    ];
  
    this._formatMessage = runtime.getFormatMessage({
      "zh-cn": {
        "kukeMCI18n.div.1": "🌍 初始化语言",
        "kukeMCI18n.div.2": "💬 文本处理",
        "kukeMCI18n.div.3": "🎭 语言环境设置",
        "kukeMCI18n.div.4": "🔭 文本翻译",
        "kukeMCI18n.div.5": "⚠️ 开发时使用，翻译不稳定 ⚠️",
        "kukeMCI18n.div.6": "🪄 单位转换",
        "kukeMCI18n.div.7": "✨ I18n 示例",
        "kukeMCI18n.block.initI18nForJSON": "从JSON [JSON] 初始化i18n",
        "kukeMCI18n.block.initI18nForFile": "从文件 [FILE] 初始化i18n",
        "kukeMCI18n.block.setLanguage": "设置语言为 [LANG]",
        "kukeMCI18n.block.getExtraData": "额外数据 [KEY]",
        "kukeMCI18n.block.replaceText": "格式化 [TEXT] 数据源 [DATA]",
        "kukeMCI18n.block.getLanguageForI18n": "当前i18n语言",
        "kukeMCI18n.block.getLanguageForBrowser": "浏览器当前语言",
        "kukeMCI18n.block.getSupportedLanguages": "支持的语言列表",
        "kukeMCI18n.block.checkLanguageSupport": "[LANG] 是否支持",
        "kukeMCI18n.block.recognitionLanguageName": "识别 [TEXT] 语言",
        "kukeMCI18n.block.recognitionLanguageNameAll": "识别 [TEXT] 语言(返回全部)",
        "kukeMCI18n.block.translateText":
          "☁️ 将 [TEXT] 从 [LANG1] 翻译为 [LANG2]",
        "kukeMCI18n.block.translateTextWithClipboard":
          "☁️ 将 [TEXT] 从 [LANG1] 翻译为 [LANG2] 并复制到剪贴板",
        "kukeMCI18n.button.printSupportedLanguages": "☁️ 打印支持的语言列表",
        "kukeMCI18n.tip.rateLimit": "操作频繁！",
        "kukeMCI18n.tip.allSupportedLanguages": "共支持 [NUM] 个语言",
        "kukeMCI18n.block.convertUnit": "数学单位换算 [NUM] 转换为 [UNIT] 单位",
        "kukeMCI18n.block.getTimestamp": "本地时间戳",
        "kukeMCI18n.block.getTimeZone": "本地时区",
        "kukeMCI18n.block.offsetTimeZone":
          "将时间 [TIME] 从 [ZONE1] 转换为 [ZONE2]",
        "kukeMCI18n.block.formatTimestamp": "将时间 [TIME] 按 [FORMAT] 格式化",
        "kukeMCI18n.block.Pinyin": "将 [TEXT] 转换为拼音 [MODE]",
        "kukeMCI18n.block.Example": "I18n 示例",
      },
      en: {
        "kukeMCI18n.div.1": "🌍 Language Initialization",
        "kukeMCI18n.div.2": "💬 Text Processing",
        "kukeMCI18n.div.3": "🎭 Language Environment",
        "kukeMCI18n.div.4": "🔭 Text Translation",
        "kukeMCI18n.div.5":
          "⚠️ For development only - Translates text and does not guarantee stability ⚠️",
        "kukeMCI18n.div.6": "🪄 Unit conversion",
        "kukeMCI18n.div.7": "✨ I18n Example",
        "kukeMCI18n.block.initI18nForJSON": "Initialize i18n from JSON [JSON]",
        "kukeMCI18n.block.initI18nForFile": "Initialize i18n from file [FILE]",
        "kukeMCI18n.block.setLanguage": "Set language to [LANG]",
        "kukeMCI18n.block.getExtraData": "Extra data for [KEY]",
        "kukeMCI18n.block.replaceText": "Format [TEXT] data from [DATA]",
        "kukeMCI18n.block.getLanguageForI18n": "Current language",
        "kukeMCI18n.block.getLanguageForBrowser": "Current browser language",
        "kukeMCI18n.block.getSupportedLanguages": "List of supported languages",
        "kukeMCI18n.block.checkLanguageSupport": "Is [LANG] supported?",
        "kukeMCI18n.block.recognitionLanguageName": "Detect language of [TEXT]",
        "kukeMCI18n.block.recognitionLanguageNameAll": "Detect language of [TEXT](back to all)",
        "kukeMCI18n.block.translateText":
          "☁️ Translate [TEXT] from [LANG1] to [LANG2]",
        "kukeMCI18n.block.translateTextWithClipboard":
          "☁️ Translate [TEXT] from [LANG1] to [LANG2], and copy to clipboard",
        "kukeMCI18n.button.printSupportedLanguages":
          "☁️ Print the list of supported languages",
        "kukeMCI18n.tip.rateLimit": "Frequent operation!",
        "kukeMCI18n.tip.allSupportedLanguages":
          "Supports [NUM] languages in total",
        "kukeMCI18n.block.convertUnit":
          "Mathematical Unit Conversion: Convert [NUM] to [UNIT] unit",
        "kukeMCI18n.block.getTimestamp": "Local Timestamp",
        "kukeMCI18n.block.getTimeZone": "Local Time Zone",
        "kukeMCI18n.block.offsetTimeZone":
          "Convert time [TIME] from [ZONE1] to [ZONE2]",
        "kukeMCI18n.block.formatTimestamp": "Format time [TIME] as [FORMAT]",
        "kukeMCI18n.block.Pinyin": "Convert [TEXT] to Pinyin [MODE]",
        "kukeMCI18n.block.Example": "I18n Example",
      },
    });
  }

  get initialedI18n() {
    return this._initialedI18n;
  }

  set initialedI18n(data) {
    if (typeof data === "object") {
      this._initialedI18n = data;
    }

    try {
      const _tmp = JSON.parse(String(data));
      if ("locales" in _tmp) this._initialedI18n = _tmp;
      else
        console.error(
          `[kukeMCI18n] set i18n failed: `,
          "i18n must has locales"
        );
    } catch (e) {
      console.error(`[kukeMCI18n] set i18n failed: `, e);
    }
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
    this.language = this.vm.getLocale(); 
    if (this.language === "zh-cn") {
      this.language = "zh-CN";
    }
    const initI18nForJSON = {
      opcode: "initI18nForJSON",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukeMCI18n.block.initI18nForJSON"),
      arguments: {
        JSON: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "{}",
        },
      },
    };
    const initI18nForFile = {
      opcode: "initI18nForFile",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukeMCI18n.block.initI18nForFile"),
      arguments: {
        FILE: {
          type: Scratch.ArgumentType.STRING,
          menu: "FILE_LIST",
        },
      },
    };
    const getI18n = {
      opcode: "getI18n",
      blockType: Scratch.BlockType.REPORTER,
      text: "i18n [KEY]",
      arguments: {
        KEY: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "test",
        },
      },
    };
    const getExtraData = {
      opcode: "getExtraData",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.getExtraData"),
      arguments: {
        KEY: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "version",
        },
      },
    };
    const setLanguage = {
      opcode: "setLanguage",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukeMCI18n.block.setLanguage"),
      arguments: {
        LANG: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "zh-CN",
        },
      },
    };
    const getLanguageForI18n = {
      opcode: "getLanguageForI18n",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.getLanguageForI18n"),
      arguments: {},
    };
    const getLanguageForBrowser = {
      opcode: "getLanguageForBrowser",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.getLanguageForBrowser"),
      arguments: {},
    };
    const getSupportedLanguages = {
      opcode: "getSupportedLanguages",
      blockType: Scratch.BlockType.REPORTER,
      disableMonitor: true,
      text: this.formatMessage("kukeMCI18n.block.getSupportedLanguages"),
      arguments: {},
    };
    const checkLanguageSupport = {
      opcode: "checkLanguageSupport",
      blockType: Scratch.BlockType.BOOLEAN,
      text: this.formatMessage("kukeMCI18n.block.checkLanguageSupport"),
      arguments: {
        LANG: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "zh-CN",
        },
      },
    };
    const printSupportedLanguages = {
      blockType: Scratch.BlockType.BUTTON,
      text: this.formatMessage("kukeMCI18n.button.printSupportedLanguages"),
      onClick: () => {
        this.runtime.logSystem.show();
        this.runtime.logSystem.info("");
        supportedTranslateCodes
          .map((t) => `| ${t[0]} | ${t[1]} | ${t[2]} |`)
          .forEach((v) => {
            this.runtime.logSystem.info(v);
          });
        this.runtime.logSystem.info(
          this.formatMessage("kukeMCI18n.tip.allSupportedLanguages").replace(
            "[NUM]",
            supportedTranslateCodes.length
          )
        );
      },
    };
    const translateText = {
      opcode: "translateText",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.translateText"),
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "Hello World!",
        },
        LANG1: {
          type: Scratch.ArgumentType.STRING,
          menu: "TRANSLATE_LIST",
          defaultValue: "en",
        },
        LANG2: {
          type: Scratch.ArgumentType.STRING,
          menu: "TRANSLATE_LIST",
          defaultValue: "zh",
        },
      },
    };

    const translateTextWithClipboard = {
      opcode: "translateTextWithClipboard",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukeMCI18n.block.translateTextWithClipboard"),
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "Hello World!",
        },
        LANG1: {
          type: Scratch.ArgumentType.STRING,
          menu: "TRANSLATE_LIST",
          defaultValue: "en",
        },
        LANG2: {
          type: Scratch.ArgumentType.STRING,
          menu: "TRANSLATE_LIST",
          defaultValue: "zh",
        },
      },
    };

    const convertUnit = {
      opcode: "convertUnit",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.convertUnit"),
      arguments: {
        NUM: {
          type: Scratch.ArgumentType.NUMBER,
          defaultValue: 150000,
        },
        UNIT: {
          type: Scratch.ArgumentType.STRING,
          menu: "UNIT_LIST",
          defaultValue: "cn",
        },
      },
    };

    const getTimestamp = {
      opcode: "getTimestamp",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.getTimestamp"),
      arguments: {},
    };

    const getTimeZone = {
      opcode: "getTimeZone",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.getTimeZone"),
      arguments: {},
    };

    const offsetTimeZone = {
      opcode: "offsetTimeZone",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.offsetTimeZone"),
      arguments: {
        TIME: {
          type: Scratch.ArgumentType.NUMBER,
          defaultValue: "1609459200",
        },
        ZONE1: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "Asia/Shanghai",
        },
        ZONE2: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "America/New_York",
        },
      },
    };

    const formatTimestamp = {
      opcode: "formatTimestamp",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.formatTimestamp"),
      arguments: {
        TIME: {
          type: Scratch.ArgumentType.NUMBER,
          defaultValue: 1609459200,
        },
        FORMAT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "YYYY-MM-DD HH:mm:ss",
        },
      },
    };

    const replaceText = {
      opcode: "replaceText",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.replaceText"),
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue:
            "Hello, {name}! You are {age} years old.",
        },
        DATA: {
          type: Scratch.ArgumentType.STRING,
          defaultValue:
            "{\"name\": \"kukemc\", \"age\": 20}",
        },
      },
    };

    const recognitionLanguageName = {
      opcode: "recognitionLanguageName",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.recognitionLanguageName"),
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue:
            "早上好!",
        },
      },
    };

    const recognitionLanguageNameAll = {
      opcode: "recognitionLanguageNameAll",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.recognitionLanguageNameAll"),
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue:
            "Good morning! Friends from all over the world",
        },
      },
    };

    const Pinyin = {
      opcode: "pinyin",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.Pinyin"),
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue:
            "我是拼音!",
        },
        MODE: {
          type: Scratch.ArgumentType.STRING,
          menu: "PINYIN_LIST",
          defaultValue: "default",
        },
      },
    }

    const Example = {
      opcode: "example",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.Example"),
      arguments: {},
    };

    return {
      id: kukemc_i18n_extensionId,
      name: "I18n",
      blockIconURI: kukemc_i18n_icon,
      menuIconURI: kukemc_i18n_icon,
      color1: "#13003a",
      color2: "#0a001e",
      docsURI:
        "https://learn.ccw.site/article/99e0432c-98f2-4394-8a32-e501beee1e27",
      blocks: [
        {
          blockType: Scratch.BlockType.LABEL,
          text: this.formatMessage("kukeMCI18n.div.1")
        },
        initI18nForJSON,
        initI18nForFile,
        "---" + this.formatMessage("kukeMCI18n.div.2"),
        getI18n,
        getExtraData,
        replaceText,
        "---" + this.formatMessage("kukeMCI18n.div.3"),
        setLanguage,
        getLanguageForI18n,
        getLanguageForBrowser,
        getSupportedLanguages,
        checkLanguageSupport,
        recognitionLanguageName,
        recognitionLanguageNameAll,
        "---" + this.formatMessage("kukeMCI18n.div.4"),
        printSupportedLanguages,
        "---" + this.formatMessage("kukeMCI18n.div.5"),
        translateText,
        translateTextWithClipboard,
        "---" + this.formatMessage("kukeMCI18n.div.6"),
        Pinyin,
        convertUnit,
        getTimestamp,
        getTimeZone,
        offsetTimeZone,
        formatTimestamp,
        "---" + this.formatMessage("kukeMCI18n.div.7"),
        Example,
      ],
      menus: {
        FILE_LIST: {
          items: "__gandiAssetsFileList",
        },
        TRANSLATE_LIST: {
          acceptReporters: true,
          items: supportedTranslateCodes.map((t) => {
            if (this.language === "zh-CN"){
              return {
                text: `${t[0]}`,
                value: t[2],
              };
            }
            else{
              return {
                text: `${t[1]}`,
                value: t[2],
              };
            }

          }),
        },
        UNIT_LIST: {
          acceptReporters: true,
          items: this.supportedConvertibleUnits.map((t) => {
            return {
              text: `${t[0]}(${t[1]})`,
              value: t[2],
            };
          }),
        },
        PINYIN_LIST: {
          items: this.supportedPinyin.map((t) => {
            if (this.language === "zh-CN"){
              return {
                text: `${t[0]}`,
                value: t[2],
              };
            }
            else{
              return {
                text: `${t[1]}`,
                value: t[2],
              };
            }
          }),
        }
      },
    };
  }

  __gandiAssetsFileList() {
    const list = this.runtime
      .getGandiAssetsFileList("json")
      .map((item) => item.name);
    if (list.length < 1) {
      list.push("没有文件 empty");
    }

    return list;
  }

  /**
   * @param {String || Object} JSON
   * @return {*}
   */
  initI18nForJSON({ JSON }) {
    this.initialedI18n = JSON;
    this.i18n = this.initialedI18n?.locales[this.language];
  }

  /**
   * @param {String} FILE
   * @return {*}
   */
  initI18nForFile({ FILE }) {
    const asset = this.runtime.getGandiAssetContent(FILE);
    if (asset) {
      this.initialedI18n = asset.decodeText();
      this.i18n = this.initialedI18n?.locales[this.language];
    }
  }

  /**
   * @param {String} KEY
   * @return {*}
   */
  getI18n({ KEY }) {
    const i18n = this.i18n[KEY];
    if (Array.isArray(i18n) || typeof KEY === 'object' && i18n !== null) {
      return JSON.stringify(i18n);
    }
    return i18n;
  }

  formatString(format, valuesObject) {
    // 只处理 {key} 形式的正常格式化占位符
    return format.replace(/(\\*)\{(\w+)\}/g, function(match, escapeChars, key) {
        if (escapeChars.length % 2 === 1) {
            return match.slice(1);
        } else {
            return typeof valuesObject[key] !== 'undefined' ? String(valuesObject[key]) : match;
        }
    }).replace(/\\(.)/g, '$1');
  }

  /**
   * @description l10n 积木语句
   * @param {Object} params - 参数对象，包含TEXT和DATA属性
   * @return {String}
   */
  replaceText({ TEXT, DATA }) {
      const values = JSON.parse(DATA);
      return this.formatString(TEXT, values);
  }

  /**
   * @param {String} KEY
   * @return {*}
   */
  getExtraData({ KEY }) {
    const i18n = this.initialedI18n[KEY];
    if (typeof i18n !== 'string') {
      return JSON.stringify(i18n);
    }
    return i18n;
  }

  /**
   * @param {String} LANG
   * @return {*}
   */
  setLanguage({ LANG }) {
    this.language = LANG;
    this.i18n = this.initialedI18n?.locales[LANG];
  }

  getLanguageForI18n() {
    return this.language;
  }

  getLanguageForBrowser() {
    return navigator.language;
  }

  getSupportedLanguages() {
    return JSON.stringify(Object.keys(this.initialedI18n?.locales));
  }

  /**
   * @param {String} LANG
   * @return {Boolean}
   */
  checkLanguageSupport({ LANG }) {
    return Object.keys(this.initialedI18n?.locales).includes(LANG);
  }

  /**
   * @param {Boolean} needToast
   * @return {Boolean}
   */
  canRequest(needToast = true) {
    const currentTime = Date.now();
    const result = currentTime - this.lastRequestTimestamp >= 3000;

    if (result) this.lastRequestTimestamp = Date.now();
    if (!result && needToast)
      this.runtime.scratchBlocks.utils?.toast(
        this.formatMessage("kukeMCI18n.tip.rateLimit")
      );
    return result;
  }

  /**
   * @param {String} TEXT 源文本
   * @param {String} LANG1 源语言
   * @param {String} LANG2 新语言
   * @return {Promise<unknown>}
   */
  async translateText({ TEXT, LANG1, LANG2 }) {
    if (this.runtime.isPlayerOnly) return "";
    if (LANG1 === LANG2) return TEXT;
      if (!this.canRequest()) return "";
      const req = await fetch("https://api-save.kuke.ink/api/translation", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ text: TEXT, from: LANG1, to: LANG2 })
      });
      return req.ok ? req.text() : req.status;
  }

  /**
   * @param {Object} args
   * @return {*}
   */
  translateTextWithClipboard(args) {
    if (this.runtime.isPlayerOnly) return;
    this.translateText(args).then((v) => {
      if (typeof v === "string") navigator.clipboard.writeText(v);
    });
  }

  /**
   * @param {Number} NUM
   * @param {String} UNIT
   * @return {String}
   */
  convertUnit({ NUM, UNIT }) {
    const chineseUnits = ["千", "万", "亿", "万亿", "千亿", "兆", "京", "垓", "秭", "穰", "沟", "涧", "正", "载"];
    const internationalUnits = ["K", "M", "B"];

    let tmp = NUM;
    let unitIndex = 0;
    let divisor = 1000;

    switch (UNIT) {
      case "cn":
        while (NUM >= 10000) {
          NUM /= 10000;
          unitIndex++;
        }

        if (unitIndex === 0 & NUM.toString().length !== 4) {
          return `${NUM}`;
        }

        NUM = Math.round(NUM * 10) / 10;

        if (chineseUnits[unitIndex] == "千") {
          NUM /= 1000
        }

        return `${NUM}${chineseUnits[unitIndex]}`;
      case "intl":
        while (NUM >= divisor * 1000) {
          unitIndex++;
          divisor *= 1000;
        }
        return `${Math.round((NUM / divisor) * 1000) / 1000}${
          internationalUnits[unitIndex]
        }`;
      default:
        return `${NUM}`;
    }
  }

  getTimestamp() {
    return Math.floor(Date.now() / 1000);
  }

  getTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /**
   * @param {Number} TIME
   * @param {String} ZONE1
   * @param {String} ZONE2
   * @return {Number}
   */
  offsetTimeZone({ TIME, ZONE1, ZONE2 }) {
    const date = moment.unix(TIME);
    const formattedDate = date.format("YYYY-MM-DD HH:mm:ss");
    const sourceMoment = moment.tz(formattedDate, ZONE1);
    const targetMoment = sourceMoment.clone().tz(ZONE2);
    const targetFormattedDate = moment(
      targetMoment.format("YYYY-MM-DD HH:mm:ss")
    );

    return targetFormattedDate.unix();
  }

  /**
   * @param {Number} TIME
   * @param {String} FORMAT
   * @return {String}
   */
  formatTimestamp({ TIME, FORMAT }) {
    const date = moment.unix(TIME).local();
    return date.format(FORMAT);
  }

  recognitionLanguageName({ TEXT }) {
    return franc(TEXT,{minLength: TEXT.length});
  }

  recognitionLanguageNameAll({ TEXT }) {
    return JSON.stringify(francAll(TEXT,{minLength: TEXT.length}));
  }

  flattenPinyinArray(pinyinList) {
    return JSON.stringify(pinyinList.flat().map(item => item.toLowerCase())); // 如果需要转成小写拼音
  }

  pinyin({ TEXT, MODE }) {
    if (MODE === "default") {
      return this.flattenPinyinArray(pinyin(TEXT));
    }
    else if (MODE === "heteronym") {
      return this.flattenPinyinArray(pinyin(TEXT, {
        heteronym: true,
        segment: true,
      }));
    }
    else if (MODE === "tone") {
      return this.flattenPinyinArray(pinyin(TEXT, {
        style: pinyin.STYLE_NORMAL
      }))
    }
    else if (MODE === "toneheteronym") {
      return this.flattenPinyinArray(pinyin(TEXT, {
        style: pinyin.STYLE_NORMAL,
        heteronym: true,
        segment: true,
      }))
    }
  }

  example() {
    return JSON.stringify({
      "locales": {
        "zh-CN": {
          "test": "你好 世界",
          "start_button_text": "开始游戏",
          "start_button_skin": "StartGame_CN",
          "menu_title": "主菜单",
          "credits_text": "制作人员"
        },
        "en": {
          "test": "Hello World",
          "start_button_text": "Start Game",
          "start_button_skin": "StartGame_EN",
          "menu_title": "Main Menu",
          "credits_text": "Credits"
        }
      },
      "version": "v1.0"
  });
  }
}