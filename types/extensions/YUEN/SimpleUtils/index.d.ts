import { GandiExtension } from "@cocrea/extension-kit";
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
            notification: string;
            alert: string;
            default: string;
            "t.default": string;
            "t.default.1": string;
            "t.default.2": string;
            "t.default.3": string;
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
            nitification: string;
            alert: string;
            default: string;
            "t.default": string;
            "t.default.1": string;
            "t.default.2": string;
            "t.default.3": string;
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
    constructor(runtime: any);
    /**
     * 方便在扩展内部反复调用
     * v1.0.4
     * @param TYPE old args.TYPE
     * @returns
     */
    client_info(TYPE: any): any;
    /**
     * powered by Arkos
     * 删除了排除当前角色
     * v1.0.4
     * @returns
     */
    spriteMenu(): any[];
    /**
     * empty - 改成了 -没有数据-
     * v1.0.4
     * @returns
     */
    listMenu(): any[];
    variableMenu(): any[];
    extErr(e: any): void;
    init(): void;
    /**
     * 重复执行 [listArgs] 的项目数次，将 [variableArgs] 增加 [NUM]
     * v1.0.5
     */
    set_value_for_list_lenght(args: any, utils: any): void;
    /**
     * 保存客户端信息到列表
     * v1.0.4
     */
    saveJSON(args: any, utils: any): void;
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
     * 通知
     * @param args
     */
    Notification(args: any): void;
    /**
     * 弹窗
     * @param args
     */
    alert(args: any): void;
    /**
     *
     * @param args 获取客户端信息
     * @returns
     */
    get_client_info(args: any): any;
}
