// Name: More Comparisons
// ID: nonameawacomparisons
// Description: More comparison blocks.
// By: NOname-awa
const quadrilateral =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3Ny4wMjc4MSIgaGVpZ2h0PSI1NC44MDY1NCIgdmlld0JveD0iMCwwLDc3LjAyNzgxLDU0LjgwNjU0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjUwNDMsLTE1Mi4yMTk3MykiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjI4LjE3ODc4LDE1NS40NzM3NGw0Ni40MDEwMywxOS44ODYxNmwtMjIuNTM3NjQsMjkuMTY2MzZoLTQ2LjYyMTk5eiIvPjwvZz48L2c+PC9zdmc+";
const cover = 
"https://extensions.turbowarp.org/images/NOname-awa/more-comparisons.svg";
const icon =
"data:image/png;base64,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";

class MoreComparisons {
getInfo() {
  return {
    id: "nonameawacomparisons",
    name: "More comparisons",
    color1: "#00a889",
    color2: "#1e8c76",
    color3: "#1e8c76",
    blockIconURI: icon,
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
  return args.a < Scratch.Cast.toNumber(args.b) && Scratch.Cast.toNumber(args.b) < args.c;
}
betweenEqual(args) {
  return args.a <= Scratch.Cast.toNumber(args.b) && Scratch.Cast.toNumber(args.b) <= args.c;
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
  iconURL: cover,
  insetIconURL: icon,
  featured: true,
  disabled: false,
  collaborator: 'NOname-awa@TW',
  collaboratorURL: 'https://github.com/NOname-awa',
  collaboratorList: [
        {
            collaborator: 'NOname-awa@TW',
            collaboratorURL: 'https://github.com/NOname-awa'
        },
    ]
},
l10n: {
  'zh-cn': {
    'comparison.extensionName': "更多比较",
    'comparison.description': '更多比较相关的积木',
  },
  'en': {
    'comparison.extensionName': "More Comparisons",
    'comparison.description': 'More comparison blocks.',
  },
},
};
