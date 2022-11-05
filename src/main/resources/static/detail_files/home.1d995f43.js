(function (e) {
    function t(t) {
        for (var r, n, s = t[0], c = t[1], l = t[2], u = 0, d = []; u < s.length; u++) n = s[u], Object.prototype.hasOwnProperty.call(i, n) && i[n] && d.push(i[n][0]), i[n] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        p && p(t);
        while (d.length) d.shift()();
        return o.push.apply(o, l || []), a()
    }

    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], r = !0, n = 1; n < a.length; n++) {
                var s = a[n];
                0 !== i[s] && (r = !1)
            }
            r && (o.splice(t--, 1), e = c(c.s = a[0]))
        }
        return e
    }

    var r = {}, n = {home: 0}, i = {home: 0}, o = [];

    function s(e) {
        return c.p + "js/" + ({"page-home": "page-home"}[e] || e) + "." + {
            "chunk-707d1e16": "810efc2a",
            "page-home": "13a3be5b"
        }[e] + ".js"
    }

    function c(t) {
        if (r[t]) return r[t].exports;
        var a = r[t] = {i: t, l: !1, exports: {}};
        return e[t].call(a.exports, a, a.exports, c), a.l = !0, a.exports
    }

    c.e = function (e) {
        var t = [], a = {"chunk-707d1e16": 1, "page-home": 1};
        n[e] ? t.push(n[e]) : 0 !== n[e] && a[e] && t.push(n[e] = new Promise((function (t, a) {
            for (var r = "css/" + ({"page-home": "page-home"}[e] || e) + "." + {
                "chunk-707d1e16": "897ede19",
                "page-home": "9e84349f"
            }[e] + ".css", i = c.p + r, o = document.getElementsByTagName("link"), s = 0; s < o.length; s++) {
                var l = o[s], u = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (u === r || u === i)) return t()
            }
            var d = document.getElementsByTagName("style");
            for (s = 0; s < d.length; s++) {
                l = d[s], u = l.getAttribute("data-href");
                if (u === r || u === i) return t()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
                var r = t && t.target && t.target.src || i,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = r, delete n[e], p.parentNode.removeChild(p), a(o)
            }, p.href = i;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(p)
        })).then((function () {
            n[e] = 0
        })));
        var r = i[e];
        if (0 !== r) if (r) t.push(r[2]); else {
            var o = new Promise((function (t, a) {
                r = i[e] = [t, a]
            }));
            t.push(r[2] = o);
            var l, u = document.createElement("script");
            u.charset = "utf-8", u.timeout = 120, c.nc && u.setAttribute("nonce", c.nc), u.src = s(e);
            var d = new Error;
            l = function (t) {
                u.onerror = u.onload = null, clearTimeout(p);
                var a = i[e];
                if (0 !== a) {
                    if (a) {
                        var r = t && ("load" === t.type ? "missing" : t.type), n = t && t.target && t.target.src;
                        d.message = "Loading chunk " + e + " failed.\n(" + r + ": " + n + ")", d.name = "ChunkLoadError", d.type = r, d.request = n, a[1](d)
                    }
                    i[e] = void 0
                }
            };
            var p = setTimeout((function () {
                l({type: "timeout", target: u})
            }), 12e4);
            u.onerror = u.onload = l, document.head.appendChild(u)
        }
        return Promise.all(t)
    }, c.m = e, c.c = r, c.d = function (e, t, a) {
        c.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: a})
    }, c.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, c.t = function (e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (c.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) c.d(a, r, function (t) {
            return e[t]
        }.bind(null, r));
        return a
    }, c.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "/wec-counselor-leave-apps/leave/", c.oe = function (e) {
        throw console.error(e), e
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [], u = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var d = 0; d < l.length; d++) t(l[d]);
    var p = u;
    o.push([0, "chunk-vendors", "chunk-common"]), a()
})({
    0: function (e, t, a) {
        e.exports = a("4d71")
    }, "0172": function (e, t, a) {
        e.exports = {
            "error-light": "#f48c71",
            primary: "#3399ff",
            success: "#00cc66",
            warning: "#ff9900",
            error: "#ff4400",
            other: "#db3fd5",
            "text-dark": "#464c5b",
            "text-normal": "#657180",
            "text-light": "#9ea7b4",
            disabled: "#c3cbd6",
            border: "#d7dde4",
            divider: "#e3e8ee",
            bg: "#f5f7f9",
            white: "#fff",
            "school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
            "loop-task-green": "#75d8a6",
            "tag-brown": "#c2a366",
            "disabled-light": "#f7f7f7",
            "school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
            "success-light": "rgba(0, 204, 102, 0.1)",
            "warning-light": "rgba(255, 153, 0, 0.1)",
            "primary-light": "rgba(51, 153, 255, 0.1)",
            "safe-area-inset-bottom": "9.06667vw"
        }
    }, "21ed": function (e, t, a) {
        e.exports = {
            "error-light": "#f48c71",
            primary: "#3399ff",
            success: "#00cc66",
            warning: "#ff9900",
            error: "#ff4400",
            other: "#db3fd5",
            "text-dark": "#464c5b",
            "text-normal": "#657180",
            "text-light": "#9ea7b4",
            disabled: "#c3cbd6",
            border: "#d7dde4",
            divider: "#e3e8ee",
            bg: "#f5f7f9",
            white: "#fff",
            "school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
            "loop-task-green": "#75d8a6",
            "tag-brown": "#c2a366",
            "disabled-light": "#f7f7f7",
            "school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
            "success-light": "rgba(0, 204, 102, 0.1)",
            "warning-light": "rgba(255, 153, 0, 0.1)",
            "primary-light": "rgba(51, 153, 255, 0.1)",
            "safe-area-inset-bottom": "9.06667vw"
        }
    }, "2d2b": function (e, t, a) {
        "use strict";
        var r = a("2f73"), n = a.n(r);
        n.a
    }, "2f73": function (e, t, a) {
        e.exports = {
            "error-light": "#f48c71",
            primary: "#3399ff",
            success: "#00cc66",
            warning: "#ff9900",
            error: "#ff4400",
            other: "#db3fd5",
            "text-dark": "#464c5b",
            "text-normal": "#657180",
            "text-light": "#9ea7b4",
            disabled: "#c3cbd6",
            border: "#d7dde4",
            divider: "#e3e8ee",
            bg: "#f5f7f9",
            white: "#fff",
            "school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
            "loop-task-green": "#75d8a6",
            "tag-brown": "#c2a366",
            "disabled-light": "#f7f7f7",
            "school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
            "success-light": "rgba(0, 204, 102, 0.1)",
            "warning-light": "rgba(255, 153, 0, 0.1)",
            "primary-light": "rgba(51, 153, 255, 0.1)",
            "safe-area-inset-bottom": "9.06667vw"
        }
    }, 3425: function (e, t, a) {
        "use strict";
        var r = a("21ed"), n = a.n(r);
        n.a
    }, "3a49": function (e, t, a) {
        e.exports = {
            "error-light": "#f48c71",
            primary: "#3399ff",
            success: "#00cc66",
            warning: "#ff9900",
            error: "#ff4400",
            other: "#db3fd5",
            "text-dark": "#464c5b",
            "text-normal": "#657180",
            "text-light": "#9ea7b4",
            disabled: "#c3cbd6",
            border: "#d7dde4",
            divider: "#e3e8ee",
            bg: "#f5f7f9",
            white: "#fff",
            "school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
            "loop-task-green": "#75d8a6",
            "tag-brown": "#c2a366",
            "disabled-light": "#f7f7f7",
            "school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
            "success-light": "rgba(0, 204, 102, 0.1)",
            "warning-light": "rgba(255, 153, 0, 0.1)",
            "primary-light": "rgba(51, 153, 255, 0.1)",
            "safe-area-inset-bottom": "9.06667vw"
        }
    }, "437f": function (e, t, a) {
        e.exports = {
            "error-light": "#f48c71",
            primary: "#3399ff",
            success: "#00cc66",
            warning: "#ff9900",
            error: "#ff4400",
            other: "#db3fd5",
            "text-dark": "#464c5b",
            "text-normal": "#657180",
            "text-light": "#9ea7b4",
            disabled: "#c3cbd6",
            border: "#d7dde4",
            divider: "#e3e8ee",
            bg: "#f5f7f9",
            white: "#fff",
            "school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
            "loop-task-green": "#75d8a6",
            "tag-brown": "#c2a366",
            "disabled-light": "#f7f7f7",
            "school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
            "success-light": "rgba(0, 204, 102, 0.1)",
            "warning-light": "rgba(255, 153, 0, 0.1)",
            "primary-light": "rgba(51, 153, 255, 0.1)",
            "safe-area-inset-bottom": "9.06667vw"
        }
    }, 4517: function (e, t, a) {
        "use strict";
        var r = a("b28b"), n = a.n(r);
        n.a
    }, "4c78": function (e, t, a) {
        "use strict";
        var r = a("d69d"), n = a.n(r);
        n.a
    }, "4d71": function (e, t, a) {
        "use strict";
        a.r(t);
        a("e623"), a("e379"), a("5dc8"), a("37e1");
        var r = a("2b0e"), n = a("08f7"), i = a("8d5e"), o = a("3a2e"), s = a("d7ac"), c = a("334b"), l = a("2371");
        Object(o["l"])(), Object(o["n"])(), Object(i["a"])(), r["a"].prototype.$EventBus = new r["a"], r["a"].directive("scroll", n["a"]), r["a"].config.productionTip = !1, new r["a"]({
            router: s["a"],
            store: c["a"],
            render: function (e) {
                return e(l["a"])
            }
        }).$mount("#app")
    }, "5c99": function (e, t, a) {
        "use strict";
        var r = a("9201"), n = a.n(r);
        n.a
    }, "62c5": function (e, t, a) {
        "use strict";
        var r = a("6e09"), n = a.n(r);
        n.a
    }, "66a4": function (e, t, a) {
        e.exports = {
            "error-light": "#f48c71",
            primary: "#3399ff",
            success: "#00cc66",
            warning: "#ff9900",
            error: "#ff4400",
            other: "#db3fd5",
            "text-dark": "#464c5b",
            "text-normal": "#657180",
            "text-light": "#9ea7b4",
            disabled: "#c3cbd6",
            border: "#d7dde4",
            divider: "#e3e8ee",
            bg: "#f5f7f9",
            white: "#fff",
            "school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
            "loop-task-green": "#75d8a6",
            "tag-brown": "#c2a366",
            "disabled-light": "#f7f7f7",
            "school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
            "success-light": "rgba(0, 204, 102, 0.1)",
            "warning-light": "rgba(255, 153, 0, 0.1)",
            "primary-light": "rgba(51, 153, 255, 0.1)",
            "safe-area-inset-bottom": "9.06667vw"
        }
    }, "6b3e": function (e, t, a) {
        "use strict";
        var r = a("3a49"), n = a.n(r);
        n.a
    }, "6e09": function (e, t, a) {
        e.exports = {
            "error-light": "#f48c71",
            primary: "#3399ff",
            success: "#00cc66",
            warning: "#ff9900",
            error: "#ff4400",
            other: "#db3fd5",
            "text-dark": "#464c5b",
            "text-normal": "#657180",
            "text-light": "#9ea7b4",
            disabled: "#c3cbd6",
            border: "#d7dde4",
            divider: "#e3e8ee",
            bg: "#f5f7f9",
            white: "#fff",
            "school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
            "loop-task-green": "#75d8a6",
            "tag-brown": "#c2a366",
            "disabled-light": "#f7f7f7",
            "school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
            "success-light": "rgba(0, 204, 102, 0.1)",
            "warning-light": "rgba(255, 153, 0, 0.1)",
            "primary-light": "rgba(51, 153, 255, 0.1)",
            "safe-area-inset-bottom": "9.06667vw"
        }
    }, 8092: function (e, t, a) {
        "use strict";
        var r = a("437f"), n = a.n(r);
        n.a
    }, 9201: function (e, t, a) {
        e.exports = {
            "error-light": "#f48c71",
            primary: "#3399ff",
            success: "#00cc66",
            warning: "#ff9900",
            error: "#ff4400",
            other: "#db3fd5",
            "text-dark": "#464c5b",
            "text-normal": "#657180",
            "text-light": "#9ea7b4",
            disabled: "#c3cbd6",
            border: "#d7dde4",
            divider: "#e3e8ee",
            bg: "#f5f7f9",
            white: "#fff",
            "school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
            "loop-task-green": "#75d8a6",
            "tag-brown": "#c2a366",
            "disabled-light": "#f7f7f7",
            "school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
            "success-light": "rgba(0, 204, 102, 0.1)",
            "warning-light": "rgba(255, 153, 0, 0.1)",
            "primary-light": "rgba(51, 153, 255, 0.1)",
            "safe-area-inset-bottom": "9.06667vw"
        }
    }, ac37: function (e, t, a) {
        "use strict";
        a.d(t, "s", (function () {
            return c
        })), a.d(t, "g", (function () {
            return u
        })), a.d(t, "c", (function () {
            return p
        })), a.d(t, "v", (function () {
            return h
        })), a.d(t, "r", (function () {
            return v
        })), a.d(t, "u", (function () {
            return g
        })), a.d(t, "f", (function () {
            return w
        })), a.d(t, "t", (function () {
            return C
        })), a.d(t, "i", (function () {
            return O
        })), a.d(t, "a", (function () {
            return T
        })), a.d(t, "e", (function () {
            return j
        })), a.d(t, "o", (function () {
            return I
        })), a.d(t, "h", (function () {
            return L
        })), a.d(t, "y", (function () {
            return E
        })), a.d(t, "x", (function () {
            return P
        })), a.d(t, "l", (function () {
            return $
        })), a.d(t, "k", (function () {
            return q
        })), a.d(t, "z", (function () {
            return F
        })), a.d(t, "n", (function () {
            return U
        })), a.d(t, "m", (function () {
            return W
        })), a.d(t, "q", (function () {
            return H
        })), a.d(t, "p", (function () {
            return z
        })), a.d(t, "b", (function () {
            return V
        })), a.d(t, "j", (function () {
            return Z
        })), a.d(t, "d", (function () {
            return J
        })), a.d(t, "w", (function () {
            return X
        })), a.d(t, "A", (function () {
            return Y
        }));
        a("99af"), a("ac1f"), a("5319"), a("1276");
        var r = a("fa78"), n = a("8364"), i = a("d7ac"), o = {2210070006: "已被发布者删除、撤回"};
        r["a"].use("response", (function (e) {
            var t = e.code, a = o[t];
            return a && i["a"].replace({path: "/page-empty", query: {errorText: a}}), e
        }));
        var s = Object(n["c"])("/leave/stu/jssdk/queryConfig");

        function c() {
            return r["a"].post(s, {url: window.location.href.split("#")[0]})
        }

        var l = Object(n["c"])("leave/stu/list");

        function u() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [l].concat(t))
        }

        var d = Object(n["c"])("leave/checkApplyCondition");

        function p() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [d].concat(t))
        }

        var f = Object(n["c"])("leave/queryLeaveTypes");

        function h() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [f].concat(t))
        }

        var m = Object(n["c"])("leave/stu/obtainApproveFlow");

        function v() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [m].concat(t))
        }

        var b = Object(n["c"])("leave/stu/queryLeaveTypeCfg");

        function g() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [b].concat(t))
        }

        var y = Object(n["c"])("leave/stu/detail");

        function w() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [y].concat(t))
        }

        var x = Object(n["c"])("leave/queryLeaveDetail");

        function C() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [x].concat(t))
        }

        var k = Object(n["c"])("leave/stu/getStuBasicInfo");

        function O() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [k].concat(t))
        }

        var A = Object(n["c"])("leave/addCheatRecord");

        function T() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [A].concat(t))
        }

        var S = Object(n["c"])("leave/getCheatModuleStatus");

        function j() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].get.apply(r["a"], [S].concat(t))
        }

        var R = Object(n["c"])("leave/apply");

        function I() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [R].concat(t))
        }

        var L = Object(n["c"])("leave/getMobileOSSAccess"), _ = Object(n["c"])("leave/stu/searchTeacherOrStudent4cc");

        function E() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [_].concat(t))
        }

        var D = Object(n["c"])("leave/stu/querySearchHistory4cc");

        function P() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [D].concat(t))
        }

        var M = Object(n["c"])("leave/press");

        function $() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [M].concat(t))
        }

        var N = Object(n["c"])("leave/withdraw");

        function q() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [N].concat(t))
        }

        var B = Object(n["c"])("leave/terminate");

        function F() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [B].concat(t))
        }

        var U = Object(n["c"])("leave/report");

        function W() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [U].concat(t))
        }

        var H = Object(n["c"])("leave/saveExtend");

        function z() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [H].concat(t))
        }

        var G = Object(n["c"])("leave/stu/addSearchHistory4cc");

        function V() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [G].concat(t))
        }

        var Z = Object(n["c"])("leave/oss/getUploadPolicy");
        var J = Object(n["c"])("/leave/stu/downloadMedia"), K = Object(n["c"])("leave/stu/queryReportApprover");

        function X() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [K].concat(t))
        }

        var Q = Object(n["c"])("leave/stu/withdrawReport");

        function Y() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return r["a"].post.apply(r["a"], [Q].concat(t))
        }
    }, b230: function (e, t, a) {
        "use strict";
        var r = a("c190"), n = a.n(r);
        n.a
    }, b28b: function (e, t, a) {
        e.exports = {
            "error-light": "#f48c71",
            primary: "#3399ff",
            success: "#00cc66",
            warning: "#ff9900",
            error: "#ff4400",
            other: "#db3fd5",
            "text-dark": "#464c5b",
            "text-normal": "#657180",
            "text-light": "#9ea7b4",
            disabled: "#c3cbd6",
            border: "#d7dde4",
            divider: "#e3e8ee",
            bg: "#f5f7f9",
            white: "#fff",
            "school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
            "loop-task-green": "#75d8a6",
            "tag-brown": "#c2a366",
            "disabled-light": "#f7f7f7",
            "school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
            "success-light": "rgba(0, 204, 102, 0.1)",
            "warning-light": "rgba(255, 153, 0, 0.1)",
            "primary-light": "rgba(51, 153, 255, 0.1)",
            "safe-area-inset-bottom": "9.06667vw"
        }
    }, c190: function (e, t, a) {
        e.exports = {
            "error-light": "#f48c71",
            primary: "#3399ff",
            success: "#00cc66",
            warning: "#ff9900",
            error: "#ff4400",
            other: "#db3fd5",
            "text-dark": "#464c5b",
            "text-normal": "#657180",
            "text-light": "#9ea7b4",
            disabled: "#c3cbd6",
            border: "#d7dde4",
            divider: "#e3e8ee",
            bg: "#f5f7f9",
            white: "#fff",
            "school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
            "loop-task-green": "#75d8a6",
            "tag-brown": "#c2a366",
            "disabled-light": "#f7f7f7",
            "school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
            "success-light": "rgba(0, 204, 102, 0.1)",
            "warning-light": "rgba(255, 153, 0, 0.1)",
            "primary-light": "rgba(51, 153, 255, 0.1)",
            "safe-area-inset-bottom": "9.06667vw"
        }
    }, ca8a: function (e, t, a) {
        "use strict";
        var r = a("0172"), n = a.n(r);
        n.a
    }, cdea: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
            return d
        }));
        var r = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("div", {
                staticClass: "cat-tip flex-center font-white font-12 bg-warning",
                on: {click: e.openWhy}
            }, [a("cat-icon", {
                staticClass: "tip-icon",
                attrs: {size: "3.73333vw", name: "question"}
            }), a("div", {staticClass: "text-trunc"}, [e._v(" " + e._s(e.tipConfig.notAllowTitle) + " ")])], 1)
        }, n = [], i = (a("622e"), a("dd68")), o = a("60a3"), s = {
            components: {CatIcon: i["a"]}, props: {
                tipConfig: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, methods: {
                openWhy: function () {
                    Object(o["i"])({url: this.tipConfig.notAllowUrl || ""})
                }
            }
        }, c = s, l = (a("6b3e"), a("2877")), u = Object(l["a"])(c, r, n, !1, null, null, null), d = u.exports
    }, d69d: function (e, t, a) {
        e.exports = {
            "error-light": "#f48c71",
            primary: "#3399ff",
            success: "#00cc66",
            warning: "#ff9900",
            error: "#ff4400",
            other: "#db3fd5",
            "text-dark": "#464c5b",
            "text-normal": "#657180",
            "text-light": "#9ea7b4",
            disabled: "#c3cbd6",
            border: "#d7dde4",
            divider: "#e3e8ee",
            bg: "#f5f7f9",
            white: "#fff",
            "school-task-pink": "linear-gradient(-54.6563228deg, #ff615e 0%, #ff615e 0%, #ff9895 99%, #ff9895 100%)",
            "loop-task-green": "#75d8a6",
            "tag-brown": "#c2a366",
            "disabled-light": "#f7f7f7",
            "school-task-primary": "linear-gradient(134deg, #61affe 0%, #61affe 2%, #2872f9 100%, #2872f9 100%)",
            "success-light": "rgba(0, 204, 102, 0.1)",
            "warning-light": "rgba(255, 153, 0, 0.1)",
            "primary-light": "rgba(51, 153, 255, 0.1)",
            "safe-area-inset-bottom": "9.06667vw"
        }
    }, d7ac: function (e, t, a) {
        "use strict";
        var r, n = a("2b0e"), i = a("8c4f"), o = (a("d3b7"), a("3217")), s = a("5500"), c = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "page-detail flex-col h-screen ios-touch-scroll relative"}, [0 === e.isEmpty ? a("cat-empty", {attrs: {"empty-text": e.emptyText}}) : 2 === e.isEmpty ? a("Tabs", {
                    staticClass: "flex-1",
                    on: {click: e.changeTab, disabled: e.disabledHandler},
                    model: {
                        value: e.active, callback: function (t) {
                            e.active = t
                        }, expression: "active"
                    }
                }, e._l(e.tabList, (function (t) {
                    return a("Tab", {
                        key: t.key,
                        attrs: {title: t.title, disabled: t.disabled}
                    }, [a("div", {staticClass: "flex-col h-screen flex-1 overflow-hidden"}, [a("div", {staticClass: "flex-1 overflow-y-auto"}, [0 === e.active ? a("span", [e.tipConfig.notAllowTitle && e.tipConfig.notAllowTitle.length > 0 ? a("cat-tip", {attrs: {"tip-config": e.tipConfig}}) : e._e()], 1) : a("CatTitle", {
                        staticClass: "bg-warning tip px-20 text-center",
                        attrs: {size: "3.20000vw", title: "请出示专属核验二维码，用于验证请假单真伪"}
                    }), e.recordStatus && "1" !== e.recordStatus ? a("CatStatusFlag", {
                        staticClass: "no-shrink",
                        attrs: {text: e.nowTime, info: e.studentInfo, flag: e.recordStatus},
                        on: {"show-info": e.showInfoModal}
                    }) : a("CatStatusShow", {
                        staticClass: "no-shrink",
                        attrs: {info: e.info, "is-shared": e.isShared, status: e.approveStatus}
                    }), a(t.is, {
                        ref: t.ref,
                        refInFor: !0,
                        tag: "component",
                        attrs: {flag: e.recordStatus, "now-time-text": e.nowTime, "detail-info": e.detailInfo}
                    })], 1), 0 === e.active ? a("span", {staticClass: "no-shrink"}, [a("div", {staticClass: "btn-area flex jc-between no-shrink"}, [e.isReportApproving ? a("CatButton", {
                        staticClass: "flex-1 btn-hairline-t btn-hairline-r",
                        attrs: {type: "white", "text-color": "normal"},
                        on: {click: e.handleReportClick}
                    }, [e._v(" 撤回销假申请 ")]) : e._e(), e.isTranspond ? a("CatButton", {
                        staticClass: "flex-1",
                        class: e.transpondType.class,
                        attrs: {type: e.transpondType.type, "text-color": e.transpondType.textColor},
                        on: {click: e.toShare}
                    }, [e._v(" 转发 ")]) : e._e(), e.canWithdraw ? a("CatButton", {
                        staticClass: "flex-1 btn-hairline-l btn-hairline-t",
                        attrs: {type: "white", "text-color": "normal"},
                        on: {click: e.action}
                    }, [e._v(" 撤回 ")]) : e._e(), e.isExtend ? a("CatButton", {
                        staticClass: "flex-1",
                        class: e.extendClass,
                        attrs: {type: "white", "text-color": "normal"},
                        on: {click: e.toExtend}
                    }, [e._v(" " + e._s(e.extBtnText) + " ")]) : e._e(), e.showReportButton ? a("CatButton", {
                        staticClass: "flex-1",
                        attrs: {type: "primary"},
                        on: {click: e.toComplete}
                    }, [e._v(" 去销假 ")]) : e._e(), e.canTerminatedEarly ? a("CatButton", {
                        staticClass: "flex-1",
                        attrs: {type: "primary"},
                        on: {click: e.toFinishEarly}
                    }, [e._v(" 提前结束 ")]) : e._e()], 1), e.isLeaveReject && !e.isShared ? a("CatButton", {
                        staticClass: "no-shrink",
                        staticStyle: {"z-index": "100"},
                        on: {click: e.toCreate}
                    }, [e._v(" 重新申请 ")]) : e._e(), e.isPending && !e.isShared ? a("div", {staticClass: "flex jc-between no-shrink"}, [e.allowWithdraw ? e._e() : a("CatButton", {
                        staticClass: "flex-1 hairline-r hairline-t",
                        attrs: {type: "white", "text-color": "normal"},
                        on: {click: e.action}
                    }, [e._v(" 撤回 ")]), 1 === e.needApproval ? a("CatButton", {
                        staticClass: "flex-1",
                        attrs: {type: "primary", disabled: !e.canPush},
                        on: {click: e.push}
                    }, [e._v(" 催一下审批人 ")]) : e._e()], 1) : e._e(), a("CatSharePopup", {
                        ref: "CatSharePopup",
                        refInFor: !0
                    }), a("Popup", {
                        staticClass: "diy-extend-overlay",
                        model: {
                            value: e.showExtendTip, callback: function (t) {
                                e.showExtendTip = t
                            }, expression: "showExtendTip"
                        }
                    }, [a("div", {staticClass: "extend-tip"}, [a("div", {staticClass: "tip-header"}, [a("p", [e._v(e._s(e.popInfo.title))])]), a("div", {staticClass: "tip-content"}, [a("p", [e._v(e._s(e.popInfo.content))])]), a("div", {
                        staticClass: "tip-footer",
                        on: {
                            click: function (t) {
                                e.showExtendTip = !1
                            }
                        }
                    }, [a("p", [e._v("知道了")])])])])], 1) : e._e()])])
                })), 1) : e._e(), a("transition", {attrs: {name: "van-fade"}}, [a("CatPersonalModal", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.show,
                        expression: "show"
                    }],
                    staticClass: "w-screen h-screen absolute pin-l pin-t",
                    attrs: {info: e.studentInfo},
                    on: {close: e.closeModal}
                })], 1)], 1)
            }, l = [], u = (a("99af"), a("ac1f"), a("5319"), a("96cf"), a("1da1")), d = (a("0981"), a("c064")),
            p = (a("1752"), a("46df")), f = (a("a01b"), a("e028")), h = (a("8a58"), a("e41f")),
            m = (a("e17f"), a("2241")), v = (a("ab51"), a("f68c")), b = (a("bda7"), a("5e46")),
            g = (a("da3c"), a("0b33")), y = a("3b03"), w = a("5a0c"), x = a.n(w), C = a("45f7"), k = a("3a2e"),
            O = a("2730"), A = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "page-detail-info"}, [a("CatFlowLeaveMeta", {
                    staticClass: "no-shrink",
                    attrs: {info: e.info, "not-out-report": e.notOutReport}
                }), e.haveExt ? a("span", [a("CatCell", {
                    staticClass: "my-10 hairline-b hairline-t",
                    attrs: {label: "完整请假详情"},
                    on: {click: e.viewDetail}
                }, [a("div", {staticClass: "flex-1 ai-center jc-end text-right flex"}, [a("span", {staticClass: "font-success"}, [e._v("已通过")])]), a("div", {
                    staticClass: "flex-center font-light",
                    attrs: {slot: "right-icon"},
                    slot: "right-icon"
                }, [a("CatIcon", {
                    attrs: {
                        size: "3.73333vw",
                        name: "right-arrow"
                    }
                })], 1)]), a("CatExtendDetail", {
                    staticClass: "my-10",
                    attrs: {
                        my: !0,
                        "show-title": !0,
                        "is-click-location": !1,
                        info: e.currentNode,
                        "is-shared": e.isShared,
                        "need-approval": e.needApproval,
                        "approve-nodes": e.getApproveNodes(e.currentNode.approvers)
                    }
                }), (e.currentNode.approvers || []).length > 0 ? a("div", {staticClass: "py-10 font-12 bg-white px-20 my-10 hairline-t hairline-b"}, [a("span", {staticClass: "font-14 font-dark"}, [e._v("审批流程记录")]), a("CatAuditList", {
                    staticClass: "mt-10",
                    attrs: {
                        "need-approval": e.needApproval,
                        flows: e.currentNode.approvers,
                        "leave-satus": e.leaveStatusTerminal
                    }
                })], 1) : e._e()], 1) : a("span", [a("CatLeaveDetail", {
                    staticClass: "my-10",
                    attrs: {
                        my: !0,
                        "show-title": !0,
                        info: e.currentNode,
                        "is-shared": e.isShared,
                        "need-approval": e.needApproval,
                        "approve-nodes": e.getApproveNodes(e.currentNode.approvers)
                    }
                }), e.currentNode.approvers && e.currentNode.approvers.length > 0 ? a("div", {staticClass: "py-10 font-12 bg-white px-20 my-10 hairline-t hairline-b"}, [a("span", {staticClass: "font-14 font-dark"}, [e._v("审批流程记录")]), a("CatAuditList", {
                    staticClass: "mt-10",
                    attrs: {
                        "need-approval": e.needApproval,
                        flows: e.currentNode.approvers,
                        "leave-satus": e.leaveStatusTerminal
                    }
                })], 1) : e._e()], 1), e.isTerminatedEarly ? a("div", {staticClass: "py-10 font-12 bg-white px-20 mb-10 hairline-t hairline-b"}, [a("div", {staticClass: "font-dark font-14 mb-10"}, [e._v(" 提前结束信息 ")]), a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [e._v(" 操作人： ")]), a("div", {staticClass: "font-normal flex-1"}, [e._v(" " + e._s(e.terminationInfo.terminationObjectName || "") + " ")])]), a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [e._v(" 操作时间： ")]), a("div", {staticClass: "font-normal flex-1"}, [e._v(" " + e._s(e.terminationInfo.terminationDate || "") + " ")])]), a("div", {staticClass: "flex mb-5 font-12 ai-start"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [e._v(" 原因： ")]), a("div", {staticClass: "font-normal flex-1"}, [e._v(" " + e._s(e.terminationInfo.terminationReason || "") + " ")])])]) : e._e(), a("BusCurrentApproverCell", {
                    staticClass: "hairline-t hairline-b mb-10",
                    attrs: {"next-approve-info": e.nextApproveInfo}
                }), e.isComplete ? a("CatCompleteInfo", {
                    staticClass: "bg-white px-20 py-10 mb-10 hairline-b hairline-t",
                    attrs: {info: e.info, "report-apply": e.reportApply}
                }) : e._e()], 1)
            }, T = [], S = (a("4de4"), a("4160"), a("b64b"), a("159b"), a("c25c"), a("5ca9")), j = (a("622e"), a("dd68")),
            R = (a("cb76"), a("889c")), I = a("8d5e"), L = a("fa78f"), _ = a.n(L), E = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return e.visible ? a("div", {staticClass: "bus-current-approver-cell"}, [a("CatCell", {
                    attrs: {label: "当前审批人"},
                    on: {click: e.viewApprovers}
                }, [a("div", {staticClass: "flex-1 ai-center jc-end text-right flex"}, [a("span", {class: [e.isOne ? "font-normal" : "font-primary"]}, [e._v(e._s(e.approverTEXT))])]), e.isOne ? e._e() : a("div", {
                    staticClass: "flex-center font-light",
                    attrs: {slot: "right-icon"},
                    slot: "right-icon"
                }, [a("CatIcon", {attrs: {size: "3.73333vw", name: "right-arrow"}})], 1)])], 1) : e._e()
            }, D = [], P = a("60a3"), M = {
                components: {CatCell: R["a"], CatIcon: j["a"]},
                props: {nextApproveInfo: {type: Object, default: null}},
                computed: {
                    visible: function () {
                        return this.nextApproveInfo && this.nextApproveInfo.nextApproveNodeApprovers
                    }, isOne: function () {
                        return this.nextApproveInfo && 1 === this.nextApproveInfo.count
                    }, approverTEXT: function () {
                        return this.isOne ? this.nextApproveInfo.firstApprover : "".concat(this.nextApproveInfo.firstApprover, "等").concat(this.nextApproveInfo.count, "人（或签）")
                    }
                },
                methods: {
                    viewApprovers: function () {
                        this.isOne || (localStorage.setItem("currentApprovers", this.nextApproveInfo.nextApproveNodeApprovers), Object(P["n"])({title: "当前审批人"}), this.$router.push("/viewCurrentApprovers"))
                    }
                }
            }, $ = M, N = a("2877"), q = Object(N["a"])($, E, D, !1, null, null, null), B = q.exports, F = a("d115"),
            U = a("0579"), W = a("0efe"), H = a("09d0"), z = a("6a6f"), G = {
                components: {
                    CatFlowLeaveMeta: F["a"],
                    CatCell: R["a"],
                    CatIcon: j["a"],
                    CatExtendDetail: U["a"],
                    CatLeaveDetail: W["a"],
                    BusCurrentApproverCell: B,
                    CatCompleteInfo: H["a"],
                    CatAuditList: S["a"]
                }, props: {
                    detailInfo: {
                        type: Object, default: function () {
                            return {}
                        }
                    }
                }, data: function () {
                    return {
                        isShared: !1,
                        leaveId: "",
                        info: {},
                        terminationInfo: {
                            allowTerminate: 0,
                            terminated: 0,
                            terminationObjectName: "",
                            terminationReason: ""
                        },
                        notOutReport: {
                            operatorDate: null,
                            operatorId: null,
                            operatorName: null,
                            operatorWid: null,
                            rule: 0,
                            setedNotOutReport: 0
                        },
                        leaveExtends: [],
                        approvers: [],
                        nextApproveInfo: null,
                        reportApply: 0,
                        mustOut: !1
                    }
                }, computed: {
                    currentNode: function () {
                        return this.leaveExtends.length > 0 ? this.leaveExtends[this.leaveExtends.length - 1] : this.info
                    }, leaveStatusTerminal: function () {
                        return this.currentNode.status
                    }, haveExt: function () {
                        return this.leaveExtends.length > 0
                    }, isComplete: function () {
                        return this.info.status === z["a"].COMPLETE || this.info.reportStatus
                    }, terminatedEarlyStatus: function () {
                        return this.terminationInfo.terminated
                    }, isTerminatedEarly: function () {
                        return this.terminatedEarlyStatus === z["c"].TERMINATED.YES
                    }, needApproval: function () {
                        return "0" === this.$route.params.needApproval || 0 === this.$route.params.needApproval ? 0 : 1
                    }
                }, watch: {
                    detailInfo: {
                        deep: !0, immediate: !0, handler: function (e) {
                            0 !== Object.keys(e).length && this.initPage(e)
                        }
                    }
                }, mounted: function () {
                    I["c"] && _.a.enable()
                }, beforeDestroy: function () {
                    I["c"] && _.a.disable()
                }, methods: {
                    viewDetail: function () {
                        this.$router.push("/record-detail/".concat(this.leaveId, "/").concat(this.needApproval))
                    }, getApproveNodes: function (e) {
                        return e && e.filter((function (e) {
                            return e.approveNode.length > 0 && e.approveNode[0].nodeWid
                        }))
                    }, initPage: function (e) {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, i, o, s;
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        t.leaveId = t.$route.params.id, t.isShared = 1 === t.$route.params.shared, Object(y["e"])(), n = e.data, Object(y["b"])(), t.info = n.detail || {}, n.leaveType && (t.mustOut = !(null === n || void 0 === n || null === (i = n.leaveType) || void 0 === i || !i.mustOut), t.reportApply = !(null === n || void 0 === n || null === (o = n.leaveType) || void 0 === o || !o.reportApply)), t.notOutReport = (null === n || void 0 === n ? void 0 : n.notOutReport) || {}, t.terminationInfo = (null === n || void 0 === n ? void 0 : n.termination) || {}, t.leaveExtends = (null === n || void 0 === n ? void 0 : n.leaveExtends) || [], t.nextApproveInfo = null === n || void 0 === n ? void 0 : n.nextApproveInfo, s = [], s = s.concat(null === n || void 0 === n || null === (r = n.detail) || void 0 === r ? void 0 : r.approvers), t.leaveExtends.forEach((function (e) {
                                            e.approvers.forEach((function (e) {
                                                e.extend = !0
                                            })), s = s.concat(e.approvers)
                                        })), t.approvers = s;
                                    case 15:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }
                }
            }, V = G, Z = (a("b230"), Object(N["a"])(V, A, T, !1, null, null, null)), J = Z.exports, K = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "page-detail-code"}, [e.isExceed ? a("cat-empty", {
                    staticClass: "page-detail-code--empty",
                    attrs: {"empty-text": "您的请假记录已过期"}
                }) : e.havenoCheckTimes ? a("div", {staticStyle: {"padding-top": "32.00000vw"}}, [a("cat-empty", {
                    attrs: {
                        "empty-text": "您的剩余核验次数为0",
                        img: e.error
                    }
                })], 1) : a("div", {staticClass: "detail-code flex-col ai-center mt-20"}, [a("v-dialog", {
                    attrs: {"confirm-button-text": "知道了"},
                    on: {confirm: e.getQr},
                    model: {
                        value: e.showTip, callback: function (t) {
                            e.showTip = t
                        }, expression: "showTip"
                    }
                }, [a("div", [a("div", {staticClass: "dialog-title"}, [e._v(" 核验成功 ")]), a("div", {staticClass: "dialog-item"}, [e._v(" " + e._s(e.detailInfo.data.studentInfo.userName) + "/" + e._s(e.detailInfo.data.studentInfo.userId) + " 核验成功 ")]), a("div", {staticClass: "dialog-item"}, [e._v(" 当前请假状态："), a("span", {class: e.color}, [e._v(e._s(e.boldText))])])])]), a("div", {staticClass: "code-wrap bg-white p-10 radius-normal mt-20"}, [a("CatQr", {
                    attrs: {
                        "color-dark": "#000",
                        "color-light": "#fff",
                        size: 160,
                        margin: 0,
                        text: e.text
                    }
                })], 1), a("div", {staticClass: "font-12 text-light mt-10 text-normal"}, [e._v(" 请使用辅导猫扫码核验请假单真伪 ")]), e.showCheckTimes ? a("div", {staticClass: "now-time-tip mt-20 bg-primary font-white px-15 font-16 font-bold"}, [e._v(" " + e._s(e.nowTimeText) + " "), a("br"), a("p", {staticClass: "times"}, [e._v(" 剩余核验次数：" + e._s(e.checkTimes) + " ")])]) : a("div", {
                    staticClass: "now-time-tip mt-20 bg-primary font-white px-15 font-16 font-bold",
                    staticStyle: {
                        height: "8.53333vw !important",
                        "border-radius": "4.26667vw !important",
                        "padding-top": "0px !important"
                    }
                }, [e._v(" " + e._s(e.nowTimeText) + " ")])], 1)], 1)
            }, X = [], Q = (a("e080"), a("58be")), Y = a("7c94"), ee = a("fa93"), te = a.n(ee), ae = {
                flag5: {color: "font-warning", boldText: "即将休假"},
                flag6: {color: "font-success", boldText: "正在休假中"},
                flag7: {color: "font-error", boldText: "销假逾期"},
                flag8: {color: "font-grey", boldText: "已完成"},
                flag4: {color: "font-error", boldText: "已驳回"},
                flag10: {color: "font-error", boldText: "已驳回"}
            }, re = {
                components: {CatQr: Q["a"], CatEmpty: d["a"], "v-dialog": m["a"].Component},
                props: {
                    nowTimeText: {type: String, default: "当前时间：20201125 05:30"},
                    flag: {type: String, default: ""},
                    detailInfo: {
                        type: Object, default: function () {
                            return {}
                        }
                    }
                },
                data: function () {
                    return {showTip: !1, error: te.a, id: "", checkTimes: "", timer: null}
                },
                computed: {
                    leaveId: function () {
                        return this.id
                    }, isExceed: function () {
                        return 100 === +this.flag
                    }, needApproval: function () {
                        return "0" === this.$route.params.needApproval || 0 === this.$route.params.needApproval ? 0 : 1
                    }, text: function () {
                        return "".concat(this.leaveId, "&").concat(this.needApproval)
                    }, havenoCheckTimes: function () {
                        return 0 === this.checkTimes
                    }, showCheckTimes: function () {
                        return this.checkTimes > 0
                    }, color: function () {
                        return ae["flag".concat(this.detailInfo.data.recordStatus)].color
                    }, boldText: function () {
                        return ae["flag".concat(this.detailInfo.data.recordStatus)].boldText
                    }
                },
                mounted: function () {
                    var e = this;
                    return Object(u["a"])(regeneratorRuntime.mark((function t() {
                        var a;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    e.id = e.$route.params.id, e.isExceed || (e.reload(), a = null, "WebSocket" in window ? (a = new WebSocket("".concat(("https:" === window.location.protocol ? "wss://" : "ws://") + window.location.host, "/wec-counselor-leave-apps/leave/api/websocket/").concat(e.id)), console.log("websocket连接成功")) : (console.log("websocket连接失败"), alert("当前浏览器 Not support websocket")), a.onmessage = function (t) {
                                        console.log("websocket响应"), "1" === t.data && (e.showTip = !0, clearInterval(e.timer))
                                    }, window.onbeforeunload = function () {
                                        console.log("离开页面websocket断开连接"), a.close()
                                    });
                                case 2:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                methods: {
                    reload: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(Y["a"])({
                                            leaveId: e.$route.params.id,
                                            needApproval: e.needApproval
                                        });
                                    case 2:
                                        if (a = t.sent, e.id = a.response.data.datas.qr, e.checkTimes = a.response.data.datas.checkTimes, 0 !== e.checkTimes) {
                                            t.next = 7;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 7:
                                        e.timer = setInterval(Object(u["a"])(regeneratorRuntime.mark((function t() {
                                            var a;
                                            return regeneratorRuntime.wrap((function (t) {
                                                while (1) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, Object(Y["a"])({
                                                            leaveId: e.$route.params.id,
                                                            needApproval: e.needApproval
                                                        });
                                                    case 2:
                                                        a = t.sent, e.id = a.response.data.datas.qr, e.checkTimes = a.response.data.datas.checkTimes;
                                                    case 5:
                                                    case"end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        }))), 15e3), e.$once("hook:beforeDestroy", (function () {
                                            clearInterval(e.timer)
                                        }));
                                    case 9:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, getQr: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        e.reload();
                                    case 1:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            }, ne = re, ie = (a("8092"), Object(N["a"])(ne, K, X, !1, null, null, null)), oe = ie.exports, se = a("3abe"),
            ce = a("ac37"), le = a("1024"), ue = a("fa7d"), de = a("cc83"), pe = a("cdea"), fe = a("468f"), he = {
                components: {
                    Tab: g["a"],
                    Tabs: b["a"],
                    PageDetailInfo: J,
                    PageDetailCode: oe,
                    CatStatusFlag: le["a"],
                    CatTitle: v["a"],
                    CatStatusShow: de["a"],
                    CatTip: pe["a"],
                    Dialog: m["a"],
                    Popup: h["a"],
                    CatButton: f["a"],
                    CatSharePopup: p["a"],
                    CatEmpty: d["a"],
                    CatPersonalModal: se["a"]
                }, data: function () {
                    var e = this;
                    return {
                        active: 0,
                        timer: "",
                        detailInfo: {},
                        nowTime: "",
                        nowTimeStr: "",
                        tipConfig: {},
                        recordStatus: null,
                        isShared: !1,
                        info: {},
                        leaveExtends: [],
                        allowWithdraw: 0,
                        canPush: !1,
                        showExtendTip: !1,
                        isEmpty: 1,
                        emptyText: "暂无数据",
                        popInfo: {title: "不可续假", content: "因学校管理员开启了该请假类型必离校，当前不可以进行续假操作，请重新申请请假"},
                        isReport: "0",
                        terminationInfo: {
                            allowTerminate: 0,
                            terminated: 0,
                            terminationObjectName: "",
                            terminationReason: ""
                        },
                        isAllowedExtend: !1,
                        leaveTypeCode: "",
                        showFinishModal: !1,
                        studentInfo: {},
                        show: !1,
                        actions: [{
                            text: "撤回并删除", color: "#ff4400", action: function () {
                                m["a"].confirm({
                                    title: "",
                                    message: "确定撤回并删除吗"
                                }).then(Object(u["a"])(regeneratorRuntime.mark((function t() {
                                    var a;
                                    return regeneratorRuntime.wrap((function (t) {
                                        while (1) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, e.actionsRequest(1);
                                            case 2:
                                                a = t.sent, "0" === a.code && (Object(C["c"])("操作成功"), e.$router.replace("/"));
                                            case 4:
                                            case"end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))).catch((function () {
                                }))
                            }
                        }, {
                            text: "撤回并重新编辑", action: function () {
                                e.toReEdit()
                            }
                        }],
                        reoprtActions: [{
                            text: "撤回并删除", color: "#ff4400", action: function () {
                                m["a"].confirm({
                                    title: "确定撤回并删除吗",
                                    message: " 确认撤回并删除提交的销假申请吗？撤回并删除后数据不可恢复，请谨慎操作！"
                                }).then(Object(u["a"])(regeneratorRuntime.mark((function t() {
                                    var a;
                                    return regeneratorRuntime.wrap((function (t) {
                                        while (1) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, e.reportActionsRequest();
                                            case 2:
                                                a = t.sent, "0" === a.code && (Object(C["c"])("操作成功"), window.location.reload());
                                            case 4:
                                            case"end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))).catch((function () {
                                }))
                            }
                        }, {
                            text: "撤回并重新编辑", action: function () {
                                var t = Object(u["a"])(regeneratorRuntime.mark((function t() {
                                    var a, r, n;
                                    return regeneratorRuntime.wrap((function (t) {
                                        while (1) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, e.reportActionsRequest();
                                            case 2:
                                                a = t.sent, r = a.datas, n = a.code, console.log(r, n), "0" === n && (Object(C["c"])("操作成功"), localStorage.setItem("widthDrawData", JSON.stringify(r.reportAttach)), e.doReportEdit());
                                            case 7:
                                            case"end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));

                                function a() {
                                    return t.apply(this, arguments)
                                }

                                return a
                            }()
                        }]
                    }
                }, computed: {
                    currentNodeTimeSection: function () {
                        var e = {};
                        if (this.leaveExtends.length > 0) {
                            var t = this.leaveExtends[this.leaveExtends.length - 1];
                            e = {startTimeStr: t.startTimeDB, endTimeStr: t.endTimeDB}
                        } else e = {startTimeStr: this.info.startDate, endTimeStr: this.info.endDate};
                        return e
                    }, isExtReject: function () {
                        return this.lastExtStatus === z["a"].REJECT
                    }, tabList: function () {
                        return [{
                            key: "info",
                            is: J,
                            title: "请假信息",
                            detailInfo: this.detailInfo,
                            disabled: !1
                        }, {
                            key: "code",
                            is: oe,
                            title: "核验二维码",
                            detailInfo: this.detailInfo,
                            disabled: "1" === this.recordStatus
                        }]
                    }, approveStatus: function () {
                        var e = this.info.status;
                        return e === z["a"].COMPLETE || e === z["a"].EXCEED ? e : this.lastExtStatus || e
                    }, lastExtStatus: function () {
                        return this.lastExt ? this.lastExt.status : null
                    }, lastExt: function () {
                        var e = this.leaveExtends.length;
                        return e > 0 ? this.leaveExtends[e - 1] : null
                    }, isComplete: function () {
                        return this.info.status === z["a"].COMPLETE
                    }, isProcessing: function () {
                        return this.info.status === z["a"].PROCESSING
                    }, isLeaveReject: function () {
                        return this.info.status === z["a"].REJECT
                    }, isTranspond: function () {
                        return (this.isComplete || this.isProcessing) && !this.isLeaveReject && !this.isPending && !this.isShared
                    }, isPending: function () {
                        return this.info.status === z["a"].PENDING || this.lastExtStatus === z["a"].PENDING
                    }, canWithdraw: function () {
                        var e = "";
                        return e = this.leaveExtends.length > 0 ? this.lastExtStatus : this.info.status, 1 === this.needApproval && e === z["a"].PROCESSING && !this.allowWithdraw
                    }, transpondType: function () {
                        return this.isDestroy || this.canTerminatedEarly || this.isExtend ? {
                            type: "white",
                            textColor: "normal",
                            class: "btn-hairline-t"
                        } : this.isTranspond ? {type: "primary", textColor: "white", class: ""} : void 0
                    }, isReportApproving: function () {
                        return fe["a"] === this.info.reportStatus
                    }, isReportComplete: function () {
                        return fe["b"] === this.info.reportStatus
                    }, isExtend: function () {
                        return this.isAllowedExtend && !this.isLeaveReject && !this.isPending && !this.isReportComplete && !this.isReportApproving && !this.isShared
                    }, extendClass: function () {
                        return this.isTranspond || this.isDestroy || this.canTerminatedEarly ? "btn-hairline-l btn-hairline-t" : "btn-hairline-t"
                    }, extBtnText: function () {
                        return this.isExtReject ? "重新申请续假" : "申请续假"
                    }, visDesBtn: function () {
                        return "1" === this.isReport
                    }, isDestroy: function () {
                        return this.visDesBtn && !this.isLeaveReject && !this.isPending && !this.isShared
                    }, showReportButton: function () {
                        return this.visDesBtn && !this.isLeaveReject && !this.isPending && (this.info.reportStatus !== fe["a"] || this.info.reportStatus === fe["b"]) && !this.isShared
                    }, canTerminatedEarlyStatus: function () {
                        return this.terminationInfo.allowTerminate
                    }, canTerminatedEarly: function () {
                        return this.canTerminatedEarlyStatus === z["c"].ALLOW_TERMINATE.YES
                    }, addIsLeaveOrExt: function () {
                        var e = this.info.id, t = this.leaveExtends.length;
                        return e && !t ? {
                            type: "leave",
                            id: e
                        } : this.leaveExtends[t - 1].status === z["a"].PENDING || this.leaveExtends[t - 1].status === z["a"].PROCESSING ? {
                            type: "ext",
                            id: this.leaveExtends[t - 1].id
                        } : {type: "ext", id: ""}
                    }, needApproval: function () {
                        return "0" === this.$route.params.needApproval || 0 === this.$route.params.needApproval ? 0 : 1
                    }
                }, created: function () {
                    this.initPage()
                }, methods: {
                    initPage: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, i, o, s, c, l;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.leaveId = e.$route.params.id, e.isShared = 1 === e.$route.params.shared, Object(y["e"])(), t.next = 5, Object(ce["f"])({
                                            id: e.leaveId,
                                            needApproval: e.needApproval
                                        });
                                    case 5:
                                        if (i = t.sent, o = i.data, s = i.code, Object(y["b"])(), "2210060000" !== s) {
                                            t.next = 13;
                                            break
                                        }
                                        return e.isEmpty = 0, e.emptyText = "暂无数据", t.abrupt("return");
                                    case 13:
                                        e.isEmpty = 2, e.detailInfo = {
                                            data: o,
                                            code: s
                                        }, e.info = o.detail || {}, e.studentInfo = o.studentInfo || {}, e.leaveExtends = (null === o || void 0 === o ? void 0 : o.leaveExtends) || [], e.tipConfig = {
                                            notAllowTitle: null === o || void 0 === o || null === (a = o.condition) || void 0 === a ? void 0 : a.reportTutorialTitle,
                                            notAllowUrl: null === o || void 0 === o || null === (r = o.condition) || void 0 === r ? void 0 : r.reportTutorialUrl
                                        }, c = o.nowTime || new Date, c = x()(c).valueOf(), e.nowTimeStr = c, e.nowTime = "当前时间:".concat(Object(ue["b"])(c, "yyyy-MM-dd hh:mm:ss")), e.getNowTime(c), e.recordStatus = o.recordStatus || "", e.allowWithdraw = null === o || void 0 === o || null === (n = o.condition) || void 0 === n ? void 0 : n.allowWithdraw, e.canPush = !(null !== o && void 0 !== o && o.isPress), e.isReport = null === o || void 0 === o ? void 0 : o.isReport, e.terminationInfo = (null === o || void 0 === o ? void 0 : o.termination) || {}, e.isAllowedExtend = null === o || void 0 === o ? void 0 : o.isAllowedExtend, o.leaveType && (e.leaveTypeCode = null === o || void 0 === o || null === (l = o.leaveType) || void 0 === l ? void 0 : l.code);
                                    case 31:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, showInfoModal: function () {
                        this.show = !0
                    }, closeModal: function () {
                        this.show = !1
                    }, changeTab: function (e) {
                        0 === e && this.initPage()
                    }, disabledHandler: function () {
                        Object(C["b"])({message: "当前为未审批状态，请审批完成之后再查看核验二维码", duration: 4e3})
                    }, getNowTime: function (e) {
                        var t = this;
                        clearInterval(this.timer);
                        var a = x()(e).valueOf();
                        this.timer = setInterval((function () {
                            a += 1e3, t.nowTime = "当前时间:".concat(Object(ue["b"])(a, "yyyy-MM-dd hh:mm:ss"))
                        }), 1e3)
                    }, toShare: function () {
                        var e = (location.origin + location.pathname).replace("home", "share"),
                            t = "".concat(e, "?id=").concat(this.leaveId, "&needApproval=").concat(this.needApproval),
                            a = {title: "分享请假信息", desc: "分享请假信息", link: t, imgUrl: Object(k["o"])("common-counselor-cat")};
                        this.$refs.CatSharePopup && this.$refs.CatSharePopup[0].start(a)
                    }, handleReportClick: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(O["a"])(e.reoprtActions);
                                    case 2:
                                        r = t.sent, null !== (a = e.reoprtActions[r]) && void 0 !== a && a.action && e.reoprtActions[r].action();
                                    case 4:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, reportActionsRequest: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return a = {
                                            leaveId: e.leaveId,
                                            needApproval: e.needApproval
                                        }, Object(y["e"])("正在处理中..."), t.next = 4, Object(ce["A"])(a);
                                    case 4:
                                        return r = t.sent, n = r.originData, Object(y["b"])(), t.abrupt("return", n);
                                    case 8:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, doReportEdit: function () {
                        this.$router.push({
                            name: "pageComplete",
                            query: {widthDraw: 1},
                            params: {id: this.leaveId, needApproval: this.needApproval}
                        })
                    }, actionsRequest: function (e) {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, i, o, s, c, l;
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return r = t.addIsLeaveOrExt, n = r.type, i = r.id, o = "leave" === n ? 1 : 2, s = {
                                            id: i,
                                            type: o,
                                            operType: e
                                        }, Object(y["e"])("正在处理中..."), a.next = 6, Object(ce["k"])(s);
                                    case 6:
                                        return c = a.sent, l = c.originData, Object(y["b"])(), a.abrupt("return", l);
                                    case 10:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }, toReEdit: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, i, o, s;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!e.info.outStatus && !e.mustOut) {
                                            t.next = 4;
                                            break
                                        }
                                        e.goToCreateAndEdit(), t.next = 23;
                                        break;
                                    case 4:
                                        return Object(y["e"])(), t.next = 7, Object(ce["v"])({});
                                    case 7:
                                        if (a = t.sent, r = a.data, Object(y["b"])(), n = r.leaveType, !(n && n.length > 0)) {
                                            t.next = 23;
                                            break
                                        }
                                        i = {}, o = 0;
                                    case 14:
                                        if (!(o < n.length)) {
                                            t.next = 22;
                                            break
                                        }
                                        if (s = n[o], s.code !== e.leaveTypeCode) {
                                            t.next = 19;
                                            break
                                        }
                                        return i = s, t.abrupt("break", 22);
                                    case 19:
                                        o++, t.next = 14;
                                        break;
                                    case 22:
                                        i.mustOut ? (e.popInfo.title = "不可重新编辑", e.popInfo.content = "因贵校已将该请假类型必离校开启，非离校请假申请不可重新编辑", e.showExtendTip = !0) : e.goToCreateAndEdit();
                                    case 23:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, goToCreateAndEdit: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, i;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.actionsRequest(2);
                                    case 2:
                                        if (a = t.sent, "0" === a.code) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 5:
                                        "0" === a.code && Object(C["c"])("操作成功"), r = a.datas || {}, n = r.type, i = r.id, 1 === n ? e.$router.replace({
                                            name: "create",
                                            query: {leaveId: i, type: "reEdit"}
                                        }) : e.$router.push({
                                            name: "applyExtend",
                                            query: {extendId: i, leaveId: e.info.id}
                                        });
                                    case 8:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, toComplete: function () {
                        this.$router.push("/complete/".concat(this.leaveId, "/").concat(this.needApproval))
                    }, push: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, i, o, s;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.canPush) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 2:
                                        return a = e.lastExtStatus === z["a"].PENDING, r = a ? e.lastExt.id : e.leaveId, n = a ? "1" : "0", i = {
                                            id: r,
                                            approveType: n
                                        }, Object(y["e"])("正在处理中..."), t.next = 9, Object(ce["l"])(i);
                                    case 9:
                                        o = t.sent, s = o.originData, Object(y["b"])(), e.canPush = !1, "0" === s.code && (e.initPage(), Object(C["c"])("催办成功"));
                                    case 14:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, toFinishEarly: function () {
                        this.showFinishModal = !0, this.$router.push({
                            name: "PageEarlyTermination",
                            params: {
                                apiMethod: ce["z"],
                                tipConfig: {title: "操作成功后，系统将发送消息，通知相关审批人"},
                                params: {leaveIds: this.leaveId, needApproval: this.needApproval}
                            }
                        })
                    }, toExtend: function () {
                        if (this.mustOut && !this.info.outStatus) return this.popInfo.title = "不可续假", this.popInfo.content = "因学校管理员开启了该请假类型必离校，当前不可以进行续假操作，请重新申请请假", void (this.showExtendTip = !0);
                        this.isExtReject ? this.$router.push({
                            name: "applyExtend",
                            query: {leaveId: this.info.id, type: "reExtend", needApproval: this.needApproval}
                        }) : this.$router.push({
                            name: "applyExtend",
                            query: {leaveId: this.info.id, type: "extend", needApproval: this.needApproval}
                        })
                    }, action: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(O["a"])(e.actions);
                                    case 2:
                                        r = t.sent, null !== (a = e.actions[r]) && void 0 !== a && a.action && e.actions[r].action();
                                    case 4:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, toCreate: function () {
                        this.$router.push({name: "create", query: {leaveId: this.info.id, type: "reCreate"}})
                    }
                }
            }, me = he, ve = (a("4517"), Object(N["a"])(me, c, l, !1, null, null, null)), be = ve.exports,
            ge = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "page-early-termination flex-col h-screen ios-touch-scroll"}, [a("div", {staticClass: "flex-1"}, [1 === e.needApproval ? a("CatTitle", {
                    staticClass: "no-shrink bg-warning tip text-center px-20",
                    attrs: {size: "3.20000vw", title: e.tipConfig.title}
                }) : e._e(), a("div", {staticClass: "py-10 px-20 bg-white mb-10 hairline-b hairline-t"}, [a("div", {staticClass: "mb-10"}, [e._v(" 提前结束说明 ")]), a("CatLongInput", {
                    attrs: {
                        rows: "3",
                        label: "",
                        maxlength: "100",
                        placeholder: "请填写提前结束说明（必填，最多100字）",
                        autosize: {maxHeight: 150}
                    }, model: {
                        value: e.terminationReason, callback: function (t) {
                            e.terminationReason = t
                        }, expression: "terminationReason"
                    }
                })], 1)], 1), a("CatButton", {
                    staticClass: "no-shrink",
                    attrs: {type: "primary"},
                    on: {click: e.confirmTerminateEarly}
                }, [e._v(" 确认提前结束 ")])], 1)
            }, ye = [], we = (a("498a"), a("5530")), xe = (a("a179"), a("1029")), Ce = {
                name: "PageEarlyTermination",
                components: {CatTitle: v["a"], CatLongInput: xe["a"], CatButton: f["a"]},
                data: function () {
                    return {terminationReason: ""}
                },
                computed: {
                    apiMethod: function () {
                        return this.$route.params.apiMethod
                    }, tipConfig: function () {
                        return this.$route.params.tipConfig
                    }, params: function () {
                        return this.$route.params.params
                    }, needApproval: function () {
                        var e, t,
                            a = null === (e = this.$route.params) || void 0 === e || null === (t = e.params) || void 0 === t ? void 0 : t.needApproval;
                        return a = "0" === a || 0 === a ? 0 : 1, a
                    }
                },
                methods: {
                    confirmTerminateEarly: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e.terminationReason.trim(), 0 !== a.length) {
                                            t.next = 4;
                                            break
                                        }
                                        return Object(C["b"])("请输入提前结束说明"), t.abrupt("return");
                                    case 4:
                                        return t.next = 6, e.apiMethod(Object(we["a"])(Object(we["a"])({}, e.params), {}, {terminationReason: e.terminationReason}));
                                    case 6:
                                        r = t.sent, n = r.originData, "0" === n.code && (Object(C["c"])("提前结束成功"), e.$router.go(-1));
                                    case 9:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            }, ke = Ce, Oe = (a("5c99"), Object(N["a"])(ke, ge, ye, !1, null, null, null)), Ae = Oe.exports,
            Te = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "page-complete flex-col flex-1 h-screen ios-touch-scroll"}, [a("div", {staticClass: "flex-1"}, [a("CatCellUpload", {
                    ref: "catCellUpload",
                    staticClass: "hairline-b",
                    attrs: {
                        label: "添加附件",
                        count: 10,
                        http: e.http,
                        required: e.isReportattach,
                        "download-media-url": e.downloadMediaURL,
                        "sts-access-url": e.getMobileOSSAccessURL,
                        "upload-policy-url": e.getUploadPolicyURL
                    },
                    model: {
                        value: e.files, callback: function (t) {
                            e.files = t
                        }, expression: "files"
                    }
                }), a("cat-location", {
                    ref: "catLocation",
                    staticClass: "px-20 location my-10 bg-white py-10 hairline-t hairline-b",
                    attrs: {address: e.submitAddress},
                    on: {"on-location-success": e.getLocationData, "on-location-status": e.getLocationStatus}
                }), a("cat-cheat-observer", {ref: "cheatObserver"}), e.notInScope ? a("div", {
                    staticClass: "text-center font-12",
                    on: {click: e.viewScope}
                }, [e._v(" 你不在"), a("span", {staticClass: "font-primary"}, [e._v("销假范围")]), e._v("内，暂时不能销假 ")]) : e._e(), a("BusNeedReportApplyModal", {
                    ref: "busNeedReportApplyModal",
                    on: {"on-select-report": e.handleSelectReport}
                })], 1), a("CatButton", {
                    staticClass: "no-shrink",
                    on: {click: e.whenNeedReportApplyAction}
                }, [e._v(" 确认销假 ")])], 1)
            }, Se = [], je = (a("d81d"), a("56d9"), a("c58d")), Re = (a("e8dd"), a("b208")),
            Ie = (a("c174"), a("30c3")), Le = a("fa78"), _e = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("v-dialog", {
                    staticClass: "bus-need-report-apply-modal",
                    attrs: {
                        "show-cancel-button": "",
                        "get-container": "body",
                        "confirm-button-text": "提交",
                        "cancel-button-text": "再检查一下",
                        title: "确认提交销假申请？"
                    },
                    on: {
                        confirm: e.handlSelectReport, cancel: function () {
                            return e.showStatus = !1
                        }
                    },
                    model: {
                        value: e.showStatus, callback: function (t) {
                            e.showStatus = t
                        }, expression: "showStatus"
                    }
                }, [a("div", {staticClass: "content font-14 text-center"}, [a("p", [e._v("提交销假申请后，需老师审批，")]), a("p", [e._v("批准后，即可完成销假")]), a("p", {
                    staticClass: "select flex-center jc-between",
                    on: {click: e.showSelectPick}
                }, [a("span", [e._v(e._s(e.selectValue.userName || "请选择"))]), a("Icon", {
                    attrs: {
                        size: "4.26667vw",
                        name: "arrow"
                    }
                })], 1)])])
            }, Ee = [], De = (a("c3a6"), a("ad06")), Pe = a("9ede"), Me = {
                name: "BusNeedReportApplyModal",
                components: {"v-dialog": m["a"].Component, Icon: De["a"]},
                inheritAttrs: !1,
                data: function () {
                    return {showStatus: !1, selectValue: {}, selectList: []}
                },
                methods: {
                    show: function (e) {
                        var t = e.selectList;
                        this.showStatus = !0, this.selectList = t, this.selectList.length > 0 ? this.selectValue = this.selectList[0] : this.selectValue = {}
                    }, showSelectPick: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return a = e.selectList.map((function (e) {
                                            return e.userName
                                        })).filter(Boolean), t.next = 3, Object(Pe["a"])(e.selectIds, a, {title: "选择销假审批人"});
                                    case 3:
                                        r = t.sent, r > -1 && (e.selectIds = r, e.selectValue = e.selectList[r]);
                                    case 5:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, handlSelectReport: function () {
                        this.selectValue.userWid ? this.$emit("on-select-report", this.selectValue) : Object(C["a"])("销假审批人不能为空，请选择！")
                    }
                }
            }, $e = Me, Ne = (a("ca8a"), Object(N["a"])($e, _e, Ee, !1, null, null, null)), qe = Ne.exports, Be = {
                components: {
                    CatCellUpload: Ie["a"],
                    CatLocation: Re["a"],
                    CatButton: f["a"],
                    CatCheatObserver: je["a"],
                    BusNeedReportApplyModal: qe
                }, data: function () {
                    return {
                        getMobileOSSAccessURL: ce["h"],
                        downloadMediaURL: ce["d"],
                        getUploadPolicyURL: ce["j"],
                        http: Le["a"],
                        reportApply: 0,
                        isReportattach: !1,
                        approverWid: "",
                        reportPlaces: [],
                        submitAddress: "",
                        locationStatus: "",
                        locationData: {},
                        files: [],
                        notInScope: !1
                    }
                }, computed: {
                    hasReportPlace: function () {
                        return this.reportPlaces.length > 0
                    }, disabled: function () {
                        return this.notInScope || this.isReportattach && this.files.length < 4
                    }, id: function () {
                        return this.$route.params.id
                    }, needApproval: function () {
                        return "0" === this.$route.params.needApproval || 0 === this.$route.params.needApproval ? 0 : 1
                    }, widthDraw: function () {
                        return 1 === +this.$route.query.widthDraw
                    }
                }, created: function () {
                    this.initPage()
                }, methods: {
                    initPage: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(ce["f"])({id: e.id, needApproval: e.needApproval});
                                    case 2:
                                        a = t.sent, r = a.data, e.reportPlaces = r.reportPlaces || [], e.reportApply = r.leaveType.reportApply, e.widthDraw && (n = JSON.parse(localStorage.getItem("widthDrawData")), n && (e.files = n.map((function (e) {
                                            return {attachmentUrl: e.url, type: e.type}
                                        })))), e.getLeaveAllocation(1);
                                    case 8:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, getLeaveAllocation: function (e) {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function a() {
                            var r, n;
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return a.next = 2, Object(ce["c"])({type: e});
                                    case 2:
                                        r = a.sent, n = r.data, t.isReportattach = 1 === n.reportattach;
                                    case 5:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }, getLocationData: function (e) {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function a() {
                            var r, n, i, o;
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        if (t.locationData = e, t.submitAddress = e.address || "定位信息", !(t.reportPlaces.length < 1)) {
                                            a.next = 8;
                                            break
                                        }
                                        return a.next = 5, Object(ce["f"])({id: t.id, needApproval: t.needApproval});
                                    case 5:
                                        r = a.sent, n = r.data, t.reportPlaces = n.reportPlaces || [];
                                    case 8:
                                        i = Object(ue["a"])(t.reportPlaces, t.locationData), o = t.hasReportPlace ? i : 0, t.notInScope = 0 !== o;
                                    case 11:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }, viewScope: function () {
                        Object(P["n"])({title: "销假范围"}), this.$router.push("/scope/".concat(this.id, "/").concat(this.needApproval))
                    }, getLocationStatus: function (e) {
                        "fail" === e && (this.submitAddress = "定位失败"), this.locationStatus = e
                    }, whenNeedReportApplyAction: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!e.reportApply) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.next = 3, Object(ce["w"])({leaveId: e.id, needApproval: e.needApproval});
                                    case 3:
                                        a = t.sent, r = a.data, e.$refs.busNeedReportApplyModal.show({selectList: r || []}), t.next = 9;
                                        break;
                                    case 8:
                                        e.doSubmit();
                                    case 9:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, beforeSubmitCheck: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(ce["e"])({}, {dataKey: "datas"});
                                    case 2:
                                        if (a = t.sent, r = a.data, !r.moduleStatus) {
                                            t.next = 18;
                                            break
                                        }
                                        return t.next = 7, e.$refs.cheatObserver.start(r.interceptSwitch);
                                    case 7:
                                        if (n = t.sent, e.cheatType = n, null === n || !r.interceptSwitch) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.next = 12, Object(ce["a"])({
                                            cheatType: n,
                                            leaveOperateType: 2,
                                            leaveId: e.id,
                                            needApproval: e.needApproval
                                        });
                                    case 12:
                                        return t.abrupt("return", !1);
                                    case 15:
                                        return t.abrupt("return", !0);
                                    case 16:
                                        t.next = 19;
                                        break;
                                    case 18:
                                        return t.abrupt("return", !0);
                                    case 19:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, handleSelectReport: function (e) {
                        this.approverWid = e.userWid, this.doSubmit()
                    }, doSubmit: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, i, o, s, c;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!(e.isReportattach && e.files.length < 1)) {
                                            t.next = 3;
                                            break
                                        }
                                        return Object(C["b"])("需要添加附件才能完成销假"), t.abrupt("return");
                                    case 3:
                                        return t.next = 5, e.$refs.catCellUpload.$refs.catUpload.getComplete();
                                    case 5:
                                        if (a = t.sent, a) {
                                            t.next = 9;
                                            break
                                        }
                                        return Object(C["b"])("请等待附件上传完毕再提交销假"), t.abrupt("return");
                                    case 9:
                                        if (!e.hasReportPlace || !e.notInScope) {
                                            t.next = 12;
                                            break
                                        }
                                        return Object(C["b"])("不在销假范围中，暂时无法销假"), t.abrupt("return");
                                    case 12:
                                        if ("noAuth" !== e.locationStatus) {
                                            t.next = 15;
                                            break
                                        }
                                        return Object(C["b"])("请先授权移动APP平台位置信息"), t.abrupt("return");
                                    case 15:
                                        if (e.locationData.address) {
                                            t.next = 18;
                                            break
                                        }
                                        return Object(C["b"])("销假位置信息为空，不能销假"), t.abrupt("return");
                                    case 18:
                                        return Object(y["e"])("正在处理中..."), t.next = 21, e.beforeSubmitCheck();
                                    case 21:
                                        if (r = t.sent, r) {
                                            t.next = 25;
                                            break
                                        }
                                        return Object(y["b"])(), t.abrupt("return");
                                    case 25:
                                        return n = {
                                            url: location.origin + ce["n"],
                                            body: {
                                                id: e.id,
                                                needApproval: e.needApproval,
                                                reportLocation: e.locationData.address,
                                                approverWid: e.approverWid,
                                                reportAttach: e.files.map((function (e) {
                                                    return {url: e.attachmentUrl, type: 1}
                                                })),
                                                uaIsCpadaily: !0
                                            },
                                            headers: {extension: "1", sign: "1"}
                                        }, console.log("===== sendPost start ====="), console.log("===== sendPost params ====="), console.log(JSON.stringify(n)), t.next = 31, Object(P["m"])(n);
                                    case 31:
                                        if (i = t.sent, console.log("===== sendPost response ====="), console.log(JSON.stringify(i)), console.log("===== sendPost end ====="), Object(y["b"])(), -7 !== i.code) {
                                            t.next = 45;
                                            break
                                        }
                                        return o = Object(we["a"])(Object(we["a"])({}, n.body), {}, {
                                            uaIsCpadaily: !1,
                                            latitude: e.locationData.latitude || "",
                                            longitude: e.locationData.longitude || ""
                                        }), t.next = 40, Object(ce["m"])(o);
                                    case 40:
                                        s = t.sent, c = s.originData, e.submitAfter(c), t.next = 46;
                                        break;
                                    case 45:
                                        e.submitAfter(i.data, !0);
                                    case 46:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, submitAfter: function (e, t) {
                        Object(y["b"])(), 0 === +e.code ? (Object(C["c"])("销假成功"), this.$EventBus.$emit("refresh-list"), this.$router.go(-1)) : t && Object(C["a"])(e.message || "")
                    }
                }
            }, Fe = Be, Ue = Object(N["a"])(Fe, Te, Se, !1, null, null, null), We = Ue.exports, He = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "page-scope flex-col h-screen relative ios-touch-scroll"}, [a("div", {
                    staticClass: "flex-1",
                    attrs: {id: "bMap"}
                }), e.loading ? e._e() : a("div", {
                    staticClass: "flex-center p-5 bg-white location-icon radius-small absolute",
                    on: {click: e.updateMyLoc}
                }, [a("CatIcon", {
                    staticClass: "bg-white font-normal",
                    attrs: {size: "9.60000vw", name: "locate"}
                })], 1), e.loading ? e._e() : a("div", {staticClass: "no-shrink"}, [a("div", {staticClass: "location-status font-normal font-14 bg-white py-10 flex-col ai-center"}, [a("div", {staticClass: "status flex-center mb-5"}, [a("div", {
                    staticClass: "status-icon mr-5 radius-circle",
                    class: e.iconStatus
                }), a("div", {staticClass: "status-text"}, [e._v(" " + e._s(e.statusText) + " "), e.inScope ? a("span", {
                    staticClass: "font-primary",
                    on: {click: e.goBack}
                }, [e._v("进行销假 >")]) : e._e()])]), a("div", {staticClass: "flag flex font-14 nowrap"}, [a("div", [e._v("当前销假范围：")]), a("CatTitle", {
                    staticClass: "font-normal flag-address",
                    attrs: {size: "3.73333vw", title: e.nowScopeText}
                })], 1)]), e.reportPlaces.length > 0 ? a("CatButton", {
                    attrs: {type: "primary"},
                    on: {click: e.showPlacePicker}
                }, [e._v(" " + e._s("切换销假范围(" + e.reportPlaces.length + ")") + " ")]) : e._e()], 1)])
            }, ze = [], Ge = {
                components: {CatButton: f["a"], CatTitle: v["a"], CatIcon: j["a"]}, data: function () {
                    return {
                        inScope: !1,
                        selectedIdx: 0,
                        reportPlaces: [],
                        map: null,
                        myloc: null,
                        initZoom: 15,
                        notInScope: !1,
                        loading: !0
                    }
                }, computed: {
                    statusText: function () {
                        return this.inScope ? "已进入销假范围" : "你不在销假范围内"
                    }, iconStatus: function () {
                        return this.inScope ? "bg-success" : "bg-error"
                    }, id: function () {
                        return this.$route.params.id
                    }, needApproval: function () {
                        return "0" === this.$route.params.needApproval || 0 === this.$route.params.needApproval ? 0 : 1
                    }, nowScopeText: function () {
                        return this.reportPlaces[this.selectedIdx].address
                    }
                }, mounted: function () {
                    this.initPage()
                }, methods: {
                    initPage: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.getPlaces();
                                    case 2:
                                        e.map = new BMap.Map("bMap"), e.updateMyLoc();
                                    case 4:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, updateMyLoc: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, i;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(P["f"])();
                                    case 2:
                                        a = t.sent, r = a.data, n = new BMap.Point(r.longitude, r.latitude), e.myloc = n, e.map.centerAndZoom(n, e.initZoom), e.paintMyLocation(n), e.reportPlaces.length > 0 && e.paintReportLocation(e.reportPlaces[0]), i = Object(ue["a"])(e.reportPlaces, n), e.inScope = 0 === i;
                                    case 11:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, goBack: function () {
                        this.$route.go(-1)
                    }, paintCircle: function (e, t) {
                        return new BMap.Circle(e, t, {
                            strokeColor: "#0088ff",
                            strokeWeight: .5,
                            fillColor: "#E2E8F1",
                            fillOpacity: .5
                        })
                    }, paintMyLocation: function (e) {
                        var t = new BMap.Icon("https://feres.cpdaily.com/fe_components/counselor-assets/images/common-self.png", {
                            width: 48,
                            height: 48
                        }), a = new BMap.Marker(e, {icon: t});
                        this.map.addOverlay(a)
                    }, paintReportLocation: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            a = new BMap.Point(e.longitude, e.latitude);
                        this.map.removeOverlay(this.repMarker), this.map.removeOverlay(this.repCircle), this.repMarker = new BMap.Marker(a, {icon: new BMap.Icon("https://feres.cpdaily.com/cpdaily/counselor/position01.png", new BMap.Size(32, 32))}), this.repCircle = this.paintCircle(a, e.radius), this.map.addOverlay(this.repMarker), this.map.addOverlay(this.repCircle), t && this.map.panTo(a)
                    }, getPlaces: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return Object(y["e"])(), t.next = 3, Object(ce["f"])({
                                            id: e.id,
                                            needApproval: e.needApproval
                                        });
                                    case 3:
                                        a = t.sent, r = a.data, e.loading = !1, Object(y["b"])(), e.reportPlaces = r.reportPlaces || [];
                                    case 8:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, showPlacePicker: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(Pe["a"])(e.selectedIdx, e.reportPlaces, {
                                            title: "切换销假范围",
                                            valueKey: "address"
                                        });
                                    case 2:
                                        a = t.sent, e.selectedIdx = a, e.paintReportLocation(e.reportPlaces[a], !0);
                                    case 5:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            }, Ve = Ge, Ze = (a("62c5"), Object(N["a"])(Ve, He, ze, !1, null, null, null)), Je = Ze.exports,
            Ke = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "page-apply-extend flex-col flex-1 h-screen overflow-hidden"}, [e.render ? a("div", {staticClass: "form-content  flex-1 ios-touch-scroll"}, [a("cat-tip", {attrs: {"tip-config": e.leaveConfig}}), a("CatCell", {attrs: {label: "续假类型"}}, [a("div", {staticClass: "text-trunc"}, [e._v(" " + e._s(e.leaveTypeName) + " ")])]), a("cat-cell-date-time-picker", {
                    key: "startTime",
                    attrs: {disabled: "", required: "", label: "开始时间"},
                    model: {
                        value: e.model.startTime, callback: function (t) {
                            e.$set(e.model, "startTime", t)
                        }, expression: "model.startTime"
                    }
                }), a("cat-cell-date-time-picker", {
                    attrs: {required: "", label: "结束时间"},
                    model: {
                        value: e.model.endTime, callback: function (t) {
                            e.$set(e.model, "endTime", t)
                        }, expression: "model.endTime"
                    }
                }), a("CatCell", {attrs: {label: "需要离校"}}, [e._v(" " + e._s(e.leaveText) + " ")]), e.model.outStatus ? a("cat-cell-input", {
                    attrs: {
                        right: "",
                        required: "",
                        maxlength: "11",
                        "class-str": "flex jc-between font-normal flex-1 ai-center",
                        label: "紧急联系人",
                        placeholder: "请输入手机号码(不能填写自己的)"
                    }, model: {
                        value: e.model.urgencyMobile, callback: function (t) {
                            e.$set(e.model, "urgencyMobile", t)
                        }, expression: "model.urgencyMobile"
                    }
                }) : e._e(), e.showAddress ? a("cat-cell-area-picker", {
                    staticClass: "mt-10 hairline-t",
                    attrs: {"is-link": "", required: "", label: "目的地"},
                    model: {
                        value: e.model.address, callback: function (t) {
                            e.$set(e.model, "address", t)
                        }, expression: "model.address"
                    }
                }) : e._e(), e.showAddress ? a("cat-cell-long-input", {
                    staticClass: "mb-10 hairline-b",
                    attrs: {
                        rows: "3",
                        required: "",
                        maxlength: "100",
                        "show-word-limit": "",
                        label: "详细地址",
                        placeholder: "请输入目的地详细地址，如道路、门牌号、小区、楼栋号、单元室等",
                        autosize: {maxHeight: 120}
                    },
                    model: {
                        value: e.model.detailAddress, callback: function (t) {
                            e.$set(e.model, "detailAddress", t)
                        }, expression: "model.detailAddress"
                    }
                }) : e._e(), a("cat-cell-long-input", {
                    class: e.showAddress ? "hairline-t-n" : "",
                    attrs: {
                        rows: "3",
                        required: "",
                        maxlength: "300",
                        "show-word-limit": "",
                        label: "续假原因",
                        placeholder: "请输入续假原因[必填]，至少10字",
                        autosize: {maxHeight: 120}
                    },
                    model: {
                        value: e.model.leaveReason, callback: function (t) {
                            e.$set(e.model, "leaveReason", t)
                        }, expression: "model.leaveReason"
                    }
                }), a("cat-cell-upload", {
                    ref: "catCellUpload",
                    attrs: {
                        label: "添加附件",
                        count: 4,
                        http: e.http,
                        "download-media-url": e.downloadMediaURL,
                        "sts-access-url": e.getMobileOSSAccessURL,
                        "upload-policy-url": e.getUploadPolicyURL
                    },
                    model: {
                        value: e.model.applyAttach, callback: function (t) {
                            e.$set(e.model, "applyAttach", t)
                        }, expression: "model.applyAttach"
                    }
                }), e.approveFlow.length > 0 && 1 === e.needApproval ? a("div", {staticClass: "approveFlow text-center py-10 font-14"}, [e._v(" 审批流程共" + e._s(e.approveFlow.length) + "步 "), a("span", {
                    staticClass: "font-primary",
                    on: {
                        click: function () {
                            return e.showFlowModal = !0
                        }
                    }
                }, [e._v("查看 >")])]) : e._e(), e.renderTime.startTime && e.renderTime.endTime && e.leaveTypeName && e.timeIsOk && 1 === e.needApproval ? a("cat-cell-picker", {
                    attrs: {
                        "is-link": "",
                        required: "",
                        "name-key": "userName",
                        "value-key": "userWid",
                        label: "审批人",
                        options: e.approvers
                    },
                    on: {"on-confirm": e.getApproverIdInfo},
                    model: {
                        value: e.model.approverWid, callback: function (t) {
                            e.$set(e.model, "approverWid", t)
                        }, expression: "model.approverWid"
                    }
                }) : e._e(), e.hasGotSender && 1 === e.needApproval ? a("CatCellPeople", {
                    attrs: {
                        label: "抄送人",
                        list: e.chooseData
                    }, on: {click: e.doShowChoosePeople}
                }) : e._e(), a("cat-location", {
                    staticClass: "px-20 location py-10 bg-white",
                    attrs: {"read-only": e.isRequestOk, address: e.submitAddress},
                    on: {"on-location-success": e.getLocationData, "on-location-status": e.getLocationStatus}
                }), 1 === e.leaveConfig.openDisclaimers ? a("Checkbox", {
                    staticClass: "bg-white px-10 py-15 hairline-t break-all",
                    model: {
                        value: e.agreement, callback: function (t) {
                            e.agreement = t
                        }, expression: "agreement"
                    }
                }, [e._v(" " + e._s(e.leaveConfig.disclaimers) + " ")]) : e._e()], 1) : e._e(), a("cat-flow-chart-modal", {
                    attrs: {
                        title: "审批流程",
                        options: e.approveFlow
                    }, model: {
                        value: e.showFlowModal, callback: function (t) {
                            e.showFlowModal = t
                        }, expression: "showFlowModal"
                    }
                }), a("cat-cheat-observer", {ref: "cheatObserver"}), e.render ? a("cat-button", {
                    staticClass: "no-shrink",
                    attrs: {disabled: e.submitDisabled},
                    on: {click: e.submit}
                }, [e._v(" 提交续假 ")]) : e._e()], 1)
            }, Xe = [], Qe = (a("c975"), a("a15b"), a("fb6a"), a("45fc"), a("1276"), a("c0e9"), a("2a40")),
            Ye = (a("3c32"), a("417e")), et = (a("cbc1"), a("d7e6")), tt = (a("f77b"), a("be6d")),
            at = (a("0a97"), a("15ea")), rt = (a("2a30"), a("209c")), nt = (a("3a99"), a("64d9")),
            it = (a("00c5"), a("4682")), ot = a("2f62"), st = (a("a623"), function (e, t, a) {
                var r = e.startTime, n = e.endTime;
                if (!r) return Object(C["b"])("请选择开始时间"), !1;
                if (!n) return Object(C["b"])("请选择结束时间"), !1;
                if (x()(r).isSame(x()(n))) return Object(C["b"])("开始时间不能和结束时间相同"), !1;
                if (x()(r).isAfter(x()(n))) return Object(C["b"])("开始时间不能大于结束时间"), !1;
                if (a.enableLimit && (a.limitDay || a.limitHour)) {
                    if (x()(n).diff(x()(r), "seconds") > 24 * a.limitDay * 60 * 60 + 3600 * a.limitHour) {
                        var i = "";
                        return i = a.limitDay && a.limitHour ? "".concat(a.limitDay, "天").concat(a.limitHour, "小时") : a.limitDay ? "".concat(a.limitDay, "天") : "".concat(a.limitHour, "小时"), Object(C["b"])("请假时长不能超过".concat(i)), !1
                    }
                    return !0
                }
                return !t || (!(x()(n).diff(x()(r), "seconds") > 24 * t * 60 * 60) || (Object(C["b"])("管理员提示：请假时长不能超过".concat(t, "天")), !1))
            }), ct = function (e) {
                return !e.outStatus || (e.urgencyMobile ? /^[\d-]+$/.test(e.urgencyMobile) && e.urgencyMobile.length > 6 && e.urgencyMobile.length < 12 || (Object(C["b"])("紧急联系人手机号码不正确"), !1) : (Object(C["b"])("紧急联系人手机号码不能为空"), !1))
            }, lt = function (e) {
                var t = e.leaveReason.trim();
                return t ? t && t.length > 300 ? (Object(C["b"])("续假原因不能超过300个字"), !1) : !(t && t.length < 10) || (Object(C["b"])("续假原因不能少于10个字"), !1) : (Object(C["b"])("续假原因不能为空"), !1)
            }, ut = function (e, t) {
                if (t) {
                    var a = e.detailAddress && e.detailAddress.trim();
                    return a ? !(a && a.length > 300) || (Object(C["b"])("详细地址不能超过300个字"), !1) : (Object(C["b"])("详细地址不能为空"), !1)
                }
                return !0
            }, dt = function (e, t) {
                return !t || (!!e.address || (Object(C["b"])("请选择目的地"), !1))
            }, pt = [{key: "leaveType", isSelect: !0, required: !0, label: "请假类型"}, {
                key: "startTime",
                isSelect: !0,
                required: !0,
                label: "开始时间"
            }, {key: "endTime", isSelect: !0, required: !0, label: "结束时间"}, {
                key: "urgencyMobile",
                isSelect: !1,
                required: !1,
                label: "紧急联系人",
                rules: function () {
                    var e = Object(u["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, ct(t);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t) {
                        return e.apply(this, arguments)
                    }

                    return t
                }()
            }, {
                key: "address", isSelect: !0, required: !1, label: "目的地", rules: function () {
                    var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a) {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, dt(t, a);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, a) {
                        return e.apply(this, arguments)
                    }

                    return t
                }()
            }, {
                key: "detailAddress", isSelect: !0, required: !1, label: "详细地址", rules: function () {
                    var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a) {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, ut(t, a);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, a) {
                        return e.apply(this, arguments)
                    }

                    return t
                }()
            }, {
                key: "leaveReason", isSelect: !1, required: !1, label: "续假原因", rules: function () {
                    var e = Object(u["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, lt(t);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t) {
                        return e.apply(this, arguments)
                    }

                    return t
                }()
            }, {key: "approverWid", isSelect: !0, required: !0, label: "审批人"}], ft = function () {
                var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a, r) {
                    var n, i, o, s;
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                n = 0, i = pt.length;
                            case 1:
                                if (!(n < i)) {
                                    e.next = 19;
                                    break
                                }
                                if (o = pt[n], !o.required) {
                                    e.next = 10;
                                    break
                                }
                                return "approverWid" === o.key && 0 === a.length && (o.validateResult = !0), e.next = 7, ht(t, o);
                            case 7:
                                o.validateResult = e.sent, e.next = 14;
                                break;
                            case 10:
                                if (!o.rules) {
                                    e.next = 14;
                                    break
                                }
                                return e.next = 13, o.rules(t, r);
                            case 13:
                                o.validateResult = e.sent;
                            case 14:
                                if (o.validateResult) {
                                    e.next = 16;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 16:
                                n++, e.next = 1;
                                break;
                            case 19:
                                return s = pt.every((function (e) {
                                    return e.validateResult
                                })), e.abrupt("return", s);
                            case 21:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, a, r) {
                    return e.apply(this, arguments)
                }
            }(), ht = function () {
                var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a) {
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (t[a.key] || "leaveType" === a.key) {
                                    e.next = 5;
                                    break
                                }
                                return a.isSelect ? Object(C["b"])("请选择".concat(a.label)) : Object(C["b"])("".concat(a.label, "不能为空")), e.abrupt("return", !1);
                            case 5:
                                if (!(String(t.leaveType).length < 1)) {
                                    e.next = 8;
                                    break
                                }
                                return Object(C["b"])("请选择".concat(a.label)), e.abrupt("return", !1);
                            case 8:
                                return e.abrupt("return", !0);
                            case 9:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, a) {
                    return e.apply(this, arguments)
                }
            }(), mt = a("ade3"), vt = {LEAVE: 1, EXTEND: 2}, bt = {false: "否", true: "离校"},
            gt = {NORMAL: "1", SICK: "2", OTHER: "0"},
            yt = (r = {}, Object(mt["a"])(r, gt.NORMAL, "事假"), Object(mt["a"])(r, gt.SICK, "病假"), Object(mt["a"])(r, gt.OTHER, "其它"), r),
            wt = (gt.NORMAL, yt[gt.NORMAL], gt.SICK, yt[gt.SICK], gt.OTHER, yt[gt.OTHER], Object(ot["a"])("choosePeople")),
            xt = wt.mapMutations, Ct = !1, kt = {
                components: {
                    CatCell: R["a"],
                    CatButton: f["a"],
                    CatCellDateTimePicker: it["a"],
                    CatCellLongInput: nt["a"],
                    CatCellPicker: rt["a"],
                    CatCellUpload: Ie["a"],
                    CatCellInput: at["a"],
                    CatCheatObserver: je["a"],
                    CatLocation: Re["a"],
                    CatFlowChartModal: tt["a"],
                    CatTip: pe["a"],
                    CatCellPeople: et["a"],
                    Checkbox: Ye["a"],
                    CatCellAreaPicker: Qe["a"]
                },
                data: function () {
                    return {
                        getMobileOSSAccessURL: ce["h"],
                        downloadMediaURL: ce["d"],
                        getUploadPolicyURL: ce["j"],
                        http: Le["a"],
                        render: !1,
                        hasGotSender: !0,
                        model: {
                            leaveType: "",
                            leaveName: "",
                            startTime: "",
                            endTime: "",
                            urgencyMobile: "",
                            leaveReason: "",
                            applyAttach: [],
                            outStatus: !1,
                            address: "",
                            detailAddress: ""
                        },
                        leaveConfig: {allowLeave: 0, limitDays: 0, notAllowTitle: "", notAllowUrl: "", uploadlocation: 0},
                        isRequestOk: !1,
                        approveFlow: [],
                        approvers: [],
                        approversInfo: {},
                        timeIsOk: !1,
                        showFlowModal: !1,
                        notOutReport: 0,
                        endDateValue: "",
                        hasSelectedArr: [],
                        submitAddress: "",
                        locationStatus: "",
                        locationData: {},
                        cheatType: null,
                        type: vt.EXTEND,
                        leaveTypeName: "",
                        chooseData: [],
                        localId: null,
                        localChooseArr: [],
                        localModel: {},
                        leaveTimeLimitInfo: {},
                        agreement: !1
                    }
                },
                computed: {
                    showAddress: function () {
                        return 1 === this.leaveConfig.openDestination && this.model.outStatus
                    }, submitDisabled: function () {
                        return 1 === this.leaveConfig.openDisclaimers ? this.isRequestOk || !this.agreement : this.isRequestOk
                    }, renderTime: function () {
                        return {startTime: this.model.startTime, endTime: this.model.endTime}
                    }, leaveText: function () {
                        return bt[this.model.outStatus]
                    }, extendId: function () {
                        return this.$route.query.extendId
                    }, extendType: function () {
                        return this.$route.query.type
                    }, isPhone: function () {
                        return !this.inputValidate.phoneErr && this.model.urgencyMobile
                    }, locationType: function () {
                        return "success" === this.locationStatus ? 0 : "fail" === this.locationStatus || "ing" === this.locationStatus ? 2 : "noAuth" === this.locationStatus ? 1 : void 0
                    }, sendPeopleData: {
                        set: function (e) {
                            this.chooseData = e
                        }, get: function () {
                            return this.chooseData.length > 0 ? this.chooseData : this.hasSelectedArr
                        }
                    }, needApproval: function () {
                        return "0" === this.$route.query.needApproval || 0 === this.$route.query.needApproval ? 0 : 1
                    }
                },
                watch: {
                    renderTime: {
                        deep: !0, immediate: !0, handler: function (e) {
                            this.changeLeaveType(e)
                        }
                    }
                },
                activated: function () {
                    this.$route.query.leaveId !== this.localId && "fromChoose" !== this.localId || Ct ? (this.model = {
                        leaveType: "",
                        leaveName: "",
                        startTime: "",
                        endTime: "",
                        urgencyMobile: "",
                        leaveReason: "",
                        applyAttach: [],
                        outStatus: !1,
                        address: "",
                        detailAddress: ""
                    }, this.sendPeopleData = [], this.leaveId = this.$route.query.leaveId, this.localChooseArr = [], this.agreement = !1, this.initPage(!1)) : (this.localChooseArr = this.chooseData, this.hasSelectedArr = this.localChooseArr, this.leaveId = this.$route.query.leaveId, this.model = Object(we["a"])({}, this.localModel))
                },
                deactivated: function () {
                    this.localId = this.$route.params.id ? this.$route.params.id : 0, this.localModel = this.model
                },
                mounted: function () {
                    var e = this;
                    this.$EventBus.$on("get-choose-data", (function (t) {
                        e.getChooseData(t)
                    }))
                },
                beforeRouteEnter: function (e, t, a) {
                    t.fullPath.indexOf("detail") > -1 ? Ct = !0 : t.fullPath.indexOf("choosePeople") > -1 && (Ct = !1), a()
                },
                beforeRouteLeave: function (e, t, a) {
                    var r = ["choosePeople", "detail"], n = r.some((function (t) {
                        return e.fullPath.indexOf(t) > -1
                    }));
                    n ? a() : m["a"].confirm({title: "", message: "确定退出？"}).then((function (e) {
                        a()
                    })).catch((function () {
                        a(!1)
                    }))
                },
                methods: Object(we["a"])(Object(we["a"])({}, xt(["setDataList", "setHistoryApiMethod", "setSearchApiMethod", "setAddHistoryApiMethod"])), {}, {
                    getLeaveTimeLimitInfo: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(ce["u"])({code: e.model.leaveType});
                                    case 2:
                                        a = t.sent, r = a.data, e.leaveTimeLimitInfo = r || {};
                                    case 5:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, initPage: function () {
                        var e = arguments, t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function a() {
                            var r;
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return r = e.length > 0 && void 0 !== e[0] && e[0], a.next = 3, t.getLeaveAllocation(t.type);
                                    case 3:
                                        return a.next = 5, t.extendType && t.getExtendDetail(t.leaveId, r);
                                    case 5:
                                        return a.next = 7, t.getReportInfo();
                                    case 7:
                                        return a.next = 9, !t.extendType && t.getReEditData(t.extendId, t.type, r);
                                    case 9:
                                        t.getLeaveTimeLimitInfo(), t.render = !0;
                                    case 11:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }, getApproverIdInfo: function (e) {
                        this.approversInfo = {approverId: e.userId, approverName: e.userName}
                    }, getChooseData: function (e) {
                        this.sendPeopleData = e, this.$router.go(-1)
                    }, getLocationData: function (e) {
                        this.locationData = e, this.submitAddress = e.address || "定位信息"
                    }, getLocationStatus: function (e) {
                        "fail" === e && (this.submitAddress = "定位失败"), this.locationStatus = e
                    }, getLeaveAllocation: function (e) {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function a() {
                            var r, n;
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return Object(y["e"])(), a.next = 3, Object(ce["c"])({type: e});
                                    case 3:
                                        r = a.sent, n = r.data, Object(y["b"])(), t.leaveConfig = n;
                                    case 7:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }, getExtendDetail: function (e, t) {
                        var a = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function r() {
                            var n, i, o, s, c, l, u, d, p, f, h, m, v, b;
                            return regeneratorRuntime.wrap((function (r) {
                                while (1) switch (r.prev = r.next) {
                                    case 0:
                                        return a.hasGotSender = !1, Object(y["e"])(), r.next = 4, Object(ce["f"])({id: e});
                                    case 4:
                                        n = r.sent, i = n.data, Object(y["b"])(), o = i.detail, s = i.leaveExtends || [], c = {}, s && s.length > 0 ? (l = s.length - 1, u = s[l] || {}, c = u.ccInfo || {}) : c = o.ccInfo || {}, t || (a.hasSelectedArr = [], a.localChooseArr.length > 0 ? a.hasSelectedArr = a.localChooseArr : (c.teachers && c.teachers.length > 0 && (a.hasSelectedArr = a.hasSelectedArr.concat(c.teachers)), c.students && c.students.length > 0 && (a.hasSelectedArr = a.hasSelectedArr.concat(c.students)))), a.hasGotSender = !0, a.sendPeopleData = a.hasSelectedArr, d = a.getExtendReject(s), p = d || o, f = null, h = null, null === d ? (f = "3" === o.status ? o.startDate : o.endDate, h = "3" === o.status ? o.endDate : "") : (f = "3" === d.status ? d.startTimeDB : d.endTimeDB, h = "3" === d.status ? d.endTimeDB : ""), m = "reExtend" === a.extendType ? "" : p.extendReason || p.leaveReason, v = "reExtend" === a.extendType && p.applyAttach ? p.applyAttach : [], b = p.destination || "", a.model = Object(we["a"])(Object(we["a"])({}, a.model), {}, {
                                            leaveType: i.leaveType.code,
                                            leaveName: o.leaveName,
                                            outStatus: o.outStatus,
                                            urgencyMobile: p.urgencyMobile,
                                            startTime: f,
                                            endTime: h,
                                            leaveReason: m,
                                            applyAttach: v.map((function (e) {
                                                return Object(we["a"])(Object(we["a"])({}, e), {}, {attachmentUrl: e.url})
                                            })),
                                            address: b.split("/").slice(0, 3).join("/") || "",
                                            detailAddress: b.split("/").slice(-1).join("") || ""
                                        }), a.leaveTypeName = o.leaveName;
                                    case 24:
                                    case"end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    }, getReportInfo: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return Object(y["e"])(), t.next = 3, Object(ce["i"])({});
                                    case 3:
                                        a = t.sent, r = a.data, Object(y["b"])(), e.notOutReport = r.notOutReport;
                                    case 7:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, getReEditData: function (e, t, a) {
                        var r = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function n() {
                            var i, o, s, c, l;
                            return regeneratorRuntime.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return r.hasGotSender = !1, Object(y["e"])(), n.next = 4, Object(ce["t"])({
                                            id: e,
                                            type: t
                                        });
                                    case 4:
                                        i = n.sent, o = i.data, Object(y["b"])(), s = o.ccInfo || {}, a || (r.hasSelectedArr = [], r.localChooseArr.length > 0 ? r.hasSelectedArr = r.localChooseArr : (s.teachers && s.teachers.length > 0 && (r.hasSelectedArr = r.hasSelectedArr.concat(s.teachers)), s.students && s.students.length > 0 && (r.hasSelectedArr = r.hasSelectedArr.concat(s.students)))), r.hasGotSender = !0, c = o.applyAttach ? o.applyAttach : [], r.sendPeopleData = r.hasSelectedArr, l = o.destination || "", r.model = Object(we["a"])(Object(we["a"])({}, o), {}, {
                                            applyAttach: c.map((function (e) {
                                                return Object(we["a"])(Object(we["a"])({}, e), {}, {attachmentUrl: e.url})
                                            })),
                                            startTime: o.startTime && o.startTime.slice(0, -3),
                                            endTime: o.endTime && o.endTime.slice(0, -3),
                                            address: l.split("/").slice(0, 3).join("/") || "",
                                            detailAddress: l.split("/").slice(-1).join("") || ""
                                        }), r.leaveTypeName = o.leaveName;
                                    case 15:
                                    case"end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, getExtendReject: function (e) {
                        return 0 === e.length ? null : e[e.length - 1]
                    }, doShowChoosePeople: function () {
                        this.setDataList(this.sendPeopleData), this.setHistoryApiMethod(ce["x"]), this.setSearchApiMethod(ce["y"]), this.setAddHistoryApiMethod(ce["b"]), this.$router.push({path: "/choosePeople/".concat(this.leaveId ? this.leaveId : "fromChoose")})
                    }, changeLeaveType: function (e) {
                        var t = st(e, this.leaveConfig.limitDays, this.leaveTimeLimitInfo);
                        this.model.approverWid = this.localModel.approverWid ? this.localModel.approverWid : "", this.localModel.approverWid = "", this.timeIsOk = t, this.getApproveFlowAndapprovers()
                    }, getApproveFlowAndapprovers: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, i;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.approvers = e.approveFlow = [], e.approversInfo = {}, e.timeIsOk) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6, Object(ce["r"])({
                                            leaveType: e.model.leaveType,
                                            startTime: "".concat(e.model.startTime, ":00"),
                                            endTime: "".concat(e.model.endTime, ":00"),
                                            leaveId: e.leaveId
                                        });
                                    case 6:
                                        a = t.sent, r = a.data, n = [], i = r.approveFlow || [], i.forEach((function (e) {
                                            n.push({
                                                list: e.map((function (e) {
                                                    return Object(we["a"])(Object(we["a"])({}, e), {}, {name: e.nodeName})
                                                }))
                                            })
                                        })), e.approveFlow = n, e.approvers = r.approvers;
                                    case 13:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, submit: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$refs.catCellUpload.$refs.catUpload.getComplete();
                                    case 2:
                                        if (a = t.sent, a) {
                                            t.next = 6;
                                            break
                                        }
                                        return Object(C["b"])("请等待附件上传完毕再提交续假"), t.abrupt("return");
                                    case 6:
                                        if (!e.isRequestOk) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 8:
                                        return t.next = 10, st(e.renderTime, e.leaveConfig.limitDays, e.leaveTimeLimitInfo);
                                    case 10:
                                        if (r = t.sent, r) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 13:
                                        return t.next = 15, ft(e.model, e.approvers, e.showAddress);
                                    case 15:
                                        if (n = t.sent, n) {
                                            t.next = 18;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 18:
                                        e.notOutReport && !e.model.outStatus ? m["a"].confirm({
                                            message: '<p style="text-align: center;">您所提交的请假申请，根据学校的要求，在假期结束前需要进行<span style="color: #ED3F14;font-weight: 700;">手动销假</span>!</p>',
                                            cancelButtonText: "取消",
                                            confirmButtonText: "确定",
                                            closeOnClickOverlay: !1
                                        }).then((function () {
                                            e.doSubmitFn()
                                        })) : e.doSubmitFn();
                                    case 19:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, doSubmitFn: function () {
                        var e = this;
                        m["a"].confirm({
                            title: "确认提交续假？",
                            message: "已确认内容无误并提交？",
                            confirmButtonText: "提交",
                            cancelButtonText: "再检查一下"
                        }).then((function () {
                            e.doSubmit()
                        })).catch((function () {
                        }))
                    }, beforeSubmitCheck: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(ce["e"])({});
                                    case 2:
                                        if (a = t.sent, r = a.data, !r.moduleStatus) {
                                            t.next = 18;
                                            break
                                        }
                                        return t.next = 7, e.$refs.cheatObserver.start(r.interceptSwitch);
                                    case 7:
                                        if (n = t.sent, e.cheatType = n, null === n || !r.interceptSwitch) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.next = 12, Object(ce["a"])({
                                            cheatType: n,
                                            leaveOperateType: 1,
                                            leaveId: e.leaveId
                                        });
                                    case 12:
                                        return t.abrupt("return", !1);
                                    case 15:
                                        return t.abrupt("return", !0);
                                    case 16:
                                        t.next = 19;
                                        break;
                                    case 18:
                                        return t.abrupt("return", !0);
                                    case 19:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, doSubmit: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, i, o, s, c, l, u, d, p;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return Object(y["e"])("正在处理中..."), t.next = 3, e.beforeSubmitCheck();
                                    case 3:
                                        if (o = t.sent, o) {
                                            t.next = 7;
                                            break
                                        }
                                        return Object(y["b"])(), t.abrupt("return");
                                    case 7:
                                        return t.next = 9, Object(P["g"])();
                                    case 9:
                                        return s = t.sent, c = {
                                            url: location.origin + ce["q"],
                                            body: Object(we["a"])(Object(we["a"])(Object(we["a"])(Object(we["a"])({}, e.model), e.approversInfo), {}, {
                                                startTime: "".concat(e.model.startTime, ":00"),
                                                endTime: "".concat(e.model.endTime, ":00"),
                                                applyAttach: e.model.applyAttach.map((function (e) {
                                                    return {url: e.attachmentUrl, type: 1}
                                                })),
                                                ccInfo: {
                                                    teachers: e.hasSelectedArr.filter((function (e) {
                                                        return 0 === e.personType
                                                    })), students: e.hasSelectedArr.filter((function (e) {
                                                        return 1 === e.personType
                                                    }))
                                                },
                                                cheatType: e.cheatType,
                                                source: 1,
                                                deviceId: (null === s || void 0 === s || null === (a = s.data) || void 0 === a ? void 0 : a.uuid) || "",
                                                systemName: (null === s || void 0 === s || null === (r = s.data) || void 0 === r ? void 0 : r.platform) || "",
                                                systemVersion: (null === s || void 0 === s || null === (n = s.data) || void 0 === n ? void 0 : n.version) || "",
                                                model: (null === s || void 0 === s || null === (i = s.data) || void 0 === i ? void 0 : i.model) || ""
                                            }, e.locationData), {}, {
                                                locationType: e.locationType,
                                                leaveId: e.leaveId,
                                                extendReason: e.model.leaveReason,
                                                uaIsCpadaily: !0,
                                                address: e.submitAddress,
                                                latitude: e.locationData.latitude || "",
                                                longitude: e.locationData.longitude || "",
                                                disclaimers: 1 === e.leaveConfig.openDisclaimers ? e.leaveConfig.disclaimers : null,
                                                destination: e.showAddress && e.model.address.length > 0 ? "".concat(e.model.address, "/").concat(e.model.detailAddress) : ""
                                            }),
                                            headers: {extension: "1"}
                                        }, e.isRequestOk = !0, t.next = 14, Object(P["m"])(c);
                                    case 14:
                                        if (l = t.sent, Object(y["b"])(), e.isRequestOk = !1, -7 !== l.code) {
                                            t.next = 26;
                                            break
                                        }
                                        return u = Object(we["a"])(Object(we["a"])({}, c.body), {}, {
                                            uaIsCpadaily: !1,
                                            latitude: e.locationData.latitude || "",
                                            longitude: e.locationData.longitude || ""
                                        }), t.next = 21, Object(ce["p"])(u);
                                    case 21:
                                        d = t.sent, p = d.originData, e.submitAfter(p), t.next = 27;
                                        break;
                                    case 26:
                                        e.submitAfter(l.data, !0);
                                    case 27:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, submitAfter: function (e, t) {
                        0 === +e.code ? (Object(C["c"])("续假申请成功"), this.$EventBus.$emit("refresh-list"), this.$router.replace("/detail/".concat(this.leaveId, "/").concat(this.needApproval))) : t && Object(C["a"])(e.message || "")
                    }
                })
            }, Ot = kt, At = (a("2d2b"), Object(N["a"])(Ot, Ke, Xe, !1, null, null, null)), Tt = At.exports, St = a("08ff"),
            jt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "page-current-approver h-screen ios-touch-scroll"}, [a("CatTitle", {
                    staticClass: "bg-warning tip px-20 text-center",
                    attrs: {size: "3.20000vw", title: "或签：审批人中一人批准即可"}
                }), a("div", {staticClass: "content p-20"}, [e._v(" " + e._s(e.approvers) + " ")])], 1)
            }, Rt = [], It = {
                components: {CatTitle: v["a"]}, data: function () {
                    return {approvers: ""}
                }, created: function () {
                    this.approvers = localStorage.getItem("currentApprovers")
                }
            }, Lt = It, _t = (a("4c78"), Object(N["a"])(Lt, jt, Rt, !1, null, null, null)), Et = _t.exports,
            Dt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "page-record-detail h-screen ios-touch-scroll"}, [a("CatLeaveDetail", {
                    attrs: {
                        "is-detail": "",
                        my: !0,
                        info: e.info,
                        "need-approval": e.needApproval,
                        "approve-nodes": e.getApproveNodes(e.info.approvers)
                    }
                }), (e.info.approvers || []).length > 0 ? a("div", {staticClass: "py-10 font-12 bg-white px-20 my-10 hairline-t hairline-b"}, [a("span", {staticClass: "font-14 font-dark"}, [e._v("请假流程记录")]), a("CatAuditList", {
                    staticClass: "mt-10",
                    attrs: {flows: e.info.approvers, "leave-satus": e.leaveSatus, "need-approval": e.needApproval}
                })], 1) : e._e(), e.extendInfos.length > 0 ? e._l(e.extendInfos, (function (t, r) {
                    return a("span", {key: r}, [a("CatExtendDetail", {
                        key: r,
                        attrs: {
                            "is-detail": "",
                            my: !0,
                            "is-click-location": !1,
                            info: t,
                            "need-approval": e.needApproval,
                            "approve-nodes": e.getApproveNodes(t.approvers)
                        }
                    }), (t.approvers || []).length > 0 ? a("div", {staticClass: "py-10 font-12 bg-white px-20 my-10 hairline-t hairline-b"}, [a("span", {staticClass: "font-14 font-dark"}, [e._v("请假流程记录")]), a("CatAuditList", {
                        staticClass: "mt-10",
                        attrs: {flows: t.approvers, "leave-satus": e.leaveSatus, "need-approval": e.needApproval}
                    })], 1) : e._e()], 1)
                })) : e._e(), a("div", {staticClass: "font-light text-center my-10 font-12"}, [e._v(" 没有更多了 ")])], 2)
            }, Pt = [], Mt = {
                components: {CatExtendDetail: U["a"], CatLeaveDetail: W["a"], CatAuditList: S["a"]}, data: function () {
                    return {info: {status: "", approvers: []}, extendInfos: []}
                }, computed: {
                    currentNode: function () {
                        return this.extendInfos.length > 0 ? this.extendInfos[this.extendInfos.length - 1] : this.info
                    }, leaveSatus: function () {
                        return this.currentNode.status
                    }, id: function () {
                        return this.$route.params.id
                    }, needApproval: function () {
                        return "0" === this.$route.params.needApproval || 0 === this.$route.params.needApproval ? 0 : 1
                    }
                }, created: function () {
                    this.initPage()
                }, methods: {
                    initPage: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(ce["f"])({id: e.id, needApproval: e.needApproval});
                                    case 2:
                                        a = t.sent, r = a.data, e.info = r.detail, e.extendInfos = r.extendInfos || r.leaveExtends;
                                    case 6:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, getApproveNodes: function (e) {
                        return e && e.filter((function (e) {
                            return e.approveNode.length > 0 && e.approveNode[0].nodeWid
                        }))
                    }
                }
            }, $t = Mt, Nt = Object(N["a"])($t, Dt, Pt, !1, null, null, null), qt = Nt.exports, Bt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "page-create flex-col flex-1 h-screen overflow-hidden"}, [a("div", {staticClass: "form-content flex-1 ios-touch-scroll"}, [a("cat-tip", {attrs: {"tip-config": e.leaveConfig}}), a("bus-leave-type-picker", {
                    attrs: {
                        "is-link": "",
                        required: "",
                        label: "请假类型",
                        options: e.typeList,
                        "leave-time-limit-info": e.leaveTimeLimitInfo
                    }, model: {
                        value: e.model.leaveType, callback: function (t) {
                            e.$set(e.model, "leaveType", t)
                        }, expression: "model.leaveType"
                    }
                }), a("cat-cell-date-time-picker", {
                    key: "startTime",
                    attrs: {required: "", label: "开始时间"},
                    model: {
                        value: e.model.startTime, callback: function (t) {
                            e.$set(e.model, "startTime", t)
                        }, expression: "model.startTime"
                    }
                }), a("cat-cell-date-time-picker", {
                    attrs: {required: "", label: "结束时间"},
                    model: {
                        value: e.model.endTime, callback: function (t) {
                            e.$set(e.model, "endTime", t)
                        }, expression: "model.endTime"
                    }
                }), a("cat-cell-switch", {
                    attrs: {label: "需要离校", disabled: e.LeaveSchoolDisabled},
                    model: {
                        value: e.model.outStatus, callback: function (t) {
                            e.$set(e.model, "outStatus", t)
                        }, expression: "model.outStatus"
                    }
                }), a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: String(e.model.leaveType).length > 0 && e.LeaveSchoolDisabled,
                        expression: "String(model.leaveType).length > 0 && LeaveSchoolDisabled"
                    }], staticClass: "font-warning text-right font-12 py-10 px-20"
                }, [e._v(" 当前请假类型为必离校，不可更改是否需要离校 ")]), a("cat-cell-input", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.model.outStatus,
                        expression: "model.outStatus"
                    }],
                    attrs: {
                        right: "",
                        required: "",
                        maxlength: "11",
                        "class-str": "flex jc-between font-normal flex-1 ai-center",
                        label: "紧急联系人",
                        placeholder: "请输入手机号码(不能填写自己的)"
                    },
                    model: {
                        value: e.model.urgencyMobile, callback: function (t) {
                            e.$set(e.model, "urgencyMobile", t)
                        }, expression: "model.urgencyMobile"
                    }
                }), e.showAddress ? a("cat-cell-area-picker", {
                    staticClass: "mt-10 hairline-t",
                    attrs: {"is-link": "", required: "", label: "目的地"},
                    model: {
                        value: e.model.address, callback: function (t) {
                            e.$set(e.model, "address", t)
                        }, expression: "model.address"
                    }
                }) : e._e(), e.showAddress ? a("cat-cell-long-input", {
                    staticClass: "mb-10 hairline-b",
                    attrs: {
                        rows: "3",
                        required: "",
                        maxlength: "100",
                        "show-word-limit": "",
                        label: "详细地址",
                        placeholder: "请输入目的地详细地址，如道路、门牌号、小区、楼栋号、单元室等",
                        autosize: {maxHeight: 120}
                    },
                    model: {
                        value: e.model.detailAddress, callback: function (t) {
                            e.$set(e.model, "detailAddress", t)
                        }, expression: "model.detailAddress"
                    }
                }) : e._e(), a("cat-cell-long-input", {
                    class: e.showAddress ? "hairline-t-n" : "",
                    attrs: {
                        rows: "3",
                        required: "",
                        maxlength: "300",
                        "show-word-limit": "",
                        label: "请假原因",
                        placeholder: "请输入请假原因[必填]，至少10字",
                        autosize: {maxHeight: 120}
                    },
                    model: {
                        value: e.model.leaveReason, callback: function (t) {
                            e.$set(e.model, "leaveReason", t)
                        }, expression: "model.leaveReason"
                    }
                }), a("cat-cell-upload", {
                    ref: "catCellUpload",
                    staticClass: "hairline-t-n",
                    attrs: {
                        label: "添加附件",
                        count: 4,
                        http: e.http,
                        "download-media-url": e.downloadMediaURL,
                        "sts-access-url": e.getMobileOSSAccessURL,
                        "upload-policy-url": e.getUploadPolicyURL
                    },
                    model: {
                        value: e.model.applyAttach, callback: function (t) {
                            e.$set(e.model, "applyAttach", t)
                        }, expression: "model.applyAttach"
                    }
                }), e.approveFlow.length > 0 && 1 === e.needApproval ? a("div", {staticClass: "approveFlow text-center py-10 font-14"}, [e._v(" 审批流程共" + e._s(e.approveFlow.length) + "步 "), a("span", {
                    staticClass: "font-primary",
                    on: {
                        click: function () {
                            return e.showFlowModal = !0
                        }
                    }
                }, [e._v("查看 >")])]) : e._e(), e.renderTime.startTime && e.renderTime.endTime && String(e.model.leaveType).length > 0 && e.timeIsOk && 1 === e.needApproval ? a("cat-cell-picker", {
                    attrs: {
                        "is-link": "",
                        required: "",
                        "name-key": "userName",
                        "value-key": "userWid",
                        label: "审批人",
                        options: e.approvers,
                        "show-picker-before": e.showPickerBefore
                    }, on: {"on-confirm": e.getApproverIdInfo}, model: {
                        value: e.model.approverWid, callback: function (t) {
                            e.$set(e.model, "approverWid", t)
                        }, expression: "model.approverWid"
                    }
                }) : e._e(), e.hasGotSender && 1 === e.needApproval ? a("CatCellPeople", {
                    attrs: {
                        label: "抄送人",
                        list: e.chooseData
                    }, on: {click: e.doShowChoosePeople}
                }) : e._e(), a("cat-location", {
                    staticClass: "px-20 location py-10 bg-white hairline-t-n",
                    attrs: {"read-only": e.isRequestOk, address: e.submitAddress},
                    on: {"on-location-success": e.getLocationData, "on-location-status": e.getLocationStatus}
                }), 1 === e.leaveConfig.openDisclaimers ? a("Checkbox", {
                    staticClass: "bg-white px-20 py-15 hairline-t break-all",
                    model: {
                        value: e.agreement, callback: function (t) {
                            e.agreement = t
                        }, expression: "agreement"
                    }
                }, [e._v(" " + e._s(e.leaveConfig.disclaimers) + " ")]) : e._e()], 1), a("cat-flow-chart-modal", {
                    attrs: {
                        title: "审批流程",
                        options: e.approveFlow
                    }, model: {
                        value: e.showFlowModal, callback: function (t) {
                            e.showFlowModal = t
                        }, expression: "showFlowModal"
                    }
                }), a("bus-reselect-time-modal", {
                    attrs: {
                        "cancel-button-text": "取消",
                        "confirm-button-text": "重新选择",
                        "time-limit-res-info": e.timeLimitResInfo
                    }, on: {
                        confirm: e.repickTimeRange, cancel: function () {
                            return e.showTimeModal = !1
                        }
                    }, model: {
                        value: e.showTimeModal, callback: function (t) {
                            e.showTimeModal = t
                        }, expression: "showTimeModal"
                    }
                }), a("cat-cheat-observer", {ref: "cheatObserver"}), a("cat-button", {
                    staticClass: "no-shrink",
                    attrs: {disabled: e.submitDisabled},
                    on: {click: e.submit}
                }, [e._v(" 提交请假 ")])], 1)
            }, Ft = [], Ut = (a("c740"), a("6cff"), a("b0d5")), Wt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {staticClass: "bus-leave-type-picker hairline-b"}, [a("cat-cell-picker", e._g(e._b({
                    attrs: {
                        "class-str": "flex flex-1 jc-between font-normal",
                        value: e.value
                    }
                }, "cat-cell-picker", e.$attrs, !1), e.$listeners)), a("div", {
                    staticClass: "type-description font-12 font-warning mx-20 flex-col",
                    class: e.tipClass
                }, [e.canShowLeaveTimeLimitTips ? a("div", [a("div", [e._v(" 由于学校相关规定，该类型请假存在如下限制： ")]), e.canShowCompensatoryTips ? a("div", [e._v(" • 若"), a("span", {staticClass: "font-error"}, [e._v("开始时间")]), e._v("早于提交时间，即补请只可补最近" + e._s(e._f("filterZero")(e.leaveTimeLimitInfo.compensatoryDay, "天")) + e._s(e._f("filterZero")(e.leaveTimeLimitInfo.compensatoryHour, "小时")) + "内的假 ")]) : e._e(), e.canShowNoCompensatory ? a("div", [e._v(" • 若"), a("span", {staticClass: "font-error"}, [e._v("开始时间")]), e._v("早于提交时间，即不可补假 ")]) : e._e(), e.canShowEarlyLeave ? a("div", [e._v(" • 若"), a("span", {staticClass: "font-error"}, [e._v("开始时间")]), e._v("晚于提交时间，即正常请假必须提前" + e._s(e._f("filterZero")(e.leaveTimeLimitInfo.earlyLeaveDay, "天")) + e._s(e._f("filterZero")(e.leaveTimeLimitInfo.earlyLeaveHour, "小时")) + "提交 ")]) : e._e()]) : e._e(), e.showNoNeedApprovalTip ? a("div", [e.leaveTimeLimitInfo.limitDay || e.leaveTimeLimitInfo.limitHour ? a("div", [e._v(" • 提交的请假时长不得大于" + e._s(e._f("filterZero")(e.leaveTimeLimitInfo.limitDay, "天")) + e._s(e._f("filterZero")(e.leaveTimeLimitInfo.limitHour, "小时")) + " ")]) : e._e(), a("div", [e._v("• 该请假类型无需老师审批，提交成功后立即通过")])]) : e._e()])], 1)
            }, Ht = [], zt = (a("a9e3"), {
                components: {CatCellPicker: rt["a"]},
                filters: {
                    filterZero: function (e, t) {
                        return +e > 0 ? "".concat(e).concat(t) : ""
                    }
                },
                inheritAttrs: !1,
                props: {
                    value: {type: [Number, String]}, leaveTimeLimitInfo: {
                        type: Object, default: function () {
                            return {}
                        }
                    }
                },
                data: function () {
                    return {}
                },
                computed: {
                    canShowLeaveTimeLimitTips: function () {
                        return this.value && (this.canShowCompensatory || this.canShowEarlyLeave || this.showNoNeedApprovalTip)
                    }, tipClass: function () {
                        return this.canShowLeaveTimeLimitTips || this.showNoNeedApprovalTip ? "py-10" : ""
                    }, showNoNeedApprovalTip: function () {
                        var e = "0" === this.leaveTimeLimitInfo.needApproval || 0 === this.leaveTimeLimitInfo.needApproval ? 0 : 1;
                        return this.value && 0 === e
                    }, canShowCompensatory: function () {
                        return this.leaveTimeLimitInfo.enableCompensatory
                    }, canShowNoCompensatory: function () {
                        var e = this.leaveTimeLimitInfo.compensatoryDay + this.leaveTimeLimitInfo.compensatoryHour;
                        return this.canShowCompensatory && 0 === e
                    }, canShowCompensatoryTips: function () {
                        var e = this.leaveTimeLimitInfo.compensatoryDay + this.leaveTimeLimitInfo.compensatoryHour;
                        return this.canShowCompensatory && e > 0
                    }, canShowEarlyLeave: function () {
                        var e = this.leaveTimeLimitInfo.earlyLeaveDay + this.leaveTimeLimitInfo.earlyLeaveHour;
                        return this.leaveTimeLimitInfo.enableEarlyLeave && e > 0
                    }
                }
            }), Gt = zt, Vt = Object(N["a"])(Gt, Wt, Ht, !1, null, null, null), Zt = Vt.exports, Jt = function () {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("v-dialog", e._g(e._b({
                    staticClass: "bus-reselect-time-modal",
                    attrs: {"get-container": "body"},
                    model: {
                        value: e.show, callback: function (t) {
                            e.show = t
                        }, expression: "show"
                    }
                }, "v-dialog", e.$attrs, !1), e.$listeners), [a("div", {
                    staticClass: "font-error",
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e._v(" 请重新选择请假开始时间 ")]), a("div", {staticClass: "font-12 mt-10 mx-20"}, [a("div", {staticClass: "mb-10"}, [e._v(" 由于学校相关规定，开始时间存在如下限制： ")]), e.canShowCompenSatoryResMsg ? a("div", {staticClass: "mb-10"}, [e._v(" • " + e._s(e.timeLimitResInfo.compensatoryPoint) + "以前不可选 ")]) : e._e(), e.canShowNoCompenSatoryResMsg ? a("div", {staticClass: "mb-10"}, [e._v(" • 不可补请假 ")]) : e._e(), e.canShowLeaveEarlyResMsg ? a("div", {staticClass: "mb-10"}, [e._v(" • " + e._s(e.timeLimitResInfo.earlyLeaveStartPoint) + "-" + e._s(e.timeLimitResInfo.earlyLeaveEndPoint) + "之间不可选 ")]) : e._e()])])
            }, Kt = [], Xt = {
                components: {"v-dialog": m["a"].Component}, filters: {
                    filterZero: function (e, t) {
                        return +e > 0 ? "".concat(e).concat(t) : ""
                    }
                }, props: {
                    value: {type: Boolean, default: !1}, timeLimitResInfo: {
                        type: Object, default: function () {
                            return {}
                        }
                    }
                }, computed: {
                    show: {
                        set: function (e) {
                            this.$emit("input", e)
                        }, get: function () {
                            return this.value
                        }
                    }, canShowCompenSatoryResMsg: function () {
                        return 1 === this.timeLimitResInfo.enableCompensatory && this.timeLimitResInfo.compensatoryPoint
                    }, canShowNoCompenSatoryResMsg: function () {
                        return 2 === this.timeLimitResInfo.enableCompensatory
                    }, canShowLeaveEarlyResMsg: function () {
                        return this.timeLimitResInfo.earlyLeaveStartPoint && this.timeLimitResInfo.earlyLeaveEndPoint
                    }
                }
            }, Qt = Xt, Yt = (a("3425"), Object(N["a"])(Qt, Jt, Kt, !1, null, null, null)), ea = Yt.exports,
            ta = function (e, t, a) {
                var r = e.startTime, n = e.endTime;
                if (!r) return Object(C["b"])("请选择开始时间"), !1;
                if (!n) return Object(C["b"])("请选择结束时间"), !1;
                if (x()(r).isSame(x()(n))) return Object(C["b"])("开始时间不能和结束时间相同"), !1;
                if (x()(r).isAfter(x()(n))) return Object(C["b"])("开始时间不能大于结束时间"), !1;
                if (a.enableLimit && (a.limitDay || a.limitHour)) {
                    if (x()(n).diff(x()(r), "seconds") > 24 * a.limitDay * 60 * 60 + 3600 * a.limitHour) {
                        var i = "";
                        return i = a.limitDay && a.limitHour ? "".concat(a.limitDay, "天").concat(a.limitHour, "小时") : a.limitDay ? "".concat(a.limitDay, "天") : "".concat(a.limitHour, "小时"), Object(C["b"])("请假时长不能超过".concat(i)), !1
                    }
                    return !0
                }
                return !t || (!(x()(n).diff(x()(r), "seconds") > 24 * t * 60 * 60) || (Object(C["b"])("管理员提示：请假时长不能超过".concat(t, "天")), !1))
            }, aa = function (e) {
                return !e.outStatus || (e.urgencyMobile ? /^[\d-]+$/.test(e.urgencyMobile) && e.urgencyMobile.length > 6 && e.urgencyMobile.length < 12 || (Object(C["b"])("紧急联系人手机号码不正确"), !1) : (Object(C["b"])("紧急联系人手机号码不能为空"), !1))
            }, ra = function (e) {
                var t = e.leaveReason && e.leaveReason.trim();
                return t ? t && t.length > 300 ? (Object(C["b"])("请假原因不能超过300个字"), !1) : !(t && t.length < 10) || (Object(C["b"])("请假原因不能少于10个字"), !1) : (Object(C["b"])("请假原因不能为空"), !1)
            }, na = function (e, t) {
                if (t) {
                    var a = e.detailAddress && e.detailAddress.trim();
                    return a ? !(a && a.length > 300) || (Object(C["b"])("详细地址不能超过300个字"), !1) : (Object(C["b"])("详细地址不能为空"), !1)
                }
                return !0
            }, ia = function (e, t) {
                return !t || (!!e.address || (Object(C["b"])("请选择目的地"), !1))
            }, oa = [{key: "leaveType", isSelect: !0, required: !0, label: "请假类型"}, {
                key: "startTime",
                isSelect: !0,
                required: !0,
                label: "开始时间"
            }, {key: "endTime", isSelect: !0, required: !0, label: "结束时间"}, {
                key: "urgencyMobile",
                isSelect: !1,
                required: !1,
                label: "紧急联系人",
                rules: function () {
                    var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a) {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, aa(t);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, a) {
                        return e.apply(this, arguments)
                    }

                    return t
                }()
            }, {
                key: "address", isSelect: !0, required: !1, label: "目的地", rules: function () {
                    var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a) {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, ia(t, a);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, a) {
                        return e.apply(this, arguments)
                    }

                    return t
                }()
            }, {
                key: "detailAddress", isSelect: !0, required: !1, label: "详细地址", rules: function () {
                    var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a) {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, na(t, a);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, a) {
                        return e.apply(this, arguments)
                    }

                    return t
                }()
            }, {
                key: "leaveReason", isSelect: !1, required: !1, label: "请假原因", rules: function () {
                    var e = Object(u["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, ra(t);
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t) {
                        return e.apply(this, arguments)
                    }

                    return t
                }()
            }, {key: "approverWid", isSelect: !0, required: !0, label: "审批人"}], sa = function () {
                var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a, r, n) {
                    var i, o, s, c;
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                i = 0, o = oa.length;
                            case 1:
                                if (!(i < o)) {
                                    e.next = 19;
                                    break
                                }
                                if (s = oa[i], !s.required) {
                                    e.next = 10;
                                    break
                                }
                                return "approverWid" === s.key && 0 === r.length && (s.validateResult = !0), e.next = 7, ca(t, a, s);
                            case 7:
                                s.validateResult = e.sent, e.next = 14;
                                break;
                            case 10:
                                if (!s.rules) {
                                    e.next = 14;
                                    break
                                }
                                return e.next = 13, s.rules(t, n);
                            case 13:
                                s.validateResult = e.sent;
                            case 14:
                                if (s.validateResult) {
                                    e.next = 16;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 16:
                                i++, e.next = 1;
                                break;
                            case 19:
                                return c = oa.every((function (e) {
                                    return e.validateResult
                                })), e.abrupt("return", c);
                            case 21:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, a, r, n) {
                    return e.apply(this, arguments)
                }
            }(), ca = function () {
                var e = Object(u["a"])(regeneratorRuntime.mark((function e(t, a, r) {
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (0 !== a || "approverWid" !== r.key) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", !0);
                            case 2:
                                if (t[r.key] || "leaveType" === r.key) {
                                    e.next = 7;
                                    break
                                }
                                return r.isSelect ? Object(C["b"])("请选择".concat(r.label)) : Object(C["b"])("".concat(r.label, "不能为空")), e.abrupt("return", !1);
                            case 7:
                                if (!(String(t.leaveType).length < 1)) {
                                    e.next = 10;
                                    break
                                }
                                return Object(C["b"])("请选择".concat(r.label)), e.abrupt("return", !1);
                            case 10:
                                return e.abrupt("return", !0);
                            case 11:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, a, r) {
                    return e.apply(this, arguments)
                }
            }(), la = Object(ot["a"])("choosePeople"), ua = la.mapMutations, da = !1, pa = {
                components: {
                    CatCellPicker: rt["a"],
                    CatCellDateTimePicker: it["a"],
                    CatCellSwitch: Ut["a"],
                    CatCellLongInput: nt["a"],
                    CatCellUpload: Ie["a"],
                    BusLeaveTypePicker: Zt,
                    CatCellInput: at["a"],
                    CatFlowChartModal: tt["a"],
                    CatButton: f["a"],
                    CatCheatObserver: je["a"],
                    BusReselectTimeModal: ea,
                    CatLocation: Re["a"],
                    CatTip: pe["a"],
                    CatCellPeople: et["a"],
                    Checkbox: Ye["a"],
                    CatCellAreaPicker: Qe["a"]
                },
                data: function () {
                    return {
                        getMobileOSSAccessURL: ce["h"],
                        downloadMediaURL: ce["d"],
                        getUploadPolicyURL: ce["j"],
                        http: Le["a"],
                        hasGotSender: !0,
                        LeaveSchoolDisabled: !1,
                        model: {
                            leaveType: "",
                            startTime: null,
                            endTime: null,
                            urgencyMobile: null,
                            leaveReason: null,
                            applyAttach: [],
                            outStatus: !1,
                            approverWid: null,
                            address: "",
                            detailAddress: ""
                        },
                        typeList: [],
                        leaveConfig: {allowLeave: 0, limitDays: 0, notAllowTitle: "", notAllowUrl: "", uploadlocation: 0},
                        isRequestOk: !1,
                        approveFlow: [],
                        approvers: [],
                        approversInfo: {},
                        timeIsOk: !1,
                        showFlowModal: !1,
                        notOutReport: 0,
                        leaveTimeLimitInfo: {
                            enableCompensatory: 0,
                            compensatoryDay: 0,
                            compensatoryHour: 0,
                            enableEarlyLeave: 0,
                            earlyLeaveDay: 0,
                            earlyLeaveHour: 0
                        },
                        showTimeModal: !1,
                        timeLimitResInfo: {
                            enableCompensatory: 0,
                            compensatoryPoint: "",
                            earlyLeaveStartPoint: "",
                            earlyLeaveEndPoint: ""
                        },
                        hasSelectedArr: [],
                        submitAddress: "",
                        locationStatus: "",
                        locationData: {},
                        cheatType: null,
                        type: vt.LEAVE,
                        chooseData: [],
                        localId: null,
                        localChooseArr: [],
                        localModel: {},
                        canValidateTime: !1,
                        agreement: !1
                    }
                },
                computed: {
                    showAddress: function () {
                        return 1 === this.leaveConfig.openDestination && this.model.outStatus
                    }, submitDisabled: function () {
                        return 1 === this.leaveConfig.openDisclaimers ? this.isRequestOk || !this.agreement : this.isRequestOk
                    }, renderTime: function () {
                        return {startTime: this.model.startTime, endTime: this.model.endTime}
                    }, reCreate: function () {
                        return "reCreate" === this.$route.query.type
                    }, reEdit: function () {
                        return "reEdit" === this.$route.query.type
                    }, canShowCompenSatoryResMsg: function () {
                        return 1 === this.timeLimitResInfo.enableCompensatory && this.timeLimitResInfo.compensatoryPoint
                    }, canShowNoCompenSatoryResMsg: function () {
                        return 2 === this.timeLimitResInfo.enableCompensatory
                    }, canShowLeaveEarlyResMsg: function () {
                        return this.timeLimitResInfo.earlyLeaveStartPoint && this.timeLimitResInfo.earlyLeaveEndPoint
                    }, locationType: function () {
                        return "success" === this.locationStatus ? 0 : "fail" === this.locationStatus || "ing" === this.locationStatus ? 2 : "noAuth" === this.locationStatus ? 1 : void 0
                    }, hasAllType: function () {
                        return this.typeList.length > 0
                    }, sendPeopleData: {
                        set: function (e) {
                            this.chooseData = e
                        }, get: function () {
                            return this.chooseData.length > 0 ? this.chooseData : this.hasSelectedArr
                        }
                    }, needApproval: function () {
                        return "0" === this.leaveTimeLimitInfo.needApproval || 0 === this.leaveTimeLimitInfo.needApproval ? 0 : 1
                    }
                },
                watch: {
                    renderTime: {
                        deep: !0, handler: function (e) {
                            (e.startTime || e.endTime) && this.changeLeaveType(e)
                        }
                    }, "model.leaveType": {
                        handler: function (e) {
                            var t = this.typeList.findIndex((function (t) {
                                return e === t.code
                            }));
                            this.initLeaveType(t)
                        }
                    }
                },
                created: function () {
                },
                activated: function () {
                    this.$route.query.leaveId !== this.localId && "fromChoose" !== this.localId || da ? (this.model = {
                        leaveType: "",
                        startTime: null,
                        endTime: null,
                        urgencyMobile: null,
                        leaveReason: null,
                        applyAttach: [],
                        outStatus: !1,
                        approverWid: null,
                        address: "",
                        detailAddress: ""
                    }, this.sendPeopleData = [], this.leaveId = this.$route.query.leaveId, this.localChooseArr = [], this.hasSelectedArr = [], this.timeIsOk = !1, this.agreement = !1, this.localModel = {}, this.initPage(!1)) : (this.localChooseArr = this.chooseData, this.hasSelectedArr = this.localChooseArr, this.leaveId = this.$route.query.leaveId, this.model = Object(we["a"])({}, this.localModel))
                },
                deactivated: function () {
                    this.localId = this.$route.params.id ? this.$route.params.id : "init", this.localModel = this.model
                },
                mounted: function () {
                    var e = this;
                    this.$EventBus.$on("get-choose-data", (function (t) {
                        e.getChooseData(t)
                    }))
                },
                beforeRouteEnter: function (e, t, a) {
                    t.fullPath.indexOf("detail") > -1 ? da = !0 : t.fullPath.indexOf("choosePeople") > -1 && (da = !1), a()
                },
                beforeRouteLeave: function (e, t, a) {
                    var r = ["choosePeople", "detail"], n = r.some((function (t) {
                        return e.fullPath.indexOf(t) > -1
                    }));
                    n ? a() : m["a"].confirm({title: "", message: "确定退出？"}).then((function (e) {
                        a()
                    })).catch((function () {
                        a(!1)
                    }))
                },
                methods: Object(we["a"])(Object(we["a"])({}, ua(["setDataList", "setHistoryApiMethod", "setSearchApiMethod", "setAddHistoryApiMethod"])), {}, {
                    initPage: function () {
                        var e = arguments, t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function a() {
                            var r;
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return r = e.length > 0 && void 0 !== e[0] && e[0], a.next = 3, t.getAllLeaveTypes();
                                    case 3:
                                        return a.next = 5, t.getReportInfo();
                                    case 5:
                                        return a.next = 7, t.getLeaveAllocation(t.type);
                                    case 7:
                                        return a.next = 9, t.reCreate && t.getReLeaveDate(t.leaveId, r);
                                    case 9:
                                        return a.next = 11, t.reEdit && t.getReEditData(t.leaveId, t.type, r);
                                    case 11:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }, showPickerBefore: function () {
                        return !(this.approvers.length < 1) || (Object(C["b"])("暂无审批人数据"), !1)
                    }, getChooseData: function (e) {
                        this.sendPeopleData = e, this.$router.go(-1)
                    }, doShowChoosePeople: function () {
                        this.setDataList(this.sendPeopleData), this.setHistoryApiMethod(ce["x"]), this.setSearchApiMethod(ce["y"]), this.setAddHistoryApiMethod(ce["b"]), this.$router.push({path: "/choosePeople/".concat(this.leaveId ? this.leaveId : "fromChoose")})
                    }, getApproverIdInfo: function (e) {
                        this.approversInfo = {approverId: e.userId, approverName: e.userName}
                    }, getLocationData: function (e) {
                        this.locationData = e, this.submitAddress = e.address || "定位信息"
                    }, getLocationStatus: function (e) {
                        "fail" === e && (this.submitAddress = "定位失败"), this.locationStatus = e
                    }, changeLeaveType: function (e) {
                        if (this.hasAllType) {
                            var t = ta(e, this.leaveConfig.limitDays, this.leaveTimeLimitInfo);
                            this.model.approverWid = this.localModel.approverWid ? this.localModel.approverWid : "", this.localModel.approverWid = "", this.timeIsOk = t, this.getApproveFlowAndapprovers()
                        }
                    }, getAllLeaveTypes: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return Object(y["e"])(), t.next = 3, Object(ce["v"])({});
                                    case 3:
                                        a = t.sent, r = a.data, Object(y["b"])(), e.typeList = (null === r || void 0 === r ? void 0 : r.leaveType) || [], e.initLeaveType(-1);
                                    case 8:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, getApproveFlowAndapprovers: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, i;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.approvers = e.approveFlow = [], e.approversInfo = {}, e.timeIsOk && 0 !== String(e.model.leaveType).length && 0 !== e.needApproval) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6, Object(ce["r"])({
                                            leaveType: e.model.leaveType,
                                            startTime: "".concat(e.model.startTime, ":00"),
                                            endTime: "".concat(e.model.endTime, ":00"),
                                            leaveId: e.leaveId
                                        });
                                    case 6:
                                        a = t.sent, r = a.data, n = [], i = (null === r || void 0 === r ? void 0 : r.approveFlow) || [], i.forEach((function (e) {
                                            n.push({
                                                list: e.map((function (e) {
                                                    return Object(we["a"])(Object(we["a"])({}, e), {}, {name: e.nodeName})
                                                }))
                                            })
                                        })), e.approveFlow = n, e.approvers = r.approvers;
                                    case 13:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, checkLeaveTimeRangeConfig: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(ce["u"])({code: e.model.leaveType});
                                    case 2:
                                        return a = t.sent, r = a.data, t.abrupt("return", r || {});
                                    case 5:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, getReLeaveDate: function (e, t) {
                        var a = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function r() {
                            var n, i, o, s, c, l, u;
                            return regeneratorRuntime.wrap((function (r) {
                                while (1) switch (r.prev = r.next) {
                                    case 0:
                                        return a.hasGotSender = !1, Object(y["e"])(), r.next = 4, Object(ce["f"])({id: e});
                                    case 4:
                                        n = r.sent, i = n.data, Object(y["b"])(), o = i.leaveType, s = i.detail, c = s.ccInfo || {}, t || (a.hasSelectedArr = [], a.localChooseArr.length > 0 ? a.hasSelectedArr = a.localChooseArr : (c.teachers && c.teachers.length > 0 && (a.hasSelectedArr = a.hasSelectedArr.concat(c.teachers)), c.students && c.students.length > 0 && (a.hasSelectedArr = a.hasSelectedArr.concat(c.students)))), a.sendPeopleData = a.hasSelectedArr, a.hasGotSender = !0, a.LeaveSchoolDisabled = !!s.mustOut, l = s.destination || "", u = s.applyAttach || [], a.model = {
                                            leaveType: o.code,
                                            outStatus: s.outStatus,
                                            leaveReason: null,
                                            applyAttach: u.map((function (e) {
                                                return Object(we["a"])(Object(we["a"])({}, e), {}, {attachmentUrl: e.url})
                                            })),
                                            urgencyMobile: s.urgencyMobile,
                                            startTime: s.startDate,
                                            endTime: s.endDate,
                                            address: l.split("/").slice(0, 3).join("/"),
                                            detailAddress: l.split("/").slice(-1).join("")
                                        };
                                    case 17:
                                    case"end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    }, getReportInfo: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return Object(y["e"])(), t.next = 3, Object(ce["i"])({});
                                    case 3:
                                        a = t.sent, r = a.data, Object(y["b"])(), e.notOutReport = r.notOutReport;
                                    case 7:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, getLeaveAllocation: function (e) {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function a() {
                            var r, n;
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return Object(y["e"])(), a.next = 3, Object(ce["c"])({type: e});
                                    case 3:
                                        r = a.sent, n = r.data, Object(y["b"])(), t.leaveConfig = n;
                                    case 7:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }, getReEditData: function (e, t, a) {
                        var r = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function n() {
                            var i, o, s, c, l;
                            return regeneratorRuntime.wrap((function (n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return r.hasGotSender = !1, Object(y["e"])(), n.next = 4, Object(ce["t"])({
                                            id: e,
                                            type: t
                                        });
                                    case 4:
                                        i = n.sent, o = i.data, Object(y["b"])(), s = o.ccInfo || {}, a || (r.hasSelectedArr = [], r.localChooseArr.length > 0 ? r.hasSelectedArr = r.localChooseArr : (s.teachers && s.teachers.length > 0 && (r.hasSelectedArr = r.hasSelectedArr.concat(s.teachers)), s.students && s.students.length > 0 && (r.hasSelectedArr = r.hasSelectedArr.concat(s.students)))), r.hasGotSender = !0, c = o.applyAttach ? o.applyAttach : [], r.sendPeopleData = r.hasSelectedArr, l = o.destination || "", r.model = Object(we["a"])(Object(we["a"])({}, o), {}, {
                                            leaveType: +o.leaveType,
                                            applyAttach: c.map((function (e) {
                                                return Object(we["a"])(Object(we["a"])({}, e), {}, {attachmentUrl: e.url})
                                            })),
                                            startTime: o.startTime && o.startTime.slice(0, -3),
                                            endTime: o.endTime && o.endTime.slice(0, -3),
                                            address: l.split("/").slice(0, 3).join("/") || "",
                                            detailAddress: l.split("/").slice(-1).join("") || ""
                                        }), r.LeaveSchoolDisabled = !!o.mustOut;
                                    case 15:
                                    case"end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }, initLeaveType: function (e) {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function a() {
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        if (!(e > -1)) {
                                            a.next = 11;
                                            break
                                        }
                                        return t.model.approverWid = "", t.model.outStatus = t.model.outStatus || !!t.typeList[e].mustOut, t.LeaveSchoolDisabled = !!t.typeList[e].mustOut, t.model.approverWid = "", a.next = 7, t.checkLeaveTimeRangeConfig();
                                    case 7:
                                        t.leaveTimeLimitInfo = a.sent, t.getApproveFlowAndapprovers(), a.next = 14;
                                        break;
                                    case 11:
                                        t.model.leaveType = "", t.model.outStatus = !1, t.LeaveSchoolDisabled = !0;
                                    case 14:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }, doSubmit: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n, i, o;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return Object(y["e"])("正在处理中..."), t.next = 3, e.beforeSubmitCheck();
                                    case 3:
                                        if (a = t.sent, a) {
                                            t.next = 7;
                                            break
                                        }
                                        return Object(y["b"])(), t.abrupt("return");
                                    case 7:
                                        if (!(e.sendPeopleData && e.sendPeopleData.length > 100)) {
                                            t.next = 10;
                                            break
                                        }
                                        return Object(C["b"])("抄送人数不能大于100，请重新选择"), t.abrupt("return");
                                    case 10:
                                        return t.next = 12, Object(P["g"])();
                                    case 12:
                                        return r = t.sent, n = Object(we["a"])(Object(we["a"])(Object(we["a"])({}, e.model), e.approversInfo), {}, {
                                            startTime: "".concat(e.model.startTime, ":00"),
                                            endTime: "".concat(e.model.endTime, ":00"),
                                            applyAttach: e.model.applyAttach.map((function (e) {
                                                return {url: e.attachmentUrl, type: 1}
                                            })),
                                            ccInfo: {
                                                teachers: e.sendPeopleData.filter((function (e) {
                                                    return 0 === e.personType
                                                })), students: e.sendPeopleData.filter((function (e) {
                                                    return 1 === e.personType
                                                }))
                                            },
                                            cheatType: e.cheatType,
                                            source: 1,
                                            location: Object(we["a"])({
                                                deviceId: null === r || void 0 === r ? void 0 : r.uuid,
                                                systemName: null === r || void 0 === r ? void 0 : r.platform,
                                                systemVersion: null === r || void 0 === r ? void 0 : r.version,
                                                model: null === r || void 0 === r ? void 0 : r.model
                                            }, e.locationData),
                                            locationType: e.locationType,
                                            disclaimers: 1 === e.leaveConfig.openDisclaimers ? e.leaveConfig.disclaimers : null,
                                            destination: e.showAddress && e.model.address.length > 0 ? "".concat(e.model.address, "/").concat(e.model.detailAddress) : "",
                                            urgencyMobile: e.model.outStatus ? e.model.urgencyMobile : ""
                                        }), e.isRequestOk = !0, t.next = 17, Object(ce["o"])(n, {
                                            validator: function (e) {
                                                return e.code && (0 === +e.code || 430000001 === +e.code)
                                            }
                                        });
                                    case 17:
                                        i = t.sent, o = i.originData, e.isRequestOk = !1, Object(y["b"])(), e.submitAfter(o);
                                    case 22:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, submitAfter: function (e) {
                        var t = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function a() {
                            var r;
                            return regeneratorRuntime.wrap((function (a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        if ("0" !== e.code) {
                                            a.next = 6;
                                            break
                                        }
                                        return Object(C["c"])("请假申请成功"), r = e.datas || e, a.next = 5, t.$nextTick();
                                    case 5:
                                        t.$router.replace("/detail/".concat(r, "/").concat(t.needApproval));
                                    case 6:
                                        "430000001" === e.code && e.message && (t.timeLimitResInfo = JSON.parse(e.message), t.showTimeModal = !0);
                                    case 7:
                                    case"end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    }, beforeSubmitCheck: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(ce["e"])({});
                                    case 2:
                                        if (a = t.sent, r = a.data, !r.moduleStatus) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.next = 7, e.$refs.cheatObserver.start(r.interceptSwitch);
                                    case 7:
                                        if (n = t.sent, e.cheatType = n, null === n || !r.interceptSwitch) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.next = 12, Object(ce["a"])({
                                            cheatType: n,
                                            leaveOperateType: 0,
                                            leaveId: ""
                                        });
                                    case 12:
                                        return t.abrupt("return", !1);
                                    case 15:
                                        return t.abrupt("return", !0);
                                    case 16:
                                        return t.abrupt("return", !0);
                                    case 17:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, submit: function () {
                        var e = this;
                        return Object(u["a"])(regeneratorRuntime.mark((function t() {
                            var a, r, n;
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$refs.catCellUpload.$refs.catUpload.getComplete();
                                    case 2:
                                        if (a = t.sent, a) {
                                            t.next = 6;
                                            break
                                        }
                                        return Object(C["b"])("请等待附件上传完毕再提交请假"), t.abrupt("return");
                                    case 6:
                                        if (!e.isRequestOk) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 8:
                                        if (!(String(e.model.leaveType).length < 1)) {
                                            t.next = 11;
                                            break
                                        }
                                        return Object(C["b"])("请选择请假类型"), t.abrupt("return");
                                    case 11:
                                        return t.next = 13, ta(e.renderTime, e.leaveConfig.limitDays, e.leaveTimeLimitInfo);
                                    case 13:
                                        if (r = t.sent, r) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 16:
                                        return t.next = 18, sa(e.model, e.needApproval, e.approvers, e.showAddress);
                                    case 18:
                                        if (n = t.sent, n) {
                                            t.next = 21;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 21:
                                        e.notOutReport && !e.model.outStatus ? m["a"].confirm({
                                            message: '<p style="text-align: center;">您所提交的请假申请，根据学校的要求，在假期结束前需要进行<span style="color: #ED3F14;font-weight: 700;">手动销假</span>!</p>',
                                            cancelButtonText: "取消",
                                            confirmButtonText: "确定",
                                            closeOnClickOverlay: !1
                                        }).then((function () {
                                            e.doSubmitFn()
                                        })) : e.doSubmitFn();
                                    case 22:
                                    case"end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, doSubmitFn: function () {
                        var e = this;
                        m["a"].confirm({
                            title: "确认提交请假？",
                            message: "已确认内容无误并提交？",
                            confirmButtonText: "提交",
                            cancelButtonText: "再检查一下"
                        }).then((function () {
                            e.doSubmit()
                        })).catch((function () {
                        }))
                    }, repickTimeRange: function () {
                        this.showTimeModal = !1, window.scrollTo(0, 0)
                    }
                })
            }, fa = pa, ha = (a("e008"), Object(N["a"])(fa, Bt, Ft, !1, null, null, null)), ma = ha.exports, va = {
                mode: "hash",
                base: "/wec-counselor-leave-apps/leave/",
                routes: [{
                    path: "/", meta: {title: "请假", useSdk: !0, keepAlive: !0}, name: "home", component: function () {
                        return a.e("page-home").then(a.bind(null, "a2f3"))
                    }
                }, {
                    path: "/page-empty", meta: {title: "出错啦"}, name: "empty", component: function () {
                        return a.e("chunk-707d1e16").then(a.bind(null, "9af1"))
                    }
                }, {
                    path: "/create",
                    meta: {title: "我要请假", useSdk: !0, keepAlive: !0},
                    name: "create",
                    component: ma
                }, {
                    path: "/choosePeople/:id",
                    meta: {title: "选择抄送人", useSdk: !0},
                    component: o["a"]
                }, {path: "/chooseSelected", meta: {title: "抄送人", useSdk: !0}, component: s["a"]}, {
                    path: "/detail/:id",
                    redirect: "/detail/:id/1"
                }, {
                    path: "/detail/:id/:needApproval",
                    meta: {title: "请假详情", useSdk: !0},
                    component: be
                }, {
                    path: "/page-early-termination",
                    meta: {title: "提前结束申请", useSdk: !0},
                    name: "PageEarlyTermination",
                    component: Ae
                }, {
                    path: "/complete/:id/:needApproval",
                    name: "pageComplete",
                    meta: {title: "销假", useSdk: !0},
                    component: We
                }, {
                    path: "/scope/:id/:needApproval",
                    meta: {title: "销假范围", useSdk: !0},
                    component: Je
                }, {
                    name: "applyExtend",
                    path: "/applyExtend",
                    meta: {title: "申请续假", useSdk: !0, keepAlive: !0},
                    component: Tt
                }, {
                    path: "/map/:lon/:lat/:address",
                    meta: {title: "发起位置", useSdk: !0},
                    component: St["a"]
                }, {
                    path: "/viewCurrentApprovers",
                    meta: {title: "审批人", useSdk: !0},
                    component: Et
                }, {path: "/record-detail/:id/:needApproval", meta: {title: "完整请假详情", useSdk: !0}, component: qt}]
            }, ba = a("b9e7");
        n["a"].use(i["a"]);
        var ga = new i["a"](va);
        Object(ba["a"])(ga, ce["s"]);
        t["a"] = ga
    }, e008: function (e, t, a) {
        "use strict";
        var r = a("66a4"), n = a.n(r);
        n.a
    }, fa93: function (e, t, a) {
        e.exports = a.p + "img/error.eb8f533d.png"
    }
});
//# sourceMappingURL=home.1d995f43.js.map