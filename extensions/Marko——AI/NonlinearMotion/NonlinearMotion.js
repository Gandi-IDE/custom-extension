(function (Scratch) {
    // 定义缓动函数库 - 各种非线性运动曲线
    const easingFunctions = {
        linear: t => t,
        quadraticIn: t => t*t,
        quadraticOut: t => t*(2-t),
        quadraticInOut: t => t<.5 ? 2*t*t : -1+(4-2*t)*t,
        cubicIn: t => t*t*t,
        cubicOut: t => (--t)*t*t+1,
        cubicInOut: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1,
        quarticIn: t => t*t*t*t,
        quarticOut: t => 1-(--t)*t*t*t,
        quarticInOut: t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
        quinticIn: t => t*t*t*t*t,
        quinticOut: t => 1+(--t)*t*t*t*t,
        quinticInOut: t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t,
        sineIn: t => 1-Math.cos(t * Math.PI/2),
        sineOut: t => Math.sin(t * Math.PI/2),
        sineInOut: t => -(Math.cos(Math.PI*t) - 1)/2,
        exponentialIn: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
        exponentialOut: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
        exponentialInOut: t => {
            if (t === 0) return 0;
            if (t === 1) return 1;
            if ((t *= 2) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
            return 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        },
        circularIn: t => 1 - Math.sqrt(1 - t * t),
        circularOut: t => Math.sqrt(1 - (t - 1) * (t - 1)),
        circularInOut: t => {
            if ((t *= 2) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
            return 0.5 * (Math.sqrt(1 - (t - 2) * (t - 2)) + 1);
        },
        // 新增的缓动函数
        backIn: (t) => {
            const c1 = 1.70158;
            const c3 = c1 + 1;
            return c3 * t * t * t - c1 * t * t;
        },
        backOut: (t) => {
            const c1 = 1.70158;
            const c3 = c1 + 1;
            return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
        },
        backInOut: (t) => {
            const c1 = 1.70158;
            const c2 = c1 * 1.525;
            return t < 0.5
                ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
                : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
        },
        elasticIn: (t) => {
            const c4 = (2 * Math.PI) / 3;
            return t === 0
                ? 0
                : t === 1
                    ? 1
                    : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
        },
        elasticOut: (t) => {
            const c4 = (2 * Math.PI) / 3;
            return t === 0
                ? 0
                : t === 1
                    ? 1
                    : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
        },
        elasticInOut: (t) => {
            const c5 = (2 * Math.PI) / 4.5;
            return t === 0
                ? 0
                : t === 1
                    ? 1
                    : t < 0.5
                        ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * c5)) / 2
                        : (Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * c5)) / 2 + 1;
        },
        bounceIn: (t) => 1 - easingFunctions.bounceOut(1 - t),
        bounceOut: (t) => {
            const n1 = 7.5625;
            const d1 = 2.75;
            if (t < 1 / d1) {
                return n1 * t * t;
            } else if (t < 2 / d1) {
                return n1 * (t -= 1.5 / d1) * t + 0.75;
            } else if (t < 2.5 / d1) {
                return n1 * (t -= 2.25 / d1) * t + 0.9375;
            } else {
                return n1 * (t -= 2.625 / d1) * t + 0.984375;
            }
        },
        bounceInOut: (t) => {
            return t < 0.5
                ? (1 - easingFunctions.bounceOut(1 - 2 * t)) / 2
                : (1 + easingFunctions.bounceOut(2 * t - 1)) / 2;
        }
    };

    // 图标定义，图标这里放一份
    const NONLINEAR_MOTION_ICON = "";  // 扩展图标URL这里
    const NONLINEAR_MOTION_picturs = ""; // 背景URL这里

    const ICONS = {
        extension: NONLINEAR_MOTION_ICON,
        moveTo: NONLINEAR_MOTION_ICON,
        circle: NONLINEAR_MOTION_ICON,
        ellipse: NONLINEAR_MOTION_ICON,
        rectangle: NONLINEAR_MOTION_ICON,
        figure8: NONLINEAR_MOTION_ICON,
        spiral: NONLINEAR_MOTION_ICON,
        polygon: NONLINEAR_MOTION_ICON,
        bezier: NONLINEAR_MOTION_ICON,
        pendulum: NONLINEAR_MOTION_ICON,
        spring: NONLINEAR_MOTION_ICON,
        pause: NONLINEAR_MOTION_ICON,
        resume: NONLINEAR_MOTION_ICON,
        stop: NONLINEAR_MOTION_ICON,
        isMoving: NONLINEAR_MOTION_ICON,
        tweenVariable: NONLINEAR_MOTION_ICON
    };

    class NonlinearMotion {
        constructor(runtime) {
            // 确保runtime已定义
            if (!runtime) {
                console.error("Runtime is not defined");
                // 提供一个默认的formatMessage实现作为后备
                this._formatMessage = () => ({ id: '' });
                return;
            }
            
            this.runtime = runtime;
            // 使用对象存储所有角色的运动状态，键为角色ID
            this.activeMotions = Object.create(null);
            // 存储变量补间动画
            this.activeTweens = Object.create(null);
            this.animationFrameId = null;
            this.lastFrameTime = 0;
            
            // 绑定上下文
            this.animate = this.animate.bind(this);
            
            // 初始化本地化消息，包含缓动函数菜单的双语配置
            // 检查runtime是否有getFormatMessage方法
            if (typeof runtime.getFormatMessage !== 'function') {
                console.warn("runtime.getFormatMessage is not a function, using fallback");
                // 提供一个简单的回退实现
                this._formatMessage = () => {
                    return (options) => options.id;
                };
            } else {
                this._formatMessage = runtime.getFormatMessage({
                    "zh-cn": {
                        "nonlinearMotion.extensionName": "非线性运动 pro",
                        "nonlinearMotion.moveTo": "从当前位置非线性[EASING]移动到 x:[X] y:[Y]，持续时间[DURATION]秒，大小[SCALE]%，方向[ROTATION]度",
                        "nonlinearMotion.circle": "非线性[EASING]绕圈，圆心 x:[CENTER_X] y:[CENTER_Y]，半径[RADIUS]，持续时间[DURATION]秒，大小[SCALE]%，方向[ROTATION]度",
                        "nonlinearMotion.ellipse": "非线性[EASING]沿椭圆运动，中心 x:[CENTER_X] y:[CENTER_Y]，横向半径[X_RADIUS]，纵向半径[Y_RADIUS]，持续时间[DURATION]秒，大小[SCALE]%，方向[ROTATION]度",
                        "nonlinearMotion.rectangle": "非线性[EASING]沿矩形运动，左上角 x:[X] y:[Y]，宽[WIDTH]，高[HEIGHT]，持续时间[DURATION]秒，大小[SCALE]%，方向[ROTATION]度",
                        "nonlinearMotion.figure8": "非线性[EASING]沿8字形运动，中心 x:[CENTER_X] y:[CENTER_Y]，横向半径[X_RADIUS]，纵向半径[Y_RADIUS]，持续时间[DURATION]秒，大小[SCALE]%，方向[ROTATION]度",
                        "nonlinearMotion.spiral": "非线性[EASING]沿螺旋运动，中心 x:[CENTER_X] y:[CENTER_Y]，初始半径[START_RADIUS]，最终半径[END_RADIUS]，圈数[TURNS]，持续时间[DURATION]秒，大小[SCALE]%，方向[ROTATION]度",
                        "nonlinearMotion.polygon": "非线性[EASING]沿[POINTS]边形运动，中心 x:[CENTER_X] y:[CENTER_Y]，半径[RADIUS]，持续时间[DURATION]秒，大小[SCALE]%，方向[ROTATION]度",
                        "nonlinearMotion.bezier": "非线性[EASING]沿贝塞尔曲线运动，起点 x1:[X1] y1:[Y1]，控制点 x2:[X2] y2:[Y2]，控制点 x3:[X3] y3:[Y3]，终点 x4:[X4] y4:[Y4]，持续时间[DURATION]秒，大小[SCALE]%，方向[ROTATION]度",
                        "nonlinearMotion.pendulum": "非线性[EASING]钟摆运动，支点 x:[PIVOT_X] y:[PIVOT_Y]，长度[LENGTH]，角度[ANGLE]，持续时间[DURATION]秒，大小[SCALE]%，方向[ROTATION]度",
                        "nonlinearMotion.spring": "非线性[EASING]弹簧运动，起点 x:[START_X] y:[START_Y]，终点 x:[END_X] y:[END_Y]，弹性[BOUNCE]，持续时间[DURATION]秒，大小[SCALE]%，方向[ROTATION]度",
                        "nonlinearMotion.pause": "暂停非线性运动",
                        "nonlinearMotion.resume": "恢复非线性运动",
                        "nonlinearMotion.stop": "停止此角色的非线性运动",
                        "nonlinearMotion.stopAll": "停止所有角色的非线性运动",
                        "nonlinearMotion.isMoving": "正在进行非线性运动?",
                        
                        // 新增的变量补间相关文本
                        "nonlinearMotion.tweenVariable": "将变量[VAR]在[DURATION]秒内使用[EASING]非线性变化到[VALUE]",
                        "nonlinearMotion.property.x": "x坐标",
                        "nonlinearMotion.property.y": "y坐标",
                        "nonlinearMotion.property.direction": "方向",
                        "nonlinearMotion.property.size": "大小",
                        
                        // 缓动函数中文显示文本
                        "easing.linear": "普通平移",
                        "easing.quadraticIn": "二次方缓入",
                        "easing.quadraticOut": "二次方缓出",
                        "easing.quadraticInOut": "二次方缓入缓出",
                        "easing.cubicIn": "三次方缓入",
                        "easing.cubicOut": "三次方缓出",
                        "easing.cubicInOut": "三次方缓入缓出",
                        "easing.quarticIn": "四次方缓入",
                        "easing.quarticOut": "四次方缓出",
                        "easing.quarticInOut": "四次方缓入缓出",
                        "easing.quinticIn": "五次方缓入",
                        "easing.quinticOut": "五次方缓出",
                        "easing.quinticInOut": "五次方缓入缓出",
                        "easing.sineIn": "正弦缓入",
                        "easing.sineOut": "正弦缓出",
                        "easing.sineInOut": "正弦缓入缓出",
                        "easing.exponentialIn": "指数缓入",
                        "easing.exponentialOut": "指数缓出",
                        "easing.exponentialInOut": "指数缓入缓出",
                        "easing.circularIn": "圆形缓入",
                        "easing.circularOut": "圆形缓出",
                        "easing.circularInOut": "圆形缓入缓出",
                        "easing.backIn": "回弹缓入",
                        "easing.backOut": "回弹缓出",
                        "easing.backInOut": "回弹缓入缓出",
                        "easing.elasticIn": "弹性缓入",
                        "easing.elasticOut": "弹性缓出",
                        "easing.elasticInOut": "弹性缓入缓出",
                        "easing.bounceIn": "弹跳缓入",
                        "easing.bounceOut": "弹跳缓出",
                        "easing.bounceInOut": "弹跳缓入缓出"
                    },
                    en: {
                        "nonlinearMotion.extensionName": "Nonlinear Motion Pro",
                        "nonlinearMotion.moveTo": "Move nonlinearly from current position with [EASING] to x:[X] y:[Y] in [DURATION] seconds, size [SCALE]%, direction [ROTATION] degrees",
                        "nonlinearMotion.circle": "Move nonlinearly [EASING] in circle, center x:[CENTER_X] y:[CENTER_Y], radius [RADIUS], duration [DURATION] seconds, size [SCALE]%, direction [ROTATION] degrees",
                        "nonlinearMotion.ellipse": "Move nonlinearly [EASING] in ellipse, center x:[CENTER_X] y:[CENTER_Y], x-radius [X_RADIUS], y-radius [Y_RADIUS], duration [DURATION] seconds, size [SCALE]%, direction [ROTATION] degrees",
                        "nonlinearMotion.rectangle": "Move nonlinearly [EASING] in rectangle, top-left x:[X] y:[Y], width [WIDTH], height [HEIGHT], duration [DURATION] seconds, size [SCALE]%, direction [ROTATION] degrees",
                        "nonlinearMotion.figure8": "Move nonlinearly [EASING] in figure 8, center x:[CENTER_X] y:[CENTER_Y], x-radius [X_RADIUS], y-radius [Y_RADIUS], duration [DURATION] seconds, size [SCALE]%, direction [ROTATION] degrees",
                        "nonlinearMotion.spiral": "Move nonlinearly [EASING] in spiral, center x:[CENTER_X] y:[CENTER_Y], start radius [START_RADIUS], end radius [END_RADIUS], turns [TURNS], duration [DURATION] seconds, size [SCALE]%, direction [ROTATION] degrees",
                        "nonlinearMotion.polygon": "Move nonlinearly [EASING] in [POINTS]-sided polygon, center x:[CENTER_X] y:[CENTER_Y], radius [RADIUS], duration [DURATION] seconds, size [SCALE]%, direction [ROTATION] degrees",
                        "nonlinearMotion.bezier": "Move nonlinearly [EASING] along bezier curve, start x1:[X1] y1:[Y1], control x2:[X2] y2:[Y2], control x3:[X3] y3:[Y3], end x4:[X4] y4:[Y4], duration [DURATION] seconds, size [SCALE]%, direction [ROTATION] degrees",
                        "nonlinearMotion.pendulum": "Move nonlinearly [EASING] as pendulum, pivot x:[PIVOT_X] y:[PIVOT_Y], length [LENGTH], angle [ANGLE], duration [DURATION] seconds, size [SCALE]%, direction [ROTATION] degrees",
                        "nonlinearMotion.spring": "Move nonlinearly [EASING] as spring, start x:[START_X] y:[START_Y], end x:[END_X] y:[END_Y], bounce [BOUNCE], duration [DURATION] seconds, size [SCALE]%, direction [ROTATION] degrees",
                        "nonlinearMotion.pause": "Pause nonlinear motion",
                        "nonlinearMotion.resume": "Resume nonlinear motion",
                        "nonlinearMotion.stop": "Stop this sprite's nonlinear motion",
                        "nonlinearMotion.stopAll": "Stop all sprites' nonlinear motion",
                        "nonlinearMotion.isMoving": "Is nonlinear motion active?",
                        
                        // 新增的变量补间相关文本
                        "nonlinearMotion.tweenVariable": "Tween variable [VAR] to [VALUE] over [DURATION] seconds using [EASING]",
                        "nonlinearMotion.property.x": "x position",
                        "nonlinearMotion.property.y": "y position",
                        "nonlinearMotion.property.direction": "direction",
                        "nonlinearMotion.property.size": "size",
                        
                        // 缓动函数英文显示文本
                        "easing.linear": "Linear",
                        "easing.quadraticIn": "Quadratic In",
                        "easing.quadraticOut": "Quadratic Out",
                        "easing.quadraticInOut": "Quadratic In-Out",
                        "easing.cubicIn": "Cubic In",
                        "easing.cubicOut": "Cubic Out",
                        "easing.cubicInOut": "Cubic In-Out",
                        "easing.quarticIn": "Quartic In",
                        "easing.quarticOut": "Quartic Out",
                        "easing.quarticInOut": "Quartic In-Out",
                        "easing.quinticIn": "Quintic In",
                        "easing.quinticOut": "Quintic Out",
                        "easing.quinticInOut": "Quintic In-Out",
                        "easing.sineIn": "Sine In",
                        "easing.sineOut": "Sine Out",
                        "easing.sineInOut": "Sine In-Out",
                        "easing.exponentialIn": "Exponential In",
                        "easing.exponentialOut": "Exponential Out",
                        "easing.exponentialInOut": "Exponential In-Out",
                        "easing.circularIn": "Circular In",
                        "easing.circularOut": "Circular Out",
                        "easing.circularInOut": "Circular In-Out",
                        "easing.backIn": "Back In",
                        "easing.backOut": "Back Out",
                        "easing.backInOut": "Back In-Out",
                        "easing.elasticIn": "Elastic In",
                        "easing.elasticOut": "Elastic Out",
                        "easing.elasticInOut": "Elastic In-Out",
                        "easing.bounceIn": "Bounce In",
                        "easing.bounceOut": "Bounce Out",
                        "easing.bounceInOut": "Bounce In-Out"
                    }
                });
            }
            
            // 初始化动画循环
            this.initializeAnimationLoop();
        }

        formatMessage(id) {
            return this._formatMessage({
                id,
                default: id,
                description: id
            });
        }

        // 获取变量列表（用于变量补间积木）
        getVariables() {
            const variables =
                typeof Blockly === "undefined"
                    ? []
                    : Blockly.getMainWorkspace()
                        .getVariableMap()
                        .getVariablesOfType("")
                        .map((model) => ({
                            text: model.name,
                            value: model.getId(),
                        }));
            if (variables.length > 0) {
                return variables;
            } else {
                return [{ text: "", value: "" }];
            }
        }

        // 获取缓动菜单选项，根据当前语言显示对应文本
        getEasingOptions() {
            return Object.keys(easingFunctions).map(key => ({
                value: key,
                text: this.formatMessage(`easing.${key}`)
            }));
        }

        // 初始化动画循环
        initializeAnimationLoop() {
            if (!this.animationFrameId) {
                this.lastFrameTime = performance.now();
                this.animationFrameId = requestAnimationFrame(this.animate);
            }
        }

        // 核心动画循环
        animate(currentTime) {
            // 计算时间差，确保动画速度不受帧率影响
            const deltaTime = currentTime - this.lastFrameTime;
            this.lastFrameTime = currentTime;
            
            const completedMotions = [];
            const completedTweens = [];
            
            // 处理角色运动
            for (const targetId in this.activeMotions) {
                const motion = this.activeMotions[targetId];
                
                // 跳过暂停的运动
                if (motion.paused) continue;
                
                // 更新运动进度
                motion.elapsed += deltaTime;
                motion.progress = Math.min(motion.elapsed / (motion.duration * 1000), 1);
                
                // 应用缓动函数
                const easeProgress = easingFunctions[motion.easing](motion.progress);
                
                // 计算新位置
                const { x, y } = motion.calculatePosition(motion, motion.progress, easeProgress);
                
                // 更新大小和方向
                const currentSize = motion.startSize + (motion.scale * 100 - motion.startSize) * easeProgress;
                const currentDirection = motion.startDirection + (motion.rotation - motion.startDirection) * easeProgress;
                
                // 应用变化到角色
                if (motion.util.target && motion.util.target.isValid) {
                    motion.util.target.setXY(x, y);
                    motion.util.target.setSize(currentSize);
                    motion.util.target.setDirection(currentDirection);
                }
                
                // 记录完成的运动
                if (motion.progress >= 1) {
                    completedMotions.push(targetId);
                }
            }
            
            // 处理变量补间
            for (const tweenId in this.activeTweens) {
                const tween = this.activeTweens[tweenId];
                
                // 跳过暂停的补间
                if (tween.paused) continue;
                
                // 更新补间进度
                tween.elapsed += deltaTime;
                tween.progress = Math.min(tween.elapsed / (tween.duration * 1000), 1);
                
                // 应用缓动函数
                const easeProgress = easingFunctions[tween.easing](tween.progress);
                
                // 计算当前值
                const currentValue = tween.startValue + (tween.endValue - tween.startValue) * easeProgress;
                
                // 应用变化
                if (tween.type === 'variable' && tween.variable && tween.variable.isValid) {
                    tween.variable.value = currentValue;
                }
                
                // 记录完成的补间
                if (tween.progress >= 1) {
                    completedTweens.push(tweenId);
                }
            }
            
            // 清理已完成的运动
            completedMotions.forEach(targetId => {
                const motion = this.activeMotions[targetId];
                delete this.activeMotions[targetId];
                if (motion && typeof motion.resolve === 'function') {
                    motion.resolve();
                }
            });
            
            // 清理已完成的补间
            completedTweens.forEach(tweenId => {
                const tween = this.activeTweens[tweenId];
                delete this.activeTweens[tweenId];
                if (tween && typeof tween.resolve === 'function') {
                    tween.resolve();
                }
            });
            
            // 继续循环或停止
            if (Object.keys(this.activeMotions).length > 0 || Object.keys(this.activeTweens).length > 0) {
                this.animationFrameId = requestAnimationFrame(this.animate);
            } else {
                this.animationFrameId = null;
            }
        }

        // 统一的运动处理函数
        runMotion(options) {
            const { type, args, util, calculatePosition, scale, rotation } = options;
            // 使用角色ID作为唯一标识符
            const targetId = util.target.id;
            const easing = args.EASING;
            const duration = Math.max(0.1, Number(args.DURATION));
            
            // 检查缓动函数是否存在
            if (!easingFunctions[easing]) {
                console.error(`未知的缓动函数: ${easing}`);
                return Promise.resolve();
            }
            
            // 存储角色引用并添加有效性检查方法
            const target = util.target;
            target.isValid = () => {
                // 检查角色是否仍然存在于舞台上
                return this.runtime.getTargets().some(t => t.id === targetId);
            };
            
            // 获取初始状态
            const startSize = target.size;
            const startDirection = target.direction;
            
            // 创建运动对象 - 每个角色独立存储
            const motion = {
                type,
                easing,
                duration,
                elapsed: 0, // 使用累计时间而非开始时间，解决暂停恢复问题
                progress: 0,
                paused: false,
                scale: scale / 100,
                rotation: rotation,
                startSize: startSize,
                startDirection: startDirection,
                calculatePosition: calculatePosition,
                util: { ...util, target }, // 复制util对象避免引用问题
                resolve: null
            };
            
            // 根据运动类型设置特定属性
            switch (type) {
                case 'moveTo':
                    motion.startX = target.x;
                    motion.startY = target.y;
                    motion.endX = Number(args.X);
                    motion.endY = Number(args.Y);
                    break;
                case 'circle':
                    motion.centerX = Number(args.CENTER_X);
                    motion.centerY = Number(args.CENTER_Y);
                    motion.radius = Math.max(1, Number(args.RADIUS));
                    break;
                case 'ellipse':
                    motion.centerX = Number(args.CENTER_X);
                    motion.centerY = Number(args.CENTER_Y);
                    motion.xRadius = Math.max(1, Number(args.X_RADIUS));
                    motion.yRadius = Math.max(1, Number(args.Y_RADIUS));
                    break;
                case 'rectangle':
                    motion.x = Number(args.X);
                    motion.y = Number(args.Y);
                    motion.width = Math.max(1, Number(args.WIDTH));
                    motion.height = Math.max(1, Number(args.HEIGHT));
                    break;
                case 'figure8':
                    motion.centerX = Number(args.CENTER_X);
                    motion.centerY = Number(args.CENTER_Y);
                    motion.xRadius = Math.max(1, Number(args.X_RADIUS));
                    motion.yRadius = Math.max(1, Number(args.Y_RADIUS));
                    break;
                case 'spiral':
                    motion.centerX = Number(args.CENTER_X);
                    motion.centerY = Number(args.CENTER_Y);
                    motion.startRadius = Math.max(1, Number(args.START_RADIUS));
                    motion.endRadius = Math.max(1, Number(args.END_RADIUS));
                    motion.turns = Math.max(1, Number(args.TURNS));
                    break;
                case 'polygon':
                    motion.centerX = Number(args.CENTER_X);
                    motion.centerY = Number(args.CENTER_Y);
                    motion.points = Math.max(3, Math.min(12, Math.round(Number(args.POINTS))));
                    motion.radius = Math.max(1, Number(args.RADIUS));
                    break;
                case 'bezier':
                    motion.x1 = Number(args.X1);
                    motion.y1 = Number(args.Y1);
                    motion.x2 = Number(args.X2);
                    motion.y2 = Number(args.Y2);
                    motion.x3 = Number(args.X3);
                    motion.y3 = Number(args.Y3);
                    motion.x4 = Number(args.X4);
                    motion.y4 = Number(args.Y4);
                    break;
                case 'pendulum':
                    motion.pivotX = Number(args.PIVOT_X);
                    motion.pivotY = Number(args.PIVOT_Y);
                    motion.length = Math.max(1, Number(args.LENGTH));
                    motion.angle = Number(args.ANGLE);
                    break;
                case 'spring':
                    motion.startX = Number(args.START_X);
                    motion.startY = Number(args.START_Y);
                    motion.endX = Number(args.END_X);
                    motion.endY = Number(args.END_Y);
                    motion.bounce = Math.max(0, Math.min(1, Number(args.BOUNCE)));
                    break;
            }
            
            // 存储运动
            this.activeMotions[targetId] = motion;
            
            // 确保动画循环运行
            this.initializeAnimationLoop();
            
            // 设置初始位置
            const { x, y } = calculatePosition(motion, 0, 0);
            target.setXY(x, y);
            
            // 返回Promise
            return new Promise(resolve => {
                motion.resolve = resolve;
            });
        }

        // 开始变量补间动画
        tweenVariable(args, util) {
            const variableId = args.VAR;
            if (!variableId) return Promise.resolve();
            
            // 获取变量
            const variable = util.target.lookupVariableById(variableId);
            if (!variable || variable.type !== "") return Promise.resolve();
            
            // 创建唯一的补间ID
            const tweenId = `var_${variableId}_${Date.now()}`;
            const easing = args.EASING;
            const duration = Math.max(0.1, Number(args.DURATION));
            const endValue = Number(args.VALUE);
            
            // 检查缓动函数是否存在
            if (!easingFunctions[easing]) {
                console.error(`未知的缓动函数: ${easing}`);
                return Promise.resolve();
            }
            
            // 添加变量有效性检查
            variable.isValid = () => {
                return util.target.lookupVariableById(variableId) !== null;
            };
            
            // 创建补间对象
            const tween = {
                id: tweenId,
                type: 'variable',
                variable: variable,
                easing: easing,
                duration: duration,
                startValue: Number(variable.value),
                endValue: endValue,
                elapsed: 0,
                progress: 0,
                paused: false,
                util: util,
                resolve: null
            };
            
            // 存储补间
            this.activeTweens[tweenId] = tween;
            
            // 确保动画循环运行
            this.initializeAnimationLoop();
            
            // 返回Promise
            return new Promise(resolve => {
                tween.resolve = resolve;
            });
        }

        // 暂停非线性运动和补间
        pauseNonlinearMotion(args, util) {
            const targetId = util.target.id;
            
            // 暂停角色运动
            const motion = this.activeMotions[targetId];
            if (motion) {
                motion.paused = true;
            }
        }

        // 恢复非线性运动和补间
        resumeNonlinearMotion(args, util) {
            const targetId = util.target.id;
            
            // 恢复角色运动
            const motion = this.activeMotions[targetId];
            if (motion && motion.paused) {
                motion.paused = false;
            }
            
            // 重新启动动画循环（如果已停止）
            this.initializeAnimationLoop();
        }

        // 停止当前角色的非线性运动和补间
        stopNonlinearMotion(args, util) {
            const targetId = util.target.id;
            
            // 停止角色运动
            const motion = this.activeMotions[targetId];
            if (motion) {
                delete this.activeMotions[targetId];
                if (typeof motion.resolve === 'function') {
                    motion.resolve();
                }
            }
            
            // 停止该角色的所有变量补间
            for (const tweenId in this.activeTweens) {
                const tween = this.activeTweens[tweenId];
                if (tween.type === 'variable' && tween.variable && tween.variable.isValid()) {
                    delete this.activeTweens[tweenId];
                    if (typeof tween.resolve === 'function') {
                        tween.resolve();
                    }
                }
            }
        }

        // 停止所有角色的非线性运动和补间
        stopAllNonlinearMotion(args, util) {
            // 停止所有运动
            for (const targetId in this.activeMotions) {
                const motion = this.activeMotions[targetId];
                if (typeof motion.resolve === 'function') {
                    motion.resolve();
                }
            }
            this.activeMotions = Object.create(null);
            
            // 停止所有补间
            for (const tweenId in this.activeTweens) {
                const tween = this.activeTweens[tweenId];
                if (typeof tween.resolve === 'function') {
                    tween.resolve();
                }
            }
            this.activeTweens = Object.create(null);
        }

        // 检查是否正在进行非线性运动
        isMovingNonlinear(args, util) {
            const targetId = util.target.id;
            
            // 检查是否有活跃的运动
            if (this.activeMotions[targetId] && !this.activeMotions[targetId].paused) {
                return true;
            }
            
            return false;
        }

        // 所有运动路径方法
        moveToNonlinear(args, util) {
            return this.runMotion({
                type: 'moveTo',
                args,
                util,
                calculatePosition: (motion, progress, easeProgress) => {
                    return {
                        x: motion.startX + (motion.endX - motion.startX) * easeProgress,
                        y: motion.startY + (motion.endY - motion.startY) * easeProgress
                    };
                },
                scale: Number(args.SCALE),
                rotation: Number(args.ROTATION)
            });
        }

        circleMotion(args, util) {
            return this.runMotion({
                type: 'circle',
                args,
                util,
                calculatePosition: (motion, progress, easeProgress) => {
                    const angle = easeProgress * Math.PI * 2;
                    const x = motion.centerX + Math.cos(angle) * motion.radius;
                    const y = motion.centerY + Math.sin(angle) * motion.radius;
                    return { x, y };
                },
                scale: Number(args.SCALE),
                rotation: Number(args.ROTATION)
            });
        }

        ellipseMotion(args, util) {
            return this.runMotion({
                type: 'ellipse',
                args,
                util,
                calculatePosition: (motion, progress, easeProgress) => {
                    const angle = easeProgress * Math.PI * 2;
                    const x = motion.centerX + Math.cos(angle) * motion.xRadius;
                    const y = motion.centerY + Math.sin(angle) * motion.yRadius;
                    return { x, y };
                },
                scale: Number(args.SCALE),
                rotation: Number(args.ROTATION)
            });
        }

        rectangleMotion(args, util) {
            return this.runMotion({
                type: 'rectangle',
                args,
                util,
                calculatePosition: (motion, progress, easeProgress) => {
                    const pathProgress = easeProgress * 4;
                    const segment = Math.floor(pathProgress);
                    const segmentProgress = pathProgress - segment;
                    
                    let x, y;
                    
                    switch (segment) {
                        case 0: // 上边
                            x = motion.x + segmentProgress * motion.width;
                            y = motion.y;
                            break;
                        case 1: // 右边
                            x = motion.x + motion.width;
                            y = motion.y + segmentProgress * motion.height;
                            break;
                        case 2: // 下边
                            x = motion.x + motion.width - segmentProgress * motion.width;
                            y = motion.y + motion.height;
                            break;
                        case 3: // 左边
                            x = motion.x;
                            y = motion.y + motion.height - segmentProgress * motion.height;
                            break;
                        default:
                            x = motion.x;
                            y = motion.y;
                    }
                    
                    return { x, y };
                },
                scale: Number(args.SCALE),
                rotation: Number(args.ROTATION)
            });
        }

        figure8Motion(args, util) {
            return this.runMotion({
                type: 'figure8',
                args,
                util,
                calculatePosition: (motion, progress, easeProgress) => {
                    const angle = easeProgress * Math.PI * 2;
                    const x = motion.centerX + Math.cos(angle) * motion.xRadius;
                    const y = motion.centerY + Math.sin(angle * 2) * motion.yRadius;
                    return { x, y };
                },
                scale: Number(args.SCALE),
                rotation: Number(args.ROTATION)
            });
        }

        spiralMotion(args, util) {
            return this.runMotion({
                type: 'spiral',
                args,
                util,
                calculatePosition: (motion, progress, easeProgress) => {
                    const angle = easeProgress * Math.PI * 2 * motion.turns;
                    const radius = motion.startRadius + (motion.endRadius - motion.startRadius) * easeProgress;
                    const x = motion.centerX + Math.cos(angle) * radius;
                    const y = motion.centerY + Math.sin(angle) * radius;
                    return { x, y };
                },
                scale: Number(args.SCALE),
                rotation: Number(args.ROTATION)
            });
        }

        polygonMotion(args, util) {
            return this.runMotion({
                type: 'polygon',
                args,
                util,
                calculatePosition: (motion, progress, easeProgress) => {
                    const pathProgress = easeProgress * motion.points;
                    const segment = Math.floor(pathProgress) % motion.points;
                    const segmentProgress = pathProgress - Math.floor(pathProgress);
                    
                    const points = [];
                    for (let i = 0; i < motion.points; i++) {
                        const angle = i * Math.PI * 2 / motion.points - Math.PI / 2;
                        points.push({
                            x: motion.centerX + Math.cos(angle) * motion.radius,
                            y: motion.centerY + Math.sin(angle) * motion.radius
                        });
                    }
                    
                    const startPoint = points[segment];
                    const endPoint = points[(segment + 1) % motion.points];
                    
                    const x = startPoint.x + (endPoint.x - startPoint.x) * segmentProgress;
                    const y = startPoint.y + (endPoint.y - startPoint.y) * segmentProgress;
                    
                    return { x, y };
                },
                scale: Number(args.SCALE),
                rotation: Number(args.ROTATION)
            });
        }

        bezierMotion(args, util) {
            return this.runMotion({
                type: 'bezier',
                args,
                util,
                calculatePosition: (motion, progress, easeProgress) => {
                    const x = Math.pow(1 - easeProgress, 3) * motion.x1 +
                              3 * Math.pow(1 - easeProgress, 2) * easeProgress * motion.x2 +
                              3 * (1 - easeProgress) * Math.pow(easeProgress, 2) * motion.x3 +
                              Math.pow(easeProgress, 3) * motion.x4;
                    
                    const y = Math.pow(1 - easeProgress, 3) * motion.y1 +
                              3 * Math.pow(1 - easeProgress, 2) * easeProgress * motion.y2 +
                              3 * (1 - easeProgress) * Math.pow(easeProgress, 2) * motion.y3 +
                              Math.pow(easeProgress, 3) * motion.y4;
                    
                    return { x, y };
                },
                scale: Number(args.SCALE),
                rotation: Number(args.ROTATION)
            });
        }

        pendulumMotion(args, util) {
            return this.runMotion({
                type: 'pendulum',
                args,
                util,
                calculatePosition: (motion, progress, easeProgress) => {
                    const angle = motion.angle * Math.sin(easeProgress * Math.PI * 2) * Math.PI / 180;
                    const x = motion.pivotX + Math.sin(angle) * motion.length;
                    const y = motion.pivotY + Math.cos(angle) * motion.length;
                    return { x, y };
                },
                scale: Number(args.SCALE),
                rotation: Number(args.ROTATION)
            });
        }

        springMotion(args, util) {
            return this.runMotion({
                type: 'spring',
                args,
                util,
                calculatePosition: (motion, progress, easeProgress) => {
                    const bounce = motion.bounce;
                    const x = motion.startX + (motion.endX - motion.startX) * (easeProgress + bounce * Math.sin(easeProgress * Math.PI * 2));
                    const y = motion.startY + (motion.endY - motion.startY) * (easeProgress + bounce * Math.sin(easeProgress * Math.PI * 2));
                    return { x, y };
                },
                scale: Number(args.SCALE),
                rotation: Number(args.ROTATION)
            });
        }

        getInfo() {
            return {
                id: 'nonlinearMotion',
                name: this.formatMessage('nonlinearMotion.extensionName'),
                blockIconURI: ICONS.extension,
                blocks: [
                    // 变量补间积木
                    {
                        opcode: 'tweenVariable',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.tweenVariable'),
                        arguments: {
                            VAR: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'vars',
                            },
                            VALUE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            DURATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            EASING: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'easingMenu',
                                defaultValue: 'quadraticInOut'
                            }
                        },
                        blockIconURI: ICONS.tweenVariable
                    },
                    
                    // 原有运动路径积木
                    {
                        opcode: 'moveToNonlinear',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.moveTo'),
                        arguments: {
                            EASING: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'easingMenu',
                                defaultValue: 'quadraticInOut'
                            },
                            X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            DURATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            SCALE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            ROTATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        blockIconURI: ICONS.moveTo
                    },
                    {
                        opcode: 'circleMotion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.circle'),
                        arguments: {
                            EASING: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'easingMenu',
                                defaultValue: 'quadraticInOut'
                            },
                            CENTER_X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            CENTER_Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            RADIUS: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 50
                            },
                            DURATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            },
                            SCALE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            ROTATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        blockIconURI: ICONS.circle
                    },
                    {
                        opcode: 'ellipseMotion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.ellipse'),
                        arguments: {
                            EASING: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'easingMenu',
                                defaultValue: 'quadraticInOut'
                            },
                            CENTER_X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            CENTER_Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            X_RADIUS: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 80
                            },
                            Y_RADIUS: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 50
                            },
                            DURATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 3
                            },
                            SCALE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            ROTATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        blockIconURI: ICONS.ellipse
                    },
                    {
                        opcode: 'rectangleMotion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.rectangle'),
                        arguments: {
                            EASING: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'easingMenu',
                                defaultValue: 'quadraticInOut'
                            },
                            X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: -50
                            },
                            Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: -50
                            },
                            WIDTH: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            HEIGHT: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            DURATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 3
                            },
                            SCALE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            ROTATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        blockIconURI: ICONS.rectangle
                    },
                    {
                        opcode: 'figure8Motion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.figure8'),
                        arguments: {
                            EASING: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'easingMenu',
                                defaultValue: 'quadraticInOut'
                            },
                            CENTER_X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            CENTER_Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            X_RADIUS: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 80
                            },
                            Y_RADIUS: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 50
                            },
                            DURATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 3
                            },
                            SCALE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            ROTATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        blockIconURI: ICONS.figure8
                    },
                    {
                        opcode: 'spiralMotion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.spiral'),
                        arguments: {
                            EASING: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'easingMenu',
                                defaultValue: 'quadraticInOut'
                            },
                            CENTER_X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            CENTER_Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            START_RADIUS: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 80
                            },
                            END_RADIUS: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 10
                            },
                            TURNS: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 3
                            },
                            DURATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 4
                            },
                            SCALE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            ROTATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        blockIconURI: ICONS.spiral
                    },
                    {
                        opcode: 'polygonMotion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.polygon'),
                        arguments: {
                            EASING: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'easingMenu',
                                defaultValue: 'quadraticInOut'
                            },
                            CENTER_X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            CENTER_Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            POINTS: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 5,
                                min: 3,
                                max: 12
                            },
                            RADIUS: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 60
                            },
                            DURATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 4
                            },
                            SCALE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            ROTATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        blockIconURI: ICONS.polygon
                    },
                    {
                        opcode: 'bezierMotion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.bezier'),
                        arguments: {
                            EASING: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'easingMenu',
                                defaultValue: 'quadraticInOut'
                            },
                            X1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            Y1: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            X2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 50
                            },
                            Y2: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: -50
                            },
                            X3: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            Y3: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 50
                            },
                            X4: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 150
                            },
                            Y4: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            DURATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 3
                            },
                            SCALE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            ROTATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        blockIconURI: ICONS.bezier
                    },
                    {
                        opcode: 'pendulumMotion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.pendulum'),
                        arguments: {
                            EASING: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'easingMenu',
                                defaultValue: 'quadraticInOut'
                            },
                            PIVOT_X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            PIVOT_Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: -50
                            },
                            LENGTH: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            ANGLE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 60
                            },
                            DURATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            },
                            SCALE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            ROTATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        blockIconURI: ICONS.pendulum
                    },
                    {
                        opcode: 'springMotion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.spring'),
                        arguments: {
                            EASING: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'easingMenu',
                                defaultValue: 'quadraticInOut'
                            },
                            START_X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            START_Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            END_X: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            END_Y: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            },
                            BOUNCE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0.5,
                                min: 0,
                                max: 1
                            },
                            DURATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 2
                            },
                            SCALE: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 100
                            },
                            ROTATION: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 0
                            }
                        },
                        blockIconURI: ICONS.spring
                    },
                    
                    // 控制积木
                    {
                        opcode: 'pauseNonlinearMotion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.pause'),
                        blockIconURI: ICONS.pause
                    },
                    {
                        opcode: 'resumeNonlinearMotion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.resume'),
                        blockIconURI: ICONS.resume
                    },
                    {
                        opcode: 'stopNonlinearMotion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.stop'),
                        blockIconURI: ICONS.stop
                    },
                    {
                        opcode: 'stopAllNonlinearMotion',
                        blockType: Scratch.BlockType.COMMAND,
                        text: this.formatMessage('nonlinearMotion.stopAll'),
                        blockIconURI: ICONS.stop
                    },
                    {
                        opcode: 'isMovingNonlinear',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: this.formatMessage('nonlinearMotion.isMoving'),
                        blockIconURI: ICONS.isMoving
                    }
                ],
                menus: {
                    easingMenu: {
                        items: this.getEasingOptions()
                    },
                    vars: {
                        acceptReporters: false,
                        items: "getVariables"
                    }
                }
            };
        }
    }

    // 注册扩展 - 确保传递runtime
    Scratch.extensions.register(new NonlinearMotion(Scratch.vm.runtime));

    /// 测试环境配置
    window.tempExt = {
        Extension: NonlinearMotion,
        info: {
            name: 'nonlinearMotion.extensionName',
            description: 'nonlinearMotion.description',
            extensionId: 'nonlinearMotion',
            featured: true,
            disabled: false,
            iconURL: NONLINEAR_MOTION_picturs,
            insetIconURL: NONLINEAR_MOTION_ICON,
            collaborator: 'Marko_AI@CCW',
            collaboratorURL: 'https://www.ccw.site/student/60bed1fb053f0666d7e373ff'
        },
        l10n: {
            'zh-cn': {
                'nonlinearMotion.extensionName': '非线性运动 pro',
                'nonlinearMotion.description': '提供多种非线性运动效果，包括直线、圆形、椭圆等路径，以及变量的非线性变化',
            },
            en: {
                'nonlinearMotion.extensionName': 'Nonlinear Motion Pro',
                'nonlinearMotion.description': 'Provides various nonlinear motion effects, including linear, circular, elliptical paths, and nonlinear changes of variables',
            },
        },
    }
})(Scratch);
