﻿/// Knockout Mapping plugin v2.3.5
/// (c) 2012 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
/// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function (e) { "function" === typeof require && "object" === typeof exports && "object" === typeof module ? e(require("knockout"), exports) : "function" === typeof define && define.amd ? define(["knockout", "exports"], e) : e(ko, ko.mapping = {}) })(function (e, f) {
    function x(b, c) {
        var a, d; for (d in c) if (c.hasOwnProperty(d) && c[d]) if (a = f.getType(b[d]), d && b[d] && "array" !== a && "string" !== a) x(b[d], c[d]); else if ("array" === f.getType(b[d]) && "array" === f.getType(c[d])) {
            a = b; for (var e = d, k = b[d], m = c[d], s = {}, g = k.length - 1; 0 <= g; --g) s[k[g]] = k[g]; for (g =
            m.length - 1; 0 <= g; --g) s[m[g]] = m[g]; k = []; m = void 0; for (m in s) k.push(s[m]); a[e] = k
        } else b[d] = c[d]
    } function D(b, c) { var a = {}; x(a, b); x(a, c); return a } function y(b, c) {
        for (var a = D({}, b), e = K.length - 1; 0 <= e; e--) { var f = K[e]; a[f] && (a[""] instanceof Object || (a[""] = {}), a[""][f] = a[f], delete a[f]) } c && (a.ignore = h(c.ignore, a.ignore), a.include = h(c.include, a.include), a.copy = h(c.copy, a.copy), a.observe = h(c.observe, a.observe)); a.ignore = h(a.ignore, i.ignore); a.include = h(a.include, i.include); a.copy = h(a.copy, i.copy); a.observe = h(a.observe,
        i.observe); a.mappedProperties = a.mappedProperties || {}; a.copiedProperties = a.copiedProperties || {}; return a
    } function h(b, c) { "array" !== f.getType(b) && (b = "undefined" === f.getType(b) ? [] : [b]); "array" !== f.getType(c) && (c = "undefined" === f.getType(c) ? [] : [c]); return e.utils.arrayGetDistinctValues(b.concat(c)) } function E(b, c, a, d, j, k, m) {
        var s = "array" === f.getType(e.utils.unwrapObservable(c)), k = k || ""; if (f.isMapped(b)) var g = e.utils.unwrapObservable(b)[n], a = D(g, a); var i = m || j, h = function () {
            return a[d] && a[d].create instanceof
            Function
        }, w = function (b) {
            var f = F, g = e.dependentObservable; e.dependentObservable = function (a, b, c) { c = c || {}; a && "object" == typeof a && (c = a); var d = c.deferEvaluation, L = !1; c.deferEvaluation = !0; a = new G(a, b, c); if (!d) { var g = a, d = e.dependentObservable; e.dependentObservable = G; a = e.isWriteableObservable(g); e.dependentObservable = d; a = G({ read: function () { L || (e.utils.arrayRemoveItem(f, g), L = !0); return g.apply(g, arguments) }, write: a && function (a) { return g(a) }, deferEvaluation: !0 }); f.push(a) } return a }; e.dependentObservable.fn =
            G.fn; e.computed = e.dependentObservable; b = e.utils.unwrapObservable(j) instanceof Array ? a[d].create({ data: b || c, parent: i, skip: M }) : a[d].create({ data: b || c, parent: i }); e.dependentObservable = g; e.computed = e.dependentObservable; return b
        }, t = function () { return a[d] && a[d].update instanceof Function }, u = function (b, f) { var g = { data: f || c, parent: i, target: e.utils.unwrapObservable(b) }; e.isWriteableObservable(b) && (g.observable = b); return a[d].update(g) }; if (m = H.get(c)) return m; d = d || ""; if (s) {
            var s = [], r = !1, l = function (a) { return a };
            a[d] && a[d].key && (l = a[d].key, r = !0); e.isObservable(b) || (b = e.observableArray([]), b.mappedRemove = function (a) { var c = "function" == typeof a ? a : function (b) { return b === l(a) }; return b.remove(function (a) { return c(l(a)) }) }, b.mappedRemoveAll = function (a) { var c = B(a, l); return b.remove(function (a) { return -1 != e.utils.arrayIndexOf(c, l(a)) }) }, b.mappedDestroy = function (a) { var c = "function" == typeof a ? a : function (b) { return b === l(a) }; return b.destroy(function (a) { return c(l(a)) }) }, b.mappedDestroyAll = function (a) {
                var c = B(a, l); return b.destroy(function (a) {
                    return -1 !=
                    e.utils.arrayIndexOf(c, l(a))
                })
            }, b.mappedIndexOf = function (a) { var c = B(b(), l), a = l(a); return e.utils.arrayIndexOf(c, a) }, b.mappedCreate = function (a) { if (-1 !== b.mappedIndexOf(a)) throw Error("There already is an object with the key that you specified."); var c = h() ? w(a) : a; t() && (a = u(c, a), e.isWriteableObservable(c) ? c(a) : c = a); b.push(c); return c }); m = B(e.utils.unwrapObservable(b), l).sort(); g = B(c, l); r && g.sort(); var r = e.utils.compareArrays(m, g), m = {}, I, z = e.utils.unwrapObservable(c), x = {}, y = !0, g = 0; for (I = z.length; g < I; g++) {
                var q =
                l(z[g]); if (void 0 === q || q instanceof Object) { y = !1; break } x[q] = z[g]
            } var z = [], A = 0, g = 0; for (I = r.length; g < I; g++) {
                var q = r[g], p, v = k + "[" + g + "]"; switch (q.status) {
                    case "added": var C = y ? x[q.value] : J(e.utils.unwrapObservable(c), q.value, l); p = E(void 0, C, a, d, b, v, j); h() || (p = e.utils.unwrapObservable(p)); v = N(e.utils.unwrapObservable(c), C, m); p === M ? A++ : z[v - A] = p; m[v] = !0; break; case "retained": C = y ? x[q.value] : J(e.utils.unwrapObservable(c), q.value, l); p = J(b, q.value, l); E(p, C, a, d, b, v, j); v = N(e.utils.unwrapObservable(c), C, m); z[v] =
                    p; m[v] = !0; break; case "deleted": p = J(b, q.value, l)
                } s.push({ event: q.status, item: p })
            } b(z); a[d] && a[d].arrayChanged && e.utils.arrayForEach(s, function (b) { a[d].arrayChanged(b.event, b.item) })
        } else if (O(c)) {
            b = e.utils.unwrapObservable(b); if (!b) { if (h()) return r = w(), t() && (r = u(r)), r; if (t()) return u(r); b = {} } t() && (b = u(b)); H.save(c, b); if (t()) return b; P(c, function (d) {
                var f = k.length ? k + "." + d : d; if (-1 == e.utils.arrayIndexOf(a.ignore, f)) if (-1 != e.utils.arrayIndexOf(a.copy, f)) b[d] = c[d]; else if ("object" != typeof c[d] && "array" !=
                typeof c[d] && 0 < a.observe.length && -1 == e.utils.arrayIndexOf(a.observe, f)) b[d] = c[d], a.copiedProperties[f] = !0; else { var g = H.get(c[d]), j = E(b[d], c[d], a, d, b, f, b), g = g || j; if (0 < a.observe.length && -1 == e.utils.arrayIndexOf(a.observe, f)) b[d] = g(), a.copiedProperties[f] = !0; else { if (e.isWriteableObservable(b[d])) b[d](e.utils.unwrapObservable(g)); else g = void 0 === b[d] ? g : e.utils.unwrapObservable(g), b[d] = g; a.mappedProperties[f] = !0 } }
            })
        } else switch (f.getType(c)) {
            case "function": t() ? e.isWriteableObservable(c) ? (c(u(c)), b = c) :
            b = u(c) : b = c; break; default: if (e.isWriteableObservable(b)) return p = t() ? u(b) : e.utils.unwrapObservable(c), b(p), p; h() || t(); b = h() ? w() : e.observable(e.utils.unwrapObservable(c)); t() && b(u(b))
        } return b
    } function N(b, c, a) { for (var d = 0, e = b.length; d < e; d++) if (!0 !== a[d] && b[d] === c) return d; return null } function Q(b, c) { var a; c && (a = c(b)); "undefined" === f.getType(a) && (a = b); return e.utils.unwrapObservable(a) } function J(b, c, a) {
        for (var b = e.utils.unwrapObservable(b), d = 0, f = b.length; d < f; d++) { var k = b[d]; if (Q(k, a) === c) return k } throw Error("When calling ko.update*, the key '" +
        c + "' was not found!");
    } function B(b, c) { return e.utils.arrayMap(e.utils.unwrapObservable(b), function (a) { return c ? Q(a, c) : a }) } function P(b, c) { if ("array" === f.getType(b)) for (var a = 0; a < b.length; a++) c(a); else for (a in b) c(a) } function O(b) { var c = f.getType(b); return ("object" === c || "array" === c) && null !== b } function S() { var b = [], c = []; this.save = function (a, d) { var f = e.utils.arrayIndexOf(b, a); 0 <= f ? c[f] = d : (b.push(a), c.push(d)) }; this.get = function (a) { a = e.utils.arrayIndexOf(b, a); return 0 <= a ? c[a] : void 0 } } function R() {
        var b =
        {}, c = function (a) { var c; try { c = a } catch (e) { c = "$$$" } a = b[c]; void 0 === a && (a = new S, b[c] = a); return a }; this.save = function (a, b) { c(a).save(a, b) }; this.get = function (a) { return c(a).get(a) }
    } var n = "__ko_mapping__", G = e.dependentObservable, A = 0, F, H, K = ["create", "update", "key", "arrayChanged"], M = {}, w = { include: ["_destroy"], ignore: [], copy: [], observe: [] }, i = w; f.isMapped = function (b) { return (b = e.utils.unwrapObservable(b)) && b[n] }; f.fromJS = function (b) {
        if (0 == arguments.length) throw Error("When calling ko.fromJS, pass the object you want to convert.");
        window.setTimeout(function () { A = 0 }, 0); A++ || (F = [], H = new R); var c, a; 2 == arguments.length && (arguments[1][n] ? a = arguments[1] : c = arguments[1]); 3 == arguments.length && (c = arguments[1], a = arguments[2]); a && (c = D(c, a[n])); c = y(c); var d = E(a, b, c); a && (d = a); --A || window.setTimeout(function () { for (; F.length;) { var a = F.pop(); a && a() } }, 0); d[n] = D(d[n], c); return d
    }; f.fromJSON = function (b) { var c = e.utils.parseJson(b); arguments[0] = c; return f.fromJS.apply(this, arguments) }; f.updateFromJS = function () {
        throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");
    }; f.updateFromJSON = function () { throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!"); }; f.toJS = function (b, c) {
        i || f.resetDefaultOptions(); if (0 == arguments.length) throw Error("When calling ko.mapping.toJS, pass the object you want to convert."); if ("array" !== f.getType(i.ignore)) throw Error("ko.mapping.defaultOptions().ignore should be an array."); if ("array" !== f.getType(i.include)) throw Error("ko.mapping.defaultOptions().include should be an array.");
        if ("array" !== f.getType(i.copy)) throw Error("ko.mapping.defaultOptions().copy should be an array."); c = y(c, b[n]); return f.visitModel(b, function (a) { return e.utils.unwrapObservable(a) }, c)
    }; f.toJSON = function (b, c) { var a = f.toJS(b, c); return e.utils.stringifyJson(a) }; f.defaultOptions = function () { if (0 < arguments.length) i = arguments[0]; else return i }; f.resetDefaultOptions = function () { i = { include: w.include.slice(0), ignore: w.ignore.slice(0), copy: w.copy.slice(0) } }; f.getType = function (b) {
        if (b && "object" === typeof b) {
            if (b.constructor ==
            (new Date).constructor) return "date"; if ("[object Array]" === Object.prototype.toString.call(b)) return "array"
        } return typeof b
    }; f.visitModel = function (b, c, a) {
        a = a || {}; a.visitedObjects = a.visitedObjects || new R; var d, j = e.utils.unwrapObservable(b); if (O(j)) a = y(a, j[n]), c(b, a.parentName), d = "array" === f.getType(j) ? [] : {}; else return c(b, a.parentName); a.visitedObjects.save(b, d); var k = a.parentName; P(j, function (b) {
            if (!(a.ignore && -1 != e.utils.arrayIndexOf(a.ignore, b))) {
                var i = j[b], g = a, h = k || ""; "array" === f.getType(j) ? k &&
                (h += "[" + b + "]") : (k && (h += "."), h += b); g.parentName = h; if (!(-1 === e.utils.arrayIndexOf(a.copy, b) && -1 === e.utils.arrayIndexOf(a.include, b) && j[n] && j[n].mappedProperties && !j[n].mappedProperties[b] && j[n].copiedProperties && !j[n].copiedProperties[b] && "array" !== f.getType(j))) switch (f.getType(e.utils.unwrapObservable(i))) { case "object": case "array": case "undefined": g = a.visitedObjects.get(i); d[b] = "undefined" !== f.getType(g) ? g : f.visitModel(i, c, a); break; default: d[b] = c(i, a.parentName) }
            }
        }); return d
    }
});