/*! For license information please see swagger-ui-es-bundle-core.js.LICENSE.txt */
import * as e from 'base64-js'
import * as t from 'ieee754'
import * as r from 'react'
import * as n from 'redux'
import * as a from 'immutable'
import * as o from 'redux-immutable'
import * as s from 'serialize-error'
import * as l from 'lodash/merge'
import * as i from '@braintree/sanitize-url'
import * as c from 'lodash/camelCase'
import * as u from 'lodash/upperFirst'
import * as d from 'lodash/memoize'
import * as p from 'lodash/find'
import * as m from 'lodash/some'
import * as f from 'lodash/eq'
import * as h from 'lodash/isFunction'
import * as g from 'css.escape'
import * as y from 'url-parse'
import * as S from 'reselect'
import * as _ from 'prop-types'
import * as v from 'lodash/omit'
import * as b from 'js-yaml'
import * as w from 'zenscroll'
import * as C from 'react-immutable-proptypes'
import * as x from 'lodash/reduce'
import * as O from 'lodash/get'
import * as k from '@babel/runtime-corejs3/helpers/extends'
import * as N from 'classnames'
import * as A from 'react-copy-to-clipboard'
import * as I from 'react-immutable-pure-component'
import * as R from 'react-debounce-input'
import * as T from 'randexp'
import * as B from 'lodash/isEmpty'
import * as j from 'lodash/constant'
import * as P from 'lodash/isString'
import * as M from 'lodash/debounce'
import * as q from 'lodash/set'
import * as L from 'lodash/fp/assocPath'
import * as D from 'swagger-client/es/resolver/strategies/generic'
import * as U from 'swagger-client/es/resolver/strategies/openapi-2'
import * as $ from 'swagger-client/es/resolver/strategies/openapi-3-0'
import * as J from 'swagger-client/es/resolver/strategies/openapi-3-1-apidom'
import * as V from 'swagger-client/es/resolver'
import * as K from 'swagger-client/es/execute'
import * as z from 'swagger-client/es/http'
import * as F from 'swagger-client/es/subtree-resolver'
import * as W from 'swagger-client/es/helpers'
import * as H from 'react-dom'
import * as G from 'react-redux'
import * as X from 'lodash/identity'
import * as Y from 'react-syntax-highlighter/dist/esm/light'
import * as Q from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import * as Z from 'react-syntax-highlighter/dist/esm/languages/hljs/json'
import * as ee from 'react-syntax-highlighter/dist/esm/languages/hljs/xml'
import * as te from 'react-syntax-highlighter/dist/esm/languages/hljs/bash'
import * as re from 'react-syntax-highlighter/dist/esm/languages/hljs/yaml'
import * as ne from 'react-syntax-highlighter/dist/esm/languages/hljs/http'
import * as ae from 'react-syntax-highlighter/dist/esm/languages/hljs/powershell'
import * as oe from 'react-syntax-highlighter/dist/esm/styles/hljs/agate'
import * as se from 'react-syntax-highlighter/dist/esm/styles/hljs/arta'
import * as le from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai'
import * as ie from 'react-syntax-highlighter/dist/esm/styles/hljs/nord'
import * as ce from 'react-syntax-highlighter/dist/esm/styles/hljs/obsidian'
import * as ue from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night'
import * as de from 'react-syntax-highlighter/dist/esm/styles/hljs/idea'
import * as pe from 'js-file-download'
import * as me from 'lodash/zipObject'
import * as fe from 'lodash/toString'
import * as he from 'xml-but-prettier'
import * as ge from 'lodash/toLower'
import * as ye from 'remarkable'
import * as Ee from 'remarkable/linkify'
import * as Se from 'dompurify'
import * as _e from 'lodash/escapeRegExp'
import * as ve from 'lodash/isPlainObject'
import * as be from 'lodash/has'
import * as we from 'lodash/fp/set'
var Ce = {
    287: function (e, t, r) {
      const n = r(987),
        a = r(362),
        o =
          'function' == typeof Symbol && 'function' == typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null
      ;(t.Buffer = Buffer),
        (t.SlowBuffer = function SlowBuffer(e) {
          ;+e != e && (e = 0)
          return Buffer.alloc(+e)
        }),
        (t.INSPECT_MAX_BYTES = 50)
      const s = 2147483647
      function createBuffer(e) {
        if (e > s)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"',
          )
        const t = new Uint8Array(e)
        return Object.setPrototypeOf(t, Buffer.prototype), t
      }
      function Buffer(e, t, r) {
        if ('number' == typeof e) {
          if ('string' == typeof t)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number',
            )
          return allocUnsafe(e)
        }
        return from(e, t, r)
      }
      function from(e, t, r) {
        if ('string' == typeof e)
          return (function fromString(e, t) {
            ;('string' == typeof t && '' !== t) || (t = 'utf8')
            if (!Buffer.isEncoding(t))
              throw new TypeError('Unknown encoding: ' + t)
            const r = 0 | byteLength(e, t)
            let n = createBuffer(r)
            const a = n.write(e, t)
            a !== r && (n = n.slice(0, a))
            return n
          })(e, t)
        if (ArrayBuffer.isView(e))
          return (function fromArrayView(e) {
            if (isInstance(e, Uint8Array)) {
              const t = new Uint8Array(e)
              return fromArrayBuffer(t.buffer, t.byteOffset, t.byteLength)
            }
            return fromArrayLike(e)
          })(e)
        if (null == e)
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof e,
          )
        if (
          isInstance(e, ArrayBuffer) ||
          (e && isInstance(e.buffer, ArrayBuffer))
        )
          return fromArrayBuffer(e, t, r)
        if (
          'undefined' != typeof SharedArrayBuffer &&
          (isInstance(e, SharedArrayBuffer) ||
            (e && isInstance(e.buffer, SharedArrayBuffer)))
        )
          return fromArrayBuffer(e, t, r)
        if ('number' == typeof e)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number',
          )
        const n = e.valueOf && e.valueOf()
        if (null != n && n !== e) return Buffer.from(n, t, r)
        const a = (function fromObject(e) {
          if (Buffer.isBuffer(e)) {
            const t = 0 | checked(e.length),
              r = createBuffer(t)
            return 0 === r.length || e.copy(r, 0, 0, t), r
          }
          if (void 0 !== e.length)
            return 'number' != typeof e.length || numberIsNaN(e.length)
              ? createBuffer(0)
              : fromArrayLike(e)
          if ('Buffer' === e.type && Array.isArray(e.data))
            return fromArrayLike(e.data)
        })(e)
        if (a) return a
        if (
          'undefined' != typeof Symbol &&
          null != Symbol.toPrimitive &&
          'function' == typeof e[Symbol.toPrimitive]
        )
          return Buffer.from(e[Symbol.toPrimitive]('string'), t, r)
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof e,
        )
      }
      function assertSize(e) {
        if ('number' != typeof e)
          throw new TypeError('"size" argument must be of type number')
        if (e < 0)
          throw new RangeError(
            'The value "' + e + '" is invalid for option "size"',
          )
      }
      function allocUnsafe(e) {
        return assertSize(e), createBuffer(e < 0 ? 0 : 0 | checked(e))
      }
      function fromArrayLike(e) {
        const t = e.length < 0 ? 0 : 0 | checked(e.length),
          r = createBuffer(t)
        for (let n = 0; n < t; n += 1) r[n] = 255 & e[n]
        return r
      }
      function fromArrayBuffer(e, t, r) {
        if (t < 0 || e.byteLength < t)
          throw new RangeError('"offset" is outside of buffer bounds')
        if (e.byteLength < t + (r || 0))
          throw new RangeError('"length" is outside of buffer bounds')
        let n
        return (
          (n =
            void 0 === t && void 0 === r
              ? new Uint8Array(e)
              : void 0 === r
              ? new Uint8Array(e, t)
              : new Uint8Array(e, t, r)),
          Object.setPrototypeOf(n, Buffer.prototype),
          n
        )
      }
      function checked(e) {
        if (e >= s)
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' +
              s.toString(16) +
              ' bytes',
          )
        return 0 | e
      }
      function byteLength(e, t) {
        if (Buffer.isBuffer(e)) return e.length
        if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer))
          return e.byteLength
        if ('string' != typeof e)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e,
          )
        const r = e.length,
          n = arguments.length > 2 && !0 === arguments[2]
        if (!n && 0 === r) return 0
        let a = !1
        for (;;)
          switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r
            case 'utf8':
            case 'utf-8':
              return utf8ToBytes(e).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r
            case 'hex':
              return r >>> 1
            case 'base64':
              return base64ToBytes(e).length
            default:
              if (a) return n ? -1 : utf8ToBytes(e).length
              ;(t = ('' + t).toLowerCase()), (a = !0)
          }
      }
      function slowToString(e, t, r) {
        let n = !1
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return ''
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return ''
        if ((r >>>= 0) <= (t >>>= 0)) return ''
        for (e || (e = 'utf8'); ; )
          switch (e) {
            case 'hex':
              return hexSlice(this, t, r)
            case 'utf8':
            case 'utf-8':
              return utf8Slice(this, t, r)
            case 'ascii':
              return asciiSlice(this, t, r)
            case 'latin1':
            case 'binary':
              return latin1Slice(this, t, r)
            case 'base64':
              return base64Slice(this, t, r)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return utf16leSlice(this, t, r)
            default:
              if (n) throw new TypeError('Unknown encoding: ' + e)
              ;(e = (e + '').toLowerCase()), (n = !0)
          }
      }
      function swap(e, t, r) {
        const n = e[t]
        ;(e[t] = e[r]), (e[r] = n)
      }
      function bidirectionalIndexOf(e, t, r, n, a) {
        if (0 === e.length) return -1
        if (
          ('string' == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          numberIsNaN((r = +r)) && (r = a ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (a) return -1
          r = e.length - 1
        } else if (r < 0) {
          if (!a) return -1
          r = 0
        }
        if (
          ('string' == typeof t && (t = Buffer.from(t, n)), Buffer.isBuffer(t))
        )
          return 0 === t.length ? -1 : arrayIndexOf(e, t, r, n, a)
        if ('number' == typeof t)
          return (
            (t &= 255),
            'function' == typeof Uint8Array.prototype.indexOf
              ? a
                ? Uint8Array.prototype.indexOf.call(e, t, r)
                : Uint8Array.prototype.lastIndexOf.call(e, t, r)
              : arrayIndexOf(e, [t], r, n, a)
          )
        throw new TypeError('val must be string, number or Buffer')
      }
      function arrayIndexOf(e, t, r, n, a) {
        let o,
          s = 1,
          l = e.length,
          i = t.length
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1
          ;(s = 2), (l /= 2), (i /= 2), (r /= 2)
        }
        function read(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s)
        }
        if (a) {
          let n = -1
          for (o = r; o < l; o++)
            if (read(e, o) === read(t, -1 === n ? 0 : o - n)) {
              if ((-1 === n && (n = o), o - n + 1 === i)) return n * s
            } else -1 !== n && (o -= o - n), (n = -1)
        } else
          for (r + i > l && (r = l - i), o = r; o >= 0; o--) {
            let r = !0
            for (let n = 0; n < i; n++)
              if (read(e, o + n) !== read(t, n)) {
                r = !1
                break
              }
            if (r) return o
          }
        return -1
      }
      function hexWrite(e, t, r, n) {
        r = Number(r) || 0
        const a = e.length - r
        n ? (n = Number(n)) > a && (n = a) : (n = a)
        const o = t.length
        let s
        for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
          const n = parseInt(t.substr(2 * s, 2), 16)
          if (numberIsNaN(n)) return s
          e[r + s] = n
        }
        return s
      }
      function utf8Write(e, t, r, n) {
        return blitBuffer(utf8ToBytes(t, e.length - r), e, r, n)
      }
      function asciiWrite(e, t, r, n) {
        return blitBuffer(
          (function asciiToBytes(e) {
            const t = []
            for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r))
            return t
          })(t),
          e,
          r,
          n,
        )
      }
      function base64Write(e, t, r, n) {
        return blitBuffer(base64ToBytes(t), e, r, n)
      }
      function ucs2Write(e, t, r, n) {
        return blitBuffer(
          (function utf16leToBytes(e, t) {
            let r, n, a
            const o = []
            for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
              (r = e.charCodeAt(s)),
                (n = r >> 8),
                (a = r % 256),
                o.push(a),
                o.push(n)
            return o
          })(t, e.length - r),
          e,
          r,
          n,
        )
      }
      function base64Slice(e, t, r) {
        return 0 === t && r === e.length
          ? n.fromByteArray(e)
          : n.fromByteArray(e.slice(t, r))
      }
      function utf8Slice(e, t, r) {
        r = Math.min(e.length, r)
        const n = []
        let a = t
        for (; a < r; ) {
          const t = e[a]
          let o = null,
            s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1
          if (a + s <= r) {
            let r, n, l, i
            switch (s) {
              case 1:
                t < 128 && (o = t)
                break
              case 2:
                ;(r = e[a + 1]),
                  128 == (192 & r) &&
                    ((i = ((31 & t) << 6) | (63 & r)), i > 127 && (o = i))
                break
              case 3:
                ;(r = e[a + 1]),
                  (n = e[a + 2]),
                  128 == (192 & r) &&
                    128 == (192 & n) &&
                    ((i = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)),
                    i > 2047 && (i < 55296 || i > 57343) && (o = i))
                break
              case 4:
                ;(r = e[a + 1]),
                  (n = e[a + 2]),
                  (l = e[a + 3]),
                  128 == (192 & r) &&
                    128 == (192 & n) &&
                    128 == (192 & l) &&
                    ((i =
                      ((15 & t) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & l)),
                    i > 65535 && i < 1114112 && (o = i))
            }
          }
          null === o
            ? ((o = 65533), (s = 1))
            : o > 65535 &&
              ((o -= 65536),
              n.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            n.push(o),
            (a += s)
        }
        return (function decodeCodePointsArray(e) {
          const t = e.length
          if (t <= l) return String.fromCharCode.apply(String, e)
          let r = '',
            n = 0
          for (; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += l)))
          return r
        })(n)
      }
      ;(t.kMaxLength = s),
        (Buffer.TYPED_ARRAY_SUPPORT = (function typedArraySupport() {
          try {
            const e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42
                },
              }
            return (
              Object.setPrototypeOf(t, Uint8Array.prototype),
              Object.setPrototypeOf(e, t),
              42 === e.foo()
            )
          } catch (e) {
            return !1
          }
        })()),
        Buffer.TYPED_ARRAY_SUPPORT ||
          'undefined' == typeof console ||
          'function' != typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
          ),
        Object.defineProperty(Buffer.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (Buffer.isBuffer(this)) return this.buffer
          },
        }),
        Object.defineProperty(Buffer.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (Buffer.isBuffer(this)) return this.byteOffset
          },
        }),
        (Buffer.poolSize = 8192),
        (Buffer.from = function (e, t, r) {
          return from(e, t, r)
        }),
        Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(Buffer, Uint8Array),
        (Buffer.alloc = function (e, t, r) {
          return (function alloc(e, t, r) {
            return (
              assertSize(e),
              e <= 0
                ? createBuffer(e)
                : void 0 !== t
                ? 'string' == typeof r
                  ? createBuffer(e).fill(t, r)
                  : createBuffer(e).fill(t)
                : createBuffer(e)
            )
          })(e, t, r)
        }),
        (Buffer.allocUnsafe = function (e) {
          return allocUnsafe(e)
        }),
        (Buffer.allocUnsafeSlow = function (e) {
          return allocUnsafe(e)
        }),
        (Buffer.isBuffer = function isBuffer(e) {
          return null != e && !0 === e._isBuffer && e !== Buffer.prototype
        }),
        (Buffer.compare = function compare(e, t) {
          if (
            (isInstance(e, Uint8Array) &&
              (e = Buffer.from(e, e.offset, e.byteLength)),
            isInstance(t, Uint8Array) &&
              (t = Buffer.from(t, t.offset, t.byteLength)),
            !Buffer.isBuffer(e) || !Buffer.isBuffer(t))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
            )
          if (e === t) return 0
          let r = e.length,
            n = t.length
          for (let a = 0, o = Math.min(r, n); a < o; ++a)
            if (e[a] !== t[a]) {
              ;(r = e[a]), (n = t[a])
              break
            }
          return r < n ? -1 : n < r ? 1 : 0
        }),
        (Buffer.isEncoding = function isEncoding(e) {
          switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0
            default:
              return !1
          }
        }),
        (Buffer.concat = function concat(e, t) {
          if (!Array.isArray(e))
            throw new TypeError('"list" argument must be an Array of Buffers')
          if (0 === e.length) return Buffer.alloc(0)
          let r
          if (void 0 === t)
            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length
          const n = Buffer.allocUnsafe(t)
          let a = 0
          for (r = 0; r < e.length; ++r) {
            let t = e[r]
            if (isInstance(t, Uint8Array))
              a + t.length > n.length
                ? (Buffer.isBuffer(t) || (t = Buffer.from(t)), t.copy(n, a))
                : Uint8Array.prototype.set.call(n, t, a)
            else {
              if (!Buffer.isBuffer(t))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                )
              t.copy(n, a)
            }
            a += t.length
          }
          return n
        }),
        (Buffer.byteLength = byteLength),
        (Buffer.prototype._isBuffer = !0),
        (Buffer.prototype.swap16 = function swap16() {
          const e = this.length
          if (e % 2 != 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits')
          for (let t = 0; t < e; t += 2) swap(this, t, t + 1)
          return this
        }),
        (Buffer.prototype.swap32 = function swap32() {
          const e = this.length
          if (e % 4 != 0)
            throw new RangeError('Buffer size must be a multiple of 32-bits')
          for (let t = 0; t < e; t += 4)
            swap(this, t, t + 3), swap(this, t + 1, t + 2)
          return this
        }),
        (Buffer.prototype.swap64 = function swap64() {
          const e = this.length
          if (e % 8 != 0)
            throw new RangeError('Buffer size must be a multiple of 64-bits')
          for (let t = 0; t < e; t += 8)
            swap(this, t, t + 7),
              swap(this, t + 1, t + 6),
              swap(this, t + 2, t + 5),
              swap(this, t + 3, t + 4)
          return this
        }),
        (Buffer.prototype.toString = function toString() {
          const e = this.length
          return 0 === e
            ? ''
            : 0 === arguments.length
            ? utf8Slice(this, 0, e)
            : slowToString.apply(this, arguments)
        }),
        (Buffer.prototype.toLocaleString = Buffer.prototype.toString),
        (Buffer.prototype.equals = function equals(e) {
          if (!Buffer.isBuffer(e))
            throw new TypeError('Argument must be a Buffer')
          return this === e || 0 === Buffer.compare(this, e)
        }),
        (Buffer.prototype.inspect = function inspect() {
          let e = ''
          const r = t.INSPECT_MAX_BYTES
          return (
            (e = this.toString('hex', 0, r)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > r && (e += ' ... '),
            '<Buffer ' + e + '>'
          )
        }),
        o && (Buffer.prototype[o] = Buffer.prototype.inspect),
        (Buffer.prototype.compare = function compare(e, t, r, n, a) {
          if (
            (isInstance(e, Uint8Array) &&
              (e = Buffer.from(e, e.offset, e.byteLength)),
            !Buffer.isBuffer(e))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e,
            )
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === a && (a = this.length),
            t < 0 || r > e.length || n < 0 || a > this.length)
          )
            throw new RangeError('out of range index')
          if (n >= a && t >= r) return 0
          if (n >= a) return -1
          if (t >= r) return 1
          if (this === e) return 0
          let o = (a >>>= 0) - (n >>>= 0),
            s = (r >>>= 0) - (t >>>= 0)
          const l = Math.min(o, s),
            i = this.slice(n, a),
            c = e.slice(t, r)
          for (let e = 0; e < l; ++e)
            if (i[e] !== c[e]) {
              ;(o = i[e]), (s = c[e])
              break
            }
          return o < s ? -1 : s < o ? 1 : 0
        }),
        (Buffer.prototype.includes = function includes(e, t, r) {
          return -1 !== this.indexOf(e, t, r)
        }),
        (Buffer.prototype.indexOf = function indexOf(e, t, r) {
          return bidirectionalIndexOf(this, e, t, r, !0)
        }),
        (Buffer.prototype.lastIndexOf = function lastIndexOf(e, t, r) {
          return bidirectionalIndexOf(this, e, t, r, !1)
        }),
        (Buffer.prototype.write = function write(e, t, r, n) {
          if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0)
          else if (void 0 === r && 'string' == typeof t)
            (n = t), (r = this.length), (t = 0)
          else {
            if (!isFinite(t))
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported',
              )
            ;(t >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
                : ((n = r), (r = void 0))
          }
          const a = this.length - t
          if (
            ((void 0 === r || r > a) && (r = a),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds')
          n || (n = 'utf8')
          let o = !1
          for (;;)
            switch (n) {
              case 'hex':
                return hexWrite(this, e, t, r)
              case 'utf8':
              case 'utf-8':
                return utf8Write(this, e, t, r)
              case 'ascii':
              case 'latin1':
              case 'binary':
                return asciiWrite(this, e, t, r)
              case 'base64':
                return base64Write(this, e, t, r)
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return ucs2Write(this, e, t, r)
              default:
                if (o) throw new TypeError('Unknown encoding: ' + n)
                ;(n = ('' + n).toLowerCase()), (o = !0)
            }
        }),
        (Buffer.prototype.toJSON = function toJSON() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          }
        })
      const l = 4096
      function asciiSlice(e, t, r) {
        let n = ''
        r = Math.min(e.length, r)
        for (let a = t; a < r; ++a) n += String.fromCharCode(127 & e[a])
        return n
      }
      function latin1Slice(e, t, r) {
        let n = ''
        r = Math.min(e.length, r)
        for (let a = t; a < r; ++a) n += String.fromCharCode(e[a])
        return n
      }
      function hexSlice(e, t, r) {
        const n = e.length
        ;(!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n)
        let a = ''
        for (let n = t; n < r; ++n) a += u[e[n]]
        return a
      }
      function utf16leSlice(e, t, r) {
        const n = e.slice(t, r)
        let a = ''
        for (let e = 0; e < n.length - 1; e += 2)
          a += String.fromCharCode(n[e] + 256 * n[e + 1])
        return a
      }
      function checkOffset(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint')
        if (e + t > r)
          throw new RangeError('Trying to access beyond buffer length')
      }
      function checkInt(e, t, r, n, a, o) {
        if (!Buffer.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance')
        if (t > a || t < o)
          throw new RangeError('"value" argument is out of bounds')
        if (r + n > e.length) throw new RangeError('Index out of range')
      }
      function wrtBigUInt64LE(e, t, r, n, a) {
        checkIntBI(t, n, a, e, r, 7)
        let o = Number(t & BigInt(4294967295))
        ;(e[r++] = o),
          (o >>= 8),
          (e[r++] = o),
          (o >>= 8),
          (e[r++] = o),
          (o >>= 8),
          (e[r++] = o)
        let s = Number((t >> BigInt(32)) & BigInt(4294967295))
        return (
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          (s >>= 8),
          (e[r++] = s),
          r
        )
      }
      function wrtBigUInt64BE(e, t, r, n, a) {
        checkIntBI(t, n, a, e, r, 7)
        let o = Number(t & BigInt(4294967295))
        ;(e[r + 7] = o),
          (o >>= 8),
          (e[r + 6] = o),
          (o >>= 8),
          (e[r + 5] = o),
          (o >>= 8),
          (e[r + 4] = o)
        let s = Number((t >> BigInt(32)) & BigInt(4294967295))
        return (
          (e[r + 3] = s),
          (s >>= 8),
          (e[r + 2] = s),
          (s >>= 8),
          (e[r + 1] = s),
          (s >>= 8),
          (e[r] = s),
          r + 8
        )
      }
      function checkIEEE754(e, t, r, n, a, o) {
        if (r + n > e.length) throw new RangeError('Index out of range')
        if (r < 0) throw new RangeError('Index out of range')
      }
      function writeFloat(e, t, r, n, o) {
        return (
          (t = +t),
          (r >>>= 0),
          o || checkIEEE754(e, 0, r, 4),
          a.write(e, t, r, n, 23, 4),
          r + 4
        )
      }
      function writeDouble(e, t, r, n, o) {
        return (
          (t = +t),
          (r >>>= 0),
          o || checkIEEE754(e, 0, r, 8),
          a.write(e, t, r, n, 52, 8),
          r + 8
        )
      }
      ;(Buffer.prototype.slice = function slice(e, t) {
        const r = this.length
        ;(e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          (t = void 0 === t ? r : ~~t) < 0
            ? (t += r) < 0 && (t = 0)
            : t > r && (t = r),
          t < e && (t = e)
        const n = this.subarray(e, t)
        return Object.setPrototypeOf(n, Buffer.prototype), n
      }),
        (Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE =
          function readUIntLE(e, t, r) {
            ;(e >>>= 0), (t >>>= 0), r || checkOffset(e, t, this.length)
            let n = this[e],
              a = 1,
              o = 0
            for (; ++o < t && (a *= 256); ) n += this[e + o] * a
            return n
          }),
        (Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE =
          function readUIntBE(e, t, r) {
            ;(e >>>= 0), (t >>>= 0), r || checkOffset(e, t, this.length)
            let n = this[e + --t],
              a = 1
            for (; t > 0 && (a *= 256); ) n += this[e + --t] * a
            return n
          }),
        (Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 =
          function readUInt8(e, t) {
            return (e >>>= 0), t || checkOffset(e, 1, this.length), this[e]
          }),
        (Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE =
          function readUInt16LE(e, t) {
            return (
              (e >>>= 0),
              t || checkOffset(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            )
          }),
        (Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE =
          function readUInt16BE(e, t) {
            return (
              (e >>>= 0),
              t || checkOffset(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            )
          }),
        (Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE =
          function readUInt32LE(e, t) {
            return (
              (e >>>= 0),
              t || checkOffset(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            )
          }),
        (Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE =
          function readUInt32BE(e, t) {
            return (
              (e >>>= 0),
              t || checkOffset(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            )
          }),
        (Buffer.prototype.readBigUInt64LE = defineBigIntMethod(
          function readBigUInt64LE(e) {
            validateNumber((e >>>= 0), 'offset')
            const t = this[e],
              r = this[e + 7]
            ;(void 0 !== t && void 0 !== r) || boundsError(e, this.length - 8)
            const n =
                t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
              a = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24
            return BigInt(n) + (BigInt(a) << BigInt(32))
          },
        )),
        (Buffer.prototype.readBigUInt64BE = defineBigIntMethod(
          function readBigUInt64BE(e) {
            validateNumber((e >>>= 0), 'offset')
            const t = this[e],
              r = this[e + 7]
            ;(void 0 !== t && void 0 !== r) || boundsError(e, this.length - 8)
            const n =
                t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
              a = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r
            return (BigInt(n) << BigInt(32)) + BigInt(a)
          },
        )),
        (Buffer.prototype.readIntLE = function readIntLE(e, t, r) {
          ;(e >>>= 0), (t >>>= 0), r || checkOffset(e, t, this.length)
          let n = this[e],
            a = 1,
            o = 0
          for (; ++o < t && (a *= 256); ) n += this[e + o] * a
          return (a *= 128), n >= a && (n -= Math.pow(2, 8 * t)), n
        }),
        (Buffer.prototype.readIntBE = function readIntBE(e, t, r) {
          ;(e >>>= 0), (t >>>= 0), r || checkOffset(e, t, this.length)
          let n = t,
            a = 1,
            o = this[e + --n]
          for (; n > 0 && (a *= 256); ) o += this[e + --n] * a
          return (a *= 128), o >= a && (o -= Math.pow(2, 8 * t)), o
        }),
        (Buffer.prototype.readInt8 = function readInt8(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          )
        }),
        (Buffer.prototype.readInt16LE = function readInt16LE(e, t) {
          ;(e >>>= 0), t || checkOffset(e, 2, this.length)
          const r = this[e] | (this[e + 1] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (Buffer.prototype.readInt16BE = function readInt16BE(e, t) {
          ;(e >>>= 0), t || checkOffset(e, 2, this.length)
          const r = this[e + 1] | (this[e] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (Buffer.prototype.readInt32LE = function readInt32LE(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          )
        }),
        (Buffer.prototype.readInt32BE = function readInt32BE(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          )
        }),
        (Buffer.prototype.readBigInt64LE = defineBigIntMethod(
          function readBigInt64LE(e) {
            validateNumber((e >>>= 0), 'offset')
            const t = this[e],
              r = this[e + 7]
            ;(void 0 !== t && void 0 !== r) || boundsError(e, this.length - 8)
            const n =
              this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24)
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(
                t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
              )
            )
          },
        )),
        (Buffer.prototype.readBigInt64BE = defineBigIntMethod(
          function readBigInt64BE(e) {
            validateNumber((e >>>= 0), 'offset')
            const t = this[e],
              r = this[e + 7]
            ;(void 0 !== t && void 0 !== r) || boundsError(e, this.length - 8)
            const n =
              (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]
            return (
              (BigInt(n) << BigInt(32)) +
              BigInt(
                this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r,
              )
            )
          },
        )),
        (Buffer.prototype.readFloatLE = function readFloatLE(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 4, this.length),
            a.read(this, e, !0, 23, 4)
          )
        }),
        (Buffer.prototype.readFloatBE = function readFloatBE(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 4, this.length),
            a.read(this, e, !1, 23, 4)
          )
        }),
        (Buffer.prototype.readDoubleLE = function readDoubleLE(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 8, this.length),
            a.read(this, e, !0, 52, 8)
          )
        }),
        (Buffer.prototype.readDoubleBE = function readDoubleBE(e, t) {
          return (
            (e >>>= 0),
            t || checkOffset(e, 8, this.length),
            a.read(this, e, !1, 52, 8)
          )
        }),
        (Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE =
          function writeUIntLE(e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              checkInt(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
            }
            let a = 1,
              o = 0
            for (this[t] = 255 & e; ++o < r && (a *= 256); )
              this[t + o] = (e / a) & 255
            return t + r
          }),
        (Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE =
          function writeUIntBE(e, t, r, n) {
            if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
              checkInt(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
            }
            let a = r - 1,
              o = 1
            for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); )
              this[t + a] = (e / o) & 255
            return t + r
          }),
        (Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 =
          function writeUInt8(e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || checkInt(this, e, t, 1, 255, 0),
              (this[t] = 255 & e),
              t + 1
            )
          }),
        (Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE =
          function writeUInt16LE(e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || checkInt(this, e, t, 2, 65535, 0),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            )
          }),
        (Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE =
          function writeUInt16BE(e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || checkInt(this, e, t, 2, 65535, 0),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            )
          }),
        (Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE =
          function writeUInt32LE(e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || checkInt(this, e, t, 4, 4294967295, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            )
          }),
        (Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE =
          function writeUInt32BE(e, t, r) {
            return (
              (e = +e),
              (t >>>= 0),
              r || checkInt(this, e, t, 4, 4294967295, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            )
          }),
        (Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(
          function writeBigUInt64LE(e, t = 0) {
            return wrtBigUInt64LE(
              this,
              e,
              t,
              BigInt(0),
              BigInt('0xffffffffffffffff'),
            )
          },
        )),
        (Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(
          function writeBigUInt64BE(e, t = 0) {
            return wrtBigUInt64BE(
              this,
              e,
              t,
              BigInt(0),
              BigInt('0xffffffffffffffff'),
            )
          },
        )),
        (Buffer.prototype.writeIntLE = function writeIntLE(e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            const n = Math.pow(2, 8 * r - 1)
            checkInt(this, e, t, r, n - 1, -n)
          }
          let a = 0,
            o = 1,
            s = 0
          for (this[t] = 255 & e; ++a < r && (o *= 256); )
            e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1),
              (this[t + a] = (((e / o) | 0) - s) & 255)
          return t + r
        }),
        (Buffer.prototype.writeIntBE = function writeIntBE(e, t, r, n) {
          if (((e = +e), (t >>>= 0), !n)) {
            const n = Math.pow(2, 8 * r - 1)
            checkInt(this, e, t, r, n - 1, -n)
          }
          let a = r - 1,
            o = 1,
            s = 0
          for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); )
            e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1),
              (this[t + a] = (((e / o) | 0) - s) & 255)
          return t + r
        }),
        (Buffer.prototype.writeInt8 = function writeInt8(e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || checkInt(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          )
        }),
        (Buffer.prototype.writeInt16LE = function writeInt16LE(e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || checkInt(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          )
        }),
        (Buffer.prototype.writeInt16BE = function writeInt16BE(e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || checkInt(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          )
        }),
        (Buffer.prototype.writeInt32LE = function writeInt32LE(e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || checkInt(this, e, t, 4, 2147483647, -2147483648),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          )
        }),
        (Buffer.prototype.writeInt32BE = function writeInt32BE(e, t, r) {
          return (
            (e = +e),
            (t >>>= 0),
            r || checkInt(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          )
        }),
        (Buffer.prototype.writeBigInt64LE = defineBigIntMethod(
          function writeBigInt64LE(e, t = 0) {
            return wrtBigUInt64LE(
              this,
              e,
              t,
              -BigInt('0x8000000000000000'),
              BigInt('0x7fffffffffffffff'),
            )
          },
        )),
        (Buffer.prototype.writeBigInt64BE = defineBigIntMethod(
          function writeBigInt64BE(e, t = 0) {
            return wrtBigUInt64BE(
              this,
              e,
              t,
              -BigInt('0x8000000000000000'),
              BigInt('0x7fffffffffffffff'),
            )
          },
        )),
        (Buffer.prototype.writeFloatLE = function writeFloatLE(e, t, r) {
          return writeFloat(this, e, t, !0, r)
        }),
        (Buffer.prototype.writeFloatBE = function writeFloatBE(e, t, r) {
          return writeFloat(this, e, t, !1, r)
        }),
        (Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, t, r) {
          return writeDouble(this, e, t, !0, r)
        }),
        (Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, t, r) {
          return writeDouble(this, e, t, !1, r)
        }),
        (Buffer.prototype.copy = function copy(e, t, r, n) {
          if (!Buffer.isBuffer(e))
            throw new TypeError('argument should be a Buffer')
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0
          if (0 === e.length || 0 === this.length) return 0
          if (t < 0) throw new RangeError('targetStart out of bounds')
          if (r < 0 || r >= this.length)
            throw new RangeError('Index out of range')
          if (n < 0) throw new RangeError('sourceEnd out of bounds')
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r)
          const a = n - r
          return (
            this === e && 'function' == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, r, n)
              : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
            a
          )
        }),
        (Buffer.prototype.fill = function fill(e, t, r, n) {
          if ('string' == typeof e) {
            if (
              ('string' == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : 'string' == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && 'string' != typeof n)
            )
              throw new TypeError('encoding must be a string')
            if ('string' == typeof n && !Buffer.isEncoding(n))
              throw new TypeError('Unknown encoding: ' + n)
            if (1 === e.length) {
              const t = e.charCodeAt(0)
              ;(('utf8' === n && t < 128) || 'latin1' === n) && (e = t)
            }
          } else
            'number' == typeof e
              ? (e &= 255)
              : 'boolean' == typeof e && (e = Number(e))
          if (t < 0 || this.length < t || this.length < r)
            throw new RangeError('Out of range index')
          if (r <= t) return this
          let a
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            'number' == typeof e)
          )
            for (a = t; a < r; ++a) this[a] = e
          else {
            const o = Buffer.isBuffer(e) ? e : Buffer.from(e, n),
              s = o.length
            if (0 === s)
              throw new TypeError(
                'The value "' + e + '" is invalid for argument "value"',
              )
            for (a = 0; a < r - t; ++a) this[a + t] = o[a % s]
          }
          return this
        })
      const i = {}
      function E(e, t, r) {
        i[e] = class NodeError extends r {
          constructor() {
            super(),
              Object.defineProperty(this, 'message', {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name
          }
          get code() {
            return e
          }
          set code(e) {
            Object.defineProperty(this, 'code', {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            })
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`
          }
        }
      }
      function addNumericalSeparator(e) {
        let t = '',
          r = e.length
        const n = '-' === e[0] ? 1 : 0
        for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`
        return `${e.slice(0, r)}${t}`
      }
      function checkIntBI(e, t, r, n, a, o) {
        if (e > r || e < t) {
          const n = 'bigint' == typeof t ? 'n' : ''
          let a
          throw (
            ((a =
              o > 3
                ? 0 === t || t === BigInt(0)
                  ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}`
                  : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${
                      8 * (o + 1) - 1
                    }${n}`
                : `>= ${t}${n} and <= ${r}${n}`),
            new i.ERR_OUT_OF_RANGE('value', a, e))
          )
        }
        !(function checkBounds(e, t, r) {
          validateNumber(t, 'offset'),
            (void 0 !== e[t] && void 0 !== e[t + r]) ||
              boundsError(t, e.length - (r + 1))
        })(n, a, o)
      }
      function validateNumber(e, t) {
        if ('number' != typeof e)
          throw new i.ERR_INVALID_ARG_TYPE(t, 'number', e)
      }
      function boundsError(e, t, r) {
        if (Math.floor(e) !== e)
          throw (
            (validateNumber(e, r),
            new i.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', e))
          )
        if (t < 0) throw new i.ERR_BUFFER_OUT_OF_BOUNDS()
        throw new i.ERR_OUT_OF_RANGE(
          r || 'offset',
          `>= ${r ? 1 : 0} and <= ${t}`,
          e,
        )
      }
      E(
        'ERR_BUFFER_OUT_OF_BOUNDS',
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : 'Attempt to access memory outside buffer bounds'
        },
        RangeError,
      ),
        E(
          'ERR_INVALID_ARG_TYPE',
          function (e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`
          },
          TypeError,
        ),
        E(
          'ERR_OUT_OF_RANGE',
          function (e, t, r) {
            let n = `The value of "${e}" is out of range.`,
              a = r
            return (
              Number.isInteger(r) && Math.abs(r) > 2 ** 32
                ? (a = addNumericalSeparator(String(r)))
                : 'bigint' == typeof r &&
                  ((a = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (a = addNumericalSeparator(a)),
                  (a += 'n')),
              (n += ` It must be ${t}. Received ${a}`),
              n
            )
          },
          RangeError,
        )
      const c = /[^+/0-9A-Za-z-_]/g
      function utf8ToBytes(e, t) {
        let r
        t = t || 1 / 0
        const n = e.length
        let a = null
        const o = []
        for (let s = 0; s < n; ++s) {
          if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
            if (!a) {
              if (r > 56319) {
                ;(t -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              if (s + 1 === n) {
                ;(t -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              a = r
              continue
            }
            if (r < 56320) {
              ;(t -= 3) > -1 && o.push(239, 191, 189), (a = r)
              continue
            }
            r = 65536 + (((a - 55296) << 10) | (r - 56320))
          } else a && (t -= 3) > -1 && o.push(239, 191, 189)
          if (((a = null), r < 128)) {
            if ((t -= 1) < 0) break
            o.push(r)
          } else if (r < 2048) {
            if ((t -= 2) < 0) break
            o.push((r >> 6) | 192, (63 & r) | 128)
          } else if (r < 65536) {
            if ((t -= 3) < 0) break
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
          } else {
            if (!(r < 1114112)) throw new Error('Invalid code point')
            if ((t -= 4) < 0) break
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128,
            )
          }
        }
        return o
      }
      function base64ToBytes(e) {
        return n.toByteArray(
          (function base64clean(e) {
            if ((e = (e = e.split('=')[0]).trim().replace(c, '')).length < 2)
              return ''
            for (; e.length % 4 != 0; ) e += '='
            return e
          })(e),
        )
      }
      function blitBuffer(e, t, r, n) {
        let a
        for (a = 0; a < n && !(a + r >= t.length || a >= e.length); ++a)
          t[a + r] = e[a]
        return a
      }
      function isInstance(e, t) {
        return (
          e instanceof t ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === t.name)
        )
      }
      function numberIsNaN(e) {
        return e != e
      }
      const u = (function () {
        const e = '0123456789abcdef',
          t = new Array(256)
        for (let r = 0; r < 16; ++r) {
          const n = 16 * r
          for (let a = 0; a < 16; ++a) t[n + a] = e[r] + e[a]
        }
        return t
      })()
      function defineBigIntMethod(e) {
        return 'undefined' == typeof BigInt ? BufferBigIntNotDefined : e
      }
      function BufferBigIntNotDefined() {
        throw new Error('BigInt not supported')
      }
    },
    919: function (e, t, r) {
      var n = r(287).Buffer
      function isSpecificValue(e) {
        return e instanceof n || e instanceof Date || e instanceof RegExp
      }
      function cloneSpecificValue(e) {
        if (e instanceof n) {
          var t = n.alloc ? n.alloc(e.length) : new n(e.length)
          return e.copy(t), t
        }
        if (e instanceof Date) return new Date(e.getTime())
        if (e instanceof RegExp) return new RegExp(e)
        throw new Error('Unexpected situation')
      }
      function deepCloneArray(e) {
        var t = []
        return (
          e.forEach(function (e, r) {
            'object' == typeof e && null !== e
              ? Array.isArray(e)
                ? (t[r] = deepCloneArray(e))
                : isSpecificValue(e)
                ? (t[r] = cloneSpecificValue(e))
                : (t[r] = a({}, e))
              : (t[r] = e)
          }),
          t
        )
      }
      function safeGetProperty(e, t) {
        return '__proto__' === t ? void 0 : e[t]
      }
      var a = (e.exports = function () {
        if (arguments.length < 1 || 'object' != typeof arguments[0]) return !1
        if (arguments.length < 2) return arguments[0]
        var e,
          t,
          r = arguments[0]
        return (
          Array.prototype.slice.call(arguments, 1).forEach(function (n) {
            'object' != typeof n ||
              null === n ||
              Array.isArray(n) ||
              Object.keys(n).forEach(function (o) {
                return (
                  (t = safeGetProperty(r, o)),
                  (e = safeGetProperty(n, o)) === r
                    ? void 0
                    : 'object' != typeof e || null === e
                    ? void (r[o] = e)
                    : Array.isArray(e)
                    ? void (r[o] = deepCloneArray(e))
                    : isSpecificValue(e)
                    ? void (r[o] = cloneSpecificValue(e))
                    : 'object' != typeof t || null === t || Array.isArray(t)
                    ? void (r[o] = a({}, e))
                    : void (r[o] = a(t, e))
                )
              })
          }),
          r
        )
      })
    },
    7: function (e) {
      var t,
        r = 'object' == typeof Reflect ? Reflect : null,
        n =
          r && 'function' == typeof r.apply
            ? r.apply
            : function ReflectApply(e, t, r) {
                return Function.prototype.apply.call(e, t, r)
              }
      t =
        r && 'function' == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function ReflectOwnKeys(e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e),
              )
            }
          : function ReflectOwnKeys(e) {
              return Object.getOwnPropertyNames(e)
            }
      var a =
        Number.isNaN ||
        function NumberIsNaN(e) {
          return e != e
        }
      function EventEmitter() {
        EventEmitter.init.call(this)
      }
      ;(e.exports = EventEmitter),
        (e.exports.once = function once(e, t) {
          return new Promise(function (r, n) {
            function errorListener(r) {
              e.removeListener(t, resolver), n(r)
            }
            function resolver() {
              'function' == typeof e.removeListener &&
                e.removeListener('error', errorListener),
                r([].slice.call(arguments))
            }
            eventTargetAgnosticAddListener(e, t, resolver, { once: !0 }),
              'error' !== t &&
                (function addErrorHandlerIfEventEmitter(e, t, r) {
                  'function' == typeof e.on &&
                    eventTargetAgnosticAddListener(e, 'error', t, r)
                })(e, errorListener, { once: !0 })
          })
        }),
        (EventEmitter.EventEmitter = EventEmitter),
        (EventEmitter.prototype._events = void 0),
        (EventEmitter.prototype._eventsCount = 0),
        (EventEmitter.prototype._maxListeners = void 0)
      var o = 10
      function checkListener(e) {
        if ('function' != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e,
          )
      }
      function _getMaxListeners(e) {
        return void 0 === e._maxListeners
          ? EventEmitter.defaultMaxListeners
          : e._maxListeners
      }
      function _addListener(e, t, r, n) {
        var a, o, s
        if (
          (checkListener(r),
          void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (e.emit('newListener', t, r.listener ? r.listener : r),
                (o = e._events)),
              (s = o[t])),
          void 0 === s)
        )
          (s = o[t] = r), ++e._eventsCount
        else if (
          ('function' == typeof s
            ? (s = o[t] = n ? [r, s] : [s, r])
            : n
            ? s.unshift(r)
            : s.push(r),
          (a = _getMaxListeners(e)) > 0 && s.length > a && !s.warned)
        ) {
          s.warned = !0
          var l = new Error(
            'Possible EventEmitter memory leak detected. ' +
              s.length +
              ' ' +
              String(t) +
              ' listeners added. Use emitter.setMaxListeners() to increase limit',
          )
          ;(l.name = 'MaxListenersExceededWarning'),
            (l.emitter = e),
            (l.type = t),
            (l.count = s.length),
            (function ProcessEmitWarning(e) {
              console && console.warn && console.warn(e)
            })(l)
        }
        return e
      }
      function onceWrapper() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          )
      }
      function _onceWrap(e, t, r) {
        var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
          a = onceWrapper.bind(n)
        return (a.listener = r), (n.wrapFn = a), a
      }
      function _listeners(e, t, r) {
        var n = e._events
        if (void 0 === n) return []
        var a = n[t]
        return void 0 === a
          ? []
          : 'function' == typeof a
          ? r
            ? [a.listener || a]
            : [a]
          : r
          ? (function unwrapListeners(e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                t[r] = e[r].listener || e[r]
              return t
            })(a)
          : arrayClone(a, a.length)
      }
      function listenerCount(e) {
        var t = this._events
        if (void 0 !== t) {
          var r = t[e]
          if ('function' == typeof r) return 1
          if (void 0 !== r) return r.length
        }
        return 0
      }
      function arrayClone(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n]
        return r
      }
      function eventTargetAgnosticAddListener(e, t, r, n) {
        if ('function' == typeof e.on) n.once ? e.once(t, r) : e.on(t, r)
        else {
          if ('function' != typeof e.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof e,
            )
          e.addEventListener(t, function wrapListener(a) {
            n.once && e.removeEventListener(t, wrapListener), r(a)
          })
        }
      }
      Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
        enumerable: !0,
        get: function () {
          return o
        },
        set: function (e) {
          if ('number' != typeof e || e < 0 || a(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                '.',
            )
          o = e
        },
      }),
        (EventEmitter.init = function () {
          ;(void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0)
        }),
        (EventEmitter.prototype.setMaxListeners = function setMaxListeners(e) {
          if ('number' != typeof e || e < 0 || a(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                '.',
            )
          return (this._maxListeners = e), this
        }),
        (EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
          return _getMaxListeners(this)
        }),
        (EventEmitter.prototype.emit = function emit(e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r])
          var a = 'error' === e,
            o = this._events
          if (void 0 !== o) a = a && void 0 === o.error
          else if (!a) return !1
          if (a) {
            var s
            if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s
            var l = new Error(
              'Unhandled error.' + (s ? ' (' + s.message + ')' : ''),
            )
            throw ((l.context = s), l)
          }
          var i = o[e]
          if (void 0 === i) return !1
          if ('function' == typeof i) n(i, this, t)
          else {
            var c = i.length,
              u = arrayClone(i, c)
            for (r = 0; r < c; ++r) n(u[r], this, t)
          }
          return !0
        }),
        (EventEmitter.prototype.addListener = function addListener(e, t) {
          return _addListener(this, e, t, !1)
        }),
        (EventEmitter.prototype.on = EventEmitter.prototype.addListener),
        (EventEmitter.prototype.prependListener = function prependListener(
          e,
          t,
        ) {
          return _addListener(this, e, t, !0)
        }),
        (EventEmitter.prototype.once = function once(e, t) {
          return checkListener(t), this.on(e, _onceWrap(this, e, t)), this
        }),
        (EventEmitter.prototype.prependOnceListener =
          function prependOnceListener(e, t) {
            return (
              checkListener(t),
              this.prependListener(e, _onceWrap(this, e, t)),
              this
            )
          }),
        (EventEmitter.prototype.removeListener = function removeListener(e, t) {
          var r, n, a, o, s
          if ((checkListener(t), void 0 === (n = this._events))) return this
          if (void 0 === (r = n[e])) return this
          if (r === t || r.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[e],
                n.removeListener &&
                  this.emit('removeListener', e, r.listener || t))
          else if ('function' != typeof r) {
            for (a = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === t || r[o].listener === t) {
                ;(s = r[o].listener), (a = o)
                break
              }
            if (a < 0) return this
            0 === a
              ? r.shift()
              : (function spliceOne(e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1]
                  e.pop()
                })(r, a),
              1 === r.length && (n[e] = r[0]),
              void 0 !== n.removeListener &&
                this.emit('removeListener', e, s || t)
          }
          return this
        }),
        (EventEmitter.prototype.off = EventEmitter.prototype.removeListener),
        (EventEmitter.prototype.removeAllListeners =
          function removeAllListeners(e) {
            var t, r, n
            if (void 0 === (r = this._events)) return this
            if (void 0 === r.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== r[e] &&
                    (0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete r[e]),
                this
              )
            if (0 === arguments.length) {
              var a,
                o = Object.keys(r)
              for (n = 0; n < o.length; ++n)
                'removeListener' !== (a = o[n]) && this.removeAllListeners(a)
              return (
                this.removeAllListeners('removeListener'),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
              )
            }
            if ('function' == typeof (t = r[e])) this.removeListener(e, t)
            else if (void 0 !== t)
              for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n])
            return this
          }),
        (EventEmitter.prototype.listeners = function listeners(e) {
          return _listeners(this, e, !0)
        }),
        (EventEmitter.prototype.rawListeners = function rawListeners(e) {
          return _listeners(this, e, !1)
        }),
        (EventEmitter.listenerCount = function (e, t) {
          return 'function' == typeof e.listenerCount
            ? e.listenerCount(t)
            : listenerCount.call(e, t)
        }),
        (EventEmitter.prototype.listenerCount = listenerCount),
        (EventEmitter.prototype.eventNames = function eventNames() {
          return this._eventsCount > 0 ? t(this._events) : []
        })
    },
    698: function (e) {
      'function' == typeof Object.create
        ? (e.exports = function inherits(e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })))
          })
        : (e.exports = function inherits(e, t) {
            if (t) {
              e.super_ = t
              var TempCtor = function () {}
              ;(TempCtor.prototype = t.prototype),
                (e.prototype = new TempCtor()),
                (e.prototype.constructor = e)
            }
          })
    },
    606: function (e) {
      var t,
        r,
        n = (e.exports = {})
      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined')
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined')
      }
      function runTimeout(e) {
        if (t === setTimeout) return setTimeout(e, 0)
        if ((t === defaultSetTimout || !t) && setTimeout)
          return (t = setTimeout), setTimeout(e, 0)
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }
      !(function () {
        try {
          t = 'function' == typeof setTimeout ? setTimeout : defaultSetTimout
        } catch (e) {
          t = defaultSetTimout
        }
        try {
          r =
            'function' == typeof clearTimeout
              ? clearTimeout
              : defaultClearTimeout
        } catch (e) {
          r = defaultClearTimeout
        }
      })()
      var a,
        o = [],
        s = !1,
        l = -1
      function cleanUpNextTick() {
        s &&
          a &&
          ((s = !1),
          a.length ? (o = a.concat(o)) : (l = -1),
          o.length && drainQueue())
      }
      function drainQueue() {
        if (!s) {
          var e = runTimeout(cleanUpNextTick)
          s = !0
          for (var t = o.length; t; ) {
            for (a = o, o = []; ++l < t; ) a && a[l].run()
            ;(l = -1), (t = o.length)
          }
          ;(a = null),
            (s = !1),
            (function runClearTimeout(e) {
              if (r === clearTimeout) return clearTimeout(e)
              if ((r === defaultClearTimeout || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e)
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            })(e)
        }
      }
      function Item(e, t) {
        ;(this.fun = e), (this.array = t)
      }
      function noop() {}
      ;(n.nextTick = function (e) {
        var t = new Array(arguments.length - 1)
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
        o.push(new Item(e, t)), 1 !== o.length || s || runTimeout(drainQueue)
      }),
        (Item.prototype.run = function () {
          this.fun.apply(null, this.array)
        }),
        (n.title = 'browser'),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ''),
        (n.versions = {}),
        (n.on = noop),
        (n.addListener = noop),
        (n.once = noop),
        (n.off = noop),
        (n.removeListener = noop),
        (n.removeAllListeners = noop),
        (n.emit = noop),
        (n.prependListener = noop),
        (n.prependOnceListener = noop),
        (n.listeners = function (e) {
          return []
        }),
        (n.binding = function (e) {
          throw new Error('process.binding is not supported')
        }),
        (n.cwd = function () {
          return '/'
        }),
        (n.chdir = function (e) {
          throw new Error('process.chdir is not supported')
        }),
        (n.umask = function () {
          return 0
        })
    },
    209: function (e, t, r) {
      var n = r(606),
        a = 65536,
        o = 4294967295
      var s = r(861).Buffer,
        l = r.g.crypto || r.g.msCrypto
      l && l.getRandomValues
        ? (e.exports = function randomBytes(e, t) {
            if (e > o) throw new RangeError('requested too many random bytes')
            var r = s.allocUnsafe(e)
            if (e > 0)
              if (e > a)
                for (var i = 0; i < e; i += a)
                  l.getRandomValues(r.slice(i, i + a))
              else l.getRandomValues(r)
            if ('function' == typeof t)
              return n.nextTick(function () {
                t(null, r)
              })
            return r
          })
        : (e.exports = function oldBrowser() {
            throw new Error(
              'Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11',
            )
          })
    },
    48: function (e) {
      var t = {}
      function createErrorType(e, r, n) {
        n || (n = Error)
        var a = (function (e) {
          function NodeError(t, n, a) {
            return (
              e.call(
                this,
                (function getMessage(e, t, n) {
                  return 'string' == typeof r ? r : r(e, t, n)
                })(t, n, a),
              ) || this
            )
          }
          return (
            (function _inheritsLoose(e, t) {
              ;(e.prototype = Object.create(t.prototype)),
                (e.prototype.constructor = e),
                (e.__proto__ = t)
            })(NodeError, e),
            NodeError
          )
        })(n)
        ;(a.prototype.name = n.name), (a.prototype.code = e), (t[e] = a)
      }
      function oneOf(e, t) {
        if (Array.isArray(e)) {
          var r = e.length
          return (
            (e = e.map(function (e) {
              return String(e)
            })),
            r > 2
              ? 'one of '
                  .concat(t, ' ')
                  .concat(e.slice(0, r - 1).join(', '), ', or ') + e[r - 1]
              : 2 === r
              ? 'one of '.concat(t, ' ').concat(e[0], ' or ').concat(e[1])
              : 'of '.concat(t, ' ').concat(e[0])
          )
        }
        return 'of '.concat(t, ' ').concat(String(e))
      }
      createErrorType(
        'ERR_INVALID_OPT_VALUE',
        function (e, t) {
          return 'The value "' + t + '" is invalid for option "' + e + '"'
        },
        TypeError,
      ),
        createErrorType(
          'ERR_INVALID_ARG_TYPE',
          function (e, t, r) {
            var n, a
            if (
              ('string' == typeof t &&
              (function startsWith(e, t, r) {
                return e.substr(!r || r < 0 ? 0 : +r, t.length) === t
              })(t, 'not ')
                ? ((n = 'must not be'), (t = t.replace(/^not /, '')))
                : (n = 'must be'),
              (function endsWith(e, t, r) {
                return (
                  (void 0 === r || r > e.length) && (r = e.length),
                  e.substring(r - t.length, r) === t
                )
              })(e, ' argument'))
            )
              a = 'The '.concat(e, ' ').concat(n, ' ').concat(oneOf(t, 'type'))
            else {
              var o = (function includes(e, t, r) {
                return (
                  'number' != typeof r && (r = 0),
                  !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
                )
              })(e, '.')
                ? 'property'
                : 'argument'
              a = 'The "'
                .concat(e, '" ')
                .concat(o, ' ')
                .concat(n, ' ')
                .concat(oneOf(t, 'type'))
            }
            return (a += '. Received type '.concat(typeof r))
          },
          TypeError,
        ),
        createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF'),
        createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (e) {
          return 'The ' + e + ' method is not implemented'
        }),
        createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close'),
        createErrorType('ERR_STREAM_DESTROYED', function (e) {
          return 'Cannot call ' + e + ' after a stream was destroyed'
        }),
        createErrorType(
          'ERR_MULTIPLE_CALLBACK',
          'Callback called multiple times',
        ),
        createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable'),
        createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
        createErrorType(
          'ERR_STREAM_NULL_VALUES',
          'May not write null values to stream',
          TypeError,
        ),
        createErrorType(
          'ERR_UNKNOWN_ENCODING',
          function (e) {
            return 'Unknown encoding: ' + e
          },
          TypeError,
        ),
        createErrorType(
          'ERR_STREAM_UNSHIFT_AFTER_END_EVENT',
          'stream.unshift() after end event',
        ),
        (e.exports.F = t)
    },
    382: function (e, t, r) {
      var n = r(606),
        a =
          Object.keys ||
          function (e) {
            var t = []
            for (var r in e) t.push(r)
            return t
          }
      e.exports = Duplex
      var o = r(412),
        s = r(708)
      r(698)(Duplex, o)
      for (var l = a(s.prototype), i = 0; i < l.length; i++) {
        var c = l[i]
        Duplex.prototype[c] || (Duplex.prototype[c] = s.prototype[c])
      }
      function Duplex(e) {
        if (!(this instanceof Duplex)) return new Duplex(e)
        o.call(this, e),
          s.call(this, e),
          (this.allowHalfOpen = !0),
          e &&
            (!1 === e.readable && (this.readable = !1),
            !1 === e.writable && (this.writable = !1),
            !1 === e.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once('end', onend)))
      }
      function onend() {
        this._writableState.ended || n.nextTick(onEndNT, this)
      }
      function onEndNT(e) {
        e.end()
      }
      Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function get() {
          return this._writableState.highWaterMark
        },
      }),
        Object.defineProperty(Duplex.prototype, 'writableBuffer', {
          enumerable: !1,
          get: function get() {
            return this._writableState && this._writableState.getBuffer()
          },
        }),
        Object.defineProperty(Duplex.prototype, 'writableLength', {
          enumerable: !1,
          get: function get() {
            return this._writableState.length
          },
        }),
        Object.defineProperty(Duplex.prototype, 'destroyed', {
          enumerable: !1,
          get: function get() {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            )
          },
          set: function set(e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e))
          },
        })
    },
    600: function (e, t, r) {
      e.exports = PassThrough
      var n = r(610)
      function PassThrough(e) {
        if (!(this instanceof PassThrough)) return new PassThrough(e)
        n.call(this, e)
      }
      r(698)(PassThrough, n),
        (PassThrough.prototype._transform = function (e, t, r) {
          r(null, e)
        })
    },
    412: function (e, t, r) {
      var n,
        a = r(606)
      ;(e.exports = Readable), (Readable.ReadableState = ReadableState)
      r(7).EventEmitter
      var o = function EElistenerCount(e, t) {
          return e.listeners(t).length
        },
        s = r(345),
        l = r(287).Buffer,
        i =
          (void 0 !== r.g
            ? r.g
            : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof self
            ? self
            : {}
          ).Uint8Array || function () {}
      var c,
        u = r(838)
      c = u && u.debuglog ? u.debuglog('stream') : function debug() {}
      var d,
        p,
        m,
        f = r(726),
        h = r(896),
        g = r(291).getHighWaterMark,
        y = r(48).F,
        S = y.ERR_INVALID_ARG_TYPE,
        _ = y.ERR_STREAM_PUSH_AFTER_EOF,
        v = y.ERR_METHOD_NOT_IMPLEMENTED,
        b = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT
      r(698)(Readable, s)
      var w = h.errorOrDestroy,
        C = ['error', 'close', 'destroy', 'pause', 'resume']
      function ReadableState(e, t, a) {
        ;(n = n || r(382)),
          (e = e || {}),
          'boolean' != typeof a && (a = t instanceof n),
          (this.objectMode = !!e.objectMode),
          a && (this.objectMode = this.objectMode || !!e.readableObjectMode),
          (this.highWaterMark = g(this, e, 'readableHighWaterMark', a)),
          (this.buffer = new f()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || 'utf8'),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (d || (d = r(141).I),
            (this.decoder = new d(e.encoding)),
            (this.encoding = e.encoding))
      }
      function Readable(e) {
        if (((n = n || r(382)), !(this instanceof Readable)))
          return new Readable(e)
        var t = this instanceof n
        ;(this._readableState = new ReadableState(e, this, t)),
          (this.readable = !0),
          e &&
            ('function' == typeof e.read && (this._read = e.read),
            'function' == typeof e.destroy && (this._destroy = e.destroy)),
          s.call(this)
      }
      function readableAddChunk(e, t, r, n, a) {
        c('readableAddChunk', t)
        var o,
          s = e._readableState
        if (null === t)
          (s.reading = !1),
            (function onEofChunk(e, t) {
              if ((c('onEofChunk'), t.ended)) return
              if (t.decoder) {
                var r = t.decoder.end()
                r &&
                  r.length &&
                  (t.buffer.push(r), (t.length += t.objectMode ? 1 : r.length))
              }
              ;(t.ended = !0),
                t.sync
                  ? emitReadable(e)
                  : ((t.needReadable = !1),
                    t.emittedReadable ||
                      ((t.emittedReadable = !0), emitReadable_(e)))
            })(e, s)
        else if (
          (a ||
            (o = (function chunkInvalid(e, t) {
              var r
              ;(function _isUint8Array(e) {
                return l.isBuffer(e) || e instanceof i
              })(t) ||
                'string' == typeof t ||
                void 0 === t ||
                e.objectMode ||
                (r = new S('chunk', ['string', 'Buffer', 'Uint8Array'], t))
              return r
            })(s, t)),
          o)
        )
          w(e, o)
        else if (s.objectMode || (t && t.length > 0))
          if (
            ('string' == typeof t ||
              s.objectMode ||
              Object.getPrototypeOf(t) === l.prototype ||
              (t = (function _uint8ArrayToBuffer(e) {
                return l.from(e)
              })(t)),
            n)
          )
            s.endEmitted ? w(e, new b()) : addChunk(e, s, t, !0)
          else if (s.ended) w(e, new _())
          else {
            if (s.destroyed) return !1
            ;(s.reading = !1),
              s.decoder && !r
                ? ((t = s.decoder.write(t)),
                  s.objectMode || 0 !== t.length
                    ? addChunk(e, s, t, !1)
                    : maybeReadMore(e, s))
                : addChunk(e, s, t, !1)
          }
        else n || ((s.reading = !1), maybeReadMore(e, s))
        return !s.ended && (s.length < s.highWaterMark || 0 === s.length)
      }
      function addChunk(e, t, r, n) {
        t.flowing && 0 === t.length && !t.sync
          ? ((t.awaitDrain = 0), e.emit('data', r))
          : ((t.length += t.objectMode ? 1 : r.length),
            n ? t.buffer.unshift(r) : t.buffer.push(r),
            t.needReadable && emitReadable(e)),
          maybeReadMore(e, t)
      }
      Object.defineProperty(Readable.prototype, 'destroyed', {
        enumerable: !1,
        get: function get() {
          return void 0 !== this._readableState && this._readableState.destroyed
        },
        set: function set(e) {
          this._readableState && (this._readableState.destroyed = e)
        },
      }),
        (Readable.prototype.destroy = h.destroy),
        (Readable.prototype._undestroy = h.undestroy),
        (Readable.prototype._destroy = function (e, t) {
          t(e)
        }),
        (Readable.prototype.push = function (e, t) {
          var r,
            n = this._readableState
          return (
            n.objectMode
              ? (r = !0)
              : 'string' == typeof e &&
                ((t = t || n.defaultEncoding) !== n.encoding &&
                  ((e = l.from(e, t)), (t = '')),
                (r = !0)),
            readableAddChunk(this, e, t, !1, r)
          )
        }),
        (Readable.prototype.unshift = function (e) {
          return readableAddChunk(this, e, null, !0, !1)
        }),
        (Readable.prototype.isPaused = function () {
          return !1 === this._readableState.flowing
        }),
        (Readable.prototype.setEncoding = function (e) {
          d || (d = r(141).I)
          var t = new d(e)
          ;(this._readableState.decoder = t),
            (this._readableState.encoding =
              this._readableState.decoder.encoding)
          for (var n = this._readableState.buffer.head, a = ''; null !== n; )
            (a += t.write(n.data)), (n = n.next)
          return (
            this._readableState.buffer.clear(),
            '' !== a && this._readableState.buffer.push(a),
            (this._readableState.length = a.length),
            this
          )
        })
      var x = 1073741824
      function howMuchToRead(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function computeNewHighWaterMark(e) {
                return (
                  e >= x
                    ? (e = x)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                )
              })(e)),
            e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0))
      }
      function emitReadable(e) {
        var t = e._readableState
        c('emitReadable', t.needReadable, t.emittedReadable),
          (t.needReadable = !1),
          t.emittedReadable ||
            (c('emitReadable', t.flowing),
            (t.emittedReadable = !0),
            a.nextTick(emitReadable_, e))
      }
      function emitReadable_(e) {
        var t = e._readableState
        c('emitReadable_', t.destroyed, t.length, t.ended),
          t.destroyed ||
            (!t.length && !t.ended) ||
            (e.emit('readable'), (t.emittedReadable = !1)),
          (t.needReadable =
            !t.flowing && !t.ended && t.length <= t.highWaterMark),
          flow(e)
      }
      function maybeReadMore(e, t) {
        t.readingMore ||
          ((t.readingMore = !0), a.nextTick(maybeReadMore_, e, t))
      }
      function maybeReadMore_(e, t) {
        for (
          ;
          !t.reading &&
          !t.ended &&
          (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

        ) {
          var r = t.length
          if ((c('maybeReadMore read 0'), e.read(0), r === t.length)) break
        }
        t.readingMore = !1
      }
      function updateReadableListening(e) {
        var t = e._readableState
        ;(t.readableListening = e.listenerCount('readable') > 0),
          t.resumeScheduled && !t.paused
            ? (t.flowing = !0)
            : e.listenerCount('data') > 0 && e.resume()
      }
      function nReadingNextTick(e) {
        c('readable nexttick read 0'), e.read(0)
      }
      function resume_(e, t) {
        c('resume', t.reading),
          t.reading || e.read(0),
          (t.resumeScheduled = !1),
          e.emit('resume'),
          flow(e),
          t.flowing && !t.reading && e.read(0)
      }
      function flow(e) {
        var t = e._readableState
        for (c('flow', t.flowing); t.flowing && null !== e.read(); );
      }
      function fromList(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (r = t.buffer.shift())
              : !e || e >= t.length
              ? ((r = t.decoder
                  ? t.buffer.join('')
                  : 1 === t.buffer.length
                  ? t.buffer.first()
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (r = t.buffer.consume(e, t.decoder)),
            r)
        var r
      }
      function endReadable(e) {
        var t = e._readableState
        c('endReadable', t.endEmitted),
          t.endEmitted || ((t.ended = !0), a.nextTick(endReadableNT, t, e))
      }
      function endReadableNT(e, t) {
        if (
          (c('endReadableNT', e.endEmitted, e.length),
          !e.endEmitted &&
            0 === e.length &&
            ((e.endEmitted = !0),
            (t.readable = !1),
            t.emit('end'),
            e.autoDestroy))
        ) {
          var r = t._writableState
          ;(!r || (r.autoDestroy && r.finished)) && t.destroy()
        }
      }
      function indexOf(e, t) {
        for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r
        return -1
      }
      ;(Readable.prototype.read = function (e) {
        c('read', e), (e = parseInt(e, 10))
        var t = this._readableState,
          r = e
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e &&
            t.needReadable &&
            ((0 !== t.highWaterMark
              ? t.length >= t.highWaterMark
              : t.length > 0) ||
              t.ended))
        )
          return (
            c('read: emitReadable', t.length, t.ended),
            0 === t.length && t.ended ? endReadable(this) : emitReadable(this),
            null
          )
        if (0 === (e = howMuchToRead(e, t)) && t.ended)
          return 0 === t.length && endReadable(this), null
        var n,
          a = t.needReadable
        return (
          c('need readable', a),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            c('length less than watermark', (a = !0)),
          t.ended || t.reading
            ? c('reading or ended', (a = !1))
            : a &&
              (c('do read'),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = howMuchToRead(r, t))),
          null === (n = e > 0 ? fromList(e, t) : null)
            ? ((t.needReadable = t.length <= t.highWaterMark), (e = 0))
            : ((t.length -= e), (t.awaitDrain = 0)),
          0 === t.length &&
            (t.ended || (t.needReadable = !0),
            r !== e && t.ended && endReadable(this)),
          null !== n && this.emit('data', n),
          n
        )
      }),
        (Readable.prototype._read = function (e) {
          w(this, new v('_read()'))
        }),
        (Readable.prototype.pipe = function (e, t) {
          var r = this,
            n = this._readableState
          switch (n.pipesCount) {
            case 0:
              n.pipes = e
              break
            case 1:
              n.pipes = [n.pipes, e]
              break
            default:
              n.pipes.push(e)
          }
          ;(n.pipesCount += 1), c('pipe count=%d opts=%j', n.pipesCount, t)
          var s =
            (!t || !1 !== t.end) && e !== a.stdout && e !== a.stderr
              ? onend
              : unpipe
          function onunpipe(t, a) {
            c('onunpipe'),
              t === r &&
                a &&
                !1 === a.hasUnpiped &&
                ((a.hasUnpiped = !0),
                (function cleanup() {
                  c('cleanup'),
                    e.removeListener('close', onclose),
                    e.removeListener('finish', onfinish),
                    e.removeListener('drain', l),
                    e.removeListener('error', onerror),
                    e.removeListener('unpipe', onunpipe),
                    r.removeListener('end', onend),
                    r.removeListener('end', unpipe),
                    r.removeListener('data', ondata),
                    (i = !0),
                    !n.awaitDrain ||
                      (e._writableState && !e._writableState.needDrain) ||
                      l()
                })())
          }
          function onend() {
            c('onend'), e.end()
          }
          n.endEmitted ? a.nextTick(s) : r.once('end', s),
            e.on('unpipe', onunpipe)
          var l = (function pipeOnDrain(e) {
            return function pipeOnDrainFunctionResult() {
              var t = e._readableState
              c('pipeOnDrain', t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain &&
                  o(e, 'data') &&
                  ((t.flowing = !0), flow(e))
            }
          })(r)
          e.on('drain', l)
          var i = !1
          function ondata(t) {
            c('ondata')
            var a = e.write(t)
            c('dest.write', a),
              !1 === a &&
                (((1 === n.pipesCount && n.pipes === e) ||
                  (n.pipesCount > 1 && -1 !== indexOf(n.pipes, e))) &&
                  !i &&
                  (c('false write response, pause', n.awaitDrain),
                  n.awaitDrain++),
                r.pause())
          }
          function onerror(t) {
            c('onerror', t),
              unpipe(),
              e.removeListener('error', onerror),
              0 === o(e, 'error') && w(e, t)
          }
          function onclose() {
            e.removeListener('finish', onfinish), unpipe()
          }
          function onfinish() {
            c('onfinish'), e.removeListener('close', onclose), unpipe()
          }
          function unpipe() {
            c('unpipe'), r.unpipe(e)
          }
          return (
            r.on('data', ondata),
            (function prependListener(e, t, r) {
              if ('function' == typeof e.prependListener)
                return e.prependListener(t, r)
              e._events && e._events[t]
                ? Array.isArray(e._events[t])
                  ? e._events[t].unshift(r)
                  : (e._events[t] = [r, e._events[t]])
                : e.on(t, r)
            })(e, 'error', onerror),
            e.once('close', onclose),
            e.once('finish', onfinish),
            e.emit('pipe', r),
            n.flowing || (c('pipe resume'), r.resume()),
            e
          )
        }),
        (Readable.prototype.unpipe = function (e) {
          var t = this._readableState,
            r = { hasUnpiped: !1 }
          if (0 === t.pipesCount) return this
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit('unpipe', this, r)),
              this
            )
          if (!e) {
            var n = t.pipes,
              a = t.pipesCount
            ;(t.pipes = null), (t.pipesCount = 0), (t.flowing = !1)
            for (var o = 0; o < a; o++)
              n[o].emit('unpipe', this, { hasUnpiped: !1 })
            return this
          }
          var s = indexOf(t.pipes, e)
          return (
            -1 === s ||
              (t.pipes.splice(s, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit('unpipe', this, r)),
            this
          )
        }),
        (Readable.prototype.on = function (e, t) {
          var r = s.prototype.on.call(this, e, t),
            n = this._readableState
          return (
            'data' === e
              ? ((n.readableListening = this.listenerCount('readable') > 0),
                !1 !== n.flowing && this.resume())
              : 'readable' === e &&
                (n.endEmitted ||
                  n.readableListening ||
                  ((n.readableListening = n.needReadable = !0),
                  (n.flowing = !1),
                  (n.emittedReadable = !1),
                  c('on readable', n.length, n.reading),
                  n.length
                    ? emitReadable(this)
                    : n.reading || a.nextTick(nReadingNextTick, this))),
            r
          )
        }),
        (Readable.prototype.addListener = Readable.prototype.on),
        (Readable.prototype.removeListener = function (e, t) {
          var r = s.prototype.removeListener.call(this, e, t)
          return (
            'readable' === e && a.nextTick(updateReadableListening, this), r
          )
        }),
        (Readable.prototype.removeAllListeners = function (e) {
          var t = s.prototype.removeAllListeners.apply(this, arguments)
          return (
            ('readable' !== e && void 0 !== e) ||
              a.nextTick(updateReadableListening, this),
            t
          )
        }),
        (Readable.prototype.resume = function () {
          var e = this._readableState
          return (
            e.flowing ||
              (c('resume'),
              (e.flowing = !e.readableListening),
              (function resume(e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), a.nextTick(resume_, e, t))
              })(this, e)),
            (e.paused = !1),
            this
          )
        }),
        (Readable.prototype.pause = function () {
          return (
            c('call pause flowing=%j', this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (c('pause'),
              (this._readableState.flowing = !1),
              this.emit('pause')),
            (this._readableState.paused = !0),
            this
          )
        }),
        (Readable.prototype.wrap = function (e) {
          var t = this,
            r = this._readableState,
            n = !1
          for (var a in (e.on('end', function () {
            if ((c('wrapped end'), r.decoder && !r.ended)) {
              var e = r.decoder.end()
              e && e.length && t.push(e)
            }
            t.push(null)
          }),
          e.on('data', function (a) {
            ;(c('wrapped data'),
            r.decoder && (a = r.decoder.write(a)),
            r.objectMode && null == a) ||
              ((r.objectMode || (a && a.length)) &&
                (t.push(a) || ((n = !0), e.pause())))
          }),
          e))
            void 0 === this[a] &&
              'function' == typeof e[a] &&
              (this[a] = (function methodWrap(t) {
                return function methodWrapReturnFunction() {
                  return e[t].apply(e, arguments)
                }
              })(a))
          for (var o = 0; o < C.length; o++)
            e.on(C[o], this.emit.bind(this, C[o]))
          return (
            (this._read = function (t) {
              c('wrapped _read', t), n && ((n = !1), e.resume())
            }),
            this
          )
        }),
        'function' == typeof Symbol &&
          (Readable.prototype[Symbol.asyncIterator] = function () {
            return void 0 === p && (p = r(955)), p(this)
          }),
        Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
          enumerable: !1,
          get: function get() {
            return this._readableState.highWaterMark
          },
        }),
        Object.defineProperty(Readable.prototype, 'readableBuffer', {
          enumerable: !1,
          get: function get() {
            return this._readableState && this._readableState.buffer
          },
        }),
        Object.defineProperty(Readable.prototype, 'readableFlowing', {
          enumerable: !1,
          get: function get() {
            return this._readableState.flowing
          },
          set: function set(e) {
            this._readableState && (this._readableState.flowing = e)
          },
        }),
        (Readable._fromList = fromList),
        Object.defineProperty(Readable.prototype, 'readableLength', {
          enumerable: !1,
          get: function get() {
            return this._readableState.length
          },
        }),
        'function' == typeof Symbol &&
          (Readable.from = function (e, t) {
            return void 0 === m && (m = r(157)), m(Readable, e, t)
          })
    },
    610: function (e, t, r) {
      e.exports = Transform
      var n = r(48).F,
        a = n.ERR_METHOD_NOT_IMPLEMENTED,
        o = n.ERR_MULTIPLE_CALLBACK,
        s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        l = n.ERR_TRANSFORM_WITH_LENGTH_0,
        i = r(382)
      function afterTransform(e, t) {
        var r = this._transformState
        r.transforming = !1
        var n = r.writecb
        if (null === n) return this.emit('error', new o())
        ;(r.writechunk = null),
          (r.writecb = null),
          null != t && this.push(t),
          n(e)
        var a = this._readableState
        ;(a.reading = !1),
          (a.needReadable || a.length < a.highWaterMark) &&
            this._read(a.highWaterMark)
      }
      function Transform(e) {
        if (!(this instanceof Transform)) return new Transform(e)
        i.call(this, e),
          (this._transformState = {
            afterTransform: afterTransform.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ('function' == typeof e.transform &&
              (this._transform = e.transform),
            'function' == typeof e.flush && (this._flush = e.flush)),
          this.on('prefinish', prefinish)
      }
      function prefinish() {
        var e = this
        'function' != typeof this._flush || this._readableState.destroyed
          ? done(this, null, null)
          : this._flush(function (t, r) {
              done(e, t, r)
            })
      }
      function done(e, t, r) {
        if (t) return e.emit('error', t)
        if ((null != r && e.push(r), e._writableState.length)) throw new l()
        if (e._transformState.transforming) throw new s()
        return e.push(null)
      }
      r(698)(Transform, i),
        (Transform.prototype.push = function (e, t) {
          return (
            (this._transformState.needTransform = !1),
            i.prototype.push.call(this, e, t)
          )
        }),
        (Transform.prototype._transform = function (e, t, r) {
          r(new a('_transform()'))
        }),
        (Transform.prototype._write = function (e, t, r) {
          var n = this._transformState
          if (
            ((n.writecb = r),
            (n.writechunk = e),
            (n.writeencoding = t),
            !n.transforming)
          ) {
            var a = this._readableState
            ;(n.needTransform ||
              a.needReadable ||
              a.length < a.highWaterMark) &&
              this._read(a.highWaterMark)
          }
        }),
        (Transform.prototype._read = function (e) {
          var t = this._transformState
          null === t.writechunk || t.transforming
            ? (t.needTransform = !0)
            : ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform))
        }),
        (Transform.prototype._destroy = function (e, t) {
          i.prototype._destroy.call(this, e, function (e) {
            t(e)
          })
        })
    },
    708: function (e, t, r) {
      var n,
        a = r(606)
      function CorkedRequest(e) {
        var t = this
        ;(this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function onCorkedFinish(e, t, r) {
              var n = e.entry
              e.entry = null
              for (; n; ) {
                var a = n.callback
                t.pendingcb--, a(r), (n = n.next)
              }
              t.corkedRequestsFree.next = e
            })(t, e)
          })
      }
      ;(e.exports = Writable), (Writable.WritableState = WritableState)
      var o = { deprecate: r(643) },
        s = r(345),
        l = r(287).Buffer,
        i =
          (void 0 !== r.g
            ? r.g
            : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof self
            ? self
            : {}
          ).Uint8Array || function () {}
      var c,
        u = r(896),
        d = r(291).getHighWaterMark,
        p = r(48).F,
        m = p.ERR_INVALID_ARG_TYPE,
        f = p.ERR_METHOD_NOT_IMPLEMENTED,
        h = p.ERR_MULTIPLE_CALLBACK,
        g = p.ERR_STREAM_CANNOT_PIPE,
        y = p.ERR_STREAM_DESTROYED,
        S = p.ERR_STREAM_NULL_VALUES,
        _ = p.ERR_STREAM_WRITE_AFTER_END,
        v = p.ERR_UNKNOWN_ENCODING,
        b = u.errorOrDestroy
      function nop() {}
      function WritableState(e, t, o) {
        ;(n = n || r(382)),
          (e = e || {}),
          'boolean' != typeof o && (o = t instanceof n),
          (this.objectMode = !!e.objectMode),
          o && (this.objectMode = this.objectMode || !!e.writableObjectMode),
          (this.highWaterMark = d(this, e, 'writableHighWaterMark', o)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1)
        var s = !1 === e.decodeStrings
        ;(this.decodeStrings = !s),
          (this.defaultEncoding = e.defaultEncoding || 'utf8'),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function onwrite(e, t) {
              var r = e._writableState,
                n = r.sync,
                o = r.writecb
              if ('function' != typeof o) throw new h()
              if (
                ((function onwriteStateUpdate(e) {
                  ;(e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0)
                })(r),
                t)
              )
                !(function onwriteError(e, t, r, n, o) {
                  --t.pendingcb,
                    r
                      ? (a.nextTick(o, n),
                        a.nextTick(finishMaybe, e, t),
                        (e._writableState.errorEmitted = !0),
                        b(e, n))
                      : (o(n),
                        (e._writableState.errorEmitted = !0),
                        b(e, n),
                        finishMaybe(e, t))
                })(e, r, n, t, o)
              else {
                var s = needFinish(r) || e.destroyed
                s ||
                  r.corked ||
                  r.bufferProcessing ||
                  !r.bufferedRequest ||
                  clearBuffer(e, r),
                  n
                    ? a.nextTick(afterWrite, e, r, s, o)
                    : afterWrite(e, r, s, o)
              }
            })(t, e)
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new CorkedRequest(this))
      }
      function Writable(e) {
        var t = this instanceof (n = n || r(382))
        if (!t && !c.call(Writable, this)) return new Writable(e)
        ;(this._writableState = new WritableState(e, this, t)),
          (this.writable = !0),
          e &&
            ('function' == typeof e.write && (this._write = e.write),
            'function' == typeof e.writev && (this._writev = e.writev),
            'function' == typeof e.destroy && (this._destroy = e.destroy),
            'function' == typeof e.final && (this._final = e.final)),
          s.call(this)
      }
      function doWrite(e, t, r, n, a, o, s) {
        ;(t.writelen = n),
          (t.writecb = s),
          (t.writing = !0),
          (t.sync = !0),
          t.destroyed
            ? t.onwrite(new y('write'))
            : r
            ? e._writev(a, t.onwrite)
            : e._write(a, o, t.onwrite),
          (t.sync = !1)
      }
      function afterWrite(e, t, r, n) {
        r ||
          (function onwriteDrain(e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit('drain'))
          })(e, t),
          t.pendingcb--,
          n(),
          finishMaybe(e, t)
      }
      function clearBuffer(e, t) {
        t.bufferProcessing = !0
        var r = t.bufferedRequest
        if (e._writev && r && r.next) {
          var n = t.bufferedRequestCount,
            a = new Array(n),
            o = t.corkedRequestsFree
          o.entry = r
          for (var s = 0, l = !0; r; )
            (a[s] = r), r.isBuf || (l = !1), (r = r.next), (s += 1)
          ;(a.allBuffers = l),
            doWrite(e, t, !0, t.length, a, '', o.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            o.next
              ? ((t.corkedRequestsFree = o.next), (o.next = null))
              : (t.corkedRequestsFree = new CorkedRequest(t)),
            (t.bufferedRequestCount = 0)
        } else {
          for (; r; ) {
            var i = r.chunk,
              c = r.encoding,
              u = r.callback
            if (
              (doWrite(e, t, !1, t.objectMode ? 1 : i.length, i, c, u),
              (r = r.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break
          }
          null === r && (t.lastBufferedRequest = null)
        }
        ;(t.bufferedRequest = r), (t.bufferProcessing = !1)
      }
      function needFinish(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        )
      }
      function callFinal(e, t) {
        e._final(function (r) {
          t.pendingcb--,
            r && b(e, r),
            (t.prefinished = !0),
            e.emit('prefinish'),
            finishMaybe(e, t)
        })
      }
      function finishMaybe(e, t) {
        var r = needFinish(t)
        if (
          r &&
          ((function prefinish(e, t) {
            t.prefinished ||
              t.finalCalled ||
              ('function' != typeof e._final || t.destroyed
                ? ((t.prefinished = !0), e.emit('prefinish'))
                : (t.pendingcb++,
                  (t.finalCalled = !0),
                  a.nextTick(callFinal, e, t)))
          })(e, t),
          0 === t.pendingcb &&
            ((t.finished = !0), e.emit('finish'), t.autoDestroy))
        ) {
          var n = e._readableState
          ;(!n || (n.autoDestroy && n.endEmitted)) && e.destroy()
        }
        return r
      }
      r(698)(Writable, s),
        (WritableState.prototype.getBuffer = function getBuffer() {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next)
          return t
        }),
        (function () {
          try {
            Object.defineProperty(WritableState.prototype, 'buffer', {
              get: o.deprecate(
                function writableStateBufferGetter() {
                  return this.getBuffer()
                },
                '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                'DEP0003',
              ),
            })
          } catch (e) {}
        })(),
        'function' == typeof Symbol &&
        Symbol.hasInstance &&
        'function' == typeof Function.prototype[Symbol.hasInstance]
          ? ((c = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(Writable, Symbol.hasInstance, {
              value: function value(e) {
                return (
                  !!c.call(this, e) ||
                  (this === Writable &&
                    e &&
                    e._writableState instanceof WritableState)
                )
              },
            }))
          : (c = function realHasInstance(e) {
              return e instanceof this
            }),
        (Writable.prototype.pipe = function () {
          b(this, new g())
        }),
        (Writable.prototype.write = function (e, t, r) {
          var n = this._writableState,
            o = !1,
            s =
              !n.objectMode &&
              (function _isUint8Array(e) {
                return l.isBuffer(e) || e instanceof i
              })(e)
          return (
            s &&
              !l.isBuffer(e) &&
              (e = (function _uint8ArrayToBuffer(e) {
                return l.from(e)
              })(e)),
            'function' == typeof t && ((r = t), (t = null)),
            s ? (t = 'buffer') : t || (t = n.defaultEncoding),
            'function' != typeof r && (r = nop),
            n.ending
              ? (function writeAfterEnd(e, t) {
                  var r = new _()
                  b(e, r), a.nextTick(t, r)
                })(this, r)
              : (s ||
                  (function validChunk(e, t, r, n) {
                    var o
                    return (
                      null === r
                        ? (o = new S())
                        : 'string' == typeof r ||
                          t.objectMode ||
                          (o = new m('chunk', ['string', 'Buffer'], r)),
                      !o || (b(e, o), a.nextTick(n, o), !1)
                    )
                  })(this, n, e, r)) &&
                (n.pendingcb++,
                (o = (function writeOrBuffer(e, t, r, n, a, o) {
                  if (!r) {
                    var s = (function decodeChunk(e, t, r) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        'string' != typeof t ||
                        (t = l.from(t, r))
                      return t
                    })(t, n, a)
                    n !== s && ((r = !0), (a = 'buffer'), (n = s))
                  }
                  var i = t.objectMode ? 1 : n.length
                  t.length += i
                  var c = t.length < t.highWaterMark
                  c || (t.needDrain = !0)
                  if (t.writing || t.corked) {
                    var u = t.lastBufferedRequest
                    ;(t.lastBufferedRequest = {
                      chunk: n,
                      encoding: a,
                      isBuf: r,
                      callback: o,
                      next: null,
                    }),
                      u
                        ? (u.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1)
                  } else doWrite(e, t, !1, i, n, a, o)
                  return c
                })(this, n, s, e, t, r))),
            o
          )
        }),
        (Writable.prototype.cork = function () {
          this._writableState.corked++
        }),
        (Writable.prototype.uncork = function () {
          var e = this._writableState
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              clearBuffer(this, e))
        }),
        (Writable.prototype.setDefaultEncoding = function setDefaultEncoding(
          e,
        ) {
          if (
            ('string' == typeof e && (e = e.toLowerCase()),
            !(
              [
                'hex',
                'utf8',
                'utf-8',
                'ascii',
                'binary',
                'base64',
                'ucs2',
                'ucs-2',
                'utf16le',
                'utf-16le',
                'raw',
              ].indexOf((e + '').toLowerCase()) > -1
            ))
          )
            throw new v(e)
          return (this._writableState.defaultEncoding = e), this
        }),
        Object.defineProperty(Writable.prototype, 'writableBuffer', {
          enumerable: !1,
          get: function get() {
            return this._writableState && this._writableState.getBuffer()
          },
        }),
        Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
          enumerable: !1,
          get: function get() {
            return this._writableState.highWaterMark
          },
        }),
        (Writable.prototype._write = function (e, t, r) {
          r(new f('_write()'))
        }),
        (Writable.prototype._writev = null),
        (Writable.prototype.end = function (e, t, r) {
          var n = this._writableState
          return (
            'function' == typeof e
              ? ((r = e), (e = null), (t = null))
              : 'function' == typeof t && ((r = t), (t = null)),
            null != e && this.write(e, t),
            n.corked && ((n.corked = 1), this.uncork()),
            n.ending ||
              (function endWritable(e, t, r) {
                ;(t.ending = !0),
                  finishMaybe(e, t),
                  r && (t.finished ? a.nextTick(r) : e.once('finish', r))
                ;(t.ended = !0), (e.writable = !1)
              })(this, n, r),
            this
          )
        }),
        Object.defineProperty(Writable.prototype, 'writableLength', {
          enumerable: !1,
          get: function get() {
            return this._writableState.length
          },
        }),
        Object.defineProperty(Writable.prototype, 'destroyed', {
          enumerable: !1,
          get: function get() {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            )
          },
          set: function set(e) {
            this._writableState && (this._writableState.destroyed = e)
          },
        }),
        (Writable.prototype.destroy = u.destroy),
        (Writable.prototype._undestroy = u.undestroy),
        (Writable.prototype._destroy = function (e, t) {
          t(e)
        })
    },
    955: function (e, t, r) {
      var n,
        a = r(606)
      function _defineProperty(e, t, r) {
        return (
          (t = (function _toPropertyKey(e) {
            var t = (function _toPrimitive(e, t) {
              if ('object' != typeof e || null === e) return e
              var r = e[Symbol.toPrimitive]
              if (void 0 !== r) {
                var n = r.call(e, t || 'default')
                if ('object' != typeof n) return n
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.',
                )
              }
              return ('string' === t ? String : Number)(e)
            })(e, 'string')
            return 'symbol' == typeof t ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      var o = r(238),
        s = Symbol('lastResolve'),
        l = Symbol('lastReject'),
        i = Symbol('error'),
        c = Symbol('ended'),
        u = Symbol('lastPromise'),
        d = Symbol('handlePromise'),
        p = Symbol('stream')
      function createIterResult(e, t) {
        return { value: e, done: t }
      }
      function readAndResolve(e) {
        var t = e[s]
        if (null !== t) {
          var r = e[p].read()
          null !== r &&
            ((e[u] = null),
            (e[s] = null),
            (e[l] = null),
            t(createIterResult(r, !1)))
        }
      }
      function onReadable(e) {
        a.nextTick(readAndResolve, e)
      }
      var m = Object.getPrototypeOf(function () {}),
        f = Object.setPrototypeOf(
          (_defineProperty(
            (n = {
              get stream() {
                return this[p]
              },
              next: function next() {
                var e = this,
                  t = this[i]
                if (null !== t) return Promise.reject(t)
                if (this[c])
                  return Promise.resolve(createIterResult(void 0, !0))
                if (this[p].destroyed)
                  return new Promise(function (t, r) {
                    a.nextTick(function () {
                      e[i] ? r(e[i]) : t(createIterResult(void 0, !0))
                    })
                  })
                var r,
                  n = this[u]
                if (n)
                  r = new Promise(
                    (function wrapForNext(e, t) {
                      return function (r, n) {
                        e.then(function () {
                          t[c] ? r(createIterResult(void 0, !0)) : t[d](r, n)
                        }, n)
                      }
                    })(n, this),
                  )
                else {
                  var o = this[p].read()
                  if (null !== o)
                    return Promise.resolve(createIterResult(o, !1))
                  r = new Promise(this[d])
                }
                return (this[u] = r), r
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this
            },
          ),
          _defineProperty(n, 'return', function _return() {
            var e = this
            return new Promise(function (t, r) {
              e[p].destroy(null, function (e) {
                e ? r(e) : t(createIterResult(void 0, !0))
              })
            })
          }),
          n),
          m,
        )
      e.exports = function createReadableStreamAsyncIterator(e) {
        var t,
          r = Object.create(
            f,
            (_defineProperty((t = {}), p, { value: e, writable: !0 }),
            _defineProperty(t, s, { value: null, writable: !0 }),
            _defineProperty(t, l, { value: null, writable: !0 }),
            _defineProperty(t, i, { value: null, writable: !0 }),
            _defineProperty(t, c, {
              value: e._readableState.endEmitted,
              writable: !0,
            }),
            _defineProperty(t, d, {
              value: function value(e, t) {
                var n = r[p].read()
                n
                  ? ((r[u] = null),
                    (r[s] = null),
                    (r[l] = null),
                    e(createIterResult(n, !1)))
                  : ((r[s] = e), (r[l] = t))
              },
              writable: !0,
            }),
            t),
          )
        return (
          (r[u] = null),
          o(e, function (e) {
            if (e && 'ERR_STREAM_PREMATURE_CLOSE' !== e.code) {
              var t = r[l]
              return (
                null !== t &&
                  ((r[u] = null), (r[s] = null), (r[l] = null), t(e)),
                void (r[i] = e)
              )
            }
            var n = r[s]
            null !== n &&
              ((r[u] = null),
              (r[s] = null),
              (r[l] = null),
              n(createIterResult(void 0, !0))),
              (r[c] = !0)
          }),
          e.on('readable', onReadable.bind(null, r)),
          r
        )
      }
    },
    726: function (e, t, r) {
      function ownKeys(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ownKeys(Object(r), !0).forEach(function (t) {
                _defineProperty(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                )
              })
        }
        return e
      }
      function _defineProperty(e, t, r) {
        return (
          (t = _toPropertyKey(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, _toPropertyKey(n.key), n)
        }
      }
      function _toPropertyKey(e) {
        var t = (function _toPrimitive(e, t) {
          if ('object' != typeof e || null === e) return e
          var r = e[Symbol.toPrimitive]
          if (void 0 !== r) {
            var n = r.call(e, t || 'default')
            if ('object' != typeof n) return n
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === t ? String : Number)(e)
        })(e, 'string')
        return 'symbol' == typeof t ? t : String(t)
      }
      var n = r(287).Buffer,
        a = r(340).inspect,
        o = (a && a.custom) || 'inspect'
      function copyBuffer(e, t, r) {
        n.prototype.copy.call(e, t, r)
      }
      e.exports = (function () {
        function BufferList() {
          !(function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, BufferList),
            (this.head = null),
            (this.tail = null),
            (this.length = 0)
        }
        return (
          (function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t),
              r && _defineProperties(e, r),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              e
            )
          })(BufferList, [
            {
              key: 'push',
              value: function push(e) {
                var t = { data: e, next: null }
                this.length > 0 ? (this.tail.next = t) : (this.head = t),
                  (this.tail = t),
                  ++this.length
              },
            },
            {
              key: 'unshift',
              value: function unshift(e) {
                var t = { data: e, next: this.head }
                0 === this.length && (this.tail = t),
                  (this.head = t),
                  ++this.length
              },
            },
            {
              key: 'shift',
              value: function shift() {
                if (0 !== this.length) {
                  var e = this.head.data
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    e
                  )
                }
              },
            },
            {
              key: 'clear',
              value: function clear() {
                ;(this.head = this.tail = null), (this.length = 0)
              },
            },
            {
              key: 'join',
              value: function join(e) {
                if (0 === this.length) return ''
                for (var t = this.head, r = '' + t.data; (t = t.next); )
                  r += e + t.data
                return r
              },
            },
            {
              key: 'concat',
              value: function concat(e) {
                if (0 === this.length) return n.alloc(0)
                for (var t = n.allocUnsafe(e >>> 0), r = this.head, a = 0; r; )
                  copyBuffer(r.data, t, a), (a += r.data.length), (r = r.next)
                return t
              },
            },
            {
              key: 'consume',
              value: function consume(e, t) {
                var r
                return (
                  e < this.head.data.length
                    ? ((r = this.head.data.slice(0, e)),
                      (this.head.data = this.head.data.slice(e)))
                    : (r =
                        e === this.head.data.length
                          ? this.shift()
                          : t
                          ? this._getString(e)
                          : this._getBuffer(e)),
                  r
                )
              },
            },
            {
              key: 'first',
              value: function first() {
                return this.head.data
              },
            },
            {
              key: '_getString',
              value: function _getString(e) {
                var t = this.head,
                  r = 1,
                  n = t.data
                for (e -= n.length; (t = t.next); ) {
                  var a = t.data,
                    o = e > a.length ? a.length : e
                  if (
                    (o === a.length ? (n += a) : (n += a.slice(0, e)),
                    0 === (e -= o))
                  ) {
                    o === a.length
                      ? (++r,
                        t.next
                          ? (this.head = t.next)
                          : (this.head = this.tail = null))
                      : ((this.head = t), (t.data = a.slice(o)))
                    break
                  }
                  ++r
                }
                return (this.length -= r), n
              },
            },
            {
              key: '_getBuffer',
              value: function _getBuffer(e) {
                var t = n.allocUnsafe(e),
                  r = this.head,
                  a = 1
                for (r.data.copy(t), e -= r.data.length; (r = r.next); ) {
                  var o = r.data,
                    s = e > o.length ? o.length : e
                  if ((o.copy(t, t.length - e, 0, s), 0 === (e -= s))) {
                    s === o.length
                      ? (++a,
                        r.next
                          ? (this.head = r.next)
                          : (this.head = this.tail = null))
                      : ((this.head = r), (r.data = o.slice(s)))
                    break
                  }
                  ++a
                }
                return (this.length -= a), t
              },
            },
            {
              key: o,
              value: function value(e, t) {
                return a(
                  this,
                  _objectSpread(
                    _objectSpread({}, t),
                    {},
                    { depth: 0, customInspect: !1 },
                  ),
                )
              },
            },
          ]),
          BufferList
        )
      })()
    },
    896: function (e, t, r) {
      var n = r(606)
      function emitErrorAndCloseNT(e, t) {
        emitErrorNT(e, t), emitCloseNT(e)
      }
      function emitCloseNT(e) {
        ;(e._writableState && !e._writableState.emitClose) ||
          (e._readableState && !e._readableState.emitClose) ||
          e.emit('close')
      }
      function emitErrorNT(e, t) {
        e.emit('error', t)
      }
      e.exports = {
        destroy: function destroy(e, t) {
          var r = this,
            a = this._readableState && this._readableState.destroyed,
            o = this._writableState && this._writableState.destroyed
          return a || o
            ? (t
                ? t(e)
                : e &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      n.nextTick(emitErrorNT, this, e))
                    : n.nextTick(emitErrorNT, this, e)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                !t && e
                  ? r._writableState
                    ? r._writableState.errorEmitted
                      ? n.nextTick(emitCloseNT, r)
                      : ((r._writableState.errorEmitted = !0),
                        n.nextTick(emitErrorAndCloseNT, r, e))
                    : n.nextTick(emitErrorAndCloseNT, r, e)
                  : t
                  ? (n.nextTick(emitCloseNT, r), t(e))
                  : n.nextTick(emitCloseNT, r)
              }),
              this)
        },
        undestroy: function undestroy() {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1))
        },
        errorOrDestroy: function errorOrDestroy(e, t) {
          var r = e._readableState,
            n = e._writableState
          ;(r && r.autoDestroy) || (n && n.autoDestroy)
            ? e.destroy(t)
            : e.emit('error', t)
        },
      }
    },
    238: function (e, t, r) {
      var n = r(48).F.ERR_STREAM_PREMATURE_CLOSE
      function noop() {}
      e.exports = function eos(e, t, r) {
        if ('function' == typeof t) return eos(e, null, t)
        t || (t = {}),
          (r = (function once(e) {
            var t = !1
            return function () {
              if (!t) {
                t = !0
                for (
                  var r = arguments.length, n = new Array(r), a = 0;
                  a < r;
                  a++
                )
                  n[a] = arguments[a]
                e.apply(this, n)
              }
            }
          })(r || noop))
        var a = t.readable || (!1 !== t.readable && e.readable),
          o = t.writable || (!1 !== t.writable && e.writable),
          s = function onlegacyfinish() {
            e.writable || i()
          },
          l = e._writableState && e._writableState.finished,
          i = function onfinish() {
            ;(o = !1), (l = !0), a || r.call(e)
          },
          c = e._readableState && e._readableState.endEmitted,
          u = function onend() {
            ;(a = !1), (c = !0), o || r.call(e)
          },
          d = function onerror(t) {
            r.call(e, t)
          },
          p = function onclose() {
            var t
            return a && !c
              ? ((e._readableState && e._readableState.ended) || (t = new n()),
                r.call(e, t))
              : o && !l
              ? ((e._writableState && e._writableState.ended) || (t = new n()),
                r.call(e, t))
              : void 0
          },
          m = function onrequest() {
            e.req.on('finish', i)
          }
        return (
          !(function isRequest(e) {
            return e.setHeader && 'function' == typeof e.abort
          })(e)
            ? o && !e._writableState && (e.on('end', s), e.on('close', s))
            : (e.on('complete', i),
              e.on('abort', p),
              e.req ? m() : e.on('request', m)),
          e.on('end', u),
          e.on('finish', i),
          !1 !== t.error && e.on('error', d),
          e.on('close', p),
          function () {
            e.removeListener('complete', i),
              e.removeListener('abort', p),
              e.removeListener('request', m),
              e.req && e.req.removeListener('finish', i),
              e.removeListener('end', s),
              e.removeListener('close', s),
              e.removeListener('finish', i),
              e.removeListener('end', u),
              e.removeListener('error', d),
              e.removeListener('close', p)
          }
        )
      }
    },
    157: function (e) {
      e.exports = function () {
        throw new Error('Readable.from is not available in the browser')
      }
    },
    758: function (e, t, r) {
      var n
      var a = r(48).F,
        o = a.ERR_MISSING_ARGS,
        s = a.ERR_STREAM_DESTROYED
      function noop(e) {
        if (e) throw e
      }
      function call(e) {
        e()
      }
      function pipe(e, t) {
        return e.pipe(t)
      }
      e.exports = function pipeline() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a]
        var l,
          i = (function popCallback(e) {
            return e.length
              ? 'function' != typeof e[e.length - 1]
                ? noop
                : e.pop()
              : noop
          })(t)
        if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
          throw new o('streams')
        var c = t.map(function (e, a) {
          var o = a < t.length - 1
          return (function destroyer(e, t, a, o) {
            o = (function once(e) {
              var t = !1
              return function () {
                t || ((t = !0), e.apply(void 0, arguments))
              }
            })(o)
            var l = !1
            e.on('close', function () {
              l = !0
            }),
              void 0 === n && (n = r(238)),
              n(e, { readable: t, writable: a }, function (e) {
                if (e) return o(e)
                ;(l = !0), o()
              })
            var i = !1
            return function (t) {
              if (!l && !i)
                return (
                  (i = !0),
                  (function isRequest(e) {
                    return e.setHeader && 'function' == typeof e.abort
                  })(e)
                    ? e.abort()
                    : 'function' == typeof e.destroy
                    ? e.destroy()
                    : void o(t || new s('pipe'))
                )
            }
          })(e, o, a > 0, function (e) {
            l || (l = e), e && c.forEach(call), o || (c.forEach(call), i(l))
          })
        })
        return t.reduce(pipe)
      }
    },
    291: function (e, t, r) {
      var n = r(48).F.ERR_INVALID_OPT_VALUE
      e.exports = {
        getHighWaterMark: function getHighWaterMark(e, t, r, a) {
          var o = (function highWaterMarkFrom(e, t, r) {
            return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
          })(t, a, r)
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new n(a ? r : 'highWaterMark', o)
            return Math.floor(o)
          }
          return e.objectMode ? 16 : 16384
        },
      }
    },
    345: function (e, t, r) {
      e.exports = r(7).EventEmitter
    },
    861: function (e, t, r) {
      var n = r(287),
        a = n.Buffer
      function copyProps(e, t) {
        for (var r in e) t[r] = e[r]
      }
      function SafeBuffer(e, t, r) {
        return a(e, t, r)
      }
      a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow
        ? (e.exports = n)
        : (copyProps(n, t), (t.Buffer = SafeBuffer)),
        (SafeBuffer.prototype = Object.create(a.prototype)),
        copyProps(a, SafeBuffer),
        (SafeBuffer.from = function (e, t, r) {
          if ('number' == typeof e)
            throw new TypeError('Argument must not be a number')
          return a(e, t, r)
        }),
        (SafeBuffer.alloc = function (e, t, r) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number')
          var n = a(e)
          return (
            void 0 !== t
              ? 'string' == typeof r
                ? n.fill(t, r)
                : n.fill(t)
              : n.fill(0),
            n
          )
        }),
        (SafeBuffer.allocUnsafe = function (e) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number')
          return a(e)
        }),
        (SafeBuffer.allocUnsafeSlow = function (e) {
          if ('number' != typeof e)
            throw new TypeError('Argument must be a number')
          return n.SlowBuffer(e)
        })
    },
    392: function (e, t, r) {
      var n = r(861).Buffer
      function Hash(e, t) {
        ;(this._block = n.alloc(e)),
          (this._finalSize = t),
          (this._blockSize = e),
          (this._len = 0)
      }
      ;(Hash.prototype.update = function (e, t) {
        'string' == typeof e && ((t = t || 'utf8'), (e = n.from(e, t)))
        for (
          var r = this._block,
            a = this._blockSize,
            o = e.length,
            s = this._len,
            l = 0;
          l < o;

        ) {
          for (var i = s % a, c = Math.min(o - l, a - i), u = 0; u < c; u++)
            r[i + u] = e[l + u]
          ;(l += c), (s += c) % a == 0 && this._update(r)
        }
        return (this._len += o), this
      }),
        (Hash.prototype.digest = function (e) {
          var t = this._len % this._blockSize
          ;(this._block[t] = 128),
            this._block.fill(0, t + 1),
            t >= this._finalSize &&
              (this._update(this._block), this._block.fill(0))
          var r = 8 * this._len
          if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4)
          else {
            var n = (4294967295 & r) >>> 0,
              a = (r - n) / 4294967296
            this._block.writeUInt32BE(a, this._blockSize - 8),
              this._block.writeUInt32BE(n, this._blockSize - 4)
          }
          this._update(this._block)
          var o = this._hash()
          return e ? o.toString(e) : o
        }),
        (Hash.prototype._update = function () {
          throw new Error('_update must be implemented by subclass')
        }),
        (e.exports = Hash)
    },
    802: function (e, t, r) {
      var n = (e.exports = function SHA(e) {
        e = e.toLowerCase()
        var t = n[e]
        if (!t)
          throw new Error(e + ' is not supported (we accept pull requests)')
        return new t()
      })
      ;(n.sha = r(816)),
        (n.sha1 = r(737)),
        (n.sha224 = r(710)),
        (n.sha256 = r(107)),
        (n.sha384 = r(827)),
        (n.sha512 = r(890))
    },
    816: function (e, t, r) {
      var n = r(698),
        a = r(392),
        o = r(861).Buffer,
        s = [1518500249, 1859775393, -1894007588, -899497514],
        l = new Array(80)
      function Sha() {
        this.init(), (this._w = l), a.call(this, 64, 56)
      }
      function rotl30(e) {
        return (e << 30) | (e >>> 2)
      }
      function ft(e, t, r, n) {
        return 0 === e
          ? (t & r) | (~t & n)
          : 2 === e
          ? (t & r) | (t & n) | (r & n)
          : t ^ r ^ n
      }
      n(Sha, a),
        (Sha.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          )
        }),
        (Sha.prototype._update = function (e) {
          for (
            var t,
              r = this._w,
              n = 0 | this._a,
              a = 0 | this._b,
              o = 0 | this._c,
              l = 0 | this._d,
              i = 0 | this._e,
              c = 0;
            c < 16;
            ++c
          )
            r[c] = e.readInt32BE(4 * c)
          for (; c < 80; ++c) r[c] = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16]
          for (var u = 0; u < 80; ++u) {
            var d = ~~(u / 20),
              p =
                0 |
                ((((t = n) << 5) | (t >>> 27)) +
                  ft(d, a, o, l) +
                  i +
                  r[u] +
                  s[d])
            ;(i = l), (l = o), (o = rotl30(a)), (a = n), (n = p)
          }
          ;(this._a = (n + this._a) | 0),
            (this._b = (a + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (l + this._d) | 0),
            (this._e = (i + this._e) | 0)
        }),
        (Sha.prototype._hash = function () {
          var e = o.allocUnsafe(20)
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          )
        }),
        (e.exports = Sha)
    },
    737: function (e, t, r) {
      var n = r(698),
        a = r(392),
        o = r(861).Buffer,
        s = [1518500249, 1859775393, -1894007588, -899497514],
        l = new Array(80)
      function Sha1() {
        this.init(), (this._w = l), a.call(this, 64, 56)
      }
      function rotl5(e) {
        return (e << 5) | (e >>> 27)
      }
      function rotl30(e) {
        return (e << 30) | (e >>> 2)
      }
      function ft(e, t, r, n) {
        return 0 === e
          ? (t & r) | (~t & n)
          : 2 === e
          ? (t & r) | (t & n) | (r & n)
          : t ^ r ^ n
      }
      n(Sha1, a),
        (Sha1.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          )
        }),
        (Sha1.prototype._update = function (e) {
          for (
            var t,
              r = this._w,
              n = 0 | this._a,
              a = 0 | this._b,
              o = 0 | this._c,
              l = 0 | this._d,
              i = 0 | this._e,
              c = 0;
            c < 16;
            ++c
          )
            r[c] = e.readInt32BE(4 * c)
          for (; c < 80; ++c)
            r[c] =
              ((t = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16]) << 1) |
              (t >>> 31)
          for (var u = 0; u < 80; ++u) {
            var d = ~~(u / 20),
              p = (rotl5(n) + ft(d, a, o, l) + i + r[u] + s[d]) | 0
            ;(i = l), (l = o), (o = rotl30(a)), (a = n), (n = p)
          }
          ;(this._a = (n + this._a) | 0),
            (this._b = (a + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (l + this._d) | 0),
            (this._e = (i + this._e) | 0)
        }),
        (Sha1.prototype._hash = function () {
          var e = o.allocUnsafe(20)
          return (
            e.writeInt32BE(0 | this._a, 0),
            e.writeInt32BE(0 | this._b, 4),
            e.writeInt32BE(0 | this._c, 8),
            e.writeInt32BE(0 | this._d, 12),
            e.writeInt32BE(0 | this._e, 16),
            e
          )
        }),
        (e.exports = Sha1)
    },
    710: function (e, t, r) {
      var n = r(698),
        a = r(107),
        o = r(392),
        s = r(861).Buffer,
        l = new Array(64)
      function Sha224() {
        this.init(), (this._w = l), o.call(this, 64, 56)
      }
      n(Sha224, a),
        (Sha224.prototype.init = function () {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          )
        }),
        (Sha224.prototype._hash = function () {
          var e = s.allocUnsafe(28)
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e
          )
        }),
        (e.exports = Sha224)
    },
    107: function (e, t, r) {
      var n = r(698),
        a = r(392),
        o = r(861).Buffer,
        s = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        l = new Array(64)
      function Sha256() {
        this.init(), (this._w = l), a.call(this, 64, 56)
      }
      function ch(e, t, r) {
        return r ^ (e & (t ^ r))
      }
      function maj(e, t, r) {
        return (e & t) | (r & (e | t))
      }
      function sigma0(e) {
        return (
          ((e >>> 2) | (e << 30)) ^
          ((e >>> 13) | (e << 19)) ^
          ((e >>> 22) | (e << 10))
        )
      }
      function sigma1(e) {
        return (
          ((e >>> 6) | (e << 26)) ^
          ((e >>> 11) | (e << 21)) ^
          ((e >>> 25) | (e << 7))
        )
      }
      function gamma0(e) {
        return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3)
      }
      function gamma1(e) {
        return ((e >>> 17) | (e << 15)) ^ ((e >>> 19) | (e << 13)) ^ (e >>> 10)
      }
      n(Sha256, a),
        (Sha256.prototype.init = function () {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          )
        }),
        (Sha256.prototype._update = function (e) {
          for (
            var t = this._w,
              r = 0 | this._a,
              n = 0 | this._b,
              a = 0 | this._c,
              o = 0 | this._d,
              l = 0 | this._e,
              i = 0 | this._f,
              c = 0 | this._g,
              u = 0 | this._h,
              d = 0;
            d < 16;
            ++d
          )
            t[d] = e.readInt32BE(4 * d)
          for (; d < 64; ++d)
            t[d] =
              (gamma1(t[d - 2]) + t[d - 7] + gamma0(t[d - 15]) + t[d - 16]) | 0
          for (var p = 0; p < 64; ++p) {
            var m = (u + sigma1(l) + ch(l, i, c) + s[p] + t[p]) | 0,
              f = (sigma0(r) + maj(r, n, a)) | 0
            ;(u = c),
              (c = i),
              (i = l),
              (l = (o + m) | 0),
              (o = a),
              (a = n),
              (n = r),
              (r = (m + f) | 0)
          }
          ;(this._a = (r + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (a + this._c) | 0),
            (this._d = (o + this._d) | 0),
            (this._e = (l + this._e) | 0),
            (this._f = (i + this._f) | 0),
            (this._g = (c + this._g) | 0),
            (this._h = (u + this._h) | 0)
        }),
        (Sha256.prototype._hash = function () {
          var e = o.allocUnsafe(32)
          return (
            e.writeInt32BE(this._a, 0),
            e.writeInt32BE(this._b, 4),
            e.writeInt32BE(this._c, 8),
            e.writeInt32BE(this._d, 12),
            e.writeInt32BE(this._e, 16),
            e.writeInt32BE(this._f, 20),
            e.writeInt32BE(this._g, 24),
            e.writeInt32BE(this._h, 28),
            e
          )
        }),
        (e.exports = Sha256)
    },
    827: function (e, t, r) {
      var n = r(698),
        a = r(890),
        o = r(392),
        s = r(861).Buffer,
        l = new Array(160)
      function Sha384() {
        this.init(), (this._w = l), o.call(this, 128, 112)
      }
      n(Sha384, a),
        (Sha384.prototype.init = function () {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          )
        }),
        (Sha384.prototype._hash = function () {
          var e = s.allocUnsafe(48)
          function writeInt64BE(t, r, n) {
            e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4)
          }
          return (
            writeInt64BE(this._ah, this._al, 0),
            writeInt64BE(this._bh, this._bl, 8),
            writeInt64BE(this._ch, this._cl, 16),
            writeInt64BE(this._dh, this._dl, 24),
            writeInt64BE(this._eh, this._el, 32),
            writeInt64BE(this._fh, this._fl, 40),
            e
          )
        }),
        (e.exports = Sha384)
    },
    890: function (e, t, r) {
      var n = r(698),
        a = r(392),
        o = r(861).Buffer,
        s = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ],
        l = new Array(160)
      function Sha512() {
        this.init(), (this._w = l), a.call(this, 128, 112)
      }
      function Ch(e, t, r) {
        return r ^ (e & (t ^ r))
      }
      function maj(e, t, r) {
        return (e & t) | (r & (e | t))
      }
      function sigma0(e, t) {
        return (
          ((e >>> 28) | (t << 4)) ^
          ((t >>> 2) | (e << 30)) ^
          ((t >>> 7) | (e << 25))
        )
      }
      function sigma1(e, t) {
        return (
          ((e >>> 14) | (t << 18)) ^
          ((e >>> 18) | (t << 14)) ^
          ((t >>> 9) | (e << 23))
        )
      }
      function Gamma0(e, t) {
        return ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7)
      }
      function Gamma0l(e, t) {
        return (
          ((e >>> 1) | (t << 31)) ^
          ((e >>> 8) | (t << 24)) ^
          ((e >>> 7) | (t << 25))
        )
      }
      function Gamma1(e, t) {
        return ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6)
      }
      function Gamma1l(e, t) {
        return (
          ((e >>> 19) | (t << 13)) ^
          ((t >>> 29) | (e << 3)) ^
          ((e >>> 6) | (t << 26))
        )
      }
      function getCarry(e, t) {
        return e >>> 0 < t >>> 0 ? 1 : 0
      }
      n(Sha512, a),
        (Sha512.prototype.init = function () {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          )
        }),
        (Sha512.prototype._update = function (e) {
          for (
            var t = this._w,
              r = 0 | this._ah,
              n = 0 | this._bh,
              a = 0 | this._ch,
              o = 0 | this._dh,
              l = 0 | this._eh,
              i = 0 | this._fh,
              c = 0 | this._gh,
              u = 0 | this._hh,
              d = 0 | this._al,
              p = 0 | this._bl,
              m = 0 | this._cl,
              f = 0 | this._dl,
              h = 0 | this._el,
              g = 0 | this._fl,
              y = 0 | this._gl,
              S = 0 | this._hl,
              _ = 0;
            _ < 32;
            _ += 2
          )
            (t[_] = e.readInt32BE(4 * _)), (t[_ + 1] = e.readInt32BE(4 * _ + 4))
          for (; _ < 160; _ += 2) {
            var v = t[_ - 30],
              b = t[_ - 30 + 1],
              w = Gamma0(v, b),
              C = Gamma0l(b, v),
              x = Gamma1((v = t[_ - 4]), (b = t[_ - 4 + 1])),
              O = Gamma1l(b, v),
              k = t[_ - 14],
              N = t[_ - 14 + 1],
              A = t[_ - 32],
              I = t[_ - 32 + 1],
              R = (C + N) | 0,
              T = (w + k + getCarry(R, C)) | 0
            ;(T =
              ((T = (T + x + getCarry((R = (R + O) | 0), O)) | 0) +
                A +
                getCarry((R = (R + I) | 0), I)) |
              0),
              (t[_] = T),
              (t[_ + 1] = R)
          }
          for (var B = 0; B < 160; B += 2) {
            ;(T = t[B]), (R = t[B + 1])
            var j = maj(r, n, a),
              P = maj(d, p, m),
              M = sigma0(r, d),
              q = sigma0(d, r),
              L = sigma1(l, h),
              D = sigma1(h, l),
              U = s[B],
              $ = s[B + 1],
              J = Ch(l, i, c),
              V = Ch(h, g, y),
              K = (S + D) | 0,
              z = (u + L + getCarry(K, S)) | 0
            z =
              ((z =
                ((z = (z + J + getCarry((K = (K + V) | 0), V)) | 0) +
                  U +
                  getCarry((K = (K + $) | 0), $)) |
                0) +
                T +
                getCarry((K = (K + R) | 0), R)) |
              0
            var F = (q + P) | 0,
              W = (M + j + getCarry(F, q)) | 0
            ;(u = c),
              (S = y),
              (c = i),
              (y = g),
              (i = l),
              (g = h),
              (l = (o + z + getCarry((h = (f + K) | 0), f)) | 0),
              (o = a),
              (f = m),
              (a = n),
              (m = p),
              (n = r),
              (p = d),
              (r = (z + W + getCarry((d = (K + F) | 0), K)) | 0)
          }
          ;(this._al = (this._al + d) | 0),
            (this._bl = (this._bl + p) | 0),
            (this._cl = (this._cl + m) | 0),
            (this._dl = (this._dl + f) | 0),
            (this._el = (this._el + h) | 0),
            (this._fl = (this._fl + g) | 0),
            (this._gl = (this._gl + y) | 0),
            (this._hl = (this._hl + S) | 0),
            (this._ah = (this._ah + r + getCarry(this._al, d)) | 0),
            (this._bh = (this._bh + n + getCarry(this._bl, p)) | 0),
            (this._ch = (this._ch + a + getCarry(this._cl, m)) | 0),
            (this._dh = (this._dh + o + getCarry(this._dl, f)) | 0),
            (this._eh = (this._eh + l + getCarry(this._el, h)) | 0),
            (this._fh = (this._fh + i + getCarry(this._fl, g)) | 0),
            (this._gh = (this._gh + c + getCarry(this._gl, y)) | 0),
            (this._hh = (this._hh + u + getCarry(this._hl, S)) | 0)
        }),
        (Sha512.prototype._hash = function () {
          var e = o.allocUnsafe(64)
          function writeInt64BE(t, r, n) {
            e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4)
          }
          return (
            writeInt64BE(this._ah, this._al, 0),
            writeInt64BE(this._bh, this._bl, 8),
            writeInt64BE(this._ch, this._cl, 16),
            writeInt64BE(this._dh, this._dl, 24),
            writeInt64BE(this._eh, this._el, 32),
            writeInt64BE(this._fh, this._fl, 40),
            writeInt64BE(this._gh, this._gl, 48),
            writeInt64BE(this._hh, this._hl, 56),
            e
          )
        }),
        (e.exports = Sha512)
    },
    310: function (e, t, r) {
      e.exports = Stream
      var n = r(7).EventEmitter
      function Stream() {
        n.call(this)
      }
      r(698)(Stream, n),
        (Stream.Readable = r(412)),
        (Stream.Writable = r(708)),
        (Stream.Duplex = r(382)),
        (Stream.Transform = r(610)),
        (Stream.PassThrough = r(600)),
        (Stream.finished = r(238)),
        (Stream.pipeline = r(758)),
        (Stream.Stream = Stream),
        (Stream.prototype.pipe = function (e, t) {
          var r = this
          function ondata(t) {
            e.writable && !1 === e.write(t) && r.pause && r.pause()
          }
          function ondrain() {
            r.readable && r.resume && r.resume()
          }
          r.on('data', ondata),
            e.on('drain', ondrain),
            e._isStdio ||
              (t && !1 === t.end) ||
              (r.on('end', onend), r.on('close', onclose))
          var a = !1
          function onend() {
            a || ((a = !0), e.end())
          }
          function onclose() {
            a || ((a = !0), 'function' == typeof e.destroy && e.destroy())
          }
          function onerror(e) {
            if ((cleanup(), 0 === n.listenerCount(this, 'error'))) throw e
          }
          function cleanup() {
            r.removeListener('data', ondata),
              e.removeListener('drain', ondrain),
              r.removeListener('end', onend),
              r.removeListener('close', onclose),
              r.removeListener('error', onerror),
              e.removeListener('error', onerror),
              r.removeListener('end', cleanup),
              r.removeListener('close', cleanup),
              e.removeListener('close', cleanup)
          }
          return (
            r.on('error', onerror),
            e.on('error', onerror),
            r.on('end', cleanup),
            r.on('close', cleanup),
            e.on('close', cleanup),
            e.emit('pipe', r),
            e
          )
        })
    },
    141: function (e, t, r) {
      var n = r(861).Buffer,
        a =
          n.isEncoding ||
          function (e) {
            switch ((e = '' + e) && e.toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
              case 'raw':
                return !0
              default:
                return !1
            }
          }
      function StringDecoder(e) {
        var t
        switch (
          ((this.encoding = (function normalizeEncoding(e) {
            var t = (function _normalizeEncoding(e) {
              if (!e) return 'utf8'
              for (var t; ; )
                switch (e) {
                  case 'utf8':
                  case 'utf-8':
                    return 'utf8'
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 'utf16le'
                  case 'latin1':
                  case 'binary':
                    return 'latin1'
                  case 'base64':
                  case 'ascii':
                  case 'hex':
                    return e
                  default:
                    if (t) return
                    ;(e = ('' + e).toLowerCase()), (t = !0)
                }
            })(e)
            if ('string' != typeof t && (n.isEncoding === a || !a(e)))
              throw new Error('Unknown encoding: ' + e)
            return t || e
          })(e)),
          this.encoding)
        ) {
          case 'utf16le':
            ;(this.text = utf16Text), (this.end = utf16End), (t = 4)
            break
          case 'utf8':
            ;(this.fillLast = utf8FillLast), (t = 4)
            break
          case 'base64':
            ;(this.text = base64Text), (this.end = base64End), (t = 3)
            break
          default:
            return (this.write = simpleWrite), void (this.end = simpleEnd)
        }
        ;(this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = n.allocUnsafe(t))
      }
      function utf8CheckByte(e) {
        return e <= 127
          ? 0
          : e >> 5 == 6
          ? 2
          : e >> 4 == 14
          ? 3
          : e >> 3 == 30
          ? 4
          : e >> 6 == 2
          ? -1
          : -2
      }
      function utf8FillLast(e) {
        var t = this.lastTotal - this.lastNeed,
          r = (function utf8CheckExtraBytes(e, t, r) {
            if (128 != (192 & t[0])) return (e.lastNeed = 0), '�'
            if (e.lastNeed > 1 && t.length > 1) {
              if (128 != (192 & t[1])) return (e.lastNeed = 1), '�'
              if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                return (e.lastNeed = 2), '�'
            }
          })(this, e)
        return void 0 !== r
          ? r
          : this.lastNeed <= e.length
          ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length))
      }
      function utf16Text(e, t) {
        if ((e.length - t) % 2 == 0) {
          var r = e.toString('utf16le', t)
          if (r) {
            var n = r.charCodeAt(r.length - 1)
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1]),
                r.slice(0, -1)
              )
          }
          return r
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = e[e.length - 1]),
          e.toString('utf16le', t, e.length - 1)
        )
      }
      function utf16End(e) {
        var t = e && e.length ? this.write(e) : ''
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed
          return t + this.lastChar.toString('utf16le', 0, r)
        }
        return t
      }
      function base64Text(e, t) {
        var r = (e.length - t) % 3
        return 0 === r
          ? e.toString('base64', t)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = e[e.length - 1])
              : ((this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1])),
            e.toString('base64', t, e.length - r))
      }
      function base64End(e) {
        var t = e && e.length ? this.write(e) : ''
        return this.lastNeed
          ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
          : t
      }
      function simpleWrite(e) {
        return e.toString(this.encoding)
      }
      function simpleEnd(e) {
        return e && e.length ? this.write(e) : ''
      }
      ;(t.I = StringDecoder),
        (StringDecoder.prototype.write = function (e) {
          if (0 === e.length) return ''
          var t, r
          if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return ''
            ;(r = this.lastNeed), (this.lastNeed = 0)
          } else r = 0
          return r < e.length
            ? t
              ? t + this.text(e, r)
              : this.text(e, r)
            : t || ''
        }),
        (StringDecoder.prototype.end = function utf8End(e) {
          var t = e && e.length ? this.write(e) : ''
          return this.lastNeed ? t + '�' : t
        }),
        (StringDecoder.prototype.text = function utf8Text(e, t) {
          var r = (function utf8CheckIncomplete(e, t, r) {
            var n = t.length - 1
            if (n < r) return 0
            var a = utf8CheckByte(t[n])
            if (a >= 0) return a > 0 && (e.lastNeed = a - 1), a
            if (--n < r || -2 === a) return 0
            if (((a = utf8CheckByte(t[n])), a >= 0))
              return a > 0 && (e.lastNeed = a - 2), a
            if (--n < r || -2 === a) return 0
            if (((a = utf8CheckByte(t[n])), a >= 0))
              return a > 0 && (2 === a ? (a = 0) : (e.lastNeed = a - 3)), a
            return 0
          })(this, e, t)
          if (!this.lastNeed) return e.toString('utf8', t)
          this.lastTotal = r
          var n = e.length - (r - this.lastNeed)
          return e.copy(this.lastChar, 0, n), e.toString('utf8', t, n)
        }),
        (StringDecoder.prototype.fillLast = function (e) {
          if (this.lastNeed <= e.length)
            return (
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed,
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            )
          e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            (this.lastNeed -= e.length)
        })
    },
    643: function (e, t, r) {
      function config(e) {
        try {
          if (!r.g.localStorage) return !1
        } catch (e) {
          return !1
        }
        var t = r.g.localStorage[e]
        return null != t && 'true' === String(t).toLowerCase()
      }
      e.exports = function deprecate(e, t) {
        if (config('noDeprecation')) return e
        var r = !1
        return function deprecated() {
          if (!r) {
            if (config('throwDeprecation')) throw new Error(t)
            config('traceDeprecation') ? console.trace(t) : console.warn(t),
              (r = !0)
          }
          return e.apply(this, arguments)
        }
      }
    },
    499: function (e) {
      var t = {
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;',
        '<': '&lt;',
        '>': '&gt;',
      }
      e.exports = function escapeForXML(e) {
        return e && e.replace
          ? e.replace(/([&"<>'])/g, function (e, r) {
              return t[r]
            })
          : e
      }
    },
    123: function (e, t, r) {
      var n = r(606),
        a = r(499),
        o = r(310).Stream
      function resolve(e, t, r) {
        var n,
          o = (function create_indent(e, t) {
            return new Array(t || 0).join(e || '')
          })(t, (r = r || 0)),
          s = e
        if ('object' == typeof e && (s = e[(n = Object.keys(e)[0])]) && s._elem)
          return (
            (s._elem.name = n),
            (s._elem.icount = r),
            (s._elem.indent = t),
            (s._elem.indents = o),
            (s._elem.interrupt = s),
            s._elem
          )
        var l,
          i = [],
          c = []
        function get_attributes(e) {
          Object.keys(e).forEach(function (t) {
            i.push(
              (function attribute(e, t) {
                return e + '="' + a(t) + '"'
              })(t, e[t]),
            )
          })
        }
        switch (typeof s) {
          case 'object':
            if (null === s) break
            s._attr && get_attributes(s._attr),
              s._cdata &&
                c.push(
                  ('<![CDATA[' + s._cdata).replace(
                    /\]\]>/g,
                    ']]]]><![CDATA[>',
                  ) + ']]>',
                ),
              s.forEach &&
                ((l = !1),
                c.push(''),
                s.forEach(function (e) {
                  'object' == typeof e
                    ? '_attr' == Object.keys(e)[0]
                      ? get_attributes(e._attr)
                      : c.push(resolve(e, t, r + 1))
                    : (c.pop(), (l = !0), c.push(a(e)))
                }),
                l || c.push(''))
            break
          default:
            c.push(a(s))
        }
        return {
          name: n,
          interrupt: !1,
          attributes: i,
          content: c,
          icount: r,
          indents: o,
          indent: t,
        }
      }
      function format(e, t, r) {
        if ('object' != typeof t) return e(!1, t)
        var n = t.interrupt ? 1 : t.content.length
        function proceed() {
          for (; t.content.length; ) {
            var a = t.content.shift()
            if (void 0 !== a) {
              if (interrupt(a)) return
              format(e, a)
            }
          }
          e(
            !1,
            (n > 1 ? t.indents : '') +
              (t.name ? '</' + t.name + '>' : '') +
              (t.indent && !r ? '\n' : ''),
          ),
            r && r()
        }
        function interrupt(t) {
          return (
            !!t.interrupt &&
            ((t.interrupt.append = e),
            (t.interrupt.end = proceed),
            (t.interrupt = !1),
            e(!0),
            !0)
          )
        }
        if (
          (e(
            !1,
            t.indents +
              (t.name ? '<' + t.name : '') +
              (t.attributes.length ? ' ' + t.attributes.join(' ') : '') +
              (n ? (t.name ? '>' : '') : t.name ? '/>' : '') +
              (t.indent && n > 1 ? '\n' : ''),
          ),
          !n)
        )
          return e(!1, t.indent ? '\n' : '')
        interrupt(t) || proceed()
      }
      ;(e.exports = function xml(e, t) {
        'object' != typeof t && (t = { indent: t })
        var r = t.stream ? new o() : null,
          a = '',
          s = !1,
          l = t.indent ? (!0 === t.indent ? '    ' : t.indent) : '',
          i = !0
        function delay(e) {
          i ? n.nextTick(e) : e()
        }
        function append(e, t) {
          if (
            (void 0 !== t && (a += t),
            e && !s && ((r = r || new o()), (s = !0)),
            e && s)
          ) {
            var n = a
            delay(function () {
              r.emit('data', n)
            }),
              (a = '')
          }
        }
        function add(e, t) {
          format(append, resolve(e, l, l ? 1 : 0), t)
        }
        function end() {
          if (r) {
            var e = a
            delay(function () {
              r.emit('data', e),
                r.emit('end'),
                (r.readable = !1),
                r.emit('close')
            })
          }
        }
        return (
          delay(function () {
            i = !1
          }),
          t.declaration &&
            (function addXmlDeclaration(e) {
              var t = { version: '1.0', encoding: e.encoding || 'UTF-8' }
              e.standalone && (t.standalone = e.standalone),
                add({ '?xml': { _attr: t } }),
                (a = a.replace('/>', '?>'))
            })(t.declaration),
          e && e.forEach
            ? e.forEach(function (t, r) {
                var n
                r + 1 === e.length && (n = end), add(t, n)
              })
            : add(e, end),
          r ? ((r.readable = !0), r) : a
        )
      }),
        (e.exports.element = e.exports.Element =
          function element() {
            var e = {
              _elem: resolve(Array.prototype.slice.call(arguments)),
              push: function (e) {
                if (!this.append) throw new Error('not assigned to a parent!')
                var t = this,
                  r = this._elem.indent
                format(
                  this.append,
                  resolve(e, r, this._elem.icount + (r ? 1 : 0)),
                  function () {
                    t.append(!0)
                  },
                )
              },
              close: function (e) {
                void 0 !== e && this.push(e), this.end && this.end()
              },
            }
            return e
          })
    },
    987: function (t) {
      t.exports = e
    },
    362: function (e) {
      e.exports = t
    },
    340: function () {},
    838: function () {},
  },
  xe = {}
function __webpack_require__(e) {
  var t = xe[e]
  if (void 0 !== t) return t.exports
  var r = (xe[e] = { exports: {} })
  return Ce[e](r, r.exports, __webpack_require__), r.exports
}
;(__webpack_require__.n = function (e) {
  var t =
    e && e.__esModule
      ? function () {
          return e.default
        }
      : function () {
          return e
        }
  return __webpack_require__.d(t, { a: t }), t
}),
  (__webpack_require__.d = function (e, t) {
    for (var r in t)
      __webpack_require__.o(t, r) &&
        !__webpack_require__.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
  }),
  (__webpack_require__.g = (function () {
    if ('object' == typeof globalThis) return globalThis
    try {
      return this || new Function('return this')()
    } catch (e) {
      if ('object' == typeof window) return window
    }
  })()),
  (__webpack_require__.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }),
  (__webpack_require__.r = function (e) {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 })
  })
var Oe = {}
__webpack_require__.d(Oe, {
  A: function () {
    return nl
  },
})
var ke = {}
__webpack_require__.r(ke),
  __webpack_require__.d(ke, {
    CLEAR: function () {
      return ct
    },
    CLEAR_BY: function () {
      return ut
    },
    NEW_AUTH_ERR: function () {
      return it
    },
    NEW_SPEC_ERR: function () {
      return st
    },
    NEW_SPEC_ERR_BATCH: function () {
      return lt
    },
    NEW_THROWN_ERR: function () {
      return at
    },
    NEW_THROWN_ERR_BATCH: function () {
      return ot
    },
    clear: function () {
      return clear
    },
    clearBy: function () {
      return clearBy
    },
    newAuthErr: function () {
      return newAuthErr
    },
    newSpecErr: function () {
      return newSpecErr
    },
    newSpecErrBatch: function () {
      return newSpecErrBatch
    },
    newThrownErr: function () {
      return newThrownErr
    },
    newThrownErrBatch: function () {
      return newThrownErrBatch
    },
  })
var Ne = {}
__webpack_require__.r(Ne),
  __webpack_require__.d(Ne, {
    AUTHORIZE: function () {
      return Rt
    },
    AUTHORIZE_OAUTH2: function () {
      return jt
    },
    CONFIGURE_AUTH: function () {
      return Mt
    },
    LOGOUT: function () {
      return Tt
    },
    PRE_AUTHORIZE_OAUTH2: function () {
      return Bt
    },
    RESTORE_AUTHORIZATION: function () {
      return qt
    },
    SHOW_AUTH_POPUP: function () {
      return It
    },
    VALIDATE: function () {
      return Pt
    },
    authPopup: function () {
      return authPopup
    },
    authorize: function () {
      return authorize
    },
    authorizeAccessCodeWithBasicAuthentication: function () {
      return authorizeAccessCodeWithBasicAuthentication
    },
    authorizeAccessCodeWithFormParams: function () {
      return authorizeAccessCodeWithFormParams
    },
    authorizeApplication: function () {
      return authorizeApplication
    },
    authorizeOauth2: function () {
      return authorizeOauth2
    },
    authorizeOauth2WithPersistOption: function () {
      return authorizeOauth2WithPersistOption
    },
    authorizePassword: function () {
      return authorizePassword
    },
    authorizeRequest: function () {
      return authorizeRequest
    },
    authorizeWithPersistOption: function () {
      return authorizeWithPersistOption
    },
    configureAuth: function () {
      return configureAuth
    },
    logout: function () {
      return logout
    },
    logoutWithPersistOption: function () {
      return logoutWithPersistOption
    },
    persistAuthorizationIfNeeded: function () {
      return persistAuthorizationIfNeeded
    },
    preAuthorizeImplicit: function () {
      return preAuthorizeImplicit
    },
    restoreAuthorization: function () {
      return restoreAuthorization
    },
    showDefinitions: function () {
      return showDefinitions
    },
  })
var Ae = {}
__webpack_require__.r(Ae),
  __webpack_require__.d(Ae, {
    authorized: function () {
      return Jt
    },
    definitionsForRequirements: function () {
      return definitionsForRequirements
    },
    definitionsToAuthorize: function () {
      return $t
    },
    getConfigs: function () {
      return Vt
    },
    getDefinitionsByNames: function () {
      return getDefinitionsByNames
    },
    isAuthorized: function () {
      return isAuthorized
    },
    shownDefinitions: function () {
      return Ut
    },
  })
var Ie = {}
__webpack_require__.r(Ie),
  __webpack_require__.d(Ie, {
    TOGGLE_CONFIGS: function () {
      return Xt
    },
    UPDATE_CONFIGS: function () {
      return Gt
    },
    downloadConfig: function () {
      return downloadConfig
    },
    getConfigByUrl: function () {
      return getConfigByUrl
    },
    loaded: function () {
      return actions_loaded
    },
    toggle: function () {
      return toggle
    },
    update: function () {
      return update
    },
  })
var Re = {}
__webpack_require__.r(Re),
  __webpack_require__.d(Re, {
    get: function () {
      return get
    },
  })
var Te = {}
__webpack_require__.r(Te),
  __webpack_require__.d(Te, {
    transform: function () {
      return transform
    },
  })
var Be = {}
__webpack_require__.r(Be),
  __webpack_require__.d(Be, {
    transform: function () {
      return parameter_oneof_transform
    },
  })
var je = {}
__webpack_require__.r(je),
  __webpack_require__.d(je, {
    allErrors: function () {
      return lr
    },
    lastError: function () {
      return ir
    },
  })
var Pe = {}
__webpack_require__.r(Pe),
  __webpack_require__.d(Pe, {
    SHOW: function () {
      return mr
    },
    UPDATE_FILTER: function () {
      return dr
    },
    UPDATE_LAYOUT: function () {
      return ur
    },
    UPDATE_MODE: function () {
      return pr
    },
    changeMode: function () {
      return changeMode
    },
    show: function () {
      return actions_show
    },
    updateFilter: function () {
      return updateFilter
    },
    updateLayout: function () {
      return updateLayout
    },
  })
var Me = {}
__webpack_require__.r(Me),
  __webpack_require__.d(Me, {
    current: function () {
      return current
    },
    currentFilter: function () {
      return currentFilter
    },
    isShown: function () {
      return isShown
    },
    showSummary: function () {
      return hr
    },
    whatMode: function () {
      return whatMode
    },
  })
var qe = {}
__webpack_require__.r(qe),
  __webpack_require__.d(qe, {
    taggedOperations: function () {
      return taggedOperations
    },
  })
var Le = {}
__webpack_require__.r(Le),
  __webpack_require__.d(Le, {
    requestSnippetGenerator_curl_bash: function () {
      return requestSnippetGenerator_curl_bash
    },
    requestSnippetGenerator_curl_cmd: function () {
      return requestSnippetGenerator_curl_cmd
    },
    requestSnippetGenerator_curl_powershell: function () {
      return requestSnippetGenerator_curl_powershell
    },
  })
var De = {}
__webpack_require__.r(De),
  __webpack_require__.d(De, {
    getActiveLanguage: function () {
      return Er
    },
    getDefaultExpanded: function () {
      return Sr
    },
    getGenerators: function () {
      return yr
    },
    getSnippetGenerators: function () {
      return getSnippetGenerators
    },
  })
var Ue = {}
__webpack_require__.r(Ue),
  __webpack_require__.d(Ue, {
    JsonSchemaArrayItemFile: function () {
      return JsonSchemaArrayItemFile
    },
    JsonSchemaArrayItemText: function () {
      return JsonSchemaArrayItemText
    },
    JsonSchemaForm: function () {
      return JsonSchemaForm
    },
    JsonSchema_array: function () {
      return JsonSchema_array
    },
    JsonSchema_boolean: function () {
      return JsonSchema_boolean
    },
    JsonSchema_object: function () {
      return JsonSchema_object
    },
    JsonSchema_string: function () {
      return JsonSchema_string
    },
  })
var $e = {}
__webpack_require__.r($e),
  __webpack_require__.d($e, {
    allowTryItOutFor: function () {
      return allowTryItOutFor
    },
    basePath: function () {
      return pn
    },
    canExecuteScheme: function () {
      return canExecuteScheme
    },
    consumes: function () {
      return sn
    },
    consumesOptionsFor: function () {
      return consumesOptionsFor
    },
    contentTypeValues: function () {
      return contentTypeValues
    },
    currentProducesFor: function () {
      return currentProducesFor
    },
    definitions: function () {
      return dn
    },
    externalDocs: function () {
      return en
    },
    findDefinition: function () {
      return findDefinition
    },
    getOAS3RequiredRequestBodyContentType: function () {
      return getOAS3RequiredRequestBodyContentType
    },
    getParameter: function () {
      return getParameter
    },
    hasHost: function () {
      return vn
    },
    host: function () {
      return mn
    },
    info: function () {
      return Zr
    },
    isMediaTypeSchemaPropertiesEqual: function () {
      return isMediaTypeSchemaPropertiesEqual
    },
    isOAS3: function () {
      return Qr
    },
    lastError: function () {
      return Kr
    },
    mutatedRequestFor: function () {
      return mutatedRequestFor
    },
    mutatedRequests: function () {
      return _n
    },
    operationScheme: function () {
      return operationScheme
    },
    operationWithMeta: function () {
      return operationWithMeta
    },
    operations: function () {
      return on
    },
    operationsWithRootInherited: function () {
      return hn
    },
    operationsWithTags: function () {
      return yn
    },
    parameterInclusionSettingFor: function () {
      return parameterInclusionSettingFor
    },
    parameterValues: function () {
      return parameterValues
    },
    parameterWithMeta: function () {
      return parameterWithMeta
    },
    parameterWithMetaByIdentity: function () {
      return parameterWithMetaByIdentity
    },
    parametersIncludeIn: function () {
      return parametersIncludeIn
    },
    parametersIncludeType: function () {
      return parametersIncludeType
    },
    paths: function () {
      return nn
    },
    produces: function () {
      return ln
    },
    producesOptionsFor: function () {
      return producesOptionsFor
    },
    requestFor: function () {
      return requestFor
    },
    requests: function () {
      return Sn
    },
    responseFor: function () {
      return responseFor
    },
    responses: function () {
      return En
    },
    schemes: function () {
      return fn
    },
    security: function () {
      return cn
    },
    securityDefinitions: function () {
      return un
    },
    semver: function () {
      return rn
    },
    spec: function () {
      return spec
    },
    specJS: function () {
      return Gr
    },
    specJson: function () {
      return Hr
    },
    specJsonWithResolvedSubtrees: function () {
      return Yr
    },
    specResolved: function () {
      return Xr
    },
    specResolvedSubtree: function () {
      return specResolvedSubtree
    },
    specSource: function () {
      return Wr
    },
    specStr: function () {
      return Fr
    },
    tagDetails: function () {
      return tagDetails
    },
    taggedOperations: function () {
      return selectors_taggedOperations
    },
    tags: function () {
      return gn
    },
    url: function () {
      return zr
    },
    validOperationMethods: function () {
      return an
    },
    validateBeforeExecute: function () {
      return validateBeforeExecute
    },
    validationErrors: function () {
      return validationErrors
    },
    version: function () {
      return tn
    },
  })
var Je = {}
__webpack_require__.r(Je),
  __webpack_require__.d(Je, {
    CLEAR_REQUEST: function () {
      return qn
    },
    CLEAR_RESPONSE: function () {
      return Mn
    },
    CLEAR_VALIDATE_PARAMS: function () {
      return Ln
    },
    LOG_REQUEST: function () {
      return Pn
    },
    SET_MUTATED_REQUEST: function () {
      return jn
    },
    SET_REQUEST: function () {
      return Bn
    },
    SET_RESPONSE: function () {
      return Tn
    },
    SET_SCHEME: function () {
      return Jn
    },
    UPDATE_EMPTY_PARAM_INCLUSION: function () {
      return In
    },
    UPDATE_JSON: function () {
      return Nn
    },
    UPDATE_OPERATION_META_VALUE: function () {
      return Dn
    },
    UPDATE_PARAM: function () {
      return An
    },
    UPDATE_RESOLVED: function () {
      return Un
    },
    UPDATE_RESOLVED_SUBTREE: function () {
      return $n
    },
    UPDATE_SPEC: function () {
      return On
    },
    UPDATE_URL: function () {
      return kn
    },
    VALIDATE_PARAMS: function () {
      return Rn
    },
    changeConsumesValue: function () {
      return changeConsumesValue
    },
    changeParam: function () {
      return changeParam
    },
    changeParamByIdentity: function () {
      return changeParamByIdentity
    },
    changeProducesValue: function () {
      return changeProducesValue
    },
    clearRequest: function () {
      return clearRequest
    },
    clearResponse: function () {
      return clearResponse
    },
    clearValidateParams: function () {
      return clearValidateParams
    },
    execute: function () {
      return actions_execute
    },
    executeRequest: function () {
      return executeRequest
    },
    invalidateResolvedSubtreeCache: function () {
      return invalidateResolvedSubtreeCache
    },
    logRequest: function () {
      return logRequest
    },
    parseToJson: function () {
      return parseToJson
    },
    requestResolvedSubtree: function () {
      return requestResolvedSubtree
    },
    resolveSpec: function () {
      return resolveSpec
    },
    setMutatedRequest: function () {
      return setMutatedRequest
    },
    setRequest: function () {
      return setRequest
    },
    setResponse: function () {
      return setResponse
    },
    setScheme: function () {
      return setScheme
    },
    updateEmptyParamInclusion: function () {
      return updateEmptyParamInclusion
    },
    updateJsonSpec: function () {
      return updateJsonSpec
    },
    updateResolved: function () {
      return updateResolved
    },
    updateResolvedSubtree: function () {
      return updateResolvedSubtree
    },
    updateSpec: function () {
      return updateSpec
    },
    updateUrl: function () {
      return updateUrl
    },
    validateParams: function () {
      return validateParams
    },
  })
var Ve = {}
__webpack_require__.r(Ve),
  __webpack_require__.d(Ve, {
    executeRequest: function () {
      return wrap_actions_executeRequest
    },
    updateJsonSpec: function () {
      return wrap_actions_updateJsonSpec
    },
    updateSpec: function () {
      return wrap_actions_updateSpec
    },
    validateParams: function () {
      return wrap_actions_validateParams
    },
  })
var Ke = {}
__webpack_require__.r(Ke),
  __webpack_require__.d(Ke, {
    Button: function () {
      return Button
    },
    Col: function () {
      return Col
    },
    Collapse: function () {
      return Collapse
    },
    Container: function () {
      return Container
    },
    Input: function () {
      return Input
    },
    Link: function () {
      return Link
    },
    Row: function () {
      return Row
    },
    Select: function () {
      return Select
    },
    TextArea: function () {
      return TextArea
    },
  })
var ze = {}
__webpack_require__.r(ze),
  __webpack_require__.d(ze, {
    basePath: function () {
      return Wa
    },
    consumes: function () {
      return Ha
    },
    definitions: function () {
      return Va
    },
    findDefinition: function () {
      return Ja
    },
    hasHost: function () {
      return Ka
    },
    host: function () {
      return Fa
    },
    produces: function () {
      return Ga
    },
    schemes: function () {
      return Xa
    },
    securityDefinitions: function () {
      return za
    },
    validOperationMethods: function () {
      return wrap_selectors_validOperationMethods
    },
  })
var Fe = {}
__webpack_require__.r(Fe),
  __webpack_require__.d(Fe, {
    definitionsToAuthorize: function () {
      return Ya
    },
  })
var We = {}
__webpack_require__.r(We),
  __webpack_require__.d(We, {
    callbacksOperations: function () {
      return eo
    },
    findSchema: function () {
      return findSchema
    },
    isOAS3: function () {
      return selectors_isOAS3
    },
    isOAS30: function () {
      return selectors_isOAS30
    },
    isSwagger2: function () {
      return selectors_isSwagger2
    },
    servers: function () {
      return Za
    },
  })
var He = {}
__webpack_require__.r(He),
  __webpack_require__.d(He, {
    CLEAR_REQUEST_BODY_VALIDATE_ERROR: function () {
      return vo
    },
    CLEAR_REQUEST_BODY_VALUE: function () {
      return bo
    },
    SET_REQUEST_BODY_VALIDATE_ERROR: function () {
      return _o
    },
    UPDATE_ACTIVE_EXAMPLES_MEMBER: function () {
      return go
    },
    UPDATE_REQUEST_BODY_INCLUSION: function () {
      return ho
    },
    UPDATE_REQUEST_BODY_VALUE: function () {
      return mo
    },
    UPDATE_REQUEST_BODY_VALUE_RETAIN_FLAG: function () {
      return fo
    },
    UPDATE_REQUEST_CONTENT_TYPE: function () {
      return yo
    },
    UPDATE_RESPONSE_CONTENT_TYPE: function () {
      return Eo
    },
    UPDATE_SELECTED_SERVER: function () {
      return po
    },
    UPDATE_SERVER_VARIABLE_VALUE: function () {
      return So
    },
    clearRequestBodyValidateError: function () {
      return clearRequestBodyValidateError
    },
    clearRequestBodyValue: function () {
      return clearRequestBodyValue
    },
    initRequestBodyValidateError: function () {
      return initRequestBodyValidateError
    },
    setActiveExamplesMember: function () {
      return setActiveExamplesMember
    },
    setRequestBodyInclusion: function () {
      return setRequestBodyInclusion
    },
    setRequestBodyValidateError: function () {
      return setRequestBodyValidateError
    },
    setRequestBodyValue: function () {
      return setRequestBodyValue
    },
    setRequestContentType: function () {
      return setRequestContentType
    },
    setResponseContentType: function () {
      return setResponseContentType
    },
    setRetainRequestBodyValueFlag: function () {
      return setRetainRequestBodyValueFlag
    },
    setSelectedServer: function () {
      return setSelectedServer
    },
    setServerVariableValue: function () {
      return setServerVariableValue
    },
  })
var Ge = {}
__webpack_require__.r(Ge),
  __webpack_require__.d(Ge, {
    activeExamplesMember: function () {
      return Io
    },
    hasUserEditedBody: function () {
      return ko
    },
    requestBodyErrors: function () {
      return Ao
    },
    requestBodyInclusionSetting: function () {
      return No
    },
    requestBodyValue: function () {
      return xo
    },
    requestContentType: function () {
      return Ro
    },
    responseContentType: function () {
      return To
    },
    selectDefaultRequestBodyValue: function () {
      return selectDefaultRequestBodyValue
    },
    selectedServer: function () {
      return Co
    },
    serverEffectiveValue: function () {
      return Po
    },
    serverVariableValue: function () {
      return Bo
    },
    serverVariables: function () {
      return jo
    },
    shouldRetainRequestBodyValue: function () {
      return Oo
    },
    validOperationMethods: function () {
      return qo
    },
    validateBeforeExecute: function () {
      return Mo
    },
    validateShallowRequired: function () {
      return validateShallowRequired
    },
  })
var Xe = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    Component: function () {
      return r.Component
    },
    PureComponent: function () {
      return r.PureComponent
    },
    createContext: function () {
      return r.createContext
    },
    createElement: function () {
      return r.createElement
    },
    default: function () {
      return r.default
    },
    forwardRef: function () {
      return r.forwardRef
    },
    useCallback: function () {
      return r.useCallback
    },
    useContext: function () {
      return r.useContext
    },
    useEffect: function () {
      return r.useEffect
    },
    useMemo: function () {
      return r.useMemo
    },
    useRef: function () {
      return r.useRef
    },
    useState: function () {
      return r.useState
    },
  }),
  Ye = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    applyMiddleware: function () {
      return n.applyMiddleware
    },
    bindActionCreators: function () {
      return n.bindActionCreators
    },
    compose: function () {
      return n.compose
    },
    createStore: function () {
      return n.createStore
    },
  }),
  Qe = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    List: function () {
      return a.List
    },
    Map: function () {
      return a.Map
    },
    OrderedMap: function () {
      return a.OrderedMap
    },
    Seq: function () {
      return a.Seq
    },
    Set: function () {
      return a.Set
    },
    default: function () {
      return a.default
    },
    fromJS: function () {
      return a.fromJS
    },
  }),
  Ze = __webpack_require__(919),
  et = __webpack_require__.n(Ze),
  tt = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    combineReducers: function () {
      return o.combineReducers
    },
  }),
  rt = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    serializeError: function () {
      return s.serializeError
    },
  }),
  nt = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return l.default
    },
  })
const at = 'err_new_thrown_err',
  ot = 'err_new_thrown_err_batch',
  st = 'err_new_spec_err',
  lt = 'err_new_spec_err_batch',
  it = 'err_new_auth_err',
  ct = 'err_clear',
  ut = 'err_clear_by'
function newThrownErr(e) {
  return { type: at, payload: (0, rt.serializeError)(e) }
}
function newThrownErrBatch(e) {
  return { type: ot, payload: e }
}
function newSpecErr(e) {
  return { type: st, payload: e }
}
function newSpecErrBatch(e) {
  return { type: lt, payload: e }
}
function newAuthErr(e) {
  return { type: it, payload: e }
}
function clear(e = {}) {
  return { type: ct, payload: e }
}
function clearBy(e = () => !0) {
  return { type: ut, payload: e }
}
var dt = (function makeWindow() {
    var e = {
      location: {},
      history: {},
      open: () => {},
      close: () => {},
      File: function () {},
      FormData: function () {},
    }
    if ('undefined' == typeof window) return e
    try {
      e = window
      for (var t of ['File', 'Blob', 'FormData'])
        t in window && (e[t] = window[t])
    } catch (e) {
      console.error(e)
    }
    return e
  })(),
  pt = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    sanitizeUrl: function () {
      return i.sanitizeUrl
    },
  }),
  mt =
    ((function (e) {
      var t = {}
      __webpack_require__.d(t, e)
    })({}),
    (function (e) {
      var t = {}
      __webpack_require__.d(t, e)
    })({}),
    (function (e) {
      var t = {}
      return __webpack_require__.d(t, e), t
    })({
      default: function () {
        return d.default
      },
    })),
  ht = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return p.default
    },
  }),
  gt = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return m.default
    },
  }),
  yt = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return f.default
    },
  }),
  Et = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return h.default
    },
  }),
  St = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return g.default
    },
  }),
  _t = __webpack_require__(209),
  vt = __webpack_require__.n(_t),
  bt = __webpack_require__(802),
  wt = __webpack_require__.n(bt)
const Ct = Qe.default.Set.of(
  'type',
  'format',
  'items',
  'default',
  'maximum',
  'exclusiveMaximum',
  'minimum',
  'exclusiveMinimum',
  'maxLength',
  'minLength',
  'pattern',
  'maxItems',
  'minItems',
  'uniqueItems',
  'enum',
  'multipleOf',
)
function getParameterSchema(e, { isOAS3: t } = {}) {
  if (!Qe.default.Map.isMap(e))
    return { schema: Qe.default.Map(), parameterContentMediaType: null }
  if (!t)
    return 'body' === e.get('in')
      ? {
          schema: e.get('schema', Qe.default.Map()),
          parameterContentMediaType: null,
        }
      : {
          schema: e.filter((e, t) => Ct.includes(t)),
          parameterContentMediaType: null,
        }
  if (e.get('content')) {
    const t = e.get('content', Qe.default.Map({})).keySeq().first()
    return {
      schema: e.getIn(['content', t, 'schema'], Qe.default.Map()),
      parameterContentMediaType: t,
    }
  }
  return {
    schema: e.get('schema')
      ? e.get('schema', Qe.default.Map())
      : Qe.default.Map(),
    parameterContentMediaType: null,
  }
}
var xt = __webpack_require__(287).Buffer
const Ot = 'default',
  isImmutable = e => Qe.default.Iterable.isIterable(e)
function objectify(e) {
  return isObject(e) ? (isImmutable(e) ? e.toJS() : e) : {}
}
function fromJSOrdered(e) {
  if (isImmutable(e)) return e
  if (e instanceof dt.File) return e
  if (!isObject(e)) return e
  if (Array.isArray(e)) return Qe.default.Seq(e).map(fromJSOrdered).toList()
  if ((0, Et.default)(e.entries)) {
    const t = (function createObjWithHashedKeys(e) {
      if (!(0, Et.default)(e.entries)) return e
      const t = {},
        r = '_**[]',
        n = {}
      for (let a of e.entries())
        if (t[a[0]] || (n[a[0]] && n[a[0]].containsMultiple)) {
          if (!n[a[0]]) {
            ;(n[a[0]] = { containsMultiple: !0, length: 1 }),
              (t[`${a[0]}${r}${n[a[0]].length}`] = t[a[0]]),
              delete t[a[0]]
          }
          ;(n[a[0]].length += 1), (t[`${a[0]}${r}${n[a[0]].length}`] = a[1])
        } else t[a[0]] = a[1]
      return t
    })(e)
    return Qe.default.OrderedMap(t).map(fromJSOrdered)
  }
  return Qe.default.OrderedMap(e).map(fromJSOrdered)
}
function normalizeArray(e) {
  return Array.isArray(e) ? e : [e]
}
function isFn(e) {
  return 'function' == typeof e
}
function isObject(e) {
  return !!e && 'object' == typeof e
}
function isFunc(e) {
  return 'function' == typeof e
}
function isArray(e) {
  return Array.isArray(e)
}
const kt = mt.default
function objMap(e, t) {
  return Object.keys(e).reduce((r, n) => ((r[n] = t(e[n], n)), r), {})
}
function objReduce(e, t) {
  return Object.keys(e).reduce((r, n) => {
    let a = t(e[n], n)
    return a && 'object' == typeof a && Object.assign(r, a), r
  }, {})
}
function systemThunkMiddleware(e) {
  return ({ dispatch: t, getState: r }) =>
    t =>
    r =>
      'function' == typeof r ? r(e()) : t(r)
}
function validateValueBySchema(e, t, r, n, a) {
  if (!t) return []
  let o = [],
    s = t.get('nullable'),
    l = t.get('required'),
    i = t.get('maximum'),
    c = t.get('minimum'),
    u = t.get('type'),
    d = t.get('format'),
    p = t.get('maxLength'),
    m = t.get('minLength'),
    f = t.get('uniqueItems'),
    h = t.get('maxItems'),
    g = t.get('minItems'),
    y = t.get('pattern')
  const S = r || !0 === l,
    _ = null != e,
    v = S || (_ && 'array' === u) || !(!S && !_),
    b = s && null === e
  if (S && !_ && !b && !n && !u)
    return o.push('Required field is not provided'), o
  if (b || !u || !v) return []
  let w = 'string' === u && e,
    C = 'array' === u && Array.isArray(e) && e.length,
    x = 'array' === u && Qe.default.List.isList(e) && e.count()
  const O = [
    w,
    C,
    x,
    'array' === u && 'string' == typeof e && e,
    'file' === u && e instanceof dt.File,
    'boolean' === u && (e || !1 === e),
    'number' === u && (e || 0 === e),
    'integer' === u && (e || 0 === e),
    'object' === u && 'object' == typeof e && null !== e,
    'object' === u && 'string' == typeof e && e,
  ].some(e => !!e)
  if (S && !O && !n) return o.push('Required field is not provided'), o
  if ('object' === u && (null === a || 'application/json' === a)) {
    let r = e
    if ('string' == typeof e)
      try {
        r = JSON.parse(e)
      } catch (e) {
        return o.push('Parameter string value must be valid JSON'), o
      }
    t &&
      t.has('required') &&
      isFunc(l.isList) &&
      l.isList() &&
      l.forEach(e => {
        void 0 === r[e] &&
          o.push({ propKey: e, error: 'Required property not found' })
      }),
      t &&
        t.has('properties') &&
        t.get('properties').forEach((e, t) => {
          const s = validateValueBySchema(r[t], e, !1, n, a)
          o.push(...s.map(e => ({ propKey: t, error: e })))
        })
  }
  if (y) {
    let t = ((e, t) => {
      if (!new RegExp(t).test(e)) return 'Value must follow pattern ' + t
    })(e, y)
    t && o.push(t)
  }
  if (g && 'array' === u) {
    let t = ((e, t) => {
      if ((!e && t >= 1) || (e && e.length < t))
        return `Array must contain at least ${t} item${1 === t ? '' : 's'}`
    })(e, g)
    t && o.push(t)
  }
  if (h && 'array' === u) {
    let t = ((e, t) => {
      if (e && e.length > t)
        return `Array must not contain more then ${t} item${1 === t ? '' : 's'}`
    })(e, h)
    t && o.push({ needRemove: !0, error: t })
  }
  if (f && 'array' === u) {
    let t = ((e, t) => {
      if (e && ('true' === t || !0 === t)) {
        const t = (0, Qe.fromJS)(e),
          r = t.toSet()
        if (e.length > r.size) {
          let e = (0, Qe.Set)()
          if (
            (t.forEach((r, n) => {
              t.filter(e => (isFunc(e.equals) ? e.equals(r) : e === r)).size >
                1 && (e = e.add(n))
            }),
            0 !== e.size)
          )
            return e
              .map(e => ({ index: e, error: 'No duplicates allowed.' }))
              .toArray()
        }
      }
    })(e, f)
    t && o.push(...t)
  }
  if (p || 0 === p) {
    let t = ((e, t) => {
      if (e.length > t)
        return `Value must be no longer than ${t} character${
          1 !== t ? 's' : ''
        }`
    })(e, p)
    t && o.push(t)
  }
  if (m) {
    let t = ((e, t) => {
      if (e.length < t)
        return `Value must be at least ${t} character${1 !== t ? 's' : ''}`
    })(e, m)
    t && o.push(t)
  }
  if (i || 0 === i) {
    let t = ((e, t) => {
      if (e > t) return `Value must be less than ${t}`
    })(e, i)
    t && o.push(t)
  }
  if (c || 0 === c) {
    let t = ((e, t) => {
      if (e < t) return `Value must be greater than ${t}`
    })(e, c)
    t && o.push(t)
  }
  if ('string' === u) {
    let t
    if (
      ((t =
        'date-time' === d
          ? (e => {
              if (isNaN(Date.parse(e))) return 'Value must be a DateTime'
            })(e)
          : 'uuid' === d
          ? (e => {
              if (
                ((e = e.toString().toLowerCase()),
                !/^[{(]?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}[)}]?$/.test(
                  e,
                ))
              )
                return 'Value must be a Guid'
            })(e)
          : (e => {
              if (e && 'string' != typeof e) return 'Value must be a string'
            })(e)),
      !t)
    )
      return o
    o.push(t)
  } else if ('boolean' === u) {
    let t = (e => {
      if ('true' !== e && 'false' !== e && !0 !== e && !1 !== e)
        return 'Value must be a boolean'
    })(e)
    if (!t) return o
    o.push(t)
  } else if ('number' === u) {
    let t = (e => {
      if (!/^-?\d+(\.?\d+)?$/.test(e)) return 'Value must be a number'
    })(e)
    if (!t) return o
    o.push(t)
  } else if ('integer' === u) {
    let t = (e => {
      if (!/^-?\d+$/.test(e)) return 'Value must be an integer'
    })(e)
    if (!t) return o
    o.push(t)
  } else if ('array' === u) {
    if (!C && !x) return o
    e &&
      e.forEach((e, r) => {
        const s = validateValueBySchema(e, t.get('items'), !1, n, a)
        o.push(...s.map(e => ({ index: r, error: e })))
      })
  } else if ('file' === u) {
    let t = (e => {
      if (e && !(e instanceof dt.File)) return 'Value must be a file'
    })(e)
    if (!t) return o
    o.push(t)
  }
  return o
}
const btoa = e => {
    let t
    return (
      (t = e instanceof xt ? e : xt.from(e.toString(), 'utf-8')),
      t.toString('base64')
    )
  },
  Nt = {
    operationsSorter: {
      alpha: (e, t) => e.get('path').localeCompare(t.get('path')),
      method: (e, t) => e.get('method').localeCompare(t.get('method')),
    },
    tagsSorter: { alpha: (e, t) => e.localeCompare(t) },
  },
  buildFormData = e => {
    let t = []
    for (let r in e) {
      let n = e[r]
      void 0 !== n &&
        '' !== n &&
        t.push([r, '=', encodeURIComponent(n).replace(/%20/g, '+')].join(''))
    }
    return t.join('&')
  },
  shallowEqualKeys = (e, t, r) =>
    !!(0, ht.default)(r, r => (0, yt.default)(e[r], t[r]))
function sanitizeUrl(e) {
  return 'string' != typeof e || '' === e ? '' : (0, pt.sanitizeUrl)(e)
}
function requiresValidationURL(e) {
  return !(
    !e ||
    e.indexOf('localhost') >= 0 ||
    e.indexOf('127.0.0.1') >= 0 ||
    'none' === e
  )
}
const createDeepLinkPath = e =>
    'string' == typeof e || e instanceof String
      ? e.trim().replace(/\s/g, '%20')
      : '',
  escapeDeepLinkPath = e =>
    (0, St.default)(createDeepLinkPath(e).replace(/%20/g, '_')),
  getExtensions = e => e.filter((e, t) => /^x-/.test(t)),
  getCommonExtensions = e =>
    e.filter((e, t) => /^pattern|maxLength|minLength|maximum|minimum/.test(t))
function deeplyStripKey(e, t, r = () => !0) {
  if ('object' != typeof e || Array.isArray(e) || null === e || !t) return e
  const n = Object.assign({}, e)
  return (
    Object.keys(n).forEach(e => {
      e === t && r(n[e], e) ? delete n[e] : (n[e] = deeplyStripKey(n[e], t, r))
    }),
    n
  )
}
function stringify(e) {
  if ('string' == typeof e) return e
  if ((e && e.toJS && (e = e.toJS()), 'object' == typeof e && null !== e))
    try {
      return JSON.stringify(e, null, 2)
    } catch (t) {
      return String(e)
    }
  return null == e ? '' : e.toString()
}
function paramToIdentifier(e, { returnAll: t = !1, allowHashes: r = !0 } = {}) {
  if (!Qe.default.Map.isMap(e))
    throw new Error(
      'paramToIdentifier: received a non-Im.Map parameter as input',
    )
  const n = e.get('name'),
    a = e.get('in')
  let o = []
  return (
    e && e.hashCode && a && n && r && o.push(`${a}.${n}.hash-${e.hashCode()}`),
    a && n && o.push(`${a}.${n}`),
    o.push(n),
    t ? o : o[0] || ''
  )
}
function paramToValue(e, t) {
  return paramToIdentifier(e, { returnAll: !0 })
    .map(e => t[e])
    .filter(e => void 0 !== e)[0]
}
function b64toB64UrlEncoded(e) {
  return e.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}
const isEmptyValue = e => !e || !(!isImmutable(e) || !e.isEmpty()),
  idFn = e => e
class Store {
  constructor(e = {}) {
    et()(
      this,
      {
        state: {},
        plugins: [],
        system: {
          configs: {},
          fn: {},
          components: {},
          rootInjects: {},
          statePlugins: {},
        },
        boundSystem: {},
        toolbox: {},
      },
      e,
    ),
      (this.getSystem = this._getSystem.bind(this)),
      (this.store = (function configureStore(e, t, r) {
        return (function createStoreWithMiddleware(e, t, r) {
          let n = [systemThunkMiddleware(r)]
          const a = dt.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Ye.compose
          return (0, Ye.createStore)(e, t, a((0, Ye.applyMiddleware)(...n)))
        })(e, t, r)
      })(idFn, (0, Qe.fromJS)(this.state), this.getSystem)),
      this.buildSystem(!1),
      this.register(this.plugins)
  }
  getStore() {
    return this.store
  }
  register(e, t = !0) {
    var r = combinePlugins(e, this.getSystem())
    systemExtend(this.system, r), t && this.buildSystem()
    callAfterLoad.call(this.system, e, this.getSystem()) && this.buildSystem()
  }
  buildSystem(e = !0) {
    let t = this.getStore().dispatch,
      r = this.getStore().getState
    ;(this.boundSystem = Object.assign(
      {},
      this.getRootInjects(),
      this.getWrappedAndBoundActions(t),
      this.getWrappedAndBoundSelectors(r, this.getSystem),
      this.getStateThunks(r),
      this.getFn(),
      this.getConfigs(),
    )),
      e && this.rebuildReducer()
  }
  _getSystem() {
    return this.boundSystem
  }
  getRootInjects() {
    return Object.assign(
      {
        getSystem: this.getSystem,
        getStore: this.getStore.bind(this),
        getComponents: this.getComponents.bind(this),
        getState: this.getStore().getState,
        getConfigs: this._getConfigs.bind(this),
        Im: Qe.default,
        React: Xe.default,
      },
      this.system.rootInjects || {},
    )
  }
  _getConfigs() {
    return this.system.configs
  }
  getConfigs() {
    return { configs: this.system.configs }
  }
  setConfigs(e) {
    this.system.configs = e
  }
  rebuildReducer() {
    this.store.replaceReducer(
      (function buildReducer(e) {
        return (function allReducers(e) {
          let t = Object.keys(e).reduce(
            (t, r) => (
              (t[r] = (function makeReducer(e) {
                return (t = new Qe.Map(), r) => {
                  if (!e) return t
                  let n = e[r.type]
                  if (n) {
                    const e = wrapWithTryCatch(n)(t, r)
                    return null === e ? t : e
                  }
                  return t
                }
              })(e[r])),
              t
            ),
            {},
          )
          if (!Object.keys(t).length) return idFn
          return (0, tt.combineReducers)(t)
        })(objMap(e, e => e.reducers))
      })(this.system.statePlugins),
    )
  }
  getType(e) {
    let t = e[0].toUpperCase() + e.slice(1)
    return objReduce(this.system.statePlugins, (r, n) => {
      let a = r[e]
      if (a) return { [n + t]: a }
    })
  }
  getSelectors() {
    return this.getType('selectors')
  }
  getActions() {
    return objMap(this.getType('actions'), e =>
      objReduce(e, (e, t) => {
        if (isFn(e)) return { [t]: e }
      }),
    )
  }
  getWrappedAndBoundActions(e) {
    return objMap(this.getBoundActions(e), (e, t) => {
      let r = this.system.statePlugins[t.slice(0, -7)].wrapActions
      return r
        ? objMap(e, (e, t) => {
            let n = r[t]
            return n
              ? (Array.isArray(n) || (n = [n]),
                n.reduce((e, t) => {
                  let newAction = (...r) => t(e, this.getSystem())(...r)
                  if (!isFn(newAction))
                    throw new TypeError(
                      'wrapActions needs to return a function that returns a new function (ie the wrapped action)',
                    )
                  return wrapWithTryCatch(newAction)
                }, e || Function.prototype))
              : e
          })
        : e
    })
  }
  getWrappedAndBoundSelectors(e, t) {
    return objMap(this.getBoundSelectors(e, t), (t, r) => {
      let n = [r.slice(0, -9)],
        a = this.system.statePlugins[n].wrapSelectors
      return a
        ? objMap(t, (t, r) => {
            let o = a[r]
            return o
              ? (Array.isArray(o) || (o = [o]),
                o.reduce((t, r) => {
                  let wrappedSelector = (...a) =>
                    r(t, this.getSystem())(e().getIn(n), ...a)
                  if (!isFn(wrappedSelector))
                    throw new TypeError(
                      'wrapSelector needs to return a function that returns a new function (ie the wrapped action)',
                    )
                  return wrappedSelector
                }, t || Function.prototype))
              : t
          })
        : t
    })
  }
  getStates(e) {
    return Object.keys(this.system.statePlugins).reduce(
      (t, r) => ((t[r] = e.get(r)), t),
      {},
    )
  }
  getStateThunks(e) {
    return Object.keys(this.system.statePlugins).reduce(
      (t, r) => ((t[r] = () => e().get(r)), t),
      {},
    )
  }
  getFn() {
    return { fn: this.system.fn }
  }
  getComponents(e) {
    const t = this.system.components[e]
    return Array.isArray(t)
      ? t.reduce((e, t) => t(e, this.getSystem()))
      : void 0 !== e
      ? this.system.components[e]
      : this.system.components
  }
  getBoundSelectors(e, t) {
    return objMap(this.getSelectors(), (r, n) => {
      let a = [n.slice(0, -9)]
      return objMap(r, r => (...n) => {
        let o = wrapWithTryCatch(r).apply(null, [e().getIn(a), ...n])
        return 'function' == typeof o && (o = wrapWithTryCatch(o)(t())), o
      })
    })
  }
  getBoundActions(e) {
    e = e || this.getStore().dispatch
    const t = this.getActions(),
      process = e =>
        'function' != typeof e
          ? objMap(e, e => process(e))
          : (...t) => {
              var r = null
              try {
                r = e(...t)
              } catch (e) {
                r = { type: at, error: !0, payload: (0, rt.serializeError)(e) }
              } finally {
                return r
              }
            }
    return objMap(t, t => (0, Ye.bindActionCreators)(process(t), e))
  }
  getMapStateToProps() {
    return () => Object.assign({}, this.getSystem())
  }
  getMapDispatchToProps(e) {
    return t => et()({}, this.getWrappedAndBoundActions(t), this.getFn(), e)
  }
}
function combinePlugins(e, t) {
  return isObject(e) && !isArray(e)
    ? (0, nt.default)({}, e)
    : isFunc(e)
    ? combinePlugins(e(t), t)
    : isArray(e)
    ? e
        .map(e => combinePlugins(e, t))
        .reduce(systemExtend, { components: t.getComponents() })
    : {}
}
function callAfterLoad(e, t, { hasLoaded: r } = {}) {
  let n = r
  return (
    isObject(e) &&
      !isArray(e) &&
      'function' == typeof e.afterLoad &&
      ((n = !0), wrapWithTryCatch(e.afterLoad).call(this, t)),
    isFunc(e)
      ? callAfterLoad.call(this, e(t), t, { hasLoaded: n })
      : isArray(e)
      ? e.map(e => callAfterLoad.call(this, e, t, { hasLoaded: n }))
      : n
  )
}
function systemExtend(e = {}, t = {}) {
  if (!isObject(e)) return {}
  if (!isObject(t)) return e
  t.wrapComponents &&
    (objMap(t.wrapComponents, (r, n) => {
      const a = e.components && e.components[n]
      a && Array.isArray(a)
        ? ((e.components[n] = a.concat([r])), delete t.wrapComponents[n])
        : a && ((e.components[n] = [a, r]), delete t.wrapComponents[n])
    }),
    Object.keys(t.wrapComponents).length || delete t.wrapComponents)
  const { statePlugins: r } = e
  if (isObject(r))
    for (let e in r) {
      const n = r[e]
      if (!isObject(n)) continue
      const { wrapActions: a, wrapSelectors: o } = n
      if (isObject(a))
        for (let r in a) {
          let n = a[r]
          Array.isArray(n) || ((n = [n]), (a[r] = n)),
            t &&
              t.statePlugins &&
              t.statePlugins[e] &&
              t.statePlugins[e].wrapActions &&
              t.statePlugins[e].wrapActions[r] &&
              (t.statePlugins[e].wrapActions[r] = a[r].concat(
                t.statePlugins[e].wrapActions[r],
              ))
        }
      if (isObject(o))
        for (let r in o) {
          let n = o[r]
          Array.isArray(n) || ((n = [n]), (o[r] = n)),
            t &&
              t.statePlugins &&
              t.statePlugins[e] &&
              t.statePlugins[e].wrapSelectors &&
              t.statePlugins[e].wrapSelectors[r] &&
              (t.statePlugins[e].wrapSelectors[r] = o[r].concat(
                t.statePlugins[e].wrapSelectors[r],
              ))
        }
    }
  return et()(e, t)
}
function wrapWithTryCatch(e, { logErrors: t = !0 } = {}) {
  return 'function' != typeof e
    ? e
    : function (...r) {
        try {
          return e.call(this, ...r)
        } catch (e) {
          return t && console.error(e), null
        }
      }
}
var At = (function (e) {
  var t = {}
  return __webpack_require__.d(t, e), t
})({
  default: function () {
    return y.default
  },
})
const It = 'show_popup',
  Rt = 'authorize',
  Tt = 'logout',
  Bt = 'pre_authorize_oauth2',
  jt = 'authorize_oauth2',
  Pt = 'validate',
  Mt = 'configure_auth',
  qt = 'restore_authorization'
function showDefinitions(e) {
  return { type: It, payload: e }
}
function authorize(e) {
  return { type: Rt, payload: e }
}
const authorizeWithPersistOption =
  e =>
  ({ authActions: t }) => {
    t.authorize(e), t.persistAuthorizationIfNeeded()
  }
function logout(e) {
  return { type: Tt, payload: e }
}
const logoutWithPersistOption =
    e =>
    ({ authActions: t }) => {
      t.logout(e), t.persistAuthorizationIfNeeded()
    },
  preAuthorizeImplicit =
    e =>
    ({ authActions: t, errActions: r }) => {
      let { auth: n, token: a, isValid: o } = e,
        { schema: s, name: l } = n,
        i = s.get('flow')
      delete dt.swaggerUIRedirectOauth2,
        'accessCode' === i ||
          o ||
          r.newAuthErr({
            authId: l,
            source: 'auth',
            level: 'warning',
            message:
              "Authorization may be unsafe, passed state was changed in server Passed state wasn't returned from auth server",
          }),
        a.error
          ? r.newAuthErr({
              authId: l,
              source: 'auth',
              level: 'error',
              message: JSON.stringify(a),
            })
          : t.authorizeOauth2WithPersistOption({ auth: n, token: a })
    }
function authorizeOauth2(e) {
  return { type: jt, payload: e }
}
const authorizeOauth2WithPersistOption =
    e =>
    ({ authActions: t }) => {
      t.authorizeOauth2(e), t.persistAuthorizationIfNeeded()
    },
  authorizePassword =
    e =>
    ({ authActions: t }) => {
      let {
          schema: r,
          name: n,
          username: a,
          password: o,
          passwordType: s,
          clientId: l,
          clientSecret: i,
        } = e,
        c = {
          grant_type: 'password',
          scope: e.scopes.join(' '),
          username: a,
          password: o,
        },
        u = {}
      switch (s) {
        case 'request-body':
          !(function setClientIdAndSecret(e, t, r) {
            t && Object.assign(e, { client_id: t })
            r && Object.assign(e, { client_secret: r })
          })(c, l, i)
          break
        case 'basic':
          u.Authorization = 'Basic ' + btoa(l + ':' + i)
          break
        default:
          console.warn(
            `Warning: invalid passwordType ${s} was passed, not including client id and secret`,
          )
      }
      return t.authorizeRequest({
        body: buildFormData(c),
        url: r.get('tokenUrl'),
        name: n,
        headers: u,
        query: {},
        auth: e,
      })
    }
const authorizeApplication =
    e =>
    ({ authActions: t }) => {
      let { schema: r, scopes: n, name: a, clientId: o, clientSecret: s } = e,
        l = { Authorization: 'Basic ' + btoa(o + ':' + s) },
        i = { grant_type: 'client_credentials', scope: n.join(' ') }
      return t.authorizeRequest({
        body: buildFormData(i),
        name: a,
        url: r.get('tokenUrl'),
        auth: e,
        headers: l,
      })
    },
  authorizeAccessCodeWithFormParams =
    ({ auth: e, redirectUrl: t }) =>
    ({ authActions: r }) => {
      let {
          schema: n,
          name: a,
          clientId: o,
          clientSecret: s,
          codeVerifier: l,
        } = e,
        i = {
          grant_type: 'authorization_code',
          code: e.code,
          client_id: o,
          client_secret: s,
          redirect_uri: t,
          code_verifier: l,
        }
      return r.authorizeRequest({
        body: buildFormData(i),
        name: a,
        url: n.get('tokenUrl'),
        auth: e,
      })
    },
  authorizeAccessCodeWithBasicAuthentication =
    ({ auth: e, redirectUrl: t }) =>
    ({ authActions: r }) => {
      let {
          schema: n,
          name: a,
          clientId: o,
          clientSecret: s,
          codeVerifier: l,
        } = e,
        i = { Authorization: 'Basic ' + btoa(o + ':' + s) },
        c = {
          grant_type: 'authorization_code',
          code: e.code,
          client_id: o,
          redirect_uri: t,
          code_verifier: l,
        }
      return r.authorizeRequest({
        body: buildFormData(c),
        name: a,
        url: n.get('tokenUrl'),
        auth: e,
        headers: i,
      })
    },
  authorizeRequest =
    e =>
    ({
      fn: t,
      getConfigs: r,
      authActions: n,
      errActions: a,
      oas3Selectors: o,
      specSelectors: s,
      authSelectors: l,
    }) => {
      let i,
        {
          body: c,
          query: u = {},
          headers: d = {},
          name: p,
          url: m,
          auth: f,
        } = e,
        { additionalQueryStringParams: h } = l.getConfigs() || {}
      if (s.isOAS3()) {
        let e = o.serverEffectiveValue(o.selectedServer())
        i = (0, At.default)(m, e, !0)
      } else i = (0, At.default)(m, s.url(), !0)
      'object' == typeof h && (i.query = Object.assign({}, i.query, h))
      const g = i.toString()
      let y = Object.assign(
        {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest',
        },
        d,
      )
      t.fetch({
        url: g,
        method: 'post',
        headers: y,
        query: u,
        body: c,
        requestInterceptor: r().requestInterceptor,
        responseInterceptor: r().responseInterceptor,
      })
        .then(function (e) {
          let t = JSON.parse(e.data),
            r = t && (t.error || ''),
            o = t && (t.parseError || '')
          e.ok
            ? r || o
              ? a.newAuthErr({
                  authId: p,
                  level: 'error',
                  source: 'auth',
                  message: JSON.stringify(t),
                })
              : n.authorizeOauth2WithPersistOption({ auth: f, token: t })
            : a.newAuthErr({
                authId: p,
                level: 'error',
                source: 'auth',
                message: e.statusText,
              })
        })
        .catch(e => {
          let t = new Error(e).message
          if (e.response && e.response.data) {
            const r = e.response.data
            try {
              const e = 'string' == typeof r ? JSON.parse(r) : r
              e.error && (t += `, error: ${e.error}`),
                e.error_description &&
                  (t += `, description: ${e.error_description}`)
            } catch (e) {}
          }
          a.newAuthErr({
            authId: p,
            level: 'error',
            source: 'auth',
            message: t,
          })
        })
    }
function configureAuth(e) {
  return { type: Mt, payload: e }
}
function restoreAuthorization(e) {
  return { type: qt, payload: e }
}
const persistAuthorizationIfNeeded =
    () =>
    ({ authSelectors: e, getConfigs: t }) => {
      if (!t().persistAuthorization) return
      const r = e.authorized().toJS()
      localStorage.setItem('authorized', JSON.stringify(r))
    },
  authPopup = (e, t) => () => {
    ;(dt.swaggerUIRedirectOauth2 = t), dt.open(e)
  }
var Lt = {
    [It]: (e, { payload: t }) => e.set('showDefinitions', t),
    [Rt]: (e, { payload: t }) => {
      let r = (0, Qe.fromJS)(t),
        n = e.get('authorized') || (0, Qe.Map)()
      return (
        r.entrySeq().forEach(([t, r]) => {
          if (!isFunc(r.getIn)) return e.set('authorized', n)
          let a = r.getIn(['schema', 'type'])
          if ('apiKey' === a || 'http' === a) n = n.set(t, r)
          else if ('basic' === a) {
            let e = r.getIn(['value', 'username']),
              a = r.getIn(['value', 'password'])
            ;(n = n.setIn([t, 'value'], {
              username: e,
              header: 'Basic ' + btoa(e + ':' + a),
            })),
              (n = n.setIn([t, 'schema'], r.get('schema')))
          }
        }),
        e.set('authorized', n)
      )
    },
    [jt]: (e, { payload: t }) => {
      let r,
        { auth: n, token: a } = t
      ;(n.token = Object.assign({}, a)), (r = (0, Qe.fromJS)(n))
      let o = e.get('authorized') || (0, Qe.Map)()
      return (o = o.set(r.get('name'), r)), e.set('authorized', o)
    },
    [Tt]: (e, { payload: t }) => {
      let r = e.get('authorized').withMutations(e => {
        t.forEach(t => {
          e.delete(t)
        })
      })
      return e.set('authorized', r)
    },
    [Mt]: (e, { payload: t }) => e.set('configs', t),
    [qt]: (e, { payload: t }) =>
      e.set('authorized', (0, Qe.fromJS)(t.authorized)),
  },
  Dt = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    createSelector: function () {
      return S.createSelector
    },
  })
const state = e => e,
  Ut = (0, Dt.createSelector)(state, e => e.get('showDefinitions')),
  $t = (0, Dt.createSelector)(state, () => ({ specSelectors: e }) => {
    let t = e.securityDefinitions() || (0, Qe.Map)({}),
      r = (0, Qe.List)()
    return (
      t.entrySeq().forEach(([e, t]) => {
        let n = (0, Qe.Map)()
        ;(n = n.set(e, t)), (r = r.push(n))
      }),
      r
    )
  }),
  getDefinitionsByNames =
    (e, t) =>
    ({ specSelectors: e }) => {
      console.warn(
        'WARNING: getDefinitionsByNames is deprecated and will be removed in the next major version.',
      )
      let r = e.securityDefinitions(),
        n = (0, Qe.List)()
      return (
        t.valueSeq().forEach(e => {
          let t = (0, Qe.Map)()
          e.entrySeq().forEach(([e, n]) => {
            let a,
              o = r.get(e)
            'oauth2' === o.get('type') &&
              n.size &&
              ((a = o.get('scopes')),
              a.keySeq().forEach(e => {
                n.contains(e) || (a = a.delete(e))
              }),
              (o = o.set('allowedScopes', a))),
              (t = t.set(e, o))
          }),
            (n = n.push(t))
        }),
        n
      )
    },
  definitionsForRequirements =
    (e, t = (0, Qe.List)()) =>
    ({ authSelectors: e }) => {
      const r = e.definitionsToAuthorize() || (0, Qe.List)()
      let n = (0, Qe.List)()
      return (
        r.forEach(e => {
          let r = t.find(t => t.get(e.keySeq().first()))
          r &&
            (e.forEach((t, n) => {
              if ('oauth2' === t.get('type')) {
                const a = r.get(n)
                let o = t.get('scopes')
                Qe.List.isList(a) &&
                  Qe.Map.isMap(o) &&
                  (o.keySeq().forEach(e => {
                    a.contains(e) || (o = o.delete(e))
                  }),
                  (e = e.set(n, t.set('scopes', o))))
              }
            }),
            (n = n.push(e)))
        }),
        n
      )
    },
  Jt = (0, Dt.createSelector)(state, e => e.get('authorized') || (0, Qe.Map)()),
  isAuthorized =
    (e, t) =>
    ({ authSelectors: e }) => {
      let r = e.authorized()
      return Qe.List.isList(t)
        ? !!t.toJS().filter(
            e =>
              -1 ===
              Object.keys(e)
                .map(e => !!r.get(e))
                .indexOf(!1),
          ).length
        : null
    },
  Vt = (0, Dt.createSelector)(state, e => e.get('configs')),
  execute =
    (e, { authSelectors: t, specSelectors: r }) =>
    ({ path: n, method: a, operation: o, extras: s }) => {
      let l = {
        authorized: t.authorized() && t.authorized().toJS(),
        definitions: r.securityDefinitions() && r.securityDefinitions().toJS(),
        specSecurity: r.security() && r.security().toJS(),
      }
      return e({ path: n, method: a, operation: o, securities: l, ...s })
    },
  loaded = (e, t) => r => {
    const { getConfigs: n, authActions: a } = t,
      o = n()
    if ((e(r), o.persistAuthorization)) {
      const e = localStorage.getItem('authorized')
      e && a.restoreAuthorization({ authorized: JSON.parse(e) })
    }
  },
  wrap_actions_authorize = (e, t) => r => {
    e(r)
    if (t.getConfigs().persistAuthorization)
      try {
        const [{ schema: e, value: t }] = Object.values(r),
          n = 'apiKey' === e.get('type'),
          a = 'cookie' === e.get('in')
        n &&
          a &&
          (document.cookie = `${e.get('name')}=${t}; SameSite=None; Secure`)
      } catch (e) {
        console.error(
          'Error persisting cookie based apiKey in document.cookie.',
          e,
        )
      }
  },
  wrap_actions_logout = (e, t) => r => {
    const n = t.getConfigs(),
      a = t.authSelectors.authorized()
    try {
      n.persistAuthorization &&
        Array.isArray(r) &&
        r.forEach(e => {
          const t = a.get(e, {}),
            r = 'apiKey' === t.getIn(['schema', 'type']),
            n = 'cookie' === t.getIn(['schema', 'in'])
          if (r && n) {
            const e = t.getIn(['schema', 'name'])
            document.cookie = `${e}=; Max-Age=-99999999`
          }
        })
    } catch (e) {
      console.error(
        'Error deleting cookie based apiKey from document.cookie.',
        e,
      )
    }
    e(r)
  }
var Kt = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return _.default
    },
  }),
  zt = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return v.default
    },
  })
class LockAuthIcon extends Xe.default.Component {
  mapStateToProps(e, t) {
    return {
      state: e,
      ownProps: (0, zt.default)(t, Object.keys(t.getSystem())),
    }
  }
  render() {
    const { getComponent: e, ownProps: t } = this.props,
      r = e('LockIcon')
    return Xe.default.createElement(r, t)
  }
}
var Ft = LockAuthIcon
class UnlockAuthIcon extends Xe.default.Component {
  mapStateToProps(e, t) {
    return {
      state: e,
      ownProps: (0, zt.default)(t, Object.keys(t.getSystem())),
    }
  }
  render() {
    const { getComponent: e, ownProps: t } = this.props,
      r = e('UnlockIcon')
    return Xe.default.createElement(r, t)
  }
}
var Wt = UnlockAuthIcon
function auth() {
  return {
    afterLoad(e) {
      ;(this.rootInjects = this.rootInjects || {}),
        (this.rootInjects.initOAuth = e.authActions.configureAuth),
        (this.rootInjects.preauthorizeApiKey = preauthorizeApiKey.bind(
          null,
          e,
        )),
        (this.rootInjects.preauthorizeBasic = preauthorizeBasic.bind(null, e))
    },
    components: {
      LockAuthIcon: Ft,
      UnlockAuthIcon: Wt,
      LockAuthOperationIcon: Ft,
      UnlockAuthOperationIcon: Wt,
    },
    statePlugins: {
      auth: {
        reducers: Lt,
        actions: Ne,
        selectors: Ae,
        wrapActions: {
          authorize: wrap_actions_authorize,
          logout: wrap_actions_logout,
        },
      },
      configs: { wrapActions: { loaded } },
      spec: { wrapActions: { execute } },
    },
  }
}
function preauthorizeBasic(e, t, r, n) {
  const {
      authActions: { authorize: a },
      specSelectors: { specJson: o, isOAS3: s },
    } = e,
    l = s() ? ['components', 'securitySchemes'] : ['securityDefinitions'],
    i = o().getIn([...l, t])
  return i
    ? a({ [t]: { value: { username: r, password: n }, schema: i.toJS() } })
    : null
}
function preauthorizeApiKey(e, t, r) {
  const {
      authActions: { authorize: n },
      specSelectors: { specJson: a, isOAS3: o },
    } = e,
    s = o() ? ['components', 'securitySchemes'] : ['securityDefinitions'],
    l = a().getIn([...s, t])
  return l ? n({ [t]: { value: r, schema: l.toJS() } }) : null
}
var Ht = (function (e) {
  var t = {}
  return __webpack_require__.d(t, e), t
})({
  JSON_SCHEMA: function () {
    return b.JSON_SCHEMA
  },
  default: function () {
    return b.default
  },
})
const Gt = 'configs_update',
  Xt = 'configs_toggle'
function update(e, t) {
  return { type: Gt, payload: { [e]: t } }
}
function toggle(e) {
  return { type: Xt, payload: e }
}
const actions_loaded = () => () => {},
  downloadConfig = e => t => {
    const {
      fn: { fetch: r },
    } = t
    return r(e)
  },
  getConfigByUrl = (e, t) => r => {
    const { specActions: n, configsActions: a } = r
    if (e) return a.downloadConfig(e).then(next, next)
    function next(a) {
      a instanceof Error || a.status >= 400
        ? (n.updateLoadingStatus('failedConfig'),
          n.updateLoadingStatus('failedConfig'),
          n.updateUrl(''),
          console.error(a.statusText + ' ' + e.url),
          t(null))
        : t(
            ((e, t) => {
              try {
                return Ht.default.load(e)
              } catch (e) {
                return t && t.errActions.newThrownErr(new Error(e)), {}
              }
            })(a.text, r),
          )
    }
  },
  get = (e, t) => e.getIn(Array.isArray(t) ? t : [t])
var Yt = {
  [Gt]: (e, t) => e.merge((0, Qe.fromJS)(t.payload)),
  [Xt]: (e, t) => {
    const r = t.payload,
      n = e.get(r)
    return e.set(r, !n)
  },
}
function configsPlugin() {
  return {
    statePlugins: { configs: { reducers: Yt, actions: Ie, selectors: Re } },
  }
}
const setHash = e =>
  e ? history.pushState(null, null, `#${e}`) : (window.location.hash = '')
var Qt = (function (e) {
  var t = {}
  return __webpack_require__.d(t, e), t
})({
  default: function () {
    return w.default
  },
})
const Zt = 'layout_scroll_to',
  er = 'layout_clear_scroll'
var tr = {
    fn: {
      getScrollParent: function getScrollParent(e, t) {
        const r = document.documentElement
        let n = getComputedStyle(e)
        const a = 'absolute' === n.position,
          o = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
        if ('fixed' === n.position) return r
        for (let t = e; (t = t.parentElement); )
          if (
            ((n = getComputedStyle(t)),
            (!a || 'static' !== n.position) &&
              o.test(n.overflow + n.overflowY + n.overflowX))
          )
            return t
        return r
      },
    },
    statePlugins: {
      layout: {
        actions: {
          scrollToElement: (e, t) => r => {
            try {
              ;(t = t || r.fn.getScrollParent(e)),
                Qt.default.createScroller(t).to(e)
            } catch (e) {
              console.error(e)
            }
          },
          scrollTo: e => ({ type: Zt, payload: Array.isArray(e) ? e : [e] }),
          clearScrollTo: () => ({ type: er }),
          readyToScroll: (e, t) => r => {
            const n = r.layoutSelectors.getScrollToKey()
            Qe.default.is(n, (0, Qe.fromJS)(e)) &&
              (r.layoutActions.scrollToElement(t),
              r.layoutActions.clearScrollTo())
          },
          parseDeepLinkHash:
            e =>
            ({ layoutActions: t, layoutSelectors: r, getConfigs: n }) => {
              if (n().deepLinking && e) {
                let n = e.slice(1)
                '!' === n[0] && (n = n.slice(1)),
                  '/' === n[0] && (n = n.slice(1))
                const a = n.split('/').map(e => e || ''),
                  o = r.isShownKeyFromUrlHashArray(a),
                  [s, l = '', i = ''] = o
                if ('operations' === s) {
                  const e = r.isShownKeyFromUrlHashArray([l])
                  l.indexOf('_') > -1 &&
                    (console.warn(
                      'Warning: escaping deep link whitespace with `_` will be unsupported in v4.0, use `%20` instead.',
                    ),
                    t.show(
                      e.map(e => e.replace(/_/g, ' ')),
                      !0,
                    )),
                    t.show(e, !0)
                }
                ;(l.indexOf('_') > -1 || i.indexOf('_') > -1) &&
                  (console.warn(
                    'Warning: escaping deep link whitespace with `_` will be unsupported in v4.0, use `%20` instead.',
                  ),
                  t.show(
                    o.map(e => e.replace(/_/g, ' ')),
                    !0,
                  )),
                  t.show(o, !0),
                  t.scrollTo(o)
              }
            },
        },
        selectors: {
          getScrollToKey: e => e.get('scrollToKey'),
          isShownKeyFromUrlHashArray(e, t) {
            const [r, n] = t
            return n ? ['operations', r, n] : r ? ['operations-tag', r] : []
          },
          urlHashArrayFromIsShownKey(e, t) {
            let [r, n, a] = t
            return 'operations' == r ? [n, a] : 'operations-tag' == r ? [n] : []
          },
        },
        reducers: {
          [Zt]: (e, t) => e.set('scrollToKey', Qe.default.fromJS(t.payload)),
          [er]: e => e.delete('scrollToKey'),
        },
        wrapActions: {
          show:
            (e, { getConfigs: t, layoutSelectors: r }) =>
            (...n) => {
              if ((e(...n), t().deepLinking))
                try {
                  let [e, t] = n
                  e = Array.isArray(e) ? e : [e]
                  const a = r.urlHashArrayFromIsShownKey(e)
                  if (!a.length) return
                  const [o, s] = a
                  if (!t) return setHash('/')
                  2 === a.length
                    ? setHash(
                        createDeepLinkPath(
                          `/${encodeURIComponent(o)}/${encodeURIComponent(s)}`,
                        ),
                      )
                    : 1 === a.length &&
                      setHash(createDeepLinkPath(`/${encodeURIComponent(o)}`))
                } catch (e) {
                  console.error(e)
                }
            },
        },
      },
    },
  },
  rr = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return C.default
    },
  })
var operation_wrapper = (e, t) =>
  class OperationWrapper extends Xe.default.Component {
    onLoad = e => {
      const { operation: r } = this.props,
        { tag: n, operationId: a } = r.toObject()
      let { isShownKey: o } = r.toObject()
      ;(o = o || ['operations', n, a]), t.layoutActions.readyToScroll(o, e)
    }
    render() {
      return Xe.default.createElement(
        'span',
        { ref: this.onLoad },
        Xe.default.createElement(e, this.props),
      )
    }
  }
var operation_tag_wrapper = (e, t) =>
  class OperationTagWrapper extends Xe.default.Component {
    onLoad = e => {
      const { tag: r } = this.props,
        n = ['operations-tag', r]
      t.layoutActions.readyToScroll(n, e)
    }
    render() {
      return Xe.default.createElement(
        'span',
        { ref: this.onLoad },
        Xe.default.createElement(e, this.props),
      )
    }
  }
function deep_linking() {
  return [
    tr,
    {
      statePlugins: {
        configs: {
          wrapActions: {
            loaded:
              (e, t) =>
              (...r) => {
                e(...r)
                const n = decodeURIComponent(window.location.hash)
                t.layoutActions.parseDeepLinkHash(n)
              },
          },
        },
      },
      wrapComponents: {
        operation: operation_wrapper,
        OperationTag: operation_tag_wrapper,
      },
    },
  ]
}
var nr = (function (e) {
  var t = {}
  return __webpack_require__.d(t, e), t
})({
  default: function () {
    return x.default
  },
})
function transform(e) {
  return e.map(e => {
    let t = 'is not of a type(s)',
      r = e.get('message').indexOf(t)
    if (r > -1) {
      let t = e
        .get('message')
        .slice(r + 19)
        .split(',')
      return e.set(
        'message',
        e.get('message').slice(0, r) +
          (function makeNewMessage(e) {
            return e.reduce(
              (e, t, r, n) =>
                r === n.length - 1 && n.length > 1
                  ? e + 'or ' + t
                  : n[r + 1] && n.length > 2
                  ? e + t + ', '
                  : n[r + 1]
                  ? e + t + ' '
                  : e + t,
              'should be a',
            )
          })(t),
      )
    }
    return e
  })
}
var ar = (function (e) {
  var t = {}
  return __webpack_require__.d(t, e), t
})({
  default: function () {
    return O.default
  },
})
function parameter_oneof_transform(e, { jsSpec: t }) {
  return e
}
const or = [Te, Be]
function transformErrors(e) {
  let t = { jsSpec: {} },
    r = (0, nr.default)(
      or,
      (e, r) => {
        try {
          return r.transform(e, t).filter(e => !!e)
        } catch (t) {
          return console.error('Transformer error:', t), e
        }
      },
      e,
    )
  return r.filter(e => !!e).map(e => (!e.get('line') && e.get('path'), e))
}
let sr = { line: 0, level: 'error', message: 'Unknown error' }
const lr = (0, Dt.createSelector)(
    e => e,
    e => e.get('errors', (0, Qe.List)()),
  ),
  ir = (0, Dt.createSelector)(lr, e => e.last())
function err(e) {
  return {
    statePlugins: {
      err: {
        reducers: {
          [at]: (e, { payload: t }) => {
            let r = Object.assign(sr, t, { type: 'thrown' })
            return e
              .update('errors', e =>
                (e || (0, Qe.List)()).push((0, Qe.fromJS)(r)),
              )
              .update('errors', e => transformErrors(e))
          },
          [ot]: (e, { payload: t }) => (
            (t = t.map(e =>
              (0, Qe.fromJS)(Object.assign(sr, e, { type: 'thrown' })),
            )),
            e
              .update('errors', e =>
                (e || (0, Qe.List)()).concat((0, Qe.fromJS)(t)),
              )
              .update('errors', e => transformErrors(e))
          ),
          [st]: (e, { payload: t }) => {
            let r = (0, Qe.fromJS)(t)
            return (
              (r = r.set('type', 'spec')),
              e
                .update('errors', e =>
                  (e || (0, Qe.List)())
                    .push((0, Qe.fromJS)(r))
                    .sortBy(e => e.get('line')),
                )
                .update('errors', e => transformErrors(e))
            )
          },
          [lt]: (e, { payload: t }) => (
            (t = t.map(e =>
              (0, Qe.fromJS)(Object.assign(sr, e, { type: 'spec' })),
            )),
            e
              .update('errors', e =>
                (e || (0, Qe.List)()).concat((0, Qe.fromJS)(t)),
              )
              .update('errors', e => transformErrors(e))
          ),
          [it]: (e, { payload: t }) => {
            let r = (0, Qe.fromJS)(Object.assign({}, t))
            return (
              (r = r.set('type', 'auth')),
              e
                .update('errors', e =>
                  (e || (0, Qe.List)()).push((0, Qe.fromJS)(r)),
                )
                .update('errors', e => transformErrors(e))
            )
          },
          [ct]: (e, { payload: t }) => {
            if (!t || !e.get('errors')) return e
            let r = e.get('errors').filter(e =>
              e.keySeq().every(r => {
                const n = e.get(r),
                  a = t[r]
                return !a || n !== a
              }),
            )
            return e.merge({ errors: r })
          },
          [ut]: (e, { payload: t }) => {
            if (!t || 'function' != typeof t) return e
            let r = e.get('errors').filter(e => t(e))
            return e.merge({ errors: r })
          },
        },
        actions: ke,
        selectors: je,
      },
    },
  }
}
function opsFilter(e, t) {
  return e.filter((e, r) => -1 !== r.indexOf(t))
}
function filter() {
  return { fn: { opsFilter } }
}
var cr = (function (e) {
  var t = {}
  return __webpack_require__.d(t, e), t
})({
  default: function () {
    return k.default
  },
})
var arrow_up = ({ className: e = null, width: t = 20, height: r = 20, ...n }) =>
  Xe.default.createElement(
    'svg',
    (0, cr.default)(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        className: e,
        width: t,
        height: r,
        'aria-hidden': 'true',
        focusable: 'false',
      },
      n,
    ),
    Xe.default.createElement('path', {
      d: 'M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z',
    }),
  )
var arrow_down = ({
  className: e = null,
  width: t = 20,
  height: r = 20,
  ...n
}) =>
  Xe.default.createElement(
    'svg',
    (0, cr.default)(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        className: e,
        width: t,
        height: r,
        'aria-hidden': 'true',
        focusable: 'false',
      },
      n,
    ),
    Xe.default.createElement('path', {
      d: 'M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z',
    }),
  )
var arrow = ({ className: e = null, width: t = 20, height: r = 20, ...n }) =>
  Xe.default.createElement(
    'svg',
    (0, cr.default)(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        className: e,
        width: t,
        height: r,
        'aria-hidden': 'true',
        focusable: 'false',
      },
      n,
    ),
    Xe.default.createElement('path', {
      d: 'M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z',
    }),
  )
var components_close = ({
  className: e = null,
  width: t = 20,
  height: r = 20,
  ...n
}) =>
  Xe.default.createElement(
    'svg',
    (0, cr.default)(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        className: e,
        width: t,
        height: r,
        'aria-hidden': 'true',
        focusable: 'false',
      },
      n,
    ),
    Xe.default.createElement('path', {
      d: 'M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z',
    }),
  )
var copy = ({ className: e = null, width: t = 15, height: r = 16, ...n }) =>
  Xe.default.createElement(
    'svg',
    (0, cr.default)(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 15 16',
        className: e,
        width: t,
        height: r,
        'aria-hidden': 'true',
        focusable: 'false',
      },
      n,
    ),
    Xe.default.createElement(
      'g',
      { transform: 'translate(2, -1)' },
      Xe.default.createElement('path', {
        fill: '#ffffff',
        fillRule: 'evenodd',
        d: 'M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z',
      }),
    ),
  )
var lock = ({ className: e = null, width: t = 20, height: r = 20, ...n }) =>
  Xe.default.createElement(
    'svg',
    (0, cr.default)(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        className: e,
        width: t,
        height: r,
        'aria-hidden': 'true',
        focusable: 'false',
      },
      n,
    ),
    Xe.default.createElement('path', {
      d: 'M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z',
    }),
  )
var unlock = ({ className: e = null, width: t = 20, height: r = 20, ...n }) =>
  Xe.default.createElement(
    'svg',
    (0, cr.default)(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        className: e,
        width: t,
        height: r,
        'aria-hidden': 'true',
        focusable: 'false',
      },
      n,
    ),
    Xe.default.createElement('path', {
      d: 'M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z',
    }),
  )
var icons = () => ({
  components: {
    ArrowUpIcon: arrow_up,
    ArrowDownIcon: arrow_down,
    ArrowIcon: arrow,
    CloseIcon: components_close,
    CopyIcon: copy,
    LockIcon: lock,
    UnlockIcon: unlock,
  },
})
const ur = 'layout_update_layout',
  dr = 'layout_update_filter',
  pr = 'layout_update_mode',
  mr = 'layout_show'
function updateLayout(e) {
  return { type: ur, payload: e }
}
function updateFilter(e) {
  return { type: dr, payload: e }
}
function actions_show(e, t = !0) {
  return (e = normalizeArray(e)), { type: mr, payload: { thing: e, shown: t } }
}
function changeMode(e, t = '') {
  return (e = normalizeArray(e)), { type: pr, payload: { thing: e, mode: t } }
}
var fr = {
  [ur]: (e, t) => e.set('layout', t.payload),
  [dr]: (e, t) => e.set('filter', t.payload),
  [mr]: (e, t) => {
    const r = t.payload.shown,
      n = (0, Qe.fromJS)(t.payload.thing)
    return e.update('shown', (0, Qe.fromJS)({}), e => e.set(n, r))
  },
  [pr]: (e, t) => {
    let r = t.payload.thing,
      n = t.payload.mode
    return e.setIn(['modes'].concat(r), (n || '') + '')
  },
}
const current = e => e.get('layout'),
  currentFilter = e => e.get('filter'),
  isShown = (e, t, r) => (
    (t = normalizeArray(t)),
    e.get('shown', (0, Qe.fromJS)({})).get((0, Qe.fromJS)(t), r)
  ),
  whatMode = (e, t, r = '') => (
    (t = normalizeArray(t)), e.getIn(['modes', ...t], r)
  ),
  hr = (0, Dt.createSelector)(
    e => e,
    e => !isShown(e, 'editor'),
  ),
  taggedOperations =
    (e, t) =>
    (r, ...n) => {
      let a = e(r, ...n)
      const { fn: o, layoutSelectors: s, getConfigs: l } = t.getSystem(),
        i = l(),
        { maxDisplayedTags: c } = i
      let u = s.currentFilter()
      return (
        u && !0 !== u && (a = o.opsFilter(a, u)),
        c >= 0 && (a = a.slice(0, c)),
        a
      )
    }
function plugins_layout() {
  return {
    statePlugins: {
      layout: { reducers: fr, actions: Pe, selectors: Me },
      spec: { wrapSelectors: qe },
    },
  }
}
function logs({ configs: e }) {
  const t = { debug: 0, info: 1, log: 2, warn: 3, error: 4 },
    getLevel = e => t[e] || -1
  let { logLevel: r } = e,
    n = getLevel(r)
  function log(e, ...t) {
    getLevel(e) >= n && console[e](...t)
  }
  return (
    (log.warn = log.bind(null, 'warn')),
    (log.error = log.bind(null, 'error')),
    (log.info = log.bind(null, 'info')),
    (log.debug = log.bind(null, 'debug')),
    { rootInjects: { log } }
  )
}
let gr = !1
function on_complete() {
  return {
    statePlugins: {
      spec: {
        wrapActions: {
          updateSpec:
            e =>
            (...t) => ((gr = !0), e(...t)),
          updateJsonSpec:
            (e, t) =>
            (...r) => {
              const n = t.getConfigs().onComplete
              return (
                gr && 'function' == typeof n && (setTimeout(n, 0), (gr = !1)),
                e(...r)
              )
            },
        },
      },
    },
  }
}
const extractKey = e => {
    const t = '_**[]'
    return e.indexOf(t) < 0 ? e : e.split(t)[0].trim()
  },
  escapeShell = e =>
    '-d ' === e || /^[_\/-]/g.test(e)
      ? e
      : "'" + e.replace(/'/g, "'\\''") + "'",
  escapeCMD = e =>
    '-d ' ===
    (e = e
      .replace(/\^/g, '^^')
      .replace(/\\"/g, '\\\\"')
      .replace(/"/g, '""')
      .replace(/\n/g, '^\n'))
      ? e.replace(/-d /g, '-d ^\n')
      : /^[_\/-]/g.test(e)
      ? e
      : '"' + e + '"',
  escapePowershell = e => {
    if ('-d ' === e) return e
    if (/\n/.test(e)) {
      return `@"\n${e.replace(/`/g, '``').replace(/\$/g, '`$')}\n"@`
    }
    if (!/^[_\/-]/.test(e)) {
      return `'${e.replace(/'/g, "''")}'`
    }
    return e
  }
const curlify = (e, t, r, n = '') => {
    let a = !1,
      o = ''
    const addWords = (...e) => (o += ' ' + e.map(t).join(' ')),
      addWordsWithoutLeadingSpace = (...e) => (o += e.map(t).join(' ')),
      addNewLine = () => (o += ` ${r}`),
      addIndent = (e = 1) => (o += '  '.repeat(e))
    let s = e.get('headers')
    o += 'curl' + n
    const l = e.get('curlOptions')
    if (
      (Qe.List.isList(l) && !l.isEmpty() && addWords(...e.get('curlOptions')),
      addWords('-X', e.get('method')),
      addNewLine(),
      addIndent(),
      addWordsWithoutLeadingSpace(`${e.get('url')}`),
      s && s.size)
    )
      for (let t of e.get('headers').entries()) {
        addNewLine(), addIndent()
        let [e, r] = t
        addWordsWithoutLeadingSpace('-H', `${e}: ${r}`),
          (a =
            a ||
            (/^content-type$/i.test(e) && /^multipart\/form-data$/i.test(r)))
      }
    const i = e.get('body')
    if (i)
      if (a && ['POST', 'PUT', 'PATCH'].includes(e.get('method')))
        for (let [e, t] of i.entrySeq()) {
          let r = extractKey(e)
          addNewLine(),
            addIndent(),
            addWordsWithoutLeadingSpace('-F'),
            t instanceof dt.File && 'string' == typeof t.valueOf()
              ? addWords(`${r}=${t.data}${t.type ? `;type=${t.type}` : ''}`)
              : t instanceof dt.File
              ? addWords(`${r}=@${t.name}${t.type ? `;type=${t.type}` : ''}`)
              : addWords(`${r}=${t}`)
        }
      else if (i instanceof dt.File)
        addNewLine(),
          addIndent(),
          addWordsWithoutLeadingSpace(`--data-binary '@${i.name}'`)
      else {
        addNewLine(), addIndent(), addWordsWithoutLeadingSpace('-d ')
        let t = i
        Qe.Map.isMap(t)
          ? addWordsWithoutLeadingSpace(
              (function getStringBodyOfMap(e) {
                let t = []
                for (let [r, n] of e.get('body').entrySeq()) {
                  let e = extractKey(r)
                  n instanceof dt.File
                    ? t.push(
                        `  "${e}": {\n    "name": "${n.name}"${
                          n.type ? `,\n    "type": "${n.type}"` : ''
                        }\n  }`,
                      )
                    : t.push(
                        `  "${e}": ${JSON.stringify(n, null, 2).replace(
                          /(\r\n|\r|\n)/g,
                          '\n  ',
                        )}`,
                      )
                }
                return `{\n${t.join(',\n')}\n}`
              })(e),
            )
          : ('string' != typeof t && (t = JSON.stringify(t)),
            addWordsWithoutLeadingSpace(t))
      }
    else
      i ||
        'POST' !== e.get('method') ||
        (addNewLine(), addIndent(), addWordsWithoutLeadingSpace("-d ''"))
    return o
  },
  requestSnippetGenerator_curl_powershell = e =>
    curlify(e, escapePowershell, '`\n', '.exe'),
  requestSnippetGenerator_curl_bash = e => curlify(e, escapeShell, '\\\n'),
  requestSnippetGenerator_curl_cmd = e => curlify(e, escapeCMD, '^\n'),
  request_snippets_selectors_state = e => e || (0, Qe.Map)(),
  yr = (0, Dt.createSelector)(request_snippets_selectors_state, e => {
    const t = e.get('languages'),
      r = e.get('generators', (0, Qe.Map)())
    return !t || t.isEmpty() ? r : r.filter((e, r) => t.includes(r))
  }),
  getSnippetGenerators =
    e =>
    ({ fn: t }) =>
      yr(e)
        .map((e, r) => {
          const n = (e => t[`requestSnippetGenerator_${e}`])(r)
          return 'function' != typeof n ? null : e.set('fn', n)
        })
        .filter(e => e),
  Er = (0, Dt.createSelector)(request_snippets_selectors_state, e =>
    e.get('activeLanguage'),
  ),
  Sr = (0, Dt.createSelector)(request_snippets_selectors_state, e =>
    e.get('defaultExpanded'),
  )
var _r = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return N.default
    },
  }),
  vr = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    CopyToClipboard: function () {
      return A.CopyToClipboard
    },
  })
const br = {
    cursor: 'pointer',
    lineHeight: 1,
    display: 'inline-flex',
    backgroundColor: 'rgb(250, 250, 250)',
    paddingBottom: '0',
    paddingTop: '0',
    border: '1px solid rgb(51, 51, 51)',
    borderRadius: '4px 4px 0 0',
    boxShadow: 'none',
    borderBottom: 'none',
  },
  wr = {
    cursor: 'pointer',
    lineHeight: 1,
    display: 'inline-flex',
    backgroundColor: 'rgb(51, 51, 51)',
    boxShadow: 'none',
    border: '1px solid rgb(51, 51, 51)',
    paddingBottom: '0',
    paddingTop: '0',
    borderRadius: '4px 4px 0 0',
    marginTop: '-5px',
    marginRight: '-5px',
    marginLeft: '-5px',
    zIndex: '9999',
    borderBottom: 'none',
  }
var request_snippets = ({
    request: e,
    requestSnippetsSelectors: t,
    getComponent: r,
  }) => {
    const n = (0, Xe.useRef)(null),
      a = r('ArrowUpIcon'),
      o = r('ArrowDownIcon'),
      s = r('SyntaxHighlighter', !0),
      [l, i] = (0, Xe.useState)(t.getSnippetGenerators()?.keySeq().first()),
      [c, u] = (0, Xe.useState)(t?.getDefaultExpanded()),
      d = t.getSnippetGenerators(),
      p = d.get(l),
      m = p.get('fn')(e),
      handleSetIsExpanded = () => {
        u(!c)
      },
      handleGetBtnStyle = e => (e === l ? wr : br),
      handlePreventYScrollingBeyondElement = e => {
        const { target: t, deltaY: r } = e,
          { scrollHeight: n, offsetHeight: a, scrollTop: o } = t
        n > a &&
          ((0 === o && r < 0) || (a + o >= n && r > 0)) &&
          e.preventDefault()
      }
    return (
      (0, Xe.useEffect)(() => {}, []),
      (0, Xe.useEffect)(() => {
        const e = Array.from(n.current.childNodes).filter(
          e => !!e.nodeType && e.classList?.contains('curl-command'),
        )
        return (
          e.forEach(e =>
            e.addEventListener(
              'mousewheel',
              handlePreventYScrollingBeyondElement,
              { passive: !1 },
            ),
          ),
          () => {
            e.forEach(e =>
              e.removeEventListener(
                'mousewheel',
                handlePreventYScrollingBeyondElement,
              ),
            )
          }
        )
      }, [e]),
      Xe.default.createElement(
        'div',
        { className: 'request-snippets', ref: n },
        Xe.default.createElement(
          'div',
          {
            style: {
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '15px',
            },
          },
          Xe.default.createElement(
            'h4',
            {
              onClick: () => handleSetIsExpanded(),
              style: { cursor: 'pointer' },
            },
            'Snippets',
          ),
          Xe.default.createElement(
            'button',
            {
              onClick: () => handleSetIsExpanded(),
              style: { border: 'none', background: 'none' },
              title: c ? 'Collapse operation' : 'Expand operation',
            },
            c
              ? Xe.default.createElement(o, {
                  className: 'arrow',
                  width: '10',
                  height: '10',
                })
              : Xe.default.createElement(a, {
                  className: 'arrow',
                  width: '10',
                  height: '10',
                }),
          ),
        ),
        c &&
          Xe.default.createElement(
            'div',
            { className: 'curl-command' },
            Xe.default.createElement(
              'div',
              {
                style: {
                  paddingLeft: '15px',
                  paddingRight: '10px',
                  width: '100%',
                  display: 'flex',
                },
              },
              d.entrySeq().map(([e, t]) =>
                Xe.default.createElement(
                  'div',
                  {
                    className: (0, _r.default)('btn', { active: e === l }),
                    style: handleGetBtnStyle(e),
                    key: e,
                    onClick: () =>
                      (e => {
                        l !== e && i(e)
                      })(e),
                  },
                  Xe.default.createElement(
                    'h4',
                    { style: e === l ? { color: 'white' } : {} },
                    t.get('title'),
                  ),
                ),
              ),
            ),
            Xe.default.createElement(
              'div',
              { className: 'copy-to-clipboard' },
              Xe.default.createElement(
                vr.CopyToClipboard,
                { text: m },
                Xe.default.createElement('button', null),
              ),
            ),
            Xe.default.createElement(
              'div',
              null,
              Xe.default.createElement(
                s,
                {
                  language: p.get('syntax'),
                  className: 'curl microlight',
                  renderPlainText: ({ children: e, PlainTextViewer: t }) =>
                    Xe.default.createElement(t, { className: 'curl' }, e),
                },
                m,
              ),
            ),
          ),
      )
    )
  },
  plugins_request_snippets = () => ({
    components: { RequestSnippets: request_snippets },
    fn: Le,
    statePlugins: { requestSnippets: { selectors: De } },
  })
class ModelCollapse extends Xe.Component {
  static defaultProps = {
    collapsedContent: '{...}',
    expanded: !1,
    title: null,
    onToggle: () => {},
    hideSelfOnExpand: !1,
    specPath: Qe.default.List([]),
  }
  constructor(e, t) {
    super(e, t)
    let { expanded: r, collapsedContent: n } = this.props
    this.state = {
      expanded: r,
      collapsedContent: n || ModelCollapse.defaultProps.collapsedContent,
    }
  }
  componentDidMount() {
    const { hideSelfOnExpand: e, expanded: t, modelName: r } = this.props
    e && t && this.props.onToggle(r, t)
  }
  UNSAFE_componentWillReceiveProps(e) {
    this.props.expanded !== e.expanded &&
      this.setState({ expanded: e.expanded })
  }
  toggleCollapsed = () => {
    this.props.onToggle &&
      this.props.onToggle(this.props.modelName, !this.state.expanded),
      this.setState({ expanded: !this.state.expanded })
  }
  onLoad = e => {
    if (e && this.props.layoutSelectors) {
      const t = this.props.layoutSelectors.getScrollToKey()
      Qe.default.is(t, this.props.specPath) && this.toggleCollapsed(),
        this.props.layoutActions.readyToScroll(
          this.props.specPath,
          e.parentElement,
        )
    }
  }
  render() {
    const { title: e, classes: t } = this.props
    return this.state.expanded && this.props.hideSelfOnExpand
      ? Xe.default.createElement(
          'span',
          { className: t || '' },
          this.props.children,
        )
      : Xe.default.createElement(
          'span',
          { className: t || '', ref: this.onLoad },
          Xe.default.createElement(
            'button',
            {
              'aria-expanded': this.state.expanded,
              className: 'model-box-control',
              onClick: this.toggleCollapsed,
            },
            e && Xe.default.createElement('span', { className: 'pointer' }, e),
            Xe.default.createElement('span', {
              className:
                'model-toggle' + (this.state.expanded ? '' : ' collapsed'),
            }),
            !this.state.expanded &&
              Xe.default.createElement(
                'span',
                null,
                this.state.collapsedContent,
              ),
          ),
          this.state.expanded && this.props.children,
        )
  }
}
const useTabs = ({ initialTab: e, isExecute: t, schema: r, example: n }) => {
  const a = (0, Xe.useMemo)(() => ({ example: 'example', model: 'model' }), []),
    o =
      (0, Xe.useMemo)(() => Object.keys(a), [a]).includes(e) && r && !t
        ? e
        : a.example,
    s = (e => {
      const t = (0, Xe.useRef)()
      return (
        (0, Xe.useEffect)(() => {
          t.current = e
        }),
        t.current
      )
    })(t),
    [l, i] = (0, Xe.useState)(o),
    c = (0, Xe.useCallback)(e => {
      i(e.target.dataset.name)
    }, [])
  return (
    (0, Xe.useEffect)(() => {
      s && !t && n && i(a.example)
    }, [s, t, n]),
    { activeTab: l, onTabChange: c, tabs: a }
  )
}
var model_example = ({
  schema: e,
  example: t,
  isExecute: r = !1,
  specPath: n,
  includeWriteOnly: a = !1,
  includeReadOnly: o = !1,
  getComponent: s,
  getConfigs: l,
  specSelectors: i,
}) => {
  const { defaultModelRendering: c, defaultModelExpandDepth: u } = l(),
    d = s('ModelWrapper'),
    p = s('HighlightCode', !0),
    m = vt()(5).toString('base64'),
    f = vt()(5).toString('base64'),
    h = vt()(5).toString('base64'),
    g = vt()(5).toString('base64'),
    y = i.isOAS3(),
    {
      activeTab: S,
      tabs: _,
      onTabChange: v,
    } = useTabs({ initialTab: c, isExecute: r, schema: e, example: t })
  return Xe.default.createElement(
    'div',
    { className: 'model-example' },
    Xe.default.createElement(
      'ul',
      { className: 'tab', role: 'tablist' },
      Xe.default.createElement(
        'li',
        {
          className: (0, _r.default)('tabitem', { active: S === _.example }),
          role: 'presentation',
        },
        Xe.default.createElement(
          'button',
          {
            'aria-controls': f,
            'aria-selected': S === _.example,
            className: 'tablinks',
            'data-name': 'example',
            id: m,
            onClick: v,
            role: 'tab',
          },
          r ? 'Edit Value' : 'Example Value',
        ),
      ),
      e &&
        Xe.default.createElement(
          'li',
          {
            className: (0, _r.default)('tabitem', { active: S === _.model }),
            role: 'presentation',
          },
          Xe.default.createElement(
            'button',
            {
              'aria-controls': g,
              'aria-selected': S === _.model,
              className: (0, _r.default)('tablinks', { inactive: r }),
              'data-name': 'model',
              id: h,
              onClick: v,
              role: 'tab',
            },
            y ? 'Schema' : 'Model',
          ),
        ),
    ),
    S === _.example &&
      Xe.default.createElement(
        'div',
        {
          'aria-hidden': S !== _.example,
          'aria-labelledby': m,
          'data-name': 'examplePanel',
          id: f,
          role: 'tabpanel',
          tabIndex: '0',
        },
        t || Xe.default.createElement(p, null, '(no example available'),
      ),
    S === _.model &&
      Xe.default.createElement(
        'div',
        {
          'aria-hidden': S === _.example,
          'aria-labelledby': h,
          'data-name': 'modelPanel',
          id: g,
          role: 'tabpanel',
          tabIndex: '0',
        },
        Xe.default.createElement(d, {
          schema: e,
          getComponent: s,
          getConfigs: l,
          specSelectors: i,
          expandDepth: u,
          specPath: n,
          includeReadOnly: o,
          includeWriteOnly: a,
        }),
      ),
  )
}
class ModelWrapper extends Xe.Component {
  onToggle = (e, t) => {
    this.props.layoutActions &&
      this.props.layoutActions.show(this.props.fullPath, t)
  }
  render() {
    let { getComponent: e, getConfigs: t } = this.props
    const r = e('Model')
    let n
    return (
      this.props.layoutSelectors &&
        (n = this.props.layoutSelectors.isShown(this.props.fullPath)),
      Xe.default.createElement(
        'div',
        { className: 'model-box' },
        Xe.default.createElement(
          r,
          (0, cr.default)({}, this.props, {
            getConfigs: t,
            expanded: n,
            depth: 1,
            onToggle: this.onToggle,
            expandDepth: this.props.expandDepth || 0,
          }),
        ),
      )
    )
  }
}
var Cr,
  xr = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return I.default
    },
  })
function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    _extends.apply(null, arguments)
  )
}
var rolling_load = e =>
  Xe.createElement(
    'svg',
    _extends(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: 200,
        height: 200,
        className: 'rolling-load_svg__lds-rolling',
        preserveAspectRatio: 'xMidYMid',
        style: {
          backgroundImage: 'none',
          backgroundPosition: 'initial initial',
          backgroundRepeat: 'initial initial',
        },
        viewBox: '0 0 100 100',
      },
      e,
    ),
    Cr ||
      (Cr = Xe.createElement(
        'circle',
        {
          cx: 50,
          cy: 50,
          r: 35,
          fill: 'none',
          stroke: '#555',
          strokeDasharray: '164.93361431346415 56.97787143782138',
          strokeWidth: 10,
        },
        Xe.createElement('animateTransform', {
          attributeName: 'transform',
          begin: '0s',
          calcMode: 'linear',
          dur: '1s',
          keyTimes: '0;1',
          repeatCount: 'indefinite',
          type: 'rotate',
          values: '0 50 50;360 50 50',
        }),
      )),
  )
const decodeRefName = e => {
  const t = e.replace(/~1/g, '/').replace(/~0/g, '~')
  try {
    return decodeURIComponent(t)
  } catch {
    return t
  }
}
class Model extends xr.default {
  static propTypes = {
    schema: rr.default.map.isRequired,
    getComponent: Kt.default.func.isRequired,
    getConfigs: Kt.default.func.isRequired,
    specSelectors: Kt.default.object.isRequired,
    name: Kt.default.string,
    displayName: Kt.default.string,
    isRef: Kt.default.bool,
    required: Kt.default.bool,
    expandDepth: Kt.default.number,
    depth: Kt.default.number,
    specPath: rr.default.list.isRequired,
    includeReadOnly: Kt.default.bool,
    includeWriteOnly: Kt.default.bool,
  }
  getModelName = e =>
    -1 !== e.indexOf('#/definitions/')
      ? decodeRefName(e.replace(/^.*#\/definitions\//, ''))
      : -1 !== e.indexOf('#/components/schemas/')
      ? decodeRefName(e.replace(/^.*#\/components\/schemas\//, ''))
      : void 0
  getRefSchema = e => {
    let { specSelectors: t } = this.props
    return t.findDefinition(e)
  }
  render() {
    let {
      getComponent: e,
      getConfigs: t,
      specSelectors: r,
      schema: n,
      required: a,
      name: o,
      isRef: s,
      specPath: l,
      displayName: i,
      includeReadOnly: c,
      includeWriteOnly: u,
    } = this.props
    const d = e('ObjectModel'),
      p = e('ArrayModel'),
      m = e('PrimitiveModel')
    let f = 'object',
      h = n && n.get('$$ref'),
      g = n && n.get('$ref')
    if ((!o && h && (o = this.getModelName(h)), g)) {
      const e = this.getModelName(g),
        t = this.getRefSchema(e)
      Qe.Map.isMap(t)
        ? ((n = t.mergeDeep(n)), h || ((n = n.set('$$ref', g)), (h = g)))
        : Qe.Map.isMap(n) && 1 === n.size && ((n = null), (o = g))
    }
    if (!n)
      return Xe.default.createElement(
        'span',
        { className: 'model model-title' },
        Xe.default.createElement(
          'span',
          { className: 'model-title__text' },
          i || o,
        ),
        !g &&
          Xe.default.createElement(rolling_load, {
            height: '20px',
            width: '20px',
          }),
      )
    const y = r.isOAS3() && n.get('deprecated')
    switch (
      ((s = void 0 !== s ? s : !!h), (f = (n && n.get('type')) || f), f)
    ) {
      case 'object':
        return Xe.default.createElement(
          d,
          (0, cr.default)({ className: 'object' }, this.props, {
            specPath: l,
            getConfigs: t,
            schema: n,
            name: o,
            deprecated: y,
            isRef: s,
            includeReadOnly: c,
            includeWriteOnly: u,
          }),
        )
      case 'array':
        return Xe.default.createElement(
          p,
          (0, cr.default)({ className: 'array' }, this.props, {
            getConfigs: t,
            schema: n,
            name: o,
            deprecated: y,
            required: a,
            includeReadOnly: c,
            includeWriteOnly: u,
          }),
        )
      default:
        return Xe.default.createElement(
          m,
          (0, cr.default)({}, this.props, {
            getComponent: e,
            getConfigs: t,
            schema: n,
            name: o,
            deprecated: y,
            required: a,
          }),
        )
    }
  }
}
class Models extends Xe.Component {
  getSchemaBasePath = () =>
    this.props.specSelectors.isOAS3()
      ? ['components', 'schemas']
      : ['definitions']
  getCollapsedContent = () => ' '
  handleToggle = (e, t) => {
    const { layoutActions: r } = this.props
    r.show([...this.getSchemaBasePath(), e], t),
      t &&
        this.props.specActions.requestResolvedSubtree([
          ...this.getSchemaBasePath(),
          e,
        ])
  }
  onLoadModels = e => {
    e && this.props.layoutActions.readyToScroll(this.getSchemaBasePath(), e)
  }
  onLoadModel = e => {
    if (e) {
      const t = e.getAttribute('data-name')
      this.props.layoutActions.readyToScroll(
        [...this.getSchemaBasePath(), t],
        e,
      )
    }
  }
  render() {
    let {
        specSelectors: e,
        getComponent: t,
        layoutSelectors: r,
        layoutActions: n,
        getConfigs: a,
      } = this.props,
      o = e.definitions(),
      { docExpansion: s, defaultModelsExpandDepth: l } = a()
    if (!o.size || l < 0) return null
    const i = this.getSchemaBasePath()
    let c = r.isShown(i, l > 0 && 'none' !== s)
    const u = e.isOAS3(),
      d = t('ModelWrapper'),
      p = t('Collapse'),
      m = t('ModelCollapse'),
      f = t('JumpToPath', !0),
      h = t('ArrowUpIcon'),
      g = t('ArrowDownIcon')
    return Xe.default.createElement(
      'section',
      { className: c ? 'models is-open' : 'models', ref: this.onLoadModels },
      Xe.default.createElement(
        'h4',
        null,
        Xe.default.createElement(
          'button',
          {
            'aria-expanded': c,
            className: 'models-control',
            onClick: () => n.show(i, !c),
          },
          Xe.default.createElement('span', null, u ? 'Schemas' : 'Models'),
          c
            ? Xe.default.createElement(h, null)
            : Xe.default.createElement(g, null),
        ),
      ),
      Xe.default.createElement(
        p,
        { isOpened: c },
        o
          .entrySeq()
          .map(([o]) => {
            const s = [...i, o],
              c = Qe.default.List(s),
              u = e.specResolvedSubtree(s),
              p = e.specJson().getIn(s),
              h = Qe.Map.isMap(u) ? u : Qe.default.Map(),
              g = Qe.Map.isMap(p) ? p : Qe.default.Map(),
              y = h.get('title') || g.get('title') || o,
              S = r.isShown(s, !1)
            S &&
              0 === h.size &&
              g.size > 0 &&
              this.props.specActions.requestResolvedSubtree(s)
            const _ = Xe.default.createElement(d, {
                name: o,
                expandDepth: l,
                schema: h || Qe.default.Map(),
                displayName: y,
                fullPath: s,
                specPath: c,
                getComponent: t,
                specSelectors: e,
                getConfigs: a,
                layoutSelectors: r,
                layoutActions: n,
                includeReadOnly: !0,
                includeWriteOnly: !0,
              }),
              v = Xe.default.createElement(
                'span',
                { className: 'model-box' },
                Xe.default.createElement(
                  'span',
                  { className: 'model model-title' },
                  y,
                ),
              )
            return Xe.default.createElement(
              'div',
              {
                id: `model-${o}`,
                className: 'model-container',
                key: `models-section-${o}`,
                'data-name': o,
                ref: this.onLoadModel,
              },
              Xe.default.createElement(
                'span',
                { className: 'models-jump-to-path' },
                Xe.default.createElement(f, { specPath: c }),
              ),
              Xe.default.createElement(
                m,
                {
                  classes: 'model-box',
                  collapsedContent: this.getCollapsedContent(o),
                  onToggle: this.handleToggle,
                  title: v,
                  displayName: y,
                  modelName: o,
                  specPath: c,
                  layoutSelectors: r,
                  layoutActions: n,
                  hideSelfOnExpand: !0,
                  expanded: l > 0 && S,
                },
                _,
              ),
            )
          })
          .toArray(),
      ),
    )
  }
}
var enum_model = ({ value: e, getComponent: t }) => {
  let r = t('ModelCollapse'),
    n = Xe.default.createElement('span', null, 'Array [ ', e.count(), ' ]')
  return Xe.default.createElement(
    'span',
    { className: 'prop-enum' },
    'Enum:',
    Xe.default.createElement('br', null),
    Xe.default.createElement(
      r,
      { collapsedContent: n },
      '[ ',
      e.map(String).join(', '),
      ' ]',
    ),
  )
}
class ObjectModel extends Xe.Component {
  render() {
    let {
        schema: e,
        name: t,
        displayName: r,
        isRef: n,
        getComponent: a,
        getConfigs: o,
        depth: s,
        onToggle: l,
        expanded: i,
        specPath: c,
        ...u
      } = this.props,
      {
        specSelectors: d,
        expandDepth: p,
        includeReadOnly: m,
        includeWriteOnly: f,
      } = u
    const { isOAS3: h } = d
    if (!e) return null
    const { showExtensions: g } = o()
    let y = e.get('description'),
      S = e.get('properties'),
      _ = e.get('additionalProperties'),
      v = e.get('title') || r || t,
      b = e.get('required'),
      w = e.filter(
        (e, t) =>
          -1 !==
          ['maxProperties', 'minProperties', 'nullable', 'example'].indexOf(t),
      ),
      C = e.get('deprecated'),
      x = e.getIn(['externalDocs', 'url']),
      O = e.getIn(['externalDocs', 'description'])
    const k = a('JumpToPath', !0),
      N = a('Markdown', !0),
      A = a('Model'),
      I = a('ModelCollapse'),
      R = a('Property'),
      T = a('Link'),
      JumpToPathSection = () =>
        Xe.default.createElement(
          'span',
          { className: 'model-jump-to-path' },
          Xe.default.createElement(k, { specPath: c }),
        ),
      B = Xe.default.createElement(
        'span',
        null,
        Xe.default.createElement('span', null, '{'),
        '...',
        Xe.default.createElement('span', null, '}'),
        n ? Xe.default.createElement(JumpToPathSection, null) : '',
      ),
      j = d.isOAS3() ? e.get('allOf') : null,
      P = d.isOAS3() ? e.get('anyOf') : null,
      M = d.isOAS3() ? e.get('oneOf') : null,
      q = d.isOAS3() ? e.get('not') : null,
      L =
        v &&
        Xe.default.createElement(
          'span',
          { className: 'model-title' },
          n &&
            e.get('$$ref') &&
            Xe.default.createElement(
              'span',
              { className: 'model-hint' },
              e.get('$$ref'),
            ),
          Xe.default.createElement(
            'span',
            { className: 'model-title__text' },
            v,
          ),
        )
    return Xe.default.createElement(
      'span',
      { className: 'model' },
      Xe.default.createElement(
        I,
        {
          modelName: t,
          title: L,
          onToggle: l,
          expanded: !!i || s <= p,
          collapsedContent: B,
        },
        Xe.default.createElement(
          'span',
          { className: 'brace-open object' },
          '{',
        ),
        n ? Xe.default.createElement(JumpToPathSection, null) : null,
        Xe.default.createElement(
          'span',
          { className: 'inner-object' },
          Xe.default.createElement(
            'table',
            { className: 'model' },
            Xe.default.createElement(
              'tbody',
              null,
              y
                ? Xe.default.createElement(
                    'tr',
                    { className: 'description' },
                    Xe.default.createElement('td', null, 'description:'),
                    Xe.default.createElement(
                      'td',
                      null,
                      Xe.default.createElement(N, { source: y }),
                    ),
                  )
                : null,
              x &&
                Xe.default.createElement(
                  'tr',
                  { className: 'external-docs' },
                  Xe.default.createElement('td', null, 'externalDocs:'),
                  Xe.default.createElement(
                    'td',
                    null,
                    Xe.default.createElement(
                      T,
                      { target: '_blank', href: sanitizeUrl(x) },
                      O || x,
                    ),
                  ),
                ),
              C
                ? Xe.default.createElement(
                    'tr',
                    { className: 'property' },
                    Xe.default.createElement('td', null, 'deprecated:'),
                    Xe.default.createElement('td', null, 'true'),
                  )
                : null,
              S && S.size
                ? S.entrySeq()
                    .filter(
                      ([, e]) =>
                        (!e.get('readOnly') || m) && (!e.get('writeOnly') || f),
                    )
                    .map(([e, r]) => {
                      let n = h() && r.get('deprecated'),
                        l = Qe.List.isList(b) && b.contains(e),
                        i = ['property-row']
                      return (
                        n && i.push('deprecated'),
                        l && i.push('required'),
                        Xe.default.createElement(
                          'tr',
                          { key: e, className: i.join(' ') },
                          Xe.default.createElement(
                            'td',
                            null,
                            e,
                            l &&
                              Xe.default.createElement(
                                'span',
                                { className: 'star' },
                                '*',
                              ),
                          ),
                          Xe.default.createElement(
                            'td',
                            null,
                            Xe.default.createElement(
                              A,
                              (0, cr.default)(
                                { key: `object-${t}-${e}_${r}` },
                                u,
                                {
                                  required: l,
                                  getComponent: a,
                                  specPath: c.push('properties', e),
                                  getConfigs: o,
                                  schema: r,
                                  depth: s + 1,
                                },
                              ),
                            ),
                          ),
                        )
                      )
                    })
                    .toArray()
                : null,
              g
                ? Xe.default.createElement(
                    'tr',
                    null,
                    Xe.default.createElement('td', null, ' '),
                  )
                : null,
              g
                ? e
                    .entrySeq()
                    .map(([e, t]) => {
                      if ('x-' !== e.slice(0, 2)) return
                      const r = t ? (t.toJS ? t.toJS() : t) : null
                      return Xe.default.createElement(
                        'tr',
                        { key: e, className: 'extension' },
                        Xe.default.createElement('td', null, e),
                        Xe.default.createElement('td', null, JSON.stringify(r)),
                      )
                    })
                    .toArray()
                : null,
              _ && _.size
                ? Xe.default.createElement(
                    'tr',
                    null,
                    Xe.default.createElement('td', null, '< * >:'),
                    Xe.default.createElement(
                      'td',
                      null,
                      Xe.default.createElement(
                        A,
                        (0, cr.default)({}, u, {
                          required: !1,
                          getComponent: a,
                          specPath: c.push('additionalProperties'),
                          getConfigs: o,
                          schema: _,
                          depth: s + 1,
                        }),
                      ),
                    ),
                  )
                : null,
              j
                ? Xe.default.createElement(
                    'tr',
                    null,
                    Xe.default.createElement('td', null, 'allOf ->'),
                    Xe.default.createElement(
                      'td',
                      null,
                      j.map((e, t) =>
                        Xe.default.createElement(
                          'div',
                          { key: t },
                          Xe.default.createElement(
                            A,
                            (0, cr.default)({}, u, {
                              required: !1,
                              getComponent: a,
                              specPath: c.push('allOf', t),
                              getConfigs: o,
                              schema: e,
                              depth: s + 1,
                            }),
                          ),
                        ),
                      ),
                    ),
                  )
                : null,
              P
                ? Xe.default.createElement(
                    'tr',
                    null,
                    Xe.default.createElement('td', null, 'anyOf ->'),
                    Xe.default.createElement(
                      'td',
                      null,
                      P.map((e, t) =>
                        Xe.default.createElement(
                          'div',
                          { key: t },
                          Xe.default.createElement(
                            A,
                            (0, cr.default)({}, u, {
                              required: !1,
                              getComponent: a,
                              specPath: c.push('anyOf', t),
                              getConfigs: o,
                              schema: e,
                              depth: s + 1,
                            }),
                          ),
                        ),
                      ),
                    ),
                  )
                : null,
              M
                ? Xe.default.createElement(
                    'tr',
                    null,
                    Xe.default.createElement('td', null, 'oneOf ->'),
                    Xe.default.createElement(
                      'td',
                      null,
                      M.map((e, t) =>
                        Xe.default.createElement(
                          'div',
                          { key: t },
                          Xe.default.createElement(
                            A,
                            (0, cr.default)({}, u, {
                              required: !1,
                              getComponent: a,
                              specPath: c.push('oneOf', t),
                              getConfigs: o,
                              schema: e,
                              depth: s + 1,
                            }),
                          ),
                        ),
                      ),
                    ),
                  )
                : null,
              q
                ? Xe.default.createElement(
                    'tr',
                    null,
                    Xe.default.createElement('td', null, 'not ->'),
                    Xe.default.createElement(
                      'td',
                      null,
                      Xe.default.createElement(
                        'div',
                        null,
                        Xe.default.createElement(
                          A,
                          (0, cr.default)({}, u, {
                            required: !1,
                            getComponent: a,
                            specPath: c.push('not'),
                            getConfigs: o,
                            schema: q,
                            depth: s + 1,
                          }),
                        ),
                      ),
                    ),
                  )
                : null,
            ),
          ),
        ),
        Xe.default.createElement('span', { className: 'brace-close' }, '}'),
      ),
      w.size
        ? w
            .entrySeq()
            .map(([e, t]) =>
              Xe.default.createElement(R, {
                key: `${e}-${t}`,
                propKey: e,
                propVal: t,
                propClass: 'property',
              }),
            )
        : null,
    )
  }
}
class ArrayModel extends Xe.Component {
  render() {
    let {
        getComponent: e,
        getConfigs: t,
        schema: r,
        depth: n,
        expandDepth: a,
        name: o,
        displayName: s,
        specPath: l,
      } = this.props,
      i = r.get('description'),
      c = r.get('items'),
      u = r.get('title') || s || o,
      d = r.filter(
        (e, t) =>
          -1 ===
          ['type', 'items', 'description', '$$ref', 'externalDocs'].indexOf(t),
      ),
      p = r.getIn(['externalDocs', 'url']),
      m = r.getIn(['externalDocs', 'description'])
    const f = e('Markdown', !0),
      h = e('ModelCollapse'),
      g = e('Model'),
      y = e('Property'),
      S = e('Link'),
      _ =
        u &&
        Xe.default.createElement(
          'span',
          { className: 'model-title' },
          Xe.default.createElement(
            'span',
            { className: 'model-title__text' },
            u,
          ),
        )
    return Xe.default.createElement(
      'span',
      { className: 'model' },
      Xe.default.createElement(
        h,
        { title: _, expanded: n <= a, collapsedContent: '[...]' },
        '[',
        d.size
          ? d
              .entrySeq()
              .map(([e, t]) =>
                Xe.default.createElement(y, {
                  key: `${e}-${t}`,
                  propKey: e,
                  propVal: t,
                  propClass: 'property',
                }),
              )
          : null,
        i
          ? Xe.default.createElement(f, { source: i })
          : d.size
          ? Xe.default.createElement('div', { className: 'markdown' })
          : null,
        p &&
          Xe.default.createElement(
            'div',
            { className: 'external-docs' },
            Xe.default.createElement(
              S,
              { target: '_blank', href: sanitizeUrl(p) },
              m || p,
            ),
          ),
        Xe.default.createElement(
          'span',
          null,
          Xe.default.createElement(
            g,
            (0, cr.default)({}, this.props, {
              getConfigs: t,
              specPath: l.push('items'),
              name: null,
              schema: c,
              required: !1,
              depth: n + 1,
            }),
          ),
        ),
        ']',
      ),
    )
  }
}
const Or = 'property primitive'
class Primitive extends Xe.Component {
  render() {
    let {
      schema: e,
      getComponent: t,
      getConfigs: r,
      name: n,
      displayName: a,
      depth: o,
      expandDepth: s,
    } = this.props
    const { showExtensions: l } = r()
    if (!e || !e.get) return Xe.default.createElement('div', null)
    let i = e.get('type'),
      c = e.get('format'),
      u = e.get('xml'),
      d = e.get('enum'),
      p = e.get('title') || a || n,
      m = e.get('description'),
      f = getExtensions(e),
      h = e
        .filter(
          (e, t) =>
            -1 ===
            [
              'enum',
              'type',
              'format',
              'description',
              '$$ref',
              'externalDocs',
            ].indexOf(t),
        )
        .filterNot((e, t) => f.has(t)),
      g = e.getIn(['externalDocs', 'url']),
      y = e.getIn(['externalDocs', 'description'])
    const S = t('Markdown', !0),
      _ = t('EnumModel'),
      v = t('Property'),
      b = t('ModelCollapse'),
      w = t('Link'),
      C =
        p &&
        Xe.default.createElement(
          'span',
          { className: 'model-title' },
          Xe.default.createElement(
            'span',
            { className: 'model-title__text' },
            p,
          ),
        )
    return Xe.default.createElement(
      'span',
      { className: 'model' },
      Xe.default.createElement(
        b,
        { title: C, expanded: o <= s, collapsedContent: '[...]' },
        Xe.default.createElement(
          'span',
          { className: 'prop' },
          n &&
            o > 1 &&
            Xe.default.createElement('span', { className: 'prop-name' }, p),
          Xe.default.createElement('span', { className: 'prop-type' }, i),
          c &&
            Xe.default.createElement(
              'span',
              { className: 'prop-format' },
              '($',
              c,
              ')',
            ),
          h.size
            ? h
                .entrySeq()
                .map(([e, t]) =>
                  Xe.default.createElement(v, {
                    key: `${e}-${t}`,
                    propKey: e,
                    propVal: t,
                    propClass: Or,
                  }),
                )
            : null,
          l && f.size
            ? f
                .entrySeq()
                .map(([e, t]) =>
                  Xe.default.createElement(v, {
                    key: `${e}-${t}`,
                    propKey: e,
                    propVal: t,
                    propClass: Or,
                  }),
                )
            : null,
          m ? Xe.default.createElement(S, { source: m }) : null,
          g &&
            Xe.default.createElement(
              'div',
              { className: 'external-docs' },
              Xe.default.createElement(
                w,
                { target: '_blank', href: sanitizeUrl(g) },
                y || g,
              ),
            ),
          u && u.size
            ? Xe.default.createElement(
                'span',
                null,
                Xe.default.createElement('br', null),
                Xe.default.createElement('span', { className: Or }, 'xml:'),
                u
                  .entrySeq()
                  .map(([e, t]) =>
                    Xe.default.createElement(
                      'span',
                      { key: `${e}-${t}`, className: Or },
                      Xe.default.createElement('br', null),
                      '   ',
                      e,
                      ': ',
                      String(t),
                    ),
                  )
                  .toArray(),
              )
            : null,
          d && Xe.default.createElement(_, { value: d, getComponent: t }),
        ),
      ),
    )
  }
}
class Schemes extends Xe.default.Component {
  UNSAFE_componentWillMount() {
    let { schemes: e } = this.props
    this.setScheme(e.first())
  }
  UNSAFE_componentWillReceiveProps(e) {
    ;(this.props.currentScheme &&
      e.schemes.includes(this.props.currentScheme)) ||
      this.setScheme(e.schemes.first())
  }
  onChange = e => {
    this.setScheme(e.target.value)
  }
  setScheme = e => {
    let { path: t, method: r, specActions: n } = this.props
    n.setScheme(e, t, r)
  }
  render() {
    let { schemes: e, currentScheme: t } = this.props
    return Xe.default.createElement(
      'label',
      { htmlFor: 'schemes' },
      Xe.default.createElement(
        'span',
        { className: 'schemes-title' },
        'Schemes',
      ),
      Xe.default.createElement(
        'select',
        { onChange: this.onChange, value: t, id: 'schemes' },
        e
          .valueSeq()
          .map(e => Xe.default.createElement('option', { value: e, key: e }, e))
          .toArray(),
      ),
    )
  }
}
class SchemesContainer extends Xe.default.Component {
  render() {
    const { specActions: e, specSelectors: t, getComponent: r } = this.props,
      n = t.operationScheme(),
      a = t.schemes(),
      o = r('schemes')
    return a && a.size
      ? Xe.default.createElement(o, {
          currentScheme: n,
          schemes: a,
          specActions: e,
        })
      : null
  }
}
var kr = (function (e) {
  var t = {}
  return __webpack_require__.d(t, e), t
})({
  default: function () {
    return R.default
  },
})
const Nr = {
  value: '',
  onChange: () => {},
  schema: {},
  keyName: '',
  required: !1,
  errors: (0, Qe.List)(),
}
class JsonSchemaForm extends Xe.Component {
  static defaultProps = Nr
  componentDidMount() {
    const { dispatchInitialValue: e, value: t, onChange: r } = this.props
    e ? r(t) : !1 === e && r('')
  }
  render() {
    let {
      schema: e,
      errors: t,
      value: r,
      onChange: n,
      getComponent: a,
      fn: o,
      disabled: s,
    } = this.props
    const l = e && e.get ? e.get('format') : null,
      i = e && e.get ? e.get('type') : null
    let getComponentSilently = e => a(e, !1, { failSilently: !0 }),
      c = i
        ? getComponentSilently(l ? `JsonSchema_${i}_${l}` : `JsonSchema_${i}`)
        : a('JsonSchema_string')
    return (
      c || (c = a('JsonSchema_string')),
      Xe.default.createElement(
        c,
        (0, cr.default)({}, this.props, {
          errors: t,
          fn: o,
          getComponent: a,
          value: r,
          onChange: n,
          schema: e,
          disabled: s,
        }),
      )
    )
  }
}
class JsonSchema_string extends Xe.Component {
  static defaultProps = Nr
  onChange = e => {
    const t =
      this.props.schema && 'file' === this.props.schema.get('type')
        ? e.target.files[0]
        : e.target.value
    this.props.onChange(t, this.props.keyName)
  }
  onEnumChange = e => this.props.onChange(e)
  render() {
    let {
      getComponent: e,
      value: t,
      schema: r,
      errors: n,
      required: a,
      description: o,
      disabled: s,
    } = this.props
    const l = r && r.get ? r.get('enum') : null,
      i = r && r.get ? r.get('format') : null,
      c = r && r.get ? r.get('type') : null,
      u = r && r.get ? r.get('in') : null
    if ((t || (t = ''), (n = n.toJS ? n.toJS() : []), l)) {
      const r = e('Select')
      return Xe.default.createElement(r, {
        className: n.length ? 'invalid' : '',
        title: n.length ? n : '',
        allowedValues: [...l],
        value: t,
        allowEmptyValue: !a,
        disabled: s,
        onChange: this.onEnumChange,
      })
    }
    const d = s || (u && 'formData' === u && !('FormData' in window)),
      p = e('Input')
    return c && 'file' === c
      ? Xe.default.createElement(p, {
          type: 'file',
          className: n.length ? 'invalid' : '',
          title: n.length ? n : '',
          onChange: this.onChange,
          disabled: d,
        })
      : Xe.default.createElement(kr.default, {
          type: i && 'password' === i ? 'password' : 'text',
          className: n.length ? 'invalid' : '',
          title: n.length ? n : '',
          value: t,
          minLength: 0,
          debounceTimeout: 350,
          placeholder: o,
          onChange: this.onChange,
          disabled: d,
        })
  }
}
class JsonSchema_array extends Xe.PureComponent {
  static defaultProps = Nr
  constructor(e, t) {
    super(e, t),
      (this.state = { value: valueOrEmptyList(e.value), schema: e.schema })
  }
  UNSAFE_componentWillReceiveProps(e) {
    const t = valueOrEmptyList(e.value)
    t !== this.state.value && this.setState({ value: t }),
      e.schema !== this.state.schema && this.setState({ schema: e.schema })
  }
  onChange = () => {
    this.props.onChange(this.state.value)
  }
  onItemChange = (e, t) => {
    this.setState(({ value: r }) => ({ value: r.set(t, e) }), this.onChange)
  }
  removeItem = e => {
    this.setState(({ value: t }) => ({ value: t.delete(e) }), this.onChange)
  }
  addItem = () => {
    const { fn: e } = this.props
    let t = valueOrEmptyList(this.state.value)
    this.setState(
      () => ({
        value: t.push(
          e.getSampleSchema(this.state.schema.get('items'), !1, {
            includeWriteOnly: !0,
          }),
        ),
      }),
      this.onChange,
    )
  }
  onEnumChange = e => {
    this.setState(() => ({ value: e }), this.onChange)
  }
  render() {
    let {
      getComponent: e,
      required: t,
      schema: r,
      errors: n,
      fn: a,
      disabled: o,
    } = this.props
    n = n.toJS ? n.toJS() : Array.isArray(n) ? n : []
    const s = n.filter(e => 'string' == typeof e),
      l = n.filter(e => void 0 !== e.needRemove).map(e => e.error),
      i = this.state.value,
      c = !!(i && i.count && i.count() > 0),
      u = r.getIn(['items', 'enum']),
      d = r.getIn(['items', 'type']),
      p = r.getIn(['items', 'format']),
      m = r.get('items')
    let f,
      h = !1,
      g = 'file' === d || ('string' === d && 'binary' === p)
    if (
      (d && p
        ? (f = e(`JsonSchema_${d}_${p}`))
        : ('boolean' !== d && 'array' !== d && 'object' !== d) ||
          (f = e(`JsonSchema_${d}`)),
      f || g || (h = !0),
      u)
    ) {
      const r = e('Select')
      return Xe.default.createElement(r, {
        className: n.length ? 'invalid' : '',
        title: n.length ? n : '',
        multiple: !0,
        value: i,
        disabled: o,
        allowedValues: u,
        allowEmptyValue: !t,
        onChange: this.onEnumChange,
      })
    }
    const y = e('Button')
    return Xe.default.createElement(
      'div',
      { className: 'json-schema-array' },
      c
        ? i.map((t, r) => {
            const s = (0, Qe.fromJS)([
              ...n.filter(e => e.index === r).map(e => e.error),
            ])
            return Xe.default.createElement(
              'div',
              { key: r, className: 'json-schema-form-item' },
              g
                ? Xe.default.createElement(JsonSchemaArrayItemFile, {
                    value: t,
                    onChange: e => this.onItemChange(e, r),
                    disabled: o,
                    errors: s,
                    getComponent: e,
                  })
                : h
                ? Xe.default.createElement(JsonSchemaArrayItemText, {
                    value: t,
                    onChange: e => this.onItemChange(e, r),
                    disabled: o,
                    errors: s,
                  })
                : Xe.default.createElement(
                    f,
                    (0, cr.default)({}, this.props, {
                      value: t,
                      onChange: e => this.onItemChange(e, r),
                      disabled: o,
                      errors: s,
                      schema: m,
                      getComponent: e,
                      fn: a,
                    }),
                  ),
              o
                ? null
                : Xe.default.createElement(
                    y,
                    {
                      className: `btn btn-sm json-schema-form-item-remove ${
                        l.length ? 'invalid' : null
                      }`,
                      title: l.length ? l : '',
                      onClick: () => this.removeItem(r),
                    },
                    ' - ',
                  ),
            )
          })
        : null,
      o
        ? null
        : Xe.default.createElement(
            y,
            {
              className: `btn btn-sm json-schema-form-item-add ${
                s.length ? 'invalid' : null
              }`,
              title: s.length ? s : '',
              onClick: this.addItem,
            },
            'Add ',
            d ? `${d} ` : '',
            'item',
          ),
    )
  }
}
class JsonSchemaArrayItemText extends Xe.Component {
  static defaultProps = Nr
  onChange = e => {
    const t = e.target.value
    this.props.onChange(t, this.props.keyName)
  }
  render() {
    let { value: e, errors: t, description: r, disabled: n } = this.props
    return (
      e || (e = ''),
      (t = t.toJS ? t.toJS() : []),
      Xe.default.createElement(kr.default, {
        type: 'text',
        className: t.length ? 'invalid' : '',
        title: t.length ? t : '',
        value: e,
        minLength: 0,
        debounceTimeout: 350,
        placeholder: r,
        onChange: this.onChange,
        disabled: n,
      })
    )
  }
}
class JsonSchemaArrayItemFile extends Xe.Component {
  static defaultProps = Nr
  onFileChange = e => {
    const t = e.target.files[0]
    this.props.onChange(t, this.props.keyName)
  }
  render() {
    let { getComponent: e, errors: t, disabled: r } = this.props
    const n = e('Input'),
      a = r || !('FormData' in window)
    return Xe.default.createElement(n, {
      type: 'file',
      className: t.length ? 'invalid' : '',
      title: t.length ? t : '',
      onChange: this.onFileChange,
      disabled: a,
    })
  }
}
class JsonSchema_boolean extends Xe.Component {
  static defaultProps = Nr
  onEnumChange = e => this.props.onChange(e)
  render() {
    let {
      getComponent: e,
      value: t,
      errors: r,
      schema: n,
      required: a,
      disabled: o,
    } = this.props
    r = r.toJS ? r.toJS() : []
    let s = n && n.get ? n.get('enum') : null,
      l = !s || !a,
      i = !s && ['true', 'false']
    const c = e('Select')
    return Xe.default.createElement(c, {
      className: r.length ? 'invalid' : '',
      title: r.length ? r : '',
      value: String(t),
      disabled: o,
      allowedValues: s ? [...s] : i,
      allowEmptyValue: l,
      onChange: this.onEnumChange,
    })
  }
}
const stringifyObjectErrors = e =>
  e.map(e => {
    const t = void 0 !== e.propKey ? e.propKey : e.index
    let r =
      'string' == typeof e ? e : 'string' == typeof e.error ? e.error : null
    if (!t && r) return r
    let n = e.error,
      a = `/${e.propKey}`
    for (; 'object' == typeof n; ) {
      const e = void 0 !== n.propKey ? n.propKey : n.index
      if (void 0 === e) break
      if (((a += `/${e}`), !n.error)) break
      n = n.error
    }
    return `${a}: ${n}`
  })
class JsonSchema_object extends Xe.PureComponent {
  constructor() {
    super()
  }
  static defaultProps = Nr
  onChange = e => {
    this.props.onChange(e)
  }
  handleOnChange = e => {
    const t = e.target.value
    this.onChange(t)
  }
  render() {
    let { getComponent: e, value: t, errors: r, disabled: n } = this.props
    const a = e('TextArea')
    return (
      (r = r.toJS ? r.toJS() : Array.isArray(r) ? r : []),
      Xe.default.createElement(
        'div',
        null,
        Xe.default.createElement(a, {
          className: (0, _r.default)({ invalid: r.length }),
          title: r.length ? stringifyObjectErrors(r).join(', ') : '',
          value: stringify(t),
          disabled: n,
          onChange: this.handleOnChange,
        }),
      )
    )
  }
}
function valueOrEmptyList(e) {
  return Qe.List.isList(e)
    ? e
    : Array.isArray(e)
    ? (0, Qe.fromJS)(e)
    : (0, Qe.List)()
}
var json_schema_5 = () => ({
    components: {
      modelExample: model_example,
      ModelWrapper,
      ModelCollapse,
      Model,
      Models,
      EnumModel: enum_model,
      ObjectModel,
      ArrayModel,
      PrimitiveModel: Primitive,
      schemes: Schemes,
      SchemesContainer,
      ...Ue,
    },
  }),
  Ar = __webpack_require__(123),
  Ir = __webpack_require__.n(Ar),
  Rr = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return T.default
    },
  }),
  Tr = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return B.default
    },
  })
const shallowArrayEquals = e => t =>
    Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === t.length &&
    e.every((e, r) => e === t[r]),
  list = (...e) => e
class Cache extends Map {
  delete(e) {
    const t = Array.from(this.keys()).find(shallowArrayEquals(e))
    return super.delete(t)
  }
  get(e) {
    const t = Array.from(this.keys()).find(shallowArrayEquals(e))
    return super.get(t)
  }
  has(e) {
    return -1 !== Array.from(this.keys()).findIndex(shallowArrayEquals(e))
  }
}
var utils_memoizeN = (e, t = list) => {
  const { Cache: r } = mt.default
  mt.default.Cache = Cache
  const n = (0, mt.default)(e, t)
  return (mt.default.Cache = r), n
}
const Br = {
    string: e =>
      e.pattern
        ? (e => {
            try {
              return new Rr.default(e).gen()
            } catch (e) {
              return 'string'
            }
          })(e.pattern)
        : 'string',
    string_email: () => 'user@example.com',
    'string_date-time': () => new Date().toISOString(),
    string_date: () => new Date().toISOString().substring(0, 10),
    string_uuid: () => '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    string_hostname: () => 'example.com',
    string_ipv4: () => '198.51.100.42',
    string_ipv6: () => '2001:0db8:5b96:0000:0000:426f:8e17:642a',
    number: () => 0,
    number_float: () => 0,
    integer: () => 0,
    boolean: e => 'boolean' != typeof e.default || e.default,
  },
  primitive = e => {
    e = objectify(e)
    let { type: t, format: r } = e,
      n = Br[`${t}_${r}`] || Br[t]
    return isFunc(n) ? n(e) : 'Unknown Type: ' + e.type
  },
  sanitizeRef = e =>
    deeplyStripKey(
      e,
      '$$ref',
      e => 'string' == typeof e && e.indexOf('#') > -1,
    ),
  jr = ['maxProperties', 'minProperties'],
  Pr = ['minItems', 'maxItems'],
  Mr = ['minimum', 'maximum', 'exclusiveMinimum', 'exclusiveMaximum'],
  qr = ['minLength', 'maxLength'],
  mergeJsonSchema = (e, t, r = {}) => {
    const n = { ...e }
    if (
      ([
        'example',
        'default',
        'enum',
        'xml',
        'type',
        ...jr,
        ...Pr,
        ...Mr,
        ...qr,
      ].forEach(e =>
        (e => {
          void 0 === n[e] && void 0 !== t[e] && (n[e] = t[e])
        })(e),
      ),
      void 0 !== t.required &&
        Array.isArray(t.required) &&
        ((void 0 !== n.required && n.required.length) || (n.required = []),
        t.required.forEach(e => {
          n.required.includes(e) || n.required.push(e)
        })),
      t.properties)
    ) {
      n.properties || (n.properties = {})
      let e = objectify(t.properties)
      for (let a in e)
        Object.prototype.hasOwnProperty.call(e, a) &&
          ((e[a] && e[a].deprecated) ||
            (e[a] && e[a].readOnly && !r.includeReadOnly) ||
            (e[a] && e[a].writeOnly && !r.includeWriteOnly) ||
            n.properties[a] ||
            ((n.properties[a] = e[a]),
            !t.required &&
              Array.isArray(t.required) &&
              -1 !== t.required.indexOf(a) &&
              (n.required ? n.required.push(a) : (n.required = [a]))))
    }
    return (
      t.items &&
        (n.items || (n.items = {}),
        (n.items = mergeJsonSchema(n.items, t.items, r))),
      n
    )
  },
  sampleFromSchemaGeneric = (e, t = {}, r = void 0, n = !1) => {
    e && isFunc(e.toJS) && (e = e.toJS())
    let a =
      void 0 !== r || (e && void 0 !== e.example) || (e && void 0 !== e.default)
    const o = !a && e && e.oneOf && e.oneOf.length > 0,
      s = !a && e && e.anyOf && e.anyOf.length > 0
    if (!a && (o || s)) {
      const r = objectify(o ? e.oneOf[0] : e.anyOf[0])
      if (
        (!(e = mergeJsonSchema(e, r, t)).xml && r.xml && (e.xml = r.xml),
        void 0 !== e.example && void 0 !== r.example)
      )
        a = !0
      else if (r.properties) {
        e.properties || (e.properties = {})
        let n = objectify(r.properties)
        for (let a in n)
          Object.prototype.hasOwnProperty.call(n, a) &&
            ((n[a] && n[a].deprecated) ||
              (n[a] && n[a].readOnly && !t.includeReadOnly) ||
              (n[a] && n[a].writeOnly && !t.includeWriteOnly) ||
              e.properties[a] ||
              ((e.properties[a] = n[a]),
              !r.required &&
                Array.isArray(r.required) &&
                -1 !== r.required.indexOf(a) &&
                (e.required ? e.required.push(a) : (e.required = [a]))))
      }
    }
    const l = {}
    let {
        xml: i,
        type: c,
        example: u,
        properties: d,
        additionalProperties: p,
        items: m,
      } = e || {},
      { includeReadOnly: f, includeWriteOnly: h } = t
    i = i || {}
    let g,
      { name: y, prefix: S, namespace: _ } = i,
      v = {}
    if (n && ((y = y || 'notagname'), (g = (S ? S + ':' : '') + y), _)) {
      l[S ? 'xmlns:' + S : 'xmlns'] = _
    }
    n && (v[g] = [])
    const schemaHasAny = t =>
      t.some(t => Object.prototype.hasOwnProperty.call(e, t))
    e &&
      !c &&
      (d || p || schemaHasAny(jr)
        ? (c = 'object')
        : m || schemaHasAny(Pr)
        ? (c = 'array')
        : schemaHasAny(Mr)
        ? ((c = 'number'), (e.type = 'number'))
        : a || e.enum || ((c = 'string'), (e.type = 'string')))
    const handleMinMaxItems = t => {
        if (
          (null != e?.maxItems && (t = t.slice(0, e?.maxItems)),
          null != e?.minItems)
        ) {
          let r = 0
          for (; t.length < e?.minItems; ) t.push(t[r++ % t.length])
        }
        return t
      },
      b = objectify(d)
    let w,
      C = 0
    const hasExceededMaxProperties = () =>
        e &&
        null !== e.maxProperties &&
        void 0 !== e.maxProperties &&
        C >= e.maxProperties,
      canAddProperty = t =>
        !e ||
        null === e.maxProperties ||
        void 0 === e.maxProperties ||
        (!hasExceededMaxProperties() &&
          (!(t =>
            !(e && e.required && e.required.length && e.required.includes(t)))(
            t,
          ) ||
            e.maxProperties -
              C -
              (() => {
                if (!e || !e.required) return 0
                let t = 0
                return (
                  n
                    ? e.required.forEach(e => (t += void 0 === v[e] ? 0 : 1))
                    : e.required.forEach(
                        e =>
                          (t +=
                            void 0 === v[g]?.find(t => void 0 !== t[e])
                              ? 0
                              : 1),
                      ),
                  e.required.length - t
                )
              })() >
              0))
    if (
      ((w = n
        ? (r, a = void 0) => {
            if (e && b[r]) {
              if (((b[r].xml = b[r].xml || {}), b[r].xml.attribute)) {
                const e = Array.isArray(b[r].enum) ? b[r].enum[0] : void 0,
                  t = b[r].example,
                  n = b[r].default
                return void (l[b[r].xml.name || r] =
                  void 0 !== t
                    ? t
                    : void 0 !== n
                    ? n
                    : void 0 !== e
                    ? e
                    : primitive(b[r]))
              }
              b[r].xml.name = b[r].xml.name || r
            } else b[r] || !1 === p || (b[r] = { xml: { name: r } })
            let o = sampleFromSchemaGeneric((e && b[r]) || void 0, t, a, n)
            canAddProperty(r) &&
              (C++, Array.isArray(o) ? (v[g] = v[g].concat(o)) : v[g].push(o))
          }
        : (r, a) => {
            if (canAddProperty(r)) {
              if (
                Object.prototype.hasOwnProperty.call(e, 'discriminator') &&
                e.discriminator &&
                Object.prototype.hasOwnProperty.call(
                  e.discriminator,
                  'mapping',
                ) &&
                e.discriminator.mapping &&
                Object.prototype.hasOwnProperty.call(e, '$$ref') &&
                e.$$ref &&
                e.discriminator.propertyName === r
              ) {
                for (let t in e.discriminator.mapping)
                  if (-1 !== e.$$ref.search(e.discriminator.mapping[t])) {
                    v[r] = t
                    break
                  }
              } else v[r] = sampleFromSchemaGeneric(b[r], t, a, n)
              C++
            }
          }),
      a)
    ) {
      let a
      if (
        ((a = sanitizeRef(void 0 !== r ? r : void 0 !== u ? u : e.default)), !n)
      ) {
        if ('number' == typeof a && 'string' === c) return `${a}`
        if ('string' != typeof a || 'string' === c) return a
        try {
          return JSON.parse(a)
        } catch (e) {
          return a
        }
      }
      if ((e || (c = Array.isArray(a) ? 'array' : typeof a), 'array' === c)) {
        if (!Array.isArray(a)) {
          if ('string' == typeof a) return a
          a = [a]
        }
        const r = e ? e.items : void 0
        r && ((r.xml = r.xml || i || {}), (r.xml.name = r.xml.name || i.name))
        let o = a.map(e => sampleFromSchemaGeneric(r, t, e, n))
        return (
          (o = handleMinMaxItems(o)),
          i.wrapped
            ? ((v[g] = o), (0, Tr.default)(l) || v[g].push({ _attr: l }))
            : (v = o),
          v
        )
      }
      if ('object' === c) {
        if ('string' == typeof a) return a
        for (let t in a)
          Object.prototype.hasOwnProperty.call(a, t) &&
            ((e && b[t] && b[t].readOnly && !f) ||
              (e && b[t] && b[t].writeOnly && !h) ||
              (e && b[t] && b[t].xml && b[t].xml.attribute
                ? (l[b[t].xml.name || t] = a[t])
                : w(t, a[t])))
        return (0, Tr.default)(l) || v[g].push({ _attr: l }), v
      }
      return (v[g] = (0, Tr.default)(l) ? a : [{ _attr: l }, a]), v
    }
    if ('object' === c) {
      for (let e in b)
        Object.prototype.hasOwnProperty.call(b, e) &&
          ((b[e] && b[e].deprecated) ||
            (b[e] && b[e].readOnly && !f) ||
            (b[e] && b[e].writeOnly && !h) ||
            w(e))
      if ((n && l && v[g].push({ _attr: l }), hasExceededMaxProperties()))
        return v
      if (!0 === p)
        n
          ? v[g].push({ additionalProp: 'Anything can be here' })
          : (v.additionalProp1 = {}),
          C++
      else if (p) {
        const r = objectify(p),
          a = sampleFromSchemaGeneric(r, t, void 0, n)
        if (n && r.xml && r.xml.name && 'notagname' !== r.xml.name) v[g].push(a)
        else {
          const t =
            null !== e.minProperties &&
            void 0 !== e.minProperties &&
            C < e.minProperties
              ? e.minProperties - C
              : 3
          for (let e = 1; e <= t; e++) {
            if (hasExceededMaxProperties()) return v
            if (n) {
              const t = {}
              ;(t['additionalProp' + e] = a.notagname), v[g].push(t)
            } else v['additionalProp' + e] = a
            C++
          }
        }
      }
      return v
    }
    if ('array' === c) {
      if (!m) return
      let r
      if (
        (n &&
          ((m.xml = m.xml || e?.xml || {}),
          (m.xml.name = m.xml.name || i.name)),
        Array.isArray(m.anyOf))
      )
        r = m.anyOf.map(e =>
          sampleFromSchemaGeneric(mergeJsonSchema(e, m, t), t, void 0, n),
        )
      else if (Array.isArray(m.oneOf))
        r = m.oneOf.map(e =>
          sampleFromSchemaGeneric(mergeJsonSchema(e, m, t), t, void 0, n),
        )
      else {
        if (!(!n || (n && i.wrapped)))
          return sampleFromSchemaGeneric(m, t, void 0, n)
        r = [sampleFromSchemaGeneric(m, t, void 0, n)]
      }
      return (
        (r = handleMinMaxItems(r)),
        n && i.wrapped
          ? ((v[g] = r), (0, Tr.default)(l) || v[g].push({ _attr: l }), v)
          : r
      )
    }
    let x
    if (e && Array.isArray(e.enum)) x = normalizeArray(e.enum)[0]
    else {
      if (!e) return
      if (((x = primitive(e)), 'number' == typeof x)) {
        let t = e.minimum
        null != t && (e.exclusiveMinimum && t++, (x = t))
        let r = e.maximum
        null != r && (e.exclusiveMaximum && r--, (x = r))
      }
      if (
        'string' == typeof x &&
        (null !== e.maxLength &&
          void 0 !== e.maxLength &&
          (x = x.slice(0, e.maxLength)),
        null !== e.minLength && void 0 !== e.minLength)
      ) {
        let t = 0
        for (; x.length < e.minLength; ) x += x[t++ % x.length]
      }
    }
    if ('file' !== c)
      return n ? ((v[g] = (0, Tr.default)(l) ? x : [{ _attr: l }, x]), v) : x
  },
  inferSchema = e => (
    e.schema && (e = e.schema), e.properties && (e.type = 'object'), e
  ),
  createXMLExample = (e, t, r) => {
    const n = sampleFromSchemaGeneric(e, t, r, !0)
    if (n)
      return 'string' == typeof n
        ? n
        : Ir()(n, { declaration: !0, indent: '\t' })
  },
  sampleFromSchema = (e, t, r) => sampleFromSchemaGeneric(e, t, r, !1),
  resolver = (e, t, r) => [e, JSON.stringify(t), JSON.stringify(r)],
  Lr = utils_memoizeN(createXMLExample, resolver),
  Dr = utils_memoizeN(sampleFromSchema, resolver),
  Ur = [{ when: /json/, shouldStringifyTypes: ['string'] }],
  $r = ['object']
var get_json_sample_schema = e => (t, r, n, a) => {
  const { fn: o } = e(),
    s = o.memoizedSampleFromSchema(t, r, a),
    l = typeof s,
    i = Ur.reduce(
      (e, t) => (t.when.test(n) ? [...e, ...t.shouldStringifyTypes] : e),
      $r,
    )
  return (0, gt.default)(i, e => e === l) ? JSON.stringify(s, null, 2) : s
}
var get_yaml_sample_schema = e => (t, r, n, a) => {
  const { fn: o } = e(),
    s = o.getJsonSampleSchema(t, r, n, a)
  let l
  try {
    ;(l = Ht.default.dump(
      Ht.default.load(s),
      { lineWidth: -1 },
      { schema: Ht.JSON_SCHEMA },
    )),
      '\n' === l[l.length - 1] && (l = l.slice(0, l.length - 1))
  } catch (e) {
    return console.error(e), 'error: could not generate yaml example'
  }
  return l.replace(/\t/g, '  ')
}
var get_xml_sample_schema = e => (t, r, n) => {
  const { fn: a } = e()
  if ((t && !t.xml && (t.xml = {}), t && !t.xml.name)) {
    if (
      !t.$$ref &&
      (t.type || t.items || t.properties || t.additionalProperties)
    )
      return '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!-- XML example cannot be generated; root element name is undefined --\x3e'
    if (t.$$ref) {
      let e = t.$$ref.match(/\S*\/(\S+)$/)
      t.xml.name = e[1]
    }
  }
  return a.memoizedCreateXMLExample(t, r, n)
}
var get_sample_schema =
  e =>
  (t, r = '', n = {}, a = void 0) => {
    const { fn: o } = e()
    return (
      'function' == typeof t?.toJS && (t = t.toJS()),
      'function' == typeof a?.toJS && (a = a.toJS()),
      /xml/.test(r)
        ? o.getXmlSampleSchema(t, n, a)
        : /(yaml|yml)/.test(r)
        ? o.getYamlSampleSchema(t, n, r, a)
        : o.getJsonSampleSchema(t, n, r, a)
    )
  }
var json_schema_5_samples = ({ getSystem: e }) => {
    const t = get_json_sample_schema(e),
      r = get_yaml_sample_schema(e),
      n = get_xml_sample_schema(e),
      a = get_sample_schema(e)
    return {
      fn: {
        jsonSchema5: {
          inferSchema,
          sampleFromSchema,
          sampleFromSchemaGeneric,
          createXMLExample,
          memoizedSampleFromSchema: Dr,
          memoizedCreateXMLExample: Lr,
          getJsonSampleSchema: t,
          getYamlSampleSchema: r,
          getXmlSampleSchema: n,
          getSampleSchema: a,
          mergeJsonSchema,
        },
        inferSchema,
        sampleFromSchema,
        sampleFromSchemaGeneric,
        createXMLExample,
        memoizedSampleFromSchema: Dr,
        memoizedCreateXMLExample: Lr,
        getJsonSampleSchema: t,
        getYamlSampleSchema: r,
        getXmlSampleSchema: n,
        getSampleSchema: a,
        mergeJsonSchema,
      },
    }
  },
  Jr = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return j.default
    },
  })
const Vr = [
    'get',
    'put',
    'post',
    'delete',
    'options',
    'head',
    'patch',
    'trace',
  ],
  spec_selectors_state = e => e || (0, Qe.Map)(),
  Kr = (0, Dt.createSelector)(spec_selectors_state, e => e.get('lastError')),
  zr = (0, Dt.createSelector)(spec_selectors_state, e => e.get('url')),
  Fr = (0, Dt.createSelector)(spec_selectors_state, e => e.get('spec') || ''),
  Wr = (0, Dt.createSelector)(
    spec_selectors_state,
    e => e.get('specSource') || 'not-editor',
  ),
  Hr = (0, Dt.createSelector)(spec_selectors_state, e =>
    e.get('json', (0, Qe.Map)()),
  ),
  Gr = (0, Dt.createSelector)(Hr, e => e.toJS()),
  Xr = (0, Dt.createSelector)(spec_selectors_state, e =>
    e.get('resolved', (0, Qe.Map)()),
  ),
  specResolvedSubtree = (e, t) => e.getIn(['resolvedSubtrees', ...t], void 0),
  mergerFn = (e, t) =>
    Qe.Map.isMap(e) && Qe.Map.isMap(t)
      ? t.get('$$ref')
        ? t
        : (0, Qe.OrderedMap)().mergeWith(mergerFn, e, t)
      : t,
  Yr = (0, Dt.createSelector)(spec_selectors_state, e =>
    (0, Qe.OrderedMap)().mergeWith(
      mergerFn,
      e.get('json'),
      e.get('resolvedSubtrees'),
    ),
  ),
  spec = e => Hr(e),
  Qr = (0, Dt.createSelector)(spec, () => !1),
  Zr = (0, Dt.createSelector)(spec, e =>
    returnSelfOrNewMap(e && e.get('info')),
  ),
  en = (0, Dt.createSelector)(spec, e =>
    returnSelfOrNewMap(e && e.get('externalDocs')),
  ),
  tn = (0, Dt.createSelector)(Zr, e => e && e.get('version')),
  rn = (0, Dt.createSelector)(tn, e =>
    /v?([0-9]*)\.([0-9]*)\.([0-9]*)/i.exec(e).slice(1),
  ),
  nn = (0, Dt.createSelector)(Yr, e => e.get('paths')),
  an = (0, Jr.default)([
    'get',
    'put',
    'post',
    'delete',
    'options',
    'head',
    'patch',
  ]),
  on = (0, Dt.createSelector)(nn, e => {
    if (!e || e.size < 1) return (0, Qe.List)()
    let t = (0, Qe.List)()
    return e && e.forEach
      ? (e.forEach((e, r) => {
          if (!e || !e.forEach) return {}
          e.forEach((e, n) => {
            Vr.indexOf(n) < 0 ||
              (t = t.push(
                (0, Qe.fromJS)({
                  path: r,
                  method: n,
                  operation: e,
                  id: `${n}-${r}`,
                }),
              ))
          })
        }),
        t)
      : (0, Qe.List)()
  }),
  sn = (0, Dt.createSelector)(spec, e => (0, Qe.Set)(e.get('consumes'))),
  ln = (0, Dt.createSelector)(spec, e => (0, Qe.Set)(e.get('produces'))),
  cn = (0, Dt.createSelector)(spec, e => e.get('security', (0, Qe.List)())),
  un = (0, Dt.createSelector)(spec, e => e.get('securityDefinitions')),
  findDefinition = (e, t) => {
    const r = e.getIn(['resolvedSubtrees', 'definitions', t], null),
      n = e.getIn(['json', 'definitions', t], null)
    return r || n || null
  },
  dn = (0, Dt.createSelector)(spec, e => {
    const t = e.get('definitions')
    return Qe.Map.isMap(t) ? t : (0, Qe.Map)()
  }),
  pn = (0, Dt.createSelector)(spec, e => e.get('basePath')),
  mn = (0, Dt.createSelector)(spec, e => e.get('host')),
  fn = (0, Dt.createSelector)(spec, e => e.get('schemes', (0, Qe.Map)())),
  hn = (0, Dt.createSelector)([on, sn, ln], (e, t, r) =>
    e.map(e =>
      e.update('operation', e => {
        if (e) {
          if (!Qe.Map.isMap(e)) return
          return e.withMutations(
            e => (
              e.get('consumes') ||
                e.update('consumes', e => (0, Qe.Set)(e).merge(t)),
              e.get('produces') ||
                e.update('produces', e => (0, Qe.Set)(e).merge(r)),
              e
            ),
          )
        }
        return (0, Qe.Map)()
      }),
    ),
  ),
  gn = (0, Dt.createSelector)(spec, e => {
    const t = e.get('tags', (0, Qe.List)())
    return Qe.List.isList(t) ? t.filter(e => Qe.Map.isMap(e)) : (0, Qe.List)()
  }),
  tagDetails = (e, t) =>
    (gn(e) || (0, Qe.List)())
      .filter(Qe.Map.isMap)
      .find(e => e.get('name') === t, (0, Qe.Map)()),
  yn = (0, Dt.createSelector)(hn, gn, (e, t) =>
    e.reduce(
      (e, t) => {
        let r = (0, Qe.Set)(t.getIn(['operation', 'tags']))
        return r.count() < 1
          ? e.update('default', (0, Qe.List)(), e => e.push(t))
          : r.reduce((e, r) => e.update(r, (0, Qe.List)(), e => e.push(t)), e)
      },
      t.reduce(
        (e, t) => e.set(t.get('name'), (0, Qe.List)()),
        (0, Qe.OrderedMap)(),
      ),
    ),
  ),
  selectors_taggedOperations =
    e =>
    ({ getConfigs: t }) => {
      let { tagsSorter: r, operationsSorter: n } = t()
      return yn(e)
        .sortBy(
          (e, t) => t,
          (e, t) => {
            let n = 'function' == typeof r ? r : Nt.tagsSorter[r]
            return n ? n(e, t) : null
          },
        )
        .map((t, r) => {
          let a = 'function' == typeof n ? n : Nt.operationsSorter[n],
            o = a ? t.sort(a) : t
          return (0, Qe.Map)({ tagDetails: tagDetails(e, r), operations: o })
        })
    },
  En = (0, Dt.createSelector)(spec_selectors_state, e =>
    e.get('responses', (0, Qe.Map)()),
  ),
  Sn = (0, Dt.createSelector)(spec_selectors_state, e =>
    e.get('requests', (0, Qe.Map)()),
  ),
  _n = (0, Dt.createSelector)(spec_selectors_state, e =>
    e.get('mutatedRequests', (0, Qe.Map)()),
  ),
  responseFor = (e, t, r) => En(e).getIn([t, r], null),
  requestFor = (e, t, r) => Sn(e).getIn([t, r], null),
  mutatedRequestFor = (e, t, r) => _n(e).getIn([t, r], null),
  allowTryItOutFor = () => !0,
  parameterWithMetaByIdentity = (e, t, r) => {
    const n = Yr(e).getIn(['paths', ...t, 'parameters'], (0, Qe.OrderedMap)()),
      a = e.getIn(['meta', 'paths', ...t, 'parameters'], (0, Qe.OrderedMap)())
    return n
      .map(e => {
        const t = a.get(`${r.get('in')}.${r.get('name')}`),
          n = a.get(`${r.get('in')}.${r.get('name')}.hash-${r.hashCode()}`)
        return (0, Qe.OrderedMap)().merge(e, t, n)
      })
      .find(
        e => e.get('in') === r.get('in') && e.get('name') === r.get('name'),
        (0, Qe.OrderedMap)(),
      )
  },
  parameterInclusionSettingFor = (e, t, r, n) => {
    const a = `${n}.${r}`
    return e.getIn(['meta', 'paths', ...t, 'parameter_inclusions', a], !1)
  },
  parameterWithMeta = (e, t, r, n) => {
    const a = Yr(e)
      .getIn(['paths', ...t, 'parameters'], (0, Qe.OrderedMap)())
      .find(e => e.get('in') === n && e.get('name') === r, (0, Qe.OrderedMap)())
    return parameterWithMetaByIdentity(e, t, a)
  },
  operationWithMeta = (e, t, r) => {
    const n = Yr(e).getIn(['paths', t, r], (0, Qe.OrderedMap)()),
      a = e.getIn(['meta', 'paths', t, r], (0, Qe.OrderedMap)()),
      o = n
        .get('parameters', (0, Qe.List)())
        .map(n => parameterWithMetaByIdentity(e, [t, r], n))
    return (0, Qe.OrderedMap)().merge(n, a).set('parameters', o)
  }
function getParameter(e, t, r, n) {
  return (
    (t = t || []),
    e
      .getIn(['meta', 'paths', ...t, 'parameters'], (0, Qe.fromJS)([]))
      .find(e => Qe.Map.isMap(e) && e.get('name') === r && e.get('in') === n) ||
      (0, Qe.Map)()
  )
}
const vn = (0, Dt.createSelector)(spec, e => {
  const t = e.get('host')
  return 'string' == typeof t && t.length > 0 && '/' !== t[0]
})
function parameterValues(e, t, r) {
  return (
    (t = t || []),
    operationWithMeta(e, ...t)
      .get('parameters', (0, Qe.List)())
      .reduce((e, t) => {
        let n =
          r && 'body' === t.get('in') ? t.get('value_xml') : t.get('value')
        return (
          Qe.List.isList(n) && (n = n.filter(e => '' !== e)),
          e.set(paramToIdentifier(t, { allowHashes: !1 }), n)
        )
      }, (0, Qe.fromJS)({}))
  )
}
function parametersIncludeIn(e, t = '') {
  if (Qe.List.isList(e))
    return e.some(e => Qe.Map.isMap(e) && e.get('in') === t)
}
function parametersIncludeType(e, t = '') {
  if (Qe.List.isList(e))
    return e.some(e => Qe.Map.isMap(e) && e.get('type') === t)
}
function contentTypeValues(e, t) {
  t = t || []
  let r = Yr(e).getIn(['paths', ...t], (0, Qe.fromJS)({})),
    n = e.getIn(['meta', 'paths', ...t], (0, Qe.fromJS)({})),
    a = currentProducesFor(e, t)
  const o = r.get('parameters') || new Qe.List(),
    s = n.get('consumes_value')
      ? n.get('consumes_value')
      : parametersIncludeType(o, 'file')
      ? 'multipart/form-data'
      : parametersIncludeType(o, 'formData')
      ? 'application/x-www-form-urlencoded'
      : void 0
  return (0, Qe.fromJS)({ requestContentType: s, responseContentType: a })
}
function currentProducesFor(e, t) {
  t = t || []
  const r = Yr(e).getIn(['paths', ...t], null)
  if (null === r) return
  const n = e.getIn(['meta', 'paths', ...t, 'produces_value'], null),
    a = r.getIn(['produces', 0], null)
  return n || a || 'application/json'
}
function producesOptionsFor(e, t) {
  t = t || []
  const r = Yr(e),
    n = r.getIn(['paths', ...t], null)
  if (null === n) return
  const [a] = t,
    o = n.get('produces', null),
    s = r.getIn(['paths', a, 'produces'], null),
    l = r.getIn(['produces'], null)
  return o || s || l
}
function consumesOptionsFor(e, t) {
  t = t || []
  const r = Yr(e),
    n = r.getIn(['paths', ...t], null)
  if (null === n) return
  const [a] = t,
    o = n.get('consumes', null),
    s = r.getIn(['paths', a, 'consumes'], null),
    l = r.getIn(['consumes'], null)
  return o || s || l
}
const operationScheme = (e, t, r) => {
    let n = e.get('url').match(/^([a-z][a-z0-9+\-.]*):/),
      a = Array.isArray(n) ? n[1] : null
    return (
      e.getIn(['scheme', t, r]) ||
      e.getIn(['scheme', '_defaultScheme']) ||
      a ||
      ''
    )
  },
  canExecuteScheme = (e, t, r) =>
    ['http', 'https'].indexOf(operationScheme(e, t, r)) > -1,
  validationErrors = (e, t) => {
    t = t || []
    const r = e.getIn(
        ['meta', 'paths', ...t, 'parameters'],
        (0, Qe.fromJS)([]),
      ),
      n = []
    if (0 === r.length) return n
    const getErrorsWithPaths = (e, t = []) => {
      const getNestedErrorsWithPaths = (e, t) => {
        const r = [...t, e.get('propKey') || e.get('index')]
        return Qe.Map.isMap(e.get('error'))
          ? getErrorsWithPaths(e.get('error'), r)
          : { error: e.get('error'), path: r }
      }
      return Qe.List.isList(e)
        ? e.map(e =>
            Qe.Map.isMap(e)
              ? getNestedErrorsWithPaths(e, t)
              : { error: e, path: t },
          )
        : getNestedErrorsWithPaths(e, t)
    }
    return (
      r.forEach((e, t) => {
        const r = t.split('.').slice(1, -1).join('.'),
          a = e.get('errors')
        if (a && a.count()) {
          getErrorsWithPaths(a).forEach(({ error: e, path: t }) => {
            n.push(
              ((e, t, r) =>
                `For '${r}'${
                  (t = t.reduce(
                    (e, t) =>
                      'number' == typeof t ? `${e}[${t}]` : e ? `${e}.${t}` : t,
                    '',
                  ))
                    ? ` at path '${t}'`
                    : ''
                }: ${e}.`)(e, t, r),
            )
          })
        }
      }),
      n
    )
  },
  validateBeforeExecute = (e, t) => 0 === validationErrors(e, t).length,
  getOAS3RequiredRequestBodyContentType = (e, t) => {
    let r = { requestBody: !1, requestContentType: {} },
      n = e.getIn(
        ['resolvedSubtrees', 'paths', ...t, 'requestBody'],
        (0, Qe.fromJS)([]),
      )
    return (
      n.size < 1 ||
        (n.getIn(['required']) && (r.requestBody = n.getIn(['required'])),
        n
          .getIn(['content'])
          .entrySeq()
          .forEach(e => {
            const t = e[0]
            if (e[1].getIn(['schema', 'required'])) {
              const n = e[1].getIn(['schema', 'required']).toJS()
              r.requestContentType[t] = n
            }
          })),
      r
    )
  },
  isMediaTypeSchemaPropertiesEqual = (e, t, r, n) => {
    if ((r || n) && r === n) return !0
    let a = e.getIn(
      ['resolvedSubtrees', 'paths', ...t, 'requestBody', 'content'],
      (0, Qe.fromJS)([]),
    )
    if (a.size < 2 || !r || !n) return !1
    let o = a.getIn([r, 'schema', 'properties'], (0, Qe.fromJS)([])),
      s = a.getIn([n, 'schema', 'properties'], (0, Qe.fromJS)([]))
    return !!o.equals(s)
  }
function returnSelfOrNewMap(e) {
  return Qe.Map.isMap(e) ? e : new Qe.Map()
}
var bn = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return P.default
    },
  }),
  wn = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return M.default
    },
  }),
  Cn = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return q.default
    },
  }),
  xn = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return L.default
    },
  })
const On = 'spec_update_spec',
  kn = 'spec_update_url',
  Nn = 'spec_update_json',
  An = 'spec_update_param',
  In = 'spec_update_empty_param_inclusion',
  Rn = 'spec_validate_param',
  Tn = 'spec_set_response',
  Bn = 'spec_set_request',
  jn = 'spec_set_mutated_request',
  Pn = 'spec_log_request',
  Mn = 'spec_clear_response',
  qn = 'spec_clear_request',
  Ln = 'spec_clear_validate_param',
  Dn = 'spec_update_operation_meta_value',
  Un = 'spec_update_resolved',
  $n = 'spec_update_resolved_subtree',
  Jn = 'set_scheme',
  toStr = e => ((0, bn.default)(e) ? e : '')
function updateSpec(e) {
  const t = toStr(e).replace(/\t/g, '  ')
  if ('string' == typeof e) return { type: On, payload: t }
}
function updateResolved(e) {
  return { type: Un, payload: e }
}
function updateUrl(e) {
  return { type: kn, payload: e }
}
function updateJsonSpec(e) {
  return { type: Nn, payload: e }
}
const parseToJson =
  e =>
  ({ specActions: t, specSelectors: r, errActions: n }) => {
    let { specStr: a } = r,
      o = null
    try {
      ;(e = e || a()),
        n.clear({ source: 'parser' }),
        (o = Ht.default.load(e, { schema: Ht.JSON_SCHEMA }))
    } catch (e) {
      return (
        console.error(e),
        n.newSpecErr({
          source: 'parser',
          level: 'error',
          message: e.reason,
          line: e.mark && e.mark.line ? e.mark.line + 1 : void 0,
        })
      )
    }
    return o && 'object' == typeof o ? t.updateJsonSpec(o) : {}
  }
let Vn = !1
const resolveSpec =
  (e, t) =>
  ({
    specActions: r,
    specSelectors: n,
    errActions: a,
    fn: { fetch: o, resolve: s, AST: l = {} },
    getConfigs: i,
  }) => {
    Vn ||
      (console.warn(
        'specActions.resolveSpec is deprecated since v3.10.0 and will be removed in v4.0.0; use requestResolvedSubtree instead!',
      ),
      (Vn = !0))
    const {
      modelPropertyMacro: c,
      parameterMacro: u,
      requestInterceptor: d,
      responseInterceptor: p,
    } = i()
    void 0 === e && (e = n.specJson()), void 0 === t && (t = n.url())
    let m = l.getLineNumberForPath ? l.getLineNumberForPath : () => {},
      f = n.specStr()
    return s({
      fetch: o,
      spec: e,
      baseDoc: String(new URL(t, document.baseURI)),
      modelPropertyMacro: c,
      parameterMacro: u,
      requestInterceptor: d,
      responseInterceptor: p,
    }).then(({ spec: e, errors: t }) => {
      if ((a.clear({ type: 'thrown' }), Array.isArray(t) && t.length > 0)) {
        let e = t.map(
          e => (
            console.error(e),
            (e.line = e.fullPath ? m(f, e.fullPath) : null),
            (e.path = e.fullPath ? e.fullPath.join('.') : null),
            (e.level = 'error'),
            (e.type = 'thrown'),
            (e.source = 'resolver'),
            Object.defineProperty(e, 'message', {
              enumerable: !0,
              value: e.message,
            }),
            e
          ),
        )
        a.newThrownErrBatch(e)
      }
      return r.updateResolved(e)
    })
  }
let Kn = []
const zn = (0, wn.default)(() => {
    const e = Kn.reduce(
      (e, { path: t, system: r }) => (
        e.has(r) || e.set(r, []), e.get(r).push(t), e
      ),
      new Map(),
    )
    ;(Kn = []),
      e.forEach(async (e, t) => {
        if (!t)
          return void console.error(
            "debResolveSubtrees: don't have a system to operate on, aborting.",
          )
        if (!t.fn.resolveSubtree)
          return void console.error(
            'Error: Swagger-Client did not provide a `resolveSubtree` method, doing nothing.',
          )
        const {
            errActions: r,
            errSelectors: n,
            fn: { resolveSubtree: a, fetch: o, AST: s = {} },
            specSelectors: l,
            specActions: i,
          } = t,
          c = s.getLineNumberForPath ?? (0, Jr.default)(void 0),
          u = l.specStr(),
          {
            modelPropertyMacro: d,
            parameterMacro: p,
            requestInterceptor: m,
            responseInterceptor: f,
          } = t.getConfigs()
        try {
          const t = await e.reduce(async (e, t) => {
            let { resultMap: s, specWithCurrentSubtrees: i } = await e
            const { errors: h, spec: g } = await a(i, t, {
              baseDoc: String(new URL(l.url(), document.baseURI)),
              modelPropertyMacro: d,
              parameterMacro: p,
              requestInterceptor: m,
              responseInterceptor: f,
            })
            if (
              (n.allErrors().size &&
                r.clearBy(
                  e =>
                    'thrown' !== e.get('type') ||
                    'resolver' !== e.get('source') ||
                    !e
                      .get('fullPath')
                      .every((e, r) => e === t[r] || void 0 === t[r]),
                ),
              Array.isArray(h) && h.length > 0)
            ) {
              let e = h.map(
                e => (
                  (e.line = e.fullPath ? c(u, e.fullPath) : null),
                  (e.path = e.fullPath ? e.fullPath.join('.') : null),
                  (e.level = 'error'),
                  (e.type = 'thrown'),
                  (e.source = 'resolver'),
                  Object.defineProperty(e, 'message', {
                    enumerable: !0,
                    value: e.message,
                  }),
                  e
                ),
              )
              r.newThrownErrBatch(e)
            }
            return (
              g &&
                l.isOAS3() &&
                'components' === t[0] &&
                'securitySchemes' === t[1] &&
                (await Promise.all(
                  Object.values(g)
                    .filter(e => 'openIdConnect' === e.type)
                    .map(async e => {
                      const t = {
                        url: e.openIdConnectUrl,
                        requestInterceptor: m,
                        responseInterceptor: f,
                      }
                      try {
                        const r = await o(t)
                        r instanceof Error || r.status >= 400
                          ? console.error(r.statusText + ' ' + t.url)
                          : (e.openIdConnectData = JSON.parse(r.text))
                      } catch (e) {
                        console.error(e)
                      }
                    }),
                )),
              (0, Cn.default)(s, t, g),
              (i = (0, xn.default)(t, g, i)),
              { resultMap: s, specWithCurrentSubtrees: i }
            )
          }, Promise.resolve({ resultMap: (l.specResolvedSubtree([]) || (0, Qe.Map)()).toJS(), specWithCurrentSubtrees: l.specJS() }))
          i.updateResolvedSubtree([], t.resultMap)
        } catch (e) {
          console.error(e)
        }
      })
  }, 35),
  requestResolvedSubtree = e => t => {
    Kn.find(
      ({ path: r, system: n }) => n === t && r.toString() === e.toString(),
    ) || (Kn.push({ path: e, system: t }), zn())
  }
function changeParam(e, t, r, n, a) {
  return {
    type: An,
    payload: { path: e, value: n, paramName: t, paramIn: r, isXml: a },
  }
}
function changeParamByIdentity(e, t, r, n) {
  return { type: An, payload: { path: e, param: t, value: r, isXml: n } }
}
const updateResolvedSubtree = (e, t) => ({
    type: $n,
    payload: { path: e, value: t },
  }),
  invalidateResolvedSubtreeCache = () => ({
    type: $n,
    payload: { path: [], value: (0, Qe.Map)() },
  }),
  validateParams = (e, t) => ({
    type: Rn,
    payload: { pathMethod: e, isOAS3: t },
  }),
  updateEmptyParamInclusion = (e, t, r, n) => ({
    type: In,
    payload: { pathMethod: e, paramName: t, paramIn: r, includeEmptyValue: n },
  })
function clearValidateParams(e) {
  return { type: Ln, payload: { pathMethod: e } }
}
function changeConsumesValue(e, t) {
  return { type: Dn, payload: { path: e, value: t, key: 'consumes_value' } }
}
function changeProducesValue(e, t) {
  return { type: Dn, payload: { path: e, value: t, key: 'produces_value' } }
}
const setResponse = (e, t, r) => ({
    payload: { path: e, method: t, res: r },
    type: Tn,
  }),
  setRequest = (e, t, r) => ({
    payload: { path: e, method: t, req: r },
    type: Bn,
  }),
  setMutatedRequest = (e, t, r) => ({
    payload: { path: e, method: t, req: r },
    type: jn,
  }),
  logRequest = e => ({ payload: e, type: Pn }),
  executeRequest =
    e =>
    ({
      fn: t,
      specActions: r,
      specSelectors: n,
      getConfigs: a,
      oas3Selectors: o,
    }) => {
      let { pathName: s, method: l, operation: i } = e,
        { requestInterceptor: c, responseInterceptor: u } = a(),
        d = i.toJS()
      if (
        (i &&
          i.get('parameters') &&
          i
            .get('parameters')
            .filter(e => e && !0 === e.get('allowEmptyValue'))
            .forEach(t => {
              if (
                n.parameterInclusionSettingFor(
                  [s, l],
                  t.get('name'),
                  t.get('in'),
                )
              ) {
                e.parameters = e.parameters || {}
                const r = paramToValue(t, e.parameters)
                ;(!r || (r && 0 === r.size)) &&
                  (e.parameters[t.get('name')] = '')
              }
            }),
        (e.contextUrl = (0, At.default)(n.url()).toString()),
        d && d.operationId
          ? (e.operationId = d.operationId)
          : d && s && l && (e.operationId = t.opId(d, s, l)),
        n.isOAS3())
      ) {
        const t = `${s}:${l}`
        e.server = o.selectedServer(t) || o.selectedServer()
        const r = o.serverVariables({ server: e.server, namespace: t }).toJS(),
          n = o.serverVariables({ server: e.server }).toJS()
        ;(e.serverVariables = Object.keys(r).length ? r : n),
          (e.requestContentType = o.requestContentType(s, l)),
          (e.responseContentType = o.responseContentType(s, l) || '*/*')
        const a = o.requestBodyValue(s, l),
          i = o.requestBodyInclusionSetting(s, l)
        a && a.toJS
          ? (e.requestBody = a
              .map(e => (Qe.Map.isMap(e) ? e.get('value') : e))
              .filter(
                (e, t) =>
                  (Array.isArray(e) ? 0 !== e.length : !isEmptyValue(e)) ||
                  i.get(t),
              )
              .toJS())
          : (e.requestBody = a)
      }
      let p = Object.assign({}, e)
      ;(p = t.buildRequest(p)), r.setRequest(e.pathName, e.method, p)
      ;(e.requestInterceptor = async t => {
        let n = await c.apply(void 0, [t]),
          a = Object.assign({}, n)
        return r.setMutatedRequest(e.pathName, e.method, a), n
      }),
        (e.responseInterceptor = u)
      const m = Date.now()
      return t
        .execute(e)
        .then(t => {
          ;(t.duration = Date.now() - m), r.setResponse(e.pathName, e.method, t)
        })
        .catch(t => {
          'Failed to fetch' === t.message &&
            ((t.name = ''),
            (t.message =
              '**Failed to fetch.**  \n**Possible Reasons:** \n  - CORS \n  - Network Failure \n  - URL scheme must be "http" or "https" for CORS request.')),
            r.setResponse(e.pathName, e.method, { error: !0, err: t })
        })
    },
  actions_execute =
    ({ path: e, method: t, ...r } = {}) =>
    n => {
      let {
          fn: { fetch: a },
          specSelectors: o,
          specActions: s,
        } = n,
        l = o.specJsonWithResolvedSubtrees().toJS(),
        i = o.operationScheme(e, t),
        { requestContentType: c, responseContentType: u } = o
          .contentTypeValues([e, t])
          .toJS(),
        d = /xml/i.test(c),
        p = o.parameterValues([e, t], d).toJS()
      return s.executeRequest({
        ...r,
        fetch: a,
        spec: l,
        pathName: e,
        method: t,
        parameters: p,
        requestContentType: c,
        scheme: i,
        responseContentType: u,
      })
    }
function clearResponse(e, t) {
  return { type: Mn, payload: { path: e, method: t } }
}
function clearRequest(e, t) {
  return { type: qn, payload: { path: e, method: t } }
}
function setScheme(e, t, r) {
  return { type: Jn, payload: { scheme: e, path: t, method: r } }
}
var Fn = {
  [On]: (e, t) => ('string' == typeof t.payload ? e.set('spec', t.payload) : e),
  [kn]: (e, t) => e.set('url', t.payload + ''),
  [Nn]: (e, t) => e.set('json', fromJSOrdered(t.payload)),
  [Un]: (e, t) => e.setIn(['resolved'], fromJSOrdered(t.payload)),
  [$n]: (e, t) => {
    const { value: r, path: n } = t.payload
    return e.setIn(['resolvedSubtrees', ...n], fromJSOrdered(r))
  },
  [An]: (e, { payload: t }) => {
    let { path: r, paramName: n, paramIn: a, param: o, value: s, isXml: l } = t,
      i = o ? paramToIdentifier(o) : `${a}.${n}`
    const c = l ? 'value_xml' : 'value'
    return e.setIn(
      ['meta', 'paths', ...r, 'parameters', i, c],
      (0, Qe.fromJS)(s),
    )
  },
  [In]: (e, { payload: t }) => {
    let { pathMethod: r, paramName: n, paramIn: a, includeEmptyValue: o } = t
    if (!n || !a)
      return (
        console.warn(
          'Warning: UPDATE_EMPTY_PARAM_INCLUSION could not generate a paramKey.',
        ),
        e
      )
    const s = `${a}.${n}`
    return e.setIn(['meta', 'paths', ...r, 'parameter_inclusions', s], o)
  },
  [Rn]: (e, { payload: { pathMethod: t, isOAS3: r } }) => {
    const n = Yr(e).getIn(['paths', ...t]),
      a = parameterValues(e, t).toJS()
    return e.updateIn(
      ['meta', 'paths', ...t, 'parameters'],
      (0, Qe.fromJS)({}),
      o =>
        n.get('parameters', (0, Qe.List)()).reduce((n, o) => {
          const s = paramToValue(o, a),
            l = parameterInclusionSettingFor(e, t, o.get('name'), o.get('in')),
            i = ((
              e,
              t,
              { isOAS3: r = !1, bypassRequiredCheck: n = !1 } = {},
            ) => {
              let a = e.get('required'),
                { schema: o, parameterContentMediaType: s } =
                  getParameterSchema(e, { isOAS3: r })
              return validateValueBySchema(t, o, a, n, s)
            })(o, s, { bypassRequiredCheck: l, isOAS3: r })
          return n.setIn([paramToIdentifier(o), 'errors'], (0, Qe.fromJS)(i))
        }, o),
    )
  },
  [Ln]: (e, { payload: { pathMethod: t } }) =>
    e.updateIn(['meta', 'paths', ...t, 'parameters'], (0, Qe.fromJS)([]), e =>
      e.map(e => e.set('errors', (0, Qe.fromJS)([]))),
    ),
  [Tn]: (e, { payload: { res: t, path: r, method: n } }) => {
    let a
    ;(a = t.error
      ? Object.assign(
          {
            error: !0,
            name: t.err.name,
            message: t.err.message,
            statusCode: t.err.statusCode,
          },
          t.err.response,
        )
      : t),
      (a.headers = a.headers || {})
    let o = e.setIn(['responses', r, n], fromJSOrdered(a))
    return (
      dt.Blob &&
        a.data instanceof dt.Blob &&
        (o = o.setIn(['responses', r, n, 'text'], a.data)),
      o
    )
  },
  [Bn]: (e, { payload: { req: t, path: r, method: n } }) =>
    e.setIn(['requests', r, n], fromJSOrdered(t)),
  [jn]: (e, { payload: { req: t, path: r, method: n } }) =>
    e.setIn(['mutatedRequests', r, n], fromJSOrdered(t)),
  [Dn]: (e, { payload: { path: t, value: r, key: n } }) => {
    let a = ['paths', ...t],
      o = ['meta', 'paths', ...t]
    return e.getIn(['json', ...a]) ||
      e.getIn(['resolved', ...a]) ||
      e.getIn(['resolvedSubtrees', ...a])
      ? e.setIn([...o, n], (0, Qe.fromJS)(r))
      : e
  },
  [Mn]: (e, { payload: { path: t, method: r } }) =>
    e.deleteIn(['responses', t, r]),
  [qn]: (e, { payload: { path: t, method: r } }) =>
    e.deleteIn(['requests', t, r]),
  [Jn]: (e, { payload: { scheme: t, path: r, method: n } }) =>
    r && n
      ? e.setIn(['scheme', r, n], t)
      : r || n
      ? void 0
      : e.setIn(['scheme', '_defaultScheme'], t),
}
const wrap_actions_updateSpec =
    (e, { specActions: t }) =>
    (...r) => {
      e(...r), t.parseToJson(...r)
    },
  wrap_actions_updateJsonSpec =
    (e, { specActions: t }) =>
    (...r) => {
      e(...r), t.invalidateResolvedSubtreeCache()
      const [n] = r,
        a = (0, ar.default)(n, ['paths']) || {}
      Object.keys(a).forEach(e => {
        ;(0, ar.default)(a, [e]).$ref && t.requestResolvedSubtree(['paths', e])
      }),
        t.requestResolvedSubtree(['components', 'securitySchemes'])
    },
  wrap_actions_executeRequest =
    (e, { specActions: t }) =>
    r => (t.logRequest(r), e(r)),
  wrap_actions_validateParams =
    (e, { specSelectors: t }) =>
    r =>
      e(r, t.isOAS3())
var plugins_spec = () => ({
    statePlugins: {
      spec: {
        wrapActions: { ...Ve },
        reducers: { ...Fn },
        actions: { ...Je },
        selectors: { ...$e },
      },
    },
  }),
  Wn = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return D.default
    },
  }),
  Hn = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return U.default
    },
  }),
  Gn = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return $.default
    },
  }),
  Xn = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return J.default
    },
  }),
  Yn = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    makeResolve: function () {
      return V.makeResolve
    },
  }),
  Qn = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    buildRequest: function () {
      return K.buildRequest
    },
    execute: function () {
      return K.execute
    },
  }),
  Zn = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return z.default
    },
    makeHttp: function () {
      return z.makeHttp
    },
    serializeRes: function () {
      return z.serializeRes
    },
  }),
  ea = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    makeResolveSubtree: function () {
      return F.makeResolveSubtree
    },
  }),
  ta = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    opId: function () {
      return W.opId
    },
  })
const configs_wrap_actions_loaded =
  (e, t) =>
  (...r) => {
    e(...r)
    const n = t.getConfigs().withCredentials
    t.fn.fetch.withCredentials = n
  }
function swagger_client({ configs: e, getConfigs: t }) {
  return {
    fn: {
      fetch: (0, Zn.makeHttp)(Zn.default, e.preFetch, e.postFetch),
      buildRequest: Qn.buildRequest,
      execute: Qn.execute,
      resolve: (0, Yn.makeResolve)({
        strategies: [Xn.default, Gn.default, Hn.default, Wn.default],
      }),
      resolveSubtree: async (e, r, n = {}) => {
        const a = t(),
          o = {
            modelPropertyMacro: a.modelPropertyMacro,
            parameterMacro: a.parameterMacro,
            requestInterceptor: a.requestInterceptor,
            responseInterceptor: a.responseInterceptor,
            strategies: [Xn.default, Gn.default, Hn.default, Wn.default],
          }
        return (0, ea.makeResolveSubtree)(o)(e, r, n)
      },
      serializeRes: Zn.serializeRes,
      opId: ta.opId,
    },
    statePlugins: {
      configs: { wrapActions: { loaded: configs_wrap_actions_loaded } },
    },
  }
}
function util() {
  return { fn: { shallowEqualKeys } }
}
var ra = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return H.default
    },
  }),
  na = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    Provider: function () {
      return G.Provider
    },
    connect: function () {
      return G.connect
    },
  }),
  aa = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return X.default
    },
  })
const withSystem = e => t => {
    const { fn: r } = e()
    class WithSystem extends Xe.Component {
      render() {
        return Xe.default.createElement(
          t,
          (0, cr.default)({}, e(), this.props, this.context),
        )
      }
    }
    return (
      (WithSystem.displayName = `WithSystem(${r.getDisplayName(t)})`),
      WithSystem
    )
  },
  withRoot = (e, t) => r => {
    const { fn: n } = e()
    class WithRoot extends Xe.Component {
      render() {
        return Xe.default.createElement(
          na.Provider,
          { store: t },
          Xe.default.createElement(
            r,
            (0, cr.default)({}, this.props, this.context),
          ),
        )
      }
    }
    return (WithRoot.displayName = `WithRoot(${n.getDisplayName(r)})`), WithRoot
  },
  withConnect = (e, t, r) =>
    (0, Ye.compose)(
      r ? withRoot(e, r) : aa.default,
      (0, na.connect)((r, n) => {
        const a = { ...n, ...e() },
          o = t.prototype?.mapStateToProps || (e => ({ state: e }))
        return o(r, a)
      }),
      withSystem(e),
    )(t),
  handleProps = (e, t, r, n) => {
    for (const a in t) {
      const o = t[a]
      'function' == typeof o && o(r[a], n[a], e())
    }
  },
  withMappedContainer = (e, t, r) => (t, n) => {
    const { fn: a } = e(),
      o = r(t, 'root')
    class WithMappedContainer extends Xe.Component {
      constructor(t, r) {
        super(t, r), handleProps(e, n, t, {})
      }
      UNSAFE_componentWillReceiveProps(t) {
        handleProps(e, n, t, this.props)
      }
      render() {
        const e = (0, zt.default)(this.props, n ? Object.keys(n) : [])
        return Xe.default.createElement(o, e)
      }
    }
    return (
      (WithMappedContainer.displayName = `WithMappedContainer(${a.getDisplayName(
        o,
      )})`),
      WithMappedContainer
    )
  },
  render = (e, t, r, n) => a => {
    const o = r(e, t, n)('App', 'root'),
      { createRoot: s } = ra.default
    s(a).render(Xe.default.createElement(o, null))
  },
  getComponent =
    (e, t, r) =>
    (n, a, o = {}) => {
      if ('string' != typeof n)
        throw new TypeError(
          'Need a string, to fetch a component. Was given a ' + typeof n,
        )
      const s = r(n)
      return s
        ? a
          ? 'root' === a
            ? withConnect(e, s, t())
            : withConnect(e, s)
          : s
        : (o.failSilently || e().log.warn('Could not find component:', n), null)
    },
  getDisplayName = e => e.displayName || e.name || 'Component'
var view = ({ getComponents: e, getStore: t, getSystem: r }) => {
  const n = ((a = getComponent(r, t, e)), kt(a, (...e) => JSON.stringify(e)))
  var a
  const o = (e => utils_memoizeN(e, (...e) => e))(withMappedContainer(r, 0, n))
  return {
    rootInjects: {
      getComponent: n,
      makeMappedContainer: o,
      render: render(r, t, getComponent, e),
    },
    fn: { getDisplayName },
  }
}
var view_legacy = ({
  React: e,
  getSystem: t,
  getStore: r,
  getComponents: n,
}) => {
  const a = {},
    o = parseInt(e?.version, 10)
  return (
    o >= 16 &&
      o < 18 &&
      (a.render = ((e, t, r, n) => a => {
        const o = r(e, t, n)('App', 'root')
        ra.default.render(Xe.default.createElement(o, null), a)
      })(t, r, getComponent, n)),
    { rootInjects: a }
  )
}
function downloadUrlPlugin(e) {
  let { fn: t } = e
  const r = {
    download:
      e =>
      ({ errActions: r, specSelectors: n, specActions: a, getConfigs: o }) => {
        let { fetch: s } = t
        const l = o()
        function next(t) {
          if (t instanceof Error || t.status >= 400)
            return (
              a.updateLoadingStatus('failed'),
              r.newThrownErr(
                Object.assign(
                  new Error((t.message || t.statusText) + ' ' + e),
                  { source: 'fetch' },
                ),
              ),
              void (
                !t.status &&
                t instanceof Error &&
                (function checkPossibleFailReasons() {
                  try {
                    let t
                    if (
                      ('URL' in dt
                        ? (t = new URL(e))
                        : ((t = document.createElement('a')), (t.href = e)),
                      'https:' !== t.protocol &&
                        'https:' === dt.location.protocol)
                    ) {
                      const e = Object.assign(
                        new Error(
                          `Possible mixed-content issue? The page was loaded over https:// but a ${t.protocol}// URL was specified. Check that you are not attempting to load mixed content.`,
                        ),
                        { source: 'fetch' },
                      )
                      return void r.newThrownErr(e)
                    }
                    if (t.origin !== dt.location.origin) {
                      const e = Object.assign(
                        new Error(
                          `Possible cross-origin (CORS) issue? The URL origin (${t.origin}) does not match the page (${dt.location.origin}). Check the server returns the correct 'Access-Control-Allow-*' headers.`,
                        ),
                        { source: 'fetch' },
                      )
                      r.newThrownErr(e)
                    }
                  } catch (e) {
                    return
                  }
                })()
              )
            )
          a.updateLoadingStatus('success'),
            a.updateSpec(t.text),
            n.url() !== e && a.updateUrl(e)
        }
        ;(e = e || n.url()),
          a.updateLoadingStatus('loading'),
          r.clear({ source: 'fetch' }),
          s({
            url: e,
            loadSpec: !0,
            requestInterceptor: l.requestInterceptor || (e => e),
            responseInterceptor: l.responseInterceptor || (e => e),
            credentials: 'same-origin',
            headers: { Accept: 'application/json,*/*' },
          }).then(next, next)
      },
    updateLoadingStatus: e => {
      let t = [null, 'loading', 'failed', 'success', 'failedConfig']
      return (
        -1 === t.indexOf(e) &&
          console.error(`Error: ${e} is not one of ${JSON.stringify(t)}`),
        { type: 'spec_update_loading_status', payload: e }
      )
    },
  }
  let n = {
    loadingStatus: (0, Dt.createSelector)(
      e => e || (0, Qe.Map)(),
      e => e.get('loadingStatus') || null,
    ),
  }
  return {
    statePlugins: {
      spec: {
        actions: r,
        reducers: {
          spec_update_loading_status: (e, t) =>
            'string' == typeof t.payload
              ? e.set('loadingStatus', t.payload)
              : e,
        },
        selectors: n,
      },
    },
  }
}
var oa = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return Y.default
    },
  }),
  sa = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return Q.default
    },
  }),
  la = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return Z.default
    },
  }),
  ia = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return ee.default
    },
  }),
  ca = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return te.default
    },
  }),
  ua = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return re.default
    },
  }),
  da = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return ne.default
    },
  }),
  pa = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return ae.default
    },
  })
var after_load = () => {
    oa.default.registerLanguage('json', la.default),
      oa.default.registerLanguage('js', sa.default),
      oa.default.registerLanguage('xml', ia.default),
      oa.default.registerLanguage('yaml', ua.default),
      oa.default.registerLanguage('http', da.default),
      oa.default.registerLanguage('bash', ca.default),
      oa.default.registerLanguage('powershell', pa.default),
      oa.default.registerLanguage('javascript', sa.default)
  },
  ma = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return oe.default
    },
  }),
  fa = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return se.default
    },
  }),
  ha = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return le.default
    },
  }),
  ga = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return ie.default
    },
  }),
  ya = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return ce.default
    },
  }),
  Ea = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return ue.default
    },
  }),
  Sa = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return de.default
    },
  })
const _a = {
    agate: ma.default,
    arta: fa.default,
    monokai: ha.default,
    nord: ga.default,
    obsidian: ya.default,
    'tomorrow-night': Ea.default,
    idea: Sa.default,
  },
  va = ma.default
var components_SyntaxHighlighter = ({
    language: e,
    className: t = '',
    getConfigs: r,
    syntaxHighlighting: n = {},
    children: a = '',
  }) => {
    const o = r().syntaxHighlight.theme,
      { styles: s, defaultStyle: l } = n,
      i = s?.[o] ?? l
    return Xe.default.createElement(
      oa.default,
      { language: e, className: t, style: i },
      a,
    )
  },
  ba = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return pe.default
    },
  })
var components_HighlightCode = ({
  fileName: e = 'response.txt',
  className: t,
  downloadable: r,
  getComponent: n,
  canCopy: a,
  language: o,
  children: s,
}) => {
  const l = (0, Xe.useRef)(null),
    i = n('SyntaxHighlighter', !0),
    handlePreventYScrollingBeyondElement = e => {
      const { target: t, deltaY: r } = e,
        { scrollHeight: n, offsetHeight: a, scrollTop: o } = t
      n > a &&
        ((0 === o && r < 0) || (a + o >= n && r > 0)) &&
        e.preventDefault()
    }
  return (
    (0, Xe.useEffect)(() => {
      const e = Array.from(l.current.childNodes).filter(
        e => !!e.nodeType && e.classList.contains('microlight'),
      )
      return (
        e.forEach(e =>
          e.addEventListener(
            'mousewheel',
            handlePreventYScrollingBeyondElement,
            { passive: !1 },
          ),
        ),
        () => {
          e.forEach(e =>
            e.removeEventListener(
              'mousewheel',
              handlePreventYScrollingBeyondElement,
            ),
          )
        }
      )
    }, [s, t, o]),
    Xe.default.createElement(
      'div',
      { className: 'highlight-code', ref: l },
      a &&
        Xe.default.createElement(
          'div',
          { className: 'copy-to-clipboard' },
          Xe.default.createElement(
            vr.CopyToClipboard,
            { text: s },
            Xe.default.createElement('button', null),
          ),
        ),
      r
        ? Xe.default.createElement(
            'button',
            {
              className: 'download-contents',
              onClick: () => {
                ;(0, ba.default)(s, e)
              },
            },
            'Download',
          )
        : null,
      Xe.default.createElement(
        i,
        {
          language: o,
          className: (0, _r.default)(t, 'microlight'),
          renderPlainText: ({ children: e, PlainTextViewer: r }) =>
            Xe.default.createElement(r, { className: t }, e),
        },
        s,
      ),
    )
  )
}
var components_PlainTextViewer = ({ className: e = '', children: t }) =>
  Xe.default.createElement(
    'pre',
    { className: (0, _r.default)('microlight', e) },
    t,
  )
var wrap_components_SyntaxHighlighter =
  (e, t) =>
  ({ renderPlainText: r, children: n, ...a }) => {
    const o = t.getConfigs().syntaxHighlight.activated,
      s = t.getComponent('PlainTextViewer')
    return o || 'function' != typeof r
      ? o
        ? Xe.default.createElement(e, a, n)
        : Xe.default.createElement(s, null, n)
      : r({ children: n, PlainTextViewer: s })
  }
const SyntaxHighlightingPlugin1 = () => ({
    afterLoad: after_load,
    rootInjects: { syntaxHighlighting: { styles: _a, defaultStyle: va } },
    components: {
      SyntaxHighlighter: components_SyntaxHighlighter,
      HighlightCode: components_HighlightCode,
      PlainTextViewer: components_PlainTextViewer,
    },
  }),
  SyntaxHighlightingPlugin2 = () => ({
    wrapComponents: { SyntaxHighlighter: wrap_components_SyntaxHighlighter },
  })
var syntax_highlighting = () => [
  SyntaxHighlightingPlugin1,
  SyntaxHighlightingPlugin2,
]
var versions_after_load = () => {
  const {
    GIT_DIRTY: e,
    GIT_COMMIT: t,
    PACKAGE_VERSION: r,
    BUILD_TIME: n,
  } = {
    PACKAGE_VERSION: '5.18.3',
    GIT_COMMIT: 'g9d6fdb22',
    GIT_DIRTY: !0,
    BUILD_TIME: 'Tue, 28 Jan 2025 12:45:40 GMT',
  }
  ;(dt.versions = dt.versions || {}),
    (dt.versions.swaggerUI = {
      version: r,
      gitRevision: t,
      gitDirty: e,
      buildTimestamp: n,
    })
}
var versions = () => ({ afterLoad: versions_after_load }),
  wa = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return me.default
    },
  })
const Ca = console.error,
  withErrorBoundary = e => t => {
    const { getComponent: r, fn: n } = e(),
      a = r('ErrorBoundary'),
      o = n.getDisplayName(t)
    class WithErrorBoundary extends Xe.Component {
      render() {
        return Xe.default.createElement(
          a,
          { targetName: o, getComponent: r, fn: n },
          Xe.default.createElement(
            t,
            (0, cr.default)({}, this.props, this.context),
          ),
        )
      }
    }
    var s
    return (
      (WithErrorBoundary.displayName = `WithErrorBoundary(${o})`),
      (s = t).prototype &&
        s.prototype.isReactComponent &&
        (WithErrorBoundary.prototype.mapStateToProps =
          t.prototype.mapStateToProps),
      WithErrorBoundary
    )
  }
var fallback = ({ name: e }) =>
  Xe.default.createElement(
    'div',
    { className: 'fallback' },
    '😱 ',
    Xe.default.createElement(
      'i',
      null,
      'Could not render ',
      't' === e ? 'this component' : e,
      ', see the console.',
    ),
  )
class ErrorBoundary extends Xe.Component {
  static defaultProps = {
    targetName: 'this component',
    getComponent: () => fallback,
    fn: { componentDidCatch: Ca },
    children: null,
  }
  static getDerivedStateFromError(e) {
    return { hasError: !0, error: e }
  }
  constructor(...e) {
    super(...e), (this.state = { hasError: !1, error: null })
  }
  componentDidCatch(e, t) {
    this.props.fn.componentDidCatch(e, t)
  }
  render() {
    const { getComponent: e, targetName: t, children: r } = this.props
    if (this.state.hasError) {
      const r = e('Fallback')
      return Xe.default.createElement(r, { name: t })
    }
    return r
  }
}
var xa = ErrorBoundary
var safe_render =
  ({ componentList: e = [], fullOverride: t = !1 } = {}) =>
  ({ getSystem: r }) => {
    const n = t
        ? e
        : [
            'App',
            'BaseLayout',
            'VersionPragmaFilter',
            'InfoContainer',
            'ServersContainer',
            'SchemesContainer',
            'AuthorizeBtnContainer',
            'FilterContainer',
            'Operations',
            'OperationContainer',
            'parameters',
            'responses',
            'OperationServers',
            'Models',
            'ModelWrapper',
            ...e,
          ],
      a = (0, wa.default)(
        n,
        Array(n.length).fill((e, { fn: t }) => t.withErrorBoundary(e)),
      )
    return {
      fn: { componentDidCatch: Ca, withErrorBoundary: withErrorBoundary(r) },
      components: { ErrorBoundary: xa, Fallback: fallback },
      wrapComponents: a,
    }
  }
class App extends Xe.default.Component {
  getLayout() {
    const { getComponent: e, layoutSelectors: t } = this.props,
      r = t.current(),
      n = e(r, !0)
    return (
      n ||
      (() =>
        Xe.default.createElement(
          'h1',
          null,
          ' No layout defined for "',
          r,
          '" ',
        ))
    )
  }
  render() {
    const e = this.getLayout()
    return Xe.default.createElement(e, null)
  }
}
var Oa = App
class AuthorizationPopup extends Xe.default.Component {
  close = () => {
    let { authActions: e } = this.props
    e.showDefinitions(!1)
  }
  render() {
    let {
        authSelectors: e,
        authActions: t,
        getComponent: r,
        errSelectors: n,
        specSelectors: a,
        fn: { AST: o = {} },
      } = this.props,
      s = e.shownDefinitions()
    const l = r('auths'),
      i = r('CloseIcon')
    return Xe.default.createElement(
      'div',
      { className: 'dialog-ux' },
      Xe.default.createElement('div', { className: 'backdrop-ux' }),
      Xe.default.createElement(
        'div',
        { className: 'modal-ux' },
        Xe.default.createElement(
          'div',
          { className: 'modal-dialog-ux' },
          Xe.default.createElement(
            'div',
            { className: 'modal-ux-inner' },
            Xe.default.createElement(
              'div',
              { className: 'modal-ux-header' },
              Xe.default.createElement('h3', null, 'Available authorizations'),
              Xe.default.createElement(
                'button',
                {
                  type: 'button',
                  className: 'close-modal',
                  onClick: this.close,
                },
                Xe.default.createElement(i, null),
              ),
            ),
            Xe.default.createElement(
              'div',
              { className: 'modal-ux-content' },
              s
                .valueSeq()
                .map((s, i) =>
                  Xe.default.createElement(l, {
                    key: i,
                    AST: o,
                    definitions: s,
                    getComponent: r,
                    errSelectors: n,
                    authSelectors: e,
                    authActions: t,
                    specSelectors: a,
                  }),
                ),
            ),
          ),
        ),
      ),
    )
  }
}
class AuthorizeBtn extends Xe.default.Component {
  render() {
    let {
      isAuthorized: e,
      showPopup: t,
      onClick: r,
      getComponent: n,
    } = this.props
    const a = n('authorizationPopup', !0),
      o = n('LockAuthIcon', !0),
      s = n('UnlockAuthIcon', !0)
    return Xe.default.createElement(
      'div',
      { className: 'auth-wrapper' },
      Xe.default.createElement(
        'button',
        {
          className: e ? 'btn authorize locked' : 'btn authorize unlocked',
          onClick: r,
        },
        Xe.default.createElement('span', null, 'Authorize'),
        e
          ? Xe.default.createElement(o, null)
          : Xe.default.createElement(s, null),
      ),
      t && Xe.default.createElement(a, null),
    )
  }
}
class AuthorizeBtnContainer extends Xe.default.Component {
  render() {
    const {
        authActions: e,
        authSelectors: t,
        specSelectors: r,
        getComponent: n,
      } = this.props,
      a = r.securityDefinitions(),
      o = t.definitionsToAuthorize(),
      s = n('authorizeBtn')
    return a
      ? Xe.default.createElement(s, {
          onClick: () => e.showDefinitions(o),
          isAuthorized: !!t.authorized().size,
          showPopup: !!t.shownDefinitions(),
          getComponent: n,
        })
      : null
  }
}
class AuthorizeOperationBtn extends Xe.default.Component {
  onClick = e => {
    e.stopPropagation()
    let { onClick: t } = this.props
    t && t()
  }
  render() {
    let { isAuthorized: e, getComponent: t } = this.props
    const r = t('LockAuthOperationIcon', !0),
      n = t('UnlockAuthOperationIcon', !0)
    return Xe.default.createElement(
      'button',
      {
        className: 'authorization__btn',
        'aria-label': e
          ? 'authorization button locked'
          : 'authorization button unlocked',
        onClick: this.onClick,
      },
      e
        ? Xe.default.createElement(r, { className: 'locked' })
        : Xe.default.createElement(n, { className: 'unlocked' }),
    )
  }
}
class Auths extends Xe.default.Component {
  constructor(e, t) {
    super(e, t), (this.state = {})
  }
  onAuthChange = e => {
    let { name: t } = e
    this.setState({ [t]: e })
  }
  submitAuth = e => {
    e.preventDefault()
    let { authActions: t } = this.props
    t.authorizeWithPersistOption(this.state)
  }
  logoutClick = e => {
    e.preventDefault()
    let { authActions: t, definitions: r } = this.props,
      n = r.map((e, t) => t).toArray()
    this.setState(n.reduce((e, t) => ((e[t] = ''), e), {})),
      t.logoutWithPersistOption(n)
  }
  close = e => {
    e.preventDefault()
    let { authActions: t } = this.props
    t.showDefinitions(!1)
  }
  render() {
    let {
      definitions: e,
      getComponent: t,
      authSelectors: r,
      errSelectors: n,
    } = this.props
    const a = t('AuthItem'),
      o = t('oauth2', !0),
      s = t('Button')
    let l = r.authorized(),
      i = e.filter((e, t) => !!l.get(t)),
      c = e.filter(e => 'oauth2' !== e.get('type')),
      u = e.filter(e => 'oauth2' === e.get('type'))
    return Xe.default.createElement(
      'div',
      { className: 'auth-container' },
      !!c.size &&
        Xe.default.createElement(
          'form',
          { onSubmit: this.submitAuth },
          c
            .map((e, r) =>
              Xe.default.createElement(a, {
                key: r,
                schema: e,
                name: r,
                getComponent: t,
                onAuthChange: this.onAuthChange,
                authorized: l,
                errSelectors: n,
              }),
            )
            .toArray(),
          Xe.default.createElement(
            'div',
            { className: 'auth-btn-wrapper' },
            c.size === i.size
              ? Xe.default.createElement(
                  s,
                  {
                    className: 'btn modal-btn auth',
                    onClick: this.logoutClick,
                    'aria-label': 'Remove authorization',
                  },
                  'Logout',
                )
              : Xe.default.createElement(
                  s,
                  {
                    type: 'submit',
                    className: 'btn modal-btn auth authorize',
                    'aria-label': 'Apply credentials',
                  },
                  'Authorize',
                ),
            Xe.default.createElement(
              s,
              { className: 'btn modal-btn auth btn-done', onClick: this.close },
              'Close',
            ),
          ),
        ),
      u && u.size
        ? Xe.default.createElement(
            'div',
            null,
            Xe.default.createElement(
              'div',
              { className: 'scope-def' },
              Xe.default.createElement(
                'p',
                null,
                'Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.',
              ),
              Xe.default.createElement(
                'p',
                null,
                'API requires the following scopes. Select which ones you want to grant to Swagger UI.',
              ),
            ),
            e
              .filter(e => 'oauth2' === e.get('type'))
              .map((e, t) =>
                Xe.default.createElement(
                  'div',
                  { key: t },
                  Xe.default.createElement(o, {
                    authorized: l,
                    schema: e,
                    name: t,
                  }),
                ),
              )
              .toArray(),
          )
        : null,
    )
  }
}
class auth_item_Auths extends Xe.default.Component {
  render() {
    let {
      schema: e,
      name: t,
      getComponent: r,
      onAuthChange: n,
      authorized: a,
      errSelectors: o,
    } = this.props
    const s = r('apiKeyAuth'),
      l = r('basicAuth')
    let i
    const c = e.get('type')
    switch (c) {
      case 'apiKey':
        i = Xe.default.createElement(s, {
          key: t,
          schema: e,
          name: t,
          errSelectors: o,
          authorized: a,
          getComponent: r,
          onChange: n,
        })
        break
      case 'basic':
        i = Xe.default.createElement(l, {
          key: t,
          schema: e,
          name: t,
          errSelectors: o,
          authorized: a,
          getComponent: r,
          onChange: n,
        })
        break
      default:
        i = Xe.default.createElement(
          'div',
          { key: t },
          'Unknown security definition type ',
          c,
        )
    }
    return Xe.default.createElement('div', { key: `${t}-jump` }, i)
  }
}
class AuthError extends Xe.default.Component {
  render() {
    let { error: e } = this.props,
      t = e.get('level'),
      r = e.get('message'),
      n = e.get('source')
    return Xe.default.createElement(
      'div',
      { className: 'errors' },
      Xe.default.createElement('b', null, n, ' ', t),
      Xe.default.createElement('span', null, r),
    )
  }
}
class ApiKeyAuth extends Xe.default.Component {
  constructor(e, t) {
    super(e, t)
    let { name: r, schema: n } = this.props,
      a = this.getValue()
    this.state = { name: r, schema: n, value: a }
  }
  getValue() {
    let { name: e, authorized: t } = this.props
    return t && t.getIn([e, 'value'])
  }
  onChange = e => {
    let { onChange: t } = this.props,
      r = e.target.value,
      n = Object.assign({}, this.state, { value: r })
    this.setState(n), t(n)
  }
  render() {
    let { schema: e, getComponent: t, errSelectors: r, name: n } = this.props
    const a = t('Input'),
      o = t('Row'),
      s = t('Col'),
      l = t('authError'),
      i = t('Markdown', !0),
      c = t('JumpToPath', !0)
    let u = this.getValue(),
      d = r.allErrors().filter(e => e.get('authId') === n)
    return Xe.default.createElement(
      'div',
      null,
      Xe.default.createElement(
        'h4',
        null,
        Xe.default.createElement('code', null, n || e.get('name')),
        ' (apiKey)',
        Xe.default.createElement(c, { path: ['securityDefinitions', n] }),
      ),
      u && Xe.default.createElement('h6', null, 'Authorized'),
      Xe.default.createElement(
        o,
        null,
        Xe.default.createElement(i, { source: e.get('description') }),
      ),
      Xe.default.createElement(
        o,
        null,
        Xe.default.createElement(
          'p',
          null,
          'Name: ',
          Xe.default.createElement('code', null, e.get('name')),
        ),
      ),
      Xe.default.createElement(
        o,
        null,
        Xe.default.createElement(
          'p',
          null,
          'In: ',
          Xe.default.createElement('code', null, e.get('in')),
        ),
      ),
      Xe.default.createElement(
        o,
        null,
        Xe.default.createElement(
          'label',
          { htmlFor: 'api_key_value' },
          'Value:',
        ),
        u
          ? Xe.default.createElement('code', null, ' ****** ')
          : Xe.default.createElement(
              s,
              null,
              Xe.default.createElement(a, {
                id: 'api_key_value',
                type: 'text',
                onChange: this.onChange,
                autoFocus: !0,
              }),
            ),
      ),
      d
        .valueSeq()
        .map((e, t) => Xe.default.createElement(l, { error: e, key: t })),
    )
  }
}
class BasicAuth extends Xe.default.Component {
  constructor(e, t) {
    super(e, t)
    let { schema: r, name: n } = this.props,
      a = this.getValue().username
    this.state = { name: n, schema: r, value: a ? { username: a } : {} }
  }
  getValue() {
    let { authorized: e, name: t } = this.props
    return (e && e.getIn([t, 'value'])) || {}
  }
  onChange = e => {
    let { onChange: t } = this.props,
      { value: r, name: n } = e.target,
      a = this.state.value
    ;(a[n] = r), this.setState({ value: a }), t(this.state)
  }
  render() {
    let { schema: e, getComponent: t, name: r, errSelectors: n } = this.props
    const a = t('Input'),
      o = t('Row'),
      s = t('Col'),
      l = t('authError'),
      i = t('JumpToPath', !0),
      c = t('Markdown', !0)
    let u = this.getValue().username,
      d = n.allErrors().filter(e => e.get('authId') === r)
    return Xe.default.createElement(
      'div',
      null,
      Xe.default.createElement(
        'h4',
        null,
        'Basic authorization',
        Xe.default.createElement(i, { path: ['securityDefinitions', r] }),
      ),
      u && Xe.default.createElement('h6', null, 'Authorized'),
      Xe.default.createElement(
        o,
        null,
        Xe.default.createElement(c, { source: e.get('description') }),
      ),
      Xe.default.createElement(
        o,
        null,
        Xe.default.createElement(
          'label',
          { htmlFor: 'auth_username' },
          'Username:',
        ),
        u
          ? Xe.default.createElement('code', null, ' ', u, ' ')
          : Xe.default.createElement(
              s,
              null,
              Xe.default.createElement(a, {
                id: 'auth_username',
                type: 'text',
                required: 'required',
                name: 'username',
                onChange: this.onChange,
                autoFocus: !0,
              }),
            ),
      ),
      Xe.default.createElement(
        o,
        null,
        Xe.default.createElement(
          'label',
          { htmlFor: 'auth_password' },
          'Password:',
        ),
        u
          ? Xe.default.createElement('code', null, ' ****** ')
          : Xe.default.createElement(
              s,
              null,
              Xe.default.createElement(a, {
                id: 'auth_password',
                autoComplete: 'new-password',
                name: 'password',
                type: 'password',
                onChange: this.onChange,
              }),
            ),
      ),
      d
        .valueSeq()
        .map((e, t) => Xe.default.createElement(l, { error: e, key: t })),
    )
  }
}
function Example(e) {
  const { example: t, showValue: r, getComponent: n } = e,
    a = n('Markdown', !0),
    o = n('HighlightCode', !0)
  return t
    ? Xe.default.createElement(
        'div',
        { className: 'example' },
        t.get('description')
          ? Xe.default.createElement(
              'section',
              { className: 'example__section' },
              Xe.default.createElement(
                'div',
                { className: 'example__section-header' },
                'Example Description',
              ),
              Xe.default.createElement(
                'p',
                null,
                Xe.default.createElement(a, { source: t.get('description') }),
              ),
            )
          : null,
        r && t.has('value')
          ? Xe.default.createElement(
              'section',
              { className: 'example__section' },
              Xe.default.createElement(
                'div',
                { className: 'example__section-header' },
                'Example Value',
              ),
              Xe.default.createElement(o, null, stringify(t.get('value'))),
            )
          : null,
      )
    : null
}
class ExamplesSelect extends Xe.default.PureComponent {
  static defaultProps = {
    examples: Qe.default.Map({}),
    onSelect: (...e) =>
      console.log(
        'DEBUG: ExamplesSelect was not given an onSelect callback',
        ...e,
      ),
    currentExampleKey: null,
    showLabels: !0,
  }
  _onSelect = (e, { isSyntheticChange: t = !1 } = {}) => {
    'function' == typeof this.props.onSelect &&
      this.props.onSelect(e, { isSyntheticChange: t })
  }
  _onDomSelect = e => {
    if ('function' == typeof this.props.onSelect) {
      const t = e.target.selectedOptions[0].getAttribute('value')
      this._onSelect(t, { isSyntheticChange: !1 })
    }
  }
  getCurrentExample = () => {
    const { examples: e, currentExampleKey: t } = this.props,
      r = e.get(t),
      n = e.keySeq().first(),
      a = e.get(n)
    return r || a || Map({})
  }
  componentDidMount() {
    const { onSelect: e, examples: t } = this.props
    if ('function' == typeof e) {
      const e = t.first(),
        r = t.keyOf(e)
      this._onSelect(r, { isSyntheticChange: !0 })
    }
  }
  UNSAFE_componentWillReceiveProps(e) {
    const { currentExampleKey: t, examples: r } = e
    if (r !== this.props.examples && !r.has(t)) {
      const e = r.first(),
        t = r.keyOf(e)
      this._onSelect(t, { isSyntheticChange: !0 })
    }
  }
  render() {
    const {
      examples: e,
      currentExampleKey: t,
      isValueModified: r,
      isModifiedValueAvailable: n,
      showLabels: a,
    } = this.props
    return Xe.default.createElement(
      'div',
      { className: 'examples-select' },
      a
        ? Xe.default.createElement(
            'span',
            { className: 'examples-select__section-label' },
            'Examples: ',
          )
        : null,
      Xe.default.createElement(
        'select',
        {
          className: 'examples-select-element',
          onChange: this._onDomSelect,
          value: n && r ? '__MODIFIED__VALUE__' : t || '',
        },
        n
          ? Xe.default.createElement(
              'option',
              { value: '__MODIFIED__VALUE__' },
              '[Modified value]',
            )
          : null,
        e
          .map((e, t) =>
            Xe.default.createElement(
              'option',
              { key: t, value: t },
              e.get('summary') || t,
            ),
          )
          .valueSeq(),
      ),
    )
  }
}
const stringifyUnlessList = e => (Qe.List.isList(e) ? e : stringify(e))
class ExamplesSelectValueRetainer extends Xe.default.PureComponent {
  static defaultProps = {
    userHasEditedBody: !1,
    examples: (0, Qe.Map)({}),
    currentNamespace: '__DEFAULT__NAMESPACE__',
    setRetainRequestBodyValueFlag: () => {},
    onSelect: (...e) =>
      console.log(
        'ExamplesSelectValueRetainer: no `onSelect` function was provided',
        ...e,
      ),
    updateValue: (...e) =>
      console.log(
        'ExamplesSelectValueRetainer: no `updateValue` function was provided',
        ...e,
      ),
  }
  constructor(e) {
    super(e)
    const t = this._getCurrentExampleValue()
    this.state = {
      [e.currentNamespace]: (0, Qe.Map)({
        lastUserEditedValue: this.props.currentUserInputValue,
        lastDownstreamValue: t,
        isModifiedValueSelected:
          this.props.userHasEditedBody ||
          this.props.currentUserInputValue !== t,
      }),
    }
  }
  componentWillUnmount() {
    this.props.setRetainRequestBodyValueFlag(!1)
  }
  _getStateForCurrentNamespace = () => {
    const { currentNamespace: e } = this.props
    return (this.state[e] || (0, Qe.Map)()).toObject()
  }
  _setStateForCurrentNamespace = e => {
    const { currentNamespace: t } = this.props
    return this._setStateForNamespace(t, e)
  }
  _setStateForNamespace = (e, t) => {
    const r = (this.state[e] || (0, Qe.Map)()).mergeDeep(t)
    return this.setState({ [e]: r })
  }
  _isCurrentUserInputSameAsExampleValue = () => {
    const { currentUserInputValue: e } = this.props
    return this._getCurrentExampleValue() === e
  }
  _getValueForExample = (e, t) => {
    const { examples: r } = t || this.props
    return stringifyUnlessList((r || (0, Qe.Map)({})).getIn([e, 'value']))
  }
  _getCurrentExampleValue = e => {
    const { currentKey: t } = e || this.props
    return this._getValueForExample(t, e || this.props)
  }
  _onExamplesSelect = (e, { isSyntheticChange: t } = {}, ...r) => {
    const {
        onSelect: n,
        updateValue: a,
        currentUserInputValue: o,
        userHasEditedBody: s,
      } = this.props,
      { lastUserEditedValue: l } = this._getStateForCurrentNamespace(),
      i = this._getValueForExample(e)
    if ('__MODIFIED__VALUE__' === e)
      return (
        a(stringifyUnlessList(l)),
        this._setStateForCurrentNamespace({ isModifiedValueSelected: !0 })
      )
    'function' == typeof n && n(e, { isSyntheticChange: t }, ...r),
      this._setStateForCurrentNamespace({
        lastDownstreamValue: i,
        isModifiedValueSelected: (t && s) || (!!o && o !== i),
      }),
      t || ('function' == typeof a && a(stringifyUnlessList(i)))
  }
  UNSAFE_componentWillReceiveProps(e) {
    const {
        currentUserInputValue: t,
        examples: r,
        onSelect: n,
        userHasEditedBody: a,
      } = e,
      { lastUserEditedValue: o, lastDownstreamValue: s } =
        this._getStateForCurrentNamespace(),
      l = this._getValueForExample(e.currentKey, e),
      i = r.filter(e => e.get('value') === t || stringify(e.get('value')) === t)
    if (i.size) {
      let t
      ;(t = i.has(e.currentKey) ? e.currentKey : i.keySeq().first()),
        n(t, { isSyntheticChange: !0 })
    } else
      t !== this.props.currentUserInputValue &&
        t !== o &&
        t !== s &&
        (this.props.setRetainRequestBodyValueFlag(!0),
        this._setStateForNamespace(e.currentNamespace, {
          lastUserEditedValue: e.currentUserInputValue,
          isModifiedValueSelected: a || t !== l,
        }))
  }
  render() {
    const {
        currentUserInputValue: e,
        examples: t,
        currentKey: r,
        getComponent: n,
        userHasEditedBody: a,
      } = this.props,
      {
        lastDownstreamValue: o,
        lastUserEditedValue: s,
        isModifiedValueSelected: l,
      } = this._getStateForCurrentNamespace(),
      i = n('ExamplesSelect')
    return Xe.default.createElement(i, {
      examples: t,
      currentExampleKey: r,
      onSelect: this._onExamplesSelect,
      isModifiedValueAvailable: !!s && s !== o,
      isValueModified:
        (void 0 !== e && l && e !== this._getCurrentExampleValue()) || a,
    })
  }
}
function oauth2_authorize_authorize({
  auth: e,
  authActions: t,
  errActions: r,
  configs: n,
  authConfigs: a = {},
  currentServer: o,
}) {
  let { schema: s, scopes: l, name: i, clientId: c } = e,
    u = s.get('flow'),
    d = []
  switch (u) {
    case 'password':
      return void t.authorizePassword(e)
    case 'application':
    case 'clientCredentials':
    case 'client_credentials':
      return void t.authorizeApplication(e)
    case 'accessCode':
    case 'authorizationCode':
    case 'authorization_code':
      d.push('response_type=code')
      break
    case 'implicit':
      d.push('response_type=token')
  }
  'string' == typeof c && d.push('client_id=' + encodeURIComponent(c))
  let p = n.oauth2RedirectUrl
  if (void 0 === p)
    return void r.newAuthErr({
      authId: i,
      source: 'validation',
      level: 'error',
      message:
        'oauth2RedirectUrl configuration is not passed. Oauth2 authorization cannot be performed.',
    })
  d.push('redirect_uri=' + encodeURIComponent(p))
  let m = []
  if (
    (Array.isArray(l)
      ? (m = l)
      : Qe.default.List.isList(l) && (m = l.toArray()),
    m.length > 0)
  ) {
    let e = a.scopeSeparator || ' '
    d.push('scope=' + encodeURIComponent(m.join(e)))
  }
  let f = btoa(new Date())
  if (
    (d.push('state=' + encodeURIComponent(f)),
    void 0 !== a.realm && d.push('realm=' + encodeURIComponent(a.realm)),
    ('authorizationCode' === u ||
      'authorization_code' === u ||
      'accessCode' === u) &&
      a.usePkceWithAuthorizationCodeGrant)
  ) {
    const t = (function generateCodeVerifier() {
        return b64toB64UrlEncoded(vt()(32).toString('base64'))
      })(),
      r = (function createCodeChallenge(e) {
        return b64toB64UrlEncoded(wt()('sha256').update(e).digest('base64'))
      })(t)
    d.push('code_challenge=' + r),
      d.push('code_challenge_method=S256'),
      (e.codeVerifier = t)
  }
  let { additionalQueryStringParams: h } = a
  for (let e in h)
    void 0 !== h[e] && d.push([e, h[e]].map(encodeURIComponent).join('='))
  const g = s.get('authorizationUrl')
  let y
  y = o ? (0, At.default)(sanitizeUrl(g), o, !0).toString() : sanitizeUrl(g)
  let S,
    _ = [y, d.join('&')].join(-1 === g.indexOf('?') ? '?' : '&')
  ;(S =
    'implicit' === u
      ? t.preAuthorizeImplicit
      : a.useBasicAuthenticationWithAccessCodeGrant
      ? t.authorizeAccessCodeWithBasicAuthentication
      : t.authorizeAccessCodeWithFormParams),
    t.authPopup(_, {
      auth: e,
      state: f,
      redirectUrl: p,
      callback: S,
      errCb: r.newAuthErr,
    })
}
class Oauth2 extends Xe.default.Component {
  constructor(e, t) {
    super(e, t)
    let { name: r, schema: n, authorized: a, authSelectors: o } = this.props,
      s = a && a.get(r),
      l = o.getConfigs() || {},
      i = (s && s.get('username')) || '',
      c = (s && s.get('clientId')) || l.clientId || '',
      u = (s && s.get('clientSecret')) || l.clientSecret || '',
      d = (s && s.get('passwordType')) || 'basic',
      p = (s && s.get('scopes')) || l.scopes || []
    'string' == typeof p && (p = p.split(l.scopeSeparator || ' ')),
      (this.state = {
        appName: l.appName,
        name: r,
        schema: n,
        scopes: p,
        clientId: c,
        clientSecret: u,
        username: i,
        password: '',
        passwordType: d,
      })
  }
  close = e => {
    e.preventDefault()
    let { authActions: t } = this.props
    t.showDefinitions(!1)
  }
  authorize = () => {
    let {
        authActions: e,
        errActions: t,
        getConfigs: r,
        authSelectors: n,
        oas3Selectors: a,
      } = this.props,
      o = r(),
      s = n.getConfigs()
    t.clear({ authId: name, type: 'auth', source: 'auth' }),
      oauth2_authorize_authorize({
        auth: this.state,
        currentServer: a.serverEffectiveValue(a.selectedServer()),
        authActions: e,
        errActions: t,
        configs: o,
        authConfigs: s,
      })
  }
  onScopeChange = e => {
    let { target: t } = e,
      { checked: r } = t,
      n = t.dataset.value
    if (r && -1 === this.state.scopes.indexOf(n)) {
      let e = this.state.scopes.concat([n])
      this.setState({ scopes: e })
    } else
      !r &&
        this.state.scopes.indexOf(n) > -1 &&
        this.setState({ scopes: this.state.scopes.filter(e => e !== n) })
  }
  onInputChange = e => {
    let {
        target: {
          dataset: { name: t },
          value: r,
        },
      } = e,
      n = { [t]: r }
    this.setState(n)
  }
  selectScopes = e => {
    e.target.dataset.all
      ? this.setState({
          scopes: Array.from(
            (
              this.props.schema.get('allowedScopes') ||
              this.props.schema.get('scopes')
            ).keys(),
          ),
        })
      : this.setState({ scopes: [] })
  }
  logout = e => {
    e.preventDefault()
    let { authActions: t, errActions: r, name: n } = this.props
    r.clear({ authId: n, type: 'auth', source: 'auth' }),
      t.logoutWithPersistOption([n])
  }
  render() {
    let {
      schema: e,
      getComponent: t,
      authSelectors: r,
      errSelectors: n,
      name: a,
      specSelectors: o,
    } = this.props
    const s = t('Input'),
      l = t('Row'),
      i = t('Col'),
      c = t('Button'),
      u = t('authError'),
      d = t('JumpToPath', !0),
      p = t('Markdown', !0),
      m = t('InitializedInput'),
      { isOAS3: f } = o
    let h = f() ? e.get('openIdConnectUrl') : null
    const g = 'implicit',
      y = 'password',
      S = f() ? (h ? 'authorization_code' : 'authorizationCode') : 'accessCode',
      _ = f() ? (h ? 'client_credentials' : 'clientCredentials') : 'application'
    let v = !!(r.getConfigs() || {}).usePkceWithAuthorizationCodeGrant,
      b = e.get('flow'),
      w = b === S && v ? b + ' with PKCE' : b,
      C = e.get('allowedScopes') || e.get('scopes'),
      x = !!r.authorized().get(a),
      O = n.allErrors().filter(e => e.get('authId') === a),
      k = !O.filter(e => 'validation' === e.get('source')).size,
      N = e.get('description')
    return Xe.default.createElement(
      'div',
      null,
      Xe.default.createElement(
        'h4',
        null,
        a,
        ' (OAuth2, ',
        w,
        ') ',
        Xe.default.createElement(d, { path: ['securityDefinitions', a] }),
      ),
      this.state.appName
        ? Xe.default.createElement(
            'h5',
            null,
            'Application: ',
            this.state.appName,
            ' ',
          )
        : null,
      N && Xe.default.createElement(p, { source: e.get('description') }),
      x && Xe.default.createElement('h6', null, 'Authorized'),
      h &&
        Xe.default.createElement(
          'p',
          null,
          'OpenID Connect URL: ',
          Xe.default.createElement('code', null, h),
        ),
      (b === g || b === S) &&
        Xe.default.createElement(
          'p',
          null,
          'Authorization URL: ',
          Xe.default.createElement('code', null, e.get('authorizationUrl')),
        ),
      (b === y || b === S || b === _) &&
        Xe.default.createElement(
          'p',
          null,
          'Token URL:',
          Xe.default.createElement('code', null, ' ', e.get('tokenUrl')),
        ),
      Xe.default.createElement(
        'p',
        { className: 'flow' },
        'Flow: ',
        Xe.default.createElement('code', null, w),
      ),
      b !== y
        ? null
        : Xe.default.createElement(
            l,
            null,
            Xe.default.createElement(
              l,
              null,
              Xe.default.createElement(
                'label',
                { htmlFor: 'oauth_username' },
                'username:',
              ),
              x
                ? Xe.default.createElement(
                    'code',
                    null,
                    ' ',
                    this.state.username,
                    ' ',
                  )
                : Xe.default.createElement(
                    i,
                    { tablet: 10, desktop: 10 },
                    Xe.default.createElement('input', {
                      id: 'oauth_username',
                      type: 'text',
                      'data-name': 'username',
                      onChange: this.onInputChange,
                      autoFocus: !0,
                    }),
                  ),
            ),
            Xe.default.createElement(
              l,
              null,
              Xe.default.createElement(
                'label',
                { htmlFor: 'oauth_password' },
                'password:',
              ),
              x
                ? Xe.default.createElement('code', null, ' ****** ')
                : Xe.default.createElement(
                    i,
                    { tablet: 10, desktop: 10 },
                    Xe.default.createElement('input', {
                      id: 'oauth_password',
                      type: 'password',
                      'data-name': 'password',
                      onChange: this.onInputChange,
                    }),
                  ),
            ),
            Xe.default.createElement(
              l,
              null,
              Xe.default.createElement(
                'label',
                { htmlFor: 'password_type' },
                'Client credentials location:',
              ),
              x
                ? Xe.default.createElement(
                    'code',
                    null,
                    ' ',
                    this.state.passwordType,
                    ' ',
                  )
                : Xe.default.createElement(
                    i,
                    { tablet: 10, desktop: 10 },
                    Xe.default.createElement(
                      'select',
                      {
                        id: 'password_type',
                        'data-name': 'passwordType',
                        onChange: this.onInputChange,
                      },
                      Xe.default.createElement(
                        'option',
                        { value: 'basic' },
                        'Authorization header',
                      ),
                      Xe.default.createElement(
                        'option',
                        { value: 'request-body' },
                        'Request body',
                      ),
                    ),
                  ),
            ),
          ),
      (b === _ || b === g || b === S || b === y) &&
        (!x || (x && this.state.clientId)) &&
        Xe.default.createElement(
          l,
          null,
          Xe.default.createElement(
            'label',
            { htmlFor: `client_id_${b}` },
            'client_id:',
          ),
          x
            ? Xe.default.createElement('code', null, ' ****** ')
            : Xe.default.createElement(
                i,
                { tablet: 10, desktop: 10 },
                Xe.default.createElement(m, {
                  id: `client_id_${b}`,
                  type: 'text',
                  required: b === y,
                  initialValue: this.state.clientId,
                  'data-name': 'clientId',
                  onChange: this.onInputChange,
                }),
              ),
        ),
      (b === _ || b === S || b === y) &&
        Xe.default.createElement(
          l,
          null,
          Xe.default.createElement(
            'label',
            { htmlFor: `client_secret_${b}` },
            'client_secret:',
          ),
          x
            ? Xe.default.createElement('code', null, ' ****** ')
            : Xe.default.createElement(
                i,
                { tablet: 10, desktop: 10 },
                Xe.default.createElement(m, {
                  id: `client_secret_${b}`,
                  initialValue: this.state.clientSecret,
                  type: 'password',
                  'data-name': 'clientSecret',
                  onChange: this.onInputChange,
                }),
              ),
        ),
      !x && C && C.size
        ? Xe.default.createElement(
            'div',
            { className: 'scopes' },
            Xe.default.createElement(
              'h2',
              null,
              'Scopes:',
              Xe.default.createElement(
                'a',
                { onClick: this.selectScopes, 'data-all': !0 },
                'select all',
              ),
              Xe.default.createElement(
                'a',
                { onClick: this.selectScopes },
                'select none',
              ),
            ),
            C.map((e, t) =>
              Xe.default.createElement(
                l,
                { key: t },
                Xe.default.createElement(
                  'div',
                  { className: 'checkbox' },
                  Xe.default.createElement(s, {
                    'data-value': t,
                    id: `${t}-${b}-checkbox-${this.state.name}`,
                    disabled: x,
                    checked: this.state.scopes.includes(t),
                    type: 'checkbox',
                    onChange: this.onScopeChange,
                  }),
                  Xe.default.createElement(
                    'label',
                    { htmlFor: `${t}-${b}-checkbox-${this.state.name}` },
                    Xe.default.createElement('span', { className: 'item' }),
                    Xe.default.createElement(
                      'div',
                      { className: 'text' },
                      Xe.default.createElement('p', { className: 'name' }, t),
                      Xe.default.createElement(
                        'p',
                        { className: 'description' },
                        e,
                      ),
                    ),
                  ),
                ),
              ),
            ).toArray(),
          )
        : null,
      O.valueSeq().map((e, t) =>
        Xe.default.createElement(u, { error: e, key: t }),
      ),
      Xe.default.createElement(
        'div',
        { className: 'auth-btn-wrapper' },
        k &&
          (x
            ? Xe.default.createElement(
                c,
                {
                  className: 'btn modal-btn auth authorize',
                  onClick: this.logout,
                  'aria-label': 'Remove authorization',
                },
                'Logout',
              )
            : Xe.default.createElement(
                c,
                {
                  className: 'btn modal-btn auth authorize',
                  onClick: this.authorize,
                  'aria-label': 'Apply given OAuth2 credentials',
                },
                'Authorize',
              )),
        Xe.default.createElement(
          c,
          { className: 'btn modal-btn auth btn-done', onClick: this.close },
          'Close',
        ),
      ),
    )
  }
}
class Clear extends Xe.Component {
  onClick = () => {
    let { specActions: e, path: t, method: r } = this.props
    e.clearResponse(t, r), e.clearRequest(t, r)
  }
  render() {
    return Xe.default.createElement(
      'button',
      {
        className: 'btn btn-clear opblock-control__btn',
        onClick: this.onClick,
      },
      'Clear',
    )
  }
}
const Headers = ({ headers: e }) =>
    Xe.default.createElement(
      'div',
      null,
      Xe.default.createElement('h5', null, 'Response headers'),
      Xe.default.createElement('pre', { className: 'microlight' }, e),
    ),
  Duration = ({ duration: e }) =>
    Xe.default.createElement(
      'div',
      null,
      Xe.default.createElement('h5', null, 'Request duration'),
      Xe.default.createElement('pre', { className: 'microlight' }, e, ' ms'),
    )
class LiveResponse extends Xe.default.Component {
  shouldComponentUpdate(e) {
    return (
      this.props.response !== e.response ||
      this.props.path !== e.path ||
      this.props.method !== e.method ||
      this.props.displayRequestDuration !== e.displayRequestDuration
    )
  }
  render() {
    const {
        response: e,
        getComponent: t,
        getConfigs: r,
        displayRequestDuration: n,
        specSelectors: a,
        path: o,
        method: s,
      } = this.props,
      { showMutatedRequest: l, requestSnippetsEnabled: i } = r(),
      c = l ? a.mutatedRequestFor(o, s) : a.requestFor(o, s),
      u = e.get('status'),
      d = c.get('url'),
      p = e.get('headers').toJS(),
      m = e.get('notDocumented'),
      f = e.get('error'),
      h = e.get('text'),
      g = e.get('duration'),
      y = Object.keys(p),
      S = p['content-type'] || p['Content-Type'],
      _ = t('responseBody'),
      v = y.map(e => {
        var t = Array.isArray(p[e]) ? p[e].join() : p[e]
        return Xe.default.createElement(
          'span',
          { className: 'headerline', key: e },
          ' ',
          e,
          ': ',
          t,
          ' ',
        )
      }),
      b = 0 !== v.length,
      w = t('Markdown', !0),
      C = t('RequestSnippets', !0),
      x = t('curl', !0)
    return Xe.default.createElement(
      'div',
      null,
      c && i
        ? Xe.default.createElement(C, { request: c })
        : Xe.default.createElement(x, { request: c }),
      d &&
        Xe.default.createElement(
          'div',
          null,
          Xe.default.createElement(
            'div',
            { className: 'request-url' },
            Xe.default.createElement('h4', null, 'Request URL'),
            Xe.default.createElement('pre', { className: 'microlight' }, d),
          ),
        ),
      Xe.default.createElement('h4', null, 'Server response'),
      Xe.default.createElement(
        'table',
        { className: 'responses-table live-responses-table' },
        Xe.default.createElement(
          'thead',
          null,
          Xe.default.createElement(
            'tr',
            { className: 'responses-header' },
            Xe.default.createElement(
              'td',
              { className: 'col_header response-col_status' },
              'Code',
            ),
            Xe.default.createElement(
              'td',
              { className: 'col_header response-col_description' },
              'Details',
            ),
          ),
        ),
        Xe.default.createElement(
          'tbody',
          null,
          Xe.default.createElement(
            'tr',
            { className: 'response' },
            Xe.default.createElement(
              'td',
              { className: 'response-col_status' },
              u,
              m
                ? Xe.default.createElement(
                    'div',
                    { className: 'response-undocumented' },
                    Xe.default.createElement('i', null, ' Undocumented '),
                  )
                : null,
            ),
            Xe.default.createElement(
              'td',
              { className: 'response-col_description' },
              f
                ? Xe.default.createElement(w, {
                    source: `${
                      '' !== e.get('name') ? `${e.get('name')}: ` : ''
                    }${e.get('message')}`,
                  })
                : null,
              h
                ? Xe.default.createElement(_, {
                    content: h,
                    contentType: S,
                    url: d,
                    headers: p,
                    getConfigs: r,
                    getComponent: t,
                  })
                : null,
              b ? Xe.default.createElement(Headers, { headers: v }) : null,
              n && g
                ? Xe.default.createElement(Duration, { duration: g })
                : null,
            ),
          ),
        ),
      ),
    )
  }
}
class OnlineValidatorBadge extends Xe.default.Component {
  constructor(e, t) {
    super(e, t)
    let { getConfigs: r } = e,
      { validatorUrl: n } = r()
    this.state = {
      url: this.getDefinitionUrl(),
      validatorUrl: void 0 === n ? 'https://validator.swagger.io/validator' : n,
    }
  }
  getDefinitionUrl = () => {
    let { specSelectors: e } = this.props
    return new At.default(e.url(), dt.location).toString()
  }
  UNSAFE_componentWillReceiveProps(e) {
    let { getConfigs: t } = e,
      { validatorUrl: r } = t()
    this.setState({
      url: this.getDefinitionUrl(),
      validatorUrl: void 0 === r ? 'https://validator.swagger.io/validator' : r,
    })
  }
  render() {
    let { getConfigs: e } = this.props,
      { spec: t } = e(),
      r = sanitizeUrl(this.state.validatorUrl)
    return 'object' == typeof t && Object.keys(t).length
      ? null
      : this.state.url &&
        requiresValidationURL(this.state.validatorUrl) &&
        requiresValidationURL(this.state.url)
      ? Xe.default.createElement(
          'span',
          { className: 'float-right' },
          Xe.default.createElement(
            'a',
            {
              target: '_blank',
              rel: 'noopener noreferrer',
              href: `${r}/debug?url=${encodeURIComponent(this.state.url)}`,
            },
            Xe.default.createElement(ValidatorImage, {
              src: `${r}?url=${encodeURIComponent(this.state.url)}`,
              alt: 'Online validator badge',
            }),
          ),
        )
      : null
  }
}
class ValidatorImage extends Xe.default.Component {
  constructor(e) {
    super(e), (this.state = { loaded: !1, error: !1 })
  }
  componentDidMount() {
    const e = new Image()
    ;(e.onload = () => {
      this.setState({ loaded: !0 })
    }),
      (e.onerror = () => {
        this.setState({ error: !0 })
      }),
      (e.src = this.props.src)
  }
  UNSAFE_componentWillReceiveProps(e) {
    if (e.src !== this.props.src) {
      const t = new Image()
      ;(t.onload = () => {
        this.setState({ loaded: !0 })
      }),
        (t.onerror = () => {
          this.setState({ error: !0 })
        }),
        (t.src = e.src)
    }
  }
  render() {
    return this.state.error
      ? Xe.default.createElement('img', { alt: 'Error' })
      : this.state.loaded
      ? Xe.default.createElement('img', {
          src: this.props.src,
          alt: this.props.alt,
        })
      : null
  }
}
class Operations extends Xe.default.Component {
  render() {
    let { specSelectors: e } = this.props
    const t = e.taggedOperations()
    return 0 === t.size
      ? Xe.default.createElement('h3', null, ' No operations defined in spec!')
      : Xe.default.createElement(
          'div',
          null,
          t.map(this.renderOperationTag).toArray(),
          t.size < 1
            ? Xe.default.createElement(
                'h3',
                null,
                ' No operations defined in spec! ',
              )
            : null,
        )
  }
  renderOperationTag = (e, t) => {
    const {
        specSelectors: r,
        getComponent: n,
        oas3Selectors: a,
        layoutSelectors: o,
        layoutActions: s,
        getConfigs: l,
      } = this.props,
      i = r.validOperationMethods(),
      c = n('OperationContainer', !0),
      u = n('OperationTag'),
      d = e.get('operations')
    return Xe.default.createElement(
      u,
      {
        key: 'operation-' + t,
        tagObj: e,
        tag: t,
        oas3Selectors: a,
        layoutSelectors: o,
        layoutActions: s,
        getConfigs: l,
        getComponent: n,
        specUrl: r.url(),
      },
      Xe.default.createElement(
        'div',
        { className: 'operation-tag-content' },
        d
          .map(e => {
            const r = e.get('path'),
              n = e.get('method'),
              a = Qe.default.List(['paths', r, n])
            return -1 === i.indexOf(n)
              ? null
              : Xe.default.createElement(c, {
                  key: `${r}-${n}`,
                  specPath: a,
                  op: e,
                  path: r,
                  method: n,
                  tag: t,
                })
          })
          .toArray(),
      ),
    )
  }
}
function isAbsoluteUrl(e) {
  return e.match(/^(?:[a-z]+:)?\/\//i)
}
function buildBaseUrl(e, t) {
  return e
    ? isAbsoluteUrl(e)
      ? (function addProtocol(e) {
          return e.match(/^\/\//i) ? `${window.location.protocol}${e}` : e
        })(e)
      : new URL(e, t).href
    : t
}
function safeBuildUrl(e, t, { selectedServer: r = '' } = {}) {
  try {
    return (function buildUrl(e, t, { selectedServer: r = '' } = {}) {
      if (!e) return
      if (isAbsoluteUrl(e)) return e
      const n = buildBaseUrl(r, t)
      return isAbsoluteUrl(n)
        ? new URL(e, n).href
        : new URL(e, window.location.href).href
    })(e, t, { selectedServer: r })
  } catch {
    return
  }
}
class OperationTag extends Xe.default.Component {
  static defaultProps = { tagObj: Qe.default.fromJS({}), tag: '' }
  render() {
    const {
      tagObj: e,
      tag: t,
      children: r,
      oas3Selectors: n,
      layoutSelectors: a,
      layoutActions: o,
      getConfigs: s,
      getComponent: l,
      specUrl: i,
    } = this.props
    let { docExpansion: c, deepLinking: u } = s()
    const d = l('Collapse'),
      p = l('Markdown', !0),
      m = l('DeepLink'),
      f = l('Link'),
      h = l('ArrowUpIcon'),
      g = l('ArrowDownIcon')
    let y,
      S = e.getIn(['tagDetails', 'description'], null),
      _ = e.getIn(['tagDetails', 'externalDocs', 'description']),
      v = e.getIn(['tagDetails', 'externalDocs', 'url'])
    y =
      isFunc(n) && isFunc(n.selectedServer)
        ? safeBuildUrl(v, i, { selectedServer: n.selectedServer() })
        : v
    let b = ['operations-tag', t],
      w = a.isShown(b, 'full' === c || 'list' === c)
    return Xe.default.createElement(
      'div',
      { className: w ? 'opblock-tag-section is-open' : 'opblock-tag-section' },
      Xe.default.createElement(
        'h3',
        {
          onClick: () => o.show(b, !w),
          className: S ? 'opblock-tag' : 'opblock-tag no-desc',
          id: b.map(e => escapeDeepLinkPath(e)).join('-'),
          'data-tag': t,
          'data-is-open': w,
        },
        Xe.default.createElement(m, {
          enabled: u,
          isShown: w,
          path: createDeepLinkPath(t),
          text: t,
        }),
        S
          ? Xe.default.createElement(
              'small',
              null,
              Xe.default.createElement(p, { source: S }),
            )
          : Xe.default.createElement('small', null),
        y
          ? Xe.default.createElement(
              'div',
              { className: 'info__externaldocs' },
              Xe.default.createElement(
                'small',
                null,
                Xe.default.createElement(
                  f,
                  {
                    href: sanitizeUrl(y),
                    onClick: e => e.stopPropagation(),
                    target: '_blank',
                  },
                  _ || y,
                ),
              ),
            )
          : null,
        Xe.default.createElement(
          'button',
          {
            'aria-expanded': w,
            className: 'expand-operation',
            title: w ? 'Collapse operation' : 'Expand operation',
            onClick: () => o.show(b, !w),
          },
          w
            ? Xe.default.createElement(h, { className: 'arrow' })
            : Xe.default.createElement(g, { className: 'arrow' }),
        ),
      ),
      Xe.default.createElement(d, { isOpened: w }, r),
    )
  }
}
class Operation extends Xe.PureComponent {
  static defaultProps = {
    operation: null,
    response: null,
    request: null,
    specPath: (0, Qe.List)(),
    summary: '',
  }
  render() {
    let {
        specPath: e,
        response: t,
        request: r,
        toggleShown: n,
        onTryoutClick: a,
        onResetClick: o,
        onCancelClick: s,
        onExecute: l,
        fn: i,
        getComponent: c,
        getConfigs: u,
        specActions: d,
        specSelectors: p,
        authActions: m,
        authSelectors: f,
        oas3Actions: h,
        oas3Selectors: g,
      } = this.props,
      y = this.props.operation,
      {
        deprecated: S,
        isShown: _,
        path: v,
        method: b,
        op: w,
        tag: C,
        operationId: x,
        allowTryItOut: O,
        displayRequestDuration: k,
        tryItOutEnabled: N,
        executeInProgress: A,
      } = y.toJS(),
      { description: I, externalDocs: R, schemes: T } = w
    const B = R
      ? safeBuildUrl(R.url, p.url(), { selectedServer: g.selectedServer() })
      : ''
    let j = y.getIn(['op']),
      P = j.get('responses'),
      M = (function getList(e, t) {
        if (!Qe.default.Iterable.isIterable(e)) return Qe.default.List()
        let r = e.getIn(Array.isArray(t) ? t : [t])
        return Qe.default.List.isList(r) ? r : Qe.default.List()
      })(j, ['parameters']),
      q = p.operationScheme(v, b),
      L = ['operations', C, x],
      D = getExtensions(j)
    const U = c('responses'),
      $ = c('parameters'),
      J = c('execute'),
      V = c('clear'),
      K = c('Collapse'),
      z = c('Markdown', !0),
      F = c('schemes'),
      W = c('OperationServers'),
      H = c('OperationExt'),
      G = c('OperationSummary'),
      X = c('Link'),
      { showExtensions: Y } = u()
    if (P && t && t.size > 0) {
      let e = !P.get(String(t.get('status'))) && !P.get('default')
      t = t.set('notDocumented', e)
    }
    let Q = [v, b]
    const Z = p.validationErrors([v, b])
    return Xe.default.createElement(
      'div',
      {
        className: S
          ? 'opblock opblock-deprecated'
          : _
          ? `opblock opblock-${b} is-open`
          : `opblock opblock-${b}`,
        id: escapeDeepLinkPath(L.join('-')),
      },
      Xe.default.createElement(G, {
        operationProps: y,
        isShown: _,
        toggleShown: n,
        getComponent: c,
        authActions: m,
        authSelectors: f,
        specPath: e,
      }),
      Xe.default.createElement(
        K,
        { isOpened: _ },
        Xe.default.createElement(
          'div',
          { className: 'opblock-body' },
          (j && j.size) || null === j
            ? null
            : Xe.default.createElement(rolling_load, {
                height: '32px',
                width: '32px',
                className: 'opblock-loading-animation',
              }),
          S &&
            Xe.default.createElement(
              'h4',
              { className: 'opblock-title_normal' },
              ' Warning: Deprecated',
            ),
          I &&
            Xe.default.createElement(
              'div',
              { className: 'opblock-description-wrapper' },
              Xe.default.createElement(
                'div',
                { className: 'opblock-description' },
                Xe.default.createElement(z, { source: I }),
              ),
            ),
          B
            ? Xe.default.createElement(
                'div',
                { className: 'opblock-external-docs-wrapper' },
                Xe.default.createElement(
                  'h4',
                  { className: 'opblock-title_normal' },
                  'Find more details',
                ),
                Xe.default.createElement(
                  'div',
                  { className: 'opblock-external-docs' },
                  R.description &&
                    Xe.default.createElement(
                      'span',
                      { className: 'opblock-external-docs__description' },
                      Xe.default.createElement(z, { source: R.description }),
                    ),
                  Xe.default.createElement(
                    X,
                    {
                      target: '_blank',
                      className: 'opblock-external-docs__link',
                      href: sanitizeUrl(B),
                    },
                    B,
                  ),
                ),
              )
            : null,
          j && j.size
            ? Xe.default.createElement($, {
                parameters: M,
                specPath: e.push('parameters'),
                operation: j,
                onChangeKey: Q,
                onTryoutClick: a,
                onResetClick: o,
                onCancelClick: s,
                tryItOutEnabled: N,
                allowTryItOut: O,
                fn: i,
                getComponent: c,
                specActions: d,
                specSelectors: p,
                pathMethod: [v, b],
                getConfigs: u,
                oas3Actions: h,
                oas3Selectors: g,
              })
            : null,
          N
            ? Xe.default.createElement(W, {
                getComponent: c,
                path: v,
                method: b,
                operationServers: j.get('servers'),
                pathServers: p.paths().getIn([v, 'servers']),
                getSelectedServer: g.selectedServer,
                setSelectedServer: h.setSelectedServer,
                setServerVariableValue: h.setServerVariableValue,
                getServerVariable: g.serverVariableValue,
                getEffectiveServerValue: g.serverEffectiveValue,
              })
            : null,
          N && O && T && T.size
            ? Xe.default.createElement(
                'div',
                { className: 'opblock-schemes' },
                Xe.default.createElement(F, {
                  schemes: T,
                  path: v,
                  method: b,
                  specActions: d,
                  currentScheme: q,
                }),
              )
            : null,
          !N || !O || Z.length <= 0
            ? null
            : Xe.default.createElement(
                'div',
                { className: 'validation-errors errors-wrapper' },
                'Please correct the following validation errors and try again.',
                Xe.default.createElement(
                  'ul',
                  null,
                  Z.map((e, t) =>
                    Xe.default.createElement('li', { key: t }, ' ', e, ' '),
                  ),
                ),
              ),
          Xe.default.createElement(
            'div',
            { className: N && t && O ? 'btn-group' : 'execute-wrapper' },
            N && O
              ? Xe.default.createElement(J, {
                  operation: j,
                  specActions: d,
                  specSelectors: p,
                  oas3Selectors: g,
                  oas3Actions: h,
                  path: v,
                  method: b,
                  onExecute: l,
                  disabled: A,
                })
              : null,
            N && t && O
              ? Xe.default.createElement(V, {
                  specActions: d,
                  path: v,
                  method: b,
                })
              : null,
          ),
          A
            ? Xe.default.createElement(
                'div',
                { className: 'loading-container' },
                Xe.default.createElement('div', { className: 'loading' }),
              )
            : null,
          P
            ? Xe.default.createElement(U, {
                responses: P,
                request: r,
                tryItOutResponse: t,
                getComponent: c,
                getConfigs: u,
                specSelectors: p,
                oas3Actions: h,
                oas3Selectors: g,
                specActions: d,
                produces: p.producesOptionsFor([v, b]),
                producesValue: p.currentProducesFor([v, b]),
                specPath: e.push('responses'),
                path: v,
                method: b,
                displayRequestDuration: k,
                fn: i,
              })
            : null,
          Y && D.size
            ? Xe.default.createElement(H, { extensions: D, getComponent: c })
            : null,
        ),
      ),
    )
  }
}
class OperationContainer extends Xe.PureComponent {
  constructor(e, t) {
    super(e, t)
    const { tryItOutEnabled: r } = e.getConfigs()
    this.state = { tryItOutEnabled: r, executeInProgress: !1 }
  }
  static defaultProps = {
    showSummary: !0,
    response: null,
    allowTryItOut: !0,
    displayOperationId: !1,
    displayRequestDuration: !1,
  }
  mapStateToProps(e, t) {
    const { op: r, layoutSelectors: n, getConfigs: a } = t,
      {
        docExpansion: o,
        deepLinking: s,
        displayOperationId: l,
        displayRequestDuration: i,
        supportedSubmitMethods: c,
      } = a(),
      u = n.showSummary(),
      d =
        r.getIn(['operation', '__originalOperationId']) ||
        r.getIn(['operation', 'operationId']) ||
        (0, ta.opId)(r.get('operation'), t.path, t.method) ||
        r.get('id'),
      p = ['operations', t.tag, d],
      m =
        c.indexOf(t.method) >= 0 &&
        (void 0 === t.allowTryItOut
          ? t.specSelectors.allowTryItOutFor(t.path, t.method)
          : t.allowTryItOut),
      f = r.getIn(['operation', 'security']) || t.specSelectors.security()
    return {
      operationId: d,
      isDeepLinkingEnabled: s,
      showSummary: u,
      displayOperationId: l,
      displayRequestDuration: i,
      allowTryItOut: m,
      security: f,
      isAuthorized: t.authSelectors.isAuthorized(f),
      isShown: n.isShown(p, 'full' === o),
      jumpToKey: `paths.${t.path}.${t.method}`,
      response: t.specSelectors.responseFor(t.path, t.method),
      request: t.specSelectors.requestFor(t.path, t.method),
    }
  }
  componentDidMount() {
    const { isShown: e } = this.props,
      t = this.getResolvedSubtree()
    e && void 0 === t && this.requestResolvedSubtree()
  }
  UNSAFE_componentWillReceiveProps(e) {
    const { response: t, isShown: r } = e,
      n = this.getResolvedSubtree()
    t !== this.props.response && this.setState({ executeInProgress: !1 }),
      r && void 0 === n && this.requestResolvedSubtree()
  }
  toggleShown = () => {
    let { layoutActions: e, tag: t, operationId: r, isShown: n } = this.props
    const a = this.getResolvedSubtree()
    n || void 0 !== a || this.requestResolvedSubtree(),
      e.show(['operations', t, r], !n)
  }
  onCancelClick = () => {
    this.setState({ tryItOutEnabled: !this.state.tryItOutEnabled })
  }
  onTryoutClick = () => {
    this.setState({ tryItOutEnabled: !this.state.tryItOutEnabled })
  }
  onResetClick = e => {
    const t = this.props.oas3Selectors.selectDefaultRequestBodyValue(...e)
    this.props.oas3Actions.setRequestBodyValue({ value: t, pathMethod: e })
  }
  onExecute = () => {
    this.setState({ executeInProgress: !0 })
  }
  getResolvedSubtree = () => {
    const { specSelectors: e, path: t, method: r, specPath: n } = this.props
    return n
      ? e.specResolvedSubtree(n.toJS())
      : e.specResolvedSubtree(['paths', t, r])
  }
  requestResolvedSubtree = () => {
    const { specActions: e, path: t, method: r, specPath: n } = this.props
    return n
      ? e.requestResolvedSubtree(n.toJS())
      : e.requestResolvedSubtree(['paths', t, r])
  }
  render() {
    let {
      op: e,
      tag: t,
      path: r,
      method: n,
      security: a,
      isAuthorized: o,
      operationId: s,
      showSummary: l,
      isShown: i,
      jumpToKey: c,
      allowTryItOut: u,
      response: d,
      request: p,
      displayOperationId: m,
      displayRequestDuration: f,
      isDeepLinkingEnabled: h,
      specPath: g,
      specSelectors: y,
      specActions: S,
      getComponent: _,
      getConfigs: v,
      layoutSelectors: b,
      layoutActions: w,
      authActions: C,
      authSelectors: x,
      oas3Actions: O,
      oas3Selectors: k,
      fn: N,
    } = this.props
    const A = _('operation'),
      I = this.getResolvedSubtree() || (0, Qe.Map)(),
      R = (0, Qe.fromJS)({
        op: I,
        tag: t,
        path: r,
        summary: e.getIn(['operation', 'summary']) || '',
        deprecated:
          I.get('deprecated') || e.getIn(['operation', 'deprecated']) || !1,
        method: n,
        security: a,
        isAuthorized: o,
        operationId: s,
        originalOperationId: I.getIn(['operation', '__originalOperationId']),
        showSummary: l,
        isShown: i,
        jumpToKey: c,
        allowTryItOut: u,
        request: p,
        displayOperationId: m,
        displayRequestDuration: f,
        isDeepLinkingEnabled: h,
        executeInProgress: this.state.executeInProgress,
        tryItOutEnabled: this.state.tryItOutEnabled,
      })
    return Xe.default.createElement(A, {
      operation: R,
      response: d,
      request: p,
      isShown: i,
      toggleShown: this.toggleShown,
      onTryoutClick: this.onTryoutClick,
      onResetClick: this.onResetClick,
      onCancelClick: this.onCancelClick,
      onExecute: this.onExecute,
      specPath: g,
      specActions: S,
      specSelectors: y,
      oas3Actions: O,
      oas3Selectors: k,
      layoutActions: w,
      layoutSelectors: b,
      authActions: C,
      authSelectors: x,
      getComponent: _,
      getConfigs: v,
      fn: N,
    })
  }
}
var ka = (function (e) {
  var t = {}
  return __webpack_require__.d(t, e), t
})({
  default: function () {
    return fe.default
  },
})
class OperationSummary extends Xe.PureComponent {
  static defaultProps = {
    operationProps: null,
    specPath: (0, Qe.List)(),
    summary: '',
  }
  render() {
    let {
        isShown: e,
        toggleShown: t,
        getComponent: r,
        authActions: n,
        authSelectors: a,
        operationProps: o,
        specPath: s,
      } = this.props,
      {
        summary: l,
        isAuthorized: i,
        method: c,
        op: u,
        showSummary: d,
        path: p,
        operationId: m,
        originalOperationId: f,
        displayOperationId: h,
      } = o.toJS(),
      { summary: g } = u,
      y = o.get('security')
    const S = r('authorizeOperationBtn', !0),
      _ = r('OperationSummaryMethod'),
      v = r('OperationSummaryPath'),
      b = r('JumpToPath', !0),
      w = r('CopyToClipboardBtn', !0),
      C = r('ArrowUpIcon'),
      x = r('ArrowDownIcon'),
      O = y && !!y.count(),
      k = O && 1 === y.size && y.first().isEmpty(),
      N = !O || k
    return Xe.default.createElement(
      'div',
      { className: `opblock-summary opblock-summary-${c}` },
      Xe.default.createElement(
        'button',
        {
          'aria-expanded': e,
          className: 'opblock-summary-control',
          onClick: t,
        },
        Xe.default.createElement(_, { method: c }),
        Xe.default.createElement(
          'div',
          { className: 'opblock-summary-path-description-wrapper' },
          Xe.default.createElement(v, {
            getComponent: r,
            operationProps: o,
            specPath: s,
          }),
          d
            ? Xe.default.createElement(
                'div',
                { className: 'opblock-summary-description' },
                (0, ka.default)(g || l),
              )
            : null,
        ),
        h && (f || m)
          ? Xe.default.createElement(
              'span',
              { className: 'opblock-summary-operation-id' },
              f || m,
            )
          : null,
      ),
      Xe.default.createElement(w, { textToCopy: `${s.get(1)}` }),
      N
        ? null
        : Xe.default.createElement(S, {
            isAuthorized: i,
            onClick: () => {
              const e = a.definitionsForRequirements(y)
              n.showDefinitions(e)
            },
          }),
      Xe.default.createElement(b, { path: s }),
      Xe.default.createElement(
        'button',
        {
          'aria-label': `${c} ${p.replace(/\//g, '​/')}`,
          className: 'opblock-control-arrow',
          'aria-expanded': e,
          tabIndex: '-1',
          onClick: t,
        },
        e
          ? Xe.default.createElement(C, { className: 'arrow' })
          : Xe.default.createElement(x, { className: 'arrow' }),
      ),
    )
  }
}
class OperationSummaryMethod extends Xe.PureComponent {
  static defaultProps = { operationProps: null }
  render() {
    let { method: e } = this.props
    return Xe.default.createElement(
      'span',
      { className: 'opblock-summary-method' },
      e.toUpperCase(),
    )
  }
}
class OperationSummaryPath extends Xe.PureComponent {
  render() {
    let { getComponent: e, operationProps: t } = this.props,
      {
        deprecated: r,
        isShown: n,
        path: a,
        tag: o,
        operationId: s,
        isDeepLinkingEnabled: l,
      } = t.toJS()
    const i = a.split(/(?=\/)/g)
    for (let e = 1; e < i.length; e += 2)
      i.splice(e, 0, Xe.default.createElement('wbr', { key: e }))
    const c = e('DeepLink')
    return Xe.default.createElement(
      'span',
      {
        className: r
          ? 'opblock-summary-path__deprecated'
          : 'opblock-summary-path',
        'data-path': a,
      },
      Xe.default.createElement(c, {
        enabled: l,
        isShown: n,
        path: createDeepLinkPath(`${o}/${s}`),
        text: i,
      }),
    )
  }
}
var operation_extensions = ({ extensions: e, getComponent: t }) => {
  let r = t('OperationExtRow')
  return Xe.default.createElement(
    'div',
    { className: 'opblock-section' },
    Xe.default.createElement(
      'div',
      { className: 'opblock-section-header' },
      Xe.default.createElement('h4', null, 'Extensions'),
    ),
    Xe.default.createElement(
      'div',
      { className: 'table-container' },
      Xe.default.createElement(
        'table',
        null,
        Xe.default.createElement(
          'thead',
          null,
          Xe.default.createElement(
            'tr',
            null,
            Xe.default.createElement(
              'td',
              { className: 'col_header' },
              'Field',
            ),
            Xe.default.createElement(
              'td',
              { className: 'col_header' },
              'Value',
            ),
          ),
        ),
        Xe.default.createElement(
          'tbody',
          null,
          e
            .entrySeq()
            .map(([e, t]) =>
              Xe.default.createElement(r, {
                key: `${e}-${t}`,
                xKey: e,
                xVal: t,
              }),
            ),
        ),
      ),
    ),
  )
}
var operation_extension_row = ({ xKey: e, xVal: t }) => {
  const r = t ? (t.toJS ? t.toJS() : t) : null
  return Xe.default.createElement(
    'tr',
    null,
    Xe.default.createElement('td', null, e),
    Xe.default.createElement('td', null, JSON.stringify(r)),
  )
}
function createHtmlReadyId(e, t = '_') {
  return e.replace(/[^\w-]/g, t)
}
class Responses extends Xe.default.Component {
  static defaultProps = {
    tryItOutResponse: null,
    produces: (0, Qe.fromJS)(['application/json']),
    displayRequestDuration: !1,
  }
  onChangeProducesWrapper = e =>
    this.props.specActions.changeProducesValue(
      [this.props.path, this.props.method],
      e,
    )
  onResponseContentTypeChange = ({ controlsAcceptHeader: e, value: t }) => {
    const { oas3Actions: r, path: n, method: a } = this.props
    e && r.setResponseContentType({ value: t, path: n, method: a })
  }
  render() {
    let {
        responses: e,
        tryItOutResponse: t,
        getComponent: r,
        getConfigs: n,
        specSelectors: a,
        fn: o,
        producesValue: s,
        displayRequestDuration: l,
        specPath: i,
        path: c,
        method: u,
        oas3Selectors: d,
        oas3Actions: p,
      } = this.props,
      m = (function defaultStatusCode(e) {
        let t = e.keySeq()
        return t.contains(Ot)
          ? Ot
          : t
              .filter(e => '2' === (e + '')[0])
              .sort()
              .first()
      })(e)
    const f = r('contentType'),
      h = r('liveResponse'),
      g = r('response')
    let y =
      this.props.produces && this.props.produces.size
        ? this.props.produces
        : Responses.defaultProps.produces
    const S = a.isOAS3()
        ? (function getAcceptControllingResponse(e) {
            if (!Qe.default.OrderedMap.isOrderedMap(e)) return null
            if (!e.size) return null
            const t = e.find(
                (e, t) =>
                  t.startsWith('2') &&
                  Object.keys(e.get('content') || {}).length > 0,
              ),
              r = e.get('default') || Qe.default.OrderedMap(),
              n = (r.get('content') || Qe.default.OrderedMap()).keySeq().toJS()
                .length
                ? r
                : null
            return t || n
          })(e)
        : null,
      _ = createHtmlReadyId(`${u}${c}_responses`),
      v = `${_}_select`
    return Xe.default.createElement(
      'div',
      { className: 'responses-wrapper' },
      Xe.default.createElement(
        'div',
        { className: 'opblock-section-header' },
        Xe.default.createElement('h4', null, 'Responses'),
        a.isOAS3()
          ? null
          : Xe.default.createElement(
              'label',
              { htmlFor: v },
              Xe.default.createElement('span', null, 'Response content type'),
              Xe.default.createElement(f, {
                value: s,
                ariaControls: _,
                ariaLabel: 'Response content type',
                className: 'execute-content-type',
                contentTypes: y,
                controlId: v,
                onChange: this.onChangeProducesWrapper,
              }),
            ),
      ),
      Xe.default.createElement(
        'div',
        { className: 'responses-inner' },
        t
          ? Xe.default.createElement(
              'div',
              null,
              Xe.default.createElement(h, {
                response: t,
                getComponent: r,
                getConfigs: n,
                specSelectors: a,
                path: this.props.path,
                method: this.props.method,
                displayRequestDuration: l,
              }),
              Xe.default.createElement('h4', null, 'Responses'),
            )
          : null,
        Xe.default.createElement(
          'table',
          {
            'aria-live': 'polite',
            className: 'responses-table',
            id: _,
            role: 'region',
          },
          Xe.default.createElement(
            'thead',
            null,
            Xe.default.createElement(
              'tr',
              { className: 'responses-header' },
              Xe.default.createElement(
                'td',
                { className: 'col_header response-col_status' },
                'Code',
              ),
              Xe.default.createElement(
                'td',
                { className: 'col_header response-col_description' },
                'Description',
              ),
              a.isOAS3()
                ? Xe.default.createElement(
                    'td',
                    { className: 'col col_header response-col_links' },
                    'Links',
                  )
                : null,
            ),
          ),
          Xe.default.createElement(
            'tbody',
            null,
            e
              .entrySeq()
              .map(([e, l]) => {
                let f = t && t.get('status') == e ? 'response_current' : ''
                return Xe.default.createElement(g, {
                  key: e,
                  path: c,
                  method: u,
                  specPath: i.push(e),
                  isDefault: m === e,
                  fn: o,
                  className: f,
                  code: e,
                  response: l,
                  specSelectors: a,
                  controlsAcceptHeader: l === S,
                  onContentTypeChange: this.onResponseContentTypeChange,
                  contentType: s,
                  getConfigs: n,
                  activeExamplesKey: d.activeExamplesMember(
                    c,
                    u,
                    'responses',
                    e,
                  ),
                  oas3Actions: p,
                  getComponent: r,
                })
              })
              .toArray(),
          ),
        ),
      ),
    )
  }
}
function getKnownSyntaxHighlighterLanguage(e) {
  return (function canJsonParse(e) {
    try {
      return !!JSON.parse(e)
    } catch (e) {
      return null
    }
  })(e)
    ? 'json'
    : null
}
class Response extends Xe.default.Component {
  constructor(e, t) {
    super(e, t), (this.state = { responseContentType: '' })
  }
  static defaultProps = {
    response: (0, Qe.fromJS)({}),
    onContentTypeChange: () => {},
  }
  _onContentTypeChange = e => {
    const { onContentTypeChange: t, controlsAcceptHeader: r } = this.props
    this.setState({ responseContentType: e }),
      t({ value: e, controlsAcceptHeader: r })
  }
  getTargetExamplesKey = () => {
    const { response: e, contentType: t, activeExamplesKey: r } = this.props,
      n = this.state.responseContentType || t,
      a = e
        .getIn(['content', n], (0, Qe.Map)({}))
        .get('examples', null)
        .keySeq()
        .first()
    return r || a
  }
  render() {
    let {
        path: e,
        method: t,
        code: r,
        response: n,
        className: a,
        specPath: o,
        fn: s,
        getComponent: l,
        getConfigs: i,
        specSelectors: c,
        contentType: u,
        controlsAcceptHeader: d,
        oas3Actions: p,
      } = this.props,
      { inferSchema: m, getSampleSchema: f } = s,
      h = c.isOAS3()
    const { showExtensions: g } = i()
    let y = g ? getExtensions(n) : null,
      S = n.get('headers'),
      _ = n.get('links')
    const v = l('ResponseExtension'),
      b = l('headers'),
      w = l('HighlightCode', !0),
      C = l('modelExample'),
      x = l('Markdown', !0),
      O = l('operationLink'),
      k = l('contentType'),
      N = l('ExamplesSelect'),
      A = l('Example')
    var I, R
    const T = this.state.responseContentType || u,
      B = n.getIn(['content', T], (0, Qe.Map)({})),
      j = B.get('examples', null)
    if (h) {
      const e = B.get('schema')
      ;(I = e ? m(e.toJS()) : null),
        (R = e
          ? (0, Qe.List)(['content', this.state.responseContentType, 'schema'])
          : o)
    } else (I = n.get('schema')), (R = n.has('schema') ? o.push('schema') : o)
    let P,
      M,
      q = !1,
      L = { includeReadOnly: !0 }
    if (h)
      if (((M = B.get('schema')?.toJS()), Qe.Map.isMap(j) && !j.isEmpty())) {
        const e = this.getTargetExamplesKey(),
          getMediaTypeExample = e => e.get('value')
        ;(P = getMediaTypeExample(j.get(e, (0, Qe.Map)({})))),
          void 0 === P && (P = getMediaTypeExample(j.values().next().value)),
          (q = !0)
      } else void 0 !== B.get('example') && ((P = B.get('example')), (q = !0))
    else {
      ;(M = I), (L = { ...L, includeWriteOnly: !0 })
      const e = n.getIn(['examples', T])
      e && ((P = e), (q = !0))
    }
    const D = ((e, t) => {
      if (null == e) return null
      const r = getKnownSyntaxHighlighterLanguage(e) ? 'json' : null
      return Xe.default.createElement(
        'div',
        null,
        Xe.default.createElement(
          t,
          { className: 'example', language: r },
          stringify(e),
        ),
      )
    })(f(M, T, L, q ? P : void 0), w)
    return Xe.default.createElement(
      'tr',
      { className: 'response ' + (a || ''), 'data-code': r },
      Xe.default.createElement('td', { className: 'response-col_status' }, r),
      Xe.default.createElement(
        'td',
        { className: 'response-col_description' },
        Xe.default.createElement(
          'div',
          { className: 'response-col_description__inner' },
          Xe.default.createElement(x, { source: n.get('description') }),
        ),
        g && y.size
          ? y
              .entrySeq()
              .map(([e, t]) =>
                Xe.default.createElement(v, {
                  key: `${e}-${t}`,
                  xKey: e,
                  xVal: t,
                }),
              )
          : null,
        h && n.get('content')
          ? Xe.default.createElement(
              'section',
              { className: 'response-controls' },
              Xe.default.createElement(
                'div',
                {
                  className: (0, _r.default)('response-control-media-type', {
                    'response-control-media-type--accept-controller': d,
                  }),
                },
                Xe.default.createElement(
                  'small',
                  { className: 'response-control-media-type__title' },
                  'Media type',
                ),
                Xe.default.createElement(k, {
                  value: this.state.responseContentType,
                  contentTypes: n.get('content')
                    ? n.get('content').keySeq()
                    : (0, Qe.Seq)(),
                  onChange: this._onContentTypeChange,
                  ariaLabel: 'Media Type',
                }),
                d
                  ? Xe.default.createElement(
                      'small',
                      {
                        className:
                          'response-control-media-type__accept-message',
                      },
                      'Controls ',
                      Xe.default.createElement('code', null, 'Accept'),
                      ' header.',
                    )
                  : null,
              ),
              Qe.Map.isMap(j) && !j.isEmpty()
                ? Xe.default.createElement(
                    'div',
                    { className: 'response-control-examples' },
                    Xe.default.createElement(
                      'small',
                      { className: 'response-control-examples__title' },
                      'Examples',
                    ),
                    Xe.default.createElement(N, {
                      examples: j,
                      currentExampleKey: this.getTargetExamplesKey(),
                      onSelect: n =>
                        p.setActiveExamplesMember({
                          name: n,
                          pathMethod: [e, t],
                          contextType: 'responses',
                          contextName: r,
                        }),
                      showLabels: !1,
                    }),
                  )
                : null,
            )
          : null,
        D || I
          ? Xe.default.createElement(C, {
              specPath: R,
              getComponent: l,
              getConfigs: i,
              specSelectors: c,
              schema: fromJSOrdered(I),
              example: D,
              includeReadOnly: !0,
            })
          : null,
        h && j
          ? Xe.default.createElement(A, {
              example: j.get(this.getTargetExamplesKey(), (0, Qe.Map)({})),
              getComponent: l,
              getConfigs: i,
              omitValue: !0,
            })
          : null,
        S ? Xe.default.createElement(b, { headers: S, getComponent: l }) : null,
      ),
      h
        ? Xe.default.createElement(
            'td',
            { className: 'response-col_links' },
            _
              ? _.toSeq()
                  .entrySeq()
                  .map(([e, t]) =>
                    Xe.default.createElement(O, {
                      key: e,
                      name: e,
                      link: t,
                      getComponent: l,
                    }),
                  )
              : Xe.default.createElement('i', null, 'No links'),
          )
        : null,
    )
  }
}
var response_extension = ({ xKey: e, xVal: t }) =>
    Xe.default.createElement(
      'div',
      { className: 'response__extension' },
      e,
      ': ',
      String(t),
    ),
  Na = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return he.default
    },
  }),
  Aa = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return ge.default
    },
  })
class ResponseBody extends Xe.default.PureComponent {
  state = { parsedContent: null }
  updateParsedContent = e => {
    const { content: t } = this.props
    if (e !== t)
      if (t && t instanceof Blob) {
        var r = new FileReader()
        ;(r.onload = () => {
          this.setState({ parsedContent: r.result })
        }),
          r.readAsText(t)
      } else this.setState({ parsedContent: t.toString() })
  }
  componentDidMount() {
    this.updateParsedContent(null)
  }
  componentDidUpdate(e) {
    this.updateParsedContent(e.content)
  }
  render() {
    let {
      content: e,
      contentType: t,
      url: r,
      headers: n = {},
      getComponent: a,
    } = this.props
    const { parsedContent: o } = this.state,
      s = a('HighlightCode', !0),
      l = 'response_' + new Date().getTime()
    let i, c
    if (
      ((r = r || ''),
      (/^application\/octet-stream/i.test(t) ||
        (n['Content-Disposition'] &&
          /attachment/i.test(n['Content-Disposition'])) ||
        (n['content-disposition'] &&
          /attachment/i.test(n['content-disposition'])) ||
        (n['Content-Description'] &&
          /File Transfer/i.test(n['Content-Description'])) ||
        (n['content-description'] &&
          /File Transfer/i.test(n['content-description']))) &&
        (e.size > 0 || e.length > 0))
    )
      if ('Blob' in window) {
        let a = t || 'text/html',
          o = e instanceof Blob ? e : new Blob([e], { type: a }),
          s = window.URL.createObjectURL(o),
          l = [a, r.substr(r.lastIndexOf('/') + 1), s].join(':'),
          i = n['content-disposition'] || n['Content-Disposition']
        if (void 0 !== i) {
          let e = (function extractFileNameFromContentDispositionHeader(e) {
            let t
            if (
              ([
                /filename\*=[^']+'\w*'"([^"]+)";?/i,
                /filename\*=[^']+'\w*'([^;]+);?/i,
                /filename="([^;]*);?"/i,
                /filename=([^;]*);?/i,
              ].some(r => ((t = r.exec(e)), null !== t)),
              null !== t && t.length > 1)
            )
              try {
                return decodeURIComponent(t[1])
              } catch (e) {
                console.error(e)
              }
            return null
          })(i)
          null !== e && (l = e)
        }
        c =
          dt.navigator && dt.navigator.msSaveOrOpenBlob
            ? Xe.default.createElement(
                'div',
                null,
                Xe.default.createElement(
                  'a',
                  {
                    href: s,
                    onClick: () => dt.navigator.msSaveOrOpenBlob(o, l),
                  },
                  'Download file',
                ),
              )
            : Xe.default.createElement(
                'div',
                null,
                Xe.default.createElement(
                  'a',
                  { href: s, download: l },
                  'Download file',
                ),
              )
      } else
        c = Xe.default.createElement(
          'pre',
          { className: 'microlight' },
          'Download headers detected but your browser does not support downloading binary via XHR (Blob).',
        )
    else if (/json/i.test(t)) {
      let t = null
      getKnownSyntaxHighlighterLanguage(e) && (t = 'json')
      try {
        i = JSON.stringify(JSON.parse(e), null, '  ')
      } catch (t) {
        i = "can't parse JSON.  Raw result:\n\n" + e
      }
      c = Xe.default.createElement(
        s,
        { language: t, downloadable: !0, fileName: `${l}.json`, canCopy: !0 },
        i,
      )
    } else
      /xml/i.test(t)
        ? ((i = (0, Na.default)(e, {
            textNodesOnSameLine: !0,
            indentor: '  ',
          })),
          (c = Xe.default.createElement(
            s,
            { downloadable: !0, fileName: `${l}.xml`, canCopy: !0 },
            i,
          )))
        : (c =
            'text/html' === (0, Aa.default)(t) || /text\/plain/.test(t)
              ? Xe.default.createElement(
                  s,
                  { downloadable: !0, fileName: `${l}.html`, canCopy: !0 },
                  e,
                )
              : 'text/csv' === (0, Aa.default)(t) || /text\/csv/.test(t)
              ? Xe.default.createElement(
                  s,
                  { downloadable: !0, fileName: `${l}.csv`, canCopy: !0 },
                  e,
                )
              : /^image\//i.test(t)
              ? t.includes('svg')
                ? Xe.default.createElement('div', null, ' ', e, ' ')
                : Xe.default.createElement('img', {
                    src: window.URL.createObjectURL(e),
                  })
              : /^audio\//i.test(t)
              ? Xe.default.createElement(
                  'pre',
                  { className: 'microlight' },
                  Xe.default.createElement(
                    'audio',
                    { controls: !0, key: r },
                    Xe.default.createElement('source', { src: r, type: t }),
                  ),
                )
              : 'string' == typeof e
              ? Xe.default.createElement(
                  s,
                  { downloadable: !0, fileName: `${l}.txt`, canCopy: !0 },
                  e,
                )
              : e.size > 0
              ? o
                ? Xe.default.createElement(
                    'div',
                    null,
                    Xe.default.createElement(
                      'p',
                      { className: 'i' },
                      'Unrecognized response type; displaying content as text.',
                    ),
                    Xe.default.createElement(
                      s,
                      { downloadable: !0, fileName: `${l}.txt`, canCopy: !0 },
                      o,
                    ),
                  )
                : Xe.default.createElement(
                    'p',
                    { className: 'i' },
                    'Unrecognized response type; unable to display.',
                  )
              : null)
    return c
      ? Xe.default.createElement(
          'div',
          null,
          Xe.default.createElement('h5', null, 'Response body'),
          c,
        )
      : null
  }
}
class Parameters extends Xe.Component {
  constructor(e) {
    super(e), (this.state = { callbackVisible: !1, parametersVisible: !0 })
  }
  static defaultProps = {
    onTryoutClick: Function.prototype,
    onCancelClick: Function.prototype,
    tryItOutEnabled: !1,
    allowTryItOut: !0,
    onChangeKey: [],
    specPath: [],
  }
  onChange = (e, t, r) => {
    let {
      specActions: { changeParamByIdentity: n },
      onChangeKey: a,
    } = this.props
    n(a, e, t, r)
  }
  onChangeConsumesWrapper = e => {
    let {
      specActions: { changeConsumesValue: t },
      onChangeKey: r,
    } = this.props
    t(r, e)
  }
  toggleTab = e =>
    'parameters' === e
      ? this.setState({ parametersVisible: !0, callbackVisible: !1 })
      : 'callbacks' === e
      ? this.setState({ callbackVisible: !0, parametersVisible: !1 })
      : void 0
  onChangeMediaType = ({ value: e, pathMethod: t }) => {
    let { specActions: r, oas3Selectors: n, oas3Actions: a } = this.props
    const o = n.hasUserEditedBody(...t),
      s = n.shouldRetainRequestBodyValue(...t)
    a.setRequestContentType({ value: e, pathMethod: t }),
      a.initRequestBodyValidateError({ pathMethod: t }),
      o ||
        (s || a.setRequestBodyValue({ value: void 0, pathMethod: t }),
        r.clearResponse(...t),
        r.clearRequest(...t),
        r.clearValidateParams(t))
  }
  render() {
    let {
      onTryoutClick: e,
      onResetClick: t,
      parameters: r,
      allowTryItOut: n,
      tryItOutEnabled: a,
      specPath: o,
      fn: s,
      getComponent: l,
      getConfigs: i,
      specSelectors: c,
      specActions: u,
      pathMethod: d,
      oas3Actions: p,
      oas3Selectors: m,
      operation: f,
    } = this.props
    const h = l('parameterRow'),
      g = l('TryItOutButton'),
      y = l('contentType'),
      S = l('Callbacks', !0),
      _ = l('RequestBody', !0),
      v = a && n,
      b = c.isOAS3(),
      w = `${createHtmlReadyId(`${d[1]}${d[0]}_requests`)}_select`,
      C = f.get('requestBody'),
      x = Object.values(
        r.reduce((e, t) => {
          const r = t.get('in')
          return (e[r] ??= []), e[r].push(t), e
        }, {}),
      ).reduce((e, t) => e.concat(t), [])
    return Xe.default.createElement(
      'div',
      { className: 'opblock-section' },
      Xe.default.createElement(
        'div',
        { className: 'opblock-section-header' },
        b
          ? Xe.default.createElement(
              'div',
              { className: 'tab-header' },
              Xe.default.createElement(
                'div',
                {
                  onClick: () => this.toggleTab('parameters'),
                  className: `tab-item ${
                    this.state.parametersVisible && 'active'
                  }`,
                },
                Xe.default.createElement(
                  'h4',
                  { className: 'opblock-title' },
                  Xe.default.createElement('span', null, 'Parameters'),
                ),
              ),
              f.get('callbacks')
                ? Xe.default.createElement(
                    'div',
                    {
                      onClick: () => this.toggleTab('callbacks'),
                      className: `tab-item ${
                        this.state.callbackVisible && 'active'
                      }`,
                    },
                    Xe.default.createElement(
                      'h4',
                      { className: 'opblock-title' },
                      Xe.default.createElement('span', null, 'Callbacks'),
                    ),
                  )
                : null,
            )
          : Xe.default.createElement(
              'div',
              { className: 'tab-header' },
              Xe.default.createElement(
                'h4',
                { className: 'opblock-title' },
                'Parameters',
              ),
            ),
        n
          ? Xe.default.createElement(g, {
              isOAS3: c.isOAS3(),
              hasUserEditedBody: m.hasUserEditedBody(...d),
              enabled: a,
              onCancelClick: this.props.onCancelClick,
              onTryoutClick: e,
              onResetClick: () => t(d),
            })
          : null,
      ),
      this.state.parametersVisible
        ? Xe.default.createElement(
            'div',
            { className: 'parameters-container' },
            x.length
              ? Xe.default.createElement(
                  'div',
                  { className: 'table-container' },
                  Xe.default.createElement(
                    'table',
                    { className: 'parameters' },
                    Xe.default.createElement(
                      'thead',
                      null,
                      Xe.default.createElement(
                        'tr',
                        null,
                        Xe.default.createElement(
                          'th',
                          { className: 'col_header parameters-col_name' },
                          'Name',
                        ),
                        Xe.default.createElement(
                          'th',
                          {
                            className: 'col_header parameters-col_description',
                          },
                          'Description',
                        ),
                      ),
                    ),
                    Xe.default.createElement(
                      'tbody',
                      null,
                      x.map((e, t) =>
                        Xe.default.createElement(h, {
                          fn: s,
                          specPath: o.push(t.toString()),
                          getComponent: l,
                          getConfigs: i,
                          rawParam: e,
                          param: c.parameterWithMetaByIdentity(d, e),
                          key: `${e.get('in')}.${e.get('name')}`,
                          onChange: this.onChange,
                          onChangeConsumes: this.onChangeConsumesWrapper,
                          specSelectors: c,
                          specActions: u,
                          oas3Actions: p,
                          oas3Selectors: m,
                          pathMethod: d,
                          isExecute: v,
                        }),
                      ),
                    ),
                  ),
                )
              : Xe.default.createElement(
                  'div',
                  { className: 'opblock-description-wrapper' },
                  Xe.default.createElement('p', null, 'No parameters'),
                ),
          )
        : null,
      this.state.callbackVisible
        ? Xe.default.createElement(
            'div',
            { className: 'callbacks-container opblock-description-wrapper' },
            Xe.default.createElement(S, {
              callbacks: (0, Qe.Map)(f.get('callbacks')),
              specPath: o.slice(0, -1).push('callbacks'),
            }),
          )
        : null,
      b &&
        C &&
        this.state.parametersVisible &&
        Xe.default.createElement(
          'div',
          { className: 'opblock-section opblock-section-request-body' },
          Xe.default.createElement(
            'div',
            { className: 'opblock-section-header' },
            Xe.default.createElement(
              'h4',
              {
                className: `opblock-title parameter__name ${
                  C.get('required') && 'required'
                }`,
              },
              'Request body',
            ),
            Xe.default.createElement(
              'label',
              { id: w },
              Xe.default.createElement(y, {
                value: m.requestContentType(...d),
                contentTypes: C.get('content', (0, Qe.List)()).keySeq(),
                onChange: e => {
                  this.onChangeMediaType({ value: e, pathMethod: d })
                },
                className: 'body-param-content-type',
                ariaLabel: 'Request content type',
                controlId: w,
              }),
            ),
          ),
          Xe.default.createElement(
            'div',
            { className: 'opblock-description-wrapper' },
            Xe.default.createElement(_, {
              setRetainRequestBodyValueFlag: e =>
                p.setRetainRequestBodyValueFlag({ value: e, pathMethod: d }),
              userHasEditedBody: m.hasUserEditedBody(...d),
              specPath: o.slice(0, -1).push('requestBody'),
              requestBody: C,
              requestBodyValue: m.requestBodyValue(...d),
              requestBodyInclusionSetting: m.requestBodyInclusionSetting(...d),
              requestBodyErrors: m.requestBodyErrors(...d),
              isExecute: v,
              getConfigs: i,
              activeExamplesKey: m.activeExamplesMember(
                ...d,
                'requestBody',
                'requestBody',
              ),
              updateActiveExamplesKey: e => {
                this.props.oas3Actions.setActiveExamplesMember({
                  name: e,
                  pathMethod: this.props.pathMethod,
                  contextType: 'requestBody',
                  contextName: 'requestBody',
                })
              },
              onChange: (e, t) => {
                if (t) {
                  const r = m.requestBodyValue(...d),
                    n = Qe.Map.isMap(r) ? r : (0, Qe.Map)()
                  return p.setRequestBodyValue({
                    pathMethod: d,
                    value: n.setIn(t, e),
                  })
                }
                p.setRequestBodyValue({ value: e, pathMethod: d })
              },
              onChangeIncludeEmpty: (e, t) => {
                p.setRequestBodyInclusion({ pathMethod: d, value: t, name: e })
              },
              contentType: m.requestContentType(...d),
            }),
          ),
        ),
    )
  }
}
var parameter_extension = ({ xKey: e, xVal: t }) =>
  Xe.default.createElement(
    'div',
    { className: 'parameter__extension' },
    e,
    ': ',
    String(t),
  )
const Ia = { onChange: () => {}, isIncludedOptions: {} }
class ParameterIncludeEmpty extends Xe.Component {
  static defaultProps = Ia
  componentDidMount() {
    const { isIncludedOptions: e, onChange: t } = this.props,
      { shouldDispatchInit: r, defaultValue: n } = e
    r && t(n)
  }
  onCheckboxChange = e => {
    const { onChange: t } = this.props
    t(e.target.checked)
  }
  render() {
    let { isIncluded: e, isDisabled: t } = this.props
    return Xe.default.createElement(
      'div',
      null,
      Xe.default.createElement(
        'label',
        {
          htmlFor: 'include_empty_value',
          className: (0, _r.default)('parameter__empty_value_toggle', {
            disabled: t,
          }),
        },
        Xe.default.createElement('input', {
          id: 'include_empty_value',
          type: 'checkbox',
          disabled: t,
          checked: !t && e,
          onChange: this.onCheckboxChange,
        }),
        'Send empty value',
      ),
    )
  }
}
class ParameterRow extends Xe.Component {
  constructor(e, t) {
    super(e, t), this.setDefaultValue()
  }
  UNSAFE_componentWillReceiveProps(e) {
    let t,
      { specSelectors: r, pathMethod: n, rawParam: a } = e,
      o = r.isOAS3(),
      s = r.parameterWithMetaByIdentity(n, a) || new Qe.Map()
    if (((s = s.isEmpty() ? a : s), o)) {
      let { schema: e } = getParameterSchema(s, { isOAS3: o })
      t = e ? e.get('enum') : void 0
    } else t = s ? s.get('enum') : void 0
    let l,
      i = s ? s.get('value') : void 0
    void 0 !== i
      ? (l = i)
      : a.get('required') && t && t.size && (l = t.first()),
      void 0 !== l &&
        l !== i &&
        this.onChangeWrapper(
          (function numberToString(e) {
            return 'number' == typeof e ? e.toString() : e
          })(l),
        ),
      this.setDefaultValue()
  }
  onChangeWrapper = (e, t = !1) => {
    let r,
      { onChange: n, rawParam: a } = this.props
    return (r = '' === e || (e && 0 === e.size) ? null : e), n(a, r, t)
  }
  _onExampleSelect = e => {
    this.props.oas3Actions.setActiveExamplesMember({
      name: e,
      pathMethod: this.props.pathMethod,
      contextType: 'parameters',
      contextName: this.getParamKey(),
    })
  }
  onChangeIncludeEmpty = e => {
    let { specActions: t, param: r, pathMethod: n } = this.props
    const a = r.get('name'),
      o = r.get('in')
    return t.updateEmptyParamInclusion(n, a, o, e)
  }
  setDefaultValue = () => {
    let {
      specSelectors: e,
      pathMethod: t,
      rawParam: r,
      oas3Selectors: n,
      fn: a,
    } = this.props
    const o = e.parameterWithMetaByIdentity(t, r) || (0, Qe.Map)()
    let { schema: s } = getParameterSchema(o, { isOAS3: e.isOAS3() })
    const l = o
        .get('content', (0, Qe.Map)())
        .keySeq()
        .first(),
      i = s ? a.getSampleSchema(s.toJS(), l, { includeWriteOnly: !0 }) : null
    if (o && void 0 === o.get('value') && 'body' !== o.get('in')) {
      let r
      if (e.isSwagger2())
        r =
          void 0 !== o.get('x-example')
            ? o.get('x-example')
            : void 0 !== o.getIn(['schema', 'example'])
            ? o.getIn(['schema', 'example'])
            : s && s.getIn(['default'])
      else if (e.isOAS3()) {
        s = this.composeJsonSchema(s)
        const e = n.activeExamplesMember(...t, 'parameters', this.getParamKey())
        r =
          void 0 !== o.getIn(['examples', e, 'value'])
            ? o.getIn(['examples', e, 'value'])
            : void 0 !== o.getIn(['content', l, 'example'])
            ? o.getIn(['content', l, 'example'])
            : void 0 !== o.get('example')
            ? o.get('example')
            : void 0 !== (s && s.get('example'))
            ? s && s.get('example')
            : void 0 !== (s && s.get('default'))
            ? s && s.get('default')
            : o.get('default')
      }
      void 0 === r || Qe.List.isList(r) || (r = stringify(r)),
        void 0 !== r
          ? this.onChangeWrapper(r)
          : s &&
            'object' === s.get('type') &&
            i &&
            !o.get('examples') &&
            this.onChangeWrapper(Qe.List.isList(i) ? i : stringify(i))
    }
  }
  getParamKey() {
    const { param: e } = this.props
    return e ? `${e.get('name')}-${e.get('in')}` : null
  }
  composeJsonSchema(e) {
    const { fn: t } = this.props,
      r = e.get('oneOf')?.get(0)?.toJS(),
      n = e.get('anyOf')?.get(0)?.toJS()
    return (0, Qe.fromJS)(t.mergeJsonSchema(e.toJS(), r ?? n ?? {}))
  }
  render() {
    let {
        param: e,
        rawParam: t,
        getComponent: r,
        getConfigs: n,
        isExecute: a,
        fn: o,
        onChangeConsumes: s,
        specSelectors: l,
        pathMethod: i,
        specPath: c,
        oas3Selectors: u,
      } = this.props,
      d = l.isOAS3()
    const { showExtensions: p, showCommonExtensions: m } = n()
    if ((e || (e = t), !t)) return null
    const f = r('JsonSchemaForm'),
      h = r('ParamBody')
    let g = e.get('in'),
      y =
        'body' !== g
          ? null
          : Xe.default.createElement(h, {
              getComponent: r,
              getConfigs: n,
              fn: o,
              param: e,
              consumes: l.consumesOptionsFor(i),
              consumesValue: l.contentTypeValues(i).get('requestContentType'),
              onChange: this.onChangeWrapper,
              onChangeConsumes: s,
              isExecute: a,
              specSelectors: l,
              pathMethod: i,
            })
    const S = r('modelExample'),
      _ = r('Markdown', !0),
      v = r('ParameterExt'),
      b = r('ParameterIncludeEmpty'),
      w = r('ExamplesSelectValueRetainer'),
      C = r('Example')
    let { schema: x } = getParameterSchema(e, { isOAS3: d }),
      O = l.parameterWithMetaByIdentity(i, t) || (0, Qe.Map)()
    d && (x = this.composeJsonSchema(x))
    let k,
      N,
      A,
      I,
      R = x ? x.get('format') : null,
      T = x ? x.get('type') : null,
      B = x ? x.getIn(['items', 'type']) : null,
      j = 'formData' === g,
      P = 'FormData' in dt,
      M = e.get('required'),
      q = O ? O.get('value') : '',
      L = m ? getCommonExtensions(x) : null,
      D = p ? getExtensions(e) : null,
      U = !1
    return (
      void 0 !== e && x && (k = x.get('items')),
      void 0 !== k
        ? ((N = k.get('enum')), (A = k.get('default')))
        : x && (N = x.get('enum')),
      N && N.size && N.size > 0 && (U = !0),
      void 0 !== e &&
        (x && (A = x.get('default')),
        void 0 === A && (A = e.get('default')),
        (I = e.get('example')),
        void 0 === I && (I = e.get('x-example'))),
      Xe.default.createElement(
        'tr',
        { 'data-param-name': e.get('name'), 'data-param-in': e.get('in') },
        Xe.default.createElement(
          'td',
          { className: 'parameters-col_name' },
          Xe.default.createElement(
            'div',
            { className: M ? 'parameter__name required' : 'parameter__name' },
            e.get('name'),
            M ? Xe.default.createElement('span', null, ' *') : null,
          ),
          Xe.default.createElement(
            'div',
            { className: 'parameter__type' },
            T,
            B && `[${B}]`,
            R &&
              Xe.default.createElement(
                'span',
                { className: 'prop-format' },
                '($',
                R,
                ')',
              ),
          ),
          Xe.default.createElement(
            'div',
            { className: 'parameter__deprecated' },
            d && e.get('deprecated') ? 'deprecated' : null,
          ),
          Xe.default.createElement(
            'div',
            { className: 'parameter__in' },
            '(',
            e.get('in'),
            ')',
          ),
        ),
        Xe.default.createElement(
          'td',
          { className: 'parameters-col_description' },
          e.get('description')
            ? Xe.default.createElement(_, { source: e.get('description') })
            : null,
          (!y && a) || !U
            ? null
            : Xe.default.createElement(_, {
                className: 'parameter__enum',
                source:
                  '<i>Available values</i> : ' +
                  N.map(function (e) {
                    return e
                  })
                    .toArray()
                    .map(String)
                    .join(', '),
              }),
          (!y && a) || void 0 === A
            ? null
            : Xe.default.createElement(_, {
                className: 'parameter__default',
                source: '<i>Default value</i> : ' + A,
              }),
          (!y && a) || void 0 === I
            ? null
            : Xe.default.createElement(_, { source: '<i>Example</i> : ' + I }),
          j &&
            !P &&
            Xe.default.createElement(
              'div',
              null,
              'Error: your browser does not support FormData',
            ),
          d && e.get('examples')
            ? Xe.default.createElement(
                'section',
                { className: 'parameter-controls' },
                Xe.default.createElement(w, {
                  examples: e.get('examples'),
                  onSelect: this._onExampleSelect,
                  updateValue: this.onChangeWrapper,
                  getComponent: r,
                  defaultToFirstExample: !0,
                  currentKey: u.activeExamplesMember(
                    ...i,
                    'parameters',
                    this.getParamKey(),
                  ),
                  currentUserInputValue: q,
                }),
              )
            : null,
          y
            ? null
            : Xe.default.createElement(f, {
                fn: o,
                getComponent: r,
                value: q,
                required: M,
                disabled: !a,
                description: e.get('name'),
                onChange: this.onChangeWrapper,
                errors: O.get('errors'),
                schema: x,
              }),
          y && x
            ? Xe.default.createElement(S, {
                getComponent: r,
                specPath: c.push('schema'),
                getConfigs: n,
                isExecute: a,
                specSelectors: l,
                schema: x,
                example: y,
                includeWriteOnly: !0,
              })
            : null,
          !y && a && e.get('allowEmptyValue')
            ? Xe.default.createElement(b, {
                onChange: this.onChangeIncludeEmpty,
                isIncluded: l.parameterInclusionSettingFor(
                  i,
                  e.get('name'),
                  e.get('in'),
                ),
                isDisabled: !isEmptyValue(q),
              })
            : null,
          d && e.get('examples')
            ? Xe.default.createElement(C, {
                example: e.getIn([
                  'examples',
                  u.activeExamplesMember(
                    ...i,
                    'parameters',
                    this.getParamKey(),
                  ),
                ]),
                getComponent: r,
                getConfigs: n,
              })
            : null,
          m && L.size
            ? L.entrySeq().map(([e, t]) =>
                Xe.default.createElement(v, {
                  key: `${e}-${t}`,
                  xKey: e,
                  xVal: t,
                }),
              )
            : null,
          p && D.size
            ? D.entrySeq().map(([e, t]) =>
                Xe.default.createElement(v, {
                  key: `${e}-${t}`,
                  xKey: e,
                  xVal: t,
                }),
              )
            : null,
        ),
      )
    )
  }
}
class Execute extends Xe.Component {
  handleValidateParameters = () => {
    let { specSelectors: e, specActions: t, path: r, method: n } = this.props
    return t.validateParams([r, n]), e.validateBeforeExecute([r, n])
  }
  handleValidateRequestBody = () => {
    let {
        path: e,
        method: t,
        specSelectors: r,
        oas3Selectors: n,
        oas3Actions: a,
      } = this.props,
      o = { missingBodyValue: !1, missingRequiredKeys: [] }
    a.clearRequestBodyValidateError({ path: e, method: t })
    let s = r.getOAS3RequiredRequestBodyContentType([e, t]),
      l = n.requestBodyValue(e, t),
      i = n.validateBeforeExecute([e, t]),
      c = n.requestContentType(e, t)
    if (!i)
      return (
        (o.missingBodyValue = !0),
        a.setRequestBodyValidateError({
          path: e,
          method: t,
          validationErrors: o,
        }),
        !1
      )
    if (!s) return !0
    let u = n.validateShallowRequired({
      oas3RequiredRequestBodyContentType: s,
      oas3RequestContentType: c,
      oas3RequestBodyValue: l,
    })
    return (
      !u ||
      u.length < 1 ||
      (u.forEach(e => {
        o.missingRequiredKeys.push(e)
      }),
      a.setRequestBodyValidateError({
        path: e,
        method: t,
        validationErrors: o,
      }),
      !1)
    )
  }
  handleValidationResultPass = () => {
    let { specActions: e, operation: t, path: r, method: n } = this.props
    this.props.onExecute && this.props.onExecute(),
      e.execute({ operation: t, path: r, method: n })
  }
  handleValidationResultFail = () => {
    let { specActions: e, path: t, method: r } = this.props
    e.clearValidateParams([t, r]),
      setTimeout(() => {
        e.validateParams([t, r])
      }, 40)
  }
  handleValidationResult = e => {
    e ? this.handleValidationResultPass() : this.handleValidationResultFail()
  }
  onClick = () => {
    let e = this.handleValidateParameters(),
      t = this.handleValidateRequestBody(),
      r = e && t
    this.handleValidationResult(r)
  }
  onChangeProducesWrapper = e =>
    this.props.specActions.changeProducesValue(
      [this.props.path, this.props.method],
      e,
    )
  render() {
    const { disabled: e } = this.props
    return Xe.default.createElement(
      'button',
      {
        className: 'btn execute opblock-control__btn',
        onClick: this.onClick,
        disabled: e,
      },
      'Execute',
    )
  }
}
class headers_Headers extends Xe.default.Component {
  render() {
    let { headers: e, getComponent: t } = this.props
    const r = t('Property'),
      n = t('Markdown', !0)
    return e && e.size
      ? Xe.default.createElement(
          'div',
          { className: 'headers-wrapper' },
          Xe.default.createElement(
            'h4',
            { className: 'headers__title' },
            'Headers:',
          ),
          Xe.default.createElement(
            'table',
            { className: 'headers' },
            Xe.default.createElement(
              'thead',
              null,
              Xe.default.createElement(
                'tr',
                { className: 'header-row' },
                Xe.default.createElement(
                  'th',
                  { className: 'header-col' },
                  'Name',
                ),
                Xe.default.createElement(
                  'th',
                  { className: 'header-col' },
                  'Description',
                ),
                Xe.default.createElement(
                  'th',
                  { className: 'header-col' },
                  'Type',
                ),
              ),
            ),
            Xe.default.createElement(
              'tbody',
              null,
              e
                .entrySeq()
                .map(([e, t]) => {
                  if (!Qe.default.Map.isMap(t)) return null
                  const a = t.get('description'),
                    o = t.getIn(['schema'])
                      ? t.getIn(['schema', 'type'])
                      : t.getIn(['type']),
                    s = t.getIn(['schema', 'example'])
                  return Xe.default.createElement(
                    'tr',
                    { key: e },
                    Xe.default.createElement(
                      'td',
                      { className: 'header-col' },
                      e,
                    ),
                    Xe.default.createElement(
                      'td',
                      { className: 'header-col' },
                      a ? Xe.default.createElement(n, { source: a }) : null,
                    ),
                    Xe.default.createElement(
                      'td',
                      { className: 'header-col' },
                      o,
                      ' ',
                      s
                        ? Xe.default.createElement(r, {
                            propKey: 'Example',
                            propVal: s,
                            propClass: 'header-example',
                          })
                        : null,
                    ),
                  )
                })
                .toArray(),
            ),
          ),
        )
      : null
  }
}
class Errors extends Xe.default.Component {
  render() {
    let {
      editorActions: e,
      errSelectors: t,
      layoutSelectors: r,
      layoutActions: n,
      getComponent: a,
    } = this.props
    const o = a('Collapse')
    if (e && e.jumpToLine) var s = e.jumpToLine
    let l = t
      .allErrors()
      .filter(e => 'thrown' === e.get('type') || 'error' === e.get('level'))
    if (!l || l.count() < 1) return null
    let i = r.isShown(['errorPane'], !0),
      c = l.sortBy(e => e.get('line'))
    return Xe.default.createElement(
      'pre',
      { className: 'errors-wrapper' },
      Xe.default.createElement(
        'hgroup',
        { className: 'error' },
        Xe.default.createElement(
          'h4',
          { className: 'errors__title' },
          'Errors',
        ),
        Xe.default.createElement(
          'button',
          {
            className: 'btn errors__clear-btn',
            onClick: () => n.show(['errorPane'], !i),
          },
          i ? 'Hide' : 'Show',
        ),
      ),
      Xe.default.createElement(
        o,
        { isOpened: i, animated: !0 },
        Xe.default.createElement(
          'div',
          { className: 'errors' },
          c.map((e, t) => {
            let r = e.get('type')
            return 'thrown' === r || 'auth' === r
              ? Xe.default.createElement(ThrownErrorItem, {
                  key: t,
                  error: e.get('error') || e,
                  jumpToLine: s,
                })
              : 'spec' === r
              ? Xe.default.createElement(SpecErrorItem, {
                  key: t,
                  error: e,
                  jumpToLine: s,
                })
              : void 0
          }),
        ),
      ),
    )
  }
}
const ThrownErrorItem = ({ error: e, jumpToLine: t }) => {
    if (!e) return null
    let r = e.get('line')
    return Xe.default.createElement(
      'div',
      { className: 'error-wrapper' },
      e
        ? Xe.default.createElement(
            'div',
            null,
            Xe.default.createElement(
              'h4',
              null,
              e.get('source') && e.get('level')
                ? toTitleCase(e.get('source')) + ' ' + e.get('level')
                : '',
              e.get('path')
                ? Xe.default.createElement('small', null, ' at ', e.get('path'))
                : null,
            ),
            Xe.default.createElement(
              'span',
              { className: 'message thrown' },
              e.get('message'),
            ),
            Xe.default.createElement(
              'div',
              { className: 'error-line' },
              r && t
                ? Xe.default.createElement(
                    'a',
                    { onClick: t.bind(null, r) },
                    'Jump to line ',
                    r,
                  )
                : null,
            ),
          )
        : null,
    )
  },
  SpecErrorItem = ({ error: e, jumpToLine: t = null }) => {
    let r = null
    return (
      e.get('path')
        ? (r = Qe.List.isList(e.get('path'))
            ? Xe.default.createElement(
                'small',
                null,
                'at ',
                e.get('path').join('.'),
              )
            : Xe.default.createElement('small', null, 'at ', e.get('path')))
        : e.get('line') &&
          !t &&
          (r = Xe.default.createElement(
            'small',
            null,
            'on line ',
            e.get('line'),
          )),
      Xe.default.createElement(
        'div',
        { className: 'error-wrapper' },
        e
          ? Xe.default.createElement(
              'div',
              null,
              Xe.default.createElement(
                'h4',
                null,
                toTitleCase(e.get('source')) + ' ' + e.get('level'),
                ' ',
                r,
              ),
              Xe.default.createElement(
                'span',
                { className: 'message' },
                e.get('message'),
              ),
              Xe.default.createElement(
                'div',
                { className: 'error-line' },
                t
                  ? Xe.default.createElement(
                      'a',
                      { onClick: t.bind(null, e.get('line')) },
                      'Jump to line ',
                      e.get('line'),
                    )
                  : null,
              ),
            )
          : null,
      )
    )
  }
function toTitleCase(e) {
  return (e || '')
    .split(' ')
    .map(e => e[0].toUpperCase() + e.slice(1))
    .join(' ')
}
const content_type_noop = () => {}
class ContentType extends Xe.default.Component {
  static defaultProps = {
    onChange: content_type_noop,
    value: null,
    contentTypes: (0, Qe.fromJS)(['application/json']),
  }
  componentDidMount() {
    this.props.contentTypes &&
      this.props.onChange(this.props.contentTypes.first())
  }
  UNSAFE_componentWillReceiveProps(e) {
    e.contentTypes &&
      e.contentTypes.size &&
      (e.contentTypes.includes(e.value) || e.onChange(e.contentTypes.first()))
  }
  onChangeWrapper = e => this.props.onChange(e.target.value)
  render() {
    let {
      ariaControls: e,
      ariaLabel: t,
      className: r,
      contentTypes: n,
      controlId: a,
      value: o,
    } = this.props
    return n && n.size
      ? Xe.default.createElement(
          'div',
          { className: 'content-type-wrapper ' + (r || '') },
          Xe.default.createElement(
            'select',
            {
              'aria-controls': e,
              'aria-label': t,
              className: 'content-type',
              id: a,
              onChange: this.onChangeWrapper,
              value: o || '',
            },
            n
              .map(e =>
                Xe.default.createElement('option', { key: e, value: e }, e),
              )
              .toArray(),
          ),
        )
      : null
  }
}
function xclass(...e) {
  return e
    .filter(e => !!e)
    .join(' ')
    .trim()
}
class Container extends Xe.default.Component {
  render() {
    let { fullscreen: e, full: t, ...r } = this.props
    if (e) return Xe.default.createElement('section', r)
    let n = 'swagger-container' + (t ? '-full' : '')
    return Xe.default.createElement(
      'section',
      (0, cr.default)({}, r, { className: xclass(r.className, n) }),
    )
  }
}
const Ra = { mobile: '', tablet: '-tablet', desktop: '-desktop', large: '-hd' }
class Col extends Xe.default.Component {
  render() {
    const {
      hide: e,
      keepContents: t,
      mobile: r,
      tablet: n,
      desktop: a,
      large: o,
      ...s
    } = this.props
    if (e && !t) return Xe.default.createElement('span', null)
    let l = []
    for (let e in Ra) {
      if (!Object.prototype.hasOwnProperty.call(Ra, e)) continue
      let t = Ra[e]
      if (e in this.props) {
        let r = this.props[e]
        if (r < 1) {
          l.push('none' + t)
          continue
        }
        l.push('block' + t), l.push('col-' + r + t)
      }
    }
    e && l.push('hidden')
    let i = xclass(s.className, ...l)
    return Xe.default.createElement(
      'section',
      (0, cr.default)({}, s, { className: i }),
    )
  }
}
class Row extends Xe.default.Component {
  render() {
    return Xe.default.createElement(
      'div',
      (0, cr.default)({}, this.props, {
        className: xclass(this.props.className, 'wrapper'),
      }),
    )
  }
}
class Button extends Xe.default.Component {
  static defaultProps = { className: '' }
  render() {
    return Xe.default.createElement(
      'button',
      (0, cr.default)({}, this.props, {
        className: xclass(this.props.className, 'button'),
      }),
    )
  }
}
const TextArea = e => Xe.default.createElement('textarea', e),
  Input = e => Xe.default.createElement('input', e)
class Select extends Xe.default.Component {
  static defaultProps = { multiple: !1, allowEmptyValue: !0 }
  constructor(e, t) {
    let r
    super(e, t),
      (r = e.value ? e.value : e.multiple ? [''] : ''),
      (this.state = { value: r })
  }
  onChange = e => {
    let t,
      { onChange: r, multiple: n } = this.props,
      a = [].slice.call(e.target.options)
    ;(t = n
      ? a
          .filter(function (e) {
            return e.selected
          })
          .map(function (e) {
            return e.value
          })
      : e.target.value),
      this.setState({ value: t }),
      r && r(t)
  }
  UNSAFE_componentWillReceiveProps(e) {
    e.value !== this.props.value && this.setState({ value: e.value })
  }
  render() {
    let {
        allowedValues: e,
        multiple: t,
        allowEmptyValue: r,
        disabled: n,
      } = this.props,
      a = this.state.value?.toJS?.() || this.state.value
    return Xe.default.createElement(
      'select',
      {
        className: this.props.className,
        multiple: t,
        value: a,
        onChange: this.onChange,
        disabled: n,
      },
      r ? Xe.default.createElement('option', { value: '' }, '--') : null,
      e.map(function (e, t) {
        return Xe.default.createElement(
          'option',
          { key: t, value: String(e) },
          String(e),
        )
      }),
    )
  }
}
class Link extends Xe.default.Component {
  render() {
    return Xe.default.createElement(
      'a',
      (0, cr.default)({}, this.props, {
        rel: 'noopener noreferrer',
        className: xclass(this.props.className, 'link'),
      }),
    )
  }
}
const NoMargin = ({ children: e }) =>
  Xe.default.createElement('div', { className: 'no-margin' }, ' ', e, ' ')
class Collapse extends Xe.default.Component {
  static defaultProps = { isOpened: !1, animated: !1 }
  renderNotAnimated() {
    return this.props.isOpened
      ? Xe.default.createElement(NoMargin, null, this.props.children)
      : Xe.default.createElement('noscript', null)
  }
  render() {
    let { animated: e, isOpened: t, children: r } = this.props
    return e
      ? ((r = t ? r : null), Xe.default.createElement(NoMargin, null, r))
      : this.renderNotAnimated()
  }
}
class Overview extends Xe.default.Component {
  constructor(...e) {
    super(...e), (this.setTagShown = this._setTagShown.bind(this))
  }
  _setTagShown(e, t) {
    this.props.layoutActions.show(e, t)
  }
  showOp(e, t) {
    let { layoutActions: r } = this.props
    r.show(e, t)
  }
  render() {
    let {
        specSelectors: e,
        layoutSelectors: t,
        layoutActions: r,
        getComponent: n,
      } = this.props,
      a = e.taggedOperations()
    const o = n('Collapse')
    return Xe.default.createElement(
      'div',
      null,
      Xe.default.createElement(
        'h4',
        { className: 'overview-title' },
        'Overview',
      ),
      a
        .map((e, n) => {
          let a = e.get('operations'),
            s = ['overview-tags', n],
            l = t.isShown(s, !0)
          return Xe.default.createElement(
            'div',
            { key: 'overview-' + n },
            Xe.default.createElement(
              'h4',
              { onClick: () => r.show(s, !l), className: 'link overview-tag' },
              ' ',
              l ? '-' : '+',
              n,
            ),
            Xe.default.createElement(
              o,
              { isOpened: l, animated: !0 },
              a
                .map(e => {
                  let { path: n, method: a, id: o } = e.toObject(),
                    s = 'operations',
                    l = o,
                    i = t.isShown([s, l])
                  return Xe.default.createElement(OperationLink, {
                    key: o,
                    path: n,
                    method: a,
                    id: n + '-' + a,
                    shown: i,
                    showOpId: l,
                    showOpIdPrefix: s,
                    href: `#operation-${l}`,
                    onClick: r.show,
                  })
                })
                .toArray(),
            ),
          )
        })
        .toArray(),
      a.size < 1 &&
        Xe.default.createElement(
          'h3',
          null,
          ' No operations defined in spec! ',
        ),
    )
  }
}
class OperationLink extends Xe.default.Component {
  constructor(e) {
    super(e), (this.onClick = this._onClick.bind(this))
  }
  _onClick() {
    let { showOpId: e, showOpIdPrefix: t, onClick: r, shown: n } = this.props
    r([t, e], !n)
  }
  render() {
    let { id: e, method: t, shown: r, href: n } = this.props
    return Xe.default.createElement(
      Link,
      {
        href: n,
        onClick: this.onClick,
        className: 'block opblock-link ' + (r ? 'shown' : ''),
      },
      Xe.default.createElement(
        'div',
        null,
        Xe.default.createElement(
          'small',
          { className: `bold-label-${t}` },
          t.toUpperCase(),
        ),
        Xe.default.createElement('span', { className: 'bold-label' }, e),
      ),
    )
  }
}
class InitializedInput extends Xe.default.Component {
  componentDidMount() {
    this.props.initialValue && (this.inputRef.value = this.props.initialValue)
  }
  render() {
    const { value: e, defaultValue: t, initialValue: r, ...n } = this.props
    return Xe.default.createElement(
      'input',
      (0, cr.default)({}, n, { ref: e => (this.inputRef = e) }),
    )
  }
}
class InfoBasePath extends Xe.default.Component {
  render() {
    const { host: e, basePath: t } = this.props
    return Xe.default.createElement(
      'pre',
      { className: 'base-url' },
      '[ Base URL: ',
      e,
      t,
      ' ]',
    )
  }
}
class InfoUrl extends Xe.default.PureComponent {
  render() {
    const { url: e, getComponent: t } = this.props,
      r = t('Link')
    return Xe.default.createElement(
      r,
      { target: '_blank', href: sanitizeUrl(e) },
      Xe.default.createElement('span', { className: 'url' }, ' ', e),
    )
  }
}
class Info extends Xe.default.Component {
  render() {
    const {
        info: e,
        url: t,
        host: r,
        basePath: n,
        getComponent: a,
        externalDocs: o,
        selectedServer: s,
        url: l,
      } = this.props,
      i = e.get('version'),
      c = e.get('description'),
      u = e.get('title'),
      d = safeBuildUrl(e.get('termsOfService'), l, { selectedServer: s }),
      p = e.get('contact'),
      m = e.get('license'),
      f = safeBuildUrl(o && o.get('url'), l, { selectedServer: s }),
      h = o && o.get('description'),
      g = a('Markdown', !0),
      y = a('Link'),
      S = a('VersionStamp'),
      _ = a('OpenAPIVersion'),
      v = a('InfoUrl'),
      b = a('InfoBasePath'),
      w = a('License'),
      C = a('Contact')
    return Xe.default.createElement(
      'div',
      { className: 'info' },
      Xe.default.createElement(
        'hgroup',
        { className: 'main' },
        Xe.default.createElement(
          'h2',
          { className: 'title' },
          u,
          Xe.default.createElement(
            'span',
            null,
            i && Xe.default.createElement(S, { version: i }),
            Xe.default.createElement(_, { oasVersion: '2.0' }),
          ),
        ),
        r || n ? Xe.default.createElement(b, { host: r, basePath: n }) : null,
        t && Xe.default.createElement(v, { getComponent: a, url: t }),
      ),
      Xe.default.createElement(
        'div',
        { className: 'description' },
        Xe.default.createElement(g, { source: c }),
      ),
      d &&
        Xe.default.createElement(
          'div',
          { className: 'info__tos' },
          Xe.default.createElement(
            y,
            { target: '_blank', href: sanitizeUrl(d) },
            'Terms of service',
          ),
        ),
      p?.size > 0 &&
        Xe.default.createElement(C, {
          getComponent: a,
          data: p,
          selectedServer: s,
          url: t,
        }),
      m?.size > 0 &&
        Xe.default.createElement(w, {
          getComponent: a,
          license: m,
          selectedServer: s,
          url: t,
        }),
      f
        ? Xe.default.createElement(
            y,
            {
              className: 'info__extdocs',
              target: '_blank',
              href: sanitizeUrl(f),
            },
            h || f,
          )
        : null,
    )
  }
}
var Ta = Info
class InfoContainer extends Xe.default.Component {
  render() {
    const { specSelectors: e, getComponent: t, oas3Selectors: r } = this.props,
      n = e.info(),
      a = e.url(),
      o = e.basePath(),
      s = e.host(),
      l = e.externalDocs(),
      i = r.selectedServer(),
      c = t('info')
    return Xe.default.createElement(
      'div',
      null,
      n && n.count()
        ? Xe.default.createElement(c, {
            info: n,
            url: a,
            host: s,
            basePath: o,
            externalDocs: l,
            getComponent: t,
            selectedServer: i,
          })
        : null,
    )
  }
}
class Contact extends Xe.default.Component {
  render() {
    const { data: e, getComponent: t, selectedServer: r, url: n } = this.props,
      a = e.get('name', 'the developer'),
      o = safeBuildUrl(e.get('url'), n, { selectedServer: r }),
      s = e.get('email'),
      l = t('Link')
    return Xe.default.createElement(
      'div',
      { className: 'info__contact' },
      o &&
        Xe.default.createElement(
          'div',
          null,
          Xe.default.createElement(
            l,
            { href: sanitizeUrl(o), target: '_blank' },
            a,
            ' - Website',
          ),
        ),
      s &&
        Xe.default.createElement(
          l,
          { href: sanitizeUrl(`mailto:${s}`) },
          o ? `Send email to ${a}` : `Contact ${a}`,
        ),
    )
  }
}
var Ba = Contact
class License extends Xe.default.Component {
  render() {
    const {
        license: e,
        getComponent: t,
        selectedServer: r,
        url: n,
      } = this.props,
      a = e.get('name', 'License'),
      o = safeBuildUrl(e.get('url'), n, { selectedServer: r }),
      s = t('Link')
    return Xe.default.createElement(
      'div',
      { className: 'info__license' },
      o
        ? Xe.default.createElement(
            'div',
            { className: 'info__license__url' },
            Xe.default.createElement(
              s,
              { target: '_blank', href: sanitizeUrl(o) },
              a,
            ),
          )
        : Xe.default.createElement('span', null, a),
    )
  }
}
var ja = License
class JumpToPath extends Xe.default.Component {
  render() {
    return null
  }
}
class CopyToClipboardBtn extends Xe.default.Component {
  render() {
    let { getComponent: e } = this.props
    const t = e('CopyIcon')
    return Xe.default.createElement(
      'div',
      {
        className: 'view-line-link copy-to-clipboard',
        title: 'Copy to clipboard',
      },
      Xe.default.createElement(
        vr.CopyToClipboard,
        { text: this.props.textToCopy },
        Xe.default.createElement(t, null),
      ),
    )
  }
}
class Footer extends Xe.default.Component {
  render() {
    return Xe.default.createElement('div', { className: 'footer' })
  }
}
class FilterContainer extends Xe.default.Component {
  onFilterChange = e => {
    const {
      target: { value: t },
    } = e
    this.props.layoutActions.updateFilter(t)
  }
  render() {
    const {
        specSelectors: e,
        layoutSelectors: t,
        getComponent: r,
      } = this.props,
      n = r('Col'),
      a = 'loading' === e.loadingStatus(),
      o = 'failed' === e.loadingStatus(),
      s = t.currentFilter(),
      l = ['operation-filter-input']
    return (
      o && l.push('failed'),
      a && l.push('loading'),
      Xe.default.createElement(
        'div',
        null,
        !1 === s
          ? null
          : Xe.default.createElement(
              'div',
              { className: 'filter-container' },
              Xe.default.createElement(
                n,
                { className: 'filter wrapper', mobile: 12 },
                Xe.default.createElement('input', {
                  className: l.join(' '),
                  placeholder: 'Filter by tag',
                  type: 'text',
                  onChange: this.onFilterChange,
                  value: 'string' == typeof s ? s : '',
                  disabled: a,
                }),
              ),
            ),
      )
    )
  }
}
const Pa = Function.prototype
class ParamBody extends Xe.PureComponent {
  static defaultProp = {
    consumes: (0, Qe.fromJS)(['application/json']),
    param: (0, Qe.fromJS)({}),
    onChange: Pa,
    onChangeConsumes: Pa,
  }
  constructor(e, t) {
    super(e, t), (this.state = { isEditBox: !1, value: '' })
  }
  componentDidMount() {
    this.updateValues.call(this, this.props)
  }
  UNSAFE_componentWillReceiveProps(e) {
    this.updateValues.call(this, e)
  }
  updateValues = e => {
    let { param: t, isExecute: r, consumesValue: n = '' } = e,
      a = /xml/i.test(n),
      o = /json/i.test(n),
      s = a ? t.get('value_xml') : t.get('value')
    if (void 0 !== s) {
      let e = !s && o ? '{}' : s
      this.setState({ value: e }), this.onChange(e, { isXml: a, isEditBox: r })
    } else
      a
        ? this.onChange(this.sample('xml'), { isXml: a, isEditBox: r })
        : this.onChange(this.sample(), { isEditBox: r })
  }
  sample = e => {
    let { param: t, fn: r } = this.props,
      n = r.inferSchema(t.toJS())
    return r.getSampleSchema(n, e, { includeWriteOnly: !0 })
  }
  onChange = (e, { isEditBox: t, isXml: r }) => {
    this.setState({ value: e, isEditBox: t }), this._onChange(e, r)
  }
  _onChange = (e, t) => {
    ;(this.props.onChange || Pa)(e, t)
  }
  handleOnChange = e => {
    const { consumesValue: t } = this.props,
      r = /xml/i.test(t),
      n = e.target.value
    this.onChange(n, { isXml: r, isEditBox: this.state.isEditBox })
  }
  toggleIsEditBox = () => this.setState(e => ({ isEditBox: !e.isEditBox }))
  render() {
    let {
      onChangeConsumes: e,
      param: t,
      isExecute: r,
      specSelectors: n,
      pathMethod: a,
      getComponent: o,
    } = this.props
    const s = o('Button'),
      l = o('TextArea'),
      i = o('HighlightCode', !0),
      c = o('contentType')
    let u = (n ? n.parameterWithMetaByIdentity(a, t) : t).get(
        'errors',
        (0, Qe.List)(),
      ),
      d = n.contentTypeValues(a).get('requestContentType'),
      p =
        this.props.consumes && this.props.consumes.size
          ? this.props.consumes
          : ParamBody.defaultProp.consumes,
      { value: m, isEditBox: f } = this.state,
      h = null
    getKnownSyntaxHighlighterLanguage(m) && (h = 'json')
    const g = `${createHtmlReadyId(`${a[1]}${a[0]}_parameters`)}_select`
    return Xe.default.createElement(
      'div',
      {
        className: 'body-param',
        'data-param-name': t.get('name'),
        'data-param-in': t.get('in'),
      },
      f && r
        ? Xe.default.createElement(l, {
            className: 'body-param__text' + (u.count() ? ' invalid' : ''),
            value: m,
            onChange: this.handleOnChange,
          })
        : m &&
            Xe.default.createElement(
              i,
              { className: 'body-param__example', language: h },
              m,
            ),
      Xe.default.createElement(
        'div',
        { className: 'body-param-options' },
        r
          ? Xe.default.createElement(
              'div',
              { className: 'body-param-edit' },
              Xe.default.createElement(
                s,
                {
                  className: f
                    ? 'btn cancel body-param__example-edit'
                    : 'btn edit body-param__example-edit',
                  onClick: this.toggleIsEditBox,
                },
                f ? 'Cancel' : 'Edit',
              ),
            )
          : null,
        Xe.default.createElement(
          'label',
          { htmlFor: g },
          Xe.default.createElement('span', null, 'Parameter content type'),
          Xe.default.createElement(c, {
            value: d,
            contentTypes: p,
            onChange: e,
            className: 'body-param-content-type',
            ariaLabel: 'Parameter content type',
            controlId: g,
          }),
        ),
      ),
    )
  }
}
class Curl extends Xe.default.Component {
  render() {
    const { request: e, getComponent: t } = this.props,
      r = requestSnippetGenerator_curl_bash(e),
      n = t('SyntaxHighlighter', !0)
    return Xe.default.createElement(
      'div',
      { className: 'curl-command' },
      Xe.default.createElement('h4', null, 'Curl'),
      Xe.default.createElement(
        'div',
        { className: 'copy-to-clipboard' },
        Xe.default.createElement(
          vr.CopyToClipboard,
          { text: r },
          Xe.default.createElement('button', null),
        ),
      ),
      Xe.default.createElement(
        'div',
        null,
        Xe.default.createElement(
          n,
          {
            language: 'bash',
            className: 'curl microlight',
            renderPlainText: ({ children: e, PlainTextViewer: t }) =>
              Xe.default.createElement(t, { className: 'curl' }, e),
          },
          r,
        ),
      ),
    )
  }
}
var property = ({ propKey: e, propVal: t, propClass: r }) =>
  Xe.default.createElement(
    'span',
    { className: r },
    Xe.default.createElement('br', null),
    e,
    ': ',
    String(t),
  )
class TryItOutButton extends Xe.default.Component {
  static defaultProps = {
    onTryoutClick: Function.prototype,
    onCancelClick: Function.prototype,
    onResetClick: Function.prototype,
    enabled: !1,
    hasUserEditedBody: !1,
    isOAS3: !1,
  }
  render() {
    const {
        onTryoutClick: e,
        onCancelClick: t,
        onResetClick: r,
        enabled: n,
        hasUserEditedBody: a,
        isOAS3: o,
      } = this.props,
      s = o && a
    return Xe.default.createElement(
      'div',
      { className: s ? 'try-out btn-group' : 'try-out' },
      n
        ? Xe.default.createElement(
            'button',
            { className: 'btn try-out__btn cancel', onClick: t },
            'Cancel',
          )
        : Xe.default.createElement(
            'button',
            { className: 'btn try-out__btn', onClick: e },
            'Try it out ',
          ),
      s &&
        Xe.default.createElement(
          'button',
          { className: 'btn try-out__btn reset', onClick: r },
          'Reset',
        ),
    )
  }
}
class VersionPragmaFilter extends Xe.default.PureComponent {
  static defaultProps = { alsoShow: null, children: null, bypass: !1 }
  render() {
    const { bypass: e, isSwagger2: t, isOAS3: r, alsoShow: n } = this.props
    return e
      ? Xe.default.createElement('div', null, this.props.children)
      : t && r
      ? Xe.default.createElement(
          'div',
          { className: 'version-pragma' },
          n,
          Xe.default.createElement(
            'div',
            {
              className:
                'version-pragma__message version-pragma__message--ambiguous',
            },
            Xe.default.createElement(
              'div',
              null,
              Xe.default.createElement(
                'h3',
                null,
                'Unable to render this definition',
              ),
              Xe.default.createElement(
                'p',
                null,
                Xe.default.createElement('code', null, 'swagger'),
                ' and ',
                Xe.default.createElement('code', null, 'openapi'),
                ' fields cannot be present in the same Swagger or OpenAPI definition. Please remove one of the fields.',
              ),
              Xe.default.createElement(
                'p',
                null,
                'Supported version fields are ',
                Xe.default.createElement('code', null, 'swagger: ', '"2.0"'),
                ' and those that match ',
                Xe.default.createElement('code', null, 'openapi: 3.0.n'),
                ' (for example, ',
                Xe.default.createElement('code', null, 'openapi: 3.0.0'),
                ').',
              ),
            ),
          ),
        )
      : t || r
      ? Xe.default.createElement('div', null, this.props.children)
      : Xe.default.createElement(
          'div',
          { className: 'version-pragma' },
          n,
          Xe.default.createElement(
            'div',
            {
              className:
                'version-pragma__message version-pragma__message--missing',
            },
            Xe.default.createElement(
              'div',
              null,
              Xe.default.createElement(
                'h3',
                null,
                'Unable to render this definition',
              ),
              Xe.default.createElement(
                'p',
                null,
                'The provided definition does not specify a valid version field.',
              ),
              Xe.default.createElement(
                'p',
                null,
                'Please indicate a valid Swagger or OpenAPI version field. Supported version fields are ',
                Xe.default.createElement('code', null, 'swagger: ', '"2.0"'),
                ' and those that match ',
                Xe.default.createElement('code', null, 'openapi: 3.0.n'),
                ' (for example, ',
                Xe.default.createElement('code', null, 'openapi: 3.0.0'),
                ').',
              ),
            ),
          ),
        )
  }
}
var version_stamp = ({ version: e }) =>
  Xe.default.createElement(
    'small',
    null,
    Xe.default.createElement('pre', { className: 'version' }, ' ', e, ' '),
  )
var openapi_version = ({ oasVersion: e }) =>
  Xe.default.createElement(
    'small',
    { className: 'version-stamp' },
    Xe.default.createElement('pre', { className: 'version' }, 'OAS ', e),
  )
var deep_link = ({ enabled: e, path: t, text: r }) =>
  Xe.default.createElement(
    'a',
    {
      className: 'nostyle',
      onClick: e ? e => e.preventDefault() : null,
      href: e ? `#/${t}` : null,
    },
    Xe.default.createElement('span', null, r),
  )
var svg_assets = () =>
    Xe.default.createElement(
      'div',
      null,
      Xe.default.createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          xmlnsXlink: 'http://www.w3.org/1999/xlink',
          className: 'svg-assets',
        },
        Xe.default.createElement(
          'defs',
          null,
          Xe.default.createElement(
            'symbol',
            { viewBox: '0 0 20 20', id: 'unlocked' },
            Xe.default.createElement('path', {
              d: 'M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z',
            }),
          ),
          Xe.default.createElement(
            'symbol',
            { viewBox: '0 0 20 20', id: 'locked' },
            Xe.default.createElement('path', {
              d: 'M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z',
            }),
          ),
          Xe.default.createElement(
            'symbol',
            { viewBox: '0 0 20 20', id: 'close' },
            Xe.default.createElement('path', {
              d: 'M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z',
            }),
          ),
          Xe.default.createElement(
            'symbol',
            { viewBox: '0 0 20 20', id: 'large-arrow' },
            Xe.default.createElement('path', {
              d: 'M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z',
            }),
          ),
          Xe.default.createElement(
            'symbol',
            { viewBox: '0 0 20 20', id: 'large-arrow-down' },
            Xe.default.createElement('path', {
              d: 'M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z',
            }),
          ),
          Xe.default.createElement(
            'symbol',
            { viewBox: '0 0 20 20', id: 'large-arrow-up' },
            Xe.default.createElement('path', {
              d: 'M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z',
            }),
          ),
          Xe.default.createElement(
            'symbol',
            { viewBox: '0 0 24 24', id: 'jump-to' },
            Xe.default.createElement('path', {
              d: 'M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z',
            }),
          ),
          Xe.default.createElement(
            'symbol',
            { viewBox: '0 0 24 24', id: 'expand' },
            Xe.default.createElement('path', {
              d: 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z',
            }),
          ),
          Xe.default.createElement(
            'symbol',
            { viewBox: '0 0 15 16', id: 'copy' },
            Xe.default.createElement(
              'g',
              { transform: 'translate(2, -1)' },
              Xe.default.createElement('path', {
                fill: '#ffffff',
                fillRule: 'evenodd',
                d: 'M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z',
              }),
            ),
          ),
        ),
      ),
    ),
  Ma = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    Remarkable: function () {
      return ye.Remarkable
    },
  }),
  qa = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    linkify: function () {
      return Ee.linkify
    },
  }),
  La = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return Se.default
    },
  })
La.default.addHook &&
  La.default.addHook('beforeSanitizeElements', function (e) {
    return e.href && e.setAttribute('rel', 'noopener noreferrer'), e
  })
var Da = function Markdown({
  source: e,
  className: t = '',
  getConfigs: r = () => ({ useUnsafeMarkdown: !1 }),
}) {
  if ('string' != typeof e) return null
  const n = new Ma.Remarkable({
    html: !0,
    typographer: !0,
    breaks: !0,
    linkTarget: '_blank',
  }).use(qa.linkify)
  n.core.ruler.disable(['replacements', 'smartquotes'])
  const { useUnsafeMarkdown: a } = r(),
    o = n.render(e),
    s = sanitizer(o, { useUnsafeMarkdown: a })
  return e && o && s
    ? Xe.default.createElement('div', {
        className: (0, _r.default)(t, 'markdown'),
        dangerouslySetInnerHTML: { __html: s },
      })
    : null
}
function sanitizer(e, { useUnsafeMarkdown: t = !1 } = {}) {
  const r = t,
    n = t ? [] : ['style', 'class']
  return (
    t &&
      !sanitizer.hasWarnedAboutDeprecation &&
      (console.warn(
        'useUnsafeMarkdown display configuration parameter is deprecated since >3.26.0 and will be removed in v4.0.0.',
      ),
      (sanitizer.hasWarnedAboutDeprecation = !0)),
    La.default.sanitize(e, {
      ADD_ATTR: ['target'],
      FORBID_TAGS: ['style', 'form'],
      ALLOW_DATA_ATTR: r,
      FORBID_ATTR: n,
    })
  )
}
sanitizer.hasWarnedAboutDeprecation = !1
class BaseLayout extends Xe.default.Component {
  render() {
    const { errSelectors: e, specSelectors: t, getComponent: r } = this.props,
      n = r('SvgAssets'),
      a = r('InfoContainer', !0),
      o = r('VersionPragmaFilter'),
      s = r('operations', !0),
      l = r('Models', !0),
      i = r('Webhooks', !0),
      c = r('Row'),
      u = r('Col'),
      d = r('errors', !0),
      p = r('ServersContainer', !0),
      m = r('SchemesContainer', !0),
      f = r('AuthorizeBtnContainer', !0),
      h = r('FilterContainer', !0),
      g = t.isSwagger2(),
      y = t.isOAS3(),
      S = t.isOAS31(),
      _ = !t.specStr(),
      v = t.loadingStatus()
    let b = null
    if (
      ('loading' === v &&
        (b = Xe.default.createElement(
          'div',
          { className: 'info' },
          Xe.default.createElement(
            'div',
            { className: 'loading-container' },
            Xe.default.createElement('div', { className: 'loading' }),
          ),
        )),
      'failed' === v &&
        (b = Xe.default.createElement(
          'div',
          { className: 'info' },
          Xe.default.createElement(
            'div',
            { className: 'loading-container' },
            Xe.default.createElement(
              'h4',
              { className: 'title' },
              'Failed to load API definition.',
            ),
            Xe.default.createElement(d, null),
          ),
        )),
      'failedConfig' === v)
    ) {
      const t = e.lastError(),
        r = t ? t.get('message') : ''
      b = Xe.default.createElement(
        'div',
        { className: 'info failed-config' },
        Xe.default.createElement(
          'div',
          { className: 'loading-container' },
          Xe.default.createElement(
            'h4',
            { className: 'title' },
            'Failed to load remote configuration.',
          ),
          Xe.default.createElement('p', null, r),
        ),
      )
    }
    if (
      (!b &&
        _ &&
        (b = Xe.default.createElement(
          'h4',
          null,
          'No API definition provided.',
        )),
      b)
    )
      return Xe.default.createElement(
        'div',
        { className: 'swagger-ui' },
        Xe.default.createElement('div', { className: 'loading-container' }, b),
      )
    const w = t.servers(),
      C = t.schemes(),
      x = w && w.size,
      O = C && C.size,
      k = !!t.securityDefinitions()
    return Xe.default.createElement(
      'div',
      { className: 'swagger-ui' },
      Xe.default.createElement(n, null),
      Xe.default.createElement(
        o,
        {
          isSwagger2: g,
          isOAS3: y,
          alsoShow: Xe.default.createElement(d, null),
        },
        Xe.default.createElement(d, null),
        Xe.default.createElement(
          c,
          { className: 'information-container' },
          Xe.default.createElement(
            u,
            { mobile: 12 },
            Xe.default.createElement(a, null),
          ),
        ),
        x || O || k
          ? Xe.default.createElement(
              'div',
              { className: 'scheme-container' },
              Xe.default.createElement(
                u,
                { className: 'schemes wrapper', mobile: 12 },
                x || O
                  ? Xe.default.createElement(
                      'div',
                      { className: 'schemes-server-container' },
                      x ? Xe.default.createElement(p, null) : null,
                      O ? Xe.default.createElement(m, null) : null,
                    )
                  : null,
                k ? Xe.default.createElement(f, null) : null,
              ),
            )
          : null,
        Xe.default.createElement(h, null),
        Xe.default.createElement(
          c,
          null,
          Xe.default.createElement(
            u,
            { mobile: 12, desktop: 12 },
            Xe.default.createElement(s, null),
          ),
        ),
        S &&
          Xe.default.createElement(
            c,
            { className: 'webhooks-container' },
            Xe.default.createElement(
              u,
              { mobile: 12, desktop: 12 },
              Xe.default.createElement(i, null),
            ),
          ),
        Xe.default.createElement(
          c,
          null,
          Xe.default.createElement(
            u,
            { mobile: 12, desktop: 12 },
            Xe.default.createElement(l, null),
          ),
        ),
      ),
    )
  }
}
var core_components = () => ({
  components: {
    App: Oa,
    authorizationPopup: AuthorizationPopup,
    authorizeBtn: AuthorizeBtn,
    AuthorizeBtnContainer,
    authorizeOperationBtn: AuthorizeOperationBtn,
    auths: Auths,
    AuthItem: auth_item_Auths,
    authError: AuthError,
    oauth2: Oauth2,
    apiKeyAuth: ApiKeyAuth,
    basicAuth: BasicAuth,
    clear: Clear,
    liveResponse: LiveResponse,
    InitializedInput,
    info: Ta,
    InfoContainer,
    InfoUrl,
    InfoBasePath,
    Contact: Ba,
    License: ja,
    JumpToPath,
    CopyToClipboardBtn,
    onlineValidatorBadge: OnlineValidatorBadge,
    operations: Operations,
    operation: Operation,
    OperationSummary,
    OperationSummaryMethod,
    OperationSummaryPath,
    responses: Responses,
    response: Response,
    ResponseExtension: response_extension,
    responseBody: ResponseBody,
    parameters: Parameters,
    parameterRow: ParameterRow,
    execute: Execute,
    headers: headers_Headers,
    errors: Errors,
    contentType: ContentType,
    overview: Overview,
    footer: Footer,
    FilterContainer,
    ParamBody,
    curl: Curl,
    Property: property,
    TryItOutButton,
    Markdown: Da,
    BaseLayout,
    VersionPragmaFilter,
    VersionStamp: version_stamp,
    OperationExt: operation_extensions,
    OperationExtRow: operation_extension_row,
    ParameterExt: parameter_extension,
    ParameterIncludeEmpty,
    OperationTag,
    OperationContainer,
    OpenAPIVersion: openapi_version,
    DeepLink: deep_link,
    SvgAssets: svg_assets,
    Example,
    ExamplesSelect,
    ExamplesSelectValueRetainer,
  },
})
var form_components = () => ({ components: { ...Ke } })
var base = () => [
  configsPlugin,
  util,
  logs,
  view,
  view_legacy,
  plugins_spec,
  err,
  icons,
  plugins_layout,
  json_schema_5,
  json_schema_5_samples,
  core_components,
  form_components,
  swagger_client,
  auth,
  downloadUrlPlugin,
  deep_linking,
  filter,
  on_complete,
  plugins_request_snippets,
  syntax_highlighting,
  versions,
  safe_render(),
]
const Ua = (0, Qe.Map)()
function onlyOAS3(e) {
  return (t, r) =>
    (...n) => {
      if (r.getSystem().specSelectors.isOAS3()) {
        const t = e(...n)
        return 'function' == typeof t ? t(r) : t
      }
      return t(...n)
    }
}
const $a = onlyOAS3((0, Jr.default)(null)),
  Ja = onlyOAS3((e, t) => e => e.getSystem().specSelectors.findSchema(t)),
  Va = onlyOAS3(() => e => {
    const t = e
      .getSystem()
      .specSelectors.specJson()
      .getIn(['components', 'schemas'])
    return Qe.Map.isMap(t) ? t : Ua
  }),
  Ka = onlyOAS3(
    () => e => e.getSystem().specSelectors.specJson().hasIn(['servers', 0]),
  ),
  za = onlyOAS3(
    (0, Dt.createSelector)(
      Yr,
      e => e.getIn(['components', 'securitySchemes']) || null,
    ),
  ),
  wrap_selectors_validOperationMethods =
    (e, t) =>
    (r, ...n) =>
      t.specSelectors.isOAS3()
        ? t.oas3Selectors.validOperationMethods()
        : e(...n),
  Fa = $a,
  Wa = $a,
  Ha = $a,
  Ga = $a,
  Xa = $a
const Ya = (function wrap_selectors_onlyOAS3(e) {
  return (t, r) =>
    (...n) => {
      if (r.getSystem().specSelectors.isOAS3()) {
        let t = r
          .getState()
          .getIn(['spec', 'resolvedSubtrees', 'components', 'securitySchemes'])
        return e(r, t, ...n)
      }
      return t(...n)
    }
})(
  (0, Dt.createSelector)(
    e => e,
    ({ specSelectors: e }) => e.securityDefinitions(),
    (e, t) => {
      let r = (0, Qe.List)()
      return t
        ? (t.entrySeq().forEach(([e, t]) => {
            const n = t.get('type')
            if (
              ('oauth2' === n &&
                t
                  .get('flows')
                  .entrySeq()
                  .forEach(([n, a]) => {
                    let o = (0, Qe.fromJS)({
                      flow: n,
                      authorizationUrl: a.get('authorizationUrl'),
                      tokenUrl: a.get('tokenUrl'),
                      scopes: a.get('scopes'),
                      type: t.get('type'),
                      description: t.get('description'),
                    })
                    r = r.push(new Qe.Map({ [e]: o.filter(e => void 0 !== e) }))
                  }),
              ('http' !== n && 'apiKey' !== n) ||
                (r = r.push(new Qe.Map({ [e]: t }))),
              'openIdConnect' === n && t.get('openIdConnectData'))
            ) {
              let n = t.get('openIdConnectData')
              ;(
                n.get('grant_types_supported') || [
                  'authorization_code',
                  'implicit',
                ]
              ).forEach(a => {
                let o =
                    n.get('scopes_supported') &&
                    n
                      .get('scopes_supported')
                      .reduce((e, t) => e.set(t, ''), new Qe.Map()),
                  s = (0, Qe.fromJS)({
                    flow: a,
                    authorizationUrl: n.get('authorization_endpoint'),
                    tokenUrl: n.get('token_endpoint'),
                    scopes: o,
                    type: 'oauth2',
                    openIdConnectUrl: t.get('openIdConnectUrl'),
                  })
                r = r.push(new Qe.Map({ [e]: s.filter(e => void 0 !== e) }))
              })
            }
          }),
          r)
        : r
    },
  ),
)
function OAS3ComponentWrapFactory(e) {
  return (t, r) => n =>
    'function' == typeof r.specSelectors?.isOAS3
      ? r.specSelectors.isOAS3()
        ? Xe.default.createElement(e, (0, cr.default)({}, n, r, { Ori: t }))
        : Xe.default.createElement(t, n)
      : (console.warn("OAS3 wrapper: couldn't get spec"), null)
}
const Qa = (0, Qe.Map)(),
  selectors_isSwagger2 = () => e =>
    (function isSwagger2(e) {
      const t = e.get('swagger')
      return 'string' == typeof t && '2.0' === t
    })(e.getSystem().specSelectors.specJson()),
  selectors_isOAS30 = () => e =>
    (function isOAS30(e) {
      const t = e.get('openapi')
      return 'string' == typeof t && /^3\.0\.([0123])(?:-rc[012])?$/.test(t)
    })(e.getSystem().specSelectors.specJson()),
  selectors_isOAS3 = () => e => e.getSystem().specSelectors.isOAS30()
function selectors_onlyOAS3(e) {
  return (t, ...r) =>
    n => {
      if (n.specSelectors.isOAS3()) {
        const a = e(t, ...r)
        return 'function' == typeof a ? a(n) : a
      }
      return null
    }
}
const Za = selectors_onlyOAS3(
    () => e => e.specSelectors.specJson().get('servers', Qa),
  ),
  findSchema = (e, t) => {
    const r = e.getIn(['resolvedSubtrees', 'components', 'schemas', t], null),
      n = e.getIn(['json', 'components', 'schemas', t], null)
    return r || n || null
  },
  eo = selectors_onlyOAS3((e, { callbacks: t, specPath: r }) => e => {
    const n = e.specSelectors.validOperationMethods()
    return Qe.Map.isMap(t)
      ? t
          .reduce((e, t, a) => {
            if (!Qe.Map.isMap(t)) return e
            const o = t.reduce((e, t, o) => {
              if (!Qe.Map.isMap(t)) return e
              const s = t
                .entrySeq()
                .filter(([e]) => n.includes(e))
                .map(([e, t]) => ({
                  operation: (0, Qe.Map)({ operation: t }),
                  method: e,
                  path: o,
                  callbackName: a,
                  specPath: r.concat([a, o, e]),
                }))
              return e.concat(s)
            }, (0, Qe.List)())
            return e.concat(o)
          }, (0, Qe.List)())
          .groupBy(e => e.callbackName)
          .map(e => e.toArray())
          .toObject()
      : {}
  })
var callbacks = ({
  callbacks: e,
  specPath: t,
  specSelectors: r,
  getComponent: n,
}) => {
  const a = r.callbacksOperations({ callbacks: e, specPath: t }),
    o = Object.keys(a),
    s = n('OperationContainer', !0)
  return 0 === o.length
    ? Xe.default.createElement('span', null, 'No callbacks')
    : Xe.default.createElement(
        'div',
        null,
        o.map(e =>
          Xe.default.createElement(
            'div',
            { key: `${e}` },
            Xe.default.createElement('h2', null, e),
            a[e].map(t =>
              Xe.default.createElement(s, {
                key: `${e}-${t.path}-${t.method}`,
                op: t.operation,
                tag: 'callbacks',
                method: t.method,
                path: t.path,
                specPath: t.specPath,
                allowTryItOut: !1,
              }),
            ),
          ),
        ),
      )
}
const getDefaultRequestBodyValue = (e, t, r, n) => {
  const a = e.getIn(['content', t]) ?? (0, Qe.OrderedMap)(),
    o = a.get('schema', (0, Qe.OrderedMap)()).toJS(),
    s = void 0 !== a.get('examples'),
    l = a.get('example'),
    i = s ? a.getIn(['examples', r, 'value']) : l
  return stringify(n.getSampleSchema(o, t, { includeWriteOnly: !0 }, i))
}
var request_body = ({
  userHasEditedBody: e,
  requestBody: t,
  requestBodyValue: r,
  requestBodyInclusionSetting: n,
  requestBodyErrors: a,
  getComponent: o,
  getConfigs: s,
  specSelectors: l,
  fn: i,
  contentType: c,
  isExecute: u,
  specPath: d,
  onChange: p,
  onChangeIncludeEmpty: m,
  activeExamplesKey: f,
  updateActiveExamplesKey: h,
  setRetainRequestBodyValueFlag: g,
}) => {
  const handleFile = e => {
      p(e.target.files[0])
    },
    setIsIncludedOptions = e => {
      let t = { key: e, shouldDispatchInit: !1, defaultValue: !0 }
      return (
        'no value' === n.get(e, 'no value') && (t.shouldDispatchInit = !0), t
      )
    },
    y = o('Markdown', !0),
    S = o('modelExample'),
    _ = o('RequestBodyEditor'),
    v = o('HighlightCode', !0),
    b = o('ExamplesSelectValueRetainer'),
    w = o('Example'),
    C = o('ParameterIncludeEmpty'),
    { showCommonExtensions: x } = s(),
    O = t?.get('description') ?? null,
    k = t?.get('content') ?? new Qe.OrderedMap()
  c = c || k.keySeq().first() || ''
  const N = k.get(c) ?? (0, Qe.OrderedMap)(),
    A = N.get('schema', (0, Qe.OrderedMap)()),
    I = N.get('examples', null),
    R = I?.map((e, r) => {
      const n = e?.get('value', null)
      return (
        n && (e = e.set('value', getDefaultRequestBodyValue(t, c, r, i), n)), e
      )
    })
  if (((a = Qe.List.isList(a) ? a : (0, Qe.List)()), !N.size)) return null
  const T = 'object' === N.getIn(['schema', 'type']),
    B = 'binary' === N.getIn(['schema', 'format']),
    j = 'base64' === N.getIn(['schema', 'format'])
  if (
    'application/octet-stream' === c ||
    0 === c.indexOf('image/') ||
    0 === c.indexOf('audio/') ||
    0 === c.indexOf('video/') ||
    B ||
    j
  ) {
    const e = o('Input')
    return u
      ? Xe.default.createElement(e, { type: 'file', onChange: handleFile })
      : Xe.default.createElement(
          'i',
          null,
          'Example values are not available for ',
          Xe.default.createElement('code', null, c),
          ' media types.',
        )
  }
  if (
    T &&
    ('application/x-www-form-urlencoded' === c ||
      0 === c.indexOf('multipart/')) &&
    A.get('properties', (0, Qe.OrderedMap)()).size > 0
  ) {
    const e = o('JsonSchemaForm'),
      t = o('ParameterExt'),
      s = A.get('properties', (0, Qe.OrderedMap)())
    return (
      (r = Qe.Map.isMap(r) ? r : (0, Qe.OrderedMap)()),
      Xe.default.createElement(
        'div',
        { className: 'table-container' },
        O && Xe.default.createElement(y, { source: O }),
        Xe.default.createElement(
          'table',
          null,
          Xe.default.createElement(
            'tbody',
            null,
            Qe.Map.isMap(s) &&
              s.entrySeq().map(([s, l]) => {
                if (l.get('readOnly')) return
                const c = l.get('oneOf')?.get(0)?.toJS(),
                  d = l.get('anyOf')?.get(0)?.toJS()
                l = (0, Qe.fromJS)(i.mergeJsonSchema(l.toJS(), c ?? d ?? {}))
                let f = x ? getCommonExtensions(l) : null
                const h = A.get('required', (0, Qe.List)()).includes(s),
                  g = l.get('type'),
                  S = l.get('format'),
                  _ = l.get('description'),
                  v = r.getIn([s, 'value']),
                  b = r.getIn([s, 'errors']) || a,
                  w = n.get(s) || !1
                let O = i.getSampleSchema(l, !1, { includeWriteOnly: !0 })
                !1 === O && (O = 'false'),
                  0 === O && (O = '0'),
                  'string' != typeof O && 'object' === g && (O = stringify(O)),
                  'string' == typeof O && 'array' === g && (O = JSON.parse(O))
                const k = 'string' === g && ('binary' === S || 'base64' === S)
                return Xe.default.createElement(
                  'tr',
                  { key: s, className: 'parameters', 'data-property-name': s },
                  Xe.default.createElement(
                    'td',
                    { className: 'parameters-col_name' },
                    Xe.default.createElement(
                      'div',
                      {
                        className: h
                          ? 'parameter__name required'
                          : 'parameter__name',
                      },
                      s,
                      h ? Xe.default.createElement('span', null, ' *') : null,
                    ),
                    Xe.default.createElement(
                      'div',
                      { className: 'parameter__type' },
                      g,
                      S &&
                        Xe.default.createElement(
                          'span',
                          { className: 'prop-format' },
                          '($',
                          S,
                          ')',
                        ),
                      x && f.size
                        ? f
                            .entrySeq()
                            .map(([e, r]) =>
                              Xe.default.createElement(t, {
                                key: `${e}-${r}`,
                                xKey: e,
                                xVal: r,
                              }),
                            )
                        : null,
                    ),
                    Xe.default.createElement(
                      'div',
                      { className: 'parameter__deprecated' },
                      l.get('deprecated') ? 'deprecated' : null,
                    ),
                  ),
                  Xe.default.createElement(
                    'td',
                    { className: 'parameters-col_description' },
                    Xe.default.createElement(y, { source: _ }),
                    u
                      ? Xe.default.createElement(
                          'div',
                          null,
                          Xe.default.createElement(e, {
                            fn: i,
                            dispatchInitialValue: !k,
                            schema: l,
                            description: s,
                            getComponent: o,
                            value: void 0 === v ? O : v,
                            required: h,
                            errors: b,
                            onChange: e => {
                              p(e, [s])
                            },
                          }),
                          h
                            ? null
                            : Xe.default.createElement(C, {
                                onChange: e => m(s, e),
                                isIncluded: w,
                                isIncludedOptions: setIsIncludedOptions(s),
                                isDisabled: Array.isArray(v)
                                  ? 0 !== v.length
                                  : !isEmptyValue(v),
                              }),
                        )
                      : null,
                  ),
                )
              }),
          ),
        ),
      )
    )
  }
  const P = getDefaultRequestBodyValue(t, c, f, i)
  let M = null
  return (
    getKnownSyntaxHighlighterLanguage(P) && (M = 'json'),
    Xe.default.createElement(
      'div',
      null,
      O && Xe.default.createElement(y, { source: O }),
      R
        ? Xe.default.createElement(b, {
            userHasEditedBody: e,
            examples: R,
            currentKey: f,
            currentUserInputValue: r,
            onSelect: e => {
              h(e)
            },
            updateValue: p,
            defaultToFirstExample: !0,
            getComponent: o,
            setRetainRequestBodyValueFlag: g,
          })
        : null,
      u
        ? Xe.default.createElement(
            'div',
            null,
            Xe.default.createElement(_, {
              value: r,
              errors: a,
              defaultValue: P,
              onChange: p,
              getComponent: o,
            }),
          )
        : Xe.default.createElement(S, {
            getComponent: o,
            getConfigs: s,
            specSelectors: l,
            expandDepth: 1,
            isExecute: u,
            schema: N.get('schema'),
            specPath: d.push('content', c),
            example: Xe.default.createElement(
              v,
              { className: 'body-param__example', language: M },
              stringify(r) || P,
            ),
            includeWriteOnly: !0,
          }),
      R
        ? Xe.default.createElement(w, {
            example: R.get(f),
            getComponent: o,
            getConfigs: s,
          })
        : null,
    )
  )
}
class operation_link_OperationLink extends Xe.Component {
  render() {
    const { link: e, name: t, getComponent: r } = this.props,
      n = r('Markdown', !0)
    let a = e.get('operationId') || e.get('operationRef'),
      o = e.get('parameters') && e.get('parameters').toJS(),
      s = e.get('description')
    return Xe.default.createElement(
      'div',
      { className: 'operation-link' },
      Xe.default.createElement(
        'div',
        { className: 'description' },
        Xe.default.createElement(
          'b',
          null,
          Xe.default.createElement('code', null, t),
        ),
        s ? Xe.default.createElement(n, { source: s }) : null,
      ),
      Xe.default.createElement(
        'pre',
        null,
        'Operation `',
        a,
        '`',
        Xe.default.createElement('br', null),
        Xe.default.createElement('br', null),
        'Parameters ',
        (function padString(e, t) {
          if ('string' != typeof t) return ''
          return t
            .split('\n')
            .map((t, r) => (r > 0 ? Array(e + 1).join(' ') + t : t))
            .join('\n')
        })(0, JSON.stringify(o, null, 2)) || '{}',
        Xe.default.createElement('br', null),
      ),
    )
  }
}
var to = operation_link_OperationLink
var components_servers = ({
  servers: e,
  currentServer: t,
  setSelectedServer: r,
  setServerVariableValue: n,
  getServerVariable: a,
  getEffectiveServerValue: o,
}) => {
  const s =
      (e.find(e => e.get('url') === t) || (0, Qe.OrderedMap)()).get(
        'variables',
      ) || (0, Qe.OrderedMap)(),
    l = 0 !== s.size
  ;(0, Xe.useEffect)(() => {
    t || r(e.first()?.get('url'))
  }, []),
    (0, Xe.useEffect)(() => {
      const a = e.find(e => e.get('url') === t)
      if (!a) return void r(e.first().get('url'))
      ;(a.get('variables') || (0, Qe.OrderedMap)()).map((e, r) => {
        n({ server: t, key: r, val: e.get('default') || '' })
      })
    }, [t, e])
  const i = (0, Xe.useCallback)(
      e => {
        r(e.target.value)
      },
      [r],
    ),
    c = (0, Xe.useCallback)(
      e => {
        const r = e.target.getAttribute('data-variable'),
          a = e.target.value
        n({ server: t, key: r, val: a })
      },
      [n, t],
    )
  return Xe.default.createElement(
    'div',
    { className: 'servers' },
    Xe.default.createElement(
      'label',
      { htmlFor: 'servers' },
      Xe.default.createElement(
        'select',
        { onChange: i, value: t, id: 'servers' },
        e
          .valueSeq()
          .map(e =>
            Xe.default.createElement(
              'option',
              { value: e.get('url'), key: e.get('url') },
              e.get('url'),
              e.get('description') && ` - ${e.get('description')}`,
            ),
          )
          .toArray(),
      ),
    ),
    l &&
      Xe.default.createElement(
        'div',
        null,
        Xe.default.createElement(
          'div',
          { className: 'computed-url' },
          'Computed URL:',
          Xe.default.createElement('code', null, o(t)),
        ),
        Xe.default.createElement('h4', null, 'Server variables'),
        Xe.default.createElement(
          'table',
          null,
          Xe.default.createElement(
            'tbody',
            null,
            s.entrySeq().map(([e, r]) =>
              Xe.default.createElement(
                'tr',
                { key: e },
                Xe.default.createElement('td', null, e),
                Xe.default.createElement(
                  'td',
                  null,
                  r.get('enum')
                    ? Xe.default.createElement(
                        'select',
                        { 'data-variable': e, onChange: c },
                        r
                          .get('enum')
                          .map(r =>
                            Xe.default.createElement(
                              'option',
                              { selected: r === a(t, e), key: r, value: r },
                              r,
                            ),
                          ),
                      )
                    : Xe.default.createElement('input', {
                        type: 'text',
                        value: a(t, e) || '',
                        onChange: c,
                        'data-variable': e,
                      }),
                ),
              ),
            ),
          ),
        ),
      ),
  )
}
class ServersContainer extends Xe.default.Component {
  render() {
    const {
        specSelectors: e,
        oas3Selectors: t,
        oas3Actions: r,
        getComponent: n,
      } = this.props,
      a = e.servers(),
      o = n('Servers')
    return a && a.size
      ? Xe.default.createElement(
          'div',
          null,
          Xe.default.createElement(
            'span',
            { className: 'servers-title' },
            'Servers',
          ),
          Xe.default.createElement(o, {
            servers: a,
            currentServer: t.selectedServer(),
            setSelectedServer: r.setSelectedServer,
            setServerVariableValue: r.setServerVariableValue,
            getServerVariable: t.serverVariableValue,
            getEffectiveServerValue: t.serverEffectiveValue,
          }),
        )
      : null
  }
}
const ro = Function.prototype
class RequestBodyEditor extends Xe.PureComponent {
  static defaultProps = { onChange: ro, userHasEditedBody: !1 }
  constructor(e, t) {
    super(e, t),
      (this.state = { value: stringify(e.value) || e.defaultValue }),
      e.onChange(e.value)
  }
  applyDefaultValue = e => {
    const { onChange: t, defaultValue: r } = e || this.props
    return this.setState({ value: r }), t(r)
  }
  onChange = e => {
    this.props.onChange(stringify(e))
  }
  onDomChange = e => {
    const t = e.target.value
    this.setState({ value: t }, () => this.onChange(t))
  }
  UNSAFE_componentWillReceiveProps(e) {
    this.props.value !== e.value &&
      e.value !== this.state.value &&
      this.setState({ value: stringify(e.value) }),
      !e.value &&
        e.defaultValue &&
        this.state.value &&
        this.applyDefaultValue(e)
  }
  render() {
    let { getComponent: e, errors: t } = this.props,
      { value: r } = this.state,
      n = t.size > 0
    const a = e('TextArea')
    return Xe.default.createElement(
      'div',
      { className: 'body-param' },
      Xe.default.createElement(a, {
        className: (0, _r.default)('body-param__text', { invalid: n }),
        title: t.size ? t.join(', ') : '',
        value: r,
        onChange: this.onDomChange,
      }),
    )
  }
}
class HttpAuth extends Xe.default.Component {
  constructor(e, t) {
    super(e, t)
    let { name: r, schema: n } = this.props,
      a = this.getValue()
    this.state = { name: r, schema: n, value: a }
  }
  getValue() {
    let { name: e, authorized: t } = this.props
    return t && t.getIn([e, 'value'])
  }
  onChange = e => {
    let { onChange: t } = this.props,
      { value: r, name: n } = e.target,
      a = Object.assign({}, this.state.value)
    n ? (a[n] = r) : (a = r), this.setState({ value: a }, () => t(this.state))
  }
  render() {
    let { schema: e, getComponent: t, errSelectors: r, name: n } = this.props
    const a = t('Input'),
      o = t('Row'),
      s = t('Col'),
      l = t('authError'),
      i = t('Markdown', !0),
      c = t('JumpToPath', !0),
      u = (e.get('scheme') || '').toLowerCase()
    let d = this.getValue(),
      p = r.allErrors().filter(e => e.get('authId') === n)
    if ('basic' === u) {
      let t = d ? d.get('username') : null
      return Xe.default.createElement(
        'div',
        null,
        Xe.default.createElement(
          'h4',
          null,
          Xe.default.createElement('code', null, n || e.get('name')),
          '  (http, Basic)',
          Xe.default.createElement(c, { path: ['securityDefinitions', n] }),
        ),
        t && Xe.default.createElement('h6', null, 'Authorized'),
        Xe.default.createElement(
          o,
          null,
          Xe.default.createElement(i, { source: e.get('description') }),
        ),
        Xe.default.createElement(
          o,
          null,
          Xe.default.createElement(
            'label',
            { htmlFor: 'auth-basic-username' },
            'Username:',
          ),
          t
            ? Xe.default.createElement('code', null, ' ', t, ' ')
            : Xe.default.createElement(
                s,
                null,
                Xe.default.createElement(a, {
                  id: 'auth-basic-username',
                  type: 'text',
                  required: 'required',
                  name: 'username',
                  'aria-label': 'auth-basic-username',
                  onChange: this.onChange,
                  autoFocus: !0,
                }),
              ),
        ),
        Xe.default.createElement(
          o,
          null,
          Xe.default.createElement(
            'label',
            { htmlFor: 'auth-basic-password' },
            'Password:',
          ),
          t
            ? Xe.default.createElement('code', null, ' ****** ')
            : Xe.default.createElement(
                s,
                null,
                Xe.default.createElement(a, {
                  id: 'auth-basic-password',
                  autoComplete: 'new-password',
                  name: 'password',
                  type: 'password',
                  'aria-label': 'auth-basic-password',
                  onChange: this.onChange,
                }),
              ),
        ),
        p
          .valueSeq()
          .map((e, t) => Xe.default.createElement(l, { error: e, key: t })),
      )
    }
    return 'bearer' === u
      ? Xe.default.createElement(
          'div',
          null,
          Xe.default.createElement(
            'h4',
            null,
            Xe.default.createElement('code', null, n || e.get('name')),
            '  (http, Bearer)',
            Xe.default.createElement(c, { path: ['securityDefinitions', n] }),
          ),
          d && Xe.default.createElement('h6', null, 'Authorized'),
          Xe.default.createElement(
            o,
            null,
            Xe.default.createElement(i, { source: e.get('description') }),
          ),
          Xe.default.createElement(
            o,
            null,
            Xe.default.createElement(
              'label',
              { htmlFor: 'auth-bearer-value' },
              'Value:',
            ),
            d
              ? Xe.default.createElement('code', null, ' ****** ')
              : Xe.default.createElement(
                  s,
                  null,
                  Xe.default.createElement(a, {
                    id: 'auth-bearer-value',
                    type: 'text',
                    'aria-label': 'auth-bearer-value',
                    onChange: this.onChange,
                    autoFocus: !0,
                  }),
                ),
          ),
          p
            .valueSeq()
            .map((e, t) => Xe.default.createElement(l, { error: e, key: t })),
        )
      : Xe.default.createElement(
          'div',
          null,
          Xe.default.createElement(
            'em',
            null,
            Xe.default.createElement('b', null, n),
            ' HTTP authentication: unsupported scheme ',
            `'${u}'`,
          ),
        )
  }
}
class OperationServers extends Xe.default.Component {
  setSelectedServer = e => {
    const { path: t, method: r } = this.props
    return this.forceUpdate(), this.props.setSelectedServer(e, `${t}:${r}`)
  }
  setServerVariableValue = e => {
    const { path: t, method: r } = this.props
    return (
      this.forceUpdate(),
      this.props.setServerVariableValue({ ...e, namespace: `${t}:${r}` })
    )
  }
  getSelectedServer = () => {
    const { path: e, method: t } = this.props
    return this.props.getSelectedServer(`${e}:${t}`)
  }
  getServerVariable = (e, t) => {
    const { path: r, method: n } = this.props
    return this.props.getServerVariable(
      { namespace: `${r}:${n}`, server: e },
      t,
    )
  }
  getEffectiveServerValue = e => {
    const { path: t, method: r } = this.props
    return this.props.getEffectiveServerValue({
      server: e,
      namespace: `${t}:${r}`,
    })
  }
  render() {
    const { operationServers: e, pathServers: t, getComponent: r } = this.props
    if (!e && !t) return null
    const n = r('Servers'),
      a = e || t,
      o = e ? 'operation' : 'path'
    return Xe.default.createElement(
      'div',
      { className: 'opblock-section operation-servers' },
      Xe.default.createElement(
        'div',
        { className: 'opblock-section-header' },
        Xe.default.createElement(
          'div',
          { className: 'tab-header' },
          Xe.default.createElement(
            'h4',
            { className: 'opblock-title' },
            'Servers',
          ),
        ),
      ),
      Xe.default.createElement(
        'div',
        { className: 'opblock-description-wrapper' },
        Xe.default.createElement(
          'h4',
          { className: 'message' },
          'These ',
          o,
          '-level options override the global server options.',
        ),
        Xe.default.createElement(n, {
          servers: a,
          currentServer: this.getSelectedServer(),
          setSelectedServer: this.setSelectedServer,
          setServerVariableValue: this.setServerVariableValue,
          getServerVariable: this.getServerVariable,
          getEffectiveServerValue: this.getEffectiveServerValue,
        }),
      ),
    )
  }
}
var no = {
  Callbacks: callbacks,
  HttpAuth,
  RequestBody: request_body,
  Servers: components_servers,
  ServersContainer,
  RequestBodyEditor,
  OperationServers,
  operationLink: to,
}
const ao = new Ma.Remarkable('commonmark')
ao.block.ruler.enable(['table']), ao.set({ linkTarget: '_blank' })
var oo = OAS3ComponentWrapFactory(
    ({
      source: e,
      className: t = '',
      getConfigs: r = () => ({ useUnsafeMarkdown: !1 }),
    }) => {
      if ('string' != typeof e) return null
      if (e) {
        const { useUnsafeMarkdown: n } = r(),
          a = sanitizer(ao.render(e), { useUnsafeMarkdown: n })
        let o
        return (
          'string' == typeof a && (o = a.trim()),
          Xe.default.createElement('div', {
            dangerouslySetInnerHTML: { __html: o },
            className: (0, _r.default)(t, 'renderedMarkdown'),
          })
        )
      }
      return null
    },
  ),
  so = OAS3ComponentWrapFactory(({ Ori: e, ...t }) => {
    const {
        schema: r,
        getComponent: n,
        errSelectors: a,
        authorized: o,
        onAuthChange: s,
        name: l,
      } = t,
      i = n('HttpAuth')
    return 'http' === r.get('type')
      ? Xe.default.createElement(i, {
          key: l,
          schema: r,
          name: l,
          errSelectors: a,
          authorized: o,
          getComponent: n,
          onChange: s,
        })
      : Xe.default.createElement(e, t)
  }),
  lo = OAS3ComponentWrapFactory(OnlineValidatorBadge)
class ModelComponent extends Xe.Component {
  render() {
    let { getConfigs: e, schema: t, Ori: r } = this.props,
      n = ['model-box'],
      a = null
    return (
      !0 === t.get('deprecated') &&
        (n.push('deprecated'),
        (a = Xe.default.createElement(
          'span',
          { className: 'model-deprecated-warning' },
          'Deprecated:',
        ))),
      Xe.default.createElement(
        'div',
        { className: n.join(' ') },
        a,
        Xe.default.createElement(
          r,
          (0, cr.default)({}, this.props, {
            getConfigs: e,
            depth: 1,
            expandDepth: this.props.expandDepth || 0,
          }),
        ),
      )
    )
  }
}
var io = OAS3ComponentWrapFactory(ModelComponent),
  co = OAS3ComponentWrapFactory(({ Ori: e, ...t }) => {
    const { schema: r, getComponent: n, errors: a, onChange: o } = t,
      s = r && r.get ? r.get('format') : null,
      l = r && r.get ? r.get('type') : null,
      i = n('Input')
    return l && 'string' === l && s && ('binary' === s || 'base64' === s)
      ? Xe.default.createElement(i, {
          type: 'file',
          className: a.length ? 'invalid' : '',
          title: a.length ? a : '',
          onChange: e => {
            o(e.target.files[0])
          },
          disabled: e.isDisabled,
        })
      : Xe.default.createElement(e, t)
  }),
  uo = {
    Markdown: oo,
    AuthItem: so,
    OpenAPIVersion: (function OAS30ComponentWrapFactory(e) {
      return (t, r) => n =>
        'function' == typeof r.specSelectors?.isOAS30
          ? r.specSelectors.isOAS30()
            ? Xe.default.createElement(e, (0, cr.default)({}, n, r, { Ori: t }))
            : Xe.default.createElement(t, n)
          : (console.warn("OAS30 wrapper: couldn't get spec"), null)
    })(e => {
      const { Ori: t } = e
      return Xe.default.createElement(t, { oasVersion: '3.0' })
    }),
    JsonSchema_string: co,
    model: io,
    onlineValidatorBadge: lo,
  }
const po = 'oas3_set_servers',
  mo = 'oas3_set_request_body_value',
  fo = 'oas3_set_request_body_retain_flag',
  ho = 'oas3_set_request_body_inclusion',
  go = 'oas3_set_active_examples_member',
  yo = 'oas3_set_request_content_type',
  Eo = 'oas3_set_response_content_type',
  So = 'oas3_set_server_variable_value',
  _o = 'oas3_set_request_body_validate_error',
  vo = 'oas3_clear_request_body_validate_error',
  bo = 'oas3_clear_request_body_value'
function setSelectedServer(e, t) {
  return { type: po, payload: { selectedServerUrl: e, namespace: t } }
}
function setRequestBodyValue({ value: e, pathMethod: t }) {
  return { type: mo, payload: { value: e, pathMethod: t } }
}
const setRetainRequestBodyValueFlag = ({ value: e, pathMethod: t }) => ({
  type: fo,
  payload: { value: e, pathMethod: t },
})
function setRequestBodyInclusion({ value: e, pathMethod: t, name: r }) {
  return { type: ho, payload: { value: e, pathMethod: t, name: r } }
}
function setActiveExamplesMember({
  name: e,
  pathMethod: t,
  contextType: r,
  contextName: n,
}) {
  return {
    type: go,
    payload: { name: e, pathMethod: t, contextType: r, contextName: n },
  }
}
function setRequestContentType({ value: e, pathMethod: t }) {
  return { type: yo, payload: { value: e, pathMethod: t } }
}
function setResponseContentType({ value: e, path: t, method: r }) {
  return { type: Eo, payload: { value: e, path: t, method: r } }
}
function setServerVariableValue({ server: e, namespace: t, key: r, val: n }) {
  return { type: So, payload: { server: e, namespace: t, key: r, val: n } }
}
const setRequestBodyValidateError = ({
    path: e,
    method: t,
    validationErrors: r,
  }) => ({ type: _o, payload: { path: e, method: t, validationErrors: r } }),
  clearRequestBodyValidateError = ({ path: e, method: t }) => ({
    type: vo,
    payload: { path: e, method: t },
  }),
  initRequestBodyValidateError = ({ pathMethod: e }) => ({
    type: vo,
    payload: { path: e[0], method: e[1] },
  }),
  clearRequestBodyValue = ({ pathMethod: e }) => ({
    type: bo,
    payload: { pathMethod: e },
  })
var wo = (function (e) {
  var t = {}
  return __webpack_require__.d(t, e), t
})({
  default: function () {
    return _e.default
  },
})
const oas3_selectors_onlyOAS3 =
  e =>
  (t, ...r) =>
  n => {
    if (n.getSystem().specSelectors.isOAS3()) {
      const a = e(t, ...r)
      return 'function' == typeof a ? a(n) : a
    }
    return null
  }
const Co = oas3_selectors_onlyOAS3((e, t) => {
    const r = t ? [t, 'selectedServer'] : ['selectedServer']
    return e.getIn(r) || ''
  }),
  xo = oas3_selectors_onlyOAS3(
    (e, t, r) => e.getIn(['requestData', t, r, 'bodyValue']) || null,
  ),
  Oo = oas3_selectors_onlyOAS3(
    (e, t, r) => e.getIn(['requestData', t, r, 'retainBodyValue']) || !1,
  ),
  selectDefaultRequestBodyValue = (e, t, r) => e => {
    const { oas3Selectors: n, specSelectors: a, fn: o } = e.getSystem()
    if (a.isOAS3()) {
      const e = n.requestContentType(t, r)
      if (e)
        return getDefaultRequestBodyValue(
          a.specResolvedSubtree(['paths', t, r, 'requestBody']),
          e,
          n.activeExamplesMember(t, r, 'requestBody', 'requestBody'),
          o,
        )
    }
    return null
  },
  ko = oas3_selectors_onlyOAS3((e, t, r) => e => {
    const { oas3Selectors: n, specSelectors: a, fn: o } = e
    let s = !1
    const l = n.requestContentType(t, r)
    let i = n.requestBodyValue(t, r)
    const c = a.specResolvedSubtree(['paths', t, r, 'requestBody'])
    if (!c) return !1
    if (
      (Qe.Map.isMap(i) &&
        (i = stringify(
          i
            .mapEntries(e =>
              Qe.Map.isMap(e[1]) ? [e[0], e[1].get('value')] : e,
            )
            .toJS(),
        )),
      Qe.List.isList(i) && (i = stringify(i)),
      l)
    ) {
      const e = getDefaultRequestBodyValue(
        c,
        l,
        n.activeExamplesMember(t, r, 'requestBody', 'requestBody'),
        o,
      )
      s = !!i && i !== e
    }
    return s
  }),
  No = oas3_selectors_onlyOAS3(
    (e, t, r) =>
      e.getIn(['requestData', t, r, 'bodyInclusion']) || (0, Qe.Map)(),
  ),
  Ao = oas3_selectors_onlyOAS3(
    (e, t, r) => e.getIn(['requestData', t, r, 'errors']) || null,
  ),
  Io = oas3_selectors_onlyOAS3(
    (e, t, r, n, a) =>
      e.getIn(['examples', t, r, n, a, 'activeExample']) || null,
  ),
  Ro = oas3_selectors_onlyOAS3(
    (e, t, r) => e.getIn(['requestData', t, r, 'requestContentType']) || null,
  ),
  To = oas3_selectors_onlyOAS3(
    (e, t, r) => e.getIn(['requestData', t, r, 'responseContentType']) || null,
  ),
  Bo = oas3_selectors_onlyOAS3((e, t, r) => {
    let n
    if ('string' != typeof t) {
      const { server: e, namespace: a } = t
      n = a ? [a, 'serverVariableValues', e, r] : ['serverVariableValues', e, r]
    } else {
      n = ['serverVariableValues', t, r]
    }
    return e.getIn(n) || null
  }),
  jo = oas3_selectors_onlyOAS3((e, t) => {
    let r
    if ('string' != typeof t) {
      const { server: e, namespace: n } = t
      r = n ? [n, 'serverVariableValues', e] : ['serverVariableValues', e]
    } else {
      r = ['serverVariableValues', t]
    }
    return e.getIn(r) || (0, Qe.OrderedMap)()
  }),
  Po = oas3_selectors_onlyOAS3((e, t) => {
    var r, n
    if ('string' != typeof t) {
      const { server: a, namespace: o } = t
      ;(n = a),
        (r = o
          ? e.getIn([o, 'serverVariableValues', n])
          : e.getIn(['serverVariableValues', n]))
    } else (n = t), (r = e.getIn(['serverVariableValues', n]))
    r = r || (0, Qe.OrderedMap)()
    let a = n
    return (
      r.map((e, t) => {
        a = a.replace(new RegExp(`{${(0, wo.default)(t)}}`, 'g'), e)
      }),
      a
    )
  }),
  Mo = (function validateRequestBodyIsRequired(e) {
    return (...t) =>
      r => {
        const n = r.getSystem().specSelectors.specJson()
        let a = [...t][1] || []
        return !n.getIn(['paths', ...a, 'requestBody', 'required']) || e(...t)
      }
  })((e, t) =>
    ((e, t) => ((t = t || []), !!e.getIn(['requestData', ...t, 'bodyValue'])))(
      e,
      t,
    ),
  ),
  validateShallowRequired = (
    e,
    {
      oas3RequiredRequestBodyContentType: t,
      oas3RequestContentType: r,
      oas3RequestBodyValue: n,
    },
  ) => {
    let a = []
    if (!Qe.Map.isMap(n)) return a
    let o = []
    return (
      Object.keys(t.requestContentType).forEach(e => {
        if (e === r) {
          t.requestContentType[e].forEach(e => {
            o.indexOf(e) < 0 && o.push(e)
          })
        }
      }),
      o.forEach(e => {
        n.getIn([e, 'value']) || a.push(e)
      }),
      a
    )
  },
  qo = (0, Jr.default)([
    'get',
    'put',
    'post',
    'delete',
    'options',
    'head',
    'patch',
    'trace',
  ])
var Lo = {
  [po]: (e, { payload: { selectedServerUrl: t, namespace: r } }) => {
    const n = r ? [r, 'selectedServer'] : ['selectedServer']
    return e.setIn(n, t)
  },
  [mo]: (e, { payload: { value: t, pathMethod: r } }) => {
    let [n, a] = r
    if (!Qe.Map.isMap(t)) return e.setIn(['requestData', n, a, 'bodyValue'], t)
    let o,
      s = e.getIn(['requestData', n, a, 'bodyValue']) || (0, Qe.Map)()
    Qe.Map.isMap(s) || (s = (0, Qe.Map)())
    const [...l] = t.keys()
    return (
      l.forEach(e => {
        let r = t.getIn([e])
        ;(s.has(e) && Qe.Map.isMap(r)) || (o = s.setIn([e, 'value'], r))
      }),
      e.setIn(['requestData', n, a, 'bodyValue'], o)
    )
  },
  [fo]: (e, { payload: { value: t, pathMethod: r } }) => {
    let [n, a] = r
    return e.setIn(['requestData', n, a, 'retainBodyValue'], t)
  },
  [ho]: (e, { payload: { value: t, pathMethod: r, name: n } }) => {
    let [a, o] = r
    return e.setIn(['requestData', a, o, 'bodyInclusion', n], t)
  },
  [go]: (
    e,
    { payload: { name: t, pathMethod: r, contextType: n, contextName: a } },
  ) => {
    let [o, s] = r
    return e.setIn(['examples', o, s, n, a, 'activeExample'], t)
  },
  [yo]: (e, { payload: { value: t, pathMethod: r } }) => {
    let [n, a] = r
    return e.setIn(['requestData', n, a, 'requestContentType'], t)
  },
  [Eo]: (e, { payload: { value: t, path: r, method: n } }) =>
    e.setIn(['requestData', r, n, 'responseContentType'], t),
  [So]: (e, { payload: { server: t, namespace: r, key: n, val: a } }) => {
    const o = r
      ? [r, 'serverVariableValues', t, n]
      : ['serverVariableValues', t, n]
    return e.setIn(o, a)
  },
  [_o]: (e, { payload: { path: t, method: r, validationErrors: n } }) => {
    let a = []
    if ((a.push('Required field is not provided'), n.missingBodyValue))
      return e.setIn(['requestData', t, r, 'errors'], (0, Qe.fromJS)(a))
    if (n.missingRequiredKeys && n.missingRequiredKeys.length > 0) {
      const { missingRequiredKeys: o } = n
      return e.updateIn(
        ['requestData', t, r, 'bodyValue'],
        (0, Qe.fromJS)({}),
        e => o.reduce((e, t) => e.setIn([t, 'errors'], (0, Qe.fromJS)(a)), e),
      )
    }
    return console.warn('unexpected result: SET_REQUEST_BODY_VALIDATE_ERROR'), e
  },
  [vo]: (e, { payload: { path: t, method: r } }) => {
    const n = e.getIn(['requestData', t, r, 'bodyValue'])
    if (!Qe.Map.isMap(n))
      return e.setIn(['requestData', t, r, 'errors'], (0, Qe.fromJS)([]))
    const [...a] = n.keys()
    return a
      ? e.updateIn(['requestData', t, r, 'bodyValue'], (0, Qe.fromJS)({}), e =>
          a.reduce((e, t) => e.setIn([t, 'errors'], (0, Qe.fromJS)([])), e),
        )
      : e
  },
  [bo]: (e, { payload: { pathMethod: t } }) => {
    let [r, n] = t
    const a = e.getIn(['requestData', r, n, 'bodyValue'])
    return a
      ? Qe.Map.isMap(a)
        ? e.setIn(['requestData', r, n, 'bodyValue'], (0, Qe.Map)())
        : e.setIn(['requestData', r, n, 'bodyValue'], '')
      : e
  },
}
function oas3() {
  return {
    components: no,
    wrapComponents: uo,
    statePlugins: {
      spec: { wrapSelectors: ze, selectors: We },
      auth: { wrapSelectors: Fe },
      oas3: { actions: { ...He }, reducers: Lo, selectors: { ...Ge } },
    },
  }
}
var webhooks = ({ specSelectors: e, getComponent: t }) => {
  const r = e.selectWebhooksOperations(),
    n = Object.keys(r),
    a = t('OperationContainer', !0)
  return 0 === n.length
    ? null
    : Xe.default.createElement(
        'div',
        { className: 'webhooks' },
        Xe.default.createElement('h2', null, 'Webhooks'),
        n.map(e =>
          Xe.default.createElement(
            'div',
            { key: `${e}-webhook` },
            r[e].map(t =>
              Xe.default.createElement(a, {
                key: `${e}-${t.method}-webhook`,
                op: t.operation,
                tag: 'webhooks',
                method: t.method,
                path: e,
                specPath: (0, Qe.List)(t.specPath),
                allowTryItOut: !1,
              }),
            ),
          ),
        ),
      )
}
var components_license = ({ getComponent: e, specSelectors: t }) => {
  const r = t.selectLicenseNameField(),
    n = t.selectLicenseUrl(),
    a = e('Link')
  return Xe.default.createElement(
    'div',
    { className: 'info__license' },
    n
      ? Xe.default.createElement(
          'div',
          { className: 'info__license__url' },
          Xe.default.createElement(
            a,
            { target: '_blank', href: sanitizeUrl(n) },
            r,
          ),
        )
      : Xe.default.createElement('span', null, r),
  )
}
var components_contact = ({ getComponent: e, specSelectors: t }) => {
  const r = t.selectContactNameField(),
    n = t.selectContactUrl(),
    a = t.selectContactEmailField(),
    o = e('Link')
  return Xe.default.createElement(
    'div',
    { className: 'info__contact' },
    n &&
      Xe.default.createElement(
        'div',
        null,
        Xe.default.createElement(
          o,
          { href: sanitizeUrl(n), target: '_blank' },
          r,
          ' - Website',
        ),
      ),
    a &&
      Xe.default.createElement(
        o,
        { href: sanitizeUrl(`mailto:${a}`) },
        n ? `Send email to ${r}` : `Contact ${r}`,
      ),
  )
}
var oas31_components_info = ({ getComponent: e, specSelectors: t }) => {
  const r = t.version(),
    n = t.url(),
    a = t.basePath(),
    o = t.host(),
    s = t.selectInfoSummaryField(),
    l = t.selectInfoDescriptionField(),
    i = t.selectInfoTitleField(),
    c = t.selectInfoTermsOfServiceUrl(),
    u = t.selectExternalDocsUrl(),
    d = t.selectExternalDocsDescriptionField(),
    p = t.contact(),
    m = t.license(),
    f = e('Markdown', !0),
    h = e('Link'),
    g = e('VersionStamp'),
    y = e('OpenAPIVersion'),
    S = e('InfoUrl'),
    _ = e('InfoBasePath'),
    v = e('License', !0),
    b = e('Contact', !0),
    w = e('JsonSchemaDialect', !0)
  return Xe.default.createElement(
    'div',
    { className: 'info' },
    Xe.default.createElement(
      'hgroup',
      { className: 'main' },
      Xe.default.createElement(
        'h2',
        { className: 'title' },
        i,
        Xe.default.createElement(
          'span',
          null,
          r && Xe.default.createElement(g, { version: r }),
          Xe.default.createElement(y, { oasVersion: '3.1' }),
        ),
      ),
      (o || a) && Xe.default.createElement(_, { host: o, basePath: a }),
      n && Xe.default.createElement(S, { getComponent: e, url: n }),
    ),
    s && Xe.default.createElement('p', { className: 'info__summary' }, s),
    Xe.default.createElement(
      'div',
      { className: 'info__description description' },
      Xe.default.createElement(f, { source: l }),
    ),
    c &&
      Xe.default.createElement(
        'div',
        { className: 'info__tos' },
        Xe.default.createElement(
          h,
          { target: '_blank', href: sanitizeUrl(c) },
          'Terms of service',
        ),
      ),
    p.size > 0 && Xe.default.createElement(b, null),
    m.size > 0 && Xe.default.createElement(v, null),
    u &&
      Xe.default.createElement(
        h,
        { className: 'info__extdocs', target: '_blank', href: sanitizeUrl(u) },
        d || u,
      ),
    Xe.default.createElement(w, null),
  )
}
var json_schema_dialect = ({ getComponent: e, specSelectors: t }) => {
  const r = t.selectJsonSchemaDialectField(),
    n = t.selectJsonSchemaDialectDefault(),
    a = e('Link')
  return Xe.default.createElement(
    Xe.default.Fragment,
    null,
    r &&
      r === n &&
      Xe.default.createElement(
        'p',
        { className: 'info__jsonschemadialect' },
        'JSON Schema dialect:',
        ' ',
        Xe.default.createElement(
          a,
          { target: '_blank', href: sanitizeUrl(r) },
          r,
        ),
      ),
    r &&
      r !== n &&
      Xe.default.createElement(
        'div',
        { className: 'error-wrapper' },
        Xe.default.createElement(
          'div',
          { className: 'no-margin' },
          Xe.default.createElement(
            'div',
            { className: 'errors' },
            Xe.default.createElement(
              'div',
              { className: 'errors-wrapper' },
              Xe.default.createElement(
                'h4',
                { className: 'center' },
                'Warning',
              ),
              Xe.default.createElement(
                'p',
                { className: 'message' },
                Xe.default.createElement(
                  'strong',
                  null,
                  'OpenAPI.jsonSchemaDialect',
                ),
                ' field contains a value different from the default value of',
                ' ',
                Xe.default.createElement(a, { target: '_blank', href: n }, n),
                '. Values different from the default one are currently not supported. Please either omit the field or provide it with the default value.',
              ),
            ),
          ),
        ),
      ),
  )
}
var version_pragma_filter = ({
  bypass: e,
  isSwagger2: t,
  isOAS3: r,
  isOAS31: n,
  alsoShow: a,
  children: o,
}) =>
  e
    ? Xe.default.createElement('div', null, o)
    : t && (r || n)
    ? Xe.default.createElement(
        'div',
        { className: 'version-pragma' },
        a,
        Xe.default.createElement(
          'div',
          {
            className:
              'version-pragma__message version-pragma__message--ambiguous',
          },
          Xe.default.createElement(
            'div',
            null,
            Xe.default.createElement(
              'h3',
              null,
              'Unable to render this definition',
            ),
            Xe.default.createElement(
              'p',
              null,
              Xe.default.createElement('code', null, 'swagger'),
              ' and ',
              Xe.default.createElement('code', null, 'openapi'),
              ' fields cannot be present in the same Swagger or OpenAPI definition. Please remove one of the fields.',
            ),
            Xe.default.createElement(
              'p',
              null,
              'Supported version fields are ',
              Xe.default.createElement('code', null, 'swagger: "2.0"'),
              ' and those that match ',
              Xe.default.createElement('code', null, 'openapi: 3.x.y'),
              ' (for example,',
              ' ',
              Xe.default.createElement('code', null, 'openapi: 3.1.0'),
              ').',
            ),
          ),
        ),
      )
    : t || r || n
    ? Xe.default.createElement('div', null, o)
    : Xe.default.createElement(
        'div',
        { className: 'version-pragma' },
        a,
        Xe.default.createElement(
          'div',
          {
            className:
              'version-pragma__message version-pragma__message--missing',
          },
          Xe.default.createElement(
            'div',
            null,
            Xe.default.createElement(
              'h3',
              null,
              'Unable to render this definition',
            ),
            Xe.default.createElement(
              'p',
              null,
              'The provided definition does not specify a valid version field.',
            ),
            Xe.default.createElement(
              'p',
              null,
              'Please indicate a valid Swagger or OpenAPI version field. Supported version fields are ',
              Xe.default.createElement('code', null, 'swagger: "2.0"'),
              ' and those that match ',
              Xe.default.createElement('code', null, 'openapi: 3.x.y'),
              ' (for example,',
              ' ',
              Xe.default.createElement('code', null, 'openapi: 3.1.0'),
              ').',
            ),
          ),
        ),
      )
const getModelName = e =>
    'string' == typeof e && e.includes('#/components/schemas/')
      ? (e => {
          const t = e.replace(/~1/g, '/').replace(/~0/g, '~')
          try {
            return decodeURIComponent(t)
          } catch {
            return t
          }
        })(e.replace(/^.*#\/components\/schemas\//, ''))
      : null,
  Do = (0, Xe.forwardRef)(
    ({ schema: e, getComponent: t, onToggle: r = () => {} }, n) => {
      const a = t('JSONSchema202012'),
        o = getModelName(e.get('$$ref')),
        s = (0, Xe.useCallback)(
          (e, t) => {
            r(o, t)
          },
          [o, r],
        )
      return Xe.default.createElement(a, {
        name: o,
        schema: e.toJS(),
        ref: n,
        onExpand: s,
      })
    },
  )
var Uo = Do
var models = ({
  specActions: e,
  specSelectors: t,
  layoutSelectors: r,
  layoutActions: n,
  getComponent: a,
  getConfigs: o,
  fn: s,
}) => {
  const l = t.selectSchemas(),
    i = Object.keys(l).length > 0,
    c = ['components', 'schemas'],
    { docExpansion: u, defaultModelsExpandDepth: d } = o(),
    p = d > 0 && 'none' !== u,
    m = r.isShown(c, p),
    f = a('Collapse'),
    h = a('JSONSchema202012'),
    g = a('ArrowUpIcon'),
    y = a('ArrowDownIcon'),
    { getTitle: S } = s.jsonSchema202012.useFn()
  ;(0, Xe.useEffect)(() => {
    const r = m && d > 1,
      n = null != t.specResolvedSubtree(c)
    r && !n && e.requestResolvedSubtree(c)
  }, [m, d])
  const _ = (0, Xe.useCallback)(() => {
      n.show(c, !m)
    }, [m]),
    v = (0, Xe.useCallback)(e => {
      null !== e && n.readyToScroll(c, e)
    }, []),
    handleJSONSchema202012Ref = e => t => {
      null !== t && n.readyToScroll([...c, e], t)
    },
    handleJSONSchema202012Expand = r => (n, a) => {
      if (a) {
        const n = [...c, r]
        null != t.specResolvedSubtree(n) || e.requestResolvedSubtree([...c, r])
      }
    }
  return !i || d < 0
    ? null
    : Xe.default.createElement(
        'section',
        { className: (0, _r.default)('models', { 'is-open': m }), ref: v },
        Xe.default.createElement(
          'h4',
          null,
          Xe.default.createElement(
            'button',
            { 'aria-expanded': m, className: 'models-control', onClick: _ },
            Xe.default.createElement('span', null, 'Schemas'),
            m
              ? Xe.default.createElement(g, null)
              : Xe.default.createElement(y, null),
          ),
        ),
        Xe.default.createElement(
          f,
          { isOpened: m },
          Object.entries(l).map(([e, t]) => {
            const r = S(t, { lookup: 'basic' }) || e
            return Xe.default.createElement(h, {
              key: e,
              ref: handleJSONSchema202012Ref(e),
              schema: t,
              name: r,
              onExpand: handleJSONSchema202012Expand(e),
            })
          }),
        ),
      )
}
var mutual_tls_auth = ({ schema: e, getComponent: t }) => {
  const r = t('JumpToPath', !0)
  return Xe.default.createElement(
    'div',
    null,
    Xe.default.createElement(
      'h4',
      null,
      e.get('name'),
      ' (mutualTLS)',
      ' ',
      Xe.default.createElement(r, {
        path: ['securityDefinitions', e.get('name')],
      }),
    ),
    Xe.default.createElement(
      'p',
      null,
      'Mutual TLS is required by this API/Operation. Certificates are managed via your Operating System and/or your browser.',
    ),
    Xe.default.createElement('p', null, e.get('description')),
  )
}
class auths_Auths extends Xe.default.Component {
  constructor(e, t) {
    super(e, t), (this.state = {})
  }
  onAuthChange = e => {
    let { name: t } = e
    this.setState({ [t]: e })
  }
  submitAuth = e => {
    e.preventDefault()
    let { authActions: t } = this.props
    t.authorizeWithPersistOption(this.state)
  }
  logoutClick = e => {
    e.preventDefault()
    let { authActions: t, definitions: r } = this.props,
      n = r.map((e, t) => t).toArray()
    this.setState(n.reduce((e, t) => ((e[t] = ''), e), {})),
      t.logoutWithPersistOption(n)
  }
  close = e => {
    e.preventDefault()
    let { authActions: t } = this.props
    t.showDefinitions(!1)
  }
  render() {
    let {
      definitions: e,
      getComponent: t,
      authSelectors: r,
      errSelectors: n,
    } = this.props
    const a = t('AuthItem'),
      o = t('oauth2', !0),
      s = t('Button'),
      l = r.authorized(),
      i = e.filter((e, t) => !!l.get(t)),
      c = e.filter(
        e => 'oauth2' !== e.get('type') && 'mutualTLS' !== e.get('type'),
      ),
      u = e.filter(e => 'oauth2' === e.get('type')),
      d = e.filter(e => 'mutualTLS' === e.get('type'))
    return Xe.default.createElement(
      'div',
      { className: 'auth-container' },
      c.size > 0 &&
        Xe.default.createElement(
          'form',
          { onSubmit: this.submitAuth },
          c
            .map((e, r) =>
              Xe.default.createElement(a, {
                key: r,
                schema: e,
                name: r,
                getComponent: t,
                onAuthChange: this.onAuthChange,
                authorized: l,
                errSelectors: n,
              }),
            )
            .toArray(),
          Xe.default.createElement(
            'div',
            { className: 'auth-btn-wrapper' },
            c.size === i.size
              ? Xe.default.createElement(
                  s,
                  {
                    className: 'btn modal-btn auth',
                    onClick: this.logoutClick,
                    'aria-label': 'Remove authorization',
                  },
                  'Logout',
                )
              : Xe.default.createElement(
                  s,
                  {
                    type: 'submit',
                    className: 'btn modal-btn auth authorize',
                    'aria-label': 'Apply credentials',
                  },
                  'Authorize',
                ),
            Xe.default.createElement(
              s,
              { className: 'btn modal-btn auth btn-done', onClick: this.close },
              'Close',
            ),
          ),
        ),
      u.size > 0
        ? Xe.default.createElement(
            'div',
            null,
            Xe.default.createElement(
              'div',
              { className: 'scope-def' },
              Xe.default.createElement(
                'p',
                null,
                'Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.',
              ),
              Xe.default.createElement(
                'p',
                null,
                'API requires the following scopes. Select which ones you want to grant to Swagger UI.',
              ),
            ),
            e
              .filter(e => 'oauth2' === e.get('type'))
              .map((e, t) =>
                Xe.default.createElement(
                  'div',
                  { key: t },
                  Xe.default.createElement(o, {
                    authorized: l,
                    schema: e,
                    name: t,
                  }),
                ),
              )
              .toArray(),
          )
        : null,
      d.size > 0 &&
        Xe.default.createElement(
          'div',
          null,
          d
            .map((e, r) =>
              Xe.default.createElement(a, {
                key: r,
                schema: e,
                name: r,
                getComponent: t,
                onAuthChange: this.onAuthChange,
                authorized: l,
                errSelectors: n,
              }),
            )
            .toArray(),
        ),
    )
  }
}
var $o = auths_Auths
const isOAS31 = e => {
    const t = e.get('openapi')
    return 'string' == typeof t && /^3\.1\.(?:[1-9]\d*|0)$/.test(t)
  },
  fn_createOnlyOAS31Selector =
    e =>
    (t, ...r) =>
    n => {
      if (n.getSystem().specSelectors.isOAS31()) {
        const a = e(t, ...r)
        return 'function' == typeof a ? a(n) : a
      }
      return null
    },
  createOnlyOAS31SelectorWrapper =
    e =>
    (t, r) =>
    (n, ...a) => {
      if (r.getSystem().specSelectors.isOAS31()) {
        const o = e(n, ...a)
        return 'function' == typeof o ? o(t, r) : o
      }
      return t(...a)
    },
  fn_createSystemSelector =
    e =>
    (t, ...r) =>
    n => {
      const a = e(t, n, ...r)
      return 'function' == typeof a ? a(n) : a
    },
  createOnlyOAS31ComponentWrapper = e => (t, r) => n =>
    r.specSelectors.isOAS31()
      ? Xe.default.createElement(
          e,
          (0, cr.default)({}, n, {
            originalComponent: t,
            getSystem: r.getSystem,
          }),
        )
      : Xe.default.createElement(t, n)
var Jo = createOnlyOAS31ComponentWrapper(({ getSystem: e }) => {
  const t = e().getComponent('OAS31License', !0)
  return Xe.default.createElement(t, null)
})
var Vo = createOnlyOAS31ComponentWrapper(({ getSystem: e }) => {
  const t = e().getComponent('OAS31Contact', !0)
  return Xe.default.createElement(t, null)
})
var Ko = createOnlyOAS31ComponentWrapper(({ getSystem: e }) => {
  const t = e().getComponent('OAS31Info', !0)
  return Xe.default.createElement(t, null)
})
const zo = createOnlyOAS31ComponentWrapper(({ getSystem: e, ...t }) => {
  const r = e(),
    { getComponent: n, fn: a, getConfigs: o } = r,
    s = o(),
    l = n('OAS31Model'),
    i = n('JSONSchema202012'),
    c = n('JSONSchema202012Keyword$schema'),
    u = n('JSONSchema202012Keyword$vocabulary'),
    d = n('JSONSchema202012Keyword$id'),
    p = n('JSONSchema202012Keyword$anchor'),
    m = n('JSONSchema202012Keyword$dynamicAnchor'),
    f = n('JSONSchema202012Keyword$ref'),
    h = n('JSONSchema202012Keyword$dynamicRef'),
    g = n('JSONSchema202012Keyword$defs'),
    y = n('JSONSchema202012Keyword$comment'),
    S = n('JSONSchema202012KeywordAllOf'),
    _ = n('JSONSchema202012KeywordAnyOf'),
    v = n('JSONSchema202012KeywordOneOf'),
    b = n('JSONSchema202012KeywordNot'),
    w = n('JSONSchema202012KeywordIf'),
    C = n('JSONSchema202012KeywordThen'),
    x = n('JSONSchema202012KeywordElse'),
    O = n('JSONSchema202012KeywordDependentSchemas'),
    k = n('JSONSchema202012KeywordPrefixItems'),
    N = n('JSONSchema202012KeywordItems'),
    A = n('JSONSchema202012KeywordContains'),
    I = n('JSONSchema202012KeywordProperties'),
    R = n('JSONSchema202012KeywordPatternProperties'),
    T = n('JSONSchema202012KeywordAdditionalProperties'),
    B = n('JSONSchema202012KeywordPropertyNames'),
    j = n('JSONSchema202012KeywordUnevaluatedItems'),
    P = n('JSONSchema202012KeywordUnevaluatedProperties'),
    M = n('JSONSchema202012KeywordType'),
    q = n('JSONSchema202012KeywordEnum'),
    L = n('JSONSchema202012KeywordConst'),
    D = n('JSONSchema202012KeywordConstraint'),
    U = n('JSONSchema202012KeywordDependentRequired'),
    $ = n('JSONSchema202012KeywordContentSchema'),
    J = n('JSONSchema202012KeywordTitle'),
    V = n('JSONSchema202012KeywordDescription'),
    K = n('JSONSchema202012KeywordDefault'),
    z = n('JSONSchema202012KeywordDeprecated'),
    F = n('JSONSchema202012KeywordReadOnly'),
    W = n('JSONSchema202012KeywordWriteOnly'),
    H = n('JSONSchema202012Accordion'),
    G = n('JSONSchema202012ExpandDeepButton'),
    X = n('JSONSchema202012ChevronRightIcon'),
    Y = n('withJSONSchema202012Context')(l, {
      config: {
        default$schema: 'https://spec.openapis.org/oas/3.1/dialect/base',
        defaultExpandedLevels: s.defaultModelExpandDepth,
        includeReadOnly: Boolean(t.includeReadOnly),
        includeWriteOnly: Boolean(t.includeWriteOnly),
      },
      components: {
        JSONSchema: i,
        Keyword$schema: c,
        Keyword$vocabulary: u,
        Keyword$id: d,
        Keyword$anchor: p,
        Keyword$dynamicAnchor: m,
        Keyword$ref: f,
        Keyword$dynamicRef: h,
        Keyword$defs: g,
        Keyword$comment: y,
        KeywordAllOf: S,
        KeywordAnyOf: _,
        KeywordOneOf: v,
        KeywordNot: b,
        KeywordIf: w,
        KeywordThen: C,
        KeywordElse: x,
        KeywordDependentSchemas: O,
        KeywordPrefixItems: k,
        KeywordItems: N,
        KeywordContains: A,
        KeywordProperties: I,
        KeywordPatternProperties: R,
        KeywordAdditionalProperties: T,
        KeywordPropertyNames: B,
        KeywordUnevaluatedItems: j,
        KeywordUnevaluatedProperties: P,
        KeywordType: M,
        KeywordEnum: q,
        KeywordConst: L,
        KeywordConstraint: D,
        KeywordDependentRequired: U,
        KeywordContentSchema: $,
        KeywordTitle: J,
        KeywordDescription: V,
        KeywordDefault: K,
        KeywordDeprecated: z,
        KeywordReadOnly: F,
        KeywordWriteOnly: W,
        Accordion: H,
        ExpandDeepButton: G,
        ChevronRightIcon: X,
      },
      fn: {
        upperFirst: a.upperFirst,
        isExpandable: a.jsonSchema202012.isExpandable,
        getProperties: a.jsonSchema202012.getProperties,
      },
    })
  return Xe.default.createElement(Y, t)
})
var Fo = zo
const Wo = createOnlyOAS31ComponentWrapper(({ getSystem: e }) => {
  const { getComponent: t, fn: r, getConfigs: n } = e(),
    a = n()
  if (Wo.ModelsWithJSONSchemaContext)
    return Xe.default.createElement(Wo.ModelsWithJSONSchemaContext, null)
  const o = t('OAS31Models', !0),
    s = t('JSONSchema202012'),
    l = t('JSONSchema202012Keyword$schema'),
    i = t('JSONSchema202012Keyword$vocabulary'),
    c = t('JSONSchema202012Keyword$id'),
    u = t('JSONSchema202012Keyword$anchor'),
    d = t('JSONSchema202012Keyword$dynamicAnchor'),
    p = t('JSONSchema202012Keyword$ref'),
    m = t('JSONSchema202012Keyword$dynamicRef'),
    f = t('JSONSchema202012Keyword$defs'),
    h = t('JSONSchema202012Keyword$comment'),
    g = t('JSONSchema202012KeywordAllOf'),
    y = t('JSONSchema202012KeywordAnyOf'),
    S = t('JSONSchema202012KeywordOneOf'),
    _ = t('JSONSchema202012KeywordNot'),
    v = t('JSONSchema202012KeywordIf'),
    b = t('JSONSchema202012KeywordThen'),
    w = t('JSONSchema202012KeywordElse'),
    C = t('JSONSchema202012KeywordDependentSchemas'),
    x = t('JSONSchema202012KeywordPrefixItems'),
    O = t('JSONSchema202012KeywordItems'),
    k = t('JSONSchema202012KeywordContains'),
    N = t('JSONSchema202012KeywordProperties'),
    A = t('JSONSchema202012KeywordPatternProperties'),
    I = t('JSONSchema202012KeywordAdditionalProperties'),
    R = t('JSONSchema202012KeywordPropertyNames'),
    T = t('JSONSchema202012KeywordUnevaluatedItems'),
    B = t('JSONSchema202012KeywordUnevaluatedProperties'),
    j = t('JSONSchema202012KeywordType'),
    P = t('JSONSchema202012KeywordEnum'),
    M = t('JSONSchema202012KeywordConst'),
    q = t('JSONSchema202012KeywordConstraint'),
    L = t('JSONSchema202012KeywordDependentRequired'),
    D = t('JSONSchema202012KeywordContentSchema'),
    U = t('JSONSchema202012KeywordTitle'),
    $ = t('JSONSchema202012KeywordDescription'),
    J = t('JSONSchema202012KeywordDefault'),
    V = t('JSONSchema202012KeywordDeprecated'),
    K = t('JSONSchema202012KeywordReadOnly'),
    z = t('JSONSchema202012KeywordWriteOnly'),
    F = t('JSONSchema202012Accordion'),
    W = t('JSONSchema202012ExpandDeepButton'),
    H = t('JSONSchema202012ChevronRightIcon'),
    G = t('withJSONSchema202012Context')
  return (
    (Wo.ModelsWithJSONSchemaContext = G(o, {
      config: {
        default$schema: 'https://spec.openapis.org/oas/3.1/dialect/base',
        defaultExpandedLevels: a.defaultModelsExpandDepth - 1,
        includeReadOnly: !0,
        includeWriteOnly: !0,
      },
      components: {
        JSONSchema: s,
        Keyword$schema: l,
        Keyword$vocabulary: i,
        Keyword$id: c,
        Keyword$anchor: u,
        Keyword$dynamicAnchor: d,
        Keyword$ref: p,
        Keyword$dynamicRef: m,
        Keyword$defs: f,
        Keyword$comment: h,
        KeywordAllOf: g,
        KeywordAnyOf: y,
        KeywordOneOf: S,
        KeywordNot: _,
        KeywordIf: v,
        KeywordThen: b,
        KeywordElse: w,
        KeywordDependentSchemas: C,
        KeywordPrefixItems: x,
        KeywordItems: O,
        KeywordContains: k,
        KeywordProperties: N,
        KeywordPatternProperties: A,
        KeywordAdditionalProperties: I,
        KeywordPropertyNames: R,
        KeywordUnevaluatedItems: T,
        KeywordUnevaluatedProperties: B,
        KeywordType: j,
        KeywordEnum: P,
        KeywordConst: M,
        KeywordConstraint: q,
        KeywordDependentRequired: L,
        KeywordContentSchema: D,
        KeywordTitle: U,
        KeywordDescription: $,
        KeywordDefault: J,
        KeywordDeprecated: V,
        KeywordReadOnly: K,
        KeywordWriteOnly: z,
        Accordion: F,
        ExpandDeepButton: W,
        ChevronRightIcon: H,
      },
      fn: {
        upperFirst: r.upperFirst,
        isExpandable: r.jsonSchema202012.isExpandable,
        getProperties: r.jsonSchema202012.getProperties,
      },
    })),
    Xe.default.createElement(Wo.ModelsWithJSONSchemaContext, null)
  )
})
Wo.ModelsWithJSONSchemaContext = null
var Ho = Wo
var wrap_components_version_pragma_filter = (e, t) => e => {
  const r = t.specSelectors.isOAS31(),
    n = t.getComponent('OAS31VersionPragmaFilter')
  return Xe.default.createElement(n, (0, cr.default)({ isOAS31: r }, e))
}
const Go = createOnlyOAS31ComponentWrapper(({ originalComponent: e, ...t }) => {
  const { getComponent: r, schema: n } = t,
    a = r('MutualTLSAuth', !0)
  return 'mutualTLS' === n.get('type')
    ? Xe.default.createElement(a, { schema: n })
    : Xe.default.createElement(e, t)
})
var Xo = Go
var Yo = createOnlyOAS31ComponentWrapper(({ getSystem: e, ...t }) => {
  const r = e().getComponent('OAS31Auths', !0)
  return Xe.default.createElement(r, t)
})
const Qo = (0, Qe.Map)(),
  Zo = (0, Dt.createSelector)((e, t) => t.specSelectors.specJson(), isOAS31),
  selectors_webhooks = () => e => {
    const t = e.specSelectors.specJson().get('webhooks')
    return Qe.Map.isMap(t) ? t : Qo
  },
  es = (0, Dt.createSelector)(
    [
      (e, t) => t.specSelectors.webhooks(),
      (e, t) => t.specSelectors.validOperationMethods(),
      (e, t) => t.specSelectors.specResolvedSubtree(['webhooks']),
    ],
    (e, t) =>
      e
        .reduce((e, r, n) => {
          if (!Qe.Map.isMap(r)) return e
          const a = r
            .entrySeq()
            .filter(([e]) => t.includes(e))
            .map(([e, t]) => ({
              operation: (0, Qe.Map)({ operation: t }),
              method: e,
              path: n,
              specPath: ['webhooks', n, e],
            }))
          return e.concat(a)
        }, (0, Qe.List)())
        .groupBy(e => e.path)
        .map(e => e.toArray())
        .toObject(),
  ),
  selectors_license = () => e => {
    const t = e.specSelectors.info().get('license')
    return Qe.Map.isMap(t) ? t : Qo
  },
  selectLicenseNameField = () => e =>
    e.specSelectors.license().get('name', 'License'),
  selectLicenseUrlField = () => e => e.specSelectors.license().get('url'),
  ts = (0, Dt.createSelector)(
    [
      (e, t) => t.specSelectors.url(),
      (e, t) => t.oas3Selectors.selectedServer(),
      (e, t) => t.specSelectors.selectLicenseUrlField(),
    ],
    (e, t, r) => {
      if (r) return safeBuildUrl(r, e, { selectedServer: t })
    },
  ),
  selectLicenseIdentifierField = () => e =>
    e.specSelectors.license().get('identifier'),
  selectors_contact = () => e => {
    const t = e.specSelectors.info().get('contact')
    return Qe.Map.isMap(t) ? t : Qo
  },
  selectContactNameField = () => e =>
    e.specSelectors.contact().get('name', 'the developer'),
  selectContactEmailField = () => e => e.specSelectors.contact().get('email'),
  selectContactUrlField = () => e => e.specSelectors.contact().get('url'),
  rs = (0, Dt.createSelector)(
    [
      (e, t) => t.specSelectors.url(),
      (e, t) => t.oas3Selectors.selectedServer(),
      (e, t) => t.specSelectors.selectContactUrlField(),
    ],
    (e, t, r) => {
      if (r) return safeBuildUrl(r, e, { selectedServer: t })
    },
  ),
  selectInfoTitleField = () => e => e.specSelectors.info().get('title'),
  selectInfoSummaryField = () => e => e.specSelectors.info().get('summary'),
  selectInfoDescriptionField = () => e =>
    e.specSelectors.info().get('description'),
  selectInfoTermsOfServiceField = () => e =>
    e.specSelectors.info().get('termsOfService'),
  ns = (0, Dt.createSelector)(
    [
      (e, t) => t.specSelectors.url(),
      (e, t) => t.oas3Selectors.selectedServer(),
      (e, t) => t.specSelectors.selectInfoTermsOfServiceField(),
    ],
    (e, t, r) => {
      if (r) return safeBuildUrl(r, e, { selectedServer: t })
    },
  ),
  selectExternalDocsDescriptionField = () => e =>
    e.specSelectors.externalDocs().get('description'),
  selectExternalDocsUrlField = () => e =>
    e.specSelectors.externalDocs().get('url'),
  as = (0, Dt.createSelector)(
    [
      (e, t) => t.specSelectors.url(),
      (e, t) => t.oas3Selectors.selectedServer(),
      (e, t) => t.specSelectors.selectExternalDocsUrlField(),
    ],
    (e, t, r) => {
      if (r) return safeBuildUrl(r, e, { selectedServer: t })
    },
  ),
  selectJsonSchemaDialectField = () => e =>
    e.specSelectors.specJson().get('jsonSchemaDialect'),
  selectJsonSchemaDialectDefault = () =>
    'https://spec.openapis.org/oas/3.1/dialect/base',
  os = (0, Dt.createSelector)(
    (e, t) => t.specSelectors.definitions(),
    (e, t) => t.specSelectors.specResolvedSubtree(['components', 'schemas']),
    (e, t) =>
      Qe.Map.isMap(e)
        ? Qe.Map.isMap(t)
          ? Object.entries(e.toJS()).reduce((e, [r, n]) => {
              const a = t.get(r)
              return (e[r] = a?.toJS() || n), e
            }, {})
          : e.toJS()
        : {},
  ),
  wrap_selectors_isOAS3 =
    (e, t) =>
    (r, ...n) =>
      t.specSelectors.isOAS31() || e(...n),
  ss = createOnlyOAS31SelectorWrapper(
    () => (e, t) => t.oas31Selectors.selectLicenseUrl(),
  ),
  ls = createOnlyOAS31SelectorWrapper(() => (e, t) => {
    const r = t.specSelectors.securityDefinitions()
    let n = e()
    return r
      ? (r.entrySeq().forEach(([e, t]) => {
          'mutualTLS' === t.get('type') && (n = n.push(new Qe.Map({ [e]: t })))
        }),
        n)
      : n
  }),
  is = (0, Dt.createSelector)(
    [
      (e, t) => t.specSelectors.url(),
      (e, t) => t.oas3Selectors.selectedServer(),
      (e, t) => t.specSelectors.selectLicenseUrlField(),
      (e, t) => t.specSelectors.selectLicenseIdentifierField(),
    ],
    (e, t, r, n) =>
      r
        ? safeBuildUrl(r, e, { selectedServer: t })
        : n
        ? `https://spdx.org/licenses/${n}.html`
        : void 0,
  )
var keywords_Example = ({ schema: e, getSystem: t }) => {
  const { fn: r } = t(),
    { hasKeyword: n, stringify: a } = r.jsonSchema202012.useFn()
  return n(e, 'example')
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--example',
        },
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
          },
          'Example',
        ),
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const',
          },
          a(e.example),
        ),
      )
    : null
}
var keywords_Xml = ({ schema: e, getSystem: t }) => {
  const r = e?.xml || {},
    { fn: n, getComponent: a } = t(),
    { useIsExpandedDeeply: o, useComponent: s } = n.jsonSchema202012,
    l = o(),
    i = !!(r.name || r.namespace || r.prefix),
    [c, u] = (0, Xe.useState)(l),
    [d, p] = (0, Xe.useState)(!1),
    m = s('Accordion'),
    f = s('ExpandDeepButton'),
    h = a('JSONSchema202012DeepExpansionContext')(),
    g = (0, Xe.useCallback)(() => {
      u(e => !e)
    }, []),
    y = (0, Xe.useCallback)((e, t) => {
      u(t), p(t)
    }, [])
  return 0 === Object.keys(r).length
    ? null
    : Xe.default.createElement(
        h.Provider,
        { value: d },
        Xe.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--xml',
          },
          i
            ? Xe.default.createElement(
                Xe.default.Fragment,
                null,
                Xe.default.createElement(
                  m,
                  { expanded: c, onChange: g },
                  Xe.default.createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                    },
                    'XML',
                  ),
                ),
                Xe.default.createElement(f, { expanded: c, onClick: y }),
              )
            : Xe.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                },
                'XML',
              ),
          !0 === r.attribute &&
            Xe.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
              },
              'attribute',
            ),
          !0 === r.wrapped &&
            Xe.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
              },
              'wrapped',
            ),
          Xe.default.createElement(
            'strong',
            {
              className:
                'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
            },
            'object',
          ),
          Xe.default.createElement(
            'ul',
            {
              className: (0, _r.default)(
                'json-schema-2020-12-keyword__children',
                { 'json-schema-2020-12-keyword__children--collapsed': !c },
              ),
            },
            c &&
              Xe.default.createElement(
                Xe.default.Fragment,
                null,
                r.name &&
                  Xe.default.createElement(
                    'li',
                    { className: 'json-schema-2020-12-property' },
                    Xe.default.createElement(
                      'div',
                      {
                        className:
                          'json-schema-2020-12-keyword json-schema-2020-12-keyword',
                      },
                      Xe.default.createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                        },
                        'name',
                      ),
                      Xe.default.createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                        },
                        r.name,
                      ),
                    ),
                  ),
                r.namespace &&
                  Xe.default.createElement(
                    'li',
                    { className: 'json-schema-2020-12-property' },
                    Xe.default.createElement(
                      'div',
                      { className: 'json-schema-2020-12-keyword' },
                      Xe.default.createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                        },
                        'namespace',
                      ),
                      Xe.default.createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                        },
                        r.namespace,
                      ),
                    ),
                  ),
                r.prefix &&
                  Xe.default.createElement(
                    'li',
                    { className: 'json-schema-2020-12-property' },
                    Xe.default.createElement(
                      'div',
                      { className: 'json-schema-2020-12-keyword' },
                      Xe.default.createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                        },
                        'prefix',
                      ),
                      Xe.default.createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                        },
                        r.prefix,
                      ),
                    ),
                  ),
              ),
          ),
        ),
      )
}
var Discriminator_DiscriminatorMapping = ({ discriminator: e }) => {
  const t = e?.mapping || {}
  return 0 === Object.keys(t).length
    ? null
    : Object.entries(t).map(([e, t]) =>
        Xe.default.createElement(
          'div',
          { key: `${e}-${t}`, className: 'json-schema-2020-12-keyword' },
          Xe.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
            },
            e,
          ),
          Xe.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
            },
            t,
          ),
        ),
      )
}
var Discriminator_Discriminator = ({ schema: e, getSystem: t }) => {
  const r = e?.discriminator || {},
    { fn: n, getComponent: a } = t(),
    { useIsExpandedDeeply: o, useComponent: s } = n.jsonSchema202012,
    l = o(),
    i = !!r.mapping,
    [c, u] = (0, Xe.useState)(l),
    [d, p] = (0, Xe.useState)(!1),
    m = s('Accordion'),
    f = s('ExpandDeepButton'),
    h = a('JSONSchema202012DeepExpansionContext')(),
    g = (0, Xe.useCallback)(() => {
      u(e => !e)
    }, []),
    y = (0, Xe.useCallback)((e, t) => {
      u(t), p(t)
    }, [])
  return 0 === Object.keys(r).length
    ? null
    : Xe.default.createElement(
        h.Provider,
        { value: d },
        Xe.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--discriminator',
          },
          i
            ? Xe.default.createElement(
                Xe.default.Fragment,
                null,
                Xe.default.createElement(
                  m,
                  { expanded: c, onChange: g },
                  Xe.default.createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                    },
                    'Discriminator',
                  ),
                ),
                Xe.default.createElement(f, { expanded: c, onClick: y }),
              )
            : Xe.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                },
                'Discriminator',
              ),
          r.propertyName &&
            Xe.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
              },
              r.propertyName,
            ),
          Xe.default.createElement(
            'strong',
            {
              className:
                'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
            },
            'object',
          ),
          Xe.default.createElement(
            'ul',
            {
              className: (0, _r.default)(
                'json-schema-2020-12-keyword__children',
                { 'json-schema-2020-12-keyword__children--collapsed': !c },
              ),
            },
            c &&
              Xe.default.createElement(
                'li',
                { className: 'json-schema-2020-12-property' },
                Xe.default.createElement(Discriminator_DiscriminatorMapping, {
                  discriminator: r,
                }),
              ),
          ),
        ),
      )
}
var keywords_ExternalDocs = ({ schema: e, getSystem: t }) => {
  const r = e?.externalDocs || {},
    { fn: n, getComponent: a } = t(),
    { useIsExpandedDeeply: o, useComponent: s } = n.jsonSchema202012,
    l = o(),
    i = !(!r.description && !r.url),
    [c, u] = (0, Xe.useState)(l),
    [d, p] = (0, Xe.useState)(!1),
    m = s('Accordion'),
    f = s('ExpandDeepButton'),
    h = a('JSONSchema202012KeywordDescription'),
    g = a('Link'),
    y = a('JSONSchema202012DeepExpansionContext')(),
    S = (0, Xe.useCallback)(() => {
      u(e => !e)
    }, []),
    _ = (0, Xe.useCallback)((e, t) => {
      u(t), p(t)
    }, [])
  return 0 === Object.keys(r).length
    ? null
    : Xe.default.createElement(
        y.Provider,
        { value: d },
        Xe.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--externalDocs',
          },
          i
            ? Xe.default.createElement(
                Xe.default.Fragment,
                null,
                Xe.default.createElement(
                  m,
                  { expanded: c, onChange: S },
                  Xe.default.createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                    },
                    'External documentation',
                  ),
                ),
                Xe.default.createElement(f, { expanded: c, onClick: _ }),
              )
            : Xe.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                },
                'External documentation',
              ),
          Xe.default.createElement(
            'strong',
            {
              className:
                'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
            },
            'object',
          ),
          Xe.default.createElement(
            'ul',
            {
              className: (0, _r.default)(
                'json-schema-2020-12-keyword__children',
                { 'json-schema-2020-12-keyword__children--collapsed': !c },
              ),
            },
            c &&
              Xe.default.createElement(
                Xe.default.Fragment,
                null,
                r.description &&
                  Xe.default.createElement(
                    'li',
                    { className: 'json-schema-2020-12-property' },
                    Xe.default.createElement(h, { schema: r, getSystem: t }),
                  ),
                r.url &&
                  Xe.default.createElement(
                    'li',
                    { className: 'json-schema-2020-12-property' },
                    Xe.default.createElement(
                      'div',
                      {
                        className:
                          'json-schema-2020-12-keyword json-schema-2020-12-keyword',
                      },
                      Xe.default.createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
                        },
                        'url',
                      ),
                      Xe.default.createElement(
                        'span',
                        {
                          className:
                            'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                        },
                        Xe.default.createElement(
                          g,
                          { target: '_blank', href: sanitizeUrl(r.url) },
                          r.url,
                        ),
                      ),
                    ),
                  ),
              ),
          ),
        ),
      )
}
var keywords_Description = ({ schema: e, getSystem: t }) => {
  if (!e?.description) return null
  const { getComponent: r } = t(),
    n = r('Markdown')
  return Xe.default.createElement(
    'div',
    {
      className:
        'json-schema-2020-12-keyword json-schema-2020-12-keyword--description',
    },
    Xe.default.createElement(
      'div',
      {
        className:
          'json-schema-2020-12-core-keyword__value json-schema-2020-12-core-keyword__value--secondary',
      },
      Xe.default.createElement(n, { source: e.description }),
    ),
  )
}
var cs = createOnlyOAS31ComponentWrapper(keywords_Description)
const us = createOnlyOAS31ComponentWrapper(
  ({ schema: e, getSystem: t, originalComponent: r }) => {
    const { getComponent: n } = t(),
      a = n('JSONSchema202012KeywordDiscriminator'),
      o = n('JSONSchema202012KeywordXml'),
      s = n('JSONSchema202012KeywordExample'),
      l = n('JSONSchema202012KeywordExternalDocs')
    return Xe.default.createElement(
      Xe.default.Fragment,
      null,
      Xe.default.createElement(r, { schema: e }),
      Xe.default.createElement(a, { schema: e, getSystem: t }),
      Xe.default.createElement(o, { schema: e, getSystem: t }),
      Xe.default.createElement(l, { schema: e, getSystem: t }),
      Xe.default.createElement(s, { schema: e, getSystem: t }),
    )
  },
)
var ds = us
var keywords_Properties = ({ schema: e, getSystem: t }) => {
  const { fn: r } = t(),
    { useComponent: n } = r.jsonSchema202012,
    { getDependentRequired: a, getProperties: o } = r.jsonSchema202012.useFn(),
    s = r.jsonSchema202012.useConfig(),
    l = Array.isArray(e?.required) ? e.required : [],
    i = n('JSONSchema'),
    c = o(e, s)
  return 0 === Object.keys(c).length
    ? null
    : Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--properties',
        },
        Xe.default.createElement(
          'ul',
          null,
          Object.entries(c).map(([t, r]) => {
            const n = l.includes(t),
              o = a(t, e)
            return Xe.default.createElement(
              'li',
              {
                key: t,
                className: (0, _r.default)('json-schema-2020-12-property', {
                  'json-schema-2020-12-property--required': n,
                }),
              },
              Xe.default.createElement(i, {
                name: t,
                schema: r,
                dependentRequired: o,
              }),
            )
          }),
        ),
      )
}
var ps = createOnlyOAS31ComponentWrapper(keywords_Properties)
const getProperties = (e, { includeReadOnly: t, includeWriteOnly: r }) => {
  if (!e?.properties) return {}
  const n = Object.entries(e.properties).filter(
    ([, e]) => (!(!0 === e?.readOnly) || t) && (!(!0 === e?.writeOnly) || r),
  )
  return Object.fromEntries(n)
}
var ms = function oas31_after_load_afterLoad({ fn: e, getSystem: t }) {
  if (e.jsonSchema202012) {
    const r = ((e, t) => {
      const { fn: r } = t()
      if ('function' != typeof e) return null
      const { hasKeyword: n } = r.jsonSchema202012
      return t =>
        e(t) || n(t, 'example') || t?.xml || t?.discriminator || t?.externalDocs
    })(e.jsonSchema202012.isExpandable, t)
    Object.assign(this.fn.jsonSchema202012, { isExpandable: r, getProperties })
  }
  if ('function' == typeof e.sampleFromSchema && e.jsonSchema202012) {
    const r = ((e, t) => {
      const { fn: r, specSelectors: n } = t
      return Object.fromEntries(
        Object.entries(e).map(([e, t]) => {
          const a = r[e]
          return [
            e,
            (...e) =>
              n.isOAS31() ? t(...e) : 'function' == typeof a ? a(...e) : void 0,
          ]
        }),
      )
    })(
      {
        sampleFromSchema: e.jsonSchema202012.sampleFromSchema,
        sampleFromSchemaGeneric: e.jsonSchema202012.sampleFromSchemaGeneric,
        createXMLExample: e.jsonSchema202012.createXMLExample,
        memoizedSampleFromSchema: e.jsonSchema202012.memoizedSampleFromSchema,
        memoizedCreateXMLExample: e.jsonSchema202012.memoizedCreateXMLExample,
        getJsonSampleSchema: e.jsonSchema202012.getJsonSampleSchema,
        getYamlSampleSchema: e.jsonSchema202012.getYamlSampleSchema,
        getXmlSampleSchema: e.jsonSchema202012.getXmlSampleSchema,
        getSampleSchema: e.jsonSchema202012.getSampleSchema,
        mergeJsonSchema: e.jsonSchema202012.mergeJsonSchema,
      },
      t(),
    )
    Object.assign(this.fn, r)
  }
}
var oas31 = ({ fn: e }) => {
  const t = e.createSystemSelector || fn_createSystemSelector,
    r = e.createOnlyOAS31Selector || fn_createOnlyOAS31Selector
  return {
    afterLoad: ms,
    fn: {
      isOAS31,
      createSystemSelector: fn_createSystemSelector,
      createOnlyOAS31Selector: fn_createOnlyOAS31Selector,
    },
    components: {
      Webhooks: webhooks,
      JsonSchemaDialect: json_schema_dialect,
      MutualTLSAuth: mutual_tls_auth,
      OAS31Info: oas31_components_info,
      OAS31License: components_license,
      OAS31Contact: components_contact,
      OAS31VersionPragmaFilter: version_pragma_filter,
      OAS31Model: Uo,
      OAS31Models: models,
      OAS31Auths: $o,
      JSONSchema202012KeywordExample: keywords_Example,
      JSONSchema202012KeywordXml: keywords_Xml,
      JSONSchema202012KeywordDiscriminator: Discriminator_Discriminator,
      JSONSchema202012KeywordExternalDocs: keywords_ExternalDocs,
    },
    wrapComponents: {
      InfoContainer: Ko,
      License: Jo,
      Contact: Vo,
      VersionPragmaFilter: wrap_components_version_pragma_filter,
      Model: Fo,
      Models: Ho,
      AuthItem: Xo,
      auths: Yo,
      JSONSchema202012KeywordDescription: cs,
      JSONSchema202012KeywordDefault: ds,
      JSONSchema202012KeywordProperties: ps,
    },
    statePlugins: {
      auth: { wrapSelectors: { definitionsToAuthorize: ls } },
      spec: {
        selectors: {
          isOAS31: t(Zo),
          license: selectors_license,
          selectLicenseNameField,
          selectLicenseUrlField,
          selectLicenseIdentifierField: r(selectLicenseIdentifierField),
          selectLicenseUrl: t(ts),
          contact: selectors_contact,
          selectContactNameField,
          selectContactEmailField,
          selectContactUrlField,
          selectContactUrl: t(rs),
          selectInfoTitleField,
          selectInfoSummaryField: r(selectInfoSummaryField),
          selectInfoDescriptionField,
          selectInfoTermsOfServiceField,
          selectInfoTermsOfServiceUrl: t(ns),
          selectExternalDocsDescriptionField,
          selectExternalDocsUrlField,
          selectExternalDocsUrl: t(as),
          webhooks: r(selectors_webhooks),
          selectWebhooksOperations: r(t(es)),
          selectJsonSchemaDialectField,
          selectJsonSchemaDialectDefault,
          selectSchemas: t(os),
        },
        wrapSelectors: { isOAS3: wrap_selectors_isOAS3, selectLicenseUrl: ss },
      },
      oas31: { selectors: { selectLicenseUrl: r(t(is)) } },
    },
  }
}
const fs = Kt.default.object,
  hs = Kt.default.bool,
  gs = (Kt.default.oneOfType([fs, hs]), (0, Xe.createContext)(null))
gs.displayName = 'JSONSchemaContext'
const ys = (0, Xe.createContext)(0)
ys.displayName = 'JSONSchemaLevelContext'
const Es = (0, Xe.createContext)(!1)
Es.displayName = 'JSONSchemaDeepExpansionContext'
const Ss = (0, Xe.createContext)(new Set()),
  useConfig = () => {
    const { config: e } = (0, Xe.useContext)(gs)
    return e
  },
  useComponent = e => {
    const { components: t } = (0, Xe.useContext)(gs)
    return t[e] || null
  },
  useFn = (e = void 0) => {
    const { fn: t } = (0, Xe.useContext)(gs)
    return void 0 !== e ? t[e] : t
  },
  useLevel = () => {
    const e = (0, Xe.useContext)(ys)
    return [e, e + 1]
  },
  useIsExpanded = () => {
    const [e] = useLevel(),
      { defaultExpandedLevels: t } = useConfig()
    return t - e > 0
  },
  useIsExpandedDeeply = () => (0, Xe.useContext)(Es),
  useRenderedSchemas = (e = void 0) => {
    if (void 0 === e) return (0, Xe.useContext)(Ss)
    const t = (0, Xe.useContext)(Ss)
    return new Set([...t, e])
  },
  _s = (0, Xe.forwardRef)(
    (
      {
        schema: e,
        name: t = '',
        dependentRequired: r = [],
        onExpand: n = () => {},
      },
      a,
    ) => {
      const o = useFn(),
        s = useIsExpanded(),
        l = useIsExpandedDeeply(),
        [i, c] = (0, Xe.useState)(s || l),
        [u, d] = (0, Xe.useState)(l),
        [p, m] = useLevel(),
        f = (() => {
          const [e] = useLevel()
          return e > 0
        })(),
        h = o.isExpandable(e) || r.length > 0,
        g = (e => useRenderedSchemas().has(e))(e),
        y = useRenderedSchemas(e),
        S = o.stringifyConstraints(e),
        _ = useComponent('Accordion'),
        v = useComponent('Keyword$schema'),
        b = useComponent('Keyword$vocabulary'),
        w = useComponent('Keyword$id'),
        C = useComponent('Keyword$anchor'),
        x = useComponent('Keyword$dynamicAnchor'),
        O = useComponent('Keyword$ref'),
        k = useComponent('Keyword$dynamicRef'),
        N = useComponent('Keyword$defs'),
        A = useComponent('Keyword$comment'),
        I = useComponent('KeywordAllOf'),
        R = useComponent('KeywordAnyOf'),
        T = useComponent('KeywordOneOf'),
        B = useComponent('KeywordNot'),
        j = useComponent('KeywordIf'),
        P = useComponent('KeywordThen'),
        M = useComponent('KeywordElse'),
        q = useComponent('KeywordDependentSchemas'),
        L = useComponent('KeywordPrefixItems'),
        D = useComponent('KeywordItems'),
        U = useComponent('KeywordContains'),
        $ = useComponent('KeywordProperties'),
        J = useComponent('KeywordPatternProperties'),
        V = useComponent('KeywordAdditionalProperties'),
        K = useComponent('KeywordPropertyNames'),
        z = useComponent('KeywordUnevaluatedItems'),
        F = useComponent('KeywordUnevaluatedProperties'),
        W = useComponent('KeywordType'),
        H = useComponent('KeywordEnum'),
        G = useComponent('KeywordConst'),
        X = useComponent('KeywordConstraint'),
        Y = useComponent('KeywordDependentRequired'),
        Q = useComponent('KeywordContentSchema'),
        Z = useComponent('KeywordTitle'),
        ee = useComponent('KeywordDescription'),
        te = useComponent('KeywordDefault'),
        re = useComponent('KeywordDeprecated'),
        ne = useComponent('KeywordReadOnly'),
        ae = useComponent('KeywordWriteOnly'),
        oe = useComponent('ExpandDeepButton')
      ;(0, Xe.useEffect)(() => {
        d(l)
      }, [l]),
        (0, Xe.useEffect)(() => {
          d(u)
        }, [u])
      const se = (0, Xe.useCallback)(
          (e, t) => {
            c(t), !t && d(!1), n(e, t, !1)
          },
          [n],
        ),
        le = (0, Xe.useCallback)(
          (e, t) => {
            c(t), d(t), n(e, t, !0)
          },
          [n],
        )
      return Xe.default.createElement(
        ys.Provider,
        { value: m },
        Xe.default.createElement(
          Es.Provider,
          { value: u },
          Xe.default.createElement(
            Ss.Provider,
            { value: y },
            Xe.default.createElement(
              'article',
              {
                ref: a,
                'data-json-schema-level': p,
                className: (0, _r.default)('json-schema-2020-12', {
                  'json-schema-2020-12--embedded': f,
                  'json-schema-2020-12--circular': g,
                }),
              },
              Xe.default.createElement(
                'div',
                { className: 'json-schema-2020-12-head' },
                h && !g
                  ? Xe.default.createElement(
                      Xe.default.Fragment,
                      null,
                      Xe.default.createElement(
                        _,
                        { expanded: i, onChange: se },
                        Xe.default.createElement(Z, { title: t, schema: e }),
                      ),
                      Xe.default.createElement(oe, {
                        expanded: i,
                        onClick: le,
                      }),
                    )
                  : Xe.default.createElement(Z, { title: t, schema: e }),
                Xe.default.createElement(re, { schema: e }),
                Xe.default.createElement(ne, { schema: e }),
                Xe.default.createElement(ae, { schema: e }),
                Xe.default.createElement(W, { schema: e, isCircular: g }),
                S.length > 0 &&
                  S.map(e =>
                    Xe.default.createElement(X, {
                      key: `${e.scope}-${e.value}`,
                      constraint: e,
                    }),
                  ),
              ),
              Xe.default.createElement(
                'div',
                {
                  className: (0, _r.default)('json-schema-2020-12-body', {
                    'json-schema-2020-12-body--collapsed': !i,
                  }),
                },
                i &&
                  Xe.default.createElement(
                    Xe.default.Fragment,
                    null,
                    Xe.default.createElement(ee, { schema: e }),
                    !g &&
                      h &&
                      Xe.default.createElement(
                        Xe.default.Fragment,
                        null,
                        Xe.default.createElement($, { schema: e }),
                        Xe.default.createElement(J, { schema: e }),
                        Xe.default.createElement(V, { schema: e }),
                        Xe.default.createElement(F, { schema: e }),
                        Xe.default.createElement(K, { schema: e }),
                        Xe.default.createElement(I, { schema: e }),
                        Xe.default.createElement(R, { schema: e }),
                        Xe.default.createElement(T, { schema: e }),
                        Xe.default.createElement(B, { schema: e }),
                        Xe.default.createElement(j, { schema: e }),
                        Xe.default.createElement(P, { schema: e }),
                        Xe.default.createElement(M, { schema: e }),
                        Xe.default.createElement(q, { schema: e }),
                        Xe.default.createElement(L, { schema: e }),
                        Xe.default.createElement(D, { schema: e }),
                        Xe.default.createElement(z, { schema: e }),
                        Xe.default.createElement(U, { schema: e }),
                        Xe.default.createElement(Q, { schema: e }),
                      ),
                    Xe.default.createElement(H, { schema: e }),
                    Xe.default.createElement(G, { schema: e }),
                    Xe.default.createElement(Y, {
                      schema: e,
                      dependentRequired: r,
                    }),
                    Xe.default.createElement(te, { schema: e }),
                    Xe.default.createElement(v, { schema: e }),
                    Xe.default.createElement(b, { schema: e }),
                    Xe.default.createElement(w, { schema: e }),
                    Xe.default.createElement(C, { schema: e }),
                    Xe.default.createElement(x, { schema: e }),
                    Xe.default.createElement(O, { schema: e }),
                    !g && h && Xe.default.createElement(N, { schema: e }),
                    Xe.default.createElement(k, { schema: e }),
                    Xe.default.createElement(A, { schema: e }),
                  ),
              ),
            ),
          ),
        ),
      )
    },
  )
var vs = _s
var keywords_$schema = ({ schema: e }) =>
  e?.$schema
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--$schema',
        },
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
          },
          '$schema',
        ),
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
          },
          e.$schema,
        ),
      )
    : null
var $vocabulary_$vocabulary = ({ schema: e }) => {
  const t = useIsExpanded(),
    r = useIsExpandedDeeply(),
    [n, a] = (0, Xe.useState)(t || r),
    o = useComponent('Accordion'),
    s = (0, Xe.useCallback)(() => {
      a(e => !e)
    }, [])
  return e?.$vocabulary
    ? 'object' != typeof e.$vocabulary
      ? null
      : Xe.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--$vocabulary',
          },
          Xe.default.createElement(
            o,
            { expanded: n, onChange: s },
            Xe.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
              },
              '$vocabulary',
            ),
          ),
          Xe.default.createElement(
            'strong',
            {
              className:
                'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
            },
            'object',
          ),
          Xe.default.createElement(
            'ul',
            null,
            n &&
              Object.entries(e.$vocabulary).map(([e, t]) =>
                Xe.default.createElement(
                  'li',
                  {
                    key: e,
                    className: (0, _r.default)(
                      'json-schema-2020-12-$vocabulary-uri',
                      { 'json-schema-2020-12-$vocabulary-uri--disabled': !t },
                    ),
                  },
                  Xe.default.createElement(
                    'span',
                    {
                      className:
                        'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
                    },
                    e,
                  ),
                ),
              ),
          ),
        )
    : null
}
var keywords_$id = ({ schema: e }) =>
  e?.$id
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--$id',
        },
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
          },
          '$id',
        ),
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
          },
          e.$id,
        ),
      )
    : null
var keywords_$anchor = ({ schema: e }) =>
  e?.$anchor
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--$anchor',
        },
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
          },
          '$anchor',
        ),
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
          },
          e.$anchor,
        ),
      )
    : null
var keywords_$dynamicAnchor = ({ schema: e }) =>
  e?.$dynamicAnchor
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--$dynamicAnchor',
        },
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
          },
          '$dynamicAnchor',
        ),
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
          },
          e.$dynamicAnchor,
        ),
      )
    : null
var keywords_$ref = ({ schema: e }) =>
  e?.$ref
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--$ref',
        },
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
          },
          '$ref',
        ),
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
          },
          e.$ref,
        ),
      )
    : null
var keywords_$dynamicRef = ({ schema: e }) =>
  e?.$dynamicRef
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--$dynamicRef',
        },
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
          },
          '$dynamicRef',
        ),
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
          },
          e.$dynamicRef,
        ),
      )
    : null
var keywords_$defs = ({ schema: e }) => {
  const t = e?.$defs || {},
    r = useIsExpanded(),
    n = useIsExpandedDeeply(),
    [a, o] = (0, Xe.useState)(r || n),
    [s, l] = (0, Xe.useState)(!1),
    i = useComponent('Accordion'),
    c = useComponent('ExpandDeepButton'),
    u = useComponent('JSONSchema'),
    d = (0, Xe.useCallback)(() => {
      o(e => !e)
    }, []),
    p = (0, Xe.useCallback)((e, t) => {
      o(t), l(t)
    }, [])
  return 0 === Object.keys(t).length
    ? null
    : Xe.default.createElement(
        Es.Provider,
        { value: s },
        Xe.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--$defs',
          },
          Xe.default.createElement(
            i,
            { expanded: a, onChange: d },
            Xe.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
              },
              '$defs',
            ),
          ),
          Xe.default.createElement(c, { expanded: a, onClick: p }),
          Xe.default.createElement(
            'strong',
            {
              className:
                'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
            },
            'object',
          ),
          Xe.default.createElement(
            'ul',
            {
              className: (0, _r.default)(
                'json-schema-2020-12-keyword__children',
                { 'json-schema-2020-12-keyword__children--collapsed': !a },
              ),
            },
            a &&
              Xe.default.createElement(
                Xe.default.Fragment,
                null,
                Object.entries(t).map(([e, t]) =>
                  Xe.default.createElement(
                    'li',
                    { key: e, className: 'json-schema-2020-12-property' },
                    Xe.default.createElement(u, { name: e, schema: t }),
                  ),
                ),
              ),
          ),
        ),
      )
}
var keywords_$comment = ({ schema: e }) =>
  e?.$comment
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--$comment',
        },
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary',
          },
          '$comment',
        ),
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary',
          },
          e.$comment,
        ),
      )
    : null
var keywords_AllOf = ({ schema: e }) => {
  const t = e?.allOf || [],
    r = useFn(),
    n = useIsExpanded(),
    a = useIsExpandedDeeply(),
    [o, s] = (0, Xe.useState)(n || a),
    [l, i] = (0, Xe.useState)(!1),
    c = useComponent('Accordion'),
    u = useComponent('ExpandDeepButton'),
    d = useComponent('JSONSchema'),
    p = useComponent('KeywordType'),
    m = (0, Xe.useCallback)(() => {
      s(e => !e)
    }, []),
    f = (0, Xe.useCallback)((e, t) => {
      s(t), i(t)
    }, [])
  return Array.isArray(t) && 0 !== t.length
    ? Xe.default.createElement(
        Es.Provider,
        { value: l },
        Xe.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--allOf',
          },
          Xe.default.createElement(
            c,
            { expanded: o, onChange: m },
            Xe.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'All of',
            ),
          ),
          Xe.default.createElement(u, { expanded: o, onClick: f }),
          Xe.default.createElement(p, { schema: { allOf: t } }),
          Xe.default.createElement(
            'ul',
            {
              className: (0, _r.default)(
                'json-schema-2020-12-keyword__children',
                { 'json-schema-2020-12-keyword__children--collapsed': !o },
              ),
            },
            o &&
              Xe.default.createElement(
                Xe.default.Fragment,
                null,
                t.map((e, t) =>
                  Xe.default.createElement(
                    'li',
                    { key: `#${t}`, className: 'json-schema-2020-12-property' },
                    Xe.default.createElement(d, {
                      name: `#${t} ${r.getTitle(e)}`,
                      schema: e,
                    }),
                  ),
                ),
              ),
          ),
        ),
      )
    : null
}
var keywords_AnyOf = ({ schema: e }) => {
  const t = e?.anyOf || [],
    r = useFn(),
    n = useIsExpanded(),
    a = useIsExpandedDeeply(),
    [o, s] = (0, Xe.useState)(n || a),
    [l, i] = (0, Xe.useState)(!1),
    c = useComponent('Accordion'),
    u = useComponent('ExpandDeepButton'),
    d = useComponent('JSONSchema'),
    p = useComponent('KeywordType'),
    m = (0, Xe.useCallback)(() => {
      s(e => !e)
    }, []),
    f = (0, Xe.useCallback)((e, t) => {
      s(t), i(t)
    }, [])
  return Array.isArray(t) && 0 !== t.length
    ? Xe.default.createElement(
        Es.Provider,
        { value: l },
        Xe.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--anyOf',
          },
          Xe.default.createElement(
            c,
            { expanded: o, onChange: m },
            Xe.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'Any of',
            ),
          ),
          Xe.default.createElement(u, { expanded: o, onClick: f }),
          Xe.default.createElement(p, { schema: { anyOf: t } }),
          Xe.default.createElement(
            'ul',
            {
              className: (0, _r.default)(
                'json-schema-2020-12-keyword__children',
                { 'json-schema-2020-12-keyword__children--collapsed': !o },
              ),
            },
            o &&
              Xe.default.createElement(
                Xe.default.Fragment,
                null,
                t.map((e, t) =>
                  Xe.default.createElement(
                    'li',
                    { key: `#${t}`, className: 'json-schema-2020-12-property' },
                    Xe.default.createElement(d, {
                      name: `#${t} ${r.getTitle(e)}`,
                      schema: e,
                    }),
                  ),
                ),
              ),
          ),
        ),
      )
    : null
}
var keywords_OneOf = ({ schema: e }) => {
  const t = e?.oneOf || [],
    r = useFn(),
    n = useIsExpanded(),
    a = useIsExpandedDeeply(),
    [o, s] = (0, Xe.useState)(n || a),
    [l, i] = (0, Xe.useState)(!1),
    c = useComponent('Accordion'),
    u = useComponent('ExpandDeepButton'),
    d = useComponent('JSONSchema'),
    p = useComponent('KeywordType'),
    m = (0, Xe.useCallback)(() => {
      s(e => !e)
    }, []),
    f = (0, Xe.useCallback)((e, t) => {
      s(t), i(t)
    }, [])
  return Array.isArray(t) && 0 !== t.length
    ? Xe.default.createElement(
        Es.Provider,
        { value: l },
        Xe.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--oneOf',
          },
          Xe.default.createElement(
            c,
            { expanded: o, onChange: m },
            Xe.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'One of',
            ),
          ),
          Xe.default.createElement(u, { expanded: o, onClick: f }),
          Xe.default.createElement(p, { schema: { oneOf: t } }),
          Xe.default.createElement(
            'ul',
            {
              className: (0, _r.default)(
                'json-schema-2020-12-keyword__children',
                { 'json-schema-2020-12-keyword__children--collapsed': !o },
              ),
            },
            o &&
              Xe.default.createElement(
                Xe.default.Fragment,
                null,
                t.map((e, t) =>
                  Xe.default.createElement(
                    'li',
                    { key: `#${t}`, className: 'json-schema-2020-12-property' },
                    Xe.default.createElement(d, {
                      name: `#${t} ${r.getTitle(e)}`,
                      schema: e,
                    }),
                  ),
                ),
              ),
          ),
        ),
      )
    : null
}
var keywords_Not = ({ schema: e }) => {
  const t = useFn(),
    r = useComponent('JSONSchema')
  if (!t.hasKeyword(e, 'not')) return null
  const n = Xe.default.createElement(
    'span',
    {
      className:
        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
    },
    'Not',
  )
  return Xe.default.createElement(
    'div',
    {
      className: 'json-schema-2020-12-keyword json-schema-2020-12-keyword--not',
    },
    Xe.default.createElement(r, { name: n, schema: e.not }),
  )
}
var keywords_If = ({ schema: e }) => {
  const t = useFn(),
    r = useComponent('JSONSchema')
  if (!t.hasKeyword(e, 'if')) return null
  const n = Xe.default.createElement(
    'span',
    {
      className:
        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
    },
    'If',
  )
  return Xe.default.createElement(
    'div',
    {
      className: 'json-schema-2020-12-keyword json-schema-2020-12-keyword--if',
    },
    Xe.default.createElement(r, { name: n, schema: e.if }),
  )
}
var keywords_Then = ({ schema: e }) => {
  const t = useFn(),
    r = useComponent('JSONSchema')
  if (!t.hasKeyword(e, 'then')) return null
  const n = Xe.default.createElement(
    'span',
    {
      className:
        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
    },
    'Then',
  )
  return Xe.default.createElement(
    'div',
    {
      className:
        'json-schema-2020-12-keyword json-schema-2020-12-keyword--then',
    },
    Xe.default.createElement(r, { name: n, schema: e.then }),
  )
}
var keywords_Else = ({ schema: e }) => {
  const t = useFn(),
    r = useComponent('JSONSchema')
  if (!t.hasKeyword(e, 'else')) return null
  const n = Xe.default.createElement(
    'span',
    {
      className:
        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
    },
    'Else',
  )
  return Xe.default.createElement(
    'div',
    {
      className: 'json-schema-2020-12-keyword json-schema-2020-12-keyword--if',
    },
    Xe.default.createElement(r, { name: n, schema: e.else }),
  )
}
var keywords_DependentSchemas = ({ schema: e }) => {
  const t = e?.dependentSchemas || [],
    r = useIsExpanded(),
    n = useIsExpandedDeeply(),
    [a, o] = (0, Xe.useState)(r || n),
    [s, l] = (0, Xe.useState)(!1),
    i = useComponent('Accordion'),
    c = useComponent('ExpandDeepButton'),
    u = useComponent('JSONSchema'),
    d = (0, Xe.useCallback)(() => {
      o(e => !e)
    }, []),
    p = (0, Xe.useCallback)((e, t) => {
      o(t), l(t)
    }, [])
  return 'object' != typeof t || 0 === Object.keys(t).length
    ? null
    : Xe.default.createElement(
        Es.Provider,
        { value: s },
        Xe.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--dependentSchemas',
          },
          Xe.default.createElement(
            i,
            { expanded: a, onChange: d },
            Xe.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'Dependent schemas',
            ),
          ),
          Xe.default.createElement(c, { expanded: a, onClick: p }),
          Xe.default.createElement(
            'strong',
            {
              className:
                'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
            },
            'object',
          ),
          Xe.default.createElement(
            'ul',
            {
              className: (0, _r.default)(
                'json-schema-2020-12-keyword__children',
                { 'json-schema-2020-12-keyword__children--collapsed': !a },
              ),
            },
            a &&
              Xe.default.createElement(
                Xe.default.Fragment,
                null,
                Object.entries(t).map(([e, t]) =>
                  Xe.default.createElement(
                    'li',
                    { key: e, className: 'json-schema-2020-12-property' },
                    Xe.default.createElement(u, { name: e, schema: t }),
                  ),
                ),
              ),
          ),
        ),
      )
}
var keywords_PrefixItems = ({ schema: e }) => {
  const t = e?.prefixItems || [],
    r = useFn(),
    n = useIsExpanded(),
    a = useIsExpandedDeeply(),
    [o, s] = (0, Xe.useState)(n || a),
    [l, i] = (0, Xe.useState)(!1),
    c = useComponent('Accordion'),
    u = useComponent('ExpandDeepButton'),
    d = useComponent('JSONSchema'),
    p = useComponent('KeywordType'),
    m = (0, Xe.useCallback)(() => {
      s(e => !e)
    }, []),
    f = (0, Xe.useCallback)((e, t) => {
      s(t), i(t)
    }, [])
  return Array.isArray(t) && 0 !== t.length
    ? Xe.default.createElement(
        Es.Provider,
        { value: l },
        Xe.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-keyword json-schema-2020-12-keyword--prefixItems',
          },
          Xe.default.createElement(
            c,
            { expanded: o, onChange: m },
            Xe.default.createElement(
              'span',
              {
                className:
                  'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
              },
              'Prefix items',
            ),
          ),
          Xe.default.createElement(u, { expanded: o, onClick: f }),
          Xe.default.createElement(p, { schema: { prefixItems: t } }),
          Xe.default.createElement(
            'ul',
            {
              className: (0, _r.default)(
                'json-schema-2020-12-keyword__children',
                { 'json-schema-2020-12-keyword__children--collapsed': !o },
              ),
            },
            o &&
              Xe.default.createElement(
                Xe.default.Fragment,
                null,
                t.map((e, t) =>
                  Xe.default.createElement(
                    'li',
                    { key: `#${t}`, className: 'json-schema-2020-12-property' },
                    Xe.default.createElement(d, {
                      name: `#${t} ${r.getTitle(e)}`,
                      schema: e,
                    }),
                  ),
                ),
              ),
          ),
        ),
      )
    : null
}
var keywords_Items = ({ schema: e }) => {
  const t = useFn(),
    r = useComponent('JSONSchema')
  if (!t.hasKeyword(e, 'items')) return null
  const n = Xe.default.createElement(
    'span',
    {
      className:
        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
    },
    'Items',
  )
  return Xe.default.createElement(
    'div',
    {
      className:
        'json-schema-2020-12-keyword json-schema-2020-12-keyword--items',
    },
    Xe.default.createElement(r, { name: n, schema: e.items }),
  )
}
var keywords_Contains = ({ schema: e }) => {
  const t = useFn(),
    r = useComponent('JSONSchema')
  if (!t.hasKeyword(e, 'contains')) return null
  const n = Xe.default.createElement(
    'span',
    {
      className:
        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
    },
    'Contains',
  )
  return Xe.default.createElement(
    'div',
    {
      className:
        'json-schema-2020-12-keyword json-schema-2020-12-keyword--contains',
    },
    Xe.default.createElement(r, { name: n, schema: e.contains }),
  )
}
var keywords_Properties_Properties = ({ schema: e }) => {
  const t = useFn(),
    r = e?.properties || {},
    n = Array.isArray(e?.required) ? e.required : [],
    a = useComponent('JSONSchema')
  return 0 === Object.keys(r).length
    ? null
    : Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--properties',
        },
        Xe.default.createElement(
          'ul',
          null,
          Object.entries(r).map(([r, o]) => {
            const s = n.includes(r),
              l = t.getDependentRequired(r, e)
            return Xe.default.createElement(
              'li',
              {
                key: r,
                className: (0, _r.default)('json-schema-2020-12-property', {
                  'json-schema-2020-12-property--required': s,
                }),
              },
              Xe.default.createElement(a, {
                name: r,
                schema: o,
                dependentRequired: l,
              }),
            )
          }),
        ),
      )
}
var PatternProperties_PatternProperties = ({ schema: e }) => {
  const t = e?.patternProperties || {},
    r = useComponent('JSONSchema')
  return 0 === Object.keys(t).length
    ? null
    : Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--patternProperties',
        },
        Xe.default.createElement(
          'ul',
          null,
          Object.entries(t).map(([e, t]) =>
            Xe.default.createElement(
              'li',
              { key: e, className: 'json-schema-2020-12-property' },
              Xe.default.createElement(r, { name: e, schema: t }),
            ),
          ),
        ),
      )
}
var keywords_AdditionalProperties = ({ schema: e }) => {
  const t = useFn(),
    { additionalProperties: r } = e,
    n = useComponent('JSONSchema')
  if (!t.hasKeyword(e, 'additionalProperties')) return null
  const a = Xe.default.createElement(
    'span',
    {
      className:
        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
    },
    'Additional properties',
  )
  return Xe.default.createElement(
    'div',
    {
      className:
        'json-schema-2020-12-keyword json-schema-2020-12-keyword--additionalProperties',
    },
    !0 === r
      ? Xe.default.createElement(
          Xe.default.Fragment,
          null,
          a,
          Xe.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
            },
            'allowed',
          ),
        )
      : !1 === r
      ? Xe.default.createElement(
          Xe.default.Fragment,
          null,
          a,
          Xe.default.createElement(
            'span',
            {
              className:
                'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
            },
            'forbidden',
          ),
        )
      : Xe.default.createElement(n, { name: a, schema: r }),
  )
}
var keywords_PropertyNames = ({ schema: e }) => {
  const t = useFn(),
    { propertyNames: r } = e,
    n = useComponent('JSONSchema'),
    a = Xe.default.createElement(
      'span',
      {
        className:
          'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
      },
      'Property names',
    )
  return t.hasKeyword(e, 'propertyNames')
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--propertyNames',
        },
        Xe.default.createElement(n, { name: a, schema: r }),
      )
    : null
}
var keywords_UnevaluatedItems = ({ schema: e }) => {
  const t = useFn(),
    { unevaluatedItems: r } = e,
    n = useComponent('JSONSchema')
  if (!t.hasKeyword(e, 'unevaluatedItems')) return null
  const a = Xe.default.createElement(
    'span',
    {
      className:
        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
    },
    'Unevaluated items',
  )
  return Xe.default.createElement(
    'div',
    {
      className:
        'json-schema-2020-12-keyword json-schema-2020-12-keyword--unevaluatedItems',
    },
    Xe.default.createElement(n, { name: a, schema: r }),
  )
}
var keywords_UnevaluatedProperties = ({ schema: e }) => {
  const t = useFn(),
    { unevaluatedProperties: r } = e,
    n = useComponent('JSONSchema')
  if (!t.hasKeyword(e, 'unevaluatedProperties')) return null
  const a = Xe.default.createElement(
    'span',
    {
      className:
        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
    },
    'Unevaluated properties',
  )
  return Xe.default.createElement(
    'div',
    {
      className:
        'json-schema-2020-12-keyword json-schema-2020-12-keyword--unevaluatedProperties',
    },
    Xe.default.createElement(n, { name: a, schema: r }),
  )
}
var keywords_Type = ({ schema: e, isCircular: t = !1 }) => {
  const r = useFn().getType(e),
    n = t ? ' [circular]' : ''
  return Xe.default.createElement(
    'strong',
    {
      className:
        'json-schema-2020-12__attribute json-schema-2020-12__attribute--primary',
    },
    `${r}${n}`,
  )
}
var Enum_Enum = ({ schema: e }) => {
  const t = useFn()
  return Array.isArray(e?.enum)
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--enum',
        },
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
          },
          'Allowed values',
        ),
        Xe.default.createElement(
          'ul',
          null,
          e.enum.map(e => {
            const r = t.stringify(e)
            return Xe.default.createElement(
              'li',
              { key: r },
              Xe.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const',
                },
                r,
              ),
            )
          }),
        ),
      )
    : null
}
var keywords_Const = ({ schema: e }) => {
  const t = useFn()
  return t.hasKeyword(e, 'const')
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--const',
        },
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
          },
          'Const',
        ),
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const',
          },
          t.stringify(e.const),
        ),
      )
    : null
}
const Constraint = ({ constraint: e }) =>
  Xe.default.createElement(
    'span',
    {
      className: `json-schema-2020-12__constraint json-schema-2020-12__constraint--${e.scope}`,
    },
    e.value,
  )
var bs = Xe.default.memo(Constraint)
var DependentRequired_DependentRequired = ({ dependentRequired: e }) =>
  0 === e.length
    ? null
    : Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--dependentRequired',
        },
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
          },
          'Required when defined',
        ),
        Xe.default.createElement(
          'ul',
          null,
          e.map(e =>
            Xe.default.createElement(
              'li',
              { key: e },
              Xe.default.createElement(
                'span',
                {
                  className:
                    'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--warning',
                },
                e,
              ),
            ),
          ),
        ),
      )
var keywords_ContentSchema = ({ schema: e }) => {
  const t = useFn(),
    r = useComponent('JSONSchema')
  if (!t.hasKeyword(e, 'contentSchema')) return null
  const n = Xe.default.createElement(
    'span',
    {
      className:
        'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
    },
    'Content schema',
  )
  return Xe.default.createElement(
    'div',
    {
      className:
        'json-schema-2020-12-keyword json-schema-2020-12-keyword--contentSchema',
    },
    Xe.default.createElement(r, { name: n, schema: e.contentSchema }),
  )
}
var Title_Title = ({ title: e = '', schema: t }) => {
  const r = useFn(),
    n = e || r.getTitle(t)
  return n
    ? Xe.default.createElement(
        'div',
        { className: 'json-schema-2020-12__title' },
        n,
      )
    : null
}
var keywords_Description_Description = ({ schema: e }) =>
  e?.description
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--description',
        },
        Xe.default.createElement(
          'div',
          {
            className:
              'json-schema-2020-12-core-keyword__value json-schema-2020-12-core-keyword__value--secondary',
          },
          e.description,
        ),
      )
    : null
var keywords_Default = ({ schema: e }) => {
  const t = useFn()
  return t.hasKeyword(e, 'default')
    ? Xe.default.createElement(
        'div',
        {
          className:
            'json-schema-2020-12-keyword json-schema-2020-12-keyword--default',
        },
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary',
          },
          'Default',
        ),
        Xe.default.createElement(
          'span',
          {
            className:
              'json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const',
          },
          t.stringify(e.default),
        ),
      )
    : null
}
var keywords_Deprecated = ({ schema: e }) =>
  !0 !== e?.deprecated
    ? null
    : Xe.default.createElement(
        'span',
        {
          className:
            'json-schema-2020-12__attribute json-schema-2020-12__attribute--warning',
        },
        'deprecated',
      )
var keywords_ReadOnly = ({ schema: e }) =>
  !0 !== e?.readOnly
    ? null
    : Xe.default.createElement(
        'span',
        {
          className:
            'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
        },
        'read-only',
      )
var keywords_WriteOnly = ({ schema: e }) =>
  !0 !== e?.writeOnly
    ? null
    : Xe.default.createElement(
        'span',
        {
          className:
            'json-schema-2020-12__attribute json-schema-2020-12__attribute--muted',
        },
        'write-only',
      )
var Accordion_Accordion = ({ expanded: e = !1, children: t, onChange: r }) => {
  const n = useComponent('ChevronRightIcon'),
    a = (0, Xe.useCallback)(
      t => {
        r(t, !e)
      },
      [e, r],
    )
  return Xe.default.createElement(
    'button',
    { type: 'button', className: 'json-schema-2020-12-accordion', onClick: a },
    Xe.default.createElement(
      'div',
      { className: 'json-schema-2020-12-accordion__children' },
      t,
    ),
    Xe.default.createElement(
      'span',
      {
        className: (0, _r.default)('json-schema-2020-12-accordion__icon', {
          'json-schema-2020-12-accordion__icon--expanded': e,
          'json-schema-2020-12-accordion__icon--collapsed': !e,
        }),
      },
      Xe.default.createElement(n, null),
    ),
  )
}
var ExpandDeepButton_ExpandDeepButton = ({ expanded: e, onClick: t }) => {
  const r = (0, Xe.useCallback)(
    r => {
      t(r, !e)
    },
    [e, t],
  )
  return Xe.default.createElement(
    'button',
    {
      type: 'button',
      className: 'json-schema-2020-12-expand-deep-button',
      onClick: r,
    },
    e ? 'Collapse all' : 'Expand all',
  )
}
var icons_ChevronRight = () =>
  Xe.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
    },
    Xe.default.createElement('path', {
      d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
    }),
  )
const fn_upperFirst = e =>
    'string' == typeof e ? `${e.charAt(0).toUpperCase()}${e.slice(1)}` : e,
  getTitle = (e, { lookup: t = 'extended' } = {}) => {
    const r = useFn()
    if (null != e?.title) return r.upperFirst(String(e.title))
    if ('extended' === t) {
      if (null != e?.$anchor) return r.upperFirst(String(e.$anchor))
      if (null != e?.$id) return String(e.$id)
    }
    return ''
  },
  getType = (e, t = new WeakSet()) => {
    const r = useFn()
    if (null == e) return 'any'
    if (r.isBooleanJSONSchema(e)) return e ? 'any' : 'never'
    if ('object' != typeof e) return 'any'
    if (t.has(e)) return 'any'
    t.add(e)
    const { type: n, prefixItems: a, items: o } = e,
      getArrayType = () => {
        if (Array.isArray(a)) {
          const e = a.map(e => getType(e, t)),
            r = o ? getType(o, t) : 'any'
          return `array<[${e.join(', ')}], ${r}>`
        }
        if (o) {
          return `array<${getType(o, t)}>`
        }
        return 'array<any>'
      }
    if (e.not && 'any' === getType(e.not)) return 'never'
    const handleCombiningKeywords = (r, n) => {
        if (Array.isArray(e[r])) {
          return `(${e[r].map(e => getType(e, t)).join(n)})`
        }
        return null
      },
      s = [
        Array.isArray(n)
          ? n.map(e => ('array' === e ? getArrayType() : e)).join(' | ')
          : 'array' === n
          ? getArrayType()
          : [
              'null',
              'boolean',
              'object',
              'array',
              'number',
              'integer',
              'string',
            ].includes(n)
          ? n
          : (() => {
              if (
                Object.hasOwn(e, 'prefixItems') ||
                Object.hasOwn(e, 'items') ||
                Object.hasOwn(e, 'contains')
              )
                return getArrayType()
              if (
                Object.hasOwn(e, 'properties') ||
                Object.hasOwn(e, 'additionalProperties') ||
                Object.hasOwn(e, 'patternProperties')
              )
                return 'object'
              if (['int32', 'int64'].includes(e.format)) return 'integer'
              if (['float', 'double'].includes(e.format)) return 'number'
              if (
                Object.hasOwn(e, 'minimum') ||
                Object.hasOwn(e, 'maximum') ||
                Object.hasOwn(e, 'exclusiveMinimum') ||
                Object.hasOwn(e, 'exclusiveMaximum') ||
                Object.hasOwn(e, 'multipleOf')
              )
                return 'number | integer'
              if (
                Object.hasOwn(e, 'pattern') ||
                Object.hasOwn(e, 'format') ||
                Object.hasOwn(e, 'minLength') ||
                Object.hasOwn(e, 'maxLength')
              )
                return 'string'
              if (void 0 !== e.const) {
                if (null === e.const) return 'null'
                if ('boolean' == typeof e.const) return 'boolean'
                if ('number' == typeof e.const)
                  return Number.isInteger(e.const) ? 'integer' : 'number'
                if ('string' == typeof e.const) return 'string'
                if (Array.isArray(e.const)) return 'array<any>'
                if ('object' == typeof e.const) return 'object'
              }
              return null
            })(),
        handleCombiningKeywords('oneOf', ' | '),
        handleCombiningKeywords('anyOf', ' | '),
        handleCombiningKeywords('allOf', ' & '),
      ]
        .filter(Boolean)
        .join(' | ')
    return t.delete(e), s || 'any'
  },
  isBooleanJSONSchema = e => 'boolean' == typeof e,
  hasKeyword = (e, t) =>
    null !== e && 'object' == typeof e && Object.hasOwn(e, t),
  isExpandable = e => {
    const t = useFn()
    return (
      e?.$schema ||
      e?.$vocabulary ||
      e?.$id ||
      e?.$anchor ||
      e?.$dynamicAnchor ||
      e?.$ref ||
      e?.$dynamicRef ||
      e?.$defs ||
      e?.$comment ||
      e?.allOf ||
      e?.anyOf ||
      e?.oneOf ||
      t.hasKeyword(e, 'not') ||
      t.hasKeyword(e, 'if') ||
      t.hasKeyword(e, 'then') ||
      t.hasKeyword(e, 'else') ||
      e?.dependentSchemas ||
      e?.prefixItems ||
      t.hasKeyword(e, 'items') ||
      t.hasKeyword(e, 'contains') ||
      e?.properties ||
      e?.patternProperties ||
      t.hasKeyword(e, 'additionalProperties') ||
      t.hasKeyword(e, 'propertyNames') ||
      t.hasKeyword(e, 'unevaluatedItems') ||
      t.hasKeyword(e, 'unevaluatedProperties') ||
      e?.description ||
      e?.enum ||
      t.hasKeyword(e, 'const') ||
      t.hasKeyword(e, 'contentSchema') ||
      t.hasKeyword(e, 'default')
    )
  },
  fn_stringify = e =>
    null === e || ['number', 'bigint', 'boolean'].includes(typeof e)
      ? String(e)
      : Array.isArray(e)
      ? `[${e.map(fn_stringify).join(', ')}]`
      : JSON.stringify(e),
  stringifyConstraintRange = (e, t, r) => {
    const n = 'number' == typeof t,
      a = 'number' == typeof r
    return n && a
      ? t === r
        ? `${t} ${e}`
        : `[${t}, ${r}] ${e}`
      : n
      ? `>= ${t} ${e}`
      : a
      ? `<= ${r} ${e}`
      : null
  },
  stringifyConstraints = e => {
    const t = [],
      r = (e => {
        if ('number' != typeof e?.multipleOf) return null
        if (e.multipleOf <= 0) return null
        if (1 === e.multipleOf) return null
        const { multipleOf: t } = e
        if (Number.isInteger(t)) return `multiple of ${t}`
        const r = 10 ** t.toString().split('.')[1].length
        return `multiple of ${t * r}/${r}`
      })(e)
    null !== r && t.push({ scope: 'number', value: r })
    const n = (e => {
      const t = e?.minimum,
        r = e?.maximum,
        n = e?.exclusiveMinimum,
        a = e?.exclusiveMaximum,
        o = 'number' == typeof t,
        s = 'number' == typeof r,
        l = 'number' == typeof n,
        i = 'number' == typeof a,
        c = l && (!o || t < n),
        u = i && (!s || r > a)
      if ((o || l) && (s || i))
        return `${c ? '(' : '['}${c ? n : t}, ${u ? a : r}${u ? ')' : ']'}`
      if (o || l) return `${c ? '>' : '≥'} ${c ? n : t}`
      if (s || i) return `${u ? '<' : '≤'} ${u ? a : r}`
      return null
    })(e)
    null !== n && t.push({ scope: 'number', value: n }),
      e?.format && t.push({ scope: 'string', value: e.format })
    const a = stringifyConstraintRange('characters', e?.minLength, e?.maxLength)
    null !== a && t.push({ scope: 'string', value: a }),
      e?.pattern && t.push({ scope: 'string', value: `matches ${e?.pattern}` }),
      e?.contentMediaType &&
        t.push({ scope: 'string', value: `media type: ${e.contentMediaType}` }),
      e?.contentEncoding &&
        t.push({ scope: 'string', value: `encoding: ${e.contentEncoding}` })
    const o = stringifyConstraintRange(
      e?.hasUniqueItems ? 'unique items' : 'items',
      e?.minItems,
      e?.maxItems,
    )
    null !== o && t.push({ scope: 'array', value: o })
    const s = stringifyConstraintRange(
      'contained items',
      e?.minContains,
      e?.maxContains,
    )
    null !== s && t.push({ scope: 'array', value: s })
    const l = stringifyConstraintRange(
      'properties',
      e?.minProperties,
      e?.maxProperties,
    )
    return null !== l && t.push({ scope: 'object', value: l }), t
  },
  getDependentRequired = (e, t) =>
    t?.dependentRequired
      ? Array.from(
          Object.entries(t.dependentRequired).reduce(
            (t, [r, n]) =>
              Array.isArray(n) && n.includes(e) ? (t.add(r), t) : t,
            new Set(),
          ),
        )
      : [],
  withJSONSchemaContext = (e, t = {}) => {
    const r = {
        components: {
          JSONSchema: vs,
          Keyword$schema: keywords_$schema,
          Keyword$vocabulary: $vocabulary_$vocabulary,
          Keyword$id: keywords_$id,
          Keyword$anchor: keywords_$anchor,
          Keyword$dynamicAnchor: keywords_$dynamicAnchor,
          Keyword$ref: keywords_$ref,
          Keyword$dynamicRef: keywords_$dynamicRef,
          Keyword$defs: keywords_$defs,
          Keyword$comment: keywords_$comment,
          KeywordAllOf: keywords_AllOf,
          KeywordAnyOf: keywords_AnyOf,
          KeywordOneOf: keywords_OneOf,
          KeywordNot: keywords_Not,
          KeywordIf: keywords_If,
          KeywordThen: keywords_Then,
          KeywordElse: keywords_Else,
          KeywordDependentSchemas: keywords_DependentSchemas,
          KeywordPrefixItems: keywords_PrefixItems,
          KeywordItems: keywords_Items,
          KeywordContains: keywords_Contains,
          KeywordProperties: keywords_Properties_Properties,
          KeywordPatternProperties: PatternProperties_PatternProperties,
          KeywordAdditionalProperties: keywords_AdditionalProperties,
          KeywordPropertyNames: keywords_PropertyNames,
          KeywordUnevaluatedItems: keywords_UnevaluatedItems,
          KeywordUnevaluatedProperties: keywords_UnevaluatedProperties,
          KeywordType: keywords_Type,
          KeywordEnum: Enum_Enum,
          KeywordConst: keywords_Const,
          KeywordConstraint: bs,
          KeywordDependentRequired: DependentRequired_DependentRequired,
          KeywordContentSchema: keywords_ContentSchema,
          KeywordTitle: Title_Title,
          KeywordDescription: keywords_Description_Description,
          KeywordDefault: keywords_Default,
          KeywordDeprecated: keywords_Deprecated,
          KeywordReadOnly: keywords_ReadOnly,
          KeywordWriteOnly: keywords_WriteOnly,
          Accordion: Accordion_Accordion,
          ExpandDeepButton: ExpandDeepButton_ExpandDeepButton,
          ChevronRightIcon: icons_ChevronRight,
          ...t.components,
        },
        config: {
          default$schema: 'https://json-schema.org/draft/2020-12/schema',
          defaultExpandedLevels: 0,
          ...t.config,
        },
        fn: {
          upperFirst: fn_upperFirst,
          getTitle,
          getType,
          isBooleanJSONSchema,
          hasKeyword,
          isExpandable,
          stringify: fn_stringify,
          stringifyConstraints,
          getDependentRequired,
          ...t.fn,
        },
      },
      HOC = t =>
        Xe.default.createElement(
          gs.Provider,
          { value: r },
          Xe.default.createElement(e, t),
        )
    return (
      (HOC.contexts = { JSONSchemaContext: gs }),
      (HOC.displayName = e.displayName),
      HOC
    )
  }
var json_schema_2020_12 = () => ({
    components: {
      JSONSchema202012: vs,
      JSONSchema202012Keyword$schema: keywords_$schema,
      JSONSchema202012Keyword$vocabulary: $vocabulary_$vocabulary,
      JSONSchema202012Keyword$id: keywords_$id,
      JSONSchema202012Keyword$anchor: keywords_$anchor,
      JSONSchema202012Keyword$dynamicAnchor: keywords_$dynamicAnchor,
      JSONSchema202012Keyword$ref: keywords_$ref,
      JSONSchema202012Keyword$dynamicRef: keywords_$dynamicRef,
      JSONSchema202012Keyword$defs: keywords_$defs,
      JSONSchema202012Keyword$comment: keywords_$comment,
      JSONSchema202012KeywordAllOf: keywords_AllOf,
      JSONSchema202012KeywordAnyOf: keywords_AnyOf,
      JSONSchema202012KeywordOneOf: keywords_OneOf,
      JSONSchema202012KeywordNot: keywords_Not,
      JSONSchema202012KeywordIf: keywords_If,
      JSONSchema202012KeywordThen: keywords_Then,
      JSONSchema202012KeywordElse: keywords_Else,
      JSONSchema202012KeywordDependentSchemas: keywords_DependentSchemas,
      JSONSchema202012KeywordPrefixItems: keywords_PrefixItems,
      JSONSchema202012KeywordItems: keywords_Items,
      JSONSchema202012KeywordContains: keywords_Contains,
      JSONSchema202012KeywordProperties: keywords_Properties_Properties,
      JSONSchema202012KeywordPatternProperties:
        PatternProperties_PatternProperties,
      JSONSchema202012KeywordAdditionalProperties:
        keywords_AdditionalProperties,
      JSONSchema202012KeywordPropertyNames: keywords_PropertyNames,
      JSONSchema202012KeywordUnevaluatedItems: keywords_UnevaluatedItems,
      JSONSchema202012KeywordUnevaluatedProperties:
        keywords_UnevaluatedProperties,
      JSONSchema202012KeywordType: keywords_Type,
      JSONSchema202012KeywordEnum: Enum_Enum,
      JSONSchema202012KeywordConst: keywords_Const,
      JSONSchema202012KeywordConstraint: bs,
      JSONSchema202012KeywordDependentRequired:
        DependentRequired_DependentRequired,
      JSONSchema202012KeywordContentSchema: keywords_ContentSchema,
      JSONSchema202012KeywordTitle: Title_Title,
      JSONSchema202012KeywordDescription: keywords_Description_Description,
      JSONSchema202012KeywordDefault: keywords_Default,
      JSONSchema202012KeywordDeprecated: keywords_Deprecated,
      JSONSchema202012KeywordReadOnly: keywords_ReadOnly,
      JSONSchema202012KeywordWriteOnly: keywords_WriteOnly,
      JSONSchema202012Accordion: Accordion_Accordion,
      JSONSchema202012ExpandDeepButton: ExpandDeepButton_ExpandDeepButton,
      JSONSchema202012ChevronRightIcon: icons_ChevronRight,
      withJSONSchema202012Context: withJSONSchemaContext,
      JSONSchema202012DeepExpansionContext: () => Es,
    },
    fn: {
      upperFirst: fn_upperFirst,
      jsonSchema202012: {
        isExpandable,
        hasKeyword,
        useFn,
        useConfig,
        useComponent,
        useIsExpandedDeeply,
      },
    },
  }),
  ws = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return ve.default
    },
  })
var array = (e, { sample: t }) =>
  ((e, t = {}) => {
    const { minItems: r, maxItems: n, uniqueItems: a } = t,
      { contains: o, minContains: s, maxContains: l } = t
    let i = [...e]
    if (null != o && 'object' == typeof o) {
      if (Number.isInteger(s) && s > 1) {
        const e = i.at(0)
        for (let t = 1; t < s; t += 1) i.unshift(e)
      }
      Number.isInteger(l)
    }
    if (
      (Number.isInteger(n) && n > 0 && (i = e.slice(0, n)),
      Number.isInteger(r) && r > 0)
    )
      for (let e = 0; i.length < r; e += 1) i.push(i[e % i.length])
    return !0 === a && (i = Array.from(new Set(i))), i
  })(t, e)
var object = () => {
  throw new Error('Not implemented')
}
const bytes = e => vt()(e),
  pick = e => e.at(0),
  predicates_isBooleanJSONSchema = e => 'boolean' == typeof e,
  isJSONSchemaObject = e => (0, ws.default)(e),
  isJSONSchema = e => predicates_isBooleanJSONSchema(e) || isJSONSchemaObject(e)
var Cs = class Registry {
  data = {}
  register(e, t) {
    this.data[e] = t
  }
  unregister(e) {
    void 0 === e ? (this.data = {}) : delete this.data[e]
  }
  get(e) {
    return this.data[e]
  }
}
var int32 = () => (2 ** 30) >>> 0
var int64 = () => 2 ** 53 - 1
var generators_float = () => 0.1
var generators_double = () => 0.1
var email = () => 'user@example.com'
var idn_email = () => '실례@example.com'
var hostname = () => 'example.com'
var idn_hostname = () => '실례.com'
var ipv4 = () => '198.51.100.42'
var ipv6 = () => '2001:0db8:5b96:0000:0000:426f:8e17:642a'
var uri = () => 'https://example.com/'
var uri_reference = () => 'path/index.html'
var iri = () => 'https://실례.com/'
var iri_reference = () => 'path/실례.html'
var uuid = () => '3fa85f64-5717-4562-b3fc-2c963f66afa6'
var uri_template = () => 'https://example.com/dictionary/{term:1}/{term}'
var json_pointer = () => '/a/b/c'
var relative_json_pointer = () => '1/0'
var date_time = () => new Date().toISOString()
var date = () => new Date().toISOString().substring(0, 10)
var time = () => new Date().toISOString().substring(11)
var duration = () => 'P3D'
var generators_password = () => '********'
var regex = () => '^[a-z]+$'
const xs = new (class FormatRegistry extends Cs {
    #e = {
      int32,
      int64,
      float: generators_float,
      double: generators_double,
      email,
      'idn-email': idn_email,
      hostname,
      'idn-hostname': idn_hostname,
      ipv4,
      ipv6,
      uri,
      'uri-reference': uri_reference,
      iri,
      'iri-reference': iri_reference,
      uuid,
      'uri-template': uri_template,
      'json-pointer': json_pointer,
      'relative-json-pointer': relative_json_pointer,
      'date-time': date_time,
      date,
      time,
      duration,
      password: generators_password,
      regex,
    }
    data = { ...this.#e }
    get defaults() {
      return { ...this.#e }
    }
  })(),
  formatAPI = (e, t) =>
    'function' == typeof t
      ? xs.register(e, t)
      : null === t
      ? xs.unregister(e)
      : xs.get(e)
formatAPI.getDefaults = () => xs.defaults
var Os = formatAPI,
  ks = __webpack_require__(287).Buffer
var _7bit = e => ks.from(e).toString('ascii'),
  Ns = __webpack_require__(287).Buffer
var _8bit = e => Ns.from(e).toString('utf8'),
  As = __webpack_require__(287).Buffer
var binary = e => As.from(e).toString('binary')
var quoted_printable = e => {
    let t = ''
    for (let r = 0; r < e.length; r++) {
      const n = e.charCodeAt(r)
      if (61 === n) t += '=3D'
      else if (
        (n >= 33 && n <= 60) ||
        (n >= 62 && n <= 126) ||
        9 === n ||
        32 === n
      )
        t += e.charAt(r)
      else if (13 === n || 10 === n) t += '\r\n'
      else if (n > 126) {
        const n = unescape(encodeURIComponent(e.charAt(r)))
        for (let e = 0; e < n.length; e++)
          t +=
            '=' + ('0' + n.charCodeAt(e).toString(16)).slice(-2).toUpperCase()
      } else t += '=' + ('0' + n.toString(16)).slice(-2).toUpperCase()
    }
    return t
  },
  Is = __webpack_require__(287).Buffer
var base16 = e => Is.from(e).toString('hex'),
  Rs = __webpack_require__(287).Buffer
var base32 = e => {
    const t = Rs.from(e).toString('utf8'),
      r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
    let n = 0,
      a = '',
      o = 0,
      s = 0
    for (let e = 0; e < t.length; e++)
      for (o = (o << 8) | t.charCodeAt(e), s += 8; s >= 5; )
        (a += r.charAt((o >>> (s - 5)) & 31)), (s -= 5)
    s > 0 &&
      ((a += r.charAt((o << (5 - s)) & 31)),
      (n = (8 - ((8 * t.length) % 5)) % 5))
    for (let e = 0; e < n; e++) a += '='
    return a
  },
  Ts = __webpack_require__(287).Buffer
var base64 = e => Ts.from(e).toString('base64'),
  Bs = __webpack_require__(287).Buffer
var base64url = e => Bs.from(e).toString('base64url')
const js = new (class EncoderRegistry extends Cs {
    #e = {
      '7bit': _7bit,
      '8bit': _8bit,
      binary,
      'quoted-printable': quoted_printable,
      base16,
      base32,
      base64,
      base64url,
    }
    data = { ...this.#e }
    get defaults() {
      return { ...this.#e }
    }
  })(),
  encoderAPI = (e, t) =>
    'function' == typeof t
      ? js.register(e, t)
      : null === t
      ? js.unregister(e)
      : js.get(e)
encoderAPI.getDefaults = () => js.defaults
var Ps = encoderAPI
var Ms = {
  'text/plain': () => 'string',
  'text/css': () => '.selector { border: 1px solid red }',
  'text/csv': () => 'value1,value2,value3',
  'text/html': () => '<p>content</p>',
  'text/calendar': () => 'BEGIN:VCALENDAR',
  'text/javascript': () => "console.dir('Hello world!');",
  'text/xml': () => '<person age="30">John Doe</person>',
  'text/*': () => 'string',
}
var qs = { 'image/*': () => bytes(25).toString('binary') }
var Ls = { 'audio/*': () => bytes(25).toString('binary') }
var Ds = { 'video/*': () => bytes(25).toString('binary') }
var Us = {
  'application/json': () => '{"key":"value"}',
  'application/ld+json': () => '{"name": "John Doe"}',
  'application/x-httpd-php': () => "<?php echo '<p>Hello World!</p>'; ?>",
  'application/rtf': () => String.raw`{\rtf1\adeflang1025\ansi\ansicpg1252\uc1`,
  'application/x-sh': () => 'echo "Hello World!"',
  'application/xhtml+xml': () => '<p>content</p>',
  'application/*': () => bytes(25).toString('binary'),
}
const $s = new (class MediaTypeRegistry extends Cs {
    #e = { ...Ms, ...qs, ...Ls, ...Ds, ...Us }
    data = { ...this.#e }
    get defaults() {
      return { ...this.#e }
    }
  })(),
  mediaTypeAPI = (e, t) => {
    if ('function' == typeof t) return $s.register(e, t)
    if (null === t) return $s.unregister(e)
    const r = e.split(';').at(0),
      n = `${r.split('/').at(0)}/*`
    return $s.get(e) || $s.get(r) || $s.get(n)
  }
mediaTypeAPI.getDefaults = () => $s.defaults
var Js = mediaTypeAPI
const applyStringConstraints = (e, t = {}) => {
  const { maxLength: r, minLength: n } = t
  let a = e
  if (
    (Number.isInteger(r) && r > 0 && (a = a.slice(0, r)),
    Number.isInteger(n) && n > 0)
  ) {
    let e = 0
    for (; a.length < n; ) a += a[e++ % a.length]
  }
  return a
}
var types_string = (e, { sample: t } = {}) => {
  const { contentEncoding: r, contentMediaType: n, contentSchema: a } = e,
    { pattern: o, format: s } = e,
    l = Ps(r) || aa.default
  let i
  return (
    (i =
      'string' == typeof o
        ? applyStringConstraints(
            (e => {
              try {
                return new Rr.default(e).gen()
              } catch {
                return 'string'
              }
            })(o),
            e,
          )
        : 'string' == typeof s
        ? (e => {
            const { format: t } = e,
              r = Os(t)
            return 'function' == typeof r ? r(e) : 'string'
          })(e)
        : isJSONSchema(a) && 'string' == typeof n && void 0 !== t
        ? Array.isArray(t) || 'object' == typeof t
          ? JSON.stringify(t)
          : applyStringConstraints(String(t), e)
        : 'string' == typeof n
        ? (e => {
            const { contentMediaType: t } = e,
              r = Js(t)
            return 'function' == typeof r ? r(e) : 'string'
          })(e)
        : applyStringConstraints('string', e)),
    l(i)
  )
}
const applyNumberConstraints = (e, t = {}) => {
  const {
      minimum: r,
      maximum: n,
      exclusiveMinimum: a,
      exclusiveMaximum: o,
    } = t,
    { multipleOf: s } = t,
    l = Number.isInteger(e) ? 1 : Number.EPSILON
  let i = 'number' == typeof r ? r : null,
    c = 'number' == typeof n ? n : null,
    u = e
  if (
    ('number' == typeof a && (i = null !== i ? Math.max(i, a + l) : a + l),
    'number' == typeof o && (c = null !== c ? Math.min(c, o - l) : o - l),
    (u = (i > c && e) || i || c || u),
    'number' == typeof s && s > 0)
  ) {
    const e = u % s
    u = 0 === e ? u : u + s - e
  }
  return u
}
var types_number = e => {
  const { format: t } = e
  let r
  return (
    (r =
      'string' == typeof t
        ? (e => {
            const { format: t } = e,
              r = Os(t)
            return 'function' == typeof r ? r(e) : 0
          })(e)
        : 0),
    applyNumberConstraints(r, e)
  )
}
var types_integer = e => {
  const { format: t } = e
  let r
  return (
    (r =
      'string' == typeof t
        ? (e => {
            const { format: t } = e,
              r = Os(t)
            if ('function' == typeof r) return r(e)
            switch (t) {
              case 'int32':
                return int32()
              case 'int64':
                return int64()
            }
            return 0
          })(e)
        : 0),
    applyNumberConstraints(r, e)
  )
}
var types_boolean = e => 'boolean' != typeof e.default || e.default
var Vs = new Proxy(
  {
    array,
    object,
    string: types_string,
    number: types_number,
    integer: types_integer,
    boolean: types_boolean,
    null: () => null,
  },
  {
    get: (e, t) =>
      'string' == typeof t && Object.hasOwn(e, t)
        ? e[t]
        : () => `Unknown Type: ${t}`,
  },
)
const Ks = [
    'array',
    'object',
    'number',
    'integer',
    'string',
    'boolean',
    'null',
  ],
  hasExample = e => {
    if (!isJSONSchemaObject(e)) return !1
    const { examples: t, example: r, default: n } = e
    return !!(Array.isArray(t) && t.length >= 1) || void 0 !== n || void 0 !== r
  },
  extractExample = e => {
    if (!isJSONSchemaObject(e)) return null
    const { examples: t, example: r, default: n } = e
    return Array.isArray(t) && t.length >= 1
      ? t.at(0)
      : void 0 !== n
      ? n
      : void 0 !== r
      ? r
      : void 0
  },
  zs = {
    array: [
      'items',
      'prefixItems',
      'contains',
      'maxContains',
      'minContains',
      'maxItems',
      'minItems',
      'uniqueItems',
      'unevaluatedItems',
    ],
    object: [
      'properties',
      'additionalProperties',
      'patternProperties',
      'propertyNames',
      'minProperties',
      'maxProperties',
      'required',
      'dependentSchemas',
      'dependentRequired',
      'unevaluatedProperties',
    ],
    string: [
      'pattern',
      'format',
      'minLength',
      'maxLength',
      'contentEncoding',
      'contentMediaType',
      'contentSchema',
    ],
    integer: [
      'minimum',
      'maximum',
      'exclusiveMinimum',
      'exclusiveMaximum',
      'multipleOf',
    ],
  }
zs.number = zs.integer
const Fs = 'string',
  inferTypeFromValue = e =>
    void 0 === e
      ? null
      : null === e
      ? 'null'
      : Array.isArray(e)
      ? 'array'
      : Number.isInteger(e)
      ? 'integer'
      : typeof e,
  foldType = e => {
    if (Array.isArray(e) && e.length >= 1) {
      if (e.includes('array')) return 'array'
      if (e.includes('object')) return 'object'
      {
        const t = pick(e)
        if (Ks.includes(t)) return t
      }
    }
    return Ks.includes(e) ? e : null
  },
  inferType = (e, t = new WeakSet()) => {
    if (!isJSONSchemaObject(e)) return Fs
    if (t.has(e)) return Fs
    t.add(e)
    let { type: r, const: n } = e
    if (((r = foldType(r)), 'string' != typeof r)) {
      const t = Object.keys(zs)
      e: for (let n = 0; n < t.length; n += 1) {
        const a = t[n],
          o = zs[a]
        for (let t = 0; t < o.length; t += 1) {
          const n = o[t]
          if (Object.hasOwn(e, n)) {
            r = a
            break e
          }
        }
      }
    }
    if ('string' != typeof r && void 0 !== n) {
      const e = inferTypeFromValue(n)
      r = 'string' == typeof e ? e : r
    }
    if ('string' != typeof r) {
      const combineTypes = r => {
          if (Array.isArray(e[r])) {
            const n = e[r].map(e => inferType(e, t))
            return foldType(n)
          }
          return null
        },
        n = combineTypes('allOf'),
        a = combineTypes('anyOf'),
        o = combineTypes('oneOf'),
        s = e.not ? inferType(e.not, t) : null
      ;(n || a || o || s) && (r = foldType([n, a, o, s].filter(Boolean)))
    }
    if ('string' != typeof r && hasExample(e)) {
      const t = extractExample(e),
        n = inferTypeFromValue(t)
      r = 'string' == typeof n ? n : r
    }
    return t.delete(e), r || Fs
  },
  type_getType = e => inferType(e),
  typeCast = e =>
    predicates_isBooleanJSONSchema(e)
      ? (e => (!1 === e ? { not: {} } : {}))(e)
      : isJSONSchemaObject(e)
      ? e
      : {},
  merge = (e, t, r = {}) => {
    if (predicates_isBooleanJSONSchema(e) && !0 === e) return !0
    if (predicates_isBooleanJSONSchema(e) && !1 === e) return !1
    if (predicates_isBooleanJSONSchema(t) && !0 === t) return !0
    if (predicates_isBooleanJSONSchema(t) && !1 === t) return !1
    if (!isJSONSchema(e)) return t
    if (!isJSONSchema(t)) return e
    const n = { ...t, ...e }
    if (
      t.type &&
      e.type &&
      Array.isArray(t.type) &&
      'string' == typeof t.type
    ) {
      const r = normalizeArray(t.type).concat(e.type)
      n.type = Array.from(new Set(r))
    }
    if (
      (Array.isArray(t.required) &&
        Array.isArray(e.required) &&
        (n.required = [...new Set([...e.required, ...t.required])]),
      t.properties && e.properties)
    ) {
      const a = new Set([
        ...Object.keys(t.properties),
        ...Object.keys(e.properties),
      ])
      n.properties = {}
      for (const o of a) {
        const a = t.properties[o] || {},
          s = e.properties[o] || {}
        ;(a.readOnly && !r.includeReadOnly) ||
        (a.writeOnly && !r.includeWriteOnly)
          ? (n.required = (n.required || []).filter(e => e !== o))
          : (n.properties[o] = merge(s, a, r))
      }
    }
    return (
      isJSONSchema(t.items) &&
        isJSONSchema(e.items) &&
        (n.items = merge(e.items, t.items, r)),
      isJSONSchema(t.contains) &&
        isJSONSchema(e.contains) &&
        (n.contains = merge(e.contains, t.contains, r)),
      isJSONSchema(t.contentSchema) &&
        isJSONSchema(e.contentSchema) &&
        (n.contentSchema = merge(e.contentSchema, t.contentSchema, r)),
      n
    )
  }
var Ws = merge
const main_sampleFromSchemaGeneric = (e, t = {}, r = void 0, n = !1) => {
    if (null == e && void 0 === r) return
    'function' == typeof e?.toJS && (e = e.toJS()), (e = typeCast(e))
    let a = void 0 !== r || hasExample(e)
    const o = !a && Array.isArray(e.oneOf) && e.oneOf.length > 0,
      s = !a && Array.isArray(e.anyOf) && e.anyOf.length > 0
    if (!a && (o || s)) {
      const r = typeCast(pick(o ? e.oneOf : e.anyOf))
      !(e = Ws(e, r, t)).xml && r.xml && (e.xml = r.xml),
        hasExample(e) && hasExample(r) && (a = !0)
    }
    const l = {}
    let {
        xml: i,
        properties: c,
        additionalProperties: u,
        items: d,
        contains: p,
      } = e || {},
      m = type_getType(e),
      { includeReadOnly: f, includeWriteOnly: h } = t
    i = i || {}
    let g,
      { name: y, prefix: S, namespace: _ } = i,
      v = {}
    if (
      (Object.hasOwn(e, 'type') || (e.type = m),
      n && ((y = y || 'notagname'), (g = (S ? `${S}:` : '') + y), _))
    ) {
      l[S ? `xmlns:${S}` : 'xmlns'] = _
    }
    n && (v[g] = [])
    const b = objectify(c)
    let w,
      C = 0
    const hasExceededMaxProperties = () =>
        Number.isInteger(e.maxProperties) &&
        e.maxProperties > 0 &&
        C >= e.maxProperties,
      canAddProperty = t =>
        !(Number.isInteger(e.maxProperties) && e.maxProperties > 0) ||
        (!hasExceededMaxProperties() &&
          (!(t =>
            !Array.isArray(e.required) ||
            0 === e.required.length ||
            !e.required.includes(t))(t) ||
            e.maxProperties -
              C -
              (() => {
                if (!Array.isArray(e.required) || 0 === e.required.length)
                  return 0
                let t = 0
                return (
                  n
                    ? e.required.forEach(e => (t += void 0 === v[e] ? 0 : 1))
                    : e.required.forEach(e => {
                        t += void 0 === v[g]?.find(t => void 0 !== t[e]) ? 0 : 1
                      }),
                  e.required.length - t
                )
              })() >
              0))
    if (
      ((w = n
        ? (r, a = void 0) => {
            if (e && b[r]) {
              if (((b[r].xml = b[r].xml || {}), b[r].xml.attribute)) {
                const e = Array.isArray(b[r].enum) ? pick(b[r].enum) : void 0
                if (hasExample(b[r]))
                  l[b[r].xml.name || r] = extractExample(b[r])
                else if (void 0 !== e) l[b[r].xml.name || r] = e
                else {
                  const e = typeCast(b[r]),
                    t = type_getType(e),
                    n = b[r].xml.name || r
                  l[n] = Vs[t](e)
                }
                return
              }
              b[r].xml.name = b[r].xml.name || r
            } else b[r] || !1 === u || (b[r] = { xml: { name: r } })
            let o = main_sampleFromSchemaGeneric(b[r], t, a, n)
            canAddProperty(r) &&
              (C++, Array.isArray(o) ? (v[g] = v[g].concat(o)) : v[g].push(o))
          }
        : (r, a) => {
            if (canAddProperty(r)) {
              if (
                (0, ws.default)(e.discriminator?.mapping) &&
                e.discriminator.propertyName === r &&
                'string' == typeof e.$$ref
              ) {
                for (const t in e.discriminator.mapping)
                  if (-1 !== e.$$ref.search(e.discriminator.mapping[t])) {
                    v[r] = t
                    break
                  }
              } else v[r] = main_sampleFromSchemaGeneric(b[r], t, a, n)
              C++
            }
          }),
      a)
    ) {
      let a
      if (((a = void 0 !== r ? r : extractExample(e)), !n)) {
        if ('number' == typeof a && 'string' === m) return `${a}`
        if ('string' != typeof a || 'string' === m) return a
        try {
          return JSON.parse(a)
        } catch {
          return a
        }
      }
      if ('array' === m) {
        if (!Array.isArray(a)) {
          if ('string' == typeof a) return a
          a = [a]
        }
        let r = []
        return (
          isJSONSchemaObject(d) &&
            ((d.xml = d.xml || i || {}),
            (d.xml.name = d.xml.name || i.name),
            (r = a.map(e => main_sampleFromSchemaGeneric(d, t, e, n)))),
          isJSONSchemaObject(p) &&
            ((p.xml = p.xml || i || {}),
            (p.xml.name = p.xml.name || i.name),
            (r = [main_sampleFromSchemaGeneric(p, t, void 0, n), ...r])),
          (r = Vs.array(e, { sample: r })),
          i.wrapped
            ? ((v[g] = r), (0, Tr.default)(l) || v[g].push({ _attr: l }))
            : (v = r),
          v
        )
      }
      if ('object' === m) {
        if ('string' == typeof a) return a
        for (const e in a)
          Object.hasOwn(a, e) &&
            ((b[e]?.readOnly && !f) ||
              (b[e]?.writeOnly && !h) ||
              (b[e]?.xml?.attribute
                ? (l[b[e].xml.name || e] = a[e])
                : w(e, a[e])))
        return (0, Tr.default)(l) || v[g].push({ _attr: l }), v
      }
      return (v[g] = (0, Tr.default)(l) ? a : [{ _attr: l }, a]), v
    }
    if ('array' === m) {
      let r = []
      if (isJSONSchemaObject(p))
        if (
          (n &&
            ((p.xml = p.xml || e.xml || {}),
            (p.xml.name = p.xml.name || i.name)),
          Array.isArray(p.anyOf))
        ) {
          const { anyOf: e, ...a } = d
          r.push(
            ...p.anyOf.map(e =>
              main_sampleFromSchemaGeneric(Ws(e, a, t), t, void 0, n),
            ),
          )
        } else if (Array.isArray(p.oneOf)) {
          const { oneOf: e, ...a } = d
          r.push(
            ...p.oneOf.map(e =>
              main_sampleFromSchemaGeneric(Ws(e, a, t), t, void 0, n),
            ),
          )
        } else {
          if (!(!n || (n && i.wrapped)))
            return main_sampleFromSchemaGeneric(p, t, void 0, n)
          r.push(main_sampleFromSchemaGeneric(p, t, void 0, n))
        }
      if (isJSONSchemaObject(d))
        if (
          (n &&
            ((d.xml = d.xml || e.xml || {}),
            (d.xml.name = d.xml.name || i.name)),
          Array.isArray(d.anyOf))
        ) {
          const { anyOf: e, ...a } = d
          r.push(
            ...d.anyOf.map(e =>
              main_sampleFromSchemaGeneric(Ws(e, a, t), t, void 0, n),
            ),
          )
        } else if (Array.isArray(d.oneOf)) {
          const { oneOf: e, ...a } = d
          r.push(
            ...d.oneOf.map(e =>
              main_sampleFromSchemaGeneric(Ws(e, a, t), t, void 0, n),
            ),
          )
        } else {
          if (!(!n || (n && i.wrapped)))
            return main_sampleFromSchemaGeneric(d, t, void 0, n)
          r.push(main_sampleFromSchemaGeneric(d, t, void 0, n))
        }
      return (
        (r = Vs.array(e, { sample: r })),
        n && i.wrapped
          ? ((v[g] = r), (0, Tr.default)(l) || v[g].push({ _attr: l }), v)
          : r
      )
    }
    if ('object' === m) {
      for (let e in b)
        Object.hasOwn(b, e) &&
          (b[e]?.deprecated ||
            (b[e]?.readOnly && !f) ||
            (b[e]?.writeOnly && !h) ||
            w(e))
      if ((n && l && v[g].push({ _attr: l }), hasExceededMaxProperties()))
        return v
      if (predicates_isBooleanJSONSchema(u) && u)
        n
          ? v[g].push({ additionalProp: 'Anything can be here' })
          : (v.additionalProp1 = {}),
          C++
      else if (isJSONSchemaObject(u)) {
        const r = u,
          a = main_sampleFromSchemaGeneric(r, t, void 0, n)
        if (
          n &&
          'string' == typeof r?.xml?.name &&
          'notagname' !== r?.xml?.name
        )
          v[g].push(a)
        else {
          const t =
            Number.isInteger(e.minProperties) &&
            e.minProperties > 0 &&
            C < e.minProperties
              ? e.minProperties - C
              : 3
          for (let e = 1; e <= t; e++) {
            if (hasExceededMaxProperties()) return v
            if (n) {
              const t = {}
              ;(t['additionalProp' + e] = a.notagname), v[g].push(t)
            } else v['additionalProp' + e] = a
            C++
          }
        }
      }
      return v
    }
    let x
    if (void 0 !== e.const) x = e.const
    else if (e && Array.isArray(e.enum)) x = pick(normalizeArray(e.enum))
    else {
      const r = isJSONSchemaObject(e.contentSchema)
        ? main_sampleFromSchemaGeneric(e.contentSchema, t, void 0, n)
        : void 0
      x = Vs[m](e, { sample: r })
    }
    return n ? ((v[g] = (0, Tr.default)(l) ? x : [{ _attr: l }, x]), v) : x
  },
  main_createXMLExample = (e, t, r) => {
    const n = main_sampleFromSchemaGeneric(e, t, r, !0)
    if (n)
      return 'string' == typeof n
        ? n
        : Ir()(n, { declaration: !0, indent: '\t' })
  },
  main_sampleFromSchema = (e, t, r) =>
    main_sampleFromSchemaGeneric(e, t, r, !1),
  main_resolver = (e, t, r) => [e, JSON.stringify(t), JSON.stringify(r)],
  Hs = utils_memoizeN(main_createXMLExample, main_resolver),
  Gs = utils_memoizeN(main_sampleFromSchema, main_resolver)
const Xs = new (class OptionRegistry extends Cs {
  #e = {}
  data = { ...this.#e }
  get defaults() {
    return { ...this.#e }
  }
})()
var api_optionAPI = (e, t) => (void 0 !== t && Xs.register(e, t), Xs.get(e))
const Ys = [{ when: /json/, shouldStringifyTypes: ['string'] }],
  Qs = ['object']
var fn_get_json_sample_schema = e => (t, r, n, a) => {
  const { fn: o } = e(),
    s = o.jsonSchema202012.memoizedSampleFromSchema(t, r, a),
    l = typeof s,
    i = Ys.reduce(
      (e, t) => (t.when.test(n) ? [...e, ...t.shouldStringifyTypes] : e),
      Qs,
    )
  return (0, gt.default)(i, e => e === l) ? JSON.stringify(s, null, 2) : s
}
var fn_get_yaml_sample_schema = e => (t, r, n, a) => {
  const { fn: o } = e(),
    s = o.jsonSchema202012.getJsonSampleSchema(t, r, n, a)
  let l
  try {
    ;(l = Ht.default.dump(
      Ht.default.load(s),
      { lineWidth: -1 },
      { schema: Ht.JSON_SCHEMA },
    )),
      '\n' === l[l.length - 1] && (l = l.slice(0, l.length - 1))
  } catch (e) {
    return console.error(e), 'error: could not generate yaml example'
  }
  return l.replace(/\t/g, '  ')
}
var fn_get_xml_sample_schema = e => (t, r, n) => {
  const { fn: a } = e()
  if ((t && !t.xml && (t.xml = {}), t && !t.xml.name)) {
    if (
      !t.$$ref &&
      (t.type || t.items || t.properties || t.additionalProperties)
    )
      return '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!-- XML example cannot be generated; root element name is undefined --\x3e'
    if (t.$$ref) {
      let e = t.$$ref.match(/\S*\/(\S+)$/)
      t.xml.name = e[1]
    }
  }
  return a.jsonSchema202012.memoizedCreateXMLExample(t, r, n)
}
var fn_get_sample_schema =
  e =>
  (t, r = '', n = {}, a = void 0) => {
    const { fn: o } = e()
    return (
      'function' == typeof t?.toJS && (t = t.toJS()),
      'function' == typeof a?.toJS && (a = a.toJS()),
      /xml/.test(r)
        ? o.jsonSchema202012.getXmlSampleSchema(t, n, a)
        : /(yaml|yml)/.test(r)
        ? o.jsonSchema202012.getYamlSampleSchema(t, n, r, a)
        : o.jsonSchema202012.getJsonSampleSchema(t, n, r, a)
    )
  }
var json_schema_2020_12_samples = ({ getSystem: e }) => {
  const t = fn_get_json_sample_schema(e),
    r = fn_get_yaml_sample_schema(e),
    n = fn_get_xml_sample_schema(e),
    a = fn_get_sample_schema(e)
  return {
    fn: {
      jsonSchema202012: {
        sampleFromSchema: main_sampleFromSchema,
        sampleFromSchemaGeneric: main_sampleFromSchemaGeneric,
        sampleOptionAPI: api_optionAPI,
        sampleEncoderAPI: Ps,
        sampleFormatAPI: Os,
        sampleMediaTypeAPI: Js,
        createXMLExample: main_createXMLExample,
        memoizedSampleFromSchema: Gs,
        memoizedCreateXMLExample: Hs,
        getJsonSampleSchema: t,
        getYamlSampleSchema: r,
        getXmlSampleSchema: n,
        getSampleSchema: a,
        mergeJsonSchema: Ws,
      },
    },
  }
}
function PresetApis() {
  return [base, oas3, json_schema_2020_12, json_schema_2020_12_samples, oas31]
}
var inline_plugin = e => () => ({ fn: e.fn, components: e.components })
var factorization_system = e => {
  const t = et()(
    {
      layout: { layout: e.layout, filter: e.filter },
      spec: { spec: '', url: e.url },
      requestSnippets: e.requestSnippets,
    },
    e.initialState,
  )
  if (e.initialState)
    for (const [r, n] of Object.entries(e.initialState))
      void 0 === n && delete t[r]
  return { system: { configs: e.configs }, plugins: e.presets, state: t }
}
var query = () => e => {
  const t = e.queryConfigEnabled
    ? (() => {
        const e = new URLSearchParams(dt.location.search)
        return Object.fromEntries(e)
      })()
    : {}
  return Object.entries(t).reduce(
    (e, [t, r]) => (
      'config' === t
        ? (e.configUrl = r)
        : 'urls.primaryName' === t
        ? (e[t] = r)
        : (e = (0, Cn.default)(e, t, r)),
      e
    ),
    {},
  )
}
var sources_url =
  ({ url: e, system: t }) =>
  async r => {
    if (!e) return {}
    if ('function' != typeof t.configsActions?.getConfigByUrl) return {}
    const n = (() => {
      const e = {}
      return (
        (e.promise = new Promise((t, r) => {
          ;(e.resolve = t), (e.reject = r)
        })),
        e
      )
    })()
    return (
      t.configsActions.getConfigByUrl(
        {
          url: e,
          loadRemoteConfig: !0,
          requestInterceptor: r.requestInterceptor,
          responseInterceptor: r.responseInterceptor,
        },
        e => {
          n.resolve(e)
        },
      ),
      n.promise
    )
  }
var runtime = () => () => {
  const e = {}
  return (
    globalThis.location &&
      (e.oauth2RedirectUrl = `${globalThis.location.protocol}//${
        globalThis.location.host
      }${globalThis.location.pathname.substring(
        0,
        globalThis.location.pathname.lastIndexOf('/'),
      )}/oauth2-redirect.html`),
    e
  )
}
var Zs = Object.freeze({
    dom_id: null,
    domNode: null,
    spec: {},
    url: '',
    urls: null,
    configUrl: null,
    layout: 'BaseLayout',
    docExpansion: 'list',
    maxDisplayedTags: -1,
    filter: !1,
    validatorUrl: 'https://validator.swagger.io/validator',
    oauth2RedirectUrl: void 0,
    persistAuthorization: !1,
    configs: {},
    displayOperationId: !1,
    displayRequestDuration: !1,
    deepLinking: !1,
    tryItOutEnabled: !1,
    requestInterceptor: e => ((e.curlOptions = []), e),
    responseInterceptor: e => e,
    showMutatedRequest: !0,
    defaultModelRendering: 'example',
    defaultModelExpandDepth: 1,
    defaultModelsExpandDepth: 1,
    showExtensions: !1,
    showCommonExtensions: !1,
    withCredentials: !1,
    requestSnippetsEnabled: !1,
    requestSnippets: {
      generators: {
        curl_bash: { title: 'cURL (bash)', syntax: 'bash' },
        curl_powershell: { title: 'cURL (PowerShell)', syntax: 'powershell' },
        curl_cmd: { title: 'cURL (CMD)', syntax: 'bash' },
      },
      defaultExpanded: !0,
      languages: null,
    },
    supportedSubmitMethods: [
      'get',
      'put',
      'post',
      'delete',
      'options',
      'head',
      'patch',
      'trace',
    ],
    queryConfigEnabled: !1,
    presets: [PresetApis],
    plugins: [],
    initialState: {},
    fn: {},
    components: {},
    syntaxHighlight: { activated: !0, theme: 'agate' },
    operationsSorter: null,
    tagsSorter: null,
    onComplete: null,
    modelPropertyMacro: null,
    parameterMacro: null,
  }),
  el = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return be.default
    },
  }),
  tl = (function (e) {
    var t = {}
    return __webpack_require__.d(t, e), t
  })({
    default: function () {
      return we.default
    },
  })
var type_casters_array = (e, t = []) => (Array.isArray(e) ? e : t)
var type_casters_boolean = (e, t = !1) =>
  !0 === e ||
  'true' === e ||
  1 === e ||
  '1' === e ||
  (!1 !== e && 'false' !== e && 0 !== e && '0' !== e && t)
var dom_node = e => (null === e || 'null' === e ? null : e)
var type_casters_filter = e => {
  const t = String(e)
  return type_casters_boolean(e, t)
}
var type_casters_function = (e, t) => ('function' == typeof e ? e : t)
var nullable_array = e => (Array.isArray(e) ? e : null)
var nullable_function = e => ('function' == typeof e ? e : null)
var nullable_string = e => (null === e || 'null' === e ? null : String(e))
var type_casters_number = (e, t = -1) => {
  const r = parseInt(e, 10)
  return Number.isNaN(r) ? t : r
}
var type_casters_object = (e, t = {}) => ((0, ws.default)(e) ? e : t)
var sorter = e => ('function' == typeof e || 'string' == typeof e ? e : null)
var type_casters_string = e => String(e)
var syntax_highlight = (e, t) =>
  (0, ws.default)(e)
    ? e
    : !1 === e || 'false' === e || 0 === e || '0' === e
    ? { activated: !1 }
    : t
var undefined_string = e =>
  void 0 === e || 'undefined' === e ? void 0 : String(e)
var rl = {
  components: { typeCaster: type_casters_object },
  configs: { typeCaster: type_casters_object },
  configUrl: { typeCaster: nullable_string },
  deepLinking: {
    typeCaster: type_casters_boolean,
    defaultValue: Zs.deepLinking,
  },
  defaultModelExpandDepth: {
    typeCaster: type_casters_number,
    defaultValue: Zs.defaultModelExpandDepth,
  },
  defaultModelRendering: { typeCaster: type_casters_string },
  defaultModelsExpandDepth: {
    typeCaster: type_casters_number,
    defaultValue: Zs.defaultModelsExpandDepth,
  },
  displayOperationId: {
    typeCaster: type_casters_boolean,
    defaultValue: Zs.displayOperationId,
  },
  displayRequestDuration: {
    typeCaster: type_casters_boolean,
    defaultValue: Zs.displayRequestDuration,
  },
  docExpansion: { typeCaster: type_casters_string },
  dom_id: { typeCaster: nullable_string },
  domNode: { typeCaster: dom_node },
  filter: { typeCaster: type_casters_filter },
  fn: { typeCaster: type_casters_object },
  initialState: { typeCaster: type_casters_object },
  layout: { typeCaster: type_casters_string },
  maxDisplayedTags: {
    typeCaster: type_casters_number,
    defaultValue: Zs.maxDisplayedTags,
  },
  modelPropertyMacro: { typeCaster: nullable_function },
  oauth2RedirectUrl: { typeCaster: undefined_string },
  onComplete: { typeCaster: nullable_function },
  operationsSorter: { typeCaster: sorter },
  paramaterMacro: { typeCaster: nullable_function },
  persistAuthorization: {
    typeCaster: type_casters_boolean,
    defaultValue: Zs.persistAuthorization,
  },
  plugins: { typeCaster: type_casters_array, defaultValue: Zs.plugins },
  presets: { typeCaster: type_casters_array, defaultValue: Zs.presets },
  requestInterceptor: {
    typeCaster: type_casters_function,
    defaultValue: Zs.requestInterceptor,
  },
  requestSnippets: {
    typeCaster: type_casters_object,
    defaultValue: Zs.requestSnippets,
  },
  requestSnippetsEnabled: {
    typeCaster: type_casters_boolean,
    defaultValue: Zs.requestSnippetsEnabled,
  },
  responseInterceptor: {
    typeCaster: type_casters_function,
    defaultValue: Zs.responseInterceptor,
  },
  showCommonExtensions: {
    typeCaster: type_casters_boolean,
    defaultValue: Zs.showCommonExtensions,
  },
  showExtensions: {
    typeCaster: type_casters_boolean,
    defaultValue: Zs.showExtensions,
  },
  showMutatedRequest: {
    typeCaster: type_casters_boolean,
    defaultValue: Zs.showMutatedRequest,
  },
  spec: { typeCaster: type_casters_object, defaultValue: Zs.spec },
  supportedSubmitMethods: {
    typeCaster: type_casters_array,
    defaultValue: Zs.supportedSubmitMethods,
  },
  syntaxHighlight: {
    typeCaster: syntax_highlight,
    defaultValue: Zs.syntaxHighlight,
  },
  'syntaxHighlight.activated': {
    typeCaster: type_casters_boolean,
    defaultValue: Zs.syntaxHighlight.activated,
  },
  'syntaxHighlight.theme': { typeCaster: type_casters_string },
  tagsSorter: { typeCaster: sorter },
  tryItOutEnabled: {
    typeCaster: type_casters_boolean,
    defaultValue: Zs.tryItOutEnabled,
  },
  url: { typeCaster: type_casters_string },
  urls: { typeCaster: nullable_array },
  'urls.primaryName': { typeCaster: type_casters_string },
  validatorUrl: { typeCaster: nullable_string },
  withCredentials: {
    typeCaster: type_casters_boolean,
    defaultValue: Zs.withCredentials,
  },
}
var type_cast = e =>
  Object.entries(rl).reduce(
    (e, [t, { typeCaster: r, defaultValue: n }]) => {
      if ((0, el.default)(e, t)) {
        const a = r((0, ar.default)(e, t), n)
        e = (0, tl.default)(t, a, e)
      }
      return e
    },
    { ...e },
  )
var config_merge = (e, ...t) => {
  let r = Symbol.for('domNode'),
    n = Symbol.for('primaryName')
  const a = []
  for (const e of t) {
    const t = { ...e }
    Object.hasOwn(t, 'domNode') && ((r = t.domNode), delete t.domNode),
      Object.hasOwn(t, 'urls.primaryName')
        ? ((n = t['urls.primaryName']), delete t['urls.primaryName'])
        : Array.isArray(t.urls) &&
          Object.hasOwn(t.urls, 'primaryName') &&
          ((n = t.urls.primaryName), delete t.urls.primaryName),
      a.push(t)
  }
  const o = et()(e, ...a)
  return (
    r !== Symbol.for('domNode') && (o.domNode = r),
    n !== Symbol.for('primaryName') &&
      Array.isArray(o.urls) &&
      (o.urls.primaryName = n),
    type_cast(o)
  )
}
function SwaggerUI(e) {
  const t = query()(e),
    r = runtime()(),
    n = SwaggerUI.config.merge({}, SwaggerUI.config.defaults, r, e, t),
    a = factorization_system(n),
    o = inline_plugin(n),
    s = new Store(a)
  s.register([n.plugins, o])
  const l = s.getSystem(),
    persistConfigs = e => {
      s.setConfigs(e), l.configsActions.loaded()
    },
    updateSpec = e => {
      !t.url && 'object' == typeof e.spec && Object.keys(e.spec).length > 0
        ? (l.specActions.updateUrl(''),
          l.specActions.updateLoadingStatus('success'),
          l.specActions.updateSpec(JSON.stringify(e.spec)))
        : 'function' == typeof l.specActions.download &&
          e.url &&
          !e.urls &&
          (l.specActions.updateUrl(e.url), l.specActions.download(e.url))
    },
    render = e => {
      if (e.domNode) l.render(e.domNode, 'App')
      else if (e.dom_id) {
        const t = document.querySelector(e.dom_id)
        l.render(t, 'App')
      } else
        null === e.dom_id ||
          null === e.domNode ||
          console.error(
            'Skipped rendering: no `dom_id` or `domNode` was specified',
          )
    }
  return n.configUrl
    ? ((async () => {
        const { configUrl: e } = n,
          r = await sources_url({ url: e, system: l })(n),
          a = SwaggerUI.config.merge({}, n, r, t)
        persistConfigs(a), null !== r && updateSpec(a), render(a)
      })(),
      l)
    : (persistConfigs(n), updateSpec(n), render(n), l)
}
;(SwaggerUI.System = Store),
  (SwaggerUI.config = {
    defaults: Zs,
    merge: config_merge,
    typeCast: type_cast,
    typeCastMappings: rl,
  }),
  (SwaggerUI.presets = { base, apis: PresetApis }),
  (SwaggerUI.plugins = {
    Auth: auth,
    Configs: configsPlugin,
    DeepLining: deep_linking,
    Err: err,
    Filter: filter,
    Icons: icons,
    JSONSchema5: json_schema_5,
    JSONSchema5Samples: json_schema_5_samples,
    JSONSchema202012: json_schema_2020_12,
    JSONSchema202012Samples: json_schema_2020_12_samples,
    Layout: plugins_layout,
    Logs: logs,
    OpenAPI30: oas3,
    OpenAPI31: oas3,
    OnComplete: on_complete,
    RequestSnippets: plugins_request_snippets,
    Spec: plugins_spec,
    SwaggerClient: swagger_client,
    Util: util,
    View: view,
    ViewLegacy: view_legacy,
    DownloadUrl: downloadUrlPlugin,
    SyntaxHighlighting: syntax_highlighting,
    Versions: versions,
    SafeRender: safe_render,
  })
var nl = SwaggerUI,
  al = Oe.A
export { al as default }
//# sourceMappingURL=swagger-ui-es-bundle-core.js.map
