// Name: Text
// ID: strings
// Description: Manipulate characters and text.
// Original: CST1229 <https://scratch.mit.edu/users/CST1229/>
// License: MIT AND MPL-2.0

/* generated l10n code */Scratch.translate.setup({"es":{"_Text":"Texto"},"fi":{"_Text":"Teksti"},"it":{"_Text":"Testo"},"ja":{"_Text":"テキスト"},"ko":{"_Text":"텍스트"},"nb":{"_Text":"Tekst"},"nl":{"_Exactly Title Case":"Alleen Beginhoofdletters","_MiXeD CaSe":"DoOr eLkAaR","_Text":"Tekst","_Title Case":"Alles Met Beginhoofdletter","_UPPERCASE":"HOOFDLETTERS","_[STRING] matches regex /[REGEX]/[FLAGS]?":"[STRING] komt overeen met regex /[REGEX]/[FLAGS]?","_convert [STRING] to [TEXTCASE]":"zet [STRING] om naar [TEXTCASE]","_count [SUBSTRING] in [STRING]":"aantal [SUBSTRING] in [STRING]","_count regex /[REGEX]/[FLAGS] in [STRING]":"aantal overeenkomsten van regex /[REGEX]/[FLAGS] met [STRING]","_index of [SUBSTRING] in [STRING]":"positie van [SUBSTRING] in [STRING]","_is [OPERAND1] identical to [OPERAND2]?":"[OPERAND1] identiek aan [OPERAND2]?","_item [ITEM] of [STRING] matched by regex /[REGEX]/[FLAGS]":"item [ITEM] van [STRING] waarmee regex /[REGEX]/[FLAGS] overeenkomt","_item [ITEM] of [STRING] split by [SPLIT]":"item [ITEM] van [STRING] gesplitst door [SPLIT]","_letters [LETTER1] to [LETTER2] of [STRING]":"letters [LETTER1] t/m [LETTER2] van [STRING]","_lowercase":"kleine letters","_repeat [STRING] [REPEAT] times":"herhaal [STRING] [REPEAT] keer","_replace [SUBSTRING] in [STRING] with [REPLACE]":"vervang [SUBSTRING] in [STRING] door [REPLACE]","_replace regex /[REGEX]/[FLAGS] in [STRING] with [REPLACE]":"vervang regex /[REGEX]/[FLAGS] in [STRING] door [REPLACE]","_unicode [NUM] as letter":"unicode [NUM] als letter","_unicode of [STRING]":"unicode van [STRING]"},"pt-br":{"_Text":"Texto"},"ru":{"_Exactly Title Case":"Настоящий Тайтл Кейс","_MiXeD CaSe":"СмЕшАнНыЙ КеЙс","_Text":"Текст","_Title Case":"Тайтл Кейс","_UPPERCASE":"ВЕРХНИЙ РЕГИСТР","_[STRING] matches regex /[REGEX]/[FLAGS]?":"[STRING] совпадает с regex'ом /[REGEX]/[FLAGS]?","_convert [STRING] to [TEXTCASE]":"сконвертировать строку [STRING] в [TEXTCASE]","_count [SUBSTRING] in [STRING]":"количество [SUBSTRING] в [STRING]","_count regex /[REGEX]/[FLAGS] in [STRING]":"посчитать regex /[REGEX]/[FLAGS] в [STRING]","_index of [SUBSTRING] in [STRING]":"индекс [SUBSTRING] в [STRING]","_is [OPERAND1] identical to [OPERAND2]?":"[OPERAND1] идентичный с [OPERAND2]?","_is [STRING] [TEXTCASE]?":"строка [STRING] это [TEXTCASE]?","_item [ITEM] of [STRING] matched by regex /[REGEX]/[FLAGS]":"предмет [ITEM] строки [STRING] совпадающий regex'ом /[REGEX]/[FLAGS]","_item [ITEM] of [STRING] split by [SPLIT]":"предмет [ITEM] строки [STRING] распределённый [SPLIT]","_letters [LETTER1] to [LETTER2] of [STRING]":"буквы с [LETTER1] до [LETTER2] строки [STRING]","_lowercase":"нижний регистр","_repeat [STRING] [REPEAT] times":"повторить [STRING] [REPEAT] раз","_replace [SUBSTRING] in [STRING] with [REPLACE]":"заменить [SUBSTRING] в [STRING] на [REPLACE]","_replace regex /[REGEX]/[FLAGS] in [STRING] with [REPLACE]":"заменить regex /[REGEX]/[FLAGS] в [STRING] на [REPLACE]","_unicode [NUM] as letter":"юникод [NUM] как букву","_unicode of [STRING]":"юникод [STRING]"},"tr":{"_Text":"Metin"},"uk":{"_Text":"Текст"},"zh-cn":{"_Exactly Title Case":"精确标题","_MiXeD CaSe":"混合大小写","_Text":"文本","_Title Case":"标题","_UPPERCASE":"大写","_[STRING] matches regex /[REGEX]/[FLAGS]?":"[STRING] 满足正则表达式 /[REGEX]/[FLAGS]？","_convert [STRING] to [TEXTCASE]":"转换[STRING]为[TEXTCASE]","_count [SUBSTRING] in [STRING]":"[STRING]中[SUBSTRING]的数量","_count regex /[REGEX]/[FLAGS] in [STRING]":"使用正则表达式 /[REGEX]/[FLAGS] 在 [STRING] 匹配的数量","_index of [SUBSTRING] in [STRING]":"[STRING]中[SUBSTRING]的位置","_is [OPERAND1] identical to [OPERAND2]?":"[OPERAND1]===[OPERAND2]","_is [STRING] [TEXTCASE]?":"[STRING]是[TEXTCASE]？","_item [ITEM] of [STRING] matched by regex /[REGEX]/[FLAGS]":"使用正则表达式 /[REGEX]/[FLAGS]匹配[STRING]的第[ITEM]个内容","_item [ITEM] of [STRING] split by [SPLIT]":"以[SPLIT]分割[STRING]后的第[ITEM]项","_letters [LETTER1] to [LETTER2] of [STRING]":"[STRING]的第[LETTER1]到第[LETTER2]位","_lowercase":"小写","_repeat [STRING] [REPEAT] times":"重复[REPEAT]个[STRING]","_replace [SUBSTRING] in [STRING] with [REPLACE]":"替换[STRING]中的[SUBSTRING]为[REPLACE]","_replace regex /[REGEX]/[FLAGS] in [STRING] with [REPLACE]":"使用正则表达式 /[REGEX]/[FLAGS] 在 [STRING]中替换为  [REPLACE]","_unicode [NUM] as letter":"unicode[NUM]对应的字符","_unicode of [STRING]":"[STRING]的unicode"}});/* end generated l10n code */(function (Scratch) {
  "use strict";

  const CaseParam = {
    LOWERCASE: "lowercase",
    UPPERCASE: "uppercase",
    MIXEDCASE: "mixedcase",
    TITLECASE: "titlecase",
    EXACTTITLECASE: "exacttitlecase",
  };

  let splitCache;
  let matchCache;

  class StringsExt {
    constructor() {}

    _initCaseMenu() {
      return [
        {
          text: Scratch.translate({
            default: "lowercase",
            description: "If your language has lowercase, style it accordingly",
          }),
          value: CaseParam.LOWERCASE,
        },
        {
          text: Scratch.translate({
            default: "UPPERCASE",
            description: "If your language has uppercase, style it accordingly",
          }),
          value: CaseParam.UPPERCASE,
        },
        {
          text: Scratch.translate({
            default: "Title Case",
            description:
              "If your language has Title Case, style it accordingly. 'Abc' is title case and exactly title case but 'ABC' is only title case.",
          }),
          value: CaseParam.TITLECASE,
        },
        {
          text: Scratch.translate({
            default: "Exactly Title Case",
            description:
              "If your language has Title Case, style it accordingly. 'Abc' is title case and exactly title case but 'ABC' is only title case.",
          }),
          value: CaseParam.EXACTTITLECASE,
        },
        {
          text: Scratch.translate({
            default: "MiXeD CaSe",
            description:
              "If your language has mixed case, style it accordingly",
          }),
          value: CaseParam.MIXEDCASE,
        },
      ];
    }

    getInfo() {
      return {
        // id "text" would conflict with Scratch Lab's Animated Text (lab/text.js)
        id: "strings",
        name: Scratch.translate("Text"),
        blocks: [
          {
            opcode: "letters_of",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "letters [LETTER1] to [LETTER2] of [STRING]"
            ),
            arguments: {
              LETTER1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2,
              },
              LETTER2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 4,
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
            },
          },
          {
            opcode: "split",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("item [ITEM] of [STRING] split by [SPLIT]"),
            arguments: {
              ITEM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3,
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
              SPLIT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "p",
              },
            },
          },
          {
            opcode: "count",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({
              default: "count [SUBSTRING] in [STRING]",
              description:
                "Counts how many time [SUBSTRING] appears in [STRING]",
            }),
            arguments: {
              SUBSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "p",
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
            },
          },
          {
            opcode: "indexof",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({
              default: "index of [SUBSTRING] in [STRING]",
              description: "Reports where [SUBSTRING] appears in [STRING]",
            }),
            arguments: {
              SUBSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "p",
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
            },
          },

          "---",

          {
            opcode: "replace",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "replace [SUBSTRING] in [STRING] with [REPLACE]"
            ),
            arguments: {
              SUBSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "world",
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello world!",
              },
              REPLACE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "fellow Scratchers",
              },
            },
          },
          {
            opcode: "repeat",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("repeat [STRING] [REPEAT] times"),
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple ",
              },
              REPEAT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3,
              },
            },
          },

          "---",

          {
            opcode: "unicodeof",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("unicode of [STRING]"),
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "A",
              },
            },
          },
          {
            opcode: "unicodefrom",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate("unicode [NUM] as letter"),
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 65,
              },
            },
          },

          "---",
          {
            opcode: "replaceRegex",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate(
              "replace regex /[REGEX]/[FLAGS] in [STRING] with [REPLACE]"
            ),
            arguments: {
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ".",
              },
              FLAGS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "g",
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello world!",
              },
              REPLACE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "$&$&",
              },
            },
          },
          {
            opcode: "matchRegex",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({
              default:
                "item [ITEM] of [STRING] matched by regex /[REGEX]/[FLAGS]",
              description:
                "/[REGEX]/ is supposed to match the syntax that some actual programming languages used for regular expressions.",
            }),
            arguments: {
              ITEM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello world!",
              },
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "(.) (.{2})",
              },
              FLAGS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "g",
              },
            },
          },
          {
            opcode: "countRegex",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({
              default: "count regex /[REGEX]/[FLAGS] in [STRING]",
              description:
                "/[REGEX]/ is supposed to match the syntax that some actual programming languages used for regular expressions.",
            }),
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello world!",
              },
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "[AEIOU]",
              },
              FLAGS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "i",
              },
            },
          },
          {
            opcode: "testRegex",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate({
              default: "[STRING] matches regex /[REGEX]/[FLAGS]?",
              description:
                "/[REGEX]/ is supposed to match the syntax that some actual programming languages used for regular expressions.",
            }),
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hello world!",
              },
              REGEX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "hello",
              },
              FLAGS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "i",
              },
            },
          },

          "---",

          {
            opcode: "identical",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate("is [OPERAND1] identical to [OPERAND2]?"),
            arguments: {
              OPERAND1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "A",
              },
              OPERAND2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "a",
              },
            },
          },

          "---",

          {
            opcode: "isCase",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate({
              default: "is [STRING] [TEXTCASE]?",
              description: "Example block context: <is [hello] [lowercase] ?>",
            }),
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
              TEXTCASE: {
                type: Scratch.ArgumentType.STRING,
                menu: "textCase",
                defaultValue: CaseParam.LOWERCASE,
              },
            },
          },
          {
            opcode: "toCase",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({
              default: "convert [STRING] to [TEXTCASE]",
              description:
                "Example block context: (convert [HELLO] to [lowercase])",
            }),
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "apple",
              },
              TEXTCASE: {
                type: Scratch.ArgumentType.STRING,
                menu: "textCase",
                defaultValue: CaseParam.UPPERCASE,
              },
            },
          },
        ],
        menus: {
          textCase: {
            acceptReporters: true,
            items: this._initCaseMenu(),
          },
        },
      };
    }

    identical(args, util) {
      // Purposefully no casting, because
      // types ARE differentiated in this block
      return args.OPERAND1 === args.OPERAND2;
    }

    unicodeof(args, util) {
      const chars = Array.from(args.STRING.toString());
      return chars.map((char) => char.charCodeAt(0)).join(" ");
    }

    unicodefrom(args, util) {
      return String.fromCharCode(Number(args.NUM) || 0);
    }

    letters_of(args, util) {
      args.STRING = args.STRING.toString();
      args.LETTER1 = Number(args.LETTER1) || 0;
      args.LETTER2 = Number(args.LETTER2) || 0;
      return args.STRING.substring(args.LETTER1 - 1, args.LETTER2);
    }

    _caseInsensitiveRegex(str) {
      return new RegExp(str.replaceAll(/[^a-zA-Z0-9]/g, "\\$&"), "gi");
    }

    split(args, util) {
      args.STRING = (args.STRING ?? "").toString();
      args.SPLIT = (args.SPLIT ?? "").toString();
      args.ITEM = Number(args.ITEM) || 0;

      // Cache the last split
      if (
        !(
          splitCache &&
          splitCache.string === args.STRING &&
          splitCache.split === args.SPLIT
        )
      ) {
        const regex = this._caseInsensitiveRegex(args.SPLIT);

        splitCache = {
          string: args.STRING,
          split: args.SPLIT,
          arr: args.STRING.split(regex),
        };
      }
      return splitCache.arr[args.ITEM - 1] || "";
    }

    count(args, util) {
      // Fill cache
      this.split(
        {
          SPLIT: args.SUBSTRING,
          STRING: args.STRING,
          ITEM: 0,
        },
        util
      );
      return splitCache.arr.length - 1 || 0;
    }

    replace(args, util) {
      args.STRING = args.STRING.toString();
      args.SUBSTRING = args.SUBSTRING.toString();

      args.REPLACE = args.REPLACE.toString();

      const regex = this._caseInsensitiveRegex(args.SUBSTRING);

      return args.STRING.replace(regex, args.REPLACE);
    }

    indexof(args, util) {
      // .toLowerCase() for case insensitivity
      args.STRING = (args.STRING ?? "").toString().toLowerCase();
      args.SUBSTRING = (args.SUBSTRING ?? "").toString().toLowerCase();

      // Since both arguments are casted to strings beforehand,
      // we don't have to worry about type differences
      // like in the item number of in list block
      const found = args.STRING.indexOf(args.SUBSTRING);

      // indexOf returns -1 when no matches are found, we can just +1
      return found + 1;
    }

    repeat(args, util) {
      args.STRING = args.STRING.toString();
      args.REPEAT = Number(args.REPEAT) || 0;
      return args.STRING.repeat(args.REPEAT);
    }

    replaceRegex(args, util) {
      try {
        args.STRING = args.STRING.toString();
        args.REPLACE = args.REPLACE.toString();
        args.REGEX = args.REGEX.toString();
        args.FLAGS = args.FLAGS.toString();

        return args.STRING.replace(
          new RegExp(args.REGEX, args.FLAGS),
          args.REPLACE
        );
      } catch (e) {
        console.error(e);
        return "";
      }
    }

    matchRegex(args, util) {
      try {
        args.STRING = (args.STRING ?? "").toString();
        args.REGEX = (args.REGEX ?? "").toString();
        args.FLAGS = (args.FLAGS ?? "").toString();
        args.ITEM = Number(args.ITEM) || 0;

        // Cache the last matched string
        if (
          !(
            matchCache &&
            matchCache.string === args.STRING &&
            matchCache.regex === args.REGEX &&
            matchCache.flags === args.FLAGS
          )
        ) {
          const newFlags = args.FLAGS.includes("g")
            ? args.FLAGS
            : args.FLAGS + "g";
          const regex = new RegExp(args.REGEX, newFlags);

          matchCache = {
            string: args.STRING,
            regex: args.REGEX,
            flags: args.FLAGS,
            arr: args.STRING.match(regex) || [],
          };
        }
        return matchCache.arr[args.ITEM - 1] || "";
      } catch (e) {
        console.error(e);
        return "";
      }
    }

    countRegex(args, util) {
      // Fill cache
      // (ITEM is casted into 0,
      // but we don't care about the return value)
      this.matchRegex(args, util);
      return matchCache.arr.length || 0;
    }

    testRegex(args, util) {
      try {
        args.STRING = args.STRING.toString();
        args.REGEX = args.REGEX.toString();
        args.FLAGS = args.FLAGS.toString();

        return new RegExp(args.REGEX, args.FLAGS).test(args.STRING);
      } catch (e) {
        console.error(e);
        return false;
      }
    }

    isCase(args, util) {
      const string = args.STRING.toString();
      const textCase = args.TEXTCASE.toString();
      switch (textCase) {
        case CaseParam.LOWERCASE:
          return string.toLowerCase() === string;
        case CaseParam.UPPERCASE:
          return string.toUpperCase() === string;
        case CaseParam.MIXEDCASE:
          return !(
            string.toUpperCase() === string || string.toLowerCase() === string
          );
        case CaseParam.TITLECASE:
          return string.split(/\b/g).every((word) => {
            if (!word) return true;
            const titleCased = word[0].toUpperCase() + word.substring(1);
            return word === titleCased;
          });
        case CaseParam.EXACTTITLECASE:
          return string.split(/\b/g).every((word) => {
            if (!word) return true;
            const titleCased =
              word[0].toUpperCase() + word.substring(1).toLowerCase();
            return word === titleCased;
          });
        default:
          return false;
      }
    }

    toCase(args, util) {
      const string = args.STRING.toString();
      const textCase = args.TEXTCASE.toString();
      switch (textCase) {
        case CaseParam.LOWERCASE:
          return string.toLowerCase();
        case CaseParam.UPPERCASE:
          return string.toUpperCase();
        case CaseParam.MIXEDCASE:
          return Array.from(string)
            .map((char, index) =>
              index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
            )
            .join("");
        case CaseParam.TITLECASE:
          return string
            .split(/\b/g)
            .map((word) => {
              if (!word) return "";
              return word[0].toUpperCase() + word.substring(1);
            })
            .join("");
        case CaseParam.EXACTTITLECASE:
          return string
            .split(/\b/g)
            .map((word) => {
              if (!word) return "";
              return word[0].toUpperCase() + word.substring(1).toLowerCase();
            })
            .join("");
        default:
          return string;
      }
    }
  }

  Scratch.extensions.register(new StringsExt());
})(Scratch);