// @ts-nocheck
const ani_id = 'Animator'
const ani_cover =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAF0CAYAAAD/4EcMAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO3dfdQkRX3o8erHhV1e3MU39IaXhHg1L7vck+iNcRePSVDDgudE4SaCngALd3clCS+JvPiCoIIkEfByET28RsF4wi4mrnqPgOfGqDmwmBBz/3A3MaJBFzSCQXcfYNllkbnn1zM1U11d1V01Uz0vPd8Pjs/svHRV13RX/7qqujpTSnUUAAAAklmgKAEAANIiwAIAAEiMAAsAACAxAiwAAIDECLAAAAASI8ACAABIjAALAAAgMQIsAACAxAiwAAAAEiPAAgAASIwACwAAIDECLAAAgMQIsAAAABIjwAIAAEiMAAsAACAxAiwAAIDECLAAAAASI8ACAABIjAALAAAgMQIsAACAxAiwAAAAEiPAAgAASIwACwAAIDECLAAAgMQIsAAAABIjwAIAAEiMAAsAACAxAiwAAIDECLAAAAASI8ACAABIjAALAAAgMQIsAACAxAiwAAAAEiPAAgAASIwACwAAIDECLAAAgMQIsAAAABIjwAIAAEiMAAsAACAxAiwAAIDECLAAAAASI8ACAABIjAALAAAgMQIsAACAxAiwAAAAEiPAAgAASIwACwAAIDECLAAAgMQIsAAAABIjwAIAAEiMAAsAACAxAiwAAIDECLAAAAASI8ACAABIjAALAAAgMQIsAACAxAiwAAAAEiPAAgAASIwACwAAIDECLAAAgMQIsAAAABIjwAIAAEiMAAsAACAxAiwAAIDECLAAAAASI8ACAABIjAALAAAgMQIsAACAxAiwAAAAEiPAAgAASIwACwAAIDECLAAAgMQIsAAAABIjwAIAAEiMAAsAACAxAiwAAIDECLAAAAASI8ACAABIjAALAAAgMQIsAACAxAiwAAAAEiPAAgAASIwACwAAIDECLAAAgMQIsAAAABIjwAIAAEiMAAsAACAxAiwAAIDECLAAAAASI8ACAABIjAALAAAgMQIsAACAxAiwAAAAEiPAAgAASIwACwAAIDECLAAAgMQIsAAAABIjwAIAAEiMAAsAACAxAiwAAIDECLAAAAASI8ACAABIjAALAAAgMQIsAACAxAiwAAAAEiPAAgAASGwJBdo+CwsLatmyZeqAAw5Q++23X/5YsmRJ/hcAMDn79u1Tzzzz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'
const ani_icon =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgODAgODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwIDgwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3LjYxODUiIHkxPSIzOC40NjQ1IiB4Mj0iNzMuMTA4MyIgeTI9IjM4LjQ2NDUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNC4wODU2MjFlLTE0IC0xIDEgNC4wODU2MjFlLTE0IDEuNTM1NSA3OC44Nzg3KSI+DQoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPg0KCTxzdG9wICBvZmZzZXQ9IjkuMTM2MzEzZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6IzAwMEEwNiIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuMzk4NyIgc3R5bGU9InN0b3AtY29sb3I6IzAyMjYxOSIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNTc3IiBzdHlsZT0ic3RvcC1jb2xvcjojMDIzMDIwIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTcwLjMsNDRMNDUuOCw2OC41Yy0zLjIsMy4yLTguNSwzLjItMTEuNywwTDkuNyw0NGMtMy4yLTMuMi0zLjItOC41LDAtMTEuN0wzNC4yLDcuOGMzLjItMy4yLDguNS0zLjIsMTEuNywwDQoJbDI0LjUsMjQuNUM3My42LDM1LjYsNzMuNiw0MC44LDcwLjMsNDR6Ii8+DQo8L3N2Zz4NCg=='

/**
 * @callback AnimationMethod 计算动画的方法。
 * @param {number} time t = 时间。
 * @param {number} start s = 初始量。
 * @param {number} diff d = 变化量 (end - start)。
 * @param {number} length l = 动画长度。
 * @return {number} 在 t 时的值。
 */
/**
 * 动画类。
 */
class Animate {
    /**
     * @type {AnimationMethod} 动画类型。
     */
    method
    /**
     * @type {number} 开始时的值。
     */
    start
    /**
     * @type {number} 结束时的值。
     */
    end
    /**
     * @type {number} 动画长度。
     */
    length
    /**
     * 构造动画类。
     * @param {AnimationMethod} method 将要使用的动画类型。
     * @param {{start: number, end: number, length: number}} param1 动画的各种参数。
     */
    constructor(method, { start, end, length }) {
        ;[this.method, this.start, this.end, this.length] = [
            method,
            start,
            end,
            length
        ]
    }
    /** @type {AnimationMethod} 平方缓入。 */
    static EaseInQuad(t, b, c, d) {
        return c * (t / d) * (t / d) + b
    }
    /** @type {AnimationMethod} 平方缓出。 */
    static EaseOutQuad(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    }
    /** @type {AnimationMethod} 平方缓入缓出。 */
    static EaseInOutQuad(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t + b
        return (-c / 2) * (--t * (t - 2) - 1) + b
    }
    /** @type {AnimationMethod} 正弦缓入。 */
    static EaseInSine(t, b, c, d) {
        return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b
    }
    /** @type {AnimationMethod} 正弦缓出。 */
    static EaseOutSine(t, b, c, d) {
        return c * Math.sin((t / d) * (Math.PI / 2)) + b
    }
    /** @type {AnimationMethod} 正弦缓入缓出。 */
    static EaseInOutSine(t, b, c, d) {
        return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
    }
    /** @type {AnimationMethod} 指数曲线缓入。 */
    static EaseInExpo(t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    }
    /** @type {AnimationMethod} 指数曲线缓出。 */
    static EaseOutExpo(t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b
    }
    /** @type {AnimationMethod} 指数曲线缓入缓出。 */
    static EaseInOutExpo(t, b, c, d) {
        if (t == 0) return b
        if (t == d) return b + c
        if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b
        return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b
    }
    /** @type {AnimationMethod} 圆形曲线缓入。 */
    static EaseInCirc(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    }
    /** @type {AnimationMethod} 圆形曲线缓出。 */
    static EaseOutCirc(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    }
    /** @type {AnimationMethod} 圆形曲线缓入缓出。 */
    static EaseInOutCirc(t, b, c, d) {
        if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b
        return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    }
    /** @type {AnimationMethod} 三次方缓入。 */
    static EaseInCubic(t, b, c, d) {
        return c * (t /= d) * t * t + b
    }
    /** @type {AnimationMethod} 三次方缓出。 */
    static EaseOutCubic(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    }
    /** @type {AnimationMethod} 三次方缓入缓出。 */
    static EaseInOutCubic(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b
        return (c / 2) * ((t -= 2) * t * t + 2) + b
    }
    /** @type {AnimationMethod} 四次方缓入。 */
    static EaseInQuart(t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    }
    /** @type {AnimationMethod} 四次方缓出。 */
    static EaseOutQuart(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    }
    /** @type {AnimationMethod} 四次方缓入缓出。 */
    static EaseInOutQuart(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b
        return (-c / 2) * ((t -= 2) * t * t * t - 2) + b
    }
    /** @type {AnimationMethod} 五次方缓入。 */
    static EaseInQuint(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    }
    /** @type {AnimationMethod} 五次方缓出。 */
    static EaseOutQuint(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    }
    /** @type {AnimationMethod} 五次方缓入缓出。 */
    static EaseInOutQuint(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b
        return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b
    }
    /** @type {AnimationMethod} 指数衰减正弦曲线缓入。 */
    static EaseInElastic(t, b, c, d) {
        let s = 1.70158
        let p = 0
        let a = c
        if (t == 0) return b
        if ((t /= d) == 1) return b + c
        p = d * 0.3
        if (a < Math.abs(c)) {
            a = c
            s = p / 4
        } else s = (p / (2 * Math.PI)) * Math.asin(c / a)
        return (
            -(
                a *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t * d - s) * (2 * Math.PI)) / p)
            ) + b
        )
    }
    /** @type {AnimationMethod} 指数衰减正弦曲线缓出。 */
    static EaseOutElastic(t, b, c, d) {
        let s = 1.70158
        let p = 0
        let a = c
        if (t == 0) return b
        if ((t /= d) == 1) return b + c
        p = d * 0.3
        if (a < Math.abs(c)) {
            a = c
            s = p / 4
        } else s = (p / (2 * Math.PI)) * Math.asin(c / a)
        return (
            a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
            c +
            b
        )
    }
    /** @type {AnimationMethod} 指数衰减正弦曲线缓入缓出。 */
    static EaseInOutElastic(t, b, c, d) {
        let s = 1.70158
        let p = 0
        let a = c
        if (t == 0) return b
        if ((t /= d / 2) == 2) return b + c
        p = d * (0.3 * 1.5)
        if (a < Math.abs(c)) {
            a = c
            s = p / 4
        } else s = (p / (2 * Math.PI)) * Math.asin(c / a)
        if (t < 1)
            return (
                -0.5 *
                (a *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
                b
            )
        return (
            a *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
            0.5 +
            c +
            b
        )
    }
    /** @type {AnimationMethod} 超范围三次方缓入。 */
    static EaseInBack(t, b, c, d) {
        let s = 1.70158
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    }
    /** @type {AnimationMethod} 超范围三次方缓出。 */
    static EaseOutBack(t, b, c, d) {
        let s = 1.70158
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    }
    /** @type {AnimationMethod} 超范围三次方缓入缓出。 */
    static EaseInOutBack(t, b, c, d) {
        let s = 1.70158
        if ((t /= d / 2) < 1)
            return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b
        return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    }
    /** @type {AnimationMethod} 指数衰减反弹缓入。 */
    static EaseInBounce(t, b, c, d) {
        return c - Animate.EaseOutBounce(d - t, 0, c, d) + b
    }
    /** @type {AnimationMethod} 指数衰减反弹缓出。 */
    static EaseOutBounce(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b
        } else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
        } else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
        } else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
        }
    }
    /** @type {AnimationMethod} 指数衰减反弹缓入缓出。 */
    static EaseInOutBounce(t, b, c, d) {
        if (t < d / 2) {
            return Animate.EaseInBounce(t * 2, 0, c, d) * 0.5 + b
        }
        return Animate.EaseOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
    }
    /**
     * 求动画在 t = time 时的值。
     * @param {number} time 时间。
     * @returns {number} 值。
     */
    at(time) {
        if (time > this.length) return this.end
        // if (this.start < this.end) {
        //   return this.method(
        //     this.length - time,
        //     this.start,
        //     this.end - this.start,
        //     this.length
        //   )
        // } else {
        //   return this.method(
        //     time,
        //     this.start,
        //     this.end - this.start,
        //     this.length
        //   )
        // }
        return this.method(time, this.start, this.end - this.start, this.length)
    }
}
/**
 * 根据函数获取动画方法。
 * @param {string} name
 * @returns {AnimationMethod?} 动画方法。
 */
function getMethod(name) {
    if (name in Animate) {
        return Animate[name]
    }
    return null
}
/**
 * 插件主类。
 */
class Animator {
    /**
     * @type {any} 内部翻译函数。
     */
    _formatMessage
    /**
     * @type {any} 运行时。
     */
    runtime
    /**
     * 构造插件。
     * @param {any} runtime 运行时。
     */
    constructor(runtime) {
        this.runtime = runtime
        this._formatMessage = runtime.getFormatMessage({
            'zh-cn': {
                'Ani.extensionName': 'Animator',
                'Ani.Animate':
                    '[type](初始值=[start], 尾值=[end], 长度=[length]) 于[time]秒时的值', //block
                'Ani.Move': '在[time]秒内以[type]方式移到[endx][endy]', //block
                'Ani.Effect': '在[time]秒内以[type]方式将[Effect]更改为[endv]', //block

                'Ani.easeInQuad': '二次缓入',
                'Ani.easeOutQuad': '二次缓出',
                'Ani.easeInOutQuad': '二次缓动',
                'Ani.easeInSine': '正弦缓入',
                'Ani.easeOutSine': '正弦缓出',
                'Ani.easeInOutSine': '正弦缓动',
                'Ani.easeInExpo': '指数缓入',
                'Ani.easeOutExpo': '指数缓出',
                'Ani.easeInOutExpo': '指数缓动',
                'Ani.easeInCirc': '圆形缓入',
                'Ani.easeOutCirc': '圆形缓出',
                'Ani.easeInOutCirc': '圆形缓动',
                'Ani.easeInCubic': '三次缓入',
                'Ani.easeOutCubic': '三次缓出',
                'Ani.easeInOutCubic': '三次缓动',
                'Ani.easeInQuart': '四次缓入',
                'Ani.easeOutQuart': '四次缓出',
                'Ani.easeInOutQuart': '四次缓动',
                'Ani.easeInQuint': '五次缓入',
                'Ani.easeOutQuint': '五次缓出',
                'Ani.easeInOutQuint': '五次缓动',
                'Ani.easeInElastic': '弹性缓入',
                'Ani.easeOutElastic': '弹性缓出',
                'Ani.easeInOutElastic': '弹性缓动',
                'Ani.easeInBack': '回弹缓入',
                'Ani.easeOutBack': '回弹缓出',
                'Ani.easeInOutBack': '回弹缓动',
                'Ani.easeInBounce': '弹跳缓入',
                'Ani.easeOutBounce': '弹跳缓出',
                'Ani.easeInOutBounce': '弹跳缓动',

                'Ani.getEffect': '获取特效[Effect]的值', //block
                'Ani.color': '颜色',
                'Ani.fisheye': '鱼眼',
                'Ani.whirl': '旋涡',
                'Ani.pixelate': '像素化',
                'Ani.mosaic': '马赛克',
                'Ani.brightness': '亮度',
                'Ani.ghost': '虚像',
                'Ani.size': '大小',

                'Ani.docs': '📖文档(编写中)',

                'Ani.Fac_ani': '🌟缓动运算',
                'Ani.Fac_dat': '🪄特效参数'
            },

            en: {
                'Ani.extensionName': 'Animator',
                'Ani.Animate':
                    '[type](start=[start], end=[end], duration=[length]) at[time]second(s)', //block
                'Ani.Move': 'Move to[endx][endy]within[time]second(s) using[type]', //block
                'Ani.Effect': 'Change[Effect]to[endv]within[time]second(s) using[type]', //block

                'Ani.easeInQuad': 'Quadratic ease-in',
                'Ani.easeOutQuad': 'Quadratic ease-out',
                'Ani.easeInOutQuad': 'Quadratic ease-in-out',
                'Ani.easeInSine': 'Sine ease-in',
                'Ani.easeOutSine': 'Sine ease-out',
                'Ani.easeInOutSine': 'Sine ease-in-out',
                'Ani.easeInExpo': 'Exponential ease-in',
                'Ani.easeOutExpo': 'Exponential ease-out',
                'Ani.easeInOutExpo': 'Exponential ease-in-out',
                'Ani.easeInCirc': 'Circular ease-in',
                'Ani.easeOutCirc': 'Circular ease-out',
                'Ani.easeInOutCirc': 'Circular ease-in-out',
                'Ani.easeInCubic': 'Cubic ease-in',
                'Ani.easeOutCubic': 'Cubic ease-out',
                'Ani.easeInOutCubic': 'Cubic ease-in-out',
                'Ani.easeInQuart': 'Quartic ease-in',
                'Ani.easeOutQuart': 'Quartic ease-out',
                'Ani.easeInOutQuart': 'Quartic ease-in-out',
                'Ani.easeInQuint': 'Quintic ease-in',
                'Ani.easeOutQuint': 'Quintic ease-out',
                'Ani.easeInOutQuint': 'Quintic ease-in-out',
                'Ani.easeInElastic': 'Elastic ease-in',
                'Ani.easeOutElastic': 'Elastic ease-out',
                'Ani.easeInOutElastic': 'Elastic ease-in-out',
                'Ani.easeInBack': 'Back ease-in',
                'Ani.easeOutBack': 'Back ease-out',
                'Ani.easeInOutBack': 'Back ease-in-out',
                'Ani.easeInBounce': 'Bounce ease-in',
                'Ani.easeOutBounce': 'Bounce ease-out',
                'Ani.easeInOutBounce': 'Bounce ease-in-out',

                'Ani.getEffect': 'Get[Effect]value', //block
                'Ani.color': 'color',
                'Ani.fisheye': 'fisheye',
                'Ani.whirl': 'whirl',
                'Ani.pixelate': 'pixelate',
                'Ani.mosaic': 'mosaic',
                'Ani.brightness': 'brightness',
                'Ani.ghost': 'ghost',
                'Ani.size': 'size',

                'Ani.docs': '📖Docs(WIP)',

                'Ani.Fac_ani': '🌟Easing functions',
                'Ani.Fac_dat': '🪄Effect parameters'
            }
        })
    }
    /**
     * 翻译函数。
     * @param {string} id 键名。
     * @returns {string} 翻译后的结果。
     */
    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id
        })
    }
    /**
     * 获取插件信息。
     * @returns {any} 插件的积木。
     */
    getInfo() {
        return {
            id: ani_id, // ext id
            name: this.formatMessage('Ani.extensionName'), // ext name
            color1: '#023020',
            menuIconURI: ani_icon,
            blockIconURI: ani_icon,
            blocks: [
                /*
                {
                    blockType: 'button',
                    text: this.formatMessage('Ani.docs'),
                    onClick: this.docs
                },
                */
                '---' + this.formatMessage('Ani.Fac_ani'),
                {
                    opcode: 'Animate',
                    blockType: 'reporter',
                    text: this.formatMessage('Ani.Animate'),
                    arguments: {
                        type: {
                            type: 'string',
                            menu: 'Ani'
                        },
                        time: {
                            type: 'number'
                        },
                        start: {
                            type: 'number'
                        },
                        end: {
                            type: 'number'
                        },
                        length: {
                            type: 'number'
                        }
                    }
                },
                {
                    opcode: 'Move',
                    blockType: 'command',
                    text: this.formatMessage('Ani.Move'),
                    arguments: {
                        type: {
                            type: 'string',
                            menu: 'Ani'
                        },
                        time: {
                            type: 'number'
                        },
                        endx: {
                            type: 'number'
                        },
                        endy: {
                            type: 'number'
                        },
                        length: {
                            type: 'number'
                        }
                    }
                },
                {
                    opcode: 'Effect',
                    blockType: 'command',
                    text: this.formatMessage('Ani.Effect'),
                    arguments: {
                        type: {
                            type: 'string',
                            menu: 'Ani'
                        },
                        time: {
                            type: 'number'
                        },
                        endv: {
                            type: 'number'
                        },
                        Effect: {
                            type: 'string',
                            menu: 'Effect'
                        },
                        length: {
                            type: 'number'
                        }
                    }
                },
                '---' + this.formatMessage('Ani.Fac_dat'),
                {
                    opcode: 'getEffect',
                    blockType: 'reporter',
                    text: this.formatMessage('Ani.getEffect'),
                    arguments: {
                        Effect: {
                            type: 'string',
                            menu: 'Effect'
                        }
                    },
                    disableMonitor: true //disable the tick before this block (bugs may accure when monitoring)
                }
            ],
            menus: {
                Ani: [
                    {
                        text: this.formatMessage('Ani.easeInQuad'),
                        value: 'EaseInQuad'
                    },
                    {
                        text: this.formatMessage('Ani.easeOutQuad'),
                        value: 'EaseOutQuad'
                    },
                    {
                        text: this.formatMessage('Ani.easeInOutQuad'),
                        value: 'EaseInOutQuad'
                    },
                    {
                        text: this.formatMessage('Ani.easeInSine'),
                        value: 'EaseInSine'
                    },
                    {
                        text: this.formatMessage('Ani.easeOutSine'),
                        value: 'EaseOutSine'
                    },
                    {
                        text: this.formatMessage('Ani.easeInOutSine'),
                        value: 'EaseInOutSine'
                    },
                    {
                        text: this.formatMessage('Ani.easeInExpo'),
                        value: 'EaseInExpo'
                    },
                    {
                        text: this.formatMessage('Ani.easeOutExpo'),
                        value: 'EaseOutExpo'
                    },
                    {
                        text: this.formatMessage('Ani.easeInOutExpo'),
                        value: 'EaseInOutExpo'
                    },
                    {
                        text: this.formatMessage('Ani.easeInCirc'),
                        value: 'EaseInCirc'
                    },
                    {
                        text: this.formatMessage('Ani.easeOutCirc'),
                        value: 'EaseOutCirc'
                    },
                    {
                        text: this.formatMessage('Ani.easeInOutCirc'),
                        value: 'EaseInOutCirc'
                    },
                    {
                        text: this.formatMessage('Ani.easeInCubic'),
                        value: 'EaseInCubic'
                    },
                    {
                        text: this.formatMessage('Ani.easeOutCubic'),
                        value: 'EaseOutCubic'
                    },
                    {
                        text: this.formatMessage('Ani.easeInOutCubic'),
                        value: 'EaseInOutCubic'
                    },
                    {
                        text: this.formatMessage('Ani.easeInQuart'),
                        value: 'EaseInQuart'
                    },
                    {
                        text: this.formatMessage('Ani.easeOutQuart'),
                        value: 'EaseOutQuart'
                    },
                    {
                        text: this.formatMessage('Ani.easeInOutQuart'),
                        value: 'EaseInOutQuart'
                    },
                    {
                        text: this.formatMessage('Ani.easeInQuint'),
                        value: 'EaseInQuint'
                    },
                    {
                        text: this.formatMessage('Ani.easeOutQuint'),
                        value: 'EaseOutQuint'
                    },
                    {
                        text: this.formatMessage('Ani.easeInOutQuint'),
                        value: 'EaseInOutQuint'
                    },
                    {
                        text: this.formatMessage('Ani.easeInElastic'),
                        value: 'EaseInElastic'
                    },
                    {
                        text: this.formatMessage('Ani.easeOutElastic'),
                        value: 'EaseOutElastic'
                    },
                    {
                        text: this.formatMessage('Ani.easeInOutElastic'),
                        value: 'EaseInOutElastic'
                    },
                    {
                        text: this.formatMessage('Ani.easeInBack'),
                        value: 'EaseInBack'
                    },
                    {
                        text: this.formatMessage('Ani.easeOutBack'),
                        value: 'EaseOutBack'
                    },
                    {
                        text: this.formatMessage('Ani.easeInOutBack'),
                        value: 'EaseInOutBack'
                    },
                    {
                        text: this.formatMessage('Ani.easeInBounce'),
                        value: 'EaseInBounce'
                    },
                    {
                        text: this.formatMessage('Ani.easeOutBounce'),
                        value: 'EaseOutBounce'
                    },
                    {
                        text: this.formatMessage('Ani.easeInOutBounce'),
                        value: 'EaseInOutBounce'
                    }
                ],
                Effect: [
                    {
                        text: this.formatMessage('Ani.color'),
                        value: 'color'
                    },
                    {
                        text: this.formatMessage('Ani.fisheye'),
                        value: 'fisheye'
                    },
                    {
                        text: this.formatMessage('Ani.whirl'),
                        value: 'whirl'
                    },
                    {
                        text: this.formatMessage('Ani.pixelate'),
                        value: 'pixelate'
                    },
                    {
                        text: this.formatMessage('Ani.mosaic'),
                        value: 'mosaic'
                    },
                    {
                        text: this.formatMessage('Ani.brightness'),
                        value: 'brightness'
                    },
                    {
                        text: this.formatMessage('Ani.ghost'),
                        value: 'ghost'
                    },
                    {
                        text: this.formatMessage('Ani.size'),
                        value: 'size'
                    }
                ]
            }
        }
    }

    docs() {
        /*
        docs missing (in progress)

        window.open('https://gandi.rth1.app/Docs/Animator.js.html')
        */
    }
    /**
     * 获取动画效果。
     * @param {{type: string, start: string, end: string, length: string, time: string}} param0
     * @returns {number} 动画效果的值。
     */
    Animate({ type, start, end, length, time }) {
        const method = getMethod(type)
        const _length = parseFloat(length)
        const _start = parseFloat(start)
        const _end = parseFloat(end)
        const _time = parseFloat(time)
        if (method && _length > 0 && _time >= 0) {
            const anim = new Animate(method, {
                start: _start,
                end: _end,
                length: _length
            })
            return anim.at(_time)
        }
        return 0
    }

    /**
     * 以指定方式移动角色。
     * @param {{type: string, endx: string, endy: string, time: string}} param0 积木参数。
     * @param {any} util 上下文。
     */
    Move({ type, endx, endy, time }, util) {
        if (util.stackFrame.startTime !== undefined) {
            const timeElapsed = Date.now() - util.stackFrame.startTime
            if (timeElapsed < util.stackFrame.length) {
                const method = getMethod(util.stackFrame.type)
                if (method) {
                    const animX = new Animate(method, {
                        start: util.stackFrame.startX,
                        end: util.stackFrame.endX,
                        length: util.stackFrame.length
                    })
                    const animY = new Animate(method, {
                        start: util.stackFrame.startY,
                        end: util.stackFrame.endY,
                        length: util.stackFrame.length
                    })
                    util.target.setXY(animX.at(timeElapsed), animY.at(timeElapsed))
                }
                util.yield()
            } else {
                util.target.setXY(util.stackFrame.endX, util.stackFrame.endY)
            }
        } else {
            ;[
                util.stackFrame.type,
                util.stackFrame.startTime,
                util.stackFrame.length,
                util.stackFrame.startX,
                util.stackFrame.startY,
                util.stackFrame.endX,
                util.stackFrame.endY
            ] = [
                    type,
                    Date.now(),
                    parseFloat(time) * 1000,
                    util.target.x,
                    util.target.y,
                    parseFloat(endx),
                    parseFloat(endy)
                ]
            if (util.stackFrame.length <= 0) {
                util.target.setXY(util.stackFrame.endX, util.stackFrame.endY)
                return
            }
            util.yield()
        }
    }

    /**
     * 以指定方式改变角色特效或大小。
     * @param {{type: string, endv: string, Effect: string, time: string}} param0 积木参数。
     * @param {any} util 上下文。
     */
    Effect({ type, endv, Effect, time }, util) {
        if (util.stackFrame.startTime !== undefined) {
            const timeElapsed = Date.now() - util.stackFrame.startTime
            if (timeElapsed < util.stackFrame.length) {
                const method = getMethod(util.stackFrame.type)
                if (method) {
                    const animV = new Animate(method, {
                        start: util.stackFrame.startV,
                        end: util.stackFrame.endV,
                        length: util.stackFrame.length
                    })

                    if (Effect !== "size") {
                        util.target.setEffect(Effect, animV.at(timeElapsed))
                    } else {
                        util.target.setSize(animV.at(timeElapsed))
                    }
                }
                util.yield()
            } else {

                if (Effect !== "size") {
                    util.target.setEffect(Effect, util.stackFrame.endV)
                } else {
                    util.target.setSize(util.stackFrame.endV)
                }
            }
        } else if (Effect !== "size") {
            ;[
                util.stackFrame.type,
                util.stackFrame.startTime,
                util.stackFrame.length,
                util.stackFrame.startV,
                util.stackFrame.endV
            ] = [
                    type,
                    Date.now(),
                    parseFloat(time) * 1000,
                    util.target.effects[Effect],
                    parseFloat(endv)
                ]
            if (util.stackFrame.length <= 0) {
                util.target.setEffect(Effect, util.stackFrame.endV)
                return
            }
            util.yield()
        } else {
            ;[
                util.stackFrame.type,
                util.stackFrame.startTime,
                util.stackFrame.length,
                util.stackFrame.startV,
                util.stackFrame.endV
            ] = [
                    type,
                    Date.now(),
                    parseFloat(time) * 1000,
                    util.target.size,
                    parseFloat(endv)
                ]
            if (util.stackFrame.length <= 0) {
                util.target.setSize(util.stackFrame.endV)
                return
            }
            util.yield()
        }
    }


    /**
     * 获取效果。
     * @param {{Effect: string}} args 效果名称。
     * @param {any} util 上下文。
     * @returns {any} 效果内容。
     */
    getEffect(args, util) {
        if (args.Effect != "size") {
            return util.target.effects[args.Effect]
        } else {
            return util.target.size
        }
    }
}

// @ts-ignore
window.tempExt = {
    Extension: Animator,
    info: {
        name: 'Ani.extensionName',
        description: 'Ani.description',
        extensionId: ani_id,
        iconURL: ani_cover,
        insetIconURL: ani_icon,
        featured: true,
        disabled: false,
        collaborator: '官方小傲娇 @ CCW',
        collaboratorURL: 'https://www.ccw.site/student/62f76ddb49c5dc44ac0c03c0',
        collaboratorList: [
            {
                collaborator: '官方小傲娇 @ CCW',
                collaboratorURL: 'https://www.ccw.site/student/62f76ddb49c5dc44ac0c03c0'
            },
            {
                collaborator: '酷可mc @ CCW',
                collaboratorURL: 'https://www.ccw.site/student/610b508176415b2f27e0f851'
            },
            {
                collaborator: 'YUEN @ CCW',
                collaboratorURL: 'https://www.ccw.site/student/628979aa804a3a2bc801b097'
            },
            {
                collaborator: '白猫 @ CCW',
                collaboratorURL: 'https://www.ccw.site/student/6173f57f48cf8f4796fc860e'
            },
            {
                collaborator: '凌 @ CCW',
                collaboratorURL: 'https://www.ccw.site/student/63ddff9293ebb01fb90efa79'
            }
        ]
    },
    l10n: {
        'zh-cn': {
            'Ani.extensionName': 'Animator',
            'Ani.description': '让你的角色动起来🏃‍♂️'
        },
        en: {
            'Ani.extensionName': 'Animator',
            'Ani.description': 'Make your characters move 🏃‍♂️'
        }
    }
}

/*
Reference(s):
https://easings.net/
https://spicyyoghurt.com/tools/easing-functions
*/
