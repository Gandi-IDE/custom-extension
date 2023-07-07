import * as AlloyFinger from "./alloy_finger.js";

class LazyTongGestureControl {
  constructor(runtime) {
    this.runtime = runtime;
    this._formatMessage = runtime.getFormatMessage({
      "zh-cn": {
        "LazyTongGestureControl.extensionName": "LazyTong手势控制",
        "LazyTongGestureControl.openHelpDocs": "打开帮助文档",
        "LazyTongGestureControl.detectSwipe": "检测到向 [direction] 方滑动",
        "LazyTongGestureControl.detectRotation": "检测到 [rotateDirection] 时针转圈",
        "LazyTongGestureControl.up": "上",
        "LazyTongGestureControl.down": "下",
        "LazyTongGestureControl.left": "左",
        "LazyTongGestureControl.right": "右",
        "LazyTongGestureControl.following": "顺",
        "LazyTongGestureControl.opposite": "逆",
      },
      "en": {
        "LazyTongGestureControl.extensionName": "LazyTong Gesture Control",
        "LazyTongGestureControl.openHelpDocs": "Open help documentation",
        "LazyTongGestureControl.detectSwipe": "Detected swipe in the [direction] direction",
        "LazyTongGestureControl.detectRotation": "Detected [rotateDirection] the direction of rotate",
        "LazyTongGestureControl.up": "up",
        "LazyTongGestureControl.down": "down",
        "LazyTongGestureControl.left": "left",
        "LazyTongGestureControl.right": "right",
        "LazyTongGestureControl.following": "following",
        "LazyTongGestureControl.opposite": "opposite",
      },
    });
  }

  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    });
  }

  swipeDetected = false;
  swipeDirection = "";
  rotationDetected = false;
  rotationDirection = "";

  setupGestureDetection() {
    const stageElement = document.querySelector(".stage");
    const alloyFinger = new AlloyFinger(stageElement, {
      swipe: (evt) => {
        this.detectSwipe(evt.direction);
      },
      rotate: (evt) => {
        this.detectRotation(evt.angle > 0 ? "following" : "opposite");
      },
    });
  }

  detectSwipe(direction) {
    this.swipeDetected = true;
    this.swipeDirection = direction;
  }

  detectRotation(direction) {
    this.rotationDetected = true;
    this.rotationDirection = direction;
  }

  getInfo() {
    return {
      id: "LazyTongGestureControl",
      name: this.formatMessage("LazyTongGestureControl.extensionName"),
      color1: "#90EE90",
      blocks: [
        {
          opcode: "openHelpDocs",
          blockType: "button",
          text: this.formatMessage("LazyTongGestureControl.openHelpDocs"),
        },
        {
          opcode: "detectSwipe",
          blockType: "Boolean",
          text: this.formatMessage("LazyTongGestureControl.detectSwipe"),
          arguments: {
            direction: {
              type: "string",
              menu: "directions",
              defaultValue: "up",
            },
          },
          menus: {
            directions: {
              acceptReporters: true,
              items: [
                { text: this.formatMessage("LazyTongGestureControl.up"), value: "Up" },
                { text: this.formatMessage("LazyTongGestureControl.down"), value: "Down" },
                { text: this.formatMessage("LazyTongGestureControl.left"), value: "Left" },
                { text: this.formatMessage("LazyTongGestureControl.right"), value: "Right" },
              ],
            },
          },
        },
        {
          opcode: "detectRotation",
          blockType: "Boolean",
          text: this.formatMessage("LazyTongGestureControl.detectRotation"),
          arguments: {
            rotateDirection: {
              type: "string",
              menu: "rotateDirections",
              defaultValue: "following",
            },
          },
          menus: {
            rotateDirections: {
              acceptReporters: true,
              items: [
                { text: this.formatMessage("LazyTongGestureControl.following"), value: "following" },
                { text: this.formatMessage("LazyTongGestureControl.opposite"), value: "opposite" },
              ],
            },
          },
        },
      ],
    };
  }

  openHelpDocs() {
    window.open("https://lazytongtech.github.io/help?project=ltgc");
  }

  detectSwipe(args) {
    return this.swipeDetected && this.swipeDirection === args.direction;
  }

  detectRotation(args) {
    if (this.rotationDetected && this.rotationDirection === args.rotateDirection) {
      this.rotationDetected = false;
      return true;
    }
    return false;
  }
}

window.tempExt = {
  Extension: LazyTongGestureControl,
  info: {
    name: "LazyTongGestureControl.extensionName",
    description: "LazyTongGestureControl.description",
    extensionId: "LazyTongGestureControl",
    iconURL: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI5OHB4IiBoZWlnaHQ9IjExOXB4IiB2aWV3Qm94PSIwIDAgOTggMTE5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA5OCAxMTkiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI5OCIgaGVpZ2h下面是格式化后的代码：

```javascript
import * as AlloyFinger from "./alloy_finger.js";

class LazyTongGestureControl {
  constructor(runtime) {
    this.runtime = runtime;
    this._formatMessage = runtime.getFormatMessage({
      "zh-cn": {
        "LazyTongGestureControl.extensionName": "LazyTong手势控制",
        "LazyTongGestureControl.openHelpDocs": "打开帮助文档",
        "LazyTongGestureControl.detectSwipe": "检测到向 [direction] 方滑动",
        "LazyTongGestureControl.detectRotation": "检测到 [rotateDirection] 时针转圈",
        "LazyTongGestureControl.up": "上",
        "LazyTongGestureControl.down": "下",
        "LazyTongGestureControl.left": "左",
        "LazyTongGestureControl.right": "右",
        "LazyTongGestureControl.following": "顺",
        "LazyTongGestureControl.opposite": "逆",
      },
      "en": {
        "LazyTongGestureControl.extensionName": "LazyTong Gesture Control",
        "LazyTongGestureControl.openHelpDocs": "Open help documentation",
        "LazyTongGestureControl.detectSwipe": "Detected swipe in the [direction] direction",
        "LazyTongGestureControl.detectRotation": "Detected [rotateDirection] the direction of rotate",
        "LazyTongGestureControl.up": "up",
        "LazyTongGestureControl.down": "down",
        "LazyTongGestureControl.left": "left",
        "LazyTongGestureControl.right": "right",
        "LazyTongGestureControl.following": "following",
        "LazyTongGestureControl.opposite": "opposite",
      },
    });
  }

  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    });
  }

  swipeDetected = false;
  swipeDirection = "";
  rotationDetected = false;
  rotationDirection = "";

  setupGestureDetection() {
    const stageElement = document.querySelector(".stage");
    const alloyFinger = new AlloyFinger(stageElement, {
      swipe: (evt) => {
        this.detectSwipe(evt.direction);
      },
      rotate: (evt) => {
        this.detectRotation(evt.angle > 0 ? "following" : "opposite");
      },
    });
  }

  detectSwipe(direction) {
    this.swipeDetected = true;
    this.swipeDirection = direction;
  }

  detectRotation(direction) {
    this.rotationDetected = true;
    this.rotationDirection = direction;
  }

  getInfo() {
    return {
      id: "LazyTongGestureControl",
      name: this.formatMessage("LazyTongGestureControl.extensionName"),
      color1: "#90EE90",
      blocks: [
        {
          opcode: "openHelpDocs",
          blockType: "button",
          text: this.formatMessage("LazyTongGestureControl.openHelpDocs"),
        },
        {
          opcode: "detectSwipe",
          blockType: "Boolean",
          text: this.formatMessage("LazyTongGestureControl.detectSwipe"),
          arguments: {
            direction: {
              type: "string",
              menu: "directions",
              defaultValue: "up",
            },
          },
          menus: {
            directions: {
              acceptReporters: true,
              items: [
                { text: this.formatMessage("LazyTongGestureControl.up"), value: "Up" },
                { text: this.formatMessage("LazyTongGestureControl.down"), value: "Down" },
                { text: this.formatMessage("LazyTongGestureControl.left"), value: "Left" },
                { text: this.formatMessage("LazyTongGestureControl.right"), value: "Right" },
              ],
            },
          },
        },
        {
          opcode: "detectRotation",
          blockType: "Boolean",
          text: this.formatMessage("LazyTongGestureControl.detectRotation"),
          arguments: {
            rotateDirection: {
              type: "string",
              menu: "rotateDirections",
              defaultValue: "following",
            },
          },
          menus: {
            rotateDirections: {
              acceptReporters: true,
              items: [
                { text: this.formatMessage("LazyTongGestureControl.following"), value: "following" },
                { text: this.formatMessage("LazyTongGestureControl.opposite"), value: "opposite" },
              ],
            },
          },
        },
      ],
    };
  }

  openHelpDocs() {
    window.open("https://lazytongtech.github.io/help?project=ltgc");
  }

  detectSwipe(args) {
    return this.swipeDetected && this.swipeDirection === args.direction;
  }

  detectRotation(args) {
    if (this.rotationDetected && this.rotationDirection === args.rotateDirection) {
      this.rotationDetected = false;
      return true;
    }
    return false;
  }
}

window.tempExt = {
  Extension: LazyTongGestureControl,
  info: {
    name: "LazyTongGestureControl.extensionName",
    description: "LazyTongGestureControl.description",
    extensionId: "LazyTongGestureControl",
    iconURL: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI5OHB4IiBoZWlnaHQ9IjExOXB4IiB2aWV3Qm94PSIwIDAgOTggMTE5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA5OCAxMTkiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI5OCIgaGVpZ2h0PSIxMTkiIHg9IjAiIHk9IjAiCiAgICBocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdJQUFBQjNDQU1BQUFEUFlHVVVBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTgpBQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFCQlZCTVZFV1E3cEE0T0RnTURBd3hNVEVBCkFBQXdNREFrSkNULy8vOHZMeThtSmlZR0JnWUhCd2M1T1RrdExTMHVMaTQwTkRSSVNFZ2JHeHNKQ1FrM056Zno4L01sSlNWMGRIUmIKVzFzRkJRVldWbFkrUGo0WkdSa09EZzRYRnhkVFUxTzZ1cm9JQ0Fnbkp5ZFNVbEtQajQ4ckt5c0VCQVFCQVFGRFEwTmdZR0FVRkJTbApwYVZPVGs1Q1FrSWpJeU1zTEN3VkZSV0dob1lRRUJCUVVGQVlHQmcxTlRVZ0lDRG41K2NEQXdQUjBkSE56YzBURXhNUkVSRkVSRVJhCldscEtTa29xS2lveU1qSWlJaUl6TXpNOFBEd1BEdy84L1B4OWZYMGVIaDVmWDE4TkRRMFdGaFpkWFYyWW1KZzlQVDBmSHg4Q0FnSWgKSVNFcEtTbEhSMGNkSFIwS0NncEJRVUY0ZUhpMHpZTDBBQUFBQVdKTFIwUUhGbUdJNndBQUFBbHdTRmx6QUFBT3hBQUFEc1FCbFNzTwpHd0FBQUFkMFNVMUZCK2NIQmdZc0NSUytyZTRBQUFLcVNVUkJWR2plN2RocFY5cEFGQWJnbS9DeUpTQkxaTE5vS1VoczZ3TFlBaW91CnBZSlN1OWpGOXYvL2xBNENaVXNnSkROUU9IbS9rZVRjSjhzazNCbWkrWkZrV1pZa0N3ZmFqQWVEZUwxclMzamg4L21mNHdNQ1FnZ0UKL1lNRWd4QUFTQkw4STRHQWg3NEVRbEhHQ1ZYbFRyQnhORWFBLzlOd0NaZHdDWmR3aWMwbFFxRnVaeVdPQ0llSGJZOFlZZ3NZZEQwKwpCQVp0VDhoMnc3Z2FBc0dSenFyM2JNSk9Hc1pwSWpLeGdaMTV3RkhET0Uyb0V4dFVwdzNqU29qcE94Y3hiQmdseWVLclk0RlExZW1HCjBUT2NNWGc0RUFhRHp2dHZYQytCWUsvT3ZHRnNqeGgvZFVRUWt4TUdBWVN5RWNURUJrVThBWmR3Q1pkd2lZMGg3TVFsWEVJUUVZM0YKbEhoYzI5NFdSQ1F3akpJVVFMQTVRU0xSLzUxS3BTSEw2MGl3Qm4xMFU0YVYxVFN1eE01MGxSZEFsaWV4YTFCbGI0L1ZmcmxPUk02NApTanFOYUpRVGtUV3J3aTd2RlI4aUR4U01kKzd2WTIwSUtoWjFzOTBIM0w1UmlNZE45bWN5bklqWHdCdXpJOTZLSnh5bi8zOXhlSWhZClRDeEJkQVFjQ3lZb0VzSEp5ZG9UUkQ3Z1FEQkJwUkxLWmJFRWtlTDhaZjRQQ1BiL1VCRk5uSjVpUnpCQjlJNzNyVm9KUVhvdUo1cEkKQXU4RkUxU3RvcllFZ3FOaFBJV3BGNHVpaVRPZ0twaWdVQWo1L05vUXFKQkpLbncraU9mblNKb1JWSy9YT1JBWEZ6T254R2cwbkFvMQo0SElXY1FVNGJYeXl1azRySmtqVG5EVWwxOWU0dXFJNXVRRSsyQ2VBM1hrQVM3T0pqM2FGOUx5N3REU0M2QmkzdDNhQVZndnR0aldDCm1vQU5vd1hjV1FSWTd1K0hheVFXbzZxNFcwQ3dTeXdnc0xDWmEzWUJvQU5kUDF0TUlNcDBsM2N1clFIc29qOHRXcitYaHdjVWk1L24KMVpja2RpNUg5b1JsRUVSZjJFTUV2cHFXcnlXNmE0emZiTmZ2cFNETHdPUGpWbUZpU2FQVCtmNjhkdm5EWWYxK2Z1WnlNRWlwVk9aVApmemxFTisxMlN0TitQVDJ4RWRCb05uLy9tWDMwWDFZZDJFLzVvaTJXQUFBQUpYUkZXSFJrWVhSbE9tTnlaV0YwWlFBeU1ESXpMVEEzCkxUQTJWREEyT2pRME9qQTVLekF3T2pBd29BUmc2d0FBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeU15MHdOeTB3TmxRd05qbzAKTkRvd09Tc3dNRG93TU5GWjJGY0FBQUFvZEVWWWRHUmhkR1U2ZEdsdFpYTjBZVzF3QURJd01qTXRNRGN0TURaVU1EWTZORFE2TURrcgpNREE2TURDR1RQbUlBQUFBQUVsRlRrU3VRbUNDIiAvPgo8L3N2Zz4K",
    insetIconURL: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1NzZweCIgaGVpZ2h0PSIzNjZweCIgdmlld0JveD0iMCAwIDU3NiAzNjYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU3NiAzNjYiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI1NzYiIGhlaWdodD0iMzY2IiB4PSIwIiB5PSIwIgogICAgaHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFrQUFBQUZ1Q0FNQUFBQmVDbGZmQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQkJWQk1WRVdRN3BBNE9EZ01EQXd4TVRFQQpBQUF3TURBa0pDVC8vLzh2THk4bUppWUdCZ1lIQndjNU9Ua3RMUzB1TGk0ME5EUklTRWdiR3hzSkNRazNOemZ6OC9NbEpTVjBkSFJiClcxc0ZCUVZXVmxZK1BqNFpHUmtPRGc0WEZ4ZFRVMU82dXJvSUNBZ25KeWRTVWxLUGo0OHJLeXNFQkFRQkFRRkRRME5nWUdBVUZCU2wKcGFWT1RrNUNRa0lqSXlNc0xDd1ZGUldHaG9ZUUVCQlFVRkFZR0JnMU5UVWdJQ0RuNStjREF3UFIwZEhOemMwVEV4TVJFUkZFUkVSYQpXbHBLU2tvcUtpb3lNaklpSWlJek16TThQRHdQRHcvOC9QeDlmWDBlSGg1ZlgxOE5EUTBXRmhaZFhWMlltSmc5UFQwZkh4OENBZ0loCklTRXBLU2xIUjBjZEhSMEtDZ3BCUVVGNGVIaTB6WUwwQUFBQUFXSkxSMFFIRm1HSTZ3QUFBQWx3U0ZsekFBQU94QUFBRHNRQmxTc08KR3dBQUFBZDBTVTFGQitjSEJnWXNDR081blhnQUFBUllTVVJCVkhqYTdkMXJWeE5YRklCaEV6WlJFaFFob21EUlVoRnM2d1cxVmJ4YgpxaWkxRjN1eC9mOC9wVUZGYm9tSnMxbnJKQ3ZQODNIeVpaODE3OHBNaG5XWUV5Y0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBCkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFER1RLMWVyOWRxcGFkZ05FM0UKcnNuSjByTXdnZ1JFeG1RMEdpZmZhMFNjS2owTkl5ZW1UdTZhbW9yUzB6QmlhclU0dVUrNGxlYUxDSWlVWnZOZ1FLMVc2WWtZS1ozZgpYZ2NDQ25kQmZBa0JrU0lnVWdSRWlvQklFUkFwQWlKRlFLUUlpQlFCa1NJZ1VnUkVpb0JJRVJBcEFpSkZRS1QwQ0doNmVtZW5XT25oCkdIN2RBanA5ZW0ralQrbjVHSEpkQWpvVHNidlBweEduZGpmNlROdThTaGNDSXFWTFFERzFiNmZZaDN1aTB6YXYwdDNSZ0dZT0hlaDgKNjV5eWVaVWVqZ2JVT25TZ1pmTXF2UW1JbEtNQkhiMm16WFRkdkZxcmVWVEVJQUcxV2tjM3IwN3MvVStZaWRKTG9LUUJBdXJ5UTIzeQoweTk5QVkyNWJFQ05ocWZWWTYxYVFBY2ZGWlZlQXdWVkN1and2NFFwdlFqS3FSUlFVMEI4SkNCU0tnVjA2RUN6OUNJbzV6Z0NjaGM5CnhnUkVpb0JJRVJBcEFpSkZRS1FJaUJRQmtTSWdVZ1JFaW9CSUVSQXBBaUxsVUF4VkNHaWNDWWdVQVpFaUlGSUVSSXFBU0JFUWd6azcKTzl1Y20ydWZPM2Z3c0lBWXdIenNhWjdmLzRtQTZHdHFLdWJuUDU3dEN4Y1dvbDdmKzB4QTlDVWdVaUltOXAvd3hVNDA3ZmFuendURQo1MTA4MnNoWEVVc2ZQaFFRL1Z6cTBzamx5NTF5dmo0aElQb1RFQ25MM1J0WldJaXpad1ZFWDB1OUd1bDhOWDBqSVBxNUVySFMvZFJmCnZSb0NvaDhCa2JPNnV0YnI1RjhURUFPSXVia2VaMzl4VVVEMDlXM0VkNzNPLy9jQ29wL1BCWlFtb0RGdy9Yck16Z3FJNm01RTNCUVEKMWMzTXhLMWJBcUlxQVpIVWlMZ21JS3BiWDQvYnR3VkVkYzM4ZzJjQmpUTUJrUk54UjBCVWQvZHVYQlFRQ1Q4YzkwVk1RT05GUU9TcwpMUzhMaU9yT1Ivd29JS3E3ZHkvdUM0aktkZ0k2eG9JRU5INDJWbGNGUkhVUEl1NEppT3FtcCtQS0ZRRlIxVEVHRkhkS0w0WVM3aHpQCm4xVWZQb3p6K1dFWVFSc2JHOGNRMEtOSExtQmpLeDQvenZaelArSko2V1ZReXRPSTdGYWZwYlcxMHF1Z0dBR1IwMjduTm1vOGV4WlAKbjVaZUJDVTlqL2lwZWtBUmwwb3ZnTUkyTitQbnF2MHN1SDRoSUpKdXhvc1hWZko1K1RLMnRrb1B6eERZaktoUTBNdUlWNlVuWnppOApmcjMzTG8wQnRWcnhTajk4VURHZzBtTXpQSzVHTEgxQlB0dXh0dmFnOU13TWs4V2RWL2c4R1N5ZnpoZldMNlhuWmZpOGVST3JxNy8yCnE2ZFc2NVIyby9Tc0RDRUJrZlJiNTlZNDR2ZWU4ZHlmMzNuMzZoK2x4MlNJcmRUckVXL2ZubGs1OUhLRTdlMC8zNyt4OTYvU0F6TDgKL2w1ZWppN1cxMitYbm95UklDRFN0cll1dE52L3ZIdlh1YTkrdkxuNTczK2w1d0VBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQQpBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUtDYi93RTNCZGhQCkVHaGxuUUFBQUNWMFJWaDBaR0YwWlRwamNtVmhkR1VBTWpBeU15MHdOeTB3TmxRd05qbzBORG93T0Nzd01Eb3dNQVp6YTE4QUFBQWwKZEVWWWRHUmhkR1U2Ylc5a2FXWjVBREl3TWpNdE1EY3RNRFpVTURZNk5EUTZNRGdyTURBNk1EQjNMdFBqQUFBQUtIUkZXSFJrWVhSbApPblJwYldWemRHRnRjQUF5TURJekxUQTNMVEEyVkRBMk9qUTBPakE0S3pBd09qQXdJRHZ5UEFBQUFBQkpSVTVFcmtKZ2dnPT0iIC8+Cjwvc3ZnPgo=",
    featured: true,
    disabled: false,
    collaborator: "LazyTong",
  },
  l10n: {
   "zh-cn": {
      "LazyTongGestureControl.extensionName": "LazyTong手势控制",
      "LazyTongGestureControl.description": "让你的项目支持手势操作！",
    },
    en: {
      "LazyTongGestureControl.extensionName": "LazyTong Gesture Control",
      "LazyTongGestureControl.description": "Make your project support gesture manipulation!",
    },
  },
};