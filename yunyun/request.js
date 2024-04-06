// Name: request
// ID: yunyun_request
// Description: Make requests to the broader internet.
// License: MIT AND MPL-2.0

/* generated l10n code */Scratch.translate.setup({"de":{"_Fetch":"Internetquests"},"nb":{"_request":"Hent"},"zh-cn":{"_request":"请求API"}});/* end generated l10n code */(function (Scratch) {
  "use strict";

  class request {
    getInfo() {
      return {
        id: "request",
        name: Scratch.translate("Fetch"),
        blocks: [
          {
            opcode: "get",
            blockType: Scratch.BlockType.REPORTER,
            text: "请求API [URL]",
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://www.example.com/",
              },
            },
          },
        ],
      };
    }

    get(args) {
      return Scratch.fetch(args.URL)
        .then((r) => r.text())
        .catch(() => "");
    }
  }

  Scratch.extensions.register(new Fetch());
})(Scratch);
