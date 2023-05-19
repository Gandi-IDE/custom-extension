import {GandiExtension, BlockUtil, ArgumentType, ReporterScope} from '@cocrea/extension-kit'
import {extensionId} from './extInfo'
import zhCn from "./l10n/zh-cn.json";
import en from "./l10n/en.json";

import cover from "./assets/cover.jpg";
import blockIcon from "./assets/icon.png";

/** Scratch 参数类型 */
type SCarg = string | number | boolean;

export default class CRExtTest extends GandiExtension {
  get extensionId(): string {
    return extensionId;
  }
  
  get localization() {
    return {
      'zh-cn': zhCn,
      'en': en,
    };
  }

  get documentURL(): string {
    return '';
  }

  get menuIconURI(): string {
    return blockIcon;
  }

  get blockIconURI(): string {
    return blockIcon;
  }

  get coverURI(): string {
    return cover;
  }

  get authorInfo() {
    return {
      labelName: 'Nick', 
      username: 'CatRanger', 
      homepage:'https://www.ccw.site/student/203524981',
      email:'sylarhcn@gmail.com'
    };
  }

  get blockPrefix(): string {
    return '';
  }

  get deprecatedBlocksByOpcodes(): string[] {
    return [];
  }

  init() {
    // all code below is an example, delete it all when you start coding
    // 以下代码仅为示例，开始编码时请删除

    // create menus
    const staticMenu = BlockUtil.createMenu('testMenu');
    staticMenu.items.push({text: 'menuOpt1', value: 'static1'});
    staticMenu.items.push({text: 'menuOpt12', value: 'static2'});

    const dynamicMenu = BlockUtil.createDynamicMenu('buildDynamicMenu', 'buildDynamicMenu', true)

    // create arguments
    const A = BlockUtil.createArgument(ArgumentType.STRING, 'commandArugA', staticMenu);
    const B = BlockUtil.createArgument(ArgumentType.STRING, 'commandArguB', dynamicMenu);
    const C = BlockUtil.createArgument(ArgumentType.NUMBER, 55);

    // create blocks
    const command = BlockUtil.createCommand();
    command.setOpcode('test')
    command.setText('test')
    command.setArguments({A, B, C})

    const targetReporter = BlockUtil.createReporter();
    targetReporter.setReporterScope(ReporterScope.TARGET)
    targetReporter.setOpcode('targetReporter')
    targetReporter.setText('targetReporter')
    targetReporter.setArguments({A, B, C})

    const globalReporter = BlockUtil.createBool();
    globalReporter.setReporterScope(ReporterScope.GLOBAL)
    globalReporter.setOpcode('globalReporter')
    globalReporter.setText('globalReporter')
    globalReporter.setArguments({A, B, C})

    const conditionalBlocks = BlockUtil.createConditional();
    conditionalBlocks.setOpcode('conditionalBlocks')
    conditionalBlocks.setText('conditionalBlocks')
    conditionalBlocks.setArguments({A, B, C})
    conditionalBlocks.setBranchCount(2);
    conditionalBlocks.setIsTerminal(true)

    const loopBlocks = BlockUtil.createLoop();
    loopBlocks.setOpcode('loopBlocks')
    loopBlocks.setText('loopBlocks')
    loopBlocks.setArguments({A, B, C})
    
    const eventBlocks = BlockUtil.createEvent();
    eventBlocks.setOpcode('eventBlocks')
    eventBlocks.setText('eventBlocks')
    eventBlocks.setArguments({A, B, C})
    eventBlocks.setShouldRestartExistingThreads(false)
    eventBlocks.setIsEdgeActivated(true);

    const hatBlocks = BlockUtil.createHat();
    hatBlocks.setOpcode('hatBlocks')
    hatBlocks.setText('hatBlocks')
    hatBlocks.setArguments({A, B, C})
    hatBlocks.setShouldRestartExistingThreads(false)
    hatBlocks.setIsEdgeActivated(true);

    // add blocks to extension
    this.addBlock(command)
    this.addBlock(targetReporter)
    this.addBlock(globalReporter)
    this.addBlock(conditionalBlocks)
    this.addBlock(loopBlocks)
    this.addBlock(eventBlocks)
    this.addBlock(hatBlocks)
  }

  //block opcode functions
  test(args: { A: SCarg; B: SCarg; C: SCarg }) {
    const {A, B, C} = args;
    console.log('test', A, B, C);
  }

  targetReporter() {}

  globalReporter() {}

  conditionalBlocks() {}

  loopBlocks() {}

  eventBlocks() {}

  hatBlocks() {}

  //dynamic menu function

  buildDynamicMenu() {
    return [{text: 'dynamic_menuOpt1', value: 'dynamic1'}, {text: 'dynamic_menuOpt2', value: 'dynamic2'}];
  }
}
