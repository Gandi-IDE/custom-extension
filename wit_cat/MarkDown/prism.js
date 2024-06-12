/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+c+csharp+cpp+css-extras+glsl+ini+json+markup-templating+php+python&plugins=autolinker+inline-color+autoloader */
/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
    ? window   // if in browser
    : (
        (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
            ? self // if in worker
            : {}   // if in node js
    );

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

    // Private helper vars
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;

    // The grammar object for plaintext
    var plainTextGrammar = {};


    var _ = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: _self.Prism && _self.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
            encode: function encode(tokens) {
                if (tokens instanceof Token) {
                    return new Token(tokens.type, encode(tokens.content), tokens.alias);
                } else if (Array.isArray(tokens)) {
                    return tokens.map(encode);
                } else {
                    return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                }
            },

            /**
             * Returns the name of the type of the given value.
             *
             * @param {any} o
             * @returns {string}
             * @example
             * type(null)      === 'Null'
             * type(undefined) === 'Undefined'
             * type(123)       === 'Number'
             * type('foo')     === 'String'
             * type(true)      === 'Boolean'
             * type([1, 2])    === 'Array'
             * type({})        === 'Object'
             * type(String)    === 'Function'
             * type(/abc+/)    === 'RegExp'
             */
            type: function (o) {
                return Object.prototype.toString.call(o).slice(8, -1);
            },

            /**
             * Returns a unique number for the given object. Later calls will still return the same number.
             *
             * @param {Object} obj
             * @returns {number}
             */
            objId: function (obj) {
                if (!obj['__id']) {
                    Object.defineProperty(obj, '__id', { value: ++uniqueId });
                }
                return obj['__id'];
            },

            /**
             * Creates a deep clone of the given object.
             *
             * The main intended use of this function is to clone language definitions.
             *
             * @param {T} o
             * @param {Record<number, any>} [visited]
             * @returns {T}
             * @template T
             */
            clone: function deepClone(o, visited) {
                visited = visited || {};

                var clone; var id;
                switch (_.util.type(o)) {
                    case 'Object':
                        id = _.util.objId(o);
                        if (visited[id]) {
                            return visited[id];
                        }
                        clone = /** @type {Record<string, any>} */ ({});
                        visited[id] = clone;

                        for (var key in o) {
                            if (o.hasOwnProperty(key)) {
                                clone[key] = deepClone(o[key], visited);
                            }
                        }

                        return /** @type {any} */ (clone);

                    case 'Array':
                        id = _.util.objId(o);
                        if (visited[id]) {
                            return visited[id];
                        }
                        clone = [];
                        visited[id] = clone;

                        (/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
                            clone[i] = deepClone(v, visited);
                        });

                        return /** @type {any} */ (clone);

                    default:
                        return o;
                }
            },

            /**
             * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
             *
             * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
             *
             * @param {Element} element
             * @returns {string}
             */
            getLanguage: function (element) {
                while (element) {
                    var m = lang.exec(element.className);
                    if (m) {
                        return m[1].toLowerCase();
                    }
                    element = element.parentElement;
                }
                return 'none';
            },

            /**
             * Sets the Prism `language-xxxx` class of the given element.
             *
             * @param {Element} element
             * @param {string} language
             * @returns {void}
             */
            setLanguage: function (element, language) {
                // remove all `language-xxxx` classes
                // (this might leave behind a leading space)
                element.className = element.className.replace(RegExp(lang, 'gi'), '');

                // add the new `language-xxxx` class
                // (using `classList` will automatically clean up spaces for us)
                element.classList.add('language-' + language);
            },

            /**
             * Returns the script element that is currently executing.
             *
             * This does __not__ work for line script element.
             *
             * @returns {HTMLScriptElement | null}
             */
            currentScript: function () {
                if (typeof document === 'undefined') {
                    return null;
                }
                if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
                    return /** @type {any} */ (document.currentScript);
                }

                // IE11 workaround
                // we'll get the src of the current script by parsing IE11's error stack trace
                // this will not work for inline scripts

                try {
                    throw new Error();
                } catch (err) {
                    // Get file src url from stack. Specifically works with the format of stack traces in IE.
                    // A stack will look like this:
                    //
                    // Error
                    //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
                    //    at Global code (http://localhost/components/prism-core.js:606:1)

                    var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                    if (src) {
                        var scripts = document.getElementsByTagName('script');
                        for (var i in scripts) {
                            if (scripts[i].src == src) {
                                return scripts[i];
                            }
                        }
                    }
                    return null;
                }
            },

            /**
             * Returns whether a given class is active for `element`.
             *
             * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
             * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
             * given class is just the given class with a `no-` prefix.
             *
             * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
             * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
             * ancestors have the given class or the negated version of it, then the default activation will be returned.
             *
             * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
             * version of it, the class is considered active.
             *
             * @param {Element} element
             * @param {string} className
             * @param {boolean} [defaultActivation=false]
             * @returns {boolean}
             */
            isActive: function (element, className, defaultActivation) {
                var no = 'no-' + className;

                while (element) {
                    var classList = element.classList;
                    if (classList.contains(className)) {
                        return true;
                    }
                    if (classList.contains(no)) {
                        return false;
                    }
                    element = element.parentElement;
                }
                return !!defaultActivation;
            }
        },

        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
            /**
             * The grammar for plain, unformatted text.
             */
            plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,

            /**
             * Creates a deep copy of the language with the given id and appends the given tokens.
             *
             * If a token in `redef` also appears in the copied language, then the existing token in the copied language
             * will be overwritten at its original position.
             *
             * ## Best practices
             *
             * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
             * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
             * understand the language definition because, normally, the order of tokens matters in Prism grammars.
             *
             * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
             * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
             *
             * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
             * @param {Grammar} redef The new tokens to append.
             * @returns {Grammar} The new language created.
             * @public
             * @example
             * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
             *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
             *     // at its original position
             *     'comment': { ... },
             *     // CSS doesn't have a 'color' token, so this token will be appended
             *     'color': /\b(?:red|green|blue)\b/
             * });
             */
            extend: function (id, redef) {
                var lang = _.util.clone(_.languages[id]);

                for (var key in redef) {
                    lang[key] = redef[key];
                }

                return lang;
            },

            /**
             * Inserts tokens _before_ another token in a language definition or any other grammar.
             *
             * ## Usage
             *
             * This helper method makes it easy to modify existing languages. For example, the CSS language definition
             * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
             * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
             * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
             * this:
             *
             * ```js
             * Prism.languages.markup.style = {
             *     // token
             * };
             * ```
             *
             * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
             * before existing tokens. For the CSS example above, you would use it like this:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'cdata', {
             *     'style': {
             *         // token
             *     }
             * });
             * ```
             *
             * ## Special cases
             *
             * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
             * will be ignored.
             *
             * This behavior can be used to insert tokens after `before`:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'comment', {
             *     'comment': Prism.languages.markup.comment,
             *     // tokens after 'comment'
             * });
             * ```
             *
             * ## Limitations
             *
             * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
             * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
             * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
             * deleting properties which is necessary to insert at arbitrary positions.
             *
             * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
             * Instead, it will create a new object and replace all references to the target object with the new one. This
             * can be done without temporarily deleting properties, so the iteration order is well-defined.
             *
             * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
             * you hold the target object in a variable, then the value of the variable will not change.
             *
             * ```js
             * var oldMarkup = Prism.languages.markup;
             * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
             *
             * assert(oldMarkup !== Prism.languages.markup);
             * assert(newMarkup === Prism.languages.markup);
             * ```
             *
             * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
             * object to be modified.
             * @param {string} before The key to insert before.
             * @param {Grammar} insert An object containing the key-value pairs to be inserted.
             * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
             * object to be modified.
             *
             * Defaults to `Prism.languages`.
             * @returns {Grammar} The new grammar object.
             * @public
             */
            insertBefore: function (inside, before, insert, root) {
                root = root || /** @type {any} */ (_.languages);
                var grammar = root[inside];
                /** @type {Grammar} */
                var ret = {};

                for (var token in grammar) {
                    if (grammar.hasOwnProperty(token)) {

                        if (token == before) {
                            for (var newToken in insert) {
                                if (insert.hasOwnProperty(newToken)) {
                                    ret[newToken] = insert[newToken];
                                }
                            }
                        }

                        // Do not insert token which also occur in insert. See #1525
                        if (!insert.hasOwnProperty(token)) {
                            ret[token] = grammar[token];
                        }
                    }
                }

                var old = root[inside];
                root[inside] = ret;

                // Update references in other language definitions
                _.languages.DFS(_.languages, function (key, value) {
                    if (value === old && key != inside) {
                        this[key] = ret;
                    }
                });

                return ret;
            },

            // Traverse a language definition with Depth First Search
            DFS: function DFS(o, callback, type, visited) {
                visited = visited || {};

                var objId = _.util.objId;

                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        callback.call(o, i, o[i], type || i);

                        var property = o[i];
                        var propertyType = _.util.type(property);

                        if (propertyType === 'Object' && !visited[objId(property)]) {
                            visited[objId(property)] = true;
                            DFS(property, callback, null, visited);
                        } else if (propertyType === 'Array' && !visited[objId(property)]) {
                            visited[objId(property)] = true;
                            DFS(property, callback, i, visited);
                        }
                    }
                }
            }
        },

        plugins: {},

        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function (async, callback) {
            _.highlightAllUnder(document, async, callback);
        },

        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function (container, async, callback) {
            var env = {
                callback: callback,
                container: container,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };

            _.hooks.run('before-highlightall', env);

            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

            _.hooks.run('before-all-elements-highlight', env);

            for (var i = 0, element; (element = env.elements[i++]);) {
                _.highlightElement(element, async === true, env.callback);
            }
        },

        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function (element, async, callback) {
            // Find language
            var language = _.util.getLanguage(element);
            var grammar = _.languages[language];

            // Set language on the element, if not present
            _.util.setLanguage(element, language);

            // Set language on the parent, for styling
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === 'pre') {
                _.util.setLanguage(parent, language);
            }

            var code = element.textContent;

            var env = {
                element: element,
                language: language,
                grammar: grammar,
                code: code
            };

            function insertHighlightedCode(highlightedCode) {
                env.highlightedCode = highlightedCode;

                _.hooks.run('before-insert', env);

                env.element.innerHTML = env.highlightedCode;

                _.hooks.run('after-highlight', env);
                _.hooks.run('complete', env);
                callback && callback.call(env.element);
            }

            _.hooks.run('before-sanity-check', env);

            // plugins may change/add the parent/element
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
                parent.setAttribute('tabindex', '0');
            }

            if (!env.code) {
                _.hooks.run('complete', env);
                callback && callback.call(env.element);
                return;
            }

            _.hooks.run('before-highlight', env);

            if (!env.grammar) {
                insertHighlightedCode(_.util.encode(env.code));
                return;
            }

            if (async && _self.Worker) {
                var worker = new Worker(_.filename);

                worker.onmessage = function (evt) {
                    insertHighlightedCode(evt.data);
                };

                worker.postMessage(JSON.stringify({
                    language: env.language,
                    code: env.code,
                    immediateClose: true
                }));
            } else {
                insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
            }
        },

        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function (text, grammar, language) {
            var env = {
                code: text,
                grammar: grammar,
                language: language
            };
            _.hooks.run('before-tokenize', env);
            if (!env.grammar) {
                throw new Error('The language "' + env.language + '" has no grammar.');
            }
            env.tokens = _.tokenize(env.code, env.grammar);
            _.hooks.run('after-tokenize', env);
            return Token.stringify(_.util.encode(env.tokens), env.language);
        },

        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function (text, grammar) {
            var rest = grammar.rest;
            if (rest) {
                for (var token in rest) {
                    grammar[token] = rest[token];
                }

                delete grammar.rest;
            }

            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);

            matchGrammar(text, tokenList, grammar, tokenList.head, 0);

            return toArray(tokenList);
        },

        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
            all: {},

            /**
             * Adds the given callback to the list of callbacks for the given hook.
             *
             * The callback will be invoked when the hook it is registered for is run.
             * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
             *
             * One callback function can be registered to multiple hooks and the same hook multiple times.
             *
             * @param {string} name The name of the hook.
             * @param {HookCallback} callback The callback function which is given environment variables.
             * @public
             */
            add: function (name, callback) {
                var hooks = _.hooks.all;

                hooks[name] = hooks[name] || [];

                hooks[name].push(callback);
            },

            /**
             * Runs a hook invoking all registered callbacks with the given environment variables.
             *
             * Callbacks will be invoked synchronously and in the order in which they were registered.
             *
             * @param {string} name The name of the hook.
             * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
             * @public
             */
            run: function (name, env) {
                var callbacks = _.hooks.all[name];

                if (!callbacks || !callbacks.length) {
                    return;
                }

                for (var i = 0, callback; (callback = callbacks[i++]);) {
                    callback(env);
                }
            }
        },

        Token: Token
    };
    _self.Prism = _;


    // Typescript note:
    // The following can be used to import the Token type in JSDoc:
    //
    //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

    /**
     * Creates a new token.
     *
     * @param {string} type See {@link Token#type type}
     * @param {string | TokenStream} content See {@link Token#content content}
     * @param {string|string[]} [alias] The alias(es) of the token.
     * @param {string} [matchedStr=""] A copy of the full string this token was created from.
     * @class
     * @global
     * @public
     */
    function Token(type, content, alias, matchedStr) {
        /**
         * The type of the token.
         *
         * This is usually the key of a pattern in a {@link Grammar}.
         *
         * @type {string}
         * @see GrammarToken
         * @public
         */
        this.type = type;
        /**
         * The strings or tokens contained by this token.
         *
         * This will be a token stream if the pattern matched also defined an `inside` grammar.
         *
         * @type {string | TokenStream}
         * @public
         */
        this.content = content;
        /**
         * The alias(es) of the token.
         *
         * @type {string|string[]}
         * @see GrammarToken
         * @public
         */
        this.alias = alias;
        // Copy of the full string this token was created from
        this.length = (matchedStr || '').length | 0;
    }

    /**
     * A token stream is an array of strings and {@link Token Token} objects.
     *
     * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
     * them.
     *
     * 1. No adjacent strings.
     * 2. No empty strings.
     *
     *    The only exception here is the token stream that only contains the empty string and nothing else.
     *
     * @typedef {Array<string | Token>} TokenStream
     * @global
     * @public
     */

    /**
     * Converts the given token or token stream to an HTML representation.
     *
     * The following hooks will be run:
     * 1. `wrap`: On each {@link Token}.
     *
     * @param {string | Token | TokenStream} o The token or token stream to be converted.
     * @param {string} language The name of current language.
     * @returns {string} The HTML representation of the token or token stream.
     * @memberof Token
     * @static
     */
    Token.stringify = function stringify(o, language) {
        if (typeof o == 'string') {
            return o;
        }
        if (Array.isArray(o)) {
            var s = '';
            o.forEach(function (e) {
                s += stringify(e, language);
            });
            return s;
        }

        var env = {
            type: o.type,
            content: stringify(o.content, language),
            tag: 'span',
            classes: ['token', o.type],
            attributes: {},
            language: language
        };

        var aliases = o.alias;
        if (aliases) {
            if (Array.isArray(aliases)) {
                Array.prototype.push.apply(env.classes, aliases);
            } else {
                env.classes.push(aliases);
            }
        }

        _.hooks.run('wrap', env);

        var attributes = '';
        for (var name in env.attributes) {
            attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
        }

        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
    };

    /**
     * @param {RegExp} pattern
     * @param {number} pos
     * @param {string} text
     * @param {boolean} lookbehind
     * @returns {RegExpExecArray | null}
     */
    function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
            // change the match to remove the text matched by the Prism lookbehind group
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
        }
        return match;
    }

    /**
     * @param {string} text
     * @param {LinkedList<string | Token>} tokenList
     * @param {any} grammar
     * @param {LinkedListNode<string | Token>} startNode
     * @param {number} startPos
     * @param {RematchOptions} [rematch]
     * @returns {void}
     * @private
     *
     * @typedef RematchOptions
     * @property {string} cause
     * @property {number} reach
     */
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                continue;
            }

            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];

            for (var j = 0; j < patterns.length; ++j) {
                if (rematch && rematch.cause == token + ',' + j) {
                    return;
                }

                var patternObj = patterns[j];
                var inside = patternObj.inside;
                var lookbehind = !!patternObj.lookbehind;
                var greedy = !!patternObj.greedy;
                var alias = patternObj.alias;

                if (greedy && !patternObj.pattern.global) {
                    // Without the global flag, lastIndex won't work
                    var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                    patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
                }

                /** @type {RegExp} */
                var pattern = patternObj.pattern || patternObj;

                for ( // iterate the token list and keep track of the current token/string position
                    var currentNode = startNode.next, pos = startPos;
                    currentNode !== tokenList.tail;
                    pos += currentNode.value.length, currentNode = currentNode.next
                ) {

                    if (rematch && pos >= rematch.reach) {
                        break;
                    }

                    var str = currentNode.value;

                    if (tokenList.length > text.length) {
                        // Something went terribly wrong, ABORT, ABORT!
                        return;
                    }

                    if (str instanceof Token) {
                        continue;
                    }

                    var removeCount = 1; // this is the to parameter of removeBetween
                    var match;

                    if (greedy) {
                        match = matchPattern(pattern, pos, text, lookbehind);
                        if (!match || match.index >= text.length) {
                            break;
                        }

                        var from = match.index;
                        var to = match.index + match[0].length;
                        var p = pos;

                        // find the node that contains the match
                        p += currentNode.value.length;
                        while (from >= p) {
                            currentNode = currentNode.next;
                            p += currentNode.value.length;
                        }
                        // adjust pos (and p)
                        p -= currentNode.value.length;
                        pos = p;

                        // the current node is a Token, then the match starts inside another Token, which is invalid
                        if (currentNode.value instanceof Token) {
                            continue;
                        }

                        // find the last node which is affected by this match
                        for (
                            var k = currentNode;
                            k !== tokenList.tail && (p < to || typeof k.value === 'string');
                            k = k.next
                        ) {
                            removeCount++;
                            p += k.value.length;
                        }
                        removeCount--;

                        // replace with the new match
                        str = text.slice(pos, p);
                        match.index -= pos;
                    } else {
                        match = matchPattern(pattern, 0, str, lookbehind);
                        if (!match) {
                            continue;
                        }
                    }

                    // eslint-disable-next-line no-redeclare
                    var from = match.index;
                    var matchStr = match[0];
                    var before = str.slice(0, from);
                    var after = str.slice(from + matchStr.length);

                    var reach = pos + str.length;
                    if (rematch && reach > rematch.reach) {
                        rematch.reach = reach;
                    }

                    var removeFrom = currentNode.prev;

                    if (before) {
                        removeFrom = addAfter(tokenList, removeFrom, before);
                        pos += before.length;
                    }

                    removeRange(tokenList, removeFrom, removeCount);

                    var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                    currentNode = addAfter(tokenList, removeFrom, wrapped);

                    if (after) {
                        addAfter(tokenList, currentNode, after);
                    }

                    if (removeCount > 1) {
                        // at least one Token object was removed, so we have to do some rematching
                        // this can only happen if the current pattern is greedy

                        /** @type {RematchOptions} */
                        var nestedRematch = {
                            cause: token + ',' + j,
                            reach: reach
                        };
                        matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

                        // the reach might have been extended because of the rematching
                        if (rematch && nestedRematch.reach > rematch.reach) {
                            rematch.reach = nestedRematch.reach;
                        }
                    }
                }
            }
        }
    }

    /**
     * @typedef LinkedListNode
     * @property {T} value
     * @property {LinkedListNode<T> | null} prev The previous node.
     * @property {LinkedListNode<T> | null} next The next node.
     * @template T
     * @private
     */

    /**
     * @template T
     * @private
     */
    function LinkedList() {
        /** @type {LinkedListNode<T>} */
        var head = { value: null, prev: null, next: null };
        /** @type {LinkedListNode<T>} */
        var tail = { value: null, prev: head, next: null };
        head.next = tail;

        /** @type {LinkedListNode<T>} */
        this.head = head;
        /** @type {LinkedListNode<T>} */
        this.tail = tail;
        this.length = 0;
    }

    /**
     * Adds a new node with the given value to the list.
     *
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {T} value
     * @returns {LinkedListNode<T>} The added node.
     * @template T
     */
    function addAfter(list, node, value) {
        // assumes that node != list.tail && values.length >= 0
        var next = node.next;

        var newNode = { value: value, prev: node, next: next };
        node.next = newNode;
        next.prev = newNode;
        list.length++;

        return newNode;
    }
    /**
     * Removes `count` nodes after the given node. The given node will not be removed.
     *
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {number} count
     * @template T
     */
    function removeRange(list, node, count) {
        var next = node.next;
        for (var i = 0; i < count && next !== list.tail; i++) {
            next = next.next;
        }
        node.next = next;
        next.prev = node;
        list.length -= i;
    }
    /**
     * @param {LinkedList<T>} list
     * @returns {T[]}
     * @template T
     */
    function toArray(list) {
        var array = [];
        var node = list.head.next;
        while (node !== list.tail) {
            array.push(node.value);
            node = node.next;
        }
        return array;
    }


    if (!_self.document) {
        if (!_self.addEventListener) {
            // in Node.js
            return _;
        }

        if (!_.disableWorkerMessageHandler) {
            // In worker
            _self.addEventListener('message', function (evt) {
                var message = JSON.parse(evt.data);
                var lang = message.language;
                var code = message.code;
                var immediateClose = message.immediateClose;

                _self.postMessage(_.highlight(code, _.languages[lang], lang));
                if (immediateClose) {
                    _self.close();
                }
            }, false);
        }

        return _;
    }

    // Get current script and highlight
    var script = _.util.currentScript();

    if (script) {
        _.filename = script.src;

        if (script.hasAttribute('data-manual')) {
            _.manual = true;
        }
    }

    function highlightAutomaticallyCallback() {
        if (!_.manual) {
            _.highlightAll();
        }
    }

    if (!_.manual) {
        // If the document state is "loading", then we'll use DOMContentLoaded.
        // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
        // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
        // might take longer one animation frame to execute which can create a race condition where only some plugins have
        // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
        // See https://github.com/PrismJS/prism/issues/2102
        var readyState = document.readyState;
        if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
            document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
        } else {
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(highlightAutomaticallyCallback);
            } else {
                window.setTimeout(highlightAutomaticallyCallback, 16);
            }
        }
    }

    return _;

}(_self));

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
    global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */
;
Prism.languages.markup = {
    'comment': {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
    },
    'prolog': {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
    },
    'doctype': {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
            'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: true,
                greedy: true,
                inside: null // see below
            },
            'string': {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: true
            },
            'punctuation': /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/i,
            'name': /[^\s<>'"]+/
        }
    },
    'cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
    },
    'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
            'tag': {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    'punctuation': /^<\/?/,
                    'namespace': /^[^\s>\/:]+:/
                }
            },
            'special-attr': [],
            'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    'punctuation': [
                        {
                            pattern: /^=/,
                            alias: 'attr-equals'
                        },
                        {
                            pattern: /^(\s*)["']|["']$/,
                            lookbehind: true
                        }
                    ]
                }
            },
            'punctuation': /\/?>/,
            'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: {
                    'namespace': /^[^\s>\/:]+:/
                }
            }

        }
    },
    'entity': [
        {
            pattern: /&[\da-z]{1,8};/i,
            alias: 'named-entity'
        },
        /&#x?[\da-f]{1,8};/i
    ]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
    Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

    if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
    }
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside['language-' + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism.languages[lang]
        };
        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

        var inside = {
            'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: includedCdataInside
            }
        };
        inside['language-' + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[lang]
        };

        var def = {};
        def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
            lookbehind: true,
            greedy: true,
            inside: inside
        };

        Prism.languages.insertBefore('markup', 'cdata', def);
    }
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function (attrName, lang) {
        Prism.languages.markup.tag.inside['special-attr'].push({
            pattern: RegExp(
                /(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                'i'
            ),
            lookbehind: true,
            inside: {
                'attr-name': /^[^\s=]+/,
                'attr-value': {
                    pattern: /=[\s\S]+/,
                    inside: {
                        'value': {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: true,
                            alias: [lang, 'language-' + lang],
                            inside: Prism.languages[lang]
                        },
                        'punctuation': [
                            {
                                pattern: /^=/,
                                alias: 'attr-equals'
                            },
                            /"|'/
                        ]
                    }
                }
            }
        });
    }
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;

(function (Prism) {

    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

    Prism.languages.css = {
        'comment': /\/\*[\s\S]*?\*\//,
        'atrule': {
            pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
            inside: {
                'rule': /^@[\w-]+/,
                'selector-function-argument': {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: true,
                    alias: 'selector'
                },
                'keyword': {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: true
                }
                // See rest below
            }
        },
        'url': {
            // https://drafts.csswg.org/css-values-3/#urls
            pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
            greedy: true,
            inside: {
                'function': /^url/i,
                'punctuation': /^\(|\)$/,
                'string': {
                    pattern: RegExp('^' + string.source + '$'),
                    alias: 'url'
                }
            }
        },
        'selector': {
            pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
            lookbehind: true
        },
        'string': {
            pattern: string,
            greedy: true
        },
        'property': {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
        },
        'important': /!important\b/i,
        'function': {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
        },
        'punctuation': /[(){};:,]/
    };

    Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

    var markup = Prism.languages.markup;
    if (markup) {
        markup.tag.addInlined('style', 'css');
        markup.tag.addAttribute('style', 'css');
    }

}(Prism));

Prism.languages.clike = {
    'comment': [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
        }
    ],
    'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
    'class-name': {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
            'punctuation': /[.\\]/
        }
    },
    'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    'boolean': /\b(?:false|true)\b/,
    'function': /\b\w+(?=\()/,
    'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    'punctuation': /[{}[\];(),.:]/
};

Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
        Prism.languages.clike['class-name'],
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: true
        }
    ],
    'keyword': [
        {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
        },
        {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
        },
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    'number': {
        pattern: RegExp(
            /(^|[^\w$])/.source +
            '(?:' +
            (
                // constant
                /NaN|Infinity/.source +
                '|' +
                // binary integer
                /0[bB][01]+(?:_[01]+)*n?/.source +
                '|' +
                // octal integer
                /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                '|' +
                // hexadecimal integer
                /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                '|' +
                // decimal bigint
                /\d+(?:_\d+)*n/.source +
                '|' +
                // decimal number (integer or float) but no bigint
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
            ) +
            ')' +
            /(?![\w$])/.source
        ),
        lookbehind: true
    },
    'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
    'regex': {
        pattern: RegExp(
            // lookbehind
            // eslint-disable-next-line regexp/no-dupe-characters-character-class
            /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
            // Regex pattern:
            // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
            // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
            // with the only syntax, so we have to define 2 different regex patterns.
            /\//.source +
            '(?:' +
            /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
            '|' +
            // `v` flag syntax. This supports 3 levels of nested character classes.
            /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
            ')' +
            // lookahead
            /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
        ),
        lookbehind: true,
        greedy: true,
        inside: {
            'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: true,
                alias: 'language-regex',
                inside: Prism.languages.regex
            },
            'regex-delimiter': /^\/|\/$/,
            'regex-flags': /^[a-z]+$/,
        }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: 'function'
    },
    'parameter': [
        {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: Prism.languages.javascript
        },
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: Prism.languages.javascript
        },
        {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: Prism.languages.javascript
        },
        {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: Prism.languages.javascript
        }
    ],
    'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
    'hashbang': {
        pattern: /^#!.*/,
        greedy: true,
        alias: 'comment'
    },
    'template-string': {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
            'template-punctuation': {
                pattern: /^`|`$/,
                alias: 'string'
            },
            'interpolation': {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: true,
                inside: {
                    'interpolation-punctuation': {
                        pattern: /^\$\{|\}$/,
                        alias: 'punctuation'
                    },
                    rest: Prism.languages.javascript
                }
            },
            'string': /[\s\S]+/
        }
    },
    'string-property': {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: 'property'
    }
});

Prism.languages.insertBefore('javascript', 'operator', {
    'literal-property': {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: 'property'
    },
});

if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript');

    // add attribute support for all DOM events.
    // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
    Prism.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
        'javascript'
    );
}

Prism.languages.js = Prism.languages.javascript;

Prism.languages.c = Prism.languages.extend('clike', {
    'comment': {
        pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
    },
    'string': {
        // https://en.cppreference.com/w/c/language/string_literal
        pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        greedy: true
    },
    'class-name': {
        pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
        lookbehind: true
    },
    'keyword': /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    'function': /\b[a-z_]\w*(?=\s*\()/i,
    'number': /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});

Prism.languages.insertBefore('c', 'string', {
    'char': {
        // https://en.cppreference.com/w/c/language/character_constant
        pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
        greedy: true
    }
});

Prism.languages.insertBefore('c', 'string', {
    'macro': {
        // allow for multiline macro definitions
        // spaces after the # character compile fine with gcc
        pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
        lookbehind: true,
        greedy: true,
        alias: 'property',
        inside: {
            'string': [
                {
                    // highlight the path of the include statement as a string
                    pattern: /^(#\s*include\s*)<[^>]+>/,
                    lookbehind: true
                },
                Prism.languages.c['string']
            ],
            'char': Prism.languages.c['char'],
            'comment': Prism.languages.c['comment'],
            'macro-name': [
                {
                    pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                    lookbehind: true
                },
                {
                    pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                    lookbehind: true,
                    alias: 'function'
                }
            ],
            // highlight macro directives as keywords
            'directive': {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: true,
                alias: 'keyword'
            },
            'directive-hash': /^#/,
            'punctuation': /##|\\(?=[\r\n])/,
            'expression': {
                pattern: /\S[\s\S]*/,
                inside: Prism.languages.c
            }
        }
    }
});

Prism.languages.insertBefore('c', 'function', {
    // highlight predefined macros as constants
    'constant': /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});

delete Prism.languages.c['boolean'];

(function (Prism) {

    /**
     * Replaces all placeholders "<<n>>" of given pattern with the n-th replacement (zero based).
     *
     * Note: This is a simple text based replacement. Be careful when using backreferences!
     *
     * @param {string} pattern the given pattern.
     * @param {string[]} replacements a list of replacement which can be inserted into the given pattern.
     * @returns {string} the pattern with all placeholders replaced with their corresponding replacements.
     * @example replace(/a<<0>>a/.source, [/b+/.source]) === /a(?:b+)a/.source
     */
    function replace(pattern, replacements) {
        return pattern.replace(/<<(\d+)>>/g, function (m, index) {
            return '(?:' + replacements[+index] + ')';
        });
    }
    /**
     * @param {string} pattern
     * @param {string[]} replacements
     * @param {string} [flags]
     * @returns {RegExp}
     */
    function re(pattern, replacements, flags) {
        return RegExp(replace(pattern, replacements), flags || '');
    }

    /**
     * Creates a nested pattern where all occurrences of the string `<<self>>` are replaced with the pattern itself.
     *
     * @param {string} pattern
     * @param {number} depthLog2
     * @returns {string}
     */
    function nested(pattern, depthLog2) {
        for (var i = 0; i < depthLog2; i++) {
            pattern = pattern.replace(/<<self>>/g, function () { return '(?:' + pattern + ')'; });
        }
        return pattern.replace(/<<self>>/g, '[^\\s\\S]');
    }

    // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/
    var keywordKinds = {
        // keywords which represent a return or variable type
        type: 'bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void',
        // keywords which are used to declare a type
        typeDeclaration: 'class enum interface record struct',
        // contextual keywords
        // ("var" and "dynamic" are missing because they are used like types)
        contextual: 'add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)',
        // all other keywords
        other: 'abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield'
    };

    // keywords
    function keywordsToPattern(words) {
        return '\\b(?:' + words.trim().replace(/ /g, '|') + ')\\b';
    }
    var typeDeclarationKeywords = keywordsToPattern(keywordKinds.typeDeclaration);
    var keywords = RegExp(keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.typeDeclaration + ' ' + keywordKinds.contextual + ' ' + keywordKinds.other));
    var nonTypeKeywords = keywordsToPattern(keywordKinds.typeDeclaration + ' ' + keywordKinds.contextual + ' ' + keywordKinds.other);
    var nonContextualKeywords = keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.typeDeclaration + ' ' + keywordKinds.other);

    // types
    var generic = nested(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2); // the idea behind the other forbidden characters is to prevent false positives. Same for tupleElement.
    var nestedRound = nested(/\((?:[^()]|<<self>>)*\)/.source, 2);
    var name = /@?\b[A-Za-z_]\w*\b/.source;
    var genericName = replace(/<<0>>(?:\s*<<1>>)?/.source, [name, generic]);
    var identifier = replace(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [nonTypeKeywords, genericName]);
    var array = /\[\s*(?:,\s*)*\]/.source;
    var typeExpressionWithoutTuple = replace(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [identifier, array]);
    var tupleElement = replace(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [generic, nestedRound, array]);
    var tuple = replace(/\(<<0>>+(?:,<<0>>+)+\)/.source, [tupleElement]);
    var typeExpression = replace(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [tuple, identifier, array]);

    var typeInside = {
        'keyword': keywords,
        'punctuation': /[<>()?,.:[\]]/
    };

    // strings & characters
    // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#character-literals
    // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#string-literals
    var character = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source; // simplified pattern
    var regularString = /"(?:\\.|[^\\"\r\n])*"/.source;
    var verbatimString = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;


    Prism.languages.csharp = Prism.languages.extend('clike', {
        'string': [
            {
                pattern: re(/(^|[^$\\])<<0>>/.source, [verbatimString]),
                lookbehind: true,
                greedy: true
            },
            {
                pattern: re(/(^|[^@$\\])<<0>>/.source, [regularString]),
                lookbehind: true,
                greedy: true
            }
        ],
        'class-name': [
            {
                // Using static
                // using static System.Math;
                pattern: re(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [identifier]),
                lookbehind: true,
                inside: typeInside
            },
            {
                // Using alias (type)
                // using Project = PC.MyCompany.Project;
                pattern: re(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [name, typeExpression]),
                lookbehind: true,
                inside: typeInside
            },
            {
                // Using alias (alias)
                // using Project = PC.MyCompany.Project;
                pattern: re(/(\busing\s+)<<0>>(?=\s*=)/.source, [name]),
                lookbehind: true
            },
            {
                // Type declarations
                // class Foo<A, B>
                // interface Foo<out A, B>
                pattern: re(/(\b<<0>>\s+)<<1>>/.source, [typeDeclarationKeywords, genericName]),
                lookbehind: true,
                inside: typeInside
            },
            {
                // Single catch exception declaration
                // catch(Foo)
                // (things like catch(Foo e) is covered by variable declaration)
                pattern: re(/(\bcatch\s*\(\s*)<<0>>/.source, [identifier]),
                lookbehind: true,
                inside: typeInside
            },
            {
                // Name of the type parameter of generic constraints
                // where Foo : class
                pattern: re(/(\bwhere\s+)<<0>>/.source, [name]),
                lookbehind: true
            },
            {
                // Casts and checks via as and is.
                // as Foo<A>, is Bar<B>
                // (things like if(a is Foo b) is covered by variable declaration)
                pattern: re(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [typeExpressionWithoutTuple]),
                lookbehind: true,
                inside: typeInside
            },
            {
                // Variable, field and parameter declaration
                // (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
                pattern: re(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [typeExpression, nonContextualKeywords, name]),
                inside: typeInside
            }
        ],
        'keyword': keywords,
        // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
        'number': /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
        'operator': />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
        'punctuation': /\?\.?|::|[{}[\];(),.:]/
    });

    Prism.languages.insertBefore('csharp', 'number', {
        'range': {
            pattern: /\.\./,
            alias: 'operator'
        }
    });

    Prism.languages.insertBefore('csharp', 'punctuation', {
        'named-parameter': {
            pattern: re(/([(,]\s*)<<0>>(?=\s*:)/.source, [name]),
            lookbehind: true,
            alias: 'punctuation'
        }
    });

    Prism.languages.insertBefore('csharp', 'class-name', {
        'namespace': {
            // namespace Foo.Bar {}
            // using Foo.Bar;
            pattern: re(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [name]),
            lookbehind: true,
            inside: {
                'punctuation': /\./
            }
        },
        'type-expression': {
            // default(Foo), typeof(Foo<Bar>), sizeof(int)
            pattern: re(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [nestedRound]),
            lookbehind: true,
            alias: 'class-name',
            inside: typeInside
        },
        'return-type': {
            // Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
            // int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
            // int Foo => 0; int Foo { get; set } = 0;
            pattern: re(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [typeExpression, identifier]),
            inside: typeInside,
            alias: 'class-name'
        },
        'constructor-invocation': {
            // new List<Foo<Bar[]>> { }
            pattern: re(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [typeExpression]),
            lookbehind: true,
            inside: typeInside,
            alias: 'class-name'
        },
        /*'explicit-implementation': {
            // int IFoo<Foo>.Bar => 0; void IFoo<Foo<Foo>>.Foo<T>();
            pattern: replace(/\b<<0>>(?=\.<<1>>)/, className, methodOrPropertyDeclaration),
            inside: classNameInside,
            alias: 'class-name'
        },*/
        'generic-method': {
            // foo<Bar>()
            pattern: re(/<<0>>\s*<<1>>(?=\s*\()/.source, [name, generic]),
            inside: {
                'function': re(/^<<0>>/.source, [name]),
                'generic': {
                    pattern: RegExp(generic),
                    alias: 'class-name',
                    inside: typeInside
                }
            }
        },
        'type-list': {
            // The list of types inherited or of generic constraints
            // class Foo<F> : Bar, IList<FooBar>
            // where F : Bar, IList<int>
            pattern: re(
                /\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
                [typeDeclarationKeywords, genericName, name, typeExpression, keywords.source, nestedRound, /\bnew\s*\(\s*\)/.source]
            ),
            lookbehind: true,
            inside: {
                'record-arguments': {
                    pattern: re(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [genericName, nestedRound]),
                    lookbehind: true,
                    greedy: true,
                    inside: Prism.languages.csharp
                },
                'keyword': keywords,
                'class-name': {
                    pattern: RegExp(typeExpression),
                    greedy: true,
                    inside: typeInside
                },
                'punctuation': /[,()]/
            }
        },
        'preprocessor': {
            pattern: /(^[\t ]*)#.*/m,
            lookbehind: true,
            alias: 'property',
            inside: {
                // highlight preprocessor directives as keywords
                'directive': {
                    pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                    lookbehind: true,
                    alias: 'keyword'
                }
            }
        }
    });

    // attributes
    var regularStringOrCharacter = regularString + '|' + character;
    var regularStringCharacterOrComment = replace(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [regularStringOrCharacter]);
    var roundExpression = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);

    // https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/#attribute-targets
    var attrTarget = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source;
    var attr = replace(/<<0>>(?:\s*\(<<1>>*\))?/.source, [identifier, roundExpression]);

    Prism.languages.insertBefore('csharp', 'class-name', {
        'attribute': {
            // Attributes
            // [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
            pattern: re(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [attrTarget, attr]),
            lookbehind: true,
            greedy: true,
            inside: {
                'target': {
                    pattern: re(/^<<0>>(?=\s*:)/.source, [attrTarget]),
                    alias: 'keyword'
                },
                'attribute-arguments': {
                    pattern: re(/\(<<0>>*\)/.source, [roundExpression]),
                    inside: Prism.languages.csharp
                },
                'class-name': {
                    pattern: RegExp(identifier),
                    inside: {
                        'punctuation': /\./
                    }
                },
                'punctuation': /[:,]/
            }
        }
    });


    // string interpolation
    var formatString = /:[^}\r\n]+/.source;
    // multi line
    var mInterpolationRound = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);
    var mInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [mInterpolationRound, formatString]);
    // single line
    var sInterpolationRound = nested(replace(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [regularStringOrCharacter]), 2);
    var sInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [sInterpolationRound, formatString]);

    function createInterpolationInside(interpolation, interpolationRound) {
        return {
            'interpolation': {
                pattern: re(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [interpolation]),
                lookbehind: true,
                inside: {
                    'format-string': {
                        pattern: re(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [interpolationRound, formatString]),
                        lookbehind: true,
                        inside: {
                            'punctuation': /^:/
                        }
                    },
                    'punctuation': /^\{|\}$/,
                    'expression': {
                        pattern: /[\s\S]+/,
                        alias: 'language-csharp',
                        inside: Prism.languages.csharp
                    }
                }
            },
            'string': /[\s\S]+/
        };
    }

    Prism.languages.insertBefore('csharp', 'string', {
        'interpolation-string': [
            {
                pattern: re(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [mInterpolation]),
                lookbehind: true,
                greedy: true,
                inside: createInterpolationInside(mInterpolation, mInterpolationRound),
            },
            {
                pattern: re(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [sInterpolation]),
                lookbehind: true,
                greedy: true,
                inside: createInterpolationInside(sInterpolation, sInterpolationRound),
            }
        ],
        'char': {
            pattern: RegExp(character),
            greedy: true
        }
    });

    Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp;

}(Prism));

(function (Prism) {

    var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
    var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () { return keyword.source; });

    Prism.languages.cpp = Prism.languages.extend('c', {
        'class-name': [
            {
                pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source
                    .replace(/<keyword>/g, function () { return keyword.source; })),
                lookbehind: true
            },
            // This is intended to capture the class name of method implementations like:
            //   void foo::bar() const {}
            // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
            // it starts with an uppercase letter. This approximation should give decent results.
            /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
            // This will capture the class name before destructors like:
            //   Foo::~Foo() {}
            /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
            // This also intends to capture the class name of method implementations but here the class has template
            // parameters, so it can't be a namespace (until C++ adds generic namespaces).
            /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
        ],
        'keyword': keyword,
        'number': {
            pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
            greedy: true
        },
        'operator': />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        'boolean': /\b(?:false|true)\b/
    });

    Prism.languages.insertBefore('cpp', 'string', {
        'module': {
            // https://en.cppreference.com/w/cpp/language/modules
            pattern: RegExp(
                /(\b(?:import|module)\s+)/.source +
                '(?:' +
                // header-name
                /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
                '|' +
                // module name or partition or both
                /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () { return modName; }) +
                ')'
            ),
            lookbehind: true,
            greedy: true,
            inside: {
                'string': /^[<"][\s\S]+/,
                'operator': /:/,
                'punctuation': /\./
            }
        },
        'raw-string': {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: 'string',
            greedy: true
        }
    });

    Prism.languages.insertBefore('cpp', 'keyword', {
        'generic-function': {
            pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
            inside: {
                'function': /^\w+/,
                'generic': {
                    pattern: /<[\s\S]+/,
                    alias: 'class-name',
                    inside: Prism.languages.cpp
                }
            }
        }
    });

    Prism.languages.insertBefore('cpp', 'operator', {
        'double-colon': {
            pattern: /::/,
            alias: 'punctuation'
        }
    });

    Prism.languages.insertBefore('cpp', 'class-name', {
        // the base clause is an optional list of parent classes
        // https://en.cppreference.com/w/cpp/language/class
        'base-clause': {
            pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
            lookbehind: true,
            greedy: true,
            inside: Prism.languages.extend('cpp', {})
        }
    });

    Prism.languages.insertBefore('inside', 'double-colon', {
        // All untokenized words that are not namespaces should be class names
        'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
    }, Prism.languages.cpp['base-clause']);

}(Prism));

(function (Prism) {

    var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    var selectorInside;

    Prism.languages.css.selector = {
        pattern: Prism.languages.css.selector.pattern,
        lookbehind: true,
        inside: selectorInside = {
            'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            'pseudo-class': /:[-\w]+/,
            'class': /\.[-\w]+/,
            'id': /#[-\w]+/,
            'attribute': {
                pattern: RegExp('\\[(?:[^[\\]"\']|' + string.source + ')*\\]'),
                greedy: true,
                inside: {
                    'punctuation': /^\[|\]$/,
                    'case-sensitivity': {
                        pattern: /(\s)[si]$/i,
                        lookbehind: true,
                        alias: 'keyword'
                    },
                    'namespace': {
                        pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                        lookbehind: true,
                        inside: {
                            'punctuation': /\|$/
                        }
                    },
                    'attr-name': {
                        pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                        lookbehind: true
                    },
                    'attr-value': [
                        string,
                        {
                            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                            lookbehind: true
                        }
                    ],
                    'operator': /[|~*^$]?=/
                }
            },
            'n-th': [
                {
                    pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                    lookbehind: true,
                    inside: {
                        'number': /[\dn]+/,
                        'operator': /[+-]/
                    }
                },
                {
                    pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                    lookbehind: true
                }
            ],
            'combinator': />|\+|~|\|\|/,

            // the `tag` token has been existed and removed.
            // because we can't find a perfect tokenize to match it.
            // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.

            'punctuation': /[(),]/,
        }
    };

    Prism.languages.css['atrule'].inside['selector-function-argument'].inside = selectorInside;

    Prism.languages.insertBefore('css', 'property', {
        'variable': {
            pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
            lookbehind: true
        }
    });

    var unit = {
        pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
        lookbehind: true
    };
    // 123 -123 .123 -.123 12.3 -12.3
    var number = {
        pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
        lookbehind: true
    };

    Prism.languages.insertBefore('css', 'function', {
        'operator': {
            pattern: /(\s)[+\-*\/](?=\s)/,
            lookbehind: true
        },
        // CAREFUL!
        // Previewers and Inline color use hexcode and color.
        'hexcode': {
            pattern: /\B#[\da-f]{3,8}\b/i,
            alias: 'color'
        },
        'color': [
            {
                pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: true
            },
            {
                pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                    'unit': unit,
                    'number': number,
                    'function': /[\w-]+(?=\()/,
                    'punctuation': /[(),]/
                }
            }
        ],
        // it's important that there is no boundary assertion after the hex digits
        'entity': /\\[\da-f]{1,8}/i,
        'unit': unit,
        'number': number
    });

}(Prism));

Prism.languages.glsl = Prism.languages.extend('c', {
    'keyword': /\b(?:active|asm|atomic_uint|attribute|[ibdu]?vec[234]|bool|break|buffer|case|cast|centroid|class|coherent|common|const|continue|d?mat[234](?:x[234])?|default|discard|do|double|else|enum|extern|external|false|filter|fixed|flat|float|for|fvec[234]|goto|half|highp|hvec[234]|[iu]?sampler2DMS(?:Array)?|[iu]?sampler2DRect|[iu]?samplerBuffer|[iu]?samplerCube|[iu]?samplerCubeArray|[iu]?sampler[123]D|[iu]?sampler[12]DArray|[iu]?image2DMS(?:Array)?|[iu]?image2DRect|[iu]?imageBuffer|[iu]?imageCube|[iu]?imageCubeArray|[iu]?image[123]D|[iu]?image[12]DArray|if|in|inline|inout|input|int|interface|invariant|layout|long|lowp|mediump|namespace|noinline|noperspective|out|output|partition|patch|precise|precision|public|readonly|resource|restrict|return|sample|sampler[12]DArrayShadow|sampler[12]DShadow|sampler2DRectShadow|sampler3DRect|samplerCubeArrayShadow|samplerCubeShadow|shared|short|sizeof|smooth|static|struct|subroutine|superp|switch|template|this|true|typedef|uint|uniform|union|unsigned|using|varying|void|volatile|while|writeonly)\b/
});

Prism.languages.ini = {

    /**
     * The component mimics the behavior of the Win32 API parser.
     *
     * @see {@link https://github.com/PrismJS/prism/issues/2775#issuecomment-787477723}
     */

    'comment': {
        pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
        lookbehind: true
    },
    'section': {
        pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
        lookbehind: true,
        inside: {
            'section-name': {
                pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
                lookbehind: true,
                alias: 'selector'
            },
            'punctuation': /\[|\]/
        }
    },
    'key': {
        pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
        lookbehind: true,
        alias: 'attr-name'
    },
    'value': {
        pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
        lookbehind: true,
        alias: 'attr-value',
        inside: {
            'inner-value': {
                pattern: /^("|').+(?=\1$)/,
                lookbehind: true
            }
        }
    },
    'punctuation': /=/
};

// https://www.json.org/json-en.html
Prism.languages.json = {
    'property': {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: true,
        greedy: true
    },
    'string': {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true
    },
    'comment': {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
    },
    'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    'punctuation': /[{}[\],]/,
    'operator': /:/,
    'boolean': /\b(?:false|true)\b/,
    'null': {
        pattern: /\bnull\b/,
        alias: 'keyword'
    }
};

Prism.languages.webmanifest = Prism.languages.json;

(function (Prism) {

    /**
     * Returns the placeholder for the given language id and index.
     *
     * @param {string} language
     * @param {string|number} index
     * @returns {string}
     */
    function getPlaceholder(language, index) {
        return '___' + language.toUpperCase() + index + '___';
    }

    Object.defineProperties(Prism.languages['markup-templating'] = {}, {
        buildPlaceholders: {
            /**
             * Tokenize all inline templating expressions matching `placeholderPattern`.
             *
             * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
             * `true` will be replaced.
             *
             * @param {object} env The environment of the `before-tokenize` hook.
             * @param {string} language The language id.
             * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
             * @param {(match: string) => boolean} [replaceFilter]
             */
            value: function (env, language, placeholderPattern, replaceFilter) {
                if (env.language !== language) {
                    return;
                }

                var tokenStack = env.tokenStack = [];

                env.code = env.code.replace(placeholderPattern, function (match) {
                    if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
                        return match;
                    }
                    var i = tokenStack.length;
                    var placeholder;

                    // Check for existing strings
                    while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
                        ++i;
                    }

                    // Create a sparse array
                    tokenStack[i] = match;

                    return placeholder;
                });

                // Switch the grammar to markup
                env.grammar = Prism.languages.markup;
            }
        },
        tokenizePlaceholders: {
            /**
             * Replace placeholders with proper tokens after tokenizing.
             *
             * @param {object} env The environment of the `after-tokenize` hook.
             * @param {string} language The language id.
             */
            value: function (env, language) {
                if (env.language !== language || !env.tokenStack) {
                    return;
                }

                // Switch the grammar back
                env.grammar = Prism.languages[language];

                var j = 0;
                var keys = Object.keys(env.tokenStack);

                function walkTokens(tokens) {
                    for (var i = 0; i < tokens.length; i++) {
                        // all placeholders are replaced already
                        if (j >= keys.length) {
                            break;
                        }

                        var token = tokens[i];
                        if (typeof token === 'string' || (token.content && typeof token.content === 'string')) {
                            var k = keys[j];
                            var t = env.tokenStack[k];
                            var s = typeof token === 'string' ? token : token.content;
                            var placeholder = getPlaceholder(language, k);

                            var index = s.indexOf(placeholder);
                            if (index > -1) {
                                ++j;

                                var before = s.substring(0, index);
                                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                                var after = s.substring(index + placeholder.length);

                                var replacement = [];
                                if (before) {
                                    replacement.push.apply(replacement, walkTokens([before]));
                                }
                                replacement.push(middle);
                                if (after) {
                                    replacement.push.apply(replacement, walkTokens([after]));
                                }

                                if (typeof token === 'string') {
                                    tokens.splice.apply(tokens, [i, 1].concat(replacement));
                                } else {
                                    token.content = replacement;
                                }
                            }
                        } else if (token.content /* && typeof token.content !== 'string' */) {
                            walkTokens(token.content);
                        }
                    }

                    return tokens;
                }

                walkTokens(env.tokens);
            }
        }
    });

}(Prism));

/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 * Rewritten by Tom Pavelec
 *
 * Supports PHP 5.3 - 8.0
 */
(function (Prism) {
    var comment = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/;
    var constant = [
        {
            pattern: /\b(?:false|true)\b/i,
            alias: 'boolean'
        },
        {
            pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
            greedy: true,
            lookbehind: true,
        },
        {
            pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
            greedy: true,
            lookbehind: true,
        },
        /\b(?:null)\b/i,
        /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
    ];
    var number = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i;
    var operator = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/;
    var punctuation = /[{}\[\](),:;]/;

    Prism.languages.php = {
        'delimiter': {
            pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
            alias: 'important'
        },
        'comment': comment,
        'variable': /\$+(?:\w+\b|(?=\{))/,
        'package': {
            pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
            lookbehind: true,
            inside: {
                'punctuation': /\\/
            }
        },
        'class-name-definition': {
            pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
            lookbehind: true,
            alias: 'class-name'
        },
        'function-definition': {
            pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
            lookbehind: true,
            alias: 'function'
        },
        'keyword': [
            {
                pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
                alias: 'type-casting',
                greedy: true,
                lookbehind: true
            },
            {
                pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
                alias: 'type-hint',
                greedy: true,
                lookbehind: true
            },
            {
                pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
                alias: 'return-type',
                greedy: true,
                lookbehind: true
            },
            {
                pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
                alias: 'type-declaration',
                greedy: true
            },
            {
                pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
                alias: 'type-declaration',
                greedy: true,
                lookbehind: true
            },
            {
                pattern: /\b(?:parent|self|static)(?=\s*::)/i,
                alias: 'static-context',
                greedy: true
            },
            {
                // yield from
                pattern: /(\byield\s+)from\b/i,
                lookbehind: true
            },
            // `class` is always a keyword unlike other keywords
            /\bclass\b/i,
            {
                // https://www.php.net/manual/en/reserved.keywords.php
                //
                // keywords cannot be preceded by "->"
                // the complex lookbehind means `(?<!(?:->|::)\s*)`
                pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
                lookbehind: true
            }
        ],
        'argument-name': {
            pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
            lookbehind: true
        },
        'class-name': [
            {
                pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
                greedy: true,
                lookbehind: true
            },
            {
                pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
                greedy: true,
                lookbehind: true
            },
            {
                pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
                greedy: true
            },
            {
                pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
                alias: 'class-name-fully-qualified',
                greedy: true,
                lookbehind: true,
                inside: {
                    'punctuation': /\\/
                }
            },
            {
                pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
                alias: 'class-name-fully-qualified',
                greedy: true,
                inside: {
                    'punctuation': /\\/
                }
            },
            {
                pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                alias: 'class-name-fully-qualified',
                greedy: true,
                lookbehind: true,
                inside: {
                    'punctuation': /\\/
                }
            },
            {
                pattern: /\b[a-z_]\w*(?=\s*\$)/i,
                alias: 'type-declaration',
                greedy: true
            },
            {
                pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                alias: ['class-name-fully-qualified', 'type-declaration'],
                greedy: true,
                inside: {
                    'punctuation': /\\/
                }
            },
            {
                pattern: /\b[a-z_]\w*(?=\s*::)/i,
                alias: 'static-context',
                greedy: true
            },
            {
                pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
                alias: ['class-name-fully-qualified', 'static-context'],
                greedy: true,
                inside: {
                    'punctuation': /\\/
                }
            },
            {
                pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
                alias: 'type-hint',
                greedy: true,
                lookbehind: true
            },
            {
                pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                alias: ['class-name-fully-qualified', 'type-hint'],
                greedy: true,
                lookbehind: true,
                inside: {
                    'punctuation': /\\/
                }
            },
            {
                pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
                alias: 'return-type',
                greedy: true,
                lookbehind: true
            },
            {
                pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                alias: ['class-name-fully-qualified', 'return-type'],
                greedy: true,
                lookbehind: true,
                inside: {
                    'punctuation': /\\/
                }
            }
        ],
        'constant': constant,
        'function': {
            pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
            lookbehind: true,
            inside: {
                'punctuation': /\\/
            }
        },
        'property': {
            pattern: /(->\s*)\w+/,
            lookbehind: true
        },
        'number': number,
        'operator': operator,
        'punctuation': punctuation
    };

    var string_interpolation = {
        pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
        lookbehind: true,
        inside: Prism.languages.php
    };

    var string = [
        {
            pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
            alias: 'nowdoc-string',
            greedy: true,
            inside: {
                'delimiter': {
                    pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                    alias: 'symbol',
                    inside: {
                        'punctuation': /^<<<'?|[';]$/
                    }
                }
            }
        },
        {
            pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
            alias: 'heredoc-string',
            greedy: true,
            inside: {
                'delimiter': {
                    pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                    alias: 'symbol',
                    inside: {
                        'punctuation': /^<<<"?|[";]$/
                    }
                },
                'interpolation': string_interpolation
            }
        },
        {
            pattern: /`(?:\\[\s\S]|[^\\`])*`/,
            alias: 'backtick-quoted-string',
            greedy: true
        },
        {
            pattern: /'(?:\\[\s\S]|[^\\'])*'/,
            alias: 'single-quoted-string',
            greedy: true
        },
        {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            alias: 'double-quoted-string',
            greedy: true,
            inside: {
                'interpolation': string_interpolation
            }
        }
    ];

    Prism.languages.insertBefore('php', 'variable', {
        'string': string,
        'attribute': {
            pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
            greedy: true,
            inside: {
                'attribute-content': {
                    pattern: /^(#\[)[\s\S]+(?=\]$)/,
                    lookbehind: true,
                    // inside can appear subset of php
                    inside: {
                        'comment': comment,
                        'string': string,
                        'attribute-class-name': [
                            {
                                pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                                alias: 'class-name',
                                greedy: true,
                                lookbehind: true
                            },
                            {
                                pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                                alias: [
                                    'class-name',
                                    'class-name-fully-qualified'
                                ],
                                greedy: true,
                                lookbehind: true,
                                inside: {
                                    'punctuation': /\\/
                                }
                            }
                        ],
                        'constant': constant,
                        'number': number,
                        'operator': operator,
                        'punctuation': punctuation
                    }
                },
                'delimiter': {
                    pattern: /^#\[|\]$/,
                    alias: 'punctuation'
                }
            }
        },
    });

    Prism.hooks.add('before-tokenize', function (env) {
        if (!/<\?/.test(env.code)) {
            return;
        }

        var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
        Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
    });

    Prism.hooks.add('after-tokenize', function (env) {
        Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
    });

}(Prism));

Prism.languages.python = {
    'comment': {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true,
        greedy: true
    },
    'string-interpolation': {
        pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: true,
        inside: {
            'interpolation': {
                // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
                pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: true,
                inside: {
                    'format-spec': {
                        pattern: /(:)[^:(){}]+(?=\}$)/,
                        lookbehind: true
                    },
                    'conversion-option': {
                        pattern: /![sra](?=[:}]$)/,
                        alias: 'punctuation'
                    },
                    rest: null
                }
            },
            'string': /[\s\S]+/
        }
    },
    'triple-quoted-string': {
        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
        greedy: true,
        alias: 'string'
    },
    'string': {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: true
    },
    'function': {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: true
    },
    'class-name': {
        pattern: /(\bclass\s+)\w+/i,
        lookbehind: true
    },
    'decorator': {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: true,
        alias: ['annotation', 'punctuation'],
        inside: {
            'punctuation': /\./
        }
    },
    'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    'boolean': /\b(?:False|None|True)\b/,
    'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    'punctuation': /[{}[\];(),.:]/
};

Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;

Prism.languages.py = Prism.languages.python;

(function () {

    if (typeof Prism === 'undefined') {
        return;
    }

    var url = /\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&!$'()*,;@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/;
    var email = /\b\S+@[\w.]+[a-z]{2}/;
    var linkMd = /\[([^\]]+)\]\(([^)]+)\)/;

    // Tokens that may contain URLs and emails
    var candidates = ['comment', 'url', 'attr-value', 'string'];

    Prism.plugins.autolinker = {
        processGrammar: function (grammar) {
            // Abort if grammar has already been processed
            if (!grammar || grammar['url-link']) {
                return;
            }
            Prism.languages.DFS(grammar, function (key, def, type) {
                if (candidates.indexOf(type) > -1 && !Array.isArray(def)) {
                    if (!def.pattern) {
                        def = this[key] = {
                            pattern: def
                        };
                    }

                    def.inside = def.inside || {};

                    if (type == 'comment') {
                        def.inside['md-link'] = linkMd;
                    }
                    if (type == 'attr-value') {
                        Prism.languages.insertBefore('inside', 'punctuation', { 'url-link': url }, def);
                    } else {
                        def.inside['url-link'] = url;
                    }

                    def.inside['email-link'] = email;
                }
            });
            grammar['url-link'] = url;
            grammar['email-link'] = email;
        }
    };

    Prism.hooks.add('before-highlight', function (env) {
        Prism.plugins.autolinker.processGrammar(env.grammar);
    });

    Prism.hooks.add('wrap', function (env) {
        if (/-link$/.test(env.type)) {
            env.tag = 'a';

            var href = env.content;

            if (env.type == 'email-link' && href.indexOf('mailto:') != 0) {
                href = 'mailto:' + href;
            } else if (env.type == 'md-link') {
                // Markdown
                var match = env.content.match(linkMd);

                href = match[2];
                env.content = match[1];
            }

            env.attributes.href = href;

            // Silently catch any error thrown by decodeURIComponent (#1186)
            try {
                env.content = decodeURIComponent(env.content);
            } catch (e) { /* noop */ }
        }
    });

}());

(function () {

    if (typeof Prism === 'undefined' || typeof document === 'undefined') {
        return;
    }

    // Copied from the markup language definition
    var HTML_TAG = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g;

    // a regex to validate hexadecimal colors
    var HEX_COLOR = /^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i;

    /**
     * Parses the given hexadecimal representation and returns the parsed RGBA color.
     *
     * If the format of the given string is invalid, `undefined` will be returned.
     * Valid formats are: `RGB`, `RGBA`, `RRGGBB`, and `RRGGBBAA`.
     *
     * Hexadecimal colors are parsed because they are not fully supported by older browsers, so converting them to
     * `rgba` functions improves browser compatibility.
     *
     * @param {string} hex
     * @returns {string | undefined}
     */
    function parseHexColor(hex) {
        var match = HEX_COLOR.exec(hex);
        if (!match) {
            return undefined;
        }
        hex = match[1]; // removes the leading "#"

        // the width and number of channels
        var channelWidth = hex.length >= 6 ? 2 : 1;
        var channelCount = hex.length / channelWidth;

        // the scale used to normalize 4bit and 8bit values
        var scale = channelWidth == 1 ? 1 / 15 : 1 / 255;

        // normalized RGBA channels
        var channels = [];
        for (var i = 0; i < channelCount; i++) {
            var int = parseInt(hex.substr(i * channelWidth, channelWidth), 16);
            channels.push(int * scale);
        }
        if (channelCount == 3) {
            channels.push(1); // add alpha of 100%
        }

        // output
        var rgb = channels.slice(0, 3).map(function (x) {
            return String(Math.round(x * 255));
        }).join(',');
        var alpha = String(Number(channels[3].toFixed(3))); // easy way to round 3 decimal places

        return 'rgba(' + rgb + ',' + alpha + ')';
    }

    /**
     * Validates the given Color using the current browser's internal implementation.
     *
     * @param {string} color
     * @returns {string | undefined}
     */
    function validateColor(color) {
        var s = new Option().style;
        s.color = color;
        return s.color ? color : undefined;
    }

    /**
     * An array of function which parse a given string representation of a color.
     *
     * These parser serve as validators and as a layer of compatibility to support color formats which the browser
     * might not support natively.
     *
     * @type {((value: string) => (string|undefined))[]}
     */
    var parsers = [
        parseHexColor,
        validateColor
    ];


    Prism.hooks.add('wrap', function (env) {
        if (env.type === 'color' || env.classes.indexOf('color') >= 0) {
            var content = env.content;

            // remove all HTML tags inside
            var rawText = content.split(HTML_TAG).join('');

            var color;
            for (var i = 0, l = parsers.length; i < l && !color; i++) {
                color = parsers[i](rawText);
            }

            if (!color) {
                return;
            }

            var previewElement = '<span class="inline-color-wrapper"><span class="inline-color" style="background-color:' + color + ';"></span></span>';
            env.content = previewElement + content;
        }
    });

}());

(function () {

    if (typeof Prism === 'undefined' || typeof document === 'undefined') {
        return;
    }

    /* eslint-disable */

    /**
     * The dependencies map is built automatically with gulp.
     *
     * @type {Object<string, string | string[]>}
     */
    var lang_dependencies = /*dependencies_placeholder[*/{
        "javascript": "clike",
        "actionscript": "javascript",
        "apex": [
            "clike",
            "sql"
        ],
        "arduino": "cpp",
        "aspnet": [
            "markup",
            "csharp"
        ],
        "birb": "clike",
        "bison": "c",
        "c": "clike",
        "csharp": "clike",
        "cpp": "c",
        "cfscript": "clike",
        "chaiscript": [
            "clike",
            "cpp"
        ],
        "cilkc": "c",
        "cilkcpp": "cpp",
        "coffeescript": "javascript",
        "crystal": "ruby",
        "css-extras": "css",
        "d": "clike",
        "dart": "clike",
        "django": "markup-templating",
        "ejs": [
            "javascript",
            "markup-templating"
        ],
        "etlua": [
            "lua",
            "markup-templating"
        ],
        "erb": [
            "ruby",
            "markup-templating"
        ],
        "fsharp": "clike",
        "firestore-security-rules": "clike",
        "flow": "javascript",
        "ftl": "markup-templating",
        "gml": "clike",
        "glsl": "c",
        "go": "clike",
        "gradle": "clike",
        "groovy": "clike",
        "haml": "ruby",
        "handlebars": "markup-templating",
        "haxe": "clike",
        "hlsl": "c",
        "idris": "haskell",
        "java": "clike",
        "javadoc": [
            "markup",
            "java",
            "javadoclike"
        ],
        "jolie": "clike",
        "jsdoc": [
            "javascript",
            "javadoclike",
            "typescript"
        ],
        "js-extras": "javascript",
        "json5": "json",
        "jsonp": "json",
        "js-templates": "javascript",
        "kotlin": "clike",
        "latte": [
            "clike",
            "markup-templating",
            "php"
        ],
        "less": "css",
        "lilypond": "scheme",
        "liquid": "markup-templating",
        "markdown": "markup",
        "markup-templating": "markup",
        "mongodb": "javascript",
        "n4js": "javascript",
        "objectivec": "c",
        "opencl": "c",
        "parser": "markup",
        "php": "markup-templating",
        "phpdoc": [
            "php",
            "javadoclike"
        ],
        "php-extras": "php",
        "plsql": "sql",
        "processing": "clike",
        "protobuf": "clike",
        "pug": [
            "markup",
            "javascript"
        ],
        "purebasic": "clike",
        "purescript": "haskell",
        "qsharp": "clike",
        "qml": "javascript",
        "qore": "clike",
        "racket": "scheme",
        "cshtml": [
            "markup",
            "csharp"
        ],
        "jsx": [
            "markup",
            "javascript"
        ],
        "tsx": [
            "jsx",
            "typescript"
        ],
        "reason": "clike",
        "ruby": "clike",
        "sass": "css",
        "scss": "css",
        "scala": "java",
        "shell-session": "bash",
        "smarty": "markup-templating",
        "solidity": "clike",
        "soy": "markup-templating",
        "sparql": "turtle",
        "sqf": "clike",
        "squirrel": "clike",
        "stata": [
            "mata",
            "java",
            "python"
        ],
        "t4-cs": [
            "t4-templating",
            "csharp"
        ],
        "t4-vb": [
            "t4-templating",
            "vbnet"
        ],
        "tap": "yaml",
        "tt2": [
            "clike",
            "markup-templating"
        ],
        "textile": "markup",
        "twig": "markup-templating",
        "typescript": "javascript",
        "v": "clike",
        "vala": "clike",
        "vbnet": "basic",
        "velocity": "markup",
        "wiki": "markup",
        "xeora": "markup",
        "xml-doc": "markup",
        "xquery": "markup"
    }/*]*/;

    var lang_aliases = /*aliases_placeholder[*/{
        "html": "markup",
        "xml": "markup",
        "svg": "markup",
        "mathml": "markup",
        "ssml": "markup",
        "atom": "markup",
        "rss": "markup",
        "js": "javascript",
        "g4": "antlr4",
        "ino": "arduino",
        "arm-asm": "armasm",
        "art": "arturo",
        "adoc": "asciidoc",
        "avs": "avisynth",
        "avdl": "avro-idl",
        "gawk": "awk",
        "sh": "bash",
        "shell": "bash",
        "shortcode": "bbcode",
        "rbnf": "bnf",
        "oscript": "bsl",
        "cs": "csharp",
        "dotnet": "csharp",
        "cfc": "cfscript",
        "cilk-c": "cilkc",
        "cilk-cpp": "cilkcpp",
        "cilk": "cilkcpp",
        "coffee": "coffeescript",
        "conc": "concurnas",
        "jinja2": "django",
        "dns-zone": "dns-zone-file",
        "dockerfile": "docker",
        "gv": "dot",
        "eta": "ejs",
        "xlsx": "excel-formula",
        "xls": "excel-formula",
        "gamemakerlanguage": "gml",
        "po": "gettext",
        "gni": "gn",
        "ld": "linker-script",
        "go-mod": "go-module",
        "hbs": "handlebars",
        "mustache": "handlebars",
        "hs": "haskell",
        "idr": "idris",
        "gitignore": "ignore",
        "hgignore": "ignore",
        "npmignore": "ignore",
        "webmanifest": "json",
        "kt": "kotlin",
        "kts": "kotlin",
        "kum": "kumir",
        "tex": "latex",
        "context": "latex",
        "ly": "lilypond",
        "emacs": "lisp",
        "elisp": "lisp",
        "emacs-lisp": "lisp",
        "md": "markdown",
        "moon": "moonscript",
        "n4jsd": "n4js",
        "nani": "naniscript",
        "objc": "objectivec",
        "qasm": "openqasm",
        "objectpascal": "pascal",
        "px": "pcaxis",
        "pcode": "peoplecode",
        "plantuml": "plant-uml",
        "pq": "powerquery",
        "mscript": "powerquery",
        "pbfasm": "purebasic",
        "purs": "purescript",
        "py": "python",
        "qs": "qsharp",
        "rkt": "racket",
        "razor": "cshtml",
        "rpy": "renpy",
        "res": "rescript",
        "robot": "robotframework",
        "rb": "ruby",
        "sh-session": "shell-session",
        "shellsession": "shell-session",
        "smlnj": "sml",
        "sol": "solidity",
        "sln": "solution-file",
        "rq": "sparql",
        "sclang": "supercollider",
        "t4": "t4-cs",
        "trickle": "tremor",
        "troy": "tremor",
        "trig": "turtle",
        "ts": "typescript",
        "tsconfig": "typoscript",
        "uscript": "unrealscript",
        "uc": "unrealscript",
        "url": "uri",
        "vb": "visual-basic",
        "vba": "visual-basic",
        "webidl": "web-idl",
        "mathematica": "wolfram",
        "nb": "wolfram",
        "wl": "wolfram",
        "xeoracube": "xeora",
        "yml": "yaml"
    }/*]*/;

    /* eslint-enable */

    /**
     * @typedef LangDataItem
     * @property {{ success?: () => void, error?: () => void }[]} callbacks
     * @property {boolean} [error]
     * @property {boolean} [loading]
     */
    /** @type {Object<string, LangDataItem>} */
    var lang_data = {};

    var ignored_language = 'none';
    var languages_path = 'components/';

    var script = Prism.util.currentScript();
    if (script) {
        var autoloaderFile = /\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i;
        var prismFile = /(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i;

        var autoloaderPath = script.getAttribute('data-autoloader-path');
        if (autoloaderPath != null) {
            // data-autoloader-path is set, so just use it
            languages_path = autoloaderPath.trim().replace(/\/?$/, '/');
        } else {
            var src = script.src;
            if (autoloaderFile.test(src)) {
                // the script is the original autoloader script in the usual Prism project structure
                languages_path = src.replace(autoloaderFile, 'components/');
            } else if (prismFile.test(src)) {
                // the script is part of a bundle like a custom prism.js from the download page
                languages_path = src.replace(prismFile, '$1components/');
            }
        }
    }

    var config = Prism.plugins.autoloader = {
        languages_path: languages_path,
        use_minified: true,
        loadLanguages: loadLanguages
    };


    /**
     * Lazily loads an external script.
     *
     * @param {string} src
     * @param {() => void} [success]
     * @param {() => void} [error]
     */
    function addScript(src, success, error) {
        var s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = function () {
            document.body.removeChild(s);
            success && success();
        };
        s.onerror = function () {
            document.body.removeChild(s);
            error && error();
        };
        document.body.appendChild(s);
    }

    /**
     * Returns all additional dependencies of the given element defined by the `data-dependencies` attribute.
     *
     * @param {Element} element
     * @returns {string[]}
     */
    function getDependencies(element) {
        var deps = (element.getAttribute('data-dependencies') || '').trim();
        if (!deps) {
            var parent = element.parentElement;
            if (parent && parent.tagName.toLowerCase() === 'pre') {
                deps = (parent.getAttribute('data-dependencies') || '').trim();
            }
        }
        return deps ? deps.split(/\s*,\s*/g) : [];
    }

    /**
     * Returns whether the given language is currently loaded.
     *
     * @param {string} lang
     * @returns {boolean}
     */
    function isLoaded(lang) {
        if (lang.indexOf('!') >= 0) {
            // forced reload
            return false;
        }

        lang = lang_aliases[lang] || lang; // resolve alias

        if (lang in Prism.languages) {
            // the given language is already loaded
            return true;
        }

        // this will catch extensions like CSS extras that don't add a grammar to Prism.languages
        var data = lang_data[lang];
        return data && !data.error && data.loading === false;
    }

    /**
     * Returns the path to a grammar, using the language_path and use_minified config keys.
     *
     * @param {string} lang
     * @returns {string}
     */
    function getLanguagePath(lang) {
        return config.languages_path + 'prism-' + lang + (config.use_minified ? '.min' : '') + '.js';
    }

    /**
     * Loads all given grammars concurrently.
     *
     * @param {string[]|string} languages
     * @param {(languages: string[]) => void} [success]
     * @param {(language: string) => void} [error] This callback will be invoked on the first language to fail.
     */
    function loadLanguages(languages, success, error) {
        if (typeof languages === 'string') {
            languages = [languages];
        }

        var total = languages.length;
        var completed = 0;
        var failed = false;

        if (total === 0) {
            if (success) {
                setTimeout(success, 0);
            }
            return;
        }

        function successCallback() {
            if (failed) {
                return;
            }
            completed++;
            if (completed === total) {
                success && success(languages);
            }
        }

        languages.forEach(function (lang) {
            loadLanguage(lang, successCallback, function () {
                if (failed) {
                    return;
                }
                failed = true;
                error && error(lang);
            });
        });
    }

    /**
     * Loads a grammar with its dependencies.
     *
     * @param {string} lang
     * @param {() => void} [success]
     * @param {() => void} [error]
     */
    function loadLanguage(lang, success, error) {
        var force = lang.indexOf('!') >= 0;

        lang = lang.replace('!', '');
        lang = lang_aliases[lang] || lang;

        function load() {
            var data = lang_data[lang];
            if (!data) {
                data = lang_data[lang] = {
                    callbacks: []
                };
            }
            data.callbacks.push({
                success: success,
                error: error
            });

            if (!force && isLoaded(lang)) {
                // the language is already loaded and we aren't forced to reload
                languageCallback(lang, 'success');
            } else if (!force && data.error) {
                // the language failed to load before and we don't reload
                languageCallback(lang, 'error');
            } else if (force || !data.loading) {
                // the language isn't currently loading and/or we are forced to reload
                data.loading = true;
                data.error = false;

                addScript(getLanguagePath(lang), function () {
                    data.loading = false;
                    languageCallback(lang, 'success');

                }, function () {
                    data.loading = false;
                    data.error = true;
                    languageCallback(lang, 'error');
                });
            }
        }

        var dependencies = lang_dependencies[lang];
        if (dependencies && dependencies.length) {
            loadLanguages(dependencies, load, error);
        } else {
            load();
        }
    }

    /**
     * Runs all callbacks of the given type for the given language.
     *
     * @param {string} lang
     * @param {"success" | "error"} type
     */
    function languageCallback(lang, type) {
        if (lang_data[lang]) {
            var callbacks = lang_data[lang].callbacks;
            for (var i = 0, l = callbacks.length; i < l; i++) {
                var callback = callbacks[i][type];
                if (callback) {
                    setTimeout(callback, 0);
                }
            }
            callbacks.length = 0;
        }
    }

    Prism.hooks.add('complete', function (env) {
        var element = env.element;
        var language = env.language;
        if (!element || !language || language === ignored_language) {
            return;
        }

        var deps = getDependencies(element);
        if (/^diff-./i.test(language)) {
            // the "diff-xxxx" format is used by the Diff Highlight plugin
            deps.push('diff');
            deps.push(language.substr('diff-'.length));
        } else {
            deps.push(language);
        }

        if (!deps.every(isLoaded)) {
            // the language or some dependencies aren't loaded
            loadLanguages(deps, function () {
                Prism.highlightElement(element);
            });
        }
    });

}());

export default Prism