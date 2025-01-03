import kukemcWebhook from "./extension.js";
import { Icon, Cover, extensionId } from "./assets";

window.tempExt = {
	Extension: kukemcWebhook,
	info: {
		name: "kukemcWebhook.name",
		description: "kukemcWebhook.description",
		doc: "https://learn.ccw.site/article/99e0432c-98f2-4394-8a32-e501beee1e27",
		extensionId: extensionId,
		iconURL: Cover,
		insetIconURL: Icon,
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
				ccollaborator: 'Arkos @ CCW',
				collaboratorURL: 'https://www.ccw.site/student/6107c5323e593a0c25f850f8',
			},
		],
	},
	l10n: {
		"zh-cn": {
			"kukemcWebhook.name": "WebHook",
			"kukemcWebhook.description":
				"✨更好的WebHook",
		},
		en: {
			"kukemcWebhook.name": "WebHook",
			"kukemcWebhook.description":
				"✨Better WebHook",
		},
		uk: {
			"kukemcWebhook.name": "Вебхук",
			"kukemcWebhook.description":
				"✨Найкращий вебхук",
		},
	},
};
