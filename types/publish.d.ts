declare const _default: {
    SimpleUtils: {
        Extension: () => typeof import("./extensions/YUEN/SimpleUtils").default;
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
            "zh-cn": {
                [x: string]: string;
            };
            en: {
                [x: string]: string;
            };
        };
    };
    BlockStyle: {
        Extension: () => typeof import("./extensions/KYSTEAM/BlockStyle").default;
        info: {
            name: string;
            description: string;
            extensionId: string;
            iconURL: any;
            insetIconURL: any;
            featured: boolean;
            disabled: boolean;
            collaborator: string;
            collaboratorList: {
                collaborator: string;
                collaboratorURL: string;
            }[];
            doc: string;
        };
        l10n: {
            'zh-cn': {};
            en: {};
        };
    };
};
export default _default;
