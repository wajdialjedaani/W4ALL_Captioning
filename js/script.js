
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // packages/shared/render/plugins/BaseSiteModules/tram-min.js
  var require_tram_min = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/tram-min.js"() {
      "use strict";
      window.tram = function(a) {
        function b(a2, b2) {
          var c2 = new M.Bare();
          return c2.init(a2, b2);
        }
        function c(a2) {
          return a2.replace(/[A-Z]/g, function(a3) {
            return "-" + a3.toLowerCase();
          });
        }
        function d(a2) {
          var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 & 255, d2 = b2 >> 8 & 255, e2 = 255 & b2;
          return [c2, d2, e2];
        }
        function e(a2, b2, c2) {
          return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
        }
        function f() {
        }
        function g(a2, b2) {
          j("Type warning: Expected: [" + a2 + "] Got: [" + typeof b2 + "] " + b2);
        }
        function h(a2, b2, c2) {
          j("Units do not match [" + a2 + "]: " + b2 + ", " + c2);
        }
        function i(a2, b2, c2) {
          if (void 0 !== b2 && (c2 = b2), void 0 === a2)
            return c2;
          var d2 = c2;
          return $.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10) : _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? d2 : c2;
        }
        function j(a2) {
          U.debug && window && window.console.warn(a2);
        }
        function k(a2) {
          for (var b2 = -1, c2 = a2 ? a2.length : 0, d2 = []; ++b2 < c2; ) {
            var e2 = a2[b2];
            e2 && d2.push(e2);
          }
          return d2;
        }
        var l = function(a2, b2, c2) {
          function d2(a3) {
            return "object" == typeof a3;
          }
          function e2(a3) {
            return "function" == typeof a3;
          }
          function f2() {
          }
          function g2(h2, i2) {
            function j2() {
              var a3 = new k2();
              return e2(a3.init) && a3.init.apply(a3, arguments), a3;
            }
            function k2() {
            }
            i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
            var l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
            return n2.constructor = j2, j2.mixin = function(b3) {
              return k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
            }, j2.open = function(a3) {
              if (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                for (var c3 in l2)
                  b2.call(l2, c3) && (n2[c3] = l2[c3]);
              return e2(n2.init) || (n2.init = h2), j2;
            }, j2.open(i2);
          }
          return g2;
        }("prototype", {}.hasOwnProperty), m = {
          ease: ["ease", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-2.75 * f2 * e2 + 11 * e2 * e2 + -15.5 * f2 + 8 * e2 + 0.25 * a2);
          }],
          "ease-in": ["ease-in", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (-1 * f2 * e2 + 3 * e2 * e2 + -3 * f2 + 2 * e2);
          }],
          "ease-out": ["ease-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (0.3 * f2 * e2 + -1.6 * e2 * e2 + 2.2 * f2 + -1.8 * e2 + 1.9 * a2);
          }],
          "ease-in-out": ["ease-in-out", function(a2, b2, c2, d2) {
            var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
            return b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
          }],
          linear: ["linear", function(a2, b2, c2, d2) {
            return c2 * a2 / d2 + b2;
          }],
          "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 + b2;
          }],
          "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(a2, b2, c2, d2) {
            return -c2 * (a2 /= d2) * (a2 - 2) + b2;
          }],
          "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 + b2 : -c2 / 2 * (--a2 * (a2 - 2) - 1) + b2;
          }],
          "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 + b2;
          }],
          "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
          }],
          "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
          }],
          "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(a2, b2, c2, d2) {
            return -c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 - 1) + b2;
          }],
          "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 + b2 : -c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
          }],
          "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(a2, b2, c2, d2) {
            return c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
          }],
          "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(a2, b2, c2, d2) {
            return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
          }],
          "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
          }],
          "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(a2, b2, c2, d2) {
            return -c2 * Math.cos(a2 / d2 * (Math.PI / 2)) + c2 + b2;
          }],
          "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sin(a2 / d2 * (Math.PI / 2)) + b2;
          }],
          "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(a2, b2, c2, d2) {
            return -c2 / 2 * (Math.cos(Math.PI * a2 / d2) - 1) + b2;
          }],
          "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : c2 * Math.pow(2, 10 * (a2 / d2 - 1)) + b2;
          }],
          "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(a2, b2, c2, d2) {
            return a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
          }],
          "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(a2, b2, c2, d2) {
            return 0 === a2 ? b2 : a2 === d2 ? b2 + c2 : (a2 /= d2 / 2) < 1 ? c2 / 2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2 / 2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
          }],
          "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(a2, b2, c2, d2) {
            return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
          }],
          "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(a2, b2, c2, d2) {
            return c2 * Math.sqrt(1 - (a2 = a2 / d2 - 1) * a2) + b2;
          }],
          "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(a2, b2, c2, d2) {
            return (a2 /= d2 / 2) < 1 ? -c2 / 2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
          }],
          "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
          }],
          "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
          }],
          "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(a2, b2, c2, d2, e2) {
            return void 0 === e2 && (e2 = 1.70158), (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1.525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1.525) + 1) * a2 + e2) + 2) + b2;
          }]
        }, n = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = ["Webkit", "Moz", "O", "ms"], E = ["-webkit-", "-moz-", "-o-", "-ms-"], F = function(a2) {
          if (a2 in C.style)
            return {
              dom: a2,
              css: a2
            };
          var b2, c2, d2 = "", e2 = a2.split("-");
          for (b2 = 0; b2 < e2.length; b2++)
            d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
          for (b2 = 0; b2 < D.length; b2++)
            if (c2 = D[b2] + d2, c2 in C.style)
              return {
                dom: c2,
                css: E[b2] + a2
              };
        }, G = b.support = {
          bind: Function.prototype.bind,
          transform: F("transform"),
          transition: F("transition"),
          backface: F("backface-visibility"),
          timing: F("transition-timing-function")
        };
        if (G.transition) {
          var H = G.timing.dom;
          if (C.style[H] = m["ease-in-back"][0], !C.style[H])
            for (var I in n)
              m[I][0] = n[I];
        }
        var J = b.frame = function() {
          var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
          return a2 && G.bind ? a2.bind(p) : function(a3) {
            p.setTimeout(a3, 16);
          };
        }(), K = b.now = function() {
          var a2 = p.performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
          return b2 && G.bind ? b2.bind(a2) : Date.now || function() {
            return +/* @__PURE__ */ new Date();
          };
        }(), L = l(function(b2) {
          function d2(a2, b3) {
            var c2 = k(("" + a2).split(B)), d3 = c2[0];
            b3 = b3 || {};
            var e3 = Y[d3];
            if (!e3)
              return j("Unsupported property: " + d3);
            if (!b3.weak || !this.props[d3]) {
              var f3 = e3[0], g3 = this.props[d3];
              return g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
            }
          }
          function e2(a2, b3, c2) {
            if (a2) {
              var e3 = typeof a2;
              if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                return this.timer = new S({
                  duration: a2,
                  context: this,
                  complete: h2
                }), void (this.active = true);
              if ("string" == e3 && b3) {
                switch (a2) {
                  case "hide":
                    o2.call(this);
                    break;
                  case "stop":
                    l2.call(this);
                    break;
                  case "redraw":
                    p2.call(this);
                    break;
                  default:
                    d2.call(this, a2, c2 && c2[1]);
                }
                return h2.call(this);
              }
              if ("function" == e3)
                return void a2.call(this, this);
              if ("object" == e3) {
                var f3 = 0;
                u2.call(this, a2, function(a3, b4) {
                  a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                }, function(a3) {
                  "wait" in a3 && (f3 = i(a3.wait, 0));
                }), t2.call(this), f3 > 0 && (this.timer = new S({
                  duration: f3,
                  context: this
                }), this.active = true, b3 && (this.timer.complete = h2));
                var g3 = this, j2 = false, k2 = {};
                J(function() {
                  u2.call(g3, a2, function(a3) {
                    a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                  }), j2 && g3.$el.css(k2);
                });
              }
            }
          }
          function f2(a2) {
            a2 = i(a2, 0), this.active ? this.queue.push({
              options: a2
            }) : (this.timer = new S({
              duration: a2,
              context: this,
              complete: h2
            }), this.active = true);
          }
          function g2(a2) {
            return this.active ? (this.queue.push({
              options: a2,
              args: arguments
            }), void (this.timer.complete = h2)) : j("No active transition timer. Use start() or wait() before then().");
          }
          function h2() {
            if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
              var a2 = this.queue.shift();
              e2.call(this, a2.options, true, a2.args);
            }
          }
          function l2(a2) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = false;
            var b3;
            "string" == typeof a2 ? (b3 = {}, b3[a2] = 1) : b3 = "object" == typeof a2 && null != a2 ? a2 : this.props, u2.call(this, b3, v2), t2.call(this);
          }
          function m2(a2) {
            l2.call(this, a2), u2.call(this, a2, w2, x2);
          }
          function n2(a2) {
            "string" != typeof a2 && (a2 = "block"), this.el.style.display = a2;
          }
          function o2() {
            l2.call(this), this.el.style.display = "none";
          }
          function p2() {
            this.el.offsetHeight;
          }
          function r2() {
            l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
          }
          function t2() {
            var a2, b3, c2 = [];
            this.upstream && c2.push(this.upstream);
            for (a2 in this.props)
              b3 = this.props[a2], b3.active && c2.push(b3.string);
            c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
          }
          function u2(a2, b3, e3) {
            var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
            for (f3 in a2)
              h3 = a2[f3], f3 in Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 in Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
            for (f3 in k2) {
              if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                if (!j2)
                  continue;
                g3 = d2.call(this, f3);
              }
              b3.call(this, g3, h3);
            }
            e3 && i2 && e3.call(this, i2);
          }
          function v2(a2) {
            a2.stop();
          }
          function w2(a2, b3) {
            a2.set(b3);
          }
          function x2(a2) {
            this.$el.css(a2);
          }
          function y2(a2, c2) {
            b2[a2] = function() {
              return this.children ? A2.call(this, c2, arguments) : (this.el && c2.apply(this, arguments), this);
            };
          }
          function A2(a2, b3) {
            var c2, d3 = this.children.length;
            for (c2 = 0; d3 > c2; c2++)
              a2.apply(this.children[c2], b3);
            return this;
          }
          b2.init = function(b3) {
            if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, U.keepInherited && !U.fallback) {
              var c2 = W(this.el, "transition");
              c2 && !z.test(c2) && (this.upstream = c2);
            }
            G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
          }, y2("add", d2), y2("start", e2), y2("wait", f2), y2("then", g2), y2("next", h2), y2("stop", l2), y2("set", m2), y2("show", n2), y2("hide", o2), y2("redraw", p2), y2("destroy", r2);
        }), M = l(L, function(b2) {
          function c2(b3, c3) {
            var d2 = a.data(b3, q) || a.data(b3, q, new L.Bare());
            return d2.el || d2.init(b3), c3 ? d2.start(c3) : d2;
          }
          b2.init = function(b3, d2) {
            var e2 = a(b3);
            if (!e2.length)
              return this;
            if (1 === e2.length)
              return c2(e2[0], d2);
            var f2 = [];
            return e2.each(function(a2, b4) {
              f2.push(c2(b4, d2));
            }), this.children = f2, this;
          };
        }), N = l(function(a2) {
          function b2() {
            var a3 = this.get();
            this.update("auto");
            var b3 = this.get();
            return this.update(a3), b3;
          }
          function c2(a3, b3, c3) {
            return void 0 !== b3 && (c3 = b3), a3 in m ? a3 : c3;
          }
          function d2(a3) {
            var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
            return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var f2 = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          a2.init = function(a3, b3, d3, e2) {
            this.$el = a3, this.el = a3[0];
            var g2 = b3[0];
            d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3[1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2.delay), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || this.unit || U.defaultUnit, this.angle = e2.angle || this.angle || U.defaultAngle, U.fallback || e2.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
          }, a2.set = function(a3) {
            a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
          }, a2.transition = function(a3) {
            this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
          }, a2.fallback = function(a3) {
            var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
            a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
              from: c3,
              to: a3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.get = function() {
            return W(this.el, this.name);
          }, a2.update = function(a3) {
            V(this.el, this.name, a3);
          }, a2.stop = function() {
            (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
            var a3 = this.tween;
            a3 && a3.context && a3.destroy();
          }, a2.convert = function(a3, b3) {
            if ("auto" == a3 && this.auto)
              return a3;
            var c3, e2 = "number" == typeof a3, f3 = "string" == typeof a3;
            switch (b3) {
              case t:
                if (e2)
                  return a3;
                if (f3 && "" === a3.replace(r, ""))
                  return +a3;
                c3 = "number(unitless)";
                break;
              case u:
                if (f3) {
                  if ("" === a3 && this.original)
                    return this.original;
                  if (b3.test(a3))
                    return "#" == a3.charAt(0) && 7 == a3.length ? a3 : d2(a3);
                }
                c3 = "hex or rgb string";
                break;
              case v:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit)";
                break;
              case w:
                if (e2)
                  return a3 + this.unit;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(px) or string(unit or %)";
                break;
              case x:
                if (e2)
                  return a3 + this.angle;
                if (f3 && b3.test(a3))
                  return a3;
                c3 = "number(deg) or string(angle)";
                break;
              case y:
                if (e2)
                  return a3;
                if (f3 && w.test(a3))
                  return a3;
                c3 = "number(unitless) or string(unit or %)";
            }
            return g(c3, a3), a3;
          }, a2.redraw = function() {
            this.el.offsetHeight;
          };
        }), O = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
          };
        }), P = l(N, function(a2, b2) {
          a2.init = function() {
            b2.init.apply(this, arguments), this.animate = this.fallback;
          }, a2.get = function() {
            return this.$el[this.name]();
          }, a2.update = function(a3) {
            this.$el[this.name](a3);
          };
        }), Q = l(N, function(a2, b2) {
          function c2(a3, b3) {
            var c3, d2, e2, f2, g2;
            for (c3 in a3)
              f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
          }
          a2.init = function() {
            b2.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
          }, a2.set = function(a3) {
            c2.call(this, a3, function(a4, b3) {
              this.current[a4] = b3;
            }), V(this.el, this.name, this.style(this.current)), this.redraw();
          }, a2.transition = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var c3, d2 = {};
            for (c3 in this.current)
              d2[c3] = c3 in b3 ? b3[c3] : this.current[c3];
            this.active = true, this.nextStyle = this.style(d2);
          }, a2.fallback = function(a3) {
            var b3 = this.values(a3);
            this.tween = new T({
              current: this.current,
              values: b3,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, a2.update = function() {
            V(this.el, this.name, this.style(this.current));
          }, a2.style = function(a3) {
            var b3, c3 = "";
            for (b3 in a3)
              c3 += b3 + "(" + a3[b3] + ") ";
            return c3;
          }, a2.values = function(a3) {
            var b3, d2 = {};
            return c2.call(this, a3, function(a4, c3, e2) {
              d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("scale") && (b3 = 1), this.current[a4] = this.convert(b3, e2));
            }), d2;
          };
        }), R = l(function(b2) {
          function c2(a2) {
            1 === n2.push(a2) && J(g2);
          }
          function g2() {
            var a2, b3, c3, d2 = n2.length;
            if (d2)
              for (J(g2), b3 = K(), a2 = d2; a2--; )
                c3 = n2[a2], c3 && c3.render(b3);
          }
          function i2(b3) {
            var c3, d2 = a.inArray(b3, n2);
            d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
          }
          function j2(a2) {
            return Math.round(a2 * o2) / o2;
          }
          function k2(a2, b3, c3) {
            return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3[2] - a2[2]));
          }
          var l2 = {
            ease: m.ease[1],
            from: 0,
            to: 1
          };
          b2.init = function(a2) {
            this.duration = a2.duration || 0, this.delay = a2.delay || 0;
            var b3 = a2.ease || l2.ease;
            m[b3] && (b3 = m[b3][1]), "function" != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || f, this.complete = a2.complete || f, this.context = a2.context || this, this.name = a2.name;
            var c3 = a2.from, d2 = a2.to;
            void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay !== false && this.play();
          }, b2.play = function() {
            this.active || (this.start || (this.start = K()), this.active = true, c2(this));
          }, b2.stop = function() {
            this.active && (this.active = false, i2(this));
          }, b2.render = function(a2) {
            var b3, c3 = a2 - this.start;
            if (this.delay) {
              if (c3 <= this.delay)
                return;
              c3 -= this.delay;
            }
            if (c3 < this.duration) {
              var d2 = this.ease(c3, 0, 1, this.duration);
              return b3 = this.startRGB ? k2(this.startRGB, this.endRGB, d2) : j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value);
            }
            b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
          }, b2.format = function(a2, b3) {
            if (b3 += "", a2 += "", "#" == a2.charAt(0))
              return this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
              var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
              c3 !== e2 && h("tween", b3, a2), this.unit = c3;
            }
            b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
          }, b2.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = f;
          };
          var n2 = [], o2 = 1e3;
        }), S = l(R, function(a2) {
          a2.init = function(a3) {
            this.duration = a3.duration || 0, this.complete = a3.complete || f, this.context = a3.context, this.play();
          }, a2.render = function(a3) {
            var b2 = a3 - this.start;
            b2 < this.duration || (this.complete.call(this.context), this.destroy());
          };
        }), T = l(R, function(a2, b2) {
          a2.init = function(a3) {
            this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
            var b3, c2;
            for (b3 in a3.values)
              c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                name: b3,
                from: this.current[b3],
                to: c2,
                duration: a3.duration,
                delay: a3.delay,
                ease: a3.ease,
                autoplay: false
              }));
            this.play();
          }, a2.render = function(a3) {
            var b3, c2, d2 = this.tweens.length, e2 = false;
            for (b3 = d2; b3--; )
              c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
            return e2 ? void (this.update && this.update.call(this.context)) : this.destroy();
          }, a2.destroy = function() {
            if (b2.destroy.call(this), this.tweens) {
              var a3, c2 = this.tweens.length;
              for (a3 = c2; a3--; )
                this.tweens[a3].destroy();
              this.tweens = null, this.current = null;
            }
          };
        }), U = b.config = {
          debug: false,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: false,
          hideBackface: false,
          perspective: "",
          fallback: !G.transition,
          agentTests: []
        };
        b.fallback = function(a2) {
          if (!G.transition)
            return U.fallback = true;
          U.agentTests.push("(" + a2 + ")");
          var b2 = new RegExp(U.agentTests.join("|"), "i");
          U.fallback = b2.test(navigator.userAgent);
        }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
          return new R(a2);
        }, b.delay = function(a2, b2, c2) {
          return new S({
            complete: b2,
            duration: a2,
            context: c2
          });
        }, a.fn.tram = function(a2) {
          return b.call(null, this, a2);
        };
        var V = a.style, W = a.css, X = {
          transform: G.transform && G.transform.css
        }, Y = {
          color: [O, u],
          background: [O, u, "background-color"],
          "outline-color": [O, u],
          "border-color": [O, u],
          "border-top-color": [O, u],
          "border-right-color": [O, u],
          "border-bottom-color": [O, u],
          "border-left-color": [O, u],
          "border-width": [N, v],
          "border-top-width": [N, v],
          "border-right-width": [N, v],
          "border-bottom-width": [N, v],
          "border-left-width": [N, v],
          "border-spacing": [N, v],
          "letter-spacing": [N, v],
          margin: [N, v],
          "margin-top": [N, v],
          "margin-right": [N, v],
          "margin-bottom": [N, v],
          "margin-left": [N, v],
          padding: [N, v],
          "padding-top": [N, v],
          "padding-right": [N, v],
          "padding-bottom": [N, v],
          "padding-left": [N, v],
          "outline-width": [N, v],
          opacity: [N, t],
          top: [N, w],
          right: [N, w],
          bottom: [N, w],
          left: [N, w],
          "font-size": [N, w],
          "text-indent": [N, w],
          "word-spacing": [N, w],
          width: [N, w],
          "min-width": [N, w],
          "max-width": [N, w],
          height: [N, w],
          "min-height": [N, w],
          "max-height": [N, w],
          "line-height": [N, y],
          "scroll-top": [P, t, "scrollTop"],
          "scroll-left": [P, t, "scrollLeft"]
        }, Z = {};
        G.transform && (Y.transform = [Q], Z = {
          x: [w, "translateX"],
          y: [w, "translateY"],
          rotate: [x],
          rotateX: [x],
          rotateY: [x],
          scale: [t],
          scaleX: [t],
          scaleY: [t],
          skew: [x],
          skewX: [x],
          skewY: [x]
        }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
        var $ = /ms/, _ = /s|\./;
        return a.tram = b;
      }(window.jQuery);
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/underscore-custom.js
  var require_underscore_custom = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/underscore-custom.js"(exports, module) {
      "use strict";
      var $ = window.$;
      var tram = require_tram_min() && $.tram;
      module.exports = function() {
        var _ = {};
        _.VERSION = "1.6.0-Webflow";
        var breaker = {};
        var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
        var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
        var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
        var each = _.each = _.forEach = function(obj, iterator, context) {
          if (obj == null)
            return obj;
          if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
          } else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; i < length; i++) {
              if (iterator.call(context, obj[i], i, obj) === breaker)
                return;
            }
          } else {
            var keys = _.keys(obj);
            for (var i = 0, length = keys.length; i < length; i++) {
              if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                return;
            }
          }
          return obj;
        };
        _.map = _.collect = function(obj, iterator, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeMap && obj.map === nativeMap)
            return obj.map(iterator, context);
          each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
          });
          return results;
        };
        _.find = _.detect = function(obj, predicate, context) {
          var result;
          any(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) {
              result = value;
              return true;
            }
          });
          return result;
        };
        _.filter = _.select = function(obj, predicate, context) {
          var results = [];
          if (obj == null)
            return results;
          if (nativeFilter && obj.filter === nativeFilter)
            return obj.filter(predicate, context);
          each(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list))
              results.push(value);
          });
          return results;
        };
        var any = _.some = _.any = function(obj, predicate, context) {
          predicate || (predicate = _.identity);
          var result = false;
          if (obj == null)
            return result;
          if (nativeSome && obj.some === nativeSome)
            return obj.some(predicate, context);
          each(obj, function(value, index, list) {
            if (result || (result = predicate.call(context, value, index, list)))
              return breaker;
          });
          return !!result;
        };
        _.contains = _.include = function(obj, target) {
          if (obj == null)
            return false;
          if (nativeIndexOf && obj.indexOf === nativeIndexOf)
            return obj.indexOf(target) != -1;
          return any(obj, function(value) {
            return value === target;
          });
        };
        _.delay = function(func, wait) {
          var args = slice.call(arguments, 2);
          return setTimeout(function() {
            return func.apply(null, args);
          }, wait);
        };
        _.defer = function(func) {
          return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
        };
        _.throttle = function(func) {
          var wait, args, context;
          return function() {
            if (wait)
              return;
            wait = true;
            args = arguments;
            context = this;
            tram.frame(function() {
              wait = false;
              func.apply(context, args);
            });
          };
        };
        _.debounce = function(func, wait, immediate) {
          var timeout, args, context, timestamp, result;
          var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
              }
            }
          };
          return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
            if (callNow) {
              result = func.apply(context, args);
              context = args = null;
            }
            return result;
          };
        };
        _.defaults = function(obj) {
          if (!_.isObject(obj))
            return obj;
          for (var i = 1, length = arguments.length; i < length; i++) {
            var source = arguments[i];
            for (var prop in source) {
              if (obj[prop] === void 0)
                obj[prop] = source[prop];
            }
          }
          return obj;
        };
        _.keys = function(obj) {
          if (!_.isObject(obj))
            return [];
          if (nativeKeys)
            return nativeKeys(obj);
          var keys = [];
          for (var key in obj)
            if (_.has(obj, key))
              keys.push(key);
          return keys;
        };
        _.has = function(obj, key) {
          return hasOwnProperty.call(obj, key);
        };
        _.isObject = function(obj) {
          return obj === Object(obj);
        };
        _.now = Date.now || function() {
          return (/* @__PURE__ */ new Date()).getTime();
        };
        _.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        };
        var noMatch = /(.)^/;
        var escapes = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
        var escapeChar = function(match) {
          return "\\" + escapes[match];
        };
        var bareIdentifier = /^\s*(\w|\$)+\s*$/;
        _.template = function(text, settings, oldSettings) {
          if (!settings && oldSettings)
            settings = oldSettings;
          settings = _.defaults({}, settings, _.templateSettings);
          var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
          var index = 0;
          var source = "__p+='";
          text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
            index = offset + match.length;
            if (escape) {
              source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
              source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
              source += "';\n" + evaluate + "\n__p+='";
            }
            return match;
          });
          source += "';\n";
          var argument = settings.variable;
          if (argument) {
            if (!bareIdentifier.test(argument))
              throw new Error("variable is not a bare identifier: " + argument);
          } else {
            source = "with(obj||{}){\n" + source + "}\n";
            argument = "obj";
          }
          source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
          var render;
          try {
            render = new Function(settings.variable || "obj", "_", source);
          } catch (e) {
            e.source = source;
            throw e;
          }
          var template = function(data) {
            return render.call(this, data, _);
          };
          template.source = "function(" + argument + "){\n" + source + "}";
          return template;
        };
        return _;
      }();
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-lib.js
  var require_webflow_lib = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-lib.js"(exports, module) {
      "use strict";
      var Webflow = {};
      var modules = {};
      var primary = [];
      var secondary = window.Webflow || [];
      var $ = window.jQuery;
      var $win = $(window);
      var $doc = $(document);
      var isFunction = $.isFunction;
      var _ = Webflow._ = require_underscore_custom();
      var tram = Webflow.tram = require_tram_min() && $.tram;
      var domready = false;
      var destroyed = false;
      tram.config.hideBackface = false;
      tram.config.keepInherited = true;
      Webflow.define = function(name, factory, options) {
        if (modules[name]) {
          unbindModule(modules[name]);
        }
        var instance = modules[name] = factory($, _, options) || {};
        bindModule(instance);
        return instance;
      };
      Webflow.require = function(name) {
        return modules[name];
      };
      function bindModule(module2) {
        if (Webflow.env()) {
          isFunction(module2.design) && $win.on("__wf_design", module2.design);
          isFunction(module2.preview) && $win.on("__wf_preview", module2.preview);
        }
        isFunction(module2.destroy) && $win.on("__wf_destroy", module2.destroy);
        if (module2.ready && isFunction(module2.ready)) {
          addReady(module2);
        }
      }
      function addReady(module2) {
        if (domready) {
          module2.ready();
          return;
        }
        if (_.contains(primary, module2.ready)) {
          return;
        }
        primary.push(module2.ready);
      }
      function unbindModule(module2) {
        isFunction(module2.design) && $win.off("__wf_design", module2.design);
        isFunction(module2.preview) && $win.off("__wf_preview", module2.preview);
        isFunction(module2.destroy) && $win.off("__wf_destroy", module2.destroy);
        if (module2.ready && isFunction(module2.ready)) {
          removeReady(module2);
        }
      }
      function removeReady(module2) {
        primary = _.filter(primary, function(readyFn) {
          return readyFn !== module2.ready;
        });
      }
      Webflow.push = function(ready) {
        if (domready) {
          isFunction(ready) && ready();
          return;
        }
        secondary.push(ready);
      };
      Webflow.env = function(mode) {
        var designFlag = window.__wf_design;
        var inApp = typeof designFlag !== "undefined";
        if (!mode) {
          return inApp;
        }
        if (mode === "design") {
          return inApp && designFlag;
        }
        if (mode === "preview") {
          return inApp && !designFlag;
        }
        if (mode === "slug") {
          return inApp && window.__wf_slug;
        }
        if (mode === "editor") {
          return window.WebflowEditor;
        }
        if (mode === "test") {
          return window.__wf_test;
        }
        if (mode === "frame") {
          return window !== window.top;
        }
      };
      var userAgent = navigator.userAgent.toLowerCase();
      var touch = Webflow.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
      var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
      var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
      Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
      var touchTarget;
      touch && $doc.on("touchstart mousedown", function(evt) {
        touchTarget = evt.target;
      });
      Webflow.validClick = touch ? function(clickTarget) {
        return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
      } : function() {
        return true;
      };
      var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
      var scrollEvents = "scroll.webflow " + resizeEvents;
      Webflow.resize = eventProxy($win, resizeEvents);
      Webflow.scroll = eventProxy($win, scrollEvents);
      Webflow.redraw = eventProxy();
      function eventProxy(target, types) {
        var handlers = [];
        var proxy = {};
        proxy.up = _.throttle(function(evt) {
          _.each(handlers, function(h) {
            h(evt);
          });
        });
        if (target && types) {
          target.on(types, proxy.up);
        }
        proxy.on = function(handler) {
          if (typeof handler !== "function") {
            return;
          }
          if (_.contains(handlers, handler)) {
            return;
          }
          handlers.push(handler);
        };
        proxy.off = function(handler) {
          if (!arguments.length) {
            handlers = [];
            return;
          }
          handlers = _.filter(handlers, function(h) {
            return h !== handler;
          });
        };
        return proxy;
      }
      Webflow.location = function(url) {
        window.location = url;
      };
      if (Webflow.env()) {
        Webflow.location = function() {
        };
      }
      Webflow.ready = function() {
        domready = true;
        if (destroyed) {
          restoreModules();
        } else {
          _.each(primary, callReady);
        }
        _.each(secondary, callReady);
        Webflow.resize.up();
      };
      function callReady(readyFn) {
        isFunction(readyFn) && readyFn();
      }
      function restoreModules() {
        destroyed = false;
        _.each(modules, bindModule);
      }
      var deferLoad;
      Webflow.load = function(handler) {
        deferLoad.then(handler);
      };
      function bindLoad() {
        if (deferLoad) {
          deferLoad.reject();
          $win.off("load", deferLoad.resolve);
        }
        deferLoad = new $.Deferred();
        $win.on("load", deferLoad.resolve);
      }
      Webflow.destroy = function(options) {
        options = options || {};
        destroyed = true;
        $win.triggerHandler("__wf_destroy");
        if (options.domready != null) {
          domready = options.domready;
        }
        _.each(modules, unbindModule);
        Webflow.resize.off();
        Webflow.scroll.off();
        Webflow.redraw.off();
        primary = [];
        secondary = [];
        if (deferLoad.state() === "pending") {
          bindLoad();
        }
      };
      $(Webflow.ready);
      bindLoad();
      module.exports = window.Webflow = Webflow;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-brand.js
  var require_webflow_brand = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-brand.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("brand", module.exports = function($) {
        var api = {};
        var doc = document;
        var $html = $("html");
        var $body = $("body");
        var namespace = ".w-webflow-badge";
        var location = window.location;
        var isPhantom = /PhantomJS/i.test(navigator.userAgent);
        var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        var brandElement;
        api.ready = function() {
          var shouldBrand = $html.attr("data-wf-status");
          var publishedDomain = $html.attr("data-wf-domain") || "";
          if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
            shouldBrand = true;
          }
          if (shouldBrand && !isPhantom) {
            brandElement = brandElement || createBadge();
            ensureBrand();
            setTimeout(ensureBrand, 500);
            $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
          }
        };
        function onFullScreenChange() {
          var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
          $(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
        }
        function createBadge() {
          var $brand = $('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs");
          var $logoArt = $("<img>").attr("src", "../images/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
            marginRight: "4px",
            width: "26px"
          });
          var $logoText = $("<img>").attr("src", "../images/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
          $brand.append($logoArt, $logoText);
          return $brand[0];
        }
        function ensureBrand() {
          var found = $body.children(namespace);
          var match = found.length && found.get(0) === brandElement;
          var inEditor = Webflow.env("editor");
          if (match) {
            if (inEditor) {
              found.remove();
            }
            return;
          }
          if (found.length) {
            found.remove();
          }
          if (!inEditor) {
            $body.append(brandElement);
          }
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-edit.js
  var require_webflow_edit = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-edit.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("edit", module.exports = function($, _, options) {
        options = options || {};
        if (Webflow.env("test") || Webflow.env("frame")) {
          if (!options.fixture && !inCypress()) {
            return {
              exit: 1
            };
          }
        }
        var api = {};
        var $win = $(window);
        var $html = $(document.documentElement);
        var location = document.location;
        var hashchange = "hashchange";
        var loaded;
        var loadEditor = options.load || load;
        var hasLocalStorage = false;
        try {
          hasLocalStorage = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
        } catch (e) {
        }
        if (hasLocalStorage) {
          loadEditor();
        } else if (location.search) {
          if (/[?&](edit)(?:[=&?]|$)/.test(location.search) || /\?edit$/.test(location.href)) {
            loadEditor();
          }
        } else {
          $win.on(hashchange, checkHash).triggerHandler(hashchange);
        }
        function checkHash() {
          if (loaded) {
            return;
          }
          if (/\?edit/.test(location.hash)) {
            loadEditor();
          }
        }
        function load() {
          loaded = true;
          window.WebflowEditor = true;
          $win.off(hashchange, checkHash);
          checkThirdPartyCookieSupport(function(thirdPartyCookiesSupported) {
            $.ajax({
              url: cleanSlashes("https://editor-api.webflow.com/api/editor/view"),
              data: {
                siteId: $html.attr("data-wf-site")
              },
              xhrFields: {
                withCredentials: true
              },
              dataType: "json",
              crossDomain: true,
              success: success(thirdPartyCookiesSupported)
            });
          });
        }
        function success(thirdPartyCookiesSupported) {
          return function(data) {
            if (!data) {
              console.error("Could not load editor data");
              return;
            }
            data.thirdPartyCookiesSupported = thirdPartyCookiesSupported;
            getScript(prefix(data.scriptPath), function() {
              window.WebflowEditor(data);
            });
          };
        }
        function getScript(url, done) {
          $.ajax({
            type: "GET",
            url,
            dataType: "script",
            cache: true
          }).then(done, error);
        }
        function error(jqXHR, textStatus, errorThrown) {
          console.error("Could not load editor script: " + textStatus);
          throw errorThrown;
        }
        function prefix(url) {
          return url.indexOf("//") >= 0 ? url : cleanSlashes("https://editor-api.webflow.com" + url);
        }
        function cleanSlashes(url) {
          return url.replace(/([^:])\/\//g, "$1/");
        }
        function checkThirdPartyCookieSupport(callback) {
          var iframe = window.document.createElement("iframe");
          iframe.src = "https://webflow.com/site/third-party-cookie-check.html";
          iframe.style.display = "none";
          iframe.sandbox = "allow-scripts allow-same-origin";
          var handleMessage = function(event) {
            if (event.data === "WF_third_party_cookies_unsupported") {
              cleanUpCookieCheckerIframe(iframe, handleMessage);
              callback(false);
            } else if (event.data === "WF_third_party_cookies_supported") {
              cleanUpCookieCheckerIframe(iframe, handleMessage);
              callback(true);
            }
          };
          iframe.onerror = function() {
            cleanUpCookieCheckerIframe(iframe, handleMessage);
            callback(false);
          };
          window.addEventListener("message", handleMessage, false);
          window.document.body.appendChild(iframe);
        }
        function cleanUpCookieCheckerIframe(iframe, listener) {
          window.removeEventListener("message", listener, false);
          iframe.remove();
        }
        return api;
      });
      function inCypress() {
        try {
          return window.top.__Cypress__;
        } catch (e) {
          return false;
        }
      }
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js
  var require_webflow_focus_visible = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus-visible.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("focus-visible", module.exports = function() {
        function applyFocusVisiblePolyfill(scope) {
          var hadKeyboardEvent = true;
          var hadFocusVisibleRecently = false;
          var hadFocusVisibleRecentlyTimeout = null;
          var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            "datetime-local": true
          };
          function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
              return true;
            }
            return false;
          }
          function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
              return true;
            }
            if (tagName === "TEXTAREA" && !el.readOnly) {
              return true;
            }
            if (el.isContentEditable) {
              return true;
            }
            return false;
          }
          function addFocusVisibleAttribute(el) {
            if (el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.setAttribute("data-wf-focus-visible", "true");
          }
          function removeFocusVisibleAttribute(el) {
            if (!el.getAttribute("data-wf-focus-visible")) {
              return;
            }
            el.removeAttribute("data-wf-focus-visible");
          }
          function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
              return;
            }
            if (isValidFocusTarget(scope.activeElement)) {
              addFocusVisibleAttribute(scope.activeElement);
            }
            hadKeyboardEvent = true;
          }
          function onPointerDown() {
            hadKeyboardEvent = false;
          }
          function onFocus(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
              addFocusVisibleAttribute(e.target);
            }
          }
          function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
              return;
            }
            if (e.target.hasAttribute("data-wf-focus-visible")) {
              hadFocusVisibleRecently = true;
              window.clearTimeout(hadFocusVisibleRecentlyTimeout);
              hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                hadFocusVisibleRecently = false;
              }, 100);
              removeFocusVisibleAttribute(e.target);
            }
          }
          function onVisibilityChange() {
            if (document.visibilityState === "hidden") {
              if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
              }
              addInitialPointerMoveListeners();
            }
          }
          function addInitialPointerMoveListeners() {
            document.addEventListener("mousemove", onInitialPointerMove);
            document.addEventListener("mousedown", onInitialPointerMove);
            document.addEventListener("mouseup", onInitialPointerMove);
            document.addEventListener("pointermove", onInitialPointerMove);
            document.addEventListener("pointerdown", onInitialPointerMove);
            document.addEventListener("pointerup", onInitialPointerMove);
            document.addEventListener("touchmove", onInitialPointerMove);
            document.addEventListener("touchstart", onInitialPointerMove);
            document.addEventListener("touchend", onInitialPointerMove);
          }
          function removeInitialPointerMoveListeners() {
            document.removeEventListener("mousemove", onInitialPointerMove);
            document.removeEventListener("mousedown", onInitialPointerMove);
            document.removeEventListener("mouseup", onInitialPointerMove);
            document.removeEventListener("pointermove", onInitialPointerMove);
            document.removeEventListener("pointerdown", onInitialPointerMove);
            document.removeEventListener("pointerup", onInitialPointerMove);
            document.removeEventListener("touchmove", onInitialPointerMove);
            document.removeEventListener("touchstart", onInitialPointerMove);
            document.removeEventListener("touchend", onInitialPointerMove);
          }
          function onInitialPointerMove(e) {
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") {
              return;
            }
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
          }
          document.addEventListener("keydown", onKeyDown, true);
          document.addEventListener("mousedown", onPointerDown, true);
          document.addEventListener("pointerdown", onPointerDown, true);
          document.addEventListener("touchstart", onPointerDown, true);
          document.addEventListener("visibilitychange", onVisibilityChange, true);
          addInitialPointerMoveListeners();
          scope.addEventListener("focus", onFocus, true);
          scope.addEventListener("blur", onBlur, true);
        }
        function ready() {
          if (typeof document !== "undefined") {
            try {
              document.querySelector(":focus-visible");
            } catch (e) {
              applyFocusVisiblePolyfill(document);
            }
          }
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-focus.js
  var require_webflow_focus = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-focus.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("focus", module.exports = function() {
        var capturedEvents = [];
        var capturing = false;
        function captureEvent(e) {
          if (capturing) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            capturedEvents.unshift(e);
          }
        }
        function isPolyfilledFocusEvent(e) {
          var el = e.target;
          var tag = el.tagName;
          return /^a$/i.test(tag) && el.href != null || // (A)
          /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
          /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
          !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
          /^audio$/i.test(tag) || // (F)
          /^video$/i.test(tag) && el.controls === true;
        }
        function handler(e) {
          if (isPolyfilledFocusEvent(e)) {
            capturing = true;
            setTimeout(() => {
              capturing = false;
              e.target.focus();
              while (capturedEvents.length > 0) {
                var event = capturedEvents.pop();
                event.target.dispatchEvent(new MouseEvent(event.type, event));
              }
            }, 0);
          }
        }
        function ready() {
          if (typeof document !== "undefined" && document.body.hasAttribute("data-wf-focus-within") && Webflow.env.safari) {
            document.addEventListener("mousedown", handler, true);
            document.addEventListener("mouseup", captureEvent, true);
            document.addEventListener("click", captureEvent, true);
          }
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-links.js
  var require_webflow_links = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-links.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("links", module.exports = function($, _) {
        var api = {};
        var $win = $(window);
        var designer;
        var inApp = Webflow.env();
        var location = window.location;
        var tempLink = document.createElement("a");
        var linkCurrent = "w--current";
        var indexPage = /index\.(html|php)$/;
        var dirList = /\/$/;
        var anchors;
        var slug;
        api.ready = api.design = api.preview = init;
        function init() {
          designer = inApp && Webflow.env("design");
          slug = Webflow.env("slug") || location.pathname || "";
          Webflow.scroll.off(scroll);
          anchors = [];
          var links = document.links;
          for (var i = 0; i < links.length; ++i) {
            select(links[i]);
          }
          if (anchors.length) {
            Webflow.scroll.on(scroll);
            scroll();
          }
        }
        function select(link) {
          if (link.getAttribute("hreflang")) {
            return;
          }
          var href = designer && link.getAttribute("href-disabled") || link.getAttribute("href");
          tempLink.href = href;
          if (href.indexOf(":") >= 0) {
            return;
          }
          var $link = $(link);
          if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
            if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
              return;
            }
            var $section = $(tempLink.hash);
            $section.length && anchors.push({
              link: $link,
              sec: $section,
              active: false
            });
            return;
          }
          if (href === "#" || href === "") {
            return;
          }
          var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
          setClass($link, linkCurrent, match);
        }
        function scroll() {
          var viewTop = $win.scrollTop();
          var viewHeight = $win.height();
          _.each(anchors, function(anchor) {
            if (anchor.link.attr("hreflang")) {
              return;
            }
            var $link = anchor.link;
            var $section = anchor.sec;
            var top = $section.offset().top;
            var height = $section.outerHeight();
            var offset = viewHeight * 0.5;
            var active = $section.is(":visible") && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
            if (anchor.active === active) {
              return;
            }
            anchor.active = active;
            setClass($link, linkCurrent, active);
          });
        }
        function setClass($elem, className, add) {
          var exists = $elem.hasClass(className);
          if (add && exists) {
            return;
          }
          if (!add && !exists) {
            return;
          }
          add ? $elem.addClass(className) : $elem.removeClass(className);
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js
  var require_webflow_scroll = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-scroll.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("scroll", module.exports = function($) {
        var NS_EVENTS = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll"
        };
        var loc = window.location;
        var history = inIframe() ? null : window.history;
        var $win = $(window);
        var $doc = $(document);
        var $body = $(document.body);
        var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
          window.setTimeout(fn, 15);
        };
        var rootTag = Webflow.env("editor") ? ".w-editor-body" : "body";
        var headerSelector = "header, " + rootTag + " > .header, " + rootTag + " > .w-nav:not([data-no-scroll])";
        var emptyHrefSelector = 'a[href="#"]';
        var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ")";
        var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
        var focusStylesEl = document.createElement("style");
        focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
        function inIframe() {
          try {
            return Boolean(window.frameElement);
          } catch (e) {
            return true;
          }
        }
        var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
        function linksToCurrentPage(link) {
          return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
        }
        const reducedMotionMediaQuery = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
        function reducedMotionEnabled() {
          return document.body.getAttribute("data-wf-scroll-motion") === "none" || reducedMotionMediaQuery.matches;
        }
        function setFocusable($el, action) {
          var initialTabindex;
          switch (action) {
            case "add":
              initialTabindex = $el.attr("tabindex");
              if (initialTabindex) {
                $el.attr("data-wf-tabindex-swap", initialTabindex);
              } else {
                $el.attr("tabindex", "-1");
              }
              break;
            case "remove":
              initialTabindex = $el.attr("data-wf-tabindex-swap");
              if (initialTabindex) {
                $el.attr("tabindex", initialTabindex);
                $el.removeAttr("data-wf-tabindex-swap");
              } else {
                $el.removeAttr("tabindex");
              }
              break;
          }
          $el.toggleClass("wf-force-outline-none", action === "add");
        }
        function validateScroll(evt) {
          var target = evt.currentTarget;
          if (
            // Bail if in Designer
            Webflow.env("design") || // Ignore links being used by jQuery mobile
            window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)
          ) {
            return;
          }
          var hash = linksToCurrentPage(target) ? target.hash : "";
          if (hash === "")
            return;
          var $el = $(hash);
          if (!$el.length) {
            return;
          }
          if (evt) {
            evt.preventDefault();
            evt.stopPropagation();
          }
          updateHistory(hash, evt);
          window.setTimeout(function() {
            scroll($el, function setFocus() {
              setFocusable($el, "add");
              $el.get(0).focus({
                preventScroll: true
              });
              setFocusable($el, "remove");
            });
          }, evt ? 0 : 300);
        }
        function updateHistory(hash) {
          if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
          !(Webflow.env.chrome && loc.protocol === "file:")) {
            var oldHash = history.state && history.state.hash;
            if (oldHash !== hash) {
              history.pushState({
                hash
              }, "", hash);
            }
          }
        }
        function scroll($targetEl, cb) {
          var start = $win.scrollTop();
          var end = calculateScrollEndPosition($targetEl);
          if (start === end)
            return;
          var duration = calculateScrollDuration($targetEl, start, end);
          var clock = Date.now();
          var step = function() {
            var elapsed = Date.now() - clock;
            window.scroll(0, getY(start, end, elapsed, duration));
            if (elapsed <= duration) {
              animate(step);
            } else if (typeof cb === "function") {
              cb();
            }
          };
          animate(step);
        }
        function calculateScrollEndPosition($targetEl) {
          var $header = $(headerSelector);
          var offsetY = $header.css("position") === "fixed" ? $header.outerHeight() : 0;
          var end = $targetEl.offset().top - offsetY;
          if ($targetEl.data("scroll") === "mid") {
            var available = $win.height() - offsetY;
            var elHeight = $targetEl.outerHeight();
            if (elHeight < available) {
              end -= Math.round((available - elHeight) / 2);
            }
          }
          return end;
        }
        function calculateScrollDuration($targetEl, start, end) {
          if (reducedMotionEnabled())
            return 0;
          var mult = 1;
          $body.add($targetEl).each(function(_, el) {
            var time = parseFloat(el.getAttribute("data-scroll-time"));
            if (!isNaN(time) && time >= 0) {
              mult = time;
            }
          });
          return (472.143 * Math.log(Math.abs(start - end) + 125) - 2e3) * mult;
        }
        function getY(start, end, elapsed, duration) {
          if (elapsed > duration) {
            return end;
          }
          return start + (end - start) * ease(elapsed / duration);
        }
        function ease(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
        function ready() {
          var {
            WF_CLICK_EMPTY,
            WF_CLICK_SCROLL
          } = NS_EVENTS;
          $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
          $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
            e.preventDefault();
          });
          document.head.insertBefore(focusStylesEl, document.head.firstChild);
        }
        return {
          ready
        };
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-touch.js
  var require_webflow_touch = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-touch.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      Webflow.define("touch", module.exports = function($) {
        var api = {};
        var getSelection = window.getSelection;
        $.event.special.tap = {
          bindType: "click",
          delegateType: "click"
        };
        api.init = function(el) {
          el = typeof el === "string" ? $(el).get(0) : el;
          return el ? new Touch(el) : null;
        };
        function Touch(el) {
          var active = false;
          var useTouch = false;
          var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
          var startX;
          var lastX;
          el.addEventListener("touchstart", start, false);
          el.addEventListener("touchmove", move, false);
          el.addEventListener("touchend", end, false);
          el.addEventListener("touchcancel", cancel, false);
          el.addEventListener("mousedown", start, false);
          el.addEventListener("mousemove", move, false);
          el.addEventListener("mouseup", end, false);
          el.addEventListener("mouseout", cancel, false);
          function start(evt) {
            var touches = evt.touches;
            if (touches && touches.length > 1) {
              return;
            }
            active = true;
            if (touches) {
              useTouch = true;
              startX = touches[0].clientX;
            } else {
              startX = evt.clientX;
            }
            lastX = startX;
          }
          function move(evt) {
            if (!active) {
              return;
            }
            if (useTouch && evt.type === "mousemove") {
              evt.preventDefault();
              evt.stopPropagation();
              return;
            }
            var touches = evt.touches;
            var x = touches ? touches[0].clientX : evt.clientX;
            var velocityX = x - lastX;
            lastX = x;
            if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === "") {
              triggerEvent("swipe", evt, {
                direction: velocityX > 0 ? "right" : "left"
              });
              cancel();
            }
          }
          function end(evt) {
            if (!active) {
              return;
            }
            active = false;
            if (useTouch && evt.type === "mouseup") {
              evt.preventDefault();
              evt.stopPropagation();
              useTouch = false;
              return;
            }
          }
          function cancel() {
            active = false;
          }
          function destroy() {
            el.removeEventListener("touchstart", start, false);
            el.removeEventListener("touchmove", move, false);
            el.removeEventListener("touchend", end, false);
            el.removeEventListener("touchcancel", cancel, false);
            el.removeEventListener("mousedown", start, false);
            el.removeEventListener("mousemove", move, false);
            el.removeEventListener("mouseup", end, false);
            el.removeEventListener("mouseout", cancel, false);
            el = null;
          }
          this.destroy = destroy;
        }
        function triggerEvent(type, evt, data) {
          var newEvent = $.Event(type, {
            originalEvent: evt
          });
          $(evt.target).trigger(newEvent, data);
        }
        api.instance = api.init(document);
        return api;
      });
    }
  });

  // packages/shared/render/plugins/Lightbox/webflow-lightbox.js
  var require_webflow_lightbox = __commonJS({
    "packages/shared/render/plugins/Lightbox/webflow-lightbox.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var CONDITION_INVISIBLE_CLASS = "w-condition-invisible";
      var CONDVIS_SELECTOR = "." + CONDITION_INVISIBLE_CLASS;
      function withoutConditionallyHidden(items) {
        return items.filter(function(item) {
          return !isConditionallyHidden(item);
        });
      }
      function isConditionallyHidden(item) {
        return Boolean(item.$el && item.$el.closest(CONDVIS_SELECTOR).length);
      }
      function getPreviousVisibleIndex(start, items) {
        for (var i = start; i >= 0; i--) {
          if (!isConditionallyHidden(items[i])) {
            return i;
          }
        }
        return -1;
      }
      function getNextVisibleIndex(start, items) {
        for (var i = start; i <= items.length - 1; i++) {
          if (!isConditionallyHidden(items[i])) {
            return i;
          }
        }
        return -1;
      }
      function shouldSetArrowLeftInactive(currentIndex, items) {
        return getPreviousVisibleIndex(currentIndex - 1, items) === -1;
      }
      function shouldSetArrowRightInactive(currentIndex, items) {
        return getNextVisibleIndex(currentIndex + 1, items) === -1;
      }
      function setAriaLabelIfEmpty($element, labelText) {
        if (!$element.attr("aria-label")) {
          $element.attr("aria-label", labelText);
        }
      }
      function createLightbox(window2, document2, $, container) {
        var tram = $.tram;
        var isArray = Array.isArray;
        var namespace = "w-lightbox";
        var prefix = namespace + "-";
        var prefixRegex = /(^|\s+)/g;
        var items = [];
        var currentIndex;
        var $refs;
        var spinner;
        var resetVisibilityState = [];
        function lightbox(thing, index) {
          items = isArray(thing) ? thing : [thing];
          if (!$refs) {
            lightbox.build();
          }
          if (withoutConditionallyHidden(items).length > 1) {
            $refs.items = $refs.empty;
            items.forEach(function(item, idx) {
              var $thumbnail = dom("thumbnail");
              var $item = dom("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append($thumbnail);
              setAriaLabelIfEmpty($item, `show item ${idx + 1} of ${items.length}`);
              if (isConditionallyHidden(item)) {
                $item.addClass(CONDITION_INVISIBLE_CLASS);
              }
              $refs.items = $refs.items.add($item);
              loadImage(item.thumbnailUrl || item.url, function($image) {
                if ($image.prop("width") > $image.prop("height")) {
                  addClass($image, "wide");
                } else {
                  addClass($image, "tall");
                }
                $thumbnail.append(addClass($image, "thumbnail-image"));
              });
            });
            $refs.strip.empty().append($refs.items);
            addClass($refs.content, "group");
          }
          tram(
            // Focus the lightbox to receive keyboard events.
            removeClass($refs.lightbox, "hide").trigger("focus")
          ).add("opacity .3s").start({
            opacity: 1
          });
          addClass($refs.html, "noscroll");
          return lightbox.show(index || 0);
        }
        lightbox.build = function() {
          lightbox.destroy();
          $refs = {
            html: $(document2.documentElement),
            // Empty jQuery object can be used to build new ones using `.add`.
            empty: $()
          };
          $refs.arrowLeft = dom("control left inactive").attr("role", "button").attr("aria-hidden", true).attr("aria-controls", "w-lightbox-view");
          $refs.arrowRight = dom("control right inactive").attr("role", "button").attr("aria-hidden", true).attr("aria-controls", "w-lightbox-view");
          $refs.close = dom("control close").attr("role", "button");
          setAriaLabelIfEmpty($refs.arrowLeft, "previous image");
          setAriaLabelIfEmpty($refs.arrowRight, "next image");
          setAriaLabelIfEmpty($refs.close, "close lightbox");
          $refs.spinner = dom("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", false).attr("aria-busy", true).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image");
          $refs.strip = dom("strip").attr("role", "tablist");
          spinner = new Spinner($refs.spinner, prefixed("hide"));
          $refs.content = dom("content").append($refs.spinner, $refs.arrowLeft, $refs.arrowRight, $refs.close);
          $refs.container = dom("container").append($refs.content, $refs.strip);
          $refs.lightbox = dom("backdrop hide").append($refs.container);
          $refs.strip.on("click", selector("item"), itemTapHandler);
          $refs.content.on("swipe", swipeHandler).on("click", selector("left"), handlerPrev).on("click", selector("right"), handlerNext).on("click", selector("close"), handlerHide).on("click", selector("image, caption"), handlerNext);
          $refs.container.on("click", selector("view"), handlerHide).on("dragstart", selector("img"), preventDefault);
          $refs.lightbox.on("keydown", keyHandler).on("focusin", focusThis);
          $(container).append($refs.lightbox);
          return lightbox;
        };
        lightbox.destroy = function() {
          if (!$refs) {
            return;
          }
          removeClass($refs.html, "noscroll");
          $refs.lightbox.remove();
          $refs = void 0;
        };
        lightbox.show = function(index) {
          if (index === currentIndex) {
            return;
          }
          var item = items[index];
          if (!item) {
            return lightbox.hide();
          }
          if (isConditionallyHidden(item)) {
            if (index < currentIndex) {
              var previousVisibleIndex = getPreviousVisibleIndex(index - 1, items);
              index = previousVisibleIndex > -1 ? previousVisibleIndex : index;
            } else {
              var nextVisibleIndex = getNextVisibleIndex(index + 1, items);
              index = nextVisibleIndex > -1 ? nextVisibleIndex : index;
            }
            item = items[index];
          }
          var previousIndex = currentIndex;
          currentIndex = index;
          $refs.spinner.attr("aria-hidden", false).attr("aria-busy", true).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image");
          spinner.show();
          var url = item.html && svgDataUri(item.width, item.height) || item.url;
          loadImage(url, function($image) {
            if (index !== currentIndex) {
              return;
            }
            var $figure = dom("figure", "figure").append(addClass($image, "image"));
            var $frame = dom("frame").append($figure);
            var $newView = dom("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append($frame);
            var $html;
            var isIframe;
            if (item.html) {
              $html = $(item.html);
              isIframe = $html.is("iframe");
              if (isIframe) {
                $html.on("load", transitionToNewView);
              }
              $figure.append(addClass($html, "embed"));
            }
            if (item.caption) {
              $figure.append(dom("caption", "figcaption").text(item.caption));
            }
            $refs.spinner.before($newView);
            if (!isIframe) {
              transitionToNewView();
            }
            function transitionToNewView() {
              $refs.spinner.attr("aria-hidden", true).attr("aria-busy", false).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image");
              spinner.hide();
              if (index !== currentIndex) {
                $newView.remove();
                return;
              }
              const shouldHideLeftArrow = shouldSetArrowLeftInactive(index, items);
              toggleClass($refs.arrowLeft, "inactive", shouldHideLeftArrow);
              toggleHidden($refs.arrowLeft, shouldHideLeftArrow);
              if (shouldHideLeftArrow && $refs.arrowLeft.is(":focus")) {
                $refs.arrowRight.focus();
              }
              const shouldHideRightArrow = shouldSetArrowRightInactive(index, items);
              toggleClass($refs.arrowRight, "inactive", shouldHideRightArrow);
              toggleHidden($refs.arrowRight, shouldHideRightArrow);
              if (shouldHideRightArrow && $refs.arrowRight.is(":focus")) {
                $refs.arrowLeft.focus();
              }
              if ($refs.view) {
                tram($refs.view).add("opacity .3s").start({
                  opacity: 0
                }).then(remover($refs.view));
                tram($newView).add("opacity .3s").add("transform .3s").set({
                  x: index > previousIndex ? "80px" : "-80px"
                }).start({
                  opacity: 1,
                  x: 0
                });
              } else {
                $newView.css("opacity", 1);
              }
              $refs.view = $newView;
              $refs.view.prop("tabIndex", 0);
              if ($refs.items) {
                removeClass($refs.items, "active");
                $refs.items.removeAttr("aria-selected");
                var $activeThumb = $refs.items.eq(index);
                addClass($activeThumb, "active");
                $activeThumb.attr("aria-selected", true);
                maybeScroll($activeThumb);
              }
            }
          });
          $refs.close.prop("tabIndex", 0);
          $(":focus").addClass("active-lightbox");
          if (resetVisibilityState.length === 0) {
            $("body").children().each(function() {
              if ($(this).hasClass("w-lightbox-backdrop") || $(this).is("script")) {
                return;
              }
              resetVisibilityState.push({
                node: $(this),
                hidden: $(this).attr("aria-hidden"),
                tabIndex: $(this).attr("tabIndex")
              });
              $(this).attr("aria-hidden", true).attr("tabIndex", -1);
            });
            $refs.close.focus();
          }
          return lightbox;
        };
        lightbox.hide = function() {
          tram($refs.lightbox).add("opacity .3s").start({
            opacity: 0
          }).then(hideLightbox);
          return lightbox;
        };
        lightbox.prev = function() {
          var previousVisibleIndex = getPreviousVisibleIndex(currentIndex - 1, items);
          if (previousVisibleIndex > -1) {
            lightbox.show(previousVisibleIndex);
          }
        };
        lightbox.next = function() {
          var nextVisibleIndex = getNextVisibleIndex(currentIndex + 1, items);
          if (nextVisibleIndex > -1) {
            lightbox.show(nextVisibleIndex);
          }
        };
        function createHandler(action) {
          return function(event) {
            if (this !== event.target) {
              return;
            }
            event.stopPropagation();
            event.preventDefault();
            action();
          };
        }
        var handlerPrev = createHandler(lightbox.prev);
        var handlerNext = createHandler(lightbox.next);
        var handlerHide = createHandler(lightbox.hide);
        var itemTapHandler = function(event) {
          var index = $(this).index();
          event.preventDefault();
          lightbox.show(index);
        };
        var swipeHandler = function(event, data) {
          event.preventDefault();
          if (data.direction === "left") {
            lightbox.next();
          } else if (data.direction === "right") {
            lightbox.prev();
          }
        };
        var focusThis = function() {
          this.focus();
        };
        function preventDefault(event) {
          event.preventDefault();
        }
        function keyHandler(event) {
          var keyCode = event.keyCode;
          if (keyCode === 27 || checkForFocusTrigger(keyCode, "close")) {
            lightbox.hide();
          } else if (keyCode === 37 || checkForFocusTrigger(keyCode, "left")) {
            lightbox.prev();
          } else if (keyCode === 39 || checkForFocusTrigger(keyCode, "right")) {
            lightbox.next();
          } else if (checkForFocusTrigger(keyCode, "item")) {
            $(":focus").click();
          }
        }
        function checkForFocusTrigger(keyCode, classMatch) {
          if (keyCode !== 13 && keyCode !== 32) {
            return false;
          }
          var currentElementClasses = $(":focus").attr("class");
          var classToFind = prefixed(classMatch).trim();
          return currentElementClasses.includes(classToFind);
        }
        function hideLightbox() {
          if ($refs) {
            $refs.strip.scrollLeft(0).empty();
            removeClass($refs.html, "noscroll");
            addClass($refs.lightbox, "hide");
            $refs.view && $refs.view.remove();
            removeClass($refs.content, "group");
            addClass($refs.arrowLeft, "inactive");
            addClass($refs.arrowRight, "inactive");
            currentIndex = $refs.view = void 0;
            resetVisibilityState.forEach(function(visibilityState) {
              var node = visibilityState.node;
              if (!node) {
                return;
              }
              if (visibilityState.hidden) {
                node.attr("aria-hidden", visibilityState.hidden);
              } else {
                node.removeAttr("aria-hidden");
              }
              if (visibilityState.tabIndex) {
                node.attr("tabIndex", visibilityState.tabIndex);
              } else {
                node.removeAttr("tabIndex");
              }
            });
            resetVisibilityState = [];
            $(".active-lightbox").removeClass("active-lightbox").focus();
          }
        }
        function loadImage(url, callback) {
          var $image = dom("img", "img");
          $image.one("load", function() {
            callback($image);
          });
          $image.attr("src", url);
          return $image;
        }
        function remover($element) {
          return function() {
            $element.remove();
          };
        }
        function maybeScroll($item) {
          var itemElement = $item.get(0);
          var stripElement = $refs.strip.get(0);
          var itemLeft = itemElement.offsetLeft;
          var itemWidth = itemElement.clientWidth;
          var stripScrollLeft = stripElement.scrollLeft;
          var stripWidth = stripElement.clientWidth;
          var stripScrollLeftMax = stripElement.scrollWidth - stripWidth;
          var newScrollLeft;
          if (itemLeft < stripScrollLeft) {
            newScrollLeft = Math.max(0, itemLeft + itemWidth - stripWidth);
          } else if (itemLeft + itemWidth > stripWidth + stripScrollLeft) {
            newScrollLeft = Math.min(itemLeft, stripScrollLeftMax);
          }
          if (newScrollLeft != null) {
            tram($refs.strip).add("scroll-left 500ms").start({
              "scroll-left": newScrollLeft
            });
          }
        }
        function Spinner($spinner, className, delay) {
          this.$element = $spinner;
          this.className = className;
          this.delay = delay || 200;
          this.hide();
        }
        Spinner.prototype.show = function() {
          var spinner2 = this;
          if (spinner2.timeoutId) {
            return;
          }
          spinner2.timeoutId = setTimeout(function() {
            spinner2.$element.removeClass(spinner2.className);
            delete spinner2.timeoutId;
          }, spinner2.delay);
        };
        Spinner.prototype.hide = function() {
          var spinner2 = this;
          if (spinner2.timeoutId) {
            clearTimeout(spinner2.timeoutId);
            delete spinner2.timeoutId;
            return;
          }
          spinner2.$element.addClass(spinner2.className);
        };
        function prefixed(string, isSelector) {
          return string.replace(prefixRegex, (isSelector ? " ." : " ") + prefix);
        }
        function selector(string) {
          return prefixed(string, true);
        }
        function addClass($element, className) {
          return $element.addClass(prefixed(className));
        }
        function removeClass($element, className) {
          return $element.removeClass(prefixed(className));
        }
        function toggleClass($element, className, shouldAdd) {
          return $element.toggleClass(prefixed(className), shouldAdd);
        }
        function toggleHidden($element, isHidden) {
          return $element.attr("aria-hidden", isHidden).attr("tabIndex", isHidden ? -1 : 0);
        }
        function dom(className, tag) {
          return addClass($(document2.createElement(tag || "div")), className);
        }
        function svgDataUri(width, height) {
          var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '"/>';
          return "data:image/svg+xml;charset=utf-8," + encodeURI(svg);
        }
        (function() {
          var ua = window2.navigator.userAgent;
          var iOSRegex = /(iPhone|iPad|iPod);[^OS]*OS (\d)/;
          var iOSMatches = ua.match(iOSRegex);
          var android = ua.indexOf("Android ") > -1 && ua.indexOf("Chrome") === -1;
          if (!android && (!iOSMatches || iOSMatches[2] > 7)) {
            return;
          }
          var styleNode = document2.createElement("style");
          document2.head.appendChild(styleNode);
          window2.addEventListener("resize", refresh, true);
          function refresh() {
            var vh = window2.innerHeight;
            var vw = window2.innerWidth;
            var content = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + vh + "px}.w-lightbox-view {width:" + vw + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + 0.86 * vh + "px}.w-lightbox-image {max-width:" + vw + "px;max-height:" + vh + "px}.w-lightbox-group .w-lightbox-image {max-height:" + 0.86 * vh + "px}.w-lightbox-strip {padding: 0 " + 0.01 * vh + "px}.w-lightbox-item {width:" + 0.1 * vh + "px;padding:" + 0.02 * vh + "px " + 0.01 * vh + "px}.w-lightbox-thumbnail {height:" + 0.1 * vh + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + 0.96 * vh + "px}.w-lightbox-content {margin-top:" + 0.02 * vh + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + 0.84 * vh + "px}.w-lightbox-image {max-width:" + 0.96 * vw + "px;max-height:" + 0.96 * vh + "px}.w-lightbox-group .w-lightbox-image {max-width:" + 0.823 * vw + "px;max-height:" + 0.84 * vh + "px}}";
            styleNode.textContent = content;
          }
          refresh();
        })();
        return lightbox;
      }
      Webflow.define("lightbox", module.exports = function($) {
        var api = {};
        var inApp = Webflow.env();
        var lightbox = createLightbox(window, document, $, inApp ? "#lightbox-mountpoint" : "body");
        var $doc = $(document);
        var $lightboxes;
        var designer;
        var namespace = ".w-lightbox";
        var groups;
        api.ready = api.design = api.preview = init;
        function init() {
          designer = inApp && Webflow.env("design");
          lightbox.destroy();
          groups = {};
          $lightboxes = $doc.find(namespace);
          $lightboxes.webflowLightBox();
          $lightboxes.each(function() {
            setAriaLabelIfEmpty($(this), "open lightbox");
            $(this).attr("aria-haspopup", "dialog");
          });
        }
        jQuery.fn.extend({
          webflowLightBox: function() {
            var $el = this;
            $.each($el, function(i, el) {
              var data = $.data(el, namespace);
              if (!data) {
                data = $.data(el, namespace, {
                  el: $(el),
                  mode: "images",
                  images: [],
                  embed: ""
                });
              }
              data.el.off(namespace);
              configure(data);
              if (designer) {
                data.el.on("setting" + namespace, configure.bind(null, data));
              } else {
                data.el.on("click" + namespace, clickHandler(data)).on("click" + namespace, function(e) {
                  e.preventDefault();
                });
              }
            });
          }
        });
        function configure(data) {
          var json = data.el.children(".w-json").html();
          var groupName;
          var groupItems;
          if (!json) {
            data.items = [];
            return;
          }
          try {
            json = JSON.parse(json);
          } catch (e) {
            console.error("Malformed lightbox JSON configuration.", e);
          }
          supportOldLightboxJson(json);
          json.items.forEach(function(item) {
            item.$el = data.el;
          });
          groupName = json.group;
          if (groupName) {
            groupItems = groups[groupName];
            if (!groupItems) {
              groupItems = groups[groupName] = [];
            }
            data.items = groupItems;
            if (json.items.length) {
              data.index = groupItems.length;
              groupItems.push.apply(groupItems, json.items);
            }
          } else {
            data.items = json.items;
            data.index = 0;
          }
        }
        function clickHandler(data) {
          return function() {
            data.items.length && lightbox(data.items, data.index || 0);
          };
        }
        function supportOldLightboxJson(data) {
          if (data.images) {
            data.images.forEach(function(item) {
              item.type = "image";
            });
            data.items = data.images;
          }
          if (data.embed) {
            data.embed.type = "video";
            data.items = [data.embed];
          }
          if (data.groupId) {
            data.group = data.groupId;
          }
        }
        return api;
      });
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js
  var require_webflow_ix_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix-events.js"(exports, module) {
      "use strict";
      var $ = window.jQuery;
      var api = {};
      var eventQueue = [];
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          el.__wf_intro = null;
        },
        intro: function(i, el) {
          if (el.__wf_intro) {
            return;
          }
          el.__wf_intro = true;
          $(el).triggerHandler(api.types.INTRO);
        },
        outro: function(i, el) {
          if (!el.__wf_intro) {
            return;
          }
          el.__wf_intro = null;
          $(el).triggerHandler(api.types.OUTRO);
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      api.init = function() {
        var count = eventQueue.length;
        for (var i = 0; i < count; i++) {
          var memo = eventQueue[i];
          memo[0](0, memo[1]);
        }
        eventQueue = [];
        $.extend(api.triggers, eventTriggers);
      };
      api.async = function() {
        for (var key in eventTriggers) {
          var func = eventTriggers[key];
          if (!eventTriggers.hasOwnProperty(key)) {
            continue;
          }
          api.triggers[key] = function(i, el) {
            eventQueue.push([func, el]);
          };
        }
      };
      api.async();
      module.exports = api;
    }
  });

  // packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js
  var require_webflow_ix2_events = __commonJS({
    "packages/shared/render/plugins/BaseSiteModules/webflow-ix2-events.js"(exports, module) {
      "use strict";
      var IXEvents = require_webflow_ix_events();
      function dispatchCustomEvent(element, eventName) {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent(eventName, true, true, null);
        element.dispatchEvent(event);
      }
      var $ = window.jQuery;
      var api = {};
      var namespace = ".w-ix";
      var eventTriggers = {
        reset: function(i, el) {
          IXEvents.triggers.reset(i, el);
        },
        intro: function(i, el) {
          IXEvents.triggers.intro(i, el);
          dispatchCustomEvent(el, "COMPONENT_ACTIVE");
        },
        outro: function(i, el) {
          IXEvents.triggers.outro(i, el);
          dispatchCustomEvent(el, "COMPONENT_INACTIVE");
        }
      };
      api.triggers = {};
      api.types = {
        INTRO: "w-ix-intro" + namespace,
        OUTRO: "w-ix-outro" + namespace
      };
      $.extend(api.triggers, eventTriggers);
      module.exports = api;
    }
  });

  // packages/shared/render/plugins/Navbar/webflow-navbar.js
  var require_webflow_navbar = __commonJS({
    "packages/shared/render/plugins/Navbar/webflow-navbar.js"(exports, module) {
      "use strict";
      var Webflow = require_webflow_lib();
      var IXEvents = require_webflow_ix2_events();
      var KEY_CODES = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };
      Webflow.define("navbar", module.exports = function($, _) {
        var api = {};
        var tram = $.tram;
        var $win = $(window);
        var $doc = $(document);
        var debounce = _.debounce;
        var $body;
        var $navbars;
        var designer;
        var inEditor;
        var inApp = Webflow.env();
        var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
        var namespace = ".w-nav";
        var navbarOpenedButton = "w--open";
        var navbarOpenedDropdown = "w--nav-dropdown-open";
        var navbarOpenedDropdownToggle = "w--nav-dropdown-toggle-open";
        var navbarOpenedDropdownList = "w--nav-dropdown-list-open";
        var navbarOpenedLink = "w--nav-link-open";
        var ix = IXEvents.triggers;
        var menuSibling = $();
        api.ready = api.design = api.preview = init;
        api.destroy = function() {
          menuSibling = $();
          removeListeners();
          if ($navbars && $navbars.length) {
            $navbars.each(teardown);
          }
        };
        function init() {
          designer = inApp && Webflow.env("design");
          inEditor = Webflow.env("editor");
          $body = $(document.body);
          $navbars = $doc.find(namespace);
          if (!$navbars.length) {
            return;
          }
          $navbars.each(build);
          removeListeners();
          addListeners();
        }
        function removeListeners() {
          Webflow.resize.off(resizeAll);
        }
        function addListeners() {
          Webflow.resize.on(resizeAll);
        }
        function resizeAll() {
          $navbars.each(resize);
        }
        function build(i, el) {
          var $el = $(el);
          var data = $.data(el, namespace);
          if (!data) {
            data = $.data(el, namespace, {
              open: false,
              el: $el,
              config: {},
              selectedIdx: -1
            });
          }
          data.menu = $el.find(".w-nav-menu");
          data.links = data.menu.find(".w-nav-link");
          data.dropdowns = data.menu.find(".w-dropdown");
          data.dropdownToggle = data.menu.find(".w-dropdown-toggle");
          data.dropdownList = data.menu.find(".w-dropdown-list");
          data.button = $el.find(".w-nav-button");
          data.container = $el.find(".w-container");
          data.overlayContainerId = "w-nav-overlay-" + i;
          data.outside = outside(data);
          var navBrandLink = $el.find(".w-nav-brand");
          if (navBrandLink && navBrandLink.attr("href") === "/" && navBrandLink.attr("aria-label") == null) {
            navBrandLink.attr("aria-label", "home");
          }
          data.button.attr("style", "-webkit-user-select: text;");
          if (data.button.attr("aria-label") == null) {
            data.button.attr("aria-label", "menu");
          }
          data.button.attr("role", "button");
          data.button.attr("tabindex", "0");
          data.button.attr("aria-controls", data.overlayContainerId);
          data.button.attr("aria-haspopup", "menu");
          data.button.attr("aria-expanded", "false");
          data.el.off(namespace);
          data.button.off(namespace);
          data.menu.off(namespace);
          configure(data);
          if (designer) {
            removeOverlay(data);
            data.el.on("setting" + namespace, handler(data));
          } else {
            addOverlay(data);
            data.button.on("click" + namespace, toggle(data));
            data.menu.on("click" + namespace, "a", navigate(data));
            data.button.on("keydown" + namespace, makeToggleButtonKeyboardHandler(data));
            data.el.on("keydown" + namespace, makeLinksKeyboardHandler(data));
          }
          resize(i, el);
        }
        function teardown(i, el) {
          var data = $.data(el, namespace);
          if (data) {
            removeOverlay(data);
            $.removeData(el, namespace);
          }
        }
        function removeOverlay(data) {
          if (!data.overlay) {
            return;
          }
          close(data, true);
          data.overlay.remove();
          data.overlay = null;
        }
        function addOverlay(data) {
          if (data.overlay) {
            return;
          }
          data.overlay = $(overlay).appendTo(data.el);
          data.overlay.attr("id", data.overlayContainerId);
          data.parent = data.menu.parent();
          close(data, true);
        }
        function configure(data) {
          var config = {};
          var old = data.config || {};
          var animation = config.animation = data.el.attr("data-animation") || "default";
          config.animOver = /^over/.test(animation);
          config.animDirect = /left$/.test(animation) ? -1 : 1;
          if (old.animation !== animation) {
            data.open && _.defer(reopen, data);
          }
          config.easing = data.el.attr("data-easing") || "ease";
          config.easing2 = data.el.attr("data-easing2") || "ease";
          var duration = data.el.attr("data-duration");
          config.duration = duration != null ? Number(duration) : 400;
          config.docHeight = data.el.attr("data-doc-height");
          data.config = config;
        }
        function handler(data) {
          return function(evt, options) {
            options = options || {};
            var winWidth = $win.width();
            configure(data);
            options.open === true && open(data, true);
            options.open === false && close(data, true);
            data.open && _.defer(function() {
              if (winWidth !== $win.width()) {
                reopen(data);
              }
            });
          };
        }
        function makeToggleButtonKeyboardHandler(data) {
          return function(evt) {
            switch (evt.keyCode) {
              case KEY_CODES.SPACE:
              case KEY_CODES.ENTER: {
                toggle(data)();
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ESCAPE: {
                close(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_RIGHT:
              case KEY_CODES.ARROW_DOWN:
              case KEY_CODES.HOME:
              case KEY_CODES.END: {
                if (!data.open) {
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                if (evt.keyCode === KEY_CODES.END) {
                  data.selectedIdx = data.links.length - 1;
                } else {
                  data.selectedIdx = 0;
                }
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
            }
          };
        }
        function makeLinksKeyboardHandler(data) {
          return function(evt) {
            if (!data.open) {
              return;
            }
            data.selectedIdx = data.links.index(document.activeElement);
            switch (evt.keyCode) {
              case KEY_CODES.HOME:
              case KEY_CODES.END: {
                if (evt.keyCode === KEY_CODES.END) {
                  data.selectedIdx = data.links.length - 1;
                } else {
                  data.selectedIdx = 0;
                }
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ESCAPE: {
                close(data);
                data.button.focus();
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_LEFT:
              case KEY_CODES.ARROW_UP: {
                data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
              case KEY_CODES.ARROW_RIGHT:
              case KEY_CODES.ARROW_DOWN: {
                data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                focusSelectedLink(data);
                evt.preventDefault();
                return evt.stopPropagation();
              }
            }
          };
        }
        function focusSelectedLink(data) {
          if (data.links[data.selectedIdx]) {
            var selectedElement = data.links[data.selectedIdx];
            selectedElement.focus();
            navigate(selectedElement);
          }
        }
        function reopen(data) {
          if (!data.open) {
            return;
          }
          close(data, true);
          open(data, true);
        }
        function toggle(data) {
          return debounce(function() {
            data.open ? close(data) : open(data);
          });
        }
        function navigate(data) {
          return function(evt) {
            var link = $(this);
            var href = link.attr("href");
            if (!Webflow.validClick(evt.currentTarget)) {
              evt.preventDefault();
              return;
            }
            if (href && href.indexOf("#") === 0 && data.open) {
              close(data);
            }
          };
        }
        function outside(data) {
          if (data.outside) {
            $doc.off("click" + namespace, data.outside);
          }
          return function(evt) {
            var $target = $(evt.target);
            if (inEditor && $target.closest(".w-editor-bem-EditorOverlay").length) {
              return;
            }
            outsideDebounced(data, $target);
          };
        }
        var outsideDebounced = debounce(function(data, $target) {
          if (!data.open) {
            return;
          }
          var menu = $target.closest(".w-nav-menu");
          if (!data.menu.is(menu)) {
            close(data);
          }
        });
        function resize(i, el) {
          var data = $.data(el, namespace);
          var collapsed = data.collapsed = data.button.css("display") !== "none";
          if (data.open && !collapsed && !designer) {
            close(data, true);
          }
          if (data.container.length) {
            var updateEachMax = updateMax(data);
            data.links.each(updateEachMax);
            data.dropdowns.each(updateEachMax);
          }
          if (data.open) {
            setOverlayHeight(data);
          }
        }
        var maxWidth = "max-width";
        function updateMax(data) {
          var containMax = data.container.css(maxWidth);
          if (containMax === "none") {
            containMax = "";
          }
          return function(i, link) {
            link = $(link);
            link.css(maxWidth, "");
            if (link.css(maxWidth) === "none") {
              link.css(maxWidth, containMax);
            }
          };
        }
        function addMenuOpen(i, el) {
          el.setAttribute("data-nav-menu-open", "");
        }
        function removeMenuOpen(i, el) {
          el.removeAttribute("data-nav-menu-open");
        }
        function open(data, immediate) {
          if (data.open) {
            return;
          }
          data.open = true;
          data.menu.each(addMenuOpen);
          data.links.addClass(navbarOpenedLink);
          data.dropdowns.addClass(navbarOpenedDropdown);
          data.dropdownToggle.addClass(navbarOpenedDropdownToggle);
          data.dropdownList.addClass(navbarOpenedDropdownList);
          data.button.addClass(navbarOpenedButton);
          var config = data.config;
          var animation = config.animation;
          if (animation === "none" || !tram.support.transform || config.duration <= 0) {
            immediate = true;
          }
          var bodyHeight = setOverlayHeight(data);
          var menuHeight = data.menu.outerHeight(true);
          var menuWidth = data.menu.outerWidth(true);
          var navHeight = data.el.height();
          var navbarEl = data.el[0];
          resize(0, navbarEl);
          ix.intro(0, navbarEl);
          Webflow.redraw.up();
          if (!designer) {
            $doc.on("click" + namespace, data.outside);
          }
          if (immediate) {
            complete();
            return;
          }
          var transConfig = "transform " + config.duration + "ms " + config.easing;
          if (data.overlay) {
            menuSibling = data.menu.prev();
            data.overlay.show().append(data.menu);
          }
          if (config.animOver) {
            tram(data.menu).add(transConfig).set({
              x: config.animDirect * menuWidth,
              height: bodyHeight
            }).start({
              x: 0
            }).then(complete);
            data.overlay && data.overlay.width(menuWidth);
            return;
          }
          var offsetY = navHeight + menuHeight;
          tram(data.menu).add(transConfig).set({
            y: -offsetY
          }).start({
            y: 0
          }).then(complete);
          function complete() {
            data.button.attr("aria-expanded", "true");
          }
        }
        function setOverlayHeight(data) {
          var config = data.config;
          var bodyHeight = config.docHeight ? $doc.height() : $body.height();
          if (config.animOver) {
            data.menu.height(bodyHeight);
          } else if (data.el.css("position") !== "fixed") {
            bodyHeight -= data.el.outerHeight(true);
          }
          data.overlay && data.overlay.height(bodyHeight);
          return bodyHeight;
        }
        function close(data, immediate) {
          if (!data.open) {
            return;
          }
          data.open = false;
          data.button.removeClass(navbarOpenedButton);
          var config = data.config;
          if (config.animation === "none" || !tram.support.transform || config.duration <= 0) {
            immediate = true;
          }
          ix.outro(0, data.el[0]);
          $doc.off("click" + namespace, data.outside);
          if (immediate) {
            tram(data.menu).stop();
            complete();
            return;
          }
          var transConfig = "transform " + config.duration + "ms " + config.easing2;
          var menuHeight = data.menu.outerHeight(true);
          var menuWidth = data.menu.outerWidth(true);
          var navHeight = data.el.height();
          if (config.animOver) {
            tram(data.menu).add(transConfig).start({
              x: menuWidth * config.animDirect
            }).then(complete);
            return;
          }
          var offsetY = navHeight + menuHeight;
          tram(data.menu).add(transConfig).start({
            y: -offsetY
          }).then(complete);
          function complete() {
            data.menu.height("");
            tram(data.menu).set({
              x: 0,
              y: 0
            });
            data.menu.each(removeMenuOpen);
            data.links.removeClass(navbarOpenedLink);
            data.dropdowns.removeClass(navbarOpenedDropdown);
            data.dropdownToggle.removeClass(navbarOpenedDropdownToggle);
            data.dropdownList.removeClass(navbarOpenedDropdownList);
            if (data.overlay && data.overlay.children().length) {
              menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
              data.overlay.attr("style", "").hide();
            }
            data.el.triggerHandler("w-close");
            data.button.attr("aria-expanded", "false");
          }
        }
        return api;
      });
    }
  });

  // <stdin>
  require_webflow_brand();
  require_webflow_edit();
  require_webflow_focus_visible();
  require_webflow_focus();
  require_webflow_links();
  require_webflow_scroll();
  require_webflow_touch();
  require_webflow_lightbox();
  require_webflow_navbar();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
