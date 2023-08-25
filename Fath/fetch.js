(function (Scratch) {
  "use strict";

  class Fetch {
    getInfo() {
      return {
        id: "fathfetch",
        name: "Fath Fetch",
        color1: "#C23373",
        color2: "#C23373",
        color3: "#C23373",
        blockIconURI: "data:image/png;base64,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",
        blocks: [
          {
            opcode: "fetch",
            blockType: Scratch.BlockType.REPORTER,
            text: "Fetch [URL]",
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://random-word-api.herokuapp.com/word",
              },
            },
          },
          {
            opcode: "define",
            blockType: Scratch.BlockType.REPORTER,
            text: "definition for word [WORD]",
            arguments: {
              WORD: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "cat",
              },
            },
          },
        ],
      };
    }

    fetch(args) {
      return fetch(args.URL)
        .then((r) => r.text())
        .catch(() => "");
    }
    define(args) {
      var url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
      return fetch(url + args.WORD)
        .then((r) => r.text())
        .catch(() => "");
    }
  }
  Scratch.extensions.register(new Fetch());
})(Scratch);