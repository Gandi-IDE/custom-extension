import { GandiExtension, BlockUtil, ArgumentType } from '@cocrea/extension-kit';
import { extensionId } from './extInfo';
import zhCn from './l10n/zh-cn.json';
import en from './l10n/en.json';

import cover from './assets/cover.png';
import blockIcon from './assets/icon.png';

interface IMenu {
  text: string;
  value: string;
  type: string;
}

export default class BlockStyle extends GandiExtension {
  runtime: any;
  ccwAPI: any;
  Blockly: any;
  onlineConfig: any;
  useMouseCursor: boolean;
  constructor(runtime: { ccwAPI: any; scratchBlocks: any }) {
    super(runtime);
    this.runtime = runtime;
    this.ccwAPI = runtime.ccwAPI;
    this.Blockly = runtime.scratchBlocks;
    this.onlineConfig = {};
    this.onlineConfig.cdnHost = '//m.ccw.site';
    this.useMouseCursor = false;
  }

  get extensionId(): string {
    return extensionId;
  }

  get localization() {
    return {
      'zh-cn': zhCn,
      en: en,
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
      labelName: 'kukemc@KYSTEAM',
      username: 'kukemc@KYSTEAM',
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

  PermissionVerification() {
    if (localStorage.getItem('KYSTEAM_BlockStyle_NotNewUser') == 'true') {
      return;
    } else {
      const bool = confirm(
        '欢迎使用积木样式\n首次使用需要确认是否从网络上获取积木样式资源包\n如果点击取消只能使用本地资源包\n请问是否同意'
      );
      localStorage.setItem('KYSTEAM_BlockStyle_NotNewUser', 'true');
      localStorage.setItem(
        'KYSTEAM_BlockStyle_PermissionVerification',
        String(bool)
      );
      return;
    }
  }
  init() {
    this.PermissionVerification();
    // create menus
    /**
     * @HACK 按需使用Switch
     */
    const SwitchMenu = BlockUtil.createMenu(
      'SwitchMenu',
      [
        { text: 'Switch.OFF', value: 'false' },
        { text: 'Switch.ON', value: 'true' },
      ],
      false
    );

    const StyleMenu = BlockUtil.createDynamicMenu(
      'StyleMenu',
      'StyleMenu',
      true
    );

    // create arguments
    /**
     * @TODO
     */
    const MouseCursor = BlockUtil.createArgument(
      ArgumentType.STRING,
      '',
      SwitchMenu
    );
    const Style = BlockUtil.createArgument(ArgumentType.STRING, '', StyleMenu);
    const URI = BlockUtil.createArgument(ArgumentType.STRING, 'Args.URI');
    // create blocks
    /**
     * @TODO
     */

    const OfficialCat = BlockUtil.createCommand(
      'OfficialCatBlock',
      'Block.OfficialCat'
    );
    OfficialCat.setArguments({ Style });

    const CustomCat = BlockUtil.createCommand(
      'CustomCatBlock',
      'Block.CustomCat'
    );
    CustomCat.setArguments({ URI });

    const CloseAllCat = BlockUtil.createCommand(
      'CloseAllCatBlock',
      'Block.CloseAllCat'
    );

    const useMouseCursor = BlockUtil.createCommand(
      'UseMouseCursorBlock',
      'Block.UseMouseCursor'
    );
    useMouseCursor.setArguments({ MouseCursor });

    this.addTextLabel('Label.Set');
    this.addBlock(OfficialCat);
    this.addBlock(CustomCat);

    this.addTextLabel('Label.Tool');
    this.addBlock(CloseAllCat);
    this.addBlock(useMouseCursor);
  }
  // block function
  /**
   * @TODO
   */

  CloseAllCatBlock() {
    // XXX 没有思路
    // ⚠⚠⚠ 不要删掉这里的注释 ⚠⚠⚠
    // Blockly.BlockSvg.START_HAT_HEIGHT = 16;
    // Blockly.BlockSvg.START_HAT_PATH = 'c 25,-22 71,-22 96,0';
    // Blockly.BlockSvg.TOP_LEFT_CORNER_DEFINE_HAT = 'a 20,20 0 0,1 20,-20';

    // FIXME 临时解决方案
    window.location.href = window.location.href;
  }

  /** 猫眼是否跟踪鼠标 */
  UseMouseCursorBlock(args: { MouseCursor: string }) {
    this.useMouseCursor = args.MouseCursor == 'true' ? true : false;
  }

  CustomCatBlock(args: { URI: any }) {
    const { URI } = args;
    const Blockly = this.Blockly;
    let shouldWatchMouseCursor = this.useMouseCursor;
    const catInfo = {
      md5: URI,
      face: '#00000099',
      ear: '#ffd5e6',
    };
    /**
     * KYSTEAM_cat
     * 这是每个积木块上的 id
     */

    // 刷新工作区的函数需要关闭/开启共用 为了不重复创建 把它放到判断之前
    const workspace_ = () => {
      // 工作区
      const workspace = Blockly.getMainWorkspace();
      if (workspace) {
        // 优先更新当前编辑的角色（用户看到的）
        if (this.runtime._editingTarget) {
          // 刷新
          this.runtime._events.BLOCKS_NEED_UPDATE();
        }
        // 控件
        const flyout = workspace.getFlyout();
        // 如果有控件
        if (flyout) {
          // 控件工作区
          const flyoutWorkspace = flyout.getWorkspace();
          // 重载工作区
          Blockly.Xml.clearWorkspaceAndLoadFromXml(
            Blockly.Xml.workspaceToDom(flyoutWorkspace),
            flyoutWorkspace
          );
          // 刷新工具盒子
          workspace.getToolbox().refreshSelection();
          // 启用工具盒子的刷新状态
          workspace.toolboxRefreshEnabled_ = true;
        }
      }
    };
    workspace_();
    // Hat Block HEIGHT
    Blockly.BlockSvg.START_HAT_HEIGHT = 31;
    // Hat Block SVG PATH
    Blockly.BlockSvg.START_HAT_PATH =
      'c2.6,-2.3 5.5,-4.3 8.5,-6.2' +
      'c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4' +
      'c8.4,-1.3 17,-1.3 25.4,0c1.9,-2.3 14.7,-17.2 18.4,-15.4' +
      'c3.1,1.5 9.4,12.3 8.4,24.8c3,1.8 5.9,3.9 8.5,6.1';
    // Hat Block SVG LEFT TOP SVG PATH
    Blockly.BlockSvg.TOP_LEFT_CORNER_DEFINE_HAT =
      'c0,-7.1 3.7,-13.3 9.3,-16.9c1.7,-7.5 5.4,-13.2 7.6,-14.2' +
      'c2.6,-1.3 10,6 14.6,11.1h33c4.6,-5.1 11.9,-12.4 14.6,-11.1' +
      'c1.9,0.9 4.9,5.2 6.8,11.1c2.6,0,5.2,0,7.8,0';

    // 渲染猫脸
    Blockly.BlockSvg.prototype.renderCatFace_ = function () {
      // 猫路径 颜色
      this.catPath_.svgFace.setAttribute('fill', catInfo.face);

      // 猫闭眼
      const closedEye = Blockly.utils.createSvgElement(
        'path',
        {},
        this.svgFace_
      );
      // 猫闭眼样子
      closedEye.setAttribute(
        'd',
        'M25.2-1.1c0.1,0,0.2,0,0.2,0l8.3-2.1l-7-4.8' +
          'c-0.5-0.3-1.1-0.2-1.4,0.3s-0.2,1.1,0.3,1.4L29-4.1l-4,1' +
          'c-0.5,0.1-0.9,0.7-0.7,1.2C24.3-1.4,24.7-1.1,25.2-1.1z'
      );
      closedEye.setAttribute('fill-opacity', '0');
      // 设定猫闭眼
      this.catPath_.svgFace.closedEye = closedEye;

      // 第二只眼
      const closedEye2 = Blockly.utils.createSvgElement(
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
      // 设置第二只眼
      this.catPath_.svgFace.closedEye2 = closedEye2;

      // 创建眼部dom
      const eye = Blockly.utils.createSvgElement('circle', {}, this.svgFace_);
      eye.setAttribute('cx', '59.2');
      eye.setAttribute('cy', '-3.3');
      eye.setAttribute('r', '3.4');
      eye.setAttribute('fill-opacity', '0.6');
      this.catPath_.svgFace.eye = eye;
      // 第二只眼dom
      const eye2 = Blockly.utils.createSvgElement('circle', {}, this.svgFace_);
      eye2.setAttribute('cx', '29.1');
      eye2.setAttribute('cy', '-3.3');
      eye2.setAttribute('r', '3.4');
      eye2.setAttribute('fill-opacity', '0.6');
      this.catPath_.svgFace.eye2 = eye2;
      // 猫嘴
      const mouth = Blockly.utils.createSvgElement('path', {}, this.svgFace_);
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

      // 猫耳
      this.catPath_.ear.setAttribute(
        'd',
        'M73.1-15.6c1.7-4.2,4.5-9.1,5.8-8.5' +
          'c1.6,0.8,5.4,7.9,5,15.4c0,0.6-0.7,0.7-1.1,0.5c-3-1.6-6.4-2.8-8.6-3.6' +
          'C72.8-12.3,72.4-13.7,73.1-15.6z'
      );
      this.catPath_.ear.setAttribute('fill', catInfo.ear);

      // 第二只耳
      this.catPath_.ear2.setAttribute(
        'd',
        'M22.4-15.6c-1.7-4.2-4.5-9.1-5.8-8.5' +
          'c-1.6,0.8-5.4,7.9-5,15.4c0,0.6,0.7,0.7,1.1,0.5c3-1.6,6.4-2.8,8.6-3.6' +
          'C22.8-12.3,23.2-13.7,22.4-15.6z'
      );
      this.catPath_.ear2.setAttribute('fill', catInfo.ear);
    };

    // 初始化猫有关的东西
    Blockly.BlockSvg.prototype.initCatStuff = function () {
      // 已经初始化了？
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
      this.catPath_.ear = Blockly.utils.createSvgElement(
        'path',
        {},
        this.catPath_
      );
      this.catPath_.ear2 = Blockly.utils.createSvgElement(
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
      this.userPic = Blockly.utils.createSvgElement('image', {}, this.userPicG);

      this.userPic.setAttribute('href', catInfo.md5);
      this.userPic.setAttribute('x', '-1');
      this.userPic.setAttribute('y', '-33');

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
    Blockly.BlockSvg.prototype.getCatFacePosition = function () {
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

    Blockly.BlockSvg.prototype.shouldWatchMouse = function () {
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

    const originalRenderDraw = Blockly.BlockSvg.prototype.renderDraw_;
    Blockly.BlockSvg.prototype.renderDraw_ = function (...args: any) {
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

    const originalDispose = Blockly.BlockSvg.prototype.dispose;
    Blockly.BlockSvg.prototype.dispose = function (...args: any) {
      clearTimeout(this.blinkFn);
      clearTimeout(this.earFn);
      clearTimeout(this.ear2Fn);
      if (this.windowListener) {
        document.removeEventListener('mousemove', this.windowListener);
      }
      return originalDispose.call(this, ...args);
    };

    const originalSetGlowStack = Blockly.BlockSvg.prototype.setGlowStack;
    Blockly.BlockSvg.prototype.setGlowStack = function (isGlowingStack: any) {
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

    Blockly.BlockSvg.prototype.sa_catBlockConstructor = function () {
      /** userPicG是用户image上层的dom 用于隔离 */
      // TODO 为了容易把‘猫’卸载掉 svgGroup_是积木的最底层 但这样就不容易卸载了 容易误伤 把svgGroup_里再套一个<g/>里面是userPicG & catPath_ 这里为了方便查找 给<g/>设个id
      this.cat_ = Blockly.utils.createSvgElement('g', {}, this.svgGroup_);
      this.cat_.setAttribute('id', 'KYSTEAM_cat');
      this.userPicG = Blockly.utils.createSvgElement('g', {}, this.cat_);
      this.catPath_ = Blockly.utils.createSvgElement('g', {}, this.cat_);

      this.svgFace_ = Blockly.utils.createSvgElement('g', {}, this.catPath_);

      this.catPath_.svgFace = this.svgFace_; /** svgFace_在catPath_里 */
      this.catPath_.svgBody =
        this.svgPath_; /** svgPath_在cat_里 */ /** catPath在cat_里 */
      this.lastCallTime = 0;
      this.CALL_FREQUENCY_MS = 60;
    };
    workspace_();
  }

  OfficialCatBlock(args: { Style: any }) {
    const { Style } = args;
    const Blockly = this.Blockly;
    let shouldWatchMouseCursor = this.useMouseCursor;
    const catInfo = this.getCatInfoByName(Style);
    /**
     * KYSTEAM_cat
     * 这是每个积木块上的 id
     */

    // 刷新工作区的函数需要关闭/开启共用 为了不重复创建 把它放到判断之前
    const workspace_ = () => {
      // 工作区
      const workspace = Blockly.getMainWorkspace();
      if (workspace) {
        // 优先更新当前编辑的角色（用户看到的）
        if (this.runtime._editingTarget) {
          // 刷新
          this.runtime._events.BLOCKS_NEED_UPDATE();
        }
        // 控件
        const flyout = workspace.getFlyout();
        // 如果有控件
        if (flyout) {
          // 控件工作区
          const flyoutWorkspace = flyout.getWorkspace();
          // 重载工作区
          Blockly.Xml.clearWorkspaceAndLoadFromXml(
            Blockly.Xml.workspaceToDom(flyoutWorkspace),
            flyoutWorkspace
          );
          // 刷新工具盒子
          workspace.getToolbox().refreshSelection();
          // 启用工具盒子的刷新状态
          workspace.toolboxRefreshEnabled_ = true;
        }
      }
    };
    workspace_();
    // Hat Block HEIGHT
    Blockly.BlockSvg.START_HAT_HEIGHT = 31;
    // Hat Block SVG PATH
    Blockly.BlockSvg.START_HAT_PATH =
      'c2.6,-2.3 5.5,-4.3 8.5,-6.2' +
      'c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4' +
      'c8.4,-1.3 17,-1.3 25.4,0c1.9,-2.3 14.7,-17.2 18.4,-15.4' +
      'c3.1,1.5 9.4,12.3 8.4,24.8c3,1.8 5.9,3.9 8.5,6.1';
    // Hat Block SVG LEFT TOP SVG PATH
    Blockly.BlockSvg.TOP_LEFT_CORNER_DEFINE_HAT =
      'c0,-7.1 3.7,-13.3 9.3,-16.9c1.7,-7.5 5.4,-13.2 7.6,-14.2' +
      'c2.6,-1.3 10,6 14.6,11.1h33c4.6,-5.1 11.9,-12.4 14.6,-11.1' +
      'c1.9,0.9 4.9,5.2 6.8,11.1c2.6,0,5.2,0,7.8,0';

    // 渲染猫脸
    Blockly.BlockSvg.prototype.renderCatFace_ = function () {
      // 猫路径 颜色
      this.catPath_.svgFace.setAttribute('fill', catInfo.face);

      // 猫闭眼
      const closedEye = Blockly.utils.createSvgElement(
        'path',
        {},
        this.svgFace_
      );
      // 猫闭眼样子
      closedEye.setAttribute(
        'd',
        'M25.2-1.1c0.1,0,0.2,0,0.2,0l8.3-2.1l-7-4.8' +
          'c-0.5-0.3-1.1-0.2-1.4,0.3s-0.2,1.1,0.3,1.4L29-4.1l-4,1' +
          'c-0.5,0.1-0.9,0.7-0.7,1.2C24.3-1.4,24.7-1.1,25.2-1.1z'
      );
      closedEye.setAttribute('fill-opacity', '0');
      // 设定猫闭眼
      this.catPath_.svgFace.closedEye = closedEye;

      // 第二只眼
      const closedEye2 = Blockly.utils.createSvgElement(
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
      // 设置第二只眼
      this.catPath_.svgFace.closedEye2 = closedEye2;

      // 创建眼部dom
      const eye = Blockly.utils.createSvgElement('circle', {}, this.svgFace_);
      eye.setAttribute('cx', '59.2');
      eye.setAttribute('cy', '-3.3');
      eye.setAttribute('r', '3.4');
      eye.setAttribute('fill-opacity', '0.6');
      this.catPath_.svgFace.eye = eye;
      // 第二只眼dom
      const eye2 = Blockly.utils.createSvgElement('circle', {}, this.svgFace_);
      eye2.setAttribute('cx', '29.1');
      eye2.setAttribute('cy', '-3.3');
      eye2.setAttribute('r', '3.4');
      eye2.setAttribute('fill-opacity', '0.6');
      this.catPath_.svgFace.eye2 = eye2;
      // 猫嘴
      const mouth = Blockly.utils.createSvgElement('path', {}, this.svgFace_);
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

      // 猫耳
      this.catPath_.ear.setAttribute(
        'd',
        'M73.1-15.6c1.7-4.2,4.5-9.1,5.8-8.5' +
          'c1.6,0.8,5.4,7.9,5,15.4c0,0.6-0.7,0.7-1.1,0.5c-3-1.6-6.4-2.8-8.6-3.6' +
          'C72.8-12.3,72.4-13.7,73.1-15.6z'
      );
      this.catPath_.ear.setAttribute('fill', catInfo.ear);

      // 第二只耳
      this.catPath_.ear2.setAttribute(
        'd',
        'M22.4-15.6c-1.7-4.2-4.5-9.1-5.8-8.5' +
          'c-1.6,0.8-5.4,7.9-5,15.4c0,0.6,0.7,0.7,1.1,0.5c3-1.6,6.4-2.8,8.6-3.6' +
          'C22.8-12.3,23.2-13.7,22.4-15.6z'
      );
      this.catPath_.ear2.setAttribute('fill', catInfo.ear);
    };

    // 初始化猫有关的东西
    Blockly.BlockSvg.prototype.initCatStuff = function () {
      // 已经初始化了？
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
      this.catPath_.ear = Blockly.utils.createSvgElement(
        'path',
        {},
        this.catPath_
      );
      this.catPath_.ear2 = Blockly.utils.createSvgElement(
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
      this.userPic = Blockly.utils.createSvgElement('image', {}, this.userPicG);

      this.userPic.setAttribute('href', catInfo.md5);
      this.userPic.setAttribute('x', '-1');
      this.userPic.setAttribute('y', '-33');

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
    Blockly.BlockSvg.prototype.getCatFacePosition = function () {
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

    Blockly.BlockSvg.prototype.shouldWatchMouse = function () {
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

    const originalRenderDraw = Blockly.BlockSvg.prototype.renderDraw_;
    Blockly.BlockSvg.prototype.renderDraw_ = function (...args: any) {
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

    const originalDispose = Blockly.BlockSvg.prototype.dispose;
    Blockly.BlockSvg.prototype.dispose = function (...args: any) {
      clearTimeout(this.blinkFn);
      clearTimeout(this.earFn);
      clearTimeout(this.ear2Fn);
      if (this.windowListener) {
        document.removeEventListener('mousemove', this.windowListener);
      }
      return originalDispose.call(this, ...args);
    };

    const originalSetGlowStack = Blockly.BlockSvg.prototype.setGlowStack;
    Blockly.BlockSvg.prototype.setGlowStack = function (isGlowingStack: any) {
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

    Blockly.BlockSvg.prototype.sa_catBlockConstructor = function () {
      this.cat_ = Blockly.utils.createSvgElement('g', {}, this.svgGroup_);
      this.userPicG = Blockly.utils.createSvgElement('g', {}, this.cat_);
      this.catPath_ = Blockly.utils.createSvgElement('g', {}, this.cat_);

      this.svgFace_ = Blockly.utils.createSvgElement('g', {}, this.catPath_);

      this.catPath_.svgFace = this.svgFace_; /** svgFace_在catPath_里 */
      this.catPath_.svgBody =
        this.svgPath_; /** svgPath_在cat_里 */ /** catPath在cat_里 */
      this.lastCallTime = 0;
      this.CALL_FREQUENCY_MS = 60;
    };
    workspace_();
  }
  // Cute cat info

  getCatInfoByList() {
    // const pikaqiuStyleTemplate = {
    //   ear: '#eb94eb',
    //   face: '#4f422f',
    // };
    let assetMap = {
      ikun: {
        md5: '29c2600f6c6bc15dc3b0f39f6938ce94',
      },
      vegetables: {
        md5: '0897617a242c0db8072dcaa42b53348b',
      },
      fruit: {
        md5: '9a47b93a9e410baf23fe9f83919de156',
      },
      nature: {
        md5: 'cd71e8c6c2251da328245dc32e8b283a',
      },
      snacks: {
        md5: '7e3fd9c7bb8ad0cda64b4f58dccd01e1',
      },
      spring: {
        md5: 'cfed3220b96a2840d2e406fdc6c6b24b',
        ear: '#ffffffb2',
      },
      summer: {
        md5: '935f90e9916d261ea984410463cbd48a',
        ear: '#ffffffb2',
      },
      autumn: {
        md5: 'fd686d41bead2b6d6924386d205ac832',
        ear: '#ffffffb2',
      },
      winter: {
        md5: '8a3d1838492e967f139056806f8f186a',
      },
      // HACK 如果日后xiaoyh知道了，还是有必要处理一下的
      xiaoyh /** 丫鬟 ?== xiaoyh ≠ ccw那个xiaoyh 只是方便英文命名 */: {
        md5: 'a61c3e02ef65452f8017e24dad8c7e1f',
      },
      // 皮卡丘的资源从后端加载
      // 因为内容太多了 随时都要调整
    };
    const data = eval(
      '(' +
        this.getJSON('https://yuensite.f3322.net:7001/config/cat-config.json') +
        ')'
    );
    const json = typeof data == 'object' ? data : {};
    assetMap = {
      ...assetMap,
      ...json,
    };
    return assetMap;
  }

  getJSON(url: string | URL) {
    if (localStorage.getItem('KYSTEAM_BlockStyle_PermissionVerification') == 'true') {
      const xhr = new XMLHttpRequest();
      xhr.open('get', url, false);
      xhr.send();
      return xhr.responseText;
    }
    return;
  }

  getCatInfoByName(name: string | number) {
    const getUrlByMd5 = (md5: any) => {
      const URI = `${this.onlineConfig.cdnHost}/gandi_application/user_assets`;
      const suffix = 'svg';
      return `${URI}/${md5}.${suffix}`;
    };
    interface IAssetMap {
      /** 资源是从 Gandi-成就-图标-上传 拿到的 只截取md5部分 */
      face: string;
      ear: string;
    }
    const assetMap = this.getCatInfoByList();
    // 兜底的数据 防止因为检索不到md5导致报错
    const assetDefault: IAssetMap = {
      face: '#00000099',
      ear: '#ffd5e6',
    };
    // 如果没有耳朵和脸的颜色 就用默认配色
    const _data = { ...assetDefault, ...assetMap[name] };
    // 污染拿到的数据 注入转为url的md5
    _data.md5 = getUrlByMd5(assetMap[name].md5);
    const searchData = _data || assetDefault;
    return searchData;
  }

  //dynamic menu function
  /**
   * @TODO
   */

  /**
   * @description: 积木选择菜单
   * @return {IMenu[]}
   */
  StyleMenu(): IMenu[] {
    /** 数据 */
    const Subject: IMenu[] = [];
    let _InjectSub: IMenu[] = Boolean(localStorage.getItem('KYS#MenuStatus'))
      ? eval(`(${localStorage.getItem('KYS#MenuData')})`)
      : [];
    const _Subject: IMenu[] = [
      /** official */
      { text: '默认猫头', value: 'NotFound', type: 'Official' },
      { text: '春', value: 'spring', type: 'Official' },
      { text: '夏', value: 'summer', type: 'Official' },
      { text: '秋', value: 'autumn', type: 'Official' },
      { text: '冬', value: 'winter', type: 'Official' },
      // 皮卡丘的资源迁移到后端
      /** ccw community */
      { text: '古风玉簪', value: 'xiaoyh', type: 'Community' },
      /** kukemc */
      { text: '水果', value: 'fruit', type: 'Kuke' },
      { text: '自然', value: 'nature', type: 'Kuke' },
      { text: '零食', value: 'snacks', type: 'Kuke' },
      { text: 'IKUN', value: 'ikun', type: 'Kuke' },
      { text: '菜猫', value: 'vegetables', type: 'Kuke' },
      { text: '闪瞎你的眼', value: 'star', type: 'Kuke' },
    ];

    const _Tag = {
      Official: '官方',
      Community: '社区',
      Kuke: '酷可mc',
      pikaqiu: '软萌软萌d皮卡丘',
    };
    const data = eval(
      '(' +
        this.getJSON(
          'https://yuensite.f3322.net:7001/config/menu-config.json'
        ) +
        ')'
    );
    _InjectSub = _InjectSub.concat(typeof data == 'object' ? data : []);

    const arrayData = _Subject.concat(_InjectSub);

    for (const i in arrayData) {
      const sub = arrayData[i];
      /** 当数据发生错误时，就用数据本身的tag */
      const tag = _Tag[sub.type] ? _Tag[sub.type] : sub.type;
      /** 移除Menu不需要的键 */
      delete sub.type;
      /** 拼接tag */
      sub.text = `[${tag}] ${sub.text}`;
      Subject.push(sub);
    }
    return Subject;
  }
}
