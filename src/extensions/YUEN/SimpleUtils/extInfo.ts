import zhCn from "./l10n/zh-cn.json";
import en from "./l10n/en.json";
import cover from "./assets/cover.png";
import blockIcon from "./assets/icon.png";
import ext from "./index";

export const extensionNS = "YUEN";

export const extensionId = `${extensionNS}.SimpleUtils`;

const buildInfoL10n = (l10n: {
  name: string;
  desc: string;
  docURL: string;
  [key: string]: string;
}) => {
  const { name, desc, docURL } = l10n;
  const infoL10n = {
    [`${extensionId}.name`]: name,
    [`${extensionId}.desc`]: desc,
    [`${extensionId}.docURL`]: docURL,
  };
  return infoL10n;
};

const infoL10n = {
  "zh-cn": buildInfoL10n(zhCn),
  en: buildInfoL10n(en),
};

const collaborator = 'YUEN@CCW';
const collaboratorURL = 'https://www.ccw.site/student/628979aa804a3a2bc801b097';

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
    collaborator,
    collaboratorURL,
    doc: `${extensionId}.docURL`,
  },
  l10n: infoL10n,
};
