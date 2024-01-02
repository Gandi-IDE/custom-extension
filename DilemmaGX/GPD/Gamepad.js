const ext_id = 'Gamepad'
const ext_cover =
    ''
const ext_icon =
    ''

const {
    BlockType, ArgumentType, TargetType, Cast,
} = Scratch;

const dz_axis = 0.05;
const dz_button = 0.05;

const getGamepads = (index) => {
    if (index === "any") {
        return navigator.getGamepads().filter((i) => i);
    }
    const gamepad = navigator.getGamepads()[index - 1];
    if (gamepad) {
        return [gamepad];
    }
    return [];
};

const isButtonPressed = (gamepad, buttonIndex) => {
    if (buttonIndex === "any") {
        return gamepad.buttons.some((i) => i.pressed);
    }
    const button = gamepad.buttons[buttonIndex - 1];
    if (!button) {
        return false;
    }
    return button.pressed;
};

const getButtonValue = (gamepad, buttonIndex) => {
    const button = gamepad.buttons[buttonIndex - 1];
    if (!button) {
        return 0;
    }
    const value = button.value;
    if (value < dz_button) {
        return 0;
    }
    return value;
};

const getAxisValue = (gamepad, axisIndex) => {
    const axisValue = gamepad.axes[axisIndex - 1];
    if (typeof axisValue !== "number") {
        return 0;
    }
    if (Math.abs(axisValue) < dz_axis) {
        return 0;
    }
    return axisValue;
};

class Gamepad {
    _formatMessage
    runtime
    constructor(runtime) {
        this.runtime = runtime
        this._formatMessage = runtime.getFormatMessage({
            'zh-cn': {
                'Gpd.extensionName': 'Gamepad',

                'Gpd.block.gamepadConnected': '游戏手柄 [pad] 已连接？',
                'Gpd.block.buttonDown': '按钮 [b] 在游戏手柄 [i] 上被按下？',
                'Gpd.block.buttonValue': '游戏手柄 [i] 上按钮 [b] 的值',
                'Gpd.block.axisValue': '游戏手柄 [i] 上轴 [b] 的值',
                'Gpd.block.axisDirection': '游戏手柄 [pad] 上 [axis] 的方向',
                'Gpd.block.axisMagnitude': '游戏手柄 [pad] 上 [axis] 的大小',
                'Gpd.block.axisVortex': '(实验性) 游戏手柄 [pad] 上 [axis] 的向量',
                'Gpd.block.rumble': '在游戏手柄 [i] 上震动强 [s] 和弱 [w] 各 [t] 秒',

                'Gpd.menu.any': '任意(any)',
                'Gpd.menu.Left bumper (5)': '左按钮 (5)',
                'Gpd.menu.Right bumper (6)': '右按钮 (6)',
                'Gpd.menu.Left trigger (7)': '左扳机 (7)',
                'Gpd.menu.Right trigger (8)': '右扳机 (8)',
                'Gpd.menu.Select/View (9)': '选择/查看 (9)',
                'Gpd.menu.Start/Menu (10)': '开始/菜单 (10)',
                'Gpd.menu.Left stick (11)': '左摇杆 (11)',
                'Gpd.menu.Right stick (12)': '右摇杆 (12)',
                'Gpd.menu.D-pad up (13)': '方向↑ (13)',
                'Gpd.menu.D-pad down (14)': '方向↓ (14)',
                'Gpd.menu.D-pad left (15)': '方向← (15)',
                'Gpd.menu.D-pad right (16)': '方向→ (16)',
                'Gpd.menu.Left stick horizontal (1)': '左摇杆x (1)',
                'Gpd.menu.Left stick vertical (2)': '左摇杆y (2)',
                'Gpd.menu.Right stick horizontal (3)': '右摇杆x (3)',
                'Gpd.menu.Right stick vertical (4)': '右摇杆y (4)',
                'Gpd.menu.Left stick (1)': '左摇杆 (1)',
                'Gpd.menu.Right stick (3)': '右摇杆 (3)',
            },

            en: {
                'Gpd.extensionName': 'Gamepad',

                'Gpd.block.gamepadConnected': 'gamepad [pad] connected?',
                'Gpd.block.buttonDown': 'button [b] on pad [i] pressed?',
                'Gpd.block.buttonValue': 'value of button [b] on pad [i]',
                'Gpd.block.axisValue': 'value of axis [b] on pad [i]',
                'Gpd.block.axisDirection': 'direction of axes [axis] on pad [pad]',
                'Gpd.block.axisMagnitude': 'magnitude of axes [axis] on pad [pad]',
                'Gpd.block.axisVortex': '(Experimental) vortex of axes [axis] on pad [pad]',
                'Gpd.block.rumble': 'rumble strong [s] and weak [w] for [t] sec. on pad [i]',

                'Gpd.menu.any': 'any',
                'Gpd.menu.Left bumper (5)': 'Left bumper (5)',
                'Gpd.menu.Right bumper (6)': 'Right bumper (6)',
                'Gpd.menu.Left trigger (7)': 'Left trigger (7)',
                'Gpd.menu.Right trigger (8)': 'Right trigger (8)',
                'Gpd.menu.Select/View (9)': 'Select/View (9)',
                'Gpd.menu.Start/Menu (10)': 'Start/Menu (10)',
                'Gpd.menu.Left stick (11)': 'Left stick (11)',
                'Gpd.menu.Right stick (12)': 'Right stick (12)',
                'Gpd.menu.D-pad up (13)': 'D-pad up (13)',
                'Gpd.menu.D-pad down (14)': 'D-pad down (14)',
                'Gpd.menu.D-pad left (15)': 'D-pad left (15)',
                'Gpd.menu.D-pad right (16)': 'D-pad right (16)',
                'Gpd.menu.Left stick horizontal (1)': 'Left stick horizontal (1)',
                'Gpd.menu.Left stick vertical (2)': 'Left stick vertical (2)',
                'Gpd.menu.Right stick horizontal (3)': 'Right stick horizontal (3)',
                'Gpd.menu.Right stick vertical (4)': 'Right stick vertical (4)',
                'Gpd.menu.Left stick (1)': 'Left stick (1)',
                'Gpd.menu.Right stick (3)': 'Right stick (3)',
            }
        })
    }
    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id
        })
    }
    getInfo() {
        return {
            id: ext_id, // ext id
            name: this.formatMessage('Gpd.extensionName'), // ext name
            color1: '#5cb1d6',
            color2: '#47a8d1',
            menuIconURI: ext_icon,
            blockIconURI: ext_icon,
            blocks: [
                {
                    opcode: "gamepadConnected",
                    blockType: BlockType.BOOLEAN,
                    text: this.formatMessage("Gpd.block.gamepadConnected"),
                    arguments: {
                        pad: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "padMenu",
                        },
                    },
                },
                {
                    opcode: "buttonDown",
                    blockType: BlockType.BOOLEAN,
                    text: this.formatMessage("Gpd.block.buttonDown"),
                    arguments: {
                        b: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "buttonMenu",
                        },
                        i: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "padMenu",
                        },
                    },
                },
                {
                    opcode: "buttonValue",
                    blockType: 'reporter',
                    text: this.formatMessage("Gpd.block.buttonValue"),
                    arguments: {
                        b: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "buttonMenu",
                        },
                        i: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "padMenu",
                        },
                    },
                },
                {
                    opcode: "axisValue",
                    blockType: 'reporter',
                    text: this.formatMessage("Gpd.block.axisValue"),
                    arguments: {
                        b: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "axisMenu",
                        },
                        i: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "padMenu",
                        },
                    },
                },
                {
                    opcode: "axisDirection",
                    blockType: 'reporter',
                    text: this.formatMessage("Gpd.block.axisDirection"),
                    arguments: {
                        axis: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "axesGroupMenu",
                        },
                        pad: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "padMenu",
                        },
                    },
                },
                {
                    opcode: "axisMagnitude",
                    blockType: 'reporter',
                    text: this.formatMessage("Gpd.block.axisMagnitude"),
                    arguments: {
                        axis: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "axesGroupMenu",
                        },
                        pad: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "padMenu",
                        },
                    },
                },
                {
                    opcode: "axisVortex",
                    blockType: 'reporter',
                    text: this.formatMessage("Gpd.block.axisVortex"),
                    arguments: {
                        axis: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "axesGroupMenu",
                        },
                        pad: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "padMenu",
                        },
                    },
                },
                {
                    opcode: "rumble",
                    blockType: 'command',
                    text: this.formatMessage("Gpd.block.rumble"),
                    arguments: {
                        s: {
                            type: 'number',
                            defaultValue: "0.25",
                        },
                        w: {
                            type: 'number',
                            defaultValue: "0.5",
                        },
                        t: {
                            type: 'number',
                            defaultValue: "0.25",
                        },
                        i: {
                            type: 'number',
                            defaultValue: "1",
                            menu: "padMenu",
                        },
                    },
                },
            ],
            menus: {
                padMenu: {
                    acceptReporters: true,
                    items: [
                        {
                            text: this.formatMessage("Gpd.menu.any"),
                            value: "any",
                        },
                        {
                            text: "1",
                            value: "1",
                        },
                        {
                            text: "2",
                            value: "2",
                        },
                        {
                            text: "3",
                            value: "3",
                        },
                        {
                            text: "4",
                            value: "4",
                        },
                    ],
                },
                buttonMenu: {
                    acceptReporters: true,
                    items: [
                        {
                            text: this.formatMessage('Gpd.menu.any'),
                            value: "any",
                        },
                        {
                            text: "A (1)",
                            value: "1",
                        },
                        {
                            text: "B (2)",
                            value: "2",
                        },
                        {
                            text: "X (3)",
                            value: "3",
                        },
                        {
                            text: "Y (4)",
                            value: "4",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.Left bumper (5)"),
                            value: "5",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.Right bumper (6)"),
                            value: "6",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.Left trigger (7)"),
                            value: "7",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.Right trigger (8)"),
                            value: "8",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.Select/View (9)"),
                            value: "9",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.Start/Menu (10)"),
                            value: "10",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.Left stick (11)"),
                            value: "11",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.Right stick (12)"),
                            value: "12",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.D-pad up (13)"),
                            value: "13",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.D-pad down (14)"),
                            value: "14",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.D-pad left (15)"),
                            value: "15",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.D-pad right (16)"),
                            value: "16",
                        }
                    ],
                },
                axisMenu: {
                    acceptReporters: true,
                    items: [
                        {
                            text: this.formatMessage("Gpd.menu.Left stick horizontal (1)"),
                            value: "1",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.Left stick vertical (2)"),
                            value: "2",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.Right stick horizontal (3)"),
                            value: "3",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.Right stick vertical (4)"),
                            value: "4",
                        }
                    ],
                },
                axesGroupMenu: {
                    acceptReporters: true,
                    items: [
                        {
                            text: this.formatMessage("Gpd.menu.Left stick (1)"),
                            value: "1",
                        },
                        {
                            text: this.formatMessage("Gpd.menu.Right stick (3)"),
                            value: "3",
                        }
                    ],
                },
            }
        }
    }
    gamepadConnected({ pad }) {
        return getGamepads(pad).length > 0;
    }

    buttonDown({ b, i }) {
        for (const gamepad of getGamepads(i)) {
            if (isButtonPressed(gamepad, b)) {
                return true;
            }
        }
        return false;
    }

    buttonValue({ b, i }) {
        let greatestButton = 0;
        for (const gamepad of getGamepads(i)) {
            const value = getButtonValue(gamepad, b);
            if (value > greatestButton) {
                greatestButton = value;
            }
        }
        return greatestButton;
    }

    axisValue({ b, i }) {
        let greatestAxis = 0;
        for (const gamepad of getGamepads(i)) {
            const axis = getAxisValue(gamepad, b);
            if (Math.abs(axis) > Math.abs(greatestAxis)) {
                greatestAxis = axis;
            }
        }
        return greatestAxis;
    }

    axisDirection({ axis, pad }) {
        let greatestMagnitude = 0;
        let direction = 90;
        for (const gamepad of getGamepads(pad)) {
            const horizontalAxis = getAxisValue(gamepad, axis);
            const verticalAxis = getAxisValue(gamepad, +axis + 1);
            const magnitude = Math.sqrt(horizontalAxis ** 2 + verticalAxis ** 2);
            if (magnitude > greatestMagnitude) {
                greatestMagnitude = magnitude;
                direction =
                    (Math.atan2(verticalAxis, horizontalAxis) * 180) / Math.PI + 90;
                if (direction < 0) {
                    direction += 360;
                }
            }
        }
        return direction;
    }

    axisMagnitude({ axis, pad }) {
        let greatestMagnitude = 0;
        for (const gamepad of getGamepads(pad)) {
            const horizontalAxis = getAxisValue(gamepad, axis);
            const verticalAxis = getAxisValue(gamepad, +axis + 1);
            const magnitude = Math.sqrt(horizontalAxis ** 2 + verticalAxis ** 2);
            if (magnitude > greatestMagnitude) {
                greatestMagnitude = magnitude;
            }
        }
        return greatestMagnitude;
    }

    axisVortex({ axis, pad }) {
        for (const gamepad of getGamepads(pad)) {
            const horizontalAxis = getAxisValue(gamepad, axis);
            const verticalAxis = getAxisValue(gamepad, +axis + 1);
            const val = [horizontalAxis, verticalAxis];
            if(val != null && val != undefined && val != NaN){
                return JSON.stringify(val);
            }
        }
        return "[0,0]";
    }

    rumble({ s, w, t, i }) {
        const gamepads = getGamepads(i);
        for (const gamepad of gamepads) {
            if (gamepad.vibrationActuator) {
                gamepad.vibrationActuator.playEffect("dual-rumble", {
                    startDelay: 0,
                    duration: t * 1000,
                    weakMagnitude: w,
                    strongMagnitude: s,
                });
            }
        }
    }

}

window.tempExt = {
    Extension: Gamepad,
    info: {
        name: 'Gpd.extensionName',
        description: 'Gpd.description',
        extensionId: ext_id,
        iconURL: ext_cover,
        insetIconURL: ext_icon,
        featured: true,
        disabled: false,
        collaborator: '官方小傲娇 @ CCW',
        collaboratorURL: 'https://www.ccw.site/student/62f76ddb49c5dc44ac0c03c0',
        collaboratorList: [
            {
                collaborator: '官方小傲娇 @ CCW',
                collaboratorURL: 'https://www.ccw.site/student/62f76ddb49c5dc44ac0c03c0'
            },
        ]
    },
    l10n: {
        'zh-cn': {
            'Gpd.extensionName': 'Gamepad',
            'Gpd.description': '这是高级玩家'
        },
        en: {
            'Gpd.extensionName': 'Gamepad',
            'Gpd.description': 'This is PRO player'
        }
    }
}
