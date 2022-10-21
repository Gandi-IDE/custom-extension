import zhCn from "./l10n/zh-cn.json";
import en from "./l10n/en.json";
import cover from "./assets/cover.jpg";
import blockIcon from "./assets/icon.png";
import ext from "./index";

export const extensionNS = 'hcn2';

export const extensionId = `${extensionNS}.test-2`;

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
    collaborator: '',
    doc: `${extensionId}.docURL`,
  },
  l10n: infoL10n,
}




