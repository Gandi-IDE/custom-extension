(function(Scratch) {
  'use strict';

  class Network {
    getInfo () {
      return {
        id: 'HelloWorldext',
        name: 'HelloWorld的扩展',
        blocks: [
          {
            opcode: 'get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'fetch [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/hello.txt'
              }
            }
          }
        ]
      };
    }

    get (args) {
      return fetch(args.URL)
        .then(r => r.text())
        .catch(() => '');
    }
  }

  Scratch.extensions.register(new Network());
})(Scratch);
