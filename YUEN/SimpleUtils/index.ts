/*
 * @Author: YUEN
 * @Date: 2023-02-06 20:52:52
 * @LastEditors: YUEN
 * @LastEditTime: 2023-02-07 23:09:06
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

export default class DefaultExtension extends GandiExtension {
  [x: string]: any;
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

  todo() {
    return "该功能暂不可用";
  }

  init() {
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

    const TYPE = BlockUtil.createArgument(
      ArgumentType.STRING,
      "json",
      info_type_menu
    );

    const TITLE = BlockUtil.createArgument(ArgumentType.STRING, "title");
    const CONTENT = BlockUtil.createArgument(ArgumentType.STRING, "content");
    const ICON = BlockUtil.createArgument(ArgumentType.STRING, "icon");

    const CONTENT_1 = BlockUtil.createArgument(ArgumentType.STRING, "default");

    const GET_CLIENT_INFO = BlockUtil.createReporter();
    GET_CLIENT_INFO.setOpcode("get_client_info");
    GET_CLIENT_INFO.setText("get_client_info");
    GET_CLIENT_INFO.setArguments({ TYPE });

    const Notification = BlockUtil.createCommand();
    Notification.setOpcode("Notification");
    Notification.setText("get_battery");
    Notification.setArguments({ TITLE, CONTENT, ICON });

    const IS_REMIXING = BlockUtil.createBool();
    IS_REMIXING.setOpcode("is_remixing");
    IS_REMIXING.setText("is_remixing");
    IS_REMIXING.setArguments({});

    const IS_ONLINE = BlockUtil.createBool();
    IS_ONLINE.setOpcode("is_online");
    IS_ONLINE.setText("is_online");
    IS_ONLINE.setArguments({});

    const TOAST = BlockUtil.createCommand();
    TOAST.setOpcode("toast");
    TOAST.setText("toast");
    TOAST.setArguments({ CONTENT_1 });

    const REDIRECT = BlockUtil.createCommand();
    REDIRECT.setOpcode("redirect");
    REDIRECT.setText("redirect");
    REDIRECT.setArguments({ CONTENT_1 });

    const STOP_CANVAS = BlockUtil.createCommand();
    STOP_CANVAS.setOpcode("stop_canvas");
    STOP_CANVAS.setText("stop_canvas");
    STOP_CANVAS.setArguments({});

    const DEPLOY_ENV = BlockUtil.createReporter();
    DEPLOY_ENV.setOpcode("deploy_env");
    DEPLOY_ENV.setText("deploy_env");
    DEPLOY_ENV.setArguments({});

    this.addTextLabel("t.default");
    this.addBlock(GET_CLIENT_INFO);
    this.addBlock(IS_REMIXING);
    this.addBlock(IS_ONLINE);
    this.addBlock(Notification);
    this.addBlock(TOAST);
    this.addBlock(REDIRECT);
    this.addBlock(DEPLOY_ENV);
  }

  //block opcode functions
  redirect(args) {
    const {CONTENT_1} = args
    window.location.href=CONTENT_1
  }
  // 运行环境
  deploy_env() {
    var ur1 = window.location.pathname;
    //var ur2 = window.location.search;
    return ur1.indexOf("gandi") > -1 || ur1.indexOf("creator") > -1
      ? "dev"
      : "prod";
  }

  // 联网检测
  is_online() {
    return window.navigator.onLine;
  }

  // 改编检测
  is_remixing() {
    var ur1 = window.location.search;
    return ur1.indexOf("remixing=true") > -1 ? true : false;
  }
  // Notification弹窗
  Notification(args) {
    const { TITLE, CONTENT, ICON } = args;
    new window.Notification(TITLE, {
      body: CONTENT,
      icon: ICON,
    });
  }

  // alert弹窗
  toast(args: { CONTENT_1: any }) {
    const { CONTENT_1 } = args;
    alert(CONTENT_1);
  }

  get_client_info(args: { TYPE: any }) {
    const userAgentObj = {
      browserName: "", // 浏览器名称
      browserVersion: "", // 浏览器版本
      osName: "", // 操作系统名称
      osVersion: "", // 操作系统版本
      deviceName: "", // 设备名称
      CPU_Type: "", // 兼容xigua-client
    };

    // Windows NT内核版本转常用版本
    const userAgentWindowsVrsion = {
      "NT 5.1": "Windows XP",
      "NT 5.2": "Windows XP",
      "NT 6.0": "Windows Vista",
      "NT 6.1": "Windows 7",
      "NT 6.2": "Windows 8",
      "NT 6.3": "Windows 8.1",
      "NT 6.4": "Windows 10", //windows10早期内核6.4
      "NT 10.0": "Windows 10/11", //2020之后内核变成了10.0  11也沿用了
    };
    var userAgent = navigator.userAgent;
    /**
     * 兼容
     */
    if (userAgent) {
      var isOpera = userAgent.indexOf("Opera") > -1;
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
        (userAgentObj.browserName = "西瓜Python"),
          (userAgentObj.browserVersion = userAgent
            .split("xigua-python/")[1]
            .split(" ")[0]);
        var winJV = userAgent.split("Windows ")[1].split(")")[0].split("; ")[1];
        // 兼容西瓜客户端
        userAgentObj.CPU_Type = winJV;
      }

      if (userAgent.indexOf("xigua-scratch") > -1) {
        (userAgentObj.browserName = "西瓜Scratch"),
          (userAgentObj.browserVersion = userAgent
            .split("xigua-scratch/")[1]
            .split(" ")[0]);
        var winJV = userAgent.split("Windows ")[1].split(")")[0].split("; ")[1];
        // 兼容西瓜客户端
        userAgentObj.CPU_Type = winJV;
      }

      //判断是否Windows
      if (userAgent.indexOf("Windows") > -1) {
        var Version =
          userAgent.split("Windows ")[1].split(")")[0].indexOf("; ") > -1
            ? userAgent.split("Windows ")[1].split(")")[0].split("; ")[0]
            : userAgent.split("Windows ")[1].split(")")[0];
        userAgentObj.osName = "Windows";
        userAgentObj.osVersion = userAgentWindowsVrsion[Version];
        // 设置设备名
        userAgentObj.deviceName = "PC";
      }

      if (userAgent.indexOf("Mac") > -1) {
        var Version = userAgent.split("Mac OS X ")[1].split(")")[0];
        userAgentObj.osName = "Mac OS X";
        userAgentObj.osVersion = Version;
        // 设置设备名
        userAgentObj.deviceName = "PC";
      }

      if (userAgent.indexOf("iPhone") > -1) {
        var Version = userAgent.split("CPU iPhone OS")[1].split(" ")[0];
        userAgentObj.osName = "iPhone";
        userAgentObj.osVersion = Version;

        // 设置设备名
        userAgentObj.deviceName = "Apple Device";
      }

      if (userAgent.indexOf("iPad") > -1) {
        /**
        TODO 还没实测iPad的ua
          *先返回iPad
         */
        var Version = "iPad";
        userAgentObj.osName = "iPhone";
        userAgentObj.osVersion = Version;

        // 设置设备名
        userAgentObj.deviceName = "Apple Device";
      }

      if (userAgent.indexOf("Android") > -1) {
        var V = userAgent.split("Android ")[1].split(";")[0];
        /**
         * userAgent.split("Android " + V)[1].split(")")[0].indexOf("; ") > -1
         * 默认是有厂商+版本的
         * 这里做了兼容
         * 如果ua里没有设备版本默认返回"Androiid设备"
         */
        var winD =
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
      // 转换格式
      var string = JSON.stringify(userAgentObj);
      const { TYPE } = args;
      //console.log(TYPE);

      /**
       * @description: 兼容l10n
       * 如果用户选择的是返回json就返回json否则从Object获取menu对应的参数返回
       * @param {*} TYPE
       * @return {*}
       */
      if (TYPE == "json" || TYPE == "JSON") {
        return string;
      } else {
        return userAgentObj[TYPE];
      }
    }
  }
}
