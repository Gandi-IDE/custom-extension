const BlockType = {
  BOOLEAN: 'Boolean',
  BUTTON: 'button',
  COMMAND: 'command',
  CONDITIONAL: 'conditional',
  EVENT: 'event',
  HAT: 'hat',
  LOOP: 'loop',
  REPORTER: 'reporter',
};

const ArgumentType = {
  ANGLE: 'angle',
  BOOLEAN: 'Boolean',
  COLOR: 'color',
  NUMBER: 'number',
  STRING: 'string',
  MATRIX: 'matrix',
  NOTE: 'note',
  IMAGE: 'image',
};

const TargetType = {
  STAGE: 'stage',
  SPRITE: 'sprite',
};

import Cast from './cast.js';
// import cover from './assets/cover.png'
// import icon from './assets/icon.svg'

const extensionNS = 'witCat';
const extensionId = `${extensionNS}.dollyPro`;

const cover =
  'https://m.ccw.site/user_projects_assets/8192f42de3c3020a10cd58bfd617d5e3.png';
const icon =
  'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMjAuNSIgaGVpZ2h0PSIxMjAuNSIgdmlld0JveD0iMCwwLDEyMC41LDEyMC41Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU5Ljc1LC0xMTkuNzUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yNzYuOTY2NDIsMTU2LjIzNjAxYy0xLjYyNDgsLTMuNTc0NiAtMC45Njg4LC0xMC4xOTc5IDMuODk5NSwtMTIuMDIzNWM1LjE5OTQsLTEuOTQ5OCA3LjQ3NDEsLTMuNTc0NiAxNy44NzI5LDQuMjI0NGM4LjMxOSw2LjIzOTMgOS41MzIyLDEwLjYxNTQgOS4wOTg5LDEyLjAyMzZsLTUuODQ5Myw2LjE3NDJjLTAuNDMzMywtMS4yOTk4IC0zLjExOTYsLTQuMzU0NCAtMTAuMzk4OCwtNi4xNzQyYy05LjA5ODksLTIuMjc0NyAtMTIuOTk4NCwtMC42NDk5IC0xNC42MjMyLC00LjIyNDV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0zNjcuOTU1NTQsMTQ5LjQzNjkzYy0yLjYsMi45MjQ1IC0zLjI1LDcuNzk5MSAtMTAuNzI0LDcuNzk5MWMtNS45NzkxLDAgLTEwLjI5MDIsMi44MTYzIC0xMi42NzMzLDUuMTk5M2wtNi44MjQxLC01LjE5OTNjMC44NjY1LC0yLjM4MyA0LjQ4NDQsLTguMTIzOSAxMi4wMjM1LC0xMi4wMjM1YzkuNDIzOSwtNC44NzQ2IDIwLjc5NzksMS4yOTk5IDE4LjE5NzksNC4yMjQ0eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjc1LjM0MTY0LDE4OS4wNTcwMWM0LjY3OTUsLTYuMjM5MiAxOC4xOTc4LC04Ljg4MjIgMjQuMzcyMSwtOS40MjM4YzAsLTIuMjc0OCAxLjAzOTgsLTguMjU0IDUuMTk5MywtMTMuOTczNGM1LjE5OTQsLTcuMTQ5MSA5LjA5ODksLTEyLjk5ODQgMjYuNjQ2OCwtMTAuMzk4N2MxNy41NDc5LDIuNTk5NyAxNy4yMjI5LDIwLjE0NzYgMTkuMTcyNywyNC4zNzIxYzEuOTQ5OCw0LjIyNDQgMC45NzQ5LDIxLjQ0NzQgLTcuNzk5MSwyOC41OTY1Yy04Ljc3MzksNy4xNDkyIC0yNi4zMjE4LDguNDQ5MiAtMzguMDIwNCw4LjEyNDJjLTExLjY5ODYsLTAuMzI1IC0yMS4xMjI0LC01LjE5OTUgLTI2Ljk3MTcsLTguMTI0MmMtNS44NDkzLC0yLjkyNDYgLTguNDQ5LC0xMS4zNzM2IC0yLjU5OTcsLTE5LjE3Mjd6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0zMDcuODM3NywxNjEuMDYxNjZjMC40MzMzLC0xLjQwODIgLTAuNzc5OSwtNS43ODQzIC05LjA5ODksLTEyLjAyMzZjLTEwLjM5ODgsLTcuNzk5IC0xMi42NzM1LC02LjE3NDIgLTE3Ljg3MjksLTQuMjI0NGMtNC44NjgzLDEuODI1NiAtNS41MjQzLDguNDQ4OSAtMy44OTk1LDEyLjAyMzVjMS42MjQ4LDMuNTc0NiA1LjUyNDMsMS45NDk4IDE0LjYyMzIsNC4yMjQ1YzcuMjc5MiwxLjgxOTggOS45NjU1LDQuODc0NCAxMC4zOTg4LDYuMTc0MnpNMzQ0LjU1ODIyLDE2Mi4wMzY0MWMyLjM4MzEsLTIuMzgzIDYuNjk0MiwtNS4xOTkzIDEyLjY3MzMsLTUuMTk5M2M3LjQ3NCwwIDguMTI0LC00Ljg3NDYgMTAuNzI0LC03Ljc5OTFjMi42LC0yLjkyNDUgLTguNzc0LC05LjA5OSAtMTguMTk3OSwtNC4yMjQ0Yy03LjUzOTEsMy44OTk2IC0xMS4xNTcsOS42NDA1IC0xMi4wMjM1LDEyLjAyMzV6TTMwNC45MTMsMTY2LjI2MDhjNS4xOTk0LC03LjE0OTEgOS4wOTg5LC0xMi45OTg0IDI2LjY0NjgsLTEwLjM5ODdjMTcuNTQ3OSwyLjU5OTcgMTcuMjIyOSwyMC4xNDc2IDE5LjE3MjcsMjQuMzcyMWMxLjk0OTgsNC4yMjQ0IDAuOTc0OSwyMS40NDc0IC03Ljc5OTEsMjguNTk2NWMtOC43NzM5LDcuMTQ5MiAtMjYuMzIxOCw4LjQ0OTIgLTM4LjAyMDQsOC4xMjQyYy0xMS42OTg2LC0wLjMyNSAtMjEuMTIyNCwtNS4xOTk1IC0yNi45NzE3LC04LjEyNDJjLTUuODQ5MywtMi45MjQ2IC04LjQ0OSwtMTEuMzczNiAtMi41OTk3LC0xOS4xNzI3YzQuNjc5NSwtNi4yMzkyIDE4LjE5NzgsLTguODgyMiAyNC4zNzIxLC05LjQyMzhjMCwtMi4yNzQ4IDEuMDM5OCwtOC4yNTQgNS4xOTkzLC0xMy45NzM0eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMzM4LjkwMzEsMTk1LjcxMDg5YzAsMCAtNy45NTI2Niw0Ljg3ODc0IC0xMy42MjA0Niw2LjcxMDgxYy02LjMyNDY2LDIuMDQ0NCAtMjIuNTczNDQsNC45ODg1OSAtMjIuNTczNDQsNC45ODg1OSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjUiLz48Zz48cGF0aCBkPSJNMzE1LjczNzM4LDE4NS40NDg0MmMtMi41MDQ3NCwyLjAwNjggLTE1LjE2ODA0LC0yLjQ3MzY3IC0xNS4xNjgwNCwtMi40NzM2N2MwLDAgLTguMDE3MDEsNy45NjIzNCAtMTEuNjM3OTMsNi45ODQwNGMtMy42MjMzLC0wLjk3NzY4IC0xLjE4MjkyLC0xMC40NDU0NSAtMS4xODI5MiwtMTAuNDQ1NDVjMCwwIC0xMy43NjMwNiwtMi42NTU3MSAtMTMuNDk1MTUsLTUuMjY4MDdjMC4yNjcwNCwtMi42MTQxIDE0LjQ0MDYyLC0zLjk4MjA1IDE0LjQ0MDYyLC0zLjk4MjA1YzAsMCAtMC40OTExNiwtOS42MDEzOCAzLjI5NDQxLC0xMC4yNDAxMWMzLjc5MTM4LC0wLjYzODI3IDEwLjExMjI4LDcuOTg0MSAxMC4xMTIyOCw3Ljk4NDFjMCwwIDEzLjQ1OSwtMy4yODA2IDE1LjUzMDI0LC0xLjA1OTY1YzIuMDc3ODMsMi4yMTc2MyAtOC4xOTExNyw4LjkxNjQxIC04LjE5MTE3LDguOTE2NDFjMCwwIDguODA5ODgsNy41NzU5NyA2LjI5NzY0LDkuNTg0NXoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI4OC4yMzgxMywxODQuMTU3NjJsLTEuNDM0OCwtNC45OTI3NWwxMS4xMjI1OSwtMTcuNDExOTFsMy4xMDQwNywyLjY2MzM3YzAsMCAtMTIuNzYyMDEsMTkuNzM1MTIgLTEyLjc5MTg1LDE5Ljc0MTI5eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMzE1LjczNzM4LDE4NS40NDg0MmMtMi41MDQ3NCwyLjAwNjggLTE1LjE2ODA0LC0yLjQ3MzY3IC0xNS4xNjgwNCwtMi40NzM2N2MwLDAgLTguMDE3MDEsNy45NjIzNCAtMTEuNjM3OTMsNi45ODQwNGMtMy42MjMzLC0wLjk3NzY4IC0xLjE4MjkyLC0xMC40NDU0NSAtMS4xODI5MiwtMTAuNDQ1NDVjMCwwIC0xMy43NjMwNiwtMi42NTU3MSAtMTMuNDk1MTUsLTUuMjY4MDdjMC4yNjcwNCwtMi42MTQxIDE0LjQ0MDYyLC0zLjk4MjA1IDE0LjQ0MDYyLC0zLjk4MjA1YzAsMCAtMC40OTExNiwtOS42MDEzOCAzLjI5NDQxLC0xMC4yNDAxMWMzLjc5MTM4LC0wLjYzODI3IDEwLjExMjI4LDcuOTg0MSAxMC4xMTIyOCw3Ljk4NDFjMCwwIDEzLjQ1OSwtMy4yODA2IDE1LjUzMDI0LC0xLjA1OTY1YzIuMDc3ODMsMi4yMTc2MyAtOC4xOTExNyw4LjkxNjQxIC04LjE5MTE3LDguOTE2NDFjMCwwIDguODA5ODgsNy41NzU5NyA2LjI5NzY0LDkuNTg0NXoiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjYyNzQ1IiBzdHJva2U9IiNmZmRjMDAiIHN0cm9rZS13aWR0aD0iMi41Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0zNTQuNjEyODEsMTg1LjA0MDU4Yy0yLjUxODg1LDEuODY5ODYgLTE1LjAyMTksLTIuNDI4MDYgLTE1LjAyMTksLTIuNDI4MDZjMCwwIC04LjA4NjU3LDcuNDMxOTIgLTExLjY2NjQ4LDYuNDg3NzFjLTMuNTgyMjcsLTAuOTQzNjQgLTEuMDA5MTMsLTkuODI4NTcgLTEuMDA5MTMsLTkuODI4NTdjMCwwIC0xMy42MjM5NCwtMi41ODk3MyAtMTMuMzE2NTcsLTUuMDQ0YzAuMzA2NTQsLTIuNDU1OTEgMTQuNDAxODUsLTMuNjQ2MzkgMTQuNDAxODUsLTMuNjQ2MzljMCwwIC0wLjMzNTY3LC05LjAzMDM0IDMuNDMzMzMsLTkuNjA1MzFjMy43NzQ3OCwtMC41NzQ1MiA5LjkxNDU2LDcuNTc0NzMgOS45MTQ1Niw3LjU3NDczYzAsMCAxMy40MTYwMywtMi45OTM1MiAxNS40Mzc0OSwtMC44OTE0NmMyLjAyODA1LDIuMDk4OTggLTguMjc0NTksOC4zMjc3NCAtOC4yNzQ1OSw4LjMyNzc0YzAsMCA4LjYyNzc5LDcuMTgyMjMgNi4xMDE0Niw5LjA1MzY1eiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMzI3LjE4MDA0LDE4NC4xNTg3MWwtMS4zNDU2MiwtNC43MDM3NmwxMS4zMTk4NywtMTYuMjk1MjRsMy4wNDAwMiwyLjUyNTAxYzAsMCAtMTIuOTg0NTEsMTguNDY4NCAtMTMuMDE0MjYsMTguNDc0MDF6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0zNTQuNjEyODEsMTg1LjA0MDU4Yy0yLjUxODg1LDEuODY5ODYgLTE1LjAyMTksLTIuNDI4MDYgLTE1LjAyMTksLTIuNDI4MDZjMCwwIC04LjA4NjU3LDcuNDMxOTIgLTExLjY2NjQ4LDYuNDg3NzFjLTMuNTgyMjcsLTAuOTQzNjQgLTEuMDA5MTMsLTkuODI4NTcgLTEuMDA5MTMsLTkuODI4NTdjMCwwIC0xMy42MjM5NCwtMi41ODk3MyAtMTMuMzE2NTcsLTUuMDQ0YzAuMzA2NTQsLTIuNDU1OTEgMTQuNDAxODUsLTMuNjQ2MzkgMTQuNDAxODUsLTMuNjQ2MzljMCwwIC0wLjMzNTY3LC05LjAzMDM0IDMuNDMzMzMsLTkuNjA1MzFjMy43NzQ3OCwtMC41NzQ1MiA5LjkxNDU2LDcuNTc0NzMgOS45MTQ1Niw3LjU3NDczYzAsMCAxMy40MTYwMywtMi45OTM1MiAxNS40Mzc0OSwtMC44OTE0NmMyLjAyODA1LDIuMDk4OTggLTguMjc0NTksOC4zMjc3NCAtOC4yNzQ1OSw4LjMyNzc0YzAsMCA4LjYyNzc5LDcuMTgyMjMgNi4xMDE0Niw5LjA1MzY1eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjAuNjI3NDUiIHN0cm9rZT0iI2ZmZGMwMCIgc3Ryb2tlLXdpZHRoPSIyLjUiLz48L2c+PHBhdGggZD0iTTI1OS43NSwyNDAuMjV2LTEyMC41aDEyMC41djEyMC41eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48L2c+PC9nPjwvc3ZnPg==';

class dollyProExtension {
  constructor(runtime) {
    this.runtime = runtime;

    /** 克隆体ID映射表：ID → target */
    this._IDtoTargets = {};

    /** 下个克隆体的预设的KV数据 */
    this._clonePresetData = {};
    /** 下个克隆体的预设属性('x'、'y'、'size'、'direction'等)的值*/
    this._clonePresetProperties = {};
    /** 克隆体预设的要加入的分组 */
    this._clonePresetGroups = {};
    /** 刚克隆的克隆体ID */
    this.justCreatedCloneID = '';

    /** 克隆体分组，每个组是一个克隆体ID列表
     * @type {{[groupName: string]: string[]}}
     */
    this._groupsOfClones = {};
    /** 存放 forEach 积木当前遍历的克隆体ID */
    this.forEachIndex = {};

    /** 一个附加功能，将扩展中对原版xy方向的访问转移到对克隆体Key数据的访问
     * - 例如，x: 'x' 表示原来访问target.x，现在访问target.DollyPro.extraData['x']
     * - 默认都是 null，即访问原内容
     */
    this._accessTransfer = { x: null, y: null, direction: null };

    /** 是否隐藏不常用的多莉积木 */
    this.hideExtraBlocks = true;

    /** Scratch 的 canvas 对象 */
    this.canvas = null;
    const elements = document.getElementsByTagName('canvas');
    let cvs = null;
    for (let i = 0; i < elements.length; i++) {
      cvs = elements[i];
      if (cvs.className === '') break;
    }
    if (cvs) {
      this.canvas = cvs;
    } else {
      alert('dolly pro：获取canvas长宽失败！');
    }

    // 劫持 runtime.getTargetById (根据Id找克隆体时，先从ID表查找)
    this.runtime.__getTargetById = this.runtime.getTargetById;
    this.runtime.getTargetById = function (ID) {
      // 先从ID表查找
      if (Object.prototype.hasOwnProperty.call(this._IDtoTargets, ID)) {
        return this._IDtoTargets[ID];
      }
      // 没找到再用原版方法
      return this.runtime.__getTargetById(ID);
    }.bind(this);

    // 劫持 runtime.removeExecutable
    this.runtime.__removeExecutable = this.runtime.removeExecutable;
    this.runtime.removeExecutable = function (target) {
      // removeExecutable（删除角色/克隆体）之前，处理一下后事
      this._processTargetBeforeDeletion(target);
      this.runtime.__removeExecutable(target);
    }.bind(this);

    // 劫持 runtime.disposeTarget
    this.runtime.__disposeTarget = this.runtime.disposeTarget;
    this.runtime.disposeTarget = function (target) {
      // 避免循环删除
      if (target.DollyPro) {
        if (target.DollyPro.isDeleting) return;
      }
      this.__disposeTarget(target);
    };
    this._hackedDispose = function () {
      // 避免循环删除
      if (this.DollyPro) {
        if (this.DollyPro.isDeleting) return;
      }
      this.__dolly_orig_dispose();
    };

    // 劫持 newClone.initDrawable
    const _hackedInitDrawable = function (layerGroup) {
      if (!this.isOriginal) {
        // 触发hat“当克隆体即将启动”
        this.runtime.startHats('witCat.dollyPro_initTheClone', null, this);
      }
      this.__dolly_orig_initDrawable(layerGroup);
    };
    // 劫持 sprite.createClone
    const _hackedCreateClone = function (optLayerGroup) {
      const newClone = this.__dolly_orig_createClone(optLayerGroup);
      // 劫持新产生的克隆体的initDrawable
      if (!newClone.__dolly_orig_initDrawable) {
        newClone.__dolly_orig_initDrawable = newClone.initDrawable;
        newClone.initDrawable = _hackedInitDrawable;
      }
      return newClone;
    };
    // 作品加载后，给每个角色注入多莉，并劫持createClone
    setTimeout(() => {
      this.runtime.targets.forEach((target) => {
        if (!target.isStage) {
          // 注入多莉
          this.injectDollyTarget(target);
          if (target.sprite) {
            // 劫持每个初始角色的createClone方法
            if (!target.sprite.__dolly_orig_createClone) {
              target.sprite.__dolly_orig_createClone =
                target.sprite.createClone;
              target.sprite.createClone = _hackedCreateClone;
            }
          }
        }
      });
    }, 1000);

    // 劫持 runtime.addTarget（用于创建新角色/克隆体时，注入多莉）
    this.runtime.__addTarget = this.runtime.addTarget;
    this.runtime.addTarget = function (target) {
      // 注入多莉（角色本体、克隆体都要注入）
      this.injectDollyTarget(target);
      if (!target.isOriginal) {
        // 如果是克隆体，进行一些预处理（如读取预设数据）
        this.__processCloneBeforeCreation(target);
        // 记录刚克隆的克隆体ID
        this.justCreatedCloneID = this.getIDOfTarget(target);
      } else {
        // 如果是角色，劫持createClone
        if (target.sprite) {
          if (target.sprite.createClone !== _hackedCreateClone) {
            target.sprite.__dolly_orig_createClone = target.sprite.createClone;
            target.sprite.createClone = _hackedCreateClone;
          }
        }
      }
      this.runtime.__addTarget(target);
    }.bind(this);

    this.fm = this.runtime.getFormatMessage({
      'zh-cn': {
        'witCat.dollyPro.name': '多莉Pro',
        'witCat.dollyPro.urlButton': '📖 扩展教程',
        'witCat.dollyPro.url': 'https://learn.ccw.site/article/',
        'witCat.dollyPro.tag.utils': '🔧 常用工具',
        'witCat.dollyPro.tag.event': '🔔 事件触发',
        'witCat.dollyPro.tag.cloneAndDelete': '🪄 克隆与删除',
        'witCat.dollyPro.tag.data': '📄 数据获取与设置',
        'witCat.dollyPro.tag.group': '📁 克隆体分组',
        'witCat.dollyPro.tag.motion': '🚶 运动相关',
        'witCat.dollyPro.tag.sensing': '🔍 侦测相关',
        'witCat.dollyPro.tag.test': '🚧 实验积木',
        'witCat.dollyPro.button.showBlock': '显示不常用的多莉积木',
        'witCat.dollyPro.button.hideBlock': '隐藏不常用的多莉积木',
        'witCat.dollyPro.confirm.showBlock?':
          '为了避免积木过多，一些不常用的多莉积木被隐藏了起来\n是否显示隐藏积木？',
        'witCat.dollyPro.block.addOrRemoveIDFromGroup':
          '将克隆体 [ID] [OP] [GROUP] 分组',
        'witCat.dollyPro.block.pickTarget': '点x:[X]y:[Y]处最上层克隆体ID',
        'witCat.dollyPro.block.addOrRemoveMyselfFromGroup':
          '将我 [OP] [GROUP] 分组',
        'witCat.dollyPro.block.calcDistanceBetweenClones':
          '克隆体1[ID1]到克隆体2[ID2]的[MENU]',
        'witCat.dollyPro.block.calcDistanceToClone': '到克隆体[ID]的[MENU]',
        'witCat.dollyPro.block.cancelAccessTransfer':
          '取消坐标/方向数据的访问转移',
        'witCat.dollyPro.block.cloneIDOfForEach': '⚠️当前遍历ID',
        'witCat.dollyPro.block.createCloneAndSpecifyID':
          '克隆 [TARGET] 并设置ID为 [ID]',
        'witCat.dollyPro.block.deleteCloneByID': '删除ID为[ID]的克隆体',
        'witCat.dollyPro.block.dispatchWhenCloneDeleted':
          '当 [TARGET] 的克隆体被删除，删除的克隆体ID = [ID]',
        'witCat.dollyPro.block.dispatchWhenCloned':
          '当 [TARGET] 被克隆，产生的克隆体ID = [ID]',
        'witCat.dollyPro.block.forEachWithGroup':
          '⚠️遍历[GROUP]分组的每个克隆体',
        'witCat.dollyPro.block.getClonePropertyInGroup':
          '[GROUP]分组第 [INDEX] 个克隆体的 [PROPERTY]',
        'witCat.dollyPro.block.getClonePropertyWithID':
          '克隆体 [ID] 的 [PROPERTY]',
        'witCat.dollyPro.block.getCloneTargetPropertyWithSpriteName':
          '[TARGET] 的克隆体的 [PROPERTY]',
        'witCat.dollyPro.block.getGroupInfo': '[GROUP] 分组的克隆体 [PROPERTY]',
        'witCat.dollyPro.block.getJustCreatedCloneID': '刚克隆的克隆体的ID',
        'witCat.dollyPro.block.getMyProperty': '我的 [PROPERTY]',
        'witCat.dollyPro.block.getMyValueByKey': '我的[KEY]',
        'witCat.dollyPro.block.getNearestClone':
          '[TYPE][MENU][VALUE]的克隆体的ID',
        'witCat.dollyPro.menu.nearest': '最近的',
        'witCat.dollyPro.menu.farthest': '最远的',
        'witCat.dollyPro.block.getOriginalTargetPropertyWithSpriteName':
          ' [TARGET] 的 [PROPERTY]',
        'witCat.dollyPro.block.getTouchingID':
          '碰到[MENU][VALUE]的[TYPE]克隆体的ID',
        'witCat.dollyPro.block.getValueOfCloneIDWithKey': '克隆体[ID]的[KEY]',
        'witCat.dollyPro.block.ifCloneExists': '存在ID为 [ID] 的克隆体？',
        'witCat.dollyPro.block.ifCloneInGroup': '克隆体 [ID] 属于[GROUP]分组？',
        'witCat.dollyPro.block.importGroupIntoList':
          '将[GROUP]分组中所有克隆体ID列表 [OP] 到列表 [LIST]',
        'witCat.dollyPro.block.importTouchingIDsIntoList':
          '将碰到的[MENU][VALUE]的所有克隆体的ID [OP] 到列表 [LIST]',
        'witCat.dollyPro.block.initTheClone': '当前克隆体启动的前一刻',
        'witCat.dollyPro.block.beforeDeletionOfTheClone':
          '当前克隆体删除的前一刻',
        'witCat.dollyPro.block.isCloneOrIsOriginal': '我是[TYPE]吗？',
        'witCat.dollyPro.block.isCloneTouchingCoord':
          '[MENU][VALUE]的克隆体碰到点x:[X]y:[Y]？',
        'witCat.dollyPro.block.isTouchingClone': '碰到[MENU][VALUE]的克隆体？',
        'witCat.dollyPro.block.isCloneTouchingClone':
          'ID[ID]碰到[MENU][VALUE]的克隆体？',
        'witCat.dollyPro.block.moveStepsToClone': '朝克隆体[ID][MOTION][VALUE]',
        'witCat.dollyPro.block.moveToClone': '[MOTION]克隆体[ID]',
        'witCat.dollyPro.block.presetDataforTheNextCloneInJSONFormat':
          '预设下个克隆体的数据为JSON[DATA_JSON]',
        'witCat.dollyPro.block.presetGroupForTheNextClone':
          '预设下个克隆体要加入的一个分组[GROUP]',
        'witCat.dollyPro.block.presetPropertyForTheNextClone':
          '预设下个克隆体的[PROPERTY]为[VALUE]',
        'witCat.dollyPro.block.presetSingleDataForTheNextClone':
          '预设下个克隆体数据[KEY]为[VALUE]',
        'witCat.dollyPro.block.setMyID': '⚠️将我的ID修改为[ID]',
        'witCat.dollyPro.block.setOrChangeMyValueWithKey':
          '将我的[KEY][OP][VALUE]',
        'witCat.dollyPro.block.setOrChangeValueOfCloneIDWithKey':
          '克隆体[ID]的[KEY][OP][VALUE]',
        'witCat.dollyPro.block.transferAccessToTargetXYToDollyDataKey':
          '将扩展中对角色坐标、方向的访问转移到对以下键数据访问：[X_NAME][Y_NAME][DIR_NAME](选填)',
        'witCat.dollyPro.block.broadcastToClone':
          '向[MENU][VALUE]克隆体发送私信[MSG]，内容为[data]',
        'witCat.dollyPro.block.receiveMyBroadcast':
          '当我接收到名为[MSG]的私信。私信内容=[data]，发送者ID=[senderID]',

        'witCat.dollyPro.defaultValue.MSGName': '信息1',
        'witCat.dollyPro.defaultValue.MSGInfo': '数据',
        'witCat.dollyPro.defaultValue.HP': '生命值',
        'witCat.dollyPro.defaultValue.direction': '方向',
        'witCat.dollyPro.defaultValue.enemy': '敌人',
        'witCat.dollyPro.defaultValue.player': '玩家',
        'witCat.dollyPro.defaultValue.presetJSON':
          '\'{"名称":"普通士兵","生命值":100,"阵营":"红色"}\'',
        'witCat.dollyPro.menu.addOrRemove.add': '加入',
        'witCat.dollyPro.menu.addOrRemove.remove': '移出',
        'witCat.dollyPro.menu.calcBetweenClones.absAngleDifference':
          '角度差(正数)',
        'witCat.dollyPro.menu.calcBetweenClones.angleDifference':
          '角度差(带符号)',
        'witCat.dollyPro.menu.calcBetweenClones.direction': '方向',
        'witCat.dollyPro.menu.calcBetweenClones.distance': '距离',
        'witCat.dollyPro.menu.cloneProperty.IDList': 'ID列表',
        'witCat.dollyPro.menu.cloneProperty.allSprite': '所有角色',
        'witCat.dollyPro.menu.cloneProperty.anySprite': '任意角色',
        'witCat.dollyPro.menu.cloneProperty.count': '数量',
        'witCat.dollyPro.menu.cloneProperty.json': 'JSON',
        'witCat.dollyPro.menu.cloneProperty.myself': '自己',
        'witCat.dollyPro.menu.dataop.change': '增加',
        'witCat.dollyPro.menu.dataop.set': '设为',
        'witCat.dollyPro.menu.listop.insert': '插入',
        'witCat.dollyPro.menu.listop.replace': '覆盖',
        'witCat.dollyPro.menu.miton.PointAt': '面向',
        'witCat.dollyPro.menu.miton.moveSteps': '移动步数',
        'witCat.dollyPro.menu.miton.moveTo': '移到',
        'witCat.dollyPro.menu.miton.rotateDegrees': '旋转角度',
        'witCat.dollyPro.menu.oneOrAll.all': '所有',
        'witCat.dollyPro.menu.oneOrAll.one': '一个',
        'witCat.dollyPro.menu.spriteProperty._size': '大小',
        'witCat.dollyPro.menu.spriteProperty._visible': '显示?',
        'witCat.dollyPro.menu.spriteProperty._x': 'x 坐标',
        'witCat.dollyPro.menu.spriteProperty._y': 'y 坐标',
        'witCat.dollyPro.menu.spriteProperty.currentCostume': '造型编号',
        'witCat.dollyPro.menu.spriteProperty.currentCostumeName': '造型名',
        'witCat.dollyPro.menu.spriteProperty.direction': '方向',
        'witCat.dollyPro.menu.spriteProperty.id': 'ID',
        'witCat.dollyPro.menu.spriteProperty.name': '角色名',
        'witCat.dollyPro.menu.spriteProperty.dataJSON': '附带数据JSON',
        'witCat.dollyPro.menu.targetType.ID': 'ID为',
        'witCat.dollyPro.menu.targetType.group': '分组',
        'witCat.dollyPro.menu.targetType.sprite': '角色',
        'witCat.dollyPro.menu.type.clone': '克隆体',
        'witCat.dollyPro.menu.type.original': '角色本体',
        'witCat.dollyPro.menu.color': '颜色特效',
        'witCat.dollyPro.menu.fisheye': '鱼眼特效',
        'witCat.dollyPro.menu.whirl': '旋涡特效',
        'witCat.dollyPro.menu.pixelate': '像素化特效',
        'witCat.dollyPro.menu.mosaic': '马赛克特效',
        'witCat.dollyPro.menu.brightness': '亮度特效',
        'witCat.dollyPro.menu.ghost': '虚像特效',

        'witCat.dollyPro.block.setCloneProperty':
          '克隆体[ID]的[PROPERTY][OP][VALUE]',
      },
      en: {
        'witCat.dollyPro.name': 'Dolly Pro',
        'witCat.dollyPro.urlButton': '📖 Tutorial',
        'witCat.dollyPro.url': 'https://learn.ccw.site/article/',
        'witCat.dollyPro.tag.utils': '🔧 Common Tools',
        'witCat.dollyPro.tag.event': '🔔 Event',
        'witCat.dollyPro.tag.cloneAndDelete': '🪄 Clone and Delete',
        'witCat.dollyPro.tag.data': '📄 Data Access',
        'witCat.dollyPro.tag.group': '📁 Clone Groups',
        'witCat.dollyPro.tag.motion': '🚶 Motion',
        'witCat.dollyPro.tag.sensing': '🔍 Sensing',
        'witCat.dollyPro.tag.test': '🚧 Experimental Blocks',
        'witCat.dollyPro.button.showBlock': 'show other blocks',
        'witCat.dollyPro.button.hideBlock': 'hide other blocks',
        'witCat.dollyPro.confirm.showBlock?':
          'To avoid clutter, some infrequently used blocks are hidden.\nDo you want to show hidden blocks?',
        'witCat.dollyPro.block.addOrRemoveIDFromGroup':
          'clone [ID] [OP] group [GROUP] ',
        'witCat.dollyPro.block.pickTarget': 'ID of the top-most at x:[X]y:[Y]',
        'witCat.dollyPro.block.addOrRemoveMyselfFromGroup':
          'myself [OP] group [GROUP]',
        'witCat.dollyPro.menu.addOrRemove.add': 'add to',
        'witCat.dollyPro.menu.addOrRemove.remove': 'remove from',
        'witCat.dollyPro.block.calcDistanceBetweenClones':
          '[MENU] from clone1[ID1] to clone2[ID2]',
        'witCat.dollyPro.menu.calcBetweenClones.direction': 'direction',
        'witCat.dollyPro.menu.calcBetweenClones.distance': 'distance',
        'witCat.dollyPro.menu.calcBetweenClones.absAngleDifference':
          'angular difference (postive)',
        'witCat.dollyPro.menu.calcBetweenClones.angleDifference':
          'angular difference (signed)',
        'witCat.dollyPro.block.calcDistanceToClone': '[MENU] to clone[ID]',
        'witCat.dollyPro.block.cancelAccessTransfer':
          'cancel the transfer of coordinate/direction data access',
        'witCat.dollyPro.block.cloneIDOfForEach': '⚠️current clone ID',
        'witCat.dollyPro.block.createCloneAndSpecifyID':
          'create clone of [TARGET] and set ID to[ID]',
        'witCat.dollyPro.block.deleteCloneByID': 'delete clone[ID]',
        'witCat.dollyPro.block.dispatchWhenCloneDeleted':
          'when clone of [TARGET] is deleted, deletedID = [ID]',
        'witCat.dollyPro.block.dispatchWhenCloned':
          'when [TARGET] is cloned, cloneID = [ID]',
        'witCat.dollyPro.block.forEachWithGroup':
          '⚠️for each clone in group[GROUP]',
        'witCat.dollyPro.block.getClonePropertyInGroup':
          '[PROPERTY] of #[INDEX] clone in group [GROUP]',
        'witCat.dollyPro.block.getClonePropertyWithID':
          '[PROPERTY] of clone[ID]',
        'witCat.dollyPro.block.getCloneTargetPropertyWithSpriteName':
          '[PROPERTY] of [TARGET]\'s clones',
        'witCat.dollyPro.block.getGroupInfo':
          '[PROPERTY] of clones in group [GROUP]',
        'witCat.dollyPro.block.getJustCreatedCloneID':
          'just created clone\'s ID',
        'witCat.dollyPro.block.getMyProperty': 'my [PROPERTY]',
        'witCat.dollyPro.block.getMyValueByKey': 'my[KEY]',
        'witCat.dollyPro.block.getNearestClone':
          'get [TYPE] clone\'s ID[MENU][VALUE]',
        'witCat.dollyPro.menu.nearest': 'nearest',
        'witCat.dollyPro.menu.farthest': 'farthest',
        'witCat.dollyPro.menu.targetType.ID': 'with ID',
        'witCat.dollyPro.menu.targetType.group': 'in group',
        'witCat.dollyPro.menu.targetType.sprite': 'of sprite',
        'witCat.dollyPro.block.getOriginalTargetPropertyWithSpriteName':
          '[PROPERTY] of [TARGET]',
        'witCat.dollyPro.block.getTouchingID':
          '[TYPE][MENU][VALUE]I\'m touching',
        'witCat.dollyPro.menu.oneOrAll.all': 'IDs of all clones',
        'witCat.dollyPro.menu.oneOrAll.one': 'ID of one clone',
        'witCat.dollyPro.block.getValueOfCloneIDWithKey': '[KEY]of clone[ID]',
        'witCat.dollyPro.block.ifCloneExists': 'clone[ID]exists?',
        'witCat.dollyPro.block.ifCloneInGroup':
          'clone [ID] belongs to group[GROUP]?',
        'witCat.dollyPro.block.importGroupIntoList':
          '[OP]list[LIST]with IDs of clones in group[GROUP]',
        'witCat.dollyPro.menu.listop.insert': 'insert',
        'witCat.dollyPro.menu.listop.replace': 'replace',
        'witCat.dollyPro.block.importTouchingIDsIntoList':
          '[OP]list[LIST]with IDs of clones[MENU][VALUE]I\'m touching',
        'witCat.dollyPro.block.initTheClone': 'before I start as a clone',
        'witCat.dollyPro.block.beforeDeletionOfTheClone':
          'before I\'m deleted as a clone',
        'witCat.dollyPro.block.isCloneOrIsOriginal': 'am I [TYPE]?',
        'witCat.dollyPro.menu.type.clone': 'a clone',
        'witCat.dollyPro.menu.type.original': 'the original sprite',
        'witCat.dollyPro.block.isCloneTouchingCoord':
          'clone[MENU][VALUE]touching x:[X]y:[Y]?',
        'witCat.dollyPro.block.isTouchingClone':
          'touching a clone[MENU][VALUE]',
        'witCat.dollyPro.block.isCloneTouchingClone':
          'clone[ID]touching a clone[MENU][VALUE]',
        'witCat.dollyPro.block.moveStepsToClone':
          '[MOTION][VALUE]towards clone[ID]',
        'witCat.dollyPro.menu.miton.moveSteps': 'move steps',
        'witCat.dollyPro.menu.miton.rotateDegrees': 'turn degrees',
        'witCat.dollyPro.block.moveToClone': '[MOTION]clone[ID]',
        'witCat.dollyPro.menu.miton.PointAt': 'point towards',
        'witCat.dollyPro.menu.miton.moveTo': 'go to',
        'witCat.dollyPro.block.presetDataforTheNextCloneInJSONFormat':
          'preset data of the next clone as JSON[DATA_JSON]',
        'witCat.dollyPro.block.presetGroupForTheNextClone':
          'preset the group to join for the next clone[GROUP]',
        'witCat.dollyPro.block.presetPropertyForTheNextClone':
          'preset [PROPERTY] of the next clone to[VALUE]',
        'witCat.dollyPro.block.presetSingleDataForTheNextClone':
          'preset [KEY] of the next clone to [VALUE]',
        'witCat.dollyPro.block.setMyID': '⚠️modify my ID to[ID]',
        'witCat.dollyPro.block.setOrChangeMyValueWithKey': 'my[KEY][OP][VALUE]',
        'witCat.dollyPro.block.setOrChangeValueOfCloneIDWithKey':
          '[KEY]of clone[ID][OP][VALUE]',
        'witCat.dollyPro.menu.dataop.change': 'change by',
        'witCat.dollyPro.menu.dataop.set': 'set to',
        'witCat.dollyPro.block.transferAccessToTargetXYToDollyDataKey':
          'transfer access to sprite coordinates and direction in the extension to the following key data: [X_NAME], [Y_NAME], [DIR_NAME] (optional)',
        'witCat.dollyPro.defaultValue.HP': 'health point',
        'witCat.dollyPro.defaultValue.direction': 'direction',
        'witCat.dollyPro.defaultValue.enemy': 'enemy',
        'witCat.dollyPro.defaultValue.player': 'player',
        'witCat.dollyPro.defaultValue.presetJSON':
          '\'{"name":"common soldier ","HP":100,"team":"red"}\'',
        'witCat.dollyPro.menu.cloneProperty.IDList': 'list of IDs',
        'witCat.dollyPro.menu.cloneProperty.allSprite': 'all sprites',
        'witCat.dollyPro.menu.cloneProperty.anySprite': 'any sprite',
        'witCat.dollyPro.menu.cloneProperty.count': 'number',
        'witCat.dollyPro.menu.cloneProperty.json': 'JSON',
        'witCat.dollyPro.menu.cloneProperty.myself': 'myself',
        'witCat.dollyPro.menu.spriteProperty._size': 'size',
        'witCat.dollyPro.menu.spriteProperty._visible': 'visible?',
        'witCat.dollyPro.menu.spriteProperty._x': 'x position',
        'witCat.dollyPro.menu.spriteProperty._y': 'y position',
        'witCat.dollyPro.menu.spriteProperty.currentCostume': 'costume number',
        'witCat.dollyPro.menu.spriteProperty.currentCostumeName':
          'costume name',
        'witCat.dollyPro.menu.spriteProperty.direction': 'direction',
        'witCat.dollyPro.menu.spriteProperty.id': 'ID',
        'witCat.dollyPro.menu.spriteProperty.name': 'sprite name',
        'witCat.dollyPro.menu.spriteProperty.dataJSON': 'data in JSON format',
        'witCat.dollyPro.menu.color': 'color effect',
        'witCat.dollyPro.menu.fisheye': 'fisheye effect',
        'witCat.dollyPro.menu.whirl': 'whirl effect',
        'witCat.dollyPro.menu.pixelate': 'pixelate effect',
        'witCat.dollyPro.menu.mosaic': 'mosaic effect',
        'witCat.dollyPro.menu.brightness': 'brightness effect',
        'witCat.dollyPro.menu.ghost': 'ghost effect',

        'witCat.dollyPro.block.broadcastToClone':
          'send private message[MSG] to clone[MENU][VALUE], with data[data]',
        'witCat.dollyPro.block.receiveMyBroadcast':
          'when I receive private message[MSG] for me. data=[data]，senderID=[senderID]',
        'witCat.dollyPro.defaultValue.MSGName': 'message1',
        'witCat.dollyPro.defaultValue.MSGInfo': 'data',
        'witCat.dollyPro.block.setCloneProperty':
          '[PROPERTY]of clone[ID][OP][VALUE]',
      },
    });
  }

  formatMessage(id) {
    id = `witCat.dollyPro.${id}`;
    return this.fm({
      id,
      default: id,
      description: id,
    });
  }

  getHats() {
    return {
      'witCat.dollyPro_dispatchWhenCloned': {},
      'witCat.dollyPro_dispatchWhenCloneDeleted': {},
      'witCat.dollyPro_initTheClone': {},
      'witCat.dollyPro_beforeDeletionOfTheClone': {},
      'witCat.dollyPro_receiveMyBroadcast': {},
    };
  }

  getInfo() {
    return {
      id: extensionId,
      name: this.formatMessage('name'),
      menuIconURI: icon,
      blockIconURI: icon,
      color1: '#FA8D0D',
      blocks: [
        // 扩展文档按钮
        {
          blockType: 'button',
          text: this.formatMessage('urlButton'),
          onClick: () => {
            const a = document.createElement('a');
            a.href = this.formatMessage('url');
            a.rel = 'noopener noreferrer';
            a.target = '_blank';
            a.click();
          },
        },
        // 按钮：显示不常用积木
        {
          blockType: 'button',
          hideFromPalette: !this.hideExtraBlocks,
          text: this.formatMessage('button.showBlock'),
          onClick: () => {
            if (confirm(this.formatMessage('confirm.showBlock?'))) {
              this.hideExtraBlocks = false;
              this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
            }
          },
        },
        // 按钮：隐藏不常用积木
        {
          blockType: 'button',
          text: this.formatMessage('button.hideBlock'),
          hideFromPalette: this.hideExtraBlocks,
          onClick: () => {
            this.hideExtraBlocks = true;
            this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
          },
        },
        '---' + this.formatMessage('tag.utils'),
        // 判断我是克隆体/本体吗
        {
          opcode: 'isCloneOrIsOriginal',
          blockType: BlockType.BOOLEAN,
          filter: [TargetType.SPRITE],
          text: this.formatMessage('block.isCloneOrIsOriginal'),
          arguments: {
            TYPE: {
              type: ArgumentType.STRING,
              menu: 'CLONE_OR_ORIGINAL_MENU',
            },
          },
        },
        // 获取角色的克隆体数量/ID表
        {
          opcode: 'getCloneTargetPropertyWithSpriteName',
          blockType: BlockType.REPORTER,
          text: this.formatMessage(
            'block.getCloneTargetPropertyWithSpriteName'
          ),
          arguments: {
            TARGET: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_ALL',
            },
            PROPERTY: {
              type: ArgumentType.STRING,
              menu: 'CLONE_PROPERTY',
            },
          },
        },
        // 获取角色ID等信息
        {
          opcode: 'getOriginalTargetPropertyWithSpriteName',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage(
            'block.getOriginalTargetPropertyWithSpriteName'
          ),
          arguments: {
            TARGET: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU',
            },
            PROPERTY: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_PROPERTY',
            },
          },
        },
        '---' + this.formatMessage('tag.event'),
        // 克隆体启动前执行的动作
        {
          blockType: BlockType.EVENT,
          opcode: 'initTheClone',
          filter: [TargetType.SPRITE],
          hideFromPalette: this.hideExtraBlocks,
          text: this.formatMessage('block.initTheClone'),
          isEdgeActivated: false,
        },
        // 克隆体删除前执行动作
        {
          blockType: BlockType.EVENT,
          opcode: 'beforeDeletionOfTheClone',
          filter: [TargetType.SPRITE],
          hideFromPalette: this.hideExtraBlocks,
          text: this.formatMessage('block.beforeDeletionOfTheClone'),
          isEdgeActivated: false,
        },
        // 当有克隆体被克隆
        {
          opcode: 'dispatchWhenCloned',
          blockType: BlockType.HAT,
          isEdgeActivated: false,
          text: this.formatMessage('block.dispatchWhenCloned'),
          arguments: {
            TARGET: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_ANY',
            },
            ID: {
              type: 'ccw_hat_parameter',
            },
          },
        },
        // 当有克隆体被删除
        {
          opcode: 'dispatchWhenCloneDeleted',
          blockType: BlockType.HAT,
          isEdgeActivated: false,
          text: this.formatMessage('block.dispatchWhenCloneDeleted'),
          arguments: {
            TARGET: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_ANY',
            },
            ID: {
              type: 'ccw_hat_parameter',
            },
          },
        },
        '---',
        // 朝特定克隆体广播
        {
          opcode: 'broadcastToClone',
          blockType: BlockType.COMMAND,
          filter: [TargetType.SPRITE],
          text: this.formatMessage('block.broadcastToClone'),
          arguments: {
            MENU: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_OR_GROUP_OR_ID_MENU',
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
            MSG: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.MSGName'),
            },
            data: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.MSGInfo'),
            },
          },
        },
        // 当我收到私有广播
        {
          opcode: 'receiveMyBroadcast',
          blockType: BlockType.HAT,
          isEdgeActivated: false,
          shouldRestartExistingThreads: false,
          text: this.formatMessage('block.receiveMyBroadcast'),
          arguments: {
            MSG: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.MSGName'),
            },
            data: {
              type: 'ccw_hat_parameter',
            },
            senderID: {
              type: 'ccw_hat_parameter',
            },
          },
        },
        '---' + this.formatMessage('tag.cloneAndDelete'),
        // 预设克隆体 x/y/方向...
        {
          opcode: 'presetPropertyForTheNextClone',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('block.presetPropertyForTheNextClone'),
          arguments: {
            PROPERTY: {
              type: ArgumentType.STRING,
              menu: 'PRESET_PROPERTY',
              defaultValue: 'x',
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: '30',
            },
          },
        },
        // 预设克隆体单条key数据
        {
          opcode: 'presetSingleDataForTheNextClone',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('block.presetSingleDataForTheNextClone'),
          arguments: {
            KEY: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.HP'),
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: '100',
            },
          },
        }, // 预设克隆体数据JSON
        {
          opcode: 'presetDataforTheNextCloneInJSONFormat',
          blockType: BlockType.COMMAND,
          hideFromPalette: this.hideExtraBlocks,
          text: this.formatMessage(
            'block.presetDataforTheNextCloneInJSONFormat'
          ),
          arguments: {
            DATA_JSON: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.presetJSON'),
            },
          },
        },
        // 预设克隆体分组
        {
          opcode: 'presetGroupForTheNextClone',
          blockType: BlockType.COMMAND,
          hideFromPalette: this.hideExtraBlocks,
          text: this.formatMessage('block.presetGroupForTheNextClone'),
          arguments: {
            GROUP: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
          },
        },
        '---',
        // 克隆并指定ID
        {
          opcode: 'createCloneAndSpecifyID',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('block.createCloneAndSpecifyID'),
          arguments: {
            TARGET: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_MENU_WITH_MYSELF',
            },
            ID: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.player'),
            },
          },
        },
        // 获取刚刚产生的克隆体的ID
        {
          opcode: 'getJustCreatedCloneID',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('block.getJustCreatedCloneID'),
        },
        {
          opcode: 'deleteCloneByID',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('block.deleteCloneByID'),
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.player'),
            },
          },
        },
        // 克隆体存在？
        {
          opcode: 'ifCloneExists',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('block.ifCloneExists'),
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.player'),
            },
          },
        },
        '---' + this.formatMessage('tag.data'),
        // 读取我的信息：ID/x坐标/y坐标...
        {
          opcode: 'getMyProperty',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: this.formatMessage('block.getMyProperty'),
          arguments: {
            PROPERTY: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_PROPERTY',
            },
          },
        },
        // 读取我的多莉Key数据
        {
          opcode: 'getMyValueByKey',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('block.getMyValueByKey'),
          arguments: {
            KEY: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.HP'),
            },
          },
        },
        // 设置我的多莉Key数据
        {
          opcode: 'setOrChangeMyValueWithKey',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('block.setOrChangeMyValueWithKey'),
          arguments: {
            KEY: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.HP'),
            },
            OP: {
              type: ArgumentType.STRING,
              menu: 'DATA_OPEATION_MENU',
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: '100',
            },
          },
        },
        '---',
        // 读取克隆体的信息：ID/x坐标/y坐标...
        {
          opcode: 'getClonePropertyWithID',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('block.getClonePropertyWithID'),
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.player'),
            },
            PROPERTY: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_PROPERTY',
              defaultValue: '_x',
            },
          },
        },
        // 读取克隆体的多莉Key数据
        {
          opcode: 'getValueOfCloneIDWithKey',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('block.getValueOfCloneIDWithKey'),
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.player'),
            },
            KEY: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.HP'),
            },
          },
        },
        // 设置克隆体的多莉Key数据
        {
          opcode: 'setOrChangeValueOfCloneIDWithKey',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('block.setOrChangeValueOfCloneIDWithKey'),
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.player'),
            },
            KEY: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.HP'),
            },
            OP: {
              type: ArgumentType.STRING,
              menu: 'DATA_OPEATION_MENU',
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: '100',
            },
          },
        },
        // 设置克隆体的property
        {
          opcode: 'setCloneProperty',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('block.setCloneProperty'),
          hideFromPalette: this.hideExtraBlocks,
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.player'),
            },
            PROPERTY: {
              type: ArgumentType.STRING,
              menu: 'PRESET_PROPERTY',
            },
            OP: {
              type: ArgumentType.STRING,
              menu: 'DATA_OPEATION_MENU',
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: '100',
            },
          },
        },
        '---' + this.formatMessage('tag.group'),
        // 将我加入/移出分组
        {
          opcode: 'addOrRemoveMyselfFromGroup',
          blockType: BlockType.COMMAND,
          filter: [TargetType.SPRITE],
          text: this.formatMessage('block.addOrRemoveMyselfFromGroup'),
          arguments: {
            OP: {
              type: ArgumentType.STRING,
              menu: 'ADD_OR_REMOVE',
            },
            GROUP: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
          },
        },
        // 将克隆体加入/移出分组
        {
          opcode: 'addOrRemoveIDFromGroup',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('block.addOrRemoveIDFromGroup'),
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: 'ID',
            },
            OP: {
              type: ArgumentType.STRING,
              menu: 'ADD_OR_REMOVE',
            },
            GROUP: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
          },
        },
        // 克隆体在分组里吗？
        {
          opcode: 'ifCloneInGroup',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('block.ifCloneInGroup'),
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: 'ID',
            },
            GROUP: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
          },
        },
        '---',
        // 获取分组信息：克隆体数/ID表
        {
          opcode: 'getGroupInfo',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('block.getGroupInfo'),
          arguments: {
            GROUP: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
            PROPERTY: {
              type: ArgumentType.STRING,
              menu: 'CLONE_PROPERTY',
            },
          },
        },
        // 获取分组中克隆体的ID/x/y/...
        {
          opcode: 'getClonePropertyInGroup',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('block.getClonePropertyInGroup'),
          arguments: {
            GROUP: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
            INDEX: {
              type: ArgumentType.NUMBER,
              defaultValue: 1,
            },
            PROPERTY: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_PROPERTY',
            },
          },
        },
        // 将分组中，克隆体的ID列表导入原版列表
        {
          opcode: 'importGroupIntoList',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('block.importGroupIntoList'),
          arguments: {
            GROUP: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
            OP: {
              type: ArgumentType.STRING,
              menu: 'LIST_OP_MENU',
            },
            LIST: {
              type: ArgumentType.STRING,
              menu: 'LIST_MENU',
            },
          },
        },
        // 遍历分组的每个克隆体
        {
          opcode: 'forEachWithGroup',
          blockType: BlockType.CONDITIONAL,
          text: [this.formatMessage('block.forEachWithGroup')],
          branchCount: 1,
          hideFromPalette: this.hideExtraBlocks,
          arguments: {
            GROUP: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
          },
        },
        // 当前遍历的克隆体ID
        {
          opcode: 'cloneIDOfForEach',
          blockType: BlockType.REPORTER,
          hideFromPalette: this.hideExtraBlocks,
          text: this.formatMessage('block.cloneIDOfForEach'),
          disableMonitor: true,
        },
        '---' + this.formatMessage('tag.sensing'),
        // 获取分组..中最近克隆体ID
        {
          opcode: 'getNearestClone',
          blockType: BlockType.REPORTER,
          filter: [TargetType.SPRITE],
          text: this.formatMessage('block.getNearestClone'),
          arguments: {
            TYPE: {
              type: ArgumentType.STRING,
              menu: 'NEAREST_OR_FARTHEST',
            },
            MENU: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_OR_GROUP_MENU',
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
          },
        },
        // 判断是否碰到克隆体
        {
          opcode: 'isTouchingClone',
          blockType: BlockType.BOOLEAN,
          filter: [TargetType.SPRITE],
          text: this.formatMessage('block.isTouchingClone'),
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: 'ID',
            },
            MENU: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_OR_GROUP_OR_ID_MENU',
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
          },
        },
        // 克隆体是否碰到克隆体
        {
          opcode: 'isCloneTouchingClone',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('block.isCloneTouchingClone'),
          hideFromPalette: this.hideExtraBlocks,
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: 'ID',
            },
            MENU: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_OR_GROUP_OR_ID_MENU',
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
          },
        },
        // 获取碰到的克隆体ID
        {
          opcode: 'getTouchingID',
          blockType: BlockType.REPORTER,
          filter: [TargetType.SPRITE],
          text: this.formatMessage('block.getTouchingID'),
          arguments: {
            MENU: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_OR_GROUP_MENU',
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
            TYPE: {
              type: ArgumentType.STRING,
              menu: 'ONE_OR_ALL_MENU',
            },
          },
        },
        // 将碰到的克隆体ID导入列表
        {
          opcode: 'importTouchingIDsIntoList',
          blockType: BlockType.COMMAND,
          filter: [TargetType.SPRITE],
          text: this.formatMessage('block.importTouchingIDsIntoList'),
          arguments: {
            MENU: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_OR_GROUP_MENU',
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
            OP: {
              type: ArgumentType.STRING,
              menu: 'LIST_OP_MENU',
            },
            LIST: {
              type: ArgumentType.STRING,
              menu: 'LIST_MENU',
            },
          },
        },
        // 判断克隆体是否碰到点xy
        {
          opcode: 'isCloneTouchingCoord',
          blockType: BlockType.BOOLEAN,
          hideFromPalette: this.hideExtraBlocks,
          text: this.formatMessage('block.isCloneTouchingCoord'),
          arguments: {
            X: {
              type: ArgumentType.NUMBER,
              defaultValue: 114,
            },
            Y: {
              type: ArgumentType.NUMBER,
              defaultValue: 514,
            },
            MENU: {
              type: ArgumentType.STRING,
              menu: 'SPRITE_OR_GROUP_OR_ID_MENU',
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
          },
        },
        // 点xy最顶层的克隆体/角色ID
        {
          opcode: 'pickTarget',
          blockType: BlockType.REPORTER,
          hideFromPalette: this.hideExtraBlocks,
          text: this.formatMessage('block.pickTarget'),
          arguments: {
            X: {
              type: ArgumentType.NUMBER,
              defaultValue: 114,
            },
            Y: {
              type: ArgumentType.NUMBER,
              defaultValue: 514,
            },
          },
        },
        '---' + this.formatMessage('tag.motion'),
        // 计算我到克隆体..的距离/方向/角度差/..
        {
          opcode: 'calcDistanceToClone',
          blockType: BlockType.REPORTER,
          filter: [TargetType.SPRITE],
          text: this.formatMessage('block.calcDistanceToClone'),
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.player'),
            },
            MENU: {
              type: ArgumentType.STRING,
              menu: 'CALC_DIS_OR_DIR_MENU',
            },
          },
        },
        // 计算克隆体1到克隆体2的距离/方向/角度差/..
        {
          opcode: 'calcDistanceBetweenClones',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('block.calcDistanceBetweenClones'),
          arguments: {
            ID1: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.player'),
            },
            ID2: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.enemy'),
            },
            MENU: {
              type: ArgumentType.STRING,
              menu: 'CALC_DIS_OR_DIR_MENU',
            },
          },
        },
        // 移到/面向克隆体
        {
          opcode: 'moveToClone',
          blockType: BlockType.COMMAND,
          filter: [TargetType.SPRITE],
          text: this.formatMessage('block.moveToClone'),
          arguments: {
            MOTION: {
              type: ArgumentType.STRING,
              menu: 'MOVE_TO_OR_POINT_AT',
            },
            ID: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.player'),
            },
          },
        },
        // 朝克隆体移动/旋转
        {
          opcode: 'moveStepsToClone',
          blockType: BlockType.COMMAND,
          filter: [TargetType.SPRITE],
          text: this.formatMessage('block.moveStepsToClone'),
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.player'),
            },
            MOTION: {
              type: ArgumentType.STRING,
              menu: 'MOVE_OR_ROTATE',
            },
            VALUE: {
              type: ArgumentType.NUMBER,
              defaultValue: 10,
            },
          },
        },
        ...(this.hideExtraBlocks
          ? []
          : ['---' + this.formatMessage('tag.test')]),
        // 修改我的ID
        {
          opcode: 'setMyID',
          blockType: BlockType.COMMAND,
          hideFromPalette: this.hideExtraBlocks,
          text: this.formatMessage('block.setMyID'),
          arguments: {
            ID: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.player'),
            },
          },
        },
        // 转移x/y/方向的访问
        {
          opcode: 'transferAccessToTargetXYToDollyDataKey',
          blockType: BlockType.COMMAND,
          hideFromPalette: this.hideExtraBlocks,
          text: this.formatMessage(
            'block.transferAccessToTargetXYToDollyDataKey'
          ),
          arguments: {
            X_NAME: {
              type: ArgumentType.STRING,
              defaultValue: 'x',
            },
            Y_NAME: {
              type: ArgumentType.STRING,
              defaultValue: 'y',
            },
            DIR_NAME: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('defaultValue.direction'),
            },
          },
        },
        //取消x/y/方向的访问转移
        {
          opcode: 'cancelAccessTransfer',
          hideFromPalette: this.hideExtraBlocks,
          blockType: BlockType.COMMAND,
          text: this.formatMessage('block.cancelAccessTransfer'),
        },
        // {
        //   opcode: 'test',
        //   blockType: BlockType.REPORTER,
        //   text: 'test ID[ID]',
        //   hideFromPalette: true,
        //   arguments: {
        //     ID: {
        //       type: ArgumentType.STRING,
        //       defaultValue: this.formatMessage('defaultValue.player'),
        //     },
        //   },
        // },
      ],
      menus: {
        NEAREST_OR_FARTHEST: {
          items: [
            {
              text: this.formatMessage('menu.nearest'),
              value: 'nearest',
            },
            {
              text: this.formatMessage('menu.farthest'),
              value: 'farthest',
            },
          ],
        },
        MOVE_OR_ROTATE: {
          items: [
            {
              text: this.formatMessage('menu.miton.rotateDegrees'),
              value: 'rotate',
            },
            {
              text: this.formatMessage('menu.miton.moveSteps'),
              value: 'move',
            },
          ],
        },
        MOVE_TO_OR_POINT_AT: {
          items: [
            {
              text: this.formatMessage('menu.miton.PointAt'),
              value: 'pointAt',
            },
            {
              text: this.formatMessage('menu.miton.moveTo'),
              value: 'moveTo',
            },
          ],
        },
        CALC_DIS_OR_DIR_MENU: {
          items: [
            {
              text: this.formatMessage('menu.calcBetweenClones.distance'),
              value: 'dis',
            },
            {
              text: this.formatMessage('menu.calcBetweenClones.direction'),
              value: 'dir',
            },
            {
              text: this.formatMessage(
                'menu.calcBetweenClones.angleDifference'
              ),
              value: 'angle',
            },
            {
              text: this.formatMessage(
                'menu.calcBetweenClones.absAngleDifference'
              ),
              value: 'absAngle',
            },
          ],
        },
        ADD_OR_REMOVE: {
          items: [
            {
              text: this.formatMessage('menu.addOrRemove.add'),
              value: 'add',
            },
            {
              text: this.formatMessage('menu.addOrRemove.remove'),
              value: 'remove',
            },
          ],
        },
        ONE_OR_ALL_MENU: {
          items: [
            {
              text: this.formatMessage('menu.oneOrAll.one'),
              value: 'one',
            },
            {
              text: this.formatMessage('menu.oneOrAll.all'),
              value: 'all',
            },
          ],
        },
        SPRITE_OR_GROUP_OR_ID_MENU: {
          items: [
            {
              text: this.formatMessage('menu.targetType.ID'),
              value: 'ID',
            },
            {
              text: this.formatMessage('menu.targetType.group'),
              value: 'group',
            },
            {
              text: this.formatMessage('menu.targetType.sprite'),
              value: 'sprite',
            },
          ],
        },
        SPRITE_OR_GROUP_MENU: {
          items: [
            {
              text: this.formatMessage('menu.targetType.group'),
              value: 'group',
            },
            {
              text: this.formatMessage('menu.targetType.sprite'),
              value: 'sprite',
            },
          ],
        },
        LIST_OP_MENU: {
          items: [
            {
              text: this.formatMessage('menu.listop.replace'),
              value: 'replace',
            },
            {
              text: this.formatMessage('menu.listop.insert'),
              value: 'insert',
            },
          ],
        },

        CLONE_OR_ORIGINAL_MENU: {
          items: [
            {
              text: this.formatMessage('menu.type.clone'),
              value: 'clone',
            },
            {
              text: this.formatMessage('menu.type.original'),
              value: 'original',
            },
          ],
        },
        DATA_OPEATION_MENU: {
          items: [
            {
              text: this.formatMessage('menu.dataop.set'),
              value: 'set',
            },
            {
              text: this.formatMessage('menu.dataop.change'),
              value: 'change',
            },
          ],
        },

        SPRITE_MENU: {
          items: '__spriteMenuWithEmptyChecking',
        },
        SPRITE_MENU_WITH_ALL: {
          items: '__spriteMenuWithAll',
        },
        SPRITE_MENU_WITH_ANY: {
          items: '__spriteMenuWithAny',
        },
        SPRITE_MENU_WITH_MYSELF: {
          acceptReporters: true,
          items: '__spriteMenuWithMyself',
        },

        LIST_MENU: {
          items: '__listMenu',
        },
        PRESET_PROPERTY: {
          items: [
            {
              text: this.formatMessage('menu.spriteProperty._x'),
              value: 'x',
            },
            {
              text: this.formatMessage('menu.spriteProperty._y'),
              value: 'y',
            },
            {
              text: this.formatMessage('menu.spriteProperty._size'),
              value: 'size',
            },
            {
              text: this.formatMessage('menu.spriteProperty._visible'),
              value: 'visible',
            },
            {
              text: this.formatMessage('menu.spriteProperty.direction'),
              value: 'direction',
            },
            {
              text: this.formatMessage(
                'menu.spriteProperty.currentCostumeName'
              ),
              value: 'currentCostumeName',
            },
            {
              text: this.formatMessage('menu.color'),
              value: 'color',
            },
            {
              text: this.formatMessage('menu.fisheye'),
              value: 'fisheye',
            },
            {
              text: this.formatMessage('menu.whirl'),
              value: 'whirl',
            },
            {
              text: this.formatMessage('menu.pixelate'),
              value: 'pixelate',
            },
            {
              text: this.formatMessage('menu.mosaic'),
              value: 'mosaic',
            },
            {
              text: this.formatMessage('menu.brightness'),
              value: 'brightness',
            },
            {
              text: this.formatMessage('menu.ghost'),
              value: 'ghost',
            },
          ],
        },
        SPRITE_PROPERTY: {
          items: [
            {
              text: this.formatMessage('menu.spriteProperty.id'),
              value: 'id',
            },
            {
              text: this.formatMessage('menu.spriteProperty._x'),
              value: '_x',
            },
            {
              text: this.formatMessage('menu.spriteProperty._y'),
              value: '_y',
            },
            {
              text: this.formatMessage('menu.spriteProperty.name'),
              value: 'name',
            },
            {
              text: this.formatMessage('menu.spriteProperty._size'),
              value: '_size',
            },
            {
              text: this.formatMessage('menu.spriteProperty._visible'),
              value: '_visible',
            },
            {
              text: this.formatMessage('menu.spriteProperty.direction'),
              value: 'direction',
            },
            {
              text: this.formatMessage('menu.spriteProperty.currentCostume'),
              value: 'currentCostume',
            },
            {
              text: this.formatMessage(
                'menu.spriteProperty.currentCostumeName'
              ),
              value: 'currentCostumeName',
            },
            {
              text: this.formatMessage('menu.spriteProperty.dataJSON'),
              value: 'dataJSON',
            },
            {
              text: this.formatMessage('menu.color'),
              value: 'color',
            },
            {
              text: this.formatMessage('menu.fisheye'),
              value: 'fisheye',
            },
            {
              text: this.formatMessage('menu.whirl'),
              value: 'whirl',
            },
            {
              text: this.formatMessage('menu.pixelate'),
              value: 'pixelate',
            },
            {
              text: this.formatMessage('menu.mosaic'),
              value: 'mosaic',
            },
            {
              text: this.formatMessage('menu.brightness'),
              value: 'brightness',
            },
            {
              text: this.formatMessage('menu.ghost'),
              value: 'ghost',
            },
          ],
        },
        CLONE_PROPERTY: {
          items: [
            {
              text: this.formatMessage('menu.cloneProperty.count'),
              value: 'count',
            },
            // {
            //   text: this.formatMessage('menu.cloneProperty.json'),
            //   value: 'json',
            // },
            {
              text: this.formatMessage('menu.cloneProperty.IDList'),
              value: 'IDList',
            },
          ],
        },
      },
    };
  }

  // **************************** 动态菜单 ****************************
  /**
   * 获取角色菜单
   * @returns {[{text: "角色名", value: "角色名"}]};
   */
  __getSpriteMenu() {
    const targets = this.runtime.targets;

    return targets
      .filter((target) => {
        return !target.isStage && target.isOriginal;
      })
      .map((target) => {
        return {
          text: target.sprite.name,
          value: target.sprite.name,
        };
      });
  }
  /**
   * 角色菜单并检查是否为空
   * @returns {[{text: "角色名", value: "角色名"}]};
   */
  __spriteMenuWithEmptyChecking() {
    let menu = this.__getSpriteMenu();
    if (menu.length === 0) {
      menu.push({
        text: '-',
        value: 'empty',
      });
    }
    return menu;
  }
  /**
   * 角色菜单（但是多一项“所有”）
   * @returns {text: "角色名", value: "角色名"}[];
   */
  __spriteMenuWithAll() {
    let menu = this.__getSpriteMenu();
    menu.unshift({
      text: this.formatMessage('menu.cloneProperty.allSprite'),
      value: '_all_',
    });
    return menu;
  }
  /**
   * 角色菜单（但是多一项“任意角色”）
   * @returns {text: "角色名", value: "角色名"}[];
   */
  __spriteMenuWithAny() {
    let menu = this.__getSpriteMenu();
    menu.unshift({
      text: this.formatMessage('menu.cloneProperty.anySprite'),
      value: '_all_',
    });
    return menu;
  }
  /**
   * 角色菜单（但是多一项“自己”）
   * @returns {text: "角色名", value: "角色名"}[];
   */
  __spriteMenuWithMyself() {
    let menu = this.__spriteMenuWithEmptyChecking();
    //当前角色名称
    if (!this.runtime._editingTarget) return menu;
    const editingTargetName = this.runtime._editingTarget.sprite.name;
    //从列表删除自己
    let index = menu.findIndex((item) => item.value === editingTargetName);
    if (index !== -1) {
      menu.splice(index, 1);
    }
    //列表第一项插入“自己”
    if (this.runtime._editingTarget.isStage) return menu;
    menu.unshift({
      text: this.formatMessage('menu.cloneProperty.myself'),
      value: '_myself_',
    });
    return menu;
  }

  /**
   * Scratch列表的菜单
   * @returns {text: "列表名", value: "列表id"}[];
   */
  __listMenu() {
    const menus = [];
    let variables = this.runtime._stageTarget.variables;
    Object.keys(variables).forEach((variable) => {
      if (variables[variable].type === 'list') {
        menus.push({
          text: variables[variable].name,
          value: variables[variable].id,
        });
      }
    });
    try {
      variables = this.runtime._editingTarget.variables;
    } catch (e) {
      variables = 'error';
    }
    if (
      variables !== 'error' &&
      this.runtime._editingTarget !== this.runtime._stageTarget
    ) {
      Object.keys(variables).forEach((variable) => {
        if (variables[variable].type) {
          menus.push({
            text: `[PRIVATE] ${variables[variable].name}`,
            value: variables[variable].id,
          });
        }
      });
    }
    if (menus.length === 0) {
      menus.push({
        text: '-',
        value: 'empty',
      });
    }
    return menus;
  }

  // ************************ ↓一些工具函数 ************************

  /**
   * 向 target（克隆体/角色）注入 Dolly 数据（如果还没注入）
   * @param {ITarget} target 要注入的target
   * @param {string} ID 自定义ID（默认为原版的target.id)
   */
  injectDollyTarget(target, ID = target.id) {
    //已注入，退出
    if (target.DollyPro) return;

    // 狠狠注入多莉数据（doge）
    target.DollyPro = {
      ID: ID, // 克隆体多莉ID (不指定则默认为原版target.id)
      extraData: {}, // 克隆体的 KV 数据
      isInGroup: {}, // 记录是否在某个组，例如 isInGroup["敌人"] == true
    };
    //加入ID映射表
    this._IDtoTargets[target.DollyPro.ID] = target;
  }

  /**
   * 根据ID，获取target
   * @param {string} ID 克隆体的虚拟ID
   * @returns {ITarget} ID对应的target对象
   */
  getTargetByID(ID) {
    // 先从ID映射表找
    if (Object.prototype.hasOwnProperty.call(this._IDtoTargets, ID)) {
      return this._IDtoTargets[ID];
    }
    //  ID表没找到，再使用原版方法找
    let target = this.runtime.getTargetById(ID);
    if (target) {
      this.injectDollyTarget(target);
      return target;
    }
  }

  /** 读取target的ID */
  getIDOfTarget(target) {
    if (!target.DollyPro) this.injectDollyTarget(target);
    return target.DollyPro.ID;
  }

  /** 读取target的extraData */
  getExtraDataOfTarget(target) {
    if (!target.DollyPro) this.injectDollyTarget(target);
    return target.DollyPro.extraData;
  }

  /** 克隆体克隆后，进行一些处理（包括读取预设数据、触发hat） */
  __processCloneBeforeCreation(target) {
    // 读取预设KV数据
    target.DollyPro.extraData = Object.assign({}, this._clonePresetData);
    // 加入预设分组
    const ID = this.getIDOfTarget(target);
    for (const group in this._clonePresetGroups) {
      if (this._clonePresetGroups[group]) {
        target.DollyPro.isInGroup[group] = true;
        const list = this.getOrCreateGroupByName(group);
        list.push(ID);
      }
    }
    //读取预设属性（x、y、direction等）
    const presetProps = this._clonePresetProperties;
    for (const prop in presetProps) {
      this.__opPropertyOfTarget(target, prop, 'set', presetProps[prop]);
    }

    //读取结束后，清空预设数据
    this._clonePresetData = {};
    this._clonePresetProperties = {};
    this._clonePresetGroups = {};

    // 广播克隆体产生的hat
    this.runtime.startHatsWithParams('witCat.dollyPro_dispatchWhenCloned', {
      parameters: { ID },
      fields: { TARGET: target.sprite.name },
    });
    this.runtime.startHatsWithParams('witCat.dollyPro_dispatchWhenCloned', {
      parameters: { ID },
      fields: { TARGET: '_all_' },
    });
    // 劫持target.dispose
    if (!target.__dolly_orig_dispose) {
      target.__dolly_orig_dispose = target.dispose;
      target.dispose = this._hackedDispose;
    }
  }

  /**
   * 在移除 target(角色/克隆体)前，处理后事
   * @param {ITarget} target 即将被移除的target
   */
  _processTargetBeforeDeletion(target) {
    let ID;
    if (!target.DollyPro) {
      // 如果target没接入多莉系统
      ID = target.id;
    } else {
      //如果 target 接入多莉系统
      ID = target.DollyPro.ID;
      // 如果target是克隆体
      if (!target.isOriginal) {
        // 广播“有角色的克隆体被删除”的hat积木
        this.runtime.startHatsWithParams(
          'witCat.dollyPro_dispatchWhenCloneDeleted',
          {
            parameters: { ID },
            fields: { TARGET: target.sprite.name },
          }
        );
        this.runtime.startHatsWithParams(
          'witCat.dollyPro_dispatchWhenCloneDeleted',
          {
            parameters: { ID },
            fields: { TARGET: '_all_' },
          }
        );
        // 标记克隆体为正在删除
        target.DollyPro.isDeleting = true;
        // 触发“本克隆体即将删除”的hat积木
        const threads = this.runtime.startHats(
          'witCat.dollyPro_beforeDeletionOfTheClone',
          null,
          target
        );
        // 立即执行该 hat（克隆体执行完该hat后，就被立即删除）
        threads.forEach((thread) => {
          this.runtime.sequencer.stepThread(thread);
        });
      }

      // 从克隆体分组中移除 target
      for (const group in target.DollyPro.isInGroup) {
        const list = this.getGroupByName(group);
        if (!list) continue;
        const idx = list.indexOf(ID);
        if (idx === -1) continue;
        list.splice(idx, 1);
      }
    }
    // 从ID映射表移除target
    delete this._IDtoTargets[ID];
  }

  /**
   * 读取target的x,y,direction
   * @param {ITarget} target 要读取对象
   * @param  {...string} props 要读取的内容，例如'x','y','direction'
   * @returns {[number]} 读取结果，如[123,123]
   */
  _getTargetXYDir(target, ...props) {
    let res = [];
    for (const prop of props) {
      const key = this._accessTransfer[prop];
      if (key && !target.isPoint) res.push(this.__getDataOfTarget(target, key));
      else {
        res.push(target[prop]);
      }
    }
    if (res.length < 2) return res[0];
    return res;
  }
  /** 周期裁剪（例如11裁剪到1~10,返回1）*/
  __wrapClamp(n, min, max) {
    const range = max - min + 1;
    return n - Math.floor((n - min) / range) * range;
  }
  /** 普通裁剪 */
  __clamp(n, min, max) {
    return Math.min(Math.max(n, min), max);
  }
  /**
   * 设置target的x,y,direction
   * @param {ITarget} target 要设置的对象
   * @param  {object} props 要设置内容，如{x:['set',123], y:['change',123], direction:['set',123]}
   */
  _setTargetXYDir(target, props) {
    let newX, newY;
    for (const prop in props) {
      const op = props[prop][0];
      const value = props[prop][1];
      const key = this._accessTransfer[prop];
      if (key) {
        this.__setOrChangeDataOfTarget(target, key, op, value);
        if (prop === 'direction') {
          const dir = this.__wrapClamp(
            this.__getDataOfTarget(target, key),
            -179,
            180
          );
          this.__setOrChangeDataOfTarget(target, key, 'set', dir);
        }
      } else {
        switch (prop) {
          case 'x':
            if (op === 'set') newX = value;
            else newX = target._x + value;
            break;
          case 'y':
            if (op === 'set') newY = value;
            else newY = target._y + value;
            break;
          case 'direction':
            if (op === 'set') target.setDirection(value);
            else target.setDirection(target.direction + value);
            break;
          default:
            break;
        }
      }
    }
    if (newX !== undefined || newY !== undefined) {
      target.setXY(newX ?? target.x, newY ?? target.y);
    }
  }

  /**
   * 获取克隆体分组（不自动创建）
   * @param {String} groupName 分组名
   * @return {[[ID: string]]} 克隆体分组ID表
   */
  getGroupByName(groupName) {
    return this._groupsOfClones[groupName];
  }

  /**
   * 获取克隆体分组（如果没有则创建分组）
   * @param {String} groupName 分组名
   * @return {[[ID: string]]} 克隆体分组ID表
   */
  getOrCreateGroupByName(groupName) {
    if (
      !Object.prototype.hasOwnProperty.call(this._groupsOfClones, groupName)
    ) {
      this._groupsOfClones[groupName] = [];
    }
    return this._groupsOfClones[groupName];
  }

  /**
   * 将 target 加入分组
   * @param {ITarget} target 要加入的target
   * @param {string} group 分组名
   */
  addTargetToGroup(target, group) {
    if (!target.DollyPro) this.injectDollyTarget(target);
    // 已加入分组，直接返回
    if (target.DollyPro.isInGroup[group]) return;
    // 标记为加入分组
    target.DollyPro.isInGroup[group] = true;
    // 获取克隆体分组列表，不存在则创建
    const list = this.getOrCreateGroupByName(group);
    const ID = this.getIDOfTarget(target);
    if (list.includes(ID)) return;
    list.push(ID);
  }

  /**
   * 将 target 移出分组
   * @param {ITarget} target 要移出的target
   * @param {string} group 分组名
   */
  removeTargetFromGroup(target, group) {
    if (!target.DollyPro) this.injectDollyTarget(target);
    // 不在分组中，直接返回
    if (!target.DollyPro.isInGroup[group]) return;
    // 标记为移出分组
    delete target.DollyPro.isInGroup[group];
    // 获取克隆体分组列表
    const list = this.getGroupByName(group);
    // 分组不存在则直接返回
    if (!list) return;
    const ID = this.getIDOfTarget(target);
    const idx = list.indexOf(ID);
    // target不在分组中，直接返回
    if (idx === -1) return;
    // 将target移出分组
    list.splice(idx, 1);
  }

  // ************************ ↑一些工具函数 ************************

  /** 获取刚产生的克隆体的ID */
  getJustCreatedCloneID() {
    return this.justCreatedCloneID;
  }

  dispatchWhenCloned() {
    return true;
  }

  dispatchWhenCloneDeleted() {
    return true;
  }

  /**
   * 朝ID/分组/角色克隆体广播
   * @param {'ID'|'group'|'sprite'} MENU ID/group/sprite
   * @param {string} VALUE ID内容/组名/角色名
   * @param {string} MSG 信息名
   * @param {*} data 附带信息
   */
  broadcastToClone({ VALUE, MENU, MSG, data }, util) {
    const targets = this._getClonesOfGroupOrSprite(MENU, Cast.toString(VALUE));
    if (!targets || targets.length === 0) return;
    const senderID = this.getIDOfTarget(util.target);
    targets.forEach((target) => {
      util.startHatsWithParams(
        'witCat.dollyPro_receiveMyBroadcast',
        {
          parameters: { data, senderID },
          // 根据hat中的 TEXT 输入，过滤hat积木
          fields: { TEXT: Cast.toString(MSG) },
        },
        target
      );
    });
  }

  receiveMyBroadcast() {
    return true;
  }

  test(args) {
    console.log('IDmap:', this._IDtoTargets);
    console.log('targets:', this.runtime.targets);
    return Cast.toString(this.getTargetByID(args.ID));
  }

  /**
   * 修改角色ID
   * @param {ID} 修改后的ID
   */
  setMyID({ ID }, util) {
    const newID = Cast.toString(ID);
    const oldID = this.getIDOfTarget(util.target);
    // 旧ID和新ID一样，直接返回
    if (oldID === newID) {
      console.warn(`多莉pro：修改的角色ID已经是${oldID}!`);
      return;
    }
    // ID重复
    if (this.getTargetByID(newID)) {
      console.warn(
        `多莉pro：已存在ID为${newID}的克隆体或角色，请不要设置相同 ID！`
      );
      return;
    }
    util.target.DollyPro.ID = newID;
    this._IDtoTargets[newID] = this._IDtoTargets[oldID];
    delete this._IDtoTargets[oldID];
    // 更新分组信息里的ID
    Object.values(this._groupsOfClones).forEach((group) => {
      const idx = group.indexOf(oldID);
      if (idx !== -1) {
        group[idx] = newID;
      }
    });
  }

  transferAccessToTargetXYToDollyDataKey({ X_NAME, Y_NAME, DIR_NAME }) {
    const X = Cast.toString(X_NAME);
    const Y = Cast.toString(Y_NAME);
    const DIR = Cast.toString(DIR_NAME);
    this._accessTransfer.x = X === '' ? null : X;
    this._accessTransfer.y = Y === '' ? null : Y;
    this._accessTransfer.direction = DIR === '' ? null : DIR;
  }

  cancelAccessTransfer() {
    this._accessTransfer = {};
  }

  // ************************ 普通积木 ************************

  /** 某个ID的克隆体是否存在 */
  ifCloneExists({ ID }) {
    return !!this.getTargetByID(Cast.toString(ID));
  }

  /**
   * 计算两克隆体间的距离/方向/角度差/角度差绝对值
   * @param {ITarget} target1 克隆体ID1
   * @param {ITarget} target2 克隆体ID2
   * @param {'dis'|'dir'|'angle'|'absAngle'} MENU 计算菜单：dis/dir/angle/absAngle
   * @returns {number} 计算结果
   */
  _calcInfoBetweenTargets(target1, target2, MENU) {
    if (MENU === 'dis') {
      return this._calcDistanceBetweenTargets(target1, target2);
    }

    let dir = this._calcDirectionBetweenTargets(target1, target2);
    if (MENU === 'dir') {
      return dir;
    }
    let diff = this._calcDifferenceFromDir1ToDir2(target1.direction, dir);
    if (MENU === 'angle') return diff;
    return Math.abs(diff);
  }

  _calcDirectionBetweenTargets(target1, target2) {
    const [X1, Y1] = this._getTargetXYDir(target1, 'x', 'y');
    const [X2, Y2] = this._getTargetXYDir(target2, 'x', 'y');
    let dir =
      (Math.atan((X2 - X1) / (Y2 - Y1)) / Math.PI) * 180 + (Y1 > Y2 ? 180 : 0);
    if (dir > 180) dir -= 360;
    return dir;
  }

  _calcDistanceBetweenTargets(target1, target2) {
    const [X1, Y1] = this._getTargetXYDir(target1, 'x', 'y');
    const [X2, Y2] = this._getTargetXYDir(target2, 'x', 'y');
    return Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2);
  }

  _calcDifferenceFromDir1ToDir2(dir1, dir2) {
    let dif = dir2 - dir1;
    dif -= Math.round(dif / 360) * 360;
    if (dif === -180) dif = 180;
    return dif;
  }

  /** 计算当前角色到ID克隆体的距离/方向/角度差信息 */
  calcDistanceToClone({ ID, MENU }, util) {
    const target = this.getTargetByID(Cast.toString(ID));
    if (!target) return 0;
    return this._calcInfoBetweenTargets(util.target, target, MENU);
  }
  /** 计算ID1到ID2的距离/方向/角度差信息 */
  calcDistanceBetweenClones({ ID1, ID2, MENU }) {
    const target1 = this.getTargetByID(Cast.toString(ID1));
    if (!target1) return 0;
    const target2 = this.getTargetByID(Cast.toString(ID2));
    if (!target2) return 0;
    return this._calcInfoBetweenTargets(target1, target2, MENU);
  }
  /** 计算ID1到ID2的距离/方向/角度差信息 */
  moveToClone({ MOTION, ID }, util) {
    const target = this.getTargetByID(Cast.toString(ID));
    if (!target) return;
    const [tx, ty] = this._getTargetXYDir(target, 'x', 'y');
    if (MOTION === 'moveTo') {
      this._setTargetXYDir(util.target, { x: ['set', tx], y: ['set', ty] });
    } else {
      const dir = this._calcDirectionBetweenTargets(util.target, target);
      if (dir.isNaN) return;
      this._setTargetXYDir(util.target, { direction: ['set', dir] });
    }
  }
  /**
   * 朝target移动步数/旋转角度
   * @param {*} target
   * @param {'move'|'rotate'} MOTION
   * @param {number} velocity
   * @returns
   */
  _moveStepsToTarget(target, MOTION, velocity, util) {
    if (!target) return;
    const [tx, ty] = this._getTargetXYDir(target, 'x', 'y');
    if (MOTION === 'move') {
      const dis = this._calcDistanceBetweenTargets(util.target, target);
      if (dis <= velocity) {
        // 距离比移动距离小，直接移到目标
        this._setTargetXYDir(util.target, { x: ['set', tx], y: ['set', ty] });
      } else {
        // 否则，朝目标位置移动
        const [myX, myY] = this._getTargetXYDir(util.target, 'x', 'y');
        const dx = ((tx - myX) * velocity) / dis;
        const dy = ((ty - myY) * velocity) / dis;
        this._setTargetXYDir(util.target, {
          x: ['change', dx],
          y: ['change', dy],
        });
      }
    } else {
      const dir = this._calcDirectionBetweenTargets(util.target, target);
      if (dir.isNaN) return;
      const myDir = this._getTargetXYDir(util.target, 'direction');
      const diff = this._calcDifferenceFromDir1ToDir2(myDir, dir);
      if (Math.abs(diff) <= velocity) {
        // 角度差比转速小，直接面向目标
        this._setTargetXYDir(util.target, { direction: ['set', dir] });
      } else {
        // 否则，朝目标旋转
        this._setTargetXYDir(util.target, {
          direction: ['change', diff > 0 ? velocity : -velocity],
        });
      }
    }
  }
  /** 朝克隆体移动步数/旋转角度 */
  moveStepsToClone({ ID, MOTION, VALUE }, util) {
    const target = this.getTargetByID(Cast.toString(ID));
    const velocity = Cast.toNumber(VALUE);
    if (!target) return;
    this._moveStepsToTarget(target, MOTION, velocity, util);
  }

  presetGroupForTheNextClone({ GROUP }) {
    this._clonePresetGroups[String(GROUP)] = true;
  }

  cloneIDOfForEach(args, util) {
    return this.forEachIndex[util.thread.topBlock] ?? '';
  }

  forEachWithGroup(args, util) {
    const groupList = this.getGroupByName(Cast.toString(args.GROUP));
    if (!groupList) return;

    const times = groupList.length;
    if (times === 0) return;

    if (typeof util.stackFrame.loopCounter === 'undefined') {
      util.stackFrame.loopCounter = times;
    }

    util.stackFrame.loopCounter--;
    const idx = times - util.stackFrame.loopCounter - 1;
    if (idx > times - 1) return;
    this.forEachIndex[util.thread.topBlock] = groupList[idx];

    if (util.stackFrame.loopCounter >= 0) {
      util.startBranch(1, true);
    }
  }

  /**
   * 获取ID/分组/角色的target
   * @param {'ID'|'group'|'sprite'} MENU
   * @param {string} VALUE ID/组名/角色名
   * @returns {[ITarget]|undefined} target表
   */
  _getClonesOfGroupOrSprite(MENU, VALUE) {
    switch (MENU) {
      case 'ID': {
        const target = this.getTargetByID(VALUE);
        if (!target) return;
        return [target];
      }
      case 'group': {
        const IDs = this.getGroupByName(VALUE);
        if (!IDs) return;
        return IDs.map((ID) => this.getTargetByID(ID));
      }
      case 'sprite': {
        const sprite = this.runtime.getSpriteTargetByName(VALUE);
        if (!sprite || sprite.isStage) return;
        return sprite.sprite.clones;
        // return sprite.sprite.clones.filter((target) => {
        //   return !target.isOriginal;
        // });
      }
      default:
        return;
    }
  }

  getNearestClone({ MENU, VALUE, TYPE }, util) {
    const targets = this._getClonesOfGroupOrSprite(MENU, Cast.toString(VALUE));
    if (!targets) return '';
    let closestID = '';
    const isNear = TYPE === 'nearest';
    let minDistance = Infinity;

    for (const target of targets) {
      if (target === util.target) continue;
      let distance = this._calcDistanceBetweenTargets(util.target, target);
      // 求最远距离，则反转
      if (!isNear) distance *= -1;

      if (distance < minDistance) {
        minDistance = distance;
        closestID = this.getIDOfTarget(target);
      }
    }
    return closestID;
  }

  /** Scratch坐标转换为Client坐标 */
  _ScratchXYToClientXY(x, y) {
    let canvasHeight = 0;
    let canvasWidth = 0;
    if (this.canvas) {
      const rect = this.canvas.getBoundingClientRect();
      canvasHeight = rect.height;
      canvasWidth = rect.width;
    }
    x = (x / this.runtime.stageWidth + 0.5) * canvasWidth;
    y = (-y / this.runtime.stageHeight + 0.5) * canvasHeight;
    return [x, y];
  }

  isCloneTouchingCoord({ X, Y, MENU, VALUE }) {
    const targets = this._getClonesOfGroupOrSprite(MENU, Cast.toString(VALUE));
    if (!targets) return false;
    const renderer = this.runtime.renderer;
    const [x, y] = this._ScratchXYToClientXY(
      Cast.toNumber(X),
      Cast.toNumber(Y)
    );
    for (const target of targets) {
      if (renderer.drawableTouching(target.drawableID, x, y)) return true;
    }
    return false;
  }

  /** 获取XY处最顶层角色或克隆体ID */
  pickTarget({ X, Y }) {
    const renderer = this.runtime.renderer;
    const [x, y] = this._ScratchXYToClientXY(
      Cast.toNumber(X),
      Cast.toNumber(Y)
    );
    if (renderer) {
      const drawableID = renderer.pick(x, y);
      if (!drawableID) return '';
      for (let i = 0; i < this.runtime.targets.length; i++) {
        const target = this.runtime.targets[i];
        if (target.drawableID === drawableID) {
          return this.getIDOfTarget(target);
        }
      }
    }
    return '';
  }

  /**
   * target是否碰到ID/分组/角色
   * @param {*} target
   * @param {'ID'|'group|'sprite'} MENU
   * @param {string} VALUE
   * @returns
   */
  _targetTouchingClone(target, MENU, VALUE) {
    let targets = this._getClonesOfGroupOrSprite(MENU, Cast.toString(VALUE));
    if (!targets) return false;

    const renderer = this.runtime.renderer;
    // // 检测角色时，只检测克隆体
    // if (MENU === 'sprite') {
    //   targets = targets.filter((target) => {
    //     return !target.isOriginal;
    //   });
    // }
    const drawableCandidates = targets.map((clone) => clone.drawableID);
    return renderer.isTouchingDrawables(target.drawableID, drawableCandidates);
  }

  isCloneTouchingClone({ ID, MENU, VALUE }) {
    const target = this.getTargetByID(Cast.toString(ID));
    if (!target) return false;
    return this._targetTouchingClone(target, MENU, VALUE);
  }

  isTouchingClone({ MENU, VALUE }, util) {
    return this._targetTouchingClone(util.target, MENU, VALUE);
  }

  _getTouchingID(targets, TYPE, util) {
    const renderer = this.runtime.renderer;

    let IDs = [];
    for (const target of targets) {
      if (target === util.target) continue;
      // 碰到对方
      if (
        renderer.isTouchingDrawables(util.target.drawableID, [
          target.drawableID,
        ])
      ) {
        const ID = this.getIDOfTarget(target);
        if (TYPE === 'one') {
          return ID;
        } else {
          IDs.push(ID);
        }
      }
    }
    if (TYPE === 'one') {
      return '';
    } else {
      return IDs;
    }
  }

  getTouchingID({ MENU, VALUE, TYPE }, util) {
    let targets = this._getClonesOfGroupOrSprite(MENU, Cast.toString(VALUE));
    if (!targets) return TYPE === 'one' ? '' : '[]';
    const res = this._getTouchingID(targets, TYPE, util);
    if (TYPE === 'one') {
      return res;
    } else {
      return JSON.stringify(res);
    }
  }

  importTouchingIDsIntoList({ MENU, VALUE, OP, LIST }, util) {
    let list = LIST;
    if (typeof list === 'object') list = list.name;
    let targets = this._getClonesOfGroupOrSprite(MENU, Cast.toString(VALUE));
    if (!targets) targets = [];
    const res = this._getTouchingID(targets, 'all', util);
    this._importArrayIntoScratchList(res, OP, list, util);
  }
  // --------

  addOrRemoveMyselfFromGroup({ OP, GROUP }, util) {
    if (OP === 'add') {
      this.addTargetToGroup(util.target, Cast.toString(GROUP));
    } else {
      this.removeTargetFromGroup(util.target, Cast.toString(GROUP));
    }
  }

  addOrRemoveIDFromGroup({ ID, OP, GROUP }) {
    const target = this.getTargetByID(Cast.toString(ID));
    if (!target) return;
    if (OP === 'add') {
      this.addTargetToGroup(target, Cast.toString(GROUP));
    } else {
      this.removeTargetFromGroup(target, Cast.toString(GROUP));
    }
  }

  ifCloneInGroup({ ID, GROUP }) {
    const target = this.getTargetByID(Cast.toString(ID));
    if (!target) return false;
    return !!target.DollyPro.isInGroup[String(GROUP)];
  }

  getGroupInfo({ GROUP, PROPERTY }) {
    const groupList = this.getGroupByName(Cast.toString(GROUP));
    switch (PROPERTY) {
      case 'count':
        if (!groupList) return 0;
        return groupList.length;
      case 'json':
        if (!groupList) return '';
        return JSON.stringify(groupList.map((ID) => this.getTargetByID(ID)));
      case 'IDList':
        if (!groupList) return '[]';
        return JSON.stringify(groupList);
      default:
        return '';
    }
  }

  getClonePropertyInGroup({ GROUP, INDEX, PROPERTY }) {
    const groupList = this.getGroupByName(Cast.toString(GROUP));
    if (!groupList) return '';
    const idx = Cast.toNumber(INDEX);
    if (idx < 1 || idx > groupList.length) return '';
    const target = this.getTargetByID(groupList[idx - 1]);
    if (!target) return '';
    return this.__propertyOfTarget(target, PROPERTY);
  }

  _importArrayIntoScratchList(array, OP, LIST, util) {
    if (LIST === 'empty') return;
    let list = util.target.lookupVariableById(LIST);
    if (
      (!list && (list = util.target.lookupVariableByNameAndType(LIST, 'list')),
      list === undefined)
    )
      return;

    if (OP === 'replace') {
      if (array) {
        list.value = [...array];
      } else {
        list.value = [];
      }
    } else {
      if (!array) return;
      list.value = list.value.concat(array);
    }
  }

  importGroupIntoList({ GROUP, OP, LIST }, util) {
    let list = LIST;
    if (typeof list === 'object') list = list.name;
    if (list === 'empty') return;
    const groupList = this.getGroupByName(Cast.toString(GROUP));
    this._importArrayIntoScratchList(groupList, OP, list, util);
  }

  /**
   * 判断角色是否是克隆体/本体
   * @param {string} args.KEY 判断类型：clone克隆体/original本体
   * @returns {boolean}
   */
  isCloneOrIsOriginal(args, util) {
    return args.TYPE === 'clone'
      ? !util.target.isOriginal
      : util.target.isOriginal;
  }

  /**
   * 预设克隆体Property(如x、y坐标)
   * @param {string} args.PROPERTY 预设属性：_x/_y/_size...
   * @param {string|number|boolean} args.VALUE 值
   */
  presetPropertyForTheNextClone(args) {
    this._clonePresetProperties[args.PROPERTY] = args.VALUE;
  }
  /**
   * 预设克隆体单条数据KEY
   * @param {string} args.KEY 预设KEY
   * @param {string|number|boolean} args.VALUE 值
   */
  presetSingleDataForTheNextClone(args) {
    this._clonePresetData[String(args.KEY)] = args.VALUE;
  }
  /**
   * 预设克隆体数据JSON
   * @param {string} args.DATA_JSON 预设JSON
   */
  presetDataforTheNextCloneInJSONFormat(args) {
    try {
      const obj = JSON.parse(Cast.toString(args.DATA_JSON));
      if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
        this._clonePresetData = obj;
      } else {
        console.warn('Dolly pro: Preseting clone JSON data fails.');
      }
    } catch (e) {
      console.warn('Dolly pro: Preseting clone JSON data fails.', e);
    }
  }

  /**
   * 修改target的x/y/size等属性
   * @param {ITarget} target 目标
   * @param {string} prop 属性名
   * @param {'set'|'change'} op 操作set/change
   * @param {*} v 值
   */
  __opPropertyOfTarget(target, prop, op, v) {
    const numberV = Cast.toNumber(v);
    const isChanging = op === 'change';
    switch (prop) {
      case 'x':
        target.setXY(isChanging * target.x + numberV, target.y);
        return;
      case 'y':
        target.setXY(target.x, isChanging * target.y + numberV);
        return;
      case 'size':
        target.setSize(isChanging * target.size + numberV);
        return;
      case 'direction':
        target.setDirection(isChanging * target.direction + numberV);
        return;
      case 'visible':
        target.setVisible(
          Cast.toBoolean(isChanging * target.visible + numberV)
        );
        return;
      case 'currentCostumeName':
        if (typeof v === 'number') {
          if (isChanging) target.setCostume(target.currentCostume + v);
          else target.setCostume(v - 1);
        } else {
          if (isChanging) return;
          const costumeIndex = target.getCostumeIndexByName(v.toString());
          if (costumeIndex !== -1) {
            target.setCostume(costumeIndex);
          }
        }
        return;
      case 'color':
      case 'fisheye':
      case 'whirl':
      case 'pixelate':
      case 'brightness':
      case 'ghost':
      case 'mosaic': {
        let value = numberV + isChanging * target.effects[prop];
        value = this.__clampEffect(prop, value);
        target.setEffect(prop, value);
        return;
      }
      default:
        return;
    }
  }
  /** clamp特效值，限制在正确范围内 */
  __clampEffect(effect, value) {
    switch (effect) {
      case 'ghost':
        return this.__clamp(value, 0, 100);
      case 'brightness':
        return this.__clamp(value, -100, 100);
      default:
        return value;
    }
  }

  /**
   * 克隆角色，并设置克隆体ID
   * @param {ITarget} args.TARGET 要克隆的角色名
   * @param {string} args.ID 指定的ID
   */
  createCloneAndSpecifyID(args, util) {
    let TARGET = Cast.toString(args.TARGET);
    let specifyingID = Cast.toString(args.ID);

    // 获取要克隆的target
    let cloneTarget;
    if (TARGET === '_myself_') {
      cloneTarget = util.target;
    } else {
      cloneTarget = this.runtime.getSpriteTargetByName(TARGET);
    }
    // If clone target is not found, return
    if (!cloneTarget || cloneTarget.isStage) return;
    // Create clone
    const newClone = cloneTarget.makeClone();

    if (newClone) {
      // 未指定 ID，则默认使用VM id
      if (specifyingID === '') {
        specifyingID = newClone.id;
      } else if (
        Object.prototype.hasOwnProperty.call(this._IDtoTargets, specifyingID)
      ) {
        // 如果已经存在相同 ID
        console.error(
          '多莉pro: 已经存在ID为"' +
            specifyingID +
            '"的克隆体，克隆时请勿使用相同ID！\nDolly pro: There is already a clone with the ID"' +
            specifyingID +
            '". Please do not use the same ID when cloning!'
        );
        specifyingID = newClone.id;
      }
      // 注入dolly并设置ID
      this.injectDollyTarget(newClone, specifyingID);

      this.runtime.addTarget(newClone);
      // Place behind the original target.
      newClone.goBehindOther(cloneTarget);
    }
  }

  /**
   * 删除指定ID的克隆体
   * @param {string} args.ID 要删除的克隆体ID
   */
  deleteCloneByID(args) {
    const ID = Cast.toString(args.ID);
    let target = this.getTargetByID(ID);
    if (target) {
      if (target.isOriginal) return;
      this.runtime.disposeTarget(target);
      this.runtime.stopForTarget(target);
    }
  }

  /**
   * 获取某个ID克隆体的KEY数据
   * @param {string} args.ID 克隆体的虚拟ID
   * @param {string} args.KEY 数据KEY
   * @returns {string|number|boolean} 克隆体的KEY对应数据
   */
  getValueOfCloneIDWithKey(args) {
    let target = this.getTargetByID(Cast.toString(args.ID));
    if (!target) return '';
    return this.__getDataOfTarget(target, Cast.toString(args.KEY));
  }
  getMyValueByKey(args, util) {
    return this.__getDataOfTarget(util.target, Cast.toString(args.KEY));
  }
  __getDataOfTarget(target, key) {
    let data = this.getExtraDataOfTarget(target);
    return data[key] ?? '';
  }

  /**
   * 修改某个ID克隆体的KEY数据
   * @param {string} args.ID 克隆体的虚拟ID
   * @param {string} args.PROPERTY 数据
   * @param {string} args.OP 操作(set设置/change增加)
   * @param {*} args.VALUE 值
   */
  setCloneProperty(args) {
    let target = this.getTargetByID(Cast.toString(args.ID));
    if (!target) return;
    this.__opPropertyOfTarget(target, args.PROPERTY, args.OP, args.VALUE);
  }

  /**
   * 修改某个ID克隆体的KEY数据
   * @param {string} args.ID 克隆体的虚拟ID
   * @param {string} args.KEY 数据KEY
   * @param {string} args.OP 操作(set设置/change增加)
   * @param {*} args.VALUE 值
   */
  setOrChangeValueOfCloneIDWithKey(args) {
    let target = this.getTargetByID(Cast.toString(args.ID));
    if (!target) return;
    this.__setOrChangeDataOfTarget(
      target,
      Cast.toString(args.KEY),
      args.OP,
      args.VALUE
    );
  }
  setOrChangeMyValueWithKey(args, util) {
    this.__setOrChangeDataOfTarget(
      util.target,
      Cast.toString(args.KEY),
      args.OP,
      args.VALUE
    );
  }
  __setOrChangeDataOfTarget(target, key, op, value) {
    let data = this.getExtraDataOfTarget(target);
    if (op === 'set') {
      data[key] = value;
    } else {
      data[key] = Cast.toNumber(data[key]) + Cast.toNumber(value);
    }
  }

  getMyProperty(args, util) {
    return this.__propertyOfTarget(util.target, args.PROPERTY);
  }
  getClonePropertyWithID(args) {
    let target = this.getTargetByID(Cast.toString(args.ID));
    if (!target) return '';
    return this.__propertyOfTarget(target, args.PROPERTY);
  }

  __propertyOfTarget(target, type) {
    switch (type) {
      case 'currentCostume':
        return target.currentCostume + 1;
      case 'currentCostumeName':
        return target.sprite.costumes[target.currentCostume].name;
      case 'name':
        return target.sprite.name;
      case 'id':
        //获取 ID 时，返回虚拟ID
        return this.getIDOfTarget(target);
      case 'dataJSON':
        //获取KV数据JSON
        return JSON.stringify(this.getExtraDataOfTarget(target));
      case 'color':
      case 'fisheye':
      case 'whirl':
      case 'pixelate':
      case 'brightness':
      case 'ghost':
      case 'mosaic':
        return target.effects[type] ?? 0;
      default:
        return target[type] ?? '';
    }
  }

  getCloneTargetPropertyWithSpriteName(args) {
    const targets = this.runtime.targets.filter((target) => {
      return (
        !target.isOriginal &&
        (args.TARGET !== '_all_' ? target.sprite.name === args.TARGET : true)
      );
    });
    let value;
    switch (args.PROPERTY) {
      case 'count':
        value = targets.length;
        break;
      case 'json':
        value = JSON.stringify(targets);
        break;
      case 'IDList':
        value = JSON.stringify(
          targets.map((target) => this.getIDOfTarget(target))
        );
        break;
      default:
        value = '';
        break;
    }
    return value;
  }

  getOriginalTargetPropertyWithSpriteName(args) {
    const target = this.runtime.getSpriteTargetByName(args.TARGET);
    if (!target) return '';
    return this.__propertyOfTarget(target, args.PROPERTY);
  }
}

window.tempExt = {
  Extension: dollyProExtension,
  info: {
    name: 'witCat.dollyPro.extensionName',
    description: 'witCat.dollyPro.description',
    extensionId,
    iconURL: cover,
    insetIconURL: icon,
    featured: true,
    disabled: false,
    collaborator: 'editor @ dollyProTeam',
    collaboratorList: [
      {
        collaborator: '白猫 @ CCW',
        collaboratorURL:
          'https://www.ccw.site/student/6173f57f48cf8f4796fc860e',
      },
      {
        collaborator: 'YUEN @ CCW',
        collaboratorURL:
          'https://www.ccw.site/student/628979aa804a3a2bc801b097',
      },
      {
        collaborator: 'Arkos @ CCW',
        collaboratorURL:
          'https://www.ccw.site/student/6107c5323e593a0c25f850f8',
      },
      {
        collaborator: '酷可 @ CCW',
        collaboratorURL:
          'https://www.ccw.site/student/610b508176415b2f27e0f851',
      },
    ],
  },
  l10n: {
    'zh-cn': {
      'witCat.dollyPro.extensionName': '🐏多莉 Pro',
      'witCat.dollyPro.description': '✨ 更好的克隆体管理',
    },
    en: {
      'witCat.dollyPro.extensionName': '🐏Dolly Pro',
      'witCat.dollyPro.description': '✨ Enhanced clone management',
    },
  },
};
