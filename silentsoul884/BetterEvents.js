// Name: Better Events
// ID: BetterEvents
// Description: Better Events.
// By: silentsoul884
// Original: silentsoul884
// License: MPL-2.0

(() => {
    // src/EventEmiter.ts
    var EventEmitter = class {
        events = /* @__PURE__ */ new Map();
        on(event, listener) {
            if (!this.events.has(event)) {
                this.events.set(event, []);
            }
            this.events.get(event).push(listener);
            return {
                promise: new Promise((resolve) => {
                    resolve();
                })
            };
        }
        getEvents() {
            return this.events;
        }
        getAllEvents() {
            const keys = Array.from(this.events.keys());
            return keys.length ? keys.map((event) => ({
                text: event,
                value: event
            })) : [{ text: "", value: "" }];
        }
        once(event, listener) {
            const onceWrapper = (...args) => {
                listener(...args);
                this.off(event, onceWrapper);
            };
            this.on(event, onceWrapper);
            return {
                promise: new Promise((resolve) => {
                    const originalListener = listener;
                    listener = (...args) => {
                        originalListener(...args);
                        resolve();
                    };
                })
            };
        }
        emit(event, ...args) {
            const listeners = this.events.get(event);
            if (listeners) {
                listeners.slice().forEach((listener) => listener(...args));
            }
        }
        off(event, listener) {
            const listeners = this.events.get(event);
            if (listeners) {
                const index = listeners.indexOf(listener);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
            return {
                promise: new Promise((resolve) => {
                    resolve();
                })
            };
        }
    };

    // src/BetterEvent.ts
    var BetterEvent = class _BetterEvent {
        runtime;
        static id = "BetterEvents";
        static description = "Better events for better event emitter";
        events;
        eventData = /* @__PURE__ */ new Map();
        constructor(runtime) {
            this.runtime = runtime;
            this.events = new EventEmitter();
        }
        getInfo() {
            return {
                id: _BetterEvent.id,
                color1: '#C49C2A00',
                name: "BetterEvents",
                blocks: [
                    {
                        blockType: Scratch.BlockType.COMMAND,
                        opcode: "emit",
                        text: "Broadcast event with [eventName],[data]",
                        arguments: {
                            eventName: {
                                type: "string"
                            },
                            data: {
                                type: "string",
                                defaultValue: "{}"
                            }
                        }
                    },
                    {
                        blockType: Scratch.BlockType.HAT,
                        id: _BetterEvent.id,
                        opcode: "on",
                        text: "When i receive event [eventName]",
                        arguments: {
                            eventName: {
                                type: Scratch.ArgumentType.STRING
                            }
                        },
                        isEdgeActivated: false
                    },
                    {
                        blockType: Scratch.BlockType.REPORTER,
                        opcode: "data",
                        text: "Get Event Data [eventName]",
                        arguments: {
                            eventName: {
                                type: Scratch.ArgumentType.STRING
                            }
                        }
                    }
                ]
            };
        }
        emit({ eventName, data }, util) {
            this.eventData.set(eventName, data);
            this.events.emit(eventName, data);
            this.events.on(eventName, () => {
                util.startHatsWithParams(`${_BetterEvent.id}_on`, {
                    parameters: { eventName }
                });
            });
        }
        on({ eventName }, util) {
            const { hatParam } = util.thread;
            if (hatParam.eventName === eventName) {
                return eventName;
            }
            return null;
        }
        data({ eventName }) {
            return this.eventData.get(eventName);
        }
    };

    // src/index.ts
    (function(Scratch2) {
        if (Scratch2.extensions.unsandboxed === false) {
            throw new Error("Sandboxed mode is not supported");
        }
        if (Scratch2.vm?.runtime) {
            Scratch2.extensions.register(new BetterEvent(Scratch2.runtime));
        } else {
            window.tempExt = {
                Extension: BetterEvent,
                info: {
                    extensionId: BetterEvent.id,
                    name: BetterEvent.id,
                    description: BetterEvent.description,
                    featured: true,
                    disabled: false,
                    collaboratorList: []
                },
                l10n: {
                    en: {
                        [BetterEvent.id]: BetterEvent.description,
                        [BetterEvent.description]: BetterEvent.description
                    }
                }
            };
        }
    })(Scratch);
})();
