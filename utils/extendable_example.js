import { initExpandableBlocks, getDynamicArgs } from "./use-expandable-blocks.js";

const { ArgumentType } = Scratch;

class ExtendableExample {
  constructor(runtime) {
    this.runtime = runtime;

    this._formatMessage = runtime.getFormatMessage({
      "zh-cn": {
        extensionName: "可扩展积木例",
        func: "执行函数[func]",
        join: "连接[A][B]",
        param: "参数",
        clone: "克隆[SPRITE]",
      },
      en: {
        extensionName: "Extendable Example",
        func: "execute func[func]",
        join: "join[A][B]",
        param: "param",
        clone: "clone[SPRITE]",
      },
    });
    // 注册当前扩展的可扩展积木
    initExpandableBlocks(this);
    // initExpandableBlocks(this, '+', '-');
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
      id: "extendableTest", // 拓展id
      name: this.formatMessage("extensionName"), // 拓展名
      color: "#FF8C1A", // 拓展颜色
      blocks: [
        {
          opcode: "join",
          blockType: "reporter",
          text: this.formatMessage("join"),
          arguments: {
            A: {
              type: ArgumentType.STRING,
              defaultValue: "A",
            },
            B: {
              type: ArgumentType.STRING,
              defaultValue: "B",
            },
          },
          // 设置动态参数信息
          dynamicArgsInfo: {
            // 各参数的默认值。
            defaultValues: ["C", "D", "E", "F", "G"],
            // 也可以是函数
            // defaultValues: (i) => 'CDEFGHIJK'[i],
            // 也可以是单个字符串
            // defaultValues: '默认值',
          },
        },
        {
          opcode: "plus",
          blockType: "reporter",
          text: "[A]+[B]",
          arguments: {
            A: {
              type: ArgumentType.NUMBER,
              defaultValue: "",
            },
            B: {
              type: ArgumentType.NUMBER,
              defaultValue: "",
            },
          },
          // 设置动态参数信息
          dynamicArgsInfo: {
            defaultValues: "",
            afterArg: "B",
            joinCh: "+",
            // 动态参数类型：
            // n: 数字
            // s: 字符串（默认）
            // b: 布尔
            dynamicArgTypes: ["n"],
          },
        },
        {
          opcode: "list",
          blockType: "reporter",
          disableMonitor: true,
          text: "-",
          // 设置动态参数信息
          dynamicArgsInfo: {
            // 第一个动态参数前的文本
            preText: (n) => (n === 0 ? "empty list" : "list:["),
            // 最后一个动态参数后的文本
            endText: (n) => (n === 0 ? "" : "]"),
            // 各参数的默认值。
            defaultValues: ["apple", "banana", "item"],
          },
        },
        {
          opcode: "object",
          blockType: "reporter",
          disableMonitor: true,
          text: "-",
          // 设置动态参数信息
          dynamicArgsInfo: {
            // 第一个动态参数前的文本
            preText: "{",
            // 最后一个动态参数后的文本
            endText: "}",
            // 连接符
            joinCh: (i) => (i % 2 === 1 ? ":" : ","),
            paramsIncrement: 2, // 每次增加的参数数量
            // 各参数的默认值。
            defaultValues: (i) => {
              const idx = Math.floor(i / 2);
              if (i % 2 === 1) return "key" + idx;
              return "value" + idx;
            },
          },
        },
        {
          opcode: "print",
          blockType: "command",
          text: this.formatMessage("func"),
          arguments: {
            func: {
              type: "string",
              defaultValue: "func",
            },
          },
          // 设置动态参数信息
          dynamicArgsInfo: {
            // 在哪个参数后面插入动态参数
            afterArg: "func",
            // endText: 动态参数末尾的文本，可以是字符串或函数。n：动态参数的数量
            endText: (n) => (n === 0 ? "" : ")"),
            // joinCh: 动态参数之间的连接字符，可以是字符串或函数。i：第 i 个参数前的连接字符
            joinCh: (i) => (i === 0 ? "(" : ","),
            // defaultValues: 动态参数的默认值，可以是字符串或函数。
            defaultValues: [this.formatMessage("param")],
          },
        },
        {
          opcode: "set",
          blockType: "command",
          text: "set[K]to[V]",
          arguments: {
            K: {
              type: "string",
              defaultValue: "a",
            },
            V: {
              type: "string",
              defaultValue: "b",
            },
          },
          dynamicArgsInfo: {
            // (可选)在哪个参数后面插入动态参数
            afterArg: "K",
            joinCh: ".",
            // 默认值可以函数指定
            defaultValues: "a",
          },
        },
        {
          opcode: "clone",
          blockType: "command",
          text: "clone[SPRITE]",
          arguments: {
            SPRITE: {
              type: "string",
              defaultValue: "sprite1",
            },
          },
          dynamicArgsInfo: {
            // (可选)在哪个参数后面插入动态参数
            afterArg: "SPRITE",
            // 添加参数时，每次添加的数量。i为第i次点击时（从0开始）
            // paramsIncrement: (i) => (i === 0 ? 1 : 2), // 第一次增加1个参数，之后增加2个参数
            paramsIncrement: [1, 2, 2], //也可以是数组
            // 连接符可以函数指定
            joinCh: (i) => {
              if (i === 0) return "with ID";
              if (i === 1) return "data:";
              if (i % 2 === 1) return ",";
              return "=";
            },
            // 默认值可以函数指定
            defaultValues: (i) => {
              if (i === 0) return "ID";
              if (i % 2 === 1) return "key";
              return "value";
            },
          },
        },
      ],
    };
  }

  join(args) {
    console.log(args);
    // 读取动态参数（数组）
    const dynamicArgs = getDynamicArgs(args);
    return String(args.A) + String(args.B) + dynamicArgs.join("");
  }

  clone(args) {
    const dynamicArgs = getDynamicArgs(args);
    console.log(dynamicArgs);
  }

  plus(args) {
    const dynamicArgs = getDynamicArgs(args);
    return Number(args.A) + Number(args.B) + dynamicArgs.reduce((a, b) => a + Number(b), 0);
  }
}
Scratch.extensions.register(new ExtendableExample(Scratch.vm.runtime));
