/*
 * @Author: YUEN
 * @Date: 2023-06-12 14:49:11
 * @LastEditors: YUEN
 * @LastEditTime: 2023-06-30 13:20:23
 * @Description:
 */
import zhCn from './l10n/zh-cn.json';
import en from './l10n/en.json';
import cover from './assets/cover.png';
import blockIcon from './assets/icon.png';
import ext from './index';

export const extensionNS = 'KYSTEAM';

export const extensionId = `${extensionNS}.BlockStyle`;

const buildInfoL10n = (l10n) => {
  const { name, desc, docURL } = l10n;
  const infoL10n = {};
  infoL10n[`${extensionId}.name`] = name;
  infoL10n[`${extensionId}.desc`] = desc;
  infoL10n[`${extensionId}.docURL`] = docURL;
  return infoL10n;
};

const infoL10n = {
  'zh-cn': buildInfoL10n(zhCn),
  en: buildInfoL10n(en),
};

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
    collaborator: 'KYSTEAM',
    collaboratorList: [
      {
        collaborator: '酷可mc@CCW',
        collaboratorURL:
          'https://www.ccw.site/student/610b508176415b2f27e0f851',
      },
      {
        collaborator: 'YUEN@CCW',
        collaboratorURL:
          'https://www.ccw.site/student/6173f57f48cf8f4796fc860e',
      },
    ],
    doc: `${extensionId}.docURL`,
  },
  l10n: infoL10n,
};
