// Name: Scbackend SDK
// ID: scbackendsdk
// Description: SDK for Scbackend
// By: XQYWorld
// Original: FurryR
// License: MPL-2.0

(() => {
  // src/l10n/index.js
  var l10n_default = {
    zh: {
      "scbackendsdk.connect": "\u8FDE\u63A5\u5230 [remaddr] \u670D\u52A1\u5668\u4E0A\u7684 [instname] \u5B9E\u4F8B",
      "scbackendsdk.connectwait": "\u8FDE\u63A5\u5230 [remaddr] \u670D\u52A1\u5668\u7684 [instname] \u5B9E\u4F8B \u5E76\u7B49\u5F85\u8FDE\u63A5\u5B8C\u6210",
      "scbackendsdk.disconnect": "\u65AD\u5F00\u8FDE\u63A5",
      "scbackendsdk.isconnected": "\u5DF2\u8FDE\u63A5\uFF1F",
      "scbackendsdk.send": "\u53D1\u9001\u6D88\u606F [msg]",
      "scbackendsdk.whenmessage": "\u5F53\u6536\u5230\u6D88\u606F",
      "scbackendsdk.getmsg": "\u6536\u5230\u7684\u6D88\u606F",
      "scbackendsdk.ping": "\u5EF6\u8FDF(\u6BEB\u79D2)"
    },
    en: {
      "scbackendsdk.connect": "Connect to [remaddr] server [instname] instance",
      "scbackendsdk.connectwait": "Connect to [remaddr] server [instname] instance and wait",
      "scbackendsdk.disconnect": "Disconnect",
      "scbackendsdk.isconnected": "Is connected?",
      "scbackendsdk.send": "Send message [msg]",
      "scbackendsdk.whenmessage": "When message received",
      "scbackendsdk.getmsg": "Received message",
      "scbackendsdk.ping": "Ping (ms)"
    }
  };

  // src/index.js
  (function(Scratch2) {
    if (Scratch2.extensions.unsandboxed === false) {
      throw new Error("Sandboxed mode is not supported");
    }
    const translate = function(key) {
      const locale = globalThis.navigator.language.slice(0, 2);
      if (l10n_default[locale] && l10n_default[locale][key]) {
        return l10n_default[locale][key];
      } else {
        return l10n_default["en"][key] || key;
      }
    };
    class ScbackendSDK {
      constructor() {
        this.ws = null;
        this.isopened = false;
        this.delay = -1;
      }
      getInfo() {
        return {
          id: "scbackendsdk",
          name: "Scbackend SDK",
          blocks: [
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "connect",
              text: translate("scbackendsdk.connect"),
              arguments: {
                remaddr: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "ws://localhost:3031"
                },
                instname: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "test"
                }
              }
            },
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "connectwait",
              text: translate("scbackendsdk.connectwait"),
              arguments: {
                remaddr: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "ws://localhost:3031"
                },
                instname: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "test"
                }
              }
            },
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "disconnect",
              text: translate("scbackendsdk.disconnect")
            },
            {
              blockType: Scratch2.BlockType.BOOLEAN,
              opcode: "isconnected",
              text: translate("scbackendsdk.isconnected")
            },
            {
              blockType: Scratch2.BlockType.REPORTER,
              opcode: "ping",
              text: translate("scbackendsdk.ping")
            },
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "send",
              text: translate("scbackendsdk.send"),
              arguments: {
                msg: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: "Hello, world!"
                }
              }
            },
            {
              blockType: Scratch2.BlockType.EVENT,
              opcode: "whenmessage",
              text: translate("scbackendsdk.whenmessage"),
              isEdgeActivated: false
            },
            {
              blockType: Scratch2.BlockType.REPORTER,
              opcode: "getmsg",
              text: translate("scbackendsdk.getmsg")
            }
          ]
        };
      }
      _doconnect(remaddr, dst, util, resolve, reject) {
        let attempts = 0;
        const maxAttempts = 5;
        const connectWS = () => {
          if (this.isopened) return;
          this.ws = new WebSocket(remaddr);
          let interval;
          this.ws.onopen = () => {
            this.ws.send(JSON.stringify({ type: "handshake", dst: dst.toString() }));
          };
          this.ws.onmessage = (event) => {
            const msg = event.data;
            const data = JSON.parse(msg);
            switch (data.type) {
              case "handshake":
                if (data.status === "ok") {
                  this.isopened = true;
                  this.sessionid = data.sessionId;
                  interval = setInterval(() => {
                    if (this.ws && this.isopened) {
                      this.dtimer = Date.now();
                      this.ws.send(JSON.stringify({ type: "ping" }));
                    }
                  }, 5e3);
                  if (resolve) resolve();
                } else {
                  this.ws.close();
                  this.ws = null;
                  this.isopened = false;
                  attempts++;
                  if (attempts < maxAttempts) {
                    setTimeout(connectWS, 1e3);
                  } else {
                    util.startHats("scbackendsdk_whenerror");
                    if (reject) reject(new Error("Handshake failed"));
                  }
                }
                break;
              case "message":
                util.startHats("scbackendsdk_whenmessage").forEach((t) => {
                  t.initParams();
                  t.pushParam("data", data.message);
                });
                break;
              case "pong":
                this.delay = Date.now() - this.dtimer;
                break;
            }
          };
          this.ws.onclose = (event) => {
            let isopened = this.isopened;
            this.ws = null;
            this.isopened = false;
            if (isopened) return;
            attempts++;
            if (attempts < maxAttempts) {
              setTimeout(connectWS, 1e3);
            } else {
              util.startHats("scbackendsdk_whenerror");
              if (reject) reject(event);
            }
          };
          this.ws.onerror = (error) => {
            attempts++;
            if (attempts < maxAttempts) {
              setTimeout(connectWS, 1e3);
            } else {
              util.startHats("scbackendsdk_whenerror");
              if (reject) reject(error);
            }
          };
        };
        connectWS();
      }
      connect(args, util) {
        if (this.ws) {
          this.ws.close();
          this.ws = null;
          this.isopened = false;
        }
        this._doconnect(args.remaddr, args.instname, util);
      }
      connectwait(args, util) {
        return new Promise((resolve, reject) => {
          this._doconnect(args.remaddr, args.instname, util, resolve, reject);
        });
      }
      disconnect() {
        if (this.ws) {
          this.ws.close();
          this.ws = null;
        }
      }
      isconnected() {
        return this.isopened;
      }
      ping() {
        return this.delay;
      }
      send(args) {
        if (this.ws && this.isopened) {
          this.ws.send(JSON.stringify({ type: "message", body: args.msg }));
        }
      }
      getmsg(_args, util) {
        return util.thread.getParam("data") || "";
      }
    }
    Scratch2.extensions.register(new ScbackendSDK());
  })(Scratch);
})();
