// Name: Skydog's Cookie
// Version: 1.0.0
// ID: SkydogCookie
// Description: Manipulate cookies! Set expiration time!
// By: MoreBugOfDog
// License: MPL-2.0
// 本拓展经过开发者严格的法律审查，不涉及任何违法行为。
// 使用本拓展造成的任何后果与开发者无关。
// Cookie的读取和储存强制添加了唯一标识符和命名空间（ccw_custom_作品链接_用户输入的name），
// path强制为/ 防止随请求携带导致错误
// 编辑器内和编辑器外cookie不同步，这是为了方便肝酱开发，非Bug

(() => {
    // src/index.ts
    (function(Scratch2) {
      const SkydogCookieIconUrl = "https://m.ccw.site/user_projects_assets/37848819fcc08004615ec96170b3635c.png";
      const SkydogCookiePictureUrl = "https://m.ccw.site/user_projects_assets/8c2404f1490aad6019616fda9e609133.jpg";
      if (Scratch2.extensions.unsandboxed === false) {
        throw new Error("Sandboxed mode is not supported");
      }
      Scratch2.translate.setup({
        "zh-cn": {
          "SkydogCookie.name": "\u5578\u5929\u72AC\u7684Cookie",
          "SkydogCookie.newCookie": "\u521B\u5EFA\u6216\u4FEE\u6539\u540D\u4E3A[name]\u7684cookie\u503C\u4E3A[value]\u8FC7\u671F\u65F6\u95F4[time]\u5929",
          "SkydogCookie.read": "\u8BFB\u53D6\u540D\u4E3A[name]\u7684cookie\u503C",
          "SkydogCookie.delete": "\u5220\u9664\u540D\u4E3A[name]\u7684cookie"
        },
        en: {
          "SkydogCookie.name": "Skydog's Cookie",
          "SkydogCookie.newCookie": "Create or modify a cookie named [name] with value [value] and expiration time [time]",
          "SkydogCookie.read": "Read the value of the cookie named [name]",
          "SkydogCookie.delete": "Delete the cookie named [name]"
        }
      });
      function i10n(id) {
        return Scratch2.translate({ id, default: id, description: id });
      }
      class SkydogCookie {
        runtime;
        constructor(runtime) {
          this.runtime = runtime;
        }
        getInfo() {
          return {
            id: "SkydogCookie",
            name: i10n("SkydogCookie.name"),
            color1: "#996026",
            color2: "#996026",
            blockIconURI: SkydogCookieIconUrl,
            menuIconURI: SkydogCookieIconUrl,
            blocks: [
              {
                blockType: Scratch2.BlockType.COMMAND,
                opcode: "newCookie",
                text: i10n("SkydogCookie.newCookie"),
                arguments: {
                  name: {
                    type: Scratch2.ArgumentType.STRING,
                    defaultValue: "hello"
                  },
                  value: {
                    type: Scratch2.ArgumentType.STRING,
                    defaultValue: "word"
                  },
                  time: {
                    type: Scratch2.ArgumentType.NUMBER,
                    defaultValue: 30
                  }
                }
              },
              {
                blockType: Scratch2.BlockType.REPORTER,
                opcode: "read",
                text: i10n("SkydogCookie.read"),
                arguments: {
                  name: {
                    type: Scratch2.ArgumentType.STRING,
                    defaultValue: "hello"
                  }
                }
              },
              {
                blockType: Scratch2.BlockType.COMMAND,
                opcode: "delete",
                text: i10n("SkydogCookie.delete"),
                arguments: {
                  name: {
                    type: Scratch2.ArgumentType.STRING,
                    defaultValue: "hello"
                  }
                }
              }
            ]
          };
        }
        newCookie(args) {
          const name = args.name;
          const value = args.value;
          const time = args.time;
          const host = window.location.href;
          const cookie = `ccw_custom_cookie_${host}_${name}=${value};expires=${new Date(Date.now() + time * 24 * 60 * 60 * 1e3).toUTCString()};path=/`;
          document.cookie = cookie;
        }
        read(args) {
          const name = args.name;
          const cookies = document.cookie.split(";");
          let value = "";
          cookies.forEach((cookie) => {
            const [key, val] = cookie.split("=");
            if (key.trim() === `ccw_custom_cookie_${window.location.href}_${name}`) {
              value = val.trim();
            }
          });
          return value;
        }
        delete(args) {
          const name = args.name;
          document.cookie = `ccw_custom_cookie_${window.location.href}_${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
        }
      }
      window.tempExt = {
        Extension: SkydogCookie,
        info: {
          name: "SkydogCookie.name",
          description: "SkydogCookie.descp",
          extensionId: "SkydogCookie",
          iconURL: SkydogCookiePictureUrl,
          insetIconURL: SkydogCookieIconUrl,
          featured: true,
          disabled: false,
          collaborator: "\u591Abug\u7684\u5578\u5929\u72AC @ CCW"
        },
        l10n: {
          "zh-cn": {
            "SkydogCookie.name": "\u5578\u5929\u72AC\u7684Cookie",
            "SkydogCookie.descp": "\u64CD\u7EB5Cookie\uFF01\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF01"
          },
          en: {
            "SkydogCookie.name": "Skydog's Cookie",
            "SkydogCookie.descp": "Manipulate cookies! Set expiration time!"
          }
        }
      };
    })(Scratch);
  })();
  