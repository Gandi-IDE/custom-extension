

(function (Scratch) {
    const {vm, runtime, ArgumentType, BlockType, TargetType, Cast, translate, extensions} = Scratch;
    // Note: in CCW/Cocrea, vm is not fully available for now (only used to access vm.runtime for compatibility reasons)

    translate.setup({
        zh: {
            'extensionName': '我的扩展 demo',
            'reporterBlock': '[TEXT]的第[LETTER_NUM] 个字母',
            'myReporter.TEXT_default': 'abcdefg'
        },
        en: {
            'extensionName': 'ext demo',
            'reporterBlock': 'letter [LETTER_NUM] of [TEXT]',
            'myReporter.TEXT_default': 'abcdefg'
        }
    });
    class MyExtension {
        constructor (_runtime) {
            /**
            * Store this for later communication with the Scratch VM runtime.
            * @type {Runtime}
            */
            this._runtime = _runtime;
        }

        /**
         * @return {object} This extension's metadata.
         */
        getInfo () {

            const reportBlock = {
                /* Required: the machine-readable name of this operation.
                   This will appear in project JSON. */
                opcode: 'getLetterByIndexFromText', // becomes 'someBlocks.myReporter'
        
                /* Required: the kind of block we're defining, from a predefined list.
                   Fully supported block types:
                     BlockType.BOOLEAN - same as REPORTER but returns a Boolean value
                     BlockType.COMMAND - a normal command block, like "move {} steps"
                     BlockType.HAT - starts a stack if its value changes from falsy to truthy ("edge triggered")
                     BlockType.REPORTER - returns a value, like "direction"
                   Block types in development or for internal use only:
                     BlockType.BUTTON - place a button in the block palette
                     BlockType.CONDITIONAL - control flow, like "if {}" or "if {} else {}"
                       A CONDITIONAL block may return the one-based index of a branch to
                       run, or it may return zero/falsy to run no branch.
                     BlockType.EVENT - starts a stack in response to an event (full spec TBD)
                     BlockType.LOOP - control flow, like "repeat {} {}" or "forever {}"
                       A LOOP block is like a CONDITIONAL block with two differences:
                       - the block is assumed to have exactly one child branch, and
                       - each time a child branch finishes, the loop block is called again. */
                blockType: BlockType.REPORTER,
        
                /* Required for CONDITIONAL blocks, ignored for others: the number of
                   child branches this block controls. An "if" or "repeat" block would
                   specify a branch count of 1; an "if-else" block would specify a
                   branch count of 2.*/
        
                //    branchCount: 0,
        
                /* Optional, default false: whether or not this block ends a stack.
                   The "forever" and "stop all" blocks would specify true here. */
        
                //    terminal: true,
        
                /* Optional, default false: whether or not to block all threads while
                   this block is busy. This is for things like the "touching color"
                   block in compatibility mode, and is only needed if the VM runs in a
                   worker. We might even consider omitting it from extension docs... */
        
                //    blockAllThreads: false,
        
                /* Required: the human-readable text on this block, including argument
                   placeholders. Argument placeholders should be in [MACRO_CASE] and
                   must be [ENCLOSED_WITHIN_SQUARE_BRACKETS]. */
                text: translate({id: 'reporterBlock'}),
        
                /* Required: describe each argument.
                   Argument order may change during translation, so arguments are
                   identified by their placeholder name. In those situations where
                   arguments must be ordered or assigned an ordinal, such as interaction
                   with Scratch Blocks, arguments are ordered as they are in the default
                   translation (probably English). */
                arguments: {
                    /* Required: the ID of the argument, which will be the name in the
                       args object passed to the implementation function. */
                    LETTER_NUM: {
                        /* Required: type of the argument / shape of the block input */
                        type: ArgumentType.NUMBER,
        
                        /* Optional: the default value of the argument */
                        defaultValue: 1
                    },
        
                    /* Required: the ID of the argument, which will be the name in the
                       args object passed to the implementation function. */
                    TEXT: {
                        /* Required: type of the argument / shape of the block input */
                        type: ArgumentType.STRING,
        
                        /* Optional: the default value of the argument */
                        defaultValue: translate({id: 'myReporter.TEXT_default'})
                    }
                }
        
                /* Optional: the function implementing this block.
                   If absent, assume 'func' is the same as 'opcode'.*/
                
                //    func: 'myReporter',
        
                /* Optional: list of target types for which this block should appear.
                   If absent, assume it applies to all builtin targets -- that is:
                   [TargetType.SPRITE, TargetType.STAGE] */
                
                //    filter: [TargetType.SPRITE],
            };
        
            return {
                /* Required: the machine-readable name of this extension.
                   Will be used as the extension's namespace.
                   Allowed characters are those matching the regular expression [w-]: A-Z, a-z, 0-9, and hyphen ("-").
                   WARNING: "_" is not allowed and may cause errors.
                   */
                id: 'myExtension',
        
                /* override the default extension block colors. */
                color1: '#FF8C1A',
                color2: '#DB6E00',
        
                /* Optional: the human-readable name of this extension as string.
                   This and any other string to be displayed in the Scratch UI may either be
                   a string or a call to 'translate'; a plain string will not be
                   translated whereas a call to 'translate' will connect the string
                   to the translation map (see below). The 'translate' call is
                   similar to 'translate' from 'react-intl' in form, but will actually
                   call some extension support code to do its magic. For example, we will
                   internally namespace the messages such that two extensions could have
                   messages with the same ID without colliding.
                   See also: https://github.com/yahoo/react-intl/wiki/API#translate */
                name: translate({id: 'extensionName'}),
        
                /* Optional: URI for a block icon, to display at the edge of each block for this
                   extension. Data URI OK.
                   size  40x40, 1:1 aspect ratio
                */

                // blockIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',
        
                /* Optional: URI for an icon to be displayed in the blocks category menu.
                   If not present, the menu will display the block icon, if one is present.
                   Otherwise, the category menu shows its default filled circle.
                   Data URI OK.
                   size  40x40, 1:1 aspect ratio
                */

                // menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',
        
                /* Optional: Link to documentation content for this extension.
                   replace it with your document link */

                // docsURI: 'https://getgandi.com/',
        
                /* Required: the list of blocks implemented by this extension,
                   in the order intended for display. */
                blocks: [reportBlock],
        
                /* Optional: define extension-specific menus here.*/
                
                menus: {
                    // The examples above are shorthand for setting only the 'items' property in this full form:
                    menuA: {
                        // This flag makes a "droppable" menu: the menu will allow dropping a reporter in for the input.
                        acceptReporters: true,
        
                        // The 'item' property may be an array or function name as in previous menu examples.
                        // static menu use array
                        // dynamic menu use function name string
                        items: [/* ...*/] || 'getItemsForMenu'
                    }
                }
            };
        }

        // dynamic menu it generator function
        getItemsForMenu () {
            return [{text: '1', value: 1}];
        }

        /**
             * Implement myReporter.
             * @param {object} args - the block's arguments.
             * @property {string} MY_ARG - the string value of the argument.
             * @returns {string} a string which includes the block argument value.
             */
        getLetterByIndexFromText (args) {
            const {LETTER_NUM = 0, TEXT = ''} = args;
            const idx = Cast.toNumber(LETTER_NUM);
            const text = Cast.toString(TEXT);
            if (idx < 0 || idx >= text.length) {
                return ''; // Return an empty string if the index is out of bounds
            }
            return text.charAt(idx);
        }
    }

    extensions.register(new MyExtension(runtime));

}(Scratch));

