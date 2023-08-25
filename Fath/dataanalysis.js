(function (Scratch) {
  "use strict";
  class dataAnalysis {
    getInfo() {
      return {
        id: "qxsckdataanalysis",
        name: "qxsck's Analysis",
        color1: "#2d8cff",
        color2: "#196cd1",
        color3: "#2d8cff",
        blockIconURI: "data:image/png;base64,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",
        blocks: [
          "---" + "✨ Made by qxsck",
          {
            opcode: "average",
            blockType: Scratch.BlockType.REPORTER,
            text: "average of [NUMBERS]",
            arguments: {
              NUMBERS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1 2 3 4 5",
              },
            },
          },
          {
            opcode: "maximum",
            blockType: Scratch.BlockType.REPORTER,
            text: "maximum of [NUMBERS]",
            arguments: {
              NUMBERS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1 2 3 4 5",
              },
            },
          },
          {
            opcode: "minimum",
            blockType: Scratch.BlockType.REPORTER,
            text: "minimum of [NUMBERS]",
            arguments: {
              NUMBERS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1 2 3 4 5",
              },
            },
          },
          {
            opcode: "median",
            blockType: Scratch.BlockType.REPORTER,
            text: "median of [NUMBERS]",
            arguments: {
              NUMBERS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1 2 3 4 5",
              },
            },
          },
          {
            opcode: "mode",
            blockType: Scratch.BlockType.REPORTER,
            text: "mode of [NUMBERS]",
            arguments: {
              NUMBERS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1 2 2 3 4 5",
              },
            },
          },
          {
            opcode: "variance",
            blockType: Scratch.BlockType.REPORTER,
            text: "variance of [NUMBERS]",
            arguments: {
              NUMBERS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "1 2 3 4 5",
              },
            },
          },
        ],
      };
    }

    average(args) {
      const numbers = args.NUMBERS
        .split(" ")
        .map(Number);
      const sum = numbers.reduce((a, b) => a + b, 0);
      return sum / numbers.length;
    }

    maximum(args) {
      const numbers = args.NUMBERS
        .split(" ")
        .map(Number);
      return Math.max(...numbers);
    }

    minimum(args) {
      const numbers = args.NUMBERS
        .split(" ")
        .map(Number);
      return Math.min(...numbers);
    }

    median(args) {
      const numbers = args.NUMBERS
        .split(" ")
        .map(Number);
      const sorted = numbers.sort((a, b) => a - b);
      const middle = Math.floor(sorted.length / 2);
      if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
      } else {
        return sorted[middle];
      }
    }

    mode(args) {
      const numbers = args.NUMBERS
        .split(" ")
        .map(Number);
      const counts = new Map();
      let maxCount = 0;
      let mode = null;
      for (const number of numbers) {
        let count = counts.get(number) || 0;
        count++;
        counts.set(number, count);
        if (count > maxCount) {
          maxCount = count;
          mode = number;
        }
      }
      return mode;
    }

    variance(args) {
      const numbers = args.NUMBERS
        .split(" ")
        .map(Number);
      const mean = this.average(args);
      const squaredDifferences = numbers.map((x) => (x - mean) ** 2);
      const sum = squaredDifferences.reduce((a, b) => a + b, 0);
      return sum / numbers.length;
    }
  }

  Scratch.extensions.register(new dataAnalysis());
})(Scratch);