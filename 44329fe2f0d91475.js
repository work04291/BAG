(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [1169], {

        /***/
        957679: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(223140);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var iYb = function(a) {
                        return Array.isArray(a.k) && "object" === typeof a.k[0]
                    },
                    jYb = function(a, b) {
                        if (a.assets)
                            for (const f of a.assets)
                                if ("layers" in f)
                                    for (const g of f.layers) {
                                        if (4 !== g.ty) continue;
                                        const h = [];
                                        var c, d = null !== (c = g.shapes) && void 0 !== c ? c : [];
                                        for (const k of d) d = U$(k, b), h.push(d);
                                        g.shapes = h
                                    }
                        if (a.layers)
                            for (const f of a.layers)
                                if (4 === f.ty) {
                                    a = [];
                                    var e;
                                    c = null !== (e = f.shapes) && void 0 !== e ? e : [];
                                    for (const g of c) c = U$(g, b), a.push(c);
                                    f.shapes = a
                                }
                    },
                    U$ = function(a, b) {
                        switch (a.ty) {
                            case "fl":
                            case "st":
                                var c;
                                if (iYb(a.c)) break;
                                const e = null === (c = kYb(a.c.k)) || void 0 === c ? void 0 : __c.zr(c);
                                if (e) {
                                    var d = Array.from(b.keys()).find(f => f === e);
                                    d && void 0 !== b.get(d) && (b = b.get(d), b = __c.wr(b), a.c.k = [b.r / 255, b.g / 255, b.b / 255, 1])
                                }
                                break;
                            case "gr":
                                c = [];
                                for (d of a.it) {
                                    const f = U$(d, b);
                                    c.push(f)
                                }
                                a.it = c
                        }
                        return a
                    },
                    kYb = function(a) {
                        if (4 === a.length) return a = a.map(b => Number((255 * b).toFixed(2))), new __c.vr(a[0], a[1], a[2])
                    },
                    lYb = __webpack_require__(443763),
                    V$ = lYb.jsx,
                    mYb = lYb.jsxs;
                var nYb = __webpack_require__,
                    oYb = nYb(993864),
                    pYb = nYb.n_x(oYb)();
                var qYb = __webpack_require__,
                    rYb = qYb(765511),
                    sYb = qYb.n_x(rYb);
                var tYb = __webpack_require__(875604).Component;
                var W$ = __webpack_require__(42782),
                    X$ = W$.aD,
                    uYb = W$.p6,
                    vYb = W$.Fl,
                    wYb = W$.LO,
                    Y$ = W$.U5;
                var xYb = __webpack_require__(240236).gn;
                var yYb = __webpack_require__(649799),
                    zYb = yYb.Om,
                    AYb = yYb.p4;
                var Z$ = class extends tYb {
                    componentDidMount() {
                        __c.xc(this, [Y$(() => [this.props.animationData, this.props.Wc], () => {
                            const a = this.props.animationData,
                                b = this.props.Wc,
                                c = this.props.OL;
                            a && this.loadAnimation(a, b, c)
                        }, {
                            fireImmediately: !0,
                            equals: uYb.shallow
                        }), Y$(() => this.props.OL, a => {
                            this.Th && this.Th.goToAndStop(1E3 * a)
                        }, {
                            fireImmediately: !0
                        })])
                    }
                    componentWillUnmount() {
                        var a;
                        null === (a = this.Th) || void 0 === a ? void 0 : a.destroy()
                    }
                    render() {
                        const a = this.props.altText,
                            {
                                ariaHidden: b,
                                ariaLabel: c
                            } = __c.DW(a);
                        return V$("div", {
                            className: "_8i6R0w",
                            ref: this.QP,
                            role: a ? "img" : void 0,
                            "aria-label": c,
                            "aria-hidden": b
                        })
                    }
                    loadAnimation(a, b, c) {
                        const d = this.QP.current;
                        d && (a = JSON.parse(JSON.stringify(a)), jYb(a, b), this.Th && this.Th.destroy(), this.Th = sYb().loadAnimation({
                            autoplay: !1,
                            animationData: a,
                            container: d,
                            renderer: "svg"
                        }), b = d.getElementsByTagName("svg")[0]) && (this.props.$l && "translate3d(0px, 0px, 0px)" === b.style.transform && (b.style.transform = ""), this.Th.goToAndStop(1E3 * c))
                    }
                    constructor(...a) {
                        super(...a);
                        this.QP = __c.yy()
                    }
                };
                Z$ = xYb([__c.Lc], Z$);
                __c.agb = {};
                __c.agb.GPa = Z$;
                var $$ = class a extends tYb {
                        static j(b) {
                            __c.P(b, {
                                isReady: wYb.ref,
                                Nfa: vYb,
                                componentDidMount: X$,
                                TEa: X$.bound,
                                onError: X$.bound,
                                T1: X$.bound
                            })
                        }
                        get Nfa() {
                            var b;
                            const c = this.props.store,
                                d = this.props.Jw;
                            return !this.isReady || d && !c.Xa && !(null === (b = c.Wc) || void 0 === b ? 0 : b.size)
                        }
                        componentDidMount() {
                            const b = this.props.store;
                            this.props.controller.onWaiting();
                            __c.xc(this, [Y$(() => {
                                var c;
                                return {
                                    data: null === (c = b.animationData) || void 0 === c ? void 0 : c.get(),
                                    Wc: b.Wc
                                }
                            }, ({
                                data: c,
                                Wc: d
                            }) => c && this.loadAnimation(c, d), {
                                fireImmediately: !0,
                                equals: uYb.shallow
                            }), Y$(() => this.isReady && b.Xa, c => c ? this.play() : this.pause(), {
                                fireImmediately: !0
                            }), this.T1])
                        }
                        render() {
                            const b = this.props.Jw,
                                c = this.props.store,
                                d = c.altText,
                                {
                                    ariaHidden: e,
                                    ariaLabel: f
                                } = __c.DW(d);
                            return mYb("div", {
                                className: "UB_yHg",
                                children: [this.Nfa && V$("img", {
                                    className: "KYSIUA",
                                    src: c.AG,
                                    ref: this.pGa,
                                    alt: d
                                }), V$("div", {
                                    className: pYb("KYSIUA", b && this.Nfa && "BUTEbw"),
                                    ref: this.QP,
                                    role: d ? "img" : void 0,
                                    "aria-label": f,
                                    "aria-hidden": e
                                })]
                            })
                        }
                        TEa() {
                            this.isReady = !0;
                            this.props.controller.onCanPlay()
                        }
                        onError() {
                            this.props.controller.onError();
                            this.T1()
                        }
                        seek(b) {
                            this.Th && (b *= 1E3, this.props.store.Xa ? this.Th.goToAndPlay(b) : this.Th.goToAndStop(b))
                        }
                        Ro() {
                            if (!this.isReady) {
                                var b = this.pGa.current;
                                return b ? __c.lL(b) : void 0
                            }
                            if (b = this.QP.current)
                                if (b = b.getElementsByTagName("svg")[0]) return b = BYb(b), "fulfilled" === b.state ? {
                                    type: "image",
                                    element: b.value
                                } : void 0
                        }
                        play() {
                            var b;
                            null === (b = this.Th) || void 0 === b ? void 0 : b.play()
                        }
                        pause() {
                            var b;
                            null === (b = this.Th) || void 0 === b ? void 0 : b.pause()
                        }
                        T1() {
                            this.Th && (this.Th.destroy(), this.Th = void 0, this.isReady = !1)
                        }
                        loadAnimation(b,
                            c) {
                            const d = __c.C(this.QP.current);
                            b = JSON.parse(JSON.stringify(b));
                            c && 0 < c.size && jYb(b, c);
                            this.T1();
                            this.Th = sYb().loadAnimation({
                                autoplay: !1,
                                animationData: b,
                                container: d,
                                renderer: "svg",
                                loop: !0
                            });
                            if (c = d.getElementsByTagName("svg")[0]) this.props.$l && "translate3d(0px, 0px, 0px)" === c.style.transform && (c.style.transform = ""), this.Th.goToAndStop(1E3 * this.props.store.currentTime), this.Th.addEventListener("DOMLoaded", this.TEa), this.Th.addEventListener("error", this.onError), this.Th.addEventListener("data_failed",
                                this.onError)
                        }
                        constructor(...b) {
                            super(...b);
                            a.j(this);
                            this.QP = __c.yy();
                            this.pGa = __c.yy();
                            this.isReady = !1
                        }
                    },
                    CYb, BYb;
                $$ = xYb([__c.Lc], $$);
                CYb = new XMLSerializer;
                BYb = zYb(a => {
                    a = new Blob([CYb.serializeToString(a)], {
                        type: "image/svg+xml"
                    });
                    const b = URL.createObjectURL(a);
                    return AYb(__c.UU(b).finally(() => URL.revokeObjectURL(b)))
                });
                __c.Xfb = {};
                __c.Xfb.HPa = $$;
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        },

        /***/
        383429:
            (_, __, r) => r(957679)

    }
])
//# sourceMappingURL=sourcemaps/44329fe2f0d91475.js.map