(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-common"], {
    "0292": function (t, e, a) {
        t.exports = {
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
    }, "02d9": function (t, e, a) {
        t.exports = {
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
    }, "0579": function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return g
        }));
        var s = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {staticClass: "cat-extend-detail hairline-b hairline-t px-20 bg-white py-10"}, [t.isShared && t.hasPass ? a("CatImage", {
                    staticClass: "audit-pass",
                    attrs: {name: "common-pass"}
                }) : t._e(), t.isShared && t.hasReject ? a("CatImage", {
                    staticClass: "audit-pass",
                    attrs: {name: "common-reject"}
                }) : t._e(), a("div", [t.showTitle ? a("div", {staticClass: "font-dark font-14 mb-5 flex jc-between ai-center"}, [t._v(" " + t._s(t.my ? "我的" : t.info.userName) + " 续假申请 "), "1" === t.info.status ? a("div", {staticClass: "totalDays font-14 bold px-10 py-5 font-primary radius-small"}, [t._v(" 待审批 ")]) : t._e()]) : t._e(), t.isDetail ? a("div", {staticClass: "font-dark font-14 mb-10"}, [a("div", [t._v("续假详情")])]) : t._e(), a("div", {staticClass: "mb-5 font-12  flex-col relative"}, [a("div", {staticClass: "totalDays pin-t pin-r absolute font-14 bold px-10 py-5 font-primary radius-small"}, [t._v(" " + t._s(t.info.totalDay || t.info.totalDays) + " ")]), a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 开始时间： ")]), a("div", {staticClass: "font-normal flex-1 ml-5 bold"}, [t._v(" " + t._s(t.info.startTime || "") + " ")])]), a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 结束时间： ")]), a("div", {staticClass: "font-normal flex-1 ml-5 bold"}, [t._v(" " + t._s(t.info.endTime || "") + " ")])]), a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 审批流程： ")]), a("div", {staticClass: "font-normal flex-1 ml-5"}, [t._v(" 共" + t._s(t.approveNodes && t.approveNodes.length) + "步 "), t.isShared ? t._e() : a("span", {
                    staticClass: "font-primary",
                    on: {
                        click: function (e) {
                            t.flowVisible = !0
                        }
                    }
                }, [t._v("查看>")])])]), t.info.urgencyMobile ? a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 紧急联系人： ")]), a("div", {staticClass: "font-normal flex-1 ml-5"}, [t._v(" " + t._s(t.info.urgencyMobile || "") + " ")])]) : t._e(), t.isShared && 1 === t.needApproval ? a("div", {staticClass: "flex mb-5 font-12 ai-start"}, [a("div", {
                    staticClass: "font-light no-shrink row-label",
                    staticStyle: {width: "16.00000vw"}
                }, [t._v(" 审批人： ")]), a("div", {staticClass: "font-normal flex-1 ml-5 break-all"}, [t._v(" " + t._s(t.approverName || "") + " ")])]) : t._e(), a("div", {
                    staticClass: "flex font-12 ai-start",
                    class: [t.info.applyAttach && t.info.applyAttach.length > 0 ? "mb-5" : ""]
                }, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 续假原因： ")]), a("div", {staticClass: "font-normal flex-1 ml-5 break-all"}, [t._v(" " + t._s(t.info.extendReason || "") + " ")])]), t.info.applyAttach && t.info.applyAttach.length > 0 ? a("div", {staticClass: "flex font-12 ai-start"}, [a("div", {
                    staticClass: "font-light no-shrink row-label",
                    staticStyle: {width: "16.00000vw"}
                }, [t._v(" 附件: ")]), a("div", {staticClass: "font-normal flex flex-1 ml-5  flex-wrap"}, t._l(t.info.applyAttach, (function (e, s) {
                    return a("div", {key: s, staticClass: "mr-5"}, [a("CatImage", {
                        attrs: {
                            width: "13.33333vw",
                            height: "13.33333vw",
                            src: e.url
                        }, nativeOn: {
                            click: function (e) {
                                return t.preview(t.info.applyAttach, s)
                            }
                        }
                    })], 1)
                })), 0)]) : t._e()]), a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 发起位置： ")]), a("div", {staticClass: "font-normal flex-1 ml-5"}, [a("span", {
                    staticClass: "location",
                    style: (t.calcAddressConfig || {}).style,
                    attrs: {href: "javascript:void(0)"},
                    on: {click: t.viewLocation}
                }, [t._v(t._s((t.calcAddressConfig || {}).ad))])])]), 1 === t.needApproval ? a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {
                    staticClass: "font-light no-shrink row-label",
                    staticStyle: {width: "16.00000vw"}
                }, [t._v(" 抄送人： ")]), a("div", {staticClass: "font-normal flex-1 ml-5"}, [a("span", {
                    staticClass: "location",
                    domProps: {innerHTML: t._s(t.ccInfo)},
                    on: {click: t.viewCCDetail}
                })])]) : t._e(), t.info.destination && t.info.destination.length > 0 ? a("div", {staticClass: "flex mb-5 font-12 ai-start"}, [a("div", {
                    staticClass: "font-light no-shrink row-label",
                    staticStyle: {width: "16.00000vw"}
                }, [t._v(" 目的地： ")]), a("div", {staticClass: "font-normal flex-1 ml-5 break-all"}, [t._v(" " + t._s(t.info.destination) + " ")])]) : t._e(), a("div", {staticClass: "flex mb-5 font-12 ai-start"}, [a("div", {
                    staticClass: "font-light no-shrink row-label",
                    staticStyle: {width: "16.00000vw"}
                }, [t._v(" 宿舍信息： ")]), a("div", {staticClass: "font-normal flex-1 ml-5 break-all"}, [t._v(" " + t._s(t.info.dormitoryInfo || "-") + " ")])]), t.info.disclaimers && t.info.disclaimers.length > 0 ? a("div", {staticClass: "flex mb-5 font-12 ai-center font-warning text-justify break-all"}, [t._v(" " + t._s(t.info.disclaimers) + " ")]) : t._e()]), a("CatFlowChartModal", {
                    attrs: {
                        title: "审批流程",
                        options: t.approveOptions
                    }, model: {
                        value: t.flowVisible, callback: function (e) {
                            t.flowVisible = e
                        }, expression: "flowVisible"
                    }
                })], 1)
            }, n = [], o = (a("99af"), a("4160"), a("a15b"), a("d81d"), a("a9e3"), a("159b"), a("2909")), i = a("5530"),
            r = (a("bd2e"), a("c21b")), l = (a("f77b"), a("be6d")), c = a("60a3"), f = a("2f62"), u = a("6a6f"),
            d = Object(f["a"])("chooseSelected"), p = d.mapMutations, h = {
                components: {CatFlowChartModal: l["a"], CatImage: r["a"]},
                props: {
                    isClickLocation: Boolean,
                    showTitle: Boolean,
                    isDetail: {type: Boolean, default: !1},
                    info: {
                        type: Object, default: function () {
                            return {}
                        }
                    },
                    isShared: {type: Boolean, default: !1},
                    my: Boolean,
                    approveNodes: Array,
                    needApproval: {type: [Number, String], default: 1}
                },
                data: function () {
                    return {flowVisible: !1}
                },
                computed: {
                    approveOptions: function () {
                        var t = [], e = this.approveNodes || [];
                        return e.forEach((function (e) {
                            t.push({
                                list: e.approveNode.map((function (t) {
                                    return Object(i["a"])(Object(i["a"])({}, t), {}, {name: t.nodeName})
                                }))
                            })
                        })), t
                    }, approverName: function () {
                        var t, e = [], a = (null === (t = this.info) || void 0 === t ? void 0 : t.approvers) || [];
                        return a.forEach((function (t) {
                            t.level && t.handled && t.approver && e.push(t.approver.userName)
                        })), e.join(",")
                    }, calcAddressConfig: function () {
                        var t = this.info, e = t.locationType, a = t.address;
                        switch (e) {
                            case 0:
                                return {ad: "暂无地理位置" === a ? "查看位置" : a, style: {color: "#3399ff", cursor: "pointer"}};
                            case 1:
                                return {ad: "未授权定位", style: {cursor: "default"}};
                            case 2:
                                return {ad: "定位获取失败", style: {cursor: "default"}};
                            case 3:
                                return {ad: "V1.1.1版本前请假申请无需获取定位", style: {cursor: "default"}};
                            case 4:
                                return {ad: "PC端发起", style: {cursor: "default"}}
                        }
                    }, totalCCNum: function () {
                        return this.info.ccInfo && this.info.ccInfo.totalSize || 0
                    }, allCheckList: function () {
                        return this.info.ccInfo ? [].concat(Object(o["a"])(this.info.ccInfo.teachers), Object(o["a"])(this.info.ccInfo.students)) : []
                    }, ccInfo: function () {
                        return this.totalCCNum ? "已选择".concat(this.totalCCNum, '人<span style="color: #2D8CF0">查看 ></span>') : "无"
                    }, hasPass: function () {
                        return this.info.status === u["a"].PROCESSING || this.info.status === u["a"].COMPLETE
                    }, hasReject: function () {
                        return this.info.status === u["a"].REJECT
                    }
                },
                methods: Object(i["a"])(Object(i["a"])({}, p(["setDataList"])), {}, {
                    viewLocation: function () {
                        var t = this.info;
                        if (t.locationType) return !1;
                        this.$router.push("/map/".concat(t.longitude, "/").concat(t.latitude, "/").concat(encodeURI(t.address)))
                    }, preview: function (t, e) {
                        Object(c["l"])({imageLists: t, currentIndex: e})
                    }, viewCCDetail: function () {
                        0 !== this.totalCCNum && (this.setDataList(this.allCheckList), this.$router.push({path: "/chooseSelected"}))
                    }
                })
            }, v = h, m = (a("5d16"), a("2877")), b = Object(m["a"])(v, s, n, !1, null, null, null), g = b.exports
    }, "08ff": function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return f
        }));
        var s = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("CatPreviewLocation", {
                staticClass: "page-view-map h-screen w-screen ios-touch-scroll",
                attrs: {latitude: t.latitude, longitude: t.longitude}
            })
        }, n = [], o = (a("d11f"), a("3772")), i = {
            components: {CatPreviewLocation: o["a"]}, computed: {
                longitude: function () {
                    return this.$route.params.lon
                }, latitude: function () {
                    return this.$route.params.lat
                }
            }
        }, r = i, l = a("2877"), c = Object(l["a"])(r, s, n, !1, null, null, null), f = c.exports
    }, "09d0": function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return j
        }));
        var s = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {staticClass: "cat-complete-info"}, [t._m(0), t.info.reportStatus ? a("div", {staticClass: "flex font-12 mb-5"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 销假状态: ")]), a("div", {staticClass: "flex flex-1 ml-5 font-primary"}, [a("span", {domProps: {innerHTML: t._s(t.displayStatus)}}), t.info.reportLogs.length > 0 ? a("span", {
                    staticClass: "ml-10",
                    on: {click: t.showReportModal}
                }, [t._v("查看审批流程>")]) : t._e()])]) : t._e(), t.info.reportComment ? a("div", {staticClass: "flex font-12 mb-5"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 销假说明 ")]), a("div", {staticClass: "font-normal flex flex-1 ml-5"}, [t._v(" " + t._s(t.info.reportComment) + " ")])]) : t._e(), t.info.reportAttach && t.info.reportAttach.length > 0 ? a("div", {staticClass: "flex font-14 mb-5"}, [a("div", {
                    staticClass: "font-light no-shrink row-label",
                    staticStyle: {width: "16.00000vw"}
                }, [t._v(" 附件: ")]), a("div", {staticClass: "flex-1 flex flex-wrap"}, t._l(t.info.reportAttach, (function (e, s) {
                    return a("div", {
                        key: s,
                        staticClass: "mr-5"
                    }, ["1" === e.type ? a("CatImage", {
                        attrs: {width: "15.46667vw", height: "15.46667vw", src: e.url},
                        nativeOn: {
                            click: function (e) {
                                return t.preview(t.info.reportAttach, s)
                            }
                        }
                    }) : t._e()], 1)
                })), 0)]) : t._e(), t.info.reportLocation ? a("div", {staticClass: "flex font-12 mb-5 mt-10"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 所在位置: ")]), a("div", {
                    staticClass: "flex flex-1 ml-5",
                    class: t.info.reportLatitude && t.info.reportLatitude.length > 0 ? "font-primary" : "font-normal",
                    on: {click: t.viewLocation}
                }, [t._v(" " + t._s(t.info.reportLocation) + " ")])]) : t._e(), a("cat-complete-flow-modal", {ref: "catCompleteFlowModal"})], 1)
            }, n = [function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {staticClass: "font-dark font-14 mb-10"}, [a("span", [t._v("销假信息")])])
            }], o = (a("99af"), a("bd2e"), a("c21b")), i = a("358d"), r = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("v-dialog", {
                    staticClass: "cat-complete-flow-modal",
                    attrs: {"confirm-button-text": "知道了", title: "销假审批流程"},
                    model: {
                        value: t.showStatus, callback: function (e) {
                            t.showStatus = e
                        }, expression: "showStatus"
                    }
                }, [a("div", {staticClass: "content font-14 text-center overflow-y-auto"}, t._l(t.logs, (function (e, s) {
                    return a("div", {
                        key: s || e.wid,
                        staticClass: "item flex ai-start w-full flex-1 px-15 relative"
                    }, [a("div", {
                        staticClass: "round mr-5 no-shrink",
                        style: t.getRoundClassname(e)
                    }), a("div", {staticClass: "flex-col flex-1"}, [a("div", {staticClass: "flex"}, [a("div", {
                        staticClass: "user font-12 font-normal flex-1",
                        domProps: {innerHTML: t._s(t.getUserHtml(e))}
                    }), a("div", {staticClass: "time font-light font-12 mr-auto no-shrink"}, [t._v(" " + t._s(e.createTime) + " ")])]), t.showOpinion(e) ? a("div", {staticClass: "option-tip p-5 radius-small bg-grey border-normal text-left my-10"}, [a("cat-complete-approve-opinion", {attrs: {value: "审批意见：" + (e.comments || "无")}})], 1) : t._e()]), s < t.logs.length - 1 ? a("div", {staticClass: "line absolute"}) : t._e()])
                })), 0)])
            }, l = [], c = (a("e17f"), a("2241")), f = a("a59e"), u = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    ref: "wrapper",
                    staticClass: "cat-approve-opinion font-light font-12 relative",
                    class: t.status,
                    staticStyle: {"-webkit-box-orient": "vertical"}
                }, [t._v(" " + t._s(t.value) + " "), t.showOpen ? a("span", {
                    staticClass: "font-primary option absolute bg-grey px-5",
                    on: {click: t.open}
                }, [t._v(" 展开 "), a("Icon", {attrs: {name: "arrow-down"}})], 1) : t._e(), t.showClose ? a("span", {
                    staticClass: "font-primary option absolute bg-grey px-5",
                    on: {click: t.close}
                }, [t._v(" 收起 "), a("Icon", {attrs: {name: "arrow-up"}})], 1) : t._e()])
            }, d = [], p = (a("c3a6"), a("ad06")), h = a("fa7d"), v = {
                components: {Icon: p["a"]}, props: {value: {type: String, default: ""}}, data: function () {
                    return {status: "close", isOverflown: !1}
                }, computed: {
                    clz: function () {
                        return "OPEN" === this.status ? "open" : "CLOSE" === this.status ? "close" : ""
                    }, showOpen: function () {
                        return "close" === this.status && this.isOverflown
                    }, showClose: function () {
                        return "open" === this.status && this.isOverflown
                    }
                }, mounted: function () {
                    this.isOverflown = Object(h["d"])(this.$refs.wrapper)
                }, methods: {
                    open: function () {
                        this.status = "open"
                    }, close: function () {
                        this.status = "close"
                    }
                }
            }, m = v, b = (a("76ba"), a("2877")), g = Object(b["a"])(m, u, d, !1, null, "64e1a5f8", null), C = g.exports,
            w = a("468f"), x = {
                name: "CatCompleteFlowModal",
                components: {"v-dialog": c["a"].Component, CatCompleteApproveOpinion: C},
                inheritAttrs: !1,
                data: function () {
                    return {showStatus: !1, logs: []}
                },
                methods: {
                    show: function (t) {
                        var e = t.logs;
                        this.showStatus = !0, this.logs = e
                    }, getUserHtml: function (t) {
                        var e = t.userName, a = t.status;
                        if (a) {
                            var s = w["c"][a], n = s.fontClassname, o = s.label,
                                i = '<span class="'.concat(n, '">').concat(o, "</span>");
                            return "".concat(e, " -&nbsp;").concat(i)
                        }
                        return "".concat(e, " - 发起申请")
                    }, showOpinion: function (t) {
                        var e = t.status;
                        return w["b"] === e || w["d"] === e
                    }, getRoundClassname: function (t) {
                        var e = t.status;
                        if (e) {
                            var a = w["c"][e].borderColor;
                            return "border-color: ".concat(a)
                        }
                        return "border-color: ".concat(Object(f["a"])("primary"))
                    }
                }
            }, y = x, _ = (a("6cf7"), Object(b["a"])(y, r, l, !1, null, null, null)), O = _.exports, E = {
                components: {CatImage: o["a"], CatCompleteFlowModal: O},
                props: {
                    info: {
                        type: Object, default: function () {
                            return {}
                        }
                    }, reportApply: {type: Boolean, default: !1}
                },
                computed: {
                    displayStatus: function () {
                        var t = w["c"][this.info.reportStatus], e = t.label, a = t.fontClassname;
                        return '<span class="'.concat(a, '">').concat(e, "</span>")
                    }
                },
                methods: {
                    preview: function (t, e) {
                        Object(i["f"])({imageLists: t, currentIndex: e})
                    }, viewLocation: function () {
                        var t, e, a;
                        this.info.reportLatitude && this.$router.push("/map/".concat(null === (t = this.info) || void 0 === t ? void 0 : t.reportLongitude, "/").concat(null === (e = this.info) || void 0 === e ? void 0 : e.reportLatitude, "/").concat(encodeURI(null === (a = this.info) || void 0 === a ? void 0 : a.reportLocation)))
                    }, showReportModal: function () {
                        this.$refs.catCompleteFlowModal.show({logs: this.info.reportLogs})
                    }
                }
            }, k = E, S = Object(b["a"])(k, s, n, !1, null, null, null), j = S.exports
    }, "0efe": function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return w
        }));
        var s = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {staticClass: "cat-leave-detail hairline-b hairline-t px-20 bg-white py-10"}, [t.isShared ? a("CatImage", {
                    staticClass: "audit-pass",
                    attrs: {name: "common-pass"}
                }) : t._e(), t.showTitle ? a("div", {staticClass: "font-dark font-14 mb-10"}, [t._v(" " + t._s(t.my ? "我的" : t.info.userName) + " 请假申请 ")]) : t._e(), t.isDetail ? a("div", {staticClass: "font-dark font-14 mb-10"}, [t._v(" 请假详情 ")]) : t._e(), a("div", {staticClass: "flex mb-5 font-12 ai-center relative"}, [a("div", {staticClass: "totalDays pin-t pin-r absolute font-14 bold px-10 py-5 font-primary radius-small"}, [t._v(" " + t._s(t.info.totalDay || t.info.totalDays) + " ")]), a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 开始时间： ")]), a("div", {staticClass: "font-normal flex-1 ml-5 bold"}, [t._v(" " + t._s(t.info.startTime || "") + " ")])]), a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 结束时间： ")]), a("div", {staticClass: "font-normal flex-1 ml-5 bold"}, [t._v(" " + t._s(t.info.endTime || "") + " ")])]), t.approveNodes && Array.isArray(t.approveNodes) && t.approveNodes.length > 0 ? a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 审批流程： ")]), a("div", {staticClass: "font-normal flex-1 ml-5"}, [t._v(" 共" + t._s(t.approveNodes && t.approveNodes.length) + "步 "), t.isShared ? t._e() : a("span", {
                    staticClass: "font-primary",
                    on: {
                        click: function (e) {
                            t.flowVisible = !0
                        }
                    }
                }, [t._v("查看>")])])]) : t._e(), t.info.urgencyMobile ? a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 紧急联系人： ")]), a("div", {staticClass: "font-normal flex-1 ml-5"}, [t._v(" " + t._s(t.info.urgencyMobile || "") + " ")])]) : t._e(), t.isShared && t.info.approvers && Array.isArray(t.info.approvers) && t.info.approvers.length > 0 && 1 === t.needApproval ? a("div", {staticClass: "flex mb-5 font-12 ai-start"}, [a("div", {
                    staticClass: "font-light no-shrink row-label",
                    staticStyle: {width: "16.00000vw"}
                }, [t._v(" 审批人： ")]), a("div", {staticClass: "font-normal flex-1 ml-5 break-all"}, [t._v(" " + t._s(t.approverName || "") + " ")])]) : t._e(), a("div", {staticClass: "flex mb-5 font-12 ai-start mb-5"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 请假原因： ")]), a("div", {staticClass: "font-normal flex-1 ml-5 break-all"}, [t._v(" " + t._s(t.info.leaveReason || "") + " ")])]), t.info.applyAttach && t.info.applyAttach.length > 0 ? a("div", {staticClass: "flex mb-5 font-12 ai-start"}, [a("div", {
                    staticClass: "font-light no-shrink row-label",
                    staticStyle: {width: "16.00000vw"}
                }, [t._v(" 附件: ")]), a("div", {staticClass: "font-normal flex flex-1 ml-5 flex-wrap"}, t._l(t.info.applyAttach, (function (e, s) {
                    return a("div", {key: s, staticClass: "mr-5"}, [a("CatImage", {
                        attrs: {
                            width: "13.33333vw",
                            height: "13.33333vw",
                            src: e.url
                        }, nativeOn: {
                            click: function (e) {
                                return t.preview(t.info.applyAttach, s)
                            }
                        }
                    })], 1)
                })), 0)]) : t._e(), a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 发起位置： ")]), a("div", {staticClass: "font-normal flex-1 ml-5"}, [a("span", {
                    staticClass: "location",
                    style: (t.calcAddressConfig || {}).style,
                    attrs: {href: "javascript:void(0)"},
                    on: {click: t.viewLocation}
                }, [t._v(t._s((t.calcAddressConfig || {}).ad))])])]), 1 === t.needApproval ? a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {
                    staticClass: "font-light no-shrink row-label",
                    staticStyle: {width: "16.00000vw"}
                }, [t._v(" 抄送人： ")]), a("div", {staticClass: "font-normal flex-1 ml-5"}, [a("span", {
                    staticClass: "location",
                    domProps: {innerHTML: t._s(t.ccInfo)},
                    on: {click: t.viewCCDetail}
                })])]) : t._e(), t.info.destination && t.info.destination.length > 0 ? a("div", {staticClass: "flex mb-5 font-12 ai-start"}, [a("div", {
                    staticClass: "font-light no-shrink row-label",
                    staticStyle: {width: "16.00000vw"}
                }, [t._v(" 目的地： ")]), a("div", {staticClass: "font-normal flex-1 ml-5 break-all"}, [t._v(" " + t._s(t.info.destination) + " ")])]) : t._e(), a("div", {staticClass: "flex mb-5 font-12 ai-start"}, [a("div", {
                    staticClass: "font-light no-shrink row-label",
                    staticStyle: {width: "16.00000vw"}
                }, [t._v(" 宿舍信息： ")]), a("div", {staticClass: "font-normal flex-1 ml-5 break-all"}, [t._v(" " + t._s(t.info.dormitoryInfo || "-") + " ")])]), t.info.disclaimers && t.info.disclaimers.length > 0 ? a("div", {staticClass: "flex mb-5 font-12 ai-center font-warning text-justify break-all"}, [t._v(" " + t._s(t.info.disclaimers) + " ")]) : t._e(), a("CatFlowChartModal", {
                    attrs: {
                        title: "审批流程",
                        options: t.approveOptions
                    }, model: {
                        value: t.flowVisible, callback: function (e) {
                            t.flowVisible = e
                        }, expression: "flowVisible"
                    }
                })], 1)
            }, n = [], o = (a("99af"), a("4160"), a("a15b"), a("d81d"), a("a9e3"), a("159b"), a("2909")), i = a("5530"),
            r = (a("bd2e"), a("c21b")), l = (a("f77b"), a("be6d")), c = a("60a3"), f = a("2f62"), u = a("a46c"),
            d = a("6a6f"), p = a("4cfd"), h = Object(f["a"])("chooseSelected"), v = h.mapMutations, m = {
                components: {CatFlowChartModal: l["a"], CatImage: r["a"]},
                filters: {
                    reqtype: function (t) {
                        return u["a"][t] || "其他"
                    }, outStatusName: function (t) {
                        return t ? "离校" : "否"
                    }
                },
                props: {
                    showTitle: Boolean,
                    isDetail: {type: Boolean, default: !1},
                    isShared: {type: Boolean, default: !1},
                    info: {
                        type: Object, default: function () {
                            return {}
                        }
                    },
                    my: Boolean,
                    approveNodes: {
                        type: Array, default: function () {
                            return []
                        }
                    },
                    needApproval: {type: [Number, String], default: 1}
                },
                data: function () {
                    return {flowVisible: !1}
                },
                computed: {
                    lastOutWarning: function () {
                        return !this.my && this.info.lastOut && this.info.gender === p["a"].FEMALE
                    }, outWarning: function () {
                        return !this.my && this.info.outStatus && this.info.gender === p["a"].FEMALE
                    }, isPending: function () {
                        return this.info.ownStatus && this.info.status === d["a"].PENDING
                    }, visibleLastOut: function () {
                        return !0 === this.info.lastOut || !1 === this.info.lastOut
                    }, approveOptions: function () {
                        var t = [], e = this.approveNodes || [];
                        return e.forEach((function (e) {
                            t.push({
                                list: e.approveNode.map((function (t) {
                                    return Object(i["a"])(Object(i["a"])({}, t), {}, {name: t.nodeName})
                                }))
                            })
                        })), t
                    }, approverName: function () {
                        var t, e = [], a = (null === (t = this.info) || void 0 === t ? void 0 : t.approvers) || [];
                        return a.forEach((function (t) {
                            t.level && t.handled && t.approver && e.push(t.approver.userName)
                        })), e.join(",")
                    }, calcAddressConfig: function () {
                        var t = (this.info || {}).applyLocation, e = (t || {}).locationType, a = (t || {}).address;
                        switch (e) {
                            case 0:
                                return {ad: "暂无地理位置" === a ? "查看位置" : a, style: {color: "#3399ff", cursor: "pointer"}};
                            case 1:
                                return {ad: "未授权定位", style: {cursor: "default"}};
                            case 2:
                                return {ad: "定位获取失败", style: {cursor: "default"}};
                            case 3:
                                return {ad: "V1.1.1版本前请假申请无需获取定位", style: {cursor: "default"}};
                            case 4:
                                return {ad: "PC端发起", style: {cursor: "default"}}
                        }
                    }, totalCCNum: function () {
                        return this.info.ccInfo && this.info.ccInfo.totalSize || 0
                    }, allCheckList: function () {
                        return this.info.ccInfo ? [].concat(Object(o["a"])(this.info.ccInfo.teachers), Object(o["a"])(this.info.ccInfo.students)) : []
                    }, ccInfo: function () {
                        return this.totalCCNum ? "已选择".concat(this.totalCCNum, '人<span style="color: #2D8CF0">查看 ></span>') : "无"
                    }
                },
                methods: Object(i["a"])(Object(i["a"])({}, v(["setDataList"])), {}, {
                    viewLocation: function () {
                        var t = (this.info || {}).applyLocation, e = (t || {}).locationType, a = (t || {}).address,
                            s = (t || {}).longitude, n = (t || {}).latitude;
                        if (e) return !1;
                        this.$router.push("/map/".concat(s, "/").concat(n, "/").concat(encodeURI(a)))
                    }, preview: function (t, e) {
                        Object(c["l"])({imageLists: t, currentIndex: e})
                    }, viewCCDetail: function () {
                        0 !== this.totalCCNum && (this.setDataList(this.allCheckList), this.$router.push({path: "/chooseSelected"}))
                    }
                })
            }, b = m, g = (a("4e8f"), a("2877")), C = Object(g["a"])(b, s, n, !1, null, null, null), w = C.exports
    }, 1024: function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return u
        }));
        var s = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "cat-status-flag"}, [a("div", {
                staticClass: "flag-dom relative",
                class: t.bg
            }, [a("span", {
                staticClass: "personal-info absolute",
                on: {click: t.showInfoModal}
            }, [t._v("个人信息 >")]), a("div", {staticClass: "flag-text"}, [a("div", {staticClass: "status-svg-text"}, [a("CatIcon", {
                attrs: {
                    size: "5.33333vw",
                    color: "white",
                    name: t.isPass ? "sure2" : "close2"
                }
            }), a("span", [t._v(t._s(t.svgText))])], 1), a("div", {staticClass: "status-text-bold"}, [t._v(" " + t._s(t.boldText) + " ")])]), a("div", {staticClass: "dynamic-strip no-shrink"}, [a("div", {staticClass: "now-time"}, [t._v(" " + t._s(t.text) + " ")])])])])
        }, n = [], o = (a("622e"), a("dd68")), i = {
            flag5: {bg: "flag-warning", boldText: "即将休假", svgText: "审批已通过", isPass: !0},
            flag6: {bg: "flag-success", boldText: "正在休假中", svgText: "审批已通过", isPass: !0},
            flag7: {bg: "flag-error", boldText: "销假逾期", svgText: "审批已通过", isPass: !0},
            flag8: {bg: "flag-grey", boldText: "已完成", svgText: "审批已通过", isPass: !0},
            flag4: {bg: "flag-error", boldText: "已驳回", svgText: "审批已驳回", isPass: !1},
            flag10: {bg: "flag-error", boldText: "已驳回", svgText: "审批已驳回", isPass: !1},
            flag100: {bg: "flag-grey", boldText: "已过期", svgText: "审批已通过", isPass: !0}
        }, r = {
            components: {CatIcon: o["a"]},
            props: {flag: {type: String, default: ""}, text: {type: String, default: "2020-10-12 14:42"}},
            computed: {
                bg: function () {
                    return i["flag".concat(this.flag)].bg
                }, boldText: function () {
                    return i["flag".concat(this.flag)].boldText
                }, svgText: function () {
                    return i["flag".concat(this.flag)].svgText
                }, isPass: function () {
                    return i["flag".concat(this.flag)].isPass
                }
            },
            methods: {
                showInfoModal: function () {
                    this.$emit("show-info")
                }
            }
        }, l = r, c = (a("e362"), a("2877")), f = Object(c["a"])(l, s, n, !1, null, null, null), u = f.exports
    }, 2074: function (t, e, a) {
        "use strict";
        var s = a("b3ff"), n = a.n(s);
        n.a
    }, "22c8": function (t, e, a) {
        t.exports = {
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
    }, 2371: function (t, e, a) {
        "use strict";
        var s = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {attrs: {id: "app"}}, [a("keep-alive", [t.$route.meta.keepAlive ? a("router-view") : t._e()], 1), t.$route.meta.keepAlive ? t._e() : a("router-view")], 1)
        }, n = [], o = (a("2074"), a("2877")), i = {}, r = Object(o["a"])(i, s, n, !1, null, null, null);
        e["a"] = r.exports
    }, "2c26": function (t, e, a) {
        "use strict";
        var s = a("2b0e"), n = a("8c4f"), o = (a("d3b7"), function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {staticClass: "page-share flex-col flex-1 h-screen overflow-hidden"}, [t.isEmpty ? a("cat-empty", {attrs: {"empty-text": t.emptyText}}) : [a("div", {staticClass: "flex-col flex-1 ios-touch-scroll"}, [t.statusFlag && "1" !== t.statusFlag ? a("CatStatusFlag", {
                    staticClass: "no-shrink",
                    attrs: {text: t.nowTime, flag: t.statusFlag},
                    on: {"show-info": t.showInfoModal}
                }) : t._e(), a("CatStatusShow", {
                    staticClass: "no-shrink",
                    attrs: {info: t.info, "is-shared": t.isShared, status: t.approveStatus}
                }), a("CatFlowLeaveMeta", {
                    staticClass: "no-shrink",
                    attrs: {info: t.info, "not-out-report": t.notOutReport}
                }), t._l(t.successInfo, (function (e) {
                    return a("CatLeaveDetail", {
                        key: e.id,
                        staticClass: "my-10",
                        attrs: {
                            my: !0,
                            "show-title": !0,
                            info: e,
                            "flow-biz": t.flowBiz,
                            "is-shared": t.isShared,
                            "need-approval": t.needApproval,
                            "approve-nodes": t.getApproveNodes(t.approversMain)
                        }
                    })
                })), t._l(t.successLeaveExtends, (function (e, s) {
                    return a("CatExtendDetail", {
                        key: s,
                        staticClass: "mb-10",
                        attrs: {
                            my: !0,
                            "show-title": !0,
                            "is-click-location": !1,
                            info: e,
                            "flow-biz": t.flowBiz,
                            "is-shared": t.isShared,
                            "need-approval": t.needApproval,
                            "approve-nodes": t.getApproveNodes(e.approvers)
                        }
                    })
                })), t.isTerminatedEarly ? a("div", {staticClass: "py-10 font-12 bg-white px-20 my-10 hairline-t hairline-b"}, [a("div", {staticClass: "font-dark font-14 mb-10"}, [t._v(" 提前结束信息 ")]), a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 操作人： ")]), a("div", {staticClass: "font-normal flex-1"}, [t._v(" " + t._s(t.terminationInfo.terminationObjectName || "") + " ")])]), a("div", {staticClass: "flex mb-5 font-12 ai-center"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 操作时间： ")]), a("div", {staticClass: "font-normal flex-1"}, [t._v(" " + t._s(t.terminationInfo.terminationDate || "") + " ")])]), a("div", {staticClass: "flex mb-5 font-12 ai-start"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 原因： ")]), a("div", {staticClass: "font-normal flex-1"}, [t._v(" " + t._s(t.terminationInfo.terminationReason || "") + " ")])])]) : t._e(), t.isComplete ? a("CatCompleteInfo", {
                    staticClass: "bg-white px-20 py-10 mb-10 hairline-b hairline-t",
                    attrs: {info: t.info}
                }) : t._e()], 2), a("transition", {attrs: {name: "van-fade"}}, [a("CatPersonalModal", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    }],
                    staticClass: "w-screen h-screen absolute pin-l pin-t",
                    attrs: {info: t.studentInfo},
                    on: {close: t.closeModal}
                })], 1)]], 2)
            }), i = [], r = (a("99af"), a("4de4"), a("4160"), a("159b"), a("96cf"), a("1da1")), l = (a("0981"), a("c064")),
            c = a("3b03"), f = a("5a0c"), u = a.n(f), d = a("7c94"), p = a("3abe"), h = a("6a6f"), v = a("1024"),
            m = a("cc83"), b = a("d115"), g = a("0579"), C = a("0efe"), w = a("09d0"), x = a("fa7d"), y = {
                components: {
                    CatStatusFlag: v["a"],
                    CatStatusShow: m["a"],
                    CatFlowLeaveMeta: b["a"],
                    CatExtendDetail: g["a"],
                    CatLeaveDetail: C["a"],
                    CatCompleteInfo: w["a"],
                    CatEmpty: l["a"],
                    CatPersonalModal: p["a"]
                }, data: function () {
                    return {
                        isShared: !0,
                        leaveId: "",
                        info: {},
                        statusFlag: null,
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
                        isAllowedExtend: !1,
                        isReport: "0",
                        isOpenExt: "0",
                        leaveExtends: [],
                        flowBiz: !0,
                        approvers: [],
                        approversMain: null,
                        isEmpty: !1,
                        emptyText: "暂无数据",
                        nowTime: "",
                        needApproval: null,
                        show: !1,
                        studentInfo: {}
                    }
                }, computed: {
                    terminatedEarlyStatus: function () {
                        return this.terminationInfo.terminated
                    }, isTerminatedEarly: function () {
                        return this.terminatedEarlyStatus === h["c"].TERMINATED.YES
                    }, successInfo: function () {
                        return this.info.status === h["a"].PROCESSING || this.info.status === h["a"].COMPLETE ? [this.info] : []
                    }, successLeaveExtends: function () {
                        return this.leaveExtends.filter((function (t) {
                            return t.status === h["a"].PROCESSING || t.status === h["a"].COMPLETE || t.status === h["a"].REJECT
                        }))
                    }, leaveStatus: function () {
                        return this.info.status
                    }, lastExt: function () {
                        var t = this.leaveExtends.length;
                        return t > 0 ? this.leaveExtends[t - 1] : null
                    }, lastExtStatus: function () {
                        return this.lastExt ? this.lastExt.status : null
                    }, haveExt: function () {
                        return this.leaveExtends.length > 0
                    }, approveStatus: function () {
                        var t = this.info.status;
                        return t === h["a"].COMPLETE || t === h["a"].EXCEED ? t : this.lastExtStatus || t
                    }, visDesBtn: function () {
                        return "1" === this.isReport
                    }, isComplete: function () {
                        return this.leaveStatus === h["a"].COMPLETE
                    }, isPending: function () {
                        return this.leaveStatus === h["a"].PENDING || this.lastExtStatus === h["a"].PENDING
                    }, isProcessing: function () {
                        return this.leaveStatus === h["a"].PROCESSING
                    }, isLeaveReject: function () {
                        return this.leaveStatus === h["a"].REJECT
                    }, isExtReject: function () {
                        return this.lastExtStatus === h["a"].REJECT
                    }, statusInfo: function () {
                        return h["b"][this.approveStatus] || {}
                    }, extBtnText: function () {
                        return this.isExtReject ? "重新申请续假" : "申请续假"
                    }, hideBottom: function () {
                        return {"bottom-0": !this.isLeaveReject && !this.isPending}
                    }
                }, created: function () {
                    this.initPage()
                }, methods: {
                    showInfoModal: function () {
                        this.show = !0
                    }, closeModal: function () {
                        this.show = !1
                    }, getApproveNodes: function (t) {
                        return t && t.filter((function (t) {
                            return t.approveNode.length > 0 && !!t.approveNode[0].nodeWid
                        }))
                    }, getNowTime: function (t) {
                        var e = this, a = u()(t).valueOf();
                        setInterval((function () {
                            a += 1e3, e.nowTime = "当前时间:".concat(Object(x["b"])(a, "yyyy-MM-dd hh:mm:ss"))
                        }), 1e3)
                    }, initPage: function () {
                        var t = this;
                        return Object(r["a"])(regeneratorRuntime.mark((function e() {
                            var a, s, n, o, i, r;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return a = Object(x["c"])(), t.needApproval = "0" === a.needApproval || 0 === a.needApproval ? 0 : 1, Object(c["e"])(), e.next = 5, Object(d["b"])(a);
                                    case 5:
                                        if (s = e.sent, n = s.data, o = s.code, Object(c["b"])(), "2210060000" !== o) {
                                            e.next = 13;
                                            break
                                        }
                                        return t.isEmpty = !0, t.emptyText = "暂无数据", e.abrupt("return");
                                    case 13:
                                        t.info = n.detail || {}, t.studentInfo = n.studentInfo || {}, i = n.nowTime || new Date, t.nowTime = "当前时间:".concat(Object(x["b"])(i, "yyyy-MM-dd hh:mm:ss")), t.getNowTime(i), t.statusFlag = n.recordStatus || "", t.notOutReport = n.notOutReport || {}, t.terminationInfo = n.termination || {}, t.leaveExtends = n.leaveExtends || [], t.isOpenExt = n.isExtend, t.isReport = n.isReport, t.isAllowedExtend = n.isAllowedExtend, t.approversMain = n.detail.approvers, r = [], r = r.concat(n.detail.approvers), t.leaveExtends.forEach((function (t) {
                                            t.approvers.forEach((function (t) {
                                                t.extend = !0
                                            })), r = r.concat(t.approvers)
                                        })), t.approvers = r;
                                    case 30:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                }
            }, _ = y, O = a("2877"), E = Object(O["a"])(_, o, i, !1, null, null, null), k = E.exports, S = a("08ff"),
            j = a("3217"), L = a("5500"), A = {
                mode: "hash",
                base: "/wec-counselor-leave-apps/leave/",
                routes: [{path: "/", component: k, meta: {title: "分享"}}, {
                    path: "/map/:lon/:lat/:address",
                    component: S["a"],
                    meta: {title: "发起位置"}
                }, {
                    path: "/page-empty", meta: {title: "出错啦"}, name: "empty", component: function () {
                        return a.e("chunk-707d1e16").then(a.bind(null, "9af1"))
                    }
                }, {path: "/choosePeople", meta: {title: "抄送人"}, component: j["a"]}, {
                    path: "/chooseSelected",
                    meta: {title: "抄送人"},
                    component: L["a"]
                }]
            }, N = a("b9e7");
        s["a"].use(n["a"]);
        var T = new n["a"](A);
        Object(N["a"])(T, d["c"]);
        e["a"] = T
    }, 3217: function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return h
        }));
        var s = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("CatChoosePeople", {
                    ref: "CatChoosePeople",
                    staticClass: "page-choose-people h-screen ios-touch-scroll",
                    attrs: {
                        "data-list": t.dataList,
                        "search-params": t.searchParams,
                        "history-params": t.historyParams,
                        "search-api-method": t.searchApiMethod,
                        "history-api-method": t.historyApiMethod,
                        "add-history-api-method": t.addHistoryApiMethod
                    },
                    on: {"get-choose-data": t.getChooseDataFn}
                })
            }, n = [], o = a("5530"), i = (a("39d7"), a("e369")), r = a("2f62"), l = Object(r["a"])("choosePeople"),
            c = l.mapGetters, f = {
                components: {CatChoosePeople: i["a"]},
                computed: Object(o["a"])({}, c(["dataList", "historyApiMethod", "searchApiMethod", "addHistoryApiMethod", "searchParams", "historyParams", "setAddHistoryParams"])),
                mounted: function () {
                    window.history.pushState(null, null, document.URL), window.addEventListener("popstate", this.addRouterChangeByTest, !1)
                },
                methods: {
                    getChooseDataFn: function (t) {
                        this.$EventBus.$emit("get-choose-data", t)
                    }, addRouterChangeByTest: function () {
                        var t, e;
                        null !== (t = this.$refs) && void 0 !== t && null !== (e = t.CatChoosePeople) && void 0 !== e && e.showSelected ? (window.history.pushState(null, null, document.URL), this.$refs.CatChoosePeople.showSelected = !1) : (this.$router.go(-1), window.removeEventListener("popstate", this.addRouterChangeByTest))
                    }
                }
            }, u = f, d = a("2877"), p = Object(d["a"])(u, s, n, !1, null, null, null), h = p.exports
    }, "334b": function (t, e, a) {
        "use strict";
        var s = a("2b0e"), n = a("2f62"), o = {
            dataList: [],
            historyApiMethod: null,
            searchApiMethod: null,
            addHistoryApiMethod: null,
            searchParams: {},
            historyParams: {},
            addHistoryParams: {}
        }, i = {
            dataList: function (t) {
                return t.dataList
            }, historyApiMethod: function (t) {
                return t.historyApiMethod
            }, searchApiMethod: function (t) {
                return t.searchApiMethod
            }, addHistoryApiMethod: function (t) {
                return t.addHistoryApiMethod
            }, searchParams: function (t) {
                return t.searchParams
            }, historyParams: function (t) {
                return t.historyParams
            }, addHistoryParams: function (t) {
                return t.addHistoryParams
            }
        }, r = {
            setDataList: function (t, e) {
                t.dataList = e
            }, setHistoryApiMethod: function (t, e) {
                t.historyApiMethod = e
            }, setAddHistoryApiMethod: function (t, e) {
                t.addHistoryApiMethod = e
            }, setSearchApiMethod: function (t, e) {
                t.searchApiMethod = e
            }, setSearchParams: function (t, e) {
                t.searchParams = e
            }, setHistoryParams: function (t, e) {
                t.historyParams = e
            }, setAddHistoryParams: function (t, e) {
                t.addHistoryParams = e
            }
        }, l = {namespaced: !0, state: o, getters: i, mutations: r}, c = {dataList: [], readOnly: !0}, f = {
            dataList: function (t) {
                return t.dataList
            }, readOnly: function (t) {
                return t.readOnly
            }
        }, u = {
            setDataList: function (t, e) {
                t.dataList = e
            }
        }, d = {namespaced: !0, state: c, getters: f, mutations: u};
        s["a"].use(n["b"]);
        e["a"] = new n["b"].Store({modules: {choosePeople: l, chooseSelected: d}})
    }, "3abe": function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return d
        }));
        var s = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "cat-personal-modal flex-center flex-1 h-screen"}, [a("div", {staticClass: "personal-info-box px-15 py-15 radius-normal overflow-hidden"}, [a("div", {staticClass: "info-box-title font-16 font-normal text-center pb-15 relative"}, [a("span", {staticClass: "font-bold"}, [t._v("个人信息")]), a("CatIcon", {
                staticClass: "absolute close-icon",
                attrs: {size: "4.80000vw", name: "close1", color: "text-normal"},
                on: {click: t.close}
            })], 1), a("div", {staticClass: "info-box-content overflow-y-auto"}, [a("div", {staticClass: "row-wrap"}, t._l(t.infoList, (function (e) {
                return a("div", {
                    key: e.key,
                    staticClass: "box-content-row font-14 font-normal font-bold flex mb-10 ai-start"
                }, [a("div", {staticClass: "content-row-label mr-5 no-shrink"}, [t._v(" " + t._s(e.label) + " ")]), "• 照片：" === e.label && "-" !== e.value ? a("CatImage", {
                    staticClass: "content-row-value",
                    attrs: {width: "18.66667vw", height: "28.26667vw", src: e.value},
                    on: {
                        click: function (a) {
                            return t.preview(e.value)
                        }
                    }
                }) : a("div", {staticClass: "content-row-value flex-1"}, [t._v(" " + t._s(e.value) + " ")])], 1)
            })), 0)])])])
        }, n = [], o = (a("4160"), a("bd2e"), a("c21b")), i = (a("622e"), a("dd68")), r = a("60a3"), l = {
            components: {CatIcon: i["a"], CatImage: o["a"]}, props: {
                info: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, computed: {
                infoList: function () {
                    var t = this, e = {
                        photoLabel: "• 照片：",
                        userNameLabel: "• 姓名：",
                        userIdLabel: "• 学号：",
                        genderLabel: "• 性别：",
                        gradeLabel: "• 年级：",
                        deptLabel: "• 学院：",
                        majorLabel: "• 专业：",
                        clsLabel: "• 班级：",
                        dormLabel: "• 宿舍： "
                    }, a = ["photo", "userName", "userId", "gender", "grade", "dept", "major", "cls", "dorm"], s = [];
                    return a.forEach((function (a) {
                        var n = "";
                        n = "gender" === a ? 2 === t.info[a] ? "女" : "男" : t.info[a] || "-", s.push({
                            label: e["".concat(a, "Label")],
                            value: n,
                            key: a
                        })
                    })), s
                }
            }, methods: {
                close: function () {
                    this.$emit("close")
                }, preview: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        a = [{type: "1", url: t}];
                    Object(r["l"])({imageLists: a, currentIndex: e})
                }
            }
        }, c = l, f = (a("bc4b"), a("2877")), u = Object(f["a"])(c, s, n, !1, null, null, null), d = u.exports
    }, "45d3": function (t, e, a) {
        t.exports = {
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
    }, "468f": function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return r
        })), a.d(e, "b", (function () {
            return l
        })), a.d(e, "d", (function () {
            return c
        })), a.d(e, "c", (function () {
            return u
        }));
        var s, n, o = a("ade3"), i = a("a59e"), r = "1", l = "3", c = "2", f = "0",
            u = (s = {}, Object(o["a"])(s, r, "待审批"), Object(o["a"])(s, l, "已完成"), Object(o["a"])(s, c, "已驳回"), Object(o["a"])(s, f, "代销假"), n = {}, Object(o["a"])(n, r, {
                label: "待审批",
                fontClassname: "font-primary",
                borderColor: Object(i["a"])("warning")
            }), Object(o["a"])(n, l, {
                label: "已完成",
                fontClassname: "font-success",
                borderColor: Object(i["a"])("success")
            }), Object(o["a"])(n, c, {
                label: "已驳回",
                fontClassname: "font-error",
                borderColor: Object(i["a"])("error")
            }), Object(o["a"])(n, f, {
                label: "代销假",
                fontClassname: "font-error",
                borderColor: Object(i["a"])("error")
            }), n)
    }, "4cfd": function (t, e, a) {
        "use strict";
        a.d(e, "b", (function () {
            return r
        }));
        var s, n, o = a("ade3"), i = {UNKNOWN: "0", MALE: "1", FEMALE: "2"},
            r = (s = {}, Object(o["a"])(s, i.UNKNOWN, "未知"), Object(o["a"])(s, i.MALE, "男生"), Object(o["a"])(s, i.FEMALE, "女生"), s);
        n = {}, Object(o["a"])(n, i.MALE, "male"), Object(o["a"])(n, i.FEMALE, "women");
        e["a"] = i
    }, "4e8f": function (t, e, a) {
        "use strict";
        var s = a("5a8b"), n = a.n(s);
        n.a
    }, 5500: function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return h
        }));
        var s = function () {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {staticClass: "page-choose-selected h-screen ios-touch-scroll"}, [a("CatChooseSelected", {
                    attrs: {
                        "data-list": t.dataList,
                        "read-only": t.readOnly
                    }
                })], 1)
            }, n = [], o = a("5530"), i = (a("2f78"), a("2177")), r = a("2f62"), l = Object(r["a"])("chooseSelected"),
            c = l.mapGetters,
            f = {components: {CatChooseSelected: i["a"]}, computed: Object(o["a"])({}, c(["dataList", "readOnly"]))},
            u = f, d = a("2877"), p = Object(d["a"])(u, s, n, !1, null, null, null), h = p.exports
    }, "5a8b": function (t, e, a) {
        t.exports = {
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
    }, "5d16": function (t, e, a) {
        "use strict";
        var s = a("45d3"), n = a.n(s);
        n.a
    }, "6a6f": function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return i
        })), a.d(e, "b", (function () {
            return r
        })), a.d(e, "c", (function () {
            return c
        }));
        var s, n, o = a("ade3"), i = {
            PENDING: "1",
            PROCESSING: "2",
            REJECT: "3",
            COMPLETE: "4",
            READY: "5",
            HOLIDAY: "6",
            EXCEED: "7",
            AUTO_PASS: "9",
            AUTO_REJECT: "10"
        }, r = (s = {}, Object(o["a"])(s, i.PENDING, {
            name: "待审批",
            requestStatus: "申请提交成功",
            cls: "common-happy",
            approveStatus: "待审批"
        }), Object(o["a"])(s, i.PROCESSING, {
            name: "审批通过",
            requestStatus: "审批已通过",
            cls: "common-laughter",
            approveStatus: "批准"
        }), Object(o["a"])(s, i.REJECT, {
            name: "已驳回",
            requestStatus: "审批已驳回",
            cls: "common-sad",
            approveStatus: "驳回"
        }), Object(o["a"])(s, i.COMPLETE, {
            name: "已完成",
            requestStatus: "审批已通过",
            cls: "common-laughter",
            approveStatus: "批准"
        }), Object(o["a"])(s, i.READY, {
            name: "即将休假",
            requestStatus: "即将休假",
            cls: "common-laughter",
            approveStatus: "即将休假"
        }), Object(o["a"])(s, i.HOLIDAY, {
            name: "正在休假中",
            requestStatus: "正在休假中",
            cls: "common-laughter",
            approveStatus: "正在休假中"
        }), Object(o["a"])(s, i.EXCEED, {
            name: "销假逾期",
            requestStatus: "销假逾期",
            cls: "common-laughter",
            approveStatus: "销假逾期"
        }), Object(o["a"])(s, i.AUTO_PASS, {
            name: "审批通过",
            requestStatus: "审批已通过",
            cls: "common-laughter",
            approveStatus: "批准"
        }), Object(o["a"])(s, i.AUTO_REJECT, {
            name: "逾期自动驳回",
            requestStatus: "审批已驳回",
            cls: "common-sad",
            approveStatus: "驳回"
        }), s), l = {ON: !0, OFF: !1}, c = (n = {}, Object(o["a"])(n, l.ON, {
            name: "离校",
            cls: "has_left",
            value: !0
        }), Object(o["a"])(n, l.OFF, {
            name: "否",
            cls: "un_left",
            value: !1
        }), i.EXCEED, i.READY, i.HOLIDAY, {ALLOW_TERMINATE: {YES: 1, NO: 0}, TERMINATED: {YES: 1, NO: 0}})
    }, "6cf7": function (t, e, a) {
        "use strict";
        var s = a("0292"), n = a.n(s);
        n.a
    }, "76ba": function (t, e, a) {
        "use strict";
        var s = a("b712"), n = a.n(s);
        n.a
    }, "7c94": function (t, e, a) {
        "use strict";
        a.d(e, "c", (function () {
            return l
        })), a.d(e, "b", (function () {
            return f
        })), a.d(e, "a", (function () {
            return d
        }));
        a("99af"), a("ac1f"), a("5319"), a("1276");
        var s = a("fa78"), n = a("8364"), o = a("2c26"), i = {2210070006: "已被发布者删除、撤回"};
        s["a"].use("response", (function (t) {
            var e = t.code, a = i[e];
            return a && o["a"].replace({path: "/page-empty", query: {errorText: a}}), t
        }));
        var r = Object(n["c"])("/leave/stu/jssdk/queryConfig");

        function l() {
            return s["a"].post(r, {url: window.location.href.split("#")[0]})
        }

        var c = Object(n["c"])("leave/share/detail");

        function f() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            return s["a"].post.apply(s["a"], [c].concat(e))
        }

        var u = Object(n["c"])("/leave/stu/getLeaveQr");

        function d() {
            for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            return s["a"].post.apply(s["a"], [u].concat(e))
        }
    }, 9094: function (t, e, a) {
        "use strict";
        var s = a("02d9"), n = a.n(s);
        n.a
    }, a46c: function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return i
        }));
        var s, n = a("ade3"), o = {NORMAL: "1", SICK: "2", OTHER: "0"},
            i = (s = {}, Object(n["a"])(s, o.NORMAL, "事假"), Object(n["a"])(s, o.SICK, "病假"), Object(n["a"])(s, o.OTHER, "其它"), s);
        o.NORMAL, i[o.NORMAL], o.SICK, i[o.SICK], o.OTHER, i[o.OTHER]
    }, b3ff: function (t, e, a) {
        t.exports = {
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
    }, b712: function (t, e, a) {
    }, b9e7: function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return u
        }));
        a("ac1f"), a("5319"), a("841c"), a("96cf");
        var s = a("1da1"), n = a("60a3"), o = a("3b03"), i = a("c080"), r = a("8d5e"), l = a("3a2e"), c = a("fa78f"),
            f = a.n(c), u = function (t, e) {
                t.beforeEach(function () {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, s, c) {
                        var u, d, p, h;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (Object(i["a"])(a, s), Object(i["b"])(a, s), u = Object(l["h"])(), (Object(r["e"])() || Object(r["f"])()) && u.detail && (d = window.location.search.replace(/detail=true/, ""), p = "", p = "0" === u.needApproval || 0 === u.needApproval ? "#/detail/".concat(u.id, "/0") : "#/detail/".concat(u.id, "/1"), window.location.href = window.location.origin + window.location.pathname + d + p), !a.meta.useSdk) {
                                        t.next = 13;
                                        break
                                    }
                                    return Object(o["d"])(), t.next = 8, Object(n["d"])(e);
                                case 8:
                                    h = t.sent, Object(o["a"])(), 0 === h.code ? (Object(n["n"])({title: a.meta.title}), r["c"] && f.a.enable(), c()) : (r["c"] && f.a.enable(), c({path: "/page-empty"})), t.next = 15;
                                    break;
                                case 13:
                                    r["c"] && f.a.enable(), c();
                                case 15:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function (e, a, s) {
                        return t.apply(this, arguments)
                    }
                }()), t.afterEach(function () {
                    var t = Object(s["a"])(regeneratorRuntime.mark((function t(e, a) {
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    r["c"] && f.a.disable();
                                case 1:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function (e, a) {
                        return t.apply(this, arguments)
                    }
                }())
            }
    }, bc4b: function (t, e, a) {
        "use strict";
        var s = a("22c8"), n = a.n(s);
        n.a
    }, cc83: function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return d
        }));
        var s = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "cat-status-show bg-white"}, [t.isShared ? t._e() : a("div", {staticClass: "flex-col py-20 ai-center hairline-b"}, [a("CatImage", {
                attrs: {
                    width: "15.46667vw",
                    height: "15.46667vw",
                    name: t.statusInfo.cls
                }
            }), a("div", {staticClass: "font-dark font-16 mt-10"}, [t._v(" " + t._s(t.statusInfo.requestStatus || "") + " ")]), t.auditor ? a("div", {staticClass: "font-14 mt-10"}, [a("span", {staticClass: "font-light"}, [t._v("审批人：")]), a("span", {staticClass: "font-dark"}, [t._v(t._s(t.auditor))])]) : t._e()], 1), t.isShared ? a("div", {staticClass: "bg-white px-20 flex ai-center py-10"}, [a("div", {staticClass: "short-name radius-circle bg-primary font-white font-14 no-shrink mr-10 text-center"}, [a("span", [t._v(t._s(t.info.userName && t.info.userName.slice(-2)))])]), a("div", {staticClass: "flex-1 font-14"}, [a("div", {staticClass: "font-dark"}, [t._v(" " + t._s(t.info.userName) + " ")]), a("div", {staticClass: "font-normal"}, [t._v(" " + t._s(t.genderName) + t._s(t.info.userId) + " ")])])]) : t._e()])
        }, n = [], o = (a("bd2e"), a("c21b")), i = a("6a6f"), r = a("4cfd"), l = {
            components: {CatImage: o["a"]}, props: {
                info: {
                    type: Object, default: function () {
                        return {}
                    }
                },
                auditor: {type: String, default: ""},
                isShared: {type: Boolean, default: !1},
                status: {type: String, default: ""}
            }, computed: {
                statusInfo: function () {
                    return i["b"][this.status] || {}
                }, genderName: function () {
                    return r["b"][this.info.gender]
                }
            }, methods: {
                getShortName: function (t) {
                    return ""
                }
            }
        }, c = l, f = (a("9094"), a("2877")), u = Object(f["a"])(c, s, n, !1, null, null, null), d = u.exports
    }, d115: function (t, e, a) {
        "use strict";
        a.d(e, "a", (function () {
            return p
        }));
        var s = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "cat-flow-leave-meta hairline-b py-10 font-12 bg-white px-20"}, [a("div", {staticClass: "flex"}, [a("div", {staticClass: "flex mb-5 flex-1"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 请假类型： ")]), a("div", {staticClass: "font-normal flex-1 mr-5"}, [t._v(" " + t._s(t.info.leaveType) + " ")])]), a("div", {staticClass: "flex mb-5 flex-1"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 需要离校： ")]), a("div", {staticClass: "flex-1 mr-5"}, [a("span", {class: t.leaveSchoolTextClass}, [t._v(t._s(t._f("outStatusName")(t.outStatusBoolean)))])])])]), a("div", {staticClass: "flex mb-5"}, [a("div", {staticClass: "font-light no-shrink row-label"}, [t._v(" 销假规则： ")]), a("div", {staticClass: "font-normal flex-1 mr-5"}, [a("span", {staticClass: "font-warning"}, [t._v(t._s(t._f("notOutReportDisplay")(t.notOutReport.rule)))]), t.notOutReport.setedNotOutReport ? a("span", {
                staticClass: "font-primary ml-5",
                on: {click: t.showDetailModal}
            }, [t._v("查看 >")]) : t._e()])]), a("div", {staticClass: "flex"}, [a("div", {staticClass: "font-light no-shrink"}, [t._v(" 实际休假时间： ")]), a("div", {staticClass: "font-normal flex-1 mr-5"}, [a("span", {style: t.actLeaveTimeStyle}, [t._v(t._s(t.actLeaveTime))])])]), t.notOutReport.setedNotOutReport ? a("v-dialog", {
                staticClass: "bus-flow-chart-modal",
                attrs: {"get-container": "body", "confirm-button-text": "知道了"},
                model: {
                    value: t.reportVisible, callback: function (e) {
                        t.reportVisible = e
                    }, expression: "reportVisible"
                }
            }, [a("div", {
                attrs: {slot: "title"},
                slot: "title"
            }, [a("b", [t._v("销假规则说明")])]), a("div", {staticClass: "p-20 font-14 font-normal flex-col"}, [a("div", {staticClass: "mb-10"}, [t._v(" • 开启时间：" + t._s(t.notOutReport.operatorDate || "-") + " ")]), a("div", [t._v(" • 操作人： " + t._s(t.notOutReport.operatorName || "-") + " ")])])]) : t._e()], 1)
        }, n = [], o = (a("99af"), a("e17f"), a("2241")), i = a("a46c"), r = a("6a6f"), l = a("4cfd"), c = {
            components: {"v-dialog": o["a"].Component}, filters: {
                reqtype: function (t) {
                    return i["a"][t] || "其他"
                }, outStatusName: function (t) {
                    return t ? "离校" : "否"
                }, notOutReportDisplay: function (t) {
                    return t ? "离校、非离校请假需要销假" : "离校请假需要销假，非离校请假无需销假"
                }
            }, props: {
                info: {
                    type: Object, default: function () {
                        return {}
                    }
                }, notOutReport: {
                    type: Object, default: function () {
                    }
                }
            }, data: function () {
                return {reportVisible: !1}
            }, computed: {
                isPending: function () {
                    return this.info.ownStatus && this.info.status === r["a"].PENDING
                }, leaveSchoolTextClass: function () {
                    return this.outStatusBoolean && this.info.gender === l["a"].FEMALE ? "font-warning" : "font-normal"
                }, outStatusBoolean: function () {
                    return this.info.outStatus
                }, isEarlyEnd: function () {
                    return this.info.isEarlyEnd
                }, actLeaveTime: function () {
                    var t = this.info, e = t.actStatus, a = t.startTime, s = t.actEndTime, n = t.actEndTimeDesc;
                    return "8" === e ? "" === n ? "0天  休假未开始已提前结束或提前销假" : "".concat(a, " ~ ").concat(s, "（共").concat(n, "）") : "-"
                }, actLeaveTimeStyle: function () {
                    return "1" === this.isEarlyEnd ? "color: #FF9900;" : ""
                }
            }, methods: {
                showDetailModal: function () {
                    this.reportVisible = !0
                }
            }
        }, f = c, u = a("2877"), d = Object(u["a"])(f, s, n, !1, null, null, null), p = d.exports
    }, e362: function (t, e, a) {
        "use strict";
        var s = a("e54b"), n = a.n(s);
        n.a
    }, e54b: function (t, e, a) {
        t.exports = {
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
    }, fa7d: function (t, e, a) {
        "use strict";
        a.d(e, "c", (function () {
            return n
        })), a.d(e, "d", (function () {
            return o
        })), a.d(e, "a", (function () {
            return r
        })), a.d(e, "b", (function () {
            return l
        }));
        a("4160"), a("4d63"), a("ac1f"), a("25f0"), a("5319"), a("841c"), a("1276"), a("159b");
        var s = a("c18b"), n = function () {
            var t = {}, e = window.location.search && window.location.search.substr(1);
            return e = window.location.search.substr(1).replace(/&/g, ",").split(","), e.forEach((function (e) {
                var a = e.split("=");
                2 === a.length && (t[a[0]] = a[1])
            })), t
        }, o = function (t) {
            return !!t && (t.scrollHeight - t.clientHeight > 1 || t.scrollWidth > t.clientWidth)
        }, i = function (t, e) {
            return s["a"].GeoUtils.getDistance(new BMap.Point(t.lng, t.lat), new BMap.Point(e.lng, e.lat))
        }, r = function (t, e) {
            if (!e || !t) return -1;
            for (var a = 0, s = 0, n = t.length; s < n; s++) {
                var o = t[s],
                    r = i({lng: e.longitude || e.lng, lat: e.latitude || e.lat}, {lng: o.longitude, lat: o.latitude});
                if (r <= o.radius) return 0;
                a = 0 === a ? r : Math.min(r, a)
            }
            return a
        };

        function l(t, e) {
            var a = new Date(t), s = {
                "M+": a.getMonth() + 1,
                "d+": a.getDate(),
                "h+": a.getHours(),
                "m+": a.getMinutes(),
                "s+": a.getSeconds(),
                "q+": Math.floor((a.getMonth() + 3) / 3),
                S: a.getMilliseconds()
            };
            for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, "".concat(a.getFullYear()).substr(4 - RegExp.$1.length))), s) new RegExp("(".concat(n, ")")).test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? s[n] : "00".concat(s[n]).substr("".concat(s[n]).length)));
            return e
        }
    }
}]);
//# sourceMappingURL=chunk-common.af002347.js.map