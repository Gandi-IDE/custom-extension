class Introvert_blocks {
  getInfo() {
    return {
      // Required: the machine-readable name of this extension.
      // Will be used as the extension's namespace. Must not contain a '.' character.
      id: 'introvertblocks',

      // Optional: the human-readable name of this extension as string.
      // This and any other string to be displayed in the Scratch UI may either be
      // a string or a call to `intlDefineMessage`; a plain string will not be
      // translated whereas a call to `intlDefineMessage` will connect the string
      // to the translation map (see below). The `intlDefineMessage` call is
      // similar to `defineMessages` from `react-intl` in form, but will actually
      // call some extension support code to do its magic. For example, we will
      // internally namespace the messages such that two extensions could have
      // messages with the same ID without colliding.
      // See also: https://github.com/yahoo/react-intl/wiki/API#definemessages
      name: 'Fath Introvert Blocks',
      // block color
      color1: '#191e25',
      // Optional: URI for an icon for this extension. Data URI OK.
      menuIconURI:
        '<img src="data:image/png;base64,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" alt="" />',
      
      blockIconURI: '<img src="data:image/png;base64,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" alt="" />',

      // Optional: Link to documentation content for this extension.
      // If not present, offer no link.
      docsURI: 'https://cocrea.world',

      // Required: the list of blocks implemented by this extension,
      // in the order intended for display.
      // Scratch object is pera
      blocks: [
        {
          opcode: 'example-noop',
          blockType: Scratch.BlockType.COMMAND,
          blockAllThreads: false,
          text: ' ',
          func: 'noop',
        },
        {
          opcode: 'example-conditional',
          blockType: Scratch.BlockType.CONDITIONAL,
          branchCount: 4,
          isTerminal: true,
          blockAllThreads: false,
          text: 'choose [BRANCH]',
          arguments: {
            BRANCH: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
          },
          func: 'noop',
        },
        {
          // Required: the machine-readable name of this operation.
          // This will appear in project JSON. Must not contain a '.' character.
          opcode: 'myReporter', // becomes 'someBlocks.myReporter'

          // Required: the kind of block we're defining, from a predefined list:
          // 'command' - a normal command block, like "move {} steps"
          // 'reporter' - returns a value, like "direction"
          // 'Boolean' - same as 'reporter' but returns a Boolean value
          // 'hat' - starts a stack if its value is truthy
          // 'conditional' - control flow, like "if {}" or "repeat {}"
          // A 'conditional' block may return the one-based index of a branch
          // to run, or it may return zero/falsy to run no branch. Each time a
          // child branch finishes, the block is called again. This is only a
          // slight change to the current model for control flow blocks, and is
          // also compatible with returning true/false for an "if" or "repeat"
          // block.
          // TODO: Consider Blockly-like nextStatement, previousStatement, and
          // output attributes as an alternative. Those are more flexible, but
          // allow bad combinations.
          blockType: Scratch.BlockType.REPORTER,

          // Required for conditional blocks, ignored for others: the number of
          // child branches this block controls. An "if" or "repeat" block would
          // specify a branch count of 1; an "if-else" block would specify a
          // branch count of 2.
          // TODO: should we support dynamic branch count for "switch"-likes?
          branchCount: 0,

          // Optional, default false: whether or not this block ends a stack.
          // The "forever" and "stop all" blocks would specify true here.
          isTerminal: true,

          // Optional, default false: whether or not to block all threads while
          // this block is busy. This is for things like the "touching color"
          // block in compatibility mode, and is only needed if the VM runs in a
          // worker. We might even consider omitting it from extension docs...
          blockAllThreads: false,

          // Required: the human-readable text on this block, including argument
          // placeholders. Argument placeholders should be in [MACRO_CASE] and
          // must be [ENCLOSED_WITHIN_SQUARE_BRACKETS].
          text: 'letter [LETTER_NUM] of [TEXT]',

          // Required: describe each argument.
          // Note that this is an array: the order of arguments will be used
          arguments: {
            // Required: the ID of the argument, which will be the name in the
            // args object passed to the implementation function.
            LETTER_NUM: {
              // Required: type of the argument / shape of the block input
              type: Scratch.ArgumentType.NUMBER,

              // Optional: the default value of the argument
              defaultValue: 1,
            },

            // Required: the ID of the argument, which will be the name in the
            // args object passed to the implementation function.
            TEXT: {
              // Required: type of the argument / shape of the block input
              type: Scratch.ArgumentType.STRING,

              // Optional: the default value of the argument
              defaultValue: 'text',
            },
          },

          // Optional: a string naming the function implementing this block.
          // If this is omitted, use the opcode string.
          func: 'myReporter',

          // Optional: list of target types for which this block should appear.
          // If absent, assume it applies to all builtin targets -- that is:
          // ['sprite', 'stage']
          filter: ['someBlocks.wedo2', 'sprite', 'stage'],
        },
        {
          opcode: 'calcPointXOnCircle',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Calc point X on circle with radius [RADIUS], angle of [ANGLE] degree and center on x [X] and y[Y] ',
          arguments: {
            // Required: the ID of the argument, which will be the name in the
            // args object passed to the implementation function.
            RADIUS: {
              // Required: type of the argument / shape of the block input
              type: Scratch.ArgumentType.NUMBER,

              // Optional: the default value of the argument
              defaultValue: 100,
            },

            // Required: the ID of the argument, which will be the name in the
            // args object passed to the implementation function.
            ANGLE: {
              // Required: type of the argument / shape of the block input
              type: Scratch.ArgumentType.NUMBER,

              // Optional: the default value of the argument
              defaultValue: '45',
            },
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0',
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0',
            },
          },
          func: 'calc_point_x_on_circle',
        },
        {
          opcode: 'example-hat',
          blockType: Scratch.BlockType.HAT,
          text: 'after forever',
          func: 'returnFalse',
        },
        {
          // Another block...
        },
      ],

      // Optional: define extension-specific menus here.
      menus: {
        // Required: an identifier for this menu, unique within this extension.
        menuA: [
          // Static menu: list items which should appear in the menu.
          {
            // Required: the value of the menu item when it is chosen.
            value: 'itemId1',

            // Optional: the human-readable label for this item.
            // Use `value` as the text if this is absent.
            text: 'Item One',
          },

          // The simplest form of a list item is a string which will be used as
          // both value and text.
          'itemId2',
        ],

        // Dynamic menu: a string naming a function which returns an array as above.
        // Called each time the menu is opened.
        menuB: 'getItemsForMenuB',
      },

      // Optional: translations
      translation_map: {
        'zh-cn': {
          'someBlocks.name': 'CCW Lab',
          'someBlocks.setValue': '设置[KEY]=[VALUE]',
          'someBlocks.getValue': '获取[KEY]的值',
        },
        en: {
          'someBlocks.name': 'CCW Lab',
          'someBlocks.setValue': 'set[KEY]=[VALUE]',
          'someBlocks.getValue': 'get[KEY]',
        },
      },

      // Optional: list new target type(s) provided by this extension.
      targetTypes: [
        'wedo2', // automatically transformed to 'someBlocks.wedo2'
        'speech', // automatically transformed to 'someBlocks.speech'
      ],
    }
  }
  noop () {}
  calc_point_x_on_circle () {
    var info = this.getInfo();
    console.log(info.blocks[3].arguments.X);
    console.log(info.blocks[3].arguments.RADIUS);
    console.log(info.blocks[3].arguments.ANGLE);
    return info.blocks[3].arguments.X + info.blocks[3].arguments.RADIUS * Math.cos(info.blocks[3].arguments.ANGLE)
  }
  returnFalse  () {
    return false
  }
}

/** dont forget register your extension to Scratch */
Scratch.extensions.register(new Circletetik())
