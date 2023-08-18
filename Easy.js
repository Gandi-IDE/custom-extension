/*  Easy Extensions
 *  Powered By JackGu
 *  Version: v1.0
 */
(function(Scratch) {
  'use strict';
  class easy {
    getInfo() {
      return {
        id: 'easy',
        name: '简单积木',
        color1: '#00c4ff',
        docsURI: 'https://learn.ccw.site/article/6222ab3e-98fc-4456-b435-c614d9806641',
        blocks: [
          {
            opcode: 'a',
            blockType: Scratch.BlockType.REPORTER,
            text: '取[a]和[b]的[now]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '114'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '514'
              },
              now: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '最大值',
                menu: 'a'
              }
            },
            func: 'a'
          },
          {
            opcode: 'b',
            blockType: Scratch.BlockType.REPORTER,
            text: '取[a]的[b]次方',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              }
            },
            func: 'b'
          },
          {
            opcode: 'c',
            blockType: Scratch.BlockType.REPORTER,
            text: '限制[ans]在[a]和[b]之间',
            arguments: {
              ans: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '114514'
              },
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '114'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '514'
              }
            },
            func: 'c'
          },
          {
            opcode: 'd',
            blockType: Scratch.BlockType.REPORTER,
            text: '-[a]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '114514'
              }
            },
            func: 'd'
          },
          {
            opcode: 'e',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '真',
            func: 'e'
          },
          {
            opcode: 'f',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '假',
            func: 'f'
          },
          {
            opcode: 'g',
            blockType: Scratch.BlockType.REPORTER,
            text: '文本 [a]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'qwq'
              }
            },
            func: 'g'
          },
          {
            opcode: 'h',
            blockType: Scratch.BlockType.REPORTER,
            text: '换行符',
            func: 'h'
          },
          {
            opcode: 'i',
            blockType: Scratch.BlockType.REPORTER,
            text: '无限大',
            func: 'i'
          },
          {
            opcode: 'v',
            blockType: Scratch.BlockType.REPORTER,
            text: 'π',
            func: 'v'
          },
          {
            opcode: 'w',
            blockType: Scratch.BlockType.REPORTER,
            text: 'φ',
            func: 'w'
          },
          {
            opcode: 'x',
            blockType: Scratch.BlockType.REPORTER,
            text: 'e',
            func: 'x'
          },
          {
            opcode: 'j',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a] [c] [b]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '50'
              },
              c: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '≥',
                menu: 'c'
              }
            },
            func: 'j'
          },
          {
            opcode: 'k',
            blockType: Scratch.BlockType.REPORTER,
            text: '[a] [c] [b]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '&',
                menu: 'b'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            },
            func: 'k'
          },
          {
            opcode: 'l',
            blockType: Scratch.BlockType.REPORTER,
            text: '字符串 [a] 的长度',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '114514'
              }
            },
            func: 'l'
          },
          {
            opcode: 'm',
            blockType: Scratch.BlockType.REPORTER,
            text: '翻转字符串 [a]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '114514'
              }
            },
            func: 'm'
          },
          {
            opcode: 'n',
            blockType: Scratch.BlockType.REPORTER,
            text: '取字符串 [a] 的第 [b] 到 [c] 个字符',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '114514'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '6'
              }
            },
            func: 'n'
          },
          {
            opcode: 'o',
            blockType: Scratch.BlockType.REPORTER,
            text: '用字符串 [b] 分割字符串 [a] 并取得第 [c] 项',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '114514|1919810'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '|'
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              }
            },
            func: 'o'
          },
          {
            opcode: 'p',
            blockType: Scratch.BlockType.COMMAND,
            text: '复制内容到剪切板 [a]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'text'
              }
            },
            func: 'p'
          },
          {
            opcode: 'q',
            blockType: Scratch.BlockType.REPORTER,
            text: '字符串 [a] 中 [b] 出现的次数',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '114514'
              },
              b: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '1'
              }
            },
            func: 'q'
          },
          {
            opcode: 'r',
            blockType: Scratch.BlockType.REPORTER,
            text: '[a] 的Unicode编码',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'a'
              }
            },
            func: 'r'
          },
          {
            opcode: 's',
            blockType: Scratch.BlockType.REPORTER,
            text: '[a] 对应的Unicode字符',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '97'
              }
            },
            func: 's'
          },
          {
            opcode: 't',
            blockType: Scratch.BlockType.REPORTER,
            text: '用 [b] 编码字符串 [a]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '114514 1919810'
              },
              b: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Base64',
                menu: 'd'
              }
            },
            func: 't'
          },
          {
            opcode: 'u',
            blockType: Scratch.BlockType.REPORTER,
            text: '用 [b] 解码字符串 [a]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'MTE0NTE0IDE5MTk4MTA='
              },
              b: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Base64',
                menu: 'd'
              }
            },
            func: 'u'
          },
          {
            opcode: 'y',
            blockType: Scratch.BlockType.REPORTER,
            text: '[a] 的阶乘',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              }
            },
            func: 'y'
          },
          {
            opcode: 'z',
            blockType: Scratch.BlockType.REPORTER,
            text: '计算 [a] 到 [b] 之间的和',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              }
            },
            func: 'z'
          },
          {
            opcode: 'aa',
            blockType: Scratch.BlockType.REPORTER,
            text: '[a] 是否为质数',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              }
            },
            func: 'aa'
          },
          {
            opcode: 'ab',
            blockType: Scratch.BlockType.REPORTER,
            text: '[a] 和 [b] 的最大公因数',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '4'
              }
            },
            func: 'ab'
          },
          {
            opcode: 'ac',
            blockType: Scratch.BlockType.REPORTER,
            text: '[a] 和 [b] 的最小公倍数',
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '4'
              }
            },
            func: 'ac'
          },
        ],
        menus: {
          "a": {
            items: [
              "最大值",
              "最小值",
              "平均值"
            ]
          },
          "b": {
            items: [
              "&",
              "|",
              "^",
              "~",
              "<<",
              ">>",
              ">>>"
            ]
          },
          "c": {
            items: [
              "≥",
              "≤",
              "≠"
            ]
          },
          "d": {
            items: [
              "Base64",
              "Url"
            ]
          },
        }
      }
    }
    a(args) {
      if (args.now == "最大值") {
        if (args.a > args.b) {
          return args.a;
        }
        else {
          return args.b;
        }
      }
      else if (args.now == "最小值") {
        if (args.a < args.b) {
          return args.a;
        }
        else {
          return args.b;
        }
      }
      else if (args.now == "平均值") {
        return (args.a + args.b) / 2;
      }
    }
    b(args) {
      if (args.a == 0 || args.b == 0) {
        return 0;
      }
      var ans = 1;
      for (var i = 1;i <= args.b;i++) {
        ans *= args.a;
      }
      return ans;
    }
    c(args) {
      if (args.ans <= args.a) {
        return args.a;
      }
      if (args.ans >= args.b) {
        return args.b;
      }
      return args.ans;
    }
    d(args) {
      return 0 - args.a;
    }
    e() {
      return true;
    }
    f() {
      return false;
    }
    g(args) {
      return args.a;
    }
    h() {
      return "\n";
    }
    i() {
      return "Infinity";
    }
    j(args) {
      if (args.c == "≥") {
        if (args.a >= args.b) {
          return true;
        }
        else {
          return false;
        }
      }
      else if (args.c == "≤") {
        if (args.a <= args.b) {
          return true;
        }
        else {
          return false;
        }
      }
      else if (args.c == "≠") {
        if (args.a != args.b) {
          return true;
        }
        else {
          return false;
        }
      }
    }
    k(args) {
      var a = args.a,b = args.b,c = args.c;
      if (c == "&") {
        return a & b;
      }
      else if (c == "|") {
        return a | b;
      }
      else if (c == "^") {
        return a ^ b;
      }
      else if (c == "<<") {
        return a << b;
      }
      else if (c == ">>") {
        return a >> b;
      }
      else if (c == ">>>") {
        return a >>> b;
      }
    }
    l(args) {
      var a = String(args.a);
      return a.length;
    }
    m(args) {
      var a = String(args.a),b = "";
      for (var i = a.length - 1;i >= 0;i--) {
        b += a[i];
      }
      return b;
    }
    n(args) {
      var a = String(args.a),b = "";
      for (var i = args.b - 1;i < args.c;i++) {
        b += a[i];
      }
      return b;
    }
    o(args) {
      var a = String(args.a);
      var b = a.split(String(args.b));
      if ((Number(args.c) - 1) > b.length || Number(args.c) <= 0) {
        return "undefined";
      }
      return b[(Number(args.c) - 1)];
    }
    p(args) {
      var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      var element = document.createElement('textarea');
      element.style.fontSize = '12pt';
      element.style.border = '0';
      element.style.padding = '0';
      element.style.margin = '0';
      element.style.position = 'absolute';
      element.style[isRTL ? 'right' : 'left'] = '-9999px';
      let yPosition = window.pageYOffset || document.documentElement.scrollTop;
      element.style.top = `${yPosition}px`;
      element.setAttribute('readonly', '');
      element.value = String(args.a);
      document.body.appendChild(element);
      element.select();
      element.setSelectionRange(0, element.value.length);
      document.execCommand('copy');
      element.remove();
    }
    q(args) {
      var a = String(args.a),sum = 0;
      for (var i = 0;i < a.length;i++) {
        if (String(a[i]) == String(args.b)) {
          sum++;
        }
      }
      return sum;
    }
    r(args) {
      return args.a.charCodeAt(0);
    }
    s(args) {
      return String.fromCharCode(args.a);
    }
    t(args) {
      if (args.b == "Base64") {
        return btoa(String(args.a));
      }
      else if (args.b == "Url") {
        return encodeURI(String(args.a));
      }
    }
    u(args) {
      if (args.b == "Base64") {
        return atob(String(args.a));
      }
      else if (args.b == "Url") {
        return decodeURI(String(args.a));
      }
    }
    v() {
      return 3.141592653589793;
    }
    w() {
      return 1.618033988749895;
    }
    x() {
      return 2.718281828459045;
    }
    y(args) {
      var n = args.a;
      var mul = 1;
      for(var i = 1; i <= n; i++) {
          mul *= i;
      }
      return mul;
    }
    z(args) {
      var sum = 0;
      for (var i = args.a;i <= args.b;i++) {
        sum += i;
      }
      return sum;
    }
    aa(args) {
      for (let i = 2; i < args.a; i++) {
        if (args.a % i === 0) {
          return false;
        }
      }
      return true;
    }
    ab(args) {
      var n1 = args.a,n2 = args.b;
      var n1 = n1 && parseInt(n1);
      var n2 = n2 && parseInt(n2);
      if(n1 - n2 > 0) {
        [n1, n2] = [n2, n1];
      }
      var sum;
      for(var i = 0; i <= n1; i++) {
        if(n1 % i == 0 && n2 % i == 0) {
          sum = i;
        }
      }
      return sum;
    }
    ac(args) {
      var n1 = args.a,n2 = args.b;
      var n1 = n1 && parseInt(n1);
      var n2 = n2 && parseInt(n2);
      if(n1 - n2 > 0) {
        [n1, n2] = [n2, n1];
      }
      var sum;
      for(var i = 0; i <= n1; i++) {
        if(n1 % i == 0 && n2 % i == 0) {
          sum = i;
        }
      }
      return n1 * n2 / sum;
    }
  }
  Scratch.extensions.register(new easy());
})(Scratch);