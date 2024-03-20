/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
const { Scratch } = window;
const { Cast, BlockType, ArgumentType } = Scratch;

const extensionId = 'advancedControls';

const flagIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAABFFBMVEUAAACAgABVqlVJkklAn0BNmTNLljxGlzpDmzdFmjpGmzxHmz9Fmj1FmT5Emj1GmT1GmD1EmDxGmTxEmT1GmjxGmT1FmDxEmT5EmTxGmT5FmD1GmT5FmT1Gmj1EmT5FmT1FmT1FmDxGmT1FmjxLs09LtE9Jr0xJsk1Js05JtVBKtU5KtVBKtlBJrkpJsE1KtlFIrEpIsExLt1FLuFJKuVNIqkhLulNIp0VJqkhKtlJLvVRMvFNFmT5GpUVFmT1HpEVHokNMvlVFmT1Ho0NFmTxLvlVGoUFMvlVLvlVGn0BFmT1Nv1ZEmz5FmTxFmTxFmT1NvlZFmz9FmT5FnT9FnD5GnT9Mv1ZMv1ZMv1ZFmT1Mv1b////70P2GAAAAWXRSTlMAAgMHCAoRFhcwMz0/RkdQVGFmaWpxcnh7gIGEhZKZo6eprLq/v8DAwMDAwMDBwcHCwsPDxcbIysrLzM3Pz9DQ1NTV1dfZ29vg4uXm5+jp6ens7fDx9Pv8/nPb5aAAAAABYktHRFt0vJU0AAAAsUlEQVQoz2NgwA3YhNiwS4hHykoou9goCrKiSUhGhqhZe7gbm3rxQwQ4BJihEupRYODooMDFyMAu6uMsgyoRFW5kHxjkqeuhL4cmAQM4JXRwSWjjktDEJaGFS0IVIeFtZuIaAZdQgUmY2/oqyTu5WcEkNGAS/kJMQJrbySAAJBxmGSoIlYAoYGCR8rPVM7QItuNlQJVgYGDlE5MU5kSErhz2+KCihEikNHYJJh5mBhIAADBcR/r5OJzCAAAAAElFTkSuQmCC';
const repeatIcon = 'https://m.xiguacity.cn/scratch-base-static/blocks-media/repeat.svg';
const closeIcon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNS41IiBoZWlnaHQ9IjI1LjUiIHZpZXdCb3g9IjAsMCwyNS41LDI1LjUiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMDcuMjUsLTE2Ny4yNSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMzEyLjM1LDE2Ny4yNWgxNS4zYzIuODE2NjYsMCA1LjEsMi4yODMzNCA1LjEsNS4xdjE1LjNjMCwyLjgxNjY1IC0yLjI4MzM0LDUuMSAtNS4xLDUuMWgtMTUuM2MtMi44MTY2NiwwIC01LjEsLTIuMjgzMzQgLTUuMSwtNS4xdi0xNS4zYzAsLTIuODE2NjUgMi4yODMzNCwtNS4xIDUuMSwtNS4xeiIgZmlsbD0iI2YzNjY2NiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTMxNC45OTEwNywxNzQuOTkxMDdsMTAuMDE3ODYsMTAuMDE3ODYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zMjUuMDA4OTMsMTc0Ljk5MTA3bC0xMC4wMTc4NiwxMC4wMTc4NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvZz48L3N2Zz4=';

// import cover from './assets/cover1.png'
// import icon from './assets/icon1.svg'
const icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzAxMTAwNzM3MDUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQwMTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik00MzEuNjI0IDQ1NS4yODJoMzI5LjEzMmM1MC43MjkgMCA5Mi00MS4yNzEgOTItOTJWMjYxLjgyN2MwLTUwLjcyOS00MS4yNzEtOTItOTItOTJINDMxLjYyNGMtNTAuNzI5IDAtOTIgNDEuMjcxLTkyIDkydjI1Ljk4NWgtNjguOTUyYy0xMDUuMTc1IDAtMTkwLjc0MiA4NS41NjYtMTkwLjc0MiAxOTAuNzQydjYwLjQ5OWMwIDEwNS4xNzYgODUuNTY2IDE5MC43NDIgMTkwLjc0MiAxOTAuNzQyaDY4Ljk1MnYyMC4wODJjMCA1MC43MjkgNDEuMjcxIDkyIDkyIDkyaDMyOS4xMzJjNTAuNzI5IDAgOTItNDEuMjcxIDkyLTkyVjY0OC40MjJjMC01MC43MjktNDEuMjcxLTkyLTkyLTkySDQzMS42MjRjLTUwLjcyOSAwLTkyIDQxLjI3MS05MiA5MnYyNS4zNzNoLTY4Ljk1MmMtNzQuMjk3IDAtMTM0Ljc0Mi02MC40NDUtMTM0Ljc0Mi0xMzQuNzQydi02MC40OTljMC03NC4yOTcgNjAuNDQ1LTEzNC43NDIgMTM0Ljc0Mi0xMzQuNzQyaDY4Ljk1MnYxOS40N2MwIDUwLjcyOSA0MS4yNzEgOTIgOTIgOTJ6IG0tMzYgMTkzLjE0YzAtMTkuODUxIDE2LjE0OS0zNiAzNi0zNmgzMjkuMTMyYzE5Ljg1MSAwIDM2IDE2LjE0OSAzNiAzNnYxMDEuNDU1YzAgMTkuODUxLTE2LjE0OSAzNi0zNiAzNkg0MzEuNjI0Yy0xOS44NTEgMC0zNi0xNi4xNDktMzYtMzZWNjQ4LjQyMnogbTAtMzYwLjYxdi0yNS45ODVjMC0xOS44NTEgMTYuMTQ5LTM2IDM2LTM2aDMyOS4xMzJjMTkuODUxIDAgMzYgMTYuMTQ5IDM2IDM2djEwMS40NTVjMCAxOS44NTEtMTYuMTQ5IDM2LTM2IDM2SDQzMS42MjRjLTE5Ljg1MSAwLTM2LTE2LjE0OS0zNi0zNnYtNzUuNDd6IiBwLWlkPSI0MDEzIj48L3BhdGg+PC9zdmc+';
const cover = 'https://m.ccw.site/user_projects_assets/c48647806cadf20680f05c6651d3b02d.png';

/** @typedef {any} SCarg 来自Scratch参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字和文本，需要同时处理 */

/** @typedef {any} Util util 参数，暂时定为 any */

function getPeekStackBlock(thread) {
  let block;
  const blockID = thread.peekStack();
  const globalTarget = thread.getCurrentGlobalTarget();
  if (globalTarget) {
    block = globalTarget.blocks.getBlock(blockID);
  } else {
    block = thread.target.blocks.getBlock(blockID);
  }
  return block;
}

class AdvancedControls {
  constructor(runtime) {
    this.runtime = runtime;

    this.shouldExecuteStop = true;

    // 绿旗前一刻
    runtime.on('PROJECT_START', () => {
      this.runtime.startHats(`${extensionId}_beforeFlagClicked`);
      this.shouldExecuteStop = true;
    });
    // 项目停止时
    runtime.on('PROJECT_STOP_ALL', () => {
      // 这里参考了lilyMakemoreEvents扩展写法
      if (this.shouldExecuteStop) {
        queueMicrotask(() => this.runtime.startHats(`${extensionId}_whenProjectStopped`));
      }
    });
    // 项目加载完成
    // runtime.on('PROJECT_LOADED', () => {
    //   this.runtime.startHats(`${extensionId}_whenProjectLoaded`);
    // });
    // 监听页面关闭
    window.addEventListener('beforeunload', () => {
      const threads = this.runtime.startHats(`${extensionId}_beforeWindowClosed`);
      // 立即执行
      if (threads) {
        threads.forEach((thread) => {
          this.runtime.sequencer.stepThread(thread);
        });
      }
    });

    const outerThis = this;
    // 劫持绿旗点击
    this.tryHackedFunction(runtime, 'greenFlag', function greenFlag(origFun) {
      outerThis.shouldExecuteStop = false;
      origFun.call(this);
    });

    // 给扩展的循环类积木加上循环icon
    this.tryHackedFunction(
      runtime,
      '_convertBlockForScratchBlocks',
      function _convertBlockForScratchBlocks(orig, blockInfo, categoryInfo) {
        const res = orig.call(this, blockInfo, categoryInfo);
        // 其他扩展直接返回结果
        if (categoryInfo.id !== extensionId) return res;
        if (blockInfo.blockType === BlockType.LOOP) {
          res.json.args2 = [
            {
              type: 'field_image',
              src: repeatIcon, // 替换循环图标为正确图标
              width: 24,
              height: 24,
            },
          ];
        }
        return res;
      },
    );

    // 劫持 startBranch
    this.__hackedStartBranch = function startBranch(orig, branchNum, isLoop) {
      if (isLoop) {
        // 如果运行了breakLoop，loop不执行branch
        if (this.thread.__breakLoop) {
          return;
        }
      }
      orig.call(this, branchNum, isLoop);
    };

    // 劫持 goToNextBlock
    this.__hackedGoToNextBlock = function goToNextBlock(orig) {
      // 获取当前 block，用于之后读取当前C型积木的opcode
      const block = getPeekStackBlock(this);
      // 跳转下一个积木
      orig.call(this);
      // 如果循环里执行了continueLoop，将当前stack设为null（不执行下一个积木）
      if (this.__continueLoop) {
        // 没有外层，取消continue
        if (this.stackFrames.length < 2) {
          this.__continueLoop = false;
        } else {
          // 有外层
          const outerFrame = this.stackFrames[this.stackFrames.length - 2];
          // 外层是循环，清除__continueLoop状态（如果外层是“如果”则不清除）
          if (outerFrame.isLoop) this.__continueLoop = false;
          this.stack[this.stack.length - 1] = null;
        }
      }
      // 如果循环里执行了breakLoop，将当前stack设为null（不执行下一个积木）
      if (this.__breakLoop) {
        if (this.__breakLoopId === block.id) {
          this.__breakLoop = false;
          this.__breakLoopId = '';
        } else {
          this.stack[this.stack.length - 1] = null;
        }
      }
      // 如果上个积木是“瞬间执行”
      if (block) {
        const stackFrame = this.stackFrames[this.stackFrames.length - 1];
        if (block.opcode === `${extensionId}_allAtOnce`) {
          // 恢复之前的warpMode
          if (stackFrame.__warpMode !== undefined) {
            stackFrame.warpMode = stackFrame.__warpMode;
          }
        }
      }
    };

    const l10n = {
      'advControls.extensionName': ['高级控制扩展', 'Advanced Controls'],
      'advControls.tag.event': ['🔔 更多事件', '🔔 More Events'],
      'advControls.tag.control': ['🎚️ 更多控制', '🎚️ More Controls'],
      'advControls.tag.vars': ['💾 线程变量', '💾 Thread Variables'],
      'advControls.docsURI': [
        'https://learn.ccw.site/article/baa85bdd-038b-4a3c-894d-86a972b42178',
        'https://learn.ccw.site/article/baa85bdd-038b-4a3c-894d-86a972b42178',
      ],
      'advControls.tag.compileBreaker': [
        '⚠️(慎用)以下积木会破坏脚本编译',
        '⚠️ blocks below will break the compilation',
      ],
      'advControls.tag.compileNotSupported': [
        '⚠️ 以下积木编译模式下无法使用',
        '⚠️ blocks below can\'t work in compile mode',
      ],
      'advControls.stage': ['舞台', 'stage'],
      'advControls.set': ['设为', 'set to'],
      'advControls.change': ['增加', 'change by'],
      'advControls.setThreadVar': [
        '线程变量[VAR][OP][VALUE]',
        'thread var[VAR][OP][VALUE]',
      ],
      'advControls.getThreadVar': ['线程变量[VAR]', 'thread var[VAR]'],
      'advControls.setThreadTimer': [
        '线程计时器[TIMER][OP][TIME]秒',
        'thread timer[TIMER][OP][TIME]secs',
      ],
      'advControls.getThreadTimer': [
        '线程计时器[TIMER]',
        'thread timer[TIMER]',
      ],
      'advControls.defaultValue.count': [
        '计数器',
        'count',
      ],
      'advControls.defaultValue.timer': [
        '计时器1',
        'timer1',
      ],
      'advControls.breakLoop': ['⚠️退出循环', '⚠️break the loop'],
      'advControls.continueLoop': [
        '⚠️继续下次循环',
        '⚠️continue to the next loop',
      ],
      'advControls.whenProjectLoaded': [
        '当项目加载完成',
        'when the project is loaded',
      ],
      'advControls.beforeWindowClosed': [
        '当试图关闭页面[CLOSE_ICON]',
        'when trying to close the window[CLOSE_ICON]',
      ],
      'advControls.beforeFlagClicked': [
        '当[FLAG]被点击(比原版先执行)',
        'when[FLAG]is clicked (executed before the original block)',
      ],
      'advControls.whenProjectStopped': [
        '项目停止后',
        'when the project is stopped',
      ],
      'advControls.runGreenFlag': ['运行绿旗[FLAG]', 'run green flag[FLAG]'],

      'advControls.addOrRemoveTagToThread': [
        '给当前线程[MENU]标记[TAG]',
        'tag [TAG] [MENU] the current thread',
      ],
      'advControls.add': ['添加', 'add to'],
      'advControls.remove': ['移除', 'remove from'],

      'advControls.defaultValue.threadTag': ['标签1', 'tag1'],
      'advControls.stopThreadWithTag': [
        '停止[MENU]所有带有标记[TAG]的线程',
        'stop all threads with tag[TAG] for [MENU]',
      ],
      'advControls.myThread': ['我的', 'me'],
      'advControls.currentSprite': [
        '当前角色和克隆体的',
        'current sprite and it\'s clones',
      ],
      'advControls.allSprites': ['所有角色的', 'all sprites'],

      'advControls.allAtOnce': ['瞬间执行', 'all at once'],
      'advControls.doWhile1': ['先执行一次', 'do once'],
      'advControls.doWhile2': [
        '然后重复直到[CONDITION][REPEAT_ICON]',
        'then repeat util[CONDITION][REPEAT_ICON]',
      ],

      'advControls.waitOrUntil': [
        '等待[SECS]秒或直到[CONDITION]',
        'wait [SECS] seconds or util[CONDITION]',
      ],
      'advControls.repeatSeconds': [
        '重复[SECS]秒',
        'repeat for [SECS] seconds',
      ],
      'advControls.repeatSecondsOrUntil': [
        '重复[SECS]秒或直到[CONDITION]',
        'repeat for [SECS] seconds or util[CONDITION]',
      ],
      'advControls.repeatTimesOrUntil': [
        '重复执行[TIMES]次或直到[CONDITION]',
        'repeat [TIMES] times or util[CONDITION]',
      ],
      'advControls.letSpriteDo': ['让[SPRITE]执行', 'let[SPRITE]do'],

      'advControls.waitUtilChanged': [
        '等待直到[VAR]发生变化',
        'wait until [VAR] changes',
      ],
      'advControls.ifChanged': [
        '如果[VAR]发生变化',
        'if [VAR] is changed, then',
      ],
      'advControls.everyNSeconds': ['每隔[N]秒', 'every [N] seconds'],
    };
    const l10n2 = { 'zh-cn': {}, en: {} };
    Object.keys(l10n).forEach((key) => {
      l10n2['zh-cn'][key] = l10n[key][0];
      l10n2.en[key] = l10n[key][1];
    });
    this._formatMessage = runtime.getFormatMessage(l10n2);
  }

  /**
   * 获取翻译
   * @param {string} id
   * @returns {string}
   */
  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    });
  }

  getInfo() {
    return {
      id: extensionId, // 拓展id
      name: this.formatMessage('advControls.extensionName'),
      docsURI: this.formatMessage('advControls.docsURI'),

      color1: '#FFB403',
      menuIconURI: icon,
      blockIconURI: icon,
      blocks: [
        // `---${this.formatMessage('advControls.tag.event')}`, // 事件
        // {
        //   opcode: 'whenProjectLoaded',
        //   blockType: BlockType.EVENT,
        //   text: this.formatMessage('advControls.whenProjectLoaded'),
        //   isEdgeActivated: false,
        // },
        {
          opcode: 'beforeFlagClicked',
          blockType: BlockType.EVENT,
          text: this.formatMessage('advControls.beforeFlagClicked'),
          isEdgeActivated: false,
          arguments: {
            FLAG: {
              type: ArgumentType.IMAGE,
              dataURI: flagIcon,
            },
          },
        },
        {
          opcode: 'whenProjectStopped',
          blockType: BlockType.EVENT,
          text: this.formatMessage('advControls.whenProjectStopped'),
          isEdgeActivated: false,
        },
        {
          opcode: 'runGreenFlag',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('advControls.runGreenFlag'),
          isTerminal: true,
          arguments: {
            FLAG: {
              type: ArgumentType.IMAGE,
              dataURI: flagIcon,
            },
          },
        },
        {
          opcode: 'beforeWindowClosed',
          blockType: BlockType.EVENT,
          text: this.formatMessage('advControls.beforeWindowClosed'),
          isEdgeActivated: false,
          arguments: {
            CLOSE_ICON: {
              type: ArgumentType.IMAGE,
              dataURI: closeIcon,
            },
          },
        },
        // `---${this.formatMessage('advControls.tag.control')}`, // 控制
        '---',
        {
          opcode: 'addOrRemoveTagToThread',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('advControls.addOrRemoveTagToThread'),
          arguments: {
            TAG: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage(
                'advControls.defaultValue.threadTag',
              ),
            },
            MENU: {
              type: ArgumentType.STRING,
              menu: 'ADD_OR_REMOVE',
            },
          },
        },
        {
          opcode: 'stopThreadWithTag',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('advControls.stopThreadWithTag'),
          arguments: {
            TAG: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage(
                'advControls.defaultValue.threadTag',
              ),
            },
            MENU: {
              type: ArgumentType.STRING,
              menu: 'STOP_THREAD_TYPES',
            },
          },
        },
        `---${this.formatMessage('advControls.tag.vars')}`, //
        {
          opcode: 'setThreadVar',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('advControls.setThreadVar'),
          arguments: {
            VAR: {
              type: ArgumentType.STRING,
              defaultValue: 'count',
            },
            OP: {
              type: ArgumentType.STRING,
              menu: 'SET_OR_CHANGE',
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: '0',
            },
          },
        },
        {
          opcode: 'getThreadVar',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('advControls.getThreadVar'),
          arguments: {
            VAR: {
              type: ArgumentType.STRING,
              defaultValue: 'count',
            },
          },
        },
        '---',
        {
          opcode: 'setThreadTimer',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('advControls.setThreadTimer'),
          arguments: {
            TIMER: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('advControls.defaultValue.timer'),
            },
            OP: {
              type: ArgumentType.STRING,
              menu: 'SET_OR_CHANGE',
            },
            TIME: {
              type: ArgumentType.NUMBER,
              defaultValue: 0,
            },
          },
        },
        {
          opcode: 'getThreadTimer',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('advControls.getThreadTimer'),
          arguments: {
            TIMER: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('advControls.defaultValue.timer'),
            },
          },
        },
        // `---${this.formatMessage('advControls.tag.compileBreaker')}`, //
        // {
        //   opcode: 'doWhile',
        //   blockType: BlockType.CONDITIONAL,
        //   text: [
        //     this.formatMessage('advControls.doWhile1'),
        //     this.formatMessage('advControls.doWhile2'),
        //   ],
        //   arguments: {
        //     CONDITION: {
        //       type: ArgumentType.BOOLEAN,
        //     },
        //     REPEAT_ICON: {
        //       type: ArgumentType.IMAGE,
        //       dataURI: repeatIcon,
        //     },
        //   },
        // },
        // {
        //   opcode: 'repeatSeconds',
        //   blockType: BlockType.LOOP,
        //   text: this.formatMessage('advControls.repeatSeconds'),
        //   arguments: {
        //     SECS: {
        //       type: ArgumentType.NUMBER,
        //       defaultValue: 2,
        //     },
        //   },
        // },
        // {
        //   opcode: 'repeatSecondsOrUntil',
        //   blockType: BlockType.LOOP,
        //   text: this.formatMessage('advControls.repeatSecondsOrUntil'),
        //   arguments: {
        //     SECS: {
        //       type: ArgumentType.NUMBER,
        //       defaultValue: 2,
        //     },
        //     CONDITION: {
        //       type: ArgumentType.BOOLEAN,
        //     },
        //   },
        // },
        // {
        //   opcode: 'repeatTimesOrUntil',
        //   blockType: BlockType.LOOP,
        //   text: this.formatMessage('advControls.repeatTimesOrUntil'),
        //   branchCount: 1,
        //   arguments: {
        //     TIMES: {
        //       type: ArgumentType.NUMBER,
        //       defaultValue: 10,
        //     },
        //     CONDITION: {
        //       type: ArgumentType.BOOLEAN,
        //     },
        //   },
        // },
        // '---',
        // {
        //   opcode: 'allAtOnce',
        //   blockType: BlockType.CONDITIONAL,
        //   text: this.formatMessage('advControls.allAtOnce'),
        //   branchCount: 1,
        // },
        // {
        //   opcode: 'letSpriteDo',
        //   blockType: BlockType.CONDITIONAL,
        //   text: this.formatMessage('advControls.letSpriteDo'),
        //   branchCount: 1,
        //   arguments: {
        //     SPRITE: {
        //       type: ArgumentType.STRING,
        //       menu: 'SPRITE_MENU',
        //     },
        //   },
        // },
        // {
        //   opcode: 'ifChanged',
        //   blockType: BlockType.CONDITIONAL,
        //   text: this.formatMessage('advControls.ifChanged'),
        //   branchCount: 1,
        //   arguments: {
        //     VAR: {
        //       type: null,
        //     },
        //   },
        // },
        // {
        //   opcode: 'everyNSeconds',
        //   blockType: BlockType.CONDITIONAL,
        //   text: this.formatMessage('advControls.everyNSeconds'),
        //   branchCount: 1,
        //   arguments: {
        //     N: {
        //       type: ArgumentType.NUMBER,
        //       defaultValue: 2,
        //     },
        //   },
        // },
        // `---${this.formatMessage('advControls.tag.compileNotSupported')}`, //
        // {
        //   opcode: 'waitOrUntil',
        //   blockType: BlockType.COMMAND,
        //   text: this.formatMessage('advControls.waitOrUntil'),
        //   arguments: {
        //     SECS: {
        //       type: ArgumentType.NUMBER,
        //       defaultValue: 1,
        //     },
        //     CONDITION: {
        //       type: ArgumentType.BOOLEAN,
        //     },
        //   },
        // },
        // {
        //   opcode: 'waitUtilChanged',
        //   blockType: BlockType.COMMAND,
        //   text: this.formatMessage('advControls.waitUtilChanged'),
        //   arguments: {
        //     VAR: {
        //       type: null,
        //     },
        //   },
        // },
        // {
        //   opcode: 'breakLoop',
        //   blockType: BlockType.COMMAND,
        //   text: this.formatMessage('advControls.breakLoop'),
        //   isTerminal: true,
        // },
        // {
        //   opcode: 'continueLoop',
        //   blockType: BlockType.COMMAND,
        //   text: this.formatMessage('advControls.continueLoop'),
        //   isTerminal: true,
        // },
      ],
      menus: {
        SPRITE_MENU: {
          acceptReporters: true,
          items: 'spriteMenuWithoutMyself',
        },
        STOP_THREAD_TYPES: [
          {
            text: this.formatMessage('advControls.myThread'),
            value: 'me',
          },
          {
            text: this.formatMessage('advControls.currentSprite'),
            value: 'sprite',
          },
          {
            text: this.formatMessage('advControls.allSprites'),
            value: 'all',
          },
        ],
        ADD_OR_REMOVE: [
          {
            text: this.formatMessage('advControls.add'),
            value: 'add',
          },
          {
            text: this.formatMessage('advControls.remove'),
            value: 'remove',
          },
        ],
        SET_OR_CHANGE: [
          {
            text: this.formatMessage('advControls.set'),
            value: 'set',
          },
          {
            text: this.formatMessage('advControls.change'),
            value: 'change',
          },
        ],
      },
    };
  }

  // **************************** 动态菜单 ****************************
  /**
   * 角色菜单,但没有自己
   * @returns {text: "角色名", value: "角色名"}[];
   */
  spriteMenuWithoutMyself() {
    const { targets } = this.runtime;
    const editingTarget = this.runtime._editingTarget;
    const menu = targets
      .filter(
        (target) => target.isOriginal && target !== editingTarget,
      )
      .map((target) => ({
        text: target.isStage ? this.formatMessage('advControls.stage') : target.sprite.name,
        value: target.isStage ? '_stage_' : target.sprite.name,
      }));
    if (menu.length === 0) {
      menu.push({
        text: '-',
        value: 'empty',
      });
    }
    return menu;
  }

  // ------------------------------↓一些工具函数----------------------------------
  /**
   * （如果之前没有劫持）劫持obj对象的方法
   * @param {*} obj
   * @param {string} funName 方法名
   * @param {Function} newFun 注入的方法(形如(origFun, 其他参数)=>{...})
   */
  tryHackedFunction(obj, funName, newFun) {
    if (!obj[`${extensionId}_origFun`]) {
      // eslint-disable-next-line no-param-reassign
      obj[`${extensionId}_origFun`] = {};
    }
    const origFuns = obj[`${extensionId}_origFun`];
    if (!origFuns[funName]) {
      origFuns[funName] = true;
    }
    const origFun = obj[funName];
    // 替换原始方法为新方法
    // eslint-disable-next-line no-param-reassign
    obj[funName] = function (...args) {
      return newFun.call(this, origFun, ...args);
    };
  }
  // --------------------------------↓积木函数--------------------------------

  runGreenFlag() {
    this.runtime.greenFlag();
  }

  addOrRemoveTagToThread({ MENU, TAG }, util) {
    if (MENU === 'add') {
      if (!util.thread.threadTag) {
        util.thread.threadTag = {};
      }
      util.thread.threadTag[TAG] = true;
    } else {
      if (!util.thread.threadTag) {
        return;
      }
      delete util.thread.threadTag[TAG];
    }
  }

  stopThreadWithTag({ MENU, TAG }, util) {
    // const hasTargetEmitted = new Map();
    this.runtime.threads.forEach((thread) => {
      // 查找所有带TAG的thread并停止
      if (thread.threadTag && thread.threadTag[TAG]) {
        const { target } = thread;
        if (target !== util.target) {
          if (MENU === 'sprite') {
            if (!target.sprite || !util.target.sprite) return;
            if (target.sprite !== util.target.sprite) return;
          } else if (MENU === 'me') return;
        }
        if (thread === util.thread) {
          util.thread.stopThisScript();
        } else {
          // 似乎暂时不支持emit'STOP_FOR_TARGET'时针对某个代码
          // 目前这会导致“询问”、“播放”音效不会被停止
          // if (!hasTargetEmitted.has(target)) {
          //   this.runtime.emit('STOP_FOR_TARGET', target);
          //   hasTargetEmitted.set(target, true);
          // }
          this.runtime._stopThread(thread);
        }
      }
    });
  }

  /**
   * 查找最近一层循环的 stackFrame
   * @param {thread} thread 线程
   * @returns {stackFrame} 最近一层循环的 stackFrame
   */
  getNearestLoop(thread) {
    // 寻找到最近一层循环
    for (let i = thread.stackFrames.length - 2; i >= 0; i -= 1) {
      const frame = thread.stackFrames[i];
      // 外层是自制积木，停止查找
      if (frame.op.opcode === 'procedures_call') {
        return null;
      }
      // 外层是返回值积木，停止查找
      let isWaitingProceduresReturn = false;
      if (frame.reporting) {
        const reportBlock = thread.target.blocks.getBlock(frame.reporting);
        isWaitingProceduresReturn = reportBlock.opcode === 'procedures_call_with_return';
      }
      if (isWaitingProceduresReturn) {
        return null;
      }
      // 找到最近一层循环
      if (frame.isLoop) {
        return frame;
      }
    }
    return null;
  }

  _hackGoToNextBlock(thread) {
    this.tryHackedFunction(thread, 'goToNextBlock', this.__hackedGoToNextBlock);
  }

  breakLoop(args, util) {
    const { thread } = util;
    const frame = this.getNearestLoop(thread);
    if (frame) {
      thread.__breakLoop = true;
      thread.__breakLoopId = frame.op.id;
      this._hackGoToNextBlock(thread);
      this.tryHackedFunction(util, 'startBranch', this.__hackedStartBranch);
    }
  }

  continueLoop(args, util) {
    const { thread } = util;
    const frame = this.getNearestLoop(thread);
    if (frame) {
      thread.__continueLoop = true;
      this._hackGoToNextBlock(thread);
    }
  }

  allAtOnce(args, util) {
    const { thread } = util;
    // 保存之前的warpMode（加速模式）
    thread.peekStackFrame().__warpMode = thread.peekStackFrame().warpMode;

    // 开启warpMode
    thread.peekStackFrame().warpMode = true;
    // 劫持goToNextBlock，用于恢复warpMode
    this._hackGoToNextBlock(thread);
    util.startBranch(1, false);
  }

  letSpriteDo({ SPRITE }, util) {
    const origTarget = util.target;
    const name = Cast.toString(SPRITE);
    let target;
    if (name === '_stage_') {
      target = this.runtime.getTargetForStage();
    } else {
      target = this.runtime.getSpriteTargetByName(name);
      if (!target) {
        target = this.runtime.getTargetById(name);
        if (!target) return;
      }
    }
    const { thread } = util;
    // 切换执行对象
    thread.target = target;
    // 借用全局积木逻辑，设置 globalTarget 为原角色
    const stackFrame = thread.peekStackFrame();
    if (!stackFrame.executionContext) stackFrame.executionContext = {};
    const { executionContext } = stackFrame;
    if (!executionContext.globalTarget) { executionContext.globalTarget = origTarget; }
    stackFrame.__lastTarget = origTarget;

    // 劫持 popStack，用于恢复执行对象为原角色
    this.tryHackedFunction(thread, 'popStack', function popStack(orig) {
      const block = getPeekStackBlock(this);
      if (block) {
        if (block.opcode === `${extensionId}_letSpriteDo`) {
          // 恢复执行角色
          this.target = this.peekStackFrame().__lastTarget;
        }
      }
      return orig.call(this);
    });
    util.startBranch(1, false);
  }

  doWhile({ CONDITION }, util) {
    if (typeof util.stackFrame.first === 'undefined') {
      util.stackFrame.first = true;
      util.startBranch(1, true);
    } else {
      const condition = Cast.toBoolean(CONDITION);
      if (!condition) {
        util.startBranch(1, true);
      }
    }
  }

  waitOrUntil({ SECS, CONDITION }, util) {
    const condition = Cast.toBoolean(CONDITION);
    if (condition) {
      return;
    }
    if (util.stackTimerNeedsInit()) {
      const duration = Math.max(0, 1000 * Cast.toNumber(SECS));
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve();
      //   }, duration);
      // });
      util.startStackTimer(duration);
      this.runtime.requestRedraw();
      util.yield();
    } else if (!util.stackTimerFinished()) {
      util.yield();
    }
  }

  repeatSeconds({ SECS }, util) {
    if (util.stackTimerNeedsInit()) {
      const duration = Math.max(0, 1000 * Cast.toNumber(SECS));

      util.startStackTimer(duration);
      this.runtime.requestRedraw();
    } else if (util.stackTimerFinished()) {
      return;
    }
    util.startBranch(1, true);
  }

  repeatSecondsOrUntil({ SECS, CONDITION }, util) {
    const condition = Cast.toBoolean(CONDITION);
    if (condition) return;
    this.repeatSeconds({ SECS }, util);
  }

  repeatTimesOrUntil({ TIMES, CONDITION }, util) {
    const condition = Cast.toBoolean(CONDITION);
    if (condition) {
      return;
    }
    if (typeof util.stackFrame.loopCounter === 'undefined') {
      util.stackFrame.loopCounter = Math.round(Cast.toNumber(TIMES));
    }
    util.stackFrame.loopCounter -= 1;
    if (util.stackFrame.loopCounter >= 0) {
      util.startBranch(1, true);
    }
  }

  /**
   * 获取存在thread上的lastValue，以及当前opid
   * @param {*} thread thread
   * @returns {[object, string]} [lastValue对象，opid]
   */
  getTheadLastValue(thread) {
    // eslint-disable-next-line no-param-reassign
    if (!thread.__lastValue) thread.__lastValue = {};
    return [thread.__lastValue, thread.peekStackFrame().op.id];
  }

  waitUtilChanged({ VAR }, util) {
    const [lastValues, opId] = this.getTheadLastValue(util.thread);
    if (lastValues[opId] === undefined) lastValues[opId] = VAR;
    if (VAR === lastValues[opId]) util.yield();
    lastValues[opId] = VAR;
  }

  ifChanged({ VAR }, util) {
    const [lastValues, opId] = this.getTheadLastValue(util.thread);
    if (lastValues[opId] === undefined) lastValues[opId] = VAR;
    if (VAR !== lastValues[opId]) util.startBranch(1, false);
    lastValues[opId] = VAR;
  }

  everyNSeconds({ N }, util) {
    const [lastValues, opId] = this.getTheadLastValue(util.thread);
    // 首次执行，或每隔 N 秒
    if (
      lastValues[opId] === undefined
      || Date.now() - lastValues[opId] >= N * 1000
    ) {
      util.startBranch(1, false);
      lastValues[opId] = Date.now();
    }
  }

  /**
   * 获取存在thread上的threadVars
   * @param {*} thread thread
   * @returns {object} threadVars对象
   */
  __getThreadVars(thread) {
    // eslint-disable-next-line no-param-reassign
    if (!thread.__threadVars) thread.__threadVars = {};
    return thread.__threadVars;
  }

  setThreadVar({ VAR, OP, VALUE }, util) {
    const vars = this.__getThreadVars(util.thread);
    if (OP === 'set') {
      vars[VAR] = VALUE;
    } else {
      vars[VAR] = Cast.toNumber(vars[VAR]) + Cast.toNumber(VALUE);
    }
  }

  getThreadVar({ VAR }, util) {
    const vars = this.__getThreadVars(util.thread);
    return vars[VAR] ?? '';
  }

  /**
   * 获取存在thread上的timers
   * @param {*} thread thread
   * @returns {object} timers对象
   */
  __getThreadTimers(thread) {
    // eslint-disable-next-line no-param-reassign
    if (!thread.__timers) thread.__timers = {};
    return thread.__timers;
  }

  setThreadTimer({ TIMER, OP, TIME }, util) {
    const timers = this.__getThreadTimers(util.thread);
    if (OP === 'set') {
      timers[TIMER] = Date.now() - Cast.toNumber(TIME) * 1000;
    } else {
      timers[TIMER] = timers[TIMER] ?? Date.now() - Cast.toNumber(TIME) * 1000;
    }
  }

  getThreadTimer({ TIMER }, util) {
    const timers = this.__getThreadTimers(util.thread);
    if (!Object.prototype.hasOwnProperty.call(timers, TIMER)) return '';
    return (Date.now() - timers[TIMER]) * 0.001;
  }
}

window.tempExt = {
  Extension: AdvancedControls,
  info: {
    name: 'AdvancedControls.extensionName',
    description: 'AdvancedControls.description',
    extensionId,
    iconURL: cover,
    insetIconURL: icon,
    featured: true,
    disabled: false,
    collaborator: 'only for AdvancedControls test',
    docsURI:
      'https://learn.ccw.site/article/baa85bdd-038b-4a3c-894d-86a972b42178',
    collaboratorList: [
      {
        collaborator: 'Arkos @ CCW',
        collaboratorURL:
          'https://www.ccw.site/student/6107c5323e593a0c25f850f8',
      },
    ],
  },
  l10n: {
    'zh-cn': {
      'AdvancedControls.extensionName': '高级事件&控制',
      'AdvancedControls.description': '更多事件、控制积木',
    },
    en: {
      'AdvancedControls.extensionName': 'Advanced Events & Controls',
      'AdvancedControls.description': 'More events & control blocks',
    },
  },
};
