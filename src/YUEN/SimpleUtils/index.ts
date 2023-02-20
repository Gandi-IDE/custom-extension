/*
 * @Author: YUEN
 * @Date: 2023-02-06 20:52:52
 * @LastEditors: YUEN
 * @LastEditTime: 2023-02-20 22:21:37
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

    // 获取设备信息
    const TYPE = BlockUtil.createArgument(
      ArgumentType.STRING,
      "json",
      info_type_menu
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
    GET_CLIENT_INFO.setOpcode("get_client_info");
    GET_CLIENT_INFO.setText("get_client_info");
    GET_CLIENT_INFO.setArguments({ TYPE });

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
    DEPLOY_ENV.setOpcode("deploy_env");
    DEPLOY_ENV.setText("deploy_env");
    DEPLOY_ENV.setArguments({});

    /**
     * 基础功能区
     */
    this.addTextLabel("t.default");

    /**
     * 获取客户端信息
     */
    this.addBlock(GET_CLIENT_INFO);

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
  }

  //block opcode functions

  /**
   * 运行环境
   * prod：不在编辑器内
   * dev：在编辑器内
   */
  // 运行环境
  deploy_env() {
    var ur1 = window.location.pathname;
    //var ur2 = window.location.search;
    return ur1.indexOf("gandi") > -1 || ur1.indexOf("creator") > -1
      ? "dev"
      : "prod";
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
   * @param args
   */
  // Notification弹窗
  Notification(args) {
    const { TITLE, CONTENT, ICON } = args;
    var tt = window.localStorage.getItem("yuen.sleep");
    var t = Number(window.localStorage.getItem("yuen.sleep"));
    if (t <= Date.now() || tt == "null") {
      new window.Notification(TITLE, {
        body: CONTENT,
        icon: ICON,
      });
      var time = Date.now() + 480000; // 8min后可再次调用
      window.localStorage.setItem("yuen.sleep", time.toString());
    } else {
      alert("YUEN: 8分钟内调用过一次了，请8分钟后调用");
      console.warn("YUEN: 8分钟内只能调用1次弹窗或通知");
    }
  }

  /**
   * 弹窗
   * @param args
   */
  // alert弹窗
  alert(args) {
    const { CONTENT_1 } = args;
    var tt = window.localStorage.getItem("yuen.sleep");
    var t = Number(window.localStorage.getItem("yuen.sleep"));
    if (t <= Date.now() || tt == "null") {
      alert(CONTENT_1);
      var time = Date.now() + 480000; // 8min后可再次调用
      window.localStorage.setItem("yuen.sleep", time.toString());
    } else {
      alert("YUEN: 8分钟内调用过一次了，请8分钟后调用");
      console.warn("YUEN: 8分钟内只能调用1次弹窗或通知");
    }
  }

  /**
   *
   * @param args 获取客户端信息
   * @returns
   */
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
      "NT 6.4": "Windows 10",
      "NT 10.0": "Windows 10/11",
    };
    var userAgent = navigator.userAgent;
    /**
     * 兼容
     * var _userAgent = navigator.userAgent;
     * TODO 兼容之前旧模板里的代码
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
        var Version = userAgent.split('iPad; CPU OS ')[1].split(' ')[0];
        userAgentObj.osName = "iPad";
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
      // 转换格式 Obj to String JSON
      var string = JSON.stringify(userAgentObj);
      const { TYPE } = args;
      //console.log(TYPE);

      /**
       * @description: 兼容l10n，之前把默认字段写成了JSON但是menu里的是json
       * 如果用户选择的是json就返回json否则从Object获取menu对应的参数返回
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
