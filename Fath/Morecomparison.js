// Name: More Comparisons
// ID: nonameawacomparisons
// Description: More comparison blocks.
// By: NOname-awa
  const quadrilateral =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3Ny4wMjc4MSIgaGVpZ2h0PSI1NC44MDY1NCIgdmlld0JveD0iMCwwLDc3LjAyNzgxLDU0LjgwNjU0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjUwNDMsLTE1Mi4yMTk3MykiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjI4LjE3ODc4LDE1NS40NzM3NGw0Ni40MDEwMywxOS44ODYxNmwtMjIuNTM3NjQsMjkuMTY2MzZoLTQ2LjYyMTk5eiIvPjwvZz48L2c+PC9zdmc+";
const formatMessage = Scratch.translate;
  class MoreComparisons {
    getInfo() {
      return {
        id: "nonameawacomparisons",
        name: "NOname compr",
        color1: "#00a889",
        color2: "#1e8c76",
        color3: "#1e8c76",
        blockIconURI: "data:image/png;base64,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",
        blocks: [
          "---" + "🌟Made by NOname-awa from Turbowarp",
          {
            opcode: "true",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "true",
            arguments: {},
          },
          {
            opcode: "false",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "false",
            arguments: {},
          },
          {
            opcode: "boolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "booleanToInt",
            blockType: Scratch.BlockType.REPORTER,
            text: "[a]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          "---",
          {
            opcode: "equal",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a] ⩵ [b]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "A",
              },
              b: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "a",
              },
            },
          },
          {
            opcode: "equalNegative",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a] =- [b]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "5",
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "-5",
              },
            },
          },
          {
            opcode: "equalPlusMinus",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a] =± [b]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "5",
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "-5",
              },
            },
          },
          {
            opcode: "notEqual",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a] ≠ [b]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "\n",
              },
              b: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "\n",
              },
            },
          },
          {
            opcode: "almostEqual2n",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a] ≈ [b]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "5.5",
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "6",
              },
            },
          },
          {
            opcode: "almostEqual3n",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a] ≈ [b] ± [c]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "5",
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "6",
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1",
              },
            },
          },
          {
            opcode: "xor",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a] ^ [b]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
              b: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          "---",
          {
            opcode: "equalOrGreater",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a] ≥ [b]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "\n",
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "50",
              },
            },
          },
          {
            opcode: "equalOrLess",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a] ≤ [b]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "\n",
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "50",
              },
            },
          },
          {
            opcode: "between",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a] < [b] < [c]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "\n",
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "\n",
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "\n",
              },
            },
          },
          {
            opcode: "betweenEqual",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a] ≤ [b] ≤ [c]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "\n",
              },
              b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "\n",
              },
              c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "\n",
              },
            },
          },
          "---",
          {
            opcode: "vertical",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[a] ⊥ [b]",
            arguments: {
              a: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: "0",
              },
              b: {
                type: Scratch.ArgumentType.ANGLE,
                defaultValue: "90",
              },
            },
          },
          {
            opcode: "segment_one",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "⎵ ([x1],[y1]) ([x2],[y2]) = [n]",
            arguments: {
              x1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "-100",
              },
              y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              x2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },

              n: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "100",
              },
            },
          },
          {
            opcode: "segment_two",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "⎵ ([x11],[y11]) ([x12],[y12]) = ⎵ ([x21],[y21]) ([x22],[y22])",
            arguments: {
              x11: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "-100",
              },
              y11: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              x12: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              y12: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "-100",
              },

              x21: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "100",
              },
              y21: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              x22: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              y22: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "100",
              },
            },
          },
          {
            opcode: "segment",
            blockType: Scratch.BlockType.REPORTER,
            text: "⎵ ([x1],[y1]) ([x2],[y2])",
            arguments: {
              x1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "-100",
              },
              y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              x2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
            },
          },
          "---",
          {
            opcode: "Squadrilateral_one",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[IMAGE] ([x1],[y1]) ([x2],[y2]) ([x3],[y3]) ([x4],[y4]) = [n]",
            arguments: {
              x1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "10",
              },
              x2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "10",
              },
              y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "10",
              },
              x3: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "10",
              },
              y3: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              x4: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              y4: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },

              n: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "100",
              },

              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: quadrilateral,
                flipRTL: true,
              },
            },
          },
          {
            opcode: "Squadrilateral",
            blockType: Scratch.BlockType.REPORTER,
            text: "[IMAGE] ([x1],[y1]) ([x2],[y2]) ([x3],[y3]) ([x4],[y4])",
            arguments: {
              x1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "10",
              },
              x2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "10",
              },
              y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "10",
              },
              x3: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "10",
              },
              y3: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              x4: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },
              y4: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0",
              },

              IMAGE: {
                type: Scratch.ArgumentType.IMAGE,
                dataURI: quadrilateral,
                flipRTL: true,
              },
            },
          },
        ],
      };
    }
    true() {
      return true;
    }
    false() {
      return false;
    }
    boolean(args) {
      return Scratch.Cast.toBoolean(args.a);
    }
    booleanToInt(args) {
      if (Scratch.Cast.toBoolean(args.a)) {
        return 1;
      }
      return 0;
    }
    equal(args) {
      return args.a == args.b;
    }
    equalNegative(args) {
      if (isNaN(args.a) || isNaN(args.b)) {
        return false;
      } else {
        return args.a == 0 - args.b;
      }
    }
    equalPlusMinus(args) {
      if (isNaN(args.a) || isNaN(args.b)) {
        return false;
      } else {
        return args.a == 0 - args.b || args.a == args.b;
      }
    }
    almostEqual2n(args) {
      return Math.round(args.a) == Math.round(args.b);
    }
    almostEqual3n(args) {
      return Math.abs(args.a - args.b) <= args.c;
    }
    between(args) {
      return args.a < args.b && args.b < args.c;
    }
    betweenEqual(args) {
      return args.a <= args.b && args.b <= args.c;
    }
    notEqual(args) {
      return args.a != args.b;
    }
    xor(args) {
      return Scratch.Cast.toBoolean(args.a) !== Scratch.Cast.toBoolean(args.b);
    }
    equalOrGreater(args) {
      return args.a >= args.b;
    }
    equalOrLess(args) {
      return args.a <= args.b;
    }
    vertical(args) {
      if (isNaN(args.a) || isNaN(args.b)) {
        return false;
      } else {
        return (args.a - (args.b - 90)) % 180 == 0;
      }
    }
    segment_one(args) {
      return (
        Math.round(
          Math.sqrt(
            Math.pow(args.x1 - args.x2, 2) + Math.pow(args.y1 - args.y2, 2)
          )
        ) == args.n
      );
    }
    segment_two(args) {
      return (
        Math.round(
          Math.sqrt(
            Math.pow(args.x11 - args.x12, 2) + Math.pow(args.y11 - args.y12, 2)
          )
        ) ==
        Math.round(
          Math.sqrt(
            Math.pow(args.x21 - args.x22, 2) + Math.pow(args.y21 - args.y22, 2)
          )
        )
      );
    }
    segment(args) {
      return Math.sqrt(
        Math.pow(args.x1 - args.x2, 2) + Math.pow(args.y1 - args.y2, 2)
      );
    }
    Squadrilateral_one(args) {
      let points = [
        [args.x1, args.y1],
        [args.x2, args.y2],
        [args.x3, args.y3],
        [args.x4, args.y4],
      ];
      let area = 0;
      let n = points.length;
      for (let i = 0; i < n; i++) {
        let x1 = points[i][0];
        let y1 = points[i][1];
        let x2 = points[(i + 1) % n][0];
        let y2 = points[(i + 1) % n][1];
        area += x1 * y2;
        area -= x2 * y1;
      }
      area = Math.abs(area) / 2;
      return Math.round(area) == args.n;
    }
    Squadrilateral(args) {
      let points = [
        [args.x1, args.y1],
        [args.x2, args.y2],
        [args.x3, args.y3],
        [args.x4, args.y4],
      ];
      let area = 0;
      let n = points.length;
      for (let i = 0; i < n; i++) {
        let x1 = points[i][0];
        let y1 = points[i][1];
        let x2 = points[(i + 1) % n][0];
        let y2 = points[(i + 1) % n][1];
        area += x1 * y2;
        area -= x2 * y1;
      }
      area = Math.abs(area) / 2;
      return area;
    }
  }
  
  window.tempExt = {
    Extension: MoreComparisons,
    info: {
      name: 'comparison.extensionName',
      description: 'comparison.description',
      extensionId: 'nonameawacomparisons',
      iconURL: 'https://fath11.github.io/custom-extension/Fath/banners/CommentBlocks.png',
      insetIconURL: 'https://fath11.github.io/custom-extension/Fath/assets/lilyComment.png ',
      featured: true,
      disabled: false,
      collaborator: 'NOname-awa@TW',
    },
    l10n: {
      'zh-cn': {
        'comparison.extensionName': "More Comparisons",
        'comparison.description': '更多比较块。',
      },
      'en': {
        'comparison.extensionName': "More Comparisons",
        'comparison.description': 'More comparison blocks.',
      },
    },
  };