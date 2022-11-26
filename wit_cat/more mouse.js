// import Cast from "cast.js";

const _picture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NzkuMzg5MDciIGhlaWdodD0iMzU5LjU4OTg0IiB2aWV3Qm94PSIwLDAsNDc5LjM4OTA3LDM1OS41ODk4NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNDAuMDAwMDMiIHkxPSIwLjM2NDIxIiB4Mj0iMjQwLjAwMDAzIiB5Mj0iMzU5LjYzNTgzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhlYWNlMSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzg5YTdkYSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyNDYuNzM1MTkiIHkxPSIxMTguMDc2NSIgeDI9IjI0OC4yNzY2OCIgeTI9IjIyMC45OTIxNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNWVhZjMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zMDU0OSwtMC4zNjQyMSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLjMwNTQ5LDM1OS42MzU4M3YtMzU5LjI3MTYyaDQ3OS4zODkwN3YzNTkuMjcxNjJ6IiBmaWxsPSJ1cmwoI2NvbG9yLTEpIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIwMC45OTA5NiwzNTkuMzM3MDlsMTAuMjI3NzYsLTI0MC4xNDk0OGwxOTMuMDc4NTQsMjQwLjc2NjQ0eiIgZmlsbD0iIzcyOGJiNSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjQ3LjA3OTk5LDIyMS4wMTAwNmwtMTIuNDI0LC0zMC4zMzY0M2wtMjAuMDM5MDcsMjAuNjQ4NWwtMS4zODkxNCwtOTIuNzQzNzNsNjguMDE4NTksNjYuMDExMDZsLTI5LjMxODk4LDAuNDM5MTVsMTEuMDk3NTIsMjkuNjk3NDN6IiBmaWxsPSJ1cmwoI2NvbG9yLTIpIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjIzOS42OTQ1MDYzMjc4NzM5OjE3OS42MzU3OTEwMDI3Mjk3Ny0tPg==";

const _icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNzcuMDg4NTUiIGhlaWdodD0iMTc3LjA4ODU1IiB2aWV3Qm94PSIwLDAsMTc3LjA4ODU1LDE3Ny4wODg1NSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNDcuMDc3MyIgeTE9IjExOS4xNDIzMSIgeDI9IjI0Ny4wNzczIiB5Mj0iMjIyLjA2OTQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U1ZWFmMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTEuNDU1NzYsLTkxLjQ1NTc0KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE1MS40NTU3NiwyNjguNTQ0Mjl2LTE3Ny4wODg1NWgxNzcuMDg4NTV2MTc3LjA4ODU1eiIgZmlsbD0iIzhlYWNlMSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMzguMjAwNywyNDAuODU3NjlsLTEwLjQ4NDQxLC0zNS4xNjgwMmwtMjEuMzAyNDQsMjEuOTAwNjJsNC40Njc1OCwtMTA0Ljg5OTUxbDYzLjcxNjM3LDc5LjQ1MzQ5bC0yOS4yODgyNCwtMS41OTkxMmw5LjIwMDkxLDM0LjM1MTE1eiIgZmlsbD0iIzcyOGJiNSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjQ1Ljg4MDQ3LDIyMi4wNjk0OGwtMTEuOTY4MjcsLTMwLjUxOTFsLTIwLjM0NjA3LDIwLjM0NjA3di05Mi43NTQxM2w2Ny4wMjIzNCw2Ny4wMjIzNGgtMjkuMzIyMjdsMTAuNjUxNTEsMjkuODYwM3oiIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6ODguNTQ0MjQ0OTk5OTk5OTk6ODguNTQ0MjU1LS0+";

const extensionId = "WitCatMouse";
let button = ["up","up","up","up","up"];
let xMouse = 0;
let yMouse = 0;
let isMove = false,timer = null;


class WitCatMouse {
	constructor(runtime) {
		this.runtime = runtime;
		this._formatMessage = runtime.getFormatMessage({
			"zh-cn": {
				"WitCatMouse.name": "高级鼠标",
				"WitCatMouse.set": "[set]右键菜单",	
				"WitCatMouse.set.1": "启用",
				"WitCatMouse.set.2": "禁用",
				"WitCatMouse.when": "鼠标[key]被按下",
				"WitCatMouse.key.1": "左键",
				"WitCatMouse.key.2": "中键",
				"WitCatMouse.key.3": "右键",
				"WitCatMouse.key.4": "前侧键",
				"WitCatMouse.key.5": "后侧键",
				"WitCatMouse.mouseuse": "锁定鼠标",
				"WitCatMouse.acceleration": "鼠标[way]加速度",
				"WitCatMouse.way.1": "X",
				"WitCatMouse.way.2": "Y",
			},
			en: {
				"WitCatMouse.name": "More Mouse",
				"WitCatMouse.set": "[set]Right-click menu",	
				"WitCatMouse.set.1": "allow",
				"WitCatMouse.set.2": "forbid",
				"WitCatMouse.when": "mouse[key]down?",
				"WitCatMouse.key.1": "left",
				"WitCatMouse.key.2": "middle",
				"WitCatMouse.key.3": "right",
				"WitCatMouse.key.4": "front",
				"WitCatMouse.key.5": "back",
				"WitCatMouse.mouseuse": "lock mouse",
				"WitCatMouse.acceleration": "mouse[way]acceleration",
				"WitCatMouse.way.1": "X",
				"WitCatMouse.way.2": "Y",
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
			docsURI: "https://www.ccw.site/post/d6d96e80-3f58-4a19-b7e6-c567d3a6a583",
			blockIconURI: _icon,
			menuIconURI: _icon,
			color1: "#8eace1",
			color2: "#ffffff",
			blocks: [
				{
					opcode: 'set',
					blockType: "command",
					text: this.formatMessage("WitCatMouse.set"),
					arguments: {
						set:{
							type:"bool",
							menu:"set",
						},
					}
				},
				{
					opcode: "when",
					blockType: "Boolean",
					text: this.formatMessage("WitCatMouse.when"),
					arguments: {
						key:{
							type:"string",
							menu:"key",
						},
					},
				},
				{
					opcode: "mouseuse",
					blockType: "command",
					text: this.formatMessage("WitCatMouse.mouseuse"),
					arguments: {},
				},
				{
					opcode: "acceleration",
					blockType: "reporter",
					text: this.formatMessage("WitCatMouse.acceleration"),
					arguments: {
						way:{
							type:"string",
							menu:"way",
						},
					},
				},
			],
			menus:{
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
			}
		};
	}
	//右键菜单
	set(args){
		//找渲染div
		let div = document.getElementsByClassName("gandi_stage_stage_1fD7k ccw-stage-wrapper")[0];		//gandi编辑器
		if(div == null){
			div = document.getElementsByClassName("stage_stage_1fD7k ccw-stage-wrapper")[0];		//传统编辑器
			if(div == null){
				div = document.getElementsByClassName("gandi_stage-wrapper_stage-canvas-wrapper_3ewmd")[0];		//作品展示页
				if(div == null){
					alert("当前页面不支持禁用右键菜单，请前往作品详情页体验完整作品！");
					return;
				}
			}
		}
		history.pushState(null, null, null);
		div.oncontextmenu = function (){
			if(args.set == "true"){
				return true;
			}
			else{
				return false;
			}
		}
	}
	//按下判断
	when(args){
		if(button[args.key] == "down"){
			return true;
		}
		else{
			return false;
		}
	}
	//控制鼠标
	mouseuse(){
		//找渲染div
		let div = document.getElementsByClassName("gandi_stage_stage_1fD7k ccw-stage-wrapper")[0];		//gandi编辑器
		if(div == null){
			div = document.getElementsByClassName("stage_stage_1fD7k ccw-stage-wrapper")[0];		//传统编辑器
			if(div == null){
				div = document.getElementsByClassName("gandi_stage-wrapper_stage-canvas-wrapper_3ewmd")[0];		//作品展示页
				if(div == null){
					alert("当前页面不支持文本框，请前往作品详情页体验完整作品！");
					return;
				}
			}
		}
		div.requestPointerLock();
	}
	//鼠标移动量
	acceleration(args){
		if(args.way == "x"){
			return xMouse;
		}
		else{
			return -yMouse;
		}
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
			"WitCatMouse.name": "高级鼠标",
			"WitCatMouse.descp": "更精准的控制鼠标！"
		},
		en: {
			"WitCatMouse.name": "More Mouse",
			"WitCatMouse.descp": "More precise mouse control!"
		}
	}
};

/* vim: set expandtab tabstop=2 shiftwidth=2: */
	
document.onmousedown = function(event) {
	button[event.button] = "down";
}
document.onmouseup = function(event) {
	button[event.button] = "up";
}
document.addEventListener("mousemove", ev => {
    xMouse = ev.movementX; // 获得鼠标指针的x移动量
    yMouse = ev.movementY; // 获得鼠标指针的y移动量
	isMove = true;
	clearTimeout(timer);
	timer = setTimeout(function(){
		isMove = false;
		xMouse = 0;
		yMouse = 0;
	},30);
});
