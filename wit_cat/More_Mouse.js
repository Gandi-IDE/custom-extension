// import Cast from "cast.js";

const _picture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NzkuMzg5MDciIGhlaWdodD0iMzU5LjU4OTg0IiB2aWV3Qm94PSIwLDAsNDc5LjM4OTA3LDM1OS41ODk4NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNDAuMDAwMDMiIHkxPSIwLjM2NDIxIiB4Mj0iMjQwLjAwMDAzIiB5Mj0iMzU5LjYzNTgzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhlYWNlMSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzg5YTdkYSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyNDYuNzM1MTkiIHkxPSIxMTguMDc2NSIgeDI9IjI0OC4yNzY2OCIgeTI9IjIyMC45OTIxNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNWVhZjMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zMDU0OSwtMC4zNjQyMSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLjMwNTQ5LDM1OS42MzU4M3YtMzU5LjI3MTYyaDQ3OS4zODkwN3YzNTkuMjcxNjJ6IiBmaWxsPSJ1cmwoI2NvbG9yLTEpIiBzdHJva2U9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIwMC45OTA5NiwzNTkuMzM3MDlsMTAuMjI3NzYsLTI0MC4xNDk0OGwxOTMuMDc4NTQsMjQwLjc2NjQ0eiIgZmlsbD0iIzcyOGJiNSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjQ3LjA3OTk5LDIyMS4wMTAwNmwtMTIuNDI0LC0zMC4zMzY0M2wtMjAuMDM5MDcsMjAuNjQ4NWwtMS4zODkxNCwtOTIuNzQzNzNsNjguMDE4NTksNjYuMDExMDZsLTI5LjMxODk4LDAuNDM5MTVsMTEuMDk3NTIsMjkuNjk3NDN6IiBmaWxsPSJ1cmwoI2NvbG9yLTIpIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjIzOS42OTQ1MDYzMjc4NzM5OjE3OS42MzU3OTEwMDI3Mjk3Ny0tPg==";

const _icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNzcuMDg4NTUiIGhlaWdodD0iMTc3LjA4ODU1IiB2aWV3Qm94PSIwLDAsMTc3LjA4ODU1LDE3Ny4wODg1NSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNDcuMDc3MyIgeTE9IjExOS4xNDIzMSIgeDI9IjI0Ny4wNzczIiB5Mj0iMjIyLjA2OTQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U1ZWFmMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTEuNDU1NzYsLTkxLjQ1NTc0KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE1MS40NTU3NiwyNjguNTQ0Mjl2LTE3Ny4wODg1NWgxNzcuMDg4NTV2MTc3LjA4ODU1eiIgZmlsbD0iIzhlYWNlMSIgc3Ryb2tlPSJub25lIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMzguMjAwNywyNDAuODU3NjlsLTEwLjQ4NDQxLC0zNS4xNjgwMmwtMjEuMzAyNDQsMjEuOTAwNjJsNC40Njc1OCwtMTA0Ljg5OTUxbDYzLjcxNjM3LDc5LjQ1MzQ5bC0yOS4yODgyNCwtMS41OTkxMmw5LjIwMDkxLDM0LjM1MTE1eiIgZmlsbD0iIzcyOGJiNSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjQ1Ljg4MDQ3LDIyMi4wNjk0OGwtMTEuOTY4MjcsLTMwLjUxOTFsLTIwLjM0NjA3LDIwLjM0NjA3di05Mi43NTQxM2w2Ny4wMjIzNCw2Ny4wMjIzNGgtMjkuMzIyMjdsMTAuNjUxNTEsMjkuODYwM3oiIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6ODguNTQ0MjQ0OTk5OTk5OTk6ODguNTQ0MjU1LS0+";

const extensionId = "WitCatMouse";
let button = ["up","up","up","up","up"];
let xMouse = 0;
let yMouse = 0;
let isMove = false,timer = null;
let touch = [];
let fill = 0;
let filln = 0;
let w = 0,h = 0;
let div,divs,divv,divvs,news,background,Operatinginstructions,bug,url,discord;
let wv = 0,hv = 0;

//找渲染cvs
let cvs = document.getElementsByTagName("canvas")[0];
if(cvs == null){
	alert("当前页面不支持多指触控/全屏，请前往作品详情页体验完整作品！");
}
else{
	for(let i = 1;cvs.className != "" && i <= document.getElementsByTagName("canvas").length;i++){
		cvs = document.getElementsByTagName("canvas")[i];
	}
	if(cvs == null){
		alert("当前页面不支持多指触控/全屏，请前往作品详情页体验完整作品！");
	}
}

//添加监听器
const config = { attributes: true, childList: true, subtree: true, attributeFilter:['style'] };
const callback = function(mutationsList, observer) {
    if(fill == 1){
    	observer.disconnect();
    	fills();
    	observer.observe(cvs, config);
    }
};
const observer = new MutationObserver(callback);
observer.observe(cvs, config);


class WitCatMouse {
	constructor(runtime) {
		this.runtime = runtime;
		this._formatMessage = runtime.getFormatMessage({
			"zh-cn": {
				"WitCatMouse.name": "高级操作",
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
				"WitCatMouse.mouseuse": "锁定鼠标",
				"WitCatMouse.acceleration": "鼠标[way]加速度",
				"WitCatMouse.way.1": "X",
				"WitCatMouse.way.2": "Y",
				"WitCatTouch.down": "按下的手指数量",
				"WitCatTouch.num": "第[num]个手指的[type]",
				"WitCatTouch.type.1": "X",
				"WitCatTouch.type.2": "Y",
				"WitCatMouse.fill": "[set]沉浸式全屏",
				"WitCatMouse.fillask.1": "作品请求沉浸式全屏，是否同意？\n",
				"WitCatMouse.fillask.2": "/3次连续拒绝后将不再提示\n您仍可以使用 ctrl+shift+alt 切换沉浸式全屏状态",
				"WitCatMouse.setfill": "⚠️(危)设置分辨率高设为[num]",
				"WitCatMouse.resolution": "当前分辨率高",
			},
			en: {
				"WitCatMouse.name": "More operate",
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
				"WitCatMouse.mouseuse": "lock mouse",
				"WitCatMouse.acceleration": "mouse[way]acceleration",
				"WitCatMouse.way.1": "X",
				"WitCatMouse.way.2": "Y",
				"WitCatTouch.name": "Touch",
				"WitCatTouch.down": "Fingers Number",
				"WitCatTouch.num": "the[num]finger`s[type]",
				"WitCatTouch.type.1": "X",
				"WitCatTouch.type.2": "Y",
				"WitCatMouse.fill": "[set]immersive full-screen",
				"WitCatMouse.fillask.1": "The project requests to turn on immersive full-screen, agree or not?\nWill stop asking if you keep on to reject for ",
				"WitCatMouse.fillask.2": "/3 times\nYou can also use Ctrl+Shift+Alt to toggle immersive full-screen later.",
				"WitCatMouse.setfill": "⚠️(danger)Set resolution height to[num]",
				"WitCatMouse.resolution": "Current high resolution",
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
					opcode: 'setfill',
					blockType: "command",
					text: this.formatMessage("WitCatMouse.setfill"),
					arguments: {
						num:{
							type:"number",
							defaultValue:"360",
						},
					}
				},
				{
					opcode: 'fill',
					blockType: "command",
					text: this.formatMessage("WitCatMouse.fill"),
					arguments: {
						set:{
							type:"bool",
							menu:"set",
						},
					}
				},
				{
					opcode: 'resolution',
					blockType: "reporter",
					text: this.formatMessage("WitCatMouse.resolution"),
					arguments: {}
				},
				"---"+this.formatMessage("WitCatMouse.name.1"),
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
				"---"+this.formatMessage("WitCatMouse.name.2"),
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
						num:{
							type:"number",
							defaultValue:"1",
						},
						type:{
							type:"string",
							menu:"type",
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
				type: [
					{
					  text: this.formatMessage('WitCatTouch.type.1'),
					  value: "x"
					},
					{
					  text: this.formatMessage('WitCatTouch.type.2'),
					  value: "y"
					},
				],
			}
		};
	}
	//右键菜单
	set(args){
		history.pushState(null, null, null);
		cvs.parentNode.oncontextmenu = function (){
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
		cvs.parentNode.requestPointerLock();
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
	//数量
	down(){
		return touch.length;
	}
	//坐标
	num(args){
		if(args.num > 0 && args.num <= touch.length){
			if(args.type == "x"){
				return this.runtime.stageWidth * ((touch[args.num - 1].clientX - cvs.getBoundingClientRect().left) / cvs.offsetWidth);
			}
			else{
				return this.runtime.stageHeight * ((touch[args.num - 1].clientY - cvs.getBoundingClientRect().top) / cvs.offsetHeight);
			}
		}
		else{
			return null;
		}
	}
	//全屏
	fill(args){
		if(args.set == "true"){
			if(filln < 3){
				if(fill == 0){
					let a = confirm(this.formatMessage('WitCatMouse.fillask.1') + filln + this.formatMessage('WitCatMouse.fillask.2'));
					if(a == true){
						filln = 0;
						fillin();
					}
					else{
						filln += 1;
					}
				}
			}
		}
		else{
			if(fill == 1){
				outoffill();
			}
		}
	}
	//设置分辨率
	setfill(args){
		w = args.num / this.runtime.stageHeight * this.runtime.stageWidth;
		h = args.num;
		cvs.width =  args.num / this.runtime.stageHeight * this.runtime.stageWidth;
		cvs.height = args.num;
	}
	//当前分辨率
	resolution(args){
		return cvs.height;
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
			"WitCatMouse.name": "高级操控",
			"WitCatMouse.descp": "更精准的控制鼠标/触屏/全屏！"
		},
		en: {
			"WitCatMouse.name": "More operate",
			"WitCatMouse.descp": "More precise mouse/touch/full screen control!"
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
//多指触控
cvs.addEventListener('touchstart',function(e){
	touch = e.targetTouches;
})
cvs.addEventListener('touchmove',function(e){
	touch = e.targetTouches;
})
cvs.addEventListener('touchend',function(e){
	touch = e.targetTouches;
})



//大小改变刷新
window.onresize=function(){
    if(fill == 1){
        fills();
    }
}
//开启全屏
function fillin(){
    fill = 1;

    var mo=function(e){e.preventDefault();};
    document.body.style.overflow='hidden';
    document.addEventListener("touchmove",mo,false);//禁止页面滑动
    if(window.location.href.split("/")[2] != "cocrea.world"){
        div = document.getElementById("root").getElementsByTagName('div')[0];
        divs = document.getElementById("root");
        url = window.location.href.split("/")[3].split("?")[0];
        if(url != "scratch-player"){
            divs.removeChild(div);
        }
    }

    news = document.body.getElementsByClassName("convention-1wIbd")[0];
    if(typeof(news) != "undefined"){
        news.style = "display:none;";
    }
    divv = document.body.getElementsByClassName("actions-2lk9z")[0];
    if(typeof(divv) != "undefined"){
        divv.style = "display:none;";
    }
    Operatinginstructions = document.body.getElementsByClassName("showWorksDesc-1iD-M")[0];
    if(typeof(Operatinginstructions) != "undefined"){
        Operatinginstructions.style = "display:none;";
    }
    bug = document.body.getElementsByClassName("bug-report-1CfBK")[0];
    if(typeof(bug) != "undefined"){
        bug.style = "display:none;";
    }
    discord = document.body.getElementsByClassName("style_bugReport__gJk19 MuiBox-root css-0")[0];
    if(typeof(discord) != "undefined"){
        discord.style = "display:none";
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    scrollTo(0,0);
    setTimeout(function() {
        fills();
    }, 50);
}
//关闭全屏
function outoffill(){
    //恢复头
    fill = 0;
    var mo=function(e){e.preventDefault();};
    document.body.style.overflow='auto';
    document.addEventListener("touchmove",mo,true);//允许页面滑动
    if(window.location.href.split("/")[2] != "cocrea.world"){
        divs = document.getElementById("root");
        url = window.location.href.split("/")[3].split("?")[0];
        if(url != "scratch-player"){
            divs.insertBefore(div, divs.children[0]);
        }
    }
    document.body.removeChild(background);
    news = document.body.getElementsByClassName("convention-1wIbd")[0];
    if(typeof(news) != "undefined"){
        news.style = "";
    }
    divv = document.body.getElementsByClassName("actions-2lk9z")[0];
    if(typeof(divv) != "undefined"){
        divv.style = "";
    }
    divvs = document.body.getElementsByClassName("arrowTop-2Fru_")[0];
    if(typeof(divvs) != "undefined"){
        divvs.style = "";
    }
    Operatinginstructions = document.body.getElementsByClassName("showWorksDesc-1iD-M")[0];
    if(typeof(Operatinginstructions) != "undefined"){
        Operatinginstructions.style = "";
    }
    bug = document.body.getElementsByClassName("bug-report-1CfBK")[0];
    if(typeof(bug) != "undefined"){
        bug.style = "";
    }
    discord = document.body.getElementsByClassName("style_bugReport__gJk19 MuiBox-root css-0")[0];
    if(typeof(discord) != "undefined"){
        discord.style = "";
    }
    cvs.parentNode.parentNode.parentNode.parentNode.style = "width:100%; height:100%;z-index: 1000000;";
	cvs.parentNode.parentNode.style = "height: 100%; width: 100%;";
	cvs.parentNode.style = "";
	cvs.style = "height: 100%; width: 100%;";
}
//循环检测
function fills(){
    if(w != 0 && h != 0){
        cvs.width =  w;
        cvs.height = h;
    }
    let ws = 0,hs = 0;
    if((cvs.width / cvs.height) >= (document.documentElement.clientWidth / document.documentElement.clientHeight)){
        hs = (document.documentElement.clientWidth / cvs.width) * cvs.height;
        ws = document.documentElement.clientWidth;
        wv = 0;
        hv = (document.documentElement.clientHeight - hs) / 2;
    }
    else{
        hs = document.documentElement.clientHeight;
        ws = (document.documentElement.clientHeight / cvs.height) * cvs.width;
        wv = (document.documentElement.clientWidth - ws) / 2;
        hv = 0;
    }
    divvs = document.body.getElementsByClassName("arrowTop-2Fru_")[0];
    if(typeof(divvs) != "undefined"){
        divvs.style = "display:none;";
    }
    cvs.parentNode.parentNode.parentNode.parentNode.style = "position:fixed; left:" + wv + "px; top:" + hv + "px; width:" + ws + "px; height:" + hs + "px;z-index: 1000000;border-radius:0px";
    cvs.parentNode.parentNode.parentNode.style = "width:" + ws + "px; height:" + hs + "px;border-radius:0px";
    cvs.parentNode.parentNode.style = "width:100%; height:100%;border-radius:0px";
    cvs.parentNode.style = "width:100%; height:100%;border-radius:0px";
    if(isInPage(cvs.parentNode.parentNode.nextElementSibling.firstChild.firstChild)){
        cvs.parentNode.parentNode.nextElementSibling.style="width: 100%; height: 100%;";
        cvs.parentNode.parentNode.nextElementSibling.firstChild.style="width: 100%; height: 100%;";
        cvs.parentNode.parentNode.nextElementSibling.firstChild.firstChild.firstChild.style="width: 100%; height: 100%;";
        cvs.parentNode.parentNode.nextElementSibling.firstChild.firstChild.style="width: 100%;";
    }
    cvs.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("div")[0].style = "width:100%; height:100%;"
    cvs.style = "width:100%; height:100%;";
    setTimeout(function() {
        let a = cvs.offsetWidth / document.documentElement.clientWidth;
        cvs.parentNode.parentNode.getElementsByTagName("div")[1].style="transform:scale(" + a + ");transform-origin:0% 0% 0";
    }, 20);
    background = document.getElementsByClassName("witcatbackground")[0];
    if(background == null){
        background = document.createElement("div");
        background.style = "width:" + document.documentElement.clientWidth + "px;height:" + document.documentElement.clientHeight + "px;color:black;";
        background.className = "witcatbackground";
        document.body.insertBefore(background, document.body.children[0]);
    }
    else{
        background.style = "width:" + document.documentElement.clientWidth + "px;height:" + document.documentElement.clientHeight + "px;color:black;";
    }
}
//检测div存在
function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
}
    
//按键检测
document.onkeydown = function(e) {
    var evt = e || window.event;
    if (evt.ctrlKey && evt.shiftKey && evt.altKey){
		if(fill == 0){
            fillin();
        }
        else{
            outoffill();
        }
	}
}
