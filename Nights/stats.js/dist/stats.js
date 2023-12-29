/*! 
import _picture from "./assets/cover.png"
import _icon from "./assets/icon.png"
 */
const STYLEENUM = {
  ONE: 0,
  ALL: 1
};
var Stats = function() {
  var mode = 0;
  var showStyle = STYLEENUM.ONE;
  var container = document.createElement("div");
  container.style.cssText = "position:absolute;top:0;cursor:pointer;opacity:0.9;z-index:1";
  container.addEventListener("click", function(event) {
    if (showStyle == STYLEENUM.ONE) {
      event.preventDefault();
      showPanel(++mode % container.children.length);
    }
  }, false);
  function addPanel(panel) {
    container.appendChild(panel.dom);
    return panel;
  }
  function showPanel(id) {
    for (var i = 0; i < container.children.length; i++) {
      container.children[i].style.display = i === id ? "block" : "none";
    }
    mode = id;
  }
  function setStyle(newStyle) {
    showStyle = newStyle;
    if (showStyle == STYLEENUM.ALL) {
      for (var i = 0; i < container.children.length; i++) {
        container.children[i].style.display = "block";
      }
    } else {
      showPanel(0);
    }
  }
  var beginTime = (performance || Date).now(), prevTime = beginTime, frames = 0;
  var fpsPanel = addPanel(new Stats.Panel("FPS", "#0ff", "#002"));
  var msPanel = addPanel(new Stats.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) {
    var memPanel = addPanel(new Stats.Panel("MB", "#f08", "#201"));
  }
  showPanel(0);
  return {
    REVISION: 16,
    dom: container,
    addPanel,
    showPanel,
    begin: function() {
      beginTime = (performance || Date).now();
    },
    end: function() {
      frames++;
      var time = (performance || Date).now();
      msPanel.update(time - beginTime, 200);
      if (time >= prevTime + 1e3) {
        fpsPanel.update(frames * 1e3 / (time - prevTime), 100);
        prevTime = time;
        frames = 0;
        if (memPanel) {
          var memory = performance.memory;
          memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
        }
      }
      return time;
    },
    update: function() {
      beginTime = this.end();
    },
    // Backwards Compatibility
    domElement: container,
    setMode: showPanel,
    setStyle
  };
};
Stats.Panel = function(name, fg, bg) {
  var min = Infinity, max = 0, round = Math.round;
  var PR = round(window.devicePixelRatio || 1);
  var WIDTH = 80 * PR, HEIGHT = 48 * PR, TEXT_X = 3 * PR, TEXT_Y = 2 * PR, GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR, GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;
  var canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  canvas.style.cssText = "width:80px;height:48px";
  var context = canvas.getContext("2d");
  context.font = "bold " + 9 * PR + "px Helvetica,Arial,sans-serif";
  context.textBaseline = "top";
  context.fillStyle = bg;
  context.fillRect(0, 0, WIDTH, HEIGHT);
  context.fillStyle = fg;
  context.fillText(name, TEXT_X, TEXT_Y);
  context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
  context.fillStyle = bg;
  context.globalAlpha = 0.9;
  context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
  return {
    dom: canvas,
    update: function(value, maxValue) {
      min = Math.min(min, value);
      max = Math.max(max, value);
      context.fillStyle = bg;
      context.globalAlpha = 1;
      context.fillRect(0, 0, WIDTH, GRAPH_Y);
      context.fillStyle = fg;
      context.fillText(round(value) + " " + name + " (" + round(min) + "-" + round(max) + ")", TEXT_X, TEXT_Y);
      context.drawImage(canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT);
      context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);
      context.fillStyle = bg;
      context.globalAlpha = 0.9;
      context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round((1 - value / maxValue) * GRAPH_HEIGHT));
    }
  };
};
const lang = {
  "zh-cn": {
    "Stats.extensionName": "性能监控",
    "Stats.openStats": "打开性能监控",
    "Stats.closeStats": "关闭性能监控",
    "Stats.showAll": "全部显示",
    "Stats.showOne": "单个显示",
    "Stats.setStyle": "设置样式为[STYLE]"
  },
  en: {
    "Stats.extensionName": "state",
    "Stats.openStats": "open state",
    "Stats.closeStats": "close state",
    "Stats.showAll": "show all",
    "Stats.showOne": "show one",
    "Stats.setStyle": "set style [STYLE]"
  }
};
const getInfo = (formatMessage) => {
  return {
    id: "stats",
    name: formatMessage("Stats.extensionName"),
    color1: "#4D7EB4",
    blocks: [
      {
        opcode: "openStats",
        blockType: "command",
        text: formatMessage("Stats.openStats")
      },
      {
        opcode: "closeStats",
        blockType: "command",
        text: formatMessage("Stats.closeStats")
      },
      {
        opcode: "setStyle",
        blockType: "command",
        text: formatMessage("Stats.setStyle"),
        arguments: {
          STYLE: {
            type: "string",
            menu: "STYLE",
            defaultValue: STYLEENUM.ONE
          }
        }
      }
    ],
    menus: {
      STYLE: {
        items: [
          {
            text: formatMessage("Stats.showOne"),
            value: STYLEENUM.ONE.toString()
          },
          {
            text: formatMessage("Stats.showAll"),
            value: STYLEENUM.ALL.toString()
          }
        ]
      }
    }
  };
};
const MAXCLONES = 350;
const MAXTHREADS = 30;
class StatsExt {
  constructor(runtime) {
    this.runtime = runtime;
    this.stats = new Stats();
    this.clonePanel = this.stats.addPanel(new Stats.Panel("CLONE", "#faea5c", "#a58409"));
    this.threadsPanel = this.stats.addPanel(new Stats.Panel("THREAD", "#62baf4", "#0c3e5f"));
    this.stats.showPanel(0);
    this.renderer = runtime.renderer;
    this.renderer.canvas.parentNode.appendChild(this.stats.dom);
    this.originalDraw = this.renderer.draw;
    this.renderer.draw = this.draw.bind(this);
    this.stats.setStyle(STYLEENUM.ONE);
    this.closeStats();
    this._formatMessage = runtime.getFormatMessage(lang);
    this.getInfo = () => getInfo(this.formatMessage.bind(this));
  }
  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id
    });
  }
  get threadsCount() {
    return this.runtime.threads.length;
  }
  get cloneCount() {
    return this.runtime._cloneCounter;
  }
  draw() {
    this.stats.begin();
    this.originalDraw.call(this.renderer);
    this.stats.end();
    this.clonePanel.update(this.cloneCount, MAXCLONES);
    this.threadsPanel.update(this.threadsCount, MAXTHREADS);
  }
  openStats() {
    this.stats.domElement.style.display = "block";
  }
  closeStats() {
    this.stats.domElement.style.display = "none";
  }
  setStyle(arg) {
    this.stats.setStyle(parseInt(arg.STYLE));
  }
}
window.tempExt = {
  Extension: StatsExt,
  info: {
    name: "Stats.name",
    description: "Stats.descp",
    extensionId: "Stats",
    //iconURL: _picture,
    //insetIconURL: _icon,
    featured: true,
    disabled: false,
    collaborator: "nights"
  },
  l10n: {
    "zh-cn": {
      "Stats.name": "性能监控",
      "Stats.descp": "监控性能"
    },
    en: {
      "Stats.name": "性能监控",
      "Stats.descp": "监控性能"
    }
  }
};
export {
  StatsExt as default
};
