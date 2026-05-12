const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-Bx8K4psB.js",
      "assets/motion-Crlsyqa2.js",
      "assets/vendor-CUtgA-5W.js",
      "assets/Stagger-1RtdqA6q.js",
      "assets/FadeIn-CFs8MqKz.js",
      "assets/ProductCard-BS0GAoul.js",
      "assets/format-ksNvffJs.js",
      "assets/css/ProductCard-BPfotvKF.css",
      "assets/css/index-BjgBcjkX.css",
      "assets/index-BzTcNuP7.js",
      "assets/css/index-C7yDnw9M.css",
      "assets/index-CIlF8aqT.js",
      "assets/css/index-CHkHaihV.css",
      "assets/index-DyDZbV-L.js",
      "assets/css/index-aDI4MdM1.css",
      "assets/index-DEZVsUbR.js",
      "assets/css/index--ZYIfVsY.css",
      "assets/index-tjnd5y4d.js",
      "assets/css/index-DpngA6Ha.css",
      "assets/index-CbD9m__m.js",
      "assets/validators-DcRnqfuW.js",
      "assets/css/index-DgsjDcRJ.css",
      "assets/index-CxQsfWnB.js",
      "assets/auth-page.module-BhCqbJak.js",
      "assets/css/auth-page-Dve81DFD.css",
      "assets/index-Cxmb-7VJ.js",
      "assets/index-hHd7hAl-.js",
      "assets/css/index-BvNVqBYN.css",
      "assets/index-C57jgNnr.js",
      "assets/css/index-FFEgdXN6.css",
    ])
) => i.map((i) => d[i]);
import { j as d, u as Im, A as Pm, m as l1 } from "./motion-Crlsyqa2.js";
import {
  a as t1,
  b as a1,
  R as Ln,
  u as pd,
  r as nl,
  L as _t,
  c as u1,
  O as e1,
  d as n1,
  e as nt,
  N as c1,
  B as i1,
} from "./vendor-CUtgA-5W.js";
(function () {
  const T = document.createElement("link").relList;
  if (T && T.supports && T.supports("modulepreload")) return;
  for (const D of document.querySelectorAll('link[rel="modulepreload"]')) h(D);
  new MutationObserver((D) => {
    for (const A of D)
      if (A.type === "childList")
        for (const Y of A.addedNodes) Y.tagName === "LINK" && Y.rel === "modulepreload" && h(Y);
  }).observe(document, { childList: !0, subtree: !0 });
  function E(D) {
    const A = {};
    return (
      D.integrity && (A.integrity = D.integrity),
      D.referrerPolicy && (A.referrerPolicy = D.referrerPolicy),
      D.crossOrigin === "use-credentials"
        ? (A.credentials = "include")
        : D.crossOrigin === "anonymous"
          ? (A.credentials = "omit")
          : (A.credentials = "same-origin"),
      A
    );
  }
  function h(D) {
    if (D.ep) return;
    D.ep = !0;
    const A = E(D);
    fetch(D.href, A);
  }
})();
var hf = { exports: {} },
  be = {},
  df = { exports: {} },
  mf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rd;
function f1() {
  return (
    rd ||
      ((rd = 1),
      (function (S) {
        function T(z, p) {
          var x = z.length;
          z.push(p);
          l: for (; 0 < x; ) {
            var sl = (x - 1) >>> 1,
              ol = z[sl];
            if (0 < D(ol, p)) ((z[sl] = p), (z[x] = ol), (x = sl));
            else break l;
          }
        }
        function E(z) {
          return z.length === 0 ? null : z[0];
        }
        function h(z) {
          if (z.length === 0) return null;
          var p = z[0],
            x = z.pop();
          if (x !== p) {
            z[0] = x;
            l: for (var sl = 0, ol = z.length, Gl = ol >>> 1; sl < Gl; ) {
              var yl = 2 * (sl + 1) - 1,
                P = z[yl],
                jl = yl + 1,
                At = z[jl];
              if (0 > D(P, x))
                jl < ol && 0 > D(At, P)
                  ? ((z[sl] = At), (z[jl] = x), (sl = jl))
                  : ((z[sl] = P), (z[yl] = x), (sl = yl));
              else if (jl < ol && 0 > D(At, x)) ((z[sl] = At), (z[jl] = x), (sl = jl));
              else break l;
            }
          }
          return p;
        }
        function D(z, p) {
          var x = z.sortIndex - p.sortIndex;
          return x !== 0 ? x : z.id - p.id;
        }
        if (
          ((S.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var A = performance;
          S.unstable_now = function () {
            return A.now();
          };
        } else {
          var Y = Date,
            C = Y.now();
          S.unstable_now = function () {
            return Y.now() - C;
          };
        }
        var Q = [],
          J = [],
          il = 1,
          N = null,
          L = 3,
          gl = !1,
          vl = !1,
          bl = !1,
          V = !1,
          Nl = typeof setTimeout == "function" ? setTimeout : null,
          St = typeof clearTimeout == "function" ? clearTimeout : null,
          Ol = typeof setImmediate < "u" ? setImmediate : null;
        function fl(z) {
          for (var p = E(J); p !== null; ) {
            if (p.callback === null) h(J);
            else if (p.startTime <= z) (h(J), (p.sortIndex = p.expirationTime), T(Q, p));
            else break;
            p = E(J);
          }
        }
        function B(z) {
          if (((bl = !1), fl(z), !vl))
            if (E(Q) !== null) ((vl = !0), I || ((I = !0), ct()));
            else {
              var p = E(J);
              p !== null && Dt(B, p.startTime - z);
            }
        }
        var I = !1,
          Rl = -1,
          Xl = 5,
          Ga = -1;
        function ze() {
          return V ? !0 : !(S.unstable_now() - Ga < Xl);
        }
        function Qa() {
          if (((V = !1), I)) {
            var z = S.unstable_now();
            Ga = z;
            var p = !0;
            try {
              l: {
                ((vl = !1), bl && ((bl = !1), St(Rl), (Rl = -1)), (gl = !0));
                var x = L;
                try {
                  t: {
                    for (fl(z), N = E(Q); N !== null && !(N.expirationTime > z && ze()); ) {
                      var sl = N.callback;
                      if (typeof sl == "function") {
                        ((N.callback = null), (L = N.priorityLevel));
                        var ol = sl(N.expirationTime <= z);
                        if (((z = S.unstable_now()), typeof ol == "function")) {
                          ((N.callback = ol), fl(z), (p = !0));
                          break t;
                        }
                        (N === E(Q) && h(Q), fl(z));
                      } else h(Q);
                      N = E(Q);
                    }
                    if (N !== null) p = !0;
                    else {
                      var Gl = E(J);
                      (Gl !== null && Dt(B, Gl.startTime - z), (p = !1));
                    }
                  }
                  break l;
                } finally {
                  ((N = null), (L = x), (gl = !1));
                }
                p = void 0;
              }
            } finally {
              p ? ct() : (I = !1);
            }
          }
        }
        var ct;
        if (typeof Ol == "function")
          ct = function () {
            Ol(Qa);
          };
        else if (typeof MessageChannel < "u") {
          var _e = new MessageChannel(),
            Ou = _e.port2;
          ((_e.port1.onmessage = Qa),
            (ct = function () {
              Ou.postMessage(null);
            }));
        } else
          ct = function () {
            Nl(Qa, 0);
          };
        function Dt(z, p) {
          Rl = Nl(function () {
            z(S.unstable_now());
          }, p);
        }
        ((S.unstable_IdlePriority = 5),
          (S.unstable_ImmediatePriority = 1),
          (S.unstable_LowPriority = 4),
          (S.unstable_NormalPriority = 3),
          (S.unstable_Profiling = null),
          (S.unstable_UserBlockingPriority = 2),
          (S.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (S.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Xl = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (S.unstable_getCurrentPriorityLevel = function () {
            return L;
          }),
          (S.unstable_next = function (z) {
            switch (L) {
              case 1:
              case 2:
              case 3:
                var p = 3;
                break;
              default:
                p = L;
            }
            var x = L;
            L = p;
            try {
              return z();
            } finally {
              L = x;
            }
          }),
          (S.unstable_requestPaint = function () {
            V = !0;
          }),
          (S.unstable_runWithPriority = function (z, p) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var x = L;
            L = z;
            try {
              return p();
            } finally {
              L = x;
            }
          }),
          (S.unstable_scheduleCallback = function (z, p, x) {
            var sl = S.unstable_now();
            switch (
              (typeof x == "object" && x !== null
                ? ((x = x.delay), (x = typeof x == "number" && 0 < x ? sl + x : sl))
                : (x = sl),
              z)
            ) {
              case 1:
                var ol = -1;
                break;
              case 2:
                ol = 250;
                break;
              case 5:
                ol = 1073741823;
                break;
              case 4:
                ol = 1e4;
                break;
              default:
                ol = 5e3;
            }
            return (
              (ol = x + ol),
              (z = {
                id: il++,
                callback: p,
                priorityLevel: z,
                startTime: x,
                expirationTime: ol,
                sortIndex: -1,
              }),
              x > sl
                ? ((z.sortIndex = x),
                  T(J, z),
                  E(Q) === null &&
                    z === E(J) &&
                    (bl ? (St(Rl), (Rl = -1)) : (bl = !0), Dt(B, x - sl)))
                : ((z.sortIndex = ol), T(Q, z), vl || gl || ((vl = !0), I || ((I = !0), ct()))),
              z
            );
          }),
          (S.unstable_shouldYield = ze),
          (S.unstable_wrapCallback = function (z) {
            var p = L;
            return function () {
              var x = L;
              L = p;
              try {
                return z.apply(this, arguments);
              } finally {
                L = x;
              }
            };
          }));
      })(mf)),
    mf
  );
}
var bd;
function s1() {
  return (bd || ((bd = 1), (df.exports = f1())), df.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function o1() {
  if (zd) return be;
  zd = 1;
  var S = s1(),
    T = t1(),
    E = a1();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function D(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function A(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function Y(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function C(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if ((t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Q(l) {
    if (A(l) !== l) throw Error(h(188));
  }
  function J(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = A(l)), t === null)) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return (Q(e), l);
          if (n === u) return (Q(e), t);
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (a.return !== u.return) ((a = e), (u = n));
      else {
        for (var c = !1, i = e.child; i; ) {
          if (i === a) {
            ((c = !0), (a = e), (u = n));
            break;
          }
          if (i === u) {
            ((c = !0), (u = e), (a = n));
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === a) {
              ((c = !0), (a = n), (u = e));
              break;
            }
            if (i === u) {
              ((c = !0), (u = n), (a = e));
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(h(189));
        }
      }
      if (a.alternate !== u) throw Error(h(190));
    }
    if (a.tag !== 3) throw Error(h(188));
    return a.stateNode.current === a ? l : t;
  }
  function il(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = il(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var N = Object.assign,
    L = Symbol.for("react.element"),
    gl = Symbol.for("react.transitional.element"),
    vl = Symbol.for("react.portal"),
    bl = Symbol.for("react.fragment"),
    V = Symbol.for("react.strict_mode"),
    Nl = Symbol.for("react.profiler"),
    St = Symbol.for("react.consumer"),
    Ol = Symbol.for("react.context"),
    fl = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    I = Symbol.for("react.suspense_list"),
    Rl = Symbol.for("react.memo"),
    Xl = Symbol.for("react.lazy"),
    Ga = Symbol.for("react.activity"),
    ze = Symbol.for("react.memo_cache_sentinel"),
    Qa = Symbol.iterator;
  function ct(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Qa && l[Qa]) || l["@@iterator"]), typeof l == "function" ? l : null);
  }
  var _e = Symbol.for("react.client.reference");
  function Ou(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === _e ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case bl:
        return "Fragment";
      case Nl:
        return "Profiler";
      case V:
        return "StrictMode";
      case B:
        return "Suspense";
      case I:
        return "SuspenseList";
      case Ga:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case vl:
          return "Portal";
        case Ol:
          return l.displayName || "Context";
        case St:
          return (l._context.displayName || "Context") + ".Consumer";
        case fl:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Rl:
          return ((t = l.displayName || null), t !== null ? t : Ou(l.type) || "Memo");
        case Xl:
          ((t = l._payload), (l = l._init));
          try {
            return Ou(l(t));
          } catch {}
      }
    return null;
  }
  var Dt = Array.isArray,
    z = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    p = E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    x = { pending: !1, data: null, method: null, action: null },
    sl = [],
    ol = -1;
  function Gl(l) {
    return { current: l };
  }
  function yl(l) {
    0 > ol || ((l.current = sl[ol]), (sl[ol] = null), ol--);
  }
  function P(l, t) {
    (ol++, (sl[ol] = l.current), (l.current = t));
  }
  var jl = Gl(null),
    At = Gl(null),
    Wt = Gl(null),
    Te = Gl(null);
  function Ae(l, t) {
    switch ((P(Wt, t), P(At, l), P(jl, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Xh(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI))) ((t = Xh(t)), (l = Zh(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (yl(jl), P(jl, l));
  }
  function Xa() {
    (yl(jl), yl(At), yl(Wt));
  }
  function Kn(l) {
    l.memoizedState !== null && P(Te, l);
    var t = jl.current,
      a = Zh(t, l.type);
    t !== a && (P(At, l), P(jl, a));
  }
  function Ee(l) {
    (At.current === l && (yl(jl), yl(At)), Te.current === l && (yl(Te), (ye._currentValue = x)));
  }
  var Jn, gf;
  function za(l) {
    if (Jn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Jn = (t && t[1]) || ""),
          (gf =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Jn +
      l +
      gf
    );
  }
  var wn = !1;
  function Wn(l, t) {
    if (!l || wn) return "";
    wn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (g) {
                  var y = g;
                }
                Reflect.construct(l, [], _);
              } else {
                try {
                  _.call();
                } catch (g) {
                  y = g;
                }
                l.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                y = g;
              }
              (_ = l()) && typeof _.catch == "function" && _.catch(function () {});
            }
          } catch (g) {
            if (g && y && typeof g.stack == "string") return [g.stack, y.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        c = n[0],
        i = n[1];
      if (c && i) {
        var f = c.split(`
`),
          v = i.split(`
`);
        for (e = u = 0; u < f.length && !f[u].includes("DetermineComponentFrameRoot"); ) u++;
        for (; e < v.length && !v[e].includes("DetermineComponentFrameRoot"); ) e++;
        if (u === f.length || e === v.length)
          for (u = f.length - 1, e = v.length - 1; 1 <= u && 0 <= e && f[u] !== v[e]; ) e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (f[u] !== v[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || f[u] !== v[e])) {
                  var r =
                    `
` + f[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      r.includes("<anonymous>") &&
                      (r = r.replace("<anonymous>", l.displayName)),
                    r
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      ((wn = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? za(a) : "";
  }
  function Nd(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return za(l.type);
      case 16:
        return za("Lazy");
      case 13:
        return l.child !== t && t !== null ? za("Suspense Fallback") : za("Suspense");
      case 19:
        return za("SuspenseList");
      case 0:
      case 15:
        return Wn(l.type, !1);
      case 11:
        return Wn(l.type.render, !1);
      case 1:
        return Wn(l.type, !0);
      case 31:
        return za("Activity");
      default:
        return "";
    }
  }
  function Sf(l) {
    try {
      var t = "",
        a = null;
      do ((t += Nd(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  var kn = Object.prototype.hasOwnProperty,
    $n = S.unstable_scheduleCallback,
    Fn = S.unstable_cancelCallback,
    jd = S.unstable_shouldYield,
    Ud = S.unstable_requestPaint,
    kl = S.unstable_now,
    xd = S.unstable_getCurrentPriorityLevel,
    rf = S.unstable_ImmediatePriority,
    bf = S.unstable_UserBlockingPriority,
    pe = S.unstable_NormalPriority,
    Hd = S.unstable_LowPriority,
    zf = S.unstable_IdlePriority,
    Bd = S.log,
    qd = S.unstable_setDisableYieldValue,
    Mu = null,
    $l = null;
  function kt(l) {
    if ((typeof Bd == "function" && qd(l), $l && typeof $l.setStrictMode == "function"))
      try {
        $l.setStrictMode(Mu, l);
      } catch {}
  }
  var Fl = Math.clz32 ? Math.clz32 : Rd,
    Cd = Math.log,
    Yd = Math.LN2;
  function Rd(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Cd(l) / Yd) | 0)) | 0);
  }
  var Oe = 256,
    Me = 262144,
    De = 4194304;
  function _a(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ne(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var i = u & 134217727;
    return (
      i !== 0
        ? ((u = i & ~n),
          u !== 0
            ? (e = _a(u))
            : ((c &= i), c !== 0 ? (e = _a(c)) : a || ((a = i & ~l), a !== 0 && (e = _a(a)))))
        : ((i = u & ~n),
          i !== 0
            ? (e = _a(i))
            : c !== 0
              ? (e = _a(c))
              : a || ((a = u & ~l), a !== 0 && (e = _a(a)))),
      e === 0
        ? 0
        : t !== 0 &&
            t !== e &&
            (t & n) === 0 &&
            ((n = e & -e), (a = t & -t), n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : e
    );
  }
  function Du(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Gd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function _f() {
    var l = De;
    return ((De <<= 1), (De & 62914560) === 0 && (De = 4194304), l);
  }
  function In(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Nu(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 && ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Qd(l, t, a, u, e, n) {
    var c = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var i = l.entanglements,
      f = l.expirationTimes,
      v = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var r = 31 - Fl(a),
        _ = 1 << r;
      ((i[r] = 0), (f[r] = -1));
      var y = v[r];
      if (y !== null)
        for (v[r] = null, r = 0; r < y.length; r++) {
          var g = y[r];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~_;
    }
    (u !== 0 && Tf(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t)));
  }
  function Tf(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var u = 31 - Fl(t);
    ((l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 261930)));
  }
  function Af(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - Fl(a),
        e = 1 << u;
      ((e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e));
    }
  }
  function Ef(l, t) {
    var a = t & -t;
    return ((a = (a & 42) !== 0 ? 1 : Pn(a)), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a);
  }
  function Pn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function lc(l) {
    return ((l &= -l), 2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function pf() {
    var l = p.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : hd(l.type));
  }
  function Of(l, t) {
    var a = p.p;
    try {
      return ((p.p = l), t());
    } finally {
      p.p = a;
    }
  }
  var $t = Math.random().toString(36).slice(2),
    Hl = "__reactFiber$" + $t,
    Zl = "__reactProps$" + $t,
    Za = "__reactContainer$" + $t,
    tc = "__reactEvents$" + $t,
    Xd = "__reactListeners$" + $t,
    Zd = "__reactHandles$" + $t,
    Mf = "__reactResources$" + $t,
    ju = "__reactMarker$" + $t;
  function ac(l) {
    (delete l[Hl], delete l[Zl], delete l[tc], delete l[Xd], delete l[Zd]);
  }
  function La(l) {
    var t = l[Hl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Za] || a[Hl])) {
        if (((a = t.alternate), t.child !== null || (a !== null && a.child !== null)))
          for (l = kh(l); l !== null; ) {
            if ((a = l[Hl])) return a;
            l = kh(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function Va(l) {
    if ((l = l[Hl] || l[Za])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function Uu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function Ka(l) {
    var t = l[Mf];
    return (t || (t = l[Mf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function Ul(l) {
    l[ju] = !0;
  }
  var Df = new Set(),
    Nf = {};
  function Ta(l, t) {
    (Ja(l, t), Ja(l + "Capture", t));
  }
  function Ja(l, t) {
    for (Nf[l] = t, l = 0; l < t.length; l++) Df.add(t[l]);
  }
  var Ld = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    jf = {},
    Uf = {};
  function Vd(l) {
    return kn.call(Uf, l)
      ? !0
      : kn.call(jf, l)
        ? !1
        : Ld.test(l)
          ? (Uf[l] = !0)
          : ((jf[l] = !0), !1);
  }
  function je(l, t, a) {
    if (Vd(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Ue(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Nt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function it(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function xf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Kd(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var e = u.get,
        n = u.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (c) {
            ((a = "" + c), n.call(this, c));
          },
        }),
        Object.defineProperty(l, t, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function uc(l) {
    if (!l._valueTracker) {
      var t = xf(l) ? "checked" : "value";
      l._valueTracker = Kd(l, t, "" + l[t]);
    }
  }
  function Hf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = xf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function xe(l) {
    if (((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")) return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Jd = /[\n"\\]/g;
  function ft(l) {
    return l.replace(Jd, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ec(l, t, a, u, e, n, c, i) {
    ((l.name = ""),
      c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) && (l.value = "" + it(t))
          : l.value !== "" + it(t) && (l.value = "" + it(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? nc(l, c, it(t))
        : a != null
          ? nc(l, c, it(a))
          : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean"
        ? (l.name = "" + it(i))
        : l.removeAttribute("name"));
  }
  function Bf(l, t, a, u, e, n, c, i) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        uc(l);
        return;
      }
      ((a = a != null ? "" + it(a) : ""),
        (t = t != null ? "" + it(t) : a),
        i || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = i ? l.checked : !!u),
      (l.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c),
      uc(l));
  }
  function nc(l, t, a) {
    (t === "number" && xe(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function wa(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        ((e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + it(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          ((l[e].selected = !0), u && (l[e].defaultSelected = !0));
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qf(l, t, a) {
    if (t != null && ((t = "" + it(t)), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + it(a) : "";
  }
  function Cf(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(h(92));
        if (Dt(u)) {
          if (1 < u.length) throw Error(h(93));
          u = u[0];
        }
        a = u;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = it(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u),
      uc(l));
  }
  function Wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var wd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Yf(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : u
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || wd.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function Rf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(h(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
              ? (l.cssFloat = "")
              : (l[u] = ""));
      for (var e in t) ((u = t[e]), t.hasOwnProperty(e) && a[e] !== u && Yf(l, e, u));
    } else for (var n in t) t.hasOwnProperty(n) && Yf(l, n, t[n]);
  }
  function cc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Wd = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    kd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function He(l) {
    return kd.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function jt() {}
  var ic = null;
  function fc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var ka = null,
    $a = null;
  function Gf(l) {
    var t = Va(l);
    if (t && (l = t.stateNode)) {
      var a = l[Zl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (ec(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll('input[name="' + ft("" + t) + '"][type="radio"]'), t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Zl] || null;
                if (!e) throw Error(h(90));
                ec(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++) ((u = a[t]), u.form === l.form && Hf(u));
          }
          break l;
        case "textarea":
          qf(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && wa(l, !!a.multiple, t, !1));
      }
    }
  }
  var sc = !1;
  function Qf(l, t, a) {
    if (sc) return l(t, a);
    sc = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((sc = !1),
        (ka !== null || $a !== null) &&
          (_n(), ka && ((t = ka), (l = $a), ($a = ka = null), Gf(t), l)))
      )
        for (t = 0; t < l.length; t++) Gf(l[t]);
    }
  }
  function xu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Zl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((u = !u.disabled) ||
          ((l = l.type),
          (u = !(l === "button" || l === "input" || l === "select" || l === "textarea"))),
          (l = !u));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(h(231, t, typeof a));
    return a;
  }
  var Ut = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    oc = !1;
  if (Ut)
    try {
      var Hu = {};
      (Object.defineProperty(Hu, "passive", {
        get: function () {
          oc = !0;
        },
      }),
        window.addEventListener("test", Hu, Hu),
        window.removeEventListener("test", Hu, Hu));
    } catch {
      oc = !1;
    }
  var Ft = null,
    hc = null,
    Be = null;
  function Xf() {
    if (Be) return Be;
    var l,
      t = hc,
      a = t.length,
      u,
      e = "value" in Ft ? Ft.value : Ft.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var c = a - l;
    for (u = 1; u <= c && t[a - u] === e[n - u]; u++);
    return (Be = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function qe(l) {
    var t = l.keyCode;
    return (
      "charCode" in l ? ((l = l.charCode), l === 0 && t === 13 && (l = 13)) : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Ce() {
    return !0;
  }
  function Zf() {
    return !1;
  }
  function Ll(l) {
    function t(a, u, e, n, c) {
      ((this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null));
      for (var i in l) l.hasOwnProperty(i) && ((a = l[i]), (this[i] = a ? a(n) : n[i]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ce
          : Zf),
        (this.isPropagationStopped = Zf),
        this
      );
    }
    return (
      N(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Ce));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Ce));
        },
        persist: function () {},
        isPersistent: Ce,
      }),
      t
    );
  }
  var Aa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ye = Ll(Aa),
    Bu = N({}, Aa, { view: 0, detail: 0 }),
    $d = Ll(Bu),
    dc,
    mc,
    qu,
    Re = N({}, Bu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: yc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== qu &&
              (qu && l.type === "mousemove"
                ? ((dc = l.screenX - qu.screenX), (mc = l.screenY - qu.screenY))
                : (mc = dc = 0),
              (qu = l)),
            dc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : mc;
      },
    }),
    Lf = Ll(Re),
    Fd = N({}, Re, { dataTransfer: 0 }),
    Id = Ll(Fd),
    Pd = N({}, Bu, { relatedTarget: 0 }),
    vc = Ll(Pd),
    l0 = N({}, Aa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    t0 = Ll(l0),
    a0 = N({}, Aa, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    u0 = Ll(a0),
    e0 = N({}, Aa, { data: 0 }),
    Vf = Ll(e0),
    n0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    c0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    i0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function f0(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = i0[l]) ? !!t[l] : !1;
  }
  function yc() {
    return f0;
  }
  var s0 = N({}, Bu, {
      key: function (l) {
        if (l.key) {
          var t = n0[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = qe(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? c0[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: yc,
      charCode: function (l) {
        return l.type === "keypress" ? qe(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? qe(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    o0 = Ll(s0),
    h0 = N({}, Re, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Kf = Ll(h0),
    d0 = N({}, Bu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yc,
    }),
    m0 = Ll(d0),
    v0 = N({}, Aa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    y0 = Ll(v0),
    g0 = N({}, Re, {
      deltaX: function (l) {
        return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    S0 = Ll(g0),
    r0 = N({}, Aa, { newState: 0, oldState: 0 }),
    b0 = Ll(r0),
    z0 = [9, 13, 27, 32],
    gc = Ut && "CompositionEvent" in window,
    Cu = null;
  Ut && "documentMode" in document && (Cu = document.documentMode);
  var _0 = Ut && "TextEvent" in window && !Cu,
    Jf = Ut && (!gc || (Cu && 8 < Cu && 11 >= Cu)),
    wf = " ",
    Wf = !1;
  function kf(l, t) {
    switch (l) {
      case "keyup":
        return z0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function $f(l) {
    return ((l = l.detail), typeof l == "object" && "data" in l ? l.data : null);
  }
  var Fa = !1;
  function T0(l, t) {
    switch (l) {
      case "compositionend":
        return $f(t);
      case "keypress":
        return t.which !== 32 ? null : ((Wf = !0), wf);
      case "textInput":
        return ((l = t.data), l === wf && Wf ? null : l);
      default:
        return null;
    }
  }
  function A0(l, t) {
    if (Fa)
      return l === "compositionend" || (!gc && kf(l, t))
        ? ((l = Xf()), (Be = hc = Ft = null), (Fa = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Jf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var E0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ff(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!E0[l.type] : t === "textarea";
  }
  function If(l, t, a, u) {
    (ka ? ($a ? $a.push(u) : ($a = [u])) : (ka = u),
      (t = Dn(t, "onChange")),
      0 < t.length &&
        ((a = new Ye("onChange", "change", null, a, u)), l.push({ event: a, listeners: t })));
  }
  var Yu = null,
    Ru = null;
  function p0(l) {
    qh(l, 0);
  }
  function Ge(l) {
    var t = Uu(l);
    if (Hf(t)) return l;
  }
  function Pf(l, t) {
    if (l === "change") return t;
  }
  var ls = !1;
  if (Ut) {
    var Sc;
    if (Ut) {
      var rc = "oninput" in document;
      if (!rc) {
        var ts = document.createElement("div");
        (ts.setAttribute("oninput", "return;"), (rc = typeof ts.oninput == "function"));
      }
      Sc = rc;
    } else Sc = !1;
    ls = Sc && (!document.documentMode || 9 < document.documentMode);
  }
  function as() {
    Yu && (Yu.detachEvent("onpropertychange", us), (Ru = Yu = null));
  }
  function us(l) {
    if (l.propertyName === "value" && Ge(Ru)) {
      var t = [];
      (If(t, Ru, l, fc(l)), Qf(p0, t));
    }
  }
  function O0(l, t, a) {
    l === "focusin"
      ? (as(), (Yu = t), (Ru = a), Yu.attachEvent("onpropertychange", us))
      : l === "focusout" && as();
  }
  function M0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return Ge(Ru);
  }
  function D0(l, t) {
    if (l === "click") return Ge(t);
  }
  function N0(l, t) {
    if (l === "input" || l === "change") return Ge(t);
  }
  function j0(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Il = typeof Object.is == "function" ? Object.is : j0;
  function Gu(l, t) {
    if (Il(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!kn.call(t, e) || !Il(l[e], t[e])) return !1;
    }
    return !0;
  }
  function es(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ns(l, t) {
    var a = es(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t)) return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = es(a);
    }
  }
  function cs(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? cs(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function is(l) {
    l =
      l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = xe(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = xe(l.document);
    }
    return t;
  }
  function bc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var U0 = Ut && "documentMode" in document && 11 >= document.documentMode,
    Ia = null,
    zc = null,
    Qu = null,
    _c = !1;
  function fs(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    _c ||
      Ia == null ||
      Ia !== xe(u) ||
      ((u = Ia),
      "selectionStart" in u && bc(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = ((u.ownerDocument && u.ownerDocument.defaultView) || window).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Qu && Gu(Qu, u)) ||
        ((Qu = u),
        (u = Dn(zc, "onSelect")),
        0 < u.length &&
          ((t = new Ye("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = Ia))));
  }
  function Ea(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Pa = {
      animationend: Ea("Animation", "AnimationEnd"),
      animationiteration: Ea("Animation", "AnimationIteration"),
      animationstart: Ea("Animation", "AnimationStart"),
      transitionrun: Ea("Transition", "TransitionRun"),
      transitionstart: Ea("Transition", "TransitionStart"),
      transitioncancel: Ea("Transition", "TransitionCancel"),
      transitionend: Ea("Transition", "TransitionEnd"),
    },
    Tc = {},
    ss = {};
  Ut &&
    ((ss = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Pa.animationend.animation,
      delete Pa.animationiteration.animation,
      delete Pa.animationstart.animation),
    "TransitionEvent" in window || delete Pa.transitionend.transition);
  function pa(l) {
    if (Tc[l]) return Tc[l];
    if (!Pa[l]) return l;
    var t = Pa[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in ss) return (Tc[l] = t[a]);
    return l;
  }
  var os = pa("animationend"),
    hs = pa("animationiteration"),
    ds = pa("animationstart"),
    x0 = pa("transitionrun"),
    H0 = pa("transitionstart"),
    B0 = pa("transitioncancel"),
    ms = pa("transitionend"),
    vs = new Map(),
    Ac =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Ac.push("scrollEnd");
  function rt(l, t) {
    (vs.set(l, t), Ta(t, [l]));
  }
  var Qe =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" && l !== null && typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    st = [],
    lu = 0,
    Ec = 0;
  function Xe() {
    for (var l = lu, t = (Ec = lu = 0); t < l; ) {
      var a = st[t];
      st[t++] = null;
      var u = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var n = st[t];
      if (((st[t++] = null), u !== null && e !== null)) {
        var c = u.pending;
        (c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)), (u.pending = e));
      }
      n !== 0 && ys(a, e, n);
    }
  }
  function Ze(l, t, a, u) {
    ((st[lu++] = l),
      (st[lu++] = t),
      (st[lu++] = a),
      (st[lu++] = u),
      (Ec |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u));
  }
  function pc(l, t, a, u) {
    return (Ze(l, t, a, u), Le(l));
  }
  function Oa(l, t) {
    return (Ze(l, null, null, t), Le(l));
  }
  function ys(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 && ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - Fl(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Le(l) {
    if (50 < fe) throw ((fe = 0), (Bi = null), Error(h(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var tu = {};
  function q0(l, t, a, u) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Pl(l, t, a, u) {
    return new q0(l, t, a, u);
  }
  function Oc(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function xt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = Pl(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function gs(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Ve(l, t, a, u, e, n) {
    var c = 0;
    if (((u = l), typeof l == "function")) Oc(l) && (c = 1);
    else if (typeof l == "string")
      c = Qm(l, a, jl.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Ga:
          return ((l = Pl(31, a, t, e)), (l.elementType = Ga), (l.lanes = n), l);
        case bl:
          return Ma(a.children, e, n, t);
        case V:
          ((c = 8), (e |= 24));
          break;
        case Nl:
          return ((l = Pl(12, a, t, e | 2)), (l.elementType = Nl), (l.lanes = n), l);
        case B:
          return ((l = Pl(13, a, t, e)), (l.elementType = B), (l.lanes = n), l);
        case I:
          return ((l = Pl(19, a, t, e)), (l.elementType = I), (l.lanes = n), l);
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ol:
                c = 10;
                break l;
              case St:
                c = 9;
                break l;
              case fl:
                c = 11;
                break l;
              case Rl:
                c = 14;
                break l;
              case Xl:
                ((c = 16), (u = null));
                break l;
            }
          ((c = 29), (a = Error(h(130, l === null ? "null" : typeof l, ""))), (u = null));
      }
    return ((t = Pl(c, a, t, e)), (t.elementType = l), (t.type = u), (t.lanes = n), t);
  }
  function Ma(l, t, a, u) {
    return ((l = Pl(7, l, u, t)), (l.lanes = a), l);
  }
  function Mc(l, t, a) {
    return ((l = Pl(6, l, null, t)), (l.lanes = a), l);
  }
  function Ss(l) {
    var t = Pl(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Dc(l, t, a) {
    return (
      (t = Pl(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var rs = new WeakMap();
  function ot(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = rs.get(l);
      return a !== void 0 ? a : ((t = { value: l, source: t, stack: Sf(t) }), rs.set(l, t), t);
    }
    return { value: l, source: t, stack: Sf(t) };
  }
  var au = [],
    uu = 0,
    Ke = null,
    Xu = 0,
    ht = [],
    dt = 0,
    It = null,
    Et = 1,
    pt = "";
  function Ht(l, t) {
    ((au[uu++] = Xu), (au[uu++] = Ke), (Ke = l), (Xu = t));
  }
  function bs(l, t, a) {
    ((ht[dt++] = Et), (ht[dt++] = pt), (ht[dt++] = It), (It = l));
    var u = Et;
    l = pt;
    var e = 32 - Fl(u) - 1;
    ((u &= ~(1 << e)), (a += 1));
    var n = 32 - Fl(t) + e;
    if (30 < n) {
      var c = e - (e % 5);
      ((n = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (e -= c),
        (Et = (1 << (32 - Fl(t) + e)) | (a << e) | u),
        (pt = n + l));
    } else ((Et = (1 << n) | (a << e) | u), (pt = l));
  }
  function Nc(l) {
    l.return !== null && (Ht(l, 1), bs(l, 1, 0));
  }
  function jc(l) {
    for (; l === Ke; ) ((Ke = au[--uu]), (au[uu] = null), (Xu = au[--uu]), (au[uu] = null));
    for (; l === It; )
      ((It = ht[--dt]),
        (ht[dt] = null),
        (pt = ht[--dt]),
        (ht[dt] = null),
        (Et = ht[--dt]),
        (ht[dt] = null));
  }
  function zs(l, t) {
    ((ht[dt++] = Et), (ht[dt++] = pt), (ht[dt++] = It), (Et = t.id), (pt = t.overflow), (It = l));
  }
  var Bl = null,
    hl = null,
    K = !1,
    Pt = null,
    mt = !1,
    Uc = Error(h(519));
  function la(l) {
    var t = Error(
      h(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")
    );
    throw (Zu(ot(t, l)), Uc);
  }
  function _s(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Hl] = l), (t[Zl] = u), a)) {
      case "dialog":
        (G("cancel", t), G("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        G("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < oe.length; a++) G(oe[a], t);
        break;
      case "source":
        G("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (G("error", t), G("load", t));
        break;
      case "details":
        G("toggle", t);
        break;
      case "input":
        (G("invalid", t),
          Bf(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0));
        break;
      case "select":
        G("invalid", t);
        break;
      case "textarea":
        (G("invalid", t), Cf(t, u.value, u.defaultValue, u.children));
    }
    ((a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      Gh(t.textContent, a)
        ? (u.popover != null && (G("beforetoggle", t), G("toggle", t)),
          u.onScroll != null && G("scroll", t),
          u.onScrollEnd != null && G("scrollend", t),
          u.onClick != null && (t.onclick = jt),
          (t = !0))
        : (t = !1),
      t || la(l, !0));
  }
  function Ts(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          mt = !1;
          return;
        case 27:
        case 3:
          mt = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function eu(l) {
    if (l !== Bl) return !1;
    if (!K) return (Ts(l), (K = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type), (a = !(a !== "form" && a !== "button") || ki(l.type, l.memoizedProps))),
        (a = !a)),
      a && hl && la(l),
      Ts(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(h(317));
      hl = Wh(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(h(317));
      hl = Wh(l);
    } else
      t === 27
        ? ((t = hl), va(l.type) ? ((l = lf), (lf = null), (hl = l)) : (hl = t))
        : (hl = Bl ? yt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Da() {
    ((hl = Bl = null), (K = !1));
  }
  function xc() {
    var l = Pt;
    return (l !== null && (wl === null ? (wl = l) : wl.push.apply(wl, l), (Pt = null)), l);
  }
  function Zu(l) {
    Pt === null ? (Pt = [l]) : Pt.push(l);
  }
  var Hc = Gl(null),
    Na = null,
    Bt = null;
  function ta(l, t, a) {
    (P(Hc, t._currentValue), (t._currentValue = a));
  }
  function qt(l) {
    ((l._currentValue = Hc.current), yl(Hc));
  }
  function Bc(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function qc(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var c = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = e;
          for (var f = 0; f < t.length; f++)
            if (i.context === t[f]) {
              ((n.lanes |= a),
                (i = n.alternate),
                i !== null && (i.lanes |= a),
                Bc(n.return, a, l),
                u || (c = null));
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (((c = e.return), c === null)) throw Error(h(341));
        ((c.lanes |= a), (n = c.alternate), n !== null && (n.lanes |= a), Bc(c, a, l), (c = null));
      } else c = e.child;
      if (c !== null) c.return = e;
      else
        for (c = e; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((e = c.sibling), e !== null)) {
            ((e.return = c.return), (c = e));
            break;
          }
          c = c.return;
        }
      e = c;
    }
  }
  function nu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(h(387));
        if (((c = c.memoizedProps), c !== null)) {
          var i = e.type;
          Il(e.pendingProps.value, c.value) || (l !== null ? l.push(i) : (l = [i]));
        }
      } else if (e === Te.current) {
        if (((c = e.alternate), c === null)) throw Error(h(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(ye) : (l = [ye]));
      }
      e = e.return;
    }
    (l !== null && qc(t, l, a, u), (t.flags |= 262144));
  }
  function Je(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Il(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function ja(l) {
    ((Na = l), (Bt = null), (l = l.dependencies), l !== null && (l.firstContext = null));
  }
  function ql(l) {
    return As(Na, l);
  }
  function we(l, t) {
    return (Na === null && ja(l), As(l, t));
  }
  function As(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Bt === null)) {
      if (l === null) throw Error(h(308));
      ((Bt = t), (l.dependencies = { lanes: 0, firstContext: t }), (l.flags |= 524288));
    } else Bt = Bt.next = t;
    return a;
  }
  var C0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    Y0 = S.unstable_scheduleCallback,
    R0 = S.unstable_NormalPriority,
    Tl = {
      $$typeof: Ol,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Cc() {
    return { controller: new C0(), data: new Map(), refCount: 0 };
  }
  function Lu(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Y0(R0, function () {
          l.controller.abort();
        }));
  }
  var Vu = null,
    Yc = 0,
    cu = 0,
    iu = null;
  function G0(l, t) {
    if (Vu === null) {
      var a = (Vu = []);
      ((Yc = 0),
        (cu = Qi()),
        (iu = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        }));
    }
    return (Yc++, t.then(Es, Es), t);
  }
  function Es() {
    if (--Yc === 0 && Vu !== null) {
      iu !== null && (iu.status = "fulfilled");
      var l = Vu;
      ((Vu = null), (cu = 0), (iu = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Q0(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          ((u.status = "fulfilled"), (u.value = t));
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++) (0, a[e])(void 0);
        }
      ),
      u
    );
  }
  var ps = z.S;
  z.S = function (l, t) {
    ((sh = kl()),
      typeof t == "object" && t !== null && typeof t.then == "function" && G0(l, t),
      ps !== null && ps(l, t));
  };
  var Ua = Gl(null);
  function Rc() {
    var l = Ua.current;
    return l !== null ? l : cl.pooledCache;
  }
  function We(l, t) {
    t === null ? P(Ua, Ua.current) : P(Ua, t.pool);
  }
  function Os() {
    var l = Rc();
    return l === null ? null : { parent: Tl._currentValue, pool: l };
  }
  var fu = Error(h(460)),
    Gc = Error(h(474)),
    ke = Error(h(542)),
    $e = { then: function () {} };
  function Ms(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Ds(l, t, a) {
    switch (
      ((a = l[a]), a === void 0 ? l.push(t) : a !== t && (t.then(jt, jt), (t = a)), t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), js(l), l);
      default:
        if (typeof t.status == "string") t.then(jt, jt);
        else {
          if (((l = cl), l !== null && 100 < l.shellSuspendCounter)) throw Error(h(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "fulfilled"), (e.value = u));
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "rejected"), (e.reason = u));
                }
              }
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), js(l), l);
        }
        throw ((Ha = t), fu);
    }
  }
  function xa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? ((Ha = a), fu) : a;
    }
  }
  var Ha = null;
  function Ns() {
    if (Ha === null) throw Error(h(459));
    var l = Ha;
    return ((Ha = null), l);
  }
  function js(l) {
    if (l === fu || l === ke) throw Error(h(483));
  }
  var su = null,
    Ku = 0;
  function Fe(l) {
    var t = Ku;
    return ((Ku += 1), su === null && (su = []), Ds(su, l, t));
  }
  function Ju(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function Ie(l, t) {
    throw t.$$typeof === L
      ? Error(h(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          h(
            31,
            l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
          )
        ));
  }
  function Us(l) {
    function t(o, s) {
      if (l) {
        var m = o.deletions;
        m === null ? ((o.deletions = [s]), (o.flags |= 16)) : m.push(s);
      }
    }
    function a(o, s) {
      if (!l) return null;
      for (; s !== null; ) (t(o, s), (s = s.sibling));
      return null;
    }
    function u(o) {
      for (var s = new Map(); o !== null; )
        (o.key !== null ? s.set(o.key, o) : s.set(o.index, o), (o = o.sibling));
      return s;
    }
    function e(o, s) {
      return ((o = xt(o, s)), (o.index = 0), (o.sibling = null), o);
    }
    function n(o, s, m) {
      return (
        (o.index = m),
        l
          ? ((m = o.alternate),
            m !== null
              ? ((m = m.index), m < s ? ((o.flags |= 67108866), s) : m)
              : ((o.flags |= 67108866), s))
          : ((o.flags |= 1048576), s)
      );
    }
    function c(o) {
      return (l && o.alternate === null && (o.flags |= 67108866), o);
    }
    function i(o, s, m, b) {
      return s === null || s.tag !== 6
        ? ((s = Mc(m, o.mode, b)), (s.return = o), s)
        : ((s = e(s, m)), (s.return = o), s);
    }
    function f(o, s, m, b) {
      var j = m.type;
      return j === bl
        ? r(o, s, m.props.children, b, m.key)
        : s !== null &&
            (s.elementType === j ||
              (typeof j == "object" && j !== null && j.$$typeof === Xl && xa(j) === s.type))
          ? ((s = e(s, m.props)), Ju(s, m), (s.return = o), s)
          : ((s = Ve(m.type, m.key, m.props, null, o.mode, b)), Ju(s, m), (s.return = o), s);
    }
    function v(o, s, m, b) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== m.containerInfo ||
        s.stateNode.implementation !== m.implementation
        ? ((s = Dc(m, o.mode, b)), (s.return = o), s)
        : ((s = e(s, m.children || [])), (s.return = o), s);
    }
    function r(o, s, m, b, j) {
      return s === null || s.tag !== 7
        ? ((s = Ma(m, o.mode, b, j)), (s.return = o), s)
        : ((s = e(s, m)), (s.return = o), s);
    }
    function _(o, s, m) {
      if ((typeof s == "string" && s !== "") || typeof s == "number" || typeof s == "bigint")
        return ((s = Mc("" + s, o.mode, m)), (s.return = o), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case gl:
            return ((m = Ve(s.type, s.key, s.props, null, o.mode, m)), Ju(m, s), (m.return = o), m);
          case vl:
            return ((s = Dc(s, o.mode, m)), (s.return = o), s);
          case Xl:
            return ((s = xa(s)), _(o, s, m));
        }
        if (Dt(s) || ct(s)) return ((s = Ma(s, o.mode, m, null)), (s.return = o), s);
        if (typeof s.then == "function") return _(o, Fe(s), m);
        if (s.$$typeof === Ol) return _(o, we(o, s), m);
        Ie(o, s);
      }
      return null;
    }
    function y(o, s, m, b) {
      var j = s !== null ? s.key : null;
      if ((typeof m == "string" && m !== "") || typeof m == "number" || typeof m == "bigint")
        return j !== null ? null : i(o, s, "" + m, b);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case gl:
            return m.key === j ? f(o, s, m, b) : null;
          case vl:
            return m.key === j ? v(o, s, m, b) : null;
          case Xl:
            return ((m = xa(m)), y(o, s, m, b));
        }
        if (Dt(m) || ct(m)) return j !== null ? null : r(o, s, m, b, null);
        if (typeof m.then == "function") return y(o, s, Fe(m), b);
        if (m.$$typeof === Ol) return y(o, s, we(o, m), b);
        Ie(o, m);
      }
      return null;
    }
    function g(o, s, m, b, j) {
      if ((typeof b == "string" && b !== "") || typeof b == "number" || typeof b == "bigint")
        return ((o = o.get(m) || null), i(s, o, "" + b, j));
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case gl:
            return ((o = o.get(b.key === null ? m : b.key) || null), f(s, o, b, j));
          case vl:
            return ((o = o.get(b.key === null ? m : b.key) || null), v(s, o, b, j));
          case Xl:
            return ((b = xa(b)), g(o, s, m, b, j));
        }
        if (Dt(b) || ct(b)) return ((o = o.get(m) || null), r(s, o, b, j, null));
        if (typeof b.then == "function") return g(o, s, m, Fe(b), j);
        if (b.$$typeof === Ol) return g(o, s, m, we(s, b), j);
        Ie(s, b);
      }
      return null;
    }
    function O(o, s, m, b) {
      for (var j = null, W = null, M = s, q = (s = 0), Z = null; M !== null && q < m.length; q++) {
        M.index > q ? ((Z = M), (M = null)) : (Z = M.sibling);
        var k = y(o, M, m[q], b);
        if (k === null) {
          M === null && (M = Z);
          break;
        }
        (l && M && k.alternate === null && t(o, M),
          (s = n(k, s, q)),
          W === null ? (j = k) : (W.sibling = k),
          (W = k),
          (M = Z));
      }
      if (q === m.length) return (a(o, M), K && Ht(o, q), j);
      if (M === null) {
        for (; q < m.length; q++)
          ((M = _(o, m[q], b)),
            M !== null && ((s = n(M, s, q)), W === null ? (j = M) : (W.sibling = M), (W = M)));
        return (K && Ht(o, q), j);
      }
      for (M = u(M); q < m.length; q++)
        ((Z = g(M, o, q, m[q], b)),
          Z !== null &&
            (l && Z.alternate !== null && M.delete(Z.key === null ? q : Z.key),
            (s = n(Z, s, q)),
            W === null ? (j = Z) : (W.sibling = Z),
            (W = Z)));
      return (
        l &&
          M.forEach(function (ba) {
            return t(o, ba);
          }),
        K && Ht(o, q),
        j
      );
    }
    function U(o, s, m, b) {
      if (m == null) throw Error(h(151));
      for (
        var j = null, W = null, M = s, q = (s = 0), Z = null, k = m.next();
        M !== null && !k.done;
        q++, k = m.next()
      ) {
        M.index > q ? ((Z = M), (M = null)) : (Z = M.sibling);
        var ba = y(o, M, k.value, b);
        if (ba === null) {
          M === null && (M = Z);
          break;
        }
        (l && M && ba.alternate === null && t(o, M),
          (s = n(ba, s, q)),
          W === null ? (j = ba) : (W.sibling = ba),
          (W = ba),
          (M = Z));
      }
      if (k.done) return (a(o, M), K && Ht(o, q), j);
      if (M === null) {
        for (; !k.done; q++, k = m.next())
          ((k = _(o, k.value, b)),
            k !== null && ((s = n(k, s, q)), W === null ? (j = k) : (W.sibling = k), (W = k)));
        return (K && Ht(o, q), j);
      }
      for (M = u(M); !k.done; q++, k = m.next())
        ((k = g(M, o, q, k.value, b)),
          k !== null &&
            (l && k.alternate !== null && M.delete(k.key === null ? q : k.key),
            (s = n(k, s, q)),
            W === null ? (j = k) : (W.sibling = k),
            (W = k)));
      return (
        l &&
          M.forEach(function (Fm) {
            return t(o, Fm);
          }),
        K && Ht(o, q),
        j
      );
    }
    function el(o, s, m, b) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === bl &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case gl:
            l: {
              for (var j = m.key; s !== null; ) {
                if (s.key === j) {
                  if (((j = m.type), j === bl)) {
                    if (s.tag === 7) {
                      (a(o, s.sibling), (b = e(s, m.props.children)), (b.return = o), (o = b));
                      break l;
                    }
                  } else if (
                    s.elementType === j ||
                    (typeof j == "object" && j !== null && j.$$typeof === Xl && xa(j) === s.type)
                  ) {
                    (a(o, s.sibling), (b = e(s, m.props)), Ju(b, m), (b.return = o), (o = b));
                    break l;
                  }
                  a(o, s);
                  break;
                } else t(o, s);
                s = s.sibling;
              }
              m.type === bl
                ? ((b = Ma(m.props.children, o.mode, b, m.key)), (b.return = o), (o = b))
                : ((b = Ve(m.type, m.key, m.props, null, o.mode, b)),
                  Ju(b, m),
                  (b.return = o),
                  (o = b));
            }
            return c(o);
          case vl:
            l: {
              for (j = m.key; s !== null; ) {
                if (s.key === j)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === m.containerInfo &&
                    s.stateNode.implementation === m.implementation
                  ) {
                    (a(o, s.sibling), (b = e(s, m.children || [])), (b.return = o), (o = b));
                    break l;
                  } else {
                    a(o, s);
                    break;
                  }
                else t(o, s);
                s = s.sibling;
              }
              ((b = Dc(m, o.mode, b)), (b.return = o), (o = b));
            }
            return c(o);
          case Xl:
            return ((m = xa(m)), el(o, s, m, b));
        }
        if (Dt(m)) return O(o, s, m, b);
        if (ct(m)) {
          if (((j = ct(m)), typeof j != "function")) throw Error(h(150));
          return ((m = j.call(m)), U(o, s, m, b));
        }
        if (typeof m.then == "function") return el(o, s, Fe(m), b);
        if (m.$$typeof === Ol) return el(o, s, we(o, m), b);
        Ie(o, m);
      }
      return (typeof m == "string" && m !== "") || typeof m == "number" || typeof m == "bigint"
        ? ((m = "" + m),
          s !== null && s.tag === 6
            ? (a(o, s.sibling), (b = e(s, m)), (b.return = o), (o = b))
            : (a(o, s), (b = Mc(m, o.mode, b)), (b.return = o), (o = b)),
          c(o))
        : a(o, s);
    }
    return function (o, s, m, b) {
      try {
        Ku = 0;
        var j = el(o, s, m, b);
        return ((su = null), j);
      } catch (M) {
        if (M === fu || M === ke) throw M;
        var W = Pl(29, M, null, o.mode);
        return ((W.lanes = b), (W.return = o), W);
      } finally {
      }
    };
  }
  var Ba = Us(!0),
    xs = Us(!1),
    aa = !1;
  function Qc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Xc(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ua(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ea(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), ($ & 2) !== 0)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Le(l)),
        ys(l, null, a),
        t
      );
    }
    return (Ze(l, u, t, a), Le(l));
  }
  function wu(l, t, a) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), Af(l, a));
    }
  }
  function Zc(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          (n === null ? (e = n = c) : (n = n.next = c), (a = a.next));
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      ((a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var Lc = !1;
  function Wu() {
    if (Lc) {
      var l = iu;
      if (l !== null) throw l;
    }
  }
  function ku(l, t, a, u) {
    Lc = !1;
    var e = l.updateQueue;
    aa = !1;
    var n = e.firstBaseUpdate,
      c = e.lastBaseUpdate,
      i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var f = i,
        v = f.next;
      ((f.next = null), c === null ? (n = v) : (c.next = v), (c = f));
      var r = l.alternate;
      r !== null &&
        ((r = r.updateQueue),
        (i = r.lastBaseUpdate),
        i !== c && (i === null ? (r.firstBaseUpdate = v) : (i.next = v), (r.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var _ = e.baseState;
      ((c = 0), (r = v = f = null), (i = n));
      do {
        var y = i.lane & -536870913,
          g = y !== i.lane;
        if (g ? (X & y) === y : (u & y) === y) {
          (y !== 0 && y === cu && (Lc = !0),
            r !== null &&
              (r = r.next =
                { lane: 0, tag: i.tag, payload: i.payload, callback: null, next: null }));
          l: {
            var O = l,
              U = i;
            y = t;
            var el = a;
            switch (U.tag) {
              case 1:
                if (((O = U.payload), typeof O == "function")) {
                  _ = O.call(el, _, y);
                  break l;
                }
                _ = O;
                break l;
              case 3:
                O.flags = (O.flags & -65537) | 128;
              case 0:
                if (
                  ((O = U.payload), (y = typeof O == "function" ? O.call(el, _, y) : O), y == null)
                )
                  break l;
                _ = N({}, _, y);
                break l;
              case 2:
                aa = !0;
            }
          }
          ((y = i.callback),
            y !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = e.callbacks),
              g === null ? (e.callbacks = [y]) : g.push(y)));
        } else
          ((g = { lane: y, tag: i.tag, payload: i.payload, callback: i.callback, next: null }),
            r === null ? ((v = r = g), (f = _)) : (r = r.next = g),
            (c |= y));
        if (((i = i.next), i === null)) {
          if (((i = e.shared.pending), i === null)) break;
          ((g = i),
            (i = g.next),
            (g.next = null),
            (e.lastBaseUpdate = g),
            (e.shared.pending = null));
        }
      } while (!0);
      (r === null && (f = _),
        (e.baseState = f),
        (e.firstBaseUpdate = v),
        (e.lastBaseUpdate = r),
        n === null && (e.shared.lanes = 0),
        (sa |= c),
        (l.lanes = c),
        (l.memoizedState = _));
    }
  }
  function Hs(l, t) {
    if (typeof l != "function") throw Error(h(191, l));
    l.call(t);
  }
  function Bs(l, t) {
    var a = l.callbacks;
    if (a !== null) for (l.callbacks = null, l = 0; l < a.length; l++) Hs(a[l], t);
  }
  var ou = Gl(null),
    Pe = Gl(0);
  function qs(l, t) {
    ((l = Vt), P(Pe, l), P(ou, t), (Vt = l | t.baseLanes));
  }
  function Vc() {
    (P(Pe, Vt), P(ou, ou.current));
  }
  function Kc() {
    ((Vt = Pe.current), yl(ou), yl(Pe));
  }
  var lt = Gl(null),
    vt = null;
  function na(l) {
    var t = l.alternate;
    (P(zl, zl.current & 1),
      P(lt, l),
      vt === null && (t === null || ou.current !== null || t.memoizedState !== null) && (vt = l));
  }
  function Jc(l) {
    (P(zl, zl.current), P(lt, l), vt === null && (vt = l));
  }
  function Cs(l) {
    l.tag === 22 ? (P(zl, zl.current), P(lt, l), vt === null && (vt = l)) : ca();
  }
  function ca() {
    (P(zl, zl.current), P(lt, lt.current));
  }
  function tt(l) {
    (yl(lt), vt === l && (vt = null), yl(zl));
  }
  var zl = Gl(0);
  function ln(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Ii(a) || Pi(a))) return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Ct = 0,
    H = null,
    al = null,
    Al = null,
    tn = !1,
    hu = !1,
    qa = !1,
    an = 0,
    $u = 0,
    du = null,
    X0 = 0;
  function Sl() {
    throw Error(h(321));
  }
  function wc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++) if (!Il(l[a], t[a])) return !1;
    return !0;
  }
  function Wc(l, t, a, u, e, n) {
    return (
      (Ct = n),
      (H = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (z.H = l === null || l.memoizedState === null ? zo : si),
      (qa = !1),
      (n = a(u, e)),
      (qa = !1),
      hu && (n = Rs(t, a, u, e)),
      Ys(l),
      n
    );
  }
  function Ys(l) {
    z.H = Pu;
    var t = al !== null && al.next !== null;
    if (((Ct = 0), (Al = al = H = null), (tn = !1), ($u = 0), (du = null), t)) throw Error(h(300));
    l === null || El || ((l = l.dependencies), l !== null && Je(l) && (El = !0));
  }
  function Rs(l, t, a, u) {
    H = l;
    var e = 0;
    do {
      if ((hu && (du = null), ($u = 0), (hu = !1), 25 <= e)) throw Error(h(301));
      if (((e += 1), (Al = al = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((z.H = _o), (n = t(a, u)));
    } while (hu);
    return n;
  }
  function Z0() {
    var l = z.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Fu(t) : t),
      (l = l.useState()[0]),
      (al !== null ? al.memoizedState : null) !== l && (H.flags |= 1024),
      t
    );
  }
  function kc() {
    var l = an !== 0;
    return ((an = 0), l);
  }
  function $c(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function Fc(l) {
    if (tn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      tn = !1;
    }
    ((Ct = 0), (Al = al = H = null), (hu = !1), ($u = an = 0), (du = null));
  }
  function Ql() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Al === null ? (H.memoizedState = Al = l) : (Al = Al.next = l), Al);
  }
  function _l() {
    if (al === null) {
      var l = H.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = al.next;
    var t = Al === null ? H.memoizedState : Al.next;
    if (t !== null) ((Al = t), (al = l));
    else {
      if (l === null) throw H.alternate === null ? Error(h(467)) : Error(h(310));
      ((al = l),
        (l = {
          memoizedState: al.memoizedState,
          baseState: al.baseState,
          baseQueue: al.baseQueue,
          queue: al.queue,
          next: null,
        }),
        Al === null ? (H.memoizedState = Al = l) : (Al = Al.next = l));
    }
    return Al;
  }
  function un() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fu(l) {
    var t = $u;
    return (
      ($u += 1),
      du === null && (du = []),
      (l = Ds(du, l, t)),
      (t = H),
      (Al === null ? t.memoizedState : Al.next) === null &&
        ((t = t.alternate), (z.H = t === null || t.memoizedState === null ? zo : si)),
      l
    );
  }
  function en(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fu(l);
      if (l.$$typeof === Ol) return ql(l);
    }
    throw Error(h(438, String(l)));
  }
  function Ic(l) {
    var t = null,
      a = H.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = H.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = un()), (H.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = ze;
    return (t.index++, a);
  }
  function Yt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function nn(l) {
    var t = _l();
    return Pc(t, al, l);
  }
  function Pc(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        ((e.next = n.next), (n.next = c));
      }
      ((t.baseQueue = e = n), (u.pending = null));
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var i = (c = null),
        f = null,
        v = t,
        r = !1;
      do {
        var _ = v.lane & -536870913;
        if (_ !== v.lane ? (X & _) === _ : (Ct & _) === _) {
          var y = v.revertLane;
          if (y === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              _ === cu && (r = !0));
          else if ((Ct & y) === y) {
            ((v = v.next), y === cu && (r = !0));
            continue;
          } else
            ((_ = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              f === null ? ((i = f = _), (c = n)) : (f = f.next = _),
              (H.lanes |= y),
              (sa |= y));
          ((_ = v.action), qa && a(n, _), (n = v.hasEagerState ? v.eagerState : a(n, _)));
        } else
          ((y = {
            lane: _,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            f === null ? ((i = f = y), (c = n)) : (f = f.next = y),
            (H.lanes |= _),
            (sa |= _));
        v = v.next;
      } while (v !== null && v !== t);
      if (
        (f === null ? (c = n) : (f.next = i),
        !Il(n, l.memoizedState) && ((El = !0), r && ((a = iu), a !== null)))
      )
        throw a;
      ((l.memoizedState = n), (l.baseState = c), (l.baseQueue = f), (u.lastRenderedState = n));
    }
    return (e === null && (u.lanes = 0), [l.memoizedState, u.dispatch]);
  }
  function li(l) {
    var t = _l(),
      a = t.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var c = (e = e.next);
      do ((n = l(n, c.action)), (c = c.next));
      while (c !== e);
      (Il(n, t.memoizedState) || (El = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, u];
  }
  function Gs(l, t, a) {
    var u = H,
      e = _l(),
      n = K;
    if (n) {
      if (a === void 0) throw Error(h(407));
      a = a();
    } else a = t();
    var c = !Il((al || e).memoizedState, a);
    if (
      (c && ((e.memoizedState = a), (El = !0)),
      (e = e.queue),
      ui(Zs.bind(null, u, e, l), [l]),
      e.getSnapshot !== t || c || (Al !== null && Al.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        mu(9, { destroy: void 0 }, Xs.bind(null, u, e, a, t), null),
        cl === null)
      )
        throw Error(h(349));
      n || (Ct & 127) !== 0 || Qs(u, t, a);
    }
    return a;
  }
  function Qs(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = H.updateQueue),
      t === null
        ? ((t = un()), (H.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function Xs(l, t, a, u) {
    ((t.value = a), (t.getSnapshot = u), Ls(t) && Vs(l));
  }
  function Zs(l, t, a) {
    return a(function () {
      Ls(t) && Vs(l);
    });
  }
  function Ls(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Il(l, a);
    } catch {
      return !0;
    }
  }
  function Vs(l) {
    var t = Oa(l, 2);
    t !== null && Wl(t, l, 2);
  }
  function ti(l) {
    var t = Ql();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), qa)) {
        kt(!0);
        try {
          a();
        } finally {
          kt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Ks(l, t, a, u) {
    return ((l.baseState = a), Pc(l, al, typeof u == "function" ? u : Yt));
  }
  function L0(l, t, a, u, e) {
    if (sn(l)) throw Error(h(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      (z.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Js(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function Js(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = z.T,
        c = {};
      z.T = c;
      try {
        var i = a(e, u),
          f = z.S;
        (f !== null && f(c, i), ws(l, t, i));
      } catch (v) {
        ai(l, t, v);
      } finally {
        (n !== null && c.types !== null && (n.types = c.types), (z.T = n));
      }
    } else
      try {
        ((n = a(e, u)), ws(l, t, n));
      } catch (v) {
        ai(l, t, v);
      }
  }
  function ws(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            Ws(l, t, u);
          },
          function (u) {
            return ai(l, t, u);
          }
        )
      : Ws(l, t, a);
  }
  function Ws(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      ks(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next), a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Js(l, a))));
  }
  function ai(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do ((t.status = "rejected"), (t.reason = a), ks(t), (t = t.next));
      while (t !== u);
    }
    l.action = null;
  }
  function ks(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function $s(l, t) {
    return t;
  }
  function Fs(l, t) {
    if (K) {
      var a = cl.formState;
      if (a !== null) {
        l: {
          var u = H;
          if (K) {
            if (hl) {
              t: {
                for (var e = hl, n = mt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = yt(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                ((n = e.data), (e = n === "F!" || n === "F" ? e : null));
              }
              if (e) {
                ((hl = yt(e.nextSibling)), (u = e.data === "F!"));
                break l;
              }
            }
            la(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Ql()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $s,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = So.bind(null, H, u)),
      (u.dispatch = a),
      (u = ti(!1)),
      (n = fi.bind(null, H, !1, u.queue)),
      (u = Ql()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = L0.bind(null, H, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function Is(l) {
    var t = _l();
    return Ps(t, al, l);
  }
  function Ps(l, t, a) {
    if (
      ((t = Pc(l, t, $s)[0]),
      (l = nn(Yt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = Fu(t);
      } catch (c) {
        throw c === fu ? ke : c;
      }
    else u = t;
    t = _l();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((H.flags |= 2048), mu(9, { destroy: void 0 }, V0.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function V0(l, t) {
    l.action = t;
  }
  function lo(l) {
    var t = _l(),
      a = al;
    if (a !== null) return Ps(t, a, l);
    (_l(), (t = t.memoizedState), (a = _l()));
    var u = a.queue.dispatch;
    return ((a.memoizedState = l), [t, u, !1]);
  }
  function mu(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = H.updateQueue),
      t === null && ((t = un()), (H.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function to() {
    return _l().memoizedState;
  }
  function cn(l, t, a, u) {
    var e = Ql();
    ((H.flags |= l),
      (e.memoizedState = mu(1 | t, { destroy: void 0 }, a, u === void 0 ? null : u)));
  }
  function fn(l, t, a, u) {
    var e = _l();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    al !== null && u !== null && wc(u, al.memoizedState.deps)
      ? (e.memoizedState = mu(t, n, a, u))
      : ((H.flags |= l), (e.memoizedState = mu(1 | t, n, a, u)));
  }
  function ao(l, t) {
    cn(8390656, 8, l, t);
  }
  function ui(l, t) {
    fn(2048, 8, l, t);
  }
  function K0(l) {
    H.flags |= 4;
    var t = H.updateQueue;
    if (t === null) ((t = un()), (H.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function uo(l) {
    var t = _l().memoizedState;
    return (
      K0({ ref: t, nextImpl: l }),
      function () {
        if (($ & 2) !== 0) throw Error(h(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function eo(l, t) {
    return fn(4, 2, l, t);
  }
  function no(l, t) {
    return fn(4, 4, l, t);
  }
  function co(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function io(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), fn(4, 4, co.bind(null, t, l), a));
  }
  function ei() {}
  function fo(l, t) {
    var a = _l();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && wc(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function so(l, t) {
    var a = _l();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && wc(t, u[1])) return u[0];
    if (((u = l()), qa)) {
      kt(!0);
      try {
        l();
      } finally {
        kt(!1);
      }
    }
    return ((a.memoizedState = [u, t]), u);
  }
  function ni(l, t, a) {
    return a === void 0 || ((Ct & 1073741824) !== 0 && (X & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = hh()), (H.lanes |= l), (sa |= l), a);
  }
  function oo(l, t, a, u) {
    return Il(a, t)
      ? a
      : ou.current !== null
        ? ((l = ni(l, a, u)), Il(l, t) || (El = !0), l)
        : (Ct & 42) === 0 || ((Ct & 1073741824) !== 0 && (X & 261930) === 0)
          ? ((El = !0), (l.memoizedState = a))
          : ((l = hh()), (H.lanes |= l), (sa |= l), t);
  }
  function ho(l, t, a, u, e) {
    var n = p.p;
    p.p = n !== 0 && 8 > n ? n : 8;
    var c = z.T,
      i = {};
    ((z.T = i), fi(l, !1, t, a));
    try {
      var f = e(),
        v = z.S;
      if (
        (v !== null && v(i, f), f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var r = Q0(f, u);
        Iu(l, t, r, et(l));
      } else Iu(l, t, u, et(l));
    } catch (_) {
      Iu(l, t, { then: function () {}, status: "rejected", reason: _ }, et());
    } finally {
      ((p.p = n), c !== null && i.types !== null && (c.types = i.types), (z.T = c));
    }
  }
  function J0() {}
  function ci(l, t, a, u) {
    if (l.tag !== 5) throw Error(h(476));
    var e = mo(l).queue;
    ho(
      l,
      e,
      t,
      x,
      a === null
        ? J0
        : function () {
            return (vo(l), a(u));
          }
    );
  }
  function mo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: x,
      baseState: x,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: x,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Yt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function vo(l) {
    var t = mo(l);
    (t.next === null && (t = l.alternate.memoizedState), Iu(l, t.next.queue, {}, et()));
  }
  function ii() {
    return ql(ye);
  }
  function yo() {
    return _l().memoizedState;
  }
  function go() {
    return _l().memoizedState;
  }
  function w0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = et();
          l = ua(a);
          var u = ea(t, l, a);
          (u !== null && (Wl(u, t, a), wu(u, t, a)), (t = { cache: Cc() }), (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function W0(l, t, a) {
    var u = et();
    ((a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      sn(l) ? ro(t, a) : ((a = pc(l, t, a, u)), a !== null && (Wl(a, l, u), bo(a, t, u))));
  }
  function So(l, t, a) {
    var u = et();
    Iu(l, t, a, u);
  }
  function Iu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (sn(l)) ro(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            i = n(c, a);
          if (((e.hasEagerState = !0), (e.eagerState = i), Il(i, c)))
            return (Ze(l, t, e, 0), cl === null && Xe(), !1);
        } catch {
        } finally {
        }
      if (((a = pc(l, t, e, u)), a !== null)) return (Wl(a, l, u), bo(a, t, u), !0);
    }
    return !1;
  }
  function fi(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Qi(),
        gesture: null,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      sn(l))
    ) {
      if (t) throw Error(h(479));
    } else ((t = pc(l, a, u, 2)), t !== null && Wl(t, l, 2));
  }
  function sn(l) {
    var t = l.alternate;
    return l === H || (t !== null && t === H);
  }
  function ro(l, t) {
    hu = tn = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)), (l.pending = t));
  }
  function bo(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), Af(l, a));
    }
  }
  var Pu = {
    readContext: ql,
    use: en,
    useCallback: Sl,
    useContext: Sl,
    useEffect: Sl,
    useImperativeHandle: Sl,
    useLayoutEffect: Sl,
    useInsertionEffect: Sl,
    useMemo: Sl,
    useReducer: Sl,
    useRef: Sl,
    useState: Sl,
    useDebugValue: Sl,
    useDeferredValue: Sl,
    useTransition: Sl,
    useSyncExternalStore: Sl,
    useId: Sl,
    useHostTransitionStatus: Sl,
    useFormState: Sl,
    useActionState: Sl,
    useOptimistic: Sl,
    useMemoCache: Sl,
    useCacheRefresh: Sl,
  };
  Pu.useEffectEvent = Sl;
  var zo = {
      readContext: ql,
      use: en,
      useCallback: function (l, t) {
        return ((Ql().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: ql,
      useEffect: ao,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null), cn(4194308, 4, co.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return cn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        cn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Ql();
        t = t === void 0 ? null : t;
        var u = l();
        if (qa) {
          kt(!0);
          try {
            l();
          } finally {
            kt(!1);
          }
        }
        return ((a.memoizedState = [u, t]), u);
      },
      useReducer: function (l, t, a) {
        var u = Ql();
        if (a !== void 0) {
          var e = a(t);
          if (qa) {
            kt(!0);
            try {
              a(t);
            } finally {
              kt(!1);
            }
          }
        } else e = t;
        return (
          (u.memoizedState = u.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (u.queue = l),
          (l = l.dispatch = W0.bind(null, H, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Ql();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = ti(l);
        var t = l.queue,
          a = So.bind(null, H, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: ei,
      useDeferredValue: function (l, t) {
        var a = Ql();
        return ni(a, l, t);
      },
      useTransition: function () {
        var l = ti(!1);
        return ((l = ho.bind(null, H, l.queue, !0, !1)), (Ql().memoizedState = l), [!1, l]);
      },
      useSyncExternalStore: function (l, t, a) {
        var u = H,
          e = Ql();
        if (K) {
          if (a === void 0) throw Error(h(407));
          a = a();
        } else {
          if (((a = t()), cl === null)) throw Error(h(349));
          (X & 127) !== 0 || Qs(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          ao(Zs.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          mu(9, { destroy: void 0 }, Xs.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Ql(),
          t = cl.identifierPrefix;
        if (K) {
          var a = pt,
            u = Et;
          ((a = (u & ~(1 << (32 - Fl(u) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = an++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = X0++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: ii,
      useFormState: Fs,
      useActionState: Fs,
      useOptimistic: function (l) {
        var t = Ql();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((t.queue = a), (t = fi.bind(null, H, !0, a)), (a.dispatch = t), [l, t]);
      },
      useMemoCache: Ic,
      useCacheRefresh: function () {
        return (Ql().memoizedState = w0.bind(null, H));
      },
      useEffectEvent: function (l) {
        var t = Ql(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if (($ & 2) !== 0) throw Error(h(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    si = {
      readContext: ql,
      use: en,
      useCallback: fo,
      useContext: ql,
      useEffect: ui,
      useImperativeHandle: io,
      useInsertionEffect: eo,
      useLayoutEffect: no,
      useMemo: so,
      useReducer: nn,
      useRef: to,
      useState: function () {
        return nn(Yt);
      },
      useDebugValue: ei,
      useDeferredValue: function (l, t) {
        var a = _l();
        return oo(a, al.memoizedState, l, t);
      },
      useTransition: function () {
        var l = nn(Yt)[0],
          t = _l().memoizedState;
        return [typeof l == "boolean" ? l : Fu(l), t];
      },
      useSyncExternalStore: Gs,
      useId: yo,
      useHostTransitionStatus: ii,
      useFormState: Is,
      useActionState: Is,
      useOptimistic: function (l, t) {
        var a = _l();
        return Ks(a, al, l, t);
      },
      useMemoCache: Ic,
      useCacheRefresh: go,
    };
  si.useEffectEvent = uo;
  var _o = {
    readContext: ql,
    use: en,
    useCallback: fo,
    useContext: ql,
    useEffect: ui,
    useImperativeHandle: io,
    useInsertionEffect: eo,
    useLayoutEffect: no,
    useMemo: so,
    useReducer: li,
    useRef: to,
    useState: function () {
      return li(Yt);
    },
    useDebugValue: ei,
    useDeferredValue: function (l, t) {
      var a = _l();
      return al === null ? ni(a, l, t) : oo(a, al.memoizedState, l, t);
    },
    useTransition: function () {
      var l = li(Yt)[0],
        t = _l().memoizedState;
      return [typeof l == "boolean" ? l : Fu(l), t];
    },
    useSyncExternalStore: Gs,
    useId: yo,
    useHostTransitionStatus: ii,
    useFormState: lo,
    useActionState: lo,
    useOptimistic: function (l, t) {
      var a = _l();
      return al !== null ? Ks(a, al, l, t) : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: Ic,
    useCacheRefresh: go,
  };
  _o.useEffectEvent = uo;
  function oi(l, t, a, u) {
    ((t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : N({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var hi = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = et(),
        e = ua(u);
      ((e.payload = t),
        a != null && (e.callback = a),
        (t = ea(l, e, u)),
        t !== null && (Wl(t, l, u), wu(t, l, u)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = et(),
        e = ua(u);
      ((e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = ea(l, e, u)),
        t !== null && (Wl(t, l, u), wu(t, l, u)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = et(),
        u = ua(a);
      ((u.tag = 2),
        t != null && (u.callback = t),
        (t = ea(l, u, a)),
        t !== null && (Wl(t, l, a), wu(t, l, a)));
    },
  };
  function To(l, t, a, u, e, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Gu(a, u) || !Gu(e, n)
          : !0
    );
  }
  function Ao(l, t, a, u) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && hi.enqueueReplaceState(t, t.state, null));
  }
  function Ca(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = N({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function Eo(l) {
    Qe(l);
  }
  function po(l) {
    console.error(l);
  }
  function Oo(l) {
    Qe(l);
  }
  function on(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Mo(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function di(l, t, a) {
    return (
      (a = ua(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        on(l, t);
      }),
      a
    );
  }
  function Do(l) {
    return ((l = ua(l)), (l.tag = 3), l);
  }
  function No(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      ((l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          Mo(t, a, u);
        }));
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        (Mo(t, a, u),
          typeof e != "function" && (oa === null ? (oa = new Set([this])) : oa.add(this)));
        var i = u.stack;
        this.componentDidCatch(u.value, { componentStack: i !== null ? i : "" });
      });
  }
  function k0(l, t, a, u, e) {
    if (((a.flags |= 32768), u !== null && typeof u == "object" && typeof u.then == "function")) {
      if (((t = a.alternate), t !== null && nu(t, a, e, !0), (a = lt.current), a !== null)) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              vt === null ? Tn() : a.alternate === null && rl === 0 && (rl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === $e
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Yi(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === $e
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([u]) }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue), a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Yi(l, u, e)),
              !1
            );
        }
        throw Error(h(435, a.tag));
      }
      return (Yi(l, u, e), Tn(), !1);
    }
    if (K)
      return (
        (t = lt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Uc && ((l = Error(h(422), { cause: u })), Zu(ot(l, a))))
          : (u !== Uc && ((t = Error(h(423), { cause: u })), Zu(ot(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = ot(u, a)),
            (e = di(l.stateNode, u, e)),
            Zc(l, e),
            rl !== 4 && (rl = 2)),
        !1
      );
    var n = Error(h(520), { cause: u });
    if (((n = ot(n, a)), ie === null ? (ie = [n]) : ie.push(n), rl !== 4 && (rl = 2), t === null))
      return !0;
    ((u = ot(u, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = di(a.stateNode, u, l)),
            Zc(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (oa === null || !oa.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = Do(e)),
              No(e, l, a, u),
              Zc(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var mi = Error(h(461)),
    El = !1;
  function Cl(l, t, a, u) {
    t.child = l === null ? xs(t, null, a, u) : Ba(t, l.child, a, u);
  }
  function jo(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var c = {};
      for (var i in u) i !== "ref" && (c[i] = u[i]);
    } else c = u;
    return (
      ja(t),
      (u = Wc(l, t, a, c, n, e)),
      (i = kc()),
      l !== null && !El
        ? ($c(l, t, e), Rt(l, t, e))
        : (K && i && Nc(t), (t.flags |= 1), Cl(l, t, u, e), t.child)
    );
  }
  function Uo(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Oc(n) && n.defaultProps === void 0 && a.compare === null
        ? ((t.tag = 15), (t.type = n), xo(l, t, n, u, e))
        : ((l = Ve(a.type, null, u, t, t.mode, e)), (l.ref = t.ref), (l.return = t), (t.child = l));
    }
    if (((n = l.child), !_i(l, e))) {
      var c = n.memoizedProps;
      if (((a = a.compare), (a = a !== null ? a : Gu), a(c, u) && l.ref === t.ref))
        return Rt(l, t, e);
    }
    return ((t.flags |= 1), (l = xt(n, u)), (l.ref = t.ref), (l.return = t), (t.child = l));
  }
  function xo(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Gu(n, u) && l.ref === t.ref)
        if (((El = !1), (t.pendingProps = u = n), _i(l, e))) (l.flags & 131072) !== 0 && (El = !0);
        else return ((t.lanes = l.lanes), Rt(l, t, e));
    }
    return vi(l, t, a, u, e);
  }
  function Ho(l, t, a, u) {
    var e = u.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      u.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (u = t.child = l.child, e = 0; u !== null; )
            ((e = e | u.lanes | u.childLanes), (u = u.sibling));
          u = e & ~n;
        } else ((u = 0), (t.child = null));
        return Bo(l, t, n, a, u);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && We(t, n !== null ? n.cachePool : null),
          n !== null ? qs(t, n) : Vc(),
          Cs(t));
      else return ((u = t.lanes = 536870912), Bo(l, t, n !== null ? n.baseLanes | a : a, a, u));
    } else
      n !== null
        ? (We(t, n.cachePool), qs(t, n), ca(), (t.memoizedState = null))
        : (l !== null && We(t, null), Vc(), ca());
    return (Cl(l, t, e, a), t.child);
  }
  function le(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Bo(l, t, a, u, e) {
    var n = Rc();
    return (
      (n = n === null ? null : { parent: Tl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && We(t, null),
      Vc(),
      Cs(t),
      l !== null && nu(l, t, u, !0),
      (t.childLanes = e),
      null
    );
  }
  function hn(l, t) {
    return (
      (t = mn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function qo(l, t, a) {
    return (
      Ba(t, l.child, null, a),
      (l = hn(t, t.pendingProps)),
      (l.flags |= 2),
      tt(t),
      (t.memoizedState = null),
      l
    );
  }
  function $0(l, t, a) {
    var u = t.pendingProps,
      e = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (K) {
        if (u.mode === "hidden") return ((l = hn(t, u)), (t.lanes = 536870912), le(null, l));
        if (
          (Jc(t),
          (l = hl)
            ? ((l = wh(l, mt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: Et, overflow: pt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Ss(l)),
                (a.return = t),
                (t.child = a),
                (Bl = t),
                (hl = null)))
            : (l = null),
          l === null)
        )
          throw la(t);
        return ((t.lanes = 536870912), null);
      }
      return hn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if ((Jc(t), e))
        if (t.flags & 256) ((t.flags &= -257), (t = qo(l, t, a)));
        else if (t.memoizedState !== null) ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(h(558));
      else if ((El || nu(l, t, a, !1), (e = (a & l.childLanes) !== 0), El || e)) {
        if (((u = cl), u !== null && ((c = Ef(u, a)), c !== 0 && c !== n.retryLane)))
          throw ((n.retryLane = c), Oa(l, c), Wl(u, l, c), mi);
        (Tn(), (t = qo(l, t, a)));
      } else
        ((l = n.treeContext),
          (hl = yt(c.nextSibling)),
          (Bl = t),
          (K = !0),
          (Pt = null),
          (mt = !1),
          l !== null && zs(t, l),
          (t = hn(t, u)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = xt(l.child, { mode: u.mode, children: u.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function dn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(h(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function vi(l, t, a, u, e) {
    return (
      ja(t),
      (a = Wc(l, t, a, u, void 0, e)),
      (u = kc()),
      l !== null && !El
        ? ($c(l, t, e), Rt(l, t, e))
        : (K && u && Nc(t), (t.flags |= 1), Cl(l, t, a, e), t.child)
    );
  }
  function Co(l, t, a, u, e, n) {
    return (
      ja(t),
      (t.updateQueue = null),
      (a = Rs(t, u, a, e)),
      Ys(l),
      (u = kc()),
      l !== null && !El
        ? ($c(l, t, n), Rt(l, t, n))
        : (K && u && Nc(t), (t.flags |= 1), Cl(l, t, a, n), t.child)
    );
  }
  function Yo(l, t, a, u, e) {
    if ((ja(t), t.stateNode === null)) {
      var n = tu,
        c = a.contextType;
      (typeof c == "object" && c !== null && (n = ql(c)),
        (n = new a(u, n)),
        (t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = hi),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Qc(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? ql(c) : tu),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (oi(t, a, c, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
          c !== n.state && hi.enqueueReplaceState(n, n.state, null),
          ku(t, u, n, e),
          Wu(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0));
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps,
        f = Ca(a, i);
      n.props = f;
      var v = n.context,
        r = a.contextType;
      ((c = tu), typeof r == "object" && r !== null && (c = ql(r)));
      var _ = a.getDerivedStateFromProps;
      ((r = typeof _ == "function" || typeof n.getSnapshotBeforeUpdate == "function"),
        (i = t.pendingProps !== i),
        r ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || v !== c) && Ao(t, n, u, c)),
        (aa = !1));
      var y = t.memoizedState;
      ((n.state = y),
        ku(t, u, n, e),
        Wu(),
        (v = t.memoizedState),
        i || y !== v || aa
          ? (typeof _ == "function" && (oi(t, a, _, u), (v = t.memoizedState)),
            (f = aa || To(t, a, f, u, y, v, c))
              ? (r ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" && n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = v)),
            (n.props = u),
            (n.state = v),
            (n.context = c),
            (u = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), (u = !1)));
    } else {
      ((n = t.stateNode),
        Xc(l, t),
        (c = t.memoizedProps),
        (r = Ca(a, c)),
        (n.props = r),
        (_ = t.pendingProps),
        (y = n.context),
        (v = a.contextType),
        (f = tu),
        typeof v == "object" && v !== null && (f = ql(v)),
        (i = a.getDerivedStateFromProps),
        (v = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== _ || y !== f) && Ao(t, n, u, f)),
        (aa = !1),
        (y = t.memoizedState),
        (n.state = y),
        ku(t, u, n, e),
        Wu());
      var g = t.memoizedState;
      c !== _ || y !== g || aa || (l !== null && l.dependencies !== null && Je(l.dependencies))
        ? (typeof i == "function" && (oi(t, a, i, u), (g = t.memoizedState)),
          (r =
            aa ||
            To(t, a, r, u, y, g, f) ||
            (l !== null && l.dependencies !== null && Je(l.dependencies)))
            ? (v ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, g, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, g, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = g)),
          (n.props = u),
          (n.state = g),
          (n.context = f),
          (u = r))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      dn(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = Ba(t, l.child, null, e)), (t.child = Ba(t, null, a, e)))
            : Cl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Rt(l, t, e)),
      l
    );
  }
  function Ro(l, t, a, u) {
    return (Da(), (t.flags |= 256), Cl(l, t, a, u), t.child);
  }
  var yi = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function gi(l) {
    return { baseLanes: l, cachePool: Os() };
  }
  function Si(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= ut), l);
  }
  function Go(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (zl.current & 2) !== 0),
      c && ((e = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (K) {
        if (
          (e ? na(t) : ca(),
          (l = hl)
            ? ((l = wh(l, mt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: Et, overflow: pt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Ss(l)),
                (a.return = t),
                (t.child = a),
                (Bl = t),
                (hl = null)))
            : (l = null),
          l === null)
        )
          throw la(t);
        return (Pi(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var i = u.children;
      return (
        (u = u.fallback),
        e
          ? (ca(),
            (e = t.mode),
            (i = mn({ mode: "hidden", children: i }, e)),
            (u = Ma(u, e, a, null)),
            (i.return = t),
            (u.return = t),
            (i.sibling = u),
            (t.child = i),
            (u = t.child),
            (u.memoizedState = gi(a)),
            (u.childLanes = Si(l, c, a)),
            (t.memoizedState = yi),
            le(null, u))
          : (na(t), ri(t, i))
      );
    }
    var f = l.memoizedState;
    if (f !== null && ((i = f.dehydrated), i !== null)) {
      if (n)
        t.flags & 256
          ? (na(t), (t.flags &= -257), (t = bi(l, t, a)))
          : t.memoizedState !== null
            ? (ca(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (ca(),
              (i = u.fallback),
              (e = t.mode),
              (u = mn({ mode: "visible", children: u.children }, e)),
              (i = Ma(i, e, a, null)),
              (i.flags |= 2),
              (u.return = t),
              (i.return = t),
              (u.sibling = i),
              (t.child = u),
              Ba(t, l.child, null, a),
              (u = t.child),
              (u.memoizedState = gi(a)),
              (u.childLanes = Si(l, c, a)),
              (t.memoizedState = yi),
              (t = le(null, u)));
      else if ((na(t), Pi(i))) {
        if (((c = i.nextSibling && i.nextSibling.dataset), c)) var v = c.dgst;
        ((c = v),
          (u = Error(h(419))),
          (u.stack = ""),
          (u.digest = c),
          Zu({ value: u, source: null, stack: null }),
          (t = bi(l, t, a)));
      } else if ((El || nu(l, t, a, !1), (c = (a & l.childLanes) !== 0), El || c)) {
        if (((c = cl), c !== null && ((u = Ef(c, a)), u !== 0 && u !== f.retryLane)))
          throw ((f.retryLane = u), Oa(l, u), Wl(c, l, u), mi);
        (Ii(i) || Tn(), (t = bi(l, t, a)));
      } else
        Ii(i)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (hl = yt(i.nextSibling)),
            (Bl = t),
            (K = !0),
            (Pt = null),
            (mt = !1),
            l !== null && zs(t, l),
            (t = ri(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (ca(),
        (i = u.fallback),
        (e = t.mode),
        (f = l.child),
        (v = f.sibling),
        (u = xt(f, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = f.subtreeFlags & 65011712),
        v !== null ? (i = xt(v, i)) : ((i = Ma(i, e, a, null)), (i.flags |= 2)),
        (i.return = t),
        (u.return = t),
        (u.sibling = i),
        (t.child = u),
        le(null, u),
        (u = t.child),
        (i = l.child.memoizedState),
        i === null
          ? (i = gi(a))
          : ((e = i.cachePool),
            e !== null
              ? ((f = Tl._currentValue), (e = e.parent !== f ? { parent: f, pool: f } : e))
              : (e = Os()),
            (i = { baseLanes: i.baseLanes | a, cachePool: e })),
        (u.memoizedState = i),
        (u.childLanes = Si(l, c, a)),
        (t.memoizedState = yi),
        le(l.child, u))
      : (na(t),
        (a = l.child),
        (l = a.sibling),
        (a = xt(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions), c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function ri(l, t) {
    return ((t = mn({ mode: "visible", children: t }, l.mode)), (t.return = l), (l.child = t));
  }
  function mn(l, t) {
    return ((l = Pl(22, l, null, t)), (l.lanes = 0), l);
  }
  function bi(l, t, a) {
    return (
      Ba(t, l.child, null, a),
      (l = ri(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Qo(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    (u !== null && (u.lanes |= t), Bc(l.return, t, a));
  }
  function zi(l, t, a, u, e, n) {
    var c = l.memoizedState;
    c === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
          treeForkCount: n,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = u),
        (c.tail = a),
        (c.tailMode = e),
        (c.treeForkCount = n));
  }
  function Xo(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    u = u.children;
    var c = zl.current,
      i = (c & 2) !== 0;
    if (
      (i ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
      P(zl, c),
      Cl(l, t, u, a),
      (u = K ? Xu : 0),
      !i && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Qo(l, a, t);
        else if (l.tag === 19) Qo(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          ((l = a.alternate), l !== null && ln(l) === null && (e = a), (a = a.sibling));
        ((a = e),
          a === null ? ((e = t.child), (t.child = null)) : ((e = a.sibling), (a.sibling = null)),
          zi(t, !1, e, a, n, u));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && ln(l) === null)) {
            t.child = e;
            break;
          }
          ((l = e.sibling), (e.sibling = a), (a = e), (e = l));
        }
        zi(t, !0, a, null, n, u);
        break;
      case "together":
        zi(t, !1, null, null, void 0, u);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Rt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies), (sa |= t.lanes), (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((nu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, a = xt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        ((l = l.sibling), (a = a.sibling = xt(l, l.pendingProps)), (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function _i(l, t) {
    return (l.lanes & t) !== 0 ? !0 : ((l = l.dependencies), !!(l !== null && Je(l)));
  }
  function F0(l, t, a) {
    switch (t.tag) {
      case 3:
        (Ae(t, t.stateNode.containerInfo), ta(t, Tl, l.memoizedState.cache), Da());
        break;
      case 27:
      case 5:
        Kn(t);
        break;
      case 4:
        Ae(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Jc(t), null);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (na(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Go(l, t, a)
              : (na(t), (l = Rt(l, t, a)), l !== null ? l.sibling : null);
        na(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (nu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return Xo(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null && ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          P(zl, zl.current),
          u)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Ho(l, t, a, t.pendingProps));
      case 24:
        ta(t, Tl, l.memoizedState.cache);
    }
    return Rt(l, t, a);
  }
  function Zo(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) El = !0;
      else {
        if (!_i(l, a) && (t.flags & 128) === 0) return ((El = !1), F0(l, t, a));
        El = (l.flags & 131072) !== 0;
      }
    else ((El = !1), K && (t.flags & 1048576) !== 0 && bs(t, Xu, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (((l = xa(t.elementType)), (t.type = l), typeof l == "function"))
            Oc(l)
              ? ((u = Ca(l, u)), (t.tag = 1), (t = Yo(null, t, l, u, a)))
              : ((t.tag = 0), (t = vi(null, t, l, u, a)));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === fl) {
                ((t.tag = 11), (t = jo(null, t, l, u, a)));
                break l;
              } else if (e === Rl) {
                ((t.tag = 14), (t = Uo(null, t, l, u, a)));
                break l;
              }
            }
            throw ((t = Ou(l) || l), Error(h(306, t, "")));
          }
        }
        return t;
      case 0:
        return vi(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((u = t.type), (e = Ca(u, t.pendingProps)), Yo(l, t, u, e, a));
      case 3:
        l: {
          if ((Ae(t, t.stateNode.containerInfo), l === null)) throw Error(h(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          ((e = n.element), Xc(l, t), ku(t, u, null, a));
          var c = t.memoizedState;
          if (
            ((u = c.cache),
            ta(t, Tl, u),
            u !== n.cache && qc(t, [Tl], a, !0),
            Wu(),
            (u = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Ro(l, t, u, a);
              break l;
            } else if (u !== e) {
              ((e = ot(Error(h(424)), t)), Zu(e), (t = Ro(l, t, u, a)));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                hl = yt(l.firstChild),
                  Bl = t,
                  K = !0,
                  Pt = null,
                  mt = !0,
                  a = xs(t, null, u, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((Da(), u === e)) {
              t = Rt(l, t, a);
              break l;
            }
            Cl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          dn(l, t),
          l === null
            ? (a = Ph(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : K ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = Nn(Wt.current).createElement(a)),
                (u[Hl] = t),
                (u[Zl] = l),
                Yl(u, a, l),
                Ul(u),
                (t.stateNode = u))
            : (t.memoizedState = Ph(t.type, l.memoizedProps, t.pendingProps, l.memoizedState)),
          null
        );
      case 27:
        return (
          Kn(t),
          l === null &&
            K &&
            ((u = t.stateNode = $h(t.type, t.pendingProps, Wt.current)),
            (Bl = t),
            (mt = !0),
            (e = hl),
            va(t.type) ? ((lf = e), (hl = yt(u.firstChild))) : (hl = e)),
          Cl(l, t, t.pendingProps.children, a),
          dn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            K &&
            ((e = u = hl) &&
              ((u = Mm(u, t.type, t.pendingProps, mt)),
              u !== null
                ? ((t.stateNode = u), (Bl = t), (hl = yt(u.firstChild)), (mt = !1), (e = !0))
                : (e = !1)),
            e || la(t)),
          Kn(t),
          (e = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (u = n.children),
          ki(e, n) ? (u = null) : c !== null && ki(e, c) && (t.flags |= 32),
          t.memoizedState !== null && ((e = Wc(l, t, Z0, null, null, a)), (ye._currentValue = e)),
          dn(l, t),
          Cl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            K &&
            ((l = a = hl) &&
              ((a = Dm(a, t.pendingProps, mt)),
              a !== null ? ((t.stateNode = a), (Bl = t), (hl = null), (l = !0)) : (l = !1)),
            l || la(t)),
          null
        );
      case 13:
        return Go(l, t, a);
      case 4:
        return (
          Ae(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = Ba(t, null, u, a)) : Cl(l, t, u, a),
          t.child
        );
      case 11:
        return jo(l, t, t.type, t.pendingProps, a);
      case 7:
        return (Cl(l, t, t.pendingProps, a), t.child);
      case 8:
        return (Cl(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Cl(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return ((u = t.pendingProps), ta(t, t.type, u.value), Cl(l, t, u.children, a), t.child);
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          ja(t),
          (e = ql(e)),
          (u = u(e)),
          (t.flags |= 1),
          Cl(l, t, u, a),
          t.child
        );
      case 14:
        return Uo(l, t, t.type, t.pendingProps, a);
      case 15:
        return xo(l, t, t.type, t.pendingProps, a);
      case 19:
        return Xo(l, t, a);
      case 31:
        return $0(l, t, a);
      case 22:
        return Ho(l, t, a, t.pendingProps);
      case 24:
        return (
          ja(t),
          (u = ql(Tl)),
          l === null
            ? ((e = Rc()),
              e === null &&
                ((e = cl),
                (n = Cc()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              Qc(t),
              ta(t, Tl, e))
            : ((l.lanes & a) !== 0 && (Xc(l, t), ku(t, null, null, a), Wu()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e),
                  ta(t, Tl, u))
                : ((u = n.cache), ta(t, Tl, u), u !== e.cache && qc(t, [Tl], a, !0))),
          Cl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Gt(l) {
    l.flags |= 4;
  }
  function Ti(l, t, a, u, e) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (e & 335544128) === e))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (yh()) l.flags |= 8192;
        else throw ((Ha = $e), Gc);
    } else l.flags &= -16777217;
  }
  function Lo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (((l.flags |= 16777216), !ed(t)))
      if (yh()) l.flags |= 8192;
      else throw ((Ha = $e), Gc);
  }
  function vn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 && ((t = l.tag !== 22 ? _f() : 536870912), (l.lanes |= t), (Su |= t)));
  }
  function te(l, t) {
    if (!K)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; ) (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; ) (a.alternate !== null && (u = a), (a = a.sibling));
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 65011712),
          (u |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling));
    else
      for (e = l.child; e !== null; )
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling));
    return ((l.subtreeFlags |= u), (l.childLanes = a), t);
  }
  function I0(l, t, a) {
    var u = t.pendingProps;
    switch ((jc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (dl(t), null);
      case 1:
        return (dl(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          qt(Tl),
          Xa(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (eu(t)
              ? Gt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), xc())),
          dl(t),
          null
        );
      case 26:
        var e = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Gt(t), n !== null ? (dl(t), Lo(t, n)) : (dl(t), Ti(t, e, null, u, a)))
            : n
              ? n !== l.memoizedState
                ? (Gt(t), dl(t), Lo(t, n))
                : (dl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps), l !== u && Gt(t), dl(t), Ti(t, e, l, u, a)),
          null
        );
      case 27:
        if ((Ee(t), (a = Wt.current), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Gt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(h(166));
            return (dl(t), null);
          }
          ((l = jl.current), eu(t) ? _s(t) : ((l = $h(e, u, a)), (t.stateNode = l), Gt(t)));
        }
        return (dl(t), null);
      case 5:
        if ((Ee(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Gt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(h(166));
            return (dl(t), null);
          }
          if (((n = jl.current), eu(t))) _s(t);
          else {
            var c = Nn(Wt.current);
            switch (n) {
              case 1:
                n = c.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = c.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = c.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = c.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                    break;
                  case "script":
                    ((n = c.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof u.is == "string"
                        ? c.createElement("select", { is: u.is })
                        : c.createElement("select")),
                      u.multiple ? (n.multiple = !0) : u.size && (n.size = u.size));
                    break;
                  default:
                    n =
                      typeof u.is == "string"
                        ? c.createElement(e, { is: u.is })
                        : c.createElement(e);
                }
            }
            ((n[Hl] = t), (n[Zl] = u));
            l: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break l;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            t.stateNode = n;
            l: switch ((Yl(n, e, u), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Gt(t);
          }
        }
        return (dl(t), Ti(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null);
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Gt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(h(166));
          if (((l = Wt.current), eu(t))) {
            if (((l = t.stateNode), (a = t.memoizedProps), (u = null), (e = Bl), e !== null))
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            ((l[Hl] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                Gh(l.nodeValue, a)
              )),
              l || la(t, !0));
          } else ((l = Nn(l).createTextNode(u)), (l[Hl] = t), (t.stateNode = l));
        }
        return (dl(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((u = eu(t)), a !== null)) {
            if (l === null) {
              if (!u) throw Error(h(318));
              if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
                throw Error(h(557));
              l[Hl] = t;
            } else (Da(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (dl(t), (l = !1));
          } else
            ((a = xc()),
              l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (tt(t), t) : (tt(t), null);
          if ((t.flags & 128) !== 0) throw Error(h(558));
        }
        return (dl(t), null);
      case 13:
        if (
          ((u = t.memoizedState),
          l === null || (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = eu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(h(317));
              e[Hl] = t;
            } else (Da(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (dl(t), (e = !1));
          } else
            ((e = xc()),
              l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e),
              (e = !0));
          if (!e) return t.flags & 256 ? (tt(t), t) : (tt(t), null);
        }
        return (
          tt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = u !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((u = t.child),
                (e = null),
                u.alternate !== null &&
                  u.alternate.memoizedState !== null &&
                  u.alternate.memoizedState.cachePool !== null &&
                  (e = u.alternate.memoizedState.cachePool.pool),
                (n = null),
                u.memoizedState !== null &&
                  u.memoizedState.cachePool !== null &&
                  (n = u.memoizedState.cachePool.pool),
                n !== e && (u.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              vn(t, t.updateQueue),
              dl(t),
              null)
        );
      case 4:
        return (Xa(), l === null && Vi(t.stateNode.containerInfo), dl(t), null);
      case 10:
        return (qt(t.type), dl(t), null);
      case 19:
        if ((yl(zl), (u = t.memoizedState), u === null)) return (dl(t), null);
        if (((e = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) te(u, !1);
          else {
            if (rl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = ln(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      te(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      vn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (gs(a, l), (a = a.sibling));
                  return (P(zl, (zl.current & 1) | 2), K && Ht(t, u.treeForkCount), t.child);
                }
                l = l.sibling;
              }
            u.tail !== null &&
              kl() > bn &&
              ((t.flags |= 128), (e = !0), te(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = ln(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                vn(t, l),
                te(u, !0),
                u.tail === null && u.tailMode === "hidden" && !n.alternate && !K)
              )
                return (dl(t), null);
            } else
              2 * kl() - u.renderingStartTime > bn &&
                a !== 536870912 &&
                ((t.flags |= 128), (e = !0), te(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last), l !== null ? (l.sibling = n) : (t.child = n), (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = kl()),
            (l.sibling = null),
            (a = zl.current),
            P(zl, e ? (a & 1) | 2 : a & 1),
            K && Ht(t, u.treeForkCount),
            l)
          : (dl(t), null);
      case 22:
      case 23:
        return (
          tt(t),
          Kc(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : dl(t),
          (a = t.updateQueue),
          a !== null && vn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && yl(Ua),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          qt(Tl),
          dl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function P0(l, t) {
    switch ((jc(t), t.tag)) {
      case 1:
        return ((l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 3:
        return (
          qt(Tl),
          Xa(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (Ee(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((tt(t), t.alternate === null)) throw Error(h(340));
          Da();
        }
        return ((l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 13:
        if ((tt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)) {
          if (t.alternate === null) throw Error(h(340));
          Da();
        }
        return ((l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null);
      case 19:
        return (yl(zl), null);
      case 4:
        return (Xa(), null);
      case 10:
        return (qt(t.type), null);
      case 22:
      case 23:
        return (
          tt(t),
          Kc(),
          l !== null && yl(Ua),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (qt(Tl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vo(l, t) {
    switch ((jc(t), t.tag)) {
      case 3:
        (qt(Tl), Xa());
        break;
      case 26:
      case 27:
      case 5:
        Ee(t);
        break;
      case 4:
        Xa();
        break;
      case 31:
        t.memoizedState !== null && tt(t);
        break;
      case 13:
        tt(t);
        break;
      case 19:
        yl(zl);
        break;
      case 10:
        qt(t.type);
        break;
      case 22:
      case 23:
        (tt(t), Kc(), l !== null && yl(Ua));
        break;
      case 24:
        qt(Tl);
    }
  }
  function ae(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              c = a.inst;
            ((u = n()), (c.destroy = u));
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (i) {
      tl(t, t.return, i);
    }
  }
  function ia(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var c = u.inst,
              i = c.destroy;
            if (i !== void 0) {
              ((c.destroy = void 0), (e = t));
              var f = a,
                v = i;
              try {
                v();
              } catch (r) {
                tl(e, f, r);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (r) {
      tl(t, t.return, r);
    }
  }
  function Ko(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Bs(t, a);
      } catch (u) {
        tl(l, l.return, u);
      }
    }
  }
  function Jo(l, t, a) {
    ((a.props = Ca(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (u) {
      tl(l, t, u);
    }
  }
  function ue(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(u)) : (a.current = u);
      }
    } catch (e) {
      tl(l, t, e);
    }
  }
  function Ot(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          tl(l, t, e);
        } finally {
          ((l.refCleanup = null), (l = l.alternate), l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          tl(l, t, e);
        }
      else a.current = null;
  }
  function wo(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      tl(l, l.return, e);
    }
  }
  function Ai(l, t, a) {
    try {
      var u = l.stateNode;
      (_m(u, l.type, a, t), (u[Zl] = t));
    } catch (e) {
      tl(l, l.return, e);
    }
  }
  function Wo(l) {
    return (
      l.tag === 5 || l.tag === 3 || l.tag === 26 || (l.tag === 27 && va(l.type)) || l.tag === 4
    );
  }
  function Ei(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Wo(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if ((l.tag === 27 && va(l.type)) || l.flags & 2 || l.child === null || l.tag === 4)
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function pi(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = jt)));
    else if (
      u !== 4 &&
      (u === 27 && va(l.type) && ((a = l.stateNode), (t = null)), (l = l.child), l !== null)
    )
      for (pi(l, t, a), l = l.sibling; l !== null; ) (pi(l, t, a), (l = l.sibling));
  }
  function yn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6) ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (u !== 4 && (u === 27 && va(l.type) && (a = l.stateNode), (l = l.child), l !== null))
      for (yn(l, t, a), l = l.sibling; l !== null; ) (yn(l, t, a), (l = l.sibling));
  }
  function ko(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      (Yl(t, u, a), (t[Hl] = l), (t[Zl] = a));
    } catch (n) {
      tl(l, l.return, n);
    }
  }
  var Qt = !1,
    pl = !1,
    Oi = !1,
    $o = typeof WeakSet == "function" ? WeakSet : Set,
    xl = null;
  function lm(l, t) {
    if (((l = l.containerInfo), (wi = Cn), (l = is(l)), bc(l))) {
      if ("selectionStart" in l) var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              i = -1,
              f = -1,
              v = 0,
              r = 0,
              _ = l,
              y = null;
            t: for (;;) {
              for (
                var g;
                _ !== a || (e !== 0 && _.nodeType !== 3) || (i = c + e),
                  _ !== n || (u !== 0 && _.nodeType !== 3) || (f = c + u),
                  _.nodeType === 3 && (c += _.nodeValue.length),
                  (g = _.firstChild) !== null;
              )
                ((y = _), (_ = g));
              for (;;) {
                if (_ === l) break t;
                if (
                  (y === a && ++v === e && (i = c),
                  y === n && ++r === u && (f = c),
                  (g = _.nextSibling) !== null)
                )
                  break;
                ((_ = y), (y = _.parentNode));
              }
              _ = g;
            }
            a = i === -1 || f === -1 ? null : { start: i, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Wi = { focusedElem: l, selectionRange: a }, Cn = !1, xl = t; xl !== null; )
      if (((t = xl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null))
        ((l.return = t), (xl = l));
      else
        for (; xl !== null; ) {
          switch (((t = xl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue), (l = l !== null ? l.events : null), l !== null)
              )
                for (a = 0; a < l.length; a++) ((e = l[a]), (e.ref.impl = e.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode));
                try {
                  var O = Ca(a.type, e);
                  ((l = u.getSnapshotBeforeUpdate(O, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l));
                } catch (U) {
                  tl(a, a.return, U);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)) Fi(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Fi(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (xl = l));
            break;
          }
          xl = t.return;
        }
  }
  function Fo(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Zt(l, a), u & 4 && ae(5, a));
        break;
      case 1:
        if ((Zt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              tl(a, a.return, c);
            }
          else {
            var e = Ca(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              tl(a, a.return, c);
            }
          }
        (u & 64 && Ko(a), u & 512 && ue(a, a.return));
        break;
      case 3:
        if ((Zt(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Bs(l, t);
          } catch (c) {
            tl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && u & 4 && ko(a);
      case 26:
      case 5:
        (Zt(l, a), t === null && u & 4 && wo(a), u & 512 && ue(a, a.return));
        break;
      case 12:
        Zt(l, a);
        break;
      case 31:
        (Zt(l, a), u & 4 && lh(l, a));
        break;
      case 13:
        (Zt(l, a),
          u & 4 && th(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null && ((l = l.dehydrated), l !== null && ((a = sm.bind(null, a)), Nm(l, a)))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || Qt), !u)) {
          ((t = (t !== null && t.memoizedState !== null) || pl), (e = Qt));
          var n = pl;
          ((Qt = u),
            (pl = t) && !n ? Lt(l, a, (a.subtreeFlags & 8772) !== 0) : Zt(l, a),
            (Qt = e),
            (pl = n));
        }
        break;
      case 30:
        break;
      default:
        Zt(l, a);
    }
  }
  function Io(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), Io(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && ac(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var ml = null,
    Vl = !1;
  function Xt(l, t, a) {
    for (a = a.child; a !== null; ) (Po(l, t, a), (a = a.sibling));
  }
  function Po(l, t, a) {
    if ($l && typeof $l.onCommitFiberUnmount == "function")
      try {
        $l.onCommitFiberUnmount(Mu, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (pl || Ot(a, t),
          Xt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        pl || Ot(a, t);
        var u = ml,
          e = Vl;
        (va(a.type) && ((ml = a.stateNode), (Vl = !1)),
          Xt(l, t, a),
          de(a.stateNode),
          (ml = u),
          (Vl = e));
        break;
      case 5:
        pl || Ot(a, t);
      case 6:
        if (((u = ml), (e = Vl), (ml = null), Xt(l, t, a), (ml = u), (Vl = e), ml !== null))
          if (Vl)
            try {
              (ml.nodeType === 9
                ? ml.body
                : ml.nodeName === "HTML"
                  ? ml.ownerDocument.body
                  : ml
              ).removeChild(a.stateNode);
            } catch (n) {
              tl(a, t, n);
            }
          else
            try {
              ml.removeChild(a.stateNode);
            } catch (n) {
              tl(a, t, n);
            }
        break;
      case 18:
        ml !== null &&
          (Vl
            ? ((l = ml),
              Kh(
                l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
                a.stateNode
              ),
              pu(l))
            : Kh(ml, a.stateNode));
        break;
      case 4:
        ((u = ml),
          (e = Vl),
          (ml = a.stateNode.containerInfo),
          (Vl = !0),
          Xt(l, t, a),
          (ml = u),
          (Vl = e));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ia(2, a, t), pl || ia(4, a, t), Xt(l, t, a));
        break;
      case 1:
        (pl ||
          (Ot(a, t), (u = a.stateNode), typeof u.componentWillUnmount == "function" && Jo(a, t, u)),
          Xt(l, t, a));
        break;
      case 21:
        Xt(l, t, a);
        break;
      case 22:
        ((pl = (u = pl) || a.memoizedState !== null), Xt(l, t, a), (pl = u));
        break;
      default:
        Xt(l, t, a);
    }
  }
  function lh(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        pu(l);
      } catch (a) {
        tl(t, t.return, a);
      }
    }
  }
  function th(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null && ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        pu(l);
      } catch (a) {
        tl(t, t.return, a);
      }
  }
  function tm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new $o()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new $o()),
          t
        );
      default:
        throw Error(h(435, l.tag));
    }
  }
  function gn(l, t) {
    var a = tm(l);
    t.forEach(function (u) {
      if (!a.has(u)) {
        a.add(u);
        var e = om.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function Kl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          c = t,
          i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (va(i.type)) {
                ((ml = i.stateNode), (Vl = !1));
                break l;
              }
              break;
            case 5:
              ((ml = i.stateNode), (Vl = !1));
              break l;
            case 3:
            case 4:
              ((ml = i.stateNode.containerInfo), (Vl = !0));
              break l;
          }
          i = i.return;
        }
        if (ml === null) throw Error(h(160));
        (Po(n, c, e),
          (ml = null),
          (Vl = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null));
      }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (ah(t, l), (t = t.sibling));
  }
  var bt = null;
  function ah(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Kl(t, l), Jl(l), u & 4 && (ia(3, l, l.return), ae(3, l), ia(5, l, l.return)));
        break;
      case 1:
        (Kl(t, l),
          Jl(l),
          u & 512 && (pl || a === null || Ot(a, a.return)),
          u & 64 &&
            Qt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u))))));
        break;
      case 26:
        var e = bt;
        if ((Kl(t, l), Jl(l), u & 512 && (pl || a === null || Ot(a, a.return)), u & 4)) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  ((u = l.type), (a = l.memoizedProps), (e = e.ownerDocument || e));
                  t: switch (u) {
                    case "title":
                      ((n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[ju] ||
                          n[Hl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(n, e.querySelector("head > title"))),
                        Yl(n, u, a),
                        (n[Hl] = l),
                        Ul(n),
                        (u = n));
                      break l;
                    case "link":
                      var c = ad("link", "href", e).get(u + (a.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === "" ? null : a.href) &&
                              n.getAttribute("rel") === (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") === (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)), Yl(n, u, a), e.head.appendChild(n));
                      break;
                    case "meta":
                      if ((c = ad("meta", "content", e).get(u + (a.content || "")))) {
                        for (i = 0; i < c.length; i++)
                          if (
                            ((n = c[i]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") === (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") === (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)), Yl(n, u, a), e.head.appendChild(n));
                      break;
                    default:
                      throw Error(h(468, u));
                  }
                  ((n[Hl] = l), Ul(n), (u = n));
                }
                l.stateNode = u;
              } else ud(e, l.type, l.stateNode);
            else l.stateNode = td(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null ? ud(e, l.type, l.stateNode) : td(e, u, l.memoizedProps))
              : u === null && l.stateNode !== null && Ai(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Kl(t, l),
          Jl(l),
          u & 512 && (pl || a === null || Ot(a, a.return)),
          a !== null && u & 4 && Ai(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if ((Kl(t, l), Jl(l), u & 512 && (pl || a === null || Ot(a, a.return)), l.flags & 32)) {
          e = l.stateNode;
          try {
            Wa(e, "");
          } catch (O) {
            tl(l, l.return, O);
          }
        }
        (u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), Ai(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (Oi = !0));
        break;
      case 6:
        if ((Kl(t, l), Jl(l), u & 4)) {
          if (l.stateNode === null) throw Error(h(162));
          ((u = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = u;
          } catch (O) {
            tl(l, l.return, O);
          }
        }
        break;
      case 3:
        if (
          ((xn = null),
          (e = bt),
          (bt = jn(t.containerInfo)),
          Kl(t, l),
          (bt = e),
          Jl(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            pu(t.containerInfo);
          } catch (O) {
            tl(l, l.return, O);
          }
        Oi && ((Oi = !1), uh(l));
        break;
      case 4:
        ((u = bt), (bt = jn(l.stateNode.containerInfo)), Kl(t, l), Jl(l), (bt = u));
        break;
      case 12:
        (Kl(t, l), Jl(l));
        break;
      case 31:
        (Kl(t, l),
          Jl(l),
          u & 4 && ((u = l.updateQueue), u !== null && ((l.updateQueue = null), gn(l, u))));
        break;
      case 13:
        (Kl(t, l),
          Jl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
            (rn = kl()),
          u & 4 && ((u = l.updateQueue), u !== null && ((l.updateQueue = null), gn(l, u))));
        break;
      case 22:
        e = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          v = Qt,
          r = pl;
        if (((Qt = v || e), (pl = r || f), Kl(t, l), (pl = r), (Qt = v), Jl(l), u & 8192))
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || f || Qt || pl || Ya(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (((n = f.stateNode), e))
                    ((c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none"));
                  else {
                    i = f.stateNode;
                    var _ = f.memoizedProps.style,
                      y = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    i.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (O) {
                  tl(f, f.return, O);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = e ? "" : f.memoizedProps;
                } catch (O) {
                  tl(f, f.return, O);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var g = f.stateNode;
                  e ? Jh(g, !0) : Jh(f.stateNode, !1);
                } catch (O) {
                  tl(f, f.return, O);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null && ((a = u.retryQueue), a !== null && ((u.retryQueue = null), gn(l, a))));
        break;
      case 19:
        (Kl(t, l),
          Jl(l),
          u & 4 && ((u = l.updateQueue), u !== null && ((l.updateQueue = null), gn(l, u))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Kl(t, l), Jl(l));
    }
  }
  function Jl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (Wo(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(h(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = Ei(l);
            yn(l, n, e);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Wa(c, ""), (a.flags &= -33));
            var i = Ei(l);
            yn(l, i, c);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              v = Ei(l);
            pi(l, v, f);
            break;
          default:
            throw Error(h(161));
        }
      } catch (r) {
        tl(l, l.return, r);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function uh(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (uh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (l = l.sibling));
      }
  }
  function Zt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Fo(l, t.alternate, t), (t = t.sibling));
  }
  function Ya(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ia(4, t, t.return), Ya(t));
          break;
        case 1:
          Ot(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Jo(t, t.return, a), Ya(t));
          break;
        case 27:
          de(t.stateNode);
        case 26:
        case 5:
          (Ot(t, t.return), Ya(t));
          break;
        case 22:
          t.memoizedState === null && Ya(t);
          break;
        case 30:
          Ya(t);
          break;
        default:
          Ya(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Lt(e, n, a), ae(4, n));
          break;
        case 1:
          if ((Lt(e, n, a), (u = n), (e = u.stateNode), typeof e.componentDidMount == "function"))
            try {
              e.componentDidMount();
            } catch (v) {
              tl(u, u.return, v);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var i = u.stateNode;
            try {
              var f = e.shared.hiddenCallbacks;
              if (f !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < f.length; e++) Hs(f[e], i);
            } catch (v) {
              tl(u, u.return, v);
            }
          }
          (a && c & 64 && Ko(n), ue(n, n.return));
          break;
        case 27:
          ko(n);
        case 26:
        case 5:
          (Lt(e, n, a), a && u === null && c & 4 && wo(n), ue(n, n.return));
          break;
        case 12:
          Lt(e, n, a);
          break;
        case 31:
          (Lt(e, n, a), a && c & 4 && lh(e, n));
          break;
        case 13:
          (Lt(e, n, a), a && c & 4 && th(e, n));
          break;
        case 22:
          (n.memoizedState === null && Lt(e, n, a), ue(n, n.return));
          break;
        case 30:
          break;
        default:
          Lt(e, n, a);
      }
      t = t.sibling;
    }
  }
  function Mi(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Lu(a)));
  }
  function Di(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Lu(l)));
  }
  function zt(l, t, a, u) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (eh(l, t, a, u), (t = t.sibling));
  }
  function eh(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (zt(l, t, a, u), e & 2048 && ae(9, t));
        break;
      case 1:
        zt(l, t, a, u);
        break;
      case 3:
        (zt(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Lu(l))));
        break;
      case 12:
        if (e & 2048) {
          (zt(l, t, a, u), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              c = n.id,
              i = n.onPostCommit;
            typeof i == "function" &&
              i(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (f) {
            tl(t, t.return, f);
          }
        } else zt(l, t, a, u);
        break;
      case 31:
        zt(l, t, a, u);
        break;
      case 13:
        zt(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? zt(l, t, a, u)
              : ee(l, t)
            : n._visibility & 2
              ? zt(l, t, a, u)
              : ((n._visibility |= 2), vu(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)),
          e & 2048 && Mi(c, t));
        break;
      case 24:
        (zt(l, t, a, u), e & 2048 && Di(t.alternate, t));
        break;
      default:
        zt(l, t, a, u);
    }
  }
  function vu(l, t, a, u, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l,
        c = t,
        i = a,
        f = u,
        v = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (vu(n, c, i, f, e), ae(8, c));
          break;
        case 23:
          break;
        case 22:
          var r = c.stateNode;
          (c.memoizedState !== null
            ? r._visibility & 2
              ? vu(n, c, i, f, e)
              : ee(n, c)
            : ((r._visibility |= 2), vu(n, c, i, f, e)),
            e && v & 2048 && Mi(c.alternate, c));
          break;
        case 24:
          (vu(n, c, i, f, e), e && v & 2048 && Di(c.alternate, c));
          break;
        default:
          vu(n, c, i, f, e);
      }
      t = t.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            (ee(a, u), e & 2048 && Mi(u.alternate, u));
            break;
          case 24:
            (ee(a, u), e & 2048 && Di(u.alternate, u));
            break;
          default:
            ee(a, u);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function yu(l, t, a) {
    if (l.subtreeFlags & ne) for (l = l.child; l !== null; ) (nh(l, t, a), (l = l.sibling));
  }
  function nh(l, t, a) {
    switch (l.tag) {
      case 26:
        (yu(l, t, a),
          l.flags & ne && l.memoizedState !== null && Xm(a, bt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        yu(l, t, a);
        break;
      case 3:
      case 4:
        var u = bt;
        ((bt = jn(l.stateNode.containerInfo)), yu(l, t, a), (bt = u));
        break;
      case 22:
        l.memoizedState === null &&
          ((u = l.alternate),
          u !== null && u.memoizedState !== null
            ? ((u = ne), (ne = 16777216), yu(l, t, a), (ne = u))
            : yu(l, t, a));
        break;
      default:
        yu(l, t, a);
    }
  }
  function ch(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function ce(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((xl = u), fh(u, l));
        }
      ch(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) (ih(l), (l = l.sibling));
  }
  function ih(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (ce(l), l.flags & 2048 && ia(9, l, l.return));
        break;
      case 3:
        ce(l);
        break;
      case 12:
        ce(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), Sn(l))
          : ce(l);
        break;
      default:
        ce(l);
    }
  }
  function Sn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((xl = u), fh(u, l));
        }
      ch(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ia(8, t, t.return), Sn(t));
          break;
        case 22:
          ((a = t.stateNode), a._visibility & 2 && ((a._visibility &= -3), Sn(t)));
          break;
        default:
          Sn(t);
      }
      l = l.sibling;
    }
  }
  function fh(l, t) {
    for (; xl !== null; ) {
      var a = xl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Lu(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) ((u.return = a), (xl = u));
      else
        l: for (a = l; xl !== null; ) {
          u = xl;
          var e = u.sibling,
            n = u.return;
          if ((Io(u), u === a)) {
            xl = null;
            break l;
          }
          if (e !== null) {
            ((e.return = n), (xl = e));
            break l;
          }
          xl = n;
        }
    }
  }
  var am = {
      getCacheForType: function (l) {
        var t = ql(Tl),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return ql(Tl).controller.signal;
      },
    },
    um = typeof WeakMap == "function" ? WeakMap : Map,
    $ = 0,
    cl = null,
    R = null,
    X = 0,
    ll = 0,
    at = null,
    fa = !1,
    gu = !1,
    Ni = !1,
    Vt = 0,
    rl = 0,
    sa = 0,
    Ra = 0,
    ji = 0,
    ut = 0,
    Su = 0,
    ie = null,
    wl = null,
    Ui = !1,
    rn = 0,
    sh = 0,
    bn = 1 / 0,
    zn = null,
    oa = null,
    Ml = 0,
    ha = null,
    ru = null,
    Kt = 0,
    xi = 0,
    Hi = null,
    oh = null,
    fe = 0,
    Bi = null;
  function et() {
    return ($ & 2) !== 0 && X !== 0 ? X & -X : z.T !== null ? Qi() : pf();
  }
  function hh() {
    if (ut === 0)
      if ((X & 536870912) === 0 || K) {
        var l = Me;
        ((Me <<= 1), (Me & 3932160) === 0 && (Me = 262144), (ut = l));
      } else ut = 536870912;
    return ((l = lt.current), l !== null && (l.flags |= 32), ut);
  }
  function Wl(l, t, a) {
    (((l === cl && (ll === 2 || ll === 9)) || l.cancelPendingCommit !== null) &&
      (bu(l, 0), da(l, X, ut, !1)),
      Nu(l, a),
      (($ & 2) === 0 || l !== cl) &&
        (l === cl && (($ & 2) === 0 && (Ra |= a), rl === 4 && da(l, X, ut, !1)), Mt(l)));
  }
  function dh(l, t, a) {
    if (($ & 6) !== 0) throw Error(h(327));
    var u = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Du(l, t),
      e = u ? cm(l, t) : Ci(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        gu && !u && da(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !em(a))) {
          ((e = Ci(l, t, !1)), (n = !1));
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            ((c = l.pendingLanes & -536870913), (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            t = c;
            l: {
              var i = l;
              e = ie;
              var f = i.current.memoizedState.isDehydrated;
              if ((f && (bu(i, c).flags |= 256), (c = Ci(i, c, !1)), c !== 2)) {
                if (Ni && !f) {
                  ((i.errorRecoveryDisabledLanes |= n), (Ra |= n), (e = 4));
                  break l;
                }
                ((n = wl), (wl = e), n !== null && (wl === null ? (wl = n) : wl.push.apply(wl, n)));
              }
              e = c;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          (bu(l, 0), da(l, t, 0, !0));
          break;
        }
        l: {
          switch (((u = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              da(u, t, ut, !fa);
              break l;
            case 2:
              wl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && ((e = rn + 300 - kl()), 10 < e)) {
            if ((da(u, t, ut, !fa), Ne(u, 0, !0) !== 0)) break l;
            ((Kt = t),
              (u.timeoutHandle = Lh(
                mh.bind(null, u, a, wl, zn, Ui, t, ut, Ra, Su, fa, n, "Throttled", -0, 0),
                e
              )));
            break l;
          }
          mh(u, a, wl, zn, Ui, t, ut, Ra, Su, fa, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Mt(l);
  }
  function mh(l, t, a, u, e, n, c, i, f, v, r, _, y, g) {
    if (((l.timeoutHandle = -1), (_ = t.subtreeFlags), _ & 8192 || (_ & 16785408) === 16785408)) {
      ((_ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: jt,
      }),
        nh(t, n, _));
      var O = (n & 62914560) === n ? rn - kl() : (n & 4194048) === n ? sh - kl() : 0;
      if (((O = Zm(_, O)), O !== null)) {
        ((Kt = n),
          (l.cancelPendingCommit = O(_h.bind(null, l, t, n, a, u, e, c, i, f, r, _, null, y, g))),
          da(l, n, c, !v));
        return;
      }
    }
    _h(l, t, n, a, u, e, c, i, f);
  }
  function em(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!Il(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null)) ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function da(l, t, a, u) {
    ((t &= ~ji),
      (t &= ~Ra),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes));
    for (var e = t; 0 < e; ) {
      var n = 31 - Fl(e),
        c = 1 << n;
      ((u[n] = -1), (e &= ~c));
    }
    a !== 0 && Tf(l, a, t);
  }
  function _n() {
    return ($ & 6) === 0 ? (se(0), !1) : !0;
  }
  function qi() {
    if (R !== null) {
      if (ll === 0) var l = R.return;
      else ((l = R), (Bt = Na = null), Fc(l), (su = null), (Ku = 0), (l = R));
      for (; l !== null; ) (Vo(l.alternate, l), (l = l.return));
      R = null;
    }
  }
  function bu(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), Em(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (Kt = 0),
      qi(),
      (cl = l),
      (R = a = xt(l.current, null)),
      (X = t),
      (ll = 0),
      (at = null),
      (fa = !1),
      (gu = Du(l, t)),
      (Ni = !1),
      (Su = ut = ji = Ra = sa = rl = 0),
      (wl = ie = null),
      (Ui = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Fl(u),
          n = 1 << e;
        ((t |= l[e]), (u &= ~n));
      }
    return ((Vt = t), Xe(), a);
  }
  function vh(l, t) {
    ((H = null),
      (z.H = Pu),
      t === fu || t === ke
        ? ((t = Ns()), (ll = 3))
        : t === Gc
          ? ((t = Ns()), (ll = 4))
          : (ll =
              t === mi
                ? 8
                : t !== null && typeof t == "object" && typeof t.then == "function"
                  ? 6
                  : 1),
      (at = t),
      R === null && ((rl = 1), on(l, ot(t, l.current))));
  }
  function yh() {
    var l = lt.current;
    return l === null
      ? !0
      : (X & 4194048) === X
        ? vt === null
        : (X & 62914560) === X || (X & 536870912) !== 0
          ? l === vt
          : !1;
  }
  function gh() {
    var l = z.H;
    return ((z.H = Pu), l === null ? Pu : l);
  }
  function Sh() {
    var l = z.A;
    return ((z.A = am), l);
  }
  function Tn() {
    ((rl = 4),
      fa || ((X & 4194048) !== X && lt.current !== null) || (gu = !0),
      ((sa & 134217727) === 0 && (Ra & 134217727) === 0) || cl === null || da(cl, X, ut, !1));
  }
  function Ci(l, t, a) {
    var u = $;
    $ |= 2;
    var e = gh(),
      n = Sh();
    ((cl !== l || X !== t) && ((zn = null), bu(l, t)), (t = !1));
    var c = rl;
    l: do
      try {
        if (ll !== 0 && R !== null) {
          var i = R,
            f = at;
          switch (ll) {
            case 8:
              (qi(), (c = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              lt.current === null && (t = !0);
              var v = ll;
              if (((ll = 0), (at = null), zu(l, i, f, v), a && gu)) {
                c = 0;
                break l;
              }
              break;
            default:
              ((v = ll), (ll = 0), (at = null), zu(l, i, f, v));
          }
        }
        (nm(), (c = rl));
        break;
      } catch (r) {
        vh(l, r);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Bt = Na = null),
      ($ = u),
      (z.H = e),
      (z.A = n),
      R === null && ((cl = null), (X = 0), Xe()),
      c
    );
  }
  function nm() {
    for (; R !== null; ) rh(R);
  }
  function cm(l, t) {
    var a = $;
    $ |= 2;
    var u = gh(),
      e = Sh();
    cl !== l || X !== t ? ((zn = null), (bn = kl() + 500), bu(l, t)) : (gu = Du(l, t));
    l: do
      try {
        if (ll !== 0 && R !== null) {
          t = R;
          var n = at;
          t: switch (ll) {
            case 1:
              ((ll = 0), (at = null), zu(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (Ms(n)) {
                ((ll = 0), (at = null), bh(t));
                break;
              }
              ((t = function () {
                ((ll !== 2 && ll !== 9) || cl !== l || (ll = 7), Mt(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              ll = 7;
              break l;
            case 4:
              ll = 5;
              break l;
            case 7:
              Ms(n) ? ((ll = 0), (at = null), bh(t)) : ((ll = 0), (at = null), zu(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (R.tag) {
                case 26:
                  c = R.memoizedState;
                case 5:
                case 27:
                  var i = R;
                  if (c ? ed(c) : i.stateNode.complete) {
                    ((ll = 0), (at = null));
                    var f = i.sibling;
                    if (f !== null) R = f;
                    else {
                      var v = i.return;
                      v !== null ? ((R = v), An(v)) : (R = null);
                    }
                    break t;
                  }
              }
              ((ll = 0), (at = null), zu(l, t, n, 5));
              break;
            case 6:
              ((ll = 0), (at = null), zu(l, t, n, 6));
              break;
            case 8:
              (qi(), (rl = 6));
              break l;
            default:
              throw Error(h(462));
          }
        }
        im();
        break;
      } catch (r) {
        vh(l, r);
      }
    while (!0);
    return (
      (Bt = Na = null),
      (z.H = u),
      (z.A = e),
      ($ = a),
      R !== null ? 0 : ((cl = null), (X = 0), Xe(), rl)
    );
  }
  function im() {
    for (; R !== null && !jd(); ) rh(R);
  }
  function rh(l) {
    var t = Zo(l.alternate, l, Vt);
    ((l.memoizedProps = l.pendingProps), t === null ? An(l) : (R = t));
  }
  function bh(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Co(a, t, t.pendingProps, t.type, void 0, X);
        break;
      case 11:
        t = Co(a, t, t.pendingProps, t.type.render, t.ref, X);
        break;
      case 5:
        Fc(t);
      default:
        (Vo(a, t), (t = R = gs(t, Vt)), (t = Zo(a, t, Vt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? An(l) : (R = t));
  }
  function zu(l, t, a, u) {
    ((Bt = Na = null), Fc(t), (su = null), (Ku = 0));
    var e = t.return;
    try {
      if (k0(l, e, t, a, X)) {
        ((rl = 1), on(l, ot(a, l.current)), (R = null));
        return;
      }
    } catch (n) {
      if (e !== null) throw ((R = e), n);
      ((rl = 1), on(l, ot(a, l.current)), (R = null));
      return;
    }
    t.flags & 32768
      ? (K || u === 1
          ? (l = !0)
          : gu || (X & 536870912) !== 0
            ? (l = !1)
            : ((fa = l = !0),
              (u === 2 || u === 9 || u === 3 || u === 6) &&
                ((u = lt.current), u !== null && u.tag === 13 && (u.flags |= 16384))),
        zh(t, l))
      : An(t);
  }
  function An(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        zh(t, fa);
        return;
      }
      l = t.return;
      var a = I0(t.alternate, t, Vt);
      if (a !== null) {
        R = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        R = t;
        return;
      }
      R = t = l;
    } while (t !== null);
    rl === 0 && (rl = 5);
  }
  function zh(l, t) {
    do {
      var a = P0(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (R = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        R = l;
        return;
      }
      R = l = a;
    } while (l !== null);
    ((rl = 6), (R = null));
  }
  function _h(l, t, a, u, e, n, c, i, f) {
    l.cancelPendingCommit = null;
    do En();
    while (Ml !== 0);
    if (($ & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= Ec),
        Qd(l, a, n, c, i, f),
        l === cl && ((R = cl = null), (X = 0)),
        (ru = t),
        (ha = l),
        (Kt = a),
        (xi = n),
        (Hi = e),
        (oh = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            hm(pe, function () {
              return (Oh(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        ((u = z.T), (z.T = null), (e = p.p), (p.p = 2), (c = $), ($ |= 4));
        try {
          lm(l, t, a);
        } finally {
          (($ = c), (p.p = e), (z.T = u));
        }
      }
      ((Ml = 1), Th(), Ah(), Eh());
    }
  }
  function Th() {
    if (Ml === 1) {
      Ml = 0;
      var l = ha,
        t = ru,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = z.T), (z.T = null));
        var u = p.p;
        p.p = 2;
        var e = $;
        $ |= 4;
        try {
          ah(t, l);
          var n = Wi,
            c = is(l.containerInfo),
            i = n.focusedElem,
            f = n.selectionRange;
          if (c !== i && i && i.ownerDocument && cs(i.ownerDocument.documentElement, i)) {
            if (f !== null && bc(i)) {
              var v = f.start,
                r = f.end;
              if ((r === void 0 && (r = v), "selectionStart" in i))
                ((i.selectionStart = v), (i.selectionEnd = Math.min(r, i.value.length)));
              else {
                var _ = i.ownerDocument || document,
                  y = (_ && _.defaultView) || window;
                if (y.getSelection) {
                  var g = y.getSelection(),
                    O = i.textContent.length,
                    U = Math.min(f.start, O),
                    el = f.end === void 0 ? U : Math.min(f.end, O);
                  !g.extend && U > el && ((c = el), (el = U), (U = c));
                  var o = ns(i, U),
                    s = ns(i, el);
                  if (
                    o &&
                    s &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== o.node ||
                      g.anchorOffset !== o.offset ||
                      g.focusNode !== s.node ||
                      g.focusOffset !== s.offset)
                  ) {
                    var m = _.createRange();
                    (m.setStart(o.node, o.offset),
                      g.removeAllRanges(),
                      U > el
                        ? (g.addRange(m), g.extend(s.node, s.offset))
                        : (m.setEnd(s.node, s.offset), g.addRange(m)));
                  }
                }
              }
            }
            for (_ = [], g = i; (g = g.parentNode); )
              g.nodeType === 1 && _.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < _.length; i++) {
              var b = _[i];
              ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
            }
          }
          ((Cn = !!wi), (Wi = wi = null));
        } finally {
          (($ = e), (p.p = u), (z.T = a));
        }
      }
      ((l.current = t), (Ml = 2));
    }
  }
  function Ah() {
    if (Ml === 2) {
      Ml = 0;
      var l = ha,
        t = ru,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = z.T), (z.T = null));
        var u = p.p;
        p.p = 2;
        var e = $;
        $ |= 4;
        try {
          Fo(l, t.alternate, t);
        } finally {
          (($ = e), (p.p = u), (z.T = a));
        }
      }
      Ml = 3;
    }
  }
  function Eh() {
    if (Ml === 4 || Ml === 3) {
      ((Ml = 0), Ud());
      var l = ha,
        t = ru,
        a = Kt,
        u = oh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ml = 5)
        : ((Ml = 0), (ru = ha = null), ph(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (oa = null),
        lc(a),
        (t = t.stateNode),
        $l && typeof $l.onCommitFiberRoot == "function")
      )
        try {
          $l.onCommitFiberRoot(Mu, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        ((t = z.T), (e = p.p), (p.p = 2), (z.T = null));
        try {
          for (var n = l.onRecoverableError, c = 0; c < u.length; c++) {
            var i = u[c];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          ((z.T = t), (p.p = e));
        }
      }
      ((Kt & 3) !== 0 && En(),
        Mt(l),
        (e = l.pendingLanes),
        (a & 261930) !== 0 && (e & 42) !== 0 ? (l === Bi ? fe++ : ((fe = 0), (Bi = l))) : (fe = 0),
        se(0));
    }
  }
  function ph(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Lu(t)));
  }
  function En() {
    return (Th(), Ah(), Eh(), Oh());
  }
  function Oh() {
    if (Ml !== 5) return !1;
    var l = ha,
      t = xi;
    xi = 0;
    var a = lc(Kt),
      u = z.T,
      e = p.p;
    try {
      ((p.p = 32 > a ? 32 : a), (z.T = null), (a = Hi), (Hi = null));
      var n = ha,
        c = Kt;
      if (((Ml = 0), (ru = ha = null), (Kt = 0), ($ & 6) !== 0)) throw Error(h(331));
      var i = $;
      if (
        (($ |= 4),
        ih(n.current),
        eh(n, n.current, c, a),
        ($ = i),
        se(0, !1),
        $l && typeof $l.onPostCommitFiberRoot == "function")
      )
        try {
          $l.onPostCommitFiberRoot(Mu, n);
        } catch {}
      return !0;
    } finally {
      ((p.p = e), (z.T = u), ph(l, t));
    }
  }
  function Mh(l, t, a) {
    ((t = ot(a, t)),
      (t = di(l.stateNode, t, 2)),
      (l = ea(l, t, 2)),
      l !== null && (Nu(l, 2), Mt(l)));
  }
  function tl(l, t, a) {
    if (l.tag === 3) Mh(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Mh(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" && (oa === null || !oa.has(u)))
          ) {
            ((l = ot(a, l)),
              (a = Do(2)),
              (u = ea(t, a, 2)),
              u !== null && (No(a, u, t, l), Nu(u, 2), Mt(u)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Yi(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new um();
      var e = new Set();
      u.set(t, e);
    } else ((e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e)));
    e.has(a) || ((Ni = !0), e.add(a), (l = fm.bind(null, l, t, a)), t.then(l, l));
  }
  function fm(l, t, a) {
    var u = l.pingCache;
    (u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      cl === l &&
        (X & a) === a &&
        (rl === 4 || (rl === 3 && (X & 62914560) === X && 300 > kl() - rn)
          ? ($ & 2) === 0 && bu(l, 0)
          : (ji |= a),
        Su === X && (Su = 0)),
      Mt(l));
  }
  function Dh(l, t) {
    (t === 0 && (t = _f()), (l = Oa(l, t)), l !== null && (Nu(l, t), Mt(l)));
  }
  function sm(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Dh(l, a));
  }
  function om(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    (u !== null && u.delete(t), Dh(l, a));
  }
  function hm(l, t) {
    return $n(l, t);
  }
  var pn = null,
    _u = null,
    Ri = !1,
    On = !1,
    Gi = !1,
    ma = 0;
  function Mt(l) {
    (l !== _u && l.next === null && (_u === null ? (pn = _u = l) : (_u = _u.next = l)),
      (On = !0),
      Ri || ((Ri = !0), mm()));
  }
  function se(l, t) {
    if (!Gi && On) {
      Gi = !0;
      do
        for (var a = !1, u = pn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = u.suspendedLanes,
                i = u.pingedLanes;
              ((n = (1 << (31 - Fl(42 | l) + 1)) - 1),
                (n &= e & ~(c & ~i)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), xh(u, n));
          } else
            ((n = X),
              (n = Ne(
                u,
                u === cl ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Du(u, n) || ((a = !0), xh(u, n)));
          u = u.next;
        }
      while (a);
      Gi = !1;
    }
  }
  function dm() {
    Nh();
  }
  function Nh() {
    On = Ri = !1;
    var l = 0;
    ma !== 0 && Am() && (l = ma);
    for (var t = kl(), a = null, u = pn; u !== null; ) {
      var e = u.next,
        n = jh(u, t);
      (n === 0
        ? ((u.next = null), a === null ? (pn = e) : (a.next = e), e === null && (_u = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (On = !0)),
        (u = e));
    }
    ((Ml !== 0 && Ml !== 5) || se(l), ma !== 0 && (ma = 0));
  }
  function jh(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var c = 31 - Fl(n),
        i = 1 << c,
        f = e[c];
      (f === -1
        ? ((i & a) === 0 || (i & u) !== 0) && (e[c] = Gd(i, t))
        : f <= t && (l.expiredLanes |= i),
        (n &= ~i));
    }
    if (
      ((t = cl),
      (a = X),
      (a = Ne(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
      (u = l.callbackNode),
      a === 0 || (l === t && (ll === 2 || ll === 9)) || l.cancelPendingCommit !== null)
    )
      return (u !== null && u !== null && Fn(u), (l.callbackNode = null), (l.callbackPriority = 0));
    if ((a & 3) === 0 || Du(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && Fn(u), lc(a))) {
        case 2:
        case 8:
          a = bf;
          break;
        case 32:
          a = pe;
          break;
        case 268435456:
          a = zf;
          break;
        default:
          a = pe;
      }
      return (
        (u = Uh.bind(null, l)),
        (a = $n(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && Fn(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Uh(l, t) {
    if (Ml !== 0 && Ml !== 5) return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (En() && l.callbackNode !== a) return null;
    var u = X;
    return (
      (u = Ne(l, l === cl ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1)),
      u === 0
        ? null
        : (dh(l, u, t),
          jh(l, kl()),
          l.callbackNode != null && l.callbackNode === a ? Uh.bind(null, l) : null)
    );
  }
  function xh(l, t) {
    if (En()) return null;
    dh(l, t, !0);
  }
  function mm() {
    pm(function () {
      ($ & 6) !== 0 ? $n(rf, dm) : Nh();
    });
  }
  function Qi() {
    if (ma === 0) {
      var l = cu;
      (l === 0 && ((l = Oe), (Oe <<= 1), (Oe & 261888) === 0 && (Oe = 256)), (ma = l));
    }
    return ma;
  }
  function Hh(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : He("" + l);
  }
  function Bh(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function vm(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Hh((e[Zl] || null).action),
        c = u.submitter;
      c &&
        ((t = (t = c[Zl] || null) ? Hh(t.formAction) : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var i = new Ye("action", "action", null, u, e);
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (ma !== 0) {
                  var f = c ? Bh(e, c) : new FormData(e);
                  ci(a, { pending: !0, data: f, method: e.method, action: n }, null, f);
                }
              } else
                typeof n == "function" &&
                  (i.preventDefault(),
                  (f = c ? Bh(e, c) : new FormData(e)),
                  ci(a, { pending: !0, data: f, method: e.method, action: n }, n, f));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Xi = 0; Xi < Ac.length; Xi++) {
    var Zi = Ac[Xi],
      ym = Zi.toLowerCase(),
      gm = Zi[0].toUpperCase() + Zi.slice(1);
    rt(ym, "on" + gm);
  }
  (rt(os, "onAnimationEnd"),
    rt(hs, "onAnimationIteration"),
    rt(ds, "onAnimationStart"),
    rt("dblclick", "onDoubleClick"),
    rt("focusin", "onFocus"),
    rt("focusout", "onBlur"),
    rt(x0, "onTransitionRun"),
    rt(H0, "onTransitionStart"),
    rt(B0, "onTransitionCancel"),
    rt(ms, "onTransitionEnd"),
    Ja("onMouseEnter", ["mouseout", "mouseover"]),
    Ja("onMouseLeave", ["mouseout", "mouseover"]),
    Ja("onPointerEnter", ["pointerout", "pointerover"]),
    Ja("onPointerLeave", ["pointerout", "pointerover"]),
    Ta("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ta(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ta("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ta("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ta(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ta(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    ));
  var oe =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Sm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oe)
    );
  function qh(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = u.length - 1; 0 <= c; c--) {
            var i = u[c],
              f = i.instance,
              v = i.currentTarget;
            if (((i = i.listener), f !== n && e.isPropagationStopped())) break l;
            ((n = i), (e.currentTarget = v));
            try {
              n(e);
            } catch (r) {
              Qe(r);
            }
            ((e.currentTarget = null), (n = f));
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((i = u[c]),
              (f = i.instance),
              (v = i.currentTarget),
              (i = i.listener),
              f !== n && e.isPropagationStopped())
            )
              break l;
            ((n = i), (e.currentTarget = v));
            try {
              n(e);
            } catch (r) {
              Qe(r);
            }
            ((e.currentTarget = null), (n = f));
          }
      }
    }
  }
  function G(l, t) {
    var a = t[tc];
    a === void 0 && (a = t[tc] = new Set());
    var u = l + "__bubble";
    a.has(u) || (Ch(t, l, 2, !1), a.add(u));
  }
  function Li(l, t, a) {
    var u = 0;
    (t && (u |= 4), Ch(a, l, u, t));
  }
  var Mn = "_reactListening" + Math.random().toString(36).slice(2);
  function Vi(l) {
    if (!l[Mn]) {
      ((l[Mn] = !0),
        Df.forEach(function (a) {
          a !== "selectionchange" && (Sm.has(a) || Li(a, !1, l), Li(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Mn] || ((t[Mn] = !0), Li("selectionchange", !1, t));
    }
  }
  function Ch(l, t, a, u) {
    switch (hd(t)) {
      case 2:
        var e = Km;
        break;
      case 8:
        e = Jm;
        break;
      default:
        e = nf;
    }
    ((a = e.bind(null, t, a, l)),
      (e = void 0),
      !oc || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
          ? l.addEventListener(t, a, { passive: e })
          : l.addEventListener(t, a, !1));
  }
  function Ki(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var i = u.stateNode.containerInfo;
          if (i === e) break;
          if (c === 4)
            for (c = u.return; c !== null; ) {
              var f = c.tag;
              if ((f === 3 || f === 4) && c.stateNode.containerInfo === e) return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (((c = La(i)), c === null)) return;
            if (((f = c.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              u = n = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        u = u.return;
      }
    Qf(function () {
      var v = n,
        r = fc(a),
        _ = [];
      l: {
        var y = vs.get(l);
        if (y !== void 0) {
          var g = Ye,
            O = l;
          switch (l) {
            case "keypress":
              if (qe(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = o0;
              break;
            case "focusin":
              ((O = "focus"), (g = vc));
              break;
            case "focusout":
              ((O = "blur"), (g = vc));
              break;
            case "beforeblur":
            case "afterblur":
              g = vc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Lf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Id;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = m0;
              break;
            case os:
            case hs:
            case ds:
              g = t0;
              break;
            case ms:
              g = y0;
              break;
            case "scroll":
            case "scrollend":
              g = $d;
              break;
            case "wheel":
              g = S0;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = u0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Kf;
              break;
            case "toggle":
            case "beforetoggle":
              g = b0;
          }
          var U = (t & 4) !== 0,
            el = !U && (l === "scroll" || l === "scrollend"),
            o = U ? (y !== null ? y + "Capture" : null) : y;
          U = [];
          for (var s = v, m; s !== null; ) {
            var b = s;
            if (
              ((m = b.stateNode),
              (b = b.tag),
              (b !== 5 && b !== 26 && b !== 27) ||
                m === null ||
                o === null ||
                ((b = xu(s, o)), b != null && U.push(he(s, b, m))),
              el)
            )
              break;
            s = s.return;
          }
          0 < U.length && ((y = new g(y, O, null, a, r)), _.push({ event: y, listeners: U }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((y = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            y && a !== ic && (O = a.relatedTarget || a.fromElement) && (La(O) || O[Za]))
          )
            break l;
          if (
            (g || y) &&
            ((y =
              r.window === r
                ? r
                : (y = r.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            g
              ? ((O = a.relatedTarget || a.toElement),
                (g = v),
                (O = O ? La(O) : null),
                O !== null &&
                  ((el = A(O)), (U = O.tag), O !== el || (U !== 5 && U !== 27 && U !== 6)) &&
                  (O = null))
              : ((g = null), (O = v)),
            g !== O)
          ) {
            if (
              ((U = Lf),
              (b = "onMouseLeave"),
              (o = "onMouseEnter"),
              (s = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((U = Kf), (b = "onPointerLeave"), (o = "onPointerEnter"), (s = "pointer")),
              (el = g == null ? y : Uu(g)),
              (m = O == null ? y : Uu(O)),
              (y = new U(b, s + "leave", g, a, r)),
              (y.target = el),
              (y.relatedTarget = m),
              (b = null),
              La(r) === v &&
                ((U = new U(o, s + "enter", O, a, r)),
                (U.target = m),
                (U.relatedTarget = el),
                (b = U)),
              (el = b),
              g && O)
            )
              t: {
                for (U = rm, o = g, s = O, m = 0, b = o; b; b = U(b)) m++;
                b = 0;
                for (var j = s; j; j = U(j)) b++;
                for (; 0 < m - b; ) ((o = U(o)), m--);
                for (; 0 < b - m; ) ((s = U(s)), b--);
                for (; m--; ) {
                  if (o === s || (s !== null && o === s.alternate)) {
                    U = o;
                    break t;
                  }
                  ((o = U(o)), (s = U(s)));
                }
                U = null;
              }
            else U = null;
            (g !== null && Yh(_, y, g, U, !1), O !== null && el !== null && Yh(_, el, O, U, !0));
          }
        }
        l: {
          if (
            ((y = v ? Uu(v) : window),
            (g = y.nodeName && y.nodeName.toLowerCase()),
            g === "select" || (g === "input" && y.type === "file"))
          )
            var W = Pf;
          else if (Ff(y))
            if (ls) W = N0;
            else {
              W = M0;
              var M = O0;
            }
          else
            ((g = y.nodeName),
              !g || g.toLowerCase() !== "input" || (y.type !== "checkbox" && y.type !== "radio")
                ? v && cc(v.elementType) && (W = Pf)
                : (W = D0));
          if (W && (W = W(l, v))) {
            If(_, W, a, r);
            break l;
          }
          (M && M(l, y, v),
            l === "focusout" &&
              v &&
              y.type === "number" &&
              v.memoizedProps.value != null &&
              nc(y, "number", y.value));
        }
        switch (((M = v ? Uu(v) : window), l)) {
          case "focusin":
            (Ff(M) || M.contentEditable === "true") && ((Ia = M), (zc = v), (Qu = null));
            break;
          case "focusout":
            Qu = zc = Ia = null;
            break;
          case "mousedown":
            _c = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((_c = !1), fs(_, a, r));
            break;
          case "selectionchange":
            if (U0) break;
          case "keydown":
          case "keyup":
            fs(_, a, r);
        }
        var q;
        if (gc)
          l: {
            switch (l) {
              case "compositionstart":
                var Z = "onCompositionStart";
                break l;
              case "compositionend":
                Z = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Z = "onCompositionUpdate";
                break l;
            }
            Z = void 0;
          }
        else
          Fa
            ? kf(l, a) && (Z = "onCompositionEnd")
            : l === "keydown" && a.keyCode === 229 && (Z = "onCompositionStart");
        (Z &&
          (Jf &&
            a.locale !== "ko" &&
            (Fa || Z !== "onCompositionStart"
              ? Z === "onCompositionEnd" && Fa && (q = Xf())
              : ((Ft = r), (hc = "value" in Ft ? Ft.value : Ft.textContent), (Fa = !0))),
          (M = Dn(v, Z)),
          0 < M.length &&
            ((Z = new Vf(Z, l, null, a, r)),
            _.push({ event: Z, listeners: M }),
            q ? (Z.data = q) : ((q = $f(a)), q !== null && (Z.data = q)))),
          (q = _0 ? T0(l, a) : A0(l, a)) &&
            ((Z = Dn(v, "onBeforeInput")),
            0 < Z.length &&
              ((M = new Vf("onBeforeInput", "beforeinput", null, a, r)),
              _.push({ event: M, listeners: Z }),
              (M.data = q))),
          vm(_, l, v, a, r));
      }
      qh(_, t);
    });
  }
  function he(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Dn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = xu(l, a)),
          e != null && u.unshift(he(l, e, n)),
          (e = xu(l, t)),
          e != null && u.push(he(l, e, n))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function rm(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Yh(l, t, a, u, e) {
    for (var n = t._reactName, c = []; a !== null && a !== u; ) {
      var i = a,
        f = i.alternate,
        v = i.stateNode;
      if (((i = i.tag), f !== null && f === u)) break;
      ((i !== 5 && i !== 26 && i !== 27) ||
        v === null ||
        ((f = v),
        e
          ? ((v = xu(a, n)), v != null && c.unshift(he(a, v, f)))
          : e || ((v = xu(a, n)), v != null && c.push(he(a, v, f)))),
        (a = a.return));
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var bm = /\r\n?/g,
    zm = /\u0000|\uFFFD/g;
  function Rh(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        bm,
        `
`
      )
      .replace(zm, "");
  }
  function Gh(l, t) {
    return ((t = Rh(t)), Rh(l) === t);
  }
  function ul(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || Wa(l, u)
          : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Wa(l, "" + u);
        break;
      case "className":
        Ue(l, "class", u);
        break;
      case "tabIndex":
        Ue(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ue(l, a, u);
        break;
      case "style":
        Rf(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Ue(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((u = He("" + u)), l.setAttribute(a, u));
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && ul(l, t, "name", e.name, e, null),
                ul(l, t, "formEncType", e.formEncType, e, null),
                ul(l, t, "formMethod", e.formMethod, e, null),
                ul(l, t, "formTarget", e.formTarget, e, null))
              : (ul(l, t, "encType", e.encType, e, null),
                ul(l, t, "method", e.method, e, null),
                ul(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((u = He("" + u)), l.setAttribute(a, u));
        break;
      case "onClick":
        u != null && (l.onclick = jt);
        break;
      case "onScroll":
        u != null && G("scroll", l);
        break;
      case "onScrollEnd":
        u != null && G("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(h(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = He("" + u)), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol"
            ? l.setAttribute(a, u)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        (G("beforetoggle", l), G("toggle", l), je(l, "popover", u));
        break;
      case "xlinkActuate":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        je(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || (a[0] !== "o" && a[0] !== "O") || (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Wd.get(a) || a), je(l, a, u));
    }
  }
  function Ji(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Rf(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(h(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? Wa(l, u)
          : (typeof u == "number" || typeof u == "bigint") && Wa(l, "" + u);
        break;
      case "onScroll":
        u != null && G("scroll", l);
        break;
      case "onScrollEnd":
        u != null && G("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = jt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Nf.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Zl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l ? (l[a] = null) : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e));
              break l;
            }
            a in l ? (l[a] = u) : u === !0 ? l.setAttribute(a, "") : je(l, a, u);
          }
    }
  }
  function Yl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (G("error", l), G("load", l));
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  ul(l, t, n, c, a, null);
              }
          }
        (e && ul(l, t, "srcSet", a.srcSet, a, null), u && ul(l, t, "src", a.src, a, null));
        return;
      case "input":
        G("invalid", l);
        var i = (n = c = e = null),
          f = null,
          v = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var r = a[u];
            if (r != null)
              switch (u) {
                case "name":
                  e = r;
                  break;
                case "type":
                  c = r;
                  break;
                case "checked":
                  f = r;
                  break;
                case "defaultChecked":
                  v = r;
                  break;
                case "value":
                  n = r;
                  break;
                case "defaultValue":
                  i = r;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (r != null) throw Error(h(137, t));
                  break;
                default:
                  ul(l, t, u, r, a, null);
              }
          }
        Bf(l, n, i, f, v, c, e, !1);
        return;
      case "select":
        (G("invalid", l), (u = c = n = null));
        for (e in a)
          if (a.hasOwnProperty(e) && ((i = a[e]), i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                u = i;
              default:
                ul(l, t, e, i, a, null);
            }
        ((t = n),
          (a = c),
          (l.multiple = !!u),
          t != null ? wa(l, !!u, t, !1) : a != null && wa(l, !!u, a, !0));
        return;
      case "textarea":
        (G("invalid", l), (n = e = u = null));
        for (c in a)
          if (a.hasOwnProperty(c) && ((i = a[c]), i != null))
            switch (c) {
              case "value":
                u = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(h(91));
                break;
              default:
                ul(l, t, c, i, a, null);
            }
        Cf(l, u, e, n);
        return;
      case "option":
        for (f in a)
          if (a.hasOwnProperty(f) && ((u = a[f]), u != null))
            switch (f) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                ul(l, t, f, u, a, null);
            }
        return;
      case "dialog":
        (G("beforetoggle", l), G("toggle", l), G("cancel", l), G("close", l));
        break;
      case "iframe":
      case "object":
        G("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < oe.length; u++) G(oe[u], l);
        break;
      case "image":
        (G("error", l), G("load", l));
        break;
      case "details":
        G("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (G("error", l), G("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in a)
          if (a.hasOwnProperty(v) && ((u = a[v]), u != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                ul(l, t, v, u, a, null);
            }
        return;
      default:
        if (cc(t)) {
          for (r in a)
            a.hasOwnProperty(r) && ((u = a[r]), u !== void 0 && Ji(l, t, r, u, a, void 0));
          return;
        }
    }
    for (i in a) a.hasOwnProperty(i) && ((u = a[i]), u != null && ul(l, t, i, u, a, null));
  }
  function _m(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          c = null,
          i = null,
          f = null,
          v = null,
          r = null;
        for (g in a) {
          var _ = a[g];
          if (a.hasOwnProperty(g) && _ != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = _;
              default:
                u.hasOwnProperty(g) || ul(l, t, g, null, u, _);
            }
        }
        for (var y in u) {
          var g = u[y];
          if (((_ = a[y]), u.hasOwnProperty(y) && (g != null || _ != null)))
            switch (y) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                v = g;
                break;
              case "defaultChecked":
                r = g;
                break;
              case "value":
                c = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(h(137, t));
                break;
              default:
                g !== _ && ul(l, t, y, g, u, _);
            }
        }
        ec(l, c, i, f, v, r, n, e);
        return;
      case "select":
        g = c = i = y = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                u.hasOwnProperty(n) || ul(l, t, n, null, u, f);
            }
        for (e in u)
          if (((n = u[e]), (f = a[e]), u.hasOwnProperty(e) && (n != null || f != null)))
            switch (e) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== f && ul(l, t, e, n, u, f);
            }
        ((t = i),
          (a = c),
          (u = g),
          y != null
            ? wa(l, !!a, y, !1)
            : !!u != !!a && (t != null ? wa(l, !!a, t, !0) : wa(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        g = y = null;
        for (i in a)
          if (((e = a[i]), a.hasOwnProperty(i) && e != null && !u.hasOwnProperty(i)))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                ul(l, t, i, null, u, e);
            }
        for (c in u)
          if (((e = u[c]), (n = a[c]), u.hasOwnProperty(c) && (e != null || n != null)))
            switch (c) {
              case "value":
                y = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && ul(l, t, c, e, u, n);
            }
        qf(l, y, g);
        return;
      case "option":
        for (var O in a)
          if (((y = a[O]), a.hasOwnProperty(O) && y != null && !u.hasOwnProperty(O)))
            switch (O) {
              case "selected":
                l.selected = !1;
                break;
              default:
                ul(l, t, O, null, u, y);
            }
        for (f in u)
          if (((y = u[f]), (g = a[f]), u.hasOwnProperty(f) && y !== g && (y != null || g != null)))
            switch (f) {
              case "selected":
                l.selected = y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                ul(l, t, f, y, u, g);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var U in a)
          ((y = a[U]),
            a.hasOwnProperty(U) && y != null && !u.hasOwnProperty(U) && ul(l, t, U, null, u, y));
        for (v in u)
          if (((y = u[v]), (g = a[v]), u.hasOwnProperty(v) && y !== g && (y != null || g != null)))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(h(137, t));
                break;
              default:
                ul(l, t, v, y, u, g);
            }
        return;
      default:
        if (cc(t)) {
          for (var el in a)
            ((y = a[el]),
              a.hasOwnProperty(el) &&
                y !== void 0 &&
                !u.hasOwnProperty(el) &&
                Ji(l, t, el, void 0, u, y));
          for (r in u)
            ((y = u[r]),
              (g = a[r]),
              !u.hasOwnProperty(r) ||
                y === g ||
                (y === void 0 && g === void 0) ||
                Ji(l, t, r, y, u, g));
          return;
        }
    }
    for (var o in a)
      ((y = a[o]),
        a.hasOwnProperty(o) && y != null && !u.hasOwnProperty(o) && ul(l, t, o, null, u, y));
    for (_ in u)
      ((y = u[_]),
        (g = a[_]),
        !u.hasOwnProperty(_) || y === g || (y == null && g == null) || ul(l, t, _, y, u, g));
  }
  function Qh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Tm() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0;
        u < a.length;
        u++
      ) {
        var e = a[u],
          n = e.transferSize,
          c = e.initiatorType,
          i = e.duration;
        if (n && i && Qh(c)) {
          for (c = 0, i = e.responseEnd, u += 1; u < a.length; u++) {
            var f = a[u],
              v = f.startTime;
            if (v > i) break;
            var r = f.transferSize,
              _ = f.initiatorType;
            r && Qh(_) && ((f = f.responseEnd), (c += r * (f < i ? 1 : (i - v) / (f - v))));
          }
          if ((--u, (t += (8 * (n + c)) / (e.duration / 1e3)), l++, 10 < l)) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var wi = null,
    Wi = null;
  function Nn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Xh(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zh(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function ki(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var $i = null;
  function Am() {
    var l = window.event;
    return l && l.type === "popstate" ? (l === $i ? !1 : (($i = l), !0)) : (($i = null), !1);
  }
  var Lh = typeof setTimeout == "function" ? setTimeout : void 0,
    Em = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Vh = typeof Promise == "function" ? Promise : void 0,
    pm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Vh < "u"
          ? function (l) {
              return Vh.resolve(null).then(l).catch(Om);
            }
          : Lh;
  function Om(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function va(l) {
    return l === "head";
  }
  function Kh(l, t) {
    var a = t,
      u = 0;
    do {
      var e = a.nextSibling;
      if ((l.removeChild(a), e && e.nodeType === 8))
        if (((a = e.data), a === "/$" || a === "/&")) {
          if (u === 0) {
            (l.removeChild(e), pu(t));
            return;
          }
          u--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") u++;
        else if (a === "html") de(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), de(a));
          for (var n = a.firstChild; n; ) {
            var c = n.nextSibling,
              i = n.nodeName;
            (n[ju] ||
              i === "SCRIPT" ||
              i === "STYLE" ||
              (i === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = c));
          }
        } else a === "body" && de(l.ownerDocument.body);
      a = e;
    } while (a);
    pu(t);
  }
  function Jh(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display), (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        u && u.nodeType === 8)
      )
        if (((a = u.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = u;
    } while (a);
  }
  function Fi(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Fi(a), ac(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Mm(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[ju])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = yt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Dm(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a) ||
        ((l = yt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function wh(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t) ||
        ((l = yt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Ii(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Pi(l) {
    return l.data === "$!" || (l.data === "$?" && l.ownerDocument.readyState !== "loading");
  }
  function Nm(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var u = function () {
        (t(), a.removeEventListener("DOMContentLoaded", u));
      };
      (a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u));
    }
  }
  function yt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var lf = null;
  function Wh(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return yt(l.nextSibling);
          t--;
        } else (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function kh(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function $h(l, t, a) {
    switch (((t = Nn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(h(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(h(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function de(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    ac(l);
  }
  var gt = new Map(),
    Fh = new Set();
  function jn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var Jt = p.d;
  p.d = { f: jm, r: Um, D: xm, C: Hm, L: Bm, m: qm, X: Ym, S: Cm, M: Rm };
  function jm() {
    var l = Jt.f(),
      t = _n();
    return l || t;
  }
  function Um(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? vo(t) : Jt.r(l);
  }
  var Tu = typeof document > "u" ? null : document;
  function Ih(l, t, a) {
    var u = Tu;
    if (u && typeof t == "string" && t) {
      var e = ft(t);
      ((e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        Fh.has(e) ||
          (Fh.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")), Yl(t, "link", l), Ul(t), u.head.appendChild(t))));
    }
  }
  function xm(l) {
    (Jt.D(l), Ih("dns-prefetch", l, null));
  }
  function Hm(l, t) {
    (Jt.C(l, t), Ih("preconnect", l, t));
  }
  function Bm(l, t, a) {
    Jt.L(l, t, a);
    var u = Tu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + ft(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + ft(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" && (e += '[imagesizes="' + ft(a.imageSizes) + '"]'))
        : (e += '[href="' + ft(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = Au(l);
          break;
        case "script":
          n = Eu(l);
      }
      gt.has(n) ||
        ((l = N(
          { rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : l, as: t },
          a
        )),
        gt.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(me(n))) ||
          (t === "script" && u.querySelector(ve(n))) ||
          ((t = u.createElement("link")), Yl(t, "link", l), Ul(t), u.head.appendChild(t)));
    }
  }
  function qm(l, t) {
    Jt.m(l, t);
    var a = Tu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e = 'link[rel="modulepreload"][as="' + ft(u) + '"][href="' + ft(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Eu(l);
      }
      if (
        !gt.has(n) &&
        ((l = N({ rel: "modulepreload", href: l }, t)), gt.set(n, l), a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ve(n))) return;
        }
        ((u = a.createElement("link")), Yl(u, "link", l), Ul(u), a.head.appendChild(u));
      }
    }
  }
  function Cm(l, t, a) {
    Jt.S(l, t, a);
    var u = Tu;
    if (u && l) {
      var e = Ka(u).hoistableStyles,
        n = Au(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if ((c = u.querySelector(me(n)))) i.loading = 5;
        else {
          ((l = N({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = gt.get(n)) && tf(l, a));
          var f = (c = u.createElement("link"));
          (Ul(f),
            Yl(f, "link", l),
            (f._p = new Promise(function (v, r) {
              ((f.onload = v), (f.onerror = r));
            })),
            f.addEventListener("load", function () {
              i.loading |= 1;
            }),
            f.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            Un(c, t, u));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: i }), e.set(n, c));
      }
    }
  }
  function Ym(l, t) {
    Jt.X(l, t);
    var a = Tu;
    if (a && l) {
      var u = Ka(a).hoistableScripts,
        e = Eu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(ve(e))),
        n ||
          ((l = N({ src: l, async: !0 }, t)),
          (t = gt.get(e)) && af(l, t),
          (n = a.createElement("script")),
          Ul(n),
          Yl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Rm(l, t) {
    Jt.M(l, t);
    var a = Tu;
    if (a && l) {
      var u = Ka(a).hoistableScripts,
        e = Eu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(ve(e))),
        n ||
          ((l = N({ src: l, async: !0, type: "module" }, t)),
          (t = gt.get(e)) && af(l, t),
          (n = a.createElement("script")),
          Ul(n),
          Yl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Ph(l, t, a, u) {
    var e = (e = Wt.current) ? jn(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Au(a.href)),
            (a = Ka(e).hoistableStyles),
            (u = a.get(t)),
            u || ((u = { type: "style", instance: null, count: 0, state: null }), a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Au(a.href);
          var n = Ka(e).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((e = e.ownerDocument || e),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = e.querySelector(me(l))) && !n._p && ((c.instance = n), (c.state.loading = 5)),
              gt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                gt.set(l, a),
                n || Gm(e, l, a, c.state))),
            t && u === null)
          )
            throw Error(h(528, ""));
          return c;
        }
        if (t && u !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" && t && typeof t != "function" && typeof t != "symbol"
            ? ((t = Eu(a)),
              (a = Ka(e).hoistableScripts),
              (u = a.get(t)),
              u || ((u = { type: "script", instance: null, count: 0, state: null }), a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, l));
    }
  }
  function Au(l) {
    return 'href="' + ft(l) + '"';
  }
  function me(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function ld(l) {
    return N({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Gm(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Yl(t, "link", a),
        Ul(t),
        l.head.appendChild(t));
  }
  function Eu(l) {
    return '[src="' + ft(l) + '"]';
  }
  function ve(l) {
    return "script[async]" + l;
  }
  function td(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + ft(a.href) + '"]');
          if (u) return ((t.instance = u), Ul(u), u);
          var e = N({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            Ul(u),
            Yl(u, "style", e),
            Un(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = Au(a.href);
          var n = l.querySelector(me(e));
          if (n) return ((t.state.loading |= 4), (t.instance = n), Ul(n), n);
          ((u = ld(a)),
            (e = gt.get(e)) && tf(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            Ul(n));
          var c = n;
          return (
            (c._p = new Promise(function (i, f) {
              ((c.onload = i), (c.onerror = f));
            })),
            Yl(n, "link", u),
            (t.state.loading |= 4),
            Un(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Eu(a.src)),
            (e = l.querySelector(ve(n)))
              ? ((t.instance = e), Ul(e), e)
              : ((u = a),
                (e = gt.get(n)) && ((u = N({}, a)), af(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                Ul(e),
                Yl(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((u = t.instance), (t.state.loading |= 4), Un(u, a.precedence, l));
    return t.instance;
  }
  function Un(l, t, a) {
    for (
      var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        c = 0;
      c < u.length;
      c++
    ) {
      var i = u[c];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function tf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function af(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var xn = null;
  function ad(l, t, a) {
    if (xn === null) {
      var u = new Map(),
        e = (xn = new Map());
      e.set(a, u);
    } else ((e = xn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u)));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (
        !(n[ju] || n[Hl] || (l === "link" && n.getAttribute("rel") === "stylesheet")) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var i = u.get(c);
        i ? i.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function ud(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null));
  }
  function Qm(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return ((l = t.disabled), typeof t.precedence == "string" && l == null);
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ed(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Xm(l, t, a, u) {
    if (
      a.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var e = Au(u.href),
          n = t.querySelector(me(e));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Hn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            Ul(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (u = ld(u)),
          (e = gt.get(e)) && tf(u, e),
          (n = n.createElement("link")),
          Ul(n));
        var c = n;
        ((c._p = new Promise(function (i, f) {
          ((c.onload = i), (c.onerror = f));
        })),
          Yl(n, "link", u),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = Hn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var uf = 0;
  function Zm(l, t) {
    return (
      l.stylesheets && l.count === 0 && qn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var u = setTimeout(function () {
              if ((l.stylesheets && qn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && uf === 0 && (uf = 62500 * Tm());
            var e = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 && (l.stylesheets && qn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > uf ? 50 : 800) + t
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(u), clearTimeout(e));
              }
            );
          }
        : null
    );
  }
  function Hn() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) qn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Bn = null;
  function qn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++, (Bn = new Map()), t.forEach(Lm, l), (Bn = null), Hn.call(l)));
  }
  function Lm(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Bn.get(l);
      if (a) var u = a.get(null);
      else {
        ((a = new Map()), Bn.set(l, a));
        for (
          var e = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0;
          n < e.length;
          n++
        ) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (u = c));
        }
        u && a.set(null, u);
      }
      ((e = t.instance),
        (c = e.getAttribute("data-precedence")),
        (n = a.get(c) || u),
        n === u && a.set(null, e),
        a.set(c, e),
        this.count++,
        (u = Hn.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l), l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ye = {
    $$typeof: Ol,
    Provider: null,
    Consumer: null,
    _currentValue: x,
    _currentValue2: x,
    _threadCount: 0,
  };
  function Vm(l, t, a, u, e, n, c, i, f) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = In(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = In(0)),
      (this.hiddenUpdates = In(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map()));
  }
  function nd(l, t, a, u, e, n, c, i, f, v, r, _) {
    return (
      (l = new Vm(l, t, a, c, f, v, r, _, i)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = Pl(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Cc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      Qc(n),
      l
    );
  }
  function cd(l) {
    return l ? ((l = tu), l) : tu;
  }
  function id(l, t, a, u, e, n) {
    ((e = cd(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = ua(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = ea(l, u, t)),
      a !== null && (Wl(a, l, t), wu(a, l, t)));
  }
  function fd(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function ef(l, t) {
    (fd(l, t), (l = l.alternate) && fd(l, t));
  }
  function sd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Oa(l, 67108864);
      (t !== null && Wl(t, l, 67108864), ef(l, 67108864));
    }
  }
  function od(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = et();
      t = Pn(t);
      var a = Oa(l, t);
      (a !== null && Wl(a, l, t), ef(l, t));
    }
  }
  var Cn = !0;
  function Km(l, t, a, u) {
    var e = z.T;
    z.T = null;
    var n = p.p;
    try {
      ((p.p = 2), nf(l, t, a, u));
    } finally {
      ((p.p = n), (z.T = e));
    }
  }
  function Jm(l, t, a, u) {
    var e = z.T;
    z.T = null;
    var n = p.p;
    try {
      ((p.p = 8), nf(l, t, a, u));
    } finally {
      ((p.p = n), (z.T = e));
    }
  }
  function nf(l, t, a, u) {
    if (Cn) {
      var e = cf(u);
      if (e === null) (Ki(l, t, u, Yn, a), dd(l, u));
      else if (Wm(e, l, t, a, u)) u.stopPropagation();
      else if ((dd(l, u), t & 4 && -1 < wm.indexOf(l))) {
        for (; e !== null; ) {
          var n = Va(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = _a(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var f = 1 << (31 - Fl(c));
                      ((i.entanglements[1] |= f), (c &= ~f));
                    }
                    (Mt(n), ($ & 6) === 0 && ((bn = kl() + 500), se(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((i = Oa(n, 2)), i !== null && Wl(i, n, 2), _n(), ef(n, 2));
            }
          if (((n = cf(u)), n === null && Ki(l, t, u, Yn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Ki(l, t, u, null, a);
    }
  }
  function cf(l) {
    return ((l = fc(l)), ff(l));
  }
  var Yn = null;
  function ff(l) {
    if (((Yn = null), (l = La(l)), l !== null)) {
      var t = A(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = Y(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = C(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Yn = l), null);
  }
  function hd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (xd()) {
          case rf:
            return 2;
          case bf:
            return 8;
          case pe:
          case Hd:
            return 32;
          case zf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var sf = !1,
    ya = null,
    ga = null,
    Sa = null,
    ge = new Map(),
    Se = new Map(),
    ra = [],
    wm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function dd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ya = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        ge.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Se.delete(t.pointerId);
    }
  }
  function re(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Va(t)), t !== null && sd(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function Wm(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ((ya = re(ya, l, t, a, u, e)), !0);
      case "dragenter":
        return ((ga = re(ga, l, t, a, u, e)), !0);
      case "mouseover":
        return ((Sa = re(Sa, l, t, a, u, e)), !0);
      case "pointerover":
        var n = e.pointerId;
        return (ge.set(n, re(ge.get(n) || null, l, t, a, u, e)), !0);
      case "gotpointercapture":
        return ((n = e.pointerId), Se.set(n, re(Se.get(n) || null, l, t, a, u, e)), !0);
    }
    return !1;
  }
  function md(l) {
    var t = La(l.target);
    if (t !== null) {
      var a = A(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = Y(a)), t !== null)) {
            ((l.blockedOn = t),
              Of(l.priority, function () {
                od(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = C(a)), t !== null)) {
            ((l.blockedOn = t),
              Of(l.priority, function () {
                od(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Rn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = cf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        ((ic = u), a.target.dispatchEvent(u), (ic = null));
      } else return ((t = Va(a)), t !== null && sd(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function vd(l, t, a) {
    Rn(l) && a.delete(t);
  }
  function km() {
    ((sf = !1),
      ya !== null && Rn(ya) && (ya = null),
      ga !== null && Rn(ga) && (ga = null),
      Sa !== null && Rn(Sa) && (Sa = null),
      ge.forEach(vd),
      Se.forEach(vd));
  }
  function Gn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      sf || ((sf = !0), S.unstable_scheduleCallback(S.unstable_NormalPriority, km)));
  }
  var Qn = null;
  function yd(l) {
    Qn !== l &&
      ((Qn = l),
      S.unstable_scheduleCallback(S.unstable_NormalPriority, function () {
        Qn === l && (Qn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (ff(u || a) === null) continue;
            break;
          }
          var n = Va(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            ci(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function pu(l) {
    function t(f) {
      return Gn(f, l);
    }
    (ya !== null && Gn(ya, l),
      ga !== null && Gn(ga, l),
      Sa !== null && Gn(Sa, l),
      ge.forEach(t),
      Se.forEach(t));
    for (var a = 0; a < ra.length; a++) {
      var u = ra[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ra.length && ((a = ra[0]), a.blockedOn === null); )
      (md(a), a.blockedOn === null && ra.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          c = e[Zl] || null;
        if (typeof n == "function") c || yd(a);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (c = n[Zl] || null))) i = c.formAction;
            else if (ff(e) !== null) continue;
          } else i = c.action;
          (typeof i == "function" ? (a[u + 1] = i) : (a.splice(u, 3), (u -= 3)), yd(a));
        }
      }
  }
  function gd() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (e = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (e !== null && (e(), (e = null)), u || setTimeout(a, 20));
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var u = !1,
        e = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((u = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            e !== null && (e(), (e = null)));
        }
      );
    }
  }
  function of(l) {
    this._internalRoot = l;
  }
  ((Xn.prototype.render = of.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      var a = t.current,
        u = et();
      id(a, u, l, t, null, null);
    }),
    (Xn.prototype.unmount = of.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (id(l.current, 2, null, l, null, null), _n(), (t[Za] = null));
        }
      }));
  function Xn(l) {
    this._internalRoot = l;
  }
  Xn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = pf();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ra.length && t !== 0 && t < ra[a].priority; a++);
      (ra.splice(a, 0, l), a === 0 && md(l));
    }
  };
  var Sd = T.version;
  if (Sd !== "19.2.4") throw Error(h(527, Sd, "19.2.4"));
  p.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(h(188))
        : ((l = Object.keys(l).join(",")), Error(h(268, l)));
    return ((l = J(t)), (l = l !== null ? il(l) : null), (l = l === null ? null : l.stateNode), l);
  };
  var $m = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zn.isDisabled && Zn.supportsFiber)
      try {
        ((Mu = Zn.inject($m)), ($l = Zn));
      } catch {}
  }
  return (
    (be.createRoot = function (l, t) {
      if (!D(l)) throw Error(h(299));
      var a = !1,
        u = "",
        e = Eo,
        n = po,
        c = Oo;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = nd(l, 1, !1, null, null, a, u, null, e, n, c, gd)),
        (l[Za] = t.current),
        Vi(l),
        new of(t)
      );
    }),
    (be.hydrateRoot = function (l, t, a) {
      if (!D(l)) throw Error(h(299));
      var u = !1,
        e = "",
        n = Eo,
        c = po,
        i = Oo,
        f = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (i = a.onRecoverableError),
          a.formState !== void 0 && (f = a.formState)),
        (t = nd(l, 1, !0, t, a ?? null, u, e, f, n, c, i, gd)),
        (t.context = cd(null)),
        (a = t.current),
        (u = et()),
        (u = Pn(u)),
        (e = ua(u)),
        (e.callback = null),
        ea(a, e, u),
        (a = u),
        (t.current.lanes = a),
        Nu(t, a),
        Mt(t),
        (l[Za] = t.current),
        Vi(l),
        new Xn(t)
      );
    }),
    (be.version = "19.2.4"),
    be
  );
}
var _d;
function h1() {
  if (_d) return hf.exports;
  _d = 1;
  function S() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S);
      } catch (T) {
        console.error(T);
      }
  }
  return (S(), (hf.exports = o1()), hf.exports);
}
var d1 = h1();
const m1 = "modulepreload",
  v1 = function (S) {
    return "/" + S;
  },
  Td = {},
  Tt = function (T, E, h) {
    let D = Promise.resolve();
    if (E && E.length > 0) {
      let Y = function (J) {
        return Promise.all(
          J.map((il) =>
            Promise.resolve(il).then(
              (N) => ({ status: "fulfilled", value: N }),
              (N) => ({ status: "rejected", reason: N })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const C = document.querySelector("meta[property=csp-nonce]"),
        Q = (C == null ? void 0 : C.nonce) || (C == null ? void 0 : C.getAttribute("nonce"));
      D = Y(
        E.map((J) => {
          if (((J = v1(J)), J in Td)) return;
          Td[J] = !0;
          const il = J.endsWith(".css"),
            N = il ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${J}"]${N}`)) return;
          const L = document.createElement("link");
          if (
            ((L.rel = il ? "stylesheet" : m1),
            il || (L.as = "script"),
            (L.crossOrigin = ""),
            (L.href = J),
            Q && L.setAttribute("nonce", Q),
            document.head.appendChild(L),
            il)
          )
            return new Promise((gl, vl) => {
              (L.addEventListener("load", gl),
                L.addEventListener("error", () => vl(new Error(`Unable to preload CSS for ${J}`))));
            });
        })
      );
    }
    function A(Y) {
      const C = new Event("vite:preloadError", { cancelable: !0 });
      if (((C.payload = Y), window.dispatchEvent(C), !C.defaultPrevented)) throw Y;
    }
    return D.then((Y) => {
      for (const C of Y || []) C.status === "rejected" && A(C.reason);
      return T().catch(A);
    });
  },
  y1 = "_footer_1ayno_1",
  g1 = "_top_1ayno_9",
  S1 = "_grid_1ayno_21",
  r1 = "_col_1ayno_57",
  b1 = "_heading_1ayno_67",
  z1 = "_headingSp_1ayno_81",
  _1 = "_hotline_1ayno_89",
  T1 = "_small_1ayno_117",
  A1 = "_links_1ayno_131",
  E1 = "_payRow_1ayno_165",
  p1 = "_payBadge_1ayno_177",
  O1 = "_appHint_1ayno_205",
  M1 = "_qr_1ayno_215",
  D1 = "_qrInner_1ayno_233",
  N1 = "_social_1ayno_255",
  j1 = "_soc_1ayno_255",
  U1 = "_cert_1ayno_295",
  x1 = "_bottom_1ayno_307",
  H1 = "_copy_1ayno_319",
  F = {
    footer: y1,
    top: g1,
    grid: S1,
    col: r1,
    heading: b1,
    headingSp: z1,
    hotline: _1,
    small: T1,
    links: A1,
    payRow: E1,
    payBadge: p1,
    appHint: O1,
    qr: M1,
    qrInner: D1,
    social: N1,
    soc: j1,
    cert: U1,
    bottom: x1,
    copy: H1,
  };
function B1() {
  return d.jsxs("footer", {
    id: "footer",
    className: F.footer,
    children: [
      d.jsx("div", {
        className: F.top,
        children: d.jsx("div", {
          className: "container",
          children: d.jsxs("div", {
            className: F.grid,
            children: [
              d.jsxs("div", {
                className: F.col,
                children: [
                  d.jsx("h3", { className: F.heading, children: "Hỗ trợ khách hàng" }),
                  d.jsxs("p", {
                    className: F.hotline,
                    children: [
                      "Hotline: ",
                      d.jsx("a", { href: "tel:19006035", children: "1900 6035" }),
                      d.jsx("span", {
                        className: F.small,
                        children: "(1000đ/phút, 8h-21h kể cả T7, CN)",
                      }),
                    ],
                  }),
                  d.jsxs("ul", {
                    className: F.links,
                    children: [
                      d.jsx("li", {
                        children: d.jsx("a", {
                          href: "#footer",
                          children: "Các câu hỏi thường gặp",
                        }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("a", { href: "#footer", children: "Gửi yêu cầu hỗ trợ" }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("a", { href: "#footer", children: "Hướng dẫn đặt hàng" }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("a", {
                          href: "#footer",
                          children: "Phương thức vận chuyển",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              d.jsxs("div", {
                className: F.col,
                children: [
                  d.jsx("h3", { className: F.heading, children: "Về Tiki" }),
                  d.jsxs("ul", {
                    className: F.links,
                    children: [
                      d.jsx("li", {
                        children: d.jsx("a", { href: "#footer", children: "Giới thiệu" }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("a", { href: "#footer", children: "Tiki Blog" }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("a", { href: "#footer", children: "Tuyển dụng" }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("a", { href: "#footer", children: "Chính sách bảo mật" }),
                      }),
                    ],
                  }),
                ],
              }),
              d.jsxs("div", {
                className: F.col,
                children: [
                  d.jsx("h3", { className: F.heading, children: "Thanh toán" }),
                  d.jsxs("div", {
                    className: F.payRow,
                    "aria-hidden": !0,
                    children: [
                      d.jsx("span", { className: F.payBadge, children: "COD" }),
                      d.jsx("span", { className: F.payBadge, children: "VISA" }),
                      d.jsx("span", { className: F.payBadge, children: "ATM" }),
                    ],
                  }),
                  d.jsx("h3", {
                    className: `${F.heading} ${F.headingSp}`,
                    children: "Tải ứng dụng",
                  }),
                  d.jsx("p", { className: F.appHint, children: "QR demo — mở trên điện thoại" }),
                  d.jsx("div", {
                    className: F.qr,
                    "aria-hidden": !0,
                    children: d.jsx("div", { className: F.qrInner }),
                  }),
                ],
              }),
              d.jsxs("div", {
                className: F.col,
                children: [
                  d.jsx("h3", { className: F.heading, children: "Kết nối với chúng tôi" }),
                  d.jsxs("div", {
                    className: F.social,
                    children: [
                      d.jsx("span", { className: F.soc, children: "f" }),
                      d.jsx("span", { className: F.soc, children: "◎" }),
                      d.jsx("span", { className: F.soc, children: "▶" }),
                    ],
                  }),
                  d.jsx("p", {
                    className: F.cert,
                    children: "Chứng nhận demo — giao diện tham khảo Tiki",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      d.jsx("div", {
        className: F.bottom,
        children: d.jsx("div", {
          className: "container",
          children: d.jsxs("p", {
            className: F.copy,
            children: [
              "© ",
              new Date().getFullYear(),
              " — Bản demo học tập. API:",
              " ",
              d.jsx("a", {
                href: "/api-docs",
                target: "_blank",
                rel: "noreferrer",
                children: "/api-docs",
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
const q1 = {
  email: "Email",
  password: "Mật khẩu",
  name: "Họ tên",
  phone: "Số điện thoại",
  address: "Địa chỉ giao hàng",
  productId: "Sản phẩm",
  quantity: "Số lượng",
};
function C1(S, T) {
  var h, D;
  const E = q1[S] ?? S;
  if (/invalid email/i.test(T)) return `${E} không đúng định dạng.`;
  if (/too small|must contain at least/i.test(T)) {
    const A = (h = T.match(/(\d+)/)) == null ? void 0 : h[1];
    return S === "password"
      ? `Mật khẩu phải có ít nhất ${A ?? 6} ký tự.`
      : S === "name"
        ? `Vui lòng nhập ${E.toLowerCase()} (ít nhất ${A ?? 1} ký tự).`
        : S === "address"
          ? `Địa chỉ cần ít nhất ${A ?? 5} ký tự.`
          : S === "phone"
            ? `Số điện thoại cần ít nhất ${A ?? 8} ký số hoặc ký tự.`
            : `${E}: nhập ít nhất ${A} ký tự.`;
  }
  if (/too big|must contain at most/i.test(T)) {
    const A = (D = T.match(/(\d+)/)) == null ? void 0 : D[1];
    return S === "quantity"
      ? `Số lượng tối đa là ${A ?? 99}.`
      : `${E}: không được vượt quá giới hạn.`;
  }
  return /invalid/i.test(T) && S === "email" ? `${E} không đúng định dạng.` : `${E}: ${T}`;
}
function Y1(S) {
  const T = [];
  for (const [E, h] of Object.entries(S.fieldErrors ?? {}))
    if (h != null && h.length) for (const D of h) T.push(C1(E, D));
  for (const E of S.formErrors ?? []) E.trim() && T.push(E);
  return T.length > 0 ? T.join(" ") : "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.";
}
function R1(S) {
  if (S == null || typeof S != "object") return "Không thực hiện được. Vui lòng thử lại.";
  const T = S;
  if (T.error === "Validation" && T.details && typeof T.details == "object") return Y1(T.details);
  const E = T.error ?? T.message;
  return typeof E == "string"
    ? E === "Validation"
      ? "Dữ liệu không hợp lệ. Vui lòng kiểm tra các ô nhập."
      : E
    : "Đã có lỗi xảy ra. Vui lòng thử lại.";
}
const Ad = (S) => {
    let T;
    const E = new Set(),
      h = (J, il) => {
        const N = typeof J == "function" ? J(T) : J;
        if (!Object.is(N, T)) {
          const L = T;
          ((T = (il ?? (typeof N != "object" || N === null)) ? N : Object.assign({}, T, N)),
            E.forEach((gl) => gl(T, L)));
        }
      },
      D = () => T,
      C = {
        setState: h,
        getState: D,
        getInitialState: () => Q,
        subscribe: (J) => (E.add(J), () => E.delete(J)),
      },
      Q = (T = S(h, D, C));
    return C;
  },
  G1 = (S) => (S ? Ad(S) : Ad),
  Q1 = (S) => S;
function X1(S, T = Q1) {
  const E = Ln.useSyncExternalStore(
    S.subscribe,
    Ln.useCallback(() => T(S.getState()), [S, T]),
    Ln.useCallback(() => T(S.getInitialState()), [S, T])
  );
  return (Ln.useDebugValue(E), E);
}
const Ed = (S) => {
    const T = G1(S),
      E = (h) => X1(T, h);
    return (Object.assign(E, T), E);
  },
  Od = (S) => (S ? Ed(S) : Ed);
function Z1(S, T) {
  let E;
  try {
    E = S();
  } catch {
    return;
  }
  return {
    getItem: (D) => {
      var A;
      const Y = (Q) => (Q === null ? null : JSON.parse(Q, void 0)),
        C = (A = E.getItem(D)) != null ? A : null;
      return C instanceof Promise ? C.then(Y) : Y(C);
    },
    setItem: (D, A) => E.setItem(D, JSON.stringify(A, void 0)),
    removeItem: (D) => E.removeItem(D),
  };
}
const yf = (S) => (T) => {
    try {
      const E = S(T);
      return E instanceof Promise
        ? E
        : {
            then(h) {
              return yf(h)(E);
            },
            catch(h) {
              return this;
            },
          };
    } catch (E) {
      return {
        then(h) {
          return this;
        },
        catch(h) {
          return yf(h)(E);
        },
      };
    }
  },
  L1 = (S, T) => (E, h, D) => {
    let A = {
        storage: Z1(() => window.localStorage),
        partialize: (V) => V,
        version: 0,
        merge: (V, Nl) => ({ ...Nl, ...V }),
        ...T,
      },
      Y = !1,
      C = 0;
    const Q = new Set(),
      J = new Set();
    let il = A.storage;
    if (!il)
      return S(
        (...V) => {
          (console.warn(
            `[zustand persist middleware] Unable to update item '${A.name}', the given storage is currently unavailable.`
          ),
            E(...V));
        },
        h,
        D
      );
    const N = () => {
        const V = A.partialize({ ...h() });
        return il.setItem(A.name, { state: V, version: A.version });
      },
      L = D.setState;
    D.setState = (V, Nl) => (L(V, Nl), N());
    const gl = S((...V) => (E(...V), N()), h, D);
    D.getInitialState = () => gl;
    let vl;
    const bl = () => {
      var V, Nl;
      if (!il) return;
      const St = ++C;
      ((Y = !1),
        Q.forEach((fl) => {
          var B;
          return fl((B = h()) != null ? B : gl);
        }));
      const Ol =
        ((Nl = A.onRehydrateStorage) == null ? void 0 : Nl.call(A, (V = h()) != null ? V : gl)) ||
        void 0;
      return yf(il.getItem.bind(il))(A.name)
        .then((fl) => {
          if (fl)
            if (typeof fl.version == "number" && fl.version !== A.version) {
              if (A.migrate) {
                const B = A.migrate(fl.state, fl.version);
                return B instanceof Promise ? B.then((I) => [!0, I]) : [!0, B];
              }
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, fl.state];
          return [!1, void 0];
        })
        .then((fl) => {
          var B;
          if (St !== C) return;
          const [I, Rl] = fl;
          if (((vl = A.merge(Rl, (B = h()) != null ? B : gl)), E(vl, !0), I)) return N();
        })
        .then(() => {
          St === C &&
            (Ol == null || Ol(h(), void 0), (vl = h()), (Y = !0), J.forEach((fl) => fl(vl)));
        })
        .catch((fl) => {
          St === C && (Ol == null || Ol(void 0, fl));
        });
    };
    return (
      (D.persist = {
        setOptions: (V) => {
          ((A = { ...A, ...V }), V.storage && (il = V.storage));
        },
        clearStorage: () => {
          il == null || il.removeItem(A.name);
        },
        getOptions: () => A,
        rehydrate: () => bl(),
        hasHydrated: () => Y,
        onHydrate: (V) => (
          Q.add(V),
          () => {
            Q.delete(V);
          }
        ),
        onFinishHydration: (V) => (
          J.add(V),
          () => {
            J.delete(V);
          }
        ),
      }),
      A.skipHydration || bl(),
      vl || gl
    );
  },
  V1 = L1,
  Md = Od()(
    V1(
      (S) => ({
        token: null,
        user: null,
        setAuth: (T, E) => S({ token: T, user: E }),
        logout: () => S({ token: null, user: null }),
      }),
      { name: "tiki-auth" }
    )
  ),
  K1 = "http://localhost:4000";
async function Dl(S, T = {}) {
  const { token: E, ...h } = T,
    D = new Headers(h.headers);
  h.body && !D.has("Content-Type") && D.set("Content-Type", "application/json");
  const A = E ?? Md.getState().token;
  A && D.set("Authorization", `Bearer ${A}`);
  const Y = await fetch(`${K1}${S}`, { ...h, headers: D });
  if (Y.status === 204) return;
  const C = await Y.text();
  let Q = null;
  try {
    Q = C ? JSON.parse(C) : null;
  } catch {
    throw Y.ok
      ? new Error("Phản hồi từ máy chủ không đúng định dạng.")
      : new Error(
          `Không đọc được phản hồi từ máy chủ (${Y.status}). Hãy kiểm tra backend đang chạy.`
        );
  }
  if (!Y.ok) throw new Error(R1(Q));
  return Q;
}
const Dd = {
    health: () => Dl("/health"),
    categories: () => Dl("/api/categories"),
    category: (S) => Dl(`/api/categories/${encodeURIComponent(S)}`),
    products: (S) => {
      const T = new URLSearchParams();
      return (
        Object.entries(S).forEach(([E, h]) => {
          h !== void 0 && h !== "" && T.set(E, String(h));
        }),
        Dl(`/api/products?${T}`)
      );
    },
    search: (S) => {
      const T = new URLSearchParams();
      return (
        Object.entries(S).forEach(([E, h]) => {
          h !== void 0 && h !== "" && T.set(E, String(h));
        }),
        Dl(`/api/search?${T}`)
      );
    },
    searchSuggestions: (S) => Dl(`/api/search/suggestions?q=${encodeURIComponent(S)}`),
    productBySlug: (S) => Dl(`/api/products/slug/${encodeURIComponent(S)}`),
    register: (S) =>
      Dl("/api/auth/register", { method: "POST", body: JSON.stringify(S), token: null }),
    login: (S) => Dl("/api/auth/login", { method: "POST", body: JSON.stringify(S), token: null }),
    me: () => Dl("/api/auth/me"),
    cart: () => Dl("/api/cart"),
    addCart: (S, T = 1) =>
      Dl("/api/cart", { method: "POST", body: JSON.stringify({ productId: S, quantity: T }) }),
    patchCart: (S, T) =>
      Dl(`/api/cart/${S}`, { method: "PATCH", body: JSON.stringify({ quantity: T }) }),
    removeCart: (S) => Dl(`/api/cart/${S}`, { method: "DELETE" }),
    clearCart: () => Dl("/api/cart/clear/all", { method: "POST" }),
    orders: () => Dl("/api/orders"),
    order: (S) => Dl(`/api/orders/${S}`),
    checkout: (S) => Dl("/api/orders/checkout", { method: "POST", body: JSON.stringify(S) }),
    updateProfile: (S) => Dl("/api/user/profile", { method: "PATCH", body: JSON.stringify(S) }),
  },
  Vn = Od((S) => ({ count: 0, setCount: (T) => S({ count: T }) })),
  J1 = "_searchBox_1u3wp_1",
  w1 = "_form_1u3wp_13",
  W1 = "_input_1u3wp_43",
  k1 = "_button_1u3wp_69",
  $1 = "_suggestions_1u3wp_109",
  F1 = "_suggestion_1u3wp_109",
  I1 = "_loading_1u3wp_197",
  P1 = "_active_1u3wp_323",
  lv = "_empty_1u3wp_343",
  wt = {
    searchBox: J1,
    form: w1,
    input: W1,
    button: k1,
    suggestions: $1,
    suggestion: F1,
    loading: I1,
    active: P1,
    empty: lv,
  };
function tv({ placeholder: S = "Tìm sản phẩm...", className: T = "" }) {
  const E = pd(),
    [h, D] = nl.useState(""),
    [A, Y] = nl.useState([]),
    [C, Q] = nl.useState(!1),
    [J, il] = nl.useState(!1),
    [N, L] = nl.useState(-1),
    gl = nl.useRef(null),
    vl = nl.useRef({}),
    bl = nl.useRef(null),
    V = nl.useRef(0);
  (nl.useEffect(() => {
    const B = h.trim();
    if (!B) {
      (Y([]), Q(!1));
      return;
    }
    return (
      bl.current && clearTimeout(bl.current),
      (bl.current = setTimeout(async () => {
        if (vl.current[B]) {
          (Y(vl.current[B]), Q(!0));
          return;
        }
        const I = ++V.current;
        try {
          il(!0);
          const Rl = await Dd.searchSuggestions(B);
          if (I !== V.current) return;
          const Xl = Rl.suggestions || [];
          ((vl.current[B] = Xl), Y(Xl), Q(!0));
        } catch (Rl) {
          (console.error("Search suggestion error:", Rl), Y([]));
        } finally {
          I === V.current && il(!1);
        }
      }, 300)),
      () => {
        bl.current && clearTimeout(bl.current);
      }
    );
  }, [h]),
    nl.useEffect(() => {
      const B = (I) => {
        gl.current && !gl.current.contains(I.target) && Q(!1);
      };
      return (
        document.addEventListener("mousedown", B),
        () => {
          document.removeEventListener("mousedown", B);
        }
      );
    }, []));
  const Nl = nl.useCallback(
      (B) => {
        const I = B.trim();
        I && (E(`/tim-kiem?q=${encodeURIComponent(I)}`), Q(!1));
      },
      [E]
    ),
    St = (B) => {
      (B.preventDefault(), Nl(h));
    },
    Ol = (B) => {
      if (!(!C || A.length === 0))
        switch (B.key) {
          case "ArrowDown":
            (B.preventDefault(), L((I) => (I < A.length - 1 ? I + 1 : 0)));
            break;
          case "ArrowUp":
            (B.preventDefault(), L((I) => (I > 0 ? I - 1 : A.length - 1)));
            break;
          case "Enter":
            N >= 0 && (B.preventDefault(), Nl(A[N]));
            break;
          case "Escape":
            Q(!1);
            break;
        }
    };
  nl.useEffect(() => {
    L(-1);
  }, [A]);
  const fl = nl.useMemo(
    () =>
      A.map((B, I) =>
        d.jsxs(
          "button",
          {
            type: "button",
            className: `${wt.suggestion} ${N === I ? wt.active : ""}`,
            onClick: () => Nl(B),
            children: [
              d.jsxs("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [
                  d.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                  d.jsx("path", { d: "m21 21-4.35-4.35" }),
                ],
              }),
              d.jsx("span", { children: B }),
            ],
          },
          B
        )
      ),
    [A, N, Nl]
  );
  return d.jsxs("div", {
    ref: gl,
    className: `${wt.searchBox} ${T}`,
    children: [
      d.jsxs("form", {
        onSubmit: St,
        className: wt.form,
        children: [
          d.jsx("input", {
            type: "text",
            value: h,
            placeholder: S,
            autoComplete: "off",
            className: wt.input,
            onChange: (B) => D(B.target.value),
            onFocus: () => {
              A.length > 0 && Q(!0);
            },
            onKeyDown: Ol,
          }),
          d.jsx("button", {
            type: "submit",
            className: wt.button,
            children: d.jsxs("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: [
                d.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                d.jsx("path", { d: "m21 21-4.35-4.35" }),
              ],
            }),
          }),
        ],
      }),
      C &&
        d.jsx("div", {
          className: wt.suggestions,
          children: J
            ? d.jsx("div", { className: wt.loading, children: "Đang tìm..." })
            : A.length > 0
              ? fl
              : d.jsx("div", { className: wt.empty, children: "Không tìm thấy kết quả" }),
        }),
    ],
  });
}
const av = "_wrap_ex10y_1",
  uv = "_word_ex10y_19",
  ev = "_smile_ex10y_35",
  vf = { wrap: av, word: uv, smile: ev };
function nv() {
  return d.jsxs(_t, {
    to: "/",
    className: vf.wrap,
    "aria-label": "Tiki - Trang chủ",
    children: [
      d.jsx("span", { className: vf.word, children: "tiki" }),
      d.jsx("span", { className: vf.smile, "aria-hidden": !0 }),
    ],
  });
}
const cv = "_header_1eodc_1",
  iv = "_preTop_1eodc_15",
  fv = "_preInner_1eodc_29",
  sv = "_preItem_1eodc_45",
  ov = "_preIcon_1eodc_57",
  hv = "_preLinks_1eodc_67",
  dv = "_dot_1eodc_95",
  mv = "_main_1eodc_109",
  vv = "_row_1eodc_121",
  yv = "_searchCol_1eodc_135",
  gv = "_hot_1eodc_223",
  Sv = "_hotLabel_1eodc_245",
  rv = "_hotBtn_1eodc_253",
  bv = "_actions_1eodc_285",
  zv = "_cart_1eodc_301",
  _v = "_cartLabel_1eodc_315",
  Tv = "_cartIconWrap_1eodc_323",
  Av = "_badge_1eodc_339",
  Ev = "_account_1eodc_387",
  pv = "_accountIcon_1eodc_403",
  Ov = "_accountText_1eodc_415",
  Mv = "_loginLine_1eodc_431",
  Dv = "_subLine_1eodc_449",
  Nv = "_accountName_1eodc_463",
  jv = "_logout_1eodc_489",
  Uv = "_nav_1eodc_513",
  xv = "_navInner_1eodc_523",
  Hv = "_navHighlight_1eodc_541",
  Bv = "_navIcon_1eodc_573",
  qv = "_navLinks_1eodc_585",
  Cv = "_navMuted_1eodc_621",
  w = {
    header: cv,
    preTop: iv,
    preInner: fv,
    preItem: sv,
    preIcon: ov,
    preLinks: hv,
    dot: dv,
    main: mv,
    row: vv,
    searchCol: yv,
    hot: gv,
    hotLabel: Sv,
    hotBtn: rv,
    actions: bv,
    cart: zv,
    cartLabel: _v,
    cartIconWrap: Tv,
    badge: Av,
    account: Ev,
    accountIcon: pv,
    accountText: Ov,
    loginLine: Mv,
    subLine: Dv,
    accountName: Nv,
    logout: jv,
    nav: Uv,
    navInner: xv,
    navHighlight: Hv,
    navIcon: Bv,
    navLinks: qv,
    navMuted: Cv,
  },
  Yv = ["iphone 15", "samsung a54", "laptop", "tai nghe", "nồi chiên không dầu"];
function Rv({ className: S }) {
  return d.jsx("svg", {
    className: S,
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": !0,
    children: d.jsx("path", {
      d: "M8 8V6a4 4 0 118 0v2M4 8h16l-1.2 9.6A2 2 0 0116.82 20H7.18a2 2 0 01-1.98-1.6L4 8z",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinejoin: "round",
    }),
  });
}
function Gv({ className: S }) {
  return d.jsxs("svg", {
    className: S,
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": !0,
    children: [
      d.jsx("circle", { cx: "12", cy: "8", r: "3.5", stroke: "currentColor", strokeWidth: "1.8" }),
      d.jsx("path", {
        d: "M5 20v-1a5 5 0 0110 0v1",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
      }),
    ],
  });
}
function Qv({ className: S }) {
  return d.jsxs("svg", {
    className: S,
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": !0,
    children: [
      d.jsx("path", {
        d: "M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z",
        stroke: "currentColor",
        strokeWidth: "1.5",
      }),
      d.jsx("circle", { cx: "12", cy: "11", r: "2", fill: "currentColor" }),
    ],
  });
}
function Xv() {
  const S = pd(),
    { user: T, token: E, logout: h } = Md(),
    D = Vn((A) => A.count);
  return (
    nl.useEffect(() => {
      if (!E) {
        Vn.getState().setCount(0);
        return;
      }
      Dd.cart()
        .then((A) => Vn.getState().setCount(A.items.reduce((Y, C) => Y + C.quantity, 0)))
        .catch(() => Vn.getState().setCount(0));
    }, [E]),
    d.jsxs("header", {
      className: w.header,
      children: [
        d.jsx("div", {
          className: w.preTop,
          children: d.jsx("div", {
            className: "container",
            children: d.jsxs("div", {
              className: w.preInner,
              children: [
                d.jsxs("span", {
                  className: w.preItem,
                  children: [
                    d.jsx(Qv, { className: w.preIcon }),
                    "Giao đến: ",
                    d.jsx("strong", { children: "Hà Nội" }),
                  ],
                }),
                d.jsxs("div", {
                  className: w.preLinks,
                  children: [
                    d.jsx("a", { href: "#footer", children: "Trung tâm bán hàng" }),
                    d.jsx("span", { className: w.dot }),
                    d.jsx("a", { href: "#footer", children: "Tải ứng dụng" }),
                    d.jsx("span", { className: w.dot }),
                    d.jsx("span", { children: "Chăm sóc khách hàng" }),
                  ],
                }),
              ],
            }),
          }),
        }),
        d.jsx("div", {
          className: w.main,
          children: d.jsx("div", {
            className: "container",
            children: d.jsxs("div", {
              className: w.row,
              children: [
                d.jsx(nv, {}),
                d.jsxs("div", {
                  className: w.searchCol,
                  children: [
                    d.jsx(tv, {}),
                    d.jsxs("div", {
                      className: w.hot,
                      children: [
                        d.jsx("span", { className: w.hotLabel, children: "Từ khóa:" }),
                        Yv.map((A) =>
                          d.jsx(
                            "button",
                            {
                              type: "button",
                              className: w.hotBtn,
                              onClick: () => S(`/tim-kiem?q=${encodeURIComponent(A)}`),
                              children: A,
                            },
                            A
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: w.actions,
                  children: [
                    d.jsxs(_t, {
                      to: "/gio-hang",
                      className: w.cart,
                      children: [
                        d.jsxs("span", {
                          className: w.cartIconWrap,
                          children: [
                            d.jsx(Rv, {}),
                            D > 0 &&
                              d.jsx("span", { className: w.badge, children: D > 99 ? "99+" : D }),
                          ],
                        }),
                        d.jsx("span", { className: w.cartLabel, children: "Giỏ hàng" }),
                      ],
                    }),
                    d.jsxs("div", {
                      className: w.account,
                      children: [
                        d.jsx(Gv, { className: w.accountIcon }),
                        T
                          ? d.jsxs("div", {
                              className: w.accountText,
                              children: [
                                d.jsx(_t, {
                                  to: "/tai-khoan",
                                  className: w.accountName,
                                  children: T.name,
                                }),
                                d.jsx("button", {
                                  type: "button",
                                  className: w.logout,
                                  onClick: () => h(),
                                  children: "Thoát",
                                }),
                              ],
                            })
                          : d.jsxs("div", {
                              className: w.accountText,
                              children: [
                                d.jsx(_t, {
                                  to: "/dang-nhap",
                                  className: w.loginLine,
                                  children: "Đăng nhập",
                                }),
                                d.jsx(_t, {
                                  to: "/dang-ky",
                                  className: w.subLine,
                                  children: "Đăng ký",
                                }),
                              ],
                            }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        d.jsx("nav", {
          className: w.nav,
          children: d.jsx("div", {
            className: "container",
            children: d.jsxs("div", {
              className: w.navInner,
              children: [
                d.jsxs(_t, {
                  to: "/danh-muc",
                  className: w.navHighlight,
                  children: [
                    d.jsx("span", { className: w.navIcon, "aria-hidden": !0, children: "≡" }),
                    "Danh mục sản phẩm",
                  ],
                }),
                d.jsxs("div", {
                  className: w.navLinks,
                  children: [
                    d.jsx(_t, { to: "/", children: "Trang chủ" }),
                    d.jsx(_t, { to: "/tim-kiem?q=a54", children: "Điện thoại" }),
                    d.jsx(_t, { to: "/tim-kiem?q=laptop", children: "Laptop" }),
                    d.jsx(_t, { to: "/danh-muc/dien-tu-dien-may", children: "Điện tử" }),
                    d.jsx(_t, { to: "/don-hang", children: "Đơn hàng của tôi" }),
                    d.jsx("a", {
                      href: "/api-docs",
                      target: "_blank",
                      rel: "noreferrer",
                      className: w.navMuted,
                      children: "API",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
function Zv() {
  const S = u1(),
    T = Im();
  return d.jsxs(d.Fragment, {
    children: [
      d.jsx(Xv, {}),
      d.jsx("main", {
        style: { minHeight: "calc(100vh - 200px)" },
        children: d.jsx(Pm, {
          mode: "wait",
          children: d.jsx(
            l1.div,
            {
              initial: T ? !1 : { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              exit: T ? { opacity: 1 } : { opacity: 0, y: -8 },
              transition: { duration: T ? 0 : 0.26, ease: [0.25, 0.1, 0.25, 1] },
              children: d.jsx(e1, {}),
            },
            S.pathname
          ),
        }),
      }),
      d.jsx(B1, {}),
    ],
  });
}
const Lv = nl.lazy(() =>
    Tt(() => import("./index-Bx8K4psB.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]))
  ),
  Vv = nl.lazy(() =>
    Tt(() => import("./index-BzTcNuP7.js"), __vite__mapDeps([9, 1, 2, 4, 3, 5, 6, 7, 10]))
  ),
  Kv = nl.lazy(() =>
    Tt(() => import("./index-CIlF8aqT.js"), __vite__mapDeps([11, 1, 2, 4, 3, 12]))
  ),
  Jv = nl.lazy(() =>
    Tt(() => import("./index-DyDZbV-L.js"), __vite__mapDeps([13, 1, 2, 4, 3, 5, 6, 7, 14]))
  ),
  wv = nl.lazy(() =>
    Tt(() => import("./index-DEZVsUbR.js"), __vite__mapDeps([15, 1, 2, 4, 6, 16]))
  ),
  Wv = nl.lazy(() => Tt(() => import("./index-tjnd5y4d.js"), __vite__mapDeps([17, 1, 2, 6, 18]))),
  kv = nl.lazy(() =>
    Tt(() => import("./index-CbD9m__m.js"), __vite__mapDeps([19, 1, 2, 6, 20, 21]))
  ),
  $v = nl.lazy(() =>
    Tt(() => import("./index-CxQsfWnB.js"), __vite__mapDeps([22, 1, 2, 20, 23, 24]))
  ),
  Fv = nl.lazy(() =>
    Tt(() => import("./index-Cxmb-7VJ.js"), __vite__mapDeps([25, 1, 2, 20, 23, 24]))
  ),
  Iv = nl.lazy(() => Tt(() => import("./index-hHd7hAl-.js"), __vite__mapDeps([26, 1, 2, 20, 27]))),
  Pv = nl.lazy(() => Tt(() => import("./index-C57jgNnr.js"), __vite__mapDeps([28, 1, 2, 6, 29])));
function ly() {
  return d.jsx("div", {
    style: { padding: "2rem", textAlign: "center", color: "#666" },
    children: "Đang tải...",
  });
}
function ty() {
  return d.jsx(nl.Suspense, {
    fallback: d.jsx(ly, {}),
    children: d.jsx(n1, {
      children: d.jsxs(nt, {
        element: d.jsx(Zv, {}),
        children: [
          d.jsx(nt, { index: !0, element: d.jsx(Lv, {}) }),
          d.jsx(nt, { path: "tim-kiem", element: d.jsx(Vv, {}) }),
          d.jsx(nt, { path: "danh-muc", element: d.jsx(Kv, {}) }),
          d.jsx(nt, { path: "danh-muc/:slug", element: d.jsx(Jv, {}) }),
          d.jsx(nt, { path: "p/:slug", element: d.jsx(wv, {}) }),
          d.jsx(nt, { path: "gio-hang", element: d.jsx(Wv, {}) }),
          d.jsx(nt, { path: "thanh-toan", element: d.jsx(kv, {}) }),
          d.jsx(nt, { path: "dang-nhap", element: d.jsx($v, {}) }),
          d.jsx(nt, { path: "dang-ky", element: d.jsx(Fv, {}) }),
          d.jsx(nt, { path: "tai-khoan", element: d.jsx(Iv, {}) }),
          d.jsx(nt, { path: "don-hang", element: d.jsx(Pv, {}) }),
          d.jsx(nt, { path: "*", element: d.jsx(c1, { to: "/", replace: !0 }) }),
        ],
      }),
    }),
  });
}
d1.createRoot(document.getElementById("root")).render(
  d.jsx(nl.StrictMode, { children: d.jsx(i1, { children: d.jsx(ty, {}) }) })
);
export { Dd as a, Vn as b, Md as u };
