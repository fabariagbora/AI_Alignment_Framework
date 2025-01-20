var IonTools = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod3) => function __require() {
    return mod3 || (0, cb[__getOwnPropNames(cb)[0]])((mod3 = { exports: {} }).exports, mod3), mod3.exports;
  };
  var __export = (target, all) => {
    for (var name2 in all)
      __defProp(target, name2, { get: all[name2], enumerable: true });
  };
  var __copyProps = (to, from5, except, desc) => {
    if (from5 && typeof from5 === "object" || typeof from5 === "function") {
      for (let key of __getOwnPropNames(from5))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from5[key], enumerable: !(desc = __getOwnPropDesc(from5, key)) || desc.enumerable });
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
        constructor(code2, message) {
          super(`${code2}: ${message}`);
          this.code = code2;
          Object.setPrototypeOf(this, new.target.prototype);
        }
      };
      exports.default = IonError;
    }
  });

  // node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/vendor/base-x.js
  var init_base_x = __esm({
    "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/vendor/base-x.js"() {
    }
  });

  // node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/bytes.js
  var empty;
  var init_bytes = __esm({
    "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/bytes.js"() {
      empty = new Uint8Array(0);
    }
  });

  // node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/bases/base.js
  var Encoder, Decoder, ComposedDecoder, or, Codec, from, decode, encode, rfc4648;
  var init_base = __esm({
    "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/bases/base.js"() {
      init_base_x();
      init_bytes();
      Encoder = class {
        constructor(name2, prefix, baseEncode) {
          this.name = name2;
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
      Decoder = class {
        constructor(name2, prefix, baseDecode) {
          this.name = name2;
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
          return or(this, decoder);
        }
      };
      ComposedDecoder = class {
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
      or = (left, right) => new ComposedDecoder({
        ...left.decoders || { [left.prefix]: left },
        ...right.decoders || { [right.prefix]: right }
      });
      Codec = class {
        constructor(name2, prefix, baseEncode, baseDecode) {
          this.name = name2;
          this.prefix = prefix;
          this.baseEncode = baseEncode;
          this.baseDecode = baseDecode;
          this.encoder = new Encoder(name2, prefix, baseEncode);
          this.decoder = new Decoder(name2, prefix, baseDecode);
        }
        encode(input) {
          return this.encoder.encode(input);
        }
        decode(input) {
          return this.decoder.decode(input);
        }
      };
      from = ({ name: name2, prefix, encode: encode6, decode: decode8 }) => new Codec(name2, prefix, encode6, decode8);
      decode = (string2, alphabet, bitsPerChar, name2) => {
        const codes = {};
        for (let i = 0; i < alphabet.length; ++i) {
          codes[alphabet[i]] = i;
        }
        let end = string2.length;
        while (string2[end - 1] === "=") {
          --end;
        }
        const out = new Uint8Array(end * bitsPerChar / 8 | 0);
        let bits = 0;
        let buffer = 0;
        let written = 0;
        for (let i = 0; i < end; ++i) {
          const value = codes[string2[i]];
          if (value === void 0) {
            throw new SyntaxError(`Non-${name2} character`);
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
      encode = (data, alphabet, bitsPerChar) => {
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
      rfc4648 = ({ name: name2, prefix, bitsPerChar, alphabet }) => {
        return from({
          prefix,
          name: name2,
          encode(input) {
            return encode(input, alphabet, bitsPerChar);
          },
          decode(input) {
            return decode(input, alphabet, bitsPerChar, name2);
          }
        });
      };
    }
  });

  // node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/bases/base64.js
  var base64_exports = {};
  __export(base64_exports, {
    base64: () => base64,
    base64pad: () => base64pad,
    base64url: () => base64url,
    base64urlpad: () => base64urlpad
  });
  var base64, base64pad, base64url, base64urlpad;
  var init_base64 = __esm({
    "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/bases/base64.js"() {
      init_base();
      base64 = rfc4648({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
      });
      base64pad = rfc4648({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
      });
      base64url = rfc4648({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
      });
      base64urlpad = rfc4648({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
      });
    }
  });

  // node_modules/@decentralized-identity/ion-sdk/dist/lib/Encoder.js
  var require_Encoder = __commonJS({
    "node_modules/@decentralized-identity/ion-sdk/dist/lib/Encoder.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var ErrorCode_1 = require_ErrorCode();
      var IonError_1 = require_IonError();
      var base64_1 = (init_base64(), __toCommonJS(base64_exports));
      var Encoder3 = class {
        static encode(content) {
          const encodedContent = base64_1.base64url.baseEncode(content);
          return encodedContent;
        }
        static decodeAsBytes(encodedContent, inputContextForErrorLogging) {
          if (!Encoder3.isBase64UrlString(encodedContent)) {
            throw new IonError_1.default(ErrorCode_1.default.EncodedStringIncorrectEncoding, `Given ${inputContextForErrorLogging} must be base64url string.`);
          }
          return base64_1.base64url.baseDecode(encodedContent);
        }
        static decodeAsString(encodedContent, inputContextForErrorLogging) {
          const rawBytes = Encoder3.decodeAsBytes(encodedContent, inputContextForErrorLogging);
          return Encoder3.bytesToString(rawBytes);
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
      exports.default = Encoder3;
    }
  });

  // node_modules/uri-js/dist/es5/uri.all.js
  var require_uri_all = __commonJS({
    "node_modules/uri-js/dist/es5/uri.all.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global2.URI = global2.URI || {});
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
        var base3 = 36;
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
        var baseMinusTMin = base3 - tMin;
        var floor = Math.floor;
        var stringFromCharCode = String.fromCharCode;
        function error$1(type) {
          throw new RangeError(errors[type]);
        }
        function map(array, fn) {
          var result = [];
          var length3 = array.length;
          while (length3--) {
            result[length3] = fn(array[length3]);
          }
          return result;
        }
        function mapDomain(string2, fn) {
          var parts = string2.split("@");
          var result = "";
          if (parts.length > 1) {
            result = parts[0] + "@";
            string2 = parts[1];
          }
          string2 = string2.replace(regexSeparators, ".");
          var labels = string2.split(".");
          var encoded = map(labels, fn).join(".");
          return result + encoded;
        }
        function ucs2decode(string2) {
          var output = [];
          var counter = 0;
          var length3 = string2.length;
          while (counter < length3) {
            var value = string2.charCodeAt(counter++);
            if (value >= 55296 && value <= 56319 && counter < length3) {
              var extra = string2.charCodeAt(counter++);
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
          return base3;
        };
        var digitToBasic = function digitToBasic2(digit, flag) {
          return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
        };
        var adapt = function adapt2(delta, numPoints, firstTime) {
          var k = 0;
          delta = firstTime ? floor(delta / damp) : delta >> 1;
          delta += floor(delta / numPoints);
          for (; delta > baseMinusTMin * tMax >> 1; k += base3) {
            delta = floor(delta / baseMinusTMin);
          }
          return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
        };
        var decode8 = function decode9(input) {
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
            for (var w = 1, k = base3; ; k += base3) {
              if (index >= inputLength) {
                error$1("invalid-input");
              }
              var digit = basicToDigit(input.charCodeAt(index++));
              if (digit >= base3 || digit > floor((maxInt - i) / w)) {
                error$1("overflow");
              }
              i += digit * w;
              var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (digit < t) {
                break;
              }
              var baseMinusT = base3 - t;
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
        var encode6 = function encode7(input) {
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
                  for (var k = base3; ; k += base3) {
                    var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                    if (q < t) {
                      break;
                    }
                    var qMinusT = q - t;
                    var baseMinusT = base3 - t;
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
          return mapDomain(input, function(string2) {
            return regexPunycode.test(string2) ? decode8(string2.slice(4).toLowerCase()) : string2;
          });
        };
        var toASCII = function toASCII2(input) {
          return mapDomain(input, function(string2) {
            return regexNonASCII.test(string2) ? "xn--" + encode6(string2) : string2;
          });
        };
        var punycode = {
          "version": "2.1.0",
          "ucs2": {
            "decode": ucs2decode,
            "encode": ucs2encode
          },
          "decode": decode8,
          "encode": encode6,
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
        function resolveComponents(base4, relative) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var skipNormalization = arguments[3];
          var target = {};
          if (!skipNormalization) {
            base4 = parse(serialize(base4, options), options);
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
                target.path = base4.path;
                if (relative.query !== void 0) {
                  target.query = relative.query;
                } else {
                  target.query = base4.query;
                }
              } else {
                if (relative.path.charAt(0) === "/") {
                  target.path = removeDotSegments(relative.path);
                } else {
                  if ((base4.userinfo !== void 0 || base4.host !== void 0 || base4.port !== void 0) && !base4.path) {
                    target.path = "/" + relative.path;
                  } else if (!base4.path) {
                    target.path = relative.path;
                  } else {
                    target.path = base4.path.slice(0, base4.path.lastIndexOf("/") + 1) + relative.path;
                  }
                  target.path = removeDotSegments(target.path);
                }
                target.query = relative.query;
              }
              target.userinfo = base4.userinfo;
              target.host = base4.host;
              target.port = base4.port;
            }
            target.scheme = base4.scheme;
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
            for (var name2 in headers) {
              if (headers[name2] !== O[name2]) {
                fields.push(name2.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name2].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
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
    "node_modules/canonicalize/lib/canonicalize.js"(exports, module) {
      "use strict";
      module.exports = function(object) {
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
    "node_modules/@multiformats/base-x/src/index.js"(exports, module) {
      "use strict";
      function base3(ALPHABET) {
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
        function encode6(source) {
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
          var length3 = 0;
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
            for (var it1 = size - 1; (carry !== 0 || i2 < length3) && it1 !== -1; it1--, i2++) {
              carry += 256 * b58[it1] >>> 0;
              b58[it1] = carry % BASE >>> 0;
              carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
              throw new Error("Non-zero carry");
            }
            length3 = i2;
            pbegin++;
          }
          var it2 = size - length3;
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
          var length3 = 0;
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
            for (var it3 = size - 1; (carry !== 0 || i2 < length3) && it3 !== -1; it3--, i2++) {
              carry += BASE * b256[it3] >>> 0;
              b256[it3] = carry % 256 >>> 0;
              carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
              throw new Error("Non-zero carry");
            }
            length3 = i2;
            psz++;
          }
          if (source[psz] === " ") {
            return;
          }
          var it4 = size - length3;
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
        function decode8(string2) {
          var buffer = decodeUnsafe(string2);
          if (buffer) {
            return buffer;
          }
          throw new Error("Non-base" + BASE + " character");
        }
        return {
          encode: encode6,
          decodeUnsafe,
          decode: decode8
        };
      }
      module.exports = base3;
    }
  });

  // node_modules/multibase/src/util.js
  var require_util = __commonJS({
    "node_modules/multibase/src/util.js"(exports, module) {
      "use strict";
      var textDecoder2 = new TextDecoder();
      var decodeText = (bytes) => textDecoder2.decode(bytes);
      var textEncoder2 = new TextEncoder();
      var encodeText = (text) => textEncoder2.encode(text);
      function concat2(arrs, length3) {
        const output = new Uint8Array(length3);
        let offset = 0;
        for (const arr of arrs) {
          output.set(arr, offset);
          offset += arr.length;
        }
        return output;
      }
      module.exports = { decodeText, encodeText, concat: concat2 };
    }
  });

  // node_modules/multibase/src/base.js
  var require_base = __commonJS({
    "node_modules/multibase/src/base.js"(exports, module) {
      "use strict";
      var { encodeText } = require_util();
      var Base = class {
        constructor(name2, code2, factory, alphabet) {
          this.name = name2;
          this.code = code2;
          this.codeBuf = encodeText(this.code);
          this.alphabet = alphabet;
          this.codec = factory(alphabet);
        }
        encode(buf) {
          return this.codec.encode(buf);
        }
        decode(string2) {
          for (const char of string2) {
            if (this.alphabet && this.alphabet.indexOf(char) < 0) {
              throw new Error(`invalid character '${char}' in '${string2}'`);
            }
          }
          return this.codec.decode(string2);
        }
      };
      module.exports = Base;
    }
  });

  // node_modules/multibase/src/rfc4648.js
  var require_rfc4648 = __commonJS({
    "node_modules/multibase/src/rfc4648.js"(exports, module) {
      "use strict";
      var decode8 = (string2, alphabet, bitsPerChar) => {
        const codes = {};
        for (let i = 0; i < alphabet.length; ++i) {
          codes[alphabet[i]] = i;
        }
        let end = string2.length;
        while (string2[end - 1] === "=") {
          --end;
        }
        const out = new Uint8Array(end * bitsPerChar / 8 | 0);
        let bits = 0;
        let buffer = 0;
        let written = 0;
        for (let i = 0; i < end; ++i) {
          const value = codes[string2[i]];
          if (value === void 0) {
            throw new SyntaxError("Invalid character " + string2[i]);
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
      var encode6 = (data, alphabet, bitsPerChar) => {
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
      var rfc46483 = (bitsPerChar) => (alphabet) => {
        return {
          encode(input) {
            return encode6(input, alphabet, bitsPerChar);
          },
          decode(input) {
            return decode8(input, alphabet, bitsPerChar);
          }
        };
      };
      module.exports = { rfc4648: rfc46483 };
    }
  });

  // node_modules/multibase/src/constants.js
  var require_constants = __commonJS({
    "node_modules/multibase/src/constants.js"(exports, module) {
      "use strict";
      var baseX2 = require_src();
      var Base = require_base();
      var { rfc4648: rfc46483 } = require_rfc4648();
      var { decodeText, encodeText } = require_util();
      var identity3 = () => {
        return {
          encode: decodeText,
          decode: encodeText
        };
      };
      var constants = [
        ["identity", "\0", identity3, ""],
        ["base2", "0", rfc46483(1), "01"],
        ["base8", "7", rfc46483(3), "01234567"],
        ["base10", "9", baseX2, "0123456789"],
        ["base16", "f", rfc46483(4), "0123456789abcdef"],
        ["base16upper", "F", rfc46483(4), "0123456789ABCDEF"],
        ["base32hex", "v", rfc46483(5), "0123456789abcdefghijklmnopqrstuv"],
        ["base32hexupper", "V", rfc46483(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV"],
        ["base32hexpad", "t", rfc46483(5), "0123456789abcdefghijklmnopqrstuv="],
        ["base32hexpadupper", "T", rfc46483(5), "0123456789ABCDEFGHIJKLMNOPQRSTUV="],
        ["base32", "b", rfc46483(5), "abcdefghijklmnopqrstuvwxyz234567"],
        ["base32upper", "B", rfc46483(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"],
        ["base32pad", "c", rfc46483(5), "abcdefghijklmnopqrstuvwxyz234567="],
        ["base32padupper", "C", rfc46483(5), "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567="],
        ["base32z", "h", rfc46483(5), "ybndrfg8ejkmcpqxot1uwisza345h769"],
        ["base36", "k", baseX2, "0123456789abcdefghijklmnopqrstuvwxyz"],
        ["base36upper", "K", baseX2, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
        ["base58btc", "z", baseX2, "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],
        ["base58flickr", "Z", baseX2, "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"],
        ["base64", "m", rfc46483(6), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],
        ["base64pad", "M", rfc46483(6), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],
        ["base64url", "u", rfc46483(6), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"],
        ["base64urlpad", "U", rfc46483(6), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="]
      ];
      var names = constants.reduce((prev, tupple) => {
        prev[tupple[0]] = new Base(tupple[0], tupple[1], tupple[2], tupple[3]);
        return prev;
      }, {});
      var codes = constants.reduce((prev, tupple) => {
        prev[tupple[1]] = names[tupple[0]];
        return prev;
      }, {});
      module.exports = {
        names,
        codes
      };
    }
  });

  // node_modules/multibase/src/index.js
  var require_src2 = __commonJS({
    "node_modules/multibase/src/index.js"(exports, module) {
      "use strict";
      var constants = require_constants();
      var { encodeText, decodeText, concat: concat2 } = require_util();
      function multibase(nameOrCode, buf) {
        if (!buf) {
          throw new Error("requires an encoded Uint8Array");
        }
        const { name: name2, codeBuf } = encoding(nameOrCode);
        validEncode(name2, buf);
        return concat2([codeBuf, buf], codeBuf.length + buf.length);
      }
      function encode6(nameOrCode, buf) {
        const enc = encoding(nameOrCode);
        const data = encodeText(enc.encode(buf));
        return concat2([enc.codeBuf, data], enc.codeBuf.length + data.length);
      }
      function decode8(data) {
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
      function validEncode(name2, buf) {
        const enc = encoding(name2);
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
      exports = module.exports = multibase;
      exports.encode = encode6;
      exports.decode = decode8;
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
    "node_modules/varint/encode.js"(exports, module) {
      module.exports = encode6;
      var MSB3 = 128;
      var REST3 = 127;
      var MSBALL3 = ~REST3;
      var INT3 = Math.pow(2, 31);
      function encode6(num, out, offset) {
        out = out || [];
        offset = offset || 0;
        var oldOffset = offset;
        while (num >= INT3) {
          out[offset++] = num & 255 | MSB3;
          num /= 128;
        }
        while (num & MSBALL3) {
          out[offset++] = num & 255 | MSB3;
          num >>>= 7;
        }
        out[offset] = num | 0;
        encode6.bytes = offset - oldOffset + 1;
        return out;
      }
    }
  });

  // node_modules/varint/decode.js
  var require_decode = __commonJS({
    "node_modules/varint/decode.js"(exports, module) {
      module.exports = read3;
      var MSB3 = 128;
      var REST3 = 127;
      function read3(buf, offset) {
        var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
        do {
          if (counter >= l) {
            read3.bytes = 0;
            throw new RangeError("Could not decode varint");
          }
          b = buf[counter++];
          res += shift < 28 ? (b & REST3) << shift : (b & REST3) * Math.pow(2, shift);
          shift += 7;
        } while (b >= MSB3);
        read3.bytes = counter - offset;
        return res;
      }
    }
  });

  // node_modules/varint/length.js
  var require_length = __commonJS({
    "node_modules/varint/length.js"(exports, module) {
      var N13 = Math.pow(2, 7);
      var N23 = Math.pow(2, 14);
      var N33 = Math.pow(2, 21);
      var N43 = Math.pow(2, 28);
      var N53 = Math.pow(2, 35);
      var N63 = Math.pow(2, 42);
      var N73 = Math.pow(2, 49);
      var N83 = Math.pow(2, 56);
      var N93 = Math.pow(2, 63);
      module.exports = function(value) {
        return value < N13 ? 1 : value < N23 ? 2 : value < N33 ? 3 : value < N43 ? 4 : value < N53 ? 5 : value < N63 ? 6 : value < N73 ? 7 : value < N83 ? 8 : value < N93 ? 9 : 10;
      };
    }
  });

  // node_modules/varint/index.js
  var require_varint = __commonJS({
    "node_modules/varint/index.js"(exports, module) {
      module.exports = {
        encode: require_encode(),
        decode: require_decode(),
        encodingLength: require_length()
      };
    }
  });

  // node_modules/multihashes/src/constants.js
  var require_constants2 = __commonJS({
    "node_modules/multihashes/src/constants.js"(exports, module) {
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
      module.exports = { names };
    }
  });

  // node_modules/multiformats/esm/vendor/base-x.js
  function base(ALPHABET, name2) {
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
    function encode6(source) {
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
      var length3 = 0;
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
        for (var it1 = size - 1; (carry !== 0 || i2 < length3) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length3 = i2;
        pbegin++;
      }
      var it2 = size - length3;
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
      var length3 = 0;
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
        for (var it3 = size - 1; (carry !== 0 || i2 < length3) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length3 = i2;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size - length3;
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
    function decode8(string2) {
      var buffer = decodeUnsafe(string2);
      if (buffer) {
        return buffer;
      }
      throw new Error(`Non-${name2} character`);
    }
    return {
      encode: encode6,
      decodeUnsafe,
      decode: decode8
    };
  }
  var src, _brrp__multiformats_scope_baseX, base_x_default2;
  var init_base_x2 = __esm({
    "node_modules/multiformats/esm/vendor/base-x.js"() {
      src = base;
      _brrp__multiformats_scope_baseX = src;
      base_x_default2 = _brrp__multiformats_scope_baseX;
    }
  });

  // node_modules/multiformats/esm/src/bytes.js
  var empty2, equals, coerce2, fromString, toString;
  var init_bytes2 = __esm({
    "node_modules/multiformats/esm/src/bytes.js"() {
      empty2 = new Uint8Array(0);
      equals = (aa, bb) => {
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
      coerce2 = (o) => {
        if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
          return o;
        if (o instanceof ArrayBuffer)
          return new Uint8Array(o);
        if (ArrayBuffer.isView(o)) {
          return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
        }
        throw new Error("Unknown type, must be binary type");
      };
      fromString = (str) => new TextEncoder().encode(str);
      toString = (b) => new TextDecoder().decode(b);
    }
  });

  // node_modules/multiformats/esm/src/bases/base.js
  var Encoder2, Decoder2, ComposedDecoder2, or2, Codec2, from2, baseX, decode2, encode2, rfc46482;
  var init_base2 = __esm({
    "node_modules/multiformats/esm/src/bases/base.js"() {
      init_base_x2();
      init_bytes2();
      Encoder2 = class {
        constructor(name2, prefix, baseEncode) {
          this.name = name2;
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
      Decoder2 = class {
        constructor(name2, prefix, baseDecode) {
          this.name = name2;
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
      ComposedDecoder2 = class {
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
      or2 = (left, right) => new ComposedDecoder2({
        ...left.decoders || { [left.prefix]: left },
        ...right.decoders || { [right.prefix]: right }
      });
      Codec2 = class {
        constructor(name2, prefix, baseEncode, baseDecode) {
          this.name = name2;
          this.prefix = prefix;
          this.baseEncode = baseEncode;
          this.baseDecode = baseDecode;
          this.encoder = new Encoder2(name2, prefix, baseEncode);
          this.decoder = new Decoder2(name2, prefix, baseDecode);
        }
        encode(input) {
          return this.encoder.encode(input);
        }
        decode(input) {
          return this.decoder.decode(input);
        }
      };
      from2 = ({ name: name2, prefix, encode: encode6, decode: decode8 }) => new Codec2(name2, prefix, encode6, decode8);
      baseX = ({ prefix, name: name2, alphabet }) => {
        const { encode: encode6, decode: decode8 } = base_x_default2(alphabet, name2);
        return from2({
          prefix,
          name: name2,
          encode: encode6,
          decode: (text) => coerce2(decode8(text))
        });
      };
      decode2 = (string2, alphabet, bitsPerChar, name2) => {
        const codes = {};
        for (let i = 0; i < alphabet.length; ++i) {
          codes[alphabet[i]] = i;
        }
        let end = string2.length;
        while (string2[end - 1] === "=") {
          --end;
        }
        const out = new Uint8Array(end * bitsPerChar / 8 | 0);
        let bits = 0;
        let buffer = 0;
        let written = 0;
        for (let i = 0; i < end; ++i) {
          const value = codes[string2[i]];
          if (value === void 0) {
            throw new SyntaxError(`Non-${name2} character`);
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
      encode2 = (data, alphabet, bitsPerChar) => {
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
      rfc46482 = ({ name: name2, prefix, bitsPerChar, alphabet }) => {
        return from2({
          prefix,
          name: name2,
          encode(input) {
            return encode2(input, alphabet, bitsPerChar);
          },
          decode(input) {
            return decode2(input, alphabet, bitsPerChar, name2);
          }
        });
      };
    }
  });

  // node_modules/multiformats/esm/src/bases/identity.js
  var identity_exports = {};
  __export(identity_exports, {
    identity: () => identity
  });
  var identity;
  var init_identity = __esm({
    "node_modules/multiformats/esm/src/bases/identity.js"() {
      init_base2();
      init_bytes2();
      identity = from2({
        prefix: "\0",
        name: "identity",
        encode: (buf) => toString(buf),
        decode: (str) => fromString(str)
      });
    }
  });

  // node_modules/multiformats/esm/src/bases/base2.js
  var base2_exports = {};
  __export(base2_exports, {
    base2: () => base2
  });
  var base2;
  var init_base22 = __esm({
    "node_modules/multiformats/esm/src/bases/base2.js"() {
      init_base2();
      base2 = rfc46482({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1
      });
    }
  });

  // node_modules/multiformats/esm/src/bases/base8.js
  var base8_exports = {};
  __export(base8_exports, {
    base8: () => base8
  });
  var base8;
  var init_base8 = __esm({
    "node_modules/multiformats/esm/src/bases/base8.js"() {
      init_base2();
      base8 = rfc46482({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3
      });
    }
  });

  // node_modules/multiformats/esm/src/bases/base10.js
  var base10_exports = {};
  __export(base10_exports, {
    base10: () => base10
  });
  var base10;
  var init_base10 = __esm({
    "node_modules/multiformats/esm/src/bases/base10.js"() {
      init_base2();
      base10 = baseX({
        prefix: "9",
        name: "base10",
        alphabet: "0123456789"
      });
    }
  });

  // node_modules/multiformats/esm/src/bases/base16.js
  var base16_exports = {};
  __export(base16_exports, {
    base16: () => base16,
    base16upper: () => base16upper
  });
  var base16, base16upper;
  var init_base16 = __esm({
    "node_modules/multiformats/esm/src/bases/base16.js"() {
      init_base2();
      base16 = rfc46482({
        prefix: "f",
        name: "base16",
        alphabet: "0123456789abcdef",
        bitsPerChar: 4
      });
      base16upper = rfc46482({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
      });
    }
  });

  // node_modules/multiformats/esm/src/bases/base32.js
  var base32_exports = {};
  __export(base32_exports, {
    base32: () => base32,
    base32hex: () => base32hex,
    base32hexpad: () => base32hexpad,
    base32hexpadupper: () => base32hexpadupper,
    base32hexupper: () => base32hexupper,
    base32pad: () => base32pad,
    base32padupper: () => base32padupper,
    base32upper: () => base32upper,
    base32z: () => base32z
  });
  var base32, base32upper, base32pad, base32padupper, base32hex, base32hexupper, base32hexpad, base32hexpadupper, base32z;
  var init_base32 = __esm({
    "node_modules/multiformats/esm/src/bases/base32.js"() {
      init_base2();
      base32 = rfc46482({
        prefix: "b",
        name: "base32",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567",
        bitsPerChar: 5
      });
      base32upper = rfc46482({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
      });
      base32pad = rfc46482({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
      });
      base32padupper = rfc46482({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
      });
      base32hex = rfc46482({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
      });
      base32hexupper = rfc46482({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
      });
      base32hexpad = rfc46482({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
      });
      base32hexpadupper = rfc46482({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
      });
      base32z = rfc46482({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
      });
    }
  });

  // node_modules/multiformats/esm/src/bases/base36.js
  var base36_exports = {};
  __export(base36_exports, {
    base36: () => base36,
    base36upper: () => base36upper
  });
  var base36, base36upper;
  var init_base36 = __esm({
    "node_modules/multiformats/esm/src/bases/base36.js"() {
      init_base2();
      base36 = baseX({
        prefix: "k",
        name: "base36",
        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
      });
      base36upper = baseX({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      });
    }
  });

  // node_modules/multiformats/esm/src/bases/base58.js
  var base58_exports = {};
  __export(base58_exports, {
    base58btc: () => base58btc,
    base58flickr: () => base58flickr
  });
  var base58btc, base58flickr;
  var init_base58 = __esm({
    "node_modules/multiformats/esm/src/bases/base58.js"() {
      init_base2();
      base58btc = baseX({
        name: "base58btc",
        prefix: "z",
        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      });
      base58flickr = baseX({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
      });
    }
  });

  // node_modules/multiformats/esm/src/bases/base64.js
  var base64_exports2 = {};
  __export(base64_exports2, {
    base64: () => base642,
    base64pad: () => base64pad2,
    base64url: () => base64url2,
    base64urlpad: () => base64urlpad2
  });
  var base642, base64pad2, base64url2, base64urlpad2;
  var init_base642 = __esm({
    "node_modules/multiformats/esm/src/bases/base64.js"() {
      init_base2();
      base642 = rfc46482({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
      });
      base64pad2 = rfc46482({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
      });
      base64url2 = rfc46482({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
      });
      base64urlpad2 = rfc46482({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
      });
    }
  });

  // node_modules/multiformats/esm/vendor/varint.js
  function encode3(num, out, offset) {
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
    encode3.bytes = offset - oldOffset + 1;
    return out;
  }
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
  var encode_1, MSB, REST, MSBALL, INT, decode3, MSB$1, REST$1, N1, N2, N3, N4, N5, N6, N7, N8, N9, length, varint, _brrp_varint, varint_default;
  var init_varint = __esm({
    "node_modules/multiformats/esm/vendor/varint.js"() {
      encode_1 = encode3;
      MSB = 128;
      REST = 127;
      MSBALL = ~REST;
      INT = Math.pow(2, 31);
      decode3 = read;
      MSB$1 = 128;
      REST$1 = 127;
      N1 = Math.pow(2, 7);
      N2 = Math.pow(2, 14);
      N3 = Math.pow(2, 21);
      N4 = Math.pow(2, 28);
      N5 = Math.pow(2, 35);
      N6 = Math.pow(2, 42);
      N7 = Math.pow(2, 49);
      N8 = Math.pow(2, 56);
      N9 = Math.pow(2, 63);
      length = function(value) {
        return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
      };
      varint = {
        encode: encode_1,
        decode: decode3,
        encodingLength: length
      };
      _brrp_varint = varint;
      varint_default = _brrp_varint;
    }
  });

  // node_modules/multiformats/esm/src/varint.js
  var decode4, encodeTo, encodingLength;
  var init_varint2 = __esm({
    "node_modules/multiformats/esm/src/varint.js"() {
      init_varint();
      decode4 = (data) => {
        const code2 = varint_default.decode(data);
        return [
          code2,
          varint_default.decode.bytes
        ];
      };
      encodeTo = (int, target, offset = 0) => {
        varint_default.encode(int, target, offset);
        return target;
      };
      encodingLength = (int) => {
        return varint_default.encodingLength(int);
      };
    }
  });

  // node_modules/multiformats/esm/src/hashes/digest.js
  var create, decode5, equals2, Digest;
  var init_digest = __esm({
    "node_modules/multiformats/esm/src/hashes/digest.js"() {
      init_bytes2();
      init_varint2();
      create = (code2, digest2) => {
        const size = digest2.byteLength;
        const sizeOffset = encodingLength(code2);
        const digestOffset = sizeOffset + encodingLength(size);
        const bytes = new Uint8Array(digestOffset + size);
        encodeTo(code2, bytes, 0);
        encodeTo(size, bytes, sizeOffset);
        bytes.set(digest2, digestOffset);
        return new Digest(code2, size, digest2, bytes);
      };
      decode5 = (multihash) => {
        const bytes = coerce2(multihash);
        const [code2, sizeOffset] = decode4(bytes);
        const [size, digestOffset] = decode4(bytes.subarray(sizeOffset));
        const digest2 = bytes.subarray(sizeOffset + digestOffset);
        if (digest2.byteLength !== size) {
          throw new Error("Incorrect length");
        }
        return new Digest(code2, size, digest2, bytes);
      };
      equals2 = (a, b) => {
        if (a === b) {
          return true;
        } else {
          return a.code === b.code && a.size === b.size && equals(a.bytes, b.bytes);
        }
      };
      Digest = class {
        constructor(code2, size, digest2, bytes) {
          this.code = code2;
          this.size = size;
          this.digest = digest2;
          this.bytes = bytes;
        }
      };
    }
  });

  // node_modules/multiformats/esm/src/hashes/hasher.js
  var from3, Hasher;
  var init_hasher = __esm({
    "node_modules/multiformats/esm/src/hashes/hasher.js"() {
      init_digest();
      from3 = ({ name: name2, code: code2, encode: encode6 }) => new Hasher(name2, code2, encode6);
      Hasher = class {
        constructor(name2, code2, encode6) {
          this.name = name2;
          this.code = code2;
          this.encode = encode6;
        }
        digest(input) {
          if (input instanceof Uint8Array) {
            const result = this.encode(input);
            return result instanceof Uint8Array ? create(this.code, result) : result.then((digest2) => create(this.code, digest2));
          } else {
            throw Error("Unknown type, must be binary type");
          }
        }
      };
    }
  });

  // node_modules/multiformats/esm/src/hashes/sha2-browser.js
  var sha2_browser_exports = {};
  __export(sha2_browser_exports, {
    sha256: () => sha256,
    sha512: () => sha512
  });
  var sha, sha256, sha512;
  var init_sha2_browser = __esm({
    "node_modules/multiformats/esm/src/hashes/sha2-browser.js"() {
      init_hasher();
      sha = (name2) => async (data) => new Uint8Array(await crypto.subtle.digest(name2, data));
      sha256 = from3({
        name: "sha2-256",
        code: 18,
        encode: sha("SHA-256")
      });
      sha512 = from3({
        name: "sha2-512",
        code: 19,
        encode: sha("SHA-512")
      });
    }
  });

  // node_modules/multiformats/esm/src/hashes/identity.js
  var identity_exports2 = {};
  __export(identity_exports2, {
    identity: () => identity2
  });
  var code, name, encode4, digest, identity2;
  var init_identity2 = __esm({
    "node_modules/multiformats/esm/src/hashes/identity.js"() {
      init_bytes2();
      init_digest();
      code = 0;
      name = "identity";
      encode4 = coerce2;
      digest = (input) => create(code, encode4(input));
      identity2 = {
        code,
        name,
        encode: encode4,
        digest
      };
    }
  });

  // node_modules/multiformats/esm/src/codecs/raw.js
  var init_raw = __esm({
    "node_modules/multiformats/esm/src/codecs/raw.js"() {
      init_bytes2();
    }
  });

  // node_modules/multiformats/esm/src/codecs/json.js
  var textEncoder, textDecoder;
  var init_json = __esm({
    "node_modules/multiformats/esm/src/codecs/json.js"() {
      textEncoder = new TextEncoder();
      textDecoder = new TextDecoder();
    }
  });

  // node_modules/multiformats/esm/src/cid.js
  var CID, parseCIDtoBytes, toStringV0, toStringV1, DAG_PB_CODE, SHA_256_CODE, encodeCID, cidSymbol, readonly, hidden, version, deprecate, IS_CID_DEPRECATION;
  var init_cid = __esm({
    "node_modules/multiformats/esm/src/cid.js"() {
      init_varint2();
      init_digest();
      init_base58();
      init_base32();
      init_bytes2();
      CID = class {
        constructor(version2, code2, multihash, bytes) {
          this.code = code2;
          this.version = version2;
          this.multihash = multihash;
          this.bytes = bytes;
          this.byteOffset = bytes.byteOffset;
          this.byteLength = bytes.byteLength;
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
              const { code: code2, multihash } = this;
              if (code2 !== DAG_PB_CODE) {
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
              const { code: code2, digest: digest2 } = this.multihash;
              const multihash = create(code2, digest2);
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
          return other && this.code === other.code && this.version === other.version && equals2(this.multihash, other.multihash);
        }
        toString(base3) {
          const { bytes, version: version2, _baseCache } = this;
          switch (version2) {
            case 0:
              return toStringV0(bytes, _baseCache, base3 || base58btc.encoder);
            default:
              return toStringV1(bytes, _baseCache, base3 || base32.encoder);
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
            const { version: version2, code: code2, multihash, bytes } = value;
            return new CID(version2, code2, multihash, bytes || encodeCID(version2, code2, multihash.bytes));
          } else if (value != null && value[cidSymbol] === true) {
            const { version: version2, multihash, code: code2 } = value;
            const digest2 = decode5(multihash);
            return CID.create(version2, code2, digest2);
          } else {
            return null;
          }
        }
        static create(version2, code2, digest2) {
          if (typeof code2 !== "number") {
            throw new Error("String codecs are no longer supported");
          }
          switch (version2) {
            case 0: {
              if (code2 !== DAG_PB_CODE) {
                throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
              } else {
                return new CID(version2, code2, digest2, digest2.bytes);
              }
            }
            case 1: {
              const bytes = encodeCID(version2, code2, digest2.bytes);
              return new CID(version2, code2, digest2, bytes);
            }
            default: {
              throw new Error("Invalid version");
            }
          }
        }
        static createV0(digest2) {
          return CID.create(0, DAG_PB_CODE, digest2);
        }
        static createV1(code2, digest2) {
          return CID.create(1, code2, digest2);
        }
        static decode(bytes) {
          const [cid, remainder] = CID.decodeFirst(bytes);
          if (remainder.length) {
            throw new Error("Incorrect length");
          }
          return cid;
        }
        static decodeFirst(bytes) {
          const specs = CID.inspectBytes(bytes);
          const prefixSize = specs.size - specs.multihashSize;
          const multihashBytes = coerce2(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
          if (multihashBytes.byteLength !== specs.multihashSize) {
            throw new Error("Incorrect length");
          }
          const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
          const digest2 = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
          const cid = specs.version === 0 ? CID.createV0(digest2) : CID.createV1(specs.codec, digest2);
          return [
            cid,
            bytes.subarray(specs.size)
          ];
        }
        static inspectBytes(initialBytes) {
          let offset = 0;
          const next = () => {
            const [i, length3] = decode4(initialBytes.subarray(offset));
            offset += length3;
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
        static parse(source, base3) {
          const [prefix, bytes] = parseCIDtoBytes(source, base3);
          const cid = CID.decode(bytes);
          cid._baseCache.set(prefix, source);
          return cid;
        }
      };
      parseCIDtoBytes = (source, base3) => {
        switch (source[0]) {
          case "Q": {
            const decoder = base3 || base58btc;
            return [
              base58btc.prefix,
              decoder.decode(`${base58btc.prefix}${source}`)
            ];
          }
          case base58btc.prefix: {
            const decoder = base3 || base58btc;
            return [
              base58btc.prefix,
              decoder.decode(source)
            ];
          }
          case base32.prefix: {
            const decoder = base3 || base32;
            return [
              base32.prefix,
              decoder.decode(source)
            ];
          }
          default: {
            if (base3 == null) {
              throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
            }
            return [
              source[0],
              base3.decode(source)
            ];
          }
        }
      };
      toStringV0 = (bytes, cache, base3) => {
        const { prefix } = base3;
        if (prefix !== base58btc.prefix) {
          throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
        }
        const cid = cache.get(prefix);
        if (cid == null) {
          const cid2 = base3.encode(bytes).slice(1);
          cache.set(prefix, cid2);
          return cid2;
        } else {
          return cid;
        }
      };
      toStringV1 = (bytes, cache, base3) => {
        const { prefix } = base3;
        const cid = cache.get(prefix);
        if (cid == null) {
          const cid2 = base3.encode(bytes);
          cache.set(prefix, cid2);
          return cid2;
        } else {
          return cid;
        }
      };
      DAG_PB_CODE = 112;
      SHA_256_CODE = 18;
      encodeCID = (version2, code2, multihash) => {
        const codeOffset = encodingLength(version2);
        const hashOffset = codeOffset + encodingLength(code2);
        const bytes = new Uint8Array(hashOffset + multihash.byteLength);
        encodeTo(version2, bytes, 0);
        encodeTo(code2, bytes, codeOffset);
        bytes.set(multihash, hashOffset);
        return bytes;
      };
      cidSymbol = Symbol.for("@ipld/js-cid/CID");
      readonly = {
        writable: false,
        configurable: false,
        enumerable: true
      };
      hidden = {
        writable: false,
        enumerable: false,
        configurable: false
      };
      version = "0.0.0-dev";
      deprecate = (range, message) => {
        if (range.test(version)) {
          console.warn(message);
        } else {
          throw new Error(message);
        }
      };
      IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
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
    }
  });

  // node_modules/multiformats/esm/src/index.js
  var init_src = __esm({
    "node_modules/multiformats/esm/src/index.js"() {
      init_cid();
      init_varint2();
      init_bytes2();
      init_hasher();
      init_digest();
    }
  });

  // node_modules/multiformats/esm/src/basics.js
  var bases, hashes;
  var init_basics = __esm({
    "node_modules/multiformats/esm/src/basics.js"() {
      init_identity();
      init_base22();
      init_base8();
      init_base10();
      init_base16();
      init_base32();
      init_base36();
      init_base58();
      init_base642();
      init_sha2_browser();
      init_identity2();
      init_raw();
      init_json();
      init_src();
      bases = {
        ...identity_exports,
        ...base2_exports,
        ...base8_exports,
        ...base10_exports,
        ...base16_exports,
        ...base32_exports,
        ...base36_exports,
        ...base58_exports,
        ...base64_exports2
      };
      hashes = {
        ...sha2_browser_exports,
        ...identity_exports2
      };
    }
  });

  // node_modules/uint8arrays/esm/src/util/as-uint8array.js
  function asUint8Array(buf) {
    if (globalThis.Buffer != null) {
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    return buf;
  }
  var init_as_uint8array = __esm({
    "node_modules/uint8arrays/esm/src/util/as-uint8array.js"() {
    }
  });

  // node_modules/uint8arrays/esm/src/alloc.js
  function allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
      return asUint8Array(globalThis.Buffer.allocUnsafe(size));
    }
    return new Uint8Array(size);
  }
  var init_alloc = __esm({
    "node_modules/uint8arrays/esm/src/alloc.js"() {
      init_as_uint8array();
    }
  });

  // node_modules/uint8arrays/esm/src/util/bases.js
  function createCodec(name2, prefix, encode6, decode8) {
    return {
      name: name2,
      prefix,
      encoder: {
        name: name2,
        prefix,
        encode: encode6
      },
      decoder: { decode: decode8 }
    };
  }
  var string, ascii, BASES, bases_default;
  var init_bases = __esm({
    "node_modules/uint8arrays/esm/src/util/bases.js"() {
      init_basics();
      init_alloc();
      string = createCodec("utf8", "u", (buf) => {
        const decoder = new TextDecoder("utf8");
        return "u" + decoder.decode(buf);
      }, (str) => {
        const encoder = new TextEncoder();
        return encoder.encode(str.substring(1));
      });
      ascii = createCodec("ascii", "a", (buf) => {
        let string2 = "a";
        for (let i = 0; i < buf.length; i++) {
          string2 += String.fromCharCode(buf[i]);
        }
        return string2;
      }, (str) => {
        str = str.substring(1);
        const buf = allocUnsafe(str.length);
        for (let i = 0; i < str.length; i++) {
          buf[i] = str.charCodeAt(i);
        }
        return buf;
      });
      BASES = {
        utf8: string,
        "utf-8": string,
        hex: bases.base16,
        latin1: ascii,
        ascii,
        binary: ascii,
        ...bases
      };
      bases_default = BASES;
    }
  });

  // node_modules/uint8arrays/esm/src/to-string.js
  var to_string_exports = {};
  __export(to_string_exports, {
    toString: () => toString2
  });
  function toString2(array, encoding = "utf8") {
    const base3 = bases_default[encoding];
    if (!base3) {
      throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
      return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
    }
    return base3.encoder.encode(array).substring(1);
  }
  var init_to_string = __esm({
    "node_modules/uint8arrays/esm/src/to-string.js"() {
      init_bases();
    }
  });

  // node_modules/uint8arrays/esm/src/from-string.js
  var from_string_exports = {};
  __export(from_string_exports, {
    fromString: () => fromString2
  });
  function fromString2(string2, encoding = "utf8") {
    const base3 = bases_default[encoding];
    if (!base3) {
      throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
      return asUint8Array(globalThis.Buffer.from(string2, "utf-8"));
    }
    return base3.decoder.decode(`${base3.prefix}${string2}`);
  }
  var init_from_string = __esm({
    "node_modules/uint8arrays/esm/src/from-string.js"() {
      init_bases();
      init_as_uint8array();
    }
  });

  // node_modules/uint8arrays/esm/src/concat.js
  var concat_exports = {};
  __export(concat_exports, {
    concat: () => concat
  });
  function concat(arrays, length3) {
    if (!length3) {
      length3 = arrays.reduce((acc, curr) => acc + curr.length, 0);
    }
    const output = allocUnsafe(length3);
    let offset = 0;
    for (const arr of arrays) {
      output.set(arr, offset);
      offset += arr.length;
    }
    return asUint8Array(output);
  }
  var init_concat = __esm({
    "node_modules/uint8arrays/esm/src/concat.js"() {
      init_alloc();
      init_as_uint8array();
    }
  });

  // node_modules/multihashes/src/index.js
  var require_src3 = __commonJS({
    "node_modules/multihashes/src/index.js"(exports, module) {
      "use strict";
      var multibase = require_src2();
      var varint3 = require_varint();
      var { names } = require_constants2();
      var { toString: uint8ArrayToString } = (init_to_string(), __toCommonJS(to_string_exports));
      var { fromString: uint8ArrayFromString } = (init_from_string(), __toCommonJS(from_string_exports));
      var { concat: uint8ArrayConcat } = (init_concat(), __toCommonJS(concat_exports));
      var codes = {};
      for (const key in names) {
        const name2 = key;
        codes[names[name2]] = name2;
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
      function decode8(bytes) {
        if (!(bytes instanceof Uint8Array)) {
          throw new Error("multihash must be a Uint8Array");
        }
        if (bytes.length < 2) {
          throw new Error("multihash too short. must be > 2 bytes.");
        }
        const code2 = varint3.decode(bytes);
        if (!isValidCode(code2)) {
          throw new Error(`multihash unknown function code: 0x${code2.toString(16)}`);
        }
        bytes = bytes.slice(varint3.decode.bytes);
        const len = varint3.decode(bytes);
        if (len < 0) {
          throw new Error(`multihash invalid length: ${len}`);
        }
        bytes = bytes.slice(varint3.decode.bytes);
        if (bytes.length !== len) {
          throw new Error(`multihash length inconsistent: 0x${uint8ArrayToString(bytes, "base16")}`);
        }
        return {
          code: code2,
          name: codes[code2],
          length: len,
          digest: bytes
        };
      }
      function encode6(digest2, code2, length3) {
        if (!digest2 || code2 === void 0) {
          throw new Error("multihash encode requires at least two args: digest, code");
        }
        const hashfn = coerceCode(code2);
        if (!(digest2 instanceof Uint8Array)) {
          throw new Error("digest should be a Uint8Array");
        }
        if (length3 == null) {
          length3 = digest2.length;
        }
        if (length3 && digest2.length !== length3) {
          throw new Error("digest length should be equal to specified length.");
        }
        const hash = varint3.encode(hashfn);
        const len = varint3.encode(length3);
        return uint8ArrayConcat([hash, len, digest2], hash.length + len.length + digest2.length);
      }
      function coerceCode(name2) {
        let code2 = name2;
        if (typeof name2 === "string") {
          if (names[name2] === void 0) {
            throw new Error(`Unrecognized hash function named: ${name2}`);
          }
          code2 = names[name2];
        }
        if (typeof code2 !== "number") {
          throw new Error(`Hash function code should be a number. Got: ${code2}`);
        }
        if (codes[code2] === void 0 && !isAppCode(code2)) {
          throw new Error(`Unrecognized function code: ${code2}`);
        }
        return code2;
      }
      function isAppCode(code2) {
        return code2 > 0 && code2 < 16;
      }
      function isValidCode(code2) {
        if (isAppCode(code2)) {
          return true;
        }
        if (codes[code2]) {
          return true;
        }
        return false;
      }
      function validate(multihash) {
        decode8(multihash);
      }
      function prefix(multihash) {
        validate(multihash);
        return multihash.subarray(0, 2);
      }
      module.exports = {
        names,
        codes,
        toHexString,
        fromHexString,
        toB58String,
        fromB58String,
        decode: decode8,
        encode: encode6,
        coerceCode,
        isAppCode,
        validate,
        prefix,
        isValidCode
      };
    }
  });

  // node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/vendor/varint.js
  function encode5(num, out, offset) {
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
    encode5.bytes = offset - oldOffset + 1;
    return out;
  }
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
  var encode_12, MSB2, REST2, MSBALL2, INT2, decode6, MSB$12, REST$12, N12, N22, N32, N42, N52, N62, N72, N82, N92, length2, varint2, _brrp_varint2, varint_default2;
  var init_varint3 = __esm({
    "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/vendor/varint.js"() {
      encode_12 = encode5;
      MSB2 = 128;
      REST2 = 127;
      MSBALL2 = ~REST2;
      INT2 = Math.pow(2, 31);
      decode6 = read2;
      MSB$12 = 128;
      REST$12 = 127;
      N12 = Math.pow(2, 7);
      N22 = Math.pow(2, 14);
      N32 = Math.pow(2, 21);
      N42 = Math.pow(2, 28);
      N52 = Math.pow(2, 35);
      N62 = Math.pow(2, 42);
      N72 = Math.pow(2, 49);
      N82 = Math.pow(2, 56);
      N92 = Math.pow(2, 63);
      length2 = function(value) {
        return value < N12 ? 1 : value < N22 ? 2 : value < N32 ? 3 : value < N42 ? 4 : value < N52 ? 5 : value < N62 ? 6 : value < N72 ? 7 : value < N82 ? 8 : value < N92 ? 9 : 10;
      };
      varint2 = {
        encode: encode_12,
        decode: decode6,
        encodingLength: length2
      };
      _brrp_varint2 = varint2;
      varint_default2 = _brrp_varint2;
    }
  });

  // node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/varint.js
  var encodeTo2, encodingLength2;
  var init_varint4 = __esm({
    "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/varint.js"() {
      init_varint3();
      encodeTo2 = (int, target, offset = 0) => {
        varint_default2.encode(int, target, offset);
        return target;
      };
      encodingLength2 = (int) => {
        return varint_default2.encodingLength(int);
      };
    }
  });

  // node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/hashes/digest.js
  var create2, Digest2;
  var init_digest2 = __esm({
    "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/hashes/digest.js"() {
      init_bytes();
      init_varint4();
      create2 = (code2, digest2) => {
        const size = digest2.byteLength;
        const sizeOffset = encodingLength2(code2);
        const digestOffset = sizeOffset + encodingLength2(size);
        const bytes = new Uint8Array(digestOffset + size);
        encodeTo2(code2, bytes, 0);
        encodeTo2(size, bytes, sizeOffset);
        bytes.set(digest2, digestOffset);
        return new Digest2(code2, size, digest2, bytes);
      };
      Digest2 = class {
        constructor(code2, size, digest2, bytes) {
          this.code = code2;
          this.size = size;
          this.digest = digest2;
          this.bytes = bytes;
        }
      };
    }
  });

  // node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/hashes/hasher.js
  var from4, Hasher2;
  var init_hasher2 = __esm({
    "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/hashes/hasher.js"() {
      init_digest2();
      from4 = ({ name: name2, code: code2, encode: encode6 }) => new Hasher2(name2, code2, encode6);
      Hasher2 = class {
        constructor(name2, code2, encode6) {
          this.name = name2;
          this.code = code2;
          this.encode = encode6;
        }
        digest(input) {
          if (input instanceof Uint8Array) {
            const result = this.encode(input);
            return result instanceof Uint8Array ? create2(this.code, result) : result.then((digest2) => create2(this.code, digest2));
          } else {
            throw Error("Unknown type, must be binary type");
          }
        }
      };
    }
  });

  // node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/hashes/sha2-browser.js
  var sha2_browser_exports2 = {};
  __export(sha2_browser_exports2, {
    sha256: () => sha2562,
    sha512: () => sha5122
  });
  var sha2, sha2562, sha5122;
  var init_sha2_browser2 = __esm({
    "node_modules/@decentralized-identity/ion-sdk/node_modules/multiformats/esm/src/hashes/sha2-browser.js"() {
      init_hasher2();
      sha2 = (name2) => async (data) => new Uint8Array(await crypto.subtle.digest(name2, data));
      sha2562 = from4({
        name: "sha2-256",
        code: 18,
        encode: sha2("SHA-256")
      });
      sha5122 = from4({
        name: "sha2-512",
        code: 19,
        encode: sha2("SHA-512")
      });
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
      var multihashes = require_src3();
      var Encoder_1 = require_Encoder();
      var ErrorCode_1 = require_ErrorCode();
      var IonError_1 = require_IonError();
      var IonSdkConfig_1 = require_IonSdkConfig();
      var JsonCanonicalizer_1 = require_JsonCanonicalizer();
      var sha2_1 = (init_sha2_browser2(), __toCommonJS(sha2_browser_exports2));
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

  // (disabled):crypto
  var require_crypto = __commonJS({
    "(disabled):crypto"() {
    }
  });

  // node_modules/@decentralized-identity/ion-sdk/node_modules/@noble/ed25519/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@decentralized-identity/ion-sdk/node_modules/@noble/ed25519/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.utils = exports.curve25519 = exports.getSharedSecret = exports.sync = exports.verify = exports.sign = exports.getPublicKey = exports.Signature = exports.Point = exports.RistrettoPoint = exports.ExtendedPoint = exports.CURVE = void 0;
      var nodeCrypto3 = require_crypto();
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
          let base3 = p;
          for (let window2 = 0; window2 < windows; window2++) {
            base3 = p;
            points.push(base3);
            for (let i = 1; i < 2 ** (W - 1); i++) {
              base3 = base3.add(p);
              points.push(base3);
            }
            p = base3.double();
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
          for (let window2 = 0; window2 < windows; window2++) {
            const offset = window2 * windowSize;
            let wbits = Number(n & mask);
            n >>= shiftBy;
            if (wbits > windowSize) {
              wbits -= maxNumber;
              n += _1n3;
            }
            if (wbits === 0) {
              let pr = precomputes[offset];
              if (window2 % 2)
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
        const length3 = arrays.reduce((a, arr) => a + arr.length, 0);
        const result = new Uint8Array(length3);
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
        const length3 = 32;
        const hex = num.toString(16).padStart(length3 * 2, "0");
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
      var nodeCrypto3 = require_crypto();
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
          let base3 = p;
          for (let window2 = 0; window2 < windows; window2++) {
            base3 = p;
            points.push(base3);
            for (let i = 1; i < 2 ** (W - 1); i++) {
              base3 = base3.add(p);
              points.push(base3);
            }
            p = base3.double();
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
          for (let window2 = 0; window2 < windows; window2++) {
            const offset = window2 * windowSize;
            let wbits = Number(n & mask);
            n >>= shiftBy;
            if (wbits > windowSize) {
              wbits -= maxNumber;
              n += _1n3;
            }
            if (wbits === 0) {
              let pr = precomputes[offset];
              if (window2 % 2)
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
          const name2 = "Signature.fromCompact";
          if (typeof hex !== "string" && !arr)
            throw new TypeError(`${name2}: Expected string or Uint8Array`);
          const str = arr ? bytesToHex3(hex) : hex;
          if (str.length !== 128)
            throw new Error(`${name2}: Expected 64-byte hex`);
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
          const length3 = numberToHexUnpadded2(rHex.length / 2 + sHex.length / 2 + 4);
          return `30${length3}02${rLen}${rHex}02${sLen}${sHex}`;
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
        const length3 = arrays.reduce((a, arr) => a + arr.length, 0);
        const result = new Uint8Array(length3);
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
      var base64_1 = (init_base64(), __toCommonJS(base64_exports));
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
      var base64_1 = (init_base64(), __toCommonJS(base64_exports));
      var sha2_1 = (init_sha2_browser2(), __toCommonJS(sha2_browser_exports2));
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

  // node_modules/cross-fetch/dist/browser-ponyfill.js
  var require_browser_ponyfill = __commonJS({
    "node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
      var global2 = typeof self !== "undefined" ? self : exports;
      var __self__ = function() {
        function F() {
          this.fetch = false;
          this.DOMException = global2.DOMException;
        }
        F.prototype = global2;
        return new F();
      }();
      (function(self2) {
        var irrelevant = function(exports2) {
          var support = {
            searchParams: "URLSearchParams" in self2,
            iterable: "Symbol" in self2 && "iterator" in Symbol,
            blob: "FileReader" in self2 && "Blob" in self2 && function() {
              try {
                new Blob();
                return true;
              } catch (e) {
                return false;
              }
            }(),
            formData: "FormData" in self2,
            arrayBuffer: "ArrayBuffer" in self2
          };
          function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
          }
          if (support.arrayBuffer) {
            var viewClasses = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]"
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
              return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
          }
          function normalizeName(name2) {
            if (typeof name2 !== "string") {
              name2 = String(name2);
            }
            if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name2)) {
              throw new TypeError("Invalid character in header field name");
            }
            return name2.toLowerCase();
          }
          function normalizeValue(value) {
            if (typeof value !== "string") {
              value = String(value);
            }
            return value;
          }
          function iteratorFor(items) {
            var iterator = {
              next: function() {
                var value = items.shift();
                return { done: value === void 0, value };
              }
            };
            if (support.iterable) {
              iterator[Symbol.iterator] = function() {
                return iterator;
              };
            }
            return iterator;
          }
          function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) {
              headers.forEach(function(value, name2) {
                this.append(name2, value);
              }, this);
            } else if (Array.isArray(headers)) {
              headers.forEach(function(header) {
                this.append(header[0], header[1]);
              }, this);
            } else if (headers) {
              Object.getOwnPropertyNames(headers).forEach(function(name2) {
                this.append(name2, headers[name2]);
              }, this);
            }
          }
          Headers.prototype.append = function(name2, value) {
            name2 = normalizeName(name2);
            value = normalizeValue(value);
            var oldValue = this.map[name2];
            this.map[name2] = oldValue ? oldValue + ", " + value : value;
          };
          Headers.prototype["delete"] = function(name2) {
            delete this.map[normalizeName(name2)];
          };
          Headers.prototype.get = function(name2) {
            name2 = normalizeName(name2);
            return this.has(name2) ? this.map[name2] : null;
          };
          Headers.prototype.has = function(name2) {
            return this.map.hasOwnProperty(normalizeName(name2));
          };
          Headers.prototype.set = function(name2, value) {
            this.map[normalizeName(name2)] = normalizeValue(value);
          };
          Headers.prototype.forEach = function(callback, thisArg) {
            for (var name2 in this.map) {
              if (this.map.hasOwnProperty(name2)) {
                callback.call(thisArg, this.map[name2], name2, this);
              }
            }
          };
          Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name2) {
              items.push(name2);
            });
            return iteratorFor(items);
          };
          Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
              items.push(value);
            });
            return iteratorFor(items);
          };
          Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name2) {
              items.push([name2, value]);
            });
            return iteratorFor(items);
          };
          if (support.iterable) {
            Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
          }
          function consumed(body) {
            if (body.bodyUsed) {
              return Promise.reject(new TypeError("Already read"));
            }
            body.bodyUsed = true;
          }
          function fileReaderReady(reader) {
            return new Promise(function(resolve2, reject) {
              reader.onload = function() {
                resolve2(reader.result);
              };
              reader.onerror = function() {
                reject(reader.error);
              };
            });
          }
          function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
          }
          function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsText(blob);
            return promise;
          }
          function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for (var i = 0; i < view.length; i++) {
              chars[i] = String.fromCharCode(view[i]);
            }
            return chars.join("");
          }
          function bufferClone(buf) {
            if (buf.slice) {
              return buf.slice(0);
            } else {
              var view = new Uint8Array(buf.byteLength);
              view.set(new Uint8Array(buf));
              return view.buffer;
            }
          }
          function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
              this._bodyInit = body;
              if (!body) {
                this._bodyText = "";
              } else if (typeof body === "string") {
                this._bodyText = body;
              } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body;
              } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body;
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this._bodyText = body.toString();
              } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
              } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                this._bodyArrayBuffer = bufferClone(body);
              } else {
                this._bodyText = body = Object.prototype.toString.call(body);
              }
              if (!this.headers.get("content-type")) {
                if (typeof body === "string") {
                  this.headers.set("content-type", "text/plain;charset=UTF-8");
                } else if (this._bodyBlob && this._bodyBlob.type) {
                  this.headers.set("content-type", this._bodyBlob.type);
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                  this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
              }
            };
            if (support.blob) {
              this.blob = function() {
                var rejected = consumed(this);
                if (rejected) {
                  return rejected;
                }
                if (this._bodyBlob) {
                  return Promise.resolve(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                } else if (this._bodyFormData) {
                  throw new Error("could not read FormData body as blob");
                } else {
                  return Promise.resolve(new Blob([this._bodyText]));
                }
              };
              this.arrayBuffer = function() {
                if (this._bodyArrayBuffer) {
                  return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                } else {
                  return this.blob().then(readBlobAsArrayBuffer);
                }
              };
            }
            this.text = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as text");
              } else {
                return Promise.resolve(this._bodyText);
              }
            };
            if (support.formData) {
              this.formData = function() {
                return this.text().then(decode8);
              };
            }
            this.json = function() {
              return this.text().then(JSON.parse);
            };
            return this;
          }
          var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
          }
          function Request(input, options) {
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
              if (input.bodyUsed) {
                throw new TypeError("Already read");
              }
              this.url = input.url;
              this.credentials = input.credentials;
              if (!options.headers) {
                this.headers = new Headers(input.headers);
              }
              this.method = input.method;
              this.mode = input.mode;
              this.signal = input.signal;
              if (!body && input._bodyInit != null) {
                body = input._bodyInit;
                input.bodyUsed = true;
              }
            } else {
              this.url = String(input);
            }
            this.credentials = options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) {
              this.headers = new Headers(options.headers);
            }
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) {
              throw new TypeError("Body not allowed for GET or HEAD requests");
            }
            this._initBody(body);
          }
          Request.prototype.clone = function() {
            return new Request(this, { body: this._bodyInit });
          };
          function decode8(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
              if (bytes) {
                var split = bytes.split("=");
                var name2 = split.shift().replace(/\+/g, " ");
                var value = split.join("=").replace(/\+/g, " ");
                form.append(decodeURIComponent(name2), decodeURIComponent(value));
              }
            });
            return form;
          }
          function parseHeaders(rawHeaders) {
            var headers = new Headers();
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
              var parts = line.split(":");
              var key = parts.shift().trim();
              if (key) {
                var value = parts.join(":").trim();
                headers.append(key, value);
              }
            });
            return headers;
          }
          Body.call(Request.prototype);
          function Response(bodyInit, options) {
            if (!options) {
              options = {};
            }
            this.type = "default";
            this.status = options.status === void 0 ? 200 : options.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in options ? options.statusText : "OK";
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
          }
          Body.call(Response.prototype);
          Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers(this.headers),
              url: this.url
            });
          };
          Response.error = function() {
            var response = new Response(null, { status: 0, statusText: "" });
            response.type = "error";
            return response;
          };
          var redirectStatuses = [301, 302, 303, 307, 308];
          Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) {
              throw new RangeError("Invalid status code");
            }
            return new Response(null, { status, headers: { location: url } });
          };
          exports2.DOMException = self2.DOMException;
          try {
            new exports2.DOMException();
          } catch (err) {
            exports2.DOMException = function(message, name2) {
              this.message = message;
              this.name = name2;
              var error = Error(message);
              this.stack = error.stack;
            };
            exports2.DOMException.prototype = Object.create(Error.prototype);
            exports2.DOMException.prototype.constructor = exports2.DOMException;
          }
          function fetch2(input, init) {
            return new Promise(function(resolve2, reject) {
              var request = new Request(input, init);
              if (request.signal && request.signal.aborted) {
                return reject(new exports2.DOMException("Aborted", "AbortError"));
              }
              var xhr = new XMLHttpRequest();
              function abortXhr() {
                xhr.abort();
              }
              xhr.onload = function() {
                var options = {
                  status: xhr.status,
                  statusText: xhr.statusText,
                  headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                };
                options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                var body = "response" in xhr ? xhr.response : xhr.responseText;
                resolve2(new Response(body, options));
              };
              xhr.onerror = function() {
                reject(new TypeError("Network request failed"));
              };
              xhr.ontimeout = function() {
                reject(new TypeError("Network request failed"));
              };
              xhr.onabort = function() {
                reject(new exports2.DOMException("Aborted", "AbortError"));
              };
              xhr.open(request.method, request.url, true);
              if (request.credentials === "include") {
                xhr.withCredentials = true;
              } else if (request.credentials === "omit") {
                xhr.withCredentials = false;
              }
              if ("responseType" in xhr && support.blob) {
                xhr.responseType = "blob";
              }
              request.headers.forEach(function(value, name2) {
                xhr.setRequestHeader(name2, value);
              });
              if (request.signal) {
                request.signal.addEventListener("abort", abortXhr);
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    request.signal.removeEventListener("abort", abortXhr);
                  }
                };
              }
              xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
            });
          }
          fetch2.polyfill = true;
          if (!self2.fetch) {
            self2.fetch = fetch2;
            self2.Headers = Headers;
            self2.Request = Request;
            self2.Response = Response;
          }
          exports2.Headers = Headers;
          exports2.Request = Request;
          exports2.Response = Response;
          exports2.fetch = fetch2;
          Object.defineProperty(exports2, "__esModule", { value: true });
          return exports2;
        }({});
      })(__self__);
      __self__.fetch.ponyfill = true;
      delete __self__.fetch.polyfill;
      var ctx = __self__;
      exports = ctx.fetch;
      exports.default = ctx.fetch;
      exports.fetch = ctx.fetch;
      exports.Headers = ctx.Headers;
      exports.Request = ctx.Request;
      exports.Response = ctx.Response;
      module.exports = exports;
    }
  });

  // node_modules/@decentralized-identity/ion-pow-sdk/node_modules/hash-wasm/dist/index.umd.js
  var require_index_umd = __commonJS({
    "node_modules/@decentralized-identity/ion-pow-sdk/node_modules/hash-wasm/dist/index.umd.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.hashwasm = {}));
      })(exports, function(exports2) {
        "use strict";
        function __awaiter(thisArg, _arguments, P, generator) {
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
        }
        class Mutex {
          constructor() {
            this.mutex = Promise.resolve();
          }
          lock() {
            let begin = () => {
            };
            this.mutex = this.mutex.then(() => new Promise(begin));
            return new Promise((res) => {
              begin = res;
            });
          }
          dispatch(fn) {
            return __awaiter(this, void 0, void 0, function* () {
              const unlock = yield this.lock();
              try {
                return yield Promise.resolve(fn());
              } finally {
                unlock();
              }
            });
          }
        }
        var _a;
        function getGlobal() {
          if (typeof globalThis !== "undefined")
            return globalThis;
          if (typeof self !== "undefined")
            return self;
          if (typeof window !== "undefined")
            return window;
          return globalThis;
        }
        const globalObject = getGlobal();
        const nodeBuffer = (_a = globalObject.Buffer) !== null && _a !== void 0 ? _a : null;
        const textEncoder2 = globalObject.TextEncoder ? new globalObject.TextEncoder() : null;
        function intArrayToString(arr, len) {
          return String.fromCharCode(...arr.subarray(0, len));
        }
        function hexCharCodesToInt(a, b) {
          return (a & 15) + (a >> 6 | a >> 3 & 8) << 4 | (b & 15) + (b >> 6 | b >> 3 & 8);
        }
        function writeHexToUInt8(buf, str) {
          const size = str.length >> 1;
          for (let i = 0; i < size; i++) {
            const index = i << 1;
            buf[i] = hexCharCodesToInt(str.charCodeAt(index), str.charCodeAt(index + 1));
          }
        }
        function hexStringEqualsUInt8(str, buf) {
          if (str.length !== buf.length * 2) {
            return false;
          }
          for (let i = 0; i < buf.length; i++) {
            const strIndex = i << 1;
            if (buf[i] !== hexCharCodesToInt(str.charCodeAt(strIndex), str.charCodeAt(strIndex + 1))) {
              return false;
            }
          }
          return true;
        }
        const alpha = "a".charCodeAt(0) - 10;
        const digit = "0".charCodeAt(0);
        function getDigestHex(tmpBuffer, input, hashLength) {
          let p = 0;
          for (let i = 0; i < hashLength; i++) {
            let nibble = input[i] >>> 4;
            tmpBuffer[p++] = nibble > 9 ? nibble + alpha : nibble + digit;
            nibble = input[i] & 15;
            tmpBuffer[p++] = nibble > 9 ? nibble + alpha : nibble + digit;
          }
          return String.fromCharCode.apply(null, tmpBuffer);
        }
        const getUInt8Buffer = nodeBuffer !== null ? (data2) => {
          if (typeof data2 === "string") {
            const buf = nodeBuffer.from(data2, "utf8");
            return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
          }
          if (nodeBuffer.isBuffer(data2)) {
            return new Uint8Array(data2.buffer, data2.byteOffset, data2.length);
          }
          if (ArrayBuffer.isView(data2)) {
            return new Uint8Array(data2.buffer, data2.byteOffset, data2.byteLength);
          }
          throw new Error("Invalid data type!");
        } : (data2) => {
          if (typeof data2 === "string") {
            return textEncoder2.encode(data2);
          }
          if (ArrayBuffer.isView(data2)) {
            return new Uint8Array(data2.buffer, data2.byteOffset, data2.byteLength);
          }
          throw new Error("Invalid data type!");
        };
        const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        const base64Lookup = new Uint8Array(256);
        for (let i = 0; i < base64Chars.length; i++) {
          base64Lookup[base64Chars.charCodeAt(i)] = i;
        }
        function encodeBase64(data2, pad = true) {
          const len = data2.length;
          const extraBytes = len % 3;
          const parts = [];
          const len2 = len - extraBytes;
          for (let i = 0; i < len2; i += 3) {
            const tmp = (data2[i] << 16 & 16711680) + (data2[i + 1] << 8 & 65280) + (data2[i + 2] & 255);
            const triplet = base64Chars.charAt(tmp >> 18 & 63) + base64Chars.charAt(tmp >> 12 & 63) + base64Chars.charAt(tmp >> 6 & 63) + base64Chars.charAt(tmp & 63);
            parts.push(triplet);
          }
          if (extraBytes === 1) {
            const tmp = data2[len - 1];
            const a = base64Chars.charAt(tmp >> 2);
            const b = base64Chars.charAt(tmp << 4 & 63);
            parts.push(`${a}${b}`);
            if (pad) {
              parts.push("==");
            }
          } else if (extraBytes === 2) {
            const tmp = (data2[len - 2] << 8) + data2[len - 1];
            const a = base64Chars.charAt(tmp >> 10);
            const b = base64Chars.charAt(tmp >> 4 & 63);
            const c = base64Chars.charAt(tmp << 2 & 63);
            parts.push(`${a}${b}${c}`);
            if (pad) {
              parts.push("=");
            }
          }
          return parts.join("");
        }
        function getDecodeBase64Length(data2) {
          let bufferLength = Math.floor(data2.length * 0.75);
          const len = data2.length;
          if (data2[len - 1] === "=") {
            bufferLength -= 1;
            if (data2[len - 2] === "=") {
              bufferLength -= 1;
            }
          }
          return bufferLength;
        }
        function decodeBase64(data2) {
          const bufferLength = getDecodeBase64Length(data2);
          const len = data2.length;
          const bytes = new Uint8Array(bufferLength);
          let p = 0;
          for (let i = 0; i < len; i += 4) {
            const encoded1 = base64Lookup[data2.charCodeAt(i)];
            const encoded2 = base64Lookup[data2.charCodeAt(i + 1)];
            const encoded3 = base64Lookup[data2.charCodeAt(i + 2)];
            const encoded4 = base64Lookup[data2.charCodeAt(i + 3)];
            bytes[p] = encoded1 << 2 | encoded2 >> 4;
            p += 1;
            bytes[p] = (encoded2 & 15) << 4 | encoded3 >> 2;
            p += 1;
            bytes[p] = (encoded3 & 3) << 6 | encoded4 & 63;
            p += 1;
          }
          return bytes;
        }
        const MAX_HEAP = 16 * 1024;
        const WASM_FUNC_HASH_LENGTH = 4;
        const wasmMutex = new Mutex();
        const wasmModuleCache = /* @__PURE__ */ new Map();
        function WASMInterface(binary, hashLength) {
          return __awaiter(this, void 0, void 0, function* () {
            let wasmInstance = null;
            let memoryView = null;
            let initialized = false;
            if (typeof WebAssembly === "undefined") {
              throw new Error("WebAssembly is not supported in this environment!");
            }
            const writeMemory = (data2, offset = 0) => {
              memoryView.set(data2, offset);
            };
            const getMemory = () => memoryView;
            const getExports = () => wasmInstance.exports;
            const setMemorySize = (totalSize) => {
              wasmInstance.exports.Hash_SetMemorySize(totalSize);
              const arrayOffset = wasmInstance.exports.Hash_GetBuffer();
              const memoryBuffer = wasmInstance.exports.memory.buffer;
              memoryView = new Uint8Array(memoryBuffer, arrayOffset, totalSize);
            };
            const getStateSize = () => {
              const view = new DataView(wasmInstance.exports.memory.buffer);
              const stateSize = view.getUint32(wasmInstance.exports.STATE_SIZE, true);
              return stateSize;
            };
            const loadWASMPromise = wasmMutex.dispatch(() => __awaiter(this, void 0, void 0, function* () {
              if (!wasmModuleCache.has(binary.name)) {
                const asm = decodeBase64(binary.data);
                const promise = WebAssembly.compile(asm);
                wasmModuleCache.set(binary.name, promise);
              }
              const module2 = yield wasmModuleCache.get(binary.name);
              wasmInstance = yield WebAssembly.instantiate(module2, {});
            }));
            const setupInterface = () => __awaiter(this, void 0, void 0, function* () {
              if (!wasmInstance) {
                yield loadWASMPromise;
              }
              const arrayOffset = wasmInstance.exports.Hash_GetBuffer();
              const memoryBuffer = wasmInstance.exports.memory.buffer;
              memoryView = new Uint8Array(memoryBuffer, arrayOffset, MAX_HEAP);
            });
            const init = (bits = null) => {
              initialized = true;
              wasmInstance.exports.Hash_Init(bits);
            };
            const updateUInt8Array = (data2) => {
              let read3 = 0;
              while (read3 < data2.length) {
                const chunk = data2.subarray(read3, read3 + MAX_HEAP);
                read3 += chunk.length;
                memoryView.set(chunk);
                wasmInstance.exports.Hash_Update(chunk.length);
              }
            };
            const update = (data2) => {
              if (!initialized) {
                throw new Error("update() called before init()");
              }
              const Uint8Buffer = getUInt8Buffer(data2);
              updateUInt8Array(Uint8Buffer);
            };
            const digestChars = new Uint8Array(hashLength * 2);
            const digest2 = (outputType, padding = null) => {
              if (!initialized) {
                throw new Error("digest() called before init()");
              }
              initialized = false;
              wasmInstance.exports.Hash_Final(padding);
              if (outputType === "binary") {
                return memoryView.slice(0, hashLength);
              }
              return getDigestHex(digestChars, memoryView, hashLength);
            };
            const save = () => {
              if (!initialized) {
                throw new Error("save() can only be called after init() and before digest()");
              }
              const stateOffset = wasmInstance.exports.Hash_GetState();
              const stateLength = getStateSize();
              const memoryBuffer = wasmInstance.exports.memory.buffer;
              const internalState = new Uint8Array(memoryBuffer, stateOffset, stateLength);
              const prefixedState = new Uint8Array(WASM_FUNC_HASH_LENGTH + stateLength);
              writeHexToUInt8(prefixedState, binary.hash);
              prefixedState.set(internalState, WASM_FUNC_HASH_LENGTH);
              return prefixedState;
            };
            const load = (state) => {
              if (!(state instanceof Uint8Array)) {
                throw new Error("load() expects an Uint8Array generated by save()");
              }
              const stateOffset = wasmInstance.exports.Hash_GetState();
              const stateLength = getStateSize();
              const overallLength = WASM_FUNC_HASH_LENGTH + stateLength;
              const memoryBuffer = wasmInstance.exports.memory.buffer;
              if (state.length !== overallLength) {
                throw new Error(`Bad state length (expected ${overallLength} bytes, got ${state.length})`);
              }
              if (!hexStringEqualsUInt8(binary.hash, state.subarray(0, WASM_FUNC_HASH_LENGTH))) {
                throw new Error("This state was written by an incompatible hash implementation");
              }
              const internalState = state.subarray(WASM_FUNC_HASH_LENGTH);
              new Uint8Array(memoryBuffer, stateOffset, stateLength).set(internalState);
              initialized = true;
            };
            const isDataShort = (data2) => {
              if (typeof data2 === "string") {
                return data2.length < MAX_HEAP / 4;
              }
              return data2.byteLength < MAX_HEAP;
            };
            let canSimplify = isDataShort;
            switch (binary.name) {
              case "argon2":
              case "scrypt":
                canSimplify = () => true;
                break;
              case "blake2b":
              case "blake2s":
                canSimplify = (data2, initParam) => initParam <= 512 && isDataShort(data2);
                break;
              case "blake3":
                canSimplify = (data2, initParam) => initParam === 0 && isDataShort(data2);
                break;
              case "xxhash64":
              case "xxhash3":
              case "xxhash128":
                canSimplify = () => false;
                break;
            }
            const calculate = (data2, initParam = null, digestParam = null) => {
              if (!canSimplify(data2, initParam)) {
                init(initParam);
                update(data2);
                return digest2("hex", digestParam);
              }
              const buffer = getUInt8Buffer(data2);
              memoryView.set(buffer);
              wasmInstance.exports.Hash_Calculate(buffer.length, initParam, digestParam);
              return getDigestHex(digestChars, memoryView, hashLength);
            };
            yield setupInterface();
            return {
              getMemory,
              writeMemory,
              getExports,
              setMemorySize,
              init,
              update,
              digest: digest2,
              save,
              load,
              calculate,
              hashLength
            };
          });
        }
        var name$k = "adler32";
        var data$k = "AGFzbQEAAAABDANgAAF/YAAAYAF/AAMHBgABAgEAAgQFAXABAQEFBAEBAgIGDgJ/AUGAiQULfwBBgAgLB3AIBm1lbW9yeQIADkhhc2hfR2V0QnVmZmVyAAAJSGFzaF9Jbml0AAELSGFzaF9VcGRhdGUAAgpIYXNoX0ZpbmFsAAMNSGFzaF9HZXRTdGF0ZQAEDkhhc2hfQ2FsY3VsYXRlAAUKU1RBVEVfU0laRQMBCoAIBgUAQYAJCwoAQQBBATYChAgL9gYBBn9BACgChAgiAUH//wNxIQIgAUEQdiEDAkACQCAAQQFHDQAgAkEALQCACWoiAUGPgHxqIAEgAUHw/wNLGyIBIANqIgRBEHQiBUGAgDxqIAUgBEHw/wNLGyABciEBDAELAkACQAJAAkACQCAAQRBJDQBBgAkhBiAAQbArSQ0BQYAJIQYDQEEAIQUDQCAGIAVqIgEoAgAiBEH/AXEgAmoiAiADaiACIARBCHZB/wFxaiICaiACIARBEHZB/wFxaiICaiACIARBGHZqIgJqIAIgAUEEaigCACIEQf8BcWoiAmogAiAEQQh2Qf8BcWoiAmogAiAEQRB2Qf8BcWoiAmogAiAEQRh2aiICaiACIAFBCGooAgAiBEH/AXFqIgJqIAIgBEEIdkH/AXFqIgJqIAIgBEEQdkH/AXFqIgJqIAIgBEEYdmoiBGogBCABQQxqKAIAIgFB/wFxaiIEaiAEIAFBCHZB/wFxaiIEaiAEIAFBEHZB/wFxaiIEaiAEIAFBGHZqIgJqIQMgBUEQaiIFQbArRw0ACyADQfH/A3AhAyACQfH/A3AhAiAGQbAraiEGIABB0FRqIgBBrytLDQALIABFDQQgAEEPSw0BDAILAkAgAEUNAEEAIQEDQCACIAFBgAlqLQAAaiICIANqIQMgACABQQFqIgFHDQALCyACQY+AfGogAiACQfD/A0sbIANB8f8DcEEQdHIhAQwECwNAIAYoAgAiAUH/AXEgAmoiBCADaiAEIAFBCHZB/wFxaiIEaiAEIAFBEHZB/wFxaiIEaiAEIAFBGHZqIgRqIAQgBkEEaigCACIBQf8BcWoiBGogBCABQQh2Qf8BcWoiBGogBCABQRB2Qf8BcWoiBGogBCABQRh2aiIEaiAEIAZBCGooAgAiAUH/AXFqIgRqIAQgAUEIdkH/AXFqIgRqIAQgAUEQdkH/AXFqIgRqIAQgAUEYdmoiBGogBCAGQQxqKAIAIgFB/wFxaiIEaiAEIAFBCHZB/wFxaiIEaiAEIAFBEHZB/wFxaiIEaiAEIAFBGHZqIgJqIQMgBkEQaiEGIABBcGoiAEEPSw0ACyAARQ0BCwNAIAIgBi0AAGoiAiADaiEDIAZBAWohBiAAQX9qIgANAAsLIANB8f8DcCEDIAJB8f8DcCECCyACIANBEHRyIQELQQAgATYChAgLMgEBf0EAQQAoAoQIIgBBGHQgAEEIdEGAgPwHcXIgAEEIdkGA/gNxIABBGHZycjYCgAkLBQBBhAgLPABBAEEBNgKECCAAEAJBAEEAKAKECCIAQRh0IABBCHRBgID8B3FyIABBCHZBgP4DcSAAQRh2cnI2AoAJCwsVAgBBgAgLBAQAAAAAQYQICwQBAAAA";
        var hash$k = "321174b4";
        var wasmJson$k = {
          name: name$k,
          data: data$k,
          hash: hash$k
        };
        function lockedCreate(mutex2, binary, hashLength) {
          return __awaiter(this, void 0, void 0, function* () {
            const unlock = yield mutex2.lock();
            const wasm = yield WASMInterface(binary, hashLength);
            unlock();
            return wasm;
          });
        }
        const mutex$l = new Mutex();
        let wasmCache$l = null;
        function adler32(data2) {
          if (wasmCache$l === null) {
            return lockedCreate(mutex$l, wasmJson$k, 4).then((wasm) => {
              wasmCache$l = wasm;
              return wasmCache$l.calculate(data2);
            });
          }
          try {
            const hash2 = wasmCache$l.calculate(data2);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createAdler32() {
          return WASMInterface(wasmJson$k, 4).then((wasm) => {
            wasm.init();
            const obj = {
              init: () => {
                wasm.init();
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 4,
              digestSize: 4
            };
            return obj;
          });
        }
        var name$j = "blake2b";
        var data$j = "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";
        var hash$j = "68afc9cf";
        var wasmJson$j = {
          name: name$j,
          data: data$j,
          hash: hash$j
        };
        const mutex$k = new Mutex();
        let wasmCache$k = null;
        function validateBits$4(bits) {
          if (!Number.isInteger(bits) || bits < 8 || bits > 512 || bits % 8 !== 0) {
            return new Error("Invalid variant! Valid values: 8, 16, ..., 512");
          }
          return null;
        }
        function getInitParam$1(outputBits, keyBits) {
          return outputBits | keyBits << 16;
        }
        function blake2b(data2, bits = 512, key = null) {
          if (validateBits$4(bits)) {
            return Promise.reject(validateBits$4(bits));
          }
          let keyBuffer = null;
          let initParam = bits;
          if (key !== null) {
            keyBuffer = getUInt8Buffer(key);
            if (keyBuffer.length > 64) {
              return Promise.reject(new Error("Max key length is 64 bytes"));
            }
            initParam = getInitParam$1(bits, keyBuffer.length);
          }
          const hashLength = bits / 8;
          if (wasmCache$k === null || wasmCache$k.hashLength !== hashLength) {
            return lockedCreate(mutex$k, wasmJson$j, hashLength).then((wasm) => {
              wasmCache$k = wasm;
              if (initParam > 512) {
                wasmCache$k.writeMemory(keyBuffer);
              }
              return wasmCache$k.calculate(data2, initParam);
            });
          }
          try {
            if (initParam > 512) {
              wasmCache$k.writeMemory(keyBuffer);
            }
            const hash2 = wasmCache$k.calculate(data2, initParam);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createBLAKE2b(bits = 512, key = null) {
          if (validateBits$4(bits)) {
            return Promise.reject(validateBits$4(bits));
          }
          let keyBuffer = null;
          let initParam = bits;
          if (key !== null) {
            keyBuffer = getUInt8Buffer(key);
            if (keyBuffer.length > 64) {
              return Promise.reject(new Error("Max key length is 64 bytes"));
            }
            initParam = getInitParam$1(bits, keyBuffer.length);
          }
          const outputSize = bits / 8;
          return WASMInterface(wasmJson$j, outputSize).then((wasm) => {
            if (initParam > 512) {
              wasm.writeMemory(keyBuffer);
            }
            wasm.init(initParam);
            const obj = {
              init: initParam > 512 ? () => {
                wasm.writeMemory(keyBuffer);
                wasm.init(initParam);
                return obj;
              } : () => {
                wasm.init(initParam);
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 128,
              digestSize: outputSize
            };
            return obj;
          });
        }
        var name$i = "argon2";
        var data$i = "AGFzbQEAAAABKQVgAX8Bf2AAAX9gEH9/f39/f39/f39/f39/f38AYAR/f39/AGACf38AAwYFAAECAwQEBQFwAQEBBQYBAQKAgAIGCAF/AUGQqAQLB0EEBm1lbW9yeQIAEkhhc2hfU2V0TWVtb3J5U2l6ZQAADkhhc2hfR2V0QnVmZmVyAAEOSGFzaF9DYWxjdWxhdGUABArXMwVbAQF/QQAhAQJAIABBACgCgAhrIgBFDQACQCAAQRB2IABBgIB8cSAASWoiAEAAQX9HDQBB/wEhAQwBC0EAIQFBAEEAKQOACCAAQRB0rXw3A4AICyABQRh0QRh1C2oBAn8CQEEAKAKICCIADQBBAD8AQRB0IgA2AogIQYCAIEEAKAKACGsiAUUNAAJAIAFBEHYgAUGAgHxxIAFJaiIAQABBf0cNAEEADwtBAEEAKQOACCAAQRB0rXw3A4AIQQAoAogIIQALIAALnA8BA34gACAEKQMAIhAgACkDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgDCAQIAwpAwCFIhBCIIkiETcDACAIIBEgCCkDACISfCASQgGGQv7///8fgyAQQiCIfnwiEDcDACAEIBAgBCkDAIUiEEIoiSIRNwMAIAAgESAAKQMAIhJ8IBBCGIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAMIBAgDCkDAIUiEEIwiSIRNwMAIAggESAIKQMAIhJ8IBBCEIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAEIBAgBCkDAIVCAYk3AwAgASAFKQMAIhAgASkDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgDSAQIA0pAwCFIhBCIIkiETcDACAJIBEgCSkDACISfCASQgGGQv7///8fgyAQQiCIfnwiEDcDACAFIBAgBSkDAIUiEEIoiSIRNwMAIAEgESABKQMAIhJ8IBBCGIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACANIBAgDSkDAIUiEEIwiSIRNwMAIAkgESAJKQMAIhJ8IBBCEIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAFIBAgBSkDAIVCAYk3AwAgAiAGKQMAIhAgAikDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgDiAQIA4pAwCFIhBCIIkiETcDACAKIBEgCikDACISfCASQgGGQv7///8fgyAQQiCIfnwiEDcDACAGIBAgBikDAIUiEEIoiSIRNwMAIAIgESACKQMAIhJ8IBBCGIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAOIBAgDikDAIUiEEIwiSIRNwMAIAogESAKKQMAIhJ8IBBCEIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAGIBAgBikDAIVCAYk3AwAgAyAHKQMAIhAgAykDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgDyAQIA8pAwCFIhBCIIkiETcDACALIBEgCykDACISfCASQgGGQv7///8fgyAQQiCIfnwiEDcDACAHIBAgBykDAIUiEEIoiSIRNwMAIAMgESADKQMAIhJ8IBBCGIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAPIBAgDykDAIUiEEIwiSIRNwMAIAsgESALKQMAIhJ8IBBCEIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAHIBAgBykDAIVCAYk3AwAgACAFKQMAIhAgACkDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgDyAQIA8pAwCFIhBCIIkiETcDACAKIBEgCikDACISfCASQgGGQv7///8fgyAQQiCIfnwiEDcDACAFIBAgBSkDAIUiEEIoiSIRNwMAIAAgESAAKQMAIhJ8IBBCGIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAPIBAgDykDAIUiEEIwiSIRNwMAIAogESAKKQMAIhJ8IBBCEIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAFIBAgBSkDAIVCAYk3AwAgASAGKQMAIhAgASkDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgDCAQIAwpAwCFIhBCIIkiETcDACALIBEgCykDACISfCASQgGGQv7///8fgyAQQiCIfnwiEDcDACAGIBAgBikDAIUiEEIoiSIRNwMAIAEgESABKQMAIhJ8IBBCGIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAMIBAgDCkDAIUiEEIwiSIRNwMAIAsgESALKQMAIhJ8IBBCEIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAGIBAgBikDAIVCAYk3AwAgAiAHKQMAIhAgAikDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgDSAQIA0pAwCFIhBCIIkiETcDACAIIBEgCCkDACISfCASQgGGQv7///8fgyAQQiCIfnwiEDcDACAHIBAgBykDAIUiEEIoiSIRNwMAIAIgESACKQMAIhJ8IBBCGIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACANIBAgDSkDAIUiEEIwiSIRNwMAIAggESAIKQMAIhJ8IBBCEIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAHIBAgBykDAIVCAYk3AwAgAyAEKQMAIhAgAykDACIRfCARQgGGQv7///8fgyAQQv////8Pg358IhA3AwAgDiAQIA4pAwCFIhBCIIkiETcDACAJIBEgCSkDACISfCASQgGGQv7///8fgyAQQiCIfnwiEDcDACAEIBAgBCkDAIUiEEIoiSIRNwMAIAMgESADKQMAIhJ8IBBCGIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAOIBAgDikDAIUiEEIwiSIRNwMAIAkgESAJKQMAIhJ8IBBCEIhC/////w+DIBJCAYZC/v///x+DfnwiEDcDACAEIBAgBCkDAIVCAYk3AwALhxoBAX9BACEEQQAgAikDACABKQMAhTcDkAhBACACKQMIIAEpAwiFNwOYCEEAIAIpAxAgASkDEIU3A6AIQQAgAikDGCABKQMYhTcDqAhBACACKQMgIAEpAyCFNwOwCEEAIAIpAyggASkDKIU3A7gIQQAgAikDMCABKQMwhTcDwAhBACACKQM4IAEpAziFNwPICEEAIAIpA0AgASkDQIU3A9AIQQAgAikDSCABKQNIhTcD2AhBACACKQNQIAEpA1CFNwPgCEEAIAIpA1ggASkDWIU3A+gIQQAgAikDYCABKQNghTcD8AhBACACKQNoIAEpA2iFNwP4CEEAIAIpA3AgASkDcIU3A4AJQQAgAikDeCABKQN4hTcDiAlBACACKQOAASABKQOAAYU3A5AJQQAgAikDiAEgASkDiAGFNwOYCUEAIAIpA5ABIAEpA5ABhTcDoAlBACACKQOYASABKQOYAYU3A6gJQQAgAikDoAEgASkDoAGFNwOwCUEAIAIpA6gBIAEpA6gBhTcDuAlB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";
        var hash$i = "59aa4fb4";
        var wasmJson$i = {
          name: name$i,
          data: data$i,
          hash: hash$i
        };
        function encodeResult(salt, options, res) {
          const parameters = [
            `m=${options.memorySize}`,
            `t=${options.iterations}`,
            `p=${options.parallelism}`
          ].join(",");
          return `$argon2${options.hashType}$v=19$${parameters}$${encodeBase64(salt, false)}$${encodeBase64(res, false)}`;
        }
        const uint32View = new DataView(new ArrayBuffer(4));
        function int32LE(x) {
          uint32View.setInt32(0, x, true);
          return new Uint8Array(uint32View.buffer);
        }
        function hashFunc(blake512, buf, len) {
          return __awaiter(this, void 0, void 0, function* () {
            if (len <= 64) {
              const blake = yield createBLAKE2b(len * 8);
              blake.update(int32LE(len));
              blake.update(buf);
              return blake.digest("binary");
            }
            const r = Math.ceil(len / 32) - 2;
            const ret = new Uint8Array(len);
            blake512.init();
            blake512.update(int32LE(len));
            blake512.update(buf);
            let vp = blake512.digest("binary");
            ret.set(vp.subarray(0, 32), 0);
            for (let i = 1; i < r; i++) {
              blake512.init();
              blake512.update(vp);
              vp = blake512.digest("binary");
              ret.set(vp.subarray(0, 32), i * 32);
            }
            const partialBytesNeeded = len - 32 * r;
            let blakeSmall;
            if (partialBytesNeeded === 64) {
              blakeSmall = blake512;
              blakeSmall.init();
            } else {
              blakeSmall = yield createBLAKE2b(partialBytesNeeded * 8);
            }
            blakeSmall.update(vp);
            vp = blakeSmall.digest("binary");
            ret.set(vp.subarray(0, partialBytesNeeded), r * 32);
            return ret;
          });
        }
        function getHashType(type) {
          switch (type) {
            case "d":
              return 0;
            case "i":
              return 1;
            default:
              return 2;
          }
        }
        function argon2Internal(options) {
          return __awaiter(this, void 0, void 0, function* () {
            const { parallelism, iterations, hashLength } = options;
            const password = getUInt8Buffer(options.password);
            const salt = getUInt8Buffer(options.salt);
            const version2 = 19;
            const hashType = getHashType(options.hashType);
            const { memorySize } = options;
            const [argon2Interface, blake512] = yield Promise.all([
              WASMInterface(wasmJson$i, 1024),
              createBLAKE2b(512)
            ]);
            argon2Interface.setMemorySize(memorySize * 1024 + 1024);
            const initVector = new Uint8Array(24);
            const initVectorView = new DataView(initVector.buffer);
            initVectorView.setInt32(0, parallelism, true);
            initVectorView.setInt32(4, hashLength, true);
            initVectorView.setInt32(8, memorySize, true);
            initVectorView.setInt32(12, iterations, true);
            initVectorView.setInt32(16, version2, true);
            initVectorView.setInt32(20, hashType, true);
            argon2Interface.writeMemory(initVector, memorySize * 1024);
            blake512.init();
            blake512.update(initVector);
            blake512.update(int32LE(password.length));
            blake512.update(password);
            blake512.update(int32LE(salt.length));
            blake512.update(salt);
            blake512.update(int32LE(0));
            blake512.update(int32LE(0));
            const segments = Math.floor(memorySize / (parallelism * 4));
            const lanes = segments * 4;
            const param = new Uint8Array(72);
            const H0 = blake512.digest("binary");
            param.set(H0);
            for (let lane = 0; lane < parallelism; lane++) {
              param.set(int32LE(0), 64);
              param.set(int32LE(lane), 68);
              let position = lane * lanes;
              let chunk = yield hashFunc(blake512, param, 1024);
              argon2Interface.writeMemory(chunk, position * 1024);
              position += 1;
              param.set(int32LE(1), 64);
              chunk = yield hashFunc(blake512, param, 1024);
              argon2Interface.writeMemory(chunk, position * 1024);
            }
            const C = new Uint8Array(1024);
            writeHexToUInt8(C, argon2Interface.calculate(new Uint8Array([]), memorySize));
            const res = yield hashFunc(blake512, C, hashLength);
            if (options.outputType === "hex") {
              const digestChars = new Uint8Array(hashLength * 2);
              return getDigestHex(digestChars, res, hashLength);
            }
            if (options.outputType === "encoded") {
              return encodeResult(salt, options, res);
            }
            return res;
          });
        }
        const validateOptions$3 = (options) => {
          if (!options || typeof options !== "object") {
            throw new Error("Invalid options parameter. It requires an object.");
          }
          if (!options.password) {
            throw new Error("Password must be specified");
          }
          options.password = getUInt8Buffer(options.password);
          if (options.password.length < 1) {
            throw new Error("Password must be specified");
          }
          if (!options.salt) {
            throw new Error("Salt must be specified");
          }
          options.salt = getUInt8Buffer(options.salt);
          if (options.salt.length < 8) {
            throw new Error("Salt should be at least 8 bytes long");
          }
          if (!Number.isInteger(options.iterations) || options.iterations < 1) {
            throw new Error("Iterations should be a positive number");
          }
          if (!Number.isInteger(options.parallelism) || options.parallelism < 1) {
            throw new Error("Parallelism should be a positive number");
          }
          if (!Number.isInteger(options.hashLength) || options.hashLength < 4) {
            throw new Error("Hash length should be at least 4 bytes.");
          }
          if (!Number.isInteger(options.memorySize)) {
            throw new Error("Memory size should be specified.");
          }
          if (options.memorySize < 8 * options.parallelism) {
            throw new Error("Memory size should be at least 8 * parallelism.");
          }
          if (options.outputType === void 0) {
            options.outputType = "hex";
          }
          if (!["hex", "binary", "encoded"].includes(options.outputType)) {
            throw new Error(`Insupported output type ${options.outputType}. Valid values: ['hex', 'binary', 'encoded']`);
          }
        };
        function argon2i(options) {
          return __awaiter(this, void 0, void 0, function* () {
            validateOptions$3(options);
            return argon2Internal(Object.assign(Object.assign({}, options), { hashType: "i" }));
          });
        }
        function argon2id(options) {
          return __awaiter(this, void 0, void 0, function* () {
            validateOptions$3(options);
            return argon2Internal(Object.assign(Object.assign({}, options), { hashType: "id" }));
          });
        }
        function argon2d(options) {
          return __awaiter(this, void 0, void 0, function* () {
            validateOptions$3(options);
            return argon2Internal(Object.assign(Object.assign({}, options), { hashType: "d" }));
          });
        }
        const getHashParameters = (password, encoded) => {
          const regex = /^\$argon2(id|i|d)\$v=([0-9]+)\$((?:[mtp]=[0-9]+,){2}[mtp]=[0-9]+)\$([A-Za-z0-9+/]+)\$([A-Za-z0-9+/]+)$/;
          const match = encoded.match(regex);
          if (!match) {
            throw new Error("Invalid hash");
          }
          const [, hashType, version2, parameters, salt, hash2] = match;
          if (version2 !== "19") {
            throw new Error(`Unsupported version: ${version2}`);
          }
          const parsedParameters = {};
          const paramMap = { m: "memorySize", p: "parallelism", t: "iterations" };
          parameters.split(",").forEach((x) => {
            const [n, v] = x.split("=");
            parsedParameters[paramMap[n]] = parseInt(v, 10);
          });
          return Object.assign(Object.assign({}, parsedParameters), { password, hashType, salt: decodeBase64(salt), hashLength: getDecodeBase64Length(hash2), outputType: "encoded" });
        };
        const validateVerifyOptions$1 = (options) => {
          if (!options || typeof options !== "object") {
            throw new Error("Invalid options parameter. It requires an object.");
          }
          if (options.hash === void 0 || typeof options.hash !== "string") {
            throw new Error("Hash should be specified");
          }
        };
        function argon2Verify(options) {
          return __awaiter(this, void 0, void 0, function* () {
            validateVerifyOptions$1(options);
            const params = getHashParameters(options.password, options.hash);
            validateOptions$3(params);
            const hashStart = options.hash.lastIndexOf("$") + 1;
            const result = yield argon2Internal(params);
            return result.substring(hashStart) === options.hash.substring(hashStart);
          });
        }
        var name$h = "blake2s";
        var data$h = "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";
        var hash$h = "0f570f49";
        var wasmJson$h = {
          name: name$h,
          data: data$h,
          hash: hash$h
        };
        const mutex$j = new Mutex();
        let wasmCache$j = null;
        function validateBits$3(bits) {
          if (!Number.isInteger(bits) || bits < 8 || bits > 256 || bits % 8 !== 0) {
            return new Error("Invalid variant! Valid values: 8, 16, ..., 256");
          }
          return null;
        }
        function getInitParam(outputBits, keyBits) {
          return outputBits | keyBits << 16;
        }
        function blake2s(data2, bits = 256, key = null) {
          if (validateBits$3(bits)) {
            return Promise.reject(validateBits$3(bits));
          }
          let keyBuffer = null;
          let initParam = bits;
          if (key !== null) {
            keyBuffer = getUInt8Buffer(key);
            if (keyBuffer.length > 32) {
              return Promise.reject(new Error("Max key length is 32 bytes"));
            }
            initParam = getInitParam(bits, keyBuffer.length);
          }
          const hashLength = bits / 8;
          if (wasmCache$j === null || wasmCache$j.hashLength !== hashLength) {
            return lockedCreate(mutex$j, wasmJson$h, hashLength).then((wasm) => {
              wasmCache$j = wasm;
              if (initParam > 512) {
                wasmCache$j.writeMemory(keyBuffer);
              }
              return wasmCache$j.calculate(data2, initParam);
            });
          }
          try {
            if (initParam > 512) {
              wasmCache$j.writeMemory(keyBuffer);
            }
            const hash2 = wasmCache$j.calculate(data2, initParam);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createBLAKE2s(bits = 256, key = null) {
          if (validateBits$3(bits)) {
            return Promise.reject(validateBits$3(bits));
          }
          let keyBuffer = null;
          let initParam = bits;
          if (key !== null) {
            keyBuffer = getUInt8Buffer(key);
            if (keyBuffer.length > 32) {
              return Promise.reject(new Error("Max key length is 32 bytes"));
            }
            initParam = getInitParam(bits, keyBuffer.length);
          }
          const outputSize = bits / 8;
          return WASMInterface(wasmJson$h, outputSize).then((wasm) => {
            if (initParam > 512) {
              wasm.writeMemory(keyBuffer);
            }
            wasm.init(initParam);
            const obj = {
              init: initParam > 512 ? () => {
                wasm.writeMemory(keyBuffer);
                wasm.init(initParam);
                return obj;
              } : () => {
                wasm.init(initParam);
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 64,
              digestSize: outputSize
            };
            return obj;
          });
        }
        var name$g = "blake3";
        var data$g = "AGFzbQEAAAABJQZgAAF/YAF/AGADf39/AGAGf39/f35/AGABfgBgBX9/fn9/AX8DDQwAAQIDBAUBAQEBAAIEBQFwAQEBBQQBAQICBg4CfwFBgJgFC38AQYAICwdwCAZtZW1vcnkCAA5IYXNoX0dldEJ1ZmZlcgAACUhhc2hfSW5pdAAHC0hhc2hfVXBkYXRlAAgKSGFzaF9GaW5hbAAJDUhhc2hfR2V0U3RhdGUACg5IYXNoX0NhbGN1bGF0ZQALClNUQVRFX1NJWkUDAQrAWAwFAEGACQubEQkDfwR+An8BfgF/A34CfwJ+BH8jAEHQAmsiASQAAkAgAEUNAAJAAkBBAC0AiYoBQQZ0QQAtAIiKAWoiAg0AQYAJIQMMAQtBoIkBQYAJIABBgAggAmsiAiACIABLGyICEAIgACACayIARQ0BIAFBoAFqQQApA9CJATcDACABQagBakEAKQPYiQE3AwAgAUEAKQOgiQEiBDcDcCABQQApA6iJASIFNwN4IAFBACkDsIkBIgY3A4ABIAFBACkDuIkBIgc3A4gBIAFBACkDyIkBNwOYAUEALQCKigEhCEEALQCJigEhCUEAKQPAiQEhCkEALQCIigEhCyABQbABakEAKQPgiQE3AwAgAUG4AWpBACkD6IkBNwMAIAFBwAFqQQApA/CJATcDACABQcgBakEAKQP4iQE3AwAgAUHQAWpBACkDgIoBNwMAIAEgCzoA2AEgASAKNwOQASABIAggCUVyQQJyIgg6ANkBIAEgBzcD+AEgASAGNwPwASABIAU3A+gBIAEgBDcD4AEgAUGAAmogAUHgAWogAUGYAWogCyAKIAhB/wFxEAMgASkDuAIhCiABKQOYAiEEIAEpA7ACIQUgASkDkAIhBiABKQOgAiEHIAEpA4ACIQwgASkDqAIhDSABKQOIAiEOQQApA8CJARAEQQAtAJCKASIIQQV0IgtBmYoBaiANIA6FNwMAIAtBkYoBaiAHIAyFNwMAIAtBoYoBaiAFIAaFNwMAIAtBqYoBaiAKIASFNwMAQQAgCEEBajoAkIoBQQBCADcD2IkBQQBCADcD+IkBQQBBACkDgIkBNwOgiQFBAEIANwOAigFBAEIANwPwiQFBAEIANwPoiQFBAEIANwPgiQFBAEIANwPQiQFBAEIANwPIiQFBAEEAKQOYiQE3A7iJAUEAQQApA4iJATcDqIkBQQBBACkDkIkBNwOwiQFBAEEAKQPAiQFCAXw3A8CJAUEAQQA7AYiKASACQYAJaiEDCwJAIABBgQhJDQBBACkDwIkBIQQgAUEoaiEPA0AgBEIKhiEKQgEgAEEBcq15Qj+FhqchAgNAIAIiEEEBdiECIAogEEF/aq2DQgBSDQALIBBBCnatIQ0CQAJAIBBBgAhLDQAgAUEAOwHYASABQgA3A9ABIAFCADcDyAEgAUIANwPAASABQgA3A7gBIAFCADcDsAEgAUIANwOoASABQgA3A6ABIAFCADcDmAEgAUEAKQOAiQE3A3AgAUEAKQOIiQE3A3ggAUEAKQOQiQE3A4ABIAFBAC0AiooBOgDaASABQQApA5iJATcDiAEgASAENwOQASABQfAAaiADIBAQAiABIAEpA3AiBDcDACABIAEpA3giBTcDCCABIAEpA4ABIgY3AxAgASABKQOIASIHNwMYIAEgASkDmAE3AyggASABKQOgATcDMCABIAEpA6gBNwM4IAEtANoBIQIgAS0A2QEhCyABKQOQASEKIAEgAS0A2AEiCDoAaCABIAo3AyAgASABKQOwATcDQCABIAEpA7gBNwNIIAEgASkDwAE3A1AgASABKQPIATcDWCABIAEpA9ABNwNgIAEgAiALRXJBAnIiAjoAaSABIAc3A/gBIAEgBjcD8AEgASAFNwPoASABIAQ3A+ABIAFBgAJqIAFB4AFqIA8gCCAKIAJB/wFxEAMgASkDoAIhBCABKQOAAiEFIAEpA6gCIQYgASkDiAIhByABKQOwAiEMIAEpA5ACIQ4gASkDuAIhESABKQOYAiESIAoQBEEAQQAtAJCKASICQQFqOgCQigEgAkEFdCICQamKAWogESAShTcDACACQaGKAWogDCAOhTcDACACQZmKAWogBiAHhTcDACACQZGKAWogBCAFhTcDAAwBCwJAAkAgAyAQIARBAC0AiooBIgIgAUHwAGoQBSITQQJLDQAgASkDiAEhCiABKQOAASEEIAEpA3ghBSABKQNwIQYMAQsgAkEEciEUA0AgE0F+akEBdiIVQQFqIQggAUHIAmohAiABQfAAaiELA0AgAiALNgIAIAtBwABqIQsgAkEEaiECIAhBf2oiCA0ACyABIQIgAUHIAmohCyAVQQFqIhYhCANAIAsoAgAhCSABQQApA4CJATcD4AEgAUEAKQOIiQE3A+gBIAFBACkDkIkBNwPwASABQQApA5iJATcD+AEgAUGAAmogAUHgAWogCUHAAEIAIBQQAyABKQOgAiEKIAEpA4ACIQQgASkDqAIhBSABKQOIAiEGIAEpA7ACIQcgASkDkAIhDCACQRhqIAEpA7gCIAEpA5gChTcDACACQRBqIAcgDIU3AwAgAkEIaiAFIAaFNwMAIAIgCiAEhTcDACACQSBqIQIgC0EEaiELIAhBf2oiCA0ACwJAAkAgE0F+cSATSQ0AIBYhEwwBCyABIBZBBXRqIgIgAUHwAGogFkEGdGoiCykDADcDACACIAspAwg3AwggAiALKQMQNwMQIAIgCykDGDcDGCAVQQJqIRMLIAEgASkDACIGNwNwIAEgASkDCCIFNwN4IAEgASkDECIENwOAASABIAEpAxgiCjcDiAEgE0ECSw0ACwsgASkDkAEhByABKQOYASEMIAEpA6ABIQ4gASkDqAEhEUEAKQPAiQEQBEEALQCQigEiC0EFdCICQaGKAWogBDcDACACQZmKAWogBTcDAEEAIAtBAWo6AJCKASACQZGKAWogBjcDACACQamKAWogCjcDAEEAKQPAiQEgDUIBiHwQBEEAQQAtAJCKASICQQFqOgCQigEgAkEFdCICQamKAWogETcDACACQaGKAWogDjcDACACQZmKAWogDDcDACACQZGKAWogBzcDAAtBAEEAKQPAiQEgDXwiBDcDwIkBIAMgEGohAyAAIBBrIgBBgAhLDQALIABFDQELQaCJASADIAAQAkEAKQPAiQEQBAsgAUHQAmokAAvwBAEFfyMAQcAAayIDJAACQAJAIAAtAGgiBEUNAAJAIAJBwAAgBGsiBSAFIAJLGyIGRQ0AIAAgBGpBKGohBCABIQUgBiEHA0AgBCAFLQAAOgAAIAVBAWohBSAEQQFqIQQgB0F/aiIHDQALIAAtAGghBAsgACAEIAZqIgQ6AGggASAGaiEBAkAgAiAGayICDQBBACECDAILIAMgACAAQShqQcAAIAApAyAgAC0AaiAAQekAaiIELQAARXIQAyAAIAMpAyAgAykDAIU3AwAgACADKQMoIAMpAwiFNwMIIAAgAykDMCADKQMQhTcDECAAIAMpAzggAykDGIU3AxggAEEAOgBoIABB4ABqQgA3AwAgAEHYAGpCADcDACAAQdAAakIANwMAIABByABqQgA3AwAgAEHAAGpCADcDACAAQThqQgA3AwAgAEEwakIANwMAIABCADcDKCAEIAQtAABBAWo6AAALQQAhBCACQcEASQ0AIABB6QBqIgQtAAAhBQNAIAMgACABQcAAIAApAyAgAC0AaiAFQf8BcUVyEAMgACADKQMgIAMpAwCFNwMAIAAgAykDKCADKQMIhTcDCCAAIAMpAzAgAykDEIU3AxAgACADKQM4IAMpAxiFNwMYIAQgBC0AAEEBaiIFOgAAIAFBwABqIQEgAkFAaiICQcAASw0ACyAALQBoIQQLAkAgAkHAACAEQf8BcSIHayIFIAUgAksbIgJFDQAgACAHakEoaiEEIAIhBQNAIAQgAS0AADoAACABQQFqIQEgBEEBaiEEIAVBf2oiBQ0ACyAALQBoIQQLIAAgBCACajoAaCADQcAAaiQAC80cAgx+H38gAikDICEGIAIpAzghByACKQMwIQggAikDACEJIAIpAyghCiACKQMQIQsgAikDCCEMIAIpAxghDSAAIAEpAwAiDjcDACAAIAEpAwgiDzcDCCAAIAEpAxAiEDcDECABKQMYIREgAELnzKfQ1tDrs7t/NwMgIAAgETcDGCAAQvLmu+Ojp/2npX83AyggACAEpyISNgIwIAAgBEIgiKciEzYCNCAAIAM2AjggACAFNgI8IAAgDaciAiAPQiCIp2ogEUIgiKciFGoiFSANQiCIpyIBaiAVIAVzQRB0IBVBEHZyIhZBuuq/qnpqIhcgFHNBFHciGGoiGSAJpyIFIA6naiAQpyIUaiIaIAlCIIinIhVqIBogEnNBEHciEkHnzKfQBmoiGiAUc0EUdyIUaiIbIBJzQRh3IhwgGmoiHSAUc0EZdyIeaiAHpyISaiIfIAdCIIinIhRqIB8gC6ciGiAPp2ogEaciIGoiISALQiCIpyIiaiAhIANzQRB0ICFBEHZyIgNB8ua74wNqIiMgIHNBFHciIGoiJCADc0EYdyIlc0EQdyIfIAynIgMgDkIgiKdqIBBCIIinIiZqIicgDEIgiKciIWogJyATc0EQdyITQYXdntt7aiInICZzQRR3IiZqIiggE3NBGHciKSAnaiInaiIqIB5zQRR3Ih5qIisgGmogGSAWc0EYdyIZIBdqIiwgGHNBGXciFyAkaiAIpyITaiIYIAhCIIinIhZqIBggKXNBEHciGCAdaiIdIBdzQRR3IhdqIiQgGHNBGHciKSAdaiIdIBdzQRl3Ii1qIi4gFmogJyAmc0EZdyImIBtqIAanIhdqIhsgBkIgiKciGGogGSAbc0EQdyIZICUgI2oiG2oiIyAmc0EUdyIlaiImIBlzQRh3IicgLnNBEHciLiAbICBzQRl3IiAgKGogCqciGWoiKCAKQiCIpyIbaiAoIBxzQRB3IhwgLGoiKCAgc0EUdyIgaiIsIBxzQRh3IhwgKGoiKGoiLyAtc0EUdyItaiIwICYgA2ogKyAfc0EYdyIfICpqIiYgHnNBGXciHmoiKiACaiAcICpzQRB3IhwgHWoiHSAec0EUdyIeaiIqIBxzQRh3IhwgHWoiHSAec0EZdyIeaiAUaiIrIBdqICsgJCABaiAoICBzQRl3IiBqIiQgBWogHyAkc0EQdyIfICcgI2oiI2oiJCAgc0EUdyIgaiInIB9zQRh3Ih9zQRB3IiggLCAhaiAjICVzQRl3IiNqIiUgGWogKSAlc0EQdyIlICZqIiYgI3NBFHciI2oiKSAlc0EYdyIlICZqIiZqIisgHnNBFHciHmoiLCABaiAwIC5zQRh3Ii4gL2oiLyAtc0EZdyItICdqIBhqIicgEmogJyAlc0EQdyIlIB1qIh0gLXNBFHciJ2oiLSAlc0EYdyIlIB1qIh0gJ3NBGXciJ2oiMCASaiAmICNzQRl3IiMgKmogFWoiJiAbaiAuICZzQRB3IiYgHyAkaiIfaiIkICNzQRR3IiNqIiogJnNBGHciJiAwc0EQdyIuIB8gIHNBGXciHyApaiATaiIgICJqICAgHHNBEHciHCAvaiIgIB9zQRR3Ih9qIikgHHNBGHciHCAgaiIgaiIvICdzQRR3IidqIjAgKiAhaiAsIChzQRh3IiggK2oiKiAec0EZdyIeaiIrIBpqIBwgK3NBEHciHCAdaiIdIB5zQRR3Ih5qIisgHHNBGHciHCAdaiIdIB5zQRl3Ih5qIBdqIiwgFWogLCAtIBZqICAgH3NBGXciH2oiICADaiAoICBzQRB3IiAgJiAkaiIkaiImIB9zQRR3Ih9qIiggIHNBGHciIHNBEHciLCApIBlqICQgI3NBGXciI2oiJCATaiAlICRzQRB3IiQgKmoiJSAjc0EUdyIjaiIpICRzQRh3IiQgJWoiJWoiKiAec0EUdyIeaiItIBZqIDAgLnNBGHciLiAvaiIvICdzQRl3IicgKGogG2oiKCAUaiAoICRzQRB3IiQgHWoiHSAnc0EUdyInaiIoICRzQRh3IiQgHWoiHSAnc0EZdyInaiIwIBRqICUgI3NBGXciIyAraiACaiIlICJqIC4gJXNBEHciJSAgICZqIiBqIiYgI3NBFHciI2oiKyAlc0EYdyIlIDBzQRB3Ii4gICAfc0EZdyIfIClqIBhqIiAgBWogICAcc0EQdyIcIC9qIiAgH3NBFHciH2oiKSAcc0EYdyIcICBqIiBqIi8gJ3NBFHciJ2oiMCArIBlqIC0gLHNBGHciKyAqaiIqIB5zQRl3Ih5qIiwgAWogHCAsc0EQdyIcIB1qIh0gHnNBFHciHmoiLCAcc0EYdyIcIB1qIh0gHnNBGXciHmogFWoiLSACaiAtICggEmogICAfc0EZdyIfaiIgICFqICsgIHNBEHciICAlICZqIiVqIiYgH3NBFHciH2oiKCAgc0EYdyIgc0EQdyIrICkgE2ogJSAjc0EZdyIjaiIlIBhqICQgJXNBEHciJCAqaiIlICNzQRR3IiNqIikgJHNBGHciJCAlaiIlaiIqIB5zQRR3Ih5qIi0gEmogMCAuc0EYdyIuIC9qIi8gJ3NBGXciJyAoaiAiaiIoIBdqICggJHNBEHciJCAdaiIdICdzQRR3IidqIiggJHNBGHciJCAdaiIdICdzQRl3IidqIjAgF2ogJSAjc0EZdyIjICxqIBpqIiUgBWogLiAlc0EQdyIlICAgJmoiIGoiJiAjc0EUdyIjaiIsICVzQRh3IiUgMHNBEHciLiAgIB9zQRl3Ih8gKWogG2oiICADaiAgIBxzQRB3IhwgL2oiICAfc0EUdyIfaiIpIBxzQRh3IhwgIGoiIGoiLyAnc0EUdyInaiIwIC5zQRh3Ii4gL2oiLyAnc0EZdyInICggFGogICAfc0EZdyIfaiIgIBlqIC0gK3NBGHciKCAgc0EQdyIgICUgJmoiJWoiJiAfc0EUdyIfaiIraiAFaiItIBVqIC0gKSAYaiAlICNzQRl3IiNqIiUgG2ogJCAlc0EQdyIkICggKmoiJWoiKCAjc0EUdyIjaiIpICRzQRh3IiRzQRB3IiogLCATaiAlIB5zQRl3Ih5qIiUgFmogHCAlc0EQdyIcIB1qIh0gHnNBFHciHmoiJSAcc0EYdyIcIB1qIh1qIiwgJ3NBFHciJ2oiLSAXaiArICBzQRh3IiAgJmoiJiAfc0EZdyIfIClqICJqIikgIWogKSAcc0EQdyIcIC9qIikgH3NBFHciH2oiKyAcc0EYdyIcIClqIikgH3NBGXciH2oiLyATaiAwIB0gHnNBGXciHWogAmoiHiAaaiAeICBzQRB3Ih4gJCAoaiIgaiIkIB1zQRR3Ih1qIiggHnNBGHciHiAvc0EQdyIvICAgI3NBGXciICAlaiABaiIjIANqIC4gI3NBEHciIyAmaiIlICBzQRR3IiBqIiYgI3NBGHciIyAlaiIlaiIuIB9zQRR3Ih9qIjAgL3NBGHciLyAuaiIuIB9zQRl3Ih8gKyAbaiAlICBzQRl3IiBqIiUgImogLSAqc0EYdyIqICVzQRB3IiUgHiAkaiIeaiIkICBzQRR3IiBqIitqIAVqIi0gGWogLSAmIBhqIB4gHXNBGXciHWoiHiASaiAcIB5zQRB3IhwgKiAsaiIeaiImIB1zQRR3Ih1qIiogHHNBGHciHHNBEHciLCAoIBRqIB4gJ3NBGXciHmoiJyAVaiAjICdzQRB3IiMgKWoiJyAec0EUdyIeaiIoICNzQRh3IiMgJ2oiJ2oiKSAfc0EUdyIfaiItICJqICsgJXNBGHciIiAkaiIkICBzQRl3IiAgKmogFmoiJSAhaiAjICVzQRB3IiMgLmoiJSAgc0EUdyIgaiIqICNzQRh3IiMgJWoiJSAgc0EZdyIgaiIrIAVqICcgHnNBGXciBSAwaiADaiIeIAJqIB4gInNBEHciIiAcICZqIhxqIh4gBXNBFHciBWoiJiAic0EYdyIiICtzQRB3IicgKCAcIB1zQRl3IhxqIBpqIh0gAWogHSAvc0EQdyIdICRqIiQgHHNBFHciHGoiKCAdc0EYdyIdICRqIiRqIisgIHNBFHciIGoiLiAnc0EYdyInICtqIisgIHNBGXciICAqIBtqICQgHHNBGXciG2oiHCAUaiAtICxzQRh3IhQgHHNBEHciHCAiIB5qIiJqIh4gG3NBFHciG2oiJGogEmoiEiAZaiAoIBdqICIgBXNBGXciBWoiIiACaiAjICJzQRB3IgIgFCApaiIUaiIiIAVzQRR3IgVqIhcgAnNBGHciAiASc0EQdyISICYgFWogFCAfc0EZdyIVaiIUIBhqIB0gFHNBEHciFCAlaiIYIBVzQRR3IhVqIhkgFHNBGHciFCAYaiIYaiIdICBzQRR3Ih9qIiA2AgAgACAXICQgHHNBGHciHCAeaiIeIBtzQRl3IhtqIAFqIgEgFmogASAUc0EQdyIBICtqIhQgG3NBFHciFmoiFyABc0EYdyIBNgI4IAAgGCAVc0EZdyIVIC5qIANqIgMgE2ogAyAcc0EQdyIDIAIgImoiAmoiIiAVc0EUdyIVaiITNgIEIAAgASAUaiIBNgIkIAAgAiAFc0EZdyICIBlqICFqIgUgGmogBSAnc0EQdyIFIB5qIhQgAnNBFHciAmoiGjYCCCAAICAgEnNBGHciEiAdaiIhNgIoIAAgEyADc0EYdyIDNgIwIAAgASAWc0EZdzYCECAAIBogBXNBGHciATYCNCAAICEgH3NBGXc2AhQgACABIBRqIgE2AiAgACADICJqIgUgFXNBGXc2AhggACASNgI8IAAgASACc0EZdzYCHCAAIBc2AgwgACAFNgIsC7cDAwR/A34FfyMAQdABayIBJAACQCAAe6ciAkEALQCQigEiA08NACABQShqIQQDQCABQQApA4CJASIANwMAIAFBACkDiIkBIgU3AwggAUEAKQOQiQEiBjcDECABQQApA5iJASIHNwMYIAEgA0EFdCIDQdGJAWoiCCkDADcDKCABIANB2YkBaiIJKQMANwMwIAEgA0HhiQFqIgopAwA3AzggASADQemJAWoiCykDADcDQEEALQCKigEhDCABQcAAOgBoIAEgDEEEciIMOgBpIAFCADcDICABIANB8YkBaikDADcDSCABIANB+YkBaikDADcDUCABIANBgYoBaikDADcDWCABIANBiYoBaikDADcDYCABIAc3A4gBIAEgBjcDgAEgASAFNwN4IAEgADcDcCABQZABaiABQfAAaiAEQcAAQgAgDBADIAsgASkDyAEgASkDqAGFNwMAIAogASkDwAEgASkDoAGFNwMAIAkgASkDuAEgASkDmAGFNwMAIAggASkDsAEgASkDkAGFNwMAQQBBAC0AkIoBQX9qIgM6AJCKASACIANB/wFxIgNJDQALCyABQdABaiQAC/oLBAR/BH4GfwF+IwBB0AJrIgUkAAJAAkAgAUGACEsNAEEAIQYgASEHQQAhCAJAIAFB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IQwDQCABQbABaiABIAsgCUH/AXEgCCACQQhyQf8BcRADIAEgASkD2AEiDSABKQO4AYU3A3ggASABKQPgASIOIAEpA8ABhTcDgAEgASAGIAEpA+gBIg+FNwOoASABIAUgDoU3A6ABIAEgBCANhTcDmAEgASADIAEpA9ABIg2FNwOQASABIA8gASkDyAGFNwOIASAAQcAAIABBwABJGyIQQX9qIQkgASANIAEpA7ABhSINNwNwIA2nIREgCiEHIAwhAgJAA0AgAiAROgAAIAlFDQEgCUF/aiEJIAJBAWohAiAHLQAAIREgB0EBaiEHDAALCyAAIBBrIgBFDQIgDCAQaiEMIAhCAXwhCCABKQMIIQQgASkDACEDIAEpAxghBiABKQMQIQUgAS0AaSECIAEtAGghCQwACwsCQAJAAkBBAC0AiYoBIglBBnRBAEEALQCIigEiDGtGDQAgAUHgAGpBACkDgIoBNwMAIAFB2ABqQQApA/iJATcDACABQdAAakEAKQPwiQE3AwAgAUHIAGpBACkD6IkBNwMAIAFBwABqQQApA+CJATcDACABQThqQQApA9iJATcDACABQTBqQQApA9CJATcDACABQQApA8iJATcDKCABQQApA8CJASIINwMgIAFBACkDuIkBIg03AxggAUEAKQOwiQEiDjcDECABQQApA6iJASIPNwMIIAFBACkDoIkBIgM3AwBBAC0AiooBIQcgAUHuAGogAUG0AWovAQA7AQAgASABKAGwATYBaiABIAw6AGggASAHIAlFckECciIJOgBpDAELIAFB4ABqIAJBfmoiAkEFdCIJQcmKAWopAwA3AwAgAUHYAGogCUHBigFqKQMANwMAIAFB0ABqIAlBuYoBaikDADcDACABQcgAaiAJQbGKAWopAwA3AwBBwAAhDCABQcAAaiAJQamKAWopAwA3AwAgAUE4aiAJQaGKAWopAwA3AwAgAUEwaiAJQZmKAWopAwA3AwBCACEIIAFCADcDICABQQApA5iJASINNwMYIAFBACkDkIkBIg43AxAgAUEAKQOIiQEiDzcDCCABQQApA4CJASIDNwMAIAEgCUGRigFqKQMANwMoQQAtAIqKASEJIAFB7gBqIAFBsAFqQQRqLwEAOwEAIAEgASgBsAE2AWogASAJQQRyIgk6AGkgAUHAADoAaCACRQ0BCyACQX9qIgdBBXQiEUGRigFqKQMAIQQgEUGZigFqKQMAIQUgEUGhigFqKQMAIQYgEUGpigFqKQMAIRIgASANNwOIASABIA43A4ABIAEgDzcDeCABIAM3A3AgAUGwAWogAUHwAGogAUEoaiIQIAwgCCAJQf8BcRADIAFBwAA6AGggASASNwNAIAEgBjcDOCABIAU3AzAgASAENwMoIAFCADcDICABQQApA5iJASIINwMYIAFBACkDkIkBIg03AxAgAUEAKQOIiQEiDjcDCCABQQApA4CJASIPNwMAIAFBAC0AiooBQQRyIgk6AGkgASABKQPoASABKQPIAYU3A2AgASABKQPgASABKQPAAYU3A1ggASABKQPYASABKQO4AYU3A1AgASABKQPQASABKQOwAYU3A0ggAUHuAGogAUGwAWpBBGoiDC8BADsBACABIAEoAbABNgFqIAdFDQAgAUHqAGohESACQQV0QemJAWohAgNAIAJBaGopAwAhAyACQXBqKQMAIQQgAkF4aikDACEFIAIpAwAhBiABIAg3A4gBIAEgDTcDgAEgASAONwN4IAEgDzcDcCABQbABaiABQfAAaiAQQcAAQgAgCUH/AXEQAyABQcAAOgBoIAEgBjcDQCABIAU3AzggASAENwMwIAEgAzcDKCABQgA3AyAgAUEAKQOYiQEiCDcDGCABQQApA5CJASINNwMQIAFBACkDiIkBIg43AwggAUEAKQOAiQEiDzcDACABQQAtAIqKAUEEciIJOgBpIAEgASkD6AEgASkDyAGFNwNgIAEgASkD4AEgASkDwAGFNwNYIAEgASkD2AEgASkDuAGFNwNQIAEgASkD0AEgASkDsAGFNwNIIBFBBGogDC8BADsBACARIAEoAbABNgEAIAJBYGohAiAHQX9qIgcNAAsLIAFB8ABqQQFyIQogAUEoaiELQgAhCEGACSEMQcAAIQIDQCABQbABaiABIAsgAkH/AXEgCCAJQQhyQf8BcRADIAEgASkD2AEiDSABKQO4AYU3A3ggASABKQPgASIOIAEpA8ABhTcDgAEgASABKQPoASIPIAEpA8gBhTcDiAEgASABKQMAIAEpA9ABIgOFNwOQASABIA0gASkDCIU3A5gBIAEgDiABKQMQhTcDoAEgASADIAEpA7ABhSINNwNwIAEgDyABKQMYhTcDqAEgAEHAACAAQcAASRsiEEF/aiECIA2nIREgCiEHIAwhCQJAA0AgCSAROgAAIAJFDQEgAkF/aiECIAlBAWohCSAHLQAAIREgB0EBaiEHDAALCyAAIBBrIgBFDQEgDCAQaiEMIAhCAXwhCCABLQBpIQkgAS0AaCECDAALCyABQfABaiQAC6MCAQR+AkACQCAAQSBGDQBCq7OP/JGjs/DbACEBQv+kuYjFkdqCm38hAkLy5rvjo6f9p6V/IQNC58yn0NbQ67O7fyEEQQAhAAwBC0EAKQOYCSEBQQApA5AJIQJBACkDiAkhA0EAKQOACSEEQRAhAAtBACAAOgCKigFBAEIANwOAigFBAEIANwP4iQFBAEIANwPwiQFBAEIANwPoiQFBAEIANwPgiQFBAEIANwPYiQFBAEIANwPQiQFBAEIANwPIiQFBAEIANwPAiQFBACABNwO4iQFBACACNwOwiQFBACADNwOoiQFBACAENwOgiQFBACABNwOYiQFBACACNwOQiQFBACADNwOIiQFBACAENwOAiQFBAEEAOgCQigFBAEEAOwGIigELBgAgABABCwYAIAAQBgsGAEGAiQELqwIBBH4CQAJAIAFBIEYNAEKrs4/8kaOz8NsAIQNC/6S5iMWR2oKbfyEEQvLmu+Ojp/2npX8hBULnzKfQ1tDrs7t/IQZBACEBDAELQQApA5gJIQNBACkDkAkhBEEAKQOICSEFQQApA4AJIQZBECEBC0EAIAE6AIqKAUEAQgA3A4CKAUEAQgA3A/iJAUEAQgA3A/CJAUEAQgA3A+iJAUEAQgA3A+CJAUEAQgA3A9iJAUEAQgA3A9CJAUEAQgA3A8iJAUEAQgA3A8CJAUEAIAM3A7iJAUEAIAQ3A7CJAUEAIAU3A6iJAUEAIAY3A6CJAUEAIAM3A5iJAUEAIAQ3A5CJAUEAIAU3A4iJAUEAIAY3A4CJAUEAQQA6AJCKAUEAQQA7AYiKASAAEAEgAhAGCwsLAQBBgAgLBHgHAAA=";
        var hash$g = "e8655383";
        var wasmJson$g = {
          name: name$g,
          data: data$g,
          hash: hash$g
        };
        const mutex$i = new Mutex();
        let wasmCache$i = null;
        function validateBits$2(bits) {
          if (!Number.isInteger(bits) || bits < 8 || bits % 8 !== 0) {
            return new Error("Invalid variant! Valid values: 8, 16, ...");
          }
          return null;
        }
        function blake3(data2, bits = 256, key = null) {
          if (validateBits$2(bits)) {
            return Promise.reject(validateBits$2(bits));
          }
          let keyBuffer = null;
          let initParam = 0;
          if (key !== null) {
            keyBuffer = getUInt8Buffer(key);
            if (keyBuffer.length !== 32) {
              return Promise.reject(new Error("Key length must be exactly 32 bytes"));
            }
            initParam = 32;
          }
          const hashLength = bits / 8;
          const digestParam = hashLength;
          if (wasmCache$i === null || wasmCache$i.hashLength !== hashLength) {
            return lockedCreate(mutex$i, wasmJson$g, hashLength).then((wasm) => {
              wasmCache$i = wasm;
              if (initParam === 32) {
                wasmCache$i.writeMemory(keyBuffer);
              }
              return wasmCache$i.calculate(data2, initParam, digestParam);
            });
          }
          try {
            if (initParam === 32) {
              wasmCache$i.writeMemory(keyBuffer);
            }
            const hash2 = wasmCache$i.calculate(data2, initParam, digestParam);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createBLAKE3(bits = 256, key = null) {
          if (validateBits$2(bits)) {
            return Promise.reject(validateBits$2(bits));
          }
          let keyBuffer = null;
          let initParam = 0;
          if (key !== null) {
            keyBuffer = getUInt8Buffer(key);
            if (keyBuffer.length !== 32) {
              return Promise.reject(new Error("Key length must be exactly 32 bytes"));
            }
            initParam = 32;
          }
          const outputSize = bits / 8;
          const digestParam = outputSize;
          return WASMInterface(wasmJson$g, outputSize).then((wasm) => {
            if (initParam === 32) {
              wasm.writeMemory(keyBuffer);
            }
            wasm.init(initParam);
            const obj = {
              init: initParam === 32 ? () => {
                wasm.writeMemory(keyBuffer);
                wasm.init(initParam);
                return obj;
              } : () => {
                wasm.init(initParam);
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType, digestParam),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 64,
              digestSize: outputSize
            };
            return obj;
          });
        }
        var name$f = "crc32";
        var data$f = "AGFzbQEAAAABEQRgAAF/YAF/AGAAAGACf38AAwgHAAEBAQIAAwQFAXABAQEFBAEBAgIGDgJ/AUGQyQULfwBBgAgLB3AIBm1lbW9yeQIADkhhc2hfR2V0QnVmZmVyAAAJSGFzaF9Jbml0AAILSGFzaF9VcGRhdGUAAwpIYXNoX0ZpbmFsAAQNSGFzaF9HZXRTdGF0ZQAFDkhhc2hfQ2FsY3VsYXRlAAYKU1RBVEVfU0laRQMBCq0HBwUAQYAJC8MDAQN/QYCJASEBQQAhAgNAIAFBAEEAQQBBAEEAQQBBAEEAIAJBAXFrIABxIAJBAXZzIgNBAXFrIABxIANBAXZzIgNBAXFrIABxIANBAXZzIgNBAXFrIABxIANBAXZzIgNBAXFrIABxIANBAXZzIgNBAXFrIABxIANBAXZzIgNBAXFrIABxIANBAXZzIgNBAXFrIABxIANBAXZzNgIAIAFBBGohASACQQFqIgJBgAJHDQALQQAhAANAIABBhJEBaiAAQYSJAWooAgAiAkH/AXFBAnRBgIkBaigCACACQQh2cyICNgIAIABBhJkBaiACQf8BcUECdEGAiQFqKAIAIAJBCHZzIgI2AgAgAEGEoQFqIAJB/wFxQQJ0QYCJAWooAgAgAkEIdnMiAjYCACAAQYSpAWogAkH/AXFBAnRBgIkBaigCACACQQh2cyICNgIAIABBhLEBaiACQf8BcUECdEGAiQFqKAIAIAJBCHZzIgI2AgAgAEGEuQFqIAJB/wFxQQJ0QYCJAWooAgAgAkEIdnMiAjYCACAAQYTBAWogAkH/AXFBAnRBgIkBaigCACACQQh2czYCACAAQQRqIgBB/AdHDQALCycAAkBBACgCgMkBIABGDQAgABABQQAgADYCgMkBC0EAQQA2AoTJAQuhAgEDf0EAKAKEyQFBf3MhAUGACSECAkAgAEEISQ0AQYAJIQIDQCACQQRqKAIAIgNBDnZB/AdxQYCRAWooAgAgA0EWdkH8B3FBgIkBaigCAHMgA0EGdkH8B3FBgJkBaigCAHMgA0H/AXFBAnRBgKEBaigCAHMgAigCACABcyIBQRZ2QfwHcUGAqQFqKAIAcyABQQ52QfwHcUGAsQFqKAIAcyABQQZ2QfwHcUGAuQFqKAIAcyABQf8BcUECdEGAwQFqKAIAcyEBIAJBCGohAiAAQXhqIgBBB0sNAAsLAkAgAEUNAANAIAFB/wFxIAItAABzQQJ0QYCJAWooAgAgAUEIdnMhASACQQFqIQIgAEF/aiIADQALC0EAIAFBf3M2AoTJAQszAQF/QQBBACgChMkBIgBBGHQgAEEIdEGAgPwHcXIgAEEIdkGA/gNxIABBGHZycjYCgAkLBgBBhMkBC1oAAkBBACgCgMkBIAFGDQAgARABQQAgATYCgMkBC0EAQQA2AoTJASAAEANBAEEAKAKEyQEiAUEYdCABQQh0QYCA/AdxciABQQh2QYD+A3EgAUEYdnJyNgKACQsLCwEAQYAICwQEAAAA";
        var hash$f = "749723dc";
        var wasmJson$f = {
          name: name$f,
          data: data$f,
          hash: hash$f
        };
        const mutex$h = new Mutex();
        let wasmCache$h = null;
        function crc32(data2) {
          if (wasmCache$h === null) {
            return lockedCreate(mutex$h, wasmJson$f, 4).then((wasm) => {
              wasmCache$h = wasm;
              return wasmCache$h.calculate(data2, 3988292384);
            });
          }
          try {
            const hash2 = wasmCache$h.calculate(data2, 3988292384);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createCRC32() {
          return WASMInterface(wasmJson$f, 4).then((wasm) => {
            wasm.init(3988292384);
            const obj = {
              init: () => {
                wasm.init(3988292384);
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 4,
              digestSize: 4
            };
            return obj;
          });
        }
        const mutex$g = new Mutex();
        let wasmCache$g = null;
        function crc32c(data2) {
          if (wasmCache$g === null) {
            return lockedCreate(mutex$g, wasmJson$f, 4).then((wasm) => {
              wasmCache$g = wasm;
              return wasmCache$g.calculate(data2, 2197175160);
            });
          }
          try {
            const hash2 = wasmCache$g.calculate(data2, 2197175160);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createCRC32C() {
          return WASMInterface(wasmJson$f, 4).then((wasm) => {
            wasm.init(2197175160);
            const obj = {
              init: () => {
                wasm.init(2197175160);
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 4,
              digestSize: 4
            };
            return obj;
          });
        }
        var name$e = "md4";
        var data$e = "AGFzbQEAAAABEgRgAAF/YAAAYAF/AGACf38BfwMIBwABAgMBAAIEBQFwAQEBBQQBAQICBg4CfwFBoIoFC38AQYAICwdwCAZtZW1vcnkCAA5IYXNoX0dldEJ1ZmZlcgAACUhhc2hfSW5pdAABC0hhc2hfVXBkYXRlAAIKSGFzaF9GaW5hbAAEDUhhc2hfR2V0U3RhdGUABQ5IYXNoX0NhbGN1bGF0ZQAGClNUQVRFX1NJWkUDAQqXEQcFAEGACQstAEEAQv6568XpjpWZEDcCkIkBQQBCgcaUupbx6uZvNwKIiQFBAEIANwKAiQEL6AIBA39BAEEAKAKAiQEiASAAakH/////AXEiAjYCgIkBQQAoAoSJASEDAkAgAiABTw0AQQAgA0EBaiIDNgKEiQELQQAgAyAAQR12ajYChIkBAkACQAJAAkACQAJAIAFBP3EiAw0AQYAJIQIMAQtBwAAgA2siAiAASw0BIANBGGohA0EAIQEDQCADIAFqQYCJAWogAUGACWotAAA6AAAgAyABQQFqIgFqQdgARw0AC0GYiQFBwAAQAxogACACayEAIAJBgAlqIQILIABBwABPDQEgACEDDAILIABFDQJBACEBIANBmIkBakEALQCACToAACAAQQFGDQIgA0GZiQFqIQMgAEF/aiECA0AgAyABaiABQYEJai0AADoAACACIAFBAWoiAUcNAAwDCwsgAEE/cSEDIAIgAEFAcRADIQILIANFDQBBACEBA0AgAUGYiQFqIAIgAWotAAA6AAAgAyABQQFqIgFHDQALCwuYCwEXf0EAKAKUiQEhAkEAKAKQiQEhA0EAKAKMiQEhBEEAKAKIiQEhBQNAIABBHGooAgAiBiAAQRRqKAIAIgcgAEEYaigCACIIIABBEGooAgAiCSAAQSxqKAIAIgogAEEoaigCACILIABBJGooAgAiDCAAQSBqKAIAIg0gCyAIIABBCGooAgAiDiADaiAAQQRqKAIAIg8gAmogBCADIAJzcSACcyAFaiAAKAIAIhBqQQN3IhEgBCADc3EgA3NqQQd3IhIgESAEc3EgBHNqQQt3IhNqIBIgB2ogESAJaiAAQQxqKAIAIhQgBGogEyASIBFzcSARc2pBE3ciESATIBJzcSASc2pBA3ciEiARIBNzcSATc2pBB3ciEyASIBFzcSARc2pBC3ciFWogEyAMaiASIA1qIBEgBmogFSATIBJzcSASc2pBE3ciESAVIBNzcSATc2pBA3ciEiARIBVzcSAVc2pBB3ciEyASIBFzcSARc2pBC3ciFSAAQThqKAIAIhZqIBMgAEE0aigCACIXaiASIABBMGooAgAiGGogESAKaiAVIBMgEnNxIBJzakETdyISIBUgE3NxIBNzakEDdyITIBIgFXNxIBVzakEHdyIVIBMgEnNxIBJzakELdyIRaiAJIBVqIBAgE2ogEiAAQTxqKAIAIglqIBEgFSATc3EgE3NqQRN3IhIgESAVcnEgESAVcXJqQZnzidQFakEDdyITIBIgEXJxIBIgEXFyakGZ84nUBWpBBXciESATIBJycSATIBJxcmpBmfOJ1AVqQQl3IhVqIAcgEWogDyATaiAYIBJqIBUgESATcnEgESATcXJqQZnzidQFakENdyISIBUgEXJxIBUgEXFyakGZ84nUBWpBA3ciESASIBVycSASIBVxcmpBmfOJ1AVqQQV3IhMgESAScnEgESAScXJqQZnzidQFakEJdyIVaiAIIBNqIA4gEWogFyASaiAVIBMgEXJxIBMgEXFyakGZ84nUBWpBDXciESAVIBNycSAVIBNxcmpBmfOJ1AVqQQN3IhIgESAVcnEgESAVcXJqQZnzidQFakEFdyITIBIgEXJxIBIgEXFyakGZ84nUBWpBCXciFWogBiATaiAUIBJqIBYgEWogFSATIBJycSATIBJxcmpBmfOJ1AVqQQ13IhEgFSATcnEgFSATcXJqQZnzidQFakEDdyISIBEgFXJxIBEgFXFyakGZ84nUBWpBBXciEyASIBFycSASIBFxcmpBmfOJ1AVqQQl3IhVqIBAgEmogCSARaiAVIBMgEnJxIBMgEnFyakGZ84nUBWpBDXciBiAVcyISIBNzakGh1+f2BmpBA3ciESAGcyANIBNqIBIgEXNqQaHX5/YGakEJdyISc2pBodfn9gZqQQt3IhNqIA4gEWogEyAScyAYIAZqIBIgEXMgE3NqQaHX5/YGakEPdyIRc2pBodfn9gZqQQN3IhUgEXMgCyASaiARIBNzIBVzakGh1+f2BmpBCXciEnNqQaHX5/YGakELdyITaiAPIBVqIBMgEnMgFiARaiASIBVzIBNzakGh1+f2BmpBD3ciEXNqQaHX5/YGakEDdyIVIBFzIAwgEmogESATcyAVc2pBodfn9gZqQQl3IhJzakGh1+f2BmpBC3ciE2ogFCAVaiATIBJzIBcgEWogEiAVcyATc2pBodfn9gZqQQ93IhFzakGh1+f2BmpBA3ciFSARcyAKIBJqIBEgE3MgFXNqQaHX5/YGakEJdyISc2pBodfn9gZqQQt3IhMgA2ohAyAJIBFqIBIgFXMgE3NqQaHX5/YGakEPdyAEaiEEIBIgAmohAiAVIAVqIQUgAEHAAGohACABQUBqIgENAAtBACACNgKUiQFBACADNgKQiQFBACAENgKMiQFBACAFNgKIiQEgAAuhAgEDf0EAKAKAiQEiAEE/cSIBQZiJAWpBgAE6AAACQAJAAkAgAUE/cyICQQdLDQACQCACRQ0AIAFBmYkBaiEAA0AgAEEAOgAAIABBAWohACACQX9qIgINAAsLQcAAIQJBmIkBQcAAEAMaQQAhAAwBCyACQQhGDQEgAUEBaiEACyAAQY+JAWohAQNAIAEgAmpBADoAACACQXdqIQAgAkF/aiECIABBAEoNAAtBACgCgIkBIQALQQAgAEEVdjoA04kBQQAgAEENdjoA0okBQQAgAEEFdjoA0YkBQQAgAEEDdCICOgDQiQFBACACNgKAiQFBAEEAKAKEiQE2AtSJAUGYiQFBwAAQAxpBAEEAKQKIiQE3A4AJQQBBACkCkIkBNwOICQsGAEGAiQELMwBBAEL+uevF6Y6VmRA3ApCJAUEAQoHGlLqW8ermbzcCiIkBQQBCADcCgIkBIAAQAhAECwsLAQBBgAgLBJgAAAA=";
        var hash$e = "1bf01052";
        var wasmJson$e = {
          name: name$e,
          data: data$e,
          hash: hash$e
        };
        const mutex$f = new Mutex();
        let wasmCache$f = null;
        function md4(data2) {
          if (wasmCache$f === null) {
            return lockedCreate(mutex$f, wasmJson$e, 16).then((wasm) => {
              wasmCache$f = wasm;
              return wasmCache$f.calculate(data2);
            });
          }
          try {
            const hash2 = wasmCache$f.calculate(data2);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createMD4() {
          return WASMInterface(wasmJson$e, 16).then((wasm) => {
            wasm.init();
            const obj = {
              init: () => {
                wasm.init();
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 64,
              digestSize: 16
            };
            return obj;
          });
        }
        var name$d = "md5";
        var data$d = "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";
        var hash$d = "9b0fac7d";
        var wasmJson$d = {
          name: name$d,
          data: data$d,
          hash: hash$d
        };
        const mutex$e = new Mutex();
        let wasmCache$e = null;
        function md5(data2) {
          if (wasmCache$e === null) {
            return lockedCreate(mutex$e, wasmJson$d, 16).then((wasm) => {
              wasmCache$e = wasm;
              return wasmCache$e.calculate(data2);
            });
          }
          try {
            const hash2 = wasmCache$e.calculate(data2);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createMD5() {
          return WASMInterface(wasmJson$d, 16).then((wasm) => {
            wasm.init();
            const obj = {
              init: () => {
                wasm.init();
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 64,
              digestSize: 16
            };
            return obj;
          });
        }
        var name$c = "sha1";
        var data$c = "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";
        var hash$c = "40d92e5d";
        var wasmJson$c = {
          name: name$c,
          data: data$c,
          hash: hash$c
        };
        const mutex$d = new Mutex();
        let wasmCache$d = null;
        function sha1(data2) {
          if (wasmCache$d === null) {
            return lockedCreate(mutex$d, wasmJson$c, 20).then((wasm) => {
              wasmCache$d = wasm;
              return wasmCache$d.calculate(data2);
            });
          }
          try {
            const hash2 = wasmCache$d.calculate(data2);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createSHA1() {
          return WASMInterface(wasmJson$c, 20).then((wasm) => {
            wasm.init();
            const obj = {
              init: () => {
                wasm.init();
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 64,
              digestSize: 20
            };
            return obj;
          });
        }
        var name$b = "sha3";
        var data$b = "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";
        var hash$b = "ec266d91";
        var wasmJson$b = {
          name: name$b,
          data: data$b,
          hash: hash$b
        };
        const mutex$c = new Mutex();
        let wasmCache$c = null;
        function validateBits$1(bits) {
          if (![224, 256, 384, 512].includes(bits)) {
            return new Error("Invalid variant! Valid values: 224, 256, 384, 512");
          }
          return null;
        }
        function sha3(data2, bits = 512) {
          if (validateBits$1(bits)) {
            return Promise.reject(validateBits$1(bits));
          }
          const hashLength = bits / 8;
          if (wasmCache$c === null || wasmCache$c.hashLength !== hashLength) {
            return lockedCreate(mutex$c, wasmJson$b, hashLength).then((wasm) => {
              wasmCache$c = wasm;
              return wasmCache$c.calculate(data2, bits, 6);
            });
          }
          try {
            const hash2 = wasmCache$c.calculate(data2, bits, 6);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createSHA3(bits = 512) {
          if (validateBits$1(bits)) {
            return Promise.reject(validateBits$1(bits));
          }
          const outputSize = bits / 8;
          return WASMInterface(wasmJson$b, outputSize).then((wasm) => {
            wasm.init(bits);
            const obj = {
              init: () => {
                wasm.init(bits);
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType, 6),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 200 - 2 * outputSize,
              digestSize: outputSize
            };
            return obj;
          });
        }
        const mutex$b = new Mutex();
        let wasmCache$b = null;
        function validateBits(bits) {
          if (![224, 256, 384, 512].includes(bits)) {
            return new Error("Invalid variant! Valid values: 224, 256, 384, 512");
          }
          return null;
        }
        function keccak(data2, bits = 512) {
          if (validateBits(bits)) {
            return Promise.reject(validateBits(bits));
          }
          const hashLength = bits / 8;
          if (wasmCache$b === null || wasmCache$b.hashLength !== hashLength) {
            return lockedCreate(mutex$b, wasmJson$b, hashLength).then((wasm) => {
              wasmCache$b = wasm;
              return wasmCache$b.calculate(data2, bits, 1);
            });
          }
          try {
            const hash2 = wasmCache$b.calculate(data2, bits, 1);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createKeccak(bits = 512) {
          if (validateBits(bits)) {
            return Promise.reject(validateBits(bits));
          }
          const outputSize = bits / 8;
          return WASMInterface(wasmJson$b, outputSize).then((wasm) => {
            wasm.init(bits);
            const obj = {
              init: () => {
                wasm.init(bits);
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType, 1),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 200 - 2 * outputSize,
              digestSize: outputSize
            };
            return obj;
          });
        }
        var name$a = "sha256";
        var data$a = "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";
        var hash$a = "817d957e";
        var wasmJson$a = {
          name: name$a,
          data: data$a,
          hash: hash$a
        };
        const mutex$a = new Mutex();
        let wasmCache$a = null;
        function sha224(data2) {
          if (wasmCache$a === null) {
            return lockedCreate(mutex$a, wasmJson$a, 28).then((wasm) => {
              wasmCache$a = wasm;
              return wasmCache$a.calculate(data2, 224);
            });
          }
          try {
            const hash2 = wasmCache$a.calculate(data2, 224);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createSHA224() {
          return WASMInterface(wasmJson$a, 28).then((wasm) => {
            wasm.init(224);
            const obj = {
              init: () => {
                wasm.init(224);
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 64,
              digestSize: 28
            };
            return obj;
          });
        }
        const mutex$9 = new Mutex();
        let wasmCache$9 = null;
        function sha2563(data2) {
          if (wasmCache$9 === null) {
            return lockedCreate(mutex$9, wasmJson$a, 32).then((wasm) => {
              wasmCache$9 = wasm;
              return wasmCache$9.calculate(data2, 256);
            });
          }
          try {
            const hash2 = wasmCache$9.calculate(data2, 256);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createSHA256() {
          return WASMInterface(wasmJson$a, 32).then((wasm) => {
            wasm.init(256);
            const obj = {
              init: () => {
                wasm.init(256);
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 64,
              digestSize: 32
            };
            return obj;
          });
        }
        var name$9 = "sha512";
        var data$9 = "AGFzbQEAAAABEQRgAAF/YAF/AGACf38AYAAAAwgHAAEBAgMAAgQFAXABAQEFBAEBAgIGDgJ/AUHQigULfwBBgAgLB3AIBm1lbW9yeQIADkhhc2hfR2V0QnVmZmVyAAAJSGFzaF9Jbml0AAELSGFzaF9VcGRhdGUAAgpIYXNoX0ZpbmFsAAQNSGFzaF9HZXRTdGF0ZQAFDkhhc2hfQ2FsY3VsYXRlAAYKU1RBVEVfU0laRQMBCvhnBwUAQYAJC5sCAEEAQgA3A4CKAUEAQTBBwAAgAEGAA0YiABs2AsiKAUEAQqSf6ffbg9LaxwBC+cL4m5Gjs/DbACAAGzcDwIoBQQBCp5/mp9bBi4ZbQuv6htq/tfbBHyAAGzcDuIoBQQBCkargwvbQktqOf0Kf2PnZwpHagpt/IAAbNwOwigFBAEKxloD+/8zJmecAQtGFmu/6z5SH0QAgABs3A6iKAUEAQrmyubiPm/uXFULx7fT4paf9p6V/IAAbNwOgigFBAEKXusODo6vArJF/Qqvw0/Sv7ry3PCAAGzcDmIoBQQBCh6rzs6Olis3iAEK7zqqm2NDrs7t/IAAbNwOQigFBAELYvZaI3Kvn3UtCiJLznf/M+YTqACAAGzcDiIoBC4MCAgF+Bn9BAEEAKQOAigEiASAArXw3A4CKAQJAAkACQCABp0H/AHEiAg0AQYAJIQIMAQsCQCAAQYABIAJrIgMgAyAASyIEGyIFRQ0AIAJBgIkBaiEGQQAhAkEAIQcDQCAGIAJqIAJBgAlqLQAAOgAAIAUgB0EBaiIHQf8BcSICSw0ACwsgBA0BQYiKAUGAiQEQAyAAIANrIQAgA0GACWohAgsCQCAAQYABSQ0AA0BBiIoBIAIQAyACQYABaiECIABBgH9qIgBB/wBLDQALCyAARQ0AQQAhB0EAIQUDQCAHQYCJAWogAiAHai0AADoAACAAIAVBAWoiBUH/AXEiB0sNAAsLC9xXAVZ+IAAgASkDCCICQjiGIAJCKIZCgICAgICAwP8Ag4QgAkIYhkKAgICAgOA/gyACQgiGQoCAgIDwH4OEhCACQgiIQoCAgPgPgyACQhiIQoCA/AeDhCACQiiIQoD+A4MgAkI4iISEhCIDQjiJIANCB4iFIANCP4mFIAEpAwAiAkI4hiACQiiGQoCAgICAgMD/AIOEIAJCGIZCgICAgIDgP4MgAkIIhkKAgICA8B+DhIQgAkIIiEKAgID4D4MgAkIYiEKAgPwHg4QgAkIoiEKA/gODIAJCOIiEhIQiBHwgASkDSCICQjiGIAJCKIZCgICAgICAwP8Ag4QgAkIYhkKAgICAgOA/gyACQgiGQoCAgIDwH4OEhCACQgiIQoCAgPgPgyACQhiIQoCA/AeDhCACQiiIQoD+A4MgAkI4iISEhCIFfCABKQNwIgJCOIYgAkIohkKAgICAgIDA/wCDhCACQhiGQoCAgICA4D+DIAJCCIZCgICAgPAfg4SEIAJCCIhCgICA+A+DIAJCGIhCgID8B4OEIAJCKIhCgP4DgyACQjiIhISEIgZCA4kgBkIGiIUgBkItiYV8IgdCOIkgB0IHiIUgB0I/iYUgASkDeCICQjiGIAJCKIZCgICAgICAwP8Ag4QgAkIYhkKAgICAgOA/gyACQgiGQoCAgIDwH4OEhCACQgiIQoCAgPgPgyACQhiIQoCA/AeDhCACQiiIQoD+A4MgAkI4iISEhCIIfCAFQjiJIAVCB4iFIAVCP4mFIAEpA0AiAkI4hiACQiiGQoCAgICAgMD/AIOEIAJCGIZCgICAgIDgP4MgAkIIhkKAgICA8B+DhIQgAkIIiEKAgID4D4MgAkIYiEKAgPwHg4QgAkIoiEKA/gODIAJCOIiEhIQiCXwgASkDECICQjiGIAJCKIZCgICAgICAwP8Ag4QgAkIYhkKAgICAgOA/gyACQgiGQoCAgIDwH4OEhCACQgiIQoCAgPgPgyACQhiIQoCA/AeDhCACQiiIQoD+A4MgAkI4iISEhCIKQjiJIApCB4iFIApCP4mFIAN8IAEpA1AiAkI4hiACQiiGQoCAgICAgMD/AIOEIAJCGIZCgICAgIDgP4MgAkIIhkKAgICA8B+DhIQgAkIIiEKAgID4D4MgAkIYiEKAgPwHg4QgAkIoiEKA/gODIAJCOIiEhIQiC3wgCEIDiSAIQgaIhSAIQi2JhXwiDHwgASkDOCICQjiGIAJCKIZCgICAgICAwP8Ag4QgAkIYhkKAgICAgOA/gyACQgiGQoCAgIDwH4OEhCACQgiIQoCAgPgPgyACQhiIQoCA/AeDhCACQiiIQoD+A4MgAkI4iISEhCINQjiJIA1CB4iFIA1CP4mFIAEpAzAiAkI4hiACQiiGQoCAgICAgMD/AIOEIAJCGIZCgICAgIDgP4MgAkIIhkKAgICA8B+DhIQgAkIIiEKAgID4D4MgAkIYiEKAgPwHg4QgAkIoiEKA/gODIAJCOIiEhIQiDnwgCHwgASkDKCICQjiGIAJCKIZCgICAgICAwP8Ag4QgAkIYhkKAgICAgOA/gyACQgiGQoCAgIDwH4OEhCACQgiIQoCAgPgPgyACQhiIQoCA/AeDhCACQiiIQoD+A4MgAkI4iISEhCIPQjiJIA9CB4iFIA9CP4mFIAEpAyAiAkI4hiACQiiGQoCAgICAgMD/AIOEIAJCGIZCgICAgIDgP4MgAkIIhkKAgICA8B+DhIQgAkIIiEKAgID4D4MgAkIYiEKAgPwHg4QgAkIoiEKA/gODIAJCOIiEhIQiEHwgASkDaCICQjiGIAJCKIZCgICAgICAwP8Ag4QgAkIYhkKAgICAgOA/gyACQgiGQoCAgIDwH4OEhCACQgiIQoCAgPgPgyACQhiIQoCA/AeDhCACQiiIQoD+A4MgAkI4iISEhCIRfCABKQMYIgJCOIYgAkIohkKAgICAgIDA/wCDhCACQhiGQoCAgICA4D+DIAJCCIZCgICAgPAfg4SEIAJCCIhCgICA+A+DIAJCGIhCgID8B4OEIAJCKIhCgP4DgyACQjiIhISEIhJCOIkgEkIHiIUgEkI/iYUgCnwgASkDWCICQjiGIAJCKIZCgICAgICAwP8Ag4QgAkIYhkKAgICAgOA/gyACQgiGQoCAgIDwH4OEhCACQgiIQoCAgPgPgyACQhiIQoCA/AeDhCACQiiIQoD+A4MgAkI4iISEhCITfCAHQgOJIAdCBoiFIAdCLYmFfCIUQgOJIBRCBoiFIBRCLYmFfCIVQgOJIBVCBoiFIBVCLYmFfCIWQgOJIBZCBoiFIBZCLYmFfCIXfCAGQjiJIAZCB4iFIAZCP4mFIBF8IBZ8IAEpA2AiAkI4hiACQiiGQoCAgICAgMD/AIOEIAJCGIZCgICAgIDgP4MgAkIIhkKAgICA8B+DhIQgAkIIiEKAgID4D4MgAkIYiEKAgPwHg4QgAkIoiEKA/gODIAJCOIiEhIQiGEI4iSAYQgeIhSAYQj+JhSATfCAVfCALQjiJIAtCB4iFIAtCP4mFIAV8IBR8IAlCOIkgCUIHiIUgCUI/iYUgDXwgB3wgDkI4iSAOQgeIhSAOQj+JhSAPfCAGfCAQQjiJIBBCB4iFIBBCP4mFIBJ8IBh8IAxCA4kgDEIGiIUgDEItiYV8IhlCA4kgGUIGiIUgGUItiYV8IhpCA4kgGkIGiIUgGkItiYV8IhtCA4kgG0IGiIUgG0ItiYV8IhxCA4kgHEIGiIUgHEItiYV8Ih1CA4kgHUIGiIUgHUItiYV8Ih5CA4kgHkIGiIUgHkItiYV8Ih9COIkgH0IHiIUgH0I/iYUgCEI4iSAIQgeIhSAIQj+JhSAGfCAbfCARQjiJIBFCB4iFIBFCP4mFIBh8IBp8IBNCOIkgE0IHiIUgE0I/iYUgC3wgGXwgF0IDiSAXQgaIhSAXQi2JhXwiIEIDiSAgQgaIhSAgQi2JhXwiIUIDiSAhQgaIhSAhQi2JhXwiInwgF0I4iSAXQgeIhSAXQj+JhSAbfCAMQjiJIAxCB4iFIAxCP4mFIAd8IBx8ICJCA4kgIkIGiIUgIkItiYV8IiN8IBZCOIkgFkIHiIUgFkI/iYUgGnwgInwgFUI4iSAVQgeIhSAVQj+JhSAZfCAhfCAUQjiJIBRCB4iFIBRCP4mFIAx8ICB8IB9CA4kgH0IGiIUgH0ItiYV8IiRCA4kgJEIGiIUgJEItiYV8IiVCA4kgJUIGiIUgJUItiYV8IiZCA4kgJkIGiIUgJkItiYV8Iid8IB5COIkgHkIHiIUgHkI/iYUgIXwgJnwgHUI4iSAdQgeIhSAdQj+JhSAgfCAlfCAcQjiJIBxCB4iFIBxCP4mFIBd8ICR8IBtCOIkgG0IHiIUgG0I/iYUgFnwgH3wgGkI4iSAaQgeIhSAaQj+JhSAVfCAefCAZQjiJIBlCB4iFIBlCP4mFIBR8IB18ICNCA4kgI0IGiIUgI0ItiYV8IihCA4kgKEIGiIUgKEItiYV8IilCA4kgKUIGiIUgKUItiYV8IipCA4kgKkIGiIUgKkItiYV8IitCA4kgK0IGiIUgK0ItiYV8IixCA4kgLEIGiIUgLEItiYV8Ii1CA4kgLUIGiIUgLUItiYV8Ii5COIkgLkIHiIUgLkI/iYUgIkI4iSAiQgeIhSAiQj+JhSAefCAqfCAhQjiJICFCB4iFICFCP4mFIB18ICl8ICBCOIkgIEIHiIUgIEI/iYUgHHwgKHwgJ0IDiSAnQgaIhSAnQi2JhXwiL0IDiSAvQgaIhSAvQi2JhXwiMEIDiSAwQgaIhSAwQi2JhXwiMXwgJ0I4iSAnQgeIhSAnQj+JhSAqfCAjQjiJICNCB4iFICNCP4mFIB98ICt8IDFCA4kgMUIGiIUgMUItiYV8IjJ8ICZCOIkgJkIHiIUgJkI/iYUgKXwgMXwgJUI4iSAlQgeIhSAlQj+JhSAofCAwfCAkQjiJICRCB4iFICRCP4mFICN8IC98IC5CA4kgLkIGiIUgLkItiYV8IjNCA4kgM0IGiIUgM0ItiYV8IjRCA4kgNEIGiIUgNEItiYV8IjVCA4kgNUIGiIUgNUItiYV8IjZ8IC1COIkgLUIHiIUgLUI/iYUgMHwgNXwgLEI4iSAsQgeIhSAsQj+JhSAvfCA0fCArQjiJICtCB4iFICtCP4mFICd8IDN8ICpCOIkgKkIHiIUgKkI/iYUgJnwgLnwgKUI4iSApQgeIhSApQj+JhSAlfCAtfCAoQjiJIChCB4iFIChCP4mFICR8ICx8IDJCA4kgMkIGiIUgMkItiYV8IjdCA4kgN0IGiIUgN0ItiYV8IjhCA4kgOEIGiIUgOEItiYV8IjlCA4kgOUIGiIUgOUItiYV8IjpCA4kgOkIGiIUgOkItiYV8IjtCA4kgO0IGiIUgO0ItiYV8IjxCA4kgPEIGiIUgPEItiYV8Ij1COIkgPUIHiIUgPUI/iYUgMUI4iSAxQgeIhSAxQj+JhSAtfCA5fCAwQjiJIDBCB4iFIDBCP4mFICx8IDh8IC9COIkgL0IHiIUgL0I/iYUgK3wgN3wgNkIDiSA2QgaIhSA2Qi2JhXwiPkIDiSA+QgaIhSA+Qi2JhXwiP0IDiSA/QgaIhSA/Qi2JhXwiQHwgNkI4iSA2QgeIhSA2Qj+JhSA5fCAyQjiJIDJCB4iFIDJCP4mFIC58IDp8IEBCA4kgQEIGiIUgQEItiYV8IkF8IDVCOIkgNUIHiIUgNUI/iYUgOHwgQHwgNEI4iSA0QgeIhSA0Qj+JhSA3fCA/fCAzQjiJIDNCB4iFIDNCP4mFIDJ8ID58ID1CA4kgPUIGiIUgPUItiYV8IkJCA4kgQkIGiIUgQkItiYV8IkNCA4kgQ0IGiIUgQ0ItiYV8IkRCA4kgREIGiIUgREItiYV8IkV8IDxCOIkgPEIHiIUgPEI/iYUgP3wgRHwgO0I4iSA7QgeIhSA7Qj+JhSA+fCBDfCA6QjiJIDpCB4iFIDpCP4mFIDZ8IEJ8IDlCOIkgOUIHiIUgOUI/iYUgNXwgPXwgOEI4iSA4QgeIhSA4Qj+JhSA0fCA8fCA3QjiJIDdCB4iFIDdCP4mFIDN8IDt8IEFCA4kgQUIGiIUgQUItiYV8IkZCA4kgRkIGiIUgRkItiYV8IkdCA4kgR0IGiIUgR0ItiYV8IkhCA4kgSEIGiIUgSEItiYV8IklCA4kgSUIGiIUgSUItiYV8IkpCA4kgSkIGiIUgSkItiYV8IktCA4kgS0IGiIUgS0ItiYV8IkwgSiBCIDwgOiA4IDIgMCAnICUgHyAdIBsgGSAIIBMgDSAAKQMgIk0gEnwgACkDKCJOIAp8IAApAzAiTyADfCAAKQM4IlAgTUIyiSBNQi6JhSBNQheJhXwgTyBOhSBNgyBPhXwgBHxCotyiuY3zi8XCAHwiUSAAKQMYIlJ8IgMgTiBNhYMgToV8IANCMokgA0IuiYUgA0IXiYV8Qs3LvZ+SktGb8QB8IlMgACkDECJUfCIKIAMgTYWDIE2FfCAKQjKJIApCLomFIApCF4mFfEKv9rTi/vm+4LV/fCJVIAApAwgiVnwiEiAKIAOFgyADhXwgEkIyiSASQi6JhSASQheJhXxCvLenjNj09tppfCJXIAApAwAiAnwiBHwgDiASfCAPIAp8IAMgEHwgBCASIAqFgyAKhXwgBEIyiSAEQi6JhSAEQheJhXxCuOqimr/LsKs5fCIQIFQgViAChYMgViACg4UgAkIkiSACQh6JhSACQhmJhXwgUXwiA3wiDSAEIBKFgyAShXwgDUIyiSANQi6JhSANQheJhXxCmaCXsJu+xPjZAHwiUSADQiSJIANCHomFIANCGYmFIAMgAoUgVoMgAyACg4V8IFN8Igp8Ig4gDSAEhYMgBIV8IA5CMokgDkIuiYUgDkIXiYV8Qpuf5fjK1OCfkn98IlMgCkIkiSAKQh6JhSAKQhmJhSAKIAOFIAKDIAogA4OFfCBVfCISfCIEIA4gDYWDIA2FfCAEQjKJIARCLomFIARCF4mFfEKYgrbT3dqXjqt/fCJVIBJCJIkgEkIeiYUgEkIZiYUgEiAKhSADgyASIAqDhXwgV3wiA3wiD3wgCyAEfCAFIA58IAkgDXwgDyAEIA6FgyAOhXwgD0IyiSAPQi6JhSAPQheJhXxCwoSMmIrT6oNYfCIFIANCJIkgA0IeiYUgA0IZiYUgAyAShSAKgyADIBKDhXwgEHwiCnwiDSAPIASFgyAEhXwgDUIyiSANQi6JhSANQheJhXxCvt/Bq5Tg1sESfCILIApCJIkgCkIeiYUgCkIZiYUgCiADhSASgyAKIAODhXwgUXwiEnwiBCANIA+FgyAPhXwgBEIyiSAEQi6JhSAEQheJhXxCjOWS9+S34ZgkfCITIBJCJIkgEkIeiYUgEkIZiYUgEiAKhSADgyASIAqDhXwgU3wiA3wiDiAEIA2FgyANhXwgDkIyiSAOQi6JhSAOQheJhXxC4un+r724n4bVAHwiCSADQiSJIANCHomFIANCGYmFIAMgEoUgCoMgAyASg4V8IFV8Igp8Ig98IAYgDnwgESAEfCAYIA18IA8gDiAEhYMgBIV8IA9CMokgD0IuiYUgD0IXiYV8Qu+S7pPPrpff8gB8IhEgCkIkiSAKQh6JhSAKQhmJhSAKIAOFIBKDIAogA4OFfCAFfCIGfCISIA8gDoWDIA6FfCASQjKJIBJCLomFIBJCF4mFfEKxrdrY47+s74B/fCIOIAZCJIkgBkIeiYUgBkIZiYUgBiAKhSADgyAGIAqDhXwgC3wiCHwiBCASIA+FgyAPhXwgBEIyiSAEQi6JhSAEQheJhXxCtaScrvLUge6bf3wiDyAIQiSJIAhCHomFIAhCGYmFIAggBoUgCoMgCCAGg4V8IBN8IgN8IgogBCAShYMgEoV8IApCMokgCkIuiYUgCkIXiYV8QpTNpPvMrvzNQXwiBSADQiSJIANCHomFIANCGYmFIAMgCIUgBoMgAyAIg4V8IAl8IgZ8Ig18IBQgCnwgDCAEfCANIAogBIWDIASFIBJ8IAd8IA1CMokgDUIuiYUgDUIXiYV8QtKVxfeZuNrNZHwiEiAGQiSJIAZCHomFIAZCGYmFIAYgA4UgCIMgBiADg4V8IBF8Igd8IgwgDSAKhYMgCoV8IAxCMokgDEIuiYUgDEIXiYV8QuPLvMLj8JHfb3wiCiAHQiSJIAdCHomFIAdCGYmFIAcgBoUgA4MgByAGg4V8IA58Igh8IhQgDCANhYMgDYV8IBRCMokgFEIuiYUgFEIXiYV8QrWrs9zouOfgD3wiBCAIQiSJIAhCHomFIAhCGYmFIAggB4UgBoMgCCAHg4V8IA98IgZ8IhkgFCAMhYMgDIV8IBlCMokgGUIuiYUgGUIXiYV8QuW4sr3HuaiGJHwiDSAGQiSJIAZCHomFIAZCGYmFIAYgCIUgB4MgBiAIg4V8IAV8Igd8IgN8IBYgGXwgGiAUfCAMIBV8IAMgGSAUhYMgFIV8IANCMokgA0IuiYUgA0IXiYV8QvWErMn1jcv0LXwiGiAHQiSJIAdCHomFIAdCGYmFIAcgBoUgCIMgByAGg4V8IBJ8Igh8IgwgAyAZhYMgGYV8IAxCMokgDEIuiYUgDEIXiYV8QoPJm/WmlaG6ygB8IhkgCEIkiSAIQh6JhSAIQhmJhSAIIAeFIAaDIAggB4OFfCAKfCIGfCIUIAwgA4WDIAOFfCAUQjKJIBRCLomFIBRCF4mFfELU94fqy7uq2NwAfCIbIAZCJIkgBkIeiYUgBkIZiYUgBiAIhSAHgyAGIAiDhXwgBHwiB3wiFSAUIAyFgyAMhXwgFUIyiSAVQi6JhSAVQheJhXxCtafFmKib4vz2AHwiAyAHQiSJIAdCHomFIAdCGYmFIAcgBoUgCIMgByAGg4V8IA18Igh8IhZ8ICAgFXwgHCAUfCAXIAx8IBYgFSAUhYMgFIV8IBZCMokgFkIuiYUgFkIXiYV8Qqu/m/OuqpSfmH98IhcgCEIkiSAIQh6JhSAIQhmJhSAIIAeFIAaDIAggB4OFfCAafCIGfCIMIBYgFYWDIBWFfCAMQjKJIAxCLomFIAxCF4mFfEKQ5NDt0s3xmKh/fCIaIAZCJIkgBkIeiYUgBkIZiYUgBiAIhSAHgyAGIAiDhXwgGXwiB3wiFCAMIBaFgyAWhXwgFEIyiSAUQi6JhSAUQheJhXxCv8Lsx4n5yYGwf3wiGSAHQiSJIAdCHomFIAdCGYmFIAcgBoUgCIMgByAGg4V8IBt8Igh8IhUgFCAMhYMgDIV8IBVCMokgFUIuiYUgFUIXiYV8QuSdvPf7+N+sv398IhsgCEIkiSAIQh6JhSAIQhmJhSAIIAeFIAaDIAggB4OFfCADfCIGfCIWfCAiIBV8IB4gFHwgISAMfCAWIBUgFIWDIBSFfCAWQjKJIBZCLomFIBZCF4mFfELCn6Lts/6C8EZ8IhwgBkIkiSAGQh6JhSAGQhmJhSAGIAiFIAeDIAYgCIOFfCAXfCIHfCIMIBYgFYWDIBWFfCAMQjKJIAxCLomFIAxCF4mFfEKlzqqY+ajk01V8IhcgB0IkiSAHQh6JhSAHQhmJhSAHIAaFIAiDIAcgBoOFfCAafCIIfCIUIAwgFoWDIBaFfCAUQjKJIBRCLomFIBRCF4mFfELvhI6AnuqY5QZ8IhogCEIkiSAIQh6JhSAIQhmJhSAIIAeFIAaDIAggB4OFfCAZfCIGfCIVIBQgDIWDIAyFfCAVQjKJIBVCLomFIBVCF4mFfELw3LnQ8KzKlBR8IhkgBkIkiSAGQh6JhSAGQhmJhSAGIAiFIAeDIAYgCIOFfCAbfCIHfCIWfCAoIBV8ICQgFHwgFiAVIBSFgyAUhSAMfCAjfCAWQjKJIBZCLomFIBZCF4mFfEL838i21NDC2yd8IhsgB0IkiSAHQh6JhSAHQhmJhSAHIAaFIAiDIAcgBoOFfCAcfCIIfCIMIBYgFYWDIBWFfCAMQjKJIAxCLomFIAxCF4mFfEKmkpvhhafIjS58IhwgCEIkiSAIQh6JhSAIQhmJhSAIIAeFIAaDIAggB4OFfCAXfCIGfCIUIAwgFoWDIBaFfCAUQjKJIBRCLomFIBRCF4mFfELt1ZDWxb+bls0AfCIXIAZCJIkgBkIeiYUgBkIZiYUgBiAIhSAHgyAGIAiDhXwgGnwiB3wiFSAUIAyFgyAMhXwgFUIyiSAVQi6JhSAVQheJhXxC3+fW7Lmig5zTAHwiGiAHQiSJIAdCHomFIAdCGYmFIAcgBoUgCIMgByAGg4V8IBl8Igh8IhZ8ICogFXwgJiAUfCAMICl8IBYgFSAUhYMgFIV8IBZCMokgFkIuiYUgFkIXiYV8Qt7Hvd3I6pyF5QB8IhkgCEIkiSAIQh6JhSAIQhmJhSAIIAeFIAaDIAggB4OFfCAbfCIGfCIMIBYgFYWDIBWFfCAMQjKJIAxCLomFIAxCF4mFfEKo5d7js9eCtfYAfCIbIAZCJIkgBkIeiYUgBkIZiYUgBiAIhSAHgyAGIAiDhXwgHHwiB3wiFCAMIBaFgyAWhXwgFEIyiSAUQi6JhSAUQheJhXxC5t22v+SlsuGBf3wiHCAHQiSJIAdCHomFIAdCGYmFIAcgBoUgCIMgByAGg4V8IBd8Igh8IhUgFCAMhYMgDIV8IBVCMokgFUIuiYUgFUIXiYV8QrvqiKTRkIu5kn98IhcgCEIkiSAIQh6JhSAIQhmJhSAIIAeFIAaDIAggB4OFfCAafCIGfCIWfCAsIBV8IC8gFHwgKyAMfCAWIBUgFIWDIBSFfCAWQjKJIBZCLomFIBZCF4mFfELkhsTnlJT636J/fCIaIAZCJIkgBkIeiYUgBkIZiYUgBiAIhSAHgyAGIAiDhXwgGXwiB3wiDCAWIBWFgyAVhXwgDEIyiSAMQi6JhSAMQheJhXxCgeCI4rvJmY2of3wiGSAHQiSJIAdCHomFIAdCGYmFIAcgBoUgCIMgByAGg4V8IBt8Igh8IhQgDCAWhYMgFoV8IBRCMokgFEIuiYUgFEIXiYV8QpGv4oeN7uKlQnwiGyAIQiSJIAhCHomFIAhCGYmFIAggB4UgBoMgCCAHg4V8IBx8IgZ8IhUgFCAMhYMgDIV8IBVCMokgFUIuiYUgFUIXiYV8QrD80rKwtJS2R3wiHCAGQiSJIAZCHomFIAZCGYmFIAYgCIUgB4MgBiAIg4V8IBd8Igd8IhZ8IC4gFXwgMSAUfCAtIAx8IBYgFSAUhYMgFIV8IBZCMokgFkIuiYUgFkIXiYV8Qpikvbedg7rJUXwiFyAHQiSJIAdCHomFIAdCGYmFIAcgBoUgCIMgByAGg4V8IBp8Igh8IgwgFiAVhYMgFYV8IAxCMokgDEIuiYUgDEIXiYV8QpDSlqvFxMHMVnwiGiAIQiSJIAhCHomFIAhCGYmFIAggB4UgBoMgCCAHg4V8IBl8IgZ8IhQgDCAWhYMgFoV8IBRCMokgFEIuiYUgFEIXiYV8QqrAxLvVsI2HdHwiGSAGQiSJIAZCHomFIAZCGYmFIAYgCIUgB4MgBiAIg4V8IBt8Igd8IhUgFCAMhYMgDIV8IBVCMokgFUIuiYUgFUIXiYV8Qrij75WDjqi1EHwiGyAHQiSJIAdCHomFIAdCGYmFIAcgBoUgCIMgByAGg4V8IBx8Igh8IhZ8IDQgFXwgNyAUfCAWIBUgFIWDIBSFIAx8IDN8IBZCMokgFkIuiYUgFkIXiYV8Qsihy8brorDSGXwiHCAIQiSJIAhCHomFIAhCGYmFIAggB4UgBoMgCCAHg4V8IBd8IgZ8IgwgFiAVhYMgFYV8IAxCMokgDEIuiYUgDEIXiYV8QtPWhoqFgdubHnwiFyAGQiSJIAZCHomFIAZCGYmFIAYgCIUgB4MgBiAIg4V8IBp8Igd8IhQgDCAWhYMgFoV8IBRCMokgFEIuiYUgFEIXiYV8QpnXu/zN6Z2kJ3wiGiAHQiSJIAdCHomFIAdCGYmFIAcgBoUgCIMgByAGg4V8IBl8Igh8IhUgFCAMhYMgDIV8IBVCMokgFUIuiYUgFUIXiYV8QqiR7Yzelq/YNHwiGSAIQiSJIAhCHomFIAhCGYmFIAggB4UgBoMgCCAHg4V8IBt8IgZ8IhZ8IDYgFXwgOSAUfCAMIDV8IBYgFSAUhYMgFIV8IBZCMokgFkIuiYUgFkIXiYV8QuO0pa68loOOOXwiGyAGQiSJIAZCHomFIAZCGYmFIAYgCIUgB4MgBiAIg4V8IBx8Igd8IgwgFiAVhYMgFYV8IAxCMokgDEIuiYUgDEIXiYV8QsuVhpquyarszgB8IhwgB0IkiSAHQh6JhSAHQhmJhSAHIAaFIAiDIAcgBoOFfCAXfCIIfCIUIAwgFoWDIBaFfCAUQjKJIBRCLomFIBRCF4mFfELzxo+798myztsAfCIXIAhCJIkgCEIeiYUgCEIZiYUgCCAHhSAGgyAIIAeDhXwgGnwiBnwiFSAUIAyFgyAMhXwgFUIyiSAVQi6JhSAVQheJhXxCo/HKtb3+m5foAHwiGiAGQiSJIAZCHomFIAZCGYmFIAYgCIUgB4MgBiAIg4V8IBl8Igd8IhZ8ID8gFXwgOyAUfCA+IAx8IBYgFSAUhYMgFIV8IBZCMokgFkIuiYUgFkIXiYV8Qvzlvu/l3eDH9AB8IhkgB0IkiSAHQh6JhSAHQhmJhSAHIAaFIAiDIAcgBoOFfCAbfCIIfCIMIBYgFYWDIBWFfCAMQjKJIAxCLomFIAxCF4mFfELg3tyY9O3Y0vgAfCIbIAhCJIkgCEIeiYUgCEIZiYUgCCAHhSAGgyAIIAeDhXwgHHwiBnwiFCAMIBaFgyAWhXwgFEIyiSAUQi6JhSAUQheJhXxC8tbCj8qCnuSEf3wiHCAGQiSJIAZCHomFIAZCGYmFIAYgCIUgB4MgBiAIg4V8IBd8Igd8IhUgFCAMhYMgDIV8IBVCMokgFUIuiYUgFUIXiYV8QuzzkNOBwcDjjH98IhcgB0IkiSAHQh6JhSAHQhmJhSAHIAaFIAiDIAcgBoOFfCAafCIIfCIWfCBBIBV8ID0gFHwgQCAMfCAWIBUgFIWDIBSFfCAWQjKJIBZCLomFIBZCF4mFfEKovIybov+/35B/fCIaIAhCJIkgCEIeiYUgCEIZiYUgCCAHhSAGgyAIIAeDhXwgGXwiBnwiDCAWIBWFgyAVhXwgDEIyiSAMQi6JhSAMQheJhXxC6fuK9L2dm6ikf3wiGSAGQiSJIAZCHomFIAZCGYmFIAYgCIUgB4MgBiAIg4V8IBt8Igd8IhQgDCAWhYMgFoV8IBRCMokgFEIuiYUgFEIXiYV8QpXymZb7/uj8vn98IhsgB0IkiSAHQh6JhSAHQhmJhSAHIAaFIAiDIAcgBoOFfCAcfCIIfCIVIBQgDIWDIAyFfCAVQjKJIBVCLomFIBVCF4mFfEKrpsmbrp7euEZ8IhwgCEIkiSAIQh6JhSAIQhmJhSAIIAeFIAaDIAggB4OFfCAXfCIGfCIWIBUgFIWDIBSFIAx8IEZ8IBZCMokgFkIuiYUgFkIXiYV8QpzDmdHu2c+TSnwiFyAGQiSJIAZCHomFIAZCGYmFIAYgCIUgB4MgBiAIg4V8IBp8Igd8IgwgSHwgRCAWfCBHIBV8IEMgFHwgDCAWIBWFgyAVhXwgDEIyiSAMQi6JhSAMQheJhXxCh4SDjvKYrsNRfCIaIAdCJIkgB0IeiYUgB0IZiYUgByAGhSAIgyAHIAaDhXwgGXwiCHwiFCAMIBaFgyAWhXwgFEIyiSAUQi6JhSAUQheJhXxCntaD7+y6n+1qfCIdIAhCJIkgCEIeiYUgCEIZiYUgCCAHhSAGgyAIIAeDhXwgG3wiBnwiFSAUIAyFgyAMhXwgFUIyiSAVQi6JhSAVQheJhXxC+KK78/7v0751fCIbIAZCJIkgBkIeiYUgBkIZiYUgBiAIhSAHgyAGIAiDhXwgHHwiB3wiDCAVIBSFgyAUhXwgDEIyiSAMQi6JhSAMQheJhXxCut/dkKf1mfgGfCIcIAdCJIkgB0IeiYUgB0IZiYUgByAGhSAIgyAHIAaDhXwgF3wiCHwiFnwgPkI4iSA+QgeIhSA+Qj+JhSA6fCBGfCBFQgOJIEVCBoiFIEVCLYmFfCIZIAx8IEkgFXwgRSAUfCAWIAwgFYWDIBWFfCAWQjKJIBZCLomFIBZCF4mFfEKmsaKW2rjfsQp8Ih4gCEIkiSAIQh6JhSAIQhmJhSAIIAeFIAaDIAggB4OFfCAafCIGfCIUIBYgDIWDIAyFfCAUQjKJIBRCLomFIBRCF4mFfEKum+T3y4DmnxF8Ih8gBkIkiSAGQh6JhSAGQhmJhSAGIAiFIAeDIAYgCIOFfCAdfCIHfCIMIBQgFoWDIBaFfCAMQjKJIAxCLomFIAxCF4mFfEKbjvGY0ebCuBt8Ih0gB0IkiSAHQh6JhSAHQhmJhSAHIAaFIAiDIAcgBoOFfCAbfCIIfCIVIAwgFIWDIBSFfCAVQjKJIBVCLomFIBVCF4mFfEKE+5GY0v7d7Sh8IhsgCEIkiSAIQh6JhSAIQhmJhSAIIAeFIAaDIAggB4OFfCAcfCIGfCIWfCBAQjiJIEBCB4iFIEBCP4mFIDx8IEh8ID9COIkgP0IHiIUgP0I/iYUgO3wgR3wgGUIDiSAZQgaIhSAZQi2JhXwiF0IDiSAXQgaIhSAXQi2JhXwiGiAVfCBLIAx8IBcgFHwgFiAVIAyFgyAMhXwgFkIyiSAWQi6JhSAWQheJhXxCk8mchrTvquUyfCIMIAZCJIkgBkIeiYUgBkIZiYUgBiAIhSAHgyAGIAiDhXwgHnwiB3wiFCAWIBWFgyAVhXwgFEIyiSAUQi6JhSAUQheJhXxCvP2mrqHBr888fCIcIAdCJIkgB0IeiYUgB0IZiYUgByAGhSAIgyAHIAaDhXwgH3wiCHwiFSAUIBaFgyAWhXwgFUIyiSAVQi6JhSAVQheJhXxCzJrA4Mn42Y7DAHwiHiAIQiSJIAhCHomFIAhCGYmFIAggB4UgBoMgCCAHg4V8IB18IgZ8IhYgFSAUhYMgFIV8IBZCMokgFkIuiYUgFkIXiYV8QraF+dnsl/XizAB8Ih0gBkIkiSAGQh6JhSAGQhmJhSAGIAiFIAeDIAYgCIOFfCAbfCIHfCIXIFB8NwM4IAAgUiAHQiSJIAdCHomFIAdCGYmFIAcgBoUgCIMgByAGg4V8IAx8IghCJIkgCEIeiYUgCEIZiYUgCCAHhSAGgyAIIAeDhXwgHHwiBkIkiSAGQh6JhSAGQhmJhSAGIAiFIAeDIAYgCIOFfCAefCIHQiSJIAdCHomFIAdCGYmFIAcgBoUgCIMgByAGg4V8IB18Igx8NwMYIAAgTyBBQjiJIEFCB4iFIEFCP4mFID18IEl8IBpCA4kgGkIGiIUgGkItiYV8IhogFHwgFyAWIBWFgyAVhXwgF0IyiSAXQi6JhSAXQheJhXxCqvyV48+zyr/ZAHwiGyAIfCIUfDcDMCAAIFQgDEIkiSAMQh6JhSAMQhmJhSAMIAeFIAaDIAwgB4OFfCAbfCIIfDcDECAAIE4gQkI4iSBCQgeIhSBCQj+JhSBBfCAZfCBMQgOJIExCBoiFIExCLYmFfCAVfCAUIBcgFoWDIBaFfCAUQjKJIBRCLomFIBRCF4mFfELs9dvWs/Xb5d8AfCIZIAZ8IhV8NwMoIAAgViAIQiSJIAhCHomFIAhCGYmFIAggDIUgB4MgCCAMg4V8IBl8IgZ8NwMIIAAgTSBGQjiJIEZCB4iFIEZCP4mFIEJ8IEp8IBpCA4kgGkIGiIUgGkItiYV8IBZ8IBUgFCAXhYMgF4V8IBVCMokgFUIuiYUgFUIXiYV8QpewndLEsYai7AB8IhQgB3x8NwMgIAAgAiAGQiSJIAZCHomFIAZCGYmFIAYgCIUgDIMgBiAIg4V8IBR8fDcDAAvFCQIBfgR/QQApA4CKASIAp0EDdkEPcSIBQQN0QYCJAWoiAiACKQMAQn8gAEIDhkI4gyIAhkJ/hYNCgAEgAIaFNwMAIAFBAWohAgJAIAFBDkkNAAJAIAJBD0cNAEEAQgA3A/iJAQtBiIoBQYCJARADQQAhAgsgAkEDdCEBA0AgAUGAiQFqQgA3AwAgAUEIaiIBQfgARw0AC0EAQQApA4CKASIAQjuGIABCK4ZCgICAgICAwP8Ag4QgAEIbhkKAgICAgOA/gyAAQguGQoCAgIDwH4OEhCAAQgWIQoCAgPgPgyAAQhWIQoCA/AeDhCAAQiWIQoD+A4MgAEIDhkI4iISEhDcD+IkBQYiKAUGAiQEQA0EAQQApA8CKASIAQjiGIABCKIZCgICAgICAwP8Ag4QgAEIYhkKAgICAgOA/gyAAQgiGQoCAgIDwH4OEhCAAQgiIQoCAgPgPgyAAQhiIQoCA/AeDhCAAQiiIQoD+A4MgAEI4iISEhDcDwIoBQQBBACkDuIoBIgBCOIYgAEIohkKAgICAgIDA/wCDhCAAQhiGQoCAgICA4D+DIABCCIZCgICAgPAfg4SEIABCCIhCgICA+A+DIABCGIhCgID8B4OEIABCKIhCgP4DgyAAQjiIhISENwO4igFBAEEAKQOwigEiAEI4hiAAQiiGQoCAgICAgMD/AIOEIABCGIZCgICAgIDgP4MgAEIIhkKAgICA8B+DhIQgAEIIiEKAgID4D4MgAEIYiEKAgPwHg4QgAEIoiEKA/gODIABCOIiEhIQ3A7CKAUEAQQApA6iKASIAQjiGIABCKIZCgICAgICAwP8Ag4QgAEIYhkKAgICAgOA/gyAAQgiGQoCAgIDwH4OEhCAAQgiIQoCAgPgPgyAAQhiIQoCA/AeDhCAAQiiIQoD+A4MgAEI4iISEhDcDqIoBQQBBACkDoIoBIgBCOIYgAEIohkKAgICAgIDA/wCDhCAAQhiGQoCAgICA4D+DIABCCIZCgICAgPAfg4SEIABCCIhCgICA+A+DIABCGIhCgID8B4OEIABCKIhCgP4DgyAAQjiIhISENwOgigFBAEEAKQOYigEiAEI4hiAAQiiGQoCAgICAgMD/AIOEIABCGIZCgICAgIDgP4MgAEIIhkKAgICA8B+DhIQgAEIIiEKAgID4D4MgAEIYiEKAgPwHg4QgAEIoiEKA/gODIABCOIiEhIQ3A5iKAUEAQQApA5CKASIAQjiGIABCKIZCgICAgICAwP8Ag4QgAEIYhkKAgICAgOA/gyAAQgiGQoCAgIDwH4OEhCAAQgiIQoCAgPgPgyAAQhiIQoCA/AeDhCAAQiiIQoD+A4MgAEI4iISEhDcDkIoBQQBBACkDiIoBIgBCOIYgAEIohkKAgICAgIDA/wCDhCAAQhiGQoCAgICA4D+DIABCCIZCgICAgPAfg4SEIABCCIhCgICA+A+DIABCGIhCgID8B4OEIABCKIhCgP4DgyAAQjiIhISEIgA3A4iKAQJAQQAoAsiKASIDRQ0AQQAgADwAgAkgA0EBRg0AIABCCIinIQRBASEBQQEhAgNAIAFBgAlqIAQ6AAAgAyACQQFqIgJB/wFxIgFNDQEgAUGIigFqLQAAIQQMAAsLCwYAQYCJAQuhAgBBAEIANwOAigFBAEEwQcAAIAFBgANGIgEbNgLIigFBAEKkn+n324PS2scAQvnC+JuRo7Pw2wAgARs3A8CKAUEAQqef5qfWwYuGW0Lr+obav7X2wR8gARs3A7iKAUEAQpGq4ML20JLajn9Cn9j52cKR2oKbfyABGzcDsIoBQQBCsZaA/v/MyZnnAELRhZrv+s+Uh9EAIAEbNwOoigFBAEK5srm4j5v7lxVC8e30+KWn/aelfyABGzcDoIoBQQBCl7rDg6OrwKyRf0Kr8NP0r+68tzwgARs3A5iKAUEAQoeq87OjpYrN4gBCu86qptjQ67O7fyABGzcDkIoBQQBC2L2WiNyr591LQoiS853/zPmE6gAgARs3A4iKASAAEAIQBAsLCwEAQYAICwTQAAAA";
        var hash$9 = "a5d1ca7c";
        var wasmJson$9 = {
          name: name$9,
          data: data$9,
          hash: hash$9
        };
        const mutex$8 = new Mutex();
        let wasmCache$8 = null;
        function sha384(data2) {
          if (wasmCache$8 === null) {
            return lockedCreate(mutex$8, wasmJson$9, 48).then((wasm) => {
              wasmCache$8 = wasm;
              return wasmCache$8.calculate(data2, 384);
            });
          }
          try {
            const hash2 = wasmCache$8.calculate(data2, 384);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createSHA384() {
          return WASMInterface(wasmJson$9, 48).then((wasm) => {
            wasm.init(384);
            const obj = {
              init: () => {
                wasm.init(384);
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 128,
              digestSize: 48
            };
            return obj;
          });
        }
        const mutex$7 = new Mutex();
        let wasmCache$7 = null;
        function sha5123(data2) {
          if (wasmCache$7 === null) {
            return lockedCreate(mutex$7, wasmJson$9, 64).then((wasm) => {
              wasmCache$7 = wasm;
              return wasmCache$7.calculate(data2, 512);
            });
          }
          try {
            const hash2 = wasmCache$7.calculate(data2, 512);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createSHA512() {
          return WASMInterface(wasmJson$9, 64).then((wasm) => {
            wasm.init(512);
            const obj = {
              init: () => {
                wasm.init(512);
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 128,
              digestSize: 64
            };
            return obj;
          });
        }
        var name$8 = "xxhash32";
        var data$8 = "AGFzbQEAAAABEQRgAAF/YAF/AGAAAGACf38AAwcGAAEBAgADBAUBcAEBAQUEAQECAgYOAn8BQbCJBQt/AEGACAsHcAgGbWVtb3J5AgAOSGFzaF9HZXRCdWZmZXIAAAlIYXNoX0luaXQAAQtIYXNoX1VwZGF0ZQACCkhhc2hfRmluYWwAAw1IYXNoX0dldFN0YXRlAAQOSGFzaF9DYWxjdWxhdGUABQpTVEFURV9TSVpFAwEKswkGBQBBgAkLTQBBAEIANwOoiQFBACAANgKIiQFBACAAQc+Moo4GajYCjIkBQQAgAEH3lK+veGo2AoSJAUEAIABBqIiNoQJqNgKAiQFBAEEANgKgiQELswUBBn8CQCAARQ0AQQBBACkDqIkBIACtfDcDqIkBAkBBACgCoIkBIgEgAGpBD0sNAEEAIAFBAWo2AqCJASABQZCJAWpBAC0AgAk6AAAgAEEBRg0BQQEhAgNAQQBBACgCoIkBIgFBAWo2AqCJASABQZCJAWogAkGACWotAAA6AAAgACACQQFqIgJHDQAMAgsLIABB8AhqIQMCQAJAIAENAEEAKAKMiQEhAUEAKAKIiQEhBEEAKAKEiQEhBUEAKAKAiQEhBkGACSECDAELQYAJIQICQCABQQ9LDQBBgAkhAgNAIAItAAAhBEEAIAFBAWo2AqCJASABQZCJAWogBDoAACACQQFqIQJBACgCoIkBIgFBEEkNAAsLQQBBACgCkIkBQfeUr694bEEAKAKAiQFqQQ13QbHz3fF5bCIGNgKAiQFBAEEAKAKUiQFB95Svr3hsQQAoAoSJAWpBDXdBsfPd8XlsIgU2AoSJAUEAQQAoApiJAUH3lK+veGxBACgCiIkBakENd0Gx893xeWwiBDYCiIkBQQBBACgCnIkBQfeUr694bEEAKAKMiQFqQQ13QbHz3fF5bCIBNgKMiQELIABBgAlqIQACQCACIANLDQADQCACKAIAQfeUr694bCAGakENd0Gx893xeWwhBiACQQxqKAIAQfeUr694bCABakENd0Gx893xeWwhASACQQhqKAIAQfeUr694bCAEakENd0Gx893xeWwhBCACQQRqKAIAQfeUr694bCAFakENd0Gx893xeWwhBSACQRBqIgIgA00NAAsLQQAgATYCjIkBQQAgBDYCiIkBQQAgBTYChIkBQQAgBjYCgIkBQQAgACACayIBNgKgiQEgAUUNAEEAIQEDQCABQZCJAWogAiABai0AADoAACABQQFqIgFBACgCoIkBSQ0ACwsLzAICAX4Gf0EAKQOoiQEiAKchAQJAAkAgAEIQVA0AQQAoAoSJAUEHd0EAKAKAiQFBAXdqQQAoAoiJAUEMd2pBACgCjIkBQRJ3aiECDAELQQAoAoiJAUGxz9myAWohAgsgAiABaiECQZCJASEBQQAoAqCJASIDQZCJAWohBAJAIANBBEgNAEGQiQEhBQNAIAUoAgBBvdzKlXxsIAJqQRF3Qa/W074CbCECIAVBCGohBiAFQQRqIgEhBSAGIARNDQALCwJAIAEgBEYNACADQZCJAWohBQNAIAEtAABBsc/ZsgFsIAJqQQt3QbHz3fF5bCECIAUgAUEBaiIBRw0ACwtBACACQQ92IAJzQfeUr694bCIBQQ12IAFzQb3cypV8bCIBQRB2IAFzIgFBGHQgAUEIdEGAgPwHcXIgAUEIdkGA/gNxIAFBGHZycq03A4AJCwYAQYCJAQtTAEEAQgA3A6iJAUEAIAE2AoiJAUEAIAFBz4yijgZqNgKMiQFBACABQfeUr694ajYChIkBQQAgAUGoiI2hAmo2AoCJAUEAQQA2AqCJASAAEAIQAwsLCwEAQYAICwQwAAAA";
        var hash$8 = "5b6a5062";
        var wasmJson$8 = {
          name: name$8,
          data: data$8,
          hash: hash$8
        };
        const mutex$6 = new Mutex();
        let wasmCache$6 = null;
        function validateSeed$3(seed) {
          if (!Number.isInteger(seed) || seed < 0 || seed > 4294967295) {
            return new Error("Seed must be a valid 32-bit long unsigned integer.");
          }
          return null;
        }
        function xxhash32(data2, seed = 0) {
          if (validateSeed$3(seed)) {
            return Promise.reject(validateSeed$3(seed));
          }
          if (wasmCache$6 === null) {
            return lockedCreate(mutex$6, wasmJson$8, 4).then((wasm) => {
              wasmCache$6 = wasm;
              return wasmCache$6.calculate(data2, seed);
            });
          }
          try {
            const hash2 = wasmCache$6.calculate(data2, seed);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createXXHash32(seed = 0) {
          if (validateSeed$3(seed)) {
            return Promise.reject(validateSeed$3(seed));
          }
          return WASMInterface(wasmJson$8, 4).then((wasm) => {
            wasm.init(seed);
            const obj = {
              init: () => {
                wasm.init(seed);
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 16,
              digestSize: 4
            };
            return obj;
          });
        }
        var name$7 = "xxhash64";
        var data$7 = "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";
        var hash$7 = "bc315b2a";
        var wasmJson$7 = {
          name: name$7,
          data: data$7,
          hash: hash$7
        };
        const mutex$5 = new Mutex();
        let wasmCache$5 = null;
        const seedBuffer$2 = new ArrayBuffer(8);
        function validateSeed$2(seed) {
          if (!Number.isInteger(seed) || seed < 0 || seed > 4294967295) {
            return new Error("Seed must be given as two valid 32-bit long unsigned integers (lo + high).");
          }
          return null;
        }
        function writeSeed$2(arr, low, high) {
          const buffer = new DataView(arr);
          buffer.setUint32(0, low, true);
          buffer.setUint32(4, high, true);
        }
        function xxhash64(data2, seedLow = 0, seedHigh = 0) {
          if (validateSeed$2(seedLow)) {
            return Promise.reject(validateSeed$2(seedLow));
          }
          if (validateSeed$2(seedHigh)) {
            return Promise.reject(validateSeed$2(seedHigh));
          }
          if (wasmCache$5 === null) {
            return lockedCreate(mutex$5, wasmJson$7, 8).then((wasm) => {
              wasmCache$5 = wasm;
              writeSeed$2(seedBuffer$2, seedLow, seedHigh);
              wasmCache$5.writeMemory(new Uint8Array(seedBuffer$2));
              return wasmCache$5.calculate(data2);
            });
          }
          try {
            writeSeed$2(seedBuffer$2, seedLow, seedHigh);
            wasmCache$5.writeMemory(new Uint8Array(seedBuffer$2));
            const hash2 = wasmCache$5.calculate(data2);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createXXHash64(seedLow = 0, seedHigh = 0) {
          if (validateSeed$2(seedLow)) {
            return Promise.reject(validateSeed$2(seedLow));
          }
          if (validateSeed$2(seedHigh)) {
            return Promise.reject(validateSeed$2(seedHigh));
          }
          return WASMInterface(wasmJson$7, 8).then((wasm) => {
            const instanceBuffer = new ArrayBuffer(8);
            writeSeed$2(instanceBuffer, seedLow, seedHigh);
            wasm.writeMemory(new Uint8Array(instanceBuffer));
            wasm.init();
            const obj = {
              init: () => {
                wasm.writeMemory(new Uint8Array(instanceBuffer));
                wasm.init();
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 32,
              digestSize: 8
            };
            return obj;
          });
        }
        var name$6 = "xxhash3";
        var data$6 = "AGFzbQEAAAABJAZgAAF/YAR/f39/AGAHf39/f39/fwBgA39/fgF+YAAAYAF/AAMMCwABAgMDAwQFBAAEBAUBcAEBAQUEAQECAgYOAn8BQcCOBQt/AEHACQsHcAgGbWVtb3J5AgAOSGFzaF9HZXRCdWZmZXIAAAlIYXNoX0luaXQABgtIYXNoX1VwZGF0ZQAHCkhhc2hfRmluYWwACA1IYXNoX0dldFN0YXRlAAkOSGFzaF9DYWxjdWxhdGUACgpTVEFURV9TSVpFAwEK+joLBQBBgAoL7wMBEH4CQCADRQ0AIAFBOGohASACQThqIQIgACkDMCEEIAApAzghBSAAKQMgIQYgACkDKCEHIAApAxAhCCAAKQMYIQkgACkDACEKIAApAwghCwNAIAcgAUFoaikDACIMfCACQXBqKQMAIAFBcGopAwAiDYUiB0IgiCAHQv////8Pg358IQcgCSABQVhqKQMAIg58IAJBYGopAwAgAUFgaikDACIPhSIJQiCIIAlC/////w+DfnwhCSALIAFBSGopAwAiEHwgAkFQaikDACABQVBqKQMAIhGFIgtCIIggC0L/////D4N+fCELIAJBeGopAwAgAUF4aikDACIShSITQiCIIBNC/////w+DfiAEfCABKQMAIhN8IQQgAkFoaikDACAMhSIMQiCIIAxC/////w+DfiAGfCANfCEGIAJBWGopAwAgDoUiDEIgiCAMQv////8Pg34gCHwgD3whCCACQUhqKQMAIBCFIgxCIIggDEL/////D4N+IAp8IBF8IQogBSASfCACKQMAIBOFIgVCIIggBUL/////D4N+fCEFIAFBwABqIQEgAkEIaiECIANBf2oiAw0ACyAAIAk3AxggACAKNwMAIAAgCzcDCCAAIAc3AyggACAINwMQIAAgBTcDOCAAIAY3AyAgACAENwMwCwveAgIBfwF+AkAgAiABKAIAIgdrIgIgBEsNACAAIAMgBSAHQQN0aiACEAEgACAAKQMAIgggBSAGaiIHKQMAhSAIQi+IhUKx893xCX43AwAgACAAKQMIIgggBykDCIUgCEIviIVCsfPd8Ql+NwMIIAAgACkDECIIIAcpAxCFIAhCL4iFQrHz3fEJfjcDECAAIAApAxgiCCAHKQMYhSAIQi+IhUKx893xCX43AxggACAAKQMgIgggBykDIIUgCEIviIVCsfPd8Ql+NwMgIAAgACkDKCIIIAcpAyiFIAhCL4iFQrHz3fEJfjcDKCAAIAApAzAiCCAHKQMwhSAIQi+IhUKx893xCX43AzAgACAAKQM4IgggBykDOIUgCEIviIVCsfPd8Ql+NwM4IAAgAyACQQZ0aiAFIAQgAmsiBxABIAEgBzYCAA8LIAAgAyAFIAdBA3RqIAQQASABIAcgBGo2AgAL3QQBBH4CQCAAQQlJDQBBACkDgIwBIAEpAyAgASkDGIUgAnyFIgNCOIYgA0IohkKAgICAgIDA/wCDhCADQhiGQoCAgICA4D+DIANCCIZCgICAgPAfg4SEIANCCIhCgICA+A+DIANCGIhCgID8B4OEIANCKIhCgP4DgyADQjiIhISEIACtfCAAQfiLAWopAwAgASkDMCABKQMohSACfYUiAnwgAkL/////D4MiBCADQiCIIgV+IgZC/////w+DIAJCIIgiAiADQv////8PgyIDfnwgBCADfiIDQiCIfCIEQiCGIANC/////w+DhCAGQiCIIAIgBX58IARCIIh8hXwiA0IliCADhUL5893xmfKZqxZ+IgNCIIggA4UPCwJAIABBBEkNACABKQMQIAEpAwiFIAKnIgFBGHQgAUEIdEGAgPwHcXIgAUEIdkGA/gNxIAFBGHZycq1CIIYgAoV9QQA1AoCMAUIghiAAQfyLAWo1AgCEhSIDQhiJIAOFIANCMYmFQqW+4/TRjIfZn39+IgNCI4ggAK18IAOFQqW+4/TRjIfZn39+IgNCHIggA4UPCwJAIABFDQAgASgCBCABKAIAc60gAnwiA0EALQCAjAFBEHQgAEEIdHIgAEEBdkGAjAFqLQAAQRh0ciAAQf+LAWotAAByrYUgA0IhiIVCz9bTvtLHq9lCfiIDQh2IIAOFQvnz3fGZ9pmrFn4iA0IgiCADhQ8LIAEpAzggAoUgASkDQIUiA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC94IAQZ+IACtQoeVr6+Ytt6bnn9+IQMCQCAAQSFJDQACQCAAQcEASQ0AAkAgAEHhAEkNACABKQNoIAJ9QQApA7iMAYUiBEL/////D4MiBSABKQNgIAJ8QQApA7CMAYUiBkIgiCIHfiIIQv////8PgyAEQiCIIgQgBkL/////D4MiBn58IAUgBn4iBUIgiHwiBkIghiAFQv////8Pg4QgCEIgiCAEIAd+fCAGQiCIfIUgA3wgASkDeCACfSAAQciLAWopAwCFIgNC/////w+DIgQgASkDcCACfCAAQcCLAWopAwCFIgVCIIgiBn4iB0L/////D4MgA0IgiCIDIAVC/////w+DIgV+fCAEIAV+IgRCIIh8IgVCIIYgBEL/////D4OEIAdCIIggAyAGfnwgBUIgiHyFfCEDCyABKQNIIAJ9QQApA6iMAYUiBEL/////D4MiBSABKQNAIAJ8QQApA6CMAYUiBkIgiCIHfiIIQv////8PgyAEQiCIIgQgBkL/////D4MiBn58IAUgBn4iBUIgiHwiBkIghiAFQv////8Pg4QgCEIgiCAEIAd+fCAGQiCIfIUgA3wgASkDWCACfSAAQdiLAWopAwCFIgNC/////w+DIgQgASkDUCACfCAAQdCLAWopAwCFIgVCIIgiBn4iB0L/////D4MgA0IgiCIDIAVC/////w+DIgV+fCAEIAV+IgRCIIh8IgVCIIYgBEL/////D4OEIAdCIIggAyAGfnwgBUIgiHyFfCEDCyABKQMoIAJ9QQApA5iMAYUiBEL/////D4MiBSABKQMgIAJ8QQApA5CMAYUiBkIgiCIHfiIIQv////8PgyAEQiCIIgQgBkL/////D4MiBn58IAUgBn4iBUIgiHwiBkIghiAFQv////8Pg4QgCEIgiCAEIAd+fCAGQiCIfIUgA3wgASkDOCACfSAAQeiLAWopAwCFIgNC/////w+DIgQgASkDMCACfCAAQeCLAWopAwCFIgVCIIgiBn4iB0L/////D4MgA0IgiCIDIAVC/////w+DIgV+fCAEIAV+IgRCIIh8IgVCIIYgBEL/////D4OEIAdCIIggAyAGfnwgBUIgiHyFfCEDCyABKQMIIAJ9QQApA4iMAYUiBEL/////D4MiBSABKQMAIAJ8QQApA4CMAYUiBkIgiCIHfiIIQv////8PgyAEQiCIIgQgBkL/////D4MiBn58IAUgBn4iBUIgiHwiBkIghiAFQv////8Pg4QgCEIgiCAEIAd+fCAGQiCIfIUgA3wgASkDGCACfSAAQfiLAWopAwCFIgNC/////w+DIgQgASkDECACfCAAQfCLAWopAwCFIgJCIIgiBX4iBkL/////D4MgA0IgiCIDIAJC/////w+DIgJ+fCAEIAJ+IgJCIIh8IgRCIIYgAkL/////D4OEIAZCIIggAyAFfnwgBEIgiHyFfCICQiWIIAKFQvnz3fGZ8pmrFn4iAkIgiCAChQuICwQBfwV+An8BfkEAIQMgASkDeCACfUEAKQP4jAGFIgRC/////w+DIgUgASkDcCACfEEAKQPwjAGFIgZCIIgiB34iCEL/////D4MgBEIgiCIEIAZC/////w+DIgZ+fCAFIAZ+IgVCIIh8IgZCIIYgBUL/////D4OEIAhCIIggBCAHfnwgBkIgiHyFIAEpA2ggAn1BACkD6IwBhSIEQv////8PgyIFIAEpA2AgAnxBACkD4IwBhSIGQiCIIgd+IghC/////w+DIARCIIgiBCAGQv////8PgyIGfnwgBSAGfiIFQiCIfCIGQiCGIAVC/////w+DhCAIQiCIIAQgB358IAZCIIh8hSABKQNYIAJ9QQApA9iMAYUiBEL/////D4MiBSABKQNQIAJ8QQApA9CMAYUiBkIgiCIHfiIIQv////8PgyAEQiCIIgQgBkL/////D4MiBn58IAUgBn4iBUIgiHwiBkIghiAFQv////8Pg4QgCEIgiCAEIAd+fCAGQiCIfIUgASkDSCACfUEAKQPIjAGFIgRC/////w+DIgUgASkDQCACfEEAKQPAjAGFIgZCIIgiB34iCEL/////D4MgBEIgiCIEIAZC/////w+DIgZ+fCAFIAZ+IgVCIIh8IgZCIIYgBUL/////D4OEIAhCIIggBCAHfnwgBkIgiHyFIAEpAzggAn1BACkDuIwBhSIEQv////8PgyIFIAEpAzAgAnxBACkDsIwBhSIGQiCIIgd+IghC/////w+DIARCIIgiBCAGQv////8PgyIGfnwgBSAGfiIFQiCIfCIGQiCGIAVC/////w+DhCAIQiCIIAQgB358IAZCIIh8hSABKQMoIAJ9QQApA6iMAYUiBEL/////D4MiBSABKQMgIAJ8QQApA6CMAYUiBkIgiCIHfiIIQv////8PgyAEQiCIIgQgBkL/////D4MiBn58IAUgBn4iBUIgiHwiBkIghiAFQv////8Pg4QgCEIgiCAEIAd+fCAGQiCIfIUgASkDGCACfUEAKQOYjAGFIgRC/////w+DIgUgASkDECACfEEAKQOQjAGFIgZCIIgiB34iCEL/////D4MgBEIgiCIEIAZC/////w+DIgZ+fCAFIAZ+IgVCIIh8IgZCIIYgBUL/////D4OEIAhCIIggBCAHfnwgBkIgiHyFIAEpAwggAn1BACkDiIwBhSIEQv////8PgyIFIAEpAwAgAnxBACkDgIwBhSIGQiCIIgd+IghC/////w+DIARCIIgiBCAGQv////8PgyIGfnwgBSAGfiIFQiCIfCIGQiCGIAVC/////w+DhCAIQiCIIAQgB358IAZCIIh8hSAArUKHla+vmLbem55/fnx8fHx8fHx8IgRCJYggBIVC+fPd8ZnymasWfiIEQiCIIASFIQQgAEEQbSEJAkAgAEGQAUgNACAJQQkgCUEJShtBeGohCQNAIAEgA2oiCkELaikDACACfSADQYiNAWopAwCFIgVC/////w+DIgYgCkEDaikDACACfCADQYCNAWopAwCFIgdCIIgiCH4iC0L/////D4MgBUIgiCIFIAdC/////w+DIgd+fCAGIAd+IgZCIIh8IgdCIIYgBkL/////D4OEIAtCIIggBSAIfnwgB0IgiHyFIAR8IQQgA0EQaiEDIAlBf2oiCQ0ACwsgASkDfyACfSAAQfiLAWopAwCFIgVC/////w+DIgYgASkDdyACfCAAQfCLAWopAwCFIgJCIIgiB34iCEL/////D4MgBUIgiCIFIAJC/////w+DIgJ+fCAGIAJ+IgJCIIh8IgZCIIYgAkL/////D4OEIAhCIIggBSAHfnwgBkIgiHyFIAR8IgJCJYggAoVC+fPd8ZnymasWfiICQiCIIAKFC98FAgF+AX8CQAJAQQApA4AKIgBQRQ0AQYAIIQFCACEADAELAkBBACkDoI4BIABSDQBBACEBDAELQQAhAUEAQq+v79e895Kg/gAgAH03A/iLAUEAIABCxZbr+djShYIofDcD8IsBQQBCj/Hjja2P9JhOIAB9NwPoiwFBACAAQqus+MXV79HQfHw3A+CLAUEAQtOt1LKShbW0nn8gAH03A9iLAUEAIABCl5r0jvWWvO3JAHw3A9CLAUEAQsWDgv2v/8SxayAAfTcDyIsBQQAgAELqi7OdyOb09UN8NwPAiwFBAELIv/rLnJveueQAIAB9NwO4iwFBACAAQoqjgd/Ume2sMXw3A7CLAUEAQvm57738+MKnHSAAfTcDqIsBQQAgAEKo9dv7s5ynmj98NwOgiwFBAEK4sry3lNW31lggAH03A5iLAUEAIABC8cihuqm0w/zOAHw3A5CLAUEAQoihl9u445SXo38gAH03A4iLAUEAIABCvNDI2pvysIBLfDcDgIsBQQBC4OvAtJ7QjpPMACAAfTcD+IoBQQAgAEK4kZii9/6Qko5/fDcD8IoBQQBCgrXB7sf5v7khIAB9NwPoigFBACAAQsvzmffEmfDy+AB8NwPgigFBAELygJGl+vbssx8gAH03A9iKAUEAIABC3qm3y76Q5MtbfDcD0IoBQQBC/IKE5PK+yNYcIAB9NwPIigFBACAAQrj9s8uzhOmlvn98NwPAigELQQBCADcDkI4BQQBCADcDiI4BQQBCADcDgI4BQQAgATYCsI4BQQAgADcDoI4BQQBCsfPd8Qk3A7iKAUEAQsXP2bLx5brqJzcDsIoBQQBC95Svrwg3A6iKAUEAQuPcypX8zvL1hX83A6CKAUEAQvnz3fGZ9pmrFjcDmIoBQQBCz9bTvtLHq9lCNwOQigFBAEKHla+vmLbem55/NwOIigFBAEK93MqVDDcDgIoBQQBCkICAgIAQNwOYjgELwAUBBX9BAEEAKQOQjgEgAK18NwOQjgECQAJAQQAoAoCOASIBIABqIgJBgAJLDQAgAUGAjAFqIQNBgAohBAJAAkAgAEEITw0AIAAhAQwBCyAAIQEDQCADIAQpAwA3AwAgA0EIaiEDIARBCGohBCABQXhqIgFBB0sNAAsLIAFFDQEDQCADIAQtAAA6AAAgA0EBaiEDIARBAWohBCABQX9qIgENAAtBACgCgI4BIABqIQIMAQtBgAohAyAAQYAKaiECQQAoArCOASIEQcCKASAEGyEAAkAgAUUNACABQYCMAWohA0GACiEEAkACQEGAAiABayIFQQhPDQAgBSEBDAELIAUhAQNAIAMgBCkDADcDACADQQhqIQMgBEEIaiEEIAFBeGoiAUEHSw0ACwsCQCABRQ0AA0AgAyAELQAAOgAAIANBAWohAyAEQQFqIQQgAUF/aiIBDQALC0GAigFBiI4BQQAoApiOAUGAjAFBBCAAQQAoApyOARACQQBBADYCgI4BIAVBgApqIQMLAkAgA0GAAmogAk8NACACQYB+aiEEA0BBgIoBQYiOAUEAKAKYjgEgA0EEIABBACgCnI4BEAIgA0GAAmoiAyAESQ0AC0EAIANBQGopAwA3A8CNAUEAIANBSGopAwA3A8iNAUEAIANBUGopAwA3A9CNAUEAIANBWGopAwA3A9iNAUEAIANBYGopAwA3A+CNAUEAIANBaGopAwA3A+iNAUEAIANBcGopAwA3A/CNAUEAIANBeGopAwA3A/iNAQtBgIwBIQQCQAJAIAIgA2siAkEITw0AIAIhAQwBCyACIQEDQCAEIAMpAwA3AwAgBEEIaiEEIANBCGohAyABQXhqIgFBB0sNAAsLIAFFDQADQCAEIAMtAAA6AAAgBEEBaiEEIANBAWohAyABQX9qIgENAAsLQQAgAjYCgI4BC6oQBQR/AX4Cfwp+An8jACIAIQEgAEGAAWtBQHEiAiQAQQAoArCOASIAQcCKASAAGyEDAkACQEEAKQOQjgEiBELxAVQNACACQQApA4CKATcDACACQQApA4iKATcDCCACQQApA5CKATcDECACQQApA5iKATcDGCACQQApA6CKATcDICACQQApA6iKATcDKCACQQApA7CKATcDMCACQQApA7iKATcDOAJAAkBBACgCgI4BIgVBwABJDQAgAkEAKAKIjgE2AkAgAiACQcAAakEAKAKYjgFBgIwBIAVBf2pBBnYgA0EAKAKcjgEQAiACIAIpAwhBACgCgI4BIgBBwIsBaikDACIEfCADQQAoApyOAWoiBkEBaikDACAAQciLAWopAwAiB4UiCEIgiCAIQv////8Pg358Igk3AwggAiACKQMYIABB0IsBaikDACIIfCAGQRFqKQMAIABB2IsBaikDACIKhSILQiCIIAtC/////w+DfnwiDDcDGCACIAcgBCAGQXlqKQMAhSIEQiCIIARC/////w+DfiACKQMAfHwiDTcDACACIAogCCAGQQlqKQMAhSIEQiCIIARC/////w+DfiACKQMQfHwiDjcDECAGQRlqKQMAIQQgAikDICEHIAIgAikDKCAAQeCLAWopAwAiCHwgBkEhaikDACAAQeiLAWopAwAiCoUiC0IgiCALQv////8Pg358Ig83AyggAiAKIAcgBCAIhSIEQiCIIARC/////w+Dfnx8IhA3AyAgAiACKQM4IABB8IsBaikDACIEfCAGQTFqKQMAIABB+IsBaikDACIHhSIIQiCIIAhC/////w+Dfnw3AzggByAEIAZBKWopAwCFIgRCIIggBEL/////D4N+IAIpAzB8fCEEDAELQcAAIAVrIRECQAJAAkAgBUE4TQ0AQYCOASARayEGIAJBwABqIQUgESEADAELQQAhEiARIQADQCACQcAAaiASaiAFIBJqQcCNAWopAwA3AwAgEkEIaiESIABBeGoiAEEHSw0ACyAFIBJqIgZBwABGDQEgBkHAjQFqIQYgAkHAAGogEmohBQsDQCAFIAYtAAA6AAAgBUEBaiEFIAZBAWohBiAAQX9qIgANAAtBACgCgI4BIQULIAJBwABqIBFqIQZBgIwBIQACQCAFQQhJDQBBgIwBIQADQCAGIAApAwA3AwAgBkEIaiEGIABBCGohACAFQXhqIgVBB0sNAAsLAkAgBUUNAANAIAYgAC0AADoAACAGQQFqIQYgAEEBaiEAIAVBf2oiBQ0ACwsgAiACKQMIIAIpA0AiBHwgA0EAKAKcjgFqIgBBAWopAwAgAikDSCIHhSIIQiCIIAhC/////w+DfnwiCTcDCCACIAIpAxggAikDUCIIfCAAQRFqKQMAIAIpA1giCoUiC0IgiCALQv////8Pg358Igw3AxggAiAHIAQgAEF5aikDAIUiBEIgiCAEQv////8Pg34gAikDAHx8Ig03AwAgAiAKIAggAEEJaikDAIUiBEIgiCAEQv////8Pg34gAikDEHx8Ig43AxAgAEEZaikDACEEIAIpAyAhByACIAIpAyggAikDYCIIfCAAQSFqKQMAIAIpA2giCoUiC0IgiCALQv////8Pg358Ig83AyggAiAKIAcgBCAIhSIEQiCIIARC/////w+Dfnx8IhA3AyAgAiACKQM4IAIpA3AiBHwgAEExaikDACACKQN4IgeFIghCIIggCEL/////D4N+fDcDOCAHIAQgAEEpaikDAIUiBEIgiCAEQv////8Pg34gAikDMHx8IQQLIAIgBDcDMCADKQNDIAIpAziFIgdC/////w+DIgggAykDOyAEhSIEQiCIIgp+IgtC/////w+DIAdCIIgiByAEQv////8PgyIEfnwgCCAEfiIEQiCIfCIIQiCGIARC/////w+DhCALQiCIIAcgCn58IAhCIIh8hSADKQMzIA+FIgRC/////w+DIgcgAykDKyAQhSIIQiCIIgp+IgtC/////w+DIARCIIgiBCAIQv////8PgyIIfnwgByAIfiIHQiCIfCIIQiCGIAdC/////w+DhCALQiCIIAQgCn58IAhCIIh8hSADKQMjIAyFIgRC/////w+DIgcgAykDGyAOhSIIQiCIIgp+IgtC/////w+DIARCIIgiBCAIQv////8PgyIIfnwgByAIfiIHQiCIfCIIQiCGIAdC/////w+DhCALQiCIIAQgCn58IAhCIIh8hSADKQMTIAmFIgRC/////w+DIgcgAykDCyANhSIIQiCIIgp+IgtC/////w+DIARCIIgiBCAIQv////8PgyIIfnwgByAIfiIHQiCIfCIIQiCGIAdC/////w+DhCALQiCIIAQgCn58IAhCIIh8hUEAKQOQjgFCh5Wvr5i23puef358fHx8IgRCJYggBIVC+fPd8ZnymasWfiIEQiCIIASFIQQMAQsgBKchAAJAQQApA6COASIEUA0AAkAgAEEQSw0AIABBgAggBBADIQQMAgsCQCAAQYABSw0AIABBgAggBBAEIQQMAgsgAEGACCAEEAUhBAwBCwJAIABBEEsNACAAIANCABADIQQMAQsCQCAAQYABSw0AIAAgA0IAEAQhBAwBCyAAIANCABAFIQQLQQAgBEI4hiAEQiiGQoCAgICAgMD/AIOEIARCGIZCgICAgIDgP4MgBEIIhkKAgICA8B+DhIQgBEIIiEKAgID4D4MgBEIYiEKAgPwHg4QgBEIoiEKA/gODIARCOIiEhIQ3A4AKIAEkAAsGAEGAigELAgALC8wBAQBBgAgLxAG4/mw5I6RLvnwBgSz3Ia0c3tRt6YOQl9tyQKSkt7NnH8t55k7MwOV4glrQfcz/ciG4CEZ090MkjuA1kOaBOiZMPChSu5HDAMuI0GWLG1Muo3FkSJeiDflOOBnvRqnerNio+nY/45w0P/ncu8fHC08dilHgS820WTHIn37J2XhzZOrFrIM00+vDxYGg//oTY+sXDd1Rt/DaSdMWVSYp1GieKxa+WH1HofyP+LjRetAxzkXLOo+VFgQor9f7yrtLQH5AAgAA";
        var hash$6 = "187bc2c6";
        var wasmJson$6 = {
          name: name$6,
          data: data$6,
          hash: hash$6
        };
        const mutex$4 = new Mutex();
        let wasmCache$4 = null;
        const seedBuffer$1 = new ArrayBuffer(8);
        function validateSeed$1(seed) {
          if (!Number.isInteger(seed) || seed < 0 || seed > 4294967295) {
            return new Error("Seed must be given as two valid 32-bit long unsigned integers (lo + high).");
          }
          return null;
        }
        function writeSeed$1(arr, low, high) {
          const buffer = new DataView(arr);
          buffer.setUint32(0, low, true);
          buffer.setUint32(4, high, true);
        }
        function xxhash3(data2, seedLow = 0, seedHigh = 0) {
          if (validateSeed$1(seedLow)) {
            return Promise.reject(validateSeed$1(seedLow));
          }
          if (validateSeed$1(seedHigh)) {
            return Promise.reject(validateSeed$1(seedHigh));
          }
          if (wasmCache$4 === null) {
            return lockedCreate(mutex$4, wasmJson$6, 8).then((wasm) => {
              wasmCache$4 = wasm;
              writeSeed$1(seedBuffer$1, seedLow, seedHigh);
              wasmCache$4.writeMemory(new Uint8Array(seedBuffer$1));
              return wasmCache$4.calculate(data2);
            });
          }
          try {
            writeSeed$1(seedBuffer$1, seedLow, seedHigh);
            wasmCache$4.writeMemory(new Uint8Array(seedBuffer$1));
            const hash2 = wasmCache$4.calculate(data2);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createXXHash3(seedLow = 0, seedHigh = 0) {
          if (validateSeed$1(seedLow)) {
            return Promise.reject(validateSeed$1(seedLow));
          }
          if (validateSeed$1(seedHigh)) {
            return Promise.reject(validateSeed$1(seedHigh));
          }
          return WASMInterface(wasmJson$6, 8).then((wasm) => {
            const instanceBuffer = new ArrayBuffer(8);
            writeSeed$1(instanceBuffer, seedLow, seedHigh);
            wasm.writeMemory(new Uint8Array(instanceBuffer));
            wasm.init();
            const obj = {
              init: () => {
                wasm.writeMemory(new Uint8Array(instanceBuffer));
                wasm.init();
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 512,
              digestSize: 8
            };
            return obj;
          });
        }
        var name$5 = "xxhash128";
        var data$5 = "AGFzbQEAAAABKwdgAAF/YAR/f39/AGAHf39/f39/fwBgA39/fgF+YAR/f39+AGAAAGABfwADDQwAAQIDBAQEBQYFAAUEBQFwAQEBBQQBAQICBg4CfwFBwI4FC38AQcAJCwdwCAZtZW1vcnkCAA5IYXNoX0dldEJ1ZmZlcgAACUhhc2hfSW5pdAAHC0hhc2hfVXBkYXRlAAgKSGFzaF9GaW5hbAAJDUhhc2hfR2V0U3RhdGUACg5IYXNoX0NhbGN1bGF0ZQALClNUQVRFX1NJWkUDAQrKRgwFAEGACgvvAwEQfgJAIANFDQAgAUE4aiEBIAJBOGohAiAAKQMwIQQgACkDOCEFIAApAyAhBiAAKQMoIQcgACkDECEIIAApAxghCSAAKQMAIQogACkDCCELA0AgByABQWhqKQMAIgx8IAJBcGopAwAgAUFwaikDACINhSIHQiCIIAdC/////w+DfnwhByAJIAFBWGopAwAiDnwgAkFgaikDACABQWBqKQMAIg+FIglCIIggCUL/////D4N+fCEJIAsgAUFIaikDACIQfCACQVBqKQMAIAFBUGopAwAiEYUiC0IgiCALQv////8Pg358IQsgAkF4aikDACABQXhqKQMAIhKFIhNCIIggE0L/////D4N+IAR8IAEpAwAiE3whBCACQWhqKQMAIAyFIgxCIIggDEL/////D4N+IAZ8IA18IQYgAkFYaikDACAOhSIMQiCIIAxC/////w+DfiAIfCAPfCEIIAJBSGopAwAgEIUiDEIgiCAMQv////8Pg34gCnwgEXwhCiAFIBJ8IAIpAwAgE4UiBUIgiCAFQv////8Pg358IQUgAUHAAGohASACQQhqIQIgA0F/aiIDDQALIAAgCTcDGCAAIAo3AwAgACALNwMIIAAgBzcDKCAAIAg3AxAgACAFNwM4IAAgBjcDICAAIAQ3AzALC94CAgF/AX4CQCACIAEoAgAiB2siAiAESw0AIAAgAyAFIAdBA3RqIAIQASAAIAApAwAiCCAFIAZqIgcpAwCFIAhCL4iFQrHz3fEJfjcDACAAIAApAwgiCCAHKQMIhSAIQi+IhUKx893xCX43AwggACAAKQMQIgggBykDEIUgCEIviIVCsfPd8Ql+NwMQIAAgACkDGCIIIAcpAxiFIAhCL4iFQrHz3fEJfjcDGCAAIAApAyAiCCAHKQMghSAIQi+IhUKx893xCX43AyAgACAAKQMoIgggBykDKIUgCEIviIVCsfPd8Ql+NwMoIAAgACkDMCIIIAcpAzCFIAhCL4iFQrHz3fEJfjcDMCAAIAApAzgiCCAHKQM4hSAIQi+IhUKx893xCX43AzggACADIAJBBnRqIAUgBCACayIHEAEgASAHNgIADwsgACADIAUgB0EDdGogBBABIAEgByAEajYCAAvtAwEFfiABKQM4IAApAziFIgNC/////w+DIgQgASkDMCAAKQMwhSIFQiCIIgZ+IgdC/////w+DIANCIIgiAyAFQv////8PgyIFfnwgBCAFfiIEQiCIfCIFQiCGIARC/////w+DhCAHQiCIIAMgBn58IAVCIIh8hSABKQMoIAApAyiFIgNC/////w+DIgQgASkDICAAKQMghSIFQiCIIgZ+IgdC/////w+DIANCIIgiAyAFQv////8PgyIFfnwgBCAFfiIEQiCIfCIFQiCGIARC/////w+DhCAHQiCIIAMgBn58IAVCIIh8hSABKQMYIAApAxiFIgNC/////w+DIgQgASkDECAAKQMQhSIFQiCIIgZ+IgdC/////w+DIANCIIgiAyAFQv////8PgyIFfnwgBCAFfiIEQiCIfCIFQiCGIARC/////w+DhCAHQiCIIAMgBn58IAVCIIh8hSABKQMIIAApAwiFIgNC/////w+DIgQgASkDACAAKQMAhSIFQiCIIgZ+IgdC/////w+DIANCIIgiAyAFQv////8PgyIFfnwgBCAFfiIEQiCIfCIFQiCGIARC/////w+DhCAHQiCIIAMgBn58IAVCIIh8hSACfHx8fCICQiWIIAKFQvnz3fGZ8pmrFn4iAkIgiCAChQvCCAEFfgJAIAFBCUkNACAAQQApA4CMASACKQMoIAIpAyCFIAN9hSABQfiLAWopAwAiBIUiBUIgiCIGQoeVr68IfiIHQv////8PgyAFQv////8PgyIFQrHz3fEJfnwgBUKHla+vCH4iBUIgiHwiCEIghiAFQv////8Pg4QgAUF/aq1CNoZ8IAQgAikDOCACKQMwhSADfIUiA0L/////D4NC95Svrwh+IANCgICAgHCDfCAGQrHz3fEJfnwgB0IgiHwgCEIgiHwiA0I4hiADQiiGQoCAgICAgMD/AIOEIANCGIZCgICAgIDgP4MgA0IIhkKAgICA8B+DhIQgA0IIiEKAgID4D4MgA0IYiEKAgPwHg4QgA0IoiEKA/gODIANCOIiEhISFIgRCIIgiBULP1tO+An4iBkL/////D4MgBEL/////D4MiBEK93MqVDH58IARCz9bTvgJ+IgdCIIh8IgRCBYhC////P4MgBEIghiAHQv////8Pg4SFQvnz3fGZ8pmrFn4iB0IgiCAHhTcDACAAIAVCvdzKlQx+IANCz9bTvtLHq9lCfnwgBkIgiHwgBEIgiHwiA0IliCADhUL5893xmfKZqxZ+IgNCIIggA4U3AwgPCwJAIAFBBEkNACAAIAIpAxggAikDEIUgA6ciAkEYdCACQQh0QYCA/AdxciACQQh2QYD+A3EgAkEYdnJyrUIghiADhXwgAUH8iwFqNQIAQiCGQQA1AoCMAYSFIgNCIIgiBCABQQJ0QYeVr694aq0iBX4iBkIgiCAEQrHz3fEJfnwgBkL/////D4MgA0L/////D4MiA0Kx893xCX58IAMgBX4iA0IgiHwiBEIgiHwgBEIghiADQv////8Pg4QiBEIBhnwiA0IliCADhUL5893xmfKZqxZ+IgVCIIggBYU3AwggACADQgOIIASFIgNCI4ggA4VCpb7j9NGMh9mff34iA0IciCADhTcDAA8LAkAgAUUNACAAIAIoAgQgAigCAHOtIAN8IgRBAC0AgIwBQRB0IAFBCHRyIAFBAXZBgIwBai0AAEEYdHIgAUH/iwFqLQAAciIBrYUgBEIhiIVCz9bTvtLHq9lCfiIEQh2IIASFQvnz3fGZ9pmrFn4iBEIgiCAEhTcDACAAIAIoAgwgAigCCHOtIAN9IgMgAUEYdCABQQh0QYCA/AdxciABQQh2QYD+A3EgAUEYdnJyQQ13rYUgA0IhiIVCz9bTvtLHq9lCfiIDQh2IIAOFQvnz3fGZ9pmrFn4iA0IgiCADhTcDCA8LIAAgAikDUCADhSACKQNYhSIEQiGIIASFQs/W077Sx6vZQn4iBEIdiCAEhUL5893xmfaZqxZ+IgRCIIggBIU3AwggACACKQNAIAOFIAIpA0iFIgNCIYggA4VCz9bTvtLHq9lCfiIDQh2IIAOFQvnz3fGZ9pmrFn4iA0IgiCADhTcDAAunCgEKfiABrSIEQoeVr6+Ytt6bnn9+IQUCQAJAIAFBIU8NAEIAIQYMAQtCACEHAkAgAUHBAEkNAEIAIQcCQCABQeEASQ0AIAIpA3ggA30gAUHIiwFqKQMAIgiFIgdC/////w+DIgkgAikDcCADfCABQcCLAWopAwAiCoUiC0IgiCIMfiINQiCIIAdCIIgiByAMfnwgDUL/////D4MgByALQv////8PgyILfnwgCSALfiIHQiCIfCIJQiCIfEEAKQO4jAEiC0EAKQOwjAEiDHyFIAlCIIYgB0L/////D4OEhSEHIAIpA2ggA30gC4UiCUL/////D4MiCyACKQNgIAN8IAyFIgxCIIgiDX4iBkL/////D4MgCUIgiCIJIAxC/////w+DIgx+fCALIAx+IgtCIIh8IgxCIIYgC0L/////D4OEIAZCIIggCSANfnwgDEIgiHyFIAV8IAggCnyFIQULIAIpA1ggA30gAUHYiwFqKQMAIgiFIglC/////w+DIgogAikDUCADfCABQdCLAWopAwAiC4UiDEIgiCINfiIGQv////8PgyAJQiCIIgkgDEL/////D4MiDH58IAogDH4iCkIgiHwiDEIghiAKQv////8Pg4QgBkIgiCAJIA1+fCAMQiCIfIUgB3xBACkDqIwBIglBACkDoIwBIgp8hSEHIAIpA0ggA30gCYUiCUL/////D4MiDCACKQNAIAN8IAqFIgpCIIgiDX4iBkL/////D4MgCUIgiCIJIApC/////w+DIgp+fCAMIAp+IgpCIIh8IgxCIIYgCkL/////D4OEIAZCIIggCSANfnwgDEIgiHyFIAV8IAggC3yFIQULIAIpAzggA30gAUHoiwFqKQMAIgiFIglC/////w+DIgogAikDMCADfCABQeCLAWopAwAiC4UiDEIgiCINfiIGQv////8PgyAJQiCIIgkgDEL/////D4MiDH58IAogDH4iCkIgiHwiDEIghiAKQv////8Pg4QgBkIgiCAJIA1+fCAMQiCIfIUgB3xBACkDmIwBIgdBACkDkIwBIgl8hSEGIAIpAyggA30gB4UiB0L/////D4MiCiACKQMgIAN8IAmFIglCIIgiDH4iDUL/////D4MgB0IgiCIHIAlC/////w+DIgl+fCAKIAl+IglCIIh8IgpCIIYgCUL/////D4OEIA1CIIggByAMfnwgCkIgiHyFIAV8IAggC3yFIQULIAAgAikDGCADfSABQfiLAWopAwAiB4UiCEL/////D4MiCSACKQMQIAN8IAFB8IsBaikDACIKhSILQiCIIgx+Ig1C/////w+DIAhCIIgiCCALQv////8PgyILfnwgCSALfiIJQiCIfCILQiCGIAlC/////w+DhCANQiCIIAggDH58IAtCIIh8hSAGfEEAKQOIjAEiCEEAKQOAjAEiCXyFIgsgAikDCCADfSAIhSIIQv////8PgyIMIAIpAwAgA3wgCYUiCUIgiCINfiIGQv////8PgyAIQiCIIgggCUL/////D4MiCX58IAwgCX4iCUIgiHwiDEIghiAJQv////8Pg4QgBkIgiCAIIA1+fCAMQiCIfIUgBXwgByAKfIUiBXwiB0IliCAHhUL5893xmfKZqxZ+IgdCIIggB4U3AwAgAEIAIAVCh5Wvr5i23puef34gBCADfULP1tO+0ser2UJ+fCALQuPcypX8zvL1hX9+fCIDQiWIIAOFQvnz3fGZ8pmrFn4iA0IgiCADhX03AwgLiQ8DAX8UfgJ/QQAhBCACKQN4IAN9QQApA/iMASIFhSIGQv////8PgyIHIAIpA3AgA3xBACkD8IwBIgiFIglCIIgiCn4iC0L/////D4MgBkIgiCIGIAlC/////w+DIgl+fCAHIAl+IgdCIIh8IglCIIYgB0L/////D4OEIAtCIIggBiAKfnwgCUIgiHyFIAIpA1ggA31BACkD2IwBIgeFIgZC/////w+DIgkgAikDUCADfEEAKQPQjAEiCoUiC0IgiCIMfiINQv////8PgyAGQiCIIgYgC0L/////D4MiC358IAkgC34iCUIgiHwiC0IghiAJQv////8Pg4QgDUIgiCAGIAx+fCALQiCIfIUgAikDOCADfUEAKQO4jAEiCYUiBkL/////D4MiCyACKQMwIAN8QQApA7CMASIMhSINQiCIIg5+Ig9C/////w+DIAZCIIgiBiANQv////8PgyINfnwgCyANfiILQiCIfCINQiCGIAtC/////w+DhCAPQiCIIAYgDn58IA1CIIh8hSACKQMYIAN9QQApA5iMASILhSIGQv////8PgyINIAIpAxAgA3xBACkDkIwBIg6FIg9CIIgiEH4iEUL/////D4MgBkIgiCIGIA9C/////w+DIg9+fCANIA9+Ig1CIIh8Ig9CIIYgDUL/////D4OEIBFCIIggBiAQfnwgD0IgiHyFQQApA4iMASINQQApA4CMASIPfIV8QQApA6iMASIQQQApA6CMASIRfIV8QQApA8iMASISQQApA8CMASITfIV8QQApA+iMASIUQQApA+CMASIVfIUiBkIliCAGhUL5893xmfKZqxZ+IgZCIIggBoUhBiACKQNoIAN9IBSFIhRC/////w+DIhYgAikDYCADfCAVhSIVQiCIIhd+IhhC/////w+DIBRCIIgiFCAVQv////8PgyIVfnwgFiAVfiIVQiCIfCIWQiCGIBVC/////w+DhCAYQiCIIBQgF358IBZCIIh8hSACKQNIIAN9IBKFIhJC/////w+DIhQgAikDQCADfCAThSITQiCIIhV+IhZC/////w+DIBJCIIgiEiATQv////8PgyITfnwgFCATfiITQiCIfCIUQiCGIBNC/////w+DhCAWQiCIIBIgFX58IBRCIIh8hSACKQMoIAN9IBCFIhBC/////w+DIhIgAikDICADfCARhSIRQiCIIhN+IhRC/////w+DIBBCIIgiECARQv////8PgyIRfnwgEiARfiIRQiCIfCISQiCGIBFC/////w+DhCAUQiCIIBAgE358IBJCIIh8hSACKQMIIAN9IA2FIg1C/////w+DIhAgAikDACADfCAPhSIPQiCIIhF+IhJC/////w+DIA1CIIgiDSAPQv////8PgyIPfnwgECAPfiIPQiCIfCIQQiCGIA9C/////w+DhCASQiCIIA0gEX58IBBCIIh8hSABrSIPQoeVr6+Ytt6bnn9+fCALIA58hXwgCSAMfIV8IAcgCnyFfCAFIAh8hSIFQiWIIAWFQvnz3fGZ8pmrFn4iBUIgiCAFhSEFIAFBIG0hGQJAIAFBoAFIDQAgGUEFIBlBBUobQXxqIRoDQCACIARqIhlBG2opAwAgA30gBEGYjQFqKQMAIgeFIghC/////w+DIgkgGUETaikDACADfCAEQZCNAWopAwAiCoUiC0IgiCIMfiINQv////8PgyAIQiCIIgggC0L/////D4MiC358IAkgC34iCUIgiHwiC0IghiAJQv////8Pg4QgDUIgiCAIIAx+fCALQiCIfIUgBnwgBEGIjQFqKQMAIgggBEGAjQFqKQMAIgl8hSEGIBlBC2opAwAgA30gCIUiCEL/////D4MiCyAZQQNqKQMAIAN8IAmFIglCIIgi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QXBqKQMANwPwjQFBACADQXhqKQMANwP4jQELQYCMASEEAkACQCACIANrIgJBCE8NACACIQEMAQsgAiEBA0AgBCADKQMANwMAIARBCGohBCADQQhqIQMgAUF4aiIBQQdLDQALCyABRQ0AA0AgBCADLQAAOgAAIARBAWohBCADQQFqIQMgAUF/aiIBDQALC0EAIAI2AoCOAQvcDgUEfwF+An8EfgJ/IwAiACEBIABBgAFrQUBxIgAkAEEAKAKwjgEiAkHAigEgAhshAwJAAkBBACkDkI4BIgRC8QFUDQAgAEEAKQOAigE3AwAgAEEAKQOIigE3AwggAEEAKQOQigE3AxAgAEEAKQOYigE3AxggAEEAKQOgigE3AyAgAEEAKQOoigE3AyggAEEAKQOwigE3AzAgAEEAKQO4igE3AzgCQAJAQQAoAoCOASIFQcAASQ0AIABBACgCiI4BNgJAIAAgAEHAAGpBACgCmI4BQYCMASAFQX9qQQZ2IANBACgCnI4BEAIgACAAKQMIQQAoAoCOASICQcCLAWopAwAiBHwgA0EAKAKcjgFqIgZBAWopAwAgAkHIiwFqKQMAIgeFIghCIIggCEL/////D4N+fDcDCCAAIAApAxggAkHQiwFqKQMAIgh8IAZBEWopAwAgAkHYiwFqKQMAIgmFIgpCIIggCkL/////D4N+fDcDGCAAIAcgBCAGQXlqKQMAhSIEQiCIIARC/////w+DfiAAKQMAfHw3AwAgACAJIAggBkEJaikDAIUiBEIgiCAEQv////8Pg34gACkDEHx8NwMQIAZBGWopAwAhBCAAKQMgIQcgACAAKQMoIAJB4IsBaikDACIIfCAGQSFqKQMAIAJB6IsBaikDACIJhSIKQiCIIApC/////w+Dfnw3AyggACAJIAcgBCAIhSIEQiCIIARC/////w+Dfnx8NwMgIAAgACkDOCACQfCLAWopAwAiBHwgBkExaikDACACQfiLAWopAwAiB4UiCEIgiCAIQv////8Pg358NwM4IAAgByAEIAZBKWopAwCFIgRCIIggBEL/////D4N+IAApAzB8fDcDMAwBC0HAACAFayELAkACQAJAIAVBOE0NAEGAjgEgC2shBiAAQcAAaiEFIAshAgwBC0EAIQwgCyECA0AgAEHAAGogDGogBSAMakHAjQFqKQMANwMAIAxBCGohDCACQXhqIgJBB0sNAAsgBSAMaiIGQcAARg0BIAZBwI0BaiEGIABBwABqIAxqIQULA0AgBSAGLQAAOgAAIAVBAWohBSAGQQFqIQYgAkF/aiICDQALQQAoAoCOASEFCyAAQcAAaiALaiEGQYCMASECAkAgBUEISQ0AQYCMASECA0AgBiACKQMANwMAIAZBCGohBiACQQhqIQIgBUF4aiIFQQdLDQALCwJAIAVFDQADQCAGIAItAAA6AAAgBkEBaiEGIAJBAWohAiAFQX9qIgUNAAsLIAAgACkDCCAAKQNAIgR8IANBACgCnI4BaiICQQFqKQMAIAApA0giB4UiCEIgiCAIQv////8Pg358NwMIIAAgACkDGCAAKQNQIgh8IAJBEWopAwAgACkDWCIJhSIKQiCIIApC/////w+Dfnw3AxggACAHIAQgAkF5aikDAIUiBEIgiCAEQv////8Pg34gACkDAHx8NwMAIAAgCSAIIAJBCWopAwCFIgRCIIggBEL/////D4N+IAApAxB8fDcDECACQRlqKQMAIQQgACkDICEHIAAgACkDKCAAKQNgIgh8IAJBIWopAwAgACkDaCIJhSIKQiCIIApC/////w+Dfnw3AyggACAJIAcgBCAIhSIEQiCIIARC/////w+Dfnx8NwMgIAAgACkDOCAAKQNwIgR8IAJBMWopAwAgACkDeCIHhSIIQiCIIAhC/////w+Dfnw3AzggACAHIAQgAkEpaikDAIUiBEIgiCAEQv////8Pg34gACkDMHx8NwMwCyAAIAAgA0ELakEAKQOQjgEiBEKHla+vmLbem55/fhADNwNAIAAgACADQQAoApyOAWpBdWogBELP1tO+0ser2UJ+Qn+FEAM3A0gMAQsgBKchAgJAQQApA6COASIEUA0AAkAgAkEQSw0AIABBwABqIAJBgAggBBAEDAILAkAgAkGAAUsNACAAQcAAaiACQYAIIAQQBQwCCyAAQcAAaiACQYAIIAQQBgwBCwJAIAJBEEsNACAAQcAAaiACIANCABAEDAELAkAgAkGAAUsNACAAQcAAaiACIANCABAFDAELIABBwABqIAIgA0IAEAYLQQAgAEH4AGopAwA3A8AKQQAgAEHwAGopAwA3A7gKQQAgAEHoAGopAwA3A7AKQQAgAEHgAGopAwA3A6gKQQAgAEHYAGopAwA3A6AKQQAgAEHQAGopAwA3A5gKQQAgACkDSCIEQjiGIARCKIZCgICAgICAwP8Ag4QgBEIYhkKAgICAgOA/gyAEQgiGQoCAgIDwH4OEhCAEQgiIQoCAgPgPgyAEQhiIQoCA/AeDhCAEQiiIQoD+A4MgBEI4iISEhCIENwOACkEAIAQ3A5AKQQAgACkDQCIEQjiGIARCKIZCgICAgICAwP8Ag4QgBEIYhkKAgICAgOA/gyAEQgiGQoCAgIDwH4OEhCAEQgiIQoCAgPgPgyAEQhiIQoCA/AeDhCAEQiiIQoD+A4MgBEI4iISEhDcDiAogASQACwYAQYCKAQsCAAsLzAEBAEGACAvEAbj+bDkjpEu+fAGBLPchrRze1G3pg5CX23JApKS3s2cfy3nmTszA5XiCWtB9zP9yIbgIRnT3QySO4DWQ5oE6Jkw8KFK7kcMAy4jQZYsbUy6jcWRIl6IN+U44Ge9Gqd6s2Kj6dj/jnDQ/+dy7x8cLTx2KUeBLzbRZMciffsnZeHNk6sWsgzTT68PFgaD/+hNj6xcN3VG38NpJ0xZVJinUaJ4rFr5YfUeh/I/4uNF60DHORcs6j5UWBCiv1/vKu0tAfkACAAA=";
        var hash$5 = "e8e3fcf8";
        var wasmJson$5 = {
          name: name$5,
          data: data$5,
          hash: hash$5
        };
        const mutex$3 = new Mutex();
        let wasmCache$3 = null;
        const seedBuffer = new ArrayBuffer(8);
        function validateSeed(seed) {
          if (!Number.isInteger(seed) || seed < 0 || seed > 4294967295) {
            return new Error("Seed must be given as two valid 32-bit long unsigned integers (lo + high).");
          }
          return null;
        }
        function writeSeed(arr, low, high) {
          const buffer = new DataView(arr);
          buffer.setUint32(0, low, true);
          buffer.setUint32(4, high, true);
        }
        function xxhash128(data2, seedLow = 0, seedHigh = 0) {
          if (validateSeed(seedLow)) {
            return Promise.reject(validateSeed(seedLow));
          }
          if (validateSeed(seedHigh)) {
            return Promise.reject(validateSeed(seedHigh));
          }
          if (wasmCache$3 === null) {
            return lockedCreate(mutex$3, wasmJson$5, 16).then((wasm) => {
              wasmCache$3 = wasm;
              writeSeed(seedBuffer, seedLow, seedHigh);
              wasmCache$3.writeMemory(new Uint8Array(seedBuffer));
              return wasmCache$3.calculate(data2);
            });
          }
          try {
            writeSeed(seedBuffer, seedLow, seedHigh);
            wasmCache$3.writeMemory(new Uint8Array(seedBuffer));
            const hash2 = wasmCache$3.calculate(data2);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createXXHash128(seedLow = 0, seedHigh = 0) {
          if (validateSeed(seedLow)) {
            return Promise.reject(validateSeed(seedLow));
          }
          if (validateSeed(seedHigh)) {
            return Promise.reject(validateSeed(seedHigh));
          }
          return WASMInterface(wasmJson$5, 16).then((wasm) => {
            const instanceBuffer = new ArrayBuffer(8);
            writeSeed(instanceBuffer, seedLow, seedHigh);
            wasm.writeMemory(new Uint8Array(instanceBuffer));
            wasm.init();
            const obj = {
              init: () => {
                wasm.writeMemory(new Uint8Array(instanceBuffer));
                wasm.init();
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 512,
              digestSize: 16
            };
            return obj;
          });
        }
        var name$4 = "ripemd160";
        var data$4 = "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";
        var hash$4 = "42f1de39";
        var wasmJson$4 = {
          name: name$4,
          data: data$4,
          hash: hash$4
        };
        const mutex$2 = new Mutex();
        let wasmCache$2 = null;
        function ripemd160(data2) {
          if (wasmCache$2 === null) {
            return lockedCreate(mutex$2, wasmJson$4, 20).then((wasm) => {
              wasmCache$2 = wasm;
              return wasmCache$2.calculate(data2);
            });
          }
          try {
            const hash2 = wasmCache$2.calculate(data2);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createRIPEMD160() {
          return WASMInterface(wasmJson$4, 20).then((wasm) => {
            wasm.init();
            const obj = {
              init: () => {
                wasm.init();
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 64,
              digestSize: 20
            };
            return obj;
          });
        }
        function calculateKeyBuffer(hasher, key) {
          const { blockSize } = hasher;
          const buf = getUInt8Buffer(key);
          if (buf.length > blockSize) {
            hasher.update(buf);
            const uintArr = hasher.digest("binary");
            hasher.init();
            return uintArr;
          }
          return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
        }
        function calculateHmac(hasher, key) {
          hasher.init();
          const { blockSize } = hasher;
          const keyBuf = calculateKeyBuffer(hasher, key);
          const keyBuffer = new Uint8Array(blockSize);
          keyBuffer.set(keyBuf);
          const opad = new Uint8Array(blockSize);
          for (let i = 0; i < blockSize; i++) {
            const v = keyBuffer[i];
            opad[i] = v ^ 92;
            keyBuffer[i] = v ^ 54;
          }
          hasher.update(keyBuffer);
          const obj = {
            init: () => {
              hasher.init();
              hasher.update(keyBuffer);
              return obj;
            },
            update: (data2) => {
              hasher.update(data2);
              return obj;
            },
            digest: (outputType) => {
              const uintArr = hasher.digest("binary");
              hasher.init();
              hasher.update(opad);
              hasher.update(uintArr);
              return hasher.digest(outputType);
            },
            save: () => {
              throw new Error("save() not supported");
            },
            load: () => {
              throw new Error("load() not supported");
            },
            blockSize: hasher.blockSize,
            digestSize: hasher.digestSize
          };
          return obj;
        }
        function createHMAC(hash2, key) {
          if (!hash2 || !hash2.then) {
            throw new Error('Invalid hash function is provided! Usage: createHMAC(createMD5(), "key").');
          }
          return hash2.then((hasher) => calculateHmac(hasher, key));
        }
        function calculatePBKDF2(digest2, salt, iterations, hashLength, outputType) {
          return __awaiter(this, void 0, void 0, function* () {
            const DK = new Uint8Array(hashLength);
            const block1 = new Uint8Array(salt.length + 4);
            const block1View = new DataView(block1.buffer);
            const saltBuffer = getUInt8Buffer(salt);
            const saltUIntBuffer = new Uint8Array(saltBuffer.buffer, saltBuffer.byteOffset, saltBuffer.length);
            block1.set(saltUIntBuffer);
            let destPos = 0;
            const hLen = digest2.digestSize;
            const l = Math.ceil(hashLength / hLen);
            let T = null;
            let U = null;
            for (let i = 1; i <= l; i++) {
              block1View.setUint32(salt.length, i);
              digest2.init();
              digest2.update(block1);
              T = digest2.digest("binary");
              U = T.slice();
              for (let j = 1; j < iterations; j++) {
                digest2.init();
                digest2.update(U);
                U = digest2.digest("binary");
                for (let k = 0; k < hLen; k++) {
                  T[k] ^= U[k];
                }
              }
              DK.set(T.subarray(0, hashLength - destPos), destPos);
              destPos += hLen;
            }
            if (outputType === "binary") {
              return DK;
            }
            const digestChars = new Uint8Array(hashLength * 2);
            return getDigestHex(digestChars, DK, hashLength);
          });
        }
        const validateOptions$2 = (options) => {
          if (!options || typeof options !== "object") {
            throw new Error("Invalid options parameter. It requires an object.");
          }
          if (!options.hashFunction || !options.hashFunction.then) {
            throw new Error('Invalid hash function is provided! Usage: pbkdf2("password", "salt", 1000, 32, createSHA1()).');
          }
          if (!Number.isInteger(options.iterations) || options.iterations < 1) {
            throw new Error("Iterations should be a positive number");
          }
          if (!Number.isInteger(options.hashLength) || options.hashLength < 1) {
            throw new Error("Hash length should be a positive number");
          }
          if (options.outputType === void 0) {
            options.outputType = "hex";
          }
          if (!["hex", "binary"].includes(options.outputType)) {
            throw new Error(`Insupported output type ${options.outputType}. Valid values: ['hex', 'binary']`);
          }
        };
        function pbkdf2(options) {
          return __awaiter(this, void 0, void 0, function* () {
            validateOptions$2(options);
            const hmac = yield createHMAC(options.hashFunction, options.password);
            return calculatePBKDF2(hmac, options.salt, options.iterations, options.hashLength, options.outputType);
          });
        }
        var name$3 = "scrypt";
        var data$3 = "AGFzbQEAAAABIwZgAX8Bf2AAAX9gBX9/fn9/AGAEf39/fwBgAX8AYAN/f38AAwcGAAECAwQFBAUBcAEBAQUGAQECgIACBggBfwFBkIgECwc5BAZtZW1vcnkCABJIYXNoX1NldE1lbW9yeVNpemUAAA5IYXNoX0dldEJ1ZmZlcgABBnNjcnlwdAAFCpcmBlsBAX9BACEBAkAgAEEAKAKACGsiAEUNAAJAIABBEHYgAEGAgHxxIABJaiIAQABBf0cNAEH/ASEBDAELQQAhAUEAQQApA4AIIABBEHStfDcDgAgLIAFBGHRBGHULagECfwJAQQAoAogIIgANAEEAPwBBEHQiADYCiAhBgIAgQQAoAoAIayIBRQ0AAkAgAUEQdiABQYCAfHEgAUlqIgBAAEF/Rw0AQQAPC0EAQQApA4AIIABBEHStfDcDgAhBACgCiAghAAsgAAu5EAMMfwl+An8gAUEFdCEFIAQgAUEIdGohBiAEIAFBB3QiB2ohCAJAAkACQAJAIAFFDQBBACEJIAAhCiAEIQsDQCALIAooAgA2AgAgCkEEaiEKIAtBBGohCyAJQQFqIgkgBUkNAAsgAlANAiABQQh0IQxBACENIAMhDgNAQQAhCSABIQ8DQCAOIAlqIgogBCAJaiILKQMANwMAIApBCGogC0EIaikDADcDACAKQRBqIAtBEGopAwA3AwAgCkEYaiALQRhqKQMANwMAIApBIGogC0EgaikDADcDACAKQShqIAtBKGopAwA3AwAgCkEwaiALQTBqKQMANwMAIApBOGogC0E4aikDADcDACAKQcAAaiALQcAAaikDADcDACAKQcgAaiALQcgAaikDADcDACAKQdAAaiALQdAAaikDADcDACAKQdgAaiALQdgAaikDADcDACAKQeAAaiALQeAAaikDADcDACAKQegAaiALQegAaikDADcDACAKQfAAaiALQfAAaikDADcDACAKQfgAaiALQfgAaikDADcDACAJQYABaiEJIA9Bf2oiDw0ACyAEIAggBiABEAMgDiEJIAQhDyABIRADQCAJIAdqIgogDyAHaiILKQMANwMAIApBCGogC0EIaikDADcDACAKQRBqIAtBEGopAwA3AwAgCkEYaiALQRhqKQMANwMAIApBIGogC0EgaikDADcDACAKQShqIAtBKGopAwA3AwAgCkEwaiALQTBqKQMANwMAIApBOGogC0E4aikDADcDACAKQcAAaiALQcAAaikDADcDACAKQcgAaiALQcgAaikDADcDACAKQdAAaiALQdAAaikDADcDACAKQdgAaiALQdgAaikDADcDACAKQeAAaiALQeAAaikDADcDACAKQegAaiALQegAaikDADcDACAKQfAAaiALQfAAaikDADcDACAKQfgAaiALQfgAaikDADcDACAJQYABaiEJIA9BgAFqIQ8gEEF/aiIQDQALIAggBCAGIAEQAyAOIAxqIQ4gDUECaiINrSACVA0ADAILCyACUA0CIAhBQGoiCikDOCERIAopAzAhEiAKKQMoIRMgCikDICEUIAopAxghFSAKKQMQIRYgCikDCCEXIAopAwAhGEECIQoDQCAKrSEZIApBAmohCiAZIAJUDQALIAYgETcDOCAGIBI3AzAgBiATNwMoIAYgFDcDICAGIBU3AxggBiAWNwMQIAYgFzcDCCAGIBg3AwALAkAgAUUNACAHQUBqIgogCGohGiACp0F/aiEOIAogBGohGyABQQd0IQ1BACEMA0AgAyANIBsoAgAgDnFsaiEHQQAhCSABIQ8DQCAEIAlqIgogCikDACAHIAlqIgspAwCFNwMAIApBCGoiECAQKQMAIAtBCGopAwCFNwMAIApBEGoiECAQKQMAIAtBEGopAwCFNwMAIApBGGoiECAQKQMAIAtBGGopAwCFNwMAIApBIGoiECAQKQMAIAtBIGopAwCFNwMAIApBKGoiECAQKQMAIAtBKGopAwCFNwMAIApBMGoiECAQKQMAIAtBMGopAwCFNwMAIApBOGoiECAQKQMAIAtBOGopAwCFNwMAIApBwABqIhAgECkDACALQcAAaikDAIU3AwAgCkHIAGoiECAQKQMAIAtByABqKQMAhTcDACAKQdAAaiIQIBApAwAgC0HQAGopAwCFNwMAIApB2ABqIhAgECkDACALQdgAaikDAIU3AwAgCkHgAGoiECAQKQMAIAtB4ABqKQMAhTcDACAKQegAaiIQIBApAwAgC0HoAGopAwCFNwMAIApB8ABqIhAgECkDACALQfAAaikDAIU3AwAgCkH4AGoiCiAKKQMAIAtB+ABqKQMAhTcDACAJQYABaiEJIA9Bf2oiDw0ACyAEIAggBiABEAMgAyANIBooAgAgDnFsaiEHQQAhCSABIQ8DQCAIIAlqIgogCikDACAHIAlqIgspAwCFNwMAIApBCGoiECAQKQMAIAtBCGopAwCFNwMAIApBEGoiECAQKQMAIAtBEGopAwCFNwMAIApBGGoiECAQKQMAIAtBGGopAwCFNwMAIApBIGoiECAQKQMAIAtBIGopAwCFNwMAIApBKGoiECAQKQMAIAtBKGopAwCFNwMAIApBMGoiECAQKQMAIAtBMGopAwCFNwMAIApBOGoiECAQKQMAIAtBOGopAwCFNwMAIApBwABqIhAgECkDACALQcAAaikDAIU3AwAgCkHIAGoiECAQKQMAIAtByABqKQMAhTcDACAKQdAAaiIQIBApAwAgC0HQAGopAwCFNwMAIApB2ABqIhAgECkDACALQdgAaikDAIU3AwAgCkHgAGoiECAQKQMAIAtB4ABqKQMAhTcDACAKQegAaiIQIBApAwAgC0HoAGopAwCFNwMAIApB8ABqIhAgECkDACALQfAAaikDAIU3AwAgCkH4AGoiCiAKKQMAIAtB+ABqKQMAhTcDACAJQYABaiEJIA9Bf2oiDw0ACyAIIAQgBiABEAMgDEECaiIMrSACVA0ADAILCyAIQUBqIgopAzghESAKKQMwIRIgCikDKCETIAopAyAhFCAKKQMYIRUgCikDECEWIAopAwghFyAKKQMAIRhBAiEKA0AgCq0hGSAKQQJqIQogGSACVA0ACyAGIBE3AzggBiASNwMwIAYgEzcDKCAGIBQ3AyAgBiAVNwMYIAYgFjcDECAGIBc3AwggBiAYNwMACyABRQ0AQQAhCgNAIAAgBCgCADYCACAAQQRqIQAgBEEEaiEEIApBAWoiCiAFSQ0ACwsL4wUDAX8IfgJ/IAIgA0EHdCAAakFAaiIEKQMAIgU3AwAgAiAEKQMIIgY3AwggAiAEKQMQIgc3AxAgAiAEKQMYIgg3AxggAiAEKQMgIgk3AyAgAiAEKQMoIgo3AyggAiAEKQMwIgs3AzAgAiAEKQM4Igw3AzgCQCADRQ0AIANBAXQhDSAAQfgAaiEEIANBBnQhDkECIQADQCACIAUgBEGIf2opAwCFNwMAIAIgBiAEQZB/aikDAIU3AwggAiAHIARBmH9qKQMAhTcDECACIAggBEGgf2opAwCFNwMYIAIgCSAEQah/aikDAIU3AyAgAiAKIARBsH9qKQMAhTcDKCACIAsgBEG4f2opAwCFNwMwIAIgDCAEQUBqKQMAhTcDOCACEAQgASACKQMANwMAIAFBCGogAikDCDcDACABQRBqIAIpAxA3AwAgAUEYaiACKQMYNwMAIAFBIGogAikDIDcDACABQShqIAIpAyg3AwAgAUEwaiACKQMwNwMAIAFBOGogAikDODcDACACIAIpAwAgBEFIaikDAIU3AwAgAiACKQMIIARBUGopAwCFNwMIIAIgAikDECAEQVhqKQMAhTcDECACIAIpAxggBEFgaikDAIU3AxggAiACKQMgIARBaGopAwCFNwMgIAIgAikDKCAEQXBqKQMAhTcDKCACIAIpAzAgBEF4aikDAIU3AzAgAiACKQM4IAQpAwCFNwM4IAIQBCABIA5qIgMgAikDADcDACADQQhqIAIpAwg3AwAgA0EQaiACKQMQNwMAIANBGGogAikDGDcDACADQSBqIAIpAyA3AwAgA0EoaiACKQMoNwMAIANBMGogAikDMDcDACADQThqIAIpAzg3AwAgACANTw0BIARBgAFqIQQgAUHAAGohASAAQQJqIQAgAikDOCEMIAIpAzAhCyACKQMoIQogAikDICEJIAIpAxghCCACKQMQIQcgAikDCCEGIAIpAwAhBQwACwsLug0IAX4BfwF+AX8BfgF/AX4SfyAAIAAoAgQgACkDKCIBQiCIpyICIAApAzgiA0IgiKciBGpBB3cgACkDCCIFQiCIp3MiBiAEakEJdyAAKQMYIgdCIIincyIIIAZqQQ13IAJzIgkgB6ciCiABpyILakEHdyADp3MiAiALakEJdyAFp3MiDCACakENdyAKcyINIAxqQRJ3IAtzIg4gACkDACIBQiCIpyIPIAApAxAiA0IgiKciEGpBB3cgACkDICIFQiCIp3MiC2pBB3dzIgogCSAIakESdyAEcyIRIAJqQQd3IAApAzAiB6ciCSABpyISakEHdyADp3MiBCASakEJdyAFp3MiEyAEakENdyAJcyIUcyIJIBFqQQl3IAsgEGpBCXcgB0IgiKdzIhVzIhYgCWpBDXcgAnMiFyAWakESdyARcyIRakEHdyAGIBQgE2pBEncgEnMiEmpBB3cgFSALakENdyAPcyIUcyICIBJqQQl3IAxzIg8gAmpBDXcgBnMiGHMiBiARakEJdyAIIA0gFCAVakESdyAQcyIQIARqQQd3cyIMIBBqQQl3cyIIcyIVIAZqQQ13IApzIhQgDCAKIA5qQQl3IBNzIhMgCmpBDXcgC3MiGSATakESdyAOcyIKakEHdyAXcyILIApqQQl3IA9zIg4gC2pBDXcgDHMiFyAOakESdyAKcyINIAIgCCAMakENdyAEcyIMIAhqQRJ3IBBzIghqQQd3IBlzIgpqQQd3cyIEIBQgFWpBEncgEXMiECALakEHdyAJIBggD2pBEncgEnMiEWpBB3cgDHMiDCARakEJdyATcyISIAxqQQ13IAlzIg9zIgkgEGpBCXcgCiAIakEJdyAWcyITcyIWIAlqQQ13IAtzIhQgFmpBEncgEHMiEGpBB3cgBiAPIBJqQRJ3IBFzIhFqQQd3IBMgCmpBDXcgAnMiC3MiAiARakEJdyAOcyIOIAJqQQ13IAZzIhhzIgYgEGpBCXcgFSAXIAsgE2pBEncgCHMiCCAMakEHd3MiCyAIakEJd3MiE3MiFSAGakENdyAEcyIXIAsgBCANakEJdyAScyISIARqQQ13IApzIhkgEmpBEncgDXMiBGpBB3cgFHMiCiAEakEJdyAOcyIPIApqQQ13IAtzIhQgD2pBEncgBHMiDSACIBMgC2pBDXcgDHMiDCATakESdyAIcyIIakEHdyAZcyILakEHd3MiBCAXIBVqQRJ3IBBzIhAgCmpBB3cgCSAYIA5qQRJ3IBFzIg5qQQd3IAxzIgwgDmpBCXcgEnMiESAMakENdyAJcyIXcyIJIBBqQQl3IAsgCGpBCXcgFnMiEnMiEyAJakENdyAKcyIYIBNqQRJ3IBBzIhBqQQd3IAYgFyARakESdyAOcyIKakEHdyASIAtqQQ13IAJzIhdzIgIgCmpBCXcgD3MiDiACakENdyAGcyIWcyIGIAkgFiAOakESdyAKcyIWakEHdyAVIBQgFyASakESdyAIcyIIIAxqQQd3cyIKIAhqQQl3cyISIApqQQ13IAxzIg9zIgwgFmpBCXcgBCANakEJdyARcyIRcyIVIAxqQQ13IAlzIhQgFWpBEncgFnMiCWpBB3cgAiAPIBJqQRJ3IAhzIghqQQd3IBEgBGpBDXcgC3MiD3MiCyAIakEJdyATcyITIAtqQQ13IAJzIhdzIhZqNgIEIAAgACgCCCAWIAlqQQl3IAogDyARakESdyANcyIRakEHdyAYcyICIBFqQQl3IA5zIg5zIg9qNgIIIAAgACgCDCAPIBZqQQ13IAZzIg1qNgIMIAAgACgCECAGIBBqQQl3IBJzIhIgDiACakENdyAKcyIYIBcgE2pBEncgCHMiCiAMakEHd3MiCCAKakEJd3MiFiAIakENdyAMcyIMajYCECAAIAAoAgAgDSAPakESdyAJc2o2AgAgACAAKAIUIAwgFmpBEncgCnNqNgIUIAAgACgCGCAIajYCGCAAIAAoAhwgFmo2AhwgACAAKAIgIBIgBmpBDXcgBHMiCSAYIA5qQRJ3IBFzIgYgC2pBB3dzIgogBmpBCXcgFXMiBGo2AiAgACAAKAIkIAQgCmpBDXcgC3MiC2o2AiQgACAAKAIoIAsgBGpBEncgBnNqNgIoIAAgACgCLCAKajYCLCAAIAAoAjAgCSASakESdyAQcyIGIAJqQQd3IBRzIgtqNgIwIAAgACgCNCALIAZqQQl3IBNzIgpqNgI0IAAgACgCOCAKIAtqQQ13IAJzIgJqNgI4IAAgACgCPCACIApqQRJ3IAZzajYCPAtyAwF/AX4CfwJAIAJFDQBBACgCiAgiAyAAIAGtIgQgAyAAQQd0IgUgAmxqIgMgAyAFIAFsaiIGEAIgAkEBRg0AIAJBf2ohASAFIQIDQEEAKAKICCACaiAAIAQgAyAGEAIgAiAFaiECIAFBf2oiAQ0ACwsL";
        var hash$3 = "d96fb75f";
        var wasmJson$3 = {
          name: name$3,
          data: data$3,
          hash: hash$3
        };
        function scryptInternal(options) {
          return __awaiter(this, void 0, void 0, function* () {
            const { costFactor, blockSize, parallelism, hashLength } = options;
            const SHA256Hasher = createSHA256();
            const blockData = yield pbkdf2({
              password: options.password,
              salt: options.salt,
              iterations: 1,
              hashLength: 128 * blockSize * parallelism,
              hashFunction: SHA256Hasher,
              outputType: "binary"
            });
            const scryptInterface = yield WASMInterface(wasmJson$3, 0);
            const VSize = 128 * blockSize * costFactor;
            const XYSize = 256 * blockSize;
            scryptInterface.setMemorySize(blockData.length + VSize + XYSize);
            scryptInterface.writeMemory(blockData, 0);
            scryptInterface.getExports().scrypt(blockSize, costFactor, parallelism);
            const expensiveSalt = scryptInterface.getMemory().subarray(0, 128 * blockSize * parallelism);
            const outputData = yield pbkdf2({
              password: options.password,
              salt: expensiveSalt,
              iterations: 1,
              hashLength,
              hashFunction: SHA256Hasher,
              outputType: "binary"
            });
            if (options.outputType === "hex") {
              const digestChars = new Uint8Array(hashLength * 2);
              return getDigestHex(digestChars, outputData, hashLength);
            }
            return outputData;
          });
        }
        const isPowerOfTwo = (v) => v && !(v & v - 1);
        const validateOptions$1 = (options) => {
          if (!options || typeof options !== "object") {
            throw new Error("Invalid options parameter. It requires an object.");
          }
          if (!Number.isInteger(options.blockSize) || options.blockSize < 1) {
            throw new Error("Block size should be a positive number");
          }
          if (!Number.isInteger(options.costFactor) || options.costFactor < 2 || !isPowerOfTwo(options.costFactor)) {
            throw new Error("Cost factor should be a power of 2, greater than 1");
          }
          if (!Number.isInteger(options.parallelism) || options.parallelism < 1) {
            throw new Error("Parallelism should be a positive number");
          }
          if (!Number.isInteger(options.hashLength) || options.hashLength < 1) {
            throw new Error("Hash length should be a positive number.");
          }
          if (options.outputType === void 0) {
            options.outputType = "hex";
          }
          if (!["hex", "binary"].includes(options.outputType)) {
            throw new Error(`Insupported output type ${options.outputType}. Valid values: ['hex', 'binary']`);
          }
        };
        function scrypt(options) {
          return __awaiter(this, void 0, void 0, function* () {
            validateOptions$1(options);
            return scryptInternal(options);
          });
        }
        var name$2 = "bcrypt";
        var data$2 = "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";
        var hash$2 = "9f4c7b9e";
        var wasmJson$2 = {
          name: name$2,
          data: data$2,
          hash: hash$2
        };
        function bcryptInternal(options) {
          return __awaiter(this, void 0, void 0, function* () {
            const { costFactor, password, salt } = options;
            const bcryptInterface = yield WASMInterface(wasmJson$2, 0);
            bcryptInterface.writeMemory(getUInt8Buffer(salt), 0);
            const passwordBuffer = getUInt8Buffer(password);
            bcryptInterface.writeMemory(passwordBuffer, 16);
            const shouldEncode = options.outputType === "encoded" ? 1 : 0;
            bcryptInterface.getExports().bcrypt(passwordBuffer.length, costFactor, shouldEncode);
            const memory = bcryptInterface.getMemory();
            if (options.outputType === "encoded") {
              return intArrayToString(memory, 60);
            }
            if (options.outputType === "hex") {
              const digestChars = new Uint8Array(24 * 2);
              return getDigestHex(digestChars, memory, 24);
            }
            return memory.slice(0, 24);
          });
        }
        const validateOptions = (options) => {
          if (!options || typeof options !== "object") {
            throw new Error("Invalid options parameter. It requires an object.");
          }
          if (!Number.isInteger(options.costFactor) || options.costFactor < 4 || options.costFactor > 31) {
            throw new Error("Cost factor should be a number between 4 and 31");
          }
          options.password = getUInt8Buffer(options.password);
          if (options.password.length < 1) {
            throw new Error("Password should be at least 1 byte long");
          }
          if (options.password.length > 72) {
            throw new Error("Password should be at most 72 bytes long");
          }
          options.salt = getUInt8Buffer(options.salt);
          if (options.salt.length !== 16) {
            throw new Error("Salt should be 16 bytes long");
          }
          if (options.outputType === void 0) {
            options.outputType = "encoded";
          }
          if (!["hex", "binary", "encoded"].includes(options.outputType)) {
            throw new Error(`Insupported output type ${options.outputType}. Valid values: ['hex', 'binary', 'encoded']`);
          }
        };
        function bcrypt(options) {
          return __awaiter(this, void 0, void 0, function* () {
            validateOptions(options);
            return bcryptInternal(options);
          });
        }
        const validateHashCharacters = (hash2) => {
          if (!/^\$2[axyb]\$[0-3][0-9]\$[./A-Za-z0-9]{53}$/.test(hash2)) {
            return false;
          }
          if (hash2[4] === "0" && parseInt(hash2[5], 10) < 4) {
            return false;
          }
          if (hash2[4] === "3" && parseInt(hash2[5], 10) > 1) {
            return false;
          }
          return true;
        };
        const validateVerifyOptions = (options) => {
          if (!options || typeof options !== "object") {
            throw new Error("Invalid options parameter. It requires an object.");
          }
          if (options.hash === void 0 || typeof options.hash !== "string") {
            throw new Error("Hash should be specified");
          }
          if (options.hash.length !== 60) {
            throw new Error("Hash should be 60 bytes long");
          }
          if (!validateHashCharacters(options.hash)) {
            throw new Error("Invalid hash");
          }
          options.password = getUInt8Buffer(options.password);
          if (options.password.length < 1) {
            throw new Error("Password should be at least 1 byte long");
          }
          if (options.password.length > 72) {
            throw new Error("Password should be at most 72 bytes long");
          }
        };
        function bcryptVerify(options) {
          return __awaiter(this, void 0, void 0, function* () {
            validateVerifyOptions(options);
            const { hash: hash2, password } = options;
            const bcryptInterface = yield WASMInterface(wasmJson$2, 0);
            bcryptInterface.writeMemory(getUInt8Buffer(hash2), 0);
            const passwordBuffer = getUInt8Buffer(password);
            bcryptInterface.writeMemory(passwordBuffer, 60);
            return !!bcryptInterface.getExports().bcrypt_verify(passwordBuffer.length);
          });
        }
        var name$1 = "whirlpool";
        var data$1 = "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";
        var hash$1 = "358808f8";
        var wasmJson$1 = {
          name: name$1,
          data: data$1,
          hash: hash$1
        };
        const mutex$1 = new Mutex();
        let wasmCache$1 = null;
        function whirlpool(data2) {
          if (wasmCache$1 === null) {
            return lockedCreate(mutex$1, wasmJson$1, 64).then((wasm) => {
              wasmCache$1 = wasm;
              return wasmCache$1.calculate(data2);
            });
          }
          try {
            const hash2 = wasmCache$1.calculate(data2);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createWhirlpool() {
          return WASMInterface(wasmJson$1, 64).then((wasm) => {
            wasm.init();
            const obj = {
              init: () => {
                wasm.init();
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 64,
              digestSize: 64
            };
            return obj;
          });
        }
        var name2 = "sm3";
        var data = "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";
        var hash = "6e6f46ad";
        var wasmJson = {
          name: name2,
          data,
          hash
        };
        const mutex = new Mutex();
        let wasmCache = null;
        function sm3(data2) {
          if (wasmCache === null) {
            return lockedCreate(mutex, wasmJson, 32).then((wasm) => {
              wasmCache = wasm;
              return wasmCache.calculate(data2);
            });
          }
          try {
            const hash2 = wasmCache.calculate(data2);
            return Promise.resolve(hash2);
          } catch (err) {
            return Promise.reject(err);
          }
        }
        function createSM3() {
          return WASMInterface(wasmJson, 32).then((wasm) => {
            wasm.init();
            const obj = {
              init: () => {
                wasm.init();
                return obj;
              },
              update: (data2) => {
                wasm.update(data2);
                return obj;
              },
              digest: (outputType) => wasm.digest(outputType),
              save: () => wasm.save(),
              load: (data2) => {
                wasm.load(data2);
                return obj;
              },
              blockSize: 64,
              digestSize: 32
            };
            return obj;
          });
        }
        exports2.adler32 = adler32;
        exports2.argon2Verify = argon2Verify;
        exports2.argon2d = argon2d;
        exports2.argon2i = argon2i;
        exports2.argon2id = argon2id;
        exports2.bcrypt = bcrypt;
        exports2.bcryptVerify = bcryptVerify;
        exports2.blake2b = blake2b;
        exports2.blake2s = blake2s;
        exports2.blake3 = blake3;
        exports2.crc32 = crc32;
        exports2.crc32c = crc32c;
        exports2.createAdler32 = createAdler32;
        exports2.createBLAKE2b = createBLAKE2b;
        exports2.createBLAKE2s = createBLAKE2s;
        exports2.createBLAKE3 = createBLAKE3;
        exports2.createCRC32 = createCRC32;
        exports2.createCRC32C = createCRC32C;
        exports2.createHMAC = createHMAC;
        exports2.createKeccak = createKeccak;
        exports2.createMD4 = createMD4;
        exports2.createMD5 = createMD5;
        exports2.createRIPEMD160 = createRIPEMD160;
        exports2.createSHA1 = createSHA1;
        exports2.createSHA224 = createSHA224;
        exports2.createSHA256 = createSHA256;
        exports2.createSHA3 = createSHA3;
        exports2.createSHA384 = createSHA384;
        exports2.createSHA512 = createSHA512;
        exports2.createSM3 = createSM3;
        exports2.createWhirlpool = createWhirlpool;
        exports2.createXXHash128 = createXXHash128;
        exports2.createXXHash3 = createXXHash3;
        exports2.createXXHash32 = createXXHash32;
        exports2.createXXHash64 = createXXHash64;
        exports2.keccak = keccak;
        exports2.md4 = md4;
        exports2.md5 = md5;
        exports2.pbkdf2 = pbkdf2;
        exports2.ripemd160 = ripemd160;
        exports2.scrypt = scrypt;
        exports2.sha1 = sha1;
        exports2.sha224 = sha224;
        exports2.sha256 = sha2563;
        exports2.sha3 = sha3;
        exports2.sha384 = sha384;
        exports2.sha512 = sha5123;
        exports2.sm3 = sm3;
        exports2.whirlpool = whirlpool;
        exports2.xxhash128 = xxhash128;
        exports2.xxhash3 = xxhash3;
        exports2.xxhash32 = xxhash32;
        exports2.xxhash64 = xxhash64;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // node_modules/base64-js/index.js
  var require_base64_js = __commonJS({
    "node_modules/base64-js/index.js"(exports) {
      "use strict";
      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, len = code2.length; i < len; ++i) {
        lookup[i] = code2[i];
        revLookup[code2.charCodeAt(i)] = i;
      }
      var i;
      var len;
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1)
          validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i2;
        for (i2 = 0; i2 < len2; i2 += 4) {
          tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i2 = start; i2 < end; i2 += 3) {
          tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
          );
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
          );
        }
        return parts.join("");
      }
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/ieee754/index.js"(exports) {
      exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };
      exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
        }
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
        }
        buffer[offset + i - d] |= s * 128;
      };
    }
  });

  // node_modules/buffer/index.js
  var require_buffer = __commonJS({
    "node_modules/buffer/index.js"(exports) {
      "use strict";
      var base643 = require_base64_js();
      var ieee754 = require_ieee754();
      var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
      exports.Buffer = Buffer2;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 2147483647;
      exports.kMaxLength = K_MAX_LENGTH;
      Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
      }
      function typedArraySupport() {
        try {
          const arr = new Uint8Array(1);
          const proto = { foo: function() {
            return 42;
          } };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }
      Object.defineProperty(Buffer2.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (!Buffer2.isBuffer(this))
            return void 0;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer2.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (!Buffer2.isBuffer(this))
            return void 0;
          return this.byteOffset;
        }
      });
      function createBuffer(length3) {
        if (length3 > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length3 + '" is invalid for option "size"');
        }
        const buf = new Uint8Array(length3);
        Object.setPrototypeOf(buf, Buffer2.prototype);
        return buf;
      }
      function Buffer2(arg, encodingOrOffset, length3) {
        if (typeof arg === "number") {
          if (typeof encodingOrOffset === "string") {
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          }
          return allocUnsafe2(arg);
        }
        return from5(arg, encodingOrOffset, length3);
      }
      Buffer2.poolSize = 8192;
      function from5(value, encodingOrOffset, length3) {
        if (typeof value === "string") {
          return fromString3(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }
        if (value == null) {
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
          );
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length3);
        }
        if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length3);
        }
        if (typeof value === "number") {
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
          return Buffer2.from(valueOf, encodingOrOffset, length3);
        }
        const b = fromObject(value);
        if (b)
          return b;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
          return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length3);
        }
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      Buffer2.from = function(value, encodingOrOffset, length3) {
        return from5(value, encodingOrOffset, length3);
      };
      Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer2, Uint8Array);
      function assertSize(size) {
        if (typeof size !== "number") {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }
      function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer(size);
        }
        if (fill !== void 0) {
          return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
      }
      Buffer2.alloc = function(size, fill, encoding) {
        return alloc(size, fill, encoding);
      };
      function allocUnsafe2(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }
      Buffer2.allocUnsafe = function(size) {
        return allocUnsafe2(size);
      };
      Buffer2.allocUnsafeSlow = function(size) {
        return allocUnsafe2(size);
      };
      function fromString3(string2, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
          encoding = "utf8";
        }
        if (!Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        const length3 = byteLength(string2, encoding) | 0;
        let buf = createBuffer(length3);
        const actual = buf.write(string2, encoding);
        if (actual !== length3) {
          buf = buf.slice(0, actual);
        }
        return buf;
      }
      function fromArrayLike(array) {
        const length3 = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf = createBuffer(length3);
        for (let i = 0; i < length3; i += 1) {
          buf[i] = array[i] & 255;
        }
        return buf;
      }
      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          const copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
      }
      function fromArrayBuffer(array, byteOffset, length3) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length3 || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }
        let buf;
        if (byteOffset === void 0 && length3 === void 0) {
          buf = new Uint8Array(array);
        } else if (length3 === void 0) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length3);
        }
        Object.setPrototypeOf(buf, Buffer2.prototype);
        return buf;
      }
      function fromObject(obj) {
        if (Buffer2.isBuffer(obj)) {
          const len = checked(obj.length) | 0;
          const buf = createBuffer(len);
          if (buf.length === 0) {
            return buf;
          }
          obj.copy(buf, 0, 0, len);
          return buf;
        }
        if (obj.length !== void 0) {
          if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }
          return fromArrayLike(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }
      function checked(length3) {
        if (length3 >= K_MAX_LENGTH) {
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
        }
        return length3 | 0;
      }
      function SlowBuffer(length3) {
        if (+length3 != length3) {
          length3 = 0;
        }
        return Buffer2.alloc(+length3);
      }
      Buffer2.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true && b !== Buffer2.prototype;
      };
      Buffer2.compare = function compare(a, b) {
        if (isInstance(a, Uint8Array))
          a = Buffer2.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array))
          b = Buffer2.from(b, b.offset, b.byteLength);
        if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        }
        if (a === b)
          return 0;
        let x = a.length;
        let y = b.length;
        for (let i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      Buffer2.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
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
            return true;
          default:
            return false;
        }
      };
      Buffer2.concat = function concat2(list, length3) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer2.alloc(0);
        }
        let i;
        if (length3 === void 0) {
          length3 = 0;
          for (i = 0; i < list.length; ++i) {
            length3 += list[i].length;
          }
        }
        const buffer = Buffer2.allocUnsafe(length3);
        let pos = 0;
        for (i = 0; i < list.length; ++i) {
          let buf = list[i];
          if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
              if (!Buffer2.isBuffer(buf))
                buf = Buffer2.from(buf);
              buf.copy(buffer, pos);
            } else {
              Uint8Array.prototype.set.call(
                buffer,
                buf,
                pos
              );
            }
          } else if (!Buffer2.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string2, encoding) {
        if (Buffer2.isBuffer(string2)) {
          return string2.length;
        }
        if (ArrayBuffer.isView(string2) || isInstance(string2, ArrayBuffer)) {
          return string2.byteLength;
        }
        if (typeof string2 !== "string") {
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string2
          );
        }
        const len = string2.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0)
          return 0;
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
              return len;
            case "utf8":
            case "utf-8":
              return utf8ToBytes(string2).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return len * 2;
            case "hex":
              return len >>> 1;
            case "base64":
              return base64ToBytes(string2).length;
            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string2).length;
              }
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer2.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        let loweredCase = false;
        if (start === void 0 || start < 0) {
          start = 0;
        }
        if (start > this.length) {
          return "";
        }
        if (end === void 0 || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
          return "";
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
          return "";
        }
        if (!encoding)
          encoding = "utf8";
        while (true) {
          switch (encoding) {
            case "hex":
              return hexSlice(this, start, end);
            case "utf8":
            case "utf-8":
              return utf8Slice(this, start, end);
            case "ascii":
              return asciiSlice(this, start, end);
            case "latin1":
            case "binary":
              return latin1Slice(this, start, end);
            case "base64":
              return base64Slice(this, start, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return utf16leSlice(this, start, end);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = (encoding + "").toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer2.prototype._isBuffer = true;
      function swap(b, n, m) {
        const i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer2.prototype.swap16 = function swap16() {
        const len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (let i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };
      Buffer2.prototype.swap32 = function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (let i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer2.prototype.swap64 = function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (let i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer2.prototype.toString = function toString3() {
        const length3 = this.length;
        if (length3 === 0)
          return "";
        if (arguments.length === 0)
          return utf8Slice(this, 0, length3);
        return slowToString.apply(this, arguments);
      };
      Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
      Buffer2.prototype.equals = function equals4(b) {
        if (!Buffer2.isBuffer(b))
          throw new TypeError("Argument must be a Buffer");
        if (this === b)
          return true;
        return Buffer2.compare(this, b) === 0;
      };
      Buffer2.prototype.inspect = function inspect() {
        let str = "";
        const max = exports.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max)
          str += " ... ";
        return "<Buffer " + str + ">";
      };
      if (customInspectSymbol) {
        Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
      }
      Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer2.from(target, target.offset, target.byteLength);
        }
        if (!Buffer2.isBuffer(target)) {
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
          );
        }
        if (start === void 0) {
          start = 0;
        }
        if (end === void 0) {
          end = target ? target.length : 0;
        }
        if (thisStart === void 0) {
          thisStart = 0;
        }
        if (thisEnd === void 0) {
          thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target)
          return 0;
        let x = thisEnd - thisStart;
        let y = end - start;
        const len = Math.min(x, y);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start, end);
        for (let i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (buffer.length === 0)
          return -1;
        if (typeof byteOffset === "string") {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 2147483647) {
          byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
          byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer.length - 1;
        }
        if (byteOffset < 0)
          byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir)
            return -1;
          else
            byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir)
            byteOffset = 0;
          else
            return -1;
        }
        if (typeof val === "string") {
          val = Buffer2.from(val, encoding);
        }
        if (Buffer2.isBuffer(val)) {
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
          val = val & 255;
          if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== void 0) {
          encoding = String(encoding).toLowerCase();
          if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read3(buf, i2) {
          if (indexSize === 1) {
            return buf[i2];
          } else {
            return buf.readUInt16BE(i2 * indexSize);
          }
        }
        let i;
        if (dir) {
          let foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read3(arr, i) === read3(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1)
                foundIndex = i;
              if (i - foundIndex + 1 === valLength)
                return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1)
                i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength)
            byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            let found = true;
            for (let j = 0; j < valLength; j++) {
              if (read3(arr, i + j) !== read3(val, j)) {
                found = false;
                break;
              }
            }
            if (found)
              return i;
          }
        }
        return -1;
      }
      Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };
      Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string2, offset, length3) {
        offset = Number(offset) || 0;
        const remaining = buf.length - offset;
        if (!length3) {
          length3 = remaining;
        } else {
          length3 = Number(length3);
          if (length3 > remaining) {
            length3 = remaining;
          }
        }
        const strLen = string2.length;
        if (length3 > strLen / 2) {
          length3 = strLen / 2;
        }
        let i;
        for (i = 0; i < length3; ++i) {
          const parsed = parseInt(string2.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed))
            return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string2, offset, length3) {
        return blitBuffer(utf8ToBytes(string2, buf.length - offset), buf, offset, length3);
      }
      function asciiWrite(buf, string2, offset, length3) {
        return blitBuffer(asciiToBytes(string2), buf, offset, length3);
      }
      function base64Write(buf, string2, offset, length3) {
        return blitBuffer(base64ToBytes(string2), buf, offset, length3);
      }
      function ucs2Write(buf, string2, offset, length3) {
        return blitBuffer(utf16leToBytes(string2, buf.length - offset), buf, offset, length3);
      }
      Buffer2.prototype.write = function write(string2, offset, length3, encoding) {
        if (offset === void 0) {
          encoding = "utf8";
          length3 = this.length;
          offset = 0;
        } else if (length3 === void 0 && typeof offset === "string") {
          encoding = offset;
          length3 = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length3)) {
            length3 = length3 >>> 0;
            if (encoding === void 0)
              encoding = "utf8";
          } else {
            encoding = length3;
            length3 = void 0;
          }
        } else {
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        }
        const remaining = this.length - offset;
        if (length3 === void 0 || length3 > remaining)
          length3 = remaining;
        if (string2.length > 0 && (length3 < 0 || offset < 0) || offset > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding)
          encoding = "utf8";
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "hex":
              return hexWrite(this, string2, offset, length3);
            case "utf8":
            case "utf-8":
              return utf8Write(this, string2, offset, length3);
            case "ascii":
            case "latin1":
            case "binary":
              return asciiWrite(this, string2, offset, length3);
            case "base64":
              return base64Write(this, string2, offset, length3);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ucs2Write(this, string2, offset, length3);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };
      Buffer2.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base643.fromByteArray(buf);
        } else {
          return base643.fromByteArray(buf.slice(start, end));
        }
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        const res = [];
        let i = start;
        while (i < end) {
          const firstByte = buf[i];
          let codePoint = null;
          let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 128) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 192) === 128) {
                  tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                  if (tempCodePoint > 127) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                  if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                  if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        const len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
          );
        }
        return res;
      }
      function asciiSlice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 127);
        }
        return ret;
      }
      function latin1Slice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }
        return ret;
      }
      function hexSlice(buf, start, end) {
        const len = buf.length;
        if (!start || start < 0)
          start = 0;
        if (!end || end < 0 || end > len)
          end = len;
        let out = "";
        for (let i = start; i < end; ++i) {
          out += hexSliceLookupTable[buf[i]];
        }
        return out;
      }
      function utf16leSlice(buf, start, end) {
        const bytes = buf.slice(start, end);
        let res = "";
        for (let i = 0; i < bytes.length - 1; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }
      Buffer2.prototype.slice = function slice(start, end) {
        const len = this.length;
        start = ~~start;
        end = end === void 0 ? len : ~~end;
        if (start < 0) {
          start += len;
          if (start < 0)
            start = 0;
        } else if (start > len) {
          start = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0)
            end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start)
          end = start;
        const newBuf = this.subarray(start, end);
        Object.setPrototypeOf(newBuf, Buffer2.prototype);
        return newBuf;
      };
      function checkOffset(offset, ext, length3) {
        if (offset % 1 !== 0 || offset < 0)
          throw new RangeError("offset is not uint");
        if (offset + ext > length3)
          throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        return val;
      };
      Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length);
        }
        let val = this[offset + --byteLength2];
        let mul = 1;
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul;
        }
        return val;
      };
      Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
      };
      Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
        const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
      });
      Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
      });
      Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let i = byteLength2;
        let mul = 1;
        let val = this[offset + --i];
        while (i > 0 && (mul *= 256)) {
          val += this[offset + --i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128))
          return this[offset];
        return (255 - this[offset] + 1) * -1;
      };
      Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
      });
      Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
      });
      Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer2.isBuffer(buf))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min)
          throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length)
          throw new RangeError("Index out of range");
      }
      Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let mul = 1;
        let i = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
      };
      Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
      }
      function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
      }
      Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 127, -128);
        if (value < 0)
          value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };
      Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0)
          value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length)
          throw new RangeError("Index out of range");
        if (offset < 0)
          throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer2.isBuffer(target))
          throw new TypeError("argument should be a Buffer");
        if (!start)
          start = 0;
        if (!end && end !== 0)
          end = this.length;
        if (targetStart >= target.length)
          targetStart = target.length;
        if (!targetStart)
          targetStart = 0;
        if (end > 0 && end < start)
          end = start;
        if (end === start)
          return 0;
        if (target.length === 0 || this.length === 0)
          return 0;
        if (targetStart < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (start < 0 || start >= this.length)
          throw new RangeError("Index out of range");
        if (end < 0)
          throw new RangeError("sourceEnd out of bounds");
        if (end > this.length)
          end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }
        const len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
          this.copyWithin(targetStart, start, end);
        } else {
          Uint8Array.prototype.set.call(
            target,
            this.subarray(start, end),
            targetStart
          );
        }
        return len;
      };
      Buffer2.prototype.fill = function fill(val, start, end, encoding) {
        if (typeof val === "string") {
          if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
          }
          if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
          }
          if (val.length === 1) {
            const code2 = val.charCodeAt(0);
            if (encoding === "utf8" && code2 < 128 || encoding === "latin1") {
              val = code2;
            }
          }
        } else if (typeof val === "number") {
          val = val & 255;
        } else if (typeof val === "boolean") {
          val = Number(val);
        }
        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError("Out of range index");
        }
        if (end <= start) {
          return this;
        }
        start = start >>> 0;
        end = end === void 0 ? this.length : end >>> 0;
        if (!val)
          val = 0;
        let i;
        if (typeof val === "number") {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
          const len = bytes.length;
          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }
        return this;
      };
      var errors = {};
      function E(sym, getMessage, Base) {
        errors[sym] = class NodeError extends Base {
          constructor() {
            super();
            Object.defineProperty(this, "message", {
              value: getMessage.apply(this, arguments),
              writable: true,
              configurable: true
            });
            this.name = `${this.name} [${sym}]`;
            this.stack;
            delete this.name;
          }
          get code() {
            return sym;
          }
          set code(value) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${sym}]: ${this.message}`;
          }
        };
      }
      E(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function(name2) {
          if (name2) {
            return `${name2} is outside of buffer bounds`;
          }
          return "Attempt to access memory outside buffer bounds";
        },
        RangeError
      );
      E(
        "ERR_INVALID_ARG_TYPE",
        function(name2, actual) {
          return `The "${name2}" argument must be of type number. Received type ${typeof actual}`;
        },
        TypeError
      );
      E(
        "ERR_OUT_OF_RANGE",
        function(str, range, input) {
          let msg = `The value of "${str}" is out of range.`;
          let received = input;
          if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input));
          } else if (typeof input === "bigint") {
            received = String(input);
            if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
              received = addNumericalSeparator(received);
            }
            received += "n";
          }
          msg += ` It must be ${range}. Received ${received}`;
          return msg;
        },
        RangeError
      );
      function addNumericalSeparator(val) {
        let res = "";
        let i = val.length;
        const start = val[0] === "-" ? 1 : 0;
        for (; i >= start + 4; i -= 3) {
          res = `_${val.slice(i - 3, i)}${res}`;
        }
        return `${val.slice(0, i)}${res}`;
      }
      function checkBounds(buf, offset, byteLength2) {
        validateNumber(offset, "offset");
        if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
          boundsError(offset, buf.length - (byteLength2 + 1));
        }
      }
      function checkIntBI(value, min, max, buf, offset, byteLength2) {
        if (value > max || value < min) {
          const n = typeof min === "bigint" ? "n" : "";
          let range;
          if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
              range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
            } else {
              range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
            }
          } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
          }
          throw new errors.ERR_OUT_OF_RANGE("value", range, value);
        }
        checkBounds(buf, offset, byteLength2);
      }
      function validateNumber(value, name2) {
        if (typeof value !== "number") {
          throw new errors.ERR_INVALID_ARG_TYPE(name2, "number", value);
        }
      }
      function boundsError(value, length3, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
        }
        if (length3 < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(
          type || "offset",
          `>= ${type ? 1 : 0} and <= ${length3}`,
          value
        );
      }
      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2)
          return "";
        while (str.length % 4 !== 0) {
          str = str + "=";
        }
        return str;
      }
      function utf8ToBytes(string2, units) {
        units = units || Infinity;
        let codePoint;
        const length3 = string2.length;
        let leadSurrogate = null;
        const bytes = [];
        for (let i = 0; i < length3; ++i) {
          codePoint = string2.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                if ((units -= 3) > -1)
                  bytes.push(239, 191, 189);
                continue;
              } else if (i + 1 === length3) {
                if ((units -= 3) > -1)
                  bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
          }
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0)
              break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0)
              break;
            bytes.push(
              codePoint >> 6 | 192,
              codePoint & 63 | 128
            );
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0)
              break;
            bytes.push(
              codePoint >> 12 | 224,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else if (codePoint < 1114112) {
            if ((units -= 4) < 0)
              break;
            bytes.push(
              codePoint >> 18 | 240,
              codePoint >> 12 & 63 | 128,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else {
            throw new Error("Invalid code point");
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          byteArray.push(str.charCodeAt(i) & 255);
        }
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        let c, hi, lo;
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0)
            break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base643.toByteArray(base64clean(str));
      }
      function blitBuffer(src2, dst, offset, length3) {
        let i;
        for (i = 0; i < length3; ++i) {
          if (i + offset >= dst.length || i >= src2.length)
            break;
          dst[i + offset] = src2[i];
        }
        return i;
      }
      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }
      function numberIsNaN(obj) {
        return obj !== obj;
      }
      var hexSliceLookupTable = function() {
        const alphabet = "0123456789abcdef";
        const table = new Array(256);
        for (let i = 0; i < 16; ++i) {
          const i16 = i * 16;
          for (let j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet[i] + alphabet[j];
          }
        }
        return table;
      }();
      function defineBigIntMethod(fn) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
      }
      function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
      }
    }
  });

  // node_modules/@decentralized-identity/ion-pow-sdk/src/index.js
  var require_src4 = __commonJS({
    "node_modules/@decentralized-identity/ion-pow-sdk/src/index.js"(exports, module) {
      var fetch2 = require_browser_ponyfill();
      var hash = require_index_umd();
      var buffer = require_buffer().Buffer;
      module.exports = class IonProofOfWork {
        static randomHexString() {
          const size = Math.floor(Math.random() * Math.floor(500));
          const randomString = [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
          return buffer.from(randomString).toString("hex");
        }
        static async submitIonRequestUntilSuccess(getChallengeUri, solveChallengeUri, requestBody) {
          let result;
          while (result === void 0) {
            result = await this.submitIonRequest(getChallengeUri, solveChallengeUri, requestBody);
          }
          ;
        }
        static async submitIonRequest(getChallengeUri, solveChallengeUri, requestBody) {
          console.log(`Getting challenge from: ${getChallengeUri}`);
          const getChallengeResponse = await fetch2(getChallengeUri, {
            mode: "cors"
          });
          if (!getChallengeResponse.ok) {
            throw new Error("Get challenge service not available");
          }
          const challengeBody = await getChallengeResponse.json();
          console.log(challengeBody);
          const challengeNonce = challengeBody.challengeNonce;
          const largestAllowedHash = challengeBody.largestAllowedHash;
          const validDuration = challengeBody.validDurationInMinutes * 60 * 1e3;
          let answerHash = "";
          let answerNonce = "";
          console.log(`Solving for body:
${requestBody}`);
          const startTime = Date.now();
          do {
            answerNonce = this.randomHexString();
            answerHash = await hash.argon2id({
              password: buffer.from(answerNonce, "hex").toString() + requestBody,
              salt: buffer.from(challengeNonce, "hex"),
              parallelism: 1,
              iterations: 1,
              memorySize: 1e3,
              hashLength: 32,
              outputType: "hex"
            });
            console.log(answerHash);
            console.log(largestAllowedHash);
          } while (answerHash > largestAllowedHash && Date.now() - startTime < validDuration);
          if (Date.now() - startTime > validDuration) {
            return;
          }
          console.log("3");
          const response = await fetch2(solveChallengeUri, {
            method: "POST",
            mode: "cors",
            body: requestBody,
            headers: {
              "Challenge-Nonce": challengeNonce,
              "Answer-Nonce": answerNonce,
              "Content-Type": "application/json"
            }
          });
          if (response.status >= 500) {
            console.log(`Unexpected 5xx response: ${await response.text()}`);
          } else if (response.status >= 400) {
            console.log(`Bed request: ${await response.text()}`);
            console.log("Retrying with new challenge and difficulty");
          } else if (response.status >= 300) {
            console.log(`Unexpected 3xx response: ${await response.text()}`);
          } else {
            console.log(`Successful registration`);
            const responseText = await response.text();
            console.log(responseText);
            return responseText;
          }
          ;
        }
      };
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

  // src/did.js
  var import_ion_sdk2 = __toESM(require_lib3(), 1);

  // src/utils.js
  var import_cross_fetch = __toESM(require_browser_ponyfill(), 1);
  var import_ion_pow_sdk = __toESM(require_src4(), 1);

  // node_modules/@noble/ed25519/lib/esm/index.js
  var import_crypto = __toESM(require_crypto(), 1);
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
      let base3 = p;
      for (let window2 = 0; window2 < windows; window2++) {
        base3 = p;
        points.push(base3);
        for (let i = 1; i < 2 ** (W - 1); i++) {
          base3 = base3.add(p);
          points.push(base3);
        }
        p = base3.double();
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
      for (let window2 = 0; window2 < windows; window2++) {
        const offset = window2 * windowSize;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n;
        }
        if (wbits === 0) {
          let pr = precomputes[offset];
          if (window2 % 2)
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
    const length3 = 32;
    const hex = num.toString(16).padStart(length3 * 2, "0");
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
  var crypto2 = {
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
      if (crypto2.web) {
        return crypto2.web.getRandomValues(new Uint8Array(bytesLength));
      } else if (crypto2.node) {
        const { randomBytes } = crypto2.node;
        return new Uint8Array(randomBytes(bytesLength).buffer);
      } else {
        throw new Error("The environment doesn't have randomBytes function");
      }
    },
    randomPrivateKey: () => {
      return utils.randomBytes(32);
    },
    sha512: async (message) => {
      if (crypto2.web) {
        const buffer = await crypto2.web.subtle.digest("SHA-512", message.buffer);
        return new Uint8Array(buffer);
      } else if (crypto2.node) {
        return Uint8Array.from(crypto2.node.createHash("sha512").update(message).digest());
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
  var import_crypto2 = __toESM(require_crypto(), 1);
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
      let base3 = p;
      for (let window2 = 0; window2 < windows; window2++) {
        base3 = p;
        points.push(base3);
        for (let i = 1; i < 2 ** (W - 1); i++) {
          base3 = base3.add(p);
          points.push(base3);
        }
        p = base3.double();
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
      for (let window2 = 0; window2 < windows; window2++) {
        const offset = window2 * windowSize;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n2;
        }
        if (wbits === 0) {
          let pr = precomputes[offset];
          if (window2 % 2)
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
      const name2 = "Signature.fromCompact";
      if (typeof hex !== "string" && !arr)
        throw new TypeError(`${name2}: Expected string or Uint8Array`);
      const str = arr ? bytesToHex2(hex) : hex;
      if (str.length !== 128)
        throw new Error(`${name2}: Expected 64-byte hex`);
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
      const length3 = numberToHexUnpadded(rHex.length / 2 + sHex.length / 2 + 4);
      return `30${length3}02${rLen}${rHex}02${sLen}${sHex}`;
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
  var crypto3 = {
    node: import_crypto2.default,
    web: typeof self === "object" && "crypto" in self ? self.crypto : void 0
  };

  // src/utils.js
  init_base642();
  var import_ion_sdk = __toESM(require_lib3(), 1);
  init_sha2_browser();
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
    const textEncoder2 = new TextEncoder();
    const headerStr = JSON.stringify(header);
    const headerBytes = textEncoder2.encode(headerStr);
    const headerBase64Url = base64url2.baseEncode(headerBytes);
    const payloadStr = JSON.stringify(payload);
    const payloadBytes = textEncoder2.encode(payloadStr);
    const payloadBase64Url = base64url2.baseEncode(payloadBytes);
    const message = `${headerBase64Url}.${payloadBase64Url}`;
    let messageBytes = textEncoder2.encode(message);
    if (privateJwk.crv === "secp256k1") {
      messageBytes = await sha256.encode(messageBytes);
    }
    const privateKeyBytes = base64url2.baseDecode(privateJwk.d);
    let signatureBytes;
    if (privateJwk.crv === "Ed25519") {
      signatureBytes = await (void 0)(messageBytes, privateKeyBytes);
    } else if (privateJwk.crv === "secp256k1") {
      const signature2 = await (void 0)(messageBytes, privateKeyBytes);
      signatureBytes = signature2.toCompactRawBytes();
    }
    const signature = base64url2.baseEncode(signatureBytes);
    return `${message}.${signature}`;
  }
  async function verify2(params = {}) {
    const { jws, publicJwk } = params;
    const [headerBase64Url, payloadBase64Url, signatureBase64Url] = jws.split(".");
    const message = `${headerBase64Url}.${payloadBase64Url}`;
    const messageBytes = new TextEncoder().encode(message);
    const signatureBytes = base64url2.baseDecode(signatureBase64Url);
    switch (publicJwk.crv) {
      case "secp256k1": {
        const xBytes = base64url2.baseDecode(publicJwk.x);
        const yBytes = base64url2.baseDecode(publicJwk.y);
        const publicKeyBytes = new Uint8Array(xBytes.length + yBytes.length + 1);
        publicKeyBytes.set([4], 0);
        publicKeyBytes.set(xBytes, 1);
        publicKeyBytes.set(yBytes, xBytes.length + 1);
        const hashedMessage = await sha256.encode(messageBytes);
        return verify(signatureBytes, hashedMessage, publicKeyBytes);
      }
      case "Ed25519": {
        const publicKeyBytes = base64url2.baseDecode(publicJwk.x);
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
          const create3 = await this.getOperation(0);
          return import_ion_sdk2.IonDid.createLongFormDid({
            recoveryKey: create3.recovery.publicJwk,
            updateKey: create3.update.publicJwk,
            document: create3.content
          });
        });
        this.#longForm = await this.#longFormPromise;
        this.#longFormPromise = void 0;
      }
      return !form || form === "long" ? this.#longForm : this.#longForm.split(":").slice(0, -1).join(":");
    }
  };
  return __toCommonJS(src_exports);
})();
/*! Bundled license information:

uri-js/dist/es5/uri.all.js:
  (** @license URI.js v4.4.0 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js *)

@noble/ed25519/lib/index.js:
  (*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)

@noble/secp256k1/lib/index.js:
  (*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)

hash-wasm/dist/index.umd.js:
  (*!
   * hash-wasm (https://www.npmjs.com/package/hash-wasm)
   * (c) Dani Biro
   * @license MIT
   *)
  (*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
  
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
  
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** *)

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

@noble/ed25519/lib/esm/index.js:
  (*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)

@noble/secp256k1/lib/esm/index.js:
  (*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=iife.js.map
