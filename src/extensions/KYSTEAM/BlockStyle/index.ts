import { GandiExtension, BlockUtil, ArgumentType } from '@cocrea/extension-kit';
import { IExtensionMenuItem } from '@cocrea/extension-kit/types/types/block';
import { extensionId, extensionNS } from './extInfo';
import zhCn from './l10n/zh-cn.json';
import en from './l10n/en.json';

import cover from './assets/cover.png';
import blockIcon from './assets/icon.png';

interface ICatMenuObj {
  /** 适配 l10n 老配置逐渐下线 */
  text?: string;
  value: string;
  type: string;
  /** 处理 cocrea 使用的情况 */
  // 也有部分老配置
  l10n?: {
    'zh-cn': string;
    en: string;
  };
}

interface ICatObj {
  md5: string;
  /** 不传参用默认配色 */
  ear?: string;
  face?: string;
  md51?: string;
  md52?: string;
  use_asset_v2?: boolean;
  isCustom?: boolean;
}

interface IOnlineConfigObj {
  cdnHost: string;
}

/**
 * @description: 函数节流
 * @param {Function} func 传入的函数
 * @param {number} wait 时间单位
 * @return {*}
 */
const throttle = (func: Function, wait: number): Function => {
  let timeout;
  let context;
  let args;
  let previous = 0;

  let later = function () {
    previous = +new Date();
    timeout = null;
    func.apply(context, args);
  };

  let throttled = function () {
    let now = +new Date();
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else if (!timeout) {
      timeout = setTimeout(later, remaining);
    }
  };
  return throttled;
};

export default class BlockStyle extends GandiExtension {
  runtime: any;
  ccwAPI: any;
  scratchBlocks: any;
  onlineConfig: IOnlineConfigObj;
  isEyeTracking: boolean;
  extConfigHost: string;
  env: string;
  catInfos: { [key: string]: ICatObj };
  menuList: Array<ICatMenuObj>;
  tagInfos: { [key: string]: string };
  dynamicMenu: IExtensionMenuItem[];
  catEyeTrackingBtn: ReturnType<typeof BlockUtil.createButton>;

  currentCatName?: string;
  customCatURI?: string;
  currentCatInfo?: ICatObj;
  userGandiConfig: any;
  isCocrea: boolean;

  constructor(runtime: { ccwAPI: any; scratchBlocks: any }) {
    super(runtime);
    this.runtime = runtime;
    this.ccwAPI = runtime.ccwAPI;
    this.runtime.on;
    this.scratchBlocks = runtime.scratchBlocks;
    this.onlineConfig = {
      cdnHost: 'https://m.ccw.site',
    };
    this.isEyeTracking = false;
    this.extConfigHost = DEPLOY_ENV !== 'dev'
      ? this.onlineConfig.cdnHost + '/gandi/extension/block_style_assets'
      : 'https://yuensite.f3322.net:7001';
    this.tagInfos = {};
    this.catInfos = {};
    this.menuList = [];
    this.isCocrea =
      this.runtime.ccwAPI
        .getOnlineExtensionsConfig()
        .fileSrc.indexOf('cocrea') > -1;
    this.initConfig(this.extConfigHost);
  }

  get extensionId(): string {
    return extensionId;
  }

  get localization() {
    return {
      'zh-cn': zhCn,
      en,
    };
  }

  get documentURL(): string {
    return '';
  }

  get menuIconURI(): string {
    return blockIcon;
  }

  get blockIconURI(): string {
    return blockIcon;
  }

  get coverURI(): string {
    return cover;
  }

  get authorInfo() {
    return {
      labelName: 'KYSTEAM',
      username: 'KYSTEAM',
      homepage: 'https://www.ccw.site/student/203910367',
      email: 'en5991@outlook.com',
    };
  }

  get blockPrefix(): string {
    return '';
  }

  get deprecatedBlocksByOpcodes(): string[] {
    return [];
  }

  async getJSON(url: string | URL) {
    // 自动化 l10n 在 node 环境中不支持 fetch
    // 所以 catch 一下
    try {
      const response = await fetch(url);
      if (response.status !== 200) {
        return null;
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      return null;
    }
  }

  initConfig(extConfigHost) {
    const catInfos = this.getJSON(extConfigHost + '/config/cat-config.json');
    const tagInfos = this.getJSON(extConfigHost + '/config/tag-config.json');
    const menuInfos = this.getJSON(extConfigHost + '/config/menu-config.json');
    const getUserInfo = this.ccwAPI.getUserInfo();

    Promise.all([catInfos, tagInfos, menuInfos, getUserInfo]).then(
      async (res) => {
        this.catInfos = res[0] || {};
        this.tagInfos = res[1] || {};
        this.menuList = res[2] || [];
        this.userGandiConfig = await this.getJSON(
          this.isCocrea
            ? 'https://prod-hub-international.s3-accelerate.amazonaws.com'
            : this.onlineConfig.cdnHost +
                '/gandi/use_config/' +
                res[3][this.isCocrea ? 'userId' : 'uuid'] +
                '.json'
        );
      }
    );
  }

  refreshWorkspace() {
    if (!this.currentCatInfo) return;
    const shouldWatchMouseCursor = this.isEyeTracking;
    const catInfo = this.currentCatInfo;

    const scratchBlocks = this.scratchBlocks;
    // Hat Block HEIGHT
    scratchBlocks.BlockSvg.START_HAT_HEIGHT = 31;
    // Hat Block SVG PATH
    scratchBlocks.BlockSvg.START_HAT_PATH =
      'c2.6,-2.3 5.5,-4.3 8.5,-6.2' +
      'c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4' +
      'c8.4,-1.3 17,-1.3 25.4,0c1.9,-2.3 14.7,-17.2 18.4,-15.4' +
      'c3.1,1.5 9.4,12.3 8.4,24.8c3,1.8 5.9,3.9 8.5,6.1';
    // Hat Block SVG LEFT TOP SVG PATH
    scratchBlocks.BlockSvg.TOP_LEFT_CORNER_DEFINE_HAT =
      'c0,-7.1 3.7,-13.3 9.3,-16.9c1.7,-7.5 5.4,-13.2 7.6,-14.2' +
      'c2.6,-1.3 10,6 14.6,11.1h33c4.6,-5.1 11.9,-12.4 14.6,-11.1' +
      'c1.9,0.9 4.9,5.2 6.8,11.1c2.6,0,5.2,0,7.8,0';

    scratchBlocks.BlockSvg.prototype.renderCatFace_ = function () {
      this.catPath_.svgFace.setAttribute('fill', catInfo.face);

      /** 闭眼-左眼 */
      const closedEye = scratchBlocks.utils.createSvgElement(
        'path',
        {},
        this.svgFace_
      );
      closedEye.setAttribute(
        'd',
        'M25.2-1.1c0.1,0,0.2,0,0.2,0l8.3-2.1l-7-4.8' +
          'c-0.5-0.3-1.1-0.2-1.4,0.3s-0.2,1.1,0.3,1.4L29-4.1l-4,1' +
          'c-0.5,0.1-0.9,0.7-0.7,1.2C24.3-1.4,24.7-1.1,25.2-1.1z'
      );
      closedEye.setAttribute('fill-opacity', '0');
      this.catPath_.svgFace.closedEye = closedEye;

      /** 闭眼-右眼 */
      const closedEye2 = scratchBlocks.utils.createSvgElement(
        'path',
        {},
        this.svgFace_
      );
      closedEye2.setAttribute(
        'd',
        'M62.4-1.1c-0.1,0-0.2,0-0.2,0l-8.3-2.1l7-4.8' +
          'c0.5-0.3,1.1-0.2,1.4,0.3s0.2,1.1-0.3,1.4l-3.4,2.3l4,1' +
          'c0.5,0.1,0.9,0.7,0.7,1.2C63.2-1.4,62.8-1.1,62.4-1.1z'
      );
      closedEye2.setAttribute('fill-opacity', '0');
      this.catPath_.svgFace.closedEye2 = closedEye2;

      /** 睁眼-左眼 */
      const eye = scratchBlocks.utils.createSvgElement(
        'circle',
        {},
        this.svgFace_
      );
      eye.setAttribute('cx', '59.2');
      eye.setAttribute('cy', '-3.3');
      eye.setAttribute('r', '3.4');
      eye.setAttribute('fill-opacity', '0.6');
      this.catPath_.svgFace.eye = eye;

      /** 睁眼-右眼 */
      const eye2 = scratchBlocks.utils.createSvgElement(
        'circle',
        {},
        this.svgFace_
      );
      eye2.setAttribute('cx', '29.1');
      eye2.setAttribute('cy', '-3.3');
      eye2.setAttribute('r', '3.4');
      eye2.setAttribute('fill-opacity', '0.6');
      this.catPath_.svgFace.eye2 = eye2;

      /** 嘴巴 */
      const mouth = scratchBlocks.utils.createSvgElement(
        'path',
        {},
        this.svgFace_
      );
      mouth.setAttribute(
        'd',
        'M45.6,0.1c-0.9,0-1.7-0.3-2.3-0.9' +
          'c-0.6,0.6-1.3,0.9-2.2,0.9c-0.9,0-1.8-0.3-2.3-0.9c-1-1.1-1.1-2.6-1.1-2.8' +
          'c0-0.5,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1c0,0.4,0.1,1.7,1.4,1.7' +
          'c0.5,0,0.7-0.2,0.8-0.3c0.3-0.3,0.4-1,0.4-1.3c0-0.1,0-0.1,0-0.2' +
          'c0-0.5,0.5-1,1-1l0,0c0.5,0,1,0.4,1,1c0,0,0,0.1,0,0.2' +
          'c0,0.3,0.1,0.9,0.4,1.2C44.8-2.2,45-2,45.5-2s0.7-0.2,0.8-0.3' +
          'c0.3-0.4,0.4-1.1,0.3-1.3c0-0.5,0.4-1,0.9-1.1c0.5,0,1,0.4,1.1,0.9' +
          'c0,0.2,0.1,1.8-0.8,2.8C47.5-0.4,46.8,0.1,45.6,0.1z'
      );
      mouth.setAttribute('fill-opacity', '0.6');

      /** 耳朵 */

      this.catPath_.ear.setAttribute(
        'd',
        'M73.1-15.6c1.7-4.2,4.5-9.1,5.8-8.5' +
          'c1.6,0.8,5.4,7.9,5,15.4c0,0.6-0.7,0.7-1.1,0.5c-3-1.6-6.4-2.8-8.6-3.6' +
          'C72.8-12.3,72.4-13.7,73.1-15.6z'
      );
      this.catPath_.ear.setAttribute('fill', catInfo.ear);

      this.catPath_.ear2.setAttribute(
        'd',
        'M22.4-15.6c-1.7-4.2-4.5-9.1-5.8-8.5' +
          'c-1.6,0.8-5.4,7.9-5,15.4c0,0.6,0.7,0.7,1.1,0.5c3-1.6,6.4-2.8,8.6-3.6' +
          'C22.8-12.3,23.2-13.7,22.4-15.6z'
      );
      this.catPath_.ear2.setAttribute('fill', catInfo.ear);
    };

    scratchBlocks.BlockSvg.prototype.initCatStuff = function () {
      // 只需要初始化一次
      if (this.hasInitCatStuff) return;
      this.hasInitCatStuff = true;
      // Ear start
      // left
      const LEFT_EAR_UP =
        'c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4';
      const LEFT_EAR_DOWN =
        'c-5.8,-4.8 -8,-18 -4.9,-19.5c3.7,-1.8 24.5,11.1 31.7,10.1';
      // right
      const RIGHT_EAR_UP =
        'c1.9,-2.3 14.7,-17.2 18.4,-15.4c3.1,1.5 9.4,12.3 8.4,24.8';
      const RIGHT_EAR_DOWN =
        'c7.2,1 28,-11.9 31.7,-10.1c3.1,1.5 0.9,14.7 -4.9,19.5';
      // Ear end
      // onClick Ear
      // left
      const DEFINE_HAT_LEFT_EAR_UP =
        'c0,-7.1 3.7,-13.3 9.3,-16.9c1.7,-7.5 5.4,-13.2 7.6,-14.2c2.6,-1.3 10,6 14.6,11.1';
      // right
      const DEFINE_HAT_RIGHT_EAR_UP =
        'h33c4.6,-5.1 11.9,-12.4 14.6,-11.1c1.9,0.9 4.9,5.2 6.8,11.1c2.6,0,5.2,0,7.8,0';
      // left down
      const DEFINE_HAT_LEFT_EAR_DOWN =
        'c0,-4.6 1.6,-8.9 4.3,-12.3c-2.4,-5.6 -2.9,-12.4 -0.7,-13.4c2.1,-1 9.6,2.6 17,5.8' +
        'c2.6,0 6.2,0 10.9,0';
      // right down
      const DEFINE_HAT_RIGHT_EAR_DOWN =
        'c0,0 25.6,0 44,0c7.4,-3.2 14.8,-6.8 16.9,-5.8c1.2,0.6 1.6,2.9 1.3,5.8';
      const that = this;
      this.catPath_.ear = scratchBlocks.utils.createSvgElement(
        'path',
        {},
        this.catPath_
      );
      this.catPath_.ear2 = scratchBlocks.utils.createSvgElement(
        'path',
        {},
        this.catPath_
      );

      if (this.RTL) {
        // Mirror the ears.
        this.catPath_.ear.setAttribute('transform', 'scale(-1 1)');
        this.catPath_.ear2.setAttribute('transform', 'scale(-1 1)');
      }
      this.catPath_.addEventListener(
        'mouseenter',
        function (event: {
          target: {
            svgFace: {
              eye: { setAttribute: (arg0: string, arg1: string) => void };
              eye2: { setAttribute: (arg0: string, arg1: string) => void };
              closedEye: {
                setAttribute: (arg0: string, arg1: string) => void;
              };
              closedEye2: {
                setAttribute: (arg0: string, arg1: string) => void;
              };
            };
          };
        }) {
          clearTimeout(that.blinkFn);
          // blink
          if (event.target.svgFace.eye) {
            event.target.svgFace.eye.setAttribute('fill-opacity', '0');
            event.target.svgFace.eye2.setAttribute('fill-opacity', '0');
            event.target.svgFace.closedEye.setAttribute('fill-opacity', '0.6');
            event.target.svgFace.closedEye2.setAttribute('fill-opacity', '0.6');
          }

          // reset after a short delay
          that.blinkFn = setTimeout(function () {
            if (event.target.svgFace.eye) {
              event.target.svgFace.eye.setAttribute('fill-opacity', '0.6');
              event.target.svgFace.eye2.setAttribute('fill-opacity', '0.6');
              event.target.svgFace.closedEye.setAttribute('fill-opacity', '0');
              event.target.svgFace.closedEye2.setAttribute('fill-opacity', '0');
            }
          }, 100);
        }
      );

      if (catInfo.use_asset_v2) {
        this.catAeestDom2 = scratchBlocks.utils.createSvgElement(
          'image',
          {},
          this.catAeest2
        );

        this.catAeestDom2.setAttribute('href', catInfo.md52);
        this.catAeestDom2.setAttribute('x', '-1');
        this.catAeestDom2.setAttribute('y', '-33');

        this.catAeestDom1 = scratchBlocks.utils.createSvgElement(
          'image',
          {},
          this.catAeest1
        );

        this.catAeestDom1.setAttribute('href', catInfo.md51);
        this.catAeestDom1.setAttribute('x', '-1');
        this.catAeestDom1.setAttribute('y', '-33');
      } else {
        this.catAeestDom1 = scratchBlocks.utils.createSvgElement(
          'image',
          {},
          this.catAeest1
        );

        this.catAeestDom1.setAttribute('href', catInfo.md5);
        if (catInfo.isCustom) {
          this.catAeestDom1.setAttribute('x', '95');
          this.catAeestDom1.setAttribute('y', '-25');
          this.catAeestDom1.style.height = '19px';
          // this.catAeestDom1.style.width = '100px';
          // this.catAeestDom1.style.objectFit = 'cover';
        } else {
          this.catAeestDom1.setAttribute('x', '-1');
          this.catAeestDom1.setAttribute('y', '-33');
        }
      }

      this.catPath_.ear.addEventListener('mouseenter', function () {
        clearTimeout(that.earFn);
        clearTimeout(that.ear2Fn);
        // ear flick
        that.catPath_.ear.setAttribute('fill-opacity', '0');
        that.catPath_.ear2.setAttribute('fill-opacity', '');
        let bodyPath = that.catPath_.svgBody.getAttribute('d');
        bodyPath = bodyPath.replace(RIGHT_EAR_UP, RIGHT_EAR_DOWN);
        bodyPath = bodyPath.replace(
          DEFINE_HAT_RIGHT_EAR_UP,
          DEFINE_HAT_RIGHT_EAR_DOWN
        );
        bodyPath = bodyPath.replace(LEFT_EAR_DOWN, LEFT_EAR_UP);
        bodyPath = bodyPath.replace(
          DEFINE_HAT_LEFT_EAR_DOWN,
          DEFINE_HAT_LEFT_EAR_UP
        );
        that.catPath_.svgBody.setAttribute('d', bodyPath);

        // reset after a short delay
        that.earFn = setTimeout(function () {
          that.catPath_.ear.setAttribute('fill-opacity', '');
          let bodyPath = that.catPath_.svgBody.getAttribute('d');
          bodyPath = bodyPath.replace(RIGHT_EAR_DOWN, RIGHT_EAR_UP);
          bodyPath = bodyPath.replace(
            DEFINE_HAT_RIGHT_EAR_DOWN,
            DEFINE_HAT_RIGHT_EAR_UP
          );
          that.catPath_.svgBody.setAttribute('d', bodyPath);
        }, 50);
      });
      this.catPath_.ear2.addEventListener('mouseenter', function () {
        clearTimeout(that.earFn);
        clearTimeout(that.ear2Fn);
        // ear flick
        that.catPath_.ear2.setAttribute('fill-opacity', '0');
        that.catPath_.ear.setAttribute('fill-opacity', '');
        let bodyPath = that.catPath_.svgBody.getAttribute('d');
        bodyPath = bodyPath.replace(LEFT_EAR_UP, LEFT_EAR_DOWN);
        bodyPath = bodyPath.replace(
          DEFINE_HAT_LEFT_EAR_UP,
          DEFINE_HAT_LEFT_EAR_DOWN
        );
        bodyPath = bodyPath.replace(RIGHT_EAR_DOWN, RIGHT_EAR_UP);
        bodyPath = bodyPath.replace(
          DEFINE_HAT_RIGHT_EAR_DOWN,
          DEFINE_HAT_RIGHT_EAR_UP
        );
        that.catPath_.svgBody.setAttribute('d', bodyPath);

        // reset after a short delay
        that.ear2Fn = setTimeout(function () {
          that.catPath_.ear2.setAttribute('fill-opacity', '');
          let bodyPath = that.catPath_.svgBody.getAttribute('d');
          bodyPath = bodyPath.replace(LEFT_EAR_DOWN, LEFT_EAR_UP);
          bodyPath = bodyPath.replace(
            DEFINE_HAT_LEFT_EAR_DOWN,
            DEFINE_HAT_LEFT_EAR_UP
          );
          that.catPath_.svgBody.setAttribute('d', bodyPath);
        }, 50);
      });
      if (this.RTL) {
        // Set to the correct initial position
        this.svgFace_.style.transform = 'translate(-87px, 0px)';
      }
      if (this.shouldWatchMouse()) {
        this.windowListener = function (event: { x: number; y: number }) {
          const time = Date.now();
          if (time < that.lastCallTime + that.CALL_FREQUENCY_MS) return;
          that.lastCallTime = time;
          if (!that.shouldWatchMouse()) return;

          // mouse watching
          if (that.workspace) {
            // not disposed
            const xy = that.getCatFacePosition();
            const mouseLocation = {
              x: event.x / that.workspace.scale,
              y: event.y / that.workspace.scale,
            };
            let dx = mouseLocation.x - xy.x;
            let dy = mouseLocation.y - xy.y;
            const theta = Math.atan2(dx, dy);

            // Map the vector from the cat face to the mouse location to a much shorter
            // vector in the same direction, which will be the translation vector for
            // the cat face
            const delta = Math.sqrt(dx * dx + dy * dy);
            const scaleFactor = delta / (delta + 1);

            // Equation for radius of ellipse at theta for axes with length a and b
            const a = 2;
            const b = 5;
            const r =
              (a * b) /
              Math.sqrt(
                Math.pow(b * Math.cos(theta), 2) +
                  Math.pow(a * Math.sin(theta), 2)
              );

            // Convert polar coordinate back to x, y coordinate
            dx = r * scaleFactor * Math.sin(theta);
            dy = r * scaleFactor * Math.cos(theta);

            if (that.RTL) dx -= 87; // Translate face over
            that.svgFace_.style.transform =
              'translate(' + dx + 'px, ' + dy + 'px)';
          }
        };
        document.addEventListener('mousemove', this.windowListener);
      }
    };

    let workspacePositionRect = null;
    scratchBlocks.BlockSvg.prototype.getCatFacePosition = function () {
      // getBoundingClientRect is not performant
      //const offset = that.workspace.getParentSvg().getBoundingClientRect();
      if (!workspacePositionRect) {
        workspacePositionRect = this.workspace
          .getParentSvg()
          .getBoundingClientRect();
      }
      const offset = {
        x: workspacePositionRect.x,
        y: workspacePositionRect.y,
      };

      if (!this.isInFlyout && this.workspace.getFlyout()) {
        offset.x += this.workspace.getFlyout().getWidth();
      }

      offset.x += this.workspace.scrollX;
      offset.y += this.workspace.scrollY;

      const xy = this.getRelativeToSurfaceXY(this.svgGroup_);
      if (this.RTL) {
        xy.x = this.workspace.getWidth() - xy.x - this.width;
      }
      // convert to workspace units
      xy.x += offset.x / this.workspace.scale;
      xy.y += offset.y / this.workspace.scale;
      // distance to center of face
      xy.x -= 43.5;
      xy.y -= 4;
      // flyout category offset
      xy.x += 60;
      if (this.RTL) {
        // We've been calculating from the right edge. Convert x to from left edge.
        xy.x = screen.width - xy.x;
      }
      return xy;
    };

    scratchBlocks.BlockSvg.prototype.shouldWatchMouse = function () {
      if (!shouldWatchMouseCursor) return false;
      // if (window.vmLoadHigh || !window.CAT_CHASE_MOUSE) return false;
      const xy = this.getCatFacePosition();
      const MARGIN = 50;
      const blockXOnScreen =
        xy.x > -MARGIN && xy.x - MARGIN < screen.width / this.workspace.scale;
      const blockYOnScreen =
        xy.y > -MARGIN && xy.y - MARGIN < screen.height / this.workspace.scale;
      return (
        this.startHat_ &&
        !this.isGlowingStack_ &&
        blockXOnScreen &&
        blockYOnScreen
      );
    };

    const originalRenderDraw = scratchBlocks.BlockSvg.prototype.renderDraw_;
    scratchBlocks.BlockSvg.prototype.renderDraw_ = function (...args: any) {
      if (!this.svgFace_) {
        this.sa_catBlockConstructor();
      }
      const r = originalRenderDraw.call(this, ...args);
      if (!this.outputConnection && !this.previousConnection) {
        this.initCatStuff();
      }
      if (this.startHat_ && !this.svgFace_.firstChild) {
        this.renderCatFace_();
      }
      return r;
    };

    const originalDispose = scratchBlocks.BlockSvg.prototype.dispose;
    scratchBlocks.BlockSvg.prototype.dispose = function (...args: any) {
      clearTimeout(this.blinkFn);
      clearTimeout(this.earFn);
      clearTimeout(this.ear2Fn);
      if (this.windowListener) {
        document.removeEventListener('mousemove', this.windowListener);
      }
      return originalDispose.call(this, ...args);
    };

    const originalSetGlowStack = scratchBlocks.BlockSvg.prototype.setGlowStack;
    scratchBlocks.BlockSvg.prototype.setGlowStack = function (
      isGlowingStack: boolean
    ) {
      if (this.windowListener) {
        if (isGlowingStack) {
          // For performance, don't follow the mouse when the stack is glowing
          document.removeEventListener('mousemove', this.windowListener);
          if (this.workspace && this.svgFace_.style) {
            // reset face direction
            if (this.RTL) {
              this.svgFace_.style.transform = 'translate(-87px, 0px)';
            } else {
              this.svgFace_.style.transform = '';
            }
          }
        } else {
          document.addEventListener('mousemove', this.windowListener);
        }
      }
      return originalSetGlowStack.call(this, isGlowingStack);
    };

    scratchBlocks.BlockSvg.prototype.sa_catBlockConstructor = function () {
      // 分层资源

      // let cat_ = {
      //   svgPath_: {},
      //   catAsset1: null,
      //   catPath_: {
      //     svgFace: {},
      //     svgBody: {},
      //   },
      //   catAsset2: null,
      // };
      this.cat_ = scratchBlocks.utils.createSvgElement('g', {}, this.svgGroup_);
      // HACK 针对启用v2的猫猫要特判一下
      if (catInfo.use_asset_v2) {
        this.catAeest2 = scratchBlocks.utils.createSvgElement(
          'g',
          {},
          this.cat_
        );
        this.catPath_ = scratchBlocks.utils.createSvgElement(
          'g',
          {},
          this.cat_
        );
        this.catAeest1 = scratchBlocks.utils.createSvgElement(
          'g',
          {},
          this.cat_
        );
      } else {
        this.catAeest1 = scratchBlocks.utils.createSvgElement(
          'g',
          {},
          this.cat_
        );
        this.catPath_ = scratchBlocks.utils.createSvgElement(
          'g',
          {},
          this.cat_
        );
      }
      this.svgFace_ = scratchBlocks.utils.createSvgElement(
        'g',
        {},
        this.catPath_
      );

      this.catPath_.svgFace = this.svgFace_;
      this.catPath_.svgBody = this.svgPath_;
      this.lastCallTime = 0;
      this.CALL_FREQUENCY_MS = 60;
    };
    const workspace = this.scratchBlocks.getMainWorkspace();
    if (workspace) {
      if (this.runtime._editingTarget) {
        this.runtime._events.BLOCKS_NEED_UPDATE();
      }
      const flyout = workspace.getFlyout();
      if (flyout) {
        const flyoutWorkspace = flyout.getWorkspace();
        this.scratchBlocks.Xml.clearWorkspaceAndLoadFromXml(
          this.scratchBlocks.Xml.workspaceToDom(flyoutWorkspace),
          flyoutWorkspace
        );
        workspace.getToolbox().refreshSelection();
        workspace.toolboxRefreshEnabled_ = true;
      }
    }
    return;
  }

  refreshConfigBlock() {
    this.initConfig(this.extConfigHost);
  }

  // Cute cat info

  getCatInfoByName(name: string | number) {
    const getUrlByMd5 = (md5: any) => {
      const URI = this.extConfigHost + '/assetV2';
      const suffix = 'svg';
      return `${URI}/${md5}.${suffix}`;
    };

    // 兜底的数据 防止因为检索不到md5导致报错
    const assetDefault: ICatObj = {
      face: '#00000099',
      ear: '#ffd5e6',
      md5: '',
    };

    if (!this.catInfos[name]) {
      this.runtime.logSystem.warn(
        `[${extensionId}] 菜单中的猫头 ${name} 没有配置文件！！！`
      );
      return assetDefault;
    }

    // 如果没有耳朵和脸的颜色 就用默认配色
    const _data = { ...assetDefault, ...this.catInfos[name] };
    // 污染拿到的数据 注入转为url的md5
    _data.md51 = _data.use_asset_v2 ? getUrlByMd5(_data.md5 + '_2') : null;
    _data.md52 = _data.use_asset_v2 ? getUrlByMd5(_data.md5 + '_1') : null;
    _data.md5 = getUrlByMd5(_data.md5);
    const searchData = _data || assetDefault;
    return searchData;
  }

  buildCatMenu() {
    /** 拼接作者数据 */
    const catMenuList = [{ text: 'scratch-cat', value: 'scratch-default' }];
    this.menuList.forEach((sub, i) => {
      let tag: string | any = this.tagInfos[sub.type] ?? sub.type;
      let text = sub.text;
      if (sub.l10n) {
        const language = this.userGandiConfig?.common?.common?.language || 'en';
        text = sub.l10n[language];
        tag = typeof tag !== 'string' ? tag[language] : tag;
      }
      catMenuList.push({
        text: `☁ [${tag}] ${text}`,
        value: sub.value,
      });
    });
    return catMenuList;
  }

  // init blocks
  init() {
    // create menus
    const SwitchMenu = BlockUtil.createMenu(
      'SwitchMenu',
      [
        { text: 'Switch.OFF', value: 'false' },
        { text: 'Switch.ON', value: 'true' },
      ],
      false
    );

    const styleMenu = BlockUtil.createDynamicMenu(
      'styleMenu',
      'styleMenu',
      true
    );

    const Style = BlockUtil.createArgument(ArgumentType.STRING, '', styleMenu);
    const URI = BlockUtil.createArgument(ArgumentType.STRING, 'Args.URI');

    // 下个版本上
    /**
     * const paddingSize = BlockUtil.createArgument(ArgumentType.NUMBER, 100);
     * const cornerSize = BlockUtil.createArgument(ArgumentType.NUMBER, 100);
     * const notchSize = BlockUtil.createArgument(ArgumentType.NUMBER, 100);
     */

    // create blocks

    const setOfficialCat = BlockUtil.createCommand(
      'setCurrentStyle',
      'Block.OfficialCat'
    );
    setOfficialCat.setArguments({ Style });

    const setCustomCat = BlockUtil.createCommand(
      'setCustomCatBlock',
      'Block.CustomCat'
    );
    setCustomCat.setArguments({ URI });

    const CloseAllCat = BlockUtil.createButton(
      'Block.CloseAllCat',
      this.closeAllCatBlock.bind(this)
    );

    const refreshConfigBlock = BlockUtil.createButton(
      `Block.refreshConfig`,
      this.refreshConfigBlock.bind(this)
    );

    this.catEyeTrackingBtn = BlockUtil.createButton(
      `Block.UseMouseCursor.${this.isEyeTracking === true ? 'ON' : 'OFF'}`,
      this.setCatEyeTracking.bind(this)
    );
    this.addTextLabel('Label.Set');
    this.addBlock(setOfficialCat);
    this.addBlock(setCustomCat);
    this.addTextLabel('Label.Tool');
    this.addBlock(refreshConfigBlock);
    this.addBlock(CloseAllCat);
    this.addBlock(this.catEyeTrackingBtn);
  }

  // block function
  closeAllCatBlock() {
    const result = confirm(
      `[${extensionId}] ${
        this.userGandiConfig?.common?.common?.language === 'en'
          ? 'Closing the cute cat requires refreshing the page, do you agree?'
          : '关闭可爱的猫需要刷新页面，你同意吗？'
      }`
    );
    if (result) {
      // TODO 可以将 svgPath_ 还原
      window.location.href = window.location.href;
    } else {
      this.runtime.logSystem.warn(
        `[${extensionId}] ${
          this.userGandiConfig?.common?.common?.language === 'en'
            ? 'The user canceled close all cat'
            : '用户取消了关闭猫头'
        }`
      );
    }
  }

  /** 猫眼是否跟踪鼠标 */
  setCatEyeTracking() {
    this.isEyeTracking = !this.isEyeTracking;
    this.catEyeTrackingBtn.setText(
      `Block.UseMouseCursor.${this.isEyeTracking === true ? 'ON' : 'OFF'}`
    );
    this.refreshWorkspace();
    this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
  }

  setCurrentStyle(args, util: { thread: { blockGlowInFrame: Function } }) {
    if (this.runtime.isPlayerOnly && this.currentCatName !== args.Style) {
      // editor only
      return false;
    }
    this.currentCatInfo = this.getCatInfoByName(args.Style);
    this.currentCatName = args.Style;
    setTimeout(() => {
      // 延迟 1s，让积木高亮完毕
      this.runtime.glowBlock(util.thread.blockGlowInFrame, false);
      throttle(() => {
        this.refreshWorkspace();
      },2000)();
    }, 1000);

    return !!this.currentCatName;
  }

  setCustomCatBlock(args, util: any) {
    if (this.runtime.isPlayerOnly && this.customCatURI !== args.URI) {
      return false;
    }
    this.customCatURI = args.URI;
    this.currentCatInfo = {
      md5: this.customCatURI,
      face: '#00000099',
      ear: '#ffd5e6',
      isCustom: true,
    };
    setTimeout(() => {
      this.runtime.glowBlock(util.thread.blockGlowInFrame, false);
      throttle(() => {
        this.refreshWorkspace();
      },2000)();
    }, 1000);
    return true;
  }

  styleMenu(): IExtensionMenuItem[] {
    return this.buildCatMenu();
  }
}
