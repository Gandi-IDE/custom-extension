import { GandiExtension } from '@cocrea/extension-kit';
export default class ExtTest extends GandiExtension {
    get extensionId(): string;
    get localization(): {
        'zh-cn': {
            name: string;
            desc: string;
            docURL: string;
            test: string;
            commandArugA: string;
            menuOpt1: string;
            menuOpt12: string;
            commandArguB: string;
            targetReporter: string;
            globalReporter: string;
            conditionalBlocks: string;
            loopBlocks: string;
            eventBlocks: string;
            hatBlocks: string;
        };
        en: {
            name: string;
            desc: string;
            docURL: string;
            test: string;
            commandArugA: string;
            menuOpt1: string;
            menuOpt12: string;
            commandArguB: string;
            targetReporter: string;
            globalReporter: string;
            conditionalBlocks: string;
            loopBlocks: string;
            eventBlocks: string;
            hatBlocks: string;
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
    init(): void;
    test(args: any): void;
    targetReporter(args: any): void;
    globalReporter(args: any): void;
    conditionalBlocks(args: any): void;
    loopBlocks(args: any): void;
    eventBlocks(args: any): void;
    hatBlocks(args: any): void;
    buildDynamicMenu(): {
        text: string;
        value: string;
    }[];
}
