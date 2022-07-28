class _30ExtExtensions {
	constructor(runtime) {
		this.runtime = runtime;
		this._formatMessage = runtime.getFormatMessage({
			'zh-cn': {
				'30Ext.extensionName': '工具箱',
				'30Ext.info.1': '造型镜像操作',
				'30Ext.block.mirrorSprite': '[mirrorMethod]当前角色',
				'30Ext.menu.mirrorMethod.1': '左右镜像',
				'30Ext.menu.mirrorMethod.1': '上下镜像',
				'30Ext.block.clearMirror': '清除角色镜像变换',
				'30Ext.info.2': '角色跨域操作',
				'30Ext.block.anotherRun': '让[sprite]运行[SUBSTACK]',
				'30Ext.block.anotherRunWithClone': '让[sprite]的第[cloneId]个克隆体运行[SUBSTACK]'
			},

			en: {
				'30Ext.extensionName': 'Toolbox',
				'30Ext.info.1': 'Mirror transform',
				'30Ext.block.mirrorSprite': '[mirrorMethod] current sprite',
				'30Ext.menu.mirrorMethod.1': 'Horizontal mirror transform',
				'30Ext.menu.mirrorMethod.1': 'Vertical mirror transform',
				'30Ext.block.clearMirror': 'Clear the mirror transform',
				'30Ext.info.2': 'Cross sprite operation',
				'30Ext.block.anotherRun': 'Let [sprite] run[SUBSTACK]',
				'30Ext.block.anotherRunWithClone': 'Let the [cloneId] clone of [sprite] run[SUBSTACK]'
			}
		})
	}
	formatMessage(id) {
		return this._formatMessage({
			id,
			default: id,
			description: id,
		})
	}
	getInfo() {
		return {
			id: '30Ext', // 拓展id
			name: this.formatMessage('30Ext.extensionName'),

			color1: '#FF8196',
			// menuIconURI: icon,
			// blockIconURI: icon,
			blocks: [
				"---" + this.formatMessage("30Ext.info.1"), //角色造型操作
				// 镜像造型
				{
					opcode: 'mirrorSprite',
					blockType: 'command',
					text: this.formatMessage('30Ext.block.mirrorSprite'),
					arguments: {
						mirrorMethod: {
							type: 'number',
							menu: [{
									text: this.formatMessage('30Ext.menu.mirrorMethod.1'), //左右镜像
									value: 0
								},
								{
									text: this.formatMessage('30Ext.menu.mirrorMethod.2'), //上下镜像
									value: 1
								}
							]
						}
					}
				},
				// 清除镜像
				{
					opcode: 'clearMirror',
					blockType: 'command',
					text: this.formatMessage('30Ext.block.clearMirror')
				},
				"---" + this.formatMessage("30Ext.info.2"), //角色跨域操作
				{
					opcode: 'anotherRun',
					blockType: 'conditional',
					text: this.formatMessage('30Ext.block.anotherRun'),
					arguments: {
						spriteName: {
							type: 'string',
							menu: spritesMenu
						},
						SUBSTACK: {
							type: "input_statement"
						}
					}
				},
				{
					opcode: 'anotherRunWithClone',
					blockType: 'conditional',
					text: this.formatMessage('30Ext.block.anotherRunWithClone'),
					arguments: {
						spriteName: {
							type: 'string',
							menu: spritesMenu
						},
						cloneId: {
							type: 'number',
							defaultValue: 1
						}
						SUBSTACK: {
							type: "input_statement"
						}
					}
				}
			],
			menus: {
				spritesMenu: {
					items: 'getSpritesMenu'
				}
			}
		}
	}
	//菜单
	//动态菜单: 角色菜单
	getSpritesMenu(){
		var sprites = [];
		for(const targetId in vm.runtime.targets) {
			if(!vm.runtime.targets.hasOwnProperty(targetId)) continue;
			if(!vm.runtime.targets[targetId].isOriginal) continue;
			if(vm.runtime.targets[targetId] === vm.editingTarget) continue; //排除自己
			let name = vm.runtime.targets[targetId].sprite.name;
			sprites.push(name); //疑问？ 菜单不应该返回诸如[["显示", "内容"],["显示2", "内容值"]]的东西吗 我看扩展库test.js是这样写
		}
		return sprites;
	}
	//
	//角色造型操作
	//
	//镜像造型
	mirrorSprite(args, util){
		util.target.runtime.renderer._allDrawables[util.target.drawableID]._skinScale[args.mirrorMethod] *= -1;
	}
	//清除镜像
	clearMirror(args, util){
		for (let i=0; i<2; i++){
			let foo = util.target.runtime.renderer._allDrawables[util.target.drawableID]._skinScale[i];
			foo = Math.abs(foo);
		}
	}
	//
	//角色跨域操作
	//
	//跨域执行
	anotherRun(args, util){
		if(!util.thread.ex_30Ext_count) {
			util.thread.ex_30Ext_count = true;
			util.thread.ex_30Ext_oldTarget = util.thread.target;
			util.thread.target = util.target.sprite.clones[0];
			util.startBranch(1, true);
		} else {
			util.thread.target = util.thread.ex_30Ext_oldTarget;
			util.thread.ex_30Ext_count = false;
		}
	}
	//跨域克隆体执行
	anotherRunWithClone(args, util){
		if(!util.thread.ex_30Ext_count) {
			util.thread.ex_30Ext_count = true;
			util.thread.ex_30Ext_oldTarget = util.thread.target;
			util.thread.target = util.target.sprite.clones[args.cloneId];
			util.startBranch(1, true);
		} else {
			util.thread.target = util.thread.ex_30Ext_oldTarget;
			util.thread.ex_30Ext_count = false;
		}
	}
}
window.tempExt = {
	Extension: _30Extensions,
	info: {
		name: '30Ext.extensionName',
		description: '30Ext.description',
		extensionId: '30Ext',
		// iconURL: icon,
		// insetIconURL: cover,
		featured: true,
		disabled: false,
		collaborator: '_30 x CCW'
	},
	l10n: {
		'zh-cn': {
			'30Ext.extensionName': 'java30433的工具箱',
			'30Ext.description': '造型镜像&角色跨域操作　持续更新中...'
		},
		en: {
			'30Ext.extensionName': "java30433's Toolbox",
			'30Ext.description': 'Mirror transform&Cross sprite operation　Continuous updating.'
		}
	}
};