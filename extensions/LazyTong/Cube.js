const t = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDgwIDgwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiPjxzdHlsZT4uYXtmaWxsOiNlNjJ9LmJ7ZmlsbDojNmMwfS5je2ZpbGw6IzYzNn0uZHtmaWxsOiNlZDB9LmV7ZmlsbDojMzkwfTwvc3R5bGU+PHBhdGggY2xhc3M9ImEiIGQ9Im0xMS43IDIyLjNsMjguNi0xMy40djM1LjJsLTI4LjYgMTMuM3oiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTY4LjMgMjIuNmwtMjgtMTMuN3YzNS4ybDI4IDEzLjZ6Ii8+PHBhdGggY2xhc3M9ImMiIGQ9Im0zOS43IDcxLjFsLTI4LTEzLjcgMjguNi0xMy4zIDI4IDEzLjZ6Ii8+PHBhdGggY2xhc3M9ImQiIGQ9Im02OC4zIDIyLjZsLTI4LTEzLjctMjguNiAxMy40IDI4IDEzLjZ6Ii8+PHBhdGggY2xhc3M9ImIiIGQ9Im0xMS43IDIyLjNsMjggMTMuNnYzNS4ybC0yOC0xMy43eiIvPjxwYXRoIGNsYXNzPSJlIiBkPSJtNjguMyAyMi42bC0yOC42IDEzLjN2MzUuMmwyOC42LTEzLjR6Ii8+PC9zdmc+";
void (window.tempExt = {
    Extension: class {
        constructor(e) {
            this.objectList = {}, this.observer = null, this.runtime = e, this.canvas = () => {
                try {
                    const {
                        canvas: e
                    } = this.runtime.renderer;
                    if (e instanceof HTMLCanvasElement) return e
                } catch (e) {
                    return null
                }
                return null
            }, this.cubeParent = () => {
                try {
                    const {
                        canvas: e
                    } = this.runtime.renderer;
                    if (e instanceof HTMLCanvasElement) return e.parentElement
                } catch (e) {
                    return console.error(e), null
                }
                return null
            }, this.Cube = function () {
                console.log("%cLazyTong's Cube\n----------\n       　  　▃▆█▇▄▖\n　 　 　 ▟◤▖　　　◥█▎\n   　 ◢◤　 ▐　　　 　▐▉\n　 ▗◤　　　▂　▗▖　　▕█▎\n　◤　▗▅▖◥▄　▀◣　　█▊\n▐　▕▎◥▖◣◤　　　　◢██\n█◣　◥▅█▀　　　　▐██◤\n▐█▙▂　　     　◢██◤\n◥██◣　　　　◢▄◤\n 　　▀██▅▇▀\n----------\nVer 1.2\nhttps://lt.js.org ", "color:green;font-weight:bolder");
                let p = 2 * Math.PI,
                    n = function (e, t) {
                        for (let a in t) e[a] = t[a];
                        return e
                    },
                    i = function (e, t, a) {
                        return (t - e) * a + e
                    },
                    c = function (a, e) {
                        return (a % e + e) % e
                    },
                    s = function () {
                    },
                    o = {};
                o.begin = function (e) {
                    e.beginPath()
                }, o.move = function (e, t, a) {
                    e.moveTo(a.x, a.y)
                }, o.line = function (e, t, a) {
                    e.lineTo(a.x, a.y)
                }, o.bezier = function (a, r, o, d, e) {
                    a.bezierCurveTo(o.x, o.y, d.x, d.y, e.x, e.y)
                }, o.closePath = function (e) {
                    e.closePath()
                }, o.setPath = function () {
                }, o.renderPath = function (d, a, t, r) {
                    this.begin(d, a), t.forEach(function (e) {
                        e.render(d, a, o)
                    }), r && this.closePath(d, a)
                }, o.stroke = function (a, r, o, d, e) {
                    o && (a.strokeStyle = d, a.lineWidth = e, a.stroke())
                }, o.fill = function (t, a, r, o) {
                    r && (t.fillStyle = o, t.fill())
                }, o.end = function () {
                };
                let N = function (e) {
                    this.set(e)
                };
                N.prototype.set = function (e) {
                    return this.x = e && e.x || 0, this.y = e && e.y || 0, this.z = e && e.z || 0, this
                }, N.prototype.write = function (e) {
                    return e ? (this.x = null == e.x ? this.x : e.x, this.y = null == e.y ? this.y : e.y, this.z = null == e.z ? this.z : e.z, this) : this
                }, N.prototype.rotate = function (e) {
                    if (e) return this.rotateZ(e.z), this.rotateY(e.y), this.rotateX(e.x), this
                }, N.prototype.rotateZ = function (e) {
                    R(this, e, "x", "y")
                }, N.prototype.rotateX = function (e) {
                    R(this, e, "y", "z")
                }, N.prototype.rotateY = function (e) {
                    R(this, e, "x", "z")
                };
                let R = function (T, l, a, e) {
                    if (l && 0 !== l % p) {
                        let t = Math.cos(l),
                            r = Math.sin(l),
                            o = T[a],
                            d = T[e];
                        T[a] = o * t - d * r, T[e] = d * t + o * r
                    }
                };
                N.prototype.isSame = function (e) {
                    return !!e && this.x === e.x && this.y === e.y && this.z === e.z
                }, N.prototype.add = function (e) {
                    return e ? (this.x += e.x || 0, this.y += e.y || 0, this.z += e.z || 0, this) : this
                }, N.prototype.subtract = function (e) {
                    return e ? (this.x -= e.x || 0, this.y -= e.y || 0, this.z -= e.z || 0, this) : this
                }, N.prototype.multiply = function (e) {
                    return null == e ? this : ("number" == typeof e ? (this.x *= e, this.y *= e, this.z *= e) : (this.x *= null == e.x ? 1 : e.x, this.y *= null == e.y ? 1 : e.y, this.z *= null == e.z ? 1 : e.z), this)
                }, N.prototype.transform = function (e, t, a) {
                    return this.multiply(a), this.rotate(t), this.add(e), this
                }, N.prototype.lerp = function (a, e) {
                    return this.x = i(this.x, a.x || 0, e), this.y = i(this.y, a.y || 0, e), this.z = i(this.z, a.z || 0, e), this
                }, N.prototype.magnitude = function () {
                    let e = this.x * this.x + this.y * this.y + this.z * this.z;
                    return u(e)
                };
                let u = function (e) {
                    return 1e-8 > Math.abs(e - 1) ? 1 : Math.sqrt(e)
                };
                N.prototype.magnitude2d = function () {
                    let e = this.x * this.x + this.y * this.y;
                    return u(e)
                }, N.prototype.copy = function () {
                    return new N(this)
                };
                let r = {
                        x: 1,
                        y: 1,
                        z: 1
                    },
                    a = function (e) {
                        this.create(e || {})
                    };
                a.prototype.create = function (e) {
                    this.children = [], n(this, this.constructor.defaults), this.setOptions(e), this.translate = new N(e.translate), this.rotate = new N(e.rotate), this.scale = new N(r).multiply(this.scale), this.origin = new N, this.renderOrigin = new N, this.addTo && this.addTo.addChild(this)
                }, a.defaults = {}, a.optionKeys = Object.keys(a.defaults).concat(["rotate", "translate", "scale", "addTo"]), a.prototype.setOptions = function (e) {
                    let t = this.constructor.optionKeys;
                    for (let a in e) -1 !== t.indexOf(a) && (this[a] = e[a])
                }, a.prototype.addChild = function (e) {
                    -1 !== this.children.indexOf(e) || (e.remove(), e.addTo = this, this.children.push(e))
                }, a.prototype.removeChild = function (a) {
                    let e = this.children.indexOf(a);
                    -1 != e && this.children.splice(e, 1)
                }, a.prototype.remove = function () {
                    this.addTo && this.addTo.removeChild(this)
                }, a.prototype.update = function () {
                    this.reset(), this.children.forEach(function (e) {
                        e.update()
                    }), this.transform(this.translate, this.rotate, this.scale)
                }, a.prototype.reset = function () {
                    this.renderOrigin.set(this.origin)
                }, a.prototype.transform = function (t, a, r) {
                    this.renderOrigin.transform(t, a, r), this.children.forEach(function (o) {
                        o.transform(t, a, r)
                    })
                }, a.prototype.updateGraph = function () {
                    this.update(), this.updateFlatGraph(), this.flatGraph.forEach(function (e) {
                        e.updateSortValue()
                    }), this.flatGraph.sort(a.shapeSorter)
                }, a.shapeSorter = function (a, e) {
                    return a.sortValue - e.sortValue
                }, Object.defineProperty(a.prototype, "flatGraph", {
                    get: function () {
                        return this._flatGraph || this.updateFlatGraph(), this._flatGraph
                    },
                    set: function (e) {
                        this._flatGraph = e
                    }
                }), a.prototype.updateFlatGraph = function () {
                    this.flatGraph = this.getFlatGraph()
                }, a.prototype.getFlatGraph = function () {
                    let e = [this];
                    return this.addChildFlatGraph(e)
                }, a.prototype.addChildFlatGraph = function (e) {
                    return this.children.forEach(function (t) {
                        let a = t.getFlatGraph();
                        Array.prototype.push.apply(e, a)
                    }), e
                }, a.prototype.updateSortValue = function () {
                    this.sortValue = this.renderOrigin.z
                }, a.prototype.render = function () {
                }, a.prototype.renderGraphCanvas = function (a) {
                    if (!a) throw new Error("[Cube]未提供渲染上下文");
                    this.flatGraph.forEach(function (e) {
                        e.render(a, o)
                    })
                }, a.prototype.copy = function (e) {
                    let a = {},
                        r = this.constructor.optionKeys;
                    r.forEach(function (e) {
                        a[e] = this[e]
                    }, this), n(a, e);
                    let o = this.constructor;
                    return new o(a)
                }, a.prototype.copyGraph = function (e) {
                    let a = this.copy(e);
                    return this.children.forEach(function (e) {
                        e.copyGraph({
                            addTo: a
                        })
                    }), a
                }, a.prototype.normalizeRotate = function () {
                    this.rotate.x = c(this.rotate.x, p), this.rotate.y = c(this.rotate.y, p), this.rotate.z = c(this.rotate.z, p)
                };
                let d = function (e) {
                    return function (a) {
                        let r = function (e) {
                            this.create(e || {})
                        };
                        return r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.defaults = n({}, e.defaults), n(r.defaults, a), r.optionKeys = e.optionKeys.slice(0), Object.keys(r.defaults).forEach(function (t) {
                            1 !== !r.optionKeys.indexOf(t) && r.optionKeys.push(t)
                        }), r.subclass = d(r), r
                    }
                };
                a.subclass = d(a);
                let T = "undefined" != typeof window,
                    e = "mousedown",
                    k = "mousemove",
                    S = "mouseup";
                T && (window.PointerEvent ? (e = "pointerdown", k = "pointermove", S = "pointerup") : "ontouchstart" in window && (e = "touchstart", k = "touchmove", S = "touchend"));
                let j = function (e) {
                    this.create(e || {})
                };
                j.prototype.create = function (t) {
                    this.onDragStart = t.onDragStart || s, this.onDragMove = t.onDragMove || s, this.onDragEnd = t.onDragEnd || s, this.bindDrag(t.startElement)
                }, j.prototype.bindDrag = function (t) {
                    t = this.getQueryElement(t), t && (t.style.touchAction = "none", t.addEventListener(e, this))
                }, j.prototype.getQueryElement = function (e) {
                    return "string" == typeof e && (e = document.querySelector(e)), e
                }, j.prototype.handleEvent = function (a) {
                    let e = this["on" + a.type];
                    e && e.call(this, a)
                }, j.prototype.onmousedown = j.prototype.onpointerdown = function (e) {
                    this.dragStart(e, e)
                }, j.prototype.ontouchstart = function (e) {
                    this.dragStart(e, e.changedTouches[0])
                }, j.prototype.dragStart = function (e, t) {
                    e.preventDefault(), this.dragStartX = t.pageX, this.dragStartY = t.pageY, T && (window.addEventListener(k, this), window.addEventListener(S, this)), this.onDragStart(t)
                }, j.prototype.ontouchmove = function (e) {
                    this.dragMove(e, e.changedTouches[0])
                }, j.prototype.onmousemove = j.prototype.onpointermove = function (e) {
                    this.dragMove(e, e)
                }, j.prototype.dragMove = function (t, a) {
                    t.preventDefault();
                    let r = a.pageX - this.dragStartX,
                        o = a.pageY - this.dragStartY;
                    this.onDragMove(a, r, o)
                }, j.prototype.onmouseup = j.prototype.onpointerup = j.prototype.ontouchend = j.prototype.dragEnd = function () {
                    window.removeEventListener(k, this), window.removeEventListener(S, this), this.onDragEnd()
                };
                let G = a.subclass({
                    element: void 0,
                    centered: true,
                    zoom: 1,
                    dragRotate: false,
                    resize: false,
                    onPrerender: s,
                    onDragStart: s,
                    onDragMove: s,
                    onDragEnd: s,
                    onResize: s
                });
                n(G.prototype, j.prototype), G.prototype.create = function (e) {
                    a.prototype.create.call(this, e), j.prototype.create.call(this, e), this.setElement(this.element), this.setDragRotate(this.dragRotate), this.setResize(this.resize)
                }, G.prototype.setElement = function (e) {
                    if (!this.element) throw new Error("[Cube]未指定元素");
                    this.setCanvas(e)
                }, G.prototype.setSize = function (e, t) {
                    e = Math.round(e), t = Math.round(t), this.setSizeCanvas(e, t)
                }, G.prototype.setResize = function (e) {
                    this.resize = e, this.resizeListener || (this.resizeListener = this.onWindowResize.bind(this)), e ? (window.addEventListener("resize", this.resizeListener), this.onWindowResize()) : window.removeEventListener("resize", this.resizeListener)
                }, G.prototype.onWindowResize = function () {
                    this.setMeasuredSize(), this.onResize(this.width, this.height)
                }, G.prototype.setMeasuredSize = function () {
                    let t, a, e = "fullscreen" === this.resize;
                    if (e) t = window.innerWidth, a = window.innerHeight;
                    else {
                        let r = this.element.getBoundingClientRect();
                        t = r.width, a = r.height
                    }
                    this.setSize(t, a)
                }, G.prototype.renderGraph = function (e) {
                    this.renderGraphCanvas(e)
                }, G.prototype.updateRenderGraph = function (e) {
                    this.updateGraph(), this.renderGraph(e)
                }, G.prototype.setCanvas = function (e) {
                    this.element = e, this.ctx = this.element.getContext("2d"), this.setSizeCanvas(e.width, e.height)
                }, G.prototype.setSizeCanvas = function (t, a) {
                    this.width = t, this.height = a;
                    let r = this.pixelRatio = window.devicePixelRatio || 1;
                    this.element.width = this.canvasWidth = t * r, this.element.height = this.canvasHeight = a * r;
                    let o = 1 < r && !this.resize;
                    o && (this.element.style.width = t + "px", this.element.style.height = a + "px")
                }, G.prototype.renderGraphCanvas = function (e) {
                    e = e || this, this.prerenderCanvas(), a.prototype.renderGraphCanvas.call(e, this.ctx), this.postrenderCanvas()
                }, G.prototype.prerenderCanvas = function () {
                    let r = this.ctx;
                    if (r.lineCap = "round", r.lineJoin = "round", r.clearRect(0, 0, this.canvasWidth, this.canvasHeight), r.save(), this.centered) {
                        let e = this.width / 2 * this.pixelRatio,
                            t = this.height / 2 * this.pixelRatio;
                        r.translate(e, t)
                    }
                    let t = this.pixelRatio * this.zoom;
                    r.scale(t, t), this.onPrerender(r)
                }, G.prototype.postrenderCanvas = function () {
                    this.ctx.restore()
                }, G.prototype.setDragRotate = function (e) {
                    e && (true === e && (e = this), this.dragRotate = e, this.bindDrag(this.element))
                }, G.prototype.dragStart = function () {
                    this.dragStartRX = this.dragRotate.rotate.x, this.dragStartRY = this.dragRotate.rotate.y, j.prototype.dragStart.apply(this, arguments)
                }, G.prototype.dragMove = function (r, o) {
                    let d = o.pageX - this.dragStartX,
                        e = o.pageY - this.dragStartY,
                        t = Math.min(this.width, this.height);
                    this.dragRotate.rotate.x = this.dragStartRX - e / t * p, this.dragRotate.rotate.y = this.dragStartRY - d / t * p, j.prototype.dragMove.apply(this, arguments)
                };
                let D = function (e) {
                    return e instanceof N ? e : new N(e)
                }, M = function (e) {
                    return new N(e)
                }, w = function (e, t, a) {
                    this.method = e, this.points = t.map(D), this.renderPoints = t.map(M), this.previousPoint = this.endRenderPoint = this.renderPoints[this.renderPoints.length - 1], "arc" === e && (this.controlPoints = [new N, new N])
                };
                w.prototype.reset = function () {
                    let t = this.points;
                    this.renderPoints.forEach(function (a, r) {
                        let o = t[r];
                        a.set(o)
                    })
                }, w.prototype.transform = function (t, a, r) {
                    this.renderPoints.forEach(function (o) {
                        o.transform(t, a, r)
                    })
                }, w.prototype.render = function (e, t, a) {
                    return this[this.method](e, t, a)
                }, w.prototype.move = function (e, t, a) {
                    return a.move(e, t, this.renderPoints[0])
                }, w.prototype.line = function (e, t, a) {
                    return a.line(e, t, this.renderPoints[0])
                }, w.prototype.bezier = function (r, o, d) {
                    let l = this.renderPoints[0],
                        e = this.renderPoints[1],
                        t = this.renderPoints[2];
                    return d.bezier(r, o, l, e, t)
                };
                let V = 9 / 16;
                w.prototype.arc = function (d, p, T) {
                    let l = this.previousPoint,
                        e = this.renderPoints[0],
                        t = this.renderPoints[1],
                        a = this.controlPoints[0],
                        r = this.controlPoints[1];
                    return a.set(l).lerp(e, V), r.set(t).lerp(e, V), T.bezier(d, p, a, r, t)
                };
                let E = a.subclass({
                    stroke: 1,
                    fill: false,
                    color: "#333",
                    closed: true,
                    visible: true,
                    path: [{}],
                    front: {
                        z: 1
                    },
                    backface: true
                });
                E.prototype.create = function (e) {
                    this.path = e.path;
                    a.prototype.create.call(this, e);
                    this.updatePath();
                    this.front = new N(e.front || this.front);
                    this.renderFront = new N(this.front);
                    this.renderNormal = new N
                };
                let m = ["move", "line", "bezier", "arc"];
                E.prototype.updatePath = function () {
                    this.setPath(), this.updatePathCommands()
                }, E.prototype.setPath = function () {
                }, E.prototype.updatePathCommands = function () {
                    let a;
                    this.pathCommands = this.path.map(function (r, o) {
                        let d = Object.keys(r),
                            e = d[0],
                            T = r[e],
                            n = 1 === d.length && -1 !== m.indexOf(e);
                        n || (e = "line", T = r);
                        let c = "line" === e || "move" === e,
                            i = Array.isArray(T);
                        c && !i && (T = [T]), e = 0 === o ? "move" : e;
                        return new w(e, T)
                    })
                }, E.prototype.reset = function () {
                    this.renderOrigin.set(this.origin), this.renderFront.set(this.front), this.pathCommands.forEach(function (e) {
                        e.reset()
                    })
                }, E.prototype.transform = function (t, a, r) {
                    this.renderOrigin.transform(t, a, r), this.renderFront.transform(t, a, r), this.renderNormal.set(this.renderOrigin).subtract(this.renderFront), this.pathCommands.forEach(function (o) {
                        o.transform(t, a, r)
                    }), this.children.forEach(function (o) {
                        o.transform(t, a, r)
                    })
                }, E.prototype.updateSortValue = function () {
                    let t = this.pathCommands.length,
                        a = this.pathCommands[0].endRenderPoint,
                        o = this.pathCommands[t - 1].endRenderPoint,
                        e = 2 < t && a.isSame(o);
                    e && (t -= 1);
                    let d = 0;
                    for (let a = 0; a < t; a++) d += this.pathCommands[a].endRenderPoint.z;
                    this.sortValue = d / t
                }, E.prototype.render = function (e, t) {
                    let a = this.pathCommands.length;
                    if (this.visible && a && (this.isFacingBack = 0 < this.renderNormal.z, this.backface || !this.isFacingBack)) {
                        if (!t) throw new Error("[Cube]未提供渲染器");
                        1 === a ? this.renderCanvasDot(e, t) : this.renderPath(e, t)
                    }
                }, E.prototype.renderCanvasDot = function (t) {
                    let a = this.getLineWidth();
                    if (a) {
                        t.fillStyle = this.getRenderColor();
                        let r = this.pathCommands[0].endRenderPoint;
                        t.beginPath(), t.arc(r.x, r.y, a / 2, 0, p), t.fill()
                    }
                }, E.prototype.getLineWidth = function () {
                    return this.stroke ? true === this.stroke ? 1 : this.stroke : 0
                }, E.prototype.getRenderColor = function () {
                    let a = "string" == typeof this.backface && this.isFacingBack,
                        e = a ? this.backface : this.color;
                    return e
                }, E.prototype.renderPath = function (r, o) {
                    let d, l = 2 === this.pathCommands.length && "line" === this.pathCommands[1].method,
                        e = !l && this.closed,
                        t = this.getRenderColor();
                    o.renderPath(r, d, this.pathCommands, e), o.stroke(r, d, this.stroke, t, this.getLineWidth()), o.fill(r, d, this.fill, t), o.end(r, d)
                };
                let y = a.subclass({
                    updateSort: false,
                    visible: true
                });
                y.prototype.updateSortValue = function () {
                    let r = 0;
                    this.flatGraph.forEach(function (e) {
                        e.updateSortValue(), r += e.sortValue
                    }), this.sortValue = r / this.flatGraph.length, this.updateSort && this.flatGraph.sort(a.shapeSorter)
                }, y.prototype.render = function (e, t) {
                    this.visible && this.flatGraph.forEach(function (a) {
                        a.render(e, t)
                    })
                }, y.prototype.updateFlatGraph = function () {
                    this.flatGraph = this.addChildFlatGraph([])
                }, y.prototype.getFlatGraph = function () {
                    return [this]
                };
                let h = E.subclass({
                    width: 1,
                    height: 1
                });
                h.prototype.setPath = function () {
                    let a = this.width / 2,
                        e = this.height / 2;
                    this.path = [{
                        x: -a,
                        y: -e
                    }, {
                        x: a,
                        y: -e
                    }, {
                        x: a,
                        y: e
                    }, {
                        x: -a,
                        y: e
                    }]
                };
                let U = E.subclass({
                    width: 1,
                    height: 1,
                    cornerRadius: .25,
                    closed: false
                });
                U.prototype.setPath = function () {
                    let o = this.width / 2,
                        d = this.height / 2,
                        l = Math.min(o, d),
                        p = Math.min(this.cornerRadius, l),
                        e = o - p,
                        t = d - p,
                        a = [{
                            x: e,
                            y: -d
                        }, {
                            arc: [{
                                x: o,
                                y: -d
                            }, {
                                x: o,
                                y: -t
                            }]
                        }];
                    t && a.push({
                        x: o,
                        y: t
                    }), a.push({
                        arc: [{
                            x: o,
                            y: d
                        }, {
                            x: e,
                            y: d
                        }]
                    }), e && a.push({
                        x: -e,
                        y: d
                    }), a.push({
                        arc: [{
                            x: -o,
                            y: d
                        }, {
                            x: -o,
                            y: t
                        }]
                    }), t && a.push({
                        x: -o,
                        y: -t
                    }), a.push({
                        arc: [{
                            x: -o,
                            y: -d
                        }, {
                            x: -e,
                            y: -d
                        }]
                    }), e && a.push({
                        x: e,
                        y: -d
                    }), this.path = a
                };
                let X = E.subclass({
                    diameter: 1,
                    width: void 0,
                    height: void 0,
                    quarters: 4,
                    closed: false
                });
                X.prototype.setPath = function () {
                    let t = null == this.width ? this.diameter : this.width,
                        a = null == this.height ? this.diameter : this.height,
                        r = t / 2,
                        o = a / 2;
                    this.path = [{
                        x: 0,
                        y: -o
                    }, {
                        arc: [{
                            x: r,
                            y: -o
                        }, {
                            x: r,
                            y: 0
                        }]
                    }], 1 < this.quarters && this.path.push({
                        arc: [{
                            x: r,
                            y: o
                        }, {
                            x: 0,
                            y: o
                        }]
                    }), 2 < this.quarters && this.path.push({
                        arc: [{
                            x: -r,
                            y: o
                        }, {
                            x: -r,
                            y: 0
                        }]
                    }), 3 < this.quarters && this.path.push({
                        arc: [{
                            x: -r,
                            y: -o
                        }, {
                            x: 0,
                            y: -o
                        }]
                    })
                };
                let z = E.subclass({
                    sides: 3,
                    radius: .5
                });
                z.prototype.setPath = function () {
                    this.path = [];
                    for (let a = 0; a < this.sides; a++) {
                        let r = a / this.sides * p - p / 4,
                            o = Math.cos(r) * this.radius,
                            e = Math.sin(r) * this.radius;
                        this.path.push({
                            x: o,
                            y: e
                        })
                    }
                };
                let b = X.subclass({
                    fill: true
                });
                b.prototype.create = function () {
                    X.prototype.create.apply(this, arguments), this.apex = new a({
                        addTo: this,
                        translate: {
                            z: this.diameter / 2
                        }
                    }), this.renderCentroid = new N
                }, b.prototype.updateSortValue = function () {
                    this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin, 3 / 8), this.sortValue = this.renderCentroid.z
                }, b.prototype.render = function (a, e) {
                    this.renderDome(a, e), X.prototype.render.apply(this, arguments)
                }, b.prototype.renderDome = function (o, d) {
                    if (this.visible) {
                        let l = this.getDomeRenderElement(o, d),
                            p = Math.atan2(this.renderNormal.y, this.renderNormal.x),
                            e = this.diameter / 2 * this.renderNormal.magnitude(),
                            t = this.renderOrigin.x,
                            a = this.renderOrigin.y;
                        d.stroke(o, l, this.stroke, this.color, this.getLineWidth()), d.fill(o, l, this.fill, this.color), d.end(o, l)
                    }
                };
                let g = y.subclass({
                    color: "#333",
                    updateSort: true
                });
                g.prototype.create = function () {
                    y.prototype.create.apply(this, arguments), this.pathCommands = [new w("move", [{}]), new w("line", [{}])]
                }, g.prototype.render = function (a, e) {
                    this.renderCylinderSurface(a, e), y.prototype.render.apply(this, arguments)
                }, g.prototype.renderCylinderSurface = function (o, d) {
                    if (this.visible) {
                        let l, p = this.frontBase,
                            e = this.rearBase,
                            t = p.renderNormal.magnitude(),
                            a = p.diameter * t + p.getLineWidth();
                        this.pathCommands[0].renderPoints[0].set(p.renderOrigin), this.pathCommands[1].renderPoints[0].set(e.renderOrigin), d.renderPath(o, l, this.pathCommands), d.stroke(o, l, true, this.color, a), d.end(o, l)
                    }
                }, g.prototype.copyGraph = s;
                let f = X.subclass();
                f.prototype.copyGraph = s;
                let x = E.subclass({
                    diameter: 1,
                    length: 1,
                    frontFace: void 0,
                    fill: true
                });
                x.prototype.create = function () {
                    E.prototype.create.apply(this, arguments), this.group = new g({
                        addTo: this,
                        color: this.color,
                        visible: this.visible
                    });
                    let e = this.length / 2,
                        t = this.backface || true;
                    this.frontBase = this.group.frontBase = new X({
                        addTo: this.group,
                        diameter: this.diameter,
                        translate: {
                            z: e
                        },
                        rotate: {
                            y: p / 2
                        },
                        color: this.color,
                        stroke: this.stroke,
                        fill: this.fill,
                        backface: this.frontFace || t,
                        visible: this.visible
                    }), this.rearBase = this.group.rearBase = this.frontBase.copy({
                        translate: {
                            z: -e
                        },
                        rotate: {
                            y: 0
                        },
                        backface: t
                    })
                }, x.prototype.render = function () {
                }, ["stroke", "fill", "color", "visible"].forEach(function (e) {
                    let t = "_" + e;
                    Object.defineProperty(x.prototype, e, {
                        get: function () {
                            return this[t]
                        },
                        set: function (a) {
                            this[t] = a, this.frontBase && (this.frontBase[e] = a, this.rearBase[e] = a, this.group[e] = a)
                        }
                    })
                });
                let F = X.subclass({
                    length: 1,
                    fill: true
                });
                F.prototype.create = function () {
                    X.prototype.create.apply(this, arguments), this.apex = new a({
                        addTo: this,
                        translate: {
                            z: this.length
                        }
                    }), this.renderApex = new N, this.renderCentroid = new N, this.tangentA = new N, this.tangentB = new N, this.surfacePathCommands = [new w("move", [{}]), new w("line", [{}]), new w("line", [{}])]
                }, F.prototype.updateSortValue = function () {
                    this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin, 1 / 3), this.sortValue = this.renderCentroid.z
                }, F.prototype.render = function (a, e) {
                    this.renderConeSurface(a, e), X.prototype.render.apply(this, arguments)
                }, F.prototype.renderConeSurface = function (d, l) {
                    if (this.visible) {
                        this.renderApex.set(this.apex.renderOrigin).subtract(this.renderOrigin);
                        let r = this.renderNormal.magnitude(),
                            T = this.renderApex.magnitude2d(),
                            e = this.renderNormal.magnitude2d(),
                            t = Math.acos(e / r),
                            n = Math.sin(t),
                            i = this.diameter / 2 * r;
                        if (i * n < T) {
                            let c = Math.atan2(this.renderNormal.y, this.renderNormal.x) + p / 2,
                                e = Math.acos(i / (T / n)),
                                t = this.tangentA,
                                a = this.tangentB;
                            t.x = Math.cos(e) * i * n, t.y = Math.sin(e) * i, a.set(this.tangentA), a.y *= -1, t.rotateZ(c), a.rotateZ(c), t.add(this.renderOrigin), a.add(this.renderOrigin), this.setSurfaceRenderPoint(0, t), this.setSurfaceRenderPoint(1, this.apex.renderOrigin), this.setSurfaceRenderPoint(2, a);
                            let r = this.getSurfaceRenderElement(d, l);
                            l.renderPath(d, r, this.surfacePathCommands), l.stroke(d, r, this.stroke, this.color, this.getLineWidth()), l.fill(d, r, this.fill, this.color), l.end(d, r)
                        }
                    }
                }, F.prototype.setSurfaceRenderPoint = function (e, t) {
                    let a = this.surfacePathCommands[e].renderPoints[0];
                    a.set(t)
                };
                let O = h.subclass();
                O.prototype.copyGraph = function () {
                };
                let W = ["frontFace", "rearFace", "leftFace", "rightFace", "topFace", "bottomFace"],
                    Z = n({}, E.defaults);
                delete Z.path, W.forEach(function (e) {
                    Z[e] = true
                }), n(Z, {
                    width: 1,
                    height: 1,
                    depth: 1,
                    fill: true
                });
                let C = a.subclass(Z);
                return C.prototype.create = function (e) {
                    a.prototype.create.call(this, e), this.updatePath(), this.fill = this.fill
                }, C.prototype.updatePath = function () {
                    W.forEach(function (e) {
                        this[e] = this[e]
                    }, this)
                }, W.forEach(function (e) {
                    let t = "_" + e;
                    Object.defineProperty(C.prototype, e, {
                        get: function () {
                            return this[t]
                        },
                        set: function (a) {
                            this[t] = a, this.setFace(e, a)
                        }
                    })
                }), C.prototype.setFace = function (t, a) {
                    let r = t + "Rect",
                        o = this[r];
                    if (!a) return void this.removeChild(o);
                    let d = this.getFaceOptions(t);
                    d.color = "string" == typeof a ? a : this.color, o ? o.setOptions(d) : o = this[r] = new O(d), o.updatePath(), this.addChild(o)
                }, C.prototype.getFaceOptions = function (t) {
                    return {
                        frontFace: {
                            width: this.width,
                            height: this.height,
                            translate: {
                                z: this.depth / 2
                            }
                        },
                        rearFace: {
                            width: this.width,
                            height: this.height,
                            translate: {
                                z: -this.depth / 2
                            },
                            rotate: {
                                y: p / 2
                            }
                        },
                        leftFace: {
                            width: this.depth,
                            height: this.height,
                            translate: {
                                x: -this.width / 2
                            },
                            rotate: {
                                y: -p / 4
                            }
                        },
                        rightFace: {
                            width: this.depth,
                            height: this.height,
                            translate: {
                                x: this.width / 2
                            },
                            rotate: {
                                y: p / 4
                            }
                        },
                        topFace: {
                            width: this.width,
                            height: this.depth,
                            translate: {
                                y: -this.height / 2
                            },
                            rotate: {
                                x: -p / 4
                            }
                        },
                        bottomFace: {
                            width: this.width,
                            height: this.depth,
                            translate: {
                                y: this.height / 2
                            },
                            rotate: {
                                x: p / 4
                            }
                        }
                    } [t]
                }, ["color", "stroke", "fill", "backface", "front", "visible"].forEach(function (t) {
                    let a = "_" + t;
                    Object.defineProperty(C.prototype, t, {
                        get: function () {
                            return this[a]
                        },
                        set: function (l) {
                            this[a] = l, W.forEach(function (a) {
                                let r = this[a + "Rect"],
                                    o = "string" == typeof this[a];
                                r && !("color" === t && o) && (r[t] = l)
                            }, this)
                        }
                    })
                }), {
                    init: G,
                    custom: E,
                    rect: h,
                    roundedRect: U,
                    ellipse: X,
                    polygon: z,
                    hemisphere: b,
                    cylinder: x,
                    cone: F,
                    box: C
                }
            }(), (null === this.canvas() || null === this.cubeParent()) && console.error("[Cube]无法定位到舞台"), (() => {
                if (null !== this.canvas() && null !== this.cubeParent()) {
                    let t = document.createElement("canvas");
                    t.setAttribute("id", "Cube"), t.setAttribute("width", this.canvas().style.width), t.setAttribute("height", this.canvas().style.height);
                    let a = t.style;
                    a.position = "absolute", a.left = "0%", a.top = "0%", a.pointerEvents = "none", this.cubeParent().appendChild(t), this.cubeScene = new this.Cube.init({
                        element: document.getElementById("Cube")
                    }), new MutationObserver(() => {
                        if (document.getElementById("Cube") == null) this.cubeParent().appendChild(t)
                    }).observe(document.body, {
                        childList: true,
                        subtree: true
                    }), new MutationObserver(() => {
                        for (let a in t.setAttribute("width", this.canvas().style.width), t.setAttribute("height", this.canvas().style.height), this.cubeScene = new this.Cube.init({
                            element: document.getElementById("Cube")
                        }), this.objectList) this.cubeScene.addChild(this.objectList[a]);
                        this.cubeScene.updateRenderGraph()
                    }).observe(this.canvas(), {
                        attributes: true
                    })
                }
            })();
            window.cube = () => this.runtime;
            this._formatMessage = e.getFormatMessage({
                "zh-cn": {
                    "Cube.name": "LazyTong的立方体",
                    "Cube.createRect": "创建或修改一个矩形并命名为[id]，X[x]Y[y]Z[z]宽[width]高[height]颜色[color]大小[stroke]%",
                    "Cube.createRoundedRect": "创建或修改一个圆角矩形并命名为[id]，X[x]Y[y]Z[z]宽[width]高[height]颜色[color]边角弧度[radius]大小[stroke]%",
                    "Cube.createCircle": "创建或修改一个圆形并命名为[id]，X[x]Y[y]Z[z]颜色[color]半径[diameter]完整性[quarters]",
                    "Cube.createEllipse": "创建或修改一个椭圆形并命名为[id]，X[x]Y[y]Z[z]宽[width]高[height]颜色[color]大小[stroke]%",
                    "Cube.createPolygon": "创建或修改一个[sides]边形并命名为[id]，X[x]Y[y]Z[z]宽[width]高[height]颜色[color]边角弧度[radius]大小[stroke]%",
                    "Cube.createHemisphere": "创建或修改一个半圆并命名为[id]，X[x]Y[y]Z[z]颜色[color]地面颜色[backface]半径[diameter]大小[stroke]%",
                    "Cube.createCone": "创建或修改一个圆锥体并命名为[id]，X[x]Y[y]Z[z]颜色[color]地面颜色[backface]长度[length]半径[diameter]大小[stroke]%",
                    "Cube.createCylinder": "创建或修改一个圆柱体并命名为[id]，X[x]Y[y]Z[z]颜色[color]顶部颜色[frontface]地面颜色[backface]长度[length]大小[stroke]%",
                    "Cube.createBox": "创建或修改一个立方体并命名为[id]，X[x]Y[y]Z[z]宽[width]高[height]尺寸[depth]颜色[color]左侧颜色[leftface]右侧颜色[rightface]顶部颜色[topface]地面颜色[bottomface]大小[stroke]%",
                    "Cube.createCustom": "创建或修改一个[closed]自定义模型并命名为[id]，X[x]Y[y]Z[z]颜色[color]节点位置[path]节点大小[stroke]%",
                    "Cube.deleteObject": "删除物体[id]",
                    "Cube.getAttrib": "物体[id]的[type]",
                    "Cube.deleteAllObject": "删除所有物体",
                    "Cube.getObjectNumbers": "物体总数",
                    "Cube.getObjectList": "物体ID列表",
                    "Cube.x": "X",
                    "Cube.y": "Y",
                    "Cube.z": "Z",
                    "Cube.width": "宽度",
                    "Cube.height": "高度",
                    "Cube.color": "颜色",
                    "Cube.stroke": "大小",
                    "Cube.quarters": "完整性",
                    "Cube.cornerRadius": "边角弧度",
                    "Cube.radius": "弧度",
                    "Cube.setRotate": "设置物体[id]在[type]上旋转[rotate]度",
                    "Cube.updateRender": "渲染当前设置的物体",
                    "Cube.docs": "拓展教程",
                    "Cube.create": "创建物体",
                    "Cube.modify": "修改物体",
                    "Cube.info": "信息",
                    "Cube.fileListEmpty": "无文件",
                    "Cube.open": "开放的",
                    "Cube.closed": "闭合的"
                },
                en: {
                    "Cube.name": "LazyTong's Cube",
                    "Cube.createRect": "Create or Modify a Rectangle named[id], X[x]Y[y]Z[z]Width[width]Height[height]Color[color]Stroke[stroke]%",
                    "Cube.createRoundedRect": "Create or Modify a Rounded Rectangle named[id], X[x]Y[y]Z[z]Width[width]Height[height]Color[color]Corner Radius[radius]Stroke[stroke]%",
                    "Cube.createCircle": "Create or Modify a Circle named[id], X[x]Y[y]Z[z]Color[color]Diameter[diameter]Quarters[quarters]",
                    "Cube.createEllipse": "Create or Modify an Ellipse named[id], X[x]Y[y]Z[z]Width[width]Height[height]Color[color]Stroke[stroke]%",
                    "Cube.createPolygon": "Create or Modify a[sides]Polygon named[id], X[x]Y[y]Z[z]Width[width]Height[height]Color[color]Corner Radius[radius]Stroke[stroke]%",
                    "Cube.createHemisphere": "Create or Modify a Hemisphere named[id], X[x]Y[y]Z[z]Color[color]Backface Color[backface]Diameter[diameter]Stroke[stroke]%",
                    "Cube.createCone": "Create or Modify a Cone named[id], X[x]Y[y]Z[z]Color[color]Backface Color[backface]Length[length]Diameter[diameter]Stroke[stroke]%",
                    "Cube.createCylinder": "Create or Modify a Cylinder named[id], X[x]Y[y]Z[z] Color[color]Frontface Color[frontface]Backface Color[backface]Length[length]Stroke[stroke]%",
                    "Cube.createBox": "Create or Modify a Box named[id], X[x]Y[y]Z[z] Width[width] Height[height] Depth[depth] Color[color] Leftface Color[leftface] Rightface Color[rightface] Topface Color[topface] Bottomface Color[bottomface] Stroke[stroke]%",
                    "Cube.createCustom": "Create or Modify a[closed]Custom Model named[id], X[x]Y[y]Z[z] Color[color] Path[path] Stroke[stroke]%",
                    "Cube.deleteObject": "Delete Object[id]",
                    "Cube.getAttrib": "Get[type]of Object[id]",
                    "Cube.deleteAllObject": "Delete All Objects",
                    "Cube.getObjectNumbers": "Number of Objects",
                    "Cube.getObjectList": "List of Object IDs",
                    "Cube.x": "X",
                    "Cube.y": "Y",
                    "Cube.z": "Z",
                    "Cube.width": "width",
                    "Cube.height": "height",
                    "Cube.color": "color",
                    "Cube.stroke": "stroke",
                    "Cube.quarters": "quarters",
                    "Cube.cornerRadius": "corner radius",
                    "Cube.radius": "radius",
                    "Cube.setRotate": "Set the object[id]to rotate[rotate]degrees on[type]",
                    "Cube.updateRender": "Update Render with Current Object Settings",
                    "Cube.docs": "Extended Tutorial",
                    "Cube.create": "Creating objects",
                    "Cube.modify": "Modifying objects",
                    "Cube.info": "Information",
                    "Cube.fileListEmpty": "no file",
                    "Cube.open": "open",
                    "Cube.closed": "closed"
                }
            })
        }

        formatMessage(e) {
            return this._formatMessage({
                id: e,
                default: e,
                description: e
            })
        }

        getInfo() {
            return {
                id: "LazyTong.Cube",
                name: this.formatMessage("Cube.name"),
                blockIconURI: t,
                menuIconURI: t,
                color1: "#33cc33",
                color2: "#669900",
                blocks: [{
                    blockType: "button",
                    text: this.formatMessage("Cube.docs"),
                    onClick: this.docs
                }, `---${this.formatMessage("Cube.create")}`, {
                    opcode: "createRect",
                    blockType: "command",
                    text: this.formatMessage("Cube.createRect"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        },
                        x: {
                            type: "number",
                            defaultValue: "0"
                        },
                        y: {
                            type: "number",
                            defaultValue: "0"
                        },
                        z: {
                            type: "number",
                            defaultValue: "0"
                        },
                        width: {
                            type: "number",
                            defaultValue: "100"
                        },
                        height: {
                            type: "number",
                            defaultValue: "20"
                        },
                        color: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        stroke: {
                            type: "number",
                            defaultValue: "100"
                        }
                    }
                }, {
                    opcode: "createRoundedRect",
                    blockType: "command",
                    text: this.formatMessage("Cube.createRoundedRect"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        },
                        x: {
                            type: "number",
                            defaultValue: "0"
                        },
                        y: {
                            type: "number",
                            defaultValue: "0"
                        },
                        z: {
                            type: "number",
                            defaultValue: "0"
                        },
                        width: {
                            type: "number",
                            defaultValue: "100"
                        },
                        height: {
                            type: "number",
                            defaultValue: "20"
                        },
                        color: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        radius: {
                            type: "number",
                            defaultValue: "1"
                        },
                        stroke: {
                            type: "number",
                            defaultValue: "100"
                        }
                    }
                }, {
                    opcode: "createCircle",
                    blockType: "command",
                    text: this.formatMessage("Cube.createCircle"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        },
                        x: {
                            type: "number",
                            defaultValue: "0"
                        },
                        y: {
                            type: "number",
                            defaultValue: "0"
                        },
                        z: {
                            type: "number",
                            defaultValue: "0"
                        },
                        diameter: {
                            type: "number",
                            defaultValue: "50"
                        },
                        quarters: {
                            type: "number",
                            defaultValue: "4"
                        },
                        color: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        stroke: {
                            type: "number",
                            defaultValue: "100"
                        }
                    }
                }, {
                    opcode: "createEllipse",
                    blockType: "command",
                    text: this.formatMessage("Cube.createEllipse"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        },
                        x: {
                            type: "number",
                            defaultValue: "0"
                        },
                        y: {
                            type: "number",
                            defaultValue: "0"
                        },
                        z: {
                            type: "number",
                            defaultValue: "0"
                        },
                        width: {
                            type: "number",
                            defaultValue: "100"
                        },
                        height: {
                            type: "number",
                            defaultValue: "20"
                        },
                        color: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        stroke: {
                            type: "number",
                            defaultValue: "100"
                        }
                    }
                }, {
                    opcode: "createPolygon",
                    blockType: "command",
                    text: this.formatMessage("Cube.createPolygon"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        },
                        x: {
                            type: "number",
                            defaultValue: "0"
                        },
                        y: {
                            type: "number",
                            defaultValue: "0"
                        },
                        z: {
                            type: "number",
                            defaultValue: "0"
                        },
                        width: {
                            type: "number",
                            defaultValue: "100"
                        },
                        height: {
                            type: "number",
                            defaultValue: "20"
                        },
                        color: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        sides: {
                            type: "number",
                            defaultValue: "3"
                        },
                        radius: {
                            type: "number",
                            defaultValue: "1"
                        },
                        stroke: {
                            type: "number",
                            defaultValue: "100"
                        }
                    }
                }, {
                    opcode: "createHemisphere",
                    blockType: "command",
                    text: this.formatMessage("Cube.createHemisphere"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        },
                        x: {
                            type: "number",
                            defaultValue: "0"
                        },
                        y: {
                            type: "number",
                            defaultValue: "0"
                        },
                        z: {
                            type: "number",
                            defaultValue: "0"
                        },
                        diameter: {
                            type: "number",
                            defaultValue: "50"
                        },
                        backface: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        color: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        stroke: {
                            type: "number",
                            defaultValue: "100"
                        }
                    }
                }, {
                    opcode: "createCone",
                    blockType: "command",
                    text: this.formatMessage("Cube.createCone"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        },
                        x: {
                            type: "number",
                            defaultValue: "0"
                        },
                        y: {
                            type: "number",
                            defaultValue: "0"
                        },
                        z: {
                            type: "number",
                            defaultValue: "0"
                        },
                        length: {
                            type: "number",
                            defaultValue: "50"
                        },
                        diameter: {
                            type: "number",
                            defaultValue: "50"
                        },
                        color: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        backface: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        stroke: {
                            type: "number",
                            defaultValue: "100"
                        }
                    }
                }, {
                    opcode: "createCylinder",
                    blockType: "command",
                    text: this.formatMessage("Cube.createCylinder"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        },
                        x: {
                            type: "number",
                            defaultValue: "0"
                        },
                        y: {
                            type: "number",
                            defaultValue: "0"
                        },
                        z: {
                            type: "number",
                            defaultValue: "0"
                        },
                        length: {
                            type: "number",
                            defaultValue: "50"
                        },
                        color: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        frontface: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        backface: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        stroke: {
                            type: "number",
                            defaultValue: "100"
                        }
                    }
                }, {
                    opcode: "createBox",
                    blockType: "command",
                    text: this.formatMessage("Cube.createBox"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        },
                        x: {
                            type: "number",
                            defaultValue: "0"
                        },
                        y: {
                            type: "number",
                            defaultValue: "0"
                        },
                        z: {
                            type: "number",
                            defaultValue: "0"
                        },
                        width: {
                            type: "number",
                            defaultValue: "100"
                        },
                        height: {
                            type: "number",
                            defaultValue: "20"
                        },
                        depth: {
                            type: "number",
                            defaultValue: "50"
                        },
                        color: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        leftface: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        rightface: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        topface: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        bottomface: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        stroke: {
                            type: "number",
                            defaultValue: "100"
                        }
                    }
                }, {
                    opcode: "createCustom",
                    blockType: "command",
                    text: this.formatMessage("Cube.createCustom"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        },
                        closed: {
                            type: "boolean",
                            menu: "closed"
                        },
                        x: {
                            type: "number",
                            defaultValue: "0"
                        },
                        y: {
                            type: "number",
                            defaultValue: "0"
                        },
                        z: {
                            type: "number",
                            defaultValue: "0"
                        },
                        color: {
                            type: "color",
                            defaultValue: "#33cc33"
                        },
                        path: {
                            type: "string",
                            menu: "files"
                        },
                        stroke: {
                            type: "number",
                            defaultValue: "100"
                        }
                    }
                }, `---${this.formatMessage("Cube.modify")}`, {
                    opcode: "deleteObject",
                    blockType: "command",
                    text: this.formatMessage("Cube.deleteObject"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        }
                    }
                }, {
                    opcode: "deleteAllObject",
                    blockType: "command",
                    text: this.formatMessage("Cube.deleteAllObject"),
                    arguments: {}
                }, {
                    opcode: "setRotate",
                    blockType: "command",
                    text: this.formatMessage("Cube.setRotate"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        },
                        type: {
                            type: "string",
                            menu: "rotate"
                        },
                        rotate: {
                            type: "number",
                            defaultValue: "10"
                        }
                    }
                }, {
                    opcode: "updateRender",
                    blockType: "command",
                    text: this.formatMessage("Cube.updateRender"),
                    arguments: {}
                }, `---${this.formatMessage("Cube.info")}`, {
                    opcode: "getAttrib",
                    blockType: "reporter",
                    text: this.formatMessage("Cube.getAttrib"),
                    arguments: {
                        id: {
                            type: "string",
                            defaultValue: "lazytong"
                        },
                        type: {
                            type: "string",
                            menu: "attrib"
                        }
                    }
                }, {
                    opcode: "getObjectList",
                    blockType: "reporter",
                    text: this.formatMessage("Cube.getObjectList"),
                    arguments: {}
                }, {
                    opcode: "getObjectNumbers",
                    blockType: "reporter",
                    text: this.formatMessage("Cube.getObjectNumbers"),
                    arguments: {}
                }],
                menus: {
                    attrib: [{
                        text: this.formatMessage("Cube.x"),
                        value: "x"
                    }, {
                        text: this.formatMessage("Cube.y"),
                        value: "y"
                    }, {
                        text: this.formatMessage("Cube.z"),
                        value: "z"
                    }, {
                        text: this.formatMessage("Cube.width"),
                        value: "width"
                    }, {
                        text: this.formatMessage("Cube.height"),
                        value: "height"
                    }, {
                        text: this.formatMessage("Cube.stroke"),
                        value: "stroke"
                    }, {
                        text: this.formatMessage("Cube.color"),
                        value: "color"
                    }, {
                        text: this.formatMessage("Cube.quarters"),
                        value: "quarters"
                    }, {
                        text: this.formatMessage("Cube.cornerRadius"),
                        value: "cornerRadius"
                    }, {
                        text: this.formatMessage("Cube.radius"),
                        value: "radius"
                    }],
                    closed: [{
                        text: this.formatMessage("Cube.open"),
                        value: false
                    }, {
                        text: this.formatMessage("Cube.closed"),
                        value: true
                    }],
                    files: {
                        acceptReporters: true,
                        items: (() => {
                            try {
                                const e = this.runtime.getGandiAssetsFileList("json").map(e => ({
                                    text: e.fullName,
                                    value: e.id
                                }));
                                return 1 > e.length ? [{
                                    text: this.formatMessage("Cube.fileListEmpty"),
                                    value: "fileListEmpty"
                                }] : e
                            } catch (e) {
                                return [{
                                    text: this.formatMessage("Cube.fileListEmpty"),
                                    value: "fileListEmpty"
                                }]
                            }
                        })()
                    },
                    rotate: [{
                        text: this.formatMessage("Cube.x"),
                        value: "x"
                    }, {
                        text: this.formatMessage("Cube.y"),
                        value: "y"
                    }, {
                        text: this.formatMessage("Cube.z"),
                        value: "z"
                    }]
                }
            }
        }

        docs() {
            let e = document.createElement("a");
            e.href = "https://lt.js.org/posts/3ad4f6", e.rel = "noopener noreferrer", e.target = "_blank", e.click()
        }

        createRect(e) {
            null !== this.canvas() && null !== this.cubeParent() && (void 0 !== this.objectList[e.id] && (this.cubeScene.removeChild(this.objectList[e.id]), this.objectList[e.id] = void 0), this.objectList[e.id] = new this.Cube.rect({
                width: +e.width,
                height: +e.height,
                stroke: +e.stroke / 100,
                color: (() => /^#([0-9a-f]{6})$/i.test(e.color) ? e.color : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                translate: {
                    x: +e.x,
                    y: +e.y,
                    z: +e.z
                }
            }), this.cubeScene.addChild(this.objectList[e.id]))
        }

        createRoundedRect(e) {
            null !== this.canvas() && null !== this.cubeParent() && (void 0 !== this.objectList[e.id] && (this.cubeScene.removeChild(this.objectList[e.id]), this.objectList[e.id] = void 0), this.objectList[e.id] = new this.Cube.roundedRect({
                width: +e.width,
                height: +e.height,
                stroke: +e.stroke / 100,
                color: (() => /^#([0-9a-f]{6})$/i.test(e.color) ? e.color : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                cornerRadius: +e.radius,
                translate: {
                    x: +e.x,
                    y: +e.y,
                    z: +e.z
                }
            }), this.cubeScene.addChild(this.objectList[e.id]))
        }

        createCircle(e) {
            null !== this.canvas() && null !== this.cubeParent() && (void 0 !== this.objectList[e.id] && (this.cubeScene.removeChild(this.objectList[e.id]), this.objectList[e.id] = void 0), this.objectList[e.id] = new this.Cube.ellipse({
                stroke: +e.stroke / 100,
                color: (() => /^#([0-9a-f]{6})$/i.test(e.color) ? e.color : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                diameter: +e.diameter,
                translate: {
                    x: +e.x,
                    y: +e.y,
                    z: +e.z
                },
                quarters: +e.quarters
            }), this.cubeScene.addChild(this.objectList[e.id]))
        }

        createEllipse(e) {
            null !== this.canvas() && null !== this.cubeParent() && (void 0 !== this.objectList[e.id] && (this.cubeScene.removeChild(this.objectList[e.id]), this.objectList[e.id] = void 0), this.objectList[e.id] = new this.Cube.ellipse({
                width: +e.width,
                height: +e.height,
                stroke: +e.stroke / 100,
                color: (() => /^#([0-9a-f]{6})$/i.test(e.color) ? e.color : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                translate: {
                    x: +e.x,
                    y: +e.y,
                    z: +e.z
                },
                quarters: +e.quarters
            }), this.cubeScene.addChild(this.objectList[e.id]))
        }

        createPolygon(e) {
            null !== this.canvas() && null !== this.cubeParent() && (void 0 !== this.objectList[e.id] && (this.cubeScene.removeChild(this.objectList[e.id]), this.objectList[e.id] = void 0), this.objectList[e.id] = new this.Cube.polygon({
                sides: +e.sides,
                radius: +e.sides,
                stroke: +e.stroke / 100,
                color: (() => /^#([0-9a-f]{6})$/i.test(e.color) ? e.color : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                translate: {
                    x: +e.x,
                    y: +e.y,
                    z: +e.z
                }
            }), this.cubeScene.addChild(this.objectList[e.id]))
        }

        createHemisphere(e) {
            null !== this.canvas() && null !== this.cubeParent() && (void 0 !== this.objectList[e.id] && (this.cubeScene.removeChild(this.objectList[e.id]), this.objectList[e.id] = void 0), this.objectList[e.id] = new this.Cube.hemisphere({
                diameter: +e.diameter,
                stroke: +e.stroke / 100,
                color: (() => /^#([0-9a-f]{6})$/i.test(e.color) ? e.color : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                backface: (() => /^#([0-9a-f]{6})$/i.test(e.backface) ? e.backface : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                translate: {
                    x: +e.x,
                    y: +e.y,
                    z: +e.z
                }
            }), this.cubeScene.addChild(this.objectList[e.id]))
        }

        createCone(e) {
            null !== this.canvas() && null !== this.cubeParent() && (void 0 !== this.objectList[e.id] && (this.cubeScene.removeChild(this.objectList[e.id]), this.objectList[e.id] = void 0), this.objectList[e.id] = new this.Cube.cone({
                diameter: +e.diameter,
                stroke: +e.stroke / 100,
                length: +e.length,
                color: (() => /^#([0-9a-f]{6})$/i.test(e.color) ? e.color : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                backface: (() => /^#([0-9a-f]{6})$/i.test(e.backface) ? e.backface : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                translate: {
                    x: +e.x,
                    y: +e.y,
                    z: +e.z
                }
            }), this.cubeScene.addChild(this.objectList[e.id]))
        }

        createCylinder(e) {
            null !== this.canvas() && null !== this.cubeParent() && (void 0 !== this.objectList[e.id] && (this.cubeScene.removeChild(this.objectList[e.id]), this.objectList[e.id] = void 0), this.objectList[e.id] = new this.Cube.cylinder({
                diameter: +e.diameter,
                stroke: +e.stroke / 100,
                length: +e.length,
                color: (() => /^#([0-9a-f]{6})$/i.test(e.color) ? e.color : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                backface: (() => /^#([0-9a-f]{6})$/i.test(e.backface) ? e.backface : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                frontFace: (() => /^#([0-9a-f]{6})$/i.test(e.frontface) ? e.frontface : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                translate: {
                    x: +e.x,
                    y: +e.y,
                    z: +e.z
                }
            }), this.cubeScene.addChild(this.objectList[e.id]))
        }

        createBox(e) {
            null !== this.canvas() && null !== this.cubeParent() && (void 0 !== this.objectList[e.id] && (this.cubeScene.removeChild(this.objectList[e.id]), this.objectList[e.id] = void 0), this.objectList[e.id] = new this.Cube.box({
                width: +e.width,
                height: +e.height,
                depth: +e.depth,
                stroke: +e.stroke / 100,
                length: +e.length,
                color: (() => /^#([0-9a-f]{6})$/i.test(e.color) ? e.color : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                leftFace: (() => /^#([0-9a-f]{6})$/i.test(e.leftface) ? e.leftface : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                rightFace: (() => /^#([0-9a-f]{6})$/i.test(e.rightface) ? e.rightface : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                topFace: (() => /^#([0-9a-f]{6})$/i.test(e.topface) ? e.topface : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                bottomFace: (() => /^#([0-9a-f]{6})$/i.test(e.bottomface) ? e.bottomface : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                translate: {
                    x: +e.x,
                    y: +e.y,
                    z: +e.z
                }
            }), this.cubeScene.addChild(this.objectList[e.id]))
        }

        createCustom(t) {
            null !== this.canvas() && null !== this.cubeParent() && "{}" !== t.path && (void 0 !== this.objectList[t.id] && (this.cubeScene.removeChild(this.objectList[t.id]), this.objectList[t.id] = void 0), this.objectList[t.id] = new this.Cube.custom({
                stroke: +t.stroke / 100,
                closed: (() => {
                    switch (t.closed) {
                        case true:
                            return true
                        case false:
                            return false
                        default:
                            return false
                    }
                })(),
                color: (() => /^#([0-9a-f]{6})$/i.test(t.color) ? t.color : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
                path: "fileListEmpty" === t.path ? [{
                    x: 0,
                    y: 0,
                    z: 0
                }] : JSON.parse(String.fromCharCode.apply(null, this.runtime.getGandiAssetById(t.path).asset.data)),
                translate: {
                    x: +t.x,
                    y: +t.y,
                    z: +t.z
                }
            }), this.cubeScene.addChild(this.objectList[t.id]))
        }

        deleteObject(e) {
            null !== this.cubeParent() && void 0 !== this.objectList[e.id] && (this.cubeScene.removeChild(this.objectList[e.id]), this.objectList[e.id] = void 0)
        }

        deleteAllObject() {
            if (null !== this.cubeParent()) {
                for (let e in this.objectList) this.cubeScene.removeChild(this.objectList[e]);
                this.objectList = {}
            }
        }

        getAttrib(e) {
            try {
                if (void 0 !== typeof this.objectList[e.id]) switch (e.type) {
                    case "x":
                        return "undefined" == typeof this.objectList[e.id].translate.x ? "NaN" : this.objectList[e.id].translate.x;
                    case "y":
                        return "undefined" == typeof this.objectList[e.id].translate.y ? "NaN" : this.objectList[e.id].translate.y;
                    case "z":
                        return "undefined" == typeof this.objectList[e.id].translate.z ? "NaN" : this.objectList[e.id].translate.z;
                    case "width":
                        return "undefined" == typeof this.objectList[e.id].width ? "NaN" : this.objectList[e.id].width;
                    case "height":
                        return "undefined" == typeof this.objectList[e.id].height ? "NaN" : this.objectList[e.id].height;
                    case "color":
                        return "undefined" == typeof this.objectList[e.id].color ? "NaN" : this.objectList[e.id].color;
                    case "stroke":
                        return "undefined" == typeof this.objectList[e.id].stroke ? "NaN" : this.objectList[e.id].stroke;
                    case "quarters":
                        return "undefined" == typeof this.objectList[e.id].quarters ? "NaN" : this.objectList[e.id].quarters;
                    case "cornerRadius":
                        return "undefined" == typeof this.objectList[e.id].cornerRadius ? "NaN" : this.objectList[e.id].cornerRadius;
                    case "radius":
                        return "undefined" == typeof this.objectList[e.id].radius ? "NaN" : this.objectList[e.id].radius;
                    default:
                        return "NaN";
                }
            } catch (e) {
                return "NaN"
            }
        }

        getObjectNumbers() {
            return Object.keys(this.objectList).length
        }

        setRotate(e) {
            if (void 0 !== typeof this.objectList[e.id]) switch (e.type) {
                case "x":
                    this.objectList[e.id].rotate.x = +e.rotate * (Math.PI / 180);
                    break;
                case "y":
                    this.objectList[e.id].rotate.y = +e.rotate * (Math.PI / 180);
                    break;
                case "z":
                    this.objectList[e.id].rotate.z = +e.rotate * (Math.PI / 180);
                    break;
                default:
                    break;
            }
        }

        getObjectList() {
            return Object.keys(this.objectList)
        }

        updateRender() {
            try {
                this.cubeScene.updateRenderGraph()
            } catch (e) {
                throw new Error('Cube: 渲染时发生错误')
            }
        }
    },
    info: {
        name: "Cube.name",
        description: "Cube.description",
        extensionId: "LazyTong.Cube",
        iconURL: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYwMCAzNzIiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzcyIiBmaWxsPSJ3aGl0ZSI+PGltYWdlIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjgwMCIgdHJhbnNmb3JtPSJtYXRyaXgoLjM2MiwwLDAsLjM2MiwtMTM1LDgyKSIgaHJlZj0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIaHRiRzV6T25OMloycHpQU0pvZEhSd09pOHZjM1puYW5NdVpHVjJMM04yWjJweklpQjJhV1YzUW05NFBTSXdJREFnTWpRd01DQTRNREFpSUc5d1lXTnBkSGs5SWpFaVBqeGtaV1p6UGp4c2FXNWxZWEpIY21Ga2FXVnVkQ0I0TVQwaU5UQWxJaUI1TVQwaU1DVWlJSGd5UFNJMU1DVWlJSGt5UFNJeE1EQWxJaUJwWkQwaWMzTnpkWEptTFdkeVlXUWlQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJbWh6YkNneU1EVXNJRFk1SlN3Z05qQWxLU0lnYzNSdmNDMXZjR0ZqYVhSNVBTSXhJaUJ2Wm1aelpYUTlJakFsSWo0OEwzTjBiM0ErUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpYUhOc0tESXdOU3dnTmprbExDQTRNQ1VwSWlCemRHOXdMVzl3WVdOcGRIazlJakVpSUc5bVpuTmxkRDBpTVRBd0pTSStQQzl6ZEc5d1Bqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK1BDOWtaV1p6UGp4bklHWnBiR3c5SW5WeWJDZ2pjM056ZFhKbUxXZHlZV1FwSWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNneExEQXNNQ3d4TERFd0xqVTVNekF4TnpVM09ERXlOU3c0Tmk0eE5UTXdNVFV4TXpZM01UZzNOU2tpUGp4d1lYUm9JR1E5SWswdE1UQXNNVEJETVRrdU9EWXhNVEV4TVRFeE1URXhNVEVzTWpRdU56a3hOalkyTmpZMk5qWTJOalk0TERjMUxqWTVORFEwTkRRME5EUTBORFEyTERrM0xqZzNOU3d4TXpNdU16TXpNek16TXpNek16TXpNelFzT0RGRE1Ua3dMamszTWpJeU1qSXlNakl5TWpJekxEWTBMakV5TlN3eU1URXVNVEV4TVRFeE1URXhNVEV4TVRRc0xUVTNMamczTlN3eU5qWXVOalkyTmpZMk5qWTJOalkyTnl3dE56RkRNekl5TGpJeU1qSXlNakl5TWpJeU1qSXpMQzA0TkM0eE1qVXNNelEwTGpRME5EUTBORFEwTkRRME5EUTJMRFV1TnpBNE16TXpNek16TXpNek16TXlMRFF3TUN3eE9FTTBOVFV1TlRVMU5UVTFOVFUxTlRVMU5UUXNNekF1TWpreE5qWTJOalkyTmpZMk5qWTRMRFEzTnk0M056YzNOemMzTnpjM056YzRMQzB4Tmk0ek56VXNOVE16TGpNek16TXpNek16TXpNek16UXNMVEV5UXpVNE9DNDRPRGc0T0RnNE9EZzRPRGc1TEMwM0xqWXlOU3cyTVRFdU1URXhNVEV4TVRFeE1URXhNaXcwTVM0d09ETXpNek16TXpNek16TXpNellzTmpZMkxqWTJOalkyTmpZMk5qWTJOamNzTXpsRE56SXlMakl5TWpJeU1qSXlNakl5TWpNc016WXVPVEUyTmpZMk5qWTJOalkyTmpZMExEYzBOQzQwTkRRME5EUTBORFEwTkRRMUxDMHlOeXc0TURBc0xUSXlRemcxTlM0MU5UVTFOVFUxTlRVMU5UVTFMQzB4Tnl3NE56Y3VOemMzTnpjM056YzNOemMzT0N3Mk5DNDBOVGd6TXpNek16TXpNek16TXl3NU16TXVNek16TXpNek16TXpNek16TkN3Mk0wTTVPRGd1T0RnNE9EZzRPRGc0T0RnNE9TdzJNUzQxTkRFMk5qWTJOalkyTmpZMk5qUXNNVEF4TVM0eE1URXhNVEV4TVRFeE1URXlMQzB6TUM0Mk5qWTJOalkyTmpZMk5qWTJOamdzTVRBMk5pNDJOalkyTmpZMk5qWTJOalkzTEMweU9VTXhNVEl5TGpJeU1qSXlNakl5TWpJeU1qSXNMVEkzTGpNek16TXpNek16TXpNek16TXpNaXd4TVRRMExqUTBORFEwTkRRME5EUTBORE1zTmpjdU1qVXNNVEl3TUN3M01VTXhNalUxTGpVMU5UVTFOVFUxTlRVMU5UY3NOelF1TnpVc01USTNOeTQzTnpjM056YzNOemMzTnpjNExDMHhOUzQzT1RFMk5qWTJOalkyTmpZMk5qZ3NNVE16TXk0ek16TXpNek16TXpNek16TTFMQzB4TVVNeE16ZzRMamc0T0RnNE9EZzRPRGc0T1RFc0xUWXVNakE0TXpNek16TXpNek16TXpNekxERTBNVEV1TVRFeE1URXhNVEV4TVRFeE15dzRPUzQyTWpVc01UUTJOaTQyTmpZMk5qWTJOalkyTmpZM0xEazBRekUxTWpJdU1qSXlNakl5TWpJeU1qSXlNaXc1T0M0ek56VXNNVFUwTkM0ME5EUTBORFEwTkRRME5EUXpMREUyTGpnM05Td3hOakF3TERFd1F6RTJOVFV1TlRVMU5UVTFOVFUxTlRVMU55d3pMakV5TlN3eE5qYzNMamMzTnpjM056YzNOemMzTnpnc05qSXVNRFF4TmpZMk5qWTJOalkyTmpZMExERTNNek11TXpNek16TXpNek16TXpNek5TdzJNVU14TnpnNExqZzRPRGc0T0RnNE9EZzRPVEVzTlRrdU9UVTRNek16TXpNek16TXpNek0yTERFNE1URXVNVEV4TVRFeE1URXhNVEV4TERFdU5qWTJOalkyTmpZMk5qWTJOalkzTERFNE5qWXVOalkyTmpZMk5qWTJOalkyTnl3MVF6RTVNakl1TWpJeU1qSXlNakl5TWpJeU5DdzRMak16TXpNek16TXpNek16TXpNek1pd3hPVFEwTGpRME5EUTBORFEwTkRRME5EWXNOell1TVRZMk5qWTJOalkyTmpZMk5qY3NNakF3TUM0d01EQXdNREF3TURBd01EQXlMRGMzUXpJd05UVXVOVFUxTlRVMU5UVTFOVFUxTnl3M055NDRNek16TXpNek16TXpNek16TXl3eU1EYzNMamMzTnpjM056YzNOemMzT0N3eExqVXNNakV6TXk0ek16TXpNek16TXpNek16TTFMRGxETWpFNE9DNDRPRGc0T0RnNE9EZzRPRGtzTVRZdU5Td3lNakV4TGpFeE1URXhNVEV4TVRFeE1UTXNNVEV6TGpnek16TXpNek16TXpNek16TXpMREl5TmpZdU5qWTJOalkyTmpZMk5qWTNMREV4TTBNeU16SXlMakl5TWpJeU1qSXlNakl5TWpZc01URXlMakUyTmpZMk5qWTJOalkyTmpZM0xESXpNakF1TVRNNE9EZzRPRGc0T0RnNUxDMDFOQzQzT1RFMk5qWTJOalkyTmpZMk55d3lOREF3TERWRE1qUTNPUzQ0TmpFeE1URXhNVEV4TVRFc05qUXVOemt4TmpZMk5qWTJOalkyTmpjc016STFOQzR4TmpZMk5qWTJOalkyTmpZMUxESXhNeTQxTkRFMk5qWTJOalkyTmpZMk9Td3lOalV3TERRd01FTXlNRFExTGpnek16TXpNek16TXpNek16VXNOVGcyTGpRMU9ETXpNek16TXpNek16TXNNVFUyTGpJMUxEYzVOUzQ0TXpNek16TXpNek16TXpNMExDMDFNREFzT1RBd0lpQjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3hMREFzTUN3eExEQXNNVEl3S1NJZ2IzQmhZMmwwZVQwaU1DNHdOU0krUEM5d1lYUm9Qanh3WVhSb0lHUTlJazB0TVRBc01UQkRNVGt1T0RZeE1URXhNVEV4TVRFeE1URXNNalF1TnpreE5qWTJOalkyTmpZMk5qWTRMRGMxTGpZNU5EUTBORFEwTkRRME5EUTJMRGszTGpnM05Td3hNek11TXpNek16TXpNek16TXpNek16UXNPREZETVRrd0xqazNNakl5TWpJeU1qSXlNakl6TERZMExqRXlOU3d5TVRFdU1URXhNVEV4TVRFeE1URXhNVFFzTFRVM0xqZzNOU3d5TmpZdU5qWTJOalkyTmpZMk5qWTJOeXd0TnpGRE16SXlMakl5TWpJeU1qSXlNakl5TWpJekxDMDROQzR4TWpVc016UTBMalEwTkRRME5EUTBORFEwTkRRMkxEVXVOekE0TXpNek16TXpNek16TXpNeUxEUXdNQ3d4T0VNME5UVXVOVFUxTlRVMU5UVTFOVFUxTlRRc016QXVNamt4TmpZMk5qWTJOalkyTmpZNExEUTNOeTQzTnpjM056YzNOemMzTnpjNExDMHhOaTR6TnpVc05UTXpMak16TXpNek16TXpNek16TXpRc0xURXlRelU0T0M0NE9EZzRPRGc0T0RnNE9EZzVMQzAzTGpZeU5TdzJNVEV1TVRFeE1URXhNVEV4TVRFeE1pdzBNUzR3T0RNek16TXpNek16TXpNek16WXNOalkyTGpZMk5qWTJOalkyTmpZMk5qY3NNemxETnpJeUxqSXlNakl5TWpJeU1qSXlNak1zTXpZdU9URTJOalkyTmpZMk5qWTJOalkwTERjME5DNDBORFEwTkRRME5EUTBORFExTEMweU55dzRNREFzTFRJeVF6ZzFOUzQxTlRVMU5UVTFOVFUxTlRVMUxDMHhOeXc0TnpjdU56YzNOemMzTnpjM056YzNPQ3cyTkM0ME5UZ3pNek16TXpNek16TXpNeXc1TXpNdU16TXpNek16TXpNek16TXpOQ3cyTTBNNU9EZ3VPRGc0T0RnNE9EZzRPRGc0T1N3Mk1TNDFOREUyTmpZMk5qWTJOalkyTmpRc01UQXhNUzR4TVRFeE1URXhNVEV4TVRFeUxDMHpNQzQyTmpZMk5qWTJOalkyTmpZMk5qZ3NNVEEyTmk0Mk5qWTJOalkyTmpZMk5qWTNMQzB5T1VNeE1USXlMakl5TWpJeU1qSXlNakl5TWpJc0xUSTNMak16TXpNek16TXpNek16TXpNek1pd3hNVFEwTGpRME5EUTBORFEwTkRRME5ETXNOamN1TWpVc01USXdNQ3czTVVNeE1qVTFMalUxTlRVMU5UVTFOVFUxTlRjc056UXVOelVzTVRJM055NDNOemMzTnpjM056YzNOemM0TEMweE5TNDNPVEUyTmpZMk5qWTJOalkyTmpnc01UTXpNeTR6TXpNek16TXpNek16TXpNMUxDMHhNVU14TXpnNExqZzRPRGc0T0RnNE9EZzRPVEVzTFRZdU1qQTRNek16TXpNek16TXpNek16TERFME1URXVNVEV4TVRFeE1URXhNVEV4TXl3NE9TNDJNalVzTVRRMk5pNDJOalkyTmpZMk5qWTJOalkzTERrMFF6RTFNakl1TWpJeU1qSXlNakl5TWpJeU1pdzVPQzR6TnpVc01UVTBOQzQwTkRRME5EUTBORFEwTkRRekxERTJMamczTlN3eE5qQXdMREV3UXpFMk5UVXVOVFUxTlRVMU5UVTFOVFUxTnl3ekxqRXlOU3d4TmpjM0xqYzNOemMzTnpjM056YzNOemdzTmpJdU1EUXhOalkyTmpZMk5qWTJOalkwTERFM016TXVNek16TXpNek16TXpNek16TlN3Mk1VTXhOemc0TGpnNE9EZzRPRGc0T0RnNE9URXNOVGt1T1RVNE16TXpNek16TXpNek16TTJMREU0TVRFdU1URXhNVEV4TVRFeE1URXhMREV1TmpZMk5qWTJOalkyTmpZMk5qWTNMREU0TmpZdU5qWTJOalkyTmpZMk5qWTJOeXcxUXpFNU1qSXVNakl5TWpJeU1qSXlNakl5TkN3NExqTXpNek16TXpNek16TXpNek16TWl3eE9UUTBMalEwTkRRME5EUTBORFEwTkRZc056WXVNVFkyTmpZMk5qWTJOalkyTmpjc01qQXdNQzR3TURBd01EQXdNREF3TURBeUxEYzNRekl3TlRVdU5UVTFOVFUxTlRVMU5UVTFOeXczTnk0NE16TXpNek16TXpNek16TXpNeXd5TURjM0xqYzNOemMzTnpjM056YzNPQ3d4TGpVc01qRXpNeTR6TXpNek16TXpNek16TXpNMUxEbERNakU0T0M0NE9EZzRPRGc0T0RnNE9Ea3NNVFl1TlN3eU1qRXhMakV4TVRFeE1URXhNVEV4TVRNc01URXpMamd6TXpNek16TXpNek16TXpNekxESXlOall1TmpZMk5qWTJOalkyTmpZM0xERXhNME15TXpJeUxqSXlNakl5TWpJeU1qSXlNallzTVRFeUxqRTJOalkyTmpZMk5qWTJOalkzTERJek1qQXVNVE00T0RnNE9EZzRPRGc1TEMwMU5DNDNPVEUyTmpZMk5qWTJOalkyTnl3eU5EQXdMRFZETWpRM09TNDROakV4TVRFeE1URXhNVEVzTmpRdU56a3hOalkyTmpZMk5qWTJOamNzTXpJMU5DNHhOalkyTmpZMk5qWTJOalkxTERJeE15NDFOREUyTmpZMk5qWTJOalkyT1N3eU5qVXdMRFF3TUVNeU1EUTFMamd6TXpNek16TXpNek16TXpVc05UZzJMalExT0RNek16TXpNek16TXpNc01UVTJMakkxTERjNU5TNDRNek16TXpNek16TXpNek0wTEMwMU1EQXNPVEF3SWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNneExEQXNNQ3d4TERBc01qUXdLU0lnYjNCaFkybDBlVDBpTUM0ek55SStQQzl3WVhSb1BqeHdZWFJvSUdROUlrMHRNVEFzTVRCRE1Ua3VPRFl4TVRFeE1URXhNVEV4TVRFc01qUXVOemt4TmpZMk5qWTJOalkyTmpZNExEYzFMalk1TkRRME5EUTBORFEwTkRRMkxEazNMamczTlN3eE16TXVNek16TXpNek16TXpNek16TXpRc09ERkRNVGt3TGprM01qSXlNakl5TWpJeU1qSXpMRFkwTGpFeU5Td3lNVEV1TVRFeE1URXhNVEV4TVRFeE1UUXNMVFUzTGpnM05Td3lOall1TmpZMk5qWTJOalkyTmpZMk55d3ROekZETXpJeUxqSXlNakl5TWpJeU1qSXlNakl6TEMwNE5DNHhNalVzTXpRMExqUTBORFEwTkRRME5EUTBORFEyTERVdU56QTRNek16TXpNek16TXpNek15TERRd01Dd3hPRU0wTlRVdU5UVTFOVFUxTlRVMU5UVTFOVFFzTXpBdU1qa3hOalkyTmpZMk5qWTJOalk0TERRM055NDNOemMzTnpjM056YzNOemM0TEMweE5pNHpOelVzTlRNekxqTXpNek16TXpNek16TXpNelFzTFRFeVF6VTRPQzQ0T0RnNE9EZzRPRGc0T0RnNUxDMDNMall5TlN3Mk1URXVNVEV4TVRFeE1URXhNVEV4TWl3ME1TNHdPRE16TXpNek16TXpNek16TXpZc05qWTJMalkyTmpZMk5qWTJOalkyTmpjc016bEROekl5TGpJeU1qSXlNakl5TWpJeU1qTXNNell1T1RFMk5qWTJOalkyTmpZMk5qWTBMRGMwTkM0ME5EUTBORFEwTkRRME5EUTFMQzB5Tnl3NE1EQXNMVEl5UXpnMU5TNDFOVFUxTlRVMU5UVTFOVFUxTEMweE55dzROemN1TnpjM056YzNOemMzTnpjM09DdzJOQzQwTlRnek16TXpNek16TXpNek15dzVNek11TXpNek16TXpNek16TXpNek5DdzJNME01T0RndU9EZzRPRGc0T0RnNE9EZzRPU3cyTVM0MU5ERTJOalkyTmpZMk5qWTJOalFzTVRBeE1TNHhNVEV4TVRFeE1URXhNVEV5TEMwek1DNDJOalkyTmpZMk5qWTJOalkyTmpnc01UQTJOaTQyTmpZMk5qWTJOalkyTmpZM0xDMHlPVU14TVRJeUxqSXlNakl5TWpJeU1qSXlNaklzTFRJM0xqTXpNek16TXpNek16TXpNek16TWl3eE1UUTBMalEwTkRRME5EUTBORFEwTkRNc05qY3VNalVzTVRJd01DdzNNVU14TWpVMUxqVTFOVFUxTlRVMU5UVTFOVGNzTnpRdU56VXNNVEkzTnk0M056YzNOemMzTnpjM056YzRMQzB4TlM0M09URTJOalkyTmpZMk5qWTJOamdzTVRNek15NHpNek16TXpNek16TXpNek0xTEMweE1VTXhNemc0TGpnNE9EZzRPRGc0T0RnNE9URXNMVFl1TWpBNE16TXpNek16TXpNek16TXpMREUwTVRFdU1URXhNVEV4TVRFeE1URXhNeXc0T1M0Mk1qVXNNVFEyTmk0Mk5qWTJOalkyTmpZMk5qWTNMRGswUXpFMU1qSXVNakl5TWpJeU1qSXlNakl5TWl3NU9DNHpOelVzTVRVME5DNDBORFEwTkRRME5EUTBORFF6TERFMkxqZzNOU3d4TmpBd0xERXdRekUyTlRVdU5UVTFOVFUxTlRVMU5UVTFOeXd6TGpFeU5Td3hOamMzTGpjM056YzNOemMzTnpjM056Z3NOakl1TURReE5qWTJOalkyTmpZMk5qWTBMREUzTXpNdU16TXpNek16TXpNek16TXpOU3cyTVVNeE56ZzRMamc0T0RnNE9EZzRPRGc0T1RFc05Ua3VPVFU0TXpNek16TXpNek16TXpNMkxERTRNVEV1TVRFeE1URXhNVEV4TVRFeExERXVOalkyTmpZMk5qWTJOalkyTmpZM0xERTROall1TmpZMk5qWTJOalkyTmpZMk55dzFRekU1TWpJdU1qSXlNakl5TWpJeU1qSXlOQ3c0TGpNek16TXpNek16TXpNek16TXpNaXd4T1RRMExqUTBORFEwTkRRME5EUTBORFlzTnpZdU1UWTJOalkyTmpZMk5qWTJOamNzTWpBd01DNHdNREF3TURBd01EQXdNREF5TERjM1F6SXdOVFV1TlRVMU5UVTFOVFUxTlRVMU55dzNOeTQ0TXpNek16TXpNek16TXpNek15d3lNRGMzTGpjM056YzNOemMzTnpjM09Dd3hMalVzTWpFek15NHpNek16TXpNek16TXpNek0xTERsRE1qRTRPQzQ0T0RnNE9EZzRPRGc0T0Rrc01UWXVOU3d5TWpFeExqRXhNVEV4TVRFeE1URXhNVE1zTVRFekxqZ3pNek16TXpNek16TXpNek16TERJeU5qWXVOalkyTmpZMk5qWTJOalkzTERFeE0wTXlNekl5TGpJeU1qSXlNakl5TWpJeU1qWXNNVEV5TGpFMk5qWTJOalkyTmpZMk5qWTNMREl6TWpBdU1UTTRPRGc0T0RnNE9EZzVMQzAxTkM0M09URTJOalkyTmpZMk5qWTJOeXd5TkRBd0xEVkRNalEzT1M0NE5qRXhNVEV4TVRFeE1URXNOalF1TnpreE5qWTJOalkyTmpZMk5qY3NNekkxTkM0eE5qWTJOalkyTmpZMk5qWTFMREl4TXk0MU5ERTJOalkyTmpZMk5qWTJPU3d5TmpVd0xEUXdNRU15TURRMUxqZ3pNek16TXpNek16TXpNelVzTlRnMkxqUTFPRE16TXpNek16TXpNek1zTVRVMkxqSTFMRGM1TlM0NE16TXpNek16TXpNek16TTBMQzAxTURBc09UQXdJaUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d4TERBc01Dd3hMREFzTXpZd0tTSWdiM0JoWTJsMGVUMGlNQzQyT0NJK1BDOXdZWFJvUGp4d1lYUm9JR1E5SWswdE1UQXNNVEJETVRrdU9EWXhNVEV4TVRFeE1URXhNVEVzTWpRdU56a3hOalkyTmpZMk5qWTJOalk0TERjMUxqWTVORFEwTkRRME5EUTBORFEyTERrM0xqZzNOU3d4TXpNdU16TXpNek16TXpNek16TXpNelFzT0RGRE1Ua3dMamszTWpJeU1qSXlNakl5TWpJekxEWTBMakV5TlN3eU1URXVNVEV4TVRFeE1URXhNVEV4TVRRc0xUVTNMamczTlN3eU5qWXVOalkyTmpZMk5qWTJOalkyTnl3dE56RkRNekl5TGpJeU1qSXlNakl5TWpJeU1qSXpMQzA0TkM0eE1qVXNNelEwTGpRME5EUTBORFEwTkRRME5EUTJMRFV1TnpBNE16TXpNek16TXpNek16TXlMRFF3TUN3eE9FTTBOVFV1TlRVMU5UVTFOVFUxTlRVMU5UUXNNekF1TWpreE5qWTJOalkyTmpZMk5qWTRMRFEzTnk0M056YzNOemMzTnpjM056YzRMQzB4Tmk0ek56VXNOVE16TGpNek16TXpNek16TXpNek16UXNMVEV5UXpVNE9DNDRPRGc0T0RnNE9EZzRPRGc1TEMwM0xqWXlOU3cyTVRFdU1URXhNVEV4TVRFeE1URXhNaXcwTVM0d09ETXpNek16TXpNek16TXpNellzTmpZMkxqWTJOalkyTmpZMk5qWTJOamNzTXpsRE56SXlMakl5TWpJeU1qSXlNakl5TWpNc016WXVPVEUyTmpZMk5qWTJOalkyTmpZMExEYzBOQzQwTkRRME5EUTBORFEwTkRRMUxDMHlOeXc0TURBc0xUSXlRemcxTlM0MU5UVTFOVFUxTlRVMU5UVTFMQzB4Tnl3NE56Y3VOemMzTnpjM056YzNOemMzT0N3Mk5DNDBOVGd6TXpNek16TXpNek16TXl3NU16TXVNek16TXpNek16TXpNek16TkN3Mk0wTTVPRGd1T0RnNE9EZzRPRGc0T0RnNE9TdzJNUzQxTkRFMk5qWTJOalkyTmpZMk5qUXNNVEF4TVM0eE1URXhNVEV4TVRFeE1URXlMQzB6TUM0Mk5qWTJOalkyTmpZMk5qWTJOamdzTVRBMk5pNDJOalkyTmpZMk5qWTJOalkzTEMweU9VTXhNVEl5TGpJeU1qSXlNakl5TWpJeU1qSXNMVEkzTGpNek16TXpNek16TXpNek16TXpNaXd4TVRRMExqUTBORFEwTkRRME5EUTBORE1zTmpjdU1qVXNNVEl3TUN3M01VTXhNalUxTGpVMU5UVTFOVFUxTlRVMU5UY3NOelF1TnpVc01USTNOeTQzTnpjM056YzNOemMzTnpjNExDMHhOUzQzT1RFMk5qWTJOalkyTmpZMk5qZ3NNVE16TXk0ek16TXpNek16TXpNek16TTFMQzB4TVVNeE16ZzRMamc0T0RnNE9EZzRPRGc0T1RFc0xUWXVNakE0TXpNek16TXpNek16TXpNekxERTBNVEV1TVRFeE1URXhNVEV4TVRFeE15dzRPUzQyTWpVc01UUTJOaTQyTmpZMk5qWTJOalkyTmpZM0xEazBRekUxTWpJdU1qSXlNakl5TWpJeU1qSXlNaXc1T0M0ek56VXNNVFUwTkM0ME5EUTBORFEwTkRRME5EUXpMREUyTGpnM05Td3hOakF3TERFd1F6RTJOVFV1TlRVMU5UVTFOVFUxTlRVMU55d3pMakV5TlN3eE5qYzNMamMzTnpjM056YzNOemMzTnpnc05qSXVNRFF4TmpZMk5qWTJOalkyTmpZMExERTNNek11TXpNek16TXpNek16TXpNek5TdzJNVU14TnpnNExqZzRPRGc0T0RnNE9EZzRPVEVzTlRrdU9UVTRNek16TXpNek16TXpNek0yTERFNE1URXVNVEV4TVRFeE1URXhNVEV4TERFdU5qWTJOalkyTmpZMk5qWTJOalkzTERFNE5qWXVOalkyTmpZMk5qWTJOalkyTnl3MVF6RTVNakl1TWpJeU1qSXlNakl5TWpJeU5DdzRMak16TXpNek16TXpNek16TXpNek1pd3hPVFEwTGpRME5EUTBORFEwTkRRME5EWXNOell1TVRZMk5qWTJOalkyTmpZMk5qY3NNakF3TUM0d01EQXdNREF3TURBd01EQXlMRGMzUXpJd05UVXVOVFUxTlRVMU5UVTFOVFUxTnl3M055NDRNek16TXpNek16TXpNek16TXl3eU1EYzNMamMzTnpjM056YzNOemMzT0N3eExqVXNNakV6TXk0ek16TXpNek16TXpNek16TTFMRGxETWpFNE9DNDRPRGc0T0RnNE9EZzRPRGtzTVRZdU5Td3lNakV4TGpFeE1URXhNVEV4TVRFeE1UTXNNVEV6TGpnek16TXpNek16TXpNek16TXpMREl5TmpZdU5qWTJOalkyTmpZMk5qWTNMREV4TTBNeU16SXlMakl5TWpJeU1qSXlNakl5TWpZc01URXlMakUyTmpZMk5qWTJOalkyTmpZM0xESXpNakF1TVRNNE9EZzRPRGc0T0RnNUxDMDFOQzQzT1RFMk5qWTJOalkyTmpZMk55d3lOREF3TERWRE1qUTNPUzQ0TmpFeE1URXhNVEV4TVRFc05qUXVOemt4TmpZMk5qWTJOalkyTmpjc016STFOQzR4TmpZMk5qWTJOalkyTmpZMUxESXhNeTQxTkRFMk5qWTJOalkyTmpZMk9Td3lOalV3TERRd01FTXlNRFExTGpnek16TXpNek16TXpNek16VXNOVGcyTGpRMU9ETXpNek16TXpNek16TXNNVFUyTGpJMUxEYzVOUzQ0TXpNek16TXpNek16TXpNMExDMDFNREFzT1RBd0lpQjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3hMREFzTUN3eExEQXNORGd3S1NJZ2IzQmhZMmwwZVQwaU1TNHdNQ0krUEM5d1lYUm9Qand2Wno0OEwzTjJaejQ9Ii8+PGltYWdlIHdpZHRoPSI0ODAiIGhlaWdodD0iNDgwIiB0cmFuc2Zvcm09Im1hdHJpeCguNTYxLDAsMCwuNTYxLDE2NSw1MSkiIGhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCMlpYSnphVzl1UFNJeExqRWlJSGRwWkhSb1BTSXlOREFpSUdobGFXZG9kRDBpTWpRd0lpQjJhV1YzUW05NFBTSXRNVEl3SUMweE1qQWdNalF3SURJME1DSStQSEJoZEdnZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJaUJ6ZEhKdmEyVXRiR2x1WldwdmFXNDlJbkp2ZFc1a0lpQmtQU0pOTFRnMExqZzBPQ3d0TlRNdU1UYzVJRXd3TGprME1pd3RPVE11TWpFMUlFd3dMamswTWl3eE1pNHlORE1nVEMwNE5DNDRORGdzTlRJdU1qYzVJRm9pSUdacGJHdzlJaU5GTmpJaVBqd3ZjR0YwYUQ0OGNHRjBhQ0J6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUdROUlrMDROQzQ0TkRnc0xUVXlMakkzT1NCTU1DNDVORElzTFRrekxqSXhOU0JNTUM0NU5ESXNNVEl1TWpReklFdzROQzQ0TkRnc05UTXVNVGM1SUZvaUlHWnBiR3c5SWlNMk5rTkRNREFpUGp3dmNHRjBhRDQ4Y0dGMGFDQnpkSEp2YTJVdGJHbHVaV05oY0QwaWNtOTFibVFpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlJR1E5SWswdE1DNDVORElzT1RNdU1qRTFJRXd0T0RRdU9EUTRMRFV5TGpJM09TQk1NQzQ1TkRJc01USXVNalF6SUV3NE5DNDRORGdzTlRNdU1UYzVJRm9pSUdacGJHdzlJaU0yTXpZaVBqd3ZjR0YwYUQ0OGNHRjBhQ0J6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUdROUlrMDROQzQ0TkRnc0xUVXlMakkzT1NCTU1DNDVORElzTFRrekxqSXhOU0JNTFRnMExqZzBPQ3d0TlRNdU1UYzVJRXd0TUM0NU5ESXNMVEV5TGpJME15QmFJaUJtYVd4c1BTSWpSVVF3SWo0OEwzQmhkR2crUEhCaGRHZ2djM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWlCemRISnZhMlV0YkdsdVpXcHZhVzQ5SW5KdmRXNWtJaUJrUFNKTkxUZzBMamcwT0N3dE5UTXVNVGM1SUV3dE1DNDVORElzTFRFeUxqSTBNeUJNTFRBdU9UUXlMRGt6TGpJeE5TQk1MVGcwTGpnME9DdzFNaTR5TnprZ1dpSWdabWxzYkQwaUl6WTJRME13TUNJK1BDOXdZWFJvUGp4d1lYUm9JSE4wY205clpTMXNhVzVsWTJGd1BTSnliM1Z1WkNJZ2MzUnliMnRsTFd4cGJtVnFiMmx1UFNKeWIzVnVaQ0lnWkQwaVRUZzBMamcwT0N3dE5USXVNamM1SUV3dE1DNDVORElzTFRFeUxqSTBNeUJNTFRBdU9UUXlMRGt6TGpJeE5TQk1PRFF1T0RRNExEVXpMakUzT1NCYUlpQm1hV3hzUFNJak16TTVPVEF3SWo0OEwzQmhkR2crUEM5emRtYysiLz48L3N2Zz4=",
        insetIconURL: t,
        featured: true,
        disabled: false,
        collaboratorList: [{
            collaborator: "LazyTong @ Github",
            collaboratorURL: "https://lt.js.org"
        }],
        doc: "https://lt.js.org/posts/3ad4f6"
    },
    l10n: {
        "zh-cn": {
            "Cube.name": "LazyTong的立方体 V1.2",
            "Cube.description": "升维打击！"
        },
        en: {
            "Cube.name": "LazyTong's Cube V1.2",
            "Cube.description": "Dimensionality expansion strike!"
        }
    }
});
