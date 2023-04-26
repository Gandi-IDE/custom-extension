import ext from "./index";
export declare const extensionNS = "YUEN";
export declare const extensionId: string;
declare const _default: {
    Extension: () => typeof ext;
    info: {
        name: string;
        description: string;
        extensionId: string;
        iconURL: any;
        insetIconURL: any;
        featured: boolean;
        disabled: boolean;
        collaborator: string;
        collaboratorURL: string;
        doc: string;
    };
    l10n: {
        "zh-cn": {};
        en: {};
    };
};
export default _default;
