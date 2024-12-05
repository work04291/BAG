(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [9222], {

        /***/
        247026: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(223140);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var D = __c.D;
                var A = __c.A;
                var ZFb = function(a, b, c, d) {
                        c = new YFb(c, d);
                        A(1 === a.count(), "Only single widget root element is supported");
                        a = a.first();
                        A(null != a && "layout" === a.type, `Unexpected widget root found: ${null===a||void 0===a?void 0:a.type}`);
                        c.raa(a, b)
                    },
                    aGb = function(a) {
                        return { ...__c.Av,
                            ...I6,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.paa.width,
                                height: a.paa.height
                            },
                            eb: a.eb.map($Fb)
                        }
                    },
                    bGb = function(a) {
                        switch (a.yD) {
                            case 0:
                                var b = __c.Oj.Sc().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? 1E3 * a.lineHeight : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.yh("color", a.color);
                                b = b.mc(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.kN,
                                    ...J6,
                                    ...I6,
                                    Ga: null !== (c = a.Ga) && void 0 !== c ? c : 0,
                                    text: b,
                                    zg: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.kN,
                                    ...J6,
                                    ...I6,
                                    text: b,
                                    zg: 2
                                };
                            default:
                                throw new D(a);
                        }
                    },
                    N6 = function({
                        content: a,
                        fill: b,
                        border: c,
                        P: d
                    }) {
                        b = { ...__c.R0a,
                            fill: K6(b),
                            border: L6(c),
                            P: M6(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: aGb(a)
                                };
                            case "text":
                                return { ...b,
                                    element: bGb(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: cGb(a)
                                };
                            default:
                                throw new D(a);
                        }
                    },
                    cGb = function({
                        cells: a,
                        border: b,
                        fill: c,
                        P: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.S0a,
                            ...J6,
                            ...I6,
                            F: J6.width,
                            N: J6.height,
                            fill: K6(c),
                            border: L6(b),
                            direction: 1,
                            P: M6(d),
                            cells: new Map(a.map(k => [k.id, N6(k)])),
                            behavior: {
                                rules: [{
                                    Wf: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: null !== g && void 0 !== g ? g : 0,
                                        rowGap: null !== h && void 0 !== h ? h : 0,
                                        jg: dGb(a)
                                    }
                                }]
                            },
                            kf: void 0
                        }
                    },
                    dGb = function(a) {
                        return new Map(a.map(b => [b.id, eGb(b)]))
                    },
                    eGb = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.dsa,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.FS,
                                ...(null != b ? "number" === typeof b ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    L6 = function(a) {
                        var b;
                        const c = null !== (b = null === a || void 0 === a ? void 0 : a.color) && void 0 !== b ? b : "#000000";
                        var d;
                        return { ...__c.KG,
                            all: a ? { ...__c.GS,
                                weight: null !== (d = a.weight) &&
                                    void 0 !== d ? d : 1,
                                color: c,
                                Ve: !0
                            } : void 0
                        }
                    },
                    M6 = function(a) {
                        return { ...__c.ES,
                            ...(null != a ? "number" === typeof a ? {
                                all: a
                            } : a : {})
                        }
                    },
                    $Fb = function(a) {
                        return { ...__c.Bv,
                            ...a,
                            fill: K6(a.fill),
                            stroke: fGb(a.stroke)
                        }
                    },
                    fGb = function(a) {
                        return a ? { ...__c.GS,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    K6 = function(a) {
                        var b;
                        const c = { ...__c.Dv,
                            Ga: null !== (b = null === a || void 0 === a ? void 0 : a.Ga) && void 0 !== b ? b : 0
                        };
                        switch (null === a || void 0 === a ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    cb: a.cb
                                };
                            case void 0:
                                return c;
                            default:
                                throw new D(a);
                        }
                    },
                    lGb = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        gGb(a.cells, c, (e, f) => {
                            let g = !1;
                            hGb(e.element, f.content, () => {
                                a.cells.delete(f.id);
                                a.cells.set(f.id, N6(f));
                                g = !0
                            });
                            g || (O6(e.fill, f.fill), iGb(e.border, f.border), jGb(e.P, f.P))
                        }, e => N6(e));
                        kGb(a.behavior, b, c);
                        O6(a.fill, b.fill);
                        jGb(a.P, b.P);
                        iGb(a.border, b.border);
                        var d;
                        a.Ga = null !== (d = b.Ga) && void 0 !== d ? d : 0
                    },
                    kGb = function(a, b, c) {
                        P6(a.rules, [b], d => {
                            mGb(d.grid.gridTemplateColumns, b.gridTemplateColumns) || (d.grid.gridTemplateColumns =
                                b.gridTemplateColumns);
                            mGb(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = null !== (e = b.columnGap) && void 0 !== e ? e : 0;
                            var f;
                            d.grid.rowGap = null !== (f = b.rowGap) && void 0 !== f ? f : 0;
                            gGb(d.grid.jg, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd = n;
                                "number" === typeof k &&
                                    g.padding.all !== k ? g.padding.all = k : "number" !== typeof k && (g.padding.ua = null === k || void 0 === k ? void 0 : k.ua, g.padding.Da = null === k || void 0 === k ? void 0 : k.Da, g.padding.ra = null === k || void 0 === k ? void 0 : k.ra, g.padding.Ja = null === k || void 0 === k ? void 0 : k.Ja);
                                g.alignSelf = p
                            }, g => eGb(g))
                        }, d => {
                            var e, f;
                            return {
                                Wf: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: null !== (e = b.columnGap) && void 0 !== e ? e : 0,
                                    rowGap: null !== (f = b.rowGap) && void 0 !== f ? f : 0,
                                    jg: dGb(d.cells)
                                }
                            }
                        })
                    },
                    nGb = function(a,
                        b) {
                        P6(a.eb, b.eb, (e, f) => {
                            e.d = f.d;
                            O6(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref, f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(fGb(f.stroke))
                        }, e => $Fb(e));
                        const {
                            viewBox: c,
                            width: d
                        } = aGb(b);
                        a.width = d;
                        __c.Ft(a.viewBox).equals(__c.Ft(c)) || (a.viewBox = c)
                    },
                    hGb = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                "shape" === a.type ? nGb(a, b) : c();
                                break;
                            case "text":
                                "text" === a.type && __c.Oj.domain.Mb(__c.Oj.xa(a.text), bGb(b).text) || c();
                                break;
                            case "layout":
                                "layout" === a.type ? lGb(a, b) : c();
                                break;
                            default:
                                throw new D(b);
                        }
                    },
                    gGb = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    P6 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    O6 = function(a, b) {
                        switch (null === b || void 0 === b ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.cb.set(void 0);
                                var c;
                                a.Ga = null !==
                                    (c = b.Ga) && void 0 !== c ? c : 0;
                                break;
                            case "gradient":
                                if (a.cb.ref && __c.XRa.domain.Mb(a.cb.ref, b.cb)) break;
                                a.color = void 0;
                                a.cb.set(b.cb);
                                var d;
                                a.Ga = null !== (d = b.Ga) && void 0 !== d ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.cb.set(void 0)
                        }
                    },
                    jGb = function(a, b) {
                        b = M6(b);
                        a.all = b.all;
                        a.aB = b.aB;
                        a.ZA = b.ZA;
                        a.$A = b.$A;
                        a.YA = b.YA
                    },
                    iGb = function(a, b) {
                        b = L6(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.LG.domain.Mb(__c.LG.xa(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    mGb = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    pGb = function(a,
                        b, c, d) {
                        let e = a.xHa.get(b);
                        if (e) return e;
                        e = {
                            pB: new oGb(c.Pw, b, d, c.Gia),
                            cua: void 0,
                            TCa: void 0,
                            LDa: __c.MW.mode
                        };
                        a.xHa.set(b, e);
                        return e
                    },
                    rGb = function(a, b, c, d, e) {
                        var f, g;
                        e = pGb(a, c, b, e);
                        const h = e.pB,
                            k = e.TCa,
                            l = e.cua,
                            m = e.LDa;
                        c = __c.UR.xa(c);
                        const n = (null === (f = (g = a.Ax).Qza) || void 0 === f ? void 0 : f.call(g, d)) || __c.MW;
                        h.Mj === k && qGb.structural(c, l) && n.mode === m || (e.cua = c, e.TCa = h.Mj, e.LDa = n.mode, b = b.render(h, n), a.w2a.update(d, b), ZFb(d, b, (p, q) => a.cM.Tia.set(p, q), (p, q, r) => a.cM.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    tGb = function(a,
                        b) {
                        return {
                            NN: ({
                                Ik: c
                            }) => {
                                var d;
                                const {
                                    pB: e
                                } = pGb(a.renderer, c, b, a.VW), f = __c.WR.create([]), g = [];
                                g.push(sGb(() => {
                                    var k, l;
                                    return [null === (k = (l = a.Ax).Qza) || void 0 === k ? void 0 : k.call(l, f), __c.UR.xa(c), e.Mj]
                                }, () => {
                                    rGb(a.renderer, b, c, f, a.VW)
                                }, {
                                    fireImmediately: !0,
                                    equals: qGb.structural
                                }));
                                const h = null === (d = b.nX) || void 0 === d ? void 0 : d.call(b, {
                                    pB: e
                                });
                                h && g.push(h);
                                return {
                                    bb: f,
                                    Rr: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    vGb = function(a, b) {
                        let c = a.s0.get(b);
                        c || (c = uGb("weakKey"), a.s0.set(b, c));
                        c.reportObserved()
                    },
                    Q6 = __webpack_require__(42782),
                    qGb = Q6.p6,
                    wGb = Q6.Fl,
                    uGb = Q6.cp,
                    R6 = Q6.LO,
                    sGb = Q6.U5;
                var xGb = class {
                    static j(a) {
                        __c.P(a, {
                            O4a: R6.ref,
                            nX: R6.ref
                        })
                    }
                    constructor() {
                        xGb.j(this)
                    }
                };
                var yGb = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    oGb = class {
                        static j(a) {
                            __c.P(a, {
                                nh: wGb
                            })
                        }
                        get UCa() {
                            var a = this.VW,
                                b = this.Ik,
                                c = this.Gia;
                            let d = a.sources.get(b);
                            d || (d = R6.box(c), a.sources.set(b, d));
                            return d
                        }
                        get Mj() {
                            return this.UCa.get()
                        }
                        get nh() {
                            return this.Pw.xs({
                                type: "dict",
                                value: this.Ik
                            })
                        }
                        wp(a) {
                            this.UCa.set(a instanceof Function ? { ...this.Mj,
                                ...a()
                            } : { ...this.Mj,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            oGb.j(this);
                            this.Pw = a;
                            this.Ik = b;
                            this.VW = c;
                            this.Gia = d
                        }
                    };
                var YFb = class {
                    v_(a, b) {
                        this.pHa(a, b);
                        b.ref && this.Ana(a, b.ref, b.key)
                    }
                    taa(a, b) {
                        b.ref && this.Ana(a.text, b.ref, b.key)
                    }
                    rra(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                A("shape" === a.element.type);
                                this.v_(a.element, b.content);
                                break;
                            case "text":
                                A("text" === a.element.type);
                                this.taa(a.element, b.content);
                                break;
                            case "layout":
                                A("layout" === a.element.type);
                                this.raa(a.element, b.content);
                                break;
                            default:
                                throw new D(b.content);
                        }
                    }
                    raa(a, b) {
                        this.pHa(a, b);
                        b.ref && this.Ana(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), A(!!d && !!a), this.rra(d, a)
                    }
                    constructor(a, b) {
                        this.pHa = a;
                        this.Ana = b
                    }
                };
                var I6 = {
                        locked: !0,
                        Kp: {
                            Iea: !1,
                            m$: !1
                        },
                        Gi: !0
                    },
                    J6 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var zGb = class {
                    constructor(a) {
                        this.Dm = a;
                        this.update = (b, c) => {
                            P6(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        lGb(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...cGb(d),
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            F: d.minWidth,
                                            N: d.minHeight,
                                            locked: !1,
                                            Gi: !1,
                                            Kp: void 0
                                        };
                                        break a;
                                    default:
                                        throw new D(d.type);
                                }
                                return d
                            });
                            for (const d of b) A("layout" === d.type), d.width = c.minWidth, d.height = c.minHeight, d.F = c.minWidth, d.N = c.minHeight, c.direction && (d.direction =
                                c.direction), this.Dm.yna(d)
                        }
                    }
                };
                var AGb = class {
                    constructor(a, b, c) {
                        this.w2a = a;
                        this.cM = b;
                        this.Ax = c;
                        this.xHa = new WeakMap
                    }
                };
                var BGb = !1,
                    CGb = class {
                        register(a, b) {
                            this.hB.has(a) || (this.hB.set(a, b), BGb || (__c.VR.set(a, tGb(this, b)), BGb = !0))
                        }
                        get(a) {
                            return this.hB.get(a)
                        }
                        constructor(a, b, c) {
                            this.renderer = a;
                            this.VW = b;
                            this.Ax = c;
                            this.hB = new Map
                        }
                    };
                var DGb = class {
                    delete(a) {
                        var b;
                        const c = this.map.delete(a);
                        c && (null === (b = this.s0.get(a)) || void 0 === b ? void 0 : b.reportChanged());
                        return c
                    }
                    get(a) {
                        vGb(this, a);
                        return this.map.get(a)
                    }
                    has(a) {
                        vGb(this, a);
                        return this.map.has(a)
                    }
                    set(a, b) {
                        if (!this.map.has(a) || this.map.get(a) !== b) {
                            var c;
                            this.map.set(a, b);
                            null === (c = this.s0.get(a)) || void 0 === c ? void 0 : c.reportChanged()
                        }
                        return this
                    }
                    constructor() {
                        this.s0 = new WeakMap;
                        this.map = new WeakMap
                    }
                };
                var EGb = class {
                        constructor() {
                            this.Tia = new DGb;
                            this.refs = new DGb
                        }
                    },
                    FGb = class {
                        getContext(a) {
                            return this.cM.refs.get(a)
                        }
                        oJ(a) {
                            return this.cM.Tia.get(a)
                        }
                        constructor(a, b, c) {
                            this.cM = a;
                            this.VW = b;
                            this.renderer = c
                        }
                    };
                __c.sFa = {
                    y_a: function(a) {
                        const b = new xGb;
                        switch (a.Zc) {
                            case "fixed":
                                const c = new EGb;
                                a = new AGb(new zGb(a.Dm), c, b);
                                const d = new yGb;
                                return {
                                    Ax: b,
                                    Jub: new FGb(c, d, a),
                                    hbb: new CGb(a, d, b),
                                    cM: c
                                };
                            case "responsive":
                                throw Error("Not implemented");
                            default:
                                throw new D(a);
                        }
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/b56ad8d0c6d1a21e.js.map