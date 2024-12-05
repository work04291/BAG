(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4143], {

        /***/
        684811: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(400681);
            __web_req__(621725);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var C = __c.C;
                var D = __c.D;
                var P = __c.P;
                var lDb = function(a, b = "medium") {
                        if (null !== a && void 0 !== a && a.length) {
                            var c = ("number" === typeof b ? b : __c.dZ[b]) * (window.devicePixelRatio || 1);
                            return [...a].sort((d, e) => {
                                d = d.width;
                                e = e.width;
                                return d > c && e < c ? -1 : d < c && e > c ? 1 : Math.abs(d - c) - Math.abs(e - c)
                            })[0].url
                        }
                    },
                    qDb = function(a, b) {
                        class c {
                            static j(d) {
                                P(d, {
                                    Le: G5,
                                    nca: G5
                                })
                            }
                            get Le() {
                                switch (this.nca) {
                                    case "date":
                                        return new mDb(this.Tx, b.language || "en-AU");
                                    case "select":
                                        return new nDb(this.Tx);
                                    case "mention":
                                        return new oDb(this.Tx);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new D(this.nca);
                                }
                            }
                            get nca() {
                                var d;
                                return null === (d = this.Tx.wB) || void 0 === d ? void 0 : d.type
                            }
                            constructor(d) {
                                c.j(this);
                                this.context = d;
                                this.Tx = C(a.OB(d.sheet, d.qa, d.col))
                            }
                        }
                        return pDb(d => (new c(d)).Le)
                    },
                    sDb = function() {
                        const a = H5(() => new Map, []);
                        return {
                            IYa: b => {
                                if (a.has(b)) return C(a.get(b));
                                const c = rDb();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    tDb = function(a, b) {
                        return H5(() => {
                            const c = new Map;
                            return d => {
                                if (c.has(d)) return C(c.get(d));
                                const e = a(d);
                                c.set(d, e);
                                return e
                            }
                        }, b)
                    },
                    ADb = function({
                        children: a,
                        keyFrame: b,
                        MJa: c,
                        ariaLive: d,
                        eCa: e = !1,
                        GQa: f,
                        Fea: g,
                        KVa: h,
                        Fkb: k,
                        bwa: l,
                        Mxa: m,
                        Dkb: n,
                        U$a: p
                    }) {
                        const {
                            IYa: q
                        } = sDb(), {
                            SXa: r,
                            R6a: t
                        } = uDb(b, a), u = tDb(w => () => {
                            (!1 === e || "function" === typeof e && !e(w)) && t(w)
                        }, [t, e]);
                        return I5("div", {
                            className: J5(g, "epgNPA", {
                                NvaaRg: "hidden" === l,
                                DiwaPA: "fill-height" === c,
                                _3pVd7A: "flex-grow" === c
                            }),
                            children: I5("div", {
                                className: J5("KhPLRA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: w,
                                    element: x
                                }) => I5(vDb, { in: w === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(w),
                                    onExited: u(w),
                                    children: y => I5(wDb.Provider, {
                                        value: y,
                                        children: I5("div", {
                                            className: J5("T3uz5Q", n, {
                                                NvaaRg: "hidden" === m
                                            }),
                                            ref: q(w),
                                            "aria-hidden": y === xDb || y === yDb || y === zDb,
                                            children: w === b ? a : x
                                        })
                                    })
                                }, w)), r.every(w => w.key !== b) && I5(vDb, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : u(b),
                                    children: w => I5(wDb.Provider, {
                                        value: w,
                                        children: I5("div", {
                                            className: J5("T3uz5Q", n),
                                            ref: q(b),
                                            "aria-hidden": w === xDb || w === yDb || w === zDb,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    uDb = function(a, b) {
                        const [c,
                            d
                        ] = BDb(() => [{
                            key: a,
                            element: b
                        }]);
                        CDb(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = DDb(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            SXa: c,
                            R6a: e
                        }
                    },
                    EDb = function(a) {
                        switch (a.type) {
                            case "mention":
                                return "bCAtqw";
                            case "embed":
                                return "BTcT3w";
                            case "date":
                                return "McKQgg";
                            case "select":
                                return "V2E5nQ";
                            default:
                                throw new D(a);
                        }
                    },
                    GDb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return I5(FDb, {
                                    selected: !!b.OHa
                                });
                            default:
                                throw new D(a);
                        }
                    },
                    HDb = function(a) {
                        __c.v(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    IDb = function(a, b, c) {
                        if (c) {
                            var d = lDb(c.images, "medium"),
                                e = lDb(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = K5(() => a.h_.set(b, e));
                                f.onerror = K5(() => a.h_.set(b, void 0));
                                !f.complete && c.complete ? a.h_.set(b, d) : c.src = ""
                            }
                        } else a.h_.set(b, void 0)
                    },
                    ODb = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.Gg ? a.Gg.cnb(new JDb({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.qf.content.title;
                                        h ? (L5(() => a.SKa.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        L5(() => a.SKa.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    PDb = __c.M(() => ({
                        hob: __c.VO(11),
                        mode: __c.G("A?", 1, "BY_USER_IDS"),
                        zab: __c.UO(1)
                    })),
                    JDb = __c.M(() => ({
                        id: __c.TO("id", 1),
                        extension: __c.V("extension", 3),
                        C7a: __c.PO("revision", 5),
                        version: __c.PO("version", 2),
                        Qnb: __c.PO("imagesetsLimit",
                            6)
                    })),
                    QDb = __webpack_require__(443763),
                    I5 = QDb.jsx,
                    RDb = QDb.jsxs;
                var M5 = __webpack_require__(736241).Pi;
                var N5 = __webpack_require__(875604),
                    SDb = N5.createContext,
                    rDb = N5.createRef,
                    O5 = N5.memo,
                    DDb = N5.useCallback,
                    CDb = N5.useEffect,
                    TDb = N5.useLayoutEffect,
                    H5 = N5.useMemo,
                    BDb = N5.useState;
                var P5 = __webpack_require__(42782),
                    K5 = P5.aD,
                    UDb = P5.p6,
                    G5 = P5.Fl,
                    VDb = P5.LO,
                    Q5 = P5.vP,
                    L5 = P5.z;
                var pDb = __webpack_require__(649799).Om;
                var WDb = __webpack_require__,
                    XDb = WDb(993864),
                    J5 = WDb.n_x(XDb)();
                var vDb = __webpack_require__(489212).Z;
                var R5 = __webpack_require__(92009),
                    zDb = R5.Wj,
                    xDb = R5.Ix,
                    yDb = R5.$r;
                var YDb = class {
                        static j(a) {
                            P(a, {
                                text: G5,
                                user: G5,
                                brand: G5
                            })
                        }
                        get text() {
                            return this.Le.text
                        }
                        get user() {
                            return this.Le.user
                        }
                        get brand() {
                            return this.Le.brand
                        }
                        constructor(a) {
                            YDb.j(this);
                            this.Le = a;
                            this.type = "mention"
                        }
                    },
                    ZDb = class {
                        static j(a) {
                            P(a, {
                                text: G5,
                                url: G5
                            })
                        }
                        get text() {
                            return this.Le.text
                        }
                        get url() {
                            return this.Le.url
                        }
                        constructor(a) {
                            ZDb.j(this);
                            this.Le = a;
                            this.type = "embed"
                        }
                    },
                    $Db = class {
                        static j(a) {
                            P(a, {
                                text: G5,
                                language: G5,
                                style: G5,
                                date: G5
                            })
                        }
                        get text() {
                            return this.Le.text
                        }
                        get language() {
                            return this.Le.language
                        }
                        get style() {
                            return this.Le.style
                        }
                        get date() {
                            return this.Le.date
                        }
                        constructor(a) {
                            $Db.j(this);
                            this.Le = a;
                            this.type = "date"
                        }
                    },
                    aEb = class {
                        static j(a) {
                            P(a, {
                                text: G5,
                                options: G5,
                                Qe: G5,
                                yN: G5
                            })
                        }
                        get text() {
                            return this.Le.text
                        }
                        get options() {
                            return this.Le.options.map(a => a)
                        }
                        get Qe() {
                            return this.Le.Qe
                        }
                        get yN() {
                            var a;
                            return null === (a = this.Le.options.first(b => b.id === this.Le.Qe)) || void 0 === a ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            aEb.j(this);
                            this.Le = a;
                            this.type = "select"
                        }
                    },
                    bEb = pDb(a => {
                        switch (a.type) {
                            case "mention":
                                return new YDb(a);
                            case "embed":
                                return new ZDb(a);
                            case "date":
                                return new $Db(a);
                            case "select":
                                return new aEb(a);
                            default:
                                throw new D(a);
                        }
                    });
                var mDb = class {
                        static j(a) {
                            P(a, {
                                style: G5,
                                date: G5,
                                text: G5
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = 2 === this.vx.TI.type ? this.vx.TI.date : void 0) || (a = new Date, a = __c.sD(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                CZa: a.getHours(),
                                s2a: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.vx.Mx
                        }
                        constructor(a, b) {
                            mDb.j(this);
                            this.vx = a;
                            this.language = b;
                            this.type = "date"
                        }
                    },
                    cEb = class {
                        get label() {
                            return this.option.label
                        }
                        get fill() {
                            return this.option.fill
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.id = b
                        }
                    },
                    nDb = class {
                        static j(a) {
                            P(a, {
                                options: G5,
                                Qe: G5,
                                yN: G5,
                                text: G5,
                                fza: G5({
                                    equals: UDb.shallow
                                })
                            })
                        }
                        get options() {
                            return this.fza.map((a, b) => new cEb(a, b))
                        }
                        get Qe() {
                            var a;
                            return null === (a = this.options.find(b => b.label === this.text)) || void 0 === a ? void 0 : a.id
                        }
                        get yN() {
                            var a;
                            return null === (a = this.options.find(b => b.id === this.Qe)) || void 0 === a ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.vx.Mx
                        }
                        get fza() {
                            var a, b;
                            __c.A("select" === (null === (a = this.vx.wB) || void 0 === a ? void 0 : a.type));
                            return null === (b = this.vx.wB) || void 0 === b ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            nDb.j(this);
                            this.vx = a;
                            this.type = "select"
                        }
                    },
                    oDb = class {
                        static j(a) {
                            P(a, {
                                text: G5,
                                user: G5,
                                brand: G5,
                                Yga: G5
                            })
                        }
                        get text() {
                            return this.vx.Mx
                        }
                        get user() {
                            return this.Yga.user
                        }
                        get brand() {
                            return this.Yga.brand
                        }
                        get Yga() {
                            var a;
                            __c.A("mention" === (null === (a = this.vx.Kf) || void 0 === a ? void 0 : a.type));
                            return C(this.vx.Kf.value.first())
                        }
                        constructor(a) {
                            oDb.j(this);
                            this.vx = a;
                            this.type = "mention"
                        }
                    };
                var dEb = class {
                    Qga(a) {
                        this.$ca.Qga(a)
                    }
                    UY(a, b) {
                        this.$ca.UY(a, b)
                    }
                    nV(a) {
                        return this.$ca.nV(a)
                    }
                    Nga(a) {
                        this.Pxa.Nga(a)
                    }
                    constructor(a, b, c) {
                        this.$ca = a;
                        this.Pxa = b;
                        this.$E = c;
                        this.Rqa = new __c.Scb;
                        this.gYa = d => __c.yya(this.Rqa, d)
                    }
                };
                var wDb = SDb(void 0);
                var eEb = Number.parseInt("300ms", 10),
                    fEb = {
                        enter: "gWeP3g",
                        enterActive: "YL_ApQ",
                        enterDone: void 0,
                        exitActive: "qqCHKg",
                        exitDone: "gum40Q"
                    },
                    gEb = O5(function({
                        MI: a = !1,
                        children: b,
                        keyFrame: c,
                        MJa: d,
                        bwa: e = "hidden",
                        Mxa: f = "hidden",
                        ariaLive: g,
                        eCa: h,
                        Fnb: k = "none"
                    }) {
                        a = __c.sb() && !a;
                        return ADb({
                            children: b,
                            keyFrame: c,
                            MJa: d,
                            ariaLive: g,
                            bwa: e,
                            Mxa: f,
                            eCa: h,
                            GQa: a ? eEb : 0,
                            KVa: J5({
                                _4C1vIA: a,
                                pOll6Q: "none" === k,
                                g1T5pQ: "layout" === k
                            }),
                            U$a: fEb
                        })
                    });
                var hEb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var iEb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var jEb = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var kEb = O5(a => {
                        const b = a.className,
                            c = a.ariaLabel,
                            d = a.yN,
                            e = a.aPa,
                            f = a.APa,
                            g = a.measureRef,
                            h = a.onPointerDown,
                            k = J5({
                                EdewNw: !!e,
                                _6ZpPrw: !!f,
                                pzXyUA: 0 < a.text.length
                            });
                        a = 0 < a.text.length ? a.text : "\ufeff";
                        return RDb("span", {
                            className: J5(b, "FedJ0Q"),
                            "aria-label": c || a,
                            children: [I5("span", {
                                className: J5("_2Lr6pQ", k),
                                children: I5("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), RDb("span", {
                                className: J5("XemTdQ", k),
                                ref: g,
                                style: d ? {
                                    color: d
                                } : void 0,
                                onPointerDown: h,
                                children: [e, I5("span", {
                                    className: "U_QH_A",
                                    children: a
                                }), f]
                            })]
                        })
                    }),
                    lEb = O5(a => {
                        const b = a.backgroundColor,
                            c = a.pp;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return I5(gEb, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? I5(__c.Slb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                pp: c,
                                borderColor: c ? void 0 : b
                            }) : I5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: jEb
                                }
                            })
                        })
                    }),
                    mEb = O5(a => {
                        a = a.icon;
                        return I5(gEb, {
                            keyFrame: a ? "favicon" : "placeholder",
                            children: a ? I5("span", {
                                className: "_tFJqA",
                                children: I5("img", {
                                    src: a,
                                    className: "qpbYdw"
                                })
                            }) : I5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: iEb
                                }
                            })
                        })
                    }),
                    nEb = O5(() => I5("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: hEb
                        }
                    })),
                    FDb = O5(({
                        selected: a
                    }) => I5("div", {
                        className: J5("whph4A", {
                            zgzjww: a
                        }),
                        children: I5(__c.QN, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    oEb = M5(a => {
                        const b = a.Le,
                            c = a.OHa,
                            d = a.Hma,
                            e = a.measureRef,
                            f = a.Wt;
                        a = a.onPointerDown;
                        const g = b.text || "\u00a0".repeat(16);
                        CDb(() => {
                            L5(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.Qga(b.user);
                                        break;
                                    case "embed":
                                        d.Nga(b.url)
                                }
                            })
                        }, [b, d]);
                        TDb(() => {
                            null === f || void 0 === f ? void 0 : f()
                        }, [b.type, g, f]);
                        var h = b.text || "",
                            k = EDb(b),
                            l = b.yN;
                        a: {
                            switch (b.type) {
                                case "mention":
                                    var m = I5(lEb, {
                                        pp: d.nV(b.user),
                                        text: b.text,
                                        backgroundColor: d.gYa(b.user).background
                                    });
                                    break a;
                                case "embed":
                                    m = I5(mEb, {
                                        icon: d.Pxa.KU.get(b.url)
                                    });
                                    break a;
                                case "date":
                                    m = b.text ? void 0 : I5(nEb, {});
                                    break a;
                                case "select":
                                    break;
                                default:
                                    throw new D(b);
                            }
                            m = void 0
                        }
                        return I5(kEb, {
                            text: g,
                            ariaLabel: h,
                            className: k,
                            yN: l,
                            aPa: m,
                            APa: GDb(b, {
                                OHa: c
                            }),
                            measureRef: e,
                            onPointerDown: a
                        })
                    });
                var pEb = class {
                        static j(a) {
                            P(a, {
                                aM: VDb.shallow,
                                vya: K5
                            })
                        }
                        nV(a) {
                            return this.uua.nV(a)
                        }
                        Qga(a) {
                            this.Qqa.has(a) || this.aM.has(a) || (this.aM.add(a), this.xUa())
                        }
                        UY(a, b) {
                            this.Qqa.has(a) || (this.Qqa.set(a, b), this.aM.delete(a), IDb(this.uua, a, b))
                        }
                        async vya() {
                            if (0 !== this.aM.size) {
                                var a = [...this.aM.values()];
                                this.aM.clear();
                                if (this.wua) {
                                    var b = await this.wua;
                                    await Promise.all(HDb(a).map(async c => {
                                        const d = new PDb({
                                                zab: c
                                            }),
                                            {
                                                Zhb: e
                                            } = await b.Gmb(d);
                                        L5(() => c.forEach(f => this.UY(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.UY(c))
                            }
                        }
                        constructor(a,
                            b) {
                            pEb.j(this);
                            this.wua = a;
                            this.Qqa = new Q5;
                            this.aM = new Set;
                            this.uua = new qEb;
                            this.xUa = __c.Rc(() => this.vya(), 200);
                            L5(() => {
                                null === b || void 0 === b ? void 0 : b.forEach((c, d) => this.UY(d, c))
                            })
                        }
                    },
                    qEb = class {
                        nV(a) {
                            return this.h_.get(a)
                        }
                        constructor() {
                            this.h_ = new Q5
                        }
                    };
                var rEb = class {
                    static j(a) {
                        P(a, {
                            hXa: K5
                        })
                    }
                    async hXa(a) {
                        if (this.Gg) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                null == c || 2 > c.length ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await ODb(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        rEb.j(this);
                        this.Gg = a;
                        this.SKa = new Q5;
                        this.promises = new Map
                    }
                };
                var sEb = class {
                    static j(a) {
                        P(a, {
                            KU: VDb.shallow
                        })
                    }
                    async Nga(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await (null === (d = this.$E) || void 0 === d ? void 0 : d.l0(a));
                            c = null === e || void 0 === e ? void 0 : e.gXa
                        } catch (e) {}
                        c ? (b.src = c, b.onload = K5(() => this.KU.set(a, c)), b.onerror = K5(() => this.KU.set(a, void 0))) : this.KU.set(a, void 0)
                    }
                    constructor(a) {
                        sEb.j(this);
                        this.$E = a;
                        this.KU = new Map
                    }
                };
                __c.Pva = {
                    s_a: function(a) {
                        const b = a.document,
                            c = a.Gg,
                            d = a.$E;
                        var e = a.vua;
                        const f = a.Jc,
                            g = a.Tw,
                            h = a.q_;
                        a = a.bob;
                        e = new pEb(null === a || void 0 === a ? void 0 : a(), e);
                        a = new sEb(d);
                        new rEb(c);
                        const k = new dEb(e, a, d),
                            l = qDb(h, b);
                        f.xo.Dba = M5(({
                            item: n,
                            measureRef: p
                        }) => {
                            const q = H5(() => bEb(n.Le), [n.Le]);
                            return I5(oEb, {
                                Le: q,
                                Hma: k,
                                measureRef: p
                            })
                        });
                        const m = M5(({
                            context: n,
                            Wt: p
                        }) => {
                            const q = H5(() => C(l(n)), [n]);
                            return I5(oEb, {
                                Le: q,
                                Hma: k,
                                Wt: p
                            })
                        });
                        g.Usa = ({
                            context: n,
                            Wt: p
                        }) => ({
                            type: "react",
                            node: I5(m, {
                                context: n,
                                Wt: p
                            })
                        });
                        return {
                            Hma: k
                        }
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/7e1669d0e55e920e.js.map