import FeishuExtension from './extension';
import { Cover, extensionId, Icon } from './constants';

window.tempExt = {
  Extension: FeishuExtension,
  info: {
    name: 'YUEN.feishu.extensionName',
    description: 'YUEN.feishu.description',
    doc: 'YUEN.feishu.doc',
    extensionId,
    iconURL: Cover,
    insetIconURL: Icon,
    featured: true,
    disabled: false,
    collaborator: 'YUEN @ CCW',
    collaboratorURL: 'https://www.ccw.site/student/628979aa804a3a2bc801b097',
    collaboratorList: [
      {
        collaborator: 'YUEN @ CCW',
        collaboratorURL:
          'https://www.ccw.site/student/628979aa804a3a2bc801b097',
      },
      {
        collaborator: '酷可 @ CCW',
        collaboratorURL:
          'https://www.ccw.site/student/610b508176415b2f27e0f851',
      },
    ],
  },
  l10n: {
    'zh-cn': {
      'YUEN.feishu.extensionName': '飞书',
      'YUEN.feishu.description': '✨ 更好的WebHook',
      'YUEN.feishu.doc':
        'https://learn.ccw.site/article/7795eb4b-170b-435b-bca3-8b7d4e0c24f8',
    },
    en: {
      'YUEN.feishu.extensionName': 'Feishu',
      'YUEN.feishu.description': '✨ Enhanced WebHook',
      'YUEN.feishu.doc':
        'https://learn.ccw.site/article/e895cb95-cc0c-47a0-9bbb-a5aabf82750d',
    },
  },
};
