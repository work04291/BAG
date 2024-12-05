(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [7172], {

        /***/
        621725: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(223140);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var Mkb, Kkb, Lkb, Jkb, Pkb, CY;
                __c.BY = function(a, b) {
                    const c = b.width / 3;
                    return 1 === __c.iA.direction ? a > b.left + c ? 1 : 0 : a < b.right - c ? 1 : 0
                };
                __c.Ikb = function({
                    direction: a,
                    Fn: b,
                    In: c
                }) {
                    return 1 === a && b || 0 === a && c
                };
                Mkb = async function({
                    openWindow: a,
                    u7: b,
                    q4a: c
                }) {
                    const d = await a({
                            width: 1280,
                            height: 720,
                            left: window.screen.availWidth - window.screen.availLeft - 1280,
                            top: window.screen.availHeight - window.screen.availTop - 720,
                            jrb: !0,
                            u7: b
                        }),
                        e = new MutationObserver(g => {
                            for (const h of g) h.addedNodes && h.addedNodes.forEach(function(k) {
                                k instanceof HTMLStyleElement ? Jkb(d.document, k.sheet) : k instanceof HTMLLinkElement && d.document.head.appendChild(k.cloneNode(!0))
                            })
                        });
                    e.observe(document.head, {
                        childList: !0
                    });
                    e.observe(document.body, {
                        childList: !0
                    });
                    const f = () => {
                        e.disconnect();
                        d.removeEventListener("unload", f)
                    };
                    d.addEventListener("unload", f);
                    Kkb(d.document);
                    d.document.body.style.backgroundColor = "black";
                    d.document.dir = window.document.dir;
                    (a = window.document.documentElement.getAttribute("lang")) && d.document.documentElement.setAttribute("lang", a);
                    await Lkb(d.document, c);
                    return d
                };
                Kkb = function(a) {
                    var b = window.document;
                    a = a.getElementsByTagName("head")[0];
                    for (const c of b.getElementsByTagName("meta")) a.appendChild(c.cloneNode())
                };
                Lkb = async function(a, b) {
                    var c = window.document;
                    const d = a.createElement("base");
                    d.href = c.URL;
                    a.head.appendChild(d);
                    await Promise.all(Array.from(c.styleSheets).map(e => new Promise(f => {
                        if (e.href) {
                            const g = e.href,
                                h = a.createElement("link");
                            h.rel = "stylesheet";
                            h.href = g;
                            a.head.appendChild(h);
                            h.onload = () => f();
                            h.onerror = () => {
                                b({
                                    url: g
                                });
                                f()
                            }
                        } else {
                            try {
                                Jkb(a, e)
                            } catch (g) {}
                            f()
                        }
                    })))
                };
                Jkb = function(a, b) {
                    b = b.cssRules;
                    const c = a.createElement("style");
                    c.setAttribute("type", "text/css");
                    a.head.appendChild(c);
                    Array.from(b).forEach((d, e) => {
                        c.sheet.insertRule(d.cssText, e)
                    })
                };
                Pkb = function(a) {
                    const b = (0, __c.qb)(__c.kP).data;
                    Nkb(() => {
                        if (a) {
                            var c = () => {},
                                d = Okb(() => {
                                    c();
                                    const e = b.classNames,
                                        f = a.classList;
                                    f.add(...e);
                                    c = () => f.remove(...e)
                                });
                            return () => {
                                c();
                                d()
                            }
                        }
                    }, [a, b])
                };
                CY = __webpack_require__(443763).jsx;
                var Qkb = __webpack_require__(736241).Pi;
                var DY = __webpack_require__(875604),
                    Rkb = DY.Component,
                    Skb = DY.createRef,
                    Tkb = DY.Suspense,
                    Nkb = DY.useLayoutEffect;
                var Ukb = __webpack_require__(204358).createPortal;
                var EY = __webpack_require__(42782),
                    FY = EY.aD,
                    Okb = EY.EH,
                    Vkb = EY.LO,
                    GY = EY.z;
                var Wkb = __webpack_require__,
                    Xkb = Wkb(993864),
                    Ykb = Wkb.n_x(Xkb)();
                var Zkb = __webpack_require__(240236).gn;
                var $kb = __webpack_require__,
                    alb = $kb(765511),
                    blb = $kb.n_x(alb);
                var clb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.778 9.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM8.889 9.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM11.172 8.778a.828.828 0 1 0 1.656 0 .828.828 0 0 0-1.656 0ZM15.111 9.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM17.395 8.778a.828.828 0 1 0 1.655 0 .828.828 0 0 0-1.655 0ZM7.278 12.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM9.561 11.778a.828.828 0 1 0 1.656 0 .828.828 0 0 0-1.656 0ZM13.5 12.606a.828.828 0 1 1 0-1.656.828.828 0 0 1 0 1.656ZM15.783 11.778a.828.828 0 1 0 1.656 0 .828.828 0 0 0-1.656 0ZM6 15.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8Zm3-1.5h14A1.5 1.5 0 0 1 20.5 8v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 16V8A1.5 1.5 0 0 1 5 6.5Z" fill="currentColor"/></svg>';
                __c.HY = __c.bT({
                    medium: clb
                });
                var dlb = '<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 7.5H8a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zM8 5a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.232 16 6.616 8.384l1.768-1.768L16 14.232l7.616-7.616 1.768 1.768L17.768 16l7.616 7.616-1.768 1.768L16 17.768l-7.616 7.616-1.768-1.768L14.232 16z" fill="currentColor"/></svg>';
                var elb = '<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 3.25v9.5h9.5v-9.5h-9.5zM3 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="m12.558 13.442-10-10 .884-.884 10 10-.884.884z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="m3.442 13.442 10-10-.884-.884-10 10 .884.884z" fill="currentColor"/></svg>';
                var flb = '<svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3H3v6h6V3zM3 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="m9.146 9.854-7-7 .708-.708 7 7-.708.708z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="m2.854 9.854 7-7-.708-.708-7 7 .708.708z" fill="currentColor"/></svg>';
                var glb = '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 4.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5zM5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.94 12 3.47 4.53l1.06-1.06L12 10.94l7.47-7.47 1.06 1.06L13.06 12l7.47 7.47-1.06 1.06L12 13.06l-7.47 7.47-1.06-1.06L10.94 12z" fill="currentColor"/></svg>';
                var hlb = __c.bT({
                    Gl: flb,
                    small: elb,
                    medium: glb,
                    Rd: dlb
                });
                __c.IY = class a extends Rkb {
                    static j(b) {
                        __c.P(b, {
                            error: Vkb.ref,
                            componentDidCatch: FY
                        })
                    }
                    componentDidCatch(b) {
                        this.error = b
                    }
                    render() {
                        return this.props.nJa ? this.error ? CY(hlb, { ...this.props.PV
                        }) : CY(Tkb, {
                            fallback: CY(this.isa, {}),
                            children: CY(this.props.$n, { ...this.props.PV
                            })
                        }) : CY(this.isa, {})
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.error = void 0;
                        this.isa = () => CY("span", {
                            className: Ykb(__c.uz(this.props.PV.size || "medium", {})[1], this.props.PV.className),
                            children: CY(__c.xN, {
                                shape: "circle"
                            })
                        })
                    }
                };
                __c.IY = Zkb([__c.Lc], __c.IY);
                __c.JY = class extends Rkb {
                    componentDidMount() {
                        const a = __c.C(this.WCa.current);
                        var b;
                        this.Th = blb().loadAnimation({
                            autoplay: __c.iA.rb,
                            path: this.props.OF,
                            container: a,
                            renderer: "svg",
                            loop: null !== (b = this.props.loop) && void 0 !== b ? b : !1,
                            rendererSettings: this.props.rendererSettings
                        });
                        this.props.loop || this.Th.addEventListener("complete", () => {
                            var c, d;
                            null === (c = (d = this.props).Di) || void 0 === c ? void 0 : c.call(d)
                        })
                    }
                    render() {
                        return CY("div", {
                            className: "sH8e1w",
                            ref: this.WCa
                        })
                    }
                    componentWillUnmount() {
                        this.Th && this.Th.destroy()
                    }
                    constructor(...a) {
                        super(...a);
                        this.WCa = Skb()
                    }
                };
                __c.ilb = {
                    [1]: "_1fjYug",
                    [0]: "_1fLCfA"
                };
                var jlb;
                jlb = class {
                    static j(a) {
                        __c.P(a, {
                            _state: Vkb.ref,
                            open: FY.bound,
                            close: FY.bound,
                            Yla: FY.bound
                        })
                    }
                    get state() {
                        return this._state
                    }
                    async open({
                        CX: a
                    }) {
                        if (3 !== this.state.status && 1 !== this.state.status) {
                            GY(() => this._state = {
                                status: 1
                            });
                            this.Ys.trace("Opening child window");
                            try {
                                var b = await Mkb({
                                    openWindow: this.openWindow,
                                    u7: this.u7,
                                    q4a: ({
                                        url: e
                                    }) => this.G.hM("Error loading resource in window portal store", {
                                        extra: new Map([
                                            ["url", e]
                                        ])
                                    })
                                })
                            } catch (e) {
                                throw GY(() => this._state = {
                                    status: 2
                                }), e;
                            }
                            var c = b.document.createElement("div");
                            c.id =
                                "root";
                            b.document.body.appendChild(c);
                            this.Ys.trace("Child window opened");
                            this.CX = a;
                            window.addEventListener("beforeunload", this.close);
                            this.Fj.push(() => window.removeEventListener("beforeunload", this.close));
                            b.addEventListener("beforeunload", this.Yla);
                            this.Fj.push(() => b.removeEventListener("beforeunload", this.Yla));
                            window.document.fonts && (window.document.fonts.addEventListener("loadingdone", this.qwa), this.Fj.push(() => window.document.fonts.removeEventListener("loadingdone", this.qwa)));
                            var d = Qkb(function({
                                children: e,
                                title: f
                            }) {
                                Pkb(b.document.documentElement);
                                b.document.title = null !== f && void 0 !== f ? f : "";
                                return CY(__c.SX.Provider, {
                                    value: b,
                                    children: CY(__c.ZG, {
                                        open: !0,
                                        hh: b.document.body,
                                        children: Ukb(CY(__c.Ajb, {
                                            NQa: !1,
                                            children: CY(__c.yjb, {
                                                children: e
                                            })
                                        }), c)
                                    })
                                })
                            });
                            GY(() => {
                                this._state = {
                                    pya: b,
                                    status: 3,
                                    KPa: d
                                }
                            })
                        }
                    }
                    close() {
                        3 === this._state.status && this._state.pya.close()
                    }
                    Yla() {
                        var a;
                        null === (a = this.CX) || void 0 === a ? void 0 : a.call(this);
                        this.CX = void 0;
                        this.Fj.forEach(b => b());
                        this.Fj = [];
                        this._state = {
                            status: 0
                        };
                        this.Ys.trace("Child window closed")
                    }
                    constructor(a,
                        b, c, d) {
                        jlb.j(this);
                        this.Ys = a;
                        this.openWindow = b;
                        this.u7 = c;
                        this.G = d;
                        this.Fj = [];
                        this.CX = void 0;
                        this.qwa = e => {
                            if (3 === this._state.status) {
                                const f = this._state.pya;
                                f && f.document.fonts && e.fontfaces.forEach(g => {
                                    f.document.fonts.has(g) || f.document.fonts.add(g)
                                })
                            }
                        };
                        this._state = {
                            status: 0
                        }
                    }
                };
                __c.dX = {
                    Cfb: {
                        Reb: 0,
                        Zeb: 1,
                        Jdb: 2,
                        OPENED: 3
                    }
                };
                __c.dX.Lba = jlb;
                __c.dX.cub = Pkb;
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/6514d680a99de08b.js.map