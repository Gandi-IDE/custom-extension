/// Copyright (c) FurryR 2023. This project is licensed under the MIT license.
/// Original repository: https://github.com/FurryR/lpp-scratch

"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/impl/asset/icon.ts
  var icon_default = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYwMCAzNzIiPjxkZWZzPjxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CiAgICA8L3N0eWxlPjwvZGVmcz48cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzcyIi8+PGc+PHBhdGggZD0iTTIzMC4xNCwxNjEuMzd2NDUuMDVoMjUuNDJjMi4wMywwLDMuNTgsLjQ5LDQuNjcsMS40OCwxLjA4LC45OSwxLjYzLDIuMjIsMS42MywzLjcxcy0uNTQsMi43NS0xLjYsMy42OWMtMS4wNywuOTQtMi42MywxLjQxLTQuNjksMS40MWgtMzAuMjdjLTIuNzMsMC00LjY5LS42LTUuODktMS44Mi0xLjItMS4yMS0xLjc5LTMuMTctMS43OS01Ljg3di00Ny42N2MwLTIuNTMsLjU3LTQuNDMsMS43MS01LjcsMS4xNC0xLjI3LDIuNjQtMS45LDQuNS0xLjlzMy40MSwuNjMsNC41OCwxLjg4YzEuMTcsMS4yNSwxLjc1LDMuMTYsMS43NSw1LjcyWiIvPjxwYXRoIGQ9Ik0yOTQuMSwxOTIuNjJoLTExLjQ4djE3LjUyYzAsMi41LS41OSw0LjQxLTEuNzcsNS43cy0yLjY3LDEuOTQtNC40OCwxLjk0LTMuNDEtLjY0LTQuNTYtMS45MmMtMS4xNS0xLjI4LTEuNzMtMy4xNi0xLjczLTUuNjR2LTQ3LjcxYzAtMi43NiwuNjMtNC43MywxLjktNS45MXMzLjI4LTEuNzcsNi4wNC0xLjc3aDE2LjA5YzQuNzYsMCw4LjQyLC4zNywxMC45OCwxLjEsMi41MywuNyw0LjcyLDEuODcsNi41NywzLjUsMS44NCwxLjYzLDMuMjQsMy42Myw0LjIsNnMxLjQ0LDUuMDIsMS40NCw3Ljk4YzAsNi4zMS0xLjk0LDExLjA4LTUuODMsMTQuMzMtMy44OCwzLjI1LTkuNjcsNC44OC0xNy4zNSw0Ljg4Wm0tMy4wNC0yOC4zN2gtOC40NHYxOC45MWg4LjQ0YzIuOTYsMCw1LjQyLS4zMSw3LjQxLS45MywxLjk4LS42MiwzLjUtMS42Myw0LjU0LTMuMDQsMS4wNC0xLjQxLDEuNTYtMy4yNSwxLjU2LTUuNTMsMC0yLjczLS44LTQuOTUtMi40MS02LjY3LTEuOC0xLjgzLTUuNS0yLjc0LTExLjEtMi43NFoiLz48cGF0aCBkPSJNMzUxLjc3LDE5Mi42MmgtMTEuNDh2MTcuNTJjMCwyLjUtLjU5LDQuNDEtMS43Nyw1LjctMS4xOCwxLjI5LTIuNjcsMS45NC00LjQ3LDEuOTRzLTMuNDEtLjY0LTQuNTYtMS45MmMtMS4xNi0xLjI4LTEuNzMtMy4xNi0xLjczLTUuNjR2LTQ3LjcxYzAtMi43NiwuNjMtNC43MywxLjktNS45MXMzLjI4LTEuNzcsNi4wNC0xLjc3aDE2LjA4YzQuNzYsMCw4LjQyLC4zNywxMC45OCwxLjEsMi41MywuNyw0LjcyLDEuODcsNi41NywzLjUsMS44NCwxLjYzLDMuMjQsMy42Myw0LjIsNiwuOTYsMi4zNiwxLjQzLDUuMDIsMS40Myw3Ljk4LDAsNi4zMS0xLjk0LDExLjA4LTUuODMsMTQuMzMtMy44OCwzLjI1LTkuNjcsNC44OC0xNy4zNSw0Ljg4Wm0tMy4wNC0yOC4zN2gtOC40NHYxOC45MWg4LjQ0YzIuOTYsMCw1LjQzLS4zMSw3LjQxLS45MywxLjk4LS42MiwzLjUtMS42Myw0LjU0LTMuMDQsMS4wNC0xLjQxLDEuNTYtMy4yNSwxLjU2LTUuNTMsMC0yLjczLS44LTQuOTUtMi40MS02LjY3LTEuOC0xLjgzLTUuNS0yLjc0LTExLjEtMi43NFoiLz48cGF0aCBkPSJNMzc5LjMsMjE3Ljc4Yy0xLjc1LDAtMy4yNS0uNTYtNC41Mi0xLjY5LTEuMjctMS4xMy0xLjktMi43LTEuOS00LjczLDAtMS43MiwuNjEtMy4xOSwxLjgyLTQuNDMsMS4yMS0xLjI0LDIuNy0xLjg2LDQuNDgtMS44NnMzLjI5LC42MSw0LjU0LDEuODRjMS4yNSwxLjIyLDEuODgsMi43MSwxLjg4LDQuNDUsMCwyLS42MywzLjU3LTEuODgsNC43MS0xLjI1LDEuMTQtMi43MiwxLjcxLTQuNDEsMS43MVoiLz48cGF0aCBkPSJNNDM1LjQ5LDE2MS4zN3YzMi40MmMwLDIuODItLjEyLDUuMjEtLjM2LDcuMTgtLjI0LDEuOTctLjc4LDMuOTctMS42Miw2LTEuNDEsMy40MS0zLjczLDYuMDYtNi45Nyw3Ljk2LTMuMjQsMS45LTcuMTgsMi44NS0xMS44MiwyLjg1LTQuMTksMC03LjY5LS42Ni0xMC40OS0xLjk4cy01LjA2LTMuNDYtNi43OC02LjQyYy0uOS0xLjU4LTEuNjMtMy4zOS0yLjItNS40NS0uNTYtMi4wNS0uODQtNC4wMS0uODQtNS44NywwLTEuOTcsLjU1LTMuNDgsMS42NS00LjUyczIuNS0xLjU2LDQuMjItMS41NiwyLjkxLC40OCwzLjc2LDEuNDQsMS40OSwyLjQ1LDEuOTQsNC40OGMuNDgsMi4xNywuOTYsMy45LDEuNDMsNS4xOSwuNDgsMS4yOSwxLjI4LDIuNDEsMi40MSwzLjMzLDEuMTIsLjkzLDIuNzMsMS4zOSw0LjgxLDEuMzksNS41NCwwLDguMzItNC4wNyw4LjMyLTEyLjJ2LTM0LjI0YzAtMi41MywuNTYtNC40MywxLjY3LTUuNywxLjExLTEuMjcsMi42Mi0xLjksNC41NC0xLjlzMy40OCwuNjMsNC42MiwxLjksMS43MSwzLjE3LDEuNzEsNS43WiIvPjxwYXRoIGQ9Ik00OTYuMTIsMTk4LjE1YzAsMy43NC0uOTYsNy4xMS0yLjg5LDEwLjA5LTEuOTMsMi45OC00Ljc1LDUuMzItOC40Niw3LjAxLTMuNzEsMS42OS04LjEyLDIuNTMtMTMuMjEsMi41My02LjExLDAtMTEuMTUtMS4xNS0xNS4xMi0zLjQ2LTIuODEtMS42Ni01LjEtMy44OC02Ljg2LTYuNjVzLTIuNjQtNS40Ny0yLjY0LTguMDhjMC0xLjUyLC41My0yLjgyLDEuNTgtMy45MSwxLjA2LTEuMDgsMi40LTEuNjMsNC4wMy0xLjYzLDEuMzIsMCwyLjQ0LC40MiwzLjM2LDEuMjcsLjkxLC44NCwxLjcsMi4xLDIuMzQsMy43NiwuNzksMS45NywxLjY0LDMuNjIsMi41NSw0Ljk0LC45MSwxLjMyLDIuMiwyLjQxLDMuODYsMy4yNywxLjY2LC44NiwzLjg0LDEuMjksNi41NCwxLjI5LDMuNzEsMCw2LjczLS44Nyw5LjA2LTIuNiwyLjMyLTEuNzMsMy40OC0zLjg5LDMuNDgtNi40OCwwLTIuMDUtLjYzLTMuNzItMS44OC01LTEuMjUtMS4yOC0yLjg3LTIuMjYtNC44Ni0yLjkzcy00LjY0LTEuMzktNy45Ni0yLjE1Yy00LjQ1LTEuMDQtOC4xNy0yLjI2LTExLjE3LTMuNjUtMy0xLjM5LTUuMzgtMy4yOS03LjEzLTUuNy0xLjc2LTIuNDEtMi42NC01LjQtMi42NC04Ljk3cy45My02LjQzLDIuNzktOS4wOGMxLjg2LTIuNjUsNC41NC00LjY4LDguMDYtNi4xLDMuNTItMS40Miw3LjY2LTIuMTMsMTIuNDEtMi4xMywzLjgsMCw3LjA4LC40Nyw5Ljg2LDEuNDEsMi43NywuOTQsNS4wNywyLjIsNi45LDMuNzYsMS44MywxLjU2LDMuMTcsMy4yLDQuMDEsNC45MiwuODQsMS43MiwxLjI3LDMuMzksMS4yNyw1LjAyLDAsMS40OS0uNTMsMi44NC0xLjU4LDQuMDMtMS4wNSwxLjItMi4zNywxLjc5LTMuOTUsMS43OS0xLjQ0LDAtMi41My0uMzYtMy4yNy0xLjA4LS43NS0uNzItMS41Ni0xLjg5LTIuNDMtMy41My0xLjEzLTIuMzQtMi40OC00LjE2LTQuMDUtNS40Ny0xLjU4LTEuMzEtNC4xMS0xLjk2LTcuNi0xLjk2LTMuMjQsMC01Ljg1LC43MS03LjgzLDIuMTMtMS45OCwxLjQyLTIuOTgsMy4xMy0yLjk4LDUuMTMsMCwxLjI0LC4zNCwyLjMxLDEuMDEsMy4yMSwuNjgsLjksMS42LDEuNjcsMi43OSwyLjMyLDEuMTgsLjY1LDIuMzgsMS4xNSwzLjU5LDEuNTIsMS4yMSwuMzcsMy4yMSwuOSw2LDEuNiwzLjQ5LC44Miw2LjY1LDEuNzIsOS40OCwyLjcsMi44MywuOTksNS4yMywyLjE4LDcuMjIsMy41OSwxLjk4LDEuNDEsMy41MywzLjE5LDQuNjQsNS4zNCwxLjExLDIuMTUsMS42Nyw0Ljc5LDEuNjcsNy45MloiLz48L2c+PHBhdGggZD0iTTEwMi4xMywxNDguMjJjMC01LjgyLDQuNzItMTAuNTMsMTAuNTMtMTAuNTNoNzUuMjVjNS44MiwwLDEwLjUzLDQuNzIsMTAuNTMsMTAuNTN2NzUuMjVjMCw1LjgyLTQuNzIsMTAuNTMtMTAuNTMsMTAuNTNIMTEyLjY2Yy01LjgyLDAtMTAuNTMtNC43Mi0xMC41My0xMC41M3YtNzUuMjVabTEwLjUzLTEuNWMtLjgzLDAtMS41LC42Ny0xLjUsMS41djc1LjI1YzAsLjgzLC42NywxLjUsMS41LDEuNWg3NS4yNWMuODMsMCwxLjUtLjY3LDEuNS0xLjV2LTc1LjI1YzAtLjgzLS42Ny0xLjUtMS41LTEuNUgxMTIuNjZabTQ0Ljk3LDIzLjljMS43Ni0xLjc2LDQuNjItMS43Niw2LjM4LDBsMTIuMDQsMTIuMDRjMS43NiwxLjc2LDEuNzYsNC42MiwwLDYuMzhsLTEyLjA0LDEyLjA0Yy0xLjY5LDEuODItNC41NSwxLjkzLTYuMzcsLjI0LS42NC0uNTktMS4wOS0xLjM2LTEuMy0yLjItLjQxLTEuNiwuMDktMy4yOSwxLjI5LTQuNDJsOC44NS04Ljg1LTguODUtOC44NWMtMS43Ni0xLjc2LTEuNzYtNC42MiwwLTYuMzhabS0xNC42OSw2LjM4bC04Ljg1LDguODUsOC44NSw4Ljg1YzEuODIsMS42OSwxLjkzLDQuNTUsLjI0LDYuMzctLjU5LC42NC0xLjM2LDEuMDktMi4yLDEuMy0xLjYsLjQxLTMuMjktLjA5LTQuNDItMS4yOWwtMTIuMDQtMTIuMDRjLTEuNzYtMS43Ni0xLjc2LTQuNjIsMC02LjM4bDEyLjA0LTEyLjA0YzEuNzgtMS42Niw0LjU1LTEuNjEsNi4yNywuMTEsMS43MiwxLjcyLDEuNzYsNC40OSwuMTEsNi4yN1oiLz48L3N2Zz4=";

  // src/core/index.ts
  var core_exports = {};
  __export(core_exports, {
    Global: () => Global,
    LppArray: () => LppArray,
    LppClosure: () => LppClosure,
    LppConstant: () => LppConstant,
    LppContext: () => LppContext,
    LppError: () => LppError,
    LppException: () => LppException,
    LppFunction: () => LppFunction,
    LppFunctionContext: () => LppFunctionContext,
    LppHandle: () => LppHandle,
    LppObject: () => LppObject,
    LppPromise: () => LppPromise,
    LppReference: () => LppReference,
    LppReturn: () => LppReturn,
    LppTraceback: () => LppTraceback,
    LppValue: () => LppValue2,
    asBoolean: () => asBoolean,
    ensureValue: () => ensureValue,
    ffi: () => ffi_exports,
    global: () => global,
    isPromise: () => isPromise,
    raise: () => raise,
    withValue: () => withValue
  });

  // src/core/helper.ts
  function ensureValue(obj) {
    return obj instanceof LppReference ? obj.value : obj;
  }
  function asBoolean(value) {
    if (value instanceof LppConstant) {
      if (value.value === null)
        return false;
      switch (typeof value.value) {
        case "number":
          return value.value !== 0;
        case "boolean":
          return value.value;
        case "string":
          return value.value.length !== 0;
      }
      return false;
    } else if (value instanceof LppArray) {
      return value.value.length !== 0;
    } else if (value instanceof LppObject) {
      return value.value.size !== 0;
    } else if (value instanceof LppFunction) {
      return true;
    }
    return false;
  }
  function mathOp(lhs, op, rhs) {
    if (!(lhs instanceof LppConstant && rhs instanceof LppConstant))
      return NaN;
    const left = typeof lhs.value === "boolean" ? +lhs.value : lhs.value;
    const right = typeof rhs.value === "boolean" ? +rhs.value : rhs.value;
    const math = /* @__PURE__ */ new Map([
      ["+", (a, b) => a + b],
      ["-", (a, b) => a - b],
      ["*", (a, b) => a * b],
      ["/", (a, b) => a / b],
      ["<<", (a, b) => a << b],
      [">>", (a, b) => a >> b],
      [">>>", (a, b) => a >>> b],
      ["&", (a, b) => a & b],
      ["|", (a, b) => a | b],
      ["^", (a, b) => a ^ b]
    ]);
    const fn = math.get(op);
    if (!fn)
      throw new Error("lpp: not implemented");
    return fn(left, right);
  }
  function equal(lhs, rhs) {
    lhs = lhs instanceof LppConstant && typeof lhs.value === "boolean" ? new LppConstant(+lhs.value) : lhs;
    rhs = rhs instanceof LppConstant && typeof rhs.value === "boolean" ? new LppConstant(+rhs.value) : rhs;
    if (lhs instanceof LppConstant && rhs instanceof LppConstant)
      return lhs.value === rhs.value;
    return lhs === rhs;
  }
  function compare(lhs, op, rhs) {
    function compareInternal(fn2, lhs2, rhs2) {
      if (lhs2 instanceof LppConstant) {
        if (rhs2 instanceof LppConstant) {
          if (lhs2.value === null || rhs2.value === null)
            return false;
          switch (typeof lhs2.value) {
            case "boolean": {
              switch (typeof rhs2.value) {
                case "boolean": {
                  return fn2(+lhs2.value, +rhs2.value);
                }
                case "number": {
                  return fn2(+lhs2.value, rhs2.value);
                }
                case "string": {
                  return fn2(+lhs2.value, rhs2.value.length ? 1 : 0);
                }
                default:
                  throw new Error("lpp: unknown rhs");
              }
            }
            case "number": {
              switch (typeof rhs2.value) {
                case "boolean": {
                  return fn2(lhs2.value, +rhs2.value);
                }
                case "number": {
                  return fn2(lhs2.value, rhs2.value);
                }
                case "string": {
                  return fn2(lhs2.value ? 1 : 0, rhs2.value.length ? 1 : 0);
                }
                default:
                  throw new Error("lpp: unknown rhs");
              }
            }
            case "string": {
              switch (typeof rhs2.value) {
                case "boolean": {
                  return fn2(lhs2.value.length ? 1 : 0, +rhs2.value);
                }
                case "number": {
                  return fn2(lhs2.value.length ? 1 : 0, rhs2.value ? 1 : 0);
                }
                case "string": {
                  return fn2(lhs2.value, rhs2.value);
                }
                default:
                  throw new Error("lpp: unknown rhs");
              }
            }
            default:
              throw new Error("lpp: unknown lhs");
          }
        }
        return compareInternal(fn2, lhs2, new LppConstant(asBoolean(rhs2)));
      }
      return compareInternal(fn2, new LppConstant(asBoolean(lhs2)), rhs2);
    }
    const math = /* @__PURE__ */ new Map([
      [">", (a, b) => a > b],
      ["<", (a, b) => a < b],
      [">=", (a, b) => a >= b],
      ["<=", (a, b) => a <= b]
    ]);
    const fn = math.get(op);
    if (!fn)
      throw new Error("lpp: not implemented");
    return compareInternal(fn, lhs, rhs);
  }
  function isPromise(value) {
    return typeof value === "object" && value !== null && typeof value.then === "function";
  }
  function processThenReturn(returnValue, resolve, reject) {
    if (returnValue instanceof LppReturn) {
      const value = returnValue.value;
      if (!(value instanceof LppConstant) || value.value !== null) {
        const then = ensureValue(value.get("then"));
        if (then instanceof LppFunction) {
          const res = then.apply(value, [
            new LppFunction(({ args }) => {
              const res2 = processThenReturn(
                new LppReturn(args[0] ?? new LppConstant(null)),
                resolve,
                reject
              );
              return withValue(res2, () => new LppReturn(new LppConstant(null)));
            }),
            new LppFunction(({ args }) => {
              reject(args[0] ?? new LppConstant(null));
              return new LppReturn(new LppConstant(null));
            })
          ]);
          return withValue(res, (value2) => {
            return value2 instanceof LppException ? void reject(value2.value) : void 0;
          });
        }
      }
      return void resolve(returnValue.value);
    }
    return void reject(returnValue.value);
  }
  function withValue(v, fn) {
    if (isPromise(v)) {
      return v.then((v2) => fn(v2));
    }
    return fn(v);
  }
  function raise(v) {
    return withValue(
      v,
      (value) => value instanceof LppException ? value : new LppException(value.value)
    );
  }

  // src/core/type.ts
  var LppError = class extends Error {
    /**
     * Construct a new Lpp error.
     * @param id Error ID.
     */
    constructor(id) {
      super(`lpp: Error ${id}`);
      this.id = id;
    }
  };
  var LppValue2 = class {
  };
  var LppReference = class {
    /**
     * Construct a new LppChildObject object.
     * @param parent parent.
     * @param name key in parent.
     * @param value value.
     */
    constructor(parent, name, value) {
      this.name = name;
      this.value = value;
      this.parent = new WeakRef(parent);
    }
    /**
     * Parent object.
     */
    parent;
    /**
     * Get a value.
     * @param key Value to get.
     * @param key Child object.
     */
    get(key) {
      return this.value.get(key);
    }
    /**
     * Set a value.
     * @param key Key to set.
     * @param value Value to set.
     * @returns Value.
     */
    set(key, value) {
      return this.value.set(key, value);
    }
    /**
     * Detect whether a value exists.
     * @param key Key to detect.
     * @returns Whether the value exists.
     */
    has(key) {
      return this.value.has(key);
    }
    /**
     * Delete a value from the object or just delete itself.
     * @param key Key to delete. May be undefined.
     * @returns Whether the value exists.
     */
    delete(key) {
      const parent = this.parent.deref();
      if (!parent)
        throw new LppError("assignOfConstant");
      if (!key)
        return parent.delete(this.name);
      return this.value.delete(key);
    }
    /**
     * Detect whether a value is constructed from fn.
     * @param fn Function.
     * @returns Whether the value is constructed from fn.
     */
    instanceof(fn) {
      return this.value.instanceof(fn);
    }
    /**
     * Assign current value.
     * @param value Value to set.
     * @returns New value.
     */
    assign(value) {
      const parent = this.parent.deref();
      if (!parent)
        throw new LppError("assignOfConstant");
      parent.set(this.name, value);
      this.value = value;
      return this;
    }
    /**
     * toString for visualReport.
     * @returns Human readable string.
     */
    toString() {
      return this.value.toString();
    }
    /**
     * Do arithmetic operations.
     * @param op Binary operator.
     * @param rhs Right hand side of the operation.
     */
    calc(op, rhs) {
      if (op === "=" && rhs) {
        return this.assign(rhs);
      } else if (op === "delete" && !rhs) {
        return new LppConstant(this.delete());
      }
      return this.value.calc(op, rhs);
    }
  };
  function lookupPrototype(proto, name) {
    const cache = /* @__PURE__ */ new WeakSet();
    function lookupPrototypeInternal(proto2, name2) {
      if (proto2 instanceof LppObject) {
        const res = proto2.value.get(name2);
        if (res) {
          return res;
        } else {
          const v = proto2.value.get("prototype");
          if (v instanceof LppObject) {
            if (cache.has(v))
              throw new LppError("recursivePrototype");
            else
              cache.add(v);
            return lookupPrototype(v, name2);
          }
        }
      }
      return null;
    }
    return lookupPrototypeInternal(proto, name);
  }
  function comparePrototype(prototype1, prototype2) {
    if (prototype1 === prototype2)
      return true;
    if (prototype1.value.has("prototype")) {
      const v = prototype1.value.get("prototype");
      if (v instanceof LppObject)
        return comparePrototype(v, prototype2);
    }
    return false;
  }
  var LppConstant = class _LppConstant extends LppValue2 {
    /**
     * Construct a value.
     * @param _value The stored value.
     */
    constructor(_value) {
      super();
      this._value = _value;
    }
    /**
     * @returns The stored value.
     */
    get value() {
      return this._value;
    }
    /**
     * Get a value.
     * @param key Value to get.
     * @returns Child object.
     */
    get(key) {
      if (this.value === null)
        throw new LppError("accessOfNull");
      if (key === "constructor") {
        switch (typeof this.value) {
          case "string":
            return global.get("String") ?? new _LppConstant(null);
          case "number":
            return global.get("Number") ?? new _LppConstant(null);
          case "boolean":
            return global.get("Boolean") ?? new _LppConstant(null);
        }
      } else if (key === "prototype") {
        return new _LppConstant(null);
      } else {
        if (typeof this.value === "string") {
          const idx = parseInt(key);
          if (!isNaN(idx)) {
            const v = this.value[idx];
            return v !== void 0 ? new _LppConstant(v) : new _LppConstant(null);
          }
        }
        const constructor = ensureValue(this.get("constructor"));
        if (!(constructor instanceof LppFunction))
          throw new Error(
            "lpp: unexpected constructor -- must be a LppFunction instance"
          );
        const proto = ensureValue(constructor.get("prototype"));
        if (!(proto instanceof LppObject))
          throw new Error(
            "lpp: unexpected prototype -- must be a LppObject instance"
          );
        const member = lookupPrototype(proto, key);
        if (member === null)
          return new _LppConstant(null);
        return new LppReference(this, key, member);
      }
    }
    /**
     * LppConstant instances are not able to set properties.
     */
    set() {
      throw new LppError("assignOfConstant");
    }
    /**
     * Detect whether a value exists.
     * @param key Key to detect.
     * @returns Whether the value exists.
     */
    has(key) {
      if (this.value === null)
        throw new LppError("accessOfNull");
      if (key === "constructor")
        return true;
      const constructor = ensureValue(this.get("constructor"));
      if (!(constructor instanceof LppFunction))
        throw new Error(
          "lpp: unexpected constructor -- must be a LppFunction instance"
        );
      const proto = ensureValue(constructor.get("prototype"));
      if (!(proto instanceof LppObject))
        throw new Error(
          "lpp: unexpected prototype -- must be a LppObject instance"
        );
      return lookupPrototype(proto, key) !== null;
    }
    /**
     * LppConstant instances are not able to set properties.
     */
    delete() {
      if (this.value === null)
        throw new LppError("accessOfNull");
      throw new LppError("assignOfConstant");
    }
    /**
     * Detect whether a value is constructed from fn.
     * @param fn Function.
     * @returns Whether the value is constructed from fn.
     */
    instanceof(fn) {
      if (this.value === null)
        return false;
      switch (typeof this.value) {
        case "string":
          return fn === global.get("String");
        case "number":
          return fn === global.get("Number");
        case "boolean":
          return fn === global.get("Boolean");
      }
    }
    /**
     * toString for visualReport.
     * @returns Human readable string.
     */
    toString() {
      return `${this.value}`;
    }
    /**
     * Do arithmetic operations.
     * @param op Binary operator.
     * @param rhs Right hand side of the operation.
     */
    calc(op, rhs) {
      if (rhs) {
        switch (op) {
          case "=": {
            throw new LppError("assignOfConstant");
          }
          case "+": {
            if (this.value !== null) {
              if (rhs instanceof _LppConstant) {
                if (rhs.value !== null)
                  return new _LppConstant(mathOp(this, op, rhs));
              }
            }
            return new _LppConstant(NaN);
          }
          case "*": {
            if (this.value !== null) {
              if (rhs instanceof _LppConstant) {
                if (typeof this.value === "string" && typeof rhs.value === "number") {
                  if (Number.isInteger(rhs.value))
                    return new _LppConstant(this.value.repeat(rhs.value));
                } else if (typeof this.value === "number" && typeof rhs.value === "string") {
                  if (Number.isInteger(this.value))
                    return new _LppConstant(rhs.value.repeat(this.value));
                }
                return new _LppConstant(mathOp(this, op, rhs));
              } else if (rhs instanceof LppArray && (typeof this.value === "boolean" || typeof this.value === "number")) {
                const time = typeof this.value === "boolean" ? +this.value : this.value;
                if (Number.isInteger(time)) {
                  const ret = new LppArray();
                  for (let i = 0; i < time; i++) {
                    ret.value = ret.value.concat(rhs.value);
                  }
                  return ret;
                }
              }
            }
            return new _LppConstant(NaN);
          }
          case "==": {
            return new _LppConstant(equal(this, rhs));
          }
          case "!=": {
            return new _LppConstant(!equal(this, rhs));
          }
          case ">":
          case "<":
          case ">=":
          case "<=": {
            return new _LppConstant(compare(this, op, rhs));
          }
          case "&&":
          case "||": {
            const left = asBoolean(this);
            const right = asBoolean(rhs);
            return new _LppConstant(op === "&&" ? left && right : left || right);
          }
          case "-":
          case "/":
          case "%":
          case "<<":
          case ">>":
          case ">>>":
          case "&":
          case "|":
          case "^": {
            if (!(rhs instanceof _LppConstant) || this.value === null || rhs.value === null || typeof this.value === "string" || typeof rhs.value === "string")
              return new _LppConstant(NaN);
            return new _LppConstant(mathOp(this, op, rhs));
          }
          case "instanceof": {
            if (rhs instanceof LppFunction) {
              return new _LppConstant(this.instanceof(rhs));
            }
            throw new LppError("notCallable");
          }
        }
      } else {
        switch (op) {
          case "delete": {
            throw new LppError("assignOfConstant");
          }
          case "+": {
            if (!(typeof this.value === "boolean" || typeof this.value === "number" || typeof this.value === "string"))
              return new _LppConstant(NaN);
            return new _LppConstant(+this.value);
          }
          case "-": {
            if (!(typeof this.value === "boolean" || typeof this.value === "number" || typeof this.value === "string"))
              return new _LppConstant(NaN);
            return new _LppConstant(-this.value);
          }
          case "!": {
            return new _LppConstant(!asBoolean(this));
          }
          case "~": {
            if (!(typeof this.value === "boolean" || typeof this.value === "number" || typeof this.value === "string"))
              return new _LppConstant(NaN);
            const v = +this.value;
            if (isNaN(v))
              return new _LppConstant(NaN);
            return new _LppConstant(~v);
          }
        }
      }
      throw new Error("lpp: unknown operand");
    }
  };
  var LppObject = class _LppObject extends LppValue2 {
    /**
     * Construct a object value.
     * @param value Object content.
     * @param constructor Constructor function. Defaults to Object.
     */
    constructor(value = /* @__PURE__ */ new Map(), constructor) {
      super();
      this.value = value;
      this.value = value ?? /* @__PURE__ */ new Map();
      if (constructor)
        this.value.set("constructor", constructor);
    }
    /**
     * Get a value.
     * @param key Value to get.
     * @returns Child object.
     */
    get(key) {
      if (key === "constructor") {
        return this.value.get(key) ?? global.get("Object") ?? new LppConstant(null);
      } else {
        const res = this.value.get(key);
        if (res || key == "prototype")
          return new LppReference(this, key, res ?? new LppConstant(null));
        const constructor = ensureValue(this.get("constructor"));
        if (!(constructor instanceof LppFunction))
          throw new Error(
            "lpp: unexpected constructor -- must be a LppFunction instance"
          );
        const proto = ensureValue(constructor.get("prototype"));
        if (!(proto instanceof _LppObject))
          throw new Error(
            "lpp: unexpected prototype -- must be a LppObject instance"
          );
        const member = lookupPrototype(proto, key);
        if (member === null)
          return new LppReference(this, key, new LppConstant(null));
        return new LppReference(this, key, member);
      }
    }
    /**
     * Set a value.
     * @param key Key to set.
     * @param value Value to set.
     * @returns Value.
     */
    set(key, value) {
      this.value.set(key, value);
      return new LppReference(this, key, value);
    }
    /**
     * Detect whether a value exists.
     * @param key Key to detect.
     * @returns Whether the value exists.
     */
    has(key) {
      if (key === "constructor" || this.value.has(key))
        return true;
      const constructor = ensureValue(this.get("constructor"));
      if (!(constructor instanceof LppFunction))
        throw new Error(
          "lpp: unexpected constructor -- must be a LppFunction instance"
        );
      const proto = ensureValue(constructor.get("prototype"));
      if (!(proto instanceof _LppObject))
        throw new Error(
          "lpp: unexpected prototype -- must be a LppObject instance"
        );
      return lookupPrototype(proto, key) !== null;
    }
    /**
     * Delete a value from the object.
     * @param key Key to delete.
     * @returns Whether the value exists.
     */
    delete(key) {
      return this.value.delete(key);
    }
    /**
     * Detect whether a value is constructed from fn.
     * @param fn Function.
     * @returns Whether the value is constructed from fn.
     */
    instanceof(fn) {
      const constructor = this.get("constructor");
      const prototype1 = ensureValue(constructor.get("prototype"));
      const prototype2 = ensureValue(fn.get("prototype"));
      if (prototype1 instanceof _LppObject && prototype2 instanceof _LppObject)
        return comparePrototype(prototype1, prototype2);
      return false;
    }
    /**
     * @returns toString for visualReport.
     */
    toString() {
      return "<Lpp Object>";
    }
    /**
     * Do arithmetic operations.
     * @param op Binary operator.
     * @param rhs Right hand side of the operation.
     */
    calc(op, rhs) {
      if (rhs) {
        switch (op) {
          case "=": {
            throw new LppError("assignOfConstant");
          }
          case "+": {
            if (!(this instanceof LppFunction) && rhs instanceof _LppObject && !(rhs instanceof LppFunction)) {
              if (this.value.has("constructor") || rhs.value.has("constructor")) {
                return new LppConstant(NaN);
              }
              const ret = new _LppObject();
              for (const [key, value] of this.value.entries()) {
                ret.set(key, value);
              }
              for (const [key, value] of rhs.value.entries()) {
                ret.set(key, value);
              }
              return ret;
            }
            return new LppConstant(NaN);
          }
          case "==": {
            return new LppConstant(equal(this, rhs));
          }
          case "!=": {
            return new LppConstant(!equal(this, rhs));
          }
          case ">":
          case "<":
          case ">=":
          case "<=": {
            return new LppConstant(compare(this, op, rhs));
          }
          case "&&":
          case "||": {
            const left = asBoolean(this);
            const right = asBoolean(rhs);
            return new LppConstant(op === "&&" ? left && right : left || right);
          }
          case "instanceof": {
            if (rhs instanceof LppFunction) {
              return new LppConstant(this.instanceof(rhs));
            }
            throw new LppError("notCallable");
          }
          case "*":
          case "-":
          case "/":
          case "%":
          case "<<":
          case ">>":
          case ">>>":
          case "&":
          case "|":
          case "^": {
            return new LppConstant(NaN);
          }
        }
      } else {
        switch (op) {
          case "delete": {
            throw new LppError("assignOfConstant");
          }
          case "!": {
            return new LppConstant(!asBoolean(this));
          }
          case "+":
          case "-":
          case "~": {
            return new LppConstant(NaN);
          }
        }
      }
      throw new Error("lpp: unknown operand");
    }
  };
  var LppArray = class _LppArray extends LppValue2 {
    /**
     * Construct an array object.
     * @param value Array of values.
     */
    constructor(value = []) {
      super();
      this.value = value;
    }
    /**
     * Get a value.
     * @param key Value to get.
     * @returns Child object.
     */
    get(key) {
      if (key === "constructor") {
        return global.get("Array") ?? new LppConstant(null);
      } else {
        const idx = parseInt(key, 10);
        if (idx >= 0) {
          const res = this.value[idx];
          if (res)
            return new LppReference(this, key, res);
          else
            return new LppReference(this, key, new LppConstant(null));
        } else {
          const constructor = ensureValue(this.get("constructor"));
          if (!(constructor instanceof LppFunction))
            throw new Error(
              "lpp: unexpected constructor -- must be a LppFunction instance"
            );
          const proto = ensureValue(constructor.get("prototype"));
          if (!(proto instanceof LppObject))
            throw new Error(
              "lpp: unexpected prototype -- must be a LppObject instance"
            );
          const member = lookupPrototype(proto, key);
          if (member === null)
            throw new LppError("invalidIndex");
          return new LppReference(this, key, member);
        }
      }
    }
    /**
     * Set a value.
     * @param key Key to set.
     * @param value Value to set.
     * @returns Value.
     */
    set(key, value) {
      const idx = parseInt(key, 10);
      if (idx >= 0) {
        this.value[idx] = value;
        return new LppReference(this, key, value);
      } else
        throw new LppError("invalidIndex");
    }
    /**
     * Detect whether a value exists.
     * @param key Key to detect.
     * @returns Whether the value exists.
     */
    has(key) {
      if (key === "constructor")
        return true;
      const idx = parseInt(key, 10);
      if (idx >= 0 && idx in this.value)
        return true;
      const constructor = ensureValue(this.get("constructor"));
      if (!(constructor instanceof LppFunction))
        throw new Error(
          "lpp: unexpected constructor -- must be a LppFunction instance"
        );
      const proto = ensureValue(constructor.get("prototype"));
      if (!(proto instanceof LppObject))
        throw new Error(
          "lpp: unexpected prototype -- must be a LppObject instance"
        );
      return lookupPrototype(proto, key) !== null;
    }
    /**
     * Delete a value from the object.
     * @param key Key to delete.
     * @returns Whether the value exists.
     */
    delete(key) {
      const idx = parseInt(key, 10);
      if (idx >= 0 && idx in this.value) {
        delete this.value[idx];
        return true;
      }
      return false;
    }
    /**
     * Detect whether a value is constructed from fn.
     * @param fn Function.
     * @returns Whether the value is constructed from fn.
     */
    instanceof(fn) {
      return fn === global.get("Array");
    }
    /**
     * @returns toString for visualReport.
     */
    toString() {
      return "<Lpp Array>";
    }
    /**
     * Do arithmetic operations.
     * @param op Binary operator.
     * @param rhs Right hand side of the operation.
     */
    calc(op, rhs) {
      if (rhs) {
        switch (op) {
          case "=": {
            throw new LppError("assignOfConstant");
          }
          case "+": {
            if (rhs instanceof _LppArray) {
              return new _LppArray(this.value.concat(rhs.value));
            }
            return new LppConstant(NaN);
          }
          case "*": {
            if (rhs instanceof LppConstant && (typeof rhs.value === "boolean" || typeof rhs.value === "number")) {
              const time = typeof rhs.value === "boolean" ? +rhs.value : rhs.value;
              if (Number.isInteger(time)) {
                const ret = new _LppArray();
                for (let i = 0; i < time; i++) {
                  ret.value = ret.value.concat(this.value);
                }
                return ret;
              }
            }
            return new LppConstant(NaN);
          }
          case "==": {
            return new LppConstant(equal(this, rhs));
          }
          case "!=": {
            return new LppConstant(!equal(this, rhs));
          }
          case ">":
          case "<":
          case ">=":
          case "<=": {
            return new LppConstant(compare(this, op, rhs));
          }
          case "&&":
          case "||": {
            const left = asBoolean(this);
            const right = asBoolean(rhs);
            return new LppConstant(op === "&&" ? left && right : left || right);
          }
          case "instanceof": {
            if (rhs instanceof LppFunction) {
              return new LppConstant(this.instanceof(rhs));
            }
            throw new LppError("notCallable");
          }
          case "-":
          case "/":
          case "%":
          case "<<":
          case ">>":
          case ">>>":
          case "&":
          case "|":
          case "^": {
            return new LppConstant(NaN);
          }
        }
      } else {
        switch (op) {
          case "delete": {
            throw new LppError("assignOfConstant");
          }
          case "!": {
            return new LppConstant(!asBoolean(this));
          }
          case "+":
          case "-":
          case "~": {
            return new LppConstant(NaN);
          }
        }
      }
      throw new Error("lpp: unknown operand");
    }
  };
  var LppHandle = class {
    constructor(fn, self, args) {
      this.fn = fn;
      this.self = self;
      this.args = args;
    }
  };
  var LppFunction = class _LppFunction extends LppObject {
    /**
     * Construct a function object.
     * @warning Do not use this function directly unless you know what you are doing! Use LppFunction.native instead.
     * @param caller Function to execute.
     * @param prototype Function prototype.
     */
    constructor(caller, prototype = new LppObject()) {
      super(/* @__PURE__ */ new Map(), void 0);
      this.caller = caller;
      this.value.set("prototype", prototype);
    }
    /**
     * Construct a native function.
     * @param execute Function to execute.
     * @param prototype Function prototype.
     * @returns Constructed function.
     */
    static native(execute, prototype) {
      function addNativeTraceback(exception, ctx) {
        if (exception instanceof LppException)
          exception.pushStack(
            new LppTraceback.NativeFn(ctx.fn, ctx.self, ctx.args)
          );
        return exception;
      }
      return new _LppFunction((ctx) => {
        return withValue(execute(ctx), (value) => addNativeTraceback(value, ctx));
      }, prototype);
    }
    /**
     * Get a value.
     * @param key Value to get.
     * @returns Child object.
     */
    get(key) {
      if (key === "constructor") {
        return global.get("Function") ?? new LppConstant(null);
      } else if (key === "prototype") {
        const res = this.value.get(key);
        if (res)
          return res;
        else
          throw new Error("lpp: unexpected get -- prototype is null");
      } else {
        const res = this.value.get(key);
        if (res)
          return new LppReference(this, key, res);
        const constructor = ensureValue(this.get("constructor"));
        if (!(constructor instanceof _LppFunction))
          throw new Error(
            "lpp: unexpected constructor -- must be a LppFunction instance"
          );
        const proto = ensureValue(constructor.get("prototype"));
        if (!(proto instanceof LppObject))
          throw new Error(
            "lpp: unexpected prototype -- must be a LppObject instance"
          );
        const member = lookupPrototype(proto, key);
        if (member === null)
          return new LppReference(this, key, new LppConstant(null));
        return new LppReference(this, key, member);
      }
    }
    /**
     * Set a value.
     * @param key Key to set.
     * @param value Value to set.
     * @returns Value.
     */
    set(key, value) {
      this.value.set(key, value);
      return new LppReference(this, key, value);
    }
    /**
     * Detect whether a value exists.
     * @param key Key to detect.
     * @returns Whether the value exists.
     */
    has(key) {
      if (key === "constructor" || this.value.has(key))
        return true;
      const constructor = ensureValue(this.get("constructor"));
      if (!(constructor instanceof _LppFunction))
        throw new Error(
          "lpp: unexpected constructor -- must be a LppFunction instance"
        );
      const proto = ensureValue(constructor.get("prototype"));
      if (!(proto instanceof LppObject))
        throw new Error(
          "lpp: unexpected prototype -- must be a LppObject instance"
        );
      return lookupPrototype(proto, key) !== null;
    }
    /**
     * Delete a value from the object.
     * @param key Key to delete.
     * @returns Whether the value exists.
     */
    delete(key) {
      if (key === "prototype") {
        throw new LppError("assignOfConstant");
      }
      return this.value.delete(key);
    }
    /**
     * Call function with arguments.
     * @param self Function self object. Might be null.
     * @param args Function arguments.
     * @returns Return value.
     */
    apply(self, args) {
      return this.caller(new LppHandle(this, self, args));
    }
    /**
     * Call function as a constructor.
     * @param args Function arguments.
     * @returns Return value.
     */
    construct(args) {
      if (this === global.get("Number") || this === global.get("String") || this === global.get("Boolean") || this === global.get("Array") || this === global.get("Function") || this === global.get("Object"))
        return this.apply(new LppConstant(null), args);
      const obj = this === global.get("Promise") ? new LppPromise(new Promise(() => {
      })) : new LppObject(/* @__PURE__ */ new Map(), this);
      const res = this.apply(obj, args);
      const process = (result) => {
        if (result instanceof LppException)
          return result;
        return new LppReturn(obj);
      };
      return withValue(res, (result) => process(result));
    }
    /**
     * @returns toString for visualReport.
     */
    toString() {
      return "<Lpp Function>";
    }
  };
  var LppPromise = class _LppPromise extends LppObject {
    constructor(pm) {
      const GlobalPromise = global.get("Promise");
      if (!(GlobalPromise instanceof LppFunction)) {
        throw new Error("lpp: not implemented");
      }
      super(/* @__PURE__ */ new Map(), GlobalPromise);
      this.pm = pm;
    }
    /**
     * then() function.
     * @param resolveFn
     * @param rejectFn
     * @returns
     */
    done(resolveFn, rejectFn) {
      return _LppPromise.generate((resolve, reject) => {
        this.pm.then(
          (value) => {
            if (value instanceof LppValue2) {
              if (resolveFn) {
                const res = resolveFn.apply(this, [value]);
                return withValue(res, (v) => processThenReturn(v, resolve, reject));
              } else {
                return processThenReturn(new LppReturn(value), resolve, reject);
              }
            }
            throw new Error("lpp: unknown result");
          },
          (err) => {
            if (err instanceof LppValue2) {
              if (rejectFn) {
                const res = rejectFn.apply(this, [err]);
                return withValue(res, (v) => processThenReturn(v, resolve, reject));
              } else {
                return reject(err);
              }
            }
            throw err;
          }
        );
        return void 0;
      });
    }
    /**
     * catch() function.
     * @param rejectFn
     * @returns
     */
    error(rejectFn) {
      return _LppPromise.generate((resolve, reject) => {
        this.pm.catch((err) => {
          if (err instanceof LppValue2) {
            const res = rejectFn.apply(this, [err]);
            return withValue(res, (v) => processThenReturn(v, resolve, reject));
          }
          throw err;
        });
        return void 0;
      });
    }
    static generate(fn) {
      let resolveFn;
      let rejectFn;
      resolveFn = rejectFn = () => {
        throw new Error("not initialized");
      };
      const pm = new Promise((resolve, reject) => {
        resolveFn = resolve;
        rejectFn = reject;
      });
      const res = fn(resolveFn, rejectFn);
      return withValue(res, () => new _LppPromise(pm));
    }
  };

  // src/core/context.ts
  var LppReturn = class {
    /**
     * Construct a new LppReturn instance.
     * @param value Result.
     */
    constructor(value) {
      this.value = value;
      this.value = value;
    }
  };
  var LppException = class {
    /**
     * Construct a new LppException instance.
     * @param value Result.
     */
    constructor(value) {
      this.value = value;
      this.stack = [];
    }
    /**
     * Traceback.
     */
    stack;
    /**
     * Push stack into traceback.
     * @param stack Current stack.
     */
    pushStack(stack) {
      this.stack.push(stack);
    }
  };
  var LppTraceback;
  ((LppTraceback3) => {
    class Base {
    }
    LppTraceback3.Base = Base;
    class NativeFn extends Base {
      /**
       * Construct a traceback object.
       * @param fn Called function.
       * @param self Self.
       * @param args Arguments.
       */
      constructor(fn, self, args) {
        super();
        this.fn = fn;
        this.self = self;
        this.args = args;
      }
      toString() {
        return "<Native Function>";
      }
    }
    LppTraceback3.NativeFn = NativeFn;
  })(LppTraceback || (LppTraceback = {}));
  var LppClosure = class extends LppValue2 {
    value = /* @__PURE__ */ new Map();
    /**
     * Get a value.
     * @param key Value to get.
     * @returns Child object.
     */
    get(key) {
      return new LppReference(
        this,
        key,
        this.value.get(key) ?? new LppConstant(null)
      );
    }
    /**
     * Set a value.
     * @param key Key to set.
     * @param value Value to set.
     * @returns Value.
     */
    set(key, value) {
      this.value.set(key, value);
      return new LppReference(this, key, value);
    }
    /**
     * Detect whether a value exists.
     * @param key Key to detect.
     * @returns Whether the value exists.
     */
    has(key) {
      return this.value.has(key);
    }
    /**
     * Delete a value from the object.
     * @param key Key to delete.
     * @returns Whether the value exists.
     */
    delete(key) {
      return this.value.delete(key);
    }
    instanceof() {
      throw new Error("lpp: invalid usage of instanceof on LppClosure");
    }
    toString() {
      return "<Lpp Closure>";
    }
    calc() {
      throw new Error("lpp: invalid usage of calc on LppClosure");
    }
    constructor() {
      super();
    }
  };
  var LppContext = class {
    /**
     * Construct a new context.
     * @param parent Parent closure.
     * @param returnCallback Callback if function returns.
     * @param exceptionCallback Callback if function throws.
     */
    constructor(parent, _returnCallback, _exceptionCallback) {
      this.parent = parent;
      this._returnCallback = _returnCallback;
      this._exceptionCallback = _exceptionCallback;
      this.closure = new LppClosure();
      this.parent = parent;
    }
    /**
     * Closure.
     */
    closure = new LppClosure();
    /**
     * Exception callback wrapper.
     * @param value Exception.
     */
    exceptionCallback(value) {
      this._exceptionCallback(value);
      this.clearCallbacks();
    }
    /**
     * Return callback wrapper.
     * @param value Result.
     */
    returnCallback(value) {
      this._returnCallback(value);
      this.clearCallbacks();
    }
    /**
     * Get variable.
     * @param name Variable name.
     * @returns Variable result.
     */
    get(name) {
      if (this.closure.has(name))
        return this.closure.get(name);
      else
        return this.parent ? this.parent.get(name) : this.closure.get(name);
    }
    /**
     * Clear callbacks.
     */
    clearCallbacks() {
      this._exceptionCallback = () => {
      };
      this._returnCallback = () => {
      };
    }
    /**
     * Unwind to a parent function context.
     * @returns Result.
     */
    unwind() {
      return this.parent ? this.parent.unwind() : null;
    }
  };
  var LppFunctionContext = class extends LppContext {
    /**
     * @param parent Parent context.
     * @param self Self object.
     * @param returnCallback Callback if function returns.
     * @param exceptionCallback Callback if function throws.
     */
    constructor(parent, self, returnCallback, exceptionCallback) {
      super(parent, returnCallback, exceptionCallback);
      this.self = self;
    }
    /**
     * Unwind to a parent function context.
     * @returns Result.
     */
    unwind() {
      return this;
    }
  };

  // src/core/ffi/index.ts
  var ffi_exports = {};
  __export(ffi_exports, {
    fromObject: () => fromObject,
    toObject: () => toObject
  });
  function toObject(value) {
    const map = /* @__PURE__ */ new WeakMap();
    function deserializeInternal(value2) {
      if (value2 instanceof LppConstant)
        return value2.value;
      if (value2 instanceof LppArray) {
        const cache = map.get(value2);
        if (cache)
          return cache;
        const res = value2.value.map((v) => v ? deserializeInternal(v) : null);
        map.set(value2, res);
        return res;
      }
      if (value2 instanceof LppObject) {
        const cache = map.get(value2);
        if (cache)
          return cache;
        const res = {};
        for (const [k, v] of value2.value.entries()) {
          if (k === "constructor")
            continue;
          res[k] = deserializeInternal(v);
        }
        map.set(value2, res);
        return res;
      }
      return null;
    }
    return deserializeInternal(value);
  }
  function fromObject(value) {
    const map = /* @__PURE__ */ new WeakMap();
    function serializeInternal(value2) {
      if (value2 === null || value2 === void 0)
        return new LppConstant(null);
      switch (typeof value2) {
        case "string":
        case "number":
        case "boolean":
          return new LppConstant(value2);
        case "object": {
          const v = map.get(value2);
          if (v)
            return v;
          if (value2 instanceof globalThis.Array) {
            const res = new LppArray(value2.map((value3) => serializeInternal(value3)));
            map.set(value2, res);
            return res;
          }
          const obj = new LppObject();
          for (const [k, v2] of globalThis.Object.entries(value2)) {
            obj.set(k, serializeInternal(v2));
          }
          map.set(value2, obj);
          return obj;
        }
      }
      return new LppConstant(null);
    }
    return serializeInternal(value);
  }

  // src/core/global.ts
  function processPromise(self, res) {
    self.pm = res.pm;
    return new LppReturn(new LppConstant(null));
  }
  var global = /* @__PURE__ */ new Map();
  var Global;
  ((Global2) => {
    Global2.Boolean = LppFunction.native(({ args }) => {
      if (args.length < 1)
        return new LppReturn(new LppConstant(false));
      return new LppReturn(new LppConstant(asBoolean(args[0])));
    }, new LppObject(/* @__PURE__ */ new Map()));
    Global2.Number = LppFunction.native(({ args }) => {
      function convertToNumber(args2) {
        if (args2.length < 1)
          return new LppConstant(0);
        const v = args2[0];
        if (v instanceof LppConstant) {
          if (v === new LppConstant(null))
            return new LppConstant(0);
          switch (typeof v.value) {
            case "string":
              return new LppConstant(globalThis.Number(v.value));
            case "number":
              return new LppConstant(v.value);
            case "boolean":
              return v.value ? new LppConstant(1) : new LppConstant(0);
          }
        } else if (v instanceof LppFunction) {
          return new LppConstant(NaN);
        } else if (v instanceof LppObject) {
          return new LppConstant(NaN);
        }
        return new LppConstant(NaN);
      }
      return new LppReturn(convertToNumber(args));
    }, new LppObject(/* @__PURE__ */ new Map()));
    Global2.String = LppFunction.native(
      ({ args }) => {
        function convertToString(args2) {
          if (args2.length < 1)
            return new LppConstant("");
          const v = args2[0];
          return new LppConstant(v.toString());
        }
        return new LppReturn(convertToString(args));
      },
      new LppObject(
        /* @__PURE__ */ new Map([
          [
            "length",
            LppFunction.native((self) => {
              if (self instanceof LppConstant && typeof self.value === "string") {
                return new LppReturn(new LppConstant(self.value.length));
              }
              return raise(Global2.IllegalInvocationError.construct([]));
            })
          ]
        ])
      )
    );
    Global2.Array = LppFunction.native(
      ({ args }) => {
        function convertToArray(args2) {
          if (args2.length < 1)
            return new LppArray();
          if (args2.length === 1 && args2[0] instanceof LppArray) {
            return args2[0];
          }
          return new LppArray(args2);
        }
        return new LppReturn(convertToArray(args));
      },
      new LppObject(
        /* @__PURE__ */ new Map([
          [
            "length",
            LppFunction.native((self) => {
              if (self instanceof LppArray) {
                return new LppReturn(new LppConstant(self.value.length));
              }
              return raise(Global2.IllegalInvocationError.construct([]));
            })
          ]
        ])
      )
    );
    Global2.Object = LppFunction.native(({ args }) => {
      function convertToObject(args2) {
        if (args2.length < 1)
          return new LppObject();
        return args2[0];
      }
      return new LppReturn(convertToObject(args));
    }, new LppObject(/* @__PURE__ */ new Map()));
    Global2.Function = LppFunction.native(
      ({ args }) => {
        if (args.length < 1)
          return new LppReturn(
            new LppFunction(() => {
              return new LppReturn(new LppConstant(null));
            })
          );
        if (args[0] instanceof LppFunction)
          return new LppReturn(args[0]);
        return raise(Global2.IllegalInvocationError.construct([]));
      },
      new LppObject(
        /* @__PURE__ */ new Map([
          ["prototype", ensureValue(Global2.Object.get("prototype"))],
          [
            "apply",
            LppFunction.native(({ self, args }) => {
              if (self instanceof LppFunction) {
                let selfArg = new LppConstant(null);
                let argArray = [];
                switch (args.length) {
                  case 0: {
                    break;
                  }
                  case 1: {
                    selfArg = args[0];
                    break;
                  }
                  default: {
                    if (!(args[1] instanceof LppArray)) {
                      return raise(Global2.IllegalInvocationError.construct([]));
                    }
                    selfArg = args[0];
                    argArray = args[1].value.map((v) => v ?? new LppConstant(null));
                    break;
                  }
                }
                return self.apply(selfArg, argArray);
              } else {
                return raise(Global2.IllegalInvocationError.construct([]));
              }
            })
          ]
        ])
      )
    );
    Global2.Promise = LppFunction.native(
      ({ self, args }) => {
        if (self instanceof LppPromise && args.length > 0 && args[0] instanceof LppFunction) {
          const fn = args[0];
          const temp = LppPromise.generate((resolve, reject) => {
            const res = fn.apply(self, [
              new LppFunction(({ args: args2 }) => {
                const res2 = processThenReturn(
                  new LppReturn(args2[0] ?? new LppConstant(null)),
                  resolve,
                  reject
                );
                return withValue(res2, () => new LppReturn(new LppConstant(null)));
              }),
              new LppFunction(({ args: args2 }) => {
                reject(args2[0] ?? new LppConstant(null));
                return new LppReturn(new LppConstant(null));
              })
            ]);
            return withValue(res, () => void 0);
          });
          return withValue(temp, (res) => processPromise(self, res));
        } else {
          return raise(Global2.IllegalInvocationError.construct([]));
        }
      },
      new LppObject(
        /* @__PURE__ */ new Map([
          [
            "then",
            LppFunction.native(({ self, args }) => {
              if (self instanceof LppPromise) {
                return new LppReturn(
                  self.done(
                    args[0] instanceof LppFunction ? args[0] : void 0,
                    args[1] instanceof LppFunction ? args[1] : void 0
                  )
                );
              } else {
                return raise(Global2.IllegalInvocationError.construct([]));
              }
            })
          ],
          [
            "catch",
            LppFunction.native(({ self, args }) => {
              if (self instanceof LppPromise && args.length > 0 && args[0] instanceof LppFunction) {
                return new LppReturn(self.error(args[0]));
              } else {
                const res = Global2.IllegalInvocationError.construct([]);
                return withValue(res, (v) => {
                  if (v instanceof LppException)
                    return v;
                  return new LppException(v.value);
                });
              }
            })
          ]
        ])
      )
    );
    Global2.Promise.set(
      "resolve",
      LppFunction.native(({ self, args }) => {
        if (self !== Global2.Promise) {
          return raise(Global2.IllegalInvocationError.construct([]));
        }
        const res = LppPromise.generate((resolve, reject) => {
          const res2 = processThenReturn(
            new LppReturn(args[0] ?? new LppConstant(null)),
            resolve,
            reject
          );
          return withValue(res2, () => void 0);
        });
        return withValue(res, (v) => new LppReturn(v));
      })
    );
    Global2.Promise.set(
      "reject",
      LppFunction.native(({ self, args }) => {
        if (self !== Global2.Promise) {
          return raise(Global2.IllegalInvocationError.construct([]));
        }
        return new LppReturn(
          new LppPromise(
            globalThis.Promise.reject(args[0] ?? new LppConstant(null))
          )
        );
      })
    );
    Global2.Error = LppFunction.native(({ self, args }) => {
      if (self.instanceof(Global2.Error)) {
        self.set("value", args[0] ?? new LppConstant(null));
        self.set("stack", new LppConstant(null));
        return new LppReturn(new LppArray());
      } else {
        return raise(Global2.IllegalInvocationError.construct([]));
      }
    }, new LppObject(/* @__PURE__ */ new Map()));
    Global2.IllegalInvocationError = LppFunction.native(
      ({ self, args }) => {
        if (self.instanceof(Global2.IllegalInvocationError)) {
          const res = Global2.Error.apply(self, args);
          return withValue(res, (v) => {
            if (v instanceof LppException)
              return v;
            return new LppReturn(new LppConstant(null));
          });
        } else {
          return raise(Global2.IllegalInvocationError.construct([]));
        }
      },
      new LppObject(/* @__PURE__ */ new Map([["prototype", ensureValue(Global2.Error.get("prototype"))]]))
    );
    Global2.SyntaxError = LppFunction.native(
      ({ self, args }) => {
        if (self.instanceof(Global2.SyntaxError)) {
          const res = Global2.Error.apply(self, args);
          return withValue(res, (v) => {
            if (v instanceof LppException)
              return v;
            return new LppReturn(new LppConstant(null));
          });
        } else {
          return raise(Global2.IllegalInvocationError.construct([]));
        }
      },
      new LppObject(/* @__PURE__ */ new Map([["prototype", ensureValue(Global2.Error.get("prototype"))]]))
    );
    Global2.JSON = new LppObject(
      /* @__PURE__ */ new Map([
        [
          "parse",
          LppFunction.native(({ self, args }) => {
            if (self !== Global2.JSON) {
              return raise(Global2.IllegalInvocationError.construct([]));
            }
            if (args.length < 1 || !(args[0] instanceof LppConstant) || !(typeof args[0].value === "string")) {
              return raise(
                Global2.SyntaxError.construct([new LppConstant("Invalid JSON")])
              );
            }
            try {
              return new LppReturn(
                fromObject(globalThis.JSON.parse(args[0].value))
              );
            } catch (e) {
              if (e instanceof globalThis.Error) {
                return raise(Global2.SyntaxError.construct([new LppConstant(e.message)]));
              }
              throw e;
            }
          })
        ],
        [
          "stringify",
          LppFunction.native(({ self, args }) => {
            if (self !== Global2.JSON) {
              return raise(Global2.IllegalInvocationError.construct([]));
            }
            if (args.length < 1) {
              return raise(
                Global2.SyntaxError.construct([new LppConstant("Invalid value")])
              );
            }
            try {
              return new LppReturn(
                new LppConstant(globalThis.JSON.stringify(toObject(args[0])))
              );
            } catch (e) {
              if (e instanceof globalThis.Error) {
                return raise(Global2.SyntaxError.construct([new LppConstant(e.message)]));
              }
              throw e;
            }
          })
        ]
      ])
    );
  })(Global || (Global = {}));
  global.set("Boolean", Global.Boolean);
  global.set("Number", Global.Number);
  global.set("String", Global.String);
  global.set("Array", Global.Array);
  global.set("Object", Global.Object);
  global.set("Function", Global.Function);
  global.set("Promise", Global.Promise);
  global.set("Error", Global.Error);
  global.set("IllegalInvocationError", Global.IllegalInvocationError);
  global.set("SyntaxError", Global.SyntaxError);
  global.set("JSON", Global.JSON);

  // src/impl/l10n/en-us.ts
  var en_us_default = {
    // Name
    "lpp.name": "lpp",
    // Documentation
    "lpp.documentation": "Open documentation",
    "lpp.documentation.url": "https://github.com/FurryR/lpp-scratch/blob/main/README.md",
    // Block
    /// Construction
    "lpp.block.construct.Number": "Number",
    "lpp.block.construct.String": "String",
    "lpp.block.construct.Function": "function",
    /// Operator
    "lpp.block.operator.var": "var",
    "lpp.block.operator.self": "self",
    /// Statement
    "lpp.block.statement.return": "return",
    "lpp.block.statement.throw": "throw",
    "lpp.block.statement.scope": "scope",
    "lpp.block.statement.try.1": "try",
    "lpp.block.statement.try.2": "catch",
    // Error
    "lpp.error.useAfterDispose.summary": "Cannot operate sprite on a disposed target.",
    "lpp.error.useAfterDispose.detail": "This error happens when you call a function which belongs to a disposed target, whose sprite is operated on. Please review your code.",
    "lpp.error.useOutsideFunction.summary": "Cannot use this block outside a function context.",
    "lpp.error.useOutsideFunction.detail": "Please note that this block must be used in function contexts.",
    "lpp.error.useOutsideContext.summary": "Cannot use this block outside a lpp context.",
    "lpp.error.useOutsideContext.detail": 'Please create a lpp context use "scope" block first.',
    "lpp.error.syntaxError.summary": "Syntax error.",
    "lpp.error.syntaxError.detail": "You used the block incorrectly. Please note that lpp doesn't allow direct usages of Scratch literals (index access is a exception).",
    "lpp.error.accessOfNull.summary": "Invalid access of null.",
    "lpp.error.accessOfNull.detail": "Please validate the object before you use.",
    "lpp.error.assignOfConstant.summary": "Assigning to a constant is not allowed.",
    "lpp.error.assignOfConstant.detail": "Please note that you cannot assign a value to a constant.",
    "lpp.error.invalidIndex.summary": "Invalid index.",
    "lpp.error.invalidIndex.detail": "Please note that you cannot use complex objects like Array, Object or Function as index.",
    "lpp.error.notCallable.summary": "Object is not callable.",
    "lpp.error.notCallable.detail": "Please note that you can only call Function objects.",
    "lpp.error.recursivePrototype.summary": "Recursive prototype is not allowed.",
    "lpp.error.recursivePrototype.detail": "Please resolve recursive dependency.",
    "lpp.error.uncaughtException.summary": "Uncaught exception.",
    "lpp.error.uncaughtException.detail": "Please use try-catch block to catch exceptions or the code will stop execution.",
    "lpp.error.uncaughtException.exception": "Exception:",
    "lpp.error.uncaughtException.traceback": "Traceback:",
    "lpp.error.releaseMode.summary": "The code encountered an error while running.",
    "lpp.error.releaseMode.detail": "The program may not work as intended. Please contact project maintainers with this message for help.",
    "lpp.error.blockNotFound": "Unable to find the block in Blockly workspace. The block might not belong to the target that you are currently editing.",
    "lpp.error.position": "Position:",
    "lpp.error.context": "Context:",
    "lpp.error.self": "Self:",
    "lpp.error.arguments": "Arguments:",
    "lpp.error.hint": "For further information please check DevTools Console.",
    // Category
    "lpp.category.builtin": "Builtin",
    "lpp.category.construct": "Construction",
    "lpp.category.operator": "Operator",
    "lpp.category.statement": "Statement",
    // Tooltip
    "lpp.tooltip.builtin.type": "Predefined builtin data types. Includes everything which language feature requires.",
    "lpp.tooltip.builtin.error": "Predefined builtin error types. Includes all errors which builtin classes throw.",
    "lpp.tooltip.builtin.utility": "Predefined builtin utility types. Includes methods to process data.",
    "lpp.tooltip.construct.literal": "Construct special literals in lpp.",
    "lpp.tooltip.construct.Number": "Construct a Number object by Scratch literal.",
    "lpp.tooltip.construct.String": "Construct a String object by Scratch literal.",
    "lpp.tooltip.construct.Array": 'Construct an Array object with specified structure. Use "+" to add or "-" to remove an element.',
    "lpp.tooltip.construct.Object": 'Construct an Object object with specified structure. Use "+" to add or "-" to remove an element.',
    "lpp.tooltip.construct.Function": 'Construct an Function object. Use "+" to add or "-" to remove an argument.',
    "lpp.tooltip.operator.get": "Get specified member of specified object.",
    "lpp.tooltip.operator.binaryOp": "Do binary operations.",
    "lpp.tooltip.operator.unaryOp": "Do unary operations.",
    "lpp.tooltip.operator.call": 'Call function with given arguments. Use "+" to add or "-" to remove an argument.',
    "lpp.tooltip.operator.new": 'Construct an instance with given constructor and arguments. Use "+" to add or "-" to remove an argument.',
    "lpp.tooltip.operator.self": "Get the reference of self object in function context.",
    "lpp.tooltip.operator.var": "Get the reference of a specified local variable or an argument.",
    "lpp.tooltip.statement.return": "Return a value from the function.",
    "lpp.tooltip.statement.throw": "Throw a value. It will interrupt current control flow immediately.",
    "lpp.tooltip.statement.scope": "Create a lpp scope and execute the code in it.",
    "lpp.tooltip.statement.try": "Try capturing exceptions in specified statements. If an exception is thrown, set the specified reference to error object, then execute exception handling code.",
    "lpp.tooltip.statement.nop": "Does nothing. It is used to convert a Scratch reporter into a statement.",
    "lpp.tooltip.button.close": "Close this hint.",
    "lpp.tooltip.button.help.more": "Show detail.",
    "lpp.tooltip.button.help.less": "Hide detail.",
    "lpp.tooltip.button.scrollToBlockEnabled": "Scroll to this block.",
    "lpp.tooltip.button.scrollToBlockDisabled": "Unable to find this block in project.",
    "lpp.tooltip.button.nativeFn": "This is native function. For further information please check DevTools Console.",
    // About
    "lpp.about.summary": "lpp is a high-level programming language developed by @FurryR.",
    "lpp.about.github": "GitHub repository",
    "lpp.about.afdian": "Sponsor",
    "lpp.about.staff.1": "lpp developers staff",
    "lpp.about.staff.2": "lpp won't be created without their effort."
  };

  // src/impl/l10n/zh-cn.ts
  var zh_cn_default = {
    // 名称
    "lpp.name": "lpp",
    // 文档
    "lpp.documentation": "\u6253\u5F00\u6587\u6863",
    "lpp.documentation.url": "https://github.com/FurryR/lpp-scratch/blob/main/README-zh_CN.md",
    // 积木
    /// 构造
    "lpp.block.construct.Number": "\u6570\u5B57",
    "lpp.block.construct.String": "\u5B57\u7B26\u4E32",
    "lpp.block.construct.Function": "\u51FD\u6570",
    /// 运算符
    "lpp.block.operator.var": "\u53D8\u91CF",
    "lpp.block.operator.self": "\u81EA\u8EAB",
    /// 语句
    "lpp.block.statement.return": "\u8FD4\u56DE",
    "lpp.block.statement.throw": "\u629B\u51FA",
    "lpp.block.statement.scope": "\u4F5C\u7528\u57DF",
    "lpp.block.statement.try.1": "\u5C1D\u8BD5",
    "lpp.block.statement.try.2": "\u6355\u83B7",
    // 报错
    "lpp.error.useAfterDispose.summary": "\u65E0\u6CD5\u5728\u5DF2\u9500\u6BC1\u7684\u76EE\u6807\u4E0A\u64CD\u4F5C\u89D2\u8272\u3002",
    "lpp.error.useAfterDispose.detail": "\u5982\u679C\u60A8\u8C03\u7528\u4E00\u4E2A\u5C5E\u4E8E\u5DF2\u9500\u6BC1\u89D2\u8272\u7684\u51FD\u6570\u5E76\u5728\u5176\u4E0A\u64CD\u4F5C\u89D2\u8272\uFF0C\u5219\u4F1A\u53D1\u751F\u6B64\u9519\u8BEF\u3002\u8BF7\u68C0\u67E5\u60A8\u7684\u4EE3\u7801\u3002",
    "lpp.error.useOutsideFunction.summary": "\u65E0\u6CD5\u5728\u51FD\u6570\u4E4B\u5916\u4F7F\u7528\u6B64\u79EF\u6728\u3002",
    "lpp.error.useOutsideFunction.detail": "\u8BF7\u6CE8\u610F\u4E00\u5B9A\u8981\u5728\u51FD\u6570\u5185\u4F7F\u7528\u6B64\u7C7B\u79EF\u6728\u3002",
    "lpp.error.useOutsideContext.summary": "\u65E0\u6CD5\u5728 lpp \u4E0A\u4E0B\u6587\u4EE5\u5916\u4F7F\u7528\u6B64\u79EF\u6728\u3002",
    "lpp.error.useOutsideContext.detail": "\u8BF7\u9996\u5148\u4F7F\u7528\u4F5C\u7528\u57DF\u79EF\u6728\u6765\u521B\u5EFA\u4F5C\u7528\u57DF\u3002",
    "lpp.error.syntaxError.summary": "\u79EF\u6728\u8BED\u6CD5\u9519\u8BEF\u3002",
    "lpp.error.syntaxError.detail": "\u60A8\u9519\u8BEF\u5730\u4F7F\u7528\u4E86\u79EF\u6728\u3002\u8BF7\u6CE8\u610F lpp \u4E0D\u5141\u8BB8\uFF08\u5728\u4E0B\u6807\u8BBF\u95EE\u4EE5\u5916\u7684\u60C5\u51B5\u4E0B\uFF09\u76F4\u63A5\u4F7F\u7528 Scratch \u5B57\u9762\u91CF\u3002",
    "lpp.error.accessOfNull.summary": "\u8BBF\u95EE\u4E86 null \u7684\u6210\u5458\u3002",
    "lpp.error.accessOfNull.detail": "\u8BF7\u5728\u4F7F\u7528\u5BF9\u8C61\u524D\u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u4E3A\u7A7A\u3002",
    "lpp.error.assignOfConstant.summary": "\u5BF9\u5E38\u91CF\u8FDB\u884C\u4E86\u8D4B\u503C\u64CD\u4F5C\u3002",
    "lpp.error.assignOfConstant.detail": "\u60A8\u53EF\u80FD\u6DF7\u6DC6\u4E86\u5DE6\u503C\u548C\u53F3\u503C\u3002\u8BF7\u6CE8\u610F\u60A8\u65E0\u6CD5\u5BF9\u53F3\u503C\u8FDB\u884C\u8D4B\u503C\u64CD\u4F5C\u3002",
    "lpp.error.invalidIndex.summary": "\u5BF9\u8C61\u4E0B\u6807\u65E0\u6548\u3002",
    "lpp.error.invalidIndex.detail": "\u8BF7\u6CE8\u610F\u8BF8\u5982 Array\uFF0CObject\uFF0CFunction \u7B49\u590D\u6742\u6570\u636E\u7C7B\u578B\u65E0\u6CD5\u4F5C\u4E3A\u4E0B\u6807\u4F7F\u7528\u3002",
    "lpp.error.notCallable.summary": "\u5BF9\u8C61\u4E0D\u53EF\u8C03\u7528\u3002",
    "lpp.error.notCallable.detail": "\u60A8\u4E0D\u53EF\u8C03\u7528\u9664\u4E86 Function \u7C7B\u578B\u4EE5\u5916\u7684\u5BF9\u8C61\u3002",
    "lpp.error.recursivePrototype.summary": "\u5FAA\u73AF\u4F9D\u8D56 prototype \u4E0D\u88AB\u5141\u8BB8\u3002",
    "lpp.error.recursivePrototype.detail": "\u8BF7\u89E3\u51B3\u5FAA\u73AF\u4F9D\u8D56\u3002",
    "lpp.error.uncaughtException.summary": "\u6709\u672A\u88AB\u6355\u83B7\u7684\u5F02\u5E38\u3002",
    "lpp.error.uncaughtException.detail": "\u8BF7\u4F7F\u7528\u5C1D\u8BD5/\u6355\u83B7\u79EF\u6728\u5BF9\u9519\u8BEF\u8FDB\u884C\u6355\u83B7\uFF0C\u5426\u5219\u4EE3\u7801\u5C06\u7EC8\u6B62\u8FD0\u884C\u3002",
    "lpp.error.uncaughtException.exception": "\u9519\u8BEF\u5185\u5BB9\uFF1A",
    "lpp.error.uncaughtException.traceback": "\u6808\u56DE\u6EAF\uFF1A",
    "lpp.error.releaseMode.summary": "\u4EE3\u7801\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u53D1\u751F\u9519\u8BEF\u3002",
    "lpp.error.releaseMode.detail": "\u7A0B\u5E8F\u53EF\u80FD\u65E0\u6CD5\u6309\u9884\u671F\u6B63\u5E38\u8FD0\u884C\u3002\u8BF7\u8054\u7CFB\u9879\u76EE\u7EF4\u62A4\u8005\u4EE5\u83B7\u5F97\u5E2E\u52A9\u3002\u8BF7\u6CE8\u610F\u540C\u65F6\u9644\u4E0A\u6B64\u6D88\u606F\u3002",
    "lpp.error.blockNotFound": "\u65E0\u6CD5\u5728 Blockly \u5DE5\u4F5C\u533A\u4E2D\u627E\u5230\u79EF\u6728\u3002\u8BE5\u79EF\u6728\u53EF\u80FD\u5E76\u4E0D\u5C5E\u4E8E\u5F53\u524D\u6B63\u7F16\u8F91\u7684\u89D2\u8272\u3002",
    "lpp.error.position": "\u4F4D\u7F6E\uFF1A",
    "lpp.error.context": "\u4E0A\u4E0B\u6587\uFF1A",
    "lpp.error.self": "\u81EA\u8EAB\uFF1A",
    "lpp.error.arguments": "\u53C2\u6570\uFF1A",
    "lpp.error.hint": "\u8BE6\u7EC6\u5185\u5BB9\u5728 DevTools Console \u5185\u3002",
    // 分类
    "lpp.category.builtin": "\u5185\u5D4C",
    "lpp.category.construct": "\u6784\u9020",
    "lpp.category.operator": "\u8FD0\u7B97",
    "lpp.category.statement": "\u8BED\u53E5",
    // 帮助
    "lpp.tooltip.builtin.type": "\u9884\u5B9A\u4E49\u7684\u5185\u5D4C\u6570\u636E\u7C7B\u578B\u3002\u5305\u542B\u4E86\u8BED\u8A00\u7279\u6027\u6240\u9700\u8981\u7684\u5168\u90E8\u7C7B\u3002",
    "lpp.tooltip.builtin.error": "\u9884\u5B9A\u4E49\u7684\u5185\u5D4C\u9519\u8BEF\u7C7B\u578B\u3002\u5305\u542B\u4E86\u8BED\u8A00\u5185\u5D4C\u7C7B\u4F1A\u629B\u51FA\u7684\u5168\u90E8\u9519\u8BEF\u3002",
    "lpp.tooltip.builtin.utility": "\u9884\u5B9A\u4E49\u7684\u5B9E\u7528\u5DE5\u5177\u7C7B\u578B\u3002\u5305\u542B\u4E86\u5904\u7406\u6570\u636E\u9700\u8981\u7684\u5404\u79CD\u65B9\u6CD5\u3002",
    "lpp.tooltip.construct.literal": "\u6784\u9020 lpp \u4E2D\u7279\u6B8A\u7684\u5B57\u9762\u91CF\u3002",
    "lpp.tooltip.construct.Number": "\u4EE5 Scratch \u5B57\u9762\u91CF\u6784\u9020\u4E00\u4E2A Number \u5BF9\u8C61\u3002",
    "lpp.tooltip.construct.String": "\u4EE5 Scratch \u5B57\u9762\u91CF\u6784\u9020\u4E00\u4E2A String \u5BF9\u8C61\u3002",
    "lpp.tooltip.construct.Array": "\u4EE5\u6307\u5B9A\u7ED3\u6784\u6784\u9020 Array \u5BF9\u8C61\u3002\u53EF\u4F7F\u7528\u201C+\u201D\u6216\u201C-\u201D\u5BF9\u5143\u7D20\u8FDB\u884C\u589E\u51CF\u3002",
    "lpp.tooltip.construct.Object": "\u4EE5\u6307\u5B9A\u7ED3\u6784\u6784\u9020 Object \u5BF9\u8C61\u3002\u53EF\u4F7F\u7528\u201C+\u201D\u6216\u201C-\u201D\u5BF9\u5143\u7D20\u8FDB\u884C\u589E\u51CF\u3002",
    "lpp.tooltip.construct.Function": "\u6784\u9020 Function \u5BF9\u8C61\u3002\u53EF\u4F7F\u7528\u201C+\u201D\u6216\u201C-\u201D\u5BF9\u53C2\u6570\u8FDB\u884C\u589E\u51CF\u3002",
    "lpp.tooltip.operator.get": "\u83B7\u5F97\u5BF9\u8C61\u4E0B\u7684\u67D0\u4E2A\u6210\u5458\u3002",
    "lpp.tooltip.operator.binaryOp": "\u8FDB\u884C\u4E8C\u5143\u8FD0\u7B97\u3002",
    "lpp.tooltip.operator.unaryOp": "\u8FDB\u884C\u4E00\u5143\u8FD0\u7B97\u3002",
    "lpp.tooltip.operator.call": "\u4EE5\u7ED9\u5B9A\u7684\u53C2\u6570\u8C03\u7528\u51FD\u6570\u3002\u53EF\u4F7F\u7528\u201C+\u201D\u6216\u201C-\u201D\u5BF9\u53C2\u6570\u8FDB\u884C\u589E\u51CF\u3002",
    "lpp.tooltip.operator.new": "\u4EE5\u6307\u5B9A\u7684\u53C2\u6570\u548C\u6784\u9020\u5668\u6784\u9020\u4E00\u4E2A\u5B9E\u4F8B\u3002\u53EF\u4F7F\u7528\u201C+\u201D\u6216\u201C-\u201D\u5BF9\u53C2\u6570\u8FDB\u884C\u589E\u51CF\u3002",
    "lpp.tooltip.operator.self": "\u83B7\u5F97 Function \u5BF9\u8C61\u4E0A\u4E0B\u6587\u4E2D\u81EA\u8EAB\u7684\u5F15\u7528\u3002",
    "lpp.tooltip.operator.var": "\u83B7\u5F97\u5F53\u524D\u4F5C\u7528\u57DF\u4E2D\u5C40\u90E8\u53D8\u91CF\u6216\u53C2\u6570\u7684\u5F15\u7528\u3002",
    "lpp.tooltip.statement.return": "\u4ECE\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u503C\u3002",
    "lpp.tooltip.statement.throw": "\u629B\u51FA\u4E00\u4E2A\u503C\u3002\u8FD9\u5C06\u7ACB\u5373\u4E2D\u65AD\u5F53\u524D\u63A7\u5236\u6D41\u3002",
    "lpp.tooltip.statement.scope": "\u65B0\u5EFA lpp \u4F5C\u7528\u57DF\uFF0C\u5E76\u5728\u4F5C\u7528\u57DF\u5185\u6267\u884C\u4EE3\u7801\u3002",
    "lpp.tooltip.statement.try": "\u5C1D\u8BD5\u5728\u6307\u5B9A\u7684\u8BED\u53E5\u5757\u4E2D\u6355\u83B7\u9519\u8BEF\u3002\u82E5\u6709\u9519\u8BEF\u88AB\u629B\u51FA\uFF0C\u5C06\u6307\u5B9A\u7684\u53D8\u91CF\u5F15\u7528\u8D4B\u503C\u4E3A\u9519\u8BEF\u5BF9\u8C61\uFF0C\u7136\u540E\u6267\u884C\u9519\u8BEF\u5904\u7406\u4EE3\u7801\u3002",
    "lpp.tooltip.statement.nop": "\u65E0\u4EFB\u4F55\u6548\u679C\u3002\u7528\u4E8E\u5C06\u8FD4\u56DE\u503C\u79EF\u6728\u8F6C\u6362\u4E3A\u8BED\u53E5\u3002",
    "lpp.tooltip.button.close": "\u5173\u95ED\u8FD9\u4E2A\u63D0\u793A\u3002",
    "lpp.tooltip.button.help.more": "\u663E\u793A\u8BE6\u7EC6\u4FE1\u606F\u3002",
    "lpp.tooltip.button.help.less": "\u9690\u85CF\u8BE6\u7EC6\u4FE1\u606F\u3002",
    "lpp.tooltip.button.scrollToBlockEnabled": "\u8F6C\u5230\u8FD9\u4E2A\u79EF\u6728\u3002",
    "lpp.tooltip.button.scrollToBlockDisabled": "\u65E0\u6CD5\u5728\u9879\u76EE\u4E2D\u627E\u5230\u6B64\u79EF\u6728\u3002",
    "lpp.tooltip.button.nativeFn": "\u8FD9\u662F\u539F\u751F\u51FD\u6570\u3002\u8BE6\u7EC6\u5185\u5BB9\u5728 DevTools Console \u5185\u3002",
    // 关于
    "lpp.about.summary": "lpp \u662F\u7531 @FurryR \u5F00\u53D1\u7684\u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00\u3002",
    "lpp.about.github": "\u672C\u9879\u76EE\u7684 GitHub \u4ED3\u5E93",
    "lpp.about.afdian": "\u8D5E\u52A9\u8005",
    "lpp.about.staff.1": "lpp \u5F00\u53D1\u8005\u540D\u5355",
    "lpp.about.staff.2": "\u5982\u679C\u6CA1\u6709\u4ED6/\u5979\u4EEC\uFF0Clpp \u5C06\u4E0D\u590D\u5B58\u5728\u3002"
  };

  // src/impl/l10n/index.ts
  var l10n_default = {
    en: en_us_default,
    "zh-cn": zh_cn_default
  };

  // src/impl/traceback/dialog.ts
  var dialog_exports = {};
  __export(dialog_exports, {
    CloseIcon: () => CloseIcon,
    Div: () => Div,
    HelpIcon: () => HelpIcon,
    IconGroup: () => IconGroup,
    Text: () => Text,
    Title: () => Title,
    globalStyle: () => globalStyle,
    show: () => show
  });
  function show(Blockly, id, value, textAlign) {
    const workspace = Blockly.getMainWorkspace();
    const block = workspace.getBlockById(id);
    if (!block)
      return;
    Blockly.DropDownDiv.hideWithoutAnimation();
    Blockly.DropDownDiv.clearContent();
    const contentDiv = Blockly.DropDownDiv.getContentDiv(), elem = document.createElement("div");
    elem.setAttribute("class", "valueReportBox");
    elem.append(...value);
    elem.style.maxWidth = "none";
    elem.style.maxHeight = "none";
    elem.style.textAlign = textAlign;
    elem.style.userSelect = "none";
    contentDiv.appendChild(elem);
    Blockly.DropDownDiv.setColour(
      Blockly.Colours.valueReportBackground,
      Blockly.Colours.valueReportBorder
    );
    Blockly.DropDownDiv.showPositionedByBlock(
      workspace,
      block
    );
    return elem;
  }
  function IconGroup(icons) {
    const iconGroup = document.createElement("div");
    iconGroup.style.float = "right";
    iconGroup.append(...icons);
    return iconGroup;
  }
  function CloseIcon(Blockly, title) {
    const icon = document.createElement("span");
    icon.classList.add("lpp-traceback-icon");
    icon.addEventListener("click", () => {
      Blockly.DropDownDiv.hide();
    });
    icon.title = `\u274C ${title}`;
    icon.textContent = "\u274C";
    return icon;
  }
  function HelpIcon(title, hideTitle, onShow, onHide) {
    let state = false;
    const icon = document.createElement("span");
    icon.classList.add("lpp-traceback-icon");
    icon.textContent = "\u2753";
    icon.title = `\u2753 ${title}`;
    icon.addEventListener("click", () => {
      if (state) {
        icon.textContent = "\u2753";
        icon.title = `\u2753 ${title}`;
        onHide();
      } else {
        icon.textContent = "\u2796";
        icon.title = `\u2796 ${hideTitle}`;
        onShow();
      }
      state = !state;
    });
    return icon;
  }
  function Title(value) {
    const text = document.createElement("div");
    text.style.textAlign = "left";
    text.style.whiteSpace = "nowrap";
    text.style.overflow = "hidden";
    text.style.textOverflow = "ellipsis";
    text.title = text.textContent = value;
    return text;
  }
  function Text(value, className) {
    const text = document.createElement("span");
    if (className)
      text.className = className;
    text.textContent = value;
    return text;
  }
  function Div(value, className) {
    const div = document.createElement("div");
    if (className)
      div.className = className;
    div.append(...value);
    return div;
  }
  var globalStyle = document ? document.createElement("style") : void 0;
  if (globalStyle) {
    globalStyle.id = "lpp-traceback-style";
    globalStyle.textContent = `
.lpp-traceback-icon {
  transition: text-shadow 0.25s ease-out;
  color: transparent;
  text-shadow: 0 0 0 gray;
}
.lpp-traceback-icon:hover {
  cursor: pointer;
  text-shadow: 0 0 0 gray, 0px 0px 5px silver;
}
`;
    document.head.appendChild(globalStyle);
  }

  // src/impl/context.ts
  var LppTraceback2;
  ((LppTraceback3) => {
    LppTraceback3.Base = LppTraceback.Base;
    LppTraceback3.NativeFn = LppTraceback.NativeFn;
    class Block2 extends LppTraceback.Base {
      /**
       * Construct a traceback object.
       * @param target Target ID.
       * @param block Block ID.
       * @param context Context.
       */
      constructor(target, block, context) {
        super();
        this.target = target;
        this.block = block;
        this.context = context;
      }
      toString() {
        return this.block;
      }
    }
    LppTraceback3.Block = Block2;
  })(LppTraceback2 || (LppTraceback2 = {}));

  // src/impl/metadata/index.ts
  var metadata_exports = {};
  __export(metadata_exports, {
    TypeMetadata: () => TypeMetadata,
    attach: () => attach,
    hasMetadata: () => hasMetadata
  });
  var TypeMetadata = class {
    /**
     * Construct a type metadata object.
     * @param signature Function's signature.
     */
    constructor(signature) {
      this.signature = signature;
    }
  };
  function hasMetadata(obj) {
    const v = obj;
    return !!v.metadata;
  }
  function attach(obj, metadata) {
    const v = obj;
    v.metadata = metadata;
    return v;
  }

  // src/impl/serialization.ts
  var ScratchMetadata = class extends TypeMetadata {
    /**
     * Construct a Scratch metadata object.
     * @param signature Function's signature.
     * @param blocks Runtime blocks instance (for serialize/deserialize) and Block ID (refers to lpp_constructFunction).
     * @param sprite Original sprite ID of block container.
     * @param target Target ID.
     * @param closure Function's closure.
     */
    constructor(signature, blocks, sprite, target, closure) {
      super(signature);
      this.blocks = blocks;
      this.sprite = sprite;
      this.target = target;
      this.closure = closure;
    }
  };
  function serializeBlock(container, block) {
    function serializeBlockInternal(container2, block2) {
      const v = {};
      v[block2.id] = structuredClone(block2);
      for (const elem of Object.values(block2.inputs)) {
        const subBlock = container2.getBlock(elem.block);
        if (subBlock)
          Object.assign(v, serializeBlockInternal(container2, subBlock));
      }
      if (block2.next) {
        const nextBlock = container2.getBlock(block2.next);
        if (nextBlock)
          Object.assign(v, serializeBlockInternal(container2, nextBlock));
      }
      return v;
    }
    const res = serializeBlockInternal(container, block);
    res[block.id].parent = null;
    return res;
  }
  function deserializeBlock(container, blocks) {
    container._blocks = blocks;
  }
  var Validator;
  ((Validator2) => {
    function isField(value) {
      if (!(typeof value === "object" && value !== null))
        return false;
      const v = value;
      if (v.id !== null && typeof v.id !== "string")
        return false;
      if (typeof v.name !== "string")
        return false;
      if (typeof v.value !== "string")
        return false;
      return true;
    }
    Validator2.isField = isField;
    function isInput(container, value) {
      if (!(typeof value === "object" && value !== null))
        return false;
      const v = value;
      if (v.shadow !== null && typeof v.shadow !== "string")
        return false;
      if (typeof v.name !== "string")
        return false;
      if (typeof v.block !== "string" || !(v.block in container))
        return false;
      return true;
    }
    Validator2.isInput = isInput;
    function isBlock(container, id, value) {
      if (!(typeof value === "object" && value !== null))
        return false;
      const v = value;
      if (v.id !== id)
        return false;
      if (typeof v.opcode !== "string")
        return false;
      if (v.parent !== null) {
        if (typeof v.parent !== "string" || !(v.parent in container) || v.parent === id)
          return false;
      }
      if (v.next !== null) {
        if (typeof v.next !== "string" || !(v.next in container) || v.next === id)
          return false;
      }
      if (typeof v.shadow !== "boolean")
        return false;
      if (typeof v.topLevel !== "boolean")
        return false;
      if (!(typeof v.inputs === "object" && v.inputs !== null) || !Object.values(v.inputs).every((elem) => isInput(container, elem)) && Object.keys(v.inputs).length !== 0)
        return false;
      if (!(typeof v.fields === "object" && v.fields !== null) || !Object.values(v.fields).every((v2) => isField(v2)) && Object.keys(v.fields).length !== 0)
        return false;
      if (v.mutation !== void 0 && !(typeof v.mutation === "object" && v.mutation !== null))
        return false;
      return true;
    }
    Validator2.isBlock = isBlock;
    function isInfo(value) {
      if (!(typeof value === "object" && value !== null))
        return false;
      const v = value;
      if (!(v.signature instanceof Array) || !v.signature.every((v2) => typeof v2 === "string") && v.signature.length !== 0)
        return false;
      if (!(typeof v.script === "object" && v.script !== null) || !Object.entries(v.script).every(
        (elem) => isBlock(v.script, elem[0], elem[1])
      ) && Object.keys(v.script).length !== 0)
        return false;
      if (typeof v.block !== "string" || !(v.block in v.script))
        return false;
      return true;
    }
    Validator2.isInfo = isInfo;
  })(Validator || (Validator = {}));

  // src/impl/traceback/inspector.ts
  function Inspector(Blockly, vm, formatMessage, value) {
    function ExtendIcon(title, hideTitle, onShow, onHide) {
      let state = false;
      const icon = document.createElement("span");
      icon.classList.add("lpp-traceback-icon");
      icon.textContent = "\u2795";
      icon.title = `\u2795 ${title}`;
      icon.addEventListener("click", () => {
        if (state) {
          icon.textContent = "\u2795";
          icon.title = `\u2795 ${title}`;
          onHide();
        } else {
          icon.textContent = "\u2796";
          icon.title = `\u2796 ${hideTitle}`;
          onShow();
        }
        state = !state;
      });
      return icon;
    }
    function objView(value2) {
      function keyValue(index, value3, isArray) {
        const subelem = document.createElement("li");
        subelem.append(
          isArray ? dialog_exports.Text(
            index,
            "lpp-code lpp-inspector-number lpp-inspector-key"
          ) : /^[$_a-zA-Z][$_0-9a-zA-Z]*$/.test(index) ? dialog_exports.Text(
            index,
            `lpp-code lpp-inspector-key${["constructor", "prototype"].includes(String(index)) ? `-${index}` : ""}`
          ) : dialog_exports.Text(
            JSON.stringify(index),
            "lpp-code lpp-inspector-string lpp-inspector-key"
          ),
          dialog_exports.Text(` \u27A1\uFE0F `)
        );
        subelem.append(Inspector(Blockly, vm, formatMessage, value3));
        return subelem;
      }
      const metadata = value2 instanceof LppFunction && hasMetadata(value2);
      const div = document.createElement("ul");
      div.classList.add("lpp-list");
      for (const [index, v] of value2.value.entries()) {
        if ((!(value2 instanceof LppFunction) || index !== "prototype") && index !== "constructor")
          div.append(
            keyValue(
              String(index),
              v ?? new LppConstant(null),
              value2 instanceof LppArray
            )
          );
      }
      if (value2 instanceof LppFunction)
        div.append(
          keyValue(
            "prototype",
            value2.value.get("prototype") ?? new LppConstant(null),
            false
          )
        );
      if (value2 instanceof LppArray || value2 instanceof LppFunction || value2 instanceof LppObject) {
        div.append(
          keyValue(
            "constructor",
            value2 instanceof LppArray ? Global.Array : value2.value.get("constructor") ?? (value2 instanceof LppFunction ? Global.Function : Global.Object),
            false
          )
        );
      }
      if (metadata && value2.metadata instanceof ScratchMetadata) {
        const subelem = document.createElement("li");
        subelem.append(
          dialog_exports.Text(
            "[[FunctionLocation]]",
            "lpp-code lpp-inspector-key-constructor"
          ),
          dialog_exports.Text(` \u27A1\uFE0E `)
        );
        const traceback = document.createElement("span");
        traceback.classList.add("lpp-code");
        if (Blockly && value2.metadata.sprite && vm.runtime.getTargetById(value2.metadata.sprite)) {
          const workspace = Blockly.getMainWorkspace();
          traceback.classList.add("lpp-traceback-stack-enabled");
          const { sprite, blocks } = value2.metadata;
          traceback.textContent = blocks[1];
          traceback.title = formatMessage(
            "lpp.tooltip.button.scrollToBlockEnabled"
          );
          traceback.addEventListener("click", () => {
            const box = Blockly.DropDownDiv.getContentDiv().getElementsByClassName(
              "valueReportBox"
            )[0];
            vm.setEditingTarget(sprite);
            workspace.centerOnBlock(blocks[1], true);
            if (box) {
              Blockly.DropDownDiv.hideWithoutAnimation();
              Blockly.DropDownDiv.clearContent();
              Blockly.DropDownDiv.getContentDiv().append(box);
              Blockly.DropDownDiv.showPositionedByBlock(
                workspace,
                workspace.getBlockById(blocks[1])
              );
            }
          });
        } else {
          traceback.classList.add("lpp-inspector-null");
          traceback.textContent = "null";
        }
        subelem.append(traceback);
        div.append(subelem);
      }
      return div;
    }
    if (value instanceof LppConstant) {
      if (value.value === null)
        return dialog_exports.Text("null", "lpp-code lpp-inspector-null");
      switch (typeof value.value) {
        case "boolean":
        case "number":
          return dialog_exports.Text(String(value.value), "lpp-code lpp-inspector-number");
        case "string":
          return dialog_exports.Text(
            JSON.stringify(value.value),
            "lpp-code lpp-inspector-string"
          );
      }
    } else if (value instanceof LppArray || value instanceof LppObject || value instanceof LppFunction) {
      let v;
      const btn = ExtendIcon(
        formatMessage("lpp.tooltip.button.help.more"),
        formatMessage("lpp.tooltip.button.help.less"),
        () => {
          if (!v)
            span.appendChild(v = objView(value));
          else
            v.style.display = "block";
        },
        () => {
          if (v)
            v.style.display = "none";
        }
      );
      const span = document.createElement("span");
      span.style.lineHeight = "80%";
      let code;
      if (value instanceof LppArray) {
        code = dialog_exports.Text(value.value.length === 0 ? "[]" : "[...]", "lpp-code");
      } else if (value instanceof LppFunction) {
        code = dialog_exports.Text(
          `f (${hasMetadata(value) && value.metadata instanceof TypeMetadata ? value.metadata.signature.join(", ") : ""})`,
          "lpp-code"
        );
        code.style.fontStyle = "italic";
      } else {
        code = dialog_exports.Text(value.value.size === 0 ? "{}" : "{...}", "lpp-code");
      }
      if (Blockly && value instanceof LppFunction && hasMetadata(value) && value.metadata instanceof ScratchMetadata && value.metadata.sprite && vm.runtime.getTargetById(value.metadata.sprite)) {
        const workspace = Blockly.getMainWorkspace();
        const { sprite, blocks } = value.metadata;
        code.title = formatMessage("lpp.tooltip.button.scrollToBlockEnabled");
        code.classList.add("lpp-traceback-stack-enabled");
        code.addEventListener("click", () => {
          const box = Blockly.DropDownDiv.getContentDiv().getElementsByClassName(
            "valueReportBox"
          )[0];
          vm.setEditingTarget(sprite);
          workspace.centerOnBlock(blocks[1], true);
          if (box) {
            Blockly.DropDownDiv.hideWithoutAnimation();
            Blockly.DropDownDiv.clearContent();
            Blockly.DropDownDiv.getContentDiv().append(box);
            Blockly.DropDownDiv.showPositionedByBlock(
              workspace,
              workspace.getBlockById(blocks[1])
            );
          }
        });
      } else {
        code.addEventListener("click", () => {
          btn.click();
        });
      }
      span.append(btn, dialog_exports.Text(" "), code);
      return span;
    }
    throw new Error("lpp: unknown value");
  }
  if (dialog_exports.globalStyle) {
    dialog_exports.globalStyle.textContent += `
.lpp-inspector-null {
  color: gray;
  user-select: text;
}
.lpp-inspector-key {
  font-weight: bold;
  user-select: text;
}
.lpp-inspector-key-prototype {
  font-weight: bold;
  color: gray;
  user-select: text;
}
.lpp-inspector-key-constructor {
  color: gray;
  user-select: text;
}
.lpp-inspector-number {
  color: blue;
  user-select: text;
}
.lpp-inspector-string {
  color: green;
  user-select: text;
}
`;
  }

  // src/impl/traceback/index.ts
  var lastNotification;
  function notificationAlert({
    title,
    body,
    tag,
    silent
  }) {
    Notification.requestPermission().then((value) => {
      if (value === "granted") {
        if (lastNotification) {
          lastNotification.close();
          lastNotification = void 0;
          setTimeout(() => notificationAlert({ title, body, tag, silent }));
        } else {
          lastNotification = new Notification(title, {
            body,
            tag,
            silent
          });
          lastNotification.addEventListener("close", () => {
            lastNotification = void 0;
          });
        }
      }
    });
  }
  function showTraceback(svgRoot) {
    let container = document.getElementById("tmpSVGContainer");
    const temp = svgRoot.outerHTML.replace(/&nbsp;/g, " ");
    if (!container) {
      container = document.createElement("div");
      container.id = "tmpSVGContainer";
      container.innerHTML = '<svg id="tmpSVG" xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg"><style type="text/css" ><![CDATA[.blocklyDraggable{font-family: "Helvetica Neue", Helvetica, sans-serif;font-size: 12pt;font-weight: 500;}.blocklyText {fill: #fff;box-sizing: border-box;}.blocklyEditableText .blocklyText{fill: #000;}.blocklyDropdownText.blocklyText{fill: #fff;}]]></style><g id="tmpSVGContent"></g></svg>';
      document.body.appendChild(container);
    }
    const content = document.getElementById("tmpSVGContent");
    if (content && content instanceof SVGGElement) {
      content.innerHTML = temp;
      content.children[0].setAttribute("transform", "");
      const shape = content.children[0].getAttribute("data-shapes") ?? "", shape_hat = shape.includes("hat"), ishat = "hat" !== shape && shape_hat, bbox = content.getBBox();
      let length = shape_hat ? 18 : 0;
      length = ishat ? 21 : length;
      const width = Math.max(750, bbox.width + 1), height = bbox.height + length, svg = document.getElementById("tmpSVG");
      if (svg) {
        svg.setAttribute("width", width.toString());
        svg.setAttribute("height", height.toString());
        svg.setAttribute(
          "viewBox",
          `-1 ${shape_hat ? -length : 0} ${width} ${height}`
        );
        let html = svg.outerHTML;
        html = (html = (html = (html = (html = html.replace(
          /"[\S]+?dropdown-arrow\.svg"/gm,
          '"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="'
        )).replace(
          /"[\S]+?green-flag\.svg"/gm,
          '"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImdyZWVuZmxhZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0NTk5M0Q7fQoJLnN0MXtmaWxsOiM0Q0JGNTY7fQo8L3N0eWxlPgo8dGl0bGU+Z3JlZW5mbGFnPC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLjgsMy43Yy0wLjQtMC4yLTAuOS0wLjEtMS4yLDAuMmMtMiwxLjYtNC44LDEuNi02LjgsMGMtMi4zLTEuOS01LjYtMi4zLTguMy0xVjIuNWMwLTAuNi0wLjUtMS0xLTEKCXMtMSwwLjQtMSwxdjE4LjhjMCwwLjUsMC41LDEsMSwxaDAuMWMwLjUsMCwxLTAuNSwxLTF2LTYuNGMxLTAuNywyLjEtMS4yLDMuNC0xLjNjMS4yLDAsMi40LDAuNCwzLjQsMS4yYzIuOSwyLjMsNywyLjMsOS44LDAKCWMwLjMtMC4yLDAuNC0wLjUsMC40LTAuOVY0LjdDMjEuNiw0LjIsMjEuMywzLjgsMjAuOCwzLjd6IE0yMC41LDEzLjlDMjAuNSwxMy45LDIwLjUsMTMuOSwyMC41LDEzLjlDMTgsMTYsMTQuNCwxNiwxMS45LDE0CgljLTEuMS0wLjktMi41LTEuNC00LTEuNGMtMS4yLDAuMS0yLjMsMC41LTMuNCwxLjFWNEM3LDIuNiwxMCwyLjksMTIuMiw0LjZjMi40LDEuOSw1LjcsMS45LDguMSwwYzAuMSwwLDAuMSwwLDAuMiwwCgljMCwwLDAuMSwwLjEsMC4xLDAuMUwyMC41LDEzLjl6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMC42LDQuOGwtMC4xLDkuMWMwLDAsMCwwLjEsMCwwLjFjLTIuNSwyLTYuMSwyLTguNiwwYy0xLjEtMC45LTIuNS0xLjQtNC0xLjRjLTEuMiwwLjEtMi4zLDAuNS0zLjQsMS4xVjQKCUM3LDIuNiwxMCwyLjksMTIuMiw0LjZjMi40LDEuOSw1LjcsMS45LDguMSwwYzAuMSwwLDAuMSwwLDAuMiwwQzIwLjUsNC43LDIwLjYsNC43LDIwLjYsNC44eiIvPgo8L3N2Zz4K"'
        )).replace(
          /"[\S]+?repeat\.svg"/gm,
          '"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InJlcGVhdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNDRjhCMTc7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8dGl0bGU+cmVwZWF0PC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjMsMTFjLTAuMywwLjYtMC45LDEtMS41LDFoLTEuNmMtMC4xLDEuMy0wLjUsMi41LTEuMSwzLjZjLTAuOSwxLjctMi4zLDMuMi00LjEsNC4xCgljLTEuNywwLjktMy42LDEuMi01LjUsMC45Yy0xLjgtMC4zLTMuNS0xLjEtNC45LTIuM2MtMC43LTAuNy0wLjctMS45LDAtMi42YzAuNi0wLjYsMS42LTAuNywyLjMtMC4ySDdjMC45LDAuNiwxLjksMC45LDIuOSwwLjkKCXMxLjktMC4zLDIuNy0wLjljMS4xLTAuOCwxLjgtMi4xLDEuOC0zLjVoLTEuNWMtMC45LDAtMS43LTAuNy0xLjctMS43YzAtMC40LDAuMi0wLjksMC41LTEuMmw0LjQtNC40YzAuNy0wLjYsMS43LTAuNiwyLjQsMEwyMyw5LjIKCUMyMy41LDkuNywyMy42LDEwLjQsMjMuMywxMXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTIxLjgsMTFoLTIuNmMwLDEuNS0wLjMsMi45LTEsNC4yYy0wLjgsMS42LTIuMSwyLjgtMy43LDMuNmMtMS41LDAuOC0zLjMsMS4xLTQuOSwwLjhjLTEuNi0wLjItMy4yLTEtNC40LTIuMQoJYy0wLjQtMC4zLTAuNC0wLjktMC4xLTEuMmMwLjMtMC40LDAuOS0wLjQsMS4yLTAuMWwwLDBjMSwwLjcsMi4yLDEuMSwzLjQsMS4xczIuMy0wLjMsMy4zLTFjMC45LTAuNiwxLjYtMS41LDItMi42CgljMC4zLTAuOSwwLjQtMS44LDAuMi0yLjhoLTIuNGMtMC40LDAtMC43LTAuMy0wLjctMC43YzAtMC4yLDAuMS0wLjMsMC4yLTAuNGw0LjQtNC40YzAuMy0wLjMsMC43LTAuMywwLjksMEwyMiw5LjgKCWMwLjMsMC4zLDAuNCwwLjYsMC4zLDAuOVMyMiwxMSwyMS44LDExeiIvPgo8L3N2Zz4K"'
        )).replace(
          /"[\S]+?rotate-left\.svg"/gm,
          '"data:image/svg+xml;base64,PHN2ZyBpZD0icm90YXRlLWNsb2Nrd2lzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojM2Q3OWNjO30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+cm90YXRlLWNsb2Nrd2lzZTwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjAuMzQsMTguMjFhMTAuMjQsMTAuMjQsMCwwLDEtOC4xLDQuMjIsMi4yNiwyLjI2LDAsMCwxLS4xNi00LjUyaDBhNS41OCw1LjU4LDAsMCwwLDQuMjUtMi41Myw1LjA2LDUuMDYsMCwwLDAsLjU0LTQuNjJBNC4yNSw0LjI1LDAsMCwwLDE1LjU1LDlhNC4zMSw0LjMxLDAsMCwwLTItLjhBNC44Miw0LjgyLDAsMCwwLDEwLjQsOWwxLjEyLDEuNDFBMS41OSwxLjU5LDAsMCwxLDEwLjM2LDEzSDIuNjdhMS41NiwxLjU2LDAsMCwxLTEuMjYtLjYzQTEuNTQsMS41NCwwLDAsMSwxLjEzLDExTDIuODUsMy41N0ExLjU5LDEuNTksMCwwLDEsNC4zOCwyLjQsMS41NywxLjU3LDAsMCwxLDUuNjIsM0w2LjcsNC4zNWExMC42NiwxMC42NiwwLDAsMSw3LjcyLTEuNjhBOS44OCw5Ljg4LDAsMCwxLDE5LDQuODEsOS42MSw5LjYxLDAsMCwxLDIxLjgzLDksMTAuMDgsMTAuMDgsMCwwLDEsMjAuMzQsMTguMjFaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTkuNTYsMTcuNjVhOS4yOSw5LjI5LDAsMCwxLTcuMzUsMy44MywxLjMxLDEuMzEsMCwwLDEtLjA4LTIuNjIsNi41Myw2LjUzLDAsMCwwLDUtMi45Miw2LjA1LDYuMDUsMCwwLDAsLjY3LTUuNTEsNS4zMiw1LjMyLDAsMCwwLTEuNjQtMi4xNiw1LjIxLDUuMjEsMCwwLDAtMi40OC0xQTUuODYsNS44NiwwLDAsMCw5LDguODRMMTAuNzQsMTFhLjU5LjU5LDAsMCwxLS40MywxSDIuN2EuNi42LDAsMCwxLS42LS43NUwzLjgxLDMuODNhLjU5LjU5LDAsMCwxLDEtLjIxbDEuNjcsMi4xYTkuNzEsOS43MSwwLDAsMSw3Ljc1LTIuMDcsOC44NCw4Ljg0LDAsMCwxLDQuMTIsMS45Miw4LjY4LDguNjgsMCwwLDEsMi41NCwzLjcyQTkuMTQsOS4xNCwwLDAsMSwxOS41NiwxNy42NVoiLz48L3N2Zz4="'
        )).replace(
          /"[\S]+?rotate-right\.svg"/gm,
          '"data:image/svg+xml;base64,PHN2ZyBpZD0icm90YXRlLWNvdW50ZXItY2xvY2t3aXNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMzZDc5Y2M7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5yb3RhdGUtY291bnRlci1jbG9ja3dpc2U8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIyLjY4LDEyLjJhMS42LDEuNiwwLDAsMS0xLjI3LjYzSDEzLjcyYTEuNTksMS41OSwwLDAsMS0xLjE2LTIuNThsMS4xMi0xLjQxYTQuODIsNC44MiwwLDAsMC0zLjE0LS43Nyw0LjMxLDQuMzEsMCwwLDAtMiwuOCw0LjI1LDQuMjUsMCwwLDAtMS4zNCwxLjczLDUuMDYsNS4wNiwwLDAsMCwuNTQsNC42MkE1LjU4LDUuNTgsMCwwLDAsMTIsMTcuNzRoMGEyLjI2LDIuMjYsMCwwLDEtLjE2LDQuNTJBMTAuMjUsMTAuMjUsMCwwLDEsMy43NCwxOCwxMC4xNCwxMC4xNCwwLDAsMSwyLjI1LDguNzgsOS43LDkuNywwLDAsMSw1LjA4LDQuNjQsOS45Miw5LjkyLDAsMCwxLDkuNjYsMi41YTEwLjY2LDEwLjY2LDAsMCwxLDcuNzIsMS42OGwxLjA4LTEuMzVhMS41NywxLjU3LDAsMCwxLDEuMjQtLjYsMS42LDEuNiwwLDAsMSwxLjU0LDEuMjFsMS43LDcuMzdBMS41NywxLjU3LDAsMCwxLDIyLjY4LDEyLjJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjEuMzgsMTEuODNIMTMuNzdhLjU5LjU5LDAsMCwxLS40My0xbDEuNzUtMi4xOWE1LjksNS45LDAsMCwwLTQuNy0xLjU4LDUuMDcsNS4wNywwLDAsMC00LjExLDMuMTdBNiw2LDAsMCwwLDcsMTUuNzdhNi41MSw2LjUxLDAsMCwwLDUsMi45MiwxLjMxLDEuMzEsMCwwLDEtLjA4LDIuNjIsOS4zLDkuMywwLDAsMS03LjM1LTMuODJBOS4xNiw5LjE2LDAsMCwxLDMuMTcsOS4xMiw4LjUxLDguNTEsMCwwLDEsNS43MSw1LjQsOC43Niw4Ljc2LDAsMCwxLDkuODIsMy40OGE5LjcxLDkuNzEsMCwwLDEsNy43NSwyLjA3bDEuNjctMi4xYS41OS41OSwwLDAsMSwxLC4yMUwyMiwxMS4wOEEuNTkuNTksMCwwLDEsMjEuMzgsMTEuODNaIi8+PC9zdmc+"'
        );
        const svgUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
          html
        )}`;
        document.body.removeChild(container);
        console.log(
          "%c ",
          `font-size: 1px; padding-right: ${width}px; padding-bottom: ${height}px; background-image: url('${svgUrl}'); background-repeat: no-repeat; background-size: contain; color: transparent;`
        );
      }
    }
  }
  function warnError(Blockly, vm, formatMessage, error, id, target) {
    if (Blockly) {
      if (vm.runtime.getEditingTarget()?.id !== target && vm.runtime.getTargetById(target)) {
        vm.setEditingTarget(target);
      }
      const workspace = Blockly.getMainWorkspace();
      workspace.centerOnBlock(id, true);
      let original = "";
      const div = show(
        Blockly,
        id,
        [
          IconGroup([
            HelpIcon(
              formatMessage("lpp.tooltip.button.help.more"),
              formatMessage("lpp.tooltip.button.help.less"),
              () => {
                if (div) {
                  const v = div.getElementsByClassName("lpp-hint")[0];
                  if (v) {
                    original = v.textContent ?? "";
                    v.textContent = `\u{1F4A1} ${formatMessage(`lpp.error.${error}.detail`)}`;
                  }
                }
              },
              () => {
                if (div) {
                  const v = div.getElementsByClassName("lpp-hint")[0];
                  if (v) {
                    v.textContent = original;
                  }
                }
              }
            ),
            CloseIcon(Blockly, formatMessage("lpp.tooltip.button.close"))
          ]),
          Title(`\u2139\uFE0F ${formatMessage(`lpp.error.${error}.summary`)}`),
          document.createElement("br"),
          Text(`\u{1F50D} ${formatMessage("lpp.error.hint")}`, "lpp-hint")
        ],
        "left"
      );
      if (!div) {
        notificationAlert({
          title: `\u274C ${formatMessage(`lpp.error.${error}.summary`)}`,
          body: `\u{1F4CC} ${formatMessage(
            "lpp.error.position"
          )} ${id}
\u{1F50D} ${formatMessage("lpp.error.hint")}`,
          tag: "lppError",
          silent: false
        });
      }
    } else {
      notificationAlert({
        title: `\u274C ${formatMessage("lpp.error.releaseMode.summary")}`,
        body: `\u2139\uFE0F ${formatMessage(
          "lpp.error.releaseMode.detail"
        )}
\u{1F50D} ${formatMessage("lpp.error.hint")}`,
        tag: "lppError",
        silent: true
      });
    }
    console.groupCollapsed(`\u274C ${formatMessage(`lpp.error.${error}.summary`)}`);
    if (Blockly) {
      console.log(`\u{1F4A1} ${formatMessage(`lpp.error.${error}.detail`)}`);
      const block = Blockly.getMainWorkspace()?.getBlockById(id);
      const svgRoot = block?.getSvgRoot();
      console.groupCollapsed(`\u{1F4CC} ${formatMessage("lpp.error.position")} ${id}`);
      if (svgRoot) {
        showTraceback(svgRoot);
        console.log(svgRoot);
      } else {
        console.log(`\u2753 ${formatMessage("lpp.error.blockNotFound")}`);
      }
      console.groupEnd();
    } else {
      console.log(`\u2139\uFE0F ${formatMessage("lpp.error.releaseMode.detail")}`);
      console.log(`\u{1F4CC} ${formatMessage("lpp.error.position")} ${id}`);
    }
    console.groupEnd();
  }
  function warnException(Blockly, vm, formatMessage, exception) {
    if (Blockly) {
      const getTraceback = () => {
        const text = [];
        text.push(
          `\u{1F4A1} ${formatMessage(`lpp.error.uncaughtException.detail`)}`,
          document.createElement("br"),
          document.createElement("br")
        );
        text.push(
          `\u{1F914} ${formatMessage("lpp.error.uncaughtException.exception")}`,
          document.createElement("br"),
          Inspector(Blockly, vm, formatMessage, exception.value),
          // TODO: Better design
          document.createElement("br")
        );
        text.push(`\u{1F47E} ${formatMessage("lpp.error.uncaughtException.traceback")}`);
        const list = document.createElement("ul");
        list.classList.add("lpp-list");
        for (const [index, value] of exception.stack.entries()) {
          const li = document.createElement("li");
          const traceback = document.createElement("span");
          traceback.classList.add("lpp-code");
          if (Blockly && value instanceof LppTraceback2.Block) {
            if (vm.runtime.getTargetById(value.target)) {
              const workspace = Blockly.getMainWorkspace();
              traceback.classList.add("lpp-traceback-stack-enabled");
              traceback.title = formatMessage(
                "lpp.tooltip.button.scrollToBlockEnabled"
              );
              traceback.addEventListener("click", () => {
                const box = Blockly.DropDownDiv.getContentDiv().getElementsByClassName(
                  "valueReportBox"
                )[0];
                vm.setEditingTarget(value.target);
                workspace.centerOnBlock(value.block, true);
                Blockly.DropDownDiv.hideWithoutAnimation();
                Blockly.DropDownDiv.clearContent();
                Blockly.DropDownDiv.getContentDiv().append(box);
                Blockly.DropDownDiv.showPositionedByBlock(
                  workspace,
                  workspace.getBlockById(value.block)
                );
              });
            } else {
              traceback.classList.add("lpp-traceback-stack-disabled");
              traceback.title = formatMessage(
                "lpp.tooltip.button.scrollToBlockDisabled"
              );
            }
          } else if (value instanceof LppTraceback2.NativeFn) {
            traceback.title = formatMessage("lpp.tooltip.button.nativeFn");
          }
          traceback.textContent = value.toString();
          li.append(`\u{1F4CC} ${index} \u27A1\uFE0F `, traceback);
          list.append(li);
        }
        text.push(list);
        return text;
      };
      let flag = false;
      for (const stack of exception.stack.toReversed()) {
        if (stack instanceof LppTraceback2.Block && vm.runtime.getTargetById(stack.target)) {
          vm.setEditingTarget(stack.target);
          const workspace = Blockly.getMainWorkspace();
          workspace.centerOnBlock(stack.block, true);
          let original = "";
          const div = show(
            Blockly,
            stack.block,
            [
              IconGroup([
                HelpIcon(
                  formatMessage("lpp.tooltip.button.help.more"),
                  formatMessage("lpp.tooltip.button.help.less"),
                  () => {
                    if (div) {
                      const v = div.getElementsByClassName("lpp-hint")[0];
                      if (v) {
                        original = v.textContent ?? "";
                        while (v.firstChild)
                          v.removeChild(v.firstChild);
                        v.append(...getTraceback());
                      }
                    }
                  },
                  () => {
                    if (div) {
                      const v = div.getElementsByClassName("lpp-hint")[0];
                      if (v) {
                        v.textContent = original;
                      }
                    }
                  }
                ),
                CloseIcon(
                  Blockly,
                  formatMessage("lpp.tooltip.button.close")
                )
              ]),
              Title(
                `\u2139\uFE0F ${formatMessage(`lpp.error.uncaughtException.summary`)}`
              ),
              document.createElement("br"),
              Text(`\u{1F50D} ${formatMessage("lpp.error.hint")}`, "lpp-hint")
            ],
            "left"
          );
          flag = !!div;
          break;
        }
      }
      if (!flag)
        notificationAlert({
          title: `\u274C ${formatMessage("lpp.error.uncaughtException.summary")}`,
          body: `\u{1F4A1} ${formatMessage(
            "lpp.error.uncaughtException.detail"
          )}
\u{1F50D} ${formatMessage("lpp.error.hint")}`,
          tag: "lppError",
          silent: false
        });
    } else {
      notificationAlert({
        title: `\u274C ${formatMessage("lpp.error.releaseMode.summary")}`,
        body: `\u2139\uFE0F ${formatMessage(
          "lpp.error.releaseMode.detail"
        )}
\u{1F50D} ${formatMessage("lpp.error.hint")}`,
        tag: "lppError",
        silent: true
      });
    }
    console.groupCollapsed(
      `\u274C ${formatMessage("lpp.error.uncaughtException.summary")}`
    );
    if (Blockly)
      console.log(`\u{1F4A1} ${formatMessage("lpp.error.uncaughtException.detail")}`);
    else
      console.log(`\u2139\uFE0F ${formatMessage("lpp.error.releaseMode.detail")}`);
    console.log(
      `\u{1F914} ${formatMessage("lpp.error.uncaughtException.exception")}`,
      exception.value
    );
    console.groupCollapsed(
      `\u{1F47E} ${formatMessage("lpp.error.uncaughtException.traceback")}`
    );
    for (const [idx, value] of exception.stack.entries()) {
      if (Blockly) {
        if (value instanceof LppTraceback2.Block) {
          const block = Blockly.getMainWorkspace()?.getBlockById(
            value.block
          );
          const svgRoot = block?.getSvgRoot();
          console.groupCollapsed(`\u{1F4CC} ${idx + 1} \u27A1\uFE0F`, value.block);
          if (svgRoot) {
            showTraceback(svgRoot);
            console.log(svgRoot);
          } else {
            console.log(`\u2753 ${formatMessage("lpp.error.blockNotFound")}`);
          }
          if (value.context)
            console.log(`\u{1F6E0}\uFE0F ${formatMessage("lpp.error.context")}`, value.context);
          console.groupEnd();
        } else if (value instanceof LppTraceback2.NativeFn) {
          console.groupCollapsed(`\u{1F4CC} ${idx + 1} \u27A1\uFE0F`, value.fn);
          console.log(`\u{1F6E0}\uFE0F ${formatMessage("lpp.error.self")}`, value.self);
          console.log(`\u{1F6E0}\uFE0F ${formatMessage("lpp.error.arguments")}`, value.args);
          console.groupEnd();
        } else {
          console.log(`\u{1F4CC} ${idx + 1} \u27A1\uFE0F`, value.toString());
        }
      } else {
        console.log(`\u{1F4CC} ${idx + 1} \u27A1\uFE0F`, value.toString());
      }
    }
    console.groupEnd();
    console.groupEnd();
  }
  if (globalStyle) {
    globalStyle.textContent += `
.lpp-list {
  list-style-type: disc;
  padding: 0;
  margin-left: 19.5px;
  margin-top: 4px;
  margin-bottom: 0;
}
.lpp-list li {
  line-height: 100%;
  margin-top: 0;
  margin-bottom: 4px;
}
.lpp-code {
  font-family: "Source Code Pro", "Fira Code", "DejaVu Sans Mono", "Cascadia Code", "Jetbrains Mono", "Lucida Console", Consolas, monospace;
}
.lpp-traceback-stack-enabled {
  transition: color 0.25s ease-out;
}
.lpp-traceback-stack-disabled {
  transition: color 0.25s ease-out;
}
.lpp-traceback-stack-enabled:hover {
  cursor: pointer;
  color: gray;
  user-select: text;
}
.lpp-traceback-stack-disabled:hover {
  cursor: not-allowed;
  color: red;
  user-select: text;
}
`;
  }

  // src/impl/blockly/extension.ts
  var Button = class {
    /**
     * Construct a button.
     * @param id Button ID.
     * @param lazyText A function that returns button text.
     */
    constructor(id, lazyText) {
      this.id = id;
      this.lazyText = lazyText;
    }
    inject() {
    }
    export() {
      return [
        {
          func: this.id,
          blockType: "button",
          text: this.lazyText(),
          onClick: () => {
          }
        }
      ];
    }
  };
  var Category = class {
    /**
     * Construct a category.
     * @param lazyLabel A function that returns category label.
     */
    constructor(lazyLabel) {
      this.lazyLabel = lazyLabel;
      this.block = /* @__PURE__ */ new Map();
    }
    block;
    /**
     * Inject blocks to Blockly. Can be called multiple times for mixin.
     * @param Blockly Blockly instance.
     * @param extension Parent extension.
     */
    inject(Blockly, extension) {
      const prepatch = (block) => {
        block.setCategory(extension.id);
        block.setInputsInline(true);
        block.setColour(extension.color);
      };
      for (const [key, value] of this.block.entries()) {
        const map = value.init(Blockly, null);
        const res = {};
        if (typeof map === "function") {
          res.init = function(...args) {
            prepatch(this);
            const fn = value.init(Blockly, this);
            return fn(...args);
          };
        } else {
          for (const key2 of Object.keys(map)) {
            res[key2] = function(...args) {
              if (key2 === "init") {
                prepatch(this);
              }
              const map2 = value.init(Blockly, this);
              return map2[key2].apply(window, args);
            };
          }
        }
        Reflect.defineProperty(Blockly.Blocks, `${extension.id}_${key}`, {
          get() {
            return res;
          },
          set() {
          },
          configurable: true
        });
      }
    }
    /**
     * Register a block under a category.
     * @param name Block name (ID).
     * @param block Block descriptor.
     * @returns This for chaining.
     */
    register(name, block) {
      this.block.set(name, block);
      return this;
    }
    /**
     * Export blocks as Scratch metadata.
     * @returns Scratch metadata.
     */
    export() {
      return [
        {
          blockType: "label",
          text: this.lazyLabel()
        }
      ].concat(
        Array.from(this.block.entries()).map(([opcode, value]) => ({
          blockType: value.type,
          opcode,
          text: "",
          arguments: {}
        }))
      );
    }
  };
  var Extension = class {
    /**
     * Construct an extension.
     * @param id Extension id.
     * @param color Block color (experimental).
     */
    constructor(id, color) {
      this.id = id;
      this.color = color;
    }
    blocks = [];
    /**
     * Register an button, category, etc.
     * @param block Object to register.
     * @returns This for chaining.
     */
    register(block) {
      this.blocks.push(block);
      return this;
    }
    /**
     * Inject blocks to Blockly. Can be called multiple times for mixin.
     * @param Blockly
     */
    inject(Blockly) {
      for (const v of this.blocks) {
        v.inject(Blockly, this);
      }
    }
    /**
     * Export blocks as Scratch metadata.
     * @returns Scratch metadata.
     */
    export() {
      return this.blocks.map((v) => v.export()).flat(1);
    }
  };

  // src/impl/blockly/middleware.ts
  function _ReporterBase(fn, type) {
    const prepatch = (Blockly, block) => {
      block.setOutput(true, "String");
      block.setOutputShape(
        type === "square" ? Blockly.OUTPUT_SHAPE_SQUARE : Blockly.OUTPUT_SHAPE_ROUND
      );
    };
    return {
      init(Blockly, block) {
        const map = fn(Blockly, block);
        if (typeof map === "function") {
          return (...args) => {
            prepatch(Blockly, block);
            return map(...args);
          };
        } else if (map.init) {
          const _init = map.init;
          map.init = (...args) => {
            prepatch(Blockly, block);
            return _init(...args);
          };
        }
        return map;
      },
      type: "reporter"
    };
  }
  function Command(fn, isTerminal = false) {
    const prepatch = (Blockly, block) => {
      block.setNextStatement(!isTerminal);
      block.setPreviousStatement(true);
      block.setOutputShape(Blockly.OUTPUT_SHAPE_SQUARE);
    };
    return {
      init(Blockly, block) {
        const map = fn(Blockly, block);
        if (typeof map === "function") {
          return (...args) => {
            prepatch(Blockly, block);
            return map(...args);
          };
        } else if (map.init) {
          const _init = map.init;
          map.init = (...args) => {
            prepatch(Blockly, block);
            return _init(...args);
          };
        }
        return map;
      },
      type: "command"
    };
  }
  var Reporter;
  ((Reporter2) => {
    function Square(fn) {
      return _ReporterBase(fn, "square");
    }
    Reporter2.Square = Square;
    function Round(fn) {
      return _ReporterBase(fn, "round");
    }
    Reporter2.Round = Round;
  })(Reporter || (Reporter = {}));

  // src/impl/blockly/input.ts
  var input_exports = {};
  __export(input_exports, {
    Any: () => Any,
    Statement: () => Statement,
    String: () => String2,
    Text: () => Text2
  });
  function addShadow(field, value) {
    const elem = document.createElement("shadow");
    const child = document.createElement("field");
    elem.setAttribute("type", "text");
    child.setAttribute("name", "TEXT");
    child.textContent = value;
    elem.appendChild(child);
    field.connection.setShadowDom(elem);
    field.connection.respawnShadow_();
    return field;
  }
  function addNullShadow(field) {
    field.connection.setShadowDom(null);
    field.connection.respawnShadow_();
    return field;
  }
  function String2(block, name, value) {
    const field = block.appendValueInput(name);
    const workspace = block.workspace;
    if (block.isInsertionMarker() || workspace.currentGesture_?.isDraggingBlock_ && workspace.currentGesture_?.targetBlock_?.type === block.type)
      return field;
    return addShadow(field, value);
  }
  function Any(block, name) {
    const field = block.appendValueInput(name);
    const workspace = block.workspace;
    if (block.isInsertionMarker() || workspace.currentGesture_?.isDraggingBlock_ && workspace.currentGesture_?.targetBlock_?.type === block.type)
      return field;
    return addNullShadow(field);
  }
  function Text2(block, name, value) {
    if (typeof value === "string")
      return Text2(block, name, [value]);
    const input = block.appendDummyInput(name);
    value.forEach((value2) => input.appendField(value2));
    return input;
  }
  function Statement(block, name) {
    return block.appendStatementInput(name);
  }

  // src/impl/block.ts
  function isMutableBlock(block) {
    const v = block;
    return typeof v.length === "number";
  }
  var initalizeField = /* @__PURE__ */ (() => {
    let cache;
    return function initalizeField2(Blockly) {
      const scratchBlocks = Blockly;
      const v = Blockly.FieldImage;
      return cache ?? (cache = class FieldImageButton extends v {
        /**
         * Construct a FieldImageButton field.
         * @param src Image source URL.
         * @param width Image width.
         * @param height Image height.
         * @param callback Click callback.
         * @param opt_alt Alternative text of the image.
         * @param flip_rtl Whether to filp the image horizontally when in RTL mode.
         * @param padding Whether the field has padding.
         */
        constructor(src, width, height, callback, opt_alt, flip_rtl, padding) {
          super(src, width, height, opt_alt, flip_rtl);
          this.callback = callback;
          this.padding = padding;
        }
        /**
         * Initalize the field.
         */
        init() {
          if (this.fieldGroup_) {
            return;
          }
          super.init();
          this.mouseDownWrapper_ = scratchBlocks.bindEventWithChecks_(
            this.getSvgRoot(),
            "mousedown",
            this,
            this.onMouseDown_
          );
          const svgRoot = this.getSvgRoot();
          if (svgRoot) {
            svgRoot.style.cursor = "pointer";
          }
        }
        /**
         * Click handler.
         */
        showEditor_() {
          if (this.callback) {
            this.callback();
          }
        }
        /**
         * Calculates the size of the field.
         * @returns Size of the field.
         */
        getSize() {
          if (!this.size_.width) {
            this.render_();
          }
          if (this.padding)
            return this.size_;
          return new this.size_.constructor(
            Math.max(1, this.size_.width - scratchBlocks.BlockSvg.SEP_SPACE_X),
            this.size_.height
          );
        }
        EDITABLE = true;
      });
    };
  })();
  var plusImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNzFjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MWMwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==";
  var minusImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAwIDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K";
  function defineExtension(color, runtime, formatMessage) {
    const Plus = (Blockly, block) => {
      const FieldImageButton = initalizeField(Blockly);
      return new FieldImageButton(
        plusImage,
        15,
        15,
        () => {
          Blockly.Events.setGroup(true);
          if (block.mutationToDom && block.domToMutation) {
            const state = block.mutationToDom();
            const oldExtraState = Blockly.Xml.domToText(state);
            const length = state.getAttribute("length");
            if (length !== null) {
              state.setAttribute("length", String(parseInt(length, 10) + 1));
            }
            block.domToMutation(state);
            block.initSvg();
            block.render();
            Blockly.Events.fire(
              new Blockly.Events.BlockChange(
                block,
                "mutation",
                "length",
                oldExtraState,
                Blockly.Xml.domToText(block.mutationToDom())
              )
            );
          }
          Blockly.Events.setGroup(false);
        },
        "+",
        false,
        true
      );
    };
    const Minus = (Blockly, block) => {
      const FieldImageButton = initalizeField(Blockly);
      return new FieldImageButton(
        minusImage,
        15,
        15,
        () => {
          Blockly.Events.setGroup(true);
          if (block.mutationToDom && block.domToMutation) {
            const state = block.mutationToDom();
            const oldExtraState = Blockly.Xml.domToText(state);
            const length = state.getAttribute("length");
            if (length !== null) {
              state.setAttribute(
                "length",
                String(Math.max(0, parseInt(length, 10) - 1))
              );
            }
            block.domToMutation(state);
            block.initSvg();
            block.render();
            Blockly.Events.fire(
              new Blockly.Events.BlockChange(
                block,
                "mutation",
                "length",
                oldExtraState,
                Blockly.Xml.domToText(block.mutationToDom())
              )
            );
          }
          Blockly.Events.setGroup(false);
        },
        "-",
        false,
        true
      );
    };
    const updateButton = (Blockly, block) => {
      if (block.length !== void 0) {
        block.removeInput("MINUS", true);
        block.removeInput("PLUS", true);
        const start = block.inputList[0]?.name;
        block.appendDummyInput("PLUS").appendField(Plus(Blockly, block));
        if (start)
          block.moveInputBefore("PLUS", start);
        if (block.length > 0) {
          block.appendDummyInput("MINUS").appendField(Minus(Blockly, block));
          if (start)
            block.moveInputBefore("MINUS", start);
        }
      }
    };
    const cleanInputs = (block) => {
      const target = runtime.getEditingTarget();
      const vmBlock = target?.blocks.getBlock(block.id);
      if (!vmBlock || !target)
        return;
      const usedInputs = new Set(block.inputList.map((i) => i.name));
      const inputs = vmBlock.inputs;
      for (const name of Object.keys(inputs)) {
        const input = inputs[name];
        if (!usedInputs.has(name)) {
          const blocks = target.blocks;
          blocks.deleteBlock(input.block);
          blocks.deleteBlock(input.shadow);
          delete inputs[name];
        }
      }
    };
    return new Extension("lpp", color).register(
      /// Documentation
      new Button(
        "documentation",
        () => `\u{1F4C4} ${formatMessage("lpp.documentation")}`
      )
    ).register(
      /// Builtin
      new Category(() => `#\uFE0F\u20E3 ${formatMessage("lpp.category.builtin")}`).register(
        "builtinType",
        Reporter.Square((Blockly, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.builtin.type"));
          block.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
              ["Boolean", "Boolean"],
              ["Number", "Number"],
              ["String", "String"],
              ["Array", "Array"],
              ["Object", "Object"],
              ["Function", "Function"],
              ["Promise", "Promise"]
            ]),
            "value"
          );
        })
      ).register(
        "builtinError",
        Reporter.Square((Blockly, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.builtin.error"));
          block.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
              ["Error", "Error"],
              ["IllegalInvocationError", "IllegalInvocationError"],
              ["SyntaxError", "SyntaxError"]
            ]),
            "value"
          );
        })
      ).register(
        "builtinUtility",
        Reporter.Square((Blockly, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.builtin.error"));
          block.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
              ["JSON", "JSON"],
              ["Math", "Math"]
            ]),
            "value"
          );
        })
      )
    ).register(
      /// Construct
      new Category(() => `\u{1F6A7} ${formatMessage("lpp.category.construct")}`).register(
        "constructLiteral",
        Reporter.Square((Blockly, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.construct.literal"));
          block.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
              ["null", "null"],
              ["true", "true"],
              ["false", "false"],
              ["NaN", "NaN"],
              ["Infinity", "Infinity"]
            ]),
            "value"
          );
        })
      ).register(
        "constructNumber",
        Reporter.Square((_, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.construct.Number"));
          input_exports.Text(block, "BEGIN", [
            formatMessage("lpp.block.construct.Number"),
            "("
          ]);
          input_exports.String(block, "value", "10");
          input_exports.Text(block, "END", `)`);
        })
      ).register(
        "constructString",
        Reporter.Square((_, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.construct.String"));
          input_exports.Text(block, "BEGIN", [
            formatMessage("lpp.block.construct.String"),
            "("
          ]);
          input_exports.String(block, "value", "\u{1F31F}");
          input_exports.Text(block, "END", `)`);
        })
      ).register(
        "constructArray",
        Reporter.Square((Blockly, block) => ({
          init() {
            block.setTooltip(formatMessage("lpp.tooltip.construct.Array"));
            const property = block;
            input_exports.Text(block, "BEGIN", "[");
            input_exports.Text(block, "END", "]");
            property.length = 0;
            updateButton(Blockly, property);
          },
          mutationToDom() {
            const elem = document.createElement("mutation");
            if (isMutableBlock(block)) {
              elem.setAttribute("length", String(block.length));
            }
            return elem;
          },
          domToMutation(mutation) {
            const length = parseInt(
              mutation.getAttribute("length") ?? "0",
              10
            );
            if (isMutableBlock(block)) {
              if (length > block.length) {
                for (let i = block.length; i < length; i++) {
                  if (i > 0) {
                    block.appendDummyInput(`COMMA_${i}`).appendField(",");
                    block.moveInputBefore(`COMMA_${i}`, "END");
                  }
                  input_exports.Any(block, `ARG_${i}`);
                  block.moveInputBefore(`ARG_${i}`, "END");
                }
              } else {
                for (let i = length; i < block.length; i++) {
                  block.removeInput(`ARG_${i}`, true);
                  block.removeInput(`COMMA_${i}`, true);
                }
                cleanInputs(block);
              }
              block.length = length;
              updateButton(Blockly, block);
            }
          }
        }))
      ).register(
        "constructObject",
        Reporter.Square((Blockly, block) => ({
          init() {
            block.setTooltip(formatMessage("lpp.tooltip.construct.Object"));
            const property = block;
            input_exports.Text(block, "BEGIN", "{");
            input_exports.Text(block, "END", "}");
            property.length = 0;
            updateButton(Blockly, property);
          },
          mutationToDom() {
            const elem = document.createElement("mutation");
            if (isMutableBlock(block)) {
              elem.setAttribute("length", String(block.length));
            }
            return elem;
          },
          domToMutation(mutation) {
            const length = parseInt(
              mutation.getAttribute("length") ?? "0",
              10
            );
            if (isMutableBlock(block)) {
              if (length > block.length) {
                for (let i = block.length; i < length; i++) {
                  if (i > 0) {
                    block.appendDummyInput(`COMMA_${i}`).appendField(",");
                    block.moveInputBefore(`COMMA_${i}`, "END");
                  }
                  input_exports.String(block, `KEY_${i}`, "");
                  input_exports.Text(block, `COLON_${i}`, ":");
                  input_exports.Any(block, `VALUE_${i}`);
                  block.moveInputBefore(`VALUE_${i}`, "END");
                  block.moveInputBefore(`COLON_${i}`, `VALUE_${i}`);
                  block.moveInputBefore(`KEY_${i}`, `COLON_${i}`);
                }
              } else {
                for (let i = length; i < block.length; i++) {
                  block.removeInput(`KEY_${i}`, true);
                  block.removeInput(`COLON_${i}`, true);
                  block.removeInput(`VALUE_${i}`, true);
                  block.removeInput(`COMMA_${i}`, true);
                }
                cleanInputs(block);
              }
              block.length = length;
              updateButton(Blockly, block);
            }
          }
        }))
      ).register(
        "constructFunction",
        Reporter.Square((Blockly, block) => ({
          init() {
            block.setTooltip(formatMessage("lpp.tooltip.construct.Function"));
            const property = block;
            input_exports.Text(block, "BEGIN", [
              formatMessage("lpp.block.construct.Function"),
              "("
            ]);
            input_exports.Text(block, "END", ")");
            input_exports.Statement(block, "SUBSTACK");
            property.length = 0;
            updateButton(Blockly, property);
          },
          mutationToDom() {
            const elem = document.createElement("mutation");
            if (isMutableBlock(block)) {
              elem.setAttribute("length", String(block.length));
            }
            return elem;
          },
          domToMutation(mutation) {
            const length = parseInt(
              mutation.getAttribute("length") ?? "0",
              10
            );
            if (isMutableBlock(block)) {
              if (length > block.length) {
                for (let i = block.length; i < length; i++) {
                  if (i > 0) {
                    block.appendDummyInput(`COMMA_${i}`).appendField(",");
                    block.moveInputBefore(`COMMA_${i}`, "END");
                  }
                  input_exports.String(block, `ARG_${i}`, "");
                  block.moveInputBefore(`ARG_${i}`, "END");
                }
              } else {
                for (let i = length; i < block.length; i++) {
                  block.removeInput(`ARG_${i}`, true);
                  block.removeInput(`COMMA_${i}`, true);
                }
                cleanInputs(block);
              }
              block.length = length;
              updateButton(Blockly, block);
            }
          }
        }))
      )
    ).register(
      new Category(() => `\u{1F522} ${formatMessage("lpp.category.operator")}`).register(
        "binaryOp",
        Reporter.Square((Blockly, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.operator.binaryOp"));
          input_exports.String(block, "lhs", "");
          block.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
              ["=", "="],
              [".", "."],
              ["+", "+"],
              ["-", "-"],
              ["*", "*"],
              ["/", "/"],
              ["%", "%"],
              ["==", "=="],
              ["!=", "!="],
              [">", ">"],
              ["<", "<"],
              [">=", ">="],
              ["<=", "<="],
              ["&&", "&&"],
              ["||", "||"],
              ["<<", "<<"],
              [">>", ">>"],
              [">>>", ">>>"],
              ["&", "&"],
              ["|", "|"],
              ["^", "^"],
              ["instanceof", "instanceof"],
              ["in", "in"]
            ]),
            "op"
          );
          input_exports.String(block, "rhs", "");
        })
      ).register(
        "unaryOp",
        Reporter.Square((Blockly, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.operator.unaryOp"));
          block.appendDummyInput().appendField(
            new Blockly.FieldDropdown([
              ["+", "+"],
              ["-", "-"],
              ["!", "!"],
              ["~", "~"],
              ["delete", "delete"],
              ["await", "await"],
              ["yield", "yield"],
              ["yield*", "yield*"]
            ]),
            "op"
          );
          input_exports.Any(block, "value");
        })
      ).register(
        "new",
        Reporter.Square((Blockly, block) => ({
          init() {
            block.setTooltip(formatMessage("lpp.tooltip.operator.new"));
            const property = block;
            input_exports.Text(block, "LABEL", "new");
            input_exports.Any(block, "fn");
            input_exports.Text(block, "BEGIN", "(");
            input_exports.Text(block, "END", ")");
            property.length = 0;
            updateButton(Blockly, property);
          },
          mutationToDom() {
            const elem = document.createElement("mutation");
            if (isMutableBlock(block)) {
              elem.setAttribute("length", String(block.length));
            }
            return elem;
          },
          domToMutation(mutation) {
            const length = parseInt(
              mutation.getAttribute("length") ?? "0",
              10
            );
            if (isMutableBlock(block)) {
              if (length > block.length) {
                for (let i = block.length; i < length; i++) {
                  if (i > 0) {
                    block.appendDummyInput(`COMMA_${i}`).appendField(",");
                    block.moveInputBefore(`COMMA_${i}`, "END");
                  }
                  input_exports.Any(block, `ARG_${i}`);
                  block.moveInputBefore(`ARG_${i}`, "END");
                }
              } else {
                for (let i = length; i < block.length; i++) {
                  block.removeInput(`ARG_${i}`, true);
                  block.removeInput(`COMMA_${i}`, true);
                }
                cleanInputs(block);
              }
              block.length = length;
              updateButton(Blockly, block);
            }
          }
        }))
      ).register(
        "call",
        Reporter.Square((Blockly, block) => ({
          init() {
            block.setTooltip(formatMessage("lpp.tooltip.operator.call"));
            const property = block;
            input_exports.Any(block, "fn");
            input_exports.Text(block, "BEGIN", "(");
            input_exports.Text(block, "END", ")");
            property.length = 0;
            updateButton(Blockly, property);
          },
          mutationToDom() {
            const elem = document.createElement("mutation");
            if (isMutableBlock(block)) {
              elem.setAttribute("length", String(block.length));
            }
            return elem;
          },
          domToMutation(mutation) {
            const length = parseInt(
              mutation.getAttribute("length") ?? "0",
              10
            );
            if (isMutableBlock(block)) {
              if (length > block.length) {
                for (let i = block.length; i < length; i++) {
                  if (i > 0) {
                    block.appendDummyInput(`COMMA_${i}`).appendField(",");
                    block.moveInputBefore(`COMMA_${i}`, "END");
                  }
                  input_exports.Any(block, `ARG_${i}`);
                  block.moveInputBefore(`ARG_${i}`, "END");
                }
              } else {
                for (let i = length; i < block.length; i++) {
                  block.removeInput(`ARG_${i}`, true);
                  block.removeInput(`COMMA_${i}`, true);
                }
                cleanInputs(block);
              }
              block.length = length;
              updateButton(Blockly, block);
            }
          }
        }))
      ).register(
        "self",
        Reporter.Square((_, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.operator.self"));
          block.setCheckboxInFlyout(false);
          input_exports.Text(block, "LABEL", formatMessage("lpp.block.operator.self"));
        })
      ).register(
        "var",
        Reporter.Square((_, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.operator.var"));
          input_exports.Text(block, "LABEL", formatMessage("lpp.block.operator.var"));
          input_exports.String(block, "name", "\u{1F43A}");
        })
      )
    ).register(
      new Category(() => `\u{1F916} ${formatMessage("lpp.category.statement")}`).register(
        "return",
        Command(
          (_, block) => () => {
            block.setTooltip(formatMessage("lpp.tooltip.statement.return"));
            input_exports.Text(
              block,
              "LABEL",
              formatMessage("lpp.block.statement.return")
            );
            input_exports.Any(block, "value");
          },
          true
        )
      ).register(
        "throw",
        Command(
          (_, block) => () => {
            block.setTooltip(formatMessage("lpp.tooltip.statement.throw"));
            input_exports.Text(
              block,
              "LABEL",
              formatMessage("lpp.block.statement.throw")
            );
            input_exports.Any(block, "value");
          },
          true
        )
      ).register(
        "scope",
        Command((_, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.statement.scope"));
          input_exports.Text(
            block,
            "LABEL",
            formatMessage("lpp.block.statement.scope")
          );
          input_exports.Statement(block, "SUBSTACK");
        })
      ).register(
        "try",
        Command((_, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.statement.try"));
          input_exports.Text(block, "TRY", formatMessage("lpp.block.statement.try.1"));
          input_exports.Statement(block, "SUBSTACK");
          input_exports.Text(
            block,
            "CATCH",
            formatMessage("lpp.block.statement.try.2")
          );
          input_exports.Any(block, "var");
          input_exports.Statement(block, "SUBSTACK_2");
        })
      ).register(
        "nop",
        Command((_, block) => () => {
          block.setTooltip(formatMessage("lpp.tooltip.statement.nop"));
          input_exports.Any(block, "value");
        })
      )
    );
  }

  // src/impl/wrapper.ts
  var Wrapper = class _Wrapper extends String {
    /**
     * Construct a wrapped value.
     * @param value Value to wrap.
     */
    constructor(value) {
      super(value);
      this.value = value;
    }
    /**
     * Unwraps a wrapped object.
     * @param value Wrapped object.
     * @returns Unwrapped object.
     */
    static unwrap(value) {
      return value instanceof _Wrapper ? value.value : value;
    }
    /**
     * toString method for Scratch monitors.
     * @returns String display.
     */
    toString() {
      return String(this.value);
    }
  };

  // src/impl/typehint.ts
  function attachType() {
    function attachType2(fn, signature) {
      const v = ensureValue(fn);
      if (v instanceof LppFunction)
        attach(v, new TypeMetadata(signature));
    }
    attachType2(Global.Function.get("prototype").get("apply"), ["self", "args"]);
    attachType2(Global.Function.get("deserialize"), ["obj"]);
    attachType2(Global.Function.get("serialize"), ["fn"]);
    attachType2(Global.Promise, ["executor"]);
    attachType2(Global.Promise.get("prototype").get("then"), [
      "onFulfilled?",
      "onRejected?"
    ]);
    attachType2(Global.Promise.get("resolve"), ["value?"]);
    attachType2(Global.Promise.get("reject"), ["reason?"]);
    attachType2(Global.Promise.get("prototype").get("catch"), ["onRejected"]);
    attachType2(Global.JSON.get("parse"), ["json"]);
    attachType2(Global.JSON.get("stringify"), ["value"]);
  }

  // src/impl/promise.ts
  var Resolved = class {
    constructor(value) {
      this.value = value;
    }
  };
  var Rejected = class {
    constructor(reason) {
      this.reason = reason;
    }
    handled = false;
  };
  var PromiseResult = Symbol("PromiseResult");
  var PromiseCallback = Symbol("PromiseCallback");
  var ImmediatePromise = class _ImmediatePromise {
    get [Symbol.toStringTag]() {
      return "ImmediatePromise";
    }
    [PromiseCallback] = [];
    [PromiseResult];
    /**
     * Creates a new Promise.
     * @param executor A callback used to initialize the promise. This callback is passed two arguments:
     * a resolve callback used to resolve the promise with a value or the result of another promise,
     * and a reject callback used to reject the promise with a provided reason or error.
     * @version es5
     */
    constructor(executor) {
      const resolve = (result) => {
        const processResolve = (result2) => {
          if (!this[PromiseResult]) {
            this[PromiseResult] = new Resolved(result2);
            this[PromiseCallback].forEach((callback) => callback());
            this[PromiseCallback] = [];
          }
        };
        if (isPromise(result)) {
          result.then(
            (result2) => {
              processResolve(result2);
            },
            (reason) => {
              reject(reason);
            }
          );
        } else {
          processResolve(result);
        }
      };
      const reject = (reason) => {
        if (!this[PromiseResult]) {
          const res = new Rejected(reason);
          this[PromiseResult] = res;
          this[PromiseCallback].forEach((callback) => callback());
          this[PromiseCallback] = [];
          setTimeout(() => {
            if (!res.handled)
              throw res.reason;
          });
        }
      };
      if (typeof executor !== "function")
        throw new TypeError(`Promise resolver ${executor} is not a function`);
      try {
        executor(resolve, reject);
      } catch (err) {
        reject(err);
      }
    }
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     * @version es5
     */
    then(onfulfilled, onrejected) {
      return new _ImmediatePromise((resolve, reject) => {
        if (this[PromiseResult]) {
          if (this[PromiseResult] instanceof Resolved) {
            return onfulfilled ? resolve(onfulfilled(this[PromiseResult].value)) : resolve(this[PromiseResult].value);
          }
          this[PromiseResult].handled = true;
          return onrejected ? resolve(onrejected(this[PromiseResult].reason)) : reject(this[PromiseResult].reason);
        }
        return void this[PromiseCallback].push(() => {
          try {
            if (this[PromiseResult] instanceof Resolved) {
              if (onfulfilled) {
                resolve(onfulfilled(this[PromiseResult].value));
              } else
                resolve(this[PromiseResult].value);
            } else if (this[PromiseResult] instanceof Rejected) {
              this[PromiseResult].handled = true;
              if (onrejected) {
                resolve(onrejected(this[PromiseResult].reason));
              } else
                reject(this[PromiseResult].reason);
            }
          } catch (e) {
            reject(e);
          }
        });
      });
    }
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     * @version es5
     */
    catch(onrejected) {
      return this.then(void 0, onrejected);
    }
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     * @version es2018
     */
    finally(onfinally) {
      if (!onfinally)
        return this;
      return new _ImmediatePromise((resolve, reject) => {
        if (this[PromiseResult]) {
          const res = onfinally();
          if (isPromise(res)) {
            return void res.then(
              () => {
                return this[PromiseResult] && (this[PromiseResult] instanceof Resolved ? resolve(this[PromiseResult].value) : reject(this[PromiseResult].reason));
              },
              (reason) => {
                return reject(reason);
              }
            );
          }
          return this[PromiseResult] instanceof Resolved ? resolve(this[PromiseResult].value) : reject(this[PromiseResult].reason);
        }
        return void this[PromiseCallback].push(() => {
          if (this[PromiseResult]) {
            try {
              const res = onfinally();
              if (isPromise(res)) {
                return void res.then(
                  () => {
                    return this[PromiseResult] && (this[PromiseResult] instanceof Resolved ? resolve(this[PromiseResult].value) : reject(this[PromiseResult].reason));
                  },
                  (reason) => {
                    return reject(reason);
                  }
                );
              }
              return this[PromiseResult] instanceof Resolved ? resolve(this[PromiseResult].value) : reject(this[PromiseResult].reason);
            } catch (e) {
              reject(e);
            }
          }
        });
      });
    }
    static all(values) {
      return new _ImmediatePromise((resolve, reject) => {
        let index = 0;
        let completed = 0;
        const result = {};
        let performCheck = false;
        for (const v of values) {
          const current = index++;
          _ImmediatePromise.resolve(v).then((v2) => {
            result[current] = v2;
            completed++;
            if (performCheck && completed === index) {
              resolve(result);
            }
          }, reject);
        }
        if (completed === index) {
          return resolve(result);
        }
        performCheck = true;
      });
    }
    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An iterable of Promises.
     * @returns A new Promise.
     * @version es2015
     */
    static race(values) {
      return new _ImmediatePromise((resolve) => {
        for (const v of values)
          resolve(v);
      });
    }
    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected Promise.
     */
    static reject(reason) {
      return new _ImmediatePromise((_, reject) => reject(reason));
    }
    static resolve(value) {
      return new _ImmediatePromise(
        (resolve) => resolve(value)
      );
    }
    static allSettled(values) {
      return new _ImmediatePromise((resolve) => {
        let index = 0;
        let completed = 0;
        const result = {};
        let performCheck = false;
        for (const v of values) {
          const current = index++;
          _ImmediatePromise.resolve(v).then(
            (v2) => {
              result[current] = {
                status: "fulfilled",
                value: v2
              };
              completed++;
              if (performCheck && completed === index) {
                resolve(result);
              }
            },
            (err) => {
              result[current] = {
                status: "rejected",
                reason: err
              };
              completed++;
              if (performCheck && completed === index) {
                resolve(result);
              }
            }
          );
        }
        if (completed === index) {
          return resolve(result);
        }
        performCheck = true;
      });
    }
    static any(values) {
      return new _ImmediatePromise((resolve, reject) => {
        let index = 0;
        let failed = 0;
        const result = [];
        let performCheck = false;
        for (const v of values) {
          const current = index++;
          _ImmediatePromise.resolve(v).then(
            (v2) => resolve(v2),
            (v2) => {
              result[current] = v2;
              failed++;
              if (performCheck && failed === index) {
                reject(new AggregateError(result, "All promises were rejected"));
              }
            }
          );
        }
        if (failed === index) {
          return reject(new AggregateError(result, "All promises were rejected"));
        }
        performCheck = true;
      });
    }
    /**
     * Make a PromiseLike object synchronous.
     * @param v PromiseLike object.
     * @returns Value or PromiseLike object.
     * @warning Non-standard.
     */
    static sync(v) {
      let result = void 0;
      v.then(
        (v2) => {
          result = new Resolved(v2);
        },
        (v2) => {
          result = new Rejected(v2);
        }
      );
      if (result) {
        const v2 = result;
        if (v2 instanceof Resolved) {
          return v2.value;
        } else {
          throw v2.reason;
        }
      }
      return v;
    }
    /**
     * Creates a new Promise and returns it in an object, along with its resolve and reject functions.
     * @returns An object with the properties `promise`, `resolve`, and `reject`.
     *
     * ```ts
     * const { promise, resolve, reject } = Promise.withResolvers<T>();
     * ```
     *
     * @version es2023
     */
    withResolvers() {
      let resolveFn;
      let rejectFn;
      resolveFn = rejectFn = () => {
        throw new Error("not implemented");
      };
      const promise = new _ImmediatePromise((resolve, reject) => {
        resolveFn = resolve;
        rejectFn = reject;
      });
      return { promise, reject: rejectFn, resolve: resolveFn };
    }
  };
  var PromiseProxy = class {
    constructor(promise, afterResolved, afterRejected) {
      this.promise = promise;
      this.afterResolved = afterResolved;
      this.afterRejected = afterRejected;
    }
    afterFulfilledCalled = false;
    afterRejectedCalled = false;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then(onfulfilled, onrejected) {
      return this.promise.then(
        onfulfilled ? (value) => {
          const res = onfulfilled(value);
          if (!this.afterFulfilledCalled) {
            if (this.afterResolved)
              this.afterResolved();
            this.afterFulfilledCalled = true;
          }
          return res;
        } : void 0,
        onrejected ? (reason) => {
          const res = onrejected(reason);
          if (!this.afterRejectedCalled) {
            if (this.afterRejected)
              this.afterRejected();
            this.afterRejectedCalled = true;
          }
          return res;
        } : void 0
      );
    }
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch(onrejected) {
      return this.promise.then(void 0, onrejected);
    }
  };

  // src/impl/thread/helper.ts
  function bindThread(thread, fn) {
    let status = thread.status;
    let alreadyCalled = false;
    const threadConstructor = thread.constructor;
    Reflect.defineProperty(thread, "status", {
      get: () => {
        return status;
      },
      set: (newStatus) => {
        status = newStatus;
        if (status === threadConstructor.STATUS_DONE) {
          if (!alreadyCalled) {
            alreadyCalled = true;
            fn();
          }
        }
      }
    });
  }
  function stepThread(runtime, util, thread) {
    const callerThread = util.thread;
    runtime.sequencer.stepThread(thread);
    if (thread.isCompiled && callerThread && callerThread.isCompiled && callerThread.generator) {
      const orig = callerThread.generator;
      callerThread.generator = {
        next: () => {
        }
      };
      runtime.sequencer.stepThread(callerThread);
      callerThread.generator = orig;
    }
  }

  // src/impl/thread/index.ts
  var ThreadController = class _ThreadController {
    constructor(runtime, util) {
      this.runtime = runtime;
      this.util = util;
    }
    static waitingThread = /* @__PURE__ */ new WeakMap();
    create(topBlockId, target, options) {
      return this.runtime._pushThread(topBlockId, target, options);
    }
    wait(thread) {
      const cache = _ThreadController.waitingThread.get(thread);
      if (cache) {
        return cache;
      }
      const v = new ImmediatePromise((resolve) => {
        bindThread(thread, resolve);
        stepThread(this.runtime, this.util, thread);
      });
      _ThreadController.waitingThread.set(thread, v);
      return v;
    }
    step(thread) {
      stepThread(this.runtime, this.util, thread);
    }
  };

  // src/index.ts
  (function(Scratch2) {
    const color = "#808080";
    const lppVersion = "Technical Preview Snapshot #1 for Gandi IDE";
    if (Scratch2.extensions.unsandboxed === false) {
      throw new Error("lpp must be loaded in unsandboxed mode.");
    }
    function hijack(fn) {
      const _orig = Function.prototype.apply;
      Function.prototype.apply = function(thisArg) {
        return thisArg;
      };
      const result = fn();
      Function.prototype.apply = _orig;
      return result;
    }
    class LppExtension {
      /**
       * Virtual machine instance.
       */
      vm;
      /**
       * ScratchBlocks instance.
       */
      Blockly;
      /**
       * Blockly extension.
       */
      extension;
      /**
       * Scratch util.
       */
      util;
      /**
       * Construct a new instance of lpp.
       * @param originalRuntime Scratch runtime.
       */
      constructor(originalRuntime) {
        const runtime = originalRuntime;
        this.Blockly = void 0;
        Scratch2.translate.setup(l10n_default);
        let virtualMachine;
        if (runtime._events["QUESTION"] instanceof Array) {
          for (const value of runtime._events["QUESTION"]) {
            const v = hijack(value);
            if (v?.props?.vm) {
              virtualMachine = v?.props?.vm;
              break;
            }
          }
        } else if (runtime._events["QUESTION"]) {
          virtualMachine = hijack(runtime._events["QUESTION"])?.props?.vm;
        }
        if (!virtualMachine)
          throw new Error("lpp cannot get Virtual Machine instance.");
        this.vm = virtualMachine;
        this.extension = defineExtension(
          color,
          this.vm.runtime,
          this.formatMessage.bind(this)
        );
        if (this.vm._events["EXTENSION_ADDED"] instanceof Array) {
          for (const value of this.vm._events["EXTENSION_ADDED"]) {
            const v = hijack(value);
            if (v?.ScratchBlocks) {
              this.Blockly = v?.ScratchBlocks;
              break;
            }
          }
        } else if (this.vm._events["EXTENSION_ADDED"]) {
          this.Blockly = hijack(this.vm._events["EXTENSION_ADDED"])?.ScratchBlocks;
        }
        if (this.Blockly) {
          const Blockly = this.Blockly;
          const Events = Blockly.Events;
          const _Change = Events.Change.prototype.run;
          Events.Change.prototype.run = function(_forward) {
            _Change.call(this, _forward);
            const self = this;
            const block = this.getEventWorkspace_().getBlockById(
              self.blockId
            );
            if (block instanceof Blockly.BlockSvg) {
              block.initSvg();
              block.render();
            }
          };
          const _Move = Events.Move.prototype.run;
          Events.Move.prototype.run = function(_forward) {
            const self = this;
            const block = this.getEventWorkspace_().getBlockById(
              self.blockId
            );
            if (block)
              _Move.call(this, _forward);
          };
          const _Create = Events.Create.prototype.run;
          Events.Create.prototype.run = function(_forward) {
            const self = this;
            const res = [];
            const workspace = this.getEventWorkspace_();
            for (const id of self.ids) {
              if (workspace.getBlockById(id))
                res.push(id);
            }
            self.ids = res;
            _Create.call(this, _forward);
          };
        }
        const _emit = runtime.emit;
        runtime.emit = (event, ...args) => {
          const blacklist = ["SAY", "QUESTION"];
          if (blacklist.includes(event) && args.length >= 1 && typeof args[0] === "object" && args[0] !== null && Reflect.get(args[0], "id") === "") {
            this.handleError(new LppError("useAfterDispose"));
          }
          return _emit.call(runtime, event, ...args);
        };
        const _visualReport = runtime.visualReport;
        runtime.visualReport = (blockId, value) => {
          const value2 = Wrapper.unwrap(value);
          if ((value2 instanceof LppValue2 || value2 instanceof LppReference) && this.Blockly) {
            dialog_exports.show(
              this.Blockly,
              blockId,
              [
                Inspector(
                  this.Blockly,
                  this.vm,
                  this.formatMessage.bind(this),
                  ensureValue(value2)
                )
              ],
              value2 instanceof LppConstant ? "center" : "left"
            );
          } else {
            return _visualReport.call(runtime, blockId, value);
          }
        };
        const _requestUpdateMonitor = runtime.requestUpdateMonitor;
        if (_requestUpdateMonitor) {
          const patchMonitorValue = (element, value) => {
            const valueElement = element.querySelector('[class*="value"]');
            if (valueElement instanceof HTMLElement) {
              const internalInstance = Object.values(valueElement).find(
                (v) => typeof v === "object" && v !== null && Reflect.has(v, "stateNode")
              );
              if (value instanceof LppValue2) {
                const inspector = Inspector(
                  this.Blockly,
                  this.vm,
                  this.formatMessage.bind(this),
                  value
                );
                valueElement.style.textAlign = "left";
                valueElement.style.backgroundColor = "rgb(30, 30, 30)";
                valueElement.style.color = "#eeeeee";
                while (valueElement.firstChild)
                  valueElement.removeChild(valueElement.firstChild);
                valueElement.append(inspector);
              } else {
                if (internalInstance) {
                  valueElement.style.textAlign = "";
                  valueElement.style.backgroundColor = internalInstance.memoizedProps?.style?.background ?? "";
                  valueElement.style.color = internalInstance.memoizedProps?.style?.color ?? "";
                  while (valueElement.firstChild)
                    valueElement.removeChild(valueElement.firstChild);
                  valueElement.append(String(value));
                }
              }
            }
          };
          const getMonitorById = (id) => {
            const elements = document.querySelectorAll(
              `[class*="monitor_monitor-container"]`
            );
            for (const element of Object.values(elements)) {
              const internalInstance = Object.values(element).find(
                (v) => typeof v === "object" && v !== null && Reflect.has(v, "children")
              );
              if (internalInstance) {
                const props = internalInstance?.children?.props;
                if (id === props?.id)
                  return element;
              }
            }
            return null;
          };
          const monitorMap = /* @__PURE__ */ new Map();
          runtime.requestUpdateMonitor = (state) => {
            const id = state.get("id");
            if (typeof id === "string") {
              const monitorValue = state.get("value");
              const monitorMode = state.get("mode");
              const monitorVisible = state.get("visible");
              const cache = monitorMap.get(id);
              if (typeof monitorMode === "string" && cache) {
                cache.mode = monitorMode;
                cache.value = void 0;
              } else if (monitorValue !== void 0) {
                const unwrappedValue = Wrapper.unwrap(monitorValue);
                if (unwrappedValue instanceof LppValue2 || unwrappedValue instanceof LppReference) {
                  const actualValue = ensureValue(unwrappedValue);
                  if (!cache || cache.value !== actualValue) {
                    requestAnimationFrame(() => {
                      const monitor = getMonitorById(id);
                      if (monitor) {
                        patchMonitorValue(monitor, actualValue);
                      }
                    });
                    if (!cache) {
                      monitorMap.set(id, {
                        value: actualValue,
                        mode: (() => {
                          if (runtime.getMonitorState) {
                            const monitorCached = runtime.getMonitorState().get(id);
                            if (monitorCached) {
                              const mode = monitorCached.get("mode");
                              return typeof mode === "string" ? mode : "normal";
                            }
                          }
                          return "normal";
                        })()
                      });
                    } else
                      cache.value = actualValue;
                  }
                  return true;
                } else {
                  if (monitorMap.has(id)) {
                    const monitor = getMonitorById(id);
                    if (monitor) {
                      patchMonitorValue(monitor, monitorValue);
                    }
                    monitorMap.delete(id);
                  }
                }
              } else if (monitorVisible !== void 0) {
                if (!monitorVisible)
                  monitorMap.delete(id);
              }
            }
            return _requestUpdateMonitor.call(runtime, state);
          };
        }
        Global.Function.set(
          "serialize",
          LppFunction.native(({ self, args }) => {
            const fn = args[0];
            if (self !== Global.Function || !fn || !(fn instanceof LppFunction) || !hasMetadata(fn) || !(fn.metadata instanceof ScratchMetadata)) {
              return raise(Global.IllegalInvocationError.construct([]));
            }
            const v = fn.metadata.blocks[0]?.getBlock(fn.metadata.blocks[1]);
            if (!v)
              throw new Error("lpp: serialize blockId invalid");
            return new LppReturn(
              LppExtension.serializeFunction(
                v,
                fn.metadata.blocks[0],
                fn.metadata.signature
              )
            );
          })
        );
        Global.Function.set(
          "deserialize",
          LppFunction.native(({ self, args }) => {
            if (self !== Global.Function) {
              return raise(Global.IllegalInvocationError.construct([]));
            }
            const val = ffi_exports.toObject(args[0] ?? new LppConstant(null));
            if (Validator.isInfo(val)) {
              const Blocks = runtime.flyoutBlocks.constructor;
              const blocks = new Blocks(runtime, true);
              deserializeBlock(blocks, val.script);
              const Target = runtime.getTargetForStage()?.constructor;
              if (!Target)
                throw new Error("lpp: project is disposed");
              return new LppReturn(
                attach(
                  new LppFunction(this.executeScratch.bind(this, Target)),
                  new ScratchMetadata(
                    val.signature,
                    [blocks, val.block],
                    void 0,
                    void 0,
                    void 0
                  )
                )
              );
            }
            return raise(
              Global.SyntaxError.construct([new LppConstant("Invalid value")])
            );
          })
        );
        attachType();
        runtime.lpp = {
          Core: core_exports,
          Metadata: metadata_exports,
          Wrapper,
          version: lppVersion
        };
        console.groupCollapsed("\u{1F4AB} lpp", lppVersion);
        console.log("\u{1F31F}", this.formatMessage("lpp.about.summary"));
        console.log(
          "\u{1F916}",
          this.formatMessage("lpp.about.github"),
          "-> https://github.com/FurryR/lpp-scratch"
        );
        console.log(
          "\u{1F49E}",
          this.formatMessage("lpp.about.afdian"),
          "-> https://afdian.net/a/FurryR"
        );
        console.group("\u{1F47E}", this.formatMessage("lpp.about.staff.1"));
        console.log(
          "\u{1F43A} @FurryR https://github.com/FurryR - Developer, Test, Translation, Documentation"
        );
        console.log(
          "\u{1F914} @SimonShiki https://github.com/SimonShiki - Test, Technical support"
        );
        console.log("\u{1F604} @Nights https://github.com/Nightre - Technical support");
        console.log("\u{1F524} @CST1229 https://github.com/CST1229 - Technical support");
        console.log("\u2B50 @DilemmaGX https://github.com/DilemmaGX - Icon artist");
        console.log(
          "\u{1F43A} @VeroFess https://github.com/VeroFess - Technical support"
        );
        console.log("\u{1F970}", this.formatMessage("lpp.about.staff.2"));
        console.groupEnd();
        console.groupEnd();
      }
      /**
       * Multi-language formatting support.
       * @param id key of the translation.
       * @returns Formatted string.
       */
      formatMessage(id) {
        return Scratch2.translate({
          id,
          default: id,
          description: id
        });
      }
      /**
       * Get extension info.
       * @returns Extension info.
       */
      getInfo() {
        if (this.Blockly)
          this.extension.inject(this.Blockly);
        return {
          id: "lpp",
          name: this.formatMessage("lpp.name"),
          color1: color,
          blocks: this.extension.export(),
          menus: {
            dummy: {
              acceptReporters: false,
              items: []
            }
          }
        };
      }
      /**
       * Opens documentation.
       */
      documentation() {
        window.open(this.formatMessage("lpp.documentation.url"));
      }
      /**
       * Builtin types.
       * @param param0 Function name.
       * @returns Class.
       */
      builtinType(args, util) {
        this.util = util;
        const instance = global.get(args.value);
        if (instance) {
          return new Wrapper(instance);
        }
        throw new Error("lpp: not implemented");
      }
      /**
       * Same as builtinType.
       * @param args Function name.
       * @param util Scratch util.
       * @returns Class.
       */
      builtinError(args, util) {
        return this.builtinType(args, util);
      }
      /**
       * Same as builtinType.
       * @param args Function name.
       * @param util Scratch util.
       * @returns Class.
       */
      builtinUtility(args, util) {
        return this.builtinType(args, util);
      }
      /**
       * Get literal value.
       * @param param0 Arguments.
       * @param util Scratch util.
       * @returns Constant value.
       */
      constructLiteral(args, util) {
        this.util = util;
        const res = (() => {
          switch (args.value) {
            case "null":
              return new LppConstant(null);
            case "true":
              return new LppConstant(true);
            case "false":
              return new LppConstant(false);
            case "NaN":
              return new LppConstant(NaN);
            case "Infinity":
              return new LppConstant(Infinity);
          }
          throw new Error("lpp: unknown literal");
        })();
        return new Wrapper(res);
      }
      /**
       * Make binary calculations.
       * @param param0 Arguments.
       * @param util Scratch util.
       * @returns Result.
       */
      binaryOp(args, util) {
        this.util = util;
        try {
          const lhs = Wrapper.unwrap(args.lhs);
          const rhs = Wrapper.unwrap(args.rhs);
          const res = (() => {
            if (args.op === ".") {
              if (lhs instanceof LppValue2 || lhs instanceof LppReference) {
                if (typeof rhs === "string" || typeof rhs === "number") {
                  return lhs.get(`${rhs}`);
                } else if (rhs instanceof LppValue2 || rhs instanceof LppReference) {
                  const n = ensureValue(rhs);
                  if (n instanceof LppConstant && n.value !== null) {
                    return lhs.get(n.toString());
                  }
                }
                throw new LppError("invalidIndex");
              }
              throw new LppError("syntaxError");
            } else if ((lhs instanceof LppValue2 || lhs instanceof LppReference) && (rhs instanceof LppValue2 || rhs instanceof LppReference)) {
              switch (args.op) {
                case "=":
                case "+":
                case "*":
                case "==":
                case "!=":
                case ">":
                case "<":
                case ">=":
                case "<=":
                case "&&":
                case "||":
                case "-":
                case "/":
                case "%":
                case "<<":
                case ">>":
                case ">>>":
                case "&":
                case "|":
                case "^":
                case "instanceof": {
                  return lhs.calc(args.op, ensureValue(rhs));
                }
                case "in": {
                  const left = ensureValue(lhs);
                  const right = ensureValue(rhs);
                  if (!(left instanceof LppConstant && left.value !== null))
                    throw new LppError("invalidIndex");
                  return new LppConstant(right.has(left.toString()));
                }
                default:
                  throw new Error("lpp: unknown operand");
              }
            }
            throw new LppError("syntaxError");
          })();
          return new Wrapper(res);
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Do unary calculations.
       * @param param0 Arguments.
       * @param util Scratch util.
       * @returns Result.
       */
      unaryOp(args, util) {
        this.util = util;
        try {
          const value = Wrapper.unwrap(args.value);
          if (!(value instanceof LppValue2 || value instanceof LppReference))
            throw new LppError("syntaxError");
          const res = (() => {
            switch (args.op) {
              case "+":
              case "-":
              case "!":
              case "~":
              case "delete": {
                return value.calc(args.op);
              }
              default:
                throw new Error("lpp: unknown operand");
            }
          })();
          return new Wrapper(res);
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Call function with arguments.
       * @param args The function and arguments.
       * @param util Scratch util.
       * @returns Function result.
       */
      call(args, util) {
        const { thread } = util;
        this.util = util;
        try {
          let { fn } = args;
          fn = Wrapper.unwrap(fn);
          const actualArgs = [];
          const block = this.getActiveBlockInstance(args, thread);
          const len = parseInt(this.getMutation(block)?.length ?? "0", 10);
          for (let i = 0; i < len; i++) {
            const value = Wrapper.unwrap(args[`ARG_${i}`]);
            if (value instanceof LppValue2 || value instanceof LppReference)
              actualArgs[i] = ensureValue(value);
            else
              throw new LppError("syntaxError");
          }
          if (!(fn instanceof LppValue2 || fn instanceof LppReference))
            throw new LppError("syntaxError");
          const func = ensureValue(fn);
          const lppThread = thread;
          if (!(func instanceof LppFunction))
            throw new LppError("notCallable");
          const res = func.apply(
            fn instanceof LppReference ? fn.parent.deref() ?? new LppConstant(null) : lppThread.lpp?.unwind()?.self ?? new LppConstant(null),
            actualArgs
          );
          return this.asap(
            withValue(
              res,
              (result) => new Wrapper(this.processApplyValue(result, thread))
            ),
            thread
          );
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Generate a new object by function with arguments.
       * @param args The function and arguments.
       * @param util Scratch util.
       * @returns Result.
       */
      new(args, util) {
        const { thread } = util;
        this.util = util;
        try {
          let { fn } = args;
          fn = Wrapper.unwrap(fn);
          const actualArgs = [];
          const block = this.getActiveBlockInstance(args, thread);
          const len = parseInt(this.getMutation(block)?.length ?? "0", 10);
          for (let i = 0; i < len; i++) {
            const value = Wrapper.unwrap(args[`ARG_${i}`]);
            if (value instanceof LppValue2 || value instanceof LppReference)
              actualArgs[i] = ensureValue(value);
            else
              throw new LppError("syntaxError");
          }
          if (!(fn instanceof LppValue2 || fn instanceof LppReference))
            throw new LppError("syntaxError");
          fn = ensureValue(fn);
          if (!(fn instanceof LppFunction))
            throw new LppError("notCallable");
          const res = fn.construct(actualArgs);
          return this.asap(
            withValue(
              res,
              (result) => new Wrapper(this.processApplyValue(result, thread))
            ),
            thread
          );
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Return self object.
       * @param _ Unnecessary argument.
       * @param util Scratch util.
       * @returns Result.
       */
      self(_, util) {
        try {
          const { thread } = util;
          this.util = util;
          const lppThread = thread;
          if (lppThread.lpp) {
            const unwind = lppThread.lpp.unwind();
            if (unwind) {
              return new Wrapper(unwind.self);
            }
          }
          throw new LppError("useOutsideFunction");
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Construct a Number.
       * @param param0 Arguments.
       * @returns Result object.
       */
      constructNumber(args, util) {
        const obj = new LppConstant(Number(args.value));
        this.util = util;
        return new Wrapper(obj);
      }
      /**
       * Construct a String.
       * @param param0 Arguments.
       * @returns Result object.
       */
      constructString(args, util) {
        const obj = new LppConstant(String(args.value));
        this.util = util;
        return new Wrapper(obj);
      }
      /**
       * Construct an Array.
       * @param args ID for finding where the array is.
       * @param util Scratch util.
       * @returns An array.
       */
      constructArray(args, util) {
        try {
          const { thread } = util;
          this.util = util;
          const arr = new LppArray();
          const block = this.getActiveBlockInstance(args, thread);
          const len = parseInt(this.getMutation(block)?.length ?? "0", 10);
          for (let i = 0; i < len; i++) {
            const value = Wrapper.unwrap(args[`ARG_${i}`]);
            if (!(value instanceof LppValue2 || value instanceof LppReference))
              throw new LppError("syntaxError");
            arr.value.push(ensureValue(value));
          }
          return new Wrapper(arr);
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Construct an Object.
       * @param args ID for finding where the object is.
       * @param util Scratch util.
       * @returns An object.
       */
      constructObject(args, util) {
        try {
          const { thread } = util;
          this.util = util;
          const obj = new LppObject();
          const block = this.getActiveBlockInstance(args, thread);
          const len = parseInt(this.getMutation(block)?.length ?? "0", 10);
          for (let i = 0; i < len; i++) {
            let key = Wrapper.unwrap(args[`KEY_${i}`]);
            const value = Wrapper.unwrap(args[`VALUE_${i}`]);
            if (typeof key === "string" || typeof key === "number") {
              key = `${key}`;
            } else if (key instanceof LppConstant) {
              key = key.toString();
            } else if (key instanceof LppReference && key.value instanceof LppConstant) {
              key = key.value.toString();
            } else
              throw new LppError("invalidIndex");
            if (!(value instanceof LppValue2 || value instanceof LppReference))
              throw new LppError("syntaxError");
            obj.set(key, ensureValue(value));
          }
          return new Wrapper(obj);
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Construct a Function.
       * @param args ID for finding where the function is.
       * @param util Scratch util.
       * @returns A function object.
       */
      constructFunction(args, util) {
        try {
          const { thread, target } = util;
          this.util = util;
          const Target = target.constructor;
          const block = this.getActiveBlockInstance(args, thread);
          const signature = [];
          const len = parseInt(
            block?.mutation?.length ?? "0",
            10
          );
          for (let i = 0; i < len; i++) {
            if (typeof args[`ARG_${i}`] !== "object")
              signature[i] = String(args[`ARG_${i}`]);
            else
              throw new LppError("syntaxError");
          }
          const blocks = thread.target.blocks;
          const lppThread = thread;
          return new Wrapper(
            attach(
              new LppFunction(this.executeScratch.bind(this, Target)),
              new ScratchMetadata(
                signature,
                [blocks, block.id],
                target.sprite.clones[0].id,
                target.id,
                lppThread.lpp
              )
            )
          );
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Get value of specified function variable.
       * @param args Variable name.
       * @param util Scratch util.
       * @returns The value of the variable. If it is not exist, returns null instead.
       */
      var(args, util) {
        try {
          const { thread } = util;
          this.util = util;
          const lppThread = thread;
          if (lppThread.lpp) {
            const v = lppThread.lpp.get(args.name);
            return new Wrapper(v);
          }
          throw new LppError("useOutsideContext");
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Return a value from the function.
       * @param param0 Return value.
       * @param util Scratch util.
       */
      return({ value }, util) {
        try {
          const { thread } = util;
          this.util = util;
          value = Wrapper.unwrap(value);
          if (!(value instanceof LppValue2 || value instanceof LppReference))
            throw new LppError("syntaxError");
          const val = ensureValue(value);
          const lppThread = thread;
          if (lppThread.lpp) {
            const ctx = lppThread.lpp.unwind();
            if (ctx instanceof LppFunctionContext) {
              ctx.returnCallback(new LppReturn(val));
              return thread.stopThisScript();
            }
          }
          throw new LppError("useOutsideFunction");
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Throw a value from the function.
       * @param param0 Exception.
       * @param util Scratch util.
       */
      throw({ value }, util) {
        try {
          const { thread } = util;
          this.util = util;
          value = Wrapper.unwrap(value);
          if (!(value instanceof LppValue2 || value instanceof LppReference))
            throw new LppError("syntaxError");
          const val = ensureValue(value);
          const result = new LppException(val);
          const lppThread = thread;
          result.pushStack(
            new LppTraceback2.Block(
              thread.target.sprite.clones[0].id,
              thread.peekStack(),
              lppThread.lpp ?? void 0
            )
          );
          if (lppThread.lpp) {
            lppThread.lpp.exceptionCallback(result);
            return thread.stopThisScript();
          }
          this.handleException(result);
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Execute in new scope.
       * @param args ID for finding where the branch is.
       * @param util Scratch util.
       * @returns Wait for the branch to finish.
       */
      scope(args, util) {
        const { thread, target } = util;
        this.util = util;
        try {
          const block = this.getActiveBlockInstance(args, thread);
          const id = block.inputs.SUBSTACK?.block;
          if (!id)
            return;
          if (!this.util)
            throw new Error("lpp: util used initialization");
          const controller = new ThreadController(
            this.vm.runtime,
            this.util
          );
          const parentThread = thread;
          return this.asap(
            ImmediatePromise.sync(
              new ImmediatePromise((resolve) => {
                const scopeThread = controller.create(id, target);
                scopeThread.lpp = new LppContext(
                  parentThread.lpp ?? void 0,
                  (value) => {
                    if (parentThread.lpp) {
                      parentThread.lpp.returnCallback(value);
                      return scopeThread.stopThisScript();
                    } else
                      throw new LppError("useOutsideFunction");
                  },
                  (value) => {
                    if (parentThread.lpp) {
                      parentThread.lpp.exceptionCallback(value);
                      return thread.stopThisScript();
                    }
                    this.handleException(value);
                  }
                );
                resolve(controller.wait(scopeThread).then(() => void 0));
              })
            ),
            thread
          );
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Catch exceptions.
       * @param args ID for finding where the branch is.
       * @param util Scratch util.
       * @returns Wait for the function to finish.
       */
      try(args, util) {
        const { thread, target } = util;
        this.util = util;
        try {
          const block = this.getActiveBlockInstance(args, thread);
          const dest = Wrapper.unwrap(args.var);
          if (!(dest instanceof LppReference))
            throw new LppError("syntaxError");
          const id = block.inputs.SUBSTACK?.block;
          if (!id)
            return;
          if (!this.util)
            throw new Error("lpp: util used before initialization");
          const controller = new ThreadController(
            this.vm.runtime,
            this.util
          );
          const captureId = block.inputs.SUBSTACK_2?.block;
          const parentThread = thread;
          const tryThread = controller.create(id, target);
          let triggered = false;
          return this.asap(
            ImmediatePromise.sync(
              new ImmediatePromise((resolve) => {
                tryThread.lpp = new LppContext(
                  parentThread.lpp ?? void 0,
                  (value) => {
                    if (parentThread.lpp) {
                      parentThread.lpp.returnCallback(value);
                      return tryThread.stopThisScript();
                    } else
                      throw new LppError("useOutsideFunction");
                  },
                  (value) => {
                    triggered = true;
                    if (!captureId) {
                      resolve(void 0);
                      return;
                    }
                    const GlobalError = global.get("Error");
                    if (!(GlobalError instanceof LppFunction))
                      throw new Error("lpp: not implemented");
                    const error = value.value;
                    if (error.instanceof(GlobalError)) {
                      const traceback = new LppArray(
                        value.stack.map((v) => new LppConstant(v.toString()))
                      );
                      error.set("stack", traceback);
                    }
                    dest.assign(error);
                    const catchThread = controller.create(captureId, target);
                    catchThread.lpp = new LppContext(
                      parentThread.lpp ?? void 0,
                      (value2) => {
                        if (parentThread.lpp) {
                          parentThread.lpp.returnCallback(value2);
                          return thread.stopThisScript();
                        } else
                          throw new LppError("useOutsideFunction");
                      },
                      (value2) => {
                        if (parentThread.lpp) {
                          parentThread.lpp.exceptionCallback(value2);
                          return thread.stopThisScript();
                        }
                        this.handleException(value2);
                      }
                    );
                    controller.wait(catchThread).then(() => {
                      resolve(void 0);
                    });
                  }
                );
                controller.wait(tryThread).then(() => {
                  if (!triggered) {
                    resolve(void 0);
                  }
                });
              })
            ),
            thread
          );
        } catch (e) {
          this.handleError(e);
        }
      }
      /**
       * Drops the value of specified expression.
       * @param args Unneccessary argument.
       * @param util Scratch util.
       */
      nop({ value }, util) {
        const { thread } = util;
        this.util = util;
        if (thread.stackClick && thread.atStackTop() && !thread.target.blocks.getBlock(thread.peekStack())?.next && value !== void 0) {
          if (thread.isCompiled) {
            this.vm.runtime.visualReport(thread.peekStack(), value);
          } else {
            return value;
          }
        }
        return void 0;
      }
      /**
       * Handle syntax error.
       * @param e Error object.
       */
      handleError(e) {
        if (e instanceof LppError) {
          const thread = this.util?.thread;
          if (thread) {
            const stack = thread.peekStack();
            if (stack) {
              warnError(
                this.Blockly,
                this.vm,
                this.formatMessage.bind(this),
                e.id,
                stack,
                thread.target.sprite.clones[0].id
              );
              this.vm.runtime.stopAll();
            }
          }
        }
        throw e;
      }
      /**
       * Handle unhandled exceptions.
       * @param e LppException object.
       */
      handleException(e) {
        warnException(this.Blockly, this.vm, this.formatMessage.bind(this), e);
        this.vm.runtime.stopAll();
        throw new Error("lpp: user exception");
      }
      /**
       * Process return value.
       * @param result Result value.
       * @param thread Caller thread.
       * @returns processed value.
       */
      processApplyValue(result, thread) {
        if (result instanceof LppReturn) {
          return result.value;
        } else {
          result.pushStack(
            new LppTraceback2.Block(
              thread.target.sprite.clones[0].id,
              thread.peekStack(),
              thread.lpp ?? void 0
            )
          );
          if (thread.lpp) {
            thread.lpp.exceptionCallback(result);
            return void thread.stopThisScript();
          }
          this.handleException(result);
        }
      }
      /**
       * Get active block instance of specified thread.
       * @param args Block arguments.
       * @param thread Thread.
       * @returns Block instance.
       */
      getActiveBlockInstance(args, thread) {
        const container = thread.target.blocks;
        const id = thread.isCompiled ? thread.peekStack() : container._cache._executeCached[thread.peekStack()]?._ops?.find(
          (v) => args === v._argValues
        )?.id;
        const block = id ? container.getBlock(id) ?? this.vm.runtime.flyoutBlocks.getBlock(id) : void 0;
        if (!block) {
          throw new Error("lpp: cannot get active block");
        }
        return block;
      }
      /**
       * Get mutation of dedicated block.
       * @param args Block arguments.
       * @param thread Thread.
       * @returns mutation object.
       */
      getMutation(block) {
        return block.mutation;
      }
      /**
       * Create a dummy target.
       * @param Target Target constructor.
       * @param blocks Block container.
       * @returns Dummy target.
       */
      createDummyTarget(Target, blocks) {
        const target = new Target(
          {
            blocks,
            name: ""
          },
          this.vm.runtime
        );
        target.id = "";
        const warnFn = () => {
          this.handleError(new LppError("useAfterDispose"));
        };
        for (const key of Reflect.ownKeys(target.constructor.prototype)) {
          if (typeof key === "string" && key.startsWith("set")) {
            Reflect.set(target, key, warnFn);
          }
        }
        Reflect.set(target, "makeClone", warnFn);
        return target;
      }
      /**
       * Process result as soon as possible.
       * @param res Result.
       * @param thread Caller thread.
       * @returns Processed promise or value.
       */
      asap(res, thread) {
        if (!this.util)
          throw new Error("lpp: util used before initialization");
        const controller = new ThreadController(
          this.vm.runtime,
          this.util
        );
        const postProcess = () => {
          controller.step(thread);
        };
        return isPromise(res) ? new PromiseProxy(res, postProcess, postProcess) : res;
      }
      executeScratch(Target, ctx) {
        if (hasMetadata(ctx.fn) && ctx.fn.metadata instanceof ScratchMetadata) {
          const metadata = ctx.fn.metadata;
          let target;
          if (metadata.target)
            target = this.vm.runtime.getTargetById(metadata.target);
          if (!target)
            target = this.createDummyTarget(Target, metadata.blocks[0]);
          const id = metadata.blocks[0].getBlock(metadata.blocks[1])?.inputs.SUBSTACK?.block;
          if (!id)
            return new LppReturn(new LppConstant(null));
          if (!this.util)
            throw new Error("lpp: util used before initialization");
          const controller = new ThreadController(
            this.vm.runtime,
            this.util
          );
          const thread = controller.create(id, target);
          return ImmediatePromise.sync(
            new ImmediatePromise((resolve) => {
              thread.lpp = new LppFunctionContext(
                metadata.closure,
                ctx.self ?? new LppConstant(null),
                (val) => {
                  resolve(val);
                },
                (val) => {
                  resolve(val);
                }
              );
              for (const [key, value] of metadata.signature.entries()) {
                if (key < ctx.args.length)
                  thread.lpp.closure.set(value, ctx.args[key]);
                else
                  thread.lpp.closure.set(value, new LppConstant(null));
              }
              controller.wait(thread).then(() => {
                ;
                thread?.lpp?.returnCallback(
                  new LppReturn(new LppConstant(null))
                );
              });
            })
          );
        }
        return new LppReturn(new LppConstant(null));
      }
      /**
       * Serialize function.
       * @param block Function block instance.
       * @param blocks Blocks instance.
       * @param signature Function signature.
       * @returns LppFunction result.
       */
      static serializeFunction(block, blocks, signature) {
        const info = {
          signature,
          script: serializeBlock(blocks, block),
          block: block.id
        };
        return ffi_exports.fromObject(info);
      }
    }
    if (Scratch2.vm?.runtime) {
      Scratch2.extensions.register(new LppExtension(Scratch2.vm.runtime));
    } else {
      Reflect.set(window, "tempExt", {
        Extension: LppExtension,
        info: {
          name: "lpp.name",
          description: "lpp.desc",
          extensionId: "lpp",
          iconURL: icon_default,
          featured: true,
          disabled: false,
          collaboratorList: [
            {
              collaborator: "\u718A\u8C37 \u51CC",
              collaboratorURL: "https://github.com/FurryR"
            },
            {
              collaborator: "...",
              collaboratorURL: "https://github.com/FurryR/lpp-scratch"
            }
          ]
        },
        // CCW doesn't support languages like ja-jp, so we do not need to add other translations.
        l10n: {
          "zh-cn": {
            "lpp.name": "lpp",
            "lpp.desc": "\u{1F6E0}\uFE0F (\u5B9E\u9A8C\u6027) \u4E00\u95E8\u57FA\u4E8E Scratch \u7684\u9AD8\u7EA7\u7F16\u7A0B\u8BED\u8A00\u3002"
          },
          en: {
            "lpp.name": "lpp",
            "lpp.desc": "\u{1F6E0}\uFE0F (Experimental) A high-level programming language based on Scratch"
          }
        }
      });
    }
  })(Scratch);
})();
