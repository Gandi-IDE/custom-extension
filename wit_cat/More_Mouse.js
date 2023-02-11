// import Cast from "cast.js";

const _picture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NzkuMzg5MDciIGhlaWdodD0iMzU5LjU4OTg0IiB2aWV3Qm94PSIwLDAsNDc5LjM4OTA3LDM1OS41ODk4NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNDAuMDAwMDMiIHkxPSIwLjM2NDIxIiB4Mj0iMjQwLjAwMDAzIiB5Mj0iMzU5LjYzNTgzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhlYWNlMSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzg5YTdkYSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyNDYuNzM1MTkiIHkxPSIxMTguMDc2NSIgeDI9IjI0OC4yNzY2OCIgeTI9IjIyMC45OTIxNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNWVhZjMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zMDU0OSwtMC4zNjQyMSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLjMwNTQ5LDM1OS42MzU4M3YtMzU5LjI3MTYyaDQ3OS4zODkwN3YzNTkuMjcxNjJ6IiBmaWxsPSJ1cmwoI2NvbG9yLTEpIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIwMC45OTA5NiwzNTkuMzM3MDlsMTAuMjI3NzYsLTI0MC4xNDk0OGwxOTMuMDc4NTQsMjQwLjc2NjQ0eiIgZmlsbD0iIzcyOGJiNSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjQ3LjA3OTk5LDIyMS4wMTAwNmwtMTIuNDI0LC0zMC4zMzY0M2wtMjAuMDM5MDcsMjAuNjQ4NWwtMS4zODkxNCwtOTIuNzQzNzNsNjguMDE4NTksNjYuMDExMDZsLTI5LjMxODk4LDAuNDM5MTVsMTEuMDk3NTIsMjkuNjk3NDN6IiBmaWxsPSJ1cmwoI2NvbG9yLTIpIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjIzOS42OTQ1MDYzMjc4NzM5OjE3OS42MzU3OTEwMDI3Mjk3Ny0tPg==";

const _icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNzcuMDg4NTUiIGhlaWdodD0iMTc3LjA4ODU1IiB2aWV3Qm94PSIwLDAsMTc3LjA4ODU1LDE3Ny4wODg1NSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNDcuMDc3MyIgeTE9IjExOS4xNDIzMSIgeDI9IjI0Ny4wNzczIiB5Mj0iMjIyLjA2OTQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U1ZWFmMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTEuNDU1NzYsLTkxLjQ1NTc0KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE1MS40NTU3NiwyNjguNTQ0Mjl2LTE3Ny4wODg1NWgxNzcuMDg4NTV2MTc3LjA4ODU1eiIgZmlsbD0iIzhlYWNlMSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMzguMjAwNywyNDAuODU3NjlsLTEwLjQ4NDQxLC0zNS4xNjgwMmwtMjEuMzAyNDQsMjEuOTAwNjJsNC40Njc1OCwtMTA0Ljg5OTUxbDYzLjcxNjM3LDc5LjQ1MzQ5bC0yOS4yODgyNCwtMS41OTkxMmw5LjIwMDkxLDM0LjM1MTE1eiIgZmlsbD0iIzcyOGJiNSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjQ1Ljg4MDQ3LDIyMi4wNjk0OGwtMTEuOTY4MjcsLTMwLjUxOTFsLTIwLjM0NjA3LDIwLjM0NjA3di05Mi43NTQxM2w2Ny4wMjIzNCw2Ny4wMjIzNGgtMjkuMzIyMjdsMTAuNjUxNTEsMjkuODYwM3oiIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6ODguNTQ0MjQ0OTk5OTk5OTk6ODguNTQ0MjU1LS0+";

const extensionId = "WitCatMouse";
let button = ["up", "up", "up", "up", "up"];
let xMouse = 0;
let yMouse = 0;
let timer = null;
let touch = [];


//base64转blob
function base64ImgtoFile(dataurl, filename = 'file') {
	const arr = dataurl.split(',')
	const mime = arr[0].match(/:(.*?);/)[1]
	const suffix = mime.split('/')[1]
	const bstr = atob(arr[1])
	let n = bstr.length
	const u8arr = new Uint8Array(n)
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n)
	}
	return new File([u8arr], `${filename}.${suffix}`, {
		type: mime
	})
}

//检测是不是ico的base64
function isBase64(str) {
	let a = "^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$";
	if (str.match(a) == null) {
		return true;
	}
	else {
		console.warn("请使用ico格式的base64文本\nPlease use base64 text in ico format");
		return false;
	}
}

//找渲染cvs
let cvs = document.getElementsByTagName("canvas")[0];
if (cvs === null) {
	alert("当前页面不支持多指触控/全屏，请前往作品详情页体验完整作品！");
}
else {
	for (let i = 1; cvs.className !== "" && i <= document.getElementsByTagName("canvas").length; i++) {
		cvs = document.getElementsByTagName("canvas")[i];
	}
	if (cvs === null) {
		alert("当前页面不支持多指触控/全屏，请前往作品详情页体验完整作品！");
	}
}

class WitCatMouse {
	constructor(runtime) {
		this.runtime = runtime;
		this._formatMessage = runtime.getFormatMessage({
			"zh-cn": {
				"WitCatMouse.name": "[beta]白猫的高级鼠标",
				"WitCatMouse.name.1": "高级鼠标",
				"WitCatMouse.name.2": "多指触控",
				"WitCatMouse.set": "[set]右键菜单",
				"WitCatMouse.set.1": "启用",
				"WitCatMouse.set.2": "禁用",
				"WitCatMouse.when": "鼠标[key]被按下",
				"WitCatMouse.key.1": "左键",
				"WitCatMouse.key.2": "中键",
				"WitCatMouse.key.3": "右键",
				"WitCatMouse.key.4": "前侧键",
				"WitCatMouse.key.5": "后侧键",
				"WitCatMouse.mouseuse": "[mouseuse]鼠标",
				"WitCatMouse.mouseuse.1": "锁定",
				"WitCatMouse.mouseuse.2": "释放",
				"WitCatMouse.acceleration": "鼠标[way]加速度",
				"WitCatMouse.way.1": "X",
				"WitCatMouse.way.2": "Y",
				"WitCatTouch.down": "按下的手指数量",
				"WitCatTouch.num": "第[num]个手指的[type]",
				"WitCatTouch.type.1": "X",
				"WitCatTouch.type.2": "Y",
				"WitCatTouch.type.3": "ID",
				"WitCatMouse.fill": "[set]沉浸式全屏",
				"WitCatMouse.fillask.1": "作品请求沉浸式全屏，是否同意？\n",
				"WitCatMouse.fillask.2": "/3次连续拒绝后将不再提示\n您仍可以使用 ctrl+shift+alt 切换沉浸式全屏状态",
				"WitCatMouse.setfill": "⚠️(危)设置分辨率高设为[num]",
				"WitCatMouse.resolution": "当前分辨率高",
				"WitCatMouse.cantouch": "设备支持[type]?",
				"WitCatMouse.types.1": "触屏",
				"WitCatMouse.types.2": "鼠标",
				"WitCatMouse.IsMobile": "移动设备?",
				"WitCatMouse.cursor": "更改鼠标的样式为[cursor]",
				"WitCatMouse.cursor.1": "默认",
				"WitCatMouse.cursor.2": "光标",
				"WitCatMouse.cursor.3": "十字移动",
				"WitCatMouse.cursor.4": "上下移动",
				"WitCatMouse.cursor.5": "左右移动",
				"WitCatMouse.cursor.6": "禁止",
				"WitCatMouse.cursor.7": "选择",
				"WitCatMouse.cursor.8": "加载",
				"WitCatMouse.cursor.9": "缓慢加载",
				"WitCatMouse.cursor.10": "帮助",
				"WitCatMouse.cursor.11": "横向光标",
				"WitCatMouse.cursor.12": "精准选择",
				"WitCatMouse.cursorurl": "更改鼠标的样式为X[x]Y[y]base64[text]",
				"WitCatMouse.url": "上传ico并获得base64",
			},
			en: {
				"WitCatMouse.name": "[beta]WitCat’s Mouse",
				"WitCatMouse.name.1": "more mouse",
				"WitCatMouse.name.2": "more touch",
				"WitCatMouse.set": "[set]Right-click menu",
				"WitCatMouse.set.1": "allow",
				"WitCatMouse.set.2": "forbid",
				"WitCatMouse.when": "mouse[key]down?",
				"WitCatMouse.key.1": "left",
				"WitCatMouse.key.2": "middle",
				"WitCatMouse.key.3": "right",
				"WitCatMouse.key.4": "front",
				"WitCatMouse.key.5": "back",
				"WitCatMouse.mouseuse": "[mouseuse]mouse",
				"WitCatMouse.mouseuse.1": "Lock",
				"WitCatMouse.mouseuse.2": "Release",
				"WitCatMouse.acceleration": "mouse[way]acceleration",
				"WitCatMouse.way.1": "X",
				"WitCatMouse.way.2": "Y",
				"WitCatTouch.name": "Touch",
				"WitCatTouch.down": "Fingers Number",
				"WitCatTouch.num": "the[num]finger`s[type]",
				"WitCatTouch.type.1": "X",
				"WitCatTouch.type.2": "Y",
				"WitCatTouch.type.3": "ID",
				"WitCatMouse.fill": "[set]immersive full-screen",
				"WitCatMouse.fillask.1": "The project requests to turn on immersive full-screen, agree or not?\nWill stop asking if you keep on to reject for ",
				"WitCatMouse.fillask.2": "/3 times\nYou can also use Ctrl+Shift+Alt to toggle immersive full-screen later.",
				"WitCatMouse.setfill": "⚠️(danger)Set resolution height to[num]",
				"WitCatMouse.resolution": "Current high resolution",
				"WitCatMouse.cantouch": "Device support[type]?",
				"WitCatMouse.types.1": "Touch screen",
				"WitCatMouse.types.2": "mouse",
				"WitCatMouse.IsMobile": "Mobile devices?",
				"WitCatMouse.cursor": "Change mouse style to[cursor]",
				"WitCatMouse.cursor.1": "Default",
				"WitCatMouse.cursor.2": "Cursor",
				"WitCatMouse.cursor.3": "Cross Move",
				"WitCatMouse.cursor.4": "Move up and down",
				"WitCatMouse.cursor.5": "Move left and right",
				"WitCatMouse.cursor.6": "Prohibit",
				"WitCatMouse.cursor.7": "Select",
				"WitCatMouse.cursor.8": "Load",
				"WitCatMouse.cursor.9": "Slow loading",
				"WitCatMouse.cursor.10": "Help",
				"WitCatMouse.cursor.11": "Landscape cursor",
				"WitCatMouse.cursor.12": "Precise selection",
				"WitCatMouse.cursorurl": "Change the style of the mouse to X[x]Y[y]base64[text]",
				"WitCatMouse.url": "Upload ico and get base64",
			}
		})
	}

	formatMessage(id) {
		return this._formatMessage({
			id,
			default: id,
			description: id
		});
	}

	getInfo() {
		return {
			id: extensionId, // 拓展id
			name: this.formatMessage("WitCatMouse.name"), // 拓展名
			docsURI: "https://www.ccw.site/post/c36aa805-b29d-48da-aba1-468a6cf80bfa",
			blockIconURI: _icon,
			menuIconURI: _icon,
			color1: "#8eace1",
			color2: "#86a2d4",
			blocks: [
				{
					opcode: 'setfill',
					blockType: "command",
					text: this.formatMessage("WitCatMouse.setfill"),
					hideFromPalette: true,
					arguments: {
						num: {
							type: "number",
							defaultValue: "360",
						},
					}
				},
				{
					opcode: 'fill',
					blockType: "command",
					text: this.formatMessage("WitCatMouse.fill"),
					hideFromPalette: true,
					arguments: {
						set: {
							type: "bool",
							menu: "set",
						},
					}
				},
				{
					opcode: 'resolution',
					blockType: "reporter",
					text: this.formatMessage("WitCatMouse.resolution"),
					arguments: {}
				},
				"---" + this.formatMessage("WitCatMouse.name.1"),
				{
					opcode: 'set',
					blockType: "command",
					text: this.formatMessage("WitCatMouse.set"),
					arguments: {
						set: {
							type: "bool",
							menu: "set",
						},
					}
				},
				{
					opcode: "when",
					blockType: "Boolean",
					text: this.formatMessage("WitCatMouse.when"),
					arguments: {
						key: {
							type: "string",
							menu: "key",
						},
					},
				},
				{
					blockType: "button",
					text: this.formatMessage('WitCatMouse.url'),
					onClick: this.url,
				},
				{
					opcode: "cursor",
					blockType: "command",
					text: this.formatMessage("WitCatMouse.cursor"),
					arguments: {
						cursor: {
							type: "string",
							menu: "cursor",
						},
					},
				},
				{
					opcode: "cursorurl",
					blockType: "command",
					text: this.formatMessage("WitCatMouse.cursorurl"),
					arguments: {
						x: {
							type: "string",
							defaultValue: "0",
						},
						y: {
							type: "string",
							defaultValue: "0",
						},
						text: {
							type: "string",
							defaultValue: "base64:ico",
						},
					},
				},
				{
					opcode: "mouseuse",
					blockType: "command",
					text: this.formatMessage("WitCatMouse.mouseuse"),
					arguments: {
						mouseuse: {
							type: "string",
							menu: "mouseuse",
						},
					},
				},
				{
					opcode: "acceleration",
					blockType: "reporter",
					text: this.formatMessage("WitCatMouse.acceleration"),
					arguments: {
						way: {
							type: "string",
							menu: "way",
						},
					},
				},
				"---" + this.formatMessage("WitCatMouse.name.2"),
				{
					opcode: 'down',
					blockType: "reporter",
					text: this.formatMessage("WitCatTouch.down"),
					arguments: {}
				},
				{
					opcode: "num",
					blockType: "reporter",
					text: this.formatMessage("WitCatTouch.num"),
					arguments: {
						num: {
							type: "number",
							defaultValue: "1",
						},
						type: {
							type: "string",
							menu: "type",
						},
					},
				},
				{
					opcode: "cantouch",
					blockType: "Boolean",
					text: this.formatMessage("WitCatMouse.cantouch"),
					arguments: {
						type: {
							type: "string",
							menu: "types",
						},
					},
				},
				{
					opcode: "IsMobile",
					blockType: "Boolean",
					text: this.formatMessage("WitCatMouse.IsMobile"),
					arguments: {},
				},
			],
			menus: {
				key: [
					{
						text: this.formatMessage('WitCatMouse.key.1'),
						value: '0'
					},
					{
						text: this.formatMessage('WitCatMouse.key.2'),
						value: '1'
					},
					{
						text: this.formatMessage('WitCatMouse.key.3'),
						value: '2'
					},
					{
						text: this.formatMessage('WitCatMouse.key.4'),
						value: '3'
					},
					{
						text: this.formatMessage('WitCatMouse.key.5'),
						value: '4'
					},
				],
				cursor: {
					acceptReporters: true,
					items: [
						{
							text: this.formatMessage('WitCatMouse.cursor.1'),
							value: 'default'
						},
						{
							text: this.formatMessage('WitCatMouse.cursor.2'),
							value: 'text'
						},
						{
							text: this.formatMessage('WitCatMouse.cursor.3'),
							value: 'move'
						},
						{
							text: this.formatMessage('WitCatMouse.cursor.4'),
							value: 'n-resize'
						},
						{
							text: this.formatMessage('WitCatMouse.cursor.5'),
							value: 'e-resize'
						},
						{
							text: this.formatMessage('WitCatMouse.cursor.6'),
							value: 'not-allowed'
						},
						{
							text: this.formatMessage('WitCatMouse.cursor.7'),
							value: 'pointer'
						},
						{
							text: this.formatMessage('WitCatMouse.cursor.8'),
							value: 'progress'
						},
						{
							text: this.formatMessage('WitCatMouse.cursor.9'),
							value: 'wait'
						},
						{
							text: this.formatMessage('WitCatMouse.cursor.10'),
							value: 'help'
						},
						{
							text: this.formatMessage('WitCatMouse.cursor.11'),
							value: 'vertical-text'
						},
						{
							text: this.formatMessage('WitCatMouse.cursor.12'),
							value: 'crosshair'
						},
					],
				},
				set: [
					{
						text: this.formatMessage('WitCatMouse.set.1'),
						value: "true"
					},
					{
						text: this.formatMessage('WitCatMouse.set.2'),
						value: "false"
					},
				],
				way: [
					{
						text: this.formatMessage('WitCatMouse.way.1'),
						value: "x"
					},
					{
						text: this.formatMessage('WitCatMouse.way.2'),
						value: "y"
					},
				],
				type: [
					{
						text: this.formatMessage('WitCatTouch.type.1'),
						value: "x"
					},
					{
						text: this.formatMessage('WitCatTouch.type.2'),
						value: "y"
					},
					{
						text: this.formatMessage('WitCatTouch.type.3'),
						value: "ID"
					},
				],
				types: [
					{
						text: this.formatMessage('WitCatMouse.types.1'),
						value: "ontouchstart"
					},
					{
						text: this.formatMessage('WitCatMouse.types.2'),
						value: "onmousedown"
					},
				],
				mouseuse: [
					{
						text: this.formatMessage('WitCatMouse.mouseuse.1'),
						value: "lock"
					},
					{
						text: this.formatMessage('WitCatMouse.mouseuse.2'),
						value: "release"
					},
				],
			}
		};
	}
	//右键菜单
	set(args) {
		history.pushState(null, null, null);
		cvs.parentNode.oncontextmenu = () => {
			if (args.set === "true") {
				return true;
			}
			else {
				return false;
			}
		}
	}
	//按下判断
	when(args) {
		if (button[args.key] === "down") {
			return true;
		}
		else {
			return false;
		}
	}
	//控制鼠标
	mouseuse(args) {
		if (args.mouseuse === "release") {
			document.exitPointerLock();
		}
		else {
			cvs.parentNode.requestPointerLock();
		}
	}
	//鼠标移动量
	acceleration(args) {
		if (args.way === "x") {
			return xMouse;
		}
		else {
			return -yMouse;
		}
	}
	//数量
	down() {
		return touch.length;
	}
	//坐标
	num(args) {
		if (args.num > 0 && args.num <= touch.length) {
			if (args.type === "x") {
				return this.runtime.stageWidth * ((touch[args.num - 1].clientX - cvs.getBoundingClientRect().left) / cvs.offsetWidth);
			}
			else if (args.type === "y") {
				return this.runtime.stageHeight * ((touch[args.num - 1].clientY - cvs.getBoundingClientRect().top) / cvs.offsetHeight);
			}
			else {
				return touch[args.num - 1].identifier;
			}
		}
		else {
			return null;
		}
	}
	//全屏
	fill() {
		console.warn("全屏因浏览器兼容问题已下线，在未来修复后将会重新上线\nFull screen has been taken offline due to browser compatibility issues. It will be back online after a future fix");
	}
	//设置分辨率
	setfill() {
		console.warn("全屏因浏览器兼容问题已下线，在未来修复后将会重新上线\nFull screen has been taken offline due to browser compatibility issues. It will be back online after a future fix");
	}
	//当前分辨率
	resolution() {
		return cvs.height;
	}
	//设备是否支持触屏
	cantouch(args) {
		return (args.type in document.documentElement);
	}
	//是否是手机
	IsMobile() {
		return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}
	//设置光标
	cursor(args) {
		cvs.parentNode.parentNode.parentNode.style.cursor = args.cursor;
	}
	//设置光标为url
	cursorurl(args) {
		if (isBase64(args.text)) {
			const img = args.text;
			let file = base64ImgtoFile(img); // 得到File对象
			let imgUrl = window.webkitURL.createObjectURL(file) || window.URL.createObjectURL(file) // imgUrl图片网络路径
			cvs.parentNode.parentNode.parentNode.style.cursor = "url(" + imgUrl + ")" + args.x + " " + args.y + ",auto";
			return;
		}
	}
	//打开ico文件
	url() {
		return new Promise(resolve => {
			const input = document.createElement("input");
			input.type = "file";
			input.style = "display:none;";
			input.accept = ".ico";
			input.click();
			input.onchange = () => {
				const reader = new FileReader();
				const readers = new FileReader();
				const file = input.files[0];
				reader.onload = (e) => {
					navigator.clipboard.writeText(e.currentTarget.result);
					alert("base64代码已经被复制到剪切板，可以粘贴以使用\nThe base64 code has been copied to the clipboard and can be pasted for use");
					resolve(e.target.result);
				};
				reader.onerror = () => {
					resolve();
				};
				readers.readAsArrayBuffer(file);

				readers.onload = (e) => {
					if (file.name.split('.')[file.name.split('.').length - 1] == "ico") {
						var uri = e.target.result;
						console.log(uri.byteLength / 1024 + " KB");
						if (uri.byteLength / 1024 <= 10) {
							reader.readAsDataURL(file);
						}
						else {
							console.warn("文件过大，可能导致工程文件崩溃！！！\nThe file is too large, may cause the project file crash!!!");
							alert("文件过大，可能导致工程文件崩溃！！！\nThe file is too large, may cause the project file crash!!!");
						}
					}
					else {
						console.warn("请选择*.ico文件\nPlease select the *.ico file");
						alert("请选择*.ico文件\nPlease select the *.ico file");
					}
				};
			}
			window.onfocus = () => {
				// 开始计时或者播放
				setTimeout(() => {
					resolve("");
				}, 1000);
			}
		});
	}
}

window.tempExt = {
	Extension: WitCatMouse,
	info: {
		name: "WitCatMouse.name",
		description: "WitCatMouse.descp",
		extensionId: extensionId,
		iconURL: _picture,
		insetIconURL: _icon,
		featured: true,
		disabled: false,
		collaborator: "白猫 @ CCW"
	},
	l10n: {
		"zh-cn": {
			"WitCatMouse.name": "[beta]白猫的高级鼠标",
			"WitCatMouse.descp": "更精准的控制鼠标/触屏/全屏！"
		},
		en: {
			"WitCatMouse.name": "[beta]WitCat’s Mouse",
			"WitCatMouse.descp": "More precise mouse/touch/full screen control!"
		}
	}
};

/* vim: set expandtab tabstop=2 shiftwidth=2: */
//鼠标
document.addEventListener('mousedown', e => {
	button[e.button] = "down";
	if (button[0] === "down") {
		touch = JSON.parse("[{\"clientX\":\"" + e.clientX + "\",\"clientY\":\"" + e.clientY + "\",\"identifier\":\"mouse\"}]");
	}
})
document.addEventListener('mouseup', e => {
	button[e.button] = "up";
	touch = [];
})
document.addEventListener("mousemove", ev => {
	if (button[0] === "down") {
		touch = JSON.parse("[{\"clientX\":\"" + ev.clientX + "\",\"clientY\":\"" + ev.clientY + "\",\"identifier\":\"mouse\"}]");
	}
	else {
		touch = [];
	}
	xMouse = ev.movementX; // 获得鼠标指针的x移动量
	yMouse = ev.movementY; // 获得鼠标指针的y移动量
	clearTimeout(timer);
	timer = setTimeout(() => {
		xMouse = 0;
		yMouse = 0;
	}, 30);
});
//多指触控
cvs.addEventListener('touchstart', e => {
	touch = e.targetTouches;
	button[0] = "down";
})
cvs.addEventListener('touchmove', e => {
	xMouse = e.targetTouches[0].clientX - touch[0].clientX; // 获得手指的x移动量
	yMouse = e.targetTouches[0].clientY - touch[0].clientY; // 获得手指的y移动量
	clearTimeout(timer);
	timer = setTimeout(() => {
		xMouse = 0;
		yMouse = 0;
	}, 30);
	touch = e.targetTouches;
})
cvs.addEventListener('touchend', e => {
	touch = e.targetTouches;
	button[0] = "up";
})
