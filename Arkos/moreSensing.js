/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

import Color from '../utils/color.js';
// import Cast from '../utils/Cast.js';

const { Cast, ArgumentType, BlockType } = window.Scratch;

// const extensionId = 'test';
const extensionId = 'moreSensing';

const icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzA4NjE1NDgxNzA3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5MTA0IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48cGF0aCBkPSJNNTEyIDEyOGMtODkuNiAwLTE3MC42NjY2NjcgMjkuODY2NjY3LTIzNC42NjY2NjcgODEuMDY2NjY3LTQuMjY2NjY3IDAtOC41MzMzMzMgNC4yNjY2NjctMTIuOCA4LjUzMzMzMy0xNy4wNjY2NjcgMTcuMDY2NjY3LTIxLjMzMzMzMyA0Mi42NjY2NjctNC4yNjY2NjYgNTkuNzMzMzMzbDIyMS44NjY2NjYgMjYwLjI2NjY2N2M4LjUzMzMzMyA4LjUzMzMzMyAyMS4zMzMzMzMgMTcuMDY2NjY3IDM0LjEzMzMzNCAxNy4wNjY2NjcgMjUuNiAwIDQyLjY2NjY2Ny0xNy4wNjY2NjcgNDIuNjY2NjY2LTQyLjY2NjY2NyAwLTguNTMzMzMzLTQuMjY2NjY3LTE3LjA2NjY2Ny04LjUzMzMzMy0yMS4zMzMzMzMgMCAwIDAtNC4yNjY2NjctNC4yNjY2NjctNC4yNjY2NjdMNDY5LjMzMzMzMyAzOTIuNTMzMzMzYzEyLjgtNC4yNjY2NjcgMjUuNi04LjUzMzMzMyA0Mi42NjY2NjctOC41MzMzMzMgNzIuNTMzMzMzIDAgMTI4IDU1LjQ2NjY2NyAxMjggMTI4cy01NS40NjY2NjcgMTI4LTEyOCAxMjgtMTI4LTU1LjQ2NjY2Ny0xMjgtMTI4YzAtMjUuNi0xNy4wNjY2NjctNDIuNjY2NjY3LTQyLjY2NjY2Ny00Mi42NjY2NjdzLTQyLjY2NjY2NyAxNy4wNjY2NjctNDIuNjY2NjY2IDQyLjY2NjY2N2MwIDExOS40NjY2NjcgOTMuODY2NjY3IDIxMy4zMzMzMzMgMjEzLjMzMzMzMyAyMTMuMzMzMzMzczIxMy4zMzMzMzMtOTMuODY2NjY3IDIxMy4zMzMzMzMtMjEzLjMzMzMzMy05My44NjY2NjctMjEzLjMzMzMzMy0yMTMuMzMzMzMzLTIxMy4zMzMzMzNjLTM4LjQgMC03Mi41MzMzMzMgOC41MzMzMzMtMTAyLjQgMjUuNkwzNTQuMTMzMzMzIDI2MC4yNjY2NjdDNDAxLjA2NjY2NyAyMzAuNCA0NTIuMjY2NjY3IDIxMy4zMzMzMzMgNTEyIDIxMy4zMzMzMzNjMTY2LjQgMCAyOTguNjY2NjY3IDEzMi4yNjY2NjcgMjk4LjY2NjY2NyAyOTguNjY2NjY3cy0xMzIuMjY2NjY3IDI5OC42NjY2NjctMjk4LjY2NjY2NyAyOTguNjY2NjY3LTI5OC42NjY2NjctMTMyLjI2NjY2Ny0yOTguNjY2NjY3LTI5OC42NjY2NjdjMC0yNS42LTE3LjA2NjY2Ny00Mi42NjY2NjctNDIuNjY2NjY2LTQyLjY2NjY2N3MtNDIuNjY2NjY3IDE3LjA2NjY2Ny00Mi42NjY2NjcgNDIuNjY2NjY3YzAgMjEzLjMzMzMzMyAxNzAuNjY2NjY3IDM4NCAzODQgMzg0czM4NC0xNzAuNjY2NjY3IDM4NC0zODQtMTcwLjY2NjY2Ny0zODQtMzg0LTM4NHoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjE5MTA1Ij48L3BhdGg+PC9zdmc+';
const cover = 'https://m.ccw.site/user_projects_assets/5a02c530a0ebad6acf33c36fcc205f06.png';

/** @typedef {any} SCarg 来自Scratch参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字和文本，需要同时处理 */

/** @typedef {any} Util util 参数，暂时定为 any */

/** 记录按下的键
 * @type {{[key: string]: boolean}}
 */
const keyPressed = {};
/** 记录上一帧按下的键
 * @type {{[key: string]: boolean}}
 */
let lastKeyPressed = {};

const unitToSecs = {
  ms: 0.001,
  s: 1,
  min: 60,
  h: 3600,
  d: 86400,
  m: 86400 * 30,
  y: 86400 * 365,
};

const getKeysMap = () => {
  // 记录按键映射
  const keysMap = {
    MouseLeft: {
      text: 'mouseLeft',
      value: 'mouse left',
    },
    MouseMiddle: {
      text: 'mouseMiddle',
      value: 'mouse middle',
    },
    MouseRight: {
      text: 'mouseRight',
      value: 'mouse right',
    },
    Space: {
      text: 'space',
      value: 'space',
    },
    ArrowUp: {
      text: 'up arrow',
      value: 'up arrow',
    },
    ArrowDown: {
      text: 'down arrow',
      value: 'down arrow',
    },
    ArrowLeft: {
      text: 'left arrow',
      value: 'left arrow',
    },
    ArrowRight: {
      text: 'right arrow',
      value: 'right arrow',
    },
    Enter: 'enter',
    NumpadEnter: 'enter',
    Backspace: 'backspace',
    Delete: 'delete',
    Escape: 'escape',
    Tab: 'table',
    CapsLock: 'caps lock',
    ShiftLeft: 'shift',
    ShiftRight: 'shift',
    ControlLeft: 'control',
    ControlRight: 'control',
    AltLeft: 'alt',
    AltRight: 'alt',
    MetaLeft: 'win',
    MetaRight: 'win',
    // KeyA~Z: 'a'~z',
    // Numpad0~9: 0~9, Digit0~9
    // F1~12: 'f1'~'f12',
  };
  // 加入字母
  // eslint-disable-next-line no-restricted-syntax
  for (const l of 'abcdefghijklmnopqrstuvwxyz') keysMap[`Key${l.toUpperCase()}`] = l;
  // 加入数字
  for (let i = 0; i < 10; i += 1) {
    keysMap[`Digit${i}`] = `${i}`;
    keysMap[`Numpad${i}`] = `${i}`;
  }
  Object.assign(keysMap, {
    Comma: ',',
    NumpadDecimal: '.',
    Period: '.',
    NumpadDivide: '/',
    Slash: '/',
    Semicolon: ';',
    Quote: "'",
    BracketLeft: '[',
    BracketRight: ']',
    Backslash: '\\',
    NumpadSubtract: '-',
    Minus: '-',
    Equal: '=',
    NumpadAdd: '+',
    NumpadMultiply: '*',
    Backquote: '`',
    Home: 'home',
    End: 'end',
    PageUp: 'page up',
    PageDown: 'page down',
    Insert: 'insert',
    NumLock: 'num lock',
  });
  // 加入F1~12
  for (let i = 1; i < 13; i += 1) keysMap[`F${i}`] = `f${i}`;
  return keysMap;
};
const SC_KEYS_MAP = getKeysMap();

/** 根据键盘keycode获取Scratch的key名 */
const getScratchKeyByKey = (key) => {
  const c = SC_KEYS_MAP[key];
  if (c) {
    if (typeof c === 'string') return c;
    return c.value;
  }
  // 没找到，返回原始keycode
  return key;
};

/**
 * 用于移除扩展隐藏的监视器（避免扩展无法移除）
 */
const removeExtMonitors = (extId, runtime) => {
  if (!runtime || !runtime._monitorState?._list?._tail?.array) return;
  // eslint-disable-next-line no-restricted-syntax
  runtime._monitorState._list._tail.array
    .filter((item) => (item[0].startsWith(`${extId}_`) && !item[1].visible))
    .forEach((item) => {
      runtime.requestRemoveMonitor(item[0]);
    });
};

/**
 * 用于 async 函数的缓存装饰器：
 * - 每 cacheTime 才刷新一次结果，其他时候读取缓存值
 * - 首次读取，或者两次读取间隔超过 cacheTime，返回 Promise，否则返回缓存的结果值
 */
const cacheDecorator = (func, cacheTime) => {
  let lastRefresh = 0;
  let lastRequest = 0;
  let resultCache = null;
  return function (...args) {
    const now = Date.now();
    // 时间间隔 > cacheTime，刷新缓存结果
    if (now < lastRefresh || now - lastRefresh >= cacheTime || !resultCache) {
      lastRefresh = now;
      const promise = func.apply(this, args).then((res) => {
        resultCache = res;
        return res;
      });
      // 两次请求间隔过长，返回promise
      if (now < lastRequest || now - lastRequest >= cacheTime || !resultCache) {
        lastRequest = now;
        return promise;
      }
    }
    lastRequest = now;
    // 其他时候直接返回缓存值
    return resultCache;
  };
};

let hacked = false;
const initHack = (runtime) => {
  // 避免重复劫持
  if (hacked || !runtime) return;
  hacked = true;

  removeExtMonitors(extensionId, runtime);

  const stp = runtime._step;
  // eslint-disable-next-line no-param-reassign
  runtime._step = () => {
    stp.call(runtime);
    // 每帧结束，记录该帧按下的键
    lastKeyPressed = { ...keyPressed };
  };

  // 停止作品时清空克隆体计数
  runtime.on('PROJECT_STOP_ALL', () => {
    // eslint-disable-next-line no-param-reassign
    runtime._cloneCounter = 0;
  });

  // 监听键盘keydown，keyup
  document.addEventListener('keydown', (event) => {
    const key = getScratchKeyByKey(event.code);
    keyPressed[key] = true;
  });
  document.addEventListener('keyup', (event) => {
    const key = getScratchKeyByKey(event.code);
    delete keyPressed[key];
  });
  const mouseType = ['MouseLeft', 'MouseMiddle', 'MouseRight'];
  document.addEventListener('mousedown', (event) => {
    const code = mouseType[event.button];
    const key = getScratchKeyByKey(code);
    keyPressed[key] = true;
  });
  document.addEventListener('mouseup', (event) => {
    const code = mouseType[event.button];
    const key = getScratchKeyByKey(code);
    delete keyPressed[key];
  });
};

class MoreSensingExt {
  constructor(runtime) {
    this.runtime = runtime;
    initHack(runtime);

    /** 上一次积木的值（用于侦测变化）
     * @type {{[blockId: string]: any}}
     */
    this.lastValue = {};

    /**
     * by GPT 3.5。获取网络UTC毫秒时间戳
     * @returns {Promise} 得到网络时间后resolve的promise
     */
    const getNetworkTime = async () => fetch('https://worldtimeapi.org/api/ip')
      .then((response) => response.json())
      .then((data) => {
        const networkTime = new Date(data.utc_datetime).getTime();
        return networkTime;
      })
      .catch(() => {
        console.error('More Sensing Ext: 获取网络时间失败 Error fetching network time.');
        return NaN;
      });

    /**
     * 获取网络和本地时间差(失败时返回NaN)
     * - 每隔 5 秒才会读取最新值，其他时候读缓存
     * - 首次读取，或者两次读取时间超过5秒时，返回Promise，否则返回缓存值
     * @returns {Promise|number}
     */
    this.__getNetworkDeltaTime = cacheDecorator(async () => {
      const lastTime = Date.now();
      return getNetworkTime().then((networkTime) => {
        const lag = Date.now() - lastTime;
        // 计算网络-本地UTC毫秒时间差
        const networkDeltaTime = networkTime + lag * 0.5 - Date.now();
        // console.log(lag, networkDeltaTime);
        return networkDeltaTime;
      });
    }, 5000);
    this.__getNetworkDeltaTime();

    this.initFormatMessage({
      extensionName: ['更多侦测', 'More Sensing'],
      docsURI: [
        'https://learn.ccw.site/article/a6ad9600-20e8-46f2-9bfd-721e0f3e1e6c',
        'https://learn.ccw.site/article/a6ad9600-20e8-46f2-9bfd-721e0f3e1e6c',
      ],
      getStageInfo: ['获取舞台[INFO]', 'stage[INFO]'],
      me: ['我', 'me'],
      getNetWorkTimeInfo: [
        '☁️获取网络时间[TYPE](失败时返回NaN)',
        '☁️get network time[TYPE](NaN if failed)',
      ],
      convertTime: [
        '[VALUE][TYPE1]转[TYPE2]',
        '[VALUE][TYPE1]to[TYPE2]',
      ],
      milliseconds: ['毫秒', 'milliseconds'],
      seconds: ['秒', 'seconds'],
      minutes: ['分钟', 'minutes'],
      hours: ['小时', 'hours'],
      days: ['天', 'days'],
      months: ['月', 'months'],
      years: ['年', 'years'],

      isLogin: [
        '用户登录？',
        'user logged in?',
      ],
      'networkTime.tmstp': ['秒数', 'seconds'],
      'networkTime.2000': ['2000年至今天数', 'days since 2000'],
      'networkTime.delta': [
        '与本地的时间差(秒)',
        'time offset(seconds) from local time',
      ],
      'networkTime.UTC': ['ISO日期', 'ISO date'],

      touchingPoint: [
        '[SPRITE]碰到 x:[X]y:[Y]？',
        '[SPRITE]touching x:[X]y:[Y]?',
      ],
      touchingRect: [
        '[SPRITE]碰到矩形x1:[X1]y1:[Y1]x2:[X2]y2:[Y2]？',
        '[SPRITE]touching rect x1:[X1]y1:[Y1]x2:[X2]y2:[Y2]?',
      ],
      // touchingLine: [
      //   '[SPRITE]碰到线段x1:[X1]y1:[Y1]x2:[X2]y2:[Y2]?',
      //   '[SPRITE]touching line segment x1:[X1]y1:[Y1]x2:[X2]y2:[Y2]?',
      // ],
      touchingLine: [
        '从x1:[X1]y1:[Y1]出发到x2:[X2]y2:[Y2]的线段碰到[SPRITE]时的坐标',
        'position when the line x1:[X1]y1:[Y1]x2:[X2]y2:[Y2] hits [SPRITE]',
      ],
      touchingRay: [
        '从x1:[X]y1:[Y]出发，方向:[DIR]的射线碰到[SPRITE]时的坐标（最大检测距离[DIS]）',
        'position when the ray x:[X]y:[Y]direction:[DIR] hits [SPRITE] (maximum distance [DIS])',
      ],
      targetTouchingTarget: [
        '[TARGET1]碰到任意[TARGET2]',
        '[TARGET1]touching any[TARGET2]',
      ],
      amIOnTheTop: [
        'x:[X]y:[Y]顶层角色是我？',
        'am I the top-most at x:[X]y:[Y]?',
      ],
      amIOnTheTopAtMouse: [
        '我在鼠标处最顶层？',
        'am I the top-most at mouse-pointer?',
      ],
      amIclicked: ['我被点击？', 'sprite clicked?'],
      whenKeyDown: ['当按键[KEY][TYPE]？', 'on key[KEY][TYPE]?'],
      keyDown: ['变为按下', 'down'],
      keyUp: ['变为松开', 'release'],
      keyPressed: ['按住', 'pressed'],
      colorAt: ['x:[X]y:[Y]处的颜色', 'color at x:[X]y:[Y]'],
      whenValueChanged: [
        '(⚠️暂不支持编译)值[VALUE]发生变化？',
        '(⚠️not supported in compile mode)value[VALUE]changed?',
      ],

      space: ['空格', 'space'],
      'up arrow': ['↑', 'up arrow'],
      'down arrow': ['↓', 'down arrow'],
      'right arrow': ['→', 'right arrow'],
      'left arrow': ['←', 'left arrow'],
      mouseLeft: ['鼠标左键', 'mouse left'],
      mouseMiddle: ['鼠标中键', 'mouse middle'],
      mouseRight: ['鼠标右键', 'mouse right'],

      width: ['宽', 'width'],
      height: ['高', 'height'],

      cloneCount: ['当前克隆体数量', 'clones count'],
      spritesList: ['所有角色', 'all sprites'],

      colorToHex: ['颜色[COLOR]的代码', 'get code of color[COLOR]'],
    });
  }

  initFormatMessage(l10n) {
    const res = { 'zh-cn': {}, en: {} };
    Object.entries(l10n).forEach(([id, msgs]) => {
      const ID = `${extensionId}.${id}`;
      [res['zh-cn'][ID], res.en[ID]] = msgs;
    });
    const _formatMessage = this.runtime.getFormatMessage(res);
    this.fm = (id) => {
      const ID = `${extensionId}.${id}`;
      return _formatMessage({
        ID,
        default: ID,
        description: ID,
      });
    };
  }

  getInfo() {
    return {
      id: extensionId, // 拓展id
      name: this.fm('extensionName'),
      docsURI: this.fm('docsURI'),
      color1: '#57BAE5',
      menuIconURI: icon,
      blockIconURI: icon,
      blocks: [
        // 获取网络时间
        {
          opcode: 'getNetWorkTimeInfo',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: this.fm('getNetWorkTimeInfo'),
          arguments: {
            TYPE: {
              type: ArgumentType.STRING,
              menu: 'NETWORK_TIME',
            },
          },
        },
        // 时间转换
        {
          opcode: 'convertTime',
          blockType: BlockType.REPORTER,
          text: this.fm('convertTime'),
          arguments: {
            VALUE: {
              type: ArgumentType.NUMBER,
              defaultValue: 60,
            },
            TYPE1: {
              type: ArgumentType.STRING,
              menu: 'TIME_UNITS',
              defaultValue: 's',
            },
            TYPE2: {
              type: ArgumentType.STRING,
              menu: 'TIME_UNITS2',
              defaultValue: 'min',
            },
          },
        },
        // 是否登录
        {
          opcode: 'isLogin',
          blockType: BlockType.BOOLEAN,
          disableMonitor: true,
          text: this.fm('isLogin'),
        },
        '---',
        // 克隆体数量
        {
          opcode: 'cloneCount',
          blockType: BlockType.REPORTER,
          text: this.fm('cloneCount'),
        },
        // 获取舞台宽/高
        {
          opcode: 'getStageInfo',
          blockType: BlockType.REPORTER,
          text: this.fm('getStageInfo'),
          disableMonitor: true,
          arguments: {
            INFO: {
              type: ArgumentType.STRING,
              menu: 'WOrH',
            },
          },
        },
        // 所有角色
        {
          opcode: 'spritesList',
          blockType: BlockType.REPORTER,
          text: this.fm('spritesList'),
          disableMonitor: true,
        },
        '---',
        // 两角色碰撞
        {
          opcode: 'targetTouchingTarget',
          blockType: BlockType.BOOLEAN,
          text: this.fm('targetTouchingTarget'),
          arguments: {
            TARGET1: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_MYSELF',
            },
            TARGET2: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU',
            },
          },
        },
        // 角色碰到点？
        {
          opcode: 'touchingPoint',
          blockType: BlockType.BOOLEAN,
          text: this.fm('touchingPoint'),
          arguments: {
            SPRITE: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_MYSELF',
            },
            X: {
              type: ArgumentType.NUMBER,
              defaultValue: 0,
            },
            Y: {
              type: ArgumentType.NUMBER,
              defaultValue: 0,
            },
          },
        },
        {
          opcode: 'touchingRect',
          blockType: BlockType.BOOLEAN,
          text: this.fm('touchingRect'),
          arguments: {
            SPRITE: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_MYSELF',
            },
            X1: {
              type: ArgumentType.NUMBER,
              defaultValue: 0,
            },
            Y1: {
              type: ArgumentType.NUMBER,
              defaultValue: 0,
            },
            X2: {
              type: ArgumentType.NUMBER,
              defaultValue: 100,
            },
            Y2: {
              type: ArgumentType.NUMBER,
              defaultValue: 100,
            },
          },
        },
        {
          opcode: 'touchingLine',
          blockType: BlockType.REPORTER,
          text: this.fm('touchingLine'),
          arguments: {
            SPRITE: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_MYSELF',
            },
            X1: {
              type: ArgumentType.NUMBER,
              defaultValue: -100,
            },
            Y1: {
              type: ArgumentType.NUMBER,
              defaultValue: -100,
            },
            X2: {
              type: ArgumentType.NUMBER,
              defaultValue: 100,
            },
            Y2: {
              type: ArgumentType.NUMBER,
              defaultValue: 100,
            },
            // STEP: {
            //   type: ArgumentType.NUMBER,
            //   defaultValue: 1,
            // },
          },
        },
        {
          opcode: 'touchingRay',
          blockType: BlockType.REPORTER,
          text: this.fm('touchingRay'),
          arguments: {
            SPRITE: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_MYSELF',
            },
            X: {
              type: ArgumentType.NUMBER,
              defaultValue: 0,
            },
            Y: {
              type: ArgumentType.NUMBER,
              defaultValue: 0,
            },
            // STEP: {
            //   type: ArgumentType.NUMBER,
            //   defaultValue: 1,
            // },
            DIS: {
              type: ArgumentType.NUMBER,
              defaultValue: 999,
            },
            DIR: {
              type: ArgumentType.ANGLE,
              defaultValue: 45,
            },
          },
        },
        '---',
        // 顶层是我？
        {
          opcode: 'amIOnTheTop',
          blockType: BlockType.BOOLEAN,
          text: this.fm('amIOnTheTop'),
          arguments: {
            X: {
              type: ArgumentType.NUMBER,
              defaultValue: 0,
            },
            Y: {
              type: ArgumentType.NUMBER,
              defaultValue: 0,
            },
          },
        },
        {
          opcode: 'amIOnTheTopAtMouse',
          blockType: BlockType.BOOLEAN,
          text: this.fm('amIOnTheTopAtMouse'),
        },
        // 我被鼠标点击（考虑遮挡、上一帧按下鼠标的情况）
        {
          opcode: 'amIclicked',
          blockType: BlockType.BOOLEAN,
          text: this.fm('amIclicked'),
        },
        // 当按键down/up
        {
          opcode: 'whenKeyDown',
          blockType: BlockType.BOOLEAN,
          text: this.fm('whenKeyDown'),
          arguments: {
            KEY: {
              type: ArgumentType.STRING,
              menu: 'KEYBOARD',
            },
            TYPE: {
              type: ArgumentType.STRING,
              menu: 'DOWN_OR_UP',
            },
          },
        },
        '---',
        // 获取颜色HEX
        {
          opcode: 'colorToHex',
          blockType: BlockType.REPORTER,
          text: this.fm('colorToHex'),
          arguments: {
            COLOR: {
              type: 'color',
              // defaultValue: '1',
            },
          },
        },
        // 某点的颜色
        {
          opcode: 'colorAt',
          blockType: BlockType.REPORTER,
          text: this.fm('colorAt'),
          arguments: {
            X: {
              type: ArgumentType.NUMBER,
              defaultValue: 0,
            },
            Y: {
              type: ArgumentType.NUMBER,
              defaultValue: 0,
            },
          },
        },
        // '---',
        // // 检测某个值是否变化
        // {
        //   opcode: 'whenValueChanged',
        //   blockType: BlockType.BOOLEAN,
        //   text: this.fm('whenValueChanged'),
        //   arguments: {
        //     VALUE: {
        //       type: 'null',
        //     },
        //   },
        // },
      ],
      menus: {
        TIME_UNITS: {
          acceptReporters: true,
          items: [
            { text: this.fm('milliseconds'), value: 'ms' },
            { text: this.fm('seconds'), value: 's' },
            { text: this.fm('minutes'), value: 'min' },
            { text: this.fm('hours'), value: 'h' },
            { text: this.fm('days'), value: 'd' },
            { text: this.fm('months'), value: 'm' },
            { text: this.fm('years'), value: 'y' },
          ],
        },
        TIME_UNITS2: {
          acceptReporters: true,
          items: [
            { text: this.fm('milliseconds'), value: 'ms' },
            { text: this.fm('seconds'), value: 's' },
            { text: this.fm('minutes'), value: 'min' },
            { text: this.fm('hours'), value: 'h' },
            { text: this.fm('days'), value: 'd' },
            { text: this.fm('months'), value: 'm' },
            { text: this.fm('years'), value: 'y' },
            'hh:mm:ss',
            'h min s',
          ],
        },
        NETWORK_TIME: [
          {
            text: this.fm('networkTime.tmstp'),
            value: 'tmstp',
          },
          {
            text: this.fm('networkTime.2000'),
            value: '2000',
          },
          {
            text: this.fm('networkTime.delta'),
            value: 'delta',
          },
          {
            text: this.fm('networkTime.UTC'),
            value: 'UTC',
          },
        ],
        DOWN_OR_UP: [
          {
            text: this.fm('keyDown'),
            value: 'down',
          },
          {
            text: this.fm('keyUp'),
            value: 'up',
          },
          {
            text: this.fm('keyPressed'),
            value: 'press',
          },
        ],
        SPRITE_MENU_WITH_MYSELF: {
          acceptReporters: true,
          items: '__spriteMenuWithMyself',
        },
        SPRITE_MENU: {
          acceptReporters: true,
          items: '__getSpriteMenu',
        },
        KEYBOARD: {
          acceptReporters: true,
          items: '__getKeysMenu',
        },
        // 0宽1高 菜单
        WOrH: [
          {
            text: this.fm('width'),
            value: '0',
          },
          {
            text: this.fm('height'),
            value: '1',
          },
        ],
      },
    };
  }

  /**
   * 获取角色菜单
   */
  __getSpriteMenu() {
    const { targets } = this.runtime;
    // 跳过舞台
    const menu = targets
      .filter((target) => !target.isStage && target.isOriginal)
      .map((target) => ({
        text: target.sprite.name,
        value: target.sprite.name,
      }));
    // 空检查
    if (menu.length === 0) {
      menu.push({
        text: '-',
        value: 'empty',
      });
    }
    return menu;
  }

  /**
   * 角色菜单（但是多一项“自己”）
   */
  __spriteMenuWithMyself() {
    const menu = this.__getSpriteMenu();
    if (!this.runtime._editingTarget) return menu;
    // 当前角色名称
    const editingTargetName = this.runtime._editingTarget.sprite.name;
    // 从列表删除自己
    const index = menu.findIndex((item) => item.value === editingTargetName);
    if (index !== -1) {
      menu.splice(index, 1);
    }
    // 列表第一项插入“自己”
    if (this.runtime._editingTarget.isStage) return menu;
    menu.unshift({
      text: this.fm('me'),
      value: '__myself__',
    });
    return menu;
  }

  __getKeysMenu() {
    // 读取按键菜单
    const menu = [];
    let lastItem = '';
    Object.keys(SC_KEYS_MAP).forEach((key) => {
      const c = SC_KEYS_MAP[key];
      if (c !== lastItem) {
        if (typeof c === 'object') {
          menu.push({
            text: this.fm(c.text),
            value: c.value,
          });
        } else {
          menu.push(c);
        }
      }
      lastItem = c;
    });
    return menu;
  }

  /**
   * 获取网络时间相关信息
   * @param {Object} args
   * @param {'tmstp'|'2000'|'delta'|'UTC'} args.TYPE
   * @returns
   */
  getNetWorkTimeInfo({ TYPE }) {
    const _getNetWorkTimeInfo = (deltaTime) => {
      const networkNow = deltaTime + Date.now();
      if (Number.isNaN(networkNow)) return NaN;

      switch (TYPE) {
        // 时间戳（秒）
        case 'tmstp':
          return networkNow / 1000;
        // 2000年至今天数
        case '2000': {
          const msPerDay = 24 * 60 * 60 * 1000;
          const start = new Date(2000, 0, 1);
          const offset = start.getTimezoneOffset() * 60 * 1000;
          const mSecsSinceStart = networkNow - (start - offset);
          return mSecsSinceStart / msPerDay;
        }
        // 网络-本地时间差（秒）
        case 'delta':
          return deltaTime / 1000;
        // UTC的ISO格式
        case 'UTC': {
          const toff = new Date().getTimezoneOffset();
          const date = new Date(networkNow - toff * 60 * 1000);
          const isoString = date.toISOString().slice(0, -1);
          // return `${isoString}+0000`;
          // 参考了-6的时间扩展，获取时区，如+0800
          const zoneString = (toff > 0 ? '-' : '+')
            + this._padZero(Math.abs(toff) / 60, 2)
            + this._padZero(Math.abs(toff) % 60, 2);
          return isoString + zoneString;
        }
        default:
          return 0;
      }
    };
    // 这里的delta可能是number或Promise
    const delta = this.__getNetworkDeltaTime();
    if (typeof delta === 'number') {
      return _getNetWorkTimeInfo(delta);
    }
    return delta.then((deltaTime) => _getNetWorkTimeInfo(deltaTime));
  }

  // 参考了 -6 时间扩展
  _padZero(str, n) {
    const num = Number(str);
    if (isNaN(num) || num < 0) throw new Error(`\`${str}' 不是一个合适的数字`);
    return String(Math.floor(num)).padStart(n, '0');
  }

  convertTime({ VALUE, TYPE1, TYPE2 }) {
    const v = Cast.toNumber(VALUE);
    const fac = unitToSecs[TYPE1] / unitToSecs[TYPE2];
    if (!Number.isNaN(fac)) return v * fac;
    const secs = v * unitToSecs[TYPE1];
    if (Number.isNaN(secs) || secs < 0) return NaN;
    const hours = Math.floor(secs / 3600);
    const reMin = Math.floor((secs % 3600) / 60);
    const reSecs = Math.floor(secs % 60);
    switch (TYPE2) {
      case 'hh:mm:ss': {
        let str = '';
        if (hours > 0) str += `${hours}:${reMin < 10 ? '0' : ''}`;
        return `${str}${reMin}:${reSecs < 10 ? '0' : ''}${reSecs}`;
      }
      case 'h min s': {
        let str = '';
        if (hours > 0) str += `${hours}h`;
        if (reMin > 0) str += `${reMin}min`;
        if (reSecs > 0 || str === '') str += `${reSecs}s`;
        return str;
      }
      default:
    }
    return NaN;
  }

  // /** 读取网络UTC时间（毫秒）（失败时返回NaN） */
  // async _getNetworkTime() {
  //   // 本地 + 时间差
  //   return this.__getNetworkDeltaTime().then((deltaTime) => Date.now() + deltaTime);
  // }

  /**
   * 获取颜色HEX码
   * @param {object} args
   * @param {SCarg} args.COLOR
   * @returns {string}
   */
  colorToHex(args) {
    const c = Cast.toRgbColorList(args.COLOR);
    return Color.rgbToHex({
      r: c[0] ?? 0,
      g: c[1] ?? 0,
      b: c[2] ?? 0,
    });
  }

  /**
   * 获取舞台0宽1高
   * @param {Object} args
   * @param {'0'|'1'} args.INFO
   */
  getStageInfo({ INFO }) {
    return INFO === '0'
      ? this.runtime.stageWidth
      : this.runtime.stageHeight;
  }

  spritesList() {
    return JSON.stringify(this.runtime.targets
      .filter((target) => target.isOriginal && !target.isStage)
      .map((target) => target.sprite.name));
  }

  /**
   * 克隆体数量
   * @returns {number}
   */
  cloneCount() {
    return this.runtime._cloneCounter;
  }

  isLogin() {
    if (this.runtime.ccwAPI.getUserInfo) {
      return this.runtime.ccwAPI.getUserInfo().then((user) => {
        if (user) return user.userId !== '0';
        return false;
      });
    }
    return false;
  }

  /**
   * 按下/松开/按住某键
   * @param {object} args
   * @param {SCarg} args.key
   * @param {Util} util
   * @returns {boolean}
   */
  whenKeyDown({ KEY, TYPE }) {
    const key = Cast.toString(KEY);
    const last = lastKeyPressed[key] ?? false;
    const now = keyPressed[key] ?? false;
    this.runtime.requestRedraw();
    switch (TYPE) {
      case 'down':
        return !last && now;
      case 'up':
        return last && !now;
      case 'press':
        return now;
      default:
        return false;
    }
  }

  /**
   * 检测值变化（目前仅编译模式可以使用）
   * @param {object} args
   * @param {SCarg} args.c
   * @param {Util} util
   * @returns {boolean}
   */
  whenValueChanged({ VALUE }, util) {
    if (!util.thread.peekStackFrame().op) return false;
    // 获取返回值积木的id
    const ops = util.thread.peekStackFrame().op._ops;
    const { id } = ops[ops.length - 1];
    const lastV = this.lastValue[id];
    this.lastValue[id] = VALUE;
    if (lastV === undefined) {
      return false;
    }
    return lastV !== VALUE;
  }

  _ScratchXYToClientXY(x, y) {
    let canvasHeight = 0;
    let canvasWidth = 0;
    const cvs = this.runtime.renderer.canvas;
    if (cvs) {
      canvasHeight = cvs.clientHeight;
      canvasWidth = cvs.clientWidth;
    }
    const x1 = (x / this.runtime.stageWidth + 0.5) * canvasWidth;
    const y1 = (-y / this.runtime.stageHeight + 0.5) * canvasHeight;
    return [x1, y1];
  }

  __getTargetByIdOrName(name, util) {
    if (name === '__myself__') return util.target;
    let target = this.runtime.getSpriteTargetByName(name);
    if (!target) {
      target = this.runtime.getTargetById(name);
      if (!target) return null;
    }
    return target;
  }

  /** 角色碰到点？ */
  touchingPoint({ SPRITE, X, Y }, util) {
    const target = this.__getTargetByIdOrName(Cast.toString(SPRITE), util);
    if (!target) return false;
    const { renderer } = this.runtime;
    const [x, y] = this._ScratchXYToClientXY(
      Cast.toNumber(X),
      Cast.toNumber(Y),
    );
    return renderer.drawableTouching(target.drawableID, x, y);
  }

  /**
   * 将线段裁剪在 rect 内
   * @returns {[x1, y1, x2, y2]|null} 返回裁剪后结果或null（线段不在矩形内）
   */
  _clipLineWithinRect(x1, y1, x2, y2, rect) {
    // 解构矩形坐标
    const {
      left, bottom, right, top,
    } = rect;

    const inRect1 = x1 >= left && x1 <= right && y1 >= bottom && y1 <= top;
    const inRect2 = x2 >= left && x2 <= right && y2 >= bottom && y2 <= top;

    // 判断线段是否在矩形内
    if (inRect1 && inRect2) return [x1, y1, x2, y2];
    // if (!inRect1 && !inRect2) return null;

    const k = (y2 - y1) / (x2 - x1);
    // 两点重合时，k = NaN
    if (Number.isNaN(k)) return null;
    // const b = y1 - k * x1;

    // 初始化裁剪后结果的坐标
    let clippedX1 = x1;
    let clippedY1 = y1;
    let clippedX2 = x2;
    let clippedY2 = y2;

    // 根据线段与矩形的交点裁剪线段
    if (x1 < left) {
      if (x2 < left) return null;
      clippedX1 = left;
      clippedY1 = y1 + k * (left - x1);
    } else if (x1 > right) {
      if (x2 > right) return null;
      clippedX1 = right;
      clippedY1 = y1 + k * (right - x1);
    }
    if (y1 < bottom) {
      if (y2 < bottom) return null;
      clippedY1 = bottom;
      clippedX1 = x1 + (bottom - y1) / k;
    } else if (y1 > top) {
      if (y2 > top) return null;
      clippedY1 = top;
      clippedX1 = x1 + (top - y1) / k;
    }

    if (x2 < left) {
      clippedX2 = left;
      clippedY2 = y1 + k * (left - x1);
    } else if (x2 > right) {
      clippedX2 = right;
      clippedY2 = y1 + k * (right - x1);
    }
    if (y2 < bottom) {
      clippedY2 = bottom;
      clippedX2 = x1 + (bottom - y1) / k;
    } else if (y2 > top) {
      clippedY2 = top;
      clippedX2 = x1 + (top - y1) / k;
    }

    // 返回裁剪后的结果
    return [clippedX1, clippedY1, clippedX2, clippedY2];
  }

  touchingRect({
    SPRITE, X1, Y1, X2, Y2,
  }, util) {
    const target = this.__getTargetByIdOrName(Cast.toString(SPRITE), util);
    if (!target) return false;
    const { renderer } = this.runtime;
    const drawable = renderer._allDrawables[target.drawableID];
    if (!drawable) return false;
    const x1 = Cast.toNumber(X1);
    const y1 = Cast.toNumber(Y1);
    const x2 = Cast.toNumber(X2);
    const y2 = Cast.toNumber(Y2);
    // [x1, y1] = this._ScratchXYToClientXY(x1, y1);
    // [x2, y2] = this._ScratchXYToClientXY(x2, y2);
    // 求两个bounds的交集
    const a = drawable.getFastBounds();
    const b = {};
    b.left = Math.min(x1, x2);
    b.right = Math.max(x1, x2);
    b.top = Math.max(y1, y2);
    b.bottom = Math.min(y1, y2);
    const bounds = {};
    bounds.left = Math.max(a.left, b.left);
    bounds.right = Math.min(a.right, b.right);
    bounds.top = Math.min(a.top, b.top);
    bounds.bottom = Math.max(a.bottom, b.bottom);

    const worldPos = [0, 0, 0];
    drawable.updateCPURenderAttributes();

    for (worldPos[1] = bounds.bottom; worldPos[1] <= bounds.top; worldPos[1] += 1) {
      for (worldPos[0] = bounds.left; worldPos[0] <= bounds.right; worldPos[0] += 1) {
        if (drawable.isTouching(worldPos)) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * 计算从点1出发到点2，和drawable的交点坐标
   * @returns {[x, y]|null}
   */
  _getLineHit(X1, Y1, X2, Y2, drawable, step = 1) {
    drawable.updateCPURenderAttributes();
    // 将线段裁剪在角色内
    const clipped = this._clipLineWithinRect(X1, Y1, X2, Y2, drawable.getFastBounds());
    // 线段不在角色bounds内
    if (!clipped) return null;
    const [x1, y1, x2, y2] = clipped;
    const hit = [x1, y1];
    const length = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    if (length > 0) {
      for (let dis = 0; dis < length; dis += step) {
        hit[0] = x1 + (x2 - x1) * (dis / length);
        hit[1] = y1 + (y2 - y1) * (dis / length);
        if (drawable.isTouching(hit)) return hit;
      }
    }
    return null;
  }

  touchingLine({
    SPRITE, X1, Y1, X2, Y2,
  }, util) {
    const target = this.__getTargetByIdOrName(Cast.toString(SPRITE), util);
    if (!target) return false;
    const { renderer } = this.runtime;
    const drawable = renderer._allDrawables[target.drawableID];
    if (!drawable) return false;
    const x1 = Cast.toNumber(X1);
    const y1 = Cast.toNumber(Y1);
    const x2 = Cast.toNumber(X2);
    const y2 = Cast.toNumber(Y2);
    // const step = Math.max(1, Cast.toNumber(STEP));

    // return !!this._getLineHit(x1, y1, x2, y2, drawable, 1);
    const hit = this._getLineHit(x1, y1, x2, y2, drawable, 1);
    if (hit) {
      return `${
        Math.round(hit[0] * 100) / 100},${
        Math.round(hit[1] * 100) / 100
      }`;
    }
    return '';
  }

  touchingRay({
    SPRITE, X, Y, DIR, DIS,
  }, util) {
    const length = Math.min(99999999999, Cast.toNumber(DIS));
    if (length <= 0) return '';
    const target = this.__getTargetByIdOrName(Cast.toString(SPRITE), util);
    if (!target) return '';
    const { renderer } = this.runtime;
    const drawable = renderer._allDrawables[target.drawableID];
    if (!drawable) return '';
    const x = Cast.toNumber(X);
    const y = Cast.toNumber(Y);
    const radians = Cast.toNumber(DIR) * (Math.PI / 180);
    // const step = Math.max(1, Cast.toNumber(STEP));
    const x2 = x + length * Math.sin(radians);
    const y2 = y + length * Math.cos(radians);

    const hit = this._getLineHit(x, y, x2, y2, drawable, 1);
    if (hit) {
      return `${
        Math.round(hit[0] * 100) / 100},${
        Math.round(hit[1] * 100) / 100
      }`;
    }
    return '';
  }

  targetTouchingTarget({ TARGET1, TARGET2 }, util) {
    const target1 = this.__getTargetByIdOrName(Cast.toString(TARGET1), util);
    const target2 = this.__getTargetByIdOrName(Cast.toString(TARGET2), util);
    if (!target1 || !target2) return false;

    const { renderer } = this.runtime;
    const drawableCandidates = target2.sprite.clones
      .map((clone) => clone.drawableID);
    return renderer.isTouchingDrawables(target1.drawableID, drawableCandidates);
  }

  /** 某点顶层是我？ */
  amIOnTheTop({ X, Y }, util) {
    const { renderer } = this.runtime;
    const [x, y] = this._ScratchXYToClientXY(
      Cast.toNumber(X),
      Cast.toNumber(Y),
    );
    if (renderer) {
      if (util.target.isStage) return renderer.pick(x, y) === false;
      return util.target.drawableID === renderer.pick(x, y);
    }
    return false;
  }

  amIOnTheTopAtMouse(args, util) {
    const [x, y] = this.getMouseForTarget(util.target, util);
    const { renderer } = this.runtime;
    if (renderer) {
      if (util.target.isStage) return renderer.pick(x, y) === false;
      return util.target.drawableID === renderer.pick(x, y);
    }
    return false;
  }

  getMouseForTarget(target, util) {
    let mX;
    let mY;
    // 如果启用了 G 相机，根据角色是否跟随相机，使用相应的鼠标坐标
    const camExtIns = this.runtime.ext_GandiKamera;
    if (camExtIns) {
      const coords = camExtIns.getMouseCoordsForTarget(target);
      [mX, mY] = coords;
    } else {
      mX = util.ioQuery('mouse', 'getClientX');
      mY = util.ioQuery('mouse', 'getClientY');
    }
    return [mX, mY];
  }

  /** 我被鼠标点击（考虑遮挡、上一帧按下鼠标的情况） */
  amIclicked(args, util) {
    // 如果没有鼠标down，退出
    if (!this.whenKeyDown({ KEY: 'mouse left', TYPE: 'down' })) return false;
    // 如果启用了 G 相机，根据角色是否跟随相机，使用相应的鼠标坐标
    const [mX, mY] = this.getMouseForTarget(util.target, util);
    const { renderer } = this.runtime;
    if (renderer) {
      // 如果鼠标位置是我，则被点击
      if (util.target.isStage) return renderer.pick(mX, mY) === false;
      return util.target.drawableID === renderer.pick(mX, mY);
    }
    return false;
  }

  /** 某点的颜色（代码参考了clipcc的colorAt） */
  colorAt({ X, Y }) {
    const { renderer } = this.runtime;
    const [x, y] = this._ScratchXYToClientXY(
      Cast.toNumber(X),
      Cast.toNumber(Y),
    );
    const { r, g, b } = renderer.extractColor(x, y, 1, true).color;
    return (r << 16) + (g << 8) + b;
  }
}

window.tempExt = {
  Extension: MoreSensingExt,
  info: {
    name: `${extensionId}.extensionName`,
    description: `${extensionId}.description`,
    extensionId,
    iconURL: cover,
    insetIconURL: icon,
    featured: true,
    disabled: false,
    docsURI: 'https://learn.ccw.site/article/a6ad9600-20e8-46f2-9bfd-721e0f3e1e6c',
    collaborator: 'Arkos@CCW',
    collaboratorList: [
      {
        collaborator: 'Arkos@CCW',
        collaboratorURL:
        'https://www.ccw.site/student/628979aa804a3a2bc801b097',
      },
    ],
  },
  l10n: {
    'zh-cn': {
      [`${extensionId}.extensionName`]: '更多侦测',
      [`${extensionId}.description`]: '提供云时间、更方便的按键检测等功能',
    },
    en: {
      [`${extensionId}.extensionName`]: 'More Sensing',
      [`${extensionId}.description`]: 'Provide cloud time, better key detection and other functions.',
    },
  },
};
