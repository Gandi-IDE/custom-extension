/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
// Name: Stretch
// ID: stretch
// Description: Stretch sprites horizontally or vertically.
// Original Author: GarboMuffin <https://github.com/GarboMuffin>, Star World <https://github.com/TheStarWorld>
// Code ported from: https://github.com/TurboWarp/extensions/blob/master/extensions/stretch.js
// Cover from: https://github.com/TurboWarp/extensions/blob/master/images/stretch.svg
// Cover License: GPLv3
// Porter: Arkos

(function (Scratch) {
  const extensionId = 'stretch';
  const STRETCH_X = Symbol('stretch.x');
  const STRETCH_Y = Symbol('stretch.y');

  const cover = 'https://m.ccw.site/user_projects_assets/72705e4b5d6867256904eeded508dfd4.svg';
  const icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzA4NTMyMDQ2NjY4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY3ODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxwYXRoIGQ9Ik0zOTAuODI2NjY3IDMzMC40NTMzMzNMMTQ1LjcwNjY2NyA4NS4zMzMzMzNIMjk4LjY2NjY2N2E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAwIDAtODUuMzMzMzMzSDB2Mjk4LjY2NjY2N2E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAwIDg1LjMzMzMzMyAwVjE0NS43MDY2NjdsMjQ1LjEyIDI0NS4xMmE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAwIDYwLjM3MzMzNC02MC4zNzMzMzR6TTYzMy4xNzMzMzMgMzMwLjQ1MzMzM0w4NzguMjkzMzMzIDg1LjMzMzMzM0g3MjUuMzMzMzMzYTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEgMC04NS4zMzMzMzNoMjk4LjY2NjY2N3YyOTguNjY2NjY3YTQyLjY2NjY2NyA0Mi42NjY2NjcgMCAwIDEtODUuMzMzMzMzIDBWMTQ1LjcwNjY2N0w2OTMuNTQ2NjY3IDM5MC44MjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDEgMS02MC4zNzMzMzQtNjAuMzczMzM0ek0zOTAuODI2NjY3IDY5My41NDY2NjdMMTQ1LjcwNjY2NyA5MzguNjY2NjY3SDI5OC42NjY2NjdhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSAwIDg1LjMzMzMzM0gwVjcyNS4zMzMzMzNhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMSA4NS4zMzMzMzMgMHYxNTIuOTZsMjQ1LjEyLTI0NS4xMmE0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMSAxIDYwLjM3MzMzNCA2MC4zNzMzMzR6TTYzMy4xNzMzMzMgNjkzLjU0NjY2N0w4NzguMjkzMzMzIDkzOC42NjY2NjdINzI1LjMzMzMzM2E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAwIDAgODUuMzMzMzMzaDI5OC42NjY2NjdWNzI1LjMzMzMzM2E0Mi42NjY2NjcgNDIuNjY2NjY3IDAgMCAwLTg1LjMzMzMzMyAwdjE1Mi45Nkw2OTMuNTQ2NjY3IDYzMy4xNzMzMzNhNDIuNjY2NjY3IDQyLjY2NjY2NyAwIDAgMC02MC4zNzMzMzQgNjAuMzczMzM0eiIgZmlsbD0iIzNBM0EzQSIgcC1pZD0iNjc4MiI+PC9wYXRoPjwvc3ZnPg==';

  let runtime;
  let initialized = false;

  const initExt = function (rt) {
    if (initialized) return;
    initialized = true;
    runtime = rt;

    /**
     * @param {VM.RenderedTarget} target
     * @param {VM.RenderedTarget} [originalTarget] If target is a clone, the original to copy from.
     */
    const implementStretchForTarget = (target, originalTarget) => {
      if (STRETCH_X in target) {
        // Target already has stretch. Don't implement again.
        return;
      }
      target[STRETCH_X] = originalTarget ? originalTarget[STRETCH_X] : 100;
      target[STRETCH_Y] = originalTarget ? originalTarget[STRETCH_Y] : 100;

      const orig = target._getRenderedDirectionAndScale;
      target._getRenderedDirectionAndScale = function () {
        const result = orig.call(this);
        result.scale[0] *= this[STRETCH_X] / 100;
        result.scale[1] *= this[STRETCH_Y] / 100;
        return result;
      };
    };
    runtime.targets.forEach((target) => implementStretchForTarget(target));
    runtime.addListener('targetWasCreated', implementStretchForTarget);
    runtime.on('PROJECT_LOADED', () => {
      runtime.targets.forEach((target) => implementStretchForTarget(target));
    });
  };

  /**
   * @param {VM.RenderedTarget} target
   */
  const forceUpdateDirectionAndScale = (target) => {
    target.setDirection(target.direction);
  };

  class StretchExt {
    constructor() {
      initExt(Scratch.runtime);
      this.initFormatMessage({
        name: ['角色拉伸', 'Stretch'],
        credit: ['✨ 扩展搬运自 TurboWarp', '✨ Ported From TurboWarp'],
        // docsURI: [
        //   'https://learn.ccw.site/article/',
        //   'https://getgandi.com/extensions/',
        // ],

        setStretch: ['设置拉伸 x: [X] y: [Y]', 'set stretch to x: [X] y: [Y]'],
        changeStretch: ['拉伸增加 x: [DX] y: [DY]', 'change stretch by x: [DX] y: [DY]'],
        setStretchX: ['设置水平拉伸为 [X]', 'set stretch x to [X]'],
        setStretchY: ['设置垂直拉伸为 [Y]', 'set stretch y to [Y]'],
        changeStretchX: ['水平拉伸增加 [DX]', 'change stretch x by [DX]'],
        changeStretchY: ['垂直拉伸增加 [DY]', 'change stretch y by [DY]'],
        getX: ['水平拉伸', 'x stretch'],
        getY: ['垂直拉伸', 'y stretch'],

      });
    }

    initFormatMessage(l10n) {
      const res = { 'zh-cn': {}, en: {} };
      Object.entries(l10n).forEach(([id, msgs]) => {
        const ID = `${extensionId}.${id}`;
        [res['zh-cn'][ID], res.en[ID]] = msgs;
      });
      const _formatMessage = runtime.getFormatMessage(res);
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
        id: extensionId,
        name: this.fm('name'),
        color1: '#4287f5',
        color2: '#2b62ba',
        color3: '#204785',
        menuIconURI: icon,
        blocks: [
          `---${this.fm('credit')}`,
          {
            opcode: 'setStretch',
            blockType: Scratch.BlockType.COMMAND,
            text: this.fm('setStretch'),
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
            filter: [Scratch.TargetType.SPRITE],
          },
          {
            opcode: 'changeStretch',
            blockType: Scratch.BlockType.COMMAND,
            text: this.fm('changeStretch'),
            arguments: {
              DX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
              DY: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0,
              },
            },
            filter: [Scratch.TargetType.SPRITE],
          },

          '---',

          {
            opcode: 'setStretchX',
            blockType: Scratch.BlockType.COMMAND,
            text: this.fm('setStretchX'),
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
            filter: [Scratch.TargetType.SPRITE],
          },
          {
            opcode: 'setStretchY',
            blockType: Scratch.BlockType.COMMAND,
            text: this.fm('setStretchY'),
            arguments: {
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
            filter: [Scratch.TargetType.SPRITE],
          },
          {
            opcode: 'changeStretchX',
            blockType: Scratch.BlockType.COMMAND,
            text: this.fm('changeStretchX'),
            arguments: {
              DX: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10,
              },
            },
            filter: [Scratch.TargetType.SPRITE],
          },
          {
            opcode: 'changeStretchY',
            blockType: Scratch.BlockType.COMMAND,
            text: this.fm('changeStretchY'),
            arguments: {
              DY: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10,
              },
            },
            filter: [Scratch.TargetType.SPRITE],
          },

          '---',

          {
            opcode: 'getX',
            blockType: Scratch.BlockType.REPORTER,
            text: this.fm('getX'),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
          },
          {
            opcode: 'getY',
            blockType: Scratch.BlockType.REPORTER,
            text: this.fm('getY'),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
          },
        ],
      };
    }

    setStretch(args, util) {
      const x = Scratch.Cast.toNumber(args.X);
      const y = Scratch.Cast.toNumber(args.Y);
      if (util.target[STRETCH_X] !== x || util.target[STRETCH_Y] !== y) {
        util.target[STRETCH_X] = x;
        util.target[STRETCH_Y] = y;
        forceUpdateDirectionAndScale(util.target);
      }
    }

    changeStretch(args, util) {
      const dx = Scratch.Cast.toNumber(args.DX);
      const dy = Scratch.Cast.toNumber(args.DY);
      if (dx !== 0 || dy !== 0) {
        util.target[STRETCH_X] += dx;
        util.target[STRETCH_Y] += dy;
        forceUpdateDirectionAndScale(util.target);
      }
    }

    setStretchX(args, util) {
      const x = Scratch.Cast.toNumber(args.X);
      if (util.target[STRETCH_X] !== x) {
        util.target[STRETCH_X] = x;
        forceUpdateDirectionAndScale(util.target);
      }
    }

    setStretchY(args, util) {
      const y = Scratch.Cast.toNumber(args.Y);
      if (util.target[STRETCH_Y] !== y) {
        util.target[STRETCH_Y] = y;
        forceUpdateDirectionAndScale(util.target);
      }
    }

    changeStretchX(args, util) {
      const dx = Scratch.Cast.toNumber(args.DX);
      if (dx !== 0) {
        util.target[STRETCH_X] += dx;
        forceUpdateDirectionAndScale(util.target);
      }
    }

    changeStretchY(args, util) {
      const dy = Scratch.Cast.toNumber(args.DY);
      if (dy !== 0) {
        util.target[STRETCH_Y] += dy;
        forceUpdateDirectionAndScale(util.target);
      }
    }

    getX(args, util) {
      return util.target[STRETCH_X];
    }

    getY(args, util) {
      return util.target[STRETCH_Y];
    }
  }

  // Scratch.extensions.register(new Stretch());
  window.tempExt = {
    Extension: StretchExt,
    info: {
      name: `${extensionId}.extensionName`,
      description: `${extensionId}.description`,
      extensionId,
      iconURL: cover,
      insetIconURL: icon,
      featured: true,
      disabled: false,
      // docsURI: 'https://learn.ccw.site/article/?',
      collaborator: 'GarboMuffin @ TurboWarp',
      collaboratorList: [
        {
          collaborator: 'GarboMuffin @ TurboWarp',
          collaboratorURL:
          'https://github.com/GarboMuffin',
        },
        {
          collaborator: 'Arkos(porter)@CCW',
          collaboratorURL:
          'https://www.ccw.site/student/628979aa804a3a2bc801b097',
        },
      ],
    },
    l10n: {
      'zh-cn': {
        [`${extensionId}.extensionName`]: '伸缩',
        [`${extensionId}.description`]: '水平或垂直拉伸角色',
      },
      en: {
        [`${extensionId}.extensionName`]: 'Stretch',
        [`${extensionId}.description`]: 'Stretch sprites horizontally or vertically.',
      },
    },
  };
}(window.Scratch));
