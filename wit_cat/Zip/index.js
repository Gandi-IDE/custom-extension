
import WitCatZip from "./extension.js";
import { witcat_Zip_icon, witcat_Zip_picture, witcat_Zip_extensionId } from "./assets/index.js";

window.tempExt = {
    Extension: WitCatZip,
    info: {
        name: "WitCatZip.name",
        description: "WitCatZip.descp",
        extensionId: witcat_Zip_extensionId,
        iconURL: witcat_Zip_picture,
        insetIconURL: witcat_Zip_icon,
        featured: true,
        disabled: false,
        collaborator: "白猫 @ CCW"
    },
    l10n: {
        "zh-cn": {
            "WitCatZip.name": "白猫的压缩文件 V1.0",
            "WitCatZip.descp": "处理压缩文件"
        },
        en: {
            "WitCatZip.name": "WitCat’s Zip V1.0",
            "WitCatZip.descp": "Processing compressed files"
        }
    }
};