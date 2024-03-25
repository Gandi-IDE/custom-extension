import { GandiExtension } from "@cocrea/extension-kit";
/** Scratch 参数类型 */
type SCarg = string | number | boolean;
export default class SimpleUtils extends GandiExtension {
    get extensionId(): string;
    get localization(): {
        "zh-cn": {
            name: string;
            desc: string;
            docURL: string;
            get_client_info: string;
            json: string;
            browserName: string;
            browserVersion: string;
            osName: string;
            osVersion: string;
            deviceName: string;
            CPU_Type: string;
            is_online: string;
            get_notif_perm: string;
            ask_notif_perm: string; /** Scratch 参数类型 */
            notification: string;
            alert: string;
            default: string;
            "t.default": string;
            "t.default.1": string;
            "t.default.2": string;
            "t.default.3": string;
            is_see_inside: string;
            deploy_env: string;
            title: string;
            content: string;
            icon: string;
            saveJSON: string;
            set_value_for_list_lenght: string;
        };
        en: {
            name: string;
            desc: string;
            docURL: string;
            get_client_info: string;
            json: string;
            browserName: string;
            browserVersion: string;
            osName: string;
            osVersion: string;
            deviceName: string;
            CPU_Type: string;
            is_online: string;
            get_notif_perm: string;
            ask_notif_perm: string;
            notification: string;
            alert: string;
            default: string;
            "t.default": string;
            "t.default.1": string;
            "t.default.2": string;
            "t.default.3": string;
            is_see_inside: string;
            deploy_env: string;
            title: string;
            content: string;
            icon: string;
            saveJSON: string;
            set_value_for_list_lenght: string;
        };
    };
    get documentURL(): string;
    get menuIconURI(): string;
    get blockIconURI(): string;
    get coverURI(): string;
    get authorInfo(): {
        labelName: string;
        username: string;
        homepage: string;
        email: string;
    };
    get blockPrefix(): string;
    get deprecatedBlocksByOpcodes(): string[];
    runtime: any;
    /** 弹窗通知冷却时间(秒) */
    get ALERT_COOLDOWN(): number;
    /** 上一次调用的时间 */
    alert_calltime: number;
    constructor(runtime: any);
    /**
     * 方便在扩展内部反复调用
     * v1.0.4
     * @param TYPE old args.TYPE
     * @returns
     */
    client_info(TYPE: string): string;
    /**
     * powered by Arkos
     * 删除了排除当前角色
     * v1.0.4
     * @returns
     */
    spriteMenu(): {
        text: string;
        value: number;
    }[] | {
        text: string;
        value: string;
    }[];
    /**
     * empty - 改成了 -没有数据-
     * v1.0.4
     * @returns
     */
    listMenu(): any[];
    variableMenu(): any[];
    extErr(e: Error): void;
    init(): void;
    /**
     * 重复执行 [listArgs] 的项目数次，将 [variableArgs] 增加 [NUM]
     * v1.0.5
     */
    set_value_for_list_lenght(args: {
        listArgs: SCarg;
        variableArgs: SCarg;
        NUM: SCarg;
    }, utils: any): void;
    /**
     * 保存客户端信息到列表
     * v1.0.4
     */
    saveJSON(args: {
        listArgs: string;
    }, utils: any): void;
    /**
     * 是否在创作页？
     */
    is_see_inside(): boolean;
    /**
     * 运行环境
     * prod：不在编辑器内
     * dev：在编辑器内
     */
    deploy_env(): "dev" | "prod";
    /**
     * 用户是否在线
     * 检测用户网络连接情况
     * @returns
     */
    is_online(): boolean;
    /**
     * 获取是否拥有通知权限
     */
    get_notif_perm(): boolean;
    /**
     * 申请通知权限
     */
    ask_notif_perm(): Promise<void>;
    /**
     * 通知
     * Notification弹窗
     * @param args
     * @async
     */
    Notification(args: {
        TITLE: SCarg;
        CONTENT: SCarg;
        ICON: SCarg;
    }): Promise<void>;
    /**
     * 弹窗
     * alert弹窗
     * @param args
     */
    alert(args: {
        CONTENT_1: string;
    }): void;
    /**
     * 获取客户端信息
     * @param args
     * @returns
     */
    get_client_info(args: {
        TYPE: string;
    }): string;
}
export {};
