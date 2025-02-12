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
    MouseWheelUp: {
      text: 'mouseWheelUp',
      value: 'mouse wheel up',
    },
    MouseWheelDown: {
      text: 'mouseWheelDown',
      value: 'mouse wheel down',
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
    .filter((item) => item[0].startsWith(`${extId}_`) && !item[1].visible)
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

  // // 仅用于测试tooltip
  // const cb = runtime._convertBlockForScratchBlocks;
  // runtime._convertBlockForScratchBlocks = function (blockInfo, categoryInfo) {
  //   const res = cb.call(this, blockInfo, categoryInfo);
  //   res.json.tooltip = blockInfo.tooltip;
  //   return res;
  // };

  removeExtMonitors(extensionId, runtime);

  runtime.on('AFTER_EXECUTE', () => {
    // 每帧结束，记录该帧按下的键
    lastKeyPressed = { ...keyPressed };
  });

  // 停止作品时清空克隆体计数
  runtime.on('PROJECT_STOP_ALL', () => {
    // eslint-disable-next-line no-param-reassign
    setTimeout(() => (runtime._cloneCounter = 0), 0);
  });

  // 监听键盘keydown，keyup
  document.addEventListener('keydown', (event) => {
    // 参考了Scratch stage代码，防止检测非舞台的按键输入
    if (event.target !== document && event.target !== document.body) {
      return;
    }
    const key = getScratchKeyByKey(event.code);
    keyPressed[key] = true;
  });
  document.addEventListener('keyup', (event) => {
    const key = getScratchKeyByKey(event.code);
    delete keyPressed[key];
  });

  const { canvas } = runtime.renderer;
  const mouseType = ['MouseLeft', 'MouseMiddle', 'MouseRight'];
  // 鼠标事件附加在舞台canvas上，放置侦测舞台外点击
  canvas.addEventListener('mousedown', (event) => {
    const code = mouseType[event.button];
    const key = getScratchKeyByKey(code);
    keyPressed[key] = true;
  });
  canvas.addEventListener('mouseup', (event) => {
    const code = mouseType[event.button];
    const key = getScratchKeyByKey(code);
    delete keyPressed[key];
  });
  // canvas.addEventListener('wheel', (event) => {
  //   if (event.deltaY )
  //   const key = getScratchKeyByKey('MouseWheelUp');
  // }, {passive: true});

  // 参考了白猫高级鼠标，检测鼠标滚轮
  initHack.wheelTimeout = null;
  canvas.addEventListener(
    'wheel',
    (e) => {
      clearTimeout(initHack.wheelTimeout);
      if (e.deltaY < 0) {
        keyPressed['mouse wheel up'] = true;
      } else {
        keyPressed['mouse wheel down'] = true;
      }
      initHack.wheelTimeout = setTimeout(() => {
        keyPressed['mouse wheel up'] = false;
        keyPressed['mouse wheel down'] = false;
      }, 30);
    },
    { passive: true }
    // { capture: true }
  );
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
     * 获取网络UTC毫秒时间戳。
     * @returns {Promise} 得到网络时间后resolve的promise
     */
    const getNetworkTime = async () => {
      try {
        // 使用ccw社区的dateTime接口
        const response = await fetch('https://community-web.ccw.site/base/dateTime', {
          method: 'POST',
        });
        const data = await response.json();
        return data.body;
      } catch (error) {
        console.error('获取网络时间失败 Error fetching network time.', error);
        return NaN;
      }
    };

    /**
     * 获取网络和本地时间差(失败时返回NaN)
     * - 每隔 10 秒才会读取最新值，其他时候读缓存
     * - 首次读取，或者两次读取时间超过10秒时，返回Promise，否则返回缓存值
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
    }, 10000);
    this.__getNetworkDeltaTime();

    this.initFormatMessage({
      extensionName: ['更多侦测', 'More Sensing'],
      docsURI: [
        'https://learn.ccw.site/article/a6ad9600-20e8-46f2-9bfd-721e0f3e1e6c',
        'https://getgandi.com/extensions/more-sensing',
      ],
      getStageInfo: ['获取舞台[INFO]', 'stage[INFO]'],
      me: ['我', 'me'],
      getNetWorkTimeInfo: ['☁️获取网络时间[TYPE](失败时返回NaN)', '☁️get network time[TYPE](NaN if failed)'],
      'tooltip.getNetWorkTimeInfo': [
        '获取网络时间信息。可在循环中频繁读取（有缓存）。包括四个选项：\n' +
          '1.秒数：一个不断变化的秒数时间戳；\n' +
          '2.从2000年至今天数：，可作为天时间戳；\n' +
          '3.与本地的时间差(秒)：网络减本地时间，例如-3表示网络比本地慢3秒，反之亦然；可用于判断本地时间是否被篡改。\n' +
          '4.ISO日期：以ISO格式表示的日期。可以配合时间扩展读取其中的时间信息。',
        'Fetch network time information. Can be frequently read in loops (with caching). Including four options:\n' +
          '1. Seconds: A continuously changing timestamp in seconds;\n' +
          '2. Days since 2000: Can be used as a timestamp in days;\n' +
          '3. Time offset from local time (in seconds): Network time - Local time, for example, -3 indicates that the network is 3 seconds slower than the local time, and vice versa; It can be used to determine if the local time has been tampered with.\n' +
          '4. ISO Date: The date represented in ISO format. Can be used with Time extension to read the time info within it.',
      ],
      convertTime: ['[VALUE][TYPE1]转[TYPE2]', '[VALUE][TYPE1]to[TYPE2]'],
      milliseconds: ['毫秒', 'milliseconds'],
      seconds: ['秒', 'seconds'],
      minutes: ['分钟', 'minutes'],
      hours: ['小时', 'hours'],
      days: ['天', 'days'],
      months: ['月', 'months'],
      years: ['年', 'years'],

      isLogin: ['用户登录？', 'user logged in?'],
      getFile: ['读取文件[FILE]', 'read file[FILE]'],
      'tooltip.getFile': ['从左侧代码编辑器中读取文件内容。', 'Read the file content from the left-side code editor.'],
      mouse: ['鼠标指针', 'mouse-pointer'],
      noFile: ['还没有文件，请先在代码页创建', 'No file yet, create in code editor first.'],
      'networkTime.tmstp': ['秒数', 'seconds'],
      'networkTime.2000': ['2000年至今天数', 'days since 2000'],
      'networkTime.delta': ['与本地的时间差(秒)', 'time offset(seconds) from local time'],
      'networkTime.UTC': ['ISO日期', 'ISO date'],

      touchingPoint: ['[SPRITE]碰到 x:[X]y:[Y]？', '[SPRITE]touching x:[X]y:[Y]?'],
      'tooltip.touchingPoint': ['判断角色是否碰到某个点。', 'Check if the sprite touches with a certain point.'],
      tagNote: [
        '- 支持填入克隆体ID，检测某个克隆体（使用多莉扩展获取克隆体ID）；\n- 你也可以添加“tag:”前缀来检测一组特定标签克隆体的碰撞（配合多莉Pro扩展的克隆体标签使用）。例如填入“tag:敌人”，检测和标签“敌人”的碰撞',
        "- Can enter clone ID to detect a specific clone (using Dolly extension to get clone ID);\n- Besides, you can add the 'tag:' prefix to detect collisions for a group of clones with certain tag (with Dolly Pro Extension's clone tagging feature ).\nFor example, enter 'tag:enemy' to detect collisions with the enemy tag.",
      ],
      touchingRect: [
        '[SPRITE]碰到矩形x1:[X1]y1:[Y1]x2:[X2]y2:[Y2]？',
        '[SPRITE]touching rect x1:[X1]y1:[Y1]x2:[X2]y2:[Y2]?',
      ],
      'tooltip.touchingRect': [
        '检测鼠标/角色是否碰到某个矩形。',
        'Check if the mouse/sprite touches with a certain rectangle.',
      ],
      pointInRect: [
        'x:[X]y:[Y]在矩形x1:[X1]y1:[Y1]x2:[X2]y2:[Y2]内？',
        'x:[X]y:[Y] inside rectangle x1:[X1]y1:[Y1]x2:[X2]y2:[Y2]?',
      ],
      'tooltip.pointInRect': ['检测点是否在某个矩形内。', 'Check if the point is inside a certain rectangle.'],
      getComment: ['获取注释[CID]', 'get comment[CID]'],
      'tooltip.getComment': [
        '获取某个注释的内容。\n可以使用注释储存多行数据。',
        'Get the text of a certain comment.\nNow you can use comments to store multi-line data and read from it.',
      ],
      // touchingLine: [
      //   '[SPRITE]碰到线段x1:[X1]y1:[Y1]x2:[X2]y2:[Y2]?',
      //   '[SPRITE]touching line segment x1:[X1]y1:[Y1]x2:[X2]y2:[Y2]?',
      // ],
      touchingLine: [
        '从x1:[X1]y1:[Y1]出发到x2:[X2]y2:[Y2]的线段碰到[SPRITE]时的坐标',
        'position when the line x1:[X1]y1:[Y1]x2:[X2]y2:[Y2] hits [SPRITE]',
      ],
      'tooltip.touchingLine': [
        '检测从一点出发到另一点的线段碰到角色时的坐标。返回格式为"x,y"，例如 30,30（可使用字符串扩展按逗号切割）。如果没有碰到角色则返回空。',
        'Detects the position where a line from one point to another intersects with a sprite, with returned format "x,y" (can be split by comma using String/Syntactic Sugar Extension). Returns empty string if no sprite is intersected.',
      ],
      touchingRay: [
        '从x1:[X]y1:[Y]出发，方向:[DIR]的射线碰到[SPRITE]时的坐标（最大检测距离[DIS]）',
        'position when the ray x:[X]y:[Y]direction:[DIR] hits [SPRITE] (maximum distance [DIS])',
      ],
      'tooltip.touchingRay': [
        '检测射线碰到角色时的坐标。返回格式为"x,y"，例如 30,30（可使用字符串扩展按逗号切割）。如果没有碰到角色则返回空。',
        'Detects the position where a ray hits a sprite, with returned format "x,y" (can be split by comma using String/Syntactic Sugar Extension). Returns empty string if no sprite is intersected.',
      ],
      targetTouchingTarget: ['[TARGET1]碰到[TARGET2]', '[TARGET1]touching[TARGET2]'],
      'tooltip.targetTouchingTarget': [
        '检测鼠标/一个角色是否碰到另一个角色。',
        'Detects whether the mouse/a sprite collides with another sprite.',
      ],
      amIOnTheTop: ['x:[X]y:[Y]顶层角色是我？', 'am I the top-most at x:[X]y:[Y]?'],
      'tooltip.amIOnTheTop': [
        '检测某个坐标处顶层角色是不是自己。可以用于判断角色间的遮挡情况。',
        'Determines if the sprite is at top-level at the specified coordinate. This can be used to determine the occlusion between sprites.',
      ],
      amIOnTheTopAtMouse: ['碰到鼠标指针且在顶层？', 'touching mouse exactly?'],
      'tooltip.amIOnTheTopAtMouse': [
        '检测自己是否碰到鼠标，且在最顶层。不同于一般的“碰到鼠标”积木，角色被遮挡的情况不会被检测。',
        "Detect whether the sprite touching the mouse and is on the topmost layer. Unlike the regular 'touching mouse' block, this will not detect if the sprite is being occluded.",
      ],
      amIclicked: ['我被点击？', 'am I clicked?'],
      'tooltip.amIclicked': [
        '检测角色是否被点击。不同于一般的“碰到鼠标+按下鼠标”积木，角色被遮挡的情况不算点击，\n以及按住鼠标并拖到角色的情况也不算点击。（行为类似于“当角色被点击”帽子积木）',
        'Detect whether a sprite is clicked. Unlike the regular "touching mouse + mouse down" block, being occluded or dragging the mouse over the sprite does not count as a click. (The behavior is similar to the "When sprite clicked" hat block.)',
      ],
      whenKeyDown: ['当按键[KEY][TYPE]？', 'on key[KEY][TYPE]?'],
      'tooltip.whenKeyDown': [
        '检测某个按键的变为按下/变为松开/按住。其中，变为按下/变为松开只会在按键按下或松开的瞬间触发，可用于需要单次触发的情况。此外支持更多按键类型，包括鼠标右键，Esc（escape）/Shift键等。',
        "Detects when a key is down/up/held, among which the 'down'/'up' options are only triggered at the instant a key is pressed or released.\nAdditionally, it supports more key types, including the right mouse button, Esc (escape) key, Shift key, and more.",
      ],
      keyDown: ['变为按下', 'down'],
      folderPrefix: ['文件夹：', 'folder:'],
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
      mouseWheelUp: ['鼠标滚轮↑', 'mouse wheel↑'],
      mouseWheelDown: ['鼠标滚轮↓', 'mouse wheel↓'],
      mouseLeft: ['鼠标左键', 'mouse left'],
      mouseMiddle: ['鼠标中键', 'mouse middle'],
      mouseRight: ['鼠标右键', 'mouse right'],

      width: ['宽', 'width'],
      height: ['高', 'height'],

      cloneCount: ['当前克隆体数量', 'clones count'],
      spritesList: ['所有角色', 'all sprites'],
      'tooltip.spritesList': [
        '获取所有角色的列表，返回JSON格式。可使用数据助手等扩展读取JSON信息。',
        'Get the list of all sprites in JSON format. Use extensions such as Data Utils to read JSON.',
      ],

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
          tooltip: this.fm('tooltip.getNetWorkTimeInfo'),
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
        {
          opcode: 'getFile',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          tooltip: this.fm('tooltip.getFile'),
          text: this.fm('getFile'),
          arguments: {
            FILE: {
              type: ArgumentType.STRING,
              menu: 'FILE_LIST',
            },
          },
        },
        {
          opcode: 'getComment',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: this.fm('getComment'),
          tooltip: this.fm('tooltip.getComment'),
          arguments: {
            CID: {
              type: ArgumentType.STRING,
              menu: 'COMMENT_MENU',
            },
          },
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
          tooltip: this.fm('tooltip.spritesList'),
          disableMonitor: true,
        },
        '---',
        // 两角色碰撞
        {
          opcode: 'targetTouchingTarget',
          blockType: BlockType.BOOLEAN,
          text: this.fm('targetTouchingTarget'),
          tooltip: this.fm('tooltip.targetTouchingTarget'),
          arguments: {
            TARGET1: {
              type: ArgumentType.STRING,
              // 经测试，换菜单不影响兼容（只要原来名字的菜单还存在
              menu: 'SPRITE_MENU_WITH_MOUSE_TAG',
            },
            TARGET2: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_TAG',
            },
          },
        },
        // 角色碰到点？
        {
          opcode: 'touchingPoint',
          blockType: BlockType.BOOLEAN,
          text: this.fm('touchingPoint'),
          tooltip: `${this.fm('tooltip.touchingPoint')}\n${this.fm('tagNote')}`,
          arguments: {
            SPRITE: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_TAG',
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
          tooltip: `${this.fm('tooltip.touchingRect')}\n${this.fm('tagNote')}`,
          arguments: {
            SPRITE: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_MOUSE_TAG',
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
          opcode: 'pointInRect',
          blockType: BlockType.BOOLEAN,
          text: this.fm('pointInRect'),
          tooltip: this.fm('tooltip.pointInRect'),
          arguments: {
            X: {
              type: ArgumentType.NUMBER,
              defaultValue: 1,
            },
            Y: {
              type: ArgumentType.NUMBER,
              defaultValue: 1,
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
          tooltip: `${this.fm('tooltip.touchingLine')}\n${this.fm('tagNote')}`,
          arguments: {
            SPRITE: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_TAG',
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
          tooltip: `${this.fm('tooltip.touchingRay')}\n${this.fm('tagNote')}`,
          arguments: {
            SPRITE: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_TAG',
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
          tooltip: this.fm('tooltip.amIOnTheTop'),
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
          tooltip: this.fm('tooltip.amIOnTheTopAtMouse'),
        },
        // 我被鼠标点击（考虑遮挡、上一帧按下鼠标的情况）
        {
          opcode: 'amIclicked',
          blockType: BlockType.BOOLEAN,
          text: this.fm('amIclicked'),
          tooltip: this.fm('tooltip.amIclicked'),
        },
        // 当按键down/up
        {
          opcode: 'whenKeyDown',
          blockType: BlockType.BOOLEAN,
          text: this.fm('whenKeyDown'),
          tooltip: this.fm('tooltip.whenKeyDown'),
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
        FILE_LIST: {
          acceptReporters: true,
          items: 'buildFileListMenu',
        },
        COMMENT_MENU: 'buildCommentMenu',
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
        SPRITE_MENU_WITH_MOUSE: {
          acceptReporters: true,
          items: '__spriteMenuWithMouse',
        },
        SPRITE_MENU: {
          acceptReporters: true,
          items: '__getSpriteMenu',
        },
        SPRITE_MENU_WITH_TAG: {
          acceptReporters: true,
          items: '__spriteMenuWithTag',
        },
        SPRITE_MENU_WITH_MOUSE_TAG: {
          acceptReporters: true,
          items: '__spriteMenuWithMouseAndTag',
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

  buildFileListMenu() {
    const list = this.runtime.getGandiAssetsFileList(undefined).map((file) => ({
      text: file.fullName,
      value: file.fullName,
    }));
    if (list.length === 0) {
      return [{ text: this.fm('noFile'), value: '' }];
    }
    return list;
  }

  buildCommentMenu() {
    const curTarget = this.runtime.getEditingTarget();
    const targets = this.runtime.targets.filter((target) => target !== curTarget && target.isOriginal);
    if (curTarget) targets.unshift(curTarget);

    const truncate = (text, maxLength = 20) => {
      if (text.length <= maxLength) return text;
      return `${text.slice(0, maxLength)}...`;
    };

    const menu = [];
    targets.forEach((target) => {
      Object.entries(target.comments).forEach(([id, comment]) => {
        menu.push({
          text: `${target.sprite.name}:  ${truncate(comment.text)}`,
          value: `${target.sprite.name}@@${id}`,
        });
      });
    });
    if (menu.length === 0) {
      return [{ text: '-', value: '' }];
    }
    return menu;
  }

  __getSpriteFolders() {
    const { targets } = this.runtime;
    const regexFolder = /(.*?)\/\/.+/gi;
    const rt = new Set();
    targets.forEach((target) => {
      const rst = regexFolder.exec(target.getName());
      if (rst && rst[1] !== '') {
        // find a folder
        rt.add(rst[1]);
      }
    });
    const folders = [];
    rt.forEach((folder) => {
      folders.push({
        text: `${this.fm('folderPrefix')}${folder}`,
        value: `folder:${folder}`,
      });
    });
    // console.info(folders);
    return folders;
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
    // const editingTargetName = this.runtime._editingTarget.sprite.name;
    // 从列表删除自己
    // const index = menu.findIndex((item) => item.value === editingTargetName);
    // if (index !== -1) {
    //   menu.splice(index, 1);
    // }
    // 列表第一项插入“自己”
    if (this.runtime._editingTarget.isStage) return menu;
    menu.unshift({
      text: this.fm('me'),
      value: '__myself__',
    });
    return menu;
  }

  __spriteMenuWithMouse() {
    const menu = this.__spriteMenuWithMyself();
    menu.unshift({
      text: this.fm('mouse'),
      value: '_mouse_',
    });
    return menu;
  }

  __tagMenu() {
    const dollyPro = this.runtime['ext_witCat.dollyPro'];
    if (!dollyPro) return [];
    return Object.keys(dollyPro.groupsOfClones).map((ID) => `tag:${ID}`);
  }

  __spriteMenuWithMouseAndTag() {
    const menu = this.__spriteMenuWithMouse();
    menu.push(...this.__getSpriteFolders());
    menu.push(...this.__tagMenu());
    return menu;
  }

  __spriteMenuWithTag() {
    const menu = this.__spriteMenuWithMyself();
    menu.push(...this.__getSpriteFolders());
    menu.push(...this.__tagMenu());
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
          const zoneString =
            (toff > 0 ? '-' : '+') + this._padZero(Math.abs(toff) / 60, 2) + this._padZero(Math.abs(toff) % 60, 2);
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

  getFile({ FILE }) {
    const asset = this.runtime.getGandiAssetContent(FILE);
    if (asset) {
      return asset.decodeText();
    }
    return '';
  }

  getComment({ CID }, util) {
    const [name, id] = CID.split('@@', 2);
    // 找角色名
    let target = this.runtime.targets.find((target) => name === target.sprite.name);
    if (!target) {
      // 找不到则使用当前角色
      target = util.target;
    }
    return target?.comments[id]?.text ?? '';
  }

  /**
   * 获取舞台0宽1高
   * @param {Object} args
   * @param {'0'|'1'} args.INFO
   */
  getStageInfo({ INFO }) {
    return INFO === '0' ? this.runtime.stageWidth : this.runtime.stageHeight;
  }

  spritesList() {
    return JSON.stringify(
      this.runtime.targets.filter((target) => target.isOriginal && !target.isStage).map((target) => target.sprite.name)
    );
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

  /**
   * 根据角色名/id获取target，或者多莉pro分组名获取多个对象（如果装了多莉pro）
   * @param {*} name 角色名
   * @param {*} util
   * @param {*} tryReadTags 是否尝试读分组
   * @returns {Target[]} 单个target或target数组
   */
  __getTargets(name, util, tryReadTags = false) {
    if (name === '__myself__') return [util.target];
    // 装了多莉扩展，且名称以'tag:'开头，尝试读取分组
    if (tryReadTags && name.startsWith('tag:')) {
      const dollyPro = this.runtime['ext_witCat.dollyPro'];
      if (dollyPro) {
        const tagName = name.slice(4);
        const IDs = dollyPro.getGroupByName(tagName);
        if (IDs) {
          return IDs.map((ID) => dollyPro.getTargetByID(ID));
        }
      }
    }
    if (tryReadTags && name.startsWith('folder:')) {
      const folderName = name.slice(7);
      return this.runtime.targets.filter((target) => target.getName().startsWith(`${folderName}//`));
    }
    // 根据名字查找对象
    let target = this.runtime.getSpriteTargetByName(name);
    if (target) {
      return target.sprite.clones;
    }
    // 根据ID查找
    target = this.runtime.getTargetById(name);
    if (!target) return [];
    return [target];
  }

  /** 角色碰到点？ */
  touchingPoint({ SPRITE, X, Y }, util) {
    const targets = this.__getTargets(Cast.toString(SPRITE), util, true);
    if (!targets) return false;
    const { renderer } = this.runtime;
    const [x, y] = this._ScratchXYToClientXY(Cast.toNumber(X), Cast.toNumber(Y));
    return targets.some((target) => target.visible && renderer.drawableTouching(target.drawableID, x, y));
  }

  /**
   * 将线段裁剪在 rect 内
   * @returns {[x1, y1, x2, y2]|null} 返回裁剪后结果或null（线段不在矩形内）
   */
  _clipLineWithinRect(x1, y1, x2, y2, rect) {
    // 解构矩形坐标
    const { left, bottom, right, top } = rect;

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

  pointInRect({ X, Y, X1, Y1, X2, Y2 }) {
    const x = Cast.toNumber(X);
    const y = Cast.toNumber(Y);
    const x1 = Math.min(Cast.toNumber(X1), Cast.toNumber(X2));
    const y1 = Math.min(Cast.toNumber(Y1), Cast.toNumber(Y2));
    const x2 = Math.max(Cast.toNumber(X1), Cast.toNumber(X2));
    const y2 = Math.max(Cast.toNumber(Y1), Cast.toNumber(Y2));

    // 检查点是否在矩形内
    return x >= x1 && x <= x2 && y >= y1 && y <= y2;
  }

  touchingRect({ SPRITE, X1, Y1, X2, Y2 }, util) {
    const x1 = Cast.toNumber(X1);
    const y1 = Cast.toNumber(Y1);
    const x2 = Cast.toNumber(X2);
    const y2 = Cast.toNumber(Y2);
    if (SPRITE === '_mouse_') {
      const mX = util.ioQuery('mouse', 'getScratchX');
      const mY = util.ioQuery('mouse', 'getScratchY');
      return (mX - x1) * (mX - x2) < 0 && (mY - y1) * (mY - y2) < 0;
    }
    const targets = this.__getTargets(Cast.toString(SPRITE), util, true);
    if (!targets) return false;
    const { renderer } = this.runtime;
    // 判断是否有一个target碰到矩形
    return targets.some((target) => {
      const drawable = renderer._allDrawables[target.drawableID];
      if (!drawable || !drawable._visible) return false;
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
    });
  }

  /**
   * 计算从点1出发到点2，和drawables的交点坐标
   * @returns {[x, y]|null}
   */
  _getLineHit(X1, Y1, X2, Y2, drawables, step = 1) {
    const hits = [];
    drawables.forEach((drawable) => {
      if (!drawable || !drawable._visible) return;
      drawable.updateCPURenderAttributes();
      // 将线段裁剪在角色内
      const clipped = this._clipLineWithinRect(X1, Y1, X2, Y2, drawable.getFastBounds());
      // 线段不在角色bounds内
      if (!clipped) return;
      const [x1, y1, x2, y2] = clipped;
      let hit = [x1, y1];
      const length = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
      if (length > 0) {
        for (let dis = 0; dis < length; dis += step) {
          hit[0] = x1 + (x2 - x1) * (dis / length);
          hit[1] = y1 + (y2 - y1) * (dis / length);
          if (drawable.isTouching(hit)) {
            hits.push(hit);
            return;
          }
        }
      }
      hit = [x2, y2];
      if (drawable.isTouching(hit)) {
        hits.push(hit);
      }
    });
    let hit = null;
    let minDis = Infinity;
    // 找到离点1最近的点
    hits.forEach((p) => {
      const dis = Math.sqrt((p[0] - X1) ** 2 + (p[1] - Y1) ** 2);
      if (dis < minDis) {
        minDis = dis;
        hit = p;
      }
    });
    return hit;
  }

  touchingLine({ SPRITE, X1, Y1, X2, Y2 }, util) {
    const targets = this.__getTargets(Cast.toString(SPRITE), util, true);
    if (!targets) return '';
    const { renderer } = this.runtime;
    const drawables = targets.map((target) => renderer._allDrawables[target.drawableID]);
    const x1 = Cast.toNumber(X1);
    const y1 = Cast.toNumber(Y1);
    const x2 = Cast.toNumber(X2);
    const y2 = Cast.toNumber(Y2);
    // const step = Math.max(1, Cast.toNumber(STEP));

    // return !!this._getLineHit(x1, y1, x2, y2, drawable, 1);
    const hit = this._getLineHit(x1, y1, x2, y2, drawables, 1);
    if (hit) {
      return `${Math.round(hit[0] * 100) / 100},${Math.round(hit[1] * 100) / 100}`;
    }
    return '';
  }

  touchingRay({ SPRITE, X, Y, DIR, DIS }, util) {
    const length = Math.min(99999999999, Cast.toNumber(DIS));
    if (length <= 0) return '';
    const targets = this.__getTargets(Cast.toString(SPRITE), util, true);
    if (!targets) return '';
    const { renderer } = this.runtime;
    const drawables = targets.map((target) => renderer._allDrawables[target.drawableID]);
    const x = Cast.toNumber(X);
    const y = Cast.toNumber(Y);
    const radians = Cast.toNumber(DIR) * (Math.PI / 180);
    // const step = Math.max(1, Cast.toNumber(STEP));
    const x2 = x + length * Math.sin(radians);
    const y2 = y + length * Math.cos(radians);

    const hit = this._getLineHit(x, y, x2, y2, drawables, 1);
    if (hit) {
      return `${Math.round(hit[0] * 100) / 100},${Math.round(hit[1] * 100) / 100}`;
    }
    return '';
  }

  targetTouchingTarget({ TARGET1, TARGET2 }, util) {
    const isMouse = TARGET1 === '_mouse_';
    const targets1 = isMouse ? ['_mouse_'] : this.__getTargets(Cast.toString(TARGET1), util, true);
    const targets2 = this.__getTargets(Cast.toString(TARGET2), util, true);
    if (!targets1 || !targets2) return false;

    const { renderer } = this.runtime;
    if (isMouse) {
      return targets2.some((target) => {
        if (!target.visible) return false;
        const [x, y] = this.getMouseForTarget(target, util);
        return renderer.drawableTouching(target.drawableID, x, y);
      });
    }
    const drawableCandidates = targets2.map((clone) => clone.drawableID);
    return targets1.some((target) => renderer.isTouchingDrawables(target.drawableID, drawableCandidates));
  }

  /** 某点顶层是我？ */
  amIOnTheTop({ X, Y }, util) {
    const { renderer } = this.runtime;
    const [x, y] = this._ScratchXYToClientXY(Cast.toNumber(X), Cast.toNumber(Y));
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
    const [x, y] = this._ScratchXYToClientXY(Cast.toNumber(X), Cast.toNumber(Y));
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
