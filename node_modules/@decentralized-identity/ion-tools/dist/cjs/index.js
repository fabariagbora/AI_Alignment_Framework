var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod3) => function __require() {
  return mod3 || (0, cb[__getOwnPropNames(cb)[0]])((mod3 = { exports: {} }).exports, mod3), mod3.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from3, except, desc) => {
  if (from3 && typeof from3 === "object" || typeof from3 === "function") {
    for (let key of __getOwnPropNames(from3))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from3[key], enumerable: !(desc = __getOwnPropDesc(from3, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod3, isNodeMode, target) => (target = mod3 != null ? __create(__getProtoOf(mod3)) : {}, __copyProps(
  isNodeMode || !mod3 || !mod3.__esModule ? __defProp(target, "default", { value: mod3, enumerable: true }) : target,
  mod3
));
var __toCommonJS = (mod3) => __copyProps(__defProp({}, "__esModule", { value: true }), mod3);

// node_modules/@decentralized-identity/ion-sdk/dist/lib/ErrorCode.js
var require_ErrorCode = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/ErrorCode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
      DeltaExceedsMaximumSize: "DeltaExceedsMaximumSize",
      DidDocumentPublicKeyIdDuplicated: "DidDocumentPublicKeyIdDuplicated",
      DidDocumentPublicKeyMissingOrIncorrectType: "DidDocumentPublicKeyMissingOrIncorrectType",
      DidDocumentServiceIdDuplicated: "DidDocumentServiceIdDuplicated",
      DidSuffixIncorrectLength: "DidSuffixIncorrectLength",
      EncodedStringIncorrectEncoding: "EncodedStringIncorrectEncoding",
      IdNotUsingBase64UrlCharacterSet: "IdNotUsingBase64UrlCharacterSet",
      IdTooLong: "IdTooLong",
      JwkEs256kMissingOrInvalidCrv: "JwkEs256kMissingOrInvalidCrv",
      JwkEs256kMissingOrInvalidKty: "JwkEs256kMissingOrInvalidKty",
      JwkEs256kHasIncorrectLengthOfX: "JwkEs256kHasIncorrectLengthOfX",
      JwkEs256kHasIncorrectLengthOfY: "JwkEs256kHasIncorrectLengthOfY",
      JwkEs256kHasIncorrectLengthOfD: "JwkEs256kHasIncorrectLengthOfD",
      MultihashStringNotAMultihash: "MultihashStringNotAMultihash",
      MultihashUnsupportedHashAlgorithm: "MultihashUnsupportedHashAlgorithm",
      PublicKeyJwkEs256kHasUnexpectedProperty: "PublicKeyJwkEs256kHasUnexpectedProperty",
      PublicKeyPurposeDuplicated: "PublicKeyPurposeDuplicated",
      ServiceEndpointCannotBeAnArray: "ServiceEndpointCannotBeAnArray",
      ServiceEndpointStringNotValidUri: "ServiceEndpointStringNotValidUri",
      ServiceTypeTooLong: "ServiceTypeTooLong"
    };
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/IonError.js
var require_IonError = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/IonError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonError = class extends Error {
      constructor(code, message) {
        super(`${code}: ${message}`);
        this.code = code;
        Object.setPrototypeOf(this, new.target.prototype);
      }
    };
    exports.default = IonError;
  }
});

// node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/vendor/base-x.js
var require_base_x = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/vendor/base-x.js"(exports, module2) {
    "use strict";
    function base(ALPHABET, name) {
      if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
      }
      var BASE_MAP = new Uint8Array(256);
      for (var j = 0; j < BASE_MAP.length; j++) {
        BASE_MAP[j] = 255;
      }
      for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
          throw new TypeError(x + " is ambiguous");
        }
        BASE_MAP[xc] = i;
      }
      var BASE = ALPHABET.length;
      var LEADER = ALPHABET.charAt(0);
      var FACTOR = Math.log(BASE) / Math.log(256);
      var iFACTOR = Math.log(256) / Math.log(BASE);
      function encode3(source) {
        if (source instanceof Uint8Array)
          ;
        else if (ArrayBuffer.isView(source)) {
          source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
          source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
          throw new TypeError("Expected Uint8Array");
        }
        if (source.length === 0) {
          return "";
        }
        var zeroes = 0;
        var length2 = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++;
          zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while (pbegin !== pend) {
          var carry = source[pbegin];
          var i2 = 0;
          for (var it1 = size - 1; (carry !== 0 || i2 < length2) && it1 !== -1; it1--, i2++) {
            carry += 256 * b58[it1] >>> 0;
            b58[it1] = carry % BASE >>> 0;
            carry = carry / BASE >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length2 = i2;
          pbegin++;
        }
        var it2 = size - length2;
        while (it2 !== size && b58[it2] === 0) {
          it2++;
        }
        var str = LEADER.repeat(zeroes);
        for (; it2 < size; ++it2) {
          str += ALPHABET.charAt(b58[it2]);
        }
        return str;
      }
      function decodeUnsafe(source) {
        if (typeof source !== "string") {
          throw new TypeError("Expected String");
        }
        if (source.length === 0) {
          return new Uint8Array();
        }
        var psz = 0;
        if (source[psz] === " ") {
          return;
        }
        var zeroes = 0;
        var length2 = 0;
        while (source[psz] === LEADER) {
          zeroes++;
          psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while (source[psz]) {
          var carry = BASE_MAP[source.charCodeAt(psz)];
          if (carry === 255) {
            return;
          }
          var i2 = 0;
          for (var it3 = size - 1; (carry !== 0 || i2 < length2) && it3 !== -1; it3--, i2++) {
            carry += BASE * b256[it3] >>> 0;
            b256[it3] = carry % 256 >>> 0;
            carry = carry / 256 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length2 = i2;
          psz++;
        }
        if (source[psz] === " ") {
          return;
        }
        var it4 = size - length2;
        while (it4 !== size && b256[it4] === 0) {
          it4++;
        }
        var vch = new Uint8Array(zeroes + (size - it4));
        var j2 = zeroes;
        while (it4 !== size) {
          vch[j2++] = b256[it4++];
        }
        return vch;
      }
      function decode4(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) {
          return buffer;
        }
        throw new Error(`Non-${name} character`);
      }
      return {
        encode: encode3,
        decodeUnsafe,
        decode: decode4
      };
    }
    var src = base;
    var _brrp__multiformats_scope_baseX = src;
    module2.exports = _brrp__multiformats_scope_baseX;
  }
});

// node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/bytes.js
var require_bytes = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/bytes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var empty2 = new Uint8Array(0);
    var toHex = (d) => d.reduce((hex, byte) => hex + byte.toString(16).padStart(2, "0"), "");
    var fromHex = (hex) => {
      const hexes3 = hex.match(/../g);
      return hexes3 ? new Uint8Array(hexes3.map((b) => parseInt(b, 16))) : empty2;
    };
    var equals2 = (aa, bb) => {
      if (aa === bb)
        return true;
      if (aa.byteLength !== bb.byteLength) {
        return false;
      }
      for (let ii = 0; ii < aa.byteLength; ii++) {
        if (aa[ii] !== bb[ii]) {
          return false;
        }
      }
      return true;
    };
    var coerce2 = (o) => {
      if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
        return o;
      if (o instanceof ArrayBuffer)
        return new Uint8Array(o);
      if (ArrayBuffer.isView(o)) {
        return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
      }
      throw new Error("Unknown type, must be binary type");
    };
    var isBinary = (o) => o instanceof ArrayBuffer || ArrayBuffer.isView(o);
    var fromString = (str) => new TextEncoder().encode(str);
    var toString = (b) => new TextDecoder().decode(b);
    exports.coerce = coerce2;
    exports.empty = empty2;
    exports.equals = equals2;
    exports.fromHex = fromHex;
    exports.fromString = fromString;
    exports.isBinary = isBinary;
    exports.toHex = toHex;
    exports.toString = toString;
  }
});

// node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/bases/base.js
var require_base = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/bases/base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var baseX$1 = require_base_x();
    var bytes = require_bytes();
    var Encoder2 = class {
      constructor(name, prefix, baseEncode) {
        this.name = name;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
      }
      encode(bytes2) {
        if (bytes2 instanceof Uint8Array) {
          return `${this.prefix}${this.baseEncode(bytes2)}`;
        } else {
          throw Error("Unknown type, must be binary type");
        }
      }
    };
    var Decoder2 = class {
      constructor(name, prefix, baseDecode) {
        this.name = name;
        this.prefix = prefix;
        if (prefix.codePointAt(0) === void 0) {
          throw new Error("Invalid prefix character");
        }
        this.prefixCodePoint = prefix.codePointAt(0);
        this.baseDecode = baseDecode;
      }
      decode(text) {
        if (typeof text === "string") {
          if (text.codePointAt(0) !== this.prefixCodePoint) {
            throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
          }
          return this.baseDecode(text.slice(this.prefix.length));
        } else {
          throw Error("Can only multibase decode strings");
        }
      }
      or(decoder) {
        return or2(this, decoder);
      }
    };
    var ComposedDecoder2 = class {
      constructor(decoders) {
        this.decoders = decoders;
      }
      or(decoder) {
        return or2(this, decoder);
      }
      decode(input) {
        const prefix = input[0];
        const decoder = this.decoders[prefix];
        if (decoder) {
          return decoder.decode(input);
        } else {
          throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
        }
      }
    };
    var or2 = (left, right) => new ComposedDecoder2({
      ...left.decoders || { [left.prefix]: left },
      ...right.decoders || { [right.prefix]: right }
    });
    var Codec2 = class {
      constructor(name, prefix, baseEncode, baseDecode) {
        this.name = name;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
        this.baseDecode = baseDecode;
        this.encoder = new Encoder2(name, prefix, baseEncode);
        this.decoder = new Decoder2(name, prefix, baseDecode);
      }
      encode(input) {
        return this.encoder.encode(input);
      }
      decode(input) {
        return this.decoder.decode(input);
      }
    };
    var from3 = ({ name, prefix, encode: encode4, decode: decode5 }) => new Codec2(name, prefix, encode4, decode5);
    var baseX = ({ prefix, name, alphabet }) => {
      const { encode: encode4, decode: decode5 } = baseX$1(alphabet, name);
      return from3({
        prefix,
        name,
        encode: encode4,
        decode: (text) => bytes.coerce(decode5(text))
      });
    };
    var decode4 = (string, alphabet, bitsPerChar, name) => {
      const codes = {};
      for (let i = 0; i < alphabet.length; ++i) {
        codes[alphabet[i]] = i;
      }
      let end = string.length;
      while (string[end - 1] === "=") {
        --end;
      }
      const out = new Uint8Array(end * bitsPerChar / 8 | 0);
      let bits = 0;
      let buffer = 0;
      let written = 0;
      for (let i = 0; i < end; ++i) {
        const value = codes[string[i]];
        if (value === void 0) {
          throw new SyntaxError(`Non-${name} character`);
        }
        buffer = buffer << bitsPerChar | value;
        bits += bitsPerChar;
        if (bits >= 8) {
          bits -= 8;
          out[written++] = 255 & buffer >> bits;
        }
      }
      if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
        throw new SyntaxError("Unexpected end of data");
      }
      return out;
    };
    var encode3 = (data, alphabet, bitsPerChar) => {
      const pad = alphabet[alphabet.length - 1] === "=";
      const mask = (1 << bitsPerChar) - 1;
      let out = "";
      let bits = 0;
      let buffer = 0;
      for (let i = 0; i < data.length; ++i) {
        buffer = buffer << 8 | data[i];
        bits += 8;
        while (bits > bitsPerChar) {
          bits -= bitsPerChar;
          out += alphabet[mask & buffer >> bits];
        }
      }
      if (bits) {
        out += alphabet[mask & buffer << bitsPerChar - bits];
      }
      if (pad) {
        while (out.length * bitsPerChar & 7) {
          out += "=";
        }
      }
      return out;
    };
    var rfc46482 = ({ name, prefix, bitsPerChar, alphabet }) => {
      return from3({
        prefix,
        name,
        encode(input) {
          return encode3(input, alphabet, bitsPerChar);
        },
        decode(input) {
          return decode4(input, alphabet, bitsPerChar, name);
        }
      });
    };
    exports.Codec = Codec2;
    exports.baseX = baseX;
    exports.from = from3;
    exports.or = or2;
    exports.rfc4648 = rfc46482;
  }
});

// node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/bases/base64.js
var require_base64 = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/bases/base64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var base = require_base();
    var base642 = base.rfc4648({
      prefix: "m",
      name: "base64",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      bitsPerChar: 6
    });
    var base64pad2 = base.rfc4648({
      prefix: "M",
      name: "base64pad",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      bitsPerChar: 6
    });
    var base64url2 = base.rfc4648({
      prefix: "u",
      name: "base64url",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
      bitsPerChar: 6
    });
    var base64urlpad2 = base.rfc4648({
      prefix: "U",
      name: "base64urlpad",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
      bitsPerChar: 6
    });
    exports.base64 = base642;
    exports.base64pad = base64pad2;
    exports.base64url = base64url2;
    exports.base64urlpad = base64urlpad2;
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/Encoder.js
var require_Encoder = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/Encoder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ErrorCode_1 = require_ErrorCode();
    var IonError_1 = require_IonError();
    var base64_1 = require_base64();
    var Encoder2 = class {
      static encode(content) {
        const encodedContent = base64_1.base64url.baseEncode(content);
        return encodedContent;
      }
      static decodeAsBytes(encodedContent, inputContextForErrorLogging) {
        if (!Encoder2.isBase64UrlString(encodedContent)) {
          throw new IonError_1.default(ErrorCode_1.default.EncodedStringIncorrectEncoding, `Given ${inputContextForErrorLogging} must be base64url string.`);
        }
        return base64_1.base64url.baseDecode(encodedContent);
      }
      static decodeAsString(encodedContent, inputContextForErrorLogging) {
        const rawBytes = Encoder2.decodeAsBytes(encodedContent, inputContextForErrorLogging);
        return Encoder2.bytesToString(rawBytes);
      }
      static isBase64UrlString(input) {
        const isBase64UrlString = /^[A-Za-z0-9_-]+$/.test(input);
        return isBase64UrlString;
      }
      static stringToBytes(input) {
        const bytes = new TextEncoder().encode(input);
        return bytes;
      }
      static bytesToString(input) {
        const output = new TextDecoder().decode(input);
        return output;
      }
    };
    exports.default = Encoder2;
  }
});

// node_modules/uri-js/dist/es5/uri.all.js
var require_uri_all = __commonJS({
  "node_modules/uri-js/dist/es5/uri.all.js"(exports, module2) {
    (function(global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global.URI = global.URI || {});
    })(exports, function(exports2) {
      "use strict";
      function merge() {
        for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
          sets[_key] = arguments[_key];
        }
        if (sets.length > 1) {
          sets[0] = sets[0].slice(0, -1);
          var xl = sets.length - 1;
          for (var x = 1; x < xl; ++x) {
            sets[x] = sets[x].slice(1, -1);
          }
          sets[xl] = sets[xl].slice(1);
          return sets.join("");
        } else {
          return sets[0];
        }
      }
      function subexp(str) {
        return "(?:" + str + ")";
      }
      function typeOf(o) {
        return o === void 0 ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
      }
      function toUpperCase(str) {
        return str.toUpperCase();
      }
      function toArray(obj) {
        return obj !== void 0 && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
      }
      function assign(target, source) {
        var obj = target;
        if (source) {
          for (var key in source) {
            obj[key] = source[key];
          }
        }
        return obj;
      }
      function buildExps(isIRI2) {
        var ALPHA$$ = "[A-Za-z]", CR$ = "[\\x0D]", DIGIT$$ = "[0-9]", DQUOTE$$ = "[\\x22]", HEXDIG$$2 = merge(DIGIT$$, "[A-Fa-f]"), LF$$ = "[\\x0A]", SP$$ = "[\\x20]", PCT_ENCODED$2 = subexp(subexp("%[EFef]" + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$2 + "%" + HEXDIG$$2 + HEXDIG$$2) + "|" + subexp("%" + HEXDIG$$2 + HEXDIG$$2)), GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]", SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$), UCSCHAR$$ = isIRI2 ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", IPRIVATE$$ = isIRI2 ? "[\\uE000-\\uF8FF]" : "[]", UNRESERVED$$2 = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$), SCHEME$ = subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"), USERINFO$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\:]")) + "*"), DEC_OCTET$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("[1-9]" + DIGIT$$) + "|" + DIGIT$$), DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$), IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$), H16$ = subexp(HEXDIG$$2 + "{1,4}"), LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$), IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$), IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$), IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$), IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$), IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$), IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$), IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$), IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$), IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"), IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")), ZONEID$ = subexp(subexp(UNRESERVED$$2 + "|" + PCT_ENCODED$2) + "+"), IPV6ADDRZ$ = subexp(IPV6ADDRESS$ + "\\%25" + ZONEID$), IPV6ADDRZ_RELAXED$ = subexp(IPV6ADDRESS$ + subexp("\\%25|\\%(?!" + HEXDIG$$2 + "{2})") + ZONEID$), IPVFUTURE$ = subexp("[vV]" + HEXDIG$$2 + "+\\." + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\:]") + "+"), IP_LITERAL$ = subexp("\\[" + subexp(IPV6ADDRZ_RELAXED$ + "|" + IPV6ADDRESS$ + "|" + IPVFUTURE$) + "\\]"), REG_NAME$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$)) + "*"), HOST$ = subexp(IP_LITERAL$ + "|" + IPV4ADDRESS$ + "(?!" + REG_NAME$ + ")|" + REG_NAME$), PORT$ = subexp(DIGIT$$ + "*"), AUTHORITY$ = subexp(subexp(USERINFO$ + "@") + "?" + HOST$ + subexp("\\:" + PORT$) + "?"), PCHAR$ = subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@]")), SEGMENT$ = subexp(PCHAR$ + "*"), SEGMENT_NZ$ = subexp(PCHAR$ + "+"), SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$2 + "|" + merge(UNRESERVED$$2, SUB_DELIMS$$, "[\\@]")) + "+"), PATH_ABEMPTY$ = subexp(subexp("\\/" + SEGMENT$) + "*"), PATH_ABSOLUTE$ = subexp("\\/" + subexp(SEGMENT_NZ$ + PATH_ABEMPTY$) + "?"), PATH_NOSCHEME$ = subexp(SEGMENT_NZ_NC$ + PATH_ABEMPTY$), PATH_ROOTLESS$ = subexp(SEGMENT_NZ$ + PATH_ABEMPTY$), PATH_EMPTY$ = "(?!" + PCHAR$ + ")", PATH$ = subexp(PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), QUERY$ = subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*"), FRAGMENT$ = subexp(subexp(PCHAR$ + "|[\\/\\?]") + "*"), HIER_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), RELATIVE_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$), RELATIVE$ = subexp(RELATIVE_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), URI_REFERENCE$ = subexp(URI$ + "|" + RELATIVE$), ABSOLUTE_URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?"), GENERIC_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", RELATIVE_REF$ = "^(){0}" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", ABSOLUTE_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?$", SAMEDOC_REF$ = "^" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", AUTHORITY_REF$ = "^" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?$";
        return {
          NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
          NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
          NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$2, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
          ESCAPE: new RegExp(merge("[^]", UNRESERVED$$2, SUB_DELIMS$$), "g"),
          UNRESERVED: new RegExp(UNRESERVED$$2, "g"),
          OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$2, RESERVED$$), "g"),
          PCT_ENCODED: new RegExp(PCT_ENCODED$2, "g"),
          IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
          IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$2 + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$")
        };
      }
      var URI_PROTOCOL = buildExps(false);
      var IRI_PROTOCOL = buildExps(true);
      var slicedToArray = function() {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = void 0;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"])
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        return function(arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      var toConsumableArray = function(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
            arr2[i] = arr[i];
          return arr2;
        } else {
          return Array.from(arr);
        }
      };
      var maxInt = 2147483647;
      var base = 36;
      var tMin = 1;
      var tMax = 26;
      var skew = 38;
      var damp = 700;
      var initialBias = 72;
      var initialN = 128;
      var delimiter = "-";
      var regexPunycode = /^xn--/;
      var regexNonASCII = /[^\0-\x7E]/;
      var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
      var errors = {
        "overflow": "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      };
      var baseMinusTMin = base - tMin;
      var floor = Math.floor;
      var stringFromCharCode = String.fromCharCode;
      function error$1(type) {
        throw new RangeError(errors[type]);
      }
      function map(array, fn) {
        var result = [];
        var length2 = array.length;
        while (length2--) {
          result[length2] = fn(array[length2]);
        }
        return result;
      }
      function mapDomain(string, fn) {
        var parts = string.split("@");
        var result = "";
        if (parts.length > 1) {
          result = parts[0] + "@";
          string = parts[1];
        }
        string = string.replace(regexSeparators, ".");
        var labels = string.split(".");
        var encoded = map(labels, fn).join(".");
        return result + encoded;
      }
      function ucs2decode(string) {
        var output = [];
        var counter = 0;
        var length2 = string.length;
        while (counter < length2) {
          var value = string.charCodeAt(counter++);
          if (value >= 55296 && value <= 56319 && counter < length2) {
            var extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
            } else {
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }
      var ucs2encode = function ucs2encode2(array) {
        return String.fromCodePoint.apply(String, toConsumableArray(array));
      };
      var basicToDigit = function basicToDigit2(codePoint) {
        if (codePoint - 48 < 10) {
          return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
          return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
          return codePoint - 97;
        }
        return base;
      };
      var digitToBasic = function digitToBasic2(digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      };
      var adapt = function adapt2(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      };
      var decode4 = function decode5(input) {
        var output = [];
        var inputLength = input.length;
        var i = 0;
        var n = initialN;
        var bias = initialBias;
        var basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (var j = 0; j < basic; ++j) {
          if (input.charCodeAt(j) >= 128) {
            error$1("not-basic");
          }
          output.push(input.charCodeAt(j));
        }
        for (var index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
          var oldi = i;
          for (var w = 1, k = base; ; k += base) {
            if (index >= inputLength) {
              error$1("invalid-input");
            }
            var digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base || digit > floor((maxInt - i) / w)) {
              error$1("overflow");
            }
            i += digit * w;
            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
              break;
            }
            var baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
              error$1("overflow");
            }
            w *= baseMinusT;
          }
          var out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);
          if (floor(i / out) > maxInt - n) {
            error$1("overflow");
          }
          n += floor(i / out);
          i %= out;
          output.splice(i++, 0, n);
        }
        return String.fromCodePoint.apply(String, output);
      };
      var encode3 = function encode4(input) {
        var output = [];
        input = ucs2decode(input);
        var inputLength = input.length;
        var n = initialN;
        var delta = 0;
        var bias = initialBias;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = void 0;
        try {
          for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _currentValue2 = _step.value;
            if (_currentValue2 < 128) {
              output.push(stringFromCharCode(_currentValue2));
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
        var basicLength = output.length;
        var handledCPCount = basicLength;
        if (basicLength) {
          output.push(delimiter);
        }
        while (handledCPCount < inputLength) {
          var m = maxInt;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = void 0;
          try {
            for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var currentValue = _step2.value;
              if (currentValue >= n && currentValue < m) {
                m = currentValue;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
          var handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error$1("overflow");
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = void 0;
          try {
            for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _currentValue = _step3.value;
              if (_currentValue < n && ++delta > maxInt) {
                error$1("overflow");
              }
              if (_currentValue == n) {
                var q = delta;
                for (var k = base; ; k += base) {
                  var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                  if (q < t) {
                    break;
                  }
                  var qMinusT = q - t;
                  var baseMinusT = base - t;
                  output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                  q = floor(qMinusT / baseMinusT);
                }
                output.push(stringFromCharCode(digitToBasic(q, 0)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                delta = 0;
                ++handledCPCount;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
          ++delta;
          ++n;
        }
        return output.join("");
      };
      var toUnicode = function toUnicode2(input) {
        return mapDomain(input, function(string) {
          return regexPunycode.test(string) ? decode4(string.slice(4).toLowerCase()) : string;
        });
      };
      var toASCII = function toASCII2(input) {
        return mapDomain(input, function(string) {
          return regexNonASCII.test(string) ? "xn--" + encode3(string) : string;
        });
      };
      var punycode = {
        "version": "2.1.0",
        "ucs2": {
          "decode": ucs2decode,
          "encode": ucs2encode
        },
        "decode": decode4,
        "encode": encode3,
        "toASCII": toASCII,
        "toUnicode": toUnicode
      };
      var SCHEMES = {};
      function pctEncChar(chr) {
        var c = chr.charCodeAt(0);
        var e = void 0;
        if (c < 16)
          e = "%0" + c.toString(16).toUpperCase();
        else if (c < 128)
          e = "%" + c.toString(16).toUpperCase();
        else if (c < 2048)
          e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        else
          e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        return e;
      }
      function pctDecChars(str) {
        var newStr = "";
        var i = 0;
        var il = str.length;
        while (i < il) {
          var c = parseInt(str.substr(i + 1, 2), 16);
          if (c < 128) {
            newStr += String.fromCharCode(c);
            i += 3;
          } else if (c >= 194 && c < 224) {
            if (il - i >= 6) {
              var c2 = parseInt(str.substr(i + 4, 2), 16);
              newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
            } else {
              newStr += str.substr(i, 6);
            }
            i += 6;
          } else if (c >= 224) {
            if (il - i >= 9) {
              var _c = parseInt(str.substr(i + 4, 2), 16);
              var c3 = parseInt(str.substr(i + 7, 2), 16);
              newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
            } else {
              newStr += str.substr(i, 9);
            }
            i += 9;
          } else {
            newStr += str.substr(i, 3);
            i += 3;
          }
        }
        return newStr;
      }
      function _normalizeComponentEncoding(components, protocol) {
        function decodeUnreserved2(str) {
          var decStr = pctDecChars(str);
          return !decStr.match(protocol.UNRESERVED) ? str : decStr;
        }
        if (components.scheme)
          components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved2).toLowerCase().replace(protocol.NOT_SCHEME, "");
        if (components.userinfo !== void 0)
          components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.host !== void 0)
          components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved2).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.path !== void 0)
          components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.query !== void 0)
          components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.fragment !== void 0)
          components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved2).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        return components;
      }
      function _stripLeadingZeros(str) {
        return str.replace(/^0*(.*)/, "$1") || "0";
      }
      function _normalizeIPv4(host, protocol) {
        var matches = host.match(protocol.IPV4ADDRESS) || [];
        var _matches = slicedToArray(matches, 2), address = _matches[1];
        if (address) {
          return address.split(".").map(_stripLeadingZeros).join(".");
        } else {
          return host;
        }
      }
      function _normalizeIPv6(host, protocol) {
        var matches = host.match(protocol.IPV6ADDRESS) || [];
        var _matches2 = slicedToArray(matches, 3), address = _matches2[1], zone = _matches2[2];
        if (address) {
          var _address$toLowerCase$ = address.toLowerCase().split("::").reverse(), _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2), last = _address$toLowerCase$2[0], first = _address$toLowerCase$2[1];
          var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
          var lastFields = last.split(":").map(_stripLeadingZeros);
          var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
          var fieldCount = isLastFieldIPv4Address ? 7 : 8;
          var lastFieldsStart = lastFields.length - fieldCount;
          var fields = Array(fieldCount);
          for (var x = 0; x < fieldCount; ++x) {
            fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || "";
          }
          if (isLastFieldIPv4Address) {
            fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
          }
          var allZeroFields = fields.reduce(function(acc, field, index) {
            if (!field || field === "0") {
              var lastLongest = acc[acc.length - 1];
              if (lastLongest && lastLongest.index + lastLongest.length === index) {
                lastLongest.length++;
              } else {
                acc.push({ index, length: 1 });
              }
            }
            return acc;
          }, []);
          var longestZeroFields = allZeroFields.sort(function(a, b) {
            return b.length - a.length;
          })[0];
          var newHost = void 0;
          if (longestZeroFields && longestZeroFields.length > 1) {
            var newFirst = fields.slice(0, longestZeroFields.index);
            var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
            newHost = newFirst.join(":") + "::" + newLast.join(":");
          } else {
            newHost = fields.join(":");
          }
          if (zone) {
            newHost += "%" + zone;
          }
          return newHost;
        } else {
          return host;
        }
      }
      var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
      var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === void 0;
      function parse(uriString) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var components = {};
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        if (options.reference === "suffix")
          uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
        var matches = uriString.match(URI_PARSE);
        if (matches) {
          if (NO_MATCH_IS_UNDEFINED) {
            components.scheme = matches[1];
            components.userinfo = matches[3];
            components.host = matches[4];
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = matches[7];
            components.fragment = matches[8];
            if (isNaN(components.port)) {
              components.port = matches[5];
            }
          } else {
            components.scheme = matches[1] || void 0;
            components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : void 0;
            components.host = uriString.indexOf("//") !== -1 ? matches[4] : void 0;
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = uriString.indexOf("?") !== -1 ? matches[7] : void 0;
            components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : void 0;
            if (isNaN(components.port)) {
              components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : void 0;
            }
          }
          if (components.host) {
            components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
          }
          if (components.scheme === void 0 && components.userinfo === void 0 && components.host === void 0 && components.port === void 0 && !components.path && components.query === void 0) {
            components.reference = "same-document";
          } else if (components.scheme === void 0) {
            components.reference = "relative";
          } else if (components.fragment === void 0) {
            components.reference = "absolute";
          } else {
            components.reference = "uri";
          }
          if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
            components.error = components.error || "URI is not a " + options.reference + " reference.";
          }
          var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
          if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
            if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
              try {
                components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
              } catch (e) {
                components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
              }
            }
            _normalizeComponentEncoding(components, URI_PROTOCOL);
          } else {
            _normalizeComponentEncoding(components, protocol);
          }
          if (schemeHandler && schemeHandler.parse) {
            schemeHandler.parse(components, options);
          }
        } else {
          components.error = components.error || "URI can not be parsed.";
        }
        return components;
      }
      function _recomposeAuthority(components, options) {
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        if (components.userinfo !== void 0) {
          uriTokens.push(components.userinfo);
          uriTokens.push("@");
        }
        if (components.host !== void 0) {
          uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function(_, $1, $2) {
            return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
          }));
        }
        if (typeof components.port === "number" || typeof components.port === "string") {
          uriTokens.push(":");
          uriTokens.push(String(components.port));
        }
        return uriTokens.length ? uriTokens.join("") : void 0;
      }
      var RDS1 = /^\.\.?\//;
      var RDS2 = /^\/\.(\/|$)/;
      var RDS3 = /^\/\.\.(\/|$)/;
      var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function removeDotSegments(input) {
        var output = [];
        while (input.length) {
          if (input.match(RDS1)) {
            input = input.replace(RDS1, "");
          } else if (input.match(RDS2)) {
            input = input.replace(RDS2, "/");
          } else if (input.match(RDS3)) {
            input = input.replace(RDS3, "/");
            output.pop();
          } else if (input === "." || input === "..") {
            input = "";
          } else {
            var im = input.match(RDS5);
            if (im) {
              var s = im[0];
              input = input.slice(s.length);
              output.push(s);
            } else {
              throw new Error("Unexpected dot segment condition");
            }
          }
        }
        return output.join("");
      }
      function serialize(components) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
        if (schemeHandler && schemeHandler.serialize)
          schemeHandler.serialize(components, options);
        if (components.host) {
          if (protocol.IPV6ADDRESS.test(components.host)) {
          } else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
            try {
              components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
            } catch (e) {
              components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
            }
          }
        }
        _normalizeComponentEncoding(components, protocol);
        if (options.reference !== "suffix" && components.scheme) {
          uriTokens.push(components.scheme);
          uriTokens.push(":");
        }
        var authority = _recomposeAuthority(components, options);
        if (authority !== void 0) {
          if (options.reference !== "suffix") {
            uriTokens.push("//");
          }
          uriTokens.push(authority);
          if (components.path && components.path.charAt(0) !== "/") {
            uriTokens.push("/");
          }
        }
        if (components.path !== void 0) {
          var s = components.path;
          if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
            s = removeDotSegments(s);
          }
          if (authority === void 0) {
            s = s.replace(/^\/\//, "/%2F");
          }
          uriTokens.push(s);
        }
        if (components.query !== void 0) {
          uriTokens.push("?");
          uriTokens.push(components.query);
        }
        if (components.fragment !== void 0) {
          uriTokens.push("#");
          uriTokens.push(components.fragment);
        }
        return uriTokens.join("");
      }
      function resolveComponents(base2, relative) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var skipNormalization = arguments[3];
        var target = {};
        if (!skipNormalization) {
          base2 = parse(serialize(base2, options), options);
          relative = parse(serialize(relative, options), options);
        }
        options = options || {};
        if (!options.tolerant && relative.scheme) {
          target.scheme = relative.scheme;
          target.userinfo = relative.userinfo;
          target.host = relative.host;
          target.port = relative.port;
          target.path = removeDotSegments(relative.path || "");
          target.query = relative.query;
        } else {
          if (relative.userinfo !== void 0 || relative.host !== void 0 || relative.port !== void 0) {
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || "");
            target.query = relative.query;
          } else {
            if (!relative.path) {
              target.path = base2.path;
              if (relative.query !== void 0) {
                target.query = relative.query;
              } else {
                target.query = base2.query;
              }
            } else {
              if (relative.path.charAt(0) === "/") {
                target.path = removeDotSegments(relative.path);
              } else {
                if ((base2.userinfo !== void 0 || base2.host !== void 0 || base2.port !== void 0) && !base2.path) {
                  target.path = "/" + relative.path;
                } else if (!base2.path) {
                  target.path = relative.path;
                } else {
                  target.path = base2.path.slice(0, base2.path.lastIndexOf("/") + 1) + relative.path;
                }
                target.path = removeDotSegments(target.path);
              }
              target.query = relative.query;
            }
            target.userinfo = base2.userinfo;
            target.host = base2.host;
            target.port = base2.port;
          }
          target.scheme = base2.scheme;
        }
        target.fragment = relative.fragment;
        return target;
      }
      function resolve2(baseURI, relativeURI, options) {
        var schemelessOptions = assign({ scheme: "null" }, options);
        return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
      }
      function normalize(uri, options) {
        if (typeof uri === "string") {
          uri = serialize(parse(uri, options), options);
        } else if (typeOf(uri) === "object") {
          uri = parse(serialize(uri, options), options);
        }
        return uri;
      }
      function equal(uriA, uriB, options) {
        if (typeof uriA === "string") {
          uriA = serialize(parse(uriA, options), options);
        } else if (typeOf(uriA) === "object") {
          uriA = serialize(uriA, options);
        }
        if (typeof uriB === "string") {
          uriB = serialize(parse(uriB, options), options);
        } else if (typeOf(uriB) === "object") {
          uriB = serialize(uriB, options);
        }
        return uriA === uriB;
      }
      function escapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
      }
      function unescapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
      }
      var handler = {
        scheme: "http",
        domainHost: true,
        parse: function parse2(components, options) {
          if (!components.host) {
            components.error = components.error || "HTTP URIs must have a host.";
          }
          return components;
        },
        serialize: function serialize2(components, options) {
          var secure = String(components.scheme).toLowerCase() === "https";
          if (components.port === (secure ? 443 : 80) || components.port === "") {
            components.port = void 0;
          }
          if (!components.path) {
            components.path = "/";
          }
          return components;
        }
      };
      var handler$1 = {
        scheme: "https",
        domainHost: handler.domainHost,
        parse: handler.parse,
        serialize: handler.serialize
      };
      function isSecure(wsComponents) {
        return typeof wsComponents.secure === "boolean" ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
      }
      var handler$2 = {
        scheme: "ws",
        domainHost: true,
        parse: function parse2(components, options) {
          var wsComponents = components;
          wsComponents.secure = isSecure(wsComponents);
          wsComponents.resourceName = (wsComponents.path || "/") + (wsComponents.query ? "?" + wsComponents.query : "");
          wsComponents.path = void 0;
          wsComponents.query = void 0;
          return wsComponents;
        },
        serialize: function serialize2(wsComponents, options) {
          if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
            wsComponents.port = void 0;
          }
          if (typeof wsComponents.secure === "boolean") {
            wsComponents.scheme = wsComponents.secure ? "wss" : "ws";
            wsComponents.secure = void 0;
          }
          if (wsComponents.resourceName) {
            var _wsComponents$resourc = wsComponents.resourceName.split("?"), _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2), path = _wsComponents$resourc2[0], query = _wsComponents$resourc2[1];
            wsComponents.path = path && path !== "/" ? path : void 0;
            wsComponents.query = query;
            wsComponents.resourceName = void 0;
          }
          wsComponents.fragment = void 0;
          return wsComponents;
        }
      };
      var handler$3 = {
        scheme: "wss",
        domainHost: handler$2.domainHost,
        parse: handler$2.parse,
        serialize: handler$2.serialize
      };
      var O = {};
      var isIRI = true;
      var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + (isIRI ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]";
      var HEXDIG$$ = "[0-9A-Fa-f]";
      var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$));
      var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
      var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
      var VCHAR$$ = merge(QTEXT$$, '[\\"\\\\]');
      var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
      var UNRESERVED = new RegExp(UNRESERVED$$, "g");
      var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
      var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
      var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
      var NOT_HFVALUE = NOT_HFNAME;
      function decodeUnreserved(str) {
        var decStr = pctDecChars(str);
        return !decStr.match(UNRESERVED) ? str : decStr;
      }
      var handler$4 = {
        scheme: "mailto",
        parse: function parse$$1(components, options) {
          var mailtoComponents = components;
          var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
          mailtoComponents.path = void 0;
          if (mailtoComponents.query) {
            var unknownHeaders = false;
            var headers = {};
            var hfields = mailtoComponents.query.split("&");
            for (var x = 0, xl = hfields.length; x < xl; ++x) {
              var hfield = hfields[x].split("=");
              switch (hfield[0]) {
                case "to":
                  var toAddrs = hfield[1].split(",");
                  for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                    to.push(toAddrs[_x]);
                  }
                  break;
                case "subject":
                  mailtoComponents.subject = unescapeComponent(hfield[1], options);
                  break;
                case "body":
                  mailtoComponents.body = unescapeComponent(hfield[1], options);
                  break;
                default:
                  unknownHeaders = true;
                  headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                  break;
              }
            }
            if (unknownHeaders)
              mailtoComponents.headers = headers;
          }
          mailtoComponents.query = void 0;
          for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
            var addr = to[_x2].split("@");
            addr[0] = unescapeComponent(addr[0]);
            if (!options.unicodeSupport) {
              try {
                addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
              } catch (e) {
                mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
              }
            } else {
              addr[1] = unescapeComponent(addr[1], options).toLowerCase();
            }
            to[_x2] = addr.join("@");
          }
          return mailtoComponents;
        },
        serialize: function serialize$$1(mailtoComponents, options) {
          var components = mailtoComponents;
          var to = toArray(mailtoComponents.to);
          if (to) {
            for (var x = 0, xl = to.length; x < xl; ++x) {
              var toAddr = String(to[x]);
              var atIdx = toAddr.lastIndexOf("@");
              var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
              var domain = toAddr.slice(atIdx + 1);
              try {
                domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
              } catch (e) {
                components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
              }
              to[x] = localPart + "@" + domain;
            }
            components.path = to.join(",");
          }
          var headers = mailtoComponents.headers = mailtoComponents.headers || {};
          if (mailtoComponents.subject)
            headers["subject"] = mailtoComponents.subject;
          if (mailtoComponents.body)
            headers["body"] = mailtoComponents.body;
          var fields = [];
          for (var name in headers) {
            if (headers[name] !== O[name]) {
              fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
            }
          }
          if (fields.length) {
            components.query = fields.join("&");
          }
          return components;
        }
      };
      var URN_PARSE = /^([^\:]+)\:(.*)/;
      var handler$5 = {
        scheme: "urn",
        parse: function parse$$1(components, options) {
          var matches = components.path && components.path.match(URN_PARSE);
          var urnComponents = components;
          if (matches) {
            var scheme = options.scheme || urnComponents.scheme || "urn";
            var nid = matches[1].toLowerCase();
            var nss = matches[2];
            var urnScheme = scheme + ":" + (options.nid || nid);
            var schemeHandler = SCHEMES[urnScheme];
            urnComponents.nid = nid;
            urnComponents.nss = nss;
            urnComponents.path = void 0;
            if (schemeHandler) {
              urnComponents = schemeHandler.parse(urnComponents, options);
            }
          } else {
            urnComponents.error = urnComponents.error || "URN can not be parsed.";
          }
          return urnComponents;
        },
        serialize: function serialize$$1(urnComponents, options) {
          var scheme = options.scheme || urnComponents.scheme || "urn";
          var nid = urnComponents.nid;
          var urnScheme = scheme + ":" + (options.nid || nid);
          var schemeHandler = SCHEMES[urnScheme];
          if (schemeHandler) {
            urnComponents = schemeHandler.serialize(urnComponents, options);
          }
          var uriComponents = urnComponents;
          var nss = urnComponents.nss;
          uriComponents.path = (nid || options.nid) + ":" + nss;
          return uriComponents;
        }
      };
      var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
      var handler$6 = {
        scheme: "urn:uuid",
        parse: function parse2(urnComponents, options) {
          var uuidComponents = urnComponents;
          uuidComponents.uuid = uuidComponents.nss;
          uuidComponents.nss = void 0;
          if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
            uuidComponents.error = uuidComponents.error || "UUID is not valid.";
          }
          return uuidComponents;
        },
        serialize: function serialize2(uuidComponents, options) {
          var urnComponents = uuidComponents;
          urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
          return urnComponents;
        }
      };
      SCHEMES[handler.scheme] = handler;
      SCHEMES[handler$1.scheme] = handler$1;
      SCHEMES[handler$2.scheme] = handler$2;
      SCHEMES[handler$3.scheme] = handler$3;
      SCHEMES[handler$4.scheme] = handler$4;
      SCHEMES[handler$5.scheme] = handler$5;
      SCHEMES[handler$6.scheme] = handler$6;
      exports2.SCHEMES = SCHEMES;
      exports2.pctEncChar = pctEncChar;
      exports2.pctDecChars = pctDecChars;
      exports2.parse = parse;
      exports2.removeDotSegments = removeDotSegments;
      exports2.serialize = serialize;
      exports2.resolveComponents = resolveComponents;
      exports2.resolve = resolve2;
      exports2.normalize = normalize;
      exports2.equal = equal;
      exports2.escapeComponent = escapeComponent;
      exports2.unescapeComponent = unescapeComponent;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/enums/OperationKeyType.js
var require_OperationKeyType = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/enums/OperationKeyType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OperationKeyType;
    (function(OperationKeyType2) {
      OperationKeyType2["Public"] = "public";
      OperationKeyType2["Private"] = "private";
    })(OperationKeyType || (OperationKeyType = {}));
    exports.default = OperationKeyType;
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/InputValidator.js
var require_InputValidator = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/InputValidator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Encoder_1 = require_Encoder();
    var ErrorCode_1 = require_ErrorCode();
    var IonError_1 = require_IonError();
    var OperationKeyType_1 = require_OperationKeyType();
    var InputValidator = class {
      static validateEs256kOperationKey(operationKeyJwk, operationKeyType) {
        const allowedProperties = /* @__PURE__ */ new Set(["kty", "crv", "x", "y"]);
        if (operationKeyType === OperationKeyType_1.default.Private) {
          allowedProperties.add("d");
        }
        for (const property in operationKeyJwk) {
          if (!allowedProperties.has(property)) {
            throw new IonError_1.default(ErrorCode_1.default.PublicKeyJwkEs256kHasUnexpectedProperty, `SECP256K1 JWK key has unexpected property '${property}'.`);
          }
        }
        if (operationKeyJwk.crv !== "secp256k1") {
          throw new IonError_1.default(ErrorCode_1.default.JwkEs256kMissingOrInvalidCrv, `SECP256K1 JWK 'crv' property must be 'secp256k1' but got '${operationKeyJwk.crv}.'`);
        }
        if (operationKeyJwk.kty !== "EC") {
          throw new IonError_1.default(ErrorCode_1.default.JwkEs256kMissingOrInvalidKty, `SECP256K1 JWK 'kty' property must be 'EC' but got '${operationKeyJwk.kty}.'`);
        }
        if (operationKeyJwk.x.length !== 43) {
          throw new IonError_1.default(ErrorCode_1.default.JwkEs256kHasIncorrectLengthOfX, `SECP256K1 JWK 'x' property must be 43 bytes.`);
        }
        if (operationKeyJwk.y.length !== 43) {
          throw new IonError_1.default(ErrorCode_1.default.JwkEs256kHasIncorrectLengthOfY, `SECP256K1 JWK 'y' property must be 43 bytes.`);
        }
        if (operationKeyType === OperationKeyType_1.default.Private && (operationKeyJwk.d === void 0 || operationKeyJwk.d.length !== 43)) {
          throw new IonError_1.default(ErrorCode_1.default.JwkEs256kHasIncorrectLengthOfD, `SECP256K1 JWK 'd' property must be 43 bytes.`);
        }
      }
      static validateId(id) {
        const maxIdLength = 50;
        if (id.length > maxIdLength) {
          throw new IonError_1.default(ErrorCode_1.default.IdTooLong, `Key ID length ${id.length} exceed max allowed length of ${maxIdLength}.`);
        }
        if (!Encoder_1.default.isBase64UrlString(id)) {
          throw new IonError_1.default(ErrorCode_1.default.IdNotUsingBase64UrlCharacterSet, `Key ID '${id}' is not a Base64URL string.`);
        }
      }
      static validatePublicKeyPurposes(purposes) {
        if (purposes === void 0) {
          return;
        }
        const processedPurposes = /* @__PURE__ */ new Set();
        for (const purpose of purposes) {
          if (processedPurposes.has(purpose)) {
            throw new IonError_1.default(ErrorCode_1.default.PublicKeyPurposeDuplicated, `Public key purpose '${purpose}' already specified.`);
          }
          processedPurposes.add(purpose);
        }
      }
    };
    exports.default = InputValidator;
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/IonSdkConfig.js
var require_IonSdkConfig = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/IonSdkConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonSdkConfig = class {
    };
    exports.default = IonSdkConfig;
    IonSdkConfig.hashAlgorithmInMultihashCode = 18;
    IonSdkConfig.maxCanonicalizedDeltaSizeInBytes = 1e3;
  }
});

// node_modules/canonicalize/lib/canonicalize.js
var require_canonicalize = __commonJS({
  "node_modules/canonicalize/lib/canonicalize.js"(exports, module2) {
    "use strict";
    module2.exports = function(object) {
      return serialize(object);
      function serialize(object2) {
        if (object2 === null || typeof object2 !== "object" || object2.toJSON != null) {
          return JSON.stringify(object2);
        }
        if (Array.isArray(object2) && object2.length === 0) {
          return "[]";
        }
        if (Array.isArray(object2) && object2.length === 1) {
          return "[" + serialize(object2[0]) + "]";
        }
        if (Array.isArray(object2)) {
          return "[" + object2.reduce((t, cv, ci) => {
            t = ci === 1 ? serialize(t) : t;
            return t + "," + serialize(cv);
          }) + "]";
        }
        const keys = Object.keys(object2);
        if (keys.length === 0) {
          return "{}";
        }
        if (keys.length === 1) {
          return "{" + serialize(keys[0]) + ":" + serialize(object2[keys[0]]) + "}";
        }
        return "{" + keys.sort().reduce((t, cv, ci) => {
          t = ci === 1 ? serialize(t) + ":" + serialize(object2[t]) : t;
          return t + "," + serialize(cv) + ":" + serialize(object2[cv]);
        }) + "}";
      }
    };
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/JsonCanonicalizer.js
var require_JsonCanonicalizer = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/JsonCanonicalizer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Encoder_1 = require_Encoder();
    var canonicalize = require_canonicalize();
    var JsonCanonicalizer = class {
      static canonicalizeAsBytes(content) {
        const contentWithoutUndefinedProperties = JsonCanonicalizer.removeAllUndefinedProperties(content);
        const canonicalizedString = canonicalize(contentWithoutUndefinedProperties);
        const contentBytes = Encoder_1.default.stringToBytes(canonicalizedString);
        return contentBytes;
      }
      static removeAllUndefinedProperties(content) {
        for (const key in content) {
          if (typeof content[key] === "object") {
            JsonCanonicalizer.removeAllUndefinedProperties(content[key]);
          } else if (content[key] === void 0) {
            delete content[key];
          }
        }
        return content;
      }
    };
    exports.default = JsonCanonicalizer;
  }
});

// node_modules/@multiformats/base-x/src/index.js
var require_src = __commonJS({
  "node_modules/@multiformats/base-x/src/index.js"(exports, module2) {
    "use strict";
    function base(ALPHABET) {
      if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
      }
      var BASE_MAP = new Uint8Array(256);
      for (var j = 0; j < BASE_MAP.length; j++) {
        BASE_MAP[j] = 255;
      }
      for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
          throw new TypeError(x + " is ambiguous");
        }
        BASE_MAP[xc] = i;
      }
      var BASE = ALPHABET.length;
      var LEADER = ALPHABET.charAt(0);
      var FACTOR = Math.log(BASE) / Math.log(256);
      var iFACTOR = Math.log(256) / Math.log(BASE);
      function encode3(source) {
        if (source instanceof Uint8Array) {
        } else if (ArrayBuffer.isView(source)) {
          source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
          source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
          throw new TypeError("Expected Uint8Array");
        }
        if (source.length === 0) {
          return "";
        }
        var zeroes = 0;
        var length2 = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++;
          zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while (pbegin !== pend) {
          var carry = source[pbegin];
          var i2 = 0;
          for (var it1 = size - 1; (carry !== 0 || i2 < length2) && it1 !== -1; it1--, i2++) {
            carry += 256 * b58[it1] >>> 0;
            b58[it1] = carry % BASE >>> 0;
            carry = carry / BASE >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length2 = i2;
          pbegin++;
        }
        var it2 = size - length2;
        while (it2 !== size && b58[it2] === 0) {
          it2++;
        }
        var str = LEADER.repeat(zeroes);
        for (; it2 < size; ++it2) {
          str += ALPHABET.charAt(b58[it2]);
        }
        return str;
      }
      function decodeUnsafe(source) {
        if (typeof source !== "string") {
          throw new TypeError("Expected String");
        }
        if (source.length === 0) {
          return new Uint8Array();
        }
        var psz = 0;
        if (source[psz] === " ") {
          return;
        }
        var zeroes = 0;
        var length2 = 0;
        while (source[psz] === LEADER) {
          zeroes++;
          psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while (source[psz]) {
          var carry = BASE_MAP[source.charCodeAt(psz)];
          if (carry === 255) {
            return;
          }
          var i2 = 0;
          for (var it3 = size - 1; (carry !== 0 || i2 < length2) && it3 !== -1; it3--, i2++) {
            carry += BASE * b256[it3] >>> 0;
            b256[it3] = carry % 256 >>> 0;
            carry = carry / 256 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length2 = i2;
          psz++;
        }
        if (source[psz] === " ") {
          return;
        }
        var it4 = size - length2;
        while (it4 !== size && b256[it4] === 0) {
          it4++;
        }
        var vch = new Uint8Array(zeroes + (size - it4));
        var j2 = zeroes;
        while (it4 !== size) {
          vch[j2++] = b256[it4++];
        }
        return vch;
      }
      function decode4(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) {
          return buffer;
        }
        throw new Error("Non-base" + BASE + " character");
      }
      return {
        encode: encode3,
        decodeUnsafe,
        decode: decode4
      };
    }
    module2.exports = base;
  }
});

// node_modules/multibase/src/util.js
var require_util = __commonJS({
  "node_modules/multibase/src/util.js"(exports, module2) {
    "use strict";
    var textDecoder = new TextDecoder();
    var decodeText = (bytes) => textDecoder.decode(bytes);
    var textEncoder = new TextEncoder();
    var encodeText = (text) => textEncoder.encode(text);
    function concat(arrs, length2) {
      const output = new Uint8Array(length2);
      let offset = 0;
      for (const arr of arrs) {
        output.set(arr, offset);
        offset += arr.length;
      }
      return output;
    }
    module2.exports = { decodeText, encodeText, concat };
  }
});

// node_modules/multibase/src/base.js
var require_base2 = __commonJS({
  "node_modules/multibase/src/base.js"(exports, module2) {
    "use strict";
    var { encodeText } = require_util();
    var Base = class {
      constructor(name, code, factory, alphabet) {
        this.name = name;
        this.code = code;
        this.codeBuf = encodeText(this.code);
        this.alphabet = alphabet;
        this.codec = factory(alphabet);
      }
      encode(buf) {
        return this.codec.encode(buf);
      }
      decode(string) {
        for (const char of string) {
          if (this.alphabet && this.alphabet.indexOf(char) < 0) {
            throw new Error(`invalid character '${char}' in '${string}'`);
          }
        }
        return this.codec.decode(string);
      }
    };
    module2.exports = Base;
  }
});

// node_modules/multibase/src/rfc4648.js
var require_rfc4648 = __commonJS({
  "node_modules/multibase/src/rfc4648.js"(exports, module2) {
    "use strict";
    var decode4 = (string, alphabet, bitsPerChar) => {
      const codes = {};
      for (let i = 0; i < alphabet.length; ++i) {
        codes[alphabet[i]] = i;
      }
      let end = string.length;
      while (string[end - 1] === "=") {
        --end;
      }
      const out = new Uint8Array(end * bitsPerChar / 8 | 0);
      let bits = 0;
      let buffer = 0;
      let written = 0;
      for (let i = 0; i < end; ++i) {
        const value = codes[string[i]];
        if (value === void 0) {
          throw new SyntaxError("Invalid character " + string[i]);
        }
        buffer = buffer << bitsPerChar | value;
        bits += bitsPerChar;
        if (bits >= 8) {
          bits -= 8;
          out[written++] = 255 & buffer >> bits;
        }
      }
      if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
        throw new SyntaxError("Unexpected end of data");
      }
      return out;
    };
    var encode3 = (data, alphabet, bitsPerChar) => {
      const pad = alphabet[alphabet.length - 1] === "=";
      const mask = (1 << bitsPerChar) - 1;
      let out = "";
      let bits = 0;
      let buffer = 0;
      for (let i = 0; i < data.length; ++i) {
        buffer = buffer << 8 | data[i];
        bits += 8;
        while (bits > bitsPerChar) {
          bits -= bitsPerChar;
          out += alphabet[mask & buffer >> bits];
        }
      }
      if (bits) {
        out += alphabet[mask & buffer << bitsPerChar - bits];
      }
      if (pad) {
        while (out.length * bitsPerChar & 7) {
          out += "=";
        }
      }
      return out;
    };
    var rfc46482 = (bitsPerChar) => (alphabet) => {
      return {
        encode(input) {
          return encode3(input, alphabet, bitsPerChar);
        },
        decode(input) {
          return decode4(input, alphabet, bitsPerChar);
        }
      };
    };
    module2.exports = { rfc4648: rfc46482 };
  }
});

// node_modules/multibase/src/constants.js
var require_constants = __commonJS({
  "node_modules/multibase/src/constants.js"(exports, module2) {
    "use strict";
    var baseX = require_src();
    var Base = require_base2();
    var { rfc4648: rfc46482 } = require_rfc4648();
    var { decodeText, encodeText } = require_util();
    var identity = () => {
      return {
        encode: decodeText,
        decode: encodeText
      };
    };
    var constants = [
      ["identity", "\0", identity, ""],
      ["base2", "0", rfc46482(1), "01"],
      ["base8", "7", rfc46482(3), "01234567"],
      ["base10", "9", baseX, "0123456789"],
      ["base16", "f", rfc46482(4), "0123456789abcdef"],
      ["base16upper", "F", rfc46482(4), "0123456789ABCDEF"],
      ["base32hex", "v", rfc46482(5), "0123456789abcdefghijklmnopqrstuv"],
      ["base32hexupper", "V", rfc46482(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV"],
      ["base32hexpad", "t", rfc46482(5), "0123456789abcdefghijklmnopqrstuv="],
      ["base32hexpadupper", "T", rfc46482(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV="],
      ["base32", "b", rfc46482(5), "abcdefghijklmnopqrstuvwxyz234567"],
      ["base32upper", "B", rfc46482(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"],
      ["base32pad", "c", rfc46482(5), "abcdefghijklmnopqrstuvwxyz234567="],
      ["base32padupper", "C", rfc46482(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567="],
      ["base32z", "h", rfc46482(5), "ybndrfg8ejkmcpqxot1uwisza345h769"],
      ["base36", "k", baseX, "0123456789abcdefghijklmnopqrstuvwxyz"],
      ["base36upper", "K", baseX, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
      ["base58btc", "z", baseX, "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],
      ["base58flickr", "Z", baseX, "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"],
      ["base64", "m", rfc46482(6), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],
      ["base64pad", "M", rfc46482(6), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],
      ["base64url", "u", rfc46482(6), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"],
      ["base64urlpad", "U", rfc46482(6), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="]
    ];
    var names = constants.reduce((prev, tupple) => {
      prev[tupple[0]] = new Base(tupple[0], tupple[1], tupple[2], tupple[3]);
      return prev;
    }, {});
    var codes = constants.reduce((prev, tupple) => {
      prev[tupple[1]] = names[tupple[0]];
      return prev;
    }, {});
    module2.exports = {
      names,
      codes
    };
  }
});

// node_modules/multibase/src/index.js
var require_src2 = __commonJS({
  "node_modules/multibase/src/index.js"(exports, module2) {
    "use strict";
    var constants = require_constants();
    var { encodeText, decodeText, concat } = require_util();
    function multibase(nameOrCode, buf) {
      if (!buf) {
        throw new Error("requires an encoded Uint8Array");
      }
      const { name, codeBuf } = encoding(nameOrCode);
      validEncode(name, buf);
      return concat([codeBuf, buf], codeBuf.length + buf.length);
    }
    function encode3(nameOrCode, buf) {
      const enc = encoding(nameOrCode);
      const data = encodeText(enc.encode(buf));
      return concat([enc.codeBuf, data], enc.codeBuf.length + data.length);
    }
    function decode4(data) {
      if (data instanceof Uint8Array) {
        data = decodeText(data);
      }
      const prefix = data[0];
      if (["f", "F", "v", "V", "t", "T", "b", "B", "c", "C", "h", "k", "K"].includes(prefix)) {
        data = data.toLowerCase();
      }
      const enc = encoding(data[0]);
      return enc.decode(data.substring(1));
    }
    function isEncoded(data) {
      if (data instanceof Uint8Array) {
        data = decodeText(data);
      }
      if (Object.prototype.toString.call(data) !== "[object String]") {
        return false;
      }
      try {
        const enc = encoding(data[0]);
        return enc.name;
      } catch (err) {
        return false;
      }
    }
    function validEncode(name, buf) {
      const enc = encoding(name);
      enc.decode(decodeText(buf));
    }
    function encoding(nameOrCode) {
      if (Object.prototype.hasOwnProperty.call(constants.names, nameOrCode)) {
        return constants.names[nameOrCode];
      } else if (Object.prototype.hasOwnProperty.call(constants.codes, nameOrCode)) {
        return constants.codes[nameOrCode];
      } else {
        throw new Error(`Unsupported encoding: ${nameOrCode}`);
      }
    }
    function encodingFromData(data) {
      if (data instanceof Uint8Array) {
        data = decodeText(data);
      }
      return encoding(data[0]);
    }
    exports = module2.exports = multibase;
    exports.encode = encode3;
    exports.decode = decode4;
    exports.isEncoded = isEncoded;
    exports.encoding = encoding;
    exports.encodingFromData = encodingFromData;
    var names = Object.freeze(constants.names);
    var codes = Object.freeze(constants.codes);
    exports.names = names;
    exports.codes = codes;
  }
});

// node_modules/varint/encode.js
var require_encode = __commonJS({
  "node_modules/varint/encode.js"(exports, module2) {
    module2.exports = encode3;
    var MSB2 = 128;
    var REST2 = 127;
    var MSBALL2 = ~REST2;
    var INT2 = Math.pow(2, 31);
    function encode3(num, out, offset) {
      out = out || [];
      offset = offset || 0;
      var oldOffset = offset;
      while (num >= INT2) {
        out[offset++] = num & 255 | MSB2;
        num /= 128;
      }
      while (num & MSBALL2) {
        out[offset++] = num & 255 | MSB2;
        num >>>= 7;
      }
      out[offset] = num | 0;
      encode3.bytes = offset - oldOffset + 1;
      return out;
    }
  }
});

// node_modules/varint/decode.js
var require_decode = __commonJS({
  "node_modules/varint/decode.js"(exports, module2) {
    module2.exports = read2;
    var MSB2 = 128;
    var REST2 = 127;
    function read2(buf, offset) {
      var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
      do {
        if (counter >= l) {
          read2.bytes = 0;
          throw new RangeError("Could not decode varint");
        }
        b = buf[counter++];
        res += shift < 28 ? (b & REST2) << shift : (b & REST2) * Math.pow(2, shift);
        shift += 7;
      } while (b >= MSB2);
      read2.bytes = counter - offset;
      return res;
    }
  }
});

// node_modules/varint/length.js
var require_length = __commonJS({
  "node_modules/varint/length.js"(exports, module2) {
    var N12 = Math.pow(2, 7);
    var N22 = Math.pow(2, 14);
    var N32 = Math.pow(2, 21);
    var N42 = Math.pow(2, 28);
    var N52 = Math.pow(2, 35);
    var N62 = Math.pow(2, 42);
    var N72 = Math.pow(2, 49);
    var N82 = Math.pow(2, 56);
    var N92 = Math.pow(2, 63);
    module2.exports = function(value) {
      return value < N12 ? 1 : value < N22 ? 2 : value < N32 ? 3 : value < N42 ? 4 : value < N52 ? 5 : value < N62 ? 6 : value < N72 ? 7 : value < N82 ? 8 : value < N92 ? 9 : 10;
    };
  }
});

// node_modules/varint/index.js
var require_varint = __commonJS({
  "node_modules/varint/index.js"(exports, module2) {
    module2.exports = {
      encode: require_encode(),
      decode: require_decode(),
      encodingLength: require_length()
    };
  }
});

// node_modules/multihashes/src/constants.js
var require_constants2 = __commonJS({
  "node_modules/multihashes/src/constants.js"(exports, module2) {
    "use strict";
    var names = Object.freeze({
      "identity": 0,
      "sha1": 17,
      "sha2-256": 18,
      "sha2-512": 19,
      "sha3-512": 20,
      "sha3-384": 21,
      "sha3-256": 22,
      "sha3-224": 23,
      "shake-128": 24,
      "shake-256": 25,
      "keccak-224": 26,
      "keccak-256": 27,
      "keccak-384": 28,
      "keccak-512": 29,
      "blake3": 30,
      "murmur3-128": 34,
      "murmur3-32": 35,
      "dbl-sha2-256": 86,
      "md4": 212,
      "md5": 213,
      "bmt": 214,
      "sha2-256-trunc254-padded": 4114,
      "ripemd-128": 4178,
      "ripemd-160": 4179,
      "ripemd-256": 4180,
      "ripemd-320": 4181,
      "x11": 4352,
      "kangarootwelve": 7425,
      "sm3-256": 21325,
      "blake2b-8": 45569,
      "blake2b-16": 45570,
      "blake2b-24": 45571,
      "blake2b-32": 45572,
      "blake2b-40": 45573,
      "blake2b-48": 45574,
      "blake2b-56": 45575,
      "blake2b-64": 45576,
      "blake2b-72": 45577,
      "blake2b-80": 45578,
      "blake2b-88": 45579,
      "blake2b-96": 45580,
      "blake2b-104": 45581,
      "blake2b-112": 45582,
      "blake2b-120": 45583,
      "blake2b-128": 45584,
      "blake2b-136": 45585,
      "blake2b-144": 45586,
      "blake2b-152": 45587,
      "blake2b-160": 45588,
      "blake2b-168": 45589,
      "blake2b-176": 45590,
      "blake2b-184": 45591,
      "blake2b-192": 45592,
      "blake2b-200": 45593,
      "blake2b-208": 45594,
      "blake2b-216": 45595,
      "blake2b-224": 45596,
      "blake2b-232": 45597,
      "blake2b-240": 45598,
      "blake2b-248": 45599,
      "blake2b-256": 45600,
      "blake2b-264": 45601,
      "blake2b-272": 45602,
      "blake2b-280": 45603,
      "blake2b-288": 45604,
      "blake2b-296": 45605,
      "blake2b-304": 45606,
      "blake2b-312": 45607,
      "blake2b-320": 45608,
      "blake2b-328": 45609,
      "blake2b-336": 45610,
      "blake2b-344": 45611,
      "blake2b-352": 45612,
      "blake2b-360": 45613,
      "blake2b-368": 45614,
      "blake2b-376": 45615,
      "blake2b-384": 45616,
      "blake2b-392": 45617,
      "blake2b-400": 45618,
      "blake2b-408": 45619,
      "blake2b-416": 45620,
      "blake2b-424": 45621,
      "blake2b-432": 45622,
      "blake2b-440": 45623,
      "blake2b-448": 45624,
      "blake2b-456": 45625,
      "blake2b-464": 45626,
      "blake2b-472": 45627,
      "blake2b-480": 45628,
      "blake2b-488": 45629,
      "blake2b-496": 45630,
      "blake2b-504": 45631,
      "blake2b-512": 45632,
      "blake2s-8": 45633,
      "blake2s-16": 45634,
      "blake2s-24": 45635,
      "blake2s-32": 45636,
      "blake2s-40": 45637,
      "blake2s-48": 45638,
      "blake2s-56": 45639,
      "blake2s-64": 45640,
      "blake2s-72": 45641,
      "blake2s-80": 45642,
      "blake2s-88": 45643,
      "blake2s-96": 45644,
      "blake2s-104": 45645,
      "blake2s-112": 45646,
      "blake2s-120": 45647,
      "blake2s-128": 45648,
      "blake2s-136": 45649,
      "blake2s-144": 45650,
      "blake2s-152": 45651,
      "blake2s-160": 45652,
      "blake2s-168": 45653,
      "blake2s-176": 45654,
      "blake2s-184": 45655,
      "blake2s-192": 45656,
      "blake2s-200": 45657,
      "blake2s-208": 45658,
      "blake2s-216": 45659,
      "blake2s-224": 45660,
      "blake2s-232": 45661,
      "blake2s-240": 45662,
      "blake2s-248": 45663,
      "blake2s-256": 45664,
      "skein256-8": 45825,
      "skein256-16": 45826,
      "skein256-24": 45827,
      "skein256-32": 45828,
      "skein256-40": 45829,
      "skein256-48": 45830,
      "skein256-56": 45831,
      "skein256-64": 45832,
      "skein256-72": 45833,
      "skein256-80": 45834,
      "skein256-88": 45835,
      "skein256-96": 45836,
      "skein256-104": 45837,
      "skein256-112": 45838,
      "skein256-120": 45839,
      "skein256-128": 45840,
      "skein256-136": 45841,
      "skein256-144": 45842,
      "skein256-152": 45843,
      "skein256-160": 45844,
      "skein256-168": 45845,
      "skein256-176": 45846,
      "skein256-184": 45847,
      "skein256-192": 45848,
      "skein256-200": 45849,
      "skein256-208": 45850,
      "skein256-216": 45851,
      "skein256-224": 45852,
      "skein256-232": 45853,
      "skein256-240": 45854,
      "skein256-248": 45855,
      "skein256-256": 45856,
      "skein512-8": 45857,
      "skein512-16": 45858,
      "skein512-24": 45859,
      "skein512-32": 45860,
      "skein512-40": 45861,
      "skein512-48": 45862,
      "skein512-56": 45863,
      "skein512-64": 45864,
      "skein512-72": 45865,
      "skein512-80": 45866,
      "skein512-88": 45867,
      "skein512-96": 45868,
      "skein512-104": 45869,
      "skein512-112": 45870,
      "skein512-120": 45871,
      "skein512-128": 45872,
      "skein512-136": 45873,
      "skein512-144": 45874,
      "skein512-152": 45875,
      "skein512-160": 45876,
      "skein512-168": 45877,
      "skein512-176": 45878,
      "skein512-184": 45879,
      "skein512-192": 45880,
      "skein512-200": 45881,
      "skein512-208": 45882,
      "skein512-216": 45883,
      "skein512-224": 45884,
      "skein512-232": 45885,
      "skein512-240": 45886,
      "skein512-248": 45887,
      "skein512-256": 45888,
      "skein512-264": 45889,
      "skein512-272": 45890,
      "skein512-280": 45891,
      "skein512-288": 45892,
      "skein512-296": 45893,
      "skein512-304": 45894,
      "skein512-312": 45895,
      "skein512-320": 45896,
      "skein512-328": 45897,
      "skein512-336": 45898,
      "skein512-344": 45899,
      "skein512-352": 45900,
      "skein512-360": 45901,
      "skein512-368": 45902,
      "skein512-376": 45903,
      "skein512-384": 45904,
      "skein512-392": 45905,
      "skein512-400": 45906,
      "skein512-408": 45907,
      "skein512-416": 45908,
      "skein512-424": 45909,
      "skein512-432": 45910,
      "skein512-440": 45911,
      "skein512-448": 45912,
      "skein512-456": 45913,
      "skein512-464": 45914,
      "skein512-472": 45915,
      "skein512-480": 45916,
      "skein512-488": 45917,
      "skein512-496": 45918,
      "skein512-504": 45919,
      "skein512-512": 45920,
      "skein1024-8": 45921,
      "skein1024-16": 45922,
      "skein1024-24": 45923,
      "skein1024-32": 45924,
      "skein1024-40": 45925,
      "skein1024-48": 45926,
      "skein1024-56": 45927,
      "skein1024-64": 45928,
      "skein1024-72": 45929,
      "skein1024-80": 45930,
      "skein1024-88": 45931,
      "skein1024-96": 45932,
      "skein1024-104": 45933,
      "skein1024-112": 45934,
      "skein1024-120": 45935,
      "skein1024-128": 45936,
      "skein1024-136": 45937,
      "skein1024-144": 45938,
      "skein1024-152": 45939,
      "skein1024-160": 45940,
      "skein1024-168": 45941,
      "skein1024-176": 45942,
      "skein1024-184": 45943,
      "skein1024-192": 45944,
      "skein1024-200": 45945,
      "skein1024-208": 45946,
      "skein1024-216": 45947,
      "skein1024-224": 45948,
      "skein1024-232": 45949,
      "skein1024-240": 45950,
      "skein1024-248": 45951,
      "skein1024-256": 45952,
      "skein1024-264": 45953,
      "skein1024-272": 45954,
      "skein1024-280": 45955,
      "skein1024-288": 45956,
      "skein1024-296": 45957,
      "skein1024-304": 45958,
      "skein1024-312": 45959,
      "skein1024-320": 45960,
      "skein1024-328": 45961,
      "skein1024-336": 45962,
      "skein1024-344": 45963,
      "skein1024-352": 45964,
      "skein1024-360": 45965,
      "skein1024-368": 45966,
      "skein1024-376": 45967,
      "skein1024-384": 45968,
      "skein1024-392": 45969,
      "skein1024-400": 45970,
      "skein1024-408": 45971,
      "skein1024-416": 45972,
      "skein1024-424": 45973,
      "skein1024-432": 45974,
      "skein1024-440": 45975,
      "skein1024-448": 45976,
      "skein1024-456": 45977,
      "skein1024-464": 45978,
      "skein1024-472": 45979,
      "skein1024-480": 45980,
      "skein1024-488": 45981,
      "skein1024-496": 45982,
      "skein1024-504": 45983,
      "skein1024-512": 45984,
      "skein1024-520": 45985,
      "skein1024-528": 45986,
      "skein1024-536": 45987,
      "skein1024-544": 45988,
      "skein1024-552": 45989,
      "skein1024-560": 45990,
      "skein1024-568": 45991,
      "skein1024-576": 45992,
      "skein1024-584": 45993,
      "skein1024-592": 45994,
      "skein1024-600": 45995,
      "skein1024-608": 45996,
      "skein1024-616": 45997,
      "skein1024-624": 45998,
      "skein1024-632": 45999,
      "skein1024-640": 46e3,
      "skein1024-648": 46001,
      "skein1024-656": 46002,
      "skein1024-664": 46003,
      "skein1024-672": 46004,
      "skein1024-680": 46005,
      "skein1024-688": 46006,
      "skein1024-696": 46007,
      "skein1024-704": 46008,
      "skein1024-712": 46009,
      "skein1024-720": 46010,
      "skein1024-728": 46011,
      "skein1024-736": 46012,
      "skein1024-744": 46013,
      "skein1024-752": 46014,
      "skein1024-760": 46015,
      "skein1024-768": 46016,
      "skein1024-776": 46017,
      "skein1024-784": 46018,
      "skein1024-792": 46019,
      "skein1024-800": 46020,
      "skein1024-808": 46021,
      "skein1024-816": 46022,
      "skein1024-824": 46023,
      "skein1024-832": 46024,
      "skein1024-840": 46025,
      "skein1024-848": 46026,
      "skein1024-856": 46027,
      "skein1024-864": 46028,
      "skein1024-872": 46029,
      "skein1024-880": 46030,
      "skein1024-888": 46031,
      "skein1024-896": 46032,
      "skein1024-904": 46033,
      "skein1024-912": 46034,
      "skein1024-920": 46035,
      "skein1024-928": 46036,
      "skein1024-936": 46037,
      "skein1024-944": 46038,
      "skein1024-952": 46039,
      "skein1024-960": 46040,
      "skein1024-968": 46041,
      "skein1024-976": 46042,
      "skein1024-984": 46043,
      "skein1024-992": 46044,
      "skein1024-1000": 46045,
      "skein1024-1008": 46046,
      "skein1024-1016": 46047,
      "skein1024-1024": 46048,
      "poseidon-bls12_381-a2-fc1": 46081,
      "poseidon-bls12_381-a2-fc1-sc": 46082
    });
    module2.exports = { names };
  }
});

// node_modules/multiformats/cjs/vendor/base-x.js
var require_base_x2 = __commonJS({
  "node_modules/multiformats/cjs/vendor/base-x.js"(exports, module2) {
    "use strict";
    function base(ALPHABET, name) {
      if (ALPHABET.length >= 255) {
        throw new TypeError("Alphabet too long");
      }
      var BASE_MAP = new Uint8Array(256);
      for (var j = 0; j < BASE_MAP.length; j++) {
        BASE_MAP[j] = 255;
      }
      for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
          throw new TypeError(x + " is ambiguous");
        }
        BASE_MAP[xc] = i;
      }
      var BASE = ALPHABET.length;
      var LEADER = ALPHABET.charAt(0);
      var FACTOR = Math.log(BASE) / Math.log(256);
      var iFACTOR = Math.log(256) / Math.log(BASE);
      function encode3(source) {
        if (source instanceof Uint8Array)
          ;
        else if (ArrayBuffer.isView(source)) {
          source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
          source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
          throw new TypeError("Expected Uint8Array");
        }
        if (source.length === 0) {
          return "";
        }
        var zeroes = 0;
        var length2 = 0;
        var pbegin = 0;
        var pend = source.length;
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++;
          zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while (pbegin !== pend) {
          var carry = source[pbegin];
          var i2 = 0;
          for (var it1 = size - 1; (carry !== 0 || i2 < length2) && it1 !== -1; it1--, i2++) {
            carry += 256 * b58[it1] >>> 0;
            b58[it1] = carry % BASE >>> 0;
            carry = carry / BASE >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length2 = i2;
          pbegin++;
        }
        var it2 = size - length2;
        while (it2 !== size && b58[it2] === 0) {
          it2++;
        }
        var str = LEADER.repeat(zeroes);
        for (; it2 < size; ++it2) {
          str += ALPHABET.charAt(b58[it2]);
        }
        return str;
      }
      function decodeUnsafe(source) {
        if (typeof source !== "string") {
          throw new TypeError("Expected String");
        }
        if (source.length === 0) {
          return new Uint8Array();
        }
        var psz = 0;
        if (source[psz] === " ") {
          return;
        }
        var zeroes = 0;
        var length2 = 0;
        while (source[psz] === LEADER) {
          zeroes++;
          psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while (source[psz]) {
          var carry = BASE_MAP[source.charCodeAt(psz)];
          if (carry === 255) {
            return;
          }
          var i2 = 0;
          for (var it3 = size - 1; (carry !== 0 || i2 < length2) && it3 !== -1; it3--, i2++) {
            carry += BASE * b256[it3] >>> 0;
            b256[it3] = carry % 256 >>> 0;
            carry = carry / 256 >>> 0;
          }
          if (carry !== 0) {
            throw new Error("Non-zero carry");
          }
          length2 = i2;
          psz++;
        }
        if (source[psz] === " ") {
          return;
        }
        var it4 = size - length2;
        while (it4 !== size && b256[it4] === 0) {
          it4++;
        }
        var vch = new Uint8Array(zeroes + (size - it4));
        var j2 = zeroes;
        while (it4 !== size) {
          vch[j2++] = b256[it4++];
        }
        return vch;
      }
      function decode4(string) {
        var buffer = decodeUnsafe(string);
        if (buffer) {
          return buffer;
        }
        throw new Error(`Non-${name} character`);
      }
      return {
        encode: encode3,
        decodeUnsafe,
        decode: decode4
      };
    }
    var src = base;
    var _brrp__multiformats_scope_baseX = src;
    module2.exports = _brrp__multiformats_scope_baseX;
  }
});

// node_modules/multiformats/cjs/src/bytes.js
var require_bytes2 = __commonJS({
  "node_modules/multiformats/cjs/src/bytes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var empty2 = new Uint8Array(0);
    var toHex = (d) => d.reduce((hex, byte) => hex + byte.toString(16).padStart(2, "0"), "");
    var fromHex = (hex) => {
      const hexes3 = hex.match(/../g);
      return hexes3 ? new Uint8Array(hexes3.map((b) => parseInt(b, 16))) : empty2;
    };
    var equals2 = (aa, bb) => {
      if (aa === bb)
        return true;
      if (aa.byteLength !== bb.byteLength) {
        return false;
      }
      for (let ii = 0; ii < aa.byteLength; ii++) {
        if (aa[ii] !== bb[ii]) {
          return false;
        }
      }
      return true;
    };
    var coerce2 = (o) => {
      if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
        return o;
      if (o instanceof ArrayBuffer)
        return new Uint8Array(o);
      if (ArrayBuffer.isView(o)) {
        return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
      }
      throw new Error("Unknown type, must be binary type");
    };
    var isBinary = (o) => o instanceof ArrayBuffer || ArrayBuffer.isView(o);
    var fromString = (str) => new TextEncoder().encode(str);
    var toString = (b) => new TextDecoder().decode(b);
    exports.coerce = coerce2;
    exports.empty = empty2;
    exports.equals = equals2;
    exports.fromHex = fromHex;
    exports.fromString = fromString;
    exports.isBinary = isBinary;
    exports.toHex = toHex;
    exports.toString = toString;
  }
});

// node_modules/multiformats/cjs/src/bases/base.js
var require_base3 = __commonJS({
  "node_modules/multiformats/cjs/src/bases/base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var baseX$1 = require_base_x2();
    var bytes = require_bytes2();
    var Encoder2 = class {
      constructor(name, prefix, baseEncode) {
        this.name = name;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
      }
      encode(bytes2) {
        if (bytes2 instanceof Uint8Array) {
          return `${this.prefix}${this.baseEncode(bytes2)}`;
        } else {
          throw Error("Unknown type, must be binary type");
        }
      }
    };
    var Decoder2 = class {
      constructor(name, prefix, baseDecode) {
        this.name = name;
        this.prefix = prefix;
        this.baseDecode = baseDecode;
      }
      decode(text) {
        if (typeof text === "string") {
          switch (text[0]) {
            case this.prefix: {
              return this.baseDecode(text.slice(1));
            }
            default: {
              throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            }
          }
        } else {
          throw Error("Can only multibase decode strings");
        }
      }
      or(decoder) {
        return or2(this, decoder);
      }
    };
    var ComposedDecoder2 = class {
      constructor(decoders) {
        this.decoders = decoders;
      }
      or(decoder) {
        return or2(this, decoder);
      }
      decode(input) {
        const prefix = input[0];
        const decoder = this.decoders[prefix];
        if (decoder) {
          return decoder.decode(input);
        } else {
          throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
        }
      }
    };
    var or2 = (left, right) => new ComposedDecoder2({
      ...left.decoders || { [left.prefix]: left },
      ...right.decoders || { [right.prefix]: right }
    });
    var Codec2 = class {
      constructor(name, prefix, baseEncode, baseDecode) {
        this.name = name;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
        this.baseDecode = baseDecode;
        this.encoder = new Encoder2(name, prefix, baseEncode);
        this.decoder = new Decoder2(name, prefix, baseDecode);
      }
      encode(input) {
        return this.encoder.encode(input);
      }
      decode(input) {
        return this.decoder.decode(input);
      }
    };
    var from3 = ({ name, prefix, encode: encode4, decode: decode5 }) => new Codec2(name, prefix, encode4, decode5);
    var baseX = ({ prefix, name, alphabet }) => {
      const { encode: encode4, decode: decode5 } = baseX$1(alphabet, name);
      return from3({
        prefix,
        name,
        encode: encode4,
        decode: (text) => bytes.coerce(decode5(text))
      });
    };
    var decode4 = (string, alphabet, bitsPerChar, name) => {
      const codes = {};
      for (let i = 0; i < alphabet.length; ++i) {
        codes[alphabet[i]] = i;
      }
      let end = string.length;
      while (string[end - 1] === "=") {
        --end;
      }
      const out = new Uint8Array(end * bitsPerChar / 8 | 0);
      let bits = 0;
      let buffer = 0;
      let written = 0;
      for (let i = 0; i < end; ++i) {
        const value = codes[string[i]];
        if (value === void 0) {
          throw new SyntaxError(`Non-${name} character`);
        }
        buffer = buffer << bitsPerChar | value;
        bits += bitsPerChar;
        if (bits >= 8) {
          bits -= 8;
          out[written++] = 255 & buffer >> bits;
        }
      }
      if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
        throw new SyntaxError("Unexpected end of data");
      }
      return out;
    };
    var encode3 = (data, alphabet, bitsPerChar) => {
      const pad = alphabet[alphabet.length - 1] === "=";
      const mask = (1 << bitsPerChar) - 1;
      let out = "";
      let bits = 0;
      let buffer = 0;
      for (let i = 0; i < data.length; ++i) {
        buffer = buffer << 8 | data[i];
        bits += 8;
        while (bits > bitsPerChar) {
          bits -= bitsPerChar;
          out += alphabet[mask & buffer >> bits];
        }
      }
      if (bits) {
        out += alphabet[mask & buffer << bitsPerChar - bits];
      }
      if (pad) {
        while (out.length * bitsPerChar & 7) {
          out += "=";
        }
      }
      return out;
    };
    var rfc46482 = ({ name, prefix, bitsPerChar, alphabet }) => {
      return from3({
        prefix,
        name,
        encode(input) {
          return encode3(input, alphabet, bitsPerChar);
        },
        decode(input) {
          return decode4(input, alphabet, bitsPerChar, name);
        }
      });
    };
    exports.Codec = Codec2;
    exports.baseX = baseX;
    exports.from = from3;
    exports.or = or2;
    exports.rfc4648 = rfc46482;
  }
});

// node_modules/multiformats/cjs/src/bases/identity.js
var require_identity = __commonJS({
  "node_modules/multiformats/cjs/src/bases/identity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var base = require_base3();
    var bytes = require_bytes2();
    var identity = base.from({
      prefix: "\0",
      name: "identity",
      encode: (buf) => bytes.toString(buf),
      decode: (str) => bytes.fromString(str)
    });
    exports.identity = identity;
  }
});

// node_modules/multiformats/cjs/src/bases/base2.js
var require_base22 = __commonJS({
  "node_modules/multiformats/cjs/src/bases/base2.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var base = require_base3();
    var base2 = base.rfc4648({
      prefix: "0",
      name: "base2",
      alphabet: "01",
      bitsPerChar: 1
    });
    exports.base2 = base2;
  }
});

// node_modules/multiformats/cjs/src/bases/base8.js
var require_base8 = __commonJS({
  "node_modules/multiformats/cjs/src/bases/base8.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var base = require_base3();
    var base8 = base.rfc4648({
      prefix: "7",
      name: "base8",
      alphabet: "01234567",
      bitsPerChar: 3
    });
    exports.base8 = base8;
  }
});

// node_modules/multiformats/cjs/src/bases/base10.js
var require_base10 = __commonJS({
  "node_modules/multiformats/cjs/src/bases/base10.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var base = require_base3();
    var base10 = base.baseX({
      prefix: "9",
      name: "base10",
      alphabet: "0123456789"
    });
    exports.base10 = base10;
  }
});

// node_modules/multiformats/cjs/src/bases/base16.js
var require_base16 = __commonJS({
  "node_modules/multiformats/cjs/src/bases/base16.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var base = require_base3();
    var base16 = base.rfc4648({
      prefix: "f",
      name: "base16",
      alphabet: "0123456789abcdef",
      bitsPerChar: 4
    });
    var base16upper = base.rfc4648({
      prefix: "F",
      name: "base16upper",
      alphabet: "0123456789ABCDEF",
      bitsPerChar: 4
    });
    exports.base16 = base16;
    exports.base16upper = base16upper;
  }
});

// node_modules/multiformats/cjs/src/bases/base32.js
var require_base32 = __commonJS({
  "node_modules/multiformats/cjs/src/bases/base32.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var base = require_base3();
    var base32 = base.rfc4648({
      prefix: "b",
      name: "base32",
      alphabet: "abcdefghijklmnopqrstuvwxyz234567",
      bitsPerChar: 5
    });
    var base32upper = base.rfc4648({
      prefix: "B",
      name: "base32upper",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
      bitsPerChar: 5
    });
    var base32pad = base.rfc4648({
      prefix: "c",
      name: "base32pad",
      alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
      bitsPerChar: 5
    });
    var base32padupper = base.rfc4648({
      prefix: "C",
      name: "base32padupper",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
      bitsPerChar: 5
    });
    var base32hex = base.rfc4648({
      prefix: "v",
      name: "base32hex",
      alphabet: "0123456789abcdefghijklmnopqrstuv",
      bitsPerChar: 5
    });
    var base32hexupper = base.rfc4648({
      prefix: "V",
      name: "base32hexupper",
      alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
      bitsPerChar: 5
    });
    var base32hexpad = base.rfc4648({
      prefix: "t",
      name: "base32hexpad",
      alphabet: "0123456789abcdefghijklmnopqrstuv=",
      bitsPerChar: 5
    });
    var base32hexpadupper = base.rfc4648({
      prefix: "T",
      name: "base32hexpadupper",
      alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
      bitsPerChar: 5
    });
    var base32z = base.rfc4648({
      prefix: "h",
      name: "base32z",
      alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
      bitsPerChar: 5
    });
    exports.base32 = base32;
    exports.base32hex = base32hex;
    exports.base32hexpad = base32hexpad;
    exports.base32hexpadupper = base32hexpadupper;
    exports.base32hexupper = base32hexupper;
    exports.base32pad = base32pad;
    exports.base32padupper = base32padupper;
    exports.base32upper = base32upper;
    exports.base32z = base32z;
  }
});

// node_modules/multiformats/cjs/src/bases/base36.js
var require_base36 = __commonJS({
  "node_modules/multiformats/cjs/src/bases/base36.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var base = require_base3();
    var base36 = base.baseX({
      prefix: "k",
      name: "base36",
      alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    });
    var base36upper = base.baseX({
      prefix: "K",
      name: "base36upper",
      alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
    exports.base36 = base36;
    exports.base36upper = base36upper;
  }
});

// node_modules/multiformats/cjs/src/bases/base58.js
var require_base58 = __commonJS({
  "node_modules/multiformats/cjs/src/bases/base58.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var base = require_base3();
    var base58btc = base.baseX({
      name: "base58btc",
      prefix: "z",
      alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    });
    var base58flickr = base.baseX({
      name: "base58flickr",
      prefix: "Z",
      alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    });
    exports.base58btc = base58btc;
    exports.base58flickr = base58flickr;
  }
});

// node_modules/multiformats/cjs/src/bases/base64.js
var require_base642 = __commonJS({
  "node_modules/multiformats/cjs/src/bases/base64.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var base = require_base3();
    var base642 = base.rfc4648({
      prefix: "m",
      name: "base64",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      bitsPerChar: 6
    });
    var base64pad2 = base.rfc4648({
      prefix: "M",
      name: "base64pad",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      bitsPerChar: 6
    });
    var base64url2 = base.rfc4648({
      prefix: "u",
      name: "base64url",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
      bitsPerChar: 6
    });
    var base64urlpad2 = base.rfc4648({
      prefix: "U",
      name: "base64urlpad",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
      bitsPerChar: 6
    });
    exports.base64 = base642;
    exports.base64pad = base64pad2;
    exports.base64url = base64url2;
    exports.base64urlpad = base64urlpad2;
  }
});

// node_modules/multiformats/cjs/vendor/varint.js
var require_varint2 = __commonJS({
  "node_modules/multiformats/cjs/vendor/varint.js"(exports, module2) {
    "use strict";
    var encode_12 = encode3;
    var MSB2 = 128;
    var REST2 = 127;
    var MSBALL2 = ~REST2;
    var INT2 = Math.pow(2, 31);
    function encode3(num, out, offset) {
      out = out || [];
      offset = offset || 0;
      var oldOffset = offset;
      while (num >= INT2) {
        out[offset++] = num & 255 | MSB2;
        num /= 128;
      }
      while (num & MSBALL2) {
        out[offset++] = num & 255 | MSB2;
        num >>>= 7;
      }
      out[offset] = num | 0;
      encode3.bytes = offset - oldOffset + 1;
      return out;
    }
    var decode4 = read2;
    var MSB$12 = 128;
    var REST$12 = 127;
    function read2(buf, offset) {
      var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
      do {
        if (counter >= l) {
          read2.bytes = 0;
          throw new RangeError("Could not decode varint");
        }
        b = buf[counter++];
        res += shift < 28 ? (b & REST$12) << shift : (b & REST$12) * Math.pow(2, shift);
        shift += 7;
      } while (b >= MSB$12);
      read2.bytes = counter - offset;
      return res;
    }
    var N12 = Math.pow(2, 7);
    var N22 = Math.pow(2, 14);
    var N32 = Math.pow(2, 21);
    var N42 = Math.pow(2, 28);
    var N52 = Math.pow(2, 35);
    var N62 = Math.pow(2, 42);
    var N72 = Math.pow(2, 49);
    var N82 = Math.pow(2, 56);
    var N92 = Math.pow(2, 63);
    var length2 = function(value) {
      return value < N12 ? 1 : value < N22 ? 2 : value < N32 ? 3 : value < N42 ? 4 : value < N52 ? 5 : value < N62 ? 6 : value < N72 ? 7 : value < N82 ? 8 : value < N92 ? 9 : 10;
    };
    var varint2 = {
      encode: encode_12,
      decode: decode4,
      encodingLength: length2
    };
    var _brrp_varint2 = varint2;
    var varint$1 = _brrp_varint2;
    module2.exports = varint$1;
  }
});

// node_modules/multiformats/cjs/src/varint.js
var require_varint3 = __commonJS({
  "node_modules/multiformats/cjs/src/varint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var varint$1 = require_varint2();
    var decode4 = (data) => {
      const code = varint$1.decode(data);
      return [
        code,
        varint$1.decode.bytes
      ];
    };
    var encodeTo2 = (int, target, offset = 0) => {
      varint$1.encode(int, target, offset);
      return target;
    };
    var encodingLength2 = (int) => {
      return varint$1.encodingLength(int);
    };
    exports.decode = decode4;
    exports.encodeTo = encodeTo2;
    exports.encodingLength = encodingLength2;
  }
});

// node_modules/multiformats/cjs/src/hashes/digest.js
var require_digest = __commonJS({
  "node_modules/multiformats/cjs/src/hashes/digest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bytes = require_bytes2();
    var varint2 = require_varint3();
    var create2 = (code, digest) => {
      const size = digest.byteLength;
      const sizeOffset = varint2.encodingLength(code);
      const digestOffset = sizeOffset + varint2.encodingLength(size);
      const bytes2 = new Uint8Array(digestOffset + size);
      varint2.encodeTo(code, bytes2, 0);
      varint2.encodeTo(size, bytes2, sizeOffset);
      bytes2.set(digest, digestOffset);
      return new Digest2(code, size, digest, bytes2);
    };
    var decode4 = (multihash) => {
      const bytes$1 = bytes.coerce(multihash);
      const [code, sizeOffset] = varint2.decode(bytes$1);
      const [size, digestOffset] = varint2.decode(bytes$1.subarray(sizeOffset));
      const digest = bytes$1.subarray(sizeOffset + digestOffset);
      if (digest.byteLength !== size) {
        throw new Error("Incorrect length");
      }
      return new Digest2(code, size, digest, bytes$1);
    };
    var equals2 = (a, b) => {
      if (a === b) {
        return true;
      } else {
        return a.code === b.code && a.size === b.size && bytes.equals(a.bytes, b.bytes);
      }
    };
    var Digest2 = class {
      constructor(code, size, digest, bytes2) {
        this.code = code;
        this.size = size;
        this.digest = digest;
        this.bytes = bytes2;
      }
    };
    exports.Digest = Digest2;
    exports.create = create2;
    exports.decode = decode4;
    exports.equals = equals2;
  }
});

// node_modules/multiformats/cjs/src/hashes/hasher.js
var require_hasher = __commonJS({
  "node_modules/multiformats/cjs/src/hashes/hasher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var digest = require_digest();
    var from3 = ({ name, code, encode: encode3 }) => new Hasher2(name, code, encode3);
    var Hasher2 = class {
      constructor(name, code, encode3) {
        this.name = name;
        this.code = code;
        this.encode = encode3;
      }
      digest(input) {
        if (input instanceof Uint8Array) {
          const result = this.encode(input);
          return result instanceof Uint8Array ? digest.create(this.code, result) : result.then((digest$1) => digest.create(this.code, digest$1));
        } else {
          throw Error("Unknown type, must be binary type");
        }
      }
    };
    exports.Hasher = Hasher2;
    exports.from = from3;
  }
});

// node_modules/multiformats/cjs/src/hashes/sha2.js
var require_sha2 = __commonJS({
  "node_modules/multiformats/cjs/src/hashes/sha2.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var crypto4 = require("crypto");
    var hasher = require_hasher();
    var bytes = require_bytes2();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var crypto__default = /* @__PURE__ */ _interopDefaultLegacy(crypto4);
    var sha2562 = hasher.from({
      name: "sha2-256",
      code: 18,
      encode: (input) => bytes.coerce(crypto__default["default"].createHash("sha256").update(input).digest())
    });
    var sha5122 = hasher.from({
      name: "sha2-512",
      code: 19,
      encode: (input) => bytes.coerce(crypto__default["default"].createHash("sha512").update(input).digest())
    });
    exports.sha256 = sha2562;
    exports.sha512 = sha5122;
  }
});

// node_modules/multiformats/cjs/src/hashes/identity.js
var require_identity2 = __commonJS({
  "node_modules/multiformats/cjs/src/hashes/identity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bytes = require_bytes2();
    var digest$1 = require_digest();
    var code = 0;
    var name = "identity";
    var encode3 = bytes.coerce;
    var digest = (input) => digest$1.create(code, encode3(input));
    var identity = {
      code,
      name,
      encode: encode3,
      digest
    };
    exports.identity = identity;
  }
});

// node_modules/multiformats/cjs/src/codecs/raw.js
var require_raw = __commonJS({
  "node_modules/multiformats/cjs/src/codecs/raw.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bytes = require_bytes2();
    var name = "raw";
    var code = 85;
    var encode3 = (node) => bytes.coerce(node);
    var decode4 = (data) => bytes.coerce(data);
    exports.code = code;
    exports.decode = decode4;
    exports.encode = encode3;
    exports.name = name;
  }
});

// node_modules/multiformats/cjs/src/codecs/json.js
var require_json = __commonJS({
  "node_modules/multiformats/cjs/src/codecs/json.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var textEncoder = new TextEncoder();
    var textDecoder = new TextDecoder();
    var name = "json";
    var code = 512;
    var encode3 = (node) => textEncoder.encode(JSON.stringify(node));
    var decode4 = (data) => JSON.parse(textDecoder.decode(data));
    exports.code = code;
    exports.decode = decode4;
    exports.encode = encode3;
    exports.name = name;
  }
});

// node_modules/multiformats/cjs/src/cid.js
var require_cid = __commonJS({
  "node_modules/multiformats/cjs/src/cid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var varint2 = require_varint3();
    var digest = require_digest();
    var base58 = require_base58();
    var base32 = require_base32();
    var bytes = require_bytes2();
    var CID = class {
      constructor(version2, code, multihash, bytes2) {
        this.code = code;
        this.version = version2;
        this.multihash = multihash;
        this.bytes = bytes2;
        this.byteOffset = bytes2.byteOffset;
        this.byteLength = bytes2.byteLength;
        this.asCID = this;
        this._baseCache = /* @__PURE__ */ new Map();
        Object.defineProperties(this, {
          byteOffset: hidden,
          byteLength: hidden,
          code: readonly,
          version: readonly,
          multihash: readonly,
          bytes: readonly,
          _baseCache: hidden,
          asCID: hidden
        });
      }
      toV0() {
        switch (this.version) {
          case 0: {
            return this;
          }
          default: {
            const { code, multihash } = this;
            if (code !== DAG_PB_CODE) {
              throw new Error("Cannot convert a non dag-pb CID to CIDv0");
            }
            if (multihash.code !== SHA_256_CODE) {
              throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
            }
            return CID.createV0(multihash);
          }
        }
      }
      toV1() {
        switch (this.version) {
          case 0: {
            const { code, digest: digest$1 } = this.multihash;
            const multihash = digest.create(code, digest$1);
            return CID.createV1(this.code, multihash);
          }
          case 1: {
            return this;
          }
          default: {
            throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
          }
        }
      }
      equals(other) {
        return other && this.code === other.code && this.version === other.version && digest.equals(this.multihash, other.multihash);
      }
      toString(base) {
        const { bytes: bytes2, version: version2, _baseCache } = this;
        switch (version2) {
          case 0:
            return toStringV0(bytes2, _baseCache, base || base58.base58btc.encoder);
          default:
            return toStringV1(bytes2, _baseCache, base || base32.base32.encoder);
        }
      }
      toJSON() {
        return {
          code: this.code,
          version: this.version,
          hash: this.multihash.bytes
        };
      }
      get [Symbol.toStringTag]() {
        return "CID";
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return "CID(" + this.toString() + ")";
      }
      static isCID(value) {
        deprecate(/^0\.0/, IS_CID_DEPRECATION);
        return !!(value && (value[cidSymbol] || value.asCID === value));
      }
      get toBaseEncodedString() {
        throw new Error("Deprecated, use .toString()");
      }
      get codec() {
        throw new Error('"codec" property is deprecated, use integer "code" property instead');
      }
      get buffer() {
        throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
      }
      get multibaseName() {
        throw new Error('"multibaseName" property is deprecated');
      }
      get prefix() {
        throw new Error('"prefix" property is deprecated');
      }
      static asCID(value) {
        if (value instanceof CID) {
          return value;
        } else if (value != null && value.asCID === value) {
          const { version: version2, code, multihash, bytes: bytes2 } = value;
          return new CID(version2, code, multihash, bytes2 || encodeCID(version2, code, multihash.bytes));
        } else if (value != null && value[cidSymbol] === true) {
          const { version: version2, multihash, code } = value;
          const digest$1 = digest.decode(multihash);
          return CID.create(version2, code, digest$1);
        } else {
          return null;
        }
      }
      static create(version2, code, digest2) {
        if (typeof code !== "number") {
          throw new Error("String codecs are no longer supported");
        }
        switch (version2) {
          case 0: {
            if (code !== DAG_PB_CODE) {
              throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
            } else {
              return new CID(version2, code, digest2, digest2.bytes);
            }
          }
          case 1: {
            const bytes2 = encodeCID(version2, code, digest2.bytes);
            return new CID(version2, code, digest2, bytes2);
          }
          default: {
            throw new Error("Invalid version");
          }
        }
      }
      static createV0(digest2) {
        return CID.create(0, DAG_PB_CODE, digest2);
      }
      static createV1(code, digest2) {
        return CID.create(1, code, digest2);
      }
      static decode(bytes2) {
        const [cid, remainder] = CID.decodeFirst(bytes2);
        if (remainder.length) {
          throw new Error("Incorrect length");
        }
        return cid;
      }
      static decodeFirst(bytes$1) {
        const specs = CID.inspectBytes(bytes$1);
        const prefixSize = specs.size - specs.multihashSize;
        const multihashBytes = bytes.coerce(bytes$1.subarray(prefixSize, prefixSize + specs.multihashSize));
        if (multihashBytes.byteLength !== specs.multihashSize) {
          throw new Error("Incorrect length");
        }
        const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
        const digest$1 = new digest.Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
        const cid = specs.version === 0 ? CID.createV0(digest$1) : CID.createV1(specs.codec, digest$1);
        return [
          cid,
          bytes$1.subarray(specs.size)
        ];
      }
      static inspectBytes(initialBytes) {
        let offset = 0;
        const next = () => {
          const [i, length2] = varint2.decode(initialBytes.subarray(offset));
          offset += length2;
          return i;
        };
        let version2 = next();
        let codec = DAG_PB_CODE;
        if (version2 === 18) {
          version2 = 0;
          offset = 0;
        } else if (version2 === 1) {
          codec = next();
        }
        if (version2 !== 0 && version2 !== 1) {
          throw new RangeError(`Invalid CID version ${version2}`);
        }
        const prefixSize = offset;
        const multihashCode = next();
        const digestSize = next();
        const size = offset + digestSize;
        const multihashSize = size - prefixSize;
        return {
          version: version2,
          codec,
          multihashCode,
          digestSize,
          multihashSize,
          size
        };
      }
      static parse(source, base) {
        const [prefix, bytes2] = parseCIDtoBytes(source, base);
        const cid = CID.decode(bytes2);
        cid._baseCache.set(prefix, source);
        return cid;
      }
    };
    var parseCIDtoBytes = (source, base) => {
      switch (source[0]) {
        case "Q": {
          const decoder = base || base58.base58btc;
          return [
            base58.base58btc.prefix,
            decoder.decode(`${base58.base58btc.prefix}${source}`)
          ];
        }
        case base58.base58btc.prefix: {
          const decoder = base || base58.base58btc;
          return [
            base58.base58btc.prefix,
            decoder.decode(source)
          ];
        }
        case base32.base32.prefix: {
          const decoder = base || base32.base32;
          return [
            base32.base32.prefix,
            decoder.decode(source)
          ];
        }
        default: {
          if (base == null) {
            throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
          }
          return [
            source[0],
            base.decode(source)
          ];
        }
      }
    };
    var toStringV0 = (bytes2, cache, base) => {
      const { prefix } = base;
      if (prefix !== base58.base58btc.prefix) {
        throw Error(`Cannot string encode V0 in ${base.name} encoding`);
      }
      const cid = cache.get(prefix);
      if (cid == null) {
        const cid2 = base.encode(bytes2).slice(1);
        cache.set(prefix, cid2);
        return cid2;
      } else {
        return cid;
      }
    };
    var toStringV1 = (bytes2, cache, base) => {
      const { prefix } = base;
      const cid = cache.get(prefix);
      if (cid == null) {
        const cid2 = base.encode(bytes2);
        cache.set(prefix, cid2);
        return cid2;
      } else {
        return cid;
      }
    };
    var DAG_PB_CODE = 112;
    var SHA_256_CODE = 18;
    var encodeCID = (version2, code, multihash) => {
      const codeOffset = varint2.encodingLength(version2);
      const hashOffset = codeOffset + varint2.encodingLength(code);
      const bytes2 = new Uint8Array(hashOffset + multihash.byteLength);
      varint2.encodeTo(version2, bytes2, 0);
      varint2.encodeTo(code, bytes2, codeOffset);
      bytes2.set(multihash, hashOffset);
      return bytes2;
    };
    var cidSymbol = Symbol.for("@ipld/js-cid/CID");
    var readonly = {
      writable: false,
      configurable: false,
      enumerable: true
    };
    var hidden = {
      writable: false,
      enumerable: false,
      configurable: false
    };
    var version = "0.0.0-dev";
    var deprecate = (range, message) => {
      if (range.test(version)) {
        console.warn(message);
      } else {
        throw new Error(message);
      }
    };
    var IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
    exports.CID = CID;
  }
});

// node_modules/multiformats/cjs/src/index.js
var require_src3 = __commonJS({
  "node_modules/multiformats/cjs/src/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cid = require_cid();
    var varint2 = require_varint3();
    var bytes = require_bytes2();
    var hasher = require_hasher();
    var digest = require_digest();
    exports.CID = cid.CID;
    exports.varint = varint2;
    exports.bytes = bytes;
    exports.hasher = hasher;
    exports.digest = digest;
  }
});

// node_modules/multiformats/cjs/src/basics.js
var require_basics = __commonJS({
  "node_modules/multiformats/cjs/src/basics.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var identity = require_identity();
    var base2 = require_base22();
    var base8 = require_base8();
    var base10 = require_base10();
    var base16 = require_base16();
    var base32 = require_base32();
    var base36 = require_base36();
    var base58 = require_base58();
    var base642 = require_base642();
    var sha2 = require_sha2();
    var identity$1 = require_identity2();
    var raw = require_raw();
    var json = require_json();
    require_src3();
    var cid = require_cid();
    var hasher = require_hasher();
    var digest = require_digest();
    var varint2 = require_varint3();
    var bytes = require_bytes2();
    var bases = {
      ...identity,
      ...base2,
      ...base8,
      ...base10,
      ...base16,
      ...base32,
      ...base36,
      ...base58,
      ...base642
    };
    var hashes = {
      ...sha2,
      ...identity$1
    };
    var codecs = {
      raw,
      json
    };
    exports.CID = cid.CID;
    exports.hasher = hasher;
    exports.digest = digest;
    exports.varint = varint2;
    exports.bytes = bytes;
    exports.bases = bases;
    exports.codecs = codecs;
    exports.hashes = hashes;
  }
});

// node_modules/uint8arrays/cjs/src/util/as-uint8array.js
var require_as_uint8array = __commonJS({
  "node_modules/uint8arrays/cjs/src/util/as-uint8array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function asUint8Array(buf) {
      if (globalThis.Buffer != null) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
      }
      return buf;
    }
    exports.asUint8Array = asUint8Array;
  }
});

// node_modules/uint8arrays/cjs/src/alloc.js
var require_alloc = __commonJS({
  "node_modules/uint8arrays/cjs/src/alloc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var asUint8array = require_as_uint8array();
    function alloc(size = 0) {
      if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
        return asUint8array.asUint8Array(globalThis.Buffer.alloc(size));
      }
      return new Uint8Array(size);
    }
    function allocUnsafe(size = 0) {
      if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
        return asUint8array.asUint8Array(globalThis.Buffer.allocUnsafe(size));
      }
      return new Uint8Array(size);
    }
    exports.alloc = alloc;
    exports.allocUnsafe = allocUnsafe;
  }
});

// node_modules/uint8arrays/cjs/src/util/bases.js
var require_bases = __commonJS({
  "node_modules/uint8arrays/cjs/src/util/bases.js"(exports, module2) {
    "use strict";
    var basics = require_basics();
    var alloc = require_alloc();
    function createCodec(name, prefix, encode3, decode4) {
      return {
        name,
        prefix,
        encoder: {
          name,
          prefix,
          encode: encode3
        },
        decoder: { decode: decode4 }
      };
    }
    var string = createCodec("utf8", "u", (buf) => {
      const decoder = new TextDecoder("utf8");
      return "u" + decoder.decode(buf);
    }, (str) => {
      const encoder = new TextEncoder();
      return encoder.encode(str.substring(1));
    });
    var ascii = createCodec("ascii", "a", (buf) => {
      let string2 = "a";
      for (let i = 0; i < buf.length; i++) {
        string2 += String.fromCharCode(buf[i]);
      }
      return string2;
    }, (str) => {
      str = str.substring(1);
      const buf = alloc.allocUnsafe(str.length);
      for (let i = 0; i < str.length; i++) {
        buf[i] = str.charCodeAt(i);
      }
      return buf;
    });
    var BASES = {
      utf8: string,
      "utf-8": string,
      hex: basics.bases.base16,
      latin1: ascii,
      ascii,
      binary: ascii,
      ...basics.bases
    };
    module2.exports = BASES;
  }
});

// node_modules/uint8arrays/cjs/src/to-string.js
var require_to_string = __commonJS({
  "node_modules/uint8arrays/cjs/src/to-string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bases = require_bases();
    function toString(array, encoding = "utf8") {
      const base = bases[encoding];
      if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
      }
      if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
      }
      return base.encoder.encode(array).substring(1);
    }
    exports.toString = toString;
  }
});

// node_modules/uint8arrays/cjs/src/from-string.js
var require_from_string = __commonJS({
  "node_modules/uint8arrays/cjs/src/from-string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bases = require_bases();
    var asUint8array = require_as_uint8array();
    function fromString(string, encoding = "utf8") {
      const base = bases[encoding];
      if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
      }
      if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return asUint8array.asUint8Array(globalThis.Buffer.from(string, "utf-8"));
      }
      return base.decoder.decode(`${base.prefix}${string}`);
    }
    exports.fromString = fromString;
  }
});

// node_modules/uint8arrays/cjs/src/concat.js
var require_concat = __commonJS({
  "node_modules/uint8arrays/cjs/src/concat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var alloc = require_alloc();
    var asUint8array = require_as_uint8array();
    function concat(arrays, length2) {
      if (!length2) {
        length2 = arrays.reduce((acc, curr) => acc + curr.length, 0);
      }
      const output = alloc.allocUnsafe(length2);
      let offset = 0;
      for (const arr of arrays) {
        output.set(arr, offset);
        offset += arr.length;
      }
      return asUint8array.asUint8Array(output);
    }
    exports.concat = concat;
  }
});

// node_modules/multihashes/src/index.js
var require_src4 = __commonJS({
  "node_modules/multihashes/src/index.js"(exports, module2) {
    "use strict";
    var multibase = require_src2();
    var varint2 = require_varint();
    var { names } = require_constants2();
    var { toString: uint8ArrayToString } = require_to_string();
    var { fromString: uint8ArrayFromString } = require_from_string();
    var { concat: uint8ArrayConcat } = require_concat();
    var codes = {};
    for (const key in names) {
      const name = key;
      codes[names[name]] = name;
    }
    Object.freeze(codes);
    function toHexString(hash) {
      if (!(hash instanceof Uint8Array)) {
        throw new Error("must be passed a Uint8Array");
      }
      return uint8ArrayToString(hash, "base16");
    }
    function fromHexString(hash) {
      return uint8ArrayFromString(hash, "base16");
    }
    function toB58String(hash) {
      if (!(hash instanceof Uint8Array)) {
        throw new Error("must be passed a Uint8Array");
      }
      return uint8ArrayToString(multibase.encode("base58btc", hash)).slice(1);
    }
    function fromB58String(hash) {
      const encoded = hash instanceof Uint8Array ? uint8ArrayToString(hash) : hash;
      return multibase.decode("z" + encoded);
    }
    function decode4(bytes) {
      if (!(bytes instanceof Uint8Array)) {
        throw new Error("multihash must be a Uint8Array");
      }
      if (bytes.length < 2) {
        throw new Error("multihash too short. must be > 2 bytes.");
      }
      const code = varint2.decode(bytes);
      if (!isValidCode(code)) {
        throw new Error(`multihash unknown function code: 0x${code.toString(16)}`);
      }
      bytes = bytes.slice(varint2.decode.bytes);
      const len = varint2.decode(bytes);
      if (len < 0) {
        throw new Error(`multihash invalid length: ${len}`);
      }
      bytes = bytes.slice(varint2.decode.bytes);
      if (bytes.length !== len) {
        throw new Error(`multihash length inconsistent: 0x${uint8ArrayToString(bytes, "base16")}`);
      }
      return {
        code,
        name: codes[code],
        length: len,
        digest: bytes
      };
    }
    function encode3(digest, code, length2) {
      if (!digest || code === void 0) {
        throw new Error("multihash encode requires at least two args: digest, code");
      }
      const hashfn = coerceCode(code);
      if (!(digest instanceof Uint8Array)) {
        throw new Error("digest should be a Uint8Array");
      }
      if (length2 == null) {
        length2 = digest.length;
      }
      if (length2 && digest.length !== length2) {
        throw new Error("digest length should be equal to specified length.");
      }
      const hash = varint2.encode(hashfn);
      const len = varint2.encode(length2);
      return uint8ArrayConcat([hash, len, digest], hash.length + len.length + digest.length);
    }
    function coerceCode(name) {
      let code = name;
      if (typeof name === "string") {
        if (names[name] === void 0) {
          throw new Error(`Unrecognized hash function named: ${name}`);
        }
        code = names[name];
      }
      if (typeof code !== "number") {
        throw new Error(`Hash function code should be a number. Got: ${code}`);
      }
      if (codes[code] === void 0 && !isAppCode(code)) {
        throw new Error(`Unrecognized function code: ${code}`);
      }
      return code;
    }
    function isAppCode(code) {
      return code > 0 && code < 16;
    }
    function isValidCode(code) {
      if (isAppCode(code)) {
        return true;
      }
      if (codes[code]) {
        return true;
      }
      return false;
    }
    function validate(multihash) {
      decode4(multihash);
    }
    function prefix(multihash) {
      validate(multihash);
      return multihash.subarray(0, 2);
    }
    module2.exports = {
      names,
      codes,
      toHexString,
      fromHexString,
      toB58String,
      fromB58String,
      decode: decode4,
      encode: encode3,
      coerceCode,
      isAppCode,
      validate,
      prefix,
      isValidCode
    };
  }
});

// node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/vendor/varint.js
var require_varint4 = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/vendor/varint.js"(exports, module2) {
    "use strict";
    var encode_12 = encode3;
    var MSB2 = 128;
    var REST2 = 127;
    var MSBALL2 = ~REST2;
    var INT2 = Math.pow(2, 31);
    function encode3(num, out, offset) {
      out = out || [];
      offset = offset || 0;
      var oldOffset = offset;
      while (num >= INT2) {
        out[offset++] = num & 255 | MSB2;
        num /= 128;
      }
      while (num & MSBALL2) {
        out[offset++] = num & 255 | MSB2;
        num >>>= 7;
      }
      out[offset] = num | 0;
      encode3.bytes = offset - oldOffset + 1;
      return out;
    }
    var decode4 = read2;
    var MSB$12 = 128;
    var REST$12 = 127;
    function read2(buf, offset) {
      var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
      do {
        if (counter >= l) {
          read2.bytes = 0;
          throw new RangeError("Could not decode varint");
        }
        b = buf[counter++];
        res += shift < 28 ? (b & REST$12) << shift : (b & REST$12) * Math.pow(2, shift);
        shift += 7;
      } while (b >= MSB$12);
      read2.bytes = counter - offset;
      return res;
    }
    var N12 = Math.pow(2, 7);
    var N22 = Math.pow(2, 14);
    var N32 = Math.pow(2, 21);
    var N42 = Math.pow(2, 28);
    var N52 = Math.pow(2, 35);
    var N62 = Math.pow(2, 42);
    var N72 = Math.pow(2, 49);
    var N82 = Math.pow(2, 56);
    var N92 = Math.pow(2, 63);
    var length2 = function(value) {
      return value < N12 ? 1 : value < N22 ? 2 : value < N32 ? 3 : value < N42 ? 4 : value < N52 ? 5 : value < N62 ? 6 : value < N72 ? 7 : value < N82 ? 8 : value < N92 ? 9 : 10;
    };
    var varint2 = {
      encode: encode_12,
      decode: decode4,
      encodingLength: length2
    };
    var _brrp_varint2 = varint2;
    var varint$1 = _brrp_varint2;
    module2.exports = varint$1;
  }
});

// node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/varint.js
var require_varint5 = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/varint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var varint$1 = require_varint4();
    var decode4 = (data, offset = 0) => {
      const code = varint$1.decode(data, offset);
      return [
        code,
        varint$1.decode.bytes
      ];
    };
    var encodeTo2 = (int, target, offset = 0) => {
      varint$1.encode(int, target, offset);
      return target;
    };
    var encodingLength2 = (int) => {
      return varint$1.encodingLength(int);
    };
    exports.decode = decode4;
    exports.encodeTo = encodeTo2;
    exports.encodingLength = encodingLength2;
  }
});

// node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/hashes/digest.js
var require_digest2 = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/hashes/digest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bytes = require_bytes();
    var varint2 = require_varint5();
    var create2 = (code, digest) => {
      const size = digest.byteLength;
      const sizeOffset = varint2.encodingLength(code);
      const digestOffset = sizeOffset + varint2.encodingLength(size);
      const bytes2 = new Uint8Array(digestOffset + size);
      varint2.encodeTo(code, bytes2, 0);
      varint2.encodeTo(size, bytes2, sizeOffset);
      bytes2.set(digest, digestOffset);
      return new Digest2(code, size, digest, bytes2);
    };
    var decode4 = (multihash) => {
      const bytes$1 = bytes.coerce(multihash);
      const [code, sizeOffset] = varint2.decode(bytes$1);
      const [size, digestOffset] = varint2.decode(bytes$1.subarray(sizeOffset));
      const digest = bytes$1.subarray(sizeOffset + digestOffset);
      if (digest.byteLength !== size) {
        throw new Error("Incorrect length");
      }
      return new Digest2(code, size, digest, bytes$1);
    };
    var equals2 = (a, b) => {
      if (a === b) {
        return true;
      } else {
        return a.code === b.code && a.size === b.size && bytes.equals(a.bytes, b.bytes);
      }
    };
    var Digest2 = class {
      constructor(code, size, digest, bytes2) {
        this.code = code;
        this.size = size;
        this.digest = digest;
        this.bytes = bytes2;
      }
    };
    exports.Digest = Digest2;
    exports.create = create2;
    exports.decode = decode4;
    exports.equals = equals2;
  }
});

// node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/hashes/hasher.js
var require_hasher2 = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/hashes/hasher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var digest = require_digest2();
    var from3 = ({ name, code, encode: encode3 }) => new Hasher2(name, code, encode3);
    var Hasher2 = class {
      constructor(name, code, encode3) {
        this.name = name;
        this.code = code;
        this.encode = encode3;
      }
      digest(input) {
        if (input instanceof Uint8Array) {
          const result = this.encode(input);
          return result instanceof Uint8Array ? digest.create(this.code, result) : result.then((digest$1) => digest.create(this.code, digest$1));
        } else {
          throw Error("Unknown type, must be binary type");
        }
      }
    };
    exports.Hasher = Hasher2;
    exports.from = from3;
  }
});

// node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/hashes/sha2.js
var require_sha22 = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/cjs/src/hashes/sha2.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var crypto4 = require("crypto");
    var hasher = require_hasher2();
    var bytes = require_bytes();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var crypto__default = /* @__PURE__ */ _interopDefaultLegacy(crypto4);
    var sha2562 = hasher.from({
      name: "sha2-256",
      code: 18,
      encode: (input) => bytes.coerce(crypto__default["default"].createHash("sha256").update(input).digest())
    });
    var sha5122 = hasher.from({
      name: "sha2-512",
      code: 19,
      encode: (input) => bytes.coerce(crypto__default["default"].createHash("sha512").update(input).digest())
    });
    exports.sha256 = sha2562;
    exports.sha512 = sha5122;
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/Multihash.js
var require_Multihash = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/Multihash.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var multihashes = require_src4();
    var Encoder_1 = require_Encoder();
    var ErrorCode_1 = require_ErrorCode();
    var IonError_1 = require_IonError();
    var IonSdkConfig_1 = require_IonSdkConfig();
    var JsonCanonicalizer_1 = require_JsonCanonicalizer();
    var sha2_1 = require_sha22();
    var Multihash = class {
      static hash(content, hashAlgorithmInMultihashCode) {
        return __awaiter(this, void 0, void 0, function* () {
          const conventionalHash = yield this.hashAsNonMultihashBytes(content, hashAlgorithmInMultihashCode);
          const multihash = multihashes.encode(conventionalHash, hashAlgorithmInMultihashCode);
          return multihash;
        });
      }
      static hashAsNonMultihashBytes(content, hashAlgorithmInMultihashCode) {
        return __awaiter(this, void 0, void 0, function* () {
          let hash;
          switch (hashAlgorithmInMultihashCode) {
            case 18:
              hash = yield sha2_1.sha256.encode(content);
              break;
            default:
              throw new IonError_1.default(ErrorCode_1.default.MultihashUnsupportedHashAlgorithm, `Hash algorithm defined in multihash code ${hashAlgorithmInMultihashCode} is not supported.`);
          }
          return hash;
        });
      }
      static canonicalizeThenHashThenEncode(content, hashAlgorithmInMultihashCode) {
        return __awaiter(this, void 0, void 0, function* () {
          const canonicalizedStringBytes = JsonCanonicalizer_1.default.canonicalizeAsBytes(content);
          const multihashEncodedString = yield Multihash.hashThenEncode(canonicalizedStringBytes, hashAlgorithmInMultihashCode);
          return multihashEncodedString;
        });
      }
      static canonicalizeThenDoubleHashThenEncode(content, hashAlgorithmInMultihashCode) {
        return __awaiter(this, void 0, void 0, function* () {
          const contentBytes = JsonCanonicalizer_1.default.canonicalizeAsBytes(content);
          const intermediateHashBytes = yield Multihash.hashAsNonMultihashBytes(contentBytes, hashAlgorithmInMultihashCode);
          const multihashEncodedString = yield Multihash.hashThenEncode(intermediateHashBytes, hashAlgorithmInMultihashCode);
          return multihashEncodedString;
        });
      }
      static hashThenEncode(content, hashAlgorithmInMultihashCode) {
        return __awaiter(this, void 0, void 0, function* () {
          const multihashBytes = yield Multihash.hash(content, hashAlgorithmInMultihashCode);
          const multihashEncodedString = Encoder_1.default.encode(multihashBytes);
          return multihashEncodedString;
        });
      }
      static validateEncodedHashComputedUsingSupportedHashAlgorithm(encodedMultihash, inputContextForErrorLogging) {
        let multihash;
        const multihashBytes = Encoder_1.default.decodeAsBytes(encodedMultihash, inputContextForErrorLogging);
        try {
          multihash = multihashes.decode(multihashBytes);
        } catch (_a) {
          throw new IonError_1.default(ErrorCode_1.default.MultihashStringNotAMultihash, `Given ${inputContextForErrorLogging} string '${encodedMultihash}' is not a multihash after decoding.`);
        }
        const hashAlgorithmInMultihashCode = IonSdkConfig_1.default.hashAlgorithmInMultihashCode;
        if (hashAlgorithmInMultihashCode !== multihash.code) {
          throw new IonError_1.default(ErrorCode_1.default.MultihashUnsupportedHashAlgorithm, `Given ${inputContextForErrorLogging} uses unsupported multihash algorithm with code ${multihash.code}, should use ${hashAlgorithmInMultihashCode} or change IonSdkConfig to desired hashing algorithm.`);
        }
      }
    };
    exports.default = Multihash;
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/enums/OperationType.js
var require_OperationType = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/enums/OperationType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OperationType;
    (function(OperationType2) {
      OperationType2["Create"] = "create";
      OperationType2["Update"] = "update";
      OperationType2["Deactivate"] = "deactivate";
      OperationType2["Recover"] = "recover";
    })(OperationType || (OperationType = {}));
    exports.default = OperationType;
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/enums/PatchAction.js
var require_PatchAction = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/enums/PatchAction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PatchAction;
    (function(PatchAction2) {
      PatchAction2["Replace"] = "replace";
      PatchAction2["AddPublicKeys"] = "add-public-keys";
      PatchAction2["RemovePublicKeys"] = "remove-public-keys";
      PatchAction2["AddServices"] = "add-services";
      PatchAction2["RemoveServices"] = "remove-services";
    })(PatchAction || (PatchAction = {}));
    exports.default = PatchAction;
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/IonRequest.js
var require_IonRequest = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/IonRequest.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var URI = require_uri_all();
    var ErrorCode_1 = require_ErrorCode();
    var InputValidator_1 = require_InputValidator();
    var IonError_1 = require_IonError();
    var IonSdkConfig_1 = require_IonSdkConfig();
    var JsonCanonicalizer_1 = require_JsonCanonicalizer();
    var Multihash_1 = require_Multihash();
    var OperationKeyType_1 = require_OperationKeyType();
    var OperationType_1 = require_OperationType();
    var PatchAction_1 = require_PatchAction();
    var IonRequest2 = class {
      static createCreateRequest(input) {
        return __awaiter(this, void 0, void 0, function* () {
          const recoveryKey = input.recoveryKey;
          const updateKey = input.updateKey;
          const didDocumentKeys = input.document.publicKeys;
          const services = input.document.services;
          InputValidator_1.default.validateEs256kOperationKey(recoveryKey, OperationKeyType_1.default.Public);
          InputValidator_1.default.validateEs256kOperationKey(updateKey, OperationKeyType_1.default.Public);
          IonRequest2.validateDidDocumentKeys(didDocumentKeys);
          IonRequest2.validateServices(services);
          const hashAlgorithmInMultihashCode = IonSdkConfig_1.default.hashAlgorithmInMultihashCode;
          const patches = [{
            action: PatchAction_1.default.Replace,
            document: input.document
          }];
          const delta = {
            updateCommitment: yield Multihash_1.default.canonicalizeThenDoubleHashThenEncode(updateKey, hashAlgorithmInMultihashCode),
            patches
          };
          IonRequest2.validateDeltaSize(delta);
          const deltaHash = yield Multihash_1.default.canonicalizeThenHashThenEncode(delta, hashAlgorithmInMultihashCode);
          const suffixData = {
            deltaHash,
            recoveryCommitment: yield Multihash_1.default.canonicalizeThenDoubleHashThenEncode(recoveryKey, hashAlgorithmInMultihashCode)
          };
          const operationRequest = {
            type: OperationType_1.default.Create,
            suffixData,
            delta
          };
          return operationRequest;
        });
      }
      static createDeactivateRequest(input) {
        return __awaiter(this, void 0, void 0, function* () {
          IonRequest2.validateDidSuffix(input.didSuffix);
          InputValidator_1.default.validateEs256kOperationKey(input.recoveryPublicKey, OperationKeyType_1.default.Public);
          const hashAlgorithmInMultihashCode = IonSdkConfig_1.default.hashAlgorithmInMultihashCode;
          const revealValue = yield Multihash_1.default.canonicalizeThenHashThenEncode(input.recoveryPublicKey, hashAlgorithmInMultihashCode);
          const dataToBeSigned = {
            didSuffix: input.didSuffix,
            recoveryKey: input.recoveryPublicKey
          };
          const compactJws = yield input.signer.sign({ alg: "ES256K" }, dataToBeSigned);
          return {
            type: OperationType_1.default.Deactivate,
            didSuffix: input.didSuffix,
            revealValue,
            signedData: compactJws
          };
        });
      }
      static createRecoverRequest(input) {
        return __awaiter(this, void 0, void 0, function* () {
          IonRequest2.validateDidSuffix(input.didSuffix);
          InputValidator_1.default.validateEs256kOperationKey(input.recoveryPublicKey, OperationKeyType_1.default.Public);
          InputValidator_1.default.validateEs256kOperationKey(input.nextRecoveryPublicKey, OperationKeyType_1.default.Public);
          InputValidator_1.default.validateEs256kOperationKey(input.nextUpdatePublicKey, OperationKeyType_1.default.Public);
          IonRequest2.validateDidDocumentKeys(input.document.publicKeys);
          IonRequest2.validateServices(input.document.services);
          const hashAlgorithmInMultihashCode = IonSdkConfig_1.default.hashAlgorithmInMultihashCode;
          const revealValue = yield Multihash_1.default.canonicalizeThenHashThenEncode(input.recoveryPublicKey, hashAlgorithmInMultihashCode);
          const patches = [{
            action: PatchAction_1.default.Replace,
            document: input.document
          }];
          const nextUpdateCommitmentHash = yield Multihash_1.default.canonicalizeThenDoubleHashThenEncode(input.nextUpdatePublicKey, hashAlgorithmInMultihashCode);
          const delta = {
            patches,
            updateCommitment: nextUpdateCommitmentHash
          };
          const deltaHash = yield Multihash_1.default.canonicalizeThenHashThenEncode(delta, hashAlgorithmInMultihashCode);
          const nextRecoveryCommitmentHash = yield Multihash_1.default.canonicalizeThenDoubleHashThenEncode(input.nextRecoveryPublicKey, hashAlgorithmInMultihashCode);
          const dataToBeSigned = {
            recoveryCommitment: nextRecoveryCommitmentHash,
            recoveryKey: input.recoveryPublicKey,
            deltaHash
          };
          const compactJws = yield input.signer.sign({ alg: "ES256K" }, dataToBeSigned);
          return {
            type: OperationType_1.default.Recover,
            didSuffix: input.didSuffix,
            revealValue,
            delta,
            signedData: compactJws
          };
        });
      }
      static createUpdateRequest(input) {
        return __awaiter(this, void 0, void 0, function* () {
          IonRequest2.validateDidSuffix(input.didSuffix);
          InputValidator_1.default.validateEs256kOperationKey(input.updatePublicKey, OperationKeyType_1.default.Public);
          InputValidator_1.default.validateEs256kOperationKey(input.nextUpdatePublicKey, OperationKeyType_1.default.Public);
          IonRequest2.validateServices(input.servicesToAdd);
          IonRequest2.validateDidDocumentKeys(input.publicKeysToAdd);
          if (input.idsOfServicesToRemove !== void 0) {
            for (const id of input.idsOfServicesToRemove) {
              InputValidator_1.default.validateId(id);
            }
          }
          if (input.idsOfPublicKeysToRemove !== void 0) {
            for (const id of input.idsOfPublicKeysToRemove) {
              InputValidator_1.default.validateId(id);
            }
          }
          const patches = [];
          const servicesToAdd = input.servicesToAdd;
          if (servicesToAdd !== void 0 && servicesToAdd.length > 0) {
            const patch = {
              action: PatchAction_1.default.AddServices,
              services: servicesToAdd
            };
            patches.push(patch);
          }
          const idsOfServicesToRemove = input.idsOfServicesToRemove;
          if (idsOfServicesToRemove !== void 0 && idsOfServicesToRemove.length > 0) {
            const patch = {
              action: PatchAction_1.default.RemoveServices,
              ids: idsOfServicesToRemove
            };
            patches.push(patch);
          }
          const publicKeysToAdd = input.publicKeysToAdd;
          if (publicKeysToAdd !== void 0 && publicKeysToAdd.length > 0) {
            const patch = {
              action: PatchAction_1.default.AddPublicKeys,
              publicKeys: publicKeysToAdd
            };
            patches.push(patch);
          }
          const idsOfPublicKeysToRemove = input.idsOfPublicKeysToRemove;
          if (idsOfPublicKeysToRemove !== void 0 && idsOfPublicKeysToRemove.length > 0) {
            const patch = {
              action: PatchAction_1.default.RemovePublicKeys,
              ids: idsOfPublicKeysToRemove
            };
            patches.push(patch);
          }
          const hashAlgorithmInMultihashCode = IonSdkConfig_1.default.hashAlgorithmInMultihashCode;
          const revealValue = yield Multihash_1.default.canonicalizeThenHashThenEncode(input.updatePublicKey, hashAlgorithmInMultihashCode);
          const nextUpdateCommitmentHash = yield Multihash_1.default.canonicalizeThenDoubleHashThenEncode(input.nextUpdatePublicKey, hashAlgorithmInMultihashCode);
          const delta = {
            patches,
            updateCommitment: nextUpdateCommitmentHash
          };
          const deltaHash = yield Multihash_1.default.canonicalizeThenHashThenEncode(delta, hashAlgorithmInMultihashCode);
          const dataToBeSigned = {
            updateKey: input.updatePublicKey,
            deltaHash
          };
          const compactJws = yield input.signer.sign({ alg: "ES256K" }, dataToBeSigned);
          return {
            type: OperationType_1.default.Update,
            didSuffix: input.didSuffix,
            revealValue,
            delta,
            signedData: compactJws
          };
        });
      }
      static validateDidSuffix(didSuffix) {
        Multihash_1.default.validateEncodedHashComputedUsingSupportedHashAlgorithm(didSuffix, "didSuffix");
      }
      static validateDidDocumentKeys(publicKeys) {
        if (publicKeys === void 0) {
          return;
        }
        const publicKeyIdSet = /* @__PURE__ */ new Set();
        for (const publicKey of publicKeys) {
          if (Array.isArray(publicKey.publicKeyJwk)) {
            throw new IonError_1.default(ErrorCode_1.default.DidDocumentPublicKeyMissingOrIncorrectType, `DID Document key 'publicKeyJwk' property is not a non-array object.`);
          }
          InputValidator_1.default.validateId(publicKey.id);
          if (publicKeyIdSet.has(publicKey.id)) {
            throw new IonError_1.default(ErrorCode_1.default.DidDocumentPublicKeyIdDuplicated, `DID Document key with ID '${publicKey.id}' already exists.`);
          }
          publicKeyIdSet.add(publicKey.id);
          InputValidator_1.default.validatePublicKeyPurposes(publicKey.purposes);
        }
      }
      static validateServices(services) {
        if (services !== void 0 && services.length !== 0) {
          const serviceIdSet = /* @__PURE__ */ new Set();
          for (const service of services) {
            IonRequest2.validateService(service);
            if (serviceIdSet.has(service.id)) {
              throw new IonError_1.default(ErrorCode_1.default.DidDocumentServiceIdDuplicated, "Service id has to be unique");
            }
            serviceIdSet.add(service.id);
          }
        }
      }
      static validateService(service) {
        InputValidator_1.default.validateId(service.id);
        const maxTypeLength = 30;
        if (service.type.length > maxTypeLength) {
          const errorMessage = `Service endpoint type length ${service.type.length} exceeds max allowed length of ${maxTypeLength}.`;
          throw new IonError_1.default(ErrorCode_1.default.ServiceTypeTooLong, errorMessage);
        }
        if (Array.isArray(service.serviceEndpoint)) {
          const errorMessage = "Service endpoint value cannot be an array.";
          throw new IonError_1.default(ErrorCode_1.default.ServiceEndpointCannotBeAnArray, errorMessage);
        }
        if (typeof service.serviceEndpoint === "string") {
          const uri = URI.parse(service.serviceEndpoint);
          if (uri.error !== void 0) {
            throw new IonError_1.default(ErrorCode_1.default.ServiceEndpointStringNotValidUri, `Service endpoint string '${service.serviceEndpoint}' is not a URI.`);
          }
        }
      }
      static validateDeltaSize(delta) {
        const deltaBytes = JsonCanonicalizer_1.default.canonicalizeAsBytes(delta);
        if (deltaBytes.length > IonSdkConfig_1.default.maxCanonicalizedDeltaSizeInBytes) {
          const errorMessage = `Delta of ${deltaBytes.length} bytes exceeded limit of ${IonSdkConfig_1.default.maxCanonicalizedDeltaSizeInBytes} bytes.`;
          throw new IonError_1.default(ErrorCode_1.default.DeltaExceedsMaximumSize, errorMessage);
        }
      }
    };
    exports.default = IonRequest2;
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/IonDid.js
var require_IonDid = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/IonDid.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Encoder_1 = require_Encoder();
    var IonRequest_1 = require_IonRequest();
    var IonSdkConfig_1 = require_IonSdkConfig();
    var JsonCanonicalizer_1 = require_JsonCanonicalizer();
    var Multihash_1 = require_Multihash();
    var IonDid2 = class {
      static createLongFormDid(input) {
        return __awaiter(this, void 0, void 0, function* () {
          const createRequest = yield IonRequest_1.default.createCreateRequest(input);
          const didUniqueSuffix = yield IonDid2.computeDidUniqueSuffix(createRequest.suffixData);
          let shortFormDid;
          if (IonSdkConfig_1.default.network === void 0 || IonSdkConfig_1.default.network === "mainnet") {
            shortFormDid = `did:ion:${didUniqueSuffix}`;
          } else {
            shortFormDid = `did:ion:${IonSdkConfig_1.default.network}:${didUniqueSuffix}`;
          }
          const initialState = {
            suffixData: createRequest.suffixData,
            delta: createRequest.delta
          };
          const canonicalizedInitialStateBytes = JsonCanonicalizer_1.default.canonicalizeAsBytes(initialState);
          const encodedCanonicalizedInitialStateString = Encoder_1.default.encode(canonicalizedInitialStateBytes);
          const longFormDid = `${shortFormDid}:${encodedCanonicalizedInitialStateString}`;
          return longFormDid;
        });
      }
      static computeDidUniqueSuffix(suffixData) {
        return __awaiter(this, void 0, void 0, function* () {
          const canonicalizedStringBytes = JsonCanonicalizer_1.default.canonicalizeAsBytes(suffixData);
          const multihash = yield Multihash_1.default.hash(canonicalizedStringBytes, IonSdkConfig_1.default.hashAlgorithmInMultihashCode);
          const encodedMultihash = Encoder_1.default.encode(multihash);
          return encodedMultihash;
        });
      }
    };
    exports.default = IonDid2;
  }
});

// node_modules/@decentralized-identity/ion-sdk/node_modules/@noble/ed25519/lib/index.js
var require_lib = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/node_modules/@noble/ed25519/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.utils = exports.curve25519 = exports.getSharedSecret = exports.sync = exports.verify = exports.sign = exports.getPublicKey = exports.Signature = exports.Point = exports.RistrettoPoint = exports.ExtendedPoint = exports.CURVE = void 0;
    var nodeCrypto3 = require("crypto");
    var _0n3 = BigInt(0);
    var _1n3 = BigInt(1);
    var _2n3 = BigInt(2);
    var CU_O = BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989");
    var CURVE3 = Object.freeze({
      a: BigInt(-1),
      d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
      P: BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"),
      l: CU_O,
      n: CU_O,
      h: BigInt(8),
      Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
      Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")
    });
    exports.CURVE = CURVE3;
    var POW_2_2562 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
    var SQRT_M12 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
    var SQRT_D2 = BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742");
    var SQRT_AD_MINUS_ONE2 = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
    var INVSQRT_A_MINUS_D2 = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
    var ONE_MINUS_D_SQ2 = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
    var D_MINUS_ONE_SQ2 = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
    var ExtendedPoint2 = class {
      constructor(x, y, z, t) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.t = t;
      }
      static fromAffine(p) {
        if (!(p instanceof Point3)) {
          throw new TypeError("ExtendedPoint#fromAffine: expected Point");
        }
        if (p.equals(Point3.ZERO))
          return ExtendedPoint2.ZERO;
        return new ExtendedPoint2(p.x, p.y, _1n3, mod3(p.x * p.y));
      }
      static toAffineBatch(points) {
        const toInv = invertBatch3(points.map((p) => p.z));
        return points.map((p, i) => p.toAffine(toInv[i]));
      }
      static normalizeZ(points) {
        return this.toAffineBatch(points).map(this.fromAffine);
      }
      equals(other) {
        assertExtPoint2(other);
        const { x: X1, y: Y1, z: Z1 } = this;
        const { x: X2, y: Y2, z: Z2 } = other;
        const X1Z2 = mod3(X1 * Z2);
        const X2Z1 = mod3(X2 * Z1);
        const Y1Z2 = mod3(Y1 * Z2);
        const Y2Z1 = mod3(Y2 * Z1);
        return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
      }
      negate() {
        return new ExtendedPoint2(mod3(-this.x), this.y, this.z, mod3(-this.t));
      }
      double() {
        const { x: X1, y: Y1, z: Z1 } = this;
        const { a } = CURVE3;
        const A = mod3(X1 * X1);
        const B = mod3(Y1 * Y1);
        const C = mod3(_2n3 * mod3(Z1 * Z1));
        const D = mod3(a * A);
        const x1y1 = X1 + Y1;
        const E = mod3(mod3(x1y1 * x1y1) - A - B);
        const G = D + B;
        const F = G - C;
        const H = D - B;
        const X3 = mod3(E * F);
        const Y3 = mod3(G * H);
        const T3 = mod3(E * H);
        const Z3 = mod3(F * G);
        return new ExtendedPoint2(X3, Y3, Z3, T3);
      }
      add(other) {
        assertExtPoint2(other);
        const { x: X1, y: Y1, z: Z1, t: T1 } = this;
        const { x: X2, y: Y2, z: Z2, t: T2 } = other;
        const A = mod3((Y1 - X1) * (Y2 + X2));
        const B = mod3((Y1 + X1) * (Y2 - X2));
        const F = mod3(B - A);
        if (F === _0n3)
          return this.double();
        const C = mod3(Z1 * _2n3 * T2);
        const D = mod3(T1 * _2n3 * Z2);
        const E = D + C;
        const G = B + A;
        const H = D - C;
        const X3 = mod3(E * F);
        const Y3 = mod3(G * H);
        const T3 = mod3(E * H);
        const Z3 = mod3(F * G);
        return new ExtendedPoint2(X3, Y3, Z3, T3);
      }
      subtract(other) {
        return this.add(other.negate());
      }
      precomputeWindow(W) {
        const windows = 1 + 256 / W;
        const points = [];
        let p = this;
        let base = p;
        for (let window = 0; window < windows; window++) {
          base = p;
          points.push(base);
          for (let i = 1; i < 2 ** (W - 1); i++) {
            base = base.add(p);
            points.push(base);
          }
          p = base.double();
        }
        return points;
      }
      wNAF(n, affinePoint) {
        if (!affinePoint && this.equals(ExtendedPoint2.BASE))
          affinePoint = Point3.BASE;
        const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
        if (256 % W) {
          throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
        }
        let precomputes = affinePoint && pointPrecomputes3.get(affinePoint);
        if (!precomputes) {
          precomputes = this.precomputeWindow(W);
          if (affinePoint && W !== 1) {
            precomputes = ExtendedPoint2.normalizeZ(precomputes);
            pointPrecomputes3.set(affinePoint, precomputes);
          }
        }
        let p = ExtendedPoint2.ZERO;
        let f = ExtendedPoint2.ZERO;
        const windows = 1 + 256 / W;
        const windowSize = 2 ** (W - 1);
        const mask = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for (let window = 0; window < windows; window++) {
          const offset = window * windowSize;
          let wbits = Number(n & mask);
          n >>= shiftBy;
          if (wbits > windowSize) {
            wbits -= maxNumber;
            n += _1n3;
          }
          if (wbits === 0) {
            let pr = precomputes[offset];
            if (window % 2)
              pr = pr.negate();
            f = f.add(pr);
          } else {
            let cached = precomputes[offset + Math.abs(wbits) - 1];
            if (wbits < 0)
              cached = cached.negate();
            p = p.add(cached);
          }
        }
        return ExtendedPoint2.normalizeZ([p, f])[0];
      }
      multiply(scalar, affinePoint) {
        return this.wNAF(normalizeScalar3(scalar, CURVE3.l), affinePoint);
      }
      multiplyUnsafe(scalar) {
        let n = normalizeScalar3(scalar, CURVE3.l, false);
        const G = ExtendedPoint2.BASE;
        const P0 = ExtendedPoint2.ZERO;
        if (n === _0n3)
          return P0;
        if (this.equals(P0) || n === _1n3)
          return this;
        if (this.equals(G))
          return this.wNAF(n);
        let p = P0;
        let d = this;
        while (n > _0n3) {
          if (n & _1n3)
            p = p.add(d);
          d = d.double();
          n >>= _1n3;
        }
        return p;
      }
      isSmallOrder() {
        return this.multiplyUnsafe(CURVE3.h).equals(ExtendedPoint2.ZERO);
      }
      isTorsionFree() {
        return this.multiplyUnsafe(CURVE3.l).equals(ExtendedPoint2.ZERO);
      }
      toAffine(invZ = invert3(this.z)) {
        const { x, y, z } = this;
        const ax = mod3(x * invZ);
        const ay = mod3(y * invZ);
        const zz = mod3(z * invZ);
        if (zz !== _1n3)
          throw new Error("invZ was invalid");
        return new Point3(ax, ay);
      }
      fromRistrettoBytes() {
        legacyRist2();
      }
      toRistrettoBytes() {
        legacyRist2();
      }
      fromRistrettoHash() {
        legacyRist2();
      }
    };
    exports.ExtendedPoint = ExtendedPoint2;
    ExtendedPoint2.BASE = new ExtendedPoint2(CURVE3.Gx, CURVE3.Gy, _1n3, mod3(CURVE3.Gx * CURVE3.Gy));
    ExtendedPoint2.ZERO = new ExtendedPoint2(_0n3, _1n3, _1n3, _0n3);
    function assertExtPoint2(other) {
      if (!(other instanceof ExtendedPoint2))
        throw new TypeError("ExtendedPoint expected");
    }
    function assertRstPoint2(other) {
      if (!(other instanceof RistrettoPoint2))
        throw new TypeError("RistrettoPoint expected");
    }
    function legacyRist2() {
      throw new Error("Legacy method: switch to RistrettoPoint");
    }
    var RistrettoPoint2 = class {
      constructor(ep) {
        this.ep = ep;
      }
      static calcElligatorRistrettoMap(r0) {
        const { d } = CURVE3;
        const r = mod3(SQRT_M12 * r0 * r0);
        const Ns = mod3((r + _1n3) * ONE_MINUS_D_SQ2);
        let c = BigInt(-1);
        const D = mod3((c - d * r) * mod3(r + d));
        let { isValid: Ns_D_is_sq, value: s } = uvRatio2(Ns, D);
        let s_ = mod3(s * r0);
        if (!edIsNegative2(s_))
          s_ = mod3(-s_);
        if (!Ns_D_is_sq)
          s = s_;
        if (!Ns_D_is_sq)
          c = r;
        const Nt = mod3(c * (r - _1n3) * D_MINUS_ONE_SQ2 - D);
        const s2 = s * s;
        const W0 = mod3((s + s) * D);
        const W1 = mod3(Nt * SQRT_AD_MINUS_ONE2);
        const W2 = mod3(_1n3 - s2);
        const W3 = mod3(_1n3 + s2);
        return new ExtendedPoint2(mod3(W0 * W3), mod3(W2 * W1), mod3(W1 * W3), mod3(W0 * W2));
      }
      static hashToCurve(hex) {
        hex = ensureBytes3(hex, 64);
        const r1 = bytes255ToNumberLE2(hex.slice(0, 32));
        const R1 = this.calcElligatorRistrettoMap(r1);
        const r2 = bytes255ToNumberLE2(hex.slice(32, 64));
        const R2 = this.calcElligatorRistrettoMap(r2);
        return new RistrettoPoint2(R1.add(R2));
      }
      static fromHex(hex) {
        hex = ensureBytes3(hex, 32);
        const { a, d } = CURVE3;
        const emsg = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint";
        const s = bytes255ToNumberLE2(hex);
        if (!equalBytes2(numberTo32BytesLE2(s), hex) || edIsNegative2(s))
          throw new Error(emsg);
        const s2 = mod3(s * s);
        const u1 = mod3(_1n3 + a * s2);
        const u2 = mod3(_1n3 - a * s2);
        const u1_2 = mod3(u1 * u1);
        const u2_2 = mod3(u2 * u2);
        const v = mod3(a * d * u1_2 - u2_2);
        const { isValid, value: I } = invertSqrt2(mod3(v * u2_2));
        const Dx = mod3(I * u2);
        const Dy = mod3(I * Dx * v);
        let x = mod3((s + s) * Dx);
        if (edIsNegative2(x))
          x = mod3(-x);
        const y = mod3(u1 * Dy);
        const t = mod3(x * y);
        if (!isValid || edIsNegative2(t) || y === _0n3)
          throw new Error(emsg);
        return new RistrettoPoint2(new ExtendedPoint2(x, y, _1n3, t));
      }
      toRawBytes() {
        let { x, y, z, t } = this.ep;
        const u1 = mod3(mod3(z + y) * mod3(z - y));
        const u2 = mod3(x * y);
        const u2sq = mod3(u2 * u2);
        const { value: invsqrt } = invertSqrt2(mod3(u1 * u2sq));
        const D1 = mod3(invsqrt * u1);
        const D2 = mod3(invsqrt * u2);
        const zInv = mod3(D1 * D2 * t);
        let D;
        if (edIsNegative2(t * zInv)) {
          let _x = mod3(y * SQRT_M12);
          let _y = mod3(x * SQRT_M12);
          x = _x;
          y = _y;
          D = mod3(D1 * INVSQRT_A_MINUS_D2);
        } else {
          D = D2;
        }
        if (edIsNegative2(x * zInv))
          y = mod3(-y);
        let s = mod3((z - y) * D);
        if (edIsNegative2(s))
          s = mod3(-s);
        return numberTo32BytesLE2(s);
      }
      toHex() {
        return bytesToHex3(this.toRawBytes());
      }
      toString() {
        return this.toHex();
      }
      equals(other) {
        assertRstPoint2(other);
        const a = this.ep;
        const b = other.ep;
        const one = mod3(a.x * b.y) === mod3(a.y * b.x);
        const two = mod3(a.y * b.y) === mod3(a.x * b.x);
        return one || two;
      }
      add(other) {
        assertRstPoint2(other);
        return new RistrettoPoint2(this.ep.add(other.ep));
      }
      subtract(other) {
        assertRstPoint2(other);
        return new RistrettoPoint2(this.ep.subtract(other.ep));
      }
      multiply(scalar) {
        return new RistrettoPoint2(this.ep.multiply(scalar));
      }
      multiplyUnsafe(scalar) {
        return new RistrettoPoint2(this.ep.multiplyUnsafe(scalar));
      }
    };
    exports.RistrettoPoint = RistrettoPoint2;
    RistrettoPoint2.BASE = new RistrettoPoint2(ExtendedPoint2.BASE);
    RistrettoPoint2.ZERO = new RistrettoPoint2(ExtendedPoint2.ZERO);
    var pointPrecomputes3 = /* @__PURE__ */ new WeakMap();
    var Point3 = class {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        pointPrecomputes3.delete(this);
      }
      static fromHex(hex, strict = true) {
        const { d, P } = CURVE3;
        hex = ensureBytes3(hex, 32);
        const normed = hex.slice();
        normed[31] = hex[31] & ~128;
        const y = bytesToNumberLE2(normed);
        if (strict && y >= P)
          throw new Error("Expected 0 < hex < P");
        if (!strict && y >= POW_2_2562)
          throw new Error("Expected 0 < hex < 2**256");
        const y2 = mod3(y * y);
        const u = mod3(y2 - _1n3);
        const v = mod3(d * y2 + _1n3);
        let { isValid, value: x } = uvRatio2(u, v);
        if (!isValid)
          throw new Error("Point.fromHex: invalid y coordinate");
        const isXOdd = (x & _1n3) === _1n3;
        const isLastByteOdd = (hex[31] & 128) !== 0;
        if (isLastByteOdd !== isXOdd) {
          x = mod3(-x);
        }
        return new Point3(x, y);
      }
      static async fromPrivateKey(privateKey) {
        return (await getExtendedPublicKey2(privateKey)).point;
      }
      toRawBytes() {
        const bytes = numberTo32BytesLE2(this.y);
        bytes[31] |= this.x & _1n3 ? 128 : 0;
        return bytes;
      }
      toHex() {
        return bytesToHex3(this.toRawBytes());
      }
      toX25519() {
        const { y } = this;
        const u = mod3((_1n3 + y) * invert3(_1n3 - y));
        return numberTo32BytesLE2(u);
      }
      isTorsionFree() {
        return ExtendedPoint2.fromAffine(this).isTorsionFree();
      }
      equals(other) {
        return this.x === other.x && this.y === other.y;
      }
      negate() {
        return new Point3(mod3(-this.x), this.y);
      }
      add(other) {
        return ExtendedPoint2.fromAffine(this).add(ExtendedPoint2.fromAffine(other)).toAffine();
      }
      subtract(other) {
        return this.add(other.negate());
      }
      multiply(scalar) {
        return ExtendedPoint2.fromAffine(this).multiply(scalar, this).toAffine();
      }
    };
    exports.Point = Point3;
    Point3.BASE = new Point3(CURVE3.Gx, CURVE3.Gy);
    Point3.ZERO = new Point3(_0n3, _1n3);
    var Signature2 = class {
      constructor(r, s) {
        this.r = r;
        this.s = s;
        this.assertValidity();
      }
      static fromHex(hex) {
        const bytes = ensureBytes3(hex, 64);
        const r = Point3.fromHex(bytes.slice(0, 32), false);
        const s = bytesToNumberLE2(bytes.slice(32, 64));
        return new Signature2(r, s);
      }
      assertValidity() {
        const { r, s } = this;
        if (!(r instanceof Point3))
          throw new Error("Expected Point instance");
        normalizeScalar3(s, CURVE3.l, false);
        return this;
      }
      toRawBytes() {
        const u8 = new Uint8Array(64);
        u8.set(this.r.toRawBytes());
        u8.set(numberTo32BytesLE2(this.s), 32);
        return u8;
      }
      toHex() {
        return bytesToHex3(this.toRawBytes());
      }
    };
    exports.Signature = Signature2;
    function concatBytes(...arrays) {
      if (!arrays.every((a) => a instanceof Uint8Array))
        throw new Error("Expected Uint8Array list");
      if (arrays.length === 1)
        return arrays[0];
      const length2 = arrays.reduce((a, arr) => a + arr.length, 0);
      const result = new Uint8Array(length2);
      for (let i = 0, pad = 0; i < arrays.length; i++) {
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
      }
      return result;
    }
    var hexes3 = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
    function bytesToHex3(uint8a) {
      if (!(uint8a instanceof Uint8Array))
        throw new Error("Uint8Array expected");
      let hex = "";
      for (let i = 0; i < uint8a.length; i++) {
        hex += hexes3[uint8a[i]];
      }
      return hex;
    }
    function hexToBytes3(hex) {
      if (typeof hex !== "string") {
        throw new TypeError("hexToBytes: expected string, got " + typeof hex);
      }
      if (hex.length % 2)
        throw new Error("hexToBytes: received invalid unpadded hex");
      const array = new Uint8Array(hex.length / 2);
      for (let i = 0; i < array.length; i++) {
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0)
          throw new Error("Invalid byte sequence");
        array[i] = byte;
      }
      return array;
    }
    function numberTo32BytesBE2(num) {
      const length2 = 32;
      const hex = num.toString(16).padStart(length2 * 2, "0");
      return hexToBytes3(hex);
    }
    function numberTo32BytesLE2(num) {
      return numberTo32BytesBE2(num).reverse();
    }
    function edIsNegative2(num) {
      return (mod3(num) & _1n3) === _1n3;
    }
    function bytesToNumberLE2(uint8a) {
      if (!(uint8a instanceof Uint8Array))
        throw new Error("Expected Uint8Array");
      return BigInt("0x" + bytesToHex3(Uint8Array.from(uint8a).reverse()));
    }
    var MAX_255B = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
    function bytes255ToNumberLE2(bytes) {
      return mod3(bytesToNumberLE2(bytes) & MAX_255B);
    }
    function mod3(a, b = CURVE3.P) {
      const res = a % b;
      return res >= _0n3 ? res : b + res;
    }
    function invert3(number, modulo = CURVE3.P) {
      if (number === _0n3 || modulo <= _0n3) {
        throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
      }
      let a = mod3(number, modulo);
      let b = modulo;
      let x = _0n3, y = _1n3, u = _1n3, v = _0n3;
      while (a !== _0n3) {
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        b = a, a = r, x = u, y = v, u = m, v = n;
      }
      const gcd = b;
      if (gcd !== _1n3)
        throw new Error("invert: does not exist");
      return mod3(x, modulo);
    }
    function invertBatch3(nums, p = CURVE3.P) {
      const tmp = new Array(nums.length);
      const lastMultiplied = nums.reduce((acc, num, i) => {
        if (num === _0n3)
          return acc;
        tmp[i] = acc;
        return mod3(acc * num, p);
      }, _1n3);
      const inverted = invert3(lastMultiplied, p);
      nums.reduceRight((acc, num, i) => {
        if (num === _0n3)
          return acc;
        tmp[i] = mod3(acc * tmp[i], p);
        return mod3(acc * num, p);
      }, inverted);
      return tmp;
    }
    function pow23(x, power) {
      const { P } = CURVE3;
      let res = x;
      while (power-- > _0n3) {
        res *= res;
        res %= P;
      }
      return res;
    }
    function pow_2_252_32(x) {
      const { P } = CURVE3;
      const _5n = BigInt(5);
      const _10n = BigInt(10);
      const _20n = BigInt(20);
      const _40n = BigInt(40);
      const _80n = BigInt(80);
      const x2 = x * x % P;
      const b2 = x2 * x % P;
      const b4 = pow23(b2, _2n3) * b2 % P;
      const b5 = pow23(b4, _1n3) * x % P;
      const b10 = pow23(b5, _5n) * b5 % P;
      const b20 = pow23(b10, _10n) * b10 % P;
      const b40 = pow23(b20, _20n) * b20 % P;
      const b80 = pow23(b40, _40n) * b40 % P;
      const b160 = pow23(b80, _80n) * b80 % P;
      const b240 = pow23(b160, _80n) * b80 % P;
      const b250 = pow23(b240, _10n) * b10 % P;
      const pow_p_5_8 = pow23(b250, _2n3) * x % P;
      return { pow_p_5_8, b2 };
    }
    function uvRatio2(u, v) {
      const v3 = mod3(v * v * v);
      const v7 = mod3(v3 * v3 * v);
      const pow = pow_2_252_32(u * v7).pow_p_5_8;
      let x = mod3(u * v3 * pow);
      const vx2 = mod3(v * x * x);
      const root1 = x;
      const root2 = mod3(x * SQRT_M12);
      const useRoot1 = vx2 === u;
      const useRoot2 = vx2 === mod3(-u);
      const noRoot = vx2 === mod3(-u * SQRT_M12);
      if (useRoot1)
        x = root1;
      if (useRoot2 || noRoot)
        x = root2;
      if (edIsNegative2(x))
        x = mod3(-x);
      return { isValid: useRoot1 || useRoot2, value: x };
    }
    function invertSqrt2(number) {
      return uvRatio2(_1n3, number);
    }
    function modlLE(hash) {
      return mod3(bytesToNumberLE2(hash), CURVE3.l);
    }
    function equalBytes2(b1, b2) {
      if (b1.length !== b2.length) {
        return false;
      }
      for (let i = 0; i < b1.length; i++) {
        if (b1[i] !== b2[i]) {
          return false;
        }
      }
      return true;
    }
    function ensureBytes3(hex, expectedLength) {
      const bytes = hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes3(hex);
      if (typeof expectedLength === "number" && bytes.length !== expectedLength)
        throw new Error(`Expected ${expectedLength} bytes`);
      return bytes;
    }
    function normalizeScalar3(num, max, strict = true) {
      if (!max)
        throw new TypeError("Specify max value");
      if (typeof num === "number" && Number.isSafeInteger(num))
        num = BigInt(num);
      if (typeof num === "bigint" && num < max) {
        if (strict) {
          if (_0n3 < num)
            return num;
        } else {
          if (_0n3 <= num)
            return num;
        }
      }
      throw new TypeError("Expected valid scalar: 0 < scalar < max");
    }
    function adjustBytes255192(bytes) {
      bytes[0] &= 248;
      bytes[31] &= 127;
      bytes[31] |= 64;
      return bytes;
    }
    function decodeScalar25519(n) {
      return bytesToNumberLE2(adjustBytes255192(ensureBytes3(n, 32)));
    }
    function checkPrivateKey(key) {
      key = typeof key === "bigint" || typeof key === "number" ? numberTo32BytesBE2(normalizeScalar3(key, POW_2_2562)) : ensureBytes3(key);
      if (key.length !== 32)
        throw new Error(`Expected 32 bytes`);
      return key;
    }
    function getKeyFromHash(hashed) {
      const head = adjustBytes255192(hashed.slice(0, 32));
      const prefix = hashed.slice(32, 64);
      const scalar = modlLE(head);
      const point = Point3.BASE.multiply(scalar);
      const pointBytes = point.toRawBytes();
      return { head, prefix, scalar, point, pointBytes };
    }
    var _sha512Sync;
    function sha512s(...m) {
      if (typeof _sha512Sync !== "function")
        throw new Error("utils.sha512Sync must be set to use sync methods");
      return _sha512Sync(...m);
    }
    async function getExtendedPublicKey2(key) {
      return getKeyFromHash(await exports.utils.sha512(checkPrivateKey(key)));
    }
    function getExtendedPublicKeySync(key) {
      return getKeyFromHash(sha512s(checkPrivateKey(key)));
    }
    async function getPublicKey(privateKey) {
      return (await getExtendedPublicKey2(privateKey)).pointBytes;
    }
    exports.getPublicKey = getPublicKey;
    function getPublicKeySync(privateKey) {
      return getExtendedPublicKeySync(privateKey).pointBytes;
    }
    async function sign2(message, privateKey) {
      message = ensureBytes3(message);
      const { prefix, scalar, pointBytes } = await getExtendedPublicKey2(privateKey);
      const r = modlLE(await exports.utils.sha512(prefix, message));
      const R = Point3.BASE.multiply(r);
      const k = modlLE(await exports.utils.sha512(R.toRawBytes(), pointBytes, message));
      const s = mod3(r + k * scalar, CURVE3.l);
      return new Signature2(R, s).toRawBytes();
    }
    exports.sign = sign2;
    function signSync(message, privateKey) {
      message = ensureBytes3(message);
      const { prefix, scalar, pointBytes } = getExtendedPublicKeySync(privateKey);
      const r = modlLE(sha512s(prefix, message));
      const R = Point3.BASE.multiply(r);
      const k = modlLE(sha512s(R.toRawBytes(), pointBytes, message));
      const s = mod3(r + k * scalar, CURVE3.l);
      return new Signature2(R, s).toRawBytes();
    }
    function prepareVerification(sig, message, publicKey) {
      message = ensureBytes3(message);
      if (!(publicKey instanceof Point3))
        publicKey = Point3.fromHex(publicKey, false);
      const { r, s } = sig instanceof Signature2 ? sig.assertValidity() : Signature2.fromHex(sig);
      const SB = ExtendedPoint2.BASE.multiplyUnsafe(s);
      return { r, s, SB, pub: publicKey, msg: message };
    }
    function finishVerification(publicKey, r, SB, hashed) {
      const k = modlLE(hashed);
      const kA = ExtendedPoint2.fromAffine(publicKey).multiplyUnsafe(k);
      const RkA = ExtendedPoint2.fromAffine(r).add(kA);
      return RkA.subtract(SB).multiplyUnsafe(CURVE3.h).equals(ExtendedPoint2.ZERO);
    }
    async function verify3(sig, message, publicKey) {
      const { r, SB, msg, pub } = prepareVerification(sig, message, publicKey);
      const hashed = await exports.utils.sha512(r.toRawBytes(), pub.toRawBytes(), msg);
      return finishVerification(pub, r, SB, hashed);
    }
    exports.verify = verify3;
    function verifySync(sig, message, publicKey) {
      const { r, SB, msg, pub } = prepareVerification(sig, message, publicKey);
      const hashed = sha512s(r.toRawBytes(), pub.toRawBytes(), msg);
      return finishVerification(pub, r, SB, hashed);
    }
    exports.sync = {
      getExtendedPublicKey: getExtendedPublicKeySync,
      getPublicKey: getPublicKeySync,
      sign: signSync,
      verify: verifySync
    };
    async function getSharedSecret(privateKey, publicKey) {
      const { head } = await getExtendedPublicKey2(privateKey);
      const u = Point3.fromHex(publicKey).toX25519();
      return exports.curve25519.scalarMult(head, u);
    }
    exports.getSharedSecret = getSharedSecret;
    Point3.BASE._setWindowSize(8);
    function cswap(swap, x_2, x_3) {
      const dummy = mod3(swap * (x_2 - x_3));
      x_2 = mod3(x_2 - dummy);
      x_3 = mod3(x_3 + dummy);
      return [x_2, x_3];
    }
    function montgomeryLadder(pointU, scalar) {
      const { P } = CURVE3;
      const u = normalizeScalar3(pointU, P);
      const k = normalizeScalar3(scalar, P);
      const a24 = BigInt(121665);
      const x_1 = u;
      let x_2 = _1n3;
      let z_2 = _0n3;
      let x_3 = u;
      let z_3 = _1n3;
      let swap = _0n3;
      let sw;
      for (let t = BigInt(255 - 1); t >= _0n3; t--) {
        const k_t = k >> t & _1n3;
        swap ^= k_t;
        sw = cswap(swap, x_2, x_3);
        x_2 = sw[0];
        x_3 = sw[1];
        sw = cswap(swap, z_2, z_3);
        z_2 = sw[0];
        z_3 = sw[1];
        swap = k_t;
        const A = x_2 + z_2;
        const AA = mod3(A * A);
        const B = x_2 - z_2;
        const BB = mod3(B * B);
        const E = AA - BB;
        const C = x_3 + z_3;
        const D = x_3 - z_3;
        const DA = mod3(D * A);
        const CB = mod3(C * B);
        const dacb = DA + CB;
        const da_cb = DA - CB;
        x_3 = mod3(dacb * dacb);
        z_3 = mod3(x_1 * mod3(da_cb * da_cb));
        x_2 = mod3(AA * BB);
        z_2 = mod3(E * (AA + mod3(a24 * E)));
      }
      sw = cswap(swap, x_2, x_3);
      x_2 = sw[0];
      x_3 = sw[1];
      sw = cswap(swap, z_2, z_3);
      z_2 = sw[0];
      z_3 = sw[1];
      const { pow_p_5_8, b2 } = pow_2_252_32(z_2);
      const xp2 = mod3(pow23(pow_p_5_8, BigInt(3)) * b2);
      return mod3(x_2 * xp2);
    }
    function encodeUCoordinate(u) {
      return numberTo32BytesLE2(mod3(u, CURVE3.P));
    }
    function decodeUCoordinate(uEnc) {
      const u = ensureBytes3(uEnc, 32);
      u[31] &= 127;
      return bytesToNumberLE2(u);
    }
    exports.curve25519 = {
      BASE_POINT_U: "0900000000000000000000000000000000000000000000000000000000000000",
      scalarMult(privateKey, publicKey) {
        const u = decodeUCoordinate(publicKey);
        const p = decodeScalar25519(privateKey);
        const pu = montgomeryLadder(u, p);
        if (pu === _0n3)
          throw new Error("Invalid private or public key received");
        return encodeUCoordinate(pu);
      },
      scalarMultBase(privateKey) {
        return exports.curve25519.scalarMult(privateKey, exports.curve25519.BASE_POINT_U);
      }
    };
    var crypto4 = {
      node: nodeCrypto3,
      web: typeof self === "object" && "crypto" in self ? self.crypto : void 0
    };
    exports.utils = {
      bytesToHex: bytesToHex3,
      hexToBytes: hexToBytes3,
      concatBytes,
      getExtendedPublicKey: getExtendedPublicKey2,
      mod: mod3,
      invert: invert3,
      TORSION_SUBGROUP: [
        "0100000000000000000000000000000000000000000000000000000000000000",
        "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
        "0000000000000000000000000000000000000000000000000000000000000080",
        "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
        "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
        "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
        "0000000000000000000000000000000000000000000000000000000000000000",
        "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"
      ],
      hashToPrivateScalar: (hash) => {
        hash = ensureBytes3(hash);
        if (hash.length < 40 || hash.length > 1024)
          throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
        return mod3(bytesToNumberLE2(hash), CURVE3.l - _1n3) + _1n3;
      },
      randomBytes: (bytesLength = 32) => {
        if (crypto4.web) {
          return crypto4.web.getRandomValues(new Uint8Array(bytesLength));
        } else if (crypto4.node) {
          const { randomBytes } = crypto4.node;
          return new Uint8Array(randomBytes(bytesLength).buffer);
        } else {
          throw new Error("The environment doesn't have randomBytes function");
        }
      },
      randomPrivateKey: () => {
        return exports.utils.randomBytes(32);
      },
      sha512: async (...messages) => {
        const message = concatBytes(...messages);
        if (crypto4.web) {
          const buffer = await crypto4.web.subtle.digest("SHA-512", message.buffer);
          return new Uint8Array(buffer);
        } else if (crypto4.node) {
          return Uint8Array.from(crypto4.node.createHash("sha512").update(message).digest());
        } else {
          throw new Error("The environment doesn't have sha512 function");
        }
      },
      precompute(windowSize = 8, point = Point3.BASE) {
        const cached = point.equals(Point3.BASE) ? point : new Point3(point.x, point.y);
        cached._setWindowSize(windowSize);
        cached.multiply(_2n3);
        return cached;
      },
      sha512Sync: void 0
    };
    Object.defineProperties(exports.utils, {
      sha512Sync: {
        configurable: false,
        get() {
          return _sha512Sync;
        },
        set(val) {
          if (!_sha512Sync)
            _sha512Sync = val;
        }
      }
    });
  }
});

// node_modules/@decentralized-identity/ion-sdk/node_modules/@noble/secp256k1/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/node_modules/@noble/secp256k1/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.utils = exports.schnorr = exports.verify = exports.signSync = exports.sign = exports.getSharedSecret = exports.recoverPublicKey = exports.getPublicKey = exports.Signature = exports.Point = exports.CURVE = void 0;
    var nodeCrypto3 = require("crypto");
    var _0n3 = BigInt(0);
    var _1n3 = BigInt(1);
    var _2n3 = BigInt(2);
    var _3n2 = BigInt(3);
    var _8n2 = BigInt(8);
    var CURVE3 = Object.freeze({
      a: _0n3,
      b: BigInt(7),
      P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
      n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
      h: _1n3,
      Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
      Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
    });
    exports.CURVE = CURVE3;
    function weistrass2(x) {
      const { a, b } = CURVE3;
      const x2 = mod3(x * x);
      const x3 = mod3(x2 * x);
      return mod3(x3 + a * x + b);
    }
    var USE_ENDOMORPHISM2 = CURVE3.a === _0n3;
    var ShaError = class extends Error {
      constructor(message) {
        super(message);
      }
    };
    var JacobianPoint2 = class {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
      }
      static fromAffine(p) {
        if (!(p instanceof Point3)) {
          throw new TypeError("JacobianPoint#fromAffine: expected Point");
        }
        return new JacobianPoint2(p.x, p.y, _1n3);
      }
      static toAffineBatch(points) {
        const toInv = invertBatch3(points.map((p) => p.z));
        return points.map((p, i) => p.toAffine(toInv[i]));
      }
      static normalizeZ(points) {
        return JacobianPoint2.toAffineBatch(points).map(JacobianPoint2.fromAffine);
      }
      equals(other) {
        if (!(other instanceof JacobianPoint2))
          throw new TypeError("JacobianPoint expected");
        const { x: X1, y: Y1, z: Z1 } = this;
        const { x: X2, y: Y2, z: Z2 } = other;
        const Z1Z1 = mod3(Z1 * Z1);
        const Z2Z2 = mod3(Z2 * Z2);
        const U1 = mod3(X1 * Z2Z2);
        const U2 = mod3(X2 * Z1Z1);
        const S1 = mod3(mod3(Y1 * Z2) * Z2Z2);
        const S2 = mod3(mod3(Y2 * Z1) * Z1Z1);
        return U1 === U2 && S1 === S2;
      }
      negate() {
        return new JacobianPoint2(this.x, mod3(-this.y), this.z);
      }
      double() {
        const { x: X1, y: Y1, z: Z1 } = this;
        const A = mod3(X1 * X1);
        const B = mod3(Y1 * Y1);
        const C = mod3(B * B);
        const x1b = X1 + B;
        const D = mod3(_2n3 * (mod3(x1b * x1b) - A - C));
        const E = mod3(_3n2 * A);
        const F = mod3(E * E);
        const X3 = mod3(F - _2n3 * D);
        const Y3 = mod3(E * (D - X3) - _8n2 * C);
        const Z3 = mod3(_2n3 * Y1 * Z1);
        return new JacobianPoint2(X3, Y3, Z3);
      }
      add(other) {
        if (!(other instanceof JacobianPoint2))
          throw new TypeError("JacobianPoint expected");
        const { x: X1, y: Y1, z: Z1 } = this;
        const { x: X2, y: Y2, z: Z2 } = other;
        if (X2 === _0n3 || Y2 === _0n3)
          return this;
        if (X1 === _0n3 || Y1 === _0n3)
          return other;
        const Z1Z1 = mod3(Z1 * Z1);
        const Z2Z2 = mod3(Z2 * Z2);
        const U1 = mod3(X1 * Z2Z2);
        const U2 = mod3(X2 * Z1Z1);
        const S1 = mod3(mod3(Y1 * Z2) * Z2Z2);
        const S2 = mod3(mod3(Y2 * Z1) * Z1Z1);
        const H = mod3(U2 - U1);
        const r = mod3(S2 - S1);
        if (H === _0n3) {
          if (r === _0n3) {
            return this.double();
          } else {
            return JacobianPoint2.ZERO;
          }
        }
        const HH = mod3(H * H);
        const HHH = mod3(H * HH);
        const V = mod3(U1 * HH);
        const X3 = mod3(r * r - HHH - _2n3 * V);
        const Y3 = mod3(r * (V - X3) - S1 * HHH);
        const Z3 = mod3(Z1 * Z2 * H);
        return new JacobianPoint2(X3, Y3, Z3);
      }
      subtract(other) {
        return this.add(other.negate());
      }
      multiplyUnsafe(scalar) {
        const P0 = JacobianPoint2.ZERO;
        if (typeof scalar === "bigint" && scalar === _0n3)
          return P0;
        let n = normalizeScalar3(scalar);
        if (n === _1n3)
          return this;
        if (!USE_ENDOMORPHISM2) {
          let p = P0;
          let d2 = this;
          while (n > _0n3) {
            if (n & _1n3)
              p = p.add(d2);
            d2 = d2.double();
            n >>= _1n3;
          }
          return p;
        }
        let { k1neg, k1, k2neg, k2 } = splitScalarEndo2(n);
        let k1p = P0;
        let k2p = P0;
        let d = this;
        while (k1 > _0n3 || k2 > _0n3) {
          if (k1 & _1n3)
            k1p = k1p.add(d);
          if (k2 & _1n3)
            k2p = k2p.add(d);
          d = d.double();
          k1 >>= _1n3;
          k2 >>= _1n3;
        }
        if (k1neg)
          k1p = k1p.negate();
        if (k2neg)
          k2p = k2p.negate();
        k2p = new JacobianPoint2(mod3(k2p.x * CURVE3.beta), k2p.y, k2p.z);
        return k1p.add(k2p);
      }
      precomputeWindow(W) {
        const windows = USE_ENDOMORPHISM2 ? 128 / W + 1 : 256 / W + 1;
        const points = [];
        let p = this;
        let base = p;
        for (let window = 0; window < windows; window++) {
          base = p;
          points.push(base);
          for (let i = 1; i < 2 ** (W - 1); i++) {
            base = base.add(p);
            points.push(base);
          }
          p = base.double();
        }
        return points;
      }
      wNAF(n, affinePoint) {
        if (!affinePoint && this.equals(JacobianPoint2.BASE))
          affinePoint = Point3.BASE;
        const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
        if (256 % W) {
          throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
        }
        let precomputes = affinePoint && pointPrecomputes3.get(affinePoint);
        if (!precomputes) {
          precomputes = this.precomputeWindow(W);
          if (affinePoint && W !== 1) {
            precomputes = JacobianPoint2.normalizeZ(precomputes);
            pointPrecomputes3.set(affinePoint, precomputes);
          }
        }
        let p = JacobianPoint2.ZERO;
        let f = JacobianPoint2.ZERO;
        const windows = 1 + (USE_ENDOMORPHISM2 ? 128 / W : 256 / W);
        const windowSize = 2 ** (W - 1);
        const mask = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for (let window = 0; window < windows; window++) {
          const offset = window * windowSize;
          let wbits = Number(n & mask);
          n >>= shiftBy;
          if (wbits > windowSize) {
            wbits -= maxNumber;
            n += _1n3;
          }
          if (wbits === 0) {
            let pr = precomputes[offset];
            if (window % 2)
              pr = pr.negate();
            f = f.add(pr);
          } else {
            let cached = precomputes[offset + Math.abs(wbits) - 1];
            if (wbits < 0)
              cached = cached.negate();
            p = p.add(cached);
          }
        }
        return { p, f };
      }
      multiply(scalar, affinePoint) {
        let n = normalizeScalar3(scalar);
        let point;
        let fake;
        if (USE_ENDOMORPHISM2) {
          const { k1neg, k1, k2neg, k2 } = splitScalarEndo2(n);
          let { p: k1p, f: f1p } = this.wNAF(k1, affinePoint);
          let { p: k2p, f: f2p } = this.wNAF(k2, affinePoint);
          if (k1neg)
            k1p = k1p.negate();
          if (k2neg)
            k2p = k2p.negate();
          k2p = new JacobianPoint2(mod3(k2p.x * CURVE3.beta), k2p.y, k2p.z);
          point = k1p.add(k2p);
          fake = f1p.add(f2p);
        } else {
          const { p, f } = this.wNAF(n, affinePoint);
          point = p;
          fake = f;
        }
        return JacobianPoint2.normalizeZ([point, fake])[0];
      }
      toAffine(invZ = invert3(this.z)) {
        const { x, y, z } = this;
        const iz1 = invZ;
        const iz2 = mod3(iz1 * iz1);
        const iz3 = mod3(iz2 * iz1);
        const ax = mod3(x * iz2);
        const ay = mod3(y * iz3);
        const zz = mod3(z * iz1);
        if (zz !== _1n3)
          throw new Error("invZ was invalid");
        return new Point3(ax, ay);
      }
    };
    JacobianPoint2.BASE = new JacobianPoint2(CURVE3.Gx, CURVE3.Gy, _1n3);
    JacobianPoint2.ZERO = new JacobianPoint2(_0n3, _1n3, _0n3);
    var pointPrecomputes3 = /* @__PURE__ */ new WeakMap();
    var Point3 = class {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        pointPrecomputes3.delete(this);
      }
      hasEvenY() {
        return this.y % _2n3 === _0n3;
      }
      static fromCompressedHex(bytes) {
        const isShort = bytes.length === 32;
        const x = bytesToNumber2(isShort ? bytes : bytes.subarray(1));
        if (!isValidFieldElement2(x))
          throw new Error("Point is not on curve");
        const y2 = weistrass2(x);
        let y = sqrtMod2(y2);
        const isYOdd = (y & _1n3) === _1n3;
        if (isShort) {
          if (isYOdd)
            y = mod3(-y);
        } else {
          const isFirstByteOdd = (bytes[0] & 1) === 1;
          if (isFirstByteOdd !== isYOdd)
            y = mod3(-y);
        }
        const point = new Point3(x, y);
        point.assertValidity();
        return point;
      }
      static fromUncompressedHex(bytes) {
        const x = bytesToNumber2(bytes.subarray(1, 33));
        const y = bytesToNumber2(bytes.subarray(33, 65));
        const point = new Point3(x, y);
        point.assertValidity();
        return point;
      }
      static fromHex(hex) {
        const bytes = ensureBytes3(hex);
        const len = bytes.length;
        const header = bytes[0];
        if (len === 32 || len === 33 && (header === 2 || header === 3)) {
          return this.fromCompressedHex(bytes);
        }
        if (len === 65 && header === 4)
          return this.fromUncompressedHex(bytes);
        throw new Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${len}`);
      }
      static fromPrivateKey(privateKey) {
        return Point3.BASE.multiply(normalizePrivateKey2(privateKey));
      }
      static fromSignature(msgHash, signature, recovery) {
        msgHash = ensureBytes3(msgHash);
        const h = truncateHash2(msgHash);
        const { r, s } = normalizeSignature2(signature);
        if (recovery !== 0 && recovery !== 1) {
          throw new Error("Cannot recover signature: invalid recovery bit");
        }
        const prefix = recovery & 1 ? "03" : "02";
        const R = Point3.fromHex(prefix + numTo32bStr2(r));
        const { n } = CURVE3;
        const rinv = invert3(r, n);
        const u1 = mod3(-h * rinv, n);
        const u2 = mod3(s * rinv, n);
        const Q = Point3.BASE.multiplyAndAddUnsafe(R, u1, u2);
        if (!Q)
          throw new Error("Cannot recover signature: point at infinify");
        Q.assertValidity();
        return Q;
      }
      toRawBytes(isCompressed = false) {
        return hexToBytes3(this.toHex(isCompressed));
      }
      toHex(isCompressed = false) {
        const x = numTo32bStr2(this.x);
        if (isCompressed) {
          const prefix = this.hasEvenY() ? "02" : "03";
          return `${prefix}${x}`;
        } else {
          return `04${x}${numTo32bStr2(this.y)}`;
        }
      }
      toHexX() {
        return this.toHex(true).slice(2);
      }
      toRawX() {
        return this.toRawBytes(true).slice(1);
      }
      assertValidity() {
        const msg = "Point is not on elliptic curve";
        const { x, y } = this;
        if (!isValidFieldElement2(x) || !isValidFieldElement2(y))
          throw new Error(msg);
        const left = mod3(y * y);
        const right = weistrass2(x);
        if (mod3(left - right) !== _0n3)
          throw new Error(msg);
      }
      equals(other) {
        return this.x === other.x && this.y === other.y;
      }
      negate() {
        return new Point3(this.x, mod3(-this.y));
      }
      double() {
        return JacobianPoint2.fromAffine(this).double().toAffine();
      }
      add(other) {
        return JacobianPoint2.fromAffine(this).add(JacobianPoint2.fromAffine(other)).toAffine();
      }
      subtract(other) {
        return this.add(other.negate());
      }
      multiply(scalar) {
        return JacobianPoint2.fromAffine(this).multiply(scalar, this).toAffine();
      }
      multiplyAndAddUnsafe(Q, a, b) {
        const P = JacobianPoint2.fromAffine(this);
        const aP = a === _0n3 || a === _1n3 || this !== Point3.BASE ? P.multiplyUnsafe(a) : P.multiply(a);
        const bQ = JacobianPoint2.fromAffine(Q).multiplyUnsafe(b);
        const sum = aP.add(bQ);
        return sum.equals(JacobianPoint2.ZERO) ? void 0 : sum.toAffine();
      }
    };
    exports.Point = Point3;
    Point3.BASE = new Point3(CURVE3.Gx, CURVE3.Gy);
    Point3.ZERO = new Point3(_0n3, _0n3);
    function sliceDER2(s) {
      return Number.parseInt(s[0], 16) >= 8 ? "00" + s : s;
    }
    function parseDERInt2(data) {
      if (data.length < 2 || data[0] !== 2) {
        throw new Error(`Invalid signature integer tag: ${bytesToHex3(data)}`);
      }
      const len = data[1];
      const res = data.subarray(2, len + 2);
      if (!len || res.length !== len) {
        throw new Error(`Invalid signature integer: wrong length`);
      }
      if (res[0] === 0 && res[1] <= 127) {
        throw new Error("Invalid signature integer: trailing length");
      }
      return { data: bytesToNumber2(res), left: data.subarray(len + 2) };
    }
    function parseDERSignature2(data) {
      if (data.length < 2 || data[0] != 48) {
        throw new Error(`Invalid signature tag: ${bytesToHex3(data)}`);
      }
      if (data[1] !== data.length - 2) {
        throw new Error("Invalid signature: incorrect length");
      }
      const { data: r, left: sBytes } = parseDERInt2(data.subarray(2));
      const { data: s, left: rBytesLeft } = parseDERInt2(sBytes);
      if (rBytesLeft.length) {
        throw new Error(`Invalid signature: left bytes after parsing: ${bytesToHex3(rBytesLeft)}`);
      }
      return { r, s };
    }
    var Signature2 = class {
      constructor(r, s) {
        this.r = r;
        this.s = s;
        this.assertValidity();
      }
      static fromCompact(hex) {
        const arr = hex instanceof Uint8Array;
        const name = "Signature.fromCompact";
        if (typeof hex !== "string" && !arr)
          throw new TypeError(`${name}: Expected string or Uint8Array`);
        const str = arr ? bytesToHex3(hex) : hex;
        if (str.length !== 128)
          throw new Error(`${name}: Expected 64-byte hex`);
        return new Signature2(hexToNumber2(str.slice(0, 64)), hexToNumber2(str.slice(64, 128)));
      }
      static fromDER(hex) {
        const arr = hex instanceof Uint8Array;
        if (typeof hex !== "string" && !arr)
          throw new TypeError(`Signature.fromDER: Expected string or Uint8Array`);
        const { r, s } = parseDERSignature2(arr ? hex : hexToBytes3(hex));
        return new Signature2(r, s);
      }
      static fromHex(hex) {
        return this.fromDER(hex);
      }
      assertValidity() {
        const { r, s } = this;
        if (!isWithinCurveOrder2(r))
          throw new Error("Invalid Signature: r must be 0 < r < n");
        if (!isWithinCurveOrder2(s))
          throw new Error("Invalid Signature: s must be 0 < s < n");
      }
      hasHighS() {
        const HALF = CURVE3.n >> _1n3;
        return this.s > HALF;
      }
      normalizeS() {
        return this.hasHighS() ? new Signature2(this.r, CURVE3.n - this.s) : this;
      }
      toDERRawBytes(isCompressed = false) {
        return hexToBytes3(this.toDERHex(isCompressed));
      }
      toDERHex(isCompressed = false) {
        const sHex = sliceDER2(numberToHexUnpadded2(this.s));
        if (isCompressed)
          return sHex;
        const rHex = sliceDER2(numberToHexUnpadded2(this.r));
        const rLen = numberToHexUnpadded2(rHex.length / 2);
        const sLen = numberToHexUnpadded2(sHex.length / 2);
        const length2 = numberToHexUnpadded2(rHex.length / 2 + sHex.length / 2 + 4);
        return `30${length2}02${rLen}${rHex}02${sLen}${sHex}`;
      }
      toRawBytes() {
        return this.toDERRawBytes();
      }
      toHex() {
        return this.toDERHex();
      }
      toCompactRawBytes() {
        return hexToBytes3(this.toCompactHex());
      }
      toCompactHex() {
        return numTo32bStr2(this.r) + numTo32bStr2(this.s);
      }
    };
    exports.Signature = Signature2;
    function concatBytes(...arrays) {
      if (!arrays.every((b) => b instanceof Uint8Array))
        throw new Error("Uint8Array list expected");
      if (arrays.length === 1)
        return arrays[0];
      const length2 = arrays.reduce((a, arr) => a + arr.length, 0);
      const result = new Uint8Array(length2);
      for (let i = 0, pad = 0; i < arrays.length; i++) {
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
      }
      return result;
    }
    var hexes3 = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
    function bytesToHex3(uint8a) {
      if (!(uint8a instanceof Uint8Array))
        throw new Error("Expected Uint8Array");
      let hex = "";
      for (let i = 0; i < uint8a.length; i++) {
        hex += hexes3[uint8a[i]];
      }
      return hex;
    }
    var POW_2_2562 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
    function numTo32bStr2(num) {
      if (typeof num !== "bigint")
        throw new Error("Expected bigint");
      if (!(_0n3 <= num && num < POW_2_2562))
        throw new Error("Expected number < 2^256");
      return num.toString(16).padStart(64, "0");
    }
    function numTo32b(num) {
      const b = hexToBytes3(numTo32bStr2(num));
      if (b.length !== 32)
        throw new Error("Error: expected 32 bytes");
      return b;
    }
    function numberToHexUnpadded2(num) {
      const hex = num.toString(16);
      return hex.length & 1 ? `0${hex}` : hex;
    }
    function hexToNumber2(hex) {
      if (typeof hex !== "string") {
        throw new TypeError("hexToNumber: expected string, got " + typeof hex);
      }
      return BigInt(`0x${hex}`);
    }
    function hexToBytes3(hex) {
      if (typeof hex !== "string") {
        throw new TypeError("hexToBytes: expected string, got " + typeof hex);
      }
      if (hex.length % 2)
        throw new Error("hexToBytes: received invalid unpadded hex" + hex.length);
      const array = new Uint8Array(hex.length / 2);
      for (let i = 0; i < array.length; i++) {
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0)
          throw new Error("Invalid byte sequence");
        array[i] = byte;
      }
      return array;
    }
    function bytesToNumber2(bytes) {
      return hexToNumber2(bytesToHex3(bytes));
    }
    function ensureBytes3(hex) {
      return hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes3(hex);
    }
    function normalizeScalar3(num) {
      if (typeof num === "number" && Number.isSafeInteger(num) && num > 0)
        return BigInt(num);
      if (typeof num === "bigint" && isWithinCurveOrder2(num))
        return num;
      throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
    }
    function mod3(a, b = CURVE3.P) {
      const result = a % b;
      return result >= _0n3 ? result : b + result;
    }
    function pow23(x, power) {
      const { P } = CURVE3;
      let res = x;
      while (power-- > _0n3) {
        res *= res;
        res %= P;
      }
      return res;
    }
    function sqrtMod2(x) {
      const { P } = CURVE3;
      const _6n = BigInt(6);
      const _11n = BigInt(11);
      const _22n = BigInt(22);
      const _23n = BigInt(23);
      const _44n = BigInt(44);
      const _88n = BigInt(88);
      const b2 = x * x * x % P;
      const b3 = b2 * b2 * x % P;
      const b6 = pow23(b3, _3n2) * b3 % P;
      const b9 = pow23(b6, _3n2) * b3 % P;
      const b11 = pow23(b9, _2n3) * b2 % P;
      const b22 = pow23(b11, _11n) * b11 % P;
      const b44 = pow23(b22, _22n) * b22 % P;
      const b88 = pow23(b44, _44n) * b44 % P;
      const b176 = pow23(b88, _88n) * b88 % P;
      const b220 = pow23(b176, _44n) * b44 % P;
      const b223 = pow23(b220, _3n2) * b3 % P;
      const t1 = pow23(b223, _23n) * b22 % P;
      const t2 = pow23(t1, _6n) * b2 % P;
      return pow23(t2, _2n3);
    }
    function invert3(number, modulo = CURVE3.P) {
      if (number === _0n3 || modulo <= _0n3) {
        throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
      }
      let a = mod3(number, modulo);
      let b = modulo;
      let x = _0n3, y = _1n3, u = _1n3, v = _0n3;
      while (a !== _0n3) {
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        b = a, a = r, x = u, y = v, u = m, v = n;
      }
      const gcd = b;
      if (gcd !== _1n3)
        throw new Error("invert: does not exist");
      return mod3(x, modulo);
    }
    function invertBatch3(nums, p = CURVE3.P) {
      const scratch = new Array(nums.length);
      const lastMultiplied = nums.reduce((acc, num, i) => {
        if (num === _0n3)
          return acc;
        scratch[i] = acc;
        return mod3(acc * num, p);
      }, _1n3);
      const inverted = invert3(lastMultiplied, p);
      nums.reduceRight((acc, num, i) => {
        if (num === _0n3)
          return acc;
        scratch[i] = mod3(acc * scratch[i], p);
        return mod3(acc * num, p);
      }, inverted);
      return scratch;
    }
    var divNearest2 = (a, b) => (a + b / _2n3) / b;
    var ENDO = {
      a1: BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
      b1: -_1n3 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
      a2: BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
      b2: BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
      POW_2_128: BigInt("0x100000000000000000000000000000000")
    };
    function splitScalarEndo2(k) {
      const { n } = CURVE3;
      const { a1, b1, a2, b2, POW_2_128: POW_2_1282 } = ENDO;
      const c1 = divNearest2(b2 * k, n);
      const c2 = divNearest2(-b1 * k, n);
      let k1 = mod3(k - c1 * a1 - c2 * a2, n);
      let k2 = mod3(-c1 * b1 - c2 * b2, n);
      const k1neg = k1 > POW_2_1282;
      const k2neg = k2 > POW_2_1282;
      if (k1neg)
        k1 = n - k1;
      if (k2neg)
        k2 = n - k2;
      if (k1 > POW_2_1282 || k2 > POW_2_1282) {
        throw new Error("splitScalarEndo: Endomorphism failed, k=" + k);
      }
      return { k1neg, k1, k2neg, k2 };
    }
    function truncateHash2(hash) {
      const { n } = CURVE3;
      const byteLength = hash.length;
      const delta = byteLength * 8 - 256;
      let h = bytesToNumber2(hash);
      if (delta > 0)
        h = h >> BigInt(delta);
      if (h >= n)
        h -= n;
      return h;
    }
    var _sha256Sync;
    var _hmacSha256Sync;
    var HmacDrbg = class {
      constructor() {
        this.v = new Uint8Array(32).fill(1);
        this.k = new Uint8Array(32).fill(0);
        this.counter = 0;
      }
      hmac(...values) {
        return exports.utils.hmacSha256(this.k, ...values);
      }
      hmacSync(...values) {
        return _hmacSha256Sync(this.k, ...values);
      }
      checkSync() {
        if (typeof _hmacSha256Sync !== "function")
          throw new ShaError("hmacSha256Sync needs to be set");
      }
      incr() {
        if (this.counter >= 1e3)
          throw new Error("Tried 1,000 k values for sign(), all were invalid");
        this.counter += 1;
      }
      async reseed(seed = new Uint8Array()) {
        this.k = await this.hmac(this.v, Uint8Array.from([0]), seed);
        this.v = await this.hmac(this.v);
        if (seed.length === 0)
          return;
        this.k = await this.hmac(this.v, Uint8Array.from([1]), seed);
        this.v = await this.hmac(this.v);
      }
      reseedSync(seed = new Uint8Array()) {
        this.checkSync();
        this.k = this.hmacSync(this.v, Uint8Array.from([0]), seed);
        this.v = this.hmacSync(this.v);
        if (seed.length === 0)
          return;
        this.k = this.hmacSync(this.v, Uint8Array.from([1]), seed);
        this.v = this.hmacSync(this.v);
      }
      async generate() {
        this.incr();
        this.v = await this.hmac(this.v);
        return this.v;
      }
      generateSync() {
        this.checkSync();
        this.incr();
        this.v = this.hmacSync(this.v);
        return this.v;
      }
    };
    function isWithinCurveOrder2(num) {
      return _0n3 < num && num < CURVE3.n;
    }
    function isValidFieldElement2(num) {
      return _0n3 < num && num < CURVE3.P;
    }
    function kmdToSig(kBytes, m, d) {
      const k = bytesToNumber2(kBytes);
      if (!isWithinCurveOrder2(k))
        return;
      const { n } = CURVE3;
      const q = Point3.BASE.multiply(k);
      const r = mod3(q.x, n);
      if (r === _0n3)
        return;
      const s = mod3(invert3(k, n) * mod3(m + d * r, n), n);
      if (s === _0n3)
        return;
      const sig = new Signature2(r, s);
      const recovery = (q.x === sig.r ? 0 : 2) | Number(q.y & _1n3);
      return { sig, recovery };
    }
    function normalizePrivateKey2(key) {
      let num;
      if (typeof key === "bigint") {
        num = key;
      } else if (typeof key === "number" && Number.isSafeInteger(key) && key > 0) {
        num = BigInt(key);
      } else if (typeof key === "string") {
        if (key.length !== 64)
          throw new Error("Expected 32 bytes of private key");
        num = hexToNumber2(key);
      } else if (key instanceof Uint8Array) {
        if (key.length !== 32)
          throw new Error("Expected 32 bytes of private key");
        num = bytesToNumber2(key);
      } else {
        throw new TypeError("Expected valid private key");
      }
      if (!isWithinCurveOrder2(num))
        throw new Error("Expected private key: 0 < key < n");
      return num;
    }
    function normalizePublicKey2(publicKey) {
      if (publicKey instanceof Point3) {
        publicKey.assertValidity();
        return publicKey;
      } else {
        return Point3.fromHex(publicKey);
      }
    }
    function normalizeSignature2(signature) {
      if (signature instanceof Signature2) {
        signature.assertValidity();
        return signature;
      }
      try {
        return Signature2.fromDER(signature);
      } catch (error) {
        return Signature2.fromCompact(signature);
      }
    }
    function getPublicKey(privateKey, isCompressed = false) {
      return Point3.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    exports.getPublicKey = getPublicKey;
    function recoverPublicKey(msgHash, signature, recovery, isCompressed = false) {
      return Point3.fromSignature(msgHash, signature, recovery).toRawBytes(isCompressed);
    }
    exports.recoverPublicKey = recoverPublicKey;
    function isProbPub(item) {
      const arr = item instanceof Uint8Array;
      const str = typeof item === "string";
      const len = (arr || str) && item.length;
      if (arr)
        return len === 33 || len === 65;
      if (str)
        return len === 66 || len === 130;
      if (item instanceof Point3)
        return true;
      return false;
    }
    function getSharedSecret(privateA, publicB, isCompressed = false) {
      if (isProbPub(privateA))
        throw new TypeError("getSharedSecret: first arg must be private key");
      if (!isProbPub(publicB))
        throw new TypeError("getSharedSecret: second arg must be public key");
      const b = normalizePublicKey2(publicB);
      b.assertValidity();
      return b.multiply(normalizePrivateKey2(privateA)).toRawBytes(isCompressed);
    }
    exports.getSharedSecret = getSharedSecret;
    function bits2int(bytes) {
      const slice = bytes.length > 32 ? bytes.slice(0, 32) : bytes;
      return bytesToNumber2(slice);
    }
    function bits2octets(bytes) {
      const z1 = bits2int(bytes);
      const z2 = mod3(z1, CURVE3.n);
      return int2octets(z2 < _0n3 ? z1 : z2);
    }
    function int2octets(num) {
      return numTo32b(num);
    }
    function initSigArgs(msgHash, privateKey, extraEntropy) {
      if (msgHash == null)
        throw new Error(`sign: expected valid message hash, not "${msgHash}"`);
      const h1 = ensureBytes3(msgHash);
      const d = normalizePrivateKey2(privateKey);
      const seedArgs = [int2octets(d), bits2octets(h1)];
      if (extraEntropy != null) {
        if (extraEntropy === true)
          extraEntropy = exports.utils.randomBytes(32);
        const e = ensureBytes3(extraEntropy);
        if (e.length !== 32)
          throw new Error("sign: Expected 32 bytes of extra data");
        seedArgs.push(e);
      }
      const seed = concatBytes(...seedArgs);
      const m = bits2int(h1);
      return { seed, m, d };
    }
    function finalizeSig(recSig, opts) {
      let { sig, recovery } = recSig;
      const { canonical, der, recovered } = Object.assign({ canonical: true, der: true }, opts);
      if (canonical && sig.hasHighS()) {
        sig = sig.normalizeS();
        recovery ^= 1;
      }
      const hashed = der ? sig.toDERRawBytes() : sig.toCompactRawBytes();
      return recovered ? [hashed, recovery] : hashed;
    }
    async function sign2(msgHash, privKey, opts = {}) {
      const { seed, m, d } = initSigArgs(msgHash, privKey, opts.extraEntropy);
      let sig;
      const drbg = new HmacDrbg();
      await drbg.reseed(seed);
      while (!(sig = kmdToSig(await drbg.generate(), m, d)))
        await drbg.reseed();
      return finalizeSig(sig, opts);
    }
    exports.sign = sign2;
    function signSync(msgHash, privKey, opts = {}) {
      const { seed, m, d } = initSigArgs(msgHash, privKey, opts.extraEntropy);
      let sig;
      const drbg = new HmacDrbg();
      drbg.reseedSync(seed);
      while (!(sig = kmdToSig(drbg.generateSync(), m, d)))
        drbg.reseedSync();
      return finalizeSig(sig, opts);
    }
    exports.signSync = signSync;
    var vopts2 = { strict: true };
    function verify3(signature, msgHash, publicKey, opts = vopts2) {
      let sig;
      try {
        sig = normalizeSignature2(signature);
        msgHash = ensureBytes3(msgHash);
      } catch (error) {
        return false;
      }
      const { r, s } = sig;
      if (opts.strict && sig.hasHighS())
        return false;
      const h = truncateHash2(msgHash);
      let P;
      try {
        P = normalizePublicKey2(publicKey);
      } catch (error) {
        return false;
      }
      const { n } = CURVE3;
      const sinv = invert3(s, n);
      const u1 = mod3(h * sinv, n);
      const u2 = mod3(r * sinv, n);
      const R = Point3.BASE.multiplyAndAddUnsafe(P, u1, u2);
      if (!R)
        return false;
      const v = mod3(R.x, n);
      return v === r;
    }
    exports.verify = verify3;
    function schnorrChallengeFinalize(ch) {
      return mod3(bytesToNumber2(ch), CURVE3.n);
    }
    var SchnorrSignature = class {
      constructor(r, s) {
        this.r = r;
        this.s = s;
        this.assertValidity();
      }
      static fromHex(hex) {
        const bytes = ensureBytes3(hex);
        if (bytes.length !== 64)
          throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${bytes.length}`);
        const r = bytesToNumber2(bytes.subarray(0, 32));
        const s = bytesToNumber2(bytes.subarray(32, 64));
        return new SchnorrSignature(r, s);
      }
      assertValidity() {
        const { r, s } = this;
        if (!isValidFieldElement2(r) || !isWithinCurveOrder2(s))
          throw new Error("Invalid signature");
      }
      toHex() {
        return numTo32bStr2(this.r) + numTo32bStr2(this.s);
      }
      toRawBytes() {
        return hexToBytes3(this.toHex());
      }
    };
    function schnorrGetPublicKey(privateKey) {
      return Point3.fromPrivateKey(privateKey).toRawX();
    }
    var InternalSchnorrSignature = class {
      constructor(message, privateKey, auxRand = exports.utils.randomBytes()) {
        if (message == null)
          throw new TypeError(`sign: Expected valid message, not "${message}"`);
        this.m = ensureBytes3(message);
        const { x, scalar } = this.getScalar(normalizePrivateKey2(privateKey));
        this.px = x;
        this.d = scalar;
        this.rand = ensureBytes3(auxRand);
        if (this.rand.length !== 32)
          throw new TypeError("sign: Expected 32 bytes of aux randomness");
      }
      getScalar(priv) {
        const point = Point3.fromPrivateKey(priv);
        const scalar = point.hasEvenY() ? priv : CURVE3.n - priv;
        return { point, scalar, x: point.toRawX() };
      }
      initNonce(d, t0h) {
        return numTo32b(d ^ bytesToNumber2(t0h));
      }
      finalizeNonce(k0h) {
        const k0 = mod3(bytesToNumber2(k0h), CURVE3.n);
        if (k0 === _0n3)
          throw new Error("sign: Creation of signature failed. k is zero");
        const { point: R, x: rx, scalar: k } = this.getScalar(k0);
        return { R, rx, k };
      }
      finalizeSig(R, k, e, d) {
        return new SchnorrSignature(R.x, mod3(k + e * d, CURVE3.n)).toRawBytes();
      }
      error() {
        throw new Error("sign: Invalid signature produced");
      }
      async calc() {
        const { m, d, px, rand } = this;
        const tag = exports.utils.taggedHash;
        const t = this.initNonce(d, await tag(TAGS.aux, rand));
        const { R, rx, k } = this.finalizeNonce(await tag(TAGS.nonce, t, px, m));
        const e = schnorrChallengeFinalize(await tag(TAGS.challenge, rx, px, m));
        const sig = this.finalizeSig(R, k, e, d);
        if (!await schnorrVerify(sig, m, px))
          this.error();
        return sig;
      }
      calcSync() {
        const { m, d, px, rand } = this;
        const tag = exports.utils.taggedHashSync;
        const t = this.initNonce(d, tag(TAGS.aux, rand));
        const { R, rx, k } = this.finalizeNonce(tag(TAGS.nonce, t, px, m));
        const e = schnorrChallengeFinalize(tag(TAGS.challenge, rx, px, m));
        const sig = this.finalizeSig(R, k, e, d);
        if (!schnorrVerifySync(sig, m, px))
          this.error();
        return sig;
      }
    };
    async function schnorrSign(msg, privKey, auxRand) {
      return new InternalSchnorrSignature(msg, privKey, auxRand).calc();
    }
    function schnorrSignSync(msg, privKey, auxRand) {
      return new InternalSchnorrSignature(msg, privKey, auxRand).calcSync();
    }
    function initSchnorrVerify(signature, message, publicKey) {
      const raw = signature instanceof SchnorrSignature;
      const sig = raw ? signature : SchnorrSignature.fromHex(signature);
      if (raw)
        sig.assertValidity();
      return {
        ...sig,
        m: ensureBytes3(message),
        P: normalizePublicKey2(publicKey)
      };
    }
    function finalizeSchnorrVerify(r, P, s, e) {
      const R = Point3.BASE.multiplyAndAddUnsafe(P, normalizePrivateKey2(s), mod3(-e, CURVE3.n));
      if (!R || !R.hasEvenY() || R.x !== r)
        return false;
      return true;
    }
    async function schnorrVerify(signature, message, publicKey) {
      try {
        const { r, s, m, P } = initSchnorrVerify(signature, message, publicKey);
        const e = schnorrChallengeFinalize(await exports.utils.taggedHash(TAGS.challenge, numTo32b(r), P.toRawX(), m));
        return finalizeSchnorrVerify(r, P, s, e);
      } catch (error) {
        return false;
      }
    }
    function schnorrVerifySync(signature, message, publicKey) {
      try {
        const { r, s, m, P } = initSchnorrVerify(signature, message, publicKey);
        const e = schnorrChallengeFinalize(exports.utils.taggedHashSync(TAGS.challenge, numTo32b(r), P.toRawX(), m));
        return finalizeSchnorrVerify(r, P, s, e);
      } catch (error) {
        if (error instanceof ShaError)
          throw error;
        return false;
      }
    }
    exports.schnorr = {
      Signature: SchnorrSignature,
      getPublicKey: schnorrGetPublicKey,
      sign: schnorrSign,
      verify: schnorrVerify,
      signSync: schnorrSignSync,
      verifySync: schnorrVerifySync
    };
    Point3.BASE._setWindowSize(8);
    var crypto4 = {
      node: nodeCrypto3,
      web: typeof self === "object" && "crypto" in self ? self.crypto : void 0
    };
    var TAGS = {
      challenge: "BIP0340/challenge",
      aux: "BIP0340/aux",
      nonce: "BIP0340/nonce"
    };
    var TAGGED_HASH_PREFIXES = {};
    exports.utils = {
      bytesToHex: bytesToHex3,
      hexToBytes: hexToBytes3,
      concatBytes,
      mod: mod3,
      invert: invert3,
      isValidPrivateKey(privateKey) {
        try {
          normalizePrivateKey2(privateKey);
          return true;
        } catch (error) {
          return false;
        }
      },
      _bigintTo32Bytes: numTo32b,
      _normalizePrivateKey: normalizePrivateKey2,
      hashToPrivateKey: (hash) => {
        hash = ensureBytes3(hash);
        if (hash.length < 40 || hash.length > 1024)
          throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
        const num = mod3(bytesToNumber2(hash), CURVE3.n - _1n3) + _1n3;
        return numTo32b(num);
      },
      randomBytes: (bytesLength = 32) => {
        if (crypto4.web) {
          return crypto4.web.getRandomValues(new Uint8Array(bytesLength));
        } else if (crypto4.node) {
          const { randomBytes } = crypto4.node;
          return Uint8Array.from(randomBytes(bytesLength));
        } else {
          throw new Error("The environment doesn't have randomBytes function");
        }
      },
      randomPrivateKey: () => {
        return exports.utils.hashToPrivateKey(exports.utils.randomBytes(40));
      },
      sha256: async (...messages) => {
        if (crypto4.web) {
          const buffer = await crypto4.web.subtle.digest("SHA-256", concatBytes(...messages));
          return new Uint8Array(buffer);
        } else if (crypto4.node) {
          const { createHash } = crypto4.node;
          const hash = createHash("sha256");
          messages.forEach((m) => hash.update(m));
          return Uint8Array.from(hash.digest());
        } else {
          throw new Error("The environment doesn't have sha256 function");
        }
      },
      hmacSha256: async (key, ...messages) => {
        if (crypto4.web) {
          const ckey = await crypto4.web.subtle.importKey("raw", key, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
          const message = concatBytes(...messages);
          const buffer = await crypto4.web.subtle.sign("HMAC", ckey, message);
          return new Uint8Array(buffer);
        } else if (crypto4.node) {
          const { createHmac } = crypto4.node;
          const hash = createHmac("sha256", key);
          messages.forEach((m) => hash.update(m));
          return Uint8Array.from(hash.digest());
        } else {
          throw new Error("The environment doesn't have hmac-sha256 function");
        }
      },
      sha256Sync: void 0,
      hmacSha256Sync: void 0,
      taggedHash: async (tag, ...messages) => {
        let tagP = TAGGED_HASH_PREFIXES[tag];
        if (tagP === void 0) {
          const tagH = await exports.utils.sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
          tagP = concatBytes(tagH, tagH);
          TAGGED_HASH_PREFIXES[tag] = tagP;
        }
        return exports.utils.sha256(tagP, ...messages);
      },
      taggedHashSync: (tag, ...messages) => {
        if (typeof _sha256Sync !== "function")
          throw new ShaError("sha256Sync is undefined, you need to set it");
        let tagP = TAGGED_HASH_PREFIXES[tag];
        if (tagP === void 0) {
          const tagH = _sha256Sync(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
          tagP = concatBytes(tagH, tagH);
          TAGGED_HASH_PREFIXES[tag] = tagP;
        }
        return _sha256Sync(tagP, ...messages);
      },
      precompute(windowSize = 8, point = Point3.BASE) {
        const cached = point === Point3.BASE ? point : new Point3(point.x, point.y);
        cached._setWindowSize(windowSize);
        cached.multiply(_3n2);
        return cached;
      }
    };
    Object.defineProperties(exports.utils, {
      sha256Sync: {
        configurable: false,
        get() {
          return _sha256Sync;
        },
        set(val) {
          if (!_sha256Sync)
            _sha256Sync = val;
        }
      },
      hmacSha256Sync: {
        configurable: false,
        get() {
          return _hmacSha256Sync;
        },
        set(val) {
          if (!_hmacSha256Sync)
            _hmacSha256Sync = val;
        }
      }
    });
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/IonKey.js
var require_IonKey = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/IonKey.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Ed25519 = require_lib();
    var Secp256k1 = require_lib2();
    var InputValidator_1 = require_InputValidator();
    var base64_1 = require_base64();
    var IonKey2 = class {
      static generateEs256kDidDocumentKeyPair(input) {
        return __awaiter(this, void 0, void 0, function* () {
          const id = input.id;
          const purposes = input.purposes;
          InputValidator_1.default.validateId(id);
          InputValidator_1.default.validatePublicKeyPurposes(purposes);
          const [publicKey, privateKey] = yield IonKey2.generateEs256kKeyPair();
          const publicKeyModel = {
            id,
            type: "EcdsaSecp256k1VerificationKey2019",
            publicKeyJwk: publicKey
          };
          if (purposes !== void 0 && purposes.length > 0) {
            publicKeyModel.purposes = purposes;
          }
          return [publicKeyModel, privateKey];
        });
      }
      static generateEs256kOperationKeyPair() {
        return __awaiter(this, void 0, void 0, function* () {
          const keyPair = yield IonKey2.generateEs256kKeyPair();
          return keyPair;
        });
      }
      static generateEs256kKeyPair() {
        return __awaiter(this, void 0, void 0, function* () {
          const privateKeyBytes = Secp256k1.utils.randomPrivateKey();
          const publicKeyBytes = yield Secp256k1.getPublicKey(privateKeyBytes);
          const d = base64_1.base64url.baseEncode(privateKeyBytes);
          const x = base64_1.base64url.baseEncode(publicKeyBytes.subarray(1, 33));
          const y = base64_1.base64url.baseEncode(publicKeyBytes.subarray(33, 65));
          const publicJwk = {
            kty: "EC",
            crv: "secp256k1",
            x,
            y
          };
          const privateJwk = Object.assign(Object.assign({}, publicJwk), { d });
          return [publicJwk, privateJwk];
        });
      }
      static generateEd25519DidDocumentKeyPair(input) {
        return __awaiter(this, void 0, void 0, function* () {
          const id = input.id;
          const purposes = input.purposes;
          InputValidator_1.default.validateId(id);
          InputValidator_1.default.validatePublicKeyPurposes(purposes);
          const [publicKey, privateKey] = yield IonKey2.generateEd25519KeyPair();
          const publicKeyModel = {
            id,
            type: "JsonWebKey2020",
            publicKeyJwk: publicKey
          };
          if (purposes !== void 0 && purposes.length > 0) {
            publicKeyModel.purposes = purposes;
          }
          return [publicKeyModel, privateKey];
        });
      }
      static generateEd25519OperationKeyPair() {
        return __awaiter(this, void 0, void 0, function* () {
          const keyPair = yield IonKey2.generateEd25519KeyPair();
          return keyPair;
        });
      }
      static generateEd25519KeyPair() {
        return __awaiter(this, void 0, void 0, function* () {
          const privateKeyBytes = Ed25519.utils.randomPrivateKey();
          const publicKeyBytes = yield Ed25519.getPublicKey(privateKeyBytes);
          const d = base64_1.base64url.baseEncode(privateKeyBytes);
          const x = base64_1.base64url.baseEncode(publicKeyBytes);
          const publicJwk = {
            kty: "OKP",
            crv: "Ed25519",
            x
          };
          const privateJwk = Object.assign(Object.assign({}, publicJwk), { d });
          return [publicJwk, privateJwk];
        });
      }
      static isJwkEs256k(key) {
        return key.crv === "secp256k1" && key.kty === "EC";
      }
      static isJwkEd25519(key) {
        return key.crv === "Ed25519" && key.kty === "OKP";
      }
    };
    exports.default = IonKey2;
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/enums/IonNetwork.js
var require_IonNetwork = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/enums/IonNetwork.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonNetwork;
    (function(IonNetwork2) {
      IonNetwork2["Mainnet"] = "mainnet";
      IonNetwork2["Testnet"] = "test";
    })(IonNetwork || (IonNetwork = {}));
    exports.default = IonNetwork;
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/enums/IonPublicKeyPurpose.js
var require_IonPublicKeyPurpose = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/enums/IonPublicKeyPurpose.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonPublicKeyPurpose;
    (function(IonPublicKeyPurpose2) {
      IonPublicKeyPurpose2["Authentication"] = "authentication";
      IonPublicKeyPurpose2["AssertionMethod"] = "assertionMethod";
      IonPublicKeyPurpose2["CapabilityInvocation"] = "capabilityInvocation";
      IonPublicKeyPurpose2["CapabilityDelegation"] = "capabilityDelegation";
      IonPublicKeyPurpose2["KeyAgreement"] = "keyAgreement";
    })(IonPublicKeyPurpose || (IonPublicKeyPurpose = {}));
    exports.default = IonPublicKeyPurpose;
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/LocalSigner.js
var require_LocalSigner = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/LocalSigner.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Secp256k1 = require_lib2();
    var Encoder_1 = require_Encoder();
    var InputValidator_1 = require_InputValidator();
    var OperationKeyType_1 = require_OperationKeyType();
    var base64_1 = require_base64();
    var sha2_1 = require_sha22();
    var LocalSigner2 = class {
      constructor(privateKey) {
        this.privateKey = privateKey;
        InputValidator_1.default.validateEs256kOperationKey(privateKey, OperationKeyType_1.default.Private);
      }
      static create(privateKey) {
        return new LocalSigner2(privateKey);
      }
      sign(header, content) {
        return __awaiter(this, void 0, void 0, function* () {
          const headerString = JSON.stringify(header);
          const headerBytes = Encoder_1.default.stringToBytes(headerString);
          const encodedHeader = base64_1.base64url.baseEncode(headerBytes);
          const payloadString = JSON.stringify(content);
          const payloadBytes = Encoder_1.default.stringToBytes(payloadString);
          const encodedPayload = base64_1.base64url.baseEncode(payloadBytes);
          const signingContentString = `${encodedHeader}.${encodedPayload}`;
          const signingContentBytes = Encoder_1.default.stringToBytes(signingContentString);
          const contentHash = yield sha2_1.sha256.encode(signingContentBytes);
          const privateKeyBytes = base64_1.base64url.baseDecode(this.privateKey.d);
          const signature = yield Secp256k1.sign(contentHash, privateKeyBytes, { der: false });
          const encodedSignature = base64_1.base64url.baseEncode(signature);
          const compactJws = `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
          return compactJws;
        });
      }
    };
    exports.default = LocalSigner2;
  }
});

// node_modules/@decentralized-identity/ion-sdk/dist/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@decentralized-identity/ion-sdk/dist/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LocalSigner = exports.IonSdkConfig = exports.IonRequest = exports.IonPublicKeyPurpose = exports.IonNetwork = exports.IonKey = exports.IonDid = void 0;
    var IonDid_1 = require_IonDid();
    exports.IonDid = IonDid_1.default;
    var IonKey_1 = require_IonKey();
    exports.IonKey = IonKey_1.default;
    var IonNetwork_1 = require_IonNetwork();
    exports.IonNetwork = IonNetwork_1.default;
    var IonPublicKeyPurpose_1 = require_IonPublicKeyPurpose();
    exports.IonPublicKeyPurpose = IonPublicKeyPurpose_1.default;
    var IonRequest_1 = require_IonRequest();
    exports.IonRequest = IonRequest_1.default;
    var IonSdkConfig_1 = require_IonSdkConfig();
    exports.IonSdkConfig = IonSdkConfig_1.default;
    var LocalSigner_1 = require_LocalSigner();
    exports.LocalSigner = LocalSigner_1.default;
  }
});

// src/index.js
var src_exports = {};
__export(src_exports, {
  DID: () => DID,
  anchor: () => anchor,
  generateKeyPair: () => generateKeyPair,
  resolve: () => resolve,
  sign: () => sign,
  verify: () => verify2
});
module.exports = __toCommonJS(src_exports);

// src/did.js
var import_ion_sdk2 = __toESM(require_lib3(), 1);

// src/utils.js
var import_cross_fetch = __toESM(require("cross-fetch"), 1);
var import_ion_pow_sdk = __toESM(require("@decentralized-identity/ion-pow-sdk"), 1);

// node_modules/@noble/ed25519/lib/esm/index.js
var import_crypto = __toESM(require("crypto"), 1);
var _0n = BigInt(0);
var _1n = BigInt(1);
var _2n = BigInt(2);
var _255n = BigInt(255);
var CURVE_ORDER = _2n ** BigInt(252) + BigInt("27742317777372353535851937790883648493");
var CURVE = {
  a: BigInt(-1),
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  P: _2n ** _255n - BigInt(19),
  l: CURVE_ORDER,
  n: CURVE_ORDER,
  h: BigInt(8),
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960")
};
var MAX_256B = _2n ** BigInt(256);
var SQRT_M1 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
var SQRT_D = BigInt("6853475219497561581579357271197624642482790079785650197046958215289687604742");
var SQRT_AD_MINUS_ONE = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
var INVSQRT_A_MINUS_D = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
var ONE_MINUS_D_SQ = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
var D_MINUS_ONE_SQ = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
var ExtendedPoint = class {
  constructor(x, y, z, t) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.t = t;
  }
  static fromAffine(p) {
    if (!(p instanceof Point)) {
      throw new TypeError("ExtendedPoint#fromAffine: expected Point");
    }
    if (p.equals(Point.ZERO))
      return ExtendedPoint.ZERO;
    return new ExtendedPoint(p.x, p.y, _1n, mod(p.x * p.y));
  }
  static toAffineBatch(points) {
    const toInv = invertBatch(points.map((p) => p.z));
    return points.map((p, i) => p.toAffine(toInv[i]));
  }
  static normalizeZ(points) {
    return this.toAffineBatch(points).map(this.fromAffine);
  }
  equals(other) {
    assertExtPoint(other);
    const { x: X1, y: Y1, z: Z1 } = this;
    const { x: X2, y: Y2, z: Z2 } = other;
    const X1Z2 = mod(X1 * Z2);
    const X2Z1 = mod(X2 * Z1);
    const Y1Z2 = mod(Y1 * Z2);
    const Y2Z1 = mod(Y2 * Z1);
    return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
  }
  negate() {
    return new ExtendedPoint(mod(-this.x), this.y, this.z, mod(-this.t));
  }
  double() {
    const { x: X1, y: Y1, z: Z1 } = this;
    const { a } = CURVE;
    const A = mod(X1 ** _2n);
    const B = mod(Y1 ** _2n);
    const C = mod(_2n * mod(Z1 ** _2n));
    const D = mod(a * A);
    const E = mod(mod((X1 + Y1) ** _2n) - A - B);
    const G = D + B;
    const F = G - C;
    const H = D - B;
    const X3 = mod(E * F);
    const Y3 = mod(G * H);
    const T3 = mod(E * H);
    const Z3 = mod(F * G);
    return new ExtendedPoint(X3, Y3, Z3, T3);
  }
  add(other) {
    assertExtPoint(other);
    const { x: X1, y: Y1, z: Z1, t: T1 } = this;
    const { x: X2, y: Y2, z: Z2, t: T2 } = other;
    const A = mod((Y1 - X1) * (Y2 + X2));
    const B = mod((Y1 + X1) * (Y2 - X2));
    const F = mod(B - A);
    if (F === _0n)
      return this.double();
    const C = mod(Z1 * _2n * T2);
    const D = mod(T1 * _2n * Z2);
    const E = D + C;
    const G = B + A;
    const H = D - C;
    const X3 = mod(E * F);
    const Y3 = mod(G * H);
    const T3 = mod(E * H);
    const Z3 = mod(F * G);
    return new ExtendedPoint(X3, Y3, Z3, T3);
  }
  subtract(other) {
    return this.add(other.negate());
  }
  precomputeWindow(W) {
    const windows = 1 + 256 / W;
    const points = [];
    let p = this;
    let base = p;
    for (let window = 0; window < windows; window++) {
      base = p;
      points.push(base);
      for (let i = 1; i < 2 ** (W - 1); i++) {
        base = base.add(p);
        points.push(base);
      }
      p = base.double();
    }
    return points;
  }
  wNAF(n, affinePoint) {
    if (!affinePoint && this.equals(ExtendedPoint.BASE))
      affinePoint = Point.BASE;
    const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
    if (256 % W) {
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    }
    let precomputes = affinePoint && pointPrecomputes.get(affinePoint);
    if (!precomputes) {
      precomputes = this.precomputeWindow(W);
      if (affinePoint && W !== 1) {
        precomputes = ExtendedPoint.normalizeZ(precomputes);
        pointPrecomputes.set(affinePoint, precomputes);
      }
    }
    let p = ExtendedPoint.ZERO;
    let f = ExtendedPoint.ZERO;
    const windows = 1 + 256 / W;
    const windowSize = 2 ** (W - 1);
    const mask = BigInt(2 ** W - 1);
    const maxNumber = 2 ** W;
    const shiftBy = BigInt(W);
    for (let window = 0; window < windows; window++) {
      const offset = window * windowSize;
      let wbits = Number(n & mask);
      n >>= shiftBy;
      if (wbits > windowSize) {
        wbits -= maxNumber;
        n += _1n;
      }
      if (wbits === 0) {
        let pr = precomputes[offset];
        if (window % 2)
          pr = pr.negate();
        f = f.add(pr);
      } else {
        let cached = precomputes[offset + Math.abs(wbits) - 1];
        if (wbits < 0)
          cached = cached.negate();
        p = p.add(cached);
      }
    }
    return ExtendedPoint.normalizeZ([p, f])[0];
  }
  multiply(scalar, affinePoint) {
    return this.wNAF(normalizeScalar(scalar, CURVE.l), affinePoint);
  }
  multiplyUnsafe(scalar) {
    let n = normalizeScalar(scalar, CURVE.l, false);
    const G = ExtendedPoint.BASE;
    const P0 = ExtendedPoint.ZERO;
    if (n === _0n)
      return P0;
    if (this.equals(P0) || n === _1n)
      return this;
    if (this.equals(G))
      return this.wNAF(n);
    let p = P0;
    let d = this;
    while (n > _0n) {
      if (n & _1n)
        p = p.add(d);
      d = d.double();
      n >>= _1n;
    }
    return p;
  }
  isSmallOrder() {
    return this.multiplyUnsafe(CURVE.h).equals(ExtendedPoint.ZERO);
  }
  isTorsionFree() {
    return this.multiplyUnsafe(CURVE.l).equals(ExtendedPoint.ZERO);
  }
  toAffine(invZ = invert(this.z)) {
    const { x, y, z } = this;
    const ax = mod(x * invZ);
    const ay = mod(y * invZ);
    const zz = mod(z * invZ);
    if (zz !== _1n)
      throw new Error("invZ was invalid");
    return new Point(ax, ay);
  }
  fromRistrettoBytes() {
    legacyRist();
  }
  toRistrettoBytes() {
    legacyRist();
  }
  fromRistrettoHash() {
    legacyRist();
  }
};
ExtendedPoint.BASE = new ExtendedPoint(CURVE.Gx, CURVE.Gy, _1n, mod(CURVE.Gx * CURVE.Gy));
ExtendedPoint.ZERO = new ExtendedPoint(_0n, _1n, _1n, _0n);
function assertExtPoint(other) {
  if (!(other instanceof ExtendedPoint))
    throw new TypeError("ExtendedPoint expected");
}
function assertRstPoint(other) {
  if (!(other instanceof RistrettoPoint))
    throw new TypeError("RistrettoPoint expected");
}
function legacyRist() {
  throw new Error("Legacy method: switch to RistrettoPoint");
}
var RistrettoPoint = class {
  constructor(ep) {
    this.ep = ep;
  }
  static calcElligatorRistrettoMap(r0) {
    const { d } = CURVE;
    const r = mod(SQRT_M1 * r0 * r0);
    const Ns = mod((r + _1n) * ONE_MINUS_D_SQ);
    let c = BigInt(-1);
    const D = mod((c - d * r) * mod(r + d));
    let { isValid: Ns_D_is_sq, value: s } = uvRatio(Ns, D);
    let s_ = mod(s * r0);
    if (!edIsNegative(s_))
      s_ = mod(-s_);
    if (!Ns_D_is_sq)
      s = s_;
    if (!Ns_D_is_sq)
      c = r;
    const Nt = mod(c * (r - _1n) * D_MINUS_ONE_SQ - D);
    const s2 = s * s;
    const W0 = mod((s + s) * D);
    const W1 = mod(Nt * SQRT_AD_MINUS_ONE);
    const W2 = mod(_1n - s2);
    const W3 = mod(_1n + s2);
    return new ExtendedPoint(mod(W0 * W3), mod(W2 * W1), mod(W1 * W3), mod(W0 * W2));
  }
  static hashToCurve(hex) {
    hex = ensureBytes(hex, 64);
    const r1 = bytes255ToNumberLE(hex.slice(0, 32));
    const R1 = this.calcElligatorRistrettoMap(r1);
    const r2 = bytes255ToNumberLE(hex.slice(32, 64));
    const R2 = this.calcElligatorRistrettoMap(r2);
    return new RistrettoPoint(R1.add(R2));
  }
  static fromHex(hex) {
    hex = ensureBytes(hex, 32);
    const { a, d } = CURVE;
    const emsg = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint";
    const s = bytes255ToNumberLE(hex);
    if (!equalBytes(numberTo32BytesLE(s), hex) || edIsNegative(s))
      throw new Error(emsg);
    const s2 = mod(s * s);
    const u1 = mod(_1n + a * s2);
    const u2 = mod(_1n - a * s2);
    const u1_2 = mod(u1 * u1);
    const u2_2 = mod(u2 * u2);
    const v = mod(a * d * u1_2 - u2_2);
    const { isValid, value: I } = invertSqrt(mod(v * u2_2));
    const Dx = mod(I * u2);
    const Dy = mod(I * Dx * v);
    let x = mod((s + s) * Dx);
    if (edIsNegative(x))
      x = mod(-x);
    const y = mod(u1 * Dy);
    const t = mod(x * y);
    if (!isValid || edIsNegative(t) || y === _0n)
      throw new Error(emsg);
    return new RistrettoPoint(new ExtendedPoint(x, y, _1n, t));
  }
  toRawBytes() {
    let { x, y, z, t } = this.ep;
    const u1 = mod(mod(z + y) * mod(z - y));
    const u2 = mod(x * y);
    const { value: invsqrt } = invertSqrt(mod(u1 * u2 ** _2n));
    const D1 = mod(invsqrt * u1);
    const D2 = mod(invsqrt * u2);
    const zInv = mod(D1 * D2 * t);
    let D;
    if (edIsNegative(t * zInv)) {
      let _x = mod(y * SQRT_M1);
      let _y = mod(x * SQRT_M1);
      x = _x;
      y = _y;
      D = mod(D1 * INVSQRT_A_MINUS_D);
    } else {
      D = D2;
    }
    if (edIsNegative(x * zInv))
      y = mod(-y);
    let s = mod((z - y) * D);
    if (edIsNegative(s))
      s = mod(-s);
    return numberTo32BytesLE(s);
  }
  toHex() {
    return bytesToHex(this.toRawBytes());
  }
  toString() {
    return this.toHex();
  }
  equals(other) {
    assertRstPoint(other);
    const a = this.ep;
    const b = other.ep;
    const one = mod(a.x * b.y) === mod(a.y * b.x);
    const two = mod(a.y * b.y) === mod(a.x * b.x);
    return one || two;
  }
  add(other) {
    assertRstPoint(other);
    return new RistrettoPoint(this.ep.add(other.ep));
  }
  subtract(other) {
    assertRstPoint(other);
    return new RistrettoPoint(this.ep.subtract(other.ep));
  }
  multiply(scalar) {
    return new RistrettoPoint(this.ep.multiply(scalar));
  }
  multiplyUnsafe(scalar) {
    return new RistrettoPoint(this.ep.multiplyUnsafe(scalar));
  }
};
RistrettoPoint.BASE = new RistrettoPoint(ExtendedPoint.BASE);
RistrettoPoint.ZERO = new RistrettoPoint(ExtendedPoint.ZERO);
var pointPrecomputes = /* @__PURE__ */ new WeakMap();
var Point = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  _setWindowSize(windowSize) {
    this._WINDOW_SIZE = windowSize;
    pointPrecomputes.delete(this);
  }
  static fromHex(hex, strict = true) {
    const { d, P } = CURVE;
    hex = ensureBytes(hex, 32);
    const normed = hex.slice();
    normed[31] = hex[31] & ~128;
    const y = bytesToNumberLE(normed);
    if (strict && y >= P)
      throw new Error("Expected 0 < hex < P");
    if (!strict && y >= MAX_256B)
      throw new Error("Expected 0 < hex < 2**256");
    const y2 = mod(y * y);
    const u = mod(y2 - _1n);
    const v = mod(d * y2 + _1n);
    let { isValid, value: x } = uvRatio(u, v);
    if (!isValid)
      throw new Error("Point.fromHex: invalid y coordinate");
    const isXOdd = (x & _1n) === _1n;
    const isLastByteOdd = (hex[31] & 128) !== 0;
    if (isLastByteOdd !== isXOdd) {
      x = mod(-x);
    }
    return new Point(x, y);
  }
  static async fromPrivateKey(privateKey) {
    return (await getExtendedPublicKey(privateKey)).point;
  }
  toRawBytes() {
    const bytes = numberTo32BytesLE(this.y);
    bytes[31] |= this.x & _1n ? 128 : 0;
    return bytes;
  }
  toHex() {
    return bytesToHex(this.toRawBytes());
  }
  toX25519() {
    const { y } = this;
    const u = mod((_1n + y) * invert(_1n - y));
    return numberTo32BytesLE(u);
  }
  isTorsionFree() {
    return ExtendedPoint.fromAffine(this).isTorsionFree();
  }
  equals(other) {
    return this.x === other.x && this.y === other.y;
  }
  negate() {
    return new Point(mod(-this.x), this.y);
  }
  add(other) {
    return ExtendedPoint.fromAffine(this).add(ExtendedPoint.fromAffine(other)).toAffine();
  }
  subtract(other) {
    return this.add(other.negate());
  }
  multiply(scalar) {
    return ExtendedPoint.fromAffine(this).multiply(scalar, this).toAffine();
  }
};
Point.BASE = new Point(CURVE.Gx, CURVE.Gy);
Point.ZERO = new Point(_0n, _1n);
var hexes = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(uint8a) {
  if (!(uint8a instanceof Uint8Array))
    throw new Error("Uint8Array expected");
  let hex = "";
  for (let i = 0; i < uint8a.length; i++) {
    hex += hexes[uint8a[i]];
  }
  return hex;
}
function hexToBytes(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("hexToBytes: expected string, got " + typeof hex);
  }
  if (hex.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex");
  const array = new Uint8Array(hex.length / 2);
  for (let i = 0; i < array.length; i++) {
    const j = i * 2;
    const hexByte = hex.slice(j, j + 2);
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte) || byte < 0)
      throw new Error("Invalid byte sequence");
    array[i] = byte;
  }
  return array;
}
function numberTo32BytesBE(num) {
  const length2 = 32;
  const hex = num.toString(16).padStart(length2 * 2, "0");
  return hexToBytes(hex);
}
function numberTo32BytesLE(num) {
  return numberTo32BytesBE(num).reverse();
}
function edIsNegative(num) {
  return (mod(num) & _1n) === _1n;
}
function bytesToNumberLE(uint8a) {
  if (!(uint8a instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  return BigInt("0x" + bytesToHex(Uint8Array.from(uint8a).reverse()));
}
function bytes255ToNumberLE(bytes) {
  return mod(bytesToNumberLE(bytes) & _2n ** _255n - _1n);
}
function mod(a, b = CURVE.P) {
  const res = a % b;
  return res >= _0n ? res : b + res;
}
function invert(number, modulo = CURVE.P) {
  if (number === _0n || modulo <= _0n) {
    throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
  }
  let a = mod(number, modulo);
  let b = modulo;
  let x = _0n, y = _1n, u = _1n, v = _0n;
  while (a !== _0n) {
    const q = b / a;
    const r = b % a;
    const m = x - u * q;
    const n = y - v * q;
    b = a, a = r, x = u, y = v, u = m, v = n;
  }
  const gcd = b;
  if (gcd !== _1n)
    throw new Error("invert: does not exist");
  return mod(x, modulo);
}
function invertBatch(nums, p = CURVE.P) {
  const tmp = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num, i) => {
    if (num === _0n)
      return acc;
    tmp[i] = acc;
    return mod(acc * num, p);
  }, _1n);
  const inverted = invert(lastMultiplied, p);
  nums.reduceRight((acc, num, i) => {
    if (num === _0n)
      return acc;
    tmp[i] = mod(acc * tmp[i], p);
    return mod(acc * num, p);
  }, inverted);
  return tmp;
}
function pow2(x, power) {
  const { P } = CURVE;
  let res = x;
  while (power-- > _0n) {
    res *= res;
    res %= P;
  }
  return res;
}
function pow_2_252_3(x) {
  const { P } = CURVE;
  const _5n = BigInt(5);
  const _10n = BigInt(10);
  const _20n = BigInt(20);
  const _40n = BigInt(40);
  const _80n = BigInt(80);
  const x2 = x * x % P;
  const b2 = x2 * x % P;
  const b4 = pow2(b2, _2n) * b2 % P;
  const b5 = pow2(b4, _1n) * x % P;
  const b10 = pow2(b5, _5n) * b5 % P;
  const b20 = pow2(b10, _10n) * b10 % P;
  const b40 = pow2(b20, _20n) * b20 % P;
  const b80 = pow2(b40, _40n) * b40 % P;
  const b160 = pow2(b80, _80n) * b80 % P;
  const b240 = pow2(b160, _80n) * b80 % P;
  const b250 = pow2(b240, _10n) * b10 % P;
  const pow_p_5_8 = pow2(b250, _2n) * x % P;
  return { pow_p_5_8, b2 };
}
function uvRatio(u, v) {
  const v3 = mod(v * v * v);
  const v7 = mod(v3 * v3 * v);
  const pow = pow_2_252_3(u * v7).pow_p_5_8;
  let x = mod(u * v3 * pow);
  const vx2 = mod(v * x * x);
  const root1 = x;
  const root2 = mod(x * SQRT_M1);
  const useRoot1 = vx2 === u;
  const useRoot2 = vx2 === mod(-u);
  const noRoot = vx2 === mod(-u * SQRT_M1);
  if (useRoot1)
    x = root1;
  if (useRoot2 || noRoot)
    x = root2;
  if (edIsNegative(x))
    x = mod(-x);
  return { isValid: useRoot1 || useRoot2, value: x };
}
function invertSqrt(number) {
  return uvRatio(_1n, number);
}
function equalBytes(b1, b2) {
  if (b1.length !== b2.length) {
    return false;
  }
  for (let i = 0; i < b1.length; i++) {
    if (b1[i] !== b2[i]) {
      return false;
    }
  }
  return true;
}
function ensureBytes(hex, expectedLength) {
  const bytes = hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes(hex);
  if (typeof expectedLength === "number" && bytes.length !== expectedLength)
    throw new Error(`Expected ${expectedLength} bytes`);
  return bytes;
}
function normalizeScalar(num, max, strict = true) {
  if (!max)
    throw new TypeError("Specify max value");
  if (typeof num === "number" && Number.isSafeInteger(num))
    num = BigInt(num);
  if (typeof num === "bigint" && num < max) {
    if (strict) {
      if (_0n < num)
        return num;
    } else {
      if (_0n <= num)
        return num;
    }
  }
  throw new TypeError("Expected valid scalar: 0 < scalar < max");
}
function adjustBytes25519(bytes) {
  bytes[0] &= 248;
  bytes[31] &= 127;
  bytes[31] |= 64;
  return bytes;
}
async function getExtendedPublicKey(key) {
  key = typeof key === "bigint" || typeof key === "number" ? numberTo32BytesBE(normalizeScalar(key, MAX_256B)) : ensureBytes(key);
  if (key.length !== 32)
    throw new Error(`Expected 32 bytes`);
  const hashed = await utils.sha512(key);
  const head = adjustBytes25519(hashed.slice(0, 32));
  const prefix = hashed.slice(32, 64);
  const scalar = mod(bytesToNumberLE(head), CURVE.l);
  const point = Point.BASE.multiply(scalar);
  const pointBytes = point.toRawBytes();
  return { head, prefix, scalar, point, pointBytes };
}
Point.BASE._setWindowSize(8);
var crypto = {
  node: import_crypto.default,
  web: typeof self === "object" && "crypto" in self ? self.crypto : void 0
};
var utils = {
  TORSION_SUBGROUP: [
    "0100000000000000000000000000000000000000000000000000000000000000",
    "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
    "0000000000000000000000000000000000000000000000000000000000000080",
    "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
    "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
    "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
    "0000000000000000000000000000000000000000000000000000000000000000",
    "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"
  ],
  bytesToHex,
  getExtendedPublicKey,
  mod,
  invert,
  hashToPrivateScalar: (hash) => {
    hash = ensureBytes(hash);
    if (hash.length < 40 || hash.length > 1024)
      throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
    const num = mod(bytesToNumberLE(hash), CURVE.l);
    if (num === _0n || num === _1n)
      throw new Error("Invalid private key");
    return num;
  },
  randomBytes: (bytesLength = 32) => {
    if (crypto.web) {
      return crypto.web.getRandomValues(new Uint8Array(bytesLength));
    } else if (crypto.node) {
      const { randomBytes } = crypto.node;
      return new Uint8Array(randomBytes(bytesLength).buffer);
    } else {
      throw new Error("The environment doesn't have randomBytes function");
    }
  },
  randomPrivateKey: () => {
    return utils.randomBytes(32);
  },
  sha512: async (message) => {
    if (crypto.web) {
      const buffer = await crypto.web.subtle.digest("SHA-512", message.buffer);
      return new Uint8Array(buffer);
    } else if (crypto.node) {
      return Uint8Array.from(crypto.node.createHash("sha512").update(message).digest());
    } else {
      throw new Error("The environment doesn't have sha512 function");
    }
  },
  precompute(windowSize = 8, point = Point.BASE) {
    const cached = point.equals(Point.BASE) ? point : new Point(point.x, point.y);
    cached._setWindowSize(windowSize);
    cached.multiply(_2n);
    return cached;
  }
};

// node_modules/@noble/secp256k1/lib/esm/index.js
var import_crypto2 = __toESM(require("crypto"), 1);
var _0n2 = BigInt(0);
var _1n2 = BigInt(1);
var _2n2 = BigInt(2);
var _3n = BigInt(3);
var _8n = BigInt(8);
var POW_2_256 = _2n2 ** BigInt(256);
var CURVE2 = {
  a: _0n2,
  b: BigInt(7),
  P: POW_2_256 - _2n2 ** BigInt(32) - BigInt(977),
  n: POW_2_256 - BigInt("432420386565659656852420866394968145599"),
  h: _1n2,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
};
function weistrass(x) {
  const { a, b } = CURVE2;
  const x2 = mod2(x * x);
  const x3 = mod2(x2 * x);
  return mod2(x3 + a * x + b);
}
var USE_ENDOMORPHISM = CURVE2.a === _0n2;
var JacobianPoint = class {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static fromAffine(p) {
    if (!(p instanceof Point2)) {
      throw new TypeError("JacobianPoint#fromAffine: expected Point");
    }
    return new JacobianPoint(p.x, p.y, _1n2);
  }
  static toAffineBatch(points) {
    const toInv = invertBatch2(points.map((p) => p.z));
    return points.map((p, i) => p.toAffine(toInv[i]));
  }
  static normalizeZ(points) {
    return JacobianPoint.toAffineBatch(points).map(JacobianPoint.fromAffine);
  }
  equals(other) {
    if (!(other instanceof JacobianPoint))
      throw new TypeError("JacobianPoint expected");
    const { x: X1, y: Y1, z: Z1 } = this;
    const { x: X2, y: Y2, z: Z2 } = other;
    const Z1Z1 = mod2(Z1 ** _2n2);
    const Z2Z2 = mod2(Z2 ** _2n2);
    const U1 = mod2(X1 * Z2Z2);
    const U2 = mod2(X2 * Z1Z1);
    const S1 = mod2(mod2(Y1 * Z2) * Z2Z2);
    const S2 = mod2(mod2(Y2 * Z1) * Z1Z1);
    return U1 === U2 && S1 === S2;
  }
  negate() {
    return new JacobianPoint(this.x, mod2(-this.y), this.z);
  }
  double() {
    const { x: X1, y: Y1, z: Z1 } = this;
    const A = mod2(X1 ** _2n2);
    const B = mod2(Y1 ** _2n2);
    const C = mod2(B ** _2n2);
    const D = mod2(_2n2 * (mod2((X1 + B) ** _2n2) - A - C));
    const E = mod2(_3n * A);
    const F = mod2(E ** _2n2);
    const X3 = mod2(F - _2n2 * D);
    const Y3 = mod2(E * (D - X3) - _8n * C);
    const Z3 = mod2(_2n2 * Y1 * Z1);
    return new JacobianPoint(X3, Y3, Z3);
  }
  add(other) {
    if (!(other instanceof JacobianPoint))
      throw new TypeError("JacobianPoint expected");
    const { x: X1, y: Y1, z: Z1 } = this;
    const { x: X2, y: Y2, z: Z2 } = other;
    if (X2 === _0n2 || Y2 === _0n2)
      return this;
    if (X1 === _0n2 || Y1 === _0n2)
      return other;
    const Z1Z1 = mod2(Z1 ** _2n2);
    const Z2Z2 = mod2(Z2 ** _2n2);
    const U1 = mod2(X1 * Z2Z2);
    const U2 = mod2(X2 * Z1Z1);
    const S1 = mod2(mod2(Y1 * Z2) * Z2Z2);
    const S2 = mod2(mod2(Y2 * Z1) * Z1Z1);
    const H = mod2(U2 - U1);
    const r = mod2(S2 - S1);
    if (H === _0n2) {
      if (r === _0n2) {
        return this.double();
      } else {
        return JacobianPoint.ZERO;
      }
    }
    const HH = mod2(H ** _2n2);
    const HHH = mod2(H * HH);
    const V = mod2(U1 * HH);
    const X3 = mod2(r ** _2n2 - HHH - _2n2 * V);
    const Y3 = mod2(r * (V - X3) - S1 * HHH);
    const Z3 = mod2(Z1 * Z2 * H);
    return new JacobianPoint(X3, Y3, Z3);
  }
  subtract(other) {
    return this.add(other.negate());
  }
  multiplyUnsafe(scalar) {
    let n = normalizeScalar2(scalar);
    const G = JacobianPoint.BASE;
    const P0 = JacobianPoint.ZERO;
    if (n === _0n2)
      return P0;
    if (n === _1n2)
      return this;
    if (!USE_ENDOMORPHISM) {
      let p = P0;
      let d2 = this;
      while (n > _0n2) {
        if (n & _1n2)
          p = p.add(d2);
        d2 = d2.double();
        n >>= _1n2;
      }
      return p;
    }
    let { k1neg, k1, k2neg, k2 } = splitScalarEndo(n);
    let k1p = P0;
    let k2p = P0;
    let d = this;
    while (k1 > _0n2 || k2 > _0n2) {
      if (k1 & _1n2)
        k1p = k1p.add(d);
      if (k2 & _1n2)
        k2p = k2p.add(d);
      d = d.double();
      k1 >>= _1n2;
      k2 >>= _1n2;
    }
    if (k1neg)
      k1p = k1p.negate();
    if (k2neg)
      k2p = k2p.negate();
    k2p = new JacobianPoint(mod2(k2p.x * CURVE2.beta), k2p.y, k2p.z);
    return k1p.add(k2p);
  }
  precomputeWindow(W) {
    const windows = USE_ENDOMORPHISM ? 128 / W + 1 : 256 / W + 1;
    const points = [];
    let p = this;
    let base = p;
    for (let window = 0; window < windows; window++) {
      base = p;
      points.push(base);
      for (let i = 1; i < 2 ** (W - 1); i++) {
        base = base.add(p);
        points.push(base);
      }
      p = base.double();
    }
    return points;
  }
  wNAF(n, affinePoint) {
    if (!affinePoint && this.equals(JacobianPoint.BASE))
      affinePoint = Point2.BASE;
    const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
    if (256 % W) {
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    }
    let precomputes = affinePoint && pointPrecomputes2.get(affinePoint);
    if (!precomputes) {
      precomputes = this.precomputeWindow(W);
      if (affinePoint && W !== 1) {
        precomputes = JacobianPoint.normalizeZ(precomputes);
        pointPrecomputes2.set(affinePoint, precomputes);
      }
    }
    let p = JacobianPoint.ZERO;
    let f = JacobianPoint.ZERO;
    const windows = 1 + (USE_ENDOMORPHISM ? 128 / W : 256 / W);
    const windowSize = 2 ** (W - 1);
    const mask = BigInt(2 ** W - 1);
    const maxNumber = 2 ** W;
    const shiftBy = BigInt(W);
    for (let window = 0; window < windows; window++) {
      const offset = window * windowSize;
      let wbits = Number(n & mask);
      n >>= shiftBy;
      if (wbits > windowSize) {
        wbits -= maxNumber;
        n += _1n2;
      }
      if (wbits === 0) {
        let pr = precomputes[offset];
        if (window % 2)
          pr = pr.negate();
        f = f.add(pr);
      } else {
        let cached = precomputes[offset + Math.abs(wbits) - 1];
        if (wbits < 0)
          cached = cached.negate();
        p = p.add(cached);
      }
    }
    return { p, f };
  }
  multiply(scalar, affinePoint) {
    let n = normalizeScalar2(scalar);
    let point;
    let fake;
    if (USE_ENDOMORPHISM) {
      const { k1neg, k1, k2neg, k2 } = splitScalarEndo(n);
      let { p: k1p, f: f1p } = this.wNAF(k1, affinePoint);
      let { p: k2p, f: f2p } = this.wNAF(k2, affinePoint);
      if (k1neg)
        k1p = k1p.negate();
      if (k2neg)
        k2p = k2p.negate();
      k2p = new JacobianPoint(mod2(k2p.x * CURVE2.beta), k2p.y, k2p.z);
      point = k1p.add(k2p);
      fake = f1p.add(f2p);
    } else {
      const { p, f } = this.wNAF(n, affinePoint);
      point = p;
      fake = f;
    }
    return JacobianPoint.normalizeZ([point, fake])[0];
  }
  toAffine(invZ = invert2(this.z)) {
    const { x, y, z } = this;
    const iz1 = invZ;
    const iz2 = mod2(iz1 * iz1);
    const iz3 = mod2(iz2 * iz1);
    const ax = mod2(x * iz2);
    const ay = mod2(y * iz3);
    const zz = mod2(z * iz1);
    if (zz !== _1n2)
      throw new Error("invZ was invalid");
    return new Point2(ax, ay);
  }
};
JacobianPoint.BASE = new JacobianPoint(CURVE2.Gx, CURVE2.Gy, _1n2);
JacobianPoint.ZERO = new JacobianPoint(_0n2, _1n2, _0n2);
var pointPrecomputes2 = /* @__PURE__ */ new WeakMap();
var Point2 = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  _setWindowSize(windowSize) {
    this._WINDOW_SIZE = windowSize;
    pointPrecomputes2.delete(this);
  }
  static fromCompressedHex(bytes) {
    const isShort = bytes.length === 32;
    const x = bytesToNumber(isShort ? bytes : bytes.subarray(1));
    if (!isValidFieldElement(x))
      throw new Error("Point is not on curve");
    const y2 = weistrass(x);
    let y = sqrtMod(y2);
    const isYOdd = (y & _1n2) === _1n2;
    if (isShort) {
      if (isYOdd)
        y = mod2(-y);
    } else {
      const isFirstByteOdd = (bytes[0] & 1) === 1;
      if (isFirstByteOdd !== isYOdd)
        y = mod2(-y);
    }
    const point = new Point2(x, y);
    point.assertValidity();
    return point;
  }
  static fromUncompressedHex(bytes) {
    const x = bytesToNumber(bytes.subarray(1, 33));
    const y = bytesToNumber(bytes.subarray(33, 65));
    const point = new Point2(x, y);
    point.assertValidity();
    return point;
  }
  static fromHex(hex) {
    const bytes = ensureBytes2(hex);
    const len = bytes.length;
    const header = bytes[0];
    if (len === 32 || len === 33 && (header === 2 || header === 3)) {
      return this.fromCompressedHex(bytes);
    }
    if (len === 65 && header === 4)
      return this.fromUncompressedHex(bytes);
    throw new Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${len}`);
  }
  static fromPrivateKey(privateKey) {
    return Point2.BASE.multiply(normalizePrivateKey(privateKey));
  }
  static fromSignature(msgHash, signature, recovery) {
    msgHash = ensureBytes2(msgHash);
    const h = truncateHash(msgHash);
    const { r, s } = normalizeSignature(signature);
    if (recovery !== 0 && recovery !== 1) {
      throw new Error("Cannot recover signature: invalid recovery bit");
    }
    if (h === _0n2)
      throw new Error("Cannot recover signature: msgHash cannot be 0");
    const prefix = recovery & 1 ? "03" : "02";
    const R = Point2.fromHex(prefix + numTo32bStr(r));
    const { n } = CURVE2;
    const rinv = invert2(r, n);
    const u1 = mod2(-h * rinv, n);
    const u2 = mod2(s * rinv, n);
    const Q = Point2.BASE.multiplyAndAddUnsafe(R, u1, u2);
    if (!Q)
      throw new Error("Cannot recover signature: point at infinify");
    Q.assertValidity();
    return Q;
  }
  toRawBytes(isCompressed = false) {
    return hexToBytes2(this.toHex(isCompressed));
  }
  toHex(isCompressed = false) {
    const x = numTo32bStr(this.x);
    if (isCompressed) {
      const prefix = this.y & _1n2 ? "03" : "02";
      return `${prefix}${x}`;
    } else {
      return `04${x}${numTo32bStr(this.y)}`;
    }
  }
  toHexX() {
    return this.toHex(true).slice(2);
  }
  toRawX() {
    return this.toRawBytes(true).slice(1);
  }
  assertValidity() {
    const msg = "Point is not on elliptic curve";
    const { x, y } = this;
    if (!isValidFieldElement(x) || !isValidFieldElement(y))
      throw new Error(msg);
    const left = mod2(y * y);
    const right = weistrass(x);
    if (mod2(left - right) !== _0n2)
      throw new Error(msg);
  }
  equals(other) {
    return this.x === other.x && this.y === other.y;
  }
  negate() {
    return new Point2(this.x, mod2(-this.y));
  }
  double() {
    return JacobianPoint.fromAffine(this).double().toAffine();
  }
  add(other) {
    return JacobianPoint.fromAffine(this).add(JacobianPoint.fromAffine(other)).toAffine();
  }
  subtract(other) {
    return this.add(other.negate());
  }
  multiply(scalar) {
    return JacobianPoint.fromAffine(this).multiply(scalar, this).toAffine();
  }
  multiplyAndAddUnsafe(Q, a, b) {
    const P = JacobianPoint.fromAffine(this);
    const aP = P.multiply(a);
    const bQ = JacobianPoint.fromAffine(Q).multiplyUnsafe(b);
    const sum = aP.add(bQ);
    return sum.equals(JacobianPoint.ZERO) ? void 0 : sum.toAffine();
  }
};
Point2.BASE = new Point2(CURVE2.Gx, CURVE2.Gy);
Point2.ZERO = new Point2(_0n2, _0n2);
function sliceDER(s) {
  return Number.parseInt(s[0], 16) >= 8 ? "00" + s : s;
}
function parseDERInt(data) {
  if (data.length < 2 || data[0] !== 2) {
    throw new Error(`Invalid signature integer tag: ${bytesToHex2(data)}`);
  }
  const len = data[1];
  const res = data.subarray(2, len + 2);
  if (!len || res.length !== len) {
    throw new Error(`Invalid signature integer: wrong length`);
  }
  if (res[0] === 0 && res[1] <= 127) {
    throw new Error("Invalid signature integer: trailing length");
  }
  return { data: bytesToNumber(res), left: data.subarray(len + 2) };
}
function parseDERSignature(data) {
  if (data.length < 2 || data[0] != 48) {
    throw new Error(`Invalid signature tag: ${bytesToHex2(data)}`);
  }
  if (data[1] !== data.length - 2) {
    throw new Error("Invalid signature: incorrect length");
  }
  const { data: r, left: sBytes } = parseDERInt(data.subarray(2));
  const { data: s, left: rBytesLeft } = parseDERInt(sBytes);
  if (rBytesLeft.length) {
    throw new Error(`Invalid signature: left bytes after parsing: ${bytesToHex2(rBytesLeft)}`);
  }
  return { r, s };
}
var Signature = class {
  constructor(r, s) {
    this.r = r;
    this.s = s;
    this.assertValidity();
  }
  static fromCompact(hex) {
    const arr = isUint8a(hex);
    const name = "Signature.fromCompact";
    if (typeof hex !== "string" && !arr)
      throw new TypeError(`${name}: Expected string or Uint8Array`);
    const str = arr ? bytesToHex2(hex) : hex;
    if (str.length !== 128)
      throw new Error(`${name}: Expected 64-byte hex`);
    return new Signature(hexToNumber(str.slice(0, 64)), hexToNumber(str.slice(64, 128)));
  }
  static fromDER(hex) {
    const arr = isUint8a(hex);
    if (typeof hex !== "string" && !arr)
      throw new TypeError(`Signature.fromDER: Expected string or Uint8Array`);
    const { r, s } = parseDERSignature(arr ? hex : hexToBytes2(hex));
    return new Signature(r, s);
  }
  static fromHex(hex) {
    return this.fromDER(hex);
  }
  assertValidity() {
    const { r, s } = this;
    if (!isWithinCurveOrder(r))
      throw new Error("Invalid Signature: r must be 0 < r < n");
    if (!isWithinCurveOrder(s))
      throw new Error("Invalid Signature: s must be 0 < s < n");
  }
  hasHighS() {
    const HALF = CURVE2.n >> _1n2;
    return this.s > HALF;
  }
  normalizeS() {
    return this.hasHighS() ? new Signature(this.r, CURVE2.n - this.s) : this;
  }
  toDERRawBytes(isCompressed = false) {
    return hexToBytes2(this.toDERHex(isCompressed));
  }
  toDERHex(isCompressed = false) {
    const sHex = sliceDER(numberToHexUnpadded(this.s));
    if (isCompressed)
      return sHex;
    const rHex = sliceDER(numberToHexUnpadded(this.r));
    const rLen = numberToHexUnpadded(rHex.length / 2);
    const sLen = numberToHexUnpadded(sHex.length / 2);
    const length2 = numberToHexUnpadded(rHex.length / 2 + sHex.length / 2 + 4);
    return `30${length2}02${rLen}${rHex}02${sLen}${sHex}`;
  }
  toRawBytes() {
    return this.toDERRawBytes();
  }
  toHex() {
    return this.toDERHex();
  }
  toCompactRawBytes() {
    return hexToBytes2(this.toCompactHex());
  }
  toCompactHex() {
    return numTo32bStr(this.r) + numTo32bStr(this.s);
  }
};
function isUint8a(bytes) {
  return bytes instanceof Uint8Array;
}
var hexes2 = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
function bytesToHex2(uint8a) {
  if (!(uint8a instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  let hex = "";
  for (let i = 0; i < uint8a.length; i++) {
    hex += hexes2[uint8a[i]];
  }
  return hex;
}
function numTo32bStr(num) {
  if (num > POW_2_256)
    throw new Error("Expected number < 2^256");
  return num.toString(16).padStart(64, "0");
}
function numberToHexUnpadded(num) {
  const hex = num.toString(16);
  return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("hexToNumber: expected string, got " + typeof hex);
  }
  return BigInt(`0x${hex}`);
}
function hexToBytes2(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("hexToBytes: expected string, got " + typeof hex);
  }
  if (hex.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex" + hex.length);
  const array = new Uint8Array(hex.length / 2);
  for (let i = 0; i < array.length; i++) {
    const j = i * 2;
    const hexByte = hex.slice(j, j + 2);
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte) || byte < 0)
      throw new Error("Invalid byte sequence");
    array[i] = byte;
  }
  return array;
}
function bytesToNumber(bytes) {
  return hexToNumber(bytesToHex2(bytes));
}
function ensureBytes2(hex) {
  return hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes2(hex);
}
function normalizeScalar2(num) {
  if (typeof num === "number" && Number.isSafeInteger(num) && num > 0)
    return BigInt(num);
  if (typeof num === "bigint" && isWithinCurveOrder(num))
    return num;
  throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
}
function mod2(a, b = CURVE2.P) {
  const result = a % b;
  return result >= _0n2 ? result : b + result;
}
function pow22(x, power) {
  const { P } = CURVE2;
  let res = x;
  while (power-- > _0n2) {
    res *= res;
    res %= P;
  }
  return res;
}
function sqrtMod(x) {
  const { P } = CURVE2;
  const _6n = BigInt(6);
  const _11n = BigInt(11);
  const _22n = BigInt(22);
  const _23n = BigInt(23);
  const _44n = BigInt(44);
  const _88n = BigInt(88);
  const b2 = x * x * x % P;
  const b3 = b2 * b2 * x % P;
  const b6 = pow22(b3, _3n) * b3 % P;
  const b9 = pow22(b6, _3n) * b3 % P;
  const b11 = pow22(b9, _2n2) * b2 % P;
  const b22 = pow22(b11, _11n) * b11 % P;
  const b44 = pow22(b22, _22n) * b22 % P;
  const b88 = pow22(b44, _44n) * b44 % P;
  const b176 = pow22(b88, _88n) * b88 % P;
  const b220 = pow22(b176, _44n) * b44 % P;
  const b223 = pow22(b220, _3n) * b3 % P;
  const t1 = pow22(b223, _23n) * b22 % P;
  const t2 = pow22(t1, _6n) * b2 % P;
  return pow22(t2, _2n2);
}
function invert2(number, modulo = CURVE2.P) {
  if (number === _0n2 || modulo <= _0n2) {
    throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
  }
  let a = mod2(number, modulo);
  let b = modulo;
  let x = _0n2, y = _1n2, u = _1n2, v = _0n2;
  while (a !== _0n2) {
    const q = b / a;
    const r = b % a;
    const m = x - u * q;
    const n = y - v * q;
    b = a, a = r, x = u, y = v, u = m, v = n;
  }
  const gcd = b;
  if (gcd !== _1n2)
    throw new Error("invert: does not exist");
  return mod2(x, modulo);
}
function invertBatch2(nums, p = CURVE2.P) {
  const scratch = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num, i) => {
    if (num === _0n2)
      return acc;
    scratch[i] = acc;
    return mod2(acc * num, p);
  }, _1n2);
  const inverted = invert2(lastMultiplied, p);
  nums.reduceRight((acc, num, i) => {
    if (num === _0n2)
      return acc;
    scratch[i] = mod2(acc * scratch[i], p);
    return mod2(acc * num, p);
  }, inverted);
  return scratch;
}
var divNearest = (a, b) => (a + b / _2n2) / b;
var POW_2_128 = _2n2 ** BigInt(128);
function splitScalarEndo(k) {
  const { n } = CURVE2;
  const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
  const b1 = -_1n2 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
  const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
  const b2 = a1;
  const c1 = divNearest(b2 * k, n);
  const c2 = divNearest(-b1 * k, n);
  let k1 = mod2(k - c1 * a1 - c2 * a2, n);
  let k2 = mod2(-c1 * b1 - c2 * b2, n);
  const k1neg = k1 > POW_2_128;
  const k2neg = k2 > POW_2_128;
  if (k1neg)
    k1 = n - k1;
  if (k2neg)
    k2 = n - k2;
  if (k1 > POW_2_128 || k2 > POW_2_128) {
    throw new Error("splitScalarEndo: Endomorphism failed, k=" + k);
  }
  return { k1neg, k1, k2neg, k2 };
}
function truncateHash(hash) {
  const { n } = CURVE2;
  const byteLength = hash.length;
  const delta = byteLength * 8 - 256;
  let h = bytesToNumber(hash);
  if (delta > 0)
    h = h >> BigInt(delta);
  if (h >= n)
    h -= n;
  return h;
}
function isWithinCurveOrder(num) {
  return _0n2 < num && num < CURVE2.n;
}
function isValidFieldElement(num) {
  return _0n2 < num && num < CURVE2.P;
}
function normalizePrivateKey(key) {
  let num;
  if (typeof key === "bigint") {
    num = key;
  } else if (typeof key === "number" && Number.isSafeInteger(key) && key > 0) {
    num = BigInt(key);
  } else if (typeof key === "string") {
    if (key.length !== 64)
      throw new Error("Expected 32 bytes of private key");
    num = hexToNumber(key);
  } else if (isUint8a(key)) {
    if (key.length !== 32)
      throw new Error("Expected 32 bytes of private key");
    num = bytesToNumber(key);
  } else {
    throw new TypeError("Expected valid private key");
  }
  if (!isWithinCurveOrder(num))
    throw new Error("Expected private key: 0 < key < n");
  return num;
}
function normalizePublicKey(publicKey) {
  if (publicKey instanceof Point2) {
    publicKey.assertValidity();
    return publicKey;
  } else {
    return Point2.fromHex(publicKey);
  }
}
function normalizeSignature(signature) {
  if (signature instanceof Signature) {
    signature.assertValidity();
    return signature;
  }
  try {
    return Signature.fromDER(signature);
  } catch (error) {
    return Signature.fromCompact(signature);
  }
}
var vopts = { strict: true };
function verify(signature, msgHash, publicKey, opts = vopts) {
  let sig;
  try {
    sig = normalizeSignature(signature);
    msgHash = ensureBytes2(msgHash);
  } catch (error) {
    return false;
  }
  const { r, s } = sig;
  if (opts.strict && sig.hasHighS())
    return false;
  const h = truncateHash(msgHash);
  if (h === _0n2)
    return false;
  let P;
  try {
    P = normalizePublicKey(publicKey);
  } catch (error) {
    return false;
  }
  const { n } = CURVE2;
  const sinv = invert2(s, n);
  const u1 = mod2(h * sinv, n);
  const u2 = mod2(r * sinv, n);
  const R = Point2.BASE.multiplyAndAddUnsafe(P, u1, u2);
  if (!R)
    return false;
  const v = mod2(R.x, n);
  return v === r;
}
Point2.BASE._setWindowSize(8);
var crypto2 = {
  node: import_crypto2.default,
  web: typeof self === "object" && "crypto" in self ? self.crypto : void 0
};

// node_modules/multiformats/esm/src/bytes.js
var empty = new Uint8Array(0);
var coerce = (o) => {
  if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};

// node_modules/multiformats/esm/src/bases/base.js
var Encoder = class {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};
var Decoder = class {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      switch (text[0]) {
        case this.prefix: {
          return this.baseDecode(text.slice(1));
        }
        default: {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
      }
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or(this, decoder);
  }
};
var ComposedDecoder = class {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
};
var or = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
var Codec = class {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
};
var from = ({ name, prefix, encode: encode3, decode: decode4 }) => new Codec(name, prefix, encode3, decode4);
var decode = (string, alphabet, bitsPerChar, name) => {
  const codes = {};
  for (let i = 0; i < alphabet.length; ++i) {
    codes[alphabet[i]] = i;
  }
  let end = string.length;
  while (string[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string[i]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
var encode = (data, alphabet, bitsPerChar) => {
  const pad = alphabet[alphabet.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
var rfc4648 = ({ name, prefix, bitsPerChar, alphabet }) => {
  return from({
    prefix,
    name,
    encode(input) {
      return encode(input, alphabet, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet, bitsPerChar, name);
    }
  });
};

// node_modules/multiformats/esm/src/bases/base64.js
var base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
var base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
var base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
var base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});

// src/utils.js
var import_ion_sdk = __toESM(require_lib3(), 1);

// node_modules/multiformats/esm/src/hashes/sha2.js
var import_crypto3 = __toESM(require("crypto"), 1);

// node_modules/multiformats/esm/vendor/varint.js
var encode_1 = encode2;
var MSB = 128;
var REST = 127;
var MSBALL = ~REST;
var INT = Math.pow(2, 31);
function encode2(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode2.bytes = offset - oldOffset + 1;
  return out;
}
var decode2 = read;
var MSB$1 = 128;
var REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode2,
  encodingLength: length
};
var _brrp_varint = varint;
var varint_default = _brrp_varint;

// node_modules/multiformats/esm/src/varint.js
var encodeTo = (int, target, offset = 0) => {
  varint_default.encode(int, target, offset);
  return target;
};
var encodingLength = (int) => {
  return varint_default.encodingLength(int);
};

// node_modules/multiformats/esm/src/hashes/digest.js
var create = (code, digest) => {
  const size = digest.byteLength;
  const sizeOffset = encodingLength(code);
  const digestOffset = sizeOffset + encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo(code, bytes, 0);
  encodeTo(size, bytes, sizeOffset);
  bytes.set(digest, digestOffset);
  return new Digest(code, size, digest, bytes);
};
var Digest = class {
  constructor(code, size, digest, bytes) {
    this.code = code;
    this.size = size;
    this.digest = digest;
    this.bytes = bytes;
  }
};

// node_modules/multiformats/esm/src/hashes/hasher.js
var from2 = ({ name, code, encode: encode3 }) => new Hasher(name, code, encode3);
var Hasher = class {
  constructor(name, code, encode3) {
    this.name = name;
    this.code = code;
    this.encode = encode3;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create(this.code, result) : result.then((digest) => create(this.code, digest));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};

// node_modules/multiformats/esm/src/hashes/sha2.js
var sha256 = from2({
  name: "sha2-256",
  code: 18,
  encode: (input) => coerce(import_crypto3.default.createHash("sha256").update(input).digest())
});
var sha512 = from2({
  name: "sha2-512",
  code: 19,
  encode: (input) => coerce(import_crypto3.default.createHash("sha512").update(input).digest())
});

// src/utils.js
var fetch = globalThis.fetch ?? import_cross_fetch.default;
var keyGenerators = {
  "Ed25519": import_ion_sdk.IonKey.generateEd25519OperationKeyPair,
  "EdDSA": import_ion_sdk.IonKey.generateEd25519OperationKeyPair,
  "secp256k1": import_ion_sdk.IonKey.generateEs256kOperationKeyPair,
  "ES256K": import_ion_sdk.IonKey.generateEs256kOperationKeyPair
};
async function generateKeyPair(type = "secp256k1") {
  const keyGeneratorFn = keyGenerators[type];
  if (!keyGeneratorFn) {
    throw new Error("Unsupported key type");
  }
  const [publicJwk, privateJwk] = await keyGeneratorFn();
  return { publicJwk, privateJwk };
}
async function sign(params = {}) {
  const { header = {}, payload, privateJwk } = params;
  switch (privateJwk.crv) {
    case "Ed25519":
      header.alg = "EdDSA";
      break;
    case "secp256k1":
      header.alg = "ES256K";
      break;
    default:
      throw new Error("Unsupported cryptographic type");
  }
  const textEncoder = new TextEncoder();
  const headerStr = JSON.stringify(header);
  const headerBytes = textEncoder.encode(headerStr);
  const headerBase64Url = base64url.baseEncode(headerBytes);
  const payloadStr = JSON.stringify(payload);
  const payloadBytes = textEncoder.encode(payloadStr);
  const payloadBase64Url = base64url.baseEncode(payloadBytes);
  const message = `${headerBase64Url}.${payloadBase64Url}`;
  let messageBytes = textEncoder.encode(message);
  if (privateJwk.crv === "secp256k1") {
    messageBytes = await sha256.encode(messageBytes);
  }
  const privateKeyBytes = base64url.baseDecode(privateJwk.d);
  let signatureBytes;
  if (privateJwk.crv === "Ed25519") {
    signatureBytes = await (void 0)(messageBytes, privateKeyBytes);
  } else if (privateJwk.crv === "secp256k1") {
    const signature2 = await (void 0)(messageBytes, privateKeyBytes);
    signatureBytes = signature2.toCompactRawBytes();
  }
  const signature = base64url.baseEncode(signatureBytes);
  return `${message}.${signature}`;
}
async function verify2(params = {}) {
  const { jws, publicJwk } = params;
  const [headerBase64Url, payloadBase64Url, signatureBase64Url] = jws.split(".");
  const message = `${headerBase64Url}.${payloadBase64Url}`;
  const messageBytes = new TextEncoder().encode(message);
  const signatureBytes = base64url.baseDecode(signatureBase64Url);
  switch (publicJwk.crv) {
    case "secp256k1": {
      const xBytes = base64url.baseDecode(publicJwk.x);
      const yBytes = base64url.baseDecode(publicJwk.y);
      const publicKeyBytes = new Uint8Array(xBytes.length + yBytes.length + 1);
      publicKeyBytes.set([4], 0);
      publicKeyBytes.set(xBytes, 1);
      publicKeyBytes.set(yBytes, xBytes.length + 1);
      const hashedMessage = await sha256.encode(messageBytes);
      return verify(signatureBytes, hashedMessage, publicKeyBytes);
    }
    case "Ed25519": {
      const publicKeyBytes = base64url.baseDecode(publicJwk.x);
      return (void 0)(signatureBytes, messageBytes, publicKeyBytes);
    }
    default:
      throw new Error("Unsupported cryptographic type");
  }
}
async function resolve(didUri, options = {}) {
  const { nodeEndpoint = "https://beta.discover.did.microsoft.com/1.0/identifiers" } = options;
  const response = await fetch(`${nodeEndpoint}/${didUri}`);
  if (response.status >= 400) {
    throw new Error(response.statusText);
  }
  return response.json();
}
async function anchor(anchorRequest, options = {}) {
  const {
    challengeEndpoint = "https://beta.ion.msidentity.com/api/v1.0/proof-of-work-challenge",
    solutionEndpoint = "https://beta.ion.msidentity.com/api/v1.0/operations"
  } = options;
  return import_ion_pow_sdk.default.submitIonRequest(challengeEndpoint, solutionEndpoint, JSON.stringify(anchorRequest));
}

// src/did.js
var DID = class {
  #ops;
  #opQueue = Promise.resolve();
  #longForm;
  #longFormPromise;
  #generateKeyPair;
  constructor(options = {}) {
    this.#ops = options.ops || [];
    this.#generateKeyPair = options.generateKeyPair || generateKeyPair;
    if (!this.#ops.length) {
      this.#ops.push(this.generateOperation("create", options.content || {}, false));
    }
  }
  async generateOperation(type, content, commit = true) {
    return this.#addToOpQueue(() => this.#generateOperation(type, content, commit));
  }
  async #addToOpQueue(callback = () => Promise.resolve()) {
    const opQueue = this.#opQueue;
    this.#opQueue = new Promise((resolve2, reject) => {
      opQueue.finally(() => callback().then(resolve2, reject));
    });
    return this.#opQueue;
  }
  async #generateOperation(type, content, commit) {
    let lastOp = this.#ops[this.#ops.length - 1];
    if (lastOp && lastOp.operation === "deactivate") {
      throw "Cannot perform further operations on a deactivated DID";
    }
    let op = {
      operation: type,
      content
    };
    if (type !== "create") {
      op.previous = this.#ops.reduce((last, op2) => {
        return op2.operation === type || op2.operation === "recover" && (type === "deactivate" || type === "update") ? op2 : last;
      }, this.#ops[0]);
    }
    if (type === "create" || type === "recover") {
      op.recovery = await this.#generateKeyPair();
    }
    if (type !== "deactivate") {
      op.update = await this.#generateKeyPair();
    }
    if (commit) {
      this.#ops.push(op);
    }
    return op;
  }
  async generateRequest(payload = 0, options = {}) {
    let op;
    if (typeof payload === "number") {
      await this.#addToOpQueue();
      op = await this.getOperation(payload);
    } else {
      op = payload;
    }
    switch (op.operation) {
      case "update":
        return import_ion_sdk2.IonRequest.createUpdateRequest({
          didSuffix: await this.getSuffix(),
          signer: options.signer || import_ion_sdk2.LocalSigner.create(op.previous.update.privateJwk),
          updatePublicKey: op.previous.update.publicJwk,
          nextUpdatePublicKey: op.update.publicJwk,
          servicesToAdd: op.content?.addServices,
          idsOfServicesToRemove: op.content?.removeServices,
          publicKeysToAdd: op.content?.addPublicKeys,
          idsOfPublicKeysToRemove: op.content?.removePublicKeys
        });
      case "recover":
        return import_ion_sdk2.IonRequest.createRecoverRequest({
          didSuffix: await this.getSuffix(),
          signer: options.signer || import_ion_sdk2.LocalSigner.create(op.previous.recovery.privateJwk),
          recoveryPublicKey: op.previous.recovery.publicJwk,
          nextRecoveryPublicKey: op.recovery.publicJwk,
          nextUpdatePublicKey: op.update.publicJwk,
          document: op.content
        });
      case "deactivate":
        return import_ion_sdk2.IonRequest.createDeactivateRequest({
          didSuffix: await this.getSuffix(),
          recoveryPublicKey: op.previous.recovery.publicJwk,
          signer: options.signer || import_ion_sdk2.LocalSigner.create(op.previous.recovery.privateJwk)
        });
      case "create":
      default:
        return import_ion_sdk2.IonRequest.createCreateRequest({
          recoveryKey: op.recovery.publicJwk,
          updateKey: op.update.publicJwk,
          document: op.content
        });
    }
  }
  async getAllOperations() {
    return Promise.all(this.#ops);
  }
  async getOperation(index) {
    return this.#ops[index];
  }
  async getState() {
    const [shortForm, longForm, ops] = await Promise.all([
      this.getURI("short"),
      this.getURI(),
      this.getAllOperations()
    ]);
    return { shortForm, longForm, ops };
  }
  async getSuffix() {
    const uri = await this.getURI("short");
    return uri.split(":").pop();
  }
  async getURI(form = "long") {
    if (this.#longFormPromise) {
      await this.#longFormPromise;
    }
    if (!this.#longForm) {
      this.#longFormPromise = this.#addToOpQueue(async () => {
        const create2 = await this.getOperation(0);
        return import_ion_sdk2.IonDid.createLongFormDid({
          recoveryKey: create2.recovery.publicJwk,
          updateKey: create2.update.publicJwk,
          document: create2.content
        });
      });
      this.#longForm = await this.#longFormPromise;
      this.#longFormPromise = void 0;
    }
    return !form || form === "long" ? this.#longForm : this.#longForm.split(":").slice(0, -1).join(":");
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DID,
  anchor,
  generateKeyPair,
  resolve,
  sign,
  verify
});
/*! Bundled license information:

uri-js/dist/es5/uri.all.js:
  (** @license URI.js v4.4.0 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js *)

@noble/ed25519/lib/index.js:
  (*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)

@noble/secp256k1/lib/index.js:
  (*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)

@noble/ed25519/lib/esm/index.js:
  (*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)

@noble/secp256k1/lib/esm/index.js:
  (*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=index.js.map
