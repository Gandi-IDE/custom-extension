/*
 * @Author: YUEN
 * @Date: 2023-02-06 20:52:52
 * @LastEditors: YUEN
 * @LastEditTime: 2023-03-07 20:00:20
 * @Description:
 */
import {
  GandiExtension,
  BlockUtil,
  ArgumentType,
  ReporterScope,
} from "@cocrea/extension-kit";
import { extensionId } from "./extInfo";
import zhCn from "./l10n/zh-cn.json";
import en from "./l10n/en.json";

import cover from "./assets/cover.png";
import blockIcon from "./assets/icon.png";

/** Scratch 参数类型 */
type SCarg = string | number | boolean;

type userAgentObj_type = {
  browserName: string; // 浏览器名称
  browserVersion: string; // 浏览器版本
  osName: string; // 操作系统名称
  osVersion: string; // 操作系统版本
  deviceName: string; // 设备名称
  CPU_Type: string; // 兼容xigua-client
};

export default class SimpleUtils extends GandiExtension {
  get extensionId(): string {
    return extensionId;
  }

  get localization() {
    return {
      "zh-cn": zhCn,
      en: en,
    };
  }

  get documentURL(): string {
    return "";
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
      labelName: "YUEN",
      username: "YUEN",
      homepage: "https://www.ccw.site/student/236217560",
      email: "3094249868@qq.com",
    };
  }

  get blockPrefix(): string {
    return "";
  }

  get deprecatedBlocksByOpcodes(): string[] {
    return [];
  }

  // v1.0.4
  // add runtime
  runtime: any;
  constructor(runtime: any) {
    super(runtime);
    this.runtime = runtime;
  }

  // client_info V2
  /**
   * 方便在扩展内部反复调用
   * v1.0.4
   * @param TYPE old args.TYPE
   * @returns
   */
  client_info(TYPE: "json" | "JSON" | keyof userAgentObj_type): string {
    const userAgentObj: userAgentObj_type = {
      browserName: "", // 浏览器名称
      browserVersion: "", // 浏览器版本
      osName: "", // 操作系统名称
      osVersion: "", // 操作系统版本
      deviceName: "", // 设备名称
      CPU_Type: "", // 兼容xigua-client
    };

    // Windows NT内核版本转常用版本
    const userAgentWindowsVrsion = {
      "NT 5.1": "XP",
      "NT 5.2": "XP",
      "NT 6.0": "Vista",
      "NT 6.1": "7",
      "NT 6.2": "8",
      "NT 6.3": "8.1",
      "NT 6.4": "10",
      "NT 10.0": "10/11",
    };
    // 修复了之前兼容的问题 23/02/21
    const userAgent = navigator.userAgent;
    if (userAgent) {
      const isOpera = userAgent.indexOf("Opera") > -1;
      //判断是否Opera浏览器
      if (isOpera) {
        userAgentObj.browserName = "Opera";
        userAgentObj.browserVersion = userAgent.split("Version/")[1];
      }
      //判断是否IE浏览器
      if (
        userAgent.indexOf("compatible") > -1 &&
        userAgent.indexOf("MSIE") > -1 &&
        !isOpera
      ) {
        userAgentObj.browserName = "IE";
        userAgentObj.browserVersion = userAgent.split("MSIE ")[1].split(" ")[1];
      }
      //判断是否Safari浏览器
      if (userAgent.indexOf("Safari") > -1) {
        userAgentObj.browserName = "Safari";
        /**
         * 230207已修复
         */
        userAgentObj.browserVersion = userAgent
          .split("Safari")[1]
          .split(" ")[0];
      }
      //判断是否Firefox浏览器
      if (userAgent.indexOf("Firefox") > -1) {
        userAgentObj.browserName = "Firefox";
        userAgentObj.browserVersion = userAgent.split("Firefox/")[1];
      }
      //判断是否Chrome浏览器
      if (userAgent.indexOf("Chrome") > -1) {
        userAgentObj.browserName = "Chrome";
        userAgentObj.browserVersion = userAgent
          .split("Chrome/")[1]
          .split(" ")[0];
      }

      // is Edg
      if (userAgent.indexOf("Edg") > -1) {
        userAgentObj.browserName = "Edge";
        userAgentObj.browserVersion = userAgent.split("Edg/")[1].split(" ")[0];
      }

      // is xigua-client
      if (userAgent.indexOf("xigua-python") > -1) {
        userAgentObj.browserName = "西瓜Python";
        userAgentObj.browserVersion = userAgent
          .split("xigua-python/")[1]
          .split(" ")[0];
        const winJV = userAgent
          .split("Windows ")[1]
          .split(")")[0]
          .split("; ")[1];
        // 兼容西瓜客户端
        userAgentObj.CPU_Type = winJV;
      }

      if (userAgent.indexOf("xigua-scratch") > -1) {
        userAgentObj.browserName = "西瓜Scratch";
        userAgentObj.browserVersion = userAgent
          .split("xigua-scratch/")[1]
          .split(" ")[0];
        const winJV = userAgent
          .split("Windows ")[1]
          .split(")")[0]
          .split("; ")[1];
        // 兼容西瓜客户端
        userAgentObj.CPU_Type = winJV;
      }

      //判断是否Windows
      if (userAgent.indexOf("Windows") > -1) {
        const Version = userAgent
          .split("Windows ")[1]
          .split(")")[0]
          .split("; ")[0];
        userAgentObj.osName = "Windows";
        if (
          Object.prototype.hasOwnProperty.call(userAgentWindowsVrsion, Version)
        ) {
          userAgentObj.osVersion =
            userAgentWindowsVrsion[
              Version as keyof typeof userAgentWindowsVrsion
            ];
        } else {
          // 列表中找不到，直接使用 Version 的值
          userAgentObj.osVersion = Version;
        }
        // 设置设备名
        userAgentObj.deviceName = "PC";
      }

      if (userAgent.indexOf("Mac") > -1) {
        const Version = userAgent.split("Mac OS X ")[1].split(")")[0];
        userAgentObj.osName = "Mac OS X";
        userAgentObj.osVersion = Version;
        // 设置设备名
        userAgentObj.deviceName = "PC";
      }

      if (userAgent.indexOf("iPhone") > -1) {
        const Version = userAgent.split("CPU iPhone OS")[1].split(" ")[0];
        userAgentObj.osName = "iPhone";
        userAgentObj.osVersion = Version;

        // 设置设备名
        userAgentObj.deviceName = "Apple Device";
      }

      if (userAgent.indexOf("iPad") > -1) {
        const Version = userAgent.split("iPad; CPU OS ")[1].split(" ")[0];
        userAgentObj.osName = "iPad";
        userAgentObj.osVersion = Version;

        // 设置设备名
        userAgentObj.deviceName = "Apple Device";
      }

      if (userAgent.indexOf("Android") > -1) {
        const V = userAgent.split("Android ")[1].split(";")[0];
        /**
         * userAgent.split("Android " + V)[1].split(")")[0].indexOf("; ") > -1
         * 默认是有厂商+版本的
         * 这里做了兼容
         * 如果ua里没有设备版本默认返回"Android设备"
         */
        const winD =
          userAgent
            .split("Android " + V)[1]
            .split(")")[0]
            .indexOf("; ") > -1
            ? userAgent.split("Android " + V + "; ")[1].split(")")[0]
            : "Android设备";
        userAgentObj.osName = "Android";
        userAgentObj.deviceName = winD;
        userAgentObj.osVersion = V;
      }
      //console.log(userAgentObj);

      /**
       * @description: 兼容l10n，之前把默认字段写成了JSON但是menu里的是json
       * 如果用户选择的是json就返回json否则从Object获取menu对应的参数返回
       * @param {*} TYPE
       * @return {*}
       */
      if (TYPE == "json" || TYPE == "JSON") {
        // 转换格式 Obj to String JSON
        const string = JSON.stringify(userAgentObj);
        return string;
      } else {
        return userAgentObj[TYPE];
      }
    } else {
      // userAgent 用不了
      return "";
    }
  }

  //dynamic menu function

  /**
   * powered by Arkos
   * 删除了排除当前角色
   * v1.0.4
   * @returns
   */
  // dynamic menu
  spriteMenu() {
    const sprites: { text: string; value: number }[] = [];
    this.runtime.targets.forEach((target: string, targetId: number) => {
      if (target.isOriginal) {
        const { name } = target.sprite;
        if (target.isStage) {
          sprites.push({ text: "[舞台]", value: targetId });
        } else {
          sprites.push({ text: "[角色]" + name, value: targetId });
        }
      }
    });
    if (sprites.length === 0) {
      // 这不可能发生
      return [{ text: "-没有角色-", value: "empty" }];
    } else {
      return sprites;
    }
  }

  // powered by ccwdata
  /**
   * empty - 改成了 -没有数据-
   * v1.0.4
   * @returns
   */
  listMenu() {
    let variable = this.runtime._stageTarget.variables;
    const variableList = [];
    Object.keys(variable).forEach(function (r) {
      if (variable[r].type === "list") {
        variableList.push({
          text: "[PUBLISH]".concat(variable[r].name),
          value: variable[r].id,
        });
      }
    });
    try {
      variable = this.runtime._editingTarget.variables;
    } catch (t) {
      variable = "e";
    }
    if (
      variable !== "e" &&
      this.runtime._editingTarget !== this.runtime._stageTarget
    ) {
      Object.keys(variable).forEach(function (r) {
        if (variable[r].type === "list") {
          variableList.push({
            text: "[PRIVATE]".concat(variable[r].name),
            value: variable[r].id,
          });
        }
      });
    }
    if (variableList.length === 0) {
      variableList.push({
        text: "-没有列表-",
        value: "empty",
      });
    }
    return variableList;
  }
  // v1.0.4
  // 修改自ccwdata
  variableMenu() {
    let variable = this.runtime._stageTarget.variables;
    const variableList = [];
    Object.keys(variable).forEach(function (r) {
      if (variable[r].type === "") {
        variableList.push({
          text: "[PUBLISH]".concat(variable[r].name),
          value: variable[r].id,
        });
      }
    });
    try {
      variable = this.runtime._editingTarget.variables;
    } catch (t) {
      variable = "e";
    }
    if (
      variable !== "e" &&
      this.runtime._editingTarget !== this.runtime._stageTarget
    ) {
      Object.keys(variable).forEach(function (r) {
        if (variable[r].type === "") {
          variableList.push({
            text: "[PRIVATE]".concat(variable[r].name),
            value: variable[r].id,
          });
        }
      });
    }
    if (variableList.length === 0) {
      variableList.push({
        text: "-没有变量-",
        value: "empty",
      });
    }
    return variableList;
  }

  // v1.0.4
  // 统一异常，方便修复扩展报错
  extErr(e: Error) {
    const error = e.message;
    const sub = "⚠⚠⚠报错";
    const bool = error.includes(sub);
    if (bool) {
      console.error("[YUENExt] : ", e);
      throw e;
      // throw new Error("[YUENExt] : ".concat(e.toString(x)));
    } else {
      console.warn("[YUENExt] : ", e);
    }
  }

  init() {
    /**
     * 获取设备信息
     * v1.0.0
     */
    const info_type_menu = BlockUtil.createMenu("InfoMenu");
    info_type_menu.items.push({ text: "json", value: "json" });
    info_type_menu.items.push({ text: "browserName", value: "browserName" });
    info_type_menu.items.push({
      text: "browserVersion",
      value: "browserVersion",
    });
    info_type_menu.items.push({ text: "osName", value: "osName" });
    info_type_menu.items.push({ text: "osVersion", value: "osVersion" });
    info_type_menu.items.push({ text: "deviceName", value: "deviceName" });
    info_type_menu.items.push({ text: "CPU_Type", value: "CPU_Type" });

    //dynamic menu
    /**
     * 将设备信息覆盖到列表
     * v1.0.4
     */
    // 预留
    const spriteMenu = BlockUtil.createDynamicMenu(
      "spriteMenu",
      "spriteMenu",
      true
    );

    const listMenu = BlockUtil.createDynamicMenu("listMenu", "listMenu", true);

    // 预留
    const variableMenu = BlockUtil.createDynamicMenu(
      "variableMenu",
      "variableMenu",
      true
    );

    // 获取设备信息
    const TYPE = BlockUtil.createArgument(
      ArgumentType.STRING,
      "json",
      info_type_menu
    );

    // v1.0.4
    // 预留和客户端信息覆盖到列表
    const spriteArgs = BlockUtil.createArgument(
      ArgumentType.STRING,
      "",
      spriteMenu
    );

    const listArgs = BlockUtil.createArgument(
      ArgumentType.STRING,
      "",
      listMenu
    );

    const variableArgs = BlockUtil.createArgument(
      ArgumentType.STRING,
      "",
      variableMenu
    );

    // v1.0.0
    // Notification通知 标题，内容，图标
    const TITLE = BlockUtil.createArgument(ArgumentType.STRING, "title");
    const CONTENT = BlockUtil.createArgument(ArgumentType.STRING, "content");
    const ICON = BlockUtil.createArgument(ArgumentType.STRING, "icon");

    // 通用STRING Args
    const CONTENT_1 = BlockUtil.createArgument(ArgumentType.STRING, "default");

    /**
     * 获取客户端信息
     * 当[TYPE]="JSON"时，将其他参数的JSON返回
     * deviceName只有移动端显示厂商与型号
     * CPU_Type(处理器位数)x64 x86只有在使用西瓜客户端访问时生效
     * v1.0.0
     */
    const GET_CLIENT_INFO = BlockUtil.createReporter();
    GET_CLIENT_INFO.setReporterScope(ReporterScope.GLOBAL);
    GET_CLIENT_INFO.setOpcode("get_client_info");
    GET_CLIENT_INFO.setText("get_client_info");
    GET_CLIENT_INFO.setArguments({ TYPE });

    /**
     * 将客户端信息保存(覆盖)到列表
     * v1.0.4
     */

    const saveJSON = BlockUtil.createCommand();
    saveJSON.setOpcode("saveJSON");
    saveJSON.setText("saveJSON");
    saveJSON.setArguments({ listArgs });

    // 通知 v1.0.0
    const Notification = BlockUtil.createCommand();
    Notification.setOpcode("Notification");
    Notification.setText("notification");
    Notification.setArguments({ TITLE, CONTENT, ICON });

    // 是否联网 v1.0.0
    const IS_ONLINE = BlockUtil.createBool();
    IS_ONLINE.setOpcode("is_online");
    IS_ONLINE.setText("is_online");
    IS_ONLINE.setArguments({});

    // 弹窗 v1.0.0
    const TOAST = BlockUtil.createCommand();
    TOAST.setOpcode("alert");
    TOAST.setText("alert");
    TOAST.setArguments({ CONTENT_1 });

    // 运行环境 当前是编辑器还是发布页
    const DEPLOY_ENV = BlockUtil.createReporter();
    DEPLOY_ENV.setReporterScope(ReporterScope.GLOBAL);
    DEPLOY_ENV.setOpcode("deploy_env");
    DEPLOY_ENV.setText("deploy_env");
    DEPLOY_ENV.setArguments({});

    // 详情看function注释
    // v1.0.6

    const NUM = BlockUtil.createArgument(ArgumentType.NUMBER, 1);
    const set_value_for_list_lenght = BlockUtil.createLoop();
    set_value_for_list_lenght.setOpcode("set_value_for_list_lenght");
    set_value_for_list_lenght.setText("set_value_for_list_lenght");
    set_value_for_list_lenght.setArguments({ listArgs, variableArgs, NUM });

    /**
     * 基础功能区
     */
    this.addTextLabel("t.default");

    /**
     * 获取客户端信息
     * 保存客户端信息
     */
    this.addBlock(GET_CLIENT_INFO);
    this.addBlock(saveJSON);

    /**
     * 基础功能-一分区
     * 用户是否在线
     * 运行环境
     */
    this.addTextLabel("t.default.1");
    this.addBlock(IS_ONLINE);
    this.addBlock(DEPLOY_ENV);

    /**
     * 基础功能-二分区
     * 通知
     * 弹窗
     */
    this.addTextLabel("t.default.2");
    this.addBlock(Notification);
    this.addBlock(TOAST);

    /**
     * 📖更多积木
     * 循环类
     * 判断类
     */
    this.addTextLabel("t.default.3");
    this.addBlock(set_value_for_list_lenght);
  }

  //block opcode functions

  /**
   * 重复执行 [listArgs] 的项目数次，将 [variableArgs] 增加 [NUM]
   * v1.0.5
   */

  set_value_for_list_lenght(
    args: {
      listArgs: SCarg;
      variableArgs: SCarg;
      NUM: SCarg;
    },
    utils: any
  ) {
    const { listArgs, variableArgs, NUM } = args;
    let list = utils.target.lookupVariableById(listArgs);
    if (list === undefined) {
      list = utils.target.lookupVariableByNameAndType(listArgs, "list");
    }
    if (list === undefined) {
      this.extErr(new Error("⚠YUEN: set_value_for_list_lenght : list"));
      return;
    }
    const times = list.value.length;
    // variable 只需要获取一次
    let variable = utils.target.lookupVariableById(variableArgs);
    if (variable === undefined) {
      variable = utils.target.lookupVariableByNameAndType(variableArgs, "");
    }
    if (variable === undefined) {
      this.extErr(new Error("⚠YUEN: set_value_for_list_lenght : variable"));
      return;
    }

    // Initialize loop
    if (typeof utils.stackFrame.loopCounter === "undefined") {
      utils.stackFrame.loopCounter = times;
    }
    // Only execute once per frame.
    // When the branch finishes, `repeat` will be executed again and
    // the second branch will be taken, yielding for the rest of the frame.
    // Decrease counter
    utils.stackFrame.loopCounter--;
    // If we still have some left, start the branch.
    if (utils.stackFrame.loopCounter >= 0) {
      const numb = Number(NUM) + Number(variable.value);
      variable.value = numb;
      utils.startBranch(1, true);
    }
  }

  /**
   * 保存客户端信息到列表
   * v1.0.4
   */

  saveJSON(args: { listArgs: string }, utils: any) {
    /**
     * @example
     * list = ["Edge","109.x.x","Windows","10/11","PC","x64"]
     */
    const { listArgs } = args;

    if ("empty" === listArgs) {
      this.extErr(
        new Error("⚠YUEN: in saveJSON error fill list: list is not selected")
      );
      return;
    }

    const client_info = JSON.parse(this.client_info("JSON"));
    const list: string[] = Object.values(client_info);

    let _ = utils.target.lookupVariableById(listArgs);
    if (_ === undefined) {
      _ = utils.target.lookupVariableByNameAndType(listArgs, "list");
    }
    if (_ !== undefined) {
      // 真的需要深拷贝？
      _.value = list.concat();
    }
  }

  /**
   * 运行环境
   * prod：不在编辑器内
   * dev：在编辑器内
   */
  // 运行环境
  deploy_env() {
    const ur1 = window.location.pathname;
    //let ur2 = window.location.search;

    // http://ccw.site/gandi
    // .....--........-^^^^^
    // https://ccw.site/gandi
    // ......--........-^^^^^
    // https://www.ccw.site/gandi
    // ......--............-^^^^^
    // https://www.ccw.site/gandi/project
    // ......--............-^^^^^-
    const rege = /^[^\/]*\/\/[^\/]*\/(?:gandi|creator)(?:\/|$)/;
    //          |\____/\__/\____/\/\_______________/\______/
    //          |   |    |   |    |        |            |
    //          `--文本开头  |    |        |            |
    //              |    |   |    |        |            |
    //              `--前面协议（http/https）的部分     |
    //                   |   |    |        |            |
    //                   `--“//”部分       |            |
    //                       |    |        |            |
    //                       `--域名（ccw.site）部分    |
    //                            |        |            |
    //                            `--“/”部分            |
    //                                     |            |
    //                   gandi或者creator--'            |
    //                                                  |
    //                                 “/”或者文本末尾--'
    return rege.test(ur1) ? "dev" : "prod";
  }

  /**
   * 用户是否在线
   * 检测用户网络连接情况
   * @returns
   */
  // 联网检测
  is_online() {
    return window.navigator.onLine;
  }

  /**
   * 通知
   * Notification弹窗
   * @param args
   */
  Notification(args: { TITLE: SCarg; CONTENT: SCarg; ICON: SCarg }) {
    const { TITLE, CONTENT, ICON } = args;
    const globals = "yuen.sleep." + window.location.pathname;
    const tt = window.localStorage.getItem(globals);
    const t = Number(window.localStorage.getItem(globals)) + 60000 * 60 * 24 * 7;
    if (t <= Date.now() || tt == "null") {
      localStorage.removeItem(globals);
    }
    const ttt = Number(window.localStorage.getItem(globals));
    if (ttt + 60000 * 4 <= Date.now()) {
      new window.Notification(String(TITLE), {
        body: String(CONTENT),
        icon: String(ICON),
      });
      window.localStorage.setItem(globals, Date.now().toString());
    } else {
      alert("YUEN: 4分钟内调用过一次了，请4分钟后调用");
      console.warn("YUEN: 4分钟内只能调用1次弹窗或通知");
    }
  }

  /**
   * 弹窗
   * alert弹窗
   * @param args
   */
  alert(args: { CONTENT_1: string }) {
    const { CONTENT_1 } = args;
    const globals = "yuen.sleep." + window.location.pathname;
    const tt = window.localStorage.getItem(globals);
    const t = Number(window.localStorage.getItem(globals)) + 60000 * 60 * 24 * 7;
    if (t <= Date.now() || tt == "null") {
      localStorage.removeItem(globals);
    }
    const ttt = Number(window.localStorage.getItem(globals));
    if (ttt + 60000 * 4 <= Date.now()) {
      alert(CONTENT_1);
      window.localStorage.setItem(globals, Date.now().toString());
    } else {
      alert("YUEN: 4分钟内调用过一次了，请4分钟后调用");
      console.warn("YUEN: 4分钟内只能调用1次弹窗或通知");
    }
  }

  /**
   * 获取客户端信息
   * @param args
   * @returns
   */
  get_client_info(args: { TYPE: string }) {
    return this.client_info(args.TYPE);
  }
}
