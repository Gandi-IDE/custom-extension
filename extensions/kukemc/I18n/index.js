import KukeMCI18n from "./extension.js";
import { kukemcI18nIcon, kukemcI18nCover, kukemcI18nExtensionId } from "./assets";

window.tempExt = {
  Extension: KukeMCI18n,
  info: {
    name: "kukeMCI18n.name",
    description: "kukeMCI18n.description",
    doc: "https://learn.ccw.site/article/99e0432c-98f2-4394-8a32-e501beee1e27",
    extensionId: kukemcI18nExtensionId,
    iconURL: kukemcI18nCover,
    insetIconURL: kukemcI18nIcon,
    featured: true,
    disabled: false,
    collaborator: "酷可mc @ CCW",
    collaboratorURL: "https://www.ccw.site/student/203910367",
    collaboratorList: [
      {
        collaborator: "酷可mc @ CCW",
        collaboratorURL: "https://www.ccw.site/student/203910367",
      },
      {
        collaborator: "YUEN @ CCW",
        collaboratorURL: "https://www.ccw.site/student/236217560",
      },
      {
        collaborator: "FurryR @ GitHub",
        collaboratorURL: "https://github.com/FurryR",
      },
    ],
  },
  l10n: {
    "zh-cn": {
      "kukeMCI18n.name": "I18n",
      "kukeMCI18n.description": "你的首款游戏多语言扩展，助你轻松实现游戏内容的国际化支持。",
    },
    en: {
      "kukeMCI18n.name": "I18n",
      "kukeMCI18n.description":
        "Your first game's multilingual extension, helping you effortlessly implement internationalization support for your game content.",
    },
  },
};
