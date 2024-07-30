const t = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDgwIDgwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiPjxzdHlsZT4uYXtmaWxsOiNlNjJ9LmJ7ZmlsbDojNmMwfS5je2ZpbGw6IzYzNn0uZHtmaWxsOiNlZDB9LmV7ZmlsbDojMzkwfTwvc3R5bGU+PHBhdGggY2xhc3M9ImEiIGQ9Im0xMS43IDIyLjNsMjguNi0xMy40djM1LjJsLTI4LjYgMTMuM3oiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTY4LjMgMjIuNmwtMjgtMTMuN3YzNS4ybDI4IDEzLjZ6Ii8+PHBhdGggY2xhc3M9ImMiIGQ9Im0zOS43IDcxLjFsLTI4LTEzLjcgMjguNi0xMy4zIDI4IDEzLjZ6Ii8+PHBhdGggY2xhc3M9ImQiIGQ9Im02OC4zIDIyLjZsLTI4LTEzLjctMjguNiAxMy40IDI4IDEzLjZ6Ii8+PHBhdGggY2xhc3M9ImIiIGQ9Im0xMS43IDIyLjNsMjggMTMuNnYzNS4ybC0yOC0xMy43eiIvPjxwYXRoIGNsYXNzPSJlIiBkPSJtNjguMyAyMi42bC0yOC42IDEzLjN2MzUuMmwyOC42LTEzLjR6Ii8+PC9zdmc+";
void(window.tempExt = {
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
      }, this.Cube = function() {
        console.log("%cLazyTong's Cube\n       \u3000  \u3000\u2583\u2586\u2588\u2587\u2584\u2596\n\u3000 \u3000 \u3000 \u259F\u25E4\u2596\u3000\u3000\u3000\u25E5\u2588\u258E\n   \u3000 \u25E2\u25E4\u3000 \u2590\u3000\u3000\u3000 \u3000\u2590\u2589\n\u3000 \u2597\u25E4\u3000\u3000\u3000\u2582\u3000\u2597\u2596\u3000\u3000\u2595\u2588\u258E\n\u3000\u25E4\u3000\u2597\u2585\u2596\u25E5\u2584\u3000\u2580\u25E3\u3000\u3000\u2588\u258A\n\u2590\u3000\u2595\u258E\u25E5\u2596\u25E3\u25E4\u3000\u3000\u3000\u3000\u25E2\u2588\u2588\n\u2588\u25E3\u3000\u25E5\u2585\u2588\u2580\u3000\u3000\u3000\u3000\u2590\u2588\u2588\u25E4\n\u2590\u2588\u2599\u2582\u3000\u3000     \u3000\u25E2\u2588\u2588\u25E4\n\u25E5\u2588\u2588\u25E3\u3000\u3000\u3000\u3000\u25E2\u2584\u25E4\n \u3000\u3000\u2580\u2588\u2588\u2585\u2587\u2580\nVer 1.0.0\nhttps://lt.js.org ", "color:green;font-weight:bolder");
        let N = 2 * Math.PI,
          c = function(t, a) {
            for (let r in a) t[r] = a[r];
            return t
          },
          s = function(t, a, r) {
            return (a - t) * r + t
          },
          R = function(e, t) {
            return (e % t + t) % t
          },
          o = function() {},
          u = {};
        u.begin = function(t) {
          t.beginPath()
        }, u.move = function(t, a, r) {
          t.moveTo(r.x, r.y)
        }, u.line = function(t, a, r) {
          t.lineTo(r.x, r.y)
        }, u.bezier = function(r, o, d, e, t) {
          r.bezierCurveTo(d.x, d.y, e.x, e.y, t.x, t.y)
        }, u.closePath = function(t) {
          t.closePath()
        }, u.setPath = function() {}, u.renderPath = function(a, r, o, e) {
          this.begin(a, r), o.forEach(function(t) {
            t.render(a, r, u)
          }), e && this.closePath(a, r)
        }, u.stroke = function(r, o, d, e, t) {
          d && (r.strokeStyle = e, r.lineWidth = t, r.stroke())
        }, u.fill = function(a, r, o, e) {
          o && (a.fillStyle = e, a.fill())
        }, u.end = function() {};
        let k = function(t) {
          this.set(t)
        };
        k.prototype.set = function(t) {
          return this.x = t && t.x || 0, this.y = t && t.y || 0, this.z = t && t.z || 0, this
        }, k.prototype.write = function(t) {
          return t ? (this.x = null == t.x ? this.x : t.x, this.y = null == t.y ? this.y : t.y, this.z = null == t.z ? this.z : t.z, this) : this
        }, k.prototype.rotate = function(t) {
          if (t) return this.rotateZ(t.z), this.rotateY(t.y), this.rotateX(t.x), this
        }, k.prototype.rotateZ = function(t) {
          j(this, t, "x", "y")
        }, k.prototype.rotateX = function(t) {
          j(this, t, "y", "z")
        }, k.prototype.rotateY = function(t) {
          j(this, t, "x", "z")
        };
        let j = function(l, a, e, t) {
          if (a && 0 != a % N) {
            let r = Math.cos(a),
              o = Math.sin(a),
              d = l[e],
              p = l[t];
            l[e] = d * r - p * o, l[t] = p * r + d * o
          }
        };
        k.prototype.isSame = function(t) {
          return !!t && this.x === t.x && this.y === t.y && this.z === t.z
        }, k.prototype.add = function(t) {
          return t ? (this.x += t.x || 0, this.y += t.y || 0, this.z += t.z || 0, this) : this
        }, k.prototype.subtract = function(t) {
          return t ? (this.x -= t.x || 0, this.y -= t.y || 0, this.z -= t.z || 0, this) : this
        }, k.prototype.multiply = function(t) {
          return null == t ? this : ("number" == typeof t ? (this.x *= t, this.y *= t, this.z *= t) : (this.x *= null == t.x ? 1 : t.x, this.y *= null == t.y ? 1 : t.y, this.z *= null == t.z ? 1 : t.z), this)
        }, k.prototype.transform = function(t, a, r) {
          return this.multiply(r), this.rotate(a), this.add(t), this
        }, k.prototype.lerp = function(e, t) {
          return this.x = s(this.x, e.x || 0, t), this.y = s(this.y, e.y || 0, t), this.z = s(this.z, e.z || 0, t), this
        }, k.prototype.magnitude = function() {
          let t = this.x * this.x + this.y * this.y + this.z * this.z;
          return r(t)
        };
        let r = function(t) {
          return 1e-8 > Math.abs(t - 1) ? 1 : Math.sqrt(t)
        };
        k.prototype.magnitude2d = function() {
          let t = this.x * this.x + this.y * this.y;
          return r(t)
        }, k.prototype.copy = function() {
          return new k(this)
        };
        let a = {
            x: 1,
            y: 1,
            z: 1
          },
          d = function(t) {
            this.create(t || {})
          };
        d.prototype.create = function(t) {
          this.children = [], c(this, this.constructor.defaults), this.setOptions(t), this.translate = new k(t.translate), this.rotate = new k(t.rotate), this.scale = new k(a).multiply(this.scale), this.origin = new k, this.renderOrigin = new k, this.addTo && this.addTo.addChild(this)
        }, d.defaults = {}, d.optionKeys = Object.keys(d.defaults).concat(["rotate", "translate", "scale", "addTo"]), d.prototype.setOptions = function(t) {
          let a = this.constructor.optionKeys;
          for (let r in t) - 1 != a.indexOf(r) && (this[r] = t[r])
        }, d.prototype.addChild = function(t) {
          -1 != this.children.indexOf(t) || (t.remove(), t.addTo = this, this.children.push(t))
        }, d.prototype.removeChild = function(e) {
          let t = this.children.indexOf(e); - 1 != t && this.children.splice(t, 1)
        }, d.prototype.remove = function() {
          this.addTo && this.addTo.removeChild(this)
        }, d.prototype.update = function() {
          this.reset(), this.children.forEach(function(t) {
            t.update()
          }), this.transform(this.translate, this.rotate, this.scale)
        }, d.prototype.reset = function() {
          this.renderOrigin.set(this.origin)
        }, d.prototype.transform = function(a, r, o) {
          this.renderOrigin.transform(a, r, o), this.children.forEach(function(e) {
            e.transform(a, r, o)
          })
        }, d.prototype.updateGraph = function() {
          this.update(), this.updateFlatGraph(), this.flatGraph.forEach(function(t) {
            t.updateSortValue()
          }), this.flatGraph.sort(d.shapeSorter)
        }, d.shapeSorter = function(e, t) {
          return e.sortValue - t.sortValue
        }, Object.defineProperty(d.prototype, "flatGraph", {
          get: function() {
            return this._flatGraph || this.updateFlatGraph(), this._flatGraph
          },
          set: function(t) {
            this._flatGraph = t
          }
        }), d.prototype.updateFlatGraph = function() {
          this.flatGraph = this.getFlatGraph()
        }, d.prototype.getFlatGraph = function() {
          let t = [this];
          return this.addChildFlatGraph(t)
        }, d.prototype.addChildFlatGraph = function(t) {
          return this.children.forEach(function(a) {
            let r = a.getFlatGraph();
            Array.prototype.push.apply(t, r)
          }), t
        }, d.prototype.updateSortValue = function() {
          this.sortValue = this.renderOrigin.z
        }, d.prototype.render = function() {}, d.prototype.renderGraphCanvas = function(e) {
          if (!e) throw new Error("[Cube]\u672A\u63D0\u4F9B\u6E32\u67D3\u4E0A\u4E0B\u6587");
          this.flatGraph.forEach(function(t) {
            t.render(e, u)
          })
        }, d.prototype.copy = function(a) {
          let r = {},
            o = this.constructor.optionKeys;
          o.forEach(function(t) {
            r[t] = this[t]
          }, this), c(r, a);
          let t = this.constructor;
          return new t(r)
        }, d.prototype.copyGraph = function(t) {
          let r = this.copy(t);
          return this.children.forEach(function(t) {
            t.copyGraph({
              addTo: r
            })
          }), r
        }, d.prototype.normalizeRotate = function() {
          this.rotate.x = R(this.rotate.x, N), this.rotate.y = R(this.rotate.y, N), this.rotate.z = R(this.rotate.z, N)
        };
        let T = function(a) {
          return function(r) {
            let t = function(t) {
              this.create(t || {})
            };
            return t.prototype = Object.create(a.prototype), t.prototype.constructor = t, t.defaults = c({}, a.defaults), c(t.defaults, r), t.optionKeys = a.optionKeys.slice(0), Object.keys(t.defaults).forEach(function(e) {
              1 != !t.optionKeys.indexOf(e) && t.optionKeys.push(e)
            }), t.subclass = T(t), t
          }
        };
        d.subclass = T(d);
        let e = "undefined" != typeof window,
          t = "mousedown",
          l = "mousemove",
          q = "mouseup";
        e && (window.PointerEvent ? (t = "pointerdown", l = "pointermove", q = "pointerup") : "ontouchstart" in window && (t = "touchstart", l = "touchmove", q = "touchend"));
        let G = function(t) {
          this.create(t || {})
        };
        G.prototype.create = function(e) {
          this.onDragStart = e.onDragStart || o, this.onDragMove = e.onDragMove || o, this.onDragEnd = e.onDragEnd || o, this.bindDrag(e.startElement)
        }, G.prototype.bindDrag = function(a) {
          a = this.getQueryElement(a), a && (a.style.touchAction = "none", a.addEventListener(t, this))
        }, G.prototype.getQueryElement = function(t) {
          return "string" == typeof t && (t = document.querySelector(t)), t
        }, G.prototype.handleEvent = function(e) {
          let t = this["on" + e.type];
          t && t.call(this, e)
        }, G.prototype.onmousedown = G.prototype.onpointerdown = function(t) {
          this.dragStart(t, t)
        }, G.prototype.ontouchstart = function(t) {
          this.dragStart(t, t.changedTouches[0])
        }, G.prototype.dragStart = function(t, r) {
          t.preventDefault(), this.dragStartX = r.pageX, this.dragStartY = r.pageY, e && (window.addEventListener(l, this), window.addEventListener(q, this)), this.onDragStart(r)
        }, G.prototype.ontouchmove = function(t) {
          this.dragMove(t, t.changedTouches[0])
        }, G.prototype.onmousemove = G.prototype.onpointermove = function(t) {
          this.dragMove(t, t)
        }, G.prototype.dragMove = function(a, r) {
          a.preventDefault();
          let o = r.pageX - this.dragStartX,
            e = r.pageY - this.dragStartY;
          this.onDragMove(r, o, e)
        }, G.prototype.onmouseup = G.prototype.onpointerup = G.prototype.ontouchend = G.prototype.dragEnd = function() {
          window.removeEventListener(l, this), window.removeEventListener(q, this), this.onDragEnd()
        };
        let w = d.subclass({
          element: void 0,
          centered: !0,
          zoom: 1,
          dragRotate: !1,
          resize: !1,
          onPrerender: o,
          onDragStart: o,
          onDragMove: o,
          onDragEnd: o,
          onResize: o
        });
        c(w.prototype, G.prototype), w.prototype.create = function(t) {
          d.prototype.create.call(this, t), G.prototype.create.call(this, t), this.setElement(this.element), this.setDragRotate(this.dragRotate), this.setResize(this.resize)
        }, w.prototype.setElement = function(t) {
          if (t = this.element, !t) throw new Error("[Cube]\u672A\u6307\u5B9A\u5143\u7D20");
          this.setCanvas(t)
        }, w.prototype.setSize = function(a, r) {
          a = Math.round(a), r = Math.round(r), this.setSizeCanvas(a, r)
        }, w.prototype.setResize = function(t) {
          this.resize = t, this.resizeListener || (this.resizeListener = this.onWindowResize.bind(this)), t ? (window.addEventListener("resize", this.resizeListener), this.onWindowResize()) : window.removeEventListener("resize", this.resizeListener)
        }, w.prototype.onWindowResize = function() {
          this.setMeasuredSize(), this.onResize(this.width, this.height)
        }, w.prototype.setMeasuredSize = function() {
          let o, d, r = "fullscreen" == this.resize;
          if (r) o = window.innerWidth, d = window.innerHeight;
          else {
            let e = this.element.getBoundingClientRect();
            o = e.width, d = e.height
          }
          this.setSize(o, d)
        }, w.prototype.renderGraph = function(t) {
          this.renderGraphCanvas(t)
        }, w.prototype.updateRenderGraph = function(t) {
          this.updateGraph(), this.renderGraph(t)
        }, w.prototype.setCanvas = function(t) {
          this.element = t, this.ctx = this.element.getContext("2d"), this.setSizeCanvas(t.width, t.height)
        }, w.prototype.setSizeCanvas = function(a, r) {
          this.width = a, this.height = r;
          let o = this.pixelRatio = window.devicePixelRatio || 1;
          this.element.width = this.canvasWidth = a * o, this.element.height = this.canvasHeight = r * o;
          let e = 1 < o && !this.resize;
          e && (this.element.style.width = a + "px", this.element.style.height = r + "px")
        }, w.prototype.renderGraphCanvas = function(t) {
          t = t || this, this.prerenderCanvas(), d.prototype.renderGraphCanvas.call(t, this.ctx), this.postrenderCanvas()
        }, w.prototype.prerenderCanvas = function() {
          let o = this.ctx;
          if (o.lineCap = "round", o.lineJoin = "round", o.clearRect(0, 0, this.canvasWidth, this.canvasHeight), o.save(), this.centered) {
            let t = this.width / 2 * this.pixelRatio,
              a = this.height / 2 * this.pixelRatio;
            o.translate(t, a)
          }
          let e = this.pixelRatio * this.zoom;
          o.scale(e, e), this.onPrerender(o)
        }, w.prototype.postrenderCanvas = function() {
          this.ctx.restore()
        }, w.prototype.setDragRotate = function(t) {
          t && (!0 === t && (t = this), this.dragRotate = t, this.bindDrag(this.element))
        }, w.prototype.dragStart = function() {
          this.dragStartRX = this.dragRotate.rotate.x, this.dragStartRY = this.dragRotate.rotate.y, G.prototype.dragStart.apply(this, arguments)
        }, w.prototype.dragMove = function(o, d) {
          let e = d.pageX - this.dragStartX,
            t = d.pageY - this.dragStartY,
            a = Math.min(this.width, this.height);
          this.dragRotate.rotate.x = this.dragStartRX - t / a * N, this.dragRotate.rotate.y = this.dragStartRY - e / a * N, G.prototype.dragMove.apply(this, arguments)
        };
        let D = function(t, a, r) {
            this.method = t, this.points = a.map(M), this.renderPoints = a.map(V), this.previousPoint = r, this.endRenderPoint = this.renderPoints[this.renderPoints.length - 1], "arc" == t && (this.controlPoints = [new k, new k])
          },
          M = function(t) {
            return t instanceof k ? t : new k(t)
          },
          V = function(t) {
            return new k(t)
          };
        D.prototype.reset = function() {
          let a = this.points;
          this.renderPoints.forEach(function(r, o) {
            let e = a[o];
            r.set(e)
          })
        }, D.prototype.transform = function(a, r, o) {
          this.renderPoints.forEach(function(e) {
            e.transform(a, r, o)
          })
        }, D.prototype.render = function(t, a, r) {
          return this[this.method](t, a, r)
        }, D.prototype.move = function(t, a, r) {
          return r.move(t, a, this.renderPoints[0])
        }, D.prototype.line = function(t, a, r) {
          return r.line(t, a, this.renderPoints[0])
        }, D.prototype.bezier = function(o, d, l) {
          let e = this.renderPoints[0],
            t = this.renderPoints[1],
            a = this.renderPoints[2];
          return l.bezier(o, d, e, t, a)
        };
        let E = 9 / 16;
        D.prototype.arc = function(p, T, l) {
          let e = this.previousPoint,
            t = this.renderPoints[0],
            a = this.renderPoints[1],
            r = this.controlPoints[0],
            o = this.controlPoints[1];
          return r.set(e).lerp(t, E), o.set(a).lerp(t, E), l.bezier(p, T, r, o, a)
        };
        let m = d.subclass({
          stroke: 1,
          fill: !1,
          color: "#333",
          closed: !0,
          visible: !0,
          path: [{}],
          front: {
            z: 1
          },
          backface: !0
        });
        m.prototype.create = function(t) {
          d.prototype.create.call(this, t), this.updatePath(), this.front = new k(t.front || this.front), this.renderFront = new k(this.front), this.renderNormal = new k
        };
        let y = ["move", "line", "bezier", "arc"];
        m.prototype.updatePath = function() {
          this.setPath(), this.updatePathCommands()
        }, m.prototype.setPath = function() {}, m.prototype.updatePathCommands = function() {
          let r;
          this.pathCommands = this.path.map(function(o, d) {
            let e = Object.keys(o),
              t = e[0],
              l = o[t],
              c = 1 == e.length && -1 != y.indexOf(t);
            c || (t = "line", l = o);
            let i = "line" == t || "move" == t,
              s = Array.isArray(l);
            i && !s && (l = [l]), t = 0 === d ? "move" : t;
            let p = new D(t, l, r);
            return r = p.endRenderPoint, p
          })
        }, m.prototype.reset = function() {
          this.renderOrigin.set(this.origin), this.renderFront.set(this.front), this.pathCommands.forEach(function(t) {
            t.reset()
          })
        }, m.prototype.transform = function(a, r, o) {
          this.renderOrigin.transform(a, r, o), this.renderFront.transform(a, r, o), this.renderNormal.set(this.renderOrigin).subtract(this.renderFront), this.pathCommands.forEach(function(e) {
            e.transform(a, r, o)
          }), this.children.forEach(function(e) {
            e.transform(a, r, o)
          })
        }, m.prototype.updateSortValue = function() {
          let r = this.pathCommands.length,
            d = this.pathCommands[0].endRenderPoint,
            e = this.pathCommands[r - 1].endRenderPoint,
            l = 2 < r && d.isSame(e);
          l && (r -= 1);
          let T = 0;
          for (let e = 0; e < r; e++) T += this.pathCommands[e].endRenderPoint.z;
          this.sortValue = T / r
        }, m.prototype.render = function(t, a) {
          let r = this.pathCommands.length;
          if (this.visible && r && (this.isFacingBack = 0 < this.renderNormal.z, this.backface || !this.isFacingBack)) {
            if (!a) throw new Error("[Cube]\u672A\u63D0\u4F9B\u6E32\u67D3\u5668");
            a.isCanvas && 1 == r ? this.renderCanvasDot(t, a) : this.renderPath(t, a)
          }
        }, m.prototype.renderCanvasDot = function(a) {
          let r = this.getLineWidth();
          if (r) {
            a.fillStyle = this.getRenderColor();
            let e = this.pathCommands[0].endRenderPoint;
            a.beginPath(), a.arc(e.x, e.y, r / 2, 0, N), a.fill()
          }
        }, m.prototype.getLineWidth = function() {
          return this.stroke ? !0 == this.stroke ? 1 : this.stroke : 0
        }, m.prototype.getRenderColor = function() {
          let e = "string" == typeof this.backface && this.isFacingBack,
            t = e ? this.backface : this.color;
          return t
        }, m.prototype.renderPath = function(o, d) {
          let l, e = 2 == this.pathCommands.length && "line" == this.pathCommands[1].method,
            t = !e && this.closed,
            a = this.getRenderColor();
          d.renderPath(o, l, this.pathCommands, t), d.stroke(o, l, this.stroke, a, this.getLineWidth()), d.fill(o, l, this.fill, a), d.end(o, l)
        };
        let h = d.subclass({
          updateSort: !1,
          visible: !0
        });
        h.prototype.updateSortValue = function() {
          let e = 0;
          this.flatGraph.forEach(function(t) {
            t.updateSortValue(), e += t.sortValue
          }), this.sortValue = e / this.flatGraph.length, this.updateSort && this.flatGraph.sort(d.shapeSorter)
        }, h.prototype.render = function(t, a) {
          this.visible && this.flatGraph.forEach(function(r) {
            r.render(t, a)
          })
        }, h.prototype.updateFlatGraph = function() {
          this.flatGraph = this.addChildFlatGraph([])
        }, h.prototype.getFlatGraph = function() {
          return [this]
        };
        let U = m.subclass({
          width: 1,
          height: 1
        });
        U.prototype.setPath = function() {
          let e = this.width / 2,
            t = this.height / 2;
          this.path = [{
            x: -e,
            y: -t
          }, {
            x: e,
            y: -t
          }, {
            x: e,
            y: t
          }, {
            x: -e,
            y: t
          }]
        };
        let X = m.subclass({
          width: 1,
          height: 1,
          cornerRadius: .25,
          closed: !1
        });
        X.prototype.setPath = function() {
          let d = this.width / 2,
            l = this.height / 2,
            T = Math.min(d, l),
            e = Math.min(this.cornerRadius, T),
            t = d - e,
            a = l - e,
            r = [{
              x: t,
              y: -l
            }, {
              arc: [{
                x: d,
                y: -l
              }, {
                x: d,
                y: -a
              }]
            }];
          a && r.push({
            x: d,
            y: a
          }), r.push({
            arc: [{
              x: d,
              y: l
            }, {
              x: t,
              y: l
            }]
          }), t && r.push({
            x: -t,
            y: l
          }), r.push({
            arc: [{
              x: -d,
              y: l
            }, {
              x: -d,
              y: a
            }]
          }), a && r.push({
            x: -d,
            y: -a
          }), r.push({
            arc: [{
              x: -d,
              y: -l
            }, {
              x: -t,
              y: -l
            }]
          }), t && r.push({
            x: t,
            y: -l
          }), this.path = r
        };
        let z = m.subclass({
          diameter: 1,
          width: void 0,
          height: void 0,
          quarters: 4,
          closed: !1
        });
        z.prototype.setPath = function() {
          let a = null == this.width ? this.diameter : this.width,
            r = null == this.height ? this.diameter : this.height,
            o = a / 2,
            e = r / 2;
          this.path = [{
            x: 0,
            y: -e
          }, {
            arc: [{
              x: o,
              y: -e
            }, {
              x: o,
              y: 0
            }]
          }], 1 < this.quarters && this.path.push({
            arc: [{
              x: o,
              y: e
            }, {
              x: 0,
              y: e
            }]
          }), 2 < this.quarters && this.path.push({
            arc: [{
              x: -o,
              y: e
            }, {
              x: -o,
              y: 0
            }]
          }), 3 < this.quarters && this.path.push({
            arc: [{
              x: -o,
              y: -e
            }, {
              x: 0,
              y: -e
            }]
          })
        };
        let b = m.subclass({
          sides: 3,
          radius: .5
        });
        b.prototype.setPath = function() {
          this.path = [];
          for (let r = 0; r < this.sides; r++) {
            let o = r / this.sides * N - N / 4,
              e = Math.cos(o) * this.radius,
              t = Math.sin(o) * this.radius;
            this.path.push({
              x: e,
              y: t
            })
          }
        };
        let g = z.subclass({
          fill: !0
        });
        g.prototype.create = function() {
          z.prototype.create.apply(this, arguments), this.apex = new d({
            addTo: this,
            translate: {
              z: this.diameter / 2
            }
          }), this.renderCentroid = new k
        }, g.prototype.updateSortValue = function() {
          this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin, 3 / 8), this.sortValue = this.renderCentroid.z
        }, g.prototype.render = function(e, t) {
          this.renderDome(e, t), z.prototype.render.apply(this, arguments)
        }, g.prototype.renderDome = function(d, l) {
          if (this.visible) {
            let T = this.getDomeRenderElement(d, l),
              e = Math.atan2(this.renderNormal.y, this.renderNormal.x),
              t = this.diameter / 2 * this.renderNormal.magnitude(),
              a = this.renderOrigin.x,
              r = this.renderOrigin.y;
            l.stroke(d, T, this.stroke, this.color, this.getLineWidth()), l.fill(d, T, this.fill, this.color), l.end(d, T)
          }
        };
        let f = h.subclass({
          color: "#333",
          updateSort: !0
        });
        f.prototype.create = function() {
          h.prototype.create.apply(this, arguments), this.pathCommands = [new D("move", [{}]), new D("line", [{}])]
        }, f.prototype.render = function(e, t) {
          this.renderCylinderSurface(e, t), h.prototype.render.apply(this, arguments)
        }, f.prototype.renderCylinderSurface = function(d, l) {
          if (this.visible) {
            let T, e = this.frontBase,
              t = this.rearBase,
              a = e.renderNormal.magnitude(),
              r = e.diameter * a + e.getLineWidth();
            this.pathCommands[0].renderPoints[0].set(e.renderOrigin), this.pathCommands[1].renderPoints[0].set(t.renderOrigin), l.renderPath(d, T, this.pathCommands), l.stroke(d, T, !0, this.color, r), l.end(d, T)
          }
        }, f.prototype.copyGraph = o;
        let x = z.subclass();
        x.prototype.copyGraph = o;
        let F = m.subclass({
          diameter: 1,
          length: 1,
          frontFace: void 0,
          fill: !0
        });
        F.prototype.create = function() {
          m.prototype.create.apply(this, arguments), this.group = new f({
            addTo: this,
            color: this.color,
            visible: this.visible
          });
          let t = this.length / 2,
            a = this.backface || !0;
          this.frontBase = this.group.frontBase = new z({
            addTo: this.group,
            diameter: this.diameter,
            translate: {
              z: t
            },
            rotate: {
              y: N / 2
            },
            color: this.color,
            stroke: this.stroke,
            fill: this.fill,
            backface: this.frontFace || a,
            visible: this.visible
          }), this.rearBase = this.group.rearBase = this.frontBase.copy({
            translate: {
              z: -t
            },
            rotate: {
              y: 0
            },
            backface: a
          })
        }, F.prototype.render = function() {}, ["stroke", "fill", "color", "visible"].forEach(function(t) {
          let a = "_" + t;
          Object.defineProperty(F.prototype, t, {
            get: function() {
              return this[a]
            },
            set: function(r) {
              this[a] = r, this.frontBase && (this.frontBase[t] = r, this.rearBase[t] = r, this.group[t] = r)
            }
          })
        });
        let O = z.subclass({
          length: 1,
          fill: !0
        });
        O.prototype.create = function() {
          z.prototype.create.apply(this, arguments), this.apex = new d({
            addTo: this,
            translate: {
              z: this.length
            }
          }), this.renderApex = new k, this.renderCentroid = new k, this.tangentA = new k, this.tangentB = new k, this.surfacePathCommands = [new D("move", [{}]), new D("line", [{}]), new D("line", [{}])]
        }, O.prototype.updateSortValue = function() {
          this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin, 1 / 3), this.sortValue = this.renderCentroid.z
        }, O.prototype.render = function(e, t) {
          this.renderConeSurface(e, t), z.prototype.render.apply(this, arguments)
        }, O.prototype.renderConeSurface = function(l, T) {
          if (this.visible) {
            this.renderApex.set(this.apex.renderOrigin).subtract(this.renderOrigin);
            let e = this.renderNormal.magnitude(),
              n = this.renderApex.magnitude2d(),
              t = this.renderNormal.magnitude2d(),
              a = Math.acos(t / e),
              i = Math.sin(a),
              c = this.diameter / 2 * e;
            if (c * i < n) {
              let e = Math.atan2(this.renderNormal.y, this.renderNormal.x) + N / 2,
                t = Math.acos(c / (n / i)),
                a = this.tangentA,
                r = this.tangentB;
              a.x = Math.cos(t) * c * i, a.y = Math.sin(t) * c, r.set(this.tangentA), r.y *= -1, a.rotateZ(e), r.rotateZ(e), a.add(this.renderOrigin), r.add(this.renderOrigin), this.setSurfaceRenderPoint(0, a), this.setSurfaceRenderPoint(1, this.apex.renderOrigin), this.setSurfaceRenderPoint(2, r);
              let o = this.getSurfaceRenderElement(l, T);
              T.renderPath(l, o, this.surfacePathCommands), T.stroke(l, o, this.stroke, this.color, this.getLineWidth()), T.fill(l, o, this.fill, this.color), T.end(l, o)
            }
          }
        }, O.prototype.setSurfaceRenderPoint = function(t, a) {
          let r = this.surfacePathCommands[t].renderPoints[0];
          r.set(a)
        };
        let W = U.subclass();
        W.prototype.copyGraph = function() {};
        let Z = ["frontFace", "rearFace", "leftFace", "rightFace", "topFace", "bottomFace"],
          C = c({}, m.defaults);
        delete C.path, Z.forEach(function(t) {
          C[t] = !0
        }), c(C, {
          width: 1,
          height: 1,
          depth: 1,
          fill: !0
        });
        let J = d.subclass(C);
        return J.prototype.create = function(t) {
          d.prototype.create.call(this, t), this.updatePath(), this.fill = this.fill
        }, J.prototype.updatePath = function() {
          Z.forEach(function(t) {
            this[t] = this[t]
          }, this)
        }, Z.forEach(function(t) {
          let a = "_" + t;
          Object.defineProperty(J.prototype, t, {
            get: function() {
              return this[a]
            },
            set: function(r) {
              this[a] = r, this.setFace(t, r)
            }
          })
        }), J.prototype.setFace = function(a, r) {
          let o = a + "Rect",
            e = this[o];
          if (!r) return void this.removeChild(e);
          let l = this.getFaceOptions(a);
          l.color = "string" == typeof r ? r : this.color, e ? e.setOptions(l) : e = this[o] = new W(l), e.updatePath(), this.addChild(e)
        }, J.prototype.getFaceOptions = function(e) {
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
                y: N / 2
              }
            },
            leftFace: {
              width: this.depth,
              height: this.height,
              translate: {
                x: -this.width / 2
              },
              rotate: {
                y: -N / 4
              }
            },
            rightFace: {
              width: this.depth,
              height: this.height,
              translate: {
                x: this.width / 2
              },
              rotate: {
                y: N / 4
              }
            },
            topFace: {
              width: this.width,
              height: this.depth,
              translate: {
                y: -this.height / 2
              },
              rotate: {
                x: -N / 4
              }
            },
            bottomFace: {
              width: this.width,
              height: this.depth,
              translate: {
                y: this.height / 2
              },
              rotate: {
                x: N / 4
              }
            }
          } [e]
        }, ["color", "stroke", "fill", "backface", "front", "visible"].forEach(function(a) {
          let e = "_" + a;
          Object.defineProperty(J.prototype, a, {
            get: function() {
              return this[e]
            },
            set: function(r) {
              this[e] = r, Z.forEach(function(o) {
                let d = this[o + "Rect"],
                  e = "string" == typeof this[o];
                d && !("color" == a && e) && (d[a] = r)
              }, this)
            }
          })
        }), {
          init: w,
          custom: m,
          rect: U,
          roundedRect: X,
          ellipse: z,
          polygon: b,
          hemisphere: g,
          cylinder: F,
          cone: O,
          box: J
        }
      }(), (null === this.canvas() || null === this.cubeParent()) && console.error("[Cube]\u65E0\u6CD5\u5B9A\u4F4D\u5230\u821E\u53F0"), (() => {
        if (null !== this.canvas() && null !== this.cubeParent()) {
          let a = document.createElement("canvas");
          a.setAttribute("id", "Cube"), a.setAttribute("width", this.canvas().width), a.setAttribute("height", this.canvas().height);
          let e = a.style;
          e.position = "absolute", e.left = "0%", e.top = "0%", e.pointerEvents = "none", this.cubeParent().appendChild(a), this.cubeScene = new this.Cube.init({
            element: document.getElementById("Cube")
          }), new MutationObserver(() => {
            for (let e in a.setAttribute("width", this.canvas().width), a.setAttribute("height", this.canvas().height), this.cubeScene = new this.Cube.init({
                element: document.getElementById("Cube")
              }), this.objectList) this.cubeScene.addChild(this.objectList[e]);
            this.cubeScene.updateRenderGraph()
          }).observe(this.canvas(), {
            attributes: !0
          })
        }
      })(), this._formatMessage = e.getFormatMessage({
        "zh-cn": {
          "Cube.name": "LazyTong\u7684\u7ACB\u65B9\u4F53",
          "Cube.createRect": "\u521B\u5EFA\u6216\u4FEE\u6539\u4E00\u4E2A\u77E9\u5F62\u5E76\u547D\u540D\u4E3A[id]\uFF0CX[x]Y[y]Z[z]\u5BBD[width]\u9AD8[height]\u989C\u8272[color]\u5927\u5C0F[stroke]%",
          "Cube.createRoundedRect": "\u521B\u5EFA\u6216\u4FEE\u6539\u4E00\u4E2A\u5706\u89D2\u77E9\u5F62\u5E76\u547D\u540D\u4E3A[id]\uFF0CX[x]Y[y]Z[z]\u5BBD[width]\u9AD8[height]\u989C\u8272[color]\u8FB9\u89D2\u5F27\u5EA6[radius]\u5927\u5C0F[stroke]%",
          "Cube.createCircle": "\u521B\u5EFA\u6216\u4FEE\u6539\u4E00\u4E2A\u5706\u5F62\u5E76\u547D\u540D\u4E3A[id]\uFF0CX[x]Y[y]Z[z]\u989C\u8272[color]\u534A\u5F84[diameter]\u5B8C\u6574\u6027[quarters]",
          "Cube.createEllipse": "\u521B\u5EFA\u6216\u4FEE\u6539\u4E00\u4E2A\u692D\u5706\u5F62\u5E76\u547D\u540D\u4E3A[id]\uFF0CX[x]Y[y]Z[z]\u5BBD[width]\u9AD8[height]\u989C\u8272[color]\u5927\u5C0F[stroke]%",
          "Cube.createPolygon": "\u521B\u5EFA\u6216\u4FEE\u6539\u4E00\u4E2A[sides]\u8FB9\u5F62\u5E76\u547D\u540D\u4E3A[id]\uFF0CX[x]Y[y]Z[z]\u5BBD[width]\u9AD8[height]\u989C\u8272[color]\u8FB9\u89D2\u5F27\u5EA6[radius]\u5927\u5C0F[stroke]%",
          "Cube.createHemisphere": "\u521B\u5EFA\u6216\u4FEE\u6539\u4E00\u4E2A\u534A\u5706\u5E76\u547D\u540D\u4E3A[id]\uFF0CX[x]Y[y]Z[z]\u989C\u8272[color]\u5730\u9762\u989C\u8272[backface]\u534A\u5F84[diameter]\u5927\u5C0F[stroke]%",
          "Cube.createCone": "\u521B\u5EFA\u6216\u4FEE\u6539\u4E00\u4E2A\u5706\u9525\u4F53\u5E76\u547D\u540D\u4E3A[id]\uFF0CX[x]Y[y]Z[z]\u989C\u8272[color]\u5730\u9762\u989C\u8272[backface]\u957F\u5EA6[length]\u534A\u5F84[diameter]\u5927\u5C0F[stroke]%",
          "Cube.createCylinder": "\u521B\u5EFA\u6216\u4FEE\u6539\u4E00\u4E2A\u5706\u67F1\u4F53\u5E76\u547D\u540D\u4E3A[id]\uFF0CX[x]Y[y]Z[z]\u989C\u8272[color]\u9876\u90E8\u989C\u8272[frontface]\u5730\u9762\u989C\u8272[backface]\u957F\u5EA6[length]\u5927\u5C0F[stroke]%",
          "Cube.createBox": "\u521B\u5EFA\u6216\u4FEE\u6539\u4E00\u4E2A\u7ACB\u65B9\u4F53\u5E76\u547D\u540D\u4E3A[id]\uFF0CX[x]Y[y]Z[z]\u5BBD[width]\u9AD8[height]\u5C3A\u5BF8[depth]\u989C\u8272[color]\u5DE6\u4FA7\u989C\u8272[leftface]\u53F3\u4FA7\u989C\u8272[rightface]\u9876\u90E8\u989C\u8272[topface]\u5730\u9762\u989C\u8272[bottomface]\u5927\u5C0F[stroke]%",
          "Cube.createCustom": "\u521B\u5EFA\u6216\u4FEE\u6539\u4E00\u4E2A\u81EA\u5B9A\u4E49\u6A21\u578B\u5E76\u547D\u540D\u4E3A[id]\uFF0CX[x]Y[y]Z[z]\u989C\u8272[color]\u8282\u70B9\u4F4D\u7F6E[path]\u8282\u70B9\u5927\u5C0F[stroke]%",
          "Cube.deleteObject": "\u5220\u9664\u7269\u4F53[id]",
          "Cube.getAttrib": "\u7269\u4F53[id]\u7684[type]",
          "Cube.deleteAllObject": "\u5220\u9664\u6240\u6709\u7269\u4F53",
          "Cube.getObjectNumbers": "\u7269\u4F53\u603B\u6570",
          "Cube.getObjectList": "\u7269\u4F53ID\u5217\u8868",
          "Cube.x": "X",
          "Cube.y": "Y",
          "Cube.z": "Z",
          "Cube.width": "\u5BBD\u5EA6",
          "Cube.height": "\u9AD8\u5EA6",
          "Cube.color": "\u989C\u8272",
          "Cube.stroke": "\u5927\u5C0F",
          "Cube.quarters": "\u5B8C\u6574\u6027",
          "Cube.cornerRadius": "\u8FB9\u89D2\u5F27\u5EA6",
          "Cube.radius": "\u5F27\u5EA6",
          "Cube.setRotate": "\u8BBE\u7F6E\u7269\u4F53[id]\u5728[type]\u4E0A\u65CB\u8F6C[rotate]\u5EA6",
          "Cube.updateRender": "\u6E32\u67D3\u5F53\u524D\u8BBE\u7F6E\u7684\u7269\u4F53",
          "Cube.docs": "\u62D3\u5C55\u6559\u7A0B",
          "Cube.create": "\u521B\u5EFA\u7269\u4F53",
          "Cube.modify": "\u4FEE\u6539\u7269\u4F53",
          "Cube.info": "\u4FE1\u606F"
        },
        en: {
          "Cube.name": "LazyTong's Cube",
          "Cube.createRect": "Create or Modify a Rectangle named[id], X[x]Y[y]Z[z] Width[width] Height[height] Color[color] Stroke[stroke]%",
          "Cube.createRoundedRect": "Create or Modify a Rounded Rectangle named [id], X[x]Y[y]Z[z] Width[width] Height[height] Color[color] Corner Radius[radius] Stroke[stroke]%",
          "Cube.createCircle": "Create or Modify a Circle named[id], X[x]Y[y]Z[z] Color[color] Diameter[diameter] Quarters[quarters]",
          "Cube.createEllipse": "Create or Modify an Ellipse named[id], X[x]Y[y]Z[z] Width[width] Height[height] Color[color] Stroke[stroke]%",
          "Cube.createPolygon": "Create or Modify a [sides] Polygon named [id], X[x]Y[y]Z[z] Width[width] Height[height] Color[color] Corner Radius[radius] Stroke[stroke]%",
          "Cube.createHemisphere": "Create or Modify a Hemisphere named [id], X[x]Y[y]Z[z] Color[color] Backface Color[backface] Diameter[diameter] Stroke[stroke]%",
          "Cube.createCone": "Create or Modify a Cone named[id], X[x]Y[y]Z[z] Color[color] Backface Color[backface] Length[length] Diameter[diameter] Stroke[stroke]%",
          "Cube.createCylinder": "Create or Modify a Cylinder named[id], X[x]Y[y]Z[z] Color[color] Frontface Color[frontface] Backface Color[backface] Length[length] Stroke[stroke]%",
          "Cube.createBox": "Create or Modify a Box named[id], X[x]Y[y]Z[z] Width[width] Height[height] Depth[depth] Color[color] Leftface Color[leftface] Rightface Color[rightface] Topface Color[topface] Bottomface Color[bottomface] Stroke[stroke]%",
          "Cube.createCustom": "Create or Modify a Custom Model named[id], X[x]Y[y]Z[z] Color[color] Path[path] Stroke[stroke]%",
          "Cube.deleteObject": "Delete Object[id]",
          "Cube.getAttrib": "Get[type] of Object[id]",
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
          "Cube.info": "Information"
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
              defaultValue: "{}"
            },
            stroke: {
              type: "number",
              defaultValue: "100"
            }
          }
        }, `---${this.formatMessage("Cube.modify")}`,  {
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
        }, `---${this.formatMessage("Cube.info")}`,  {
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
      e.href = "https://lt.js.org/posts/20240718", e.rel = "noopener noreferrer", e.target = "_blank", e.click()
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
    createCustom(e) {
      null !== this.canvas() && null !== this.cubeParent() && "{}" !== e.path && (void 0 !== this.objectList[e.id] && (this.cubeScene.removeChild(this.objectList[e.id]), this.objectList[e.id] = void 0), this.objectList[e.id] = new this.Cube.custom({
        stroke: +e.stroke / 100,
        color: (() => /^#([0-9a-f]{6})$/i.test(e.color) ? e.color : "#" + Math.floor(16777215 * Math.random()).toString(16))(),
        path: JSON.parse(e.path),
        translate: {
          x: +e.x,
          y: +e.y,
          z: +e.z
        }
      }), this.cubeScene.addChild(this.objectList[e.id]))
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
      if (void 0 !== typeof this.objectList[e.id]) switch (e.type) {
        case "x":
          return "undefined" == typeof this.objectList[e.id].translate.x ? "" : this.objectList[e.id].translate.x;
        case "y":
          return "undefined" == typeof this.objectList[e.id].translate.y ? "" : this.objectList[e.id].translate.y;
        case "z":
          return "undefined" == typeof this.objectList[e.id].translate.z ? "" : this.objectList[e.id].translate.z;
        case "width":
          return "undefined" == typeof this.objectList[e.id].width ? "" : this.objectList[e.id].width;
        case "height":
          return "undefined" == typeof this.objectList[e.id].height ? "" : this.objectList[e.id].height;
        case "color":
          return "undefined" == typeof this.objectList[e.id].color ? "" : this.objectList[e.id].color;
        case "stroke":
          return "undefined" == typeof this.objectList[e.id].stroke ? "" : this.objectList[e.id].stroke;
        case "quarters":
          return "undefined" == typeof this.objectList[e.id].quarters ? "" : this.objectList[e.id].quarters;
        case "cornerRadius":
          return "undefined" == typeof this.objectList[e.id].cornerRadius ? "" : this.objectList[e.id].cornerRadius;
        case "radius":
          return "undefined" == typeof this.objectList[e.id].radius ? "" : this.objectList[e.id].radius;
        default:
          return "";
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
        default:
      }
    }
    getObjectList() {
      return Object.keys(this.objectList)
    }
    updateRender() {
      this.cubeScene.updateRenderGraph()
    }
  },
  info: {
    name: "Cube.name",
    description: "Cube.description",
    extensionId: "LazyTong.Cube",
    iconURL: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYwMCAzNzIiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzcyIiBmaWxsPSJ3aGl0ZSI+PGltYWdlIHdpZHRoPSIyNDAwIiBoZWlnaHQ9IjgwMCIgdHJhbnNmb3JtPSJtYXRyaXgoLjM2MiwwLDAsLjM2MiwtMTM1LDgyKSIgaHJlZj0iZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIaHRiRzV6T25OMloycHpQU0pvZEhSd09pOHZjM1puYW5NdVpHVjJMM04yWjJweklpQjJhV1YzUW05NFBTSXdJREFnTWpRd01DQTRNREFpSUc5d1lXTnBkSGs5SWpFaVBqeGtaV1p6UGp4c2FXNWxZWEpIY21Ga2FXVnVkQ0I0TVQwaU5UQWxJaUI1TVQwaU1DVWlJSGd5UFNJMU1DVWlJSGt5UFNJeE1EQWxJaUJwWkQwaWMzTnpkWEptTFdkeVlXUWlQanh6ZEc5d0lITjBiM0F0WTI5c2IzSTlJbWh6YkNneU1EVXNJRFk1SlN3Z05qQWxLU0lnYzNSdmNDMXZjR0ZqYVhSNVBTSXhJaUJ2Wm1aelpYUTlJakFsSWo0OEwzTjBiM0ErUEhOMGIzQWdjM1J2Y0MxamIyeHZjajBpYUhOc0tESXdOU3dnTmprbExDQTRNQ1VwSWlCemRHOXdMVzl3WVdOcGRIazlJakVpSUc5bVpuTmxkRDBpTVRBd0pTSStQQzl6ZEc5d1Bqd3ZiR2x1WldGeVIzSmhaR2xsYm5RK1BDOWtaV1p6UGp4bklHWnBiR3c5SW5WeWJDZ2pjM056ZFhKbUxXZHlZV1FwSWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNneExEQXNNQ3d4TERFd0xqVTVNekF4TnpVM09ERXlOU3c0Tmk0eE5UTXdNVFV4TXpZM01UZzNOU2tpUGp4d1lYUm9JR1E5SWswdE1UQXNNVEJETVRrdU9EWXhNVEV4TVRFeE1URXhNVEVzTWpRdU56a3hOalkyTmpZMk5qWTJOalk0TERjMUxqWTVORFEwTkRRME5EUTBORFEyTERrM0xqZzNOU3d4TXpNdU16TXpNek16TXpNek16TXpNelFzT0RGRE1Ua3dMamszTWpJeU1qSXlNakl5TWpJekxEWTBMakV5TlN3eU1URXVNVEV4TVRFeE1URXhNVEV4TVRRc0xUVTNMamczTlN3eU5qWXVOalkyTmpZMk5qWTJOalkyTnl3dE56RkRNekl5TGpJeU1qSXlNakl5TWpJeU1qSXpMQzA0TkM0eE1qVXNNelEwTGpRME5EUTBORFEwTkRRME5EUTJMRFV1TnpBNE16TXpNek16TXpNek16TXlMRFF3TUN3eE9FTTBOVFV1TlRVMU5UVTFOVFUxTlRVMU5UUXNNekF1TWpreE5qWTJOalkyTmpZMk5qWTRMRFEzTnk0M056YzNOemMzTnpjM056YzRMQzB4Tmk0ek56VXNOVE16TGpNek16TXpNek16TXpNek16UXNMVEV5UXpVNE9DNDRPRGc0T0RnNE9EZzRPRGc1TEMwM0xqWXlOU3cyTVRFdU1URXhNVEV4TVRFeE1URXhNaXcwTVM0d09ETXpNek16TXpNek16TXpNellzTmpZMkxqWTJOalkyTmpZMk5qWTJOamNzTXpsRE56SXlMakl5TWpJeU1qSXlNakl5TWpNc016WXVPVEUyTmpZMk5qWTJOalkyTmpZMExEYzBOQzQwTkRRME5EUTBORFEwTkRRMUxDMHlOeXc0TURBc0xUSXlRemcxTlM0MU5UVTFOVFUxTlRVMU5UVTFMQzB4Tnl3NE56Y3VOemMzTnpjM056YzNOemMzT0N3Mk5DNDBOVGd6TXpNek16TXpNek16TXl3NU16TXVNek16TXpNek16TXpNek16TkN3Mk0wTTVPRGd1T0RnNE9EZzRPRGc0T0RnNE9TdzJNUzQxTkRFMk5qWTJOalkyTmpZMk5qUXNNVEF4TVM0eE1URXhNVEV4TVRFeE1URXlMQzB6TUM0Mk5qWTJOalkyTmpZMk5qWTJOamdzTVRBMk5pNDJOalkyTmpZMk5qWTJOalkzTEMweU9VTXhNVEl5TGpJeU1qSXlNakl5TWpJeU1qSXNMVEkzTGpNek16TXpNek16TXpNek16TXpNaXd4TVRRMExqUTBORFEwTkRRME5EUTBORE1zTmpjdU1qVXNNVEl3TUN3M01VTXhNalUxTGpVMU5UVTFOVFUxTlRVMU5UY3NOelF1TnpVc01USTNOeTQzTnpjM056YzNOemMzTnpjNExDMHhOUzQzT1RFMk5qWTJOalkyTmpZMk5qZ3NNVE16TXk0ek16TXpNek16TXpNek16TTFMQzB4TVVNeE16ZzRMamc0T0RnNE9EZzRPRGc0T1RFc0xUWXVNakE0TXpNek16TXpNek16TXpNekxERTBNVEV1TVRFeE1URXhNVEV4TVRFeE15dzRPUzQyTWpVc01UUTJOaTQyTmpZMk5qWTJOalkyTmpZM0xEazBRekUxTWpJdU1qSXlNakl5TWpJeU1qSXlNaXc1T0M0ek56VXNNVFUwTkM0ME5EUTBORFEwTkRRME5EUXpMREUyTGpnM05Td3hOakF3TERFd1F6RTJOVFV1TlRVMU5UVTFOVFUxTlRVMU55d3pMakV5TlN3eE5qYzNMamMzTnpjM056YzNOemMzTnpnc05qSXVNRFF4TmpZMk5qWTJOalkyTmpZMExERTNNek11TXpNek16TXpNek16TXpNek5TdzJNVU14TnpnNExqZzRPRGc0T0RnNE9EZzRPVEVzTlRrdU9UVTRNek16TXpNek16TXpNek0yTERFNE1URXVNVEV4TVRFeE1URXhNVEV4TERFdU5qWTJOalkyTmpZMk5qWTJOalkzTERFNE5qWXVOalkyTmpZMk5qWTJOalkyTnl3MVF6RTVNakl1TWpJeU1qSXlNakl5TWpJeU5DdzRMak16TXpNek16TXpNek16TXpNek1pd3hPVFEwTGpRME5EUTBORFEwTkRRME5EWXNOell1TVRZMk5qWTJOalkyTmpZMk5qY3NNakF3TUM0d01EQXdNREF3TURBd01EQXlMRGMzUXpJd05UVXVOVFUxTlRVMU5UVTFOVFUxTnl3M055NDRNek16TXpNek16TXpNek16TXl3eU1EYzNMamMzTnpjM056YzNOemMzT0N3eExqVXNNakV6TXk0ek16TXpNek16TXpNek16TTFMRGxETWpFNE9DNDRPRGc0T0RnNE9EZzRPRGtzTVRZdU5Td3lNakV4TGpFeE1URXhNVEV4TVRFeE1UTXNNVEV6TGpnek16TXpNek16TXpNek16TXpMREl5TmpZdU5qWTJOalkyTmpZMk5qWTNMREV4TTBNeU16SXlMakl5TWpJeU1qSXlNakl5TWpZc01URXlMakUyTmpZMk5qWTJOalkyTmpZM0xESXpNakF1TVRNNE9EZzRPRGc0T0RnNUxDMDFOQzQzT1RFMk5qWTJOalkyTmpZMk55d3lOREF3TERWRE1qUTNPUzQ0TmpFeE1URXhNVEV4TVRFc05qUXVOemt4TmpZMk5qWTJOalkyTmpjc016STFOQzR4TmpZMk5qWTJOalkyTmpZMUxESXhNeTQxTkRFMk5qWTJOalkyTmpZMk9Td3lOalV3TERRd01FTXlNRFExTGpnek16TXpNek16TXpNek16VXNOVGcyTGpRMU9ETXpNek16TXpNek16TXNNVFUyTGpJMUxEYzVOUzQ0TXpNek16TXpNek16TXpNMExDMDFNREFzT1RBd0lpQjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3hMREFzTUN3eExEQXNNVEl3S1NJZ2IzQmhZMmwwZVQwaU1DNHdOU0krUEM5d1lYUm9Qanh3WVhSb0lHUTlJazB0TVRBc01UQkRNVGt1T0RZeE1URXhNVEV4TVRFeE1URXNNalF1TnpreE5qWTJOalkyTmpZMk5qWTRMRGMxTGpZNU5EUTBORFEwTkRRME5EUTJMRGszTGpnM05Td3hNek11TXpNek16TXpNek16TXpNek16UXNPREZETVRrd0xqazNNakl5TWpJeU1qSXlNakl6TERZMExqRXlOU3d5TVRFdU1URXhNVEV4TVRFeE1URXhNVFFzTFRVM0xqZzNOU3d5TmpZdU5qWTJOalkyTmpZMk5qWTJOeXd0TnpGRE16SXlMakl5TWpJeU1qSXlNakl5TWpJekxDMDROQzR4TWpVc016UTBMalEwTkRRME5EUTBORFEwTkRRMkxEVXVOekE0TXpNek16TXpNek16TXpNeUxEUXdNQ3d4T0VNME5UVXVOVFUxTlRVMU5UVTFOVFUxTlRRc016QXVNamt4TmpZMk5qWTJOalkyTmpZNExEUTNOeTQzTnpjM056YzNOemMzTnpjNExDMHhOaTR6TnpVc05UTXpMak16TXpNek16TXpNek16TXpRc0xURXlRelU0T0M0NE9EZzRPRGc0T0RnNE9EZzVMQzAzTGpZeU5TdzJNVEV1TVRFeE1URXhNVEV4TVRFeE1pdzBNUzR3T0RNek16TXpNek16TXpNek16WXNOalkyTGpZMk5qWTJOalkyTmpZMk5qY3NNemxETnpJeUxqSXlNakl5TWpJeU1qSXlNak1zTXpZdU9URTJOalkyTmpZMk5qWTJOalkwTERjME5DNDBORFEwTkRRME5EUTBORFExTEMweU55dzRNREFzTFRJeVF6ZzFOUzQxTlRVMU5UVTFOVFUxTlRVMUxDMHhOeXc0TnpjdU56YzNOemMzTnpjM056YzNPQ3cyTkM0ME5UZ3pNek16TXpNek16TXpNeXc1TXpNdU16TXpNek16TXpNek16TXpOQ3cyTTBNNU9EZ3VPRGc0T0RnNE9EZzRPRGc0T1N3Mk1TNDFOREUyTmpZMk5qWTJOalkyTmpRc01UQXhNUzR4TVRFeE1URXhNVEV4TVRFeUxDMHpNQzQyTmpZMk5qWTJOalkyTmpZMk5qZ3NNVEEyTmk0Mk5qWTJOalkyTmpZMk5qWTNMQzB5T1VNeE1USXlMakl5TWpJeU1qSXlNakl5TWpJc0xUSTNMak16TXpNek16TXpNek16TXpNek1pd3hNVFEwTGpRME5EUTBORFEwTkRRME5ETXNOamN1TWpVc01USXdNQ3czTVVNeE1qVTFMalUxTlRVMU5UVTFOVFUxTlRjc056UXVOelVzTVRJM055NDNOemMzTnpjM056YzNOemM0TEMweE5TNDNPVEUyTmpZMk5qWTJOalkyTmpnc01UTXpNeTR6TXpNek16TXpNek16TXpNMUxDMHhNVU14TXpnNExqZzRPRGc0T0RnNE9EZzRPVEVzTFRZdU1qQTRNek16TXpNek16TXpNek16TERFME1URXVNVEV4TVRFeE1URXhNVEV4TXl3NE9TNDJNalVzTVRRMk5pNDJOalkyTmpZMk5qWTJOalkzTERrMFF6RTFNakl1TWpJeU1qSXlNakl5TWpJeU1pdzVPQzR6TnpVc01UVTBOQzQwTkRRME5EUTBORFEwTkRRekxERTJMamczTlN3eE5qQXdMREV3UXpFMk5UVXVOVFUxTlRVMU5UVTFOVFUxTnl3ekxqRXlOU3d4TmpjM0xqYzNOemMzTnpjM056YzNOemdzTmpJdU1EUXhOalkyTmpZMk5qWTJOalkwTERFM016TXVNek16TXpNek16TXpNek16TlN3Mk1VTXhOemc0TGpnNE9EZzRPRGc0T0RnNE9URXNOVGt1T1RVNE16TXpNek16TXpNek16TTJMREU0TVRFdU1URXhNVEV4TVRFeE1URXhMREV1TmpZMk5qWTJOalkyTmpZMk5qWTNMREU0TmpZdU5qWTJOalkyTmpZMk5qWTJOeXcxUXpFNU1qSXVNakl5TWpJeU1qSXlNakl5TkN3NExqTXpNek16TXpNek16TXpNek16TWl3eE9UUTBMalEwTkRRME5EUTBORFEwTkRZc056WXVNVFkyTmpZMk5qWTJOalkyTmpjc01qQXdNQzR3TURBd01EQXdNREF3TURBeUxEYzNRekl3TlRVdU5UVTFOVFUxTlRVMU5UVTFOeXczTnk0NE16TXpNek16TXpNek16TXpNeXd5TURjM0xqYzNOemMzTnpjM056YzNPQ3d4TGpVc01qRXpNeTR6TXpNek16TXpNek16TXpNMUxEbERNakU0T0M0NE9EZzRPRGc0T0RnNE9Ea3NNVFl1TlN3eU1qRXhMakV4TVRFeE1URXhNVEV4TVRNc01URXpMamd6TXpNek16TXpNek16TXpNekxESXlOall1TmpZMk5qWTJOalkyTmpZM0xERXhNME15TXpJeUxqSXlNakl5TWpJeU1qSXlNallzTVRFeUxqRTJOalkyTmpZMk5qWTJOalkzTERJek1qQXVNVE00T0RnNE9EZzRPRGc1TEMwMU5DNDNPVEUyTmpZMk5qWTJOalkyTnl3eU5EQXdMRFZETWpRM09TNDROakV4TVRFeE1URXhNVEVzTmpRdU56a3hOalkyTmpZMk5qWTJOamNzTXpJMU5DNHhOalkyTmpZMk5qWTJOalkxTERJeE15NDFOREUyTmpZMk5qWTJOalkyT1N3eU5qVXdMRFF3TUVNeU1EUTFMamd6TXpNek16TXpNek16TXpVc05UZzJMalExT0RNek16TXpNek16TXpNc01UVTJMakkxTERjNU5TNDRNek16TXpNek16TXpNek0wTEMwMU1EQXNPVEF3SWlCMGNtRnVjMlp2Y20wOUltMWhkSEpwZUNneExEQXNNQ3d4TERBc01qUXdLU0lnYjNCaFkybDBlVDBpTUM0ek55SStQQzl3WVhSb1BqeHdZWFJvSUdROUlrMHRNVEFzTVRCRE1Ua3VPRFl4TVRFeE1URXhNVEV4TVRFc01qUXVOemt4TmpZMk5qWTJOalkyTmpZNExEYzFMalk1TkRRME5EUTBORFEwTkRRMkxEazNMamczTlN3eE16TXVNek16TXpNek16TXpNek16TXpRc09ERkRNVGt3TGprM01qSXlNakl5TWpJeU1qSXpMRFkwTGpFeU5Td3lNVEV1TVRFeE1URXhNVEV4TVRFeE1UUXNMVFUzTGpnM05Td3lOall1TmpZMk5qWTJOalkyTmpZMk55d3ROekZETXpJeUxqSXlNakl5TWpJeU1qSXlNakl6TEMwNE5DNHhNalVzTXpRMExqUTBORFEwTkRRME5EUTBORFEyTERVdU56QTRNek16TXpNek16TXpNek15TERRd01Dd3hPRU0wTlRVdU5UVTFOVFUxTlRVMU5UVTFOVFFzTXpBdU1qa3hOalkyTmpZMk5qWTJOalk0TERRM055NDNOemMzTnpjM056YzNOemM0TEMweE5pNHpOelVzTlRNekxqTXpNek16TXpNek16TXpNelFzTFRFeVF6VTRPQzQ0T0RnNE9EZzRPRGc0T0RnNUxDMDNMall5TlN3Mk1URXVNVEV4TVRFeE1URXhNVEV4TWl3ME1TNHdPRE16TXpNek16TXpNek16TXpZc05qWTJMalkyTmpZMk5qWTJOalkyTmpjc016bEROekl5TGpJeU1qSXlNakl5TWpJeU1qTXNNell1T1RFMk5qWTJOalkyTmpZMk5qWTBMRGMwTkM0ME5EUTBORFEwTkRRME5EUTFMQzB5Tnl3NE1EQXNMVEl5UXpnMU5TNDFOVFUxTlRVMU5UVTFOVFUxTEMweE55dzROemN1TnpjM056YzNOemMzTnpjM09DdzJOQzQwTlRnek16TXpNek16TXpNek15dzVNek11TXpNek16TXpNek16TXpNek5DdzJNME01T0RndU9EZzRPRGc0T0RnNE9EZzRPU3cyTVM0MU5ERTJOalkyTmpZMk5qWTJOalFzTVRBeE1TNHhNVEV4TVRFeE1URXhNVEV5TEMwek1DNDJOalkyTmpZMk5qWTJOalkyTmpnc01UQTJOaTQyTmpZMk5qWTJOalkyTmpZM0xDMHlPVU14TVRJeUxqSXlNakl5TWpJeU1qSXlNaklzTFRJM0xqTXpNek16TXpNek16TXpNek16TWl3eE1UUTBMalEwTkRRME5EUTBORFEwTkRNc05qY3VNalVzTVRJd01DdzNNVU14TWpVMUxqVTFOVFUxTlRVMU5UVTFOVGNzTnpRdU56VXNNVEkzTnk0M056YzNOemMzTnpjM056YzRMQzB4TlM0M09URTJOalkyTmpZMk5qWTJOamdzTVRNek15NHpNek16TXpNek16TXpNek0xTEMweE1VTXhNemc0TGpnNE9EZzRPRGc0T0RnNE9URXNMVFl1TWpBNE16TXpNek16TXpNek16TXpMREUwTVRFdU1URXhNVEV4TVRFeE1URXhNeXc0T1M0Mk1qVXNNVFEyTmk0Mk5qWTJOalkyTmpZMk5qWTNMRGswUXpFMU1qSXVNakl5TWpJeU1qSXlNakl5TWl3NU9DNHpOelVzTVRVME5DNDBORFEwTkRRME5EUTBORFF6TERFMkxqZzNOU3d4TmpBd0xERXdRekUyTlRVdU5UVTFOVFUxTlRVMU5UVTFOeXd6TGpFeU5Td3hOamMzTGpjM056YzNOemMzTnpjM056Z3NOakl1TURReE5qWTJOalkyTmpZMk5qWTBMREUzTXpNdU16TXpNek16TXpNek16TXpOU3cyTVVNeE56ZzRMamc0T0RnNE9EZzRPRGc0T1RFc05Ua3VPVFU0TXpNek16TXpNek16TXpNMkxERTRNVEV1TVRFeE1URXhNVEV4TVRFeExERXVOalkyTmpZMk5qWTJOalkyTmpZM0xERTROall1TmpZMk5qWTJOalkyTmpZMk55dzFRekU1TWpJdU1qSXlNakl5TWpJeU1qSXlOQ3c0TGpNek16TXpNek16TXpNek16TXpNaXd4T1RRMExqUTBORFEwTkRRME5EUTBORFlzTnpZdU1UWTJOalkyTmpZMk5qWTJOamNzTWpBd01DNHdNREF3TURBd01EQXdNREF5TERjM1F6SXdOVFV1TlRVMU5UVTFOVFUxTlRVMU55dzNOeTQ0TXpNek16TXpNek16TXpNek15d3lNRGMzTGpjM056YzNOemMzTnpjM09Dd3hMalVzTWpFek15NHpNek16TXpNek16TXpNek0xTERsRE1qRTRPQzQ0T0RnNE9EZzRPRGc0T0Rrc01UWXVOU3d5TWpFeExqRXhNVEV4TVRFeE1URXhNVE1zTVRFekxqZ3pNek16TXpNek16TXpNek16TERJeU5qWXVOalkyTmpZMk5qWTJOalkzTERFeE0wTXlNekl5TGpJeU1qSXlNakl5TWpJeU1qWXNNVEV5TGpFMk5qWTJOalkyTmpZMk5qWTNMREl6TWpBdU1UTTRPRGc0T0RnNE9EZzVMQzAxTkM0M09URTJOalkyTmpZMk5qWTJOeXd5TkRBd0xEVkRNalEzT1M0NE5qRXhNVEV4TVRFeE1URXNOalF1TnpreE5qWTJOalkyTmpZMk5qY3NNekkxTkM0eE5qWTJOalkyTmpZMk5qWTFMREl4TXk0MU5ERTJOalkyTmpZMk5qWTJPU3d5TmpVd0xEUXdNRU15TURRMUxqZ3pNek16TXpNek16TXpNelVzTlRnMkxqUTFPRE16TXpNek16TXpNek1zTVRVMkxqSTFMRGM1TlM0NE16TXpNek16TXpNek16TTBMQzAxTURBc09UQXdJaUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d4TERBc01Dd3hMREFzTXpZd0tTSWdiM0JoWTJsMGVUMGlNQzQyT0NJK1BDOXdZWFJvUGp4d1lYUm9JR1E5SWswdE1UQXNNVEJETVRrdU9EWXhNVEV4TVRFeE1URXhNVEVzTWpRdU56a3hOalkyTmpZMk5qWTJOalk0TERjMUxqWTVORFEwTkRRME5EUTBORFEyTERrM0xqZzNOU3d4TXpNdU16TXpNek16TXpNek16TXpNelFzT0RGRE1Ua3dMamszTWpJeU1qSXlNakl5TWpJekxEWTBMakV5TlN3eU1URXVNVEV4TVRFeE1URXhNVEV4TVRRc0xUVTNMamczTlN3eU5qWXVOalkyTmpZMk5qWTJOalkyTnl3dE56RkRNekl5TGpJeU1qSXlNakl5TWpJeU1qSXpMQzA0TkM0eE1qVXNNelEwTGpRME5EUTBORFEwTkRRME5EUTJMRFV1TnpBNE16TXpNek16TXpNek16TXlMRFF3TUN3eE9FTTBOVFV1TlRVMU5UVTFOVFUxTlRVMU5UUXNNekF1TWpreE5qWTJOalkyTmpZMk5qWTRMRFEzTnk0M056YzNOemMzTnpjM056YzRMQzB4Tmk0ek56VXNOVE16TGpNek16TXpNek16TXpNek16UXNMVEV5UXpVNE9DNDRPRGc0T0RnNE9EZzRPRGc1TEMwM0xqWXlOU3cyTVRFdU1URXhNVEV4TVRFeE1URXhNaXcwTVM0d09ETXpNek16TXpNek16TXpNellzTmpZMkxqWTJOalkyTmpZMk5qWTJOamNzTXpsRE56SXlMakl5TWpJeU1qSXlNakl5TWpNc016WXVPVEUyTmpZMk5qWTJOalkyTmpZMExEYzBOQzQwTkRRME5EUTBORFEwTkRRMUxDMHlOeXc0TURBc0xUSXlRemcxTlM0MU5UVTFOVFUxTlRVMU5UVTFMQzB4Tnl3NE56Y3VOemMzTnpjM056YzNOemMzT0N3Mk5DNDBOVGd6TXpNek16TXpNek16TXl3NU16TXVNek16TXpNek16TXpNek16TkN3Mk0wTTVPRGd1T0RnNE9EZzRPRGc0T0RnNE9TdzJNUzQxTkRFMk5qWTJOalkyTmpZMk5qUXNNVEF4TVM0eE1URXhNVEV4TVRFeE1URXlMQzB6TUM0Mk5qWTJOalkyTmpZMk5qWTJOamdzTVRBMk5pNDJOalkyTmpZMk5qWTJOalkzTEMweU9VTXhNVEl5TGpJeU1qSXlNakl5TWpJeU1qSXNMVEkzTGpNek16TXpNek16TXpNek16TXpNaXd4TVRRMExqUTBORFEwTkRRME5EUTBORE1zTmpjdU1qVXNNVEl3TUN3M01VTXhNalUxTGpVMU5UVTFOVFUxTlRVMU5UY3NOelF1TnpVc01USTNOeTQzTnpjM056YzNOemMzTnpjNExDMHhOUzQzT1RFMk5qWTJOalkyTmpZMk5qZ3NNVE16TXk0ek16TXpNek16TXpNek16TTFMQzB4TVVNeE16ZzRMamc0T0RnNE9EZzRPRGc0T1RFc0xUWXVNakE0TXpNek16TXpNek16TXpNekxERTBNVEV1TVRFeE1URXhNVEV4TVRFeE15dzRPUzQyTWpVc01UUTJOaTQyTmpZMk5qWTJOalkyTmpZM0xEazBRekUxTWpJdU1qSXlNakl5TWpJeU1qSXlNaXc1T0M0ek56VXNNVFUwTkM0ME5EUTBORFEwTkRRME5EUXpMREUyTGpnM05Td3hOakF3TERFd1F6RTJOVFV1TlRVMU5UVTFOVFUxTlRVMU55d3pMakV5TlN3eE5qYzNMamMzTnpjM056YzNOemMzTnpnc05qSXVNRFF4TmpZMk5qWTJOalkyTmpZMExERTNNek11TXpNek16TXpNek16TXpNek5TdzJNVU14TnpnNExqZzRPRGc0T0RnNE9EZzRPVEVzTlRrdU9UVTRNek16TXpNek16TXpNek0yTERFNE1URXVNVEV4TVRFeE1URXhNVEV4TERFdU5qWTJOalkyTmpZMk5qWTJOalkzTERFNE5qWXVOalkyTmpZMk5qWTJOalkyTnl3MVF6RTVNakl1TWpJeU1qSXlNakl5TWpJeU5DdzRMak16TXpNek16TXpNek16TXpNek1pd3hPVFEwTGpRME5EUTBORFEwTkRRME5EWXNOell1TVRZMk5qWTJOalkyTmpZMk5qY3NNakF3TUM0d01EQXdNREF3TURBd01EQXlMRGMzUXpJd05UVXVOVFUxTlRVMU5UVTFOVFUxTnl3M055NDRNek16TXpNek16TXpNek16TXl3eU1EYzNMamMzTnpjM056YzNOemMzT0N3eExqVXNNakV6TXk0ek16TXpNek16TXpNek16TTFMRGxETWpFNE9DNDRPRGc0T0RnNE9EZzRPRGtzTVRZdU5Td3lNakV4TGpFeE1URXhNVEV4TVRFeE1UTXNNVEV6TGpnek16TXpNek16TXpNek16TXpMREl5TmpZdU5qWTJOalkyTmpZMk5qWTNMREV4TTBNeU16SXlMakl5TWpJeU1qSXlNakl5TWpZc01URXlMakUyTmpZMk5qWTJOalkyTmpZM0xESXpNakF1TVRNNE9EZzRPRGc0T0RnNUxDMDFOQzQzT1RFMk5qWTJOalkyTmpZMk55d3lOREF3TERWRE1qUTNPUzQ0TmpFeE1URXhNVEV4TVRFc05qUXVOemt4TmpZMk5qWTJOalkyTmpjc016STFOQzR4TmpZMk5qWTJOalkyTmpZMUxESXhNeTQxTkRFMk5qWTJOalkyTmpZMk9Td3lOalV3TERRd01FTXlNRFExTGpnek16TXpNek16TXpNek16VXNOVGcyTGpRMU9ETXpNek16TXpNek16TXNNVFUyTGpJMUxEYzVOUzQ0TXpNek16TXpNek16TXpNMExDMDFNREFzT1RBd0lpQjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3hMREFzTUN3eExEQXNORGd3S1NJZ2IzQmhZMmwwZVQwaU1TNHdNQ0krUEM5d1lYUm9Qand2Wno0OEwzTjJaejQ9Ii8+PGltYWdlIHdpZHRoPSI0ODAiIGhlaWdodD0iNDgwIiB0cmFuc2Zvcm09Im1hdHJpeCguNTYxLDAsMCwuNTYxLDE2NSw1MSkiIGhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCMlpYSnphVzl1UFNJeExqRWlJSGRwWkhSb1BTSXlOREFpSUdobGFXZG9kRDBpTWpRd0lpQjJhV1YzUW05NFBTSXRNVEl3SUMweE1qQWdNalF3SURJME1DSStQSEJoZEdnZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJaUJ6ZEhKdmEyVXRiR2x1WldwdmFXNDlJbkp2ZFc1a0lpQmtQU0pOTFRnMExqZzBPQ3d0TlRNdU1UYzVJRXd3TGprME1pd3RPVE11TWpFMUlFd3dMamswTWl3eE1pNHlORE1nVEMwNE5DNDRORGdzTlRJdU1qYzVJRm9pSUdacGJHdzlJaU5GTmpJaVBqd3ZjR0YwYUQ0OGNHRjBhQ0J6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUdROUlrMDROQzQ0TkRnc0xUVXlMakkzT1NCTU1DNDVORElzTFRrekxqSXhOU0JNTUM0NU5ESXNNVEl1TWpReklFdzROQzQ0TkRnc05UTXVNVGM1SUZvaUlHWnBiR3c5SWlNMk5rTkRNREFpUGp3dmNHRjBhRDQ4Y0dGMGFDQnpkSEp2YTJVdGJHbHVaV05oY0QwaWNtOTFibVFpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlJR1E5SWswdE1DNDVORElzT1RNdU1qRTFJRXd0T0RRdU9EUTRMRFV5TGpJM09TQk1NQzQ1TkRJc01USXVNalF6SUV3NE5DNDRORGdzTlRNdU1UYzVJRm9pSUdacGJHdzlJaU0yTXpZaVBqd3ZjR0YwYUQ0OGNHRjBhQ0J6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUdROUlrMDROQzQ0TkRnc0xUVXlMakkzT1NCTU1DNDVORElzTFRrekxqSXhOU0JNTFRnMExqZzBPQ3d0TlRNdU1UYzVJRXd0TUM0NU5ESXNMVEV5TGpJME15QmFJaUJtYVd4c1BTSWpSVVF3SWo0OEwzQmhkR2crUEhCaGRHZ2djM1J5YjJ0bExXeHBibVZqWVhBOUluSnZkVzVrSWlCemRISnZhMlV0YkdsdVpXcHZhVzQ5SW5KdmRXNWtJaUJrUFNKTkxUZzBMamcwT0N3dE5UTXVNVGM1SUV3dE1DNDVORElzTFRFeUxqSTBNeUJNTFRBdU9UUXlMRGt6TGpJeE5TQk1MVGcwTGpnME9DdzFNaTR5TnprZ1dpSWdabWxzYkQwaUl6WTJRME13TUNJK1BDOXdZWFJvUGp4d1lYUm9JSE4wY205clpTMXNhVzVsWTJGd1BTSnliM1Z1WkNJZ2MzUnliMnRsTFd4cGJtVnFiMmx1UFNKeWIzVnVaQ0lnWkQwaVRUZzBMamcwT0N3dE5USXVNamM1SUV3dE1DNDVORElzTFRFeUxqSTBNeUJNTFRBdU9UUXlMRGt6TGpJeE5TQk1PRFF1T0RRNExEVXpMakUzT1NCYUlpQm1hV3hzUFNJak16TTVPVEF3SWo0OEwzQmhkR2crUEM5emRtYysiLz48L3N2Zz4=",
    insetIconURL: t,
    featured: !0,
    disabled: !1,
    collaborator: "LazyTong @ Github",
    doc: "https://lt.js.org/posts/20240718"
  },
  l10n: {
    "zh-cn": {
      "Cube.name": "LazyTong\u7684\u7ACB\u65B9\u4F53",
      "Cube.description": "\u6DFB\u52A0\u7ACB\u4F53\u56FE\u5F62\uFF01"
    },
    en: {
      "Cube.name": "LazyTong's Cube",
      "Cube.description": "Create solid figure!"
    }
  }
});
