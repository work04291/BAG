(() => {
    "use strict";
    var e, r, t, n, f, s = {},
        c = {};

    function i(e) {
        var r = c[e];
        if (void 0 !== r) return r.exports;
        var t = c[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return s[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
    }
    i.m = s, i.amdD = function() {
        throw new Error("define cannot be used indirect")
    }, i.amdO = {}, e = [], i.O = (r, t, n, f) => {
        if (!t) {
            var s = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [t, n, f] = e[u], c = !0, a = 0; a < t.length; a++)
                    if ((!1 & f || s >= f) && Object.keys(i.O).every((e => i.O[e](t[a])))) t.splice(a--, 1);
                    else if (c = !1, f < s) s = f;
                if (c) {
                    e.splice(u--, 1);
                    var o = n();
                    if (void 0 !== o) r = o
                }
            }
            return r
        } else {
            f = f || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > f; u--) e[u] = e[u - 1];
            e[u] = [t, n, f]
        }
    }, i.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return i.d(r, {
            a: r
        }), r
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(e, n) {
        if (1 & n) e = this(e);
        if (8 & n) return e;
        if ("object" == typeof e && e) {
            if (4 & n && e.__esModule) return e;
            if (16 & n && "function" == typeof e.then) return e
        }
        var f = Object.create(null);
        i.r(f);
        var s = {};
        r = r || [null, t({}), t([]), t(t)];
        for (var c = 2 & n && e;
            "object" == typeof c && !~r.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((r => s[r] = () => e[r]));
        return s.default = () => e, i.d(f, s), f
    }, i.d = (e, r) => {
        for (var t in r)
            if (i.o(r, t) && !i.o(e, t)) Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
    }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((r, t) => (i.f[t](e, r), r)), [])), i.u = e => {
        if (7235 === e) return "0b4d35a18dad9579.js";
        if (869 === e) return "610de4e9d6ea075b.js";
        if (7768 === e) return "58642d6f32932068.js";
        if (8293 === e) return "5bcf2828a0b7e4ed.js";
        if (4400 === e) return "0c1b3154e4749648.vendor.js";
        if (5486 === e) return "21642c13e77971d7.js";
        if (4043 === e) return "4b686f63c53900e5.vendor.js";
        if (1761 === e) return "63b5d1e48591bd18.vendor.js";
        if (336 === e) return "6c4da29062dda2df.js";
        if (4667 === e) return "feee829884b5a4d4.js";
        if (8058 === e) return "b4a3545ccc28d475.js";
        if (4874 === e) return "46519581c178da2e.js";
        if (7833 === e) return "d2ca37ba0aa21c56.js";
        if (4995 === e) return "3aa1fd9c14801c16.js";
        if (1434 === e) return "61a9476f38f209f2.js";
        if (7970 === e) return "4b0cafaf27829eee.js";
        if (6559 === e) return "d036b7df86820bd6.js";
        if (5654 === e) return "fe0dc4e3ff35385c.js";
        if (6061 === e) return "8c061a9923af6725.js";
        if (7972 === e) return "9cc75576839814a6.js";
        if (7628 === e) return "e50bd59332867aa5.js";
        if (7717 === e) return "8d7e9731d011b921.js";
        if (1481 === e) return "ebc5c71362b4e3b8.js";
        if (8272 === e) return "d496ac861d176b00.js";
        if (5234 === e) return "dbada605beba2e0d.vendor.js";
        if (1500 === e) return "018caf7baf7c9174.js";
        if (1277 === e) return "66fd7feaecba98cb.js";
        if (6405 === e) return "a47cfb4a8944b92e.js";
        if (7406 === e) return "8c016ddda5bc1ef7.js";
        if (368 === e) return "2f92151c5b7c260f.js";
        if (1132 === e) return "a68d47997f15c344.js";
        if (1758 === e) return "625b7ef3b2b133d3.js";
        if (5196 === e) return "41c87368a794731c.js";
        if (2780 === e) return "637ee57131f08f64.js";
        if (5024 === e) return "41868af36fb33a36.js";
        if (6966 === e) return "7db023a7df10187d.js";
        if (382 === e) return "5eb055af73c90a7c.js";
        if (2933 === e) return "bc102a5ee7d0bd55.vendor.js";
        if (1169 === e) return "44329fe2f0d91475.js";
        if (7172 === e) return "6514d680a99de08b.js";
        if (4143 === e) return "7e1669d0e55e920e.js";
        if (5447 === e) return "12aa4f8212468d9f.js";
        if (6566 === e) return "f751dbadedd3e6d2.js";
        if (9222 === e) return "b56ad8d0c6d1a21e.js";
        if (5665 === e) return "b9a0a901afd0fe79.js";
        if (574 === e) return "93b70fe33dba89b0.js";
        if (9091 === e) return "f6223ff878dba36d.js";
        if (4492 === e) return "f7ab3356803e8948.js";
        if (4283 === e) return "0c0302cbd99f42c4.js";
        if (2921 === e) return "1dcbe83ba464af21.js";
        if (8701 === e) return "ad1ea25ae7cd170e.js";
        if (4411 === e) return "fd20ff00d85cc26b.js";
        if (781 === e) return "422f24a7885087fb.js";
        if (1327 === e) return "425cd1ba55f3ca8f.js";
        if (8226 === e) return "db418f39b0736556.js";
        if (4450 === e) return "2dad15e10cd1b35c.js";
        if (2911 === e) return "f42f88f41dc7add0.js";
        if (2104 === e) return "640258ec3f74fde3.js";
        if (9927 === e) return "14270ca96bb1d9a1.js";
        if (6674 === e) return "00c62734220a44f5.js";
        if (419 === e) return "ec98c3222ad0c2d0.js";
        if (631 === e) return "0833ffe0e6dfa09f.js";
        if (7351 === e) return "13eaba859ff9cbd9.vendor.js";
        if (5706 === e) return "b23df32b4883f13d.js";
        if (1869 === e) return "f5b8dbcb0a16f997.js";
        if (9189 === e) return "8e55c50768933e67.js";
        if (3441 === e) return "e06b0464b0544c4c.js";
        if (1923 === e) return "3fee1d270b773ed5.js";
        if (8889 === e) return "ea9832961140ae07.js";
        if (9482 === e) return "dfdfac645a53ccdd.js";
        if (1904 === e) return "ca1ce1acde35e31b.js";
        if (7437 === e) return "7ddb2e9949eeea42.js";
        if (1078 === e) return "d2cc6bfbeb8664d7.js";
        if (7592 === e) return "1e2b6a6ca0c66018.js";
        if (6763 === e) return "95af02070baba15c.js";
        if (371 === e) return "287b623414904854.js";
        if (3103 === e) return "38ab782dd02f3fd5.js";
        if (3607 === e) return "d0a4d2ec867f27b4.js";
        if (2188 === e) return "c85daa168c3699fd.js";
        if (364 === e) return "16023d4adec70ab6.js";
        if (6420 === e) return "aa0e0bed35c3aecb.js";
        if (9552 === e) return "3b2b6adb0247cb3b.js";
        if (4161 === e) return "a094c3e5a9a7ebf8.js";
        if (9443 === e) return "a34f47751fbdbc79.js";
        if (7831 === e) return "9fcafe6ce4de5443.js";
        if (3962 === e) return "a2f4d389d51de833.js";
        if (2758 === e) return "c0b5c4e512ac26e7.js";
        if (7533 === e) return "876e4c0400a12699.js";
        if (6889 === e) return "c681cc2a51c8407b.js";
        if (3496 === e) return "64a297a84a5319a4.js";
        if (6069 === e) return "71d02de00bffb178.js";
        if (1597 === e) return "b7e80294724731ce.js"
    }, i.miniCssF = e => {
        if (7235 === e) return "713265768292236b.ltr.css";
        if (869 === e) return "d7cf0aba64e1b2d4.ltr.css";
        if ({
                7768: 1,
                5486: 1,
                336: 1,
                4667: 1,
                4874: 1,
                7833: 1,
                4995: 1,
                1434: 1,
                6559: 1,
                6061: 1,
                7972: 1,
                7628: 1,
                7717: 1,
                1500: 1,
                1277: 1,
                6405: 1,
                368: 1,
                1132: 1,
                1758: 1,
                5196: 1,
                2780: 1,
                6966: 1,
                5447: 1,
                6566: 1,
                9222: 1,
                5665: 1,
                9091: 1,
                4492: 1,
                4283: 1,
                2921: 1,
                4411: 1,
                781: 1,
                8226: 1,
                4450: 1,
                2911: 1,
                2104: 1,
                9927: 1,
                6674: 1,
                419: 1,
                631: 1,
                9189: 1,
                3441: 1,
                1923: 1,
                8889: 1,
                9482: 1,
                1904: 1,
                7437: 1,
                1078: 1,
                7592: 1,
                6763: 1,
                371: 1,
                3103: 1,
                3607: 1,
                2188: 1,
                364: 1,
                6420: 1,
                9552: 1,
                4161: 1,
                9443: 1,
                7831: 1,
                3962: 1,
                2758: 1,
                7533: 1,
                6889: 1,
                3496: 1,
                6069: 1,
                1597: 1
            }[e]) return "ef46db3751d8e999.ltr.css";
        if (8293 === e) return "1144a8d79b335fb4.ltr.css";
        if ({
                4400: 1,
                4043: 1,
                1761: 1,
                5234: 1,
                2933: 1,
                7351: 1
            }[e]) return "ef46db3751d8e999.vendor.ltr.css";
        if (8058 === e) return "c9bf091720f7f1c3.ltr.css";
        if (7970 === e) return "ca10385ab7f3657c.ltr.css";
        if (5654 === e) return "71dec1f5d11e3f66.ltr.css";
        if (1481 === e) return "f8678f5d2a496896.ltr.css";
        if (8272 === e) return "aed61a49fdfc513b.ltr.css";
        if (7406 === e) return "5b2241d885919c07.ltr.css";
        if (5024 === e) return "35a3a289b0e33843.ltr.css";
        if (382 === e) return "5b7fe8f909b06739.ltr.css";
        if (1169 === e) return "44ce630fa966dd23.ltr.css";
        if (7172 === e) return "461539f293620955.ltr.css";
        if (4143 === e) return "8dd0cb1e0979d988.ltr.css";
        if (574 === e) return "638e8938c76a575e.ltr.css";
        if (8701 === e) return "b7b22b970eb2bad7.ltr.css";
        if (1327 === e) return "489dec8cbb9570e2.ltr.css";
        if (5706 === e) return "9aead81fb6b98c2e.ltr.css";
        if (1869 === e) return "da210214fd5a61ff.ltr.css"
    }, i.miniCssFRtl = e => {
        if (8581 === e) return "c166e5d20ad58f4e.runtime.rtl.css";
        if ({
                2653: 1,
                4400: 1,
                4043: 1,
                1761: 1,
                5234: 1,
                2933: 1,
                7351: 1
            }[e]) return "c166e5d20ad58f4e.vendor.rtl.css";
        if (5436 === e) return "8e54262212aed57f.vendor.rtl.css";
        if (1389 === e) return "96142277882fe2ee.rtl.css";
        if (7235 === e) return "5db69e5a20a88558.rtl.css";
        if (869 === e) return "cb3538416979fc60.rtl.css";
        if ({
                7768: 1,
                5486: 1,
                336: 1,
                4667: 1,
                4874: 1,
                7833: 1,
                4995: 1,
                1434: 1,
                6559: 1,
                6061: 1,
                7972: 1,
                7628: 1,
                7717: 1,
                1500: 1,
                1277: 1,
                6405: 1,
                368: 1,
                1132: 1,
                1758: 1,
                5196: 1,
                2780: 1,
                6966: 1,
                5447: 1,
                6566: 1,
                9222: 1,
                5665: 1,
                9091: 1,
                4492: 1,
                4283: 1,
                2921: 1,
                4411: 1,
                781: 1,
                8226: 1,
                4450: 1,
                2911: 1,
                2104: 1,
                9927: 1,
                6674: 1,
                419: 1,
                631: 1,
                9189: 1,
                3441: 1,
                1923: 1,
                8889: 1,
                9482: 1,
                1904: 1,
                7437: 1,
                1078: 1,
                7592: 1,
                6763: 1,
                371: 1,
                3103: 1,
                3607: 1,
                2188: 1,
                364: 1,
                6420: 1,
                9552: 1,
                4161: 1,
                9443: 1,
                7831: 1,
                3962: 1,
                2758: 1,
                7533: 1,
                6889: 1,
                3496: 1,
                6069: 1,
                1597: 1
            }[e]) return "c166e5d20ad58f4e.rtl.css";
        if (8293 === e) return "6e77e904b6f62cbe.rtl.css";
        if (8058 === e) return "49dcf4c456be0dd9.rtl.css";
        if (7970 === e) return "be92cdc2c813e15f.rtl.css";
        if (5654 === e) return "7cf7805937173758.rtl.css";
        if (1481 === e) return "29bdbb1d75c8c7a3.rtl.css";
        if (8272 === e) return "7dac84e36568326f.rtl.css";
        if (7406 === e) return "3759df5a77daebac.rtl.css";
        if (5024 === e) return "8cc048da50540270.rtl.css";
        if (382 === e) return "b197b394e4f55ce1.rtl.css";
        if (1169 === e) return "8ec5819b5639aca4.rtl.css";
        if (7172 === e) return "d7d1846551769d74.rtl.css";
        if (4143 === e) return "eaf9987ddc748d09.rtl.css";
        if (574 === e) return "1e246b15020f607d.rtl.css";
        if (8701 === e) return "40d498020700876c.rtl.css";
        if (1327 === e) return "7974d5bbdf33c24b.rtl.css";
        if (5706 === e) return "3d568ff77a27c8c1.rtl.css";
        if (1869 === e) return "dd4f397bdc4982dc.rtl.css"
    }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), i.hmd = e => {
        if (!(e = Object.create(e)).children) e.children = [];
        return Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: () => {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), n = {}, f = "@canva/web:", i.l = (e, r, t, s) => {
        if (!n[e]) {
            var c, a;
            if (void 0 !== t)
                for (var o = document.getElementsByTagName("script"), u = 0; u < o.length; u++) {
                    var d = o[u];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == f + t) {
                        c = d;
                        break
                    }
                }
            if (!c) {
                if (a = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc) c.setAttribute("nonce", i.nc);
                c.setAttribute("data-webpack", f + t), c.src = e
            }
            n[e] = [r];
            var l = (r, t) => {
                    c.onerror = c.onload = null, clearTimeout(b);
                    var f = n[e];
                    if (delete n[e], c.parentNode && c.parentNode.removeChild(c), f && f.forEach((e => e(t))), r) return r(t)
                },
                b = setTimeout(l.bind(null, void 0, {
                    type: "timeout",
                    target: c
                }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), a && document.head.appendChild(c)
        } else n[e].push(r)
    }, i.r = e => {
        if ("undefined" != typeof Symbol && Symbol.toStringTag) Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.nmd = e => {
        if (e.paths = [], !e.children) e.children = [];
        return e
    }, (() => {
        const e = i.e,
            r = function e(r, t, n) {
                return r().catch((function(f) {
                    return 0 === n ? Promise.reject(f) : (s = t, new Promise((function(e) {
                        setTimeout(e, s)
                    }))).then((function() {
                        return e(r, t, n - 1)
                    }));
                    var s
                }))
            };
        i.e = function(t) {
            return r((function() {
                return e(t)
            }), 1e3, 5)
        }
    })(), i.p = "", (() => {
        if (self.__batch_chunks__) ! function(e, r, t, n, f, s, c, i, a) {
            const o = e.l;
            let u = [],
                d = [];
            const l = [];
            for (const k of document.head.querySelectorAll('link[rel="prefetch"][href]')) {
                const e = k.getAttribute("href");
                e && l.push(e)
            }
            let b = e => document.head.appendChild(e);
            e.l = function(e, r, f, c) {
                for (let t = 0; t < l.length; t++)
                    if (l[t].endsWith(e)) return l.splice(t, 1), o(e, r, f, c);
                if (t) {
                    if (0 === u.length) Promise.resolve().then((() => {
                        E(u, p), u = [], j = 0
                    }));
                    const r = y(e);
                    if (u.length >= 1 && j + r > s || u.length >= n) E(u, p), u = [], j = 0;
                    j += r
                } else {
                    if (h++ < 10) return o(e, r, f, c);
                    if (0 === u.length) setTimeout((() => w(u, p)), 1)
                }
                u.push({
                    src: e,
                    callback: function(t) {
                        if ("load" === t.type) r(t);
                        else o(e, r, f, c)
                    },
                    originalLoad: () => {
                        o(e, r, f, c)
                    }
                })
            }, e.loadCss = function(e, r) {
                const f = e.getAttribute("href");
                if (b = r || b, t) {
                    if (0 === d.length) Promise.resolve().then((() => {
                        E(d, v), d = [], m = 0
                    }));
                    const e = y(f);
                    if (d.length >= 1 && m + e > s || d.length >= n) E(d, v), d = [], m = 0;
                    m += e
                } else {
                    if (g++ < 15) return r(e);
                    if (0 === d.length) setTimeout((() => w(d, v)), 1)
                }
                d.push({
                    src: f,
                    callback: t => {
                        if ("load" === t.type) e.onload && e.onload(t);
                        else r(e)
                    },
                    originalLoad: () => {
                        r(e)
                    }
                })
            };
            let h = 0,
                j = 0;

            function p(e, t) {
                const n = document.createElement("script");
                let f;
                const s = e => {
                    n.onerror = n.onload = null, clearTimeout(f), n.parentNode && n.parentNode.removeChild(n), t("string" == typeof e ? {
                        type: "error",
                        target: {}
                    } : e)
                };
                n.onload = n.onerror = s, n.src = e, n.async = !1, f = setTimeout((() => s({
                    type: "timeout",
                    target: n
                })), r), document.head.appendChild(n)
            }
            let g = 0,
                m = 0;

            function v(e, r) {
                const t = document.createElement("link");
                t.onload = t.onerror = e => r(e), t.href = e, t.rel = "stylesheet", b(t)
            }

            function y(e) {
                const r = f(),
                    t = e.substring(r.length);
                return t ? c[t] || 0 : 0
            }

            function _() {
                const e = f(),
                    r = new URL(window.location.href);
                if (null == e ? void 0 : e.startsWith("http")) {
                    const {
                        protocol: r,
                        host: t
                    } = new URL(e);
                    return `${r}//chunk-composing.${t.split(".").slice(-2).join(".")}`
                } else if (["localhost", "127.0.0.1"].includes(r.hostname) && r.searchParams.get("pageLoadWorkerUrl")) return r.searchParams.get("pageLoadWorkerUrl");
                else return r.origin
            }
            async function w(e, r) {
                const t = f();
                let o, u = 0,
                    d = [];
                try {
                    o = self.navigator.serviceWorker
                } catch {}
                const l = i && (null == o ? void 0 : o.controller) ? await async function(e) {
                    const r = await caches.open(a),
                        t = [];
                    for (const n of e)
                        if (await r.match(n.src)) n.originalLoad();
                        else t.push(n);
                    return t
                }(e) : e;
                for (const f of l) {
                    const e = f.src.substring(t.length),
                        r = e ? c[e] || 0 : 0;
                    if (d.length >= 1 && u + r > s || d.length >= n) b(d), d = [], u = 0;
                    d.push(f), u += r
                }

                function b(e) {
                    if (1 === e.length) return void e[0].originalLoad();
                    const n = _(),
                        f = e.map((({
                            src: e
                        }) => e.substring(t.length))).join("+");
                    r(`${n}/chunk-batch/${f}`, (r => {
                        for (const {
                                callback: t,
                                src: n
                            } of e) t({
                            type: r.type,
                            target: {
                                src: n,
                                href: n
                            }
                        })
                    }))
                }
                d.length && b(d), e.length = 0
            }

            function E(e, r) {
                if (0 === e.length) return;
                const t = f();
                if (1 !== e.length) r(`${_()}/chunk-batch/${e.map((({src:e})=>e.substring(t.length))).join("+")}`, (r => {
                    for (const {
                            callback: t,
                            src: n
                        } of e) t({
                        type: r.type,
                        target: {
                            src: n,
                            href: n
                        }
                    })
                }));
                else e[0].originalLoad()
            }
        }(i, 12e4, self.__sync_batch_chunks__, 40, (() => i.p), 10485760, {
            "44339fd91d038827.ltr.css": 439289,
            "11abfaa14029097d.js": 14285551,
            "96142277882fe2ee.rtl.css": 439318,
            "6ef60ce8d871bc44.runtime.js": 64943,
            "a0684b0780c739e9.vendor.ltr.css": 15361,
            "d804d847f5d321a3.vendor.js": 2947657,
            "8e54262212aed57f.vendor.rtl.css": 15361,
            "8bf99e1463b687f7.vendor.js": 696791,
            "713265768292236b.ltr.css": 5804,
            "0b4d35a18dad9579.js": 372939,
            "5db69e5a20a88558.rtl.css": 5804,
            "d7cf0aba64e1b2d4.ltr.css": 248,
            "610de4e9d6ea075b.js": 5431,
            "cb3538416979fc60.rtl.css": 248,
            "0c1b3154e4749648.vendor.js": 171323,
            "1144a8d79b335fb4.ltr.css": 8139,
            "5bcf2828a0b7e4ed.js": 411308,
            "6e77e904b6f62cbe.rtl.css": 8139,
            "21642c13e77971d7.js": 85999,
            "4b686f63c53900e5.vendor.js": 115884,
            "63b5d1e48591bd18.vendor.js": 158513,
            "6c4da29062dda2df.js": 73192,
            "feee829884b5a4d4.js": 225049,
            "c9bf091720f7f1c3.ltr.css": 233,
            "b4a3545ccc28d475.js": 97206,
            "49dcf4c456be0dd9.rtl.css": 233,
            "46519581c178da2e.js": 113391,
            "58642d6f32932068.js": 17008,
            "61a9476f38f209f2.js": 17646,
            "71dec1f5d11e3f66.ltr.css": 360,
            "fe0dc4e3ff35385c.js": 519028,
            "7cf7805937173758.rtl.css": 360,
            "d036b7df86820bd6.js": 281013,
            "ca10385ab7f3657c.ltr.css": 354,
            "4b0cafaf27829eee.js": 571412,
            "be92cdc2c813e15f.rtl.css": 354,
            "8c061a9923af6725.js": 90551,
            "9cc75576839814a6.js": 122599,
            "e50bd59332867aa5.js": 237649,
            "8d7e9731d011b921.js": 243220,
            "f8678f5d2a496896.ltr.css": 355,
            "ebc5c71362b4e3b8.js": 244924,
            "29bdbb1d75c8c7a3.rtl.css": 355,
            "aed61a49fdfc513b.ltr.css": 355,
            "d496ac861d176b00.js": 269927,
            "7dac84e36568326f.rtl.css": 355,
            "018caf7baf7c9174.js": 196700,
            "dbada605beba2e0d.vendor.js": 32309,
            "66fd7feaecba98cb.js": 199854,
            "a47cfb4a8944b92e.js": 348563,
            "5b2241d885919c07.ltr.css": 360,
            "8c016ddda5bc1ef7.js": 149487,
            "3759df5a77daebac.rtl.css": 360,
            "2f92151c5b7c260f.js": 241216,
            "a68d47997f15c344.js": 40637,
            "625b7ef3b2b133d3.js": 40591,
            "41c87368a794731c.js": 24713,
            "35a3a289b0e33843.ltr.css": 9315,
            "41868af36fb33a36.js": 594389,
            "8cc048da50540270.rtl.css": 9315,
            "7db023a7df10187d.js": 41208,
            "5b7fe8f909b06739.ltr.css": 913,
            "5eb055af73c90a7c.js": 60552,
            "b197b394e4f55ce1.rtl.css": 913,
            "bc102a5ee7d0bd55.vendor.js": 648073,
            "44ce630fa966dd23.ltr.css": 607,
            "44329fe2f0d91475.js": 70099,
            "8ec5819b5639aca4.rtl.css": 607,
            "8dd0cb1e0979d988.ltr.css": 5557,
            "7e1669d0e55e920e.js": 218389,
            "eaf9987ddc748d09.rtl.css": 5557,
            "461539f293620955.ltr.css": 806,
            "6514d680a99de08b.js": 54367,
            "d7d1846551769d74.rtl.css": 806,
            "12aa4f8212468d9f.js": 179018,
            "f751dbadedd3e6d2.js": 98347,
            "b56ad8d0c6d1a21e.js": 183578,
            "b9a0a901afd0fe79.js": 470520,
            "638e8938c76a575e.ltr.css": 412,
            "93b70fe33dba89b0.js": 158993,
            "1e246b15020f607d.rtl.css": 414,
            "f6223ff878dba36d.js": 17002,
            "f7ab3356803e8948.js": 9219,
            "0c0302cbd99f42c4.js": 60800,
            "0833ffe0e6dfa09f.js": 9877,
            "1dcbe83ba464af21.js": 11132,
            "b7b22b970eb2bad7.ltr.css": 117998,
            "ad1ea25ae7cd170e.js": 2869733,
            "40d498020700876c.rtl.css": 118003,
            "13eaba859ff9cbd9.vendor.js": 52565,
            "9aead81fb6b98c2e.ltr.css": 17419,
            "b23df32b4883f13d.js": 228083,
            "3d568ff77a27c8c1.rtl.css": 17420,
            "da210214fd5a61ff.ltr.css": 9349,
            "f5b8dbcb0a16f997.js": 228329,
            "dd4f397bdc4982dc.rtl.css": 9349,
            "d2cc6bfbeb8664d7.js": 209141,
            "1e2b6a6ca0c66018.js": 3316,
            "95af02070baba15c.js": 68023,
            "287b623414904854.js": 229737,
            "38ab782dd02f3fd5.js": 299029,
            "d0a4d2ec867f27b4.js": 102754,
            "c85daa168c3699fd.js": 561089,
            "16023d4adec70ab6.js": 46329,
            "aa0e0bed35c3aecb.js": 214698,
            "3b2b6adb0247cb3b.js": 4456,
            "a094c3e5a9a7ebf8.js": 2785,
            "a34f47751fbdbc79.js": 1496,
            "9fcafe6ce4de5443.js": 3787,
            "a2f4d389d51de833.js": 2749,
            "c0b5c4e512ac26e7.js": 2614,
            "876e4c0400a12699.js": 2048,
            "c681cc2a51c8407b.js": 2759,
            "64a297a84a5319a4.js": 3036,
            "71d02de00bffb178.js": 4016,
            "b7e80294724731ce.js": 6118,
            "8e55c50768933e67.js": 2854,
            "e06b0464b0544c4c.js": 4390,
            "3fee1d270b773ed5.js": 4851,
            "ea9832961140ae07.js": 3101,
            "dfdfac645a53ccdd.js": 11030,
            "fd20ff00d85cc26b.js": 11133,
            "422f24a7885087fb.js": 34499,
            "489dec8cbb9570e2.ltr.css": 6905,
            "425cd1ba55f3ca8f.js": 98097,
            "7974d5bbdf33c24b.rtl.css": 6905,
            "db418f39b0736556.js": 59569,
            "2dad15e10cd1b35c.js": 1945,
            "f42f88f41dc7add0.js": 72663,
            "ca1ce1acde35e31b.js": 6520,
            "7ddb2e9949eeea42.js": 38729,
            "640258ec3f74fde3.js": 1428
        }, self.__check_cache_batch_chunks__, "assets-2")
    })(), i.g.BUILD_VARIABLES = Object.assign(i.g.BUILD_VARIABLES || {}, {
        PREFERRED_REACT_RENDERER: "concurrent"
    }), (() => {
        const e = JSON.parse('{"23121":382,"30454":8272,"49583":1481,"50932":2780,"68844":7717,"72714":6763,"135374":368,"135526":7406,"138636":4995,"144616":4043,"170001":371,"173354":5196,"201096":1761,"214753":3607,"222055":5024,"224291":4411,"233145":6069,"244231":4161,"247026":9222,"259569":1132,"267585":9189,"292751":6966,"304354":8701,"330885":8293,"332159":1869,"336573":1078,"342429":9443,"367621":4283,"372824":2911,"375928":1277,"376094":4874,"383429":1169,"395476":4450,"400681":7235,"416986":1758,"428831":631,"437052":1904,"472867":8889,"474916":7833,"477077":3103,"486591":5665,"495269":7628,"507142":7533,"512205":9927,"543072":6566,"546715":5447,"554310":1500,"562650":336,"577631":8226,"594184":9482,"614584":6405,"621725":7172,"627433":7351,"643221":3496,"684811":4143,"704018":6674,"707205":781,"720927":4492,"727107":7437,"743561":2188,"748136":5706,"757401":2921,"769958":6889,"772461":3441,"801166":5486,"806774":6061,"811321":7972,"825395":1597,"831591":3962,"840722":9091,"848966":2104,"851394":4667,"853084":1327,"862605":2758,"864486":7592,"870310":364,"871871":1923,"889051":419,"914053":9552,"936387":6420,"943630":7831,"946964":869,"957679":1169}'),
            r = JSON.parse('{"336":[],"364":[7172],"368":[7768,7970],"371":[7172],"382":[],"419":[],"574":[7768],"631":[574],"781":[],"869":[7235],"1078":[7172],"1132":[6559],"1169":[2933,7768],"1277":[5234,7768,7970],"1327":[],"1389":[],"1434":[8058],"1481":[6559],"1500":[5234,7768,7970],"1597":[],"1758":[8293],"1761":[],"1869":[574,7172],"1904":[8293],"1923":[],"2104":[],"2188":[7172],"2653":[],"2758":[],"2780":[],"2911":[8293],"2921":[7235],"2933":[],"3103":[7172],"3441":[],"3496":[],"3607":[7172],"3962":[],"4043":[4400],"4143":[7172,7235],"4161":[],"4283":[7235,7768],"4400":[],"4411":[],"4450":[],"4492":[],"4667":[],"4874":[8058,8293],"4995":[7235,8293],"5024":[],"5196":[],"5234":[4400],"5436":[],"5447":[7768],"5486":[4400,8293],"5654":[6559],"5665":[8293],"5706":[574,7235,8293],"6061":[5654],"6069":[],"6405":[7768,7970],"6420":[7172],"6559":[7768,7970],"6566":[7768],"6674":[],"6763":[7172],"6889":[],"6966":[8293],"7172":[2933,7768],"7235":[],"7351":[4400],"7406":[6559],"7437":[],"7533":[],"7592":[],"7628":[7768,7970],"7717":[6559],"7768":[],"7831":[],"7833":[7235,8293],"7970":[1434,7235],"7972":[5654],"8058":[],"8226":[],"8272":[6559],"8293":[7768],"8701":[4400,7172,7235,8293],"8889":[],"9091":[574],"9189":[],"9222":[7768],"9443":[],"9482":[],"9552":[],"9927":[]}'),
            t = (e, n, f) => {
                if (!f.has(e)) return f.add(e), r[e].forEach((e => t(e, n, f))), n.push(e), n
            };
        i.me = function(r) {
            const n = e[r];
            if (null == n) return Promise.resolve(i(r));
            const f = t(n, [], new Set);
            return Promise.all(f.map((e => i.e(e)))).then((() => i(r)))
        }
    })(), (() => {
        const e = {};
        i.f.locale = function(r, t) {
            ! function(e, r, t) {
                if (null == r[e]) {
                    const t = self.cmsg;
                    if (!t || !t.assets) return;
                    const n = t.loaded,
                        f = t.locale || "en";
                    if (n && n[e + "_" + f]) return;
                    const s = t.assets[f] && t.assets[f][e] && t.assets[f][e].js;
                    if (!s) return;
                    r[e] = Promise.all(s.map((t => new Promise(((n, f) => {
                        const s = i.p + t;
                        i.l(s, (s => {
                            if ("load" === s.type) r[e] = 0, n();
                            else delete r[e], f(new Error(`Fail to load message files@${t}`))
                        }), "ensure-locale-" + e, e)
                    })))))
                }
                const n = r[e];
                if (n) t.push(n)
            }(r, e, t)
        }
    })(), (() => {
        let e = "undefined" != typeof self && void 0 !== self.document ? self.document.body.parentElement.getAttribute("dir") : "ltr";
        if ("ltr" !== e && "rtl" !== e) console.warn("Could not determine the direction of text, please check that the dir attribute is set on the html tag"), e = "ltr";
        if ("rtl" === e) i.miniCssF = i.miniCssFRtl
    })(), (() => {
        if ("undefined" != typeof document) {
            var e = e => new Promise(((r, t) => {
                    var n = i.miniCssF(e),
                        f = i.p + n;
                    if (((e, r) => {
                            for (var t = document.getElementsByTagName("link"), n = 0; n < t.length; n++) {
                                var f = (c = t[n]).getAttribute("data-href") || c.getAttribute("href");
                                if ("stylesheet" === c.rel && (f === e || f === r)) return c
                            }
                            var s = document.getElementsByTagName("style");
                            for (n = 0; n < s.length; n++) {
                                var c;
                                if ((f = (c = s[n]).getAttribute("data-href")) === e || f === r) return c
                            }
                        })(n, f)) return r();
                    ((e, r, t, n, f) => {
                        var s = document.createElement("link");
                        s.rel = "stylesheet", s.type = "text/css", s.onerror = s.onload = t => {
                                if (s.onerror = s.onload = null, "load" === t.type) n();
                                else {
                                    var c = t && ("load" === t.type ? "missing" : t.type),
                                        i = t && t.target && t.target.href || r,
                                        a = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                                    if (a.code = "CSS_CHUNK_LOAD_FAILED", a.type = c, a.request = i, s.parentNode) s.parentNode.removeChild(s);
                                    f(a)
                                }
                            }, s.href = r,
                            function(e) {
                                const r = e => {
                                    document.head.appendChild(e)
                                };
                                if (i.loadCss) i.loadCss(e, r);
                                else r(e)
                            }(s)
                    })(e, f, 0, r, t)
                })),
                r = {
                    8581: 0
                };
            i.f.miniCss = (t, n) => {
                if (r[t]) n.push(r[t]);
                else if (0 !== r[t] && {
                        382: 1,
                        574: 1,
                        869: 1,
                        1169: 1,
                        1327: 1,
                        1481: 1,
                        1869: 1,
                        4143: 1,
                        5024: 1,
                        5654: 1,
                        5706: 1,
                        7172: 1,
                        7235: 1,
                        7406: 1,
                        7970: 1,
                        8058: 1,
                        8272: 1,
                        8293: 1,
                        8701: 1
                    }[t]) n.push(r[t] = e(t).then((() => {
                    r[t] = 0
                }), (e => {
                    throw delete r[t], e
                })))
            }
        }
    })(), (() => {
        var e = {
            8581: 0
        };
        i.f.j = (r, t) => {
            var n = i.o(e, r) ? e[r] : void 0;
            if (0 !== n)
                if (n) t.push(n[2]);
                else if (8581 != r) {
                var f = new Promise(((t, f) => n = e[r] = [t, f]));
                t.push(n[2] = f);
                var s = i.p + i.u(r),
                    c = new Error;
                i.l(s, (t => {
                    if (i.o(e, r)) {
                        if (0 !== (n = e[r])) e[r] = void 0;
                        if (n) {
                            var f = t && ("load" === t.type ? "missing" : t.type),
                                s = t && t.target && t.target.src;
                            c.message = "Loading chunk " + r + " failed.\n(" + f + ": " + s + ")", c.name = "ChunkLoadError", c.type = f, c.request = s, n[1](c)
                        }
                    }
                }), "chunk-" + r, r)
            } else e[r] = 0
        }, i.O.j = r => 0 === e[r];
        var r = (r, t) => {
                var n, f, [s, c, a] = t,
                    o = 0;
                if (s.some((r => 0 !== e[r]))) {
                    for (n in c)
                        if (i.o(c, n)) i.m[n] = c[n];
                    if (a) var u = a(i)
                }
                if (r) r(t);
                for (; o < s.length; o++) {
                    if (f = s[o], i.o(e, f) && e[f]) e[f][0]();
                    e[f] = 0
                }
                return i.O(u)
            },
            t = self.webpackChunk_canva_web = self.webpackChunk_canva_web || [];
        t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
    })()
})();
//# sourceMappingURL=sourcemaps/6ef60ce8d871bc44.runtime.js.map