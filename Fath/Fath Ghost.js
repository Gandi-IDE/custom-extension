(function (Scratch) {
  "use strict";

  class CommentBlocks {
    getInfo() {
      return {
        id: "fathghosts",
        name: "Fath Ghost",
        color1: "#191e25",
        color2: "#191e25",
        color3: "#191e25",
        blocks: [
          "---" + "Hats",
          {
            opcode: "commentHat",
            blockType: Scratch.BlockType.HAT,
            text: "// [COMMENT]",
            isEdgeActivated: false,
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          "---" + "Commands",
          {
            opcode: "commentCommand",
            blockType: Scratch.BlockType.COMMAND,
            text: "// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          "---" + "Reporters",
          {
            opcode: "commentReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: "[INPUT] // [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "commentReporter2",
            blockType: Scratch.BlockType.REPORTER,
            text: "[COMMENT] // [INPUT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "commentReporter3",
            blockType: Scratch.BlockType.REPORTER,
            text: "// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          "---" + "Boolean",
          {
            opcode: "commentBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[INPUT] // [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "commentBoolean2",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[COMMENT] // [INPUT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "commentBoolean3",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "// [COMMENT]",
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          "---" + "C blocks",
          {
            opcode: "commentConditional",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "// [COMMENT]",
            branchCount: 1,
            isTerminal: true,
            blockAllThreads: false,
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
        ],
      };
    }

    commentHat() {
      // no-op
    }

    commentCommand() {
      // no-op
    }

    commentReporter(args) {
      return args.INPUT;
    }
    commentReporter2(args) {
      return args.INPUT;
    }

    commentBoolean(args) {
      return args.INPUT || false;
    }
    commentBoolean2(args) {
      return args.INPUT || false;
    }
    commentConditional(args) {
      //no-op
    }
  }
  Scratch.extensions.register(new CommentBlocks());
})(Scratch);