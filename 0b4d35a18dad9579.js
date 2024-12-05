(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [7235], {

        /***/
        400681: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var klb, llb, olb, plb, qlb, NY, ulb, vlb, slb, ylb, zlb, Alb, Flb, XY, Dlb, TY, UY;
                __c.KY = function(a) {
                    return __c.hC({
                        design_id: a.zf,
                        doctype_id: a.pf,
                        category_id: a.Do,
                        mode: a.mode,
                        access_role: a.jo,
                        present_session_id: a.$5a,
                        num_pages_in_design: a.Ska,
                        num_all_pages_in_design: a.Z2a,
                        current_page_index: a.Wh,
                        location: a.location
                    })
                };
                klb = function(a) {
                    var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                    try {
                        const c = __c.Gr(a),
                            d = c instanceof __c.sr ? c.Ip() : c;
                        return __c.Ys(b, e => {
                            e = __c.Gr(e);
                            e = e instanceof __c.sr ? __c.XJ(e, d) : e;
                            return Math.abs(__c.Yr(e, d))
                        })
                    } catch (c) {
                        if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                        throw c;
                    }
                };
                llb = function(a) {
                    return a.trim().split(/\s+/, 2).map(b => __c.$s(b)[0]).join("")
                };
                olb = function(a = "") {
                    a = mlb(a);
                    a = Math.floor(a() * nlb.length);
                    return nlb[a]
                };
                plb = function(a) {
                    switch (a.type) {
                        case "GROUPED_COLUMN":
                        case "GROUPED_ROW":
                            return {
                                spacing: a.spacing,
                                P: a.P,
                                Va: { ...a.Va,
                                    alignment: { ...a.Va.alignment
                                    }
                                }
                            };
                        case "STACKED_ROW":
                        case "STACKED_COLUMN":
                            return {
                                spacing: a.spacing,
                                P: a.P,
                                Va: { ...a.Va,
                                    alignment: { ...a.Va.alignment
                                    }
                                },
                                Rh: { ...a.Rh,
                                    alignment: { ...a.Va.alignment
                                    }
                                }
                            };
                        case "PIE":
                        case "DONUT":
                            break;
                        case "LINE":
                            return {
                                cc: a.cc,
                                qc: a.qc
                            };
                        case "STACKED_AREA":
                            break;
                        case "SCATTERPLOT":
                        case "BUBBLEPLOT":
                            return {
                                kz: a.kz,
                                qc: a.qc
                            };
                        case "PACKED_CIRCLES":
                            break;
                        case "TREEMAP":
                            break;
                        case "HISTOGRAM":
                            return {
                                P: a.P
                            };
                        case "RADAR":
                            return {
                                cc: a.cc,
                                eJ: a.eJ
                            };
                        case "FUNNEL":
                            break;
                        case "BAR_RACE":
                            return {
                                spacing: a.spacing,
                                nK: a.nK
                            };
                        case "PROGRESS":
                        case "PICTOGRAM":
                            break;
                        case "POPULATION_PYRAMID":
                        case "DUMBBELL":
                        case "LOLLIPOP":
                        case "SUNBURST":
                        case "TIME_SERIES":
                            break;
                        default:
                            throw new __c.D(a);
                    }
                };
                qlb = function({
                    text: a,
                    fontSize: b,
                    fontFamily: c,
                    fontWeight: d,
                    textAlign: e,
                    textBaseline: f
                }) {
                    return `${a}.${b.toFixed(1)}.${c}.${__c.rG(d)}.${e}.${f}`
                };
                NY = function({
                    text: a,
                    fontSize: b,
                    fontFamily: c,
                    fontWeight: d,
                    textAlign: e = "start",
                    textBaseline: f = "alphabetic",
                    Co: g
                }) {
                    __c.A(rlb(), "baseMeasureText should only be called from within a reactive context");
                    const h = qlb({
                        text: a,
                        fontSize: b,
                        fontFamily: c,
                        fontWeight: d,
                        textAlign: e,
                        textBaseline: f
                    });
                    var k = LY.get(h);
                    if (k) return {
                        bX: k.get(),
                        Co: g
                    };
                    k = MY(() => {
                        g = g || slb({
                            fontSize: b,
                            fontFamily: c,
                            textAlign: e,
                            textBaseline: f,
                            fontWeight: d
                        });
                        const l = g.measureText(a),
                            m = Math.ceil(l.actualBoundingBoxAscent + 1),
                            n = Math.ceil(l.actualBoundingBoxDescent +
                                1),
                            p = Math.ceil(l.actualBoundingBoxLeft),
                            q = Math.ceil(l.actualBoundingBoxRight);
                        return {
                            actualBoundingBoxAscent: m,
                            actualBoundingBoxDescent: n,
                            actualBoundingBoxLeft: p,
                            actualBoundingBoxRight: q,
                            fontBoundingBoxAscent: l.fontBoundingBoxAscent,
                            fontBoundingBoxDescent: l.fontBoundingBoxDescent,
                            height: m + n,
                            width: p + q,
                            MM: l.width
                        }
                    });
                    LY.set(h, k);
                    tlb(k, () => {
                        LY.delete(h)
                    });
                    return {
                        bX: k.get(),
                        Co: g
                    }
                };
                ulb = function({
                    maxWidth: a,
                    ...b
                }) {
                    return `${qlb(b)}.${a}`
                };
                vlb = function({
                    text: a,
                    fontSize: b,
                    fontFamily: c,
                    fontWeight: d,
                    textAlign: e = "start",
                    textBaseline: f = "alphabetic",
                    maxWidth: g,
                    Co: h
                }) {
                    __c.A(rlb(), "baseTruncateText should only be called from within a reactive context");
                    const k = ulb({
                        text: a,
                        maxWidth: g,
                        fontSize: b,
                        fontWeight: d,
                        fontFamily: c,
                        textAlign: e,
                        textBaseline: f
                    });
                    var l = OY.get(k);
                    if (l) return {
                        Aqa: l.get(),
                        Co: h
                    };
                    l = MY(() => {
                        let m;
                        ({
                            bX: m,
                            Co: h
                        } = NY({
                            text: a,
                            fontSize: b,
                            fontFamily: c,
                            fontWeight: d,
                            textAlign: e,
                            textBaseline: f,
                            Co: h
                        }));
                        if (m.width <= g) return { ...m,
                            text: a
                        };
                        do {
                            a =
                                a.substring(0, a.length - 1).trim();
                            if (!a.length) return {
                                text: a,
                                width: 0,
                                height: 0,
                                actualBoundingBoxAscent: 0,
                                actualBoundingBoxDescent: 0,
                                actualBoundingBoxLeft: 0,
                                actualBoundingBoxRight: 0,
                                MM: 0,
                                fontBoundingBoxAscent: 0,
                                fontBoundingBoxDescent: 0
                            };
                            ({
                                Co: h,
                                bX: m
                            } = NY({
                                text: a + "\u2026",
                                fontSize: b,
                                fontFamily: c,
                                fontWeight: d,
                                textAlign: e,
                                textBaseline: f,
                                Co: h
                            }))
                        } while (m.width > g);
                        return { ...m,
                            text: a + "\u2026"
                        }
                    });
                    OY.set(k, l);
                    tlb(l, () => {
                        OY.delete(k)
                    });
                    return {
                        Aqa: l.get(),
                        Co: h
                    }
                };
                slb = function({
                    fontSize: a,
                    fontFamily: b,
                    textAlign: c,
                    textBaseline: d,
                    fontWeight: e
                }) {
                    var f = document.createElement("canvas");
                    f = __c.C(f.getContext("2d"), "could not initialize measuring canvas context");
                    f.font = `${e?__c.rG(e)+" ":""}${a}px '${b}'`;
                    f.textAlign = c;
                    f.textBaseline = d;
                    return f
                };
                __c.xlb = function(a) {
                    const b = wlb();
                    PY(() => {
                        b.current = a
                    }, [a]);
                    return b.current
                };
                ylb = function(a, b, c, d = "fit-viewport") {
                    a = __c.Uj(a);
                    b /= a.width;
                    c /= a.height;
                    switch (d) {
                        case "fit-viewport":
                            d = Math.min(b, c);
                            break;
                        case "fit-width":
                            d = b;
                            break;
                        case "fit-height":
                            d = c;
                            break;
                        default:
                            throw new __c.D(d);
                    }
                    return {
                        width: a.width * d,
                        height: a.height * d,
                        scale: d
                    }
                };
                zlb = function(a, b) {
                    a.Lma.delete(b);
                    a.ab.yq(b);
                    const {
                        startTime: c
                    } = __c.pL(a.ab, b);
                    a.ab.seek(b, c)
                };
                __c.RY = function(a, b) {
                    return (0, __c.QY)(() => b.flatMap(c => a.oQa(c)), (c, d) => {
                        a.ab.setActive(!0);
                        null === d || void 0 === d ? void 0 : d.forEach(e => {
                            c.includes(e) || zlb(a, e)
                        });
                        c.length && a.mi(c)
                    }, {
                        fireImmediately: !0
                    })
                };
                Alb = function(a) {
                    const b = a.oa || 0;
                    return {
                        oa: b,
                        je: b + (a.J || Infinity)
                    }
                };
                Flb = function({
                    ea: a,
                    fm: b,
                    bc: c,
                    wg: d,
                    zv: e
                }) {
                    const f = SY(function({
                            M: l,
                            W2: m,
                            disableVideo: n,
                            Dv: p,
                            page: q,
                            tp: r,
                            Zd: t
                        }) {
                            return TY(c, {
                                page: q,
                                bd: l.height,
                                Hc: l.width,
                                fit: "contain",
                                qj: !0,
                                xi: !n,
                                sp: m ? "static-with-interactive-fallback" : "interactive",
                                sD: !1,
                                Zd: t,
                                Dv: p,
                                cZ: !0,
                                tp: r,
                                Ofa: __c.vj(q)
                            })
                        }),
                        g = SY(function({
                            M: l,
                            W2: m,
                            disableVideo: n,
                            Dv: p,
                            tp: q,
                            Zd: r,
                            cY: t,
                            Yr: u,
                            cL: w
                        }) {
                            return TY(d, {
                                ea: a.get(),
                                bc: c,
                                na: e.Mv(),
                                l6: l,
                                cY: t,
                                Yr: u,
                                qj: !0,
                                xi: !n,
                                sp: m ? "static-with-interactive-fallback" : "interactive",
                                tp: q,
                                sD: __c.iA.rb,
                                S8a: "smooth" ===
                                    b.get().behavior,
                                Zd: r,
                                Dv: p,
                                cZ: !0,
                                cL: w
                            })
                        }),
                        h = ({
                            naa: l,
                            Xla: m
                        }) => {
                            PY(() => {
                                null === m || void 0 === m ? void 0 : m(l.width, l.height)
                            }, [m, l.height, l.width]);
                            return null
                        },
                        k = ({
                            iy: l,
                            hla: m
                        }) => {
                            PY(() => {
                                null === m || void 0 === m ? void 0 : m(l.width, l.height)
                            }, [m, l.height, l.width]);
                            return null
                        };
                    return SY(function({
                        Zsa: l,
                        MI: m,
                        W2: n = !1,
                        fkb: p = !1,
                        disableVideo: q = !1,
                        Eya: r,
                        N3: t,
                        Fya: u,
                        muted: w = !1,
                        Xla: x,
                        hla: y,
                        page: z,
                        tp: B,
                        PHa: E = !1,
                        FJa: F = !1,
                        VLa: H = "large",
                        cY: J = 1,
                        Yr: K = 1,
                        cL: L = !1
                    }) {
                        function R({
                            naa: ea,
                            transformStyle: ka,
                            Ks: Z,
                            Dv: va
                        }) {
                            return UY("div", {
                                className: VY("_0o7QeQ", E && "C_TL5Q"),
                                style: {
                                    transform: ka,
                                    width: ea.width,
                                    height: ea.height
                                },
                                ref: Z,
                                children: [0 < ea.width && 0 < ea.height && TY(ra, {
                                    M: ea,
                                    W2: n,
                                    disableVideo: q,
                                    Dv: va,
                                    tp: B,
                                    page: z,
                                    Zd: T,
                                    cY: J,
                                    Yr: K,
                                    cL: L
                                }), p && TY(__c.Blb, {})]
                            })
                        }
                        const T = Clb(() => ({
                                E8: q ? 0 : void 0,
                                volume: w ? 0 : 1
                            }), [q, w]),
                            W = e.getDimensions(),
                            Y = z.M,
                            la = __c.Vj(W),
                            ia = __c.Vj(Y || W),
                            ra = m ? f : g;
                        return TY(__c.WY, {
                            wd: Y || W,
                            Eya: r,
                            Fya: u,
                            N3: t,
                            children: ({
                                iy: ea,
                                oda: ka,
                                Cqa: Z
                            }) => {
                                ka = ia ? Z : ka;
                                return UY(Dlb, {
                                    children: [TY(h, {
                                        Xla: x,
                                        naa: ka
                                    }), TY(k, {
                                        hla: y,
                                        iy: ea
                                    }), UY("div", {
                                        className: "JqqAIg",
                                        role: "none",
                                        children: [l ? TY(l, {
                                            iy: ea,
                                            M: ka,
                                            children: va => R({
                                                naa: {
                                                    width: va.width,
                                                    height: va.height
                                                },
                                                Dv: va.uca,
                                                transformStyle: va.transformStyle,
                                                Ks: va.Ks
                                            })
                                        }) : R({
                                            naa: ka
                                        }), ia && !la && F && TY(__c.Elb, {
                                            size: H
                                        })]
                                    })]
                                })
                            }
                        })
                    })
                };
                XY = __webpack_require__(443763);
                Dlb = XY.Fragment;
                TY = XY.jsx;
                UY = XY.jsxs;
                var Glb = __webpack_require__,
                    Hlb = Glb(993864),
                    VY = Glb.n_x(Hlb)();
                var SY = __webpack_require__(736241).Pi;
                var YY = __webpack_require__(875604),
                    Ilb = YY.Component,
                    ZY = YY.memo,
                    PY = YY.useEffect,
                    Jlb = YY.useId,
                    Clb = YY.useMemo,
                    wlb = YY.useRef,
                    Klb = YY.useState;
                var $Y, rlb, aZ, MY, bZ, tlb, Mlb;
                $Y = __webpack_require__(42782);
                rlb = $Y.SW;
                aZ = $Y.aD;
                __c.Llb = $Y.p6;
                MY = $Y.Fl;
                bZ = $Y.LO;
                tlb = $Y.pA;
                __c.QY = $Y.U5;
                Mlb = $Y.z;
                var cZ = __webpack_require__(649799).Om;
                var Nlb = __webpack_require__(240236).gn;
                var Olb = __webpack_require__(984956).Z;
                var mlb = __webpack_require__(503216);
                __c.dZ = {
                    xxsmall: 16,
                    xsmall: 24,
                    small: 32,
                    medium: 40,
                    large: 48,
                    xlarge: 64,
                    xxlarge: 80,
                    xxxlarge: 160
                };
                var nlb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                    try {
                        return __c.zr(__c.yr(a))
                    } catch (b) {
                        return "#8e8e8e"
                    }
                });
                var Plb = ZY(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        YM: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    d ? (a = __c.Gr(d), a = a instanceof __c.sr ? __c.Cr(a) : __c.zr(a)) : a = e ? olb(e) : "#8e8e8e";
                    var n = Jlb();
                    let p;
                    switch (l) {
                        case "circle":
                            p = TY("defs", {
                                children: TY("clipPath", {
                                    id: n,
                                    children: TY("circle", {
                                        id: `${n}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            p = TY("defs", {
                                children: TY("clipPath", {
                                    id: n,
                                    children: TY("rect", {
                                        id: `${n}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new __c.D(l);
                    }
                    switch (l) {
                        case "circle":
                            n = TY("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: a,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${n})`,
                                stroke: c,
                                className: VY("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            n = TY("rect", {
                                width: "100%",
                                height: "100%",
                                fill: a,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${n})`,
                                stroke: c,
                                className: VY("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new __c.D(l);
                    }
                    return TY("span", {
                        role: f,
                        "aria-label": g,
                        className: VY("VaW8_A", {
                            cUFFRA: "square" === l
                        }),
                        ...m,
                        children: UY("svg", {
                            className: h,
                            style: k,
                            children: [p, n, TY("text", {
                                x: "50%",
                                y: "50%",
                                "aria-hidden": "true",
                                textAnchor: "middle",
                                fill: klb(a),
                                fontWeight: "500",
                                fontSize: "50%",
                                children: TY("tspan", {
                                    dy: "0.36em",
                                    letterSpacing: "0.01rem",
                                    children: llb(b).toUpperCase()
                                })
                            })]
                        })
                    })
                });
                var Qlb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var Rlb = ({
                    borderColor: a,
                    eGa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => TY("span", {
                    className: VY(d, {
                        JwH6AA: a,
                        QJpRHw: !a
                    }),
                    style: {
                        backgroundImage: `url(${b})`,
                        borderColor: a && `${a}`,
                        ...e
                    },
                    role: f,
                    "aria-label": "img" === f ? c : void 0,
                    ...g
                });
                __c.Slb = ({
                    name: a,
                    UQa: b,
                    ariaLabel: c,
                    YM: d,
                    backgroundColor: e,
                    borderColor: f,
                    pp: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = VY("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: "square" === l
                    });
                    b = b || "presentation";
                    return g ? TY(Rlb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        eGa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? TY(Plb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        YM: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : TY(Rlb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        eGa: Qlb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
                __c.eZ = class a extends Ilb {
                    static j(b) {
                        __c.P(b, {
                            open: bZ.ref,
                            eea: bZ.ref,
                            dla: aZ.bound,
                            Sfa: aZ
                        })
                    }
                    render() {
                        const {
                            title: b,
                            iF: c,
                            $ob: d = "primary",
                            Kfa: e = !1,
                            yva: f,
                            role: g = "dialog",
                            mode: h,
                            gG: k,
                            hh: l
                        } = this.props, m = void 0 === this.props.open ? this.open : this.props.open;
                        var n;
                        const p = null !== (n = this.props.buttons) && void 0 !== n ? n : [this.props.button];
                        return TY(__c.zz, {
                            count: 2,
                            children: (q, r) => TY(__c.Ubb, {
                                Bb: q,
                                ud: c ? r : void 0,
                                open: m,
                                Qb: e ? this.GSa : void 0,
                                mode: h,
                                gG: k,
                                role: g,
                                hh: l,
                                children: TY(__c.ON, {
                                    className: VY("sheet" !== h && "j4W2gA"),
                                    padding: {
                                        default: "3u",
                                        Ee: "4u"
                                    },
                                    children: UY(__c.$z, {
                                        spacing: "3u",
                                        children: [UY(__c.$z, {
                                            align: "start",
                                            spacing: "2u",
                                            children: [TY(__c.hT, {
                                                id: q,
                                                tagName: "h1",
                                                alignment: "start",
                                                children: b
                                            }), c && ("string" === typeof c ? TY(__c.Yz, {
                                                id: r,
                                                tone: "secondary",
                                                children: c
                                            }) : TY("div", {
                                                id: r,
                                                children: c
                                            })), f && TY(__c.Rib, {
                                                label: f,
                                                onChange: this.dla
                                            })]
                                        }), TY(__c.BN, {
                                            reversed: !0,
                                            spacing: "2u",
                                            Kva: "small",
                                            collapsed: "sheet" === h,
                                            children: p.map((t, u) => TY(__c.CN, {
                                                width: 0 === u ? "content" : "containedContent",
                                                children: TY(__c.DN, {
                                                    stretch: !0,
                                                    variant: 0 === u ? d : "secondary",
                                                    ...t,
                                                    className: t.className,
                                                    onClick: () => this.JWa(t.onClick)
                                                })
                                            }, u))
                                        })]
                                    })
                                })
                            })
                        })
                    }
                    dla(b, c) {
                        var d, e;
                        this.eea = c;
                        null === (d = (e = this.props).dla) || void 0 === d ? void 0 : d.call(e, c)
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.open = !0;
                        this.eea = !1;
                        this.JWa = c => {
                            null === c || void 0 === c ? void 0 : c({
                                checkboxChecked: !(!this.props.yva || !this.eea)
                            });
                            this.Sfa()
                        };
                        this.GSa = () => {
                            var c, d;
                            null === (c = (d = this.props).rX) || void 0 === c ? void 0 : c.call(d);
                            this.Sfa()
                        };
                        this.Sfa = () => {
                            var c, d;
                            null === (c = (d = this.props).onClose) ||
                                void 0 === c ? void 0 : c.call(d);
                            this.open = !1
                        }
                    }
                };
                __c.eZ = Nlb([__c.Lc], __c.eZ);
                __c.RE = class {
                    static j(a) {
                        __c.P(a, {
                            jb: MY,
                            xBa: MY,
                            fga: MY
                        })
                    }
                    get base() {
                        var a, b;
                        return null !== (b = null === (a = this.A.transition) || void 0 === a ? void 0 : a.base) && void 0 !== b ? b : this._base
                    }
                    get Jb() {
                        var a, b;
                        return null !== (b = null === (a = this.A.transition) || void 0 === a ? void 0 : a.Jb) && void 0 !== b ? b : this.Oba
                    }
                    get jb() {
                        var a;
                        const b = null === (a = this.A.transition) || void 0 === a ? void 0 : a.Jb.config.ref;
                        if (null != b && this.fja(b)) return b;
                        a = this.Jb.config.ref;
                        this.fja(a) && (this.xGa = a);
                        return this.xGa
                    }
                    get xBa() {
                        return !this.fja(this.Jb.config.ref)
                    }
                    get iI() {
                        return this.Jb.id
                    }
                    get Sp() {
                        return this.jb.type
                    }
                    get fga() {
                        return {
                            Kd: this.Kd,
                            ke: this.ke,
                            fontSize: this.fontSize,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontStyle: this.fontStyle,
                            nk: this.nk,
                            yp: this.yp,
                            ...plb(this.jb)
                        }
                    }
                    get data() {
                        return this.base.data
                    }
                    get Eg() {
                        return this.base.Eg
                    }
                    get Zda() {
                        return this.base.Zda
                    }
                    get tR() {
                        return !!this.Jb.Ln
                    }
                    get yp() {
                        return !this.Jb.vn
                    }
                    get di() {
                        return !this.Jb.Dt
                    }
                    get Jl() {
                        return this.Jb.Jl
                    }
                    get zoom() {
                        return this.A.zoom
                    }
                    get width() {
                        return this.A.width
                    }
                    get height() {
                        return this.A.height
                    }
                    get rotation() {
                        return this.A.rotation
                    }
                    get Of() {
                        return this.A.Of
                    }
                    get fontSize() {
                        return this.A.fontSize
                    }
                    get Gv() {
                        return this.A.Gv
                    }
                    get fontFamily() {
                        return this.A.fontFamily
                    }
                    get nk() {
                        return this.A.nk
                    }
                    get fontStyle() {
                        return this.A.fontStyle
                    }
                    get fontWeight() {
                        return this.A.fontWeight
                    }
                    get Qf() {
                        return this.A.Qf
                    }
                    get Pe() {
                        return this.A.Pe
                    }
                    get cf() {
                        return this.A.cf
                    }
                    get T9() {
                        return this.A.T9
                    }
                    get Kd() {
                        return this.A.Kd
                    }
                    get ke() {
                        return this.A.ke
                    }
                    get margins() {
                        return this.A.margins
                    }
                    get ib() {
                        return this.A.ib
                    }
                    get qp() {
                        return this.A.qp
                    }
                    get yk() {
                        return this.A.yk
                    }
                    get oj() {
                        return this.A.oj
                    }
                    get kT() {
                        return this.A.kT
                    }
                    get Oq() {
                        return this.A.Oq
                    }
                    get Nq() {
                        return this.A.Nq
                    }
                    get He() {
                        return this.A.He
                    }
                    constructor(a,
                        b, c, d, e) {
                        __c.RE.j(this);
                        this.A = a;
                        this._base = b;
                        this.Oba = c;
                        this.xGa = d;
                        this.fja = e
                    }
                };
                __c.RE.prototype.My = __c.da(8);
                __c.RE.prototype.SB = __c.da(5);
                var LY, OY;
                LY = new Map;
                OY = new Map;
                __c.fZ = ({
                    text: a,
                    maxWidth: b,
                    fontSize: c,
                    fontFamily: d,
                    fontWeight: e,
                    textAlign: f,
                    textBaseline: g
                }) => vlb({
                    text: a,
                    maxWidth: b,
                    fontSize: c,
                    fontFamily: d,
                    fontWeight: e,
                    textAlign: f,
                    textBaseline: g,
                    Co: void 0
                }).Aqa;
                __c.TE = {
                    measureText: ({
                        text: a,
                        fontSize: b,
                        fontFamily: c,
                        fontWeight: d,
                        textAlign: e,
                        textBaseline: f
                    }) => NY({
                        text: a,
                        fontSize: b,
                        fontFamily: c,
                        fontWeight: d,
                        textAlign: e,
                        textBaseline: f,
                        Co: void 0
                    }).bX,
                    Te: ({
                        texts: a,
                        fontSize: b,
                        fontFamily: c,
                        fontWeight: d,
                        textAlign: e,
                        textBaseline: f
                    }) => {
                        let g;
                        return a.map(h => {
                            h = NY({
                                text: h,
                                fontSize: b,
                                fontFamily: c,
                                fontWeight: d,
                                textAlign: e,
                                textBaseline: f,
                                Co: g
                            });
                            ({
                                Co: g
                            } = h);
                            return h.bX
                        })
                    },
                    ph: __c.fZ,
                    zo: ({
                        texts: a,
                        maxWidth: b,
                        fontSize: c,
                        fontFamily: d,
                        fontWeight: e,
                        textAlign: f,
                        textBaseline: g
                    }) => {
                        let h;
                        return a.map(k => {
                            k = vlb({
                                text: k,
                                fontSize: c,
                                fontFamily: d,
                                fontWeight: e,
                                maxWidth: b,
                                textAlign: f,
                                textBaseline: g,
                                Co: h
                            });
                            ({
                                Co: h
                            } = k);
                            return k.Aqa
                        })
                    }
                };
                var gZ = class a extends Ilb {
                    static j(b) {
                        __c.P(b, {
                            size: bZ.ref,
                            onResize: aZ,
                            M: MY
                        })
                    }
                    componentDidMount() {
                        var b;
                        const c = this.ref,
                            d = null === c || void 0 === c ? void 0 : null === (b = c.ownerDocument) || void 0 === b ? void 0 : b.defaultView;
                        if (null != d && null != c) {
                            var e = () => {
                                const {
                                    width: f,
                                    height: g
                                } = c.getBoundingClientRect();
                                Mlb(() => {
                                    this.size = {
                                        width: f,
                                        height: g
                                    }
                                })
                            };
                            d.addEventListener("resize", e);
                            this.gVa = () => d.removeEventListener("resize", e)
                        }
                    }
                    componentWillUnmount() {
                        var b;
                        null === (b = this.gVa) || void 0 === b ? void 0 : b.call(this)
                    }
                    get M() {
                        const {
                            M: b,
                            offsetWidth: c = 0,
                            offsetHeight: d = 0,
                            strategy: e = "fit-viewport"
                        } = this.props;
                        return ylb(b, this.size.width - c, this.size.height - d, e)
                    }
                    render() {
                        const b = this.props.children,
                            c = this.M,
                            d = this.size;
                        return TY(Olb, {
                            offset: !0,
                            onResize: this.onResize,
                            innerRef: this.fg,
                            children: ({
                                measureRef: e
                            }) => b(e, c, d)
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        a.j(this);
                        this.ref = null;
                        this.fg = c => {
                            this.ref = c
                        };
                        this.size = {
                            width: 0,
                            height: 0
                        };
                        this.onResize = ({
                            offset: c
                        }) => {
                            this.size = {
                                width: c.width,
                                height: c.height
                            }
                        }
                    }
                };
                gZ = Nlb([__c.Lc], gZ);
                __c.Blb = ZY(function() {
                    return TY("div", {
                        className: "vMVcag"
                    })
                });
                __c.hZ = class {
                    static j(a) {
                        __c.P(a, {
                            Tz: aZ
                        })
                    }
                    Tz(a) {
                        __c.mG.vj(a).forEach(b => zlb(this, b))
                    }
                    mi(a) {
                        const [b, c] = __c.Nv(a, d => !!this.ab.canPlay(d));
                        c.forEach(d => this.ab.aA(d, {
                            aja: !0
                        }));
                        b.forEach(d => {
                            this.ab.Xa(d) || this.Lma.has(d) || !d.autoplay || (this.Lma.add(d), __c.zL(this.ab, d))
                        })
                    }
                    constructor(a, b, c) {
                        __c.hZ.j(this);
                        this.ab = a;
                        this.ea = b;
                        this.eWa = c;
                        this.Lma = new WeakSet;
                        this.oQa = cZ(d => {
                            if (d !== this.ea.Ya && d !== this.ea.nextPage) return [];
                            var e = 1E3 * this.ea.progress;
                            const f = 1E3 * this.ea.VO(d).start.get(),
                                g = 1E3 * __c.mA(this.ea,
                                    d);
                            if (e < f || e >= g) return [];
                            const h = this.eWa ? d.po.map(n => n.Pl) : [],
                                k = e - f,
                                l = [],
                                m = (n, p) => {
                                    const q = __c.mG.Vn(n),
                                        r = __c.Hs(n, h);
                                    r && this.ea.KCa(d).includes(n) ? l.push(...q) : !r && k >= p.oa && k < p.je && l.push(...q)
                                };
                            d.elements.forEach(n => {
                                "group" === n.type ? (!__c.Hs(n, h) || this.ea.KCa(d).includes(n)) && n.bb.forEach(p => {
                                    m(p, Alb(__c.gs(n, p)))
                                }) : m(n, Alb(n))
                            });
                            (e = d.background.video.ref) && l.push(e);
                            return l
                        }, {
                            equals: __c.Llb.shallow
                        })
                    }
                };
                var Tlb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 12a.75.75 0 0 1 .75.75v2c0 .414.336.75.75.75h2a.75.75 0 0 1 0 1.5h-2A2.25 2.25 0 0 1 5 14.75v-2a.75.75 0 0 1 .75-.75ZM17.5 11.25a.75.75 0 0 0 1.5 0v-2A2.25 2.25 0 0 0 16.75 7h-2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 1 .75.75v2Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 4c-4 0-6 2-6 6v4c0 4 2 6 6 6h8c4 0 6-2 6-6v-4c0-4-2-6-6-6H8Zm8 1.5H8c-1.769 0-2.82.441-3.44 1.06C3.942 7.18 3.5 8.232 3.5 10v4c0 1.769.441 2.82 1.06 3.44.62.619 1.671 1.06 3.44 1.06h8c1.769 0 2.82-.441 3.44-1.06.619-.62 1.06-1.671 1.06-3.44v-4c0-1.769-.441-2.82-1.06-3.44-.62-.619-1.671-1.06-3.44-1.06Z" fill="currentColor"/></svg>';
                var Ulb = __c.bT({
                    medium: Tlb
                });
                var Vlb = {
                    colorBlack: "rgb(13, 18, 22)",
                    colorBlackA15: "rgba(57, 76, 96, 0.15)",
                    colorWhite: "rgb(255, 255, 255)",
                    baseUnit: "8px",
                    badgeOverlay: "laIQig",
                    small: "TRU08A",
                    large: "BWDOdg"
                };
                __c.Elb = ZY(function({
                    size: a
                }) {
                    return TY("div", {
                        className: VY("laIQig", Vlb[a]),
                        children: TY(Ulb, {
                            size: a
                        })
                    })
                });
                __c.WY = SY(function({
                    Fya: a,
                    Eya: b,
                    N3: c,
                    wd: d,
                    children: e
                }) {
                    const f = Clb(() => MY(() => {
                        if (null == a && null == b) return null;
                        if (__c.Vj(d)) {
                            var g = Math.min(null !== a && void 0 !== a ? a : Number.MAX_SAFE_INTEGER, null !== b && void 0 !== b ? b : Number.MAX_SAFE_INTEGER);
                            return {
                                width: g,
                                height: g
                            }
                        }
                        g = __c.Uj(d);
                        var h = (a || 0) / g.width;
                        const k = (b || 0) / g.height;
                        h = 0 < h && 0 < k ? Math.min(h, k) : Math.max(h, k);
                        return {
                            width: g.width * h,
                            height: g.height * h
                        }
                    }), [d, b, a]).get();
                    return null != f ? TY("div", {
                        className: "yUZqig",
                        children: e({
                            iy: f,
                            oda: f,
                            Cqa: f
                        })
                    }) : TY(gZ, {
                        M: d,
                        children: (g, h, k) => TY("div", {
                            ref: g,
                            className: "yUZqig",
                            children: e({
                                iy: k,
                                oda: h,
                                Cqa: c ? k.width / k.height < c ? {
                                    width: k.width,
                                    height: k.width / c
                                } : {
                                    width: k.height * c,
                                    height: k.height
                                } : k
                            })
                        })
                    })
                });
                __c.Bhb = {
                    pdb: __c.WY,
                    tjb: function(a) {
                        const b = a.yb,
                            c = a.Zl,
                            d = a.ab,
                            e = a.ZK,
                            f = a.bc,
                            g = a.wg,
                            h = MY(() => b.na.toArray().map(__c.Gj)),
                            k = __c.ky(() => h.get(), () => b),
                            {
                                ea: l,
                                controller: m
                            } = c({
                                zv: k,
                                zB: !1,
                                ZK: e
                            }),
                            n = cZ(t => {
                                const u = k.Mv();
                                t = u.indexOf(t);
                                return u[t - 1]
                            }),
                            p = cZ(t => {
                                const u = k.Mv();
                                t = u.indexOf(t);
                                return u[t + 1]
                            }),
                            q = cZ(t => k.Mv().includes(t)),
                            r = d && new __c.hZ(d, l, !1);
                        return SY(function(t) {
                            const u = h.get()[t.md],
                                w = __c.xlb(u);
                            PY(() => (0, __c.QY)(() => k.Mv(), () => {
                                m.bR(u)
                            }), [u]);
                            PY(() => () => {
                                l.stop()
                            }, []);
                            PY(() => {
                                __c.iA.rb ?
                                    null != w && q(w) ? w !== u && (u === p(w) ? m.forward(w, u) : u === n(w) ? m.bR(u) : m.ap(u)) : m.ap(u) : m.bR(u)
                            }, [u, w]);
                            PY(() => {
                                if (t.Jab && r) {
                                    if (null == w || !q(w) || w === u) return __c.RY(r, [u]);
                                    if (u === p(w)) {
                                        const y = __c.RY(r, [u, w]);
                                        return () => {
                                            y();
                                            r.Tz(w)
                                        }
                                    }
                                    r.Tz(w);
                                    return __c.RY(r, [u])
                                }
                            }, [u, w, t.Jab, l.Ya || u]);
                            const [x] = Klb(() => Flb({
                                bc: f,
                                wg: g,
                                zv: k,
                                ea: MY(() => l),
                                fm: MY(() => m)
                            }));
                            return TY(x, { ...t,
                                page: u
                            })
                        })
                    }
                };
                __c.Bhb.afa = Flb;
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/0b4d35a18dad9579.js.map