// 作者: 微调控制器@CCW
import { wtkzq_complex_icon, wtkzq_complex_pic } from './assets/index.js'
const extensionId = 'wtkzq.complex';

class Complex {
    constructor(runtime) {
      this.runtime = runtime;
      this._formatMessage = runtime.getFormatMessage({
        'zh-cn': {
          'complex.name': '复数',
          'complex.real': '[A]的实部',
          'complex.imag': '[A]的虚部',
          'complex.round': '四舍五入[A]',
          'complex.func': '[FUNC] [A]',
          'complex.abs': '绝对值',
          'complex.floor': '向下取整',
          'complex.ceiling': '向上取整',
          'complex.sqrt': '平方根',
          'complex.convertAbj': '将[A]转换为a+bj形式',
        },
  
        en: {
          'complex.name': 'Complex',
          'complex.real': 'the real part of [A]',
          'complex.imag': 'the imag part of [A]',
          'complex.round': 'round [A]',
          'complex.func': '[FUNC] of [A]',
          'complex.abs': 'abs',
          'complex.floor': 'floor',
          'complex.ceiling': 'ceiling',
          'complex.sqrt': 'sqrt',
          'complex.convertAbj': 'convert [A] to a+bj',
        },
      });
    }
  
    formatMessage(id) {
      return this._formatMessage({
        id,
        default: id,
        description: id,
      });
    }
  
    getInfo() {
      return {
        id: extensionId,
        name: this.formatMessage('complex.name'),
        blockIconURI: wtkzq_complex_icon,
        menuIconURI: wtkzq_complex_icon,
        color1: '#565656',
        color2: '#404040',
        color3: '#393939',
        docsURI: 'https://learn.ccw.site/article/d0752e24-de42-4583-a357-59e36973c0a9',
        blocks: [
          {
            opcode: 'j',
            blockType: Scratch.BlockType.REPORTER,
            text: '[NUM]j',
            arguments: {
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
              },
            },
          },
          {
            opcode: 'addJ',
            blockType: Scratch.BlockType.REPORTER,
            text: '[REAL]+[IMAG]j',
            arguments: {
              REAL: {
                type: Scratch.ArgumentType.NUMBER,
              },
              IMAG: {
                type: Scratch.ArgumentType.NUMBER,
              },
            },
          },
          {
            opcode: 'real',
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('complex.real'),
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'imag',
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('complex.imag'),
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'add',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A]+[B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
              },
              B: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'sub',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A]-[B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
              },
              B: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'mul',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A]*[B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
              },
              B: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'div',
            blockType: Scratch.BlockType.REPORTER,
            text: '[A]/[B]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
              },
              B: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'round',
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('complex.round'),
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'func',
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('complex.func'),
            arguments: {
              FUNC: {
                type: Scratch.ArgumentType.STRING,
                menu: 'FUNC',
              },
              A: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: 'convertAbj',
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('complex.convertAbj'),
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
        ],
        menus: {
          FUNC: {
            items: [
              {
                text: this.formatMessage('complex.abs'),
                value: 'abs',
              },
              {
                text: this.formatMessage('complex.floor'),
                value: 'floor',
              },
              {
                text: this.formatMessage('complex.ceiling'),
                value: 'ceiling',
              },
              {
                text: this.formatMessage('complex.sqrt'),
                value: 'sqrt',
              },
            ],
            acceptReporters: false,
          },
        },
      };
    }
  
    j({ NUM }) {
      NUM = Scratch.Cast.toNumber(NUM);
      return `0,${NUM}`;
    }
  
    addJ({ REAL, IMAG }) {
      REAL = Scratch.Cast.toNumber(REAL);
      IMAG = Scratch.Cast.toNumber(IMAG);
      return `${REAL},${IMAG}`;
    }
  
    real({ A }) {
      A = Scratch.Cast.toString(A);
      return this._to_complex(A)[0];
    }
  
    imag({ A }) {
      A = Scratch.Cast.toString(A);
      return this._to_complex(A)[1];
    }
  
    add({ A, B }) {
      A = Scratch.Cast.toString(A);
      B = Scratch.Cast.toString(B);
      A = this._to_complex(A);
      B = this._to_complex(B);
      return this._to_comma([A[0] + B[0], A[1] + B[1]]);
    }
  
    sub({ A, B }) {
      A = Scratch.Cast.toString(A);
      B = Scratch.Cast.toString(B);
      A = this._to_complex(A);
      B = this._to_complex(B);
      return this._to_comma([A[0] - B[0], A[1] - B[1]]);
    }
  
    _to_complex(A) {
      if (A.includes(',')) {
        return A.split(',').map(Number);
      }
      return [Number(A), 0];
    }
  
    _to_comma(A) {
      return `${A[0]},${A[1]}`;
    }
  
    mul({ A, B }) {
      A = Scratch.Cast.toString(A);
      B = Scratch.Cast.toString(B);
      A = this._to_complex(A);
      B = this._to_complex(B);
      return this._to_comma([A[0] * B[0] - A[1] * B[1], A[1] * B[0] + A[0] * B[1]]);
    }
  
    div({ A, B }) {
      A = Scratch.Cast.toString(A);
      B = Scratch.Cast.toString(B);
      A = this._to_complex(A);
      B = this._to_complex(B);
      return this._to_comma([
        (A[0] * B[0] + A[1] * B[1]) / (B[0] * B[0] + B[1] * B[1]),
        (A[1] * B[0] - A[0] * B[1]) / (B[0] * B[0] + B[1] * B[1]),
      ]);
    }
  
    func({ FUNC, A }) {
      A = Scratch.Cast.toString(A);
      A = this._to_complex(A);
      if (FUNC === 'abs') return Math.sqrt(A[0] * A[0] + A[1] * A[1]);
      if (FUNC === 'floor') return this._to_comma(A.map(Math.floor));
      if (FUNC === 'ceiling') return this._to_comma(A.map(Math.ceil));
      if (FUNC === 'sqrt')
        if (A[1] == 0)
          if (A[0] >= 0) return this._to_comma([Math.sqrt(A[0]), 0]);
          else return this._to_comma([0, Math.sqrt(-A[0])]);
        else return NaN;
    }
  
    round({ A }) {
      A = Scratch.Cast.toString(A);
      return this._to_comma(this._to_complex(A).map(Math.round));
    }
  
    convertAbj({ A }) {
      A = Scratch.Cast.toString(A);
      A = this._to_complex(A);
      if (A[1] < 0) return `${A[0]}${A[1]}j`;
      return `${A[0]}+${A[1]}j`;
    }
  }

window.tempExt = {
    Extension: Complex,
    info: {
      name: 'complex.name',
      description: 'complex.description',
      extensionId,
      iconURL: wtkzq_complex_pic,
      insetIconURL: wtkzq_complex_icon,
      featured: true,
      disabled: false,
      docsURI: 'https://learn.ccw.site/article/d0752e24-de42-4583-a357-59e36973c0a9',
      collaborator: '微调控制器@CCW',
      collaboratorList: [
        {
          collaborator: '微调控制器@CCW',
          collaboratorURL:
          'https://www.ccw.site/student/6231db9f76f82e3c2a3d428e',
        },
      ]
    },
    l10n: {
      'zh-cn': {
        'complex.name': '复数',
        'complex.description': '复数运算',
      },
      en: {
        'complex.name': 'Complex',
        'complex.description': 'Complex operation',
      },
    },
  }
