import { STYLEENUM } from "./stats"
export default (formatMessage) => {
    return {
        id: 'stats',
        name: formatMessage('nights.stats.extensionName'),
        color1: '#4D7EB4',
        blocks: [
            {
                opcode: 'openStats',
                blockType: "command",
                text: formatMessage('nights.stats.openStats'),
            },
            {
                opcode: 'closeStats',
                blockType: "command",
                text: formatMessage('nights.stats.closeStats'),
            },
            {
                opcode: 'setStyle',
                blockType: "command",
                text: formatMessage('nights.stats.setStyle'),
                arguments: {
                    STYLE: {
                        type: "string",
                        menu: 'STYLE',
                        defaultValue:  STYLEENUM.ONE
                    },
                }
            }
        ],
        menus: {
            STYLE: {
                items: [
                    {
                        text: formatMessage('nights.stats.showOne'),
                        value: STYLEENUM.ONE.toString()
                    },
                    {
                        text: formatMessage('nights.stats.showAll'),
                        value: STYLEENUM.ALL.toString()
                    }
                ]
            },
        }
    }
}