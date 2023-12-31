// Originated from 3DMath by @David-Orangemoon
// Reformated by @DilemmaGX

const ext_id = 'Three';
const ext_cov = 'data:image/png;base64,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8bki8ddff/3T6laCVUJZNhHNTVM7AIdOyAIAKKBcCABQQMgCACggZAEAFBCyAAAKCFkAAAWELACAAkIWAEABIQsAoICQBQBQQMgCACggZAEAFBCyAAAKCFkAAAWELACAAkIWAEABIQsAoICQBQBQQMgCACggZAEAFBCyAAAKCFkAAAWELACAAkIWAEABIQsAoICQBQBQQMgCACggZAEAFBCyAAAKCFkAAAWELACAAkIWAEABIQsAoICQBQBQQMgCACggZAEAFBCyAAAKCFkAAAWELACAAkIWAEABIQsAoICQBQBQQMgCACggZAEAFBCyAAAKCFkAAAWELACAAkIWAEABIQsAoICQBQBQQMgCACggZAEAFBCyAAAKCFkAAAWELACAAkIWAEABIQsAoICQBQBQQMgCACggZAEAFBCyAAAKCFkAAAWELACAAkIWAEABIQsAoICQBQBQQMgCACggZAEAFBCyAAAKCFkAAAWELACAAkIWAEABIQsAoICQBQBQQMgCACggZAEAFBCyAAAKCFkAAAWELACAAkIWAEABIQsAoICQBQBQQMgCACggZAEAFBCyAAAKCFkAAAWELACAAkIWAEABIQsAoICQBQBQQMgCACggZAEAFBCyAAAKCFkAAAWELACAAkIWAEABIQsAoICQBQBQQMgCACggZAEAFBCyAAB6Ozo6+n8ltjR6JDdptAAAAABJRU5ErkJggg==';
const ext_ico = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJjdXJyZW50Q29sb3IiPg0KCTxwYXRoIGQ9Ik0xMi44NzYuNjRWLjYzOWw4LjI1IDQuNzYzYy41NDEuMzEzLjg3NS44OS44NzUgMS41MTV2OS41MjVhMS43NSAxLjc1IDAgMCAxLS44NzUgMS41MTZsLTguMjUgNC43NjJhMS43NDggMS43NDggMCAwIDEtMS43NSAwbC04LjI1LTQuNzYzYTEuNzUgMS43NSAwIDAgMS0uODc1LTEuNTE1VjYuOTE3YzAtLjYyNS4zMzQtMS4yMDIuODc1LTEuNTE1TDExLjEyNi42NGExLjc0OCAxLjc0OCAwIDAgMSAxLjc1IDBabS0xIDEuMjk4TDQuMjUxIDYuMzRsNy43NSA0LjQ3NCA3Ljc1LTQuNDc0LTcuNjI1LTQuNDAyYS4yNDguMjQ4IDAgMCAwLS4yNSAwWm0uODc1IDE5LjEyMyA3LjYyNS00LjQwMmEuMjUuMjUgMCAwIDAgLjEyNS0uMjE2VjcuNjM5bC03Ljc1IDQuNDc0Wk0zLjUwMSA3LjY0djguODAzYzAgLjA5LjA0OC4xNzIuMTI1LjIxNmw3LjYyNSA0LjQwMnYtOC45NDdaIj48L3BhdGg+DQo8L3N2Zz4=';

const spriteData = {};
let fov = 90;
const d2r = 0.0174533;
const camera = {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    sinAndCos: [
        0,
        1,
        0,
        1,
        0,
        1,
    ],
}

class Three {
    _formatMessage
    runtime
    constructor(runtime) {
        this.runtime = runtime
        this._formatMessage = runtime.getFormatMessage({
            'zh-cn': {
                'Three.extensionName': '三',

                'Three.label.Vector3': '3D向量',
                'Three.label.Equations3': '3D向量计算',
                'Three.label.Vector2': '2D向量',
                'Three.label.Equations2': '2D向量计算',
                'Three.label.Camera': '相机',
                'Three.label.Sprite3D': '角色',

                "Three.block.newV3": "创建一个3维向量[x][y][z]",
                "Three.block.newV3fromValue": "根据给定的[value]创建一个3维向量",
                "Three.block.getAxisOfV3": "获取[vector]的[axis]轴",
                "Three.block.addV3": "三维向量：[a] + [b]",
                "Three.block.subV3": "三维向量：[a] - [b]",
                "Three.block.mulV3": "三维向量：[a] * [b]",
                "Three.block.divV3": "三维向量：[a] / [b]",
                "Three.block.dotProductOfV3": "三维向量：[a]与[b]的点积",
                "Three.block.crossProductOfV3": "三维向量：[a]与[b]的叉积",
                "Three.block.magnitudeV3": "三维向量：[a]的模长",
                "Three.block.distanceV3": "三维向量：[a]与[b]的距离",
                "Three.block.rotateAroundPointV3": "三维向量：绕[b]旋转(x[yaw]y[pitch]z[roll]旋转[a])",
                "Three.block.rotateAroundCenterV3": "三维向量：绕中心旋转(x[yaw]y[pitch]z[roll]旋转[a])",
                "Three.block.newV2": "创建一个2维向量[x][y]",
                "Three.block.newV2fromValue": "根据给定的[value]创建一个2维向量",
                "Three.block.getAxisOfV2": "二维向量：获取[vector]的[axis]轴",
                "Three.block.project2DFromCam": "从相机获取投影后的[a]到2D",
                "Three.block.project2DFromPos": "从位置[b]和偏航角[yaw]、俯仰角[pitch]、翻滚角[roll]获取投影后的[a]到2D",
                "Three.block.addV2": "二维向量：[a] + [b]",
                "Three.block.subV2": "二维向量：[a] - [b]",
                "Three.block.mulV2": "二维向量：[a] * [b]",
                "Three.block.divV2": "二维向量：[a] / [b]",
                "Three.block.dotProductOfV2": "二维向量：[a]与[b]的点积",
                "Three.block.crossProductOfV2": "二维向量：[a]与[b]的叉积",
                "Three.block.magnitudeV2": "二维向量：[a]的模长",
                "Three.block.distanceV2": "二维向量：[a]与[b]之间的距离",
                "Three.block.rotateAroundPointV2": "二维向量：以[b]为中心，旋转[a] [yaw]度",
                "Three.block.rotateAroundCenterV2": "二维向量：以中心为中心，旋转[a] [yaw]度",
                "Three.block.cam3DsetPosition": "将相机位置设置为[a]",
                "Three.block.cam3DchangePosition": "将相机位置改变[a]",
                "Three.block.cam3DchangePositionOnAxis": "改变相机[axis]轴上的位置[a]",
                "Three.block.cam3DgetPosition": "获取相机位置",
                "Three.block.cam3DsetRotation": "将相机旋转设置为[a]",
                "Three.block.cam3DchangeRotation": "将相机旋转改变[a]",
                "Three.block.cam3DchangeRotationOnAxis": "改变相机[rotator]轴上的旋转[a]",
                "Three.block.cam3DgetRotation": "获取相机旋转",
                "Three.block.setFov": "将FOV设置为[dist]",
                "Three.block.changeFov": "改变FOV [dist]",
                "Three.block.getFov": "FOV",
                "Three.block.spr3DsetPosition": "将我的位置设置为[a]",
                "Three.block.spr3DsetPositionComponent": "将我的[component]坐标设为[a]",
                "Three.block.spr3DchangePosition": "将我的坐标增加[a]",
                "Three.block.spr3DchangePositionComponent": "将我的[component]坐标增加[a]",
                "Three.block.spr3DgetPosition": "我的3D坐标",
                "Three.block.spr3DgetPositionComponent": "我的[component]坐标",
                "Three.block.spr3DsetSize": "将我的3D大小设置为[a]",
                "Three.block.spr3DchangeSize": "将我的3D大小增加[a]",
                "Three.block.spr3DgetSize": "我的3D大小",
                "Three.block.spr3D": "移动到我的3D坐标"
            },

            en: {
                'Three.extensionName': 'Three',

                'Three.label.Vector3': '3D Vector',
                'Three.label.Equations3': '3D Vector Calculation',
                'Three.label.Vector2': '2D Vector',
                'Three.label.Equations2': '2D Vector Calculation',
                'Three.label.Camera': 'Camera',
                'Three.label.Sprite3D': 'Character',

                'Three.block.newV3': 'vector 3 x:[x] y:[y] z:[z]',
                'Three.block.newV3fromValue': 'vector 3 from [value]',
                'Three.block.getAxisOfV3': 'get the [axis] axis of [vector]',
                'Three.block.addV3': 'V3: [a] + [b]',
                'Three.block.subV3': 'V3: [a] - [b]',
                'Three.block.mulV3': 'V3: [a] * [b]',
                'Three.block.divV3': 'V3: [a] / [b]',
                'Three.block.dotProductOfV3': 'V3: product between [a] and [b]',
                'Three.block.crossProductOfV3': 'V3: product between [a] and [b]',
                'Three.block.magnitudeV3': 'V3: of [a]',
                'Three.block.distanceV3': 'V3: between [a] and [b]',
                'Three.block.rotateAroundPointV3': 'V3: [a] around [b] by yaw:[yaw] pitch:[pitch], and roll:[roll]',
                'Three.block.rotateAroundCenterV3': 'V3: [a] around the center by yaw:[yaw] pitch:[pitch], and roll:[roll]',
                'Three.block.newV2': 'vector 2 x:[x] y:[y]',
                'Three.block.newV2fromValue': 'vector 2 from [value]',
                'Three.block.getAxisOfV2': 'V2: the [axis] axis of [vector]',
                'Three.block.project2DFromCam': 'get projected [a] to 2D from camera',
                'Three.block.project2DFromPos': 'get projected [a] to 2D from [b] yaw:[yaw] pitch:[pitch] roll:[roll]',
                'Three.block.addV2': 'V2: [a] + [b]',
                'Three.block.subV2': 'V2: [a] - [b]',
                'Three.block.mulV2': 'V2: [a] * [b]',
                'Three.block.divV2': 'V2: [a] / [b]',
                'Three.block.dotProductOfV2': 'V2: product between [a] and [b]',
                'Three.block.crossProductOfV2': 'V2: product between [a] and [b]',
                'Three.block.magnitudeV2': 'V2: of [a]',
                'Three.block.distanceV2': 'V2: between [a] and [b]',
                'Three.block.rotateAroundPointV2': 'V2: [a] around [b] by [yaw] degrees',
                'Three.block.rotateAroundCenterV2': 'V2: [a] around the center by [yaw] degrees',
                'Three.block.cam3DsetPosition': 'set camera position to [a]',
                'Three.block.cam3DchangePosition': 'change camera position by [a]',
                'Three.block.cam3DchangePositionOnAxis': 'change camera [axis] by [a]',
                'Three.block.cam3DgetPosition': 'get camera position',
                'Three.block.cam3DsetRotation': 'set camera rotation to [a]',
                'Three.block.cam3DchangeRotation': 'change camera rotation by [a]',
                'Three.block.cam3DchangeRotationOnAxis': 'change camera [rotator] by [a]',
                'Three.block.cam3DgetRotation': 'get camera rotation',
                'Three.block.setFov': 'set FOV to [dist]',
                'Three.block.changeFov': 'change FOV by [dist]',
                'Three.block.getFov': 'FOV',
                'Three.block.spr3DsetPosition': 'set my position to [a]',
                'Three.block.spr3DsetPositionComponent': 'set my [component] to [a]',
                'Three.block.spr3DchangePosition': 'change my position by [a]',
                'Three.block.spr3DchangePositionComponent': 'change my [component] by [a]',
                'Three.block.spr3DgetPosition': 'my 3d position',
                'Three.block.spr3DgetPositionComponent': 'my [component] position',
                'Three.block.spr3DsetSize': 'set my 3d size to [a]',
                'Three.block.spr3DchangeSize': 'change my 3d size by [a]',
                'Three.block.spr3DgetSize': 'my 3d size',
                'Three.block.spr3D': 'go to my position in 3D'
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
            id: ext_id,
            name: this.formatMessage('Three.extensionName'),
            color1: '#00B080',
            color2: '#33B49C',
            menuIconURI: ext_ico,
            blockIconURI: ext_ico,
            blocks: [
                //#3D Vector Math#
                '---' + this.formatMessage('Three.label.Vector3'),
                {
                    disableMonitor: true,
                    opcode: "newV3",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.newV3'),
                    arguments: {
                        x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "newV3fromValue",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.newV3fromValue'),
                    arguments: {
                        value: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "getAxisOfV3",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.getAxisOfV3'),
                    arguments: {
                        axis: { type: Scratch.ArgumentType.STRING, menu: "axisMenu" },
                        vector: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "[0,0,0]",
                        },
                    },
                },
                '---' + this.formatMessage('Three.label.Equations3'),
                {
                    disableMonitor: true,
                    opcode: "addV3",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.addV3'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "subV3",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.subV3'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "mulV3",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.mulV3'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "divV3",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.divV3'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "dotProductOfV3",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.dotProductOfV3'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "crossProductOfV3",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.crossProductOfV3'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "magnitudeV3",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.magnitudeV3'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "distanceV3",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.distanceV3'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "rotateAroundPointV3",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.rotateAroundPointV3'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                        yaw: { type: Scratch.ArgumentType.STRING, defaultValue: "0" },
                        pitch: { type: Scratch.ArgumentType.STRING, defaultValue: "0" },
                        roll: { type: Scratch.ArgumentType.STRING, defaultValue: "0" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "rotateAroundCenterV3",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.rotateAroundCenterV3'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                        yaw: { type: Scratch.ArgumentType.STRING, defaultValue: "0" },
                        pitch: { type: Scratch.ArgumentType.STRING, defaultValue: "0" },
                        roll: { type: Scratch.ArgumentType.STRING, defaultValue: "0" },
                    },
                },

                //#2D Vector Math#
                '---' + this.formatMessage('Three.label.Vector2'),
                {
                    disableMonitor: true,
                    opcode: "newV2",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.newV2'),
                    arguments: {
                        x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                        y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "newV2fromValue",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.newV2fromValue'),
                    arguments: {
                        value: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "getAxisOfV2",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.getAxisOfV2'),
                    arguments: {
                        axis: { type: Scratch.ArgumentType.STRING, menu: "axisMenu2D" },
                        vector: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "[0,0]",
                        },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "project2DFromCam",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.project2DFromCam'),
                    arguments: {
                        a: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "[0,0,100]",
                        },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "project2DFromPos",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.project2DFromPos'),
                    arguments: {
                        a: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "[0,0,100]",
                        },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                        yaw: { type: Scratch.ArgumentType.STRING, defaultValue: "0" },
                        pitch: { type: Scratch.ArgumentType.STRING, defaultValue: "0" },
                        roll: { type: Scratch.ArgumentType.STRING, defaultValue: "0" },
                    },
                },
                '---' + this.formatMessage('Three.label.Equations2'),
                {
                    disableMonitor: true,
                    opcode: "addV2",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.addV2'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "subV2",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.subV2'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "mulV2",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.mulV2'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "divV2",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.divV2'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "dotProductOfV2",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.dotProductOfV2'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "crossProductOfV2",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.crossProductOfV2'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "magnitudeV2",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.magnitudeV2'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "distanceV2",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.distanceV2'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "rotateAroundPointV2",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.rotateAroundPointV2'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                        b: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                        yaw: { type: Scratch.ArgumentType.STRING, defaultValue: "0" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "rotateAroundCenterV2",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.rotateAroundCenterV2'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0]" },
                        yaw: { type: Scratch.ArgumentType.STRING, defaultValue: "0" },
                    },
                },

                //#CAMERA CONTROLS#
                '---' + this.formatMessage('Three.label.Camera'),
                {
                    disableMonitor: true,
                    opcode: "cam3DsetPosition",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.cam3DsetPosition'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "cam3DchangePosition",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.cam3DchangePosition'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[5,0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "cam3DchangePositionOnAxis",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.cam3DchangePositionOnAxis'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.NUMBER, defaultValue: "15" },
                        axis: { type: Scratch.ArgumentType.STRING, defaultValue: "0", menu: "axisMenu2" },
                    },
                },
                {
                    disableMonitor: false,
                    opcode: "cam3DgetPosition",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.cam3DgetPosition'),
                    arguments: {},
                },

                {
                    disableMonitor: true,
                    opcode: "cam3DsetRotation",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.cam3DsetRotation'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "cam3DchangeRotation",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.cam3DchangeRotation'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[15,0,0]" },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "cam3DchangeRotationOnAxis",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.cam3DchangeRotationOnAxis'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.NUMBER, defaultValue: "15" },
                        rotator: { type: Scratch.ArgumentType.STRING, defaultValue: "0", menu: "angleMenu" },
                    },
                },
                {
                    disableMonitor: false,
                    opcode: "cam3DgetRotation",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.cam3DgetRotation'),
                    arguments: {},
                },
                {
                    disableMonitor: true,
                    opcode: "setFov",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.setFov'),
                    arguments: {
                        dist: { type: Scratch.ArgumentType.NUMBER, defaultValue: 90 },
                    },
                },
                {
                    disableMonitor: true,
                    opcode: "changeFov",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.changeFov'),
                    arguments: {
                        dist: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
                    },
                },
                {
                    disableMonitor: false,
                    opcode: "getFov",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.getFov'),
                },

                //#SPRITE 3D#
                '---' + this.formatMessage('Three.label.Sprite3D'),
                {
                    disableMonitor: true,
                    opcode: "spr3DsetPosition",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.spr3DsetPosition'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                    },
                    filter: "sprite",
                },
                {
                    disableMonitor: true,
                    opcode: "spr3DsetPositionComponent",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.spr3DsetPositionComponent'),
                    arguments: {
                        component: { type: Scratch.ArgumentType.STRING, defaultValue: "0", menu: "axisMenu2" },
                        a: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
                    },
                    filter: "sprite",
                },
                {
                    disableMonitor: true,
                    opcode: "spr3DchangePosition",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.spr3DchangePosition'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.STRING, defaultValue: "[0,0,0]" },
                    },
                    filter: "sprite",
                },
                {
                    disableMonitor: true,
                    opcode: "spr3DchangePositionComponent",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.spr3DchangePositionComponent'),
                    arguments: {
                        component: { type: Scratch.ArgumentType.STRING, defaultValue: "0", menu: "axisMenu2" },
                        a: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 },
                    },
                    filter: "sprite",
                },
                {
                    disableMonitor: true,
                    opcode: "spr3DgetPosition",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.spr3DgetPosition'),
                    arguments: {},
                    filter: "sprite",
                },
                {
                    disableMonitor: true,
                    opcode: "spr3DgetPositionComponent",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.spr3DgetPositionComponent'),
                    arguments: {
                        component: { type: Scratch.ArgumentType.STRING, defaultValue: "0", menu: "axisMenu2" },
                    },
                    filter: "sprite",
                },
                {
                    disableMonitor: true,
                    opcode: "spr3DsetSize",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.spr3DsetSize'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 },
                    },
                    filter: "sprite",
                },
                {
                    disableMonitor: true,
                    opcode: "spr3DchangeSize",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.spr3DchangeSize'),
                    arguments: {
                        a: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
                    },
                    filter: "sprite",
                },
                {
                    disableMonitor: true,
                    opcode: "spr3DgetSize",
                    blockType: Scratch.BlockType.REPORTER,
                    text: this.formatMessage('Three.block.spr3DgetSize'),
                    arguments: {},
                    filter: "sprite",
                },
                {
                    disableMonitor: true,
                    opcode: "spr3D",
                    blockType: Scratch.BlockType.COMMAND,
                    text: this.formatMessage('Three.block.spr3D'),
                    arguments: {},
                    filter: "sprite",
                },
            ],
            menus: {
                axisMenu: {
                    items: [
                        { text: "x", value: "0" },
                        { text: "y", value: "1" },
                        { text: "z", value: "2" },
                    ],
                    acceptReporters: false,
                },
                axisMenu2D: {
                    items: [
                        { text: "x", value: "0" },
                        { text: "y", value: "1" },
                    ],
                    acceptReporters: false,
                },
                angleMenu: {
                    items: [
                        { text: "x", value: "0" },
                        { text: "y", value: "1" },
                        { text: "z", value: "2" },
                    ],
                    acceptReporters: true,
                },
                axisMenu2: {
                    items: [
                        { text: "x", value: "0" },
                        { text: "y", value: "1" },
                        { text: "z", value: "2" },
                    ],
                    acceptReporters: true,
                },
            },

        }
    }
    newV3(args) {
        return JSON.stringify([
            Number(args.x) || 0,
            Number(args.y) || 0,
            Number(args.z) || 0,
        ]);
    }
    getAxisOfV3(args) {
        args.axis = Number(args.axis);
        const vector = JSON.parse(args.vector);
        if (vector && vector[args.axis] !== undefined) {
            return vector[args.axis];
        }
        return 0;
    }
    newV3fromValue({ value }) {
        if (typeof value == "number") {
            return JSON.stringify([value, value, value]);
        }
        return JSON.stringify([0, 0, 0]);
    }
    addV3(args) {
        const a = JSON.parse(args.a);
        const b = JSON.parse(args.b);
        if (a && b) {
            return JSON.stringify([a[0] + b[0], a[1] + b[1], a[2] + b[2]]);
        }
        return "[0,0,0]";
    }
    subV3(args) {
        args.a = JSON.parse(args.a);
        args.b = JSON.parse(args.b);
        if (args.a && args.b) {
            return JSON.stringify([args.a[0] - args.b[0], args.a[1] - args.b[1], args.a[2] - args.b[2]]);
        }
        return "[0,0,0]";
    }
    mulV3(args) {
        args.a = JSON.parse(args.a);
        args.b = JSON.parse(args.b);
        if (args.a && args.b) {
            return JSON.stringify([args.a[0] * args.b[0], args.a[1] * args.b[1], args.a[2] * args.b[2]]);
        }
        return "[0,0,0]";
    }

    divV3(args) {
        args.a = JSON.parse(args.a);
        args.b = JSON.parse(args.b);
        if (args.a && args.b) {
            const c = [0, 0, 0];
            c[0] = args.a[0] / args.b[0];
            c[1] = args.a[1] / args.b[1];
            c[2] = args.a[2] / args.b[2];
            if (isNaN(c[0])) {
                c[0] = 0;
            }

            if (isNaN(c[1])) {
                c[1] = 0;
            }

            if (isNaN(c[2])) {
                c[2] = 0;
            }
            return JSON.stringify(c);
        }
        return "[0,0,0]";
    }
    dotProductOfV3(args) {
        args.a = JSON.parse(args.a);
        args.b = JSON.parse(args.b);
        if (args.a.length == 3 && args.b.length == 3) {
            return args.a[0] * args.b[0] + args.a[1] * args.b[1] + args.a[2] + args.b[2];
        }
        return 0;
    }
    dotProductOfV2(args) {
        args.a = JSON.parse(args.a);
        args.b = JSON.parse(args.b);
        if (args.a.length == 2 && args.b.length == 2) {
            return args.a[0] * args.b[0] + args.a[1] * args.b[1];
        }
        return 0;
    }
    crossProductOfV3(args) {
        args.a = JSON.parse(args.a);
        args.b = JSON.parse(args.b);

        if (args.a && args.b) {
            const c = [0, 0, 0];

            c[0] = args.a[1] * args.b[2] - args.a[2] * args.b[1];
            c[1] = args.a[2] * args.b[0] - args.a[0] * args.b[2];
            c[2] = args.a[0] * args.b[1] - args.a[1] * args.b[0];

            return JSON.stringify(c);
        }
        return "[0,0,0]";
    }
    magnitudeV3(args) {
        args.a = JSON.parse(args.a);
        if (args.a) {
            return Math.sqrt(
                Math.pow(args.a[0], 2) + Math.pow(args.a[1], 2) + Math.pow(args.a[2], 2)
            );
        }
        return 0;
    }
    distanceV3(args) {
        args.a = JSON.parse(args.a);
        args.b = JSON.parse(args.b);
        if (args.a && args.b) {
            return Math.sqrt(
                Math.pow(args.a[0] - args.b[0], 2) +
                Math.pow(args.a[1] - args.b[1], 2) +
                Math.pow(args.a[2] - args.b[2], 2)
            );
        }
        return 0;
    }
    rotateAroundPointV3(args) {
        args.a = JSON.parse(args.a);
        args.b = JSON.parse(args.b);

        if (args.a && args.b) {
            args.a[0] -= args.b[0];
            args.a[1] -= args.b[1];
            args.a[2] -= args.b[2];

            const sinAndCos = [
                Math.sin(args.yaw * d2r),
                Math.cos(args.yaw * d2r),
                Math.sin(args.pitch * d2r),
                Math.cos(args.pitch * d2r),
                Math.sin(args.roll * d2r),
                Math.cos(args.roll * d2r),
            ];

            let temp = args.a[0];

            args.a[0] = args.a[2] * sinAndCos[0] + args.a[0] * sinAndCos[1];
            args.a[2] = args.a[2] * sinAndCos[1] - temp * sinAndCos[0];

            temp = args.a[1];

            args.a[1] = args.a[2] * sinAndCos[2] + args.a[1] * sinAndCos[3];
            args.a[2] = args.a[2] * sinAndCos[3] - temp * sinAndCos[2];

            temp = args.a[0];

            args.a[0] = args.a[1] * sinAndCos[4] + args.a[0] * sinAndCos[5];
            args.a[1] = args.a[1] * sinAndCos[5] - temp * sinAndCos[4];

            args.a[0] += args.b[0];
            args.a[1] += args.b[1];
            args.a[2] += args.b[2];

            return JSON.stringify(args.a);
        }
        return "[0,0,0]";
    }
    rotateAroundCenterV3(args) {
        args.a = JSON.parse(args.a);

        if (args.a) {
            const sinAndCos = [
                Math.sin(args.yaw * d2r),
                Math.cos(args.yaw * d2r),
                Math.sin(args.pitch * d2r),
                Math.cos(args.pitch * d2r),
                Math.sin(args.roll * d2r),
                Math.cos(args.roll * d2r),
            ];

            let temp = args.a[0];

            args.a[0] = args.a[2] * sinAndCos[0] + args.a[0] * sinAndCos[1];
            args.a[2] = args.a[2] * sinAndCos[1] - temp * sinAndCos[0];

            temp = args.a[1];

            args.a[1] = args.a[2] * sinAndCos[2] + args.a[1] * sinAndCos[3];
            args.a[2] = args.a[2] * sinAndCos[3] - temp * sinAndCos[2];

            temp = args.a[0];

            args.a[0] = args.a[1] * sinAndCos[4] + args.a[0] * sinAndCos[5];
            args.a[1] = args.a[1] * sinAndCos[5] - temp * sinAndCos[4];

            return JSON.stringify(args.a);
        }
        return "[0,0,0]";
    }

    newV2({ x, y }) {
        return JSON.stringify([
            Scratch.Cast.toNumber(x) || 0,
            Scratch.Cast.toNumber(y) || 0,
        ]);
    }
    newV2fromValue({ value }) {
        if (typeof value == "number") {
            return JSON.stringify([value, value]);
        }
        return JSON.stringify([0, 0]);
    }
    getAxisOfV2({ axis, vector }) {
        axis = Scratch.Cast.toNumber(axis);
        vector = JSON.parse(vector);
        if (vector) {
            return vector[axis];
        }
        return 0;
    }
    project2DFromCam({ a }) {
        a = JSON.parse(a);

        if (a) {
            a[0] -= camera.position[0];
            a[1] -= camera.position[1];
            a[2] -= camera.position[2];

            let temp = a[0];

            a[0] = a[2] * camera.sinAndCos[0] + a[0] * camera.sinAndCos[1];
            a[2] = a[2] * camera.sinAndCos[1] - temp * camera.sinAndCos[0];

            temp = a[1];

            a[1] = a[2] * camera.sinAndCos[2] + a[1] * camera.sinAndCos[3];
            a[2] = a[2] * camera.sinAndCos[3] - temp * camera.sinAndCos[2];

            temp = a[0];

            a[0] = a[1] * camera.sinAndCos[4] + a[0] * camera.sinAndCos[5];
            a[1] = a[1] * camera.sinAndCos[5] - temp * camera.sinAndCos[4];

            let project = fov / a[2];

            return JSON.stringify([a[0] * project, a[1] * project]);
        }
        return "[0,0]";
    }
    project2DFromPos({ a, b, yaw, pitch, roll }) {
        a = JSON.parse(a);
        b = JSON.parse(b);

        if (a && b) {
            a[0] -= b[0];
            a[1] -= b[1];
            a[2] -= b[2];

            const sinAndCos = [
                Math.sin(-yaw * d2r),
                Math.cos(-yaw * d2r),
                Math.sin(-pitch * d2r),
                Math.cos(-pitch * d2r),
                Math.sin(-roll * d2r),
                Math.cos(-roll * d2r),
            ];

            let temp = a[0];

            a[0] = a[2] * sinAndCos[0] + a[0] * sinAndCos[1];
            a[2] = a[2] * sinAndCos[1] - temp * sinAndCos[0];

            temp = a[1];

            a[1] = a[2] * sinAndCos[2] + a[1] * sinAndCos[3];
            a[2] = a[2] * sinAndCos[3] - temp * sinAndCos[2];

            temp = a[0];

            a[0] = a[1] * sinAndCos[4] + a[0] * sinAndCos[5];
            a[1] = a[1] * sinAndCos[5] - temp * sinAndCos[4];

            let project = fov / a[2];

            return JSON.stringify([a[0] * project, a[1] * project]);
        }
        return "[0,0]";
    }
    addV2({ a, b }) {
        a = JSON.parse(a);
        b = JSON.parse(b);
        if (a && b) {
            return JSON.stringify([a[0] + b[0], a[1] + b[1]]);
        }
        return "[0,0]";
    }
    subV2({ a, b }) {
        a = JSON.parse(a);
        b = JSON.parse(b);
        if (a && b) {
            return JSON.stringify([a[0] - b[0], a[1] - b[1], a[2] - b[2]]);
        }
        return "[0,0]";
    }
    mulV2({ a, b }) {
        a = JSON.parse(a);
        b = JSON.parse(b);
        if (a && b) {
            return JSON.stringify([a[0] * b[0], a[1] * b[1]]);
        }
        return "[0,0]";
    }
    divV2({ a, b }) {
        a = JSON.parse(a);
        b = JSON.parse(b);
        if (a && b) {
            const c = [0, 0];
            c[0] = a[0] / b[0];
            c[1] = a[1] / b[1];
            if (isNaN(c[0])) {
                c[0] = 0;
            }

            if (isNaN(c[1])) {
                c[1] = 0;
            }

            return JSON.stringify(c);
        }
        return "[0,0]";
    }
    crossProductOfV2({ a, b }) {
        a = JSON.parse(a);
        b = JSON.parse(b);

        if (a && b) {
            const c = [0, 0];

            c[0] = a[1] - b[1];
            c[1] = b[0] - a[0];

            return JSON.stringify(c);
        }
        return 0;
    }
    magnitudeV2({ a }) {
        a = JSON.parse(a);
        if (a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
        }
        return 0;
    }
    distanceV2({ a, b }) {
        a = JSON.parse(a);
        b = JSON.parse(b);
        if (a && b) {
            return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
        }
        return 0;
    }
    rotateAroundPointV2({ a, b, yaw }) {
        a = JSON.parse(a);
        b = JSON.parse(b);

        if (a && b) {
            a[0] -= b[0];
            a[1] -= b[1];

            const sinAndCos = [Math.sin(yaw * d2r), Math.cos(yaw * d2r)];

            let temp = a[0];

            a[0] = a[1] * sinAndCos[0] + a[0] * sinAndCos[1];
            a[1] = a[1] * sinAndCos[1] - temp * sinAndCos[0];

            a[0] += b[0];
            a[1] += b[1];

            return JSON.stringify(a);
        }
        return "[0,0]";
    }
    rotateAroundCenterV2({ a, yaw }) {
        a = JSON.parse(a);

        if (a) {
            const sinAndCos = [Math.sin(yaw * d2r), Math.cos(yaw * d2r)];

            let temp = a[0];

            a[0] = a[1] * sinAndCos[0] + a[0] * sinAndCos[1];
            a[1] = a[1] * sinAndCos[1] - temp * sinAndCos[0];

            return JSON.stringify(a);
        }
        return "[0,0]";
    }
    cam3DsetPosition({ a }) {
        a = JSON.parse(a);

        if (a) {
            camera.position = a;
        }
    }
    cam3DchangePosition({ a }) {
        a = JSON.parse(a);

        if (a[0] != undefined && a[1] != undefined && a[2] != undefined) {
            camera.position[0] += a[0];
            camera.position[1] += a[1];
            camera.position[2] += a[2];
        }
    }
    cam3DchangePositionOnAxis({ a, axis }) {
        a = Scratch.Cast.toNumber(a);
        axis = Scratch.Cast.toNumber(axis);

        if (camera.position[axis] != undefined) {
            camera.position[axis] += a;
        }
    }
    cam3DgetPosition() {
        return JSON.stringify(camera.position);
    }
    cam3DsetRotation({ a }) {
        a = JSON.parse(a);

        if (a) {
            camera.rotation = a;

            camera.sinAndCos = [
                Math.sin(-camera.rotation[0] * d2r),
                Math.cos(-camera.rotation[0] * d2r),
                Math.sin(-camera.rotation[1] * d2r),
                Math.cos(-camera.rotation[1] * d2r),
                Math.sin(-camera.rotation[2] * d2r),
                Math.cos(-camera.rotation[2] * d2r),
            ];
        }
    }
    cam3DchangeRotation({ a }) {
        a = JSON.parse(a);

        if (a[0] != undefined && a[1] != undefined && a[2] != undefined) {
            camera.rotation[0] += a[0];
            camera.rotation[1] += a[1];
            camera.rotation[2] += a[2];
            camera.sinAndCos = [
                Math.sin(-camera.rotation[0] * d2r),
                Math.cos(-camera.rotation[0] * d2r),
                Math.sin(-camera.rotation[1] * d2r),
                Math.cos(-camera.rotation[1] * d2r),
                Math.sin(-camera.rotation[2] * d2r),
                Math.cos(-camera.rotation[2] * d2r),
            ];
        }
    }
    cam3DchangeRotationOnAxis({ a, rotator }) {
        a = Scratch.Cast.toNumber(a);
        rotator = Scratch.Cast.toNumber(rotator);

        if (camera.rotation[rotator] != undefined) {
            camera.rotation[rotator] += a;
            camera.sinAndCos = [
                Math.sin(-camera.rotation[0] * d2r),
                Math.cos(-camera.rotation[0] * d2r),
                Math.sin(-camera.rotation[1] * d2r),
                Math.cos(-camera.rotation[1] * d2r),
                Math.sin(-camera.rotation[2] * d2r),
                Math.cos(-camera.rotation[2] * d2r),
            ];
        }
    }
    cam3DgetRotation() {
        return JSON.stringify(camera.rotation);
    }
    setFov({ dist }) {
        fov = dist;
    }
    changeFov({ dist }) {
        fov += dist;
    }
    getFov() {
        return fov;
    }
    checkFor3dPositionData(targetID) {
        if (!spriteData[targetID]) {
            spriteData[targetID] = { position: [0, 0, fov], size: 100 };
        }
    }
    spr3DsetPosition({ a }, util) {
        const target = util.target;
        this.checkFor3dPositionData(target.id);

        a = JSON.parse(a);
        if (a) {
            spriteData[target.id].position[0] = a[0];
            spriteData[target.id].position[1] = a[1];
            spriteData[target.id].position[2] = a[2];
        }
    }
    spr3DsetPositionComponent({ a, component }, util) {
        const target = util.target;
        this.checkFor3dPositionData(target.id);

        a = JSON.parse(a);

        if (a) {
            //String literal for the funnies!
            if (spriteData[target.id].position[component] == undefined) throw `Component ${component} doesn't exist`;
            spriteData[target.id].position[component] = a;
        }
    }
    spr3DchangePosition({ a }, util) {
        const target = util.target;
        this.checkFor3dPositionData(target.id);

        a = JSON.parse(a);

        if (a) {
            spriteData[target.id].position[0] += a[0];
            spriteData[target.id].position[1] += a[1];
            spriteData[target.id].position[2] += a[2];
        }
    }
    spr3DchangePositionComponent({ a, component }, util) {
        const target = util.target;
        this.checkFor3dPositionData(target.id);
        //String literal for the funnies!
        if (spriteData[target.id].position[component] == undefined) throw `Component ${component} doesn't exist`;
        spriteData[target.id].position[component] += a;
    }
    spr3DgetPositionComponent({ component }, util) {
        const target = util.target;
        this.checkFor3dPositionData(target.id);
        //String literal for the funnies!
        if ((spriteData[target.id].position[component] == undefined)) throw `Component ${component} doesn't exist`;
        return spriteData[target.id].position[component];
    }
    spr3DgetPosition(args, util) {
        const target = util.target;
        this.checkFor3dPositionData(target.id);
        return JSON.stringify(spriteData[target.id].position);
    }
    spr3DsetSize({ a }, util) {
        const target = util.target;
        this.checkFor3dPositionData(target.id);
        spriteData[target.id].size = a;
    }
    spr3DchangeSize({ a }, util) {
        const target = util.target;
        this.checkFor3dPositionData(target.id);
        spriteData[target.id].size += a;
    }
    spr3DgetSize(args, util) {
        const target = util.target;
        this.checkFor3dPositionData(target.id);
        return spriteData[target.id].size;
    }
    spr3D(args, util) {
        const target = util.target;
        this.checkFor3dPositionData(target.id);
        const myData = JSON.parse(JSON.stringify(spriteData[target.id]));

        myData.position[0] -= camera.position[0];
        myData.position[1] -= camera.position[1];
        myData.position[2] -= camera.position[2];

        let temp = myData.position[0];

        myData.position[0] = myData.position[2] * camera.sinAndCos[0] + myData.position[0] * camera.sinAndCos[1];
        myData.position[2] = myData.position[2] * camera.sinAndCos[1] - temp * camera.sinAndCos[0];

        temp = myData.position[1];

        myData.position[1] = myData.position[2] * camera.sinAndCos[2] + myData.position[1] * camera.sinAndCos[3];
        myData.position[2] = myData.position[2] * camera.sinAndCos[3] - temp * camera.sinAndCos[2];

        temp = myData.position[0];

        myData.position[0] = myData.position[1] * camera.sinAndCos[4] + myData.position[0] * camera.sinAndCos[5];
        myData.position[1] = myData.position[1] * camera.sinAndCos[5] - temp * camera.sinAndCos[4];

        let project = fov / myData.position[2];

        if (myData.position[2] < 1) {
            target.setVisible(false);
        } else {
            target.setVisible(true);
            target.setSize(myData.size * project);
            target.setXY(myData.position[0] * project, myData.position[1] * project);
        }
    }
}

window.tempExt = {
    Extension: Three,
    info: {
        name: 'Three.extensionName',
        description: 'Three.description',
        extensionId: ext_id,
        iconURL: ext_cov,
        insetIconURL: ext_ico,
        featured: true,
        disabled: false,
        collaborator: 'David-Orangemoon @ Github',
        collaboratorURL: 'https://github.com/David-Orangemoon',
        collaboratorList: [
            {
                collaborator: 'David-Orangemoon @ Github',
                collaboratorURL: 'https://github.com/David-Orangemoon'
            },
            {
                collaborator: '官方小傲娇 @ CCW',
                collaboratorURL: 'https://www.ccw.site/student/62f76ddb49c5dc44ac0c03c0'
            },
        ]
    },
    l10n: {
        'zh-cn': {
            'Three.extensionName': '三',
            'Three.description': '从未感觉如此真实',
        },
        en: {
            'Three.extensionName': 'Three',
            'Three.description': 'Never considered to be such realistic',
        }
    }
}