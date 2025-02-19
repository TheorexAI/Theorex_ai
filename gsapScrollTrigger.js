/*!
 * ScrollTrigger 3.3.4
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function B(e) {
    return e;
  }
  function C() {
    return "undefined" != typeof window;
  }
  function D() {
    return xe || (C() && (xe = window.gsap) && xe.registerPlugin && xe);
  }
  function E(e) {
    return !!~i.indexOf(e);
  }
  function F(t, e) {
    var r = e.s;
    return function (e) {
      return arguments.length ? (t[r] = e) : t[r];
    };
  }
  function G(e, t) {
    var r = t.s,
      n = t.d2;
    return (r = "scroll" + n) && E(e)
      ? Math.max(x[r], Te[r]) -
          (we["inner" + n] || x["client" + n] || Te["client" + n])
      : e[r] - e["offset" + n];
  }
  function H(e) {
    return "string" == typeof e;
  }
  function I(e) {
    return "function" == typeof e;
  }
  function J(e) {
    return "number" == typeof e;
  }
  function K(e) {
    return "object" == typeof e;
  }
  function da(e) {
    return we.getComputedStyle(e);
  }
  function fa(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function ga(e, t) {
    var r =
        t &&
        "matrix(1, 0, 0, 1, 0, 0)" !== da(e)[c] &&
        xe
          .to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      n = e.getBoundingClientRect();
    return r && r.progress(0).kill(), n;
  }
  function ha(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function ja(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function ka(e, t, r) {
    return e.addEventListener(t, r, { passive: !0 });
  }
  function la(e, t, r) {
    return e.removeEventListener(t, r);
  }
  function pa(e, t) {
    if (H(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      n && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in d
            ? d[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function qa(e, t, r, n, o, i, a) {
    var s = o.startColor,
      l = o.endColor,
      c = o.fontSize,
      f = o.indent,
      u = o.fontWeight,
      p = ke.createElement("div"),
      d = E(r),
      g = -1 !== e.indexOf("scroller"),
      h = d ? Te : r,
      v = -1 !== e.indexOf("start"),
      m = v ? s : l,
      b =
        "border-color:" +
        m +
        ";font-size:" +
        c +
        ";color:" +
        m +
        ";font-weight:" +
        u +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (b += "position:" + (g && d ? "fixed;" : "absolute;")),
      (!g && d) ||
        (b += (n === Ye ? y : w) + ":" + (i + parseFloat(f)) + "px;"),
      a &&
        (b +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (p._isStart = v),
      p.setAttribute("class", "gsap-marker-" + e),
      (p.style.cssText = b),
      (p.innerText = t || 0 === t ? e + "-" + t : e),
      h.insertBefore(p, h.children[0]),
      (p._offset = p["offset" + n.op.d2]),
      k(p, 0, n, d, v),
      p
    );
  }
  function ua() {
    return (n = n || s(m));
  }
  function va() {
    n || ((n = s(m)), Fe || v("scrollStart"), (Fe = Ae()));
  }
  function wa() {
    return !Ee && 200 < Ae() - Fe && a.restart(!0);
  }
  function Aa(e) {
    var t = v("refreshInit"),
      r = Ze.length;
    for (Pe = r; Pe--; ) Ze[Pe].scroll.rec = Ze[Pe].scroll();
    for (Pe = 0; Pe < r; Pe++) Ze[Pe] && Ze[Pe].refresh(!0 !== e);
    for (
      t.forEach(function (e) {
        return e && e.render && e.render(-1);
      }),
        Pe = Ze.length;
      Pe--;

    )
      Ze[Pe].scroll.rec = 0;
    v("refresh");
  }
  function Ea(e, t, r) {
    if ((Qe(r), e.parentNode === t)) {
      var n = t.parentNode;
      n && (n.insertBefore(e, t), n.removeChild(t));
    }
  }
  function Fa(e, t, r) {
    if (e.parentNode !== t) {
      for (var n, o = b.length, i = t.style, a = e.style; o--; )
        i[(n = b[o])] = r[n];
      (i.position = "absolute" === r.position ? "absolute" : "relative"),
        (a[w] = a[y] = "auto"),
        (i.overflow = "visible"),
        (i.boxSizing = "border-box"),
        (i[Be] = ha(e, Xe) + Ke),
        (i[Ne] = ha(e, Ye) + Ke),
        (i[je] = a[We] = a[p] = a[u] = "0"),
        (a[Be] = r[Be]),
        (a[Ne] = r[Ne]),
        (a[je] = r[je]),
        e.parentNode.insertBefore(t, e),
        t.appendChild(e);
    }
  }
  function Ia(e) {
    for (var t = T.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push(T[o], r[T[o]]);
    return (n.t = e), n;
  }
  function La(e, t, r, n, o, i, a, s, l, c, f, u) {
    if (
      (I(e) && (e = e(s)),
      H(e) &&
        "max" === e.substr(0, 3) &&
        (e = u + ("=" === e.charAt(4) ? pa("0" + e.substr(3), r) : 0)),
      J(e))
    )
      a && k(a, r, n, f, !0);
    else {
      I(t) && (t = t(s));
      var p,
        d,
        g,
        h = Se(t)[0] || Te,
        v = ga(h) || {},
        m = e.split(" ");
      (v && (v.left || v.top)) ||
        "none" !== da(h).display ||
        ((g = h.style.display),
        (h.style.display = "block"),
        (v = ga(h)),
        g ? (h.style.display = g) : h.style.removeProperty("display")),
        (p = pa(m[0], v[n.d])),
        (d = pa(m[1] || "0", r)),
        (e = v[n.p] - l[n.p] - c + p + o - d),
        a && k(a, d, n, f, r - d < 20 || (a._isStart && 20 < d)),
        (r -= r - d);
    }
    if (i) {
      var b = e + r,
        y = i._isStart;
      (u = "scroll" + n.d2),
        k(
          i,
          b,
          n,
          f,
          (y && 20 < b) ||
            (!y && (f ? Math.max(Te[u], x[u]) : i.parentNode[u]) <= b + 1)
        ),
        f &&
          ((l = ga(a)),
          f && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + Ke));
    }
    return Math.round(e);
  }
  function Oa(l, e) {
    var c,
      f = E(l) ? e.sc : F(l, e),
      u = "_scroll" + e.p2;
    return (
      (l[u] = f),
      function getTween(e, t, r, n, o) {
        var i = getTween.tween,
          a = t.onComplete,
          s = {};
        return (
          i && i.kill(),
          (c = f()),
          (t[u] = e),
          ((t.modifiers = s)[u] = function (e) {
            return (
              f() !== c
                ? (i.kill(), (getTween.tween = 0), (e = f()))
                : n && (e = r + n * i.ratio + o * i.ratio * i.ratio),
              (c = Math.round(e))
            );
          }),
          (t.onComplete = function () {
            (getTween.tween = 0), a && a.call(i);
          }),
          (i = getTween.tween = xe.to(l, t))
        );
      }
    );
  }
  var xe,
    o,
    we,
    ke,
    x,
    Te,
    i,
    a,
    s,
    n,
    Se,
    Ce,
    _e,
    l,
    Ee,
    Oe,
    c,
    Pe,
    Ie,
    Me = 1,
    Ae = Date.now,
    f = Ae(),
    Fe = 0,
    ze = 1,
    Le = Math.abs,
    t = "scrollLeft",
    r = "scrollTop",
    u = "left",
    p = "top",
    y = "right",
    w = "bottom",
    Be = "width",
    Ne = "height",
    Re = "Right",
    qe = "Left",
    He = "Top",
    De = "Bottom",
    je = "padding",
    We = "margin",
    Ge = "Width",
    Je = "Height",
    Ke = "px",
    Xe = {
      s: t,
      p: u,
      p2: qe,
      os: y,
      os2: Re,
      d: Be,
      d2: Ge,
      a: "x",
      sc: function sc(e) {
        return arguments.length
          ? we.scrollTo(e, Ye.sc())
          : we.pageXOffset || ke[t] || x[t] || Te[t] || 0;
      },
    },
    Ye = {
      s: r,
      p: p,
      p2: He,
      os: w,
      os2: De,
      d: Ne,
      d2: Je,
      a: "y",
      op: Xe,
      sc: function sc(e) {
        return arguments.length
          ? we.scrollTo(Xe.sc(), e)
          : we.pageYOffset || ke[r] || x[r] || Te[r] || 0;
      },
    },
    Ue = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ve = { toggleActions: "play", anticipatePin: 0 },
    d = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    k = function _positionMarker(e, t, r, n, o) {
      var i = {},
        a = r[o ? "os2" : "p2"],
        s = r[o ? "p2" : "os2"];
      (e._isFlipped = o),
        (i[r.a + "Percent"] = o ? -100 : 0),
        (i[r.a] = o ? 1 : 0),
        (i["border" + a + Ge] = 1),
        (i["border" + s + Ge] = 0),
        (i[r.p] = t),
        xe.set(e, i);
    },
    Ze = [],
    $e = {},
    g = {},
    h = [],
    v = function _dispatch(e) {
      return (
        (g[e] &&
          g[e].map(function (e) {
            return e();
          })) ||
        h
      );
    },
    m = function _updateAll() {
      var e = Ze.length,
        t = Ae(),
        r = 50 <= t - f;
      for (
        r &&
          (Fe && !Oe && 200 < t - Fe && ((Fe = 0), v("scrollEnd")),
          (_e = f),
          (f = t)),
          Pe = 0;
        Pe < e;
        Pe++
      )
        Ze[Pe] && Ze[Pe].update(0, r);
      n = 0;
    },
    b = [
      u,
      p,
      w,
      y,
      We + De,
      We + Re,
      We + He,
      We + qe,
      "display",
      "flexShrink",
    ],
    T = b.concat([
      Be,
      Ne,
      "boxSizing",
      "max" + Ge,
      "max" + Je,
      "position",
      We,
      je,
      je + He,
      je + Re,
      je + De,
      je + qe,
    ]),
    S = /([A-Z])/g,
    Qe = function _setState(e) {
      for (var t, r, n = e.t.style, o = e.length, i = 0; i < o; i += 2)
        (r = e[i + 1]),
          (t = e[i]),
          r
            ? (n[t] = r)
            : n[t] && n.removeProperty(t.replace(S, "-$1").toLowerCase());
    },
    et = { left: 0, top: 0 },
    tt = /(?:webkit|moz|length)/i;
  Xe.op = Ye;
  var _ =
    ((ScrollTrigger.prototype.init = function init(x, w) {
      if (((this.progress = 0), this.vars && this.kill(1), ze)) {
        var d,
          e,
          c,
          k,
          g,
          h,
          T,
          S,
          C,
          _,
          O,
          P,
          t,
          M,
          A,
          z,
          L,
          N,
          r,
          R,
          v,
          q,
          D,
          m,
          j,
          b,
          y,
          n,
          W,
          X,
          Y,
          U,
          o,
          f,
          V,
          Z,
          $ = (x = fa(H(x) || J(x) || x.nodeType ? { trigger: x } : x, Ve))
            .horizontal
            ? Xe
            : Ye,
          Q = x.onUpdate,
          ee = x.toggleClass,
          i = x.id,
          te = x.onToggle,
          re = x.onRefresh,
          a = x.scrub,
          ne = x.trigger,
          oe = x.pin,
          ie = x.pinSpacing,
          ae = x.invalidateOnRefresh,
          se = x.anticipatePin,
          s = x.onScrubComplete,
          u = x.onSnapComplete,
          le = x.once,
          ce = x.snap,
          fe = x.pinReparent,
          ue = !a && 0 !== a,
          pe = Se(x.scroller || we)[0],
          l = xe.core.getCache(pe),
          de = E(pe),
          ge = [x.onEnter, x.onLeave, x.onEnterBack, x.onLeaveBack],
          he = ue && (le ? "play" : x.toggleActions).split(" "),
          p = "markers" in x ? x.markers : Ve.markers,
          ve = de ? 0 : parseFloat(da(pe)["border" + $.p2 + Ge]) || 0,
          me = this,
          be = function softRefresh() {
            return (
              ScrollTrigger.removeEventListener("scrollEnd", softRefresh) ||
              me.refresh()
            );
          },
          ye =
            x.onRefreshInit &&
            function () {
              return x.onRefreshInit(me);
            };
        (se *= 45),
          Ze.push(me),
          (me.scroller = pe),
          (me.scroll = de ? $.sc : F(pe, $)),
          (g = me.scroll()),
          (me.vars = x),
          (w = w || x.animation),
          (l.tweenScroll = l.tweenScroll || {
            top: Oa(pe, Ye),
            left: Oa(pe, Xe),
          }),
          (me.tweenTo = d = l.tweenScroll[$.p]),
          w &&
            ((w.vars.lazy = !1),
            w._initted ||
              (!1 !== w.vars.immediateRender && w.render(-0.01, !0, !0)),
            (me.animation = w.pause()),
            (w.scrollTrigger = me),
            (o = J(a) && a) &&
              (U = xe.to(w, {
                ease: "power3",
                duration: o,
                onComplete: function onComplete() {
                  return s && s(me);
                },
              })),
            (W = 0),
            (i = i || w.vars.id)),
          ce &&
            (K(ce) || (ce = { snapTo: ce }),
            (c = I(ce.snapTo)
              ? ce.snapTo
              : "labels" === ce.snapTo
              ? (function _getLabels(i) {
                  return function (e) {
                    var t,
                      r = [],
                      n = i.labels,
                      o = i.duration();
                    for (t in n) r.push(n[t] / o);
                    return xe.utils.snap(r, e);
                  };
                })(w)
              : xe.utils.snap(ce.snapTo)),
            (f = ce.duration || { min: 0.1, max: 2 }),
            (f = K(f) ? Ce(f.min, f.max) : Ce(f, f)),
            (V = xe
              .delayedCall(ce.delay || o / 2 || 0.1, function () {
                if (!Fe || (Fe === Y && !Oe)) {
                  var e = w && !ue ? w.totalProgress() : me.progress,
                    t = ((e - X) / (Ae() - _e)) * 1e3 || 0,
                    r = (Le(t / 2) * t) / 0.185,
                    n = e + r,
                    o = Ce(0, 1, c(n, me)),
                    i = o - e - r,
                    a = me.scroll(),
                    s = Math.round(T + o * M),
                    l = d.tween;
                  if (a <= S && T <= a) {
                    if (l && !l._initted) {
                      if (l.data <= Math.abs(s - a)) return;
                      l.kill();
                    }
                    d(
                      s,
                      {
                        duration: f(
                          Le(
                            (0.185 * Math.max(Le(n - e), Le(o - e))) /
                              t /
                              0.05 || 0
                          )
                        ),
                        ease: ce.ease || "power3",
                        data: Math.abs(s - a),
                        onComplete: function onComplete() {
                          (W = X = w && !ue ? w.totalProgress() : me.progress),
                            u && u(me);
                        },
                      },
                      T + e * M,
                      r * M,
                      i * M
                    );
                  }
                } else V.restart(!0);
              })
              .pause())),
          i && ($e[i] = me),
          (ne = me.trigger = Se(ne || oe)[0]),
          (oe = !0 === oe ? ne : Se(oe)[0]),
          H(ee) && (ee = { targets: ne, className: ee }),
          oe &&
            (!1 === ie ||
              ie === We ||
              (ie = "flex" !== da(oe.parentNode).display && je),
            (me.pin = oe),
            !1 !== x.force3D && xe.set(oe, { force3D: !0 }),
            (e = xe.core.getCache(oe)).spacer
              ? (A = e.pinState)
              : ((e.spacer = N = ke.createElement("div")),
                N.setAttribute(
                  "class",
                  "pin-spacer" + (i ? " pin-spacer-" + i : "")
                ),
                (e.pinState = A = Ia(oe))),
            (me.spacer = N = e.spacer),
            (n = da(oe)),
            (m = n[ie + $.os2]),
            (R = xe.getProperty(oe)),
            (v = xe.quickSetter(oe, $.a, Ke)),
            Fa(oe, N, n),
            (L = Ia(oe))),
          p &&
            ((t = K(p) ? fa(p, Ue) : Ue),
            (O = qa("scroller-start", i, pe, $, t, 0)),
            (P = qa("scroller-end", i, pe, $, t, 0, O)),
            (r = O["offset" + $.op.d2]),
            (C = qa("start", i, pe, $, t, r)),
            (_ = qa("end", i, pe, $, t, r)),
            de ||
              ((function _makePositionable(e) {
                e.style.position =
                  "absolute" === da(e).position ? "absolute" : "relative";
              })(pe),
              xe.set([O, P], { force3D: !0 }),
              (b = xe.quickSetter(O, $.a, Ke)),
              (y = xe.quickSetter(P, $.a, Ke)))),
          (me.revert = function (e) {
            var t = !1 !== e;
            t !== k && (me.update(t), oe && t && Ea(oe, N, A), (k = t));
          }),
          (me.refresh = function (e) {
            if (!Ee && Z)
              if (oe && e && Fe) ka(ScrollTrigger, "scrollEnd", be);
              else {
                var t = Math.max(me.scroll(), me.scroll.rec || 0),
                  r = me.progress,
                  n = w && w.progress();
                (Ee = 1),
                  U && U.kill(),
                  ae && w && w.progress(0).invalidate().progress(me.progress),
                  k || me.revert();
                var o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  f,
                  u = (de ? we["inner" + $.d2] : pe["client" + $.d2]) || 0,
                  p = de ? et : ga(pe),
                  d = G(pe, $),
                  g = 0,
                  h = 0,
                  v = x.end,
                  m = x.endTrigger || ne,
                  b = x.start || (oe || !ne ? "0 0" : "0 100%"),
                  y = (oe && Math.max(0, Ze.indexOf(me))) || 0;
                if (y) for (c = y; c--; ) Ze[c].pin === oe && Ze[c].revert();
                if (
                  ((T =
                    La(b, ne, u, $, me.scroll(), C, O, me, p, ve, de, d) ||
                    (oe ? -0.001 : 0)),
                  I(v) && (v = v(me)),
                  H(v) &&
                    !v.indexOf("+=") &&
                    (~v.indexOf(" ")
                      ? (v = (H(b) ? b.split(" ")[0] : "") + v)
                      : ((g = pa(v.substr(2), u)),
                        (v = H(b) ? b : T + g),
                        (m = ne))),
                  (S =
                    Math.max(
                      T,
                      La(
                        v || (m ? "100% 0" : d),
                        m,
                        u,
                        $,
                        me.scroll() + g,
                        _,
                        P,
                        me,
                        p,
                        ve,
                        de,
                        d
                      )
                    ) || -0.001),
                  (M = S - T || ((T -= 0.01) && 0.001)),
                  oe)
                ) {
                  for (c = y; c--; )
                    (f = Ze[c]).pin === oe &&
                      f.start - f._pinPush < T &&
                      (h += f.end - f.start);
                  if (
                    ((T += h),
                    (S += h),
                    (me._pinPush = h),
                    C && h && (((o = {})[$.a] = "+=" + h), xe.set([C, _], o)),
                    (o = da(oe)),
                    (s = $ === Ye),
                    (a = me.scroll()),
                    (q = parseFloat(R($.a)) + h),
                    Fa(oe, N, o),
                    (L = Ia(oe)),
                    (i = ga(oe, !0)),
                    ie &&
                      ((N.style[ie + $.os2] = M + h + Ke),
                      (j = ie === je ? ha(oe, $) + M + h : 0) &&
                        (N.style[$.d] = j + Ke),
                      de && me.scroll(t)),
                    de &&
                      (((l = {
                        top: i.top + (s ? a - T : 0) + Ke,
                        left: i.left + (s ? 0 : a - T) + Ke,
                        boxSizing: "border-box",
                        position: "fixed",
                      })[Be] = l.maxWidth =
                        Math.ceil(i.width) + Ke),
                      (l[Ne] = l["max" + Je] = Math.ceil(i.height) + Ke),
                      (l[We] =
                        l[We + He] =
                        l[We + Re] =
                        l[We + De] =
                        l[We + qe] =
                          "0"),
                      (l[je] = o[je]),
                      (l[je + He] = o[je + He]),
                      (l[je + Re] = o[je + Re]),
                      (l[je + De] = o[je + De]),
                      (l[je + qe] = o[je + qe]),
                      (z = (function _copyState(e, t, r) {
                        for (
                          var n, o = [], i = e.length, a = r ? 8 : 0;
                          a < i;
                          a += 2
                        )
                          (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                        return (o.t = e.t), o;
                      })(A, l, fe))),
                    w
                      ? (w.progress(1, !0),
                        (D = R($.a) - q + M + h),
                        M !== D && z.splice(z.length - 2, 2),
                        w.progress(0, !0))
                      : (D = M),
                    y)
                  )
                    for (c = 0; c < y; c++)
                      Ze[c].pin === oe && Ze[c].revert(!1);
                } else if (ne && me.scroll())
                  for (i = ne.parentNode; i && i !== Te; )
                    i._pinOffset && ((T -= i._pinOffset), (S -= i._pinOffset)),
                      (i = i.parentNode);
                (me.start = T),
                  (me.end = S),
                  me.scroll() < t && me.scroll(t),
                  me.revert(!1),
                  (Ee = 0),
                  n && ue && w.progress(n, !0),
                  r !== me.progress &&
                    (U && w.totalProgress(r, !0),
                    (me.progress = r),
                    me.update()),
                  oe && ie && (N._pinOffset = Math.round(me.progress * D)),
                  re && re(me);
              }
          }),
          (me.getVelocity = function () {
            return ((me.scroll() - h) / (Ae() - _e)) * 1e3 || 0;
          }),
          (me.update = function (e, t) {
            var r,
              n,
              o,
              i,
              a,
              s = me.scroll(),
              l = e ? 0 : (s - T) / M,
              c = l < 0 ? 0 : 1 < l ? 1 : l || 0,
              f = me.progress;
            if (
              (t &&
                ((h = g),
                (g = s),
                ce && ((X = W), (W = w && !ue ? w.totalProgress() : c))),
              se &&
                !c &&
                oe &&
                !Ee &&
                T < s + ((s - h) / (Ae() - _e)) * se &&
                (c = 1e-4),
              c !== f && Z)
            ) {
              if (
                ((i =
                  (a = (r = me.isActive = !!c && c < 1) != (!!f && f < 1)) ||
                  !!c != !!f),
                (me.direction = f < c ? 1 : -1),
                (me.progress = c),
                ue ||
                  (!U || Ee || Me
                    ? w && w.totalProgress(c, !!Ee)
                    : ((U.vars.totalProgress = c), U.invalidate().restart())),
                oe)
              )
                if ((e && ie && (N.style[ie + $.os2] = m), de)) {
                  if (i) {
                    if (((o = !e && s < S + 1 && s + 1 >= G(pe, $)), fe)) {
                      if (!Ee && (r || o)) {
                        var u = ga(oe, !0),
                          p = s - T;
                        (oe.style.top = u.top + ($ === Ye ? p : 0) + Ke),
                          (oe.style.left = u.left + ($ === Ye ? 0 : p) + Ke);
                      }
                      !(function _reparent(e, t) {
                        if (e.parentNode !== t) {
                          var r,
                            n,
                            o = e.style;
                          if (t === Te)
                            for (r in ((e._stOrig = o.cssText), (n = da(e))))
                              +r ||
                                tt.test(r) ||
                                !n[r] ||
                                "string" != typeof o[r] ||
                                "0" === r ||
                                (o[r] = n[r]);
                          else o.cssText = e._stOrig;
                          t.appendChild(e);
                        }
                      })(oe, Ee || (!r && !o) ? N : Te);
                    }
                    Qe(r || o ? z : L),
                      (D !== M && c < 1 && r) || v(q + (1 !== c || o ? 0 : D));
                  }
                } else v(q + D * c);
              !ce || d.tween || Ee || Me || ((Y = Fe), V.restart(!0)),
                ee &&
                  a &&
                  (!le || r) &&
                  Se(ee.targets).forEach(function (e) {
                    return e.classList[r ? "add" : "remove"](ee.className);
                  }),
                !Q || ue || e || Q(me),
                i && !Ee
                  ? ((n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3),
                    ue &&
                      ((o = (!a && "none" !== he[n + 1] && he[n + 1]) || he[n]),
                      w &&
                        ("complete" === o || "reset" === o || o in w) &&
                        ("complete" === o
                          ? w.pause().totalProgress(1)
                          : "reset" === o
                          ? w.restart(!0).pause()
                          : w[o]()),
                      Q && Q(me)),
                    (!a && Ie) ||
                      (te && a && te(me),
                      ge[n] && ge[n](me),
                      le && (1 === c ? me.kill() : (ge[n] = 0)),
                      a || (ge[(n = 1 === c ? 1 : 3)] && ge[n](me))))
                  : ue && Q && !Ee && Q(me);
            }
            y && (b(s + (O._isFlipped ? 1 : 0)), y(s));
          }),
          (me.enable = function () {
            Z ||
              ((Z = !0),
              ka(pe, "resize", wa),
              ka(pe, "scroll", va),
              ye && ka(ScrollTrigger, "refreshInit", ye),
              w && w.add
                ? xe.delayedCall(0.01, me.refresh) && (M = 0.01) && (T = S = 0)
                : me.refresh());
          }),
          (me.disable = function (e) {
            if (
              Z &&
              ((Z = me.isActive = !1),
              U && U.pause(),
              e !== Z && me.update(1),
              oe && Ea(oe, N, A),
              ye && la(ScrollTrigger, "refreshInit", ye),
              V && (V.pause(), d.tween && d.tween.kill()),
              !de)
            ) {
              for (var t = Ze.length; t--; )
                if (Ze[t].scroller === pe && Ze[t] !== me) return;
              la(pe, "resize", wa), la(pe, "scroll", va);
            }
          }),
          (me.kill = function (e) {
            me.disable(e), i && delete $e[i];
            var t = Ze.indexOf(me);
            Ze.splice(t, 1), t === Pe && Pe--, w && (w.scrollTrigger = null);
          }),
          me.enable();
      } else this.update = this.refresh = this.kill = B;
    }),
    (ScrollTrigger.register = function register(e) {
      if (
        ((xe = e || D()),
        C() &&
          window.document &&
          ((we = window),
          (ke = document),
          (x = ke.documentElement),
          (Te = ke.body)),
        xe &&
          ((Se = xe.utils.toArray),
          (Ce = xe.utils.clamp),
          xe.core.globals("ScrollTrigger", ScrollTrigger),
          Te))
      ) {
        (s =
          we.requestAnimationFrame ||
          function (e) {
            return setTimeout(e, 16);
          }),
          ka(we, "mousewheel", va),
          (i = [we, ke, x, Te]),
          ka(ke, "scroll", va);
        var t,
          r = Te.style,
          n = r.borderTop;
        (r.borderTop = "1px solid #000"),
          (t = ga(Te)),
          (Ye.m = Math.round(t.top + Ye.sc()) || 0),
          (Xe.m = Math.round(t.left + Xe.sc()) || 0),
          n ? (r.borderTop = n) : r.removeProperty("border-top"),
          (l = setInterval(ua, 100)),
          xe.delayedCall(0.5, function () {
            return (Me = 0);
          }),
          ka(ke, "touchcancel", B),
          ka(Te, "touchstart", B),
          ja(ka, ke, "pointerdown,touchstart,mousedown", function () {
            return (Oe = 1);
          }),
          ja(ka, ke, "pointerup,touchend,mouseup", function () {
            return (Oe = 0);
          }),
          (c = xe.utils.checkPrefix("transform")),
          T.push(c),
          (o = Ae()),
          (a = xe.delayedCall(0.2, Aa).pause()),
          ka(ke, "visibilitychange", function () {
            return ke.hidden || Aa();
          }),
          ka(ke, "DOMContentLoaded", Aa),
          ka(we, "load", function () {
            return Fe || Aa();
          }),
          ka(we, "resize", wa);
      }
      return o;
    }),
    (ScrollTrigger.defaults = function defaults(e) {
      for (var t in e) Ve[t] = e[t];
    }),
    (ScrollTrigger.kill = function kill() {
      (ze = 0),
        Ze.slice(0).forEach(function (e) {
          return e.kill(1);
        });
    }),
    (ScrollTrigger.config = function config(e) {
      "limitCallbacks" in e && (Ie = !!e.limitCallbacks);
      var t = e.syncInterval;
      (t && clearInterval(l)) || ((l = t) && setInterval(ua, t));
    }),
    ScrollTrigger);
  function ScrollTrigger(e, t) {
    o ||
      ScrollTrigger.register(xe) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(e, t);
  }
  (_.version = "3.3.4"),
    (_.create = function (e, t) {
      return new _(e, t);
    }),
    (_.refresh = function (e) {
      return e ? wa() : Aa(!0);
    }),
    (_.update = m),
    (_.maxScroll = function (e, t) {
      return G(e, t ? Xe : Ye);
    }),
    (_.getScrollFunc = function (e, t) {
      return (t = t ? Xe : Ye) && (E(e) ? t.sc : F(e, t));
    }),
    (_.getById = function (e) {
      return $e[e];
    }),
    (_.getAll = function () {
      return Ze.slice(0);
    }),
    (_.isScrolling = function () {
      return !!Fe;
    }),
    (_.addEventListener = function (e, t) {
      var r = g[e] || (g[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (_.removeEventListener = function (e, t) {
      var r = g[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (_.batch = function (e, t) {
      function zg(e, t) {
        var r = [],
          n = [],
          o = xe
            .delayedCall(i, function () {
              t(r, n), (r = []), (n = []);
            })
            .pause();
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        o[r] =
          "on" === r.substr(0, 2) && I(t[r]) && "onRefreshInit" !== r
            ? zg(0, t[r])
            : t[r];
      return (
        I(a) &&
          ((a = a()),
          ka(_, "refresh", function () {
            return (a = t.batchMax());
          })),
        Se(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push(_.create(t));
        }),
        n
      );
    }),
    D() && xe.registerPlugin(_),
    (e.ScrollTrigger = _),
    (e.default = _);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
