import { GandiExtension } from '@cocrea/extension-kit';
declare class runtime {
    getFormatMessage(l10n: {
        [x: string]: {};
    }): (t: any) => {
        'zh-cn': {};
        en: {};
    };
    _formatMessage(t: any): {
        'zh-cn': {};
        en: {};
    };
}
export default class ddevcom extends GandiExtension {
    static l10n(): any;
    runtime_: runtime;
    get extensionId(): string;
    get localization(): {
        'zh-cn': {};
        en: {};
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
    init(): void;
    test(args: {
        A: any;
        B: any;
        C: any;
    }): void;
}
export {};
