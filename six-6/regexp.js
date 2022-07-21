// import Cast from "cast.js";

class RegExpVI {
  constructor(runtime) {
    this.regexp = new RegExp("", "g");
    this.text = "";
    this.result = null;
    this.runtime = runtime;
    this._formatMessage = runtime.getFormatMessage({
      "zh-cn": {
        "RegExpVI.name": "正则表达式vi",
        "RegExpVI.info.1": "创建匹配模式",
        "RegExpVI.info.2": "查找文本",
        "RegExpVI.regexp.dight": "数字",
        "RegExpVI.regexp.chars": "数字字母下划线",
        "RegExpVI.regexp.white": "空白字符",
        "RegExpVI.regexp.notdight": "非数字",
        "RegExpVI.regexp.notchars": "非数字字母下划线",
        "RegExpVI.regexp.notwhite": "非空白字符",
        "RegExpVI.regexp.number": "数",
        "RegExpVI.regexp.integer": "整数",
        "RegExpVI.regexp.positivenumber": "非负数",
        "RegExpVI.regexp.positiveinteger": "非负整数",
        "RegExpVI.regexp.scientific": "科学记数法",
        "RegExpVI.regexp.any": "任意字符",
        "RegExpVI.regexp.word": "英文单词",
        "RegExpVI.regexp.upper": "大写字母",
        "RegExpVI.regexp.lower": "小写字母",
        "RegExpVI.regexp.chinese": "汉字",
        "RegExpVI.range": "[INCLUDE] [TEXT] 中的字符 [RANGE]",
        "RegExpVI.range.include": "在",
        "RegExpVI.range.exclude": "不在",
        "RegExpVI.range.range": "(启用范围)",
        "RegExpVI.range.norange": "(禁用范围)",
        "RegExpVI.text": "文字 [TEXT]",
        "RegExpVI.quantifier": "[COUNT] [REGEXP]",
        "RegExpVI.quantifier.anyornone": "可选的任意个",
        "RegExpVI.quantifier.anyornonelazy": "可选的任意个 (尽量少)",
        "RegExpVI.quantifier.optional": "可选的",
        "RegExpVI.quantifier.optionallazy": "可选的 (尽量无)",
        "RegExpVI.quantifier.any": "任意个",
        "RegExpVI.quantifier.anylazy": "任意个 (尽量少)",
        "RegExpVI.countn": "[MODE] [N] 个 [REGEXP]",
        "RegExpVI.countn.equal": "恰好",
        "RegExpVI.countn.greater": "至少",
        "RegExpVI.countn.greaterlazy": "至少 (尽量少)",
        "RegExpVI.countrange": "[MODE] [X] 到 [Y] 个 [REGEXP]",
        "RegExpVI.countrange.greedy": "(尽量多)",
        "RegExpVI.countrange.lazy": "(尽量少)",
        "RegExpVI.group": "捕获组: ([REGEXP])",
        "RegExpVI.groupreference": "第 [N] 组的内容",
        "RegExpVI.concat": "[REGEXP1] 和 [REGEXP2]",
        "RegExpVI.concatwithseparator": "[REGEXP1] 和 [TEXT] 和 [REGEXP2]",
        "RegExpVI.or": "[REGEXP1] 或者 [REGEXP2]",
        "RegExpVI.findtext": "在 [TEXT] 里查找 [REGEXP]",
        "RegExpVI.findnext": "继续查找",
        "RegExpVI.isfound": "找到了?",
        "RegExpVI.foundtext": "找到的文本",
        "RegExpVI.foundtextbegin": "找到的文本开始位置",
        "RegExpVI.foundtextend": "找到的文本结束位置",
        "RegExpVI.foundtextgroups": "找到的第 [N] 个捕获组的内容",
        "RegExpVI.findall": "在 [TEXT] 里查找所有 [REGEXP] 并保存到 [LIST]",
        "RegExpVI.split": "在 [TEXT] 里以 [REGEXP] 分割并保存到 [LIST]",
        "RegExpVI.replace": "将 [TEXT] 里的所有 [REGEXP] 替换为 [DEST] [GROUP]",
        "RegExpVI.replace.group": "(使用引用记号)",
        "RegExpVI.replace.nogroup": "(不使用引用记号)",
      },
      en: {
        "RegExpVI.name": "Regular expression vi",
        "RegExpVI.info.1": "Creating pattern",
        "RegExpVI.info.2": "Finding texts",
        "RegExpVI.regexp.dight": "dight",
        "RegExpVI.regexp.chars": "[a-zA-Z_]",
        "RegExpVI.regexp.white": "white character",
        "RegExpVI.regexp.notdight": "not dight",
        "RegExpVI.regexp.notchars": "not [a-zA-Z_]",
        "RegExpVI.regexp.notwhite": "not white character",
        "RegExpVI.regexp.number": "number",
        "RegExpVI.regexp.integer": "integer",
        "RegExpVI.regexp.positivenumber": "not-negative number",
        "RegExpVI.regexp.positiveinteger": "not-negative integer",
        "RegExpVI.regexp.scientific": "scientific notation",
        "RegExpVI.regexp.any": "any character",
        "RegExpVI.regexp.word": "word",
        "RegExpVI.regexp.upper": "captical letter",
        "RegExpVI.regexp.lower": "non-capital letter",
        "RegExpVI.regexp.chinese": "chinese character",
        "RegExpVI.range": "chars [INCLUDE] [RANGE] [TEXT]",
        "RegExpVI.range.include": "in",
        "RegExpVI.range.exclude": "not in",
        "RegExpVI.range.range": "(range enabled)",
        "RegExpVI.range.norange": "(range disabled)",
        "RegExpVI.text": "text [TEXT]",
        "RegExpVI.quantifier": "[COUNT] [REGEXP]",
        "RegExpVI.quantifier.anyornone": "any numbers or none of (greedy)",
        "RegExpVI.quantifier.anyornonelazy": "any numbers or none of (lazy)",
        "RegExpVI.quantifier.optional": "optional (greedy)",
        "RegExpVI.quantifier.optionallazy": "optional (lazy)",
        "RegExpVI.quantifier.any": "any numbers of (greedy)",
        "RegExpVI.quantifier.anylazy": "any numbers of (lazy)",
        "RegExpVI.countn": "[MODE] [N] [REGEXP]",
        "RegExpVI.countn.equal": "exactly",
        "RegExpVI.countn.greater": "at least (greedy)",
        "RegExpVI.countn.greaterlazy": "at least (lazy)",
        "RegExpVI.countrange": "[MODE] [X] to [Y] [REGEXP]",
        "RegExpVI.countrange.greedy": "(greedy)",
        "RegExpVI.countrange.lazy": "(lazy)",
        "RegExpVI.group": "group [REGEXP]",
        "RegExpVI.groupreference": "group [N]",
        "RegExpVI.concat": "[REGEXP1] and [REGEXP2]",
        "RegExpVI.concatwithseparator": "[REGEXP1] and [TEXT] and [REGEXP2]",
        "RegExpVI.or": "[REGEXP1] or [REGEXP2]",
        "RegExpVI.findtext": "find [REGEXP] in [TEXT]",
        "RegExpVI.findnext": "find next",
        "RegExpVI.isfound": "found?",
        "RegExpVI.foundtext": "found text",
        "RegExpVI.foundtextbegin": "begin index",
        "RegExpVI.foundtextend": "end index",
        "RegExpVI.foundtextgroups": "founded content of group [N]",
        "RegExpVI.findall": "find all [REGEXP] in [TEXT] and save to [LIST]",
        "RegExpVI.split": "split [TEXT] by [REGEXP] and save to [LIST]",
        "RegExpVI.replace": "replace all [REGEXP] in [TEXT] with [DEST] [GROUP]",
        "RegExpVI.replace.group": "(refs enabled)",
        "RegExpVI.replace.nogroup": "(refs disabled)",
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
      id: "RegExpVI", // 拓展id
      name: this.formatMessage("RegExpVI.name"), // 拓展名
      // docsURI: "https://www.baidu.com",
      color1: "#3333FF",
      color2: "#0000CC",
      blocks: [
        "---" + this.formatMessage("RegExpVI.info.1"),
        {
          opcode: "str",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.text"),
          arguments: {
            TEXT: {
              type: "string",
              defaultValue: ","
            }
          }
        }, {
          opcode: "range",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.range"),
          arguments: {
            INCLUDE: {
              type: "string",
              menu: "CharsetInclude",
              defaultValue: "-"
            },
            RANGE: {
              type: "string",
              menu: "CharsetRange",
              defaultValue: "true"
            },
            TEXT: {
              type: "string",
              defaultValue: "a-zA-Z"
            }
          }
        }, {
          opcode: "quantifier",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.quantifier"),
          arguments: {
            COUNT: {
              type: "string",
              menu: "CountPicker",
              defaultValue: "+"
            },
            REGEXP: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "\\d"
            }
          }
        }, {
          opcode: "countn",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.countn"),
          arguments: {
            N: {
              type: "number",
              defaultValue: 2
            },
            MODE: {
              type: "string",
              menu: "CountnumPicker",
              defaultValue: "}"
            },
            REGEXP: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "\\d"
            }
          }
        }, {
          opcode: "countrange",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.countrange"),
          arguments: {
            X: {
              type: "number",
              defaultValue: 2
            },
            Y: {
              type: "number",
              defaultValue: 3
            },
            MODE: {
              type: "string",
              menu: "CountrangePicker",
              defaultValue: "}"
            },
            REGEXP: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "\\d"
            }
          }
        }, {
          opcode: "or",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.or"),
          arguments: {
            REGEXP1: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "-?[0-9]+"
            },
            REGEXP2: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "[a-zA-Z']+"
            }
          }
        }, {
          opcode: "concat",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.concat"),
          arguments: {
            REGEXP1: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "[A-Z]"
            },
            REGEXP2: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "\\d"
            }
          }
        }, {
          opcode: "concatwithseparator",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.concatwithseparator"),
          arguments: {
            REGEXP1: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "\\d"
            },
            TEXT: {
              type: "string",
              defaultValue: ","
            },
            REGEXP2: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "[A-Z]"
            }
          }
        }, {
          opcode: "group",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.group"),
          arguments: {
            REGEXP: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "[a-zA-Z']+"
            }
          }
        }, {
          opcode: "groupreference",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.groupreference"),
          arguments: {
            N: {
              type: "number",
              defaultValue: 1
            }
          }
        },
        "---" + this.formatMessage("RegExpVI.info.2"),
        {
          opcode: "findtext",
          blockType: "command",
          text: this.formatMessage("RegExpVI.findtext"),
          arguments: {
            REGEXP: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "-?[0-9]+(?:\\.[0-9]*)?"
            },
            TEXT: {
              type: "string",
              defaultValue: "I have 23 apples."
            }
          }
        }, {
          opcode: "findnext",
          blockType: "command",
          text: this.formatMessage("RegExpVI.findnext"),
          arguments: {}
        }, {
          opcode: "isfound",
          blockType: "Boolean",
          text: this.formatMessage("RegExpVI.isfound"),
          arguments: {}
        }, {
          opcode: "foundtext",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.foundtext"),
          arguments: {}
        }, {
          opcode: "foundtextbegin",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.foundtextbegin"),
          arguments: {}
        }, {
          opcode: "foundtextend",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.foundtextend"),
          arguments: {}
        }, {
          opcode: "foundtextgroups",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.foundtextgroups"),
          arguments: {
            N: {
              type: "number",
              defaultValue: 1
            }
          }
        },
        {
          opcode: "findall",
          blockType: "command",
          text: this.formatMessage("RegExpVI.findall"),
          arguments: {
            REGEXP: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "-?[0-9]+(?:\\.[0-9]*)?"
            },
            TEXT: {
              type: "string",
              defaultValue: "I have 23 45."
            },
            LIST: {
              type: "string",
              menu: "List"
            }
          }
        }, {
          opcode: "split",
          blockType: "command",
          text: this.formatMessage("RegExpVI.split"),
          arguments: {
            REGEXP: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "-?[0-9]+(?:\\.[0-9]*)?"
            },
            TEXT: {
              type: "string",
              defaultValue: "I have 23 apples."
            },
            LIST: {
              type: "string",
              menu: "List"
            }
          }
        }, {
          opcode: "replace",
          blockType: "reporter",
          text: this.formatMessage("RegExpVI.replace"),
          arguments: {
            REGEXP: {
              type: "string",
              menu: "RegExpPicker",
              defaultValue: "-?[0-9]+(?:\\.[0-9]*)?"
            },
            TEXT: {
              type: "string",
              defaultValue: "I have 23 apples."
            },
            DEST: {
              type: "string",
              defaultValue: "45"
            },
            GROUP: {
              type: "string",
              menu: "ReplaceGroup",
              defaultValue: "false"
            }
          }
        }
      ],
      menus: {
        RegExpPicker: {
          items: [{
            text: this.formatMessage("RegExpVI.regexp.dight"),
            value: "\\d"
          }, {
            text: this.formatMessage("RegExpVI.regexp.chars"),
            value: "\\w"
          }, {
            text: this.formatMessage("RegExpVI.regexp.white"),
            value: "\\s"
          }, {
            text: this.formatMessage("RegExpVI.regexp.notdight"),
            value: "\\D"
          }, {
            text: this.formatMessage("RegExpVI.regexp.notchars"),
            value: "\\W"
          }, {
            text: this.formatMessage("RegExpVI.regexp.notwhite"),
            value: "\\S"
          }, {
            text: this.formatMessage("RegExpVI.regexp.number"),
            value: "-?[0-9]+(?:\\.[0-9]*)?"
          }, {
            text: this.formatMessage("RegExpVI.regexp.integer"),
            value: "-?[0-9]+"
          }, {
            text: this.formatMessage("RegExpVI.regexp.positivenumber"),
            value: "[0-9]+(?:\\.[0-9]*)?"
          }, {
            text: this.formatMessage("RegExpVI.regexp.positiveinteger"),
            value: "[0-9]+"
          }, {
            text: this.formatMessage("RegExpVI.regexp.scientific"),
            value: "-?[0-9]+(?:\\.[0-9]*)?(?:[eE]-?[0-9]+)"
          }, {
            text: this.formatMessage("RegExpVI.regexp.any"),
            value: "."
          }, {
            text: this.formatMessage("RegExpVI.regexp.word"),
            value: "[a-zA-Z']+"
          }, {
            text: this.formatMessage("RegExpVI.regexp.upper"),
            value: "[A-Z]"
          }, {
            text: this.formatMessage("RegExpVI.regexp.lower"),
            value: "[a-z]"
          }, {
            text: this.formatMessage("RegExpVI.regexp.chinese"),
            value: "[\u4e00-\u9fa5]"
          }],
          acceptReporters: true
        },
        CountPicker: {
          items: [{
            text: this.formatMessage("RegExpVI.quantifier.anyornone"),
            value: "*"
          }, {
            text: this.formatMessage("RegExpVI.quantifier.any"),
            value: "+"
          }, {
            text: this.formatMessage("RegExpVI.quantifier.optional"),
            value: "?"
          }, {
            text: this.formatMessage("RegExpVI.quantifier.anyornonelazy"),
            value: "*?"
          }, {
            text: this.formatMessage("RegExpVI.quantifier.anylazy"),
            value: "+?"
          }, {
            text: this.formatMessage("RegExpVI.quantifier.optionallazy"),
            value: "??"
          }]
        },
        CountnumPicker: {
          items: [{
            text: this.formatMessage("RegExpVI.countn.equal"),
            value: "}"
          }, {
            text: this.formatMessage("RegExpVI.countn.greater"),
            value: ",}"
          }, {
            text: this.formatMessage("RegExpVI.countn.greaterlazy"),
            value: ",}?"
          }]
        },
        CountrangePicker: {
          items: [{
            text: this.formatMessage("RegExpVI.countrange.lazy"),
            value: "}?"
          }, {
            text: this.formatMessage("RegExpVI.countrange.greedy"),
            value: "}"
          }]
        },
        CharsetInclude: {
          items: [{
            text: this.formatMessage("RegExpVI.range.include"),
            value: "-"
          }, {
            text: this.formatMessage("RegExpVI.range.exclude"),
            value: "-^"
          }]
        },
        CharsetRange: {
          items: [{
            text: this.formatMessage("RegExpVI.range.range"),
            value: "true"
          }, {
            text: this.formatMessage("RegExpVI.range.norange"),
            value: "false"
          }]
        },
        ReplaceGroup: {
          items: [{
            text: this.formatMessage("RegExpVI.replace.group"),
            value: "true"
          }, {
            text: this.formatMessage("RegExpVI.replace.nogroup"),
            value: "false"
          }]
        },
        List: {
          items: '_getListOfList'
        }
      }
    };
  }

  range(args) {
    const re = /[\\\]\^]/g;
    let text = args.TEXT;
    if (args.RANGE === "true") {
      text = text.replace(/.-./g, function(x) {
        let a = x.codePointAt(0);
        let b = x.codePointAt(2);
        if (a < b) return x;
        else if (a === b) return x[0];
        else return x[2] + "-" + x[0];
      });
    } else {
      if (text.includes("-")) {
        text = "-" + text.replace(/-/g, "");
      }
    }
    return "[" + String(args.INCLUDE).slice(1) + String(text).replace(re, "\\$&") + "]";
  }

  str(args) {
    const re = /[\\\[\].*?+(){}^$|]/g;
    return String(args.TEXT).replace(re, "\\$&");
  }

  concatwithseparator(args) {
    return "(?:" + String(args.REGEXP1) + ")(?:" + this.str(args) + ")(?:" + String(args.REGEXP2) + ")";
  }

  concat(args) {
    return "(?:" + String(args.REGEXP1) + ")(?:" + String(args.REGEXP2) + ")";
  }

  or(args) {
    return "(?:" + String(args.REGEXP1) + ")|(?:" + String(args.REGEXP2) + ")";
  }

  quantifier(args) {
    return "(?:" + String(args.REGEXP) + ")" + String(args.COUNT);
  }

  countn(args) {
    let n = Math.floor(Number(args.N));
    if (n < 0) n = 0;
    return "(?:" + String(args.REGEXP) + "){" + n + String(args.MODE);
  }

  countrange(args) {
    let x = Math.floor(Number(args.X));
    let y = Math.floor(Number(args.Y));
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > y) {
      let t = x;
      x = y;
      y = t
    };
    return "(?:" + String(args.REGEXP) + "){" +
      (x === y ? x : x + "," + y) +
      String(args.MODE);
  }

  group(args) {
    return "(" + String(args.REGEXP) + ")";
  }

  groupreference(args) {
    let N = Math.floor(Number(args.N));
    return N > 0 ? "\\" + N : "";
  }

  findtext(args) {
    try {
      this.regexp = new RegExp(String(args.REGEXP), "g");
    } catch (e) {
      // 这里应该提示用户表达式出错了
      this.regexp = new RegExp("", "g");
      this.text = "";
      this.result = null;
      return;
    }
    this.text = String(args.TEXT);
    this.result = this.regexp.exec(this.text);
  }

  findnext(args) {
    if (this.result !== null) {
      if (this.result[0].length === 0)
        this.regexp.lastIndex++;
      this.result = this.regexp.exec(this.text);
    }
  }

  isfound(args) {
    return this.result !== null;
  }

  foundtext(args) {
    return this.result === null ? "" : this.result[0];
  }

  foundtextbegin(args) {
    return this.regexp.lastIndex - this.foundtext().length + 1;
  }

  foundtextend(args) {
    return this.regexp.lastIndex;
  }

  foundtextgroups(args) {
    if (this.result === null) return "";
    let N = Math.floor(Number(args.N));
    if (N >= this.result.length) {
      return "";
    } else {
      return this.result[N] === null ? "" : this.result[N];
    };
  }

  findall(args, util) {
    let regexp;
    let result = [];
    try {
      regexp = new RegExp(String(args.REGEXP), "g");
    } catch (e) {
      // 这里应该提示用户表达式出错了
      return;
    }
    let text = String(args.TEXT);
    let res;
    while (res = regexp.exec(text), res !== null) {
      result.push(res[0]);
    }
    let vari = util.target.lookupVariableById(args.LIST);
    if (vari !== null)
      vari.value = result;
  }

  split(args, util) {
    let regexp;
    let result = [];
    try {
      regexp = new RegExp(String(args.REGEXP), "g");
    } catch (e) {
      // 这里应该提示用户表达式出错了
      return;
    }
    let text = String(args.TEXT);
    result = text.split(regexp);
    let vari = util.target.lookupVariableById(args.LIST);
    if (vari !== null)
      vari.value = result;
  }

  replace(args) {
    let regexp;
    let result = [];
    try {
      regexp = new RegExp(String(args.REGEXP), "g");
    } catch (e) {
      // 这里应该提示用户表达式出错了
      return "";
    }
    let text = String(args.TEXT);
    let dest = String(args.DEST);
    if (String(args.GROUP) === "false") {
      dest = dest.replace(/\$/g, "$$$$");
    }
    return text.replace(regexp, dest);
  }

  _getListOfList() {
    if (this.runtime === undefined) {
      return [];
    }
    let list = [];
    let varis = this.runtime._stageTarget.variables;
    Object.keys(varis).forEach(i => {
      let v = varis[i];
      if (v.type === "list") {
        list.push({
          text: v.name,
          value: v.id
        });
      }
    });
    if (this.runtime._editingTarget !== null &&
      !this.runtime._editingTarget.isStage) {
      varis = this.runtime._editingTarget.variables;
      Object.keys(varis).forEach(i => {
        let v = varis[i];
        if (v.type === "list") {
          list.push({
            text: v.name,
            value: v.id
          });
        }
      });
    }
    if (list.length === 0) {
      list.push({
        text: "?",
        value: "?"
      });
    }
    list.sort(function(a, b) {
      return a.text < b.text ? -1 : a.text > b.text ? 1 : 0;
    });
    return list;
  }

}

window.tempExt = {
  Extension: RegExpVI,
  info: {
    name: "RegExpVI.name",
    description: "RegExpVI.descp",
    extensionId: "RegExpVI",
    featured: true,
    disabled: false,
    collaborator: "vi"
  },
  l10n: {
    "zh-cn": {
      "RegExpVI.name": "正则表达式vi",
      "RegExpVI.descp": "用积木创建正则表达式并匹配文本。"
    },
    en: {
      "RegExpVI.name": "Regular expression vi",
      "RegExpVI.descp": "Create RegExp and find texts."
    }
  }
};

/* vim: set expandtab tabstop=2 shiftwidth=2: */
