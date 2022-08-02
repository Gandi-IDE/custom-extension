import Cast from '../utils/cast.js'
import Color from '../utils/color.js'
// import cover from './assets/icon.svg'
// import icon from './assets/icon.svg'
//鸣谢：-6 优化代码和修复了一些 bug；_30 提供了部分拓展积木

console.log(Cast.toNumber('123'))
console.log(Cast.toNumber('aab'))
class ArkosExtensions {
	constructor(runtime) {
		this.runtime = runtime
		this.tempData = {}
		this.sortedTable = {
			list1: {
				order: 'desc',
				list: []
			},
			list2: {
				order: 'desc',
				list: []
			},
		}
		this._formatMessage = runtime.getFormatMessage({
			'zh-cn': {
				'ArkosExt.extensionName': 'Arkosの拓展',
				'ArkosExt.info1': '🚶 坐标和方向',
				'ArkosExt.info2': '🔠 字符串处理',
				'ArkosExt.info3': '🛠 实用积木',
				'ArkosExt.info4': '📄 信息获取',
				'ArkosExt.info5': '📊 排序表',
				'ArkosExt.info6': '🗂️ 临时数据',
				'ArkosExt.info7': '临时变量',
				'ArkosExt.info8': '临时列表',
				'ArkosExt.info9': '临时容器',
				'ArkosExt.stringEquality': '(区分大小写)[ONE]=[TWO]',
				'ArkosExt.directionFromAtoB': '点x1:[X1]y1:[Y1]朝向点x2:[X2]y2:[Y2]的方向',
				'ArkosExt.differenceBetweenDirections': '由方向1[a]到方向2[b]的角度差',
				'ArkosExt.distance': '点x1:[X1]y1:[Y1]到点x2:[X2]y2:[Y2]的距离',
				'ArkosExt.searchString': '在[str]中查找[substr]的位置(从位置[pos]开始找)',
				'ArkosExt.insertString': '在[str]的第[pos]个字符前插入[substr]',
				'ArkosExt.replaceString': '将[str]中的第[start]个到第[end]个字符,替换为[substr]',
				'ArkosExt.turnDegreesToDir': '朝方向[dir]旋转[degree]度',

				'ArkosExt.getEffect': '获取特效[EFFECT]的值',
				'ArkosExt.color': '颜色',
				'ArkosExt.fisheye': '鱼眼',
				'ArkosExt.whirl': '旋涡',
				'ArkosExt.pixelate': '像素化',
				'ArkosExt.mosaic': '马赛克',
				'ArkosExt.brightness': '亮度',
				'ArkosExt.ghost': '虚像',

				'ArkosExt.isHiding': '角色隐藏？',
				'ArkosExt.getRotationStyle': '当前旋转方式',
				'ArkosExt.getWidthOrHeight': '获取当前造型的[t]',
				'ArkosExt.setSize': '⚠️强行将大小设为[size]（无视限制）',
				'ArkosExt.width': '宽',
				'ArkosExt.height': '高',

				'ArkosExt.setXY': '⚠️强行移到x:[x]y:[y]（无视边界）',
				'ArkosExt.getBoundaryCoord': '获取角色的[t]',
				'ArkosExt.top': '上边缘y',
				'ArkosExt.bottom': '下边缘y',
				'ArkosExt.left': '左边缘x',
				'ArkosExt.right': '右边缘x',
				'ArkosExt.isOutOfSight': '角色移到舞台区外？',

				'ArkosExt.and': '且',
				'ArkosExt.or': '或',

				'ArkosExt.clearSortedTable': '📊清空排序表[list]',
				'ArkosExt.setTypeOfSortedTable': '📊将排序表[list]的排序方式设为[type]',
				'ArkosExt.addToSortedTable': '📊将内容(重名的则覆盖)[name],排序值[value]加入排序表[list],附加信息[extra]',
				'ArkosExt.getFromSortedTableByNo': '📊获取排序表[list]中第[n]项的[t]',
				'ArkosExt.getFromSortedTableByName': '📊获取[name]在排序表[list]中的[t]',
				'ArkosExt.lengthOfSortedTable': '📊排序表[list]中内容数',
				'ArkosExt.deleteNameOfSortedTable': '📊删除排序表[list]中名为[name]的项',
				'ArkosExt.asc': '升序',
				'ArkosExt.desc': '降序',

				'ArkosExt.name': '名称',
				'ArkosExt.rank': '表中位置',
				'ArkosExt.rankValue': '排序值',
				'ArkosExt.extra': '附加信息',

				'ArkosExt.colorToHex': '颜色[COLOR]的代码',

				'ArkosExt.deleteAllTempData': '🗂️清空所有临时数据',
				'ArkosExt.getCountOfTempData': '🗂️临时数据量',
				'ArkosExt.delTempData': '🗂️删除名为[data]的临时数据',

				'ArkosExt.setTempVar': '🗂️将临时变量[var]设为[t]',
				'ArkosExt.addTempVar': '🗂️将临时变量[var]增加[t]',
				'ArkosExt.getTempVar': '🗂️临时数据[var]',

				'ArkosExt.clearTempList': '🗂️创建或清空临时列表[list]',
				'ArkosExt.initTempList': '🗂️临时列表[list]内容设为[t]',
				'ArkosExt.addTempList': '🗂️向临时列表[list]加入[t]',
				'ArkosExt.opTempList': '🗂️将临时列表[list]第[n]项[op][t]',
				'ArkosExt.ListOp1': '前插入',
				'ArkosExt.ListOp2': '替换为',
				'ArkosExt.ListOp3': '增加',
				'ArkosExt.delItemOfTempList': '🗂️删除临时列表[list]第[n]项',
				'ArkosExt.getItemOfTempList': '🗂️临时列表[list]第[n]项',
				'ArkosExt.lengthOfTempList': '🗂️临时列表[list]长度',

				'ArkosExt.clearTempCon': '🗂️创建或清空临时容器[con]',
				'ArkosExt.initTempCon': '🗂️临时容器[con]内容设为[t]',
				'ArkosExt.opTempCon': '🗂️临时容器[con]中的[c][op][t]',
				'ArkosExt.conOp1': '设为',
				'ArkosExt.conOp2': '增加',
				'ArkosExt.delItemOfTempCon': '🗂️删除临时容器[con]中名为[c]的内容',
				'ArkosExt.getItemOfTempConByName': '🗂️临时容器[con]中的[c]',
				'ArkosExt.getItemOfTempConByNo': '🗂️临时容器[con]第[n]项的[t]',
				'ArkosExt.conInfo1': '名称',
				'ArkosExt.conInfo2': '内容',
				'ArkosExt.lengthOfTempCon': '🗂️临时容器[con]中内容数',

				'30Ext.info': '✨ 以下扩展由_30提供',
				'30Ext.info.1': '🔮 造型镜像操作',
				'30Ext.block.mirrorSprite': '(⚠️还在测试)[mirrorMethod]当前角色',
				'30Ext.menu.mirrorMethod.1': '左右镜像',
				'30Ext.menu.mirrorMethod.2': '上下镜像',
				'30Ext.block.clearMirror': '(⚠️还在测试)清除角色镜像变换',
			},

			en: {
				'ArkosExt.extensionName': "Arkos' Extensions",
				'ArkosExt.stringEquality': '(case sensitive)[ONE]=[TWO]',
				'ArkosExt.directionFromAtoB': 'direction from x1:[X1]y1:[Y1]to x2:[X2]y2:[Y2]',
				'ArkosExt.differenceBetweenDirections': 'direction[b] minus direction[a]',
				'ArkosExt.distance': 'distance between x1:[X1]y1:[Y1]and x2:[X2]y2:[Y2]',
				'ArkosExt.searchString': 'position of[substr]in[str],start from[pos]',
				'ArkosExt.insertString': 'insert[substr]at[pos]of[str]',
				'ArkosExt.replaceString': 'replace from[start]to[end]of[str],with[substr]',
				'ArkosExt.turnDegreesToDir': 'turn[degree] degrees toward direction[dir]',
				'ArkosExt.getEffect': 'effect[EFFECT]',
				'ArkosExt.color': 'color',
				'ArkosExt.fisheye': 'fisheye',
				'ArkosExt.whirl': 'whirl',
				'ArkosExt.pixelate': 'pixelate',
				'ArkosExt.mosaic': 'mosaic',
				'ArkosExt.brightness': 'brightness',
				'ArkosExt.ghost': 'ghost',
				'ArkosExt.isHiding': 'is hiding?',
				'ArkosExt.getRotationStyle': 'rotation style',
				'ArkosExt.getWidthOrHeight': 'get [t] of the current costume',
				'ArkosExt.setSize': '⚠️force the size to [size] % (regardless of limitation) ',
				'ArkosExt.width': 'width',
				'ArkosExt.height': 'height',

				'ArkosExt.setXY': '⚠️force to x:[x]y:[y] (regardless of the boundary)',
				'ArkosExt.getBoundaryCoord': 'get [t] of the sprite',
				'ArkosExt.top': 'top y',
				'ArkosExt.bottom': 'bottom y',
				'ArkosExt.left': 'left x',
				'ArkosExt.right': 'right x',
				'ArkosExt.isOutOfSight': 'is out of stage?',

				'ArkosExt.and': 'and',
				'ArkosExt.or': 'or',

				'ArkosExt.clearSortedTable': '📊empty sorted table[list]',
				'ArkosExt.setTypeOfSortedTable': '📊set sort order of[list]to[type]',
				'ArkosExt.addToSortedTable': '📊add (overwrite if existed)[name]to table[list] with sort index value[value],extra data[extra] and sort',
				'ArkosExt.getFromSortedTableByNo': '📊get[t]of #[n] from [list]',
				'ArkosExt.getFromSortedTableByName': '📊get[t]of [name] from [list]',
				'ArkosExt.lengthOfSortedTable': '📊length of sorted table[list]',
				'ArkosExt.deleteNameOfSortedTable': '📊delete [name] in[list]',
				'ArkosExt.asc': 'ascending order',
				'ArkosExt.desc': 'descending order',

				'ArkosExt.name': 'name',
				'ArkosExt.rank': 'rank',
				'ArkosExt.rankValue': 'rankValue',
				'ArkosExt.extra': 'extra',

				'ArkosExt.colorToHex': 'get code of color[COLOR]',

				'ArkosExt.info1': '🚶 Coordinate and Direction',
				'ArkosExt.info2': '🔠 String Processing',
				'ArkosExt.info3': '🛠 Utilities',
				'ArkosExt.info4': '📄 Information',
				'ArkosExt.info5': '📊 Sorted Table',
				'ArkosExt.info6': '🗂️ Temporary Data',
				'ArkosExt.info7': 'temp var',
				'ArkosExt.info8': 'temp list',
				'ArkosExt.info9': 'temp container',

				'ArkosExt.deleteAllTempData': '🗂️clear all temporary data',
				'ArkosExt.getCountOfTempData': '🗂️count of temporary data',
				'ArkosExt.delTempData': '🗂️delete temporary data[data]',

				'ArkosExt.setTempVar': '🗂️set temp var[var] to [t]',
				'ArkosExt.addTempVar': '🗂️change temp var[var] by [t]',
				'ArkosExt.getTempVar': '🗂️temp data[var]',


				'ArkosExt.clearTempList': '🗂️create or clear temp list[list]',
				'ArkosExt.initTempList': '🗂️set temp list[list]to[t]',
				'ArkosExt.addTempList': '🗂️add[t] to temp list[list]',
				'ArkosExt.opTempList': '🗂️[op][t]at [n] of temp list[list]',
				'ArkosExt.ListOp1': 'insert',
				'ArkosExt.ListOp2': 'replace with',
				'ArkosExt.ListOp3': 'change by',
				'ArkosExt.delItemOfTempList': '🗂️delete [n]of temp list[list]',
				'ArkosExt.getItemOfTempList': '🗂️item[n]of temp list[list]',
				'ArkosExt.lengthOfTempList': '🗂️length of temp list[list]',

				'ArkosExt.clearTempCon': '🗂️create or clear temp container[con]',
				'ArkosExt.initTempCon': '🗂️set temp container[con]to[t]',
				'ArkosExt.opTempCon': '🗂️[c]in temp container[con][op][t]',
				'ArkosExt.conOp1': 'set to',
				'ArkosExt.conOp2': 'change by',
				'ArkosExt.delItemOfTempCon': '🗂️delete[c]in temp container[con]',
				'ArkosExt.getItemOfTempConByName': '🗂️[c]in temp container[con]',
				'ArkosExt.getItemOfTempConByNo': '🗂️[t] of #[n] in temp container[con]',
				'ArkosExt.conInfo1': 'name',
				'ArkosExt.conInfo2': 'content',
				'ArkosExt.lengthOfTempCon': '🗂️count of contents in temp container[con]',

				'30Ext.info': '✨ Contributed by _30',
				'30Ext.info.1': '🔮 Mirror transform',
				'30Ext.block.mirrorSprite': '(⚠️testing)[mirrorMethod] current sprite',
				'30Ext.menu.mirrorMethod.1': 'Horizontal mirror transform',
				'30Ext.menu.mirrorMethod.2': 'Vertical mirror transform',
				'30Ext.block.clearMirror': '(⚠️testing)Clear the mirror transform',
			},
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
			id: 'hcnTest', // 拓展id
			name: this.formatMessage('ArkosExt.extensionName'),

			color1: '#FF8383',
			// menuIconURI: icon,
			// blockIconURI: icon,
			blocks: [
				"---" + this.formatMessage("ArkosExt.info1"), //🏃 坐标&角度   
				// 计算点A到点B的方向
				{
					opcode: 'getDirFromAToB',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.directionFromAtoB'),
					arguments: {
						X1: {
							type: 'number',
							defaultValue: 0,
						},
						Y1: {
							type: 'number',
							defaultValue: 0,
						},
						X2: {
							type: 'number',
							defaultValue: 0,
						},
						Y2: {
							type: 'number',
							defaultValue: 0,
						},
					},
				},
				// 计算角b-角a的角度差
				{
					opcode: 'differenceBetweenDirections',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.differenceBetweenDirections'),
					arguments: {
						a: {
							type: 'number',
							defaultValue: 0,
						},
						b: {
							type: 'number',
							defaultValue: 0,
						},
					},
				},
				// 两点距离
				{
					opcode: 'disFromAToB',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.distance'),
					arguments: {
						X1: {
							type: 'number',
							defaultValue: 0,
						},
						Y1: {
							type: 'number',
							defaultValue: 0,
						},
						X2: {
							type: 'number',
							defaultValue: 0,
						},
						Y2: {
							type: 'number',
							defaultValue: 0,
						},
					},
				},
				//朝..方向旋转..角度
				{
					opcode: 'turnDegreesToDir',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.turnDegreesToDir'),
					arguments: {
						degree: {
							type: 'number',
							defaultValue: 45,
						},
						dir: {
							type: 'angle',
							defaultValue: 10,
						},
					},
					filter: ['sprite']
				},
				"---" + this.formatMessage("ArkosExt.info2"), //🔠字符串处理 
				// 查找子字符串，从pos开始
				{
					opcode: 'indexof',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.searchString'),
					arguments: {
						str: {
							type: 'string',
							defaultValue: 'banana',
						},
						substr: {
							type: 'string',
							defaultValue: 'na',
						},
						pos: {
							type: 'number',
							defaultValue: 1,
						},
					},
				},
				// 在字符串中插入子字符串
				{
					opcode: 'insertStr',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.insertString'),
					arguments: {
						str: {
							type: 'string',
							defaultValue: 'ac',
						},
						substr: {
							type: 'string',
							defaultValue: 'b',
						},
						pos: {
							type: 'number',
							defaultValue: 2,
						},
					},
				},
				// 替换字符串中的从..到..的字符串
				{
					opcode: 'replaceStr',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.replaceString'),
					arguments: {
						str: {
							type: 'string',
							defaultValue: 'ABCDEF',
						},
						substr: {
							type: 'string',
							defaultValue: 'XX',
						},
						start: {
							type: 'number',
							defaultValue: 3,
						},
						end: {
							type: 'number',
							defaultValue: 4,
						},
					},
				},
				"---" + this.formatMessage("ArkosExt.info3"), //🔧实用积木
				// 判断相等（区分大小写）
				{
					opcode: 'strictlyEquals',
					blockType: 'Boolean',
					text: this.formatMessage('ArkosExt.stringEquality'),
					arguments: {
						ONE: {
							type: 'string',
							defaultValue: 'A',
						},
						TWO: {
							type: 'string',
							defaultValue: 'a',
						},
					},
				},
				//返回值转bool积木
				{
					opcode: 'reporterToBoolean',
					blockType: 'Boolean',
					text: '[t]',
					arguments: {
						t: {
							type: 'string',
							defaultValue: '1',
						}
					},
				},
				//形如 a≤b≤c
				{
					opcode: 'compareTwoSides',
					blockType: 'Boolean',
					text: '[a][op1][b][op2][c]',
					arguments: {
						a: {
							type: 'string',
							defaultValue: '1',
						},
						b: {
							type: 'string',
							defaultValue: 'x',
						},
						c: {
							type: 'string',
							defaultValue: '3',
						},
						op1: {
							type: 'string',
							menu: 'opMenu1',
						},
						op2: {
							type: 'string',
							menu: 'opMenu1',
						},
					},
				},
				//形如：a≤b且/或>c op1,op2 logic  compareTwoSidesPlus
				{
					opcode: 'compareTwoSidesPlus',
					blockType: 'Boolean',
					text: '[a][op1][b][logic][op2][c]',
					arguments: {
						a: {
							type: 'string',
							defaultValue: 'x',
						},
						b: {
							type: 'string',
							defaultValue: '1',
						},
						c: {
							type: 'string',
							defaultValue: '3',
						},
						op1: {
							type: 'string',
							menu: 'opMenu2',
							defaultValue: '<',
						},
						op2: {
							type: 'string',
							menu: 'opMenu2',
							defaultValue: '>',
						},
						logic: {
							type: 'string',
							menu: 'logicMenu',
							defaultValue: 'or', //
						},
					},
				},
				//获取颜色HEX
				{
					opcode: 'colorToHex',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.colorToHex'),
					arguments: {
						COLOR: {
							type: 'color',
							//defaultValue: '1',
						},
					},
				},
				//强行设置大小
				{
					opcode: 'setSize',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.setSize'),
					arguments: {
						size: {
							type: 'number',
							defaultValue: 9999,
						},
					},
					filter: ['sprite']
				},
				//强行移到xy
				{
					opcode: 'setXY',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.setXY'),
					arguments: {
						x: {
							type: 'number',
							defaultValue: 100000,
						},
						y: {
							type: 'number',
							defaultValue: 100000,
						},
					},
					filter: ['sprite']
				},
				"---" + this.formatMessage("ArkosExt.info4"), //📄数据获取 
				//获取特效值
				{
					opcode: 'getEffect',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.getEffect'),
					arguments: {
						EFFECT: {
							type: 'string',
							menu: 'effectMenu',
						},
					},
				},
				//是否隐藏
				{
					opcode: 'isHiding',
					blockType: 'Boolean',
					text: this.formatMessage('ArkosExt.isHiding'),
					filter: ['sprite']
				},
				//获取旋转方式
				{
					opcode: 'getRotationStyle',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.getRotationStyle'),
					filter: ['sprite']
				},
				//获取造型0宽1高
				{
					opcode: 'getWidthOrHeight',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.getWidthOrHeight'),
					arguments: {
						t: {
							type: 'string',
							menu: 'WOrH',
						},
					},
				},
				//获取角色边缘xy
				{
					opcode: 'getBoundaryCoord',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.getBoundaryCoord'),
					arguments: {
						t: {
							type: 'string',
							menu: 'boundaryMenu',
						}
					},
					filter: ['sprite']
				},
				//是否跑到舞台外
				{
					opcode: 'isOutOfSight',
					blockType: 'Boolean',
					text: this.formatMessage('ArkosExt.isOutOfSight'),
					filter: ['sprite']
				},
				"---" + this.formatMessage("ArkosExt.info5"), //📊排序表 
				//📊清空排序表
				{
					opcode: 'clearSortedTable',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.clearSortedTable'),
					arguments: {
						list: {
							type: 'string',
							menu: 'sortedTableMenu',
						},
					},
				},
				{
					//📊排序表排序方式
					opcode: 'setTypeOfSortedTable',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.setTypeOfSortedTable'),
					arguments: {
						list: {
							type: 'string',
							menu: 'sortedTableMenu',
						},
						type: {
							type: 'string',
							menu: 'sortOrder',
						},
					},
				},
				{
					//📊将XX加入排序表
					opcode: 'addToSortedTable',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.addToSortedTable'),
					arguments: {
						list: {
							type: 'string',
							menu: 'sortedTableMenu',
						},
						name: {
							type: 'string',
							defaultValue: '小明',
						},
						value: {
							type: 'number',
							defaultValue: '95',
						},
						extra: {
							type: 'string',
							defaultValue: '20212490',
						},
					},
				},
				{
					//📊获取排序表第n项
					opcode: 'getFromSortedTableByNo',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.getFromSortedTableByNo'),
					arguments: {
						list: {
							type: 'string',
							menu: 'sortedTableMenu',
						},
						n: {
							type: 'number',
							defaultValue: 1,
						},
						t: {
							type: 'string',
							defaultValue: '1',
							menu: 'tableItemPropertyMenu',
						},
					},
				},
				{
					//📊获取排序表特定名字内容
					opcode: 'getFromSortedTableByName',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.getFromSortedTableByName'),
					arguments: {
						list: {
							type: 'string',
							menu: 'sortedTableMenu',
						},
						name: {
							type: 'string',
							defaultValue: '小明',
						},
						t: {
							type: 'string',
							defaultValue: '2',
							menu: 'tableItemPropertyMenu',
						},
					},
				},
				{
					//📊获取排序表长度
					opcode: 'lengthOfSortedTable',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.lengthOfSortedTable'),
					arguments: {
						list: {
							type: 'string',
							menu: 'sortedTableMenu',
						},
					},
				},
				{
					//📊删除表中内容
					opcode: 'deleteNameOfSortedTable',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.deleteNameOfSortedTable'),
					arguments: {
						list: {
							type: 'string',
							menu: 'sortedTableMenu',
						},
						name: {
							type: 'string',
							defaultValue: '小明',
						},
					},
				},

				"---" + this.formatMessage("ArkosExt.info6"), //🗂️ 临时数据
				//清空所有临时数据
				{
					opcode: 'deleteAllTempData',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.deleteAllTempData'),
				},
				//临时数据量
				{
					opcode: 'getCountOfTempData',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.getCountOfTempData'),
				},
				//删除临时数据
				{
					opcode: 'delTempData',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.delTempData'),
					arguments: {
						data: {
							type: 'string',
							defaultValue: 'i',
						},
					},
				},
				"---" + this.formatMessage("ArkosExt.info7"), //临时变量
				//设置临时数据
				{
					opcode: 'setTempVar',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.setTempVar'),
					arguments: {
						var: {
							type: 'string',
							defaultValue: 'i',
						},
						t: {
							type: 'string',
							defaultValue: '0',
						},
					},
				},
				//增加临时数据
				{
					opcode: 'addTempVar',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.addTempVar'),
					arguments: {
						var: {
							type: 'string',
							defaultValue: 'i',
						},
						t: {
							type: 'number',
							defaultValue: 1,
						},
					},
				},
				//获取临时数据
				{
					opcode: 'getTempVar',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.getTempVar'),
					arguments: {
						var: {
							type: 'string',
							defaultValue: 'i',
						},
					},
				},
				"---" + this.formatMessage("ArkosExt.info8"), //临时列表
				//创建或清空临时列表
				{
					opcode: 'clearTempList',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.clearTempList'),
					arguments: {
						list: {
							type: 'string',
							defaultValue: 'list',
						},
					},
				},
				//设置临时列表
				{
					opcode: 'initTempList',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.initTempList'),
					arguments: {
						list: {
							type: 'string',
							defaultValue: 'list',
						},
						t: {
							type: 'string',
							defaultValue: '[1,2,"apple"]',
						},
					},
				},
				//向临时列表加入
				{
					opcode: 'addTempList',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.addTempList'),
					arguments: {
						list: {
							type: 'string',
							defaultValue: 'list',
						},
						t: {
							type: 'string',
							defaultValue: 'thing',
						},
					},
				},
				//操作临时列表
				{
					opcode: 'opTempList',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.opTempList'),
					arguments: {
						list: {
							type: 'string',
							defaultValue: 'list',
						},
						op: {
							type: 'string',
							menu: 'ListOpMenu',
						},
						n: {
							type: 'number',
							defaultValue: 1,
						},
						t: {
							type: 'string',
							defaultValue: 'thing',
						},
					},
				},
				//删除临时列表XX项
				{
					opcode: 'delItemOfTempList',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.delItemOfTempList'),
					arguments: {
						list: {
							type: 'string',
							defaultValue: 'list',
						},
						n: {
							type: 'number',
							defaultValue: 1,
						},
					},
				},
				//获取临时列表XX项
				{
					opcode: 'getItemOfTempList',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.getItemOfTempList'),
					arguments: {
						list: {
							type: 'string',
							defaultValue: 'list',
						},
						n: {
							type: 'number',
							defaultValue: 1,
						},
					},
				},
				//临时列表长度
				{
					opcode: 'lengthOfTempList',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.lengthOfTempList'),
					arguments: {
						list: {
							type: 'string',
							defaultValue: 'list',
						},
					},
				},
				"---" + this.formatMessage("ArkosExt.info9"), //临时容器
				//创建或清空临时容器
				{
					opcode: 'clearTempCon',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.clearTempCon'),
					arguments: {
						con: {
							type: 'string',
							defaultValue: 'con1',
						},
					},
				},
				//设置临时容器
				{
					opcode: 'initTempCon',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.initTempCon'),
					arguments: {
						con: {
							type: 'string',
							defaultValue: 'con1',
						},
						t: {
							type: 'string',
							defaultValue: '{"coins":200,"backpack":["wood","bread"]}',
						},
					},
				},
				//操作临时容器
				{
					opcode: 'opTempCon',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.opTempCon'),
					arguments: {
						con: {
							type: 'string',
							defaultValue: 'con1',
						},
						op: {
							type: 'string',
							menu: 'conOpMenu',
						},
						c: {
							type: 'string',
							defaultValue: 'coins',
						},
						t: {
							type: 'string',
							defaultValue: '520',
						},
					},
				},
				//删除临时容器名为xx的内容
				{
					opcode: 'delItemOfTempCon',
					blockType: 'command',
					text: this.formatMessage('ArkosExt.delItemOfTempCon'),
					arguments: {
						con: {
							type: 'string',
							defaultValue: 'con1',
						},
						c: {
							type: 'string',
							defaultValue: 'coins',
						},
					},
				},
				//获取临时容器名为XX的内容
				{
					opcode: 'getItemOfTempConByName',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.getItemOfTempConByName'),
					arguments: {
						con: {
							type: 'string',
							defaultValue: 'con1',
						},
						c: {
							type: 'string',
							defaultValue: 'coins',
						},
					},
				},
				//获取临时容器第n项的xx
				{
					opcode: 'getItemOfTempConByNo',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.getItemOfTempConByNo'),
					arguments: {
						con: {
							type: 'string',
							defaultValue: 'con1',
						},
						n: {
							type: 'number',
							defaultValue: 1,
						},
						t: {
							type: 'string',
							menu: 'conInfoMenu',
							defaultValue: '2',
						},
					},
				},
				//临时容器长度
				{
					opcode: 'lengthOfTempCon',
					blockType: 'reporter',
					text: this.formatMessage('ArkosExt.lengthOfTempCon'),
					arguments: {
						con: {
							type: 'string',
							defaultValue: 'con1',
						},
					},
				},


				//
				"---" + this.formatMessage("30Ext.info"), //感谢30提供的扩展
				"---" + this.formatMessage("30Ext.info.1"), //造型镜像
				// 镜像造型
				{
					opcode: 'mirrorSprite',
					blockType: 'command',
					text: this.formatMessage('30Ext.block.mirrorSprite'),
					arguments: {
						mirrorMethod: {
							type: 'string',
							menu: 'mirrorMenu'
						}
					}
				},
				// 清除镜像
				{
					opcode: 'clearMirror',
					blockType: 'command',
					text: this.formatMessage('30Ext.block.clearMirror')
				}

			],
			menus: {
				conInfoMenu: [{
						text: this.formatMessage('ArkosExt.conInfo1'), //名称
						value: '1'
					},
					{
						text: this.formatMessage('ArkosExt.conInfo2'), //内容
						value: '2'
					},
				],
				conOpMenu: [{
						text: this.formatMessage('ArkosExt.conOp1'), //设为
						value: '1'
					},
					{
						text: this.formatMessage('ArkosExt.conOp2'), //增加
						value: '2'
					},
				],
				ListOpMenu: [{
						text: this.formatMessage('ArkosExt.ListOp1'), //插入
						value: '1'
					},
					{
						text: this.formatMessage('ArkosExt.ListOp2'), //替换
						value: '2'
					},
					{
						text: this.formatMessage('ArkosExt.ListOp3'), //增加
						value: '3'
					},
				],
				tableItemPropertyMenu: [{
						text: this.formatMessage('ArkosExt.name'),
						value: '1'
					},
					{
						text: this.formatMessage('ArkosExt.rank'),
						value: '2'
					},
					{
						text: this.formatMessage('ArkosExt.rankValue'),
						value: '3'
					},
					{
						text: this.formatMessage('ArkosExt.extra'),
						value: '4'
					},
				],
				sortOrder: [{
						text: this.formatMessage('ArkosExt.asc'),
						value: 'asc' //升序
					},
					{
						text: this.formatMessage('ArkosExt.desc'),
						value: 'desc' //降序
					},
				],
				sortedTableMenu: {
					items: 'findAllSortedTable',
					acceptReporters: true,
				},
				//判断符菜单
				opMenu1: ['<', '≤', '=', '≠', ],
				opMenu2: ['<', '>', '≤', '≥', '=', '≠', ],
				//logicMenu
				logicMenu: [{
						text: this.formatMessage('ArkosExt.or'),
						value: 'or'
					},
					{
						text: this.formatMessage('ArkosExt.and'),
						value: 'and'
					},
				],
				//角色上下左右边缘
				boundaryMenu: [{
						text: this.formatMessage('ArkosExt.top'),
						value: '1'
					},
					{
						text: this.formatMessage('ArkosExt.bottom'),
						value: '2'
					},
					{
						text: this.formatMessage('ArkosExt.left'),
						value: '3'
					},
					{
						text: this.formatMessage('ArkosExt.right'),
						value: '4'
					},
				],
				//0宽1高 菜单
				WOrH: [{
						text: this.formatMessage('ArkosExt.width'),
						value: '0'
					},
					{
						text: this.formatMessage('ArkosExt.height'),
						value: '1'
					},
				],
				//特效菜单
				effectMenu: [{
						text: this.formatMessage('ArkosExt.color'),
						value: 'color'
					},
					{
						text: this.formatMessage('ArkosExt.fisheye'),
						value: 'fisheye'
					},
					{
						text: this.formatMessage('ArkosExt.whirl'),
						value: 'whirl'
					},
					{
						text: this.formatMessage('ArkosExt.pixelate'),
						value: 'pixelate'
					},
					{
						text: this.formatMessage('ArkosExt.mosaic'),
						value: 'mosaic'
					},
					{
						text: this.formatMessage('ArkosExt.brightness'),
						value: 'brightness'
					},
					{
						text: this.formatMessage('ArkosExt.ghost'),
						value: 'ghost'
					}
				],
				//30Ext
				spritesMenu: {
					items: 'getSpritesMenu'
				},
				mirrorMenu: [{
						text: this.formatMessage('30Ext.menu.mirrorMethod.1'), //左右镜像
						value: '0'
					},
					{
						text: this.formatMessage('30Ext.menu.mirrorMethod.2'), //上下镜像
						value: '1'
					}
				]
			},
		}
	}

	strictlyEquals(args) {
		// 实际上在这里直接使用严格相等是不太明智的，因为有一定的可能会遇到数字和字符比较，
		// 而在Scratch中数字和字符在表现完全一样的时候几乎没有区别。
		// 因此包上Cast.toString()以使得数字和字符能够正常比较（类似 9 = "9" )
		return Cast.toString(args.ONE) === Cast.toString(args.TWO)
	}

	getDirFromAToB(args) {
		// 一定要先转化为数字；
		const X1 = Cast.toNumber(args.X1)
		const X2 = Cast.toNumber(args.X2)
		const Y1 = Cast.toNumber(args.Y1)
		const Y2 = Cast.toNumber(args.Y2)

		// 这里利用atan函数的性质atan(+inf)=90,atan(-inf)=-90,atan(NaN)=NaN可以省很多代码
		let a = Math.atan((X2 - X1) / (Y2 - Y1)) / Math.PI * 180 + (Y1 > Y2 ? 180 : 0)
		if(a > 180) a -= 360
		return a;
	}

	differenceBetweenDirections(args) {
		const a = Cast.toNumber(args.a)
		const b = Cast.toNumber(args.b)
		let dif = b - a
		dif -= Math.round(dif / 360) * 360
		if(dif === -180) dif = 180
		return dif
	}

	disFromAToB(args) {
		const X1 = Cast.toNumber(args.X1)
		const X2 = Cast.toNumber(args.X2)
		const Y1 = Cast.toNumber(args.Y1)
		const Y2 = Cast.toNumber(args.Y2)
		return Math.sqrt((X1 - X2) * (X1 - X2) + (Y1 - Y2) * (Y1 - Y2))
	}

	indexof(args) {
		const str = Cast.toString(args.str)
		const substr = Cast.toString(args.substr)
		const a = str.indexOf(substr, Cast.toNumber(args.pos) - 1)
		if(a === -1) {
			// Scratch列表中也有查询积木，其中找不到返回的是0。建议维持原有的风格。
			return 0
		}
		return a + 1
	}

	insertStr(args) {
		const str = Cast.toString(args.str)
		const substr = Cast.toString(args.substr)
		let pos = Cast.toNumber(args.pos) - 1
		if(pos < 0) {
			pos = 0
		}
		return str.slice(0, pos) + substr + str.slice(pos)
	}

	replaceStr(args) {
		const str = Cast.toString(args.str)
		const substr = Cast.toString(args.substr)
		let start = Cast.toNumber(args.start)
		let end = Cast.toNumber(args.end)
		if(start > end) {
			const t = end
			end = start
			start = t
		}
		if(start < 1) start = 1
		return str.slice(0, start - 1) + substr + str.slice(end)
	}


	turnDegreesToDir(args, util) {
		const degree = Cast.toNumber(args.degree);
		const dir = Cast.toNumber(args.dir);
		const dif = this.differenceBetweenDirections({
			a: util.target.direction,
			b: dir
		});
		if(Math.abs(dif) < degree)
			util.target.setDirection(dir);
		else if(dif < 0)
			util.target.setDirection(util.target.direction - degree);
		else
			util.target.setDirection(util.target.direction + degree);
	}

	//获取特效的数值
	getEffect(args, util) {
		let effect = Cast.toString(args.EFFECT)
			.toLowerCase();
		if(!util.target.effects.hasOwnProperty(effect)) return 0;
		return util.target.effects[effect];
	}

	//角色是否可见
	isHiding(args, util) {
		return !util.target.visible;
	}

	//获取图层(逝一逝)
	// getLayer (args, util) {
	//   return util.target.layer;
	// }

	//获取当前角色的旋转方式
	getRotationStyle(args, util) {
		return util.target.rotationStyle;
	}

	//获取当前造型的长/宽
	getWidthOrHeight(args, util) {
		const costumeSize = util.target.renderer.getCurrentSkinSize(util.target.drawableID);
		return costumeSize[args.t];
	}

	//强行设置大小(逝一逝)
	setSize(args, util) {
		if(util.target.isStage) {
			return;
		}
		if(util.target.renderer) {
			args.size = this._clamp(Cast.toNumber(args.size), 0.1, 100000000)
			util.target.size = args.size;
			const {
				direction,
				scale
			} = util.target._getRenderedDirectionAndScale();
			util.target.renderer.updateDrawableDirectionScale(util.target.drawableID, direction, scale);
			if(util.target.visible) {
				util.target.emit('EVENT_TARGET_VISUAL_CHANGE', util.target);
				util.target.runtime.requestRedraw();
			}
		}
		util.target.runtime.requestTargetsUpdate(util.target);
	}

	_clamp(n, min, max) {
		return Math.min(Math.max(n, min), max);
	}

	//强行设置XY(逝一逝)
	setXY(args, util) {
		if(util.target.isStage) return;
		args.x = this._clamp(Cast.toNumber(args.x), -100000000, 100000000)
		args.y = this._clamp(Cast.toNumber(args.y), -100000000, 100000000)
		const oldX = util.target.x;
		const oldY = util.target.y;
		util.target.x = args.x;
		util.target.y = args.y;
		if(util.target.renderer) {
			util.target.renderer.updateDrawablePosition(util.target.drawableID, [args.x, args.y]);
			if(util.target.visible) {
				util.target.emit('EVENT_TARGET_VISUAL_CHANGE', util.target);
				util.target.runtime.requestRedraw();
			}
		} else {
			util.target.x = x;
			util.target.y = y;
		}
		util.target.emit('TARGET_MOVED', util.target, oldX, oldY, false);
		util.target.runtime.requestTargetsUpdate(util.target);
	}

	//获取角色边缘的坐标
	getBoundaryCoord(args, util) {
		const bounds = util.target.runtime.renderer.getBounds(util.target.drawableID);
		switch (args.t) {
			case '1':
				return bounds.top;
			case '2':
				return bounds.bottom;
			case '3':
				return bounds.left;
			case '4':
				return bounds.right;
			default:
				return '';
		}
	}

	//是否在舞台外
	isOutOfSight(args, util) {
		// console.log(util.target.runtime.renderer)
		// console.log(util.target.renderer)
		if(util.target.renderer) {
			const stageWidth = util.target.runtime.stageWidth;
			const stageHeight = util.target.runtime.stageHeight;
			console.log('stageWidth', stageWidth);
			console.log('stageHeight', stageHeight);
			const bounds = util.target.runtime.renderer.getBounds(util.target.drawableID);
			if(bounds.right < -stageWidth / 2 ||
				bounds.left > stageWidth / 2 ||
				bounds.bottom > stageHeight / 2 ||
				bounds.top < -stageHeight / 2) {
				return true;
			}
		}
		return false;
	}

	//形如：<() >
	reporterToBoolean(args) {
		if(Cast.toString(args.t)
			.toLowerCase() === 'false') return false;
		if(args.t === '0') return false;
		return (args.t) ? true : false;
	}

	compare(a, b, op) {
		switch (op) {
			case '<':
				return Cast.compare(a, b) < 0;
			case '>':
				return Cast.compare(a, b) > 0;
			case '=':
				return Cast.compare(a, b) === 0;
			case '≤':
				return Cast.compare(a, b) <= 0;
			case '≥':
				return Cast.compare(a, b) >= 0;
			case '≠':
				return Cast.compare(a, b) !== 0;
			default:
				return false;
		}
	}

	//形如：a≤b≤c op1,op2
	compareTwoSides(args) {
		return this.compare(args.a, args.b, args.op1) && this.compare(args.b, args.c, args.op2)
	}

	//形如：a≤b且/或>c op1,op2 logic 
	compareTwoSidesPlus(args) {
		switch (args.logic) {
			case 'or':
				return this.compare(args.a, args.b, args.op1) || this.compare(args.a, args.c, args.op2)
			case 'and':
				return this.compare(args.a, args.b, args.op1) && this.compare(args.a, args.c, args.op2)
			default:
				return false;
		}
	}

	//数组排序规则
	sortRule(propName, order) {
		return (a, b) => {
			a = a[propName]
			b = b[propName]
			if(a > b) return order === 'asc' ? 1 : -1;
			else if(a < b) return order === 'asc' ? -1 : 1;
			else return 0;
		}
	}

	//查找所有排序表
	findAllSortedTable() {
		const list = [];
		let temp = this.sortedTable;
		Object.keys(temp)
			.forEach(obj => {
				//if ( Array.isArray (temp[obj]) ) {
				list.push(obj);
				//}
			});
		if(list.length === 0) {
			list.push({
				text: '-',
				value: 'empty',
			});
		}
		//list.sort(this.sortRule("text"));
		return list;
	}

	createTableIfNotExist(list) {
		if(!(list in this.sortedTable))
			this.sortedTable[list] = {
				order: 'desc',
				list: []
			};
	}

	sortTable(list) {
		this.sortedTable[list].list.sort(this.sortRule("rankValue", this.sortedTable[list].order));
	}

	//📊清空排序表
	clearSortedTable(args) {
		this.createTableIfNotExist(args.list)
		this.sortedTable[args.list].list = [];
	}

	//📊设置排序方式
	setTypeOfSortedTable(args) {
		this.createTableIfNotExist(args.list)
		this.sortedTable[args.list].order = args.type;
		this.sortTable(args.list)
	}

	//查找在列表中的插入位置（已有则覆盖）
	_findPlaceAndInsert(list, order, item) {
		//删除已存在的内容
		for(let i = 0; i < list.length; i++) {
			if(list[i].name === item.name) {
				//删除同名项
				list.splice(i, 1);
				break;
			}
		}
		//查找插入位置并插入
		for(let i = 0; i < list.length; i++) {
			if((list[i].rankValue > item.rankValue && order === 'asc') ||
				(list[i].rankValue < item.rankValue && order === 'desc')) {
				//插入在该项前
				list.splice(i, 0, item);
				return;
			}
		}
		//没找到插入位置，加在末尾
		list.push(item);
	}

	//📊将内容加入表
	addToSortedTable(args) {
		this.createTableIfNotExist(args.list)
		this._findPlaceAndInsert(
			this.sortedTable[args.list].list,
			this.sortedTable[args.list].order, {
				name: args.name,
				rankValue: args.value,
				extra: args.extra
			});
	}

	_getTInItem(item, t, rank) {
		if(item === undefined) return '';
		switch (t) {
			case '1':
				return item.name;
			case '2':
				return rank;
			case '3':
				return item.rankValue;
			case '4':
				return item.extra;
			default:
				return '';
		}
	}

	//📊获取第n项
	getFromSortedTableByNo(args) {
		if(!(args.list in this.sortedTable)) return '';
		let list = this.sortedTable[args.list].list;
		return this._getTInItem(list[args.n - 1], args.t, Cast.toNumber(args.n));
	}

	_getItemIdxByName(list, name) {
		for(let i = 0; i < list.length; i++) {
			if(list[i].name === name) {
				return i;
			}
		}
		return -1;
	}

	//📊获取名为XX的项
	getFromSortedTableByName(args) {
		if(!(args.list in this.sortedTable)) return '';
		let list = this.sortedTable[args.list].list;
		let n = this._getItemIdxByName(list, args.name);
		if(n === -1) return '';
		return this._getTInItem(list[n], args.t, n + 1);
	}

	//📊获取排序表长度
	lengthOfSortedTable(args) {
		if(!(args.list in this.sortedTable)) return 0;
		return this.sortedTable[args.list].list.length;
	}

	//📊删除排序表名为XX的内容
	deleteNameOfSortedTable(args) {
		if(!(args.list in this.sortedTable)) return;
		let list = this.sortedTable[args.list].list;
		let n = this._getItemIdxByName(list, args.name);
		if(n === -1) return;
		list.splice(n, 1);
	}

	//获取颜色HEX码
	colorToHex(args, util) {
		let c = Cast.toRgbColorList(args.COLOR)
		return Color.rgbToHex({
			r: c[0],
			g: c[1],
			b: c[2]
		});
	}


	//🗂️ 临时变量积木

	//来自 -6 ：任意内容转字符或数字
	_anythingToNumberString(value) {
		switch (typeof(value)) {
			case "string":
			case "number":
				break;
			case "object":
				value = JSON.stringify(value);
				break;
			default:
				value = ''; //包含了undefined
		}
		return value;
	}

	deleteAllTempData(args) {
		this.tempData = {};
	}

	getCountOfTempData(args) {
		return Object.keys(this.tempData)
			.length;
	}

	delTempData(args) {
		delete this.tempData[Cast.toString(args.data)];
	}

	setTempVar(args) {
		this.tempData[Cast.toString(args.var)] = args.t;
	}

	addTempVar(args) {
		this.tempData[Cast.toString(args.var)] = Cast.toNumber(this.tempData[Cast.toString(args.var)]) + Cast.toNumber(args.t);
	}

	getTempVar(args) {
		let temp = this.tempData[Cast.toString(args.var)]
		if(typeof(temp) === 'object') return JSON.stringify(temp);
		return Cast.toString(temp);
	}

	//创建或清空
	clearTempList(args) {
		this.tempData[Cast.toString(args.list)] = [];
	}

	initTempList(args) {
		try {
			let content = JSON.parse(Cast.toString(args.t))
			if(Array.isArray(content)) {
				this.tempData[Cast.toString(args.list)] = content;
			}
		} catch (e) {

		}
	}

	addTempList(args) {
		let list = this.tempData[Cast.toString(args.list)]
		if(!Array.isArray(list)) return;
		list.push(Cast.toString(args.t));
	}

	opTempList(args) {
		let list = this.tempData[Cast.toString(args.list)]
		if(!Array.isArray(list)) return;
		let n = Cast.toNumber(args.n)
		if(n < 1 || n > list.length + 1) return;
		n -= 1;
		switch (args.op) {
			case '1': //插入
				list.splice(n, 0, args.t);
				return;
			case '2': //替换
				list[n] = args.t;
				return;
			case '3': //增加
				list[n] = Cast.toNumber(list[n]) + Cast.toNumber(args.t);
				return;
			default:
				return;
		}
	}

	delItemOfTempList(args) {
		let list = this.tempData[Cast.toString(args.list)]
		if(!Array.isArray(list)) return;
		let n = Cast.toNumber(args.n)
		if(n < 1 || n > list.length) return;
		n -= 1;
		list.splice(n, 1);
	}

	getItemOfTempList(args) {
		let list = this.tempData[Cast.toString(args.list)]
		if(!Array.isArray(list)) return '';
		let n = Cast.toNumber(args.n)
		if(n < 1 || n > list.length) return '';
		n -= 1;
		return Cast.toString(list[n]);
	}

	lengthOfTempList(args) {
		let list = this.tempData[Cast.toString(args.list)]
		if(!Array.isArray(list)) return 0;
		return list.length;
	}

	//容器
	clearTempCon(args) {
		this.tempData[Cast.toString(args.con)] = {};
	}

	initTempCon(args) {
		try {
			let content = JSON.parse(Cast.toString(args.t))
			if(typeof(content) === 'object' && content !== null) {
				this.tempData[Cast.toString(args.con)] = content;
			}
		} catch (e) {

		}
	}

	opTempCon(args) {
		let con = this.tempData[Cast.toString(args.con)]
		if(!(typeof(con) === 'object' && !Array.isArray(con) && con !== null)) return;
		let c = Cast.toString(args.c)
		switch (args.op) {
			case '1': //设为
				con[c] = args.t;
				return;
			case '2': //增加
				if(!(c in con)) return;
				con[c] = Cast.toNumber(con[c]) + Cast.toNumber(args.t);
				return;
			default:
				return;
		}
	}

	delItemOfTempCon(args) {
		let con = this.tempData[Cast.toString(args.con)]
		if(!(typeof(con) === 'object' && !Array.isArray(con) && con !== null)) return;
		delete con[Cast.toString(args.c)];
	}

	getItemOfTempConByName(args) {
		let con = this.tempData[Cast.toString(args.con)]
		if(!(typeof(con) === 'object' && !Array.isArray(con) && con !== null)) return '';
		return Cast.toString(con[Cast.toString(args.c)]);
	}

	getItemOfTempConByNo(args) {
		let con = this.tempData[Cast.toString(args.con)]
		if(!(typeof(con) === 'object' && !Array.isArray(con) && con !== null)) return '';
		let key = Object.keys(con)[Cast.toNumber(args.n) - 1]
		if(key === undefined) return '';
		switch (args.t) {
			case '1': //名称
				return key;
			case '2': //内容
				return this._anythingToNumberString(con[key]);
			default:
				return;
		}
	}

	lengthOfTempCon(args) {
		let con = this.tempData[Cast.toString(args.con)]
		if(!(typeof(con) === 'object' && con !== null)) return 0;
		return Object.keys(con)
			.length;
	}


	//
	//30Ext
	//
	//菜单
	//动态菜单: 角色菜单
	getSpritesMenu() {
		var sprites = [];
		for(const targetId in this.runtime.targets) {
			if(!this.runtime.targets.hasOwnProperty(targetId)) continue;
			if(!this.runtime.targets[targetId].isOriginal) continue;
			if(this.runtime.targets[targetId] === this.runtime._editingTarget) continue; //排除自己
			let name = this.runtime.targets[targetId].sprite.name;
			sprites.push(name); //['Stage','角色1','角色2'] Stage暂时懒得换成中文
		}
		return sprites;
	}
	//
	//角色造型操作
	//
mirrorSprite(args, util) {
		let target = util.target;
		let drawable = this.runtime.renderer._allDrawables[target.drawableID];
this.setXY({x: target.x+1, y: target.y+1},util);
		if(!util.target.ext30_isHook) {
			let setXYhook = function(args, util) {
		if(util.target.isStage) return;
		args.x = this._clamp(Cast.toNumber(args.x), -100000000, 100000000)
		args.y = this._clamp(Cast.toNumber(args.y), -100000000, 100000000)
		const oldX = util.target.x;
		const oldY = util.target.y;
		util.target.x = args.x;
		util.target.y = args.y;
		if(util.target.renderer) {
			util.target.renderer.updateDrawablePosition(util.target.drawableID, [args.x, args.y]);
			if(util.target.visible) {
				util.target.runtime.requestRedraw();
			}
		} else {
			util.target.x = x;
			util.target.y = y;
		}
		util.target.emit('TARGET_MOVED', util.target, oldX, oldY, false);
		util.target.runtime.requestTargetsUpdate(util.target);
	}
			target.ext30_mirror0 = 1;
			target.ext30_mirror1 = 1;
			target.addListener('EVENT_TARGET_VISUAL_CHANGE', (e, t) => {
				setXYhook({x: target.x-1, y: target.y-1},util);
				drawable._skinScale[0] = Math.abs(drawable._skinScale[0]) * target.ext30_mirror0;
				drawable._skinScale[1] = Math.abs(drawable._skinScale[1]) * target.ext30_mirror1;
				setXYhook({x: target.x+1, y: target.y+1},util);
			});
			target.ext30_isHook = true;
		}
		util.target['ext30_mirror' + args.mirrorMethod] *= -1;
		//更新
		target.emitFast('EVENT_TARGET_VISUAL_CHANGE', this);
		this.setXY({x: target.x-1, y: target.y-1},util);
	}
	//清除镜像
	clearMirror(args, util) {
		let target = util.target;
		this.setXY({x: target.x+1, y: target.y+1},util);
		let drawable = this.runtime.renderer._allDrawables[target.drawableID];
		drawable.ext30_mirror0 = 1;
		drawable.ext30_mirror1 = 1;
		//更新
		target.emitFast('EVENT_TARGET_VISUAL_CHANGE', this);
		this.setXY({x: target.x-1, y: target.y-1},util);
	}
	//TODO: 拉伸
}



window.tempExt = {
	Extension: ArkosExtensions,
	info: {
		name: 'hcn.extensionName',
		description: 'hcn.description',
		extensionId: 'hcnTest',
		// iconURL: icon,
		// insetIconURL: cover,
		featured: true,
		disabled: false,
		collaborator: 'only for hcn test',
	},
	l10n: {
		'zh-cn': {
			'hcn.extensionName': 'hcn 的测试',
			'hcn.description': 'hcn 的测试',
		},
		en: {
			'hcn.extensionName': 'hcn test',
			'hcn.description': 'hcn test',
		},
	},
}
