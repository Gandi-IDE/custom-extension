import { GandiExtension, BlockUtil } from '@cocrea/extension-kit';
import { IExtensionMenuItem } from '@cocrea/extension-kit/types/types/block';
interface ICatMenuObj {
    /** 适配 l10n 老配置逐渐下线 */
    text?: string;
    value: string;
    type: string;
    /** 多语言 */
    l10n?: {
        'zh-cn': string;
        en: string;
    };
}
type xigua_scratch_gui_lang = 'zh-cn' | 'en' | string;
interface ICatObj {
    md5: string;
    /** 不传参用默认配色 */
    ear?: string;
    face?: string;
    md51?: string;
    md52?: string;
    use_asset_v2?: boolean;
    isCustom?: boolean;
}
interface IOnlineConfigObj {
    cdnHost: string;
}
export default class BlockStyle extends GandiExtension {
    runtime: any;
    ccwAPI: any;
    scratchBlocks: any;
    onlineConfig: IOnlineConfigObj;
    isEyeTracking: boolean;
    extConfigHost: string;
    env: string;
    catInfos: {
        [key: string]: ICatObj;
    };
    menuList: Array<ICatMenuObj>;
    tagInfos: {
        [key: string]: string;
    };
    dynamicMenu: IExtensionMenuItem[];
    catEyeTrackingBtn: ReturnType<typeof BlockUtil.createButton>;
    currentCatName?: string;
    lastCurrentCatInfo?: ICatObj;
    customCatURI?: string;
    currentCatInfo?: ICatObj;
    isCocrea: boolean;
    xigua_scratch_gui_lang: xigua_scratch_gui_lang;
    constructor(runtime: {
        ccwAPI: any;
        scratchBlocks: any;
    });
    get extensionId(): string;
    get localization(): {
        'zh-cn': {
            name: string;
            desc: string;
            docURL: string;
            "Switch.OFF": string;
            "Switch.ON": string;
            "Args.URI": string;
            "Label.Set": string;
            "Block.OfficialCat": string;
            "Block.CustomCat": string;
            "Label.Tool": string;
            "Block.CloseAllCat": string;
            "Block.UseMouseCursor.OFF": string;
            "Block.UseMouseCursor.ON": string; /** 多语言 */
            "Block.applyCustomCatHat": string;
            "Block.applyCatHat": string;
            "Block.refreshConfig": string;
        };
        en: {
            name: string;
            desc: string;
            docURL: string;
            "Switch.OFF": string;
            "Switch.ON": string;
            "Args.URI": string;
            "Label.Set": string;
            "Block.OfficialCat": string;
            "Block.CustomCat": string;
            "Label.Tool": string;
            "Block.CloseAllCat": string;
            "Block.UseMouseCursor": string;
            "Block.UseMouseCursor.OFF": string;
            "Block.UseMouseCursor.ON": string;
            "Block.applyCustomCatHat": string;
            "Block.applyCatHat": string;
            "Block.refreshConfig": string;
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
    setColor(): void;
    getJSON(url: string | URL): Promise<any>;
    initConfig(extConfigHost: any): void;
    refreshWorkspace(): void;
    refreshConfigBlock(): void;
    getCatInfoByName(name: string | number): ICatObj;
    buildCatMenu(): {
        text: string;
        value: string;
    }[];
    init(): void;
    closeAllCatBlock(): void;
    /** 猫眼是否跟踪鼠标 */
    setCatEyeTracking(): void;
    setCurrentStyle(args: any, util: {
        thread: {
            blockGlowInFrame: Function;
        };
    }): boolean;
    setCustomCatBlock(args: any, util: any): boolean;
    styleMenu(): IExtensionMenuItem[];
    console(type: 'log' | 'info' | 'warn' | 'error', ctx: any): void;
}
export {};
