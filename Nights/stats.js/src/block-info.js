import { STYLEENUM } from "./stats"
export default (formatMessage) => {
    return {
        id: 'stats',
        name: formatMessage('Stats.extensionName'),
        color1: '#4D7EB4',
        blocks: [
            {
                opcode: 'openStats',
                blockType: "command",
                text: formatMessage('Stats.openStats'),
            },
            {
                opcode: 'closeStats',
                blockType: "command",
                text: formatMessage('Stats.closeStats'),
            },
            {
                opcode: 'setStyle',
                blockType: "command",
                text: formatMessage('Stats.setStyle'),
                arguments: {
                    STYLE: {
                        type: "number",
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
                        text: formatMessage('Stats.showOne'),
                        value: STYLEENUM.ONE
                    },
                    {
                        text: formatMessage('Stats.showAll'),
                        value: STYLEENUM.ALL
                    }
                ]
            },
        }
    }
}