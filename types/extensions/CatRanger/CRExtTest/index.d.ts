import { GandiExtension } from '@cocrea/extension-kit';
/** Scratch 参数类型 */
type SCarg = string | number | boolean;
export default class CRExtTest extends GandiExtension {
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
            /** Scratch 参数类型 */
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
    test(args: {
        A: SCarg;
        B: SCarg;
        C: SCarg;
    }): void;
    targetReporter(): void;
    globalReporter(): void;
    conditionalBlocks(): void;
    loopBlocks(): void;
    eventBlocks(): void;
    hatBlocks(): void;
    buildDynamicMenu(): {
        text: string;
        value: string;
    }[];
}
export {};
