import { extensionId, Icon } from "./assets";

export default class kukemcWebhook {
  constructor(runtime) {
    this.runtime = runtime;

    this._formatMessage = runtime.getFormatMessage({
      "zh-cn": {
        "kukemcWebhook.div.1": "✨ WebHook 参数",
        "kukemcWebhook.div.2": "🌍 WebHook 请求",
        "kukemcWebhook.block.webHookRequest": "请求Webhook [URL]",
        "kukemcWebhook.block.webHookRequestCompleted": "当Webhook请求完成时 状态码=[STATUS]",
        "kukemcWebhook.block.setHeader": "设置请求头 [KEY] 值 [VALUE]",
        "kukemcWebhook.block.setMethod": "设置请求方法 [METHOD]",
        "kukemcWebhook.block.setBody": "设置请求参数为 [BODY]",
        "kukemcWebhook.block.checkStatus": "检查状态码是否为 [CODE]",
        "kukemcWebhook.block.cancelRequest": "取消当前请求",
        "kukemcWebhook.block.getRemainingPoints": "剩余请求点数",
        "kukemcWebhook.tip.rateLimit": "请求过于频繁！请等待数秒再试。",
      },
      en: {
        "kukemcWebhook.div.1": "✨ WebHook Parameters",
        "kukemcWebhook.div.2": "🌍 WebHook Request",
        "kukemcWebhook.block.webHookRequest": "Request Webhook [URL]",
        "kukemcWebhook.block.webHookRequestCompleted": "When Webhook request completes with status [STATUS]",
        "kukemcWebhook.block.setHeader": "Set request header [KEY] to [VALUE]",
        "kukemcWebhook.block.setMethod": "Set request method to [METHOD]",
        "kukemcWebhook.block.setBody": "Set request body to [BODY]",
        "kukemcWebhook.block.checkStatus": "Check if status code is [CODE]",
        "kukemcWebhook.block.cancelRequest": "Cancel current request",
        "kukemcWebhook.block.getRemainingPoints": "Remaining Request Points",
        "kukemcWebhook.tip.rateLimit": "Rate limit exceeded! Try again in a few seconds.",
      },
      uk: {
        "kukemcWebhook.div.1": "✨ Параметри вебхуку",
        "kukemcWebhook.div.2": "🌍 Запит вебхуку",
        "kukemcWebhook.block.webHookRequest": "Запит вебхуку [URL]",
        "kukemcWebhook.block.webHookRequestCompleted": "Коли запит вебхуку завершується статусом [STATUS]",
        "kukemcWebhook.block.setHeader": "Надати заголовок запиту [KEY] до [VALUE]",
        "kukemcWebhook.block.setMethod": "Надати метод запиту в [METHOD]",
        "kukemcWebhook.block.setBody": "Надати тіло запиту в [BODY]",
        "kukemcWebhook.block.checkStatus": "Перевірити чи є код статусу [CODE]",
        "kukemcWebhook.block.cancelRequest": "Скасувати поточний запит",
        "kukemcWebhook.block.getRemainingPoints": "Залишок балів запиту",
        "kukemcWebhook.tip.rateLimit": "Ліміт швидкості перевищено! Повторіть спробу за кілька секунд.",
      },
    });

    this._lastStatusCode = 0;
    this._headers = {};
    this._method = "GET";
    this._body = "{}";
    this._controller = null;
    this._points = 3;
    this._rateLimitMessage = this.formatMessage("kukemcWebhook.tip.rateLimit");

    this._intervalId = setInterval(() => {
      if (this._points < 3) {
        this._points++;
      }
    }, 1000);  // 每秒恢复一点，最大为三点
  }

  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    });
  }

  getInfo() {
    const webHookRequest = {
      opcode: "webHookRequest",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukemcWebhook.block.webHookRequest"),
      arguments: {
        URL: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "https://example.com",
        },
      },
    };

    const webHookRequestCompleted = {
      opcode: "webHookRequestCompleted",
      blockType: Scratch.BlockType.HAT,
      isEdgeActivated: false,
      text: this.formatMessage("kukemcWebhook.block.webHookRequestCompleted"),
      arguments: {
        STATUS: {
          type: 'ccw_hat_parameter',
        },
      },
    };

    const setHeader = {
      opcode: "setHeader",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukemcWebhook.block.setHeader"),
      arguments: {
        KEY: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "Authorization",
        },
        VALUE: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "Bearer token",
        },
      },
    };

    const setMethod = {
      opcode: "setMethod",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukemcWebhook.block.setMethod"),
      arguments: {
        METHOD: {
          type: Scratch.ArgumentType.STRING,
          menu: "METHOD",
          defaultValue: "GET",
        },
      },
    };

    const setBody = {
      opcode: "setBody",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukemcWebhook.block.setBody"),
      arguments: {
        BODY: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "{}",
        },
      },
    };

    const checkStatus = {
      opcode: "checkStatus",
      blockType: Scratch.BlockType.BOOLEAN,
      text: this.formatMessage("kukemcWebhook.block.checkStatus"),
      arguments: {
        CODE: {
          type: Scratch.ArgumentType.NUMBER,
          defaultValue: 200,
        },
      },
    };

    const cancelRequest = {
      opcode: "cancelRequest",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukemcWebhook.block.cancelRequest"),
    };

    const getRemainingPoints = {
      opcode: "getRemainingPoints",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukemcWebhook.block.getRemainingPoints"),
    };

    return {
      id: extensionId,
      name: "WebHook",
      blockIconURI: Icon,
      menuIconURI: Icon,
      color1: "#13003a",
      color2: "#0a001e",
      docsURI: "https://learn.ccw.site/article/99e0432c-98f2-4394-8a32-e501beee1e27",
      blocks: [
        "---" + this.formatMessage("kukemcWebhook.div.1"),
        setMethod,
        setHeader,
        setBody,
        "---" + this.formatMessage("kukemcWebhook.div.2"),
        webHookRequest,
        webHookRequestCompleted,
        checkStatus,
        cancelRequest,
        getRemainingPoints,
      ],
      menus: {
        METHOD: ["GET", "POST", "PUT", "DELETE"],
      },
    };
  }

  async webHookRequest({ URL }) {
    this._points--;
    if (this._points > 0) {
      this._controller = new AbortController();
      const options = {
        method: this._method,
        headers: { "Content-Type": "application/json", ...this._headers },
        body: this._method === "GET" ? undefined : this._body,
        signal: this._controller.signal,
        credentials: "omit",
      };

      try {
        const response = await fetch(URL, options);
        this._lastStatusCode = response.status;
        this.runtime.startHatsWithParams(`${extensionId}_webHookRequestCompleted`, { parameters: { STATUS: response.status } });
      } catch (error) {
        if (error.name === "AbortError") {
          // 请求被取消
        } else {
          // 其他错误
        }
      }
    } else {
      this.runtime.scratchBlocks.utils?.toast(this._rateLimitMessage);
    }
  }

  setHeader({ KEY, VALUE }) {
    this._headers[KEY] = VALUE;
  }

  setMethod({ METHOD }) {
    this._method = METHOD;
  }

  setBody({ BODY }) {
    this._body = BODY;
  }

  checkStatus({ CODE }) {
    return this._lastStatusCode === CODE;
  }

  cancelRequest() {
    if (this._controller) {
      this._controller.abort();
      this._controller = null;
    }
  }

  getRemainingPoints() {
    return this._points;
  }

  webHookRequestCompleted() {
    return true;
  }
}
