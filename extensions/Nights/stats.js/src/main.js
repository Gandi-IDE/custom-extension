import Stats, { STYLEENUM } from "./stats";
import lang from "./lang";
import getInfo from "./block-info"
/**
 * @author nights
 */

const MAXCLONES = 350
const MAXTHREADS = 30

class StatsExt {
    constructor(runtime) {
        this.runtime = runtime
        this.stats = new Stats()
        this.clonePanel = this.stats.addPanel(new Stats.Panel('CLONE', '#faea5c', '#a58409'));
        this.threadsPanel = this.stats.addPanel(new Stats.Panel('THREAD', '#62baf4', '#0c3e5f'));

        this.stats.showPanel(0)

        this.renderer = runtime.renderer;
        this.renderer.canvas.parentNode.appendChild(this.stats.dom);

        this.originalDraw = this.renderer.draw;
        this.renderer.draw = this.draw.bind(this);
        this.stats.setStyle(STYLEENUM.ONE)
        this.closeStats()
        this._formatMessage = runtime.getFormatMessage(lang)
        this.getInfo = ()=> getInfo(this.formatMessage.bind(this))
    }
    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id,
        })
    }
    get threadsCount() {
        return this.runtime.threads.length
    }
    get cloneCount() {
        return this.runtime._cloneCounter
    }
    draw() {
        this.stats.begin();
        this.originalDraw.call(this.renderer);
        this.stats.end();

        this.clonePanel.update(this.cloneCount, MAXCLONES)
        this.threadsPanel.update(this.threadsCount, MAXTHREADS)
    }

    openStats() {
        this.stats.domElement.style.display = 'block'
    }
    closeStats() {
        this.stats.domElement.style.display = 'none'
    }
    setStyle(arg) {
        this.stats.setStyle(parseInt(arg.STYLE))
    }
}

window.tempExt = {
    Extension: StatsExt,
    info: {
        name: "nights.stats.name",
        description: "nights.stats.descp",
        extensionId: "nights.stats.",
        //iconURL: _picture,
        //insetIconURL: _icon,
        featured: true,
        disabled: false,
        collaborator: "nights"
    },
    "l10n": {
        "zh-cn": {
            "nights.stats.name": "性能监控",
            "nights.stats.descp": "监视性能包括FPS，内存占用等"
        },
        "en": {
            "nights.stats.name": "performance monitor",
            "nights.stats.descp": "Monitoring performance including FPS, memory usage, etc"
        }
    }
};

export default StatsExt