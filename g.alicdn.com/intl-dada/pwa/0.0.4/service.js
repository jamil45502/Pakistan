! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 29)
}([function(t, e, n) {
    (function(r) {
        function o() {
            var t;
            try {
                t = e.storage.debug
            } catch (t) {}
            return !t && void 0 !== r && "env" in r && (t = r.env.DEBUG), t
        }(e = t.exports = n(40)).log = function() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }, e.formatArgs = function(t) {
            var n = this.useColors;
            if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), !n) return;
            var r = "color: " + this.color;
            t.splice(1, 0, r, "color: inherit");
            var o = 0,
                i = 0;
            t[0].replace(/%[a-zA-Z%]/g, (function(t) {
                "%%" !== t && (o++, "%c" === t && (i = o))
            })), t.splice(i, 0, r)
        }, e.save = function(t) {
            try {
                null == t ? e.storage.removeItem("debug") : e.storage.debug = t
            } catch (t) {}
        }, e.load = o, e.useColors = function() {
            if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (t) {}
        }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function(t) {
            try {
                return JSON.stringify(t)
            } catch (t) {
                return "[UnexpectedJSONParseError]: " + t.message
            }
        }, e.enable(o())
    }).call(this, n(39))
}, function(t, e, n) {
    "use strict";
    var r = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }))
        },
        o = this && this.__generator || function(t, e) {
            var n, r, o, i, s = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1], o = i;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2], s.ops.push(i);
                                        break
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            i = e.call(t, s)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        },
        i = this && this.__read || function(t, e) {
            var n = "function" == typeof Symbol && t[Symbol.iterator];
            if (!n) return t;
            var r, o, i = n.call(t),
                s = [];
            try {
                for (;
                    (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
            } catch (t) {
                o = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return s
        },
        s = this && this.__spread || function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e]));
            return t
        };

    function a(t) {
        return r(this, void 0, void 0, (function() {
            var e, n;
            return o(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]), self.clients ? [4, self.clients.matchAll()] : [2];
                    case 1:
                        return (e = r.sent()).length ? ((e.find((function(t) {
                            return "hidden" === t.visibilityState
                        })) || e[0]).postMessage(JSON.stringify(t)), [3, 3]) : [2];
                    case 2:
                        return n = r.sent(), console.error("send message failed", t, n), [3, 3];
                    case 3:
                        return [2]
                }
            }))
        }))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var c = new(function() {
        function t() {
            var t = this;
            this.debug = !0, this.error = function(t) {
                console.error(t), t instanceof Error && (t = t.message), a({
                    type: "error",
                    message: t = "[PWA SERVICE ERROR]" + t
                })
            }, this.info = function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                t.debug && console.log.apply(console, s(["%c[PWA SERVICE]%c", "color:#0f0;", ""], e))
            }, this.timeEnd = function(e) {
                for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                t.debug && console.log.apply(console, s(["%c[PWA SERVICE TIMER]%c", "color:#0f0;", ""], n, [":  " + (Date.now() - e) + " ms"]))
            }
        }
        return t.prototype.setConfig = function(t, e) {
            this.debug = t, this.goldLogConfig = e
        }, t.prototype.goldlog = function(t, e) {
            a({
                type: "goldlog",
                key: this.goldLogConfig[t],
                data: e
            })
        }, t.prototype.time = function() {
            return Date.now()
        }, t.prototype.warn = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            console.warn.apply(console, s(["%c[PWA SERVICE]%c", "color:#0f0;", ""], t))
        }, t
    }());
    self.__logger = c, e.default = c
}, function(t, e, n) {
    function r(t) {
        if (t) return function(t) {
            for (var e in r.prototype) t[e] = r.prototype[e];
            return t
        }(t)
    }
    t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
    }, r.prototype.once = function(t, e) {
        function n() {
            this.off(t, n), e.apply(this, arguments)
        }
        return n.fn = e, this.on(t, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n, r = this._callbacks["$" + t];
        if (!r) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
        for (var o = 0; o < r.length; o++)
            if ((n = r[o]) === e || n.fn === e) {
                r.splice(o, 1);
                break
            }
        return 0 === r.length && delete this._callbacks["$" + t], this
    }, r.prototype.emit = function(t) {
        this._callbacks = this._callbacks || {};
        for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        if (n) {
            r = 0;
            for (var o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, e)
        }
        return this
    }, r.prototype.listeners = function(t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
    }, r.prototype.hasListeners = function(t) {
        return !!this.listeners(t).length
    }
}, function(t, e, n) {
    var r, o = n(51),
        i = n(21),
        s = n(52),
        a = n(53),
        c = n(54);
    "undefined" != typeof ArrayBuffer && (r = n(55));
    var u = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
        h = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
        f = u || h;
    e.protocol = 3;
    var l = e.packets = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        },
        p = o(l),
        d = {
            type: "error",
            data: "parser error"
        },
        y = n(56);

    function g(t, e, n) {
        for (var r = new Array(t.length), o = a(t.length, n), i = function(t, n, o) {
                e(n, (function(e, n) {
                    r[t] = n, o(e, r)
                }))
            }, s = 0; s < t.length; s++) i(s, t[s], o)
    }
    e.encodePacket = function(t, n, r, o) {
        "function" == typeof n && (o = n, n = !1), "function" == typeof r && (o = r, r = null);
        var i = void 0 === t.data ? void 0 : t.data.buffer || t.data;
        if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer) return function(t, n, r) {
            if (!n) return e.encodeBase64Packet(t, r);
            var o = t.data,
                i = new Uint8Array(o),
                s = new Uint8Array(1 + o.byteLength);
            s[0] = l[t.type];
            for (var a = 0; a < i.length; a++) s[a + 1] = i[a];
            return r(s.buffer)
        }(t, n, o);
        if (void 0 !== y && i instanceof y) return function(t, n, r) {
            if (!n) return e.encodeBase64Packet(t, r);
            if (f) return function(t, n, r) {
                if (!n) return e.encodeBase64Packet(t, r);
                var o = new FileReader;
                return o.onload = function() {
                    e.encodePacket({
                        type: t.type,
                        data: o.result
                    }, n, !0, r)
                }, o.readAsArrayBuffer(t.data)
            }(t, n, r);
            var o = new Uint8Array(1);
            o[0] = l[t.type];
            var i = new y([o.buffer, t.data]);
            return r(i)
        }(t, n, o);
        if (i && i.base64) return function(t, n) {
            var r = "b" + e.packets[t.type] + t.data.data;
            return n(r)
        }(t, o);
        var s = l[t.type];
        return void 0 !== t.data && (s += r ? c.encode(String(t.data), {
            strict: !1
        }) : String(t.data)), o("" + s)
    }, e.encodeBase64Packet = function(t, n) {
        var r, o = "b" + e.packets[t.type];
        if (void 0 !== y && t.data instanceof y) {
            var i = new FileReader;
            return i.onload = function() {
                var t = i.result.split(",")[1];
                n(o + t)
            }, i.readAsDataURL(t.data)
        }
        try {
            r = String.fromCharCode.apply(null, new Uint8Array(t.data))
        } catch (e) {
            for (var s = new Uint8Array(t.data), a = new Array(s.length), c = 0; c < s.length; c++) a[c] = s[c];
            r = String.fromCharCode.apply(null, a)
        }
        return o += btoa(r), n(o)
    }, e.decodePacket = function(t, n, r) {
        if (void 0 === t) return d;
        if ("string" == typeof t) {
            if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), n);
            if (r && !1 === (t = function(t) {
                    try {
                        t = c.decode(t, {
                            strict: !1
                        })
                    } catch (t) {
                        return !1
                    }
                    return t
                }(t))) return d;
            var o = t.charAt(0);
            return Number(o) == o && p[o] ? t.length > 1 ? {
                type: p[o],
                data: t.substring(1)
            } : {
                type: p[o]
            } : d
        }
        o = new Uint8Array(t)[0];
        var i = s(t, 1);
        return y && "blob" === n && (i = new y([i])), {
            type: p[o],
            data: i
        }
    }, e.decodeBase64Packet = function(t, e) {
        var n = p[t.charAt(0)];
        if (!r) return {
            type: n,
            data: {
                base64: !0,
                data: t.substr(1)
            }
        };
        var o = r.decode(t.substr(1));
        return "blob" === e && y && (o = new y([o])), {
            type: n,
            data: o
        }
    }, e.encodePayload = function(t, n, r) {
        "function" == typeof n && (r = n, n = null);
        var o = i(t);
        if (n && o) return y && !f ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r);
        if (!t.length) return r("0:");
        g(t, (function(t, r) {
            e.encodePacket(t, !!o && n, !1, (function(t) {
                r(null, function(t) {
                    return t.length + ":" + t
                }(t))
            }))
        }), (function(t, e) {
            return r(e.join(""))
        }))
    }, e.decodePayload = function(t, n, r) {
        if ("string" != typeof t) return e.decodePayloadAsBinary(t, n, r);
        var o;
        if ("function" == typeof n && (r = n, n = null), "" === t) return r(d, 0, 1);
        for (var i, s, a = "", c = 0, u = t.length; c < u; c++) {
            var h = t.charAt(c);
            if (":" === h) {
                if ("" === a || a != (i = Number(a))) return r(d, 0, 1);
                if (a != (s = t.substr(c + 1, i)).length) return r(d, 0, 1);
                if (s.length) {
                    if (o = e.decodePacket(s, n, !1), d.type === o.type && d.data === o.data) return r(d, 0, 1);
                    if (!1 === r(o, c + i, u)) return
                }
                c += i, a = ""
            } else a += h
        }
        return "" !== a ? r(d, 0, 1) : void 0
    }, e.encodePayloadAsArrayBuffer = function(t, n) {
        if (!t.length) return n(new ArrayBuffer(0));
        g(t, (function(t, n) {
            e.encodePacket(t, !0, !0, (function(t) {
                return n(null, t)
            }))
        }), (function(t, e) {
            var r = e.reduce((function(t, e) {
                    var n;
                    return t + (n = "string" == typeof e ? e.length : e.byteLength).toString().length + n + 2
                }), 0),
                o = new Uint8Array(r),
                i = 0;
            return e.forEach((function(t) {
                var e = "string" == typeof t,
                    n = t;
                if (e) {
                    for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++) r[s] = t.charCodeAt(s);
                    n = r.buffer
                }
                o[i++] = e ? 0 : 1;
                var a = n.byteLength.toString();
                for (s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
                o[i++] = 255;
                for (r = new Uint8Array(n), s = 0; s < r.length; s++) o[i++] = r[s]
            })), n(o.buffer)
        }))
    }, e.encodePayloadAsBlob = function(t, n) {
        g(t, (function(t, n) {
            e.encodePacket(t, !0, !0, (function(t) {
                var e = new Uint8Array(1);
                if (e[0] = 1, "string" == typeof t) {
                    for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
                    t = r.buffer, e[0] = 0
                }
                var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString(),
                    s = new Uint8Array(i.length + 1);
                for (o = 0; o < i.length; o++) s[o] = parseInt(i[o]);
                if (s[i.length] = 255, y) {
                    var a = new y([e.buffer, s.buffer, t]);
                    n(null, a)
                }
            }))
        }), (function(t, e) {
            return n(new y(e))
        }))
    }, e.decodePayloadAsBinary = function(t, n, r) {
        "function" == typeof n && (r = n, n = null);
        for (var o = t, i = []; o.byteLength > 0;) {
            for (var a = new Uint8Array(o), c = 0 === a[0], u = "", h = 1; 255 !== a[h]; h++) {
                if (u.length > 310) return r(d, 0, 1);
                u += a[h]
            }
            o = s(o, 2 + u.length), u = parseInt(u);
            var f = s(o, 0, u);
            if (c) try {
                f = String.fromCharCode.apply(null, new Uint8Array(f))
            } catch (t) {
                var l = new Uint8Array(f);
                f = "";
                for (h = 0; h < l.length; h++) f += String.fromCharCode(l[h])
            }
            i.push(f), o = s(o, u)
        }
        var p = i.length;
        i.forEach((function(t, o) {
            r(e.decodePacket(t, n, !0), o, p)
        }))
    }
}, function(t, e) {
    e.encode = function(t) {
        var e = "";
        for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
        return e
    }, e.decode = function(t) {
        for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
            var i = n[r].split("=");
            e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
        }
        return e
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = function() {};
        n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SOCKET_RECONNECT_ATTEMPTS = e.SOCKET_RECONNECT_DELAY_MAX = e.SOCKET_RECONNECT_DELAY = e.MATCH_MAXAGE_REG = e.HAS_NUMBER_REG = e.NETWORK_IDLE_TIMEOUT = e.DEFAULT_BLACK_LIST = e.DEFAULT_CACHE_ASSETS_REG = e.DEFAULT_CACHE_ASSETS = e.DEFAULT_MAX_ENTRIES = e.DEFAULT_TIMER_TIMEOUT = e.storeName = e.dbName = e.cacheName = e.CACHE_VERSION = void 0;
    e.CACHE_VERSION = 1, e.cacheName = "intl-pwa", e.dbName = "intl-expiration", e.storeName = "cache-entries", e.DEFAULT_TIMER_TIMEOUT = 3e3, e.DEFAULT_MAX_ENTRIES = 500, e.DEFAULT_CACHE_ASSETS = [], e.DEFAULT_CACHE_ASSETS_REG = [], e.DEFAULT_BLACK_LIST = [], e.NETWORK_IDLE_TIMEOUT = 5e3, e.HAS_NUMBER_REG = /\d/, e.MATCH_MAXAGE_REG = /max-age=(\d+)/, e.SOCKET_RECONNECT_DELAY = 6e4, e.SOCKET_RECONNECT_DELAY_MAX = 12e5, e.SOCKET_RECONNECT_ATTEMPTS = 5
}, function(t, e, n) {
    var r = n(0)("socket.io-parser"),
        o = n(2),
        i = n(42),
        s = n(8),
        a = n(17);

    function c() {}
    e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = c, e.Decoder = f;
    var u = e.ERROR + '"encode error"';

    function h(t) {
        var n = "" + t.type;
        if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"), t.nsp && "/" !== t.nsp && (n += t.nsp + ","), null != t.id && (n += t.id), null != t.data) {
            var o = function(t) {
                try {
                    return JSON.stringify(t)
                } catch (t) {
                    return !1
                }
            }(t.data);
            if (!1 === o) return u;
            n += o
        }
        return r("encoded %j as %s", t, n), n
    }

    function f() {
        this.reconstructor = null
    }

    function l(t) {
        this.reconPack = t, this.buffers = []
    }

    function p(t) {
        return {
            type: e.ERROR,
            data: "parser error: " + t
        }
    }
    c.prototype.encode = function(t, n) {
        (r("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) ? function(t, e) {
            i.removeBlobs(t, (function(t) {
                var n = i.deconstructPacket(t),
                    r = h(n.packet),
                    o = n.buffers;
                o.unshift(r), e(o)
            }))
        }(t, n) : n([h(t)])
    }, o(f.prototype), f.prototype.add = function(t) {
        var n;
        if ("string" == typeof t) n = function(t) {
            var n = 0,
                o = {
                    type: Number(t.charAt(0))
                };
            if (null == e.types[o.type]) return p("unknown packet type " + o.type);
            if (e.BINARY_EVENT === o.type || e.BINARY_ACK === o.type) {
                for (var i = n + 1;
                    "-" !== t.charAt(++n) && n != t.length;);
                var a = t.substring(i, n);
                if (a != Number(a) || "-" !== t.charAt(n)) throw new Error("Illegal attachments");
                o.attachments = Number(a)
            }
            if ("/" === t.charAt(n + 1)) {
                for (i = n + 1; ++n;) {
                    if ("," === (u = t.charAt(n))) break;
                    if (n === t.length) break
                }
                o.nsp = t.substring(i, n)
            } else o.nsp = "/";
            var c = t.charAt(n + 1);
            if ("" !== c && Number(c) == c) {
                for (i = n + 1; ++n;) {
                    var u;
                    if (null == (u = t.charAt(n)) || Number(u) != u) {
                        --n;
                        break
                    }
                    if (n === t.length) break
                }
                o.id = Number(t.substring(i, n + 1))
            }
            if (t.charAt(++n)) {
                var h = function(t) {
                    try {
                        return JSON.parse(t)
                    } catch (t) {
                        return !1
                    }
                }(t.substr(n));
                if (!(!1 !== h && (o.type === e.ERROR || s(h)))) return p("invalid payload");
                o.data = h
            }
            return r("decoded %s as %j", t, o), o
        }(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new l(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
        else {
            if (!a(t) && !t.base64) throw new Error("Unknown type: " + t);
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            (n = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, this.emit("decoded", n))
        }
    }, f.prototype.destroy = function() {
        this.reconstructor && this.reconstructor.finishedReconstruction()
    }, l.prototype.takeBinaryData = function(t) {
        if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
            var e = i.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), e
        }
        return null
    }, l.prototype.finishedReconstruction = function() {
        this.reconPack = null, this.buffers = []
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function(t) {
        return "[object Array]" == n.call(t)
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var r = n(44),
            o = n(45),
            i = n(46);

        function s() {
            return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function a(t, e) {
            if (s() < e) throw new RangeError("Invalid typed array length");
            return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t
        }

        function c(t, e, n) {
            if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, n);
            if ("number" == typeof t) {
                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                return f(this, t)
            }
            return u(this, t, e, n)
        }

        function u(t, e, n, r) {
            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
                if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
                c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = l(t, e);
                return t
            }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
                "string" == typeof n && "" !== n || (n = "utf8");
                if (!c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | d(e, n),
                    o = (t = a(t, r)).write(e, n);
                o !== r && (t = t.slice(0, o));
                return t
            }(t, e, n) : function(t, e) {
                if (c.isBuffer(e)) {
                    var n = 0 | p(e.length);
                    return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t
                }
                if (e) {
                    if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : l(t, e);
                    if ("Buffer" === e.type && i(e.data)) return l(t, e.data)
                }
                var r;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(t, e)
        }

        function h(t) {
            if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
            if (t < 0) throw new RangeError('"size" argument must not be negative')
        }

        function f(t, e) {
            if (h(e), t = a(t, e < 0 ? 0 : 0 | p(e)), !c.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < e; ++n) t[n] = 0;
            return t
        }

        function l(t, e) {
            var n = e.length < 0 ? 0 : 0 | p(e.length);
            t = a(t, n);
            for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
            return t
        }

        function p(t) {
            if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
            return 0 | t
        }

        function d(t, e) {
            if (c.isBuffer(t)) return t.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
            "string" != typeof t && (t = "" + t);
            var n = t.length;
            if (0 === n) return 0;
            for (var r = !1;;) switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return q(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return j(t).length;
                default:
                    if (r) return q(t).length;
                    e = ("" + e).toLowerCase(), r = !0
            }
        }

        function y(t, e, n) {
            var r = !1;
            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if ((n >>>= 0) <= (e >>>= 0)) return "";
            for (t || (t = "utf8");;) switch (t) {
                case "hex":
                    return x(this, e, n);
                case "utf8":
                case "utf-8":
                    return T(this, e, n);
                case "ascii":
                    return R(this, e, n);
                case "latin1":
                case "binary":
                    return S(this, e, n);
                case "base64":
                    return k(this, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return B(this, e, n);
                default:
                    if (r) throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(), r = !0
            }
        }

        function g(t, e, n) {
            var r = t[e];
            t[e] = t[n], t[n] = r
        }

        function v(t, e, n, r, o) {
            if (0 === t.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                if (o) return -1;
                n = t.length - 1
            } else if (n < 0) {
                if (!o) return -1;
                n = 0
            }
            if ("string" == typeof e && (e = c.from(e, r)), c.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, n, r, o);
            if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : m(t, [e], n, r, o);
            throw new TypeError("val must be string, number or Buffer")
        }

        function m(t, e, n, r, o) {
            var i, s = 1,
                a = t.length,
                c = e.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (t.length < 2 || e.length < 2) return -1;
                s = 2, a /= 2, c /= 2, n /= 2
            }

            function u(t, e) {
                return 1 === s ? t[e] : t.readUInt16BE(e * s)
            }
            if (o) {
                var h = -1;
                for (i = n; i < a; i++)
                    if (u(t, i) === u(e, -1 === h ? 0 : i - h)) {
                        if (-1 === h && (h = i), i - h + 1 === c) return h * s
                    } else -1 !== h && (i -= i - h), h = -1
            } else
                for (n + c > a && (n = a - c), i = n; i >= 0; i--) {
                    for (var f = !0, l = 0; l < c; l++)
                        if (u(t, i + l) !== u(e, l)) {
                            f = !1;
                            break
                        }
                    if (f) return i
                }
            return -1
        }

        function b(t, e, n, r) {
            n = Number(n) || 0;
            var o = t.length - n;
            r ? (r = Number(r)) > o && (r = o) : r = o;
            var i = e.length;
            if (i % 2 != 0) throw new TypeError("Invalid hex string");
            r > i / 2 && (r = i / 2);
            for (var s = 0; s < r; ++s) {
                var a = parseInt(e.substr(2 * s, 2), 16);
                if (isNaN(a)) return s;
                t[n + s] = a
            }
            return s
        }

        function w(t, e, n, r) {
            return Y(q(e, t.length - n), t, n, r)
        }

        function C(t, e, n, r) {
            return Y(function(t) {
                for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                return e
            }(e), t, n, r)
        }

        function E(t, e, n, r) {
            return C(t, e, n, r)
        }

        function A(t, e, n, r) {
            return Y(j(e), t, n, r)
        }

        function _(t, e, n, r) {
            return Y(function(t, e) {
                for (var n, r, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), r = n >> 8, o = n % 256, i.push(o), i.push(r);
                return i
            }(e, t.length - n), t, n, r)
        }

        function k(t, e, n) {
            return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
        }

        function T(t, e, n) {
            n = Math.min(t.length, n);
            for (var r = [], o = e; o < n;) {
                var i, s, a, c, u = t[o],
                    h = null,
                    f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                if (o + f <= n) switch (f) {
                    case 1:
                        u < 128 && (h = u);
                        break;
                    case 2:
                        128 == (192 & (i = t[o + 1])) && (c = (31 & u) << 6 | 63 & i) > 127 && (h = c);
                        break;
                    case 3:
                        i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (c = (15 & u) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (h = c);
                        break;
                    case 4:
                        i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (c = (15 & u) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (h = c)
                }
                null === h ? (h = 65533, f = 1) : h > 65535 && (h -= 65536, r.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), r.push(h), o += f
            }
            return function(t) {
                var e = t.length;
                if (e <= 4096) return String.fromCharCode.apply(String, t);
                var n = "",
                    r = 0;
                for (; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += 4096));
                return n
            }(r)
        }
        e.Buffer = c, e.SlowBuffer = function(t) {
            +t != t && (t = 0);
            return c.alloc(+t)
        }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
            try {
                var t = new Uint8Array(1);
                return t.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
            } catch (t) {
                return !1
            }
        }(), e.kMaxLength = s(), c.poolSize = 8192, c._augment = function(t) {
            return t.__proto__ = c.prototype, t
        }, c.from = function(t, e, n) {
            return u(null, t, e, n)
        }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
            value: null,
            configurable: !0
        })), c.alloc = function(t, e, n) {
            return function(t, e, n, r) {
                return h(e), e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e)
            }(null, t, e, n)
        }, c.allocUnsafe = function(t) {
            return f(null, t)
        }, c.allocUnsafeSlow = function(t) {
            return f(null, t)
        }, c.isBuffer = function(t) {
            return !(null == t || !t._isBuffer)
        }, c.compare = function(t, e) {
            if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
                if (t[o] !== e[o]) {
                    n = t[o], r = e[o];
                    break
                }
            return n < r ? -1 : r < n ? 1 : 0
        }, c.isEncoding = function(t) {
            switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, c.concat = function(t, e) {
            if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === t.length) return c.alloc(0);
            var n;
            if (void 0 === e)
                for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var r = c.allocUnsafe(e),
                o = 0;
            for (n = 0; n < t.length; ++n) {
                var s = t[n];
                if (!c.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(r, o), o += s.length
            }
            return r
        }, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
            var t = this.length;
            if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) g(this, e, e + 1);
            return this
        }, c.prototype.swap32 = function() {
            var t = this.length;
            if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2);
            return this
        }, c.prototype.swap64 = function() {
            var t = this.length;
            if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4);
            return this
        }, c.prototype.toString = function() {
            var t = 0 | this.length;
            return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : y.apply(this, arguments)
        }, c.prototype.equals = function(t) {
            if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === c.compare(this, t)
        }, c.prototype.inspect = function() {
            var t = "",
                n = e.INSPECT_MAX_BYTES;
            return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
        }, c.prototype.compare = function(t, e, n, r, o) {
            if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
            if (r >= o && e >= n) return 0;
            if (r >= o) return -1;
            if (e >= n) return 1;
            if (this === t) return 0;
            for (var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(i, s), u = this.slice(r, o), h = t.slice(e, n), f = 0; f < a; ++f)
                if (u[f] !== h[f]) {
                    i = u[f], s = h[f];
                    break
                }
            return i < s ? -1 : s < i ? 1 : 0
        }, c.prototype.includes = function(t, e, n) {
            return -1 !== this.indexOf(t, e, n)
        }, c.prototype.indexOf = function(t, e, n) {
            return v(this, t, e, n, !0)
        }, c.prototype.lastIndexOf = function(t, e, n) {
            return v(this, t, e, n, !1)
        }, c.prototype.write = function(t, e, n, r) {
            if (void 0 === e) r = "utf8", n = this.length, e = 0;
            else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
            else {
                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
            }
            var o = this.length - e;
            if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var i = !1;;) switch (r) {
                case "hex":
                    return b(this, t, e, n);
                case "utf8":
                case "utf-8":
                    return w(this, t, e, n);
                case "ascii":
                    return C(this, t, e, n);
                case "latin1":
                case "binary":
                    return E(this, t, e, n);
                case "base64":
                    return A(this, t, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return _(this, t, e, n);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), i = !0
            }
        }, c.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };

        function R(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
            return r
        }

        function S(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
            return r
        }

        function x(t, e, n) {
            var r = t.length;
            (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
            for (var o = "", i = e; i < n; ++i) o += F(t[i]);
            return o
        }

        function B(t, e, n) {
            for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
            return o
        }

        function P(t, e, n) {
            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
            if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function N(t, e, n, r, o, i) {
            if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
            if (n + r > t.length) throw new RangeError("Index out of range")
        }

        function O(t, e, n, r) {
            e < 0 && (e = 65535 + e + 1);
            for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
        }

        function U(t, e, n, r) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255
        }

        function M(t, e, n, r, o, i) {
            if (n + r > t.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function D(t, e, n, r, i) {
            return i || M(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4
        }

        function I(t, e, n, r, i) {
            return i || M(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8
        }
        c.prototype.slice = function(t, e) {
            var n, r = this.length;
            if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), c.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = c.prototype;
            else {
                var o = e - t;
                n = new c(o, void 0);
                for (var i = 0; i < o; ++i) n[i] = this[i + t]
            }
            return n
        }, c.prototype.readUIntLE = function(t, e, n) {
            t |= 0, e |= 0, n || P(t, e, this.length);
            for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
            return r
        }, c.prototype.readUIntBE = function(t, e, n) {
            t |= 0, e |= 0, n || P(t, e, this.length);
            for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o;
            return r
        }, c.prototype.readUInt8 = function(t, e) {
            return e || P(t, 1, this.length), this[t]
        }, c.prototype.readUInt16LE = function(t, e) {
            return e || P(t, 2, this.length), this[t] | this[t + 1] << 8
        }, c.prototype.readUInt16BE = function(t, e) {
            return e || P(t, 2, this.length), this[t] << 8 | this[t + 1]
        }, c.prototype.readUInt32LE = function(t, e) {
            return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
        }, c.prototype.readUInt32BE = function(t, e) {
            return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
        }, c.prototype.readIntLE = function(t, e, n) {
            t |= 0, e |= 0, n || P(t, e, this.length);
            for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
            return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r
        }, c.prototype.readIntBE = function(t, e, n) {
            t |= 0, e |= 0, n || P(t, e, this.length);
            for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) i += this[t + --r] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i
        }, c.prototype.readInt8 = function(t, e) {
            return e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
        }, c.prototype.readInt16LE = function(t, e) {
            e || P(t, 2, this.length);
            var n = this[t] | this[t + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, c.prototype.readInt16BE = function(t, e) {
            e || P(t, 2, this.length);
            var n = this[t + 1] | this[t] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, c.prototype.readInt32LE = function(t, e) {
            return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
        }, c.prototype.readInt32BE = function(t, e) {
            return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
        }, c.prototype.readFloatLE = function(t, e) {
            return e || P(t, 4, this.length), o.read(this, t, !0, 23, 4)
        }, c.prototype.readFloatBE = function(t, e) {
            return e || P(t, 4, this.length), o.read(this, t, !1, 23, 4)
        }, c.prototype.readDoubleLE = function(t, e) {
            return e || P(t, 8, this.length), o.read(this, t, !0, 52, 8)
        }, c.prototype.readDoubleBE = function(t, e) {
            return e || P(t, 8, this.length), o.read(this, t, !1, 52, 8)
        }, c.prototype.writeUIntLE = function(t, e, n, r) {
            (t = +t, e |= 0, n |= 0, r) || N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var o = 1,
                i = 0;
            for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255;
            return e + n
        }, c.prototype.writeUIntBE = function(t, e, n, r) {
            (t = +t, e |= 0, n |= 0, r) || N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var o = n - 1,
                i = 1;
            for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
            return e + n
        }, c.prototype.writeUInt8 = function(t, e, n) {
            return t = +t, e |= 0, n || N(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
        }, c.prototype.writeUInt16LE = function(t, e, n) {
            return t = +t, e |= 0, n || N(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : O(this, t, e, !0), e + 2
        }, c.prototype.writeUInt16BE = function(t, e, n) {
            return t = +t, e |= 0, n || N(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : O(this, t, e, !1), e + 2
        }, c.prototype.writeUInt32LE = function(t, e, n) {
            return t = +t, e |= 0, n || N(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : U(this, t, e, !0), e + 4
        }, c.prototype.writeUInt32BE = function(t, e, n) {
            return t = +t, e |= 0, n || N(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : U(this, t, e, !1), e + 4
        }, c.prototype.writeIntLE = function(t, e, n, r) {
            if (t = +t, e |= 0, !r) {
                var o = Math.pow(2, 8 * n - 1);
                N(this, t, e, n, o - 1, -o)
            }
            var i = 0,
                s = 1,
                a = 0;
            for (this[e] = 255 & t; ++i < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;
            return e + n
        }, c.prototype.writeIntBE = function(t, e, n, r) {
            if (t = +t, e |= 0, !r) {
                var o = Math.pow(2, 8 * n - 1);
                N(this, t, e, n, o - 1, -o)
            }
            var i = n - 1,
                s = 1,
                a = 0;
            for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255;
            return e + n
        }, c.prototype.writeInt8 = function(t, e, n) {
            return t = +t, e |= 0, n || N(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
        }, c.prototype.writeInt16LE = function(t, e, n) {
            return t = +t, e |= 0, n || N(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : O(this, t, e, !0), e + 2
        }, c.prototype.writeInt16BE = function(t, e, n) {
            return t = +t, e |= 0, n || N(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : O(this, t, e, !1), e + 2
        }, c.prototype.writeInt32LE = function(t, e, n) {
            return t = +t, e |= 0, n || N(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : U(this, t, e, !0), e + 4
        }, c.prototype.writeInt32BE = function(t, e, n) {
            return t = +t, e |= 0, n || N(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : U(this, t, e, !1), e + 4
        }, c.prototype.writeFloatLE = function(t, e, n) {
            return D(this, t, e, !0, n)
        }, c.prototype.writeFloatBE = function(t, e, n) {
            return D(this, t, e, !1, n)
        }, c.prototype.writeDoubleLE = function(t, e, n) {
            return I(this, t, e, !0, n)
        }, c.prototype.writeDoubleBE = function(t, e, n) {
            return I(this, t, e, !1, n)
        }, c.prototype.copy = function(t, e, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
            var o, i = r - n;
            if (this === t && n < e && e < r)
                for (o = i - 1; o >= 0; --o) t[o + e] = this[o + n];
            else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                for (o = 0; o < i; ++o) t[o + e] = this[o + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
            return i
        }, c.prototype.fill = function(t, e, n, r) {
            if ("string" == typeof t) {
                if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                    var o = t.charCodeAt(0);
                    o < 256 && (t = o)
                }
                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
            if (n <= e) return this;
            var i;
            if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                for (i = e; i < n; ++i) this[i] = t;
            else {
                var s = c.isBuffer(t) ? t : q(new c(t, r).toString()),
                    a = s.length;
                for (i = 0; i < n - e; ++i) this[i + e] = s[i % a]
            }
            return this
        };
        var L = /[^+\/0-9A-Za-z-_]/g;

        function F(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16)
        }

        function q(t, e) {
            var n;
            e = e || 1 / 0;
            for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
                if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                    if (!o) {
                        if (n > 56319) {
                            (e -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === r) {
                            (e -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        o = n;
                        continue
                    }
                    if (n < 56320) {
                        (e -= 3) > -1 && i.push(239, 191, 189), o = n;
                        continue
                    }
                    n = 65536 + (o - 55296 << 10 | n - 56320)
                } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                if (o = null, n < 128) {
                    if ((e -= 1) < 0) break;
                    i.push(n)
                } else if (n < 2048) {
                    if ((e -= 2) < 0) break;
                    i.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((e -= 3) < 0) break;
                    i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((e -= 4) < 0) break;
                    i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return i
        }

        function j(t) {
            return r.toByteArray(function(t) {
                if ((t = function(t) {
                        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                    }(t).replace(L, "")).length < 2) return "";
                for (; t.length % 4 != 0;) t += "=";
                return t
            }(t))
        }

        function Y(t, e, n, r) {
            for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
            return o
        }
    }).call(this, n(43))
}, function(t, e, n) {
    var r = n(49),
        o = n(11);
    t.exports = function(t) {
        var e = t.xdomain,
            n = t.xscheme,
            i = t.enablesXDR;
        try {
            if ("undefined" != typeof XMLHttpRequest && (!e || r)) return new XMLHttpRequest
        } catch (t) {}
        try {
            if ("undefined" != typeof XDomainRequest && !n && i) return new XDomainRequest
        } catch (t) {}
        if (!e) try {
            return new(o[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
        } catch (t) {}
    }
}, function(t, e) {
    t.exports = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")()
}, function(t, e, n) {
    var r = n(3),
        o = n(2);

    function i(t) {
        this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.withCredentials = t.withCredentials, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.isReactNative = t.isReactNative, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress
    }
    t.exports = i, o(i.prototype), i.prototype.onError = function(t, e) {
        var n = new Error(t);
        return n.type = "TransportError", n.description = e, this.emit("error", n), this
    }, i.prototype.open = function() {
        return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
    }, i.prototype.close = function() {
        return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
    }, i.prototype.send = function(t) {
        if ("open" !== this.readyState) throw new Error("Transport not open");
        this.write(t)
    }, i.prototype.onOpen = function() {
        this.readyState = "open", this.writable = !0, this.emit("open")
    }, i.prototype.onData = function(t) {
        var e = r.decodePacket(t, this.socket.binaryType);
        this.onPacket(e)
    }, i.prototype.onPacket = function(t) {
        this.emit("packet", t)
    }, i.prototype.onClose = function() {
        this.readyState = "closed", this.emit("close")
    }
}, , function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.flatMap = e.setAdd = e.normalizeURL = void 0, e.normalizeURL = function(t) {
        var e = new URL(t, location.href);
        return e.hash = "", e.href
    }, e.setAdd = function(t, e) {
        e && t && e.forEach((function(e) {
            t.add(e)
        }))
    }, e.flatMap = function(t, e) {
        var n = [];
        return t.forEach((function(t) {
            var r = e(t);
            n = n.concat(r)
        })), n
    }
}, function(t, e, n) {
    "use strict";
    var r = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }))
        },
        o = this && this.__generator || function(t, e) {
            var n, r, o, i, s = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1], o = i;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2], s.ops.push(i);
                                        break
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            i = e.call(t, s)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        },
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.requestSync = void 0;
    var s = i(n(1)),
        a = function() {
            function t(t) {
                var e = this,
                    n = t.name,
                    r = t.storeName,
                    o = t.version,
                    i = t.onVersionChange;
                this.db = null, this.onupgradeneeded = function(t) {
                    try {
                        var n = t.target.result;
                        if (s.default.info("onupgradeneeded", t.oldVersion, e.version), e.onVersionChange && e.onVersionChange(t.oldVersion, e.version), 0 === t.oldVersion) n.createObjectStore(e.storeName, {
                            keyPath: "url"
                        }).createIndex("timestamp", "timestamp", {
                            unique: !1
                        })
                    } catch (t) {
                        s.default.error("onupgradeneeded failed: " + t.message + " " + t.oldVersion + " " + e.version)
                    }
                }, this.close = function() {
                    e.db && (s.default.info("close db"), e.db.close(), e.db = null)
                }, this.name = n, this.storeName = r, this.version = o, this.onVersionChange = i
            }
            return t.getInstance = function(e) {
                if (t.dbInstance) {
                    var n = t.dbInstance.isEqual(e);
                    if (s.default.info("is db instance equal", n), n) return t.dbInstance;
                    t.dbInstance.close()
                }
                return t.dbInstance = new t(e)
            }, t.prototype.open = function() {
                return r(this, void 0, void 0, (function() {
                    var t, e = this;
                    return o(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return this.db ? [2] : (t = this, [4, new Promise((function(t, n) {
                                    var r = indexedDB.open(e.name, e.version);
                                    r.onerror = function() {
                                        return n(new Error("open db failed: " + r.error))
                                    }, r.onupgradeneeded = e.onupgradeneeded, r.onsuccess = function() {
                                        var n = r.result;
                                        n.onversionchange = e.close, n.onclose = function() {
                                            e.db = null
                                        }, t(n)
                                    }
                                }))]);
                            case 1:
                                return t.db = n.sent(), [2]
                        }
                    }))
                }))
            }, t.prototype.transaction = function(t, e, n) {
                return void 0 === n && (n = 0), r(this, void 0, Promise, (function() {
                    var r = this;
                    return o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, this.open()];
                            case 1:
                                return o.sent(), [4, new Promise((function(o, i) {
                                    if (!r.db) return n >= 3 ? void i(new Error("transaction timeout!")) : (s.default.info("db not found retrying", n), void o(r.transaction(t, e, n + 1)));
                                    var a = r.db.transaction(r.storeName, t);
                                    a.onabort = function() {
                                        return i(new Error("transaction onabort: " + a.error))
                                    }, a.oncomplete = function() {
                                        return o()
                                    }, e(a.objectStore(r.storeName), (function(t) {
                                        return o(t)
                                    }))
                                }))];
                            case 2:
                                return [2, o.sent()]
                        }
                    }))
                }))
            }, t.prototype.put = function(t, e) {
                return r(this, void 0, Promise, (function() {
                    return o(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.transaction("readwrite", (function(n, r) {
                                    n.put(t, e)
                                }))];
                            case 1:
                                return [2, n.sent()]
                        }
                    }))
                }))
            }, t.prototype.delete = function(t) {
                return r(this, void 0, Promise, (function() {
                    return o(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.transaction("readwrite", (function(e, n) {
                                    e.delete(t)
                                }))];
                            case 1:
                                return [2, e.sent()]
                        }
                    }))
                }))
            }, t.prototype.clear = function() {
                return r(this, void 0, Promise, (function() {
                    return o(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.transaction("readwrite", (function(t, e) {
                                    t.clear()
                                }))];
                            case 1:
                                return [2, t.sent()]
                        }
                    }))
                }))
            }, t.prototype.getCount = function(t) {
                return r(this, void 0, Promise, (function() {
                    return o(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.transaction("readonly", (function(e, n) {
                                    var r = e.count(t || void 0);
                                    r.onsuccess = function() {
                                        n(r.result)
                                    }
                                }))];
                            case 1:
                                return [2, e.sent()]
                        }
                    }))
                }))
            }, t.prototype.get = function(t) {
                return r(this, void 0, Promise, (function() {
                    return o(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return t ? [4, this.transaction("readonly", (function(e, n) {
                                    var r = e.get(t);
                                    r.onsuccess = function() {
                                        n(r.result)
                                    }
                                }))] : [2, null];
                            case 1:
                                return [2, e.sent()]
                        }
                    }))
                }))
            }, t.prototype.getAll = function(t, e) {
                return r(this, void 0, void 0, (function() {
                    return o(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.getAllMatching({
                                    query: t,
                                    count: e
                                })];
                            case 1:
                                return [2, n.sent()]
                        }
                    }))
                }))
            }, t.prototype.getAllMatching = function(t) {
                var e = void 0 === t ? {} : t,
                    n = e.index,
                    i = e.query,
                    s = void 0 === i ? null : i,
                    a = e.direction,
                    c = void 0 === a ? "next" : a,
                    u = e.count;
                return r(this, void 0, Promise, (function() {
                    return o(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.transaction("readonly", (function(t, e) {
                                    var r = n ? t.index(n) : t,
                                        o = [],
                                        i = r.openCursor(s, c);
                                    i.onsuccess = function() {
                                        var t = i.result;
                                        t ? (o.push(t.value), u && o.length >= u ? e(o) : t.continue()) : e(o)
                                    }
                                }))];
                            case 1:
                                return [2, t.sent()]
                        }
                    }))
                }))
            }, t.prototype.isEqual = function(t) {
                var e = t.name,
                    n = t.storeName,
                    r = t.version;
                return e === this.name && n === this.storeName && r === this.version
            }, t
        }();
    e.default = a, e.requestSync = function(t) {
        return new Promise((function(e) {
            t.onsuccess = function() {
                e(t)
            }
        }))
    }
}, function(t, e) {
    var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    t.exports = function(t) {
        var e = t,
            o = t.indexOf("["),
            i = t.indexOf("]"); - 1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
        for (var s, a, c = n.exec(t || ""), u = {}, h = 14; h--;) u[r[h]] = c[h] || "";
        return -1 != o && -1 != i && (u.source = e, u.host = u.host.substring(1, u.host.length - 1).replace(/;/g, ":"), u.authority = u.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), u.ipv6uri = !0), u.pathNames = function(t, e) {
            var n = e.replace(/\/{2,9}/g, "/").split("/");
            "/" != e.substr(0, 1) && 0 !== e.length || n.splice(0, 1);
            "/" == e.substr(e.length - 1, 1) && n.splice(n.length - 1, 1);
            return n
        }(0, u.path), u.queryKey = (s = u.query, a = {}, s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function(t, e, n) {
            e && (a[e] = n)
        })), a), u
    }
}, function(t, e, n) {
    (function(e) {
        t.exports = function(t) {
            return n && e.isBuffer(t) || r && (t instanceof ArrayBuffer || function(t) {
                return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
            }(t))
        };
        var n = "function" == typeof e && "function" == typeof e.isBuffer,
            r = "function" == typeof ArrayBuffer
    }).call(this, n(9).Buffer)
}, function(t, e, n) {
    var r = n(47),
        o = n(24),
        i = n(2),
        s = n(7),
        a = n(25),
        c = n(26),
        u = n(0)("socket.io-client:manager"),
        h = n(23),
        f = n(61),
        l = Object.prototype.hasOwnProperty;

    function p(t, e) {
        if (!(this instanceof p)) return new p(t, e);
        t && "object" == typeof t && (e = t, t = void 0), (e = e || {}).path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(!1 !== e.reconnection), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new f({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
        var n = e.parser || s;
        this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = !1 !== e.autoConnect, this.autoConnect && this.open()
    }
    t.exports = p, p.prototype.emitAll = function() {
        for (var t in this.emit.apply(this, arguments), this.nsps) l.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
    }, p.prototype.updateSocketIds = function() {
        for (var t in this.nsps) l.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t))
    }, p.prototype.generateId = function(t) {
        return ("/" === t ? "" : t + "#") + this.engine.id
    }, i(p.prototype), p.prototype.reconnection = function(t) {
        return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
    }, p.prototype.reconnectionAttempts = function(t) {
        return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts
    }, p.prototype.reconnectionDelay = function(t) {
        return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
    }, p.prototype.randomizationFactor = function(t) {
        return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor
    }, p.prototype.reconnectionDelayMax = function(t) {
        return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax
    }, p.prototype.timeout = function(t) {
        return arguments.length ? (this._timeout = t, this) : this._timeout
    }, p.prototype.maybeReconnectOnOpen = function() {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
    }, p.prototype.open = p.prototype.connect = function(t, e) {
        if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
        u("opening %s", this.uri), this.engine = r(this.uri, this.opts);
        var n = this.engine,
            o = this;
        this.readyState = "opening", this.skipReconnect = !1;
        var i = a(n, "open", (function() {
                o.onopen(), t && t()
            })),
            s = a(n, "error", (function(e) {
                if (u("connect_error"), o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", e), t) {
                    var n = new Error("Connection error");
                    n.data = e, t(n)
                } else o.maybeReconnectOnOpen()
            }));
        if (!1 !== this._timeout) {
            var c = this._timeout;
            u("connect attempt will timeout after %d", c), 0 === c && i.destroy();
            var h = setTimeout((function() {
                u("connect attempt timed out after %d", c), i.destroy(), n.close(), n.emit("error", "timeout"), o.emitAll("connect_timeout", c)
            }), c);
            this.subs.push({
                destroy: function() {
                    clearTimeout(h)
                }
            })
        }
        return this.subs.push(i), this.subs.push(s), this
    }, p.prototype.onopen = function() {
        u("open"), this.cleanup(), this.readyState = "open", this.emit("open");
        var t = this.engine;
        this.subs.push(a(t, "data", c(this, "ondata"))), this.subs.push(a(t, "ping", c(this, "onping"))), this.subs.push(a(t, "pong", c(this, "onpong"))), this.subs.push(a(t, "error", c(this, "onerror"))), this.subs.push(a(t, "close", c(this, "onclose"))), this.subs.push(a(this.decoder, "decoded", c(this, "ondecoded")))
    }, p.prototype.onping = function() {
        this.lastPing = new Date, this.emitAll("ping")
    }, p.prototype.onpong = function() {
        this.emitAll("pong", new Date - this.lastPing)
    }, p.prototype.ondata = function(t) {
        this.decoder.add(t)
    }, p.prototype.ondecoded = function(t) {
        this.emit("packet", t)
    }, p.prototype.onerror = function(t) {
        u("error", t), this.emitAll("error", t)
    }, p.prototype.socket = function(t, e) {
        var n = this.nsps[t];
        if (!n) {
            n = new o(this, t, e), this.nsps[t] = n;
            var r = this;
            n.on("connecting", i), n.on("connect", (function() {
                n.id = r.generateId(t)
            })), this.autoConnect && i()
        }

        function i() {
            ~h(r.connecting, n) || r.connecting.push(n)
        }
        return n
    }, p.prototype.destroy = function(t) {
        var e = h(this.connecting, t);
        ~e && this.connecting.splice(e, 1), this.connecting.length || this.close()
    }, p.prototype.packet = function(t) {
        u("writing packet %j", t);
        var e = this;
        t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, (function(n) {
            for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
            e.encoding = !1, e.processPacketQueue()
        })))
    }, p.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var t = this.packetBuffer.shift();
            this.packet(t)
        }
    }, p.prototype.cleanup = function() {
        u("cleanup");
        for (var t = this.subs.length, e = 0; e < t; e++) {
            this.subs.shift().destroy()
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
    }, p.prototype.close = p.prototype.disconnect = function() {
        u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
    }, p.prototype.onclose = function(t) {
        u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
    }, p.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect) return this;
        var t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
        else {
            var e = this.backoff.duration();
            u("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
            var n = setTimeout((function() {
                t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open((function(e) {
                    e ? (u("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), t.onreconnect())
                })))
            }), e);
            this.subs.push({
                destroy: function() {
                    clearTimeout(n)
                }
            })
        }
    }, p.prototype.onreconnect = function() {
        var t = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t)
    }
}, function(t, e, n) {
    var r = n(10),
        o = n(50),
        i = n(57),
        s = n(58);
    e.polling = function(t) {
        var e = !1,
            n = !1,
            s = !1 !== t.jsonp;
        if ("undefined" != typeof location) {
            var a = "https:" === location.protocol,
                c = location.port;
            c || (c = a ? 443 : 80), e = t.hostname !== location.hostname || c !== t.port, n = t.secure !== a
        }
        if (t.xdomain = e, t.xscheme = n, "open" in new r(t) && !t.forceJSONP) return new o(t);
        if (!s) throw new Error("JSONP disabled");
        return new i(t)
    }, e.websocket = s
}, function(t, e, n) {
    var r = n(12),
        o = n(4),
        i = n(3),
        s = n(5),
        a = n(22),
        c = n(0)("engine.io-client:polling");
    t.exports = h;
    var u = null != new(n(10))({
        xdomain: !1
    }).responseType;

    function h(t) {
        var e = t && t.forceBase64;
        u && !e || (this.supportsBinary = !1), r.call(this, t)
    }
    s(h, r), h.prototype.name = "polling", h.prototype.doOpen = function() {
        this.poll()
    }, h.prototype.pause = function(t) {
        var e = this;

        function n() {
            c("paused"), e.readyState = "paused", t()
        }
        if (this.readyState = "pausing", this.polling || !this.writable) {
            var r = 0;
            this.polling && (c("we are currently polling - waiting to pause"), r++, this.once("pollComplete", (function() {
                c("pre-pause polling complete"), --r || n()
            }))), this.writable || (c("we are currently writing - waiting to pause"), r++, this.once("drain", (function() {
                c("pre-pause writing complete"), --r || n()
            })))
        } else n()
    }, h.prototype.poll = function() {
        c("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
    }, h.prototype.onData = function(t) {
        var e = this;
        c("polling got data %s", t);
        i.decodePayload(t, this.socket.binaryType, (function(t, n, r) {
            if ("opening" === e.readyState && "open" === t.type && e.onOpen(), "close" === t.type) return e.onClose(), !1;
            e.onPacket(t)
        })), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : c('ignoring poll - transport state "%s"', this.readyState))
    }, h.prototype.doClose = function() {
        var t = this;

        function e() {
            c("writing close packet"), t.write([{
                type: "close"
            }])
        }
        "open" === this.readyState ? (c("transport open - closing"), e()) : (c("transport not open - deferring close"), this.once("open", e))
    }, h.prototype.write = function(t) {
        var e = this;
        this.writable = !1;
        var n = function() {
            e.writable = !0, e.emit("drain")
        };
        i.encodePayload(t, this.supportsBinary, (function(t) {
            e.doWrite(t, n)
        }))
    }, h.prototype.uri = function() {
        var t = this.query || {},
            e = this.secure ? "https" : "http",
            n = "";
        return !1 !== this.timestampRequests && (t[this.timestampParam] = a()), this.supportsBinary || t.sid || (t.b64 = 1), t = o.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port), t.length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
    }
}, function(t, e, n) {
    (function(e) {
        var r = n(8),
            o = Object.prototype.toString,
            i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
            s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
        t.exports = function t(n) {
            if (!n || "object" != typeof n) return !1;
            if (r(n)) {
                for (var o = 0, a = n.length; o < a; o++)
                    if (t(n[o])) return !0;
                return !1
            }
            if ("function" == typeof e && e.isBuffer && e.isBuffer(n) || "function" == typeof ArrayBuffer && n instanceof ArrayBuffer || i && n instanceof Blob || s && n instanceof File) return !0;
            if (n.toJSON && "function" == typeof n.toJSON && 1 === arguments.length) return t(n.toJSON(), !0);
            for (var c in n)
                if (Object.prototype.hasOwnProperty.call(n, c) && t(n[c])) return !0;
            return !1
        }
    }).call(this, n(9).Buffer)
}, function(t, e, n) {
    "use strict";
    var r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        i = {},
        s = 0,
        a = 0;

    function c(t) {
        var e = "";
        do {
            e = o[t % 64] + e, t = Math.floor(t / 64)
        } while (t > 0);
        return e
    }

    function u() {
        var t = c(+new Date);
        return t !== r ? (s = 0, r = t) : t + "." + c(s++)
    }
    for (; a < 64; a++) i[o[a]] = a;
    u.encode = c, u.decode = function(t) {
        var e = 0;
        for (a = 0; a < t.length; a++) e = 64 * e + i[t.charAt(a)];
        return e
    }, t.exports = u
}, function(t, e) {
    var n = [].indexOf;
    t.exports = function(t, e) {
        if (n) return t.indexOf(e);
        for (var r = 0; r < t.length; ++r)
            if (t[r] === e) return r;
        return -1
    }
}, function(t, e, n) {
    var r = n(7),
        o = n(2),
        i = n(60),
        s = n(25),
        a = n(26),
        c = n(0)("socket.io-client:socket"),
        u = n(4),
        h = n(21);
    t.exports = p;
    var f = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        },
        l = o.prototype.emit;

    function p(t, e, n) {
        this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
    }
    o(p.prototype), p.prototype.subEvents = function() {
        if (!this.subs) {
            var t = this.io;
            this.subs = [s(t, "open", a(this, "onopen")), s(t, "packet", a(this, "onpacket")), s(t, "close", a(this, "onclose"))]
        }
    }, p.prototype.open = p.prototype.connect = function() {
        return this.connected || (this.subEvents(), this.io.reconnecting || this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting")), this
    }, p.prototype.send = function() {
        var t = i(arguments);
        return t.unshift("message"), this.emit.apply(this, t), this
    }, p.prototype.emit = function(t) {
        if (f.hasOwnProperty(t)) return l.apply(this, arguments), this;
        var e = i(arguments),
            n = {
                type: (void 0 !== this.flags.binary ? this.flags.binary : h(e)) ? r.BINARY_EVENT : r.EVENT,
                data: e,
                options: {}
            };
        return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (c("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this
    }, p.prototype.packet = function(t) {
        t.nsp = this.nsp, this.io.packet(t)
    }, p.prototype.onopen = function() {
        if (c("transport is open - connecting"), "/" !== this.nsp)
            if (this.query) {
                var t = "object" == typeof this.query ? u.encode(this.query) : this.query;
                c("sending connect packet with query %s", t), this.packet({
                    type: r.CONNECT,
                    query: t
                })
            } else this.packet({
                type: r.CONNECT
            })
    }, p.prototype.onclose = function(t) {
        c("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t)
    }, p.prototype.onpacket = function(t) {
        var e = t.nsp === this.nsp,
            n = t.type === r.ERROR && "/" === t.nsp;
        if (e || n) switch (t.type) {
            case r.CONNECT:
                this.onconnect();
                break;
            case r.EVENT:
            case r.BINARY_EVENT:
                this.onevent(t);
                break;
            case r.ACK:
            case r.BINARY_ACK:
                this.onack(t);
                break;
            case r.DISCONNECT:
                this.ondisconnect();
                break;
            case r.ERROR:
                this.emit("error", t.data)
        }
    }, p.prototype.onevent = function(t) {
        var e = t.data || [];
        c("emitting event %j", e), null != t.id && (c("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? l.apply(this, e) : this.receiveBuffer.push(e)
    }, p.prototype.ack = function(t) {
        var e = this,
            n = !1;
        return function() {
            if (!n) {
                n = !0;
                var o = i(arguments);
                c("sending ack %j", o), e.packet({
                    type: h(o) ? r.BINARY_ACK : r.ACK,
                    id: t,
                    data: o
                })
            }
        }
    }, p.prototype.onack = function(t) {
        var e = this.acks[t.id];
        "function" == typeof e ? (c("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : c("bad ack %s", t.id)
    }, p.prototype.onconnect = function() {
        this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
    }, p.prototype.emitBuffered = function() {
        var t;
        for (t = 0; t < this.receiveBuffer.length; t++) l.apply(this, this.receiveBuffer[t]);
        for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
        this.sendBuffer = []
    }, p.prototype.ondisconnect = function() {
        c("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
    }, p.prototype.destroy = function() {
        if (this.subs) {
            for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
            this.subs = null
        }
        this.io.destroy(this)
    }, p.prototype.close = p.prototype.disconnect = function() {
        return this.connected && (c("performing disconnect (%s)", this.nsp), this.packet({
            type: r.DISCONNECT
        })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }, p.prototype.compress = function(t) {
        return this.flags.compress = t, this
    }, p.prototype.binary = function(t) {
        return this.flags.binary = t, this
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return t.on(e, n), {
            destroy: function() {
                t.removeListener(e, n)
            }
        }
    }
}, function(t, e) {
    var n = [].slice;
    t.exports = function(t, e) {
        if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
        var r = n.call(arguments, 2);
        return function() {
            return e.apply(t, r.concat(n.call(arguments)))
        }
    }
}, , , function(t, e, n) {
    "use strict";
    var r = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }))
        },
        o = this && this.__generator || function(t, e) {
            var n, r, o, i, s = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1], o = i;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2], s.ops.push(i);
                                        break
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            i = e.call(t, s)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        },
        i = this && this.__values || function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
            if (n) return n.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && r >= t.length && (t = void 0), {
                        value: t && t[r++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        s = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = s(n(30)),
        c = s(n(15)),
        u = s(n(32)),
        h = s(n(33)),
        f = n(6),
        l = s(n(1)),
        p = s(n(35)),
        d = function() {
            function t(t) {
                var e = this;
                void 0 === t && (t = {}), this.logger = l.default, this.setConfig = function(t) {
                    var n = t.precacheAssets,
                        i = t.routeMap,
                        s = t.maxEntries,
                        h = void 0 === s ? f.DEFAULT_MAX_ENTRIES : s,
                        d = t.cacheAssets,
                        y = void 0 === d ? f.DEFAULT_CACHE_ASSETS : d,
                        g = t.cacheAssetsReg,
                        v = void 0 === g ? f.DEFAULT_CACHE_ASSETS_REG : g,
                        m = t.blackList,
                        b = void 0 === m ? f.DEFAULT_BLACK_LIST : m,
                        w = t.debug,
                        C = t.precacheConfigReqUrl,
                        E = t.precacheConfigReqMethod,
                        A = t.enableDevAssetCache,
                        _ = t.devAssets,
                        k = t.goldLogConfig;
                    return r(e, void 0, void 0, (function() {
                        var t, e, r = this;
                        return o(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 4, , 5]), l.default.setConfig(w, k), this.db = c.default.getInstance({
                                        name: f.dbName,
                                        storeName: f.storeName,
                                        version: f.CACHE_VERSION,
                                        onVersionChange: function() {
                                            r.workCache.refresh()
                                        }
                                    }), this.workCache = a.default.getInstance({
                                        app: this,
                                        cacheName: f.cacheName,
                                        maxEntries: h
                                    }), this.route = u.default.getInstance({
                                        app: this,
                                        cacheAssets: y,
                                        cacheAssetsReg: v,
                                        blackList: b,
                                        enableDevAssetCache: A,
                                        devAssets: _
                                    }), [4, this.db.open()];
                                case 1:
                                    return o.sent(), this.precache = p.default.getInstance({
                                        precacheAssets: n,
                                        routeMap: i,
                                        precacheConfigReqUrl: C,
                                        precacheConfigReqMethod: E,
                                        onPrecacheChange: this.workCache.onPrecacheChange
                                    }), (null == b ? void 0 : b.length) ? (t = l.default.time(), [4, this.workCache.clearEntriesByFilter((function(t) {
                                        return r.route.isBlackList(t.url)
                                    }))]) : [3, 3];
                                case 2:
                                    o.sent(), l.default.timeEnd(t, "clear storage"), o.label = 3;
                                case 3:
                                    return [3, 5];
                                case 4:
                                    return e = o.sent(), l.default.error("setConfig failed: " + e.message), [3, 5];
                                case 5:
                                    return [2]
                            }
                        }))
                    }))
                }, this.install = function() {}, this.message = function(t) {
                    return r(e, void 0, void 0, (function() {
                        var e, n, r, i, s;
                        return o(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    switch (o.trys.push([0, 7, , 8]), e = JSON.parse(t.data), l.default.info("receive message", t), n = e.data, r = e.type, r) {
                                        case "SKIP_WAITING":
                                            return [3, 1];
                                        case "CONFIG":
                                            return [3, 2];
                                        case "LOADED":
                                            return [3, 4];
                                        case "DESTROY":
                                            return [3, 5]
                                    }
                                    return [3, 6];
                                case 1:
                                    return self.skipWaiting(), [3, 6];
                                case 2:
                                    return [4, this.triggerEvent("onUpdateConfig", n)];
                                case 3:
                                    return i = o.sent(), this.setConfig(i), [3, 6];
                                case 4:
                                    return this.triggerEvent("onPageLoaded"), [3, 6];
                                case 5:
                                    this.precache.destroy(), o.label = 6;
                                case 6:
                                    return [3, 8];
                                case 7:
                                    return s = o.sent(), l.default.error("resolve message failed: " + s.message + " " + t.data), [3, 8];
                                case 8:
                                    return [2]
                            }
                        }))
                    }))
                }, this.activate = function() {}, this.triggerNetworkIdle = function() {
                    e.triggerEvent("onNetworkIdle")
                }, this.fetch = function(t) {
                    if (e.workCache && e.route.isMatched(t.request.url) && (e.timerNetworkIdle && self.clearTimeout(e.timerNetworkIdle), e.timerNetworkIdle = self.setTimeout(e.triggerNetworkIdle, f.NETWORK_IDLE_TIMEOUT), e.workCache.preMatch(t.request.url))) {
                        var n = l.default.time();
                        t.respondWith(e.workCache.getCache(t.request).then((function(r) {
                            if (r) return l.default.timeEnd(n, "fetch", t.request.url), r;
                            var o = Date.now();
                            return fetch(t.request).then((function(r) {
                                return e.workCache.addCacheFromFetch(t.request, r, Date.now() - o), l.default.timeEnd(n, "fetch", t.request.url), r
                            }))
                        })))
                    }
                }, this.triggerEventAsync = function(t, n) {
                    var r, o;
                    l.default.info("event triggered", t, n);
                    try {
                        for (var s = i(e.plugins), a = s.next(); !a.done; a = s.next()) {
                            var c = a.value,
                                u = c[t];
                            if (u) try {
                                l.default.info("start", c.pluginName, n), n = u(n), l.default.info("end", c.pluginName, n)
                            } catch (e) {
                                l.default.info("failed", c.pluginName, n), l.default.error("triggerEventAsync failed(" + t + "): " + e.message)
                            }
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            a && !a.done && (o = s.return) && o.call(s)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return n
                }, this.triggerEvent = function(t, n) {
                    return r(e, void 0, void 0, (function() {
                        var e, r, s, a, c, u, h, f;
                        return o(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    l.default.info("event triggered", t, n), o.label = 1;
                                case 1:
                                    o.trys.push([1, 8, 9, 10]), e = i(this.plugins), r = e.next(), o.label = 2;
                                case 2:
                                    if (r.done) return [3, 7];
                                    if (s = r.value, !(a = s[t])) return [3, 6];
                                    o.label = 3;
                                case 3:
                                    return o.trys.push([3, 5, , 6]), l.default.info("start", s.pluginName, n), [4, a(n)];
                                case 4:
                                    return n = o.sent(), l.default.info("end", s.pluginName, n), [3, 6];
                                case 5:
                                    return c = o.sent(), l.default.info("failed", s.pluginName, n), l.default.error("triggerEvent failed(" + t + "): " + c.message), [3, 6];
                                case 6:
                                    return r = e.next(), [3, 2];
                                case 7:
                                    return [3, 10];
                                case 8:
                                    return u = o.sent(), h = {
                                        error: u
                                    }, [3, 10];
                                case 9:
                                    try {
                                        r && !r.done && (f = e.return) && f.call(e)
                                    } finally {
                                        if (h) throw h.error
                                    }
                                    return [7];
                                case 10:
                                    return [2, n]
                            }
                        }))
                    }))
                }, this.plugins = h.default.concat(t.plugins || []).map((function(t) {
                    return t.app = e, t
                }))
            }
            return t.prototype.init = function() {
                return self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), self.addEventListener("message", this.message), self.addEventListener("fetch", this.fetch), self.addEventListener("error", (function(t) {
                    l.default.error("uncaught " + t.message)
                })), self.addEventListener("unhandledrejection", (function(t) {
                    l.default.error("uncaught reject " + t.reason)
                })), this
            }, t
        }();
    self.PWAInstance = d
}, function(t, e, n) {
    "use strict";
    var r = this && this.__assign || function() {
            return (r = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        },
        o = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }))
        },
        i = this && this.__generator || function(t, e) {
            var n, r, o, i, s = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1], o = i;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2], s.ops.push(i);
                                        break
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            i = e.call(t, s)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        },
        s = this && this.__values || function(t) {
            var e = "function" == typeof Symbol && Symbol.iterator,
                n = e && t[e],
                r = 0;
            if (n) return n.call(t);
            if (t && "number" == typeof t.length) return {
                next: function() {
                    return t && r >= t.length && (t = void 0), {
                        value: t && t[r++],
                        done: !t
                    }
                }
            };
            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
        },
        a = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var c = n(14),
        u = n(15),
        h = n(31),
        f = a(n(1)),
        l = new Set,
        p = function() {
            function t(t) {
                var e = this;
                this.cachesMap = l, this.buildCaches = function(t) {
                    return Promise.resolve(t.keys()).then((function(t) {
                        e.cachesMap = new Set(t.map((function(t) {
                            return t.url
                        })))
                    }))
                }, this.init(t)
            }
            return t.prototype.init = function(t) {
                return o(this, void 0, void 0, (function() {
                    var e;
                    return i(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.open(t)];
                            case 1:
                                return e = n.sent(), [4, this.buildCaches(e)];
                            case 2:
                                return n.sent(), [2]
                        }
                    }))
                }))
            }, t.prototype.deleteCache = function(t) {
                return this.cachesMap = l, caches.delete(t)
            }, t.prototype.open = function(t) {
                return caches.open(t)
            }, t.prototype.delete = function(t, e, n) {
                var r = this;
                return t.delete(e, n).then((function(e) {
                    return r.buildCaches(t), e
                }))
            }, t.prototype.keys = function(t, e, n) {
                return t.keys(e, n)
            }, t.prototype.put = function(t, e, n) {
                var r = this;
                return t.put(e, n).then((function() {
                    return r.buildCaches(t)
                }))
            }, t.prototype.match = function(t, e, n) {
                return t.match(e, n)
            }, t.prototype.preMatch = function(t) {
                return this.cachesMap.has(t)
            }, t
        }(),
        d = function() {
            function t(t) {
                var e = this,
                    n = t.app,
                    a = t.maxEntries,
                    c = t.cacheName;
                this.onPrecacheChange = function(t, n) {
                    return o(e, void 0, void 0, (function() {
                        return i(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.addPrecacheByUrls(t)];
                                case 1:
                                    return e.sent(), this.allPrecacheUrl = new Set(n), [2]
                            }
                        }))
                    }))
                }, this.clearEntriesByFilter = function(t) {
                    return o(e, void 0, void 0, (function() {
                        var e, n, r, o;
                        return i(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, null === (o = this.app.db) || void 0 === o ? void 0 : o.getAll()];
                                case 1:
                                    return (e = i.sent()) ? (n = e.map((function(t) {
                                        return t.url
                                    })), r = e.filter(t).map((function(t) {
                                        return t.url
                                    })), f.default.info("filter url:", r, n), [4, Promise.all([this.clearCacheEntriesWithValid(new Set(r), new Set(n)), this.clearDbEntries(r)])]) : [2];
                                case 2:
                                    return i.sent(), [2]
                            }
                        }))
                    }))
                }, this.updateCache = function(t) {
                    return o(e, void 0, void 0, (function() {
                        return i(this, (function(e) {
                            return [2, this.updateCaches([t])]
                        }))
                    }))
                }, this.updateCaches = function(t) {
                    return o(e, void 0, void 0, (function() {
                        var e, n, r, o, a, c;
                        return i(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    i.trys.push([0, 5, 6, 7]), e = s(t), n = e.next(), i.label = 1;
                                case 1:
                                    return n.done ? [3, 4] : (r = n.value, [4, this.updateTimestamp(r)]);
                                case 2:
                                    i.sent(), i.label = 3;
                                case 3:
                                    return n = e.next(), [3, 1];
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return o = i.sent(), a = {
                                        error: o
                                    }, [3, 7];
                                case 6:
                                    try {
                                        n && !n.done && (c = e.return) && c.call(e)
                                    } finally {
                                        if (a) throw a.error
                                    }
                                    return [7];
                                case 7:
                                    return [2]
                            }
                        }))
                    }))
                }, this.addCacheFromFetch = function(t, n, s) {
                    return o(e, void 0, void 0, (function() {
                        var e, o, a;
                        return i(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 7, , 8]), [4, Promise.resolve().then((function() {
                                        return n.clone()
                                    }))];
                                case 1:
                                    return n = i.sent(), this.isSucceedResponse(n) ? [4, this.cacheUtil.open(this.cacheName)] : [2];
                                case 2:
                                    return e = i.sent(), [4, this.app.triggerEvent("onCacheWillAddToStorage", {
                                        request: t,
                                        response: n,
                                        downloadCost: s
                                    })];
                                case 3:
                                    return (o = i.sent()).response ? [4, this.cacheUtil.put(e, t, o.response)] : [2];
                                case 4:
                                    return i.sent(), [4, this.updateCache(r(r({}, o), {
                                        url: t.url,
                                        downloadCost: s
                                    }))];
                                case 5:
                                    return i.sent(), f.default.info("add cached success by fetch", t.url), [4, this.clearEntriesToHighWaterMark()];
                                case 6:
                                    return i.sent(), [3, 8];
                                case 7:
                                    return a = i.sent(), f.default.error("cache add failed (from fetch): " + a.message), [3, 8];
                                case 8:
                                    return [2]
                            }
                        }))
                    }))
                }, this.addPrecacheByUrls = function(t) {
                    return o(e, void 0, void 0, (function() {
                        var e, n, o, a, c, u, h, l, p, d, y, g, v;
                        return i(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return e = [], [4, this.cacheUtil.open(this.cacheName)];
                                case 1:
                                    n = i.sent(), i.label = 2;
                                case 2:
                                    i.trys.push([2, 12, 13, 14]), o = s(t), a = o.next(), i.label = 3;
                                case 3:
                                    if (a.done) return [3, 11];
                                    c = a.value, i.label = 4;
                                case 4:
                                    return i.trys.push([4, 9, , 10]), u = 0, [4, this.cacheUtil.match(n, c)];
                                case 5:
                                    return i.sent() ? [3, 10] : (h = Date.now(), [4, fetch(c)]);
                                case 6:
                                    if (l = i.sent(), !this.isSucceedResponse(l)) throw new Error(c + " response with status " + l.status);
                                    return u = Date.now() - h, [4, this.app.triggerEvent("onCacheWillAddToStorage", {
                                        url: c,
                                        response: l,
                                        downloadCost: u
                                    })];
                                case 7:
                                    return (p = i.sent()).response ? [4, this.cacheUtil.put(n, c, p.response)] : [3, 10];
                                case 8:
                                    return i.sent(), e.push(r(r({}, p), {
                                        url: c,
                                        downloadCost: u,
                                        isPrecache: !0
                                    })), f.default.info("add precache success", c), [3, 10];
                                case 9:
                                    return d = i.sent(), f.default.error("precache add failed: " + d.message + " " + c), [3, 10];
                                case 10:
                                    return a = o.next(), [3, 3];
                                case 11:
                                    return [3, 14];
                                case 12:
                                    return y = i.sent(), g = {
                                        error: y
                                    }, [3, 14];
                                case 13:
                                    try {
                                        a && !a.done && (v = o.return) && v.call(o)
                                    } finally {
                                        if (g) throw g.error
                                    }
                                    return [7];
                                case 14:
                                    return [4, this.updateCaches(e)];
                                case 15:
                                    return i.sent(), [4, this.clearEntriesToHighWaterMark()];
                                case 16:
                                    return i.sent(), [2]
                            }
                        }))
                    }))
                }, this.getCache = function(t) {
                    return o(e, void 0, void 0, (function() {
                        var e, n, r, o;
                        return i(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 3, , 4]), e = f.default.time(), [4, this.cacheUtil.open(this.cacheName)];
                                case 1:
                                    return n = i.sent(), [4, this.cacheUtil.match(n, t)];
                                case 2:
                                    return (r = i.sent()) ? (f.default.timeEnd(e, "cache match overhead", t.url), this.isSucceedResponse(r) ? (this.updateTimestamp({
                                        url: t.url,
                                        isUse: !0
                                    }), [2, r]) : (this.clearCacheEntries([t.url]), this.clearDbEntries([t.url]), [2])) : [2];
                                case 3:
                                    return o = i.sent(), f.default.error("get cache failed " + o.message), [2, null];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, this.app = n, this.maxEntries = a, this.cacheName = c, this.cacheUtil = new p(c)
            }
            return t.getInstance = function(e) {
                if (t.workCache) {
                    var n = t.workCache.isEqual(e);
                    if (f.default.info("is workCache instance equal", n), n) return t.workCache
                }
                return t.workCache = new t(e)
            }, t.prototype.isSucceedResponse = function(t) {
                return 200 === (null == t ? void 0 : t.status)
            }, t.prototype.updateTimestamp = function(t) {
                var e, n;
                return o(this, void 0, void 0, (function() {
                    var r, o, s, a, u, l, p, d, y, g, v, m;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 5, , 6]), r = t.url, o = t.isPrecache, s = t.downloadCost, a = void 0 === s ? 0 : s, u = t.isUse, l = "update ts " + r, p = f.default.time(), r = c.normalizeURL(r), [4, null === (e = this.app.db) || void 0 === e ? void 0 : e.get(r)];
                            case 1:
                                return d = i.sent(), y = Date.now(), g = "onCacheDbWillUpdated", d ? (d.timestamp = y, d.usedCount = (d.usedCount || 0) + 1, f.default.info("update", d), u && (d.isPrecache && 1 === d.usedCount && f.default.goldlog("PrecacheSaveTime", {
                                    data: {
                                        save_time: d.downloadCost,
                                        resource_id: r
                                    }
                                }), g = "onCacheUsed")) : (d = new h.CacheEntry({
                                    url: r,
                                    timestamp: y,
                                    cachedTimestamp: y,
                                    isPrecache: o,
                                    usedCount: 0,
                                    downloadCost: a
                                }), f.default.info("put new cache entry", d)), g ? [4, this.app.triggerEvent(g, {
                                    entry: d,
                                    info: t
                                })] : [3, 3];
                            case 2:
                                v = i.sent().entry, d = v, i.label = 3;
                            case 3:
                                return [4, null === (n = this.app.db) || void 0 === n ? void 0 : n.put(d)];
                            case 4:
                                return i.sent(), f.default.timeEnd(p, l), [3, 6];
                            case 5:
                                return m = i.sent(), f.default.error("updateTimestamp failed: " + m.message), [3, 6];
                            case 6:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.getHighWaterMarkUrls = function() {
                var t;
                return o(this, void 0, Promise, (function() {
                    var e = this;
                    return i(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, null === (t = this.app.db) || void 0 === t ? void 0 : t.transaction("readonly", (function(t, n) {
                                    return o(e, void 0, void 0, (function() {
                                        var e, r, o, s, a = this;
                                        return i(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return [4, u.requestSync(t.count())];
                                                case 1:
                                                    return (e = i.sent().result) < this.maxEntries ? (n([]), [2]) : (r = e - .6 * this.maxEntries, o = t.index("timestamp").openCursor(null, "next"), s = [], o.onsuccess = function() {
                                                        var t = o.result;
                                                        if (t && r > 0) {
                                                            r--;
                                                            var e = t.value;
                                                            e.isPrecache && a.allPrecacheUrl.has(e.url) || s.push(e.url), t.continue()
                                                        } else n(s)
                                                    }, [2])
                                            }
                                        }))
                                    }))
                                }))];
                            case 1:
                                return [2, n.sent() || []]
                        }
                    }))
                }))
            }, t.prototype.clearDbEntries = function(t) {
                var e;
                return o(this, void 0, void 0, (function() {
                    var n, r, o, a, c, u;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                i.trys.push([0, 5, 6, 7]), n = s(t), r = n.next(), i.label = 1;
                            case 1:
                                return r.done ? [3, 4] : (o = r.value, [4, null === (e = this.app.db) || void 0 === e ? void 0 : e.delete(o)]);
                            case 2:
                                i.sent(), f.default.info("clear db:", o), i.label = 3;
                            case 3:
                                return r = n.next(), [3, 1];
                            case 4:
                                return [3, 7];
                            case 5:
                                return a = i.sent(), c = {
                                    error: a
                                }, [3, 7];
                            case 6:
                                try {
                                    r && !r.done && (u = n.return) && u.call(n)
                                } finally {
                                    if (c) throw c.error
                                }
                                return [7];
                            case 7:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.clearCacheEntries = function(t) {
                return o(this, void 0, void 0, (function() {
                    var e, n, r, o, a, c, u;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.cacheUtil.open(this.cacheName)];
                            case 1:
                                e = i.sent(), i.label = 2;
                            case 2:
                                i.trys.push([2, 7, 8, 9]), n = s(t), r = n.next(), i.label = 3;
                            case 3:
                                return r.done ? [3, 6] : (o = r.value, [4, this.cacheUtil.delete(e, o, {
                                    ignoreMethod: !1,
                                    ignoreSearch: !1,
                                    ignoreVary: !1
                                })]);
                            case 4:
                                i.sent(), f.default.info("clear caches:", o), i.label = 5;
                            case 5:
                                return r = n.next(), [3, 3];
                            case 6:
                                return [3, 9];
                            case 7:
                                return a = i.sent(), c = {
                                    error: a
                                }, [3, 9];
                            case 8:
                                try {
                                    r && !r.done && (u = n.return) && u.call(n)
                                } finally {
                                    if (c) throw c.error
                                }
                                return [7];
                            case 9:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.clearEntriesToHighWaterMark = function() {
                return o(this, void 0, void 0, (function() {
                    var t, e;
                    return i(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return f.default.info(this.isRunning, "is clearing"), this.isRunning ? [2] : (t = f.default.time(), this.isRunning = !0, [4, this.getHighWaterMarkUrls()]);
                            case 1:
                                return e = n.sent(), f.default.info(e, "urlsExpired"), (null == e ? void 0 : e.length) ? [4, Promise.all([this.clearCacheEntries(e), this.clearDbEntries(e)])] : [3, 3];
                            case 2:
                                n.sent(), n.label = 3;
                            case 3:
                                return this.isRunning = !1, f.default.timeEnd(t, "clear entries"), [2]
                        }
                    }))
                }))
            }, t.prototype.clearCacheEntriesWithValid = function(t, e) {
                return o(this, void 0, void 0, (function() {
                    var n, r, o, a, c, u, h, f;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.cacheUtil.open(this.cacheName)];
                            case 1:
                                return n = i.sent(), [4, this.cacheUtil.keys(n)];
                            case 2:
                                r = i.sent(), i.label = 3;
                            case 3:
                                i.trys.push([3, 8, 9, 10]), o = s(r), a = o.next(), i.label = 4;
                            case 4:
                                return a.done ? [3, 7] : (c = a.value, e.has(c.url) && !t.has(c.url) ? [3, 6] : [4, this.cacheUtil.delete(n, c, {
                                    ignoreMethod: !1,
                                    ignoreSearch: !1,
                                    ignoreVary: !1
                                })]);
                            case 5:
                                i.sent(), i.label = 6;
                            case 6:
                                return a = o.next(), [3, 4];
                            case 7:
                                return [3, 10];
                            case 8:
                                return u = i.sent(), h = {
                                    error: u
                                }, [3, 10];
                            case 9:
                                try {
                                    a && !a.done && (f = o.return) && f.call(o)
                                } finally {
                                    if (h) throw h.error
                                }
                                return [7];
                            case 10:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.preMatch = function(t) {
                return this.cacheUtil.preMatch(t)
            }, t.prototype.refresh = function() {
                return o(this, void 0, void 0, (function() {
                    return i(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return f.default.info("refresh the cache storage"), [4, this.cacheUtil.deleteCache(this.cacheName)];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, t.prototype.isEqual = function(t) {
                var e = t.maxEntries,
                    n = t.cacheName;
                return e === this.maxEntries && n === this.cacheName
            }, t
        }();
    e.default = d
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CacheEntry = void 0;
    var r = function(t) {
        var e = t.url,
            n = t.timestamp,
            r = t.isPrecache,
            o = t.cachedTimestamp,
            i = t.usedCount,
            s = t.downloadCost;
        this.url = e, this.timestamp = n, this.isPrecache = r, this.cachedTimestamp = o, this.usedCount = i, this.downloadCost = s
    };
    e.CacheEntry = r
}, function(t, e, n) {
    "use strict";
    var r = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = r(n(1)),
        i = function(t, e) {
            return t && !!(null == e ? void 0 : e.find((function(e) {
                return t.includes(e)
            })))
        },
        s = function() {
            function t(t) {
                var e = this;
                this.isBlackList = function(t) {
                    return i(t, e.blackList)
                }, this.isMatched = function(t) {
                    try {
                        return !e.isBlackList(t) && e.isCacheAsset(t)
                    } catch (e) {
                        return o.default.error("isMatched failed: " + e.message + " " + t), !1
                    }
                }, this.setConfig(t)
            }
            return t.getInstance = function(e) {
                return t.routeInstance ? (t.routeInstance.setConfig(e), t.routeInstance) : t.routeInstance = new t(e)
            }, t.prototype.setConfig = function(t) {
                var e = t.app,
                    n = t.cacheAssets,
                    r = t.cacheAssetsReg,
                    o = t.blackList,
                    i = t.enableDevAssetCache,
                    s = t.devAssets;
                this.app = e, this.cacheAssets = n, this.cacheAssetsReg = r, this.blackList = o, void 0 !== i && (this.enableDevAssetCache = i), this.devAssets = s
            }, t.prototype.isCacheAsset = function(t) {
                var e, n;
                return i(t, this.devAssets) ? n = this.enableDevAssetCache : (n = i(t, this.cacheAssets)) || (n = !!(null === (e = this.cacheAssetsReg) || void 0 === e ? void 0 : e.find((function(e) {
                    return e && new RegExp(e).test(t)
                })))), n && (n = !!this.app.triggerEventAsync("onRouteMatch", t)), n
            }, t
        }();
    e.default = s
}, function(t, e, n) {
    "use strict";
    var r = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = [new(r(n(34)).default)];
    e.default = o
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(6),
        o = function() {
            var t = this;
            this.pluginName = "expiration", this.onRouteMatch = function(e) {
                return !e || r.HAS_NUMBER_REG.test(function(t) {
                    for (var e = 1; e < t.length; e++) {
                        var n = t[e];
                        if ("?" !== t[e - 1] && "?" !== t[e + 1] && "?" === n) return t.slice(0, e - 1)
                    }
                    return t
                }(e)) ? e : (t.app.logger.info(e + " has no version information, skipped"), null)
            }
        };
    e.default = o
}, function(t, e, n) {
    "use strict";
    var r = this && this.__awaiter || function(t, e, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function s(t) {
                    try {
                        c(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function a(t) {
                    try {
                        c(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function c(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                        t(e)
                    }))).then(s, a)
                }
                c((r = r.apply(t, e || [])).next())
            }))
        },
        o = this && this.__generator || function(t, e) {
            var n, r, o, i, s = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; s;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1], o = i;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2], s.ops.push(i);
                                        break
                                    }
                                    o[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            i = e.call(t, s)
                        } catch (t) {
                            i = [6, t], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        },
        i = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = n(14),
        a = i(n(36)),
        c = i(n(62)),
        u = i(n(1)),
        h = {
            io: a.default,
            http: c.default
        },
        f = function() {
            function t(t) {
                var e = this;
                this.onPrecacheConfigUpdated = function(t) {
                    var n = t.routeMap,
                        i = t.precacheAssets;
                    return r(e, void 0, void 0, (function() {
                        var t, e, r = this;
                        return o(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), n || i ? (n && (this.routeMap = n), i && (this.precacheAssets = i), [4, this.generatePrecacheUrlsByClients(this.precacheAssets)]) : [2];
                                case 1:
                                    return t = o.sent(), this.onPrecacheChange && this.onPrecacheChange(Array.from(t), s.flatMap(Object.keys(this.precacheAssets), (function(t) {
                                        return r.precacheAssets[t]
                                    }))), [3, 3];
                                case 2:
                                    return e = o.sent(), u.default.error("onPrecacheConfigUpdated failed: " + e.message), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }, this.initialize(t)
            }
            return t.getInstance = function(e) {
                return t.precache ? (t.precache.initialize(e), t.precache) : t.precache = new t(e)
            }, t.prototype.initialize = function(t) {
                this.setConfig(t), this.setUpdateChannel(t)
            }, t.prototype.setConfig = function(t) {
                var e = t.routeMap,
                    n = t.precacheAssets,
                    r = t.onPrecacheChange;
                this.routeMap = e, this.precacheAssets = n, this.onPrecacheChange = r, n && this.onPrecacheConfigUpdated({
                    precacheAssets: n
                })
            }, t.prototype.setUpdateChannel = function(t) {
                var e, n = t.precacheConfigReqUrl,
                    r = t.precacheConfigReqMethod,
                    o = void 0 === r ? "io" : r;
                try {
                    if (this.precacheConfigReqUrl === n && this.precacheConfigReqMethod === o || (null === (e = this.channel) || void 0 === e || e.destroy(), this.channel = null), this.precacheConfigReqUrl = n, this.precacheConfigReqMethod = o, !this.precacheConfigReqUrl) return;
                    this.channel = this.channel || h[o].getInstance({
                        url: n,
                        onUpdate: this.onPrecacheConfigUpdated
                    })
                } catch (t) {
                    u.default.error("setUpdateChannel failed: " + t.message + " " + n + " " + o)
                }
            }, t.prototype.generatePrecacheUrlsByClients = function(t) {
                return r(this, void 0, Promise, (function() {
                    var e, n, r, i, a = this;
                    return o(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return e = new Set(t.default), n = new Set, [4, self.clients.matchAll()];
                            case 1:
                                return r = o.sent(), i = this.routeMap ? Object.keys(this.routeMap).filter((function(t) {
                                    return t.endsWith("*")
                                })) : [], r.forEach((function(t) {
                                    var e = new URL(t.url).pathname;
                                    n.add(e), a.routeMap && s.setAdd(n, a.routeMap[e]), s.setAdd(n, null == i ? void 0 : i.filter((function(t) {
                                        return e.startsWith(t.slice(0, -1))
                                    })))
                                })), n.forEach((function(n) {
                                    var r;
                                    null === (r = t[n]) || void 0 === r || r.forEach((function(t) {
                                        e.add(t)
                                    }))
                                })), [2, e]
                        }
                    }))
                }))
            }, t.prototype.destroy = function() {
                var t;
                null === (t = this.channel) || void 0 === t || t.destroy()
            }, t
        }();
    e.default = f
}, function(t, e, n) {
    "use strict";
    var r = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o, i = r(n(37)),
        s = r(n(1)),
        a = n(6);
    ! function(t) {
        t[t.INIT = 0] = "INIT", t[t.CONNECT = 1] = "CONNECT", t[t.DESTROYING = 2] = "DESTROYING", t[t.DISCONNECT = 3] = "DISCONNECT", t[t.DESTROYED = 4] = "DESTROYED"
    }(o || (o = {}));
    var c = function() {
        function t(t) {
            var e = this;
            this.refresh = function() {
                return e.io.connected || e.io.connect(), e
            }, this.onConnectTimeout = function(t) {
                s.default.error("websocket connect timeout: " + t.message + " " + e.config.url)
            }, this.onReconnectError = function(t) {
                s.default.error("websocket reconnect error: " + t.message + " " + e.config.url)
            }, this.onError = function(t) {
                s.default.error("websocket connect error: " + t.message + " " + e.config.url)
            }, this.onConnect = function() {
                e.status = o.CONNECT, s.default.info("socket connect")
            }, this.onDisconnect = function(t) {
                e.status = e.status === o.DESTROYING ? o.DESTROYED : o.DISCONNECT, s.default.warn("socket disconnect", t)
            }, this.onUpdatePrecacheConfig = function(t) {
                if (s.default.info("res from server: %s!", t), t) try {
                    var n = JSON.parse(t);
                    e.config.onUpdate && e.config.onUpdate(n)
                } catch (e) {
                    s.default.error("receive an error precache config " + e.message + ", " + t)
                }
            }, this.config = t;
            var n = new URL(t.url),
                r = n.origin,
                c = n.pathname;
            this.status = o.INIT, this.io = i.default(r + "/ws/pwa", {
                path: c,
                transports: ["websocket"],
                jsonp: !1,
                reconnectionAttempts: a.SOCKET_RECONNECT_ATTEMPTS,
                reconnectionDelayMax: a.SOCKET_RECONNECT_DELAY_MAX,
                reconnectionDelay: a.SOCKET_RECONNECT_DELAY
            }), this.io.on("connect", this.onConnect), this.io.on("updatePrecacheConfig", this.onUpdatePrecacheConfig), this.io.on("connect_error", this.onError), this.io.on("connect_timeout", this.onConnectTimeout), this.io.on("reconnect_error", this.onReconnectError), this.io.on("disconnect", this.onDisconnect)
        }
        return t.getInstance = function(e) {
            if (t.socket) {
                var n = t.socket.isEqual(e);
                if (s.default.info("is equal", n), n) return t.socket.refresh();
                t.socket.destroy()
            }
            return t.socket = new t(e)
        }, t.prototype.destroy = function() {
            this.status = o.DESTROYING, this.io.disconnect()
        }, t.prototype.isEqual = function(t) {
            return t.url === this.config.url
        }, t
    }();
    e.default = c
}, function(t, e, n) {
    var r = n(38),
        o = n(7),
        i = n(18),
        s = n(0)("socket.io-client");
    t.exports = e = c;
    var a = e.managers = {};

    function c(t, e) {
        "object" == typeof t && (e = t, t = void 0), e = e || {};
        var n, o = r(t),
            c = o.source,
            u = o.id,
            h = o.path,
            f = a[u] && h in a[u].nsps;
        return e.forceNew || e["force new connection"] || !1 === e.multiplex || f ? (s("ignoring socket cache for %s", c), n = i(c, e)) : (a[u] || (s("new io instance for %s", c), a[u] = i(c, e)), n = a[u]), o.query && !e.query && (e.query = o.query), n.socket(o.path, e)
    }
    e.protocol = o.protocol, e.connect = c, e.Manager = n(18), e.Socket = n(24)
}, function(t, e, n) {
    var r = n(16),
        o = n(0)("socket.io-client:url");
    t.exports = function(t, e) {
        var n = t;
        e = e || "undefined" != typeof location && location, null == t && (t = e.protocol + "//" + e.host);
        "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t), t = void 0 !== e ? e.protocol + "//" + t : "https://" + t), o("parse %s", t), n = r(t));
        n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443"));
        n.path = n.path || "/";
        var i = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
        return n.id = n.protocol + "://" + i + ":" + n.port, n.href = n.protocol + "://" + i + (e && e.port === n.port ? "" : ":" + n.port), n
    }
}, function(t, e) {
    var n, r, o = t.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            r = s
        }
    }();
    var c, u = [],
        h = !1,
        f = -1;

    function l() {
        h && c && (h = !1, c.length ? u = c.concat(u) : f = -1, u.length && p())
    }

    function p() {
        if (!h) {
            var t = a(l);
            h = !0;
            for (var e = u.length; e;) {
                for (c = u, u = []; ++f < e;) c && c[f].run();
                f = -1, e = u.length
            }
            c = null, h = !1,
                function(t) {
                    if (r === clearTimeout) return clearTimeout(t);
                    if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                    try {
                        r(t)
                    } catch (e) {
                        try {
                            return r.call(null, t)
                        } catch (e) {
                            return r.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function d(t, e) {
        this.fun = t, this.array = e
    }

    function y() {}
    o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new d(t, e)), 1 !== u.length || h || a(p)
    }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function(t) {
        return []
    }, o.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(t, e, n) {
    function r(t) {
        var n;

        function r() {
            if (r.enabled) {
                var t = r,
                    o = +new Date,
                    i = o - (n || o);
                t.diff = i, t.prev = n, t.curr = o, n = o;
                for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                var c = 0;
                s[0] = s[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
                    if ("%%" === n) return n;
                    c++;
                    var o = e.formatters[r];
                    if ("function" == typeof o) {
                        var i = s[c];
                        n = o.call(t, i), s.splice(c, 1), c--
                    }
                    return n
                })), e.formatArgs.call(t, s);
                var u = r.log || e.log || console.log.bind(console);
                u.apply(t, s)
            }
        }
        return r.namespace = t, r.enabled = e.enabled(t), r.useColors = e.useColors(), r.color = function(t) {
            var n, r = 0;
            for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
            return e.colors[Math.abs(r) % e.colors.length]
        }(t), r.destroy = o, "function" == typeof e.init && e.init(r), e.instances.push(r), r
    }

    function o() {
        var t = e.instances.indexOf(this);
        return -1 !== t && (e.instances.splice(t, 1), !0)
    }(e = t.exports = r.debug = r.default = r).coerce = function(t) {
        return t instanceof Error ? t.stack || t.message : t
    }, e.disable = function() {
        e.enable("")
    }, e.enable = function(t) {
        var n;
        e.save(t), e.names = [], e.skips = [];
        var r = ("string" == typeof t ? t : "").split(/[\s,]+/),
            o = r.length;
        for (n = 0; n < o; n++) r[n] && ("-" === (t = r[n].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
        for (n = 0; n < e.instances.length; n++) {
            var i = e.instances[n];
            i.enabled = e.enabled(i.namespace)
        }
    }, e.enabled = function(t) {
        if ("*" === t[t.length - 1]) return !0;
        var n, r;
        for (n = 0, r = e.skips.length; n < r; n++)
            if (e.skips[n].test(t)) return !1;
        for (n = 0, r = e.names.length; n < r; n++)
            if (e.names[n].test(t)) return !0;
        return !1
    }, e.humanize = n(41), e.instances = [], e.names = [], e.skips = [], e.formatters = {}
}, function(t, e) {
    var n = 1e3,
        r = 6e4,
        o = 60 * r,
        i = 24 * o;

    function s(t, e, n) {
        if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
    }
    t.exports = function(t, e) {
        e = e || {};
        var a, c = typeof t;
        if ("string" === c && t.length > 0) return function(t) {
            if ((t = String(t)).length > 100) return;
            var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
            if (!e) return;
            var s = parseFloat(e[1]);
            switch ((e[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return 315576e5 * s;
                case "days":
                case "day":
                case "d":
                    return s * i;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return s * o;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return s * r;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return s * n;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return s;
                default:
                    return
            }
        }(t);
        if ("number" === c && !1 === isNaN(t)) return e.long ? s(a = t, i, "day") || s(a, o, "hour") || s(a, r, "minute") || s(a, n, "second") || a + " ms" : function(t) {
            if (t >= i) return Math.round(t / i) + "d";
            if (t >= o) return Math.round(t / o) + "h";
            if (t >= r) return Math.round(t / r) + "m";
            if (t >= n) return Math.round(t / n) + "s";
            return t + "ms"
        }(t);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
    }
}, function(t, e, n) {
    var r = n(8),
        o = n(17),
        i = Object.prototype.toString,
        s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob),
        a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
    e.deconstructPacket = function(t) {
        var e = [],
            n = t.data,
            i = t;
        return i.data = function t(e, n) {
            if (!e) return e;
            if (o(e)) {
                var i = {
                    _placeholder: !0,
                    num: n.length
                };
                return n.push(e), i
            }
            if (r(e)) {
                for (var s = new Array(e.length), a = 0; a < e.length; a++) s[a] = t(e[a], n);
                return s
            }
            if ("object" == typeof e && !(e instanceof Date)) {
                s = {};
                for (var c in e) s[c] = t(e[c], n);
                return s
            }
            return e
        }(n, e), i.attachments = e.length, {
            packet: i,
            buffers: e
        }
    }, e.reconstructPacket = function(t, e) {
        return t.data = function t(e, n) {
            if (!e) return e;
            if (e && e._placeholder) return n[e.num];
            if (r(e))
                for (var o = 0; o < e.length; o++) e[o] = t(e[o], n);
            else if ("object" == typeof e)
                for (var i in e) e[i] = t(e[i], n);
            return e
        }(t.data, e), t.attachments = void 0, t
    }, e.removeBlobs = function(t, e) {
        var n = 0,
            i = t;
        ! function t(c, u, h) {
            if (!c) return c;
            if (s && c instanceof Blob || a && c instanceof File) {
                n++;
                var f = new FileReader;
                f.onload = function() {
                    h ? h[u] = this.result : i = this.result, --n || e(i)
                }, f.readAsArrayBuffer(c)
            } else if (r(c))
                for (var l = 0; l < c.length; l++) t(c[l], l, c);
            else if ("object" == typeof c && !o(c))
                for (var p in c) t(c[p], p, c)
        }(i), n || e(i)
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    e.byteLength = function(t) {
        var e = u(t),
            n = e[0],
            r = e[1];
        return 3 * (n + r) / 4 - r
    }, e.toByteArray = function(t) {
        var e, n, r = u(t),
            s = r[0],
            a = r[1],
            c = new i(function(t, e, n) {
                return 3 * (e + n) / 4 - n
            }(0, s, a)),
            h = 0,
            f = a > 0 ? s - 4 : s;
        for (n = 0; n < f; n += 4) e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)], c[h++] = e >> 16 & 255, c[h++] = e >> 8 & 255, c[h++] = 255 & e;
        2 === a && (e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4, c[h++] = 255 & e);
        1 === a && (e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2, c[h++] = e >> 8 & 255, c[h++] = 255 & e);
        return c
    }, e.fromByteArray = function(t) {
        for (var e, n = t.length, o = n % 3, i = [], s = 0, a = n - o; s < a; s += 16383) i.push(h(t, s, s + 16383 > a ? a : s + 16383));
        1 === o ? (e = t[n - 1], i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
        return i.join("")
    };
    for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a) r[a] = s[a], o[s.charCodeAt(a)] = a;

    function u(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
    }

    function h(t, e, n) {
        for (var o, i, s = [], a = e; a < n; a += 3) o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
        return s.join("")
    }
    o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
}, function(t, e) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    e.read = function(t, e, n, r, o) {
        var i, s, a = 8 * o - r - 1,
            c = (1 << a) - 1,
            u = c >> 1,
            h = -7,
            f = n ? o - 1 : 0,
            l = n ? -1 : 1,
            p = t[e + f];
        for (f += l, i = p & (1 << -h) - 1, p >>= -h, h += a; h > 0; i = 256 * i + t[e + f], f += l, h -= 8);
        for (s = i & (1 << -h) - 1, i >>= -h, h += r; h > 0; s = 256 * s + t[e + f], f += l, h -= 8);
        if (0 === i) i = 1 - u;
        else {
            if (i === c) return s ? NaN : 1 / 0 * (p ? -1 : 1);
            s += Math.pow(2, r), i -= u
        }
        return (p ? -1 : 1) * s * Math.pow(2, i - r)
    }, e.write = function(t, e, n, r, o, i) {
        var s, a, c, u = 8 * i - o - 1,
            h = (1 << u) - 1,
            f = h >> 1,
            l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = r ? 0 : i - 1,
            d = r ? 1 : -1,
            y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (e += s + f >= 1 ? l / c : l * Math.pow(2, 1 - f)) * c >= 2 && (s++, c /= 2), s + f >= h ? (a = 0, s = h) : s + f >= 1 ? (a = (e * c - 1) * Math.pow(2, o), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; t[n + p] = 255 & a, p += d, a /= 256, o -= 8);
        for (s = s << o | a, u += o; u > 0; t[n + p] = 255 & s, p += d, s /= 256, u -= 8);
        t[n + p - d] |= 128 * y
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function(t) {
        return "[object Array]" == n.call(t)
    }
}, function(t, e, n) {
    t.exports = n(48), t.exports.parser = n(3)
}, function(t, e, n) {
    var r = n(19),
        o = n(2),
        i = n(0)("engine.io-client:socket"),
        s = n(23),
        a = n(3),
        c = n(16),
        u = n(4);

    function h(t, e) {
        if (!(this instanceof h)) return new h(t, e);
        e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = c(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = c(e.host).host), this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol, e.hostname && !e.port && (e.port = this.secure ? "443" : "80"), this.agent = e.agent || !1, this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = e.query || {}, "string" == typeof this.query && (this.query = u.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.withCredentials = !1 !== e.withCredentials, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.transportOptions = e.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized, this.forceNode = !!e.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders), e.localAddress && (this.localAddress = e.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
    }
    t.exports = h, h.priorWebsocketSuccess = !1, o(h.prototype), h.protocol = a.protocol, h.Socket = h, h.Transport = n(12), h.transports = n(19), h.parser = n(3), h.prototype.createTransport = function(t) {
        i('creating transport "%s"', t);
        var e = function(t) {
            var e = {};
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }(this.query);
        e.EIO = a.protocol, e.transport = t;
        var n = this.transportOptions[t] || {};
        return this.id && (e.sid = this.id), new r[t]({
            query: e,
            socket: this,
            agent: n.agent || this.agent,
            hostname: n.hostname || this.hostname,
            port: n.port || this.port,
            secure: n.secure || this.secure,
            path: n.path || this.path,
            forceJSONP: n.forceJSONP || this.forceJSONP,
            jsonp: n.jsonp || this.jsonp,
            forceBase64: n.forceBase64 || this.forceBase64,
            enablesXDR: n.enablesXDR || this.enablesXDR,
            withCredentials: n.withCredentials || this.withCredentials,
            timestampRequests: n.timestampRequests || this.timestampRequests,
            timestampParam: n.timestampParam || this.timestampParam,
            policyPort: n.policyPort || this.policyPort,
            pfx: n.pfx || this.pfx,
            key: n.key || this.key,
            passphrase: n.passphrase || this.passphrase,
            cert: n.cert || this.cert,
            ca: n.ca || this.ca,
            ciphers: n.ciphers || this.ciphers,
            rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
            perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
            extraHeaders: n.extraHeaders || this.extraHeaders,
            forceNode: n.forceNode || this.forceNode,
            localAddress: n.localAddress || this.localAddress,
            requestTimeout: n.requestTimeout || this.requestTimeout,
            protocols: n.protocols || void 0,
            isReactNative: this.isReactNative
        })
    }, h.prototype.open = function() {
        var t;
        if (this.rememberUpgrade && h.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
        else {
            if (0 === this.transports.length) {
                var e = this;
                return void setTimeout((function() {
                    e.emit("error", "No transports available")
                }), 0)
            }
            t = this.transports[0]
        }
        this.readyState = "opening";
        try {
            t = this.createTransport(t)
        } catch (t) {
            return this.transports.shift(), void this.open()
        }
        t.open(), this.setTransport(t)
    }, h.prototype.setTransport = function(t) {
        i("setting transport %s", t.name);
        var e = this;
        this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", (function() {
            e.onDrain()
        })).on("packet", (function(t) {
            e.onPacket(t)
        })).on("error", (function(t) {
            e.onError(t)
        })).on("close", (function() {
            e.onClose("transport close")
        }))
    }, h.prototype.probe = function(t) {
        i('probing transport "%s"', t);
        var e = this.createTransport(t, {
                probe: 1
            }),
            n = !1,
            r = this;

        function o() {
            if (r.onlyBinaryUpgrades) {
                var o = !this.supportsBinary && r.transport.supportsBinary;
                n = n || o
            }
            n || (i('probe transport "%s" opened', t), e.send([{
                type: "ping",
                data: "probe"
            }]), e.once("packet", (function(o) {
                if (!n)
                    if ("pong" === o.type && "probe" === o.data) {
                        if (i('probe transport "%s" pong', t), r.upgrading = !0, r.emit("upgrading", e), !e) return;
                        h.priorWebsocketSuccess = "websocket" === e.name, i('pausing current transport "%s"', r.transport.name), r.transport.pause((function() {
                            n || "closed" !== r.readyState && (i("changing transport and sending upgrade packet"), l(), r.setTransport(e), e.send([{
                                type: "upgrade"
                            }]), r.emit("upgrade", e), e = null, r.upgrading = !1, r.flush())
                        }))
                    } else {
                        i('probe transport "%s" failed', t);
                        var s = new Error("probe error");
                        s.transport = e.name, r.emit("upgradeError", s)
                    }
            })))
        }

        function s() {
            n || (n = !0, l(), e.close(), e = null)
        }

        function a(n) {
            var o = new Error("probe error: " + n);
            o.transport = e.name, s(), i('probe transport "%s" failed because of error: %s', t, n), r.emit("upgradeError", o)
        }

        function c() {
            a("transport closed")
        }

        function u() {
            a("socket closed")
        }

        function f(t) {
            e && t.name !== e.name && (i('"%s" works - aborting "%s"', t.name, e.name), s())
        }

        function l() {
            e.removeListener("open", o), e.removeListener("error", a), e.removeListener("close", c), r.removeListener("close", u), r.removeListener("upgrading", f)
        }
        h.priorWebsocketSuccess = !1, e.once("open", o), e.once("error", a), e.once("close", c), this.once("close", u), this.once("upgrading", f), e.open()
    }, h.prototype.onOpen = function() {
        if (i("socket open"), this.readyState = "open", h.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
            i("starting upgrade probes");
            for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
        }
    }, h.prototype.onPacket = function(t) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (i('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
            case "open":
                this.onHandshake(JSON.parse(t.data));
                break;
            case "pong":
                this.setPing(), this.emit("pong");
                break;
            case "error":
                var e = new Error("server error");
                e.code = t.data, this.onError(e);
                break;
            case "message":
                this.emit("data", t.data), this.emit("message", t.data)
        } else i('packet received with socket readyState "%s"', this.readyState)
    }, h.prototype.onHandshake = function(t) {
        this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
    }, h.prototype.onHeartbeat = function(t) {
        clearTimeout(this.pingTimeoutTimer);
        var e = this;
        e.pingTimeoutTimer = setTimeout((function() {
            "closed" !== e.readyState && e.onClose("ping timeout")
        }), t || e.pingInterval + e.pingTimeout)
    }, h.prototype.setPing = function() {
        var t = this;
        clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout((function() {
            i("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout)
        }), t.pingInterval)
    }, h.prototype.ping = function() {
        var t = this;
        this.sendPacket("ping", (function() {
            t.emit("ping")
        }))
    }, h.prototype.onDrain = function() {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
    }, h.prototype.flush = function() {
        "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
    }, h.prototype.write = h.prototype.send = function(t, e, n) {
        return this.sendPacket("message", t, e, n), this
    }, h.prototype.sendPacket = function(t, e, n, r) {
        if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
            (n = n || {}).compress = !1 !== n.compress;
            var o = {
                type: t,
                data: e,
                options: n
            };
            this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
        }
    }, h.prototype.close = function() {
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            var t = this;
            this.writeBuffer.length ? this.once("drain", (function() {
                this.upgrading ? r() : e()
            })) : this.upgrading ? r() : e()
        }

        function e() {
            t.onClose("forced close"), i("socket closing - telling transport to close"), t.transport.close()
        }

        function n() {
            t.removeListener("upgrade", n), t.removeListener("upgradeError", n), e()
        }

        function r() {
            t.once("upgrade", n), t.once("upgradeError", n)
        }
        return this
    }, h.prototype.onError = function(t) {
        i("socket error %j", t), h.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
    }, h.prototype.onClose = function(t, e) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            i('socket close with reason: "%s"', t);
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0
        }
    }, h.prototype.filterUpgrades = function(t) {
        for (var e = [], n = 0, r = t.length; n < r; n++) ~s(this.transports, t[n]) && e.push(t[n]);
        return e
    }
}, function(t, e) {
    try {
        t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    } catch (e) {
        t.exports = !1
    }
}, function(t, e, n) {
    var r = n(10),
        o = n(20),
        i = n(2),
        s = n(5),
        a = n(0)("engine.io-client:polling-xhr"),
        c = n(11);

    function u() {}

    function h(t) {
        if (o.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, "undefined" != typeof location) {
            var e = "https:" === location.protocol,
                n = location.port;
            n || (n = e ? 443 : 80), this.xd = "undefined" != typeof location && t.hostname !== location.hostname || n !== t.port, this.xs = t.secure !== e
        }
    }

    function f(t) {
        this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.withCredentials = t.withCredentials, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create()
    }
    if (t.exports = h, t.exports.Request = f, s(h, o), h.prototype.supportsBinary = !0, h.prototype.request = function(t) {
            return (t = t || {}).uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.withCredentials = this.withCredentials, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new f(t)
        }, h.prototype.doWrite = function(t, e) {
            var n = "string" != typeof t && void 0 !== t,
                r = this.request({
                    method: "POST",
                    data: t,
                    isBinary: n
                }),
                o = this;
            r.on("success", e), r.on("error", (function(t) {
                o.onError("xhr post error", t)
            })), this.sendXhr = r
        }, h.prototype.doPoll = function() {
            a("xhr poll");
            var t = this.request(),
                e = this;
            t.on("data", (function(t) {
                e.onData(t)
            })), t.on("error", (function(t) {
                e.onError("xhr poll error", t)
            })), this.pollXhr = t
        }, i(f.prototype), f.prototype.create = function() {
            var t = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
            var e = this.xhr = new r(t),
                n = this;
            try {
                a("xhr open %s: %s", this.method, this.uri), e.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders)
                        for (var o in e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && e.setRequestHeader(o, this.extraHeaders[o])
                } catch (t) {}
                if ("POST" === this.method) try {
                    this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch (t) {}
                try {
                    e.setRequestHeader("Accept", "*/*")
                } catch (t) {}
                "withCredentials" in e && (e.withCredentials = this.withCredentials), this.requestTimeout && (e.timeout = this.requestTimeout), this.hasXDR() ? (e.onload = function() {
                    n.onLoad()
                }, e.onerror = function() {
                    n.onError(e.responseText)
                }) : e.onreadystatechange = function() {
                    if (2 === e.readyState) try {
                        var t = e.getResponseHeader("Content-Type");
                        (n.supportsBinary && "application/octet-stream" === t || "application/octet-stream; charset=UTF-8" === t) && (e.responseType = "arraybuffer")
                    } catch (t) {}
                    4 === e.readyState && (200 === e.status || 1223 === e.status ? n.onLoad() : setTimeout((function() {
                        n.onError("number" == typeof e.status ? e.status : 0)
                    }), 0))
                }, a("xhr data %s", this.data), e.send(this.data)
            } catch (t) {
                return void setTimeout((function() {
                    n.onError(t)
                }), 0)
            }
            "undefined" != typeof document && (this.index = f.requestsCount++, f.requests[this.index] = this)
        }, f.prototype.onSuccess = function() {
            this.emit("success"), this.cleanup()
        }, f.prototype.onData = function(t) {
            this.emit("data", t), this.onSuccess()
        }, f.prototype.onError = function(t) {
            this.emit("error", t), this.cleanup(!0)
        }, f.prototype.cleanup = function(t) {
            if (void 0 !== this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = u : this.xhr.onreadystatechange = u, t) try {
                    this.xhr.abort()
                } catch (t) {}
                "undefined" != typeof document && delete f.requests[this.index], this.xhr = null
            }
        }, f.prototype.onLoad = function() {
            var t;
            try {
                var e;
                try {
                    e = this.xhr.getResponseHeader("Content-Type")
                } catch (t) {}
                t = ("application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e) && this.xhr.response || this.xhr.responseText
            } catch (t) {
                this.onError(t)
            }
            null != t && this.onData(t)
        }, f.prototype.hasXDR = function() {
            return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
        }, f.prototype.abort = function() {
            this.cleanup()
        }, f.requestsCount = 0, f.requests = {}, "undefined" != typeof document)
        if ("function" == typeof attachEvent) attachEvent("onunload", l);
        else if ("function" == typeof addEventListener) {
        addEventListener("onpagehide" in c ? "pagehide" : "unload", l, !1)
    }

    function l() {
        for (var t in f.requests) f.requests.hasOwnProperty(t) && f.requests[t].abort()
    }
}, function(t, e) {
    t.exports = Object.keys || function(t) {
        var e = [],
            n = Object.prototype.hasOwnProperty;
        for (var r in t) n.call(t, r) && e.push(r);
        return e
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var r = t.byteLength;
        if (e = e || 0, n = n || r, t.slice) return t.slice(e, n);
        if (e < 0 && (e += r), n < 0 && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r) return new ArrayBuffer(0);
        for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++, a++) i[a] = o[s];
        return i.buffer
    }
}, function(t, e) {
    function n() {}
    t.exports = function(t, e, r) {
        var o = !1;
        return r = r || n, i.count = t, 0 === t ? e() : i;

        function i(t, n) {
            if (i.count <= 0) throw new Error("after called too many times");
            --i.count, t ? (o = !0, e(t), e = r) : 0 !== i.count || o || e(null, n)
        }
    }
}, function(t, e) {
    /*! https://mths.be/utf8js v2.1.2 by @mathias */
    var n, r, o, i = String.fromCharCode;

    function s(t) {
        for (var e, n, r = [], o = 0, i = t.length; o < i;)(e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (n = t.charCodeAt(o++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--) : r.push(e);
        return r
    }

    function a(t, e) {
        if (t >= 55296 && t <= 57343) {
            if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
            return !1
        }
        return !0
    }

    function c(t, e) {
        return i(t >> e & 63 | 128)
    }

    function u(t, e) {
        if (0 == (4294967168 & t)) return i(t);
        var n = "";
        return 0 == (4294965248 & t) ? n = i(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (a(t, e) || (t = 65533), n = i(t >> 12 & 15 | 224), n += c(t, 6)) : 0 == (4292870144 & t) && (n = i(t >> 18 & 7 | 240), n += c(t, 12), n += c(t, 6)), n += i(63 & t | 128)
    }

    function h() {
        if (o >= r) throw Error("Invalid byte index");
        var t = 255 & n[o];
        if (o++, 128 == (192 & t)) return 63 & t;
        throw Error("Invalid continuation byte")
    }

    function f(t) {
        var e, i;
        if (o > r) throw Error("Invalid byte index");
        if (o == r) return !1;
        if (e = 255 & n[o], o++, 0 == (128 & e)) return e;
        if (192 == (224 & e)) {
            if ((i = (31 & e) << 6 | h()) >= 128) return i;
            throw Error("Invalid continuation byte")
        }
        if (224 == (240 & e)) {
            if ((i = (15 & e) << 12 | h() << 6 | h()) >= 2048) return a(i, t) ? i : 65533;
            throw Error("Invalid continuation byte")
        }
        if (240 == (248 & e) && (i = (7 & e) << 18 | h() << 12 | h() << 6 | h()) >= 65536 && i <= 1114111) return i;
        throw Error("Invalid UTF-8 detected")
    }
    t.exports = {
        version: "2.1.2",
        encode: function(t, e) {
            for (var n = !1 !== (e = e || {}).strict, r = s(t), o = r.length, i = -1, a = ""; ++i < o;) a += u(r[i], n);
            return a
        },
        decode: function(t, e) {
            var a = !1 !== (e = e || {}).strict;
            n = s(t), r = n.length, o = 0;
            for (var c, u = []; !1 !== (c = f(a));) u.push(c);
            return function(t) {
                for (var e, n = t.length, r = -1, o = ""; ++r < n;)(e = t[r]) > 65535 && (o += i((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += i(e);
                return o
            }(u)
        }
    }
}, function(t, e) {
    ! function(t) {
        "use strict";
        e.encode = function(e) {
            var n, r = new Uint8Array(e),
                o = r.length,
                i = "";
            for (n = 0; n < o; n += 3) i += t[r[n] >> 2], i += t[(3 & r[n]) << 4 | r[n + 1] >> 4], i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += t[63 & r[n + 2]];
            return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
        }, e.decode = function(e) {
            var n, r, o, i, s, a = .75 * e.length,
                c = e.length,
                u = 0;
            "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
            var h = new ArrayBuffer(a),
                f = new Uint8Array(h);
            for (n = 0; n < c; n += 4) r = t.indexOf(e[n]), o = t.indexOf(e[n + 1]), i = t.indexOf(e[n + 2]), s = t.indexOf(e[n + 3]), f[u++] = r << 2 | o >> 4, f[u++] = (15 & o) << 4 | i >> 2, f[u++] = (3 & i) << 6 | 63 & s;
            return h
        }
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
}, function(t, e) {
    var n = void 0 !== n ? n : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
        r = function() {
            try {
                return 2 === new Blob(["hi"]).size
            } catch (t) {
                return !1
            }
        }(),
        o = r && function() {
            try {
                return 2 === new Blob([new Uint8Array([1, 2])]).size
            } catch (t) {
                return !1
            }
        }(),
        i = n && n.prototype.append && n.prototype.getBlob;

    function s(t) {
        return t.map((function(t) {
            if (t.buffer instanceof ArrayBuffer) {
                var e = t.buffer;
                if (t.byteLength !== e.byteLength) {
                    var n = new Uint8Array(t.byteLength);
                    n.set(new Uint8Array(e, t.byteOffset, t.byteLength)), e = n.buffer
                }
                return e
            }
            return t
        }))
    }

    function a(t, e) {
        e = e || {};
        var r = new n;
        return s(t).forEach((function(t) {
            r.append(t)
        })), e.type ? r.getBlob(e.type) : r.getBlob()
    }

    function c(t, e) {
        return new Blob(s(t), e || {})
    }
    "undefined" != typeof Blob && (a.prototype = Blob.prototype, c.prototype = Blob.prototype), t.exports = r ? o ? Blob : c : i ? a : void 0
}, function(t, e, n) {
    var r = n(20),
        o = n(5),
        i = n(11);
    t.exports = h;
    var s, a = /\n/g,
        c = /\\n/g;

    function u() {}

    function h(t) {
        r.call(this, t), this.query = this.query || {}, s || (s = i.___eio = i.___eio || []), this.index = s.length;
        var e = this;
        s.push((function(t) {
            e.onData(t)
        })), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", (function() {
            e.script && (e.script.onerror = u)
        }), !1)
    }
    o(h, r), h.prototype.supportsBinary = !1, h.prototype.doClose = function() {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), r.prototype.doClose.call(this)
    }, h.prototype.doPoll = function() {
        var t = this,
            e = document.createElement("script");
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function(e) {
            t.onError("jsonp poll error", e)
        };
        var n = document.getElementsByTagName("script")[0];
        n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
            var t = document.createElement("iframe");
            document.body.appendChild(t), document.body.removeChild(t)
        }), 100)
    }, h.prototype.doWrite = function(t, e) {
        var n = this;
        if (!this.form) {
            var r, o = document.createElement("form"),
                i = document.createElement("textarea"),
                s = this.iframeId = "eio_iframe_" + this.index;
            o.className = "socketio", o.style.position = "absolute", o.style.top = "-1000px", o.style.left = "-1000px", o.target = s, o.method = "POST", o.setAttribute("accept-charset", "utf-8"), i.name = "d", o.appendChild(i), document.body.appendChild(o), this.form = o, this.area = i
        }

        function u() {
            h(), e()
        }

        function h() {
            if (n.iframe) try {
                n.form.removeChild(n.iframe)
            } catch (t) {
                n.onError("jsonp polling iframe removal error", t)
            }
            try {
                var t = '<iframe src="javascript:0" name="' + n.iframeId + '">';
                r = document.createElement(t)
            } catch (t) {
                (r = document.createElement("iframe")).name = n.iframeId, r.src = "javascript:0"
            }
            r.id = n.iframeId, n.form.appendChild(r), n.iframe = r
        }
        this.form.action = this.uri(), h(), t = t.replace(c, "\\\n"), this.area.value = t.replace(a, "\\n");
        try {
            this.form.submit()
        } catch (t) {}
        this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
            "complete" === n.iframe.readyState && u()
        } : this.iframe.onload = u
    }
}, function(t, e, n) {
    (function(e) {
        var r, o, i = n(12),
            s = n(3),
            a = n(4),
            c = n(5),
            u = n(22),
            h = n(0)("engine.io-client:websocket");
        if ("undefined" != typeof WebSocket ? r = WebSocket : "undefined" != typeof self && (r = self.WebSocket || self.MozWebSocket), "undefined" == typeof window) try {
            o = n(59)
        } catch (t) {}
        var f = r || o;

        function l(t) {
            t && t.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = r && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (f = o), i.call(this, t)
        }
        t.exports = l, c(l, i), l.prototype.name = "websocket", l.prototype.supportsBinary = !0, l.prototype.doOpen = function() {
            if (this.check()) {
                var t = this.uri(),
                    e = this.protocols,
                    n = {};
                this.isReactNative || (n.agent = this.agent, n.perMessageDeflate = this.perMessageDeflate, n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
                try {
                    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new f(t, e) : new f(t) : new f(t, e, n)
                } catch (t) {
                    return this.emit("error", t)
                }
                void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
            }
        }, l.prototype.addEventListeners = function() {
            var t = this;
            this.ws.onopen = function() {
                t.onOpen()
            }, this.ws.onclose = function() {
                t.onClose()
            }, this.ws.onmessage = function(e) {
                t.onData(e.data)
            }, this.ws.onerror = function(e) {
                t.onError("websocket error", e)
            }
        }, l.prototype.write = function(t) {
            var n = this;
            this.writable = !1;
            for (var r = t.length, o = 0, i = r; o < i; o++) ! function(t) {
                s.encodePacket(t, n.supportsBinary, (function(o) {
                    if (!n.usingBrowserWebSocket) {
                        var i = {};
                        if (t.options && (i.compress = t.options.compress), n.perMessageDeflate)("string" == typeof o ? e.byteLength(o) : o.length) < n.perMessageDeflate.threshold && (i.compress = !1)
                    }
                    try {
                        n.usingBrowserWebSocket ? n.ws.send(o) : n.ws.send(o, i)
                    } catch (t) {
                        h("websocket closed before onclose event")
                    }--r || a()
                }))
            }(t[o]);

            function a() {
                n.emit("flush"), setTimeout((function() {
                    n.writable = !0, n.emit("drain")
                }), 0)
            }
        }, l.prototype.onClose = function() {
            i.prototype.onClose.call(this)
        }, l.prototype.doClose = function() {
            void 0 !== this.ws && this.ws.close()
        }, l.prototype.uri = function() {
            var t = this.query || {},
                e = this.secure ? "wss" : "ws",
                n = "";
            return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = u()), this.supportsBinary || (t.b64 = 1), (t = a.encode(t)).length && (t = "?" + t), e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
        }, l.prototype.check = function() {
            return !(!f || "__initialize" in f && this.name === l.prototype.name)
        }
    }).call(this, n(9).Buffer)
}, function(t, e) {}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = [], r = (e = e || 0) || 0; r < t.length; r++) n[r - e] = t[r];
        return n
    }
}, function(t, e) {
    function n(t) {
        t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
    }
    t.exports = n, n.prototype.duration = function() {
        var t = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var e = Math.random(),
                n = Math.floor(e * this.jitter * t);
            t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
        }
        return 0 | Math.min(t, this.max)
    }, n.prototype.reset = function() {
        this.attempts = 0
    }, n.prototype.setMin = function(t) {
        this.ms = t
    }, n.prototype.setMax = function(t) {
        this.max = t
    }, n.prototype.setJitter = function(t) {
        this.jitter = t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t() {}
        return t.getInstance = function() {
            return new t
        }, t.prototype.destroy = function() {}, t
    }();
    e.default = r
}]);