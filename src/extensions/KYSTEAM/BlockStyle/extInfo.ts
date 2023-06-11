import zhCn from "./l10n/zh-cn.json";
import en from "./l10n/en.json";
import cover from "./assets/cover.png";
import blockIcon from "./assets/icon.png";
import ext from "./index";

export const extensionNS = 'KYSTEAM';

export const extensionId = `${extensionNS}.BlockStyle`;

const buildInfoL10n = (l10n) => {
  const {name, desc, docURL} = l10n;
  const infoL10n = {}
  infoL10n[`${extensionId}.name`] = name;
  infoL10n[`${extensionId}.desc`] = desc;
  infoL10n[`${extensionId}.docURL`] = docURL;
  return infoL10n;
}

const infoL10n = {
  'zh-cn': buildInfoL10n(zhCn),
  en: buildInfoL10n(en),
}


export default {
  Extension: () => ext,
  info: {
    name: `${extensionId}.name`,
    description: `${extensionId}.desc`,
    extensionId: extensionId,
    iconURL: cover,
    insetIconURL: blockIcon,
    featured: true,
    disabled: false,
    collaborator: 'KYS TEAM',
    collaboratorList:[{
      collaborator: "酷可mc@CCW",
      collaboratorURL: "https://www.ccw.site/student/610b508176415b2f27e0f851",
  }, {
      collaborator: "YUEN@CCW",
      collaboratorURL: "https://www.ccw.site/student/6173f57f48cf8f4796fc860e",
  }, {
      collaborator: "碳酸七嘤钠@CCW",
      collaboratorURL: "https://www.ccw.site/student/59f6f49b5f94a62d030b07fc",
  }],
    doc: `${extensionId}.docURL`,
  },
  l10n: infoL10n,
}




