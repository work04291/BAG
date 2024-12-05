(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [8293], {

        /***/
        330885: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(223140);
            self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};
            (function(__c) {
                var O = __c.O;
                var OE;
                var xf = __c.xf;
                var v = __c.v;
                var C = __c.C;
                var D = __c.D;
                var emb, qZ, imb, hmb, gmb, lmb, mmb, nmb, rZ, omb, tZ, xZ, qmb, yZ, rmb, vmb, wmb, tmb, umb, zZ, xmb, ymb, AZ, BZ, smb, zmb, Amb, Bmb, CZ, Cmb, Fmb, Hmb, Imb, Kmb;
                emb = function(a) {
                    if (null == a) return document.body;
                    const {
                        overflow: b,
                        overflowX: c,
                        overflowY: d
                    } = window.getComputedStyle(a);
                    return /(auto|scroll|overlay)/.test(b + d + c) ? a : emb(a.parentElement)
                };
                __c.fmb = function(a, b, c) {
                    if (c) switch ((0, __c.aOa)()) {
                        case "negative":
                            return a.clientWidth - a.scrollWidth + b;
                        case "reverse":
                            return a.scrollWidth - a.clientWidth - b
                    }
                    return b
                };
                __c.oZ = function(a) {
                    return a ? "rtl" : "ltr"
                };
                __c.pZ = function(a) {
                    const b = { ...a.props
                        },
                        c = void 0 !== a.za ? a.za : a.iT;
                    (void 0 !== a.Kl ? a.Kl : a.span).iE(({
                        Ym: d,
                        JE: e
                    }) => {
                        d = a.jkb ? {} : {
                            Rf: d()
                        };
                        c.track(a.event, { ...d,
                            Im: e(),
                            ...b
                        })
                    })
                };
                qZ = function*(a) {
                    let b = 0;
                    for (const c of a) yield [b++, c]
                };
                imb = function(a) {
                    if (!a) return a;
                    try {
                        var b = new URL(a)
                    } catch (c) {
                        return a
                    }
                    if ("undefined" === typeof b.pathname) return "unsupported";
                    "undefined" !== typeof b.search ? b.search && (b.search = gmb(b.search)) : (b = a.indexOf("?"), a = -1 === b ? a : a.substring(0, b), b = new URL(a));
                    b.pathname = hmb(b.pathname);
                    return b.toString()
                };
                hmb = function(a) {
                    if (a.includes("/dist/renderer/")) return "/dist/renderer/" + a.split("/dist/renderer/").pop();
                    if (!a.startsWith("/design/")) return a;
                    const b = a.split("/");
                    if (4 > b.length || jmb.has(b[3])) return a;
                    b[3] = "*****";
                    return b.join("/")
                };
                gmb = function(a) {
                    if (!a || 0 === a.length || !a.startsWith("?")) return a;
                    a = a.slice(a.indexOf("?") + 1).split("&").filter(function(b) {
                        [b] = b.split("=");
                        return kmb.has(b)
                    });
                    return 0 < a.length ? `?${a.join("&")}` : ""
                };
                lmb = function(a, b) {
                    return null != b && "object" === typeof b && null != b.sampleRate && b instanceof Error ? Math.min(Math.max(0, b.sampleRate), 1) : a.axa
                };
                mmb = function(a) {
                    switch (a) {
                        case "unset":
                            return 0;
                        case "ok":
                            return 1;
                        case "error":
                            return 2;
                        default:
                            return 0
                    }
                };
                nmb = function(a) {
                    const b = [];
                    for (const [c, d] of a.entries()) null != d && b.push({
                        key: c,
                        value: rZ(d)
                    });
                    return b
                };
                rZ = function(a) {
                    const b = typeof a;
                    return "string" === b ? {
                        stringValue: a
                    } : "number" === b ? Number.isInteger(a) ? {
                        intValue: a
                    } : {
                        doubleValue: a
                    } : "boolean" === b ? {
                        boolValue: a
                    } : a instanceof Uint8Array ? {
                        bytesValue: a
                    } : Array.isArray(a) ? {
                        arrayValue: {
                            values: a.map(rZ)
                        }
                    } : "object" === b && null != a ? {
                        kvlistValue: {
                            values: Object.entries(a).map(([c, d]) => ({
                                key: c,
                                value: rZ(d)
                            }))
                        }
                    } : {}
                };
                omb = function(a) {
                    const b = new Map;
                    for (const c of a) a = b.get(c.aq), a || (a = [], b.set(c.aq, a)), a.push(c);
                    return b
                };
                tZ = function(a, b) {
                    b = b(a) / 1E3;
                    a = Math.trunc(b);
                    b = Number((b - a).toFixed(9)) * sZ;
                    let [c, d] = [a, b];
                    d > sZ && (d -= sZ, c += 1);
                    return c * sZ + d
                };
                __c.pmb = function(a, b) {
                    if (0 === a.length) return {
                        resourceSpans: []
                    };
                    const c = [];
                    a = omb(a);
                    for (const [d, e] of a)
                        if (0 < e.length) {
                            a = {
                                attributes: nmb(e[0].Xp),
                                droppedAttributesCount: 0
                            };
                            const f = [{
                                scope: {
                                    name: d
                                },
                                spans: e.map(g => {
                                    var h = g.Im();
                                    const k = tZ(g.startTime, b);
                                    var l;
                                    const m = tZ(null !== (l = g.endTime) && void 0 !== l ? l : g.startTime, b);
                                    var n = g.attrs;
                                    "event" === g.Eu && (l = g.attrs.get("parent_start"), null != l && "number" === typeof l && (n = new Map([...n.entries(), ["parent_start", tZ(l, b)]])));
                                    l = h.traceId;
                                    h = h.spanId;
                                    var p = g.parentSpanId,
                                        q = g.name;
                                    n = nmb(n);
                                    var r = {
                                        code: mmb(g.status)
                                    };
                                    g = g.links;
                                    const t = [];
                                    for (const u of g) t.push({
                                        spanId: u.wLa.spanId,
                                        traceId: u.wLa.traceId,
                                        droppedAttributesCount: 0
                                    });
                                    return {
                                        traceId: l,
                                        spanId: h,
                                        parentSpanId: p,
                                        name: q,
                                        kind: 3,
                                        startTimeUnixNano: k,
                                        endTimeUnixNano: m,
                                        attributes: n,
                                        droppedAttributesCount: 0,
                                        events: [],
                                        droppedEventsCount: 0,
                                        status: r,
                                        links: t,
                                        droppedLinksCount: 0
                                    }
                                })
                            }];
                            c.push({
                                resource: a,
                                scopeSpans: f
                            })
                        }
                    return {
                        resourceSpans: c
                    }
                };
                __c.wZ = function(a) {
                    const {
                        tagName: b = "span",
                        className: c,
                        X0a: d = "regular",
                        message: e,
                        ...f
                    } = a;
                    return uZ(b, { ...f,
                        className: vZ(c, {
                            "dIH_FQ z2oZFw": "regular" === d,
                            "iDyyyA wL6vqQ": "semiBold" === d,
                            "ybyegg _5JgSIQ": "subtle" === d,
                            "hqiMtw _6pE_dQ": "muted" === d,
                            "ISdZAA _2AY7TA": "critical" === d,
                            "swFEHQ l__qeA": "unstyled" === d
                        }),
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    })
                };
                xZ = function(a, b, c) {
                    if (!("vertical" === b ? a.scrollHeight > a.clientHeight : a.scrollWidth > a.clientWidth)) return {
                        uq: !1
                    };
                    a = {
                        scroll: {
                            top: a.scrollTop,
                            height: a.scrollHeight,
                            left: (0, __c.GO)(a, __c.oZ(c)),
                            width: a.scrollWidth
                        },
                        client: {
                            top: a.clientTop,
                            height: a.clientHeight,
                            left: a.clientLeft,
                            width: a.clientWidth
                        }
                    };
                    if ("vertical" === b) b = 0 >= a.scroll.top, c = 1 > a.scroll.height - a.scroll.top - a.client.height;
                    else {
                        const d = 0 >= a.scroll.left,
                            e = 1 > a.scroll.width - a.scroll.left - a.client.width;
                        b = c ? e : d;
                        c = c ? d : e
                    }
                    return {
                        uq: !0,
                        raw: a,
                        XH: b,
                        WH: c
                    }
                };
                qmb = function(a) {
                    switch (a) {
                        case "canvas":
                            return "i24Qzw";
                        case "tabdock":
                            return "J7MRLA";
                        case "surface":
                            return "iA8hvw";
                        case "page":
                            return "ze9m4A";
                        default:
                            throw new D(a);
                    }
                };
                yZ = function(a) {
                    switch (a) {
                        case "vertical":
                            return "_gATaQ";
                        case "horizontal":
                            return "fefKhw";
                        default:
                            throw new D(a);
                    }
                };
                rmb = function(a) {
                    return uZ("g", {
                        children: a.gea.map(b => a.render(b))
                    })
                };
                vmb = function(a, {
                    Yy: b,
                    bL: c,
                    pG: d,
                    qG: e
                } = {
                    Yy: !1,
                    bL: !1,
                    pG: new Map,
                    qG: new Map
                }) {
                    const f = a.Fb,
                        g = a.Fe,
                        h = a.YG,
                        k = a.sB.diff,
                        l = 0 < k.enter.size && 0 === k.update.size && 0 === k.exit.size && !b;
                    smb({
                        ea: a.ea,
                        H: a.H,
                        Fb: {
                            enter: l && f.yO || f.enter,
                            update: f.update,
                            exit: f.exit,
                            Xe: f.Xe
                        },
                        getKey: a.getKey,
                        Aj: a.Aj,
                        Uk: a.Uk,
                        ae: tmb({
                            YG: h,
                            S_a: l,
                            ae: a.ae,
                            Tk: a.Tk
                        }),
                        Fe: h ? g : 0,
                        fe: umb({
                            YG: h,
                            U_a: 0 === k.enter.size && 0 === k.update.size && 0 < k.exit.size && !b,
                            fe: a.fe,
                            Oo: a.Oo
                        }),
                        eq: a.eq,
                        iw: a.iw && c,
                        oj: a.oj,
                        diff: k,
                        pG: d,
                        qG: e,
                        Yy: b
                    })
                };
                wmb = function(a, b) {
                    const c = new Map;
                    if (null == a) return c;
                    for (const d of a) c.set(b.getKey(d), d);
                    return c
                };
                tmb = function({
                    YG: a,
                    S_a: b,
                    ae: c,
                    Tk: d
                }) {
                    return a ? b && null != d ? d : c : 0
                };
                umb = function({
                    YG: a,
                    U_a: b,
                    fe: c,
                    Oo: d
                }) {
                    return a ? b && null != d ? d : c : 0
                };
                zZ = function(a, b) {
                    return C(a.get(b), "Could not find animations for key {}", b)
                };
                xmb = function*(a, b) {
                    for (const c of a.keys()) {
                        const d = zZ(a, c);
                        for (const e of b) yield d[e]
                    }
                };
                ymb = function({
                    jk: a,
                    H: b,
                    Fb: c,
                    diff: d,
                    getKey: e
                }) {
                    return Object.keys(c).some(f => {
                        const g = b[f];
                        return c[f].value(a, d, e) !== g.definition.end
                    })
                };
                AZ = function(a, b) {
                    const c = new Set;
                    for (const [d, e] of qZ(b.values())) c.add(a.group(e, d));
                    return new Map(Array.from(c, (d, e) => [d, e]))
                };
                BZ = function(a, b, c, d, e, f) {
                    var g = a.start,
                        h = a.end;
                    const k = a.bf;
                    v(0 < d, "count should be non-zero");
                    v(0 <= g && 1 >= g, "start should be between 0 and 1");
                    v(0 <= h && 1 >= h, "end should be between 0 and 1");
                    v(0 <= k && 1 >= k, "stagger should be between 0 and 1");
                    g *= b;
                    h = b * h - g;
                    if (a.Vb && !e) return {
                        kc: 0,
                        $i: 0,
                        Cn: 1
                    };
                    if (f && e) return {
                        kc: b,
                        $i: 0,
                        Cn: 1
                    };
                    if (1 === d) return {
                        kc: h,
                        $i: g,
                        Cn: 1
                    };
                    a = h / (1 + (d - 1) * k);
                    c = g + (h - a) / (d - 1) * c;
                    return {
                        kc: a,
                        $i: c,
                        Cn: 0 === b || 0 === a + c ? 1 : b / (a + c)
                    }
                };
                smb = function({
                    ea: a,
                    H: b,
                    Fb: c,
                    getKey: d,
                    Aj: e,
                    Uk: f,
                    ae: g,
                    Fe: h,
                    fe: k,
                    eq: l,
                    iw: m,
                    oj: n,
                    diff: p,
                    pG: q,
                    qG: r,
                    Yy: t
                }) {
                    zmb({
                        ea: a,
                        H: b,
                        Fb: c,
                        Aj: e,
                        Uk: f,
                        ae: g,
                        eq: l,
                        iw: m,
                        oj: n,
                        diff: p,
                        pG: q,
                        getKey: d,
                        Yy: t
                    });
                    Amb({
                        H: b,
                        Fb: c,
                        Aj: e,
                        Fe: h,
                        eq: l,
                        iw: m,
                        diff: p,
                        getKey: d,
                        Yy: t
                    });
                    Bmb({
                        ea: a,
                        H: b,
                        Fb: c,
                        Aj: e,
                        Uk: f,
                        fe: k,
                        eq: l,
                        iw: m,
                        diff: p,
                        qG: r,
                        getKey: d,
                        Yy: t
                    })
                };
                zmb = function({
                    ea: a,
                    H: b,
                    Fb: c,
                    Aj: d,
                    Uk: e,
                    ae: f,
                    eq: g,
                    iw: h,
                    oj: k,
                    diff: l,
                    pG: m,
                    getKey: n,
                    Yy: p
                }) {
                    const q = xf(c.enter, t => AZ(t, l.enter));
                    for (const [t, [u, w]] of qZ(l.enter)) {
                        var r;
                        const x = null !== (r = m.get(u)) && void 0 !== r ? r : w;
                        d.set(u, w);
                        const y = b.get(u);
                        y && e.delete(u);
                        const z = xf(c.enter, (B, E) => {
                            var F, H = c.update[E];
                            const J = B.value(x, l, n),
                                K = H.value(w, l, n);
                            var L = B.group(x, t),
                                R;
                            const T = null !== (R = null === (F = c.Xe) || void 0 === F ? void 0 : F[E]) && void 0 !== R ? R : !1;
                            F = q[E];
                            L = C(F.get(L));
                            R = B.easing;
                            if (y) {
                                B = y[E];
                                const {
                                    kc: ia,
                                    $i: ra,
                                    Cn: ea
                                } =
                                BZ(H, f, L, F.size, p, T);
                                B.update({
                                    end: K,
                                    kc: ia,
                                    $i: ra,
                                    Cn: ea,
                                    easing: R
                                });
                                return B
                            }
                            const {
                                kc: W,
                                $i: Y,
                                Cn: la
                            } = BZ(B, J === K ? 0 : f, L, F.size, p, T);
                            H = a.Eta({
                                start: J,
                                end: K,
                                kc: W,
                                $i: Y,
                                Cn: la,
                                easing: R
                            }, T ? k : void 0);
                            H.play();
                            g && h && H.Q3(g);
                            return H
                        });
                        b.set(u, z)
                    }
                };
                Amb = function({
                    H: a,
                    Fb: b,
                    Aj: c,
                    Fe: d,
                    eq: e,
                    iw: f,
                    diff: g,
                    getKey: h,
                    Yy: k
                }) {
                    for (const [n, p] of g.update) c.set(n, p);
                    const l = new Map;
                    for (const [n, p] of g.update) c = zZ(a, n), ymb({
                        jk: p,
                        H: c,
                        Fb: b.update,
                        diff: g,
                        getKey: h
                    }) && l.set(n, p);
                    const m = xf(b.update, n => AZ(n, l));
                    for (const [n, [p, q]] of qZ(l)) {
                        const r = zZ(a, p);
                        c = xf(b.update, (t, u) => {
                            var w;
                            const x = r[u],
                                y = t.value(q, g, h);
                            if (y === x.definition.end) return x;
                            var z = t.group(q, n);
                            const B = m[u];
                            z = C(B.get(z));
                            var E;
                            const F = null !== (E = null === (w = b.Xe) || void 0 === w ? void 0 : w[u]) && void 0 !==
                                E ? E : !1,
                                {
                                    kc: H,
                                    $i: J,
                                    Cn: K
                                } = BZ(t, d, z, B.size, k, F);
                            x.update({
                                end: y,
                                kc: H,
                                $i: J,
                                Cn: K,
                                easing: t.easing
                            });
                            e && f && x.Q3(e);
                            return x
                        });
                        a.set(p, c)
                    }
                };
                Bmb = function({
                    ea: a,
                    H: b,
                    Fb: c,
                    Aj: d,
                    Uk: e,
                    fe: f,
                    eq: g,
                    iw: h,
                    diff: k,
                    qG: l,
                    getKey: m,
                    Yy: n
                }) {
                    const p = new Map;
                    var q = new Map;
                    for (const [E, F] of k.exit) {
                        var r = zZ(b, E),
                            t;
                        ymb({
                            jk: null !== (t = l.get(E)) && void 0 !== t ? t : F,
                            H: r,
                            Fb: c.exit,
                            diff: k,
                            getKey: m
                        }) ? p.set(E, F) : q.set(E, F)
                    }
                    const u = Object.keys(c.enter);
                    for (var w of q.keys()) CZ({
                        H: b,
                        ea: a,
                        Aj: d,
                        Uk: e,
                        properties: u,
                        key: w
                    });
                    q = xf(c.exit, E => AZ(E, p));
                    for (const [E, [F, H]] of qZ(p)) {
                        d.delete(F);
                        e.set(F, H);
                        var x;
                        r = null !== (x = l.get(F)) && void 0 !== x ? x : H;
                        w = zZ(b, F);
                        t = [];
                        for (const J in c.exit) {
                            var y;
                            const K = c.exit[J],
                                L = w[J],
                                R = K.value(r, k, m);
                            if (R === L.definition.end) continue;
                            var z = K.group(r, E);
                            const T = q[J];
                            z = C(T.get(z));
                            var B;
                            const W = null !== (B = null === (y = c.Xe) || void 0 === y ? void 0 : y[J]) && void 0 !== B ? B : !1,
                                {
                                    kc: Y,
                                    $i: la,
                                    Cn: ia
                                } = BZ(K, f, z, T.size, n, W);
                            t.push({
                                animation: L,
                                definition: {
                                    end: R,
                                    kc: Y,
                                    $i: la,
                                    Cn: ia,
                                    easing: K.easing
                                }
                            })
                        }({
                            animation: r
                        } = __c.Ys(t, ({
                            definition: J
                        }) => J.$i + J.kc));
                        for (const {
                                animation: J,
                                definition: K
                            } of t) J.update({ ...K,
                            Di: J === r ? () => CZ({
                                H: b,
                                ea: a,
                                Aj: d,
                                Uk: e,
                                properties: u,
                                key: F
                            }) : void 0
                        }), g && h && J.Q3(g)
                    }
                };
                CZ = function({
                    H: a,
                    ea: b,
                    Aj: c,
                    Uk: d,
                    properties: e,
                    key: f
                }) {
                    const g = zZ(a, f);
                    for (const h of e) b.sHa(g[h]);
                    a.delete(f);
                    c.delete(f);
                    d.delete(f)
                };
                Cmb = function({
                    H: a,
                    ea: b,
                    Aj: c,
                    Uk: d,
                    sB: e,
                    properties: f
                }) {
                    for (const g of a.keys()) CZ({
                        H: a,
                        ea: b,
                        Aj: c,
                        Uk: d,
                        properties: f,
                        key: g
                    });
                    e.clear()
                };
                Fmb = function(a, b, c) {
                    function d() {
                        DZ(() => EZ(() => [a.data.get(), a.A.fga], () => {
                            var m = a.A;
                            const n = m.Sp;
                            m = m.fga;
                            const p = a.e6a,
                                q = a.zGa;
                            a.zGa = m;
                            a.e6a = n;
                            null != q && (a.YG = Dmb.structural(m, q) || p !== n)
                        }, {
                            fireImmediately: !0
                        }), [])
                    }
                    const e = new Emb,
                        f = FZ(() => e.gea(a)),
                        g = m => {
                            e.flush(a, m)
                        },
                        h = () => {
                            e.reset(a)
                        },
                        k = () => a.data.get(),
                        l = GZ(function({
                            children: m
                        }) {
                            d();
                            DZ(() => e.subscribe(a), []);
                            return uZ(rmb, {
                                render: m,
                                gea: f.get()
                            })
                        });
                    return {
                        Lb: function({
                            children: m
                        }) {
                            DZ(() => {
                                null === b || void 0 === b ? void 0 : b(a, {
                                    flush: g,
                                    reset: h,
                                    capture: k
                                });
                                return () => null === c || void 0 === c ? void 0 : c(a)
                            }, []);
                            return uZ(l, {
                                children: m
                            })
                        },
                        aaa: function() {
                            d();
                            DZ(() => {
                                const m = e.subscribe(a);
                                null === b || void 0 === b ? void 0 : b(a, {
                                    flush: g,
                                    reset: h,
                                    capture: k
                                });
                                return () => {
                                    null === c || void 0 === c ? void 0 : c(a);
                                    m()
                                }
                            }, []);
                            return f
                        }
                    }
                };
                __c.dma = function(a) {
                    return Fmb(a)
                };
                __c.bma = function() {
                    const a = [],
                        b = new Map;
                    let c = 0;
                    const d = (f, {
                            flush: g,
                            reset: h,
                            capture: k
                        }) => {
                            const l = new Map;
                            for (const {
                                    id: m,
                                    jF: n,
                                    effect: p
                                } of a) l.set(m, EZ(n, q => p(q, {
                                flush: g,
                                reset: h,
                                capture: k
                            }), {
                                fireImmediately: !0
                            }));
                            b.set(f, {
                                flush: g,
                                reset: h,
                                capture: k,
                                ona: l
                            })
                        },
                        e = f => {
                            const g = b.get(f);
                            if (g)
                                for (const h of g.ona.values()) h();
                            b.delete(f)
                        };
                    return {
                        Na: f => Fmb(f, d, e),
                        t_a: function(f, g) {
                            const h = c++;
                            a.push({
                                id: h,
                                jF: f,
                                effect: g
                            });
                            for (const {
                                    flush: k,
                                    reset: l,
                                    capture: m,
                                    ona: n
                                } of b.values()) n.set(h, EZ(f, p => g(p, {
                                flush: k,
                                reset: l,
                                capture: m
                            }), {
                                fireImmediately: !0
                            }));
                            return () => {
                                for (const {
                                        ona: k
                                    } of b.values()) {
                                    const l = k.get(h);
                                    l && (l(), k.delete(h))
                                }
                            }
                        }
                    }
                };
                __c.Gmb = function(a, b) {
                    var c = b.oD;
                    var d = a.Toa.Vw.get(c);
                    null != d ? c = d.sheet : (__c.BF(a.Toa, a.document), d = a.Toa.Vw.get(c), c = C(null === d || void 0 === d ? void 0 : d.sheet, "no sheet with id {}", c));
                    a = a.Twa.I8a(c, b);
                    return {
                        sheet: c,
                        range: a
                    }
                };
                Hmb = function(a) {
                    switch (a.type) {
                        case 0:
                            return a.value.column;
                        case 1:
                            return a.value;
                        case 2:
                            break;
                        default:
                            throw new D(a);
                    }
                };
                __c.Jmb = function(a, b) {
                    return a === b ? !0 : null == a || null == b || a.sheet !== b.sheet ? !1 : a.range === b.range ? !0 : null == a.range || null == b.range ? !1 : Imb(a.range.start, b.range.start) && Imb(a.range.end, b.range.end)
                };
                Imb = function(a, b) {
                    if (a === b) return !0;
                    switch (a.type) {
                        case 0:
                            return 0 === b.type && a.value.column.id === b.value.column.id && a.value.qa.id === b.value.qa.id;
                        case 1:
                            return 1 === b.type && a.value.id === b.value.id;
                        case 2:
                            return 2 === b.type && a.value.id === b.value.id;
                        default:
                            throw new D(a);
                    }
                };
                Kmb = function(a) {
                    switch (a.type) {
                        case 0:
                            return a.value.qa;
                        case 1:
                            break;
                        case 2:
                            return a.value;
                        default:
                            throw new D(a);
                    }
                };
                __c.Lmb = function(a = 0) {
                    const [b, c] = HZ(!1), d = IZ(), e = JZ(() => {
                        window.clearTimeout(d.current);
                        d.current = window.setTimeout(() => c(!0), a)
                    }, [a]), f = JZ(() => {
                        window.clearTimeout(d.current);
                        c(!1)
                    }, []);
                    return {
                        eC: b,
                        $Ja: e,
                        hKa: f
                    }
                };
                __c.KZ = function(a, b = 0) {
                    const {
                        eC: c,
                        $Ja: d,
                        hKa: e
                    } = __c.Lmb(b);
                    DZ(() => {
                        const f = a.current;
                        if (f) return f.addEventListener("mouseenter", d), f.addEventListener("mouseleave", e), () => {
                            f.removeEventListener("mouseenter", d);
                            f.removeEventListener("mouseleave", e)
                        }
                    }, [a, d, e]);
                    return {
                        eC: c
                    }
                };
                __c.hM.prototype.wO = __c.fa(15, function() {});
                __c.iO.prototype.wO = __c.fa(14, function() {
                    this.ended || this.xH || (this.xH = !0, setTimeout(() => {
                        try {
                            this.ended = !0, __c.TMa(this), void 0
                        } catch (a) {
                            this.G.Xb(a, {
                                rf: "Error ending span in next cycle",
                                extra: new Map(__c.bO(this))
                            })
                        }
                    }))
                });
                __c.HG.prototype.lT = __c.fa(11, function(a) {
                    switch ((void 0).type) {
                        case "invalid":
                            return;
                        case "canonical":
                            var b = (void 0).fI.slice(1).trim();
                            break;
                        default:
                            throw new D;
                    }
                    b = this.yma(b);
                    __c.A("success" === b.result);
                    const c = {
                            fHa: new Map(__c.Jra(b.jU, a).map(e => [e.TQ, e])),
                            sheet: a
                        },
                        d = __c.Kra(b.jU, e => {
                            e = __c.Lra(e, c);
                            if ("#REF!" !== e) a: switch (e = __c.CE(e), e.type) {
                                case 0:
                                    var f = e.ih + (e.dR ? 0 : (void 0).bG);
                                    const g = e.ah + (e.vN ? 0 : (void 0).kX);
                                    e = 0 > f || 0 > g || f >= a.rows.count() || g >= a.cols.count() ? "#REF!" : [e.vN ? "$" : "", __c.AE(g),
                                        e.dR ? "$" : "", String(f + 1)
                                    ].join("");
                                    break a;
                                case 1:
                                    f = e.ah + (e.vN ? 0 : (void 0).kX);
                                    e = 0 <= f && f < a.cols.count() ? `${e.vN?"$":""}${__c.AE(f)}` : "#REF!";
                                    break a;
                                case 2:
                                    f = e.ih + (e.dR ? 0 : (void 0).bG);
                                    e = 0 <= f && f < a.rows.count() ? `${e.dR?"$":""}${String(f+1)}` : "#REF!";
                                    break a;
                                case 3:
                                    e = e.name;
                                    break a;
                                default:
                                    throw new D(e);
                            }
                            return e
                        });
                    b = this.yma(d);
                    if ("success" !== b.result) throw Error();
                    return {
                        type: "canonical",
                        fI: "=" + d
                    }
                });
                var LZ = __webpack_require__(875604),
                    Mmb = LZ.createRef,
                    MZ = LZ.forwardRef,
                    NZ = LZ.memo,
                    JZ = LZ.useCallback,
                    DZ = LZ.useEffect,
                    Nmb = LZ.useId,
                    Omb = LZ.useImperativeHandle,
                    Pmb = LZ.useMemo,
                    IZ = LZ.useRef,
                    HZ = LZ.useState;
                var OZ = __webpack_require__(42782),
                    PZ = OZ.aD,
                    Dmb = OZ.p6,
                    FZ = OZ.Fl,
                    QZ = OZ.LO,
                    EZ = OZ.U5;
                var RZ = __webpack_require__(443763),
                    Qmb = RZ.Fragment,
                    uZ = RZ.jsx,
                    SZ = RZ.jsxs;
                var Rmb = __webpack_require__(736241),
                    GZ = Rmb.Pi,
                    Smb = Rmb.Qj;
                var Tmb = __webpack_require__,
                    Umb = Tmb(993864),
                    vZ = Tmb.n_x(Umb)();
                var Vmb = __webpack_require__(358579).Z;
                var Wmb = __webpack_require__(984956).Z;
                var jmb = new Set("share acl remix view edit screen render animate watch published draft".split(" ")),
                    kmb = new Set("utm_source utm_medium utm_campaign utm_content utm_term gclid fbclid msclkid q query clickId referrer signup_referrer redirect origin type category schema dclid _channel_track_key callback_id channel_account_id channel_ad_id channel_adgroup_id channel_campaign_id channel_keyword channel_keyword_id channel_link_type channel_name channel_utm_campaign channel_utm_content channel_utm_medium channel_utm_source channel_utm_term hash_key sat_cf tid link_version utm_adgroup utm_keyword template media create touchpoint_label touchpoint_correlation_id cta_source".split(" "));
                __c.Xmb = {
                    Ae: "resource_loaded",
                    eg(a) {
                        return __c.hC({
                            source: a.source,
                            resource_id: a.HHa,
                            success: a.ac,
                            resource_type: a.resourceType,
                            version: a.version,
                            url: imb(a.url),
                            watermarked: a.rh,
                            spritesheet: a.we,
                            height: a.height,
                            width: a.width,
                            quality: a.quality,
                            restricted_access: a.LG,
                            file_size: a.fileSize,
                            failure_reason: a.Kga,
                            resource_already_loaded: a.Rrb,
                            performance_context: null == a.Rf ? void 0 : __c.BG(a.Rf),
                            editing_context: null == a.Wd ? void 0 : __c.iC(a.Wd)
                        })
                    }
                };
                __c.TZ = class extends Error {
                    constructor(a, b) {
                        super(a);
                        this.sampleRate = b;
                        this.sampleRate = Math.min(Math.max(0, b), 1)
                    }
                };
                __c.UZ = class {
                    setupOnce(a, b) {
                        a((c, d) => {
                            const e = b().getIntegration(__c.UZ);
                            if (!e) return c;
                            if (!(Math.random() < lmb(e, null === d || void 0 === d ? void 0 : d.originalException))) return null;
                            d = {
                                sampleRate: lmb(this, null === d || void 0 === d ? void 0 : d.originalException)
                            };
                            c.extra = null != c.extra ? { ...c.extra,
                                ...d
                            } : d;
                            c.tags = null != c.tags ? { ...c.tags,
                                ...d
                            } : d;
                            return c
                        })
                    }
                    constructor(a) {
                        this.axa = a;
                        this.name = __c.UZ.id;
                        this.axa = Math.min(Math.max(0, a), 1)
                    }
                };
                __c.UZ.id = "Sampling";
                var sZ = Math.pow(10, 9);
                __c.Ymb = class {
                    lT(a) {
                        return this.aMa + (a - this.dGa)
                    }
                    fN() {
                        var a = Date.now(),
                            b = performance.now();
                        Math.abs(this.lT(b) - a) < this.threshold || (this.aMa = a, this.dGa = b)
                    }
                    constructor() {
                        var a = Date.now(),
                            b = performance.now();
                        this.aMa = a;
                        this.dGa = b;
                        this.threshold = 1E4
                    }
                };
                var Zmb = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M5 3v-.25a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V3h2.875a.625.625 0 1 1 0 1.25H13V12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4.25h-.875a.625.625 0 1 1 0-1.25H5Zm-.75 1.25V12c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75V4.25h-7.5ZM6 3h4v-.25a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1V3Zm0 3h1.25v5H6V6Zm2.75 0H10v5H8.75V6Z"/></svg>';
                var $mb = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h4.25a.75.75 0 1 1 0 1.5H19V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6.5H3.75a.75.75 0 0 1 0-1.5H8zM6.5 6.5V18c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V6.5h-11zm3-1.5h5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5zm-.25 4h1.5v8h-1.5V9zm4 0h1.5v8h-1.5V9z"/></svg>';
                __c.anb = __c.bT({
                    small: Zmb,
                    medium: $mb
                });
                var bnb = MZ((a, b) => {
                    const c = a.children,
                        d = a.direction,
                        e = a.onScroll;
                    a = a.className;
                    const f = "RTL" === __c.tb(),
                        g = IZ(null);
                    Omb(b, () => {
                        const h = C(g.current);
                        return {
                            Lza: () => xZ(h, d, f),
                            scrollBy: k => h.scrollBy(k),
                            scrollTo: k => {
                                const l = k.position;
                                var m = k.behavior;
                                if (l) {
                                    var n = xZ(h, d, f);
                                    n.uq && (n = n.raw, "vertical" === d ? h.scrollTo({
                                        top: "start" === l ? 0 : n.scroll.height - n.client.height,
                                        behavior: m
                                    }) : (m = f ? n.scroll.width - n.client.width : 0, n = f ? 0 : n.scroll.width - n.client.width, h.scrollTo({
                                        left: __c.fmb(h, "start" === l ? m : n, f),
                                        behavior: null ===
                                            k || void 0 === k ? void 0 : k.behavior
                                    })))
                                } else h.scrollTo(k)
                            }
                        }
                    }, [d, f]);
                    b = JZ(() => {
                        if (e && g.current) {
                            const h = g.current;
                            e(() => xZ(h, d, f))
                        }
                    }, [e, d, f]);
                    return uZ("div", {
                        className: vZ("piaS2g", a, {
                            LBU2KA: "vertical" === d,
                            Omi3ZA: "horizontal" === d
                        }),
                        ref: g,
                        onScroll: b,
                        children: c
                    })
                });
                var cnb = "undefined" !== typeof window ? /AppleWebKit\//i.test(window.navigator.userAgent) : void 0,
                    dnb = MZ((a, b) => {
                        const [c, d] = HZ(!1), [e, f] = HZ(!1), [g, h] = HZ(null), k = IZ(null);
                        var l = "RTL" === __c.tb();
                        const m = a.children,
                            n = a.direction,
                            p = a.onScroll;
                        var q = a.type,
                            r = a.background;
                        const t = cnb && l && "horizontal" === n,
                            u = __c.sb(),
                            w = Pmb(() => __c.Rc(z => {
                                z = z();
                                z.uq ? (d(!z.XH), f(!z.WH)) : (d(!1), f(!1))
                            }, 16, {
                                leading: !0
                            }), []),
                            x = Pmb(() => __c.Rc(z => {
                                z = z();
                                z.uq && (z = z.raw, h({
                                    client: z.client.width,
                                    scroll: z.scroll.width
                                }))
                            }, 16, {
                                leading: !0
                            }), []);
                        l = JZ(z => {
                            w(z);
                            p && p(z)
                        }, [w, p]);
                        a = JZ(() => {
                            const z = k.current;
                            z && (w(z.Lza), t && x(z.Lza))
                        }, [w, x, t]);
                        const y = vZ("kFFH_Q", yZ(n));
                        r = qmb(r);
                        a: switch (q) {
                            case "shadow":
                                q = "dKRscg";
                                break a;
                            case "fade":
                                q = "_8f7ZWw";
                                break a;
                            default:
                                throw new D(q);
                        }
                        q = vZ("kLHWmg", r, q, yZ(n), {
                            a4_U3w: u
                        });
                        return SZ(bnb, {
                            direction: n,
                            onScroll: l,
                            ref: Vmb(b, k),
                            className: vZ("iGVGMg", yZ(n)),
                            children: [uZ("div", {
                                    className: vZ(y, "UOgYeQ"),
                                    style: {
                                        right: t && g ? `${g.scroll-g.client}px` : void 0
                                    },
                                    children: uZ("div", {
                                        className: vZ(q, "UOgYeQ", {
                                            _1HCJVw: c
                                        })
                                    })
                                }),
                                uZ("div", {
                                    className: vZ(y, "ddzWGA"),
                                    style: {
                                        right: t && g ? `${g.scroll}px` : void 0
                                    },
                                    children: uZ("div", {
                                        className: vZ(q, "ddzWGA", {
                                            _1HCJVw: e
                                        })
                                    })
                                }), uZ(Wmb, {
                                    onResize: a,
                                    children: ({
                                        measureRef: z
                                    }) => uZ("div", {
                                        ref: z,
                                        className: "tFXIEw",
                                        children: m
                                    })
                                })
                            ]
                        })
                    });
                __c.VZ = MZ((a, b) => {
                    const {
                        children: c,
                        direction: d = "vertical",
                        onScroll: e,
                        TAa: f
                    } = a;
                    return f ? uZ(dnb, {
                        direction: d,
                        onScroll: e,
                        ref: b,
                        type: f.type,
                        background: f.background ? f.background : "surface",
                        children: c
                    }) : uZ(bnb, {
                        direction: d,
                        onScroll: e,
                        ref: b,
                        children: c
                    })
                });
                var Emb = class {
                    subscribe(a) {
                        const b = a.sB.subscribe(),
                            c = EZ(() => a.sB.diff, () => {
                                a.iw || vmb(a)
                            }, {
                                fireImmediately: !0
                            });
                        return PZ(() => {
                            const d = a.H,
                                e = a.ea,
                                f = a.Aj,
                                g = a.Uk,
                                h = a.sB,
                                k = Object.keys(a.Fb.enter);
                            Cmb({
                                H: d,
                                ea: e,
                                Aj: f,
                                Uk: g,
                                properties: k,
                                sB: h
                            });
                            b();
                            a.zGa = void 0;
                            c()
                        })
                    }
                    reset(a) {
                        const b = a.H,
                            c = a.ea,
                            d = a.Aj,
                            e = a.Uk,
                            f = a.sB;
                        a = Object.keys(a.Fb.enter);
                        Cmb({
                            H: b,
                            ea: c,
                            Aj: d,
                            Uk: e,
                            properties: a,
                            sB: f
                        })
                    }
                    flush(a, {
                        bL: b,
                        pG: c,
                        qG: d
                    }) {
                        a.YG = !0;
                        a.sB.flush();
                        const e = a.H,
                            f = Object.keys(a.Fb.enter);
                        for (const g of xmb(e, f)) g.ap(g.definition.kc +
                            g.definition.$i);
                        vmb(a, {
                            Yy: !0,
                            bL: b,
                            pG: wmb(c, a),
                            qG: wmb(d, a)
                        })
                    }
                    gea(a) {
                        const b = a.H,
                            c = a.Aj;
                        a = a.Uk;
                        const d = [...c.values(), ...a.values()];
                        return [...c.entries(), ...a.entries()].map(([e, f], g) => ({
                            hg: xf(zZ(b, e), h => h.state),
                            jk: f,
                            index: g,
                            key: e,
                            data: d
                        }))
                    }
                };
                var enb;
                enb = class {
                    static j(a) {
                        __c.P(a, {
                            definition: QZ.ref,
                            Kx: QZ.ref,
                            playing: QZ.ref,
                            eq: QZ.ref,
                            play: PZ,
                            pause: PZ,
                            ZC: FZ,
                            MR: PZ,
                            update: PZ,
                            ap: PZ,
                            Q3: PZ,
                            bab: PZ
                        })
                    }
                    play() {
                        this.playing = !0;
                        this.ea.play()
                    }
                    pause() {
                        this.playing = !1
                    }
                    get ZC() {
                        const a = this.eq;
                        var b = this.definition;
                        const c = b.$i,
                            d = b.kc;
                        b = b.Cn;
                        const e = this.Kx;
                        return a ? a.get() * b * (c + d) : e
                    }
                    MR(a) {
                        const b = this.definition.kc,
                            c = this.definition.$i,
                            d = this.definition.Di;
                        this.Kx += a;
                        this.Kx >= b + c && (this.Kx = b + c, this.pause(), null === d || void 0 === d ? void 0 : d())
                    }
                    update({
                        end: a,
                        kc: b,
                        $i: c,
                        Cn: d,
                        easing: e,
                        Di: f
                    }) {
                        const g = this.state.get();
                        this.definition = {
                            start: g,
                            end: a,
                            kc: b,
                            $i: c,
                            Cn: d,
                            easing: e,
                            Di: f
                        };
                        g === a ? (this.Kx = b + c, this.pause(), null === f || void 0 === f ? void 0 : f()) : (this.Kx = 0, this.play())
                    }
                    ap(a) {
                        const b = this.definition.kc,
                            c = this.definition.$i;
                        v(0 <= a && a <= b + c);
                        this.Kx = a
                    }
                    Q3(a) {
                        this.eq = a;
                        this.pause()
                    }
                    bab() {
                        const a = this.eq;
                        var b = this.definition;
                        const c = b.$i,
                            d = b.kc;
                        b = b.Cn;
                        a && (this.Kx = a.get() * b * (c + d), this.eq = void 0)
                    }
                    constructor(a, b, c) {
                        enb.j(this);
                        this.ea = b;
                        this.Kx = 0;
                        this.playing = !1;
                        this.definition =
                            a;
                        this.oj = c;
                        this.state = FZ(() => {
                            var d, e = this.definition,
                                f = e.start;
                            const g = e.end;
                            var h = e.$i,
                                k = e.kc;
                            e = e.easing;
                            var l = this.ZC;
                            if (l < h) return f;
                            if (l >= h + k) return g;
                            h = l - h;
                            return (l = null === (d = this.oj) || void 0 === d ? void 0 : d.get()) ? (d = l.start, e = l.end, l = l.easing, f = l(d * f, e * g, h, k), k = l(d, e, h, k), f / k) : e(f, g, h, k)
                        })
                    }
                };
                __c.UE = class {
                    static j(a) {
                        __c.P(a, {
                            MR: PZ
                        })
                    }
                    play() {
                        this.playing || (this.Hja = this.now(), this.playing = !0, this.requestAnimationFrame(this.MR))
                    }
                    pause() {
                        this.playing = !1
                    }
                    Eta(a, b) {
                        a = new enb(a, this, b);
                        this.H.add(a);
                        return a
                    }
                    sHa(a) {
                        this.H.delete(a)
                    }
                    constructor(a = c => window.requestAnimationFrame(c), b = () => performance.now()) {
                        __c.UE.j(this);
                        this.requestAnimationFrame = a;
                        this.now = b;
                        this.playing = !1;
                        this.H = new Set;
                        this.Hja = 0;
                        this.MR = c => {
                            if (this.playing) {
                                var d = !1,
                                    e = c - this.Hja;
                                for (const f of this.H) f.playing && (f.MR(e),
                                    d = d || f.playing);
                                this.Hja = c;
                                d ? this.requestAnimationFrame(this.MR) : this.pause()
                            }
                        }
                    }
                };
                __c.SE = class {
                    static j(a) {
                        __c.P(a, {
                            DQ: QZ.ref,
                            aca: QZ.ref,
                            open: FZ,
                            key: QZ.ref,
                            Jx: QZ.ref,
                            position: FZ,
                            content: QZ.ref,
                            placement: QZ.ref,
                            arrow: QZ.ref
                        })
                    }
                    get open() {
                        return this.aca && this.xYa()
                    }
                    set open(a) {
                        this.aca = a
                    }
                    set position(a) {
                        this.Jx = a
                    }
                    get position() {
                        var a;
                        const b = this.Jx;
                        var c;
                        const d = null !== (c = null === (a = this.scaleFactor) || void 0 === a ? void 0 : a.get()) && void 0 !== c ? c : 1;
                        return {
                            left: d * (this.ld ? b.left - this.A.width : b.left),
                            top: d * b.top,
                            width: d * b.width,
                            height: d * b.height
                        }
                    }
                    constructor(a, b, c, d = 2 === __c.iA.direction) {
                        __c.SE.j(this);
                        this.A = a;
                        this.scaleFactor = b;
                        this.xYa = c;
                        this.ld = d;
                        this.DQ = Mmb();
                        this.aca = !1;
                        this.key = void 0;
                        this.Jx = {
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        };
                        this.content = "";
                        this.placement = "bottom-center";
                        this.arrow = !0;
                        this.df = 0
                    }
                };
                var hnb = ({
                        DQ: a,
                        content: b,
                        open: c,
                        placement: d,
                        reference: e,
                        arrow: f
                    }) => {
                        const [g, h] = HZ();
                        return uZ("div", {
                            className: "Mlkk4Q",
                            ref: k => {
                                null != k && (k = emb(k.parentElement), null != k && h(k))
                            },
                            children: uZ(__c.aA, {
                                ref: a,
                                placement: null == d || "auto" === d || "string" !== typeof d ? d : {
                                    placement: d,
                                    gR: !1
                                },
                                level: 1,
                                reference: e,
                                open: c,
                                offset: {
                                    main: __c.Nz,
                                    FI: 0
                                },
                                boundary: g,
                                Fua: !0,
                                children: ({
                                    Zz: k
                                }) => uZ(Smb, {
                                    children: () => SZ(Qmb, {
                                        children: [uZ(fnb, {
                                            content: b
                                        }), f && uZ("div", {
                                            ref: k,
                                            className: "U14oZw",
                                            children: uZ(gnb, {})
                                        })]
                                    })
                                })
                            })
                        })
                    },
                    fnb = ({
                        content: a
                    }) =>
                    uZ(__c.Zz, {
                        light: "dark",
                        dark: "dark",
                        Fo: "dark",
                        Xq: "dark",
                        children: ({
                            className: b
                        }) => uZ("div", {
                            className: vZ(b, "F_wBfg"),
                            role: "tooltip",
                            children: "string" === typeof a ? uZ(__c.Yz, {
                                size: "small",
                                tagName: "div",
                                lineClamp: 0,
                                tone: "primary",
                                className: "_2V1T4g",
                                alignment: "start",
                                children: a
                            }) : a
                        })
                    }),
                    gnb = () => SZ("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 -7 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: vZ("_nNNQA", "UxWiaw"),
                        children: [uZ("path", {
                            d: "M15 9L10.3972 4.67335C9.04995 3.40695 6.95006 3.40695 5.60282 4.67335L1 9L15 9Z",
                            className: "aSY8AA"
                        }), uZ("path", {
                            d: "M15 9L10.3972 4.67335C9.04995 3.40695 6.95006 3.40695 5.60282 4.67335L1 9L2.46004 9L6.28773 5.40198C7.25004 4.4974 8.74996 4.4974 9.71228 5.40198L13.54 9L15 9Z",
                            className: "sk_amQ"
                        })]
                    });
                var inb;
                __c.QE = () => GZ(function({
                    store: a
                }) {
                    return null == a ? null : uZ(hnb, {
                        DQ: a.DQ,
                        content: a.content,
                        open: a.open,
                        placement: a.placement,
                        arrow: a.arrow,
                        reference: uZ(inb, {
                            store: a
                        })
                    })
                });
                inb = GZ(({
                    store: a
                }) => {
                    const b = a.position;
                    return a.open ? uZ("div", {
                        style: {
                            position: "absolute",
                            left: b.left,
                            top: b.top,
                            width: b.width,
                            height: b.height,
                            pointerEvents: "none"
                        }
                    }) : uZ("div", {})
                });
                var jnb = class extends __c.TF {
                    get Vw() {
                        this.pD = this.VX = 0;
                        return this.o9
                    }
                    XMa(a) {
                        this.ME && this.o9.set(a.id, {
                            sheet: a.config,
                            pD: this.pD++,
                            parent: this.ME
                        })
                    }
                    WMa(a) {
                        this.ME && this.o9.set(a.id, {
                            sheet: a.config,
                            pD: this.pD++,
                            parent: this.ME
                        })
                    }
                    UD(a) {
                        this.pD = 0;
                        this.ME = {
                            type: "page",
                            page: a,
                            VX: this.VX++
                        };
                        super.UD(a);
                        __c.vj(a) && (__c.A(null != a.id), this.ME && this.o9.set(a.id, {
                            sheet: a.sheet,
                            pD: this.pD++,
                            parent: this.ME
                        }))
                    }
                    u_(a) {
                        this.pD = 0;
                        this.ME = {
                            type: "body",
                            body: a,
                            VX: this.VX++
                        };
                        super.u_(a)
                    }
                    constructor() {
                        super();
                        this.o9 =
                            new Map;
                        this.ME = void 0;
                        this.pD = this.VX = 0
                    }
                };
                __c.WZ = class {
                    constructor(a) {
                        this.tq = new __c.Xza(a)
                    }
                };
                __c.WZ.prototype.AV = __c.da(21);
                __c.ZZ = class {
                    getCells(a) {
                        var b = __c.Gmb(this, a);
                        if (null == b.range) return {
                            columns: [],
                            rows: []
                        };
                        a = b.sheet;
                        b = b.range;
                        return {
                            columns: (new __c.XZ(a, b)).toArray(),
                            rows: (new __c.YZ(a, b)).toArray()
                        }
                    }
                    constructor(a, b, c, d) {
                        this.document = a;
                        this.Toa = b;
                        this.p9 = c;
                        this.Twa = d
                    }
                };
                __c.ZZ.prototype.AV = __c.da(20);
                __c.XZ = class {*[Symbol.iterator]() {
                        var a = this.Rb;
                        const b = this.vWa,
                            c = this.sheet;
                        for (; null != a && a !== b; a = c.layout.cols.next(a)) yield a
                    }
                    toArray() {
                        const a = [];
                        for (const b of this) a.push(b);
                        return a
                    }
                    first(a) {
                        for (const b of this)
                            if (a(b)) return b
                    }
                    last(a) {
                        var b = this.Ic;
                        const c = this.k9a,
                            d = this.sheet;
                        for (; null != b && b !== c; b = d.layout.cols.rc(b))
                            if (a(b)) return b
                    }
                    findIndex(a) {
                        let b = 0;
                        for (const c of this) {
                            if (a(c)) return b;
                            ++b
                        }
                        return -1
                    }
                    filter(a) {
                        const b = [];
                        let c = 0;
                        for (const d of this) a(d, c++) && b.push(d);
                        return b
                    }
                    map(a) {
                        const b = [];
                        let c = 0;
                        for (const d of this) {
                            const e = a(d, c++);
                            b.push(e)
                        }
                        return b
                    }
                    every(a) {
                        let b = 0;
                        for (const c of this)
                            if (!a(c, b++)) return !1;
                        return !0
                    }
                    constructor(a, b) {
                        this.sheet = a;
                        var c;
                        const d = null !== (c = b && Hmb(b.start)) && void 0 !== c ? c : a.layout.cols.first();
                        this.Rb = C(d);
                        this.k9a = a.layout.cols.rc(this.Rb);
                        var e;
                        b = null !== (e = b && Hmb(b.end)) && void 0 !== e ? e : a.layout.cols.last();
                        this.Ic = C(b);
                        this.vWa = a.layout.cols.next(this.Ic)
                    }
                };
                __c.YZ = class {*[Symbol.iterator]() {
                        var a = this.Yb;
                        const b = this.wWa,
                            c = this.sheet;
                        for (; null != a && a !== b; a = c.layout.rows.next(a)) yield a
                    }
                    toArray() {
                        const a = [];
                        for (const b of this) a.push(b);
                        return a
                    }
                    first(a) {
                        for (const b of this)
                            if (a(b)) return b
                    }
                    last(a) {
                        var b = this.Tc;
                        const c = this.l9a,
                            d = this.sheet;
                        for (; null != b && b !== c; b = d.layout.rows.rc(b))
                            if (a(b)) return b
                    }
                    filter(a) {
                        const b = [];
                        let c = 0;
                        for (const d of this) a(d, c++) && b.push(d);
                        return b
                    }
                    every(a) {
                        let b = 0;
                        for (const c of this)
                            if (!a(c, b++)) return !1;
                        return !0
                    }
                    map(a) {
                        const b = [];
                        let c = 0;
                        for (const d of this) {
                            const e = a(d, c++);
                            b.push(e)
                        }
                        return b
                    }
                    findIndex(a) {
                        let b = 0;
                        for (const c of this) {
                            if (a(c)) return b;
                            ++b
                        }
                        return -1
                    }
                    constructor(a, b) {
                        this.sheet = a;
                        var c;
                        const d = null !== (c = b && Kmb(b.start)) && void 0 !== c ? c : a.layout.rows.first();
                        this.Yb = C(d);
                        this.l9a = a.layout.rows.rc(this.Yb);
                        var e;
                        b = null !== (e = b && Kmb(b.end)) && void 0 !== e ? e : a.layout.rows.last();
                        this.Tc = C(b);
                        this.wWa = a.layout.rows.next(this.Tc)
                    }
                };
                OE = __c.OE = {};
                OE.Lcb = __c.XZ;
                OE.Ucb = __c.ZZ;
                OE.Yfb = __c.YZ;
                OE.LTa = (a, b, c) => new __c.ZZ(a, new jnb, new __c.WZ(b), c);
                OE.Grb = __c.Jmb;
                var knb = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20.291 7.267a9 9 0 0 0-2.963-2.947c-.353-.216-.806-.064-.992.306-.185.37-.033.818.316 1.04a7.498 7.498 0 0 1 .024 12.653c-.348.223-.499.671-.312 1.04.188.37.64.52.994.303A9 9 0 0 0 20.29 7.267ZM3.709 7.267A9 9 0 0 1 6.672 4.32c.353-.216.806-.064.992.306.185.37.033.818-.316 1.04a7.5 7.5 0 0 0-.025 12.653c.35.223.5.671.313 1.04-.188.37-.64.52-.994.303A9 9 0 0 1 3.71 7.267Z" fill="currentColor"/><path d="M17.308 9.203a6 6 0 0 0-1.392-1.748c-.313-.27-.783-.174-1.012.172-.229.345-.13.806.173 1.09a4.501 4.501 0 0 1-.098 6.655c-.31.275-.423.733-.204 1.084.22.352.685.463 1.007.202a6 6 0 0 0 1.526-7.455ZM6.69 9.203a6 6 0 0 1 1.392-1.748c.314-.27.783-.174 1.012.172.23.345.13.806-.172 1.09a4.5 4.5 0 0 0 .097 6.655c.31.275.423.733.205 1.084-.22.352-.686.463-1.007.202A6 6 0 0 1 6.69 9.203Z" fill="currentColor"/></svg>';
                __c.$Z = __c.bT({
                    medium: knb
                });
                var lnb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="1.9" transform="matrix(-1 0 0 1 14.4 2)" fill="#fff" stroke="#fff" stroke-width="1.2"/><circle cx="1.5" cy="1.5" r=".9" transform="matrix(-1 0 0 1 19 4.076)" fill="#fff" stroke="#fff" stroke-width="1.2"/><circle cx="6.5" cy="5.5" r=".9" fill="#fff" stroke="#fff" stroke-width="1.2"/><path d="M16.034 12.862c0-5.637-8.069-5.285-8.069 0 0 5.284 4.066 8.814 4.066 8.814s4.003-3.177 4.003-8.814ZM21 13c0-3.176-2.045-4.405-3.775-3.885a2.802 2.802 0 0 0-.225.079M3 13c0-3.176 2.045-4.405 3.775-3.885A2.8 2.8 0 0 1 7 9.194" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/><path d="M3 12.863a9 9 0 1 0 18 0" stroke="#fff" stroke-width="1.3"/></svg>';
                var mnb = __c.bT({
                    medium: lnb,
                    Rd: lnb
                });
                var nnb, qnb, a_;
                __c.pnb = NZ(function({
                    xn: a,
                    yn: b
                }) {
                    return a ? uZ(nnb, {
                        yn: b
                    }) : uZ(__c.onb, {})
                });
                __c.onb = NZ(function() {
                    return uZ(qnb, {
                        psa: mnb,
                        label: O("4aZhcQ"),
                        backgroundColor: "critical",
                        className: vZ({
                            vdvlyg: __c.iA.rb
                        })
                    })
                });
                nnb = NZ(function({
                    yn: a
                }) {
                    return uZ(qnb, {
                        psa: __c.$Z,
                        label: O("vaZIDQ"),
                        yn: a
                    })
                });
                qnb = NZ(function({
                    psa: a,
                    label: b,
                    yn: c = !0,
                    backgroundColor: d,
                    className: e
                }) {
                    return uZ(__c.ON, {
                        tG: "1u",
                        sG: "1.5u",
                        borderRadius: "elementSmall",
                        background: null !== d && void 0 !== d ? d : c ? "neutralLow" : "contrast",
                        className: e,
                        children: SZ(__c.BN, {
                            spacing: "1u",
                            Qi: "center",
                            children: [uZ(__c.CN, {
                                width: "content",
                                children: uZ(a, {
                                    size: "medium"
                                })
                            }), uZ(__c.CN, {
                                width: "content",
                                children: uZ(__c.Yz, {
                                    weight: "bold",
                                    tone: __c.Sz,
                                    children: b
                                })
                            })]
                        })
                    })
                });
                __c.rnb = NZ(function(a) {
                    const b = O("PG6NSw"),
                        c = O("p65+lQ");
                    return uZ(a_, { ...a,
                        label: b,
                        La: c
                    })
                });
                __c.snb = NZ(function(a) {
                    return uZ(a_, { ...a,
                        yn: !0,
                        stretch: !0,
                        label: O("p65+lQ")
                    })
                });
                __c.tnb = NZ(function(a) {
                    const b = a.yn ? O("tD6Ijg") : O("W+bvGQ");
                    return uZ(a_, { ...a,
                        label: b
                    })
                });
                a_ = NZ(function({
                    yn: a,
                    label: b,
                    ...c
                }) {
                    const d = Nmb();
                    return uZ(__c.DN, { ...c,
                        variant: a ? "secondary" : "contrast",
                        ariaLabel: b,
                        Bb: c.$c ? void 0 : d,
                        children: b
                    })
                });
            }).call(self, self._fe4d99ebe0d2d259646a80d250150d47);
        }

    }
])
//# sourceMappingURL=sourcemaps/5bcf2828a0b7e4ed.js.map