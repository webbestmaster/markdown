module.exports = (function (e) {
    var r = {};
    function t(n) {
        if (r[n]) return r[n].exports;
        var o = (r[n] = {i: n, l: !1, exports: {}});
        return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    return (
        (t.m = e),
        (t.c = r),
        (t.d = function (e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {enumerable: !0, get: n});
        }),
        (t.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
                Object.defineProperty(e, '__esModule', {value: !0});
        }),
        (t.t = function (e, r) {
            if ((1 & r && (e = t(e)), 8 & r)) return e;
            if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (t.r(n), Object.defineProperty(n, 'default', {enumerable: !0, value: e}), 2 & r && 'string' != typeof e)
            )
                for (var o in e)
                    t.d(
                        n,
                        o,
                        function (r) {
                            return e[r];
                        }.bind(null, o),
                    );
            return n;
        }),
        (t.n = function (e) {
            var r =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(r, 'a', r), r;
        }),
        (t.o = function (e, r) {
            return Object.prototype.hasOwnProperty.call(e, r);
        }),
        (t.p = '/static/'),
        t((t.s = 1))
    );
})([
    function (e, r, t) {
        e.exports = {markdown_wrapper: '_18218b'};
    },
    function (e, r, t) {
        t(0), (e.exports = t(2));
    },
    function (e, r, t) {
        'use strict';
        function n(e, r) {
            if (e) {
                if ('string' == typeof e) return o(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === t && e.constructor && (t = e.constructor.name),
                    'Map' === t || 'Set' === t
                        ? Array.from(e)
                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? o(e, r)
                        : void 0
                );
            }
        }
        function o(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
            return n;
        }
        function i(e) {
            return e.trim().replace(/\s+/g, ' ');
        }
        function a(e) {
            if (0 === e.length) return !0;
            var r,
                t,
                o = ((t = e),
                1,
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(t) ||
                    (function (e, r) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
                            var t = [],
                                n = !0,
                                o = !1,
                                i = void 0;
                            try {
                                for (
                                    var a, l = e[Symbol.iterator]();
                                    !(n = (a = l.next()).done) && (t.push(a.value), 1 !== t.length);
                                    n = !0
                                );
                            } catch (e) {
                                (o = !0), (i = e);
                            } finally {
                                try {
                                    n || null == l.return || l.return();
                                } finally {
                                    if (o) throw i;
                                }
                            }
                            return t;
                        }
                    })(t) ||
                    n(t, 1) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })())[0],
                i = (function (e, r) {
                    var t;
                    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (t = n(e))) {
                            t && (e = t);
                            var o = 0,
                                i = function () {};
                            return {
                                s: i,
                                n: function () {
                                    return o >= e.length ? {done: !0} : {done: !1, value: e[o++]};
                                },
                                e: function (e) {
                                    throw e;
                                },
                                f: i,
                            };
                        }
                        throw new TypeError(
                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    }
                    var a,
                        l = !0,
                        u = !1;
                    return {
                        s: function () {
                            t = e[Symbol.iterator]();
                        },
                        n: function () {
                            var e = t.next();
                            return (l = e.done), e;
                        },
                        e: function (e) {
                            (u = !0), (a = e);
                        },
                        f: function () {
                            try {
                                l || null == t.return || t.return();
                            } finally {
                                if (u) throw a;
                            }
                        },
                    };
                })(e);
            try {
                for (i.s(); !(r = i.n()).done; ) if (r.value !== o) return !1;
            } catch (e) {
                i.e(e);
            } finally {
                i.f();
            }
            return !0;
        }
        t.r(r),
            t.d(r, 'markdown', function () {
                return V;
            });
        var l = ['# ', '## ', '### ', '#### ', '##### ', '###### '],
            u = ['> '],
            c = ['---', '***', '___'],
            f = ['```'],
            s = ['+ ', '- ', '* '],
            y = [
                {selector: '0. ', regExpSearchSelector: /^\d+\.\s/, olAttributeType: '1'},
                {selector: 'I. ', regExpSearchSelector: /^[CDILMVX]+\.\s/, olAttributeType: 'I'},
                {selector: 'i. ', regExpSearchSelector: /^[cdilmvx]+\.\s/, olAttributeType: 'i'},
                {selector: 'A. ', regExpSearchSelector: /^[A-Z]+\.\s/, olAttributeType: 'A'},
                {selector: 'a. ', regExpSearchSelector: /^[a-z]+\.\s/, olAttributeType: 'a'},
            ],
            d = [].concat(l, s, f, u).sort(function (e, r) {
                return r.length - e.length;
            }),
            p = [
                {selector: '**', openTag: '<b>', closeTag: '</b>', equal: /\*+/},
                {selector: '__', openTag: '<u>', closeTag: '</u>', equal: /_+/},
                {selector: '~~', openTag: '<strike>', closeTag: '</strike>', equal: /~+/},
                {selector: '_', openTag: '<i>', closeTag: '</i>', equal: /_+/},
                {selector: '*', openTag: '<i>', closeTag: '</i>', equal: /\*+/},
                {selector: '~', openTag: '<sub>', closeTag: '</sub>', equal: /~+/},
                {selector: '^', openTag: '<sup>', closeTag: '</sup>', equal: /\^+/},
                {selector: '`', openTag: '<code data-type="inline">', closeTag: '</code>', equal: /`+/},
            ];
        function v(e, r, t) {
            var n = e.selector,
                o = (function e(r, t, n) {
                    var o = t.indexOf(r);
                    if (-1 === o) return null;
                    var i = o + n,
                        a = i in t ? t[i] : null;
                    return a ? ('' === a.trimmedLine ? e(r, t, n + (n >= 0 ? 1 : -1)) : a) : null;
                })(e, r, t);
            return !o || o.selector !== n;
        }
        function b(e, r) {
            var t;
            if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                if (
                    Array.isArray(e) ||
                    (t = (function (e, r) {
                        if (e) {
                            if ('string' == typeof e) return h(e, void 0);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return (
                                'Object' === t && e.constructor && (t = e.constructor.name),
                                'Map' === t || 'Set' === t
                                    ? Array.from(e)
                                    : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                    ? h(e, void 0)
                                    : void 0
                            );
                        }
                    })(e)) ||
                    (r && e && 'number' == typeof e.length)
                ) {
                    t && (e = t);
                    var n = 0,
                        o = function () {};
                    return {
                        s: o,
                        n: function () {
                            return n >= e.length ? {done: !0} : {done: !1, value: e[n++]};
                        },
                        e: function (e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
            }
            var i,
                a = !0,
                l = !1;
            return {
                s: function () {
                    t = e[Symbol.iterator]();
                },
                n: function () {
                    var e = t.next();
                    return (a = e.done), e;
                },
                e: function (e) {
                    (l = !0), (i = e);
                },
                f: function () {
                    try {
                        a || null == t.return || t.return();
                    } finally {
                        if (l) throw i;
                    }
                },
            };
        }
        function h(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
            return n;
        }
        function m(e, r, t, n, o, l) {
            var u = e.trim(),
                s = '' === u,
                p = s ? o[o.length - 1].spaceCount : e.search(/\S/),
                v = p < 0 ? 0 : p,
                h = s
                    ? {selector: '', lineContent: ''}
                    : (function (e) {
                          var r,
                              t = b(d);
                          try {
                              for (t.s(); !(r = t.n()).done; ) {
                                  var n = r.value;
                                  if (e.startsWith(n)) return {selector: n, lineContent: i(e.replace(n, ''))};
                              }
                          } catch (e) {
                              t.e(e);
                          } finally {
                              t.f();
                          }
                          var o,
                              l = b(c);
                          try {
                              for (l.s(); !(o = l.n()).done; ) {
                                  var u = o.value;
                                  if (e.startsWith(u) && a(e)) return {selector: u, lineContent: ''};
                              }
                          } catch (e) {
                              l.e(e);
                          } finally {
                              l.f();
                          }
                          var f,
                              s = b(y);
                          try {
                              for (s.s(); !(f = s.n()).done; ) {
                                  var p = f.value,
                                      v = p.selector,
                                      h = p.regExpSearchSelector;
                                  if (0 === e.search(h)) return {selector: v, lineContent: i(e.replace(h, ''))};
                              }
                          } catch (e) {
                              s.e(e);
                          } finally {
                              s.f();
                          }
                          return {selector: '', lineContent: i(e)};
                      })(u),
                m = h.selector,
                g = h.lineContent,
                S = {
                    lineIndex: r,
                    spaceCount: v,
                    selector: m,
                    line: s ? '' : e,
                    trimmedLine: u,
                    lineContent: g,
                    childList: [],
                    additionalLineList: [],
                    useLineBreak: l.useLineBreak,
                };
            if (f.includes(m)) {
                if (l.codeLineData && '' === g) return void (l.codeLineData = null);
                l.codeLineData = S;
            }
            var w = l.codeLineData;
            if (w && w !== S) w.additionalLineList.push(S.line);
            else {
                if ('' === S.selector && g.length > 0) {
                    var A = o.length - 1,
                        j = A in o ? o[A] : null;
                    if (j && j.lineContent.length > 0) return void j.additionalLineList.push(g);
                }
                (function (e, r) {
                    for (var t = r.length - 1; t >= 0; t -= 1) {
                        var n = r[t];
                        if (n.spaceCount < e.spaceCount) return n;
                    }
                    return e;
                })(S, o).childList.push(S),
                    o.push(S);
            }
        }
        function g(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
            return n;
        }
        var S = /<(\w+)[^>]*>[\S\s]*?<\/\1>/,
            w = /<\w+[^>]*?\s*\/>/;
        function A(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
            return n;
        }
        var j = /\s*?\\$/;
        function O(e) {
            return e.replace(j, '<br/>');
        }
        function L(e, r) {
            return r || j.test(e);
        }
        function T(e, r, t, n) {
            var o = 'string' == typeof n ? ' title="' + n + '"' : '',
                i = 'string' == typeof r ? ' alt="' + r + '"' : '';
            return '<img loading="lazy" src="'.concat(t, '"').concat(i).concat(o, '/>');
        }
        var x = /!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g,
            I = /\[([\S\s]*?)]\((\S+?)\)/g;
        function C(e, r, t) {
            var n = r.length > 0 ? r : t;
            return '<a href="'.concat(t, '">').concat(n, '</a>');
        }
        function E(e, r) {
            var t;
            if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (t = k(e)) || (r && e && 'number' == typeof e.length)) {
                    t && (e = t);
                    var n = 0,
                        o = function () {};
                    return {
                        s: o,
                        n: function () {
                            return n >= e.length ? {done: !0} : {done: !1, value: e[n++]};
                        },
                        e: function (e) {
                            throw e;
                        },
                        f: o,
                    };
                }
                throw new TypeError(
                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
            }
            var i,
                a = !0,
                l = !1;
            return {
                s: function () {
                    t = e[Symbol.iterator]();
                },
                n: function () {
                    var e = t.next();
                    return (a = e.done), e;
                },
                e: function (e) {
                    (l = !0), (i = e);
                },
                f: function () {
                    try {
                        a || null == t.return || t.return();
                    } finally {
                        if (l) throw i;
                    }
                },
            };
        }
        function _(e, r) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, r) {
                    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
                        var t = [],
                            n = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (
                                var a, l = e[Symbol.iterator]();
                                !(n = (a = l.next()).done) && (t.push(a.value), !r || t.length !== r);
                                n = !0
                            );
                        } catch (e) {
                            (o = !0), (i = e);
                        } finally {
                            try {
                                n || null == l.return || l.return();
                            } finally {
                                if (o) throw i;
                            }
                        }
                        return t;
                    }
                })(e, r) ||
                k(e, r) ||
                (function () {
                    throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                })()
            );
        }
        function k(e, r) {
            if (e) {
                if ('string' == typeof e) return P(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === t && e.constructor && (t = e.constructor.name),
                    'Map' === t || 'Set' === t
                        ? Array.from(e)
                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? P(e, r)
                        : void 0
                );
            }
        }
        function P(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
            return n;
        }
        var q = /(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/g;
        function D(e, r) {
            var t = r.selector,
                n = r.openTag,
                o = r.closeTag,
                i = t.length;
            if (!e.includes(t)) return e;
            var a = (function (e) {
                    var r,
                        t,
                        n = [],
                        o = E(
                            (function (e) {
                                if (Array.isArray(e)) return P(e);
                            })((t = e.matchAll(q))) ||
                                (function (e) {
                                    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                                        return Array.from(e);
                                })(t) ||
                                k(t) ||
                                (function () {
                                    throw new TypeError(
                                        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                    );
                                })(),
                        );
                    try {
                        for (o.s(); !(r = o.n()).done; ) {
                            var i = r.value,
                                a = i.index,
                                l = a + i[0].length - 1;
                            n.push([a, l]);
                        }
                    } catch (e) {
                        o.e(e);
                    } finally {
                        o.f();
                    }
                    return n;
                })(e),
                l = (function (e, r) {
                    var t = r.selector,
                        n = r.equal,
                        o = [],
                        i = t.length;
                    if (0 === i) return o;
                    for (var a = e.indexOf(t, 0); -1 !== a; ) {
                        var l = e.slice(a).match(n);
                        if (!l) return [];
                        var u = _(l, 1)[0].length;
                        u === i && o.push(a), (a = e.indexOf(t, a + u));
                    }
                    return o.length % 2 == 1 ? o.slice(0, -1) : o;
                })(e, r),
                u = (l = l.filter(function (e) {
                    var r,
                        t,
                        n,
                        o,
                        l,
                        u,
                        c,
                        f,
                        s = E(a);
                    try {
                        for (s.s(); !(r = s.n()).done; ) {
                            var y = r.value;
                            if (
                                ((t = [e, e + i - 1]),
                                (o = (n = _(y, 2))[0]),
                                (l = n[1]),
                                (c = (u = _(t, 2))[0]),
                                (f = u[1]),
                                !(l < c || f < o))
                            )
                                return !1;
                        }
                    } catch (e) {
                        s.e(e);
                    } finally {
                        s.f();
                    }
                    return !0;
                })).length;
            if (0 === u) return e;
            for (var c = e.slice(0, l[0]), f = 1; f <= u; f += 1) {
                var s = l[f],
                    y = e.slice(l[f - 1] + i, s);
                c += f % 2 == 1 ? n + y + o : y;
            }
            return c;
        }
        function M(e) {
            return e.map(B).map(O).join('');
        }
        function B(e, r, t) {
            var n = e.selector,
                o = e.childList,
                i = e.lineContent,
                a = e.additionalLineList,
                d = e.trimmedLine,
                b = (function (e) {
                    var r = e.additionalLineList,
                        t = e.useLineBreak;
                    if (0 === r.length) return '';
                    for (
                        var n = L(e.lineContent, t) ? '<br/>' : ' ',
                            o = r.length,
                            i = o - 1,
                            a = new Array(o).fill(''),
                            l = 0;
                        l < o;
                        l += 1
                    ) {
                        var u = r[l];
                        if (L(u, t)) {
                            var c = u.replace(j, '');
                            a[l] = l === i ? c : c + '<br/>';
                        } else a[l] = l === i ? u : u + ' ';
                    }
                    return n + a.join('');
                })(e),
                h = M(o),
                m = i.replace(j, '') + b;
            if (
                ((m = (function (e) {
                    var r,
                        t = e,
                        n = E(p);
                    try {
                        for (n.s(); !(r = n.n()).done; ) t = D(t, r.value);
                    } catch (e) {
                        n.e(e);
                    } finally {
                        n.f();
                    }
                    return t;
                })(
                    (m = (function (e) {
                        return e.replace(I, C);
                    })((m = m.replace(x, T)))),
                )),
                (m += h),
                (function (e) {
                    return c.includes(e.selector);
                })(e))
            )
                return '<hr/>';
            if (
                (function (e) {
                    return f.includes(e.selector);
                })(e)
            )
                return '<code data-lang="'.concat(i, '">').concat(a.join('\n'), '</code>');
            if ('' === i && 0 === o.length) return '';
            if (
                (function (e) {
                    return l.includes(e.selector);
                })(e)
            ) {
                var O = n.length - 1;
                return '<h'.concat(O, '>').concat(m, '</h').concat(O, '>');
            }
            if (
                (function (e) {
                    return u.includes(e.selector);
                })(e)
            )
                return '<blockquote>'.concat(m, '</blockquote>');
            if (
                (function (e) {
                    return s.includes(e.selector);
                })(e)
            ) {
                var _ = v(e, t, -1),
                    k = v(e, t, 1) ? '</ul>' : '';
                return ''
                    .concat(_ ? '<ul>' : '', '<li>')
                    .concat(m, '</li>')
                    .concat(k);
            }
            if (
                (function (e) {
                    var r,
                        t = (function (e, r) {
                            var t;
                            if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                                if (
                                    Array.isArray(e) ||
                                    (t = (function (e, r) {
                                        if (e) {
                                            if ('string' == typeof e) return g(e, void 0);
                                            var t = Object.prototype.toString.call(e).slice(8, -1);
                                            return (
                                                'Object' === t && e.constructor && (t = e.constructor.name),
                                                'Map' === t || 'Set' === t
                                                    ? Array.from(e)
                                                    : 'Arguments' === t ||
                                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                    ? g(e, void 0)
                                                    : void 0
                                            );
                                        }
                                    })(e))
                                ) {
                                    t && (e = t);
                                    var n = 0,
                                        o = function () {};
                                    return {
                                        s: o,
                                        n: function () {
                                            return n >= e.length ? {done: !0} : {done: !1, value: e[n++]};
                                        },
                                        e: function (e) {
                                            throw e;
                                        },
                                        f: o,
                                    };
                                }
                                throw new TypeError(
                                    'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                );
                            }
                            var i,
                                a = !0,
                                l = !1;
                            return {
                                s: function () {
                                    t = e[Symbol.iterator]();
                                },
                                n: function () {
                                    var e = t.next();
                                    return (a = e.done), e;
                                },
                                e: function (e) {
                                    (l = !0), (i = e);
                                },
                                f: function () {
                                    try {
                                        a || null == t.return || t.return();
                                    } finally {
                                        if (l) throw i;
                                    }
                                },
                            };
                        })(y);
                    try {
                        for (t.s(); !(r = t.n()).done; ) if (r.value.selector === e.selector) return !0;
                    } catch (e) {
                        t.e(e);
                    } finally {
                        t.f();
                    }
                    return !1;
                })(e)
            ) {
                var P = v(e, t, -1),
                    q = v(e, t, 1),
                    B = P
                        ? '<ol type="'
                              .concat(
                                  (function (e) {
                                      var r,
                                          t = (function (e, r) {
                                              var t;
                                              if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                                                  if (
                                                      Array.isArray(e) ||
                                                      (t = (function (e, r) {
                                                          if (e) {
                                                              if ('string' == typeof e) return A(e, void 0);
                                                              var t = Object.prototype.toString.call(e).slice(8, -1);
                                                              return (
                                                                  'Object' === t &&
                                                                      e.constructor &&
                                                                      (t = e.constructor.name),
                                                                  'Map' === t || 'Set' === t
                                                                      ? Array.from(e)
                                                                      : 'Arguments' === t ||
                                                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                            t,
                                                                        )
                                                                      ? A(e, void 0)
                                                                      : void 0
                                                              );
                                                          }
                                                      })(e))
                                                  ) {
                                                      t && (e = t);
                                                      var n = 0,
                                                          o = function () {};
                                                      return {
                                                          s: o,
                                                          n: function () {
                                                              return n >= e.length
                                                                  ? {done: !0}
                                                                  : {done: !1, value: e[n++]};
                                                          },
                                                          e: function (e) {
                                                              throw e;
                                                          },
                                                          f: o,
                                                      };
                                                  }
                                                  throw new TypeError(
                                                      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                  );
                                              }
                                              var i,
                                                  a = !0,
                                                  l = !1;
                                              return {
                                                  s: function () {
                                                      t = e[Symbol.iterator]();
                                                  },
                                                  n: function () {
                                                      var e = t.next();
                                                      return (a = e.done), e;
                                                  },
                                                  e: function (e) {
                                                      (l = !0), (i = e);
                                                  },
                                                  f: function () {
                                                      try {
                                                          a || null == t.return || t.return();
                                                      } finally {
                                                          if (l) throw i;
                                                      }
                                                  },
                                              };
                                          })(y);
                                      try {
                                          for (t.s(); !(r = t.n()).done; ) {
                                              var n = r.value,
                                                  o = n.selector,
                                                  i = n.olAttributeType;
                                              if (e === o) return i;
                                          }
                                      } catch (e) {
                                          t.e(e);
                                      } finally {
                                          t.f();
                                      }
                                      return '1';
                                  })(e.selector),
                                  '" start="',
                              )
                              .concat(
                                  (function (e) {
                                      var r = e.indexOf('.');
                                      return e.slice(0, r);
                                  })(d),
                                  '">',
                              )
                        : '',
                    $ = q ? '</ol>' : '';
                return ''.concat(B, '<li>').concat(m, '</li>').concat($);
            }
            return '' === i ||
                (function (e) {
                    var r = e.trimmedLine;
                    return 0 === r.search(S) || 0 === r.search(w);
                })(e) ||
                (function (e) {
                    return '' === e.replace(x, '').trim();
                })(i)
                ? m
                : '<p>'.concat(m, '</p>');
        }
        var $ = t(0),
            U = {useLineBreak: !1, wrapperClassName: t.n($).a.markdown_wrapper};
        function N(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r &&
                    (n = n.filter(function (r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable;
                    })),
                    t.push.apply(t, n);
            }
            return t;
        }
        function z(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2
                    ? N(Object(t), !0).forEach(function (r) {
                          W(e, r, t[r]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : N(Object(t)).forEach(function (r) {
                          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                      });
            }
            return e;
        }
        function W(e, r, t) {
            return (
                r in e
                    ? Object.defineProperty(e, r, {value: t, enumerable: !0, configurable: !0, writable: !0})
                    : (e[r] = t),
                e
            );
        }
        function V(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
                t = z(z({}, U), r),
                n = {
                    lineIndex: -1,
                    spaceCount: -1,
                    selector: '',
                    line: '',
                    trimmedLine: '',
                    lineContent: '',
                    childList: [],
                    additionalLineList: [],
                    useLineBreak: t.useLineBreak,
                },
                o = [n],
                i = [n],
                a = {codeLineData: null, useLineBreak: t.useLineBreak};
            e.split('\n').forEach(function (e, r, t) {
                m(e, r, 0, 0, i, a);
            });
            var l = t.wrapperClassName,
                u = U.wrapperClassName,
                c = l === u ? u : ''.concat(u, ' ').concat(l);
            return '<div class="'.concat(c, '">').concat(M(o), '</div>');
        }
        r.default = V;
    },
]);
