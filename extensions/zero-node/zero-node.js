// Zero Node v1.0.0 — CCW 可视化节点编程扩展
// 
// 简单说就是：将逻辑可视化，并且适配3种编程语言，且可以互相转换
// 
// 作者：枫.xyz
// 协议：LGPL-2.1

(function(Scratch) {
  'use strict';

  const { vm, runtime, ArgumentType, BlockType, TargetType, Cast, translate, extensions } = Scratch;

  // ============================================================================
  // ▸ 多语言支持 — 哪个地区就显示哪种文字，不用你操心
  // ============================================================================
  const L10N = {
    'zh-cn': {
      extName: 'Zero Node',
      extDesc: '可视化节点编程扩展 — 用节点和连线构建项目模块',
      btnOpen: '打开节点编辑器',
      btnOpenDesc: '点击打开 Zero Node 可视化编程面板',
      blockRun: '执行 Zero Node 图',
      tagMain: 'Zero Node',
      catMotion: '运动',
      catLooks: '外观',
      catSound: '声音',
      catEvents: '事件',
      catControl: '控制',
      catSensing: '侦测',
      catOperators: '运算',
      catVariables: '变量',
      catGandi: 'Gandi 扩展',
      compileError: '编译错误',
      compileOk: '编译成功',
      noStartNode: '缺少起始节点（如"当绿旗被点击"）',
      orphanNode: '节点未连接到执行流',
      cycleDetected: '检测到循环依赖',
      exportGraph: '导出图',
      importGraph: '导入图',
      clearGraph: '清空',
      runGraph: '运行',
      compileGraph: '编译',
      nodeParams: '参数配置',
      inputPort: '输入',
      outputPort: '输出',
      graphSaved: '图已保存到剪贴板',
      graphLoaded: '图已加载',
      graphCleared: '图已清空',
    },
    en: {
      extName: 'Zero Node',
      extDesc: 'Visual node programming — build project modules with nodes and wires',
      btnOpen: 'Open Node Editor',
      btnOpenDesc: 'Open Zero Node visual programming panel',
      blockRun: 'Run Zero Node Graph',
      tagMain: 'Zero Node',
      catMotion: 'Motion',
      catLooks: 'Looks',
      catSound: 'Sound',
      catEvents: 'Events',
      catControl: 'Control',
      catSensing: 'Sensing',
      catOperators: 'Operators',
      catVariables: 'Variables',
      catGandi: 'Gandi Ext.',
      compileError: 'Compile Error',
      compileOk: 'Compile OK',
      noStartNode: 'Missing start node (e.g. When Flag Clicked)',
      orphanNode: 'Node not connected to execution flow',
      cycleDetected: 'Circular dependency detected',
      exportGraph: 'Export',
      importGraph: 'Import',
      clearGraph: 'Clear',
      runGraph: 'Run',
      compileGraph: 'Compile',
      nodeParams: 'Parameters',
      inputPort: 'Input',
      outputPort: 'Output',
      graphSaved: 'Graph copied to clipboard',
      graphLoaded: 'Graph loaded',
      graphCleared: 'Graph cleared',
    },
  };

  const lang = (navigator.language || 'en').startsWith('zh') ? 'zh-cn' : 'en';
  const t = (key) => L10N[lang] && L10N[lang][key] ? L10N[lang][key] : (L10N['en'][key] || key);

  const CAT_COLORS = {
    motion:    { primary: '#4C97FF', secondary: '#3373CC' },
    looks:     { primary: '#9966FF', secondary: '#774DCB' },
    sound:     { primary: '#CF63CF', secondary: '#BD42BD' },
    events:    { primary: '#FFBF00', secondary: '#CC9900' },
    control:   { primary: '#FFAB19', secondary: '#CF8B17' },
    sensing:   { primary: '#5CB1D6', secondary: '#47A8D0' },
    operators: { primary: '#59C059', secondary: '#389438' },
    variables: { primary: '#FF8C1A', secondary: '#DB6E00' },
    gandi:     { primary: '#FF6680', secondary: '#FF3355' },
  };

  // ============================================================================
  // ▸ 节点注册表 — 所有 API 节点都在这里登记，后续拖拽、执行全靠它
  // ============================================================================
  const NodeRegistry = {};

  function defineNode(id, def) {
    NodeRegistry[id] = Object.assign({
      id, category: 'motion',
      label: id,
      params: {},
      inputs: [],
      outputs: [],
      execute: null,
      compile: null,
    }, def);
  }

  // ── 运动类 — 移动、转向、坐标，角色的所有位移操作
  defineNode('motion_moveSteps', {
    category: 'motion', label: '移动步数',
    params: { steps: { type: 'number', default: 10, label: '步数' } },
    inputs: [{ id: 'steps', label: '步数', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setXY(util.target.x + Math.cos(util.target.direction * Math.PI / 180) * args.steps, util.target.y + Math.sin(util.target.direction * Math.PI / 180) * args.steps); },
    compile(node, ctx) { ctx.code += `util.target.setXY(util.target.x + Math.cos(util.target.direction*Math.PI/180)*${node.params.steps}, util.target.y + Math.sin(util.target.direction*Math.PI/180)*${node.params.steps});\n`; },
  });

  defineNode('motion_turnRight', {
    category: 'motion', label: '右转度数',
    params: { degrees: { type: 'number', default: 15, label: '度数' } },
    inputs: [{ id: 'degrees', label: '度数', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setDirection(util.target.direction + Number(args.degrees)); },
    compile(node, ctx) { ctx.code += `util.target.setDirection(util.target.direction + ${node.params.degrees});\n`; },
  });

  defineNode('motion_turnLeft', {
    category: 'motion', label: '左转度数',
    params: { degrees: { type: 'number', default: 15, label: '度数' } },
    inputs: [{ id: 'degrees', label: '度数', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setDirection(util.target.direction - Number(args.degrees)); },
    compile(node, ctx) { ctx.code += `util.target.setDirection(util.target.direction - ${node.params.degrees});\n`; },
  });

  defineNode('motion_goTo', {
    category: 'motion', label: '移到位置',
    params: { x: { type: 'number', default: 0, label: 'X' }, y: { type: 'number', default: 0, label: 'Y' } },
    inputs: [{ id: 'x', label: 'X', type: 'number' }, { id: 'y', label: 'Y', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setXY(Number(args.x || 0), Number(args.y || 0)); },
    compile(node, ctx) { ctx.code += `util.target.setXY(${node.params.x}, ${node.params.y});\n`; },
  });

  defineNode('motion_glideTo', {
    category: 'motion', label: '滑行到',
    params: { secs: { type: 'number', default: 1, label: '秒数' }, x: { type: 'number', default: 0, label: 'X' }, y: { type: 'number', default: 0, label: 'Y' } },
    inputs: [{ id: 'secs', label: '秒', type: 'number' }, { id: 'x', label: 'X', type: 'number' }, { id: 'y', label: 'Y', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.glide(Number(args.secs || 1), Number(args.x || 0), Number(args.y || 0)); },
    compile(node, ctx) { ctx.code += `util.target.glide(${node.params.secs}, ${node.params.x}, ${node.params.y});\n`; },
  });

  defineNode('motion_pointDirection', {
    category: 'motion', label: '面向方向',
    params: { direction: { type: 'number', default: 90, label: '方向' } },
    inputs: [{ id: 'direction', label: '方向', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setDirection(Number(args.direction || 90)); },
    compile(node, ctx) { ctx.code += `util.target.setDirection(${node.params.direction});\n`; },
  });

  defineNode('motion_pointTowards', {
    category: 'motion', label: '面向对象',
    params: { target: { type: 'string', default: '_mouse_', label: '目标' } },
    inputs: [{ id: 'target', label: '目标', type: 'string' }],
    outputs: [],
    execute(args, util) {
      // 根据下拉菜单选中的目标来转向，具体由编译阶段处理
    },
    compile(node, ctx) { ctx.code += `// 面向 ${node.params.target}\n`; },
  });

  defineNode('motion_setX', {
    category: 'motion', label: '设置 X',
    params: { x: { type: 'number', default: 0, label: 'X' } },
    inputs: [{ id: 'x', label: 'X', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setXY(Number(args.x || 0), util.target.y); },
    compile(node, ctx) { ctx.code += `util.target.setXY(${node.params.x}, util.target.y);\n`; },
  });

  defineNode('motion_setY', {
    category: 'motion', label: '设置 Y',
    params: { y: { type: 'number', default: 0, label: 'Y' } },
    inputs: [{ id: 'y', label: 'Y', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setXY(util.target.x, Number(args.y || 0)); },
    compile(node, ctx) { ctx.code += `util.target.setXY(util.target.x, ${node.params.y});\n`; },
  });

  defineNode('motion_changeX', {
    category: 'motion', label: '改变 X',
    params: { dx: { type: 'number', default: 10, label: 'ΔX' } },
    inputs: [{ id: 'dx', label: 'ΔX', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setXY(util.target.x + Number(args.dx || 0), util.target.y); },
    compile(node, ctx) { ctx.code += `util.target.setXY(util.target.x + ${node.params.dx}, util.target.y);\n`; },
  });

  defineNode('motion_changeY', {
    category: 'motion', label: '改变 Y',
    params: { dy: { type: 'number', default: 10, label: 'ΔY' } },
    inputs: [{ id: 'dy', label: 'ΔY', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setXY(util.target.x, util.target.y + Number(args.dy || 0)); },
    compile(node, ctx) { ctx.code += `util.target.setXY(util.target.x, util.target.y + ${node.params.dy});\n`; },
  });

  defineNode('motion_xPosition', {
    category: 'motion', label: 'X 坐标',
    params: {},
    inputs: [],
    outputs: [{ id: 'x', label: 'X', type: 'number' }],
    execute(args, util) { return util.target.x; },
    compile(node, ctx) { return 'util.target.x'; },
  });

  defineNode('motion_yPosition', {
    category: 'motion', label: 'Y 坐标',
    params: {},
    inputs: [],
    outputs: [{ id: 'y', label: 'Y', type: 'number' }],
    execute(args, util) { return util.target.y; },
    compile(node, ctx) { return 'util.target.y'; },
  });

  defineNode('motion_direction', {
    category: 'motion', label: '方向',
    params: {},
    inputs: [],
    outputs: [{ id: 'dir', label: '方向', type: 'number' }],
    execute(args, util) { return util.target.direction; },
    compile(node, ctx) { return 'util.target.direction'; },
  });

  // ── 外观类 — 说话、换造型、特效，控制角色长什么样
  defineNode('looks_say', {
    category: 'looks', label: '说话',
    params: { text: { type: 'string', default: '你好!', label: '文本' }, secs: { type: 'number', default: 2, label: '秒数' } },
    inputs: [{ id: 'text', label: '文本', type: 'string' }, { id: 'secs', label: '秒', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.say(Cast.toString(args.text || '你好!')); },
    compile(node, ctx) { ctx.code += `util.target.say('${node.params.text}');\n`; },
  });

  defineNode('looks_sayForSecs', {
    category: 'looks', label: '说话(秒)',
    params: { text: { type: 'string', default: '你好!', label: '文本' }, secs: { type: 'number', default: 2, label: '秒数' } },
    inputs: [{ id: 'text', label: '文本', type: 'string' }, { id: 'secs', label: '秒', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.say(Cast.toString(args.text || '你好!'), Number(args.secs || 2)); },
    compile(node, ctx) { ctx.code += `util.target.say('${node.params.text}', ${node.params.secs});\n`; },
  });

  defineNode('looks_think', {
    category: 'looks', label: '思考',
    params: { text: { type: 'string', default: '嗯...', label: '文本' } },
    inputs: [{ id: 'text', label: '文本', type: 'string' }],
    outputs: [],
    execute(args, util) { util.target.think(Cast.toString(args.text || '嗯...')); },
    compile(node, ctx) { ctx.code += `util.target.think('${node.params.text}');\n`; },
  });

  defineNode('looks_switchCostume', {
    category: 'looks', label: '切换造型',
    params: { costume: { type: 'string', default: '造型1', label: '造型名' } },
    inputs: [{ id: 'costume', label: '造型', type: 'string' }],
    outputs: [],
    execute(args, util) { util.target.setCostume(util.target.getCostumeIndexByName(Cast.toString(args.costume))); },
    compile(node, ctx) { ctx.code += `util.target.setCostume(util.target.getCostumeIndexByName('${node.params.costume}'));\n`; },
  });

  defineNode('looks_nextCostume', {
    category: 'looks', label: '下一个造型',
    params: {},
    inputs: [],
    outputs: [],
    execute(args, util) { const c = util.target.currentCostume + 1; util.target.setCostume(c >= util.target.getCostumes().length ? 0 : c); },
    compile(node, ctx) { ctx.code += 'util.target.setCostume((util.target.currentCostume+1) % util.target.getCostumes().length);\n'; },
  });

  defineNode('looks_switchBackdrop', {
    category: 'looks', label: '切换背景',
    params: { backdrop: { type: 'string', default: '背景1', label: '背景名' } },
    inputs: [{ id: 'backdrop', label: '背景', type: 'string' }],
    outputs: [],
    execute(args, util) { const stage = runtime.getTargetForStage(); stage.setCostume(stage.getCostumeIndexByName(Cast.toString(args.backdrop))); },
    compile(node, ctx) { ctx.code += `runtime.getTargetForStage().setCostume(runtime.getTargetForStage().getCostumeIndexByName('${node.params.backdrop}'));\n`; },
  });

  defineNode('looks_setEffect', {
    category: 'looks', label: '设置特效',
    params: { effect: { type: 'string', default: 'color', label: '特效' }, value: { type: 'number', default: 0, label: '值' } },
    inputs: [{ id: 'effect', label: '特效', type: 'string' }, { id: 'value', label: '值', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setEffect(Cast.toString(args.effect), Number(args.value || 0)); },
    compile(node, ctx) { ctx.code += `util.target.setEffect('${node.params.effect}', ${node.params.value});\n`; },
  });

  defineNode('looks_changeEffect', {
    category: 'looks', label: '改变特效',
    params: { effect: { type: 'string', default: 'color', label: '特效' }, value: { type: 'number', default: 25, label: '值' } },
    inputs: [{ id: 'effect', label: '特效', type: 'string' }, { id: 'value', label: '值', type: 'number' }],
    outputs: [],
    execute(args, util) { const cur = util.target.getEffect(Cast.toString(args.effect)); util.target.setEffect(Cast.toString(args.effect), cur + Number(args.value || 0)); },
    compile(node, ctx) { ctx.code += `util.target.setEffect('${node.params.effect}', util.target.getEffect('${node.params.effect}') + ${node.params.value});\n`; },
  });

  defineNode('looks_clearEffects', {
    category: 'looks', label: '清除所有特效',
    params: {},
    inputs: [],
    outputs: [],
    execute(args, util) { util.target.clearEffects(); },
    compile(node, ctx) { ctx.code += 'util.target.clearEffects();\n'; },
  });

  defineNode('looks_show', {
    category: 'looks', label: '显示',
    params: {},
    inputs: [],
    outputs: [],
    execute(args, util) { util.target.setVisible(true); },
    compile(node, ctx) { ctx.code += 'util.target.setVisible(true);\n'; },
  });

  defineNode('looks_hide', {
    category: 'looks', label: '隐藏',
    params: {},
    inputs: [],
    outputs: [],
    execute(args, util) { util.target.setVisible(false); },
    compile(node, ctx) { ctx.code += 'util.target.setVisible(false);\n'; },
  });

  defineNode('looks_setSize', {
    category: 'looks', label: '设置大小',
    params: { size: { type: 'number', default: 100, label: '大小%' } },
    inputs: [{ id: 'size', label: '%', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setSize(Number(args.size || 100)); },
    compile(node, ctx) { ctx.code += `util.target.setSize(${node.params.size});\n`; },
  });

  defineNode('looks_changeSize', {
    category: 'looks', label: '改变大小',
    params: { ds: { type: 'number', default: 10, label: 'Δ%' } },
    inputs: [{ id: 'ds', label: 'Δ%', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setSize(util.target.size + Number(args.ds || 0)); },
    compile(node, ctx) { ctx.code += `util.target.setSize(util.target.size + ${node.params.ds});\n`; },
  });

  defineNode('looks_goToLayer', {
    category: 'looks', label: '移到图层',
    params: { layer: { type: 'string', default: 'front', label: '图层' } },
    inputs: [{ id: 'layer', label: '图层', type: 'string' }],
    outputs: [],
    execute(args, util) { if (Cast.toString(args.layer) === 'front') util.target.goToFront(); else util.target.goToBack(); },
    compile(node, ctx) { ctx.code += `util.target.goTo${node.params.layer === 'front' ? 'Front' : 'Back'}();\n`; },
  });

  // ── 声音类 — 播放、音量、停止，管耳朵的部分
  defineNode('sound_play', {
    category: 'sound', label: '播放声音',
    params: { sound: { type: 'string', default: '', label: '声音名' } },
    inputs: [{ id: 'sound', label: '声音', type: 'string' }],
    outputs: [],
    execute(args, util) {
      // 这里需要从声音列表里找到对应的索引，暂时由编译器接管
    },
    compile(node, ctx) { ctx.code += `// 播放声音 '${node.params.sound}'\n`; },
  });

  defineNode('sound_playUntilDone', {
    category: 'sound', label: '播放声音直到结束',
    params: { sound: { type: 'string', default: '', label: '声音名' } },
    inputs: [{ id: 'sound', label: '声音', type: 'string' }],
    outputs: [],
    execute(args, util) {
      // 这里需要从声音列表里找到对应的索引，暂时由编译器接管
    },
    compile(node, ctx) { ctx.code += `// 播放声音直到结束 '${node.params.sound}'\n`; },
  });

  defineNode('sound_stopAll', {
    category: 'sound', label: '停止所有声音',
    params: {},
    inputs: [],
    outputs: [],
    execute(args, util) { runtime.stopAllSounds(); },
    compile(node, ctx) { ctx.code += 'runtime.stopAllSounds();\n'; },
  });

  defineNode('sound_setVolume', {
    category: 'sound', label: '设置音量',
    params: { volume: { type: 'number', default: 100, label: '音量%' } },
    inputs: [{ id: 'volume', label: '%', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setVolume(Number(args.volume || 100)); },
    compile(node, ctx) { ctx.code += `util.target.setVolume(${node.params.volume});\n`; },
  });

  defineNode('sound_changeVolume', {
    category: 'sound', label: '改变音量',
    params: { dv: { type: 'number', default: -10, label: 'Δ%' } },
    inputs: [{ id: 'dv', label: 'Δ%', type: 'number' }],
    outputs: [],
    execute(args, util) { util.target.setVolume(util.target.volume + Number(args.dv || 0)); },
    compile(node, ctx) { ctx.code += `util.target.setVolume(util.target.volume + ${node.params.dv});\n`; },
  });

  // ── 事件类 — 绿旗、按键、广播，一切从这里开始触发
  defineNode('events_whenFlagClicked', {
    category: 'events', label: '当绿旗被点击',
    params: {},
    inputs: [],
    outputs: [{ id: 'trigger', label: '执行', type: 'trigger' }],
    isTrigger: true,
    execute(args, util) {
      // 触发节点不需要自己执行，编译时会把它当作程序入口
    },
    compile(node, ctx) { ctx.code += '// === 当绿旗被点击 ===\n'; },
  });

  defineNode('events_whenKeyPressed', {
    category: 'events', label: '当按键按下',
    params: { key: { type: 'string', default: 'space', label: '按键' } },
    inputs: [],
    outputs: [{ id: 'trigger', label: '执行', type: 'trigger' }],
    isTrigger: true,
    execute(args, util) {
      // 事件触发节点，编译器识别到会自动生成监听代码
    },
    compile(node, ctx) { ctx.code += `// === WHEN KEY '${node.params.key}' PRESSED ===\n`; },
  });

  defineNode('events_whenClicked', {
    category: 'events', label: '当角色被点击',
    params: {},
    inputs: [],
    outputs: [{ id: 'trigger', label: '执行', type: 'trigger' }],
    isTrigger: true,
    execute(args, util) {
      // 事件触发节点，编译器识别到会自动生成监听代码
    },
    compile(node, ctx) { ctx.code += '// === 当角色被点击 ===\n'; },
  });

  defineNode('events_broadcast', {
    category: 'events', label: '广播消息',
    params: { message: { type: 'string', default: '消息1', label: '消息' } },
    inputs: [{ id: 'message', label: '消息', type: 'string' }],
    outputs: [],
    execute(args, util) { runtime.startHats('event_whenbroadcastreceived', { BROADCAST_OPTION: Cast.toString(args.message) }); },
    compile(node, ctx) { ctx.code += `runtime.startHats('event_whenbroadcastreceived', { BROADCAST_OPTION: '${node.params.message}' });\n`; },
  });

  defineNode('events_broadcastAndWait', {
    category: 'events', label: '广播并等待',
    params: { message: { type: 'string', default: '消息1', label: '消息' } },
    inputs: [{ id: 'message', label: '消息', type: 'string' }],
    outputs: [],
    execute(args, util) {
      // TODO: 广播出去后要等接收方都处理完再继续
    },
    compile(node, ctx) { ctx.code += `// 广播并等待 '${node.params.message}'\n`; },
  });

  defineNode('events_whenBroadcast', {
    category: 'events', label: '当收到广播',
    params: { message: { type: 'string', default: '消息1', label: '消息' } },
    inputs: [],
    outputs: [{ id: 'trigger', label: '执行', type: 'trigger' }],
    isTrigger: true,
    execute(args, util) {
      // 事件触发节点，编译器识别到会自动生成监听代码
    },
    compile(node, ctx) { ctx.code += `// === 当收到广播 '${node.params.message}' ===\n`; },
  });

  // ── 控制类 — 循环、判断、等待，控制代码怎么走
  defineNode('control_wait', {
    category: 'control', label: '等待秒数',
    params: { secs: { type: 'number', default: 1, label: '秒' } },
    inputs: [{ id: 'secs', label: '秒', type: 'number' }],
    outputs: [{ id: 'next', label: '下一帧', type: 'trigger' }],
    execute(args, util) { return new Promise(r => setTimeout(r, Number(args.secs || 0) * 1000)); },
    compile(node, ctx) { ctx.code += `/* 等待 ${node.params.secs}秒 */\n`; },
  });

  defineNode('control_repeat', {
    category: 'control', label: '重复执行',
    params: { times: { type: 'number', default: 10, label: '次数' } },
    inputs: [{ id: 'times', label: '次数', type: 'number' }, { id: 'body', label: '循环体', type: 'trigger' }],
    outputs: [{ id: 'next', label: '完成', type: 'trigger' }],
    isContainer: true,
    execute(args, util) {
      // 容器节点本身不执行，编译器会按连线展开内部代码
    },
    compile(node, ctx) { ctx.code += `for (let _i = 0; _i < ${node.params.times}; _i++) {\n`; },
    compileEnd(node, ctx) { ctx.code += `}\n`; },
  });

  defineNode('control_forever', {
    category: 'control', label: '无限循环',
    params: {},
    inputs: [{ id: 'body', label: '循环体', type: 'trigger' }],
    outputs: [],
    isContainer: true,
    execute(args, util) {
      // 容器节点本身不执行，编译器会按连线展开内部代码
    },
    compile(node, ctx) { ctx.code += `while (true) {\n`; },
    compileEnd(node, ctx) { ctx.code += `}\n`; },
  });

  defineNode('control_if', {
    category: 'control', label: '如果...那么',
    params: {},
    inputs: [{ id: '条件判断', label: '条件', type: 'boolean' }, { id: 'body', label: '执行', type: 'trigger' }],
    outputs: [{ id: 'next', label: '下一步', type: 'trigger' }],
    isContainer: true,
    execute(args, util) {
      // 容器节点本身不执行，编译器会按连线展开内部代码
    },
    compile(node, ctx) { ctx.code += `if (/*条件判断*/) {\n`; },
    compileEnd(node, ctx) { ctx.code += `}\n`; },
  });

  defineNode('control_ifElse', {
    category: 'control', label: '如果...那么...否则',
    params: {},
    inputs: [{ id: '条件判断', label: '条件', type: 'boolean' }, { id: 'trueBody', label: '成立', type: 'trigger' }, { id: 'falseBody', label: '否则', type: 'trigger' }],
    outputs: [{ id: 'next', label: '下一步', type: 'trigger' }],
    isContainer: true,
    execute(args, util) {
      // 容器节点本身不执行，编译器会按连线展开内部代码
    },
    compile(node, ctx) { ctx.code += `if (/*条件判断*/) {\n`; },
    compileEnd(node, ctx) { ctx.code += `} else {\n` + `}\n`; },
  });

  defineNode('control_waitUntil', {
    category: 'control', label: '等待直到',
    params: {},
    inputs: [{ id: '条件判断', label: '条件', type: 'boolean' }],
    outputs: [{ id: 'next', label: '下一步', type: 'trigger' }],
    execute(args, util) {
      // 容器节点本身不执行，编译器会按连线展开内部代码
    },
    compile(node, ctx) { ctx.code += `/* 等待直到条件满足 */\n`; },
  });

  defineNode('control_stop', {
    category: 'control', label: '停止',
    params: { what: { type: 'string', default: 'all', label: '停止' } },
    inputs: [],
    outputs: [],
    execute(args, util) { runtime.stopAll(); },
    compile(node, ctx) { ctx.code += `runtime.stopAll();\n`; },
  });

  defineNode('control_clone', {
    category: 'control', label: '克隆自己',
    params: {},
    inputs: [],
    outputs: [],
    execute(args, util) { util.target.createClone(); },
    compile(node, ctx) { ctx.code += 'util.target.createClone();\n'; },
  });

  defineNode('control_deleteClone', {
    category: 'control', label: '删除此克隆体',
    params: {},
    inputs: [],
    outputs: [],
    execute(args, util) { if (util.target.isClone) util.target.deleteClone(); },
    compile(node, ctx) { ctx.code += 'if (util.target.isClone) util.target.deleteClone();\n'; },
  });

  // ── 侦测类 — 碰没碰到、鼠标在哪、按键了没，感知外部环境
  defineNode('sensing_touching', {
    category: 'sensing', label: '碰到?',
    params: { target: { type: 'string', default: '_mouse_', label: '目标' } },
    inputs: [{ id: 'target', label: '目标', type: 'string' }],
    outputs: [{ id: 'result', label: '结果', type: 'boolean' }],
    execute(args, util) { return util.target.isTouchingObject(Cast.toString(args.target)); },
    compile(node, ctx) { return `util.target.isTouchingObject('${node.params.target}')`; },
  });

  defineNode('sensing_distanceTo', {
    category: 'sensing', label: '到...的距离',
    params: { target: { type: 'string', default: '_mouse_', label: '目标' } },
    inputs: [{ id: 'target', label: '目标', type: 'string' }],
    outputs: [{ id: 'result', label: '距离', type: 'number' }],
    execute(args, util) { return util.target.distanceTo(Cast.toString(args.target)); },
    compile(node, ctx) { return `util.target.distanceTo('${node.params.target}')`; },
  });

  defineNode('sensing_mouseDown', {
    category: 'sensing', label: '鼠标按下?',
    params: {},
    inputs: [],
    outputs: [{ id: 'result', label: '结果', type: 'boolean' }],
    execute(args, util) { return runtime.ioDevices.mouse.getIsDown(); },
    compile(node, ctx) { return 'runtime.ioDevices.mouse.getIsDown()'; },
  });

  defineNode('sensing_mouseX', {
    category: 'sensing', label: '鼠标 X',
    params: {},
    inputs: [],
    outputs: [{ id: 'result', label: 'X', type: 'number' }],
    execute(args, util) { return runtime.ioDevices.mouse.getClientX(); },
    compile(node, ctx) { return 'runtime.ioDevices.mouse.getClientX()'; },
  });

  defineNode('sensing_mouseY', {
    category: 'sensing', label: '鼠标 Y',
    params: {},
    inputs: [],
    outputs: [{ id: 'result', label: 'Y', type: 'number' }],
    execute(args, util) { return runtime.ioDevices.mouse.getClientY(); },
    compile(node, ctx) { return 'runtime.ioDevices.mouse.getClientY()'; },
  });

  defineNode('sensing_keyPressed', {
    category: 'sensing', label: '按键按下?',
    params: { key: { type: 'string', default: 'space', label: '按键' } },
    inputs: [{ id: 'key', label: '按键', type: 'string' }],
    outputs: [{ id: 'result', label: '结果', type: 'boolean' }],
    execute(args, util) { return runtime.ioDevices.keyboard.getKeyIsDown(Cast.toString(args.key)); },
    compile(node, ctx) { return `runtime.ioDevices.keyboard.getKeyIsDown('${node.params.key}')`; },
  });

  defineNode('sensing_timer', {
    category: 'sensing', label: '计时器',
    params: {},
    inputs: [],
    outputs: [{ id: 'result', label: '秒', type: 'number' }],
    execute(args, util) { return runtime.ioDevices.clock.projectTimer(); },
    compile(node, ctx) { return 'runtime.ioDevices.clock.projectTimer()'; },
  });

  defineNode('sensing_resetTimer', {
    category: 'sensing', label: '重置计时器',
    params: {},
    inputs: [],
    outputs: [],
    execute(args, util) { runtime.ioDevices.clock.resetProjectTimer(); },
    compile(node, ctx) { ctx.code += 'runtime.ioDevices.clock.resetProjectTimer();\n'; },
  });

  defineNode('sensing_current', {
    category: 'sensing', label: '属性',
    params: { attr: { type: 'string', default: 'x position', label: '属性' } },
    inputs: [{ id: 'attr', label: '属性', type: 'string' }],
    outputs: [{ id: 'result', label: '值', type: 'number' }],
    execute(args, util) { return util.target.getCustomProperty(Cast.toString(args.attr)); },
    compile(node, ctx) { return `util.target.getCustomProperty('${node.params.attr}')`; },
  });

  // ── 运算类 — 加减乘除、比较、字符串操作，所有计算都在这里
  defineNode('operators_add', {
    category: 'operators', label: '加法',
    params: { a: { type: 'number', default: 0, label: 'A' }, b: { type: 'number', default: 0, label: 'B' } },
    inputs: [{ id: 'a', label: 'A', type: 'number' }, { id: 'b', label: 'B', type: 'number' }],
    outputs: [{ id: 'result', label: '结果', type: 'number' }],
    execute(args) { return Number(args.a || 0) + Number(args.b || 0); },
    compile(node, ctx) { return `(${node.params.a} + ${node.params.b})`; },
  });

  defineNode('operators_subtract', {
    category: 'operators', label: '减法',
    params: { a: { type: 'number', default: 0, label: 'A' }, b: { type: 'number', default: 0, label: 'B' } },
    inputs: [{ id: 'a', label: 'A', type: 'number' }, { id: 'b', label: 'B', type: 'number' }],
    outputs: [{ id: 'result', label: '结果', type: 'number' }],
    execute(args) { return Number(args.a || 0) - Number(args.b || 0); },
    compile(node, ctx) { return `(${node.params.a} - ${node.params.b})`; },
  });

  defineNode('operators_multiply', {
    category: 'operators', label: '乘法',
    params: { a: { type: 'number', default: 1, label: 'A' }, b: { type: 'number', default: 1, label: 'B' } },
    inputs: [{ id: 'a', label: 'A', type: 'number' }, { id: 'b', label: 'B', type: 'number' }],
    outputs: [{ id: 'result', label: '结果', type: 'number' }],
    execute(args) { return Number(args.a || 0) * Number(args.b || 0); },
    compile(node, ctx) { return `(${node.params.a} * ${node.params.b})`; },
  });

  defineNode('operators_divide', {
    category: 'operators', label: '除法',
    params: { a: { type: 'number', default: 1, label: 'A' }, b: { type: 'number', default: 1, label: 'B' } },
    inputs: [{ id: 'a', label: 'A', type: 'number' }, { id: 'b', label: 'B', type: 'number' }],
    outputs: [{ id: 'result', label: '结果', type: 'number' }],
    execute(args) { const d = Number(args.b || 1); return d === 0 ? Infinity : Number(args.a || 0) / d; },
    compile(node, ctx) { return `(${node.params.a} / ${node.params.b})`; },
  });

  defineNode('operators_random', {
    category: 'operators', label: '随机数',
    params: { min: { type: 'number', default: 1, label: '最小' }, max: { type: 'number', default: 10, label: '最大' } },
    inputs: [{ id: 'min', label: '最小', type: 'number' }, { id: 'max', label: '最大', type: 'number' }],
    outputs: [{ id: 'result', label: '结果', type: 'number' }],
    execute(args) { return Math.floor(Math.random() * (Number(args.max || 10) - Number(args.min || 1) + 1)) + Number(args.min || 1); },
    compile(node, ctx) { return `(Math.floor(Math.random()*(${node.params.max}-${node.params.min}+1))+${node.params.min})`; },
  });

  defineNode('operators_gt', {
    category: 'operators', label: '大于',
    params: { a: { type: 'number', default: 0, label: 'A' }, b: { type: 'number', default: 0, label: 'B' } },
    inputs: [{ id: 'a', label: 'A', type: 'number' }, { id: 'b', label: 'B', type: 'number' }],
    outputs: [{ id: 'result', label: '结果', type: 'boolean' }],
    execute(args) { return Number(args.a || 0) > Number(args.b || 0); },
    compile(node, ctx) { return `(${node.params.a} > ${node.params.b})`; },
  });

  defineNode('operators_lt', {
    category: 'operators', label: '小于',
    params: { a: { type: 'number', default: 0, label: 'A' }, b: { type: 'number', default: 0, label: 'B' } },
    inputs: [{ id: 'a', label: 'A', type: 'number' }, { id: 'b', label: 'B', type: 'number' }],
    outputs: [{ id: 'result', label: '结果', type: 'boolean' }],
    execute(args) { return Number(args.a || 0) < Number(args.b || 0); },
    compile(node, ctx) { return `(${node.params.a} < ${node.params.b})`; },
  });

  defineNode('operators_equals', {
    category: 'operators', label: '等于',
    params: { a: { type: 'string', default: '', label: 'A' }, b: { type: 'string', default: '', label: 'B' } },
    inputs: [{ id: 'a', label: 'A', type: 'string' }, { id: 'b', label: 'B', type: 'string' }],
    outputs: [{ id: 'result', label: '结果', type: 'boolean' }],
    execute(args) { return Cast.toString(args.a) === Cast.toString(args.b); },
    compile(node, ctx) { return `(Cast.toString(${node.params.a}) === Cast.toString(${node.params.b}))`; },
  });

  defineNode('operators_and', {
    category: 'operators', label: '与',
    params: {},
    inputs: [{ id: 'a', label: 'A', type: 'boolean' }, { id: 'b', label: 'B', type: 'boolean' }],
    outputs: [{ id: 'result', label: '结果', type: 'boolean' }],
    execute(args) { return Boolean(args.a) && Boolean(args.b); },
    compile(node, ctx) { return 'true'; },
  });

  defineNode('operators_or', {
    category: 'operators', label: '或',
    params: {},
    inputs: [{ id: 'a', label: 'A', type: 'boolean' }, { id: 'b', label: 'B', type: 'boolean' }],
    outputs: [{ id: 'result', label: '结果', type: 'boolean' }],
    execute(args) { return Boolean(args.a) || Boolean(args.b); },
    compile(node, ctx) { return 'true'; },
  });

  defineNode('operators_not', {
    category: 'operators', label: '不成立',
    params: {},
    inputs: [{ id: 'a', label: '输入', type: 'boolean' }],
    outputs: [{ id: 'result', label: '结果', type: 'boolean' }],
    execute(args) { return !Boolean(args.a); },
    compile(node, ctx) { return 'true'; },
  });

  defineNode('operators_join', {
    category: 'operators', label: '连接字符串',
    params: { a: { type: 'string', default: '你好', label: 'A' }, b: { type: 'string', default: '世界', label: 'B' } },
    inputs: [{ id: 'a', label: 'A', type: 'string' }, { id: 'b', label: 'B', type: 'string' }],
    outputs: [{ id: 'result', label: '结果', type: 'string' }],
    execute(args) { return Cast.toString(args.a || '') + Cast.toString(args.b || ''); },
    compile(node, ctx) { return `(Cast.toString(${node.params.a}) + Cast.toString(${node.params.b}))`; },
  });

  defineNode('operators_letterOf', {
    category: 'operators', label: '第N个字符',
    params: { str: { type: 'string', default: 'apple', label: '字符串' }, n: { type: 'number', default: 1, label: '第N个' } },
    inputs: [{ id: 'str', label: '字符串', type: 'string' }, { id: 'n', label: 'N', type: 'number' }],
    outputs: [{ id: 'result', label: '结果', type: 'string' }],
    execute(args) { const s = Cast.toString(args.str || ''); const n = Number(args.n || 1) - 1; return n >= 0 && n < s.length ? s[n] : ''; },
    compile(node, ctx) { return `(Cast.toString(${node.params.str})[${node.params.n}-1] || '')`; },
  });

  defineNode('operators_length', {
    category: 'operators', label: '字符串长度',
    params: { str: { type: 'string', default: 'apple', label: '字符串' } },
    inputs: [{ id: 'str', label: '字符串', type: 'string' }],
    outputs: [{ id: 'result', label: '长度', type: 'number' }],
    execute(args) { return Cast.toString(args.str || '').length; },
    compile(node, ctx) { return `Cast.toString(${node.params.str}).length`; },
  });

  defineNode('operators_round', {
    category: 'operators', label: '四舍五入',
    params: { value: { type: 'number', default: 0, label: '值' } },
    inputs: [{ id: 'value', label: '值', type: 'number' }],
    outputs: [{ id: 'result', label: '结果', type: 'number' }],
    execute(args) { return Math.round(Number(args.value || 0)); },
    compile(node, ctx) { return `Math.round(${node.params.value})`; },
  });

  defineNode('operators_mod', {
    category: 'operators', label: '取余数',
    params: { a: { type: 'number', default: 0, label: '被除数' }, b: { type: 'number', default: 1, label: '除数' } },
    inputs: [{ id: 'a', label: 'A', type: 'number' }, { id: 'b', label: 'B', type: 'number' }],
    outputs: [{ id: 'result', label: '结果', type: 'number' }],
    execute(args) { return Number(args.a || 0) % Number(args.b || 1); },
    compile(node, ctx) { return `(${node.params.a} % ${node.params.b})`; },
  });

  // ── 变量类 — 存取变量，数据的中转站
  defineNode('variables_set', {
    category: 'variables', label: '设置变量',
    params: { name: { type: 'string', default: '我的变量', label: '变量名' }, value: { type: 'string', default: '0', label: '值' } },
    inputs: [{ id: 'name', label: '名称', type: 'string' }, { id: 'value', label: '值', type: 'string' }],
    outputs: [],
    execute(args, util) { const v = util.target.lookupVariableByNameAndType(Cast.toString(args.name), ''); if (v) v.value = args.value; },
    compile(node, ctx) { ctx.code += `/* 设置变量 '${node.params.name}' = ${node.params.value} */\n`; },
  });

  defineNode('variables_change', {
    category: 'variables', label: '改变变量',
    params: { name: { type: 'string', default: '我的变量', label: '变量名' }, dv: { type: 'number', default: 1, label: 'Δ值' } },
    inputs: [{ id: 'name', label: '名称', type: 'string' }, { id: 'dv', label: 'Δ值', type: 'number' }],
    outputs: [],
    execute(args, util) { const v = util.target.lookupVariableByNameAndType(Cast.toString(args.name), ''); if (v) v.value = Number(v.value) + Number(args.dv || 0); },
    compile(node, ctx) { ctx.code += `/* 改变变量 '${node.params.name}' by ${node.params.dv} */\n`; },
  });

  defineNode('variables_get', {
    category: 'variables', label: '获取变量',
    params: { name: { type: 'string', default: '我的变量', label: '变量名' } },
    inputs: [{ id: 'name', label: '名称', type: 'string' }],
    outputs: [{ id: 'result', label: '值', type: 'string' }],
    execute(args, util) { const v = util.target.lookupVariableByNameAndType(Cast.toString(args.name), ''); return v ? v.value : ''; },
    compile(node, ctx) { return `/* 获取变量 '${node.params.name}' */`; },
  });

  // ── Gandi 扩展 — CCW 独有的高级功能（克隆、云端、终端打印）
  defineNode('gandi_createClone', {
    category: 'gandi', label: '创建克隆(无限制)',
    params: { count: { type: 'number', default: 1, label: '数量' } },
    inputs: [{ id: 'count', label: '数量', type: 'number' }],
    outputs: [],
    execute(args, util) { for (let i = 0; i < Number(args.count || 1); i++) util.target.createClone(); },
    compile(node, ctx) { ctx.code += `for (let _i=0; _i<${node.params.count}; _i++) util.target.createClone();\n`; },
  });

  defineNode('gandi_cloudSet', {
    category: 'gandi', label: '云端存储(存)',
    params: { key: { type: 'string', default: 'key', label: '键' }, value: { type: 'string', default: '', label: '值' } },
    inputs: [{ id: 'key', label: '键', type: 'string' }, { id: 'value', label: '值', type: 'string' }],
    outputs: [],
    execute(args, util) {
      // 云端变量需要网络，这里先占位，编译时会发出 API 请求
    },
    compile(node, ctx) { ctx.code += `/* 云端存储 '${node.params.key}' = '${node.params.value}' */\n`; },
  });

  defineNode('gandi_print', {
    category: 'gandi', label: '终端打印',
    params: { text: { type: 'string', default: 'Hello Zero Node', label: '文本' } },
    inputs: [{ id: 'text', label: '文本', type: 'string' }],
    outputs: [],
    execute(args) { console.log('[ZeroNode]', Cast.toString(args.text)); },
    compile(node, ctx) { ctx.code += `console.log('[ZeroNode]', '${node.params.text}');\n`; },
  });

  // ============================================================================
  // ▸ 图数据模型 — 管节点、管连线、管排序，整个画布的大脑
  // ============================================================================
  class ZeroGraph {
    constructor() {
      this.nodes = {};       // 以 ID 为 key 存所有节点，O(1) 查找
      this.connections = []; // 连线数组，每条线记录从哪个节点的哪个口到哪个口
      this.nextId = 1;      // 自增 ID 计数器，保证每个节点/连线都有唯一编号
    }

    genId() { return 'n' + (this.nextId++); }

    addNode(typeId, x, y) {
      const def = NodeRegistry[typeId];
      if (!def) return null;
      const id = this.genId();
      const node = {
        id, typeId, x, y,
        params: {},
        width: 180,
        height: Math.max(60, 30 + Math.max(def.inputs.length, def.outputs.length) * 22),
      };
      for (const [k, v] of Object.entries(def.params)) {
        node.params[k] = v.default;
      }
      this.nodes[id] = node;
      return node;
    }

    removeNode(id) {
      this.connections = this.connections.filter(c => c.fromNode !== id && c.toNode !== id);
      delete this.nodes[id];
    }

    addConnection(fromNode, fromPort, toNode, toPort) {
      if (!this.nodes[fromNode] || !this.nodes[toNode]) return null;
      const id = 'c' + (this.nextId++);
      const conn = { id, fromNode, fromPort, toNode, toPort };
      this.connections.push(conn);
      return conn;
    }

    removeConnection(id) {
      this.connections = this.connections.filter(c => c.id !== id);
    }

    getNodeConnections(nodeId) {
      return this.connections.filter(c => c.fromNode === nodeId || c.toNode === nodeId);
    }

    getOutputConnections(nodeId, portId) {
      return this.connections.filter(c => c.fromNode === nodeId && c.fromPort === portId);
    }

    getInputConnection(nodeId, portId) {
      return this.connections.find(c => c.toNode === nodeId && c.toPort === portId);
    }

    serialize() {
      return JSON.stringify({
        nodes: Object.values(this.nodes).map(n => ({
          id: n.id, typeId: n.typeId, x: n.x, y: n.y, params: n.params,
        })),
        connections: this.connections.map(c => ({
          id: c.id, fromNode: c.fromNode, fromPort: c.fromPort,
          toNode: c.toNode, toPort: c.toPort,
        })),
        nextId: this.nextId,
      });
    }

    deserialize(json) {
      try {
        const data = JSON.parse(json);
        this.nodes = {};
        this.connections = [];
        this.nextId = data.nextId || 1;
        for (const n of (data.nodes || [])) {
          this.nodes[n.id] = n;
        }
        for (const c of (data.connections || [])) {
          this.connections.push(c);
        }
        return true;
      } catch (e) {
        return false;
      }
    }

    clear() {
      this.nodes = {};
      this.connections = [];
      this.nextId = 1;      // 自增 ID 计数器，保证每个节点/连线都有唯一编号
    }

    /** 从触发节点开始的拓扑排序 */
    topoSort() {
      const visited = new Set();
      const result = [];
      const triggers = Object.values(this.nodes).filter(n => {
        const def = NodeRegistry[n.typeId];
        return def && def.isTrigger;
      });

      const visit = (nodeId, path) => {
        if (path.has(nodeId)) return false; // 环路了！比如 A→B→C→A，这在节点图里是不允许的
        if (visited.has(nodeId)) return true;
        visited.add(nodeId);
        path.add(nodeId);
        const outs = this.connections
          .filter(c => c.fromNode === nodeId)
          .map(c => c.toNode);
        for (const outId of outs) {
          if (!visit(outId, new Set(path))) return false;
        }
        path.delete(nodeId);
        result.push(nodeId);
        return true;
      };

      for (const t of triggers) {
        if (!visit(t.id, new Set())) return null; // 有环，拓扑排序失败，需要用户检查连线
      }
      return result.reverse();
    }
  }

  // ============================================================================
  // ▸ 编辑器界面 — 你看到的面板、画布、连线，都在这一个类里搞定
  // ============================================================================
  class ZeroNodeEditor {
    constructor(graph) {
      this.graph = graph;
      this.container = null;
      this.svg = null;
      this.paletteEl = null;
      this.propsEl = null;

      // 画布视图 — 平移多少、缩放多少，全在这里记录
      this.panX = 0;
      this.panY = 0;
      this.zoom = 1;
      this.isPanning = false;
      this.panStart = { x: 0, y: 0 };

      // 交互追踪 — 正在拖哪个节点、正在连哪根线
      this.dragging = null;
      this.connecting = null;
      this.selectedNode = null;
      this.selectedConn = null;

      // 布局常量 — 端口大小、节点宽度，全局统一尺寸
      this.PORT_RADIUS = 6;
      this.NODE_WIDTH = 180;
      this.HEADER_HEIGHT = 28;
      this.PORT_SPACING = 22;
    }

    mount(container) {
      this.container = container;
      this.container.innerHTML = '';
      this.container.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        z-index: 99999; display: flex; background: #1a1a2e;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      `;

      // 左侧栏 — Node palette
      this._createPalette();
      // 中间 — Canvas
      this._createCanvas();
      // 右侧栏 — Properties
      this._createProps();
      // 关闭按钮
      this._createCloseBtn();

      this._render();
      this._bindEvents();
    }

    unmount() {
      if (this.container) {
        this.container.remove();
        this.container = null;
      }
    }

    // ═══ 左侧面板：节点库与工具栏
    _createPalette() {
      const palette = document.createElement('div');
      palette.style.cssText = `
        width: 220px; height: 100%; background: #16213e; border-right: 1px solid #0f3460;
        overflow-y: auto; flex-shrink: 0; padding: 0;
      `;

      const title = document.createElement('div');
      title.style.cssText = 'padding: 16px; color: #e94560; font-size: 20px; font-weight: bold; border-bottom: 1px solid #0f3460;';
      title.textContent = '⚡ Zero Node';
      palette.appendChild(title);

      const search = document.createElement('input');
      search.placeholder = '搜索节点...';
      search.style.cssText = `
        margin: 8px; padding: 8px 12px; width: calc(100% - 16px); box-sizing: border-box;
        background: #0f3460; border: 1px solid #1a1a4e; border-radius: 6px;
        color: #e0e0e0; font-size: 13px; outline: none;
      `;
      palette.appendChild(search);

      const nodeList = document.createElement('div');
      nodeList.style.cssText = 'padding: 8px;';
      palette.appendChild(nodeList);

      // 按九大分类整理节点列表，每个分类下面放对应节点
      const categories = [
        { id: 'events', label: t('catEvents'), icon: '⚡' },
        { id: 'motion', label: t('catMotion'), icon: '🏃' },
        { id: 'looks', label: t('catLooks'), icon: '👁️' },
        { id: 'sound', label: t('catSound'), icon: '🔊' },
        { id: 'control', label: t('catControl'), icon: '🔄' },
        { id: 'sensing', label: t('catSensing'), icon: '🎯' },
        { id: 'operators', label: t('catOperators'), icon: '🧮' },
        { id: 'variables', label: t('catVariables'), icon: '📦' },
        { id: 'gandi', label: t('catGandi'), icon: '🔥' },
      ];

      for (const cat of categories) {
        const nodes = Object.values(NodeRegistry).filter(n => n.category === cat.id);
        if (nodes.length === 0) continue;

        const catEl = document.createElement('div');
        catEl.style.cssText = 'margin-bottom: 8px;';

        const catTitle = document.createElement('div');
        catTitle.style.cssText = 'color: #888; font-size: 11px; padding: 4px 8px; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; user-select: none;';
        catTitle.textContent = cat.icon + ' ' + cat.label;
        catTitle.onclick = () => {
          const items = catEl.querySelector('.cat-items');
          items.style.display = items.style.display === 'none' ? 'block' : 'none';
        };
        catEl.appendChild(catTitle);

        const items = document.createElement('div');
        items.className = 'cat-items';
        items.style.cssText = 'display: block;';

        for (const node of nodes) {
          const item = document.createElement('div');
          const color = CAT_COLORS[node.category] || { primary: '#888' };
          item.style.cssText = `
            padding: 6px 10px; margin: 2px 0; border-radius: 4px; cursor: grab;
            font-size: 12px; color: #ddd; background: rgba(255,255,255,0.05);
            border-left: 3px solid ${color.primary}; transition: background 0.15s;
          `;
          item.textContent = node.label;
          item.title = node.id;
          item.addEventListener('mousedown', (e) => this._startAddNode(e, node.id));
          item.addEventListener('mouseenter', () => item.style.background = 'rgba(255,255,255,0.1)');
          item.addEventListener('mouseleave', () => item.style.background = 'rgba(255,255,255,0.05)');
          items.appendChild(item);
        }
        catEl.appendChild(items);
        nodeList.appendChild(catEl);
      }

      // 底部工具栏 — 导出、导入、清空、编译、运行
      const toolbar = document.createElement('div');
      toolbar.style.cssText = 'padding: 12px 8px; border-top: 1px solid #0f3460; display: flex; flex-direction: column; gap: 6px;';
      const makeBtn = (label, action, color) => {
        const btn = document.createElement('button');
        btn.textContent = label;
        btn.style.cssText = `
          padding: 8px; background: ${color || '#0f3460'}; border: none; border-radius: 6px;
          color: white; cursor: pointer; font-size: 13px; width: 100%;
        `;
        btn.onclick = action;
        return btn;
      };
      toolbar.appendChild(makeBtn(t('exportGraph'), () => this._exportGraph(), '#1a5276'));
      toolbar.appendChild(makeBtn(t('importGraph'), () => this._importGraph(), '#1a5276'));
      toolbar.appendChild(makeBtn(t('clearGraph'), () => this._clearGraph(), '#922b21'));
      toolbar.appendChild(makeBtn(t('compileGraph'), () => this._compile(), '#27ae60'));
      toolbar.appendChild(makeBtn(t('runGraph'), () => this._runGraph(), '#e94560'));

      palette.appendChild(toolbar);
      this.paletteEl = palette;
      this.container.appendChild(palette);
    }

    // ═══ 中间画布：SVG 网格 + 连线 + 节点 + 拖拽
    _createCanvas() {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'flex: 1; height: 100%; position: relative; overflow: hidden; background: #1a1a2e; user-select: none; -webkit-user-select: none;';

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.style.cssText = 'position: absolute; top: 0; left: 0;';

      // 背景网格 — 纯装饰，让画布看着像个正经编辑器
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
      pattern.setAttribute('id', 'grid');
      pattern.setAttribute('width', '40');
      pattern.setAttribute('height', '40');
      pattern.setAttribute('patternUnits', 'userSpaceOnUse');
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('width', '40');
      rect.setAttribute('height', '40');
      rect.setAttribute('fill', 'none');
      rect.setAttribute('stroke', 'rgba(255,255,255,0.03)');
      rect.setAttribute('stroke-width', '1');
      pattern.appendChild(rect);
      defs.appendChild(pattern);
      svg.appendChild(defs);

      const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      bg.setAttribute('width', '100%');
      bg.setAttribute('height', '100%');
      bg.setAttribute('fill', 'url(#grid)');
      svg.appendChild(bg);

      this.svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      this.svgGroup.setAttribute('id', 'transform-group');
      svg.appendChild(this.svgGroup);

      // 连线层 — 画在节点下方，这样线不会盖住节点
      this.connLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      this.connLayer.setAttribute('id', 'connection-layer');
      this.svgGroup.appendChild(this.connLayer);

      // 节点层 — 所有节点画在这层，在最上面
      this.nodeLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      this.nodeLayer.setAttribute('id', 'node-layer');
      this.svgGroup.appendChild(this.nodeLayer);

      // 拖线预览 — 从输出口拖出来还没松手时的那条虚线
      this.tempLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      this.tempLine.style.cssText = 'stroke: #e94560; stroke-width: 2; fill: none; stroke-dasharray: 6 3; pointer-events: none;';
      this.tempLine.setAttribute('d', '');
      this.svgGroup.appendChild(this.tempLine);

      wrapper.appendChild(svg);
      this.svg = svg;
      this.wrapper = wrapper;
      this.container.appendChild(wrapper);
    }

    // ═══ 右侧面板：选中节点后显示参数编辑区
    _createProps() {
      const props = document.createElement('div');
      props.style.cssText = `
        width: 240px; height: 100%; background: #16213e; border-left: 1px solid #0f3460;
        overflow-y: auto; flex-shrink: 0; padding: 16px; color: #e0e0e0;
      `;
      props.innerHTML = `<h3 style="color:#e94560;margin:0 0 12px;">${t('nodeParams')}</h3>
        <p style="color:#666;font-size:13px;">选择节点以编辑参数</p>`;
      this.propsEl = props;
      this.container.appendChild(props);
    }

    // ═══ 右上角关闭按钮
    _createCloseBtn() {
      const btn = document.createElement('button');
      btn.textContent = '✕';
      btn.style.cssText = `
        position: fixed; top: 16px; right: 16px; z-index: 100001;
        width: 36px; height: 36px; border-radius: 50%; background: #e94560;
        border: none; color: white; font-size: 18px; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
      `;
      btn.onclick = () => this.unmount();
      document.body.appendChild(btn);
      this.closeBtn = btn;
    }

    // ═══ 渲染：先改位移/缩放，再画线，最后画节点
    _render() {
      this._updateTransform();
      this._renderConnections();
      this._renderNodes();
      this._renderProps();
    }

    _updateTransform() {
      this.svgGroup.setAttribute('transform', `translate(${this.panX},${this.panY}) scale(${this.zoom})`);
    }

    _renderConnections() {
      this.connLayer.innerHTML = '';
      for (const conn of this.graph.connections) {
        const fromNode = this.graph.nodes[conn.fromNode];
        const toNode = this.graph.nodes[conn.toNode];
        if (!fromNode || !toNode) continue;
        const fromDef = NodeRegistry[fromNode.typeId];
        const toDef = NodeRegistry[toNode.typeId];
        if (!fromDef || !toDef) continue;

        const fromIdx = fromDef.outputs.findIndex(o => o.id === conn.fromPort);
        const toIdx = toDef.inputs.findIndex(i => i.id === conn.toPort);
        const fromY = fromNode.y + this.HEADER_HEIGHT + 10 + fromIdx * this.PORT_SPACING + this.PORT_RADIUS;
        const toY = toNode.y + this.HEADER_HEIGHT + 10 + toIdx * this.PORT_SPACING + this.PORT_RADIUS;
        const fromX = fromNode.x + this.NODE_WIDTH;
        const toX = toNode.x;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = this._bezierCurve(fromX, fromY, toX, toY);
        path.setAttribute('d', d);
        path.setAttribute('stroke', conn === this.selectedConn ? '#e94560' : '#4a6fa5');
        path.setAttribute('stroke-width', conn === this.selectedConn ? '3' : '2');
        path.setAttribute('fill', 'none');
        path.setAttribute('cursor', 'pointer');
        path.setAttribute('data-conn-id', conn.id);
        path.addEventListener('click', (e) => {
          e.stopPropagation();
          this.selectedConn = conn;
          this.selectedNode = null;
          this._render();
        });
        this.connLayer.appendChild(path);
      }
    }

    _renderNodes() {
      this.nodeLayer.innerHTML = '';
      for (const node of Object.values(this.graph.nodes)) {
        const def = NodeRegistry[node.typeId];
        if (!def) continue;
        const colors = CAT_COLORS[def.category] || { primary: '#888', secondary: '#666' };
        const isSelected = node === this.selectedNode;
        const nodeW = this.NODE_WIDTH;
        const nodeH = Math.max(60, this.HEADER_HEIGHT + 10 + Math.max(def.inputs.length, def.outputs.length) * this.PORT_SPACING);

        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('transform', `translate(${node.x},${node.y})`);
        g.setAttribute('data-node-id', node.id);

        // 节点底下的投影 — 让节点看起来浮在画布上
        const shadow = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        shadow.setAttribute('x', '2');
        shadow.setAttribute('y', '2');
        shadow.setAttribute('width', nodeW.toString());
        shadow.setAttribute('height', nodeH.toString());
        shadow.setAttribute('rx', '8');
        shadow.setAttribute('fill', 'rgba(0,0,0,0.3)');
        g.appendChild(shadow);

        // 节点背景 — 深色卡片，选中时有金色边框
        const body = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        body.setAttribute('x', '0');
        body.setAttribute('y', '0');
        body.setAttribute('width', nodeW.toString());
        body.setAttribute('height', nodeH.toString());
        body.setAttribute('rx', '8');
        body.setAttribute('fill', '#162447');
        body.setAttribute('stroke', isSelected ? '#e94560' : colors.primary);
        body.setAttribute('stroke-width', isSelected ? '2.5' : '1.5');
        g.appendChild(body);

        // 节点标题栏 — 带分类颜色，一眼知道这是什么类型的节点
        const header = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        header.setAttribute('x', '0');
        header.setAttribute('y', '0');
        header.setAttribute('width', nodeW.toString());
        header.setAttribute('height', this.HEADER_HEIGHT.toString());
        header.setAttribute('rx', '8');
        header.setAttribute('fill', colors.primary);
        const headerMask = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        headerMask.setAttribute('x', '0');
        headerMask.setAttribute('y', this.HEADER_HEIGHT.toString());
        headerMask.setAttribute('width', nodeW.toString());
        headerMask.setAttribute('height', (nodeH - this.HEADER_HEIGHT).toString());
        headerMask.setAttribute('fill', colors.primary);
        g.appendChild(header);
        g.appendChild(headerMask);

        // 节点名 — 白色粗体，居左上角
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        title.setAttribute('x', '10');
        title.setAttribute('y', '19');
        title.setAttribute('fill', 'white');
        title.setAttribute('font-size', '12');
        title.setAttribute('font-weight', 'bold');
        title.textContent = def.label;
        g.appendChild(title);

        // 左边的小圆点 — 数据/触发信号从这里进来
        let py = this.HEADER_HEIGHT + 10;
        for (const input of def.inputs) {
          const cx = 0;
          const cy = py + this.PORT_RADIUS;
          const port = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          port.setAttribute('cx', cx.toString());
          port.setAttribute('cy', cy.toString());
          port.setAttribute('r', this.PORT_RADIUS.toString());
          port.setAttribute('fill', this._portColor(input.type));
          port.setAttribute('stroke', '#162447');
          port.setAttribute('stroke-width', '2');
          port.setAttribute('cursor', 'crosshair');
          port.setAttribute('data-port', input.id);
          port.setAttribute('data-port-type', 'input');
          port.addEventListener('mousedown', (e) => this._startConnect(e, node, input.id, 'input'));
          g.appendChild(port);

          const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          label.setAttribute('x', '12');
          label.setAttribute('y', (cy + 4).toString());
          label.setAttribute('fill', '#aaa');
          label.setAttribute('font-size', '10');
          label.textContent = input.label;
          g.appendChild(label);

          py += this.PORT_SPACING;
        }

        // 右边的小圆点 — 计算结果从这里出去，可以连到别的节点
        py = this.HEADER_HEIGHT + 10;
        for (const output of def.outputs) {
          const cx = nodeW;
          const cy = py + this.PORT_RADIUS;
          const port = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          port.setAttribute('cx', cx.toString());
          port.setAttribute('cy', cy.toString());
          port.setAttribute('r', this.PORT_RADIUS.toString());
          port.setAttribute('fill', this._portColor(output.type));
          port.setAttribute('stroke', '#162447');
          port.setAttribute('stroke-width', '2');
          port.setAttribute('cursor', 'crosshair');
          port.setAttribute('data-port', output.id);
          port.setAttribute('data-port-type', 'output');
          port.addEventListener('mousedown', (e) => this._startConnect(e, node, output.id, 'output'));
          g.appendChild(port);

          const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          label.setAttribute('x', (nodeW - 12 - output.label.length * 7).toString());
          label.setAttribute('y', (cy + 4).toString());
          label.setAttribute('fill', '#aaa');
          label.setAttribute('font-size', '10');
          label.setAttribute('text-anchor', 'end');
          label.textContent = output.label;
          g.appendChild(label);

          py += this.PORT_SPACING;
        }

        // 整个节点都可以拖 — 鼠标按住就能移动
        g.style.cursor = 'move';
        g.addEventListener('mousedown', (e) => this._startDrag(e, node));
        g.addEventListener('click', (e) => {
          e.stopPropagation();
          this.selectedNode = node;
          this.selectedConn = null;
          this._render();
        });

        // 触发节点标识 — 绿色小圆点，方便快速找到程序起点
        if (def.isTrigger) {
          const indicator = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          indicator.setAttribute('cx', (nodeW - 12).toString());
          indicator.setAttribute('cy', (this.HEADER_HEIGHT / 2).toString());
          indicator.setAttribute('r', '4');
          indicator.setAttribute('fill', '#00ff88');
          g.appendChild(indicator);
        }

        this.nodeLayer.appendChild(g);
      }
    }

    _renderProps() {
      if (!this.selectedNode) {
        this.propsEl.innerHTML = `<h3 style="color:#e94560;margin:0 0 12px;">${t('nodeParams')}</h3>
          <p style="color:#666;font-size:13px;">选择节点以编辑参数</p>`;
        return;
      }

      const node = this.selectedNode;
      const def = NodeRegistry[node.typeId];
      if (!def) return;
      const colors = CAT_COLORS[def.category] || { primary: '#888' };

      let html = `<h3 style="color:${colors.primary};margin:0 0 4px;">${def.label}</h3>
        <p style="color:#666;font-size:11px;margin:0 0 16px;">${def.id}</p>
        <button onclick="window._zeroNodeRemove('${node.id}')" style="
          padding:6px 12px;background:#922b21;color:white;border:none;border-radius:4px;
          cursor:pointer;font-size:12px;margin-bottom:12px;width:100%;
        ">删除节点</button>`;

      if (Object.keys(def.params).length > 0) {
        html += '<div style="margin-top:12px;">';
        for (const [key, pdef] of Object.entries(def.params)) {
          const val = node.params[key] !== undefined ? node.params[key] : pdef.default;
          html += `<div style="margin-bottom:10px;">
            <label style="display:block;color:#aaa;font-size:11px;margin-bottom:4px;">${pdef.label || key}</label>
            <input type="${pdef.type === 'number' ? 'number' : 'text'}"
              value="${val}" data-param-key="${key}"
              onchange="window._zeroNodeParam('${node.id}','${key}',this.value)"
              style="width:100%;padding:6px 8px;background:#0f3460;border:1px solid #1a1a4e;
              border-radius:4px;color:#e0e0e0;font-size:12px;box-sizing:border-box;"/>
          </div>`;
        }
        html += '</div>';
      }

      html += `<div style="margin-top:16px;padding-top:12px;border-top:1px solid #0f3460;">
        <p style="color:#666;font-size:11px;margin:0;">${t('inputPort')}: ${def.inputs.length} | ${t('outputPort')}: ${def.outputs.length}</p>
      </div>`;

      this.propsEl.innerHTML = html;
    }

    _portColor(type) {
      const map = { number: '#4C97FF', string: '#59C059', boolean: '#CF63CF', trigger: '#e94560' };
      return map[type] || '#888';
    }

    _bezierCurve(x1, y1, x2, y2) {
      const dx = Math.abs(x2 - x1) * 0.5;
      return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
    }

    // ═══ 事件绑定：滚轮缩放、中键平移、键盘快捷键
    _bindEvents() {
      // 滚轮缩放 — 鼠标位置为中心点放大缩小
      this.wrapper.addEventListener('wheel', (e) => {
        e.preventDefault();
        const factor = e.deltaY > 0 ? 0.9 : 1.1;
        const rect = this.wrapper.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        this.panX = mx - (mx - this.panX) * factor;
        this.panY = my - (my - this.panY) * factor;
        this.zoom *= factor;
        this.zoom = Math.max(0.2, Math.min(3, this.zoom));
        this._render();
      });

      this.wrapper.addEventListener('mousedown', (e) => {
        if (e.button === 1 || (e.button === 0 && e.ctrlKey)) {
          this.isPanning = true;
          this.panStart = { x: e.clientX - this.panX, y: e.clientY - this.panY };
          this.wrapper.style.cursor = 'grabbing';
        }
      });

      window.addEventListener('mousemove', (e) => {
        if (this.isPanning || this.dragging || this.connecting) e.preventDefault();
        if (this.isPanning) {
          this.panX = e.clientX - this.panStart.x;
          this.panY = e.clientY - this.panStart.y;
          this._render();
        }
        if (this.dragging) {
          this.dragging.node.x = e.clientX - this.dragging.offsetX;
          this.dragging.node.y = e.clientY - this.dragging.offsetY;
          this._render();
        }
        if (this.connecting) {
          const fromNode = this.graph.nodes[this.connecting.node.id];
          if (!fromNode) return;
          const fromDef = NodeRegistry[fromNode.typeId];
          if (!fromDef) return;
          const fromIdx = fromDef.outputs.findIndex(o => o.id === this.connecting.port);
          const fromY = fromNode.y + this.HEADER_HEIGHT + 10 + fromIdx * this.PORT_SPACING + this.PORT_RADIUS;
          const fromX = fromNode.x + this.NODE_WIDTH;
          // 转换为画布坐标
          const rect = this.wrapper.getBoundingClientRect();
          const cx = (e.clientX - rect.left - this.panX) / this.zoom;
          const cy = (e.clientY - rect.top - this.panY) / this.zoom;
          this.tempLine.setAttribute('d', this._bezierCurve(fromX, fromY, cx, cy));
        }
      });

      window.addEventListener('mouseup', (e) => {
        this.isPanning = false;
        this.wrapper.style.cursor = '';
        this.dragging = null;
        if (this.connecting) {
          this.tempLine.setAttribute('d', '');
          this.connecting = null;
        }
      });

      // 快捷键 — Delete 删节点/线、Esc 关闭编辑器、Ctrl+S 导出
      window.addEventListener('keydown', (e) => {
        if (!this.container) return;
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (this.selectedNode) {
            this.graph.removeNode(this.selectedNode.id);
            this.selectedNode = null;
          } else if (this.selectedConn) {
            this.graph.removeConnection(this.selectedConn.id);
            this.selectedConn = null;
          }
          this._render();
        }
        if (e.key === 'Escape') {
          this.unmount();
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
          e.preventDefault();
          this._exportGraph();
        }
      });
    }

    _startDrag(e, node) {
      if (e.button !== 0) return;
      e.stopPropagation();
      const rect = this.wrapper.getBoundingClientRect();
      this.dragging = {
        node,
        offsetX: e.clientX - rect.left - ((node.x * this.zoom + this.panX)),
        offsetY: e.clientY - rect.top - ((node.y * this.zoom + this.panY)),
        offsetX_zoom: (e.clientX - rect.left - this.panX) / this.zoom - node.x,
        offsetY_zoom: (e.clientY - rect.top - this.panY) / this.zoom - node.y,
      };
      // 用屏幕坐标直接算偏移，简单粗暴但好使
      this.dragging.offsetX = e.clientX - node.x;
      this.dragging.offsetY = e.clientY - node.y;
    }

    _startConnect(e, node, portId, portType) {
      if (e.button !== 0) return;
      e.stopPropagation();
      if (portType === 'output') {
        this.connecting = { node, port: portId, type: 'output' };
      }
    }

    _startAddNode(e, typeId) {
      e.preventDefault();
      const node = this.graph.addNode(typeId, 200, 100);
      if (node) {
        // 放到画布正中间，方便用户看到新加的节点
        const rect = this.wrapper.getBoundingClientRect();
        const cx = (rect.width / 2 - this.panX) / this.zoom;
        const cy = (rect.height / 2 - this.panY) / this.zoom;
        node.x = cx - this.NODE_WIDTH / 2;
        node.y = cy - 30;
        this.selectedNode = node;
        this._render();
      }
    }

    // ═══ 工具栏操作：导出、导入、清空、编译、运行
    _exportGraph() {
      const json = this.graph.serialize();
      navigator.clipboard.writeText(json).then(() => {
        alert(t('graphSaved'));
      });
    }

    _importGraph() {
      const json = prompt('粘贴 JSON 数据:');
      if (json && this.graph.deserialize(json)) {
        this._render();
        alert(t('graphLoaded'));
      }
    }

    _clearGraph() {
      if (confirm('确定要清空所有节点？')) {
        this.graph.clear();
        this.selectedNode = null;
        this.selectedConn = null;
        this._render();
      }
    }

    _compile() {
      const triggers = Object.values(this.graph.nodes).filter(n => {
        const def = NodeRegistry[n.typeId];
        return def && def.isTrigger;
      });
      if (triggers.length === 0) {
        alert(t('noStartNode'));
        return;
      }
      alert(t('compileOk') + ` — ${Object.keys(this.graph.nodes).length} 个节点, ${this.graph.connections.length} 条连线`);
    }

    _runGraph() {
      // 从触发节点开始遍历执行，本质上是 BFS 模拟器
      const triggers = Object.values(this.graph.nodes).filter(n => {
        const def = NodeRegistry[n.typeId];
        return def && def.isTrigger;
      });
      if (triggers.length === 0) {
        alert(t('noStartNode'));
        return;
      }

      // 用 DFS 遍历执行，visited 集合防止重复执行导致死循环
      const visited = new Set();
      const executeNode = (nodeId) => {
        if (visited.has(nodeId)) return;
        visited.add(nodeId);
        const node = this.graph.nodes[nodeId];
        if (!node) return;
        const def = NodeRegistry[node.typeId];
        if (!def) return;
        if (def.execute) {
          try {
            // 注意：在 Gandi IDE 沙箱里才有完整的运行时环境（target、util 等）
            // 这里 demo 模式下 target 传 null，只打印参数到控制台
            console.log('[ZeroNode] Execute:', def.label, node.params);
            def.execute(node.params, { target: null });
          } catch (e) {
            console.error('[ZeroNode] Error:', e);
          }
        }
        // 顺着输出连线找到下一个节点，递归执行
        const outs = this.graph.connections
          .filter(c => c.fromNode === nodeId)
          .map(c => c.toNode);
        for (const outId of outs) {
          executeNode(outId);
        }
      };

      for (const t of triggers) {
        executeNode(t.id);
      }
    }
  }

  // ============================================================================
  // ▸ 接入 Gandi IDE — 向 Scratch 运行时注册自己，让它知道有 Zero Node 这个扩展
  // ============================================================================
  const graph = new ZeroGraph();
  let editor = null;

  function openEditor() {
    if (editor && editor.container) {
      editor.unmount();
    }
    editor = new ZeroNodeEditor(graph);
    const overlay = document.createElement('div');
    overlay.id = 'zero-node-overlay';
    document.body.appendChild(overlay);
    editor.mount(overlay);

    // 暴露给 HTML onclick 的回调函数 — 属性面板里按钮点下去就调这些
    window._zeroNodeRemove = (id) => {
      graph.removeNode(id);
      editor.selectedNode = null;
      editor._render();
    };
    window._zeroNodeParam = (id, key, value) => {
      const node = graph.nodes[id];
      if (node) {
        const def = NodeRegistry[node.typeId];
        if (def && def.params[key]) {
          node.params[key] = def.params[key].type === 'number' ? Number(value) : value;
        }
      }
    };
  }

  class ZeroNodeExtension {
    constructor(_runtime) { this._runtime = _runtime; }

    getInfo() {
      return {
        id: 'zeroNodeExt',
        name: t('extName'),
        color1: '#e94560',
        color2: '#0f3460',
        doc: 'https://github.com/Gandi-IDE/custom-extension',
        blocks: [
          '---' + t('tagMain'),
          {
            blockType: BlockType.BUTTON,
            text: t('btnOpen'),
            onClick: openEditor,
          },
        ],
      };
    }
  }

  extensions.register(new ZeroNodeExtension(runtime));

})(Scratch);
