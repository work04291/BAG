(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [7768], {

        /***/
        223140: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var OX;
                var MX, Wjb, Sjb, Qjb, Xjb, Rjb;
                __c.HX = function(a, b, c) {
                    return 0 > c ? a : 1 < c ? b : a + (b - a) * c
                };
                __c.IX = function(a) {
                    const b = new Map,
                        c = [];
                    for (const d of a) a = b.get(d) || 0, c.push(`${d}__${a}`), b.set(d, a + 1);
                    return c
                };
                __c.JX = function(a) {
                    a = a.next();
                    if (!a.done) return a.value
                };
                __c.LX = function(a) {
                    const b = ({
                        oJa: c = !1,
                        children: d
                    }) => {
                        const e = Qjb(),
                            f = Rjb(null);
                        Sjb(() => Tjb(() => {
                            const {
                                width: g,
                                height: h,
                                top: k = 0,
                                left: l = 0
                            } = a(), m = f.current;
                            m && (m.setAttribute("width", g.toString()), m.setAttribute("height", h.toString()), m.setAttribute("x", l.toString()), m.setAttribute("y", k.toString()))
                        }), []);
                        return Ujb(Vjb, {
                            children: [!c && KX("clipPath", {
                                id: e,
                                children: KX("rect", {
                                    ref: f
                                })
                            }), KX("g", {
                                clipPath: c ? void 0 : `url(#${e})`,
                                children: d
                            })]
                        })
                    };
                    b.displayName = null != a.name ? `ClippingContainer(${a.name})` : "ClippingContainer";
                    return b
                };
                MX = __webpack_require__(875604);
                Wjb = MX.createContext;
                Sjb = MX.useEffect;
                Qjb = MX.useId;
                Xjb = MX.useLayoutEffect;
                Rjb = MX.useRef;
                var NX = __webpack_require__(443763),
                    Vjb = NX.Fragment,
                    KX = NX.jsx,
                    Ujb = NX.jsxs;
                var Tjb = __webpack_require__(42782).EH;
                OX = __c.OX = class {
                    static NP(a, b, c) {
                        return 0 >= c ? a : 1 <= c ? b : OX.isEqual(a, b) ? a : new OX(__c.HX(a.r, b.r, c), __c.HX(a.g, b.g, c), __c.HX(a.b, b.b, c), __c.HX(a.a, b.a, c))
                    }
                    static multiply(a, b) {
                        return OX.isEqual(a, __c.PX) ? b : OX.isEqual(b, __c.PX) ? a : new OX(a.r * b.r, a.g * b.g, a.b * b.b, a.a * b.a)
                    }
                    static isEqual(a, b) {
                        return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a
                    }
                    static fromHex(a) {
                        a = a.startsWith("#") ? a.substr(1) : a;
                        a = parseInt(a, 16);
                        return new OX(Math.floor(a / 65536) % 256 / 255, Math.floor(a / 256) % 256 / 255, a % 256 / 255, 1)
                    }
                    constructor(a = 0,
                        b = 0, c = 0, d = 0) {
                        this.r = a;
                        this.g = b;
                        this.b = c;
                        this.a = d
                    }
                };
                __c.QX = new OX(1, 1, 1, 0);
                __c.PX = new OX(1, 1, 1, 1);
                __c.RX = a => {
                    const b = ({
                        children: c
                    }) => {
                        const d = Rjb(null);
                        Xjb(() => Tjb(() => {
                            const {
                                vertical: e,
                                horizontal: f
                            } = a(), g = d.current;
                            g && g.setAttribute("transform", `scale(${e}, ${f})`)
                        }), []);
                        return KX("g", {
                            ref: d,
                            children: c
                        })
                    };
                    b.displayName = null != a.name ? `ScaledLayout(${a.name})` : "ScaledLayout";
                    return b
                };
                __c.SX = Wjb(window);
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/58642d6f32932068.js.map