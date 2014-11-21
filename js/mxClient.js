var mxClient = {
    VERSION: "3.0.0.0",
    IS_IE: 0 <= navigator.userAgent.indexOf("MSIE"),
    IS_IE6: 0 <= navigator.userAgent.indexOf("MSIE 6"),
    IS_IE11: !!navigator.userAgent.match(/Trident\/7\./),
    IS_QUIRKS: 0 <= navigator.userAgent.indexOf("MSIE") && (null == document.documentMode || 5 == document.documentMode),
    VML_PREFIX: "v",
    OFFICE_PREFIX: "o",
    IS_NS: 0 <= navigator.userAgent.indexOf("Mozilla/") && 0 > navigator.userAgent.indexOf("MSIE"),
    IS_OP: 0 <= navigator.userAgent.indexOf("Opera/"),
    IS_OT: 0 > navigator.userAgent.indexOf("Presto/2.4.") &&
        0 > navigator.userAgent.indexOf("Presto/2.3.") && 0 > navigator.userAgent.indexOf("Presto/2.2.") && 0 > navigator.userAgent.indexOf("Presto/2.1.") && 0 > navigator.userAgent.indexOf("Presto/2.0.") && 0 > navigator.userAgent.indexOf("Presto/1."),
    IS_SF: 0 <= navigator.userAgent.indexOf("AppleWebKit/") && 0 > navigator.userAgent.indexOf("Chrome/"),
    IS_IOS: navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1,
    IS_GC: 0 <= navigator.userAgent.indexOf("Chrome/"),
    IS_FF: 0 <= navigator.userAgent.indexOf("Firefox/"),
    IS_MT: 0 <= navigator.userAgent.indexOf("Firefox/") &&
        0 > navigator.userAgent.indexOf("Firefox/1.") && 0 > navigator.userAgent.indexOf("Firefox/2.") || 0 <= navigator.userAgent.indexOf("Iceweasel/") && 0 > navigator.userAgent.indexOf("Iceweasel/1.") && 0 > navigator.userAgent.indexOf("Iceweasel/2.") || 0 <= navigator.userAgent.indexOf("SeaMonkey/") && 0 > navigator.userAgent.indexOf("SeaMonkey/1.") || 0 <= navigator.userAgent.indexOf("Iceape/") && 0 > navigator.userAgent.indexOf("Iceape/1."),
    IS_SVG: 0 <= navigator.userAgent.indexOf("Firefox/") || 0 <= navigator.userAgent.indexOf("Iceweasel/") ||
        0 <= navigator.userAgent.indexOf("Seamonkey/") || 0 <= navigator.userAgent.indexOf("Iceape/") || 0 <= navigator.userAgent.indexOf("Galeon/") || 0 <= navigator.userAgent.indexOf("Epiphany/") || 0 <= navigator.userAgent.indexOf("AppleWebKit/") || 0 <= navigator.userAgent.indexOf("Gecko/") || 0 <= navigator.userAgent.indexOf("Opera/") || null != document.documentMode && 9 <= document.documentMode,
    NO_FO: !document.createElementNS || "[object SVGForeignObjectElement]" != document.createElementNS("http://www.w3.org/2000/svg", "foreignObject") ||
        0 <= navigator.userAgent.indexOf("Opera/"),
    IS_VML: "MICROSOFT INTERNET EXPLORER" == navigator.appName.toUpperCase(),
    IS_WIN: 0 < navigator.appVersion.indexOf("Win"),
    IS_MAC: 0 < navigator.appVersion.indexOf("Mac"),
    IS_TOUCH: "ontouchstart" in document.documentElement,
    IS_POINTER: null != window.navigator.msPointerEnabled ? window.navigator.msPointerEnabled : !1,
    IS_LOCAL: 0 > document.location.href.indexOf("http://") && 0 > document.location.href.indexOf("https://"),
    isBrowserSupported: function() {
        return mxClient.IS_VML || mxClient.IS_SVG
    },
    link: function(a, b, c) {
        c = c || document;
        if (mxClient.IS_IE6) c.write('<link rel="' + a + '" href="' + b + '" charset="ISO-8859-1" type="text/css"/>');
        else {
            var d = c.createElement("link");
            d.setAttribute("rel", a);
            d.setAttribute("href", b);
            d.setAttribute("charset", "ISO-8859-1");
            d.setAttribute("type", "text/css");
            c.getElementsByTagName("head")[0].appendChild(d)
        }
    },
    include: function(a) {
        document.write('<script src="' + a + '">\x3c/script>')
    },
    dispose: function() {
        for (var a = 0; a < mxEvent.objects.length; a++) null != mxEvent.objects[a].mxListenerList &&
            mxEvent.removeAllListeners(mxEvent.objects[a])
    }
};
"undefined" == typeof mxLoadResources && (mxLoadResources = !0);
"undefined" == typeof mxResourceExtension && (mxResourceExtension = ".txt");
"undefined" == typeof mxLoadStylesheets && (mxLoadStylesheets = !0);
"undefined" != typeof mxBasePath && 0 < mxBasePath.length ? ("/" == mxBasePath.substring(mxBasePath.length - 1) && (mxBasePath = mxBasePath.substring(0, mxBasePath.length - 1)), mxClient.basePath = mxBasePath) : mxClient.basePath = ".";
"undefined" != typeof mxImageBasePath && 0 < mxImageBasePath.length ? ("/" == mxImageBasePath.substring(mxImageBasePath.length - 1) && (mxImageBasePath = mxImageBasePath.substring(0, mxImageBasePath.length - 1)), mxClient.imageBasePath = mxImageBasePath) : mxClient.imageBasePath = mxClient.basePath + "/images";
mxClient.language = "undefined" != typeof mxLanguage && null != mxLanguage ? mxLanguage : mxClient.IS_IE ? navigator.userLanguage : navigator.language;
mxClient.defaultLanguage = "undefined" != typeof mxDefaultLanguage && null != mxDefaultLanguage ? mxDefaultLanguage : "en";
mxLoadStylesheets 
"undefined" != typeof mxLanguages && null != mxLanguages && (mxClient.languages = mxLanguages);
if (mxClient.IS_VML)
    if (mxClient.IS_SVG) mxClient.IS_VML = !1;
    else {
        8 == document.documentMode ? (document.namespaces.add(mxClient.VML_PREFIX, "urn:schemas-microsoft-com:vml", "#default#VML"), document.namespaces.add(mxClient.OFFICE_PREFIX, "urn:schemas-microsoft-com:office:office", "#default#VML")) : (document.namespaces.add(mxClient.VML_PREFIX, "urn:schemas-microsoft-com:vml"), document.namespaces.add(mxClient.OFFICE_PREFIX, "urn:schemas-microsoft-com:office:office"));
        var ss = document.createStyleSheet();
        ss.cssText =
            mxClient.VML_PREFIX + "\\:*{behavior:url(#default#VML)}" + mxClient.OFFICE_PREFIX + "\\:*{behavior:url(#default#VML)}";
        mxLoadStylesheets && mxClient.link("stylesheet", mxClient.basePath + "/css/explorer.css");
        window.attachEvent("onunload", mxClient.dispose)
    }
var mxLog = {
        consoleName: "Console",
        TRACE: !1,
        DEBUG: !0,
        WARN: !0,
        buffer: "",
        init: function() {
            if (null == mxLog.window && null != document.body) {
                var a = mxLog.consoleName + " - mxGraph " + mxClient.VERSION,
                    b = document.createElement("table");
                b.setAttribute("width", "100%");
                b.setAttribute("height", "100%");
                var c = document.createElement("tbody"),
                    d = document.createElement("tr"),
                    e = document.createElement("td");
                e.style.verticalAlign = "top";
                mxLog.textarea = document.createElement("textarea");
                mxLog.textarea.setAttribute("readOnly", "true");
                mxLog.textarea.style.height = "100%";
                mxLog.textarea.style.resize = "none";
                mxLog.textarea.value = mxLog.buffer;
                mxLog.textarea.style.width = mxClient.IS_NS && "BackCompat" != document.compatMode ? "99%" : "100%";
                e.appendChild(mxLog.textarea);
                d.appendChild(e);
                c.appendChild(d);
                d = document.createElement("tr");
                mxLog.td = document.createElement("td");
                mxLog.td.style.verticalAlign = "top";
                mxLog.td.setAttribute("height", "30px");
                d.appendChild(mxLog.td);
                c.appendChild(d);
                b.appendChild(c);
                mxLog.addButton("Info", function(a) {
                    mxLog.info()
                });
                mxLog.addButton("DOM", function(a) {
                    a = mxUtils.getInnerHtml(document.body);
                    mxLog.debug(a)
                });
                mxLog.addButton("Trace", function(a) {
                    mxLog.TRACE = !mxLog.TRACE;
                    mxLog.TRACE ? mxLog.debug("Tracing enabled") : mxLog.debug("Tracing disabled")
                });
                mxLog.addButton("Copy", function(a) {
                    try {
                        mxUtils.copy(mxLog.textarea.value)
                    } catch (b) {
                        mxUtils.alert(b)
                    }
                });
                mxLog.addButton("Show", function(a) {
                    try {
                        mxUtils.popup(mxLog.textarea.value)
                    } catch (b) {
                        mxUtils.alert(b)
                    }
                });
                mxLog.addButton("Clear", function(a) {
                    mxLog.textarea.value = ""
                });
                d = c = 0;
                "number" === typeof window.innerWidth ? (c = window.innerHeight, d = window.innerWidth) : (c = document.documentElement.clientHeight || document.body.clientHeight, d = document.body.clientWidth);
                mxLog.window = new mxWindow(a, b, Math.max(0, d - 320), Math.max(0, c - 210), 300, 160);
                mxLog.window.setMaximizable(!0);
                mxLog.window.setScrollable(!1);
                mxLog.window.setResizable(!0);
                mxLog.window.setClosable(!0);
                mxLog.window.destroyOnClose = !1;
                if ((mxClient.IS_NS || mxClient.IS_IE) && !mxClient.IS_GC && !mxClient.IS_SF && "BackCompat" != document.compatMode ||
                    11 == document.documentMode) {
                    var f = mxLog.window.getElement(),
                        a = function(a, b) {
                            mxLog.textarea.style.height = Math.max(0, f.offsetHeight - 70) + "px"
                        };
                    mxLog.window.addListener(mxEvent.RESIZE_END, a);
                    mxLog.window.addListener(mxEvent.MAXIMIZE, a);
                    mxLog.window.addListener(mxEvent.NORMALIZE, a);
                    mxLog.textarea.style.height = "92px"
                }
            }
        },
        info: function() {
            mxLog.writeln(mxUtils.toString(navigator))
        },
        addButton: function(a, b) {
            var c = document.createElement("button");
            mxUtils.write(c, a);
            mxEvent.addListener(c, "click", b);
            mxLog.td.appendChild(c)
        },
        isVisible: function() {
            return null != mxLog.window ? mxLog.window.isVisible() : !1
        },
        show: function() {
            mxLog.setVisible(!0)
        },
        setVisible: function(a) {
            null == mxLog.window && mxLog.init();
            null != mxLog.window && mxLog.window.setVisible(a)
        },
        enter: function(a) {
            if (mxLog.TRACE) return mxLog.writeln("Entering " + a), (new Date).getTime()
        },
        leave: function(a, b) {
            if (mxLog.TRACE) {
                var c = 0 != b ? " (" + ((new Date).getTime() - b) + " ms)" : "";
                mxLog.writeln("Leaving " + a + c)
            }
        },
        debug: function() {
            mxLog.DEBUG && mxLog.writeln.apply(this, arguments)
        },
        warn: function() {
            mxLog.WARN &&
                mxLog.writeln.apply(this, arguments)
        },
        write: function() {
            for (var a = "", b = 0; b < arguments.length; b++) a += arguments[b], b < arguments.length - 1 && (a += " ");
            null != mxLog.textarea ? (mxLog.textarea.value += a, 0 <= navigator.userAgent.indexOf("Presto/2.5") && (mxLog.textarea.style.visibility = "hidden", mxLog.textarea.style.visibility = "visible"), mxLog.textarea.scrollTop = mxLog.textarea.scrollHeight) : mxLog.buffer += a
        },
        writeln: function() {
            for (var a = "", b = 0; b < arguments.length; b++) a += arguments[b], b < arguments.length - 1 && (a += " ");
            mxLog.write(a +
                "\n")
        }
    },
    mxObjectIdentity = {
        FIELD_NAME: "mxObjectId",
        counter: 0,
        get: function(a) {
            if ("object" == typeof a && null == a[mxObjectIdentity.FIELD_NAME]) {
                var b = mxUtils.getFunctionName(a.constructor);
                a[mxObjectIdentity.FIELD_NAME] = b + "#" + mxObjectIdentity.counter++
            }
            return a[mxObjectIdentity.FIELD_NAME]
        },
        clear: function(a) {
            "object" == typeof a && delete a[mxObjectIdentity.FIELD_NAME]
        }
    };

function mxDictionary() {
    this.clear()
}
mxDictionary.prototype.map = null;
mxDictionary.prototype.clear = function() {
    this.map = {}
};
mxDictionary.prototype.get = function(a) {
    a = mxObjectIdentity.get(a);
    return this.map[a]
};
mxDictionary.prototype.put = function(a, b) {
    var c = mxObjectIdentity.get(a),
        d = this.map[c];
    this.map[c] = b;
    return d
};
mxDictionary.prototype.remove = function(a) {
    a = mxObjectIdentity.get(a);
    var b = this.map[a];
    delete this.map[a];
    return b
};
mxDictionary.prototype.getKeys = function() {
    var a = [],
        b;
    for (b in this.map) a.push(b);
    return a
};
mxDictionary.prototype.getValues = function() {
    var a = [],
        b;
    for (b in this.map) a.push(this.map[b]);
    return a
};
mxDictionary.prototype.visit = function(a) {
    for (var b in this.map) a(b, this.map[b])
};
var mxResources = {
    resources: [],
    extension: mxResourceExtension,
    resourcesEncoded: !1,
    loadDefaultBundle: !0,
    loadSpecialBundle: !0,
    isLanguageSupported: function(a) {
        return null != mxClient.languages ? 0 <= mxUtils.indexOf(mxClient.languages, a) : !0
    },
    getDefaultBundle: function(a, b) {
        return mxResources.loadDefaultBundle || !mxResources.isLanguageSupported(b) ? a + mxResources.extension : null
    },
    getSpecialBundle: function(a, b) {
        if (null == mxClient.languages || !this.isLanguageSupported(b)) {
            var c = b.indexOf("-");
            0 < c && (b = b.substring(0, c))
        }
        return mxResources.loadSpecialBundle &&
            mxResources.isLanguageSupported(b) && b != mxClient.defaultLanguage ? a + "_" + b + mxResources.extension : null
    },
    add: function(a, b) {
        b = null != b ? b : mxClient.language.toLowerCase();
        if (b != mxConstants.NONE) {
            var c = mxResources.getDefaultBundle(a, b);
            if (null != c) try {
                var d = mxUtils.load(c);
                d.isReady() && mxResources.parse(d.getText())
            } catch (e) {}
            c = mxResources.getSpecialBundle(a, b);
            if (null != c) try {
                d = mxUtils.load(c), d.isReady() && mxResources.parse(d.getText())
            } catch (f) {}
        }
    },
    parse: function(a) {
        if (null != a) {
            a = a.split("\n");
            for (var b = 0; b <
                a.length; b++)
                if ("#" != a[b].charAt(0)) {
                    var c = a[b].indexOf("=");
                    if (0 < c) {
                        var d = a[b].substring(0, c),
                            e = a[b].length;
                        13 == a[b].charCodeAt(e - 1) && e--;
                        c = a[b].substring(c + 1, e);
                        this.resourcesEncoded ? (c = c.replace(/\\(?=u[a-fA-F\d]{4})/g, "%"), mxResources.resources[d] = unescape(c)) : mxResources.resources[d] = c
                    }
                }
        }
    },
    get: function(a, b, c) {
        a = mxResources.resources[a];
        null == a && (a = c);
        if (null != a && null != b) {
            c = [];
            for (var d = null, e = 0; e < a.length; e++) {
                var f = a.charAt(e);
                "{" == f ? d = "" : null != d && "}" == f ? (d = parseInt(d) - 1, 0 <= d && d < b.length && c.push(b[d]),
                    d = null) : null != d ? d += f : c.push(f)
            }
            a = c.join("")
        }
        return a
    }
};

function mxPoint(a, b) {
    this.x = null != a ? a : 0;
    this.y = null != b ? b : 0
}
mxPoint.prototype.x = null;
mxPoint.prototype.y = null;
mxPoint.prototype.equals = function(a) {
    return null != a && a.x == this.x && a.y == this.y
};
mxPoint.prototype.clone = function() {
    return mxUtils.clone(this)
};

function mxRectangle(a, b, c, d) {
    mxPoint.call(this, a, b);
    this.width = null != c ? c : 0;
    this.height = null != d ? d : 0
}
mxRectangle.prototype = new mxPoint;
mxRectangle.prototype.constructor = mxRectangle;
mxRectangle.prototype.width = null;
mxRectangle.prototype.height = null;
mxRectangle.prototype.setRect = function(a, b, c, d) {
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d
};
mxRectangle.prototype.getCenterX = function() {
    return this.x + this.width / 2
};
mxRectangle.prototype.getCenterY = function() {
    return this.y + this.height / 2
};
mxRectangle.prototype.add = function(a) {
    if (null != a) {
        var b = Math.min(this.x, a.x),
            c = Math.min(this.y, a.y),
            d = Math.max(this.x + this.width, a.x + a.width);
        a = Math.max(this.y + this.height, a.y + a.height);
        this.x = b;
        this.y = c;
        this.width = d - b;
        this.height = a - c
    }
};
mxRectangle.prototype.grow = function(a) {
    this.x -= a;
    this.y -= a;
    this.width += 2 * a;
    this.height += 2 * a
};
mxRectangle.prototype.getPoint = function() {
    return new mxPoint(this.x, this.y)
};
mxRectangle.prototype.equals = function(a) {
    return null != a && a.x == this.x && a.y == this.y && a.width == this.width && a.height == this.height
};
var mxEffects = {
        animateChanges: function(a, b, c) {
            var d = 0,
                e = function() {
                    for (var g = !1, k = 0; k < b.length; k++) {
                        var l = b[k];
                        if (l instanceof mxGeometryChange || l instanceof mxTerminalChange || l instanceof mxValueChange || l instanceof mxChildChange || l instanceof mxStyleChange) {
                            var m = a.getView().getState(l.cell || l.child, !1);
                            if (null != m)
                                if (g = !0, l.constructor != mxGeometryChange || a.model.isEdge(l.cell)) mxUtils.setOpacity(m.shape.node, 100 * d / 10);
                                else {
                                    var n = a.getView().scale,
                                        p = (l.geometry.x - l.previous.x) * n,
                                        q = (l.geometry.y -
                                            l.previous.y) * n,
                                        r = (l.geometry.width - l.previous.width) * n,
                                        n = (l.geometry.height - l.previous.height) * n;
                                    0 == d ? (m.x -= p, m.y -= q, m.width -= r, m.height -= n) : (m.x += p / 10, m.y += q / 10, m.width += r / 10, m.height += n / 10);
                                    a.cellRenderer.redraw(m);
                                    mxEffects.cascadeOpacity(a, l.cell, 100 * d / 10)
                                }
                        }
                    }
                    10 > d && g ? (d++, window.setTimeout(e, f)) : null != c && c()
                },
                f = 30;
            e()
        },
        cascadeOpacity: function(a, b, c) {
            for (var d = a.model.getChildCount(b), e = 0; e < d; e++) {
                var f = a.model.getChildAt(b, e),
                    g = a.getView().getState(f);
                null != g && (mxUtils.setOpacity(g.shape.node,
                    c), mxEffects.cascadeOpacity(a, f, c))
            }
            b = a.model.getEdges(b);
            if (null != b)
                for (e = 0; e < b.length; e++) d = a.getView().getState(b[e]), null != d && mxUtils.setOpacity(d.shape.node, c)
        },
        fadeOut: function(a, b, c, d, e, f) {
            d = d || 40;
            e = e || 30;
            var g = b || 100;
            mxUtils.setOpacity(a, g);
            if (f || null == f) {
                var k = function() {
                    g = Math.max(g - d, 0);
                    mxUtils.setOpacity(a, g);
                    0 < g ? window.setTimeout(k, e) : (a.style.visibility = "hidden", c && a.parentNode && a.parentNode.removeChild(a))
                };
                window.setTimeout(k, e)
            } else a.style.visibility = "hidden", c && a.parentNode && a.parentNode.removeChild(a)
        }
    },
    mxUtils = {
        errorResource: "none" != mxClient.language ? "error" : "",
        closeResource: "none" != mxClient.language ? "close" : "",
        errorImage: mxClient.imageBasePath + "/error.gif",
        removeCursors: function(a) {
            null != a.style && (a.style.cursor = "");
            a = a.childNodes;
            if (null != a)
                for (var b = a.length, c = 0; c < b; c += 1) mxUtils.removeCursors(a[c])
        },
        getCurrentStyle: function() {
            return mxClient.IS_IE ? function(a) {
                return null != a ? a.currentStyle : null
            } : function(a) {
                return null != a ? window.getComputedStyle(a, "") : null
            }
        }(),
        setPrefixedStyle: function() {
            var a =
                null;
            mxClient.IS_OP && mxClient.IS_OT ? a = "O" : mxClient.IS_SF || mxClient.IS_GC ? a = "Webkit" : mxClient.IS_MT ? a = "Moz" : mxClient.IS_IE && (9 <= document.documentMode && 10 > document.documentMode) && (a = "ms");
            return function(b, c, d) {
                b[c] = d;
                null != a && 0 < c.length && (c = a + c.substring(0, 1).toUpperCase() + c.substring(1), b[c] = d)
            }
        }(),
        hasScrollbars: function(a) {
            a = mxUtils.getCurrentStyle(a);
            return null != a && ("scroll" == a.overflow || "auto" == a.overflow)
        },
        bind: function(a, b) {
            return function() {
                return b.apply(a, arguments)
            }
        },
        eval: function(a) {
            var b =
                null;
            if (0 <= a.indexOf("function")) try {
                eval("var _mxJavaScriptExpression=" + a), b = _mxJavaScriptExpression, _mxJavaScriptExpression = null
            } catch (c) {
                mxLog.warn(c.message + " while evaluating " + a)
            } else try {
                b = eval(a)
            } catch (d) {
                mxLog.warn(d.message + " while evaluating " + a)
            }
            return b
        },
        findNode: function(a, b, c) {
            var d = a.getAttribute(b);
            if (null != d && d == c) return a;
            for (a = a.firstChild; null != a;) {
                d = mxUtils.findNode(a, b, c);
                if (null != d) return d;
                a = a.nextSibling
            }
            return null
        },
        findNodeByAttribute: function() {
            return 9 <= document.documentMode ?
                function(a, b, c) {
                    var d = null;
                    if (null != a)
                        if (a.nodeType == mxConstants.NODETYPE_ELEMENT && a.getAttribute(b) == c) d = a;
                        else
                            for (a = a.firstChild; null != a && null == d;) d = mxUtils.findNodeByAttribute(a, b, c), a = a.nextSibling;
                    return d
                } : mxClient.IS_IE ? function(a, b, c) {
                    return null == a ? null : a.ownerDocument.selectSingleNode("//*[@" + b + "='" + c + "']")
                } : function(a, b, c) {
                    return null == a ? null : a.ownerDocument.evaluate("//*[@" + b + "='" + c + "']", a.ownerDocument, null, XPathResult.ANY_TYPE, null).iterateNext()
                }
        }(),
        getFunctionName: function(a) {
            var b =
                null;
            if (null != a)
                if (null != a.name) b = a.name;
                else {
                    a = a.toString();
                    for (b = 9;
                        " " == a.charAt(b);) b++;
                    var c = a.indexOf("(", b),
                        b = a.substring(b, c)
                }
            return b
        },
        indexOf: function(a, b) {
            if (null != a && null != b)
                for (var c = 0; c < a.length; c++)
                    if (a[c] == b) return c;
            return -1
        },
        remove: function(a, b) {
            var c = null;
            if ("object" == typeof b)
                for (var d = mxUtils.indexOf(b, a); 0 <= d;) b.splice(d, 1), c = a, d = mxUtils.indexOf(b, a);
            for (var e in b) b[e] == a && (delete b[e], c = a);
            return c
        },
        isNode: function(a, b, c, d) {
            return null != a && !isNaN(a.nodeType) && (null == b || a.nodeName.toLowerCase() ==
                b.toLowerCase()) ? null == c || a.getAttribute(c) == d : !1
        },
        isAncestorNode: function(a, b) {
            for (var c = b; null != c;) {
                if (c == a) return !0;
                c = c.parentNode
            }
            return !1
        },
        getChildNodes: function(a, b) {
            b = b || mxConstants.NODETYPE_ELEMENT;
            for (var c = [], d = a.firstChild; null != d;) d.nodeType == b && c.push(d), d = d.nextSibling;
            return c
        },
        importNode: function(a, b, c) {
            if (mxClient.IS_IE && (null == document.documentMode || 10 > document.documentMode)) switch (b.nodeType) {
                case 1:
                    var d = a.createElement(b.nodeName);
                    if (b.attributes && 0 < b.attributes.length) {
                        for (var e =
                            0; e < b.attributes.length; e++) d.setAttribute(b.attributes[e].nodeName, b.getAttribute(b.attributes[e].nodeName));
                        if (c && b.childNodes && 0 < b.childNodes.length)
                            for (e = 0; e < b.childNodes.length; e++) d.appendChild(mxUtils.importNode(a, b.childNodes[e], c))
                    }
                    return d;
                case 3:
                case 4:
                case 8:
                    return a.createTextNode(b.nodeValue)
            } else return a.importNode(b, c)
        },
        createXmlDocument: function() {
            var a = null;
            document.implementation && document.implementation.createDocument && 9 != document.documentMode ? a = document.implementation.createDocument("",
                "", null) : window.ActiveXObject && (a = new ActiveXObject("Microsoft.XMLDOM"));
            return a
        },
        parseXml: function() {
            return window.DOMParser && 9 != document.documentMode ? function(a) {
                return (new DOMParser).parseFromString(a, "text/xml")
            } : function(a) {
                var b = mxUtils.createXmlDocument();
                b.async = "false";
                b.loadXML(a);
                return b
            }
        }(),
        clearSelection: function() {
            return document.selection ? function() {
                document.selection.empty()
            } : window.getSelection ? function() {
                window.getSelection().removeAllRanges()
            } : function() {}
        }(),
        getPrettyXml: function(a,
            b, c) {
            var d = [];
            if (null != a)
                if (b = b || "  ", c = c || "", a.nodeType == mxConstants.NODETYPE_TEXT) d.push(a.nodeValue);
                else {
                    d.push(c + "<" + a.nodeName);
                    var e = a.attributes;
                    if (null != e)
                        for (var f = 0; f < e.length; f++) {
                            var g = mxUtils.htmlEntities(e[f].nodeValue);
                            d.push(" " + e[f].nodeName + '="' + g + '"')
                        }
                    e = a.firstChild;
                    if (null != e) {
                        for (d.push(">\n"); null != e;) d.push(mxUtils.getPrettyXml(e, b, c + b)), e = e.nextSibling;
                        d.push(c + "</" + a.nodeName + ">\n")
                    } else d.push("/>\n")
                }
            return d.join("")
        },
        removeWhitespace: function(a, b) {
            for (var c = b ? a.previousSibling :
                a.nextSibling; null != c && c.nodeType == mxConstants.NODETYPE_TEXT;) {
                var d = b ? c.previousSibling : c.nextSibling,
                    e = mxUtils.getTextContent(c);
                0 == mxUtils.trim(e).length && c.parentNode.removeChild(c);
                c = d
            }
        },
        htmlEntities: function(a, b) {
            a = (a || "").replace(/&/g, "&amp;");
            a = a.replace(/"/g, "&quot;");
            a = a.replace(/\'/g, "&#39;");
            a = a.replace(/</g, "&lt;");
            a = a.replace(/>/g, "&gt;");
            if (null == b || b) a = a.replace(/\n/g, "&#xa;");
            return a
        },
        isVml: function(a) {
            return null != a && "urn:schemas-microsoft-com:vml" == a.tagUrn
        },
        getXml: function(a,
            b) {
            var c = "";
            null != window.XMLSerializer && 9 != document.documentMode ? c = (new XMLSerializer).serializeToString(a) : null != a.xml && (c = a.xml.replace(/\r\n\t[\t]*/g, "").replace(/>\r\n/g, ">").replace(/\r\n/g, "\n"));
            return c = c.replace(/\n/g, b || "&#xa;")
        },
        getTextContent: function(a) {
            return void 0 !== a.innerText ? a.innerText : null != a ? a[void 0 === a.textContent ? "text" : "textContent"] : ""
        },
        setTextContent: function(a, b) {
            void 0 !== a.innerText ? a.innerText = b : a[void 0 === a.textContent ? "text" : "textContent"] = b
        },
        getInnerHtml: function() {
            return mxClient.IS_IE ?
                function(a) {
                    return null != a ? a.innerHTML : ""
                } : function(a) {
                    return null != a ? (new XMLSerializer).serializeToString(a) : ""
                }
        }(),
        getOuterHtml: function() {
            return mxClient.IS_IE ? function(a) {
                if (null != a) {
                    if (null != a.outerHTML) return a.outerHTML;
                    var b = [];
                    b.push("<" + a.nodeName);
                    var c = a.attributes;
                    if (null != c)
                        for (var d = 0; d < c.length; d++) {
                            var e = c[d].nodeValue;
                            null != e && 0 < e.length && (b.push(" "), b.push(c[d].nodeName), b.push('="'), b.push(e), b.push('"'))
                        }
                    0 == a.innerHTML.length ? b.push("/>") : (b.push(">"), b.push(a.innerHTML), b.push("</" +
                        a.nodeName + ">"));
                    return b.join("")
                }
                return ""
            } : function(a) {
                return null != a ? (new XMLSerializer).serializeToString(a) : ""
            }
        }(),
        write: function(a, b) {
            var c = a.ownerDocument.createTextNode(b);
            null != a && a.appendChild(c);
            return c
        },
        writeln: function(a, b) {
            var c = a.ownerDocument.createTextNode(b);
            null != a && (a.appendChild(c), a.appendChild(document.createElement("br")));
            return c
        },
        br: function(a, b) {
            b = b || 1;
            for (var c = null, d = 0; d < b; d++) null != a && (c = a.ownerDocument.createElement("br"), a.appendChild(c));
            return c
        },
        button: function(a,
            b, c) {
            c = null != c ? c : document;
            c = c.createElement("button");
            mxUtils.write(c, a);
            mxEvent.addListener(c, "click", function(a) {
                b(a)
            });
            return c
        },
        para: function(a, b) {
            var c = document.createElement("p");
            mxUtils.write(c, b);
            null != a && a.appendChild(c);
            return c
        },
        addTransparentBackgroundFilter: function(a) {
            a.style.filter += "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + mxClient.imageBasePath + "/transparent.gif', sizingMethod='scale')"
        },
        linkAction: function(a, b, c, d, e) {
            return mxUtils.link(a, b, function() {
                    c.execute(d)
                },
                e)
        },
        linkInvoke: function(a, b, c, d, e, f) {
            return mxUtils.link(a, b, function() {
                c[d](e)
            }, f)
        },
        link: function(a, b, c, d) {
            var e = document.createElement("span");
            e.style.color = "blue";
            e.style.textDecoration = "underline";
            e.style.cursor = "pointer";
            null != d && (e.style.paddingLeft = d + "px");
            mxEvent.addListener(e, "click", c);
            mxUtils.write(e, b);
            null != a && a.appendChild(e);
            return e
        },
        fit: function(a) {
            var b = parseInt(a.offsetLeft),
                c = parseInt(a.offsetWidth),
                d = mxUtils.getDocumentScrollOrigin(a.ownerDocument),
                e = d.x,
                d = d.y,
                f = document.body,
                g = document.documentElement,
                k = e + (f.clientWidth || g.clientWidth);
            b + c > k && (a.style.left = Math.max(e, k - c) + "px");
            b = parseInt(a.offsetTop);
            c = parseInt(a.offsetHeight);
            f = d + Math.max(f.clientHeight || 0, g.clientHeight);
            b + c > f && (a.style.top = Math.max(d, f - c) + "px")
        },
        load: function(a) {
            a = new mxXmlRequest(a, null, "GET", !1);
            a.send();
            return a
        },
        get: function(a, b, c) {
            return (new mxXmlRequest(a, null, "GET")).send(b, c)
        },
        post: function(a, b, c, d) {
            return (new mxXmlRequest(a, b)).send(c, d)
        },
        submit: function(a, b, c, d) {
            return (new mxXmlRequest(a,
                b)).simulate(c, d)
        },
        loadInto: function(a, b, c) {
            mxClient.IS_IE ? b.onreadystatechange = function() {
                4 == b.readyState && c()
            } : b.addEventListener("load", c, !1);
            b.load(a)
        },
        getValue: function(a, b, c) {
            a = null != a ? a[b] : null;
            null == a && (a = c);
            return a
        },
        getNumber: function(a, b, c) {
            a = null != a ? a[b] : null;
            null == a && (a = c || 0);
            return Number(a)
        },
        getColor: function(a, b, c) {
            a = null != a ? a[b] : null;
            null == a ? a = c : a == mxConstants.NONE && (a = null);
            return a
        },
        clone: function(a, b, c) {
            c = null != c ? c : !1;
            var d = null;
            if (null != a && "function" == typeof a.constructor) {
                var d =
                    new a.constructor,
                    e;
                for (e in a)
                    if (e != mxObjectIdentity.FIELD_NAME && (null == b || 0 > mxUtils.indexOf(b, e))) d[e] = !c && "object" == typeof a[e] ? mxUtils.clone(a[e]) : a[e]
            }
            return d
        },
        equalPoints: function(a, b) {
            if (null == a && null != b || null != a && null == b || null != a && null != b && a.length != b.length) return !1;
            if (null != a && null != b)
                for (var c = 0; c < a.length; c++)
                    if (a[c] == b[c] || null != a[c] && !a[c].equals(b[c])) return !1;
            return !0
        },
        equalEntries: function(a, b) {
            if (null == a && null != b || null != a && null == b || null != a && null != b && a.length != b.length) return !1;
            if (null != a && null != b)
                for (var c in a)
                    if ((!mxUtils.isNaN(a[c]) || !mxUtils.isNaN(b[c])) && a[c] != b[c]) return !1;
            return !0
        },
        isNaN: function(a) {
            return "number" == typeof a && isNaN(a)
        },
        extend: function(a, b) {
            var c = function() {};
            c.prototype = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        },
        toString: function(a) {
            var b = "",
                c;
            for (c in a) try {
                if (null == a[c]) b += c + " = [null]\n";
                else if ("function" == typeof a[c]) b += c + " => [Function]\n";
                else if ("object" == typeof a[c]) var d = mxUtils.getFunctionName(a[c].constructor),
                    b = b + (c + " => [" +
                        d + "]\n");
                else b += c + " = " + a[c] + "\n"
            } catch (e) {
                b += c + "=" + e.message
            }
            return b
        },
        toRadians: function(a) {
            return Math.PI * a / 180
        },
        arcToCurves: function(a, b, c, d, e, f, g, k, l) {
            k -= a;
            l -= b;
            if (0 === c || 0 === d) return q;
            c = Math.abs(c);
            d = Math.abs(d);
            var m = -k / 2,
                n = -l / 2,
                p = Math.cos(e * Math.PI / 180),
                q = Math.sin(e * Math.PI / 180);
            e = p * m + q * n;
            var m = -1 * q * m + p * n,
                n = e * e,
                r = m * m,
                s = c * c,
                t = d * d,
                u = n / s + r / t;
            1 < u ? (c *= Math.sqrt(u), d *= Math.sqrt(u), f = 0) : (u = 1, f === g && (u = -1), f = u * Math.sqrt((s * t - s * r - t * n) / (s * r + t * n)));
            n = f * c * m / d;
            r = -1 * f * d * e / c;
            k = p * n - q * r + k / 2;
            l = q * n + p * r + l /
                2;
            s = Math.atan2((m - r) / d, (e - n) / c) - Math.atan2(0, 1);
            f = 0 <= s ? s : 2 * Math.PI + s;
            s = Math.atan2((-m - r) / d, (-e - n) / c) - Math.atan2((m - r) / d, (e - n) / c);
            e = 0 <= s ? s : 2 * Math.PI + s;
            0 == g && 0 < e ? e -= 2 * Math.PI : 0 != g && 0 > e && (e += 2 * Math.PI);
            g = 2 * e / Math.PI;
            g = Math.ceil(0 > g ? -1 * g : g);
            e /= g;
            m = 8 / 3 * Math.sin(e / 4) * Math.sin(e / 4) / Math.sin(e / 2);
            n = p * c;
            p *= d;
            c *= q;
            d *= q;
            for (var x = Math.cos(f), y = Math.sin(f), r = -m * (n * y + d * x), s = -m * (c * y - p * x), u = t = 0, q = [], v = 0; v < g; ++v) {
                f += e;
                var x = Math.cos(f),
                    y = Math.sin(f),
                    t = n * x - d * y + k,
                    u = c * x + p * y + l,
                    z = -m * (n * y + d * x),
                    x = -m * (c * y - p * x),
                    y = 6 * v;
                q[y] =
                    Number(r + a);
                q[y + 1] = Number(s + b);
                q[y + 2] = Number(t - z + a);
                q[y + 3] = Number(u - x + b);
                q[y + 4] = Number(t + a);
                q[y + 5] = Number(u + b);
                r = t + z;
                s = u + x
            }
            return q
        },
        getBoundingBox: function(a, b, c) {
            var d = null;
            if (null != a && null != b && 0 != b) {
                b = mxUtils.toRadians(b);
                var d = Math.cos(b),
                    e = Math.sin(b);
                c = null != c ? c : new mxPoint(a.x + a.width / 2, a.y + a.height / 2);
                var f = new mxPoint(a.x, a.y);
                b = new mxPoint(a.x + a.width, a.y);
                var g = new mxPoint(b.x, a.y + a.height);
                a = new mxPoint(a.x, g.y);
                f = mxUtils.getRotatedPoint(f, d, e, c);
                b = mxUtils.getRotatedPoint(b, d, e, c);
                g = mxUtils.getRotatedPoint(g,
                    d, e, c);
                a = mxUtils.getRotatedPoint(a, d, e, c);
                d = new mxRectangle(f.x, f.y, 0, 0);
                d.add(new mxRectangle(b.x, b.y, 0, 0));
                d.add(new mxRectangle(g.x, g.y, 0, 0));
                d.add(new mxRectangle(a.x, a.y, 0, 0))
            }
            return d
        },
        getRotatedPoint: function(a, b, c, d) {
            d = null != d ? d : new mxPoint;
            var e = a.x - d.x;
            a = a.y - d.y;
            return new mxPoint(e * b - a * c + d.x, a * b + e * c + d.y)
        },
        getPortConstraints: function(a, b, c, d) {
            b = mxUtils.getValue(a.style, mxConstants.STYLE_PORT_CONSTRAINT, null);
            if (null == b) return d;
            d = b.toString();
            b = mxConstants.DIRECTION_MASK_NONE;
            c = 0;
            1 == mxUtils.getValue(a.style,
                mxConstants.STYLE_PORT_CONSTRAINT_ROTATION, 0) && (c = mxUtils.getValue(a.style, mxConstants.STYLE_ROTATION, 0));
            a = 0;
            45 < c ? (a = 1, 135 <= c && (a = 2)) : -45 > c && (a = 3, -135 >= c && (a = 2));
            if (0 <= d.indexOf(mxConstants.DIRECTION_NORTH)) switch (a) {
                case 0:
                    b |= mxConstants.DIRECTION_MASK_NORTH;
                    break;
                case 1:
                    b |= mxConstants.DIRECTION_MASK_EAST;
                    break;
                case 2:
                    b |= mxConstants.DIRECTION_MASK_SOUTH;
                    break;
                case 3:
                    b |= mxConstants.DIRECTION_MASK_WEST
            }
            if (0 <= d.indexOf(mxConstants.DIRECTION_WEST)) switch (a) {
                case 0:
                    b |= mxConstants.DIRECTION_MASK_WEST;
                    break;
                case 1:
                    b |= mxConstants.DIRECTION_MASK_NORTH;
                    break;
                case 2:
                    b |= mxConstants.DIRECTION_MASK_EAST;
                    break;
                case 3:
                    b |= mxConstants.DIRECTION_MASK_SOUTH
            }
            if (0 <= d.indexOf(mxConstants.DIRECTION_SOUTH)) switch (a) {
                case 0:
                    b |= mxConstants.DIRECTION_MASK_SOUTH;
                    break;
                case 1:
                    b |= mxConstants.DIRECTION_MASK_WEST;
                    break;
                case 2:
                    b |= mxConstants.DIRECTION_MASK_NORTH;
                    break;
                case 3:
                    b |= mxConstants.DIRECTION_MASK_EAST
            }
            if (0 <= d.indexOf(mxConstants.DIRECTION_EAST)) switch (a) {
                case 0:
                    b |= mxConstants.DIRECTION_MASK_EAST;
                    break;
                case 1:
                    b |=
                        mxConstants.DIRECTION_MASK_SOUTH;
                    break;
                case 2:
                    b |= mxConstants.DIRECTION_MASK_WEST;
                    break;
                case 3:
                    b |= mxConstants.DIRECTION_MASK_NORTH
            }
            return b
        },
        reversePortConstraints: function(a) {
            var b = 0,
                b = (a & mxConstants.DIRECTION_MASK_WEST) << 3,
                b = b | (a & mxConstants.DIRECTION_MASK_NORTH) << 1,
                b = b | (a & mxConstants.DIRECTION_MASK_SOUTH) >> 1;
            return b |= (a & mxConstants.DIRECTION_MASK_EAST) >> 3
        },
        findNearestSegment: function(a, b, c) {
            var d = -1;
            if (0 < a.absolutePoints.length)
                for (var e = a.absolutePoints[0], f = null, g = 1; g < a.absolutePoints.length; g++) {
                    var k =
                        a.absolutePoints[g],
                        e = mxUtils.ptSegDistSq(e.x, e.y, k.x, k.y, b, c);
                    if (null == f || e < f) f = e, d = g - 1;
                    e = k
                }
            return d
        },
        rectangleIntersectsSegment: function(a, b, c) {
            var d = a.y,
                e = a.x,
                f = d + a.height,
                g = e + a.width;
            a = b.x;
            var k = c.x;
            b.x > c.x && (a = c.x, k = b.x);
            k > g && (k = g);
            a < e && (a = e);
            if (a > k) return !1;
            var e = b.y,
                g = c.y,
                l = c.x - b.x;
            1E-7 < Math.abs(l) && (c = (c.y - b.y) / l, b = b.y - c * b.x, e = c * a + b, g = c * k + b);
            e > g && (b = g, g = e, e = b);
            g > f && (g = f);
            e < d && (e = d);
            return e > g ? !1 : !0
        },
        contains: function(a, b, c) {
            return a.x <= b && a.x + a.width >= b && a.y <= c && a.y + a.height >= c
        },
        intersects: function(a,
            b) {
            var c = a.width,
                d = a.height,
                e = b.width,
                f = b.height;
            if (0 >= e || 0 >= f || 0 >= c || 0 >= d) return !1;
            var g = a.x,
                k = a.y,
                l = b.x,
                m = b.y,
                e = e + l,
                f = f + m,
                c = c + g,
                d = d + k;
            return (e < l || e > g) && (f < m || f > k) && (c < g || c > l) && (d < k || d > m)
        },
        intersectsHotspot: function(a, b, c, d, e, f) {
            d = null != d ? d : 1;
            e = null != e ? e : 0;
            f = null != f ? f : 0;
            if (0 < d) {
                var g = a.getCenterX(),
                    k = a.getCenterY(),
                    l = a.width,
                    m = a.height,
                    n = mxUtils.getValue(a.style, mxConstants.STYLE_STARTSIZE) * a.view.scale;
                0 < n && (mxUtils.getValue(a.style, mxConstants.STYLE_HORIZONTAL, !0) ? (k = a.y + n / 2, m = n) : (g = a.x + n / 2, l =
                    n));
                l = Math.max(e, l * d);
                m = Math.max(e, m * d);
                0 < f && (l = Math.min(l, f), m = Math.min(m, f));
                d = new mxRectangle(g - l / 2, k - m / 2, l, m);
                g = mxUtils.toRadians(mxUtils.getValue(a.style, mxConstants.STYLE_ROTATION) || 0);
                0 != g && (e = Math.cos(-g), f = Math.sin(-g), g = new mxPoint(a.getCenterX(), a.getCenterY()), a = mxUtils.getRotatedPoint(new mxPoint(b, c), e, f, g), b = a.x, c = a.y);
                return mxUtils.contains(d, b, c)
            }
            return !0
        },
        getOffset: function(a, b) {
            var c = 0,
                d = 0;
            if (null != b && b) var e = mxUtils.getDocumentScrollOrigin(a.ownerDocument),
                c = c + e.x,
                d = d + e.y;
            for (; a.offsetParent;) c +=
                a.offsetLeft, d += a.offsetTop, a = a.offsetParent;
            return new mxPoint(c, d)
        },
        getDocumentScrollOrigin: function(a) {
            if (mxClient.IS_QUIRKS) return new mxPoint(a.body.scrollLeft, a.body.scrollTop);
            a = a.defaultView || a.parentWindow;
            return new mxPoint(null != a && void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, null != a && void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop)
        },
        getScrollOrigin: function(a) {
            for (var b = document.body, c = document.documentElement, d = mxUtils.getDocumentScrollOrigin(null != a ? a.ownerDocument : document); null != a && a != b && a != c;) !isNaN(a.scrollLeft) && !isNaN(a.scrollTop) && (d.x += a.scrollLeft, d.y += a.scrollTop), a = a.parentNode;
            return d
        },
        convertPoint: function(a, b, c) {
            var d = mxUtils.getScrollOrigin(a);
            a = mxUtils.getOffset(a);
            a.x -= d.x;
            a.y -= d.y;
            return new mxPoint(b - a.x, c - a.y)
        },
        ltrim: function(a, b) {
            return a.replace(RegExp("^[" + (b || "\\s") + "]+", "g"), "")
        },
        rtrim: function(a,
            b) {
            return a.replace(RegExp("[" + (b || "\\s") + "]+$", "g"), "")
        },
        trim: function(a, b) {
            return mxUtils.ltrim(mxUtils.rtrim(a, b), b)
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a) && ("string" != typeof a || 0 > a.toLowerCase().indexOf("0x"))
        },
        mod: function(a, b) {
            return (a % b + b) % b
        },
        intersection: function(a, b, c, d, e, f, g, k) {
            var l = (k - f) * (c - a) - (g - e) * (d - b);
            g = ((g - e) * (b - f) - (k - f) * (a - e)) / l;
            e = ((c - a) * (b - f) - (d - b) * (a - e)) / l;
            return 0 <= g && 1 >= g && 0 <= e && 1 >= e ? new mxPoint(a + g * (c - a), b + g * (d - b)) : null
        },
        ptSegDistSq: function(a, b, c, d,
            e, f) {
            c -= a;
            d -= b;
            e -= a;
            f -= b;
            0 >= e * c + f * d ? c = 0 : (e = c - e, f = d - f, a = e * c + f * d, c = 0 >= a ? 0 : a * a / (c * c + d * d));
            e = e * e + f * f - c;
            0 > e && (e = 0);
            return e
        },
        relativeCcw: function(a, b, c, d, e, f) {
            c -= a;
            d -= b;
            e -= a;
            f -= b;
            a = e * d - f * c;
            0 == a && (a = e * c + f * d, 0 < a && (a = (e - c) * c + (f - d) * d, 0 > a && (a = 0)));
            return 0 > a ? -1 : 0 < a ? 1 : 0
        },
        animateChanges: function(a, b) {
            mxEffects.animateChanges.apply(this, arguments)
        },
        cascadeOpacity: function(a, b, c) {
            mxEffects.cascadeOpacity.apply(this, arguments)
        },
        fadeOut: function(a, b, c, d, e, f) {
            mxEffects.fadeOut.apply(this, arguments)
        },
        setOpacity: function(a,
            b) {
            mxUtils.isVml(a) ? a.style.filter = 100 <= b ? null : "alpha(opacity=" + b / 5 + ")" : mxClient.IS_IE && ("undefined" === typeof document.documentMode || 9 > document.documentMode) ? a.style.filter = 100 <= b ? null : "alpha(opacity=" + b + ")" : a.style.opacity = b / 100
        },
        createImage: function(a) {
            var b = null;
            mxClient.IS_IE6 && "CSS1Compat" != document.compatMode ? (b = document.createElement(mxClient.VML_PREFIX + ":image"), b.setAttribute("src", a), b.style.borderStyle = "none") : (b = document.createElement("img"), b.setAttribute("src", a), b.setAttribute("border",
                "0"));
            return b
        },
        sortCells: function(a, b) {
            b = null != b ? b : !0;
            var c = new mxDictionary;
            a.sort(function(a, e) {
                var f = c.get(a);
                null == f && (f = mxCellPath.create(a).split(mxCellPath.PATH_SEPARATOR), c.put(a, f));
                var g = c.get(e);
                null == g && (g = mxCellPath.create(e).split(mxCellPath.PATH_SEPARATOR), c.put(e, g));
                f = mxCellPath.compare(f, g);
                return 0 == f ? 0 : 0 < f == b ? 1 : -1
            });
            return a
        },
        getStylename: function(a) {
            return null != a && (a = a.split(";")[0], 0 > a.indexOf("=")) ? a : ""
        },
        getStylenames: function(a) {
            var b = [];
            if (null != a) {
                a = a.split(";");
                for (var c =
                    0; c < a.length; c++) 0 > a[c].indexOf("=") && b.push(a[c])
            }
            return b
        },
        indexOfStylename: function(a, b) {
            if (null != a && null != b)
                for (var c = a.split(";"), d = 0, e = 0; e < c.length; e++) {
                    if (c[e] == b) return d;
                    d += c[e].length + 1
                }
            return -1
        },
        addStylename: function(a, b) {
            0 > mxUtils.indexOfStylename(a, b) && (null == a ? a = "" : 0 < a.length && ";" != a.charAt(a.length - 1) && (a += ";"), a += b);
            return a
        },
        removeStylename: function(a, b) {
            var c = [];
            if (null != a)
                for (var d = a.split(";"), e = 0; e < d.length; e++) d[e] != b && c.push(d[e]);
            return c.join(";")
        },
        removeAllStylenames: function(a) {
            var b = [];
            if (null != a) {
                a = a.split(";");
                for (var c = 0; c < a.length; c++) 0 <= a[c].indexOf("=") && b.push(a[c])
            }
            return b.join(";")
        },
        setCellStyles: function(a, b, c, d) {
            if (null != b && 0 < b.length) {
                a.beginUpdate();
                try {
                    for (var e = 0; e < b.length; e++)
                        if (null != b[e]) {
                            var f = mxUtils.setStyle(a.getStyle(b[e]), c, d);
                            a.setStyle(b[e], f)
                        }
                } finally {
                    a.endUpdate()
                }
            }
        },
        setStyle: function(a, b, c) {
            var d = null != c && ("undefined" == typeof c.length || 0 < c.length);
            if (null == a || 0 == a.length) d && (a = b + "=" + c);
            else {
                var e = a.indexOf(b + "=");
                0 > e ? d && (d = ";" == a.charAt(a.length -
                    1) ? "" : ";", a = a + d + b + "=" + c) : (b = d ? b + "=" + c : "", c = a.indexOf(";", e), d || c++, a = a.substring(0, e) + b + (c > e ? a.substring(c) : ""))
            }
            return a
        },
        setCellStyleFlags: function(a, b, c, d, e) {
            if (null != b && 0 < b.length) {
                a.beginUpdate();
                try {
                    for (var f = 0; f < b.length; f++)
                        if (null != b[f]) {
                            var g = mxUtils.setStyleFlag(a.getStyle(b[f]), c, d, e);
                            a.setStyle(b[f], g)
                        }
                } finally {
                    a.endUpdate()
                }
            }
        },
        setStyleFlag: function(a, b, c, d) {
            if (null == a || 0 == a.length) a = d || null == d ? b + "=" + c : b + "=0";
            else {
                var e = a.indexOf(b + "=");
                if (0 > e) e = ";" == a.charAt(a.length - 1) ? "" : ";", a = d ||
                    null == d ? a + e + b + "=" + c : a + e + b + "=0";
                else {
                    var f = a.indexOf(";", e),
                        g = "",
                        g = 0 > f ? a.substring(e + b.length + 1) : a.substring(e + b.length + 1, f),
                        g = null == d ? parseInt(g) ^ c : d ? parseInt(g) | c : parseInt(g) & ~c;
                    a = a.substring(0, e) + b + "=" + g + (0 <= f ? a.substring(f) : "")
                }
            }
            return a
        },
        getAlignmentAsPoint: function(a, b) {
            var c = 0,
                d = 0;
            a == mxConstants.ALIGN_CENTER ? c = -0.5 : a == mxConstants.ALIGN_RIGHT && (c = -1);
            b == mxConstants.ALIGN_MIDDLE ? d = -0.5 : b == mxConstants.ALIGN_BOTTOM && (d = -1);
            return new mxPoint(c, d)
        },
        getSizeForString: function(a, b, c, d) {
            b = null != b ? b :
                mxConstants.DEFAULT_FONTSIZE;
            c = null != c ? c : mxConstants.DEFAULT_FONTFAMILY;
            var e = document.createElement("div");
            e.style.fontFamily = c;
            e.style.fontSize = Math.round(b) + "px";
            e.style.lineHeight = Math.round(b * mxConstants.LINE_HEIGHT) + "px";
            e.style.position = "absolute";
            e.style.visibility = "hidden";
            e.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block";
            e.style.zoom = "1";
            null != d ? (e.style.width = d + "px", e.style.whiteSpace = "normal") : e.style.whiteSpace = "nowrap";
            e.innerHTML = a;
            document.body.appendChild(e);
            a = new mxRectangle(0,
                0, e.offsetWidth, e.offsetHeight);
            document.body.removeChild(e);
            return a
        },
        getViewXml: function(a, b, c, d, e) {
            d = null != d ? d : 0;
            e = null != e ? e : 0;
            b = null != b ? b : 1;
            null == c && (c = [a.getModel().getRoot()]);
            var f = a.getView(),
                g = null,
                k = f.isEventsEnabled();
            f.setEventsEnabled(!1);
            var l = f.drawPane,
                m = f.overlayPane;
            a.dialect == mxConstants.DIALECT_SVG ? (f.drawPane = document.createElementNS(mxConstants.NS_SVG, "g"), f.canvas.appendChild(f.drawPane), f.overlayPane = document.createElementNS(mxConstants.NS_SVG, "g")) : (f.drawPane = f.drawPane.cloneNode(!1),
                f.canvas.appendChild(f.drawPane), f.overlayPane = f.overlayPane.cloneNode(!1));
            f.canvas.appendChild(f.overlayPane);
            var n = f.getTranslate();
            f.translate = new mxPoint(d, e);
            b = new mxTemporaryCellStates(a.getView(), b, c);
            try {
                g = (new mxCodec).encode(a.getView())
            } finally {
                b.destroy(), f.translate = n, f.canvas.removeChild(f.drawPane), f.canvas.removeChild(f.overlayPane), f.drawPane = l, f.overlayPane = m, f.setEventsEnabled(k)
            }
            return g
        },
        getScaleForPageCount: function(a, b, c, d) {
            if (1 > a) return 1;
            c = null != c ? c : mxConstants.PAGE_FORMAT_A4_PORTRAIT;
            d = null != d ? d : 0;
            var e = c.width - 2 * d;
            c = c.height - 2 * d;
            d = b.getGraphBounds().clone();
            b = b.getView().getScale();
            d.width /= b;
            d.height /= b;
            b = d.width;
            c = b / d.height / (e / c);
            d = Math.sqrt(a);
            var f = Math.sqrt(c);
            c = d * f;
            d /= f;
            if (1 > c && d > a) {
                var g = d / a;
                d = a;
                c /= g
            }
            1 > d && c > a && (g = c / a, c = a, d /= g);
            g = Math.ceil(c) * Math.ceil(d);
            for (f = 0; g > a;) {
                var g = Math.floor(c) / c,
                    k = Math.floor(d) / d;
                1 == g && (g = Math.floor(c - 1) / c);
                1 == k && (k = Math.floor(d - 1) / d);
                g = g > k ? g : k;
                c *= g;
                d *= g;
                g = Math.ceil(c) * Math.ceil(d);
                f++;
                if (10 < f) break
            }
            return 0.99999 * (e * c / b)
        },
        show: function(a,
            b, c, d, e, f) {
            c = null != c ? c : 0;
            d = null != d ? d : 0;
            null == b ? b = window.open().document : b.open();
            var g = a.getGraphBounds(),
                k = -g.x + c,
                l = -g.y + d;
            null == e && (e = g.width + c);
            null == f && (f = g.height + d);
            if (mxClient.IS_IE || 11 == document.documentMode) {
                d = "<html><head>";
                g = document.getElementsByTagName("base");
                for (c = 0; c < g.length; c++) d += g[c].outerHTML;
                d += "<style>";
                for (c = 0; c < document.styleSheets.length; c++) try {
                    d += document.styleSheets(c).cssText
                } catch (m) {}
                d = d + "</style></head><body>" + ('<div style="position:absolute;overflow:hidden;width:' +
                    e + "px;height:" + f + 'px;"><div style="position:relative;left:' + k + "px;top:" + l + 'px;">');
                d += a.container.innerHTML;
                d += "</div></div></body><html>";
                b.writeln(d);
                b.close()
            } else {
                b.writeln("<html><head>");
                g = document.getElementsByTagName("base");
                for (c = 0; c < g.length; c++) b.writeln(mxUtils.getOuterHtml(g[c]));
                d = document.getElementsByTagName("link");
                for (c = 0; c < d.length; c++) b.writeln(mxUtils.getOuterHtml(d[c]));
                d = document.getElementsByTagName("style");
                for (c = 0; c < d.length; c++) b.writeln(mxUtils.getOuterHtml(d[c]));
                b.writeln("</head><body></body></html>");
                b.close();
                c = b.createElement("div");
                c.position = "absolute";
                c.overflow = "hidden";
                c.style.width = e + "px";
                c.style.height = f + "px";
                e = b.createElement("div");
                e.style.position = "relative";
                e.style.left = k + "px";
                e.style.top = l + "px";
                for (a = a.container.firstChild; null != a;) k = a.cloneNode(!0), e.appendChild(k), a = a.nextSibling;
                c.appendChild(e);
                b.body.appendChild(c)
            }
            mxUtils.removeCursors(b.body);
            return b
        },
        printScreen: function(a) {
            var b = window.open();
            mxUtils.show(a, b.document);
            a = function() {
                b.focus();
                b.print();
                b.close()
            };
            mxClient.IS_GC ?
                b.setTimeout(a, 500) : a()
        },
        popup: function(a, b) {
            if (b) {
                var c = document.createElement("div");
                c.style.overflow = "scroll";
                c.style.width = "636px";
                c.style.height = "460px";
                var d = document.createElement("pre");
                d.innerHTML = mxUtils.htmlEntities(a, !1).replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
                c.appendChild(d);
                var d = document.body.clientWidth,
                    e = Math.max(document.body.clientHeight || 0, document.documentElement.clientHeight),
                    c = new mxWindow("Popup Window", c, d / 2 - 320, e / 2 - 240, 640, 480, !1, !0);
                c.setClosable(!0);
                c.setVisible(!0)
            } else mxClient.IS_NS ?
                (c = window.open(), c.document.writeln("<pre>" + mxUtils.htmlEntities(a) + "</pre"), c.document.close()) : (c = window.open(), d = c.document.createElement("pre"), d.innerHTML = mxUtils.htmlEntities(a, !1).replace(/\n/g, "<br>").replace(/ /g, "&nbsp;"), c.document.body.appendChild(d))
        },
        alert: function(a) {
            alert(a)
        },
        prompt: function(a, b) {
            return prompt(a, null != b ? b : "")
        },
        confirm: function(a) {
            return confirm(a)
        },
        error: function(a, b, c, d) {
            var e = document.createElement("div");
            e.style.padding = "20px";
            var f = document.createElement("img");
            f.setAttribute("src", d || mxUtils.errorImage);
            f.setAttribute("valign", "bottom");
            f.style.verticalAlign = "middle";
            e.appendChild(f);
            e.appendChild(document.createTextNode("\u00a0"));
            e.appendChild(document.createTextNode("\u00a0"));
            e.appendChild(document.createTextNode("\u00a0"));
            mxUtils.write(e, a);
            a = document.body.clientWidth;
            d = document.body.clientHeight || document.documentElement.clientHeight;
            var g = new mxWindow(mxResources.get(mxUtils.errorResource) || mxUtils.errorResource, e, (a - b) / 2, d / 4, b, null, !1, !0);
            c && (mxUtils.br(e),
                b = document.createElement("p"), c = document.createElement("button"), mxClient.IS_IE ? c.style.cssText = "float:right" : c.setAttribute("style", "float:right"), mxEvent.addListener(c, "click", function(a) {
                    g.destroy()
                }), mxUtils.write(c, mxResources.get(mxUtils.closeResource) || mxUtils.closeResource), b.appendChild(c), e.appendChild(b), mxUtils.br(e), g.setClosable(!0));
            g.setVisible(!0);
            return g
        },
        makeDraggable: function(a, b, c, d, e, f, g, k, l, m) {
            a = new mxDragSource(a, c);
            a.dragOffset = new mxPoint(null != e ? e : 0, null != f ? f : mxConstants.TOOLTIP_VERTICAL_OFFSET);
            a.autoscroll = g;
            a.setGuidesEnabled(!1);
            null != l && (a.highlightDropTargets = l);
            null != m && (a.getDropTarget = m);
            a.getGraphForEvent = function(a) {
                return "function" == typeof b ? b(a) : b
            };
            null != d && (a.createDragElement = function() {
                return d.cloneNode(!0)
            }, k && (a.createPreviewElement = function(a) {
                var b = d.cloneNode(!0),
                    c = parseInt(b.style.width),
                    e = parseInt(b.style.height);
                b.style.width = Math.round(c * a.view.scale) + "px";
                b.style.height = Math.round(e * a.view.scale) + "px";
                return b
            }));
            return a
        }
    },
    mxConstants = {
        DEFAULT_HOTSPOT: 0.3,
        MIN_HOTSPOT_SIZE: 8,
        MAX_HOTSPOT_SIZE: 0,
        RENDERING_HINT_EXACT: "exact",
        RENDERING_HINT_FASTER: "faster",
        RENDERING_HINT_FASTEST: "fastest",
        DIALECT_SVG: "svg",
        DIALECT_VML: "vml",
        DIALECT_MIXEDHTML: "mixedHtml",
        DIALECT_PREFERHTML: "preferHtml",
        DIALECT_STRICTHTML: "strictHtml",
        NS_SVG: "http://www.w3.org/2000/svg",
        NS_XHTML: "http://www.w3.org/1999/xhtml",
        NS_XLINK: "http://www.w3.org/1999/xlink",
        SHADOWCOLOR: "gray",
        SHADOW_OFFSET_X: 2,
        SHADOW_OFFSET_Y: 3,
        SHADOW_OPACITY: 1,
        NODETYPE_ELEMENT: 1,
        NODETYPE_ATTRIBUTE: 2,
        NODETYPE_TEXT: 3,
        NODETYPE_CDATA: 4,
        NODETYPE_ENTITY_REFERENCE: 5,
        NODETYPE_ENTITY: 6,
        NODETYPE_PROCESSING_INSTRUCTION: 7,
        NODETYPE_COMMENT: 8,
        NODETYPE_DOCUMENT: 9,
        NODETYPE_DOCUMENTTYPE: 10,
        NODETYPE_DOCUMENT_FRAGMENT: 11,
        NODETYPE_NOTATION: 12,
        TOOLTIP_VERTICAL_OFFSET: 16,
        DEFAULT_VALID_COLOR: "#00FF00",
        DEFAULT_INVALID_COLOR: "#FF0000",
        OUTLINE_HIGHLIGHT_COLOR: "#00FF00",
        OUTLINE_HIGHLIGHT_STROKEWIDTH: 5,
        HIGHLIGHT_STROKEWIDTH: 3,
        CURSOR_MOVABLE_VERTEX: "move",
        CURSOR_MOVABLE_EDGE: "move",
        CURSOR_LABEL_HANDLE: "default",
        CURSOR_BEND_HANDLE: "pointer",
        CURSOR_CONNECT: "pointer",
        HIGHLIGHT_COLOR: "#00FF00",
        CONNECT_TARGET_COLOR: "#0000FF",
        INVALID_CONNECT_TARGET_COLOR: "#FF0000",
        DROP_TARGET_COLOR: "#0000FF",
        VALID_COLOR: "#00FF00",
        INVALID_COLOR: "#FF0000",
        EDGE_SELECTION_COLOR: "#00FF00",
        VERTEX_SELECTION_COLOR: "#00FF00",
        VERTEX_SELECTION_STROKEWIDTH: 1,
        EDGE_SELECTION_STROKEWIDTH: 1,
        VERTEX_SELECTION_DASHED: !0,
        EDGE_SELECTION_DASHED: !0,
        GUIDE_COLOR: "#FF0000",
        GUIDE_STROKEWIDTH: 1,
        OUTLINE_COLOR: "#0099FF",
        OUTLINE_STROKEWIDTH: mxClient.IS_IE ? 2 : 3,
        HANDLE_SIZE: 7,
        LABEL_HANDLE_SIZE: 4,
        HANDLE_FILLCOLOR: "#00FF00",
        HANDLE_STROKECOLOR: "black",
        LABEL_HANDLE_FILLCOLOR: "yellow",
        CONNECT_HANDLE_FILLCOLOR: "#0000FF",
        LOCKED_HANDLE_FILLCOLOR: "#FF0000",
        OUTLINE_HANDLE_FILLCOLOR: "#00FFFF",
        OUTLINE_HANDLE_STROKECOLOR: "#0033FF",
        DEFAULT_FONTFAMILY: "Arial,Helvetica",
        DEFAULT_FONTSIZE: 11,
        LINE_HEIGHT: 1.2,
        ABSOLUTE_LINE_HEIGHT: !1,
        DEFAULT_FONTSTYLE: 0,
        DEFAULT_STARTSIZE: 40,
        DEFAULT_MARKERSIZE: 6,
        DEFAULT_IMAGESIZE: 24,
        ENTITY_SEGMENT: 30,
        RECTANGLE_ROUNDING_FACTOR: 0.15,
        LINE_ARCSIZE: 20,
        ARROW_SPACING: 10,
        ARROW_WIDTH: 30,
        ARROW_SIZE: 30,
        PAGE_FORMAT_A4_PORTRAIT: new mxRectangle(0,
            0, 826, 1169),
        PAGE_FORMAT_A4_LANDSCAPE: new mxRectangle(0, 0, 1169, 826),
        PAGE_FORMAT_LETTER_PORTRAIT: new mxRectangle(0, 0, 850, 1100),
        PAGE_FORMAT_LETTER_LANDSCAPE: new mxRectangle(0, 0, 1100, 850),
        NONE: "none",
        STYLE_PERIMETER: "perimeter",
        STYLE_SOURCE_PORT: "sourcePort",
        STYLE_TARGET_PORT: "targetPort",
        STYLE_PORT_CONSTRAINT: "portConstraint",
        STYLE_PORT_CONSTRAINT_ROTATION: "portConstraintRotation",
        STYLE_OPACITY: "opacity",
        STYLE_TEXT_OPACITY: "textOpacity",
        STYLE_OVERFLOW: "overflow",
        STYLE_ORTHOGONAL: "orthogonal",
        STYLE_EXIT_X: "exitX",
        STYLE_EXIT_Y: "exitY",
        STYLE_EXIT_PERIMETER: "exitPerimeter",
        STYLE_ENTRY_X: "entryX",
        STYLE_ENTRY_Y: "entryY",
        STYLE_ENTRY_PERIMETER: "entryPerimeter",
        STYLE_WHITE_SPACE: "whiteSpace",
        STYLE_ROTATION: "rotation",
        STYLE_FILLCOLOR: "fillColor",
        STYLE_SWIMLANE_FILLCOLOR: "swimlaneFillColor",
        STYLE_MARGIN: "margin",
        STYLE_GRADIENTCOLOR: "gradientColor",
        STYLE_GRADIENT_DIRECTION: "gradientDirection",
        STYLE_STROKECOLOR: "strokeColor",
        STYLE_SEPARATORCOLOR: "separatorColor",
        STYLE_STROKEWIDTH: "strokeWidth",
        STYLE_ALIGN: "align",
        STYLE_VERTICAL_ALIGN: "verticalAlign",
        STYLE_LABEL_WIDTH: "labelWidth",
        STYLE_LABEL_POSITION: "labelPosition",
        STYLE_VERTICAL_LABEL_POSITION: "verticalLabelPosition",
        STYLE_IMAGE_ASPECT: "imageAspect",
        STYLE_IMAGE_ALIGN: "imageAlign",
        STYLE_IMAGE_VERTICAL_ALIGN: "imageVerticalAlign",
        STYLE_GLASS: "glass",
        STYLE_IMAGE: "image",
        STYLE_IMAGE_WIDTH: "imageWidth",
        STYLE_IMAGE_HEIGHT: "imageHeight",
        STYLE_IMAGE_BACKGROUND: "imageBackground",
        STYLE_IMAGE_BORDER: "imageBorder",
        STYLE_FLIPH: "flipH",
        STYLE_FLIPV: "flipV",
        STYLE_NOLABEL: "noLabel",
        STYLE_NOEDGESTYLE: "noEdgeStyle",
        STYLE_LABEL_BACKGROUNDCOLOR: "labelBackgroundColor",
        STYLE_LABEL_BORDERCOLOR: "labelBorderColor",
        STYLE_LABEL_PADDING: "labelPadding",
        STYLE_INDICATOR_SHAPE: "indicatorShape",
        STYLE_INDICATOR_IMAGE: "indicatorImage",
        STYLE_INDICATOR_COLOR: "indicatorColor",
        STYLE_INDICATOR_STROKECOLOR: "indicatorStrokeColor",
        STYLE_INDICATOR_GRADIENTCOLOR: "indicatorGradientColor",
        STYLE_INDICATOR_SPACING: "indicatorSpacing",
        STYLE_INDICATOR_WIDTH: "indicatorWidth",
        STYLE_INDICATOR_HEIGHT: "indicatorHeight",
        STYLE_INDICATOR_DIRECTION: "indicatorDirection",
        STYLE_SHADOW: "shadow",
        STYLE_SEGMENT: "segment",
        STYLE_ENDARROW: "endArrow",
        STYLE_STARTARROW: "startArrow",
        STYLE_ENDSIZE: "endSize",
        STYLE_STARTSIZE: "startSize",
        STYLE_SWIMLANE_LINE: "swimlaneLine",
        STYLE_ENDFILL: "endFill",
        STYLE_STARTFILL: "startFill",
        STYLE_DASHED: "dashed",
        STYLE_DASH_PATTERN: "dashPattern",
        STYLE_ROUNDED: "rounded",
        STYLE_CURVED: "curved",
        STYLE_ARCSIZE: "arcSize",
        STYLE_SMOOTH: "smooth",
        STYLE_SOURCE_PERIMETER_SPACING: "sourcePerimeterSpacing",
        STYLE_TARGET_PERIMETER_SPACING: "targetPerimeterSpacing",
        STYLE_PERIMETER_SPACING: "perimeterSpacing",
        STYLE_SPACING: "spacing",
        STYLE_SPACING_TOP: "spacingTop",
        STYLE_SPACING_LEFT: "spacingLeft",
        STYLE_SPACING_BOTTOM: "spacingBottom",
        STYLE_SPACING_RIGHT: "spacingRight",
        STYLE_HORIZONTAL: "horizontal",
        STYLE_DIRECTION: "direction",
        STYLE_ELBOW: "elbow",
        STYLE_FONTCOLOR: "fontColor",
        STYLE_FONTFAMILY: "fontFamily",
        STYLE_FONTSIZE: "fontSize",
        STYLE_FONTSTYLE: "fontStyle",
        STYLE_ASPECT: "aspect",
        STYLE_AUTOSIZE: "autosize",
        STYLE_FOLDABLE: "foldable",
        STYLE_EDITABLE: "editable",
        STYLE_BENDABLE: "bendable",
        STYLE_MOVABLE: "movable",
        STYLE_RESIZABLE: "resizable",
        STYLE_ROTATABLE: "rotatable",
        STYLE_CLONEABLE: "cloneable",
        STYLE_DELETABLE: "deletable",
        STYLE_SHAPE: "shape",
        STYLE_EDGE: "edgeStyle",
        STYLE_LOOP: "loopStyle",
        STYLE_ROUTING_CENTER_X: "routingCenterX",
        STYLE_ROUTING_CENTER_Y: "routingCenterY",
        FONT_BOLD: 1,
        FONT_ITALIC: 2,
        FONT_UNDERLINE: 4,
        FONT_SHADOW: 8,
        SHAPE_RECTANGLE: "rectangle",
        SHAPE_ELLIPSE: "ellipse",
        SHAPE_DOUBLE_ELLIPSE: "doubleEllipse",
        SHAPE_RHOMBUS: "rhombus",
        SHAPE_LINE: "line",
        SHAPE_IMAGE: "image",
        SHAPE_ARROW: "arrow",
        SHAPE_LABEL: "label",
        SHAPE_CYLINDER: "cylinder",
        SHAPE_SWIMLANE: "swimlane",
        SHAPE_CONNECTOR: "connector",
        SHAPE_ACTOR: "actor",
        SHAPE_CLOUD: "cloud",
        SHAPE_TRIANGLE: "triangle",
        SHAPE_HEXAGON: "hexagon",
        ARROW_CLASSIC: "classic",
        ARROW_BLOCK: "block",
        ARROW_OPEN: "open",
        ARROW_OVAL: "oval",
        ARROW_DIAMOND: "diamond",
        ARROW_DIAMOND_THIN: "diamondThin",
        ALIGN_LEFT: "left",
        ALIGN_CENTER: "center",
        ALIGN_RIGHT: "right",
        ALIGN_TOP: "top",
        ALIGN_MIDDLE: "middle",
        ALIGN_BOTTOM: "bottom",
        DIRECTION_NORTH: "north",
        DIRECTION_SOUTH: "south",
        DIRECTION_EAST: "east",
        DIRECTION_WEST: "west",
        DIRECTION_MASK_NONE: 0,
        DIRECTION_MASK_WEST: 1,
        DIRECTION_MASK_NORTH: 2,
        DIRECTION_MASK_SOUTH: 4,
        DIRECTION_MASK_EAST: 8,
        DIRECTION_MASK_ALL: 15,
        ELBOW_VERTICAL: "vertical",
        ELBOW_HORIZONTAL: "horizontal",
        EDGESTYLE_ELBOW: "elbowEdgeStyle",
        EDGESTYLE_ENTITY_RELATION: "entityRelationEdgeStyle",
        EDGESTYLE_LOOP: "loopEdgeStyle",
        EDGESTYLE_SIDETOSIDE: "sideToSideEdgeStyle",
        EDGESTYLE_TOPTOBOTTOM: "topToBottomEdgeStyle",
        EDGESTYLE_ORTHOGONAL: "orthogonalEdgeStyle",
        EDGESTYLE_SEGMENT: "segmentEdgeStyle",
        PERIMETER_ELLIPSE: "ellipsePerimeter",
        PERIMETER_RECTANGLE: "rectanglePerimeter",
        PERIMETER_RHOMBUS: "rhombusPerimeter",
        PERIMETER_HEXAGON: "hexagonPerimeter",
        PERIMETER_TRIANGLE: "trianglePerimeter"
    };

function mxEventObject(a) {
    this.name = a;
    this.properties = [];
    for (var b = 1; b < arguments.length; b += 2) null != arguments[b + 1] && (this.properties[arguments[b]] = arguments[b + 1])
}
mxEventObject.prototype.name = null;
mxEventObject.prototype.properties = null;
mxEventObject.prototype.consumed = !1;
mxEventObject.prototype.getName = function() {
    return this.name
};
mxEventObject.prototype.getProperties = function() {
    return this.properties
};
mxEventObject.prototype.getProperty = function(a) {
    return this.properties[a]
};
mxEventObject.prototype.isConsumed = function() {
    return this.consumed
};
mxEventObject.prototype.consume = function() {
    this.consumed = !0
};

function mxMouseEvent(a, b) {
    this.evt = a;
    this.state = b
}
mxMouseEvent.prototype.consumed = !1;
mxMouseEvent.prototype.evt = null;
mxMouseEvent.prototype.graphX = null;
mxMouseEvent.prototype.graphY = null;
mxMouseEvent.prototype.state = null;
mxMouseEvent.prototype.getEvent = function() {
    return this.evt
};
mxMouseEvent.prototype.getSource = function() {
    return mxEvent.getSource(this.evt)
};
mxMouseEvent.prototype.isSource = function(a) {
    return null != a ? mxUtils.isAncestorNode(a.node, this.getSource()) : !1
};
mxMouseEvent.prototype.getX = function() {
    return mxEvent.getClientX(this.getEvent())
};
mxMouseEvent.prototype.getY = function() {
    return mxEvent.getClientY(this.getEvent())
};
mxMouseEvent.prototype.getGraphX = function() {
    return this.graphX
};
mxMouseEvent.prototype.getGraphY = function() {
    return this.graphY
};
mxMouseEvent.prototype.getState = function() {
    return this.state
};
mxMouseEvent.prototype.getCell = function() {
    var a = this.getState();
    return null != a ? a.cell : null
};
mxMouseEvent.prototype.isPopupTrigger = function() {
    return mxEvent.isPopupTrigger(this.getEvent())
};
mxMouseEvent.prototype.isConsumed = function() {
    return this.consumed
};
mxMouseEvent.prototype.consume = function(a) {
    (null != a ? a : 1) && this.evt.preventDefault && this.evt.preventDefault();
    mxClient.IS_IE && (this.evt.returnValue = !0);
    this.consumed = !0
};

function mxEventSource(a) {
    this.setEventSource(a)
}
mxEventSource.prototype.eventListeners = null;
mxEventSource.prototype.eventsEnabled = !0;
mxEventSource.prototype.eventSource = null;
mxEventSource.prototype.isEventsEnabled = function() {
    return this.eventsEnabled
};
mxEventSource.prototype.setEventsEnabled = function(a) {
    this.eventsEnabled = a
};
mxEventSource.prototype.getEventSource = function() {
    return this.eventSource
};
mxEventSource.prototype.setEventSource = function(a) {
    this.eventSource = a
};
mxEventSource.prototype.addListener = function(a, b) {
    null == this.eventListeners && (this.eventListeners = []);
    this.eventListeners.push(a);
    this.eventListeners.push(b)
};
mxEventSource.prototype.removeListener = function(a) {
    if (null != this.eventListeners)
        for (var b = 0; b < this.eventListeners.length;) this.eventListeners[b + 1] == a ? this.eventListeners.splice(b, 2) : b += 2
};
mxEventSource.prototype.fireEvent = function(a, b) {
    if (null != this.eventListeners && this.isEventsEnabled()) {
        null == a && (a = new mxEventObject);
        null == b && (b = this.getEventSource());
        null == b && (b = this);
        for (var c = [b, a], d = 0; d < this.eventListeners.length; d += 2) {
            var e = this.eventListeners[d];
            (null == e || e == a.getName()) && this.eventListeners[d + 1].apply(this, c)
        }
    }
};
var mxEvent = {
    objects: [],
    addListener: function() {
        var a = function(a, c, d) {
            null == a.mxListenerList && (a.mxListenerList = [], mxEvent.objects.push(a));
            a.mxListenerList.push({
                name: c,
                f: d
            })
        };
        return window.addEventListener ? function(b, c, d) {
            b.addEventListener(c, d, !1);
            a(b, c, d)
        } : function(b, c, d) {
            b.attachEvent("on" + c, d);
            a(b, c, d)
        }
    }(),
    removeListener: function() {
        var a = function(a, c, d) {
            if (null != a.mxListenerList) {
                c = a.mxListenerList.length;
                for (var e = 0; e < c; e++)
                    if (a.mxListenerList[e].f == d) {
                        a.mxListenerList.splice(e, 1);
                        break
                    }
                0 ==
                    a.mxListenerList.length && (a.mxListenerList = null, a = mxUtils.indexOf(mxEvent.objects, a), 0 <= a && mxEvent.objects.splice(a, 1))
            }
        };
        return window.removeEventListener ? function(b, c, d) {
            b.removeEventListener(c, d, !1);
            a(b, c, d)
        } : function(b, c, d) {
            b.detachEvent("on" + c, d);
            a(b, c, d)
        }
    }(),
    removeAllListeners: function(a) {
        var b = a.mxListenerList;
        if (null != b)
            for (; 0 < b.length;) {
                var c = b[0];
                mxEvent.removeListener(a, c.name, c.f)
            }
    },
    addGestureListeners: function(a, b, c, d) {
        null != b && mxEvent.addListener(a, mxClient.IS_POINTER ? "MSPointerDown" :
            "mousedown", b);
        null != c && mxEvent.addListener(a, mxClient.IS_POINTER ? "MSPointerMove" : "mousemove", c);
        null != d && mxEvent.addListener(a, mxClient.IS_POINTER ? "MSPointerUp" : "mouseup", d);
        !mxClient.IS_POINTER && mxClient.IS_TOUCH && (null != b && mxEvent.addListener(a, "touchstart", b), null != c && mxEvent.addListener(a, "touchmove", c), null != d && mxEvent.addListener(a, "touchend", d))
    },
    removeGestureListeners: function(a, b, c, d) {
        null != b && mxEvent.removeListener(a, mxClient.IS_POINTER ? "MSPointerDown" : "mousedown", b);
        null != c && mxEvent.removeListener(a,
            mxClient.IS_POINTER ? "MSPointerMove" : "mousemove", c);
        null != d && mxEvent.removeListener(a, mxClient.IS_POINTER ? "MSPointerUp" : "mouseup", d);
        !mxClient.IS_POINTER && mxClient.IS_TOUCH && (null != b && mxEvent.removeListener(a, "touchstart", b), null != c && mxEvent.removeListener(a, "touchmove", c), null != d && mxEvent.removeListener(a, "touchend", d))
    },
    redirectMouseEvents: function(a, b, c, d, e, f, g) {
        var k = function(a) {
            return "function" == typeof c ? c(a) : c
        };
        mxEvent.addGestureListeners(a, function(a) {
            null != d ? d(a) : mxEvent.isConsumed(a) || b.fireMouseEvent(mxEvent.MOUSE_DOWN,
                new mxMouseEvent(a, k(a)))
        }, function(a) {
            null != e ? e(a) : mxEvent.isConsumed(a) || b.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(a, k(a)))
        }, function(a) {
            null != f ? f(a) : mxEvent.isConsumed(a) || b.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(a, k(a)))
        });
        mxEvent.addListener(a, "dblclick", function(a) {
            if (null != g) g(a);
            else if (!mxEvent.isConsumed(a)) {
                var c = k(a);
                b.dblClick(a, null != c ? c.cell : null)
            }
        })
    },
    release: function(a) {
        if (null != a && (mxEvent.removeAllListeners(a), a = a.childNodes, null != a))
            for (var b = a.length, c = 0; c <
                b; c += 1) mxEvent.release(a[c])
    },
    addMouseWheelListener: function(a) {
        if (null != a) {
            var b = function(b) {
                null == b && (b = window.event);
                var d = 0,
                    d = mxClient.IS_FF ? -b.detail / 2 : b.wheelDelta / 120;
                0 != d && a(b, 0 < d)
            };
            mxClient.IS_NS && null == document.documentMode ? mxEvent.addListener(window, mxClient.IS_SF || mxClient.IS_GC ? "mousewheel" : "DOMMouseScroll", b) : mxEvent.addListener(document, "mousewheel", b)
        }
    },
    disableContextMenu: function() {
        return mxClient.IS_IE && ("undefined" === typeof document.documentMode || 9 > document.documentMode) ? function(a) {
            mxEvent.addListener(a,
                "contextmenu", function() {
                    return !1
                })
        } : function(a) {
            a.setAttribute("oncontextmenu", "return false;")
        }
    }(),
    getSource: function(a) {
        return null != a.srcElement ? a.srcElement : a.target
    },
    isConsumed: function(a) {
        return null != a.isConsumed && a.isConsumed
    },
    isTouchEvent: function(a) {
        return null != a.pointerType ? "touch" == a.pointerType || a.pointerType === a.MSPOINTER_TYPE_TOUCH : null != a.mozInputSource ? 5 == a.mozInputSource : 0 == a.type.indexOf("touch")
    },
    isMultiTouchEvent: function(a) {
        return null != a.type && 0 == a.type.indexOf("touch") &&
            null != a.touches && 1 < a.touches.length
    },
    isMouseEvent: function(a) {
        return null != a.pointerType ? "mouse" == a.pointerType || a.pointerType === a.MSPOINTER_TYPE_MOUSE : null != a.mozInputSource ? 1 == a.mozInputSource : 0 == a.type.indexOf("mouse")
    },
    isLeftMouseButton: function(a) {
        return a.button == (mxClient.IS_IE && ("undefined" === typeof document.documentMode || 9 > document.documentMode) ? 1 : 0)
    },
    isMiddleMouseButton: function(a) {
        return a.button == (mxClient.IS_IE && ("undefined" === typeof document.documentMode || 9 > document.documentMode) ? 4 :
            1)
    },
    isRightMouseButton: function(a) {
        return 2 == a.button
    },
    isPopupTrigger: function(a) {
        return mxEvent.isRightMouseButton(a) || mxClient.IS_MAC && mxEvent.isControlDown(a) && !mxEvent.isShiftDown(a) && !mxEvent.isMetaDown(a) && !mxEvent.isAltDown(a)
    },
    isShiftDown: function(a) {
        return null != a ? a.shiftKey : !1
    },
    isAltDown: function(a) {
        return null != a ? a.altKey : !1
    },
    isControlDown: function(a) {
        return null != a ? a.ctrlKey : !1
    },
    isMetaDown: function(a) {
        return null != a ? a.metaKey : !1
    },
    getMainEvent: function(a) {
        ("touchstart" == a.type || "touchmove" ==
            a.type) && null != a.touches && null != a.touches[0] ? a = a.touches[0] : "touchend" == a.type && (null != a.changedTouches && null != a.changedTouches[0]) && (a = a.changedTouches[0]);
        return a
    },
    getClientX: function(a) {
        return mxEvent.getMainEvent(a).clientX
    },
    getClientY: function(a) {
        return mxEvent.getMainEvent(a).clientY
    },
    consume: function(a, b, c) {
        c = null != c ? c : !0;
        if (null != b ? b : 1) a.preventDefault ? (c && a.stopPropagation(), a.preventDefault()) : c && (a.cancelBubble = !0);
        a.isConsumed = !0;
        a.preventDefault || (a.returnValue = !1)
    },
    LABEL_HANDLE: -1,
    ROTATION_HANDLE: -2,
    MOUSE_DOWN: "mouseDown",
    MOUSE_MOVE: "mouseMove",
    MOUSE_UP: "mouseUp",
    ACTIVATE: "activate",
    RESIZE_START: "resizeStart",
    RESIZE: "resize",
    RESIZE_END: "resizeEnd",
    MOVE_START: "moveStart",
    MOVE: "move",
    MOVE_END: "moveEnd",
    PAN_START: "panStart",
    PAN: "pan",
    PAN_END: "panEnd",
    MINIMIZE: "minimize",
    NORMALIZE: "normalize",
    MAXIMIZE: "maximize",
    HIDE: "hide",
    SHOW: "show",
    CLOSE: "close",
    DESTROY: "destroy",
    REFRESH: "refresh",
    SIZE: "size",
    SELECT: "select",
    FIRED: "fired",
    FIRE_MOUSE_EVENT: "fireMouseEvent",
    GESTURE: "gesture",
    TAP_AND_HOLD: "tapAndHold",
    GET: "get",
    RECEIVE: "receive",
    CONNECT: "connect",
    DISCONNECT: "disconnect",
    SUSPEND: "suspend",
    RESUME: "resume",
    MARK: "mark",
    SESSION: "session",
    ROOT: "root",
    POST: "post",
    OPEN: "open",
    SAVE: "save",
    BEFORE_ADD_VERTEX: "beforeAddVertex",
    ADD_VERTEX: "addVertex",
    AFTER_ADD_VERTEX: "afterAddVertex",
    DONE: "done",
    EXECUTE: "execute",
    EXECUTED: "executed",
    BEGIN_UPDATE: "beginUpdate",
    START_EDIT: "startEdit",
    END_UPDATE: "endUpdate",
    END_EDIT: "endEdit",
    BEFORE_UNDO: "beforeUndo",
    UNDO: "undo",
    REDO: "redo",
    CHANGE: "change",
    NOTIFY: "notify",
    LAYOUT_CELLS: "layoutCells",
    CLICK: "click",
    SCALE: "scale",
    TRANSLATE: "translate",
    SCALE_AND_TRANSLATE: "scaleAndTranslate",
    UP: "up",
    DOWN: "down",
    ADD: "add",
    REMOVE: "remove",
    CLEAR: "clear",
    ADD_CELLS: "addCells",
    CELLS_ADDED: "cellsAdded",
    MOVE_CELLS: "moveCells",
    CELLS_MOVED: "cellsMoved",
    RESIZE_CELLS: "resizeCells",
    CELLS_RESIZED: "cellsResized",
    TOGGLE_CELLS: "toggleCells",
    CELLS_TOGGLED: "cellsToggled",
    ORDER_CELLS: "orderCells",
    CELLS_ORDERED: "cellsOrdered",
    REMOVE_CELLS: "removeCells",
    CELLS_REMOVED: "cellsRemoved",
    GROUP_CELLS: "groupCells",
    UNGROUP_CELLS: "ungroupCells",
    REMOVE_CELLS_FROM_PARENT: "removeCellsFromParent",
    FOLD_CELLS: "foldCells",
    CELLS_FOLDED: "cellsFolded",
    ALIGN_CELLS: "alignCells",
    LABEL_CHANGED: "labelChanged",
    CONNECT_CELL: "connectCell",
    CELL_CONNECTED: "cellConnected",
    SPLIT_EDGE: "splitEdge",
    FLIP_EDGE: "flipEdge",
    START_EDITING: "startEditing",
    ADD_OVERLAY: "addOverlay",
    REMOVE_OVERLAY: "removeOverlay",
    UPDATE_CELL_SIZE: "updateCellSize",
    ESCAPE: "escape",
    CLICK: "click",
    DOUBLE_CLICK: "doubleClick",
    START: "start",
    RESET: "reset"
};

function mxXmlRequest(a, b, c, d, e, f) {
    this.url = a;
    this.params = b;
    this.method = c || "POST";
    this.async = null != d ? d : !0;
    this.username = e;
    this.password = f
}
mxXmlRequest.prototype.url = null;
mxXmlRequest.prototype.params = null;
mxXmlRequest.prototype.method = null;
mxXmlRequest.prototype.async = null;
mxXmlRequest.prototype.binary = !1;
mxXmlRequest.prototype.withCredentials = !1;
mxXmlRequest.prototype.username = null;
mxXmlRequest.prototype.password = null;
mxXmlRequest.prototype.request = null;
mxXmlRequest.prototype.decodeSimulateValues = !1;
mxXmlRequest.prototype.isBinary = function() {
    return this.binary
};
mxXmlRequest.prototype.setBinary = function(a) {
    this.binary = a
};
mxXmlRequest.prototype.getText = function() {
    return this.request.responseText
};
mxXmlRequest.prototype.isReady = function() {
    return 4 == this.request.readyState
};
mxXmlRequest.prototype.getDocumentElement = function() {
    var a = this.getXml();
    return null != a ? a.documentElement : null
};
mxXmlRequest.prototype.getXml = function() {
    var a = this.request.responseXML;
    if (9 <= document.documentMode || null == a || null == a.documentElement) a = mxUtils.parseXml(this.request.responseText);
    return a
};
mxXmlRequest.prototype.getText = function() {
    return this.request.responseText
};
mxXmlRequest.prototype.getStatus = function() {
    return this.request.status
};
mxXmlRequest.prototype.create = function() {
    if (window.XMLHttpRequest) return function() {
        var a = new XMLHttpRequest;
        this.isBinary() && a.overrideMimeType && a.overrideMimeType("text/plain; charset=x-user-defined");
        return a
    };
    if ("undefined" != typeof ActiveXObject) return function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
}();
mxXmlRequest.prototype.send = function(a, b) {
    this.request = this.create();
    null != this.request && (null != a && (this.request.onreadystatechange = mxUtils.bind(this, function() {
        this.isReady() && (a(this), this.onreadystatechaange = null)
    })), this.request.open(this.method, this.url, this.async, this.username, this.password), this.setRequestHeaders(this.request, this.params), window.XMLHttpRequest && this.withCredentials && (this.request.withCredentials = "true"), this.request.send(this.params))
};
mxXmlRequest.prototype.setRequestHeaders = function(a, b) {
    null != b && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
};
mxXmlRequest.prototype.simulate = function(a, b) {
    a = a || document;
    var c = null;
    a == document && (c = window.onbeforeunload, window.onbeforeunload = null);
    var d = a.createElement("form");
    d.setAttribute("method", this.method);
    d.setAttribute("action", this.url);
    null != b && d.setAttribute("target", b);
    d.style.display = "none";
    d.style.visibility = "hidden";
    for (var e = 0 < this.params.indexOf("&") ? this.params.split("&") : this.params.split(), f = 0; f < e.length; f++) {
        var g = e[f].indexOf("=");
        if (0 < g) {
            var k = e[f].substring(0, g),
                g = e[f].substring(g +
                    1);
            this.decodeSimulateValues && (g = decodeURIComponent(g));
            var l = a.createElement("textarea");
            l.setAttribute("name", k);
            mxUtils.write(l, g);
            d.appendChild(l)
        }
    }
    a.body.appendChild(d);
    d.submit();
    a.body.removeChild(d);
    null != c && (window.onbeforeunload = c)
};
var mxClipboard = {
    STEPSIZE: 10,
    insertCount: 1,
    cells: null,
    setCells: function(a) {
        mxClipboard.cells = a
    },
    getCells: function() {
        return mxClipboard.cells
    },
    isEmpty: function() {
        return null == mxClipboard.getCells()
    },
    cut: function(a, b) {
        b = mxClipboard.copy(a, b);
        mxClipboard.insertCount = 0;
        mxClipboard.removeCells(a, b);
        return b
    },
    removeCells: function(a, b) {
        a.removeCells(b)
    },
    copy: function(a, b) {
        b = b || a.getSelectionCells();
        var c = a.getExportableCells(b);
        mxClipboard.insertCount = 1;
        mxClipboard.setCells(a.cloneCells(c));
        return c
    },
    paste: function(a) {
        if (!mxClipboard.isEmpty()) {
            var b =
                a.getImportableCells(mxClipboard.getCells()),
                c = mxClipboard.insertCount * mxClipboard.STEPSIZE,
                d = a.getDefaultParent(),
                b = a.importCells(b, c, c, d);
            mxClipboard.insertCount++;
            a.setSelectionCells(b)
        }
    }
};

function mxWindow(a, b, c, d, e, f, g, k, l, m) {
    null != b && (g = null != g ? g : !0, this.content = b, this.init(c, d, e, f, m), this.installMaximizeHandler(), this.installMinimizeHandler(), this.installCloseHandler(), this.setMinimizable(g), this.setTitle(a), (null == k || k) && this.installMoveHandler(), null != l && null != l.parentNode ? l.parentNode.replaceChild(this.div, l) : document.body.appendChild(this.div))
}
mxWindow.prototype = new mxEventSource;
mxWindow.prototype.constructor = mxWindow;
mxWindow.prototype.closeImage = mxClient.imageBasePath + "/close.gif";
mxWindow.prototype.minimizeImage = mxClient.imageBasePath + "/minimize.gif";
mxWindow.prototype.normalizeImage = mxClient.imageBasePath + "/normalize.gif";
mxWindow.prototype.maximizeImage = mxClient.imageBasePath + "/maximize.gif";
mxWindow.prototype.resizeImage = mxClient.imageBasePath + "/resize.gif";
mxWindow.prototype.visible = !1;
mxWindow.prototype.minimumSize = new mxRectangle(0, 0, 50, 40);
mxWindow.prototype.destroyOnClose = !0;
mxWindow.prototype.contentHeightCorrection = 8 == document.documentMode || 7 == document.documentMode ? 6 : 2;
mxWindow.prototype.title = null;
mxWindow.prototype.content = null;
mxWindow.prototype.init = function(a, b, c, d, e) {
    e = null != e ? e : "mxWindow";
    this.div = document.createElement("div");
    this.div.className = e;
    this.div.style.left = a + "px";
    this.div.style.top = b + "px";
    this.table = document.createElement("table");
    this.table.className = e;
    mxClient.IS_POINTER && (this.div.style.msTouchAction = "none");
    null != c && (mxClient.IS_QUIRKS || (this.div.style.width = c + "px"), this.table.style.width = c + "px");
    null != d && (mxClient.IS_QUIRKS || (this.div.style.height = d + "px"), this.table.style.height = d + "px");
    a = document.createElement("tbody");
    b = document.createElement("tr");
    this.title = document.createElement("td");
    this.title.className = e + "Title";
    b.appendChild(this.title);
    a.appendChild(b);
    b = document.createElement("tr");
    this.td = document.createElement("td");
    this.td.className = e + "Pane";
    7 == document.documentMode && (this.td.style.height = "100%");
    this.contentWrapper = document.createElement("div");
    this.contentWrapper.className = e + "Pane";
    this.contentWrapper.style.width = "100%";
    this.contentWrapper.appendChild(this.content);
    if (mxClient.IS_QUIRKS || "DIV" != this.content.nodeName.toUpperCase()) this.contentWrapper.style.height =
        "100%";
    this.td.appendChild(this.contentWrapper);
    b.appendChild(this.td);
    a.appendChild(b);
    this.table.appendChild(a);
    this.div.appendChild(this.table);
    e = mxUtils.bind(this, function(a) {
        this.activate()
    });
    mxEvent.addGestureListeners(this.title, e);
    mxEvent.addGestureListeners(this.table, e);
    this.hide()
};
mxWindow.prototype.setTitle = function(a) {
    for (var b = this.title.firstChild; null != b;) {
        var c = b.nextSibling;
        b.nodeType == mxConstants.NODETYPE_TEXT && b.parentNode.removeChild(b);
        b = c
    }
    mxUtils.write(this.title, a || "")
};
mxWindow.prototype.setScrollable = function(a) {
    0 > navigator.userAgent.indexOf("Presto/2.5") && (this.contentWrapper.style.overflow = a ? "auto" : "hidden")
};
mxWindow.prototype.activate = function() {
    if (mxWindow.activeWindow != this) {
        var a = mxUtils.getCurrentStyle(this.getElement()),
            a = null != a ? a.zIndex : 3;
        if (mxWindow.activeWindow) {
            var b = mxWindow.activeWindow.getElement();
            null != b && null != b.style && (b.style.zIndex = a)
        }
        b = mxWindow.activeWindow;
        this.getElement().style.zIndex = parseInt(a) + 1;
        mxWindow.activeWindow = this;
        this.fireEvent(new mxEventObject(mxEvent.ACTIVATE, "previousWindow", b))
    }
};
mxWindow.prototype.getElement = function() {
    return this.div
};
mxWindow.prototype.fit = function() {
    mxUtils.fit(this.div)
};
mxWindow.prototype.isResizable = function() {
    return null != this.resize ? "none" != this.resize.style.display : !1
};
mxWindow.prototype.setResizable = function(a) {
    if (a)
        if (null == this.resize) {
            this.resize = document.createElement("img");
            this.resize.style.position = "absolute";
            this.resize.style.bottom = "2px";
            this.resize.style.right = "2px";
            this.resize.setAttribute("src", mxClient.imageBasePath + "/resize.gif");
            this.resize.style.cursor = "nw-resize";
            var b = null,
                c = null,
                d = null,
                e = null;
            a = mxUtils.bind(this, function(a) {
                this.activate();
                b = mxEvent.getClientX(a);
                c = mxEvent.getClientY(a);
                d = this.div.offsetWidth;
                e = this.div.offsetHeight;
                mxEvent.addGestureListeners(document,
                    null, f, g);
                this.fireEvent(new mxEventObject(mxEvent.RESIZE_START, "event", a));
                mxEvent.consume(a)
            });
            var f = mxUtils.bind(this, function(a) {
                    if (null != b && null != c) {
                        var f = mxEvent.getClientX(a) - b,
                            g = mxEvent.getClientY(a) - c;
                        this.setSize(d + f, e + g);
                        this.fireEvent(new mxEventObject(mxEvent.RESIZE, "event", a));
                        mxEvent.consume(a)
                    }
                }),
                g = mxUtils.bind(this, function(a) {
                    null != b && null != c && (c = b = null, mxEvent.removeGestureListeners(document, null, f, g), this.fireEvent(new mxEventObject(mxEvent.RESIZE_END, "event", a)), mxEvent.consume(a))
                });
            mxEvent.addGestureListeners(this.resize, a, f, g);
            this.div.appendChild(this.resize)
        } else this.resize.style.display = "inline";
    else null != this.resize && (this.resize.style.display = "none")
};
mxWindow.prototype.setSize = function(a, b) {
    a = Math.max(this.minimumSize.width, a);
    b = Math.max(this.minimumSize.height, b);
    mxClient.IS_QUIRKS || (this.div.style.width = a + "px", this.div.style.height = b + "px");
    this.table.style.width = a + "px";
    this.table.style.height = b + "px";
    mxClient.IS_QUIRKS || (this.contentWrapper.style.height = this.div.offsetHeight - this.title.offsetHeight - this.contentHeightCorrection + "px")
};
mxWindow.prototype.setMinimizable = function(a) {
    this.minimize.style.display = a ? "" : "none"
};
mxWindow.prototype.getMinimumSize = function() {
    return new mxRectangle(0, 0, 0, this.title.offsetHeight)
};
mxWindow.prototype.installMinimizeHandler = function() {
    this.minimize = document.createElement("img");
    this.minimize.setAttribute("src", this.minimizeImage);
    this.minimize.setAttribute("align", "right");
    this.minimize.setAttribute("title", "Minimize");
    this.minimize.style.cursor = "pointer";
    this.minimize.style.marginRight = "1px";
    this.minimize.style.display = "none";
    this.title.appendChild(this.minimize);
    var a = !1,
        b = null,
        c = null,
        d = mxUtils.bind(this, function(d) {
            this.activate();
            if (a) a = !1, this.minimize.setAttribute("src",
                this.minimizeImage), this.minimize.setAttribute("title", "Minimize"), this.contentWrapper.style.display = "", this.maximize.style.display = b, mxClient.IS_QUIRKS || (this.div.style.height = c), this.table.style.height = c, null != this.resize && (this.resize.style.visibility = ""), this.fireEvent(new mxEventObject(mxEvent.NORMALIZE, "event", d));
            else {
                a = !0;
                this.minimize.setAttribute("src", this.normalizeImage);
                this.minimize.setAttribute("title", "Normalize");
                this.contentWrapper.style.display = "none";
                b = this.maximize.style.display;
                this.maximize.style.display = "none";
                c = this.table.style.height;
                var f = this.getMinimumSize();
                0 < f.height && (mxClient.IS_QUIRKS || (this.div.style.height = f.height + "px"), this.table.style.height = f.height + "px");
                0 < f.width && (mxClient.IS_QUIRKS || (this.div.style.width = f.width + "px"), this.table.style.width = f.width + "px");
                null != this.resize && (this.resize.style.visibility = "hidden");
                this.fireEvent(new mxEventObject(mxEvent.MINIMIZE, "event", d))
            }
            mxEvent.consume(d)
        });
    mxEvent.addGestureListeners(this.minimize, d)
};
mxWindow.prototype.setMaximizable = function(a) {
    this.maximize.style.display = a ? "" : "none"
};
mxWindow.prototype.installMaximizeHandler = function() {
    this.maximize = document.createElement("img");
    this.maximize.setAttribute("src", this.maximizeImage);
    this.maximize.setAttribute("align", "right");
    this.maximize.setAttribute("title", "Maximize");
    this.maximize.style.cursor = "default";
    this.maximize.style.marginLeft = "1px";
    this.maximize.style.cursor = "pointer";
    this.maximize.style.display = "none";
    this.title.appendChild(this.maximize);
    var a = !1,
        b = null,
        c = null,
        d = null,
        e = null,
        f = mxUtils.bind(this, function(f) {
            this.activate();
            if ("none" != this.maximize.style.display) {
                if (a) {
                    a = !1;
                    this.maximize.setAttribute("src", this.maximizeImage);
                    this.maximize.setAttribute("title", "Maximize");
                    this.contentWrapper.style.display = "";
                    this.minimize.style.visibility = "";
                    this.div.style.left = b + "px";
                    this.div.style.top = c + "px";
                    if (!mxClient.IS_QUIRKS && (this.div.style.height = d, this.div.style.width = e, k = mxUtils.getCurrentStyle(this.contentWrapper), "auto" == k.overflow || null != this.resize)) this.contentWrapper.style.height = this.div.offsetHeight - this.title.offsetHeight -
                        this.contentHeightCorrection + "px";
                    this.table.style.height = d;
                    this.table.style.width = e;
                    null != this.resize && (this.resize.style.visibility = "");
                    this.fireEvent(new mxEventObject(mxEvent.NORMALIZE, "event", f))
                } else {
                    a = !0;
                    this.maximize.setAttribute("src", this.normalizeImage);
                    this.maximize.setAttribute("title", "Normalize");
                    this.contentWrapper.style.display = "";
                    this.minimize.style.visibility = "hidden";
                    b = parseInt(this.div.style.left);
                    c = parseInt(this.div.style.top);
                    d = this.table.style.height;
                    e = this.table.style.width;
                    this.div.style.left = "0px";
                    this.div.style.top = "0px";
                    k = Math.max(document.body.clientHeight || 0, document.documentElement.clientHeight || 0);
                    mxClient.IS_QUIRKS || (this.div.style.width = document.body.clientWidth - 2 + "px", this.div.style.height = k - 2 + "px");
                    this.table.style.width = document.body.clientWidth - 2 + "px";
                    this.table.style.height = k - 2 + "px";
                    null != this.resize && (this.resize.style.visibility = "hidden");
                    if (!mxClient.IS_QUIRKS) {
                        var k = mxUtils.getCurrentStyle(this.contentWrapper);
                        if ("auto" == k.overflow || null != this.resize) this.contentWrapper.style.height =
                            this.div.offsetHeight - this.title.offsetHeight - this.contentHeightCorrection + "px"
                    }
                    this.fireEvent(new mxEventObject(mxEvent.MAXIMIZE, "event", f))
                }
                mxEvent.consume(f)
            }
        });
    mxEvent.addGestureListeners(this.maximize, f);
    mxEvent.addListener(this.title, "dblclick", f)
};
mxWindow.prototype.installMoveHandler = function() {
    this.title.style.cursor = "move";
    mxEvent.addGestureListeners(this.title, mxUtils.bind(this, function(a) {
        var b = mxEvent.getClientX(a),
            c = mxEvent.getClientY(a),
            d = this.getX(),
            e = this.getY(),
            f = mxUtils.bind(this, function(a) {
                var f = mxEvent.getClientX(a) - b,
                    g = mxEvent.getClientY(a) - c;
                this.setLocation(d + f, e + g);
                this.fireEvent(new mxEventObject(mxEvent.MOVE, "event", a));
                mxEvent.consume(a)
            }),
            g = mxUtils.bind(this, function(a) {
                mxEvent.removeGestureListeners(document, null, f,
                    g);
                this.fireEvent(new mxEventObject(mxEvent.MOVE_END, "event", a));
                mxEvent.consume(a)
            });
        mxEvent.addGestureListeners(document, null, f, g);
        this.fireEvent(new mxEventObject(mxEvent.MOVE_START, "event", a));
        mxEvent.consume(a)
    }));
    mxClient.IS_POINTER && (this.title.style.msTouchAction = "none")
};
mxWindow.prototype.setLocation = function(a, b) {
    this.div.style.left = a + "px";
    this.div.style.top = b + "px"
};
mxWindow.prototype.getX = function() {
    return parseInt(this.div.style.left)
};
mxWindow.prototype.getY = function() {
    return parseInt(this.div.style.top)
};
mxWindow.prototype.installCloseHandler = function() {
    this.closeImg = document.createElement("img");
    this.closeImg.setAttribute("src", this.closeImage);
    this.closeImg.setAttribute("align", "right");
    this.closeImg.setAttribute("title", "Close");
    this.closeImg.style.marginLeft = "2px";
    this.closeImg.style.cursor = "pointer";
    this.closeImg.style.display = "none";
    this.title.insertBefore(this.closeImg, this.title.firstChild);
    mxEvent.addGestureListeners(this.closeImg, mxUtils.bind(this, function(a) {
        this.fireEvent(new mxEventObject(mxEvent.CLOSE,
            "event", a));
        this.destroyOnClose ? this.destroy() : this.setVisible(!1);
        mxEvent.consume(a)
    }))
};
mxWindow.prototype.setImage = function(a) {
    this.image = document.createElement("img");
    this.image.setAttribute("src", a);
    this.image.setAttribute("align", "left");
    this.image.style.marginRight = "4px";
    this.image.style.marginLeft = "0px";
    this.image.style.marginTop = "-2px";
    this.title.insertBefore(this.image, this.title.firstChild)
};
mxWindow.prototype.setClosable = function(a) {
    this.closeImg.style.display = a ? "" : "none"
};
mxWindow.prototype.isVisible = function() {
    return null != this.div ? "none" != this.div.style.display : !1
};
mxWindow.prototype.setVisible = function(a) {
    null != this.div && this.isVisible() != a && (a ? this.show() : this.hide())
};
mxWindow.prototype.show = function() {
    this.div.style.display = "";
    this.activate();
    var a = mxUtils.getCurrentStyle(this.contentWrapper);
    if (!mxClient.IS_QUIRKS && ("auto" == a.overflow || null != this.resize)) this.contentWrapper.style.height = this.div.offsetHeight - this.title.offsetHeight - this.contentHeightCorrection + "px";
    this.fireEvent(new mxEventObject(mxEvent.SHOW))
};
mxWindow.prototype.hide = function() {
    this.div.style.display = "none";
    this.fireEvent(new mxEventObject(mxEvent.HIDE))
};
mxWindow.prototype.destroy = function() {
    this.fireEvent(new mxEventObject(mxEvent.DESTROY));
    null != this.div && (mxEvent.release(this.div), this.div.parentNode.removeChild(this.div), this.div = null);
    this.contentWrapper = this.content = this.title = null
};

function mxForm(a) {
    this.table = document.createElement("table");
    this.table.className = a;
    this.body = document.createElement("tbody");
    this.table.appendChild(this.body)
}
mxForm.prototype.table = null;
mxForm.prototype.body = !1;
mxForm.prototype.getTable = function() {
    return this.table
};
mxForm.prototype.addButtons = function(a, b) {
    var c = document.createElement("tr"),
        d = document.createElement("td");
    c.appendChild(d);
    var d = document.createElement("td"),
        e = document.createElement("button");
    mxUtils.write(e, mxResources.get("ok") || "OK");
    d.appendChild(e);
    mxEvent.addListener(e, "click", function() {
        a()
    });
    e = document.createElement("button");
    mxUtils.write(e, mxResources.get("cancel") || "Cancel");
    d.appendChild(e);
    mxEvent.addListener(e, "click", function() {
        b()
    });
    c.appendChild(d);
    this.body.appendChild(c)
};
mxForm.prototype.addText = function(a, b) {
    var c = document.createElement("input");
    c.setAttribute("type", "text");
    c.value = b;
    return this.addField(a, c)
};
mxForm.prototype.addCheckbox = function(a, b) {
    var c = document.createElement("input");
    c.setAttribute("type", "checkbox");
    this.addField(a, c);
    b && (c.checked = !0);
    return c
};
mxForm.prototype.addTextarea = function(a, b, c) {
    var d = document.createElement("textarea");
    mxClient.IS_NS && c--;
    d.setAttribute("rows", c || 2);
    d.value = b;
    return this.addField(a, d)
};
mxForm.prototype.addCombo = function(a, b, c) {
    var d = document.createElement("select");
    null != c && d.setAttribute("size", c);
    b && d.setAttribute("multiple", "true");
    return this.addField(a, d)
};
mxForm.prototype.addOption = function(a, b, c, d) {
    var e = document.createElement("option");
    mxUtils.writeln(e, b);
    e.setAttribute("value", c);
    d && e.setAttribute("selected", d);
    a.appendChild(e)
};
mxForm.prototype.addField = function(a, b) {
    var c = document.createElement("tr"),
        d = document.createElement("td");
    mxUtils.write(d, a);
    c.appendChild(d);
    d = document.createElement("td");
    d.appendChild(b);
    c.appendChild(d);
    this.body.appendChild(c);
    return b
};

function mxImage(a, b, c) {
    this.src = a;
    this.width = b;
    this.height = c
}
mxImage.prototype.src = null;
mxImage.prototype.width = null;
mxImage.prototype.height = null;

function mxDivResizer(a, b) {
    if ("div" == a.nodeName.toLowerCase()) {
        null == b && (b = window);
        this.div = a;
        var c = mxUtils.getCurrentStyle(a);
        null != c && (this.resizeWidth = "auto" == c.width, this.resizeHeight = "auto" == c.height);
        mxEvent.addListener(b, "resize", mxUtils.bind(this, function(a) {
            this.handlingResize || (this.handlingResize = !0, this.resize(), this.handlingResize = !1)
        }));
        this.resize()
    }
}
mxDivResizer.prototype.resizeWidth = !0;
mxDivResizer.prototype.resizeHeight = !0;
mxDivResizer.prototype.handlingResize = !1;
mxDivResizer.prototype.resize = function() {
    var a = this.getDocumentWidth(),
        b = this.getDocumentHeight(),
        c = parseInt(this.div.style.left),
        d = parseInt(this.div.style.right),
        e = parseInt(this.div.style.top),
        f = parseInt(this.div.style.bottom);
    this.resizeWidth && (!isNaN(c) && !isNaN(d) && 0 <= c && 0 <= d && 0 < a - d - c) && (this.div.style.width = a - d - c + "px");
    this.resizeHeight && (!isNaN(e) && !isNaN(f) && 0 <= e && 0 <= f && 0 < b - e - f) && (this.div.style.height = b - e - f + "px")
};
mxDivResizer.prototype.getDocumentWidth = function() {
    return document.body.clientWidth
};
mxDivResizer.prototype.getDocumentHeight = function() {
    return document.body.clientHeight
};

function mxDragSource(a, b) {
    this.element = a;
    this.dropHandler = b;
    mxEvent.addGestureListeners(a, mxUtils.bind(this, function(a) {
        this.mouseDown(a)
    }))
}
mxDragSource.prototype.element = null;
mxDragSource.prototype.dropHandler = null;
mxDragSource.prototype.dragOffset = null;
mxDragSource.prototype.dragElement = null;
mxDragSource.prototype.previewElement = null;
mxDragSource.prototype.enabled = !0;
mxDragSource.prototype.currentGraph = null;
mxDragSource.prototype.currentDropTarget = null;
mxDragSource.prototype.currentPoint = null;
mxDragSource.prototype.currentGuide = null;
mxDragSource.prototype.currentHighlight = null;
mxDragSource.prototype.autoscroll = !0;
mxDragSource.prototype.guidesEnabled = !0;
mxDragSource.prototype.gridEnabled = !0;
mxDragSource.prototype.highlightDropTargets = !0;
mxDragSource.prototype.dragElementZIndex = 100;
mxDragSource.prototype.dragElementOpacity = 70;
mxDragSource.prototype.isEnabled = function() {
    return this.enabled
};
mxDragSource.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxDragSource.prototype.isGuidesEnabled = function() {
    return this.guidesEnabled
};
mxDragSource.prototype.setGuidesEnabled = function(a) {
    this.guidesEnabled = a
};
mxDragSource.prototype.isGridEnabled = function() {
    return this.gridEnabled
};
mxDragSource.prototype.setGridEnabled = function(a) {
    this.gridEnabled = a
};
mxDragSource.prototype.getGraphForEvent = function(a) {
    return null
};
mxDragSource.prototype.getDropTarget = function(a, b, c) {
    return a.getCellAt(b, c)
};
mxDragSource.prototype.createDragElement = function(a) {
    return this.element.cloneNode(!0)
};
mxDragSource.prototype.createPreviewElement = function(a) {
    return null
};
mxDragSource.prototype.mouseDown = function(a) {
    this.enabled && (!mxEvent.isConsumed(a) && null == this.mouseMoveHandler) && (this.startDrag(a), this.mouseMoveHandler = mxUtils.bind(this, this.mouseMove), this.mouseUpHandler = mxUtils.bind(this, this.mouseUp), mxEvent.addGestureListeners(document, null, this.mouseMoveHandler, this.mouseUpHandler), mxClient.IS_TOUCH && !mxEvent.isMouseEvent(a) && (this.eventSource = mxEvent.getSource(a), mxEvent.addGestureListeners(this.eventSource, null, this.mouseMoveHandler, this.mouseUpHandler)),
        mxEvent.consume(a, !0, !1))
};
mxDragSource.prototype.startDrag = function(a) {
    this.dragElement = this.createDragElement(a);
    this.dragElement.style.position = "absolute";
    this.dragElement.style.zIndex = this.dragElementZIndex;
    mxUtils.setOpacity(this.dragElement, this.dragElementOpacity)
};
mxDragSource.prototype.stopDrag = function(a) {
    null != this.dragElement && (null != this.dragElement.parentNode && this.dragElement.parentNode.removeChild(this.dragElement), this.dragElement = null)
};
mxDragSource.prototype.graphContainsEvent = function(a, b) {
    var c = mxEvent.getClientX(b),
        d = mxEvent.getClientY(b),
        e = mxUtils.getOffset(a.container),
        f = mxUtils.getScrollOrigin();
    return c >= e.x - f.x && d >= e.y - f.y && c <= e.x - f.x + a.container.offsetWidth && d <= e.y - f.y + a.container.offsetHeight
};
mxDragSource.prototype.mouseMove = function(a) {
    var b = this.getGraphForEvent(a);
    null != b && !this.graphContainsEvent(b, a) && (b = null);
    b != this.currentGraph && (null != this.currentGraph && this.dragExit(this.currentGraph, a), this.currentGraph = b, null != this.currentGraph && this.dragEnter(this.currentGraph, a));
    null != this.currentGraph && this.dragOver(this.currentGraph, a);
    if (null != this.dragElement && (null == this.previewElement || "visible" != this.previewElement.style.visibility)) {
        var b = mxEvent.getClientX(a),
            c = mxEvent.getClientY(a);
        null == this.dragElement.parentNode && document.body.appendChild(this.dragElement);
        this.dragElement.style.visibility = "visible";
        null != this.dragOffset && (b += this.dragOffset.x, c += this.dragOffset.y);
        var d = mxUtils.getDocumentScrollOrigin(document);
        this.dragElement.style.left = b + d.x + "px";
        this.dragElement.style.top = c + d.y + "px"
    } else null != this.dragElement && (this.dragElement.style.visibility = "hidden");
    mxEvent.consume(a)
};
mxDragSource.prototype.mouseUp = function(a) {
    if (null != this.currentGraph) {
        if (null != this.currentPoint && (null == this.previewElement || "hidden" != this.previewElement.style.visibility)) {
            var b = this.currentGraph.view.scale,
                c = this.currentGraph.view.translate;
            this.drop(this.currentGraph, a, this.currentDropTarget, this.currentPoint.x / b - c.x, this.currentPoint.y / b - c.y)
        }
        this.dragExit(this.currentGraph)
    }
    this.stopDrag(a);
    null != this.eventSource && (mxEvent.removeGestureListeners(this.eventSource, null, this.mouseMoveHandler,
        this.mouseUpHandler), this.eventSource = null);
    mxEvent.removeGestureListeners(document, null, this.mouseMoveHandler, this.mouseUpHandler);
    this.currentGraph = this.mouseUpHandler = this.mouseMoveHandler = null;
    mxEvent.consume(a)
};
mxDragSource.prototype.dragEnter = function(a, b) {
    a.isMouseDown = !0;
    a.isMouseTrigger = mxEvent.isMouseEvent(b);
    this.previewElement = this.createPreviewElement(a);
    this.isGuidesEnabled() && null != this.previewElement && (this.currentGuide = new mxGuide(a, a.graphHandler.getGuideStates()));
    this.highlightDropTargets && (this.currentHighlight = new mxCellHighlight(a, mxConstants.DROP_TARGET_COLOR))
};
mxDragSource.prototype.dragExit = function(a, b) {
    this.currentPoint = this.currentDropTarget = null;
    a.isMouseDown = !1;
    null != this.previewElement && (null != this.previewElement.parentNode && this.previewElement.parentNode.removeChild(this.previewElement), this.previewElement = null);
    null != this.currentGuide && (this.currentGuide.destroy(), this.currentGuide = null);
    null != this.currentHighlight && (this.currentHighlight.destroy(), this.currentHighlight = null)
};
mxDragSource.prototype.dragOver = function(a, b) {
    var c = mxUtils.getOffset(a.container),
        d = mxUtils.getScrollOrigin(a.container),
        e = mxEvent.getClientX(b) - c.x + d.x,
        c = mxEvent.getClientY(b) - c.y + d.y;
    a.autoScroll && (null == this.autoscroll || this.autoscroll) && a.scrollPointToVisible(e, c, a.autoExtend);
    null != this.currentHighlight && a.isDropEnabled() && (this.currentDropTarget = this.getDropTarget(a, e, c), d = a.getView().getState(this.currentDropTarget), this.currentHighlight.highlight(d));
    if (null != this.previewElement) {
        null == this.previewElement.parentNode &&
            (a.container.appendChild(this.previewElement), this.previewElement.style.zIndex = "3", this.previewElement.style.position = "absolute");
        var d = this.isGridEnabled() && a.isGridEnabledEvent(b),
            f = !0;
        if (null != this.currentGuide && this.currentGuide.isEnabledForEvent(b)) var f = parseInt(this.previewElement.style.width),
            g = parseInt(this.previewElement.style.height),
            f = new mxRectangle(0, 0, f, g),
            c = new mxPoint(e, c),
            c = this.currentGuide.move(f, c, d),
            f = !1,
            e = c.x,
            c = c.y;
        else if (d) var d = a.view.scale,
            g = a.view.translate,
            k = a.gridSize /
            2,
            e = (a.snap(e / d - g.x - k) + g.x) * d,
            c = (a.snap(c / d - g.y - k) + g.y) * d;
        null != this.currentGuide && f && this.currentGuide.hide();
        null != this.previewOffset && (e += this.previewOffset.x, c += this.previewOffset.y);
        this.previewElement.style.left = Math.round(e) + "px";
        this.previewElement.style.top = Math.round(c) + "px";
        this.previewElement.style.visibility = "visible"
    }
    this.currentPoint = new mxPoint(e, c)
};
mxDragSource.prototype.drop = function(a, b, c, d, e) {
    this.dropHandler(a, b, c, d, e);
    "hidden" != a.container.style.visibility && a.container.focus()
};

function mxToolbar(a) {
    this.container = a
}
mxToolbar.prototype = new mxEventSource;
mxToolbar.prototype.constructor = mxToolbar;
mxToolbar.prototype.container = null;
mxToolbar.prototype.enabled = !0;
mxToolbar.prototype.noReset = !1;
mxToolbar.prototype.updateDefaultMode = !0;
mxToolbar.prototype.addItem = function(a, b, c, d, e, f) {
    var g = document.createElement(null != b ? "img" : "button"),
        k = e || (null != f ? "mxToolbarMode" : "mxToolbarItem");
    g.className = k;
    g.setAttribute("src", b);
    null != a && (null != b ? g.setAttribute("title", a) : mxUtils.write(g, a));
    this.container.appendChild(g);
    null != c && (mxEvent.addListener(g, "click", c), mxClient.IS_TOUCH && mxEvent.addListener(g, "touchend", c));
    a = mxUtils.bind(this, function(a) {
        null != d ? g.setAttribute("src", b) : g.style.backgroundColor = ""
    });
    mxEvent.addGestureListeners(g,
        mxUtils.bind(this, function(a) {
            null != d ? g.setAttribute("src", d) : g.style.backgroundColor = "gray";
            if (null != f) {
                null == this.menu && (this.menu = new mxPopupMenu, this.menu.init());
                var b = this.currentImg;
                this.menu.isMenuShowing() && this.menu.hideMenu();
                b != g && (this.currentImg = g, this.menu.factoryMethod = f, b = new mxPoint(g.offsetLeft, g.offsetTop + g.offsetHeight), this.menu.popup(b.x, b.y, null, a), this.menu.isMenuShowing() && (g.className = k + "Selected", this.menu.hideMenu = function() {
                    mxPopupMenu.prototype.hideMenu.apply(this);
                    g.className = k;
                    this.currentImg = null
                }))
            }
        }), null, a);
    mxEvent.addListener(g, "mouseout", a);
    return g
};
mxToolbar.prototype.addCombo = function(a) {
    var b = document.createElement("div");
    b.style.display = "inline";
    b.className = "mxToolbarComboContainer";
    var c = document.createElement("select");
    c.className = a || "mxToolbarCombo";
    b.appendChild(c);
    this.container.appendChild(b);
    return c
};
mxToolbar.prototype.addActionCombo = function(a, b) {
    var c = document.createElement("select");
    c.className = b || "mxToolbarCombo";
    this.addOption(c, a, null);
    mxEvent.addListener(c, "change", function(a) {
        var b = c.options[c.selectedIndex];
        c.selectedIndex = 0;
        null != b.funct && b.funct(a)
    });
    this.container.appendChild(c);
    return c
};
mxToolbar.prototype.addOption = function(a, b, c) {
    var d = document.createElement("option");
    mxUtils.writeln(d, b);
    "function" == typeof c ? d.funct = c : d.setAttribute("value", c);
    a.appendChild(d);
    return d
};
mxToolbar.prototype.addSwitchMode = function(a, b, c, d, e) {
    var f = document.createElement("img");
    f.initialClassName = e || "mxToolbarMode";
    f.className = f.initialClassName;
    f.setAttribute("src", b);
    f.altIcon = d;
    null != a && f.setAttribute("title", a);
    mxEvent.addListener(f, "click", mxUtils.bind(this, function(a) {
        a = this.selectedMode.altIcon;
        null != a ? (this.selectedMode.altIcon = this.selectedMode.getAttribute("src"), this.selectedMode.setAttribute("src", a)) : this.selectedMode.className = this.selectedMode.initialClassName;
        this.updateDefaultMode &&
            (this.defaultMode = f);
        this.selectedMode = f;
        a = f.altIcon;
        null != a ? (f.altIcon = f.getAttribute("src"), f.setAttribute("src", a)) : f.className = f.initialClassName + "Selected";
        this.fireEvent(new mxEventObject(mxEvent.SELECT));
        c()
    }));
    this.container.appendChild(f);
    null == this.defaultMode && (this.defaultMode = f, this.selectMode(f), c());
    return f
};
mxToolbar.prototype.addMode = function(a, b, c, d, e, f) {
    f = null != f ? f : !0;
    var g = document.createElement(null != b ? "img" : "button");
    g.initialClassName = e || "mxToolbarMode";
    g.className = g.initialClassName;
    g.setAttribute("src", b);
    g.altIcon = d;
    null != a && g.setAttribute("title", a);
    this.enabled && f && (mxEvent.addListener(g, "click", mxUtils.bind(this, function(a) {
            this.selectMode(g, c);
            this.noReset = !1
        })), mxEvent.addListener(g, "dblclick", mxUtils.bind(this, function(a) {
            this.selectMode(g, c);
            this.noReset = !0
        })), null == this.defaultMode &&
        (this.defaultMode = g, this.defaultFunction = c, this.selectMode(g, c)));
    this.container.appendChild(g);
    return g
};
mxToolbar.prototype.selectMode = function(a, b) {
    if (this.selectedMode != a) {
        if (null != this.selectedMode) {
            var c = this.selectedMode.altIcon;
            null != c ? (this.selectedMode.altIcon = this.selectedMode.getAttribute("src"), this.selectedMode.setAttribute("src", c)) : this.selectedMode.className = this.selectedMode.initialClassName
        }
        this.selectedMode = a;
        c = this.selectedMode.altIcon;
        null != c ? (this.selectedMode.altIcon = this.selectedMode.getAttribute("src"), this.selectedMode.setAttribute("src", c)) : this.selectedMode.className = this.selectedMode.initialClassName +
            "Selected";
        this.fireEvent(new mxEventObject(mxEvent.SELECT, "function", b))
    }
};
mxToolbar.prototype.resetMode = function(a) {
    (a || !this.noReset) && this.selectedMode != this.defaultMode && this.selectMode(this.defaultMode, this.defaultFunction)
};
mxToolbar.prototype.addSeparator = function(a) {
    return this.addItem(null, a, null)
};
mxToolbar.prototype.addBreak = function() {
    mxUtils.br(this.container)
};
mxToolbar.prototype.addLine = function() {
    var a = document.createElement("hr");
    a.style.marginRight = "6px";
    a.setAttribute("size", "1");
    this.container.appendChild(a)
};
mxToolbar.prototype.destroy = function() {
    mxEvent.release(this.container);
    this.selectedMode = this.defaultFunction = this.defaultMode = this.container = null;
    null != this.menu && this.menu.destroy()
};

function mxSession(a, b, c, d) {
    this.model = a;
    this.urlInit = b;
    this.urlPoll = c;
    this.urlNotify = d;
    null != a && (this.codec = new mxCodec, this.codec.lookup = function(b) {
        return a.getCell(b)
    });
    a.addListener(mxEvent.NOTIFY, mxUtils.bind(this, function(a, b) {
        var c = b.getProperty("edit");
        (null != c && this.debug || this.connected && !this.suspended) && this.notify("<edit>" + this.encodeChanges(c.changes, c.undone) + "</edit>")
    }))
}
mxSession.prototype = new mxEventSource;
mxSession.prototype.constructor = mxSession;
mxSession.prototype.model = null;
mxSession.prototype.urlInit = null;
mxSession.prototype.urlPoll = null;
mxSession.prototype.urlNotify = null;
mxSession.prototype.codec = null;
mxSession.prototype.linefeed = "&#xa;";
mxSession.prototype.escapePostData = !0;
mxSession.prototype.significantRemoteChanges = !0;
mxSession.prototype.sent = 0;
mxSession.prototype.received = 0;
mxSession.prototype.debug = !1;
mxSession.prototype.connected = !1;
mxSession.prototype.suspended = !1;
mxSession.prototype.polling = !1;
mxSession.prototype.start = function() {
    this.debug ? (this.connected = !0, this.fireEvent(new mxEventObject(mxEvent.CONNECT))) : this.connected || this.get(this.urlInit, mxUtils.bind(this, function(a) {
        this.connected = !0;
        this.fireEvent(new mxEventObject(mxEvent.CONNECT));
        this.poll()
    }))
};
mxSession.prototype.suspend = function() {
    this.connected && !this.suspended && (this.suspended = !0, this.fireEvent(new mxEventObject(mxEvent.SUSPEND)))
};
mxSession.prototype.resume = function(a, b, c) {
    this.connected && this.suspended && (this.suspended = !1, this.fireEvent(new mxEventObject(mxEvent.RESUME)), this.polling || this.poll())
};
mxSession.prototype.stop = function(a) {
    this.connected && (this.connected = !1);
    this.fireEvent(new mxEventObject(mxEvent.DISCONNECT, "reason", a))
};
mxSession.prototype.poll = function() {
    this.connected && !this.suspended && null != this.urlPoll ? (this.polling = !0, this.get(this.urlPoll, mxUtils.bind(this, function() {
        this.poll()
    }))) : this.polling = !1
};
mxSession.prototype.notify = function(a, b, c) {
    null != a && 0 < a.length && (null != this.urlNotify && (this.debug ? (mxLog.show(), mxLog.debug("mxSession.notify: " + this.urlNotify + " xml=" + a)) : (a = "<message><delta>" + a + "</delta></message>", this.escapePostData && (a = encodeURIComponent(a)), mxUtils.post(this.urlNotify, "xml=" + a, b, c))), this.sent += a.length, this.fireEvent(new mxEventObject(mxEvent.NOTIFY, "url", this.urlNotify, "xml", a)))
};
mxSession.prototype.get = function(a, b, c) {
    if ("undefined" != typeof mxUtils) {
        var d = mxUtils.bind(this, function(a) {
            null != c ? c(a) : this.stop(a)
        });
        mxUtils.get(a, mxUtils.bind(this, function(c) {
                if ("undefined" != typeof mxUtils)
                    if (c.isReady() && 404 != c.getStatus()) {
                        if (this.received += c.getText().length, this.fireEvent(new mxEventObject(mxEvent.GET, "url", a, "request", c)), this.isValidResponse(c)) {
                            if (0 < c.getText().length) {
                                var f = c.getDocumentElement();
                                null == f ? d("Invalid response: " + c.getText()) : this.receive(f)
                            }
                            null != b && b(c)
                        }
                    } else d("Response not ready")
            }),
            function(a) {
                d("Transmission error")
            })
    }
};
mxSession.prototype.isValidResponse = function(a) {
    return 0 > a.getText().indexOf("<?php")
};
mxSession.prototype.encodeChanges = function(a, b) {
    for (var c = "", d = b ? -1 : 1, e = b ? a.length - 1 : 0; 0 <= e && e < a.length; e += d) var f = this.codec.encode(a[e]),
        c = c + mxUtils.getXml(f, this.linefeed);
    return c
};
mxSession.prototype.receive = function(a) {
    if (null != a && a.nodeType == mxConstants.NODETYPE_ELEMENT) {
        var b = a.getAttribute("namespace");
        null != b && (this.model.prefix = b + "-");
        for (b = a.firstChild; null != b;) {
            var c = b.nodeName.toLowerCase();
            "state" == c ? this.processState(b) : "delta" == c && this.processDelta(b);
            b = b.nextSibling
        }
        this.fireEvent(new mxEventObject(mxEvent.RECEIVE, "node", a))
    }
};
mxSession.prototype.processState = function(a) {
    (new mxCodec(a.ownerDocument)).decode(a.firstChild, this.model)
};
mxSession.prototype.processDelta = function(a) {
    for (a = a.firstChild; null != a;) "edit" == a.nodeName && this.processEdit(a), a = a.nextSibling
};
mxSession.prototype.processEdit = function(a) {
    a = this.decodeChanges(a);
    if (0 < a.length) {
        var b = this.createUndoableEdit(a);
        this.model.fireEvent(new mxEventObject(mxEvent.CHANGE, "edit", b, "changes", a));
        this.model.fireEvent(new mxEventObject(mxEvent.UNDO, "edit", b));
        this.fireEvent(new mxEventObject(mxEvent.FIRED, "edit", b))
    }
};
mxSession.prototype.createUndoableEdit = function(a) {
    var b = new mxUndoableEdit(this.model, this.significantRemoteChanges);
    b.changes = a;
    b.notify = function() {
        b.source.fireEvent(new mxEventObject(mxEvent.CHANGE, "edit", b, "changes", b.changes));
        b.source.fireEvent(new mxEventObject(mxEvent.NOTIFY, "edit", b, "changes", b.changes))
    };
    return b
};
mxSession.prototype.decodeChanges = function(a) {
    this.codec.document = a.ownerDocument;
    var b = [];
    for (a = a.firstChild; null != a;) {
        var c = this.decodeChange(a);
        null != c && b.push(c);
        a = a.nextSibling
    }
    return b
};
mxSession.prototype.decodeChange = function(a) {
    var b = null;
    a.nodeType == mxConstants.NODETYPE_ELEMENT && (b = "mxRootChange" == a.nodeName ? (new mxCodec(a.ownerDocument)).decode(a) : this.codec.decode(a), null != b && (b.model = this.model, b.execute(), "mxChildChange" == a.nodeName && null == b.parent && this.cellRemoved(b.child)));
    return b
};
mxSession.prototype.cellRemoved = function(a, b) {
    this.codec.putObject(a.getId(), a);
    for (var c = this.model.getChildCount(a), d = 0; d < c; d++) this.cellRemoved(this.model.getChildAt(a, d))
};

function mxUndoableEdit(a, b) {
    this.source = a;
    this.changes = [];
    this.significant = null != b ? b : !0
}
mxUndoableEdit.prototype.source = null;
mxUndoableEdit.prototype.changes = null;
mxUndoableEdit.prototype.significant = null;
mxUndoableEdit.prototype.undone = !1;
mxUndoableEdit.prototype.redone = !1;
mxUndoableEdit.prototype.isEmpty = function() {
    return 0 == this.changes.length
};
mxUndoableEdit.prototype.isSignificant = function() {
    return this.significant
};
mxUndoableEdit.prototype.add = function(a) {
    this.changes.push(a)
};
mxUndoableEdit.prototype.notify = function() {};
mxUndoableEdit.prototype.die = function() {};
mxUndoableEdit.prototype.undo = function() {
    if (!this.undone) {
        this.source.fireEvent(new mxEventObject(mxEvent.START_EDIT));
        for (var a = this.changes.length - 1; 0 <= a; a--) {
            var b = this.changes[a];
            null != b.execute ? b.execute() : null != b.undo && b.undo();
            this.source.fireEvent(new mxEventObject(mxEvent.EXECUTED, "change", b))
        }
        this.undone = !0;
        this.redone = !1;
        this.source.fireEvent(new mxEventObject(mxEvent.END_EDIT))
    }
    this.notify()
};
mxUndoableEdit.prototype.redo = function() {
    if (!this.redone) {
        this.source.fireEvent(new mxEventObject(mxEvent.START_EDIT));
        for (var a = this.changes.length, b = 0; b < a; b++) {
            var c = this.changes[b];
            null != c.execute ? c.execute() : null != c.redo && c.redo();
            this.source.fireEvent(new mxEventObject(mxEvent.EXECUTED, "change", c))
        }
        this.undone = !1;
        this.redone = !0;
        this.source.fireEvent(new mxEventObject(mxEvent.END_EDIT))
    }
    this.notify()
};

function mxUndoManager(a) {
    this.size = null != a ? a : 100;
    this.clear()
}
mxUndoManager.prototype = new mxEventSource;
mxUndoManager.prototype.constructor = mxUndoManager;
mxUndoManager.prototype.size = null;
mxUndoManager.prototype.history = null;
mxUndoManager.prototype.indexOfNextAdd = 0;
mxUndoManager.prototype.isEmpty = function() {
    return 0 == this.history.length
};
mxUndoManager.prototype.clear = function() {
    this.history = [];
    this.indexOfNextAdd = 0;
    this.fireEvent(new mxEventObject(mxEvent.CLEAR))
};
mxUndoManager.prototype.canUndo = function() {
    return 0 < this.indexOfNextAdd
};
mxUndoManager.prototype.undo = function() {
    for (; 0 < this.indexOfNextAdd;) {
        var a = this.history[--this.indexOfNextAdd];
        a.undo();
        if (a.isSignificant()) {
            this.fireEvent(new mxEventObject(mxEvent.UNDO, "edit", a));
            break
        }
    }
};
mxUndoManager.prototype.canRedo = function() {
    return this.indexOfNextAdd < this.history.length
};
mxUndoManager.prototype.redo = function() {
    for (var a = this.history.length; this.indexOfNextAdd < a;) {
        var b = this.history[this.indexOfNextAdd++];
        b.redo();
        if (b.isSignificant()) {
            this.fireEvent(new mxEventObject(mxEvent.REDO, "edit", b));
            break
        }
    }
};
mxUndoManager.prototype.undoableEditHappened = function(a) {
    this.trim();
    0 < this.size && this.size == this.history.length && this.history.shift();
    this.history.push(a);
    this.indexOfNextAdd = this.history.length;
    this.fireEvent(new mxEventObject(mxEvent.ADD, "edit", a))
};
mxUndoManager.prototype.trim = function() {
    if (this.history.length > this.indexOfNextAdd)
        for (var a = this.history.splice(this.indexOfNextAdd, this.history.length - this.indexOfNextAdd), b = 0; b < a.length; b++) a[b].die()
};
var mxUrlConverter = function() {};
mxUrlConverter.prototype.enabled = !0;
mxUrlConverter.prototype.baseUrl = null;
mxUrlConverter.prototype.baseDomain = null;
mxUrlConverter.prototype.updateBaseUrl = function() {
    this.baseDomain = location.protocol + "//" + location.host;
    this.baseUrl = this.baseDomain + location.pathname;
    var a = this.baseUrl.lastIndexOf("/");
    0 < a && (this.baseUrl = this.baseUrl.substring(0, a + 1))
};
mxUrlConverter.prototype.isEnabled = function() {
    return this.enabled
};
mxUrlConverter.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxUrlConverter.prototype.getBaseUrl = function() {
    return this.baseUrl
};
mxUrlConverter.prototype.setBaseUrl = function(a) {
    this.baseUrl = a
};
mxUrlConverter.prototype.getBaseDomain = function() {
    return this.baseDomain
};
mxUrlConverter.prototype.setBaseDomain = function(a) {
    this.baseDomain = a
};
mxUrlConverter.prototype.isRelativeUrl = function(a) {
    return "//" != a.substring(0, 2) && "http://" != a.substring(0, 7) && "https://" != a.substring(0, 8) && "data:image" != a.substring(0, 10)
};
mxUrlConverter.prototype.convert = function(a) {
    this.isEnabled() && this.isRelativeUrl(a) && (null == this.getBaseUrl() && this.updateBaseUrl(), a = "/" == a.charAt(0) ? this.getBaseDomain() + a : this.getBaseUrl() + a);
    return a
};

function mxPanningManager(a) {
    this.thread = null;
    this.active = !1;
    this.dy = this.dx = this.t0y = this.t0x = this.tdy = this.tdx = 0;
    this.scrollbars = !1;
    this.scrollTop = this.scrollLeft = 0;
    this.mouseListener = {
        mouseDown: function(a, b) {},
        mouseMove: function(a, b) {},
        mouseUp: mxUtils.bind(this, function(a, b) {
            this.active && this.stop()
        })
    };
    a.addMouseListener(this.mouseListener);
    mxEvent.addListener(document, "mouseup", mxUtils.bind(this, function() {
        this.active && this.stop()
    }));
    var b = mxUtils.bind(this, function() {
        this.scrollbars = mxUtils.hasScrollbars(a.container);
        this.scrollLeft = a.container.scrollLeft;
        this.scrollTop = a.container.scrollTop;
        return window.setInterval(mxUtils.bind(this, function() {
            this.tdx -= this.dx;
            this.tdy -= this.dy;
            if (this.scrollbars) {
                var b = -a.container.scrollLeft - Math.ceil(this.dx),
                    d = -a.container.scrollTop - Math.ceil(this.dy);
                a.panGraph(b, d);
                a.panDx = this.scrollLeft - a.container.scrollLeft;
                a.panDy = this.scrollTop - a.container.scrollTop;
                a.fireEvent(new mxEventObject(mxEvent.PAN))
            } else a.panGraph(this.getDx(), this.getDy())
        }), this.delay)
    });
    this.isActive =
        function() {
            return active
        };
    this.getDx = function() {
        return Math.round(this.tdx)
    };
    this.getDy = function() {
        return Math.round(this.tdy)
    };
    this.start = function() {
        this.t0x = a.view.translate.x;
        this.t0y = a.view.translate.y;
        this.active = !0
    };
    this.panTo = function(c, d, e, f) {
        this.active || this.start();
        this.scrollLeft = a.container.scrollLeft;
        this.scrollTop = a.container.scrollTop;
        f = null != f ? f : 0;
        var g = a.container;
        this.dx = c + (null != e ? e : 0) - g.scrollLeft - g.clientWidth;
        0 > this.dx && Math.abs(this.dx) < this.border ? this.dx = this.border + this.dx :
            this.dx = this.handleMouseOut ? Math.max(this.dx, 0) : 0;
        0 == this.dx && (this.dx = c - g.scrollLeft, this.dx = 0 < this.dx && this.dx < this.border ? this.dx - this.border : this.handleMouseOut ? Math.min(0, this.dx) : 0);
        this.dy = d + f - g.scrollTop - g.clientHeight;
        0 > this.dy && Math.abs(this.dy) < this.border ? this.dy = this.border + this.dy : this.dy = this.handleMouseOut ? Math.max(this.dy, 0) : 0;
        0 == this.dy && (this.dy = d - g.scrollTop, this.dy = 0 < this.dy && this.dy < this.border ? this.dy - this.border : this.handleMouseOut ? Math.min(0, this.dy) : 0);
        0 != this.dx || 0 != this.dy ?
            (this.dx *= this.damper, this.dy *= this.damper, null == this.thread && (this.thread = b())) : null != this.thread && (window.clearInterval(this.thread), this.thread = null)
    };
    this.stop = function() {
        if (this.active)
            if (this.active = !1, null != this.thread && (window.clearInterval(this.thread), this.thread = null), this.tdy = this.tdx = 0, this.scrollbars) a.panDx = 0, a.panDy = 0, a.fireEvent(new mxEventObject(mxEvent.PAN));
            else {
                var b = a.panDx,
                    d = a.panDy;
                if (0 != b || 0 != d) a.panGraph(0, 0), a.view.setTranslate(this.t0x + b / a.view.scale, this.t0y + d / a.view.scale)
            }
    };
    this.destroy = function() {
        a.removeMouseListener(this.mouseListener)
    }
}
mxPanningManager.prototype.damper = 1 / 6;
mxPanningManager.prototype.delay = 10;
mxPanningManager.prototype.handleMouseOut = !0;
mxPanningManager.prototype.border = 0;

function mxPopupMenu(a) {
    this.factoryMethod = a;
    null != a && this.init()
}
mxPopupMenu.prototype = new mxEventSource;
mxPopupMenu.prototype.constructor = mxPopupMenu;
mxPopupMenu.prototype.submenuImage = mxClient.imageBasePath + "/submenu.gif";
mxPopupMenu.prototype.zIndex = 10006;
mxPopupMenu.prototype.factoryMethod = null;
mxPopupMenu.prototype.useLeftButtonForPopup = !1;
mxPopupMenu.prototype.enabled = !0;
mxPopupMenu.prototype.itemCount = 0;
mxPopupMenu.prototype.autoExpand = !1;
mxPopupMenu.prototype.smartSeparators = !1;
mxPopupMenu.prototype.labels = !0;
mxPopupMenu.prototype.init = function() {
    this.table = document.createElement("table");
    this.table.className = "mxPopupMenu";
    this.tbody = document.createElement("tbody");
    this.table.appendChild(this.tbody);
    this.div = document.createElement("div");
    this.div.className = "mxPopupMenu";
    this.div.style.display = "inline";
    this.div.style.zIndex = this.zIndex;
    this.div.appendChild(this.table);
    mxEvent.disableContextMenu(this.div)
};
mxPopupMenu.prototype.isEnabled = function() {
    return this.enabled
};
mxPopupMenu.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxPopupMenu.prototype.isPopupTrigger = function(a) {
    return a.isPopupTrigger() || this.useLeftButtonForPopup && mxEvent.isLeftMouseButton(a.getEvent())
};
mxPopupMenu.prototype.addItem = function(a, b, c, d, e, f) {
    d = d || this;
    this.itemCount++;
    d.willAddSeparator && (d.containsItems && this.addSeparator(d, !0), d.willAddSeparator = !1);
    d.containsItems = !0;
    var g = document.createElement("tr");
    g.className = "mxPopupMenuItem";
    var k = document.createElement("td");
    k.className = "mxPopupMenuIcon";
    null != b ? (e = document.createElement("img"), e.src = b, k.appendChild(e)) : null != e && (mxClient.IS_QUIRKS || 8 == document.documentMode ? (b = document.createElement("a"), b.setAttribute("href", "#")) : b = document.createElement("div"),
        b.className = e, k.appendChild(b));
    g.appendChild(k);
    this.labels && (k = document.createElement("td"), k.className = "mxPopupMenuItem" + (null != f && !f ? " mxDisabled" : ""), mxUtils.write(k, a), k.align = "left", g.appendChild(k), a = document.createElement("td"), a.className = "mxPopupMenuItem" + (null != f && !f ? " mxDisabled" : ""), a.style.paddingRight = "6px", a.style.textAlign = "right", g.appendChild(a), null == d.div && this.createSubmenu(d));
    d.tbody.appendChild(g);
    if (null == f || f) mxEvent.addGestureListeners(g, mxUtils.bind(this, function(a) {
        this.eventReceiver =
            g;
        d.activeRow != g && d.activeRow != d && (null != d.activeRow && null != d.activeRow.div.parentNode && this.hideSubmenu(d), null != g.div && (this.showSubmenu(d, g), d.activeRow = g));
        mxEvent.consume(a)
    }), mxUtils.bind(this, function(a) {
        d.activeRow != g && d.activeRow != d && (null != d.activeRow && null != d.activeRow.div.parentNode && this.hideSubmenu(d), this.autoExpand && null != g.div && (this.showSubmenu(d, g), d.activeRow = g));
        g.className = "mxPopupMenuItemHover"
    }), mxUtils.bind(this, function(a) {
        this.eventReceiver == g && (d.activeRow != g && this.hideMenu(),
            null != c && c(a));
        this.eventReceiver = null;
        mxEvent.consume(a)
    })), mxEvent.addListener(g, "mouseout", mxUtils.bind(this, function(a) {
        g.className = "mxPopupMenuItem"
    }));
    return g
};
mxPopupMenu.prototype.createSubmenu = function(a) {
    a.table = document.createElement("table");
    a.table.className = "mxPopupMenu";
    a.tbody = document.createElement("tbody");
    a.table.appendChild(a.tbody);
    a.div = document.createElement("div");
    a.div.className = "mxPopupMenu";
    a.div.style.position = "absolute";
    a.div.style.display = "inline";
    a.div.style.zIndex = this.zIndex;
    a.div.appendChild(a.table);
    var b = document.createElement("img");
    b.setAttribute("src", this.submenuImage);
    td = a.firstChild.nextSibling.nextSibling;
    td.appendChild(b)
};
mxPopupMenu.prototype.showSubmenu = function(a, b) {
    if (null != b.div) {
        b.div.style.left = a.div.offsetLeft + b.offsetLeft + b.offsetWidth - 1 + "px";
        b.div.style.top = a.div.offsetTop + b.offsetTop + "px";
        document.body.appendChild(b.div);
        var c = parseInt(b.div.offsetLeft),
            d = parseInt(b.div.offsetWidth),
            e = mxUtils.getDocumentScrollOrigin(document),
            f = document.documentElement;
        if (c + d > e.x + (document.body.clientWidth || f.clientWidth)) b.div.style.left = a.div.offsetLeft - d + (mxClient.IS_IE ? 6 : -6) + "px";
        mxUtils.fit(b.div)
    }
};
mxPopupMenu.prototype.addSeparator = function(a, b) {
    a = a || this;
    if (this.smartSeparators && !b) a.willAddSeparator = !0;
    else if (null != a.tbody) {
        a.willAddSeparator = !1;
        var c = document.createElement("tr"),
            d = document.createElement("td");
        d.className = "mxPopupMenuIcon";
        d.style.padding = "0 0 0 0px";
        c.appendChild(d);
        d = document.createElement("td");
        d.style.padding = "0 0 0 0px";
        d.setAttribute("colSpan", "2");
        var e = document.createElement("hr");
        e.setAttribute("size", "1");
        d.appendChild(e);
        c.appendChild(d);
        a.tbody.appendChild(c)
    }
};
mxPopupMenu.prototype.popup = function(a, b, c, d) {
    if (null != this.div && null != this.tbody && null != this.factoryMethod) {
        this.div.style.left = a + "px";
        for (this.div.style.top = b + "px"; null != this.tbody.firstChild;) mxEvent.release(this.tbody.firstChild), this.tbody.removeChild(this.tbody.firstChild);
        this.itemCount = 0;
        this.factoryMethod(this, c, d);
        0 < this.itemCount && (this.showMenu(), this.fireEvent(new mxEventObject(mxEvent.SHOW)))
    }
};
mxPopupMenu.prototype.isMenuShowing = function() {
    return null != this.div && this.div.parentNode == document.body
};
mxPopupMenu.prototype.showMenu = function() {
    9 <= document.documentMode && (this.div.style.filter = "none");
    document.body.appendChild(this.div);
    mxUtils.fit(this.div)
};
mxPopupMenu.prototype.hideMenu = function() {
    null != this.div && (null != this.div.parentNode && this.div.parentNode.removeChild(this.div), this.hideSubmenu(this), this.containsItems = !1)
};
mxPopupMenu.prototype.hideSubmenu = function(a) {
    null != a.activeRow && (this.hideSubmenu(a.activeRow), null != a.activeRow.div.parentNode && a.activeRow.div.parentNode.removeChild(a.activeRow.div), a.activeRow = null)
};
mxPopupMenu.prototype.destroy = function() {
    null != this.div && (mxEvent.release(this.div), null != this.div.parentNode && this.div.parentNode.removeChild(this.div), this.div = null)
};

function mxAutoSaveManager(a) {
    this.changeHandler = mxUtils.bind(this, function(a, c) {
        this.isEnabled() && this.graphModelChanged(c.getProperty("edit").changes)
    });
    this.setGraph(a)
}
mxAutoSaveManager.prototype = new mxEventSource;
mxAutoSaveManager.prototype.constructor = mxAutoSaveManager;
mxAutoSaveManager.prototype.graph = null;
mxAutoSaveManager.prototype.autoSaveDelay = 10;
mxAutoSaveManager.prototype.autoSaveThrottle = 2;
mxAutoSaveManager.prototype.autoSaveThreshold = 5;
mxAutoSaveManager.prototype.ignoredChanges = 0;
mxAutoSaveManager.prototype.lastSnapshot = 0;
mxAutoSaveManager.prototype.enabled = !0;
mxAutoSaveManager.prototype.changeHandler = null;
mxAutoSaveManager.prototype.isEnabled = function() {
    return this.enabled
};
mxAutoSaveManager.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxAutoSaveManager.prototype.setGraph = function(a) {
    null != this.graph && this.graph.getModel().removeListener(this.changeHandler);
    this.graph = a;
    null != this.graph && this.graph.getModel().addListener(mxEvent.CHANGE, this.changeHandler)
};
mxAutoSaveManager.prototype.save = function() {};
mxAutoSaveManager.prototype.graphModelChanged = function(a) {
    a = ((new Date).getTime() - this.lastSnapshot) / 1E3;
    a > this.autoSaveDelay || this.ignoredChanges >= this.autoSaveThreshold && a > this.autoSaveThrottle ? (this.save(), this.reset()) : this.ignoredChanges++
};
mxAutoSaveManager.prototype.reset = function() {
    this.lastSnapshot = (new Date).getTime();
    this.ignoredChanges = 0
};
mxAutoSaveManager.prototype.destroy = function() {
    this.setGraph(null)
};

function mxAnimation(a) {
    this.delay = null != a ? a : 20
}
mxAnimation.prototype = new mxEventSource;
mxAnimation.prototype.constructor = mxAnimation;
mxAnimation.prototype.delay = null;
mxAnimation.prototype.thread = null;
mxAnimation.prototype.isRunning = function() {
    return null != this.thread
};
mxAnimation.prototype.startAnimation = function() {
    null == this.thread && (this.thread = window.setInterval(mxUtils.bind(this, this.updateAnimation), this.delay))
};
mxAnimation.prototype.updateAnimation = function() {
    this.fireEvent(new mxEventObject(mxEvent.EXECUTE))
};
mxAnimation.prototype.stopAnimation = function() {
    null != this.thread && (window.clearInterval(this.thread), this.thread = null, this.fireEvent(new mxEventObject(mxEvent.DONE)))
};

function mxMorphing(a, b, c, d) {
    mxAnimation.call(this, d);
    this.graph = a;
    this.steps = null != b ? b : 6;
    this.ease = null != c ? c : 1.5
}
mxMorphing.prototype = new mxAnimation;
mxMorphing.prototype.constructor = mxMorphing;
mxMorphing.prototype.graph = null;
mxMorphing.prototype.steps = null;
mxMorphing.prototype.step = 0;
mxMorphing.prototype.ease = null;
mxMorphing.prototype.cells = null;
mxMorphing.prototype.updateAnimation = function() {
    var a = new mxCellStatePreview(this.graph);
    if (null != this.cells)
        for (var b = 0; b < this.cells.length; b++) this.animateCell(this.cells[b], a, !1);
    else this.animateCell(this.graph.getModel().getRoot(), a, !0);
    this.show(a);
    (a.isEmpty() || this.step++ >= this.steps) && this.stopAnimation()
};
mxMorphing.prototype.show = function(a) {
    a.show()
};
mxMorphing.prototype.animateCell = function(a, b, c) {
    var d = this.graph.getView().getState(a),
        e = null;
    if (null != d && (e = this.getDelta(d), this.graph.getModel().isVertex(a) && (0 != e.x || 0 != e.y))) {
        var f = this.graph.view.getTranslate(),
            g = this.graph.view.getScale();
        e.x += f.x * g;
        e.y += f.y * g;
        b.moveState(d, -e.x / this.ease, -e.y / this.ease)
    }
    if (c && !this.stopRecursion(d, e)) {
        d = this.graph.getModel().getChildCount(a);
        for (e = 0; e < d; e++) this.animateCell(this.graph.getModel().getChildAt(a, e), b, c)
    }
};
mxMorphing.prototype.stopRecursion = function(a, b) {
    return null != b && (0 != b.x || 0 != b.y)
};
mxMorphing.prototype.getDelta = function(a) {
    var b = this.getOriginForCell(a.cell),
        c = this.graph.getView().getTranslate(),
        d = this.graph.getView().getScale();
    return new mxPoint((b.x - (a.x / d - c.x)) * d, (b.y - (a.y / d - c.y)) * d)
};
mxMorphing.prototype.getOriginForCell = function(a) {
    var b = null;
    if (null != a) {
        var c = this.graph.getModel().getParent(a);
        a = this.graph.getCellGeometry(a);
        b = this.getOriginForCell(c);
        null != a && (a.relative ? (c = this.graph.getCellGeometry(c), null != c && (b.x += a.x * c.width, b.y += a.y * c.height)) : (b.x += a.x, b.y += a.y))
    }
    null == b && (b = this.graph.view.getTranslate(), b = new mxPoint(-b.x, -b.y));
    return b
};

function mxImageBundle(a) {
    this.images = [];
    this.alt = null != a ? a : !1
}
mxImageBundle.prototype.images = null;
mxImageBundle.prototype.images = null;
mxImageBundle.prototype.putImage = function(a, b, c) {
    this.images[a] = {
        value: b,
        fallback: c
    }
};
mxImageBundle.prototype.getImage = function(a) {
    var b = null;
    null != a && (a = this.images[a], null != a && (b = this.alt ? a.fallback : a.value));
    return b
};

function mxImageExport() {}
mxImageExport.prototype.includeOverlays = !1;
mxImageExport.prototype.drawState = function(a, b) {
    null != a && (this.visitStatesRecursive(a, b, mxUtils.bind(this, function() {
        this.drawCellState.apply(this, arguments)
    })), this.includeOverlays && this.visitStatesRecursive(a, b, mxUtils.bind(this, function() {
        this.drawOverlays.apply(this, arguments)
    })))
};
mxImageExport.prototype.visitStatesRecursive = function(a, b, c) {
    if (null != a) {
        c(a, b);
        for (var d = a.view.graph, e = d.model.getChildCount(a.cell), f = 0; f < e; f++) {
            var g = d.view.getState(d.model.getChildAt(a.cell, f));
            this.visitStatesRecursive(g, b, c)
        }
    }
};
mxImageExport.prototype.getLinkForCellState = function(a, b) {
    return null
};
mxImageExport.prototype.drawCellState = function(a, b) {
    var c = this.getLinkForCellState(a, b);
    null != c && b.setLink(c);
    a.shape instanceof mxShape && (b.save(), a.shape.paint(b), b.restore());
    null != a.text && (b.save(), a.text.paint(b), b.restore());
    null != c && b.setLink(null)
};
mxImageExport.prototype.drawOverlays = function(a, b) {
    null != a.overlays && a.overlays.visit(function(a, d) {
        d instanceof mxShape && d.paint(b)
    })
};

function mxAbstractCanvas2D() {
    this.converter = this.createUrlConverter();
    this.reset()
}
mxAbstractCanvas2D.prototype.state = null;
mxAbstractCanvas2D.prototype.states = null;
mxAbstractCanvas2D.prototype.path = null;
mxAbstractCanvas2D.prototype.rotateHtml = !0;
mxAbstractCanvas2D.prototype.lastX = 0;
mxAbstractCanvas2D.prototype.lastY = 0;
mxAbstractCanvas2D.prototype.moveOp = "M";
mxAbstractCanvas2D.prototype.lineOp = "L";
mxAbstractCanvas2D.prototype.quadOp = "Q";
mxAbstractCanvas2D.prototype.curveOp = "C";
mxAbstractCanvas2D.prototype.closeOp = "Z";
mxAbstractCanvas2D.prototype.pointerEvents = !1;
mxAbstractCanvas2D.prototype.createUrlConverter = function() {
    return new mxUrlConverter
};
mxAbstractCanvas2D.prototype.reset = function() {
    this.state = this.createState();
    this.states = []
};
mxAbstractCanvas2D.prototype.createState = function() {
    return {
        dx: 0,
        dy: 0,
        scale: 1,
        alpha: 1,
        fillColor: null,
        fillAlpha: 1,
        gradientColor: null,
        gradientAlpha: 1,
        gradientDirection: null,
        strokeColor: null,
        strokeWidth: 1,
        dashed: !1,
        dashPattern: "3 3",
        lineCap: "flat",
        lineJoin: "miter",
        miterLimit: 10,
        fontColor: "#000000",
        fontBackgroundColor: null,
        fontBorderColor: null,
        fontSize: mxConstants.DEFAULT_FONTSIZE,
        fontFamily: mxConstants.DEFAULT_FONTFAMILY,
        fontStyle: 0,
        shadow: !1,
        shadowColor: mxConstants.SHADOWCOLOR,
        shadowAlpha: mxConstants.SHADOW_OPACITY,
        shadowDx: mxConstants.SHADOW_OFFSET_X,
        shadowDy: mxConstants.SHADOW_OFFSET_Y,
        rotation: 0,
        rotationCx: 0,
        rotationCy: 0
    }
};
mxAbstractCanvas2D.prototype.format = function(a) {
    return Math.round(parseFloat(a))
};
mxAbstractCanvas2D.prototype.addOp = function() {
    if (null != this.path && (this.path.push(arguments[0]), 2 < arguments.length))
        for (var a = this.state, b = 2; b < arguments.length; b += 2) this.lastX = arguments[b - 1], this.lastY = arguments[b], this.path.push(this.format((this.lastX + a.dx) * a.scale)), this.path.push(this.format((this.lastY + a.dy) * a.scale))
};
mxAbstractCanvas2D.prototype.rotatePoint = function(a, b, c, d, e) {
    c *= Math.PI / 180;
    return mxUtils.getRotatedPoint(new mxPoint(a, b), Math.cos(c), Math.sin(c), new mxPoint(d, e))
};
mxAbstractCanvas2D.prototype.save = function() {
    this.states.push(this.state);
    this.state = mxUtils.clone(this.state)
};
mxAbstractCanvas2D.prototype.restore = function() {
    this.state = this.states.pop()
};
mxAbstractCanvas2D.prototype.setLink = function(a) {};
mxAbstractCanvas2D.prototype.scale = function(a) {
    this.state.scale *= a;
    this.state.strokeWidth *= a
};
mxAbstractCanvas2D.prototype.translate = function(a, b) {
    this.state.dx += a;
    this.state.dy += b
};
mxAbstractCanvas2D.prototype.setAlpha = function(a) {
    this.state.alpha = a
};
mxAbstractCanvas2D.prototype.setFillColor = function(a) {
    a == mxConstants.NONE && (a = null);
    this.state.fillColor = a;
    this.state.gradientColor = null
};
mxAbstractCanvas2D.prototype.setGradient = function(a, b, c, d, e, f, g, k, l) {
    c = this.state;
    c.fillColor = a;
    c.fillAlpha = null != k ? k : 1;
    c.gradientColor = b;
    c.gradientAlpha = null != l ? l : 1;
    c.gradientDirection = g
};
mxAbstractCanvas2D.prototype.setStrokeColor = function(a) {
    a == mxConstants.NONE && (a = null);
    this.state.strokeColor = a
};
mxAbstractCanvas2D.prototype.setStrokeWidth = function(a) {
    this.state.strokeWidth = a
};
mxAbstractCanvas2D.prototype.setDashed = function(a) {
    this.state.dashed = a
};
mxAbstractCanvas2D.prototype.setDashPattern = function(a) {
    this.state.dashPattern = a
};
mxAbstractCanvas2D.prototype.setLineCap = function(a) {
    this.state.lineCap = a
};
mxAbstractCanvas2D.prototype.setLineJoin = function(a) {
    this.state.lineJoin = a
};
mxAbstractCanvas2D.prototype.setMiterLimit = function(a) {
    this.state.miterLimit = a
};
mxAbstractCanvas2D.prototype.setFontColor = function(a) {
    a == mxConstants.NONE && (a = null);
    this.state.fontColor = a
};
mxAbstractCanvas2D.prototype.setFontBackgroundColor = function(a) {
    a == mxConstants.NONE && (a = null);
    this.state.fontBackgroundColor = a
};
mxAbstractCanvas2D.prototype.setFontBorderColor = function(a) {
    a == mxConstants.NONE && (a = null);
    this.state.fontBorderColor = a
};
mxAbstractCanvas2D.prototype.setFontSize = function(a) {
    this.state.fontSize = a
};
mxAbstractCanvas2D.prototype.setFontFamily = function(a) {
    this.state.fontFamily = a
};
mxAbstractCanvas2D.prototype.setFontStyle = function(a) {
    null == a && (a = 0);
    this.state.fontStyle = a
};
mxAbstractCanvas2D.prototype.setShadow = function(a) {
    this.state.shadow = a
};
mxAbstractCanvas2D.prototype.setShadowColor = function(a) {
    a == mxConstants.NONE && (a = null);
    this.state.shadowColor = a
};
mxAbstractCanvas2D.prototype.setShadowAlpha = function(a) {
    this.state.shadowAlpha = a
};
mxAbstractCanvas2D.prototype.setShadowOffset = function(a, b) {
    this.state.shadowDx = a;
    this.state.shadowDy = b
};
mxAbstractCanvas2D.prototype.begin = function() {
    this.lastY = this.lastX = 0;
    this.path = []
};
mxAbstractCanvas2D.prototype.moveTo = function(a, b) {
    this.addOp(this.moveOp, a, b)
};
mxAbstractCanvas2D.prototype.lineTo = function(a, b) {
    this.addOp(this.lineOp, a, b)
};
mxAbstractCanvas2D.prototype.quadTo = function(a, b, c, d) {
    this.addOp(this.quadOp, a, b, c, d)
};
mxAbstractCanvas2D.prototype.curveTo = function(a, b, c, d, e, f) {
    this.addOp(this.curveOp, a, b, c, d, e, f)
};
mxAbstractCanvas2D.prototype.arcTo = function(a, b, c, d, e, f, g) {
    a = mxUtils.arcToCurves(this.lastX, this.lastY, a, b, c, d, e, f, g);
    if (null != a)
        for (b = 0; b < a.length; b += 6) this.curveTo(a[b], a[b + 1], a[b + 2], a[b + 3], a[b + 4], a[b + 5])
};
mxAbstractCanvas2D.prototype.close = function(a, b, c, d, e, f) {
    this.addOp(this.closeOp)
};
mxAbstractCanvas2D.prototype.end = function() {};

function mxXmlCanvas2D(a) {
    mxAbstractCanvas2D.call(this);
    this.root = a;
    this.writeDefaults()
}
mxUtils.extend(mxXmlCanvas2D, mxAbstractCanvas2D);
mxXmlCanvas2D.prototype.textEnabled = !0;
mxXmlCanvas2D.prototype.compressed = !0;
mxXmlCanvas2D.prototype.writeDefaults = function() {
    var a;
    a = this.createElement("fontfamily");
    a.setAttribute("family", mxConstants.DEFAULT_FONTFAMILY);
    this.root.appendChild(a);
    a = this.createElement("fontsize");
    a.setAttribute("size", mxConstants.DEFAULT_FONTSIZE);
    this.root.appendChild(a);
    a = this.createElement("shadowcolor");
    a.setAttribute("color", mxConstants.SHADOWCOLOR);
    this.root.appendChild(a);
    a = this.createElement("shadowalpha");
    a.setAttribute("alpha", mxConstants.SHADOW_OPACITY);
    this.root.appendChild(a);
    a = this.createElement("shadowoffset");
    a.setAttribute("dx", mxConstants.SHADOW_OFFSET_X);
    a.setAttribute("dy", mxConstants.SHADOW_OFFSET_Y);
    this.root.appendChild(a)
};
mxXmlCanvas2D.prototype.format = function(a) {
    return parseFloat(parseFloat(a).toFixed(2))
};
mxXmlCanvas2D.prototype.createElement = function(a) {
    return this.root.ownerDocument.createElement(a)
};
mxXmlCanvas2D.prototype.save = function() {
    this.compressed && mxAbstractCanvas2D.prototype.save.apply(this, arguments);
    this.root.appendChild(this.createElement("save"))
};
mxXmlCanvas2D.prototype.restore = function() {
    this.compressed && mxAbstractCanvas2D.prototype.restore.apply(this, arguments);
    this.root.appendChild(this.createElement("restore"))
};
mxXmlCanvas2D.prototype.scale = function(a) {
    if (this.compressed) {
        if (this.state.scale == a) return;
        mxAbstractCanvas2D.prototype.setAlpha.apply(this, arguments)
    }
    var b = this.createElement("scale");
    b.setAttribute("scale", a);
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.translate = function(a, b) {
    var c = this.createElement("translate");
    c.setAttribute("dx", this.format(a));
    c.setAttribute("dy", this.format(b));
    this.root.appendChild(c)
};
mxXmlCanvas2D.prototype.rotate = function(a, b, c, d, e) {
    var f = this.createElement("rotate");
    if (0 != a || b || c) f.setAttribute("theta", this.format(a)), f.setAttribute("flipH", b ? "1" : "0"), f.setAttribute("flipV", c ? "1" : "0"), f.setAttribute("cx", this.format(d)), f.setAttribute("cy", this.format(e)), this.root.appendChild(f)
};
mxXmlCanvas2D.prototype.setAlpha = function(a) {
    if (this.compressed) {
        if (this.state.alpha == a) return;
        mxAbstractCanvas2D.prototype.setAlpha.apply(this, arguments)
    }
    var b = this.createElement("alpha");
    b.setAttribute("alpha", this.format(a));
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.setFillColor = function(a) {
    a == mxConstants.NONE && (a = null);
    if (this.compressed) {
        if (this.state.fillColor == a) return;
        mxAbstractCanvas2D.prototype.setFillColor.apply(this, arguments)
    }
    var b = this.createElement("fillcolor");
    b.setAttribute("color", null != a ? a : mxConstants.NONE);
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.setGradient = function(a, b, c, d, e, f, g, k, l) {
    if (null != a && null != b) {
        mxAbstractCanvas2D.prototype.setGradient.apply(this, arguments);
        var m = this.createElement("gradient");
        m.setAttribute("c1", a);
        m.setAttribute("c2", b);
        m.setAttribute("x", this.format(c));
        m.setAttribute("y", this.format(d));
        m.setAttribute("w", this.format(e));
        m.setAttribute("h", this.format(f));
        null != g && m.setAttribute("direction", g);
        null != k && m.setAttribute("alpha1", k);
        null != l && m.setAttribute("alpha2", l);
        this.root.appendChild(m)
    }
};
mxXmlCanvas2D.prototype.setStrokeColor = function(a) {
    a == mxConstants.NONE && (a = null);
    if (this.compressed) {
        if (this.state.strokeColor == a) return;
        mxAbstractCanvas2D.prototype.setStrokeColor.apply(this, arguments)
    }
    var b = this.createElement("strokecolor");
    b.setAttribute("color", null != a ? a : mxConstants.NONE);
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.setStrokeWidth = function(a) {
    if (this.compressed) {
        if (this.state.strokeWidth == a) return;
        mxAbstractCanvas2D.prototype.setStrokeWidth.apply(this, arguments)
    }
    var b = this.createElement("strokewidth");
    b.setAttribute("width", this.format(a));
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.setDashed = function(a) {
    if (this.compressed) {
        if (this.state.dashed == a) return;
        mxAbstractCanvas2D.prototype.setDashed.apply(this, arguments)
    }
    var b = this.createElement("dashed");
    b.setAttribute("dashed", a ? "1" : "0");
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.setDashPattern = function(a) {
    if (this.compressed) {
        if (this.state.dashPattern == a) return;
        mxAbstractCanvas2D.prototype.setDashPattern.apply(this, arguments)
    }
    var b = this.createElement("dashpattern");
    b.setAttribute("pattern", a);
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.setLineCap = function(a) {
    if (this.compressed) {
        if (this.state.lineCap == a) return;
        mxAbstractCanvas2D.prototype.setLineCap.apply(this, arguments)
    }
    var b = this.createElement("linecap");
    b.setAttribute("cap", a);
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.setLineJoin = function(a) {
    if (this.compressed) {
        if (this.state.lineJoin == a) return;
        mxAbstractCanvas2D.prototype.setLineJoin.apply(this, arguments)
    }
    var b = this.createElement("linejoin");
    b.setAttribute("join", a);
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.setMiterLimit = function(a) {
    if (this.compressed) {
        if (this.state.miterLimit == a) return;
        mxAbstractCanvas2D.prototype.setMiterLimit.apply(this, arguments)
    }
    var b = this.createElement("miterlimit");
    b.setAttribute("limit", a);
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.setFontColor = function(a) {
    if (this.textEnabled) {
        a == mxConstants.NONE && (a = null);
        if (this.compressed) {
            if (this.state.fontColor == a) return;
            mxAbstractCanvas2D.prototype.setFontColor.apply(this, arguments)
        }
        var b = this.createElement("fontcolor");
        b.setAttribute("color", null != a ? a : mxConstants.NONE);
        this.root.appendChild(b)
    }
};
mxXmlCanvas2D.prototype.setFontBackgroundColor = function(a) {
    if (this.textEnabled) {
        a == mxConstants.NONE && (a = null);
        if (this.compressed) {
            if (this.state.fontBackgroundColor == a) return;
            mxAbstractCanvas2D.prototype.setFontBackgroundColor.apply(this, arguments)
        }
        var b = this.createElement("fontbackgroundcolor");
        b.setAttribute("color", null != a ? a : mxConstants.NONE);
        this.root.appendChild(b)
    }
};
mxXmlCanvas2D.prototype.setFontBorderColor = function(a) {
    if (this.textEnabled) {
        a == mxConstants.NONE && (a = null);
        if (this.compressed) {
            if (this.state.fontBorderColor == a) return;
            mxAbstractCanvas2D.prototype.setFontBorderColor.apply(this, arguments)
        }
        var b = this.createElement("fontbordercolor");
        b.setAttribute("color", null != a ? a : mxConstants.NONE);
        this.root.appendChild(b)
    }
};
mxXmlCanvas2D.prototype.setFontSize = function(a) {
    if (this.textEnabled) {
        if (this.compressed) {
            if (this.state.fontSize == a) return;
            mxAbstractCanvas2D.prototype.setFontSize.apply(this, arguments)
        }
        var b = this.createElement("fontsize");
        b.setAttribute("size", a);
        this.root.appendChild(b)
    }
};
mxXmlCanvas2D.prototype.setFontFamily = function(a) {
    if (this.textEnabled) {
        if (this.compressed) {
            if (this.state.fontFamily == a) return;
            mxAbstractCanvas2D.prototype.setFontFamily.apply(this, arguments)
        }
        var b = this.createElement("fontfamily");
        b.setAttribute("family", a);
        this.root.appendChild(b)
    }
};
mxXmlCanvas2D.prototype.setFontStyle = function(a) {
    if (this.textEnabled) {
        null == a && (a = 0);
        if (this.compressed) {
            if (this.state.fontStyle == a) return;
            mxAbstractCanvas2D.prototype.setFontStyle.apply(this, arguments)
        }
        var b = this.createElement("fontstyle");
        b.setAttribute("style", a);
        this.root.appendChild(b)
    }
};
mxXmlCanvas2D.prototype.setShadow = function(a) {
    if (this.compressed) {
        if (this.state.shadow == a) return;
        mxAbstractCanvas2D.prototype.setShadow.apply(this, arguments)
    }
    var b = this.createElement("shadow");
    b.setAttribute("enabled", a ? "1" : "0");
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.setShadowColor = function(a) {
    if (this.compressed) {
        a == mxConstants.NONE && (a = null);
        if (this.state.shadowColor == a) return;
        mxAbstractCanvas2D.prototype.setShadowColor.apply(this, arguments)
    }
    var b = this.createElement("shadowcolor");
    b.setAttribute("color", null != a ? a : mxConstants.NONE);
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.setShadowAlpha = function(a) {
    if (this.compressed) {
        if (this.state.shadowAlpha == a) return;
        mxAbstractCanvas2D.prototype.setShadowAlpha.apply(this, arguments)
    }
    var b = this.createElement("shadowalpha");
    b.setAttribute("alpha", a);
    this.root.appendChild(b)
};
mxXmlCanvas2D.prototype.setShadowOffset = function(a, b) {
    if (this.compressed) {
        if (this.state.shadowDx == a && this.state.shadowDy == b) return;
        mxAbstractCanvas2D.prototype.setShadowOffset.apply(this, arguments)
    }
    var c = this.createElement("shadowoffset");
    c.setAttribute("dx", a);
    c.setAttribute("dy", b);
    this.root.appendChild(c)
};
mxXmlCanvas2D.prototype.rect = function(a, b, c, d) {
    var e = this.createElement("rect");
    e.setAttribute("x", this.format(a));
    e.setAttribute("y", this.format(b));
    e.setAttribute("w", this.format(c));
    e.setAttribute("h", this.format(d));
    this.root.appendChild(e)
};
mxXmlCanvas2D.prototype.roundrect = function(a, b, c, d, e, f) {
    var g = this.createElement("roundrect");
    g.setAttribute("x", this.format(a));
    g.setAttribute("y", this.format(b));
    g.setAttribute("w", this.format(c));
    g.setAttribute("h", this.format(d));
    g.setAttribute("dx", this.format(e));
    g.setAttribute("dy", this.format(f));
    this.root.appendChild(g)
};
mxXmlCanvas2D.prototype.ellipse = function(a, b, c, d) {
    var e = this.createElement("ellipse");
    e.setAttribute("x", this.format(a));
    e.setAttribute("y", this.format(b));
    e.setAttribute("w", this.format(c));
    e.setAttribute("h", this.format(d));
    this.root.appendChild(e)
};
mxXmlCanvas2D.prototype.image = function(a, b, c, d, e, f, g, k) {
    e = this.converter.convert(e);
    var l = this.createElement("image");
    l.setAttribute("x", this.format(a));
    l.setAttribute("y", this.format(b));
    l.setAttribute("w", this.format(c));
    l.setAttribute("h", this.format(d));
    l.setAttribute("src", e);
    l.setAttribute("aspect", f ? "1" : "0");
    l.setAttribute("flipH", g ? "1" : "0");
    l.setAttribute("flipV", k ? "1" : "0");
    this.root.appendChild(l)
};
mxXmlCanvas2D.prototype.begin = function() {
    this.root.appendChild(this.createElement("begin"));
    this.lastY = this.lastX = 0
};
mxXmlCanvas2D.prototype.moveTo = function(a, b) {
    var c = this.createElement("move");
    c.setAttribute("x", this.format(a));
    c.setAttribute("y", this.format(b));
    this.root.appendChild(c);
    this.lastX = a;
    this.lastY = b
};
mxXmlCanvas2D.prototype.lineTo = function(a, b) {
    var c = this.createElement("line");
    c.setAttribute("x", this.format(a));
    c.setAttribute("y", this.format(b));
    this.root.appendChild(c);
    this.lastX = a;
    this.lastY = b
};
mxXmlCanvas2D.prototype.quadTo = function(a, b, c, d) {
    var e = this.createElement("quad");
    e.setAttribute("x1", this.format(a));
    e.setAttribute("y1", this.format(b));
    e.setAttribute("x2", this.format(c));
    e.setAttribute("y2", this.format(d));
    this.root.appendChild(e);
    this.lastX = c;
    this.lastY = d
};
mxXmlCanvas2D.prototype.curveTo = function(a, b, c, d, e, f) {
    var g = this.createElement("curve");
    g.setAttribute("x1", this.format(a));
    g.setAttribute("y1", this.format(b));
    g.setAttribute("x2", this.format(c));
    g.setAttribute("y2", this.format(d));
    g.setAttribute("x3", this.format(e));
    g.setAttribute("y3", this.format(f));
    this.root.appendChild(g);
    this.lastX = e;
    this.lastY = f
};
mxXmlCanvas2D.prototype.close = function() {
    this.root.appendChild(this.createElement("close"))
};
mxXmlCanvas2D.prototype.text = function(a, b, c, d, e, f, g, k, l, m, n, p) {
    if (this.textEnabled && null != e) {
        mxUtils.isNode(e) && (e = mxUtils.getOuterHtml(e));
        var q = this.createElement("text");
        q.setAttribute("x", this.format(a));
        q.setAttribute("y", this.format(b));
        q.setAttribute("w", this.format(c));
        q.setAttribute("h", this.format(d));
        q.setAttribute("str", e);
        null != f && q.setAttribute("align", f);
        null != g && q.setAttribute("valign", g);
        q.setAttribute("wrap", k ? "1" : "0");
        null == l && (l = "");
        q.setAttribute("format", l);
        null != m && q.setAttribute("overflow",
            m);
        null != n && q.setAttribute("clip", n ? "1" : "0");
        null != p && q.setAttribute("rotation", p);
        this.root.appendChild(q)
    }
};
mxXmlCanvas2D.prototype.stroke = function() {
    this.root.appendChild(this.createElement("stroke"))
};
mxXmlCanvas2D.prototype.fill = function() {
    this.root.appendChild(this.createElement("fill"))
};
mxXmlCanvas2D.prototype.fillAndStroke = function() {
    this.root.appendChild(this.createElement("fillstroke"))
};

function mxSvgCanvas2D(a, b) {
    mxAbstractCanvas2D.call(this);
    this.root = a;
    this.gradients = [];
    this.defs = null;
    this.styleEnabled = null != b ? b : !1;
    var c = null;
    if (a.ownerDocument != document)
        for (c = a; null != c && "svg" != c.nodeName;) c = c.parentNode;
    null != c && (0 < c.getElementsByTagName("defs").length && (this.defs = c.getElementsByTagName("defs")[0]), null == this.defs && (this.defs = this.createElement("defs"), null != c.firstChild ? c.insertBefore(this.defs, c.firstChild) : c.appendChild(this.defs)), this.styleEnabled && this.defs.appendChild(this.createStyle()))
}
mxUtils.extend(mxSvgCanvas2D, mxAbstractCanvas2D);
mxSvgCanvas2D.prototype.node = null;
mxSvgCanvas2D.prototype.matchHtmlAlignment = !0;
mxSvgCanvas2D.prototype.textEnabled = !0;
mxSvgCanvas2D.prototype.foEnabled = !0;
mxSvgCanvas2D.prototype.foAltText = "[Object]";
mxSvgCanvas2D.prototype.strokeTolerance = 0;
mxSvgCanvas2D.prototype.refCount = 0;
mxSvgCanvas2D.prototype.blockImagePointerEvents = !1;
mxSvgCanvas2D.prototype.lineHeightCorrection = 1.05;
mxSvgCanvas2D.prototype.pointerEventsValue = "all";
mxSvgCanvas2D.prototype.fontMetricsPadding = 10;
mxSvgCanvas2D.prototype.reset = function() {
    mxAbstractCanvas2D.prototype.reset.apply(this, arguments);
    this.gradients = []
};
mxSvgCanvas2D.prototype.createStyle = function(a) {
    a = this.createElement("style");
    a.setAttribute("type", "text/css");
    mxUtils.write(a, "svg{font-family:" + mxConstants.DEFAULT_FONTFAMILY + ";font-size:" + mxConstants.DEFAULT_FONTSIZE + ";fill:none;stroke-miterlimit:10}");
    return a
};
mxSvgCanvas2D.prototype.createElement = function(a, b) {
    if (null != this.root.ownerDocument.createElementNS) return this.root.ownerDocument.createElementNS(b || mxConstants.NS_SVG, a);
    var c = this.root.ownerDocument.createElement(a);
    null != b && c.setAttribute("xmlns", b);
    return c
};
mxSvgCanvas2D.prototype.createAlternateContent = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
    return null != this.foAltText ? (a = this.state, b = this.createElement("text"), b.setAttribute("x", Math.round(d / 2)), b.setAttribute("y", Math.round((e + a.fontSize) / 2)), b.setAttribute("fill", a.fontColor || "black"), b.setAttribute("text-anchor", "middle"), b.setAttribute("font-size", Math.round(a.fontSize) + "px"), b.setAttribute("font-family", a.fontFamily), (a.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD && b.setAttribute("font-weight",
        "bold"), (a.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC && b.setAttribute("font-style", "italic"), (a.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE && b.setAttribute("text-decoration", "underline"), mxUtils.write(b, this.foAltText), b) : null
};
mxSvgCanvas2D.prototype.createGradientId = function(a, b, c, d, e) {
    "#" == a.charAt(0) && (a = a.substring(1));
    "#" == b.charAt(0) && (b = b.substring(1));
    a = a.toLowerCase() + "-" + c;
    b = b.toLowerCase() + "-" + d;
    c = null;
    null == e || e == mxConstants.DIRECTION_SOUTH ? c = "s" : e == mxConstants.DIRECTION_EAST ? c = "e" : (d = a, a = b, b = d, e == mxConstants.DIRECTION_NORTH ? c = "s" : e == mxConstants.DIRECTION_WEST && (c = "e"));
    return "mx-gradient-" + a + "-" + b + "-" + c
};
mxSvgCanvas2D.prototype.getSvgGradient = function(a, b, c, d, e) {
    var f = this.createGradientId(a, b, c, d, e),
        g = this.gradients[f];
    if (null == g) {
        var k = this.root.ownerSVGElement,
            l = 0,
            m = f + "-" + l;
        if (null != k)
            for (g = k.ownerDocument.getElementById(m); null != g && g.ownerSVGElement != k;) m = f + "-" + l++, g = k.ownerDocument.getElementById(m);
        else m = "id" + ++this.refCount;
        null == g && (g = this.createSvgGradient(a, b, c, d, e), g.setAttribute("id", m), null != this.defs ? this.defs.appendChild(g) : k.appendChild(g));
        this.gradients[f] = g
    }
    return g.getAttribute("id")
};
mxSvgCanvas2D.prototype.createSvgGradient = function(a, b, c, d, e) {
    var f = this.createElement("linearGradient");
    f.setAttribute("x1", "0%");
    f.setAttribute("y1", "0%");
    f.setAttribute("x2", "0%");
    f.setAttribute("y2", "0%");
    null == e || e == mxConstants.DIRECTION_SOUTH ? f.setAttribute("y2", "100%") : e == mxConstants.DIRECTION_EAST ? f.setAttribute("x2", "100%") : e == mxConstants.DIRECTION_NORTH ? f.setAttribute("y1", "100%") : e == mxConstants.DIRECTION_WEST && f.setAttribute("x1", "100%");
    c = 1 > c ? ";stop-opacity:" + c : "";
    e = this.createElement("stop");
    e.setAttribute("offset", "0%");
    e.setAttribute("style", "stop-color:" + a + c);
    f.appendChild(e);
    c = 1 > d ? ";stop-opacity:" + d : "";
    e = this.createElement("stop");
    e.setAttribute("offset", "100%");
    e.setAttribute("style", "stop-color:" + b + c);
    f.appendChild(e);
    return f
};
mxSvgCanvas2D.prototype.addNode = function(a, b) {
    var c = this.node,
        d = this.state;
    if (null != c) {
        if ("path" == c.nodeName)
            if (null != this.path && 0 < this.path.length) c.setAttribute("d", this.path.join(" "));
            else return;
        a && null != d.fillColor ? this.updateFill() : this.styleEnabled || ("ellipse" == c.nodeName && mxClient.IS_FF ? c.setAttribute("fill", "transparent") : c.setAttribute("fill", "none"), a = !1);
        b && null != d.strokeColor ? this.updateStroke() : this.styleEnabled || c.setAttribute("stroke", "none");
        null != d.transform && 0 < d.transform.length &&
            c.setAttribute("transform", d.transform);
        d.shadow && this.root.appendChild(this.createShadow(c));
        0 < this.strokeTolerance && !a && this.root.appendChild(this.createTolerance(c));
        this.pointerEvents && ("path" != c.nodeName || this.path[this.path.length - 1] == this.closeOp) ? c.setAttribute("pointer-events", this.pointerEventsValue) : !this.pointerEvents && null == this.originalRoot && c.setAttribute("pointer-events", "none");
        this.root.appendChild(c)
    }
};
mxSvgCanvas2D.prototype.updateFill = function() {
    var a = this.state;
    1 > a.alpha && this.node.setAttribute("fill-opacity", a.alpha);
    null != a.fillColor && (null != a.gradientColor ? (a = this.getSvgGradient(a.fillColor, a.gradientColor, a.fillAlpha, a.gradientAlpha, a.gradientDirection), this.node.setAttribute("fill", "url(#" + a + ")")) : this.node.setAttribute("fill", a.fillColor.toLowerCase()))
};
mxSvgCanvas2D.prototype.getCurrentStrokeWidth = function() {
    return Math.max(1, this.format(this.state.strokeWidth * this.state.scale))
};
mxSvgCanvas2D.prototype.updateStroke = function() {
    var a = this.state;
    this.node.setAttribute("stroke", a.strokeColor.toLowerCase());
    1 > a.alpha && this.node.setAttribute("stroke-opacity", a.alpha);
    var b = this.getCurrentStrokeWidth();
    1 != b && this.node.setAttribute("stroke-width", b);
    "path" == this.node.nodeName && this.updateStrokeAttributes();
    a.dashed && this.node.setAttribute("stroke-dasharray", this.createDashPattern(a.strokeWidth * a.scale))
};
mxSvgCanvas2D.prototype.updateStrokeAttributes = function() {
    var a = this.state;
    null != a.lineJoin && "miter" != a.lineJoin && this.node.setAttribute("stroke-linejoin", a.lineJoin);
    if (null != a.lineCap) {
        var b = a.lineCap;
        "flat" == b && (b = "butt");
        "butt" != b && this.node.setAttribute("stroke-linecap", b)
    }
    null != a.miterLimit && (!this.styleEnabled || 10 != a.miterLimit) && this.node.setAttribute("stroke-miterlimit", a.miterLimit)
};
mxSvgCanvas2D.prototype.createDashPattern = function(a) {
    var b = [];
    if ("string" === typeof this.state.dashPattern) {
        var c = this.state.dashPattern.split(" ");
        if (0 < c.length)
            for (var d = 0; d < c.length; d++) b[d] = Number(c[d]) * a
    }
    return b.join(" ")
};
mxSvgCanvas2D.prototype.createTolerance = function(a) {
    a = a.cloneNode(!0);
    var b = parseFloat(a.getAttribute("stroke-width") || 1) + this.strokeTolerance;
    a.setAttribute("pointer-events", "stroke");
    a.setAttribute("visibility", "hidden");
    a.removeAttribute("stroke-dasharray");
    a.setAttribute("stroke-width", b);
    a.setAttribute("fill", "none");
    a.setAttribute("stroke", mxClient.IS_OP ? "none" : "white");
    return a
};
mxSvgCanvas2D.prototype.createShadow = function(a) {
    a = a.cloneNode(!0);
    var b = this.state;
    "none" != a.getAttribute("fill") && a.setAttribute("fill", b.shadowColor);
    "none" != a.getAttribute("stroke") && a.setAttribute("stroke", b.shadowColor);
    a.setAttribute("transform", "translate(" + this.format(b.shadowDx * b.scale) + "," + this.format(b.shadowDy * b.scale) + ")" + (b.transform || ""));
    a.setAttribute("opacity", b.shadowAlpha);
    return a
};
mxSvgCanvas2D.prototype.setLink = function(a) {
    if (null == a) this.root = this.originalRoot;
    else {
        this.originalRoot = this.root;
        var b = this.createElement("a");
        null == b.setAttributeNS || this.root.ownerDocument != document && null == document.documentMode ? b.setAttribute("xlink:href", a) : b.setAttributeNS(mxConstants.NS_XLINK, "xlink:href", a);
        this.root.appendChild(b);
        this.root = b
    }
};
mxSvgCanvas2D.prototype.rotate = function(a, b, c, d, e) {
    if (0 != a || b || c) {
        var f = this.state;
        d += f.dx;
        e += f.dy;
        d *= f.scale;
        e *= f.scale;
        f.transform = f.transform || "";
        if (b && c) a += 180;
        else if (b ^ c) {
            var g = b ? d : 0,
                k = b ? -1 : 1,
                l = c ? e : 0,
                m = c ? -1 : 1;
            f.transform += "translate(" + this.format(g) + "," + this.format(l) + ")scale(" + this.format(k) + "," + this.format(m) + ")translate(" + this.format(-g) + "," + this.format(-l) + ")"
        }
        if (b ? !c : c) a *= -1;
        0 != a && (f.transform += "rotate(" + this.format(a) + "," + this.format(d) + "," + this.format(e) + ")");
        f.rotation += a;
        f.rotationCx =
            d;
        f.rotationCy = e
    }
};
mxSvgCanvas2D.prototype.begin = function() {
    mxAbstractCanvas2D.prototype.begin.apply(this, arguments);
    this.node = this.createElement("path")
};
mxSvgCanvas2D.prototype.rect = function(a, b, c, d) {
    var e = this.state,
        f = this.createElement("rect");
    f.setAttribute("x", this.format((a + e.dx) * e.scale));
    f.setAttribute("y", this.format((b + e.dy) * e.scale));
    f.setAttribute("width", this.format(c * e.scale));
    f.setAttribute("height", this.format(d * e.scale));
    this.node = f
};
mxSvgCanvas2D.prototype.roundrect = function(a, b, c, d, e, f) {
    this.rect(a, b, c, d);
    0 < e && this.node.setAttribute("rx", this.format(e * this.state.scale));
    0 < f && this.node.setAttribute("ry", this.format(f * this.state.scale))
};
mxSvgCanvas2D.prototype.ellipse = function(a, b, c, d) {
    var e = this.state,
        f = this.createElement("ellipse");
    f.setAttribute("cx", Math.round((a + c / 2 + e.dx) * e.scale));
    f.setAttribute("cy", Math.round((b + d / 2 + e.dy) * e.scale));
    f.setAttribute("rx", c / 2 * e.scale);
    f.setAttribute("ry", d / 2 * e.scale);
    this.node = f
};
mxSvgCanvas2D.prototype.image = function(a, b, c, d, e, f, g, k) {
    e = this.converter.convert(e);
    f = null != f ? f : !0;
    g = null != g ? g : !1;
    k = null != k ? k : !1;
    var l = this.state;
    a += l.dx;
    b += l.dy;
    var m = this.createElement("image");
    m.setAttribute("x", this.format(a * l.scale));
    m.setAttribute("y", this.format(b * l.scale));
    m.setAttribute("width", this.format(c * l.scale));
    m.setAttribute("height", this.format(d * l.scale));
    null == m.setAttributeNS ? m.setAttribute("xlink:href", e) : m.setAttributeNS(mxConstants.NS_XLINK, "xlink:href", e);
    f || m.setAttribute("preserveAspectRatio",
        "none");
    1 > l.alpha && m.setAttribute("opacity", l.alpha);
    e = this.state.transform || "";
    if (g || k) {
        var n = f = 1,
            p = 0,
            q = 0;
        g && (f = -1, p = -c - 2 * a);
        k && (n = -1, q = -d - 2 * b);
        e += "scale(" + f + "," + n + ")translate(" + p + "," + q + ")"
    }
    0 < e.length && m.setAttribute("transform", e);
    this.pointerEvents || m.setAttribute("pointer-events", "none");
    this.root.appendChild(m);
    this.blockImagePointerEvents && (m.setAttribute("style", "pointer-events:none"), m = this.createElement("rect"), m.setAttribute("visibility", "hidden"), m.setAttribute("pointer-events", "fill"),
        m.setAttribute("x", this.format(a * l.scale)), m.setAttribute("y", this.format(b * l.scale)), m.setAttribute("width", this.format(c * l.scale)), m.setAttribute("height", this.format(d * l.scale)), this.root.appendChild(m))
};
mxSvgCanvas2D.prototype.createDiv = function(a, b, c, d, e) {
    var f = this.state;
    c = mxConstants.ABSOLUTE_LINE_HEIGHT ? Math.round(f.fontSize * mxConstants.LINE_HEIGHT) + "px" : mxConstants.LINE_HEIGHT * this.lineHeightCorrection;
    d = "display:inline-block;font-size:" + Math.round(f.fontSize) + "px;font-family:" + f.fontFamily + ";color:" + f.fontColor + ";line-height:" + c + ";" + d;
    (f.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD && (d += "font-weight:bold;");
    (f.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC && (d += "font-style:italic;");
    (f.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE && (d += "text-decoration:underline;");
    c = "";
    b == mxConstants.ALIGN_CENTER ? (c += "text-align:center;", d += "text-align:center;") : b == mxConstants.ALIGN_RIGHT && (c += "text-align:right;", d += "text-align:right;");
    null != f.fontBackgroundColor && (c += "background-color:" + f.fontBackgroundColor + ";");
    null != f.fontBorderColor && (c += "border:1px solid " + f.fontBorderColor + ";");
    mxUtils.isNode(a) || (b = document.createElement("textarea"), b.innerHTML = a.replace(/&lt;/g,
        "&amp;lt;").replace(/&gt;/g, "&amp;gt;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), a = b.value, "fill" != e && "width" != e ? a = '<div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;' + c + '">' + a + "</div>" : d += c);
    if (!mxClient.IS_IE && !mxClient.IS_IE11 && document.createElementNS) return e = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), e.setAttribute("style", d), mxUtils.isNode(a) ? this.root.ownerDocument != document ? e.appendChild(a.cloneNode(!0)) : e.appendChild(a) : e.innerHTML = a, e;
    mxUtils.isNode(a) &&
        this.root.ownerDocument != document && (a = a.outerHTML);
    a = a.replace(/<br>/g, "<br />").replace(/<hr>/g, "<hr />");
    return mxUtils.parseXml('<div xmlns="http://www.w3.org/1999/xhtml" style="' + d + '">' + a + "</div>").documentElement
};
mxSvgCanvas2D.prototype.text = function(a, b, c, d, e, f, g, k, l, m, n, p) {
    if (this.textEnabled && null != e) {
        p = null != p ? p : 0;
        var q = this.state;
        a += q.dx;
        b += q.dy;
        if (this.foEnabled && "html" == l) {
            var r = "vertical-align:top;";
            n ? r += "overflow:hidden;max-height:" + Math.round(d) + "px;width:" + Math.round(c) + "px;" : "fill" == m ? r += "width:" + Math.round(c) + "px;height:" + Math.round(d) + "px;" : "width" == m && (r += "width:" + Math.round(c) + "px;", 0 < d && (r += "max-height:" + Math.round(d) + "px;"));
            var r = k && 0 < c ? r + ("width:" + Math.round(c) + "px;white-space:normal;") :
                r + "white-space:nowrap;",
                s = this.createElement("g");
            1 > q.alpha && s.setAttribute("opacity", q.alpha);
            var t = this.createElement("foreignObject");
            t.setAttribute("pointer-events", "all");
            r = this.createDiv(e, f, g, r, m);
            if (null != r) {
                s.appendChild(t);
                this.root.appendChild(s);
                var u = 0,
                    x = 0,
                    y = x = 2;
                if (mxClient.IS_IE && (9 == document.documentMode || !mxClient.IS_SVG)) {
                    var v = document.createElement("div");
                    v.style.cssText = r.getAttribute("style");
                    v.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block";
                    v.style.position = "absolute";
                    v.style.visibility = "hidden";
                    var z = document.createElement("div");
                    z.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block";
                    z.innerHTML = mxUtils.isNode(e) ? e.outerHTML : e;
                    v.appendChild(z);
                    document.body.appendChild(v);
                    8 != document.documentMode && (9 != document.documentMode && null != q.fontBorderColor) && (x += 2, y += 2);
                    if (k && 0 < c) {
                        var u = z.offsetWidth,
                            B = 0;
                        if (!n && this.root.ownerDocument != document) {
                            var A = v.style.whiteSpace;
                            v.style.whiteSpace = "nowrap";
                            if (u == z.offsetWidth) x += this.fontMetricsPadding;
                            else if (8 == document.documentMode ||
                                9 == document.documentMode) B = -2;
                            v.style.whiteSpace = A
                        }
                        u += x;
                        n && (u = Math.min(u, c));
                        v.style.width = u + "px";
                        u = z.offsetWidth + x + B;
                        x = z.offsetHeight + y;
                        v.style.display = "inline-block";
                        v.style.position = "";
                        v.style.visibility = "";
                        v.style.width = u + "px";
                        r.setAttribute("style", v.style.cssText)
                    } else u = z.offsetWidth + x, x = z.offsetHeight + y;
                    v.parentNode.removeChild(v);
                    t.appendChild(r)
                } else this.root.ownerDocument != document || mxClient.IS_FF ? (r.style.visibility = "hidden", document.body.appendChild(r)) : t.appendChild(r), v = r, null != v.firstChild &&
                    "DIV" == v.firstChild.nodeName && (v = v.firstChild), u = v.offsetWidth, !n && (k && 0 < c && this.root.ownerDocument != document) && (A = r.style.whiteSpace, r.style.whiteSpace = "nowrap", u == v.offsetWidth && (x += this.fontMetricsPadding), r.style.whiteSpace = A), u += x, k && (n && (u = Math.min(u, c)), r.style.width = u + "px"), u = v.offsetWidth + x, x = v.offsetHeight + 2, r.parentNode != t && (t.appendChild(r), r.style.visibility = "");
                n && (x = Math.min(x, d));
                "fill" == m ? (c = Math.max(c, u), d = Math.max(d, x)) : (c = "width" == m ? Math.max(c, u) : u, d = x);
                1 > q.alpha && s.setAttribute("opacity",
                    q.alpha);
                x = r = 0;
                f == mxConstants.ALIGN_CENTER ? r -= c / 2 : f == mxConstants.ALIGN_RIGHT && (r -= c);
                a += r;
                g == mxConstants.ALIGN_MIDDLE ? x -= d / 2 : g == mxConstants.ALIGN_BOTTOM && (x -= d);
                b += x;
                v = 1 != q.scale ? "scale(" + q.scale + ")" : "";
                0 != q.rotation && this.rotateHtml ? (v += "rotate(" + q.rotation + "," + c / 2 + "," + d / 2 + ")", b = this.rotatePoint((a + c / 2) * q.scale, (b + d / 2) * q.scale, q.rotation, q.rotationCx, q.rotationCy), a = b.x - c * q.scale / 2, b = b.y - d * q.scale / 2) : (a *= q.scale, b *= q.scale);
                0 != p && (v += "rotate(" + p + "," + -r + "," + -x + ")");
                s.setAttribute("transform", "translate(" +
                    Math.round(a) + "," + Math.round(b) + ")" + v);
                t.setAttribute("width", Math.round(Math.max(1, c)));
                t.setAttribute("height", Math.round(Math.max(1, d)));
                this.root.ownerDocument != document && (a = this.createAlternateContent(t, a, b, c, d, e, f, g, k, l, m, n, p), null != a && (t.setAttribute("requiredFeatures", "http://www.w3.org/TR/SVG11/feature#Extensibility"), c = this.createElement("switch"), c.appendChild(t), c.appendChild(a), s.appendChild(c)))
            }
        } else this.plainText(a, b, c, d, e, f, g, k, m, n, p)
    }
};
mxSvgCanvas2D.prototype.createClip = function(a, b, c, d) {
    a = Math.round(a);
    b = Math.round(b);
    c = Math.round(c);
    d = Math.round(d);
    for (var e = "mx-clip-" + a + "-" + b + "-" + c + "-" + d, f = 0, g = e + "-" + f; null != document.getElementById(g);) g = e + "-" + ++f;
    clip = this.createElement("clipPath");
    clip.setAttribute("id", g);
    e = this.createElement("rect");
    e.setAttribute("x", a);
    e.setAttribute("y", b);
    e.setAttribute("width", c);
    e.setAttribute("height", d);
    clip.appendChild(e);
    return clip
};
mxSvgCanvas2D.prototype.plainText = function(a, b, c, d, e, f, g, k, l, m, n) {
    n = null != n ? n : 0;
    k = this.state;
    var p = Math.round(k.fontSize),
        q = this.createElement("g"),
        r = k.transform || "";
    this.updateFont(q);
    0 != n && (r += "rotate(" + n + "," + this.format(a * k.scale) + "," + this.format(b * k.scale) + ")");
    if (m && 0 < c && 0 < d) {
        var s = a;
        n = b;
        f == mxConstants.ALIGN_CENTER ? s -= c / 2 : f == mxConstants.ALIGN_RIGHT && (s -= c);
        "fill" != l && (g == mxConstants.ALIGN_MIDDLE ? n -= d / 2 : g == mxConstants.ALIGN_BOTTOM && (n -= d));
        n = this.createClip(s * k.scale - 2, n * k.scale - 2, c * k.scale + 4,
            d * k.scale + 4);
        null != this.defs ? this.defs.appendChild(n) : this.root.appendChild(n);
        q.setAttribute("clip-path", "url(#" + n.getAttribute("id") + ")")
    }
    n = f == mxConstants.ALIGN_RIGHT ? "end" : f == mxConstants.ALIGN_CENTER ? "middle" : "start";
    "start" != n && q.setAttribute("text-anchor", n);
    (!this.styleEnabled || p != mxConstants.DEFAULT_FONTSIZE) && q.setAttribute("font-size", Math.round(p * k.scale) + "px");
    0 < r.length && q.setAttribute("transform", r);
    1 > k.alpha && q.setAttribute("opacity", k.alpha);
    var r = e.split("\n"),
        s = Math.round(p * mxConstants.LINE_HEIGHT),
        t = p + (r.length - 1) * s;
    n = b + p - 1;
    g == mxConstants.ALIGN_MIDDLE ? "fill" == l ? n -= d / 2 : (m = (this.matchHtmlAlignment && m && 0 < d ? Math.min(t, d) : t) / 2, n -= m + 1) : g == mxConstants.ALIGN_BOTTOM && ("fill" == l ? n -= d : (m = this.matchHtmlAlignment && m && 0 < d ? Math.min(t, d) : t, n -= m + 2));
    for (m = 0; m < r.length; m++) 0 < r[m].length && 0 < mxUtils.trim(r[m]).length && (p = this.createElement("text"), p.setAttribute("x", this.format(a * k.scale)), p.setAttribute("y", this.format(n * k.scale)), mxUtils.write(p, r[m]), q.appendChild(p)), n += s;
    this.root.appendChild(q);
    this.addTextBackground(q,
        e, a, b, c, "fill" == l ? d : t, f, g, l)
};
mxSvgCanvas2D.prototype.updateFont = function(a) {
    var b = this.state;
    a.setAttribute("fill", b.fontColor);
    (!this.styleEnabled || b.fontFamily != mxConstants.DEFAULT_FONTFAMILY) && a.setAttribute("font-family", b.fontFamily);
    (b.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD && a.setAttribute("font-weight", "bold");
    (b.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC && a.setAttribute("font-style", "italic");
    (b.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE && a.setAttribute("text-decoration",
        "underline")
};
mxSvgCanvas2D.prototype.addTextBackground = function(a, b, c, d, e, f, g, k, l) {
    var m = this.state;
    if (null != m.fontBackgroundColor || null != m.fontBorderColor) {
        var n = null;
        if ("fill" == l || "width" == l) g == mxConstants.ALIGN_CENTER ? c -= e / 2 : g == mxConstants.ALIGN_RIGHT && (c -= e), k == mxConstants.ALIGN_MIDDLE ? d -= f / 2 : k == mxConstants.ALIGN_BOTTOM && (d -= f), n = new mxRectangle((c + 1) * m.scale, d * m.scale, (e - 2) * m.scale, (f + 2) * m.scale);
        else if (null != a.getBBox && this.root.ownerDocument == document) try {
            var n = a.getBBox(),
                p = mxClient.IS_IE && mxClient.IS_SVG,
                n = new mxRectangle(n.x, n.y + (p ? 0 : 1), n.width, n.height + (p ? 1 : 0))
        } catch (q) {} else n = document.createElement("div"), n.style.lineHeight = mxConstants.ABSOLUTE_LINE_HEIGHT ? Math.round(m.fontSize * mxConstants.LINE_HEIGHT) + "px" : mxConstants.LINE_HEIGHT, n.style.fontSize = Math.round(m.fontSize) + "px", n.style.fontFamily = m.fontFamily, n.style.whiteSpace = "nowrap", n.style.position = "absolute", n.style.visibility = "hidden", n.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block", n.style.zoom = "1", (m.fontStyle & mxConstants.FONT_BOLD) ==
            mxConstants.FONT_BOLD && (n.style.fontWeight = "bold"), (m.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC && (n.style.fontStyle = "italic"), b = mxUtils.htmlEntities(b, !1), n.innerHTML = b.replace(/\n/g, "<br/>"), document.body.appendChild(n), e = n.offsetWidth, f = n.offsetHeight, n.parentNode.removeChild(n), g == mxConstants.ALIGN_CENTER ? c -= e / 2 : g == mxConstants.ALIGN_RIGHT && (c -= e), k == mxConstants.ALIGN_MIDDLE ? d -= f / 2 : k == mxConstants.ALIGN_BOTTOM && (d -= f), n = new mxRectangle((c + 1) * m.scale, (d + 2) * m.scale, e * m.scale, (f + 1) *
                m.scale);
        null != n && (b = this.createElement("rect"), b.setAttribute("fill", m.fontBackgroundColor || "none"), b.setAttribute("stroke", m.fontBorderColor || "none"), b.setAttribute("x", Math.floor(n.x - 1)), b.setAttribute("y", Math.floor(n.y - 1)), b.setAttribute("width", Math.ceil(n.width + 2)), b.setAttribute("height", Math.ceil(n.height)), m = null != m.fontBorderColor ? Math.max(1, this.format(m.scale)) : 0, b.setAttribute("stroke-width", m), this.root.ownerDocument == document && 1 == mxUtils.mod(m, 2) && b.setAttribute("transform", "translate(0.5, 0.5)"),
            a.insertBefore(b, a.firstChild))
    }
};
mxSvgCanvas2D.prototype.stroke = function() {
    this.addNode(!1, !0)
};
mxSvgCanvas2D.prototype.fill = function() {
    this.addNode(!0, !1)
};
mxSvgCanvas2D.prototype.fillAndStroke = function() {
    this.addNode(!0, !0)
};
var mxVmlCanvas2D = function(a) {
    mxAbstractCanvas2D.call(this);
    this.root = a
};
mxUtils.extend(mxVmlCanvas2D, mxAbstractCanvas2D);
mxVmlCanvas2D.prototype.node = null;
mxVmlCanvas2D.prototype.textEnabled = !0;
mxVmlCanvas2D.prototype.moveOp = "m";
mxVmlCanvas2D.prototype.lineOp = "l";
mxVmlCanvas2D.prototype.curveOp = "c";
mxVmlCanvas2D.prototype.closeOp = "x";
mxVmlCanvas2D.prototype.rotatedHtmlBackground = "";
mxVmlCanvas2D.prototype.vmlScale = 1;
mxVmlCanvas2D.prototype.createElement = function(a) {
    return document.createElement(a)
};
mxVmlCanvas2D.prototype.createVmlElement = function(a) {
    return this.createElement(mxClient.VML_PREFIX + ":" + a)
};
mxVmlCanvas2D.prototype.addNode = function(a, b) {
    var c = this.node,
        d = this.state;
    if (null != c) {
        if ("shape" == c.nodeName)
            if (null != this.path && 0 < this.path.length) c.path = this.path.join(" ") + " e", c.style.width = this.root.style.width, c.style.height = this.root.style.height, c.coordsize = parseInt(c.style.width) + " " + parseInt(c.style.height);
            else return;
        c.strokeweight = this.format(Math.max(1, d.strokeWidth * d.scale / this.vmlScale)) + "px";
        d.shadow && this.root.appendChild(this.createShadow(c, a && null != d.fillColor, b && null != d.strokeColor));
        b && null != d.strokeColor ? (c.stroked = "true", c.strokecolor = d.strokeColor) : c.stroked = "false";
        c.appendChild(this.createStroke());
        a && null != d.fillColor ? c.appendChild(this.createFill()) : this.pointerEvents && ("shape" != c.nodeName || this.path[this.path.length - 1] == this.closeOp) ? c.appendChild(this.createTransparentFill()) : c.filled = "false";
        this.root.appendChild(c)
    }
};
mxVmlCanvas2D.prototype.createTransparentFill = function() {
    var a = this.createVmlElement("fill");
    a.src = mxClient.imageBasePath + "/transparent.gif";
    a.type = "tile";
    return a
};
mxVmlCanvas2D.prototype.createFill = function() {
    var a = this.state,
        b = this.createVmlElement("fill");
    b.color = a.fillColor;
    if (null != a.gradientColor) {
        b.type = "gradient";
        b.method = "none";
        b.color2 = a.gradientColor;
        var c = 180 - a.rotation,
            c = a.gradientDirection == mxConstants.DIRECTION_WEST ? c - (90 + ("x" == this.root.style.flip ? 180 : 0)) : a.gradientDirection == mxConstants.DIRECTION_EAST ? c + (90 + ("x" == this.root.style.flip ? 180 : 0)) : a.gradientDirection == mxConstants.DIRECTION_NORTH ? c - (180 + ("y" == this.root.style.flip ? -180 : 0)) : c + ("y" ==
                this.root.style.flip ? -180 : 0);
        if ("x" == this.root.style.flip || "y" == this.root.style.flip) c *= -1;
        b.angle = mxUtils.mod(c, 360);
        b.opacity = 100 * a.alpha * a.fillAlpha + "%";
        b.setAttribute(mxClient.OFFICE_PREFIX + ":opacity2", 100 * a.alpha * a.gradientAlpha + "%")
    } else 1 > a.alpha && (b.opacity = 100 * a.alpha + "%");
    return b
};
mxVmlCanvas2D.prototype.createStroke = function() {
    var a = this.state,
        b = this.createVmlElement("stroke");
    b.endcap = a.lineCap || "flat";
    b.joinstyle = a.lineJoin || "miter";
    b.miterlimit = a.miterLimit || "10";
    1 > a.alpha && (b.opacity = 100 * a.alpha + "%");
    a.dashed && (b.dashstyle = this.getVmlDashStyle());
    return b
};
mxVmlCanvas2D.prototype.getVmlDashStyle = function() {
    var a = "dash";
    if ("string" === typeof this.state.dashPattern) {
        var b = this.state.dashPattern.split(" ");
        0 < b.length && 1 == b[0] && (a = "0 2")
    }
    return a
};
mxVmlCanvas2D.prototype.createShadow = function(a, b, c) {
    var d = this.state,
        e = -d.rotation * (Math.PI / 180),
        f = Math.cos(e),
        e = Math.sin(e),
        g = d.shadowDx * d.scale,
        k = d.shadowDy * d.scale;
    "x" == this.root.style.flip ? g *= -1 : "y" == this.root.style.flip && (k *= -1);
    var l = a.cloneNode(!0);
    l.style.marginLeft = Math.round(g * f - k * e) + "px";
    l.style.marginTop = Math.round(g * e + k * f) + "px";
    8 == document.documentMode && (l.strokeweight = a.strokeweight, "shape" == a.nodeName && (l.path = this.path.join(" ") + " e", l.style.width = this.root.style.width, l.style.height =
        this.root.style.height, l.coordsize = parseInt(a.style.width) + " " + parseInt(a.style.height)));
    c ? (l.strokecolor = d.shadowColor, l.appendChild(this.createShadowStroke())) : l.stroked = "false";
    b ? l.appendChild(this.createShadowFill()) : l.filled = "false";
    return l
};
mxVmlCanvas2D.prototype.createShadowFill = function() {
    var a = this.createVmlElement("fill");
    a.color = this.state.shadowColor;
    a.opacity = 100 * this.state.alpha * this.state.shadowAlpha + "%";
    return a
};
mxVmlCanvas2D.prototype.createShadowStroke = function() {
    var a = this.createStroke();
    a.opacity = 100 * this.state.alpha * this.state.shadowAlpha + "%";
    return a
};
mxVmlCanvas2D.prototype.rotate = function(a, b, c, d, e) {
    b && c ? a += 180 : b ? this.root.style.flip = "x" : c && (this.root.style.flip = "y");
    if (b ? !c : c) a *= -1;
    this.root.style.rotation = a;
    this.state.rotation += a;
    this.state.rotationCx = d;
    this.state.rotationCy = e
};
mxVmlCanvas2D.prototype.begin = function() {
    mxAbstractCanvas2D.prototype.begin.apply(this, arguments);
    this.node = this.createVmlElement("shape");
    this.node.style.position = "absolute"
};
mxVmlCanvas2D.prototype.quadTo = function(a, b, c, d) {
    var e = this.state,
        f = (this.lastX + e.dx) * e.scale,
        g = (this.lastY + e.dy) * e.scale;
    a = (a + e.dx) * e.scale;
    b = (b + e.dy) * e.scale;
    c = (c + e.dx) * e.scale;
    d = (d + e.dy) * e.scale;
    var g = g + 2 / 3 * (b - g),
        k = c + 2 / 3 * (a - c);
    b = d + 2 / 3 * (b - d);
    this.path.push("c " + this.format(f + 2 / 3 * (a - f)) + " " + this.format(g) + " " + this.format(k) + " " + this.format(b) + " " + this.format(c) + " " + this.format(d));
    this.lastX = c / e.scale - e.dx;
    this.lastY = d / e.scale - e.dy
};
mxVmlCanvas2D.prototype.createRect = function(a, b, c, d, e) {
    var f = this.state;
    a = this.createVmlElement(a);
    a.style.position = "absolute";
    a.style.left = this.format((b + f.dx) * f.scale) + "px";
    a.style.top = this.format((c + f.dy) * f.scale) + "px";
    a.style.width = this.format(d * f.scale) + "px";
    a.style.height = this.format(e * f.scale) + "px";
    return a
};
mxVmlCanvas2D.prototype.rect = function(a, b, c, d) {
    this.node = this.createRect("rect", a, b, c, d)
};
mxVmlCanvas2D.prototype.roundrect = function(a, b, c, d, e, f) {
    this.node = this.createRect("roundrect", a, b, c, d);
    this.node.setAttribute("arcsize", Math.max(100 * e / c, 100 * f / d) + "%")
};
mxVmlCanvas2D.prototype.ellipse = function(a, b, c, d) {
    this.node = this.createRect("oval", a, b, c, d)
};
mxVmlCanvas2D.prototype.image = function(a, b, c, d, e, f, g, k) {
    var l = null;
    f ? (l = this.createRect("rect", a, b, c, d), l.stroked = "false", a = this.createVmlElement("fill"), a.aspect = f ? "atmost" : "ignore", a.rotate = "true", a.type = "frame", a.src = e, l.appendChild(a)) : (l = this.createRect("image", a, b, c, d), l.src = e);
    g && k ? l.style.rotation = "180" : g ? l.style.flip = "x" : k && (l.style.flip = "y");
    1 > this.state.alpha && (l.style.filter += "alpha(opacity=" + 100 * this.state.alpha + ")");
    this.root.appendChild(l)
};
mxVmlCanvas2D.prototype.createDiv = function(a, b, c, d) {
    c = this.createElement("div");
    var e = this.state,
        f = "";
    null != e.fontBackgroundColor && (f += "background-color:" + e.fontBackgroundColor + ";");
    null != e.fontBorderColor && (f += "border:1px solid " + e.fontBorderColor + ";");
    mxUtils.isNode(a) ? c.appendChild(a) : "fill" != d && "width" != d ? (d = this.createElement("div"), d.style.cssText = f, d.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block", d.style.zoom = "1", d.innerHTML = a, c.appendChild(d)) : (c.style.cssText = f, c.innerHTML = a);
    a =
        c.style;
    a.fontSize = Math.round(e.fontSize / this.vmlScale) + "px";
    a.fontFamily = e.fontFamily;
    a.color = e.fontColor;
    a.verticalAlign = "top";
    a.textAlign = b || "left";
    a.lineHeight = mxConstants.ABSOLUTE_LINE_HEIGHT ? Math.round(e.fontSize * mxConstants.LINE_HEIGHT / this.vmlScale) + "px" : mxConstants.LINE_HEIGHT;
    (e.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD && (a.fontWeight = "bold");
    (e.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC && (a.fontStyle = "italic");
    (e.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE &&
        (a.textDecoration = "underline");
    return c
};
mxVmlCanvas2D.prototype.text = function(a, b, c, d, e, f, g, k, l, m, n, p) {
    if (this.textEnabled && null != e) {
        var q = this.state;
        if ("html" == l) {
            null != q.rotation && (b = this.rotatePoint(a, b, q.rotation, q.rotationCx, q.rotationCy), a = b.x, b = b.y);
            8 == document.documentMode ? (a += q.dx, b += q.dy) : (a *= q.scale, b *= q.scale);
            l = 8 == document.documentMode ? this.createVmlElement("group") : this.createElement("div");
            l.style.position = "absolute";
            l.style.display = "inline";
            l.style.left = this.format(a) + "px";
            l.style.top = this.format(b) + "px";
            l.style.zoom = q.scale;
            var r = this.createElement("div");
            r.style.position = "relative";
            r.style.display = "inline";
            var s = mxUtils.getAlignmentAsPoint(f, g),
                t = s.x,
                s = s.y;
            e = this.createDiv(e, f, g, m);
            f = this.createElement("div");
            k && 0 < c ? (n || (e.style.width = Math.round(c) + "px"), e.style.whiteSpace = "normal") : e.style.whiteSpace = "nowrap";
            p = q.rotation + (p || 0);
            this.rotateHtml && 0 != p ? (f.style.display = "inline", f.style.zoom = "1", f.appendChild(e), 8 == document.documentMode && "DIV" != this.root.nodeName ? (r.appendChild(f), l.appendChild(r)) : l.appendChild(f)) :
                8 == document.documentMode ? (r.appendChild(e), l.appendChild(r)) : (e.style.display = "inline", l.appendChild(e));
            "DIV" != this.root.nodeName ? (g = this.createVmlElement("rect"), g.stroked = "false", g.filled = "false", g.appendChild(l), this.root.appendChild(g)) : this.root.appendChild(l);
            n ? (e.style.overflow = "hidden", e.style.width = Math.round(c) + "px", mxClient.IS_QUIRKS || (e.style.maxHeight = Math.round(d) + "px")) : "fill" == m ? (e.style.width = c + "px", e.style.height = d + "px") : "width" == m && (e.style.width = c + "px", 0 < d && (e.style.maxHeight =
                Math.round(d) + "px"));
            if (this.rotateHtml && 0 != p) {
                var u = p * (Math.PI / 180);
                p = parseFloat(parseFloat(Math.cos(u)).toFixed(8));
                g = parseFloat(parseFloat(Math.sin(-u)).toFixed(8));
                u %= 2 * Math.PI;
                0 > u && (u += 2 * Math.PI);
                u %= Math.PI;
                u > Math.PI / 2 && (u = Math.PI - u);
                var x = Math.cos(u),
                    u = Math.sin(u);
                8 == document.documentMode && (e.style.display = "inline-block", f.style.display = "inline-block", r.style.display = "inline-block");
                e.style.visibility = "hidden";
                e.style.position = "absolute";
                document.body.appendChild(e);
                var y = e;
                null != y.firstChild &&
                    "DIV" == y.firstChild.nodeName && (y = y.firstChild);
                r = y.offsetWidth + 3;
                y = y.offsetHeight;
                n ? (c = Math.min(c, r), y = Math.min(y, d)) : c = r;
                k && (e.style.width = c + "px");
                if (mxClient.IS_QUIRKS && (n || "width" == m) && y > d) y = d, e.style.height = y + "px";
                d = y;
                n = (d - d * x + c * -u) / 2 - g * c * (t + 0.5) + p * d * (s + 0.5);
                k = (c - c * x + d * -u) / 2 + p * c * (t + 0.5) + g * d * (s + 0.5);
                "group" == l.nodeName && "DIV" == this.root.nodeName ? (m = this.createElement("div"), m.style.display = "inline-block", m.style.position = "absolute", m.style.left = this.format(a + (k - c / 2) * q.scale) + "px", m.style.top = this.format(b +
                    (n - d / 2) * q.scale) + "px", l.parentNode.appendChild(m), m.appendChild(l)) : (q = 8 == document.documentMode ? 1 : q.scale, l.style.left = this.format(a + (k - c / 2) * q) + "px", l.style.top = this.format(b + (n - d / 2) * q) + "px");
                f.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + p + ", M12=" + g + ", M21=" + -g + ", M22=" + p + ", sizingMethod='auto expand')";
                f.style.backgroundColor = this.rotatedHtmlBackground;
                1 > this.state.alpha && (f.style.filter += "alpha(opacity=" + 100 * this.state.alpha + ")");
                f.appendChild(e);
                e.style.position = "";
                e.style.visibility =
                    ""
            } else 8 != document.documentMode ? (e.style.verticalAlign = "top", 1 > this.state.alpha && (l.style.filter = "alpha(opacity=" + 100 * this.state.alpha + ")"), q = e.parentNode, e.style.visibility = "hidden", document.body.appendChild(e), c = e.offsetWidth, y = e.offsetHeight, mxClient.IS_QUIRKS && (n && y > d) && (y = d, e.style.height = y + "px"), d = y, e.style.visibility = "", q.appendChild(e), l.style.left = this.format(a + c * t * this.state.scale) + "px", l.style.top = this.format(b + d * s * this.state.scale) + "px") : (1 > this.state.alpha && (e.style.filter = "alpha(opacity=" +
                100 * this.state.alpha + ")"), r.style.left = 100 * t + "%", r.style.top = 100 * s + "%")
        } else this.plainText(a, b, c, d, mxUtils.htmlEntities(e, !1), f, g, k, l, m, n, p)
    }
};
mxVmlCanvas2D.prototype.plainText = function(a, b, c, d, e, f, g, k, l, m, n, p) {
    k = this.state;
    a = (a + k.dx) * k.scale;
    b = (b + k.dy) * k.scale;
    c = this.createVmlElement("shape");
    c.style.width = "1px";
    c.style.height = "1px";
    c.stroked = "false";
    d = this.createVmlElement("fill");
    d.color = k.fontColor;
    d.opacity = 100 * k.alpha + "%";
    c.appendChild(d);
    d = this.createVmlElement("path");
    d.textpathok = "true";
    d.v = "m " + this.format(0) + " " + this.format(0) + " l " + this.format(1) + " " + this.format(0);
    c.appendChild(d);
    d = this.createVmlElement("textpath");
    d.style.cssText =
        "v-text-align:" + f;
    d.style.align = f;
    d.style.fontFamily = k.fontFamily;
    d.string = e;
    d.on = "true";
    f = Math.round(k.fontSize * k.scale / this.vmlScale);
    d.style.fontSize = f + "px";
    (k.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD && (d.style.fontWeight = "bold");
    (k.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC && (d.style.fontStyle = "italic");
    (k.fontStyle & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE && (d.style.textDecoration = "underline");
    e = e.split("\n");
    k = f + (e.length - 1) * f * mxConstants.LINE_HEIGHT;
    f = e = 0;
    g == mxConstants.ALIGN_BOTTOM ? f = -k / 2 : g != mxConstants.ALIGN_MIDDLE && (f = k / 2);
    null != p && (c.style.rotation = p, g = p * (Math.PI / 180), e = Math.sin(g) * f, f *= Math.cos(g));
    c.appendChild(d);
    c.style.left = this.format(a - e) + "px";
    c.style.top = this.format(b + f) + "px";
    this.root.appendChild(c)
};
mxVmlCanvas2D.prototype.stroke = function() {
    this.addNode(!1, !0)
};
mxVmlCanvas2D.prototype.fill = function() {
    this.addNode(!0, !1)
};
mxVmlCanvas2D.prototype.fillAndStroke = function() {
    this.addNode(!0, !0)
};

function mxGuide(a, b) {
    this.graph = a;
    this.setStates(b)
}
mxGuide.prototype.graph = null;
mxGuide.prototype.states = null;
mxGuide.prototype.horizontal = !0;
mxGuide.prototype.vertical = !0;
mxGuide.prototype.guideX = null;
mxGuide.prototype.guideY = null;
mxGuide.prototype.setStates = function(a) {
    this.states = a
};
mxGuide.prototype.isEnabledForEvent = function(a) {
    return !0
};
mxGuide.prototype.getGuideTolerance = function() {
    return this.graph.gridSize * this.graph.view.scale / 2
};
mxGuide.prototype.createGuideShape = function(a) {
    a = new mxPolyline([], mxConstants.GUIDE_COLOR, mxConstants.GUIDE_STROKEWIDTH);
    a.isDashed = !0;
    return a
};
mxGuide.prototype.move = function(a, b, c) {
    if (null != this.states && (this.horizontal || this.vertical) && null != a && null != b) {
        var d = this.graph.getView().translate,
            e = this.graph.getView().scale,
            f = b.x,
            g = b.y,
            k = !1,
            l = !1,
            m = this.getGuideTolerance(),
            n = m,
            p = m,
            m = a.clone();
        m.x += b.x;
        m.y += b.y;
        var q = m.x,
            r = m.x + m.width,
            s = m.getCenterX(),
            t = m.y,
            u = m.y + m.height,
            x = m.getCenterY();
        b = function(b) {
            b += this.graph.panDx;
            var c = !1;
            Math.abs(b - s) < n ? (f = b - a.getCenterX(), n = Math.abs(b - s), c = !0) : Math.abs(b - q) < n ? (f = b - a.x, n = Math.abs(b - q), c = !0) : Math.abs(b -
                r) < n && (f = b - a.x - a.width, n = Math.abs(b - r), c = !0);
            if (c) {
                null == this.guideX && (this.guideX = this.createGuideShape(!0), this.guideX.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG, this.guideX.pointerEvents = !1, this.guideX.init(this.graph.getView().getOverlayPane()));
                var d = this.graph.container;
                b -= this.graph.panDx;
                this.guideX.points = [new mxPoint(b, -this.graph.panDy), new mxPoint(b, d.scrollHeight - 3 - this.graph.panDy)]
            }
            k = k || c
        };
        for (var m = function(b) {
            b += this.graph.panDy;
            var c = !1;
            Math.abs(b - x) < p ? (g = b - a.getCenterY(), p = Math.abs(b - x), c = !0) : Math.abs(b - t) < p ? (g = b - a.y, p = Math.abs(b - t), c = !0) : Math.abs(b - u) < p && (g = b - a.y - a.height, p = Math.abs(b - u), c = !0);
            if (c) {
                null == this.guideY && (this.guideY = this.createGuideShape(!1), this.guideY.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG, this.guideY.pointerEvents = !1, this.guideY.init(this.graph.getView().getOverlayPane()));
                var d = this.graph.container;
                b -= this.graph.panDy;
                this.guideY.points = [new mxPoint(-this.graph.panDx,
                    b), new mxPoint(d.scrollWidth - 3 - this.graph.panDx, b)]
            }
            l = l || c
        }, y = 0; y < this.states.length; y++) {
            var v = this.states[y];
            null != v && (this.horizontal && (b.call(this, v.getCenterX()), b.call(this, v.x), b.call(this, v.x + v.width)), this.vertical && (m.call(this, v.getCenterY()), m.call(this, v.y), m.call(this, v.y + v.height)))
        }!k && null != this.guideX ? this.guideX.node.style.visibility = "hidden" : null != this.guideX && (this.guideX.node.style.visibility = "visible", this.guideX.redraw());
        !l && null != this.guideY ? this.guideY.node.style.visibility =
            "hidden" : null != this.guideY && (this.guideY.node.style.visibility = "visible", this.guideY.redraw());
        c && (k || (c = a.x - (this.graph.snap(a.x / e - d.x) + d.x) * e, f = this.graph.snap(f / e) * e - c), l || (d = a.y - (this.graph.snap(a.y / e - d.y) + d.y) * e, g = this.graph.snap(g / e) * e - d));
        b = new mxPoint(f, g)
    }
    return b
};
mxGuide.prototype.hide = function() {
    null != this.guideX && (this.guideX.node.style.visibility = "hidden");
    null != this.guideY && (this.guideY.node.style.visibility = "hidden")
};
mxGuide.prototype.destroy = function() {
    null != this.guideX && (this.guideX.destroy(), this.guideX = null);
    null != this.guideY && (this.guideY.destroy(), this.guideY = null)
};

function mxStencil(a) {
    this.desc = a;
    this.parseDescription();
    this.parseConstraints()
}
mxStencil.defaultLocalized = !1;
mxStencil.prototype.desc = null;
mxStencil.prototype.constraints = null;
mxStencil.prototype.aspect = null;
mxStencil.prototype.w0 = null;
mxStencil.prototype.h0 = null;
mxStencil.prototype.bgNode = null;
mxStencil.prototype.fgNode = null;
mxStencil.prototype.strokewidth = null;
mxStencil.prototype.parseDescription = function() {
    this.fgNode = this.desc.getElementsByTagName("foreground")[0];
    this.bgNode = this.desc.getElementsByTagName("background")[0];
    this.w0 = Number(this.desc.getAttribute("w") || 100);
    this.h0 = Number(this.desc.getAttribute("h") || 100);
    var a = this.desc.getAttribute("aspect");
    this.aspect = null != a ? a : "variable";
    a = this.desc.getAttribute("strokewidth");
    this.strokewidth = null != a ? a : "1"
};
mxStencil.prototype.parseConstraints = function() {
    var a = this.desc.getElementsByTagName("connections")[0];
    if (null != a && (a = mxUtils.getChildNodes(a), null != a && 0 < a.length)) {
        this.constraints = [];
        for (var b = 0; b < a.length; b++) this.constraints.push(this.parseConstraint(a[b]))
    }
};
mxStencil.prototype.parseConstraint = function(a) {
    var b = Number(a.getAttribute("x")),
        c = Number(a.getAttribute("y"));
    a = "1" == a.getAttribute("perimeter");
    return new mxConnectionConstraint(new mxPoint(b, c), a)
};
mxStencil.prototype.evaluateTextAttribute = function(a, b, c) {
    b = this.evaluateAttribute(a, b, c);
    a = a.getAttribute("localized");
    if (mxStencil.defaultLocalized && null == a || "1" == a) b = mxResources.get(b);
    return b
};
mxStencil.prototype.evaluateAttribute = function(a, b, c) {
    b = a.getAttribute(b);
    null == b && (a = mxUtils.getTextContent(a), null != a && (a = mxUtils.eval(a), "function" == typeof a && (b = a(c))));
    return b
};
mxStencil.prototype.drawShape = function(a, b, c, d, e, f) {
    this.drawChildren(a, b, c, d, e, f, this.bgNode, !1);
    this.drawChildren(a, b, c, d, e, f, this.fgNode, !0)
};
mxStencil.prototype.drawChildren = function(a, b, c, d, e, f, g, k) {
    if (null != g && 0 < e && 0 < f) {
        var l = mxUtils.getValue(b.style, mxConstants.STYLE_DIRECTION, null);
        c = this.computeAspect(b.style, c, d, e, f, l);
        d = Math.min(c.width, c.height);
        d = "inherit" == this.strokewidth ? Number(mxUtils.getNumber(b.style, mxConstants.STYLE_STROKEWIDTH, 1)) : Number(this.strokewidth) * d;
        a.setStrokeWidth(d);
        for (g = g.firstChild; null != g;) g.nodeType == mxConstants.NODETYPE_ELEMENT && this.drawNode(a, b, g, c, k), g = g.nextSibling
    }
};
mxStencil.prototype.computeAspect = function(a, b, c, d, e, f) {
    a = b;
    b = d / this.w0;
    var g = e / this.h0;
    if (f = f == mxConstants.DIRECTION_NORTH || f == mxConstants.DIRECTION_SOUTH) {
        g = d / this.h0;
        b = e / this.w0;
        var k = (d - e) / 2;
        a += k;
        c -= k
    }
    "fixed" == this.aspect && (b = g = Math.min(b, g), f ? (a += (e - this.w0 * b) / 2, c += (d - this.h0 * g) / 2) : (a += (d - this.w0 * b) / 2, c += (e - this.h0 * g) / 2));
    return new mxRectangle(a, c, b, g)
};
mxStencil.prototype.drawNode = function(a, b, c, d, e) {
    var f = c.nodeName,
        g = d.x,
        k = d.y,
        l = d.width,
        m = d.height,
        n = Math.min(l, m);
    if ("save" == f) a.save();
    else if ("restore" == f) a.restore();
    else if ("path" == f) {
        a.begin();
        for (c = c.firstChild; null != c;) c.nodeType == mxConstants.NODETYPE_ELEMENT && this.drawNode(a, b, c, d, e), c = c.nextSibling
    } else if ("close" == f) a.close();
    else if ("move" == f) a.moveTo(g + Number(c.getAttribute("x")) * l, k + Number(c.getAttribute("y")) * m);
    else if ("line" == f) a.lineTo(g + Number(c.getAttribute("x")) * l, k + Number(c.getAttribute("y")) *
        m);
    else if ("quad" == f) a.quadTo(g + Number(c.getAttribute("x1")) * l, k + Number(c.getAttribute("y1")) * m, g + Number(c.getAttribute("x2")) * l, k + Number(c.getAttribute("y2")) * m);
    else if ("curve" == f) a.curveTo(g + Number(c.getAttribute("x1")) * l, k + Number(c.getAttribute("y1")) * m, g + Number(c.getAttribute("x2")) * l, k + Number(c.getAttribute("y2")) * m, g + Number(c.getAttribute("x3")) * l, k + Number(c.getAttribute("y3")) * m);
    else if ("arc" == f) a.arcTo(Number(c.getAttribute("rx")) * l, Number(c.getAttribute("ry")) * m, Number(c.getAttribute("x-axis-rotation")),
        Number(c.getAttribute("large-arc-flag")), Number(c.getAttribute("sweep-flag")), g + Number(c.getAttribute("x")) * l, k + Number(c.getAttribute("y")) * m);
    else if ("rect" == f) a.rect(g + Number(c.getAttribute("x")) * l, k + Number(c.getAttribute("y")) * m, Number(c.getAttribute("w")) * l, Number(c.getAttribute("h")) * m);
    else if ("roundrect" == f) b = Number(c.getAttribute("arcsize")), 0 == b && (b = 100 * mxConstants.RECTANGLE_ROUNDING_FACTOR), n = Number(c.getAttribute("w")) * l, d = Number(c.getAttribute("h")) * m, b = Number(b) / 100, b = Math.min(n * b, d *
        b), a.roundrect(g + Number(c.getAttribute("x")) * l, k + Number(c.getAttribute("y")) * m, n, d, b, b);
    else if ("ellipse" == f) a.ellipse(g + Number(c.getAttribute("x")) * l, k + Number(c.getAttribute("y")) * m, Number(c.getAttribute("w")) * l, Number(c.getAttribute("h")) * m);
    else if ("image" == f) b = this.evaluateAttribute(c, "src", b), a.image(g + Number(c.getAttribute("x")) * l, k + Number(c.getAttribute("y")) * m, Number(c.getAttribute("w")) * l, Number(c.getAttribute("h")) * m, b, !1, "1" == c.getAttribute("flipH"), "1" == c.getAttribute("flipV"));
    else if ("text" ==
        f) {
        n = this.evaluateTextAttribute(c, "str", b);
        d = "1" == c.getAttribute("vertical") ? -90 : 0;
        if ("0" == c.getAttribute("align-shape")) {
            var p = b.rotation,
                q = 1 == mxUtils.getValue(b.style, mxConstants.STYLE_FLIPH, 0);
            b = 1 == mxUtils.getValue(b.style, mxConstants.STYLE_FLIPV, 0);
            d = q && b ? d - p : q || b ? d + p : d - p
        }
        d -= c.getAttribute("rotation");
        a.text(g + Number(c.getAttribute("x")) * l, k + Number(c.getAttribute("y")) * m, 0, 0, n, c.getAttribute("align") || "left", c.getAttribute("valign") || "top", !1, "", null, !1, d)
    } else if ("include-shape" == f) p = mxStencilRegistry.getStencil(c.getAttribute("name")),
        null != p && (g += Number(c.getAttribute("x")) * l, k += Number(c.getAttribute("y")) * m, n = Number(c.getAttribute("w")) * l, d = Number(c.getAttribute("h")) * m, p.drawShape(a, b, g, k, n, d));
    else if ("fillstroke" == f) a.fillAndStroke();
    else if ("fill" == f) a.fill();
    else if ("stroke" == f) a.stroke();
    else if ("strokewidth" == f) l = "1" == c.getAttribute("fixed") ? 1 : n, a.setStrokeWidth(Number(c.getAttribute("width")) * l);
    else if ("dashed" == f) a.setDashed("1" == c.getAttribute("dashed"));
    else if ("dashpattern" == f) {
        if (c = c.getAttribute("pattern"), null !=
            c) {
            c = c.split(" ");
            l = [];
            for (m = 0; m < c.length; m++) 0 < c[m].length && l.push(Number(c[m]) * n);
            c = l.join(" ");
            a.setDashPattern(c)
        }
    } else "strokecolor" == f ? a.setStrokeColor(c.getAttribute("color")) : "linecap" == f ? a.setLineCap(c.getAttribute("cap")) : "linejoin" == f ? a.setLineJoin(c.getAttribute("join")) : "miterlimit" == f ? a.setMiterLimit(Number(c.getAttribute("limit"))) : "fillcolor" == f ? a.setFillColor(c.getAttribute("color")) : "alpha" == f ? a.setAlpha(c.getAttribute("alpha")) : "fontcolor" == f ? a.setFontColor(c.getAttribute("color")) :
        "fontstyle" == f ? a.setFontStyle(c.getAttribute("style")) : "fontfamily" == f ? a.setFontFamily(c.getAttribute("family")) : "fontsize" == f && a.setFontSize(Number(c.getAttribute("size")) * n);
    e && ("fillstroke" == f || "fill" == f || "stroke" == f) && a.setShadow(!1)
};

function mxShape(a) {
    this.stencil = a;
    this.strokewidth = 1;
    this.rotation = 0;
    this.opacity = 100;
    this.flipV = this.flipH = !1
}
mxShape.prototype.dialect = null;
mxShape.prototype.scale = 1;
mxShape.prototype.bounds = null;
mxShape.prototype.points = null;
mxShape.prototype.node = null;
mxShape.prototype.state = null;
mxShape.prototype.style = null;
mxShape.prototype.boundingBox = null;
mxShape.prototype.stencil = null;
mxShape.prototype.svgStrokeTolerance = 8;
mxShape.prototype.pointerEvents = !0;
mxShape.prototype.svgPointerEvents = "all";
mxShape.prototype.shapePointerEvents = !1;
mxShape.prototype.stencilPointerEvents = !1;
mxShape.prototype.vmlScale = 1;
mxShape.prototype.outline = !1;
mxShape.prototype.visible = !0;
mxShape.prototype.init = function(a) {
    null == this.node && (this.node = this.create(a), null != a && a.appendChild(this.node))
};
mxShape.prototype.isParseVml = function() {
    return !0
};
mxShape.prototype.isHtmlAllowed = function() {
    return !1
};
mxShape.prototype.getSvgScreenOffset = function() {
    return 1 == mxUtils.mod(Math.max(1, Math.round((this.stencil && "inherit" != this.stencil.strokewidth ? Number(this.stencil.strokewidth) : this.strokewidth) * this.scale)), 2) ? 0.5 : 0
};
mxShape.prototype.create = function(a) {
    var b = null;
    return b = null != a && null != a.ownerSVGElement ? this.createSvg(a) : 8 == document.documentMode || !mxClient.IS_VML || this.dialect != mxConstants.DIALECT_VML && this.isHtmlAllowed() ? this.createHtml(a) : this.createVml(a)
};
mxShape.prototype.createSvg = function() {
    return document.createElementNS(mxConstants.NS_SVG, "g")
};
mxShape.prototype.createVml = function() {
    var a = document.createElement(mxClient.VML_PREFIX + ":group");
    a.style.position = "absolute";
    return a
};
mxShape.prototype.createHtml = function() {
    var a = document.createElement("div");
    a.style.position = "absolute";
    return a
};
mxShape.prototype.reconfigure = function() {
    this.redraw()
};
mxShape.prototype.redraw = function() {
    this.updateBoundsFromPoints();
    this.visible && this.checkBounds() ? (this.node.style.visibility = "visible", this.clear(), "DIV" == this.node.nodeName && (this.isHtmlAllowed() || !mxClient.IS_VML) ? this.redrawHtmlShape() : this.redrawShape(), this.updateBoundingBox()) : (this.node.style.visibility = "hidden", this.boundingBox = null)
};
mxShape.prototype.clear = function() {
    if (null != this.node.ownerSVGElement)
        for (; null != this.node.lastChild;) this.node.removeChild(this.node.lastChild);
    else this.node.style.cssText = "position:absolute;", this.node.innerHTML = ""
};
mxShape.prototype.updateBoundsFromPoints = function() {
    var a = this.points;
    if (null != a && 0 < a.length && null != a[0]) {
        this.bounds = new mxRectangle(Number(a[0].x), Number(a[0].y), 1, 1);
        for (var b = 1; b < this.points.length; b++) null != a[b] && this.bounds.add(new mxRectangle(Number(a[b].x), Number(a[b].y), 1, 1))
    }
};
mxShape.prototype.getLabelBounds = function(a) {
    return a
};
mxShape.prototype.checkBounds = function() {
    return null != this.bounds && !isNaN(this.bounds.x) && !isNaN(this.bounds.y) && !isNaN(this.bounds.width) && !isNaN(this.bounds.height) && 0 < this.bounds.width && 0 < this.bounds.height
};
mxShape.prototype.createVmlGroup = function() {
    var a = document.createElement(mxClient.VML_PREFIX + ":group");
    a.style.position = "absolute";
    a.style.width = this.node.style.width;
    a.style.height = this.node.style.height;
    return a
};
mxShape.prototype.redrawShape = function() {
    var a = this.createCanvas();
    null != a && (a.pointerEvents = this.pointerEvents, this.paint(a), this.node != a.root && this.node.insertAdjacentHTML("beforeend", a.root.outerHTML), "DIV" == this.node.nodeName && 8 == document.documentMode && (this.node.style.filter = "", mxUtils.addTransparentBackgroundFilter(this.node)), this.destroyCanvas(a))
};
mxShape.prototype.createCanvas = function() {
    var a = null;
    null != this.node.ownerSVGElement ? a = this.createSvgCanvas() : mxClient.IS_VML && (this.updateVmlContainer(), a = this.createVmlCanvas());
    this.outline && (a.setStrokeWidth(this.strokewidth), a.setStrokeColor(this.stroke), null != this.isDashed && a.setDashed(this.isDashed), a.setStrokeWidth = function() {}, a.setStrokeColor = function() {}, a.setFillColor = function() {}, a.setGradient = function() {}, a.setDashed = function() {});
    return a
};
mxShape.prototype.createSvgCanvas = function() {
    var a = new mxSvgCanvas2D(this.node, !1);
    a.strokeTolerance = this.pointerEvents ? this.svgStrokeTolerance : 0;
    a.pointerEventsValue = this.svgPointerEvents;
    a.blockImagePointerEvents = mxClient.IS_FF;
    var b = this.getSvgScreenOffset();
    0 != b ? this.node.setAttribute("transform", "translate(" + b + "," + b + ")") : this.node.removeAttribute("transform");
    return a
};
mxShape.prototype.createVmlCanvas = function() {
    var a = 8 == document.documentMode && this.isParseVml() ? this.createVmlGroup() : this.node,
        b = new mxVmlCanvas2D(a, !1);
    if ("" != a.tagUrn) {
        var c = Math.max(1, Math.round(this.bounds.width)),
            d = Math.max(1, Math.round(this.bounds.height));
        a.coordsize = c * this.vmlScale + "," + d * this.vmlScale;
        b.scale(this.vmlScale);
        b.vmlScale = this.vmlScale
    }
    a = this.scale;
    b.translate(-Math.round(this.bounds.x / a), -Math.round(this.bounds.y / a));
    return b
};
mxShape.prototype.updateVmlContainer = function() {
    this.node.style.left = Math.round(this.bounds.x) + "px";
    this.node.style.top = Math.round(this.bounds.y) + "px";
    var a = Math.max(1, Math.round(this.bounds.width)),
        b = Math.max(1, Math.round(this.bounds.height));
    this.node.style.width = a + "px";
    this.node.style.height = b + "px";
    this.node.style.overflow = "visible"
};
mxShape.prototype.redrawHtmlShape = function() {
    this.updateHtmlBounds(this.node);
    this.updateHtmlFilters(this.node);
    this.updateHtmlColors(this.node)
};
mxShape.prototype.updateHtmlFilters = function(a) {
    var b = "";
    100 > this.opacity && (b += "alpha(opacity=" + this.opacity + ")");
    this.isShadow && (b += "progid:DXImageTransform.Microsoft.dropShadow (OffX='" + Math.round(mxConstants.SHADOW_OFFSET_X * this.scale) + "', OffY='" + Math.round(mxConstants.SHADOW_OFFSET_Y * this.scale) + "', Color='" + mxConstants.SHADOWCOLOR + "')");
    if (this.gradient) {
        var c = this.fill,
            d = this.gradient,
            e = "0",
            f = {
                east: 0,
                south: 1,
                west: 2,
                north: 3
            },
            g = null != this.direction ? f[this.direction] : 0;
        null != this.gradientDirection &&
            (g = mxUtils.mod(g + f[this.gradientDirection] - 1, 4));
        1 == g ? (e = "1", f = c, c = d, d = f) : 2 == g ? (f = c, c = d, d = f) : 3 == g && (e = "1");
        b += "progid:DXImageTransform.Microsoft.gradient(startColorStr='" + c + "', endColorStr='" + d + "', gradientType='" + e + "')"
    }
    a.style.filter = b
};
mxShape.prototype.updateHtmlColors = function(a) {
    var b = this.stroke;
    null != b && b != mxConstants.NONE ? (a.style.borderColor = b, this.isDashed ? a.style.borderStyle = "dashed" : 0 < this.strokewidth && (a.style.borderStyle = "solid"), a.style.borderWidth = Math.max(1, Math.ceil(this.strokewidth * this.scale)) + "px") : a.style.borderWidth = "0px";
    b = this.fill;
    null != b && b != mxConstants.NONE ? (a.style.backgroundColor = b, a.style.backgroundImage = "none") : this.pointerEvents ? a.style.backgroundColor = "transparent" : 8 == document.documentMode ? mxUtils.addTransparentBackgroundFilter(a) :
        this.setTransparentBackgroundImage(a)
};
mxShape.prototype.updateHtmlBounds = function(a) {
    var b = 9 <= document.documentMode ? 0 : Math.ceil(this.strokewidth * this.scale);
    a.style.borderWidth = Math.max(1, b) + "px";
    a.style.overflow = "hidden";
    a.style.left = Math.round(this.bounds.x - b / 2) + "px";
    a.style.top = Math.round(this.bounds.y - b / 2) + "px";
    "CSS1Compat" == document.compatMode && (b = -b);
    a.style.width = Math.round(Math.max(0, this.bounds.width + b)) + "px";
    a.style.height = Math.round(Math.max(0, this.bounds.height + b)) + "px"
};
mxShape.prototype.destroyCanvas = function(a) {
    if (a instanceof mxSvgCanvas2D) {
        for (var b in a.gradients) {
            var c = a.gradients[b];
            c.mxRefCount = (c.mxRefCount || 0) + 1
        }
        this.releaseSvgGradients(this.oldGradients);
        this.oldGradients = a.gradients
    }
};
mxShape.prototype.paint = function(a) {
    var b = this.scale,
        c = this.bounds.x / b,
        d = this.bounds.y / b,
        e = this.bounds.width / b,
        f = this.bounds.height / b;
    if (this.isPaintBoundsInverted()) var g = (e - f) / 2,
        c = c + g,
        d = d - g,
        g = e,
        e = f,
        f = g;
    this.updateTransform(a, c, d, e, f);
    this.configureCanvas(a, c, d, e, f);
    g = null;
    if (null == this.stencil && null == this.points && this.shapePointerEvents || null != this.stencil && this.stencilPointerEvents) {
        var k = this.createBoundingBox();
        this.dialect == mxConstants.DIALECT_SVG ? (g = this.createTransparentSvgRectangle(k.x, k.y,
            k.width, k.height), this.node.appendChild(g)) : (k = a.createRect("rect", k.x / b, k.y / b, k.width / b, k.height / b), k.appendChild(a.createTransparentFill()), k.stroked = "false", a.root.appendChild(k))
    }
    if (null != this.stencil) this.stencil.drawShape(a, this, c, d, e, f);
    else if (a.setStrokeWidth(this.strokewidth), null != this.points) {
        c = [];
        for (d = 0; d < this.points.length; d++) null != this.points[d] && c.push(new mxPoint(this.points[d].x / b, this.points[d].y / b));
        this.paintEdgeShape(a, c)
    } else this.paintVertexShape(a, c, d, e, f);
    null != g && (null !=
        a.state && null != a.state.transform) && g.setAttribute("transform", a.state.transform)
};
mxShape.prototype.configureCanvas = function(a, b, c, d, e) {
    var f = null;
    null != this.style && (f = this.style.dashPattern);
    a.setAlpha(this.opacity / 100);
    null != this.isShadow && a.setShadow(this.isShadow);
    null != this.isDashed && a.setDashed(this.isDashed);
    null != f && a.setDashPattern(f);
    null != this.gradient ? (b = this.getGradientBounds(a, b, c, d, e), a.setGradient(this.fill, this.gradient, b.x, b.y, b.width, b.height, this.gradientDirection)) : a.setFillColor(this.fill);
    a.setStrokeColor(this.stroke)
};
mxShape.prototype.getGradientBounds = function(a, b, c, d, e) {
    return new mxRectangle(b, c, d, e)
};
mxShape.prototype.updateTransform = function(a, b, c, d, e) {
    a.scale(this.scale);
    a.rotate(this.getShapeRotation(), this.flipH, this.flipV, b + d / 2, c + e / 2)
};
mxShape.prototype.paintVertexShape = function(a, b, c, d, e) {
    this.paintBackground(a, b, c, d, e);
    a.setShadow(!1);
    this.paintForeground(a, b, c, d, e)
};
mxShape.prototype.paintBackground = function(a, b, c, d, e) {};
mxShape.prototype.paintForeground = function(a, b, c, d, e) {};
mxShape.prototype.paintEdgeShape = function(a, b) {};
mxShape.prototype.getArcSize = function(a, b) {
    var c = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, 100 * mxConstants.RECTANGLE_ROUNDING_FACTOR) / 100;
    return Math.min(a * c, b * c)
};
mxShape.prototype.paintGlassEffect = function(a, b, c, d, e, f) {
    var g = Math.ceil(this.strokewidth / 2);
    a.setGradient("#ffffff", "#ffffff", b, c, d, 0.6 * e, "south", 0.9, 0.1);
    a.begin();
    f += 2 * g;
    this.isRounded ? (a.moveTo(b - g + f, c - g), a.quadTo(b - g, c - g, b - g, c - g + f), a.lineTo(b - g, c + 0.4 * e), a.quadTo(b + 0.5 * d, c + 0.7 * e, b + d + g, c + 0.4 * e), a.lineTo(b + d + g, c - g + f), a.quadTo(b + d + g, c - g, b + d + g - f, c - g)) : (a.moveTo(b - g, c - g), a.lineTo(b - g, c + 0.4 * e), a.quadTo(b + 0.5 * d, c + 0.7 * e, b + d + g, c + 0.4 * e), a.lineTo(b + d + g, c - g));
    a.close();
    a.fill()
};
mxShape.prototype.apply = function(a) {
    this.state = a;
    this.style = a.style;
    if (null != this.style) {
        this.fill = mxUtils.getValue(this.style, mxConstants.STYLE_FILLCOLOR, this.fill);
        this.gradient = mxUtils.getValue(this.style, mxConstants.STYLE_GRADIENTCOLOR, this.gradient);
        this.gradientDirection = mxUtils.getValue(this.style, mxConstants.STYLE_GRADIENT_DIRECTION, this.gradientDirection);
        this.opacity = mxUtils.getValue(this.style, mxConstants.STYLE_OPACITY, this.opacity);
        this.stroke = mxUtils.getValue(this.style, mxConstants.STYLE_STROKECOLOR,
            this.stroke);
        this.strokewidth = mxUtils.getNumber(this.style, mxConstants.STYLE_STROKEWIDTH, this.strokewidth);
        this.arrowStrokewidth = mxUtils.getNumber(this.style, mxConstants.STYLE_STROKEWIDTH, this.strokewidth);
        this.spacing = mxUtils.getValue(this.style, mxConstants.STYLE_SPACING, this.spacing);
        this.startSize = mxUtils.getNumber(this.style, mxConstants.STYLE_STARTSIZE, this.startSize);
        this.endSize = mxUtils.getNumber(this.style, mxConstants.STYLE_ENDSIZE, this.endSize);
        this.startArrow = mxUtils.getValue(this.style,
            mxConstants.STYLE_STARTARROW, this.startArrow);
        this.endArrow = mxUtils.getValue(this.style, mxConstants.STYLE_ENDARROW, this.endArrow);
        this.rotation = mxUtils.getValue(this.style, mxConstants.STYLE_ROTATION, this.rotation);
        this.direction = mxUtils.getValue(this.style, mxConstants.STYLE_DIRECTION, this.direction);
        this.flipH = 1 == mxUtils.getValue(this.style, mxConstants.STYLE_FLIPH, 0);
        this.flipV = 1 == mxUtils.getValue(this.style, mxConstants.STYLE_FLIPV, 0);
        null != this.stencil && (this.flipH = 1 == mxUtils.getValue(this.style,
            "stencilFlipH", 0) || this.flipH, this.flipV = 1 == mxUtils.getValue(this.style, "stencilFlipV", 0) || this.flipV);
        if (this.direction == mxConstants.DIRECTION_NORTH || this.direction == mxConstants.DIRECTION_SOUTH) a = this.flipH, this.flipH = this.flipV, this.flipV = a;
        this.isShadow = 1 == mxUtils.getValue(this.style, mxConstants.STYLE_SHADOW, this.isShadow);
        this.isDashed = 1 == mxUtils.getValue(this.style, mxConstants.STYLE_DASHED, this.isDashed);
        this.isRounded = 1 == mxUtils.getValue(this.style, mxConstants.STYLE_ROUNDED, this.isRounded);
        this.glass = 1 == mxUtils.getValue(this.style, mxConstants.STYLE_GLASS, this.glass);
        "none" == this.fill && (this.fill = null);
        "none" == this.gradient && (this.gradient = null);
        "none" == this.stroke && (this.stroke = null)
    }
};
mxShape.prototype.setCursor = function(a) {
    null == a && (a = "");
    this.cursor = a;
    null != this.node && (this.node.style.cursor = a)
};
mxShape.prototype.getCursor = function() {
    return this.cursor
};
mxShape.prototype.updateBoundingBox = function() {
    if (null != this.bounds) {
        var a = this.createBoundingBox();
        if (null != a) {
            this.augmentBoundingBox(a);
            var b = this.getShapeRotation();
            0 != b && (a = mxUtils.getBoundingBox(a, b))
        }
        this.boundingBox = a
    }
};
mxShape.prototype.createBoundingBox = function() {
    var a = this.bounds.clone();
    if (null != this.stencil && (this.direction == mxConstants.DIRECTION_NORTH || this.direction == mxConstants.DIRECTION_SOUTH) || this.isPaintBoundsInverted()) {
        var b = (a.width - a.height) / 2;
        a.x += b;
        a.y -= b;
        b = a.width;
        a.width = a.height;
        a.height = b
    }
    return a
};
mxShape.prototype.augmentBoundingBox = function(a) {
    this.isShadow && (a.width += Math.ceil(mxConstants.SHADOW_OFFSET_X * this.scale), a.height += Math.ceil(mxConstants.SHADOW_OFFSET_Y * this.scale));
    a.grow(this.strokewidth * this.scale / 2)
};
mxShape.prototype.isPaintBoundsInverted = function() {
    return null == this.stencil && (this.direction == mxConstants.DIRECTION_NORTH || this.direction == mxConstants.DIRECTION_SOUTH)
};
mxShape.prototype.getRotation = function() {
    return null != this.rotation ? this.rotation : 0
};
mxShape.prototype.getTextRotation = function() {
    var a = this.getRotation();
    1 != mxUtils.getValue(this.style, mxConstants.STYLE_HORIZONTAL, 1) && (a += mxText.prototype.verticalTextRotation);
    return a
};
mxShape.prototype.getShapeRotation = function() {
    var a = this.getRotation();
    null != this.direction && (this.direction == mxConstants.DIRECTION_NORTH ? a += 270 : this.direction == mxConstants.DIRECTION_WEST ? a += 180 : this.direction == mxConstants.DIRECTION_SOUTH && (a += 90));
    return a
};
mxShape.prototype.createTransparentSvgRectangle = function(a, b, c, d) {
    var e = document.createElementNS(mxConstants.NS_SVG, "rect");
    e.setAttribute("x", a);
    e.setAttribute("y", b);
    e.setAttribute("width", c);
    e.setAttribute("height", d);
    e.setAttribute("fill", "none");
    e.setAttribute("stroke", "none");
    e.setAttribute("pointer-events", "all");
    return e
};
mxShape.prototype.setTransparentBackgroundImage = function(a) {
    a.style.backgroundImage = "url('" + mxClient.imageBasePath + "/transparent.gif')"
};
mxShape.prototype.releaseSvgGradients = function(a) {
    if (null != a)
        for (var b in a) {
            var c = a[b];
            c.mxRefCount = (c.mxRefCount || 0) - 1;
            0 == c.mxRefCount && null != c.parentNode && c.parentNode.removeChild(c)
        }
};
mxShape.prototype.destroy = function() {
    null != this.node && (mxEvent.release(this.node), null != this.node.parentNode && this.node.parentNode.removeChild(this.node), this.node = null);
    this.releaseSvgGradients(this.oldGradients);
    this.oldGradients = null
};
var mxStencilRegistry = {
        stencils: [],
        addStencil: function(a, b) {
            mxStencilRegistry.stencils[a] = b
        },
        getStencil: function(a) {
            return mxStencilRegistry.stencils[a]
        }
    },
    mxMarker = {
        markers: [],
        addMarker: function(a, b) {
            mxMarker.markers[a] = b
        },
        createMarker: function(a, b, c, d, e, f, g, k, l, m) {
            var n = mxMarker.markers[c];
            return null != n ? n(a, b, c, d, e, f, g, k, l, m) : null
        }
    };
(function() {
    function a(a, b, e, f, g, k, l, m, n, p) {
        b = 1.118 * g * n;
        m = 1.118 * k * n;
        g *= l + n;
        k *= l + n;
        var q = f.clone();
        q.x -= b;
        q.y -= m;
        l = e != mxConstants.ARROW_CLASSIC ? 1 : 0.75;
        f.x += -g * l - b;
        f.y += -k * l - m;
        return function() {
            a.begin();
            a.moveTo(q.x, q.y);
            a.lineTo(q.x - g - k / 2, q.y - k + g / 2);
            e == mxConstants.ARROW_CLASSIC && a.lineTo(q.x - 3 * g / 4, q.y - 3 * k / 4);
            a.lineTo(q.x + k / 2 - g, q.y - k - g / 2);
            a.close();
            p ? a.fillAndStroke() : a.stroke()
        }
    }

    function b(a, b, e, f, g, k, l, m, n, p) {
        m = e == mxConstants.ARROW_DIAMOND ? 0.7071 : 0.9862;
        b = g * n * m;
        m *= k * n;
        g *= l + n;
        k *= l + n;
        var q = f.clone();
        q.x -= b;
        q.y -= m;
        f.x += -g - b;
        f.y += -k - m;
        var r = e == mxConstants.ARROW_DIAMOND ? 2 : 3.4;
        return function() {
            a.begin();
            a.moveTo(q.x, q.y);
            a.lineTo(q.x - g / 2 - k / r, q.y + g / r - k / 2);
            a.lineTo(q.x - g, q.y - k);
            a.lineTo(q.x - g / 2 + k / r, q.y - k / 2 - g / r);
            a.close();
            p ? a.fillAndStroke() : a.stroke()
        }
    }
    mxMarker.addMarker("classic", a);
    mxMarker.addMarker("block", a);
    mxMarker.addMarker("open", function(a, b, e, f, g, k, l, m, n, p) {
        b = 1.118 * g * n;
        e = 1.118 * k * n;
        g *= l + n;
        k *= l + n;
        var q = f.clone();
        q.x -= b;
        q.y -= e;
        f.x += 2 * -b;
        f.y += 2 * -e;
        return function() {
            a.begin();
            a.moveTo(q.x - g -
                k / 2, q.y - k + g / 2);
            a.lineTo(q.x, q.y);
            a.lineTo(q.x + k / 2 - g, q.y - k - g / 2);
            a.stroke()
        }
    });
    mxMarker.addMarker("oval", function(a, b, e, f, g, k, l, m, n, p) {
        var q = l / 2,
            r = f.clone();
        f.x -= g * q;
        f.y -= k * q;
        return function() {
            a.ellipse(r.x - q, r.y - q, l, l);
            p ? a.fillAndStroke() : a.stroke()
        }
    });
    mxMarker.addMarker("diamond", b);
    mxMarker.addMarker("diamondThin", b)
})();

function mxActor(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = null != d ? d : 1
}
mxUtils.extend(mxActor, mxShape);
mxActor.prototype.paintVertexShape = function(a, b, c, d, e) {
    a.translate(b, c);
    a.begin();
    this.redrawPath(a, b, c, d, e);
    a.fillAndStroke()
};
mxActor.prototype.redrawPath = function(a, b, c, d, e) {
    b = d / 3;
    a.moveTo(0, e);
    a.curveTo(0, 3 * e / 5, 0, 2 * e / 5, d / 2, 2 * e / 5);
    a.curveTo(d / 2 - b, 2 * e / 5, d / 2 - b, 0, d / 2, 0);
    a.curveTo(d / 2 + b, 0, d / 2 + b, 2 * e / 5, d / 2, 2 * e / 5);
    a.curveTo(d, 2 * e / 5, d, 3 * e / 5, d, e);
    a.close()
};

function mxCloud(a, b, c, d) {
    mxActor.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = null != d ? d : 1
}
mxUtils.extend(mxCloud, mxActor);
mxCloud.prototype.redrawPath = function(a, b, c, d, e) {
    a.moveTo(0.25 * d, 0.25 * e);
    a.curveTo(0.05 * d, 0.25 * e, 0, 0.5 * e, 0.16 * d, 0.55 * e);
    a.curveTo(0, 0.66 * e, 0.18 * d, 0.9 * e, 0.31 * d, 0.8 * e);
    a.curveTo(0.4 * d, e, 0.7 * d, e, 0.8 * d, 0.8 * e);
    a.curveTo(d, 0.8 * e, d, 0.6 * e, 0.875 * d, 0.5 * e);
    a.curveTo(d, 0.3 * e, 0.8 * d, 0.1 * e, 0.625 * d, 0.2 * e);
    a.curveTo(0.5 * d, 0.05 * e, 0.3 * d, 0.05 * e, 0.25 * d, 0.25 * e);
    a.close()
};

function mxRectangleShape(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = null != d ? d : 1
}
mxUtils.extend(mxRectangleShape, mxShape);
mxRectangleShape.prototype.isHtmlAllowed = function() {
    return !this.isRounded && !this.glass && 0 == this.rotation
};
mxRectangleShape.prototype.paintBackground = function(a, b, c, d, e) {
    if (this.isRounded) {
        var f = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, 100 * mxConstants.RECTANGLE_ROUNDING_FACTOR) / 100,
            f = Math.min(d * f, e * f);
        a.roundrect(b, c, d, e, f, f)
    } else a.rect(b, c, d, e);
    a.fillAndStroke()
};
mxRectangleShape.prototype.paintForeground = function(a, b, c, d, e) {
    this.glass && this.paintGlassEffect(a, b, c, d, e, this.getArcSize(d + this.strokewidth, e + this.strokewidth))
};

function mxEllipse(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = null != d ? d : 1
}
mxUtils.extend(mxEllipse, mxShape);
mxEllipse.prototype.paintVertexShape = function(a, b, c, d, e) {
    a.ellipse(b, c, d, e);
    a.fillAndStroke()
};

function mxDoubleEllipse(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = null != d ? d : 1
}
mxUtils.extend(mxDoubleEllipse, mxShape);
mxDoubleEllipse.prototype.vmlScale = 10;
mxDoubleEllipse.prototype.paintBackground = function(a, b, c, d, e) {
    a.ellipse(b, c, d, e);
    a.fillAndStroke()
};
mxDoubleEllipse.prototype.paintForeground = function(a, b, c, d, e) {
    if (!this.outline) {
        var f = mxUtils.getValue(this.style, mxConstants.STYLE_MARGIN, Math.min(3 + this.strokewidth, Math.min(d / 5, e / 5)));
        d -= 2 * f;
        e -= 2 * f;
        0 < d && 0 < e && a.ellipse(b + f, c + f, d, e);
        a.stroke()
    }
};

function mxRhombus(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = null != d ? d : 1
}
mxUtils.extend(mxRhombus, mxShape);
mxRhombus.prototype.paintVertexShape = function(a, b, c, d, e) {
    var f = d / 2,
        g = e / 2;
    a.begin();
    a.moveTo(b + f, c);
    a.lineTo(b + d, c + g);
    a.lineTo(b + f, c + e);
    a.lineTo(b, c + g);
    a.close();
    a.fillAndStroke()
};

function mxPolyline(a, b, c) {
    mxShape.call(this);
    this.points = a;
    this.stroke = b;
    this.strokewidth = null != c ? c : 1
}
mxUtils.extend(mxPolyline, mxShape);
mxPolyline.prototype.getRotation = function() {
    return 0
};
mxPolyline.prototype.getShapeRotation = function() {
    return 0
};
mxPolyline.prototype.isPaintBoundsInverted = function() {
    return !1
};
mxPolyline.prototype.paintEdgeShape = function(a, b) {
    null == this.style || 1 != this.style[mxConstants.STYLE_CURVED] ? this.paintLine(a, b, this.isRounded) : this.paintCurvedLine(a, b)
};
mxPolyline.prototype.paintLine = function(a, b, c) {
    var d = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2,
        e = b[0],
        f = b[b.length - 1];
    a.begin();
    a.moveTo(e.x, e.y);
    for (var g = 1; g < b.length - 1; g++) {
        var k = b[g],
            l = e.x - k.x,
            e = e.y - k.y;
        if (c && g < b.length - 1 && (0 != l || 0 != e)) {
            var m = Math.sqrt(l * l + e * e),
                l = l * Math.min(d, m / 2) / m,
                e = e * Math.min(d, m / 2) / m;
            a.lineTo(k.x + l, k.y + e);
            for (e = b[g + 1]; g < b.length - 2 && 0 == Math.round(e.x - k.x) && 0 == Math.round(e.y - k.y);) e = b[g + 2], g++;
            l = e.x - k.x;
            e = e.y - k.y;
            m = Math.max(1, Math.sqrt(l *
                l + e * e));
            l = l * Math.min(d, m / 2) / m;
            e = e * Math.min(d, m / 2) / m;
            l = k.x + l;
            e = k.y + e;
            a.quadTo(k.x, k.y, l, e);
            k = new mxPoint(l, e)
        } else a.lineTo(k.x, k.y);
        e = k
    }
    a.lineTo(f.x, f.y);
    a.stroke()
};
mxPolyline.prototype.paintCurvedLine = function(a, b) {
    a.begin();
    var c = b[0],
        d = b.length;
    a.moveTo(c.x, c.y);
    for (c = 1; c < d - 2; c++) {
        var e = b[c],
            f = b[c + 1];
        a.quadTo(e.x, e.y, (e.x + f.x) / 2, (e.y + f.y) / 2)
    }
    e = b[d - 2];
    f = b[d - 1];
    a.quadTo(e.x, e.y, f.x, f.y);
    a.stroke()
};

function mxArrow(a, b, c, d, e, f, g) {
    mxShape.call(this);
    this.points = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = null != d ? d : 1;
    this.arrowWidth = null != e ? e : mxConstants.ARROW_WIDTH;
    this.spacing = null != f ? f : mxConstants.ARROW_SPACING;
    this.endSize = null != g ? g : mxConstants.ARROW_SIZE
}
mxUtils.extend(mxArrow, mxShape);
mxArrow.prototype.paintEdgeShape = function(a, b) {
    var c = mxConstants.ARROW_SPACING,
        d = mxConstants.ARROW_WIDTH,
        e = mxConstants.ARROW_SIZE,
        f = b[0],
        g = b[b.length - 1],
        k = g.x - f.x,
        l = g.y - f.y,
        m = Math.sqrt(k * k + l * l),
        n = m - 2 * c - e,
        k = k / m,
        l = l / m,
        m = d * l / 3,
        d = -d * k / 3,
        e = f.x - m / 2 + c * k,
        f = f.y - d / 2 + c * l,
        p = e + m,
        q = f + d,
        r = p + n * k,
        n = q + n * l,
        s = r + m,
        t = n + d,
        u = s - 3 * m,
        x = t - 3 * d;
    a.begin();
    a.moveTo(e, f);
    a.lineTo(p, q);
    a.lineTo(r, n);
    a.lineTo(s, t);
    a.lineTo(g.x - c * k, g.y - c * l);
    a.lineTo(u, x);
    a.lineTo(u + m, x + d);
    a.close();
    a.fillAndStroke()
};

function mxText(a, b, c, d, e, f, g, k, l, m, n, p, q, r, s, t, u, x, y, v) {
    mxShape.call(this);
    this.value = a;
    this.bounds = b;
    this.color = null != e ? e : "black";
    this.align = null != c ? c : "";
    this.valign = null != d ? d : "";
    this.family = null != f ? f : mxConstants.DEFAULT_FONTFAMILY;
    this.size = null != g ? g : mxConstants.DEFAULT_FONTSIZE;
    this.fontStyle = null != k ? k : mxConstants.DEFAULT_FONTSTYLE;
    this.spacing = parseInt(l || 2);
    this.spacingTop = this.spacing + parseInt(m || 0);
    this.spacingRight = this.spacing + parseInt(n || 0);
    this.spacingBottom = this.spacing + parseInt(p || 0);
    this.spacingLeft = this.spacing + parseInt(q || 0);
    this.horizontal = null != r ? r : !0;
    this.background = s;
    this.border = t;
    this.wrap = null != u ? u : !1;
    this.clipped = null != x ? x : !1;
    this.overflow = null != y ? y : "visible";
    this.labelPadding = null != v ? v : 0;
    this.rotation = 0;
    this.updateMargin()
}
mxUtils.extend(mxText, mxShape);
mxText.prototype.baseSpacingTop = 0;
mxText.prototype.baseSpacingBottom = 0;
mxText.prototype.baseSpacingLeft = 0;
mxText.prototype.baseSpacingRight = 0;
mxText.prototype.replaceLinefeeds = !0;
mxText.prototype.verticalTextRotation = -90;
mxText.prototype.ignoreClippedStringSize = !0;
mxText.prototype.ignoreStringSize = !1;
mxText.prototype.textWidthPadding = 8 == document.documentMode ? 4 : 3;
mxText.prototype.isParseVml = function() {
    return !1
};
mxText.prototype.isHtmlAllowed = function() {
    return 8 != document.documentMode
};
mxText.prototype.getSvgScreenOffset = function() {
    return 0
};
mxText.prototype.checkBounds = function() {
    return null != this.bounds && !isNaN(this.bounds.x) && !isNaN(this.bounds.y) && !isNaN(this.bounds.width) && !isNaN(this.bounds.height)
};
mxText.prototype.apply = function(a) {
    mxShape.prototype.apply.apply(this, arguments);
    null != this.style && (this.fontStyle = mxUtils.getValue(this.style, mxConstants.STYLE_FONTSTYLE, this.fontStyle), this.family = mxUtils.getValue(this.style, mxConstants.STYLE_FONTFAMILY, this.family), this.size = mxUtils.getValue(this.style, mxConstants.STYLE_FONTSIZE, this.size), this.color = mxUtils.getValue(this.style, mxConstants.STYLE_FONTCOLOR, this.color), this.align = mxUtils.getValue(this.style, mxConstants.STYLE_ALIGN, this.align), this.valign =
        mxUtils.getValue(this.style, mxConstants.STYLE_VERTICAL_ALIGN, this.valign), this.spacingTop = mxUtils.getValue(this.style, mxConstants.STYLE_SPACING_TOP, this.spacingTop), this.spacingRight = mxUtils.getValue(this.style, mxConstants.STYLE_SPACING_RIGHT, this.spacingRight), this.spacingBottom = mxUtils.getValue(this.style, mxConstants.STYLE_SPACING_BOTTOM, this.spacingBottom), this.spacingLeft = mxUtils.getValue(this.style, mxConstants.STYLE_SPACING_LEFT, this.spacingLeft), this.horizontal = mxUtils.getValue(this.style, mxConstants.STYLE_HORIZONTAL,
            this.horizontal), this.background = mxUtils.getValue(this.style, mxConstants.STYLE_LABEL_BACKGROUNDCOLOR, this.background), this.border = mxUtils.getValue(this.style, mxConstants.STYLE_LABEL_BORDERCOLOR, this.border), this.updateMargin())
};
mxText.prototype.updateBoundingBox = function() {
    var a = this.node;
    this.boundingBox = this.bounds.clone();
    var b = this.getTextRotation(),
        c = null != this.style ? mxUtils.getValue(this.style, mxConstants.STYLE_LABEL_POSITION, mxConstants.ALIGN_CENTER) : null,
        d = null != this.style ? mxUtils.getValue(this.style, mxConstants.STYLE_VERTICAL_LABEL_POSITION, mxConstants.ALIGN_MIDDLE) : null;
    if (!this.ignoreStringSize && null != a && "fill" != this.overflow && (!this.clipped || !this.ignoreClippedStringSize || c != mxConstants.ALIGN_CENTER || d != mxConstants.ALIGN_MIDDLE)) {
        d =
            c = null;
        if (null != a.ownerSVGElement)
            if (null != a.firstChild && null != a.firstChild.firstChild && "foreignObject" == a.firstChild.firstChild.nodeName) a = a.firstChild.firstChild, c = parseInt(a.getAttribute("width")) * this.scale, d = parseInt(a.getAttribute("height")) * this.scale;
            else try {
                var e = a.getBBox();
                if ("string" == typeof this.value && 0 == mxUtils.trim(this.value) || 0 == e.width && 0 == e.height) return;
                this.boundingBox = new mxRectangle(e.x, e.y, e.width, e.height);
                b = 0
            } catch (f) {} else c = null != this.state ? this.state.view.textDiv : null,
                null != this.offsetWidth && null != this.offsetHeight ? (c = this.offsetWidth * this.scale, d = this.offsetHeight * this.scale) : (null != c && (this.updateFont(c), this.updateSize(c, !1), this.updateInnerHtml(c), a = c), e = a, 8 == document.documentMode ? (d = Math.round(this.bounds.width / this.scale), this.wrap && 0 < d ? (a.whiteSpace = "normal", a = e.getElementsByTagName("div"), 0 < a.length && (e = a[a.length - 1]), c = e.offsetWidth + 2, a = this.node.getElementsByTagName("div"), this.clipped && (c = Math.min(d, c)), 1 < a.length && (a[a.length - 2].style.width = c + "px")) :
                    a.whiteSpace = "nowrap") : null != e.firstChild && "DIV" == e.firstChild.nodeName && (e = e.firstChild), c = (e.offsetWidth + this.textWidthPadding) * this.scale, d = e.offsetHeight * this.scale);
        null != c && null != d && (this.boundingBox = new mxRectangle(this.bounds.x + this.margin.x * c, this.bounds.y + this.margin.y * d, c, d))
    } else this.boundingBox.x += this.margin.x * this.boundingBox.width, this.boundingBox.y += this.margin.y * this.boundingBox.height;
    null != this.boundingBox && 0 != b && (b = mxUtils.getBoundingBox(this.boundingBox, b), this.boundingBox.x =
        b.x, this.boundingBox.y = b.y, mxClient.IS_QUIRKS || (this.boundingBox.width = b.width, this.boundingBox.height = b.height))
};
mxText.prototype.getShapeRotation = function() {
    return 0
};
mxText.prototype.getTextRotation = function() {
    return null != this.state && null != this.state.shape ? this.state.shape.getTextRotation() : 0
};
mxText.prototype.isPaintBoundsInverted = function() {
    return !this.horizontal && null != this.state && this.state.view.graph.model.isVertex(this.state.cell)
};
mxText.prototype.configureCanvas = function(a, b, c, d, e) {
    mxShape.prototype.configureCanvas.apply(this, arguments);
    a.setFontColor(this.color);
    a.setFontBackgroundColor(this.background);
    a.setFontBorderColor(this.border);
    a.setFontFamily(this.family);
    a.setFontSize(this.size);
    a.setFontStyle(this.fontStyle)
};
mxText.prototype.updateVmlContainer = function() {
    this.node.style.left = Math.round(this.bounds.x) + "px";
    this.node.style.top = Math.round(this.bounds.y) + "px";
    this.node.style.width = "1px";
    this.node.style.height = "1px";
    this.node.style.overflow = "visible"
};
mxText.prototype.paint = function(a) {
    var b = this.scale,
        c = this.bounds.x / b,
        d = this.bounds.y / b,
        e = this.bounds.width / b,
        b = this.bounds.height / b;
    this.updateTransform(a, c, d, e, b);
    this.configureCanvas(a, c, d, e, b);
    var f = mxUtils.isNode(this.value) || this.dialect == mxConstants.DIALECT_STRICTHTML,
        g = f || a instanceof mxVmlCanvas2D ? "html" : "",
        k = this.value;
    !f && "html" == g && (k = mxUtils.htmlEntities(k, !1));
    k = !mxUtils.isNode(this.value) && this.replaceLinefeeds && "html" == g ? k.replace(/\n/g, "<br/>") : k;
    a.text(c, d, e, b, k, this.align, this.valign,
        this.wrap, g, this.overflow, this.clipped, this.getTextRotation())
};
mxText.prototype.redrawHtmlShape = function() {
    var a = this.node.style;
    a.opacity = 1 > this.opacity ? this.opacity : "";
    a.whiteSpace = "normal";
    a.overflow = "";
    a.width = "";
    a.height = "";
    this.updateValue();
    this.updateFont(this.node);
    this.updateSize(this.node, null == this.state || null == this.state.view.textDiv);
    this.offsetHeight = this.offsetWidth = null;
    mxClient.IS_IE && (null == document.documentMode || 8 >= document.documentMode) ? this.updateHtmlFilter() : this.updateHtmlTransform()
};
mxText.prototype.updateHtmlTransform = function() {
    var a = this.getTextRotation(),
        b = this.node.style,
        c = this.margin.x,
        d = this.margin.y;
    0 != a ? (mxUtils.setPrefixedStyle(b, "transformOrigin", 100 * -c + "% " + 100 * -d + "%"), mxUtils.setPrefixedStyle(b, "transform", "translate(" + 100 * c + "%," + 100 * d + "%)scale(" + this.scale + ") rotate(" + a + "deg)")) : (mxUtils.setPrefixedStyle(b, "transformOrigin", "0% 0%"), mxUtils.setPrefixedStyle(b, "transform", "scale(" + this.scale + ")translate(" + 100 * c + "%," + 100 * d + "%)"));
    b.left = Math.round(this.bounds.x) +
        "px";
    b.top = Math.round(this.bounds.y) + "px"
};
mxText.prototype.updateInnerHtml = function(a) {
    if (mxUtils.isNode(this.value)) a.innerHTML = this.value.outerHTML;
    else {
        var b = this.value;
        this.dialect != mxConstants.DIALECT_STRICTHTML && (b = mxUtils.htmlEntities(b, !1));
        b = this.replaceLinefeeds ? b.replace(/\n/g, "<br/>") : b;
        a.innerHTML = '<div style="display:inline-block;_display:inline;">' + b + "</div>"
    }
};
mxText.prototype.updateHtmlFilter = function() {
    var a = this.node.style,
        b = this.margin.x,
        c = this.margin.y,
        d = this.scale;
    a.filter = "";
    var e = 0,
        f = 0,
        g = null != this.state ? this.state.view.textDiv : null,
        k = this.node;
    if (null != g) {
        g.style.overflow = "";
        g.style.height = "";
        g.style.width = "";
        this.updateFont(g);
        this.updateSize(g, !1);
        this.updateInnerHtml(g);
        var l = Math.round(this.bounds.width / this.scale);
        this.wrap && 0 < l ? (g.whiteSpace = "normal", e = l, this.clipped && (e = Math.min(e, this.bounds.width)), g.style.width = e + "px") : g.whiteSpace = "nowrap";
        k = g;
        null != k.firstChild && "DIV" == k.firstChild.nodeName && (k = k.firstChild);
        !this.clipped && (this.wrap && 0 < l) && (e = k.offsetWidth + this.textWidthPadding, g.style.width = e + "px");
        f = k.offsetHeight + 2;
        mxClient.IS_QUIRKS && (null != this.border && this.border != mxConstants.NONE) && (f += 3)
    } else null != k.firstChild && "DIV" == k.firstChild.nodeName && (k = k.firstChild, f = k.offsetHeight);
    e = k.offsetWidth + this.textWidthPadding;
    this.clipped && (f = Math.min(f, this.bounds.height));
    this.offsetWidth = e;
    this.offsetHeight = f;
    l = this.bounds.width / d;
    g =
        this.bounds.height / d;
    mxClient.IS_QUIRKS && (this.clipped || "width" == this.overflow && 0 < g) ? (g = Math.min(g, f), a.height = Math.round(g) + "px") : g = f;
    if ("fill" != this.overflow && "width" != this.overflow && (this.clipped && (e = Math.min(l, e)), l = e, mxClient.IS_QUIRKS && this.clipped || this.wrap)) a.width = Math.round(l) + "px";
    g *= d;
    l *= d;
    e = this.getTextRotation() * (Math.PI / 180);
    f = parseFloat(parseFloat(Math.cos(e)).toFixed(8));
    k = parseFloat(parseFloat(Math.sin(-e)).toFixed(8));
    e %= 2 * Math.PI;
    0 > e && (e += 2 * Math.PI);
    e %= Math.PI;
    e > Math.PI / 2 && (e =
        Math.PI - e);
    var m = Math.cos(e),
        n = Math.sin(-e),
        b = l * -(b + 0.5),
        c = g * -(c + 0.5),
        p = (g - g * m + l * n) / 2 + k * b - f * c;
    0 != e && (a.filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + f + ", M12=" + k + ", M21=" + -k + ", M22=" + f + ", sizingMethod='auto expand')");
    a.zoom = d;
    a.left = Math.round(this.bounds.x + ((l - l * m + g * n) / 2 - f * b - k * c) - l / 2) + "px";
    a.top = Math.round(this.bounds.y + p - g / 2) + "px"
};
mxText.prototype.updateValue = function() {
    if (mxUtils.isNode(this.value)) this.node.innerHTML = "", this.node.appendChild(this.value);
    else {
        var a = this.value;
        this.dialect != mxConstants.DIALECT_STRICTHTML && (a = mxUtils.htmlEntities(a, !1));
        var a = this.replaceLinefeeds ? a.replace(/\n/g, "<br/>") : a,
            b = null != this.background && this.background != mxConstants.NONE ? this.background : null,
            c = null != this.border && this.border != mxConstants.NONE ? this.border : null;
        if ("fill" == this.overflow || "width" == this.overflow) null != b && (this.node.style.backgroundColor =
            b), null != c && (this.node.style.border = "1px solid " + c);
        else {
            var d = "";
            null != b && (d += "background-color:" + b + ";");
            null != c && (d += "border:1px solid " + c + ";");
            a = '<div style="zoom:1;' + d + "display:inline-block;_display:inline;text-decoration:inherit;padding-bottom:1px;padding-right:1px;line-height:" + this.node.style.lineHeight + '">' + a + "</div>";
            this.node.style.lineHeight = ""
        }
        this.node.innerHTML = a
    }
};
mxText.prototype.updateFont = function(a) {
    a = a.style;
    a.lineHeight = mxConstants.ABSOLUTE_LINE_HEIGHT ? Math.round(this.size * mxConstants.LINE_HEIGHT) + "px" : mxConstants.LINE_HEIGHT;
    a.fontSize = Math.round(this.size) + "px";
    a.fontFamily = this.family;
    a.verticalAlign = "top";
    a.color = this.color;
    a.fontWeight = (this.fontStyle & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD ? "bold" : "";
    a.fontStyle = (this.fontStyle & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC ? "italic" : "";
    a.textDecoration = (this.fontStyle & mxConstants.FONT_UNDERLINE) ==
        mxConstants.FONT_UNDERLINE ? "underline" : "";
    a.textAlign = this.align == mxConstants.ALIGN_CENTER ? "center" : this.align == mxConstants.ALIGN_RIGHT ? "right" : "left"
};
mxText.prototype.updateSize = function(a, b) {
    var c = Math.round(this.bounds.width / this.scale),
        d = Math.round(this.bounds.height / this.scale),
        e = a.style;
    this.clipped ? (e.overflow = "hidden", e.width = c + "px", mxClient.IS_QUIRKS || (e.maxHeight = d + "px")) : "fill" == this.overflow ? (e.width = c + "px", e.height = d + "px") : "width" == this.overflow && (e.width = c + "px", e.maxHeight = d + "px");
    this.wrap && 0 < c ? (e.whiteSpace = "normal", e.width = c + "px", b && (d = a, null != d.firstChild && "DIV" == d.firstChild.nodeName && (d = d.firstChild), d = d.offsetWidth + 3, this.clipped &&
        (d = Math.min(d, c)), e.width = d + "px")) : e.whiteSpace = "nowrap"
};
mxText.prototype.updateMargin = function() {
    this.margin = mxUtils.getAlignmentAsPoint(this.align, this.valign)
};
mxText.prototype.getSpacing = function() {
    var a = 0,
        b = 0,
        a = this.align == mxConstants.ALIGN_CENTER ? (this.spacingLeft - this.spacingRight) / 2 : this.align == mxConstants.ALIGN_RIGHT ? -this.spacingRight - this.baseSpacingRight : this.spacingLeft + this.baseSpacingLeft,
        b = this.valign == mxConstants.ALIGN_MIDDLE ? (this.spacingTop - this.spacingBottom) / 2 : this.valign == mxConstants.ALIGN_BOTTOM ? -this.spacingBottom - this.baseSpacingBottom : this.spacingTop + this.baseSpacingTop;
    return new mxPoint(a, b)
};

function mxTriangle() {
    mxActor.call(this)
}
mxUtils.extend(mxTriangle, mxActor);
mxTriangle.prototype.redrawPath = function(a, b, c, d, e) {
    a.moveTo(0, 0);
    a.lineTo(d, 0.5 * e);
    a.lineTo(0, e);
    a.close()
};

function mxHexagon() {
    mxActor.call(this)
}
mxUtils.extend(mxHexagon, mxActor);
mxHexagon.prototype.redrawPath = function(a, b, c, d, e) {
    a.moveTo(0.25 * d, 0);
    a.lineTo(0.75 * d, 0);
    a.lineTo(d, 0.5 * e);
    a.lineTo(0.75 * d, e);
    a.lineTo(0.25 * d, e);
    a.lineTo(0, 0.5 * e);
    a.close()
};

function mxLine(a, b, c) {
    mxShape.call(this);
    this.bounds = a;
    this.stroke = b;
    this.strokewidth = null != c ? c : 1
}
mxUtils.extend(mxLine, mxShape);
mxLine.prototype.paintVertexShape = function(a, b, c, d, e) {
    c += e / 2;
    a.begin();
    a.moveTo(b, c);
    a.lineTo(b + d, c);
    a.stroke()
};

function mxImageShape(a, b, c, d, e) {
    mxShape.call(this);
    this.bounds = a;
    this.image = b;
    this.fill = c;
    this.stroke = d;
    this.strokewidth = null != e ? e : 1;
    this.shadow = !1
}
mxUtils.extend(mxImageShape, mxRectangleShape);
mxImageShape.prototype.preserveImageAspect = !0;
mxImageShape.prototype.getSvgScreenOffset = function() {
    return !mxClient.IS_IE ? 0.5 : 0
};
mxImageShape.prototype.apply = function(a) {
    mxShape.prototype.apply.apply(this, arguments);
    this.gradient = this.stroke = this.fill = null;
    null != this.style && (this.preserveImageAspect = 1 == mxUtils.getNumber(this.style, mxConstants.STYLE_IMAGE_ASPECT, 1), this.flipH = this.flipH || 1 == mxUtils.getValue(this.style, "imageFlipH", 0), this.flipV = this.flipV || 1 == mxUtils.getValue(this.style, "imageFlipV", 0))
};
mxImageShape.prototype.isHtmlAllowed = function() {
    return !this.preserveImageAspect
};
mxImageShape.prototype.createHtml = function() {
    var a = document.createElement("div");
    a.style.position = "absolute";
    return a
};
mxImageShape.prototype.paintVertexShape = function(a, b, c, d, e) {
    if (null != this.image) {
        var f = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_BACKGROUND, null),
            g = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_BORDER, null);
        if (null != f || null != g) a.setFillColor(f), a.setStrokeColor(g), a.rect(b, c, d, e), a.fillAndStroke();
        a.image(b, c, d, e, this.image, this.preserveImageAspect, !1, !1)
    } else mxRectangleShape.prototype.paintBackground.apply(this, arguments)
};
mxImageShape.prototype.redrawHtmlShape = function() {
    this.node.style.left = Math.round(this.bounds.x) + "px";
    this.node.style.top = Math.round(this.bounds.y) + "px";
    this.node.style.width = Math.max(0, Math.round(this.bounds.width)) + "px";
    this.node.style.height = Math.max(0, Math.round(this.bounds.height)) + "px";
    this.node.innerHTML = "";
    if (null != this.image) {
        var a = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_BACKGROUND, ""),
            b = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_BORDER, "");
        this.node.style.backgroundColor =
            a;
        this.node.style.borderColor = b;
        a = document.createElement(mxClient.IS_IE6 || (null == document.documentMode || 8 >= document.documentMode) && 0 != this.rotation ? mxClient.VML_PREFIX + ":image" : "img");
        a.style.position = "absolute";
        a.src = this.image;
        b = 100 > this.opacity ? "alpha(opacity=" + this.opacity + ")" : "";
        this.node.style.filter = b;
        this.flipH && this.flipV ? b += "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)" : this.flipH ? b += "progid:DXImageTransform.Microsoft.BasicImage(mirror=1)" : this.flipV && (b += "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)");
        a.style.filter != b && (a.style.filter = b);
        "image" == a.nodeName ? a.style.rotation = this.rotation : 0 != this.rotation ? mxUtils.setPrefixedStyle(a.style, "transform", "rotate(" + this.rotation + "deg)") : mxUtils.setPrefixedStyle(a.style, "transform", "");
        a.style.width = this.node.style.width;
        a.style.height = this.node.style.height;
        this.node.style.backgroundImage = "";
        this.node.appendChild(a)
    } else this.setTransparentBackgroundImage(this.node)
};

function mxLabel(a, b, c, d) {
    mxRectangleShape.call(this, a, b, c, d)
}
mxUtils.extend(mxLabel, mxRectangleShape);
mxLabel.prototype.imageSize = mxConstants.DEFAULT_IMAGESIZE;
mxLabel.prototype.spacing = 2;
mxLabel.prototype.indicatorSize = 10;
mxLabel.prototype.indicatorSpacing = 2;
mxLabel.prototype.init = function(a) {
    mxShape.prototype.init.apply(this, arguments);
    null != this.indicatorShape && (this.indicator = new this.indicatorShape, this.indicator.dialect = this.dialect, this.indicator.init(this.node))
};
mxLabel.prototype.redraw = function() {
    null != this.indicator && (this.indicator.fill = this.indicatorColor, this.indicator.stroke = this.indicatorStrokeColor, this.indicator.gradient = this.indicatorGradientColor, this.indicator.direction = this.indicatorDirection);
    mxShape.prototype.redraw.apply(this, arguments)
};
mxLabel.prototype.isHtmlAllowed = function() {
    return mxRectangleShape.prototype.isHtmlAllowed.apply(this, arguments) && null == this.indicatorColor && null == this.indicatorShape
};
mxLabel.prototype.paintForeground = function(a, b, c, d, e) {
    this.paintImage(a, b, c, d, e);
    this.paintIndicator(a, b, c, d, e);
    mxRectangleShape.prototype.paintForeground.apply(this, arguments)
};
mxLabel.prototype.paintImage = function(a, b, c, d, e) {
    null != this.image && (b = this.getImageBounds(b, c, d, e), a.image(b.x, b.y, b.width, b.height, this.image, !1, !1, !1))
};
mxLabel.prototype.getImageBounds = function(a, b, c, d) {
    var e = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_ALIGN, mxConstants.ALIGN_LEFT),
        f = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_VERTICAL_ALIGN, mxConstants.ALIGN_MIDDLE),
        g = mxUtils.getNumber(this.style, mxConstants.STYLE_IMAGE_WIDTH, mxConstants.DEFAULT_IMAGESIZE),
        k = mxUtils.getNumber(this.style, mxConstants.STYLE_IMAGE_HEIGHT, mxConstants.DEFAULT_IMAGESIZE),
        l = mxUtils.getNumber(this.style, mxConstants.STYLE_SPACING, this.spacing) + 5;
    a = e == mxConstants.ALIGN_CENTER ?
        a + (c - g) / 2 : e == mxConstants.ALIGN_RIGHT ? a + (c - g - l) : a + l;
    b = f == mxConstants.ALIGN_TOP ? b + l : f == mxConstants.ALIGN_BOTTOM ? b + (d - k - l) : b + (d - k) / 2;
    return new mxRectangle(a, b, g, k)
};
mxLabel.prototype.paintIndicator = function(a, b, c, d, e) {
    null != this.indicator ? (this.indicator.bounds = this.getIndicatorBounds(b, c, d, e), this.indicator.paint(a)) : null != this.indicatorImage && (b = this.getIndicatorBounds(b, c, d, e), a.image(b.x, b.y, b.width, b.height, this.indicatorImage, !1, !1, !1))
};
mxLabel.prototype.getIndicatorBounds = function(a, b, c, d) {
    var e = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_ALIGN, mxConstants.ALIGN_LEFT),
        f = mxUtils.getValue(this.style, mxConstants.STYLE_IMAGE_VERTICAL_ALIGN, mxConstants.ALIGN_MIDDLE),
        g = mxUtils.getNumber(this.style, mxConstants.STYLE_INDICATOR_WIDTH, this.indicatorSize),
        k = mxUtils.getNumber(this.style, mxConstants.STYLE_INDICATOR_HEIGHT, this.indicatorSize),
        l = this.spacing + 5;
    a = e == mxConstants.ALIGN_RIGHT ? a + (c - g - l) : e == mxConstants.ALIGN_CENTER ? a + (c - g) /
        2 : a + l;
    b = f == mxConstants.ALIGN_BOTTOM ? b + (d - k - l) : f == mxConstants.ALIGN_TOP ? b + l : b + (d - k) / 2;
    return new mxRectangle(a, b, g, k)
};
mxLabel.prototype.redrawHtmlShape = function() {
    for (mxRectangleShape.prototype.redrawHtmlShape.apply(this, arguments); this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
    if (null != this.image) {
        var a = document.createElement("img");
        a.style.position = "relative";
        a.setAttribute("border", "0");
        var b = this.getImageBounds(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
        b.x -= this.bounds.x;
        b.y -= this.bounds.y;
        a.style.left = Math.round(b.x) + "px";
        a.style.top = Math.round(b.y) + "px";
        a.style.width =
            Math.round(b.width) + "px";
        a.style.height = Math.round(b.height) + "px";
        a.src = this.image;
        this.node.appendChild(a)
    }
};

function mxCylinder(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = null != d ? d : 1
}
mxUtils.extend(mxCylinder, mxShape);
mxCylinder.prototype.maxHeight = 40;
mxCylinder.prototype.svgStrokeTolerance = 0;
mxCylinder.prototype.paintVertexShape = function(a, b, c, d, e) {
    a.translate(b, c);
    a.begin();
    this.redrawPath(a, b, c, d, e, !1);
    a.fillAndStroke();
    a.setShadow(!1);
    a.begin();
    this.redrawPath(a, b, c, d, e, !0);
    a.stroke()
};
mxCylinder.prototype.redrawPath = function(a, b, c, d, e, f) {
    b = Math.min(this.maxHeight, Math.round(e / 5));
    if (f && null != this.fill || !f && null == this.fill) a.moveTo(0, b), a.curveTo(0, 2 * b, d, 2 * b, d, b), f || (a.stroke(), a.begin());
    f || (a.moveTo(0, b), a.curveTo(0, -b / 3, d, -b / 3, d, b), a.lineTo(d, e - b), a.curveTo(d, e + b / 3, 0, e + b / 3, 0, e - b), a.close())
};

function mxConnector(a, b, c) {
    mxPolyline.call(this, a, b, c)
}
mxUtils.extend(mxConnector, mxPolyline);
mxConnector.prototype.paintEdgeShape = function(a, b) {
    var c = this.createMarker(a, b, !0),
        d = this.createMarker(a, b, !1);
    mxPolyline.prototype.paintEdgeShape.apply(this, arguments);
    a.setFillColor(this.stroke);
    a.setShadow(!1);
    a.setDashed(!1);
    null != c && c();
    null != d && d()
};
mxConnector.prototype.createMarker = function(a, b, c) {
    var d = null,
        e = b.length,
        f = c ? b[1] : b[e - 2],
        g = c ? b[0] : b[e - 1];
    if (null != f && null != g) {
        for (d = 1; d < e - 1 && 0 == Math.round(f.x - g.x) && 0 == Math.round(f.y - g.y);) f = c ? b[1 + d] : b[e - 2 - d], d++;
        b = g.x - f.x;
        e = g.y - f.y;
        d = Math.max(1, Math.sqrt(b * b + e * e));
        f = b / d;
        b = e / d;
        e = mxUtils.getNumber(this.style, c ? mxConstants.STYLE_STARTSIZE : mxConstants.STYLE_ENDSIZE, mxConstants.DEFAULT_MARKERSIZE);
        d = mxUtils.getValue(this.style, c ? mxConstants.STYLE_STARTARROW : mxConstants.STYLE_ENDARROW);
        d = mxMarker.createMarker(a,
            this, d, g, f, b, e, c, this.arrowStrokewidth, 0 != this.style[c ? mxConstants.STYLE_STARTFILL : mxConstants.STYLE_ENDFILL])
    }
    return d
};
mxConnector.prototype.augmentBoundingBox = function(a) {
    mxShape.prototype.augmentBoundingBox.apply(this, arguments);
    var b = 0;
    mxUtils.getValue(this.style, mxConstants.STYLE_STARTARROW, mxConstants.NONE) != mxConstants.NONE && (b = mxUtils.getNumber(this.style, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_MARKERSIZE) + 1);
    mxUtils.getValue(this.style, mxConstants.STYLE_ENDARROW, mxConstants.NONE) != mxConstants.NONE && (b = Math.max(b, mxUtils.getNumber(this.style, mxConstants.STYLE_ENDSIZE, mxConstants.DEFAULT_MARKERSIZE)) +
        1);
    a.grow(Math.ceil(b * this.scale))
};

function mxSwimlane(a, b, c, d) {
    mxShape.call(this);
    this.bounds = a;
    this.fill = b;
    this.stroke = c;
    this.strokewidth = null != d ? d : 1
}
mxUtils.extend(mxSwimlane, mxShape);
mxSwimlane.prototype.imageSize = 16;
mxSwimlane.prototype.getTitleSize = function() {
    return mxUtils.getValue(this.style, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_STARTSIZE)
};
mxSwimlane.prototype.getLabelBounds = function(a) {
    var b = this.getTitleSize();
    a = new mxRectangle(a.x, a.y, a.width, a.height);
    var c = this.isHorizontal(),
        d = 1 == mxUtils.getValue(this.style, mxConstants.STYLE_FLIPH, 0),
        e = 1 == mxUtils.getValue(this.style, mxConstants.STYLE_FLIPV, 0),
        f = this.direction == mxConstants.DIRECTION_NORTH || this.direction == mxConstants.DIRECTION_SOUTH,
        c = c == !f,
        d = !c && d != (this.direction == mxConstants.DIRECTION_SOUTH || this.direction == mxConstants.DIRECTION_WEST),
        e = c && e != (this.direction == mxConstants.DIRECTION_SOUTH ||
            this.direction == mxConstants.DIRECTION_WEST);
    if (f) {
        b = Math.min(a.width, b * this.scale);
        if (d || e) a.x += a.width - b;
        a.width = b
    } else {
        b = Math.min(a.height, b * this.scale);
        if (d || e) a.y += a.height - b;
        a.height = b
    }
    return a
};
mxSwimlane.prototype.getGradientBounds = function(a, b, c, d, e) {
    a = this.getTitleSize();
    if (this.isHorizontal()) return a = Math.min(a, e), new mxRectangle(b, c, d, a);
    a = Math.min(a, d);
    return new mxRectangle(b, c, a, e)
};
mxSwimlane.prototype.getArcSize = function(a, b, c) {
    a = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, 100 * mxConstants.RECTANGLE_ROUNDING_FACTOR) / 100;
    return 3 * c * a
};
mxSwimlane.prototype.isHorizontal = function() {
    return 1 == mxUtils.getValue(this.style, mxConstants.STYLE_HORIZONTAL, 1)
};
mxSwimlane.prototype.paintVertexShape = function(a, b, c, d, e) {
    var f = this.getTitleSize(),
        g = mxUtils.getValue(this.style, mxConstants.STYLE_SWIMLANE_FILLCOLOR, mxConstants.NONE),
        k = 1 == mxUtils.getValue(this.style, mxConstants.STYLE_SWIMLANE_LINE, 1),
        l = 0,
        f = this.isHorizontal() ? Math.min(f, e) : Math.min(f, d);
    a.translate(b, c);
    this.isRounded ? (l = this.getArcSize(d, e, f), this.paintRoundedSwimlane(a, b, c, d, e, f, l, g, k)) : this.paintSwimlane(a, b, c, d, e, f, g, k);
    g = mxUtils.getValue(this.style, mxConstants.STYLE_SEPARATORCOLOR, mxConstants.NONE);
    this.paintSeparator(a, b, c, d, e, f, g);
    null != this.image && (e = this.getImageBounds(b, c, d, e), a.image(e.x - b, e.y - c, e.width, e.height, this.image, !1, !1, !1));
    this.glass && (a.setShadow(!1), this.paintGlassEffect(a, 0, 0, d, f, l))
};
mxSwimlane.prototype.paintSwimlane = function(a, b, c, d, e, f, g, k) {
    g != mxConstants.NONE && (a.save(), a.setFillColor(g), a.rect(0, 0, d, e), a.fillAndStroke(), a.restore(), a.setShadow(!1));
    a.begin();
    this.isHorizontal() ? (a.moveTo(0, f), a.lineTo(0, 0), a.lineTo(d, 0), a.lineTo(d, f), k && a.close(), a.fillAndStroke(), f < e && g == mxConstants.NONE && (a.pointerEvents = !1, a.begin(), a.moveTo(0, f), a.lineTo(0, e), a.lineTo(d, e), a.lineTo(d, f), a.stroke())) : (a.moveTo(f, 0), a.lineTo(0, 0), a.lineTo(0, e), a.lineTo(f, e), k && a.close(), a.fillAndStroke(),
        f < d && g == mxConstants.NONE && (a.pointerEvents = !1, a.begin(), a.moveTo(f, 0), a.lineTo(d, 0), a.lineTo(d, e), a.lineTo(f, e), a.stroke()))
};
mxSwimlane.prototype.paintRoundedSwimlane = function(a, b, c, d, e, f, g, k, l) {
    k != mxConstants.NONE && (a.save(), a.setFillColor(k), a.roundrect(0, 0, d, e, g, g), a.fillAndStroke(), a.restore(), a.setShadow(!1));
    a.begin();
    this.isHorizontal() ? (a.moveTo(d, f), a.lineTo(d, g), a.quadTo(d, 0, d - Math.min(d / 2, g), 0), a.lineTo(Math.min(d / 2, g), 0), a.quadTo(0, 0, 0, g), a.lineTo(0, f), l && a.close(), a.fillAndStroke(), f < e && k == mxConstants.NONE && (a.pointerEvents = !1, a.begin(), a.moveTo(0, f), a.lineTo(0, e - g), a.quadTo(0, e, Math.min(d / 2, g), e), a.lineTo(d -
        Math.min(d / 2, g), e), a.quadTo(d, e, d, e - g), a.lineTo(d, f), a.stroke())) : (a.moveTo(f, 0), a.lineTo(g, 0), a.quadTo(0, 0, 0, Math.min(e / 2, g)), a.lineTo(0, e - Math.min(e / 2, g)), a.quadTo(0, e, g, e), a.lineTo(f, e), l && a.close(), a.fillAndStroke(), f < d && k == mxConstants.NONE && (a.pointerEvents = !1, a.begin(), a.moveTo(f, e), a.lineTo(d - g, e), a.quadTo(d, e, d, e - Math.min(e / 2, g)), a.lineTo(d, Math.min(e / 2, g)), a.quadTo(d, 0, d - g, 0), a.lineTo(f, 0), a.stroke()))
};
mxSwimlane.prototype.paintSeparator = function(a, b, c, d, e, f, g) {
    g != mxConstants.NONE && (a.setStrokeColor(g), a.setDashed(!0), a.begin(), this.isHorizontal() ? (a.moveTo(d, f), a.lineTo(d, e)) : (a.moveTo(f, 0), a.lineTo(d, 0)), a.stroke(), a.setDashed(!1))
};
mxSwimlane.prototype.getImageBounds = function(a, b, c, d) {
    return this.isHorizontal() ? new mxRectangle(a + c - this.imageSize, b, this.imageSize, this.imageSize) : new mxRectangle(a, b, this.imageSize, this.imageSize)
};

function mxGraphLayout(a) {
    this.graph = a
}
mxGraphLayout.prototype.graph = null;
mxGraphLayout.prototype.useBoundingBox = !0;
mxGraphLayout.prototype.parent = null;
mxGraphLayout.prototype.moveCell = function(a, b, c) {};
mxGraphLayout.prototype.execute = function(a) {};
mxGraphLayout.prototype.getGraph = function() {
    return this.graph
};
mxGraphLayout.prototype.getConstraint = function(a, b, c, d) {
    c = this.graph.view.getState(b);
    b = null != c ? c.style : this.graph.getCellStyle(b);
    return null != b ? b[a] : null
};
mxGraphLayout.traverse = function(a, b, c, d, e) {
    if (null != c && null != a) {
        b = null != b ? b : !0;
        e = e || [];
        var f = mxCellPath.create(a);
        if (null == e[f] && (e[f] = a, d = c(a, d), null == d || d))
            if (d = this.graph.model.getEdgeCount(a), 0 < d)
                for (f = 0; f < d; f++) {
                    var g = this.graph.model.getEdgeAt(a, f),
                        k = this.graph.model.getTerminal(g, !0) == a;
                    if (!b || k) k = this.graph.view.getVisibleTerminal(g, !k), this.traverse(k, b, c, g, e)
                }
    }
};
mxGraphLayout.prototype.isVertexMovable = function(a) {
    return this.graph.isCellMovable(a)
};
mxGraphLayout.prototype.isVertexIgnored = function(a) {
    return !this.graph.getModel().isVertex(a) || !this.graph.isCellVisible(a)
};
mxGraphLayout.prototype.isEdgeIgnored = function(a) {
    var b = this.graph.getModel();
    return !b.isEdge(a) || !this.graph.isCellVisible(a) || null == b.getTerminal(a, !0) || null == b.getTerminal(a, !1)
};
mxGraphLayout.prototype.setEdgeStyleEnabled = function(a, b) {
    this.graph.setCellStyles(mxConstants.STYLE_NOEDGESTYLE, b ? "0" : "1", [a])
};
mxGraphLayout.prototype.setOrthogonalEdge = function(a, b) {
    this.graph.setCellStyles(mxConstants.STYLE_ORTHOGONAL, b ? "1" : "0", [a])
};
mxGraphLayout.prototype.getParentOffset = function(a) {
    var b = new mxPoint;
    if (null != a && a != this.parent) {
        var c = this.graph.getModel();
        if (c.isAncestor(this.parent, a))
            for (var d = c.getGeometry(a); a != this.parent;) b.x += d.x, b.y += d.y, a = c.getParent(a), d = c.getGeometry(a)
    }
    return b
};
mxGraphLayout.prototype.setEdgePoints = function(a, b) {
    if (null != a) {
        var c = this.graph.model,
            d = c.getGeometry(a);
        null == d ? (d = new mxGeometry, d.setRelative(!0)) : d = d.clone();
        if (null != this.parent && null != b)
            for (var e = c.getParent(a), e = this.getParentOffset(e), f = 0; f < b.length; f++) b[f].x -= e.x, b[f].y -= e.y;
        d.points = b;
        c.setGeometry(a, d)
    }
};
mxGraphLayout.prototype.setVertexLocation = function(a, b, c) {
    var d = this.graph.getModel(),
        e = d.getGeometry(a),
        f = null;
    if (null != e) {
        f = new mxRectangle(b, c, e.width, e.height);
        if (this.useBoundingBox) {
            var g = this.graph.getView().getState(a);
            if (null != g && null != g.text && null != g.text.boundingBox) {
                var k = this.graph.getView().scale,
                    l = g.text.boundingBox;
                g.text.boundingBox.x < g.x && (b += (g.x - l.x) / k, f.width = l.width);
                g.text.boundingBox.y < g.y && (c += (g.y - l.y) / k, f.height = l.height)
            }
        }
        null != this.parent && (g = d.getParent(a), null != g && g !=
            this.parent && (g = this.getParentOffset(g), b -= g.x, c -= g.y));
        if (e.x != b || e.y != c) e = e.clone(), e.x = b, e.y = c, d.setGeometry(a, e)
    }
    return f
};
mxGraphLayout.prototype.getVertexBounds = function(a) {
    var b = this.graph.getModel().getGeometry(a);
    if (this.useBoundingBox) {
        var c = this.graph.getView().getState(a);
        if (null != c && null != c.text && null != c.text.boundingBox) var d = this.graph.getView().scale,
            e = c.text.boundingBox,
            f = Math.max(c.x - e.x, 0) / d,
            g = Math.max(c.y - e.y, 0) / d,
            k = Math.max(e.x + e.width - (c.x + c.width), 0) / d,
            c = Math.max(e.y + e.height - (c.y + c.height), 0) / d,
            b = new mxRectangle(b.x - f, b.y - g, b.width + f + k, b.height + g + c)
    }
    null != this.parent && (a = this.graph.getModel().getParent(a),
        b = b.clone(), null != a && a != this.parent && (a = this.getParentOffset(a), b.x += a.x, b.y += a.y));
    return new mxRectangle(b.x, b.y, b.width, b.height)
};
mxGraphLayout.prototype.arrangeGroups = function(a, b) {
    this.graph.getModel().beginUpdate();
    try {
        for (var c = a.length - 1; 0 <= c; c--) {
            var d = a[c],
                e = this.graph.getChildVertices(d),
                f = this.graph.getBoundingBoxFromGeometry(e),
                g = this.graph.getCellGeometry(d),
                k = 0,
                l = 0;
            if (this.graph.isSwimlane(d)) var m = this.graph.getStartSize(d),
                k = m.width,
                l = m.height;
            null != f && null != g && (g = g.clone(), g.x = g.x + f.x - b - k, g.y = g.y + f.y - b - l, g.width = f.width + 2 * b + k, g.height = f.height + 2 * b + l, this.graph.getModel().setGeometry(d, g), this.graph.moveCells(e,
                b + k - f.x, b + l - f.y))
        }
    } finally {
        this.graph.getModel().endUpdate()
    }
};

function mxStackLayout(a, b, c, d, e, f) {
    mxGraphLayout.call(this, a);
    this.horizontal = null != b ? b : !0;
    this.spacing = null != c ? c : 0;
    this.x0 = null != d ? d : 0;
    this.y0 = null != e ? e : 0;
    this.border = null != f ? f : 0
}
mxStackLayout.prototype = new mxGraphLayout;
mxStackLayout.prototype.constructor = mxStackLayout;
mxStackLayout.prototype.horizontal = null;
mxStackLayout.prototype.spacing = null;
mxStackLayout.prototype.x0 = null;
mxStackLayout.prototype.y0 = null;
mxStackLayout.prototype.border = 0;
mxStackLayout.prototype.marginTop = 0;
mxStackLayout.prototype.marginLeft = 0;
mxStackLayout.prototype.marginRight = 0;
mxStackLayout.prototype.marginBottom = 0;
mxStackLayout.prototype.keepFirstLocation = !1;
mxStackLayout.prototype.fill = !1;
mxStackLayout.prototype.resizeParent = !1;
mxStackLayout.prototype.resizeLast = !1;
mxStackLayout.prototype.wrap = null;
mxStackLayout.prototype.borderCollapse = !0;
mxStackLayout.prototype.isHorizontal = function() {
    return this.horizontal
};
mxStackLayout.prototype.moveCell = function(a, b, c) {
    var d = this.graph.getModel(),
        e = d.getParent(a),
        f = this.isHorizontal();
    if (null != a && null != e) {
        var g = 0,
            k = 0,
            l = d.getChildCount(e);
        b = f ? b : c;
        g = this.graph.getView().getState(e);
        null != g && (b -= f ? g.x : g.y);
        for (g = 0; g < l; g++)
            if (c = d.getChildAt(e, g), c != a && (c = d.getGeometry(c), null != c)) {
                c = f ? c.x + c.width / 2 : c.y + c.height / 2;
                if (k < b && c > b) break;
                k = c
            }
        f = e.getIndex(a);
        f = Math.max(0, g - (g > f ? 1 : 0));
        d.add(e, a, f)
    }
};
mxStackLayout.prototype.getParentSize = function(a) {
    var b = this.graph.getModel(),
        c = b.getGeometry(a);
    if (null != this.graph.container && (null == c && b.isLayer(a) || a == this.graph.getView().currentRoot)) c = new mxRectangle(0, 0, this.graph.container.offsetWidth - 1, this.graph.container.offsetHeight - 1);
    return c
};
mxStackLayout.prototype.execute = function(a) {
    if (null != a) {
        var b = this.getParentSize(a),
            c = this.isHorizontal(),
            d = this.graph.getModel(),
            e = null;
        null != b && (e = c ? b.height - this.marginTop - this.marginBottom : b.width - this.marginLeft - this.marginRight);
        var e = e - (2 * this.spacing + 2 * this.border),
            f = this.x0 + this.border + this.marginLeft,
            g = this.y0 + this.border + this.marginTop;
        if (this.graph.isSwimlane(a)) {
            var k = this.graph.getCellStyle(a),
                l = mxUtils.getNumber(k, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_STARTSIZE),
                k = 1 == mxUtils.getValue(k,
                    mxConstants.STYLE_HORIZONTAL, !0);
            null != b && (l = k ? Math.min(l, b.height) : Math.min(l, b.width));
            c == k && (e -= l);
            k ? g += l : f += l
        }
        d.beginUpdate();
        try {
            for (var l = 0, k = null, m = 0, n = d.getChildCount(a), p = 0; p < n; p++) {
                var q = d.getChildAt(a, p);
                if (!this.isVertexIgnored(q) && this.isVertexMovable(q)) {
                    var r = d.getGeometry(q);
                    if (null != r) {
                        r = r.clone();
                        if (null != this.wrap && null != k && (c && k.x + k.width + r.width + 2 * this.spacing > this.wrap || !c && k.y + k.height + r.height + 2 * this.spacing > this.wrap)) k = null, c ? g += l + this.spacing : f += l + this.spacing, l = 0;
                        var l =
                            Math.max(l, c ? r.height : r.width),
                            s = 0;
                        if (!this.borderCollapse) var t = this.graph.getCellStyle(q),
                            s = mxUtils.getNumber(t, mxConstants.STYLE_STROKEWIDTH, 1);
                        null != k ? c ? r.x = m + this.spacing + Math.floor(s / 2) : r.y = m + this.spacing + Math.floor(s / 2) : this.keepFirstLocation || (c ? r.x = f : r.y = g);
                        c ? r.y = g : r.x = f;
                        this.fill && null != e && (c ? r.height = e : r.width = e);
                        this.setChildGeometry(q, r);
                        k = r;
                        m = c ? k.x + k.width + Math.floor(s / 2) : k.y + k.height + Math.floor(s / 2)
                    }
                }
            }
            this.resizeParent && null != b && null != k && !this.graph.isCellCollapsed(a) ? this.updateParentGeometry(a,
                b, k) : this.resizeLast && (null != b && null != k) && (c ? k.width = b.width - k.x - this.spacing - this.marginRight - this.marginLeft : k.height = b.height - k.y - this.spacing - this.marginBottom)
        } finally {
            d.endUpdate()
        }
    }
};
mxStackLayout.prototype.setChildGeometry = function(a, b) {
    this.graph.getModel().setGeometry(a, b)
};
mxStackLayout.prototype.updateParentGeometry = function(a, b, c) {
    var d = this.isHorizontal(),
        e = this.graph.getModel();
    b = b.clone();
    d ? b.width = c.x + c.width + this.spacing + this.marginRight : b.height = c.y + c.height + this.spacing + this.marginBottom;
    e.setGeometry(a, b)
};

function mxPartitionLayout(a, b, c, d) {
    mxGraphLayout.call(this, a);
    this.horizontal = null != b ? b : !0;
    this.spacing = c || 0;
    this.border = d || 0
}
mxPartitionLayout.prototype = new mxGraphLayout;
mxPartitionLayout.prototype.constructor = mxPartitionLayout;
mxPartitionLayout.prototype.horizontal = null;
mxPartitionLayout.prototype.spacing = null;
mxPartitionLayout.prototype.border = null;
mxPartitionLayout.prototype.resizeVertices = !0;
mxPartitionLayout.prototype.isHorizontal = function() {
    return this.horizontal
};
mxPartitionLayout.prototype.moveCell = function(a, b, c) {
    c = this.graph.getModel();
    var d = c.getParent(a);
    if (null != a && null != d) {
        for (var e = 0, f = 0, g = c.getChildCount(d), e = 0; e < g; e++) {
            var k = c.getChildAt(d, e),
                k = this.getVertexBounds(k);
            if (null != k) {
                k = k.x + k.width / 2;
                if (f < b && k > b) break;
                f = k
            }
        }
        b = d.getIndex(a);
        b = Math.max(0, e - (e > b ? 1 : 0));
        c.add(d, a, b)
    }
};
mxPartitionLayout.prototype.execute = function(a) {
    var b = this.isHorizontal(),
        c = this.graph.getModel(),
        d = c.getGeometry(a);
    if (null != this.graph.container && (null == d && c.isLayer(a) || a == this.graph.getView().currentRoot)) d = new mxRectangle(0, 0, this.graph.container.offsetWidth - 1, this.graph.container.offsetHeight - 1);
    if (null != d) {
        for (var e = [], f = c.getChildCount(a), g = 0; g < f; g++) {
            var k = c.getChildAt(a, g);
            !this.isVertexIgnored(k) && this.isVertexMovable(k) && e.push(k)
        }
        f = e.length;
        if (0 < f) {
            var l = this.border,
                m = this.border,
                n = b ?
                d.height : d.width,
                n = n - 2 * this.border;
            a = this.graph.isSwimlane(a) ? this.graph.getStartSize(a) : new mxRectangle;
            n -= b ? a.height : a.width;
            l += a.width;
            m += a.height;
            a = this.border + (f - 1) * this.spacing;
            d = b ? (d.width - l - a) / f : (d.height - m - a) / f;
            if (0 < d) {
                c.beginUpdate();
                try {
                    for (g = 0; g < f; g++) {
                        var k = e[g],
                            p = c.getGeometry(k);
                        null != p && (p = p.clone(), p.x = l, p.y = m, b ? (this.resizeVertices && (p.width = d, p.height = n), l += d + this.spacing) : (this.resizeVertices && (p.height = d, p.width = n), m += d + this.spacing), c.setGeometry(k, p))
                    }
                } finally {
                    c.endUpdate()
                }
            }
        }
    }
};

function mxCompactTreeLayout(a, b, c) {
    mxGraphLayout.call(this, a);
    this.horizontal = null != b ? b : !0;
    this.invert = null != c ? c : !1
}
mxCompactTreeLayout.prototype = new mxGraphLayout;
mxCompactTreeLayout.prototype.constructor = mxCompactTreeLayout;
mxCompactTreeLayout.prototype.horizontal = null;
mxCompactTreeLayout.prototype.invert = null;
mxCompactTreeLayout.prototype.resizeParent = !0;
mxCompactTreeLayout.prototype.groupPadding = 10;
mxCompactTreeLayout.prototype.parentsChanged = null;
mxCompactTreeLayout.prototype.moveTree = !1;
mxCompactTreeLayout.prototype.visited = null;
mxCompactTreeLayout.prototype.levelDistance = 10;
mxCompactTreeLayout.prototype.nodeDistance = 20;
mxCompactTreeLayout.prototype.resetEdges = !0;
mxCompactTreeLayout.prototype.prefHozEdgeSep = 5;
mxCompactTreeLayout.prototype.prefVertEdgeOff = 4;
mxCompactTreeLayout.prototype.minEdgeJetty = 8;
mxCompactTreeLayout.prototype.channelBuffer = 4;
mxCompactTreeLayout.prototype.edgeRouting = !0;
mxCompactTreeLayout.prototype.sortEdges = !1;
mxCompactTreeLayout.prototype.alignRanks = !1;
mxCompactTreeLayout.prototype.maxRankHeight = null;
mxCompactTreeLayout.prototype.root = null;
mxCompactTreeLayout.prototype.node = null;
mxCompactTreeLayout.prototype.isVertexIgnored = function(a) {
    return mxGraphLayout.prototype.isVertexIgnored.apply(this, arguments) || 0 == this.graph.getConnections(a).length
};
mxCompactTreeLayout.prototype.isHorizontal = function() {
    return this.horizontal
};
mxCompactTreeLayout.prototype.execute = function(a, b) {
    this.parent = a;
    var c = this.graph.getModel();
    if (null == b)
        if (0 < this.graph.getEdges(a, c.getParent(a), this.invert, !this.invert, !1).length) this.root = a;
        else {
            var d = this.graph.findTreeRoots(a, !0, this.invert);
            if (0 < d.length)
                for (var e = 0; e < d.length; e++)
                    if (!this.isVertexIgnored(d[e]) && 0 < this.graph.getEdges(d[e], null, this.invert, !this.invert, !1).length) {
                        this.root = d[e];
                        break
                    }
        } else this.root = b; if (null != this.root) {
        this.parentsChanged = this.resizeParent ? {} : null;
        c.beginUpdate();
        try {
            if (this.visited = {}, this.node = this.dfs(this.root, a), this.alignRanks && (this.maxRankHeight = [], this.findRankHeights(this.node, 0), this.setCellHeights(this.node, 0)), null != this.node) {
                this.layout(this.node);
                var f = this.graph.gridSize,
                    d = f;
                if (!this.moveTree) {
                    var g = this.getVertexBounds(this.root);
                    null != g && (f = g.x, d = g.y)
                }
                g = null;
                g = this.isHorizontal() ? this.horizontalLayout(this.node, f, d) : this.verticalLayout(this.node, null, f, d);
                if (null != g) {
                    var k = e = 0;
                    0 > g.x && (e = Math.abs(f - g.x));
                    0 > g.y && (k = Math.abs(d - g.y));
                    (0 != e ||
                        0 != k) && this.moveNode(this.node, e, k);
                    this.resizeParent && this.adjustParents();
                    this.edgeRouting && this.localEdgeProcessing(this.node)
                }
            }
        } finally {
            c.endUpdate()
        }
    }
};
mxCompactTreeLayout.prototype.moveNode = function(a, b, c) {
    a.x += b;
    a.y += c;
    this.apply(a);
    for (a = a.child; null != a;) this.moveNode(a, b, c), a = a.next
};
mxCompactTreeLayout.prototype.sortOutgoingEdges = function(a, b) {
    var c = new mxDictionary;
    b.sort(function(b, e) {
        var f = b.getTerminal(b.getTerminal(!1) == a),
            g = c.get(f);
        null == g && (g = mxCellPath.create(f).split(mxCellPath.PATH_SEPARATOR), c.put(f, g));
        var f = e.getTerminal(e.getTerminal(!1) == a),
            k = c.get(f);
        null == k && (k = mxCellPath.create(f).split(mxCellPath.PATH_SEPARATOR), c.put(f, k));
        return mxCellPath.compare(g, k)
    })
};
mxCompactTreeLayout.prototype.findRankHeights = function(a, b) {
    if (null == this.maxRankHeight[b] || this.maxRankHeight[b] < a.height) this.maxRankHeight[b] = a.height;
    for (var c = a.child; null != c;) this.findRankHeights(c, b + 1), c = c.next
};
mxCompactTreeLayout.prototype.setCellHeights = function(a, b) {
    null != this.maxRankHeight[b] && this.maxRankHeight[b] > a.height && (a.height = this.maxRankHeight[b]);
    for (var c = a.child; null != c;) this.setCellHeights(c, b + 1), c = c.next
};
mxCompactTreeLayout.prototype.dfs = function(a, b) {
    var c = mxCellPath.create(a),
        d = null;
    if (null != a && null == this.visited[c] && !this.isVertexIgnored(a)) {
        this.visited[c] = a;
        var d = this.createNode(a),
            c = this.graph.getModel(),
            e = null,
            f = this.graph.getEdges(a, b, this.invert, !this.invert, !1, !0),
            g = this.graph.getView();
        this.sortEdges && this.sortOutgoingEdges(a, f);
        for (var k = 0; k < f.length; k++) {
            var l = f[k];
            if (!this.isEdgeIgnored(l)) {
                this.resetEdges && this.setEdgePoints(l, null);
                this.edgeRouting && (this.setEdgeStyleEnabled(l, !1),
                    this.setEdgePoints(l, null));
                var m = g.getState(l),
                    l = null != m ? m.getVisibleTerminal(this.invert) : g.getVisibleTerminal(l, this.invert),
                    m = this.dfs(l, b);
                null != m && null != c.getGeometry(l) && (null == e ? d.child = m : e.next = m, e = m)
            }
        }
    }
    return d
};
mxCompactTreeLayout.prototype.layout = function(a) {
    if (null != a) {
        for (var b = a.child; null != b;) this.layout(b), b = b.next;
        null != a.child ? this.attachParent(a, this.join(a)) : this.layoutLeaf(a)
    }
};
mxCompactTreeLayout.prototype.horizontalLayout = function(a, b, c, d) {
    a.x += b + a.offsetX;
    a.y += c + a.offsetY;
    d = this.apply(a, d);
    b = a.child;
    if (null != b) {
        d = this.horizontalLayout(b, a.x, a.y, d);
        c = a.y + b.offsetY;
        for (var e = b.next; null != e;) d = this.horizontalLayout(e, a.x + b.offsetX, c, d), c += e.offsetY, e = e.next
    }
    return d
};
mxCompactTreeLayout.prototype.verticalLayout = function(a, b, c, d, e) {
    a.x += c + a.offsetY;
    a.y += d + a.offsetX;
    e = this.apply(a, e);
    b = a.child;
    if (null != b) {
        e = this.verticalLayout(b, a, a.x, a.y, e);
        c = a.x + b.offsetY;
        for (d = b.next; null != d;) e = this.verticalLayout(d, a, c, a.y + b.offsetX, e), c += d.offsetY, d = d.next
    }
    return e
};
mxCompactTreeLayout.prototype.attachParent = function(a, b) {
    var c = this.nodeDistance + this.levelDistance,
        d = (b - a.width) / 2 - this.nodeDistance,
        e = d + a.width + 2 * this.nodeDistance - b;
    a.child.offsetX = c + a.height;
    a.child.offsetY = e;
    a.contour.upperHead = this.createLine(a.height, 0, this.createLine(c, e, a.contour.upperHead));
    a.contour.lowerHead = this.createLine(a.height, 0, this.createLine(c, d, a.contour.lowerHead))
};
mxCompactTreeLayout.prototype.layoutLeaf = function(a) {
    var b = 2 * this.nodeDistance;
    a.contour.upperTail = this.createLine(a.height + b, 0);
    a.contour.upperHead = a.contour.upperTail;
    a.contour.lowerTail = this.createLine(0, -a.width - b);
    a.contour.lowerHead = this.createLine(a.height + b, 0, a.contour.lowerTail)
};
mxCompactTreeLayout.prototype.join = function(a) {
    var b = 2 * this.nodeDistance,
        c = a.child;
    a.contour = c.contour;
    for (var d = c.width + b, e = d, c = c.next; null != c;) {
        var f = this.merge(a.contour, c.contour);
        c.offsetY = f + d;
        c.offsetX = 0;
        d = c.width + b;
        e += f + d;
        c = c.next
    }
    return e
};
mxCompactTreeLayout.prototype.merge = function(a, b) {
    for (var c = 0, d = 0, e = 0, f = a.lowerHead, g = b.upperHead; null != g && null != f;) {
        var k = this.offset(c, d, g.dx, g.dy, f.dx, f.dy),
            d = d + k,
            e = e + k;
        c + g.dx <= f.dx ? (c += g.dx, d += g.dy, g = g.next) : (c -= f.dx, d -= f.dy, f = f.next)
    }
    null != g ? (c = this.bridge(a.upperTail, 0, 0, g, c, d), a.upperTail = null != c.next ? b.upperTail : c, a.lowerTail = b.lowerTail) : (c = this.bridge(b.lowerTail, c, d, f, 0, 0), null == c.next && (a.lowerTail = c));
    a.lowerHead = b.lowerHead;
    return e
};
mxCompactTreeLayout.prototype.offset = function(a, b, c, d, e, f) {
    var g = 0;
    if (e <= a || 0 >= a + c) return 0;
    g = 0 < e * d - c * f ? 0 > a ? a * d / c - b : 0 < a ? a * f / e - b : -b : e < a + c ? f - (b + (e - a) * d / c) : e > a + c ? (c + a) * f / e - (b + d) : f - (b + d);
    return 0 < g ? g : 0
};
mxCompactTreeLayout.prototype.bridge = function(a, b, c, d, e, f) {
    b = e + d.dx - b;
    e = e = 0;
    0 == d.dx ? e = d.dy : (e = b * d.dy, e /= d.dx);
    b = this.createLine(b, e, d.next);
    a.next = this.createLine(0, f + d.dy - e - c, b);
    return b
};
mxCompactTreeLayout.prototype.createNode = function(a) {
    var b = {};
    b.cell = a;
    b.x = 0;
    b.y = 0;
    b.width = 0;
    b.height = 0;
    a = this.getVertexBounds(a);
    null != a && (this.isHorizontal() ? (b.width = a.height, b.height = a.width) : (b.width = a.width, b.height = a.height));
    b.offsetX = 0;
    b.offsetY = 0;
    b.contour = {};
    return b
};
mxCompactTreeLayout.prototype.apply = function(a, b) {
    var c = this.graph.getModel(),
        d = a.cell,
        e = c.getGeometry(d);
    null != d && null != e && (this.isVertexMovable(d) && (e = this.setVertexLocation(d, a.x, a.y), this.resizeParent && (c = c.getParent(d), d = mxCellPath.create(c), null == this.parentsChanged[d] && (this.parentsChanged[d] = c))), b = null == b ? new mxRectangle(e.x, e.y, e.width, e.height) : new mxRectangle(Math.min(b.x, e.x), Math.min(b.y, e.y), Math.max(b.x + b.width, e.x + e.width), Math.max(b.y + b.height, e.y + e.height)));
    return b
};
mxCompactTreeLayout.prototype.createLine = function(a, b, c) {
    var d = {};
    d.dx = a;
    d.dy = b;
    d.next = c;
    return d
};
mxCompactTreeLayout.prototype.adjustParents = function() {
    var a = [],
        b;
    for (b in this.parentsChanged) a.push(this.parentsChanged[b]);
    this.arrangeGroups(mxUtils.sortCells(a, !0), this.groupPadding)
};
mxCompactTreeLayout.prototype.localEdgeProcessing = function(a) {
    this.processNodeOutgoing(a);
    for (a = a.child; null != a;) this.localEdgeProcessing(a), a = a.next
};
mxCompactTreeLayout.prototype.processNodeOutgoing = function(a) {
    for (var b = a.child, c = a.cell, d = 0, e = []; null != b;) {
        d++;
        var f = b.x;
        this.horizontal && (f = b.y);
        e.push(new WeightedCellSorter(b, f));
        b = b.next
    }
    e.sort(WeightedCellSorter.prototype.compare);
    var f = a.width,
        g = (d + 1) * this.prefHozEdgeSep;
    f > g + 2 * this.prefHozEdgeSep && (f -= 2 * this.prefHozEdgeSep);
    a = f / d;
    b = a / 2;
    f > g + 2 * this.prefHozEdgeSep && (b += this.prefHozEdgeSep);
    for (var f = this.minEdgeJetty - this.prefVertEdgeOff, g = 0, k = this.getVertexBounds(c), l = 0; l < e.length; l++) {
        for (var m =
            e[l].cell.cell, n = this.getVertexBounds(m), m = this.graph.getEdgesBetween(c, m, !1), p = [], q = 0, r = 0, s = 0; s < m.length; s++) this.horizontal ? (q = k.x + k.width, r = k.y + b, p.push(new mxPoint(q, r)), q = k.x + k.width + f, p.push(new mxPoint(q, r)), r = n.y + n.height / 2) : (q = k.x + b, r = k.y + k.height, p.push(new mxPoint(q, r)), r = k.y + k.height + f, p.push(new mxPoint(q, r)), q = n.x + n.width / 2), p.push(new mxPoint(q, r)), this.setEdgePoints(m[s], p);
        l < d / 2 ? f += this.prefVertEdgeOff : l > d / 2 && (f -= this.prefVertEdgeOff);
        b += a;
        g = Math.max(g, f)
    }
};

function WeightedCellSorter(a, b) {
    this.cell = a;
    this.weightedValue = b
}
WeightedCellSorter.prototype.weightedValue = 0;
WeightedCellSorter.prototype.nudge = !1;
WeightedCellSorter.prototype.visited = !1;
WeightedCellSorter.prototype.rankIndex = null;
WeightedCellSorter.prototype.cell = null;
WeightedCellSorter.prototype.compare = function(a, b) {
    return null != a && null != b ? b.weightedValue > a.weightedValue ? 1 : b.weightedValue < a.weightedValue ? -1 : b.nudge ? 1 : -1 : 0
};

function mxRadialTreeLayout(a, b) {
    mxGraphLayout.call(this, a);
    this.invert = null != b ? b : !1
}
mxUtils.extend(mxRadialTreeLayout, mxGraphLayout);
mxRadialTreeLayout.prototype.invert = null;
mxRadialTreeLayout.prototype.angleOffset = 0.5;
mxRadialTreeLayout.prototype.rootx = 0;
mxRadialTreeLayout.prototype.rooty = 0;
mxRadialTreeLayout.prototype.levelDistance = 10;
mxRadialTreeLayout.prototype.nodeDistance = 20;
mxRadialTreeLayout.prototype.autoRadius = !1;
mxRadialTreeLayout.prototype.minradiusx = 80;
mxRadialTreeLayout.prototype.minradiusy = 80;
mxRadialTreeLayout.prototype.maxradiusx = 1E3;
mxRadialTreeLayout.prototype.maxradiusy = 1E3;
mxRadialTreeLayout.prototype.radiusx = 150;
mxRadialTreeLayout.prototype.radiusy = 150;
mxRadialTreeLayout.prototype.sortEdges = !1;
mxRadialTreeLayout.prototype.isVertexIgnored = function(a) {
    return mxGraphLayout.prototype.isVertexIgnored.apply(this, arguments) || 0 == this.graph.getConnections(a).length
};
mxRadialTreeLayout.prototype.execute = function(a, b) {
    this.parent = a;
    var c = this.graph.getModel();
    if (null == b)
        if (0 < this.graph.getEdges(a, c.getParent(a), this.invert, !this.invert, !1).length) b = a;
        else {
            var d = this.graph.findTreeRoots(a, !0, this.invert);
            if (0 < d.length)
                for (var e = 0; e < d.length; e++)
                    if (!this.isVertexIgnored(d[e]) && 0 < this.graph.getEdges(d[e], null, this.invert, !this.invert, !1).length) {
                        b = d[e];
                        break
                    }
        }
    if (null != b) {
        c.beginUpdate();
        try {
            this.depth = 0;
            var f = this.dfs(b, 0);
            this.rootx = f.x;
            this.rooty = f.y;
            this.autoRadius &&
                (this.radiusx = Math.min(this.maxradiusx, Math.max(this.minradiusx, this.rootx / this.depth)), this.radiusy = Math.min(this.maxradiusx, Math.max(this.minradiusy, this.rooty / this.depth)));
            null != f && this.layout(1, [f])
        } finally {
            c.endUpdate()
        }
    }
};
mxRadialTreeLayout.prototype.moveNode = function(a, b, c) {
    a.x += b;
    a.y += c;
    this.apply(a);
    for (a = a.child; null != a;) this.moveNode(a, b, c), a = a.next
};
mxRadialTreeLayout.prototype.sortOutgoingEdges = function(a, b) {
    var c = new mxDictionary;
    b.sort(function(b, e) {
        var f = b.getTerminal(b.getTerminal(!1) == a),
            g = c.get(f);
        null == g && (g = mxCellPath.create(f).split(mxCellPath.PATH_SEPARATOR), c.put(f, g));
        var f = e.getTerminal(e.getTerminal(!1) == a),
            k = c.get(f);
        null == k && (k = mxCellPath.create(f).split(mxCellPath.PATH_SEPARATOR), c.put(f, k));
        return mxCellPath.compare(g, k)
    })
};
mxRadialTreeLayout.prototype.dfs = function(a, b, c, d, e) {
    e = null != e ? e : [];
    var f = mxCellPath.create(a),
        g = null;
    b++;
    b > this.depth && (this.depth = b);
    if (null != a && null == e[f] && !this.isVertexIgnored(a)) {
        e[f] = a;
        g = this.createNode(a, c);
        c = this.graph.getModel();
        var f = null,
            k = this.graph.getEdges(a, d, this.invert, !this.invert, !1, !0),
            l = this.graph.getView();
        this.sortEdges && this.sortOutgoingEdges(a, k);
        for (a = 0; a < k.length; a++) {
            var m = k[a];
            if (!this.isEdgeIgnored(m)) {
                this.resetEdges && this.setEdgePoints(m, null);
                this.edgeRouting && (this.setEdgeStyleEnabled(m, !1), this.setEdgePoints(m, null));
                var n = l.getState(m),
                    m = null != n ? n.getVisibleTerminal(this.invert) : l.getVisibleTerminal(m, this.invert),
                    n = this.dfs(m, b, g, d, e);
                null != n && null != c.getGeometry(m) && (null == f ? g.child = n : f.next = n, f = n)
            }
        }
    }
    return g
};
mxRadialTreeLayout.prototype.layout = function(a, b) {
    for (var c = 0, d = null, e = null, f = [], g = 0; g < b.length; g++)
        for (var k = b[g], l = k.children, m = Math.max(k.rightBisector, k.rightTangent), l = (Math.min(k.leftBisector, k.leftTangent) - m) / l.length, n = 0, p = this.angleOffset; n < k.children.length; n++, p++) {
            var q = k.children[n];
            q.angle = m + p * l;
            if (this.moveRoot || 0 < a) q.x = this.rootx + a * this.radiusx * Math.cos(q.angle), q.y = this.rooty + a * this.radiusy * Math.sin(q.angle), this.apply(q);
            0 < q.children.length && (f.push(q), null == d && (d = q), q.rightBisector =
                q.angle - (q.angle - c) / 2, null != e && (e.leftBisector = q.rightBisector), c = 2 * Math.asin(a / (a + 1)), q.leftTangent = q.angle + c, q.rightTangent = q.angle - c, c = q.angle, e = q)
        }
    null != d && (d.rightBisector = (d.angle - (2 * Math.PI - e.angle)) / 2, e.leftBisector = 0 > d.rightBisector ? d.rightBisector + 4 * Math.PI : d.rightBisector + 2 * Math.PI);
    0 < f.length && this.layout(a + 1, f)
};
mxRadialTreeLayout.prototype.createNode = function(a, b) {
    var c = {};
    c.cell = a;
    c.geo = this.getVertexBounds(a);
    c.x = 0;
    c.y = 0;
    c.width = 0;
    c.height = 0;
    var d = this.getVertexBounds(a);
    null != d && (c.width = d.width, c.height = d.height, c.x = d.x + d.width / 2, c.y = d.y + d.height / 2);
    c.rightBisector = 0;
    c.rightTangent = 0;
    c.leftBisector = 2 * Math.PI;
    c.leftTangent = 2 * Math.PI;
    c.children = [];
    null != b && b.children.push(c);
    return c
};
mxRadialTreeLayout.prototype.localEdgeProcessing = function(a) {
    this.processNodeOutgoing(a);
    for (a = a.child; null != a;) this.localEdgeProcessing(a), a = a.next
};
mxRadialTreeLayout.prototype.processNodeOutgoing = function(a) {
    for (var b = a.child, c = a.cell, d = 0, e = []; null != b;) {
        d++;
        var f = b.x;
        this.horizontal && (f = b.y);
        e.push(new WeightedCellSorter(b, f));
        b = b.next
    }
    e.sort(WeightedCellSorter.prototype.compare);
    var f = a.width,
        g = (d + 1) * this.prefHozEdgeSep;
    f > g + 2 * this.prefHozEdgeSep && (f -= 2 * this.prefHozEdgeSep);
    a = f / d;
    b = a / 2;
    f > g + 2 * this.prefHozEdgeSep && (b += this.prefHozEdgeSep);
    for (var f = this.minEdgeJetty - this.prefVertEdgeOff, g = 0, k = this.getVertexBounds(c), l = 0; l < e.length; l++) {
        for (var m =
            e[l].cell.cell, n = this.getVertexBounds(m), m = this.graph.getEdgesBetween(c, m, !1), p = [], q = 0, r = 0, s = 0; s < m.length; s++) this.horizontal ? (q = k.x + k.width, r = k.y + b, p.push(new mxPoint(q, r)), q = k.x + k.width + f, p.push(new mxPoint(q, r)), r = n.y + n.height / 2) : (q = k.x + b, r = k.y + k.height, p.push(new mxPoint(q, r)), r = k.y + k.height + f, p.push(new mxPoint(q, r)), q = n.x + n.width / 2), p.push(new mxPoint(q, r)), this.setEdgePoints(m[s], p);
        l < d / 2 ? f += this.prefVertEdgeOff : l > d / 2 && (f -= this.prefVertEdgeOff);
        b += a;
        g = Math.max(g, f)
    }
};
mxRadialTreeLayout.prototype.apply = function(a) {
    var b = this.graph.getModel(),
        c = a.cell,
        b = b.getGeometry(c);
    null != c && (null != b && this.isVertexMovable(c)) && this.setVertexLocation(c, a.x - a.width / 2, a.y - a.height / 2)
};

function WeightedCellSorter(a, b) {
    this.cell = a;
    this.weightedValue = b
}
WeightedCellSorter.prototype.weightedValue = 0;
WeightedCellSorter.prototype.nudge = !1;
WeightedCellSorter.prototype.visited = !1;
WeightedCellSorter.prototype.rankIndex = null;
WeightedCellSorter.prototype.cell = null;
WeightedCellSorter.prototype.compare = function(a, b) {
    return null != a && null != b ? b.weightedValue > a.weightedValue ? 1 : b.weightedValue < a.weightedValue ? -1 : b.nudge ? 1 : -1 : 0
};

function mxFastOrganicLayout(a) {
    mxGraphLayout.call(this, a)
}
mxFastOrganicLayout.prototype = new mxGraphLayout;
mxFastOrganicLayout.prototype.constructor = mxFastOrganicLayout;
mxFastOrganicLayout.prototype.useInputOrigin = !0;
mxFastOrganicLayout.prototype.resetEdges = !0;
mxFastOrganicLayout.prototype.disableEdgeStyle = !0;
mxFastOrganicLayout.prototype.forceConstant = 50;
mxFastOrganicLayout.prototype.forceConstantSquared = 0;
mxFastOrganicLayout.prototype.minDistanceLimit = 2;
mxFastOrganicLayout.prototype.maxDistanceLimit = 500;
mxFastOrganicLayout.prototype.minDistanceLimitSquared = 4;
mxFastOrganicLayout.prototype.initialTemp = 200;
mxFastOrganicLayout.prototype.temperature = 0;
mxFastOrganicLayout.prototype.maxIterations = 0;
mxFastOrganicLayout.prototype.iteration = 0;
mxFastOrganicLayout.prototype.allowedToRun = !0;
mxFastOrganicLayout.prototype.isVertexIgnored = function(a) {
    return mxGraphLayout.prototype.isVertexIgnored.apply(this, arguments) || 0 == this.graph.getConnections(a).length
};
mxFastOrganicLayout.prototype.execute = function(a) {
    var b = this.graph.getModel();
    this.vertexArray = [];
    for (var c = this.graph.getChildVertices(a), d = 0; d < c.length; d++) this.isVertexIgnored(c[d]) || this.vertexArray.push(c[d]);
    var e = this.useInputOrigin ? this.graph.getBoundingBoxFromGeometry(this.vertexArray) : null,
        f = this.vertexArray.length;
    this.indices = [];
    this.dispX = [];
    this.dispY = [];
    this.cellLocation = [];
    this.isMoveable = [];
    this.neighbours = [];
    this.radius = [];
    this.radiusSquared = [];
    0.001 > this.forceConstant && (this.forceConstant =
        0.001);
    this.forceConstantSquared = this.forceConstant * this.forceConstant;
    for (d = 0; d < this.vertexArray.length; d++) {
        var g = this.vertexArray[d];
        this.cellLocation[d] = [];
        var k = mxCellPath.create(g);
        this.indices[k] = d;
        var l = this.getVertexBounds(g),
            m = l.width,
            n = l.height,
            p = l.x,
            q = l.y;
        this.cellLocation[d][0] = p + m / 2;
        this.cellLocation[d][1] = q + n / 2;
        this.radius[d] = Math.min(m, n);
        this.radiusSquared[d] = this.radius[d] * this.radius[d]
    }
    b.beginUpdate();
    try {
        for (d = 0; d < f; d++) {
            this.dispX[d] = 0;
            this.dispY[d] = 0;
            this.isMoveable[d] = this.isVertexMovable(this.vertexArray[d]);
            var r = this.graph.getConnections(this.vertexArray[d], a),
                c = this.graph.getOpposites(r, this.vertexArray[d]);
            this.neighbours[d] = [];
            for (m = 0; m < c.length; m++) {
                this.resetEdges && this.graph.resetEdge(r[m]);
                this.disableEdgeStyle && this.setEdgeStyleEnabled(r[m], !1);
                var k = mxCellPath.create(c[m]),
                    s = this.indices[k];
                this.neighbours[d][m] = null != s ? s : d
            }
        }
        this.temperature = this.initialTemp;
        0 == this.maxIterations && (this.maxIterations = 20 * Math.sqrt(f));
        for (this.iteration = 0; this.iteration < this.maxIterations; this.iteration++) {
            if (!this.allowedToRun) return;
            this.calcRepulsion();
            this.calcAttraction();
            this.calcPositions();
            this.reduceTemperature()
        }
        a = c = null;
        for (d = 0; d < this.vertexArray.length; d++) g = this.vertexArray[d], this.isVertexMovable(g) && (l = this.getVertexBounds(g), null != l && (this.cellLocation[d][0] -= l.width / 2, this.cellLocation[d][1] -= l.height / 2, p = this.graph.snap(this.cellLocation[d][0]), q = this.graph.snap(this.cellLocation[d][1]), this.setVertexLocation(g, p, q), c = null == c ? p : Math.min(c, p), a = null == a ? q : Math.min(a, q)));
        d = -(c || 0) + 1;
        g = -(a || 0) + 1;
        null != e && (d += e.x,
            g += e.y);
        this.graph.moveCells(this.vertexArray, d, g)
    } finally {
        b.endUpdate()
    }
};
mxFastOrganicLayout.prototype.calcPositions = function() {
    for (var a = 0; a < this.vertexArray.length; a++)
        if (this.isMoveable[a]) {
            var b = Math.sqrt(this.dispX[a] * this.dispX[a] + this.dispY[a] * this.dispY[a]);
            0.001 > b && (b = 0.001);
            var c = this.dispX[a] / b * Math.min(b, this.temperature),
                b = this.dispY[a] / b * Math.min(b, this.temperature);
            this.dispX[a] = 0;
            this.dispY[a] = 0;
            this.cellLocation[a][0] += c;
            this.cellLocation[a][1] += b
        }
};
mxFastOrganicLayout.prototype.calcAttraction = function() {
    for (var a = 0; a < this.vertexArray.length; a++)
        for (var b = 0; b < this.neighbours[a].length; b++) {
            var c = this.neighbours[a][b];
            if (a != c && this.isMoveable[a] && this.isMoveable[c]) {
                var d = this.cellLocation[a][0] - this.cellLocation[c][0],
                    e = this.cellLocation[a][1] - this.cellLocation[c][1],
                    f = d * d + e * e - this.radiusSquared[a] - this.radiusSquared[c];
                f < this.minDistanceLimitSquared && (f = this.minDistanceLimitSquared);
                var g = Math.sqrt(f),
                    f = f / this.forceConstant,
                    d = d / g * f,
                    e = e / g * f;
                this.dispX[a] -= d;
                this.dispY[a] -= e;
                this.dispX[c] += d;
                this.dispY[c] += e
            }
        }
};
mxFastOrganicLayout.prototype.calcRepulsion = function() {
    for (var a = this.vertexArray.length, b = 0; b < a; b++)
        for (var c = b; c < a; c++) {
            if (!this.allowedToRun) return;
            if (c != b && this.isMoveable[b] && this.isMoveable[c]) {
                var d = this.cellLocation[b][0] - this.cellLocation[c][0],
                    e = this.cellLocation[b][1] - this.cellLocation[c][1];
                0 == d && (d = 0.01 + Math.random());
                0 == e && (e = 0.01 + Math.random());
                var f = Math.sqrt(d * d + e * e),
                    g = f - this.radius[b] - this.radius[c];
                g > this.maxDistanceLimit || (g < this.minDistanceLimit && (g = this.minDistanceLimit), g = this.forceConstantSquared /
                    g, d = d / f * g, e = e / f * g, this.dispX[b] += d, this.dispY[b] += e, this.dispX[c] -= d, this.dispY[c] -= e)
            }
        }
};
mxFastOrganicLayout.prototype.reduceTemperature = function() {
    this.temperature = this.initialTemp * (1 - this.iteration / this.maxIterations)
};

function mxCircleLayout(a, b) {
    mxGraphLayout.call(this, a);
    this.radius = null != b ? b : 100
}
mxCircleLayout.prototype = new mxGraphLayout;
mxCircleLayout.prototype.constructor = mxCircleLayout;
mxCircleLayout.prototype.radius = null;
mxCircleLayout.prototype.moveCircle = !1;
mxCircleLayout.prototype.x0 = 0;
mxCircleLayout.prototype.y0 = 0;
mxCircleLayout.prototype.resetEdges = !0;
mxCircleLayout.prototype.disableEdgeStyle = !0;
mxCircleLayout.prototype.execute = function(a) {
    var b = this.graph.getModel();
    b.beginUpdate();
    try {
        for (var c = 0, d = null, e = null, f = [], g = b.getChildCount(a), k = 0; k < g; k++) {
            var l = b.getChildAt(a, k);
            if (this.isVertexIgnored(l)) this.isEdgeIgnored(l) || (this.resetEdges && this.graph.resetEdge(l), this.disableEdgeStyle && this.setEdgeStyleEnabled(l, !1));
            else {
                f.push(l);
                var m = this.getVertexBounds(l),
                    d = null == d ? m.y : Math.min(d, m.y),
                    e = null == e ? m.x : Math.min(e, m.x),
                    c = Math.max(c, Math.max(m.width, m.height))
            }
        }
        var n = this.getRadius(f.length,
            c);
        this.moveCircle && (e = this.x0, d = this.y0);
        this.circle(f, n, e, d)
    } finally {
        b.endUpdate()
    }
};
mxCircleLayout.prototype.getRadius = function(a, b) {
    return Math.max(a * b / Math.PI, this.radius)
};
mxCircleLayout.prototype.circle = function(a, b, c, d) {
    for (var e = a.length, f = 2 * Math.PI / e, g = 0; g < e; g++) this.isVertexMovable(a[g]) && this.setVertexLocation(a[g], c + b + b * Math.sin(g * f), d + b + b * Math.cos(g * f))
};

function mxParallelEdgeLayout(a) {
    mxGraphLayout.call(this, a)
}
mxParallelEdgeLayout.prototype = new mxGraphLayout;
mxParallelEdgeLayout.prototype.constructor = mxParallelEdgeLayout;
mxParallelEdgeLayout.prototype.spacing = 20;
mxParallelEdgeLayout.prototype.execute = function(a) {
    a = this.findParallels(a);
    this.graph.model.beginUpdate();
    try {
        for (var b in a) {
            var c = a[b];
            1 < c.length && this.layout(c)
        }
    } finally {
        this.graph.model.endUpdate()
    }
};
mxParallelEdgeLayout.prototype.findParallels = function(a) {
    for (var b = this.graph.getModel(), c = [], d = b.getChildCount(a), e = 0; e < d; e++) {
        var f = b.getChildAt(a, e);
        if (!this.isEdgeIgnored(f)) {
            var g = this.getEdgeId(f);
            null != g && (null == c[g] && (c[g] = []), c[g].push(f))
        }
    }
    return c
};
mxParallelEdgeLayout.prototype.getEdgeId = function(a) {
    var b = this.graph.getView(),
        c = b.getVisibleTerminal(a, !0);
    a = b.getVisibleTerminal(a, !1);
    return null != c && null != a ? (c = mxCellPath.create(c), a = mxCellPath.create(a), c > a ? a + "-" + c : c + "-" + a) : null
};
mxParallelEdgeLayout.prototype.layout = function(a) {
    var b = a[0],
        c = this.graph.getView(),
        d = this.graph.getModel(),
        e = d.getGeometry(c.getVisibleTerminal(b, !0)),
        d = d.getGeometry(c.getVisibleTerminal(b, !1));
    if (e == d)
        for (var b = e.x + e.width + this.spacing, c = e.y + e.height / 2, f = 0; f < a.length; f++) this.route(a[f], b, c), b += this.spacing;
    else if (null != e && null != d) {
        var b = e.x + e.width / 2,
            c = e.y + e.height / 2,
            f = d.x + d.width / 2 - b,
            g = d.y + d.height / 2 - c,
            d = Math.sqrt(f * f + g * g);
        if (0 < d) {
            e = g * this.spacing / d;
            d = f * this.spacing / d;
            b = b + f / 2 + e * (a.length - 1) /
                2;
            c = c + g / 2 - d * (a.length - 1) / 2;
            for (f = 0; f < a.length; f++) this.route(a[f], b, c), b -= e, c += d
        }
    }
};
mxParallelEdgeLayout.prototype.route = function(a, b, c) {
    this.graph.isCellMovable(a) && this.setEdgePoints(a, [new mxPoint(b, c)])
};

function mxCompositeLayout(a, b, c) {
    mxGraphLayout.call(this, a);
    this.layouts = b;
    this.master = c
}
mxCompositeLayout.prototype = new mxGraphLayout;
mxCompositeLayout.prototype.constructor = mxCompositeLayout;
mxCompositeLayout.prototype.layouts = null;
mxCompositeLayout.prototype.master = null;
mxCompositeLayout.prototype.moveCell = function(a, b, c) {
    null != this.master ? this.master.move.apply(this.master, arguments) : this.layouts[0].move.apply(this.layouts[0], arguments)
};
mxCompositeLayout.prototype.execute = function(a) {
    var b = this.graph.getModel();
    b.beginUpdate();
    try {
        for (var c = 0; c < this.layouts.length; c++) this.layouts[c].execute.apply(this.layouts[c], arguments)
    } finally {
        b.endUpdate()
    }
};

function mxEdgeLabelLayout(a, b) {
    mxGraphLayout.call(this, a)
}
mxEdgeLabelLayout.prototype = new mxGraphLayout;
mxEdgeLabelLayout.prototype.constructor = mxEdgeLabelLayout;
mxEdgeLabelLayout.prototype.execute = function(a) {
    for (var b = this.graph.view, c = this.graph.getModel(), d = [], e = [], f = c.getChildCount(a), g = 0; g < f; g++) {
        var k = c.getChildAt(a, g),
            l = b.getState(k);
        null != l && (this.isVertexIgnored(k) ? this.isEdgeIgnored(k) || d.push(l) : e.push(l))
    }
    this.placeLabels(e, d)
};
mxEdgeLabelLayout.prototype.placeLabels = function(a, b) {
    var c = this.graph.getModel();
    c.beginUpdate();
    try {
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (null != e && null != e.text && null != e.text.boundingBox)
                for (var f = 0; f < a.length; f++) {
                    var g = a[f];
                    null != g && this.avoid(e, g)
                }
        }
    } finally {
        c.endUpdate()
    }
};
mxEdgeLabelLayout.prototype.avoid = function(a, b) {
    var c = this.graph.getModel(),
        d = a.text.boundingBox;
    if (mxUtils.intersects(d, b)) {
        var e = -d.y - d.height + b.y,
            f = -d.y + b.y + b.height,
            e = Math.abs(e) < Math.abs(f) ? e : f,
            f = -d.x - d.width + b.x,
            d = -d.x + b.x + b.width,
            d = Math.abs(f) < Math.abs(d) ? f : d;
        Math.abs(d) < Math.abs(e) ? e = 0 : d = 0;
        f = c.getGeometry(a.cell);
        null != f && (f = f.clone(), null != f.offset ? (f.offset.x += d, f.offset.y += e) : f.offset = new mxPoint(d, e), c.setGeometry(a.cell, f))
    }
};

function mxGraphAbstractHierarchyCell() {
    this.x = [];
    this.y = [];
    this.temp = []
}
mxGraphAbstractHierarchyCell.prototype.maxRank = -1;
mxGraphAbstractHierarchyCell.prototype.minRank = -1;
mxGraphAbstractHierarchyCell.prototype.x = null;
mxGraphAbstractHierarchyCell.prototype.y = null;
mxGraphAbstractHierarchyCell.prototype.width = 0;
mxGraphAbstractHierarchyCell.prototype.height = 0;
mxGraphAbstractHierarchyCell.prototype.nextLayerConnectedCells = null;
mxGraphAbstractHierarchyCell.prototype.previousLayerConnectedCells = null;
mxGraphAbstractHierarchyCell.prototype.temp = null;
mxGraphAbstractHierarchyCell.prototype.getNextLayerConnectedCells = function(a) {
    return null
};
mxGraphAbstractHierarchyCell.prototype.getPreviousLayerConnectedCells = function(a) {
    return null
};
mxGraphAbstractHierarchyCell.prototype.isEdge = function() {
    return !1
};
mxGraphAbstractHierarchyCell.prototype.isVertex = function() {
    return !1
};
mxGraphAbstractHierarchyCell.prototype.getGeneralPurposeVariable = function(a) {
    return null
};
mxGraphAbstractHierarchyCell.prototype.setGeneralPurposeVariable = function(a, b) {
    return null
};
mxGraphAbstractHierarchyCell.prototype.setX = function(a, b) {
    this.isVertex() ? this.x[0] = b : this.isEdge() && (this.x[a - this.minRank - 1] = b)
};
mxGraphAbstractHierarchyCell.prototype.getX = function(a) {
    return this.isVertex() ? this.x[0] : this.isEdge() ? this.x[a - this.minRank - 1] : 0
};
mxGraphAbstractHierarchyCell.prototype.setY = function(a, b) {
    this.isVertex() ? this.y[0] = b : this.isEdge() && (this.y[a - this.minRank - 1] = b)
};

function mxGraphHierarchyNode(a) {
    mxGraphAbstractHierarchyCell.apply(this, arguments);
    this.cell = a;
    this.id = mxObjectIdentity.get(a);
    this.connectsAsTarget = [];
    this.connectsAsSource = []
}
mxGraphHierarchyNode.prototype = new mxGraphAbstractHierarchyCell;
mxGraphHierarchyNode.prototype.constructor = mxGraphHierarchyNode;
mxGraphHierarchyNode.prototype.cell = null;
mxGraphHierarchyNode.prototype.id = null;
mxGraphHierarchyNode.prototype.connectsAsTarget = null;
mxGraphHierarchyNode.prototype.connectsAsSource = null;
mxGraphHierarchyNode.prototype.hashCode = !1;
mxGraphHierarchyNode.prototype.getRankValue = function(a) {
    return this.maxRank
};
mxGraphHierarchyNode.prototype.getNextLayerConnectedCells = function(a) {
    if (null == this.nextLayerConnectedCells) {
        this.nextLayerConnectedCells = [];
        this.nextLayerConnectedCells[0] = [];
        for (var b = 0; b < this.connectsAsTarget.length; b++) {
            var c = this.connectsAsTarget[b]; - 1 == c.maxRank || c.maxRank == a + 1 ? this.nextLayerConnectedCells[0].push(c.source) : this.nextLayerConnectedCells[0].push(c)
        }
    }
    return this.nextLayerConnectedCells[0]
};
mxGraphHierarchyNode.prototype.getPreviousLayerConnectedCells = function(a) {
    if (null == this.previousLayerConnectedCells) {
        this.previousLayerConnectedCells = [];
        this.previousLayerConnectedCells[0] = [];
        for (var b = 0; b < this.connectsAsSource.length; b++) {
            var c = this.connectsAsSource[b]; - 1 == c.minRank || c.minRank == a - 1 ? this.previousLayerConnectedCells[0].push(c.target) : this.previousLayerConnectedCells[0].push(c)
        }
    }
    return this.previousLayerConnectedCells[0]
};
mxGraphHierarchyNode.prototype.isVertex = function() {
    return !0
};
mxGraphHierarchyNode.prototype.getGeneralPurposeVariable = function(a) {
    return this.temp[0]
};
mxGraphHierarchyNode.prototype.setGeneralPurposeVariable = function(a, b) {
    this.temp[0] = b
};
mxGraphHierarchyNode.prototype.isAncestor = function(a) {
    if (null != a && null != this.hashCode && null != a.hashCode && this.hashCode.length < a.hashCode.length) {
        if (this.hashCode == a.hashCode) return !0;
        if (null == this.hashCode || null == this.hashCode) return !1;
        for (var b = 0; b < this.hashCode.length; b++)
            if (this.hashCode[b] != a.hashCode[b]) return !1;
        return !0
    }
    return !1
};
mxGraphHierarchyNode.prototype.getCoreCell = function() {
    return this.cell
};

function mxGraphHierarchyEdge(a) {
    mxGraphAbstractHierarchyCell.apply(this, arguments);
    this.edges = a;
    this.ids = [];
    for (var b = 0; b < a.length; b++) this.ids.push(mxObjectIdentity.get(a[b]))
}
mxGraphHierarchyEdge.prototype = new mxGraphAbstractHierarchyCell;
mxGraphHierarchyEdge.prototype.constructor = mxGraphHierarchyEdge;
mxGraphHierarchyEdge.prototype.edges = null;
mxGraphHierarchyEdge.prototype.ids = null;
mxGraphHierarchyEdge.prototype.source = null;
mxGraphHierarchyEdge.prototype.target = null;
mxGraphHierarchyEdge.prototype.isReversed = !1;
mxGraphHierarchyEdge.prototype.invert = function(a) {
    a = this.source;
    this.source = this.target;
    this.target = a;
    this.isReversed = !this.isReversed
};
mxGraphHierarchyEdge.prototype.getNextLayerConnectedCells = function(a) {
    if (null == this.nextLayerConnectedCells) {
        this.nextLayerConnectedCells = [];
        for (var b = 0; b < this.temp.length; b++) this.nextLayerConnectedCells[b] = [], b == this.temp.length - 1 ? this.nextLayerConnectedCells[b].push(this.source) : this.nextLayerConnectedCells[b].push(this)
    }
    return this.nextLayerConnectedCells[a - this.minRank - 1]
};
mxGraphHierarchyEdge.prototype.getPreviousLayerConnectedCells = function(a) {
    if (null == this.previousLayerConnectedCells) {
        this.previousLayerConnectedCells = [];
        for (var b = 0; b < this.temp.length; b++) this.previousLayerConnectedCells[b] = [], 0 == b ? this.previousLayerConnectedCells[b].push(this.target) : this.previousLayerConnectedCells[b].push(this)
    }
    return this.previousLayerConnectedCells[a - this.minRank - 1]
};
mxGraphHierarchyEdge.prototype.isEdge = function() {
    return !0
};
mxGraphHierarchyEdge.prototype.getGeneralPurposeVariable = function(a) {
    return this.temp[a - this.minRank - 1]
};
mxGraphHierarchyEdge.prototype.setGeneralPurposeVariable = function(a, b) {
    this.temp[a - this.minRank - 1] = b
};
mxGraphHierarchyEdge.prototype.getCoreCell = function() {
    return null != this.edges && 0 < this.edges.length ? this.edges[0] : null
};

function mxGraphHierarchyModel(a, b, c, d, e) {
    a.getGraph();
    this.tightenToSource = e;
    this.roots = c;
    this.parent = d;
    this.vertexMapper = new mxDictionary;
    this.edgeMapper = new mxDictionary;
    this.maxRank = 0;
    c = [];
    null == b && (b = this.graph.getChildVertices(d));
    this.maxRank = this.SOURCESCANSTARTRANK;
    this.createInternalCells(a, b, c);
    for (d = 0; d < b.length; d++) {
        e = c[d].connectsAsSource;
        for (var f = 0; f < e.length; f++) {
            var g = e[f],
                k = g.edges;
            if (null != k && 0 < k.length) {
                var k = k[0],
                    l = a.getVisibleTerminal(k, !1),
                    l = this.vertexMapper.get(l);
                c[d] ==
                    l && (l = a.getVisibleTerminal(k, !0), l = this.vertexMapper.get(l));
                null != l && c[d] != l && (g.target = l, 0 == l.connectsAsTarget.length && (l.connectsAsTarget = []), 0 > mxUtils.indexOf(l.connectsAsTarget, g) && l.connectsAsTarget.push(g))
            }
        }
        c[d].temp[0] = 1
    }
}
mxGraphHierarchyModel.prototype.maxRank = null;
mxGraphHierarchyModel.prototype.vertexMapper = null;
mxGraphHierarchyModel.prototype.edgeMapper = null;
mxGraphHierarchyModel.prototype.ranks = null;
mxGraphHierarchyModel.prototype.roots = null;
mxGraphHierarchyModel.prototype.parent = null;
mxGraphHierarchyModel.prototype.dfsCount = 0;
mxGraphHierarchyModel.prototype.SOURCESCANSTARTRANK = 1E8;
mxGraphHierarchyModel.prototype.tightenToSource = !1;
mxGraphHierarchyModel.prototype.createInternalCells = function(a, b, c) {
    for (var d = a.getGraph(), e = 0; e < b.length; e++) {
        c[e] = new mxGraphHierarchyNode(b[e]);
        this.vertexMapper.put(b[e], c[e]);
        var f = a.getEdges(b[e]);
        c[e].connectsAsSource = [];
        for (var g = 0; g < f.length; g++) {
            var k = a.getVisibleTerminal(f[g], !1);
            if (k != b[e] && a.graph.model.isVertex(k) && !a.isVertexIgnored(k)) {
                var l = a.getEdgesBetween(b[e], k, !1),
                    k = a.getEdgesBetween(b[e], k, !0);
                if (null != l && 0 < l.length && null == this.edgeMapper.get(l[0]) && 2 * k.length >= l.length) {
                    for (var k =
                        new mxGraphHierarchyEdge(l), m = 0; m < l.length; m++) {
                        var n = l[m];
                        this.edgeMapper.put(n, k);
                        d.resetEdge(n);
                        a.disableEdgeStyle && (a.setEdgeStyleEnabled(n, !1), a.setOrthogonalEdge(n, !0))
                    }
                    k.source = c[e];
                    0 > mxUtils.indexOf(c[e].connectsAsSource, k) && c[e].connectsAsSource.push(k)
                }
            }
        }
        c[e].temp[0] = 0
    }
};
mxGraphHierarchyModel.prototype.initialRank = function() {
    var a = [];
    if (null != this.roots)
        for (var b = 0; b < this.roots.length; b++) {
            var c = this.vertexMapper.get(this.roots[b]);
            null != c && a.push(c)
        }
    for (var d = this.vertexMapper.getValues(), b = 0; b < d.length; b++) d[b].temp[0] = -1;
    for (var e = a.slice(); 0 < a.length;) {
        var c = a[0],
            f, g;
        f = c.connectsAsTarget;
        g = c.connectsAsSource;
        for (var k = !0, l = this.SOURCESCANSTARTRANK, b = 0; b < f.length; b++) {
            var m = f[b];
            if (5270620 == m.temp[0]) m = m.source, l = Math.min(l, m.temp[0] - 1);
            else {
                k = !1;
                break
            }
        }
        if (k) {
            c.temp[0] =
                l;
            this.maxRank = Math.min(this.maxRank, l);
            if (null != g)
                for (b = 0; b < g.length; b++) m = g[b], m.temp[0] = 5270620, m = m.target, -1 == m.temp[0] && (a.push(m), m.temp[0] = -2);
            a.shift()
        } else if (b = a.shift(), a.push(c), b == c && 1 == a.length) break
    }
    for (b = 0; b < d.length; b++) d[b].temp[0] -= this.maxRank;
    for (b = 0; b < e.length; b++) {
        c = e[b];
        a = 0;
        f = c.connectsAsSource;
        for (d = 0; d < f.length; d++) m = f[d], m = m.target, c.temp[0] = Math.max(a, m.temp[0] + 1), a = c.temp[0]
    }
    this.maxRank = this.SOURCESCANSTARTRANK - this.maxRank
};
mxGraphHierarchyModel.prototype.fixRanks = function() {
    var a = [];
    this.ranks = [];
    for (var b = 0; b < this.maxRank + 1; b++) a[b] = [], this.ranks[b] = a[b];
    var c = null;
    if (null != this.roots)
        for (var d = this.roots, c = [], b = 0; b < d.length; b++) {
            var e = this.vertexMapper.get(d[b]);
            c[b] = e
        }
    this.visit(function(b, c, d, e, m) {
        0 == m && (0 > c.maxRank && 0 > c.minRank) && (a[c.temp[0]].push(c), c.maxRank = c.temp[0], c.minRank = c.temp[0], c.temp[0] = a[c.maxRank].length - 1);
        if (null != b && null != d && 1 < b.maxRank - c.maxRank) {
            d.maxRank = b.maxRank;
            d.minRank = c.maxRank;
            d.temp = [];
            d.x = [];
            d.y = [];
            for (b = d.minRank + 1; b < d.maxRank; b++) a[b].push(d), d.setGeneralPurposeVariable(b, a[b].length - 1)
        }
    }, c, !1, null)
};
mxGraphHierarchyModel.prototype.visit = function(a, b, c, d) {
    if (null != b) {
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            null != f && (null == d && (d = {}), c ? (f.hashCode = [], f.hashCode[0] = this.dfsCount, f.hashCode[1] = e, this.extendedDfs(null, f, null, a, d, f.hashCode, e, 0)) : this.dfs(null, f, null, a, d, 0))
        }
        this.dfsCount++
    }
};
mxGraphHierarchyModel.prototype.dfs = function(a, b, c, d, e, f) {
    if (null != b) {
        var g = b.id;
        if (null == e[g]) {
            e[g] = b;
            d(a, b, c, f, 0);
            a = b.connectsAsSource.slice();
            for (c = 0; c < a.length; c++) g = a[c], this.dfs(b, g.target, g, d, e, f + 1)
        } else d(a, b, c, f, 1)
    }
};
mxGraphHierarchyModel.prototype.extendedDfs = function(a, b, c, d, e, f, g, k) {
    if (null != b) {
        if (null != a && (null == b.hashCode || b.hashCode[0] != a.hashCode[0])) f = a.hashCode.length + 1, b.hashCode = a.hashCode.slice(), b.hashCode[f - 1] = g;
        g = b.id;
        if (null == e[g]) {
            e[g] = b;
            d(a, b, c, k, 0);
            a = b.connectsAsSource.slice();
            for (c = 0; c < a.length; c++) g = a[c], this.extendedDfs(b, g.target, g, d, e, b.hashCode, c, k + 1)
        } else d(a, b, c, k, 1)
    }
};

function mxSwimlaneModel(a, b, c, d, e) {
    a.getGraph();
    this.tightenToSource = e;
    this.roots = c;
    this.parent = d;
    this.vertexMapper = {};
    this.edgeMapper = {};
    this.maxRank = 0;
    c = [];
    null == b && (b = this.graph.getChildVertices(d));
    this.maxRank = this.SOURCESCANSTARTRANK;
    this.createInternalCells(a, b, c);
    for (d = 0; d < b.length; d++) {
        e = c[d].connectsAsSource;
        for (var f = 0; f < e.length; f++) {
            var g = e[f],
                k = g.edges;
            if (null != k && 0 < k.length) {
                var k = k[0],
                    l = a.getVisibleTerminal(k, !1),
                    l = mxCellPath.create(l),
                    l = this.vertexMapper[l];
                c[d] == l && (l = a.getVisibleTerminal(k, !0), l = mxCellPath.create(l), l = this.vertexMapper[l]);
                null != l && c[d] != l && (g.target = l, 0 == l.connectsAsTarget.length && (l.connectsAsTarget = []), 0 > mxUtils.indexOf(l.connectsAsTarget, g) && l.connectsAsTarget.push(g))
            }
        }
        c[d].temp[0] = 1
    }
}
mxSwimlaneModel.prototype.maxRank = null;
mxSwimlaneModel.prototype.vertexMapper = null;
mxSwimlaneModel.prototype.edgeMapper = null;
mxSwimlaneModel.prototype.ranks = null;
mxSwimlaneModel.prototype.roots = null;
mxSwimlaneModel.prototype.parent = null;
mxSwimlaneModel.prototype.dfsCount = 0;
mxSwimlaneModel.prototype.SOURCESCANSTARTRANK = 1E8;
mxSwimlaneModel.prototype.ranksPerGroup = null;
mxSwimlaneModel.prototype.createInternalCells = function(a, b, c) {
    for (var d = a.getGraph(), e = a.swimlanes, f = 0; f < b.length; f++) {
        c[f] = new mxGraphHierarchyNode(b[f]);
        var g = mxCellPath.create(b[f]);
        this.vertexMapper[g] = c[f];
        c[f].swimlaneIndex = -1;
        for (g = 0; g < e.length; g++)
            if (d.model.getParent(b[f]) == e[g]) {
                c[f].swimlaneIndex = g;
                break
            }
        g = a.getEdges(b[f]);
        c[f].connectsAsSource = [];
        for (var k = 0; k < g.length; k++) {
            var l = a.getVisibleTerminal(g[k], !1);
            if (l != b[f] && a.graph.model.isVertex(l) && !a.isVertexIgnored(l)) {
                var m = a.getEdgesBetween(b[f],
                        l, !1),
                    n = a.getEdgesBetween(b[f], l, !0),
                    l = mxCellPath.create(m[0]);
                if (null != m && 0 < m.length && null == this.edgeMapper[l] && 2 * n.length >= m.length) {
                    for (var n = new mxGraphHierarchyEdge(m), p = 0; p < m.length; p++) {
                        var q = m[p],
                            l = mxCellPath.create(q);
                        this.edgeMapper[l] = n;
                        d.resetEdge(q);
                        a.disableEdgeStyle && (a.setEdgeStyleEnabled(q, !1), a.setOrthogonalEdge(q, !0))
                    }
                    n.source = c[f];
                    0 > mxUtils.indexOf(c[f].connectsAsSource, n) && c[f].connectsAsSource.push(n)
                }
            }
        }
        c[f].temp[0] = 0
    }
};
mxSwimlaneModel.prototype.initialRank = function() {
    this.ranksPerGroup = [];
    var a = [],
        b = {};
    if (null != this.roots)
        for (var c = 0; c < this.roots.length; c++) {
            var d = mxCellPath.create(this.roots[c]),
                d = this.vertexMapper[d];
            this.maxChainDfs(null, d, null, b, 0);
            null != d && a.push(d)
        }
    d = [];
    b = [];
    for (c = this.ranksPerGroup.length - 1; 0 <= c; c--) d[c] = c == this.ranksPerGroup.length - 1 ? 0 : b[c + 1] + 1, b[c] = d[c] + this.ranksPerGroup[c];
    this.maxRank = b[0];
    for (var e in this.vertexMapper) d = this.vertexMapper[e], d.temp[0] = -1;
    for (a.slice(); 0 < a.length;) {
        var d =
            a[0],
            f;
        e = d.connectsAsTarget;
        f = d.connectsAsSource;
        for (var g = !0, k = b[0], c = 0; c < e.length; c++) {
            var l = e[c];
            if (5270620 == l.temp[0]) l = l.source, k = Math.min(k, l.temp[0] - 1);
            else {
                g = !1;
                break
            }
        }
        if (g) {
            k > b[d.swimlaneIndex] && (k = b[d.swimlaneIndex]);
            d.temp[0] = k;
            if (null != f)
                for (c = 0; c < f.length; c++) l = f[c], l.temp[0] = 5270620, l = l.target, -1 == l.temp[0] && (a.push(l), l.temp[0] = -2);
            a.shift()
        } else if (c = a.shift(), a.push(d), c == d && 1 == a.length) break
    }
};
mxSwimlaneModel.prototype.maxChainDfs = function(a, b, c, d, e) {
    if (null != b && (a = mxCellPath.create(b.cell), null == d[a])) {
        d[a] = b;
        a = b.swimlaneIndex;
        if (null == this.ranksPerGroup[a] || this.ranksPerGroup[a] < e) this.ranksPerGroup[a] = e;
        a = b.connectsAsSource.slice();
        for (c = 0; c < a.length; c++) {
            var f = a[c],
                g = f.target;
            b.swimlaneIndex < g.swimlaneIndex ? this.maxChainDfs(b, g, f, mxUtils.clone(d, null, !0), 0) : b.swimlaneIndex == g.swimlaneIndex && this.maxChainDfs(b, g, f, mxUtils.clone(d, null, !0), e + 1)
        }
    }
};
mxSwimlaneModel.prototype.fixRanks = function() {
    var a = [];
    this.ranks = [];
    for (var b = 0; b < this.maxRank + 1; b++) a[b] = [], this.ranks[b] = a[b];
    var c = null;
    if (null != this.roots)
        for (var d = this.roots, c = [], b = 0; b < d.length; b++) {
            var e = mxCellPath.create(d[b]);
            c[b] = this.vertexMapper[e]
        }
    this.visit(function(b, c, d, e, m) {
        0 == m && (0 > c.maxRank && 0 > c.minRank) && (null == a[c.temp[0]] && mxLog.show(), a[c.temp[0]].push(c), c.maxRank = c.temp[0], c.minRank = c.temp[0], c.temp[0] = a[c.maxRank].length - 1);
        if (null != b && null != d && 1 < b.maxRank - c.maxRank) {
            d.maxRank =
                b.maxRank;
            d.minRank = c.maxRank;
            d.temp = [];
            d.x = [];
            d.y = [];
            for (b = d.minRank + 1; b < d.maxRank; b++) a[b].push(d), d.setGeneralPurposeVariable(b, a[b].length - 1)
        }
    }, c, !1, null)
};
mxSwimlaneModel.prototype.visit = function(a, b, c, d) {
    if (null != b) {
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            null != f && (null == d && (d = {}), c ? (f.hashCode = [], f.hashCode[0] = this.dfsCount, f.hashCode[1] = e, this.extendedDfs(null, f, null, a, d, f.hashCode, e, 0)) : this.dfs(null, f, null, a, d, 0))
        }
        this.dfsCount++
    }
};
mxSwimlaneModel.prototype.dfs = function(a, b, c, d, e, f) {
    if (null != b) {
        var g = mxCellPath.create(b.cell);
        if (null == e[g]) {
            e[g] = b;
            d(a, b, c, f, 0);
            a = b.connectsAsSource.slice();
            for (c = 0; c < a.length; c++) g = a[c], this.dfs(b, g.target, g, d, e, f + 1)
        } else d(a, b, c, f, 1)
    }
};
mxSwimlaneModel.prototype.extendedDfs = function(a, b, c, d, e, f, g, k) {
    if (null != b) {
        if (null != a && (null == b.hashCode || b.hashCode[0] != a.hashCode[0])) f = a.hashCode.length + 1, b.hashCode = a.hashCode.slice(), b.hashCode[f - 1] = g;
        g = mxCellPath.create(b.cell);
        if (null == e[g]) {
            e[g] = b;
            d(a, b, c, k, 0);
            a = b.connectsAsSource.slice();
            c = b.connectsAsTarget.slice();
            for (g = 0; g < a.length; g++) {
                f = a[g];
                var l = f.target;
                null == l && mxLog.show();
                b.swimlaneIndex <= l.swimlaneIndex && this.extendedDfs(b, l, f, d, e, b.hashCode, g, k + 1)
            }
            for (g = 0; g < c.length; g++) f = c[g],
                l = f.source, b.swimlaneIndex < l.swimlaneIndex && this.extendedDfs(b, l, f, d, e, b.hashCode, g, k + 1)
        } else d(a, b, c, k, 1)
    }
};

function mxHierarchicalLayoutStage() {}
mxHierarchicalLayoutStage.prototype.execute = function(a) {};

function mxMedianHybridCrossingReduction(a) {
    this.layout = a
}
mxMedianHybridCrossingReduction.prototype = new mxHierarchicalLayoutStage;
mxMedianHybridCrossingReduction.prototype.constructor = mxMedianHybridCrossingReduction;
mxMedianHybridCrossingReduction.prototype.layout = null;
mxMedianHybridCrossingReduction.prototype.maxIterations = 24;
mxMedianHybridCrossingReduction.prototype.nestedBestRanks = null;
mxMedianHybridCrossingReduction.prototype.currentBestCrossings = 0;
mxMedianHybridCrossingReduction.prototype.iterationsWithoutImprovement = 0;
mxMedianHybridCrossingReduction.prototype.maxNoImprovementIterations = 2;
mxMedianHybridCrossingReduction.prototype.execute = function(a) {
    a = this.layout.getModel();
    this.nestedBestRanks = [];
    for (var b = 0; b < a.ranks.length; b++) this.nestedBestRanks[b] = a.ranks[b].slice();
    for (var c = 0, d = this.calculateCrossings(a), b = 0; b < this.maxIterations && c < this.maxNoImprovementIterations; b++) {
        this.weightedMedian(b, a);
        this.transpose(b, a);
        var e = this.calculateCrossings(a);
        if (e < d) {
            d = e;
            for (e = c = 0; e < this.nestedBestRanks.length; e++)
                for (var f = a.ranks[e], g = 0; g < f.length; g++) {
                    var k = f[g];
                    this.nestedBestRanks[e][k.getGeneralPurposeVariable(e)] =
                        k
                }
        } else {
            c++;
            for (e = 0; e < this.nestedBestRanks.length; e++) {
                f = a.ranks[e];
                for (g = 0; g < f.length; g++) k = f[g], k.setGeneralPurposeVariable(e, g)
            }
        } if (0 == d) break
    }
    c = [];
    d = [];
    for (b = 0; b < a.maxRank + 1; b++) d[b] = [], c[b] = d[b];
    for (b = 0; b < this.nestedBestRanks.length; b++)
        for (e = 0; e < this.nestedBestRanks[b].length; e++) d[b].push(this.nestedBestRanks[b][e]);
    a.ranks = c
};
mxMedianHybridCrossingReduction.prototype.calculateCrossings = function(a) {
    for (var b = a.ranks.length, c = 0, d = 1; d < b; d++) c += this.calculateRankCrossing(d, a);
    return c
};
mxMedianHybridCrossingReduction.prototype.calculateRankCrossing = function(a, b) {
    for (var c = 0, d = b.ranks[a], e = b.ranks[a - 1], f = [], g = 0; g < d.length; g++) {
        for (var k = d[g], l = k.getGeneralPurposeVariable(a), k = k.getPreviousLayerConnectedCells(a), m = [], n = 0; n < k.length; n++) {
            var p = k[n].getGeneralPurposeVariable(a - 1);
            m.push(p)
        }
        m.sort(function(a, b) {
            return a - b
        });
        f[l] = m
    }
    d = [];
    for (g = 0; g < f.length; g++) d = d.concat(f[g]);
    for (f = 1; f < e.length;) f <<= 1;
    l = 2 * f - 1;
    f -= 1;
    e = [];
    for (g = 0; g < l; ++g) e[g] = 0;
    for (g = 0; g < d.length; g++) {
        l = d[g] + f;
        for (++e[l]; 0 <
            l;) l % 2 && (c += e[l + 1]), l = l - 1 >> 1, ++e[l]
    }
    return c
};
mxMedianHybridCrossingReduction.prototype.transpose = function(a, b) {
    for (var c = !0, d = 0; c && 10 > d++;)
        for (var e = 1 == a % 2 && 1 == d % 2, c = !1, f = 0; f < b.ranks.length; f++) {
            for (var g = b.ranks[f], k = [], l = 0; l < g.length; l++) {
                var m = g[l],
                    n = m.getGeneralPurposeVariable(f);
                0 > n && (n = l);
                k[n] = m
            }
            for (var p = n = m = null, q = null, r = null, s = null, t = null, u = null, x = null, y = null, l = 0; l < g.length - 1; l++) {
                if (0 == l) {
                    for (var x = k[l], m = x.getNextLayerConnectedCells(f), n = x.getPreviousLayerConnectedCells(f), r = [], s = [], v = 0; v < m.length; v++) r[v] = m[v].getGeneralPurposeVariable(f +
                        1);
                    for (v = 0; v < n.length; v++) s[v] = n[v].getGeneralPurposeVariable(f - 1)
                } else m = p, n = q, r = t, s = u, x = y;
                y = k[l + 1];
                p = y.getNextLayerConnectedCells(f);
                q = y.getPreviousLayerConnectedCells(f);
                t = [];
                u = [];
                for (v = 0; v < p.length; v++) t[v] = p[v].getGeneralPurposeVariable(f + 1);
                for (v = 0; v < q.length; v++) u[v] = q[v].getGeneralPurposeVariable(f - 1);
                for (var z = 0, B = 0, v = 0; v < r.length; v++)
                    for (var A = 0; A < t.length; A++) r[v] > t[A] && z++, r[v] < t[A] && B++;
                for (v = 0; v < s.length; v++)
                    for (A = 0; A < u.length; A++) s[v] > u[A] && z++, s[v] < u[A] && B++;
                if (B < z || B == z && e) p = x.getGeneralPurposeVariable(f),
                    x.setGeneralPurposeVariable(f, y.getGeneralPurposeVariable(f)), y.setGeneralPurposeVariable(f, p), p = m, q = n, t = r, u = s, y = x, e || (c = !0)
            }
        }
};
mxMedianHybridCrossingReduction.prototype.weightedMedian = function(a, b) {
    var c = 0 == a % 2;
    if (c)
        for (var d = b.maxRank - 1; 0 <= d; d--) this.medianRank(d, c);
    else
        for (d = 1; d < b.maxRank; d++) this.medianRank(d, c)
};
mxMedianHybridCrossingReduction.prototype.medianRank = function(a, b) {
    for (var c = this.nestedBestRanks[a].length, d = [], e = [], f = 0; f < c; f++) {
        var g = this.nestedBestRanks[a][f],
            k = new MedianCellSorter;
        k.cell = g;
        var l;
        l = b ? g.getNextLayerConnectedCells(a) : g.getPreviousLayerConnectedCells(a);
        var m;
        m = b ? a + 1 : a - 1;
        null != l && 0 != l.length ? (k.medianValue = this.medianValue(l, m), d.push(k)) : e[g.getGeneralPurposeVariable(a)] = !0
    }
    d.sort(MedianCellSorter.prototype.compare);
    for (f = 0; f < c; f++) null == e[f] && (g = d.shift().cell, g.setGeneralPurposeVariable(a,
        f))
};
mxMedianHybridCrossingReduction.prototype.medianValue = function(a, b) {
    for (var c = [], d = 0, e = 0; e < a.length; e++) {
        var f = a[e];
        c[d++] = f.getGeneralPurposeVariable(b)
    }
    c.sort(function(a, b) {
        return a - b
    });
    if (1 == d % 2) return c[Math.floor(d / 2)];
    if (2 == d) return (c[0] + c[1]) / 2;
    e = d / 2;
    f = c[e - 1] - c[0];
    d = c[d - 1] - c[e];
    return (c[e - 1] * d + c[e] * f) / (f + d)
};

function MedianCellSorter() {}
MedianCellSorter.prototype.medianValue = 0;
MedianCellSorter.prototype.cell = !1;
MedianCellSorter.prototype.compare = function(a, b) {
    return null != a && null != b ? b.medianValue > a.medianValue ? -1 : b.medianValue < a.medianValue ? 1 : 0 : 0
};

function mxMinimumCycleRemover(a) {
    this.layout = a
}
mxMinimumCycleRemover.prototype = new mxHierarchicalLayoutStage;
mxMinimumCycleRemover.prototype.constructor = mxMinimumCycleRemover;
mxMinimumCycleRemover.prototype.layout = null;
mxMinimumCycleRemover.prototype.execute = function(a) {
    a = this.layout.getModel();
    for (var b = {}, c = a.vertexMapper.getValues(), d = {}, e = 0; e < c.length; e++) d[c[e].id] = c[e];
    c = null;
    if (null != a.roots)
        for (var f = a.roots, c = [], e = 0; e < f.length; e++) c[e] = a.vertexMapper.get(f[e]);
    a.visit(function(a, c, e, f, n) {
        c.isAncestor(a) && (e.invert(), mxUtils.remove(e, a.connectsAsSource), a.connectsAsTarget.push(e), mxUtils.remove(e, c.connectsAsTarget), c.connectsAsSource.push(e));
        b[c.id] = c;
        delete d[c.id]
    }, c, !0, null);
    e = mxUtils.clone(b, null, !0);
    a.visit(function(a, c, e, f, n) {
        c.isAncestor(a) && (e.invert(), mxUtils.remove(e, a.connectsAsSource), c.connectsAsSource.push(e), a.connectsAsTarget.push(e), mxUtils.remove(e, c.connectsAsTarget));
        b[c.id] = c;
        delete d[c.id]
    }, d, !0, e)
};

function mxCoordinateAssignment(a, b, c, d, e, f) {
    this.layout = a;
    this.intraCellSpacing = b;
    this.interRankCellSpacing = c;
    this.orientation = d;
    this.initialX = e;
    this.parallelEdgeSpacing = f
}
var mxHierarchicalEdgeStyle = {
    ORTHOGONAL: 1,
    POLYLINE: 2,
    STRAIGHT: 3,
    CURVE: 4
};
mxCoordinateAssignment.prototype = new mxHierarchicalLayoutStage;
mxCoordinateAssignment.prototype.constructor = mxCoordinateAssignment;
mxCoordinateAssignment.prototype.layout = null;
mxCoordinateAssignment.prototype.intraCellSpacing = 30;
mxCoordinateAssignment.prototype.interRankCellSpacing = 100;
mxCoordinateAssignment.prototype.parallelEdgeSpacing = 10;
mxCoordinateAssignment.prototype.maxIterations = 8;
mxCoordinateAssignment.prototype.prefHozEdgeSep = 5;
mxCoordinateAssignment.prototype.prefVertEdgeOff = 2;
mxCoordinateAssignment.prototype.minEdgeJetty = 12;
mxCoordinateAssignment.prototype.channelBuffer = 4;
mxCoordinateAssignment.prototype.jettyPositions = null;
mxCoordinateAssignment.prototype.orientation = mxConstants.DIRECTION_NORTH;
mxCoordinateAssignment.prototype.initialX = null;
mxCoordinateAssignment.prototype.limitX = null;
mxCoordinateAssignment.prototype.currentXDelta = null;
mxCoordinateAssignment.prototype.widestRank = null;
mxCoordinateAssignment.prototype.rankTopY = null;
mxCoordinateAssignment.prototype.rankBottomY = null;
mxCoordinateAssignment.prototype.widestRankValue = null;
mxCoordinateAssignment.prototype.rankWidths = null;
mxCoordinateAssignment.prototype.rankY = null;
mxCoordinateAssignment.prototype.fineTuning = !0;
mxCoordinateAssignment.prototype.edgeStyle = mxHierarchicalEdgeStyle.POLYLINE;
mxCoordinateAssignment.prototype.nextLayerConnectedCache = null;
mxCoordinateAssignment.prototype.previousLayerConnectedCache = null;
mxCoordinateAssignment.prototype.groupPadding = 10;
mxCoordinateAssignment.prototype.printStatus = function() {
    var a = this.layout.getModel();
    mxLog.show();
    mxLog.writeln("======Coord assignment debug=======");
    for (var b = 0; b < a.ranks.length; b++) {
        mxLog.write("Rank ", b, " : ");
        for (var c = a.ranks[b], d = 0; d < c.length; d++) mxLog.write(c[d].getGeneralPurposeVariable(b), "  ");
        mxLog.writeln()
    }
    mxLog.writeln("====================================")
};
mxCoordinateAssignment.prototype.execute = function(a) {
    this.jettyPositions = {};
    a = this.layout.getModel();
    this.currentXDelta = 0;
    this.initialCoords(this.layout.getGraph(), a);
    this.fineTuning && this.minNode(a);
    var b = 1E8;
    if (this.fineTuning)
        for (var c = 0; c < this.maxIterations; c++) {
            0 != c && (this.medianPos(c, a), this.minNode(a));
            if (this.currentXDelta < b) {
                for (var d = 0; d < a.ranks.length; d++)
                    for (var e = a.ranks[d], f = 0; f < e.length; f++) {
                        var g = e[f];
                        g.setX(d, g.getGeneralPurposeVariable(d))
                    }
                b = this.currentXDelta
            } else
                for (d = 0; d < a.ranks.length; d++) {
                    e =
                        a.ranks[d];
                    for (f = 0; f < e.length; f++) g = e[f], g.setGeneralPurposeVariable(d, g.getX(d))
                }
            this.minPath(this.layout.getGraph(), a);
            this.currentXDelta = 0
        }
    this.setCellLocations(this.layout.getGraph(), a)
};
mxCoordinateAssignment.prototype.minNode = function(a) {
    for (var b = [], c = new mxDictionary, d = [], e = 0; e <= a.maxRank; e++) {
        d[e] = a.ranks[e];
        for (var f = 0; f < d[e].length; f++) {
            var g = d[e][f],
                k = new WeightedCellSorter(g, e);
            k.rankIndex = f;
            k.visited = !0;
            b.push(k);
            c.put(g, k)
        }
    }
    a = 10 * b.length;
    for (f = 0; 0 < b.length && f <= a;) {
        var g = b.shift(),
            e = g.cell,
            l = g.weightedValue,
            m = parseInt(g.rankIndex),
            k = e.getNextLayerConnectedCells(l),
            n = e.getPreviousLayerConnectedCells(l),
            p = k.length,
            q = n.length,
            r = this.medianXValue(k, l + 1),
            s = this.medianXValue(n,
                l - 1),
            t = p + q,
            u = e.getGeneralPurposeVariable(l),
            x = u;
        0 < t && (x = (r * p + s * q) / t);
        p = !1;
        x < u - 1 ? 0 == m ? (e.setGeneralPurposeVariable(l, x), p = !0) : (m = d[l][m - 1], u = m.getGeneralPurposeVariable(l), u = u + m.width / 2 + this.intraCellSpacing + e.width / 2, u < x ? (e.setGeneralPurposeVariable(l, x), p = !0) : u < e.getGeneralPurposeVariable(l) - 1 && (e.setGeneralPurposeVariable(l, u), p = !0)) : x > u + 1 && (m == d[l].length - 1 ? (e.setGeneralPurposeVariable(l, x), p = !0) : (m = d[l][m + 1], u = m.getGeneralPurposeVariable(l), u = u - m.width / 2 - this.intraCellSpacing - e.width / 2, u > x ? (e.setGeneralPurposeVariable(l,
            x), p = !0) : u > e.getGeneralPurposeVariable(l) + 1 && (e.setGeneralPurposeVariable(l, u), p = !0)));
        if (p) {
            for (e = 0; e < k.length; e++) l = k[e], l = c.get(l), null != l && !1 == l.visited && (l.visited = !0, b.push(l));
            for (e = 0; e < n.length; e++) l = n[e], l = c.get(l), null != l && !1 == l.visited && (l.visited = !0, b.push(l))
        }
        g.visited = !1;
        f++
    }
};
mxCoordinateAssignment.prototype.medianPos = function(a, b) {
    if (0 == a % 2)
        for (var c = b.maxRank; 0 < c; c--) this.rankMedianPosition(c - 1, b, c);
    else
        for (c = 0; c < b.maxRank - 1; c++) this.rankMedianPosition(c + 1, b, c)
};
mxCoordinateAssignment.prototype.rankMedianPosition = function(a, b, c) {
    b = b.ranks[a];
    for (var d = [], e = {}, f = 0; f < b.length; f++) {
        var g = b[f];
        d[f] = new WeightedCellSorter;
        d[f].cell = g;
        d[f].rankIndex = f;
        e[g.id] = d[f];
        var k = null,
            k = c < a ? g.getPreviousLayerConnectedCells(a) : g.getNextLayerConnectedCells(a);
        d[f].weightedValue = this.calculatedWeightedValue(g, k)
    }
    d.sort(WeightedCellSorter.prototype.compare);
    for (f = 0; f < d.length; f++) {
        var l = 0,
            g = d[f].cell,
            l = 0,
            k = c < a ? g.getPreviousLayerConnectedCells(a).slice() : g.getNextLayerConnectedCells(a).slice();
        null != k && (l = k.length, l = 0 < l ? this.medianXValue(k, c) : g.getGeneralPurposeVariable(a));
        for (var m = 0, k = -1E8, n = d[f].rankIndex - 1; 0 <= n;) {
            var p = e[b[n].id];
            if (null != p) {
                var q = p.cell;
                p.visited ? (k = q.getGeneralPurposeVariable(a) + q.width / 2 + this.intraCellSpacing + m + g.width / 2, n = -1) : (m += q.width + this.intraCellSpacing, n--)
            }
        }
        m = 0;
        q = 1E8;
        for (n = d[f].rankIndex + 1; n < d.length;)
            if (p = e[b[n].id], null != p) {
                var r = p.cell;
                p.visited ? (q = r.getGeneralPurposeVariable(a) - r.width / 2 - this.intraCellSpacing - m - g.width / 2, n = d.length) : (m += r.width + this.intraCellSpacing,
                    n++)
            }
        l >= k && l <= q ? g.setGeneralPurposeVariable(a, l) : l < k ? (g.setGeneralPurposeVariable(a, k), this.currentXDelta += k - l) : l > q && (g.setGeneralPurposeVariable(a, q), this.currentXDelta += l - q);
        d[f].visited = !0
    }
};
mxCoordinateAssignment.prototype.calculatedWeightedValue = function(a, b) {
    for (var c = 0, d = 0; d < b.length; d++) {
        var e = b[d];
        a.isVertex() && e.isVertex() ? c++ : c = a.isEdge() && e.isEdge() ? c + 8 : c + 2
    }
    return c
};
mxCoordinateAssignment.prototype.medianXValue = function(a, b) {
    if (0 == a.length) return 0;
    for (var c = [], d = 0; d < a.length; d++) c[d] = a[d].getGeneralPurposeVariable(b);
    c.sort(function(a, b) {
        return a - b
    });
    if (1 == a.length % 2) return c[Math.floor(a.length / 2)];
    d = a.length / 2;
    return (c[d - 1] + c[d]) / 2
};
mxCoordinateAssignment.prototype.initialCoords = function(a, b) {
    this.calculateWidestRank(a, b);
    for (var c = this.widestRank; 0 <= c; c--) c < b.maxRank && this.rankCoordinates(c, a, b);
    for (c = this.widestRank + 1; c <= b.maxRank; c++) 0 < c && this.rankCoordinates(c, a, b)
};
mxCoordinateAssignment.prototype.rankCoordinates = function(a, b, c) {
    b = c.ranks[a];
    c = 0;
    for (var d = this.initialX + (this.widestRankValue - this.rankWidths[a]) / 2, e = !1, f = 0; f < b.length; f++) {
        var g = b[f];
        if (g.isVertex()) {
            var k = this.layout.getVertexBounds(g.cell);
            null != k ? this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_SOUTH ? (g.width = k.width, g.height = k.height) : (g.width = k.height, g.height = k.width) : e = !0;
            c = Math.max(c, g.height)
        } else g.isEdge() && (k = 1, null != g.edges ? k = g.edges.length : mxLog.warn("edge.edges is null"),
            g.width = (k - 1) * this.parallelEdgeSpacing);
        d += g.width / 2;
        g.setX(a, d);
        g.setGeneralPurposeVariable(a, d);
        d += g.width / 2;
        d += this.intraCellSpacing
    }!0 == e && mxLog.warn("At least one cell has no bounds")
};
mxCoordinateAssignment.prototype.calculateWidestRank = function(a, b) {
    var c = -this.interRankCellSpacing,
        d = 0;
    this.rankWidths = [];
    this.rankY = [];
    for (var e = b.maxRank; 0 <= e; e--) {
        for (var f = 0, g = b.ranks[e], k = this.initialX, l = !1, m = 0; m < g.length; m++) {
            var n = g[m];
            if (n.isVertex()) {
                var p = this.layout.getVertexBounds(n.cell);
                null != p ? this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_SOUTH ? (n.width = p.width, n.height = p.height) : (n.width = p.height, n.height = p.width) : l = !0;
                f = Math.max(f, n.height)
            } else n.isEdge() &&
                (p = 1, null != n.edges ? p = n.edges.length : mxLog.warn("edge.edges is null"), n.width = (p - 1) * this.parallelEdgeSpacing);
            k += n.width / 2;
            n.setX(e, k);
            n.setGeneralPurposeVariable(e, k);
            k += n.width / 2;
            k += this.intraCellSpacing;
            k > this.widestRankValue && (this.widestRankValue = k, this.widestRank = e);
            this.rankWidths[e] = k
        }!0 == l && mxLog.warn("At least one cell has no bounds");
        this.rankY[e] = c;
        k = f / 2 + d / 2 + this.interRankCellSpacing;
        d = f;
        c = this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_WEST ? c + k : c -
            k;
        for (m = 0; m < g.length; m++) g[m].setY(e, c)
    }
};
mxCoordinateAssignment.prototype.minPath = function(a, b) {
    for (var c = b.edgeMapper.getValues(), d = 0; d < c.length; d++) {
        var e = c[d];
        if (!(1 > e.maxRank - e.minRank - 1)) {
            for (var f = e.getGeneralPurposeVariable(e.minRank + 1), g = !0, k = 0, l = e.minRank + 2; l < e.maxRank; l++) {
                var m = e.getGeneralPurposeVariable(l);
                f != m ? (g = !1, f = m) : k++
            }
            if (!g) {
                for (var g = f = 0, m = [], n = [], p = e.getGeneralPurposeVariable(e.minRank + 1), l = e.minRank + 1; l < e.maxRank - 1; l++) {
                    var q = e.getX(l + 1);
                    p == q ? (m[l - e.minRank - 1] = p, f++) : this.repositionValid(b, e, l + 1, p) ? (m[l - e.minRank -
                        1] = p, f++) : p = m[l - e.minRank - 1] = q
                }
                p = e.getX(l);
                for (l = e.maxRank - 1; l > e.minRank + 1; l--) q = e.getX(l - 1), p == q ? (n[l - e.minRank - 2] = p, g++) : this.repositionValid(b, e, l - 1, p) ? (n[l - e.minRank - 2] = p, g++) : (n[l - e.minRank - 2] = e.getX(l - 1), p = q);
                if (g > k || f > k)
                    if (g >= f)
                        for (l = e.maxRank - 2; l > e.minRank; l--) e.setX(l, n[l - e.minRank - 1]);
                    else if (f > g)
                    for (l = e.minRank + 2; l < e.maxRank; l++) e.setX(l, m[l - e.minRank - 2])
            }
        }
    }
};
mxCoordinateAssignment.prototype.repositionValid = function(a, b, c, d) {
    a = a.ranks[c];
    for (var e = -1, f = 0; f < a.length; f++)
        if (b == a[f]) {
            e = f;
            break
        }
    if (0 > e) return !1;
    f = b.getGeneralPurposeVariable(c);
    if (d < f) {
        if (0 == e) return !0;
        a = a[e - 1];
        c = a.getGeneralPurposeVariable(c);
        c = c + a.width / 2 + this.intraCellSpacing + b.width / 2;
        if (!(c <= d)) return !1
    } else if (d > f) {
        if (e == a.length - 1) return !0;
        a = a[e + 1];
        c = a.getGeneralPurposeVariable(c);
        c = c - a.width / 2 - this.intraCellSpacing - b.width / 2;
        if (!(c >= d)) return !1
    }
    return !0
};
mxCoordinateAssignment.prototype.setCellLocations = function(a, b) {
    this.rankTopY = [];
    this.rankBottomY = [];
    for (var c = 0; c < b.ranks.length; c++) this.rankTopY[c] = Number.MAX_VALUE, this.rankBottomY[c] = 0;
    var d = null;
    this.layout.resizeParent && (d = {});
    for (var e = b.vertexMapper.getValues(), c = 0; c < e.length; c++)
        if (this.setVertexLocation(e[c]), this.layout.resizeParent) {
            var f = a.model.getParent(e[c].cell),
                g = mxObjectIdentity.get(f);
            null == d[g] && (d[g] = f)
        }
    this.layout.resizeParent && null != d && this.adjustParents(d);
    (this.edgeStyle ==
        mxHierarchicalEdgeStyle.ORTHOGONAL || this.edgeStyle == mxHierarchicalEdgeStyle.POLYLINE || this.edgeStyle == mxHierarchicalEdgeStyle.CURVE) && this.localEdgeProcessing(b);
    d = b.edgeMapper.getValues();
    for (c = 0; c < d.length; c++) this.setEdgePosition(d[c])
};
mxCoordinateAssignment.prototype.adjustParents = function(a) {
    var b = [],
        c;
    for (c in a) b.push(a[c]);
    this.layout.arrangeGroups(mxUtils.sortCells(b, !0), this.groupPadding)
};
mxCoordinateAssignment.prototype.localEdgeProcessing = function(a) {
    for (var b = 0; b < a.ranks.length; b++)
        for (var c = a.ranks[b], d = 0; d < c.length; d++) {
            var e = c[d];
            if (e.isVertex())
                for (var f = e.getPreviousLayerConnectedCells(b), g = b - 1, k = 0; 2 > k; k++) {
                    if (-1 < g && g < a.ranks.length && null != f && 0 < f.length) {
                        for (var l = [], m = 0; m < f.length; m++) {
                            var n = new WeightedCellSorter(f[m], f[m].getX(g));
                            l.push(n)
                        }
                        l.sort(WeightedCellSorter.prototype.compare);
                        for (var n = e.x[0] - e.width / 2, p = n + e.width, q = f = 0, g = [], m = 0; m < l.length; m++) {
                            var r = l[m].cell,
                                s;
                            if (r.isVertex()) {
                                s = 0 == k ? e.connectsAsSource : e.connectsAsTarget;
                                for (var t = 0; t < s.length; t++)
                                    if (s[t].source == r || s[t].target == r) f += s[t].edges.length, q++, g.push(s[t])
                            } else f += r.edges.length, q++, g.push(r)
                        }
                        e.width > (f + 1) * this.prefHozEdgeSep + 2 * this.prefHozEdgeSep && (n += this.prefHozEdgeSep, p -= this.prefHozEdgeSep);
                        l = (p - n) / f;
                        n += l / 2;
                        p = this.minEdgeJetty - this.prefVertEdgeOff;
                        for (m = q = 0; m < g.length; m++) {
                            r = g[m].edges.length;
                            s = this.jettyPositions[g[m].ids[0]];
                            null == s && (s = [], this.jettyPositions[g[m].ids[0]] = s);
                            m < f / 2 ?
                                p += this.prefVertEdgeOff : m > f / 2 && (p -= this.prefVertEdgeOff);
                            for (t = 0; t < r; t++) s[4 * t + 2 * k] = n, n += l, s[4 * t + 2 * k + 1] = p;
                            q = Math.max(q, p)
                        }
                    }
                    f = e.getNextLayerConnectedCells(b);
                    g = b + 1
                }
        }
};
mxCoordinateAssignment.prototype.setEdgePosition = function(a) {
    var b = 0;
    if (101207 != a.temp[0]) {
        var c = a.maxRank,
            d = a.minRank;
        c == d && (c = a.source.maxRank, d = a.target.minRank);
        for (var e = 0, f = this.jettyPositions[a.ids[0]], g = a.isReversed ? a.target.cell : a.source.cell, k = this.layout.graph, l = 0; l < a.edges.length; l++) {
            var m = a.edges[l],
                n = this.layout.getVisibleTerminal(m, !0),
                p = k.model.getTerminal(m, !0),
                q = [],
                r = a.isReversed;
            n != g && (r = !r);
            if (null != f) {
                var s = r ? 2 : 0,
                    t = r ? this.rankTopY[d] : this.rankBottomY[c],
                    u = f[4 * e + 1 + s];
                r && (u = -u);
                t += u;
                s = f[4 * e + s];
                p = k.model.getTerminal(m, !0);
                this.layout.isPort(p) && k.model.getParent(p) == n && (s = k.view.getState(p), s = null != s ? s.x : n.geometry.x + a.source.width * p.geometry.x);
                this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_SOUTH ? (q.push(new mxPoint(s, t)), this.edgeStyle == mxHierarchicalEdgeStyle.CURVE && q.push(new mxPoint(s, t + u))) : (q.push(new mxPoint(t, s)), this.edgeStyle == mxHierarchicalEdgeStyle.CURVE && q.push(new mxPoint(t + u, s)))
            }
            s = a.x.length - 1;
            t = u = -1;
            n = a.maxRank - 1;
            r && (s = 0, u = a.x.length, t = 1, n = a.minRank + 1);
            for (; a.maxRank != a.minRank && s != u; s += t) {
                var p = a.x[s] + b,
                    x = (this.rankTopY[n] + this.rankBottomY[n + 1]) / 2,
                    y = (this.rankTopY[n - 1] + this.rankBottomY[n]) / 2;
                if (r) var v = x,
                    x = y,
                    y = v;
                this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_SOUTH ? (q.push(new mxPoint(p, x)), q.push(new mxPoint(p, y))) : (q.push(new mxPoint(x, p)), q.push(new mxPoint(y, p)));
                this.limitX = Math.max(this.limitX, p);
                n += t
            }
            null != f && (s = r ? 2 : 0, t = r ? this.rankBottomY[c] : this.rankTopY[d],
                u = f[4 * e + 3 - s], r && (u = -u), t -= u, s = f[4 * e + 2 - s], r = k.model.getTerminal(m, !1), n = this.layout.getVisibleTerminal(m, !1), this.layout.isPort(r) && k.model.getParent(r) == n && (s = k.view.getState(r), s = null != s ? s.x : n.geometry.x + a.target.width * r.geometry.x), this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_SOUTH ? (this.edgeStyle == mxHierarchicalEdgeStyle.CURVE && q.push(new mxPoint(s, t - u)), q.push(new mxPoint(s, t))) : (this.edgeStyle == mxHierarchicalEdgeStyle.CURVE && q.push(new mxPoint(t - u, s)),
                    q.push(new mxPoint(t, s))));
            a.isReversed && this.processReversedEdge(a, m);
            this.layout.setEdgePoints(m, q);
            b = 0 == b ? this.parallelEdgeSpacing : 0 < b ? -b : -b + this.parallelEdgeSpacing;
            e++
        }
        a.temp[0] = 101207
    }
};
mxCoordinateAssignment.prototype.setVertexLocation = function(a) {
    var b = a.cell,
        c = a.x[0] - a.width / 2,
        d = a.y[0] - a.height / 2;
    this.rankTopY[a.minRank] = Math.min(this.rankTopY[a.minRank], d);
    this.rankBottomY[a.minRank] = Math.max(this.rankBottomY[a.minRank], d + a.height);
    this.orientation == mxConstants.DIRECTION_NORTH || this.orientation == mxConstants.DIRECTION_SOUTH ? this.layout.setVertexLocation(b, c, d) : this.layout.setVertexLocation(b, d, c);
    this.limitX = Math.max(this.limitX, c + a.width)
};
mxCoordinateAssignment.prototype.processReversedEdge = function(a, b) {};

function WeightedCellSorter(a, b) {
    this.cell = a;
    this.weightedValue = b
}
WeightedCellSorter.prototype.weightedValue = 0;
WeightedCellSorter.prototype.nudge = !1;
WeightedCellSorter.prototype.visited = !1;
WeightedCellSorter.prototype.rankIndex = null;
WeightedCellSorter.prototype.cell = null;
WeightedCellSorter.prototype.compare = function(a, b) {
    return null != a && null != b ? b.weightedValue > a.weightedValue ? -1 : b.weightedValue < a.weightedValue ? 1 : b.nudge ? -1 : 1 : 0
};

function mxSwimlaneOrdering(a) {
    this.layout = a
}
mxSwimlaneOrdering.prototype = new mxHierarchicalLayoutStage;
mxSwimlaneOrdering.prototype.constructor = mxSwimlaneOrdering;
mxSwimlaneOrdering.prototype.layout = null;
mxSwimlaneOrdering.prototype.execute = function(a) {
    a = this.layout.getModel();
    var b = mxUtils.clone(a.vertexMapper, null, !0),
        c = null;
    if (null != a.roots)
        for (var d = a.roots, c = [], e = 0; e < d.length; e++) {
            var f = mxCellPath.create(d[e]);
            c[e] = a.vertexMapper[f]
        }
    a.visit(function(a, c, d, e, f) {
        e = null != a && a.swimlaneIndex == c.swimlaneIndex && c.isAncestor(a);
        f = null != a && null != d && a.swimlaneIndex < c.swimlaneIndex && d.source == c;
        e ? (d.invert(), mxUtils.remove(d, a.connectsAsSource), c.connectsAsSource.push(d), a.connectsAsTarget.push(d), mxUtils.remove(d,
            c.connectsAsTarget)) : f && (d.invert(), mxUtils.remove(d, a.connectsAsTarget), c.connectsAsTarget.push(d), a.connectsAsSource.push(d), mxUtils.remove(d, c.connectsAsSource));
        a = mxCellPath.create(c.cell);
        delete b[a]
    }, c, !0, null)
};

function mxHierarchicalLayout(a, b, c) {
    mxGraphLayout.call(this, a);
    this.orientation = null != b ? b : mxConstants.DIRECTION_NORTH;
    this.deterministic = null != c ? c : !0
}
mxHierarchicalLayout.prototype = new mxGraphLayout;
mxHierarchicalLayout.prototype.constructor = mxHierarchicalLayout;
mxHierarchicalLayout.prototype.roots = null;
mxHierarchicalLayout.prototype.resizeParent = !1;
mxHierarchicalLayout.prototype.moveParent = !1;
mxHierarchicalLayout.prototype.parentBorder = 0;
mxHierarchicalLayout.prototype.intraCellSpacing = 30;
mxHierarchicalLayout.prototype.interRankCellSpacing = 100;
mxHierarchicalLayout.prototype.interHierarchySpacing = 60;
mxHierarchicalLayout.prototype.parallelEdgeSpacing = 10;
mxHierarchicalLayout.prototype.orientation = mxConstants.DIRECTION_NORTH;
mxHierarchicalLayout.prototype.fineTuning = !0;
mxHierarchicalLayout.prototype.tightenToSource = !0;
mxHierarchicalLayout.prototype.disableEdgeStyle = !0;
mxHierarchicalLayout.prototype.traverseAncestors = !0;
mxHierarchicalLayout.prototype.model = null;
mxHierarchicalLayout.prototype.edgesCache = null;
mxHierarchicalLayout.prototype.edgeSourceTermCache = null;
mxHierarchicalLayout.prototype.edgesTargetTermCache = null;
mxHierarchicalLayout.prototype.getModel = function() {
    return this.model
};
mxHierarchicalLayout.prototype.execute = function(a, b) {
    this.parent = a;
    var c = this.graph.model;
    this.edgesCache = new mxDictionary;
    this.edgeSourceTermCache = new mxDictionary;
    this.edgesTargetTermCache = new mxDictionary;
    null != b && !(b instanceof Array) && (b = [b]);
    if (!(null == b && null == a)) {
        if (null != b && null != a) {
            for (var d = [], e = 0; e < b.length; e++) c.isAncestor(a, b[e]) && d.push(b[e]);
            this.roots = d
        } else this.roots = b;
        c.beginUpdate();
        try {
            this.run(a), this.resizeParent && !this.graph.isCellCollapsed(a) && this.graph.updateGroupBounds([a],
                this.parentBorder, this.moveParent)
        } finally {
            c.endUpdate()
        }
    }
};
mxHierarchicalLayout.prototype.findRoots = function(a, b) {
    var c = [];
    if (null != a && null != b) {
        var d = this.graph.model,
            e = null,
            f = -1E5,
            g;
        for (g in b) {
            var k = b[g];
            if (d.isVertex(k) && this.graph.isCellVisible(k)) {
                for (var l = this.getEdges(k), m = 0, n = 0, p = 0; p < l.length; p++) this.getVisibleTerminal(l[p], !0) == k ? m++ : n++;
                0 == n && 0 < m && c.push(k);
                l = m - n;
                l > f && (f = l, e = k)
            }
        }
        0 == c.length && null != e && c.push(e)
    }
    return c
};
mxHierarchicalLayout.prototype.getEdges = function(a) {
    var b = this.edgesCache.get(a);
    if (null != b) return b;
    for (var c = this.graph.model, b = [], d = this.graph.isCellCollapsed(a), e = c.getChildCount(a), f = 0; f < e; f++) {
        var g = c.getChildAt(a, f);
        if (this.isPort(g)) b = b.concat(c.getEdges(g, !0, !0));
        else if (d || !this.graph.isCellVisible(g)) b = b.concat(c.getEdges(g, !0, !0))
    }
    b = b.concat(c.getEdges(a, !0, !0));
    c = [];
    for (f = 0; f < b.length; f++) d = this.getVisibleTerminal(b[f], !0), e = this.getVisibleTerminal(b[f], !1), (d == e || d != e && (e == a && (null ==
        this.parent || this.graph.isValidAncestor(d, this.parent, this.traverseAncestors)) || d == a && (null == this.parent || this.graph.isValidAncestor(e, this.parent, this.traverseAncestors)))) && c.push(b[f]);
    this.edgesCache.put(a, c);
    return c
};
mxHierarchicalLayout.prototype.getVisibleTerminal = function(a, b) {
    var c = this.edgesTargetTermCache;
    b && (c = this.edgeSourceTermCache);
    var d = c.get(a);
    if (null != d) return d;
    var d = this.graph.view.getState(a),
        e = null != d ? d.getVisibleTerminal(b) : this.graph.view.getVisibleTerminal(a, b);
    null == e && (e = null != d ? d.getVisibleTerminal(b) : this.graph.view.getVisibleTerminal(a, b));
    this.isPort(e) && (e = this.graph.model.getParent(e));
    c.put(a, e);
    return e
};
mxHierarchicalLayout.prototype.run = function(a) {
    var b = [],
        c = [];
    if (null == this.roots && null != a) {
        var d = {};
        this.filterDescendants(a, d);
        this.roots = [];
        var e = !0,
            f;
        for (f in d)
            if (null != d[f]) {
                e = !1;
                break
            }
        for (; !e;) {
            for (var g = this.findRoots(a, d), e = 0; e < g.length; e++) {
                var k = {};
                b.push(k);
                this.traverse(g[e], !0, null, c, k, b, d)
            }
            for (e = 0; e < g.length; e++) this.roots.push(g[e]);
            e = !0;
            for (f in d)
                if (null != d[f]) {
                    e = !1;
                    break
                }
        }
    } else
        for (e = 0; e < this.roots.length; e++) k = {}, b.push(k), this.traverse(this.roots[e], !0, null, c, k, b, null);
    for (e = c =
        0; e < b.length; e++) {
        k = b[e];
        d = [];
        for (f in k) d.push(k[f]);
        this.model = new mxGraphHierarchyModel(this, d, this.roots, a, this.tightenToSource);
        this.cycleStage(a);
        this.layeringStage();
        this.crossingStage(a);
        c = this.placementStage(c, a)
    }
};
mxHierarchicalLayout.prototype.filterDescendants = function(a, b) {
    var c = this.graph.model;
    c.isVertex(a) && (a != this.parent && this.graph.isCellVisible(a)) && (b[mxObjectIdentity.get(a)] = a);
    if (this.traverseAncestors || a == this.parent && this.graph.isCellVisible(a))
        for (var d = c.getChildCount(a), e = 0; e < d; e++) {
            var f = c.getChildAt(a, e);
            this.isPort(f) || this.filterDescendants(f, b)
        }
};
mxHierarchicalLayout.prototype.isPort = function(a) {
    return a.geometry.relative ? !0 : !1
};
mxHierarchicalLayout.prototype.getEdgesBetween = function(a, b, c) {
    c = null != c ? c : !1;
    for (var d = this.getEdges(a), e = [], f = 0; f < d.length; f++) {
        var g = this.getVisibleTerminal(d[f], !0),
            k = this.getVisibleTerminal(d[f], !1);
        (g == a && k == b || !c && g == b && k == a) && e.push(d[f])
    }
    return e
};
mxHierarchicalLayout.prototype.traverse = function(a, b, c, d, e, f, g) {
    if (null != a && null != d) {
        var k = mxObjectIdentity.get(a);
        if (null == d[k] && (null == g || null != g[k])) {
            null == e[k] && (e[k] = a);
            null == d[k] && (d[k] = a);
            null !== g && delete g[k];
            var l = this.getEdges(a),
                k = [];
            for (c = 0; c < l.length; c++) k[c] = this.getVisibleTerminal(l[c], !0) == a;
            for (c = 0; c < l.length; c++)
                if (!b || k[c]) {
                    a = this.getVisibleTerminal(l[c], !k[c]);
                    for (var m = 1, n = 0; n < l.length; n++)
                        if (n != c) {
                            var p = k[n];
                            this.getVisibleTerminal(l[n], !p) == a && (p ? m++ : m--)
                        }
                    0 <= m && (e = this.traverse(a,
                        b, l[c], d, e, f, g))
                }
        } else if (null == e[k])
            for (c = 0; c < f.length; c++)
                if (b = f[c], null != b[k]) {
                    for (l in b) e[l] = b[l];
                    f.splice(c, 1);
                    break
                }
    }
    return e
};
mxHierarchicalLayout.prototype.cycleStage = function(a) {
    (new mxMinimumCycleRemover(this)).execute(a)
};
mxHierarchicalLayout.prototype.layeringStage = function() {
    this.model.initialRank();
    this.model.fixRanks()
};
mxHierarchicalLayout.prototype.crossingStage = function(a) {
    (new mxMedianHybridCrossingReduction(this)).execute(a)
};
mxHierarchicalLayout.prototype.placementStage = function(a, b) {
    var c = new mxCoordinateAssignment(this, this.intraCellSpacing, this.interRankCellSpacing, this.orientation, a, this.parallelEdgeSpacing);
    c.fineTuning = this.fineTuning;
    c.execute(b);
    return c.limitX + this.interHierarchySpacing
};

function mxSwimlaneLayout(a, b, c) {
    mxGraphLayout.call(this, a);
    this.orientation = null != b ? b : mxConstants.DIRECTION_NORTH;
    this.deterministic = null != c ? c : !0
}
mxSwimlaneLayout.prototype = new mxGraphLayout;
mxSwimlaneLayout.prototype.constructor = mxSwimlaneLayout;
mxSwimlaneLayout.prototype.roots = null;
mxSwimlaneLayout.prototype.swimlanes = null;
mxSwimlaneLayout.prototype.dummyVertices = null;
mxSwimlaneLayout.prototype.dummyVertexWidth = 50;
mxSwimlaneLayout.prototype.resizeParent = !1;
mxSwimlaneLayout.prototype.moveParent = !1;
mxSwimlaneLayout.prototype.parentBorder = 30;
mxSwimlaneLayout.prototype.intraCellSpacing = 30;
mxSwimlaneLayout.prototype.interRankCellSpacing = 100;
mxSwimlaneLayout.prototype.interHierarchySpacing = 60;
mxSwimlaneLayout.prototype.parallelEdgeSpacing = 10;
mxSwimlaneLayout.prototype.orientation = mxConstants.DIRECTION_NORTH;
mxSwimlaneLayout.prototype.fineTuning = !0;
mxSwimlaneLayout.prototype.tightenToSource = !0;
mxSwimlaneLayout.prototype.disableEdgeStyle = !0;
mxSwimlaneLayout.prototype.traverseAncestors = !0;
mxSwimlaneLayout.prototype.model = null;
mxSwimlaneLayout.prototype.edgesCache = null;
mxSwimlaneLayout.prototype.getModel = function() {
    return this.model
};
mxSwimlaneLayout.prototype.execute = function(a, b) {
    this.parent = a;
    var c = this.graph.model;
    this.edgesCache = {};
    if (!(null == b || 1 > b.length)) {
        null == a && (a = c.getParent(b[0]));
        this.swimlanes = b;
        this.dummyVertices = [];
        for (var d = 0; d < b.length; d++) {
            var e = this.graph.getChildCells(b[d]);
            if (null == e || 0 == e.length) e = this.graph.insertVertex(b[d], null, null, 0, 0, this.dummyVertexWidth, 0), this.dummyVertices.push(e)
        }
        c.beginUpdate();
        try {
            this.run(a), this.resizeParent && !this.graph.isCellCollapsed(a) && this.updateGroupBounds(), this.graph.removeCells(this.dummyVertices)
        } finally {
            c.endUpdate()
        }
    }
};
mxSwimlaneLayout.prototype.updateGroupBounds = function() {
    var a = [],
        b = this.model,
        c;
    for (c in b.edgeMapper)
        for (var d = b.edgeMapper[c], e = 0; e < d.edges.length; e++) a.push(d.edges[e]);
    a = this.graph.getBoundingBoxFromGeometry(a, !0);
    b = [];
    for (e = 0; e < this.swimlanes.length; e++) {
        var f = this.swimlanes[e];
        c = this.graph.getCellGeometry(f);
        if (null != c) {
            var g = this.graph.getChildCells(f),
                d = this.graph.isSwimlane(f) ? this.graph.getStartSize(f) : new mxRectangle,
                f = this.graph.getBoundingBoxFromGeometry(g);
            b[e] = f;
            d = f.y + c.y - d.height -
                this.parentBorder;
            c = f.y + c.y + f.height;
            null == a ? a = new mxRectangle(0, d, 0, c - d) : (a.y = Math.min(a.y, d), c = Math.max(a.y + a.height, c), a.height = c - a.y)
        }
    }
    for (e = 0; e < this.swimlanes.length; e++)
        if (f = this.swimlanes[e], c = this.graph.getCellGeometry(f), null != c) {
            var g = this.graph.getChildCells(f),
                d = this.graph.isSwimlane(f) ? this.graph.getStartSize(f) : new mxRectangle,
                k = c.clone(),
                l = 0 == e ? this.parentBorder : this.interRankCellSpacing / 2;
            k.x += b[e].x - d.width - l;
            k.y = k.y + a.y - c.y - this.parentBorder;
            k.width = b[e].width + d.width + this.interRankCellSpacing /
                2 + l;
            k.height = a.height + d.height + 2 * this.parentBorder;
            this.graph.model.setGeometry(f, k);
            this.graph.moveCells(g, -b[e].x + d.width + l, c.y - a.y + this.parentBorder)
        }
};
mxSwimlaneLayout.prototype.findRoots = function(a, b) {
    var c = [];
    if (null != a && null != b) {
        var d = this.graph.model,
            e = null,
            f = -1E5,
            g;
        for (g in b) {
            var k = b[g];
            if (null != k && d.isVertex(k) && this.graph.isCellVisible(k) && d.isAncestor(a, k)) {
                for (var l = this.getEdges(k), m = 0, n = 0, p = 0; p < l.length; p++) {
                    var q = this.getVisibleTerminal(l[p], !0);
                    q == k ? (q = this.getVisibleTerminal(l[p], !1), d.isAncestor(a, q) && m++) : d.isAncestor(a, q) && n++
                }
                0 == n && 0 < m && c.push(k);
                l = m - n;
                l > f && (f = l, e = k)
            }
        }
        0 == c.length && null != e && c.push(e)
    }
    return c
};
mxSwimlaneLayout.prototype.getEdges = function(a) {
    var b = mxCellPath.create(a);
    if (null != this.edgesCache[b]) return this.edgesCache[b];
    for (var c = this.graph.model, d = [], e = this.graph.isCellCollapsed(a), f = c.getChildCount(a), g = 0; g < f; g++) {
        var k = c.getChildAt(a, g);
        if (this.isPort(k)) d = d.concat(c.getEdges(k, !0, !0));
        else if (e || !this.graph.isCellVisible(k)) d = d.concat(c.getEdges(k, !0, !0))
    }
    d = d.concat(c.getEdges(a, !0, !0));
    c = [];
    for (g = 0; g < d.length; g++) e = this.getVisibleTerminal(d[g], !0), f = this.getVisibleTerminal(d[g], !1), (e == f || e != f && (f == a && (null == this.parent || this.graph.isValidAncestor(e, this.parent, this.traverseAncestors)) || e == a && (null == this.parent || this.graph.isValidAncestor(f, this.parent, this.traverseAncestors)))) && c.push(d[g]);
    return this.edgesCache[b] = c
};
mxSwimlaneLayout.prototype.getVisibleTerminal = function(a, b) {
    var c = this.graph.view.getState(a),
        c = null != c ? c.getVisibleTerminal(b) : this.graph.view.getVisibleTerminal(a, b);
    this.isPort(c) && (c = this.graph.model.getParent(c));
    return c
};
mxSwimlaneLayout.prototype.run = function(a) {
    var b = [],
        c = [];
    if (null != this.swimlanes && 0 < this.swimlanes.length && null != a) {
        for (var d = {}, e = 0; e < this.swimlanes.length; e++) this.filterDescendants(this.swimlanes[e], d);
        this.roots = [];
        var e = !0,
            f;
        for (f in d)
            if (null != d[f]) {
                e = !1;
                break
            }
        for (var g = 0; !e && g < this.swimlanes.length;) {
            var k = this.findRoots(this.swimlanes[g], d);
            if (0 == k.length) g++;
            else {
                for (e = 0; e < k.length; e++) {
                    var l = {};
                    b.push(l);
                    this.traverse(k[e], !0, null, c, l, b, d, g)
                }
                for (e = 0; e < k.length; e++) this.roots.push(k[e]);
                e = !0;
                for (f in d)
                    if (null != d[f]) {
                        e = !1;
                        break
                    }
            }
        }
    } else
        for (e = 0; e < this.roots.length; e++) l = {}, b.push(l), this.traverse(this.roots[e], !0, null, c, l, b, null);
    b = [];
    for (f in c) b.push(c[f]);
    this.model = new mxSwimlaneModel(this, b, this.roots, a, this.tightenToSource);
    this.cycleStage(a);
    this.layeringStage();
    this.crossingStage(a);
    initialX = this.placementStage(0, a)
};
mxSwimlaneLayout.prototype.filterDescendants = function(a, b) {
    var c = this.graph.model;
    c.isVertex(a) && (a != this.parent && c.getParent(a) != this.parent && this.graph.isCellVisible(a)) && (b[mxCellPath.create(a)] = a);
    if (this.traverseAncestors || a == this.parent && this.graph.isCellVisible(a))
        for (var d = c.getChildCount(a), e = 0; e < d; e++) {
            var f = c.getChildAt(a, e);
            this.isPort(f) || this.filterDescendants(f, b)
        }
};
mxSwimlaneLayout.prototype.isPort = function(a) {
    return a.geometry.relative ? !0 : !1
};
mxSwimlaneLayout.prototype.getEdgesBetween = function(a, b, c) {
    c = null != c ? c : !1;
    for (var d = this.getEdges(a), e = [], f = 0; f < d.length; f++) {
        var g = this.getVisibleTerminal(d[f], !0),
            k = this.getVisibleTerminal(d[f], !1);
        (g == a && k == b || !c && g == b && k == a) && e.push(d[f])
    }
    return e
};
mxSwimlaneLayout.prototype.traverse = function(a, b, c, d, e, f, g, k) {
    if (null != a && null != d) {
        var l = mxCellPath.create(a);
        if (null == d[l] && (null == g || null != g[l])) {
            null == e[l] && (e[l] = a);
            null == d[l] && (d[l] = a);
            null !== g && delete g[l];
            var m = this.getEdges(a),
                l = this.graph.model;
            for (c = 0; c < m.length; c++) {
                var n = this.getVisibleTerminal(m[c], !0),
                    p = n == a;
                p && (n = this.getVisibleTerminal(m[c], !1));
                for (var q = 0, q = 0; q < this.swimlanes.length && !l.isAncestor(this.swimlanes[q], n); q++);
                if (!(q >= this.swimlanes.length) && (q > k || (!b || p) && q == k)) e = this.traverse(n,
                    b, m[c], d, e, f, g, q)
            }
        } else if (null == e[l])
            for (c = 0; c < f.length; c++)
                if (a = f[c], null != a[l]) {
                    for (m in a) e[m] = a[m];
                    f.splice(c, 1);
                    break
                }
    }
    return e
};
mxSwimlaneLayout.prototype.cycleStage = function(a) {
    (new mxSwimlaneOrdering(this)).execute(a)
};
mxSwimlaneLayout.prototype.layeringStage = function() {
    this.model.initialRank();
    this.model.fixRanks()
};
mxSwimlaneLayout.prototype.crossingStage = function(a) {
    (new mxMedianHybridCrossingReduction(this)).execute(a)
};
mxSwimlaneLayout.prototype.placementStage = function(a, b) {
    var c = new mxCoordinateAssignment(this, this.intraCellSpacing, this.interRankCellSpacing, this.orientation, a, this.parallelEdgeSpacing);
    c.fineTuning = this.fineTuning;
    c.execute(b);
    return c.limitX + this.interHierarchySpacing
};

function mxGraphModel(a) {
    this.currentEdit = this.createUndoableEdit();
    null != a ? this.setRoot(a) : this.clear()
}
mxGraphModel.prototype = new mxEventSource;
mxGraphModel.prototype.constructor = mxGraphModel;
mxGraphModel.prototype.root = null;
mxGraphModel.prototype.cells = null;
mxGraphModel.prototype.maintainEdgeParent = !0;
mxGraphModel.prototype.createIds = !0;
mxGraphModel.prototype.prefix = "";
mxGraphModel.prototype.postfix = "";
mxGraphModel.prototype.nextId = 0;
mxGraphModel.prototype.currentEdit = null;
mxGraphModel.prototype.updateLevel = 0;
mxGraphModel.prototype.endingUpdate = !1;
mxGraphModel.prototype.clear = function() {
    this.setRoot(this.createRoot())
};
mxGraphModel.prototype.isCreateIds = function() {
    return this.createIds
};
mxGraphModel.prototype.setCreateIds = function(a) {
    this.createIds = a
};
mxGraphModel.prototype.createRoot = function() {
    var a = new mxCell;
    a.insert(new mxCell);
    return a
};
mxGraphModel.prototype.getCell = function(a) {
    return null != this.cells ? this.cells[a] : null
};
mxGraphModel.prototype.filterCells = function(a, b) {
    var c = null;
    if (null != a)
        for (var c = [], d = 0; d < a.length; d++) b(a[d]) && c.push(a[d]);
    return c
};
mxGraphModel.prototype.getDescendants = function(a) {
    return this.filterDescendants(null, a)
};
mxGraphModel.prototype.filterDescendants = function(a, b) {
    var c = [];
    b = b || this.getRoot();
    (null == a || a(b)) && c.push(b);
    for (var d = this.getChildCount(b), e = 0; e < d; e++) var f = this.getChildAt(b, e),
        c = c.concat(this.filterDescendants(a, f));
    return c
};
mxGraphModel.prototype.getRoot = function(a) {
    var b = a || this.root;
    if (null != a)
        for (; null != a;) b = a, a = this.getParent(a);
    return b
};
mxGraphModel.prototype.setRoot = function(a) {
    this.execute(new mxRootChange(this, a));
    return a
};
mxGraphModel.prototype.rootChanged = function(a) {
    var b = this.root;
    this.root = a;
    this.nextId = 0;
    this.cells = null;
    this.cellAdded(a);
    return b
};
mxGraphModel.prototype.isRoot = function(a) {
    return null != a && this.root == a
};
mxGraphModel.prototype.isLayer = function(a) {
    return this.isRoot(this.getParent(a))
};
mxGraphModel.prototype.isAncestor = function(a, b) {
    for (; null != b && b != a;) b = this.getParent(b);
    return b == a
};
mxGraphModel.prototype.contains = function(a) {
    return this.isAncestor(this.root, a)
};
mxGraphModel.prototype.getParent = function(a) {
    return null != a ? a.getParent() : null
};
mxGraphModel.prototype.add = function(a, b, c) {
    if (b != a && null != a && null != b) {
        null == c && (c = this.getChildCount(a));
        var d = a != this.getParent(b);
        this.execute(new mxChildChange(this, a, b, c));
        this.maintainEdgeParent && d && this.updateEdgeParents(b)
    }
    return b
};
mxGraphModel.prototype.cellAdded = function(a) {
    if (null != a) {
        null == a.getId() && this.createIds && a.setId(this.createId(a));
        if (null != a.getId()) {
            var b = this.getCell(a.getId());
            if (b != a) {
                for (; null != b;) a.setId(this.createId(a)), b = this.getCell(a.getId());
                null == this.cells && (this.cells = {});
                this.cells[a.getId()] = a
            }
        }
        mxUtils.isNumeric(a.getId()) && (this.nextId = Math.max(this.nextId, a.getId()));
        for (var b = this.getChildCount(a), c = 0; c < b; c++) this.cellAdded(this.getChildAt(a, c))
    }
};
mxGraphModel.prototype.createId = function(a) {
    a = this.nextId;
    this.nextId++;
    return this.prefix + a + this.postfix
};
mxGraphModel.prototype.updateEdgeParents = function(a, b) {
    b = b || this.getRoot(a);
    for (var c = this.getChildCount(a), d = 0; d < c; d++) {
        var e = this.getChildAt(a, d);
        this.updateEdgeParents(e, b)
    }
    e = this.getEdgeCount(a);
    c = [];
    for (d = 0; d < e; d++) c.push(this.getEdgeAt(a, d));
    for (d = 0; d < c.length; d++) e = c[d], this.isAncestor(b, e) && this.updateEdgeParent(e, b)
};
mxGraphModel.prototype.updateEdgeParent = function(a, b) {
    for (var c = this.getTerminal(a, !0), d = this.getTerminal(a, !1), e = null; null != c && !this.isEdge(c) && null != c.geometry && c.geometry.relative;) c = this.getParent(c);
    for (; null != d && !this.isEdge(d) && null != d.geometry && d.geometry.relative;) d = this.getParent(d);
    if (this.isAncestor(b, c) && this.isAncestor(b, d) && (e = c == d ? this.getParent(c) : this.getNearestCommonAncestor(c, d), null != e && (this.getParent(e) != this.root || this.isAncestor(e, a)) && this.getParent(a) != e)) {
        c = this.getGeometry(a);
        if (null != c) {
            var f = this.getOrigin(this.getParent(a)),
                g = this.getOrigin(e),
                d = g.x - f.x,
                f = g.y - f.y,
                c = c.clone();
            c.translate(-d, -f);
            this.setGeometry(a, c)
        }
        this.add(e, a, this.getChildCount(e))
    }
};
mxGraphModel.prototype.getOrigin = function(a) {
    var b = null;
    null != a ? (b = this.getOrigin(this.getParent(a)), this.isEdge(a) || (a = this.getGeometry(a), null != a && (b.x += a.x, b.y += a.y))) : b = new mxPoint;
    return b
};
mxGraphModel.prototype.getNearestCommonAncestor = function(a, b) {
    if (null != a && null != b) {
        var c = mxCellPath.create(b);
        if (null != c && 0 < c.length) {
            var d = a,
                e = mxCellPath.create(d);
            if (c.length < e.length) var d = b,
                f = e,
                e = c,
                c = f;
            for (; null != d;) {
                f = this.getParent(d);
                if (0 == c.indexOf(e + mxCellPath.PATH_SEPARATOR) && null != f) return d;
                e = mxCellPath.getParentPath(e);
                d = f
            }
        }
    }
    return null
};
mxGraphModel.prototype.remove = function(a) {
    a == this.root ? this.setRoot(null) : null != this.getParent(a) && this.execute(new mxChildChange(this, null, a));
    return a
};
mxGraphModel.prototype.cellRemoved = function(a) {
    if (null != a && null != this.cells) {
        for (var b = this.getChildCount(a) - 1; 0 <= b; b--) this.cellRemoved(this.getChildAt(a, b));
        null != this.cells && null != a.getId() && delete this.cells[a.getId()]
    }
};
mxGraphModel.prototype.parentForCellChanged = function(a, b, c) {
    var d = this.getParent(a);
    null != b ? (b != d || d.getIndex(a) != c) && b.insert(a, c) : null != d && (c = d.getIndex(a), d.remove(c));
    !this.contains(d) && null != b ? this.cellAdded(a) : null == b && this.cellRemoved(a);
    return d
};
mxGraphModel.prototype.getChildCount = function(a) {
    return null != a ? a.getChildCount() : 0
};
mxGraphModel.prototype.getChildAt = function(a, b) {
    return null != a ? a.getChildAt(b) : null
};
mxGraphModel.prototype.getChildren = function(a) {
    return null != a ? a.children : null
};
mxGraphModel.prototype.getChildVertices = function(a) {
    return this.getChildCells(a, !0, !1)
};
mxGraphModel.prototype.getChildEdges = function(a) {
    return this.getChildCells(a, !1, !0)
};
mxGraphModel.prototype.getChildCells = function(a, b, c) {
    b = null != b ? b : !1;
    c = null != c ? c : !1;
    for (var d = this.getChildCount(a), e = [], f = 0; f < d; f++) {
        var g = this.getChildAt(a, f);
        (!c && !b || c && this.isEdge(g) || b && this.isVertex(g)) && e.push(g)
    }
    return e
};
mxGraphModel.prototype.getTerminal = function(a, b) {
    return null != a ? a.getTerminal(b) : null
};
mxGraphModel.prototype.setTerminal = function(a, b, c) {
    var d = b != this.getTerminal(a, c);
    this.execute(new mxTerminalChange(this, a, b, c));
    this.maintainEdgeParent && d && this.updateEdgeParent(a, this.getRoot());
    return b
};
mxGraphModel.prototype.setTerminals = function(a, b, c) {
    this.beginUpdate();
    try {
        this.setTerminal(a, b, !0), this.setTerminal(a, c, !1)
    } finally {
        this.endUpdate()
    }
};
mxGraphModel.prototype.terminalForCellChanged = function(a, b, c) {
    var d = this.getTerminal(a, c);
    null != b ? b.insertEdge(a, c) : null != d && d.removeEdge(a, c);
    return d
};
mxGraphModel.prototype.getEdgeCount = function(a) {
    return null != a ? a.getEdgeCount() : 0
};
mxGraphModel.prototype.getEdgeAt = function(a, b) {
    return null != a ? a.getEdgeAt(b) : null
};
mxGraphModel.prototype.getDirectedEdgeCount = function(a, b, c) {
    for (var d = 0, e = this.getEdgeCount(a), f = 0; f < e; f++) {
        var g = this.getEdgeAt(a, f);
        g != c && this.getTerminal(g, b) == a && d++
    }
    return d
};
mxGraphModel.prototype.getConnections = function(a) {
    return this.getEdges(a, !0, !0, !1)
};
mxGraphModel.prototype.getIncomingEdges = function(a) {
    return this.getEdges(a, !0, !1, !1)
};
mxGraphModel.prototype.getOutgoingEdges = function(a) {
    return this.getEdges(a, !1, !0, !1)
};
mxGraphModel.prototype.getEdges = function(a, b, c, d) {
    b = null != b ? b : !0;
    c = null != c ? c : !0;
    d = null != d ? d : !0;
    for (var e = this.getEdgeCount(a), f = [], g = 0; g < e; g++) {
        var k = this.getEdgeAt(a, g),
            l = this.getTerminal(k, !0),
            m = this.getTerminal(k, !1);
        (d && l == m || l != m && (b && m == a || c && l == a)) && f.push(k)
    }
    return f
};
mxGraphModel.prototype.getEdgesBetween = function(a, b, c) {
    c = null != c ? c : !1;
    var d = this.getEdgeCount(a),
        e = this.getEdgeCount(b),
        f = a,
        g = d;
    e < d && (g = e, f = b);
    d = [];
    for (e = 0; e < g; e++) {
        var k = this.getEdgeAt(f, e),
            l = this.getTerminal(k, !0),
            m = this.getTerminal(k, !1),
            n = m == a && l == b;
        (l == a && m == b || !c && n) && d.push(k)
    }
    return d
};
mxGraphModel.prototype.getOpposites = function(a, b, c, d) {
    c = null != c ? c : !0;
    d = null != d ? d : !0;
    var e = [];
    if (null != a)
        for (var f = 0; f < a.length; f++) {
            var g = this.getTerminal(a[f], !0),
                k = this.getTerminal(a[f], !1);
            g == b && null != k && k != b && d ? e.push(k) : k == b && (null != g && g != b && c) && e.push(g)
        }
    return e
};
mxGraphModel.prototype.getTopmostCells = function(a) {
    for (var b = [], c = 0; c < a.length; c++) {
        for (var d = a[c], e = !0, f = this.getParent(d); null != f;) {
            if (0 <= mxUtils.indexOf(a, f)) {
                e = !1;
                break
            }
            f = this.getParent(f)
        }
        e && b.push(d)
    }
    return b
};
mxGraphModel.prototype.isVertex = function(a) {
    return null != a ? a.isVertex() : !1
};
mxGraphModel.prototype.isEdge = function(a) {
    return null != a ? a.isEdge() : !1
};
mxGraphModel.prototype.isConnectable = function(a) {
    return null != a ? a.isConnectable() : !1
};
mxGraphModel.prototype.getValue = function(a) {
    return null != a ? a.getValue() : null
};
mxGraphModel.prototype.setValue = function(a, b) {
    this.execute(new mxValueChange(this, a, b));
    return b
};
mxGraphModel.prototype.valueForCellChanged = function(a, b) {
    return a.valueChanged(b)
};
mxGraphModel.prototype.getGeometry = function(a) {
    return null != a ? a.getGeometry() : null
};
mxGraphModel.prototype.setGeometry = function(a, b) {
    b != this.getGeometry(a) && this.execute(new mxGeometryChange(this, a, b));
    return b
};
mxGraphModel.prototype.geometryForCellChanged = function(a, b) {
    var c = this.getGeometry(a);
    a.setGeometry(b);
    return c
};
mxGraphModel.prototype.getStyle = function(a) {
    return null != a ? a.getStyle() : null
};
mxGraphModel.prototype.setStyle = function(a, b) {
    b != this.getStyle(a) && this.execute(new mxStyleChange(this, a, b));
    return b
};
mxGraphModel.prototype.styleForCellChanged = function(a, b) {
    var c = this.getStyle(a);
    a.setStyle(b);
    return c
};
mxGraphModel.prototype.isCollapsed = function(a) {
    return null != a ? a.isCollapsed() : !1
};
mxGraphModel.prototype.setCollapsed = function(a, b) {
    b != this.isCollapsed(a) && this.execute(new mxCollapseChange(this, a, b));
    return b
};
mxGraphModel.prototype.collapsedStateForCellChanged = function(a, b) {
    var c = this.isCollapsed(a);
    a.setCollapsed(b);
    return c
};
mxGraphModel.prototype.isVisible = function(a) {
    return null != a ? a.isVisible() : !1
};
mxGraphModel.prototype.setVisible = function(a, b) {
    b != this.isVisible(a) && this.execute(new mxVisibleChange(this, a, b));
    return b
};
mxGraphModel.prototype.visibleStateForCellChanged = function(a, b) {
    var c = this.isVisible(a);
    a.setVisible(b);
    return c
};
mxGraphModel.prototype.execute = function(a) {
    a.execute();
    this.beginUpdate();
    this.currentEdit.add(a);
    this.fireEvent(new mxEventObject(mxEvent.EXECUTE, "change", a));
    this.fireEvent(new mxEventObject(mxEvent.EXECUTED, "change", a));
    this.endUpdate()
};
mxGraphModel.prototype.beginUpdate = function() {
    this.updateLevel++;
    this.fireEvent(new mxEventObject(mxEvent.BEGIN_UPDATE));
    1 == this.updateLevel && this.fireEvent(new mxEventObject(mxEvent.START_EDIT))
};
mxGraphModel.prototype.endUpdate = function() {
    this.updateLevel--;
    0 == this.updateLevel && this.fireEvent(new mxEventObject(mxEvent.END_EDIT));
    if (!this.endingUpdate) {
        this.endingUpdate = 0 == this.updateLevel;
        this.fireEvent(new mxEventObject(mxEvent.END_UPDATE, "edit", this.currentEdit));
        try {
            if (this.endingUpdate && !this.currentEdit.isEmpty()) {
                this.fireEvent(new mxEventObject(mxEvent.BEFORE_UNDO, "edit", this.currentEdit));
                var a = this.currentEdit;
                this.currentEdit = this.createUndoableEdit();
                a.notify();
                this.fireEvent(new mxEventObject(mxEvent.UNDO,
                    "edit", a))
            }
        } finally {
            this.endingUpdate = !1
        }
    }
};
mxGraphModel.prototype.createUndoableEdit = function() {
    var a = new mxUndoableEdit(this, !0);
    a.notify = function() {
        a.source.fireEvent(new mxEventObject(mxEvent.CHANGE, "edit", a, "changes", a.changes));
        a.source.fireEvent(new mxEventObject(mxEvent.NOTIFY, "edit", a, "changes", a.changes))
    };
    return a
};
mxGraphModel.prototype.mergeChildren = function(a, b, c) {
    c = null != c ? c : !0;
    this.beginUpdate();
    try {
        var d = {};
        this.mergeChildrenImpl(a, b, c, d);
        for (var e in d) {
            var f = d[e],
                g = this.getTerminal(f, !0);
            null != g && (g = d[mxCellPath.create(g)], this.setTerminal(f, g, !0));
            g = this.getTerminal(f, !1);
            null != g && (g = d[mxCellPath.create(g)], this.setTerminal(f, g, !1))
        }
    } finally {
        this.endUpdate()
    }
};
mxGraphModel.prototype.mergeChildrenImpl = function(a, b, c, d) {
    this.beginUpdate();
    try {
        for (var e = a.getChildCount(), f = 0; f < e; f++) {
            var g = a.getChildAt(f);
            if ("function" == typeof g.getId) {
                var k = g.getId(),
                    l = null != k && (!this.isEdge(g) || !c) ? this.getCell(k) : null;
                if (null == l) {
                    var m = g.clone();
                    m.setId(k);
                    m.setTerminal(g.getTerminal(!0), !0);
                    m.setTerminal(g.getTerminal(!1), !1);
                    l = b.insert(m);
                    this.cellAdded(l)
                }
                d[mxCellPath.create(g)] = l;
                this.mergeChildrenImpl(g, l, c, d)
            }
        }
    } finally {
        this.endUpdate()
    }
};
mxGraphModel.prototype.getParents = function(a) {
    var b = [];
    if (null != a)
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = this.getParent(a[d]);
            if (null != e) {
                var f = mxCellPath.create(e);
                null == c[f] && (c[f] = e, b.push(e))
            }
        }
    return b
};
mxGraphModel.prototype.cloneCell = function(a) {
    return null != a ? this.cloneCells([a], !0)[0] : null
};
mxGraphModel.prototype.cloneCells = function(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) null != a[e] ? d.push(this.cloneCellImpl(a[e], c, b)) : d.push(null);
    for (e = 0; e < d.length; e++) null != d[e] && this.restoreClone(d[e], a[e], c);
    return d
};
mxGraphModel.prototype.cloneCellImpl = function(a, b, c) {
    var d = this.cellCloned(a);
    b[mxObjectIdentity.get(a)] = d;
    if (c) {
        c = this.getChildCount(a);
        for (var e = 0; e < c; e++) {
            var f = this.cloneCellImpl(this.getChildAt(a, e), b, !0);
            d.insert(f)
        }
    }
    return d
};
mxGraphModel.prototype.cellCloned = function(a) {
    return a.clone()
};
mxGraphModel.prototype.restoreClone = function(a, b, c) {
    var d = this.getTerminal(b, !0);
    null != d && (d = c[mxObjectIdentity.get(d)], null != d && d.insertEdge(a, !0));
    d = this.getTerminal(b, !1);
    null != d && (d = c[mxObjectIdentity.get(d)], null != d && d.insertEdge(a, !1));
    for (var d = this.getChildCount(a), e = 0; e < d; e++) this.restoreClone(this.getChildAt(a, e), this.getChildAt(b, e), c)
};

function mxRootChange(a, b) {
    this.model = a;
    this.previous = this.root = b
}
mxRootChange.prototype.execute = function() {
    this.root = this.previous;
    this.previous = this.model.rootChanged(this.previous)
};

function mxChildChange(a, b, c, d) {
    this.model = a;
    this.previous = this.parent = b;
    this.child = c;
    this.previousIndex = this.index = d
}
mxChildChange.prototype.execute = function() {
    var a = this.model.getParent(this.child),
        b = null != a ? a.getIndex(this.child) : 0;
    null == this.previous && this.connect(this.child, !1);
    a = this.model.parentForCellChanged(this.child, this.previous, this.previousIndex);
    null != this.previous && this.connect(this.child, !0);
    this.parent = this.previous;
    this.previous = a;
    this.index = this.previousIndex;
    this.previousIndex = b
};
mxChildChange.prototype.connect = function(a, b) {
    b = null != b ? b : !0;
    var c = a.getTerminal(!0),
        d = a.getTerminal(!1);
    null != c && (b ? this.model.terminalForCellChanged(a, c, !0) : this.model.terminalForCellChanged(a, null, !0));
    null != d && (b ? this.model.terminalForCellChanged(a, d, !1) : this.model.terminalForCellChanged(a, null, !1));
    a.setTerminal(c, !0);
    a.setTerminal(d, !1);
    c = this.model.getChildCount(a);
    for (d = 0; d < c; d++) this.connect(this.model.getChildAt(a, d), b)
};

function mxTerminalChange(a, b, c, d) {
    this.model = a;
    this.cell = b;
    this.previous = this.terminal = c;
    this.source = d
}
mxTerminalChange.prototype.execute = function() {
    this.terminal = this.previous;
    this.previous = this.model.terminalForCellChanged(this.cell, this.previous, this.source)
};

function mxValueChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.value = c
}
mxValueChange.prototype.execute = function() {
    this.value = this.previous;
    this.previous = this.model.valueForCellChanged(this.cell, this.previous)
};

function mxStyleChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.style = c
}
mxStyleChange.prototype.execute = function() {
    this.style = this.previous;
    this.previous = this.model.styleForCellChanged(this.cell, this.previous)
};

function mxGeometryChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.geometry = c
}
mxGeometryChange.prototype.execute = function() {
    this.geometry = this.previous;
    this.previous = this.model.geometryForCellChanged(this.cell, this.previous)
};

function mxCollapseChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.collapsed = c
}
mxCollapseChange.prototype.execute = function() {
    this.collapsed = this.previous;
    this.previous = this.model.collapsedStateForCellChanged(this.cell, this.previous)
};

function mxVisibleChange(a, b, c) {
    this.model = a;
    this.cell = b;
    this.previous = this.visible = c
}
mxVisibleChange.prototype.execute = function() {
    this.visible = this.previous;
    this.previous = this.model.visibleStateForCellChanged(this.cell, this.previous)
};

function mxCellAttributeChange(a, b, c) {
    this.cell = a;
    this.attribute = b;
    this.previous = this.value = c
}
mxCellAttributeChange.prototype.execute = function() {
    var a = this.cell.getAttribute(this.attribute);
    null == this.previous ? this.cell.value.removeAttribute(this.attribute) : this.cell.setAttribute(this.attribute, this.previous);
    this.previous = a
};

function mxCell(a, b, c) {
    this.value = a;
    this.setGeometry(b);
    this.setStyle(c);
    if (null != this.onInit) this.onInit()
}
mxCell.prototype.id = null;
mxCell.prototype.value = null;
mxCell.prototype.geometry = null;
mxCell.prototype.style = null;
mxCell.prototype.vertex = !1;
mxCell.prototype.edge = !1;
mxCell.prototype.connectable = !0;
mxCell.prototype.visible = !0;
mxCell.prototype.collapsed = !1;
mxCell.prototype.parent = null;
mxCell.prototype.source = null;
mxCell.prototype.target = null;
mxCell.prototype.children = null;
mxCell.prototype.edges = null;
mxCell.prototype.mxTransient = "id value parent source target children edges".split(" ");
mxCell.prototype.getId = function() {
    return this.id
};
mxCell.prototype.setId = function(a) {
    this.id = a
};
mxCell.prototype.getValue = function() {
    return this.value
};
mxCell.prototype.setValue = function(a) {
    this.value = a
};
mxCell.prototype.valueChanged = function(a) {
    var b = this.getValue();
    this.setValue(a);
    return b
};
mxCell.prototype.getGeometry = function() {
    return this.geometry
};
mxCell.prototype.setGeometry = function(a) {
    this.geometry = a
};
mxCell.prototype.getStyle = function() {
    return this.style
};
mxCell.prototype.setStyle = function(a) {
    this.style = a
};
mxCell.prototype.isVertex = function() {
    return this.vertex
};
mxCell.prototype.setVertex = function(a) {
    this.vertex = a
};
mxCell.prototype.isEdge = function() {
    return this.edge
};
mxCell.prototype.setEdge = function(a) {
    this.edge = a
};
mxCell.prototype.isConnectable = function() {
    return this.connectable
};
mxCell.prototype.setConnectable = function(a) {
    this.connectable = a
};
mxCell.prototype.isVisible = function() {
    return this.visible
};
mxCell.prototype.setVisible = function(a) {
    this.visible = a
};
mxCell.prototype.isCollapsed = function() {
    return this.collapsed
};
mxCell.prototype.setCollapsed = function(a) {
    this.collapsed = a
};
mxCell.prototype.getParent = function() {
    return this.parent
};
mxCell.prototype.setParent = function(a) {
    this.parent = a
};
mxCell.prototype.getTerminal = function(a) {
    return a ? this.source : this.target
};
mxCell.prototype.setTerminal = function(a, b) {
    b ? this.source = a : this.target = a;
    return a
};
mxCell.prototype.getChildCount = function() {
    return null == this.children ? 0 : this.children.length
};
mxCell.prototype.getIndex = function(a) {
    return mxUtils.indexOf(this.children, a)
};
mxCell.prototype.getChildAt = function(a) {
    return null == this.children ? null : this.children[a]
};
mxCell.prototype.insert = function(a, b) {
    null != a && (null == b && (b = this.getChildCount(), a.getParent() == this && b--), a.removeFromParent(), a.setParent(this), null == this.children ? (this.children = [], this.children.push(a)) : this.children.splice(b, 0, a));
    return a
};
mxCell.prototype.remove = function(a) {
    var b = null;
    null != this.children && 0 <= a && (b = this.getChildAt(a), null != b && (this.children.splice(a, 1), b.setParent(null)));
    return b
};
mxCell.prototype.removeFromParent = function() {
    if (null != this.parent) {
        var a = this.parent.getIndex(this);
        this.parent.remove(a)
    }
};
mxCell.prototype.getEdgeCount = function() {
    return null == this.edges ? 0 : this.edges.length
};
mxCell.prototype.getEdgeIndex = function(a) {
    return mxUtils.indexOf(this.edges, a)
};
mxCell.prototype.getEdgeAt = function(a) {
    return null == this.edges ? null : this.edges[a]
};
mxCell.prototype.insertEdge = function(a, b) {
    if (null != a && (a.removeFromTerminal(b), a.setTerminal(this, b), null == this.edges || a.getTerminal(!b) != this || 0 > mxUtils.indexOf(this.edges, a))) null == this.edges && (this.edges = []), this.edges.push(a);
    return a
};
mxCell.prototype.removeEdge = function(a, b) {
    if (null != a) {
        if (a.getTerminal(!b) != this && null != this.edges) {
            var c = this.getEdgeIndex(a);
            0 <= c && this.edges.splice(c, 1)
        }
        a.setTerminal(null, b)
    }
    return a
};
mxCell.prototype.removeFromTerminal = function(a) {
    var b = this.getTerminal(a);
    null != b && b.removeEdge(this, a)
};
mxCell.prototype.getAttribute = function(a, b) {
    var c = this.getValue();
    return (null != c && c.nodeType == mxConstants.NODETYPE_ELEMENT ? c.getAttribute(a) : null) || b
};
mxCell.prototype.setAttribute = function(a, b) {
    var c = this.getValue();
    null != c && c.nodeType == mxConstants.NODETYPE_ELEMENT && c.setAttribute(a, b)
};
mxCell.prototype.clone = function() {
    var a = mxUtils.clone(this, this.mxTransient);
    a.setValue(this.cloneValue());
    return a
};
mxCell.prototype.cloneValue = function() {
    var a = this.getValue();
    null != a && ("function" == typeof a.clone ? a = a.clone() : isNaN(a.nodeType) || (a = a.cloneNode(!0)));
    return a
};

function mxGeometry(a, b, c, d) {
    mxRectangle.call(this, a, b, c, d)
}
mxGeometry.prototype = new mxRectangle;
mxGeometry.prototype.constructor = mxGeometry;
mxGeometry.prototype.TRANSLATE_CONTROL_POINTS = !0;
mxGeometry.prototype.alternateBounds = null;
mxGeometry.prototype.sourcePoint = null;
mxGeometry.prototype.targetPoint = null;
mxGeometry.prototype.points = null;
mxGeometry.prototype.offset = null;
mxGeometry.prototype.relative = !1;
mxGeometry.prototype.swap = function() {
    if (null != this.alternateBounds) {
        var a = new mxRectangle(this.x, this.y, this.width, this.height);
        this.x = this.alternateBounds.x;
        this.y = this.alternateBounds.y;
        this.width = this.alternateBounds.width;
        this.height = this.alternateBounds.height;
        this.alternateBounds = a
    }
};
mxGeometry.prototype.getTerminalPoint = function(a) {
    return a ? this.sourcePoint : this.targetPoint
};
mxGeometry.prototype.setTerminalPoint = function(a, b) {
    b ? this.sourcePoint = a : this.targetPoint = a;
    return a
};
mxGeometry.prototype.translate = function(a, b) {
    this.clone();
    this.relative || (this.x += a, this.y += b);
    null != this.sourcePoint && (this.sourcePoint.x += a, this.sourcePoint.y += b);
    null != this.targetPoint && (this.targetPoint.x += a, this.targetPoint.y += b);
    if (this.TRANSLATE_CONTROL_POINTS && null != this.points)
        for (var c = this.points.length, d = 0; d < c; d++) {
            var e = this.points[d];
            null != e && (e.x += a, e.y += b)
        }
};
mxGeometry.prototype.equals = function(a) {
    return mxRectangle.prototype.equals.apply(this, arguments) && this.relative == a.relative && (null == this.sourcePoint && null == a.sourcePoint || null != this.sourcePoint && this.sourcePoint.equals(a.sourcePoint)) && (null == this.targetPoint && null == a.targetPoint || null != this.targetPoint && this.targetPoint.equals(a.targetPoint)) && (null == this.points && null == a.points || null != this.points && mxUtils.equalPoints(this.points, a.points)) && (null == this.alternateBounds && null == a.alternateBounds ||
        null != this.alternateBounds && this.alternateBounds.equals(a.alternateBounds)) && (null == this.offset && null == a.offset || null != this.offset && this.offset.equals(a.offset))
};
var mxCellPath = {
        PATH_SEPARATOR: ".",
        create: function(a) {
            var b = "";
            if (null != a)
                for (var c = a.getParent(); null != c;) b = c.getIndex(a) + mxCellPath.PATH_SEPARATOR + b, a = c, c = a.getParent();
            a = b.length;
            1 < a && (b = b.substring(0, a - 1));
            return b
        },
        getParentPath: function(a) {
            if (null != a) {
                var b = a.lastIndexOf(mxCellPath.PATH_SEPARATOR);
                if (0 <= b) return a.substring(0, b);
                if (0 < a.length) return ""
            }
            return null
        },
        resolve: function(a, b) {
            var c = a;
            if (null != b)
                for (var d = b.split(mxCellPath.PATH_SEPARATOR), e = 0; e < d.length; e++) c = c.getChildAt(parseInt(d[e]));
            return c
        },
        compare: function(a, b) {
            for (var c = Math.min(a.length, b.length), d = 0, e = 0; e < c; e++)
                if (a[e] != b[e]) {
                    0 == a[e].length || 0 == b[e].length ? d = a[e] == b[e] ? 0 : a[e] > b[e] ? 1 : -1 : (c = parseInt(a[e]), e = parseInt(b[e]), d = c == e ? 0 : c > e ? 1 : -1);
                    break
                }
            0 == d && (c = a.length, e = b.length, c != e && (d = c > e ? 1 : -1));
            return d
        }
    },
    mxPerimeter = {
        RectanglePerimeter: function(a, b, c, d) {
            b = a.getCenterX();
            var e = a.getCenterY(),
                f = Math.atan2(c.y - e, c.x - b),
                g = new mxPoint(0, 0),
                k = Math.PI,
                l = Math.PI / 2 - f,
                m = Math.atan2(a.height, a.width);
            f < -k + m || f > k - m ? (g.x = a.x, g.y = e - a.width *
                Math.tan(f) / 2) : f < -m ? (g.y = a.y, g.x = b - a.height * Math.tan(l) / 2) : f < m ? (g.x = a.x + a.width, g.y = e + a.width * Math.tan(f) / 2) : (g.y = a.y + a.height, g.x = b + a.height * Math.tan(l) / 2);
            d && (c.x >= a.x && c.x <= a.x + a.width ? g.x = c.x : c.y >= a.y && c.y <= a.y + a.height && (g.y = c.y), c.x < a.x ? g.x = a.x : c.x > a.x + a.width && (g.x = a.x + a.width), c.y < a.y ? g.y = a.y : c.y > a.y + a.height && (g.y = a.y + a.height));
            return g
        },
        EllipsePerimeter: function(a, b, c, d) {
            var e = a.x,
                f = a.y,
                g = a.width / 2,
                k = a.height / 2,
                l = e + g,
                m = f + k;
            b = c.x;
            c = c.y;
            var n = parseInt(b - l),
                p = parseInt(c - m);
            if (0 == n && 0 != p) return new mxPoint(l,
                m + k * p / Math.abs(p));
            if (0 == n && 0 == p) return new mxPoint(b, c);
            if (d) {
                if (c >= f && c <= f + a.height) return a = c - m, a = Math.sqrt(g * g * (1 - a * a / (k * k))) || 0, b <= e && (a = -a), new mxPoint(l + a, c);
                if (b >= e && b <= e + a.width) return a = b - l, a = Math.sqrt(k * k * (1 - a * a / (g * g))) || 0, c <= f && (a = -a), new mxPoint(b, m + a)
            }
            e = p / n;
            m -= e * l;
            f = g * g * e * e + k * k;
            a = -2 * l * f;
            k = Math.sqrt(a * a - 4 * f * (g * g * e * e * l * l + k * k * l * l - g * g * k * k));
            g = (-a + k) / (2 * f);
            k = (-a - k) / (2 * f);
            l = e * g + m;
            m = e * k + m;
            e = Math.sqrt(Math.pow(g - b, 2) + Math.pow(l - c, 2));
            b = Math.sqrt(Math.pow(k - b, 2) + Math.pow(m - c, 2));
            f = c = 0;
            e < b ? (c =
                g, f = l) : (c = k, f = m);
            return new mxPoint(c, f)
        },
        RhombusPerimeter: function(a, b, c, d) {
            b = a.x;
            var e = a.y,
                f = a.width;
            a = a.height;
            var g = b + f / 2,
                k = e + a / 2,
                l = c.x;
            c = c.y;
            if (g == l) return k > c ? new mxPoint(g, e) : new mxPoint(g, e + a);
            if (k == c) return g > l ? new mxPoint(b, k) : new mxPoint(b + f, k);
            var m = g,
                n = k;
            d && (l >= b && l <= b + f ? m = l : c >= e && c <= e + a && (n = c));
            return l < g ? c < k ? mxUtils.intersection(l, c, m, n, g, e, b, k) : mxUtils.intersection(l, c, m, n, g, e + a, b, k) : c < k ? mxUtils.intersection(l, c, m, n, g, e, b + f, k) : mxUtils.intersection(l, c, m, n, g, e + a, b + f, k)
        },
        TrianglePerimeter: function(a,
            b, c, d) {
            b = null != b ? b.style[mxConstants.STYLE_DIRECTION] : null;
            var e = b == mxConstants.DIRECTION_NORTH || b == mxConstants.DIRECTION_SOUTH,
                f = a.x,
                g = a.y,
                k = a.width;
            a = a.height;
            var l = f + k / 2,
                m = g + a / 2,
                n = new mxPoint(f, g),
                p = new mxPoint(f + k, m),
                q = new mxPoint(f, g + a);
            b == mxConstants.DIRECTION_NORTH ? (n = q, p = new mxPoint(l, g), q = new mxPoint(f + k, g + a)) : b == mxConstants.DIRECTION_SOUTH ? (p = new mxPoint(l, g + a), q = new mxPoint(f + k, g)) : b == mxConstants.DIRECTION_WEST && (n = new mxPoint(f + k, g), p = new mxPoint(f, m), q = new mxPoint(f + k, g + a));
            var r = c.x -
                l,
                s = c.y - m,
                r = e ? Math.atan2(r, s) : Math.atan2(s, r),
                t = e ? Math.atan2(k, a) : Math.atan2(a, k),
                s = !1,
                s = b == mxConstants.DIRECTION_NORTH || b == mxConstants.DIRECTION_WEST ? r > -t && r < t : r < -Math.PI + t || r > Math.PI - t,
                t = null;
            s ? t = d && (e && c.x >= n.x && c.x <= q.x || !e && c.y >= n.y && c.y <= q.y) ? e ? new mxPoint(c.x, n.y) : new mxPoint(n.x, c.y) : b == mxConstants.DIRECTION_NORTH ? new mxPoint(f + k / 2 + a * Math.tan(r) / 2, g + a) : b == mxConstants.DIRECTION_SOUTH ? new mxPoint(f + k / 2 - a * Math.tan(r) / 2, g) : b == mxConstants.DIRECTION_WEST ? new mxPoint(f + k, g + a / 2 + k * Math.tan(r) / 2) : new mxPoint(f,
                g + a / 2 - k * Math.tan(r) / 2) : (d && (d = new mxPoint(l, m), c.y >= g && c.y <= g + a ? (d.x = e ? l : b == mxConstants.DIRECTION_WEST ? f + k : f, d.y = c.y) : c.x >= f && c.x <= f + k && (d.x = c.x, d.y = !e ? m : b == mxConstants.DIRECTION_NORTH ? g + a : g), l = d.x, m = d.y), t = e && c.x <= f + k / 2 || !e && c.y <= g + a / 2 ? mxUtils.intersection(c.x, c.y, l, m, n.x, n.y, p.x, p.y) : mxUtils.intersection(c.x, c.y, l, m, p.x, p.y, q.x, q.y));
            null == t && (t = new mxPoint(l, m));
            return t
        },
        HexagonPerimeter: function(a, b, c, d) {
            var e = a.x,
                f = a.y,
                g = a.width,
                k = a.height,
                l = a.getCenterX();
            a = a.getCenterY();
            var m = c.x,
                n = c.y,
                p = -Math.atan2(n - a, m - l),
                q = Math.PI,
                r = Math.PI / 2,
                s = new mxPoint(l, a);
            b = null != b ? mxUtils.getValue(b.style, mxConstants.STYLE_DIRECTION, mxConstants.DIRECTION_EAST) : mxConstants.DIRECTION_EAST;
            var t = b == mxConstants.DIRECTION_NORTH || b == mxConstants.DIRECTION_SOUTH;
            b = new mxPoint;
            s = new mxPoint;
            if (m < e && n < f || m < e && n > f + k || m > e + g && n < f || m > e + g && n > f + k) d = !1;
            if (d) {
                if (t) {
                    if (m == l) {
                        if (n <= f) return new mxPoint(l, f);
                        if (n >= f + k) return new mxPoint(l, f + k)
                    } else if (m < e) {
                        if (n == f + k / 4) return new mxPoint(e, f + k / 4);
                        if (n == f + 3 * k / 4) return new mxPoint(e,
                            f + 3 * k / 4)
                    } else if (m > e + g) {
                        if (n == f + k / 4) return new mxPoint(e + g, f + k / 4);
                        if (n == f + 3 * k / 4) return new mxPoint(e + g, f + 3 * k / 4)
                    } else if (m == e) {
                        if (n < a) return new mxPoint(e, f + k / 4);
                        if (n > a) return new mxPoint(e, f + 3 * k / 4)
                    } else if (m == e + g) {
                        if (n < a) return new mxPoint(e + g, f + k / 4);
                        if (n > a) return new mxPoint(e + g, f + 3 * k / 4)
                    }
                    if (n == f) return new mxPoint(l, f);
                    if (n == f + k) return new mxPoint(l, f + k);
                    m < l ? n > f + k / 4 && n < f + 3 * k / 4 ? (b = new mxPoint(e, f), s = new mxPoint(e, f + k)) : n < f + k / 4 ? (b = new mxPoint(e - Math.floor(0.5 * g), f + Math.floor(0.5 * k)), s = new mxPoint(e +
                        g, f - Math.floor(0.25 * k))) : n > f + 3 * k / 4 && (b = new mxPoint(e - Math.floor(0.5 * g), f + Math.floor(0.5 * k)), s = new mxPoint(e + g, f + Math.floor(1.25 * k))) : m > l && (n > f + k / 4 && n < f + 3 * k / 4 ? (b = new mxPoint(e + g, f), s = new mxPoint(e + g, f + k)) : n < f + k / 4 ? (b = new mxPoint(e, f - Math.floor(0.25 * k)), s = new mxPoint(e + Math.floor(1.5 * g), f + Math.floor(0.5 * k))) : n > f + 3 * k / 4 && (b = new mxPoint(e + Math.floor(1.5 * g), f + Math.floor(0.5 * k)), s = new mxPoint(e, f + Math.floor(1.25 * k))))
                } else {
                    if (n == a) {
                        if (m <= e) return new mxPoint(e, f + k / 2);
                        if (m >= e + g) return new mxPoint(e + g, f + k /
                            2)
                    } else if (n < f) {
                        if (m == e + g / 4) return new mxPoint(e + g / 4, f);
                        if (m == e + 3 * g / 4) return new mxPoint(e + 3 * g / 4, f)
                    } else if (n > f + k) {
                        if (m == e + g / 4) return new mxPoint(e + g / 4, f + k);
                        if (m == e + 3 * g / 4) return new mxPoint(e + 3 * g / 4, f + k)
                    } else if (n == f) {
                        if (m < l) return new mxPoint(e + g / 4, f);
                        if (m > l) return new mxPoint(e + 3 * g / 4, f)
                    } else if (n == f + k) {
                        if (m < l) return new mxPoint(e + g / 4, f + k);
                        if (n > a) return new mxPoint(e + 3 * g / 4, f + k)
                    }
                    if (m == e) return new mxPoint(e, a);
                    if (m == e + g) return new mxPoint(e + g, a);
                    n < a ? m > e + g / 4 && m < e + 3 * g / 4 ? (b = new mxPoint(e, f), s = new mxPoint(e +
                        g, f)) : m < e + g / 4 ? (b = new mxPoint(e - Math.floor(0.25 * g), f + k), s = new mxPoint(e + Math.floor(0.5 * g), f - Math.floor(0.5 * k))) : m > e + 3 * g / 4 && (b = new mxPoint(e + Math.floor(0.5 * g), f - Math.floor(0.5 * k)), s = new mxPoint(e + Math.floor(1.25 * g), f + k)) : n > a && (m > e + g / 4 && m < e + 3 * g / 4 ? (b = new mxPoint(e, f + k), s = new mxPoint(e + g, f + k)) : m < e + g / 4 ? (b = new mxPoint(e - Math.floor(0.25 * g), f), s = new mxPoint(e + Math.floor(0.5 * g), f + Math.floor(1.5 * k))) : m > e + 3 * g / 4 && (b = new mxPoint(e + Math.floor(0.5 * g), f + Math.floor(1.5 * k)), s = new mxPoint(e + Math.floor(1.25 * g), f)))
                }
                d =
                    l;
                p = a;
                m >= e && m <= e + g ? (d = m, p = n < a ? f + k : f) : n >= f && n <= f + k && (p = n, d = m < l ? e + g : e);
                s = mxUtils.intersection(d, p, c.x, c.y, b.x, b.y, s.x, s.y)
            } else {
                if (t) {
                    m = Math.atan2(k / 4, g / 2);
                    if (p == m) return new mxPoint(e + g, f + Math.floor(0.25 * k));
                    if (p == r) return new mxPoint(e + Math.floor(0.5 * g), f);
                    if (p == q - m) return new mxPoint(e, f + Math.floor(0.25 * k));
                    if (p == -m) return new mxPoint(e + g, f + Math.floor(0.75 * k));
                    if (p == -r) return new mxPoint(e + Math.floor(0.5 * g), f + k);
                    if (p == -q + m) return new mxPoint(e, f + Math.floor(0.75 * k));
                    p < m && p > -m ? (b = new mxPoint(e + g, f),
                        s = new mxPoint(e + g, f + k)) : p > m && p < r ? (b = new mxPoint(e, f - Math.floor(0.25 * k)), s = new mxPoint(e + Math.floor(1.5 * g), f + Math.floor(0.5 * k))) : p > r && p < q - m ? (b = new mxPoint(e - Math.floor(0.5 * g), f + Math.floor(0.5 * k)), s = new mxPoint(e + g, f - Math.floor(0.25 * k))) : p > q - m && p <= q || p < -q + m && p >= -q ? (b = new mxPoint(e, f), s = new mxPoint(e, f + k)) : p < -m && p > -r ? (b = new mxPoint(e + Math.floor(1.5 * g), f + Math.floor(0.5 * k)), s = new mxPoint(e, f + Math.floor(1.25 * k))) : p < -r && p > -q + m && (b = new mxPoint(e - Math.floor(0.5 * g), f + Math.floor(0.5 * k)), s = new mxPoint(e + g, f +
                        Math.floor(1.25 * k)))
                } else {
                    m = Math.atan2(k / 2, g / 4);
                    if (p == m) return new mxPoint(e + Math.floor(0.75 * g), f);
                    if (p == q - m) return new mxPoint(e + Math.floor(0.25 * g), f);
                    if (p == q || p == -q) return new mxPoint(e, f + Math.floor(0.5 * k));
                    if (0 == p) return new mxPoint(e + g, f + Math.floor(0.5 * k));
                    if (p == -m) return new mxPoint(e + Math.floor(0.75 * g), f + k);
                    if (p == -q + m) return new mxPoint(e + Math.floor(0.25 * g), f + k);
                    0 < p && p < m ? (b = new mxPoint(e + Math.floor(0.5 * g), f - Math.floor(0.5 * k)), s = new mxPoint(e + Math.floor(1.25 * g), f + k)) : p > m && p < q - m ? (b = new mxPoint(e,
                        f), s = new mxPoint(e + g, f)) : p > q - m && p < q ? (b = new mxPoint(e - Math.floor(0.25 * g), f + k), s = new mxPoint(e + Math.floor(0.5 * g), f - Math.floor(0.5 * k))) : 0 > p && p > -m ? (b = new mxPoint(e + Math.floor(0.5 * g), f + Math.floor(1.5 * k)), s = new mxPoint(e + Math.floor(1.25 * g), f)) : p < -m && p > -q + m ? (b = new mxPoint(e, f + k), s = new mxPoint(e + g, f + k)) : p < -q + m && p > -q && (b = new mxPoint(e - Math.floor(0.25 * g), f), s = new mxPoint(e + Math.floor(0.5 * g), f + Math.floor(1.5 * k)))
                }
                s = mxUtils.intersection(l, a, c.x, c.y, b.x, b.y, s.x, s.y)
            }
            return null == s ? new mxPoint(l, a) : s
        }
    };

function mxPrintPreview(a, b, c, d, e, f, g, k, l) {
    this.graph = a;
    this.scale = null != b ? b : 1 / a.pageScale;
    this.border = null != d ? d : 0;
    this.pageFormat = null != c ? c : a.pageFormat;
    this.title = null != k ? k : "Printer-friendly version";
    this.x0 = null != e ? e : 0;
    this.y0 = null != f ? f : 0;
    this.borderColor = g;
    this.pageSelector = null != l ? l : !0
}
mxPrintPreview.prototype.graph = null;
mxPrintPreview.prototype.pageFormat = null;
mxPrintPreview.prototype.scale = null;
mxPrintPreview.prototype.border = 0;
mxPrintPreview.prototype.x0 = 0;
mxPrintPreview.prototype.y0 = 0;
mxPrintPreview.prototype.autoOrigin = !0;
mxPrintPreview.prototype.printOverlays = !1;
mxPrintPreview.prototype.printBackgroundImage = !1;
mxPrintPreview.prototype.borderColor = null;
mxPrintPreview.prototype.title = null;
mxPrintPreview.prototype.pageSelector = null;
mxPrintPreview.prototype.wnd = null;
mxPrintPreview.prototype.pageCount = 0;
mxPrintPreview.prototype.getWindow = function() {
    return this.wnd
};
mxPrintPreview.prototype.getDoctype = function() {
    var a = "";
    5 == document.documentMode ? a = '<meta http-equiv="X-UA-Compatible" content="IE=5">' : 8 == document.documentMode ? a = '<meta http-equiv="X-UA-Compatible" content="IE=8">' : 8 < document.documentMode && (a = '\x3c!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]--\x3e');
    return a
};
mxPrintPreview.prototype.open = function(a) {
    var b = this.graph.cellRenderer.initializeOverlay,
        c = null;
    try {
        this.printOverlays && (this.graph.cellRenderer.initializeOverlay = function(a, b) {
            b.init(a.view.getDrawPane())
        });
        if (null == this.wnd) {
            this.wnd = window.open();
            var d = this.wnd.document,
                e = this.getDoctype();
            null != e && 0 < e.length && d.writeln(e);
            mxClient.IS_VML ? d.writeln('<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">') : ("CSS1Compat" === document.compatMode && d.writeln("<!DOCTYPE html>"),
                d.writeln("<html>"));
            d.writeln("<head>");
            this.writeHead(d, a);
            d.writeln("</head>");
            d.writeln('<body class="mxPage">');
            var f = this.graph.getGraphBounds().clone(),
                g = this.graph.getView().getScale(),
                k = g / this.scale,
                l = this.graph.getView().getTranslate();
            this.autoOrigin || (this.x0 = -l.x * this.scale, this.y0 = -l.y * this.scale, f.width += f.x, f.height += f.y, f.x = 0, this.border = f.y = 0);
            f.width /= k;
            f.height /= k;
            var m = this.pageFormat.width - 2 * this.border,
                n = this.pageFormat.height - 2 * this.border,
                p = Math.max(1, Math.ceil((f.width + this.x0) /
                    m)),
                q = Math.max(1, Math.ceil((f.height + this.y0) / n));
            this.pageCount = p * q;
            var r = mxUtils.bind(this, function() {
                if (this.pageSelector && (1 < q || 1 < p)) {
                    var a = this.createPageSelector(q, p);
                    d.body.appendChild(a);
                    if (mxClient.IS_IE && null == d.documentMode || 5 == d.documentMode || 8 == d.documentMode || 7 == d.documentMode) {
                        a.style.position = "absolute";
                        var b = function() {
                            a.style.top = (d.body.scrollTop || d.documentElement.scrollTop) + 10 + "px"
                        };
                        mxEvent.addListener(this.wnd, "scroll", function(a) {
                            b()
                        });
                        mxEvent.addListener(this.wnd, "resize",
                            function(a) {
                                b()
                            })
                    }
                }
            });
            a = function(a, b) {
                null != this.borderColor && (a.style.borderColor = this.borderColor, a.style.borderStyle = "solid", a.style.borderWidth = "1px");
                a.style.background = "white";
                b && (a.style.pageBreakAfter = "always");
                mxClient.IS_IE || 11 <= document.documentMode ? (d.writeln(a.outerHTML), a.parentNode.removeChild(a)) : (a.parentNode.removeChild(a), d.body.appendChild(a));
                if (b) {
                    var c = d.createElement("hr");
                    c.className = "mxPageBreak";
                    d.body.appendChild(c)
                }
            };
            var s = this.getCoverPages(this.pageFormat.width, this.pageFormat.height);
            if (null != s)
                for (var t = 0; t < s.length; t++) a(s[t], !0);
            for (var u = this.getAppendices(this.pageFormat.width, this.pageFormat.height), t = 0; t < q; t++)
                for (var x = t * n / this.scale - this.y0 / this.scale + (f.y - l.y * g) / g, s = 0; s < p; s++) {
                    if (null == this.wnd) return null;
                    var y = s * m / this.scale - this.x0 / this.scale + (f.x - l.x * g) / g,
                        v = t * p + s + 1,
                        z = new mxRectangle(y, x, this.pageFormat.width, this.pageFormat.height),
                        c = 8 == d.documentMode || 9 == d.documentMode || 10 == d.documentMode ? this.renderPage(this.pageFormat.width, this.pageFormat.height, -y, -x, mxUtils.bind(this,
                            function(a) {
                                this.addGraphFragment(0, 0, this.scale, v, a, z);
                                this.printBackgroundImage && this.insertBackgroundImage(a, -y, -x)
                            })) : this.renderPage(this.pageFormat.width, this.pageFormat.height, 0, 0, mxUtils.bind(this, function(a) {
                            this.addGraphFragment(-y, -x, this.scale, v, a, z);
                            this.printBackgroundImage && this.insertBackgroundImage(a, -y, -x)
                        }));
                    c.setAttribute("id", "mxPage-" + v);
                    a(c, null != u || t < q - 1 || s < p - 1)
                }
            if (null != u)
                for (t = 0; t < u.length; t++) a(u[t], t < u.length);
            d.writeln("</body>");
            d.writeln("</html>");
            d.close();
            r();
            mxEvent.release(d.body)
        }
        this.wnd.focus()
    } catch (B) {
        null !=
            c && null != c.parentNode && c.parentNode.removeChild(c)
    } finally {
        this.graph.cellRenderer.initializeOverlay = b
    }
    return this.wnd
};
mxPrintPreview.prototype.writeHead = function(a, b) {
    null != this.title && a.writeln("<title>" + this.title + "</title>");
    mxClient.IS_VML && a.writeln('<style type="text/css">v\\:*{behavior:url(#default#VML)}o\\:*{behavior:url(#default#VML)}</style>');
    
    a.writeln('<style type="text/css">');
    a.writeln("@media print {");
    a.writeln("  table.mxPageSelector { display: none; }");
    a.writeln("  hr.mxPageBreak { display: none; }");
    a.writeln("}");
    a.writeln("@media screen {");
    a.writeln("  table.mxPageSelector { position: fixed; right: 10px; top: 10px;font-family: Arial; font-size:10pt; border: solid 1px darkgray;background: white; border-collapse:collapse; }");
    a.writeln("  table.mxPageSelector td { border: solid 1px gray; padding:4px; }");
    a.writeln("  body.mxPage { background: gray; }");
    a.writeln("}");
    null != b && a.writeln(b);
    a.writeln("</style>")
};
mxPrintPreview.prototype.createPageSelector = function(a, b) {
    var c = this.wnd.document,
        d = c.createElement("table");
    d.className = "mxPageSelector";
    d.setAttribute("border", "0");
    for (var e = c.createElement("tbody"), f = 0; f < a; f++) {
        for (var g = c.createElement("tr"), k = 0; k < b; k++) {
            var l = f * b + k + 1,
                m = c.createElement("td"),
                n = c.createElement("a");
            n.setAttribute("href", "#mxPage-" + l);
            mxClient.IS_NS && (!mxClient.IS_SF && !mxClient.IS_GC) && n.setAttribute("onclick", "var page = document.getElementById('mxPage-" + l + "');page.scrollIntoView(true);event.preventDefault();");
            mxUtils.write(n, l, c);
            m.appendChild(n);
            g.appendChild(m)
        }
        e.appendChild(g)
    }
    d.appendChild(e);
    return d
};
mxPrintPreview.prototype.renderPage = function(a, b, c, d, e) {
    var f = this.wnd.document,
        g = document.createElement("div"),
        k = null;
    try {
        if (0 != c || 0 != d) {
            g.style.position = "relative";
            g.style.width = a + "px";
            g.style.height = b + "px";
            g.style.pageBreakInside = "avoid";
            var l = document.createElement("div");
            l.style.position = "relative";
            l.style.top = this.border + "px";
            l.style.left = this.border + "px";
            l.style.width = a - 2 * this.border + "px";
            l.style.height = b - 2 * this.border + "px";
            l.style.overflow = "hidden";
            var m = document.createElement("div");
            m.style.position =
                "relative";
            m.style.marginLeft = c + "px";
            m.style.marginTop = d + "px";
            8 == f.documentMode && (l.style.position = "absolute", m.style.position = "absolute");
            10 == f.documentMode && (m.style.width = "100%", m.style.height = "100%");
            l.appendChild(m);
            g.appendChild(l);
            document.body.appendChild(g);
            k = m
        } else g.style.width = a + "px", g.style.height = b + "px", g.style.overflow = "hidden", g.style.pageBreakInside = "avoid", 8 == f.documentMode && (g.style.position = "relative"), l = document.createElement("div"), l.style.width = a - 2 * this.border + "px", l.style.height =
            b - 2 * this.border + "px", l.style.overflow = "hidden", mxClient.IS_IE && (null == f.documentMode || 5 == f.documentMode || 8 == f.documentMode || 7 == f.documentMode) ? (l.style.marginTop = this.border + "px", l.style.marginLeft = this.border + "px") : (l.style.top = this.border + "px", l.style.left = this.border + "px"), this.graph.dialect == mxConstants.DIALECT_VML && (l.style.position = "absolute"), g.appendChild(l), document.body.appendChild(g), k = l
    } catch (n) {
        throw g.parentNode.removeChild(g), n;
    }
    e(k);
    return g
};
mxPrintPreview.prototype.getRoot = function() {
    var a = this.graph.view.currentRoot;
    null == a && (a = this.graph.getModel().getRoot());
    return a
};
mxPrintPreview.prototype.addGraphFragment = function(a, b, c, d, e, f) {
    d = this.graph.getView();
    f = this.graph.container;
    this.graph.container = e;
    var g = d.getCanvas(),
        k = d.getBackgroundPane(),
        l = d.getDrawPane(),
        m = d.getOverlayPane();
    this.graph.dialect == mxConstants.DIALECT_SVG ? d.createSvg() : this.graph.dialect == mxConstants.DIALECT_VML ? d.createVml() : d.createHtml();
    var n = d.isEventsEnabled();
    d.setEventsEnabled(!1);
    var p = this.graph.isEnabled();
    this.graph.setEnabled(!1);
    var q = d.getTranslate();
    d.translate = new mxPoint(a, b);
    a = null;
    try {
        var r = [this.getRoot()];
        a = new mxTemporaryCellStates(d, c, r)
    } finally {
        if (mxClient.IS_IE) d.overlayPane.innerHTML = "";
        else
            for (c = e.firstChild; null != c;) r = c.nextSibling, b = c.nodeName.toLowerCase(), "svg" == b ? (c.setAttribute("width", parseInt(e.style.width)), c.setAttribute("height", parseInt(e.style.height))) : "default" != c.style.cursor && "div" != b && c.parentNode.removeChild(c), c = r;
        this.printBackgroundImage && (e = e.getElementsByTagName("svg"), 0 < e.length && (e[0].style.position = "absolute"));
        d.overlayPane.parentNode.removeChild(d.overlayPane);
        this.graph.setEnabled(p);
        this.graph.container = f;
        d.canvas = g;
        d.backgroundPane = k;
        d.drawPane = l;
        d.overlayPane = m;
        d.translate = q;
        a.destroy();
        d.setEventsEnabled(n)
    }
};
mxPrintPreview.prototype.insertBackgroundImage = function(a, b, c) {
    var d = this.graph.backgroundImage;
    if (null != d) {
        var e = document.createElement("img");
        e.style.position = "absolute";
        e.style.marginLeft = Math.round(b * this.scale) + "px";
        e.style.marginTop = Math.round(c * this.scale) + "px";
        e.setAttribute("width", Math.round(this.scale * d.width));
        e.setAttribute("height", Math.round(this.scale * d.height));
        e.src = d.src;
        a.insertBefore(e, a.firstChild)
    }
};
mxPrintPreview.prototype.getCoverPages = function() {
    return null
};
mxPrintPreview.prototype.getAppendices = function() {
    return null
};
mxPrintPreview.prototype.print = function(a) {
    a = this.open(a);
    null != a && a.print()
};
mxPrintPreview.prototype.close = function() {
    null != this.wnd && (this.wnd.close(), this.wnd = null)
};

function mxStylesheet() {
    this.styles = {};
    this.putDefaultVertexStyle(this.createDefaultVertexStyle());
    this.putDefaultEdgeStyle(this.createDefaultEdgeStyle())
}
mxStylesheet.prototype.createDefaultVertexStyle = function() {
    var a = {};
    a[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
    a[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
    a[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
    a[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
    a[mxConstants.STYLE_FILLCOLOR] = "#C3D9FF";
    a[mxConstants.STYLE_STROKECOLOR] = "#6482B9";
    a[mxConstants.STYLE_FONTCOLOR] = "#774400";
    return a
};
mxStylesheet.prototype.createDefaultEdgeStyle = function() {
    var a = {};
    a[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_CONNECTOR;
    a[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_CLASSIC;
    a[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
    a[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
    a[mxConstants.STYLE_STROKECOLOR] = "#6482B9";
    a[mxConstants.STYLE_FONTCOLOR] = "#446299";
    return a
};
mxStylesheet.prototype.putDefaultVertexStyle = function(a) {
    this.putCellStyle("defaultVertex", a)
};
mxStylesheet.prototype.putDefaultEdgeStyle = function(a) {
    this.putCellStyle("defaultEdge", a)
};
mxStylesheet.prototype.getDefaultVertexStyle = function() {
    return this.styles.defaultVertex
};
mxStylesheet.prototype.getDefaultEdgeStyle = function() {
    return this.styles.defaultEdge
};
mxStylesheet.prototype.putCellStyle = function(a, b) {
    this.styles[a] = b
};
mxStylesheet.prototype.getCellStyle = function(a, b) {
    var c = b;
    if (null != a && 0 < a.length)
        for (var d = a.split(";"), c = null != c && ";" != a.charAt(0) ? mxUtils.clone(c) : {}, e = 0; e < d.length; e++) {
            var f = d[e],
                g = f.indexOf("=");
            if (0 <= g) {
                var k = f.substring(0, g),
                    f = f.substring(g + 1);
                f == mxConstants.NONE ? delete c[k] : mxUtils.isNumeric(f) ? c[k] = parseFloat(f) : c[k] = f
            } else if (f = this.styles[f], null != f)
                for (k in f) c[k] = f[k]
        }
    return c
};

function mxCellState(a, b, c) {
    this.view = a;
    this.cell = b;
    this.style = c;
    this.origin = new mxPoint;
    this.absoluteOffset = new mxPoint
}
mxCellState.prototype = new mxRectangle;
mxCellState.prototype.constructor = mxCellState;
mxCellState.prototype.view = null;
mxCellState.prototype.cell = null;
mxCellState.prototype.style = null;
mxCellState.prototype.invalid = !0;
mxCellState.prototype.origin = null;
mxCellState.prototype.absolutePoints = null;
mxCellState.prototype.absoluteOffset = null;
mxCellState.prototype.visibleSourceState = null;
mxCellState.prototype.visibleTargetState = null;
mxCellState.prototype.terminalDistance = 0;
mxCellState.prototype.length = 0;
mxCellState.prototype.segments = null;
mxCellState.prototype.shape = null;
mxCellState.prototype.text = null;
mxCellState.prototype.getPerimeterBounds = function(a, b) {
    a = a || 0;
    b = null != b ? b : new mxRectangle(this.x, this.y, this.width, this.height);
    if (null != this.shape && null != this.shape.stencil) {
        var c = this.shape.stencil.computeAspect(this.style, b.x, b.y, b.width, b.height);
        b.x = c.x;
        b.y = c.y;
        b.width = this.shape.stencil.w0 * c.width;
        b.height = this.shape.stencil.h0 * c.height
    }
    0 != a && b.grow(a);
    return b
};
mxCellState.prototype.setAbsoluteTerminalPoint = function(a, b) {
    b ? (null == this.absolutePoints && (this.absolutePoints = []), 0 == this.absolutePoints.length ? this.absolutePoints.push(a) : this.absolutePoints[0] = a) : null == this.absolutePoints ? (this.absolutePoints = [], this.absolutePoints.push(null), this.absolutePoints.push(a)) : 1 == this.absolutePoints.length ? this.absolutePoints.push(a) : this.absolutePoints[this.absolutePoints.length - 1] = a
};
mxCellState.prototype.setCursor = function(a) {
    null != this.shape && this.shape.setCursor(a);
    null != this.text && this.text.setCursor(a)
};
mxCellState.prototype.getVisibleTerminal = function(a) {
    a = this.getVisibleTerminalState(a);
    return null != a ? a.cell : null
};
mxCellState.prototype.getVisibleTerminalState = function(a) {
    return a ? this.visibleSourceState : this.visibleTargetState
};
mxCellState.prototype.setVisibleTerminalState = function(a, b) {
    b ? this.visibleSourceState = a : this.visibleTargetState = a
};
mxCellState.prototype.destroy = function() {
    this.view.graph.cellRenderer.destroy(this)
};
mxCellState.prototype.clone = function() {
    var a = new mxCellState(this.view, this.cell, this.style);
    if (null != this.absolutePoints) {
        a.absolutePoints = [];
        for (var b = 0; b < this.absolutePoints.length; b++) a.absolutePoints[b] = this.absolutePoints[b].clone()
    }
    null != this.origin && (a.origin = this.origin.clone());
    null != this.absoluteOffset && (a.absoluteOffset = this.absoluteOffset.clone());
    null != this.boundingBox && (a.boundingBox = this.boundingBox.clone());
    a.terminalDistance = this.terminalDistance;
    a.segments = this.segments;
    a.length =
        this.length;
    a.x = this.x;
    a.y = this.y;
    a.width = this.width;
    a.height = this.height;
    return a
};

function mxGraphSelectionModel(a) {
    this.graph = a;
    this.cells = []
}
mxGraphSelectionModel.prototype = new mxEventSource;
mxGraphSelectionModel.prototype.constructor = mxGraphSelectionModel;
mxGraphSelectionModel.prototype.doneResource = "none" != mxClient.language ? "done" : "";
mxGraphSelectionModel.prototype.updatingSelectionResource = "none" != mxClient.language ? "updatingSelection" : "";
mxGraphSelectionModel.prototype.graph = null;
mxGraphSelectionModel.prototype.singleSelection = !1;
mxGraphSelectionModel.prototype.isSingleSelection = function() {
    return this.singleSelection
};
mxGraphSelectionModel.prototype.setSingleSelection = function(a) {
    this.singleSelection = a
};
mxGraphSelectionModel.prototype.isSelected = function(a) {
    return null != a ? 0 <= mxUtils.indexOf(this.cells, a) : !1
};
mxGraphSelectionModel.prototype.isEmpty = function() {
    return 0 == this.cells.length
};
mxGraphSelectionModel.prototype.clear = function() {
    this.changeSelection(null, this.cells)
};
mxGraphSelectionModel.prototype.setCell = function(a) {
    null != a && this.setCells([a])
};
mxGraphSelectionModel.prototype.setCells = function(a) {
    if (null != a) {
        this.singleSelection && (a = [this.getFirstSelectableCell(a)]);
        for (var b = [], c = 0; c < a.length; c++) this.graph.isCellSelectable(a[c]) && b.push(a[c]);
        this.changeSelection(b, this.cells)
    }
};
mxGraphSelectionModel.prototype.getFirstSelectableCell = function(a) {
    if (null != a)
        for (var b = 0; b < a.length; b++)
            if (this.graph.isCellSelectable(a[b])) return a[b];
    return null
};
mxGraphSelectionModel.prototype.addCell = function(a) {
    null != a && this.addCells([a])
};
mxGraphSelectionModel.prototype.addCells = function(a) {
    if (null != a) {
        var b = null;
        this.singleSelection && (b = this.cells, a = [this.getFirstSelectableCell(a)]);
        for (var c = [], d = 0; d < a.length; d++) !this.isSelected(a[d]) && this.graph.isCellSelectable(a[d]) && c.push(a[d]);
        this.changeSelection(c, b)
    }
};
mxGraphSelectionModel.prototype.removeCell = function(a) {
    null != a && this.removeCells([a])
};
mxGraphSelectionModel.prototype.removeCells = function(a) {
    if (null != a) {
        for (var b = [], c = 0; c < a.length; c++) this.isSelected(a[c]) && b.push(a[c]);
        this.changeSelection(null, b)
    }
};
mxGraphSelectionModel.prototype.changeSelection = function(a, b) {
    if (null != a && 0 < a.length && null != a[0] || null != b && 0 < b.length && null != b[0]) {
        var c = new mxSelectionChange(this, a, b);
        c.execute();
        var d = new mxUndoableEdit(this, !1);
        d.add(c);
        this.fireEvent(new mxEventObject(mxEvent.UNDO, "edit", d))
    }
};
mxGraphSelectionModel.prototype.cellAdded = function(a) {
    null != a && !this.isSelected(a) && this.cells.push(a)
};
mxGraphSelectionModel.prototype.cellRemoved = function(a) {
    null != a && (a = mxUtils.indexOf(this.cells, a), 0 <= a && this.cells.splice(a, 1))
};

function mxSelectionChange(a, b, c) {
    this.selectionModel = a;
    this.added = null != b ? b.slice() : null;
    this.removed = null != c ? c.slice() : null
}
mxSelectionChange.prototype.execute = function() {
    var a = mxLog.enter("mxSelectionChange.execute");
    window.status = mxResources.get(this.selectionModel.updatingSelectionResource) || this.selectionModel.updatingSelectionResource;
    if (null != this.removed)
        for (var b = 0; b < this.removed.length; b++) this.selectionModel.cellRemoved(this.removed[b]);
    if (null != this.added)
        for (b = 0; b < this.added.length; b++) this.selectionModel.cellAdded(this.added[b]);
    b = this.added;
    this.added = this.removed;
    this.removed = b;
    window.status = mxResources.get(this.selectionModel.doneResource) ||
        this.selectionModel.doneResource;
    mxLog.leave("mxSelectionChange.execute", a);
    this.selectionModel.fireEvent(new mxEventObject(mxEvent.CHANGE, "added", this.added, "removed", this.removed))
};

function mxCellEditor(a) {
    this.graph = a
}
mxCellEditor.prototype.graph = null;
mxCellEditor.prototype.textarea = null;
mxCellEditor.prototype.editingCell = null;
mxCellEditor.prototype.trigger = null;
mxCellEditor.prototype.modified = !1;
mxCellEditor.prototype.autoSize = !0;
mxCellEditor.prototype.selectText = !0;
mxCellEditor.prototype.emptyLabelText = "";
mxCellEditor.prototype.textNode = "";
mxCellEditor.prototype.zIndex = 5;
mxCellEditor.prototype.init = function() {
    this.textarea = document.createElement("textarea");
    this.textarea.className = "mxCellEditor";
    this.textarea.style.position = "absolute";
    this.textarea.style.overflow = "visible";
    this.textarea.setAttribute("cols", "20");
    this.textarea.setAttribute("rows", "4");
    mxClient.IS_NS && (this.textarea.style.resize = "none");
    this.installListeners(this.textarea)
};
mxCellEditor.prototype.installListeners = function(a) {
    mxEvent.addListener(a, "blur", mxUtils.bind(this, function(a) {
        this.focusLost(a)
    }));
    mxEvent.addListener(a, "change", mxUtils.bind(this, function(a) {
        this.setModified(!0)
    }));
    mxEvent.addListener(a, "keydown", mxUtils.bind(this, function(b) {
        mxEvent.isConsumed(b) || (this.isStopEditingEvent(b) ? (this.graph.stopEditing(!1), mxEvent.consume(b)) : 27 == b.keyCode ? (this.graph.stopEditing(!0), mxEvent.consume(b)) : (this.clearOnChange && a.value == this.getEmptyLabelText() && (this.clearOnChange = !1, a.value = ""), this.setModified(!0)))
    }));
    this.changeHandler = mxUtils.bind(this, function(a) {
        null != this.editingCell && null == this.graph.getView().getState(this.editingCell) && this.stopEditing(!0)
    });
    this.graph.getModel().addListener(mxEvent.CHANGE, this.changeHandler);
    mxEvent.addListener(a, !mxClient.IS_IE || 9 <= document.documentMode ? "input" : "keypress", mxUtils.bind(this, function(a) {
        this.autoSize && !mxEvent.isConsumed(a) && setTimeout(mxUtils.bind(this, function() {
            this.resize()
        }), 0)
    }))
};
mxCellEditor.prototype.isStopEditingEvent = function(a) {
    return 113 == a.keyCode || this.graph.isEnterStopsCellEditing() && 13 == a.keyCode && !mxEvent.isControlDown(a) && !mxEvent.isShiftDown(a)
};
mxCellEditor.prototype.isEventSource = function(a) {
    return mxEvent.getSource(a) == this.textarea
};
mxCellEditor.prototype.resize = function() {
    if (null != this.textDiv) {
        var a = this.graph.getView().getState(this.editingCell);
        if (null == a) this.stopEditing(!0);
        else {
            var b = this.graph.isLabelClipped(a.cell),
                c = this.graph.isWrapping(a.cell),
                d = this.graph.getModel().isEdge(a.cell),
                e = this.graph.getView().scale,
                f = parseInt(a.style[mxConstants.STYLE_SPACING] || 0) * e,
                g = (parseInt(a.style[mxConstants.STYLE_SPACING_TOP] || 0) + mxText.prototype.baseSpacingTop) * e + f,
                k = (parseInt(a.style[mxConstants.STYLE_SPACING_RIGHT] || 0) + mxText.prototype.baseSpacingRight) *
                e + f,
                l = (parseInt(a.style[mxConstants.STYLE_SPACING_BOTTOM] || 0) + mxText.prototype.baseSpacingBottom) * e + f,
                e = (parseInt(a.style[mxConstants.STYLE_SPACING_LEFT] || 0) + mxText.prototype.baseSpacingLeft) * e + f,
                g = new mxRectangle(a.x, a.y, a.width - e - k, a.height - g - l),
                g = null != a.shape ? a.shape.getLabelBounds(g) : g;
            d ? (this.bounds.x = a.absoluteOffset.x, this.bounds.y = a.absoluteOffset.y, this.bounds.width = 0, this.bounds.height = 0) : null != this.bounds && (this.bounds.x = g.x + a.absoluteOffset.x, this.bounds.y = g.y + a.absoluteOffset.y, this.bounds.width =
                g.width, this.bounds.height = g.height);
            d = this.textarea.value;
            if ("\n" == d.charAt(d.length - 1) || "" == d) d += "&nbsp;";
            d = mxUtils.htmlEntities(d, !1);
            c ? (this.textDiv.style.whiteSpace = "normal", this.textDiv.style.width = this.bounds.width + "px") : d = d.replace(/ /g, "&nbsp;");
            d = d.replace(/\n/g, "<br/>");
            this.textDiv.innerHTML = d;
            d = this.textDiv.offsetWidth + 30;
            g = this.textDiv.offsetHeight + 16;
            d = Math.max(d, 40);
            g = Math.max(g, 20);
            b ? (d = Math.min(this.bounds.width, d), g = Math.min(this.bounds.height, g)) : c && (d = Math.max(this.bounds.width,
                this.textDiv.scrollWidth));
            b = null != a.text ? a.text.margin : null;
            null == b && (b = mxUtils.getValue(a.style, mxConstants.STYLE_ALIGN, mxConstants.ALIGN_CENTER), a = mxUtils.getValue(a.style, mxConstants.STYLE_VERTICAL_ALIGN, mxConstants.ALIGN_MIDDLE), b = mxUtils.getAlignmentAsPoint(b, a));
            null != b && (this.textarea.style.left = Math.max(0, Math.round(this.bounds.x - b.x * this.bounds.width + b.x * d) - 3) + "px", this.textarea.style.top = Math.max(0, Math.round(this.bounds.y - b.y * this.bounds.height + b.y * g) + 4) + "px");
            this.textarea.style.width =
                d + (this.textarea.offsetWidth - this.textarea.clientWidth + 4) + "px";
            this.textarea.style.height = g + "px"
        }
    }
};
mxCellEditor.prototype.isModified = function() {
    return this.modified
};
mxCellEditor.prototype.setModified = function(a) {
    this.modified = a
};
mxCellEditor.prototype.focusLost = function() {
    this.stopEditing(!this.graph.isInvokesStopCellEditing())
};
mxCellEditor.prototype.startEditing = function(a, b) {
    null == this.textarea && this.init();
    this.stopEditing(!0);
    var c = this.graph.getView().getState(a);
    if (null != c) {
        this.editingCell = a;
        this.trigger = b;
        this.textNode = null;
        null != c.text && this.isHideLabel(c) && (this.textNode = c.text.node, this.textNode.style.visibility = "hidden");
        var d = this.graph.getView().scale,
            d = mxUtils.getValue(c.style, mxConstants.STYLE_FONTSIZE, mxConstants.DEFAULT_FONTSIZE) * d,
            e = mxUtils.getValue(c.style, mxConstants.STYLE_FONTFAMILY, mxConstants.DEFAULT_FONTFAMILY),
            f = mxUtils.getValue(c.style, mxConstants.STYLE_FONTCOLOR, "black"),
            g = mxUtils.getValue(c.style, mxConstants.STYLE_ALIGN, mxConstants.ALIGN_LEFT),
            k = (mxUtils.getValue(c.style, mxConstants.STYLE_FONTSTYLE, 0) & mxConstants.FONT_BOLD) == mxConstants.FONT_BOLD,
            l = (mxUtils.getValue(c.style, mxConstants.STYLE_FONTSTYLE, 0) & mxConstants.FONT_ITALIC) == mxConstants.FONT_ITALIC,
            m = (mxUtils.getValue(c.style, mxConstants.STYLE_FONTSTYLE, 0) & mxConstants.FONT_UNDERLINE) == mxConstants.FONT_UNDERLINE;
        this.textarea.style.lineHeight = mxConstants.ABSOLUTE_LINE_HEIGHT ?
            Math.round(d * mxConstants.LINE_HEIGHT) + "px" : mxConstants.LINE_HEIGHT;
        this.textarea.style.textDecoration = m ? "underline" : "";
        this.textarea.style.fontWeight = k ? "bold" : "normal";
        this.textarea.style.fontStyle = l ? "italic" : "";
        this.textarea.style.fontSize = Math.round(d) + "px";
        this.textarea.style.fontFamily = e;
        this.textarea.style.textAlign = g;
        this.textarea.style.overflow = "auto";
        this.textarea.style.outline = "none";
        this.textarea.style.color = f;
        this.bounds = d = this.getEditorBounds(c);
        this.textarea.style.left = d.x + "px";
        this.textarea.style.top =
            d.y + "px";
        this.textarea.style.width = d.width + "px";
        this.textarea.style.height = d.height + "px";
        this.textarea.style.zIndex = this.zIndex;
        c = this.getInitialValue(c, b);
        null == c || 0 == c.length ? (c = this.getEmptyLabelText(), this.clearOnChange = 0 < c.length) : this.clearOnChange = !1;
        this.setModified(!1);
        this.textarea.value = c;
        this.graph.container.appendChild(this.textarea);
        "none" != this.textarea.style.display && (this.autoSize && (this.textDiv = this.createTextDiv(), document.body.appendChild(this.textDiv), this.resize()), this.textarea.focus(),
            this.isSelectText() && 0 < this.textarea.value.length && (mxClient.IS_IOS ? document.execCommand("selectAll") : this.textarea.select()))
    }
};
mxCellEditor.prototype.isSelectText = function() {
    return this.selectText
};
mxCellEditor.prototype.createTextDiv = function() {
    var a = document.createElement("div"),
        b = a.style;
    b.position = "absolute";
    b.whiteSpace = "nowrap";
    b.visibility = "hidden";
    b.display = mxClient.IS_QUIRKS ? "inline" : "inline-block";
    b.zoom = "1";
    b.verticalAlign = "top";
    b.lineHeight = this.textarea.style.lineHeight;
    b.fontSize = this.textarea.style.fontSize;
    b.fontFamily = this.textarea.style.fontFamily;
    b.fontWeight = this.textarea.style.fontWeight;
    b.textAlign = this.textarea.style.textAlign;
    b.fontStyle = this.textarea.style.fontStyle;
    b.textDecoration = this.textarea.style.textDecoration;
    return a
};
mxCellEditor.prototype.stopEditing = function(a) {
    null != this.editingCell && (null != this.textNode && (this.textNode.style.visibility = "visible", this.textNode = null), !a && this.isModified() && this.graph.labelChanged(this.editingCell, this.getCurrentValue(), this.trigger), null != this.textDiv && (document.body.removeChild(this.textDiv), this.textDiv = null), this.bounds = this.trigger = this.editingCell = null, this.textarea.blur(), null != this.textarea.parentNode && this.textarea.parentNode.removeChild(this.textarea))
};
mxCellEditor.prototype.getInitialValue = function(a, b) {
    return this.graph.getEditingValue(a.cell, b)
};
mxCellEditor.prototype.getCurrentValue = function() {
    return this.textarea.value.replace(/\r/g, "")
};
mxCellEditor.prototype.isHideLabel = function(a) {
    return !0
};
mxCellEditor.prototype.getMinimumSize = function(a) {
    var b = this.graph.getView().scale;
    return new mxRectangle(0, 0, null == a.text ? 30 : a.text.size * b + 20, "left" == this.textarea.style.textAlign ? 120 : 40)
};
mxCellEditor.prototype.getEditorBounds = function(a) {
    var b = this.graph.getModel().isEdge(a.cell),
        c = this.graph.getView().scale,
        d = this.getMinimumSize(a),
        e = d.width,
        d = d.height,
        f = parseInt(a.style[mxConstants.STYLE_SPACING] || 0) * c,
        g = (parseInt(a.style[mxConstants.STYLE_SPACING_TOP] || 0) + mxText.prototype.baseSpacingTop) * c + f,
        k = (parseInt(a.style[mxConstants.STYLE_SPACING_RIGHT] || 0) + mxText.prototype.baseSpacingRight) * c + f,
        l = (parseInt(a.style[mxConstants.STYLE_SPACING_BOTTOM] || 0) + mxText.prototype.baseSpacingBottom) *
        c + f,
        c = (parseInt(a.style[mxConstants.STYLE_SPACING_LEFT] || 0) + mxText.prototype.baseSpacingLeft) * c + f,
        k = new mxRectangle(a.x, a.y, Math.max(e, a.width - c - k), Math.max(d, a.height - g - l)),
        k = null != a.shape ? a.shape.getLabelBounds(k) : k;
    b ? (k.x = a.absoluteOffset.x, k.y = a.absoluteOffset.y, null != a.text && null != a.text.boundingBox && (0 < a.text.boundingBox.x && (k.x = a.text.boundingBox.x), 0 < a.text.boundingBox.y && (k.y = a.text.boundingBox.y))) : null != a.text && null != a.text.boundingBox && (k.x = Math.min(k.x, a.text.boundingBox.x), k.y = Math.min(k.y,
        a.text.boundingBox.y));
    k.x += c;
    k.y += g;
    null != a.text && null != a.text.boundingBox && (b ? (k.width = Math.max(e, a.text.boundingBox.width), k.height = Math.max(d, a.text.boundingBox.height)) : (k.width = Math.max(k.width, a.text.boundingBox.width), k.height = Math.max(k.height, a.text.boundingBox.height)));
    this.graph.getModel().isVertex(a.cell) && (b = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_POSITION, mxConstants.ALIGN_CENTER), b == mxConstants.ALIGN_LEFT ? k.x -= a.width : b == mxConstants.ALIGN_RIGHT && (k.x += a.width), b = mxUtils.getValue(a.style,
        mxConstants.STYLE_VERTICAL_LABEL_POSITION, mxConstants.ALIGN_MIDDLE), b == mxConstants.ALIGN_TOP ? k.y -= a.height : b == mxConstants.ALIGN_BOTTOM && (k.y += a.height));
    return k
};
mxCellEditor.prototype.getEmptyLabelText = function(a) {
    return this.emptyLabelText
};
mxCellEditor.prototype.getEditingCell = function() {
    return this.editingCell
};
mxCellEditor.prototype.destroy = function() {
    null != this.textarea && (mxEvent.release(this.textarea), null != this.textarea.parentNode && this.textarea.parentNode.removeChild(this.textarea), this.textarea = null, null != this.changeHandler && (this.graph.getModel().removeListener(this.changeHandler), this.changeHandler = null))
};

function mxCellRenderer() {}
mxCellRenderer.prototype.defaultEdgeShape = mxConnector;
mxCellRenderer.prototype.defaultVertexShape = mxRectangleShape;
mxCellRenderer.prototype.defaultTextShape = mxText;
mxCellRenderer.prototype.legacyControlPosition = !0;
mxCellRenderer.prototype.defaultShapes = {};
mxCellRenderer.registerShape = function(a, b) {
    mxCellRenderer.prototype.defaultShapes[a] = b
};
mxCellRenderer.registerShape(mxConstants.SHAPE_RECTANGLE, mxRectangleShape);
mxCellRenderer.registerShape(mxConstants.SHAPE_ELLIPSE, mxEllipse);
mxCellRenderer.registerShape(mxConstants.SHAPE_RHOMBUS, mxRhombus);
mxCellRenderer.registerShape(mxConstants.SHAPE_CYLINDER, mxCylinder);
mxCellRenderer.registerShape(mxConstants.SHAPE_CONNECTOR, mxConnector);
mxCellRenderer.registerShape(mxConstants.SHAPE_ACTOR, mxActor);
mxCellRenderer.registerShape(mxConstants.SHAPE_TRIANGLE, mxTriangle);
mxCellRenderer.registerShape(mxConstants.SHAPE_HEXAGON, mxHexagon);
mxCellRenderer.registerShape(mxConstants.SHAPE_CLOUD, mxCloud);
mxCellRenderer.registerShape(mxConstants.SHAPE_LINE, mxLine);
mxCellRenderer.registerShape(mxConstants.SHAPE_ARROW, mxArrow);
mxCellRenderer.registerShape(mxConstants.SHAPE_DOUBLE_ELLIPSE, mxDoubleEllipse);
mxCellRenderer.registerShape(mxConstants.SHAPE_SWIMLANE, mxSwimlane);
mxCellRenderer.registerShape(mxConstants.SHAPE_IMAGE, mxImageShape);
mxCellRenderer.registerShape(mxConstants.SHAPE_LABEL, mxLabel);
mxCellRenderer.prototype.initializeShape = function(a) {
    a.shape.dialect = a.view.graph.dialect;
    this.configureShape(a);
    a.shape.init(a.view.getDrawPane())
};
mxCellRenderer.prototype.createShape = function(a) {
    if (null != a.style) {
        var b = mxStencilRegistry.getStencil(a.style[mxConstants.STYLE_SHAPE]);
        null != b ? a.shape = new mxShape(b) : (b = this.getShapeConstructor(a), a.shape = new b)
    }
};
mxCellRenderer.prototype.createIndicatorShape = function(a) {
    a.shape.indicatorShape = this.getShape(a.view.graph.getIndicatorShape(a))
};
mxCellRenderer.prototype.getShape = function(a) {
    return null != a ? mxCellRenderer.prototype.defaultShapes[a] : null
};
mxCellRenderer.prototype.getShapeConstructor = function(a) {
    var b = this.getShape(a.style[mxConstants.STYLE_SHAPE]);
    null == b && (b = a.view.graph.getModel().isEdge(a.cell) ? this.defaultEdgeShape : this.defaultVertexShape);
    return b
};
mxCellRenderer.prototype.configureShape = function(a) {
    a.shape.apply(a);
    a.shape.image = a.view.graph.getImage(a);
    a.shape.indicatorColor = a.view.graph.getIndicatorColor(a);
    a.shape.indicatorStrokeColor = a.style[mxConstants.STYLE_INDICATOR_STROKECOLOR];
    a.shape.indicatorGradientColor = a.view.graph.getIndicatorGradientColor(a);
    a.shape.indicatorDirection = a.style[mxConstants.STYLE_INDICATOR_DIRECTION];
    a.shape.indicatorImage = a.view.graph.getIndicatorImage(a);
    this.postConfigureShape(a)
};
mxCellRenderer.prototype.postConfigureShape = function(a) {
    null != a.shape && (this.resolveColor(a, "indicatorColor", mxConstants.STYLE_FILLCOLOR), this.resolveColor(a, "indicatorGradientColor", mxConstants.STYLE_GRADIENTCOLOR), this.resolveColor(a, "fill", mxConstants.STYLE_FILLCOLOR), this.resolveColor(a, "stroke", mxConstants.STYLE_STROKECOLOR), this.resolveColor(a, "gradient", mxConstants.STYLE_GRADIENTCOLOR))
};
mxCellRenderer.prototype.resolveColor = function(a, b, c) {
    var d = a.shape[b],
        e = a.view.graph,
        f = null;
    "inherit" == d ? f = e.model.getParent(a.cell) : "swimlane" == d ? (f = null != e.model.getTerminal(a.cell, !1) ? e.model.getTerminal(a.cell, !1) : a.cell, f = e.getSwimlane(f), c = e.swimlaneIndicatorColorAttribute) : "indicated" == d && (a.shape[b] = a.shape.indicatorColor);
    null != f && (d = e.getView().getState(f), a.shape[b] = null, null != d && (a.shape[b] = null != d.shape && "indicatorColor" != b ? d.shape[b] : d.style[c]))
};
mxCellRenderer.prototype.getLabelValue = function(a) {
    return a.view.graph.getLabel(a.cell)
};
mxCellRenderer.prototype.createLabel = function(a, b) {
    var c = a.view.graph;
    c.getModel().isEdge(a.cell);
    if (0 < a.style[mxConstants.STYLE_FONTSIZE] || null == a.style[mxConstants.STYLE_FONTSIZE]) {
        var d = c.isHtmlLabel(a.cell) || null != b && mxUtils.isNode(b);
        a.text = new this.defaultTextShape(b, new mxRectangle, a.style[mxConstants.STYLE_ALIGN] || mxConstants.ALIGN_CENTER, c.getVerticalAlign(a), a.style[mxConstants.STYLE_FONTCOLOR], a.style[mxConstants.STYLE_FONTFAMILY], a.style[mxConstants.STYLE_FONTSIZE], a.style[mxConstants.STYLE_FONTSTYLE],
            a.style[mxConstants.STYLE_SPACING], a.style[mxConstants.STYLE_SPACING_TOP], a.style[mxConstants.STYLE_SPACING_RIGHT], a.style[mxConstants.STYLE_SPACING_BOTTOM], a.style[mxConstants.STYLE_SPACING_LEFT], a.style[mxConstants.STYLE_HORIZONTAL], a.style[mxConstants.STYLE_LABEL_BACKGROUNDCOLOR], a.style[mxConstants.STYLE_LABEL_BORDERCOLOR], c.isWrapping(a.cell) && c.isHtmlLabel(a.cell), c.isLabelClipped(a.cell), a.style[mxConstants.STYLE_OVERFLOW], a.style[mxConstants.STYLE_LABEL_PADDING]);
        a.text.opacity = mxUtils.getValue(a.style,
            mxConstants.STYLE_TEXT_OPACITY, 100);
        a.text.dialect = d ? mxConstants.DIALECT_STRICTHTML : a.view.graph.dialect;
        a.text.style = a.style;
        a.text.state = a;
        this.initializeLabel(a);
        var e = !1,
            f = function(b) {
                var d = a;
                if (mxClient.IS_TOUCH || e) d = mxEvent.getClientX(b), b = mxEvent.getClientY(b), b = mxUtils.convertPoint(c.container, d, b), d = c.view.getState(c.getCellAt(b.x, b.y));
                return d
            };
        mxEvent.addGestureListeners(a.text.node, mxUtils.bind(this, function(b) {
            this.isLabelEvent(a, b) && (c.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(b,
                a)), e = c.dialect != mxConstants.DIALECT_SVG && "IMG" == mxEvent.getSource(b).nodeName)
        }), mxUtils.bind(this, function(b) {
            this.isLabelEvent(a, b) && c.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(b, f(b)))
        }), mxUtils.bind(this, function(b) {
            this.isLabelEvent(a, b) && (c.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(b, f(b))), e = !1)
        }));
        c.nativeDblClickEnabled && mxEvent.addListener(a.text.node, "dblclick", mxUtils.bind(this, function(b) {
            this.isLabelEvent(a, b) && (c.dblClick(b, a.cell), mxEvent.consume(b))
        }))
    }
};
mxCellRenderer.prototype.initializeLabel = function(a) {
    mxClient.IS_SVG && mxClient.NO_FO && a.text.dialect != mxConstants.DIALECT_SVG ? a.text.init(a.view.graph.container) : a.text.init(a.view.getDrawPane())
};
mxCellRenderer.prototype.createCellOverlays = function(a) {
    var b = a.view.graph.getCellOverlays(a.cell),
        c = null;
    if (null != b)
        for (var c = new mxDictionary, d = 0; d < b.length; d++) {
            var e = null != a.overlays ? a.overlays.remove(b[d]) : null;
            null == e && (e = new mxImageShape(new mxRectangle, b[d].image.src), e.dialect = a.view.graph.dialect, e.preserveImageAspect = !1, e.overlay = b[d], this.initializeOverlay(a, e), this.installCellOverlayListeners(a, b[d], e), null != b[d].cursor && (e.node.style.cursor = b[d].cursor));
            c.put(b[d], e)
        }
    null != a.overlays &&
        a.overlays.visit(function(a, b) {
            b.destroy()
        });
    a.overlays = c
};
mxCellRenderer.prototype.initializeOverlay = function(a, b) {
    b.init(a.view.getOverlayPane())
};
mxCellRenderer.prototype.installCellOverlayListeners = function(a, b, c) {
    var d = a.view.graph;
    mxEvent.addListener(c.node, "click", function(c) {
        d.isEditing() && d.stopEditing(!d.isInvokesStopCellEditing());
        b.fireEvent(new mxEventObject(mxEvent.CLICK, "event", c, "cell", a.cell))
    });
    mxEvent.addGestureListeners(c.node, function(a) {
        mxEvent.consume(a)
    }, function(b) {
        d.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(b, a))
    });
    mxClient.IS_TOUCH && mxEvent.addListener(c.node, "touchend", function(c) {
        b.fireEvent(new mxEventObject(mxEvent.CLICK,
            "event", c, "cell", a.cell))
    })
};
mxCellRenderer.prototype.createControl = function(a) {
    var b = a.view.graph,
        c = b.getFoldingImage(a);
    if (b.foldingEnabled && null != c) {
        if (null == a.control) {
            var d = new mxRectangle(0, 0, c.width, c.height);
            a.control = new mxImageShape(d, c.src);
            a.control.preserveImageAspect = !1;
            a.control.dialect = b.dialect;
            this.initControl(a, a.control, !0, function(c) {
                if (b.isEnabled()) {
                    var d = !b.isCellCollapsed(a.cell);
                    b.foldCells(d, !1, [a.cell]);
                    mxEvent.consume(c)
                }
            })
        }
    } else null != a.control && (a.control.destroy(), a.control = null)
};
mxCellRenderer.prototype.initControl = function(a, b, c, d) {
    var e = a.view.graph;
    e.isHtmlLabel(a.cell) && mxClient.NO_FO && e.dialect == mxConstants.DIALECT_SVG ? (b.dialect = mxConstants.DIALECT_PREFERHTML, b.init(e.container), b.node.style.zIndex = 1) : b.init(a.view.getOverlayPane());
    b = b.innerNode || b.node;
    d && (e.isEnabled() && (b.style.cursor = "pointer"), mxEvent.addListener(b, "click", d));
    c && mxEvent.addGestureListeners(b, function(b) {
        e.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(b, a));
        mxEvent.consume(b)
    }, function(b) {
        e.fireMouseEvent(mxEvent.MOUSE_MOVE,
            new mxMouseEvent(b, a))
    });
    return b
};
mxCellRenderer.prototype.isShapeEvent = function(a, b) {
    return !0
};
mxCellRenderer.prototype.isLabelEvent = function(a, b) {
    return !0
};
mxCellRenderer.prototype.installListeners = function(a) {
    var b = a.view.graph,
        c = function(c) {
            var e = a;
            if (b.dialect != mxConstants.DIALECT_SVG && "IMG" == mxEvent.getSource(c).nodeName || mxClient.IS_TOUCH) e = mxEvent.getClientX(c), c = mxEvent.getClientY(c), c = mxUtils.convertPoint(b.container, e, c), e = b.view.getState(b.getCellAt(c.x, c.y));
            return e
        };
    mxEvent.addGestureListeners(a.shape.node, mxUtils.bind(this, function(c) {
        this.isShapeEvent(a, c) && b.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(c, null != a.shape && mxEvent.getSource(c) ==
            a.shape.content ? null : a))
    }), mxUtils.bind(this, function(d) {
        this.isShapeEvent(a, d) && b.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(d, null != a.shape && mxEvent.getSource(d) == a.shape.content ? null : c(d)))
    }), mxUtils.bind(this, function(d) {
        this.isShapeEvent(a, d) && b.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(d, null != a.shape && mxEvent.getSource(d) == a.shape.content ? null : c(d)))
    }));
    b.nativeDblClickEnabled && mxEvent.addListener(a.shape.node, "dblclick", mxUtils.bind(this, function(c) {
        this.isShapeEvent(a, c) &&
            (b.dblClick(c, a.cell), mxEvent.consume(c))
    }))
};
mxCellRenderer.prototype.redrawLabel = function(a, b) {
    var c = this.getLabelValue(a);
    if (null == a.text && null != c && (mxUtils.isNode(c) || 0 < c.length)) this.createLabel(a, c);
    else if (null != a.text && (null == c || 0 == c.length)) a.text.destroy(), a.text = null;
    if (null != a.text) {
        var d = a.view.graph,
            e = d.isWrapping(a.cell),
            d = d.isLabelClipped(a.cell),
            f = this.getLabelBounds(a),
            g = a.view.graph.isHtmlLabel(a.cell) || null != c && mxUtils.isNode(c) ? mxConstants.DIALECT_STRICTHTML : a.view.graph.dialect;
        if (b || a.text.value != c || a.text.isWrapping !=
            e || a.text.isClipping != d || a.text.scale != a.view.scale || a.text.dialect != g || !a.text.bounds.equals(f)) a.text.dialect = g, a.text.value = c, a.text.bounds = f, a.text.scale = this.getTextScale(a), a.text.isWrapping = e, a.text.isClipping = d, a.text.redraw()
    }
};
mxCellRenderer.prototype.getTextScale = function(a) {
    return a.view.scale
};
mxCellRenderer.prototype.getLabelBounds = function(a) {
    var b = a.view.graph,
        c = a.view.scale,
        d = b.getModel().isEdge(a.cell),
        e = new mxRectangle(a.absoluteOffset.x, a.absoluteOffset.y);
    if (d) {
        var f = a.text.getSpacing();
        e.x += f.x * c;
        e.y += f.y * c;
        b = b.getCellGeometry(a.cell);
        null != b && (e.width = Math.max(0, b.width * c), e.height = Math.max(0, b.height * c))
    } else a.text.isPaintBoundsInverted() && (b = e.x, e.x = e.y, e.y = b), e.x += a.x, e.y += a.y, e.width = Math.max(1, a.width), e.height = Math.max(1, a.height);
    a.text.isPaintBoundsInverted() && (b = (a.width -
        a.height) / 2, e.x += b, e.y -= b, b = e.width, e.width = e.height, e.height = b);
    null != a.shape && (e = a.shape.getLabelBounds(e));
    b = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_WIDTH, null);
    null != b && (e.width = parseFloat(b) * c);
    d || this.rotateLabelBounds(a, e);
    return e
};
mxCellRenderer.prototype.rotateLabelBounds = function(a, b) {
    b.x -= a.text.margin.x * b.width;
    b.y -= a.text.margin.y * b.height;
    if ("fill" != a.style[mxConstants.STYLE_OVERFLOW] && "width" != a.style[mxConstants.STYLE_OVERFLOW]) {
        var c = a.view.scale,
            d = a.text.getSpacing();
        b.x += d.x * c;
        b.y += d.y * c;
        var d = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_POSITION, mxConstants.ALIGN_CENTER),
            e = mxUtils.getValue(a.style, mxConstants.STYLE_VERTICAL_LABEL_POSITION, mxConstants.ALIGN_MIDDLE),
            f = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_WIDTH,
                null);
        b.width = Math.max(0, b.width - (d == mxConstants.ALIGN_CENTER && null == f ? a.text.spacingLeft * c + a.text.spacingRight * c : 0));
        b.height = Math.max(0, b.height - (e == mxConstants.ALIGN_MIDDLE ? a.text.spacingTop * c + a.text.spacingBottom * c : 0))
    }
    e = a.text.getTextRotation();
    if (0 != e && (null != a && a.view.graph.model.isVertex(a.cell)) && (c = a.getCenterX(), d = a.getCenterY(), b.x != c || b.y != d)) e *= Math.PI / 180, pt = mxUtils.getRotatedPoint(new mxPoint(b.x, b.y), Math.cos(e), Math.sin(e), new mxPoint(c, d)), b.x = pt.x, b.y = pt.y
};
mxCellRenderer.prototype.redrawCellOverlays = function(a, b) {
    this.createCellOverlays(a);
    if (null != a.overlays) {
        var c = mxUtils.mod(mxUtils.getValue(a.style, mxConstants.STYLE_ROTATION, 0), 90),
            d = mxUtils.toRadians(c),
            e = Math.cos(d),
            f = Math.sin(d);
        a.overlays.visit(function(d, k) {
            var l = k.overlay.getBounds(a);
            if (!a.view.graph.getModel().isEdge(a.cell) && null != a.shape && 0 != c) {
                var m = l.getCenterX(),
                    n = l.getCenterY(),
                    n = mxUtils.getRotatedPoint(new mxPoint(m, n), e, f, new mxPoint(a.getCenterX(), a.getCenterY())),
                    m = n.x,
                    n = n.y;
                l.x =
                    Math.round(m - l.width / 2);
                l.y = Math.round(n - l.height / 2)
            }
            if (b || null == k.bounds || k.scale != a.view.scale || !k.bounds.equals(l)) k.bounds = l, k.scale = a.view.scale, k.redraw()
        })
    }
};
mxCellRenderer.prototype.redrawControl = function(a, b) {
    var c = a.view.graph.getFoldingImage(a);
    if (null != a.control && null != c) {
        var c = this.getControlBounds(a, c.width, c.height),
            d = this.legacyControlPosition ? mxUtils.getValue(a.style, mxConstants.STYLE_ROTATION, 0) : a.shape.getTextRotation(),
            e = a.view.scale;
        if (b || a.control.scale != e || !a.control.bounds.equals(c) || a.control.rotation != d) a.control.rotation = d, a.control.bounds = c, a.control.scale = e, a.control.redraw()
    }
};
mxCellRenderer.prototype.getControlBounds = function(a, b, c) {
    if (null != a.control) {
        var d = a.view.scale,
            e = a.getCenterX(),
            f = a.getCenterY();
        if (!a.view.graph.getModel().isEdge(a.cell) && (e = a.x + b * d, f = a.y + c * d, null != a.shape)) {
            var g = a.shape.getShapeRotation();
            if (this.legacyControlPosition) g = mxUtils.getValue(a.style, mxConstants.STYLE_ROTATION, 0);
            else if (a.shape.isPaintBoundsInverted()) var k = (a.width - a.height) / 2,
                e = e + k,
                f = f - k;
            0 != g && (k = mxUtils.toRadians(g), g = Math.cos(k), k = Math.sin(k), f = mxUtils.getRotatedPoint(new mxPoint(e,
                f), g, k, new mxPoint(a.getCenterX(), a.getCenterY())), e = f.x, f = f.y)
        }
        return a.view.graph.getModel().isEdge(a.cell), new mxRectangle(Math.round(e - b / 2 * d), Math.round(f - c / 2 * d), Math.round(b * d), Math.round(c * d))
    }
    return null
};
mxCellRenderer.prototype.insertStateAfter = function(a, b, c) {
    for (var d = this.getShapesForState(a), e = 0; e < d.length; e++)
        if (null != d[e]) {
            var f = d[e].node.parentNode != a.view.getDrawPane(),
                g = f ? c : b;
            if (null != g && g.nextSibling != d[e].node) null == g.nextSibling ? g.parentNode.appendChild(d[e].node) : g.parentNode.insertBefore(d[e].node, g.nextSibling);
            else if (null == g)
                if (d[e].node.parentNode == a.view.graph.container) {
                    for (g = a.view.canvas; null != g.parentNode && g.parentNode != a.view.graph.container;) g = g.parentNode;
                    null != g.nextSibling &&
                        g.nextSibling != d[e].node && d[e].node.parentNode.insertBefore(d[e].node, g.nextSibling)
                } else null != d[e].node.parentNode.firstChild && d[e].node.parentNode.firstChild != d[e].node && d[e].node.parentNode.insertBefore(d[e].node, d[e].node.parentNode.firstChild);
            f ? c = d[e].node : b = d[e].node
        }
    return [b, c]
};
mxCellRenderer.prototype.getShapesForState = function(a) {
    return [a.shape, a.text]
};
mxCellRenderer.prototype.redraw = function(a, b, c) {
    b = this.redrawShape(a, b, c);
    if (null != a.shape && (null == c || c)) this.redrawLabel(a, b), this.redrawCellOverlays(a, b), this.redrawControl(a, b)
};
mxCellRenderer.prototype.redrawShape = function(a, b, c) {
    var d = !1;
    if (null != a.shape && (null == a.shape.node && (this.createIndicatorShape(a), this.initializeShape(a), this.createCellOverlays(a), this.installListeners(a)), this.createControl(a), mxUtils.equalEntries(a.shape.style, a.style) || (this.configureShape(a), b = !0), b || null == a.shape.bounds || a.shape.scale != a.view.scale || null == a.absolutePoints && !a.shape.bounds.equals(a) || null != a.absolutePoints && !mxUtils.equalPoints(a.shape.points, a.absolutePoints))) null != a.absolutePoints ?
        (a.shape.points = a.absolutePoints.slice(), a.shape.bounds = null) : (a.shape.points = null, a.shape.bounds = new mxRectangle(a.x, a.y, a.width, a.height)), a.shape.scale = a.view.scale, null == c || c ? a.shape.redraw() : a.shape.updateBoundingBox(), d = !0;
    return d
};
mxCellRenderer.prototype.destroy = function(a) {
    null != a.shape && (null != a.text && (a.text.destroy(), a.text = null), null != a.overlays && (a.overlays.visit(function(a, c) {
        c.destroy()
    }), a.overlays = null), null != a.control && (a.control.destroy(), a.control = null), a.shape.destroy(), a.shape = null)
};
var mxEdgeStyle = {
        EntityRelation: function(a, b, c, d, e) {
            var f = a.view,
                g = f.graph;
            d = mxUtils.getValue(a.style, mxConstants.STYLE_SEGMENT, mxConstants.ENTITY_SEGMENT) * f.scale;
            var k = a.absolutePoints,
                l = k[0],
                m = k[k.length - 1],
                k = !1;
            if (null != l) b = new mxCellState, b.x = l.x, b.y = l.y;
            else if (null != b) {
                var n = mxUtils.getPortConstraints(b, a, !0, mxConstants.DIRECTION_MASK_NONE);
                n != mxConstants.DIRECTION_MASK_NONE ? k = n == mxConstants.DIRECTION_MASK_WEST : (l = g.getCellGeometry(b.cell), l.relative ? k = 0.5 >= l.x : null != c && (k = c.x + c.width < b.x))
            } else return;
            l = !0;
            null != m ? (c = new mxCellState, c.x = m.x, c.y = m.y) : null != c && (n = mxUtils.getPortConstraints(c, a, !1, mxConstants.DIRECTION_MASK_NONE), n != mxConstants.DIRECTION_MASK_NONE ? l = n == mxConstants.DIRECTION_MASK_WEST : (a = g.getCellGeometry(c.cell), a.relative ? l = 0.5 >= a.x : null != b && (l = b.x + b.width < c.x)));
            null != b && null != c && (a = k ? b.x : b.x + b.width, b = f.getRoutingCenterY(b), g = l ? c.x : c.x + c.width, c = f.getRoutingCenterY(c), f = new mxPoint(a + (k ? -d : d), b), m = new mxPoint(g + (l ? -d : d), c), k == l ? (d = k ? Math.min(a, g) - d : Math.max(a, g) + d, e.push(new mxPoint(d,
                b)), e.push(new mxPoint(d, c))) : (f.x < m.x == k ? (d = b + (c - b) / 2, e.push(f), e.push(new mxPoint(f.x, d)), e.push(new mxPoint(m.x, d))) : e.push(f), e.push(m)))
        },
        Loop: function(a, b, c, d, e) {
            c = a.absolutePoints;
            var f = c[c.length - 1];
            if (null != c[0] && null != f) {
                if (null != d && 0 < d.length)
                    for (b = 0; b < d.length; b++) c = d[b], c = a.view.transformControlPoint(a, c), e.push(new mxPoint(c.x, c.y))
            } else if (null != b) {
                var f = a.view,
                    g = f.graph;
                c = null != d && 0 < d.length ? d[0] : null;
                null != c && (c = f.transformControlPoint(a, c), mxUtils.contains(b, c.x, c.y) && (c = null));
                var k = d = 0,
                    l = 0,
                    m = 0,
                    g = mxUtils.getValue(a.style, mxConstants.STYLE_SEGMENT, g.gridSize) * f.scale;
                a = mxUtils.getValue(a.style, mxConstants.STYLE_DIRECTION, mxConstants.DIRECTION_WEST);
                a == mxConstants.DIRECTION_NORTH || a == mxConstants.DIRECTION_SOUTH ? (d = f.getRoutingCenterX(b), k = g) : (l = f.getRoutingCenterY(b), m = g);
                null == c || c.x < b.x || c.x > b.x + b.width ? null != c ? (d = c.x, m = Math.max(Math.abs(l - c.y), m)) : a == mxConstants.DIRECTION_NORTH ? l = b.y - 2 * k : a == mxConstants.DIRECTION_SOUTH ? l = b.y + b.height + 2 * k : d = a == mxConstants.DIRECTION_EAST ?
                    b.x - 2 * m : b.x + b.width + 2 * m : null != c && (d = f.getRoutingCenterX(b), k = Math.max(Math.abs(d - c.x), m), l = c.y, m = 0);
                e.push(new mxPoint(d - k, l - m));
                e.push(new mxPoint(d + k, l + m))
            }
        },
        ElbowConnector: function(a, b, c, d, e) {
            var f = null != d && 0 < d.length ? d[0] : null,
                g = !1,
                k = !1;
            if (null != b && null != c)
                if (null != f) var l = Math.min(b.x, c.x),
                    m = Math.max(b.x + b.width, c.x + c.width),
                    k = Math.min(b.y, c.y),
                    n = Math.max(b.y + b.height, c.y + c.height),
                    f = a.view.transformControlPoint(a, f),
                    g = f.y < k || f.y > n,
                    k = f.x < l || f.x > m;
                else l = Math.max(b.x, c.x), m = Math.min(b.x + b.width,
                    c.x + c.width), g = l == m, g || (k = Math.max(b.y, c.y), n = Math.min(b.y + b.height, c.y + c.height), k = k == n);
                !k && (g || a.style[mxConstants.STYLE_ELBOW] == mxConstants.ELBOW_VERTICAL) ? mxEdgeStyle.TopToBottom(a, b, c, d, e) : mxEdgeStyle.SideToSide(a, b, c, d, e)
        },
        SideToSide: function(a, b, c, d, e) {
            var f = a.view;
            d = null != d && 0 < d.length ? d[0] : null;
            var g = a.absolutePoints,
                k = g[0],
                g = g[g.length - 1];
            null != d && (d = f.transformControlPoint(a, d));
            null != k && (b = new mxCellState, b.x = k.x, b.y = k.y);
            null != g && (c = new mxCellState, c.x = g.x, c.y = g.y);
            null != b && null != c &&
                (a = Math.max(b.x, c.x), k = Math.min(b.x + b.width, c.x + c.width), a = null != d ? d.x : k + (a - k) / 2, k = f.getRoutingCenterY(b), f = f.getRoutingCenterY(c), null != d && (d.y >= b.y && d.y <= b.y + b.height && (k = d.y), d.y >= c.y && d.y <= c.y + c.height && (f = d.y)), !mxUtils.contains(c, a, k) && !mxUtils.contains(b, a, k) && e.push(new mxPoint(a, k)), !mxUtils.contains(c, a, f) && !mxUtils.contains(b, a, f) && e.push(new mxPoint(a, f)), 1 == e.length && (null != d ? !mxUtils.contains(c, a, d.y) && !mxUtils.contains(b, a, d.y) && e.push(new mxPoint(a, d.y)) : (f = Math.max(b.y, c.y), b = Math.min(b.y +
                    b.height, c.y + c.height), e.push(new mxPoint(a, f + (b - f) / 2)))))
        },
        TopToBottom: function(a, b, c, d, e) {
            var f = a.view;
            d = null != d && 0 < d.length ? d[0] : null;
            var g = a.absolutePoints,
                k = g[0],
                g = g[g.length - 1];
            null != d && (d = f.transformControlPoint(a, d));
            null != k && (b = new mxCellState, b.x = k.x, b.y = k.y);
            null != g && (c = new mxCellState, c.x = g.x, c.y = g.y);
            null != b && null != c && (k = Math.max(b.y, c.y), g = Math.min(b.y + b.height, c.y + c.height), a = f.getRoutingCenterX(b), null != d && (d.x >= b.x && d.x <= b.x + b.width) && (a = d.x), k = null != d ? d.y : g + (k - g) / 2, !mxUtils.contains(c,
                a, k) && !mxUtils.contains(b, a, k) && e.push(new mxPoint(a, k)), a = null != d && d.x >= c.x && d.x <= c.x + c.width ? d.x : f.getRoutingCenterX(c), !mxUtils.contains(c, a, k) && !mxUtils.contains(b, a, k) && e.push(new mxPoint(a, k)), 1 == e.length && (null != d && 1 == e.length ? !mxUtils.contains(c, d.x, k) && !mxUtils.contains(b, d.x, k) && e.push(new mxPoint(d.x, k)) : (f = Math.max(b.x, c.x), b = Math.min(b.x + b.width, c.x + c.width), e.push(new mxPoint(f + (b - f) / 2, k)))))
        },
        SegmentConnector: function(a, b, c, d, e) {
            var f = a.absolutePoints,
                g = !0,
                k = null,
                l = f[0];
            null == l && null !=
                b ? l = new mxPoint(a.view.getRoutingCenterX(b), a.view.getRoutingCenterY(b)) : null != l && (l = l.clone());
            var m = f.length - 1;
            if (null != d && 0 < d.length) {
                for (var k = a.view.transformControlPoint(a, d[0]), n = b, p = f[0], q = !1, r = !1, q = k, s = d.length, t = 0; 2 > t; t++) {
                    var u = null != p && p.x == q.x,
                        x = null != p && p.y == q.y,
                        y = null != n && q.y >= n.y && q.y <= n.y + n.height,
                        n = null != n && q.x >= n.x && q.x <= n.x + n.width,
                        q = x || null == p && y,
                        r = u || null == p && n;
                    if (null != p && !x && !u && (y || n)) {
                        g = y ? !1 : !0;
                        break
                    }
                    if (r || q) {
                        g = q;
                        1 == t && (g = 0 == d.length % 2 ? q : r);
                        break
                    }
                    n = c;
                    p = f[m];
                    q = a.view.transformControlPoint(a,
                        d[s - 1])
                }
                g && (null != f[0] && f[0].y != k.y || null == f[0] && null != b && (k.y < b.y || k.y > b.y + b.height)) ? e.push(new mxPoint(l.x, k.y)) : !g && (null != f[0] && f[0].x != k.x || null == f[0] && null != b && (k.x < b.x || k.x > b.x + b.width)) && e.push(new mxPoint(k.x, l.y));
                g ? l.y = k.y : l.x = k.x;
                for (t = 0; t < d.length; t++) g = !g, k = a.view.transformControlPoint(a, d[t]), g ? l.y = k.y : l.x = k.x, e.push(l.clone())
            } else k = l, g = !0;
            l = f[m];
            null == l && null != c && (l = new mxPoint(a.view.getRoutingCenterX(c), a.view.getRoutingCenterY(c)));
            g && (null != f[m] && f[m].y != k.y || null == f[m] && null !=
                c && (k.y < c.y || k.y > c.y + c.height)) ? e.push(new mxPoint(l.x, k.y)) : !g && (null != f[m] && f[m].x != k.x || null == f[m] && null != c && (k.x < c.x || k.x > c.x + c.width)) && e.push(new mxPoint(k.x, l.y));
            if (null == f[0] && null != b)
                for (; 1 < e.length && mxUtils.contains(b, e[1].x, e[1].y);) e = e.splice(1, 1);
            if (null == f[m] && null != c)
                for (; 1 < e.length && mxUtils.contains(c, e[e.length - 1].x, e[e.length - 1].y);) e = e.splice(e.length - 1, 1)
        },
        orthBuffer: 10,
        orthPointsFallback: !0,
        dirVectors: [
            [-1, 0],
            [0, -1],
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
            [1, 0]
        ],
        wayPoints1: [
            [0, 0],
            [0, 0],
            [0,
                0
            ],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ],
        routePatterns: [
            [
                [513, 2308, 2081, 2562],
                [513, 1090, 514, 2184, 2114, 2561],
                [513, 1090, 514, 2564, 2184, 2562],
                [513, 2308, 2561, 1090, 514, 2568, 2308]
            ],
            [
                [514, 1057, 513, 2308, 2081, 2562],
                [514, 2184, 2114, 2561],
                [514, 2184, 2562, 1057, 513, 2564, 2184],
                [514, 1057, 513, 2568, 2308, 2561]
            ],
            [
                [1090, 514, 1057, 513, 2308, 2081, 2562],
                [2114, 2561],
                [1090, 2562, 1057, 513, 2564, 2184],
                [1090, 514, 1057, 513, 2308, 2561, 2568]
            ],
            [
                [2081, 2562],
                [1057, 513, 1090, 514, 2184, 2114, 2561],
                [1057, 513, 1090, 514, 2184, 2562,
                    2564
                ],
                [1057, 2561, 1090, 514, 2568, 2308]
            ]
        ],
        inlineRoutePatterns: [
            [null, [2114, 2568], null, null],
            [null, [514, 2081, 2114, 2568], null, null],
            [null, [2114, 2561], null, null],
            [
                [2081, 2562],
                [1057, 2114, 2568],
                [2184, 2562], null
            ]
        ],
        vertexSeperations: [],
        limits: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ],
        LEFT_MASK: 32,
        TOP_MASK: 64,
        RIGHT_MASK: 128,
        BOTTOM_MASK: 256,
        LEFT: 1,
        TOP: 2,
        RIGHT: 4,
        BOTTOM: 8,
        SIDE_MASK: 480,
        CENTER_MASK: 512,
        SOURCE_MASK: 1024,
        TARGET_MASK: 2048,
        VERTEX_MASK: 3072,
        OrthConnector: function(a, b, c, d, e) {
            var f = a.view.graph,
                g = null ==
                b ? !1 : f.getModel().isEdge(b.cell),
                f = null == c ? !1 : f.getModel().isEdge(c.cell);
            if (mxEdgeStyle.orthPointsFallback && null != d && 0 < d.length || g || f) mxEdgeStyle.SegmentConnector(a, b, c, d, e);
            else {
                d = a.absolutePoints;
                var k = d[0],
                    l = d[d.length - 1];
                d = null != b ? b.x : k.x;
                var g = null != b ? b.y : k.y,
                    m = null != b ? b.width : 1,
                    n = null != b ? b.height : 1,
                    p = null != c ? c.x : l.x,
                    q = null != c ? c.y : l.y,
                    r = null != c ? c.width : 1,
                    s = null != c ? c.height : 1,
                    f = a.view.scale * mxEdgeStyle.orthBuffer,
                    t = [mxConstants.DIRECTION_MASK_ALL, mxConstants.DIRECTION_MASK_ALL],
                    u = 0;
                null != b &&
                    (t[0] = mxUtils.getPortConstraints(b, a, !0, mxConstants.DIRECTION_MASK_ALL), u = mxUtils.getValue(b.style, mxConstants.STYLE_ROTATION, 0), 0 != u && (u = mxUtils.getBoundingBox(new mxRectangle(d, g, m, n), u), d = u.x, g = u.y, m = u.width, n = u.height));
                null != c && (t[1] = mxUtils.getPortConstraints(c, a, !1, mxConstants.DIRECTION_MASK_ALL), u = mxUtils.getValue(c.style, mxConstants.STYLE_ROTATION, 0), 0 != u && (u = mxUtils.getBoundingBox(new mxRectangle(p, q, r, s), u), p = u.x, q = u.y, r = u.width, s = u.height));
                a = [0, 0];
                d = [
                    [d, g, m, n],
                    [p, q, r, s]
                ];
                for (m = 0; 2 > m; m++) mxEdgeStyle.limits[m][1] =
                    d[m][0] - f, mxEdgeStyle.limits[m][2] = d[m][1] - f, mxEdgeStyle.limits[m][4] = d[m][0] + d[m][2] + f, mxEdgeStyle.limits[m][8] = d[m][1] + d[m][3] + f;
                m = d[0][0] + d[0][2] / 2 - (d[1][0] + d[1][2] / 2);
                n = d[0][1] + d[0][3] / 2 - (d[1][1] + d[1][3] / 2);
                g = 0;
                0 > m ? g = 0 > n ? 2 : 1 : 0 >= n && (g = 3, 0 == m && (g = 2));
                n = null;
                null != b && (n = k);
                b = [
                    [0.5, 0.5],
                    [0.5, 0.5]
                ];
                for (m = 0; 2 > m; m++) null != n && (b[m][0] = (n.x - d[m][0]) / d[m][2], 0.01 > b[m][0] ? a[m] = mxConstants.DIRECTION_MASK_WEST : 0.99 < b[m][0] && (a[m] = mxConstants.DIRECTION_MASK_EAST), b[m][1] = (n.y - d[m][1]) / d[m][3], 0.01 > b[m][1] ?
                    a[m] = mxConstants.DIRECTION_MASK_NORTH : 0.99 < b[m][1] && (a[m] = mxConstants.DIRECTION_MASK_SOUTH)), n = null, null != c && (n = l);
                m = d[0][1] - (d[1][1] + d[1][3]);
                n = d[0][0] - (d[1][0] + d[1][2]);
                p = d[1][1] - (d[0][1] + d[0][3]);
                q = d[1][0] - (d[0][0] + d[0][2]);
                mxEdgeStyle.vertexSeperations[1] = Math.max(n - 2 * f, 0);
                mxEdgeStyle.vertexSeperations[2] = Math.max(m - 2 * f, 0);
                mxEdgeStyle.vertexSeperations[4] = Math.max(p - 2 * f, 0);
                mxEdgeStyle.vertexSeperations[3] = Math.max(q - 2 * f, 0);
                c = [];
                k = [];
                l = [];
                k[0] = n >= q ? mxConstants.DIRECTION_MASK_WEST : mxConstants.DIRECTION_MASK_EAST;
                l[0] = m >= p ? mxConstants.DIRECTION_MASK_NORTH : mxConstants.DIRECTION_MASK_SOUTH;
                k[1] = mxUtils.reversePortConstraints(k[0]);
                l[1] = mxUtils.reversePortConstraints(l[0]);
                n = n >= q ? n : q;
                p = m >= p ? m : p;
                q = [
                    [0, 0],
                    [0, 0]
                ];
                r = !1;
                for (m = 0; 2 > m; m++) 0 == a[m] && (0 == (k[m] & t[m]) && (k[m] = mxUtils.reversePortConstraints(k[m])), 0 == (l[m] & t[m]) && (l[m] = mxUtils.reversePortConstraints(l[m])), q[m][0] = l[m], q[m][1] = k[m]);
                p > 2 * f && n > 2 * f && (0 < (k[0] & t[0]) && 0 < (l[1] & t[1]) ? (q[0][0] = k[0], q[0][1] = l[0], q[1][0] = l[1], q[1][1] = k[1], r = !0) : 0 < (l[0] & t[0]) && 0 < (k[1] &
                    t[1]) && (q[0][0] = l[0], q[0][1] = k[0], q[1][0] = k[1], q[1][1] = l[1], r = !0));
                p > 2 * f && !r && (q[0][0] = l[0], q[0][1] = k[0], q[1][0] = l[1], q[1][1] = k[1], r = !0);
                n > 2 * f && !r && (q[0][0] = k[0], q[0][1] = l[0], q[1][0] = k[1], q[1][1] = l[1]);
                for (m = 0; 2 > m; m++)
                    if (0 == a[m] && (0 == (q[m][0] & t[m]) && (q[m][0] = q[m][1]), c[m] = q[m][0] & t[m], c[m] |= (q[m][1] & t[m]) << 8, c[m] |= (q[1 - m][m] & t[m]) << 16, c[m] |= (q[1 - m][1 - m] & t[m]) << 24, 0 == (c[m] & 15) && (c[m] <<= 8), 0 == (c[m] & 3840) && (c[m] = c[m] & 15 | c[m] >> 8), 0 == (c[m] & 983040) && (c[m] = c[m] & 65535 | (c[m] & 251658240) >> 8), a[m] = c[m] & 15, t[m] ==
                        mxConstants.DIRECTION_MASK_WEST || t[m] == mxConstants.DIRECTION_MASK_NORTH || t[m] == mxConstants.DIRECTION_MASK_EAST || t[m] == mxConstants.DIRECTION_MASK_SOUTH)) a[m] = t[m];
                t = a[0] == mxConstants.DIRECTION_MASK_EAST ? 3 : a[0];
                m = a[1] == mxConstants.DIRECTION_MASK_EAST ? 3 : a[1];
                t -= g;
                m -= g;
                1 > t && (t += 4);
                1 > m && (m += 4);
                t = mxEdgeStyle.routePatterns[t - 1][m - 1];
                mxEdgeStyle.wayPoints1[0][0] = d[0][0];
                mxEdgeStyle.wayPoints1[0][1] = d[0][1];
                switch (a[0]) {
                    case mxConstants.DIRECTION_MASK_WEST:
                        mxEdgeStyle.wayPoints1[0][0] -= f;
                        mxEdgeStyle.wayPoints1[0][1] +=
                            b[0][1] * d[0][3];
                        break;
                    case mxConstants.DIRECTION_MASK_SOUTH:
                        mxEdgeStyle.wayPoints1[0][0] += b[0][0] * d[0][2];
                        mxEdgeStyle.wayPoints1[0][1] += d[0][3] + f;
                        break;
                    case mxConstants.DIRECTION_MASK_EAST:
                        mxEdgeStyle.wayPoints1[0][0] += d[0][2] + f;
                        mxEdgeStyle.wayPoints1[0][1] += b[0][1] * d[0][3];
                        break;
                    case mxConstants.DIRECTION_MASK_NORTH:
                        mxEdgeStyle.wayPoints1[0][0] += b[0][0] * d[0][2], mxEdgeStyle.wayPoints1[0][1] -= f
                }
                f = 0;
                k = c = 0 < (a[0] & (mxConstants.DIRECTION_MASK_EAST | mxConstants.DIRECTION_MASK_WEST)) ? 0 : 1;
                for (m = l = 0; m < t.length; m++) l =
                    t[m] & 15, s = l == mxConstants.DIRECTION_MASK_EAST ? 3 : l, s += g, 4 < s && (s -= 4), n = mxEdgeStyle.dirVectors[s - 1], l = 0 < s % 2 ? 0 : 1, l != c && (f++, mxEdgeStyle.wayPoints1[f][0] = mxEdgeStyle.wayPoints1[f - 1][0], mxEdgeStyle.wayPoints1[f][1] = mxEdgeStyle.wayPoints1[f - 1][1]), u = 0 < (t[m] & mxEdgeStyle.TARGET_MASK), r = 0 < (t[m] & mxEdgeStyle.SOURCE_MASK), p = (t[m] & mxEdgeStyle.SIDE_MASK) >> 5, p <<= g, 15 < p && (p >>= 4), q = 0 < (t[m] & mxEdgeStyle.CENTER_MASK), (r || u) && 9 > p ? (s = 0, r = r ? 0 : 1, s = q && 0 == l ? d[r][0] + b[r][0] * d[r][2] : q ? d[r][1] + b[r][1] * d[r][3] : mxEdgeStyle.limits[r][p],
                        0 == l ? (p = (s - mxEdgeStyle.wayPoints1[f][0]) * n[0], 0 < p && (mxEdgeStyle.wayPoints1[f][0] += n[0] * p)) : (p = (s - mxEdgeStyle.wayPoints1[f][1]) * n[1], 0 < p && (mxEdgeStyle.wayPoints1[f][1] += n[1] * p))) : q && (mxEdgeStyle.wayPoints1[f][0] += n[0] * Math.abs(mxEdgeStyle.vertexSeperations[s] / 2), mxEdgeStyle.wayPoints1[f][1] += n[1] * Math.abs(mxEdgeStyle.vertexSeperations[s] / 2)), 0 < f && mxEdgeStyle.wayPoints1[f][l] == mxEdgeStyle.wayPoints1[f - 1][l] ? f-- : c = l;
                for (m = 0; m <= f && !(m == f && ((0 < (a[1] & (mxConstants.DIRECTION_MASK_EAST | mxConstants.DIRECTION_MASK_WEST)) ?
                    0 : 1) == k ? 0 : 1) != (f + 1) % 2); m++) e.push(new mxPoint(mxEdgeStyle.wayPoints1[m][0], mxEdgeStyle.wayPoints1[m][1]))
            }
        },
        getRoutePattern: function(a, b, c, d) {
            var e = a[0] == mxConstants.DIRECTION_MASK_EAST ? 3 : a[0];
            a = a[1] == mxConstants.DIRECTION_MASK_EAST ? 3 : a[1];
            e -= b;
            a -= b;
            1 > e && (e += 4);
            1 > a && (a += 4);
            b = routePatterns[e - 1][a - 1];
            if (0 == c || 0 == d) null != inlineRoutePatterns[e - 1][a - 1] && (b = inlineRoutePatterns[e - 1][a - 1]);
            return b
        }
    },
    mxStyleRegistry = {
        values: [],
        putValue: function(a, b) {
            mxStyleRegistry.values[a] = b
        },
        getValue: function(a) {
            return mxStyleRegistry.values[a]
        },
        getName: function(a) {
            for (var b in mxStyleRegistry.values)
                if (mxStyleRegistry.values[b] == a) return b;
            return null
        }
    };
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_ELBOW, mxEdgeStyle.ElbowConnector);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_ENTITY_RELATION, mxEdgeStyle.EntityRelation);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_LOOP, mxEdgeStyle.Loop);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_SIDETOSIDE, mxEdgeStyle.SideToSide);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_TOPTOBOTTOM, mxEdgeStyle.TopToBottom);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_ORTHOGONAL, mxEdgeStyle.OrthConnector);
mxStyleRegistry.putValue(mxConstants.EDGESTYLE_SEGMENT, mxEdgeStyle.SegmentConnector);
mxStyleRegistry.putValue(mxConstants.PERIMETER_ELLIPSE, mxPerimeter.EllipsePerimeter);
mxStyleRegistry.putValue(mxConstants.PERIMETER_RECTANGLE, mxPerimeter.RectanglePerimeter);
mxStyleRegistry.putValue(mxConstants.PERIMETER_RHOMBUS, mxPerimeter.RhombusPerimeter);
mxStyleRegistry.putValue(mxConstants.PERIMETER_TRIANGLE, mxPerimeter.TrianglePerimeter);
mxStyleRegistry.putValue(mxConstants.PERIMETER_HEXAGON, mxPerimeter.HexagonPerimeter);

function mxGraphView(a) {
    this.graph = a;
    this.translate = new mxPoint;
    this.graphBounds = new mxRectangle;
    this.states = new mxDictionary
}
mxGraphView.prototype = new mxEventSource;
mxGraphView.prototype.constructor = mxGraphView;
mxGraphView.prototype.EMPTY_POINT = new mxPoint;
mxGraphView.prototype.doneResource = "none" != mxClient.language ? "done" : "";
mxGraphView.prototype.updatingDocumentResource = "none" != mxClient.language ? "updatingDocument" : "";
mxGraphView.prototype.allowEval = !1;
mxGraphView.prototype.captureDocumentGesture = !0;
mxGraphView.prototype.optimizeVmlReflows = !0;
mxGraphView.prototype.rendering = !0;
mxGraphView.prototype.graph = null;
mxGraphView.prototype.currentRoot = null;
mxGraphView.prototype.graphBounds = null;
mxGraphView.prototype.scale = 1;
mxGraphView.prototype.translate = null;
mxGraphView.prototype.updateStyle = !1;
mxGraphView.prototype.lastNode = null;
mxGraphView.prototype.lastHtmlNode = null;
mxGraphView.prototype.lastForegroundNode = null;
mxGraphView.prototype.lastForegroundHtmlNode = null;
mxGraphView.prototype.getGraphBounds = function() {
    return this.graphBounds
};
mxGraphView.prototype.setGraphBounds = function(a) {
    this.graphBounds = a
};
mxGraphView.prototype.getBounds = function(a) {
    var b = null;
    if (null != a && 0 < a.length)
        for (var c = this.graph.getModel(), d = 0; d < a.length; d++)
            if (c.isVertex(a[d]) || c.isEdge(a[d])) {
                var e = this.getState(a[d]);
                null != e && (null == b ? b = new mxRectangle(e.x, e.y, e.width, e.height) : b.add(e))
            }
    return b
};
mxGraphView.prototype.setCurrentRoot = function(a) {
    if (this.currentRoot != a) {
        var b = new mxCurrentRootChange(this, a);
        b.execute();
        var c = new mxUndoableEdit(this, !1);
        c.add(b);
        this.fireEvent(new mxEventObject(mxEvent.UNDO, "edit", c));
        this.graph.sizeDidChange()
    }
    return a
};
mxGraphView.prototype.scaleAndTranslate = function(a, b, c) {
    var d = this.scale,
        e = new mxPoint(this.translate.x, this.translate.y);
    if (this.scale != a || this.translate.x != b || this.translate.y != c) this.scale = a, this.translate.x = b, this.translate.y = c, this.isEventsEnabled() && (this.revalidate(), this.graph.sizeDidChange());
    this.fireEvent(new mxEventObject(mxEvent.SCALE_AND_TRANSLATE, "scale", a, "previousScale", d, "translate", this.translate, "previousTranslate", e))
};
mxGraphView.prototype.getScale = function() {
    return this.scale
};
mxGraphView.prototype.setScale = function(a) {
    var b = this.scale;
    this.scale != a && (this.scale = a, this.isEventsEnabled() && (this.revalidate(), this.graph.sizeDidChange()));
    this.fireEvent(new mxEventObject(mxEvent.SCALE, "scale", a, "previousScale", b))
};
mxGraphView.prototype.getTranslate = function() {
    return this.translate
};
mxGraphView.prototype.setTranslate = function(a, b) {
    var c = new mxPoint(this.translate.x, this.translate.y);
    if (this.translate.x != a || this.translate.y != b) this.translate.x = a, this.translate.y = b, this.isEventsEnabled() && (this.revalidate(), this.graph.sizeDidChange());
    this.fireEvent(new mxEventObject(mxEvent.TRANSLATE, "translate", this.translate, "previousTranslate", c))
};
mxGraphView.prototype.refresh = function() {
    null != this.currentRoot && this.clear();
    this.revalidate()
};
mxGraphView.prototype.revalidate = function() {
    this.invalidate();
    this.validate()
};
mxGraphView.prototype.clear = function(a, b, c) {
    var d = this.graph.getModel();
    a = a || d.getRoot();
    b = null != b ? b : !1;
    c = null != c ? c : !0;
    this.removeState(a);
    if (c && (b || a != this.currentRoot)) {
        c = d.getChildCount(a);
        for (var e = 0; e < c; e++) this.clear(d.getChildAt(a, e), b)
    } else this.invalidate(a)
};
mxGraphView.prototype.invalidate = function(a, b, c) {
    var d = this.graph.getModel();
    a = a || d.getRoot();
    b = null != b ? b : !0;
    c = null != c ? c : !0;
    var e = this.getState(a);
    null != e && (e.invalid = !0);
    if (!a.invalidating) {
        a.invalidating = !0;
        if (b)
            for (var f = d.getChildCount(a), e = 0; e < f; e++) {
                var g = d.getChildAt(a, e);
                this.invalidate(g, b, c)
            }
        if (c) {
            f = d.getEdgeCount(a);
            for (e = 0; e < f; e++) this.invalidate(d.getEdgeAt(a, e), b, c)
        }
        delete a.invalidating
    }
};
mxGraphView.prototype.validate = function(a) {
    var b = mxLog.enter("mxGraphView.validate");
    window.status = mxResources.get(this.updatingDocumentResource) || this.updatingDocumentResource;
    this.resetValidationState();
    var c = null;
    if (this.optimizeVmlReflows && null != this.canvas && null == this.textDiv && (8 == document.documentMode || mxClient.IS_QUIRKS)) this.placeholder = document.createElement("div"), this.placeholder.style.position = "absolute", this.placeholder.style.width = this.canvas.clientWidth + "px", this.placeholder.style.height =
        this.canvas.clientHeight + "px", this.canvas.parentNode.appendChild(this.placeholder), c = this.drawPane.style.display, this.canvas.style.display = "none", this.textDiv = document.createElement("div"), this.textDiv.style.position = "absolute", this.textDiv.style.whiteSpace = "nowrap", this.textDiv.style.visibility = "hidden", this.textDiv.style.display = mxClient.IS_QUIRKS ? "inline" : "inline-block", this.textDiv.style.zoom = "1", document.body.appendChild(this.textDiv);
    a = this.getBoundingBox(this.validateCellState(this.validateCell(a ||
        (null != this.currentRoot ? this.currentRoot : this.graph.getModel().getRoot()))));
    this.setGraphBounds(null != a ? a : this.getEmptyBounds());
    this.validateBackground();
    null != c && (this.canvas.style.display = c, this.placeholder.parentNode.removeChild(this.placeholder), this.textDiv.parentNode.removeChild(this.textDiv), this.textDiv = null);
    this.resetValidationState();
    window.status = mxResources.get(this.doneResource) || this.doneResource;
    mxLog.leave("mxGraphView.validate", b)
};
mxGraphView.prototype.getEmptyBounds = function() {
    return new mxRectangle(this.translate.x * this.scale, this.translate.y * this.scale)
};
mxGraphView.prototype.getBoundingBox = function(a, b) {
    b = null != b ? b : !0;
    var c = null;
    if (null != a && (null != a.shape && null != a.shape.boundingBox && (c = a.shape.boundingBox.clone()), null != a.text && null != a.text.boundingBox && (null != c ? c.add(a.text.boundingBox) : c = a.text.boundingBox.clone()), b))
        for (var d = this.graph.getModel(), e = d.getChildCount(a.cell), f = 0; f < e; f++) {
            var g = this.getBoundingBox(this.getState(d.getChildAt(a.cell, f)));
            null != g && (null == c ? c = g : c.add(g))
        }
    return c
};
mxGraphView.prototype.createBackgroundPageShape = function(a) {
    return new mxRectangleShape(a, "white", "black")
};
mxGraphView.prototype.validateBackground = function() {
    this.validateBackgroundImage();
    this.validateBackgroundPage()
};
mxGraphView.prototype.validateBackgroundImage = function() {
    var a = this.graph.getBackgroundImage();
    if (null != a) {
        if (null == this.backgroundImage || this.backgroundImage.image != a.src) {
            null != this.backgroundImage && this.backgroundImage.destroy();
            var b = new mxRectangle(0, 0, 1, 1);
            this.backgroundImage = new mxImageShape(b, a.src);
            this.backgroundImage.dialect = this.graph.dialect;
            this.backgroundImage.init(this.backgroundPane);
            this.backgroundImage.redraw();
            8 == document.documentMode && mxEvent.addGestureListeners(this.backgroundImage.node,
                mxUtils.bind(this, function(a) {
                    this.graph.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(a))
                }), mxUtils.bind(this, function(a) {
                    this.graph.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(a))
                }), mxUtils.bind(this, function(a) {
                    this.graph.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(a))
                }))
        }
        this.redrawBackgroundImage(this.backgroundImage, a)
    } else null != this.backgroundImage && (this.backgroundImage.destroy(), this.backgroundImage = null)
};
mxGraphView.prototype.validateBackgroundPage = function() {
    if (this.graph.pageVisible) {
        var a = this.getBackgroundPageBounds();
        null == this.backgroundPageShape ? (this.backgroundPageShape = this.createBackgroundPageShape(a), this.backgroundPageShape.scale = this.scale, this.backgroundPageShape.isShadow = !0, this.backgroundPageShape.dialect = this.graph.dialect, this.backgroundPageShape.init(this.backgroundPane), this.backgroundPageShape.redraw(), this.graph.nativeDblClickEnabled && mxEvent.addListener(this.backgroundPageShape.node,
            "dblclick", mxUtils.bind(this, function(a) {
                this.graph.dblClick(a)
            })), mxEvent.addGestureListeners(this.backgroundPageShape.node, mxUtils.bind(this, function(a) {
            this.graph.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(a))
        }), mxUtils.bind(this, function(a) {
            null != this.graph.tooltipHandler && this.graph.tooltipHandler.isHideOnHover() && this.graph.tooltipHandler.hide();
            this.graph.isMouseDown && !mxEvent.isConsumed(a) && this.graph.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(a))
        }), mxUtils.bind(this, function(a) {
            this.graph.fireMouseEvent(mxEvent.MOUSE_UP,
                new mxMouseEvent(a))
        }))) : (this.backgroundPageShape.scale = this.scale, this.backgroundPageShape.bounds = a, this.backgroundPageShape.redraw())
    } else null != this.backgroundPageShape && (this.backgroundPageShape.destroy(), this.backgroundPageShape = null)
};
mxGraphView.prototype.getBackgroundPageBounds = function() {
    var a = this.graph.pageFormat,
        b = this.scale * this.graph.pageScale;
    return new mxRectangle(this.scale * this.translate.x, this.scale * this.translate.y, a.width * b, a.height * b)
};
mxGraphView.prototype.redrawBackgroundImage = function(a, b) {
    a.scale = this.scale;
    a.bounds.x = this.scale * this.translate.x;
    a.bounds.y = this.scale * this.translate.y;
    a.bounds.width = this.scale * b.width;
    a.bounds.height = this.scale * b.height;
    a.redraw()
};
mxGraphView.prototype.validateCell = function(a, b) {
    if (null != a)
        if (b = (null != b ? b : !0) && this.graph.isCellVisible(a), null != this.getState(a, b) && !b) this.removeState(a);
        else
            for (var c = this.graph.getModel(), d = c.getChildCount(a), e = 0; e < d; e++) this.validateCell(c.getChildAt(a, e), b && (!this.isCellCollapsed(a) || a == this.currentRoot));
    return a
};
mxGraphView.prototype.validateCellState = function(a, b) {
    b = null != b ? b : !0;
    var c = null;
    if (null != a && (c = this.getState(a), null != c)) {
        var d = this.graph.getModel();
        c.invalid && (c.invalid = !1, a != this.currentRoot && this.validateCellState(d.getParent(a), !1), c.setVisibleTerminalState(this.validateCellState(this.getVisibleTerminal(a, !0), !1), !0), c.setVisibleTerminalState(this.validateCellState(this.getVisibleTerminal(a, !1), !1), !1), this.updateCellState(c), a != this.currentRoot && this.graph.cellRenderer.redraw(c, !1, this.isRendering()));
        if (b) {
            null != c.shape && this.stateValidated(c);
            for (var e = d.getChildCount(a), f = 0; f < e; f++) this.validateCellState(d.getChildAt(a, f))
        }
    }
    return c
};
mxGraphView.prototype.updateCellState = function(a) {
    a.absoluteOffset.x = 0;
    a.absoluteOffset.y = 0;
    a.origin.x = 0;
    a.origin.y = 0;
    a.length = 0;
    if (a.cell != this.currentRoot) {
        var b = this.graph.getModel(),
            c = this.getState(b.getParent(a.cell));
        null != c && c.cell != this.currentRoot && (a.origin.x += c.origin.x, a.origin.y += c.origin.y);
        var d = this.graph.getChildOffsetForCell(a.cell);
        null != d && (a.origin.x += d.x, a.origin.y += d.y);
        var e = this.graph.getCellGeometry(a.cell);
        null != e && (b.isEdge(a.cell) || (d = e.offset || this.EMPTY_POINT, e.relative &&
            null != c ? b.isEdge(c.cell) ? (c = this.getPoint(c, e), null != c && (a.origin.x += c.x / this.scale - this.translate.x, a.origin.y += c.y / this.scale - this.translate.y)) : (a.origin.x += e.x * c.width / this.scale + d.x, a.origin.y += e.y * c.height / this.scale + d.y) : (a.absoluteOffset.x = this.scale * d.x, a.absoluteOffset.y = this.scale * d.y, a.origin.x += e.x, a.origin.y += e.y)), a.x = this.scale * (this.translate.x + a.origin.x), a.y = this.scale * (this.translate.y + a.origin.y), a.width = this.scale * e.width, a.height = this.scale * e.height, b.isVertex(a.cell) && this.updateVertexState(a,
            e), b.isEdge(a.cell) && this.updateEdgeState(a, e))
    }
};
mxGraphView.prototype.isCellCollapsed = function(a) {
    return this.graph.isCellCollapsed(a)
};
mxGraphView.prototype.updateVertexState = function(a, b) {
    var c = this.graph.getModel(),
        d = this.getState(c.getParent(a.cell));
    if (b.relative && null != d) {
        var e = mxUtils.toRadians(d.style[mxConstants.STYLE_ROTATION] || "0");
        if (0 != e) {
            var c = Math.cos(e),
                e = Math.sin(e),
                f = new mxPoint(a.getCenterX(), a.getCenterY()),
                d = new mxPoint(d.getCenterX(), d.getCenterY()),
                c = mxUtils.getRotatedPoint(f, c, e, d);
            a.x = c.x - a.width / 2;
            a.y = c.y - a.height / 2
        }
    }
    this.updateVertexLabelOffset(a)
};
mxGraphView.prototype.updateEdgeState = function(a, b) {
    var c = a.getVisibleTerminalState(!0),
        d = a.getVisibleTerminalState(!1);
    null != this.graph.model.getTerminal(a.cell, !0) && null == c || null == c && null == b.getTerminalPoint(!0) || null != this.graph.model.getTerminal(a.cell, !1) && null == d || null == d && null == b.getTerminalPoint(!1) ? this.clear(a.cell, !0) : (this.updateFixedTerminalPoints(a, c, d), this.updatePoints(a, b.points, c, d), this.updateFloatingTerminalPoints(a, c, d), c = a.absolutePoints, a.cell != this.currentRoot && (null == c || 2 >
        c.length || null == c[0] || null == c[c.length - 1]) ? this.clear(a.cell, !0) : (this.updateEdgeBounds(a), this.updateEdgeLabelOffset(a)))
};
mxGraphView.prototype.updateVertexLabelOffset = function(a) {
    var b = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_POSITION, mxConstants.ALIGN_CENTER);
    if (b == mxConstants.ALIGN_LEFT) b = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_WIDTH, null), b = null != b ? b * this.scale : a.width, a.absoluteOffset.x -= b;
    else if (b == mxConstants.ALIGN_RIGHT) a.absoluteOffset.x += a.width;
    else if (b == mxConstants.ALIGN_CENTER && (b = mxUtils.getValue(a.style, mxConstants.STYLE_LABEL_WIDTH, null), null != b)) {
        var c = mxUtils.getValue(a.style, mxConstants.STYLE_ALIGN,
                mxConstants.ALIGN_CENTER),
            d = 0;
        c == mxConstants.ALIGN_CENTER ? d = 0.5 : c == mxConstants.ALIGN_RIGHT && (d = 1);
        0 != d && (a.absoluteOffset.x -= (b * this.scale - a.width) * d)
    }
    b = mxUtils.getValue(a.style, mxConstants.STYLE_VERTICAL_LABEL_POSITION, mxConstants.ALIGN_MIDDLE);
    b == mxConstants.ALIGN_TOP ? a.absoluteOffset.y -= a.height : b == mxConstants.ALIGN_BOTTOM && (a.absoluteOffset.y += a.height)
};
mxGraphView.prototype.resetValidationState = function() {
    this.lastForegroundHtmlNode = this.lastForegroundNode = this.lastHtmlNode = this.lastNode = null
};
mxGraphView.prototype.stateValidated = function(a) {
    var b = this.graph.getModel().isEdge(a.cell) && this.graph.keepEdgesInForeground || this.graph.getModel().isVertex(a.cell) && this.graph.keepEdgesInBackground;
    a = this.graph.cellRenderer.insertStateAfter(a, b ? this.lastForegroundNode || this.lastNode : this.lastNode, b ? this.lastForegroundHtmlNode || this.lastHtmlNode : this.lastHtmlNode);
    b ? (this.lastForegroundHtmlNode = a[1], this.lastForegroundNode = a[0]) : (this.lastHtmlNode = a[1], this.lastNode = a[0])
};
mxGraphView.prototype.updateFixedTerminalPoints = function(a, b, c) {
    this.updateFixedTerminalPoint(a, b, !0, this.graph.getConnectionConstraint(a, b, !0));
    this.updateFixedTerminalPoint(a, c, !1, this.graph.getConnectionConstraint(a, c, !1))
};
mxGraphView.prototype.updateFixedTerminalPoint = function(a, b, c, d) {
    var e = null;
    null != d && (e = this.graph.getConnectionPoint(b, d));
    if (null == e && null == b) {
        b = this.scale;
        d = this.translate;
        var f = a.origin,
            e = this.graph.getCellGeometry(a.cell).getTerminalPoint(c);
        null != e && (e = new mxPoint(b * (d.x + e.x + f.x), b * (d.y + e.y + f.y)))
    }
    a.setAbsoluteTerminalPoint(e, c)
};
mxGraphView.prototype.updatePoints = function(a, b, c, d) {
    if (null != a) {
        var e = [];
        e.push(a.absolutePoints[0]);
        var f = this.getEdgeStyle(a, b, c, d);
        if (null != f) c = this.getTerminalPort(a, c, !0), d = this.getTerminalPort(a, d, !1), f(a, c, d, b, e);
        else if (null != b)
            for (f = 0; f < b.length; f++) null != b[f] && (d = mxUtils.clone(b[f]), e.push(this.transformControlPoint(a, d)));
        b = a.absolutePoints;
        e.push(b[b.length - 1]);
        a.absolutePoints = e
    }
};
mxGraphView.prototype.transformControlPoint = function(a, b) {
    var c = a.origin;
    return new mxPoint(this.scale * (b.x + this.translate.x + c.x), this.scale * (b.y + this.translate.y + c.y))
};
mxGraphView.prototype.getEdgeStyle = function(a, b, c, d) {
    a = null != c && c == d ? mxUtils.getValue(a.style, mxConstants.STYLE_LOOP, this.graph.defaultLoopStyle) : !mxUtils.getValue(a.style, mxConstants.STYLE_NOEDGESTYLE, !1) ? a.style[mxConstants.STYLE_EDGE] : null;
    "string" == typeof a && (b = mxStyleRegistry.getValue(a), null == b && this.isAllowEval() && (b = mxUtils.eval(a)), a = b);
    return "function" == typeof a ? a : null
};
mxGraphView.prototype.updateFloatingTerminalPoints = function(a, b, c) {
    var d = a.absolutePoints,
        e = d[0];
    null == d[d.length - 1] && null != c && this.updateFloatingTerminalPoint(a, c, b, !1);
    null == e && null != b && this.updateFloatingTerminalPoint(a, b, c, !0)
};
mxGraphView.prototype.updateFloatingTerminalPoint = function(a, b, c, d) {
    b = this.getTerminalPort(a, b, d);
    var e = this.getNextPoint(a, c, d),
        f = this.graph.isOrthogonal(a);
    c = mxUtils.toRadians(Number(b.style[mxConstants.STYLE_ROTATION] || "0"));
    var g = new mxPoint(b.getCenterX(), b.getCenterY());
    if (0 != c) var k = Math.cos(-c),
        l = Math.sin(-c),
        e = mxUtils.getRotatedPoint(e, k, l, g);
    k = parseFloat(a.style[mxConstants.STYLE_PERIMETER_SPACING] || 0);
    k += parseFloat(a.style[d ? mxConstants.STYLE_SOURCE_PERIMETER_SPACING : mxConstants.STYLE_TARGET_PERIMETER_SPACING] ||
        0);
    b = this.getPerimeterPoint(b, e, 0 == c && f, k);
    0 != c && (k = Math.cos(c), l = Math.sin(c), b = mxUtils.getRotatedPoint(b, k, l, g));
    a.setAbsoluteTerminalPoint(b, d)
};
mxGraphView.prototype.getTerminalPort = function(a, b, c) {
    a = mxUtils.getValue(a.style, c ? mxConstants.STYLE_SOURCE_PORT : mxConstants.STYLE_TARGET_PORT);
    null != a && (a = this.getState(this.graph.getModel().getCell(a)), null != a && (b = a));
    return b
};
mxGraphView.prototype.getPerimeterPoint = function(a, b, c, d) {
    var e = null;
    if (null != a) {
        var f = this.getPerimeterFunction(a);
        if (null != f && null != b && (d = this.getPerimeterBounds(a, d), 0 < d.width || 0 < d.height)) e = f(d, a, b, c);
        null == e && (e = this.getPoint(a))
    }
    return e
};
mxGraphView.prototype.getRoutingCenterX = function(a) {
    var b = null != a.style ? parseFloat(a.style[mxConstants.STYLE_ROUTING_CENTER_X]) || 0 : 0;
    return a.getCenterX() + b * a.width
};
mxGraphView.prototype.getRoutingCenterY = function(a) {
    var b = null != a.style ? parseFloat(a.style[mxConstants.STYLE_ROUTING_CENTER_Y]) || 0 : 0;
    return a.getCenterY() + b * a.height
};
mxGraphView.prototype.getPerimeterBounds = function(a, b) {
    b = null != b ? b : 0;
    null != a && (b += parseFloat(a.style[mxConstants.STYLE_PERIMETER_SPACING] || 0));
    return a.getPerimeterBounds(b * this.scale)
};
mxGraphView.prototype.getPerimeterFunction = function(a) {
    a = a.style[mxConstants.STYLE_PERIMETER];
    if ("string" == typeof a) {
        var b = mxStyleRegistry.getValue(a);
        null == b && this.isAllowEval() && (b = mxUtils.eval(a));
        a = b
    }
    return "function" == typeof a ? a : null
};
mxGraphView.prototype.getNextPoint = function(a, b, c) {
    a = a.absolutePoints;
    var d = null;
    if (null != a && (c || 2 < a.length || null == b)) d = a.length, d = a[c ? Math.min(1, d - 1) : Math.max(0, d - 2)];
    null == d && null != b && (d = new mxPoint(b.getCenterX(), b.getCenterY()));
    return d
};
mxGraphView.prototype.getVisibleTerminal = function(a, b) {
    for (var c = this.graph.getModel(), d = c.getTerminal(a, b), e = d; null != d && d != this.currentRoot;) {
        if (!this.graph.isCellVisible(e) || this.isCellCollapsed(d)) e = d;
        d = c.getParent(d)
    }
    c.getParent(e) == c.getRoot() && (e = null);
    return e
};
mxGraphView.prototype.updateEdgeBounds = function(a) {
    var b = a.absolutePoints,
        c = b[0],
        d = b[b.length - 1];
    if (c.x != d.x || c.y != d.y) {
        var e = d.x - c.x,
            f = d.y - c.y;
        a.terminalDistance = Math.sqrt(e * e + f * f)
    } else a.terminalDistance = 0;
    var d = 0,
        g = [],
        f = c;
    if (null != f) {
        for (var c = f.x, k = f.y, l = c, m = k, n = 1; n < b.length; n++) {
            var p = b[n];
            null != p && (e = f.x - p.x, f = f.y - p.y, e = Math.sqrt(e * e + f * f), g.push(e), d += e, f = p, c = Math.min(f.x, c), k = Math.min(f.y, k), l = Math.max(f.x, l), m = Math.max(f.y, m))
        }
        a.length = d;
        a.segments = g;
        a.x = c;
        a.y = k;
        a.width = Math.max(1, l - c);
        a.height =
            Math.max(1, m - k)
    }
};
mxGraphView.prototype.getPoint = function(a, b) {
    var c = a.getCenterX(),
        d = a.getCenterY();
    if (null != a.segments && (null == b || b.relative)) {
        for (var e = a.absolutePoints.length, f = ((null != b ? b.x / 2 : 0) + 0.5) * a.length, g = a.segments[0], k = 0, l = 1; f > k + g && l < e - 1;) k += g, g = a.segments[l++];
        e = 0 == g ? 0 : (f - k) / g;
        f = a.absolutePoints[l - 1];
        l = a.absolutePoints[l];
        if (null != f && null != l) {
            k = c = d = 0;
            if (null != b) {
                var d = b.y,
                    m = b.offset;
                null != m && (c = m.x, k = m.y)
            }
            m = l.x - f.x;
            l = l.y - f.y;
            c = f.x + m * e + ((0 == g ? 0 : l / g) * d + c) * this.scale;
            d = f.y + l * e - ((0 == g ? 0 : m / g) * d - k) * this.scale
        }
    } else null !=
        b && (m = b.offset, null != m && (c += m.x, d += m.y));
    return new mxPoint(c, d)
};
mxGraphView.prototype.getRelativePoint = function(a, b, c) {
    var d = this.graph.getModel().getGeometry(a.cell);
    if (null != d) {
        var e = a.absolutePoints.length;
        if (d.relative && 1 < e) {
            for (var d = a.length, f = a.segments, g = a.absolutePoints[0], k = a.absolutePoints[1], l = mxUtils.ptSegDistSq(g.x, g.y, k.x, k.y, b, c), m = 0, n = 0, p = 0, q = 2; q < e; q++) n += f[q - 2], k = a.absolutePoints[q], g = mxUtils.ptSegDistSq(g.x, g.y, k.x, k.y, b, c), g <= l && (l = g, m = q - 1, p = n), g = k;
            e = f[m];
            g = a.absolutePoints[m];
            k = a.absolutePoints[m + 1];
            l = k.x;
            f = k.y;
            a = g.x - l;
            m = g.y - f;
            l = b - l;
            f = c - f;
            l = a - l;
            f = m - f;
            f = l * a + f * m;
            a = Math.sqrt(0 >= f ? 0 : f * f / (a * a + m * m));
            a > e && (a = e);
            e = Math.sqrt(mxUtils.ptSegDistSq(g.x, g.y, k.x, k.y, b, c)); - 1 == mxUtils.relativeCcw(g.x, g.y, k.x, k.y, b, c) && (e = -e);
            return new mxPoint(-2 * ((d / 2 - p - a) / d), e / this.scale)
        }
    }
    return new mxPoint
};
mxGraphView.prototype.updateEdgeLabelOffset = function(a) {
    var b = a.absolutePoints;
    a.absoluteOffset.x = a.getCenterX();
    a.absoluteOffset.y = a.getCenterY();
    if (null != b && 0 < b.length && null != a.segments) {
        var c = this.graph.getCellGeometry(a.cell);
        if (c.relative) {
            var d = this.getPoint(a, c);
            null != d && (a.absoluteOffset = d)
        } else {
            var d = b[0],
                e = b[b.length - 1];
            if (null != d && null != e) {
                var b = e.x - d.x,
                    f = e.y - d.y,
                    g = e = 0,
                    c = c.offset;
                null != c && (e = c.x, g = c.y);
                c = d.y + f / 2 + g * this.scale;
                a.absoluteOffset.x = d.x + b / 2 + e * this.scale;
                a.absoluteOffset.y = c
            }
        }
    }
};
mxGraphView.prototype.getState = function(a, b) {
    b = b || !1;
    var c = null;
    if (null != a && (c = this.states.get(a), b && (null == c || this.updateStyle) && this.graph.isCellVisible(a))) null == c ? (c = this.createState(a), this.states.put(a, c)) : c.style = this.graph.getCellStyle(a);
    return c
};
mxGraphView.prototype.isRendering = function() {
    return this.rendering
};
mxGraphView.prototype.setRendering = function(a) {
    this.rendering = a
};
mxGraphView.prototype.isAllowEval = function() {
    return this.allowEval
};
mxGraphView.prototype.setAllowEval = function(a) {
    this.allowEval = a
};
mxGraphView.prototype.getStates = function() {
    return this.states
};
mxGraphView.prototype.setStates = function(a) {
    this.states = a
};
mxGraphView.prototype.getCellStates = function(a) {
    if (null == a) return this.states;
    for (var b = [], c = 0; c < a.length; c++) {
        var d = this.getState(a[c]);
        null != d && b.push(d)
    }
    return b
};
mxGraphView.prototype.removeState = function(a) {
    var b = null;
    null != a && (b = this.states.remove(a), null != b && (this.graph.cellRenderer.destroy(b), b.destroy()));
    return b
};
mxGraphView.prototype.createState = function(a) {
    a = new mxCellState(this, a, this.graph.getCellStyle(a));
    var b = this.graph.getModel();
    null != a.view.graph.container && (a.cell != a.view.currentRoot && (b.isVertex(a.cell) || b.isEdge(a.cell))) && this.graph.cellRenderer.createShape(a);
    return a
};
mxGraphView.prototype.getCanvas = function() {
    return this.canvas
};
mxGraphView.prototype.getBackgroundPane = function() {
    return this.backgroundPane
};
mxGraphView.prototype.getDrawPane = function() {
    return this.drawPane
};
mxGraphView.prototype.getOverlayPane = function() {
    return this.overlayPane
};
mxGraphView.prototype.getDecoratorPane = function() {
    return this.decoratorPane
};
mxGraphView.prototype.isContainerEvent = function(a) {
    a = mxEvent.getSource(a);
    return a == this.graph.container || a.parentNode == this.backgroundPane || null != a.parentNode && a.parentNode.parentNode == this.backgroundPane || a == this.canvas.parentNode || a == this.canvas || a == this.backgroundPane || a == this.drawPane || a == this.overlayPane || a == this.decoratorPane
};
mxGraphView.prototype.isScrollEvent = function(a) {
    var b = mxUtils.getOffset(this.graph.container);
    a = new mxPoint(a.clientX - b.x, a.clientY - b.y);
    var b = this.graph.container.offsetWidth,
        c = this.graph.container.clientWidth;
    if (b > c && a.x > c + 2 && a.x <= b) return !0;
    b = this.graph.container.offsetHeight;
    c = this.graph.container.clientHeight;
    return b > c && a.y > c + 2 && a.y <= b ? !0 : !1
};
mxGraphView.prototype.init = function() {
    this.installListeners();
    var a = this.graph;
    a.dialect == mxConstants.DIALECT_SVG ? this.createSvg() : a.dialect == mxConstants.DIALECT_VML ? this.createVml() : this.createHtml()
};
mxGraphView.prototype.installListeners = function() {
    var a = this.graph,
        b = a.container;
    if (null != b) {
        mxClient.IS_TOUCH && (mxEvent.addListener(b, "gesturestart", mxUtils.bind(this, function(b) {
            a.fireGestureEvent(b);
            mxEvent.consume(b)
        })), mxEvent.addListener(b, "gesturechange", mxUtils.bind(this, function(b) {
            a.fireGestureEvent(b);
            mxEvent.consume(b)
        })), mxEvent.addListener(b, "gestureend", mxUtils.bind(this, function(b) {
            a.fireGestureEvent(b);
            mxEvent.consume(b)
        })));
        mxEvent.addGestureListeners(b, mxUtils.bind(this, function(b) {
            this.isContainerEvent(b) &&
                (!mxClient.IS_IE && !mxClient.IS_GC && !mxClient.IS_OP && !mxClient.IS_SF || !this.isScrollEvent(b)) && a.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(b))
        }), mxUtils.bind(this, function(b) {
            this.isContainerEvent(b) && a.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(b))
        }), mxUtils.bind(this, function(b) {
            this.isContainerEvent(b) && a.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(b))
        }));
        mxEvent.addListener(b, "dblclick", mxUtils.bind(this, function(b) {
            this.isContainerEvent(b) && a.dblClick(b)
        }));
        var c = function(c) {
            var e =
                null;
            mxClient.IS_TOUCH && (e = mxEvent.getClientX(c), c = mxEvent.getClientY(c), c = mxUtils.convertPoint(b, e, c), e = a.view.getState(a.getCellAt(c.x, c.y)));
            return e
        };
        a.addMouseListener({
            mouseDown: function(b, c) {
                a.popupMenuHandler.hideMenu()
            },
            mouseMove: function() {},
            mouseUp: function() {}
        });
        this.moveHandler = mxUtils.bind(this, function(b) {
            null != a.tooltipHandler && a.tooltipHandler.isHideOnHover() && a.tooltipHandler.hide();
            this.captureDocumentGesture && (a.isMouseDown && null != a.container && !this.isContainerEvent(b) && "none" !=
                a.container.style.display && "hidden" != a.container.style.visibility && !mxEvent.isConsumed(b)) && a.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(b, c(b)))
        });
        this.endHandler = mxUtils.bind(this, function(b) {
            this.captureDocumentGesture && (a.isMouseDown && null != a.container && !this.isContainerEvent(b) && "none" != a.container.style.display && "hidden" != a.container.style.visibility) && a.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(b))
        });
        mxEvent.addGestureListeners(document, null, this.moveHandler, this.endHandler)
    }
};
mxGraphView.prototype.createHtml = function() {
    var a = this.graph.container;
    null != a && (this.canvas = this.createHtmlPane("100%", "100%"), this.backgroundPane = this.createHtmlPane("1px", "1px"), this.drawPane = this.createHtmlPane("1px", "1px"), this.overlayPane = this.createHtmlPane("1px", "1px"), this.decoratorPane = this.createHtmlPane("1px", "1px"), this.canvas.appendChild(this.backgroundPane), this.canvas.appendChild(this.drawPane), this.canvas.appendChild(this.overlayPane), this.canvas.appendChild(this.decoratorPane), a.appendChild(this.canvas),
        mxClient.IS_QUIRKS && (a = mxUtils.bind(this, function(a) {
            a = this.getGraphBounds();
            this.updateHtmlCanvasSize(a.x + a.width + this.graph.border, a.y + a.height + this.graph.border)
        }), mxEvent.addListener(window, "resize", a)))
};
mxGraphView.prototype.updateHtmlCanvasSize = function(a, b) {
    if (null != this.graph.container) {
        var c = this.graph.container.offsetHeight;
        this.canvas.style.width = this.graph.container.offsetWidth < a ? a + "px" : "100%";
        this.canvas.style.height = c < b ? b + "px" : "100%"
    }
};
mxGraphView.prototype.createHtmlPane = function(a, b) {
    var c = document.createElement("DIV");
    null != a && null != b ? (c.style.position = "absolute", c.style.left = "0px", c.style.top = "0px", c.style.width = a, c.style.height = b) : c.style.position = "relative";
    return c
};
mxGraphView.prototype.createVml = function() {
    var a = this.graph.container;
    if (null != a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        this.canvas = this.createVmlPane(b, c);
        this.backgroundPane = this.createVmlPane(b, c);
        this.drawPane = this.createVmlPane(b, c);
        this.overlayPane = this.createVmlPane(b, c);
        this.decoratorPane = this.createVmlPane(b, c);
        this.canvas.appendChild(this.backgroundPane);
        this.canvas.appendChild(this.drawPane);
        this.canvas.appendChild(this.overlayPane);
        this.canvas.appendChild(this.decoratorPane);
        a.appendChild(this.canvas)
    }
};
mxGraphView.prototype.createVmlPane = function(a, b) {
    var c = document.createElement(mxClient.VML_PREFIX + ":group");
    c.style.position = "absolute";
    c.style.left = "0px";
    c.style.top = "0px";
    c.style.width = a + "px";
    c.style.height = b + "px";
    c.setAttribute("coordsize", a + "," + b);
    c.setAttribute("coordorigin", "0,0");
    return c
};
mxGraphView.prototype.createSvg = function() {
    var a = this.graph.container;
    this.canvas = document.createElementNS(mxConstants.NS_SVG, "g");
    this.backgroundPane = document.createElementNS(mxConstants.NS_SVG, "g");
    this.canvas.appendChild(this.backgroundPane);
    this.drawPane = document.createElementNS(mxConstants.NS_SVG, "g");
    this.canvas.appendChild(this.drawPane);
    this.overlayPane = document.createElementNS(mxConstants.NS_SVG, "g");
    this.canvas.appendChild(this.overlayPane);
    this.decoratorPane = document.createElementNS(mxConstants.NS_SVG,
        "g");
    this.canvas.appendChild(this.decoratorPane);
    var b = document.createElementNS(mxConstants.NS_SVG, "svg");
    b.style.width = "100%";
    b.style.height = "100%";
    b.style.display = "block";
    b.appendChild(this.canvas);
    null != a && (a.appendChild(b), this.updateContainerStyle(a))
};
mxGraphView.prototype.updateContainerStyle = function(a) {
    "static" == mxUtils.getCurrentStyle(a).position && (a.style.position = "relative");
    mxClient.IS_POINTER && (a.style.msTouchAction = "none")
};
mxGraphView.prototype.destroy = function() {
    var a = null != this.canvas ? this.canvas.ownerSVGElement : null;
    null == a && (a = this.canvas);
    null != a && null != a.parentNode && (this.clear(this.currentRoot, !0), mxEvent.removeGestureListeners(document, null, this.moveHandler, this.endHandler), mxEvent.release(this.graph.container), a.parentNode.removeChild(a), this.decoratorPane = this.overlayPane = this.drawPane = this.backgroundPane = this.canvas = this.endHandler = this.moveHandler = null)
};

function mxCurrentRootChange(a, b) {
    this.view = a;
    this.previous = this.root = b;
    this.isUp = null == b;
    if (!this.isUp)
        for (var c = this.view.currentRoot, d = this.view.graph.getModel(); null != c;) {
            if (c == b) {
                this.isUp = !0;
                break
            }
            c = d.getParent(c)
        }
}
mxCurrentRootChange.prototype.execute = function() {
    var a = this.view.currentRoot;
    this.view.currentRoot = this.previous;
    this.previous = a;
    a = this.view.graph.getTranslateForRoot(this.view.currentRoot);
    null != a && (this.view.translate = new mxPoint(-a.x, -a.y));
    this.view.fireEvent(new mxEventObject(this.isUp ? mxEvent.UP : mxEvent.DOWN, "root", this.view.currentRoot, "previous", this.previous));
    this.isUp ? (this.view.clear(this.view.currentRoot, !0), this.view.validate()) : this.view.refresh();
    this.isUp = !this.isUp
};

function mxGraph(a, b, c, d) {
    this.mouseListeners = null;
    this.renderHint = c;
    this.dialect = mxClient.IS_SVG ? mxConstants.DIALECT_SVG : c == mxConstants.RENDERING_HINT_EXACT && mxClient.IS_VML ? mxConstants.DIALECT_VML : c == mxConstants.RENDERING_HINT_FASTEST ? mxConstants.DIALECT_STRICTHTML : c == mxConstants.RENDERING_HINT_FASTER ? mxConstants.DIALECT_PREFERHTML : mxConstants.DIALECT_MIXEDHTML;
    this.model = null != b ? b : new mxGraphModel;
    this.multiplicities = [];
    this.imageBundles = [];
    this.cellRenderer = this.createCellRenderer();
    this.setSelectionModel(this.createSelectionModel());
    this.setStylesheet(null != d ? d : this.createStylesheet());
    this.view = this.createGraphView();
    this.graphModelChangeListener = mxUtils.bind(this, function(a, b) {
        this.graphModelChanged(b.getProperty("edit").changes)
    });
    this.model.addListener(mxEvent.CHANGE, this.graphModelChangeListener);
    this.createHandlers();
    null != a && this.init(a);
    this.view.revalidate()
}
mxLoadResources && mxResources.add(mxClient.basePath + "/resources/graph");
mxGraph.prototype = new mxEventSource;
mxGraph.prototype.constructor = mxGraph;
mxGraph.prototype.EMPTY_ARRAY = [];
mxGraph.prototype.mouseListeners = null;
mxGraph.prototype.isMouseDown = !1;
mxGraph.prototype.model = null;
mxGraph.prototype.view = null;
mxGraph.prototype.stylesheet = null;
mxGraph.prototype.selectionModel = null;
mxGraph.prototype.cellEditor = null;
mxGraph.prototype.cellRenderer = null;
mxGraph.prototype.multiplicities = null;
mxGraph.prototype.renderHint = null;
mxGraph.prototype.dialect = null;
mxGraph.prototype.gridSize = 10;
mxGraph.prototype.gridEnabled = !0;
mxGraph.prototype.portsEnabled = !0;
mxGraph.prototype.nativeDblClickEnabled = !mxClient.IS_QUIRKS && (null == document.documentMode || 10 > document.documentMode);
mxGraph.prototype.doubleTapEnabled = !0;
mxGraph.prototype.doubleTapTimeout = 500;
mxGraph.prototype.doubleTapTolerance = 25;
mxGraph.prototype.lastTouchY = 0;
mxGraph.prototype.lastTouchY = 0;
mxGraph.prototype.lastTouchTime = 0;
mxGraph.prototype.tapAndHoldEnabled = !0;
mxGraph.prototype.tapAndHoldDelay = 500;
mxGraph.prototype.tapAndHoldInProgress = !1;
mxGraph.prototype.tapAndHoldValid = !1;
mxGraph.prototype.initialTouchX = 0;
mxGraph.prototype.initialTouchY = 0;
mxGraph.prototype.tolerance = 4;
mxGraph.prototype.defaultOverlap = 0.5;
mxGraph.prototype.defaultParent = null;
mxGraph.prototype.alternateEdgeStyle = null;
mxGraph.prototype.backgroundImage = null;
mxGraph.prototype.pageVisible = !1;
mxGraph.prototype.pageBreaksVisible = !1;
mxGraph.prototype.pageBreakColor = "gray";
mxGraph.prototype.pageBreakDashed = !0;
mxGraph.prototype.minPageBreakDist = 20;
mxGraph.prototype.preferPageSize = !1;
mxGraph.prototype.pageFormat = mxConstants.PAGE_FORMAT_A4_PORTRAIT;
mxGraph.prototype.pageScale = 1.5;
mxGraph.prototype.enabled = !0;
mxGraph.prototype.escapeEnabled = !0;
mxGraph.prototype.invokesStopCellEditing = !0;
mxGraph.prototype.enterStopsCellEditing = !1;
mxGraph.prototype.useScrollbarsForPanning = !0;
mxGraph.prototype.exportEnabled = !0;
mxGraph.prototype.importEnabled = !0;
mxGraph.prototype.cellsLocked = !1;
mxGraph.prototype.cellsCloneable = !0;
mxGraph.prototype.foldingEnabled = !0;
mxGraph.prototype.cellsEditable = !0;
mxGraph.prototype.cellsDeletable = !0;
mxGraph.prototype.cellsMovable = !0;
mxGraph.prototype.edgeLabelsMovable = !0;
mxGraph.prototype.vertexLabelsMovable = !1;
mxGraph.prototype.dropEnabled = !1;
mxGraph.prototype.splitEnabled = !0;
mxGraph.prototype.cellsResizable = !0;
mxGraph.prototype.cellsBendable = !0;
mxGraph.prototype.cellsSelectable = !0;
mxGraph.prototype.cellsDisconnectable = !0;
mxGraph.prototype.autoSizeCells = !1;
mxGraph.prototype.autoSizeCellsOnAdd = !1;
mxGraph.prototype.autoScroll = !0;
mxGraph.prototype.timerAutoScroll = !1;
mxGraph.prototype.allowAutoPanning = !1;
mxGraph.prototype.ignoreScrollbars = !1;
mxGraph.prototype.autoExtend = !0;
mxGraph.prototype.maximumGraphBounds = null;
mxGraph.prototype.minimumGraphSize = null;
mxGraph.prototype.minimumContainerSize = null;
mxGraph.prototype.maximumContainerSize = null;
mxGraph.prototype.resizeContainer = !1;
mxGraph.prototype.border = 0;
mxGraph.prototype.keepEdgesInForeground = !1;
mxGraph.prototype.keepEdgesInBackground = !1;
mxGraph.prototype.allowNegativeCoordinates = !0;
mxGraph.prototype.constrainChildren = !0;
mxGraph.prototype.constrainChildrenOnResize = !1;
mxGraph.prototype.extendParents = !0;
mxGraph.prototype.extendParentsOnAdd = !0;
mxGraph.prototype.extendParentsOnMove = !1;
mxGraph.prototype.recursiveResize = !1;
mxGraph.prototype.collapseToPreferredSize = !0;
mxGraph.prototype.zoomFactor = 1.2;
mxGraph.prototype.keepSelectionVisibleOnZoom = !1;
mxGraph.prototype.centerZoom = !0;
mxGraph.prototype.resetViewOnRootChange = !0;
mxGraph.prototype.resetEdgesOnResize = !1;
mxGraph.prototype.resetEdgesOnMove = !1;
mxGraph.prototype.resetEdgesOnConnect = !0;
mxGraph.prototype.allowLoops = !1;
mxGraph.prototype.defaultLoopStyle = mxEdgeStyle.Loop;
mxGraph.prototype.multigraph = !0;
mxGraph.prototype.connectableEdges = !1;
mxGraph.prototype.allowDanglingEdges = !0;
mxGraph.prototype.cloneInvalidEdges = !1;
mxGraph.prototype.disconnectOnMove = !0;
mxGraph.prototype.labelsVisible = !0;
mxGraph.prototype.htmlLabels = !1;
mxGraph.prototype.swimlaneSelectionEnabled = !0;
mxGraph.prototype.swimlaneNesting = !0;
mxGraph.prototype.swimlaneIndicatorColorAttribute = mxConstants.STYLE_FILLCOLOR;
mxGraph.prototype.imageBundles = null;
mxGraph.prototype.minFitScale = 0.1;
mxGraph.prototype.maxFitScale = 8;
mxGraph.prototype.panDx = 0;
mxGraph.prototype.panDy = 0;
mxGraph.prototype.collapsedImage = new mxImage(mxClient.imageBasePath + "/collapsed.gif", 9, 9);
mxGraph.prototype.expandedImage = new mxImage(mxClient.imageBasePath + "/expanded.gif", 9, 9);
mxGraph.prototype.warningImage = new mxImage(mxClient.imageBasePath + "/warning" + (mxClient.IS_MAC ? ".png" : ".gif"), 16, 16);
mxGraph.prototype.alreadyConnectedResource = "none" != mxClient.language ? "alreadyConnected" : "";
mxGraph.prototype.containsValidationErrorsResource = "none" != mxClient.language ? "containsValidationErrors" : "";
mxGraph.prototype.collapseExpandResource = "none" != mxClient.language ? "collapse-expand" : "";
mxGraph.prototype.init = function(a) {
    this.container = a;
    this.cellEditor = this.createCellEditor();
    this.view.init();
    this.sizeDidChange();
    mxEvent.addListener(a, "mouseleave", mxUtils.bind(this, function() {
        null != this.tooltipHandler && this.tooltipHandler.hide()
    }));
    mxClient.IS_IE && (mxEvent.addListener(window, "unload", mxUtils.bind(this, function() {
        this.destroy()
    })), mxEvent.addListener(a, "selectstart", mxUtils.bind(this, function(a) {
        return this.isEditing() || !this.isMouseDown && !mxEvent.isShiftDown(a)
    })));
    8 == document.documentMode &&
        a.insertAdjacentHTML("beforeend", '<v:group style="DISPLAY: none;"></v:group>')
};
mxGraph.prototype.createHandlers = function(a) {
    this.tooltipHandler = new mxTooltipHandler(this);
    this.tooltipHandler.setEnabled(!1);
    this.selectionCellsHandler = new mxSelectionCellsHandler(this);
    this.connectionHandler = new mxConnectionHandler(this);
    this.connectionHandler.setEnabled(!1);
    this.graphHandler = new mxGraphHandler(this);
    this.panningHandler = new mxPanningHandler(this);
    this.panningHandler.panningEnabled = !1;
    this.popupMenuHandler = new mxPopupMenuHandler(this)
};
mxGraph.prototype.createSelectionModel = function() {
    return new mxGraphSelectionModel(this)
};
mxGraph.prototype.createStylesheet = function() {
    return new mxStylesheet
};
mxGraph.prototype.createGraphView = function() {
    return new mxGraphView(this)
};
mxGraph.prototype.createCellRenderer = function() {
    return new mxCellRenderer
};
mxGraph.prototype.createCellEditor = function() {
    return new mxCellEditor(this)
};
mxGraph.prototype.getModel = function() {
    return this.model
};
mxGraph.prototype.getView = function() {
    return this.view
};
mxGraph.prototype.getStylesheet = function() {
    return this.stylesheet
};
mxGraph.prototype.setStylesheet = function(a) {
    this.stylesheet = a
};
mxGraph.prototype.getSelectionModel = function() {
    return this.selectionModel
};
mxGraph.prototype.setSelectionModel = function(a) {
    this.selectionModel = a
};
mxGraph.prototype.getSelectionCellsForChanges = function(a) {
    for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        if (d.constructor != mxRootChange) {
            var e = null;
            d instanceof mxChildChange && null == d.previous ? e = d.child : null != d.cell && d.cell instanceof mxCell && (e = d.cell);
            null != e && 0 > mxUtils.indexOf(b, e) && b.push(e)
        }
    }
    return this.getModel().getTopmostCells(b)
};
mxGraph.prototype.graphModelChanged = function(a) {
    for (var b = 0; b < a.length; b++) this.processChange(a[b]);
    this.removeSelectionCells(this.getRemovedCellsForChanges(a));
    this.view.validate();
    this.sizeDidChange()
};
mxGraph.prototype.getRemovedCellsForChanges = function(a) {
    for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        if (d instanceof mxRootChange) break;
        else d instanceof mxChildChange ? null != d.previous && null == d.parent && (b = b.concat(this.model.getDescendants(d.child))) : d instanceof mxVisibleChange && (b = b.concat(this.model.getDescendants(d.cell)))
    }
    return b
};
mxGraph.prototype.processChange = function(a) {
    if (a instanceof mxRootChange) this.clearSelection(), this.removeStateForCell(a.previous), this.resetViewOnRootChange && (this.view.scale = 1, this.view.translate.x = 0, this.view.translate.y = 0), this.fireEvent(new mxEventObject(mxEvent.ROOT));
    else if (a instanceof mxChildChange) {
        var b = this.model.getParent(a.child);
        this.view.invalidate(a.child, !0, !0);
        if (null == b || this.isCellCollapsed(b)) this.view.invalidate(a.child, !0, !0), this.removeStateForCell(a.child), this.view.currentRoot ==
            a.child && this.home();
        b != a.previous && (null != b && this.view.invalidate(b, !1, !1), null != a.previous && this.view.invalidate(a.previous, !1, !1))
    } else a instanceof mxTerminalChange || a instanceof mxGeometryChange ? (a instanceof mxTerminalChange || null == a.previous && null != a.geometry || null != a.previous && !a.previous.equals(a.geometry)) && this.view.invalidate(a.cell) : a instanceof mxValueChange ? this.view.invalidate(a.cell, !1, !1) : a instanceof mxStyleChange ? (this.view.invalidate(a.cell, !0, !0), this.view.removeState(a.cell)) :
        null != a.cell && a.cell instanceof mxCell && this.removeStateForCell(a.cell)
};
mxGraph.prototype.removeStateForCell = function(a) {
    for (var b = this.model.getChildCount(a), c = 0; c < b; c++) this.removeStateForCell(this.model.getChildAt(a, c));
    this.view.invalidate(a, !1, !0);
    this.view.removeState(a)
};
mxGraph.prototype.addCellOverlay = function(a, b) {
    null == a.overlays && (a.overlays = []);
    a.overlays.push(b);
    var c = this.view.getState(a);
    null != c && this.cellRenderer.redraw(c);
    this.fireEvent(new mxEventObject(mxEvent.ADD_OVERLAY, "cell", a, "overlay", b));
    return b
};
mxGraph.prototype.getCellOverlays = function(a) {
    return a.overlays
};
mxGraph.prototype.removeCellOverlay = function(a, b) {
    if (null == b) this.removeCellOverlays(a);
    else {
        var c = mxUtils.indexOf(a.overlays, b);
        0 <= c ? (a.overlays.splice(c, 1), 0 == a.overlays.length && (a.overlays = null), c = this.view.getState(a), null != c && this.cellRenderer.redraw(c), this.fireEvent(new mxEventObject(mxEvent.REMOVE_OVERLAY, "cell", a, "overlay", b))) : b = null
    }
    return b
};
mxGraph.prototype.removeCellOverlays = function(a) {
    var b = a.overlays;
    if (null != b) {
        a.overlays = null;
        var c = this.view.getState(a);
        null != c && this.cellRenderer.redraw(c);
        for (c = 0; c < b.length; c++) this.fireEvent(new mxEventObject(mxEvent.REMOVE_OVERLAY, "cell", a, "overlay", b[c]))
    }
    return b
};
mxGraph.prototype.clearCellOverlays = function(a) {
    a = null != a ? a : this.model.getRoot();
    this.removeCellOverlays(a);
    for (var b = this.model.getChildCount(a), c = 0; c < b; c++) {
        var d = this.model.getChildAt(a, c);
        this.clearCellOverlays(d)
    }
};
mxGraph.prototype.setCellWarning = function(a, b, c, d) {
    if (null != b && 0 < b.length) return c = null != c ? c : this.warningImage, b = new mxCellOverlay(c, "<font color=red>" + b + "</font>"), d && b.addListener(mxEvent.CLICK, mxUtils.bind(this, function(b, c) {
        this.isEnabled() && this.setSelectionCell(a)
    })), this.addCellOverlay(a, b);
    this.removeCellOverlays(a);
    return null
};
mxGraph.prototype.startEditing = function(a) {
    this.startEditingAtCell(null, a)
};
mxGraph.prototype.startEditingAtCell = function(a, b) {
    if (null == b || !mxEvent.isMultiTouchEvent(b)) null == a && (a = this.getSelectionCell(), null != a && !this.isCellEditable(a) && (a = null)), null != a && (this.fireEvent(new mxEventObject(mxEvent.START_EDITING, "cell", a, "event", b)), this.cellEditor.startEditing(a, b))
};
mxGraph.prototype.getEditingValue = function(a, b) {
    return this.convertValueToString(a)
};
mxGraph.prototype.stopEditing = function(a) {
    this.cellEditor.stopEditing(a)
};
mxGraph.prototype.labelChanged = function(a, b, c) {
    this.model.beginUpdate();
    try {
        var d = a.value;
        this.cellLabelChanged(a, b, this.isAutoSizeCell(a));
        this.fireEvent(new mxEventObject(mxEvent.LABEL_CHANGED, "cell", a, "value", b, "old", d, "event", c))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellLabelChanged = function(a, b, c) {
    this.model.beginUpdate();
    try {
        this.model.setValue(a, b), c && this.cellSizeUpdated(a, !1)
    } finally {
        this.model.endUpdate()
    }
};
mxGraph.prototype.escape = function(a) {
    this.fireEvent(new mxEventObject(mxEvent.ESCAPE, "event", a))
};
mxGraph.prototype.click = function(a) {
    var b = a.getEvent(),
        c = a.getCell(),
        d = new mxEventObject(mxEvent.CLICK, "event", b, "cell", c);
    a.isConsumed() && d.consume();
    this.fireEvent(d);
    this.isEnabled() && (!mxEvent.isConsumed(b) && !d.isConsumed()) && (null != c ? this.selectCellForEvent(c, b) : (c = null, this.isSwimlaneSelectionEnabled() && (c = this.getSwimlaneAt(a.getGraphX(), a.getGraphY())), null != c ? this.selectCellForEvent(c, b) : this.isToggleEvent(b) || this.clearSelection()))
};
mxGraph.prototype.dblClick = function(a, b) {
    var c = new mxEventObject(mxEvent.DOUBLE_CLICK, "event", a, "cell", b);
    this.fireEvent(c);
    this.isEnabled() && (!mxEvent.isConsumed(a) && !c.isConsumed() && null != b && this.isCellEditable(b) && !this.isEditing(b)) && (this.startEditingAtCell(b, a), mxEvent.consume(a))
};
mxGraph.prototype.tapAndHold = function(a) {
    var b = a.getEvent(),
        c = new mxEventObject(mxEvent.TAP_AND_HOLD, "event", b, "cell", a.getCell());
    this.fireEvent(c);
    c.isConsumed() && (this.panningHandler.panningTrigger = !1);
    this.isEnabled() && (!mxEvent.isConsumed(b) && !c.isConsumed() && this.connectionHandler.isEnabled()) && (b = this.view.getState(this.connectionHandler.marker.getCell(a)), null != b && (this.connectionHandler.marker.currentColor = this.connectionHandler.marker.validColor, this.connectionHandler.marker.markedState =
        b, this.connectionHandler.marker.mark(), this.connectionHandler.first = new mxPoint(a.getGraphX(), a.getGraphY()), this.connectionHandler.edgeState = this.connectionHandler.createEdgeState(a), this.connectionHandler.previous = b, this.connectionHandler.fireEvent(new mxEventObject(mxEvent.START, "state", this.connectionHandler.previous))))
};
mxGraph.prototype.scrollPointToVisible = function(a, b, c, d) {
    if (!this.timerAutoScroll && (this.ignoreScrollbars || mxUtils.hasScrollbars(this.container))) {
        var e = this.container;
        d = null != d ? d : 20;
        if (a >= e.scrollLeft && b >= e.scrollTop && a <= e.scrollLeft + e.clientWidth && b <= e.scrollTop + e.clientHeight) {
            var f = e.scrollLeft + e.clientWidth - a;
            if (f < d) {
                if (a = e.scrollLeft, e.scrollLeft += d - f, c && a == e.scrollLeft) {
                    if (this.dialect == mxConstants.DIALECT_SVG) {
                        a = this.view.getDrawPane().ownerSVGElement;
                        var g = this.container.scrollWidth + d - f
                    } else g =
                        Math.max(e.clientWidth, e.scrollWidth) + d - f, a = this.view.getCanvas();
                    a.style.width = g + "px";
                    e.scrollLeft += d - f
                }
            } else f = a - e.scrollLeft, f < d && (e.scrollLeft -= d - f);
            f = e.scrollTop + e.clientHeight - b;
            f < d ? (a = e.scrollTop, e.scrollTop += d - f, a == e.scrollTop && c && (this.dialect == mxConstants.DIALECT_SVG ? (a = this.view.getDrawPane().ownerSVGElement, b = this.container.scrollHeight + d - f) : (b = Math.max(e.clientHeight, e.scrollHeight) + d - f, a = this.view.getCanvas()), a.style.height = b + "px", e.scrollTop += d - f)) : (f = b - e.scrollTop, f < d && (e.scrollTop -=
                d - f))
        }
    } else this.allowAutoPanning && !this.panningHandler.isActive() && (null == this.panningManager && (this.panningManager = this.createPanningManager()), this.panningManager.panTo(a + this.panDx, b + this.panDy))
};
mxGraph.prototype.createPanningManager = function() {
    return new mxPanningManager(this)
};
mxGraph.prototype.getBorderSizes = function() {
    function a(a) {
        var b = 0,
            b = "thin" == a ? 2 : "medium" == a ? 4 : "thick" == a ? 6 : parseInt(a);
        isNaN(b) && (b = 0);
        return b
    }
    var b = mxUtils.getCurrentStyle(this.container),
        c = new mxRectangle;
    c.x = a(b.borderLeftWidth) + parseInt(b.paddingLeft || 0);
    c.y = a(b.borderTopWidth) + parseInt(b.paddingTop || 0);
    c.width = a(b.borderRightWidth) + parseInt(b.paddingRight || 0);
    c.height = a(b.borderBottomWidth) + parseInt(b.paddingBottom || 0);
    return c
};
mxGraph.prototype.getPreferredPageSize = function(a, b, c) {
    a = this.view.scale;
    var d = this.view.translate,
        e = this.pageFormat,
        f = a * this.pageScale,
        e = new mxRectangle(0, 0, e.width * f, e.height * f);
    b = this.pageBreaksVisible ? Math.ceil(b / e.width) : 1;
    c = this.pageBreaksVisible ? Math.ceil(c / e.height) : 1;
    return new mxRectangle(0, 0, b * e.width + 2 + d.x / a, c * e.height + 2 + d.y / a)
};
mxGraph.prototype.sizeDidChange = function() {
    var a = this.getGraphBounds();
    if (null != this.container) {
        var b = this.getBorder(),
            c = Math.max(0, a.x + a.width + 1 + b),
            b = Math.max(0, a.y + a.height + 1 + b);
        null != this.minimumContainerSize && (c = Math.max(c, this.minimumContainerSize.width), b = Math.max(b, this.minimumContainerSize.height));
        this.resizeContainer && this.doResizeContainer(c, b);
        if (this.preferPageSize || !mxClient.IS_IE && this.pageVisible) {
            var d = this.getPreferredPageSize(a, c, b);
            null != d && (c = d.width, b = d.height)
        }
        null != this.minimumGraphSize &&
            (c = Math.max(c, this.minimumGraphSize.width * this.view.scale), b = Math.max(b, this.minimumGraphSize.height * this.view.scale));
        c = Math.ceil(c - 1);
        b = Math.ceil(b - 1);
        this.dialect == mxConstants.DIALECT_SVG ? (d = this.view.getDrawPane().ownerSVGElement, d.style.minWidth = Math.max(1, c) + "px", d.style.minHeight = Math.max(1, b) + "px", d.style.width = "100%", d.style.height = "100%") : mxClient.IS_QUIRKS ? this.view.updateHtmlCanvasSize(Math.max(1, c), Math.max(1, b)) : (this.view.canvas.style.minWidth = Math.max(1, c) + "px", this.view.canvas.style.minHeight =
            Math.max(1, b) + "px");
        this.updatePageBreaks(this.pageBreaksVisible, c - 1, b - 1)
    }
    this.fireEvent(new mxEventObject(mxEvent.SIZE, "bounds", a))
};
mxGraph.prototype.doResizeContainer = function(a, b) {
    if (mxClient.IS_IE)
        if (mxClient.IS_QUIRKS) {
            var c = this.getBorderSizes();
            a += Math.max(2, c.x + c.width + 1);
            b += Math.max(2, c.y + c.height + 1)
        } else 9 <= document.documentMode ? (a += 3, b += 5) : (a += 1, b += 1);
    else b += 1;
    null != this.maximumContainerSize && (a = Math.min(this.maximumContainerSize.width, a), b = Math.min(this.maximumContainerSize.height, b));
    this.container.style.width = Math.ceil(a) + "px";
    this.container.style.height = Math.ceil(b) + "px"
};
mxGraph.prototype.updatePageBreaks = function(a, b, c) {
    var d = this.view.scale,
        e = this.view.translate,
        f = this.pageFormat,
        g = d * this.pageScale,
        d = new mxRectangle(d * e.x, d * e.y, f.width * g, f.height * g);
    a = a && Math.min(d.width, d.height) > this.minPageBreakDist;
    d.x = mxUtils.mod(d.x, d.width);
    d.y = mxUtils.mod(d.y, d.height);
    e = a ? Math.ceil((b - d.x) / d.width) : 0;
    a = a ? Math.ceil((c - d.y) / d.height) : 0;
    null == this.horizontalPageBreaks && 0 < e && (this.horizontalPageBreaks = []);
    if (null != this.horizontalPageBreaks) {
        for (f = 0; f <= e; f++) g = [new mxPoint(d.x +
            f * d.width, 1), new mxPoint(d.x + f * d.width, c)], null != this.horizontalPageBreaks[f] ? (this.horizontalPageBreaks[f].points = g, this.horizontalPageBreaks[f].redraw()) : (g = new mxPolyline(g, this.pageBreakColor), g.dialect = this.dialect, g.pointerEvents = !1, g.isDashed = this.pageBreakDashed, g.init(this.view.backgroundPane), g.redraw(), this.horizontalPageBreaks[f] = g);
        for (f = e; f < this.horizontalPageBreaks.length; f++) this.horizontalPageBreaks[f].destroy();
        this.horizontalPageBreaks.splice(e, this.horizontalPageBreaks.length -
            e)
    }
    null == this.verticalPageBreaks && 0 < a && (this.verticalPageBreaks = []);
    if (null != this.verticalPageBreaks) {
        for (f = 0; f <= a; f++) g = [new mxPoint(1, d.y + f * d.height), new mxPoint(b, d.y + f * d.height)], null != this.verticalPageBreaks[f] ? (this.verticalPageBreaks[f].points = g, this.verticalPageBreaks[f].redraw()) : (g = new mxPolyline(g, this.pageBreakColor), g.dialect = this.dialect, g.pointerEvents = !1, g.isDashed = this.pageBreakDashed, g.init(this.view.backgroundPane), g.redraw(), this.verticalPageBreaks[f] = g);
        for (f = a; f < this.verticalPageBreaks.length; f++) this.verticalPageBreaks[f].destroy();
        this.verticalPageBreaks.splice(a, this.verticalPageBreaks.length - a)
    }
};
mxGraph.prototype.getCellStyle = function(a) {
    var b = this.model.getStyle(a),
        c = null,
        c = this.model.isEdge(a) ? this.stylesheet.getDefaultEdgeStyle() : this.stylesheet.getDefaultVertexStyle();
    null != b && (c = this.postProcessCellStyle(this.stylesheet.getCellStyle(b, c)));
    null == c && (c = mxGraph.prototype.EMPTY_ARRAY);
    return c
};
mxGraph.prototype.postProcessCellStyle = function(a) {
    if (null != a) {
        var b = a[mxConstants.STYLE_IMAGE],
            c = this.getImageFromBundles(b);
        null != c ? a[mxConstants.STYLE_IMAGE] = c : c = b;
        null != c && "data:image/" == c.substring(0, 11) && ("data:image/svg+xml,<" == c.substring(0, 20) ? c = c.substring(0, 19) + encodeURIComponent(c.substring(19)) : "data:image/svg+xml,%3C" != c.substring(0, 22) && (b = c.indexOf(","), 0 < b && (c = c.substring(0, b) + ";base64," + c.substring(b + 1))), a[mxConstants.STYLE_IMAGE] = c)
    }
    return a
};
mxGraph.prototype.setCellStyle = function(a, b) {
    b = b || this.getSelectionCells();
    if (null != b) {
        this.model.beginUpdate();
        try {
            for (var c = 0; c < b.length; c++) this.model.setStyle(b[c], a)
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.toggleCellStyle = function(a, b, c) {
    c = c || this.getSelectionCell();
    this.toggleCellStyles(a, b, [c])
};
mxGraph.prototype.toggleCellStyles = function(a, b, c) {
    b = null != b ? b : !1;
    c = c || this.getSelectionCells();
    if (null != c && 0 < c.length) {
        var d = this.view.getState(c[0]),
            d = null != d ? d.style : this.getCellStyle(c[0]);
        null != d && (b = mxUtils.getValue(d, a, b) ? 0 : 1, this.setCellStyles(a, b, c))
    }
};
mxGraph.prototype.setCellStyles = function(a, b, c) {
    c = c || this.getSelectionCells();
    mxUtils.setCellStyles(this.model, c, a, b)
};
mxGraph.prototype.toggleCellStyleFlags = function(a, b, c) {
    this.setCellStyleFlags(a, b, null, c)
};
mxGraph.prototype.setCellStyleFlags = function(a, b, c, d) {
    d = d || this.getSelectionCells();
    if (null != d && 0 < d.length) {
        if (null == c) {
            var e = this.view.getState(d[0]),
                e = null != e ? e.style : this.getCellStyle(d[0]);
            null != e && (c = (parseInt(e[a] || 0) & b) != b)
        }
        mxUtils.setCellStyleFlags(this.model, d, a, b, c)
    }
};
mxGraph.prototype.alignCells = function(a, b, c) {
    null == b && (b = this.getSelectionCells());
    if (null != b && 1 < b.length) {
        if (null == c)
            for (var d = 0; d < b.length; d++) {
                var e = this.view.getState(b[d]);
                if (null != e && !this.model.isEdge(b[d]))
                    if (null == c)
                        if (a == mxConstants.ALIGN_CENTER) {
                            c = e.x + e.width / 2;
                            break
                        } else if (a == mxConstants.ALIGN_RIGHT) c = e.x + e.width;
                else if (a == mxConstants.ALIGN_TOP) c = e.y;
                else if (a == mxConstants.ALIGN_MIDDLE) {
                    c = e.y + e.height / 2;
                    break
                } else c = a == mxConstants.ALIGN_BOTTOM ? e.y + e.height : e.x;
                else c = a == mxConstants.ALIGN_RIGHT ?
                    Math.max(c, e.x + e.width) : a == mxConstants.ALIGN_TOP ? Math.min(c, e.y) : a == mxConstants.ALIGN_BOTTOM ? Math.max(c, e.y + e.height) : Math.min(c, e.x)
            }
        if (null != c) {
            var f = this.view.scale;
            this.model.beginUpdate();
            try {
                for (d = 0; d < b.length; d++)
                    if (e = this.view.getState(b[d]), null != e) {
                        var g = this.getCellGeometry(b[d]);
                        null != g && !this.model.isEdge(b[d]) && (g = g.clone(), a == mxConstants.ALIGN_CENTER ? g.x += (c - e.x - e.width / 2) / f : a == mxConstants.ALIGN_RIGHT ? g.x += (c - e.x - e.width) / f : a == mxConstants.ALIGN_TOP ? g.y += (c - e.y) / f : a == mxConstants.ALIGN_MIDDLE ?
                            g.y += (c - e.y - e.height / 2) / f : a == mxConstants.ALIGN_BOTTOM ? g.y += (c - e.y - e.height) / f : g.x += (c - e.x) / f, this.resizeCell(b[d], g))
                    }
                this.fireEvent(new mxEventObject(mxEvent.ALIGN_CELLS, "align", a, "cells", b))
            } finally {
                this.model.endUpdate()
            }
        }
    }
    return b
};
mxGraph.prototype.flipEdge = function(a) {
    if (null != a && null != this.alternateEdgeStyle) {
        this.model.beginUpdate();
        try {
            var b = this.model.getStyle(a);
            null == b || 0 == b.length ? this.model.setStyle(a, this.alternateEdgeStyle) : this.model.setStyle(a, null);
            this.resetEdge(a);
            this.fireEvent(new mxEventObject(mxEvent.FLIP_EDGE, "edge", a))
        } finally {
            this.model.endUpdate()
        }
    }
    return a
};
mxGraph.prototype.addImageBundle = function(a) {
    this.imageBundles.push(a)
};
mxGraph.prototype.removeImageBundle = function(a) {
    for (var b = [], c = 0; c < this.imageBundles.length; c++) this.imageBundles[c] != a && b.push(this.imageBundles[c]);
    this.imageBundles = b
};
mxGraph.prototype.getImageFromBundles = function(a) {
    if (null != a)
        for (var b = 0; b < this.imageBundles.length; b++) {
            var c = this.imageBundles[b].getImage(a);
            if (null != c) return c
        }
    return null
};
mxGraph.prototype.orderCells = function(a, b) {
    null == b && (b = mxUtils.sortCells(this.getSelectionCells(), !0));
    this.model.beginUpdate();
    try {
        this.cellsOrdered(b, a), this.fireEvent(new mxEventObject(mxEvent.ORDER_CELLS, "back", a, "cells", b))
    } finally {
        this.model.endUpdate()
    }
    return b
};
mxGraph.prototype.cellsOrdered = function(a, b) {
    if (null != a) {
        this.model.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++) {
                var d = this.model.getParent(a[c]);
                b ? this.model.add(d, a[c], c) : this.model.add(d, a[c], this.model.getChildCount(d) - 1)
            }
            this.fireEvent(new mxEventObject(mxEvent.CELLS_ORDERED, "back", b, "cells", a))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.groupCells = function(a, b, c) {
    null == c && (c = mxUtils.sortCells(this.getSelectionCells(), !0));
    c = this.getCellsForGroup(c);
    null == a && (a = this.createGroupCell(c));
    var d = this.getBoundsForGroup(a, c, b);
    if (0 < c.length && null != d) {
        var e = this.model.getParent(a);
        null == e && (e = this.model.getParent(c[0]));
        this.model.beginUpdate();
        try {
            null == this.getCellGeometry(a) && this.model.setGeometry(a, new mxGeometry);
            var f = this.model.getChildCount(e);
            this.cellsAdded([a], e, f, null, null, !1);
            f = this.model.getChildCount(a);
            this.cellsAdded(c, a, f, null, null, !1, !1);
            this.cellsMoved(c, -d.x, -d.y, !1, !0);
            this.cellsResized([a], [d], !1);
            this.fireEvent(new mxEventObject(mxEvent.GROUP_CELLS, "group", a, "border", b, "cells", c))
        } finally {
            this.model.endUpdate()
        }
    }
    return a
};
mxGraph.prototype.getCellsForGroup = function(a) {
    var b = [];
    if (null != a && 0 < a.length) {
        var c = this.model.getParent(a[0]);
        b.push(a[0]);
        for (var d = 1; d < a.length; d++) this.model.getParent(a[d]) == c && b.push(a[d])
    }
    return b
};
mxGraph.prototype.getBoundsForGroup = function(a, b, c) {
    b = this.getBoundingBoxFromGeometry(b);
    null != b && (this.isSwimlane(a) && (a = this.getStartSize(a), b.x -= a.width, b.y -= a.height, b.width += a.width, b.height += a.height), b.x -= c, b.y -= c, b.width += 2 * c, b.height += 2 * c);
    return b
};
mxGraph.prototype.createGroupCell = function(a) {
    a = new mxCell("");
    a.setVertex(!0);
    a.setConnectable(!1);
    return a
};
mxGraph.prototype.ungroupCells = function(a) {
    var b = [];
    if (null == a) {
        a = this.getSelectionCells();
        for (var c = [], d = 0; d < a.length; d++) 0 < this.model.getChildCount(a[d]) && c.push(a[d]);
        a = c
    }
    if (null != a && 0 < a.length) {
        this.model.beginUpdate();
        try {
            for (d = 0; d < a.length; d++) {
                var e = this.model.getChildren(a[d]);
                if (null != e && 0 < e.length) {
                    var e = e.slice(),
                        f = this.model.getParent(a[d]),
                        g = this.model.getChildCount(f);
                    this.cellsAdded(e, f, g, null, null, !0);
                    b = b.concat(e)
                }
            }
            this.cellsRemoved(this.addAllEdges(a));
            this.fireEvent(new mxEventObject(mxEvent.UNGROUP_CELLS,
                "cells", a))
        } finally {
            this.model.endUpdate()
        }
    }
    return b
};
mxGraph.prototype.removeCellsFromParent = function(a) {
    null == a && (a = this.getSelectionCells());
    this.model.beginUpdate();
    try {
        var b = this.getDefaultParent(),
            c = this.model.getChildCount(b);
        this.cellsAdded(a, b, c, null, null, !0);
        this.fireEvent(new mxEventObject(mxEvent.REMOVE_CELLS_FROM_PARENT, "cells", a))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.updateGroupBounds = function(a, b, c) {
    null == a && (a = this.getSelectionCells());
    b = null != b ? b : 0;
    c = null != c ? c : !1;
    this.model.beginUpdate();
    try {
        for (var d = 0; d < a.length; d++) {
            var e = this.getCellGeometry(a[d]);
            if (null != e) {
                var f = this.getChildCells(a[d]);
                if (null != f && 0 < f.length) {
                    var g = this.getBoundingBoxFromGeometry(f);
                    if (0 < g.width && 0 < g.height) {
                        var k = this.isSwimlane(a[d]) ? this.getStartSize(a[d]) : new mxRectangle,
                            e = e.clone();
                        c && (e.x += g.x - k.width - b, e.y += g.y - k.height - b);
                        e.width = g.width + k.width + 2 * b;
                        e.height =
                            g.height + k.height + 2 * b;
                        this.model.setGeometry(a[d], e);
                        this.moveCells(f, -g.x + k.width + b, -g.y + k.height + b)
                    }
                }
            }
        }
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cloneCells = function(a, b) {
    b = null != b ? b : !0;
    var c = null;
    if (null != a) {
        for (var d = {}, c = [], e = 0; e < a.length; e++) {
            var f = mxCellPath.create(a[e]);
            d[f] = a[e];
            c.push(a[e])
        }
        if (0 < c.length)
            for (var f = this.view.scale, g = this.view.translate, c = this.model.cloneCells(a, !0), e = 0; e < a.length; e++)
                if (!b && this.model.isEdge(c[e]) && null != this.getEdgeValidationError(c[e], this.model.getTerminal(c[e], !0), this.model.getTerminal(c[e], !1))) c[e] = null;
                else {
                    var k = this.model.getGeometry(c[e]);
                    if (null != k) {
                        var l = this.view.getState(a[e]),
                            m = this.view.getState(this.model.getParent(a[e]));
                        if (null != l && null != m) {
                            var n = m.origin.x,
                                m = m.origin.y;
                            if (this.model.isEdge(c[e])) {
                                for (var l = l.absolutePoints, p = this.model.getTerminal(a[e], !0), q = mxCellPath.create(p); null != p && null == d[q];) p = this.model.getParent(p), q = mxCellPath.create(p);
                                null == p && k.setTerminalPoint(new mxPoint(l[0].x / f - g.x, l[0].y / f - g.y), !0);
                                p = this.model.getTerminal(a[e], !1);
                                for (q = mxCellPath.create(p); null != p && null == d[q];) p = this.model.getParent(p), q = mxCellPath.create(p);
                                null == p && (p = l.length -
                                    1, k.setTerminalPoint(new mxPoint(l[p].x / f - g.x, l[p].y / f - g.y), !1));
                                k = k.points;
                                if (null != k)
                                    for (l = 0; l < k.length; l++) k[l].x += n, k[l].y += m
                            } else k.x += n, k.y += m
                        }
                    }
                } else c = []
    }
    return c
};
mxGraph.prototype.insertVertex = function(a, b, c, d, e, f, g, k, l) {
    b = this.createVertex(a, b, c, d, e, f, g, k, l);
    return this.addCell(b, a)
};
mxGraph.prototype.createVertex = function(a, b, c, d, e, f, g, k, l) {
    a = new mxGeometry(d, e, f, g);
    a.relative = null != l ? l : !1;
    c = new mxCell(c, a, k);
    c.setId(b);
    c.setVertex(!0);
    c.setConnectable(!0);
    return c
};
mxGraph.prototype.insertEdge = function(a, b, c, d, e, f) {
    b = this.createEdge(a, b, c, d, e, f);
    return this.addEdge(b, a, d, e)
};
mxGraph.prototype.createEdge = function(a, b, c, d, e, f) {
    a = new mxCell(c, new mxGeometry, f);
    a.setId(b);
    a.setEdge(!0);
    a.geometry.relative = !0;
    return a
};
mxGraph.prototype.addEdge = function(a, b, c, d, e) {
    return this.addCell(a, b, e, c, d)
};
mxGraph.prototype.addCell = function(a, b, c, d, e) {
    return this.addCells([a], b, c, d, e)[0]
};
mxGraph.prototype.addCells = function(a, b, c, d, e) {
    null == b && (b = this.getDefaultParent());
    null == c && (c = this.model.getChildCount(b));
    this.model.beginUpdate();
    try {
        this.cellsAdded(a, b, c, d, e, !1, !0), this.fireEvent(new mxEventObject(mxEvent.ADD_CELLS, "cells", a, "parent", b, "index", c, "source", d, "target", e))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellsAdded = function(a, b, c, d, e, f, g) {
    if (null != a && null != b && null != c) {
        this.model.beginUpdate();
        try {
            for (var k = f ? this.view.getState(b) : null, l = null != k ? k.origin : null, m = new mxPoint(0, 0), k = 0; k < a.length; k++)
                if (null == a[k]) c--;
                else {
                    var n = this.model.getParent(a[k]);
                    if (null != l && a[k] != b && b != n) {
                        var p = this.view.getState(n),
                            q = null != p ? p.origin : m,
                            r = this.model.getGeometry(a[k]);
                        if (null != r) {
                            var s = q.x - l.x,
                                t = q.y - l.y,
                                r = r.clone();
                            r.translate(s, t);
                            !r.relative && (this.model.isVertex(a[k]) && !this.isAllowNegativeCoordinates()) &&
                                (r.x = Math.max(0, r.x), r.y = Math.max(0, r.y));
                            this.model.setGeometry(a[k], r)
                        }
                    }
                    b == n && c + k > this.model.getChildCount(b) && c--;
                    this.model.add(b, a[k], c + k);
                    this.autoSizeCellsOnAdd && this.autoSizeCell(a[k], !0);
                    this.isExtendParentsOnAdd() && this.isExtendParent(a[k]) && this.extendParent(a[k]);
                    (null == g || g) && this.constrainChild(a[k]);
                    null != d && this.cellConnected(a[k], d, !0);
                    null != e && this.cellConnected(a[k], e, !1)
                }
            this.fireEvent(new mxEventObject(mxEvent.CELLS_ADDED, "cells", a, "parent", b, "index", c, "source", d, "target", e, "absolute",
                f))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.autoSizeCell = function(a, b) {
    if (null != b ? b : 1)
        for (var c = this.model.getChildCount(a), d = 0; d < c; d++) this.autoSizeCell(this.model.getChildAt(a, d));
    this.getModel().isVertex(a) && this.isAutoSizeCell(a) && this.updateCellSize(a)
};
mxGraph.prototype.removeCells = function(a, b) {
    b = null != b ? b : !0;
    null == a && (a = this.getDeletableCells(this.getSelectionCells()));
    b && (a = this.getDeletableCells(this.addAllEdges(a)));
    this.model.beginUpdate();
    try {
        this.cellsRemoved(a), this.fireEvent(new mxEventObject(mxEvent.REMOVE_CELLS, "cells", a, "includeEdges", b))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellsRemoved = function(a) {
    if (null != a && 0 < a.length) {
        var b = this.view.scale,
            c = this.view.translate;
        this.model.beginUpdate();
        try {
            for (var d = {}, e = 0; e < a.length; e++) {
                var f = mxCellPath.create(a[e]);
                d[f] = a[e]
            }
            for (e = 0; e < a.length; e++) {
                for (var g = this.getConnections(a[e]), k = 0; k < g.length; k++)
                    if (f = mxCellPath.create(g[k]), null == d[f]) {
                        var l = this.model.getGeometry(g[k]);
                        if (null != l) {
                            var m = this.view.getState(g[k]);
                            if (null != m) {
                                var l = l.clone(),
                                    n = m.getVisibleTerminal(!0) == a[e],
                                    p = m.absolutePoints,
                                    q = n ? 0 : p.length -
                                    1;
                                l.setTerminalPoint(new mxPoint(p[q].x / b - c.x, p[q].y / b - c.y), n);
                                this.model.setTerminal(g[k], null, n);
                                this.model.setGeometry(g[k], l)
                            }
                        }
                    }
                this.model.remove(a[e])
            }
            this.fireEvent(new mxEventObject(mxEvent.CELLS_REMOVED, "cells", a))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.splitEdge = function(a, b, c, d, e) {
    d = d || 0;
    e = e || 0;
    null == c && (c = this.cloneCells([a])[0]);
    var f = this.model.getParent(a),
        g = this.model.getTerminal(a, !0);
    this.model.beginUpdate();
    try {
        this.cellsMoved(b, d, e, !1, !1), this.cellsAdded(b, f, this.model.getChildCount(f), null, null, !0), this.cellsAdded([c], f, this.model.getChildCount(f), g, b[0], !1), this.cellConnected(a, b[0], !0), this.fireEvent(new mxEventObject(mxEvent.SPLIT_EDGE, "edge", a, "cells", b, "newEdge", c, "dx", d, "dy", e))
    } finally {
        this.model.endUpdate()
    }
    return c
};
mxGraph.prototype.toggleCells = function(a, b, c) {
    null == b && (b = this.getSelectionCells());
    c && (b = this.addAllEdges(b));
    this.model.beginUpdate();
    try {
        this.cellsToggled(b, a), this.fireEvent(new mxEventObject(mxEvent.TOGGLE_CELLS, "show", a, "cells", b, "includeEdges", c))
    } finally {
        this.model.endUpdate()
    }
    return b
};
mxGraph.prototype.cellsToggled = function(a, b) {
    if (null != a && 0 < a.length) {
        this.model.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++) this.model.setVisible(a[c], b)
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.foldCells = function(a, b, c, d) {
    b = null != b ? b : !1;
    null == c && (c = this.getFoldableCells(this.getSelectionCells(), a));
    this.stopEditing(!1);
    this.model.beginUpdate();
    try {
        this.cellsFolded(c, a, b, d), this.fireEvent(new mxEventObject(mxEvent.FOLD_CELLS, "collapse", a, "recurse", b, "cells", c))
    } finally {
        this.model.endUpdate()
    }
    return c
};
mxGraph.prototype.cellsFolded = function(a, b, c, d) {
    if (null != a && 0 < a.length) {
        this.model.beginUpdate();
        try {
            for (var e = 0; e < a.length; e++)
                if ((!d || this.isCellFoldable(a[e], b)) && b != this.isCellCollapsed(a[e]))
                    if (this.model.setCollapsed(a[e], b), this.swapBounds(a[e], b), this.isExtendParent(a[e]) && this.extendParent(a[e]), c) {
                        var f = this.model.getChildren(a[e]);
                        this.foldCells(f, b, c)
                    }
            this.fireEvent(new mxEventObject(mxEvent.CELLS_FOLDED, "cells", a, "collapse", b, "recurse", c))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.swapBounds = function(a, b) {
    if (null != a) {
        var c = this.model.getGeometry(a);
        null != c && (c = c.clone(), this.updateAlternateBounds(a, c, b), c.swap(), this.model.setGeometry(a, c))
    }
};
mxGraph.prototype.updateAlternateBounds = function(a, b, c) {
    if (null != a && null != b) {
        c = this.view.getState(a);
        c = null != c ? c.style : this.getCellStyle(a);
        if (null == b.alternateBounds) {
            var d = b;
            this.collapseToPreferredSize && (a = this.getPreferredSizeForCell(a), null != a && (d = a, a = mxUtils.getValue(c, mxConstants.STYLE_STARTSIZE), 0 < a && (d.height = Math.max(d.height, a))));
            b.alternateBounds = new mxRectangle(0, 0, d.width, d.height)
        }
        if (null != b.alternateBounds) {
            b.alternateBounds.x = b.x;
            b.alternateBounds.y = b.y;
            var e = mxUtils.toRadians(c[mxConstants.STYLE_ROTATION] ||
                0);
            0 != e && (a = b.alternateBounds.getCenterX() - b.getCenterX(), c = b.alternateBounds.getCenterY() - b.getCenterY(), d = Math.cos(e), e = Math.sin(e), b.alternateBounds.x += d * a - e * c - a, b.alternateBounds.y += e * a + d * c - c)
        }
    }
};
mxGraph.prototype.addAllEdges = function(a) {
    var b = a.slice();
    return b = b.concat(this.getAllEdges(a))
};
mxGraph.prototype.getAllEdges = function(a) {
    var b = [];
    if (null != a)
        for (var c = 0; c < a.length; c++) {
            for (var d = this.model.getEdgeCount(a[c]), e = 0; e < d; e++) b.push(this.model.getEdgeAt(a[c], e));
            d = this.model.getChildren(a[c]);
            b = b.concat(this.getAllEdges(d))
        }
    return b
};
mxGraph.prototype.updateCellSize = function(a, b) {
    b = null != b ? b : !1;
    this.model.beginUpdate();
    try {
        this.cellSizeUpdated(a, b), this.fireEvent(new mxEventObject(mxEvent.UPDATE_CELL_SIZE, "cell", a, "ignoreChildren", b))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellSizeUpdated = function(a, b) {
    if (null != a) {
        this.model.beginUpdate();
        try {
            var c = this.getPreferredSizeForCell(a),
                d = this.model.getGeometry(a);
            if (null != c && null != d) {
                var e = this.isCellCollapsed(a),
                    d = d.clone();
                if (this.isSwimlane(a)) {
                    var f = this.view.getState(a),
                        g = null != f ? f.style : this.getCellStyle(a),
                        k = this.model.getStyle(a);
                    null == k && (k = "");
                    mxUtils.getValue(g, mxConstants.STYLE_HORIZONTAL, !0) ? (k = mxUtils.setStyle(k, mxConstants.STYLE_STARTSIZE, c.height + 8), e && (d.height = c.height + 8), d.width = c.width) :
                        (k = mxUtils.setStyle(k, mxConstants.STYLE_STARTSIZE, c.width + 8), e && (d.width = c.width + 8), d.height = c.height);
                    this.model.setStyle(a, k)
                } else d.width = c.width, d.height = c.height; if (!b && !e) {
                    var l = this.view.getBounds(this.model.getChildren(a));
                    if (null != l) {
                        var m = this.view.translate,
                            n = this.view.scale,
                            p = (l.y + l.height) / n - d.y - m.y;
                        d.width = Math.max(d.width, (l.x + l.width) / n - d.x - m.x);
                        d.height = Math.max(d.height, p)
                    }
                }
                this.cellsResized([a], [d], !1)
            }
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.getPreferredSizeForCell = function(a) {
    var b = null;
    if (null != a) {
        var c = this.view.getState(a),
            d = null != c ? c.style : this.getCellStyle(a);
        if (null != d && !this.model.isEdge(a)) {
            var e = d[mxConstants.STYLE_FONTSIZE] || mxConstants.DEFAULT_FONTSIZE,
                f = 0,
                b = 0;
            if ((null != this.getImage(c) || null != d[mxConstants.STYLE_IMAGE]) && d[mxConstants.STYLE_SHAPE] == mxConstants.SHAPE_LABEL) d[mxConstants.STYLE_VERTICAL_ALIGN] == mxConstants.ALIGN_MIDDLE && (f += parseFloat(d[mxConstants.STYLE_IMAGE_WIDTH]) || mxLabel.prototype.imageSize),
                d[mxConstants.STYLE_ALIGN] != mxConstants.ALIGN_CENTER && (b += parseFloat(d[mxConstants.STYLE_IMAGE_HEIGHT]) || mxLabel.prototype.imageSize);
            f += 2 * (d[mxConstants.STYLE_SPACING] || 0);
            f += d[mxConstants.STYLE_SPACING_LEFT] || 0;
            f += d[mxConstants.STYLE_SPACING_RIGHT] || 0;
            b += 2 * (d[mxConstants.STYLE_SPACING] || 0);
            b += d[mxConstants.STYLE_SPACING_TOP] || 0;
            b += d[mxConstants.STYLE_SPACING_BOTTOM] || 0;
            c = this.getFoldingImage(c);
            null != c && (f += c.width + 8);
            a = this.getLabel(a);
            null != a && 0 < a.length ? (a = a.replace(/\n/g, "<br>"), a = mxUtils.getSizeForString(a,
                e, d[mxConstants.STYLE_FONTFAMILY]), f = a.width + f, b = a.height + b, mxUtils.getValue(d, mxConstants.STYLE_HORIZONTAL, !0) || (d = b, b = f, f = d), this.gridEnabled && (f = this.snap(f + this.gridSize / 2), b = this.snap(b + this.gridSize / 2)), b = new mxRectangle(0, 0, f, b)) : (d = 4 * this.gridSize, b = new mxRectangle(0, 0, d, d))
        }
    }
    return b
};
mxGraph.prototype.resizeCell = function(a, b, c) {
    return this.resizeCells([a], [b], c)[0]
};
mxGraph.prototype.resizeCells = function(a, b, c) {
    c = null != c ? c : this.isRecursiveResize();
    this.model.beginUpdate();
    try {
        this.cellsResized(a, b, c), this.fireEvent(new mxEventObject(mxEvent.RESIZE_CELLS, "cells", a, "bounds", b))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellsResized = function(a, b, c) {
    c = null != c ? c : !1;
    if (null != a && null != b && a.length == b.length) {
        this.model.beginUpdate();
        try {
            for (var d = 0; d < a.length; d++) this.cellResized(a[d], b[d], !1, c), this.isExtendParent(a[d]) ? this.extendParent(a[d]) : this.isConstrainChildrenOnResize() && this.constrainChild(a[d]);
            this.resetEdgesOnResize && this.resetEdges(a);
            this.fireEvent(new mxEventObject(mxEvent.CELLS_RESIZED, "cells", a, "bounds", b))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.cellResized = function(a, b, c, d) {
    var e = this.model.getGeometry(a);
    if (null != e && (e.x != b.x || e.y != b.y || e.width != b.width || e.height != b.height)) {
        e = e.clone();
        !c && e.relative ? (c = e.offset, null != c && (c.x += b.x - e.x, c.y += b.y - e.y)) : (e.x = b.x, e.y = b.y);
        e.width = b.width;
        e.height = b.height;
        !e.relative && (this.model.isVertex(a) && !this.isAllowNegativeCoordinates()) && (e.x = Math.max(0, e.x), e.y = Math.max(0, e.y));
        this.model.beginUpdate();
        try {
            d && this.resizeChildCells(a, e), this.model.setGeometry(a, e), this.isConstrainChildrenOnResize() &&
                this.constrainChildCells(a)
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.resizeChildCells = function(a, b) {
    for (var c = this.model.getGeometry(a), d = b.width / c.width, c = b.height / c.height, e = this.model.getChildCount(a), f = 0; f < e; f++) this.scaleCell(this.model.getChildAt(a, f), d, c, !0)
};
mxGraph.prototype.constrainChildCells = function(a) {
    for (var b = this.model.getChildCount(a), c = 0; c < b; c++) this.constrainChild(this.model.getChildAt(a, c))
};
mxGraph.prototype.scaleCell = function(a, b, c, d) {
    var e = this.model.getGeometry(a);
    if (null != e) {
        var e = e.clone(),
            f = e.points;
        if (null != f) {
            for (d = 0; d < f.length; d++) f[d].x *= b, f[d].y *= c;
            this.model.setGeometry(a, e)
        } else this.model.isVertex(a) && (e.relative || (e.x *= b, e.y *= c, e.width *= b, e.height *= c), this.cellResized(a, e, !0, d))
    }
};
mxGraph.prototype.extendParent = function(a) {
    if (null != a) {
        var b = this.model.getParent(a),
            c = this.model.getGeometry(b);
        if (null != b && (null != c && !this.isCellCollapsed(b)) && (a = this.model.getGeometry(a), null != a && (c.width < a.x + a.width || c.height < a.y + a.height))) c = c.clone(), c.width = Math.max(c.width, a.x + a.width), c.height = Math.max(c.height, a.y + a.height), this.cellsResized([b], [c], !1)
    }
};
mxGraph.prototype.importCells = function(a, b, c, d, e) {
    return this.moveCells(a, b, c, !0, d, e)
};
mxGraph.prototype.moveCells = function(a, b, c, d, e, f) {
    b = null != b ? b : 0;
    c = null != c ? c : 0;
    d = null != d ? d : !1;
    if (null != a && (0 != b || 0 != c || d || null != e)) {
        this.model.beginUpdate();
        try {
            d && (a = this.cloneCells(a, this.isCloneInvalidEdges()), null == e && (e = this.getDefaultParent()));
            var g = this.isAllowNegativeCoordinates();
            null != e && this.setAllowNegativeCoordinates(!0);
            this.cellsMoved(a, b, c, !d && this.isDisconnectOnMove() && this.isAllowDanglingEdges(), null == e, this.isExtendParentsOnMove() && null == e);
            this.setAllowNegativeCoordinates(g);
            if (null !=
                e) {
                var k = this.model.getChildCount(e);
                this.cellsAdded(a, e, k, null, null, !0)
            }
            this.fireEvent(new mxEventObject(mxEvent.MOVE_CELLS, "cells", a, "dx", b, "dy", c, "clone", d, "target", e, "event", f))
        } finally {
            this.model.endUpdate()
        }
    }
    return a
};
mxGraph.prototype.cellsMoved = function(a, b, c, d, e, f) {
    if (null != a && (0 != b || 0 != c)) {
        f = null != f ? f : !1;
        this.model.beginUpdate();
        try {
            d && this.disconnectGraph(a);
            for (var g = 0; g < a.length; g++) this.translateCell(a[g], b, c), f && this.isExtendParent(a[g]) ? this.extendParent(a[g]) : e && this.constrainChild(a[g]);
            this.resetEdgesOnMove && this.resetEdges(a);
            this.fireEvent(new mxEventObject(mxEvent.CELLS_MOVED, "cells", a, "dx", b, "dy", c, "disconnect", d))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.translateCell = function(a, b, c) {
    var d = this.model.getGeometry(a);
    null != d && (d = d.clone(), d.translate(b, c), !d.relative && (this.model.isVertex(a) && !this.isAllowNegativeCoordinates()) && (d.x = Math.max(0, d.x), d.y = Math.max(0, d.y)), d.relative && !this.model.isEdge(a) && (null == d.offset ? d.offset = new mxPoint(b, c) : (d.offset.x += b, d.offset.y += c)), this.model.setGeometry(a, d))
};
mxGraph.prototype.getCellContainmentArea = function(a) {
    if (null != a && !this.model.isEdge(a)) {
        var b = this.model.getParent(a);
        if (b == this.getDefaultParent() || b == this.getCurrentRoot()) return this.getMaximumGraphBounds();
        if (null != b && b != this.getDefaultParent()) {
            var c = this.model.getGeometry(b);
            if (null != c) {
                var d = a = 0,
                    e = c.width,
                    c = c.height;
                this.isSwimlane(b) && (b = this.getStartSize(b), a = b.width, e -= b.width, d = b.height, c -= b.height);
                return new mxRectangle(a, d, e, c)
            }
        }
    }
    return null
};
mxGraph.prototype.getMaximumGraphBounds = function() {
    return this.maximumGraphBounds
};
mxGraph.prototype.constrainChild = function(a) {
    if (null != a) {
        var b = this.model.getGeometry(a),
            c = this.isConstrainChild(a) ? this.getCellContainmentArea(a) : this.getMaximumGraphBounds();
        if (null != b && null != c && !b.relative && (b.x < c.x || b.y < c.y || c.width < b.x + b.width || c.height < b.y + b.height)) {
            var d = this.getOverlap(a),
                b = b.clone();
            0 < c.width && (b.x = Math.min(b.x, c.x + c.width - (1 - d) * b.width));
            0 < c.height && (b.y = Math.min(b.y, c.y + c.height - (1 - d) * b.height));
            b.x = Math.max(b.x, c.x - b.width * d);
            b.y = Math.max(b.y, c.y - b.height * d);
            b.width =
                Math.min(b.width, c.width);
            b.height = Math.min(b.height, c.height);
            this.model.setGeometry(a, b)
        }
    }
};
mxGraph.prototype.resetEdges = function(a) {
    if (null != a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = mxCellPath.create(a[c]);
            b[d] = a[c]
        }
        this.model.beginUpdate();
        try {
            for (c = 0; c < a.length; c++) {
                var e = this.model.getEdges(a[c]);
                if (null != e)
                    for (d = 0; d < e.length; d++) {
                        var f = this.view.getState(e[d]),
                            g = null != f ? f.getVisibleTerminal(!0) : this.view.getVisibleTerminal(e[d], !0),
                            k = null != f ? f.getVisibleTerminal(!1) : this.view.getVisibleTerminal(e[d], !1),
                            l = mxCellPath.create(g),
                            m = mxCellPath.create(k);
                        (null == b[l] || null == b[m]) && this.resetEdge(e[d])
                    }
                this.resetEdges(this.model.getChildren(a[c]))
            }
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.resetEdge = function(a) {
    var b = this.model.getGeometry(a);
    null != b && (null != b.points && 0 < b.points.length) && (b = b.clone(), b.points = [], this.model.setGeometry(a, b));
    return a
};
mxGraph.prototype.getOutlineConstraint = function(a, b, c) {
    if (null != b.shape) {
        c = this.view.getPerimeterBounds(b);
        var d = b.style[mxConstants.STYLE_DIRECTION];
        if (d == mxConstants.DIRECTION_NORTH || d == mxConstants.DIRECTION_SOUTH) {
            c.x += c.width / 2 - c.height / 2;
            c.y += c.height / 2 - c.width / 2;
            var e = c.width;
            c.width = c.height;
            c.height = e
        }
        var f = mxUtils.toRadians(b.shape.getShapeRotation());
        if (0 != f) {
            var e = Math.cos(-f),
                f = Math.sin(-f),
                g = new mxPoint(c.getCenterX(), c.getCenterY());
            a = mxUtils.getRotatedPoint(a, e, f, g)
        }
        var g = f = 1,
            k = 0,
            l =
            0;
        if (this.getModel().isVertex(b.cell)) {
            var m = b.style[mxConstants.STYLE_FLIPH],
                n = b.style[mxConstants.STYLE_FLIPV];
            null != b.shape && null != b.shape.stencil && (m = 1 == mxUtils.getValue(b.style, "stencilFlipH", 0) || m, n = 1 == mxUtils.getValue(b.style, "stencilFlipV", 0) || n);
            if (d == mxConstants.DIRECTION_NORTH || d == mxConstants.DIRECTION_SOUTH) e = m, m = n, n = e;
            m && (f = -1, k = -c.width);
            n && (g = -1, l = -c.height)
        }
        a = new mxPoint((a.x - c.x) * f - k + c.x, (a.y - c.y) * g - l + c.y);
        b = Math.round(1E3 * (a.x - c.x) / c.width) / 1E3;
        a = Math.round(1E3 * (a.y - c.y) / c.height) /
            1E3;
        return new mxConnectionConstraint(new mxPoint(b, a), !1)
    }
    return null
};
mxGraph.prototype.getAllConnectionConstraints = function(a, b) {
    return null != a && null != a.shape && null != a.shape.stencil ? a.shape.stencil.constraints : null
};
mxGraph.prototype.getConnectionConstraint = function(a, b, c) {
    b = null;
    var d = a.style[c ? mxConstants.STYLE_EXIT_X : mxConstants.STYLE_ENTRY_X];
    if (null != d) {
        var e = a.style[c ? mxConstants.STYLE_EXIT_Y : mxConstants.STYLE_ENTRY_Y];
        null != e && (b = new mxPoint(parseFloat(d), parseFloat(e)))
    }
    d = !1;
    null != b && (d = mxUtils.getValue(a.style, c ? mxConstants.STYLE_EXIT_PERIMETER : mxConstants.STYLE_ENTRY_PERIMETER, !0));
    return new mxConnectionConstraint(b, d)
};
mxGraph.prototype.setConnectionConstraint = function(a, b, c, d) {
    if (null != d) {
        this.model.beginUpdate();
        try {
            null == d || null == d.point ? (this.setCellStyles(c ? mxConstants.STYLE_EXIT_X : mxConstants.STYLE_ENTRY_X, null, [a]), this.setCellStyles(c ? mxConstants.STYLE_EXIT_Y : mxConstants.STYLE_ENTRY_Y, null, [a]), this.setCellStyles(c ? mxConstants.STYLE_EXIT_PERIMETER : mxConstants.STYLE_ENTRY_PERIMETER, null, [a])) : null != d.point && (this.setCellStyles(c ? mxConstants.STYLE_EXIT_X : mxConstants.STYLE_ENTRY_X, d.point.x, [a]), this.setCellStyles(c ?
                mxConstants.STYLE_EXIT_Y : mxConstants.STYLE_ENTRY_Y, d.point.y, [a]), d.perimeter ? this.setCellStyles(c ? mxConstants.STYLE_EXIT_PERIMETER : mxConstants.STYLE_ENTRY_PERIMETER, null, [a]) : this.setCellStyles(c ? mxConstants.STYLE_EXIT_PERIMETER : mxConstants.STYLE_ENTRY_PERIMETER, "0", [a]))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.getConnectionPoint = function(a, b) {
    var c = null;
    if (null != a) {
        var d = this.view.getPerimeterBounds(a),
            e = new mxPoint(d.getCenterX(), d.getCenterY()),
            f = a.style[mxConstants.STYLE_DIRECTION],
            g = 0;
        if (null != f && (f == mxConstants.DIRECTION_NORTH ? g += 270 : f == mxConstants.DIRECTION_WEST ? g += 180 : f == mxConstants.DIRECTION_SOUTH && (g += 90), f == mxConstants.DIRECTION_NORTH || f == mxConstants.DIRECTION_SOUTH)) {
            d.x += d.width / 2 - d.height / 2;
            d.y += d.height / 2 - d.width / 2;
            var k = d.width;
            d.width = d.height;
            d.height = k
        }
        if (null != b.point) {
            var l =
                c = 1,
                m = 0,
                n = 0;
            if (this.getModel().isVertex(a.cell)) {
                var p = a.style[mxConstants.STYLE_FLIPH],
                    q = a.style[mxConstants.STYLE_FLIPV];
                null != a.shape && null != a.shape.stencil && (p = 1 == mxUtils.getValue(a.style, "stencilFlipH", 0) || p, q = 1 == mxUtils.getValue(a.style, "stencilFlipV", 0) || q);
                if ("north" == f || "south" == f) k = p, p = q, q = k;
                p && (c = -1, m = -d.width);
                q && (l = -1, n = -d.height)
            }
            c = new mxPoint(d.x + b.point.x * d.width * c - m, d.y + b.point.y * d.height * l - n)
        }
        f = a.style[mxConstants.STYLE_ROTATION] || 0;
        b.perimeter ? (0 != g && null != c && (k = d = 0, 90 == g ? k = 1 : 180 ==
            g ? d = -1 : 270 == f && (k = -1), c = mxUtils.getRotatedPoint(c, d, k, e)), null != c && b.perimeter && (c = this.view.getPerimeterPoint(a, c, !1))) : f += g;
        0 != f && null != c && (g = mxUtils.toRadians(f), d = Math.cos(g), k = Math.sin(g), c = mxUtils.getRotatedPoint(c, d, k, e))
    }
    return c
};
mxGraph.prototype.connectCell = function(a, b, c, d) {
    this.model.beginUpdate();
    try {
        var e = this.model.getTerminal(a, c);
        this.cellConnected(a, b, c, d);
        this.fireEvent(new mxEventObject(mxEvent.CONNECT_CELL, "edge", a, "terminal", b, "source", c, "previous", e))
    } finally {
        this.model.endUpdate()
    }
    return a
};
mxGraph.prototype.cellConnected = function(a, b, c, d) {
    if (null != a) {
        this.model.beginUpdate();
        try {
            var e = this.model.getTerminal(a, c);
            this.setConnectionConstraint(a, b, c, d);
            this.isPortsEnabled() && (d = null, this.isPort(b) && (d = b.getId(), b = this.getTerminalForPort(b, c)), this.setCellStyles(c ? mxConstants.STYLE_SOURCE_PORT : mxConstants.STYLE_TARGET_PORT, d, [a]));
            this.model.setTerminal(a, b, c);
            this.resetEdgesOnConnect && this.resetEdge(a);
            this.fireEvent(new mxEventObject(mxEvent.CELL_CONNECTED, "edge", a, "terminal", b, "source",
                c, "previous", e))
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.disconnectGraph = function(a) {
    if (null != a) {
        this.model.beginUpdate();
        try {
            for (var b = this.view.scale, c = this.view.translate, d = {}, e = 0; e < a.length; e++) {
                var f = mxCellPath.create(a[e]);
                d[f] = a[e]
            }
            for (e = 0; e < a.length; e++)
                if (this.model.isEdge(a[e])) {
                    var g = this.model.getGeometry(a[e]);
                    if (null != g) {
                        var k = this.view.getState(a[e]),
                            l = this.view.getState(this.model.getParent(a[e]));
                        if (null != k && null != l) {
                            var g = g.clone(),
                                m = -l.origin.x,
                                n = -l.origin.y,
                                p = k.absolutePoints,
                                q = this.model.getTerminal(a[e], !0);
                            if (null !=
                                q && this.isCellDisconnectable(a[e], q, !0)) {
                                for (var r = mxCellPath.create(q); null != q && null == d[r];) q = this.model.getParent(q), r = mxCellPath.create(q);
                                null == q && (g.setTerminalPoint(new mxPoint(p[0].x / b - c.x + m, p[0].y / b - c.y + n), !0), this.model.setTerminal(a[e], null, !0))
                            }
                            var s = this.model.getTerminal(a[e], !1);
                            if (null != s && this.isCellDisconnectable(a[e], s, !1)) {
                                for (var t = mxCellPath.create(s); null != s && null == d[t];) s = this.model.getParent(s), t = mxCellPath.create(s);
                                if (null == s) {
                                    var u = p.length - 1;
                                    g.setTerminalPoint(new mxPoint(p[u].x /
                                        b - c.x + m, p[u].y / b - c.y + n), !1);
                                    this.model.setTerminal(a[e], null, !1)
                                }
                            }
                            this.model.setGeometry(a[e], g)
                        }
                    }
                }
        } finally {
            this.model.endUpdate()
        }
    }
};
mxGraph.prototype.getCurrentRoot = function() {
    return this.view.currentRoot
};
mxGraph.prototype.getTranslateForRoot = function(a) {
    return null
};
mxGraph.prototype.isPort = function(a) {
    return !1
};
mxGraph.prototype.getTerminalForPort = function(a, b) {
    return this.model.getParent(a)
};
mxGraph.prototype.getChildOffsetForCell = function(a) {
    return null
};
mxGraph.prototype.enterGroup = function(a) {
    a = a || this.getSelectionCell();
    null != a && this.isValidRoot(a) && (this.view.setCurrentRoot(a), this.clearSelection())
};
mxGraph.prototype.exitGroup = function() {
    var a = this.model.getRoot(),
        b = this.getCurrentRoot();
    if (null != b) {
        for (var c = this.model.getParent(b); c != a && !this.isValidRoot(c) && this.model.getParent(c) != a;) c = this.model.getParent(c);
        c == a || this.model.getParent(c) == a ? this.view.setCurrentRoot(null) : this.view.setCurrentRoot(c);
        null != this.view.getState(b) && this.setSelectionCell(b)
    }
};
mxGraph.prototype.home = function() {
    var a = this.getCurrentRoot();
    null != a && (this.view.setCurrentRoot(null), null != this.view.getState(a) && this.setSelectionCell(a))
};
mxGraph.prototype.isValidRoot = function(a) {
    return null != a
};
mxGraph.prototype.getGraphBounds = function() {
    return this.view.getGraphBounds()
};
mxGraph.prototype.getCellBounds = function(a, b, c) {
    var d = [a];
    b && (d = d.concat(this.model.getEdges(a)));
    d = this.view.getBounds(d);
    if (c) {
        c = this.model.getChildCount(a);
        for (var e = 0; e < c; e++) {
            var f = this.getCellBounds(this.model.getChildAt(a, e), b, !0);
            null != d ? d.add(f) : d = f
        }
    }
    return d
};
mxGraph.prototype.getBoundingBoxFromGeometry = function(a, b) {
    b = null != b ? b : !1;
    var c = null;
    if (null != a)
        for (var d = 0; d < a.length; d++)
            if (b || this.model.isVertex(a[d])) {
                var e = this.getCellGeometry(a[d]);
                if (null != e) {
                    var f = e.points,
                        g = null;
                    if (this.model.isEdge(a[d])) {
                        if (null != f && 0 < f.length) {
                            for (var k = new mxRectangle(f[0].x, f[0].y, 0, 0), g = function(a) {
                                null != a && k.add(new mxRectangle(a.x, a.y, 0, 0))
                            }, l = 1; l < f.length; l++) g(f[l]);
                            g(e.getTerminalPoint(!0));
                            g(e.getTerminalPoint(!1));
                            g = k
                        }
                    } else g = e;
                    null != g && (null == c ? c = new mxRectangle(g.x,
                        g.y, g.width, g.height) : c.add(g))
                }
            }
    return c
};
mxGraph.prototype.refresh = function(a) {
    this.view.clear(a, null == a);
    this.view.validate();
    this.sizeDidChange();
    this.fireEvent(new mxEventObject(mxEvent.REFRESH))
};
mxGraph.prototype.snap = function(a) {
    this.gridEnabled && (a = Math.round(a / this.gridSize) * this.gridSize);
    return a
};
mxGraph.prototype.panGraph = function(a, b) {
    if (this.useScrollbarsForPanning && mxUtils.hasScrollbars(this.container)) this.container.scrollLeft = -a, this.container.scrollTop = -b;
    else {
        var c = this.view.getCanvas();
        if (this.dialect == mxConstants.DIALECT_SVG)
            if (0 == a && 0 == b) {
                if (mxClient.IS_IE ? c.setAttribute("transform", "translate(" + a + "," + b + ")") : c.removeAttribute("transform"), null != this.shiftPreview1) {
                    for (var d = this.shiftPreview1.firstChild; null != d;) {
                        var e = d.nextSibling;
                        this.container.appendChild(d);
                        d = e
                    }
                    null != this.shiftPreview1.parentNode &&
                        this.shiftPreview1.parentNode.removeChild(this.shiftPreview1);
                    this.shiftPreview1 = null;
                    this.container.appendChild(c.parentNode);
                    for (d = this.shiftPreview2.firstChild; null != d;) e = d.nextSibling, this.container.appendChild(d), d = e;
                    null != this.shiftPreview2.parentNode && this.shiftPreview2.parentNode.removeChild(this.shiftPreview2);
                    this.shiftPreview2 = null
                }
            } else {
                c.setAttribute("transform", "translate(" + a + "," + b + ")");
                if (null == this.shiftPreview1) {
                    this.shiftPreview1 = document.createElement("div");
                    this.shiftPreview1.style.position =
                        "absolute";
                    this.shiftPreview1.style.overflow = "visible";
                    this.shiftPreview2 = document.createElement("div");
                    this.shiftPreview2.style.position = "absolute";
                    this.shiftPreview2.style.overflow = "visible";
                    for (var f = this.shiftPreview1, d = this.container.firstChild; null != d;) e = d.nextSibling, d != c.parentNode ? f.appendChild(d) : f = this.shiftPreview2, d = e;
                    null != this.shiftPreview1.firstChild && this.container.insertBefore(this.shiftPreview1, c.parentNode);
                    null != this.shiftPreview2.firstChild && this.container.appendChild(this.shiftPreview2)
                }
                this.shiftPreview1.style.left =
                    a + "px";
                this.shiftPreview1.style.top = b + "px";
                this.shiftPreview2.style.left = a + "px";
                this.shiftPreview2.style.top = b + "px"
            } else c.style.left = a + "px", c.style.top = b + "px";
        this.panDx = a;
        this.panDy = b;
        this.fireEvent(new mxEventObject(mxEvent.PAN))
    }
};
mxGraph.prototype.zoomIn = function() {
    this.zoom(this.zoomFactor)
};
mxGraph.prototype.zoomOut = function() {
    this.zoom(1 / this.zoomFactor)
};
mxGraph.prototype.zoomActual = function() {
    1 == this.view.scale ? this.view.setTranslate(0, 0) : (this.view.translate.x = 0, this.view.translate.y = 0, this.view.setScale(1))
};
mxGraph.prototype.zoomTo = function(a, b) {
    this.zoom(a / this.view.scale, b)
};
mxGraph.prototype.center = function() {
    var a = mxUtils.hasScrollbars(this.container),
        b = this.container.clientWidth,
        c = this.container.clientHeight,
        d = this.getGraphBounds(),
        e = this.view.translate;
    d.x -= e.x;
    d.y -= e.y;
    var e = b - d.width,
        f = c - d.height;
    if (a) {
        var a = this.container.scrollWidth,
            g = this.container.scrollHeight;
        a > b && (e = 0);
        g > c && (f = 0);
        this.view.setTranslate(e / 2 - d.x, f / 2 - d.y);
        this.container.scrollLeft = (a - b) / 2;
        this.container.scrollTop = (g - c) / 2
    } else this.view.setTranslate(e / 2 - d.x, f / 2 - d.y)
};
mxGraph.prototype.zoom = function(a, b) {
    b = null != b ? b : this.centerZoom;
    var c = Math.round(100 * this.view.scale * a) / 100,
        d = this.view.getState(this.getSelectionCell());
    a = c / this.view.scale;
    if (this.keepSelectionVisibleOnZoom && null != d) d = new mxRectangle(d.x * a, d.y * a, d.width * a, d.height * a), this.view.scale = c, this.scrollRectToVisible(d) || (this.view.revalidate(), this.view.setScale(c));
    else if (d = mxUtils.hasScrollbars(this.container), b && !d) {
        var d = this.container.offsetWidth,
            e = this.container.offsetHeight;
        if (1 < a) var f = (a - 1) /
            (2 * c),
            d = d * -f,
            e = e * -f;
        else f = (1 / a - 1) / (2 * this.view.scale), d *= f, e *= f;
        this.view.scaleAndTranslate(c, this.view.translate.x + d, this.view.translate.y + e)
    } else {
        var f = this.view.translate.x,
            g = this.view.translate.y,
            k = this.container.scrollLeft,
            l = this.container.scrollTop;
        this.view.setScale(c);
        d && (e = d = 0, b && (d = this.container.offsetWidth * (a - 1) / 2, e = this.container.offsetHeight * (a - 1) / 2), this.container.scrollLeft = (this.view.translate.x - f) * this.view.scale + Math.round(k * a + d), this.container.scrollTop = (this.view.translate.y -
            g) * this.view.scale + Math.round(l * a + e))
    }
};
mxGraph.prototype.zoomToRect = function(a) {
    var b = this.container.clientWidth / a.width / (this.container.clientHeight / a.height);
    a.x = Math.max(0, a.x);
    a.y = Math.max(0, a.y);
    var c = Math.min(this.container.scrollWidth, a.x + a.width),
        d = Math.min(this.container.scrollHeight, a.y + a.height);
    a.width = c - a.x;
    a.height = d - a.y;
    1 > b ? (b = a.height / b, c = (b - a.height) / 2, a.height = b, b = Math.min(a.y, c), a.y -= b, d = Math.min(this.container.scrollHeight, a.y + a.height), a.height = d - a.y) : (b *= a.width, c = (b - a.width) / 2, a.width = b, b = Math.min(a.x, c), a.x -= b,
        c = Math.min(this.container.scrollWidth, a.x + a.width), a.width = c - a.x);
    b = this.container.clientWidth / a.width;
    c = this.view.scale * b;
    mxUtils.hasScrollbars(this.container) ? (this.view.setScale(c), this.container.scrollLeft = Math.round(a.x * b), this.container.scrollTop = Math.round(a.y * b)) : this.view.scaleAndTranslate(c, this.view.translate.x - a.x / this.view.scale, this.view.translate.y - a.y / this.view.scale)
};
mxGraph.prototype.fit = function(a, b) {
    if (null != this.container) {
        a = null != a ? a : 0;
        b = null != b ? b : !1;
        var c = this.container.clientWidth,
            d = this.container.clientHeight,
            e = this.view.getGraphBounds();
        b && (null != e.x && null != e.y) && (e.width += e.x, e.height += e.y, e.x = 0, e.y = 0);
        var f = this.view.scale,
            g = e.width / f,
            k = e.height / f;
        null != this.backgroundImage && (g = Math.max(g, this.backgroundImage.width - e.x / f), k = Math.max(k, this.backgroundImage.height - e.y / f));
        var l = b ? a : 2 * a,
            c = Math.floor(100 * Math.min(c / (g + l), d / (k + l))) / 100;
        null != this.minFitScale &&
            (c = Math.max(c, this.minFitScale));
        null != this.maxFitScale && (c = Math.min(c, this.maxFitScale));
        b ? this.view.scale != c && this.view.setScale(c) : mxUtils.hasScrollbars(this.container) ? (this.view.setScale(c), e = this.getGraphBounds(), null != e.x && (this.container.scrollLeft = e.x), null != e.y && (this.container.scrollTop = e.y)) : this.view.scaleAndTranslate(c, null != e.x ? Math.floor(this.view.translate.x - e.x / f + a + 1) : a, null != e.y ? Math.floor(this.view.translate.y - e.y / f + a + 1) : a)
    }
    return this.view.scale
};
mxGraph.prototype.scrollCellToVisible = function(a, b) {
    var c = -this.view.translate.x,
        d = -this.view.translate.y,
        e = this.view.getState(a);
    null != e && (c = new mxRectangle(c + e.x, d + e.y, e.width, e.height), b && null != this.container && (d = this.container.clientWidth, e = this.container.clientHeight, c.x = c.getCenterX() - d / 2, c.width = d, c.y = c.getCenterY() - e / 2, c.height = e), this.scrollRectToVisible(c) && this.view.setTranslate(this.view.translate.x, this.view.translate.y))
};
mxGraph.prototype.scrollRectToVisible = function(a) {
    var b = !1;
    if (null != a) {
        var c = this.container.offsetWidth,
            d = this.container.offsetHeight,
            e = Math.min(c, a.width),
            f = Math.min(d, a.height);
        if (mxUtils.hasScrollbars(this.container)) {
            c = this.container;
            a.x += this.view.translate.x;
            a.y += this.view.translate.y;
            var g = c.scrollLeft - a.x,
                d = Math.max(g - c.scrollLeft, 0);
            0 < g ? c.scrollLeft -= g + 2 : (g = a.x + e - c.scrollLeft - c.clientWidth, 0 < g && (c.scrollLeft += g + 2));
            e = c.scrollTop - a.y;
            g = Math.max(0, e - c.scrollTop);
            0 < e ? c.scrollTop -= e + 2 : (e = a.y +
                f - c.scrollTop - c.clientHeight, 0 < e && (c.scrollTop += e + 2));
            !this.useScrollbarsForPanning && (0 != d || 0 != g) && this.view.setTranslate(d, g)
        } else {
            var g = -this.view.translate.x,
                k = -this.view.translate.y,
                l = this.view.scale;
            a.x + e > g + c && (this.view.translate.x -= (a.x + e - c - g) / l, b = !0);
            a.y + f > k + d && (this.view.translate.y -= (a.y + f - d - k) / l, b = !0);
            a.x < g && (this.view.translate.x += (g - a.x) / l, b = !0);
            a.y < k && (this.view.translate.y += (k - a.y) / l, b = !0);
            b && (this.view.refresh(), null != this.selectionCellsHandler && this.selectionCellsHandler.refresh())
        }
    }
    return b
};
mxGraph.prototype.getCellGeometry = function(a) {
    return this.model.getGeometry(a)
};
mxGraph.prototype.isCellVisible = function(a) {
    return this.model.isVisible(a)
};
mxGraph.prototype.isCellCollapsed = function(a) {
    return this.model.isCollapsed(a)
};
mxGraph.prototype.isCellConnectable = function(a) {
    return this.model.isConnectable(a)
};
mxGraph.prototype.isOrthogonal = function(a) {
    var b = a.style[mxConstants.STYLE_ORTHOGONAL];
    if (null != b) return b;
    a = this.view.getEdgeStyle(a);
    return a == mxEdgeStyle.SegmentConnector || a == mxEdgeStyle.ElbowConnector || a == mxEdgeStyle.SideToSide || a == mxEdgeStyle.TopToBottom || a == mxEdgeStyle.EntityRelation || a == mxEdgeStyle.OrthConnector
};
mxGraph.prototype.isLoop = function(a) {
    var b = a.getVisibleTerminalState(!0);
    a = a.getVisibleTerminalState(!1);
    return null != b && b == a
};
mxGraph.prototype.isCloneEvent = function(a) {
    return mxEvent.isControlDown(a)
};
mxGraph.prototype.isToggleEvent = function(a) {
    return mxClient.IS_MAC ? mxEvent.isMetaDown(a) : mxEvent.isControlDown(a)
};
mxGraph.prototype.isGridEnabledEvent = function(a) {
    return null != a && !mxEvent.isAltDown(a)
};
mxGraph.prototype.isConstrainedEvent = function(a) {
    return mxEvent.isShiftDown(a)
};
mxGraph.prototype.validationAlert = function(a) {
    mxUtils.alert(a)
};
mxGraph.prototype.isEdgeValid = function(a, b, c) {
    return null == this.getEdgeValidationError(a, b, c)
};
mxGraph.prototype.getEdgeValidationError = function(a, b, c) {
    if (null != a && !this.isAllowDanglingEdges() && (null == b || null == c)) return "";
    if (null != a && null == this.model.getTerminal(a, !0) && null == this.model.getTerminal(a, !1)) return null;
    if (!this.allowLoops && b == c && null != b || !this.isValidConnection(b, c)) return "";
    if (null != b && null != c) {
        var d = "";
        if (!this.multigraph) {
            var e = this.model.getEdgesBetween(b, c, !0);
            if (1 < e.length || 1 == e.length && e[0] != a) d += (mxResources.get(this.alreadyConnectedResource) || this.alreadyConnectedResource) +
                "\n"
        }
        var e = this.model.getDirectedEdgeCount(b, !0, a),
            f = this.model.getDirectedEdgeCount(c, !1, a);
        if (null != this.multiplicities)
            for (var g = 0; g < this.multiplicities.length; g++) {
                var k = this.multiplicities[g].check(this, a, b, c, e, f);
                null != k && (d += k)
            }
        k = this.validateEdge(a, b, c);
        null != k && (d += k);
        return 0 < d.length ? d : null
    }
    return this.allowDanglingEdges ? null : ""
};
mxGraph.prototype.validateEdge = function(a, b, c) {
    return null
};
mxGraph.prototype.validateGraph = function(a, b) {
    a = null != a ? a : this.model.getRoot();
    b = null != b ? b : {};
    for (var c = !0, d = this.model.getChildCount(a), e = 0; e < d; e++) {
        var f = this.model.getChildAt(a, e),
            g = b;
        this.isValidRoot(f) && (g = {});
        g = this.validateGraph(f, g);
        null != g ? this.setCellWarning(f, g.replace(/\n/g, "<br>")) : this.setCellWarning(f, null);
        c = c && null == g
    }
    d = "";
    this.isCellCollapsed(a) && !c && (d += (mxResources.get(this.containsValidationErrorsResource) || this.containsValidationErrorsResource) + "\n");
    d = this.model.isEdge(a) ? d +
        (this.getEdgeValidationError(a, this.model.getTerminal(a, !0), this.model.getTerminal(a, !1)) || "") : d + (this.getCellValidationError(a) || "");
    e = this.validateCell(a, b);
    null != e && (d += e);
    null == this.model.getParent(a) && this.view.validate();
    return 0 < d.length || !c ? d : null
};
mxGraph.prototype.getCellValidationError = function(a) {
    var b = this.model.getDirectedEdgeCount(a, !0),
        c = this.model.getDirectedEdgeCount(a, !1);
    a = this.model.getValue(a);
    var d = "";
    if (null != this.multiplicities)
        for (var e = 0; e < this.multiplicities.length; e++) {
            var f = this.multiplicities[e];
            if (f.source && mxUtils.isNode(a, f.type, f.attr, f.value) && (0 == f.max && 0 < b || 1 == f.min && 0 == b || 1 == f.max && 1 < b)) d += f.countError + "\n";
            else if (!f.source && mxUtils.isNode(a, f.type, f.attr, f.value) && (0 == f.max && 0 < c || 1 == f.min && 0 == c || 1 == f.max && 1 <
                c)) d += f.countError + "\n"
        }
    return 0 < d.length ? d : null
};
mxGraph.prototype.validateCell = function(a, b) {
    return null
};
mxGraph.prototype.getBackgroundImage = function() {
    return this.backgroundImage
};
mxGraph.prototype.setBackgroundImage = function(a) {
    this.backgroundImage = a
};
mxGraph.prototype.getFoldingImage = function(a) {
    if (null != a && this.foldingEnabled && !this.getModel().isEdge(a.cell)) {
        var b = this.isCellCollapsed(a.cell);
        if (this.isCellFoldable(a.cell, !b)) return b ? this.collapsedImage : this.expandedImage
    }
    return null
};
mxGraph.prototype.convertValueToString = function(a) {
    a = this.model.getValue(a);
    if (null != a) {
        if (mxUtils.isNode(a)) return a.nodeName;
        if ("function" == typeof a.toString) return a.toString()
    }
    return ""
};
mxGraph.prototype.getLabel = function(a) {
    var b = "";
    if (this.labelsVisible && null != a) {
        var c = this.view.getState(a),
            c = null != c ? c.style : this.getCellStyle(a);
        mxUtils.getValue(c, mxConstants.STYLE_NOLABEL, !1) || (b = this.convertValueToString(a))
    }
    return b
};
mxGraph.prototype.isHtmlLabel = function(a) {
    return this.isHtmlLabels()
};
mxGraph.prototype.isHtmlLabels = function() {
    return this.htmlLabels
};
mxGraph.prototype.setHtmlLabels = function(a) {
    this.htmlLabels = a
};
mxGraph.prototype.isWrapping = function(a) {
    var b = this.view.getState(a);
    a = null != b ? b.style : this.getCellStyle(a);
    return null != a ? "wrap" == a[mxConstants.STYLE_WHITE_SPACE] : !1
};
mxGraph.prototype.isLabelClipped = function(a) {
    var b = this.view.getState(a);
    a = null != b ? b.style : this.getCellStyle(a);
    return null != a ? "hidden" == a[mxConstants.STYLE_OVERFLOW] : !1
};
mxGraph.prototype.getTooltip = function(a, b, c, d) {
    var e = null;
    if (null != a) {
        if (null != a.control && (b == a.control.node || b.parentNode == a.control.node)) e = this.collapseExpandResource, e = mxResources.get(e) || e;
        null == e && null != a.overlays && a.overlays.visit(function(a, c) {
            if (null == e && (b == c.node || b.parentNode == c.node)) e = c.overlay.toString()
        });
        null == e && (c = this.selectionCellsHandler.getHandler(a.cell), null != c && "function" == typeof c.getTooltipForNode && (e = c.getTooltipForNode(b)));
        null == e && (e = this.getTooltipForCell(a.cell))
    }
    return e
};
mxGraph.prototype.getTooltipForCell = function(a) {
    var b = null;
    return b = null != a && null != a.getTooltip ? a.getTooltip() : this.convertValueToString(a)
};
mxGraph.prototype.getCursorForMouseEvent = function(a) {
    return this.getCursorForCell(a.getCell())
};
mxGraph.prototype.getCursorForCell = function(a) {
    return null
};
mxGraph.prototype.getStartSize = function(a) {
    var b = new mxRectangle,
        c = this.view.getState(a);
    a = null != c ? c.style : this.getCellStyle(a);
    null != a && (c = parseInt(mxUtils.getValue(a, mxConstants.STYLE_STARTSIZE, mxConstants.DEFAULT_STARTSIZE)), mxUtils.getValue(a, mxConstants.STYLE_HORIZONTAL, !0) ? b.height = c : b.width = c);
    return b
};
mxGraph.prototype.getImage = function(a) {
    return null != a && null != a.style ? a.style[mxConstants.STYLE_IMAGE] : null
};
mxGraph.prototype.getVerticalAlign = function(a) {
    return null != a && null != a.style ? a.style[mxConstants.STYLE_VERTICAL_ALIGN] || mxConstants.ALIGN_MIDDLE : null
};
mxGraph.prototype.getIndicatorColor = function(a) {
    return null != a && null != a.style ? a.style[mxConstants.STYLE_INDICATOR_COLOR] : null
};
mxGraph.prototype.getIndicatorGradientColor = function(a) {
    return null != a && null != a.style ? a.style[mxConstants.STYLE_INDICATOR_GRADIENTCOLOR] : null
};
mxGraph.prototype.getIndicatorShape = function(a) {
    return null != a && null != a.style ? a.style[mxConstants.STYLE_INDICATOR_SHAPE] : null
};
mxGraph.prototype.getIndicatorImage = function(a) {
    return null != a && null != a.style ? a.style[mxConstants.STYLE_INDICATOR_IMAGE] : null
};
mxGraph.prototype.getBorder = function() {
    return this.border
};
mxGraph.prototype.setBorder = function(a) {
    this.border = a
};
mxGraph.prototype.isSwimlane = function(a) {
    if (null != a && this.model.getParent(a) != this.model.getRoot()) {
        var b = this.view.getState(a),
            b = null != b ? b.style : this.getCellStyle(a);
        if (null != b && !this.model.isEdge(a)) return b[mxConstants.STYLE_SHAPE] == mxConstants.SHAPE_SWIMLANE
    }
    return !1
};
mxGraph.prototype.isResizeContainer = function() {
    return this.resizeContainer
};
mxGraph.prototype.setResizeContainer = function(a) {
    this.resizeContainer = a
};
mxGraph.prototype.isEnabled = function() {
    return this.enabled
};
mxGraph.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxGraph.prototype.isEscapeEnabled = function() {
    return this.escapeEnabled
};
mxGraph.prototype.setEscapeEnabled = function(a) {
    this.escapeEnabled = a
};
mxGraph.prototype.isInvokesStopCellEditing = function() {
    return this.invokesStopCellEditing
};
mxGraph.prototype.setInvokesStopCellEditing = function(a) {
    this.invokesStopCellEditing = a
};
mxGraph.prototype.isEnterStopsCellEditing = function() {
    return this.enterStopsCellEditing
};
mxGraph.prototype.setEnterStopsCellEditing = function(a) {
    this.enterStopsCellEditing = a
};
mxGraph.prototype.isCellLocked = function(a) {
    var b = this.model.getGeometry(a);
    return this.isCellsLocked() || null != b && this.model.isVertex(a) && b.relative
};
mxGraph.prototype.isCellsLocked = function() {
    return this.cellsLocked
};
mxGraph.prototype.setCellsLocked = function(a) {
    this.cellsLocked = a
};
mxGraph.prototype.getCloneableCells = function(a) {
    return this.model.filterCells(a, mxUtils.bind(this, function(a) {
        return this.isCellCloneable(a)
    }))
};
mxGraph.prototype.isCellCloneable = function(a) {
    var b = this.view.getState(a);
    a = null != b ? b.style : this.getCellStyle(a);
    return this.isCellsCloneable() && 0 != a[mxConstants.STYLE_CLONEABLE]
};
mxGraph.prototype.isCellsCloneable = function() {
    return this.cellsCloneable
};
mxGraph.prototype.setCellsCloneable = function(a) {
    this.cellsCloneable = a
};
mxGraph.prototype.getExportableCells = function(a) {
    return this.model.filterCells(a, mxUtils.bind(this, function(a) {
        return this.canExportCell(a)
    }))
};
mxGraph.prototype.canExportCell = function(a) {
    return this.exportEnabled
};
mxGraph.prototype.getImportableCells = function(a) {
    return this.model.filterCells(a, mxUtils.bind(this, function(a) {
        return this.canImportCell(a)
    }))
};
mxGraph.prototype.canImportCell = function(a) {
    return this.importEnabled
};
mxGraph.prototype.isCellSelectable = function(a) {
    return this.isCellsSelectable()
};
mxGraph.prototype.isCellsSelectable = function() {
    return this.cellsSelectable
};
mxGraph.prototype.setCellsSelectable = function(a) {
    this.cellsSelectable = a
};
mxGraph.prototype.getDeletableCells = function(a) {
    return this.model.filterCells(a, mxUtils.bind(this, function(a) {
        return this.isCellDeletable(a)
    }))
};
mxGraph.prototype.isCellDeletable = function(a) {
    var b = this.view.getState(a);
    a = null != b ? b.style : this.getCellStyle(a);
    return this.isCellsDeletable() && 0 != a[mxConstants.STYLE_DELETABLE]
};
mxGraph.prototype.isCellsDeletable = function() {
    return this.cellsDeletable
};
mxGraph.prototype.setCellsDeletable = function(a) {
    this.cellsDeletable = a
};
mxGraph.prototype.isLabelMovable = function(a) {
    return !this.isCellLocked(a) && (this.model.isEdge(a) && this.edgeLabelsMovable || this.model.isVertex(a) && this.vertexLabelsMovable)
};
mxGraph.prototype.isCellRotatable = function(a) {
    var b = this.view.getState(a);
    return 0 != (null != b ? b.style : this.getCellStyle(a))[mxConstants.STYLE_ROTATABLE]
};
mxGraph.prototype.getMovableCells = function(a) {
    return this.model.filterCells(a, mxUtils.bind(this, function(a) {
        return this.isCellMovable(a)
    }))
};
mxGraph.prototype.isCellMovable = function(a) {
    var b = this.view.getState(a),
        b = null != b ? b.style : this.getCellStyle(a);
    return this.isCellsMovable() && !this.isCellLocked(a) && 0 != b[mxConstants.STYLE_MOVABLE]
};
mxGraph.prototype.isCellsMovable = function() {
    return this.cellsMovable
};
mxGraph.prototype.setCellsMovable = function(a) {
    this.cellsMovable = a
};
mxGraph.prototype.isGridEnabled = function() {
    return this.gridEnabled
};
mxGraph.prototype.setGridEnabled = function(a) {
    this.gridEnabled = a
};
mxGraph.prototype.isPortsEnabled = function() {
    return this.portsEnabled
};
mxGraph.prototype.setPortsEnabled = function(a) {
    this.portsEnabled = a
};
mxGraph.prototype.getGridSize = function() {
    return this.gridSize
};
mxGraph.prototype.setGridSize = function(a) {
    this.gridSize = a
};
mxGraph.prototype.getTolerance = function() {
    return this.tolerance
};
mxGraph.prototype.setTolerance = function(a) {
    this.tolerance = a
};
mxGraph.prototype.isVertexLabelsMovable = function() {
    return this.vertexLabelsMovable
};
mxGraph.prototype.setVertexLabelsMovable = function(a) {
    this.vertexLabelsMovable = a
};
mxGraph.prototype.isEdgeLabelsMovable = function() {
    return this.edgeLabelsMovable
};
mxGraph.prototype.setEdgeLabelsMovable = function(a) {
    this.edgeLabelsMovable = a
};
mxGraph.prototype.isSwimlaneNesting = function() {
    return this.swimlaneNesting
};
mxGraph.prototype.setSwimlaneNesting = function(a) {
    this.swimlaneNesting = a
};
mxGraph.prototype.isSwimlaneSelectionEnabled = function() {
    return this.swimlaneSelectionEnabled
};
mxGraph.prototype.setSwimlaneSelectionEnabled = function(a) {
    this.swimlaneSelectionEnabled = a
};
mxGraph.prototype.isMultigraph = function() {
    return this.multigraph
};
mxGraph.prototype.setMultigraph = function(a) {
    this.multigraph = a
};
mxGraph.prototype.isAllowLoops = function() {
    return this.allowLoops
};
mxGraph.prototype.setAllowDanglingEdges = function(a) {
    this.allowDanglingEdges = a
};
mxGraph.prototype.isAllowDanglingEdges = function() {
    return this.allowDanglingEdges
};
mxGraph.prototype.setConnectableEdges = function(a) {
    this.connectableEdges = a
};
mxGraph.prototype.isConnectableEdges = function() {
    return this.connectableEdges
};
mxGraph.prototype.setCloneInvalidEdges = function(a) {
    this.cloneInvalidEdges = a
};
mxGraph.prototype.isCloneInvalidEdges = function() {
    return this.cloneInvalidEdges
};
mxGraph.prototype.setAllowLoops = function(a) {
    this.allowLoops = a
};
mxGraph.prototype.isDisconnectOnMove = function() {
    return this.disconnectOnMove
};
mxGraph.prototype.setDisconnectOnMove = function(a) {
    this.disconnectOnMove = a
};
mxGraph.prototype.isDropEnabled = function() {
    return this.dropEnabled
};
mxGraph.prototype.setDropEnabled = function(a) {
    this.dropEnabled = a
};
mxGraph.prototype.isSplitEnabled = function() {
    return this.splitEnabled
};
mxGraph.prototype.setSplitEnabled = function(a) {
    this.splitEnabled = a
};
mxGraph.prototype.isCellResizable = function(a) {
    var b = this.view.getState(a),
        b = null != b ? b.style : this.getCellStyle(a);
    return this.isCellsResizable() && !this.isCellLocked(a) && 0 != b[mxConstants.STYLE_RESIZABLE]
};
mxGraph.prototype.isCellsResizable = function() {
    return this.cellsResizable
};
mxGraph.prototype.setCellsResizable = function(a) {
    this.cellsResizable = a
};
mxGraph.prototype.isTerminalPointMovable = function(a, b) {
    return !0
};
mxGraph.prototype.isCellBendable = function(a) {
    var b = this.view.getState(a),
        b = null != b ? b.style : this.getCellStyle(a);
    return this.isCellsBendable() && !this.isCellLocked(a) && 0 != b[mxConstants.STYLE_BENDABLE]
};
mxGraph.prototype.isCellsBendable = function() {
    return this.cellsBendable
};
mxGraph.prototype.setCellsBendable = function(a) {
    this.cellsBendable = a
};
mxGraph.prototype.isCellEditable = function(a) {
    var b = this.view.getState(a),
        b = null != b ? b.style : this.getCellStyle(a);
    return this.isCellsEditable() && !this.isCellLocked(a) && 0 != b[mxConstants.STYLE_EDITABLE]
};
mxGraph.prototype.isCellsEditable = function() {
    return this.cellsEditable
};
mxGraph.prototype.setCellsEditable = function(a) {
    this.cellsEditable = a
};
mxGraph.prototype.isCellDisconnectable = function(a, b, c) {
    return this.isCellsDisconnectable() && !this.isCellLocked(a)
};
mxGraph.prototype.isCellsDisconnectable = function() {
    return this.cellsDisconnectable
};
mxGraph.prototype.setCellsDisconnectable = function(a) {
    this.cellsDisconnectable = a
};
mxGraph.prototype.isValidSource = function(a) {
    return null == a && this.allowDanglingEdges || null != a && (!this.model.isEdge(a) || this.connectableEdges) && this.isCellConnectable(a)
};
mxGraph.prototype.isValidTarget = function(a) {
    return this.isValidSource(a)
};
mxGraph.prototype.isValidConnection = function(a, b) {
    return this.isValidSource(a) && this.isValidTarget(b)
};
mxGraph.prototype.setConnectable = function(a) {
    this.connectionHandler.setEnabled(a)
};
mxGraph.prototype.isConnectable = function(a) {
    return this.connectionHandler.isEnabled()
};
mxGraph.prototype.setTooltips = function(a) {
    this.tooltipHandler.setEnabled(a)
};
mxGraph.prototype.setPanning = function(a) {
    this.panningHandler.panningEnabled = a
};
mxGraph.prototype.isEditing = function(a) {
    if (null != this.cellEditor) {
        var b = this.cellEditor.getEditingCell();
        return null == a ? null != b : a == b
    }
    return !1
};
mxGraph.prototype.isAutoSizeCell = function(a) {
    var b = this.view.getState(a);
    a = null != b ? b.style : this.getCellStyle(a);
    return this.isAutoSizeCells() || 1 == a[mxConstants.STYLE_AUTOSIZE]
};
mxGraph.prototype.isAutoSizeCells = function() {
    return this.autoSizeCells
};
mxGraph.prototype.setAutoSizeCells = function(a) {
    this.autoSizeCells = a
};
mxGraph.prototype.isExtendParent = function(a) {
    return !this.getModel().isEdge(a) && this.isExtendParents()
};
mxGraph.prototype.isExtendParents = function() {
    return this.extendParents
};
mxGraph.prototype.setExtendParents = function(a) {
    this.extendParents = a
};
mxGraph.prototype.isExtendParentsOnAdd = function() {
    return this.extendParentsOnAdd
};
mxGraph.prototype.setExtendParentsOnAdd = function(a) {
    this.extendParentsOnAdd = a
};
mxGraph.prototype.isExtendParentsOnMove = function() {
    return this.extendParentsOnMove
};
mxGraph.prototype.setExtendParentsOnMove = function(a) {
    this.extendParentsOnMove = a
};
mxGraph.prototype.isRecursiveResize = function(a) {
    return this.recursiveResize
};
mxGraph.prototype.setRecursiveResize = function(a) {
    this.recursiveResize = a
};
mxGraph.prototype.isConstrainChild = function(a) {
    return this.isConstrainChildren() && !this.getModel().isEdge(this.getModel().getParent(a))
};
mxGraph.prototype.isConstrainChildren = function() {
    return this.constrainChildren
};
mxGraph.prototype.setConstrainChildrenOnResize = function(a) {
    this.constrainChildrenOnResize = a
};
mxGraph.prototype.isConstrainChildrenOnResize = function() {
    return this.constrainChildrenOnResize
};
mxGraph.prototype.setConstrainChildren = function(a) {
    this.constrainChildren = a
};
mxGraph.prototype.isAllowNegativeCoordinates = function() {
    return this.allowNegativeCoordinates
};
mxGraph.prototype.setAllowNegativeCoordinates = function(a) {
    this.allowNegativeCoordinates = a
};
mxGraph.prototype.getOverlap = function(a) {
    return this.isAllowOverlapParent(a) ? this.defaultOverlap : 0
};
mxGraph.prototype.isAllowOverlapParent = function(a) {
    return !1
};
mxGraph.prototype.getFoldableCells = function(a, b) {
    return this.model.filterCells(a, mxUtils.bind(this, function(a) {
        return this.isCellFoldable(a, b)
    }))
};
mxGraph.prototype.isCellFoldable = function(a, b) {
    var c = this.view.getState(a),
        c = null != c ? c.style : this.getCellStyle(a);
    return 0 < this.model.getChildCount(a) && 0 != c[mxConstants.STYLE_FOLDABLE]
};
mxGraph.prototype.isValidDropTarget = function(a, b, c) {
    return null != a && (this.isSplitEnabled() && this.isSplitTarget(a, b, c) || !this.model.isEdge(a) && (this.isSwimlane(a) || 0 < this.model.getChildCount(a) && !this.isCellCollapsed(a)))
};
mxGraph.prototype.isSplitTarget = function(a, b, c) {
    return this.model.isEdge(a) && null != b && 1 == b.length && this.isCellConnectable(b[0]) && null == this.getEdgeValidationError(a, this.model.getTerminal(a, !0), b[0]) ? (c = this.model.getTerminal(a, !0), a = this.model.getTerminal(a, !1), !this.model.isAncestor(b[0], c) && !this.model.isAncestor(b[0], a)) : !1
};
mxGraph.prototype.getDropTarget = function(a, b, c) {
    if (!this.isSwimlaneNesting())
        for (var d = 0; d < a.length; d++)
            if (this.isSwimlane(a[d])) return null;
    d = mxUtils.convertPoint(this.container, mxEvent.getClientX(b), mxEvent.getClientY(b));
    d.x -= this.panDx;
    d.y -= this.panDy;
    d = this.getSwimlaneAt(d.x, d.y);
    if (null == c) c = d;
    else if (null != d) {
        for (var e = this.model.getParent(d); null != e && this.isSwimlane(e) && e != c;) e = this.model.getParent(e);
        e == c && (c = d)
    }
    for (; null != c && !this.isValidDropTarget(c, a, b) && !this.model.isLayer(c);) c = this.model.getParent(c);
    for (b = c; null != b && 0 > mxUtils.indexOf(a, b);) b = this.model.getParent(b);
    return !this.model.isLayer(c) && null == b ? c : null
};
mxGraph.prototype.getDefaultParent = function() {
    var a = this.getCurrentRoot();
    null == a && (a = this.defaultParent, null == a && (a = this.model.getRoot(), a = this.model.getChildAt(a, 0)));
    return a
};
mxGraph.prototype.setDefaultParent = function(a) {
    this.defaultParent = a
};
mxGraph.prototype.getSwimlane = function(a) {
    for (; null != a && !this.isSwimlane(a);) a = this.model.getParent(a);
    return a
};
mxGraph.prototype.getSwimlaneAt = function(a, b, c) {
    c = c || this.getDefaultParent();
    if (null != c)
        for (var d = this.model.getChildCount(c), e = 0; e < d; e++) {
            var f = this.model.getChildAt(c, e),
                g = this.getSwimlaneAt(a, b, f);
            if (null != g) return g;
            if (this.isSwimlane(f) && (g = this.view.getState(f), this.intersects(g, a, b))) return f
        }
    return null
};
mxGraph.prototype.getCellAt = function(a, b, c, d, e) {
    d = null != d ? d : !0;
    e = null != e ? e : !0;
    null == c && (c = this.getCurrentRoot(), null == c && (c = this.getModel().getRoot()));
    if (null != c)
        for (var f = this.model.getChildCount(c) - 1; 0 <= f; f--) {
            var g = this.model.getChildAt(c, f),
                k = this.getCellAt(a, b, g, d, e);
            if (null != k) return k;
            if (this.isCellVisible(g) && (e && this.model.isEdge(g) || d && this.model.isVertex(g)))
                if (k = this.view.getState(g), this.intersects(k, a, b)) return g
        }
    return null
};
mxGraph.prototype.intersects = function(a, b, c) {
    if (null != a) {
        var d = a.absolutePoints;
        if (null != d) {
            a = this.tolerance * this.tolerance;
            for (var e = d[0], f = 1; f < d.length; f++) {
                var g = d[f];
                if (mxUtils.ptSegDistSq(e.x, e.y, g.x, g.y, b, c) <= a) return !0;
                e = g
            }
        } else if (e = mxUtils.toRadians(mxUtils.getValue(a.style, mxConstants.STYLE_ROTATION) || 0), 0 != e && (d = Math.cos(-e), e = Math.sin(-e), f = new mxPoint(a.getCenterX(), a.getCenterY()), e = mxUtils.getRotatedPoint(new mxPoint(b, c), d, e, f), b = e.x, c = e.y), mxUtils.contains(a, b, c)) return !0
    }
    return !1
};
mxGraph.prototype.hitsSwimlaneContent = function(a, b, c) {
    var d = this.getView().getState(a);
    a = this.getStartSize(a);
    if (null != d) {
        var e = this.getView().getScale();
        b -= d.x;
        c -= d.y;
        if (0 < a.width && 0 < b && b > a.width * e || 0 < a.height && 0 < c && c > a.height * e) return !0
    }
    return !1
};
mxGraph.prototype.getChildVertices = function(a) {
    return this.getChildCells(a, !0, !1)
};
mxGraph.prototype.getChildEdges = function(a) {
    return this.getChildCells(a, !1, !0)
};
mxGraph.prototype.getChildCells = function(a, b, c) {
    a = null != a ? a : this.getDefaultParent();
    a = this.model.getChildCells(a, null != b ? b : !1, null != c ? c : !1);
    b = [];
    for (c = 0; c < a.length; c++) this.isCellVisible(a[c]) && b.push(a[c]);
    return b
};
mxGraph.prototype.getConnections = function(a, b) {
    return this.getEdges(a, b, !0, !0, !1)
};
mxGraph.prototype.getIncomingEdges = function(a, b) {
    return this.getEdges(a, b, !0, !1, !1)
};
mxGraph.prototype.getOutgoingEdges = function(a, b) {
    return this.getEdges(a, b, !1, !0, !1)
};
mxGraph.prototype.getEdges = function(a, b, c, d, e, f) {
    c = null != c ? c : !0;
    d = null != d ? d : !0;
    e = null != e ? e : !0;
    f = null != f ? f : !1;
    for (var g = [], k = this.isCellCollapsed(a), l = this.model.getChildCount(a), m = 0; m < l; m++) {
        var n = this.model.getChildAt(a, m);
        if (k || !this.isCellVisible(n)) g = g.concat(this.model.getEdges(n, c, d))
    }
    g = g.concat(this.model.getEdges(a, c, d));
    k = [];
    for (m = 0; m < g.length; m++) n = this.view.getState(g[m]), l = null != n ? n.getVisibleTerminal(!0) : this.view.getVisibleTerminal(g[m], !0), n = null != n ? n.getVisibleTerminal(!1) : this.view.getVisibleTerminal(g[m], !1), (e && l == n || l != n && (c && n == a && (null == b || this.isValidAncestor(l, b, f)) || d && l == a && (null == b || this.isValidAncestor(n, b, f)))) && k.push(g[m]);
    return k
};
mxGraph.prototype.isValidAncestor = function(a, b, c) {
    return c ? this.model.isAncestor(b, a) : this.model.getParent(a) == b
};
mxGraph.prototype.getOpposites = function(a, b, c, d) {
    c = null != c ? c : !0;
    d = null != d ? d : !0;
    var e = [],
        f = {};
    if (null != a)
        for (var g = 0; g < a.length; g++) {
            var k = this.view.getState(a[g]),
                l = null != k ? k.getVisibleTerminal(!0) : this.view.getVisibleTerminal(a[g], !0),
                k = null != k ? k.getVisibleTerminal(!1) : this.view.getVisibleTerminal(a[g], !1);
            if (l == b && null != k && k != b && d) {
                var m = mxCellPath.create(k);
                null == f[m] && (f[m] = k, e.push(k))
            } else k == b && (null != l && l != b && c) && (m = mxCellPath.create(l), null == f[m] && (f[m] = l, e.push(l)))
        }
    return e
};
mxGraph.prototype.getEdgesBetween = function(a, b, c) {
    c = null != c ? c : !1;
    for (var d = this.getEdges(a), e = [], f = 0; f < d.length; f++) {
        var g = this.view.getState(d[f]),
            k = null != g ? g.getVisibleTerminal(!0) : this.view.getVisibleTerminal(d[f], !0),
            g = null != g ? g.getVisibleTerminal(!1) : this.view.getVisibleTerminal(d[f], !1);
        (k == a && g == b || !c && k == b && g == a) && e.push(d[f])
    }
    return e
};
mxGraph.prototype.getPointForEvent = function(a, b) {
    var c = mxUtils.convertPoint(this.container, mxEvent.getClientX(a), mxEvent.getClientY(a)),
        d = this.view.scale,
        e = this.view.translate,
        f = !1 != b ? this.gridSize / 2 : 0;
    c.x = this.snap(c.x / d - e.x - f);
    c.y = this.snap(c.y / d - e.y - f);
    return c
};
mxGraph.prototype.getCells = function(a, b, c, d, e, f) {
    f = null != f ? f : [];
    if (0 < c || 0 < d) {
        var g = a + c,
            k = b + d;
        null == e && (e = this.getCurrentRoot(), null == e && (e = this.getModel().getRoot()));
        if (null != e)
            for (var l = this.model.getChildCount(e), m = 0; m < l; m++) {
                var n = this.model.getChildAt(e, m),
                    p = this.view.getState(n);
                if (this.isCellVisible(n) && null != p) {
                    var q = p,
                        p = mxUtils.getValue(p.style, mxConstants.STYLE_ROTATION) || 0;
                    0 != p && (q = mxUtils.getBoundingBox(q, p));
                    q.x >= a && q.y + q.height <= k && q.y >= b && q.x + q.width <= g ? f.push(n) : this.getCells(a, b,
                        c, d, n, f)
                }
            }
    }
    return f
};
mxGraph.prototype.getCellsBeyond = function(a, b, c, d, e) {
    var f = [];
    if (d || e)
        if (null == c && (c = this.getDefaultParent()), null != c)
            for (var g = this.model.getChildCount(c), k = 0; k < g; k++) {
                var l = this.model.getChildAt(c, k),
                    m = this.view.getState(l);
                this.isCellVisible(l) && null != m && (!d || m.x >= a) && (!e || m.y >= b) && f.push(l)
            }
        return f
};
mxGraph.prototype.findTreeRoots = function(a, b, c) {
    b = null != b ? b : !1;
    c = null != c ? c : !1;
    var d = [];
    if (null != a) {
        for (var e = this.getModel(), f = e.getChildCount(a), g = null, k = 0, l = 0; l < f; l++) {
            var m = e.getChildAt(a, l);
            if (this.model.isVertex(m) && this.isCellVisible(m)) {
                for (var n = this.getConnections(m, b ? a : null), p = 0, q = 0, r = 0; r < n.length; r++) this.view.getVisibleTerminal(n[r], !0) == m ? p++ : q++;
                (c && 0 == p && 0 < q || !c && 0 == q && 0 < p) && d.push(m);
                n = c ? q - p : p - q;
                n > k && (k = n, g = m)
            }
        }
        0 == d.length && null != g && d.push(g)
    }
    return d
};
mxGraph.prototype.traverse = function(a, b, c, d, e) {
    if (null != c && null != a) {
        b = null != b ? b : !0;
        e = e || [];
        var f = mxCellPath.create(a);
        if (null == e[f] && (e[f] = a, d = c(a, d), null == d || d))
            if (d = this.model.getEdgeCount(a), 0 < d)
                for (f = 0; f < d; f++) {
                    var g = this.model.getEdgeAt(a, f),
                        k = this.model.getTerminal(g, !0) == a;
                    if (!b || k) k = this.model.getTerminal(g, !k), this.traverse(k, b, c, g, e)
                }
    }
};
mxGraph.prototype.isCellSelected = function(a) {
    return this.getSelectionModel().isSelected(a)
};
mxGraph.prototype.isSelectionEmpty = function() {
    return this.getSelectionModel().isEmpty()
};
mxGraph.prototype.clearSelection = function() {
    return this.getSelectionModel().clear()
};
mxGraph.prototype.getSelectionCount = function() {
    return this.getSelectionModel().cells.length
};
mxGraph.prototype.getSelectionCell = function() {
    return this.getSelectionModel().cells[0]
};
mxGraph.prototype.getSelectionCells = function() {
    return this.getSelectionModel().cells.slice()
};
mxGraph.prototype.setSelectionCell = function(a) {
    this.getSelectionModel().setCell(a)
};
mxGraph.prototype.setSelectionCells = function(a) {
    this.getSelectionModel().setCells(a)
};
mxGraph.prototype.addSelectionCell = function(a) {
    this.getSelectionModel().addCell(a)
};
mxGraph.prototype.addSelectionCells = function(a) {
    this.getSelectionModel().addCells(a)
};
mxGraph.prototype.removeSelectionCell = function(a) {
    this.getSelectionModel().removeCell(a)
};
mxGraph.prototype.removeSelectionCells = function(a) {
    this.getSelectionModel().removeCells(a)
};
mxGraph.prototype.selectRegion = function(a, b) {
    var c = this.getCells(a.x, a.y, a.width, a.height);
    this.selectCellsForEvent(c, b);
    return c
};
mxGraph.prototype.selectNextCell = function() {
    this.selectCell(!0)
};
mxGraph.prototype.selectPreviousCell = function() {
    this.selectCell()
};
mxGraph.prototype.selectParentCell = function() {
    this.selectCell(!1, !0)
};
mxGraph.prototype.selectChildCell = function() {
    this.selectCell(!1, !1, !0)
};
mxGraph.prototype.selectCell = function(a, b, c) {
    var d = this.selectionModel,
        e = 0 < d.cells.length ? d.cells[0] : null;
    1 < d.cells.length && d.clear();
    var d = null != e ? this.model.getParent(e) : this.getDefaultParent(),
        f = this.model.getChildCount(d);
    null == e && 0 < f ? (a = this.model.getChildAt(d, 0), this.setSelectionCell(a)) : (null == e || b) && null != this.view.getState(d) && null != this.model.getGeometry(d) ? this.getCurrentRoot() != d && this.setSelectionCell(d) : null != e && c ? 0 < this.model.getChildCount(e) && (a = this.model.getChildAt(e, 0), this.setSelectionCell(a)) :
        0 < f && (b = d.getIndex(e), a ? (b++, a = this.model.getChildAt(d, b % f)) : (b--, a = this.model.getChildAt(d, 0 > b ? f - 1 : b)), this.setSelectionCell(a))
};
mxGraph.prototype.selectAll = function(a) {
    a = a || this.getDefaultParent();
    a = this.model.getChildren(a);
    null != a && this.setSelectionCells(a)
};
mxGraph.prototype.selectVertices = function(a) {
    this.selectCells(!0, !1, a)
};
mxGraph.prototype.selectEdges = function(a) {
    this.selectCells(!1, !0, a)
};
mxGraph.prototype.selectCells = function(a, b, c) {
    c = c || this.getDefaultParent();
    var d = mxUtils.bind(this, function(c) {
        return null != this.view.getState(c) && 0 == this.model.getChildCount(c) && (this.model.isVertex(c) && a || this.model.isEdge(c) && b)
    });
    c = this.model.filterDescendants(d, c);
    this.setSelectionCells(c)
};
mxGraph.prototype.selectCellForEvent = function(a, b) {
    var c = this.isCellSelected(a);
    this.isToggleEvent(b) ? c ? this.removeSelectionCell(a) : this.addSelectionCell(a) : (!c || 1 != this.getSelectionCount()) && this.setSelectionCell(a)
};
mxGraph.prototype.selectCellsForEvent = function(a, b) {
    this.isToggleEvent(b) ? this.addSelectionCells(a) : this.setSelectionCells(a)
};
mxGraph.prototype.createHandler = function(a) {
    var b = null;
    null != a && (this.model.isEdge(a.cell) ? (b = this.view.getEdgeStyle(a), b = this.isLoop(a) || b == mxEdgeStyle.ElbowConnector || b == mxEdgeStyle.SideToSide || b == mxEdgeStyle.TopToBottom ? new mxElbowEdgeHandler(a) : b == mxEdgeStyle.SegmentConnector || b == mxEdgeStyle.OrthConnector ? new mxEdgeSegmentHandler(a) : new mxEdgeHandler(a)) : b = new mxVertexHandler(a));
    return b
};
mxGraph.prototype.addMouseListener = function(a) {
    null == this.mouseListeners && (this.mouseListeners = []);
    this.mouseListeners.push(a)
};
mxGraph.prototype.removeMouseListener = function(a) {
    if (null != this.mouseListeners)
        for (var b = 0; b < this.mouseListeners.length; b++)
            if (this.mouseListeners[b] == a) {
                this.mouseListeners.splice(b, 1);
                break
            }
};
mxGraph.prototype.updateMouseEvent = function(a) {
    if (null == a.graphX || null == a.graphY) {
        var b = mxUtils.convertPoint(this.container, a.getX(), a.getY());
        a.graphX = b.x - this.panDx;
        a.graphY = b.y - this.panDy
    }
    return a
};
mxGraph.prototype.getStateForTouchEvent = function(a) {
    var b = mxEvent.getClientX(a);
    a = mxEvent.getClientY(a);
    b = mxUtils.convertPoint(this.container, b, a);
    return this.view.getState(this.getCellAt(b.x, b.y))
};
mxGraph.prototype.isEventIgnored = function(a, b, c) {
    var d = mxEvent.isMouseEvent(b.getEvent()),
        e = this.isEditing();
    b.getEvent() == this.lastEvent ? e = !0 : this.lastEvent = b.getEvent();
    null != this.eventSource && a != mxEvent.MOUSE_MOVE ? (mxEvent.removeGestureListeners(this.eventSource, null, this.mouseMoveRedirect, this.mouseUpRedirect), this.eventSource = this.mouseUpRedirect = this.mouseMoveRedirect = null) : null != this.eventSource && b.getSource() != this.eventSource ? e = !0 : mxClient.IS_TOUCH && (a == mxEvent.MOUSE_DOWN && !d) && (this.eventSource =
        b.getSource(), this.mouseMoveRedirect = mxUtils.bind(this, function(a) {
            this.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(a, this.getStateForTouchEvent(a)))
        }), this.mouseUpRedirect = mxUtils.bind(this, function(a) {
            this.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(a, this.getStateForTouchEvent(a)))
        }), mxEvent.addGestureListeners(this.eventSource, null, this.mouseMoveRedirect, this.mouseUpRedirect));
    this.isSyntheticEventIgnored(a, b, c) && (e = !0);
    if (!mxEvent.isPopupTrigger(this.lastEvent) && a != mxEvent.MOUSE_MOVE &&
        2 == this.lastEvent.detail) return !0;
    if (a == mxEvent.MOUSE_UP && this.isMouseDown) this.isMouseDown = !1;
    else if (a == mxEvent.MOUSE_DOWN && !this.isMouseDown) this.isMouseDown = !0, this.isMouseTrigger = d;
    else if (!e && ((!mxClient.IS_FF || a != mxEvent.MOUSE_MOVE) && this.isMouseDown && this.isMouseTrigger != d || a == mxEvent.MOUSE_DOWN && this.isMouseDown || a == mxEvent.MOUSE_UP && !this.isMouseDown)) e = !0;
    !e && a == mxEvent.MOUSE_DOWN && (this.lastMouseX = b.getX(), this.lastMouseY = b.getY());
    return e
};
mxGraph.prototype.isSyntheticEventIgnored = function(a, b, c) {
    c = !1;
    b = mxEvent.isMouseEvent(b.getEvent());
    this.ignoreMouseEvents && b && a != mxEvent.MOUSE_MOVE ? (this.ignoreMouseEvents = a != mxEvent.MOUSE_UP, c = !0) : mxClient.IS_FF && (!b && a == mxEvent.MOUSE_UP) && (this.ignoreMouseEvents = !0);
    return c
};
mxGraph.prototype.isEventSourceIgnored = function(a, b) {
    var c = b.getSource(),
        d = null != c.nodeName ? c.nodeName.toLowerCase() : "",
        e = !mxEvent.isMouseEvent(b.getEvent()) || mxEvent.isLeftMouseButton(b.getEvent());
    return a == mxEvent.MOUSE_DOWN && e && ("select" == d || "option" == d || "input" == d && "checkbox" != c.type && "radio" != c.type && "button" != c.type && "submit" != c.type && "file" != c.type)
};
mxGraph.prototype.fireMouseEvent = function(a, b, c) {
    if (this.isEventSourceIgnored(a, b)) null != this.tooltipHandler && this.tooltipHandler.hide();
    else {
        null == c && (c = this);
        b = this.updateMouseEvent(b);
        a == mxEvent.MOUSE_DOWN && (this.isEditing() && !this.cellEditor.isEventSource(b.getEvent())) && this.stopEditing(!this.isInvokesStopCellEditing());
        if (!this.nativeDblClickEnabled && !mxEvent.isPopupTrigger(b.getEvent()) || this.doubleTapEnabled && mxClient.IS_TOUCH && mxEvent.isTouchEvent(b.getEvent())) {
            var d = (new Date).getTime();
            if (!mxClient.IS_QUIRKS && a == mxEvent.MOUSE_DOWN || mxClient.IS_QUIRKS && a == mxEvent.MOUSE_UP && !this.fireDoubleClick)
                if (null != this.lastTouchEvent && this.lastTouchEvent != b.getEvent() && d - this.lastTouchTime < this.doubleTapTimeout && Math.abs(this.lastTouchX - b.getX()) < this.doubleTapTolerance && Math.abs(this.lastTouchY - b.getY()) < this.doubleTapTolerance && 2 > this.doubleClickCounter) {
                    if (this.doubleClickCounter++, d = !1, a == mxEvent.MOUSE_UP ? b.getCell() == this.lastTouchCell && null != this.lastTouchCell && (this.lastTouchTime = 0,
                        d = this.lastTouchCell, this.lastTouchCell = null, this.dblClick(b.getEvent(), d), d = !0) : (this.fireDoubleClick = !0, this.lastTouchTime = 0), !mxClient.IS_QUIRKS || d) {
                        mxEvent.consume(b.getEvent());
                        return
                    }
                } else {
                    if (null == this.lastTouchEvent || this.lastTouchEvent != b.getEvent()) this.lastTouchCell = b.getCell(), this.lastTouchX = b.getX(), this.lastTouchY = b.getY(), this.lastTouchTime = d, this.lastTouchEvent = b.getEvent(), this.doubleClickCounter = 0
                } else if ((this.isMouseDown || a == mxEvent.MOUSE_UP) && this.fireDoubleClick) {
                this.fireDoubleClick = !1;
                d = this.lastTouchCell;
                this.lastTouchCell = null;
                this.isMouseDown = !1;
                (null != d || mxEvent.isTouchEvent(b.getEvent()) && (mxClient.IS_GC || mxClient.IS_SF)) && Math.abs(this.lastTouchX - b.getX()) < this.doubleTapTolerance && Math.abs(this.lastTouchY - b.getY()) < this.doubleTapTolerance ? this.dblClick(b.getEvent(), d) : mxEvent.consume(b.getEvent());
                return
            }
        }
        if (!this.isEventIgnored(a, b, c)) {
            this.fireEvent(new mxEventObject(mxEvent.FIRE_MOUSE_EVENT, "eventName", a, "event", b));
            if (mxClient.IS_OP || mxClient.IS_SF || mxClient.IS_GC ||
                mxClient.IS_IE && mxClient.IS_SVG || b.getEvent().target != this.container) {
                a == mxEvent.MOUSE_MOVE && (this.isMouseDown && this.autoScroll && !mxEvent.isMultiTouchEvent(b.getEvent)) && this.scrollPointToVisible(b.getGraphX(), b.getGraphY(), this.autoExtend);
                if (null != this.mouseListeners) {
                    d = [c, b];
                    b.getEvent().preventDefault || (b.getEvent().returnValue = !0);
                    for (var e = 0; e < this.mouseListeners.length; e++) {
                        var f = this.mouseListeners[e];
                        a == mxEvent.MOUSE_DOWN ? f.mouseDown.apply(f, d) : a == mxEvent.MOUSE_MOVE ? f.mouseMove.apply(f, d) :
                            a == mxEvent.MOUSE_UP && f.mouseUp.apply(f, d)
                    }
                }
                a == mxEvent.MOUSE_UP && this.click(b)
            }
            mxEvent.isTouchEvent(b.getEvent()) && a == mxEvent.MOUSE_DOWN && this.tapAndHoldEnabled && !this.tapAndHoldInProgress ? (this.tapAndHoldInProgress = !0, this.initialTouchX = b.getGraphX(), this.initialTouchY = b.getGraphY(), this.tapAndHoldThread && window.clearTimeout(this.tapAndHoldThread), this.tapAndHoldThread = window.setTimeout(mxUtils.bind(this, function() {
                this.tapAndHoldValid && this.tapAndHold(b);
                this.tapAndHoldValid = this.tapAndHoldInProgress = !1
            }), this.tapAndHoldDelay), this.tapAndHoldValid = !0) : a == mxEvent.MOUSE_UP ? this.tapAndHoldValid = this.tapAndHoldInProgress = !1 : this.tapAndHoldValid && (this.tapAndHoldValid = Math.abs(this.initialTouchX - b.getGraphX()) < this.tolerance && Math.abs(this.initialTouchY - b.getGraphY()) < this.tolerance);
            this.consumeMouseEvent(a, b, c)
        }
    }
};
mxGraph.prototype.consumeMouseEvent = function(a, b, c) {
    a == mxEvent.MOUSE_DOWN && mxEvent.isTouchEvent(b.getEvent()) && b.consume(!1)
};
mxGraph.prototype.fireGestureEvent = function(a, b) {
    this.lastTouchTime = 0;
    this.fireEvent(new mxEventObject(mxEvent.GESTURE, "event", a, "cell", b))
};
mxGraph.prototype.destroy = function() {
    this.destroyed || (this.destroyed = !0, null != this.tooltipHandler && this.tooltipHandler.destroy(), null != this.selectionCellsHandler && this.selectionCellsHandler.destroy(), null != this.panningHandler && this.panningHandler.destroy(), null != this.popupMenuHandler && this.popupMenuHandler.destroy(), null != this.connectionHandler && this.connectionHandler.destroy(), null != this.graphHandler && this.graphHandler.destroy(), null != this.cellEditor && this.cellEditor.destroy(), null != this.view && this.view.destroy(),
        null != this.model && null != this.graphModelChangeListener && (this.model.removeListener(this.graphModelChangeListener), this.graphModelChangeListener = null), this.container = null)
};

function mxCellOverlay(a, b, c, d, e, f) {
    this.image = a;
    this.tooltip = b;
    this.align = null != c ? c : this.align;
    this.verticalAlign = null != d ? d : this.verticalAlign;
    this.offset = null != e ? e : new mxPoint;
    this.cursor = null != f ? f : "help"
}
mxCellOverlay.prototype = new mxEventSource;
mxCellOverlay.prototype.constructor = mxCellOverlay;
mxCellOverlay.prototype.image = null;
mxCellOverlay.prototype.tooltip = null;
mxCellOverlay.prototype.align = mxConstants.ALIGN_RIGHT;
mxCellOverlay.prototype.verticalAlign = mxConstants.ALIGN_BOTTOM;
mxCellOverlay.prototype.offset = null;
mxCellOverlay.prototype.cursor = null;
mxCellOverlay.prototype.defaultOverlap = 0.5;
mxCellOverlay.prototype.getBounds = function(a) {
    var b = a.view.graph.getModel().isEdge(a.cell),
        c = a.view.scale,
        d = null,
        e = this.image.width,
        f = this.image.height;
    b ? (b = a.absolutePoints, 1 == b.length % 2 ? d = b[Math.floor(b.length / 2)] : (d = b.length / 2, a = b[d - 1], b = b[d], d = new mxPoint(a.x + (b.x - a.x) / 2, a.y + (b.y - a.y) / 2))) : (d = new mxPoint, d.x = this.align == mxConstants.ALIGN_LEFT ? a.x : this.align == mxConstants.ALIGN_CENTER ? a.x + a.width / 2 : a.x + a.width, d.y = this.verticalAlign == mxConstants.ALIGN_TOP ? a.y : this.verticalAlign == mxConstants.ALIGN_MIDDLE ?
        a.y + a.height / 2 : a.y + a.height);
    return new mxRectangle(Math.round(d.x - (e * this.defaultOverlap - this.offset.x) * c), Math.round(d.y - (f * this.defaultOverlap - this.offset.y) * c), e * c, f * c)
};
mxCellOverlay.prototype.toString = function() {
    return this.tooltip
};

function mxOutline(a, b) {
    this.source = a;
    null != b && this.init(b)
}
mxOutline.prototype.source = null;
mxOutline.prototype.outline = null;
mxOutline.prototype.graphRenderHint = mxConstants.RENDERING_HINT_FASTER;
mxOutline.prototype.enabled = !0;
mxOutline.prototype.showViewport = !0;
mxOutline.prototype.border = 10;
mxOutline.prototype.sizerSize = 8;
mxOutline.prototype.labelsVisible = !1;
mxOutline.prototype.updateOnPan = !1;
mxOutline.prototype.sizerImage = null;
mxOutline.prototype.suspended = !1;
mxOutline.prototype.forceVmlHandles = 8 == document.documentMode;
mxOutline.prototype.createGraph = function(a) {
    a = new mxGraph(a, this.source.getModel(), this.graphRenderHint, this.source.getStylesheet());
    a.foldingEnabled = !1;
    a.autoScroll = !1;
    return a
};
mxOutline.prototype.init = function(a) {
    this.outline = this.createGraph(a);
    var b = this.outline.graphModelChanged;
    this.outline.graphModelChanged = mxUtils.bind(this, function(a) {
        !this.suspended && null != this.outline && b.apply(this.outline, arguments)
    });
    mxClient.IS_SVG && (a = this.outline.getView().getCanvas().parentNode, a.setAttribute("shape-rendering", "optimizeSpeed"), a.setAttribute("image-rendering", "optimizeSpeed"));
    this.outline.labelsVisible = this.labelsVisible;
    this.outline.setEnabled(!1);
    this.updateHandler = mxUtils.bind(this,
        function(a, b) {
            !this.suspended && !this.active && this.update()
        });
    this.source.getModel().addListener(mxEvent.CHANGE, this.updateHandler);
    this.outline.addMouseListener(this);
    a = this.source.getView();
    a.addListener(mxEvent.SCALE, this.updateHandler);
    a.addListener(mxEvent.TRANSLATE, this.updateHandler);
    a.addListener(mxEvent.SCALE_AND_TRANSLATE, this.updateHandler);
    a.addListener(mxEvent.DOWN, this.updateHandler);
    a.addListener(mxEvent.UP, this.updateHandler);
    mxEvent.addListener(this.source.container, "scroll", this.updateHandler);
    this.panHandler = mxUtils.bind(this, function(a) {
        this.updateOnPan && this.updateHandler.apply(this, arguments)
    });
    this.source.addListener(mxEvent.PAN, this.panHandler);
    this.refreshHandler = mxUtils.bind(this, function(a) {
        this.outline.setStylesheet(this.source.getStylesheet());
        this.outline.refresh()
    });
    this.source.addListener(mxEvent.REFRESH, this.refreshHandler);
    this.bounds = new mxRectangle(0, 0, 0, 0);
    this.selectionBorder = new mxRectangleShape(this.bounds, null, mxConstants.OUTLINE_COLOR, mxConstants.OUTLINE_STROKEWIDTH);
    this.selectionBorder.dialect = this.outline.dialect;
    this.forceVmlHandles && (this.selectionBorder.isHtmlAllowed = function() {
        return !1
    });
    this.selectionBorder.init(this.outline.getView().getOverlayPane());
    a = mxUtils.bind(this, function(a) {
        var b = mxEvent.getSource(a),
            e = mxUtils.bind(this, function(a) {
                this.outline.fireMouseEvent(mxEvent.MOUSE_MOVE, new mxMouseEvent(a))
            }),
            f = mxUtils.bind(this, function(a) {
                mxEvent.removeGestureListeners(b, null, e, f);
                this.outline.fireMouseEvent(mxEvent.MOUSE_UP, new mxMouseEvent(a))
            });
        mxEvent.addGestureListeners(b, null, e, f);
        this.outline.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(a))
    });
    mxEvent.addGestureListeners(this.selectionBorder.node, a);
    this.sizer = this.createSizer();
    this.forceVmlHandles && (this.sizer.isHtmlAllowed = function() {
        return !1
    });
    this.sizer.init(this.outline.getView().getOverlayPane());
    this.enabled && (this.sizer.node.style.cursor = "pointer");
    mxEvent.addGestureListeners(this.sizer.node, a);
    this.selectionBorder.node.style.display = this.showViewport ? "" : "none";
    this.sizer.node.style.display =
        this.selectionBorder.node.style.display;
    this.selectionBorder.node.style.cursor = "move";
    this.update(!1)
};
mxOutline.prototype.isEnabled = function() {
    return this.enabled
};
mxOutline.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxOutline.prototype.setZoomEnabled = function(a) {
    this.sizer.node.style.visibility = a ? "visible" : "hidden"
};
mxOutline.prototype.refresh = function() {
    this.update(!0)
};
mxOutline.prototype.createSizer = function() {
    var a = null != this.sizerImage ? new mxImageShape(new mxRectangle(0, 0, this.sizerImage.width, this.sizerImage.height), this.sizerImage.src) : new mxRectangleShape(new mxRectangle(0, 0, this.sizerSize, this.sizerSize), mxConstants.OUTLINE_HANDLE_FILLCOLOR, mxConstants.OUTLINE_HANDLE_STROKECOLOR);
    a.dialect = this.outline.dialect;
    return a
};
mxOutline.prototype.getSourceContainerSize = function() {
    return new mxRectangle(0, 0, this.source.container.scrollWidth, this.source.container.scrollHeight)
};
mxOutline.prototype.getOutlineOffset = function(a) {
    return null
};
mxOutline.prototype.getSourceGraphBounds = function() {
    return this.source.getGraphBounds()
};
mxOutline.prototype.update = function(a) {
    if (null != this.source && null != this.outline) {
        var b = this.source.view.scale,
            c = this.getSourceGraphBounds(),
            c = new mxRectangle(c.x / b + this.source.panDx, c.y / b + this.source.panDy, c.width / b, c.height / b),
            d = new mxRectangle(0, 0, this.source.container.clientWidth / b, this.source.container.clientHeight / b),
            e = c.clone();
        e.add(d);
        var f = this.getSourceContainerSize(),
            d = Math.max(f.width / b, e.width),
            b = Math.max(f.height / b, e.height),
            e = Math.max(0, this.outline.container.clientWidth - this.border),
            f = Math.max(0, this.outline.container.clientHeight - this.border),
            d = Math.min(e / d, f / b),
            e = Math.floor(100 * d) / 100;
        if (0 < e) {
            this.outline.getView().scale != e && (this.outline.getView().scale = e, a = !0);
            d = this.outline.getView();
            d.currentRoot != this.source.getView().currentRoot && d.setCurrentRoot(this.source.getView().currentRoot);
            var b = this.source.view.translate,
                f = b.x + this.source.panDx,
                g = b.y + this.source.panDy,
                e = this.getOutlineOffset(e);
            null != e && (f += e.x, g += e.y);
            0 > c.x && (f -= c.x);
            0 > c.y && (g -= c.y);
            if (d.translate.x != f || d.translate.y !=
                g) d.translate.x = f, d.translate.y = g, a = !0;
            var c = d.translate,
                e = this.source.getView().scale,
                f = e / d.scale,
                g = 1 / d.scale,
                k = this.source.container;
            this.bounds = new mxRectangle((c.x - b.x - this.source.panDx) / g, (c.y - b.y - this.source.panDy) / g, k.clientWidth / f, k.clientHeight / f);
            this.bounds.x += this.source.container.scrollLeft * d.scale / e;
            this.bounds.y += this.source.container.scrollTop * d.scale / e;
            c = this.selectionBorder.bounds;
            if (c.x != this.bounds.x || c.y != this.bounds.y || c.width != this.bounds.width || c.height != this.bounds.height) this.selectionBorder.bounds =
                this.bounds, this.selectionBorder.redraw();
            c = this.sizer.bounds;
            d = new mxRectangle(this.bounds.x + this.bounds.width - c.width / 2, this.bounds.y + this.bounds.height - c.height / 2, c.width, c.height);
            if (c.x != d.x || c.y != d.y || c.width != d.width || c.height != d.height) this.sizer.bounds = d, "hidden" != this.sizer.node.style.visibility && this.sizer.redraw();
            a && this.outline.view.revalidate()
        }
    }
};
mxOutline.prototype.mouseDown = function(a, b) {
    if (this.enabled && this.showViewport) {
        var c = !mxEvent.isMouseEvent(b.getEvent()) ? this.source.tolerance : 0,
            c = this.source.allowHandleBoundsCheck && (mxClient.IS_IE || 0 < c) ? new mxRectangle(b.getGraphX() - c, b.getGraphY() - c, 2 * c, 2 * c) : null;
        this.zoom = b.isSource(this.sizer) || null != c && mxUtils.intersects(shape.bounds, c);
        this.startX = b.getX();
        this.startY = b.getY();
        this.active = !0;
        this.source.useScrollbarsForPanning && mxUtils.hasScrollbars(this.source.container) ? (this.dx0 = this.source.container.scrollLeft,
            this.dy0 = this.source.container.scrollTop) : this.dy0 = this.dx0 = 0
    }
    b.consume()
};
mxOutline.prototype.mouseMove = function(a, b) {
    if (this.active) {
        this.selectionBorder.node.style.display = this.showViewport ? "" : "none";
        this.sizer.node.style.display = this.selectionBorder.node.style.display;
        var c = this.getTranslateForEvent(b),
            d = c.x,
            e = c.y,
            c = null;
        if (this.zoom) c = this.source.container, e = d / (c.clientWidth / c.clientHeight), c = new mxRectangle(this.bounds.x, this.bounds.y, Math.max(1, this.bounds.width + d), Math.max(1, this.bounds.height + e)), this.selectionBorder.bounds = c, this.selectionBorder.redraw();
        else {
            var f =
                this.outline.getView().scale,
                c = new mxRectangle(this.bounds.x + d, this.bounds.y + e, this.bounds.width, this.bounds.height);
            this.selectionBorder.bounds = c;
            this.selectionBorder.redraw();
            d = d / f * this.source.getView().scale;
            e = e / f * this.source.getView().scale;
            this.source.panGraph(-d - this.dx0, -e - this.dy0)
        }
        d = this.sizer.bounds;
        this.sizer.bounds = new mxRectangle(c.x + c.width - d.width / 2, c.y + c.height - d.height / 2, d.width, d.height);
        "hidden" != this.sizer.node.style.visibility && this.sizer.redraw();
        b.consume()
    }
};
mxOutline.prototype.getTranslateForEvent = function(a) {
    return new mxPoint(a.getX() - this.startX, a.getY() - this.startY)
};
mxOutline.prototype.mouseUp = function(a, b) {
    if (this.active) {
        var c = this.getTranslateForEvent(b),
            d = c.x,
            c = c.y;
        if (0 < Math.abs(d) || 0 < Math.abs(c)) {
            if (this.zoom) {
                var c = this.selectionBorder.bounds.width,
                    e = this.source.getView().scale;
                this.source.zoomTo(e - d * e / c, !1)
            } else if (!this.source.useScrollbarsForPanning || !mxUtils.hasScrollbars(this.source.container)) this.source.panGraph(0, 0), d /= this.outline.getView().scale, c /= this.outline.getView().scale, e = this.source.getView().translate, this.source.getView().setTranslate(e.x -
                d, e.y - c);
            this.update();
            b.consume()
        }
        this.index = null;
        this.active = !1
    }
};
mxOutline.prototype.destroy = function() {
    null != this.source && (this.source.removeListener(this.panHandler), this.source.removeListener(this.refreshHandler), this.source.getModel().removeListener(this.updateHandler), this.source.getView().removeListener(this.updateHandler), mxEvent.addListener(this.source.container, "scroll", this.updateHandler), this.source = null);
    null != this.outline && (this.outline.removeMouseListener(this), this.outline.destroy(), this.outline = null);
    null != this.selectionBorder && (this.selectionBorder.destroy(),
        this.selectionBorder = null);
    null != this.sizer && (this.sizer.destroy(), this.sizer = null)
};

function mxMultiplicity(a, b, c, d, e, f, g, k, l, m) {
    this.source = a;
    this.type = b;
    this.attr = c;
    this.value = d;
    this.min = null != e ? e : 0;
    this.max = null != f ? f : "n";
    this.validNeighbors = g;
    this.countError = mxResources.get(k) || k;
    this.typeError = mxResources.get(l) || l;
    this.validNeighborsAllowed = null != m ? m : !0
}
mxMultiplicity.prototype.type = null;
mxMultiplicity.prototype.attr = null;
mxMultiplicity.prototype.value = null;
mxMultiplicity.prototype.source = null;
mxMultiplicity.prototype.min = null;
mxMultiplicity.prototype.max = null;
mxMultiplicity.prototype.validNeighbors = null;
mxMultiplicity.prototype.validNeighborsAllowed = !0;
mxMultiplicity.prototype.countError = null;
mxMultiplicity.prototype.typeError = null;
mxMultiplicity.prototype.check = function(a, b, c, d, e, f) {
    var g = "";
    if (this.source && this.checkTerminal(a, c, b) || !this.source && this.checkTerminal(a, d, b)) {
        if (null != this.countError && (this.source && (0 == this.max || e >= this.max) || !this.source && (0 == this.max || f >= this.max))) g += this.countError + "\n";
        null != this.validNeighbors && (null != this.typeError && 0 < this.validNeighbors.length) && (this.checkNeighbors(a, b, c, d) || (g += this.typeError + "\n"))
    }
    return 0 < g.length ? g : null
};
mxMultiplicity.prototype.checkNeighbors = function(a, b, c, d) {
    b = a.model.getValue(c);
    d = a.model.getValue(d);
    c = !this.validNeighborsAllowed;
    for (var e = this.validNeighbors, f = 0; f < e.length; f++)
        if (this.source && this.checkType(a, d, e[f])) {
            c = this.validNeighborsAllowed;
            break
        } else if (!this.source && this.checkType(a, b, e[f])) {
        c = this.validNeighborsAllowed;
        break
    }
    return c
};
mxMultiplicity.prototype.checkTerminal = function(a, b, c) {
    b = a.model.getValue(b);
    return this.checkType(a, b, this.type, this.attr, this.value)
};
mxMultiplicity.prototype.checkType = function(a, b, c, d, e) {
    return null != b ? isNaN(b.nodeType) ? b == c : mxUtils.isNode(b, c, d, e) : !1
};

function mxLayoutManager(a) {
    this.undoHandler = mxUtils.bind(this, function(a, c) {
        this.isEnabled() && this.beforeUndo(c.getProperty("edit"))
    });
    this.moveHandler = mxUtils.bind(this, function(a, c) {
        this.isEnabled() && this.cellsMoved(c.getProperty("cells"), c.getProperty("event"))
    });
    this.setGraph(a)
}
mxLayoutManager.prototype = new mxEventSource;
mxLayoutManager.prototype.constructor = mxLayoutManager;
mxLayoutManager.prototype.graph = null;
mxLayoutManager.prototype.bubbling = !0;
mxLayoutManager.prototype.enabled = !0;
mxLayoutManager.prototype.updateHandler = null;
mxLayoutManager.prototype.moveHandler = null;
mxLayoutManager.prototype.isEnabled = function() {
    return this.enabled
};
mxLayoutManager.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxLayoutManager.prototype.isBubbling = function() {
    return this.bubbling
};
mxLayoutManager.prototype.setBubbling = function(a) {
    this.bubbling = a
};
mxLayoutManager.prototype.getGraph = function() {
    return this.graph
};
mxLayoutManager.prototype.setGraph = function(a) {
    if (null != this.graph) {
        var b = this.graph.getModel();
        b.removeListener(this.undoHandler);
        this.graph.removeListener(this.moveHandler)
    }
    this.graph = a;
    null != this.graph && (b = this.graph.getModel(), b.addListener(mxEvent.BEFORE_UNDO, this.undoHandler), this.graph.addListener(mxEvent.MOVE_CELLS, this.moveHandler))
};
mxLayoutManager.prototype.getLayout = function(a) {
    return null
};
mxLayoutManager.prototype.beforeUndo = function(a) {
    a = this.getCellsForChanges(a.changes);
    var b = this.getGraph().getModel();
    if (this.isBubbling())
        for (var c = b.getParents(a); 0 < c.length;) a = a.concat(c), c = b.getParents(c);
    this.layoutCells(mxUtils.sortCells(a, !1))
};
mxLayoutManager.prototype.cellsMoved = function(a, b) {
    if (null != a && null != b)
        for (var c = mxUtils.convertPoint(this.getGraph().container, mxEvent.getClientX(b), mxEvent.getClientY(b)), d = this.getGraph().getModel(), e = 0; e < a.length; e++) {
            var f = this.getLayout(d.getParent(a[e]));
            null != f && f.moveCell(a[e], c.x, c.y)
        }
};
mxLayoutManager.prototype.getCellsForChanges = function(a) {
    for (var b = [], c = {}, d = 0; d < a.length; d++) {
        var e = a[d];
        if (e instanceof mxRootChange) return [];
        for (var e = this.getCellsForChange(e), f = 0; f < e.length; f++)
            if (null != e[f]) {
                var g = mxCellPath.create(e[f]);
                null == c[g] && (c[g] = e[f], b.push(e[f]))
            }
    }
    return b
};
mxLayoutManager.prototype.getCellsForChange = function(a) {
    var b = this.getGraph().getModel();
    return a instanceof mxChildChange ? [a.child, a.previous, b.getParent(a.child)] : a instanceof mxTerminalChange || a instanceof mxGeometryChange ? [a.cell, b.getParent(a.cell)] : a instanceof mxVisibleChange || a instanceof mxStyleChange ? [a.cell] : []
};
mxLayoutManager.prototype.layoutCells = function(a) {
    if (0 < a.length) {
        var b = this.getGraph().getModel();
        b.beginUpdate();
        try {
            for (var c = null, d = 0; d < a.length; d++) a[d] != b.getRoot() && a[d] != c && (c = a[d], this.executeLayout(this.getLayout(c), c));
            this.fireEvent(new mxEventObject(mxEvent.LAYOUT_CELLS, "cells", a))
        } finally {
            b.endUpdate()
        }
    }
};
mxLayoutManager.prototype.executeLayout = function(a, b) {
    null != a && null != b && a.execute(b)
};
mxLayoutManager.prototype.destroy = function() {
    this.setGraph(null)
};

function mxSpaceManager(a, b, c, d) {
    this.resizeHandler = mxUtils.bind(this, function(a, b) {
        this.isEnabled() && this.cellsResized(b.getProperty("cells"))
    });
    this.foldHandler = mxUtils.bind(this, function(a, b) {
        this.isEnabled() && this.cellsResized(b.getProperty("cells"))
    });
    this.shiftRightwards = null != b ? b : !0;
    this.shiftDownwards = null != c ? c : !0;
    this.extendParents = null != d ? d : !0;
    this.setGraph(a)
}
mxSpaceManager.prototype = new mxEventSource;
mxSpaceManager.prototype.constructor = mxSpaceManager;
mxSpaceManager.prototype.graph = null;
mxSpaceManager.prototype.enabled = !0;
mxSpaceManager.prototype.shiftRightwards = !0;
mxSpaceManager.prototype.shiftDownwards = !0;
mxSpaceManager.prototype.extendParents = !0;
mxSpaceManager.prototype.resizeHandler = null;
mxSpaceManager.prototype.foldHandler = null;
mxSpaceManager.prototype.isCellIgnored = function(a) {
    return !this.getGraph().getModel().isVertex(a)
};
mxSpaceManager.prototype.isCellShiftable = function(a) {
    return this.getGraph().getModel().isVertex(a) && this.getGraph().isCellMovable(a)
};
mxSpaceManager.prototype.isEnabled = function() {
    return this.enabled
};
mxSpaceManager.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxSpaceManager.prototype.isShiftRightwards = function() {
    return this.shiftRightwards
};
mxSpaceManager.prototype.setShiftRightwards = function(a) {
    this.shiftRightwards = a
};
mxSpaceManager.prototype.isShiftDownwards = function() {
    return this.shiftDownwards
};
mxSpaceManager.prototype.setShiftDownwards = function(a) {
    this.shiftDownwards = a
};
mxSpaceManager.prototype.isExtendParents = function() {
    return this.extendParents
};
mxSpaceManager.prototype.setExtendParents = function(a) {
    this.extendParents = a
};
mxSpaceManager.prototype.getGraph = function() {
    return this.graph
};
mxSpaceManager.prototype.setGraph = function(a) {
    null != this.graph && (this.graph.removeListener(this.resizeHandler), this.graph.removeListener(this.foldHandler));
    this.graph = a;
    null != this.graph && (this.graph.addListener(mxEvent.RESIZE_CELLS, this.resizeHandler), this.graph.addListener(mxEvent.FOLD_CELLS, this.foldHandler))
};
mxSpaceManager.prototype.cellsResized = function(a) {
    if (null != a) {
        var b = this.graph.getModel();
        b.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++)
                if (!this.isCellIgnored(a[c])) {
                    this.cellResized(a[c]);
                    break
                }
        } finally {
            b.endUpdate()
        }
    }
};
mxSpaceManager.prototype.cellResized = function(a) {
    var b = this.getGraph(),
        c = b.getView(),
        d = b.getModel(),
        e = c.getState(a),
        f = c.getState(d.getParent(a));
    if (null != e && null != f) {
        var g = this.getCellsToShift(e),
            k = d.getGeometry(a);
        if (null != g && null != k) {
            var l = c.translate,
                m = c.scale,
                c = e.x - f.origin.x - l.x * m,
                f = e.y - f.origin.y - l.y * m,
                l = e.x + e.width,
                n = e.y + e.height,
                p = e.width - k.width * m + c - k.x * m,
                q = e.height - k.height * m + f - k.y * m,
                r = 1 - k.width * m / e.width,
                e = 1 - k.height * m / e.height;
            d.beginUpdate();
            try {
                for (k = 0; k < g.length; k++) g[k] != a && this.isCellShiftable(g[k]) &&
                    this.shiftCell(g[k], p, q, c, f, l, n, r, e, this.isExtendParents() && b.isExtendParent(g[k]))
            } finally {
                d.endUpdate()
            }
        }
    }
};
mxSpaceManager.prototype.shiftCell = function(a, b, c, d, e, f, g, k, l, m) {
    d = this.getGraph();
    var n = d.getView().getState(a);
    if (null != n) {
        var p = d.getModel(),
            q = p.getGeometry(a);
        if (null != q) {
            p.beginUpdate();
            try {
                if (this.isShiftRightwards())
                    if (n.x >= f) q = q.clone(), q.translate(-b, 0);
                    else {
                        var r = Math.max(0, n.x - x0),
                            q = q.clone();
                        q.translate(-k * r, 0)
                    }
                if (this.isShiftDownwards())
                    if (n.y >= g) q = q.clone(), q.translate(0, -c);
                    else {
                        var s = Math.max(0, n.y - e),
                            q = q.clone();
                        q.translate(0, -l * s)
                    }
                q != p.getGeometry(a) && (p.setGeometry(a, q), m && d.extendParent(a))
            } finally {
                p.endUpdate()
            }
        }
    }
};
mxSpaceManager.prototype.getCellsToShift = function(a) {
    var b = this.getGraph(),
        c = b.getModel().getParent(a.cell),
        d = this.isShiftDownwards(),
        e = this.isShiftRightwards();
    return b.getCellsBeyond(a.x + (d ? 0 : a.width), a.y + (d && e ? 0 : a.height), c, e, d)
};
mxSpaceManager.prototype.destroy = function() {
    this.setGraph(null)
};

function mxSwimlaneManager(a, b, c, d) {
    this.horizontal = null != b ? b : !0;
    this.addEnabled = null != c ? c : !0;
    this.resizeEnabled = null != d ? d : !0;
    this.addHandler = mxUtils.bind(this, function(a, b) {
        this.isEnabled() && this.isAddEnabled() && this.cellsAdded(b.getProperty("cells"))
    });
    this.resizeHandler = mxUtils.bind(this, function(a, b) {
        this.isEnabled() && this.isResizeEnabled() && this.cellsResized(b.getProperty("cells"))
    });
    this.setGraph(a)
}
mxSwimlaneManager.prototype = new mxEventSource;
mxSwimlaneManager.prototype.constructor = mxSwimlaneManager;
mxSwimlaneManager.prototype.graph = null;
mxSwimlaneManager.prototype.enabled = !0;
mxSwimlaneManager.prototype.horizontal = !0;
mxSwimlaneManager.prototype.addEnabled = !0;
mxSwimlaneManager.prototype.resizeEnabled = !0;
mxSwimlaneManager.prototype.addHandler = null;
mxSwimlaneManager.prototype.resizeHandler = null;
mxSwimlaneManager.prototype.isEnabled = function() {
    return this.enabled
};
mxSwimlaneManager.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxSwimlaneManager.prototype.isHorizontal = function() {
    return this.horizontal
};
mxSwimlaneManager.prototype.setHorizontal = function(a) {
    this.horizontal = a
};
mxSwimlaneManager.prototype.isAddEnabled = function() {
    return this.addEnabled
};
mxSwimlaneManager.prototype.setAddEnabled = function(a) {
    this.addEnabled = a
};
mxSwimlaneManager.prototype.isResizeEnabled = function() {
    return this.resizeEnabled
};
mxSwimlaneManager.prototype.setResizeEnabled = function(a) {
    this.resizeEnabled = a
};
mxSwimlaneManager.prototype.getGraph = function() {
    return this.graph
};
mxSwimlaneManager.prototype.setGraph = function(a) {
    null != this.graph && (this.graph.removeListener(this.addHandler), this.graph.removeListener(this.resizeHandler));
    this.graph = a;
    null != this.graph && (this.graph.addListener(mxEvent.ADD_CELLS, this.addHandler), this.graph.addListener(mxEvent.CELLS_RESIZED, this.resizeHandler))
};
mxSwimlaneManager.prototype.isSwimlaneIgnored = function(a) {
    return !this.getGraph().isSwimlane(a)
};
mxSwimlaneManager.prototype.isCellHorizontal = function(a) {
    return this.graph.isSwimlane(a) ? (a = this.graph.getCellStyle(a), 1 == mxUtils.getValue(a, mxConstants.STYLE_HORIZONTAL, 1)) : !this.isHorizontal()
};
mxSwimlaneManager.prototype.cellsAdded = function(a) {
    if (null != a) {
        var b = this.getGraph().getModel();
        b.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++) this.isSwimlaneIgnored(a[c]) || this.swimlaneAdded(a[c])
        } finally {
            b.endUpdate()
        }
    }
};
mxSwimlaneManager.prototype.swimlaneAdded = function(a) {
    for (var b = this.getGraph().getModel(), c = b.getParent(a), d = b.getChildCount(c), e = null, f = 0; f < d; f++) {
        var g = b.getChildAt(c, f);
        if (g != a && !this.isSwimlaneIgnored(g) && (e = b.getGeometry(g), null != e)) break
    }
    null != e && (b = null != c ? this.isCellHorizontal(c) : this.horizontal, this.resizeSwimlane(a, e.width, e.height, b))
};
mxSwimlaneManager.prototype.cellsResized = function(a) {
    if (null != a) {
        var b = this.getGraph().getModel();
        b.beginUpdate();
        try {
            for (var c = 0; c < a.length; c++)
                if (!this.isSwimlaneIgnored(a[c])) {
                    var d = b.getGeometry(a[c]);
                    if (null != d) {
                        for (var e = new mxRectangle(0, 0, d.width, d.height), f = a[c], g = f; null != g;) {
                            var f = g,
                                g = b.getParent(g),
                                k = this.graph.isSwimlane(g) ? this.graph.getStartSize(g) : new mxRectangle;
                            e.width += k.width;
                            e.height += k.height
                        }
                        var l = null != g ? this.isCellHorizontal(g) : this.horizontal;
                        this.resizeSwimlane(f, e.width,
                            e.height, l)
                    }
                }
        } finally {
            b.endUpdate()
        }
    }
};
mxSwimlaneManager.prototype.resizeSwimlane = function(a, b, c, d) {
    var e = this.getGraph().getModel();
    e.beginUpdate();
    try {
        var f = this.isCellHorizontal(a);
        if (!this.isSwimlaneIgnored(a)) {
            var g = e.getGeometry(a);
            if (null != g && (d && g.height != c || !d && g.width != b)) g = g.clone(), d ? g.height = c : g.width = b, e.setGeometry(a, g)
        }
        var k = this.graph.isSwimlane(a) ? this.graph.getStartSize(a) : new mxRectangle;
        b -= k.width;
        c -= k.height;
        var l = e.getChildCount(a);
        for (d = 0; d < l; d++) {
            var m = e.getChildAt(a, d);
            this.resizeSwimlane(m, b, c, f)
        }
    } finally {
        e.endUpdate()
    }
};
mxSwimlaneManager.prototype.destroy = function() {
    this.setGraph(null)
};

function mxTemporaryCellStates(a, b, c, d) {
    b = null != b ? b : 1;
    this.view = a;
    this.oldValidateCellState = a.validateCellState;
    this.oldBounds = a.getGraphBounds();
    this.oldStates = a.getStates();
    this.oldScale = a.getScale();
    var e = this;
    a.validateCellState = function(b, c) {
        return null == b || null == d || d(b) ? e.oldValidateCellState.apply(a, arguments) : null
    };
    a.setStates(new mxDictionary);
    a.setScale(b);
    if (null != c) {
        a.resetValidationState();
        b = null;
        for (var f = 0; f < c.length; f++) {
            var g = a.getBoundingBox(a.validateCellState(a.validateCell(c[f])));
            null == b ? b = g : b.add(g)
        }
        a.setGraphBounds(b || new mxRectangle)
    }
}
mxTemporaryCellStates.prototype.view = null;
mxTemporaryCellStates.prototype.oldStates = null;
mxTemporaryCellStates.prototype.oldBounds = null;
mxTemporaryCellStates.prototype.oldScale = null;
mxTemporaryCellStates.prototype.destroy = function() {
    this.view.setScale(this.oldScale);
    this.view.setStates(this.oldStates);
    this.view.setGraphBounds(this.oldBounds);
    this.view.validateCellState = this.oldValidateCellState
};

function mxCellStatePreview(a) {
    this.deltas = new mxDictionary;
    this.graph = a
}
mxCellStatePreview.prototype.graph = null;
mxCellStatePreview.prototype.deltas = null;
mxCellStatePreview.prototype.count = 0;
mxCellStatePreview.prototype.isEmpty = function() {
    return 0 == this.count
};
mxCellStatePreview.prototype.moveState = function(a, b, c, d, e) {
    d = null != d ? d : !0;
    e = null != e ? e : !0;
    var f = this.deltas.get(a.cell);
    null == f ? (f = {
        point: new mxPoint(b, c),
        state: a
    }, this.deltas.put(a.cell, f), this.count++) : d ? (f.point.x += b, f.point.y += c) : (f.point.x = b, f.point.y = c);
    e && this.addEdges(a);
    return f.point
};
mxCellStatePreview.prototype.show = function(a) {
    this.deltas.visit(mxUtils.bind(this, function(a, c) {
        this.translateState(c.state, c.point.x, c.point.y)
    }));
    this.deltas.visit(mxUtils.bind(this, function(b, c) {
        this.revalidateState(c.state, c.point.x, c.point.y, a)
    }))
};
mxCellStatePreview.prototype.translateState = function(a, b, c) {
    if (null != a) {
        var d = this.graph.getModel();
        if (d.isVertex(a.cell)) {
            a.view.updateCellState(a);
            var e = d.getGeometry(a.cell);
            if ((0 != b || 0 != c) && null != e && (!e.relative || null != this.deltas.get(a.cell))) a.x += b, a.y += c
        }
        for (var e = d.getChildCount(a.cell), f = 0; f < e; f++) this.translateState(a.view.getState(d.getChildAt(a.cell, f)), b, c)
    }
};
mxCellStatePreview.prototype.revalidateState = function(a, b, c, d) {
    if (null != a) {
        var e = this.graph.getModel();
        e.isEdge(a.cell) && a.view.updateCellState(a);
        var f = this.graph.getCellGeometry(a.cell),
            g = a.view.getState(e.getParent(a.cell));
        if ((0 != b || 0 != c) && null != f && f.relative && e.isVertex(a.cell) && (null == g || e.isVertex(g.cell) || null != this.deltas.get(a.cell))) a.x += b, a.y += c;
        this.graph.cellRenderer.redraw(a);
        null != d && d(a);
        f = e.getChildCount(a.cell);
        for (g = 0; g < f; g++) this.revalidateState(this.graph.view.getState(e.getChildAt(a.cell,
            g)), b, c, d)
    }
};
mxCellStatePreview.prototype.addEdges = function(a) {
    for (var b = this.graph.getModel(), c = b.getEdgeCount(a.cell), d = 0; d < c; d++) {
        var e = a.view.getState(b.getEdgeAt(a.cell, d));
        null != e && this.moveState(e, 0, 0)
    }
};

function mxConnectionConstraint(a, b) {
    this.point = a;
    this.perimeter = null != b ? b : !0
}
mxConnectionConstraint.prototype.point = null;
mxConnectionConstraint.prototype.perimeter = null;

function mxGraphHandler(a) {
    this.graph = a;
    this.graph.addMouseListener(this);
    this.panHandler = mxUtils.bind(this, function() {
        this.updatePreviewShape();
        this.updateHint()
    });
    this.graph.addListener(mxEvent.PAN, this.panHandler);
    this.escapeHandler = mxUtils.bind(this, function(a, c) {
        this.reset()
    });
    this.graph.addListener(mxEvent.ESCAPE, this.escapeHandler)
}
mxGraphHandler.prototype.graph = null;
mxGraphHandler.prototype.maxCells = mxClient.IS_IE ? 20 : 50;
mxGraphHandler.prototype.enabled = !0;
mxGraphHandler.prototype.highlightEnabled = !0;
mxGraphHandler.prototype.cloneEnabled = !0;
mxGraphHandler.prototype.moveEnabled = !0;
mxGraphHandler.prototype.guidesEnabled = !1;
mxGraphHandler.prototype.guide = null;
mxGraphHandler.prototype.currentDx = null;
mxGraphHandler.prototype.currentDy = null;
mxGraphHandler.prototype.updateCursor = !0;
mxGraphHandler.prototype.selectEnabled = !0;
mxGraphHandler.prototype.removeCellsFromParent = !0;
mxGraphHandler.prototype.connectOnDrop = !1;
mxGraphHandler.prototype.scrollOnMove = !0;
mxGraphHandler.prototype.minimumSize = 6;
mxGraphHandler.prototype.previewColor = "black";
mxGraphHandler.prototype.htmlPreview = !1;
mxGraphHandler.prototype.shape = null;
mxGraphHandler.prototype.scaleGrid = !1;
mxGraphHandler.prototype.rotationEnabled = !0;
mxGraphHandler.prototype.isEnabled = function() {
    return this.enabled
};
mxGraphHandler.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxGraphHandler.prototype.isCloneEnabled = function() {
    return this.cloneEnabled
};
mxGraphHandler.prototype.setCloneEnabled = function(a) {
    this.cloneEnabled = a
};
mxGraphHandler.prototype.isMoveEnabled = function() {
    return this.moveEnabled
};
mxGraphHandler.prototype.setMoveEnabled = function(a) {
    this.moveEnabled = a
};
mxGraphHandler.prototype.isSelectEnabled = function() {
    return this.selectEnabled
};
mxGraphHandler.prototype.setSelectEnabled = function(a) {
    this.selectEnabled = a
};
mxGraphHandler.prototype.isRemoveCellsFromParent = function() {
    return this.removeCellsFromParent
};
mxGraphHandler.prototype.setRemoveCellsFromParent = function(a) {
    this.removeCellsFromParent = a
};
mxGraphHandler.prototype.getInitialCellForEvent = function(a) {
    return a.getCell()
};
mxGraphHandler.prototype.isDelayedSelection = function(a) {
    return this.graph.isCellSelected(a)
};
mxGraphHandler.prototype.mouseDown = function(a, b) {
    if (!b.isConsumed() && this.isEnabled() && this.graph.isEnabled() && null != b.getState() && !mxEvent.isMultiTouchEvent(b.getEvent())) {
        var c = this.getInitialCellForEvent(b);
        this.delayedSelection = this.isDelayedSelection(c);
        this.cell = null;
        this.isSelectEnabled() && !this.delayedSelection && this.graph.selectCellForEvent(c, b.getEvent());
        if (this.isMoveEnabled()) {
            var d = this.graph.model,
                e = d.getGeometry(c);
            this.graph.isCellMovable(c) && (!d.isEdge(c) || 1 < this.graph.getSelectionCount() ||
                null != e.points && 0 < e.points.length || null == d.getTerminal(c, !0) || null == d.getTerminal(c, !1) || this.graph.allowDanglingEdges || this.graph.isCloneEvent(b.getEvent()) && this.graph.isCellsCloneable()) && this.start(c, b.getX(), b.getY());
            this.cellWasClicked = !0;
            b.consume()
        }
    }
};
mxGraphHandler.prototype.getGuideStates = function() {
    var a = this.graph.getDefaultParent(),
        b = this.graph.getModel(),
        c = mxUtils.bind(this, function(a) {
            return null != this.graph.view.getState(a) && b.isVertex(a) && null != b.getGeometry(a) && !b.getGeometry(a).relative
        });
    return this.graph.view.getCellStates(b.filterDescendants(c, a))
};
mxGraphHandler.prototype.getCells = function(a) {
    return !this.delayedSelection && this.graph.isCellMovable(a) ? [a] : this.graph.getMovableCells(this.graph.getSelectionCells())
};
mxGraphHandler.prototype.getPreviewBounds = function(a) {
    a = this.getBoundingBox(a);
    null != a && (a.grow(-1, -1), a.width < this.minimumSize && (a.x -= (this.minimumSize - a.width) / 2, a.width = this.minimumSize), a.height < this.minimumSize && (a.y -= (this.minimumSize - a.height) / 2, a.height = this.minimumSize));
    return a
};
mxGraphHandler.prototype.getBoundingBox = function(a) {
    var b = null;
    if (null != a && 0 < a.length)
        for (var c = this.graph.getModel(), d = 0; d < a.length; d++)
            if (c.isVertex(a[d]) || c.isEdge(a[d])) {
                var e = this.graph.view.getState(a[d]);
                if (null != e) {
                    var f = e;
                    c.isVertex(a[d]) && (null != e.shape && null != e.shape.boundingBox) && (f = e.shape.boundingBox);
                    null == b ? b = new mxRectangle(f.x, f.y, f.width, f.height) : b.add(f)
                }
            }
    return b
};
mxGraphHandler.prototype.createPreviewShape = function(a) {
    a = new mxRectangleShape(a, null, this.previewColor);
    a.isDashed = !0;
    this.htmlPreview ? (a.dialect = mxConstants.DIALECT_STRICTHTML, a.init(this.graph.container)) : (a.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG, a.init(this.graph.getView().getOverlayPane()), a.pointerEvents = !1);
    return a
};
mxGraphHandler.prototype.start = function(a, b, c) {
    this.cell = a;
    this.first = mxUtils.convertPoint(this.graph.container, b, c);
    this.cells = this.getCells(this.cell);
    this.bounds = this.graph.getView().getBounds(this.cells);
    this.pBounds = this.getPreviewBounds(this.cells);
    this.guidesEnabled && (this.guide = new mxGuide(this.graph, this.getGuideStates()))
};
mxGraphHandler.prototype.useGuidesForEvent = function(a) {
    return null != this.guide ? this.guide.isEnabledForEvent(a.getEvent()) : !0
};
mxGraphHandler.prototype.snap = function(a) {
    var b = this.scaleGrid ? this.graph.view.scale : 1;
    a.x = this.graph.snap(a.x / b) * b;
    a.y = this.graph.snap(a.y / b) * b;
    return a
};
mxGraphHandler.prototype.getDelta = function(a) {
    a = mxUtils.convertPoint(this.graph.container, a.getX(), a.getY());
    var b = this.graph.view.scale;
    return new mxPoint(this.roundLength((a.x - this.first.x) / b) * b, this.roundLength((a.y - this.first.y) / b) * b)
};
mxGraphHandler.prototype.updateHint = function(a) {};
mxGraphHandler.prototype.removeHint = function() {};
mxGraphHandler.prototype.roundLength = function(a) {
    return Math.round(a)
};
mxGraphHandler.prototype.mouseMove = function(a, b) {
    var c = this.graph;
    if (!b.isConsumed() && c.isMouseDown && null != this.cell && null != this.first && null != this.bounds)
        if (mxEvent.isMultiTouchEvent(b.getEvent())) this.reset();
        else {
            var d = this.getDelta(b),
                e = d.x,
                d = d.y,
                f = c.tolerance;
            if (null != this.shape || Math.abs(e) > f || Math.abs(d) > f) {
                null == this.highlight && (this.highlight = new mxCellHighlight(this.graph, mxConstants.DROP_TARGET_COLOR, 3));
                null == this.shape && (this.shape = this.createPreviewShape(this.bounds));
                var g = c.isGridEnabledEvent(b.getEvent()),
                    f = !0;
                if (null != this.guide && this.useGuidesForEvent(b)) d = this.guide.move(this.bounds, new mxPoint(e, d), g), f = !1, e = d.x, d = d.y;
                else if (g) var k = c.getView().translate,
                    l = c.getView().scale,
                    g = this.bounds.x - (c.snap(this.bounds.x / l - k.x) + k.x) * l,
                    k = this.bounds.y - (c.snap(this.bounds.y / l - k.y) + k.y) * l,
                    d = this.snap(new mxPoint(e, d)),
                    e = d.x - g,
                    d = d.y - k;
                null != this.guide && f && this.guide.hide();
                c.isConstrainedEvent(b.getEvent()) && (Math.abs(e) > Math.abs(d) ? d = 0 : e = 0);
                this.currentDx = e;
                this.currentDy = d;
                this.updatePreviewShape();
                f = null;
                d = b.getCell();
                c.isDropEnabled() && this.highlightEnabled && (f = c.getDropTarget(this.cells, b.getEvent(), d));
                g = c.isCloneEvent(b.getEvent()) && c.isCellsCloneable() && this.isCloneEnabled();
                e = c.getView().getState(f);
                k = !1;
                null != e && (c.model.getParent(this.cell) != f || g) ? (this.target != f && (this.target = f, this.setHighlightColor(mxConstants.DROP_TARGET_COLOR)), k = !0) : (this.target = null, this.connectOnDrop && (null != d && 1 == this.cells.length && c.getModel().isVertex(d) && c.isCellConnectable(d)) && (e = c.getView().getState(d), null !=
                    e && (c = null == c.getEdgeValidationError(null, this.cell, d) ? mxConstants.VALID_COLOR : mxConstants.INVALID_CONNECT_TARGET_COLOR, this.setHighlightColor(c), k = !0)));
                null != e && k ? this.highlight.highlight(e) : this.highlight.hide()
            }
            this.updateHint(b);
            b.consume();
            mxEvent.consume(b.getEvent())
        } else if ((this.isMoveEnabled() || this.isCloneEnabled()) && this.updateCursor && !b.isConsumed() && null != b.getState() && !c.isMouseDown) e = c.getCursorForMouseEvent(b), null == e && (c.isEnabled() && c.isCellMovable(b.getCell())) && (e = c.getModel().isEdge(b.getCell()) ?
        mxConstants.CURSOR_MOVABLE_EDGE : mxConstants.CURSOR_MOVABLE_VERTEX), b.getState().setCursor(e)
};
mxGraphHandler.prototype.updatePreviewShape = function() {
    null != this.shape && (this.shape.bounds = new mxRectangle(Math.round(this.pBounds.x + this.currentDx - this.graph.panDx), Math.round(this.pBounds.y + this.currentDy - this.graph.panDy), this.pBounds.width, this.pBounds.height), this.shape.redraw())
};
mxGraphHandler.prototype.setHighlightColor = function(a) {
    null != this.highlight && this.highlight.setHighlightColor(a)
};
mxGraphHandler.prototype.mouseUp = function(a, b) {
    if (!b.isConsumed()) {
        var c = this.graph;
        if (null != this.cell && null != this.first && null != this.shape && null != this.currentDx && null != this.currentDy) {
            var d = b.getCell();
            if (this.connectOnDrop && null == this.target && null != d && c.getModel().isVertex(d) && c.isCellConnectable(d) && c.isEdgeValid(null, this.cell, d)) c.connectionHandler.connect(this.cell, d, b.getEvent());
            else {
                var d = c.isCloneEvent(b.getEvent()) && c.isCellsCloneable() && this.isCloneEnabled(),
                    e = c.getView().scale,
                    f = this.roundLength(this.currentDx /
                        e),
                    e = this.roundLength(this.currentDy / e),
                    g = this.target;
                c.isSplitEnabled() && c.isSplitTarget(g, this.cells, b.getEvent()) ? c.splitEdge(g, this.cells, null, f, e) : this.moveCells(this.cells, f, e, d, this.target, b.getEvent())
            }
        } else this.isSelectEnabled() && (this.delayedSelection && null != this.cell) && this.selectDelayed(b)
    }
    this.cellWasClicked && b.consume();
    this.reset()
};
mxGraphHandler.prototype.selectDelayed = function(a) {
    (!this.graph.isCellSelected(this.cell) || !this.graph.popupMenuHandler.isPopupTrigger(a)) && this.graph.selectCellForEvent(this.cell, a.getEvent())
};
mxGraphHandler.prototype.reset = function() {
    this.destroyShapes();
    this.removeHint();
    this.delayedSelection = this.cellWasClicked = !1;
    this.target = this.cell = this.first = this.guides = this.currentDy = this.currentDx = null
};
mxGraphHandler.prototype.shouldRemoveCellsFromParent = function(a, b, c) {
    if (this.graph.getModel().isVertex(a)) {
        a = this.graph.getView().getState(a);
        c = mxUtils.convertPoint(this.graph.container, mxEvent.getClientX(c), mxEvent.getClientY(c));
        var d = mxUtils.toRadians(mxUtils.getValue(a.style, mxConstants.STYLE_ROTATION) || 0);
        if (0 != d) {
            b = Math.cos(-d);
            var d = Math.sin(-d),
                e = new mxPoint(a.getCenterX(), a.getCenterY());
            c = mxUtils.getRotatedPoint(c, b, d, e)
        }
        return null != a && !mxUtils.contains(a, c.x, c.y)
    }
    return !1
};
mxGraphHandler.prototype.moveCells = function(a, b, c, d, e, f) {
    d && (a = this.graph.getCloneableCells(a));
    null == e && (this.isRemoveCellsFromParent() && this.shouldRemoveCellsFromParent(this.graph.getModel().getParent(this.cell), a, f)) && (e = this.graph.getDefaultParent());
    a = this.graph.moveCells(a, b - this.graph.panDx / this.graph.view.scale, c - this.graph.panDy / this.graph.view.scale, d, e, f);
    this.isSelectEnabled() && this.scrollOnMove && this.graph.scrollCellToVisible(a[0]);
    d && this.graph.setSelectionCells(a)
};
mxGraphHandler.prototype.destroyShapes = function() {
    null != this.shape && (this.shape.destroy(), this.shape = null);
    null != this.guide && (this.guide.destroy(), this.guide = null);
    null != this.highlight && (this.highlight.destroy(), this.highlight = null)
};
mxGraphHandler.prototype.destroy = function() {
    this.graph.removeMouseListener(this);
    this.graph.removeListener(this.panHandler);
    null != this.escapeHandler && (this.graph.removeListener(this.escapeHandler), this.escapeHandler = null);
    this.destroyShapes();
    this.removeHint()
};

function mxPanningHandler(a) {
    null != a && (this.graph = a, this.graph.addMouseListener(this), this.forcePanningHandler = mxUtils.bind(this, function(a, c) {
        var d = c.getProperty("eventName"),
            e = c.getProperty("event");
        d == mxEvent.MOUSE_DOWN && this.isForcePanningEvent(e) && (this.start(e), this.active = !0, this.fireEvent(new mxEventObject(mxEvent.PAN_START, "event", e)), e.consume())
    }), this.graph.addListener(mxEvent.FIRE_MOUSE_EVENT, this.forcePanningHandler), this.gestureHandler = mxUtils.bind(this, function(a, c) {
        if (this.isPinchEnabled()) {
            var d =
                c.getProperty("event");
            !mxEvent.isConsumed(d) && "gesturestart" == d.type ? (this.initialScale = this.graph.view.scale, !this.active && null != this.mouseDownEvent && (this.start(this.mouseDownEvent), this.mouseDownEvent = null)) : "gestureend" == d.type && null == this.initialScale && (this.initialScale = null);
            if (null != this.initialScale) {
                var e = Math.round(100 * this.initialScale * d.scale) / 100;
                null != this.minScale && (e = Math.max(this.minScale, e));
                null != this.maxScale && (e = Math.min(this.maxScale, e));
                this.graph.view.scale != e && (this.graph.zoomTo(e),
                    mxEvent.consume(d))
            }
        }
    }), this.graph.addListener(mxEvent.GESTURE, this.gestureHandler))
}
mxPanningHandler.prototype = new mxEventSource;
mxPanningHandler.prototype.constructor = mxPanningHandler;
mxPanningHandler.prototype.graph = null;
mxPanningHandler.prototype.useLeftButtonForPanning = !1;
mxPanningHandler.prototype.usePopupTrigger = !0;
mxPanningHandler.prototype.ignoreCell = !1;
mxPanningHandler.prototype.previewEnabled = !0;
mxPanningHandler.prototype.useGrid = !1;
mxPanningHandler.prototype.panningEnabled = !0;
mxPanningHandler.prototype.pinchEnabled = !0;
mxPanningHandler.prototype.maxScale = 8;
mxPanningHandler.prototype.minScale = 0.01;
mxPanningHandler.prototype.dx = null;
mxPanningHandler.prototype.dy = null;
mxPanningHandler.prototype.startX = 0;
mxPanningHandler.prototype.startY = 0;
mxPanningHandler.prototype.isActive = function() {
    return this.active || null != this.initialScale
};
mxPanningHandler.prototype.isPanningEnabled = function() {
    return this.panningEnabled
};
mxPanningHandler.prototype.setPanningEnabled = function(a) {
    this.panningEnabled = a
};
mxPanningHandler.prototype.isPinchEnabled = function() {
    return this.pinchEnabled
};
mxPanningHandler.prototype.setPinchEnabled = function(a) {
    this.pinchEnabled = a
};
mxPanningHandler.prototype.isPanningTrigger = function(a) {
    var b = a.getEvent();
    return this.useLeftButtonForPanning && null == a.getState() && mxEvent.isLeftMouseButton(b) || mxEvent.isControlDown(b) && mxEvent.isShiftDown(b) || this.usePopupTrigger && mxEvent.isPopupTrigger(b)
};
mxPanningHandler.prototype.isForcePanningEvent = function(a) {
    return this.ignoreCell || mxEvent.isMultiTouchEvent(a.getEvent())
};
mxPanningHandler.prototype.mouseDown = function(a, b) {
    this.mouseDownEvent = b;
    !b.isConsumed() && (this.isPanningEnabled() && !this.active && this.isPanningTrigger(b)) && (this.start(b), this.consumePanningTrigger(b))
};
mxPanningHandler.prototype.start = function(a) {
    this.dx0 = -this.graph.container.scrollLeft;
    this.dy0 = -this.graph.container.scrollTop;
    this.startX = a.getX();
    this.startY = a.getY();
    this.dy = this.dx = null;
    this.panningTrigger = !0
};
mxPanningHandler.prototype.consumePanningTrigger = function(a) {
    a.consume()
};
mxPanningHandler.prototype.mouseMove = function(a, b) {
    this.dx = b.getX() - this.startX;
    this.dy = b.getY() - this.startY;
    if (this.active) this.previewEnabled && (this.useGrid && (this.dx = this.graph.snap(this.dx), this.dy = this.graph.snap(this.dy)), this.graph.panGraph(this.dx + this.dx0, this.dy + this.dy0)), this.fireEvent(new mxEventObject(mxEvent.PAN, "event", b));
    else if (this.panningTrigger) {
        var c = this.active;
        this.active = Math.abs(this.dx) > this.graph.tolerance || Math.abs(this.dy) > this.graph.tolerance;
        !c && this.active && this.fireEvent(new mxEventObject(mxEvent.PAN_START,
            "event", b))
    }(this.active || this.panningTrigger) && b.consume()
};
mxPanningHandler.prototype.mouseUp = function(a, b) {
    if (this.active && null != this.dx && null != this.dy) {
        if (!this.graph.useScrollbarsForPanning || !mxUtils.hasScrollbars(this.graph.container)) {
            var c = this.graph.getView().scale,
                d = this.graph.getView().translate;
            this.graph.panGraph(0, 0);
            this.panGraph(d.x + this.dx / c, d.y + this.dy / c)
        }
        this.fireEvent(new mxEventObject(mxEvent.PAN_END, "event", b));
        b.consume()
    }
    this.panningTrigger = !1;
    this.mouseDownEvent = null;
    this.active = !1;
    this.dy = this.dx = null
};
mxPanningHandler.prototype.panGraph = function(a, b) {
    this.graph.getView().setTranslate(a, b)
};
mxPanningHandler.prototype.destroy = function() {
    this.graph.removeMouseListener(this);
    this.graph.removeListener(this.forcePanningHandler);
    this.graph.removeListener(this.gestureHandler)
};

function mxPopupMenuHandler(a, b) {
    null != a && (this.graph = a, this.factoryMethod = b, this.graph.addMouseListener(this), this.gestureHandler = mxUtils.bind(this, function(a, b) {
        this.inTolerance = !1
    }), this.graph.addListener(mxEvent.GESTURE, this.gestureHandler), this.init())
}
mxPopupMenuHandler.prototype = new mxPopupMenu;
mxPopupMenuHandler.prototype.constructor = mxPopupMenuHandler;
mxPopupMenuHandler.prototype.graph = null;
mxPopupMenuHandler.prototype.selectOnPopup = !0;
mxPopupMenuHandler.prototype.clearSelectionOnBackground = !0;
mxPopupMenuHandler.prototype.triggerX = null;
mxPopupMenuHandler.prototype.triggerY = null;
mxPopupMenuHandler.prototype.screenX = null;
mxPopupMenuHandler.prototype.screenY = null;
mxPopupMenuHandler.prototype.init = function() {
    mxPopupMenu.prototype.init.apply(this);
    mxEvent.addGestureListeners(this.div, mxUtils.bind(this, function(a) {
        this.graph.tooltipHandler.hide()
    }))
};
mxPopupMenuHandler.prototype.isSelectOnPopup = function(a) {
    return this.selectOnPopup
};
mxPopupMenuHandler.prototype.mouseDown = function(a, b) {
    this.isEnabled() && !mxEvent.isMultiTouchEvent(b.getEvent()) && (this.hideMenu(), this.triggerX = b.getGraphX(), this.triggerY = b.getGraphY(), this.screenX = b.getEvent().screenX, this.screenY = b.getEvent().screenY, this.popupTrigger = this.isPopupTrigger(b), this.inTolerance = !0)
};
mxPopupMenuHandler.prototype.mouseMove = function(a, b) {
    if (this.inTolerance && (null != this.screenX && null != this.screenY) && (Math.abs(b.getEvent().screenX - this.screenX) > this.graph.tolerance || Math.abs(b.getEvent().screenY - this.screenY) > this.graph.tolerance)) this.inTolerance = !1
};
mxPopupMenuHandler.prototype.mouseUp = function(a, b) {
    if (this.popupTrigger && this.inTolerance && null != this.triggerX && null != this.triggerY) {
        var c = this.getCellForPopupEvent(b);
        this.graph.isEnabled() && this.isSelectOnPopup(b) && null != c && !this.graph.isCellSelected(c) ? this.graph.setSelectionCell(c) : this.clearSelectionOnBackground && null == c && this.graph.clearSelection();
        this.graph.tooltipHandler.hide();
        var d = mxUtils.getScrollOrigin();
        this.popup(b.getX() + d.x + 1, b.getY() + d.y + 1, c, b.getEvent());
        b.consume()
    }
    this.inTolerance =
        this.popupTrigger = !1
};
mxPopupMenuHandler.prototype.getCellForPopupEvent = function(a) {
    return a.getCell()
};
mxPopupMenuHandler.prototype.destroy = function() {
    this.graph.removeMouseListener(this);
    this.graph.removeListener(this.gestureHandler);
    mxPopupMenu.prototype.destroy.apply(this)
};

function mxCellMarker(a, b, c, d) {
    mxEventSource.call(this);
    null != a && (this.graph = a, this.validColor = null != b ? b : mxConstants.DEFAULT_VALID_COLOR, this.invalidColor = null != b ? c : mxConstants.DEFAULT_INVALID_COLOR, this.hotspot = null != d ? d : mxConstants.DEFAULT_HOTSPOT, this.highlight = new mxCellHighlight(a))
}
mxUtils.extend(mxCellMarker, mxEventSource);
mxCellMarker.prototype.graph = null;
mxCellMarker.prototype.enabled = !0;
mxCellMarker.prototype.hotspot = mxConstants.DEFAULT_HOTSPOT;
mxCellMarker.prototype.hotspotEnabled = !1;
mxCellMarker.prototype.validColor = null;
mxCellMarker.prototype.invalidColor = null;
mxCellMarker.prototype.currentColor = null;
mxCellMarker.prototype.validState = null;
mxCellMarker.prototype.markedState = null;
mxCellMarker.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxCellMarker.prototype.isEnabled = function() {
    return this.enabled
};
mxCellMarker.prototype.setHotspot = function(a) {
    this.hotspot = a
};
mxCellMarker.prototype.getHotspot = function() {
    return this.hotspot
};
mxCellMarker.prototype.setHotspotEnabled = function(a) {
    this.hotspotEnabled = a
};
mxCellMarker.prototype.isHotspotEnabled = function() {
    return this.hotspotEnabled
};
mxCellMarker.prototype.hasValidState = function() {
    return null != this.validState
};
mxCellMarker.prototype.getValidState = function() {
    return this.validState
};
mxCellMarker.prototype.getMarkedState = function() {
    return this.markedState
};
mxCellMarker.prototype.reset = function() {
    this.validState = null;
    null != this.markedState && (this.markedState = null, this.unmark())
};
mxCellMarker.prototype.process = function(a) {
    var b = null;
    this.isEnabled() && (b = this.getState(a), this.setCurrentState(b, a));
    return b
};
mxCellMarker.prototype.setCurrentState = function(a, b, c) {
    var d = null != a ? this.isValidState(a) : !1;
    c = null != c ? c : this.getMarkerColor(b.getEvent(), a, d);
    this.validState = d ? a : null;
    if (a != this.markedState || c != this.currentColor) this.currentColor = c, null != a && null != this.currentColor ? (this.markedState = a, this.mark()) : null != this.markedState && (this.markedState = null, this.unmark())
};
mxCellMarker.prototype.markCell = function(a, b) {
    var c = this.graph.getView().getState(a);
    null != c && (this.currentColor = null != b ? b : this.validColor, this.markedState = c, this.mark())
};
mxCellMarker.prototype.mark = function() {
    this.highlight.setHighlightColor(this.currentColor);
    this.highlight.highlight(this.markedState);
    this.fireEvent(new mxEventObject(mxEvent.MARK, "state", this.markedState))
};
mxCellMarker.prototype.unmark = function() {
    this.mark()
};
mxCellMarker.prototype.isValidState = function(a) {
    return !0
};
mxCellMarker.prototype.getMarkerColor = function(a, b, c) {
    return c ? this.validColor : this.invalidColor
};
mxCellMarker.prototype.getState = function(a) {
    var b = this.graph.getView();
    cell = this.getCell(a);
    b = this.getStateToMark(b.getState(cell));
    return null != b && this.intersects(b, a) ? b : null
};
mxCellMarker.prototype.getCell = function(a) {
    return a.getCell()
};
mxCellMarker.prototype.getStateToMark = function(a) {
    return a
};
mxCellMarker.prototype.intersects = function(a, b) {
    return this.hotspotEnabled ? mxUtils.intersectsHotspot(a, b.getGraphX(), b.getGraphY(), this.hotspot, mxConstants.MIN_HOTSPOT_SIZE, mxConstants.MAX_HOTSPOT_SIZE) : !0
};
mxCellMarker.prototype.destroy = function() {
    this.graph.getView().removeListener(this.resetHandler);
    this.graph.getModel().removeListener(this.resetHandler);
    this.highlight.destroy()
};

function mxSelectionCellsHandler(a) {
    mxEventSource.call(this);
    this.graph = a;
    this.handlers = new mxDictionary;
    this.graph.addMouseListener(this);
    this.refreshHandler = mxUtils.bind(this, function(a, c) {
        this.isEnabled() && this.refresh()
    });
    this.graph.getSelectionModel().addListener(mxEvent.CHANGE, this.refreshHandler);
    this.graph.getModel().addListener(mxEvent.CHANGE, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.SCALE, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.TRANSLATE, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.SCALE_AND_TRANSLATE, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.DOWN, this.refreshHandler);
    this.graph.getView().addListener(mxEvent.UP, this.refreshHandler)
}
mxUtils.extend(mxSelectionCellsHandler, mxEventSource);
mxSelectionCellsHandler.prototype.graph = null;
mxSelectionCellsHandler.prototype.enabled = !0;
mxSelectionCellsHandler.prototype.refreshHandler = null;
mxSelectionCellsHandler.prototype.maxHandlers = 100;
mxSelectionCellsHandler.prototype.handlers = null;
mxSelectionCellsHandler.prototype.isEnabled = function() {
    return this.enabled
};
mxSelectionCellsHandler.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxSelectionCellsHandler.prototype.getHandler = function(a) {
    return this.handlers.get(a)
};
mxSelectionCellsHandler.prototype.reset = function() {
    this.handlers.visit(function(a, b) {
        b.reset.apply(b)
    })
};
mxSelectionCellsHandler.prototype.refresh = function() {
    var a = this.handlers;
    this.handlers = new mxDictionary;
    for (var b = this.graph.getSelectionCells(), c = 0; c < b.length; c++) {
        var d = this.graph.view.getState(b[c]);
        if (null != d) {
            var e = a.remove(b[c]);
            null != e && (e.state != d ? (e.destroy(), e = null) : (null != e.refresh && e.refresh(), e.redraw()));
            null == e && (e = this.graph.createHandler(d), this.fireEvent(new mxEventObject(mxEvent.ADD, "state", d)));
            null != e && this.handlers.put(b[c], e)
        }
    }
    a.visit(mxUtils.bind(this, function(a, b) {
        this.fireEvent(new mxEventObject(mxEvent.REMOVE,
            "state", b.state));
        b.destroy()
    }))
};
mxSelectionCellsHandler.prototype.mouseDown = function(a, b) {
    if (this.graph.isEnabled() && this.isEnabled()) {
        var c = [a, b];
        this.handlers.visit(function(a, b) {
            b.mouseDown.apply(b, c)
        })
    }
};
mxSelectionCellsHandler.prototype.mouseMove = function(a, b) {
    if (this.graph.isEnabled() && this.isEnabled()) {
        var c = [a, b];
        this.handlers.visit(function(a, b) {
            b.mouseMove.apply(b, c)
        })
    }
};
mxSelectionCellsHandler.prototype.mouseUp = function(a, b) {
    if (this.graph.isEnabled() && this.isEnabled()) {
        var c = [a, b];
        this.handlers.visit(function(a, b) {
            b.mouseUp.apply(b, c)
        })
    }
};
mxSelectionCellsHandler.prototype.destroy = function() {
    this.graph.removeMouseListener(this);
    null != this.refreshHandler && (this.graph.getSelectionModel().removeListener(this.refreshHandler), this.graph.getModel().removeListener(this.refreshHandler), this.graph.getView().removeListener(this.refreshHandler), this.refreshHandler = null)
};

function mxConnectionHandler(a, b) {
    mxEventSource.call(this);
    null != a && (this.graph = a, this.factoryMethod = b, this.init(), this.escapeHandler = mxUtils.bind(this, function(a, b) {
        this.reset()
    }), this.graph.addListener(mxEvent.ESCAPE, this.escapeHandler))
}
mxUtils.extend(mxConnectionHandler, mxEventSource);
mxConnectionHandler.prototype.graph = null;
mxConnectionHandler.prototype.factoryMethod = !0;
mxConnectionHandler.prototype.moveIconFront = !1;
mxConnectionHandler.prototype.moveIconBack = !1;
mxConnectionHandler.prototype.connectImage = null;
mxConnectionHandler.prototype.targetConnectImage = !1;
mxConnectionHandler.prototype.enabled = !0;
mxConnectionHandler.prototype.select = !0;
mxConnectionHandler.prototype.createTarget = !1;
mxConnectionHandler.prototype.marker = null;
mxConnectionHandler.prototype.constraintHandler = null;
mxConnectionHandler.prototype.error = null;
mxConnectionHandler.prototype.waypointsEnabled = !1;
mxConnectionHandler.prototype.ignoreMouseDown = !1;
mxConnectionHandler.prototype.first = null;
mxConnectionHandler.prototype.connectIconOffset = new mxPoint(0, mxConstants.TOOLTIP_VERTICAL_OFFSET);
mxConnectionHandler.prototype.edgeState = null;
mxConnectionHandler.prototype.changeHandler = null;
mxConnectionHandler.prototype.drillHandler = null;
mxConnectionHandler.prototype.mouseDownCounter = 0;
mxConnectionHandler.prototype.movePreviewAway = mxClient.IS_VML;
mxConnectionHandler.prototype.outlineConnect = !1;
mxConnectionHandler.prototype.isEnabled = function() {
    return this.enabled
};
mxConnectionHandler.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxConnectionHandler.prototype.isCreateTarget = function() {
    return this.createTarget
};
mxConnectionHandler.prototype.setCreateTarget = function(a) {
    this.createTarget = a
};
mxConnectionHandler.prototype.createShape = function() {
    var a = new mxPolyline([], mxConstants.INVALID_COLOR);
    a.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
    a.pointerEvents = !1;
    a.isDashed = !0;
    a.init(this.graph.getView().getOverlayPane());
    mxEvent.redirectMouseEvents(a.node, this.graph, null);
    return a
};
mxConnectionHandler.prototype.init = function() {
    this.graph.addMouseListener(this);
    this.marker = this.createMarker();
    this.constraintHandler = new mxConstraintHandler(this.graph);
    this.changeHandler = mxUtils.bind(this, function(a) {
        null != this.iconState && (this.iconState = this.graph.getView().getState(this.iconState.cell));
        null != this.iconState ? (this.redrawIcons(this.icons, this.iconState), this.constraintHandler.reset()) : this.reset()
    });
    this.graph.getModel().addListener(mxEvent.CHANGE, this.changeHandler);
    this.graph.getView().addListener(mxEvent.SCALE,
        this.changeHandler);
    this.graph.getView().addListener(mxEvent.TRANSLATE, this.changeHandler);
    this.graph.getView().addListener(mxEvent.SCALE_AND_TRANSLATE, this.changeHandler);
    this.drillHandler = mxUtils.bind(this, function(a) {
        this.reset()
    });
    this.graph.addListener(mxEvent.START_EDITING, this.drillHandler);
    this.graph.getView().addListener(mxEvent.DOWN, this.drillHandler);
    this.graph.getView().addListener(mxEvent.UP, this.drillHandler)
};
mxConnectionHandler.prototype.isConnectableCell = function(a) {
    return !0
};
mxConnectionHandler.prototype.createMarker = function() {
    var a = new mxCellMarker(this.graph);
    a.hotspotEnabled = !0;
    a.getCell = mxUtils.bind(this, function(b, c) {
        c = mxCellMarker.prototype.getCell.apply(a, arguments);
        var d = this.graph.view.scale,
            d = new mxPoint(this.graph.snap(b.getGraphX() / d) * d, this.graph.snap(b.getGraphY() / d) * d);
        this.error = null;
        null == c && (c = this.getCellAt(d.x, d.y));
        if (this.graph.isSwimlane(c) && this.graph.hitsSwimlaneContent(c, d.x, d.y) || !this.isConnectableCell(c)) c = null;
        null != c ? this.isConnecting() ?
            null != this.previous && (this.error = this.validateConnection(this.previous.cell, c), null != this.error && 0 == this.error.length && (c = null, this.isCreateTarget() && (this.error = null))) : this.isValidSource(c, b) || (c = null) : this.isConnecting() && (!this.isCreateTarget() && !this.graph.allowDanglingEdges) && (this.error = "");
        return c
    });
    a.isValidState = mxUtils.bind(this, function(b) {
        return this.isConnecting() ? null == this.error : mxCellMarker.prototype.isValidState.apply(a, arguments)
    });
    a.getMarkerColor = mxUtils.bind(this, function(b,
        c, d) {
        return null == this.connectImage || this.isConnecting() ? mxCellMarker.prototype.getMarkerColor.apply(a, arguments) : null
    });
    a.intersects = mxUtils.bind(this, function(b, c) {
        return null != this.connectImage || this.isConnecting() ? !0 : mxCellMarker.prototype.intersects.apply(a, arguments)
    });
    return a
};
mxConnectionHandler.prototype.start = function(a, b, c, d) {
    this.previous = a;
    this.first = new mxPoint(b, c);
    this.edgeState = null != d ? d : this.createEdgeState(null);
    this.marker.currentColor = this.marker.validColor;
    this.marker.markedState = a;
    this.marker.mark();
    this.fireEvent(new mxEventObject(mxEvent.START, "state", this.previous))
};
mxConnectionHandler.prototype.getCellAt = function(a, b) {
    return !this.outlineConnect ? this.graph.getCellAt(a, b) : null
};
mxConnectionHandler.prototype.isConnecting = function() {
    return null != this.first && null != this.shape
};
mxConnectionHandler.prototype.isValidSource = function(a, b) {
    return this.graph.isValidSource(a)
};
mxConnectionHandler.prototype.isValidTarget = function(a) {
    return !0
};
mxConnectionHandler.prototype.validateConnection = function(a, b) {
    return !this.isValidTarget(b) ? "" : this.graph.getEdgeValidationError(null, a, b)
};
mxConnectionHandler.prototype.getConnectImage = function(a) {
    return this.connectImage
};
mxConnectionHandler.prototype.isMoveIconToFrontForState = function(a) {
    return null != a.text && a.text.node.parentNode == this.graph.container ? !0 : this.moveIconFront
};
mxConnectionHandler.prototype.createIcons = function(a) {
    var b = this.getConnectImage(a);
    if (null != b && null != a) {
        this.iconState = a;
        var c = [],
            d = new mxRectangle(0, 0, b.width, b.height),
            e = new mxImageShape(d, b.src, null, null, 0);
        e.preserveImageAspect = !1;
        this.isMoveIconToFrontForState(a) ? (e.dialect = mxConstants.DIALECT_STRICTHTML, e.init(this.graph.container)) : (e.dialect = this.graph.dialect == mxConstants.DIALECT_SVG ? mxConstants.DIALECT_SVG : mxConstants.DIALECT_VML, e.init(this.graph.getView().getOverlayPane()), this.moveIconBack &&
            null != e.node.previousSibling && e.node.parentNode.insertBefore(e.node, e.node.parentNode.firstChild));
        e.node.style.cursor = mxConstants.CURSOR_CONNECT;
        var f = mxUtils.bind(this, function() {
                return null != this.currentState ? this.currentState : a
            }),
            b = mxUtils.bind(this, function(a) {
                mxEvent.isConsumed(a) || (this.icon = e, this.graph.fireMouseEvent(mxEvent.MOUSE_DOWN, new mxMouseEvent(a, f())))
            });
        mxEvent.redirectMouseEvents(e.node, this.graph, f, b);
        c.push(e);
        this.redrawIcons(c, this.iconState);
        return c
    }
    return null
};
mxConnectionHandler.prototype.redrawIcons = function(a, b) {
    if (null != a && null != a[0] && null != b) {
        var c = this.getIconPosition(a[0], b);
        a[0].bounds.x = c.x;
        a[0].bounds.y = c.y;
        a[0].redraw()
    }
};
mxConnectionHandler.prototype.getIconPosition = function(a, b) {
    var c = this.graph.getView().scale,
        d = b.getCenterX(),
        e = b.getCenterY();
    if (this.graph.isSwimlane(b.cell)) {
        var f = this.graph.getStartSize(b.cell),
            d = 0 != f.width ? b.x + f.width * c / 2 : d,
            e = 0 != f.height ? b.y + f.height * c / 2 : e,
            f = mxUtils.toRadians(mxUtils.getValue(b.style, mxConstants.STYLE_ROTATION) || 0);
        if (0 != f) var c = Math.cos(f),
            f = Math.sin(f),
            g = new mxPoint(b.getCenterX(), b.getCenterY()),
            e = mxUtils.getRotatedPoint(new mxPoint(d, e), c, f, g),
            d = e.x,
            e = e.y
    }
    return new mxPoint(d -
        a.bounds.width / 2, e - a.bounds.height / 2)
};
mxConnectionHandler.prototype.destroyIcons = function() {
    if (null != this.icons) {
        for (var a = 0; a < this.icons.length; a++) this.icons[a].destroy();
        this.iconState = this.selectedIcon = this.icon = this.icons = null
    }
};
mxConnectionHandler.prototype.isStartEvent = function(a) {
    return null != this.constraintHandler.currentFocus && null != this.constraintHandler.currentConstraint || null != this.previous && null == this.error && (null == this.icons || null != this.icons && null != this.icon)
};
mxConnectionHandler.prototype.mouseDown = function(a, b) {
    this.mouseDownCounter++;
    if (this.isEnabled() && this.graph.isEnabled() && !b.isConsumed() && !this.isConnecting() && this.isStartEvent(b)) {
        null != this.constraintHandler.currentConstraint && null != this.constraintHandler.currentFocus && null != this.constraintHandler.currentPoint ? (this.sourceConstraint = this.constraintHandler.currentConstraint, this.previous = this.constraintHandler.currentFocus, this.first = this.constraintHandler.currentPoint.clone()) : this.first = new mxPoint(b.getGraphX(),
            b.getGraphY());
        this.edgeState = this.createEdgeState(b);
        this.mouseDownCounter = 1;
        this.waypointsEnabled && null == this.shape && (this.waypoints = null, this.shape = this.createShape());
        if (null == this.previous && null != this.edgeState) {
            var c = this.graph.getPointForEvent(b.getEvent());
            this.edgeState.cell.geometry.setTerminalPoint(c, !0)
        }
        this.fireEvent(new mxEventObject(mxEvent.START, "state", this.previous));
        b.consume()
    }
    this.selectedIcon = this.icon;
    this.icon = null
};
mxConnectionHandler.prototype.isImmediateConnectSource = function(a) {
    return !this.graph.isCellMovable(a.cell)
};
mxConnectionHandler.prototype.createEdgeState = function(a) {
    return null
};
mxConnectionHandler.prototype.isOutlineConnectEvent = function(a) {
    return this.outlineConnect && (a.isSource(this.marker.highlight.shape) || mxEvent.isAltDown(a.getEvent()))
};
mxConnectionHandler.prototype.updateCurrentState = function(a, b) {
    this.constraintHandler.update(a, null == this.first);
    if (null != this.constraintHandler.currentFocus && null != this.constraintHandler.currentConstraint) this.marker.reset(), this.currentState = this.constraintHandler.currentFocus;
    else if (this.marker.process(a), this.currentState = this.marker.getValidState(), null != this.currentState && this.isOutlineConnectEvent(a)) {
        var c = this.graph.getOutlineConstraint(b, this.currentState, a);
        this.constraintHandler.currentConstraint =
            c;
        this.constraintHandler.currentFocus = this.currentState;
        this.constraintHandler.currentPoint = b
    }
    this.outlineConnect && (null != this.marker.highlight && null != this.marker.highlight.shape) && (null != this.constraintHandler.currentConstraint && null != this.constraintHandler.currentFocus ? (this.marker.highlight.shape.stroke = mxConstants.OUTLINE_HIGHLIGHT_COLOR, this.marker.highlight.shape.strokewidth = mxConstants.OUTLINE_HIGHLIGHT_STROKEWIDTH / this.graph.view.scale / this.graph.view.scale, this.marker.highlight.repaint()) :
        this.marker.hasValidState() && (this.marker.highlight.shape.stroke = mxConstants.DEFAULT_VALID_COLOR, this.marker.highlight.shape.strokewidth = mxConstants.HIGHLIGHT_STROKEWIDTH / this.graph.view.scale / this.graph.view.scale, this.marker.highlight.repaint()))
};
mxConnectionHandler.prototype.convertWaypoint = function(a) {
    var b = this.graph.getView().getScale(),
        c = this.graph.getView().getTranslate();
    a.x = a.x / b - c.x;
    a.y = a.y / b - c.y
};
mxConnectionHandler.prototype.mouseMove = function(a, b) {
    if (!b.isConsumed() && (this.ignoreMouseDown || null != this.first || !this.graph.isMouseDown)) {
        !this.isEnabled() && null != this.currentState && (this.destroyIcons(), this.currentState = null);
        var c = this.graph.getView(),
            d = c.scale,
            e = c.translate,
            c = new mxPoint(b.getGraphX(), b.getGraphY());
        this.graph.isGridEnabledEvent(b.getEvent()) && (c = new mxPoint((this.graph.snap(c.x / d - e.x) + e.x) * d, (this.graph.snap(c.y / d - e.y) + e.y) * d));
        this.currentPoint = c;
        (null != this.first || this.isEnabled() &&
            this.graph.isEnabled()) && this.updateCurrentState(b, c);
        if (null != this.first) {
            var f = null,
                d = c;
            null != this.constraintHandler.currentConstraint && null != this.constraintHandler.currentFocus && null != this.constraintHandler.currentPoint ? (f = this.constraintHandler.currentConstraint, d = this.constraintHandler.currentPoint.clone()) : null != this.previous && mxEvent.isShiftDown(b.getEvent()) && (Math.abs(this.previous.getCenterX() - c.x) < Math.abs(this.previous.getCenterY() - c.y) ? c.x = this.previous.getCenterX() : c.y = this.previous.getCenterY());
            e = this.first;
            if (null != this.selectedIcon) {
                var g = this.selectedIcon.bounds.width,
                    k = this.selectedIcon.bounds.height;
                null != this.currentState && this.targetConnectImage ? (g = this.getIconPosition(this.selectedIcon, this.currentState), this.selectedIcon.bounds.x = g.x, this.selectedIcon.bounds.y = g.y) : (g = new mxRectangle(b.getGraphX() + this.connectIconOffset.x, b.getGraphY() + this.connectIconOffset.y, g, k), this.selectedIcon.bounds = g);
                this.selectedIcon.redraw()
            }
            if (null != this.edgeState) {
                this.edgeState.absolutePoints = [null,
                    null != this.currentState ? null : d
                ];
                this.graph.view.updateFixedTerminalPoint(this.edgeState, this.previous, !0, this.sourceConstraint);
                null != this.currentState && (null == f && (f = this.graph.getConnectionConstraint(this.edgeState, this.previous, !1)), this.edgeState.setAbsoluteTerminalPoint(null, !1), this.graph.view.updateFixedTerminalPoint(this.edgeState, this.currentState, !1, f));
                e = null;
                if (null != this.waypoints) {
                    e = [];
                    for (d = 0; d < this.waypoints.length; d++) f = this.waypoints[d].clone(), this.convertWaypoint(f), e[d] = f
                }
                this.graph.view.updatePoints(this.edgeState,
                    e, this.previous, this.currentState);
                this.graph.view.updateFloatingTerminalPoints(this.edgeState, this.previous, this.currentState);
                d = this.edgeState.absolutePoints[this.edgeState.absolutePoints.length - 1];
                e = this.edgeState.absolutePoints[0]
            } else null != this.currentState && null == this.constraintHandler.currentConstraint && (g = this.getTargetPerimeterPoint(this.currentState, b), null != g && (d = g)), null == this.sourceConstraint && null != this.previous && (g = this.getSourcePerimeterPoint(this.previous, null != this.waypoints && 0 <
                this.waypoints.length ? this.waypoints[0] : d, b), null != g && (e = g)); if (null == this.currentState && this.movePreviewAway) {
                g = e;
                null != this.edgeState && 2 < this.edgeState.absolutePoints.length && (f = this.edgeState.absolutePoints[this.edgeState.absolutePoints.length - 2], null != f && (g = f));
                f = d.x - g.x;
                g = d.y - g.y;
                k = Math.sqrt(f * f + g * g);
                if (0 == k) return;
                d.x -= 4 * f / k;
                d.y -= 4 * g / k
            }
            if (null == this.shape && (f = Math.abs(c.x - this.first.x), g = Math.abs(c.y - this.first.y), f > this.graph.tolerance || g > this.graph.tolerance)) this.shape = this.createShape(),
                this.updateCurrentState(b, c);
            null != this.shape && (null != this.edgeState ? this.shape.points = this.edgeState.absolutePoints : (c = [e], null != this.waypoints && (c = c.concat(this.waypoints)), c.push(d), this.shape.points = c), this.drawPreview());
            mxEvent.consume(b.getEvent());
            b.consume()
        } else !this.isEnabled() || !this.graph.isEnabled() ? this.constraintHandler.reset() : this.previous != this.currentState && null == this.edgeState ? (this.destroyIcons(), null != this.currentState && (null == this.error && null == this.constraintHandler.currentConstraint) &&
            (this.icons = this.createIcons(this.currentState), null == this.icons && (this.currentState.setCursor(mxConstants.CURSOR_CONNECT), b.consume())), this.previous = this.currentState) : this.previous == this.currentState && (null != this.currentState && null == this.icons && !this.graph.isMouseDown) && b.consume(); if (!this.graph.isMouseDown && null != this.currentState && null != this.icons) {
            c = !1;
            e = b.getSource();
            for (d = 0; d < this.icons.length && !c; d++) c = e == this.icons[d].node || e.parentNode == this.icons[d].node;
            c || this.updateIcons(this.currentState,
                this.icons, b)
        }
    } else this.constraintHandler.reset()
};
mxConnectionHandler.prototype.getTargetPerimeterPoint = function(a, b) {
    var c = null,
        d = a.view,
        e = d.getPerimeterFunction(a);
    if (null != e) {
        var f = null != this.waypoints && 0 < this.waypoints.length ? this.waypoints[this.waypoints.length - 1] : new mxPoint(this.previous.getCenterX(), this.previous.getCenterY()),
            d = e(d.getPerimeterBounds(a), this.edgeState, f, !1);
        null != d && (c = d)
    } else c = new mxPoint(a.getCenterX(), a.getCenterY());
    return c
};
mxConnectionHandler.prototype.getSourcePerimeterPoint = function(a, b, c) {
    c = null;
    var d = a.view,
        e = d.getPerimeterFunction(a),
        f = new mxPoint(a.getCenterX(), a.getCenterY());
    if (null != e) {
        var g = mxUtils.getValue(a.style, mxConstants.STYLE_ROTATION, 0),
            k = -g * (Math.PI / 180);
        0 != g && (b = mxUtils.getRotatedPoint(new mxPoint(b.x, b.y), Math.cos(k), Math.sin(k), f));
        a = e(d.getPerimeterBounds(a), a, b, !1);
        null != a && (0 != g && (a = mxUtils.getRotatedPoint(new mxPoint(a.x, a.y), Math.cos(-k), Math.sin(-k), f)), c = a)
    } else c = f;
    return c
};
mxConnectionHandler.prototype.updateIcons = function(a, b, c) {};
mxConnectionHandler.prototype.isStopEvent = function(a) {
    return null != a.getState()
};
mxConnectionHandler.prototype.addWaypointForEvent = function(a) {
    var b = mxUtils.convertPoint(this.graph.container, a.getX(), a.getY()),
        c = Math.abs(b.x - this.first.x),
        b = Math.abs(b.y - this.first.y);
    if (null != this.waypoints || 1 < this.mouseDownCounter && (c > this.graph.tolerance || b > this.graph.tolerance)) null == this.waypoints && (this.waypoints = []), c = this.graph.view.scale, b = new mxPoint(this.graph.snap(a.getGraphX() / c) * c, this.graph.snap(a.getGraphY() / c) * c), this.waypoints.push(b)
};
mxConnectionHandler.prototype.mouseUp = function(a, b) {
    if (!b.isConsumed() && this.isConnecting()) {
        if (this.waypointsEnabled && !this.isStopEvent(b)) {
            this.addWaypointForEvent(b);
            b.consume();
            return
        }
        if (null == this.error) {
            var c = null != this.previous ? this.previous.cell : null,
                d = null;
            null != this.constraintHandler.currentConstraint && null != this.constraintHandler.currentFocus && (d = this.constraintHandler.currentFocus.cell);
            null == d && this.marker.hasValidState() && (d = this.marker.validState.cell);
            this.connect(c, d, b.getEvent(),
                b.getCell())
        } else null != this.previous && (null != this.marker.validState && this.previous.cell == this.marker.validState.cell) && this.graph.selectCellForEvent(this.marker.source, evt), 0 < this.error.length && this.graph.validationAlert(this.error);
        this.destroyIcons();
        b.consume()
    }
    null != this.first && this.reset()
};
mxConnectionHandler.prototype.reset = function() {
    null != this.shape && (this.shape.destroy(), this.shape = null);
    this.destroyIcons();
    this.marker.reset();
    this.constraintHandler.reset();
    this.sourceConstraint = this.error = this.previous = this.edgeState = null;
    this.mouseDownCounter = 0;
    this.first = null;
    this.fireEvent(new mxEventObject(mxEvent.RESET))
};
mxConnectionHandler.prototype.drawPreview = function() {
    var a = null == this.error;
    this.shape.strokewidth = this.getEdgeWidth(a);
    a = this.getEdgeColor(a);
    this.shape.stroke = a;
    this.shape.redraw()
};
mxConnectionHandler.prototype.getEdgeColor = function(a) {
    return a ? mxConstants.VALID_COLOR : mxConstants.INVALID_COLOR
};
mxConnectionHandler.prototype.getEdgeWidth = function(a) {
    return a ? 3 : 1
};
mxConnectionHandler.prototype.connect = function(a, b, c, d) {
    if (null != b || this.isCreateTarget() || this.graph.allowDanglingEdges) {
        var e = this.graph.getModel(),
            f = !1,
            g = null;
        e.beginUpdate();
        try {
            if (null != a && (null == b && this.isCreateTarget()) && (b = this.createTargetVertex(c, a), null != b)) {
                d = this.graph.getDropTarget([b], c, d);
                f = !0;
                if (null == d || !this.graph.getModel().isEdge(d)) {
                    var k = this.graph.getView().getState(d);
                    if (null != k) {
                        var l = e.getGeometry(b);
                        l.x -= k.origin.x;
                        l.y -= k.origin.y
                    }
                } else d = this.graph.getDefaultParent();
                this.graph.addCell(b, d)
            }
            var m = this.graph.getDefaultParent();
            null != a && (null != b && e.getParent(a) == e.getParent(b) && e.getParent(e.getParent(a)) != e.getRoot()) && (m = e.getParent(a), null != a.geometry && a.geometry.relative && (null != b.geometry && b.geometry.relative) && (m = e.getParent(m)));
            l = k = null;
            null != this.edgeState && (k = this.edgeState.cell.value, l = this.edgeState.cell.style);
            g = this.insertEdge(m, null, k, a, b, l);
            if (null != g) {
                this.graph.setConnectionConstraint(g, a, !0, this.sourceConstraint);
                this.graph.setConnectionConstraint(g,
                    b, !1, this.constraintHandler.currentConstraint);
                null != this.edgeState && e.setGeometry(g, this.edgeState.cell.geometry);
                var n = e.getGeometry(g);
                null == n && (n = new mxGeometry, n.relative = !0, e.setGeometry(g, n));
                if (null != this.waypoints && 0 < this.waypoints.length) {
                    var p = this.graph.view.scale,
                        q = this.graph.view.translate;
                    n.points = [];
                    for (a = 0; a < this.waypoints.length; a++) {
                        var r = this.waypoints[a];
                        n.points.push(new mxPoint(r.x / p - q.x, r.y / p - q.y))
                    }
                }
                if (null == b) {
                    var s = this.graph.view.translate,
                        p = this.graph.view.scale,
                        r = new mxPoint(this.currentPoint.x /
                            p - s.x, this.currentPoint.y / p - s.y);
                    r.x -= this.graph.panDx / this.graph.view.scale;
                    r.y -= this.graph.panDy / this.graph.view.scale;
                    n.setTerminalPoint(r, !1)
                }
                this.fireEvent(new mxEventObject(mxEvent.CONNECT, "cell", g, "terminal", b, "event", c, "target", d))
            }
        } catch (t) {
            mxLog.show(), mxLog.debug(t.message)
        } finally {
            e.endUpdate()
        }
        this.select && this.selectCells(g, f ? b : null)
    }
};
mxConnectionHandler.prototype.selectCells = function(a, b) {
    this.graph.setSelectionCell(a)
};
mxConnectionHandler.prototype.insertEdge = function(a, b, c, d, e, f) {
    if (null == this.factoryMethod) return this.graph.insertEdge(a, b, c, d, e, f);
    b = this.createEdge(c, d, e, f);
    return b = this.graph.addEdge(b, a, d, e)
};
mxConnectionHandler.prototype.createTargetVertex = function(a, b) {
    for (var c = this.graph.getCellGeometry(b); null != c && c.relative;) b = this.graph.getModel().getParent(b), c = this.graph.getCellGeometry(b);
    var d = this.graph.cloneCells([b])[0],
        c = this.graph.getModel().getGeometry(d);
    if (null != c) {
        var e = this.graph.view.translate,
            f = this.graph.view.scale,
            g = new mxPoint(this.currentPoint.x / f - e.x, this.currentPoint.y / f - e.y);
        c.x = g.x - c.width / 2 - this.graph.panDx / f;
        c.y = g.y - c.height / 2 - this.graph.panDy / f;
        g = this.getAlignmentTolerance();
        if (0 < g) {
            var k = this.graph.view.getState(b);
            if (null != k) {
                var l = k.x / f - e.x,
                    e = k.y / f - e.y;
                Math.abs(l - c.x) <= g && (c.x = l);
                Math.abs(e - c.y) <= g && (c.y = e)
            }
        }
    }
    return d
};
mxConnectionHandler.prototype.getAlignmentTolerance = function(a) {
    return this.graph.isGridEnabled() ? this.graph.gridSize / 2 : this.graph.tolerance
};
mxConnectionHandler.prototype.createEdge = function(a, b, c, d) {
    var e = null;
    null != this.factoryMethod && (e = this.factoryMethod(b, c, d));
    null == e && (e = new mxCell(a || ""), e.setEdge(!0), e.setStyle(d), a = new mxGeometry, a.relative = !0, e.setGeometry(a));
    return e
};
mxConnectionHandler.prototype.destroy = function() {
    this.graph.removeMouseListener(this);
    null != this.shape && (this.shape.destroy(), this.shape = null);
    null != this.marker && (this.marker.destroy(), this.marker = null);
    null != this.constraintHandler && (this.constraintHandler.destroy(), this.constraintHandler = null);
    null != this.changeHandler && (this.graph.getModel().removeListener(this.changeHandler), this.graph.getView().removeListener(this.changeHandler), this.changeHandler = null);
    null != this.drillHandler && (this.graph.removeListener(this.drillHandler),
        this.graph.getView().removeListener(this.drillHandler), this.drillHandler = null);
    null != this.escapeHandler && (this.graph.removeListener(this.escapeHandler), this.escapeHandler = null)
};

function mxConstraintHandler(a) {
    this.graph = a
}
mxConstraintHandler.prototype.pointImage = new mxImage(mxClient.imageBasePath + "/point.gif", 5, 5);
mxConstraintHandler.prototype.graph = null;
mxConstraintHandler.prototype.enabled = !0;
mxConstraintHandler.prototype.highlightColor = mxConstants.DEFAULT_VALID_COLOR;
mxConstraintHandler.prototype.isEnabled = function() {
    return this.enabled
};
mxConstraintHandler.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxConstraintHandler.prototype.reset = function() {
    if (null != this.focusIcons) {
        for (var a = 0; a < this.focusIcons.length; a++) this.focusIcons[a].destroy();
        this.focusIcons = null
    }
    null != this.focusHighlight && (this.focusHighlight.destroy(), this.focusHighlight = null);
    this.focusPoints = this.currentFocus = this.currentPoint = this.currentFocusArea = this.currentConstraint = null
};
mxConstraintHandler.prototype.getTolerance = function() {
    return this.graph.getTolerance()
};
mxConstraintHandler.prototype.getImageForConstraint = function(a, b, c) {
    return this.pointImage
};
mxConstraintHandler.prototype.isEventIgnored = function(a, b) {
    return !1
};
mxConstraintHandler.prototype.isStateIgnored = function(a, b) {
    return !1
};
mxConstraintHandler.prototype.destroyIcons = function() {
    if (null != this.focusIcons) {
        for (var a = 0; a < this.focusIcons.length; a++) this.focusIcons[a].destroy();
        this.focusPoints = this.focusIcons = null
    }
};
mxConstraintHandler.prototype.destroyFocusHighlight = function() {
    null != this.focusHighlight && (this.focusHighlight.destroy(), this.focusHighlight = null)
};
mxConstraintHandler.prototype.update = function(a, b) {
    if (this.isEnabled() && !this.isEventIgnored(a)) {
        var c = this.getTolerance(),
            d = new mxRectangle(a.getGraphX() - c, a.getGraphY() - c, 2 * c, 2 * c),
            e = null != a.getCell() ? this.graph.isCellConnectable(a.getCell()) : !1;
        if (null == this.currentFocusArea || !mxUtils.intersects(this.currentFocusArea, d) || null != a.getState() && null != this.currentFocus && e)
            if (this.currentFocusArea = null, a.getState() != this.currentFocus)
                if (this.currentFocus = null, this.constraints = null != a.getState() && e && !this.isStateIgnored(a.getState(),
                    b) ? this.graph.getAllConnectionConstraints(a.getState(), b) : null, null != this.constraints) {
                    this.currentFocus = a.getState();
                    this.currentFocusArea = new mxRectangle(a.getState().x, a.getState().y, a.getState().width, a.getState().height);
                    if (null != this.focusIcons) {
                        for (e = 0; e < this.focusIcons.length; e++) this.focusIcons[e].destroy();
                        this.focusPoints = this.focusIcons = null
                    }
                    this.focusIcons = [];
                    this.focusPoints = [];
                    for (e = 0; e < this.constraints.length; e++) {
                        var f = this.graph.getConnectionPoint(a.getState(), this.constraints[e]),
                            g = this.getImageForConstraint(a.getState(), this.constraints[e], f),
                            k = g.src,
                            g = new mxRectangle(f.x - g.width / 2, f.y - g.height / 2, g.width, g.height),
                            g = new mxImageShape(g, k);
                        g.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_MIXEDHTML : mxConstants.DIALECT_SVG;
                        g.preserveImageAspect = !1;
                        g.init(this.graph.getView().getDecoratorPane());
                        (mxClient.IS_QUIRKS || 8 == document.documentMode) && mxEvent.addListener(g.node, "dragstart", function(a) {
                            mxEvent.consume(a);
                            return !1
                        });
                        null != g.node.previousSibling &&
                            g.node.parentNode.insertBefore(g.node, g.node.parentNode.firstChild);
                        k = mxUtils.bind(this, function() {
                            return null != this.currentFocus ? this.currentFocus : a.getState()
                        });
                        g.redraw();
                        mxEvent.redirectMouseEvents(g.node, this.graph, k);
                        this.currentFocusArea.add(g.bounds);
                        this.focusIcons.push(g);
                        this.focusPoints.push(f)
                    }
                    this.currentFocusArea.grow(c)
                } else this.destroyIcons(), this.destroyFocusHighlight();
        this.currentPoint = this.currentConstraint = null;
        if (null != this.focusIcons && null != this.constraints && (null == a.getState() ||
            this.currentFocus == a.getState()))
            for (e = 0; e < this.focusIcons.length; e++)
                if (mxUtils.intersects(this.focusIcons[e].bounds, d)) {
                    this.currentConstraint = this.constraints[e];
                    this.currentPoint = this.focusPoints[e];
                    c = this.focusIcons[e].bounds.clone();
                    c.grow(mxClient.IS_IE ? 3 : 2);
                    mxClient.IS_IE && (c.width -= 1, c.height -= 1);
                    null == this.focusHighlight ? (c = new mxRectangleShape(c, null, this.highlightColor, 3), c.pointerEvents = !1, c.dialect = this.graph.dialect == mxConstants.DIALECT_SVG ? mxConstants.DIALECT_SVG : mxConstants.DIALECT_VML,
                        c.init(this.graph.getView().getOverlayPane()), this.focusHighlight = c, k = mxUtils.bind(this, function() {
                            return null != this.currentFocus ? this.currentFocus : a.getState()
                        }), mxEvent.redirectMouseEvents(c.node, this.graph, k)) : (this.focusHighlight.bounds = c, this.focusHighlight.redraw());
                    break
                }
        null == this.currentConstraint && this.destroyFocusHighlight()
    } else this.currentPoint = this.currentFocus = this.currentConstraint = null
};
mxConstraintHandler.prototype.destroy = function() {
    this.reset()
};

function mxRubberband(a) {
    null != a && (this.graph = a, this.graph.addMouseListener(this), this.forceRubberbandHandler = mxUtils.bind(this, function(a, c) {
            var d = c.getProperty("eventName"),
                e = c.getProperty("event");
            if (d == mxEvent.MOUSE_DOWN && this.isForceRubberbandEvent(e)) {
                var d = mxUtils.getOffset(this.graph.container),
                    f = mxUtils.getScrollOrigin(this.graph.container);
                f.x -= d.x;
                f.y -= d.y;
                this.start(e.getX() + f.x, e.getY() + f.y);
                e.consume(!1)
            }
        }), this.graph.addListener(mxEvent.FIRE_MOUSE_EVENT, this.forceRubberbandHandler),
        this.panHandler = mxUtils.bind(this, function() {
            this.repaint()
        }), this.graph.addListener(mxEvent.PAN, this.panHandler), this.gestureHandler = mxUtils.bind(this, function(a, c) {
            null != this.first && this.reset()
        }), this.graph.addListener(mxEvent.GESTURE, this.gestureHandler), mxClient.IS_IE && mxEvent.addListener(window, "unload", mxUtils.bind(this, function() {
            this.destroy()
        })))
}
mxRubberband.prototype.defaultOpacity = 20;
mxRubberband.prototype.enabled = !0;
mxRubberband.prototype.div = null;
mxRubberband.prototype.sharedDiv = null;
mxRubberband.prototype.currentX = 0;
mxRubberband.prototype.currentY = 0;
mxRubberband.prototype.isEnabled = function() {
    return this.enabled
};
mxRubberband.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxRubberband.prototype.isForceRubberbandEvent = function(a) {
    return mxEvent.isAltDown(a.getEvent())
};
mxRubberband.prototype.mouseDown = function(a, b) {
    if (!b.isConsumed() && this.isEnabled() && this.graph.isEnabled() && null == b.getState() && !mxEvent.isMultiTouchEvent(b.getEvent())) {
        var c = mxUtils.getOffset(this.graph.container),
            d = mxUtils.getScrollOrigin(this.graph.container);
        d.x -= c.x;
        d.y -= c.y;
        this.start(b.getX() + d.x, b.getY() + d.y);
        b.consume(!1)
    }
};
mxRubberband.prototype.start = function(a, b) {
    function c(a) {
        a = new mxMouseEvent(a);
        var b = mxUtils.convertPoint(d, a.getX(), a.getY());
        a.graphX = b.x;
        a.graphY = b.y;
        return a
    }
    this.first = new mxPoint(a, b);
    var d = this.graph.container;
    this.dragHandler = mxUtils.bind(this, function(a) {
        this.mouseMove(this.graph, c(a))
    });
    this.dropHandler = mxUtils.bind(this, function(a) {
        this.mouseUp(this.graph, c(a))
    });
    mxClient.IS_FF && mxEvent.addGestureListeners(document, null, this.dragHandler, this.dropHandler)
};
mxRubberband.prototype.mouseMove = function(a, b) {
    if (!b.isConsumed() && null != this.first) {
        var c = mxUtils.getScrollOrigin(this.graph.container),
            d = mxUtils.getOffset(this.graph.container);
        c.x -= d.x;
        c.y -= d.y;
        var d = b.getX() + c.x,
            c = b.getY() + c.y,
            e = this.first.x - d,
            f = this.first.y - c,
            g = this.graph.tolerance;
        if (null != this.div || Math.abs(e) > g || Math.abs(f) > g) null == this.div && (this.div = this.createShape()), mxUtils.clearSelection(), this.update(d, c), b.consume()
    }
};
mxRubberband.prototype.createShape = function() {
    null == this.sharedDiv && (this.sharedDiv = document.createElement("div"), this.sharedDiv.className = "mxRubberband", mxUtils.setOpacity(this.sharedDiv, this.defaultOpacity));
    this.graph.container.appendChild(this.sharedDiv);
    return this.sharedDiv
};
mxRubberband.prototype.mouseUp = function(a, b) {
    var c = null != this.div && "none" != this.div.style.display;
    this.reset();
    c && (c = new mxRectangle(this.x, this.y, this.width, this.height), this.graph.selectRegion(c, b.getEvent()), b.consume())
};
mxRubberband.prototype.reset = function() {
    null != this.div && this.div.parentNode.removeChild(this.div);
    mxEvent.removeGestureListeners(document, null, this.dragHandler, this.dropHandler);
    this.dropHandler = this.dragHandler = null;
    this.currentY = this.currentX = 0;
    this.div = this.first = null
};
mxRubberband.prototype.update = function(a, b) {
    this.currentX = a;
    this.currentY = b;
    this.repaint()
};
mxRubberband.prototype.repaint = function() {
    if (null != this.div) {
        var a = this.currentX - this.graph.panDx,
            b = this.currentY - this.graph.panDy;
        this.x = Math.min(this.first.x, a);
        this.y = Math.min(this.first.y, b);
        this.width = Math.max(this.first.x, a) - this.x;
        this.height = Math.max(this.first.y, b) - this.y;
        a = mxClient.IS_VML ? this.graph.panDy : 0;
        this.div.style.left = this.x + (mxClient.IS_VML ? this.graph.panDx : 0) + "px";
        this.div.style.top = this.y + a + "px";
        this.div.style.width = Math.max(1, this.width) + "px";
        this.div.style.height = Math.max(1,
            this.height) + "px"
    }
};
mxRubberband.prototype.destroy = function() {
    this.destroyed || (this.destroyed = !0, this.graph.removeMouseListener(this), this.graph.removeListener(this.forceRubberbandHandler), this.graph.removeListener(this.panHandler), this.reset(), null != this.sharedDiv && (this.sharedDiv = null))
};

function mxVertexHandler(a) {
    null != a && (this.state = a, this.init(), this.escapeHandler = mxUtils.bind(this, function(a, c) {
        this.livePreview && (this.state.view.graph.cellRenderer.redraw(this.state, !0), this.state.view.invalidate(this.state.cell), this.state.invalid = !1, this.state.view.validate());
        this.reset()
    }), this.state.view.graph.addListener(mxEvent.ESCAPE, this.escapeHandler))
}
mxVertexHandler.prototype.graph = null;
mxVertexHandler.prototype.state = null;
mxVertexHandler.prototype.singleSizer = !1;
mxVertexHandler.prototype.index = null;
mxVertexHandler.prototype.allowHandleBoundsCheck = !0;
mxVertexHandler.prototype.handleImage = null;
mxVertexHandler.prototype.tolerance = 0;
mxVertexHandler.prototype.rotationEnabled = !1;
mxVertexHandler.prototype.rotationRaster = !0;
mxVertexHandler.prototype.rotationCursor = "crosshair";
mxVertexHandler.prototype.livePreview = !1;
mxVertexHandler.prototype.manageSizers = !1;
mxVertexHandler.prototype.constrainGroupByChildren = !1;
mxVertexHandler.prototype.rotationHandleVSpacing = -16;
mxVertexHandler.prototype.horizontalOffset = 0;
mxVertexHandler.prototype.verticalOffset = 0;
mxVertexHandler.prototype.init = function() {
    this.graph = this.state.view.graph;
    this.selectionBounds = this.getSelectionBounds(this.state);
    this.bounds = new mxRectangle(this.selectionBounds.x, this.selectionBounds.y, this.selectionBounds.width, this.selectionBounds.height);
    this.selectionBorder = this.createSelectionShape(this.bounds);
    this.selectionBorder.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
    this.selectionBorder.pointerEvents = !1;
    this.selectionBorder.init(this.graph.getView().getOverlayPane());
    mxEvent.redirectMouseEvents(this.selectionBorder.node, this.graph, this.state);
    this.graph.isCellMovable(this.state.cell) && (this.selectionBorder.node.style.cursor = mxConstants.CURSOR_MOVABLE_VERTEX);
    if (0 >= mxGraphHandler.prototype.maxCells || this.graph.getSelectionCount() < mxGraphHandler.prototype.maxCells) {
        var a = this.graph.isCellResizable(this.state.cell);
        this.sizers = [];
        if (a || this.graph.isLabelMovable(this.state.cell) && 2 <= this.state.width && 2 <= this.state.height) {
            var b = 0;
            a && (this.singleSizer || (this.sizers.push(this.createSizer("nw-resize",
                b++)), this.sizers.push(this.createSizer("n-resize", b++)), this.sizers.push(this.createSizer("ne-resize", b++)), this.sizers.push(this.createSizer("w-resize", b++)), this.sizers.push(this.createSizer("e-resize", b++)), this.sizers.push(this.createSizer("sw-resize", b++)), this.sizers.push(this.createSizer("s-resize", b++))), this.sizers.push(this.createSizer("se-resize", b++)));
            a = this.graph.model.getGeometry(this.state.cell);
            null != a && (!a.relative && !this.graph.isSwimlane(this.state.cell) && this.graph.isLabelMovable(this.state.cell)) &&
                (this.labelShape = this.createSizer(mxConstants.CURSOR_LABEL_HANDLE, mxEvent.LABEL_HANDLE, mxConstants.LABEL_HANDLE_SIZE, mxConstants.LABEL_HANDLE_FILLCOLOR), this.sizers.push(this.labelShape))
        } else this.graph.isCellMovable(this.state.cell) && (!this.graph.isCellResizable(this.state.cell) && 2 > this.state.width && 2 > this.state.height) && (this.labelShape = this.createSizer(mxConstants.CURSOR_MOVABLE_VERTEX, null, null, mxConstants.LABEL_HANDLE_FILLCOLOR), this.sizers.push(this.labelShape))
    }
    if (this.graph.isEnabled() &&
        this.rotationEnabled && this.graph.isCellRotatable(this.state.cell) && (0 >= mxGraphHandler.prototype.maxCells || this.graph.getSelectionCount() < mxGraphHandler.prototype.maxCells) && 2 < this.state.width && 2 < this.state.height) this.rotationShape = this.createSizer(this.rotationCursor, mxEvent.ROTATION_HANDLE, mxConstants.HANDLE_SIZE + 3, mxConstants.HANDLE_FILLCOLOR), this.sizers.push(this.rotationShape);
    this.redraw();
    this.constrainGroupByChildren && this.updateMinBounds()
};
mxVertexHandler.prototype.isConstrainedEvent = function(a) {
    return mxEvent.isShiftDown(a.getEvent()) || "fixed" == this.state.style[mxConstants.STYLE_ASPECT]
};
mxVertexHandler.prototype.updateMinBounds = function() {
    var a = this.graph.getChildCells(this.state.cell);
    if (0 < a.length && (this.minBounds = this.graph.view.getBounds(a), null != this.minBounds)) {
        var a = this.state.view.scale,
            b = this.state.view.translate;
        this.minBounds.x -= this.state.x;
        this.minBounds.y -= this.state.y;
        this.minBounds.x /= a;
        this.minBounds.y /= a;
        this.minBounds.width /= a;
        this.minBounds.height /= a;
        this.x0 = this.state.x / a - b.x;
        this.y0 = this.state.y / a - b.y
    }
};
mxVertexHandler.prototype.getSelectionBounds = function(a) {
    return new mxRectangle(Math.round(a.x), Math.round(a.y), Math.round(a.width), Math.round(a.height))
};
mxVertexHandler.prototype.createSelectionShape = function(a) {
    a = new mxRectangleShape(a, null, this.getSelectionColor());
    a.strokewidth = this.getSelectionStrokeWidth();
    a.isDashed = this.isSelectionDashed();
    return a
};
mxVertexHandler.prototype.getSelectionColor = function() {
    return mxConstants.VERTEX_SELECTION_COLOR
};
mxVertexHandler.prototype.getSelectionStrokeWidth = function() {
    return mxConstants.VERTEX_SELECTION_STROKEWIDTH
};
mxVertexHandler.prototype.isSelectionDashed = function() {
    return mxConstants.VERTEX_SELECTION_DASHED
};
mxVertexHandler.prototype.createSizer = function(a, b, c, d) {
    c = c || mxConstants.HANDLE_SIZE;
    c = new mxRectangle(0, 0, c, c);
    d = this.createSizerShape(c, b, d);
    d.isHtmlAllowed() && null != this.state.text && this.state.text.node.parentNode == this.graph.container ? (d.bounds.height -= 1, d.bounds.width -= 1, d.dialect = mxConstants.DIALECT_STRICTHTML, d.init(this.graph.container)) : (d.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_MIXEDHTML : mxConstants.DIALECT_SVG, d.init(this.graph.getView().getOverlayPane()));
    mxEvent.redirectMouseEvents(d.node, this.graph, this.state);
    this.graph.isEnabled() && (d.node.style.cursor = a);
    this.isSizerVisible(b) || (d.node.style.visibility = "hidden");
    return d
};
mxVertexHandler.prototype.isSizerVisible = function(a) {
    return !0
};
mxVertexHandler.prototype.createSizerShape = function(a, b, c) {
    return null != this.handleImage ? (a = new mxRectangle(a.x, a.y, this.handleImage.width, this.handleImage.height), a = new mxImageShape(a, this.handleImage.src), a.preserveImageAspect = !1, a) : b == mxEvent.ROTATION_HANDLE ? new mxEllipse(a, c || mxConstants.HANDLE_FILLCOLOR, mxConstants.HANDLE_STROKECOLOR) : new mxRectangleShape(a, c || mxConstants.HANDLE_FILLCOLOR, mxConstants.HANDLE_STROKECOLOR)
};
mxVertexHandler.prototype.moveSizerTo = function(a, b, c) {
    null != a && (a.bounds.x = Math.round(b - a.bounds.width / 2), a.bounds.y = Math.round(c - a.bounds.height / 2), null != a.node && "none" != a.node.style.display && a.redraw())
};
mxVertexHandler.prototype.getHandleForEvent = function(a) {
    function b(b) {
        if (null != b && (a.isSource(b) || null != d && mxUtils.intersects(b.bounds, d) && "none" != b.node.style.display && "hidden" != b.node.style.visibility)) {
            var c = a.getGraphX() - b.bounds.getCenterX();
            b = a.getGraphY() - b.bounds.getCenterY();
            c = c * c + b * b;
            if (null == e || c <= e) return e = c, !0
        }
        return !1
    }
    var c = !mxEvent.isMouseEvent(a.getEvent()) ? this.tolerance : 1,
        d = this.allowHandleBoundsCheck && (mxClient.IS_IE || 0 < c) ? new mxRectangle(a.getGraphX() - c, a.getGraphY() - c, 2 * c, 2 *
            c) : null,
        e = null;
    if (b(this.rotationShape)) return mxEvent.ROTATION_HANDLE;
    if (b(this.labelShape)) return mxEvent.LABEL_HANDLE;
    if (null != this.sizers)
        for (c = 0; c < this.sizers.length; c++)
            if (b(this.sizers[c])) return c;
    return null
};
mxVertexHandler.prototype.mouseDown = function(a, b) {
    var c = !mxEvent.isMouseEvent(b.getEvent()) ? this.tolerance : 0;
    if (!b.isConsumed() && this.graph.isEnabled() && (0 < c || b.getState() == this.state)) c = this.getHandleForEvent(b), null != c && (this.start(b.getGraphX(), b.getGraphY(), c), b.consume())
};
mxVertexHandler.prototype.isLivePreviewBorder = function() {
    return null != this.state.shape && null == this.state.shape.fill && null == this.state.shape.stroke
};
mxVertexHandler.prototype.start = function(a, b, c) {
    this.inTolerance = !0;
    this.childOffsetY = this.childOffsetX = 0;
    this.index = c;
    this.startX = a;
    this.startY = b;
    a = this.state.view.graph.model.getParent(this.state.cell);
    this.state.view.graph.model.isVertex(a) && this.state.view.currentRoot != a && (this.parentState = this.state.view.graph.view.getState(a));
    this.selectionBorder.node.style.display = c == mxEvent.ROTATION_HANDLE ? "inline" : "none";
    if (!this.livePreview || this.isLivePreviewBorder()) this.preview = this.createSelectionShape(this.bounds), !(mxClient.IS_SVG && 0 != Number(this.state.style[mxConstants.STYLE_ROTATION] || "0")) && null != this.state.text && this.state.text.node.parentNode == this.graph.container ? (this.preview.dialect = mxConstants.DIALECT_STRICTHTML, this.preview.init(this.graph.container)) : (this.preview.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG, this.preview.init(this.graph.view.getOverlayPane()));
    if (this.livePreview) {
        this.hideSizers();
        c == mxEvent.ROTATION_HANDLE ? this.rotationShape.node.style.display =
            "" : null != this.sizers[c] && (this.sizers[c].node.style.display = "");
        c = this.graph.getEdges(this.state.cell);
        this.edgeHandlers = [];
        for (a = 0; a < c.length; a++) b = this.graph.selectionCellsHandler.getHandler(c[a]), null != b && this.edgeHandlers.push(b)
    }
};
mxVertexHandler.prototype.hideSizers = function() {
    if (null != this.sizers)
        for (var a = 0; a < this.sizers.length; a++) this.sizers[a].node.style.display = "none"
};
mxVertexHandler.prototype.checkTolerance = function(a) {
    if (this.inTolerance && (null != this.startX && null != this.startY) && (mxEvent.isMouseEvent(a.getEvent()) || Math.abs(a.getGraphX() - this.startX) > this.graph.tolerance || Math.abs(a.getGraphY() - this.startY) > this.graph.tolerance)) this.inTolerance = !1
};
mxVertexHandler.prototype.updateHint = function(a) {};
mxVertexHandler.prototype.removeHint = function() {};
mxVertexHandler.prototype.roundAngle = function(a) {
    return Math.round(a)
};
mxVertexHandler.prototype.roundLength = function(a) {
    return Math.round(a)
};
mxVertexHandler.prototype.mouseMove = function(a, b) {
    if (!b.isConsumed() && null != this.index) {
        this.checkTolerance(b);
        if (!this.inTolerance) {
            var c = new mxPoint(b.getGraphX(), b.getGraphY()),
                d = this.graph.isGridEnabledEvent(b.getEvent()),
                e = this.graph.view.scale,
                f = this.graph.view.translate;
            if (this.index == mxEvent.LABEL_HANDLE) d && (c.x = (this.graph.snap(c.x / e - f.x) + f.x) * e, c.y = (this.graph.snap(c.y / e - f.y) + f.y) * e), this.moveSizerTo(this.sizers[this.sizers.length - 1], c.x, c.y);
            else if (this.index == mxEvent.ROTATION_HANDLE) {
                var g =
                    this.state.x + this.state.width / 2 - c.x,
                    k = this.state.y + this.state.height / 2 - c.y;
                this.currentAlpha = 0 != g ? 180 * Math.atan(k / g) / Math.PI + 90 : 0 > k ? 180 : 0;
                0 < g && (this.currentAlpha -= 180);
                this.rotationRaster && this.graph.isGridEnabledEvent(b.getEvent()) ? (g = c.x - this.state.getCenterX(), k = c.y - this.state.getCenterY(), e = Math.abs(Math.sqrt(g * g + k * k) - this.state.height / 2 - 20), e = Math.max(1, 5 * Math.min(3, Math.max(0, Math.round(80 / Math.abs(e))))), this.currentAlpha = Math.round(this.currentAlpha / e) * e) : this.currentAlpha = this.roundAngle(this.currentAlpha);
                this.selectionBorder.rotation = this.currentAlpha;
                this.selectionBorder.redraw();
                this.livePreview && this.redrawHandles()
            } else {
                var l = mxUtils.toRadians(this.state.style[mxConstants.STYLE_ROTATION] || "0"),
                    m = Math.cos(-l),
                    n = Math.sin(-l),
                    p = new mxPoint(this.state.getCenterX(), this.state.getCenterY()),
                    g = c.x - this.startX,
                    k = c.y - this.startY,
                    c = n * g + m * k,
                    g = m * g - n * k,
                    k = c,
                    m = this.graph.getCellGeometry(this.state.cell);
                this.unscaledBounds = this.union(m, g / e, k / e, this.index, d, 1, new mxPoint(0, 0), this.isConstrainedEvent(b));
                this.bounds =
                    new mxRectangle((null != this.parentState ? this.parentState.x : f.x * e) + this.unscaledBounds.x * e, (null != this.parentState ? this.parentState.y : f.y * e) + this.unscaledBounds.y * e, this.unscaledBounds.width * e, this.unscaledBounds.height * e);
                m = Math.cos(l);
                n = Math.sin(l);
                k = new mxPoint(this.bounds.getCenterX(), this.bounds.getCenterY());
                g = k.x - p.x;
                k = k.y - p.y;
                p = m * g - n * k - g;
                g = n * g + m * k - k;
                d = this.bounds.x - this.state.x;
                l = this.bounds.y - this.state.y;
                k = m * d - n * l;
                m = n * d + m * l;
                this.bounds.x += p;
                this.bounds.y += g;
                this.unscaledBounds.x = this.roundLength(this.unscaledBounds.x +
                    p / e);
                this.unscaledBounds.y = this.roundLength(this.unscaledBounds.y + g / e);
                this.unscaledBounds.width = this.roundLength(this.unscaledBounds.width);
                this.unscaledBounds.height = this.roundLength(this.unscaledBounds.height);
                !this.graph.isCellCollapsed(this.state.cell) && (0 != p || 0 != g) ? (this.childOffsetX = this.state.x - this.bounds.x + k, this.childOffsetY = this.state.y - this.bounds.y + m) : this.childOffsetY = this.childOffsetX = 0;
                this.livePreview && (n = new mxRectangle(this.state.x, this.state.y, this.state.width, this.state.height),
                    g = this.state.origin, this.state.x = this.bounds.x, this.state.y = this.bounds.y, this.state.origin = new mxPoint(this.state.x / e - f.x, this.state.y / e - f.y), this.state.width = this.bounds.width, this.state.height = this.bounds.height, e = this.state.absoluteOffset, e = new mxPoint(e.x, e.y), this.state.absoluteOffset.x = 0, this.state.absoluteOffset.y = 0, m = this.graph.getCellGeometry(this.state.cell), null != m && (f = m.offset || this.EMPTY_POINT, null != f && !m.relative && (this.state.absoluteOffset.x = this.state.view.scale * f.x, this.state.absoluteOffset.y =
                        this.state.view.scale * f.y), this.state.view.updateVertexLabelOffset(this.state)), this.state.view.graph.cellRenderer.redraw(this.state, !0), this.state.view.invalidate(this.state.cell), this.state.invalid = !1, this.state.view.validate(), this.redrawHandles(), this.state.x = n.x, this.state.y = n.y, this.state.width = n.width, this.state.height = n.height, this.state.origin = g, this.state.absoluteOffset = e);
                null != this.preview && this.drawPreview()
            }
            this.updateHint(b)
        }
        b.consume()
    } else !this.graph.isMouseDown && null != this.getHandleForEvent(b) &&
        b.consume(!1)
};
mxVertexHandler.prototype.mouseUp = function(a, b) {
    if (null != this.index && null != this.state) {
        var c = new mxPoint(b.getGraphX(), b.getGraphY());
        this.graph.getModel().beginUpdate();
        try {
            if (this.index == mxEvent.ROTATION_HANDLE) {
                if (null != this.currentAlpha) {
                    var d = this.currentAlpha - (this.state.style[mxConstants.STYLE_ROTATION] || 0);
                    0 != d && this.rotateCell(this.state.cell, d)
                }
            } else {
                var e = this.graph.isGridEnabledEvent(b.getEvent()),
                    f = mxUtils.toRadians(this.state.style[mxConstants.STYLE_ROTATION] || "0"),
                    g = Math.cos(-f),
                    k =
                    Math.sin(-f),
                    l = c.x - this.startX,
                    m = c.y - this.startY,
                    c = k * l + g * m,
                    l = g * l - k * m,
                    m = c,
                    n = this.graph.view.scale,
                    p = this.isRecursiveResize(this.state, b);
                this.resizeCell(this.state.cell, this.roundLength(l / n), this.roundLength(m / n), this.index, e, this.isConstrainedEvent(b), p)
            }
        } finally {
            this.graph.getModel().endUpdate()
        }
        b.consume();
        this.reset()
    }
};
mxVertexHandler.prototype.isRecursiveResize = function(a, b) {
    return this.graph.isRecursiveResize(this.state)
};
mxVertexHandler.prototype.rotateCell = function(a, b) {
    var c = this.graph.getModel();
    if (c.isVertex(a)) {
        var d = a == this.state ? this.state : this.graph.view.getState(a);
        null != d && this.graph.setCellStyles(mxConstants.STYLE_ROTATION, (d.style[mxConstants.STYLE_ROTATION] || 0) + b, [a]);
        if (this.state.cell != a && (d = this.graph.getCellGeometry(a), null != d && !d.relative && 0 != b)) {
            var e = this.graph.getModel().getParent(a),
                f = this.graph.getCellGeometry(e);
            if (!d.relative && null != f) {
                var g = mxUtils.toRadians(b),
                    e = Math.cos(g),
                    g = Math.sin(g),
                    k = new mxPoint(d.getCenterX(), d.getCenterY()),
                    f = new mxPoint(f.width / 2, f.height / 2),
                    e = mxUtils.getRotatedPoint(k, e, g, f),
                    d = d.clone();
                d.x = e.x - d.width / 2;
                d.y = e.y - d.height / 2;
                c.setGeometry(a, d)
            }
        }
        d = c.getChildCount(a);
        for (e = 0; e < d; e++) this.rotateCell(c.getChildAt(a, e), b)
    }
};
mxVertexHandler.prototype.reset = function() {
    null != this.sizers && (null != this.index && null != this.sizers[this.index] && "none" == this.sizers[this.index].node.style.display) && (this.sizers[this.index].node.style.display = "");
    this.index = this.inTolerance = this.currentAlpha = null;
    null != this.preview && (this.preview.destroy(), this.preview = null);
    null != this.selectionBorder && (this.selectionBorder.node.style.display = "inline", this.selectionBounds = this.getSelectionBounds(this.state), this.bounds = new mxRectangle(this.selectionBounds.x,
        this.selectionBounds.y, this.selectionBounds.width, this.selectionBounds.height), this.drawPreview());
    if (this.livePreview && null != this.sizers)
        for (var a = 0; a < this.sizers.length; a++) null != this.sizers[a] && (this.sizers[a].node.style.display = "");
    this.removeHint();
    this.redrawHandles();
    this.unscaledBounds = this.edgeHandlers = null
};
mxVertexHandler.prototype.resizeCell = function(a, b, c, d, e, f, g) {
    e = this.graph.model.getGeometry(a);
    null != e && (d == mxEvent.LABEL_HANDLE ? (c = this.graph.view.scale, b = (this.labelShape.bounds.getCenterX() - this.startX) / c, c = (this.labelShape.bounds.getCenterY() - this.startY) / c, e = e.clone(), null == e.offset ? e.offset = new mxPoint(b, c) : (e.offset.x += b, e.offset.y += c), this.graph.model.setGeometry(a, e)) : null != this.unscaledBounds && (c = this.graph.view.scale, (0 != this.childOffsetX || 0 != this.childOffsetY) && this.moveChildren(a, this.childOffsetX /
        c, this.childOffsetY / c), this.graph.resizeCell(a, this.unscaledBounds, g)))
};
mxVertexHandler.prototype.moveChildren = function(a, b, c) {
    for (var d = this.graph.getModel(), e = d.getChildCount(a), f = 0; f < e; f++) {
        var g = d.getChildAt(a, f);
        if (d.isVertex(g)) {
            var k = this.graph.getCellGeometry(g);
            null != k && !k.relative && (k = k.clone(), k.x += b, k.y += c, d.setGeometry(g, k))
        }
    }
};
mxVertexHandler.prototype.union = function(a, b, c, d, e, f, g, k) {
    if (this.singleSizer) return d = a.x + a.width + b, g = a.y + a.height + c, e && (d = this.graph.snap(d / f) * f, g = this.graph.snap(g / f) * f), f = new mxRectangle(a.x, a.y, 0, 0), f.add(new mxRectangle(d, g, 0, 0)), f;
    var l = a.x - g.x * f,
        m = l + a.width,
        n = a.y - g.y * f;
    a = n + a.height;
    4 < d ? (a += c, e && (a = this.graph.snap(a / f) * f)) : 3 > d && (n += c, e && (n = this.graph.snap(n / f) * f));
    if (0 == d || 3 == d || 5 == d) l += b, e && (l = this.graph.snap(l / f) * f);
    else if (2 == d || 4 == d || 7 == d) m += b, e && (m = this.graph.snap(m / f) * f);
    e = m - l;
    c = a - n;
    k && (k = this.graph.getCellGeometry(this.state.cell), null != k && (k = k.width / k.height, 1 == d || 2 == d || 7 == d || 6 == d ? e = c * k : c = e / k, 0 == d && (l = m - e, n = a - c)));
    0 > e && (l += e, e = Math.abs(e));
    0 > c && (n += c, c = Math.abs(c));
    d = new mxRectangle(l + g.x * f, n + g.y * f, e, c);
    null != this.minBounds && (d.width = Math.max(d.width, this.minBounds.x * f + this.minBounds.width * f + Math.max(0, this.x0 * f - d.x)), d.height = Math.max(d.height, this.minBounds.y * f + this.minBounds.height * f + Math.max(0, this.y0 * f - d.y)));
    return d
};
mxVertexHandler.prototype.redraw = function() {
    this.selectionBounds = this.getSelectionBounds(this.state);
    this.bounds = new mxRectangle(this.selectionBounds.x, this.selectionBounds.y, this.selectionBounds.width, this.selectionBounds.height);
    this.redrawHandles();
    this.drawPreview()
};
mxVertexHandler.prototype.redrawHandles = function() {
    this.verticalOffset = this.horizontalOffset = 0;
    var a = this.bounds;
    if (null != this.sizers) {
        if (null == this.index && this.manageSizers && 1 < this.sizers.length) {
            var b = this.tolerance;
            a.width < 2 * this.sizers[0].bounds.width - 2 + 2 * b ? (this.sizers[1].node.style.display = "none", this.sizers[6].node.style.display = "none") : (this.sizers[1].node.style.display = "", this.sizers[6].node.style.display = "");
            a.height < 2 * this.sizers[0].bounds.height - 2 + 2 * b ? (this.sizers[3].node.style.display =
                "none", this.sizers[4].node.style.display = "none") : (this.sizers[3].node.style.display = "", this.sizers[4].node.style.display = "");
            if (a.width < 2 * this.sizers[0].bounds.width - 2 + 3 * b || a.height < 2 * this.sizers[0].bounds.height - 2 + 3 * b) a = new mxRectangle(a.x, a.y, a.width, a.height), b /= 2, this.horizontalOffset = this.sizers[0].bounds.width + b, this.verticalOffset = this.sizers[0].bounds.height + b, a.x -= this.horizontalOffset / 2, a.width += this.horizontalOffset, a.y -= this.verticalOffset / 2, a.height += this.verticalOffset
        }
        var b = a.x + a.width,
            c = a.y + a.height;
        if (this.singleSizer) this.moveSizerTo(this.sizers[0], b, c);
        else {
            var d = a.x + a.width / 2,
                e = a.y + a.height / 2;
            if (1 < this.sizers.length) {
                var f = "nw-resize n-resize ne-resize e-resize se-resize s-resize sw-resize w-resize".split(" "),
                    g = mxUtils.toRadians(this.state.style[mxConstants.STYLE_ROTATION] || "0"),
                    k = Math.cos(g),
                    l = Math.sin(g),
                    g = Math.round(4 * g / Math.PI),
                    m = new mxPoint(a.getCenterX(), a.getCenterY()),
                    n = mxUtils.getRotatedPoint(new mxPoint(a.x, a.y), k, l, m);
                this.moveSizerTo(this.sizers[0], n.x, n.y);
                this.sizers[0].node.style.cursor =
                    f[mxUtils.mod(0 + g, f.length)];
                n.x = d;
                n.y = a.y;
                n = mxUtils.getRotatedPoint(n, k, l, m);
                this.moveSizerTo(this.sizers[1], n.x, n.y);
                this.sizers[1].node.style.cursor = f[mxUtils.mod(1 + g, f.length)];
                n.x = b;
                n.y = a.y;
                n = mxUtils.getRotatedPoint(n, k, l, m);
                this.moveSizerTo(this.sizers[2], n.x, n.y);
                this.sizers[2].node.style.cursor = f[mxUtils.mod(2 + g, f.length)];
                n.x = a.x;
                n.y = e;
                n = mxUtils.getRotatedPoint(n, k, l, m);
                this.moveSizerTo(this.sizers[3], n.x, n.y);
                this.sizers[3].node.style.cursor = f[mxUtils.mod(7 + g, f.length)];
                n.x = b;
                n.y = e;
                n = mxUtils.getRotatedPoint(n,
                    k, l, m);
                this.moveSizerTo(this.sizers[4], n.x, n.y);
                this.sizers[4].node.style.cursor = f[mxUtils.mod(3 + g, f.length)];
                n.x = a.x;
                n.y = c;
                n = mxUtils.getRotatedPoint(n, k, l, m);
                this.moveSizerTo(this.sizers[5], n.x, n.y);
                this.sizers[5].node.style.cursor = f[mxUtils.mod(6 + g, f.length)];
                n.x = d;
                n.y = c;
                n = mxUtils.getRotatedPoint(n, k, l, m);
                this.moveSizerTo(this.sizers[6], n.x, n.y);
                this.sizers[6].node.style.cursor = f[mxUtils.mod(5 + g, f.length)];
                n.x = b;
                n.y = c;
                n = mxUtils.getRotatedPoint(n, k, l, m);
                this.moveSizerTo(this.sizers[7], n.x, n.y);
                this.sizers[7].node.style.cursor =
                    f[mxUtils.mod(4 + g, f.length)];
                this.moveSizerTo(this.sizers[8], d + this.state.absoluteOffset.x, e + this.state.absoluteOffset.y)
            } else 2 <= this.state.width && 2 <= this.state.height ? this.moveSizerTo(this.sizers[0], d + this.state.absoluteOffset.x, e + this.state.absoluteOffset.y) : this.moveSizerTo(this.sizers[0], a.x, a.y)
        }
    }
    null != this.rotationShape && (g = mxUtils.toRadians(null != this.currentAlpha ? this.currentAlpha : this.state.style[mxConstants.STYLE_ROTATION] || "0"), k = Math.cos(g), l = Math.sin(g), m = new mxPoint(this.state.getCenterX(),
        this.state.getCenterY()), n = mxUtils.getRotatedPoint(new mxPoint(a.x + a.width / 2, a.y + this.rotationHandleVSpacing), k, l, m), null != this.rotationShape.node && this.moveSizerTo(this.rotationShape, n.x, n.y));
    null != this.selectionBorder && (this.selectionBorder.rotation = Number(this.state.style[mxConstants.STYLE_ROTATION] || "0"));
    if (null != this.edgeHandlers)
        for (a = 0; a < this.edgeHandlers.length; a++) this.edgeHandlers[a].redraw()
};
mxVertexHandler.prototype.drawPreview = function() {
    null != this.preview && (this.preview.bounds = this.bounds, this.preview.node.parentNode == this.graph.container && (this.preview.bounds.width = Math.max(0, this.preview.bounds.width - 1), this.preview.bounds.height = Math.max(0, this.preview.bounds.height - 1)), this.preview.rotation = Number(this.state.style[mxConstants.STYLE_ROTATION] || "0"), this.preview.redraw());
    this.selectionBorder.bounds = this.bounds;
    this.selectionBorder.redraw()
};
mxVertexHandler.prototype.destroy = function() {
    null != this.escapeHandler && (this.state.view.graph.removeListener(this.escapeHandler), this.escapeHandler = null);
    null != this.preview && (this.preview.destroy(), this.preview = null);
    this.selectionBorder.destroy();
    this.labelShape = this.selectionBorder = null;
    this.removeHint();
    if (null != this.sizers) {
        for (var a = 0; a < this.sizers.length; a++) this.sizers[a].destroy(), this.sizers[a] = null;
        this.sizers = null
    }
};

function mxEdgeHandler(a) {
    null != a && (this.state = a, this.init(), this.escapeHandler = mxUtils.bind(this, function(a, c) {
        this.reset()
    }), this.state.view.graph.addListener(mxEvent.ESCAPE, this.escapeHandler))
}
mxEdgeHandler.prototype.graph = null;
mxEdgeHandler.prototype.state = null;
mxEdgeHandler.prototype.marker = null;
mxEdgeHandler.prototype.constraintHandler = null;
mxEdgeHandler.prototype.error = null;
mxEdgeHandler.prototype.shape = null;
mxEdgeHandler.prototype.bends = null;
mxEdgeHandler.prototype.labelShape = null;
mxEdgeHandler.prototype.cloneEnabled = !0;
mxEdgeHandler.prototype.addEnabled = !1;
mxEdgeHandler.prototype.removeEnabled = !1;
mxEdgeHandler.prototype.preferHtml = !1;
mxEdgeHandler.prototype.allowHandleBoundsCheck = !0;
mxEdgeHandler.prototype.snapToTerminals = !1;
mxEdgeHandler.prototype.handleImage = null;
mxEdgeHandler.prototype.tolerance = 0;
mxEdgeHandler.prototype.outlineConnect = !1;
mxVertexHandler.prototype.manageLabelHandle = !1;
mxEdgeHandler.prototype.init = function() {
    this.graph = this.state.view.graph;
    this.marker = this.createMarker();
    this.constraintHandler = new mxConstraintHandler(this.graph);
    this.points = [];
    this.abspoints = this.getSelectionPoints(this.state);
    this.shape = this.createSelectionShape(this.abspoints);
    this.shape.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_MIXEDHTML : mxConstants.DIALECT_SVG;
    this.shape.init(this.graph.getView().getOverlayPane());
    this.shape.pointerEvents = !1;
    this.shape.node.style.cursor =
        mxConstants.CURSOR_MOVABLE_EDGE;
    mxEvent.redirectMouseEvents(this.shape.node, this.graph, this.state);
    this.preferHtml = null != this.state.text && this.state.text.node.parentNode == this.graph.container;
    if (!this.preferHtml) {
        var a = this.state.getVisibleTerminalState(!0);
        null != a && (this.preferHtml = null != a.text && a.text.node.parentNode == this.graph.container);
        this.preferHtml || (a = this.state.getVisibleTerminalState(!1), null != a && (this.preferHtml = null != a.text && a.text.node.parentNode == this.graph.container))
    }
    if (this.graph.getSelectionCount() <
        mxGraphHandler.prototype.maxCells || 0 >= mxGraphHandler.prototype.maxCells) this.bends = this.createBends();
    this.label = new mxPoint(this.state.absoluteOffset.x, this.state.absoluteOffset.y);
    this.labelShape = this.createLabelHandleShape();
    this.initBend(this.labelShape);
    this.labelShape.node.style.cursor = mxConstants.CURSOR_LABEL_HANDLE;
    mxEvent.redirectMouseEvents(this.labelShape.node, this.graph, this.state);
    this.redraw()
};
mxEdgeHandler.prototype.isAddPointEvent = function(a) {
    return mxEvent.isShiftDown(a)
};
mxEdgeHandler.prototype.isRemovePointEvent = function(a) {
    return mxEvent.isShiftDown(a)
};
mxEdgeHandler.prototype.getSelectionPoints = function(a) {
    return a.absolutePoints
};
mxEdgeHandler.prototype.createSelectionShape = function(a) {
    a = new this.state.shape.constructor;
    a.outline = !0;
    a.apply(this.state);
    a.isDashed = this.isSelectionDashed();
    a.stroke = this.getSelectionColor();
    a.isShadow = !1;
    return a
};
mxEdgeHandler.prototype.getSelectionColor = function() {
    return mxConstants.EDGE_SELECTION_COLOR
};
mxEdgeHandler.prototype.getSelectionStrokeWidth = function() {
    return mxConstants.EDGE_SELECTION_STROKEWIDTH
};
mxEdgeHandler.prototype.isSelectionDashed = function() {
    return mxConstants.EDGE_SELECTION_DASHED
};
mxEdgeHandler.prototype.isConnectableCell = function(a) {
    return !0
};
mxEdgeHandler.prototype.getCellAt = function(a, b) {
    return !this.outlineConnect ? this.graph.getCellAt(a, b) : null
};
mxEdgeHandler.prototype.createMarker = function() {
    var a = new mxCellMarker(this.graph),
        b = this;
    a.getCell = function(a) {
        var d = mxCellMarker.prototype.getCell.apply(this, arguments),
            e = b.getPointForEvent(a);
        if (d == b.state.cell || null == d) d = b.getCellAt(e.x, e.y), b.state.cell == d && (d = null);
        var f = b.graph.getModel();
        if (this.graph.isSwimlane(d) && this.graph.hitsSwimlaneContent(d, e.x, e.y) || !b.isConnectableCell(d) || d == b.state.cell || null != d && !b.graph.connectableEdges && f.isEdge(d) || f.isAncestor(b.state.cell, d)) d = null;
        return d
    };
    a.isValidState = function(a) {
        var d = b.graph.getModel(),
            d = b.graph.view.getTerminalPort(a, b.graph.view.getState(d.getTerminal(b.state.cell, !b.isSource)), !b.isSource),
            d = null != d ? d.cell : null;
        b.error = b.validateConnection(b.isSource ? a.cell : d, b.isSource ? d : a.cell);
        return null == b.error
    };
    return a
};
mxEdgeHandler.prototype.validateConnection = function(a, b) {
    return this.graph.getEdgeValidationError(this.state.cell, a, b)
};
mxEdgeHandler.prototype.createBends = function() {
    for (var a = this.state.cell, b = [], c = 0; c < this.abspoints.length; c++)
        if (this.isHandleVisible(c)) {
            var d = c == this.abspoints.length - 1;
            if ((d = 0 == c || d) || this.graph.isCellBendable(a)) {
                var e = this.createHandleShape(c);
                this.initBend(e);
                this.isHandleEnabled(c) && (e.node.style.cursor = mxConstants.CURSOR_BEND_HANDLE, mxEvent.redirectMouseEvents(e.node, this.graph, this.state), (mxClient.IS_QUIRKS || 8 == document.documentMode) && mxEvent.addListener(e.node, "dragstart", function(a) {
                    mxEvent.consume(a);
                    return !1
                }));
                b.push(e);
                d || (this.points.push(new mxPoint(0, 0)), e.node.style.visibility = "hidden")
            }
        }
    return b
};
mxEdgeHandler.prototype.isHandleEnabled = function(a) {
    return !0
};
mxEdgeHandler.prototype.isHandleVisible = function(a) {
    var b = this.state.getVisibleTerminalState(!0),
        c = this.state.getVisibleTerminalState(!1),
        d = this.graph.getCellGeometry(this.state.cell);
    return (null != d ? this.graph.view.getEdgeStyle(this.state, d.points, b, c) : null) != mxEdgeStyle.EntityRelation || 0 == a || a == this.abspoints.length - 1
};
mxEdgeHandler.prototype.createHandleShape = function(a) {
    if (null != this.handleImage) return a = new mxImageShape(new mxRectangle(0, 0, this.handleImage.width, this.handleImage.height), this.handleImage.src), a.preserveImageAspect = !1, a;
    a = mxConstants.HANDLE_SIZE;
    this.preferHtml && (a -= 1);
    return new mxRectangleShape(new mxRectangle(0, 0, a, a), mxConstants.HANDLE_FILLCOLOR, mxConstants.HANDLE_STROKECOLOR)
};
mxEdgeHandler.prototype.createLabelHandleShape = function() {
    if (null != this.labelHandleImage) {
        var a = new mxImageShape(new mxRectangle(0, 0, this.labelHandleImage.width, this.handleImage.height), this.labelHandleImage.src);
        a.preserveImageAspect = !1;
        return a
    }
    a = mxConstants.LABEL_HANDLE_SIZE;
    return new mxRectangleShape(new mxRectangle(0, 0, a, a), mxConstants.LABEL_HANDLE_FILLCOLOR, mxConstants.HANDLE_STROKECOLOR)
};
mxEdgeHandler.prototype.initBend = function(a) {
    this.preferHtml ? (a.dialect = mxConstants.DIALECT_STRICTHTML, a.init(this.graph.container)) : (a.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ? mxConstants.DIALECT_MIXEDHTML : mxConstants.DIALECT_SVG, a.init(this.graph.getView().getOverlayPane()))
};
mxEdgeHandler.prototype.getHandleForEvent = function(a) {
    function b(b) {
        if (null != b && "none" != b.node.style.display && "hidden" != b.node.style.visibility && (a.isSource(b) || null != d && mxUtils.intersects(b.bounds, d))) {
            var c = a.getGraphX() - b.bounds.getCenterX();
            b = a.getGraphY() - b.bounds.getCenterY();
            c = c * c + b * b;
            if (null == e || c <= e) return e = c, !0
        }
        return !1
    }
    var c = !mxEvent.isMouseEvent(a.getEvent()) ? this.tolerance : 1,
        d = this.allowHandleBoundsCheck && (mxClient.IS_IE || 0 < c) ? new mxRectangle(a.getGraphX() - c, a.getGraphY() - c, 2 * c, 2 * c) :
        null,
        e = null;
    if (a.isSource(this.state.text) || b(this.labelShape)) return mxEvent.LABEL_HANDLE;
    if (null != this.bends)
        for (c = 0; c < this.bends.length; c++)
            if (b(this.bends[c])) return c;
    return null
};
mxEdgeHandler.prototype.mouseDown = function(a, b) {
    var c = null,
        c = this.getHandleForEvent(b);
    if (null != this.bends && null != this.bends[c]) {
        var d = this.bends[c].bounds;
        this.snapPoint = new mxPoint(d.getCenterX(), d.getCenterY())
    }
    this.addEnabled && null == c && this.isAddPointEvent(b.getEvent()) ? this.addPoint(this.state, b.getEvent()) : null != c && (!b.isConsumed() && this.graph.isEnabled()) && (this.removeEnabled && this.isRemovePointEvent(b.getEvent()) ? this.removePoint(this.state, c) : (c != mxEvent.LABEL_HANDLE || this.graph.isLabelMovable(b.getCell())) &&
        this.start(b.getX(), b.getY(), c), b.consume())
};
mxEdgeHandler.prototype.start = function(a, b, c) {
    this.startX = a;
    this.startY = b;
    this.isSource = null == this.bends ? !1 : 0 == c;
    this.isTarget = null == this.bends ? !1 : c == this.bends.length - 1;
    this.isLabel = c == mxEvent.LABEL_HANDLE;
    if (this.isSource || this.isTarget) {
        if (a = this.state.cell, b = this.graph.model.getTerminal(a, this.isSource), null == b && this.graph.isTerminalPointMovable(a, this.isSource) || null != b && this.graph.isCellDisconnectable(a, b, this.isSource)) this.index = c
    } else this.index = c
};
mxEdgeHandler.prototype.clonePreviewState = function(a, b) {
    return this.state.clone()
};
mxEdgeHandler.prototype.getSnapToTerminalTolerance = function() {
    return this.graph.gridSize * this.graph.view.scale / 2
};
mxEdgeHandler.prototype.updateHint = function(a, b) {};
mxEdgeHandler.prototype.removeHint = function() {};
mxEdgeHandler.prototype.roundLength = function(a) {
    return Math.round(a)
};
mxEdgeHandler.prototype.isSnapToTerminalsEvent = function(a) {
    return this.snapToTerminals && !mxEvent.isAltDown(a.getEvent())
};
mxEdgeHandler.prototype.getPointForEvent = function(a) {
    var b = this.graph.getView(),
        c = b.scale,
        d = new mxPoint(this.roundLength(a.getGraphX() / c) * c, this.roundLength(a.getGraphY() / c) * c),
        e = this.getSnapToTerminalTolerance(),
        f = !1,
        g = !1;
    if (0 < e && this.isSnapToTerminalsEvent(a)) {
        var k = function(a) {
                if (null != a) {
                    var b = a.x;
                    Math.abs(d.x - b) < e && (d.x = b, f = !0);
                    a = a.y;
                    Math.abs(d.y - a) < e && (d.y = a, g = !0)
                }
            },
            l = function(a) {
                null != a && k.call(this, new mxPoint(b.getRoutingCenterX(a), b.getRoutingCenterY(a)))
            };
        l.call(this, this.state.getVisibleTerminalState(!0));
        l.call(this, this.state.getVisibleTerminalState(!1));
        if (null != this.state.absolutePoints)
            for (l = 0; l < this.state.absolutePoints.length; l++) k.call(this, this.state.absolutePoints[l])
    }
    this.graph.isGridEnabledEvent(a.getEvent()) && (a = b.translate, f || (d.x = (this.graph.snap(d.x / c - a.x) + a.x) * c), g || (d.y = (this.graph.snap(d.y / c - a.y) + a.y) * c));
    return d
};
mxEdgeHandler.prototype.getPreviewTerminalState = function(a) {
    this.constraintHandler.update(a, this.isSource);
    if (null != this.constraintHandler.currentFocus && null != this.constraintHandler.currentConstraint) return this.marker.reset(), this.constraintHandler.currentFocus;
    this.marker.process(a);
    return this.marker.getValidState()
};
mxEdgeHandler.prototype.getPreviewPoints = function(a) {
    var b = this.graph.getCellGeometry(this.state.cell),
        b = null != b.points ? b.points.slice() : null;
    a = new mxPoint(a.x, a.y);
    !this.isSource && !this.isTarget ? (this.convertPoint(a, !1), null == b ? b = [a] : b[this.index - 1] = a) : this.graph.resetEdgesOnConnect && (b = null);
    return b
};
mxEdgeHandler.prototype.isOutlineConnectEvent = function(a) {
    return this.outlineConnect && (a.isSource(this.marker.highlight.shape) || mxEvent.isAltDown(a.getEvent()))
};
mxEdgeHandler.prototype.updatePreviewState = function(a, b, c, d) {
    var e = this.isSource ? c : this.state.getVisibleTerminalState(!0),
        f = this.isTarget ? c : this.state.getVisibleTerminalState(!1),
        g = this.graph.getConnectionConstraint(a, e, !0),
        k = this.graph.getConnectionConstraint(a, f, !1),
        l = this.constraintHandler.currentConstraint;
    null == l && (null != c && this.isOutlineConnectEvent(d) ? (l = this.graph.getOutlineConstraint(b, c, d), this.constraintHandler.currentConstraint = l, this.constraintHandler.currentFocus = c, this.constraintHandler.currentPoint =
        b) : l = new mxConnectionConstraint);
    this.outlineConnect && (null != this.marker.highlight && null != this.marker.highlight.shape) && (null != this.constraintHandler.currentConstraint && null != this.constraintHandler.currentFocus ? (this.marker.highlight.shape.stroke = mxConstants.OUTLINE_HIGHLIGHT_COLOR, this.marker.highlight.shape.strokewidth = mxConstants.OUTLINE_HIGHLIGHT_STROKEWIDTH / this.state.view.scale / this.state.view.scale, this.marker.highlight.repaint()) : this.marker.hasValidState() && (this.marker.highlight.shape.stroke =
        mxConstants.DEFAULT_VALID_COLOR, this.marker.highlight.shape.strokewidth = mxConstants.HIGHLIGHT_STROKEWIDTH / this.state.view.scale / this.state.view.scale, this.marker.highlight.repaint()));
    this.isSource ? g = l : this.isTarget && (k = l);
    (!this.isSource || null != e) && a.view.updateFixedTerminalPoint(a, e, !0, g);
    (!this.isTarget || null != f) && a.view.updateFixedTerminalPoint(a, f, !1, k);
    if ((this.isSource || this.isTarget) && null == c) a.setAbsoluteTerminalPoint(b, this.isSource), null == this.marker.getMarkedState() && (this.error = this.graph.allowDanglingEdges ?
        null : "");
    a.view.updatePoints(a, this.points, e, f);
    a.view.updateFloatingTerminalPoints(a, e, f)
};
mxEdgeHandler.prototype.mouseMove = function(a, b) {
    if (null != this.index && null != this.marker) {
        var c = this.getPointForEvent(b);
        mxEvent.isShiftDown(b.getEvent()) && null != this.snapPoint && (Math.abs(this.snapPoint.x - c.x) < Math.abs(this.snapPoint.y - c.y) ? c.x = this.snapPoint.x : c.y = this.snapPoint.y);
        if (this.isLabel) this.label.x = c.x, this.label.y = c.y;
        else {
            this.points = this.getPreviewPoints(c);
            var d = this.isSource || this.isTarget ? this.getPreviewTerminalState(b) : null,
                e = this.clonePreviewState(c, null != d ? d.cell : null);
            this.updatePreviewState(e,
                c, d, b);
            this.setPreviewColor(null == this.error ? this.marker.validColor : this.marker.invalidColor);
            this.abspoints = e.absolutePoints;
            this.active = !0
        }
        this.drawPreview();
        this.updateHint(b, c);
        mxEvent.consume(b.getEvent());
        b.consume()
    } else mxClient.IS_IE && null != this.getHandleForEvent(b) && b.consume(!1)
};
mxEdgeHandler.prototype.mouseUp = function(a, b) {
    if (null != this.index && null != this.marker) {
        var c = this.state.cell;
        if (b.getX() != this.startX || b.getY() != this.startY)
            if (null != this.error) 0 < this.error.length && this.graph.validationAlert(this.error);
            else if (this.isLabel) this.moveLabel(this.state, this.label.x, this.label.y);
        else if (this.isSource || this.isTarget) {
            var d = null;
            null != this.constraintHandler.currentConstraint && null != this.constraintHandler.currentFocus && (d = this.constraintHandler.currentFocus.cell);
            null ==
                d && this.marker.hasValidState() && (d = this.marker.validState.cell);
            if (null != d) c = this.connect(c, d, this.isSource, this.graph.isCloneEvent(b.getEvent()) && this.cloneEnabled && this.graph.isCellsCloneable(), b);
            else if (this.graph.isAllowDanglingEdges()) {
                d = this.abspoints[this.isSource ? 0 : this.abspoints.length - 1];
                d.x = this.roundLength(d.x / this.graph.view.scale - this.graph.view.translate.x);
                d.y = this.roundLength(d.y / this.graph.view.scale - this.graph.view.translate.y);
                var e = this.graph.getView().getState(this.graph.getModel().getParent(c));
                null != e && (d.x -= e.origin.x, d.y -= e.origin.y);
                d.x -= this.graph.panDx / this.graph.view.scale;
                d.y -= this.graph.panDy / this.graph.view.scale;
                this.changeTerminalPoint(c, d, this.isSource)
            }
        } else this.active ? this.changePoints(c, this.points) : (this.graph.getView().invalidate(this.state.cell), this.graph.getView().revalidate(this.state.cell));
        null != this.marker && (this.reset(), c != this.state.cell && this.graph.setSelectionCell(c));
        b.consume()
    }
};
mxEdgeHandler.prototype.reset = function() {
    this.snapPoint = this.points = this.label = this.index = this.error = null;
    this.isTarget = this.isSource = this.isLabel = this.active = !1;
    this.marker.reset();
    this.constraintHandler.reset();
    this.setPreviewColor(mxConstants.EDGE_SELECTION_COLOR);
    this.removeHint();
    this.redraw()
};
mxEdgeHandler.prototype.setPreviewColor = function(a) {
    null != this.shape && (this.shape.stroke = a)
};
mxEdgeHandler.prototype.convertPoint = function(a, b) {
    var c = this.graph.getView().getScale(),
        d = this.graph.getView().getTranslate();
    b && (a.x = this.graph.snap(a.x), a.y = this.graph.snap(a.y));
    a.x = Math.round(a.x / c - d.x);
    a.y = Math.round(a.y / c - d.y);
    c = this.graph.getView().getState(this.graph.getModel().getParent(this.state.cell));
    null != c && (a.x -= c.origin.x, a.y -= c.origin.y);
    return a
};
mxEdgeHandler.prototype.moveLabel = function(a, b, c) {
    var d = this.graph.getModel(),
        e = d.getGeometry(a.cell);
    if (null != e) {
        var f = this.graph.getView().scale,
            e = e.clone();
        if (e.relative) {
            var g = this.graph.getView().getRelativePoint(a, b, c);
            e.x = g.x;
            e.y = g.y;
            e.offset = new mxPoint(0, 0);
            g = this.graph.view.getPoint(a, e);
            e.offset = new mxPoint((b - g.x) / f, (c - g.y) / f)
        } else {
            var k = a.absolutePoints,
                g = k[0],
                k = k[k.length - 1];
            null != g && null != k && (e.offset = new mxPoint((b - (g.x + (k.x - g.x) / 2)) / f, (c - (g.y + (k.y - g.y) / 2)) / f), e.x = 0, e.y = 0)
        }
        d.setGeometry(a.cell,
            e)
    }
};
mxEdgeHandler.prototype.connect = function(a, b, c, d, e) {
    e = this.graph.getModel();
    var f = e.getParent(a);
    e.beginUpdate();
    try {
        if (d) {
            var g = a.clone();
            e.add(f, g, e.getChildCount(f));
            var k = e.getTerminal(a, !c);
            this.graph.connectCell(g, k, !c);
            a = g
        }
        var l = this.constraintHandler.currentConstraint;
        null == l && (l = new mxConnectionConstraint);
        this.graph.connectCell(a, b, c, l)
    } finally {
        e.endUpdate()
    }
    return a
};
mxEdgeHandler.prototype.changeTerminalPoint = function(a, b, c) {
    var d = this.graph.getModel(),
        e = d.getGeometry(a);
    if (null != e) {
        d.beginUpdate();
        try {
            e = e.clone(), e.setTerminalPoint(b, c), d.setGeometry(a, e), this.graph.connectCell(a, null, c, new mxConnectionConstraint)
        } finally {
            d.endUpdate()
        }
    }
};
mxEdgeHandler.prototype.changePoints = function(a, b) {
    var c = this.graph.getModel(),
        d = c.getGeometry(a);
    null != d && (d = d.clone(), d.points = b, c.setGeometry(a, d))
};
mxEdgeHandler.prototype.addPoint = function(a, b) {
    var c = mxUtils.convertPoint(this.graph.container, mxEvent.getClientX(b), mxEvent.getClientY(b)),
        d = this.graph.isGridEnabledEvent(b);
    this.convertPoint(c, d);
    this.addPointAt(a, c.x, c.y);
    mxEvent.consume(b)
};
mxEdgeHandler.prototype.addPointAt = function(a, b, c) {
    var d = this.graph.getCellGeometry(a.cell);
    b = new mxPoint(b, c);
    if (null != d) {
        d = d.clone();
        c = this.graph.view.translate;
        var e = this.graph.view.scale;
        c = mxUtils.findNearestSegment(a, (b.x + c.x) * e, (b.y + c.y) * e);
        null == d.points ? d.points = [b] : d.points.splice(c, 0, b);
        this.graph.getModel().setGeometry(a.cell, d);
        this.refresh();
        this.redraw()
    }
};
mxEdgeHandler.prototype.removePoint = function(a, b) {
    if (0 < b && b < this.abspoints.length - 1) {
        var c = this.graph.getCellGeometry(this.state.cell);
        null != c && null != c.points && (c = c.clone(), c.points.splice(b - 1, 1), this.graph.getModel().setGeometry(a.cell, c), this.refresh(), this.redraw())
    }
};
mxEdgeHandler.prototype.getHandleFillColor = function(a) {
    a = 0 == a;
    var b = this.state.cell,
        c = this.graph.getModel().getTerminal(b, a),
        d = mxConstants.HANDLE_FILLCOLOR;
    null != c && !this.graph.isCellDisconnectable(b, c, a) || null == c && !this.graph.isTerminalPointMovable(b, a) ? d = mxConstants.LOCKED_HANDLE_FILLCOLOR : null != c && this.graph.isCellDisconnectable(b, c, a) && (d = mxConstants.CONNECT_HANDLE_FILLCOLOR);
    return d
};
mxEdgeHandler.prototype.redraw = function() {
    this.abspoints = this.state.absolutePoints.slice();
    this.redrawHandles();
    var a = this.graph.getModel().getGeometry(this.state.cell).points;
    if (null != this.bends && 0 < this.bends.length && null != a) {
        null == this.points && (this.points = []);
        for (var b = 1; b < this.bends.length - 1; b++) null != this.bends[b] && null != this.abspoints[b] && (this.points[b - 1] = a[b - 1])
    }
    this.drawPreview()
};
mxEdgeHandler.prototype.redrawHandles = function() {
    var a = this.state.cell,
        b = this.labelShape.bounds;
    this.label = new mxPoint(this.state.absoluteOffset.x, this.state.absoluteOffset.y);
    this.labelShape.bounds = new mxRectangle(Math.round(this.label.x - b.width / 2), Math.round(this.label.y - b.height / 2), b.width, b.height);
    b = this.graph.getLabel(a);
    this.labelShape.visible = null != b && 0 < b.length && this.graph.isLabelMovable(a);
    if (null != this.bends && 0 < this.bends.length) {
        var c = this.abspoints.length - 1,
            a = this.abspoints[0],
            d = a.x,
            e = a.y,
            b = this.bends[0].bounds;
        this.bends[0].bounds = new mxRectangle(Math.round(d - b.width / 2), Math.round(e - b.height / 2), b.width, b.height);
        this.bends[0].fill = this.getHandleFillColor(0);
        this.bends[0].redraw();
        var c = this.abspoints[c],
            d = c.x,
            e = c.y,
            f = this.bends.length - 1,
            b = this.bends[f].bounds;
        this.bends[f].bounds = new mxRectangle(Math.round(d - b.width / 2), Math.round(e - b.height / 2), b.width, b.height);
        this.bends[f].fill = this.getHandleFillColor(f);
        this.bends[f].redraw();
        this.redrawInnerBends(a, c);
        this.labelShape.redraw()
    }
};
mxEdgeHandler.prototype.redrawInnerBends = function(a, b) {
    for (var c = 1; c < this.bends.length - 1; c++)
        if (null != this.bends[c])
            if (null != this.abspoints[c]) {
                var d = this.abspoints[c].x,
                    e = this.abspoints[c].y,
                    f = this.bends[c].bounds;
                this.bends[c].node.style.visibility = "visible";
                this.bends[c].bounds = new mxRectangle(Math.round(d - f.width / 2), Math.round(e - f.height / 2), f.width, f.height);
                this.manageLabelHandle ? this.checkLabelHandle(this.bends[c].bounds) : null == this.handleImage && (this.labelShape.visible && mxUtils.intersects(this.bends[c].bounds,
                    this.labelShape.bounds)) && (w = mxConstants.HANDLE_SIZE + 3, h = mxConstants.HANDLE_SIZE + 3, this.bends[c].bounds = new mxRectangle(Math.round(d - w / 2), Math.round(e - h / 2), w, h));
                this.bends[c].redraw()
            } else this.bends[c].destroy(), this.bends[c] = null
};
mxEdgeHandler.prototype.checkLabelHandle = function(a) {
    if (null != this.labelShape) {
        var b = this.labelShape.bounds;
        mxUtils.intersects(a, b) && (a.getCenterY() < b.getCenterY() ? b.y = a.y + a.height : b.y = a.y - b.height)
    }
};
mxEdgeHandler.prototype.drawPreview = function() {
    if (this.isLabel) {
        var a = this.labelShape.bounds,
            a = new mxRectangle(Math.round(this.label.x - a.width / 2), Math.round(this.label.y - a.height / 2), a.width, a.height);
        this.labelShape.bounds = a;
        this.labelShape.redraw()
    } else this.shape.points = this.abspoints, this.shape.scale = this.state.view.scale, this.shape.strokewidth = this.getSelectionStrokeWidth() / this.shape.scale / this.shape.scale, this.shape.arrowStrokewidth = this.getSelectionStrokeWidth(), this.shape.redraw()
};
mxEdgeHandler.prototype.refresh = function() {
    this.abspoints = this.getSelectionPoints(this.state);
    this.shape.points = this.abspoints;
    this.points = [];
    null != this.bends && (this.destroyBends(), this.bends = this.createBends());
    null != this.labelShape && (null != this.labelShape.node && null != this.labelShape.node.parentNode) && this.labelShape.node.parentNode.appendChild(this.labelShape.node)
};
mxEdgeHandler.prototype.destroyBends = function() {
    if (null != this.bends) {
        for (var a = 0; a < this.bends.length; a++) null != this.bends[a] && this.bends[a].destroy();
        this.bends = null
    }
};
mxEdgeHandler.prototype.destroy = function() {
    null != this.escapeHandler && (this.state.view.graph.removeListener(this.escapeHandler), this.escapeHandler = null);
    null != this.marker && (this.marker.destroy(), this.marker = null);
    null != this.shape && (this.shape.destroy(), this.shape = null);
    null != this.labelShape && (this.labelShape.destroy(), this.labelShape = null);
    null != this.constraintHandler && (this.constraintHandler.destroy(), this.constraintHandler = null);
    this.destroyBends();
    this.removeHint()
};

function mxElbowEdgeHandler(a) {
    mxEdgeHandler.call(this, a)
}
mxUtils.extend(mxElbowEdgeHandler, mxEdgeHandler);
mxElbowEdgeHandler.prototype = new mxEdgeHandler;
mxElbowEdgeHandler.prototype.constructor = mxElbowEdgeHandler;
mxElbowEdgeHandler.prototype.flipEnabled = !0;
mxElbowEdgeHandler.prototype.doubleClickOrientationResource = "none" != mxClient.language ? "doubleClickOrientation" : "";
mxElbowEdgeHandler.prototype.createBends = function() {
    var a = [],
        b = this.createHandleShape(0);
    this.initBend(b);
    b.node.style.cursor = mxConstants.CURSOR_BEND_HANDLE;
    mxEvent.redirectMouseEvents(b.node, this.graph, this.state);
    a.push(b);
    mxClient.IS_TOUCH && b.node.setAttribute("pointer-events", "none");
    a.push(this.createVirtualBend());
    this.points.push(new mxPoint(0, 0));
    b = this.createHandleShape(2);
    this.initBend(b);
    b.node.style.cursor = mxConstants.CURSOR_BEND_HANDLE;
    mxEvent.redirectMouseEvents(b.node, this.graph, this.state);
    a.push(b);
    mxClient.IS_TOUCH && b.node.setAttribute("pointer-events", "none");
    return a
};
mxElbowEdgeHandler.prototype.createVirtualBend = function() {
    var a = this.createHandleShape();
    this.initBend(a);
    var b = this.getCursorForBend();
    a.node.style.cursor = b;
    b = mxUtils.bind(this, function(a) {
        !mxEvent.isConsumed(a) && this.flipEnabled && (this.graph.flipEdge(this.state.cell, a), mxEvent.consume(a))
    });
    mxEvent.redirectMouseEvents(a.node, this.graph, this.state, null, null, null, b);
    this.graph.isCellBendable(this.state.cell) || (a.node.style.display = "none");
    return a
};
mxElbowEdgeHandler.prototype.getCursorForBend = function() {
    return this.state.style[mxConstants.STYLE_EDGE] == mxEdgeStyle.TopToBottom || this.state.style[mxConstants.STYLE_EDGE] == mxConstants.EDGESTYLE_TOPTOBOTTOM || (this.state.style[mxConstants.STYLE_EDGE] == mxEdgeStyle.ElbowConnector || this.state.style[mxConstants.STYLE_EDGE] == mxConstants.EDGESTYLE_ELBOW) && this.state.style[mxConstants.STYLE_ELBOW] == mxConstants.ELBOW_VERTICAL ? "row-resize" : "col-resize"
};
mxElbowEdgeHandler.prototype.getTooltipForNode = function(a) {
    var b = null;
    if (null != this.bends && null != this.bends[1] && (a == this.bends[1].node || a.parentNode == this.bends[1].node)) b = this.doubleClickOrientationResource, b = mxResources.get(b) || b;
    return b
};
mxElbowEdgeHandler.prototype.convertPoint = function(a, b) {
    var c = this.graph.getView().getScale(),
        d = this.graph.getView().getTranslate(),
        e = this.state.origin;
    b && (a.x = this.graph.snap(a.x), a.y = this.graph.snap(a.y));
    a.x = Math.round(a.x / c - d.x - e.x);
    a.y = Math.round(a.y / c - d.y - e.y)
};
mxElbowEdgeHandler.prototype.redrawInnerBends = function(a, b) {
    var c = this.graph.getModel().getGeometry(this.state.cell),
        d = this.state.absolutePoints,
        e = null;
    1 < d.length ? (a = d[1], b = d[d.length - 2]) : null != c.points && 0 < c.points.length && (e = d[0]);
    e = null == e ? new mxPoint(a.x + (b.x - a.x) / 2, a.y + (b.y - a.y) / 2) : new mxPoint(this.graph.getView().scale * (e.x + this.graph.getView().translate.x + this.state.origin.x), this.graph.getView().scale * (e.y + this.graph.getView().translate.y + this.state.origin.y));
    d = this.bends[1].bounds;
    c = d.width;
    d = d.height;
    c = new mxRectangle(Math.round(e.x - c / 2), Math.round(e.y - d / 2), c, d);
    this.manageLabelHandle ? this.checkLabelHandle(c) : null == this.handleImage && (this.labelShape.visible && mxUtils.intersects(c, this.labelShape.bounds)) && (c = mxConstants.HANDLE_SIZE + 3, d = mxConstants.HANDLE_SIZE + 3, c = new mxRectangle(Math.round(e.x - c / 2), Math.round(e.y - d / 2), c, d));
    this.bends[1].bounds = c;
    this.bends[1].redraw();
    this.manageLabelHandle && this.checkLabelHandle(this.bends[1].bounds)
};

function mxEdgeSegmentHandler(a) {
    mxEdgeHandler.call(this, a)
}
mxUtils.extend(mxEdgeSegmentHandler, mxEdgeHandler);
mxEdgeSegmentHandler.prototype = new mxElbowEdgeHandler;
mxEdgeSegmentHandler.prototype.constructor = mxEdgeSegmentHandler;
mxEdgeSegmentHandler.prototype.getPreviewPoints = function(a) {
    if (this.isSource || this.isTarget) return mxElbowEdgeHandler.prototype.getPreviewPoints.apply(this, arguments);
    this.convertPoint(a, !1);
    var b = this.state.absolutePoints,
        c = b[0].clone();
    this.convertPoint(c, !1);
    for (var d = [], e = 1; e < b.length; e++) {
        var f = b[e].clone();
        this.convertPoint(f, !1);
        e == this.index && (c.x == f.x ? (c.x = a.x, f.x = a.x) : (c.y = a.y, f.y = a.y));
        e < b.length - 1 && d.push(f);
        c = f
    }
    if (1 == d.length) {
        if (c = this.state.view, e = this.state.getVisibleTerminalState(!0),
            f = this.state.getVisibleTerminalState(!1), null != f & null != e) {
            var g = this.state.origin.x,
                k = this.state.origin.y;
            mxUtils.contains(f, d[0].x + g, d[0].y + k) ? b[1].y == b[2].y ? d[0].y = c.getRoutingCenterY(e) - k : d[0].x = c.getRoutingCenterX(e) - g : mxUtils.contains(e, d[0].x + g, d[0].y + k) && (b[1].y == b[0].y ? d[0].y = c.getRoutingCenterY(f) - k : d[0].x = c.getRoutingCenterX(f) - g)
        }
    } else 0 == d.length && (d = [a]);
    return d
};
mxEdgeSegmentHandler.prototype.createBends = function() {
    var a = [],
        b = this.createHandleShape(0);
    this.initBend(b);
    b.node.style.cursor = mxConstants.CURSOR_BEND_HANDLE;
    mxEvent.redirectMouseEvents(b.node, this.graph, this.state);
    a.push(b);
    mxClient.IS_TOUCH && b.node.setAttribute("pointer-events", "none");
    var c = this.state.absolutePoints;
    if (this.graph.isCellBendable(this.state.cell)) {
        null == this.points && (this.points = []);
        for (var d = 0; d < c.length - 1; d++) b = this.createVirtualBend(), a.push(b), b.node.style.cursor = 0 == c[d].x -
            c[d + 1].x ? "col-resize" : "row-resize", this.points.push(new mxPoint(0, 0)), mxClient.IS_TOUCH && b.node.setAttribute("pointer-events", "none")
    }
    b = this.createHandleShape(c.length);
    this.initBend(b);
    b.node.style.cursor = mxConstants.CURSOR_BEND_HANDLE;
    mxEvent.redirectMouseEvents(b.node, this.graph, this.state);
    a.push(b);
    mxClient.IS_TOUCH && b.node.setAttribute("pointer-events", "none");
    return a
};
mxEdgeSegmentHandler.prototype.redraw = function() {
    this.refresh();
    mxEdgeHandler.prototype.redraw.apply(this, arguments)
};
mxEdgeSegmentHandler.prototype.redrawInnerBends = function(a, b) {
    if (this.graph.isCellBendable(this.state.cell)) {
        var c = this.state.absolutePoints;
        if (null != c && 1 < c.length)
            for (var d = 0; d < this.state.absolutePoints.length - 1; d++)
                if (null != this.bends[d + 1]) {
                    a = c[d];
                    b = c[d + 1];
                    var e = new mxPoint(a.x + (b.x - a.x) / 2, a.y + (b.y - a.y) / 2),
                        f = this.bends[d + 1].bounds;
                    this.bends[d + 1].bounds = new mxRectangle(Math.round(e.x - f.width / 2), Math.round(e.y - f.height / 2), f.width, f.height);
                    this.bends[d + 1].redraw();
                    this.manageLabelHandle && this.checkLabelHandle(this.bends[d +
                        1].bounds)
                }
    }
};
mxEdgeSegmentHandler.prototype.changePoints = function(a, b) {
    b = [];
    var c = this.abspoints;
    if (1 < c.length)
        for (var d = c[0], e = c[1], f = 2; f < c.length; f++) {
            var g = c[f];
            if ((Math.round(d.x) != Math.round(e.x) || Math.round(e.x) != Math.round(g.x)) && (Math.round(d.y) != Math.round(e.y) || Math.round(e.y) != Math.round(g.y))) d = e, e = e.clone(), this.convertPoint(e, !1), b.push(e);
            e = g
        }
    mxElbowEdgeHandler.prototype.changePoints.apply(this, arguments)
};

function mxKeyHandler(a, b) {
    null != a && (this.graph = a, this.target = b || document.documentElement, this.normalKeys = [], this.shiftKeys = [], this.controlKeys = [], this.controlShiftKeys = [], this.keydownHandler = mxUtils.bind(this, function(a) {
        this.keyDown(a)
    }), mxEvent.addListener(this.target, "keydown", this.keydownHandler), mxClient.IS_IE && mxEvent.addListener(window, "unload", mxUtils.bind(this, function() {
        this.destroy()
    })))
}
mxKeyHandler.prototype.graph = null;
mxKeyHandler.prototype.target = null;
mxKeyHandler.prototype.normalKeys = null;
mxKeyHandler.prototype.shiftKeys = null;
mxKeyHandler.prototype.controlKeys = null;
mxKeyHandler.prototype.controlShiftKeys = null;
mxKeyHandler.prototype.enabled = !0;
mxKeyHandler.prototype.isEnabled = function() {
    return this.enabled
};
mxKeyHandler.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxKeyHandler.prototype.bindKey = function(a, b) {
    this.normalKeys[a] = b
};
mxKeyHandler.prototype.bindShiftKey = function(a, b) {
    this.shiftKeys[a] = b
};
mxKeyHandler.prototype.bindControlKey = function(a, b) {
    this.controlKeys[a] = b
};
mxKeyHandler.prototype.bindControlShiftKey = function(a, b) {
    this.controlShiftKeys[a] = b
};
mxKeyHandler.prototype.isControlDown = function(a) {
    return mxEvent.isControlDown(a)
};
mxKeyHandler.prototype.getFunction = function(a) {
    return null != a ? this.isControlDown(a) ? mxEvent.isShiftDown(a) ? this.controlShiftKeys[a.keyCode] : this.controlKeys[a.keyCode] : mxEvent.isShiftDown(a) ? this.shiftKeys[a.keyCode] : this.normalKeys[a.keyCode] : null
};
mxKeyHandler.prototype.isGraphEvent = function(a) {
    var b = mxEvent.getSource(a);
    return b == this.target || b.parentNode == this.target || null != this.graph.cellEditor && this.graph.cellEditor.isEventSource(a) ? !0 : mxUtils.isAncestorNode(this.graph.container, b)
};
mxKeyHandler.prototype.keyDown = function(a) {
    if (this.graph.isEnabled() && !mxEvent.isConsumed(a) && this.isGraphEvent(a) && this.isEnabled())
        if (27 == a.keyCode) this.escape(a);
        else if (!this.graph.isEditing()) {
        var b = this.getFunction(a);
        null != b && (b(a), mxEvent.consume(a))
    }
};
mxKeyHandler.prototype.escape = function(a) {
    this.graph.isEscapeEnabled() && this.graph.escape(a)
};
mxKeyHandler.prototype.destroy = function() {
    null != this.target && null != this.keydownHandler && (mxEvent.removeListener(this.target, "keydown", this.keydownHandler), this.keydownHandler = null);
    this.target = null
};

function mxTooltipHandler(a, b) {
    null != a && (this.graph = a, this.delay = b || 500, this.graph.addMouseListener(this))
}
mxTooltipHandler.prototype.zIndex = 10005;
mxTooltipHandler.prototype.graph = null;
mxTooltipHandler.prototype.delay = null;
mxTooltipHandler.prototype.ignoreTouchEvents = !0;
mxTooltipHandler.prototype.hideOnHover = !1;
mxTooltipHandler.prototype.destroyed = !1;
mxTooltipHandler.prototype.enabled = !0;
mxTooltipHandler.prototype.isEnabled = function() {
    return this.enabled
};
mxTooltipHandler.prototype.setEnabled = function(a) {
    this.enabled = a
};
mxTooltipHandler.prototype.isHideOnHover = function() {
    return this.hideOnHover
};
mxTooltipHandler.prototype.setHideOnHover = function(a) {
    this.hideOnHover = a
};
mxTooltipHandler.prototype.init = function() {
    null != document.body && (this.div = document.createElement("div"), this.div.className = "mxTooltip", this.div.style.visibility = "hidden", document.body.appendChild(this.div), mxEvent.addGestureListeners(this.div, mxUtils.bind(this, function(a) {
        this.hideTooltip()
    })))
};
mxTooltipHandler.prototype.mouseDown = function(a, b) {
    this.reset(b, !1);
    this.hideTooltip()
};
mxTooltipHandler.prototype.mouseMove = function(a, b) {
    if (b.getX() != this.lastX || b.getY() != this.lastY) this.reset(b, !0), (this.isHideOnHover() || b.getState() != this.state || b.getSource() != this.node && (!this.stateSource || null != b.getState() && this.stateSource == (b.isSource(b.getState().shape) || !b.isSource(b.getState().text)))) && this.hideTooltip();
    this.lastX = b.getX();
    this.lastY = b.getY()
};
mxTooltipHandler.prototype.mouseUp = function(a, b) {
    this.reset(b, !0);
    this.hideTooltip()
};
mxTooltipHandler.prototype.resetTimer = function() {
    null != this.thread && (window.clearTimeout(this.thread), this.thread = null)
};
mxTooltipHandler.prototype.reset = function(a, b) {
    if (!this.ignoreTouchEvents || mxEvent.isMouseEvent(a.getEvent()))
        if (this.resetTimer(), b && this.isEnabled() && null != a.getState() && (null == this.div || "hidden" == this.div.style.visibility)) {
            var c = a.getState(),
                d = a.getSource(),
                e = a.getX(),
                f = a.getY(),
                g = a.isSource(c.shape) || a.isSource(c.text);
            this.thread = window.setTimeout(mxUtils.bind(this, function() {
                if (!this.graph.isEditing() && !this.graph.popupMenuHandler.isMenuShowing() && !this.graph.isMouseDown) {
                    var a = this.graph.getTooltip(c,
                        d, e, f);
                    this.show(a, e, f);
                    this.state = c;
                    this.node = d;
                    this.stateSource = g
                }
            }), this.delay)
        }
};
mxTooltipHandler.prototype.hide = function() {
    this.resetTimer();
    this.hideTooltip()
};
mxTooltipHandler.prototype.hideTooltip = function() {
    null != this.div && (this.div.style.visibility = "hidden")
};
mxTooltipHandler.prototype.show = function(a, b, c) {
    if (!this.destroyed && null != a && 0 < a.length) {
        null == this.div && this.init();
        var d = mxUtils.getScrollOrigin();
        this.div.style.zIndex = this.zIndex;
        this.div.style.left = b + d.x + "px";
        this.div.style.top = c + mxConstants.TOOLTIP_VERTICAL_OFFSET + d.y + "px";
        mxUtils.isNode(a) ? (this.div.innerHTML = "", this.div.appendChild(a)) : this.div.innerHTML = a.replace(/\n/g, "<br>");
        this.div.style.visibility = "";
        mxUtils.fit(this.div)
    }
};
mxTooltipHandler.prototype.destroy = function() {
    this.destroyed || (this.graph.removeMouseListener(this), mxEvent.release(this.div), null != this.div && null != this.div.parentNode && this.div.parentNode.removeChild(this.div), this.destroyed = !0, this.div = null)
};

function mxCellTracker(a, b, c) {
    mxCellMarker.call(this, a, b);
    this.graph.addMouseListener(this);
    null != c && (this.getCell = c);
    mxClient.IS_IE && mxEvent.addListener(window, "unload", mxUtils.bind(this, function() {
        this.destroy()
    }))
}
mxUtils.extend(mxCellTracker, mxCellMarker);
mxCellTracker.prototype.mouseDown = function(a, b) {};
mxCellTracker.prototype.mouseMove = function(a, b) {
    this.isEnabled() && this.process(b)
};
mxCellTracker.prototype.mouseUp = function(a, b) {
    this.reset()
};
mxCellTracker.prototype.destroy = function() {
    this.destroyed || (this.destroyed = !0, this.graph.removeMouseListener(this), mxCellMarker.prototype.destroy.apply(this))
};

function mxCellHighlight(a, b, c, d) {
    null != a && (this.graph = a, this.highlightColor = null != b ? b : mxConstants.DEFAULT_VALID_COLOR, this.strokeWidth = null != c ? c : mxConstants.HIGHLIGHT_STROKEWIDTH, this.dashed = null != d ? d : !1, this.repaintHandler = mxUtils.bind(this, function() {
            if (null != this.state) {
                var a = this.graph.view.getState(this.state.cell);
                null == a ? this.hide() : (this.state = a, this.repaint())
            }
        }), this.graph.getView().addListener(mxEvent.SCALE, this.repaintHandler), this.graph.getView().addListener(mxEvent.TRANSLATE, this.repaintHandler),
        this.graph.getView().addListener(mxEvent.SCALE_AND_TRANSLATE, this.repaintHandler), this.graph.getModel().addListener(mxEvent.CHANGE, this.repaintHandler), this.resetHandler = mxUtils.bind(this, function() {
            this.hide()
        }), this.graph.getView().addListener(mxEvent.DOWN, this.resetHandler), this.graph.getView().addListener(mxEvent.UP, this.resetHandler))
}
mxCellHighlight.prototype.keepOnTop = !1;
mxCellHighlight.prototype.graph = !0;
mxCellHighlight.prototype.state = null;
mxCellHighlight.prototype.spacing = 2;
mxCellHighlight.prototype.resetHandler = null;
mxCellHighlight.prototype.setHighlightColor = function(a) {
    this.highlightColor = a;
    null != this.shape && (this.shape.stroke = a)
};
mxCellHighlight.prototype.drawHighlight = function() {
    this.shape = this.createShape();
    this.repaint();
    !this.keepOnTop && this.shape.node.parentNode.firstChild != this.shape.node && this.shape.node.parentNode.insertBefore(this.shape.node, this.shape.node.parentNode.firstChild)
};
mxCellHighlight.prototype.createShape = function() {
    var a = mxStencilRegistry.getStencil(this.state.style[mxConstants.STYLE_SHAPE]),
        b = null,
        b = null != a ? new mxShape(a) : new this.state.shape.constructor;
    b.scale = this.state.view.scale;
    b.outline = !0;
    b.points = this.state.absolutePoints;
    b.apply(this.state);
    b.strokewidth = this.strokeWidth / this.state.view.scale / this.state.view.scale;
    b.arrowStrokewidth = this.strokeWidth;
    b.stroke = this.highlightColor;
    b.isDashed = this.dashed;
    b.isShadow = !1;
    b.dialect = this.graph.dialect != mxConstants.DIALECT_SVG ?
        mxConstants.DIALECT_VML : mxConstants.DIALECT_SVG;
    b.init(this.graph.getView().getOverlayPane());
    mxEvent.redirectMouseEvents(b.node, this.graph, this.state);
    this.graph.dialect != mxConstants.DIALECT_SVG ? b.pointerEvents = !1 : b.svgPointerEvents = "stroke";
    return b
};
mxCellHighlight.prototype.repaint = function() {
    null != this.state && null != this.shape && (this.graph.model.isEdge(this.state.cell) ? this.shape.points = this.state.absolutePoints : (this.shape.bounds = new mxRectangle(this.state.x - this.spacing, this.state.y - this.spacing, this.state.width + 2 * this.spacing, this.state.height + 2 * this.spacing), this.shape.rotation = Number(this.state.style[mxConstants.STYLE_ROTATION] || "0")), null != this.state.shape && this.shape.setCursor(this.state.shape.getCursor()), this.shape.redraw())
};
mxCellHighlight.prototype.hide = function() {
    this.highlight(null)
};
mxCellHighlight.prototype.highlight = function(a) {
    this.state != a && (null != this.shape && (this.shape.destroy(), this.shape = null), this.state = a, null != this.state && this.drawHighlight())
};
mxCellHighlight.prototype.destroy = function() {
    this.graph.getView().removeListener(this.resetHandler);
    this.graph.getView().removeListener(this.repaintHandler);
    this.graph.getModel().removeListener(this.repaintHandler);
    null != this.shape && (this.shape.destroy(), this.shape = null)
};

function mxDefaultKeyHandler(a) {
    if (null != a) {
        this.editor = a;
        this.handler = new mxKeyHandler(a.graph);
        var b = this.handler.escape;
        this.handler.escape = function(c) {
            b.apply(this, arguments);
            a.hideProperties();
            a.fireEvent(new mxEventObject(mxEvent.ESCAPE, "event", c))
        }
    }
}
mxDefaultKeyHandler.prototype.editor = null;
mxDefaultKeyHandler.prototype.handler = null;
mxDefaultKeyHandler.prototype.bindAction = function(a, b, c) {
    var d = mxUtils.bind(this, function() {
        this.editor.execute(b)
    });
    c ? this.handler.bindControlKey(a, d) : this.handler.bindKey(a, d)
};
mxDefaultKeyHandler.prototype.destroy = function() {
    this.handler.destroy();
    this.handler = null
};

function mxDefaultPopupMenu(a) {
    this.config = a
}
mxDefaultPopupMenu.prototype.imageBasePath = null;
mxDefaultPopupMenu.prototype.config = null;
mxDefaultPopupMenu.prototype.createMenu = function(a, b, c, d) {
    if (null != this.config) {
        var e = this.createConditions(a, c, d);
        this.addItems(a, b, c, d, e, this.config.firstChild, null)
    }
};
mxDefaultPopupMenu.prototype.addItems = function(a, b, c, d, e, f, g) {
    for (var k = !1; null != f;) {
        if ("add" == f.nodeName) {
            var l = f.getAttribute("if");
            if (null == l || e[l]) {
                var l = f.getAttribute("as"),
                    l = mxResources.get(l) || l,
                    m = mxUtils.eval(mxUtils.getTextContent(f)),
                    n = f.getAttribute("action"),
                    p = f.getAttribute("icon"),
                    q = f.getAttribute("iconCls");
                k && (b.addSeparator(g), k = !1);
                null != p && this.imageBasePath && (p = this.imageBasePath + p);
                l = this.addAction(b, a, l, p, m, n, c, g, q);
                this.addItems(a, b, c, d, e, f.firstChild, l)
            }
        } else "separator" ==
            f.nodeName && (k = !0);
        f = f.nextSibling
    }
};
mxDefaultPopupMenu.prototype.addAction = function(a, b, c, d, e, f, g, k, l) {
    return a.addItem(c, d, function(a) {
        "function" == typeof e && e.call(b, b, g, a);
        null != f && b.execute(f, g, a)
    }, k, l)
};
mxDefaultPopupMenu.prototype.createConditions = function(a, b, c) {
    var d = a.graph.getModel(),
        e = d.getChildCount(b),
        f = [];
    f.nocell = null == b;
    f.ncells = 1 < a.graph.getSelectionCount();
    f.notRoot = d.getRoot() != d.getParent(a.graph.getDefaultParent());
    f.cell = null != b;
    d = null != b && 1 == a.graph.getSelectionCount();
    f.nonEmpty = d && 0 < e;
    f.expandable = d && a.graph.isCellFoldable(b, !1);
    f.collapsable = d && a.graph.isCellFoldable(b, !0);
    f.validRoot = d && a.graph.isValidRoot(b);
    f.emptyValidRoot = f.validRoot && 0 == e;
    f.swimlane = d && a.graph.isSwimlane(b);
    e = this.config.getElementsByTagName("condition");
    for (d = 0; d < e.length; d++) {
        var g = mxUtils.eval(mxUtils.getTextContent(e[d])),
            k = e[d].getAttribute("name");
        null != k && "function" == typeof g && (f[k] = g(a, b, c))
    }
    return f
};

function mxDefaultToolbar(a, b) {
    this.editor = b;
    null != a && null != b && this.init(a)
}
mxDefaultToolbar.prototype.editor = null;
mxDefaultToolbar.prototype.toolbar = null;
mxDefaultToolbar.prototype.resetHandler = null;
mxDefaultToolbar.prototype.spacing = 4;
mxDefaultToolbar.prototype.connectOnDrop = !1;
mxDefaultToolbar.prototype.init = function(a) {
    null != a && (this.toolbar = new mxToolbar(a), this.toolbar.addListener(mxEvent.SELECT, mxUtils.bind(this, function(a, c) {
        var d = c.getProperty("function");
        this.editor.insertFunction = null != d ? mxUtils.bind(this, function() {
            d.apply(this, arguments);
            this.toolbar.resetMode()
        }) : null
    })), this.resetHandler = mxUtils.bind(this, function() {
        null != this.toolbar && this.toolbar.resetMode(!0)
    }), this.editor.graph.addListener(mxEvent.DOUBLE_CLICK, this.resetHandler), this.editor.addListener(mxEvent.ESCAPE,
        this.resetHandler))
};
mxDefaultToolbar.prototype.addItem = function(a, b, c, d) {
    var e = mxUtils.bind(this, function() {
        null != c && 0 < c.length && this.editor.execute(c)
    });
    return this.toolbar.addItem(a, b, e, d)
};
mxDefaultToolbar.prototype.addSeparator = function(a) {
    a = a || mxClient.imageBasePath + "/separator.gif";
    this.toolbar.addSeparator(a)
};
mxDefaultToolbar.prototype.addCombo = function() {
    return this.toolbar.addCombo()
};
mxDefaultToolbar.prototype.addActionCombo = function(a) {
    return this.toolbar.addActionCombo(a)
};
mxDefaultToolbar.prototype.addActionOption = function(a, b, c) {
    var d = mxUtils.bind(this, function() {
        this.editor.execute(c)
    });
    this.addOption(a, b, d)
};
mxDefaultToolbar.prototype.addOption = function(a, b, c) {
    return this.toolbar.addOption(a, b, c)
};
mxDefaultToolbar.prototype.addMode = function(a, b, c, d, e) {
    var f = mxUtils.bind(this, function() {
        this.editor.setMode(c);
        null != e && e(this.editor)
    });
    return this.toolbar.addSwitchMode(a, b, f, d)
};
mxDefaultToolbar.prototype.addPrototype = function(a, b, c, d, e, f) {
    var g = mxUtils.bind(this, function() {
            return "function" == typeof c ? c() : null != c ? this.editor.graph.cloneCells([c])[0] : null
        }),
        k = mxUtils.bind(this, function(a, b) {
            "function" == typeof e ? e(this.editor, g(), a, b) : this.drop(g(), a, b);
            this.toolbar.resetMode();
            mxEvent.consume(a)
        });
    a = this.toolbar.addMode(a, b, k, d, null, f);
    this.installDropHandler(a, function(a, b, c) {
        k(b, c)
    });
    return a
};
mxDefaultToolbar.prototype.drop = function(a, b, c) {
    var d = this.editor.graph,
        e = d.getModel();
    if (null == c || e.isEdge(c) || !this.connectOnDrop || !d.isCellConnectable(c)) {
        for (; null != c && !d.isValidDropTarget(c, [a], b);) c = e.getParent(c);
        this.insert(a, b, c)
    } else this.connect(a, b, c)
};
mxDefaultToolbar.prototype.insert = function(a, b, c) {
    var d = this.editor.graph;
    if (d.canImportCell(a)) {
        var e = mxEvent.getClientX(b),
            f = mxEvent.getClientY(b),
            e = mxUtils.convertPoint(d.container, e, f);
        return d.isSplitEnabled() && d.isSplitTarget(c, [a], b) ? d.splitEdge(c, [a], null, e.x, e.y) : this.editor.addVertex(c, a, e.x, e.y)
    }
    return null
};
mxDefaultToolbar.prototype.connect = function(a, b, c) {
    b = this.editor.graph;
    var d = b.getModel();
    if (null != c && b.isCellConnectable(a) && b.isEdgeValid(null, c, a)) {
        var e = null;
        d.beginUpdate();
        try {
            var f = d.getGeometry(c),
                g = d.getGeometry(a).clone();
            g.x = f.x + (f.width - g.width) / 2;
            g.y = f.y + (f.height - g.height) / 2;
            var k = this.spacing * b.gridSize,
                l = 20 * d.getDirectedEdgeCount(c, !0);
            this.editor.horizontalFlow ? g.x += (g.width + f.width) / 2 + k + l : g.y += (g.height + f.height) / 2 + k + l;
            a.setGeometry(g);
            var m = d.getParent(c);
            b.addCell(a, m);
            b.constrainChild(a);
            e = this.editor.createEdge(c, a);
            if (null == d.getGeometry(e)) {
                var n = new mxGeometry;
                n.relative = !0;
                d.setGeometry(e, n)
            }
            b.addEdge(e, m, c, a)
        } finally {
            d.endUpdate()
        }
        b.setSelectionCells([a, e]);
        b.scrollCellToVisible(a)
    }
};
mxDefaultToolbar.prototype.installDropHandler = function(a, b) {
    var c = document.createElement("img");
    c.setAttribute("src", a.getAttribute("src"));
    var d = mxUtils.bind(this, function(e) {
        c.style.width = 2 * a.offsetWidth + "px";
        c.style.height = 2 * a.offsetHeight + "px";
        mxUtils.makeDraggable(a, this.editor.graph, b, c);
        mxEvent.removeListener(c, "load", d)
    });
    mxClient.IS_IE ? d() : mxEvent.addListener(c, "load", d)
};
mxDefaultToolbar.prototype.destroy = function() {
    null != this.resetHandler && (this.editor.graph.removeListener("dblclick", this.resetHandler), this.editor.removeListener("escape", this.resetHandler), this.resetHandler = null);
    null != this.toolbar && (this.toolbar.destroy(), this.toolbar = null)
};

function mxEditor(a) {
    this.actions = [];
    this.addActions();
    if (null != document.body) {
        this.cycleAttributeValues = [];
        this.popupHandler = new mxDefaultPopupMenu;
        this.undoManager = new mxUndoManager;
        this.graph = this.createGraph();
        this.toolbar = this.createToolbar();
        this.keyHandler = new mxDefaultKeyHandler(this);
        this.configure(a);
        this.graph.swimlaneIndicatorColorAttribute = this.cycleAttributeName;
        !mxClient.IS_LOCAL && null != this.urlInit && (this.session = this.createSession());
        if (null != this.onInit) this.onInit();
        mxClient.IS_IE &&
            mxEvent.addListener(window, "unload", mxUtils.bind(this, function() {
                this.destroy()
            }))
    }
}
mxLoadResources && mxResources.add(mxClient.basePath + "/resources/editor");
mxEditor.prototype = new mxEventSource;
mxEditor.prototype.constructor = mxEditor;
mxEditor.prototype.askZoomResource = "none" != mxClient.language ? "askZoom" : "";
mxEditor.prototype.lastSavedResource = "none" != mxClient.language ? "lastSaved" : "";
mxEditor.prototype.currentFileResource = "none" != mxClient.language ? "currentFile" : "";
mxEditor.prototype.propertiesResource = "none" != mxClient.language ? "properties" : "";
mxEditor.prototype.tasksResource = "none" != mxClient.language ? "tasks" : "";
mxEditor.prototype.helpResource = "none" != mxClient.language ? "help" : "";
mxEditor.prototype.outlineResource = "none" != mxClient.language ? "outline" : "";
mxEditor.prototype.outline = null;
mxEditor.prototype.graph = null;
mxEditor.prototype.graphRenderHint = null;
mxEditor.prototype.toolbar = null;
mxEditor.prototype.session = null;
mxEditor.prototype.status = null;
mxEditor.prototype.popupHandler = null;
mxEditor.prototype.undoManager = null;
mxEditor.prototype.keyHandler = null;
mxEditor.prototype.actions = null;
mxEditor.prototype.dblClickAction = "edit";
mxEditor.prototype.swimlaneRequired = !1;
mxEditor.prototype.disableContextMenu = !0;
mxEditor.prototype.insertFunction = null;
mxEditor.prototype.forcedInserting = !1;
mxEditor.prototype.templates = null;
mxEditor.prototype.defaultEdge = null;
mxEditor.prototype.defaultEdgeStyle = null;
mxEditor.prototype.defaultGroup = null;
mxEditor.prototype.groupBorderSize = null;
mxEditor.prototype.filename = null;
mxEditor.prototype.linefeed = "&#xa;";
mxEditor.prototype.postParameterName = "xml";
mxEditor.prototype.escapePostData = !0;
mxEditor.prototype.urlPost = null;
mxEditor.prototype.urlImage = null;
mxEditor.prototype.urlInit = null;
mxEditor.prototype.urlNotify = null;
mxEditor.prototype.urlPoll = null;
mxEditor.prototype.horizontalFlow = !1;
mxEditor.prototype.layoutDiagram = !1;
mxEditor.prototype.swimlaneSpacing = 0;
mxEditor.prototype.maintainSwimlanes = !1;
mxEditor.prototype.layoutSwimlanes = !1;
mxEditor.prototype.cycleAttributeValues = null;
mxEditor.prototype.cycleAttributeIndex = 0;
mxEditor.prototype.cycleAttributeName = "fillColor";
mxEditor.prototype.tasks = null;
mxEditor.prototype.tasksWindowImage = null;
mxEditor.prototype.tasksTop = 20;
mxEditor.prototype.help = null;
mxEditor.prototype.helpWindowImage = null;
mxEditor.prototype.urlHelp = null;
mxEditor.prototype.helpWidth = 300;
mxEditor.prototype.helpHeight = 260;
mxEditor.prototype.propertiesWidth = 240;
mxEditor.prototype.propertiesHeight = null;
mxEditor.prototype.movePropertiesDialog = !1;
mxEditor.prototype.validating = !1;
mxEditor.prototype.modified = !1;
mxEditor.prototype.isModified = function() {
    return this.modified
};
mxEditor.prototype.setModified = function(a) {
    this.modified = a
};
mxEditor.prototype.addActions = function() {
    this.addAction("save", function(a) {
        a.save()
    });
    this.addAction("print", function(a) {
        (new mxPrintPreview(a.graph, 1)).open()
    });
    this.addAction("show", function(a) {
        mxUtils.show(a.graph, null, 10, 10)
    });
    this.addAction("exportImage", function(a) {
        var b = a.getUrlImage();
        if (null == b || mxClient.IS_LOCAL) a.execute("show");
        else {
            var c = mxUtils.getViewXml(a.graph, 1),
                c = mxUtils.getXml(c, "\n");
            mxUtils.submit(b, a.postParameterName + "=" + encodeURIComponent(c), document, "_blank")
        }
    });
    this.addAction("refresh",
        function(a) {
            a.graph.refresh()
        });
    this.addAction("cut", function(a) {
        a.graph.isEnabled() && mxClipboard.cut(a.graph)
    });
    this.addAction("copy", function(a) {
        a.graph.isEnabled() && mxClipboard.copy(a.graph)
    });
    this.addAction("paste", function(a) {
        a.graph.isEnabled() && mxClipboard.paste(a.graph)
    });
    this.addAction("delete", function(a) {
        a.graph.isEnabled() && a.graph.removeCells()
    });
    this.addAction("group", function(a) {
        a.graph.isEnabled() && a.graph.setSelectionCell(a.groupCells())
    });
    this.addAction("ungroup", function(a) {
        a.graph.isEnabled() &&
            a.graph.setSelectionCells(a.graph.ungroupCells())
    });
    this.addAction("removeFromParent", function(a) {
        a.graph.isEnabled() && a.graph.removeCellsFromParent()
    });
    this.addAction("undo", function(a) {
        a.graph.isEnabled() && a.undo()
    });
    this.addAction("redo", function(a) {
        a.graph.isEnabled() && a.redo()
    });
    this.addAction("zoomIn", function(a) {
        a.graph.zoomIn()
    });
    this.addAction("zoomOut", function(a) {
        a.graph.zoomOut()
    });
    this.addAction("actualSize", function(a) {
        a.graph.zoomActual()
    });
    this.addAction("fit", function(a) {
        a.graph.fit()
    });
    this.addAction("showProperties", function(a, b) {
        a.showProperties(b)
    });
    this.addAction("selectAll", function(a) {
        a.graph.isEnabled() && a.graph.selectAll()
    });
    this.addAction("selectNone", function(a) {
        a.graph.isEnabled() && a.graph.clearSelection()
    });
    this.addAction("selectVertices", function(a) {
        a.graph.isEnabled() && a.graph.selectVertices()
    });
    this.addAction("selectEdges", function(a) {
        a.graph.isEnabled() && a.graph.selectEdges()
    });
    this.addAction("edit", function(a, b) {
        a.graph.isEnabled() && a.graph.isCellEditable(b) && a.graph.startEditingAtCell(b)
    });
    this.addAction("toBack", function(a, b) {
        a.graph.isEnabled() && a.graph.orderCells(!0)
    });
    this.addAction("toFront", function(a, b) {
        a.graph.isEnabled() && a.graph.orderCells(!1)
    });
    this.addAction("enterGroup", function(a, b) {
        a.graph.enterGroup(b)
    });
    this.addAction("exitGroup", function(a) {
        a.graph.exitGroup()
    });
    this.addAction("home", function(a) {
        a.graph.home()
    });
    this.addAction("selectPrevious", function(a) {
        a.graph.isEnabled() && a.graph.selectPreviousCell()
    });
    this.addAction("selectNext", function(a) {
        a.graph.isEnabled() &&
            a.graph.selectNextCell()
    });
    this.addAction("selectParent", function(a) {
        a.graph.isEnabled() && a.graph.selectParentCell()
    });
    this.addAction("selectChild", function(a) {
        a.graph.isEnabled() && a.graph.selectChildCell()
    });
    this.addAction("collapse", function(a) {
        a.graph.isEnabled() && a.graph.foldCells(!0)
    });
    this.addAction("collapseAll", function(a) {
        if (a.graph.isEnabled()) {
            var b = a.graph.getChildVertices();
            a.graph.foldCells(!0, !1, b)
        }
    });
    this.addAction("expand", function(a) {
        a.graph.isEnabled() && a.graph.foldCells(!1)
    });
    this.addAction("expandAll", function(a) {
        if (a.graph.isEnabled()) {
            var b = a.graph.getChildVertices();
            a.graph.foldCells(!1, !1, b)
        }
    });
    this.addAction("bold", function(a) {
        a.graph.isEnabled() && a.graph.toggleCellStyleFlags(mxConstants.STYLE_FONTSTYLE, mxConstants.FONT_BOLD)
    });
    this.addAction("italic", function(a) {
        a.graph.isEnabled() && a.graph.toggleCellStyleFlags(mxConstants.STYLE_FONTSTYLE, mxConstants.FONT_ITALIC)
    });
    this.addAction("underline", function(a) {
        a.graph.isEnabled() && a.graph.toggleCellStyleFlags(mxConstants.STYLE_FONTSTYLE,
            mxConstants.FONT_UNDERLINE)
    });
    this.addAction("shadow", function(a) {
        a.graph.isEnabled() && a.graph.toggleCellStyleFlags(mxConstants.STYLE_FONTSTYLE, mxConstants.FONT_SHADOW)
    });
    this.addAction("alignCellsLeft", function(a) {
        a.graph.isEnabled() && a.graph.alignCells(mxConstants.ALIGN_LEFT)
    });
    this.addAction("alignCellsCenter", function(a) {
        a.graph.isEnabled() && a.graph.alignCells(mxConstants.ALIGN_CENTER)
    });
    this.addAction("alignCellsRight", function(a) {
        a.graph.isEnabled() && a.graph.alignCells(mxConstants.ALIGN_RIGHT)
    });
    this.addAction("alignCellsTop", function(a) {
        a.graph.isEnabled() && a.graph.alignCells(mxConstants.ALIGN_TOP)
    });
    this.addAction("alignCellsMiddle", function(a) {
        a.graph.isEnabled() && a.graph.alignCells(mxConstants.ALIGN_MIDDLE)
    });
    this.addAction("alignCellsBottom", function(a) {
        a.graph.isEnabled() && a.graph.alignCells(mxConstants.ALIGN_BOTTOM)
    });
    this.addAction("alignFontLeft", function(a) {
        a.graph.setCellStyles(mxConstants.STYLE_ALIGN, mxConstants.ALIGN_LEFT)
    });
    this.addAction("alignFontCenter", function(a) {
        a.graph.isEnabled() &&
            a.graph.setCellStyles(mxConstants.STYLE_ALIGN, mxConstants.ALIGN_CENTER)
    });
    this.addAction("alignFontRight", function(a) {
        a.graph.isEnabled() && a.graph.setCellStyles(mxConstants.STYLE_ALIGN, mxConstants.ALIGN_RIGHT)
    });
    this.addAction("alignFontTop", function(a) {
        a.graph.isEnabled() && a.graph.setCellStyles(mxConstants.STYLE_VERTICAL_ALIGN, mxConstants.ALIGN_TOP)
    });
    this.addAction("alignFontMiddle", function(a) {
        a.graph.isEnabled() && a.graph.setCellStyles(mxConstants.STYLE_VERTICAL_ALIGN, mxConstants.ALIGN_MIDDLE)
    });
    this.addAction("alignFontBottom", function(a) {
        a.graph.isEnabled() && a.graph.setCellStyles(mxConstants.STYLE_VERTICAL_ALIGN, mxConstants.ALIGN_BOTTOM)
    });
    this.addAction("zoom", function(a) {
        var b = 100 * a.graph.getView().scale,
            b = parseFloat(mxUtils.prompt(mxResources.get(a.askZoomResource) || a.askZoomResource, b)) / 100;
        isNaN(b) || a.graph.getView().setScale(b)
    });
    this.addAction("toggleTasks", function(a) {
        null != a.tasks ? a.tasks.setVisible(!a.tasks.isVisible()) : a.showTasks()
    });
    this.addAction("toggleHelp", function(a) {
        null !=
            a.help ? a.help.setVisible(!a.help.isVisible()) : a.showHelp()
    });
    this.addAction("toggleOutline", function(a) {
        null == a.outline ? a.showOutline() : a.outline.setVisible(!a.outline.isVisible())
    });
    this.addAction("toggleConsole", function(a) {
        mxLog.setVisible(!mxLog.isVisible())
    })
};
mxEditor.prototype.createSession = function() {
    var a = mxUtils.bind(this, function(a) {
        this.fireEvent(new mxEventObject(mxEvent.SESSION, "session", a))
    });
    return this.connect(this.urlInit, this.urlPoll, this.urlNotify, a)
};
mxEditor.prototype.configure = function(a) {
    null != a && ((new mxCodec(a.ownerDocument)).decode(a, this), this.resetHistory())
};
mxEditor.prototype.resetFirstTime = function() {
    document.cookie = "mxgraph=seen; expires=Fri, 27 Jul 2001 02:47:11 UTC; path=/"
};
mxEditor.prototype.resetHistory = function() {
    this.lastSnapshot = (new Date).getTime();
    this.undoManager.clear();
    this.ignoredChanges = 0;
    this.setModified(!1)
};
mxEditor.prototype.addAction = function(a, b) {
    this.actions[a] = b
};
mxEditor.prototype.execute = function(a, b, c) {
    var d = this.actions[a];
    if (null != d) try {
        var e = arguments;
        e[0] = this;
        d.apply(this, e)
    } catch (f) {
        throw mxUtils.error("Cannot execute " + a + ": " + f.message, 280, !0), f;
    } else mxUtils.error("Cannot find action " + a, 280, !0)
};
mxEditor.prototype.addTemplate = function(a, b) {
    this.templates[a] = b
};
mxEditor.prototype.getTemplate = function(a) {
    return this.templates[a]
};
mxEditor.prototype.createGraph = function() {
    var a = new mxGraph(null, null, this.graphRenderHint);
    a.setTooltips(!0);
    a.setPanning(!0);
    this.installDblClickHandler(a);
    this.installUndoHandler(a);
    this.installDrillHandler(a);
    this.installChangeHandler(a);
    this.installInsertHandler(a);
    a.popupMenuHandler.factoryMethod = mxUtils.bind(this, function(a, c, d) {
        return this.createPopupMenu(a, c, d)
    });
    a.connectionHandler.factoryMethod = mxUtils.bind(this, function(a, c) {
        return this.createEdge(a, c)
    });
    this.createSwimlaneManager(a);
    this.createLayoutManager(a);
    return a
};
mxEditor.prototype.createSwimlaneManager = function(a) {
    a = new mxSwimlaneManager(a, !1);
    a.isHorizontal = mxUtils.bind(this, function() {
        return this.horizontalFlow
    });
    a.isEnabled = mxUtils.bind(this, function() {
        return this.maintainSwimlanes
    });
    return a
};
mxEditor.prototype.createLayoutManager = function(a) {
    var b = new mxLayoutManager(a),
        c = this;
    b.getLayout = function(b) {
        var e = null,
            f = c.graph.getModel();
        if (null != f.getParent(b))
            if (c.layoutSwimlanes && a.isSwimlane(b)) null == c.swimlaneLayout && (c.swimlaneLayout = c.createSwimlaneLayout()), e = c.swimlaneLayout;
            else if (c.layoutDiagram && (a.isValidRoot(b) || null == f.getParent(f.getParent(b)))) null == c.diagramLayout && (c.diagramLayout = c.createDiagramLayout()), e = c.diagramLayout;
        return e
    };
    return b
};
mxEditor.prototype.setGraphContainer = function(a) {
    null == this.graph.container && (this.graph.init(a), this.rubberband = new mxRubberband(this.graph), this.disableContextMenu && mxEvent.disableContextMenu(a), mxClient.IS_QUIRKS && new mxDivResizer(a))
};
mxEditor.prototype.installDblClickHandler = function(a) {
    a.addListener(mxEvent.DOUBLE_CLICK, mxUtils.bind(this, function(b, c) {
        var d = c.getProperty("cell");
        null != d && (a.isEnabled() && null != this.dblClickAction) && (this.execute(this.dblClickAction, d), c.consume())
    }))
};
mxEditor.prototype.installUndoHandler = function(a) {
    var b = mxUtils.bind(this, function(a, b) {
        var e = b.getProperty("edit");
        this.undoManager.undoableEditHappened(e)
    });
    a.getModel().addListener(mxEvent.UNDO, b);
    a.getView().addListener(mxEvent.UNDO, b);
    b = function(b, d) {
        var e = d.getProperty("edit").changes;
        a.setSelectionCells(a.getSelectionCellsForChanges(e))
    };
    this.undoManager.addListener(mxEvent.UNDO, b);
    this.undoManager.addListener(mxEvent.REDO, b)
};
mxEditor.prototype.installDrillHandler = function(a) {
    var b = mxUtils.bind(this, function(a) {
        this.fireEvent(new mxEventObject(mxEvent.ROOT))
    });
    a.getView().addListener(mxEvent.DOWN, b);
    a.getView().addListener(mxEvent.UP, b)
};
mxEditor.prototype.installChangeHandler = function(a) {
    var b = mxUtils.bind(this, function(b, d) {
        this.setModified(!0);
        !0 == this.validating && a.validateGraph();
        for (var e = d.getProperty("edit").changes, f = 0; f < e.length; f++) {
            var g = e[f];
            if (g instanceof mxRootChange || g instanceof mxValueChange && g.cell == this.graph.model.root || g instanceof mxCellAttributeChange && g.cell == this.graph.model.root) {
                this.fireEvent(new mxEventObject(mxEvent.ROOT));
                break
            }
        }
    });
    a.getModel().addListener(mxEvent.CHANGE, b)
};
mxEditor.prototype.installInsertHandler = function(a) {
    var b = this;
    a.addMouseListener({
        mouseDown: function(a, d) {
            if (null != b.insertFunction && !d.isPopupTrigger() && (b.forcedInserting || null == d.getState())) b.graph.clearSelection(), b.insertFunction(d.getEvent(), d.getCell()), this.isActive = !0, d.consume()
        },
        mouseMove: function(a, b) {
            this.isActive && b.consume()
        },
        mouseUp: function(a, b) {
            this.isActive && (this.isActive = !1, b.consume())
        }
    })
};
mxEditor.prototype.createDiagramLayout = function() {
    var a = this.graph.gridSize,
        b = new mxStackLayout(this.graph, !this.horizontalFlow, this.swimlaneSpacing, 2 * a, 2 * a);
    b.isVertexIgnored = function(a) {
        return !b.graph.isSwimlane(a)
    };
    return b
};
mxEditor.prototype.createSwimlaneLayout = function() {
    return new mxCompactTreeLayout(this.graph, this.horizontalFlow)
};
mxEditor.prototype.createToolbar = function() {
    return new mxDefaultToolbar(null, this)
};
mxEditor.prototype.setToolbarContainer = function(a) {
    this.toolbar.init(a);
    mxClient.IS_QUIRKS && new mxDivResizer(a)
};
mxEditor.prototype.setStatusContainer = function(a) {
    null == this.status && (this.status = a, this.addListener(mxEvent.SAVE, mxUtils.bind(this, function() {
        var a = (new Date).toLocaleString();
        this.setStatus((mxResources.get(this.lastSavedResource) || this.lastSavedResource) + ": " + a)
    })), this.addListener(mxEvent.OPEN, mxUtils.bind(this, function() {
        this.setStatus((mxResources.get(this.currentFileResource) || this.currentFileResource) + ": " + this.filename)
    })), mxClient.IS_QUIRKS && new mxDivResizer(a))
};
mxEditor.prototype.setStatus = function(a) {
    null != this.status && null != a && (this.status.innerHTML = a)
};
mxEditor.prototype.setTitleContainer = function(a) {
    this.addListener(mxEvent.ROOT, mxUtils.bind(this, function(b) {
        a.innerHTML = this.getTitle()
    }));
    mxClient.IS_QUIRKS && new mxDivResizer(a)
};
mxEditor.prototype.treeLayout = function(a, b) {
    null != a && (new mxCompactTreeLayout(this.graph, b)).execute(a)
};
mxEditor.prototype.getTitle = function() {
    for (var a = "", b = this.graph, c = b.getCurrentRoot(); null != c && null != b.getModel().getParent(b.getModel().getParent(c));) b.isValidRoot(c) && (a = " > " + b.convertValueToString(c) + a), c = b.getModel().getParent(c);
    return this.getRootTitle() + a
};
mxEditor.prototype.getRootTitle = function() {
    var a = this.graph.getModel().getRoot();
    return this.graph.convertValueToString(a)
};
mxEditor.prototype.undo = function() {
    this.undoManager.undo()
};
mxEditor.prototype.redo = function() {
    this.undoManager.redo()
};
mxEditor.prototype.groupCells = function() {
    var a = null != this.groupBorderSize ? this.groupBorderSize : this.graph.gridSize;
    return this.graph.groupCells(this.createGroup(), a)
};
mxEditor.prototype.createGroup = function() {
    return this.graph.getModel().cloneCell(this.defaultGroup)
};
mxEditor.prototype.open = function(a) {
    if (null != a) {
        var b = mxUtils.load(a).getXml();
        this.readGraphModel(b.documentElement);
        this.filename = a;
        this.fireEvent(new mxEventObject(mxEvent.OPEN, "filename", a))
    }
};
mxEditor.prototype.readGraphModel = function(a) {
    (new mxCodec(a.ownerDocument)).decode(a, this.graph.getModel());
    this.resetHistory()
};
mxEditor.prototype.save = function(a, b) {
    a = a || this.getUrlPost();
    if (null != a && 0 < a.length) {
        var c = this.writeGraphModel(b);
        this.postDiagram(a, c);
        this.setModified(!1)
    }
    this.fireEvent(new mxEventObject(mxEvent.SAVE, "url", a))
};
mxEditor.prototype.postDiagram = function(a, b) {
    this.escapePostData && (b = encodeURIComponent(b));
    mxUtils.post(a, this.postParameterName + "=" + b, mxUtils.bind(this, function(c) {
        this.fireEvent(new mxEventObject(mxEvent.POST, "request", c, "url", a, "data", b))
    }))
};
mxEditor.prototype.writeGraphModel = function(a) {
    a = null != a ? a : this.linefeed;
    var b = (new mxCodec).encode(this.graph.getModel());
    return mxUtils.getXml(b, a)
};
mxEditor.prototype.getUrlPost = function() {
    return this.urlPost
};
mxEditor.prototype.getUrlImage = function() {
    return this.urlImage
};
mxEditor.prototype.connect = function(a, b, c, d) {
    var e = null;
    mxClient.IS_LOCAL || (e = new mxSession(this.graph.getModel(), a, b, c), e.addListener(mxEvent.RECEIVE, mxUtils.bind(this, function(a, b) {
        null != b.getProperty("node").getAttribute("namespace") && this.resetHistory()
    })), e.addListener(mxEvent.DISCONNECT, d), e.addListener(mxEvent.CONNECT, d), e.addListener(mxEvent.NOTIFY, d), e.addListener(mxEvent.GET, d), e.start());
    return e
};
mxEditor.prototype.swapStyles = function(a, b) {
    var c = this.graph.getStylesheet().styles[b];
    this.graph.getView().getStylesheet().putCellStyle(b, this.graph.getStylesheet().styles[a]);
    this.graph.getStylesheet().putCellStyle(a, c);
    this.graph.refresh()
};
mxEditor.prototype.showProperties = function(a) {
    a = a || this.graph.getSelectionCell();
    null == a && (a = this.graph.getCurrentRoot(), null == a && (a = this.graph.getModel().getRoot()));
    if (null != a) {
        this.graph.stopEditing(!0);
        var b = mxUtils.getOffset(this.graph.container),
            c = b.x + 10,
            b = b.y;
        if (null != this.properties && !this.movePropertiesDialog) c = this.properties.getX(), b = this.properties.getY();
        else {
            var d = this.graph.getCellBounds(a);
            null != d && (c += d.x + Math.min(200, d.width), b += d.y)
        }
        this.hideProperties();
        a = this.createProperties(a);
        null != a && (this.properties = new mxWindow(mxResources.get(this.propertiesResource) || this.propertiesResource, a, c, b, this.propertiesWidth, this.propertiesHeight, !1), this.properties.setVisible(!0))
    }
};
mxEditor.prototype.isPropertiesVisible = function() {
    return null != this.properties
};
mxEditor.prototype.createProperties = function(a) {
    var b = this.graph.getModel(),
        c = b.getValue(a);
    if (mxUtils.isNode(c)) {
        var d = new mxForm("properties");
        d.addText("ID", a.getId()).setAttribute("readonly", "true");
        var e = null,
            f = null,
            g = null,
            k = null,
            l = null;
        b.isVertex(a) && (e = b.getGeometry(a), null != e && (f = d.addText("top", e.y), g = d.addText("left", e.x), k = d.addText("width", e.width), l = d.addText("height", e.height)));
        for (var m = b.getStyle(a), n = d.addText("Style", m || ""), p = c.attributes, q = [], c = 0; c < p.length; c++) q[c] = d.addTextarea(p[c].nodeName,
            p[c].nodeValue, "label" == p[c].nodeName ? 4 : 2);
        c = mxUtils.bind(this, function() {
            this.hideProperties();
            b.beginUpdate();
            try {
                null != e && (e = e.clone(), e.x = parseFloat(g.value), e.y = parseFloat(f.value), e.width = parseFloat(k.value), e.height = parseFloat(l.value), b.setGeometry(a, e));
                0 < n.value.length ? b.setStyle(a, n.value) : b.setStyle(a, null);
                for (var c = 0; c < p.length; c++) {
                    var d = new mxCellAttributeChange(a, p[c].nodeName, q[c].value);
                    b.execute(d)
                }
                this.graph.isAutoSizeCell(a) && this.graph.updateCellSize(a)
            } finally {
                b.endUpdate()
            }
        });
        m = mxUtils.bind(this, function() {
            this.hideProperties()
        });
        d.addButtons(c, m);
        return d.table
    }
    return null
};
mxEditor.prototype.hideProperties = function() {
    null != this.properties && (this.properties.destroy(), this.properties = null)
};
mxEditor.prototype.showTasks = function() {
    if (null == this.tasks) {
        var a = document.createElement("div");
        a.style.padding = "4px";
        a.style.paddingLeft = "20px";
        var b = document.body.clientWidth,
            b = new mxWindow(mxResources.get(this.tasksResource) || this.tasksResource, a, b - 220, this.tasksTop, 200);
        b.setClosable(!0);
        b.destroyOnClose = !1;
        var c = mxUtils.bind(this, function(b) {
            mxEvent.release(a);
            a.innerHTML = "";
            this.createTasks(a)
        });
        this.graph.getModel().addListener(mxEvent.CHANGE, c);
        this.graph.getSelectionModel().addListener(mxEvent.CHANGE,
            c);
        this.graph.addListener(mxEvent.ROOT, c);
        null != this.tasksWindowImage && b.setImage(this.tasksWindowImage);
        this.tasks = b;
        this.createTasks(a)
    }
    this.tasks.setVisible(!0)
};
mxEditor.prototype.refreshTasks = function(a) {
    null != this.tasks && (a = this.tasks.content, mxEvent.release(a), a.innerHTML = "", this.createTasks(a))
};
mxEditor.prototype.createTasks = function(a) {};
mxEditor.prototype.showHelp = function(a) {
    if (null == this.help) {
        var b = document.createElement("iframe");
        b.setAttribute("src", mxResources.get("urlHelp") || this.urlHelp);
        b.setAttribute("height", "100%");
        b.setAttribute("width", "100%");
        b.setAttribute("frameBorder", "0");
        b.style.backgroundColor = "white";
        a = document.body.clientWidth;
        var c = document.body.clientHeight || document.documentElement.clientHeight,
            d = new mxWindow(mxResources.get(this.helpResource) || this.helpResource, b, (a - this.helpWidth) / 2, (c - this.helpHeight) /
                3, this.helpWidth, this.helpHeight);
        d.setMaximizable(!0);
        d.setClosable(!0);
        d.destroyOnClose = !1;
        d.setResizable(!0);
        null != this.helpWindowImage && d.setImage(this.helpWindowImage);
        mxClient.IS_NS && (a = function(a) {
            b.setAttribute("height", d.div.offsetHeight - 26 + "px")
        }, d.addListener(mxEvent.RESIZE_END, a), d.addListener(mxEvent.MAXIMIZE, a), d.addListener(mxEvent.NORMALIZE, a), d.addListener(mxEvent.SHOW, a));
        this.help = d
    }
    this.help.setVisible(!0)
};
mxEditor.prototype.showOutline = function() {
    if (null == this.outline) {
        var a = document.createElement("div");
        a.style.overflow = "hidden";
        a.style.position = "relative";
        a.style.width = "100%";
        a.style.height = "100%";
        a.style.background = "white";
        a.style.cursor = "move";
        8 == document.documentMode && (a.style.filter = "progid:DXImageTransform.Microsoft.alpha(opacity=100)");
        var b = new mxWindow(mxResources.get(this.outlineResource) || this.outlineResource, a, 600, 480, 200, 200, !1),
            c = new mxOutline(this.graph, a);
        b.setClosable(!0);
        b.setResizable(!0);
        b.destroyOnClose = !1;
        b.addListener(mxEvent.RESIZE_END, function() {
            c.update()
        });
        this.outline = b;
        this.outline.outline = c
    }
    this.outline.setVisible(!0);
    this.outline.outline.update(!0)
};
mxEditor.prototype.setMode = function(a) {
    "select" == a ? (this.graph.panningHandler.useLeftButtonForPanning = !1, this.graph.setConnectable(!1)) : "connect" == a ? (this.graph.panningHandler.useLeftButtonForPanning = !1, this.graph.setConnectable(!0)) : "pan" == a && (this.graph.panningHandler.useLeftButtonForPanning = !0, this.graph.setConnectable(!1))
};
mxEditor.prototype.createPopupMenu = function(a, b, c) {
    this.popupHandler.createMenu(this, a, b, c)
};
mxEditor.prototype.createEdge = function(a, b) {
    var c = null;
    if (null != this.defaultEdge) c = this.graph.getModel().cloneCell(this.defaultEdge);
    else {
        c = new mxCell("");
        c.setEdge(!0);
        var d = new mxGeometry;
        d.relative = !0;
        c.setGeometry(d)
    }
    d = this.getEdgeStyle();
    null != d && c.setStyle(d);
    return c
};
mxEditor.prototype.getEdgeStyle = function() {
    return this.defaultEdgeStyle
};
mxEditor.prototype.consumeCycleAttribute = function(a) {
    return null != this.cycleAttributeValues && 0 < this.cycleAttributeValues.length && this.graph.isSwimlane(a) ? this.cycleAttributeValues[this.cycleAttributeIndex++ % this.cycleAttributeValues.length] : null
};
mxEditor.prototype.cycleAttribute = function(a) {
    if (null != this.cycleAttributeName) {
        var b = this.consumeCycleAttribute(a);
        null != b && a.setStyle(a.getStyle() + ";" + this.cycleAttributeName + "=" + b)
    }
};
mxEditor.prototype.addVertex = function(a, b, c, d) {
    for (var e = this.graph.getModel(); null != a && !this.graph.isValidDropTarget(a);) a = e.getParent(a);
    a = null != a ? a : this.graph.getSwimlaneAt(c, d);
    var f = this.graph.getView().scale,
        g = e.getGeometry(b),
        k = e.getGeometry(a);
    if (this.graph.isSwimlane(b) && !this.graph.swimlaneNesting) a = null;
    else {
        if (null == a && this.swimlaneRequired) return null;
        if (null != a && null != k) {
            var l = this.graph.getView().getState(a);
            if (null != l) {
                if (c -= l.origin.x * f, d -= l.origin.y * f, this.graph.isConstrainedMoving) {
                    var k =
                        g.width,
                        m = g.height,
                        n = l.x + l.width;
                    c + k > n && (c -= c + k - n);
                    n = l.y + l.height;
                    d + m > n && (d -= d + m - n)
                }
            } else null != k && (c -= k.x * f, d -= k.y * f)
        }
    }
    g = g.clone();
    g.x = this.graph.snap(c / f - this.graph.getView().translate.x - this.graph.gridSize / 2);
    g.y = this.graph.snap(d / f - this.graph.getView().translate.y - this.graph.gridSize / 2);
    b.setGeometry(g);
    null == a && (a = this.graph.getDefaultParent());
    this.cycleAttribute(b);
    this.fireEvent(new mxEventObject(mxEvent.BEFORE_ADD_VERTEX, "vertex", b, "parent", a));
    e.beginUpdate();
    try {
        b = this.graph.addCell(b,
            a), null != b && (this.graph.constrainChild(b), this.fireEvent(new mxEventObject(mxEvent.ADD_VERTEX, "vertex", b)))
    } finally {
        e.endUpdate()
    }
    null != b && (this.graph.setSelectionCell(b), this.graph.scrollCellToVisible(b), this.fireEvent(new mxEventObject(mxEvent.AFTER_ADD_VERTEX, "vertex", b)));
    return b
};
mxEditor.prototype.destroy = function() {
    this.destroyed || (this.destroyed = !0, null != this.tasks && this.tasks.destroy(), null != this.outline && this.outline.destroy(), null != this.properties && this.properties.destroy(), null != this.keyHandler && this.keyHandler.destroy(), null != this.rubberband && this.rubberband.destroy(), null != this.toolbar && this.toolbar.destroy(), null != this.graph && this.graph.destroy(), this.templates = this.status = null)
};
var mxCodecRegistry = {
    codecs: [],
    aliases: [],
    register: function(a) {
        if (null != a) {
            var b = a.getName();
            mxCodecRegistry.codecs[b] = a;
            var c = mxUtils.getFunctionName(a.template.constructor);
            c != b && mxCodecRegistry.addAlias(c, b)
        }
        return a
    },
    addAlias: function(a, b) {
        mxCodecRegistry.aliases[a] = b
    },
    getCodec: function(a) {
        var b = null;
        if (null != a) {
            var b = mxUtils.getFunctionName(a),
                c = mxCodecRegistry.aliases[b];
            null != c && (b = c);
            b = mxCodecRegistry.codecs[b];
            if (null == b) try {
                b = new mxObjectCodec(new a), mxCodecRegistry.register(b)
            } catch (d) {}
        }
        return b
    }
};

function mxCodec(a) {
    this.document = a || mxUtils.createXmlDocument();
    this.objects = []
}
mxCodec.prototype.document = null;
mxCodec.prototype.objects = null;
mxCodec.prototype.encodeDefaults = !1;
mxCodec.prototype.putObject = function(a, b) {
    return this.objects[a] = b
};
mxCodec.prototype.getObject = function(a) {
    var b = null;
    null != a && (b = this.objects[a], null == b && (b = this.lookup(a), null == b && (a = this.getElementById(a), null != a && (b = this.decode(a)))));
    return b
};
mxCodec.prototype.lookup = function(a) {
    return null
};
mxCodec.prototype.getElementById = function(a, b) {
    return mxUtils.findNodeByAttribute(this.document.documentElement, null != b ? b : "id", a)
};
mxCodec.prototype.getId = function(a) {
    var b = null;
    null != a && (b = this.reference(a), null == b && a instanceof mxCell && (b = a.getId(), null == b && (b = mxCellPath.create(a), 0 == b.length && (b = "root"))));
    return b
};
mxCodec.prototype.reference = function(a) {
    return null
};
mxCodec.prototype.encode = function(a) {
    var b = null;
    if (null != a && null != a.constructor) {
        var c = mxCodecRegistry.getCodec(a.constructor);
        null != c ? b = c.encode(this, a) : mxUtils.isNode(a) ? b = mxUtils.importNode(this.document, a, !0) : mxLog.warn("mxCodec.encode: No codec for " + mxUtils.getFunctionName(a.constructor))
    }
    return b
};
mxCodec.prototype.decode = function(a, b) {
    var c = null;
    if (null != a && a.nodeType == mxConstants.NODETYPE_ELEMENT) {
        c = null;
        try {
            c = window[a.nodeName]
        } catch (d) {}
        c = mxCodecRegistry.getCodec(c);
        null != c ? c = c.decode(this, a, b) : (c = a.cloneNode(!0), c.removeAttribute("as"))
    }
    return c
};
mxCodec.prototype.encodeCell = function(a, b, c) {
    b.appendChild(this.encode(a));
    if (null == c || c) {
        c = a.getChildCount();
        for (var d = 0; d < c; d++) this.encodeCell(a.getChildAt(d), b)
    }
};
mxCodec.prototype.isCellCodec = function(a) {
    return null != a && "function" == typeof a.isCellCodec ? a.isCellCodec() : !1
};
mxCodec.prototype.decodeCell = function(a, b) {
    b = null != b ? b : !0;
    var c = null;
    if (null != a && a.nodeType == mxConstants.NODETYPE_ELEMENT) {
        c = mxCodecRegistry.getCodec(a.nodeName);
        if (!this.isCellCodec(c))
            for (var d = a.firstChild; null != d && !this.isCellCodec(c);) c = mxCodecRegistry.getCodec(d.nodeName), d = d.nextSibling;
        this.isCellCodec(c) || (c = mxCodecRegistry.getCodec(mxCell));
        c = c.decode(this, a);
        b && this.insertIntoGraph(c)
    }
    return c
};
mxCodec.prototype.insertIntoGraph = function(a) {
    var b = a.parent,
        c = a.getTerminal(!0),
        d = a.getTerminal(!1);
    a.setTerminal(null, !1);
    a.setTerminal(null, !0);
    a.parent = null;
    null != b && b.insert(a);
    null != c && c.insertEdge(a, !0);
    null != d && d.insertEdge(a, !1)
};
mxCodec.prototype.setAttribute = function(a, b, c) {
    null != b && null != c && a.setAttribute(b, c)
};

function mxObjectCodec(a, b, c, d) {
    this.template = a;
    this.exclude = null != b ? b : [];
    this.idrefs = null != c ? c : [];
    this.mapping = null != d ? d : [];
    this.reverse = {};
    for (var e in this.mapping) this.reverse[this.mapping[e]] = e
}
mxObjectCodec.prototype.template = null;
mxObjectCodec.prototype.exclude = null;
mxObjectCodec.prototype.idrefs = null;
mxObjectCodec.prototype.mapping = null;
mxObjectCodec.prototype.reverse = null;
mxObjectCodec.prototype.getName = function() {
    return mxUtils.getFunctionName(this.template.constructor)
};
mxObjectCodec.prototype.cloneTemplate = function() {
    return new this.template.constructor
};
mxObjectCodec.prototype.getFieldName = function(a) {
    if (null != a) {
        var b = this.reverse[a];
        null != b && (a = b)
    }
    return a
};
mxObjectCodec.prototype.getAttributeName = function(a) {
    if (null != a) {
        var b = this.mapping[a];
        null != b && (a = b)
    }
    return a
};
mxObjectCodec.prototype.isExcluded = function(a, b, c, d) {
    return b == mxObjectIdentity.FIELD_NAME || 0 <= mxUtils.indexOf(this.exclude, b)
};
mxObjectCodec.prototype.isReference = function(a, b, c, d) {
    return 0 <= mxUtils.indexOf(this.idrefs, b)
};
mxObjectCodec.prototype.encode = function(a, b) {
    var c = a.document.createElement(this.getName());
    b = this.beforeEncode(a, b, c);
    this.encodeObject(a, b, c);
    return this.afterEncode(a, b, c)
};
mxObjectCodec.prototype.encodeObject = function(a, b, c) {
    a.setAttribute(c, "id", a.getId(b));
    for (var d in b) {
        var e = d,
            f = b[e];
        null != f && !this.isExcluded(b, e, f, !0) && (mxUtils.isNumeric(e) && (e = null), this.encodeValue(a, b, e, f, c))
    }
};
mxObjectCodec.prototype.encodeValue = function(a, b, c, d, e) {
    if (null != d) {
        if (this.isReference(b, c, d, !0)) {
            var f = a.getId(d);
            if (null == f) {
                mxLog.warn("mxObjectCodec.encode: No ID for " + this.getName() + "." + c + "=" + d);
                return
            }
            d = f
        }
        f = this.template[c];
        if (null == c || a.encodeDefaults || f != d) c = this.getAttributeName(c), this.writeAttribute(a, b, c, d, e)
    }
};
mxObjectCodec.prototype.writeAttribute = function(a, b, c, d, e) {
    "object" != typeof d ? this.writePrimitiveAttribute(a, b, c, d, e) : this.writeComplexAttribute(a, b, c, d, e)
};
mxObjectCodec.prototype.writePrimitiveAttribute = function(a, b, c, d, e) {
    d = this.convertAttributeToXml(a, b, c, d, e);
    null == c ? (b = a.document.createElement("add"), "function" == typeof d ? b.appendChild(a.document.createTextNode(d)) : a.setAttribute(b, "value", d), e.appendChild(b)) : "function" != typeof d && a.setAttribute(e, c, d)
};
mxObjectCodec.prototype.writeComplexAttribute = function(a, b, c, d, e) {
    a = a.encode(d);
    null != a ? (null != c && a.setAttribute("as", c), e.appendChild(a)) : mxLog.warn("mxObjectCodec.encode: No node for " + this.getName() + "." + c + ": " + d)
};
mxObjectCodec.prototype.convertAttributeToXml = function(a, b, c, d) {
    this.isBooleanAttribute(a, b, c, d) && (d = !0 == d ? "1" : "0");
    return d
};
mxObjectCodec.prototype.isBooleanAttribute = function(a, b, c, d) {
    return "undefined" == typeof d.length && (!0 == d || !1 == d)
};
mxObjectCodec.prototype.convertAttributeFromXml = function(a, b, c) {
    var d = b.nodeValue;
    this.isNumericAttribute(a, b, c) && (d = parseFloat(d));
    return d
};
mxObjectCodec.prototype.isNumericAttribute = function(a, b, c) {
    return mxUtils.isNumeric(b.nodeValue)
};
mxObjectCodec.prototype.beforeEncode = function(a, b, c) {
    return b
};
mxObjectCodec.prototype.afterEncode = function(a, b, c) {
    return c
};
mxObjectCodec.prototype.decode = function(a, b, c) {
    var d = b.getAttribute("id"),
        e = a.objects[d];
    null == e && (e = c || this.cloneTemplate(), null != d && a.putObject(d, e));
    b = this.beforeDecode(a, b, e);
    this.decodeNode(a, b, e);
    return this.afterDecode(a, b, e)
};
mxObjectCodec.prototype.decodeNode = function(a, b, c) {
    null != b && (this.decodeAttributes(a, b, c), this.decodeChildren(a, b, c))
};
mxObjectCodec.prototype.decodeAttributes = function(a, b, c) {
    b = b.attributes;
    if (null != b)
        for (var d = 0; d < b.length; d++) this.decodeAttribute(a, b[d], c)
};
mxObjectCodec.prototype.decodeAttribute = function(a, b, c) {
    var d = b.nodeName;
    if ("as" != d && "id" != d) {
        b = this.convertAttributeFromXml(a, b, c);
        var e = this.getFieldName(d);
        if (this.isReference(c, e, b, !1)) {
            a = a.getObject(b);
            if (null == a) {
                mxLog.warn("mxObjectCodec.decode: No object for " + this.getName() + "." + d + "=" + b);
                return
            }
            b = a
        }
        this.isExcluded(c, d, b, !1) || (c[d] = b)
    }
};
mxObjectCodec.prototype.decodeChildren = function(a, b, c) {
    for (b = b.firstChild; null != b;) {
        var d = b.nextSibling;
        b.nodeType == mxConstants.NODETYPE_ELEMENT && !this.processInclude(a, b, c) && this.decodeChild(a, b, c);
        b = d
    }
};
mxObjectCodec.prototype.decodeChild = function(a, b, c) {
    var d = this.getFieldName(b.getAttribute("as"));
    if (null == d || !this.isExcluded(c, d, b, !1)) {
        var e = this.getFieldTemplate(c, d, b),
            f = null;
        "add" == b.nodeName ? (f = b.getAttribute("value"), null == f && (f = mxUtils.eval(mxUtils.getTextContent(b)))) : f = a.decode(b, e);
        this.addObjectValue(c, d, f, e)
    }
};
mxObjectCodec.prototype.getFieldTemplate = function(a, b, c) {
    a = a[b];
    a instanceof Array && 0 < a.length && (a = null);
    return a
};
mxObjectCodec.prototype.addObjectValue = function(a, b, c, d) {
    null != c && c != d && (null != b && 0 < b.length ? a[b] = c : a.push(c))
};
mxObjectCodec.prototype.processInclude = function(a, b, c) {
    if ("include" == b.nodeName) {
        b = b.getAttribute("name");
        if (null != b) try {
            var d = mxUtils.load(b).getDocumentElement();
            null != d && a.decode(d, c)
        } catch (e) {}
        return !0
    }
    return !1
};
mxObjectCodec.prototype.beforeDecode = function(a, b, c) {
    return b
};
mxObjectCodec.prototype.afterDecode = function(a, b, c) {
    return c
};
mxCodecRegistry.register(function() {
    var a = new mxObjectCodec(new mxCell, ["children", "edges", "overlays", "mxTransient"], ["parent", "source", "target"]);
    a.isCellCodec = function() {
        return !0
    };
    a.isExcluded = function(a, c, d, e) {
        return mxObjectCodec.prototype.isExcluded.apply(this, arguments) || e && "value" == c && d.nodeType == mxConstants.NODETYPE_ELEMENT
    };
    a.afterEncode = function(a, c, d) {
        if (null != c.value && c.value.nodeType == mxConstants.NODETYPE_ELEMENT) {
            var e = d;
            d = mxUtils.importNode(a.document, c.value, !0);
            d.appendChild(e);
            a =
                e.getAttribute("id");
            d.setAttribute("id", a);
            e.removeAttribute("id")
        }
        return d
    };
    a.beforeDecode = function(a, c, d) {
        var e = c,
            f = this.getName();
        c.nodeName != f ? (e = c.getElementsByTagName(f)[0], null != e && e.parentNode == c ? (mxUtils.removeWhitespace(e, !0), mxUtils.removeWhitespace(e, !1), e.parentNode.removeChild(e)) : e = null, d.value = c.cloneNode(!0), c = d.value.getAttribute("id"), null != c && (d.setId(c), d.value.removeAttribute("id"))) : d.setId(c.getAttribute("id"));
        if (null != e)
            for (c = 0; c < this.idrefs.length; c++) {
                var f = this.idrefs[c],
                    g = e.getAttribute(f);
                if (null != g) {
                    e.removeAttribute(f);
                    var k = a.objects[g] || a.lookup(g);
                    null == k && (g = a.getElementById(g), null != g && (k = (mxCodecRegistry.codecs[g.nodeName] || this).decode(a, g)));
                    d[f] = k
                }
            }
        return e
    };
    return a
}());
mxCodecRegistry.register(function() {
    var a = new mxObjectCodec(new mxGraphModel);
    a.encodeObject = function(a, c, d) {
        var e = a.document.createElement("root");
        a.encodeCell(c.getRoot(), e);
        d.appendChild(e)
    };
    a.decodeChild = function(a, c, d) {
        "root" == c.nodeName ? this.decodeRoot(a, c, d) : mxObjectCodec.prototype.decodeChild.apply(this, arguments)
    };
    a.decodeRoot = function(a, c, d) {
        var e = null;
        for (c = c.firstChild; null != c;) {
            var f = a.decodeCell(c);
            null != f && null == f.getParent() && (e = f);
            c = c.nextSibling
        }
        null != e && d.setRoot(e)
    };
    return a
}());
mxCodecRegistry.register(function() {
    var a = new mxObjectCodec(new mxRootChange, ["model", "previous", "root"]);
    a.afterEncode = function(a, c, d) {
        a.encodeCell(c.root, d);
        return d
    };
    a.beforeDecode = function(a, c, d) {
        if (null != c.firstChild && c.firstChild.nodeType == mxConstants.NODETYPE_ELEMENT) {
            c = c.cloneNode(!0);
            var e = c.firstChild;
            d.root = a.decodeCell(e, !1);
            d = e.nextSibling;
            e.parentNode.removeChild(e);
            for (e = d; null != e;) d = e.nextSibling, a.decodeCell(e), e.parentNode.removeChild(e), e = d
        }
        return c
    };
    a.afterDecode = function(a, c,
        d) {
        d.previous = d.root;
        return d
    };
    return a
}());
mxCodecRegistry.register(function() {
    var a = new mxObjectCodec(new mxChildChange, ["model", "child", "previousIndex"], ["parent", "previous"]);
    a.isReference = function(a, c, d, e) {
        return "child" == c && (null != a.previous || !e) ? !0 : 0 <= mxUtils.indexOf(this.idrefs, c)
    };
    a.afterEncode = function(a, c, d) {
        this.isReference(c, "child", c.child, !0) ? d.setAttribute("child", a.getId(c.child)) : a.encodeCell(c.child, d);
        return d
    };
    a.beforeDecode = function(a, c, d) {
        if (null != c.firstChild && c.firstChild.nodeType == mxConstants.NODETYPE_ELEMENT) {
            c = c.cloneNode(!0);
            var e = c.firstChild;
            d.child = a.decodeCell(e, !1);
            d = e.nextSibling;
            e.parentNode.removeChild(e);
            for (e = d; null != e;) {
                d = e.nextSibling;
                if (e.nodeType == mxConstants.NODETYPE_ELEMENT) {
                    var f = e.getAttribute("id");
                    null == a.lookup(f) && a.decodeCell(e)
                }
                e.parentNode.removeChild(e);
                e = d
            }
        } else e = c.getAttribute("child"), d.child = a.getObject(e);
        return c
    };
    a.afterDecode = function(a, c, d) {
        d.child.parent = d.previous;
        d.previous = d.parent;
        d.previousIndex = d.index;
        return d
    };
    return a
}());
mxCodecRegistry.register(function() {
    var a = new mxObjectCodec(new mxTerminalChange, ["model", "previous"], ["cell", "terminal"]);
    a.afterDecode = function(a, c, d) {
        d.previous = d.terminal;
        return d
    };
    return a
}());
var mxGenericChangeCodec = function(a, b) {
    var c = new mxObjectCodec(a, ["model", "previous"], ["cell"]);
    c.afterDecode = function(a, c, f) {
        mxUtils.isNode(f.cell) && (f.cell = a.decodeCell(f.cell, !1));
        f.previous = f[b];
        return f
    };
    return c
};
mxCodecRegistry.register(mxGenericChangeCodec(new mxValueChange, "value"));
mxCodecRegistry.register(mxGenericChangeCodec(new mxStyleChange, "style"));
mxCodecRegistry.register(mxGenericChangeCodec(new mxGeometryChange, "geometry"));
mxCodecRegistry.register(mxGenericChangeCodec(new mxCollapseChange, "collapsed"));
mxCodecRegistry.register(mxGenericChangeCodec(new mxVisibleChange, "visible"));
mxCodecRegistry.register(mxGenericChangeCodec(new mxCellAttributeChange, "value"));
mxCodecRegistry.register(function() {
    return new mxObjectCodec(new mxGraph, "graphListeners eventListeners view container cellRenderer editor selection".split(" "))
}());
mxCodecRegistry.register(function() {
    var a = new mxObjectCodec(new mxGraphView);
    a.encode = function(a, c) {
        return this.encodeCell(a, c, c.graph.getModel().getRoot())
    };
    a.encodeCell = function(a, c, d) {
        var e = c.graph.getModel(),
            f = c.getState(d),
            g = e.getParent(d);
        if (null == g || null != f) {
            var k = e.getChildCount(d),
                l = c.graph.getCellGeometry(d),
                m = null;
            g == e.getRoot() ? m = "layer" : null == g ? m = "graph" : e.isEdge(d) ? m = "edge" : 0 < k && null != l ? m = "group" : e.isVertex(d) && (m = "vertex");
            if (null != m) {
                var n = a.document.createElement(m);
                null != c.graph.getLabel(d) &&
                    (n.setAttribute("label", c.graph.getLabel(d)), c.graph.isHtmlLabel(d) && n.setAttribute("html", !0));
                if (null == g) {
                    var p = c.getGraphBounds();
                    null != p && (n.setAttribute("x", Math.round(p.x)), n.setAttribute("y", Math.round(p.y)), n.setAttribute("width", Math.round(p.width)), n.setAttribute("height", Math.round(p.height)));
                    n.setAttribute("scale", c.scale)
                } else if (null != f && null != l) {
                    for (p in f.style) g = f.style[p], "function" == typeof g && "object" == typeof g && (g = mxStyleRegistry.getName(g)), null != g && ("function" != typeof g && "object" !=
                        typeof g) && n.setAttribute(p, g);
                    g = f.absolutePoints;
                    if (null != g && 0 < g.length) {
                        l = Math.round(g[0].x) + "," + Math.round(g[0].y);
                        for (p = 1; p < g.length; p++) l += " " + Math.round(g[p].x) + "," + Math.round(g[p].y);
                        n.setAttribute("points", l)
                    } else n.setAttribute("x", Math.round(f.x)), n.setAttribute("y", Math.round(f.y)), n.setAttribute("width", Math.round(f.width)), n.setAttribute("height", Math.round(f.height));
                    p = f.absoluteOffset;
                    null != p && (0 != p.x && n.setAttribute("dx", Math.round(p.x)), 0 != p.y && n.setAttribute("dy", Math.round(p.y)))
                }
                for (p =
                    0; p < k; p++) f = this.encodeCell(a, c, e.getChildAt(d, p)), null != f && n.appendChild(f)
            }
        }
        return n
    };
    return a
}());
mxCodecRegistry.register(function() {
    var a = new mxObjectCodec(new mxStylesheet);
    a.encode = function(a, c) {
        var d = a.document.createElement(this.getName()),
            e;
        for (e in c.styles) {
            var f = c.styles[e],
                g = a.document.createElement("add");
            if (null != e) {
                g.setAttribute("as", e);
                for (var k in f) {
                    var l = this.getStringValue(k, f[k]);
                    if (null != l) {
                        var m = a.document.createElement("add");
                        m.setAttribute("value", l);
                        m.setAttribute("as", k);
                        g.appendChild(m)
                    }
                }
                0 < g.childNodes.length && d.appendChild(g)
            }
        }
        return d
    };
    a.getStringValue = function(a,
        c) {
        var d = typeof c;
        "function" == d ? c = mxStyleRegistry.getName(style[j]) : "object" == d && (c = null);
        return c
    };
    a.decode = function(a, c, d) {
        d = d || new this.template.constructor;
        var e = c.getAttribute("id");
        null != e && (a.objects[e] = d);
        for (c = c.firstChild; null != c;) {
            if (!this.processInclude(a, c, d) && "add" == c.nodeName && (e = c.getAttribute("as"), null != e)) {
                var f = c.getAttribute("extend"),
                    g = null != f ? mxUtils.clone(d.styles[f]) : null;
                null == g && (null != f && mxLog.warn("mxStylesheetCodec.decode: stylesheet " + f + " not found to extend"), g = {});
                for (f = c.firstChild; null != f;) {
                    if (f.nodeType == mxConstants.NODETYPE_ELEMENT) {
                        var k = f.getAttribute("as");
                        if ("add" == f.nodeName) {
                            var l = mxUtils.getTextContent(f),
                                m = null;
                            null != l && 0 < l.length ? m = mxUtils.eval(l) : (m = f.getAttribute("value"), mxUtils.isNumeric(m) && (m = parseFloat(m)));
                            null != m && (g[k] = m)
                        } else "remove" == f.nodeName && delete g[k]
                    }
                    f = f.nextSibling
                }
                d.putCellStyle(e, g)
            }
            c = c.nextSibling
        }
        return d
    };
    return a
}());
mxCodecRegistry.register(function() {
    var a = new mxObjectCodec(new mxDefaultKeyHandler);
    a.encode = function(a, c) {
        return null
    };
    a.decode = function(a, c, d) {
        if (null != d)
            for (c = c.firstChild; null != c;) {
                if (!this.processInclude(a, c, d) && "add" == c.nodeName) {
                    var e = c.getAttribute("as"),
                        f = c.getAttribute("action"),
                        g = c.getAttribute("control");
                    d.bindAction(e, f, g)
                }
                c = c.nextSibling
            }
        return d
    };
    return a
}());
mxCodecRegistry.register(function() {
    var a = new mxObjectCodec(new mxDefaultToolbar);
    a.encode = function(a, c) {
        return null
    };
    a.decode = function(a, c, d) {
        if (null != d) {
            var e = d.editor;
            for (c = c.firstChild; null != c;) {
                if (c.nodeType == mxConstants.NODETYPE_ELEMENT && !this.processInclude(a, c, d))
                    if ("separator" == c.nodeName) d.addSeparator();
                    else if ("br" == c.nodeName) d.toolbar.addBreak();
                else if ("hr" == c.nodeName) d.toolbar.addLine();
                else if ("add" == c.nodeName) {
                    var f = c.getAttribute("as"),
                        f = mxResources.get(f) || f,
                        g = c.getAttribute("icon"),
                        k = c.getAttribute("pressedIcon"),
                        l = c.getAttribute("action"),
                        m = c.getAttribute("mode"),
                        n = c.getAttribute("template"),
                        p = "0" != c.getAttribute("toggle"),
                        q = mxUtils.getTextContent(c),
                        r = null;
                    if (null != l) r = d.addItem(f, g, l, k);
                    else if (null != m) var s = mxUtils.eval(q),
                        r = d.addMode(f, g, m, k, s);
                    else if (null != n || null != q && 0 < q.length) r = e.templates[n], n = c.getAttribute("style"), null != r && null != n && (r = e.graph.cloneCells([r])[0], r.setStyle(n)), n = null, null != q && 0 < q.length && (n = mxUtils.eval(q)), r = d.addPrototype(f, g, r, k, n, p);
                    else if (k =
                        mxUtils.getChildNodes(c), 0 < k.length)
                        if (null == g) {
                            n = d.addActionCombo(f);
                            for (f = 0; f < k.length; f++) p = k[f], "separator" == p.nodeName ? d.addOption(n, "---") : "add" == p.nodeName && (g = p.getAttribute("as"), p = p.getAttribute("action"), d.addActionOption(n, g, p))
                        } else {
                            var t = null,
                                u = d.addPrototype(f, g, function() {
                                    var a = e.templates[t.value];
                                    if (null != a) {
                                        var a = a.clone(),
                                            b = t.options[t.selectedIndex].cellStyle;
                                        null != b && a.setStyle(b);
                                        return a
                                    }
                                    mxLog.warn("Template " + a + " not found");
                                    return null
                                }, null, null, p),
                                t = d.addCombo();
                            mxEvent.addListener(t,
                                "change", function() {
                                    d.toolbar.selectMode(u, function(a) {
                                        a = mxUtils.convertPoint(e.graph.container, mxEvent.getClientX(a), mxEvent.getClientY(a));
                                        return e.addVertex(null, s(), a.x, a.y)
                                    });
                                    d.toolbar.noReset = !1
                                });
                            for (f = 0; f < k.length; f++) p = k[f], "separator" == p.nodeName ? d.addOption(t, "---") : "add" == p.nodeName && (g = p.getAttribute("as"), q = p.getAttribute("template"), d.addOption(t, g, q || n).cellStyle = p.getAttribute("style"))
                        }
                    null != r && (n = c.getAttribute("id"), null != n && 0 < n.length && r.setAttribute("id", n))
                }
                c = c.nextSibling
            }
        }
        return d
    };
    return a
}());
mxCodecRegistry.register(function() {
    var a = new mxObjectCodec(new mxDefaultPopupMenu);
    a.encode = function(a, c) {
        return null
    };
    a.decode = function(a, c, d) {
        var e = c.getElementsByTagName("include")[0];
        null != e ? this.processInclude(a, e, d) : null != d && (d.config = c);
        return d
    };
    return a
}());
mxCodecRegistry.register(function() {
    var a = new mxObjectCodec(new mxEditor, "modified lastSnapshot ignoredChanges undoManager graphContainer toolbarContainer".split(" "));
    a.afterDecode = function(a, c, d) {
        a = c.getAttribute("defaultEdge");
        null != a && (c.removeAttribute("defaultEdge"), d.defaultEdge = d.templates[a]);
        a = c.getAttribute("defaultGroup");
        null != a && (c.removeAttribute("defaultGroup"), d.defaultGroup = d.templates[a]);
        return d
    };
    a.decodeChild = function(a, c, d) {
        if ("Array" == c.nodeName) {
            if ("templates" == c.getAttribute("as")) {
                this.decodeTemplates(a,
                    c, d);
                return
            }
        } else if ("ui" == c.nodeName) {
            this.decodeUi(a, c, d);
            return
        }
        mxObjectCodec.prototype.decodeChild.apply(this, arguments)
    };
    a.decodeUi = function(a, c, d) {
        for (a = c.firstChild; null != a;) {
            if ("add" == a.nodeName) {
                c = a.getAttribute("as");
                var e = a.getAttribute("element"),
                    f = a.getAttribute("style"),
                    g = null;
                if (null != e) g = document.getElementById(e), null != g && null != f && (g.style.cssText += ";" + f);
                else {
                    var e = parseInt(a.getAttribute("x")),
                        k = parseInt(a.getAttribute("y")),
                        l = a.getAttribute("width"),
                        m = a.getAttribute("height"),
                        g = document.createElement("div");
                    g.style.cssText = f;
                    (new mxWindow(mxResources.get(c) || c, g, e, k, l, m, !1, !0)).setVisible(!0)
                }
                "graph" == c ? d.setGraphContainer(g) : "toolbar" == c ? d.setToolbarContainer(g) : "title" == c ? d.setTitleContainer(g) : "status" == c ? d.setStatusContainer(g) : "map" == c && d.setMapContainer(g)
            } else "resource" == a.nodeName ? mxResources.add(a.getAttribute("basename")) : "stylesheet" == a.nodeName && mxClient.link("stylesheet", a.getAttribute("name"));
            a = a.nextSibling
        }
    };
    a.decodeTemplates = function(a, c, d) {
        null == d.templates &&
            (d.templates = []);
        c = mxUtils.getChildNodes(c);
        for (var e = 0; e < c.length; e++) {
            for (var f = c[e].getAttribute("as"), g = c[e].firstChild; null != g && 1 != g.nodeType;) g = g.nextSibling;
            null != g && (d.templates[f] = a.decodeCell(g))
        }
    };
    return a
}());