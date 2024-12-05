(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [5024], {

        /***/
        222055: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var xc = __c.xc;
                var Lc = __c.Lc;
                var P = __c.P;
                var oK = __c.oK;
                var Tg = __c.Tg;
                var C = __c.C;
                var ig = __c.ig;
                var D = __c.D;
                var O = __c.O;
                var yy = __c.yy;
                var S5 = function() {
                        const [a] = (0, __c.dc)(() => yy());
                        return a
                    },
                    tEb = function(a) {
                        switch (a) {
                            case 4:
                                return O("9ND0kg");
                            case 2:
                                return O("ibdecg");
                            case 7:
                                return O("446quA");
                            case 5:
                                return O("j1fbqg");
                            case 1:
                                return O("O5i4AQ");
                            case 6:
                                return O("C0VHsg");
                            case 3:
                                return O("+IXmVg");
                            default:
                                throw new D(a);
                        }
                    },
                    uEb = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.N)(a, { ...b
                            })
                        })
                    },
                    vEb = function(a) {
                        return b => ({
                            type: "dom",
                            render: c => a(b, c)
                        })
                    },
                    xEb = function(a) {
                        var b, c = a.Tw,
                            d = a.content;
                        a = a.context;
                        __c.A("formula" === (null === d ||
                            void 0 === d ? void 0 : null === (b = d.Kf) || void 0 === b ? void 0 : b.type));
                        b = d.Kf.value;
                        switch (b.type) {
                            case "invalid":
                                b = b.r8;
                                break;
                            case "canonical":
                                b = b.fI;
                                break;
                            default:
                                throw new D(b);
                        }
                        __c.A(b.startsWith("="));
                        const e = d.TI;
                        b = {
                            type: "dom",
                            render: h => h.innerText = ""
                        };
                        let f;
                        switch (e.type) {
                            case 7:
                                f = b;
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 5:
                            case 6:
                                f = wEb(c, a, d.Mx);
                                break;
                            case 0:
                                f = {
                                    type: "react",
                                    node: T5(__c.jT, {
                                        label: tEb(e.error),
                                        children: T5(__c.ON, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: T5(__c.Cib, {
                                                tone: "critical"
                                            })
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new D(e);
                        }
                        if (!f) return b;
                        c = ig(__c.IR, a.attrs);
                        d = __c.jK(a.attrs.textAlign, "formula", void 0, () => e.type);
                        const g = {
                            textAlign: __c.Kza(d, c.direction),
                            justifyContent: __c.Lza(d)
                        };
                        switch (f.type) {
                            case "dom":
                                return {
                                    type: "dom",
                                    render: h => {
                                        Object.assign(h.style, g);
                                        f.render(h)
                                    }
                                };
                            case "react":
                                return {
                                    type: "react",
                                    node: T5("div", {
                                        style: g,
                                        children: f.node
                                    })
                                };
                            default:
                                throw new D(f);
                        }
                    },
                    wEb = function(a, b, c) {
                        var d;
                        return null === (d = a.Eba) || void 0 === d ? void 0 : d.call(a, {
                            context: b,
                            value: c
                        })
                    },
                    BEb = function(a) {
                        const b = a.Tw,
                            c = a.Ge;
                        a = a.V9a;
                        b.Eba = yEb;
                        b.Ssa = d => xEb({ ...d,
                            Tw: b
                        });
                        b.Tsa = uEb(zEb({
                            Ge: c,
                            rM: void 0
                        }));
                        b.Vsa = AEb(a);
                        b.Wsa = uEb(U5)
                    },
                    CEb = function(a, b, c) {
                        const d = [a];
                        for (; null != a && a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    DEb = function({
                        label: a,
                        width: b,
                        height: c,
                        scale: d,
                        highlight: e,
                        selected: f
                    }) {
                        return T5("div", {
                            style: {
                                width: b,
                                height: c,
                                transform: `scale(${d})`
                            },
                            className: "bx74uQ",
                            children: T5(__c.Yz, {
                                className: V5({
                                    yiml1g: e,
                                    oYlhXA: f
                                }),
                                size: "small",
                                alignment: "center",
                                children: a
                            })
                        })
                    },
                    FEb = function({
                        ld: a,
                        highlight: b,
                        scale: c,
                        Kv: d,
                        rn: e,
                        $Ma: f
                    }) {
                        const g = W5(() => {
                                const m = null === d || void 0 === d ? void 0 : d.get();
                                if (null != m && 0 !== m.length) return new __c.VG(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return T5(__c.Zz, {
                            Fo: "light",
                            light: "light",
                            Xq: "light",
                            dark: "light",
                            children: m => T5("div", {
                                className: V5("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: T5("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: V5("N7J3UA", l),
                                    ref: null === g || void 0 === g ? void 0 : g.fg,
                                    children: T5(__c.PN, {
                                        className: V5("m8CFdg",
                                            l, {
                                                G6wL4w: f,
                                                W_E0wA: b
                                            }),
                                        ariaLabel: O("ruWN9A"),
                                        children: T5(EEb, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    HEb = function() {
                        const a = new GEb,
                            b = new __c.MU,
                            c = X5(f => {
                                const {
                                    scale: g = 1,
                                    size: h = "small",
                                    $Ma: k = !0
                                } = f, l = Y5(m => a.rn(m, h), [h]);
                                return T5(FEb, { ...f,
                                    scale: g,
                                    ld: "rtl" === f.sheet.direction,
                                    highlight: null != f.selection && a.n0a(f.sheet, f.selection),
                                    rn: l,
                                    $Ma: k
                                })
                            }),
                            d = X5(f => {
                                const {
                                    scale: g = 1,
                                    size: h = "small"
                                } = f, k = Y5(n => a.rn(n, h), [h]), l = Y5(n => null != f.selection && a.rIa(f.selection).has(n), [f.selection]), m = Y5(n => null != f.selection && a.wZa(f.sheet,
                                    f.selection).has(n), [f.sheet, f.selection]);
                                return T5(Z5, { ...f,
                                    scale: g,
                                    rn: k,
                                    vBa: l,
                                    lJa: m,
                                    HC: b
                                })
                            }),
                            e = X5(f => {
                                const {
                                    scale: g = 1,
                                    size: h = "small"
                                } = f, k = Y5(n => a.rn(n, h), [h]), l = Y5(n => null != f.selection && a.tIa(f.selection).has(n), [f.selection]), m = Y5(n => null != f.selection && a.xZa(f.sheet, f.selection).has(n), [f.sheet, f.selection]);
                                return T5($5, { ...f,
                                    scale: g,
                                    rn: k,
                                    mJa: m,
                                    QBa: l,
                                    HC: b
                                })
                            });
                        return {
                            zNa: c,
                            yNa: d,
                            ANa: e
                        }
                    },
                    IEb = function(a) {
                        const b = a.Lq,
                            c = () => null;
                        return __c.Uy(d => T5(a6, { ...d,
                            Lq: b,
                            Mi: c
                        }))
                    },
                    KEb = function({
                        sheet: a,
                        scaleFactor: b,
                        range: c,
                        pd: d,
                        iBa: e
                    }) {
                        JEb(() => b6(() => {
                            if (null != d.current && null != e.current) {
                                var f, g = null !== (f = null === b || void 0 === b ? void 0 : b.get()) && void 0 !== f ? f : 1;
                                f = "rtl" === a.direction;
                                f = c ? a.ra(c.Rb) * g * (f ? 1 : -1) : 0;
                                var h = c ? -a.ua(c.Yb) * g : 0;
                                d.current.style.transform = `translate(${f}px, ${h}px)`;
                                e.current.style.width = `${a.width*g}px`;
                                e.current.style.height = `${a.height*g}px`
                            }
                        }), [a, c, d, e, b])
                    },
                    NEb = function({
                        onScroll: a
                    }) {
                        const b = new LEb(a);
                        return {
                            Wz: b,
                            oba: X5(c => T5(MEb, {
                                sheet: c.sheet,
                                Wz: b,
                                children: c.children
                            }))
                        }
                    },
                    REb = function(a) {
                        const b =
                            a.Lq,
                            c = a.ye,
                            d = a.cJa,
                            e = ({
                                children: k
                            }) => k,
                            {
                                Wz: f,
                                oba: g
                            } = NEb({
                                onScroll: a.onScroll
                            });
                        class h extends OEb {
                            get NH() {
                                const k = this.props.Ib.QE;
                                switch (k) {
                                    case "screen":
                                        return g;
                                    case "print":
                                        return e;
                                    default:
                                        throw new D(k);
                                }
                            }
                            componentDidMount() {
                                d.SIa(this.props.item, {
                                    Zb: this.props.Zb,
                                    Ib: this.props.Ib,
                                    Mg: this.props.Mg
                                })
                            }
                            componentWillUnmount() {
                                d.BSa(this.props.item, {
                                    Zb: this.props.Zb,
                                    Ib: this.props.Ib,
                                    Mg: this.props.Mg
                                })
                            }
                            render() {
                                d.SIa(this.props.item, {
                                    Zb: this.props.Zb,
                                    Ib: this.props.Ib,
                                    Mg: this.props.Mg
                                });
                                return T5(PEb, { ...this.props,
                                    scaleFactor: this.scaleFactor,
                                    Lq: b,
                                    NH: this.NH,
                                    Mi: this.Mi,
                                    cJa: d,
                                    Wz: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.scaleFactor = c6(() => {
                                    const l = this.props.item;
                                    var m = this.props.Ib,
                                        n = m.QE;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return 1;
                                        case "print":
                                            n = d.PYa(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.hH(l, n.Zb, {
                                                zoom: m
                                            }));
                                            return n / l.config.width;
                                        default:
                                            throw new D(n);
                                    }
                                });
                                this.Mi = X5(l => T5("div", {
                                    className: "wKvivQ",
                                    children: T5(QEb, { ...this.props,
                                        ...l,
                                        ye: c
                                    })
                                }))
                            }
                        }
                        return {
                            rPa: h,
                            Wz: f
                        }
                    },
                    SEb = function(a, b) {
                        if (null != b &&
                            null != b.Rb && null != b.Yb && null != b.Ic && null != b.Tc) {
                            var c = a.ra(b.Rb),
                                d = a.ua(b.Yb),
                                e = a.ra(b.Ic) + b.Ic.width - c;
                            a = a.ua(b.Tc) + b.Tc.height - d;
                            return __c.Ft({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    UEb = function(a) {
                        const b = a.Lq,
                            c = () => null;
                        return d => T5(TEb, { ...d,
                            Lq: b,
                            Mi: c
                        })
                    },
                    YEb = function(a, b, c, d, e, f) {
                        if (0 === d.length || 0 === e.length) return [];
                        const g = VEb(b, c, d, e);
                        f = WEb(b, c, d, e, f);
                        const h = XEb(a, b, c, d, e),
                            k = a.LYa(b),
                            l = a.kYa(b),
                            m = "rtl" === b.direction;
                        a = g.map(n => {
                            var p, q, r = n.h9a,
                                t = n.zga,
                                u = n.QHa;
                            const w = n.color,
                                x = n.weight;
                            n = n.Wb;
                            const y = m ? -1 : 1,
                                z = null === (p = h.get(d6(r, u))) || void 0 === p ? void 0 : p.Ja;
                            p = null === (q = h.get(d6(t, u))) || void 0 === q ? void 0 : q.ra;
                            if (null != z && null != p) {
                                q = C(k.get(u.qa));
                                var B = C(l.get(r.column));
                                r = C(l.get(t.column));
                                u = "start" === u.boundary ? q.start : q.end;
                                q = B.start;
                                t = "start" === t.boundary ? r.start : r.end;
                                return {
                                    color: w,
                                    weight: x,
                                    Wb: n,
                                    p1: new __c.gt(q + z * y, u),
                                    p2: new __c.gt(t + p * y, u),
                                    ...__c.qK((t - q) * y, n * x, z)
                                }
                            }
                        }).filter(__c.ub);
                        return [...f.map(n => {
                            var p, q, r = n.Jva,
                                t = n.o9a,
                                u = n.Cga;
                            const w = n.color,
                                x = n.weight;
                            n = n.Wb;
                            const y = null ===
                                (p = h.get(d6(r, t))) || void 0 === p ? void 0 : p.Da;
                            p = null === (q = h.get(d6(r, u))) || void 0 === q ? void 0 : q.ua;
                            if (null != y && null != p) {
                                q = C(l.get(r.column));
                                var z = C(k.get(t.qa));
                                t = C(k.get(u.qa));
                                r = "start" === r.boundary ? q.start : q.end;
                                q = z.start;
                                u = "start" === u.boundary ? t.start : t.end;
                                return {
                                    color: w,
                                    weight: x,
                                    Wb: n,
                                    p1: new __c.gt(r, q + y),
                                    p2: new __c.gt(r, u + p),
                                    ...__c.qK(u - q, n * x, y)
                                }
                            }
                        }).filter(__c.ub), ...a]
                    },
                    ZEb = function(a) {
                        const b = [];
                        a = a.filter(c => 0 !== c.weight && null != c.color);
                        a = __c.qd(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.qd(d, e => `${e.Yi}_${e.Zi}`);
                            for (const [, e] of a) {
                                const {
                                    Zi: f,
                                    Yi: g
                                } = e[0];
                                a = __c.qd(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    Yi: g,
                                    Zi: f
                                })
                            }
                        }
                        return b
                    },
                    aFb = function(a, b, c, d) {
                        var e = $Eb;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                qa: k,
                                boundary: "start"
                            }, {
                                qa: k,
                                boundary: "end"
                            }] : [{
                                qa: k,
                                boundary: "start"
                            }]),
                            g = c.get().flatMap(k => a.layout.cols.last() === k ? [{
                                column: k,
                                boundary: "start"
                            }, {
                                column: k,
                                boundary: "end"
                            }] : [{
                                column: k,
                                boundary: "start"
                            }]),
                            h =
                            new Map;
                        for (const k of b.get())
                            for (const l of c.get()) b = l && k ? e.bJa.s7a(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = YEb(e, a, h, f, g, d);
                        return ZEb(c)
                    },
                    VEb = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.qa;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || ("start" === k.boundary ? g.span.Yb === c : g.span.Tc === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = "start" === k.boundary ? null === c || void 0 === c ? void 0 : c.ua : null === c || void 0 === c ? void 0 : c.Da) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: C(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.zga, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.QHa, h = h.qa === k.qa && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.Wb === c.Wb && 0 === g.Wb ? g.zga = f : e.push({
                                            QHa: k,
                                            h9a: l,
                                            zga: f,
                                            color: c.color,
                                            weight: c.weight,
                                            Wb: c.Wb
                                        })
                                    }
                            }
                        return e
                    },
                    WEb = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.qa,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || ("start" === l.boundary ? d.span.Rb === h : d.span.Ic === h))
                                    if (d = b.get(`${h.id}:${g.id}`),
                                        (d = "start" === l.boundary ? null === d || void 0 === d ? void 0 : d.ra : null === d || void 0 === d ? void 0 : d.Ja) && ("start" !== l.boundary || 1 !== e(g, h))) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            qa: g,
                                            boundary: "start"
                                        } : {
                                            qa: C(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.Jva, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.Cga, k = k.qa === m.qa && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.Wb === d.Wb && 0 === h.Wb ? h.Cga = g : f.push({
                                            Jva: l,
                                            o9a: m,
                                            Cga: g,
                                            color: d.color,
                                            weight: d.weight,
                                            Wb: d.Wb
                                        })
                                    }
                            }
                        return f
                    },
                    XEb = function(a, b, c, d, e) {
                        const f = a.bJa.ETa(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                u = f.get(r) || 0;
                            return t <= u ? q : r
                        };
                        const g = new Map;
                        if (0 === d.length || 0 === e.length) return g;
                        var h = [],
                            k = b.layout.cols.rc(e[0].column);
                        k && h.push({
                            column: k,
                            boundary: "start"
                        });
                        h.push(...e);
                        (e = b.layout.cols.next(e[e.length - 1].column)) && h.push({
                            column: e,
                            boundary: "start"
                        });
                        e = [];
                        (k = b.layout.rows.rc(d[0].qa)) && e.push({
                            qa: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].qa)) &&
                        e.push({
                            qa: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = "start" === q.boundary ? q.column : void 0) ? b.layout.cols.rc(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = "start" === r.boundary ? r.qa : void 0;
                                k = l ? b.layout.rows.rc(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = "end" === q.boundary ? null === l || void 0 === l ? void 0 : l.Ja : null === m || void 0 === m ? void 0 : m.ra;
                                m = "end" === r.boundary ? null === n || void 0 ===
                                    n ? void 0 : n.Da : null === m || void 0 === m ? void 0 : m.ua;
                                n = "end" === q.boundary ? null === p || void 0 === p ? void 0 : p.Ja : null === n || void 0 === n ? void 0 : n.ra;
                                l = "end" === r.boundary ? null === p || void 0 === p ? void 0 : p.Da : null === l || void 0 === l ? void 0 : l.ua;
                                p = __c.aAa({
                                    ua: n,
                                    Da: k,
                                    ra: l,
                                    Ja: m
                                }, a);
                                let t;
                                switch (p) {
                                    case "blockStart":
                                        t = n;
                                        break;
                                    case "blockEnd":
                                        t = k;
                                        break;
                                    case "inlineStart":
                                        t = l;
                                        break;
                                    case "inlineEnd":
                                        t = m;
                                        break;
                                    default:
                                        t = void 0
                                }
                                const {
                                    height: u,
                                    width: w
                                } = 1 === (null === t || void 0 === t ? void 0 : t.Wb) ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((null ===
                                        l || void 0 === l ? void 0 : l.weight) || 0, (null === m || void 0 === m ? void 0 : m.weight) || 0),
                                    width: Math.max((null === n || void 0 === n ? void 0 : n.weight) || 0, (null === k || void 0 === k ? void 0 : k.weight) || 0)
                                };
                                g.set(d6(q, r), __c.lK(p, u / 2, w / 2))
                            }
                        }
                        return g
                    },
                    e6 = function(a, b, c, d, e) {
                        if (a && b) {
                            var f = b.Hr ? a.Hr ? void 0 : a : b;
                            return __c.nK(b.borderStyle, a.borderStyle, d, c, e, null === f || void 0 === f ? void 0 : f.borderStyle)
                        }
                        return null !== (f = null === a || void 0 === a ? void 0 : a.borderStyle) && void 0 !== f ? f : null === b || void 0 === b ? void 0 : b.borderStyle
                    },
                    bFb = function(a,
                        b, c) {
                        var d = b && c && a.layout.cells.get(c, b),
                            e, f, g = b && c ? a.layout.attrs.get(Tg({
                                T0: void 0,
                                a1: void 0,
                                X0: void 0
                            }), null !== (e = null === d || void 0 === d ? void 0 : d.span.Yb) && void 0 !== e ? e : c, null !== (f = null === d || void 0 === d ? void 0 : d.span.Rb) && void 0 !== f ? f : b) || {} : void 0;
                        if (b && c) {
                            b = {
                                color: a.oi.color,
                                weight: a.oi.weight,
                                Wb: oK(a.oi.Cd)
                            };
                            if (!g) return a.$k ? void 0 : {
                                borderStyle: b,
                                Hr: !0
                            };
                            c = f6(g.T0);
                            d = g6(g.a1);
                            g = h6(g.X0);
                            return null == c && null == d && null == g ? a.$k ? void 0 : {
                                borderStyle: b,
                                Hr: !0
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ?
                                        c : b.color,
                                    weight: null !== d && void 0 !== d ? d : b.weight,
                                    Wb: g ? oK(g) : b.Wb
                                },
                                Hr: !1
                            }
                        }
                    },
                    cFb = function(a, b, c) {
                        var d = b && c && a.layout.cells.get(c, b),
                            e, f, g = b && c ? a.layout.attrs.get(Tg({
                                S0: void 0,
                                $0: void 0,
                                W0: void 0
                            }), null !== (e = null === d || void 0 === d ? void 0 : d.span.Yb) && void 0 !== e ? e : c, null !== (f = null === d || void 0 === d ? void 0 : d.span.Rb) && void 0 !== f ? f : b) || {} : void 0;
                        if (b && c) {
                            b = {
                                color: a.oi.color,
                                weight: a.oi.weight,
                                Wb: oK(a.oi.Cd)
                            };
                            if (!g) return a.$k ? void 0 : {
                                borderStyle: b,
                                Hr: !0
                            };
                            c = f6(g.S0);
                            d = g6(g.$0);
                            g = h6(g.W0);
                            return null == c && null ==
                                d && null == g ? a.$k ? void 0 : {
                                    borderStyle: b,
                                    Hr: !0
                                } : {
                                    borderStyle: {
                                        color: null !== c && void 0 !== c ? c : b.color,
                                        weight: null !== d && void 0 !== d ? d : b.weight,
                                        Wb: g ? oK(g) : b.Wb
                                    },
                                    Hr: !1
                                }
                        }
                    },
                    dFb = function(a, b, c) {
                        var d = b && c && a.layout.cells.get(c, b),
                            e, f, g = b && c ? a.layout.attrs.get(Tg({
                                V0: void 0,
                                c1: void 0,
                                Z0: void 0
                            }), null !== (e = null === d || void 0 === d ? void 0 : d.span.Yb) && void 0 !== e ? e : c, null !== (f = null === d || void 0 === d ? void 0 : d.span.Rb) && void 0 !== f ? f : b) || {} : void 0;
                        if (b && c) {
                            b = {
                                color: a.oi.color,
                                weight: a.oi.weight,
                                Wb: oK(a.oi.Cd)
                            };
                            if (!g) return a.$k ?
                                void 0 : {
                                    borderStyle: b,
                                    Hr: !0
                                };
                            c = f6(g.V0);
                            d = g6(g.c1);
                            g = h6(g.Z0);
                            return null == c && null == d && null == g ? a.$k ? void 0 : {
                                borderStyle: b,
                                Hr: !0
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ? c : b.color,
                                    weight: null !== d && void 0 !== d ? d : b.weight,
                                    Wb: g ? oK(g) : b.Wb
                                },
                                Hr: !1
                            }
                        }
                    },
                    eFb = function(a, b, c) {
                        var d = b && c && a.layout.cells.get(c, b),
                            e, f, g = b && c ? a.layout.attrs.get(Tg({
                                U0: void 0,
                                b1: void 0,
                                Y0: void 0
                            }), null !== (e = null === d || void 0 === d ? void 0 : d.span.Yb) && void 0 !== e ? e : c, null !== (f = null === d || void 0 === d ? void 0 : d.span.Rb) && void 0 !== f ? f : b) || {} :
                            void 0;
                        if (b && c) {
                            b = {
                                color: a.oi.color,
                                weight: a.oi.weight,
                                Wb: oK(a.oi.Cd)
                            };
                            if (!g) return a.$k ? void 0 : {
                                borderStyle: b,
                                Hr: !0
                            };
                            c = f6(g.U0);
                            d = g6(g.b1);
                            g = h6(g.Y0);
                            return null == c && null == d && null == g ? a.$k ? void 0 : {
                                borderStyle: b,
                                Hr: !0
                            } : {
                                borderStyle: {
                                    color: null !== c && void 0 !== c ? c : b.color,
                                    weight: null !== d && void 0 !== d ? d : b.weight,
                                    Wb: g ? oK(g) : b.Wb
                                },
                                Hr: !1
                            }
                        }
                    },
                    f6 = function(a) {
                        return null == a || "inherit" === a ? void 0 : a
                    },
                    g6 = function(a) {
                        return null == a || "inherit" === a ? void 0 : Number(a.split("px")[0])
                    },
                    h6 = function(a) {
                        return null == a || "inherit" ===
                            a ? void 0 : a.split(" ").map(b => {
                                b = Number(b);
                                return 0 < b ? b : void 0
                            }).filter(__c.ub)
                    },
                    i6 = function(a, b, c) {
                        let d = 0;
                        for (; null != a && a !== b;)(a = c.next(a)) && d++;
                        return d
                    },
                    fFb = function(a, b) {
                        return (null === a || void 0 === a ? void 0 : a.Da) === (null === b || void 0 === b ? void 0 : b.Da) && (null === a || void 0 === a ? void 0 : a.ua) === (null === b || void 0 === b ? void 0 : b.ua) && (null === a || void 0 === a ? void 0 : a.Ja) === (null === b || void 0 === b ? void 0 : b.Ja) && (null === a || void 0 === a ? void 0 : a.ra) === (null === b || void 0 === b ? void 0 : b.ra)
                    },
                    hFb = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                hva: b,
                                vE: b,
                                Ha: {},
                                Tx: {}
                            },
                            d = j6(() => ({
                                style: a.wZ.style || c,
                                kW: a.kW
                            }), ({
                                style: f,
                                kW: g
                            }) => {
                                var h;
                                Object.assign(a.Qda.style, f.hva);
                                Object.assign(a.kN.style, f.vE);
                                Object.assign(a.wE.style, f.Ha);
                                Object.assign(a.jB.style, f.Tx);
                                ({
                                    textDecoration: f
                                } = (null === (h = a.wZ.style) || void 0 === h ? void 0 : h.Ha) || {});
                                a.wE.classList.toggle("OQx3PQ", "underline" === f);
                                a.wE.classList.toggle("_99ezUA", "line-through" === f);
                                a.wE.classList.toggle("kppAqQ", "underline line-through" === f);
                                a.wE.style.display = g ? "none" : "unset"
                            }, {
                                fireImmediately: !0,
                                equals: k6.structural
                            }),
                            e = j6(() => a.kW ? void 0 : a.renderer, f => {
                                a.v2 && "react" !== (null === f || void 0 === f ? void 0 : f.type) ? (a.v2 = void 0, a.$X.remove()) : a.jB.innerHTML = "";
                                switch (null === f || void 0 === f ? void 0 : f.type) {
                                    case "react":
                                        a.v2 = gFb(f.node, a.$X);
                                        a.jB.appendChild(a.$X);
                                        break;
                                    case "dom":
                                        f.render(a.jB);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new D(f);
                                }
                                a.pX()
                            }, {
                                fireImmediately: !0
                            });
                        return () => {
                            d();
                            e()
                        }
                    },
                    jFb = function(a) {
                        const b = a.Uw,
                            c = a.IH,
                            d = new iFb(a.XY);
                        return e => T5(l6, { ...e,
                            IH: c,
                            Uw: b,
                            Xia: d
                        })
                    },
                    zEb = ({
                        Ge: a,
                        rM: b
                    }) =>
                    c => (0, __c.N)(__c.Vbb, { ...c,
                        Ge: a,
                        rM: b
                    }),
                    m6 = __webpack_require__(443763),
                    n6 = m6.Fragment,
                    T5 = m6.jsx,
                    o6 = m6.jsxs;
                var X5 = __webpack_require__(736241).Pi;
                var p6 = __webpack_require__(875604),
                    q6 = p6.Component,
                    kFb = p6.createRef,
                    OEb = p6.PureComponent,
                    Y5 = p6.useCallback,
                    JEb = p6.useEffect,
                    W5 = p6.useMemo,
                    lFb = p6.useState;
                var r6 = __webpack_require__(42782),
                    s6 = r6.aD,
                    b6 = r6.EH,
                    k6 = r6.p6,
                    c6 = r6.Fl,
                    t6 = r6.LO,
                    j6 = r6.U5;
                var u6 = __webpack_require__(240236).gn;
                var mFb = __webpack_require__,
                    nFb = mFb(993864),
                    V5 = mFb.n_x(nFb)();
                var oFb = __webpack_require__(358579).Z;
                var v6 = __webpack_require__(649799),
                    w6 = v6.Om,
                    x6 = v6.kq,
                    y6 = v6.YN;
                var gFb = __webpack_require__(204358).createPortal;
                var pFb = X5(a => {
                        var b, c, d = "rtl" === a.sheet.direction;
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const [e] = lFb(() => yy()), f = {
                            get: Y5(() => {
                                var g;
                                const h = null === e || void 0 === e ? void 0 : null === (g = e.current) || void 0 === g ? void 0 : g.getBoundingClientRect();
                                var k, l;
                                g = {
                                    top: 0,
                                    left: 0,
                                    width: null !== (k = null === h || void 0 === h ? void 0 : h.width) && void 0 !== k ? k : 0,
                                    height: null !== (l = null === h || void 0 === h ? void 0 : h.height) && void 0 !== l ? l : 0
                                };
                                return __c.Ft(g)
                            }, [e])
                        };
                        return o6("div", {
                            className: V5("nMvVqA", d),
                            children: [o6("div", {
                                ref: oFb(a.pd, e),
                                className: "_0YOFPg",
                                children: [T5(a.Lq, { ...a,
                                    viewport: f
                                }), T5("div", {
                                    className: V5("Gdl7fQ", d),
                                    children: null === (c = a.ysa) || void 0 === c ? void 0 : null === (b = c.get()) || void 0 === b ? void 0 : b.map((g, h) => T5(g, {}, h))
                                })]
                            }), "visible" === a.Enb && o6(n6, {
                                children: [T5("div", {
                                    className: V5("_32sKQw", d),
                                    children: T5(a.oPa, { ...a
                                    })
                                }), T5("div", {
                                    className: V5("xdIsTQ", d),
                                    children: T5(a.sPa, { ...a
                                    })
                                }), T5("div", {
                                    className: V5("rsTRSA", d),
                                    children: T5(a.qPa, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    qFb = X5(a => {
                        a = a.content;
                        __c.v("text2" === a.type || "text3" === a.type);
                        switch (a.type) {
                            case "text2":
                                return T5(n6, {
                                    children: a.value.Y
                                });
                            case "text3":
                                return T5(n6, {
                                    children: __c.pq.xa(a.value).cells.Y()
                                });
                            default:
                                throw new D(a);
                        }
                    });
                var yEb = vEb((a, b) => {
                    const c = a.value;
                    ({
                        ni: a
                    } = ig(__c.Sg, a.context.attrs));
                    const d = document.createElement("div");
                    "wrap" === a && (d.className = "dt4Dlg", d.style.overflowWrap = "break-word");
                    d.innerText = c;
                    b.appendChild(d)
                });
                var AEb = a => vEb((b, c) => {
                        const d = b.content;
                        b = b.context;
                        if (d.value.isEmpty)
                            for (; c.lastChild;) c.lastChild.remove();
                        else({
                            ni: b
                        } = ig(__c.Sg, b.attrs)), "wrap" === b && (c = c.appendChild(document.createElement("div")), c.className = "dt4Dlg"), a.render({
                            container: c,
                            text: d.value,
                            Fa: void 0,
                            writingMode: 1,
                            hd: "start",
                            If: rFb(d, b)
                        })
                    }),
                    rFb = w6((a, b) => {
                        if ("wrap" === b) return [];
                        a = a.value.Y.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: k6.structural
                    });
                var U5 = class a extends q6 {
                    static j(b) {
                        P(b, {
                            ni: c6
                        })
                    }
                    get ni() {
                        return ig(__c.Sg, this.props.context.attrs).ni
                    }
                    render() {
                        var b = this.props.content;
                        const c = this.props.context;
                        if (b.value.isEmpty) return null;
                        b = T5(this.props.Mi, {
                            content: b,
                            qa: c.qa,
                            col: c.col,
                            ni: this.ni
                        }, this.key++);
                        return "wrap" === this.ni ? T5("div", {
                            className: "dt4Dlg",
                            children: b
                        }) : T5(n6, {
                            children: b
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.key = 0
                    }
                };
                U5 = u6([Lc], U5);
                var sFb = 4 * __c.Nz,
                    tFb = 3 * __c.Nz;
                var GEb = class {
                    rn(a, b) {
                        return "large" === b ? sFb * a : tFb * a
                    }
                    constructor() {
                        this.n0a = w6((a, b) => {
                            var c, d;
                            b = b.get();
                            return null != b && a.layout.rows.count() === ((null === (c = b.rows) || void 0 === c ? void 0 : c.size) || 0) && a.layout.cols.count() === ((null === (d = b.columns) || void 0 === d ? void 0 : d.size) || 0)
                        });
                        this.rIa = x6(a => {
                            var b;
                            return new Set((null === (b = a.get()) || void 0 === b ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.Ph
                        });
                        this.tIa = x6(a => {
                            var b;
                            return new Set((null === (b = a.get()) || void 0 === b ? void 0 : b.rows) || [])
                        }, {
                            equals: __c.Ph
                        });
                        this.wZa =
                            w6((a, b) => {
                                var {
                                    cells: c
                                } = b.get() || {};
                                if (!c || 0 === c.size) return new Set;
                                b = this.rIa(b);
                                const d = new Set;
                                for (const e of c) {
                                    c = a.layout.cells.get(e.qa, e.column);
                                    for (const f of CEb(c ? c.span.Rb : e.column, c ? c.span.Ic : e.column, a.layout.cols))(0 === b.size || b.has(f)) && d.add(f)
                                }
                                return d
                            }, {
                                equals: __c.Ph
                            });
                        this.xZa = w6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c || 0 === c.size) return new Set;
                            b = this.tIa(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.qa, e.column);
                                for (const f of CEb(c ? c.span.Yb : e.qa, c ? c.span.Tc :
                                        e.qa, a.layout.rows))(0 === b.size || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.Ph
                        })
                    }
                };
                var Z5 = class a extends q6 {
                    static j(b) {
                        P(b, {
                            ld: c6,
                            Qo: c6,
                            upa: c6
                        })
                    }
                    get ld() {
                        return "rtl" === this.props.sheet.direction
                    }
                    get Qo() {
                        var b;
                        const c = null === (b = this.props.Kv) || void 0 === b ? void 0 : b.get();
                        if (null != c && 0 !== c.length) return new __c.VG(c)
                    }
                    get upa() {
                        var b, c, d;
                        return null === (c = (d = this.props).uYa) || void 0 === c ? void 0 : null === (b = c.call(d)) || void 0 === b ? void 0 : b.get()
                    }
                    render() {
                        return T5(__c.Zz, {
                            Fo: "light",
                            light: "light",
                            Xq: "light",
                            dark: "light",
                            children: this.QSa
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.onMouseMove =
                            s6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    scale: f = 1
                                } = this.props;
                                null === d || void 0 === d ? void 0 : d(c, e, "column", f)
                            });
                        this.onMouseLeave = s6(c => {
                            var d, e;
                            null === (d = (e = this.props).onMouseLeave) || void 0 === d ? void 0 : d.call(e, c)
                        });
                        this.V6a = () => {
                            const {
                                sheet: c,
                                lJa: d,
                                vBa: e,
                                rn: f,
                                scale: g = 1
                            } = this.props;
                            let h = -1;
                            return T5("div", {
                                style: void 0,
                                className: V5("Vt2_4w", {
                                    jNbTIg: !this.ld,
                                    gtA7Dw: this.ld
                                }, {
                                    Tn3nUw: void 0
                                }),
                                onMouseMove: this.onMouseMove,
                                onMouseLeave: this.onMouseLeave,
                                children: c.cols.map(k => {
                                    h++;
                                    return T5(uFb, {
                                        col: k,
                                        label: __c.KE(h),
                                        Xoa: d,
                                        Lr: e,
                                        rn: f,
                                        scale: g
                                    }, k.id)
                                })
                            })
                        };
                        this.QSa = c => {
                            var d;
                            const e = {
                                jNbTIg: !this.ld,
                                gtA7Dw: this.ld
                            };
                            return o6("div", {
                                ref: null === (d = this.Qo) || void 0 === d ? void 0 : d.fg,
                                className: V5("xhBZaw", e, c.className),
                                children: [void 0, this.V6a()]
                            })
                        }
                    }
                };
                Z5 = u6([Lc], Z5);
                var $5 = class a extends q6 {
                    static j(b) {
                        P(b, {
                            ld: c6,
                            Qo: c6,
                            upa: c6
                        })
                    }
                    get ld() {
                        return "rtl" === this.props.sheet.direction
                    }
                    get Qo() {
                        var b;
                        const c = null === (b = this.props.Kv) || void 0 === b ? void 0 : b.get();
                        if (null != c && 0 !== c.length) return new __c.VG(c)
                    }
                    get upa() {
                        var b, c, d;
                        return null === (c = (d = this.props).uYa) || void 0 === c ? void 0 : null === (b = c.call(d)) || void 0 === b ? void 0 : b.get()
                    }
                    render() {
                        return T5(__c.Zz, {
                            Fo: "light",
                            light: "light",
                            Xq: "light",
                            dark: "light",
                            children: this.E7a
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.onMouseMove =
                            s6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    scale: f = 1
                                } = this.props;
                                null === d || void 0 === d ? void 0 : d(c, e, "row", f)
                            });
                        this.onMouseLeave = s6(c => {
                            var d, e;
                            null === (d = (e = this.props).onMouseLeave) || void 0 === d ? void 0 : d.call(e, c)
                        });
                        this.d7a = () => {
                            const {
                                sheet: c,
                                mJa: d,
                                QBa: e,
                                rn: f,
                                scale: g = 1
                            } = this.props;
                            let h = -1;
                            return T5("div", {
                                style: void 0,
                                className: V5("_93roJg", {
                                    jNbTIg: !this.ld,
                                    gtA7Dw: this.ld
                                }, {
                                    Tn3nUw: void 0
                                }),
                                onMouseMove: this.onMouseMove,
                                onMouseLeave: this.onMouseLeave,
                                children: c.rows.map(k => {
                                    h++;
                                    return T5(vFb, {
                                        qa: k,
                                        label: `${h+
1}`,
                                        Xoa: d,
                                        Lr: e,
                                        rn: f,
                                        scale: g
                                    }, k.id)
                                })
                            })
                        };
                        this.E7a = c => {
                            var d;
                            const e = {
                                jNbTIg: !this.ld,
                                gtA7Dw: this.ld
                            };
                            return o6("div", {
                                ref: null === (d = this.Qo) || void 0 === d ? void 0 : d.fg,
                                className: V5("An9VeA", e, c.className),
                                children: [void 0, this.d7a()]
                            })
                        }
                    }
                };
                $5 = u6([Lc], $5);
                var uFb = X5(a => {
                        const {
                            label: b,
                            col: c,
                            Xoa: d,
                            Lr: e,
                            rn: f,
                            scale: g = 1
                        } = a;
                        a = f(g);
                        const h = y6(() => d(c)),
                            k = y6(() => e(c));
                        return T5("div", {
                            className: V5("_83Rssw", "d2uLIA", {
                                YbLr8g: h,
                                sTqdww: k
                            }),
                            style: {
                                width: c.width * g,
                                height: a
                            },
                            children: T5(DEb, {
                                label: b,
                                width: c.width,
                                height: f(1),
                                scale: g,
                                highlight: h,
                                selected: k
                            })
                        })
                    }),
                    vFb = X5(a => {
                        const {
                            label: b,
                            qa: c,
                            Xoa: d,
                            Lr: e,
                            rn: f,
                            scale: g = 1
                        } = a;
                        a = f(g);
                        const h = y6(() => d(c)),
                            k = y6(() => e(c));
                        return T5("div", {
                            className: V5("_83Rssw", "JhBzyw", {
                                YbLr8g: h,
                                sTqdww: k
                            }),
                            style: {
                                width: a,
                                height: c.height *
                                    g
                            },
                            children: T5(DEb, {
                                label: b,
                                width: f(1),
                                height: c.height,
                                scale: g,
                                highlight: h,
                                selected: k
                            })
                        })
                    });
                var wFb = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var xFb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var EEb = __c.bT({
                    Gl: wFb,
                    medium: xFb
                });
                var a6 = class a extends q6 {
                    static j(b) {
                        P(b, {
                            Hd: c6.struct
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this)
                    }
                    render() {
                        return T5(this.props.Lq, {
                            sheet: this.props.element.config,
                            Kv: this.props.Kv,
                            Ly: this.props.Ly,
                            Oy: this.props.Oy,
                            scaleFactor: this.props.scaleFactor,
                            Hd: this.Hd,
                            Mi: this.props.Mi,
                            LS: void 0
                        })
                    }
                    get Hd() {
                        const b = this.props.Td,
                            c = this.props.element.altText;
                        return c ? c.Vd && !b ? {
                            "aria-hidden": !0
                        } : {
                            "aria-label": c.text
                        } : {}
                    }
                };
                a6 = u6([Lc], a6);
                var yFb = class {
                    constructor() {
                        this.r9 = new WeakMap;
                        this.PYa = a => this.r9.get(a);
                        this.SIa = (a, b) => {
                            this.r9.set(a, b)
                        };
                        this.BSa = (a, b) => {
                            const c = this.r9.get(a);
                            c && c.Ib === b.Ib && c.Zb === b.Zb && c.Mg === b.Mg && this.r9.delete(a)
                        }
                    }
                };
                var QEb = X5(a => {
                        const b = a.Ib,
                            c = a.item,
                            d = a.Mg,
                            e = a.Zb,
                            f = a.ye,
                            g = a.col,
                            h = a.qa,
                            k = a.content,
                            l = a.ni;
                        a = a.Wt;
                        __c.v("text3" === k.type);
                        __c.eH(a, __c.pq.xa(k.value), (p, q) => __c.pq.domain.Mb(p, q));
                        [a] = lFb(() => new zFb(c, e, c6(() => b.zoom)));
                        const m = W5(() => new __c.HZa(d, c), [d, c]),
                            n = W5(() => {
                                var p = new __c.IZa(m, g, h);
                                return new __c.JZa(p, k.value)
                            }, [m, g, h, k.value]);
                        return T5(f, {
                            Ib: b,
                            vg: n,
                            text: k.value,
                            Zb: a,
                            If: "wrap" === l ? "pre-wrap" : "nowrap"
                        })
                    }),
                    zFb = class extends __c.uT {
                        static j(a) {
                            P(a, {
                                width: t6.ref,
                                t_: c6
                            })
                        }
                        get bB() {
                            return this.q9.bB
                        }
                        get t_() {
                            const a =
                                (this.zja.width - this.q9.width) / 2;
                            return {
                                left: -a,
                                right: this.q9.width + a
                            }
                        }
                        constructor(a, b, c) {
                            super();
                            zFb.j(this);
                            this.sheet = a;
                            this.q9 = b;
                            this.zoom = c;
                            this.width = 0;
                            this.marginWidth = void 0;
                            this.zja = new __c.hH(this.sheet, this.q9, {
                                zoom: this.zoom.get()
                            })
                        }
                    };
                var z6 = parseInt("4px", 10) || 4,
                    AFb = X5(({
                        sheet: a,
                        scaleFactor: b,
                        range: c,
                        zt: d,
                        At: e
                    }) => {
                        if (null != c && (d || e)) {
                            var f;
                            b = null !== (f = null === b || void 0 === b ? void 0 : b.get()) && void 0 !== f ? f : 1;
                            if (d && e) return d = a.ua(c.Tc) + c.Tc.height, a = a.ra(c.Ic) + c.Ic.width, T5("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: z6 * b
                                },
                                className: V5("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.ra(c.Ic) + c.Ic.width, T5("div", {
                                style: {
                                    left: c * b,
                                    width: z6 * b,
                                    height: a.height * b
                                },
                                className: V5("aX8dhQ", "gl1RPg")
                            });
                            if (e) return c = a.ua(c.Tc) + c.Tc.height, T5("div", {
                                style: {
                                    top: c *
                                        b,
                                    width: a.width * b,
                                    height: z6 * b
                                },
                                className: V5("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var A6 = ({
                        sheet: a,
                        range: b,
                        scaleFactor: c,
                        children: d
                    }) => {
                        const e = S5();
                        KEb({
                            sheet: a,
                            scaleFactor: c,
                            range: b,
                            pd: e,
                            iBa: e
                        });
                        return T5("div", {
                            ref: e,
                            className: V5("nstn2A", "rtl" === a.direction ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    BFb = ({
                        sheet: a,
                        range: b,
                        scaleFactor: c,
                        children: d
                    }) => {
                        const e = S5(),
                            f = S5();
                        KEb({
                            sheet: a,
                            scaleFactor: c,
                            range: b,
                            pd: e,
                            iBa: f
                        });
                        a = "rtl" === a.direction ? "NgnL2Q" : "f8jAGQ";
                        return T5("div", {
                            ref: e,
                            className: V5("nstn2A", a, "_9sodyg"),
                            children: T5("div", {
                                ref: f,
                                className: V5("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var MEb = X5(({
                        sheet: a,
                        children: b,
                        Wz: c
                    }) => {
                        const d = Y5(f => {
                                c.Ioa(a, f)
                            }, [c, a]),
                            e = Y5(f => {
                                null != f ? c.NG.set(a, f) : c.NG.delete(a)
                            }, [c, a]);
                        return T5(__c.beb, {
                            direction: "rtl" === a.config.direction ? "rtl" : "ltr",
                            onScroll: d,
                            tu: e,
                            children: b
                        })
                    }),
                    LEb = class {
                        Ioa(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.HY.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.NG = new WeakMap;
                            this.HY = t6.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = s6((b, c) => {
                                b = this.NG.get(b);
                                null === b || void 0 === b ? void 0 : b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var PEb = X5(a => {
                    const b = a.item,
                        c = a.Kv,
                        d = a.measureRef,
                        e = a.scaleFactor,
                        f = a.k_a,
                        g = a.Zb,
                        h = a.Ly,
                        k = a.Oy,
                        l = a.Lq,
                        m = a.NH,
                        n = a.Mi,
                        p = a.Td;
                    a = a.Wz;
                    const q = W5(() => {
                            const t = b.altText;
                            return t ? t.Vd && !p ? {
                                "aria-hidden": !0
                            } : {
                                "aria-label": t.text
                            } : {}
                        }, [b, p]),
                        r = W5(() => X5(({
                            sheet: t,
                            range: u,
                            zt: w,
                            At: x
                        }) => T5(A6, {
                            sheet: t,
                            range: u,
                            scaleFactor: e,
                            children: T5(AFb, {
                                sheet: t,
                                scaleFactor: e,
                                range: u,
                                zt: w,
                                At: x
                            })
                        })), [e]);
                    JEb(() => b6(() => {}), [b, g.width, a]);
                    return T5("div", {
                        ref: d,
                        className: "E8r86A",
                        style: {
                            width: Math.min(g.width, b.F)
                        },
                        children: T5(m, {
                            sheet: b,
                            children: T5("div", {
                                ref: f,
                                className: "cXTiJA",
                                style: {
                                    width: b.F,
                                    height: b.N
                                },
                                children: T5(l, {
                                    sheet: b.config,
                                    Kv: c,
                                    scaleFactor: e,
                                    Ly: h,
                                    Oy: k,
                                    Hd: q,
                                    Mi: n,
                                    LS: r
                                })
                            })
                        })
                    })
                });
                var CFb = X5(({
                    page: a,
                    range: b,
                    Qz: c
                }) => {
                    const d = SEb(a.sheet, b);
                    return T5("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => null == d ? c(e, f) : __c.Dt(__c.Ft(e)).Zo(d) && c(e, f))
                    })
                });
                var DFb = new __c.MU,
                    B6 = a => sFb * a,
                    C6 = () => !1,
                    TEb = X5(({
                        page: a,
                        Kv: b,
                        Ly: c,
                        Oy: d,
                        u4: e,
                        scaleFactor: f,
                        viewport: g,
                        R8a: h,
                        Lq: k,
                        Mi: l,
                        Qz: m,
                        F8: n,
                        Rgb: p,
                        Pdb: q,
                        Odb: r
                    }) => {
                        var t = "rtl" === a.sheet.direction,
                            u;
                        const w = null !== (u = null === f || void 0 === f ? void 0 : f.get()) && void 0 !== u ? u : 1;
                        u = W5(() => X5(({
                            sheet: x,
                            range: y,
                            zt: z,
                            At: B
                        }) => o6(n6, {
                            children: [T5(A6, {
                                sheet: a.sheet,
                                range: y,
                                scaleFactor: f,
                                children: T5(AFb, {
                                    sheet: x,
                                    scaleFactor: f,
                                    range: y,
                                    zt: z,
                                    At: B
                                })
                            }), o6(BFb, {
                                sheet: a.sheet,
                                range: y,
                                scaleFactor: f,
                                children: [p && T5(p, {}), m && T5(CFb, {
                                    page: a,
                                    Qz: m,
                                    range: y
                                }), r && T5(r, {}), n && n()]
                            }), q && y && T5(A6, {
                                sheet: a.sheet,
                                range: y,
                                scaleFactor: f,
                                children: T5(q, {
                                    range: y
                                })
                            })]
                        })), [a, f, p, m, r, n, q]);
                        b = T5(k, {
                            sheet: a.sheet,
                            Kv: b,
                            Ly: c,
                            Oy: d,
                            u4: e,
                            scaleFactor: f,
                            viewport: g,
                            Mi: l,
                            LS: u
                        });
                        t = o6("div", {
                            className: "OsKKIQ",
                            children: [T5("div", {
                                className: "VDFv_A",
                                children: b
                            }), T5("div", {
                                className: "_688KWg",
                                children: T5(FEb, {
                                    ld: t,
                                    highlight: !1,
                                    rn: B6,
                                    scale: w
                                })
                            }), T5("div", {
                                className: "m0cT1w",
                                children: T5(Z5, {
                                    sheet: a.sheet,
                                    scale: w,
                                    rn: B6,
                                    vBa: C6,
                                    lJa: C6,
                                    HC: DFb
                                })
                            }), T5("div", {
                                className: "zm537g",
                                children: T5($5, {
                                    sheet: a.sheet,
                                    scale: w,
                                    rn: B6,
                                    QBa: C6,
                                    mJa: C6,
                                    HC: DFb
                                })
                            })]
                        });
                        return h ? t : b
                    });
                var d6 = (a, b) => `${a.column.id}-${a.boundary}:${b.qa.id}-${b.boundary}`,
                    FFb = class {
                        constructor() {
                            this.bJa = EFb;
                            this.LYa = x6(a => {
                                const b = new Map;
                                let c = 0;
                                a.layout.rows.forEach(d => {
                                    const e = c,
                                        f = e + d.height;
                                    b.set(d, {
                                        start: e,
                                        end: f
                                    });
                                    c = f
                                });
                                return b
                            });
                            this.kYa = x6(a => {
                                const b = new Map;
                                var c = "rtl" === a.direction;
                                const d = c ? -1 : 1;
                                let e = 0;
                                c && (c = a.layout.cols.last(), e = null != c ? a.ra(c) + c.width : 0);
                                a.layout.cols.forEach(f => {
                                    const g = e,
                                        h = g + f.width * d;
                                    b.set(f, {
                                        start: g,
                                        end: h
                                    });
                                    e = h
                                });
                                return b
                            })
                        }
                    },
                    GFb = class {
                        constructor() {
                            this.s7a =
                                w6((a, b, c) => {
                                    const d = a.layout.cells.get(c, b);
                                    var e, f, g = i6(null !== (e = null === d || void 0 === d ? void 0 : d.span.Rb) && void 0 !== e ? e : b, null !== (f = null === d || void 0 === d ? void 0 : d.span.Ic) && void 0 !== f ? f : b, a.layout.cols),
                                        h, k;
                                    e = i6(null !== (h = null === d || void 0 === d ? void 0 : d.span.Yb) && void 0 !== h ? h : c, null !== (k = null === d || void 0 === d ? void 0 : d.span.Tc) && void 0 !== k ? k : c, a.layout.rows);
                                    var l = d ? c === d.span.Yb : !0;
                                    const m = d ? c === d.span.Tc : !0,
                                        n = d ? b === d.span.Rb : !0;
                                    f = d ? b === d.span.Ic : !0;
                                    if (n || f || l || m) {
                                        h = {};
                                        var p = a.layout.rows.rc(c),
                                            q = a.layout.rows.next(c),
                                            r = a.layout.cols.rc(b);
                                        k = a.layout.cols.next(b);
                                        if (l) {
                                            l = bFb(a, b, c);
                                            const Y = b && p && a.layout.cells.get(p, b);
                                            p = b && p && cFb(a, b, p);
                                            var t, u;
                                            const la = i6(null !== (t = null === Y || void 0 === Y ? void 0 : Y.span.Rb) && void 0 !== t ? t : b, null !== (u = null === Y || void 0 === Y ? void 0 : Y.span.Ic) && void 0 !== u ? u : b, a.layout.cols);
                                            var w, x;
                                            t = a.layout.cols.kg(null !== (w = null === d || void 0 === d ? void 0 : d.span.Rb) && void 0 !== w ? w : b, null !== (x = null === Y || void 0 === Y ? void 0 : Y.span.Rb) && void 0 !== x ? x : b);
                                            h.ua = e6(l, p, g, la, t)
                                        }
                                        if (m) {
                                            w = cFb(a, b, c);
                                            x = b && q && a.layout.cells.get(q,
                                                b);
                                            t = b && q && bFb(a, b, q);
                                            var y, z;
                                            u = i6(null !== (y = null === x || void 0 === x ? void 0 : x.span.Rb) && void 0 !== y ? y : b, null !== (z = null === x || void 0 === x ? void 0 : x.span.Ic) && void 0 !== z ? z : b, a.layout.cols);
                                            var B, E;
                                            y = a.layout.cols.kg(null !== (B = null === d || void 0 === d ? void 0 : d.span.Rb) && void 0 !== B ? B : b, null !== (E = null === x || void 0 === x ? void 0 : x.span.Rb) && void 0 !== E ? E : b);
                                            h.Da = e6(w, t, g, u, y)
                                        }
                                        if (n) {
                                            g = dFb(a, b, c);
                                            B = r && c && a.layout.cells.get(c, r);
                                            E = r && c && eFb(a, r, c);
                                            var F, H;
                                            y = i6(null !== (F = null === B || void 0 === B ? void 0 : B.span.Yb) && void 0 !== F ?
                                                F : c, null !== (H = null === B || void 0 === B ? void 0 : B.span.Tc) && void 0 !== H ? H : c, a.layout.rows);
                                            var J, K;
                                            F = a.layout.rows.kg(null !== (J = null === d || void 0 === d ? void 0 : d.span.Yb) && void 0 !== J ? J : c, null !== (K = null === B || void 0 === B ? void 0 : B.span.Yb) && void 0 !== K ? K : c);
                                            h.ra = e6(g, E, e, y, F)
                                        }
                                        if (f) {
                                            b = eFb(a, b, c);
                                            J = k && c && a.layout.cells.get(c, k);
                                            K = k && c && dFb(a, k, c);
                                            var L, R;
                                            F = i6(null !== (L = null === J || void 0 === J ? void 0 : J.span.Yb) && void 0 !== L ? L : c, null !== (R = null === J || void 0 === J ? void 0 : J.span.Tc) && void 0 !== R ? R : c, a.layout.rows);
                                            var T, W;
                                            a = a.layout.rows.kg(null !==
                                                (T = null === d || void 0 === d ? void 0 : d.span.Yb) && void 0 !== T ? T : c, null !== (W = null === J || void 0 === J ? void 0 : J.span.Yb) && void 0 !== W ? W : c);
                                            h.Ja = e6(b, K, e, F, a)
                                        }
                                        return h
                                    }
                                }, {
                                    equals: fFb
                                });
                            this.ETa = (a, b, c) => {
                                const d = new Map;
                                a.forEach(({
                                    ra: e,
                                    ua: f,
                                    Ja: g,
                                    Da: h
                                }, k) => {
                                    e && d.set(e.color, (d.get(e.color) || 0) + 1);
                                    f && d.set(f.color, (d.get(f.color) || 0) + 1);
                                    g && c && k.includes(c.id) && d.set(g.color, (d.get(g.color) || 0) + 1);
                                    h && b && k.includes(b.id) && d.set(h.color, (d.get(h.color) || 0) + 1)
                                });
                                return d
                            }
                        }
                    },
                    EFb = new GFb,
                    $Eb = new FFb;
                var iFb = class {
                    constructor(a) {
                        this.XY = a;
                        this.pSa = __c.fV;
                        this.Fha = w6((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (const p of d) {
                                var g;
                                const {
                                    textAlign: q,
                                    mTa: r
                                } = null !== (g = this.CYa(b, c, p, e)) && void 0 !== g ? g : {};
                                if (!q || !r) continue;
                                var h = r.width + ("center" === q ? 0 : this.pSa);
                                if (p.width > h) continue;
                                let t;
                                var k = void 0;
                                switch (q) {
                                    case "start":
                                    case "justify":
                                        t = b.ra(p);
                                        k = t + h;
                                        break;
                                    case "center":
                                        k = b.ra(p) + p.width / 2;
                                        t = k - h / 2;
                                        k += h / 2;
                                        break;
                                    case "end":
                                        k = b.ra(p) + p.width;
                                        t = k - h;
                                        break;
                                    default:
                                        throw new D(q);
                                }
                                for (h = d.indexOf(p); 0 <=
                                    h; h--) {
                                    var l = d[h],
                                        m = 0 > h - 1 || __c.kK(b, c, d[h - 1]),
                                        n;
                                    if (n = l === p || __c.kK(b, c, l)) n = b.ra(l), n = t < n && n < k;
                                    if (n && m) f.set(l, 1);
                                    else break
                                }
                                for (h = d.indexOf(p) + 1; h < d.length; h++) {
                                    l = d[h];
                                    if (m = __c.kK(b, c, l)) m = b.ra(l), m = t < m && m < k;
                                    if (m) f.set(l, 1);
                                    else break
                                }
                            }
                            return f
                        });
                        this.CYa = (b, c, d, e) => {
                            var f, g;
                            const h = b.layout.cells.get(c, d);
                            if (h && (h.ref.content.ref || h.ref.Ea.ref) && h.span.Yb === h.span.Tc && h.span.Rb === h.span.Ic) {
                                var {
                                    ni: k,
                                    textAlign: l
                                } = ig(__c.Sg, b.layout.attrs.get(Tg({
                                    ni: void 0,
                                    textAlign: void 0
                                }), c, d) || {});
                                if ("overflow" ===
                                    k) {
                                    var m = this.XY.OB(b, c, d);
                                    b = __c.jK(l, null === (f = h.ref.content.ref) || void 0 === f ? void 0 : f.type, null === (g = h.ref.Ea.ref) || void 0 === g ? void 0 : g.type, m ? () => m.TI.type : void 0);
                                    if ((c = e(c, d)) && b) return {
                                        textAlign: b,
                                        mTa: c
                                    }
                                }
                            }
                        }
                    }
                };
                var D6 = class extends q6 {
                    componentDidMount() {
                        const a = C(this.ref.current);
                        xc(this, b6(() => {
                            var b = this.props.scaleFactor;
                            const c = this.props.sheet;
                            var d;
                            b = null !== (d = null === b || void 0 === b ? void 0 : b.get()) && void 0 !== d ? d : 1;
                            d = c.height;
                            a.style.width = `${c.width*b}px`;
                            a.style.height = `${d*b}px`
                        }))
                    }
                    render() {
                        var a = this.props.sheet;
                        const b = aFb(a, this.a9a, this.RJa, this.wYa),
                            c = a.width,
                            d = a.height;
                        a = "rtl" === a.direction;
                        return T5("svg", {
                            ref: this.ref,
                            role: "presentation",
                            className: V5("c6a1eQ", {
                                H_CtIQ: !a,
                                _8_56PQ: a
                            }),
                            viewBox: `0 0 ${c} ${d}`,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                            children: b.map(({
                                lines: e,
                                color: f,
                                weight: g,
                                Yi: h,
                                Zi: k
                            }) => T5("path", {
                                stroke: f,
                                strokeDasharray: h,
                                strokeDashoffset: k,
                                strokeWidth: g,
                                d: e.map(({
                                    p1: l,
                                    p2: m
                                }) => `M ${l.x} ${l.y} L ${m.x} ${m.y}`).join(" ")
                            }, `${f}-${g}-${h}-${k}`))
                        })
                    }
                    constructor(...a) {
                        super(...a);
                        this.ref = kFb();
                        this.RJa = c6(() => {
                            const c = this.props.sheet;
                            return [...this.props.Tab].sort((d, e) => c.layout.cols.kg(d, e))
                        }, {
                            equals: __c.Sh()
                        });
                        this.a9a = c6(() => {
                            const c = this.props.sheet;
                            return [...this.props.xx].sort((d,
                                e) => c.layout.rows.kg(d, e))
                        }, {
                            equals: __c.Sh()
                        });
                        this.Fha = c => this.props.Xia.Fha(this.props.sheet, c, this.RJa, this.props.oV);
                        var b;
                        this.wYa = (c, d) => {
                            var e;
                            return null !== (b = null === (e = this.Fha(c)) || void 0 === e ? void 0 : e.get(d)) && void 0 !== b ? b : 0
                        }
                    }
                };
                D6 = u6([Lc], D6);
                var F6 = class a extends q6 {
                    static j(b) {
                        P(b, {
                            F3: c6,
                            XLa: c6
                        })
                    }
                    render() {
                        var b;
                        const c = this.props.TXa;
                        return o6("div", {
                            ref: this.fJa,
                            className: V5("ZTz_iA", "ltr" === this.props.sheet.direction ? "TA4X7w" : "WvuqMw"),
                            children: [(null === c || void 0 === c ? void 0 : c.BRa) && T5(E6, { ...this.props,
                                range: c.BRa.range,
                                zt: !0,
                                At: !0,
                                className: "_0C8M3w",
                                L1: this.F3
                            }), (null === c || void 0 === c ? void 0 : c.Hab) && T5(E6, { ...this.props,
                                range: c.Hab.range,
                                zt: !1,
                                At: !0,
                                className: "_7n44yg",
                                L1: this.F3
                            }), (null === c || void 0 === c ? void 0 : c.yZa) && T5(E6, { ...this.props,
                                range: c.yZa.range,
                                zt: !0,
                                At: !1,
                                className: "fF5r6w",
                                L1: this.F3
                            }), T5(E6, { ...this.props,
                                range: null === c || void 0 === c ? void 0 : null === (b = c.cab) || void 0 === b ? void 0 : b.range,
                                zt: !1,
                                At: !1,
                                className: "llILYw",
                                L1: this.XLa
                            })]
                        })
                    }
                    componentDidMount() {
                        const b = b6(() => {
                            var c = this.props,
                                d = c.scaleFactor;
                            c = c.sheet;
                            const e = this.fJa.current;
                            e && (d = d ? d.get() : 1, e.style.width = `${c.width*d}px`, e.style.height = `${c.height*d}px`)
                        });
                        xc(this, [b])
                    }
                    get F3() {
                        return {
                            type: "excluded"
                        }
                    }
                    get XLa() {
                        return {
                            type: "hidden",
                            gN: this.ZRa
                        }
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.fJa = yy();
                        this.ZRa = (c, d) => {
                            var e;
                            const f = this.props.sheet;
                            var g = this.props.TXa;
                            g = null === g || void 0 === g ? void 0 : null === (e = g.cab) || void 0 === e ? void 0 : e.range;
                            return null == g ? !0 : 0 <= f.cols.kg(c, g.Rb) && 0 >= f.cols.kg(c, g.Ic) && 0 <= f.rows.kg(d, g.Yb) && 0 >= f.rows.kg(d, g.Tc)
                        }
                    }
                };
                F6 = u6([Lc], F6);
                var E6 = class a extends q6 {
                    static j(b) {
                        P(b, {
                            dJa: c6
                        })
                    }
                    get dJa() {
                        const b = this.props.viewport,
                            c = this.props.zt,
                            d = this.props.At;
                        return null == b || !c && !d ? b : c6(() => {
                            const e = __c.Nt(b.get());
                            return __c.Ft({
                                top: d ? 0 : e.top,
                                left: c ? 0 : e.left,
                                width: e.width,
                                height: e.height
                            })
                        })
                    }
                    render() {
                        const b = this.props.sheet,
                            c = this.props.range,
                            d = this.props.L1,
                            e = this.props.LS,
                            f = this.props.zt,
                            g = this.props.At;
                        return o6("div", {
                            ref: this.vma,
                            className: V5("i0YQww", this.props.className),
                            children: [T5("div", {
                                ref: this.OFa,
                                className: "vUKoKg",
                                children: T5("div", {
                                    ref: this.PFa,
                                    children: T5(G6, { ...this.props,
                                        viewport: this.dJa,
                                        bounds: "hidden" === (null === d || void 0 === d ? void 0 : d.type) ? void 0 : c,
                                        gN: "hidden" === (null === d || void 0 === d ? void 0 : d.type) ? d.gN : void 0
                                    })
                                })
                            }), e && T5(e, {
                                sheet: b,
                                range: c,
                                zt: f,
                                At: g
                            })]
                        })
                    }
                    componentDidMount() {
                        const b = b6(() => {
                                var h = this.props,
                                    k = h.scaleFactor,
                                    l = h.sheet;
                                const m = h.range;
                                var n = this.vma.current;
                                const p = this.OFa.current;
                                h = this.PFa.current;
                                k = k ? k.get() : 1;
                                const q = m ? l.ra(m.Ic) + m.Ic.width - l.ra(m.Rb) : l.width,
                                    r = m ? l.ua(m.Tc) + m.Tc.height -
                                    l.ua(m.Yb) : l.height;
                                n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                n = "rtl" === l.direction;
                                n = m ? l.ra(m.Rb) * k * (n ? 1 : -1) : 0;
                                l = m ? -l.ua(m.Yb) * k : 0;
                                h && (h.style.transform = `translate(${n}px, ${l}px)`)
                            }),
                            c = this.props.sheet;
                        var d = this.props.u4;
                        const e = this.props.zt,
                            f = this.props.At,
                            g = null === d || void 0 === d ? void 0 : d(c, e, f);
                        d = b6(() => {
                            const h = this.vma.current;
                            if (null != h) {
                                var k = e || f ? "sticky" : "relative",
                                    l = f ? "0px" : "unset",
                                    m = e ? "0px" : "unset",
                                    n = e ? "0px" : "unset",
                                    p = "rtl" === c.direction;
                                if (null == g) h.style.position = k, h.style.top = l, h.style.left = p ? "unset" : m, h.style.right = p ? n : "unset";
                                else {
                                    const x = g.get();
                                    var q;
                                    h.style.position = null !== (q = x.position) && void 0 !== q ? q : k;
                                    var r;
                                    h.style.top = null !== (r = x.top) && void 0 !== r ? r : l;
                                    var t;
                                    h.style.left = p ? "unset" : null !== (t = x.left) && void 0 !== t ? t : m;
                                    var u;
                                    h.style.right = p ? null !== (u = x.right) && void 0 !== u ? u : n : "unset";
                                    var w;
                                    h.style.transform = null !== (w = x.transform) && void 0 !== w ? w : "unset"
                                }
                            }
                        });
                        xc(this, [b, d])
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.vma = yy();
                        this.OFa = yy();
                        this.PFa = yy()
                    }
                };
                E6 = u6([Lc], E6);
                var HFb = class {
                        constructor() {
                            this.IT = new Map;
                            this.lbb = (a, b, c, d) => {
                                const e = new HFb;
                                for (const [f, g] of this.IT) c.has(g.qa) && e.IT.set(f, g);
                                c = `${b.id}:${a.id}`;
                                d ? e.IT.set(c, {
                                    width: d.width,
                                    height: d.height,
                                    qa: a,
                                    column: b
                                }) : e.IT.delete(c);
                                return e
                            };
                            this.oV = (a, b) => this.IT.get(`${b.id}:${a.id}`)
                        }
                    },
                    G6 = class a extends q6 {
                        static j(b) {
                            P(b, {
                                dM: t6.shallow,
                                Qo: c6,
                                bounds: c6,
                                xx: c6({
                                    equals: k6.shallow
                                }),
                                kra: c6({
                                    equals: k6.shallow
                                }),
                                iua: s6,
                                D2: s6.bound
                            })
                        }
                        get Qo() {
                            var b;
                            const c = null === (b = this.props.Kv) || void 0 === b ? void 0 : b.get();
                            if (null != c && 0 !== c.length) return new __c.VG(c)
                        }
                        render() {
                            var b;
                            return o6("div", {
                                ref: oFb(this.pd, null === (b = this.Qo) || void 0 === b ? void 0 : b.fg),
                                children: [T5("div", {
                                    ref: this.iva,
                                    className: "_5YlOqQ"
                                }), T5("div", {
                                    ref: this.rva,
                                    className: "_XCmKw"
                                }), this.dM.map(c => c.U5a), T5(this.qba, {
                                    oV: this.state.oV
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = j6(() => [this.kra, this.xx], ([e, f]) => this.iua(e, f), {
                                    fireImmediately: !0
                                }),
                                c = b6(() => {
                                    var e = this.props,
                                        f = e.scaleFactor;
                                    e = e.sheet;
                                    const g = this.pd.current;
                                    g && (f = f ? f.get() : 1, g.style.width =
                                        `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.dM.map(e => hFb(e));
                            xc(this, [c, b, ...d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.bounds;
                            var d, e, f, g;
                            return {
                                Rb: null !== (d = null === c || void 0 === c ? void 0 : c.Rb) && void 0 !== d ? d : b.cols.first(),
                                Ic: null !== (e = null === c || void 0 === c ? void 0 : c.Ic) && void 0 !== e ? e : b.cols.last(),
                                Yb: null !== (f = null === c || void 0 === c ? void 0 : c.Yb) && void 0 !== f ? f : b.rows.first(),
                                Tc: null !== (g = null === c || void 0 === c ? void 0 : c.Tc) && void 0 !== g ? g : b.rows.last()
                            }
                        }
                        get xx() {
                            const b = this.bounds,
                                c = this.props.sheet;
                            var d = this.props.viewport;
                            const e = this.props.scaleFactor.get();
                            var f = 500 * e,
                                g = null === d || void 0 === d ? void 0 : d.get();
                            d = g ? g.tl.y - f : b.Yb ? c.ua(b.Yb) : 0;
                            f = g ? g.br.y + f : b.Tc ? c.ua(b.Tc) + b.Tc.height : 0;
                            g = new Map;
                            for (let h = b.Yb; null != h && null != b.Tc && 0 >= c.rows.kg(h, b.Tc); h = c.rows.next(h)) {
                                const k = c.ua(h);
                                if (!(k + h.height < d)) {
                                    if (k > f) break;
                                    g.set(h, k * e)
                                }
                            }
                            return g
                        }
                        get kra() {
                            const b = this.bounds,
                                c = this.props.sheet;
                            var d = this.props.viewport;
                            const e = this.props.scaleFactor.get();
                            var f = 100 * e,
                                g = null === d || void 0 ===
                                d ? void 0 : d.get();
                            d = g ? g.tl.x - f : b.Rb ? c.ra(b.Rb) : 0;
                            f = g ? g.br.x + f : b.Ic ? c.ra(b.Ic) + b.Ic.width : 0;
                            g = new Map;
                            for (let h = b.Rb; null != h && null != b.Ic && 0 >= c.cols.kg(h, b.Ic); h = c.cols.next(h)) {
                                const k = c.ra(h);
                                if (!(k + h.width < d)) {
                                    if (k > f) break;
                                    g.set(h, k * e)
                                }
                            }
                            return g
                        }
                        iua(b, c) {
                            const d = C(this.iva.current),
                                e = C(this.rva.current),
                                f = [],
                                g = new Map;
                            for (const h of this.SMa) c.has(h.qa) ? g.set(h.qa, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new IFb(this.D2, h), d.appendChild(c.I1), e.appendChild(c.K1), this.SMa.push(c)),
                                c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        D2(b, c) {
                            const d = this.props.Rea,
                                e = this.props.sheet,
                                f = this.props.gN;
                            b = new JFb(this.props.IH, this.props.Mi, d(b, c), e, b, c, f, this.pX);
                            xc(this, hFb(b));
                            this.dM.push(b);
                            return b
                        }
                        constructor(b) {
                            super(b);
                            a.j(this);
                            this.pd = yy();
                            this.iva = yy();
                            this.rva = yy();
                            this.SMa = [];
                            this.dM = [];
                            this.qba = X5(c => {
                                const d = [...this.xx.keys()],
                                    e = [...this.kra.keys()];
                                return T5(this.props.nPa, {
                                    xx: d,
                                    Tab: e,
                                    oV: c.oV
                                })
                            });
                            this.pX = (c, d, e) => {
                                this.setState(f => {
                                    const g = e();
                                    return f.lbb(d, c, this.xx, g)
                                })
                            };
                            this.state = new HFb
                        }
                    };
                G6 = u6([Lc], G6);
                var IFb = class {
                        static j(a) {
                            P(a, {
                                update: s6
                            })
                        }
                        update(a, b, c) {
                            [this.I1, this.K1].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.qa = b;
                            for (const [d] of c) c = this.dM.get(d), c || (c = this.D2(d, b), this.dM.set(d, c), this.I1.appendChild(c.Qda), this.K1.appendChild(c.kN)), c.update(b)
                        }
                        hide() {
                            [this.I1, this.K1].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            IFb.j(this);
                            this.D2 = a;
                            this.qa = b;
                            this.I1 = document.createElement("div");
                            this.K1 = document.createElement("div");
                            this.dM = new Map
                        }
                    },
                    JFb = class {
                        static j(a) {
                            P(a, {
                                v2: t6.ref,
                                qa: t6.ref,
                                Zs: c6,
                                attrs: c6,
                                kW: c6,
                                renderer: c6,
                                update: s6
                            })
                        }
                        get U5a() {
                            return this.v2
                        }
                        get Zs() {
                            const a = this.sheet.layout.cells.get(this.qa, this.col);
                            if (!a || a.span.Yb === this.qa && a.span.Rb === this.col) return a ? a.ref : void 0
                        }
                        get attrs() {
                            return this.sheet.layout.attrs.get(Tg({
                                ni: 0,
                                textAlign: 0,
                                direction: 0
                            }), this.qa, this.col) || {}
                        }
                        get kW() {
                            return this.gN ? !this.gN(this.col, this.qa) : !1
                        }
                        get renderer() {
                            const a = this.Zs;
                            if (a && (a.content.ref || a.Ea.ref)) return this.IH({
                                context: {
                                    qa: this.qa,
                                    col: this.col,
                                    sheet: this.sheet,
                                    attrs: this.attrs
                                },
                                Wt: this.pX,
                                Mi: this.Mi
                            })
                        }
                        update(a) {
                            this.qa = a;
                            this.wZ.qa = a
                        }
                        constructor(a, b, c, d, e, f, g, h) {
                            JFb.j(this);
                            var k, l, m, n, p, q;
                            this.IH = a;
                            this.wZ = c;
                            this.sheet = d;
                            this.col = e;
                            this.gN = g;
                            this.Qda = document.createElement("div");
                            this.kN = document.createElement("div");
                            this.wE = document.createElement("div");
                            this.jB = document.createElement("div");
                            this.$X = document.createElement("div");
                            this.W1a = () => {
                                if (this.renderer) {
                                    var r = "react" === this.renderer.type ? this.$X : this.jB;
                                    if (0 !== r.childNodes.length &&
                                        (r = r.childNodes[0], r instanceof HTMLElement)) return {
                                        width: r.clientWidth,
                                        height: r.clientHeight
                                    }
                                }
                            };
                            this.qa = f;
                            this.Qda.className = "_2JFriw";
                            this.kN.className = "imy9ug";
                            this.wE.className = V5("pDMp7w", {
                                _0yZ6Qg: "text3" !== (null === (l = this.Zs) || void 0 === l ? void 0 : null === (k = l.content.ref) || void 0 === k ? void 0 : k.type),
                                qhF5uA: "text3" !== (null === (n = this.Zs) || void 0 === n ? void 0 : null === (m = n.content.ref) || void 0 === m ? void 0 : m.type) && "text2" !== (null === (q = this.Zs) || void 0 === q ? void 0 : null === (p = q.content.ref) || void 0 === p ? void 0 :
                                    p.type)
                            });
                            this.jB.className = "_30B9pw";
                            this.wE.appendChild(this.jB);
                            this.kN.appendChild(this.wE);
                            this.$X.className = "G7zH2w";
                            this.pX = () => {
                                h(this.col, this.qa, this.W1a)
                            };
                            this.Mi = r => T5(b, { ...r,
                                Wt: this.pX
                            })
                        }
                    };
                var l6 = class extends q6 {
                    render() {
                        const a = this.props.sheet,
                            b = this.props.Kv,
                            c = this.props.u4,
                            d = this.props.IH,
                            e = this.props.Hd,
                            f = this.props.Mi,
                            g = this.props.viewport,
                            h = this.props.LS;
                        return T5("div", {
                            className: V5("SNkrHw", "ltr" === a.direction ? "TA4X7w" : "WvuqMw"),
                            ...e,
                            children: T5(F6, {
                                IH: d,
                                Mi: f,
                                nPa: this.qba,
                                Rea: this.Rea,
                                sheet: a,
                                Kv: b,
                                u4: c,
                                scaleFactor: this.scaleFactor,
                                viewport: g,
                                LS: h
                            })
                        })
                    }
                    get scaleFactor() {
                        return this.props.scaleFactor ? this.props.scaleFactor : c6(() => 1)
                    }
                    constructor(...a) {
                        super(...a);
                        this.qba = X5(b =>
                            T5(D6, { ...b,
                                sheet: this.props.sheet,
                                scaleFactor: this.scaleFactor,
                                Xia: this.props.Xia
                            }));
                        this.Rea = (b, c) => new __c.Uza(this.props.Uw, this.props.sheet, b, c, this.scaleFactor, this.Ly, this.Oy);
                        this.Ly = (b, c) => {
                            var d, e;
                            return null === (d = (e = this.props).Ly) || void 0 === d ? void 0 : d.call(e, this.props.sheet, b, c)
                        };
                        this.Oy = (b, c) => {
                            var d, e;
                            return null === (d = (e = this.props).Oy) || void 0 === d ? void 0 : d.call(e, this.props.sheet, b, c)
                        }
                    }
                };
                l6 = u6([Lc], l6);
                __c.Zza = {
                    u_a: function(a) {
                        const b = a.hm,
                            c = a.Pd,
                            d = a.Jc,
                            e = a.Em,
                            f = a.XY,
                            g = a.Uw,
                            h = a.KS;
                        BEb({
                            Tw: a.Tw,
                            Ge: a.Ge,
                            V9a: a.fL
                        });
                        const k = jFb({
                            IH: h,
                            XY: f,
                            Uw: g
                        });
                        b.Iba = UEb({
                            Lq: k
                        });
                        c.rba = IEb({
                            Lq: k
                        });
                        ({
                            rPa: a
                        } = REb({
                            Lq: k,
                            ye: e(),
                            cJa: new yFb
                        }));
                        d.xo.Hba = a;
                        const {
                            zNa: l,
                            ANa: m,
                            yNa: n
                        } = HEb();
                        return {
                            Isa: X5(p => T5(pFb, { ...p,
                                Lq: k,
                                qPa: l,
                                sPa: m,
                                oPa: n,
                                Mi: qFb
                            }))
                        }
                    }
                };
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/41868af36fb33a36.js.map