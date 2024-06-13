import axios from 'axios';
import Cast from '../../../utils/cast';
import Icon from './assets/icon.png';
import { extensionId } from './constants';

const { BlockType, ArgumentType } = window.Scratch;

export default class FeishuExtension {
  constructor(runtime) {
    this.runtime = runtime;
    this._formatMessage = ((l10n) => {
      Object.keys(l10n).forEach((lang) => {
        let _temp = l10n[lang];
        l10n[lang] = {};
        Object.keys(_temp).forEach((key) => {
          l10n[lang][`${extensionId}.${key}`] = _temp[key];
        });
      });

      return this.runtime.getFormatMessage(l10n);
    })({
      en: {
        name: 'Feishu',
        docsUrl:
          'https://learn.ccw.site/article/e895cb95-cc0c-47a0-9bbb-a5aabf82750d',
        // Message
        'tag.message': '📰 Message',
        'block.triggerWebhook.message':
          'Trigger Group Custom Bot WebHook [ID] With Send Text [TEXT]',
        'block.triggerWebhook.atUser':
          'Trigger Group Custom Bot WebHook [ID] With @[USER_NAME]([USER_ID]) And Send Text [TEXT]',
        'block.triggerWebhook.image':
          'Trigger Group Custom Bot WebHook [ID] With Send Image [IMAGE_KEY]',
        'block.triggerWebhook.card':
          'Trigger Group Custom Bot WebHook [ID] With Send Card [CARD_ID]',
        // Card
        'tag.card': '🔖 Card',
        'block.card.set': 'Set Card [ID] `s [TYPE] To [DATA]',
        'block.card.create': 'Create Card [ID]',
        'block.card.join': 'Add Commponent [TYPE] Params [DATA] To Card [ID]',
        'block.card.remove': 'Remove Card [ID] `S [TYPE] Commponent(s)',

        // Set Cart Config Menu
        'menu.card.set.template': 'HeaderTemplate',
        'menu.card.set.title': 'HeaderTitle',
        'menu.card.set.config': 'CardConfig',
        // Remove Card Component Menu
        'menu.card.remove.last': 'Last',
        'menu.card.remove.all': 'All',
        // Add Card Component Menu
        'menu.card.component.div': 'Container',
        'menu.card.component.markdown': 'MarkDown',
        'menu.card.component.plain_text': 'Text',
        'menu.card.component.img': 'Image',
        'menu.card.component.hr': 'Divider',
        'menu.card.component.action': 'Button',
        'menu.card.component.lark_md': 'Rich Text',
        'menu.card.component.note': 'Note',

        // Shortcut
        'tag.shortcut': '✈ Shortcut',
        'block.triggerWebhook.json':
          'Trigger Shortcut Bot webhook [ID] With Params [DATA]',
        // Some Constant Variable
        'defaultValue.text': 'Hello!',
        'resultMessage.emptyMenu': 'Has no content',
        'block.switch': '[STATE] Request',
      },
      'zh-cn': {
        name: '飞书',
        docsUrl:
          'https://learn.ccw.site/article/7795eb4b-170b-435b-bca3-8b7d4e0c24f8',
        // 消息
        'tag.message': '📰 消息',
        'block.triggerWebhook.message':
          '触发群机器人webhook [ID] 并发送文本 [TEXT]',
        'block.triggerWebhook.atUser':
          '触发webhook [ID] 并@[USER_NAME]([USER_ID]) 发送文本 [TEXT]',
        'block.triggerWebhook.image': '触发webhook [ID] 并发送图像 [IMAGE_KEY]',
        'block.triggerWebhook.card': '触发webhook [ID] 并发送卡片 [CARD_ID]',
        // 卡片
        'tag.card': '🔖 卡片',
        'block.card.set': '设置卡片 [ID] 的 [TYPE] 为 [DATA]',
        'block.card.create': '创建卡片 [ID]',
        'block.card.join': '将组件 [TYPE] 参数 [DATA] 添加到卡片 [ID]',
        'block.card.remove': '移除卡片 [ID] 的 [TYPE] 组件',

        // 设置卡片参数菜单
        'menu.card.set.template': '头部模板',
        'menu.card.set.title': '头部标题',
        'menu.card.set.config': '卡片配置',
        // 移除卡片组件菜单
        'menu.card.remove.last': '最后一个',
        'menu.card.remove.all': '所有',
        // 新增卡片组件菜单
        'menu.card.component.div': '容器',
        'menu.card.component.markdown': 'MarkDown',
        'menu.card.component.plain_text': '文本',
        'menu.card.component.img': '图片',
        'menu.card.component.hr': '分割线',
        'menu.card.component.action': '按钮',
        'menu.card.component.lark_md': '富文本',
        'menu.card.component.note': '备注',

        // 捷径
        'tag.shortcut': '✈ 捷径',
        'block.triggerWebhook.json': '触发捷径webhook [ID] 并传参 [DATA]',
        // 一些常量
        'defaultValue.text': '你好！',
        'resultMessage.emptyMenu': '没有内容',
        'block.switch': '[STATE] 请求',
      },
    });

    this.app = axios.create();
    this.requestSwitch = false;

    // card
    this.customCards = {
      myCard: {
        config: {},
        elements: [
          {
            tag: 'div',
            text: {
              content: '**内容**',
              tag: 'lark_md',
            },
          },
        ],
        header: {
          template: 'blue',
          title: {
            content: '我的卡片',
            tag: 'plain_text',
          },
        },
      },
    };
  }

  fm (id) {
    id = `${extensionId}.${id}`;
    return this._formatMessage({
      id,
      default: id,
      description: id,
    });
  }

  cloneReporterBlocks (
    blocks,
    blockTypes,
    filterHideBlockTypes,
    beforeBlockType
  ) {
    if (typeof blocks !== 'object' || typeof blockTypes !== 'object') return [];

    let _clonedBlocks = [];
    blocks.forEach((block) => {
      for (const i in blockTypes) {
        if (block.opcode && block.blockType) {
          _clonedBlocks.push({
            ...block,
            opcode:
              beforeBlockType === blockTypes[i]
                ? block.opcode
                : block.opcode + blockTypes[i],
            blockType: blockTypes[i],
            hideFromPalette: filterHideBlockTypes.includes(blockTypes[i])
              ? true
              : false,
          });
          this[
            beforeBlockType === blockTypes[i]
              ? block.opcode
              : block.opcode + blockTypes[i]
          ] = this[block.opcode];
        }
      }
    });
    return _clonedBlocks;
  }

  getHats () {
    return [];
  }

  getInfo () {
    const triggerWebhookMessage = {
      opcode: 'triggerWebhookMessage',
      blockType: BlockType.REPORTER,
      hideFromPalette: true,
      text: this.fm('block.triggerWebhook.message'),
      arguments: {
        ID: {
          type: ArgumentType.STRING,
          defaultValue: '',
        },
        TEXT: {
          type: ArgumentType.STRING,
          defaultValue: this.fm('defaultValue.text'),
        },
      },
    };

    const triggerWebhookAtUser = {
      opcode: 'triggerWebhookAtUser',
      blockType: BlockType.REPORTER,
      hideFromPalette: true,
      text: this.fm('block.triggerWebhook.atUser'),
      arguments: {
        ID: {
          type: ArgumentType.STRING,
          defaultValue: '',
        },
        USER_ID: {
          type: ArgumentType.STRING,
          defaultValue: 'all',
        },
        USER_NAME: {
          type: ArgumentType.STRING,
          defaultValue: '所有人',
        },
        TEXT: {
          type: ArgumentType.STRING,
          defaultValue: this.fm('defaultValue.text'),
        },
      },
    };

    const triggerWebhookImage = {
      opcode: 'triggerWebhookImage',
      blockType: BlockType.REPORTER,
      text: this.fm('block.triggerWebhook.image'),
      hideFromPalette: true,
      arguments: {
        ID: {
          type: ArgumentType.STRING,
          defaultValue: '',
        },
        IMAGE_KEY: {
          type: ArgumentType.STRING,
          defaultValue: 'img_v3_025j_16d1594a-f4d1-455f-a339-a1c5cfb24deg',
        },
      },
    };

    const triggerWebhookCard = {
      opcode: 'triggerWebhookCard',
      blockType: BlockType.REPORTER,
      hideFromPalette: true,
      text: this.fm('block.triggerWebhook.card'),
      arguments: {
        ID: {
          type: ArgumentType.STRING,
          defaultValue: '',
        },
        CARD_ID: {
          type: ArgumentType.STRING,
          menu: 'CARD_ID',
        },
      },
    };

    const cardCreate = {
      opcode: 'cardCreate',
      blockType: BlockType.COMMAND,
      text: this.fm('block.card.create'),
      arguments: {
        ID: {
          type: ArgumentType.STRING,
          defaultValue: 'myCard1',
        },
      },
    };

    const cardSet = {
      opcode: 'cardSet',
      blockType: BlockType.COMMAND,
      text: this.fm('block.card.set'),
      arguments: {
        ID: {
          type: ArgumentType.STRING,
          menu: 'CARD_ID',
        },
        TYPE: {
          type: ArgumentType.STRING,
          menu: 'CARD_CONFIG_TYPE',
        },
        DATA: {
          type: ArgumentType.STRING,
          defaultValue: '{"wide_screen_mode":true}',
        },
      },
    };

    const cardJoin = {
      opcode: 'cardJoin',
      blockType: BlockType.COMMAND,
      text: this.fm('block.card.join'),
      arguments: {
        TYPE: {
          type: ArgumentType.STRING,
          menu: 'CARD_COMPONENT_TYPE',
        },
        DATA: {
          type: ArgumentType.STRING,
          defaultValue: '{"content":"我的卡片"}',
        },
        ID: {
          type: ArgumentType.STRING,
          menu: 'CARD_ID',
        },
      },
    };

    const cardRemove = {
      opcode: 'cardRemove',
      blockType: BlockType.COMMAND,
      text: this.fm('block.card.remove'),
      arguments: {
        ID: {
          type: ArgumentType.STRING,
          menu: 'CARD_ID',
        },
        TYPE: {
          type: ArgumentType.STRING,
          menu: 'CARD_REMOVE_TYPE',
        },
      },
    };

    const triggerWebhookJson = {
      opcode: 'triggerWebhookJson',
      blockType: BlockType.REPORTER,
      hideFromPalette: true,
      text: this.fm('block.triggerWebhook.json'),
      arguments: {
        ID: {
          type: ArgumentType.STRING,
          defaultValue: '',
        },
        DATA: {
          type: ArgumentType.STRING,
          defaultValue: '{}',
        },
      },
    };

    const switchRequest = {
      opcode: 'switchRequest',
      blockType: BlockType.COMMAND,
      text: this.fm('block.switch'),
      arguments: {
        STATE: {
          type: ArgumentType.STRING,
          menu: 'SWITCH_LIST',
        },
      },
    };

    return {
      id: extensionId,
      name: this.fm('name'),
      blockIconURI: Icon,
      menuIconURI: Icon,
      docsURI: this.fm('docsUrl'),
      color1: '#8eace1',
      color2: '#86a2d4',
      blocks: [
        switchRequest,
        '---' + this.fm('tag.message'),
        ...this.cloneReporterBlocks(
          [
            triggerWebhookMessage,
            triggerWebhookAtUser,
            triggerWebhookImage,
            triggerWebhookCard,
          ],
          [BlockType.REPORTER, BlockType.COMMAND],
          [BlockType.REPORTER],
          BlockType.REPORTER
        ),
        '---' + this.fm('tag.card'),
        cardCreate,
        cardSet,
        cardJoin,
        cardRemove,
        '---' + this.fm('tag.shortcut'),
        ...this.cloneReporterBlocks(
          [triggerWebhookJson],
          [BlockType.REPORTER, BlockType.COMMAND],
          [BlockType.REPORTER],
          BlockType.REPORTER
        ),
      ],
      menus: {
        CARD_ID: {
          items: '__cardIdMenu',
        },
        CARD_CONFIG_TYPE: [
          {
            text: this.fm('menu.card.set.template'),
            value: 'template',
          },
          {
            text: this.fm('menu.card.set.title'),
            value: 'title',
          },
          {
            text: this.fm('menu.card.set.config'),
            value: 'config',
          },
        ],
        CARD_COMPONENT_TYPE: [
          {
            text: this.fm('menu.card.component.div'),
            value: 'div',
          },
          {
            text: this.fm('menu.card.component.markdown'),
            value: 'markdown',
          },
          {
            text: this.fm('menu.card.component.plain_text'),
            value: 'plain_text',
          },
          {
            text: this.fm('menu.card.component.img'),
            value: 'img',
          },
          {
            text: this.fm('menu.card.component.hr'),
            value: 'hr',
          },
          {
            text: this.fm('menu.card.component.action'),
            value: 'action',
          },
          {
            text: this.fm('menu.card.component.lark_md'),
            value: 'lark_md',
          },
          {
            text: this.fm('menu.card.component.note'),
            value: 'note',
          },
        ],
        CARD_REMOVE_TYPE: [
          {
            text: this.fm('menu.card.remove.last'),
            value: 'last',
          },
          {
            text: this.fm('menu.card.remove.all'),
            value: 'all',
          },
        ],
        SWITCH_LIST: ['on', 'off'],
      },
    };
  }

  switchRequest ({ STATE }) {
    STATE = Cast.toString(STATE);
    STATE === 'on' ? (this.requestSwitch = true) : (this.requestSwitch = false);
  }

  triggerWebhookMessage ({ ID, TEXT }) {
    ID = Cast.toString(ID);
    TEXT = Cast.toString(TEXT);

    if (!ID || !TEXT || !this.requestSwitch) return;

    this.app.post(`https://open.feishu.cn/open-apis/bot/v2/hook/${ID}`, {
      msg_type: 'text',
      content: {
        text: TEXT,
      },
    });
  }

  triggerWebhookAtUser ({ ID, USER_ID, USER_NAME, TEXT }) {
    ID = Cast.toString(ID);
    USER_ID = Cast.toString(USER_ID);
    USER_NAME = Cast.toString(USER_NAME);
    TEXT = Cast.toString(TEXT);

    if (!ID || !USER_ID || !USER_NAME || !TEXT || !this.requestSwitch) return;

    this.app.post(`https://open.feishu.cn/open-apis/bot/v2/hook/${ID}`, {
      msg_type: 'text',
      content: {
        text: `<at user_id="${USER_ID}">${USER_ID === 'all' ? '所有人' : USER_NAME
        }</at> ${TEXT}`,
      },
    });
  }

  triggerWebhookImage ({ ID, IMAGE_KEY }) {
    ID = Cast.toString(ID);
    IMAGE_KEY = Cast.toString(IMAGE_KEY);

    if (!ID || !IMAGE_KEY || !this.requestSwitch) return;

    this.app.post(`https://open.feishu.cn/open-apis/bot/v2/hook/${ID}`, {
      msg_type: 'image',
      content: {
        image_key: IMAGE_KEY,
      },
    });
  }

  triggerWebhookCard ({ ID, CARD_ID }) {
    ID = Cast.toString(ID);
    CARD_ID = Cast.toString(CARD_ID);

    if (
      !ID ||
      !CARD_ID ||
      !(CARD_ID in this.customCards) ||
      !this.requestSwitch
    )
      return;

    this.app.post(`https://open.feishu.cn/open-apis/bot/v2/hook/${ID}`, {
      msg_type: 'interactive',
      card: this.customCards[CARD_ID],
    });
  }

  cardCreate ({ ID }) {
    ID = Cast.toString(ID);

    if (!ID) return;

    this.customCards[ID] = {
      config: {},
      elements: [],
      header: {
        template: 'blue',
        title: {
          content: '未命名卡片',
          tag: 'plain_text',
        },
      },
    };
  }

  cardSet ({ ID, TYPE, DATA }) {
    ID = Cast.toString(ID);
    TYPE = Cast.toString(TYPE);
    DATA = Cast.toString(DATA);

    if (!ID || !TYPE || !DATA || !(ID in this.customCards)) return;

    try {
      switch (TYPE) {
      case 'template':
        this.customCards[ID].header.template = DATA;
        break;
      case 'title':
        this.customCards[ID].header.title.content = DATA;
        break;
      case 'config':
        this.customCards[ID].config = JSON.parse(DATA) || {};
        break;
      }
    } catch (e) {
      console.error(`${extensionId} parse card failed`, e);
    }
  }

  cardJoin ({ TYPE, DATA, ID }) {
    TYPE = Cast.toString(TYPE);
    DATA = Cast.toString(DATA);
    ID = Cast.toString(ID);

    if (!TYPE || !DATA || !ID || !(ID in this.customCards)) return;

    try {
      const data = JSON.parse(DATA) || {};
      this.customCards[ID].elements.push({
        tag: TYPE,
        ...data,
      });
    } catch (e) {
      console.error(`${extensionId} parse card failed`, e);
    }
  }

  cardRemove ({ ID, TYPE }) {
    ID = Cast.toString(ID);

    if (!ID || !(ID in this.customCards) || !TYPE) return;

    if (TYPE === 'last')
      this.customCards[ID].elements = this.customCards[ID].elements.slice(
        0,
        -1
      );
    if (TYPE === 'all') this.customCards[ID].elements = [];
  }

  triggerWebhookJson ({ ID, DATA }) {
    ID = Cast.toString(ID);
    DATA = Cast.toString(DATA);

    if (!DATA || !ID || !this.requestSwitch) return;

    try {
      DATA = JSON.parse(DATA) || {};
    } catch (e) {
      console.error(`${extensionId} parse card failed`, e);
    }

    fetch(`https://www.feishu.cn/flow/api/trigger-webhook/${ID}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      cors: true,
      body: JSON.stringify(DATA),
    });
  }

  __cardIdMenu () {
    return Object.keys(this.customCards).length > 0
      ? Object.keys(this.customCards).map((v) => {
        return {
          text: v,
          value: v,
        };
      })
      : [
        {
          text: this.fm('resultMessage.emptyMenu'),
          value: '',
        },
      ];
  }
}
