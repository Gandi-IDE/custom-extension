// import Cast from "cast.js";

const _picture = "data:image/png;base64,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";

const _icon = "data:image/png;base64,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";

const extensionId = "WitCatFileHelper";

class WitCatFileHelper {
	constructor(runtime) {
		this.runtime = runtime;
		this._formatMessage = runtime.getFormatMessage({
			"zh-cn": {
				"WitCatFileHelper.name": "wit_catの拓展",
				"WitCatFileHelper.filehelper": "文件处理",
				"WitCatFileHelper.inputmanagement": "文本框",
				"WitCatFileHelper.Multiplelinestext": "多行文本",
				"WitCatFileHelper.downloads": "将内容[text]按[s]分割后命名为[name]并下载多行文本",
				"WitCatFileHelper.download": "将内容[text]命名为[name]并下载",
				"WitCatFileHelper.save": "设置键[name]为[text]并储存到本地",
				"WitCatFileHelper.upload": "获取键[name]的值",
				"WitCatFileHelper.delete": "删除键[name]",
				"WitCatFileHelper.segmentation": "将[text]按[s]分割为[thing]",
				"WitCatFileHelper.encrypt": "base64加密[text]",
				"WitCatFileHelper.decrypt": "base64解密[text]",
				"WitCatFileHelper.openfile": "打开文件",
				"WitCatFileHelper.createinput": "设置或创建ID为[id]的文本框的X[x]Y[y]宽[width]高[height]内容[text]提示[texts]字体大小[size]",
				"WitCatFileHelper.deleteinput": "删除ID为[id]的文本框",
				"WitCatFileHelper.getinput": "获得ID为[id]的文本框内容",
				"WitCatFileHelper.isinput": "焦点是否在ID为[id]的文本框上",
				"WitCatFileHelper.nowinput": "将焦点聚焦在ID为[id]的文本框上",
				"WitCatFileHelper.deleteallinput": "删除所有文本框",
				"WitCatFileHelper.showvar": "设置键[name]的状态为[show]",
				"WitCatFileHelper.saveother": "设置作品ID[id]的键[name]为[text]",
				"WitCatFileHelper.uploadother": "获取作品[id]的键[name]的值",
				"WitCatFileHelper.other": "作品[id]的键[name]的状态",
				"WitCatFileHelper.showon": "只读",
				"WitCatFileHelper.showoff": "私有",
				"WitCatFileHelper.showall": "公开",
				"WitCatFileHelper.deleteMultiplelinestext": "删除[text]的第[num]行",
				"WitCatFileHelper.addMultiplelinestext": "将[text]加入[texts]的第[num]行",
				"WitCatFileHelper.whatMultiplelinestext": "[text]的第[num]行",
				"WitCatFileHelper.numMultiplelinestext": "[text]的行数",
				"WitCatFileHelper.thing.1": "数组",
				"WitCatFileHelper.thing.2": "多行文本",
				"WitCatFileHelper.compute": "当前分辨率下高[size]的字体大小",
			},
			en: {
				"WitCatFileHelper.name": "wit_catのextension",
				"WitCatFileHelper.filehelper": "file helper",
				"WitCatFileHelper.inputmanagement": "input",
				"WitCatFileHelper.Multiplelinestext": "Multiple lines of text",
				"WitCatFileHelper.downloads": "Download split content [text] by [s] named [name]",
				"WitCatFileHelper.download": "Download content [text] named [name]",
				"WitCatFileHelper.save": "Save content [text] with [name] on computer",
				"WitCatFileHelper.upload": "Get value [name]",
				"WitCatFileHelper.delete": "delete value [name]",
				"WitCatFileHelper.segmentation": "Split [text] by [s] to [thing]",
				"WitCatFileHelper.encrypt": "base64 encrypt[text]",
				"WitCatFileHelper.decrypt": "base64 decrypt[text]",
				"WitCatFileHelper.openfile": "openfile",
				"WitCatFileHelper.createinput": "Set or create an input with ID[id]X[x]Y[y]width[width]height[height]content[text]prompt[texts]font-size[size]",
				"WitCatFileHelper.deleteinput": "delete an input with ID[id]",
				"WitCatFileHelper.getinput": "get an input with ID[id]",
				"WitCatFileHelper.isinput": "is the focus on the input with ID[id]?",
				"WitCatFileHelper.nowinput": "let teh focus on the input with ID[id]",
				"WitCatFileHelper.deleteallinput": "delete all input",
				"WitCatFileHelper.showvar": "set value[name]`s state[show]",
				"WitCatFileHelper.saveother": "save ID[id]`s content name[name]with[text]",
				"WitCatFileHelper.uploadother": "get ID[id]`s value[name]",
				"WitCatFileHelper.other": "get ID[id]`s value[name]`s state",
				"WitCatFileHelper.showon": "View",
				"WitCatFileHelper.showoff": "private",
				"WitCatFileHelper.showall": "public",
				"WitCatFileHelper.deleteMultiplelinestext": "delete[text]the[num]line of text",
				"WitCatFileHelper.addMultiplelinestext": "let[text]add with[texts]the[num]line of text",
				"WitCatFileHelper.whatMultiplelinestext": "[text]`s[num]line of text",
				"WitCatFileHelper.numMultiplelinestext": "[text]Number of rows",
				"WitCatFileHelper.thing.1": "array",
				"WitCatFileHelper.thing.2": "Multiple lines of text",
				"WitCatFileHelper.compute": "The font size at the current resolution that is high [size]",
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
			name: this.formatMessage("WitCatFileHelper.name"), // 拓展名
			docsURI: "https://www.ccw.site/post/d6d96e80-3f58-4a19-b7e6-c567d3a6a583",
			blockIconURI: _icon,
			menuIconURI: _icon,
			color1: "#60D6F4",
			color2: "#55a7f7",
			blocks: [
				"---"+this.formatMessage("WitCatFileHelper.filehelper"),
				{
					opcode: "downloads",
					blockType: "command",
					text: this.formatMessage("WitCatFileHelper.downloads"),
					arguments: {
						text: {
							type: "string",
							defaultValue: 'awa!!!|awa!!!',
						},
						name: {
							type: "string",
							defaultValue: 'wit_cat.txt',
						},
						s: {
							type: "string",
							defaultValue: '|',
						},
					},
				},
				{
					opcode: "download",
					blockType: "command",
					text: this.formatMessage("WitCatFileHelper.download"),
					arguments: {
						text: {
							type: "string",
							defaultValue: 'awa!!!',
						},
						name: {
							type: "string",
							defaultValue: 'wit_cat.txt',
						},
					},
				},
				{
					opcode: "openfile",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.openfile"),
					arguments: {},
				},
				{
					opcode: "upload",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.upload"),
					arguments: {
						name: {
							type: "string",
							defaultValue: 'i',
						},
					},
				},
				{
					opcode: "save",
					blockType: "command",
					text: this.formatMessage("WitCatFileHelper.save"),
					arguments: {
						text: {
							type: "string",
							defaultValue: '0',
						},
						name: {
							type: "string",
							defaultValue: 'i',
						},
					},
				},
				{
					opcode: "delete",
					blockType: "command",
					text: this.formatMessage("WitCatFileHelper.delete"),
					arguments: {
						name: {
							type: "string",
							defaultValue: 'i',
						},
					},
				},
				{
					opcode: "showvar",
					blockType: "command",
					text: this.formatMessage("WitCatFileHelper.showvar"),
					arguments: {
						name:{
							type:"string",
							defaultValue:"i",
						},
						show:{
							type:"string",
							menu:"setvariable",
						},
					},
				},
				{
					opcode: "saveother",
					blockType: "command",
					text: this.formatMessage("WitCatFileHelper.saveother"),
					arguments: {
						id:{
							type:"string",
							defaultValue:"6373950041d21d2d2cd0da9b",
						},
						name:{
							type:"string",
							defaultValue:"i",
						},
						text:{
							type:"string",
							defaultValue:"wit_cat!",
						},
					},
				},
				{
					opcode: "uploadother",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.uploadother"),
					arguments: {
						id:{
							type:"string",
							defaultValue:"6373950041d21d2d2cd0da9b",
						},
						name:{
							type:"string",
							defaultValue:"i",
						},
					},
				},
				{
					opcode: "other",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.other"),
					arguments: {
						id:{
							type:"string",
							defaultValue:"6373950041d21d2d2cd0da9b",
						},
						name:{
							type:"string",
							defaultValue:"i",
						},
					},
				},
				{
					opcode: "encrypt",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.encrypt"),
					arguments: {
						text: {
							type: "string",
							defaultValue: 'i love china',
						},
					},
				},
				{
					opcode: "decrypt",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.decrypt"),
					arguments: {
						text: {
							type: "string",
							defaultValue: 'aSUyMGxvdmUlMjBjaGluYQ==',
						},
					},
				},
				"---"+this.formatMessage("WitCatFileHelper.inputmanagement"),
				{
					opcode: "createinput",
					blockType: "command",
					text: this.formatMessage("WitCatFileHelper.createinput"),
					arguments: {
						id:{
							type:"string",
							defaultValue:"i",
						},
						x:{
							type:"number",
							defaultValue:"0",
						},
						y:{
							type:"number",
							defaultValue:"0",
						},
						width:{
							type:"number",
							defaultValue:"100",
						},
						height:{
							type:"number",
							defaultValue:"20",
						},
						text:{
							type:"string",
							defaultValue:"hello word!",
						},
						texts:{
							type:"string",
							defaultValue:"hello word!",
						},
						size:{
							type:"number",
							defaultValue:"16",
						}
					},
				},
				{
					opcode: "compute",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.compute"),
					arguments: {
						size:{
							type:"number",
							defaultValue:"16",
						}
					},
				},
				{
					opcode: "deleteinput",
					blockType: "command",
					text: this.formatMessage("WitCatFileHelper.deleteinput"),
					arguments: {
						id:{
							type:"string",
							defaultValue:"i",
						}
					},
				},
				{
					opcode: "getinput",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.getinput"),
					arguments: {
						id:{
							type:"string",
							defaultValue:"i",
						}
					},
				},
				{
					opcode: "isinput",
					blockType: "Boolean",
					text: this.formatMessage("WitCatFileHelper.isinput"),
					arguments: {
						id:{
							type:"string",
							defaultValue:"i",
						}
					},
				},
				{
					opcode: "nowinput",
					blockType: "command",
					text: this.formatMessage("WitCatFileHelper.nowinput"),
					arguments: {
						id:{
							type:"string",
							defaultValue:"i",
						}
					},
				},
				{
					opcode: "deleteallinput",
					blockType: "command",
					text: this.formatMessage("WitCatFileHelper.deleteallinput"),
					arguments: {},
				},
				"---"+this.formatMessage("WitCatFileHelper.Multiplelinestext"),
				{
					opcode: "segmentation",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.segmentation"),
					arguments: {
						text: {
							type: "string",
							defaultValue: 'wow/!!!',
						},
						s: {
							type: "string",
							defaultValue: '/',
						},
						thing:{
							type: "string",
							menu: 'thing',
						}
					},
				},
				{
					opcode: "deleteMultiplelinestext",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.deleteMultiplelinestext"),
					arguments: {
						text:{
							type:"string",
							defaultValue:"wit_cat!!!\nwit_cat!!!",
						},
						num:{
							type:"number",
							defaultValue:"1",
						}
					},
				},
				{
					opcode: "addMultiplelinestext",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.addMultiplelinestext"),
					arguments: {
						text:{
							type:"string",
							defaultValue:"wit_cat!!!",
						},
						texts:{
							type:"string",
							defaultValue:"wit_cat!!!\nwit_cat!!!",
						},
						num:{
							type:"string",
							defaultValue:"last",
						}
					},
				},
				{
					opcode: "whatMultiplelinestext",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.whatMultiplelinestext"),
					arguments: {
						text:{
							type:"string",
							defaultValue:"wit_cat!!!",
						},
						num:{
							type:"string",
							defaultValue:"1",
						}
					},
				},
				{
					opcode: "numMultiplelinestext",
					blockType: "reporter",
					text: this.formatMessage("WitCatFileHelper.numMultiplelinestext"),
					arguments: {
						text:{
							type:"string",
							defaultValue:"wit_cat!!!\nwit_cat!!!",
						},
					},
				},
			],
			menus:{
				setvariable: [
					{
					  text: this.formatMessage('WitCatFileHelper.showall'),
					  value: '#'
					},
					{
					  text: this.formatMessage('WitCatFileHelper.showon'),
					  value: '$'
					},
					{
					  text: this.formatMessage('WitCatFileHelper.showoff'),
					  value: ''
					},
				],
				thing: [
					{
					  text: this.formatMessage('WitCatFileHelper.thing.2'),
					  value: 'false'
					},
					{
					  text: this.formatMessage('WitCatFileHelper.thing.1'),
					  value: 'true'
					},
				],
			}
		};
	}
	//下载多行文件
	downloads(args) {
		let h = args.text;
		let text = args.text;
		let filenames = args.name;
		if(filenames == ""){
			filenames = "none.txt"
		}
		const filename = filenames;
		let s = args.s;
		let j = 0;
		if (s != "") {
			let a = text.split(s);
			h = a[0];
			for (j = 1; j < a.length; j++) {
				h = h + "\n" + a[j];
			}
		} else {
			h = text;
		}
		const content = h;
		// 创建隐藏的可下载链接
		let eleLink = document.createElement('a');
		eleLink.download = filename;
		eleLink.style.display = 'none';
		// 字符内容转变成blob地址
		let blob = new Blob([content]);
		eleLink.href = URL.createObjectURL(blob);
		// 触发点击
		document.body.appendChild(eleLink);
		eleLink.click();
		// 然后移除
		document.body.removeChild(eleLink);
	}
	//下载文件
	download(args) {
		const content = args.text;
		let filenames = args.name;
		if(filenames == ""){
			filenames = "none.txt"
		}
		const filename = filenames;
		// 创建隐藏的可下载链接
		let eleLink = document.createElement('a');
		eleLink.download = filename;
		eleLink.style.display = 'none';
		// 字符内容转变成blob地址
		let blob = new Blob([content]);
		eleLink.href = URL.createObjectURL(blob);
		// 触发点击
		document.body.appendChild(eleLink);
		eleLink.click();
		// 然后移除
		document.body.removeChild(eleLink);
	}
	//读取本地变量
	upload(args) {
		const name = args.name;
		let h = this.runtime.ccwAPI.getProjectUUID();
		//寻找状态
		let show = "";
		let value = localStorage.getItem(h + name);
		if (value == null) {
			value = localStorage.getItem("#" + h + name);
			if (value == null) {
				value = localStorage.getItem("$" + h + name);
				if (value != null) {
					show = "$";
				}
			}
			else {
				show = "#";
			}
		}

		return localStorage.getItem(show + h + name);
	}
	//保存本地变量
	save(args) {
		const text = args.text;
		const name = args.name;
		let h = this.runtime.ccwAPI.getProjectUUID();
		//寻找状态
		let show = "";
		let value = localStorage.getItem(h + name);
		if (value == null) {
			value = localStorage.getItem("#" + h + name);
			if (value == null) {
				value = localStorage.getItem("$" + h + name);
				if (value != null) {
					show = "$";
				}
			}
			else {
				show = "#";
			}
		}

		if(h == ""){
			alert("请先保存作品");
		} else{
			localStorage.setItem(show + h + name, text);
		}
	}
	//删除本地变量
	delete(args) {
		const name = args.name;
		let h = this.runtime.ccwAPI.getProjectUUID();
		//寻找状态
		let show = "";
		let value = localStorage.getItem(h + name);
		if (value == null) {
			value = localStorage.getItem("#" + h + name);
			if (value == null) {
				value = localStorage.getItem("$" + h + name);
				if (value != null) {
					show = "$";
				}
			}
			else {
				show = "#";
			}
		}

		localStorage.removeItem(show + h + name);
	}
	//字符串分割
	segmentation(args) {
		let text = args.text;
		let s = args.s;
		let array = text.split(s);
		let r = "";
		if(args.thing == "true"){
			const a = `","`;
			const b = `["`;
			const c = `"]`;
			let str = array.join(a);
			r = b + str + c;
		}
		else{
			let i;
			for(i = 0;i < array.length;i++){
				if(r == ""){
					r = array[i];
				}
				else{
					r = r + "\n" + array[i];
				}
			}
		}
		return r;
	}
	//加密
	encrypt(args) {
		let str = args.text;
		let jiaMi = encodeURIComponent(str);
		let jiaM = btoa(jiaMi);
		return jiaM;
	}
	//解密
	decrypt(args) {
		let jiaM = args.text;
		let jieMi = atob(jiaM);
		let jieM = decodeURIComponent(jieMi);
		return jieM;
	}
	//打开文件
	openfile(args){
		return new Promise(resolve => {
			let a = 0;
			const input = document.createElement("input");
			input.type = "file";
			input.click();
			input.onchange = () => {
				const reader = new FileReader();
				const file = input.files[0];
				reader.onload = (e) => {
					resolve(e.target.result);
				};
				reader.onerror = (e) => {
					resolve();
				};
				reader.readAsText(file);
			}
			// 当点击取消
			input.onfocus = function () {
				a++;
				if (a == 2) {
					resolve();
				}
			}
		});
	}
	//设置或创建文本框
	createinput(args){
		let x = args.x;
		let y = args.y;
		let width = args.width;
		let height = args.height;
		if(args.x > this.runtime.stageWidth){
			x = this.runtime.stageWidth;
		}
		if(args.x < 0){
			x = 0;
		}
		if(args.y > this.runtime.stageHeight){
			y = this.runtime.stageHeight;
		}
		if(args.y < 0){
			y = 0;
		}
		if(args.x + args.width > this.runtime.stageWidth){
			width = this.runtime.stageWidth - x;
		}
		if(args.width < 0){
			width = 0;
		}
		if(args.y + args.height > this.runtime.stageHeight){
			height = this.runtime.stageHeight - y;
		}
		if(args.height < 0){
			height = 0;
		}
		x = (x / this.runtime.stageWidth) * 100;
		y = (y / this.runtime.stageHeight) * 100;
		width = (width / this.runtime.stageWidth) * 100;
		height = (height / this.runtime.stageHeight) * 100;
		let dom = `background-color: transparent;border:0px;text-shadow: 0 0 0 #000;outline: none;position:absolute; left:`+ x + `%; top:` + y + `%; width:` + width + `%; height:` + height + `%;font-size: ` + args.size + `px;`;
		let search = document.getElementById("WitCatInput" + args.id);
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
		if(search != null){
			search.style = dom;
			search.value = args.text;
			search.placeholder = args.texts;
		}
		else{
			let eleLink = document.createElement('input');
			eleLink.type = "text";
			eleLink.style = dom;
			eleLink.id = "WitCatInput" + args.id;
			eleLink.value = args.text;
			eleLink.className = "WitCatInput";
			eleLink.placeholder = args.texts;
			div.appendChild(eleLink);
		}
	}
	//删除文本框
	deleteinput(args){
		let search = document.getElementById("WitCatInput" + args.id);
		if(search != null){
			let div = search.parentNode;
			div.removeChild(search);
		}
	}
	//获取文本框内容
	getinput(args){
		let search = document.getElementById("WitCatInput" + args.id);
		if(search != null){
			return(search.value);
		}
		else{
			return("");
		}
	}
	//焦点判断
	isinput(args){
		let search = document.getElementById("WitCatInput" + args.id);
		if(search != null){
			if(search == document.activeElement){
				return(true);
			}
			else{
				return(false);
			}
		}
		else{
			return(false);
		}
	}
	//焦点获取
	nowinput(args){
		let search = document.getElementById("WitCatInput" + args.id);
		if(search != null){
			search.focus();
		}
	}
	//删除所有文本框
	deleteallinput(args){
		let search = document.getElementsByClassName("WitCatInput");
		let i = 0;
		let div;
		for(i = search.length - 1;i >= 0;i--){
			div = search[i].parentNode;
			div.removeChild(search[i]);
		}
	}
	//设置状态
	showvar(args){
		const name = args.name;
		let h = this.runtime.ccwAPI.getProjectUUID();
		//寻找状态
		let show = "";
		let value = localStorage.getItem(h + name);
		if (value == null) {
			value = localStorage.getItem("#" + h + name);
			if (value == null) {
				value = localStorage.getItem("$" + h + name);
				if (value != null) {
					show = "$";
				}
			}
			else {
				show = "#";
			}
		}

		let text = localStorage.getItem(show + h + name);
		localStorage.removeItem(show + h + name);
		if(h == ""){
			alert("请先保存作品");
		} else{
			localStorage.setItem(args.show + h + name, text);
		}
	}
	//修改别人的键
	saveother(args){
		let name = args.name;
		let h = args.id;
		let text = args.text;
		//寻找状态
		let show = "";
		let value = localStorage.getItem(h + name);
		if (value == null) {
			value = localStorage.getItem("#" + h + name);
			if (value == null) {
				value = localStorage.getItem("$" + h + name);
				if (value == null) {
					show = "null";
				}
				else{
					show = "$";
				}
			}
			else {
				show = "#";
			}
		}

		if(show == "#" || show == "null"){
			localStorage.setItem("#" + h + name, text);
		}
	}
	//获取别人的键
	uploadother(args){
		let name = args.name;
		let h = args.id;
		//寻找状态
		let show = "";
		let value = localStorage.getItem(h + name);
		if (value == null) {
			value = localStorage.getItem("#" + h + name);
			if (value == null) {
				value = localStorage.getItem("$" + h + name);
				if (value != null) {
					show = "$";
				}
			}
			else {
				show = "#";
			}
		}

		if(show != ""){
		return localStorage.getItem(show + h + name);
		}
	}
	//获取键状态
	other(args){
		let name = args.name;
		let h = args.id;
		//寻找状态
		let show = "";
		let value = localStorage.getItem(h + name);
		if (value == null) {
			value = localStorage.getItem("#" + h + name);
			if (value == null) {
				value = localStorage.getItem("$" + h + name);
				if (value == null) {
					show = "null";
				}
				else{
					show = "$";
				}
			}
			else {
				show = "#";
			}
		}

		if(show == "#"){
			return "公开";
		}
		if(show == "$"){
			return "只读";
		}
		if(show == ""){
			return "私有";
		}
		return "键不存在";
	}
	//删除多行文本行
	deleteMultiplelinestext(args){
		let text = args.text;
		let texts = text.split('\n');
		let num = args.num;
		if(args.num == "last"){
			num = texts.length + 1;
		}
		if(args.num == "first"){
			num = 1;
		}
		let a = "";
		let i;
		for(i = 0;i < texts.length;i++){
			if(i + 1 != num){
				if(a == ""){
					a = texts[i];
				}
				else{
					a = a + "\n" + texts[i];
				}
			}
		}
		return a;
	}
	//插入多行文本
	addMultiplelinestext(args){
		let text = args.text;
		let texts = args.texts.split("\n");
		let num = args.num;
		if(args.num == "last"){
			num = texts.length + 1;
		}
		if(args.num == "first"){
			num = 1;
		}
		let a = "";
		let i ,j = 0;
		for(i = 0;i <= texts.length;i++){
			if(i + 1 != num){
				if(a == ""){
					a = texts[i + j];
				}
				else{
					a = a + "\n" + texts[i + j];
				}
			}
			else{
				if(a == ""){
					a = text;
				}
				else{
					a = a + "\n" + text;
				}
				j = -1;
			}
		}
		return a;
	}
	//多行文本第几行
	whatMultiplelinestext(args){
		let text = args.text.split("\n");
		let num = args.num;
		if(args.num == "last"){
			num = text.length;
		}
		if(args.num == "first"){
			num = 1;
		}
		return text[num - 1];
	}
	//多行文本行数
	numMultiplelinestext(args){
		let text = args.text.split("\n");
		return text.length;
	}
	//计算坐标
	compute(args){
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
		console.log(div.style.width)
		return (div.style.width.split("px")[0] / 360) * args.size;
	}
}

window.tempExt = {
	Extension: WitCatFileHelper,
	info: {
		name: "WitCatFileHelper.name",
		description: "WitCatFileHelper.descp",
		extensionId: extensionId,
		iconURL: _picture,
		insetIconURL: _icon,
		featured: true,
		disabled: false,
		collaborator: "白猫 @ CCW"
	},
	l10n: {
		"zh-cn": {
			"WitCatFileHelper.name": "wit_catの拓展",
			"WitCatFileHelper.descp": "一堆没用的小玩意"
		},
		en: {
			"WitCatFileHelper.name": "wit_catのextension",
			"WitCatFileHelper.descp": "some useless block"
		}
	}
};

/* vim: set expandtab tabstop=2 shiftwidth=2: */
