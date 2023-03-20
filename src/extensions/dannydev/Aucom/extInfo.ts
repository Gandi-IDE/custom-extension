
import cover from "./assets/cover.jpg";
import blockIcon from "./assets/icon.png";
import ext from "./index";
export const extensionNS = 'Dannydev';

export const extensionId = `${extensionNS}.aucom`;
const buildInfoL10n = (l10n) => {
  const {name, desc, docURL} = l10n;
  const infoL10n = {}
  infoL10n[`${extensionId}.name`] = name;
  infoL10n[`${extensionId}.desc`] = desc;
  infoL10n[`${extensionId}.docURL`] = docURL;
  return infoL10n;
}

const infoL10n = ext.l10n()


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
    collaborator: 'Nick',
    doc: `${extensionId}.docURL`,
  },
  l10n: infoL10n,
}




