/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

// Original by: Vadik1 <https://scratch.mit.edu/users/Vadik1/>
// codes from: https://github.com/TurboWarp/extensions/blob/master/extensions/Xeltalliv/clippingblending.js
// cover from: https://github.com/TurboWarp/extensions/blob/master/images/Xeltalliv/clippingblending.svg
// Modified & Ported by: Arkos

(function (Scratch) {
  // Simplified remake of an icon by True-Fantom
  const icon = `data:image/svg+xml,${
    encodeURIComponent(`
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,200,200">
        <circle r="100" cx="100" cy="100" fill="#9966ff"/>
        <path d="M122,61v-4a12,12 0,0,0 -12,-12h-4m-17,0h-16m-17,0h-4a12,12 0,0,0 -12,12v4m0,17v16m0,17v4a12,12 0,0,0 12,12h4" stroke="#ffffff" stroke-width="11" stroke-linecap="round" fill="none"/>
        <g fill="#ffffff" stroke="#9966ff" stroke-width="7.5">
          <circle r="32" cx="118" cy="102"/>
          <circle r="32" cx="96" cy="137"/>
          <circle r="32" cx="140" cy="137"/>
        </g>
      </svg>`)}`;
  const cover = 'https://m.ccw.site/user_projects_assets/a1c87d58c534c211fc4adb5b1277a028.svg';
  const extensionId = 'xeltallivclipblend';

  let toCorrectThing = null;
  let active = false;
  let flipY = false;

  let width = 0;
  let height = 0;
  let scratchUnitWidth = 480;
  let scratchUnitHeight = 360;
  let penDirty = false;

  let runtime;
  let renderer;
  let initialized = false;

  const initExt = function (rt) {
    if (initialized) return;
    initialized = true;
    runtime = rt;
    renderer = runtime.renderer;
    const gl = renderer._gl;
    const { canvas } = renderer;

    const { _drawThese } = renderer;
    renderer._drawThese = function (...args) {
      active = true;
      [scratchUnitWidth, scratchUnitHeight] = renderer.getNativeSize();
      _drawThese.apply(this, args);
      gl.disable(gl.SCISSOR_TEST);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      active = false;
    };

    const bfb = gl.bindFramebuffer;
    gl.bindFramebuffer = function (target, framebuffer) {
      if (target === gl.FRAMEBUFFER) {
        // framebuffer == null ||
        if (framebuffer == null || (renderer.fbo && framebuffer === renderer.fbo.framebuffer)) {
          toCorrectThing = true;
          flipY = false;
          width = canvas.width;
          height = canvas.height;
        } else if (renderer._penSkinId) {
          const fbInfo = renderer._allSkins[renderer._penSkinId]._framebuffer;
          if (framebuffer === fbInfo.framebuffer) {
            toCorrectThing = true;
            flipY = true;
            width = fbInfo.width;
            height = fbInfo.height;
          } else {
            toCorrectThing = false;
          }
        } else {
          toCorrectThing = false;
        }
      }
      bfb.call(this, target, framebuffer);
    };

    // Getting Drawable
    const dr = renderer.createDrawable('background');
    const DrawableProto = Object.getPrototypeOf(renderer._allDrawables[dr]);
    renderer.destroyDrawable(dr, 'background');

    // eslint-disable-next-line no-shadow
    function setupModes(clipbox, blendMode, flipY) {
      if (clipbox) {
        gl.enable(gl.SCISSOR_TEST);
        const x = ((clipbox.x_min / scratchUnitWidth + 0.5) * width) | 0;
        let y = ((clipbox.y_min / scratchUnitHeight + 0.5) * height) | 0;
        const x2 = ((clipbox.x_max / scratchUnitWidth + 0.5) * width) | 0;
        const y2 = ((clipbox.y_max / scratchUnitHeight + 0.5) * height) | 0;
        const w = x2 - x;
        const h = y2 - y;
        if (flipY) {
          y = ((-clipbox.y_max / scratchUnitHeight + 0.5) * height) | 0;
        }
        gl.scissor(x, y, w, h);
      } else {
        gl.disable(gl.SCISSOR_TEST);
      }
      switch (blendMode) {
        case 'additive':
          gl.blendEquation(gl.FUNC_ADD);
          gl.blendFunc(gl.ONE, gl.ONE);
          break;
        case 'subtract':
          gl.blendEquation(gl.FUNC_REVERSE_SUBTRACT);
          gl.blendFunc(gl.ONE, gl.ONE);
          break;
        case 'multiply':
          gl.blendEquation(gl.FUNC_ADD);
          gl.blendFunc(gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA);
          break;
        case 'invert':
          gl.blendEquation(gl.FUNC_ADD);
          gl.blendFunc(gl.ONE_MINUS_DST_COLOR, gl.ONE_MINUS_SRC_COLOR);
          break;
        default:
          gl.blendEquation(gl.FUNC_ADD);
          gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      }
    }

    // Modifying and expanding Drawable
    const gu = DrawableProto.getUniforms;
    DrawableProto.getUniforms = function () {
      if (active && toCorrectThing) {
        setupModes(this.clipbox, this.blendMode, flipY);
      }
      return gu.call(this);
    };
    DrawableProto.updateClipBox = function (clipbox) {
      this.clipbox = clipbox;
    };
    DrawableProto.updateBlendMode = function (blendMode) {
      this.blendMode = blendMode;
    };

    // Expanding renderer
    renderer.updateDrawableClipBox = function (drawableID, clipbox) {
      const drawable = this._allDrawables[drawableID];
      if (!drawable) return;
      drawable.updateClipBox(clipbox);
    };
    renderer.updateDrawableBlendMode = function (drawableID, blendMode) {
      const drawable = this._allDrawables[drawableID];
      if (!drawable) return;
      drawable.updateBlendMode(blendMode);
    };

    // Reset on stop & clones inherit effects
    const regTargetStuff = function () {
      const targetProto = Object.getPrototypeOf(runtime.targets[0]);
      const osa = targetProto.onStopAll;
      targetProto.onStopAll = function () {
        this.clipbox = null;
        this.blendMode = null;
        this.renderer.updateDrawableClipBox.call(
          renderer,
          this.drawableID,
          null,
        );
        this.renderer.updateDrawableBlendMode.call(
          renderer,
          this.drawableID,
          null,
        );
        osa.call(this);
      };
      const mc = targetProto.makeClone;
      targetProto.makeClone = function () {
        const newTarget = mc.call(this);
        if (this.clipbox || this.blendMode) {
          newTarget.clipbox = { ...this.clipbox };
          newTarget.blendMode = this.blendMode;
          renderer.updateDrawableClipBox.call(
            renderer,
            newTarget.drawableID,
            this.clipbox,
          );
          renderer.updateDrawableBlendMode.call(
            renderer,
            newTarget.drawableID,
            this.blendMode,
          );
        }
        return newTarget;
      };
    };
    regTargetStuff();

    // Pen lines support
    const emptyObject = {};
    let lastTarget = emptyObject;
    let lastClipbox = {};
    let lastBlendMode = 'default';
    function patchPen(skin) {
      const { ext_pen } = runtime;
      skin._lineOnBufferDrawRegionId.exit = () => {
        skin._exitDrawLineOnBuffer();
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.disable(gl.SCISSOR_TEST);
        lastTarget = emptyObject;
        lastClipbox = null;
        lastBlendMode = 'default';
      };
      const willDrawPenWithTarget = function (target) {
        if (!penDirty && target === lastTarget) return;
        penDirty = false;

        const { clipbox } = target;
        if (
          !lastClipbox ^ !clipbox
            || lastBlendMode !== target.blendMode
            || (clipbox
              && (clipbox.x_min !== lastClipbox.x_min
                || clipbox.y_min !== lastClipbox.y_min
                || clipbox.x_max !== lastClipbox.x_max
                || clipbox.y_max !== lastClipbox.y_max))
        ) {
          if (skin.a_lineColorIndex) {
            skin._flushLines();
          }
          lastTarget = target;
          if (clipbox) {
            lastClipbox = {
              x_min: clipbox.x_min,
              y_min: clipbox.y_min,
              x_max: clipbox.x_max,
              y_max: clipbox.y_max,
            };
          } else {
            lastClipbox = null;
          }
          lastBlendMode = target.blendMode;
        }
      };
        // onTargetMoved function of pen draws a line.
        // When drawing a line it is important to know the target.
        // This saves target.
      const onTargetMoved = ext_pen._onTargetMoved;
      ext_pen._onTargetMoved = function (target, oldX, oldY, isForce) {
        willDrawPenWithTarget(target);
        onTargetMoved.call(this, target, oldX, oldY, isForce);
      };
      // Existing tragets may still have old onTargetMoved
      for (const target in runtime.tragets) {
        if (target.onTargetMoved == onTargetMoved) {
          target.onTargetMoved = ext_pen._onTargetMoved;
        }
      }
      // When drawing a dot it is important to know the target.
      // This saves target.
      const penDown = ext_pen._penDown;
      ext_pen._penDown = function (target) {
        willDrawPenWithTarget(target);
        penDown.call(this, target);
      };
      const skinProto = Object.getPrototypeOf(skin);
      // Set up correct clipping/blending before drawing
      const flushLines = skinProto._flushLines;
      skinProto._flushLines = function () {
        setupModes(lastClipbox, lastBlendMode, true);
        flushLines.call(this);
      };
    }
    if (renderer._allSkins[renderer._penSkinId]) {
      // If pen skin already exists, things can be patched
      patchPen(renderer._allSkins[renderer._penSkinId]);
    } else {
      // If pen skin does not exist, wait until it will,
      // trigger code once, and return everything as it was
      const { createPenSkin } = renderer;
      renderer.createPenSkin = function () {
        const skinId = createPenSkin.call(this);
        patchPen(renderer._allSkins[skinId]);
        renderer.createPenSkin = createPenSkin;
        return skinId;
      };
    }
  };

  class ClippingExtension {
    constructor() {
      this.runtime = Scratch.runtime;      
      const intervalId = setInterval(() => {
        // 重复检查直到有 target 时才初始化
        if (this.runtime.targets.length > 0) {
          clearInterval(intervalId);
          initExt(this.runtime);
        }
      }, 300);

      // ========================================================================== //
      //     l10n
      this.initFormatMessage({
        name: ['裁剪与混合', 'Clipping and Blending'],
        credit: ['✨ 扩展由 TurboWarp 的 Vadik1 制作', '✨ Made by Vadik1 From TurboWarp'],
        // docsURI: [
        //   'https://learn.ccw.site/article/',
        //   'https://getgandi.com/extensions/',
        // ],

        setClipbox: ['设置裁剪框 x1:[X1] y1:[Y1] x2:[X2] y2:[Y2]', 'set clipping box x1:[X1] y1:[Y1] x2:[X2] y2:[Y2]'],
        clearClipbox: ['清除裁剪框', 'clear clipping box'],
        getClipbox: ['裁剪框 [PROP]', 'clipping box [PROP]'],
        setBlend: ['开启 [BLENDMODE] 混合模式', 'use [BLENDMODE] blending'],
        getBlend: ['混合模式', 'blending'],
        setAdditiveBlend: ['叠加混合 [STATE]', 'turn additive blending [STATE]'],
        getAdditiveBlend: ['是否开启叠加混合？', 'is additive blending on?'],

        on: ['开启', 'on'],
        off: ['关闭', 'off'],
        default: ['默认', 'default'],
        additive: ['叠加', 'additive'],
        subtract: ['差值', 'subtract'],
        multiply: ['正片叠底', 'multiply'],
        invert: ['反转', 'invert'],
        width: ['宽度', 'width'],
        height: ['高度', 'height'],
        'min x': ['左 x', 'min x'],
        'min y': ['下 y', 'min y'],
        'max x': ['右 x', 'max x'],
        'max y': ['上 y', 'max y'],

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
        id: extensionId,
        name: this.fm('name'),
        color1: '#9966FF',
        color2: '#855CD6',
        color3: '#774DCB',
        menuIconURI: icon,
        blocks: [
          `---${this.fm('credit')}`,
          {
            opcode: 'setClipbox',
            blockType: Scratch.BlockType.COMMAND,
            text: this.fm('setClipbox'),
            arguments: {
              X1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0',
              },
              Y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0',
              },
              X2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100',
              },
              Y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100',
              },
            },
            filter: [Scratch.TargetType.SPRITE],
            extensions: ['colours_looks'],
          },
          {
            opcode: 'clearClipbox',
            blockType: Scratch.BlockType.COMMAND,
            text: this.fm('clearClipbox'),
            filter: [Scratch.TargetType.SPRITE],
            extensions: ['colours_looks'],
          },
          {
            opcode: 'getClipbox',
            blockType: Scratch.BlockType.REPORTER,
            text: this.fm('getClipbox'),
            arguments: {
              PROP: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'width',
                menu: 'props',
              },
            },
            filter: [Scratch.TargetType.SPRITE],
            extensions: ['colours_looks'],
          },
          '---',
          {
            opcode: 'setBlend',
            blockType: Scratch.BlockType.COMMAND,
            text: this.fm('setBlend'),
            arguments: {
              BLENDMODE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'default',
                menu: 'blends',
              },
            },
            filter: [Scratch.TargetType.SPRITE],
            extensions: ['colours_looks'],
          },
          {
            opcode: 'getBlend',
            blockType: Scratch.BlockType.REPORTER,
            text: this.fm('getBlend'),
            filter: [Scratch.TargetType.SPRITE],
            disableMonitor: true,
            extensions: ['colours_looks'],
          },
          '---',
          {
            opcode: 'setAdditiveBlend',
            blockType: Scratch.BlockType.COMMAND,
            text: this.fm('setAdditiveBlend'),
            arguments: {
              STATE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'on',
                menu: 'states',
              },
            },
            filter: [Scratch.TargetType.SPRITE],
            hideFromPalette: true,
            extensions: ['colours_looks'],
          },
          {
            opcode: 'getAdditiveBlend',
            blockType: Scratch.BlockType.BOOLEAN,
            text: this.fm('getAdditiveBlend'),
            filter: [Scratch.TargetType.SPRITE],
            hideFromPalette: true,
            disableMonitor: true,
            extensions: ['colours_looks'],
          },
        ],
        menus: {
          states: {
            acceptReporters: true,
            items: [
              { text: this.fm('on'), value: 'on' },
              { text: this.fm('off'), value: 'off' },
            ],
          },
          blends: {
            acceptReporters: true,
            items: [
              { text: this.fm('default'), value: 'default' },
              { text: this.fm('additive'), value: 'additive' },
              { text: this.fm('subtract'), value: 'subtract' },
              { text: this.fm('multiply'), value: 'multiply' },
              { text: this.fm('invert'), value: 'invert' },
            ],
          },
          props: {
            acceptReporters: true,
            items: [
              { text: this.fm('width'), value: 'width' },
              { text: this.fm('height'), value: 'height' },
              { text: this.fm('min x'), value: 'min x' },
              { text: this.fm('min y'), value: 'min y' },
              { text: this.fm('max x'), value: 'max x' },
              { text: this.fm('max y'), value: 'max y' },
            ],
          },
        },
      };
    }

    setClipbox({
      X1, Y1, X2, Y2,
    }, { target }) {
      if (target.isStage) return;
      const newClipbox = {
        x_min: Math.min(X1, X2),
        y_min: Math.min(Y1, Y2),
        x_max: Math.max(X1, X2),
        y_max: Math.max(Y1, Y2),
      };
      penDirty = true;
      target.clipbox = newClipbox;
      renderer.updateDrawableClipBox.call(
        renderer,
        target.drawableID,
        newClipbox,
      );
      if (target.visible) {
        renderer.dirty = true;
        target.emitFast('EVENT_TARGET_VISUAL_CHANGE', target);
        target.runtime.requestRedraw();
        target.runtime.requestTargetsUpdate(target);
      }
    }

    clearClipbox(args, { target }) {
      if (target.isStage) return;
      target.clipbox = null;
      penDirty = true;
      renderer.updateDrawableClipBox.call(renderer, target.drawableID, null);
      if (target.visible) {
        renderer.dirty = true;
        target.emitFast('EVENT_TARGET_VISUAL_CHANGE', target);
        target.runtime.requestRedraw();
        target.runtime.requestTargetsUpdate(target);
      }
    }

    getClipbox({ PROP }, { target }) {
      const { clipbox } = target;
      if (!clipbox) return '';
      switch (PROP) {
        case 'width':
          return clipbox.x_max - clipbox.x_min;
        case 'height':
          return clipbox.y_max - clipbox.y_min;
        case 'min x':
          return clipbox.x_min;
        case 'min y':
          return clipbox.y_min;
        case 'max x':
          return clipbox.x_max;
        case 'max y':
          return clipbox.y_max;
        default:
          return '';
      }
    }

    setBlend({ BLENDMODE }, { target }) {
      let newValue = null;
      switch (BLENDMODE) {
        case 'default':
        case 'additive':
        case 'subtract':
        case 'multiply':
        case 'invert':
          newValue = BLENDMODE;
          break;
        default:
          return;
      }
      if (target.isStage) return;
      penDirty = true;
      target.blendMode = newValue;
      renderer.updateDrawableBlendMode.call(
        renderer,
        target.drawableID,
        newValue,
      );
      if (target.visible) {
        renderer.dirty = true;
        target.emitFast('EVENT_TARGET_VISUAL_CHANGE', target);
        target.runtime.requestRedraw();
        target.runtime.requestTargetsUpdate(target);
      }
    }

    getBlend(args, { target }) {
      return target.blendMode ?? 'default';
    }

    setAdditiveBlend({ STATE }, util) {
      if (STATE === 'on') this.setBlend({ BLENDMODE: 'additive' }, util);
      if (STATE === 'off') this.setBlend({ BLENDMODE: 'default' }, util);
    }

    getAdditiveBlend(args, { target }) {
      return target.blendMode === 'additive';
    }
  }

  // Scratch.extensions.register(new Extension());
  window.tempExt = {
    Extension: ClippingExtension,
    info: {
      name: `${extensionId}.extensionName`,
      description: `${extensionId}.description`,
      extensionId,
      iconURL: cover,
      insetIconURL: icon,
      featured: true,
      disabled: false,
      // docsURI: 'https://learn.ccw.site/article/?',
      collaborator: 'Vadik1 @ TurboWarp',
      collaboratorList: [
        {
          collaborator: 'Vadik1@TW',
          collaboratorURL:
          'https://scratch.mit.edu/users/Vadik1/',
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
        [`${extensionId}.extensionName`]: '裁剪与混合',
        [`${extensionId}.description`]: '为角色设置矩形裁剪区域，以及设置混合模式。',
      },
      en: {
        [`${extensionId}.extensionName`]: 'Clipping & Blending',
        [`${extensionId}.description`]: 'Clipping outside of a specified rectangular area and different color blending modes.',
      },
    },
  };
}(window.Scratch));
