import KukeMCI18n from "./extension.js";
import { kukemc_i18n_icon, kukemc_i18n_cover, kukemc_i18n_extensionId } from "./assets";

window.tempExt = {
	Extension: KukeMCI18n,
	info: {
	  name: "kukeMCI18n.name",
	  description: "kukeMCI18n.description",
	  doc: "https://learn.ccw.site/article/99e0432c-98f2-4394-8a32-e501beee1e27",
	  extensionId: kukemc_i18n_extensionId,
	  iconURL: kukemc_i18n_cover,
	  insetIconURL: kukemc_i18n_icon,
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
	  ],
	},
	l10n: {
	  "zh-cn": {
		"kukeMCI18n.name": "I18n",
		"kukeMCI18n.description":
		  "你的首款游戏多语言扩展，助你轻松实现游戏内容的国际化支持。",
	  },
	  en: {
		"kukeMCI18n.name": "I18n",
		"kukeMCI18n.description":
		  "Your first game's multilingual extension, helping you effortlessly implement internationalization support for your game content.",
	  	},
	},
};