(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-707d1e16"], {
    8281: function (e, r, t) {
    }, "9af1": function (e, r, t) {
        "use strict";
        t.r(r), t.d(r, "default", (function () {
            return w
        }));
        var n = function () {
            var e = this, r = e.$createElement, t = e._self._c || r;
            return t("cat-error-placeholder", {
                staticClass: "page-error h-screen ios-touch-scroll",
                attrs: {"error-text": e.errorText}
            })
        }, o = [], s = (t("8281"), t("0981"), t("99af"), t("c064")), i = {
            name: "CatErrorPlaceholder",
            components: {CatEmpty: s["a"]},
            inheritAttrs: !1,
            props: {errorType: {type: String, default: ""}, errorText: {type: String, default: ""}},
            computed: {
                switchText: function () {
                    if (this.errorText) return this.errorText;
                    switch (this.errorType) {
                        case"sdk-error":
                            return "页面初始化失败，请重新进入页面重试";
                        case"bus-error":
                            return "已被发布者删除、撤回或提前结束";
                        case"page-error":
                            return "很遗憾~页面找不到啦"
                    }
                }
            }
        };

        function a(e, r, t, n, o, s, i, a, c, d) {
            "boolean" !== typeof i && (c = a, a = i, i = !1);
            var u, l = "function" === typeof t ? t.options : t;
            if (e && e.render && (l.render = e.render, l.staticRenderFns = e.staticRenderFns, l._compiled = !0, o && (l.functional = !0)), n && (l._scopeId = n), s ? (u = function (e) {
                e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, c(e)), e && e._registeredComponents && e._registeredComponents.add(s)
            }, l._ssrRegister = u) : r && (u = i ? function (e) {
                r.call(this, d(e, this.$root.$options.shadowRoot))
            } : function (e) {
                r.call(this, a(e))
            }), u) if (l.functional) {
                var p = l.render;
                l.render = function (e, r) {
                    return u.call(r), p(e, r)
                }
            } else {
                var f = l.beforeCreate;
                l.beforeCreate = f ? [].concat(f, u) : [u]
            }
            return t
        }

        var c = i, d = function () {
            var e = this, r = e.$createElement, t = e._self._c || r;
            return e.errorType ? t("CatEmpty", {
                staticClass: "w-screen h-screen",
                attrs: {"empty-text": e.switchText}
            }) : e._e()
        }, u = [];
        d._withStripped = !0;
        var l = void 0, p = void 0, f = void 0, h = !1,
            _ = a({render: d, staticRenderFns: u}, l, c, p, h, f, !1, void 0, void 0, void 0);
        _.install = function (e) {
            e.component(_.name, _)
        };
        var v = _, m = {
            components: {CatErrorPlaceholder: v}, computed: {
                errorText: function () {
                    return this.$route.query.errorText || "加载失败，请退出后重新进入"
                }
            }
        }, T = m, C = t("2877"), x = Object(C["a"])(T, n, o, !1, null, null, null), w = x.exports
    }
}]);
//# sourceMappingURL=chunk-707d1e16.810efc2a.js.map