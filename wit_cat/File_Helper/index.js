
import WitCatFileHelper from "./extension.js";
import { witcat_file_helper_icon, witcat_file_helper_picture, witcat_file_helper_extensionId } from "./assets";

window.tempExt = {
    Extension: WitCatFileHelper,
    info: {
        name: "WitCatFileHelper.name",
        description: "WitCatFileHelper.descp",
        extensionId: witcat_file_helper_extensionId,
        iconURL: witcat_file_helper_picture,
        insetIconURL: witcat_file_helper_icon,
        featured: true,
        disabled: false,
        collaborator: "白猫 @ CCW"
    },
    l10n: {
        "zh-cn": {
            "WitCatFileHelper.name": "白猫的文件助手 V2.8",
            "WitCatFileHelper.descp": "读取/处理本地数据"
        },
        en: {
            "WitCatFileHelper.name": "WitCat’s File Helper V2.8",
            "WitCatFileHelper.descp": "Handling local data"
        }
    }
};