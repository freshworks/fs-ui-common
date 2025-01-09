import { readFile as Iy, statSync as Od, writeFileSync as Ry } from "fs";
import { execSync as _y } from "child_process";
var V = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function um(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
const Fy = {}, By = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fy
}, Symbol.toStringTag, { value: "Module" })), qy = /* @__PURE__ */ um(By);
var lm = {}, cm = {}, fm = {};
(function(e) {
  (function(t) {
    t.parser = function(b, m) {
      return new n(b, m);
    }, t.SAXParser = n, t.MAX_BUFFER_LENGTH = 64 * 1024;
    var r = [
      "comment",
      "sgmlDecl",
      "textNode",
      "tagName",
      "doctype",
      "procInstName",
      "procInstBody",
      "entity",
      "attribName",
      "attribValue",
      "cdata",
      "script"
    ];
    t.EVENTS = [
      "text",
      "processinginstruction",
      "sgmldeclaration",
      "doctype",
      "comment",
      "opentagstart",
      "attribute",
      "opentag",
      "closetag",
      "opencdata",
      "cdata",
      "closecdata",
      "error",
      "end",
      "ready",
      "script",
      "opennamespace",
      "closenamespace"
    ];
    function n(b, m) {
      if (!(this instanceof n))
        return new n(b, m);
      var M = this;
      i(M), M.q = M.c = "", M.bufferCheckPosition = t.MAX_BUFFER_LENGTH, M.opt = m || {}, M.opt.lowercase = M.opt.lowercase || M.opt.lowercasetags, M.looseCase = M.opt.lowercase ? "toLowerCase" : "toUpperCase", M.tags = [], M.closed = M.closedRoot = M.sawRoot = !1, M.tag = M.error = null, M.strict = !!b, M.noscript = !!(b || M.opt.noscript), M.state = y.BEGIN, M.strictEntities = M.opt.strictEntities, M.ENTITIES = M.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), M.attribList = [], M.opt.xmlns && (M.ns = Object.create(f)), M.trackPosition = M.opt.position !== !1, M.trackPosition && (M.position = M.line = M.column = 0), I(M, "onready");
    }
    Object.create || (Object.create = function(b) {
      function m() {
      }
      m.prototype = b;
      var M = new m();
      return M;
    }), Object.keys || (Object.keys = function(b) {
      var m = [];
      for (var M in b) b.hasOwnProperty(M) && m.push(M);
      return m;
    });
    function a(b) {
      for (var m = Math.max(t.MAX_BUFFER_LENGTH, 10), M = 0, $ = 0, Ae = r.length; $ < Ae; $++) {
        var Me = b[r[$]].length;
        if (Me > m)
          switch (r[$]) {
            case "textNode":
              w(b);
              break;
            case "cdata":
              k(b, "oncdata", b.cdata), b.cdata = "";
              break;
            case "script":
              k(b, "onscript", b.script), b.script = "";
              break;
            default:
              v(b, "Max buffer length exceeded: " + r[$]);
          }
        M = Math.max(M, Me);
      }
      var _e = t.MAX_BUFFER_LENGTH - M;
      b.bufferCheckPosition = _e + b.position;
    }
    function i(b) {
      for (var m = 0, M = r.length; m < M; m++)
        b[r[m]] = "";
    }
    function s(b) {
      w(b), b.cdata !== "" && (k(b, "oncdata", b.cdata), b.cdata = ""), b.script !== "" && (k(b, "onscript", b.script), b.script = "");
    }
    n.prototype = {
      end: function() {
        O(this);
      },
      write: fe,
      resume: function() {
        return this.error = null, this;
      },
      close: function() {
        return this.write(null);
      },
      flush: function() {
        s(this);
      }
    };
    var u = "[CDATA[", l = "DOCTYPE", o = "http://www.w3.org/XML/1998/namespace", c = "http://www.w3.org/2000/xmlns/", f = { xml: o, xmlns: c }, d = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, h = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, p = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, g = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function x(b) {
      return b === " " || b === `
` || b === "\r" || b === "	";
    }
    function C(b) {
      return b === '"' || b === "'";
    }
    function S(b) {
      return b === ">" || x(b);
    }
    function P(b, m) {
      return b.test(m);
    }
    function T(b, m) {
      return !P(b, m);
    }
    var y = 0;
    t.STATE = {
      BEGIN: y++,
      // leading byte order mark or whitespace
      BEGIN_WHITESPACE: y++,
      // leading whitespace
      TEXT: y++,
      // general stuff
      TEXT_ENTITY: y++,
      // &amp and such.
      OPEN_WAKA: y++,
      // <
      SGML_DECL: y++,
      // <!BLARG
      SGML_DECL_QUOTED: y++,
      // <!BLARG foo "bar
      DOCTYPE: y++,
      // <!DOCTYPE
      DOCTYPE_QUOTED: y++,
      // <!DOCTYPE "//blah
      DOCTYPE_DTD: y++,
      // <!DOCTYPE "//blah" [ ...
      DOCTYPE_DTD_QUOTED: y++,
      // <!DOCTYPE "//blah" [ "foo
      COMMENT_STARTING: y++,
      // <!-
      COMMENT: y++,
      // <!--
      COMMENT_ENDING: y++,
      // <!-- blah -
      COMMENT_ENDED: y++,
      // <!-- blah --
      CDATA: y++,
      // <![CDATA[ something
      CDATA_ENDING: y++,
      // ]
      CDATA_ENDING_2: y++,
      // ]]
      PROC_INST: y++,
      // <?hi
      PROC_INST_BODY: y++,
      // <?hi there
      PROC_INST_ENDING: y++,
      // <?hi "there" ?
      OPEN_TAG: y++,
      // <strong
      OPEN_TAG_SLASH: y++,
      // <strong /
      ATTRIB: y++,
      // <a
      ATTRIB_NAME: y++,
      // <a foo
      ATTRIB_NAME_SAW_WHITE: y++,
      // <a foo _
      ATTRIB_VALUE: y++,
      // <a foo=
      ATTRIB_VALUE_QUOTED: y++,
      // <a foo="bar
      ATTRIB_VALUE_CLOSED: y++,
      // <a foo="bar"
      ATTRIB_VALUE_UNQUOTED: y++,
      // <a foo=bar
      ATTRIB_VALUE_ENTITY_Q: y++,
      // <foo bar="&quot;"
      ATTRIB_VALUE_ENTITY_U: y++,
      // <foo bar=&quot
      CLOSE_TAG: y++,
      // </a
      CLOSE_TAG_SAW_WHITE: y++,
      // </a   >
      SCRIPT: y++,
      // <script> ...
      SCRIPT_ENDING: y++
      // <script> ... <
    }, t.XML_ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'"
    }, t.ENTITIES = {
      amp: "&",
      gt: ">",
      lt: "<",
      quot: '"',
      apos: "'",
      AElig: 198,
      Aacute: 193,
      Acirc: 194,
      Agrave: 192,
      Aring: 197,
      Atilde: 195,
      Auml: 196,
      Ccedil: 199,
      ETH: 208,
      Eacute: 201,
      Ecirc: 202,
      Egrave: 200,
      Euml: 203,
      Iacute: 205,
      Icirc: 206,
      Igrave: 204,
      Iuml: 207,
      Ntilde: 209,
      Oacute: 211,
      Ocirc: 212,
      Ograve: 210,
      Oslash: 216,
      Otilde: 213,
      Ouml: 214,
      THORN: 222,
      Uacute: 218,
      Ucirc: 219,
      Ugrave: 217,
      Uuml: 220,
      Yacute: 221,
      aacute: 225,
      acirc: 226,
      aelig: 230,
      agrave: 224,
      aring: 229,
      atilde: 227,
      auml: 228,
      ccedil: 231,
      eacute: 233,
      ecirc: 234,
      egrave: 232,
      eth: 240,
      euml: 235,
      iacute: 237,
      icirc: 238,
      igrave: 236,
      iuml: 239,
      ntilde: 241,
      oacute: 243,
      ocirc: 244,
      ograve: 242,
      oslash: 248,
      otilde: 245,
      ouml: 246,
      szlig: 223,
      thorn: 254,
      uacute: 250,
      ucirc: 251,
      ugrave: 249,
      uuml: 252,
      yacute: 253,
      yuml: 255,
      copy: 169,
      reg: 174,
      nbsp: 160,
      iexcl: 161,
      cent: 162,
      pound: 163,
      curren: 164,
      yen: 165,
      brvbar: 166,
      sect: 167,
      uml: 168,
      ordf: 170,
      laquo: 171,
      not: 172,
      shy: 173,
      macr: 175,
      deg: 176,
      plusmn: 177,
      sup1: 185,
      sup2: 178,
      sup3: 179,
      acute: 180,
      micro: 181,
      para: 182,
      middot: 183,
      cedil: 184,
      ordm: 186,
      raquo: 187,
      frac14: 188,
      frac12: 189,
      frac34: 190,
      iquest: 191,
      times: 215,
      divide: 247,
      OElig: 338,
      oelig: 339,
      Scaron: 352,
      scaron: 353,
      Yuml: 376,
      fnof: 402,
      circ: 710,
      tilde: 732,
      Alpha: 913,
      Beta: 914,
      Gamma: 915,
      Delta: 916,
      Epsilon: 917,
      Zeta: 918,
      Eta: 919,
      Theta: 920,
      Iota: 921,
      Kappa: 922,
      Lambda: 923,
      Mu: 924,
      Nu: 925,
      Xi: 926,
      Omicron: 927,
      Pi: 928,
      Rho: 929,
      Sigma: 931,
      Tau: 932,
      Upsilon: 933,
      Phi: 934,
      Chi: 935,
      Psi: 936,
      Omega: 937,
      alpha: 945,
      beta: 946,
      gamma: 947,
      delta: 948,
      epsilon: 949,
      zeta: 950,
      eta: 951,
      theta: 952,
      iota: 953,
      kappa: 954,
      lambda: 955,
      mu: 956,
      nu: 957,
      xi: 958,
      omicron: 959,
      pi: 960,
      rho: 961,
      sigmaf: 962,
      sigma: 963,
      tau: 964,
      upsilon: 965,
      phi: 966,
      chi: 967,
      psi: 968,
      omega: 969,
      thetasym: 977,
      upsih: 978,
      piv: 982,
      ensp: 8194,
      emsp: 8195,
      thinsp: 8201,
      zwnj: 8204,
      zwj: 8205,
      lrm: 8206,
      rlm: 8207,
      ndash: 8211,
      mdash: 8212,
      lsquo: 8216,
      rsquo: 8217,
      sbquo: 8218,
      ldquo: 8220,
      rdquo: 8221,
      bdquo: 8222,
      dagger: 8224,
      Dagger: 8225,
      bull: 8226,
      hellip: 8230,
      permil: 8240,
      prime: 8242,
      Prime: 8243,
      lsaquo: 8249,
      rsaquo: 8250,
      oline: 8254,
      frasl: 8260,
      euro: 8364,
      image: 8465,
      weierp: 8472,
      real: 8476,
      trade: 8482,
      alefsym: 8501,
      larr: 8592,
      uarr: 8593,
      rarr: 8594,
      darr: 8595,
      harr: 8596,
      crarr: 8629,
      lArr: 8656,
      uArr: 8657,
      rArr: 8658,
      dArr: 8659,
      hArr: 8660,
      forall: 8704,
      part: 8706,
      exist: 8707,
      empty: 8709,
      nabla: 8711,
      isin: 8712,
      notin: 8713,
      ni: 8715,
      prod: 8719,
      sum: 8721,
      minus: 8722,
      lowast: 8727,
      radic: 8730,
      prop: 8733,
      infin: 8734,
      ang: 8736,
      and: 8743,
      or: 8744,
      cap: 8745,
      cup: 8746,
      int: 8747,
      there4: 8756,
      sim: 8764,
      cong: 8773,
      asymp: 8776,
      ne: 8800,
      equiv: 8801,
      le: 8804,
      ge: 8805,
      sub: 8834,
      sup: 8835,
      nsub: 8836,
      sube: 8838,
      supe: 8839,
      oplus: 8853,
      otimes: 8855,
      perp: 8869,
      sdot: 8901,
      lceil: 8968,
      rceil: 8969,
      lfloor: 8970,
      rfloor: 8971,
      lang: 9001,
      rang: 9002,
      loz: 9674,
      spades: 9824,
      clubs: 9827,
      hearts: 9829,
      diams: 9830
    }, Object.keys(t.ENTITIES).forEach(function(b) {
      var m = t.ENTITIES[b], M = typeof m == "number" ? String.fromCharCode(m) : m;
      t.ENTITIES[b] = M;
    });
    for (var D in t.STATE)
      t.STATE[t.STATE[D]] = D;
    y = t.STATE;
    function I(b, m, M) {
      b[m] && b[m](M);
    }
    function k(b, m, M) {
      b.textNode && w(b), I(b, m, M);
    }
    function w(b) {
      b.textNode = L(b.opt, b.textNode), b.textNode && I(b, "ontext", b.textNode), b.textNode = "";
    }
    function L(b, m) {
      return b.trim && (m = m.trim()), b.normalize && (m = m.replace(/\s+/g, " ")), m;
    }
    function v(b, m) {
      w(b);
      const M = m + `
Line: ` + b.line + `
Column: ` + b.column + `
Char: ` + b.c, $ = new Error(M);
      return $.reason = m, $.line = b.line, $.column = b.column, b.error = $, I(b, "onerror", $), b;
    }
    function O(b) {
      return b.sawRoot && !b.closedRoot && N(b, "Unclosed root tag"), b.state !== y.BEGIN && b.state !== y.BEGIN_WHITESPACE && b.state !== y.TEXT && v(b, "Unexpected end"), w(b), b.c = "", b.closed = !0, I(b, "onend"), n.call(b, b.strict, b.opt), b;
    }
    function N(b, m) {
      if (typeof b != "object" || !(b instanceof n))
        throw new Error("bad call to strictFail");
      b.strict && v(b, m);
    }
    function H(b) {
      b.strict || (b.tagName = b.tagName[b.looseCase]());
      var m = b.tags[b.tags.length - 1] || b, M = b.tag = { name: b.tagName, attributes: {} };
      b.opt.xmlns && (M.ns = m.ns), b.attribList.length = 0, k(b, "onopentagstart", M);
    }
    function q(b, m) {
      var M = b.indexOf(":"), $ = M < 0 ? ["", b] : b.split(":"), Ae = $[0], Me = $[1];
      return m && b === "xmlns" && (Ae = "xmlns", Me = ""), { prefix: Ae, local: Me };
    }
    function te(b) {
      if (b.strict || (b.attribName = b.attribName[b.looseCase]()), b.attribList.indexOf(b.attribName) !== -1 || b.tag.attributes.hasOwnProperty(b.attribName)) {
        b.attribName = b.attribValue = "";
        return;
      }
      if (b.opt.xmlns) {
        var m = q(b.attribName, !0), M = m.prefix, $ = m.local;
        if (M === "xmlns")
          if ($ === "xml" && b.attribValue !== o)
            N(
              b,
              "xml: prefix must be bound to " + o + `
Actual: ` + b.attribValue
            );
          else if ($ === "xmlns" && b.attribValue !== c)
            N(
              b,
              "xmlns: prefix must be bound to " + c + `
Actual: ` + b.attribValue
            );
          else {
            var Ae = b.tag, Me = b.tags[b.tags.length - 1] || b;
            Ae.ns === Me.ns && (Ae.ns = Object.create(Me.ns)), Ae.ns[$] = b.attribValue;
          }
        b.attribList.push([b.attribName, b.attribValue]);
      } else
        b.tag.attributes[b.attribName] = b.attribValue, k(b, "onattribute", {
          name: b.attribName,
          value: b.attribValue
        });
      b.attribName = b.attribValue = "";
    }
    function J(b, m) {
      if (b.opt.xmlns) {
        var M = b.tag, $ = q(b.tagName);
        M.prefix = $.prefix, M.local = $.local, M.uri = M.ns[$.prefix] || "", M.prefix && !M.uri && (N(b, "Unbound namespace prefix: " + JSON.stringify(b.tagName)), M.uri = $.prefix);
        var Ae = b.tags[b.tags.length - 1] || b;
        M.ns && Ae.ns !== M.ns && Object.keys(M.ns).forEach(function(Dd) {
          k(b, "onopennamespace", {
            prefix: Dd,
            uri: M.ns[Dd]
          });
        });
        for (var Me = 0, _e = b.attribList.length; Me < _e; Me++) {
          var Dt = b.attribList[Me], Ot = Dt[0], nl = Dt[1], si = q(Ot, !0), Wt = si.prefix, My = si.local, Nd = Wt === "" ? "" : M.ns[Wt] || "", al = {
            name: Ot,
            value: nl,
            prefix: Wt,
            local: My,
            uri: Nd
          };
          Wt && Wt !== "xmlns" && !Nd && (N(b, "Unbound namespace prefix: " + JSON.stringify(Wt)), al.uri = Wt), b.tag.attributes[Ot] = al, k(b, "onattribute", al);
        }
        b.attribList.length = 0;
      }
      b.tag.isSelfClosing = !!m, b.sawRoot = !0, b.tags.push(b.tag), k(b, "onopentag", b.tag), m || (!b.noscript && b.tagName.toLowerCase() === "script" ? b.state = y.SCRIPT : b.state = y.TEXT, b.tag = null, b.tagName = ""), b.attribName = b.attribValue = "", b.attribList.length = 0;
    }
    function ge(b) {
      if (!b.tagName) {
        N(b, "Weird empty close tag."), b.textNode += "</>", b.state = y.TEXT;
        return;
      }
      if (b.script) {
        if (b.tagName !== "script") {
          b.script += "</" + b.tagName + ">", b.tagName = "", b.state = y.SCRIPT;
          return;
        }
        k(b, "onscript", b.script), b.script = "";
      }
      var m = b.tags.length, M = b.tagName;
      b.strict || (M = M[b.looseCase]());
      for (var $ = M; m--; ) {
        var Ae = b.tags[m];
        if (Ae.name !== $)
          N(b, "Unexpected close tag");
        else
          break;
      }
      if (m < 0) {
        N(b, "Unmatched closing tag: " + b.tagName), b.textNode += "</" + b.tagName + ">", b.state = y.TEXT;
        return;
      }
      b.tagName = M;
      for (var Me = b.tags.length; Me-- > m; ) {
        var _e = b.tag = b.tags.pop();
        b.tagName = b.tag.name, k(b, "onclosetag", b.tagName);
        var Dt = {};
        for (var Ot in _e.ns)
          Dt[Ot] = _e.ns[Ot];
        var nl = b.tags[b.tags.length - 1] || b;
        b.opt.xmlns && _e.ns !== nl.ns && Object.keys(_e.ns).forEach(function(si) {
          var Wt = _e.ns[si];
          k(b, "onclosenamespace", { prefix: si, uri: Wt });
        });
      }
      m === 0 && (b.closedRoot = !0), b.tagName = b.attribValue = b.attribName = "", b.attribList.length = 0, b.state = y.TEXT;
    }
    function Le(b) {
      var m = b.entity, M = m.toLowerCase(), $, Ae = "";
      return b.ENTITIES[m] ? b.ENTITIES[m] : b.ENTITIES[M] ? b.ENTITIES[M] : (m = M, m.charAt(0) === "#" && (m.charAt(1) === "x" ? (m = m.slice(2), $ = parseInt(m, 16), Ae = $.toString(16)) : (m = m.slice(1), $ = parseInt(m, 10), Ae = $.toString(10))), m = m.replace(/^0+/, ""), isNaN($) || Ae.toLowerCase() !== m ? (N(b, "Invalid character entity"), "&" + b.entity + ";") : String.fromCodePoint($));
    }
    function Ne(b, m) {
      m === "<" ? (b.state = y.OPEN_WAKA, b.startTagPosition = b.position) : x(m) || (N(b, "Non-whitespace before first tag."), b.textNode = m, b.state = y.TEXT);
    }
    function ce(b, m) {
      var M = "";
      return m < b.length && (M = b.charAt(m)), M;
    }
    function fe(b) {
      var m = this;
      if (this.error)
        throw this.error;
      if (m.closed)
        return v(
          m,
          "Cannot write after close. Assign an onready handler."
        );
      if (b === null)
        return O(m);
      typeof b == "object" && (b = b.toString());
      for (var M = 0, $ = ""; $ = ce(b, M++), m.c = $, !!$; )
        switch (m.trackPosition && (m.position++, $ === `
` ? (m.line++, m.column = 0) : m.column++), m.state) {
          case y.BEGIN:
            if (m.state = y.BEGIN_WHITESPACE, $ === "\uFEFF")
              continue;
            Ne(m, $);
            continue;
          case y.BEGIN_WHITESPACE:
            Ne(m, $);
            continue;
          case y.TEXT:
            if (m.sawRoot && !m.closedRoot) {
              for (var Ae = M - 1; $ && $ !== "<" && $ !== "&"; )
                $ = ce(b, M++), $ && m.trackPosition && (m.position++, $ === `
` ? (m.line++, m.column = 0) : m.column++);
              m.textNode += b.substring(Ae, M - 1);
            }
            $ === "<" && !(m.sawRoot && m.closedRoot && !m.strict) ? (m.state = y.OPEN_WAKA, m.startTagPosition = m.position) : (!x($) && (!m.sawRoot || m.closedRoot) && N(m, "Text data outside of root node."), $ === "&" ? m.state = y.TEXT_ENTITY : m.textNode += $);
            continue;
          case y.SCRIPT:
            $ === "<" ? m.state = y.SCRIPT_ENDING : m.script += $;
            continue;
          case y.SCRIPT_ENDING:
            $ === "/" ? m.state = y.CLOSE_TAG : (m.script += "<" + $, m.state = y.SCRIPT);
            continue;
          case y.OPEN_WAKA:
            if ($ === "!")
              m.state = y.SGML_DECL, m.sgmlDecl = "";
            else if (!x($)) if (P(d, $))
              m.state = y.OPEN_TAG, m.tagName = $;
            else if ($ === "/")
              m.state = y.CLOSE_TAG, m.tagName = "";
            else if ($ === "?")
              m.state = y.PROC_INST, m.procInstName = m.procInstBody = "";
            else {
              if (N(m, "Unencoded <"), m.startTagPosition + 1 < m.position) {
                var Me = m.position - m.startTagPosition;
                $ = new Array(Me).join(" ") + $;
              }
              m.textNode += "<" + $, m.state = y.TEXT;
            }
            continue;
          case y.SGML_DECL:
            (m.sgmlDecl + $).toUpperCase() === u ? (k(m, "onopencdata"), m.state = y.CDATA, m.sgmlDecl = "", m.cdata = "") : m.sgmlDecl + $ === "--" ? (m.state = y.COMMENT, m.comment = "", m.sgmlDecl = "") : (m.sgmlDecl + $).toUpperCase() === l ? (m.state = y.DOCTYPE, (m.doctype || m.sawRoot) && N(
              m,
              "Inappropriately located doctype declaration"
            ), m.doctype = "", m.sgmlDecl = "") : $ === ">" ? (k(m, "onsgmldeclaration", m.sgmlDecl), m.sgmlDecl = "", m.state = y.TEXT) : (C($) && (m.state = y.SGML_DECL_QUOTED), m.sgmlDecl += $);
            continue;
          case y.SGML_DECL_QUOTED:
            $ === m.q && (m.state = y.SGML_DECL, m.q = ""), m.sgmlDecl += $;
            continue;
          case y.DOCTYPE:
            $ === ">" ? (m.state = y.TEXT, k(m, "ondoctype", m.doctype), m.doctype = !0) : (m.doctype += $, $ === "[" ? m.state = y.DOCTYPE_DTD : C($) && (m.state = y.DOCTYPE_QUOTED, m.q = $));
            continue;
          case y.DOCTYPE_QUOTED:
            m.doctype += $, $ === m.q && (m.q = "", m.state = y.DOCTYPE);
            continue;
          case y.DOCTYPE_DTD:
            m.doctype += $, $ === "]" ? m.state = y.DOCTYPE : C($) && (m.state = y.DOCTYPE_DTD_QUOTED, m.q = $);
            continue;
          case y.DOCTYPE_DTD_QUOTED:
            m.doctype += $, $ === m.q && (m.state = y.DOCTYPE_DTD, m.q = "");
            continue;
          case y.COMMENT:
            $ === "-" ? m.state = y.COMMENT_ENDING : m.comment += $;
            continue;
          case y.COMMENT_ENDING:
            $ === "-" ? (m.state = y.COMMENT_ENDED, m.comment = L(m.opt, m.comment), m.comment && k(m, "oncomment", m.comment), m.comment = "") : (m.comment += "-" + $, m.state = y.COMMENT);
            continue;
          case y.COMMENT_ENDED:
            $ !== ">" ? (N(m, "Malformed comment"), m.comment += "--" + $, m.state = y.COMMENT) : m.state = y.TEXT;
            continue;
          case y.CDATA:
            $ === "]" ? m.state = y.CDATA_ENDING : m.cdata += $;
            continue;
          case y.CDATA_ENDING:
            $ === "]" ? m.state = y.CDATA_ENDING_2 : (m.cdata += "]" + $, m.state = y.CDATA);
            continue;
          case y.CDATA_ENDING_2:
            $ === ">" ? (m.cdata && k(m, "oncdata", m.cdata), k(m, "onclosecdata"), m.cdata = "", m.state = y.TEXT) : $ === "]" ? m.cdata += "]" : (m.cdata += "]]" + $, m.state = y.CDATA);
            continue;
          case y.PROC_INST:
            $ === "?" ? m.state = y.PROC_INST_ENDING : x($) ? m.state = y.PROC_INST_BODY : m.procInstName += $;
            continue;
          case y.PROC_INST_BODY:
            if (!m.procInstBody && x($))
              continue;
            $ === "?" ? m.state = y.PROC_INST_ENDING : m.procInstBody += $;
            continue;
          case y.PROC_INST_ENDING:
            $ === ">" ? (k(m, "onprocessinginstruction", {
              name: m.procInstName,
              body: m.procInstBody
            }), m.procInstName = m.procInstBody = "", m.state = y.TEXT) : (m.procInstBody += "?" + $, m.state = y.PROC_INST_BODY);
            continue;
          case y.OPEN_TAG:
            P(h, $) ? m.tagName += $ : (H(m), $ === ">" ? J(m) : $ === "/" ? m.state = y.OPEN_TAG_SLASH : (x($) || N(m, "Invalid character in tag name"), m.state = y.ATTRIB));
            continue;
          case y.OPEN_TAG_SLASH:
            $ === ">" ? (J(m, !0), ge(m)) : (N(m, "Forward-slash in opening tag not followed by >"), m.state = y.ATTRIB);
            continue;
          case y.ATTRIB:
            if (x($))
              continue;
            $ === ">" ? J(m) : $ === "/" ? m.state = y.OPEN_TAG_SLASH : P(d, $) ? (m.attribName = $, m.attribValue = "", m.state = y.ATTRIB_NAME) : N(m, "Invalid attribute name");
            continue;
          case y.ATTRIB_NAME:
            $ === "=" ? m.state = y.ATTRIB_VALUE : $ === ">" ? (N(m, "Attribute without value"), m.attribValue = m.attribName, te(m), J(m)) : x($) ? m.state = y.ATTRIB_NAME_SAW_WHITE : P(h, $) ? m.attribName += $ : N(m, "Invalid attribute name");
            continue;
          case y.ATTRIB_NAME_SAW_WHITE:
            if ($ === "=")
              m.state = y.ATTRIB_VALUE;
            else {
              if (x($))
                continue;
              N(m, "Attribute without value"), m.tag.attributes[m.attribName] = "", m.attribValue = "", k(m, "onattribute", {
                name: m.attribName,
                value: ""
              }), m.attribName = "", $ === ">" ? J(m) : P(d, $) ? (m.attribName = $, m.state = y.ATTRIB_NAME) : (N(m, "Invalid attribute name"), m.state = y.ATTRIB);
            }
            continue;
          case y.ATTRIB_VALUE:
            if (x($))
              continue;
            C($) ? (m.q = $, m.state = y.ATTRIB_VALUE_QUOTED) : (N(m, "Unquoted attribute value"), m.state = y.ATTRIB_VALUE_UNQUOTED, m.attribValue = $);
            continue;
          case y.ATTRIB_VALUE_QUOTED:
            if ($ !== m.q) {
              $ === "&" ? m.state = y.ATTRIB_VALUE_ENTITY_Q : m.attribValue += $;
              continue;
            }
            te(m), m.q = "", m.state = y.ATTRIB_VALUE_CLOSED;
            continue;
          case y.ATTRIB_VALUE_CLOSED:
            x($) ? m.state = y.ATTRIB : $ === ">" ? J(m) : $ === "/" ? m.state = y.OPEN_TAG_SLASH : P(d, $) ? (N(m, "No whitespace between attributes"), m.attribName = $, m.attribValue = "", m.state = y.ATTRIB_NAME) : N(m, "Invalid attribute name");
            continue;
          case y.ATTRIB_VALUE_UNQUOTED:
            if (!S($)) {
              $ === "&" ? m.state = y.ATTRIB_VALUE_ENTITY_U : m.attribValue += $;
              continue;
            }
            te(m), $ === ">" ? J(m) : m.state = y.ATTRIB;
            continue;
          case y.CLOSE_TAG:
            if (m.tagName)
              $ === ">" ? ge(m) : P(h, $) ? m.tagName += $ : m.script ? (m.script += "</" + m.tagName, m.tagName = "", m.state = y.SCRIPT) : (x($) || N(m, "Invalid tagname in closing tag"), m.state = y.CLOSE_TAG_SAW_WHITE);
            else {
              if (x($))
                continue;
              T(d, $) ? m.script ? (m.script += "</" + $, m.state = y.SCRIPT) : N(m, "Invalid tagname in closing tag.") : m.tagName = $;
            }
            continue;
          case y.CLOSE_TAG_SAW_WHITE:
            if (x($))
              continue;
            $ === ">" ? ge(m) : N(m, "Invalid characters in closing tag");
            continue;
          case y.TEXT_ENTITY:
          case y.ATTRIB_VALUE_ENTITY_Q:
          case y.ATTRIB_VALUE_ENTITY_U:
            var _e, Dt;
            switch (m.state) {
              case y.TEXT_ENTITY:
                _e = y.TEXT, Dt = "textNode";
                break;
              case y.ATTRIB_VALUE_ENTITY_Q:
                _e = y.ATTRIB_VALUE_QUOTED, Dt = "attribValue";
                break;
              case y.ATTRIB_VALUE_ENTITY_U:
                _e = y.ATTRIB_VALUE_UNQUOTED, Dt = "attribValue";
                break;
            }
            if ($ === ";") {
              var Ot = Le(m);
              m.state === y.TEXT_ENTITY && !t.ENTITIES[m.entity] && Ot !== "&" + m.entity + ";" ? b = b.slice(0, M) + Ot + b.slice(M) : m[Dt] += Ot, m.entity = "", m.state = _e;
            } else P(m.entity.length ? g : p, $) ? m.entity += $ : (N(m, "Invalid character in entity name"), m[Dt] += "&" + m.entity + $, m.entity = "", m.state = _e);
            continue;
          default:
            throw new Error(m, "Unknown state: " + m.state);
        }
      return m.position >= m.bufferCheckPosition && a(m), m;
    }
  })(e);
})(fm);
var be = {};
(function(e) {
  e.elemsGroups = {
    animation: /* @__PURE__ */ new Set([
      "animate",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "set"
    ]),
    descriptive: /* @__PURE__ */ new Set(["desc", "metadata", "title"]),
    shape: /* @__PURE__ */ new Set([
      "circle",
      "ellipse",
      "line",
      "path",
      "polygon",
      "polyline",
      "rect"
    ]),
    structural: /* @__PURE__ */ new Set(["defs", "g", "svg", "symbol", "use"]),
    paintServer: /* @__PURE__ */ new Set([
      "hatch",
      "linearGradient",
      "meshGradient",
      "pattern",
      "radialGradient",
      "solidColor"
    ]),
    nonRendering: /* @__PURE__ */ new Set([
      "clipPath",
      "filter",
      "linearGradient",
      "marker",
      "mask",
      "pattern",
      "radialGradient",
      "solidColor",
      "symbol"
    ]),
    container: /* @__PURE__ */ new Set([
      "a",
      "defs",
      "foreignObject",
      "g",
      "marker",
      "mask",
      "missing-glyph",
      "pattern",
      "svg",
      "switch",
      "symbol"
    ]),
    textContent: /* @__PURE__ */ new Set([
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "glyph",
      "glyphRef",
      "text",
      "textPath",
      "tref",
      "tspan"
    ]),
    textContentChild: /* @__PURE__ */ new Set(["altGlyph", "textPath", "tref", "tspan"]),
    lightSource: /* @__PURE__ */ new Set([
      "feDiffuseLighting",
      "feDistantLight",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight"
    ]),
    filterPrimitive: /* @__PURE__ */ new Set([
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "feSpecularLighting",
      "feTile",
      "feTurbulence"
    ])
  }, e.textElems = /* @__PURE__ */ new Set([
    ...e.elemsGroups.textContent,
    "pre",
    "title"
  ]), e.pathElems = /* @__PURE__ */ new Set(["glyph", "missing-glyph", "path"]), e.attrsGroups = {
    animationAddition: /* @__PURE__ */ new Set(["additive", "accumulate"]),
    animationAttributeTarget: /* @__PURE__ */ new Set(["attributeType", "attributeName"]),
    animationEvent: /* @__PURE__ */ new Set(["onbegin", "onend", "onrepeat", "onload"]),
    animationTiming: /* @__PURE__ */ new Set([
      "begin",
      "dur",
      "end",
      "fill",
      "max",
      "min",
      "repeatCount",
      "repeatDur",
      "restart"
    ]),
    animationValue: /* @__PURE__ */ new Set([
      "by",
      "calcMode",
      "from",
      "keySplines",
      "keyTimes",
      "to",
      "values"
    ]),
    conditionalProcessing: /* @__PURE__ */ new Set([
      "requiredExtensions",
      "requiredFeatures",
      "systemLanguage"
    ]),
    core: /* @__PURE__ */ new Set(["id", "tabindex", "xml:base", "xml:lang", "xml:space"]),
    graphicalEvent: /* @__PURE__ */ new Set([
      "onactivate",
      "onclick",
      "onfocusin",
      "onfocusout",
      "onload",
      "onmousedown",
      "onmousemove",
      "onmouseout",
      "onmouseover",
      "onmouseup"
    ]),
    presentation: /* @__PURE__ */ new Set([
      "alignment-baseline",
      "baseline-shift",
      "clip-path",
      "clip-rule",
      "clip",
      "color-interpolation-filters",
      "color-interpolation",
      "color-profile",
      "color-rendering",
      "color",
      "cursor",
      "direction",
      "display",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "fill",
      "filter",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size-adjust",
      "font-size",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "mask",
      "opacity",
      "overflow",
      "paint-order",
      "pointer-events",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "stroke",
      "text-anchor",
      "text-decoration",
      "text-overflow",
      "text-rendering",
      "transform-origin",
      "transform",
      "unicode-bidi",
      "vector-effect",
      "visibility",
      "word-spacing",
      "writing-mode"
    ]),
    xlink: /* @__PURE__ */ new Set([
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:href",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
    ]),
    documentEvent: /* @__PURE__ */ new Set([
      "onabort",
      "onerror",
      "onresize",
      "onscroll",
      "onunload",
      "onzoom"
    ]),
    documentElementEvent: /* @__PURE__ */ new Set(["oncopy", "oncut", "onpaste"]),
    globalEvent: /* @__PURE__ */ new Set([
      "oncancel",
      "oncanplay",
      "oncanplaythrough",
      "onchange",
      "onclick",
      "onclose",
      "oncuechange",
      "ondblclick",
      "ondrag",
      "ondragend",
      "ondragenter",
      "ondragleave",
      "ondragover",
      "ondragstart",
      "ondrop",
      "ondurationchange",
      "onemptied",
      "onended",
      "onerror",
      "onfocus",
      "oninput",
      "oninvalid",
      "onkeydown",
      "onkeypress",
      "onkeyup",
      "onload",
      "onloadeddata",
      "onloadedmetadata",
      "onloadstart",
      "onmousedown",
      "onmouseenter",
      "onmouseleave",
      "onmousemove",
      "onmouseout",
      "onmouseover",
      "onmouseup",
      "onmousewheel",
      "onpause",
      "onplay",
      "onplaying",
      "onprogress",
      "onratechange",
      "onreset",
      "onresize",
      "onscroll",
      "onseeked",
      "onseeking",
      "onselect",
      "onshow",
      "onstalled",
      "onsubmit",
      "onsuspend",
      "ontimeupdate",
      "ontoggle",
      "onvolumechange",
      "onwaiting"
    ]),
    filterPrimitive: /* @__PURE__ */ new Set(["x", "y", "width", "height", "result"]),
    transferFunction: /* @__PURE__ */ new Set([
      "amplitude",
      "exponent",
      "intercept",
      "offset",
      "slope",
      "tableValues",
      "type"
    ])
  }, e.attrsGroupsDefaults = {
    core: { "xml:space": "default" },
    presentation: {
      clip: "auto",
      "clip-path": "none",
      "clip-rule": "nonzero",
      mask: "none",
      opacity: "1",
      "stop-color": "#000",
      "stop-opacity": "1",
      "fill-opacity": "1",
      "fill-rule": "nonzero",
      fill: "#000",
      stroke: "none",
      "stroke-width": "1",
      "stroke-linecap": "butt",
      "stroke-linejoin": "miter",
      "stroke-miterlimit": "4",
      "stroke-dasharray": "none",
      "stroke-dashoffset": "0",
      "stroke-opacity": "1",
      "paint-order": "normal",
      "vector-effect": "none",
      display: "inline",
      visibility: "visible",
      "marker-start": "none",
      "marker-mid": "none",
      "marker-end": "none",
      "color-interpolation": "sRGB",
      "color-interpolation-filters": "linearRGB",
      "color-rendering": "auto",
      "shape-rendering": "auto",
      "text-rendering": "auto",
      "image-rendering": "auto",
      "font-style": "normal",
      "font-variant": "normal",
      "font-weight": "normal",
      "font-stretch": "normal",
      "font-size": "medium",
      "font-size-adjust": "none",
      kerning: "auto",
      "letter-spacing": "normal",
      "word-spacing": "normal",
      "text-decoration": "none",
      "text-anchor": "start",
      "text-overflow": "clip",
      "writing-mode": "lr-tb",
      "glyph-orientation-vertical": "auto",
      "glyph-orientation-horizontal": "0deg",
      direction: "ltr",
      "unicode-bidi": "normal",
      "dominant-baseline": "auto",
      "alignment-baseline": "baseline",
      "baseline-shift": "baseline"
    },
    transferFunction: {
      slope: "1",
      intercept: "0",
      amplitude: "1",
      exponent: "1",
      offset: "0"
    }
  }, e.elems = {
    a: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation",
        "xlink"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "style",
        "target",
        "transform"
      ]),
      defaults: {
        target: "_self"
      },
      contentGroups: /* @__PURE__ */ new Set([
        "animation",
        "descriptive",
        "paintServer",
        "shape",
        "structural"
      ]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyphDef",
        "clipPath",
        "color-profile",
        "cursor",
        "filter",
        "font-face",
        "font",
        "foreignObject",
        "image",
        "marker",
        "mask",
        "pattern",
        "script",
        "style",
        "switch",
        "text",
        "view",
        // not spec compliant
        "tspan"
      ])
    },
    altGlyph: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation",
        "xlink"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "dx",
        "dy",
        "externalResourcesRequired",
        "format",
        "glyphRef",
        "rotate",
        "style",
        "x",
        "y"
      ])
    },
    altGlyphDef: {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      content: /* @__PURE__ */ new Set(["glyphRef"])
    },
    altGlyphItem: {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      content: /* @__PURE__ */ new Set(["glyphRef", "altGlyphItem"])
    },
    animate: {
      attrsGroups: /* @__PURE__ */ new Set([
        "animationAddition",
        "animationAttributeTarget",
        "animationEvent",
        "animationTiming",
        "animationValue",
        "conditionalProcessing",
        "core",
        "presentation",
        "xlink"
      ]),
      attrs: /* @__PURE__ */ new Set(["externalResourcesRequired"]),
      contentGroups: /* @__PURE__ */ new Set(["descriptive"])
    },
    animateColor: {
      attrsGroups: /* @__PURE__ */ new Set([
        "animationAddition",
        "animationAttributeTarget",
        "animationEvent",
        "animationTiming",
        "animationValue",
        "conditionalProcessing",
        "core",
        "presentation",
        "xlink"
      ]),
      attrs: /* @__PURE__ */ new Set(["externalResourcesRequired"]),
      contentGroups: /* @__PURE__ */ new Set(["descriptive"])
    },
    animateMotion: {
      attrsGroups: /* @__PURE__ */ new Set([
        "animationAddition",
        "animationEvent",
        "animationTiming",
        "animationValue",
        "conditionalProcessing",
        "core",
        "xlink"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "externalResourcesRequired",
        "keyPoints",
        "origin",
        "path",
        "rotate"
      ]),
      defaults: {
        rotate: "0"
      },
      contentGroups: /* @__PURE__ */ new Set(["descriptive"]),
      content: /* @__PURE__ */ new Set(["mpath"])
    },
    animateTransform: {
      attrsGroups: /* @__PURE__ */ new Set([
        "animationAddition",
        "animationAttributeTarget",
        "animationEvent",
        "animationTiming",
        "animationValue",
        "conditionalProcessing",
        "core",
        "xlink"
      ]),
      attrs: /* @__PURE__ */ new Set(["externalResourcesRequired", "type"]),
      contentGroups: /* @__PURE__ */ new Set(["descriptive"])
    },
    circle: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "cx",
        "cy",
        "externalResourcesRequired",
        "r",
        "style",
        "transform"
      ]),
      defaults: {
        cx: "0",
        cy: "0"
      },
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive"])
    },
    clipPath: {
      attrsGroups: /* @__PURE__ */ new Set(["conditionalProcessing", "core", "presentation"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "clipPathUnits",
        "externalResourcesRequired",
        "style",
        "transform"
      ]),
      defaults: {
        clipPathUnits: "userSpaceOnUse"
      },
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive", "shape"]),
      content: /* @__PURE__ */ new Set(["text", "use"])
    },
    "color-profile": {
      attrsGroups: /* @__PURE__ */ new Set(["core", "xlink"]),
      attrs: /* @__PURE__ */ new Set(["local", "name", "rendering-intent"]),
      defaults: {
        name: "sRGB",
        "rendering-intent": "auto"
      },
      contentGroups: /* @__PURE__ */ new Set(["descriptive"])
    },
    cursor: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "conditionalProcessing", "xlink"]),
      attrs: /* @__PURE__ */ new Set(["externalResourcesRequired", "x", "y"]),
      defaults: {
        x: "0",
        y: "0"
      },
      contentGroups: /* @__PURE__ */ new Set(["descriptive"])
    },
    defs: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "style",
        "transform"
      ]),
      contentGroups: /* @__PURE__ */ new Set([
        "animation",
        "descriptive",
        "paintServer",
        "shape",
        "structural"
      ]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyphDef",
        "clipPath",
        "color-profile",
        "cursor",
        "filter",
        "font-face",
        "font",
        "foreignObject",
        "image",
        "marker",
        "mask",
        "pattern",
        "script",
        "style",
        "switch",
        "text",
        "view"
      ])
    },
    desc: {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set(["class", "style"])
    },
    ellipse: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "cx",
        "cy",
        "externalResourcesRequired",
        "rx",
        "ry",
        "style",
        "transform"
      ]),
      defaults: {
        cx: "0",
        cy: "0"
      },
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive"])
    },
    feBlend: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "style",
        // TODO: in - 'If no value is provided and this is the first filter primitive,
        // then this filter primitive will use SourceGraphic as its input'
        "in",
        "in2",
        "mode"
      ]),
      defaults: {
        mode: "normal"
      },
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    feColorMatrix: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set(["class", "style", "in", "type", "values"]),
      defaults: {
        type: "matrix"
      },
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    feComponentTransfer: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set(["class", "style", "in"]),
      content: /* @__PURE__ */ new Set(["feFuncA", "feFuncB", "feFuncG", "feFuncR"])
    },
    feComposite: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "in",
        "in2",
        "k1",
        "k2",
        "k3",
        "k4",
        "operator",
        "style"
      ]),
      defaults: {
        operator: "over",
        k1: "0",
        k2: "0",
        k3: "0",
        k4: "0"
      },
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    feConvolveMatrix: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "in",
        "kernelMatrix",
        "order",
        "style",
        // TODO: divisor - 'The default value is the sum of all values in kernelMatrix,
        // with the exception that if the sum is zero, then the divisor is set to 1'
        "bias",
        "divisor",
        // TODO: targetX - 'By default, the convolution matrix is centered in X over each
        // pixel of the input image (i.e., targetX = floor ( orderX / 2 ))'
        "edgeMode",
        "targetX",
        "targetY",
        // TODO: kernelUnitLength - 'The first number is the <dx> value. The second number
        // is the <dy> value. If the <dy> value is not specified, it defaults to the same value as <dx>'
        "kernelUnitLength",
        "preserveAlpha"
      ]),
      defaults: {
        order: "3",
        bias: "0",
        edgeMode: "duplicate",
        preserveAlpha: "false"
      },
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    feDiffuseLighting: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "diffuseConstant",
        "in",
        "kernelUnitLength",
        "style",
        "surfaceScale"
      ]),
      defaults: {
        surfaceScale: "1",
        diffuseConstant: "1"
      },
      contentGroups: /* @__PURE__ */ new Set(["descriptive"]),
      content: /* @__PURE__ */ new Set([
        // TODO: 'exactly one light source element, in any order'
        "feDistantLight",
        "fePointLight",
        "feSpotLight"
      ])
    },
    feDisplacementMap: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "in",
        "in2",
        "scale",
        "style",
        "xChannelSelector",
        "yChannelSelector"
      ]),
      defaults: {
        scale: "0",
        xChannelSelector: "A",
        yChannelSelector: "A"
      },
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    feDistantLight: {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set(["azimuth", "elevation"]),
      defaults: {
        azimuth: "0",
        elevation: "0"
      },
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    feFlood: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set(["class", "style"]),
      content: /* @__PURE__ */ new Set(["animate", "animateColor", "set"])
    },
    feFuncA: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "transferFunction"]),
      content: /* @__PURE__ */ new Set(["set", "animate"])
    },
    feFuncB: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "transferFunction"]),
      content: /* @__PURE__ */ new Set(["set", "animate"])
    },
    feFuncG: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "transferFunction"]),
      content: /* @__PURE__ */ new Set(["set", "animate"])
    },
    feFuncR: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "transferFunction"]),
      content: /* @__PURE__ */ new Set(["set", "animate"])
    },
    feGaussianBlur: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set(["class", "style", "in", "stdDeviation"]),
      defaults: {
        stdDeviation: "0"
      },
      content: /* @__PURE__ */ new Set(["set", "animate"])
    },
    feImage: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive", "xlink"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "href",
        "preserveAspectRatio",
        "style",
        "xlink:href"
      ]),
      defaults: {
        preserveAspectRatio: "xMidYMid meet"
      },
      content: /* @__PURE__ */ new Set(["animate", "animateTransform", "set"])
    },
    feMerge: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set(["class", "style"]),
      content: /* @__PURE__ */ new Set(["feMergeNode"])
    },
    feMergeNode: {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set(["in"]),
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    feMorphology: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set(["class", "style", "in", "operator", "radius"]),
      defaults: {
        operator: "erode",
        radius: "0"
      },
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    feOffset: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set(["class", "style", "in", "dx", "dy"]),
      defaults: {
        dx: "0",
        dy: "0"
      },
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    fePointLight: {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set(["x", "y", "z"]),
      defaults: {
        x: "0",
        y: "0",
        z: "0"
      },
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    feSpecularLighting: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "in",
        "kernelUnitLength",
        "specularConstant",
        "specularExponent",
        "style",
        "surfaceScale"
      ]),
      defaults: {
        surfaceScale: "1",
        specularConstant: "1",
        specularExponent: "1"
      },
      contentGroups: /* @__PURE__ */ new Set([
        "descriptive",
        // TODO: exactly one 'light source element'
        "lightSource"
      ])
    },
    feSpotLight: {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set([
        "limitingConeAngle",
        "pointsAtX",
        "pointsAtY",
        "pointsAtZ",
        "specularExponent",
        "x",
        "y",
        "z"
      ]),
      defaults: {
        x: "0",
        y: "0",
        z: "0",
        pointsAtX: "0",
        pointsAtY: "0",
        pointsAtZ: "0",
        specularExponent: "1"
      },
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    feTile: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set(["class", "style", "in"]),
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    feTurbulence: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "filterPrimitive"]),
      attrs: /* @__PURE__ */ new Set([
        "baseFrequency",
        "class",
        "numOctaves",
        "seed",
        "stitchTiles",
        "style",
        "type"
      ]),
      defaults: {
        baseFrequency: "0",
        numOctaves: "1",
        seed: "0",
        stitchTiles: "noStitch",
        type: "turbulence"
      },
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    filter: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "xlink"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "filterRes",
        "filterUnits",
        "height",
        "href",
        "primitiveUnits",
        "style",
        "width",
        "x",
        "xlink:href",
        "y"
      ]),
      defaults: {
        primitiveUnits: "userSpaceOnUse",
        x: "-10%",
        y: "-10%",
        width: "120%",
        height: "120%"
      },
      contentGroups: /* @__PURE__ */ new Set(["descriptive", "filterPrimitive"]),
      content: /* @__PURE__ */ new Set(["animate", "set"])
    },
    font: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "horiz-adv-x",
        "horiz-origin-x",
        "horiz-origin-y",
        "style",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y"
      ]),
      defaults: {
        "horiz-origin-x": "0",
        "horiz-origin-y": "0"
      },
      contentGroups: /* @__PURE__ */ new Set(["descriptive"]),
      content: /* @__PURE__ */ new Set(["font-face", "glyph", "hkern", "missing-glyph", "vkern"])
    },
    "font-face": {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set([
        "font-family",
        "font-style",
        "font-variant",
        "font-weight",
        "font-stretch",
        "font-size",
        "unicode-range",
        "units-per-em",
        "panose-1",
        "stemv",
        "stemh",
        "slope",
        "cap-height",
        "x-height",
        "accent-height",
        "ascent",
        "descent",
        "widths",
        "bbox",
        "ideographic",
        "alphabetic",
        "mathematical",
        "hanging",
        "v-ideographic",
        "v-alphabetic",
        "v-mathematical",
        "v-hanging",
        "underline-position",
        "underline-thickness",
        "strikethrough-position",
        "strikethrough-thickness",
        "overline-position",
        "overline-thickness"
      ]),
      defaults: {
        "font-style": "all",
        "font-variant": "normal",
        "font-weight": "all",
        "font-stretch": "normal",
        "unicode-range": "U+0-10FFFF",
        "units-per-em": "1000",
        "panose-1": "0 0 0 0 0 0 0 0 0 0",
        slope: "0"
      },
      contentGroups: /* @__PURE__ */ new Set(["descriptive"]),
      content: /* @__PURE__ */ new Set([
        // TODO: "at most one 'font-face-src' element"
        "font-face-src"
      ])
    },
    // TODO: empty content
    "font-face-format": {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set(["string"])
    },
    "font-face-name": {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set(["name"])
    },
    "font-face-src": {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      content: /* @__PURE__ */ new Set(["font-face-name", "font-face-uri"])
    },
    "font-face-uri": {
      attrsGroups: /* @__PURE__ */ new Set(["core", "xlink"]),
      attrs: /* @__PURE__ */ new Set(["href", "xlink:href"]),
      content: /* @__PURE__ */ new Set(["font-face-format"])
    },
    foreignObject: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "height",
        "style",
        "transform",
        "width",
        "x",
        "y"
      ]),
      defaults: {
        x: "0",
        y: "0"
      }
    },
    g: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "style",
        "transform"
      ]),
      contentGroups: /* @__PURE__ */ new Set([
        "animation",
        "descriptive",
        "paintServer",
        "shape",
        "structural"
      ]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyphDef",
        "clipPath",
        "color-profile",
        "cursor",
        "filter",
        "font-face",
        "font",
        "foreignObject",
        "image",
        "marker",
        "mask",
        "pattern",
        "script",
        "style",
        "switch",
        "text",
        "view"
      ])
    },
    glyph: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation"]),
      attrs: /* @__PURE__ */ new Set([
        "arabic-form",
        "class",
        "d",
        "glyph-name",
        "horiz-adv-x",
        "lang",
        "orientation",
        "style",
        "unicode",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y"
      ]),
      defaults: {
        "arabic-form": "initial"
      },
      contentGroups: /* @__PURE__ */ new Set([
        "animation",
        "descriptive",
        "paintServer",
        "shape",
        "structural"
      ]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyphDef",
        "clipPath",
        "color-profile",
        "cursor",
        "filter",
        "font-face",
        "font",
        "foreignObject",
        "image",
        "marker",
        "mask",
        "pattern",
        "script",
        "style",
        "switch",
        "text",
        "view"
      ])
    },
    glyphRef: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "d",
        "horiz-adv-x",
        "style",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y"
      ]),
      contentGroups: /* @__PURE__ */ new Set([
        "animation",
        "descriptive",
        "paintServer",
        "shape",
        "structural"
      ]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyphDef",
        "clipPath",
        "color-profile",
        "cursor",
        "filter",
        "font-face",
        "font",
        "foreignObject",
        "image",
        "marker",
        "mask",
        "pattern",
        "script",
        "style",
        "switch",
        "text",
        "view"
      ])
    },
    hatch: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "xlink"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "hatchContentUnits",
        "hatchUnits",
        "pitch",
        "rotate",
        "style",
        "transform",
        "x",
        "y"
      ]),
      defaults: {
        hatchUnits: "objectBoundingBox",
        hatchContentUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        pitch: "0",
        rotate: "0"
      },
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive"]),
      content: /* @__PURE__ */ new Set(["hatchPath"])
    },
    hatchPath: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "xlink"]),
      attrs: /* @__PURE__ */ new Set(["class", "style", "d", "offset"]),
      defaults: {
        offset: "0"
      },
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive"])
    },
    hkern: {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set(["u1", "g1", "u2", "g2", "k"])
    },
    image: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation",
        "xlink"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "height",
        "href",
        "preserveAspectRatio",
        "style",
        "transform",
        "width",
        "x",
        "xlink:href",
        "y"
      ]),
      defaults: {
        x: "0",
        y: "0",
        preserveAspectRatio: "xMidYMid meet"
      },
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive"])
    },
    line: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "style",
        "transform",
        "x1",
        "x2",
        "y1",
        "y2"
      ]),
      defaults: {
        x1: "0",
        y1: "0",
        x2: "0",
        y2: "0"
      },
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive"])
    },
    linearGradient: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "xlink"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "gradientTransform",
        "gradientUnits",
        "href",
        "spreadMethod",
        "style",
        "x1",
        "x2",
        "xlink:href",
        "y1",
        "y2"
      ]),
      defaults: {
        x1: "0",
        y1: "0",
        x2: "100%",
        y2: "0",
        spreadMethod: "pad"
      },
      contentGroups: /* @__PURE__ */ new Set(["descriptive"]),
      content: /* @__PURE__ */ new Set(["animate", "animateTransform", "set", "stop"])
    },
    marker: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "markerHeight",
        "markerUnits",
        "markerWidth",
        "orient",
        "preserveAspectRatio",
        "refX",
        "refY",
        "style",
        "viewBox"
      ]),
      defaults: {
        markerUnits: "strokeWidth",
        refX: "0",
        refY: "0",
        markerWidth: "3",
        markerHeight: "3"
      },
      contentGroups: /* @__PURE__ */ new Set([
        "animation",
        "descriptive",
        "paintServer",
        "shape",
        "structural"
      ]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyphDef",
        "clipPath",
        "color-profile",
        "cursor",
        "filter",
        "font-face",
        "font",
        "foreignObject",
        "image",
        "marker",
        "mask",
        "pattern",
        "script",
        "style",
        "switch",
        "text",
        "view"
      ])
    },
    mask: {
      attrsGroups: /* @__PURE__ */ new Set(["conditionalProcessing", "core", "presentation"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "height",
        "mask-type",
        "maskContentUnits",
        "maskUnits",
        "style",
        "width",
        "x",
        "y"
      ]),
      defaults: {
        maskUnits: "objectBoundingBox",
        maskContentUnits: "userSpaceOnUse",
        x: "-10%",
        y: "-10%",
        width: "120%",
        height: "120%"
      },
      contentGroups: /* @__PURE__ */ new Set([
        "animation",
        "descriptive",
        "paintServer",
        "shape",
        "structural"
      ]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyphDef",
        "clipPath",
        "color-profile",
        "cursor",
        "filter",
        "font-face",
        "font",
        "foreignObject",
        "image",
        "marker",
        "mask",
        "pattern",
        "script",
        "style",
        "switch",
        "text",
        "view"
      ])
    },
    metadata: {
      attrsGroups: /* @__PURE__ */ new Set(["core"])
    },
    "missing-glyph": {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "d",
        "horiz-adv-x",
        "style",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y"
      ]),
      contentGroups: /* @__PURE__ */ new Set([
        "animation",
        "descriptive",
        "paintServer",
        "shape",
        "structural"
      ]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyphDef",
        "clipPath",
        "color-profile",
        "cursor",
        "filter",
        "font-face",
        "font",
        "foreignObject",
        "image",
        "marker",
        "mask",
        "pattern",
        "script",
        "style",
        "switch",
        "text",
        "view"
      ])
    },
    mpath: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "xlink"]),
      attrs: /* @__PURE__ */ new Set(["externalResourcesRequired", "href", "xlink:href"]),
      contentGroups: /* @__PURE__ */ new Set(["descriptive"])
    },
    path: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "d",
        "externalResourcesRequired",
        "pathLength",
        "style",
        "transform"
      ]),
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive"])
    },
    pattern: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "presentation",
        "xlink"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "height",
        "href",
        "patternContentUnits",
        "patternTransform",
        "patternUnits",
        "preserveAspectRatio",
        "style",
        "viewBox",
        "width",
        "x",
        "xlink:href",
        "y"
      ]),
      defaults: {
        patternUnits: "objectBoundingBox",
        patternContentUnits: "userSpaceOnUse",
        x: "0",
        y: "0",
        width: "0",
        height: "0",
        preserveAspectRatio: "xMidYMid meet"
      },
      contentGroups: /* @__PURE__ */ new Set([
        "animation",
        "descriptive",
        "paintServer",
        "shape",
        "structural"
      ]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyphDef",
        "clipPath",
        "color-profile",
        "cursor",
        "filter",
        "font-face",
        "font",
        "foreignObject",
        "image",
        "marker",
        "mask",
        "pattern",
        "script",
        "style",
        "switch",
        "text",
        "view"
      ])
    },
    polygon: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "points",
        "style",
        "transform"
      ]),
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive"])
    },
    polyline: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "points",
        "style",
        "transform"
      ]),
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive"])
    },
    radialGradient: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "xlink"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "cx",
        "cy",
        "externalResourcesRequired",
        "fr",
        "fx",
        "fy",
        "gradientTransform",
        "gradientUnits",
        "href",
        "r",
        "spreadMethod",
        "style",
        "xlink:href"
      ]),
      defaults: {
        gradientUnits: "objectBoundingBox",
        cx: "50%",
        cy: "50%",
        r: "50%"
      },
      contentGroups: /* @__PURE__ */ new Set(["descriptive"]),
      content: /* @__PURE__ */ new Set(["animate", "animateTransform", "set", "stop"])
    },
    meshGradient: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation", "xlink"]),
      attrs: /* @__PURE__ */ new Set(["class", "style", "x", "y", "gradientUnits", "transform"]),
      contentGroups: /* @__PURE__ */ new Set(["descriptive", "paintServer", "animation"]),
      content: /* @__PURE__ */ new Set(["meshRow"])
    },
    meshRow: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation"]),
      attrs: /* @__PURE__ */ new Set(["class", "style"]),
      contentGroups: /* @__PURE__ */ new Set(["descriptive"]),
      content: /* @__PURE__ */ new Set(["meshPatch"])
    },
    meshPatch: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation"]),
      attrs: /* @__PURE__ */ new Set(["class", "style"]),
      contentGroups: /* @__PURE__ */ new Set(["descriptive"]),
      content: /* @__PURE__ */ new Set(["stop"])
    },
    rect: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "height",
        "rx",
        "ry",
        "style",
        "transform",
        "width",
        "x",
        "y"
      ]),
      defaults: {
        x: "0",
        y: "0"
      },
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive"])
    },
    script: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "xlink"]),
      attrs: /* @__PURE__ */ new Set(["externalResourcesRequired", "type", "href", "xlink:href"])
    },
    set: {
      attrsGroups: /* @__PURE__ */ new Set([
        "animation",
        "animationAttributeTarget",
        "animationTiming",
        "conditionalProcessing",
        "core",
        "xlink"
      ]),
      attrs: /* @__PURE__ */ new Set(["externalResourcesRequired", "to"]),
      contentGroups: /* @__PURE__ */ new Set(["descriptive"])
    },
    solidColor: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation"]),
      attrs: /* @__PURE__ */ new Set(["class", "style"]),
      contentGroups: /* @__PURE__ */ new Set(["paintServer"])
    },
    stop: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "presentation"]),
      attrs: /* @__PURE__ */ new Set(["class", "style", "offset", "path"]),
      content: /* @__PURE__ */ new Set(["animate", "animateColor", "set"])
    },
    style: {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set(["type", "media", "title"]),
      defaults: {
        type: "text/css"
      }
    },
    svg: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "documentEvent",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "baseProfile",
        "class",
        "contentScriptType",
        "contentStyleType",
        "height",
        "preserveAspectRatio",
        "style",
        "version",
        "viewBox",
        "width",
        "x",
        "y",
        "zoomAndPan"
      ]),
      defaults: {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        preserveAspectRatio: "xMidYMid meet",
        zoomAndPan: "magnify",
        version: "1.1",
        baseProfile: "none",
        contentScriptType: "application/ecmascript",
        contentStyleType: "text/css"
      },
      contentGroups: /* @__PURE__ */ new Set([
        "animation",
        "descriptive",
        "paintServer",
        "shape",
        "structural"
      ]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyphDef",
        "clipPath",
        "color-profile",
        "cursor",
        "filter",
        "font-face",
        "font",
        "foreignObject",
        "image",
        "marker",
        "mask",
        "pattern",
        "script",
        "style",
        "switch",
        "text",
        "view"
      ])
    },
    switch: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "style",
        "transform"
      ]),
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive", "shape"]),
      content: /* @__PURE__ */ new Set([
        "a",
        "foreignObject",
        "g",
        "image",
        "svg",
        "switch",
        "text",
        "use"
      ])
    },
    symbol: {
      attrsGroups: /* @__PURE__ */ new Set(["core", "graphicalEvent", "presentation"]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "preserveAspectRatio",
        "refX",
        "refY",
        "style",
        "viewBox"
      ]),
      defaults: {
        refX: "0",
        refY: "0"
      },
      contentGroups: /* @__PURE__ */ new Set([
        "animation",
        "descriptive",
        "paintServer",
        "shape",
        "structural"
      ]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyphDef",
        "clipPath",
        "color-profile",
        "cursor",
        "filter",
        "font-face",
        "font",
        "foreignObject",
        "image",
        "marker",
        "mask",
        "pattern",
        "script",
        "style",
        "switch",
        "text",
        "view"
      ])
    },
    text: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "dx",
        "dy",
        "externalResourcesRequired",
        "lengthAdjust",
        "rotate",
        "style",
        "textLength",
        "transform",
        "x",
        "y"
      ]),
      defaults: {
        x: "0",
        y: "0",
        lengthAdjust: "spacing"
      },
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive", "textContentChild"]),
      content: /* @__PURE__ */ new Set(["a"])
    },
    textPath: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation",
        "xlink"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "d",
        "externalResourcesRequired",
        "href",
        "method",
        "spacing",
        "startOffset",
        "style",
        "xlink:href"
      ]),
      defaults: {
        startOffset: "0",
        method: "align",
        spacing: "exact"
      },
      contentGroups: /* @__PURE__ */ new Set(["descriptive"]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyph",
        "animate",
        "animateColor",
        "set",
        "tref",
        "tspan"
      ])
    },
    title: {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set(["class", "style"])
    },
    tref: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation",
        "xlink"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "href",
        "style",
        "xlink:href"
      ]),
      contentGroups: /* @__PURE__ */ new Set(["descriptive"]),
      content: /* @__PURE__ */ new Set(["animate", "animateColor", "set"])
    },
    tspan: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "dx",
        "dy",
        "externalResourcesRequired",
        "lengthAdjust",
        "rotate",
        "style",
        "textLength",
        "x",
        "y"
      ]),
      contentGroups: /* @__PURE__ */ new Set(["descriptive"]),
      content: /* @__PURE__ */ new Set([
        "a",
        "altGlyph",
        "animate",
        "animateColor",
        "set",
        "tref",
        "tspan"
      ])
    },
    use: {
      attrsGroups: /* @__PURE__ */ new Set([
        "conditionalProcessing",
        "core",
        "graphicalEvent",
        "presentation",
        "xlink"
      ]),
      attrs: /* @__PURE__ */ new Set([
        "class",
        "externalResourcesRequired",
        "height",
        "href",
        "style",
        "transform",
        "width",
        "x",
        "xlink:href",
        "y"
      ]),
      defaults: {
        x: "0",
        y: "0"
      },
      contentGroups: /* @__PURE__ */ new Set(["animation", "descriptive"])
    },
    view: {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set([
        "externalResourcesRequired",
        "preserveAspectRatio",
        "viewBox",
        "viewTarget",
        "zoomAndPan"
      ]),
      contentGroups: /* @__PURE__ */ new Set(["descriptive"])
    },
    vkern: {
      attrsGroups: /* @__PURE__ */ new Set(["core"]),
      attrs: /* @__PURE__ */ new Set(["u1", "g1", "u2", "g2", "k"])
    }
  }, e.editorNamespaces = /* @__PURE__ */ new Set([
    "http://creativecommons.org/ns#",
    "http://inkscape.sourceforge.net/DTD/sodipodi-0.dtd",
    "http://ns.adobe.com/AdobeIllustrator/10.0/",
    "http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",
    "http://ns.adobe.com/Extensibility/1.0/",
    "http://ns.adobe.com/Flows/1.0/",
    "http://ns.adobe.com/GenericCustomNamespace/1.0/",
    "http://ns.adobe.com/Graphs/1.0/",
    "http://ns.adobe.com/ImageReplacement/1.0/",
    "http://ns.adobe.com/SaveForWeb/1.0/",
    "http://ns.adobe.com/Variables/1.0/",
    "http://ns.adobe.com/XPath/1.0/",
    "http://purl.org/dc/elements/1.1/",
    "http://schemas.microsoft.com/visio/2003/SVGExtensions/",
    "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
    "http://taptrix.com/vectorillustrator/svg_extensions",
    "http://www.bohemiancoding.com/sketch/ns",
    "http://www.figma.com/figma/ns",
    "http://www.inkscape.org/namespaces/inkscape",
    "http://www.serif.com/",
    "http://www.vector.evaxdesign.sk",
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  ]), e.referencesProps = /* @__PURE__ */ new Set([
    "clip-path",
    "color-profile",
    "fill",
    "filter",
    "marker-end",
    "marker-mid",
    "marker-start",
    "mask",
    "stroke",
    "style"
  ]), e.inheritableAttrs = /* @__PURE__ */ new Set([
    "clip-rule",
    "color-interpolation-filters",
    "color-interpolation",
    "color-profile",
    "color-rendering",
    "color",
    "cursor",
    "direction",
    "dominant-baseline",
    "fill-opacity",
    "fill-rule",
    "fill",
    "font-family",
    "font-size-adjust",
    "font-size",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "font",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "image-rendering",
    "letter-spacing",
    "marker-end",
    "marker-mid",
    "marker-start",
    "marker",
    "paint-order",
    "pointer-events",
    "shape-rendering",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "stroke",
    "text-anchor",
    "text-rendering",
    "transform",
    "visibility",
    "word-spacing",
    "writing-mode"
  ]), e.presentationNonInheritableGroupAttrs = /* @__PURE__ */ new Set([
    "clip-path",
    "display",
    "filter",
    "mask",
    "opacity",
    "text-decoration",
    "transform",
    "unicode-bidi"
  ]), e.colorsNames = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#0ff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000",
    blanchedalmond: "#ffebcd",
    blue: "#00f",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#0ff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#f0f",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#789",
    lightslategrey: "#789",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#0f0",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#f0f",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#639",
    red: "#f00",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#fff",
    whitesmoke: "#f5f5f5",
    yellow: "#ff0",
    yellowgreen: "#9acd32"
  }, e.colorsShortNames = {
    "#f0ffff": "azure",
    "#f5f5dc": "beige",
    "#ffe4c4": "bisque",
    "#a52a2a": "brown",
    "#ff7f50": "coral",
    "#ffd700": "gold",
    "#808080": "gray",
    "#008000": "green",
    "#4b0082": "indigo",
    "#fffff0": "ivory",
    "#f0e68c": "khaki",
    "#faf0e6": "linen",
    "#800000": "maroon",
    "#000080": "navy",
    "#808000": "olive",
    "#ffa500": "orange",
    "#da70d6": "orchid",
    "#cd853f": "peru",
    "#ffc0cb": "pink",
    "#dda0dd": "plum",
    "#800080": "purple",
    "#f00": "red",
    "#ff0000": "red",
    "#fa8072": "salmon",
    "#a0522d": "sienna",
    "#c0c0c0": "silver",
    "#fffafa": "snow",
    "#d2b48c": "tan",
    "#008080": "teal",
    "#ff6347": "tomato",
    "#ee82ee": "violet",
    "#f5deb3": "wheat"
  }, e.colorsProps = /* @__PURE__ */ new Set([
    "color",
    "fill",
    "flood-color",
    "lighting-color",
    "stop-color",
    "stroke"
  ]), e.pseudoClasses = {
    displayState: /* @__PURE__ */ new Set(["fullscreen", "modal", "picture-in-picture"]),
    input: /* @__PURE__ */ new Set([
      "autofill",
      "blank",
      "checked",
      "default",
      "disabled",
      "enabled",
      "in-range",
      "indetermined",
      "invalid",
      "optional",
      "out-of-range",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "user-invalid",
      "valid"
    ]),
    linguistic: /* @__PURE__ */ new Set(["dir", "lang"]),
    location: /* @__PURE__ */ new Set([
      "any-link",
      "link",
      "local-link",
      "scope",
      "target-within",
      "target",
      "visited"
    ]),
    resourceState: /* @__PURE__ */ new Set(["playing", "paused"]),
    timeDimensional: /* @__PURE__ */ new Set(["current", "past", "future"]),
    treeStructural: /* @__PURE__ */ new Set([
      "empty",
      "first-child",
      "first-of-type",
      "last-child",
      "last-of-type",
      "nth-child",
      "nth-last-child",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "root"
    ]),
    userAction: /* @__PURE__ */ new Set([
      "active",
      "focus-visible",
      "focus-within",
      "focus",
      "hover"
    ]),
    functional: /* @__PURE__ */ new Set(["is", "not", "where", "has"])
  };
})(be);
const Uy = fm, { textElems: jy } = be;
class of extends Error {
  /**
   * @param message {string}
   * @param line {number}
   * @param column {number}
   * @param source {string}
   * @param file {void | string}
   */
  constructor(t, r, n, a, i) {
    super(t), this.name = "SvgoParserError", this.message = `${i || "<input>"}:${r}:${n}: ${t}`, this.reason = t, this.line = r, this.column = n, this.source = a, Error.captureStackTrace && Error.captureStackTrace(this, of);
  }
  toString() {
    const t = this.source.split(/\r?\n/), r = Math.max(this.line - 3, 0), n = Math.min(this.line + 2, t.length), a = String(n).length, i = Math.max(this.column - 54, 0), s = Math.max(this.column + 20, 80), u = t.slice(r, n).map((l, o) => {
      const c = l.slice(i, s);
      let f = "", d = "";
      i !== 0 && (f = i > l.length - 1 ? " " : "…"), s < l.length - 1 && (d = "…");
      const h = r + 1 + o, p = ` ${h.toString().padStart(a)} | `;
      if (h === this.line) {
        const g = p.replace(/[^|]/g, " "), x = (f + l.slice(i, this.column - 1)).replace(/[^\t]/g, " "), C = g + x;
        return `>${p}${f}${c}${d}
 ${C}^`;
      }
      return ` ${p}${f}${c}${d}`;
    }).join(`
`);
    return `${this.name}: ${this.message}

${u}
`;
  }
}
const il = /<!ENTITY\s+(\S+)\s+(?:'([^']+)'|"([^"]+)")\s*>/g, Md = {
  strict: !0,
  trim: !1,
  normalize: !1,
  lowercase: !0,
  xmlns: !0,
  position: !0
}, zy = (e, t) => {
  const r = Uy.parser(Md.strict, Md), n = { type: "root", children: [] };
  let a = n;
  const i = [n], s = (u) => {
    Object.defineProperty(u, "parentNode", {
      writable: !0,
      value: a
    }), a.children.push(u);
  };
  return r.ondoctype = (u) => {
    s({
      type: "doctype",
      // TODO parse doctype for name, public and system to match xast
      name: "svg",
      data: {
        doctype: u
      }
    });
    const o = u.indexOf("[");
    if (o >= 0) {
      il.lastIndex = o;
      let c = il.exec(e);
      for (; c != null; )
        r.ENTITIES[c[1]] = c[2] || c[3], c = il.exec(e);
    }
  }, r.onprocessinginstruction = (u) => {
    const l = {
      type: "instruction",
      name: u.name,
      value: u.body
    };
    s(l);
  }, r.oncomment = (u) => {
    const l = {
      type: "comment",
      value: u.trim()
    };
    s(l);
  }, r.oncdata = (u) => {
    s({
      type: "cdata",
      value: u
    });
  }, r.onopentag = (u) => {
    let l = {
      type: "element",
      name: u.name,
      attributes: {},
      children: []
    };
    for (const [o, c] of Object.entries(u.attributes))
      l.attributes[o] = c.value;
    s(l), a = l, i.push(l);
  }, r.ontext = (u) => {
    if (a.type === "element") {
      if (jy.has(a.name))
        s({
          type: "text",
          value: u
        });
      else if (/\S/.test(u)) {
        const l = {
          type: "text",
          value: u.trim()
        };
        s(l);
      }
    }
  }, r.onclosetag = () => {
    i.pop(), a = i[i.length - 1];
  }, r.onerror = (u) => {
    const l = new of(
      u.reason,
      u.line + 1,
      u.column,
      e,
      t
    );
    if (u.message.indexOf("Unexpected end") === -1)
      throw l;
  }, r.write(e).close(), n;
};
cm.parseSvg = zy;
var dm = {};
const { textElems: Gy } = be, Hy = (e) => Vy[e], $r = {
  doctypeStart: "<!DOCTYPE",
  doctypeEnd: ">",
  procInstStart: "<?",
  procInstEnd: "?>",
  tagOpenStart: "<",
  tagOpenEnd: ">",
  tagCloseStart: "</",
  tagCloseEnd: ">",
  tagShortStart: "<",
  tagShortEnd: "/>",
  attrStart: '="',
  attrEnd: '"',
  commentStart: "<!--",
  commentEnd: "-->",
  cdataStart: "<![CDATA[",
  cdataEnd: "]]>",
  textStart: "",
  textEnd: "",
  indent: 4,
  regEntities: /[&'"<>]/g,
  regValEntities: /[&"<>]/g,
  encodeEntity: Hy,
  pretty: !1,
  useShortTags: !0,
  eol: "lf",
  finalNewline: !1
}, Vy = {
  "&": "&amp;",
  "'": "&apos;",
  '"': "&quot;",
  ">": "&gt;",
  "<": "&lt;"
}, Wy = (e, t = {}) => {
  const r = { ...$r, ...t }, n = r.indent;
  let a = "    ";
  typeof n == "number" && Number.isNaN(n) === !1 ? a = n < 0 ? "	" : " ".repeat(n) : typeof n == "string" && (a = n);
  const i = {
    indent: a,
    textContext: null,
    indentLevel: 0
  }, s = r.eol === "crlf" ? `\r
` : `
`;
  r.pretty && (r.doctypeEnd += s, r.procInstEnd += s, r.commentEnd += s, r.cdataEnd += s, r.tagShortEnd += s, r.tagOpenEnd += s, r.tagCloseEnd += s, r.textEnd += s);
  let u = hm(e, r, i);
  return r.finalNewline && u.length > 0 && !u.endsWith(`
`) && (u += s), u;
};
dm.stringifySvg = Wy;
const hm = (e, t, r) => {
  let n = "";
  r.indentLevel += 1;
  for (const a of e.children)
    a.type === "element" && (n += Zy(a, t, r)), a.type === "text" && (n += Jy(a, t, r)), a.type === "doctype" && (n += Xy(a, t)), a.type === "instruction" && (n += Yy(a, t)), a.type === "comment" && (n += Ky(a, t)), a.type === "cdata" && (n += Qy(a, t, r));
  return r.indentLevel -= 1, n;
}, Pn = (e, t) => {
  let r = "";
  return e.pretty && t.textContext == null && (r = t.indent.repeat(t.indentLevel - 1)), r;
}, Xy = (e, t) => t.doctypeStart + e.data.doctype + t.doctypeEnd, Yy = (e, t) => t.procInstStart + e.name + " " + e.value + t.procInstEnd, Ky = (e, t) => t.commentStart + e.value + t.commentEnd, Qy = (e, t, r) => Pn(t, r) + t.cdataStart + e.value + t.cdataEnd, Zy = (e, t, r) => {
  if (e.children.length === 0)
    return t.useShortTags ? Pn(t, r) + t.tagShortStart + e.name + sl(e, t) + t.tagShortEnd : Pn(t, r) + t.tagShortStart + e.name + sl(e, t) + t.tagOpenEnd + t.tagCloseStart + e.name + t.tagCloseEnd;
  {
    let n = t.tagOpenStart, a = t.tagOpenEnd, i = t.tagCloseStart, s = t.tagCloseEnd, u = Pn(t, r), l = Pn(t, r);
    r.textContext ? (n = $r.tagOpenStart, a = $r.tagOpenEnd, i = $r.tagCloseStart, s = $r.tagCloseEnd, u = "") : Gy.has(e.name) && (a = $r.tagOpenEnd, i = $r.tagCloseStart, l = "", r.textContext = e);
    const o = hm(e, t, r);
    return r.textContext === e && (r.textContext = null), u + n + e.name + sl(e, t) + a + o + l + i + e.name + s;
  }
}, sl = (e, t) => {
  let r = "";
  for (const [n, a] of Object.entries(e.attributes))
    if (a !== void 0) {
      const i = a.toString().replace(t.regValEntities, t.encodeEntity);
      r += " " + n + t.attrStart + i + t.attrEnd;
    } else
      r += " " + n;
  return r;
}, Jy = (e, t, r) => Pn(t, r) + t.textStart + e.value.replace(t.regEntities, t.encodeEntity) + (r.textContext ? "" : t.textEnd);
var pm = {}, Jo = {}, ne = {}, mm = {}, gm = {}, rt = {}, Br = {}, Ji = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
  var t;
  (function(n) {
    n.Root = "root", n.Text = "text", n.Directive = "directive", n.Comment = "comment", n.Script = "script", n.Style = "style", n.Tag = "tag", n.CDATA = "cdata", n.Doctype = "doctype";
  })(t = e.ElementType || (e.ElementType = {}));
  function r(n) {
    return n.type === t.Tag || n.type === t.Script || n.type === t.Style;
  }
  e.isTag = r, e.Root = t.Root, e.Text = t.Text, e.Directive = t.Directive, e.Comment = t.Comment, e.Script = t.Script, e.Style = t.Style, e.Tag = t.Tag, e.CDATA = t.CDATA, e.Doctype = t.Doctype;
})(Ji);
var re = {}, yr = V && V.__extends || /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Ui = V && V.__assign || function() {
  return Ui = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Ui.apply(this, arguments);
};
Object.defineProperty(re, "__esModule", { value: !0 });
re.cloneNode = re.hasChildren = re.isDocument = re.isDirective = re.isComment = re.isText = re.isCDATA = re.isTag = re.Element = re.Document = re.CDATA = re.NodeWithChildren = re.ProcessingInstruction = re.Comment = re.Text = re.DataNode = re.Node = void 0;
var Ke = Ji, uf = (
  /** @class */
  function() {
    function e() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(e.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(t) {
        this.parent = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(t) {
        this.prev = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(t) {
        this.next = t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.cloneNode = function(t) {
      return t === void 0 && (t = !1), lf(this, t);
    }, e;
  }()
);
re.Node = uf;
var eu = (
  /** @class */
  function(e) {
    yr(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n.data = r, n;
    }
    return Object.defineProperty(t.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(r) {
        this.data = r;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(uf)
);
re.DataNode = eu;
var bm = (
  /** @class */
  function(e) {
    yr(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = Ke.ElementType.Text, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(eu)
);
re.Text = bm;
var ym = (
  /** @class */
  function(e) {
    yr(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = Ke.ElementType.Comment, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(eu)
);
re.Comment = ym;
var vm = (
  /** @class */
  function(e) {
    yr(t, e);
    function t(r, n) {
      var a = e.call(this, n) || this;
      return a.name = r, a.type = Ke.ElementType.Directive, a;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(eu)
);
re.ProcessingInstruction = vm;
var tu = (
  /** @class */
  function(e) {
    yr(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n.children = r, n;
    }
    return Object.defineProperty(t.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var r;
        return (r = this.children[0]) !== null && r !== void 0 ? r : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(r) {
        this.children = r;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(uf)
);
re.NodeWithChildren = tu;
var xm = (
  /** @class */
  function(e) {
    yr(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = Ke.ElementType.CDATA, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(tu)
);
re.CDATA = xm;
var km = (
  /** @class */
  function(e) {
    yr(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = Ke.ElementType.Root, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(tu)
);
re.Document = km;
var wm = (
  /** @class */
  function(e) {
    yr(t, e);
    function t(r, n, a, i) {
      a === void 0 && (a = []), i === void 0 && (i = r === "script" ? Ke.ElementType.Script : r === "style" ? Ke.ElementType.Style : Ke.ElementType.Tag);
      var s = e.call(this, a) || this;
      return s.name = r, s.attribs = n, s.type = i, s;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(r) {
        this.name = r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "attributes", {
      get: function() {
        var r = this;
        return Object.keys(this.attribs).map(function(n) {
          var a, i;
          return {
            name: n,
            value: r.attribs[n],
            namespace: (a = r["x-attribsNamespace"]) === null || a === void 0 ? void 0 : a[n],
            prefix: (i = r["x-attribsPrefix"]) === null || i === void 0 ? void 0 : i[n]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(tu)
);
re.Element = wm;
function Sm(e) {
  return (0, Ke.isTag)(e);
}
re.isTag = Sm;
function Cm(e) {
  return e.type === Ke.ElementType.CDATA;
}
re.isCDATA = Cm;
function $m(e) {
  return e.type === Ke.ElementType.Text;
}
re.isText = $m;
function Am(e) {
  return e.type === Ke.ElementType.Comment;
}
re.isComment = Am;
function Em(e) {
  return e.type === Ke.ElementType.Directive;
}
re.isDirective = Em;
function Tm(e) {
  return e.type === Ke.ElementType.Root;
}
re.isDocument = Tm;
function ev(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
re.hasChildren = ev;
function lf(e, t) {
  t === void 0 && (t = !1);
  var r;
  if ($m(e))
    r = new bm(e.data);
  else if (Am(e))
    r = new ym(e.data);
  else if (Sm(e)) {
    var n = t ? ol(e.children) : [], a = new wm(e.name, Ui({}, e.attribs), n);
    n.forEach(function(l) {
      return l.parent = a;
    }), e.namespace != null && (a.namespace = e.namespace), e["x-attribsNamespace"] && (a["x-attribsNamespace"] = Ui({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a["x-attribsPrefix"] = Ui({}, e["x-attribsPrefix"])), r = a;
  } else if (Cm(e)) {
    var n = t ? ol(e.children) : [], i = new xm(n);
    n.forEach(function(o) {
      return o.parent = i;
    }), r = i;
  } else if (Tm(e)) {
    var n = t ? ol(e.children) : [], s = new km(n);
    n.forEach(function(o) {
      return o.parent = s;
    }), e["x-mode"] && (s["x-mode"] = e["x-mode"]), r = s;
  } else if (Em(e)) {
    var u = new vm(e.name, e.data);
    e["x-name"] != null && (u["x-name"] = e["x-name"], u["x-publicId"] = e["x-publicId"], u["x-systemId"] = e["x-systemId"]), r = u;
  } else
    throw new Error("Not implemented yet: ".concat(e.type));
  return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r;
}
re.cloneNode = lf;
function ol(e) {
  for (var t = e.map(function(n) {
    return lf(n, !0);
  }), r = 1; r < t.length; r++)
    t[r].prev = t[r - 1], t[r - 1].next = t[r];
  return t;
}
(function(e) {
  var t = V && V.__createBinding || (Object.create ? function(u, l, o, c) {
    c === void 0 && (c = o);
    var f = Object.getOwnPropertyDescriptor(l, o);
    (!f || ("get" in f ? !l.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
      return l[o];
    } }), Object.defineProperty(u, c, f);
  } : function(u, l, o, c) {
    c === void 0 && (c = o), u[c] = l[o];
  }), r = V && V.__exportStar || function(u, l) {
    for (var o in u) o !== "default" && !Object.prototype.hasOwnProperty.call(l, o) && t(l, u, o);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
  var n = Ji, a = re;
  r(re, e);
  var i = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, s = (
    /** @class */
    function() {
      function u(l, o, c) {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof o == "function" && (c = o, o = i), typeof l == "object" && (o = l, l = void 0), this.callback = l ?? null, this.options = o ?? i, this.elementCB = c ?? null;
      }
      return u.prototype.onparserinit = function(l) {
        this.parser = l;
      }, u.prototype.onreset = function() {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, u.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, u.prototype.onerror = function(l) {
        this.handleCallback(l);
      }, u.prototype.onclosetag = function() {
        this.lastNode = null;
        var l = this.tagStack.pop();
        this.options.withEndIndices && (l.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(l);
      }, u.prototype.onopentag = function(l, o) {
        var c = this.options.xmlMode ? n.ElementType.Tag : void 0, f = new a.Element(l, o, void 0, c);
        this.addNode(f), this.tagStack.push(f);
      }, u.prototype.ontext = function(l) {
        var o = this.lastNode;
        if (o && o.type === n.ElementType.Text)
          o.data += l, this.options.withEndIndices && (o.endIndex = this.parser.endIndex);
        else {
          var c = new a.Text(l);
          this.addNode(c), this.lastNode = c;
        }
      }, u.prototype.oncomment = function(l) {
        if (this.lastNode && this.lastNode.type === n.ElementType.Comment) {
          this.lastNode.data += l;
          return;
        }
        var o = new a.Comment(l);
        this.addNode(o), this.lastNode = o;
      }, u.prototype.oncommentend = function() {
        this.lastNode = null;
      }, u.prototype.oncdatastart = function() {
        var l = new a.Text(""), o = new a.CDATA([l]);
        this.addNode(o), l.parent = o, this.lastNode = l;
      }, u.prototype.oncdataend = function() {
        this.lastNode = null;
      }, u.prototype.onprocessinginstruction = function(l, o) {
        var c = new a.ProcessingInstruction(l, o);
        this.addNode(c);
      }, u.prototype.handleCallback = function(l) {
        if (typeof this.callback == "function")
          this.callback(l, this.dom);
        else if (l)
          throw l;
      }, u.prototype.addNode = function(l) {
        var o = this.tagStack[this.tagStack.length - 1], c = o.children[o.children.length - 1];
        this.options.withStartIndices && (l.startIndex = this.parser.startIndex), this.options.withEndIndices && (l.endIndex = this.parser.endIndex), o.children.push(l), c && (l.prev = c, c.next = l), l.parent = o, this.lastNode = null;
      }, u;
    }()
  );
  e.DomHandler = s, e.default = s;
})(Br);
var es = {}, Pm = {}, dc = {}, cf = {};
Object.defineProperty(cf, "__esModule", { value: !0 });
cf.default = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var ff = {};
Object.defineProperty(ff, "__esModule", { value: !0 });
ff.default = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var hc = {};
(function(e) {
  var t;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.replaceCodePoint = e.fromCodePoint = void 0;
  var r = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  e.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (t = String.fromCodePoint) !== null && t !== void 0 ? t : function(i) {
    var s = "";
    return i > 65535 && (i -= 65536, s += String.fromCharCode(i >>> 10 & 1023 | 55296), i = 56320 | i & 1023), s += String.fromCharCode(i), s;
  };
  function n(i) {
    var s;
    return i >= 55296 && i <= 57343 || i > 1114111 ? 65533 : (s = r.get(i)) !== null && s !== void 0 ? s : i;
  }
  e.replaceCodePoint = n;
  function a(i) {
    return (0, e.fromCodePoint)(n(i));
  }
  e.default = a;
})(hc);
(function(e) {
  var t = V && V.__createBinding || (Object.create ? function(v, O, N, H) {
    H === void 0 && (H = N);
    var q = Object.getOwnPropertyDescriptor(O, N);
    (!q || ("get" in q ? !O.__esModule : q.writable || q.configurable)) && (q = { enumerable: !0, get: function() {
      return O[N];
    } }), Object.defineProperty(v, H, q);
  } : function(v, O, N, H) {
    H === void 0 && (H = N), v[H] = O[N];
  }), r = V && V.__setModuleDefault || (Object.create ? function(v, O) {
    Object.defineProperty(v, "default", { enumerable: !0, value: O });
  } : function(v, O) {
    v.default = O;
  }), n = V && V.__importStar || function(v) {
    if (v && v.__esModule) return v;
    var O = {};
    if (v != null) for (var N in v) N !== "default" && Object.prototype.hasOwnProperty.call(v, N) && t(O, v, N);
    return r(O, v), O;
  }, a = V && V.__importDefault || function(v) {
    return v && v.__esModule ? v : { default: v };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXML = e.decodeHTMLStrict = e.decodeHTMLAttribute = e.decodeHTML = e.determineBranch = e.EntityDecoder = e.DecodingMode = e.BinTrieFlags = e.fromCodePoint = e.replaceCodePoint = e.decodeCodePoint = e.xmlDecodeTree = e.htmlDecodeTree = void 0;
  var i = a(cf);
  e.htmlDecodeTree = i.default;
  var s = a(ff);
  e.xmlDecodeTree = s.default;
  var u = n(hc);
  e.decodeCodePoint = u.default;
  var l = hc;
  Object.defineProperty(e, "replaceCodePoint", { enumerable: !0, get: function() {
    return l.replaceCodePoint;
  } }), Object.defineProperty(e, "fromCodePoint", { enumerable: !0, get: function() {
    return l.fromCodePoint;
  } });
  var o;
  (function(v) {
    v[v.NUM = 35] = "NUM", v[v.SEMI = 59] = "SEMI", v[v.EQUALS = 61] = "EQUALS", v[v.ZERO = 48] = "ZERO", v[v.NINE = 57] = "NINE", v[v.LOWER_A = 97] = "LOWER_A", v[v.LOWER_F = 102] = "LOWER_F", v[v.LOWER_X = 120] = "LOWER_X", v[v.LOWER_Z = 122] = "LOWER_Z", v[v.UPPER_A = 65] = "UPPER_A", v[v.UPPER_F = 70] = "UPPER_F", v[v.UPPER_Z = 90] = "UPPER_Z";
  })(o || (o = {}));
  var c = 32, f;
  (function(v) {
    v[v.VALUE_LENGTH = 49152] = "VALUE_LENGTH", v[v.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", v[v.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(f = e.BinTrieFlags || (e.BinTrieFlags = {}));
  function d(v) {
    return v >= o.ZERO && v <= o.NINE;
  }
  function h(v) {
    return v >= o.UPPER_A && v <= o.UPPER_F || v >= o.LOWER_A && v <= o.LOWER_F;
  }
  function p(v) {
    return v >= o.UPPER_A && v <= o.UPPER_Z || v >= o.LOWER_A && v <= o.LOWER_Z || d(v);
  }
  function g(v) {
    return v === o.EQUALS || p(v);
  }
  var x;
  (function(v) {
    v[v.EntityStart = 0] = "EntityStart", v[v.NumericStart = 1] = "NumericStart", v[v.NumericDecimal = 2] = "NumericDecimal", v[v.NumericHex = 3] = "NumericHex", v[v.NamedEntity = 4] = "NamedEntity";
  })(x || (x = {}));
  var C;
  (function(v) {
    v[v.Legacy = 0] = "Legacy", v[v.Strict = 1] = "Strict", v[v.Attribute = 2] = "Attribute";
  })(C = e.DecodingMode || (e.DecodingMode = {}));
  var S = (
    /** @class */
    function() {
      function v(O, N, H) {
        this.decodeTree = O, this.emitCodePoint = N, this.errors = H, this.state = x.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = C.Strict;
      }
      return v.prototype.startEntity = function(O) {
        this.decodeMode = O, this.state = x.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, v.prototype.write = function(O, N) {
        switch (this.state) {
          case x.EntityStart:
            return O.charCodeAt(N) === o.NUM ? (this.state = x.NumericStart, this.consumed += 1, this.stateNumericStart(O, N + 1)) : (this.state = x.NamedEntity, this.stateNamedEntity(O, N));
          case x.NumericStart:
            return this.stateNumericStart(O, N);
          case x.NumericDecimal:
            return this.stateNumericDecimal(O, N);
          case x.NumericHex:
            return this.stateNumericHex(O, N);
          case x.NamedEntity:
            return this.stateNamedEntity(O, N);
        }
      }, v.prototype.stateNumericStart = function(O, N) {
        return N >= O.length ? -1 : (O.charCodeAt(N) | c) === o.LOWER_X ? (this.state = x.NumericHex, this.consumed += 1, this.stateNumericHex(O, N + 1)) : (this.state = x.NumericDecimal, this.stateNumericDecimal(O, N));
      }, v.prototype.addToNumericResult = function(O, N, H, q) {
        if (N !== H) {
          var te = H - N;
          this.result = this.result * Math.pow(q, te) + parseInt(O.substr(N, te), q), this.consumed += te;
        }
      }, v.prototype.stateNumericHex = function(O, N) {
        for (var H = N; N < O.length; ) {
          var q = O.charCodeAt(N);
          if (d(q) || h(q))
            N += 1;
          else
            return this.addToNumericResult(O, H, N, 16), this.emitNumericEntity(q, 3);
        }
        return this.addToNumericResult(O, H, N, 16), -1;
      }, v.prototype.stateNumericDecimal = function(O, N) {
        for (var H = N; N < O.length; ) {
          var q = O.charCodeAt(N);
          if (d(q))
            N += 1;
          else
            return this.addToNumericResult(O, H, N, 10), this.emitNumericEntity(q, 2);
        }
        return this.addToNumericResult(O, H, N, 10), -1;
      }, v.prototype.emitNumericEntity = function(O, N) {
        var H;
        if (this.consumed <= N)
          return (H = this.errors) === null || H === void 0 || H.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (O === o.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === C.Strict)
          return 0;
        return this.emitCodePoint((0, u.replaceCodePoint)(this.result), this.consumed), this.errors && (O !== o.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, v.prototype.stateNamedEntity = function(O, N) {
        for (var H = this.decodeTree, q = H[this.treeIndex], te = (q & f.VALUE_LENGTH) >> 14; N < O.length; N++, this.excess++) {
          var J = O.charCodeAt(N);
          if (this.treeIndex = T(H, q, this.treeIndex + Math.max(1, te), J), this.treeIndex < 0)
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === C.Attribute && // We shouldn't have consumed any characters after the entity,
            (te === 0 || // And there should be no invalid characters.
            g(J)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (q = H[this.treeIndex], te = (q & f.VALUE_LENGTH) >> 14, te !== 0) {
            if (J === o.SEMI)
              return this.emitNamedEntityData(this.treeIndex, te, this.consumed + this.excess);
            this.decodeMode !== C.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, v.prototype.emitNotTerminatedNamedEntity = function() {
        var O, N = this, H = N.result, q = N.decodeTree, te = (q[H] & f.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(H, te, this.consumed), (O = this.errors) === null || O === void 0 || O.missingSemicolonAfterCharacterReference(), this.consumed;
      }, v.prototype.emitNamedEntityData = function(O, N, H) {
        var q = this.decodeTree;
        return this.emitCodePoint(N === 1 ? q[O] & ~f.VALUE_LENGTH : q[O + 1], H), N === 3 && this.emitCodePoint(q[O + 2], H), H;
      }, v.prototype.end = function() {
        var O;
        switch (this.state) {
          case x.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== C.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case x.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case x.NumericHex:
            return this.emitNumericEntity(0, 3);
          case x.NumericStart:
            return (O = this.errors) === null || O === void 0 || O.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case x.EntityStart:
            return 0;
        }
      }, v;
    }()
  );
  e.EntityDecoder = S;
  function P(v) {
    var O = "", N = new S(v, function(H) {
      return O += (0, u.fromCodePoint)(H);
    });
    return function(q, te) {
      for (var J = 0, ge = 0; (ge = q.indexOf("&", ge)) >= 0; ) {
        O += q.slice(J, ge), N.startEntity(te);
        var Le = N.write(
          q,
          // Skip the "&"
          ge + 1
        );
        if (Le < 0) {
          J = ge + N.end();
          break;
        }
        J = ge + Le, ge = Le === 0 ? J + 1 : J;
      }
      var Ne = O + q.slice(J);
      return O = "", Ne;
    };
  }
  function T(v, O, N, H) {
    var q = (O & f.BRANCH_LENGTH) >> 7, te = O & f.JUMP_TABLE;
    if (q === 0)
      return te !== 0 && H === te ? N : -1;
    if (te) {
      var J = H - te;
      return J < 0 || J >= q ? -1 : v[N + J] - 1;
    }
    for (var ge = N, Le = ge + q - 1; ge <= Le; ) {
      var Ne = ge + Le >>> 1, ce = v[Ne];
      if (ce < H)
        ge = Ne + 1;
      else if (ce > H)
        Le = Ne - 1;
      else
        return v[Ne + q];
    }
    return -1;
  }
  e.determineBranch = T;
  var y = P(i.default), D = P(s.default);
  function I(v, O) {
    return O === void 0 && (O = C.Legacy), y(v, O);
  }
  e.decodeHTML = I;
  function k(v) {
    return y(v, C.Attribute);
  }
  e.decodeHTMLAttribute = k;
  function w(v) {
    return y(v, C.Strict);
  }
  e.decodeHTMLStrict = w;
  function L(v) {
    return D(v, C.Strict);
  }
  e.decodeXML = L;
})(dc);
var Fr = {}, df = {};
Object.defineProperty(df, "__esModule", { value: !0 });
function Ys(e) {
  for (var t = 1; t < e.length; t++)
    e[t][0] += e[t - 1][0] + 1;
  return e;
}
df.default = new Map(/* @__PURE__ */ Ys([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ Ys([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ Ys([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ Ys([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var No = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.getCodePoint = e.xmlReplacer = void 0, e.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var t = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  e.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? function(a, i) {
    return a.codePointAt(i);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(a, i) {
      return (a.charCodeAt(i) & 64512) === 55296 ? (a.charCodeAt(i) - 55296) * 1024 + a.charCodeAt(i + 1) - 56320 + 65536 : a.charCodeAt(i);
    }
  );
  function r(a) {
    for (var i = "", s = 0, u; (u = e.xmlReplacer.exec(a)) !== null; ) {
      var l = u.index, o = a.charCodeAt(l), c = t.get(o);
      c !== void 0 ? (i += a.substring(s, l) + c, s = l + 1) : (i += "".concat(a.substring(s, l), "&#x").concat((0, e.getCodePoint)(a, l).toString(16), ";"), s = e.xmlReplacer.lastIndex += +((o & 64512) === 55296));
    }
    return i + a.substr(s);
  }
  e.encodeXML = r, e.escape = r;
  function n(a, i) {
    return function(u) {
      for (var l, o = 0, c = ""; l = a.exec(u); )
        o !== l.index && (c += u.substring(o, l.index)), c += i.get(l[0].charCodeAt(0)), o = l.index + 1;
      return c + u.substring(o);
    };
  }
  e.escapeUTF8 = n(/[&<>'"]/g, t), e.escapeAttribute = n(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ])), e.escapeText = n(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));
})(No);
var tv = V && V.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.encodeNonAsciiHTML = Fr.encodeHTML = void 0;
var rv = tv(df), Lm = No, nv = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function av(e) {
  return Nm(nv, e);
}
Fr.encodeHTML = av;
function iv(e) {
  return Nm(Lm.xmlReplacer, e);
}
Fr.encodeNonAsciiHTML = iv;
function Nm(e, t) {
  for (var r = "", n = 0, a; (a = e.exec(t)) !== null; ) {
    var i = a.index;
    r += t.substring(n, i);
    var s = t.charCodeAt(i), u = rv.default.get(s);
    if (typeof u == "object") {
      if (i + 1 < t.length) {
        var l = t.charCodeAt(i + 1), o = typeof u.n == "number" ? u.n === l ? u.o : void 0 : u.n.get(l);
        if (o !== void 0) {
          r += o, n = e.lastIndex += 1;
          continue;
        }
      }
      u = u.v;
    }
    if (u !== void 0)
      r += u, n = i + 1;
    else {
      var c = (0, Lm.getCodePoint)(t, i);
      r += "&#x".concat(c.toString(16), ";"), n = e.lastIndex += +(c !== s);
    }
  }
  return r + t.substr(n);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXMLStrict = e.decodeHTML5Strict = e.decodeHTML4Strict = e.decodeHTML5 = e.decodeHTML4 = e.decodeHTMLAttribute = e.decodeHTMLStrict = e.decodeHTML = e.decodeXML = e.DecodingMode = e.EntityDecoder = e.encodeHTML5 = e.encodeHTML4 = e.encodeNonAsciiHTML = e.encodeHTML = e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.encode = e.decodeStrict = e.decode = e.EncodingMode = e.EntityLevel = void 0;
  var t = dc, r = Fr, n = No, a;
  (function(d) {
    d[d.XML = 0] = "XML", d[d.HTML = 1] = "HTML";
  })(a = e.EntityLevel || (e.EntityLevel = {}));
  var i;
  (function(d) {
    d[d.UTF8 = 0] = "UTF8", d[d.ASCII = 1] = "ASCII", d[d.Extensive = 2] = "Extensive", d[d.Attribute = 3] = "Attribute", d[d.Text = 4] = "Text";
  })(i = e.EncodingMode || (e.EncodingMode = {}));
  function s(d, h) {
    h === void 0 && (h = a.XML);
    var p = typeof h == "number" ? h : h.level;
    if (p === a.HTML) {
      var g = typeof h == "object" ? h.mode : void 0;
      return (0, t.decodeHTML)(d, g);
    }
    return (0, t.decodeXML)(d);
  }
  e.decode = s;
  function u(d, h) {
    var p;
    h === void 0 && (h = a.XML);
    var g = typeof h == "number" ? { level: h } : h;
    return (p = g.mode) !== null && p !== void 0 || (g.mode = t.DecodingMode.Strict), s(d, g);
  }
  e.decodeStrict = u;
  function l(d, h) {
    h === void 0 && (h = a.XML);
    var p = typeof h == "number" ? { level: h } : h;
    return p.mode === i.UTF8 ? (0, n.escapeUTF8)(d) : p.mode === i.Attribute ? (0, n.escapeAttribute)(d) : p.mode === i.Text ? (0, n.escapeText)(d) : p.level === a.HTML ? p.mode === i.ASCII ? (0, r.encodeNonAsciiHTML)(d) : (0, r.encodeHTML)(d) : (0, n.encodeXML)(d);
  }
  e.encode = l;
  var o = No;
  Object.defineProperty(e, "encodeXML", { enumerable: !0, get: function() {
    return o.encodeXML;
  } }), Object.defineProperty(e, "escape", { enumerable: !0, get: function() {
    return o.escape;
  } }), Object.defineProperty(e, "escapeUTF8", { enumerable: !0, get: function() {
    return o.escapeUTF8;
  } }), Object.defineProperty(e, "escapeAttribute", { enumerable: !0, get: function() {
    return o.escapeAttribute;
  } }), Object.defineProperty(e, "escapeText", { enumerable: !0, get: function() {
    return o.escapeText;
  } });
  var c = Fr;
  Object.defineProperty(e, "encodeHTML", { enumerable: !0, get: function() {
    return c.encodeHTML;
  } }), Object.defineProperty(e, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return c.encodeNonAsciiHTML;
  } }), Object.defineProperty(e, "encodeHTML4", { enumerable: !0, get: function() {
    return c.encodeHTML;
  } }), Object.defineProperty(e, "encodeHTML5", { enumerable: !0, get: function() {
    return c.encodeHTML;
  } });
  var f = dc;
  Object.defineProperty(e, "EntityDecoder", { enumerable: !0, get: function() {
    return f.EntityDecoder;
  } }), Object.defineProperty(e, "DecodingMode", { enumerable: !0, get: function() {
    return f.DecodingMode;
  } }), Object.defineProperty(e, "decodeXML", { enumerable: !0, get: function() {
    return f.decodeXML;
  } }), Object.defineProperty(e, "decodeHTML", { enumerable: !0, get: function() {
    return f.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return f.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTMLAttribute", { enumerable: !0, get: function() {
    return f.decodeHTMLAttribute;
  } }), Object.defineProperty(e, "decodeHTML4", { enumerable: !0, get: function() {
    return f.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML5", { enumerable: !0, get: function() {
    return f.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return f.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return f.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeXMLStrict", { enumerable: !0, get: function() {
    return f.decodeXML;
  } });
})(Pm);
var Fn = {};
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.attributeNames = Fn.elementNames = void 0;
Fn.elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map(function(e) {
  return [e.toLowerCase(), e];
}));
Fn.attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map(function(e) {
  return [e.toLowerCase(), e];
}));
var Ln = V && V.__assign || function() {
  return Ln = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Ln.apply(this, arguments);
}, sv = V && V.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var a = Object.getOwnPropertyDescriptor(t, r);
  (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, a);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), ov = V && V.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), uv = V && V.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r in e) r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && sv(t, e, r);
  return ov(t, e), t;
};
Object.defineProperty(es, "__esModule", { value: !0 });
es.render = void 0;
var Xt = uv(Ji), Do = Pm, Dm = Fn, lv = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function cv(e) {
  return e.replace(/"/g, "&quot;");
}
function fv(e, t) {
  var r;
  if (e) {
    var n = ((r = t.encodeEntities) !== null && r !== void 0 ? r : t.decodeEntities) === !1 ? cv : t.xmlMode || t.encodeEntities !== "utf8" ? Do.encodeXML : Do.escapeAttribute;
    return Object.keys(e).map(function(a) {
      var i, s, u = (i = e[a]) !== null && i !== void 0 ? i : "";
      return t.xmlMode === "foreign" && (a = (s = Dm.attributeNames.get(a)) !== null && s !== void 0 ? s : a), !t.emptyAttrs && !t.xmlMode && u === "" ? a : "".concat(a, '="').concat(n(u), '"');
    }).join(" ");
  }
}
var Id = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function ru(e, t) {
  t === void 0 && (t = {});
  for (var r = ("length" in e) ? e : [e], n = "", a = 0; a < r.length; a++)
    n += dv(r[a], t);
  return n;
}
es.render = ru;
es.default = ru;
function dv(e, t) {
  switch (e.type) {
    case Xt.Root:
      return ru(e.children, t);
    case Xt.Doctype:
    case Xt.Directive:
      return gv(e);
    case Xt.Comment:
      return vv(e);
    case Xt.CDATA:
      return yv(e);
    case Xt.Script:
    case Xt.Style:
    case Xt.Tag:
      return mv(e, t);
    case Xt.Text:
      return bv(e, t);
  }
}
var hv = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), pv = /* @__PURE__ */ new Set(["svg", "math"]);
function mv(e, t) {
  var r;
  t.xmlMode === "foreign" && (e.name = (r = Dm.elementNames.get(e.name)) !== null && r !== void 0 ? r : e.name, e.parent && hv.has(e.parent.name) && (t = Ln(Ln({}, t), { xmlMode: !1 }))), !t.xmlMode && pv.has(e.name) && (t = Ln(Ln({}, t), { xmlMode: "foreign" }));
  var n = "<".concat(e.name), a = fv(e.attribs, t);
  return a && (n += " ".concat(a)), e.children.length === 0 && (t.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    t.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    t.selfClosingTags && Id.has(e.name)
  )) ? (t.xmlMode || (n += " "), n += "/>") : (n += ">", e.children.length > 0 && (n += ru(e.children, t)), (t.xmlMode || !Id.has(e.name)) && (n += "</".concat(e.name, ">"))), n;
}
function gv(e) {
  return "<".concat(e.data, ">");
}
function bv(e, t) {
  var r, n = e.data || "";
  return ((r = t.encodeEntities) !== null && r !== void 0 ? r : t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && lv.has(e.parent.name)) && (n = t.xmlMode || t.encodeEntities !== "utf8" ? (0, Do.encodeXML)(n) : (0, Do.escapeText)(n)), n;
}
function yv(e) {
  return "<![CDATA[".concat(e.children[0].data, "]]>");
}
function vv(e) {
  return "<!--".concat(e.data, "-->");
}
var xv = V && V.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.innerText = rt.textContent = rt.getText = rt.getInnerHTML = rt.getOuterHTML = void 0;
var Ht = Br, kv = xv(es), wv = Ji;
function Om(e, t) {
  return (0, kv.default)(e, t);
}
rt.getOuterHTML = Om;
function Sv(e, t) {
  return (0, Ht.hasChildren)(e) ? e.children.map(function(r) {
    return Om(r, t);
  }).join("") : "";
}
rt.getInnerHTML = Sv;
function mo(e) {
  return Array.isArray(e) ? e.map(mo).join("") : (0, Ht.isTag)(e) ? e.name === "br" ? `
` : mo(e.children) : (0, Ht.isCDATA)(e) ? mo(e.children) : (0, Ht.isText)(e) ? e.data : "";
}
rt.getText = mo;
function pc(e) {
  return Array.isArray(e) ? e.map(pc).join("") : (0, Ht.hasChildren)(e) && !(0, Ht.isComment)(e) ? pc(e.children) : (0, Ht.isText)(e) ? e.data : "";
}
rt.textContent = pc;
function mc(e) {
  return Array.isArray(e) ? e.map(mc).join("") : (0, Ht.hasChildren)(e) && (e.type === wv.ElementType.Tag || (0, Ht.isCDATA)(e)) ? mc(e.children) : (0, Ht.isText)(e) ? e.data : "";
}
rt.innerText = mc;
var Pe = {};
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.prevElementSibling = Pe.nextElementSibling = Pe.getName = Pe.hasAttrib = Pe.getAttributeValue = Pe.getSiblings = Pe.getParent = Pe.getChildren = void 0;
var hf = Br;
function Mm(e) {
  return (0, hf.hasChildren)(e) ? e.children : [];
}
Pe.getChildren = Mm;
function Im(e) {
  return e.parent || null;
}
Pe.getParent = Im;
function Cv(e) {
  var t, r, n = Im(e);
  if (n != null)
    return Mm(n);
  for (var a = [e], i = e.prev, s = e.next; i != null; )
    a.unshift(i), t = i, i = t.prev;
  for (; s != null; )
    a.push(s), r = s, s = r.next;
  return a;
}
Pe.getSiblings = Cv;
function $v(e, t) {
  var r;
  return (r = e.attribs) === null || r === void 0 ? void 0 : r[t];
}
Pe.getAttributeValue = $v;
function Av(e, t) {
  return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, t) && e.attribs[t] != null;
}
Pe.hasAttrib = Av;
function Ev(e) {
  return e.name;
}
Pe.getName = Ev;
function Tv(e) {
  for (var t, r = e.next; r !== null && !(0, hf.isTag)(r); )
    t = r, r = t.next;
  return r;
}
Pe.nextElementSibling = Tv;
function Pv(e) {
  for (var t, r = e.prev; r !== null && !(0, hf.isTag)(r); )
    t = r, r = t.prev;
  return r;
}
Pe.prevElementSibling = Pv;
var Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.prepend = Ge.prependChild = Ge.append = Ge.appendChild = Ge.replaceElement = Ge.removeElement = void 0;
function ts(e) {
  if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var t = e.parent.children, r = t.lastIndexOf(e);
    r >= 0 && t.splice(r, 1);
  }
  e.next = null, e.prev = null, e.parent = null;
}
Ge.removeElement = ts;
function Lv(e, t) {
  var r = t.prev = e.prev;
  r && (r.next = t);
  var n = t.next = e.next;
  n && (n.prev = t);
  var a = t.parent = e.parent;
  if (a) {
    var i = a.children;
    i[i.lastIndexOf(e)] = t, e.parent = null;
  }
}
Ge.replaceElement = Lv;
function Nv(e, t) {
  if (ts(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
    var r = e.children[e.children.length - 2];
    r.next = t, t.prev = r;
  } else
    t.prev = null;
}
Ge.appendChild = Nv;
function Dv(e, t) {
  ts(t);
  var r = e.parent, n = e.next;
  if (t.next = n, t.prev = e, e.next = t, t.parent = r, n) {
    if (n.prev = t, r) {
      var a = r.children;
      a.splice(a.lastIndexOf(n), 0, t);
    }
  } else r && r.children.push(t);
}
Ge.append = Dv;
function Ov(e, t) {
  if (ts(t), t.parent = e, t.prev = null, e.children.unshift(t) !== 1) {
    var r = e.children[1];
    r.prev = t, t.next = r;
  } else
    t.next = null;
}
Ge.prependChild = Ov;
function Mv(e, t) {
  ts(t);
  var r = e.parent;
  if (r) {
    var n = r.children;
    n.splice(n.indexOf(e), 0, t);
  }
  e.prev && (e.prev.next = t), t.parent = r, t.prev = e.prev, t.next = e, e.prev = t;
}
Ge.prepend = Mv;
var qe = {};
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.findAll = qe.existsOne = qe.findOne = qe.findOneChild = qe.find = qe.filter = void 0;
var nu = Br;
function Iv(e, t, r, n) {
  return r === void 0 && (r = !0), n === void 0 && (n = 1 / 0), Rm(e, Array.isArray(t) ? t : [t], r, n);
}
qe.filter = Iv;
function Rm(e, t, r, n) {
  for (var a = [], i = [t], s = [0]; ; ) {
    if (s[0] >= i[0].length) {
      if (s.length === 1)
        return a;
      i.shift(), s.shift();
      continue;
    }
    var u = i[0][s[0]++];
    if (e(u) && (a.push(u), --n <= 0))
      return a;
    r && (0, nu.hasChildren)(u) && u.children.length > 0 && (s.unshift(0), i.unshift(u.children));
  }
}
qe.find = Rm;
function Rv(e, t) {
  return t.find(e);
}
qe.findOneChild = Rv;
function _m(e, t, r) {
  r === void 0 && (r = !0);
  for (var n = null, a = 0; a < t.length && !n; a++) {
    var i = t[a];
    if ((0, nu.isTag)(i))
      e(i) ? n = i : r && i.children.length > 0 && (n = _m(e, i.children, !0));
    else continue;
  }
  return n;
}
qe.findOne = _m;
function Fm(e, t) {
  return t.some(function(r) {
    return (0, nu.isTag)(r) && (e(r) || Fm(e, r.children));
  });
}
qe.existsOne = Fm;
function _v(e, t) {
  for (var r = [], n = [t], a = [0]; ; ) {
    if (a[0] >= n[0].length) {
      if (n.length === 1)
        return r;
      n.shift(), a.shift();
      continue;
    }
    var i = n[0][a[0]++];
    (0, nu.isTag)(i) && (e(i) && r.push(i), i.children.length > 0 && (a.unshift(0), n.unshift(i.children)));
  }
}
qe.findAll = _v;
var nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.getElementsByTagType = nt.getElementsByTagName = nt.getElementById = nt.getElements = nt.testElement = void 0;
var Dr = Br, au = qe, Oo = {
  tag_name: function(e) {
    return typeof e == "function" ? function(t) {
      return (0, Dr.isTag)(t) && e(t.name);
    } : e === "*" ? Dr.isTag : function(t) {
      return (0, Dr.isTag)(t) && t.name === e;
    };
  },
  tag_type: function(e) {
    return typeof e == "function" ? function(t) {
      return e(t.type);
    } : function(t) {
      return t.type === e;
    };
  },
  tag_contains: function(e) {
    return typeof e == "function" ? function(t) {
      return (0, Dr.isText)(t) && e(t.data);
    } : function(t) {
      return (0, Dr.isText)(t) && t.data === e;
    };
  }
};
function Bm(e, t) {
  return typeof t == "function" ? function(r) {
    return (0, Dr.isTag)(r) && t(r.attribs[e]);
  } : function(r) {
    return (0, Dr.isTag)(r) && r.attribs[e] === t;
  };
}
function Fv(e, t) {
  return function(r) {
    return e(r) || t(r);
  };
}
function qm(e) {
  var t = Object.keys(e).map(function(r) {
    var n = e[r];
    return Object.prototype.hasOwnProperty.call(Oo, r) ? Oo[r](n) : Bm(r, n);
  });
  return t.length === 0 ? null : t.reduce(Fv);
}
function Bv(e, t) {
  var r = qm(e);
  return r ? r(t) : !0;
}
nt.testElement = Bv;
function qv(e, t, r, n) {
  n === void 0 && (n = 1 / 0);
  var a = qm(e);
  return a ? (0, au.filter)(a, t, r, n) : [];
}
nt.getElements = qv;
function Uv(e, t, r) {
  return r === void 0 && (r = !0), Array.isArray(t) || (t = [t]), (0, au.findOne)(Bm("id", e), t, r);
}
nt.getElementById = Uv;
function jv(e, t, r, n) {
  return r === void 0 && (r = !0), n === void 0 && (n = 1 / 0), (0, au.filter)(Oo.tag_name(e), t, r, n);
}
nt.getElementsByTagName = jv;
function zv(e, t, r, n) {
  return r === void 0 && (r = !0), n === void 0 && (n = 1 / 0), (0, au.filter)(Oo.tag_type(e), t, r, n);
}
nt.getElementsByTagType = zv;
var Um = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.uniqueSort = e.compareDocumentPosition = e.DocumentPosition = e.removeSubsets = void 0;
  var t = Br;
  function r(s) {
    for (var u = s.length; --u >= 0; ) {
      var l = s[u];
      if (u > 0 && s.lastIndexOf(l, u - 1) >= 0) {
        s.splice(u, 1);
        continue;
      }
      for (var o = l.parent; o; o = o.parent)
        if (s.includes(o)) {
          s.splice(u, 1);
          break;
        }
    }
    return s;
  }
  e.removeSubsets = r;
  var n;
  (function(s) {
    s[s.DISCONNECTED = 1] = "DISCONNECTED", s[s.PRECEDING = 2] = "PRECEDING", s[s.FOLLOWING = 4] = "FOLLOWING", s[s.CONTAINS = 8] = "CONTAINS", s[s.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(n = e.DocumentPosition || (e.DocumentPosition = {}));
  function a(s, u) {
    var l = [], o = [];
    if (s === u)
      return 0;
    for (var c = (0, t.hasChildren)(s) ? s : s.parent; c; )
      l.unshift(c), c = c.parent;
    for (c = (0, t.hasChildren)(u) ? u : u.parent; c; )
      o.unshift(c), c = c.parent;
    for (var f = Math.min(l.length, o.length), d = 0; d < f && l[d] === o[d]; )
      d++;
    if (d === 0)
      return n.DISCONNECTED;
    var h = l[d - 1], p = h.children, g = l[d], x = o[d];
    return p.indexOf(g) > p.indexOf(x) ? h === u ? n.FOLLOWING | n.CONTAINED_BY : n.FOLLOWING : h === s ? n.PRECEDING | n.CONTAINS : n.PRECEDING;
  }
  e.compareDocumentPosition = a;
  function i(s) {
    return s = s.filter(function(u, l, o) {
      return !o.includes(u, l + 1);
    }), s.sort(function(u, l) {
      var o = a(u, l);
      return o & n.PRECEDING ? -1 : o & n.FOLLOWING ? 1 : 0;
    }), s;
  }
  e.uniqueSort = i;
})(Um);
var iu = {};
Object.defineProperty(iu, "__esModule", { value: !0 });
iu.getFeed = void 0;
var Gv = rt, rs = nt;
function Hv(e) {
  var t = Mo(Kv, e);
  return t ? t.name === "feed" ? Vv(t) : Wv(t) : null;
}
iu.getFeed = Hv;
function Vv(e) {
  var t, r = e.children, n = {
    type: "atom",
    items: (0, rs.getElementsByTagName)("entry", r).map(function(s) {
      var u, l = s.children, o = { media: jm(l) };
      ze(o, "id", "id", l), ze(o, "title", "title", l);
      var c = (u = Mo("link", l)) === null || u === void 0 ? void 0 : u.attribs.href;
      c && (o.link = c);
      var f = fr("summary", l) || fr("content", l);
      f && (o.description = f);
      var d = fr("updated", l);
      return d && (o.pubDate = new Date(d)), o;
    })
  };
  ze(n, "id", "id", r), ze(n, "title", "title", r);
  var a = (t = Mo("link", r)) === null || t === void 0 ? void 0 : t.attribs.href;
  a && (n.link = a), ze(n, "description", "subtitle", r);
  var i = fr("updated", r);
  return i && (n.updated = new Date(i)), ze(n, "author", "email", r, !0), n;
}
function Wv(e) {
  var t, r, n = (r = (t = Mo("channel", e.children)) === null || t === void 0 ? void 0 : t.children) !== null && r !== void 0 ? r : [], a = {
    type: e.name.substr(0, 3),
    id: "",
    items: (0, rs.getElementsByTagName)("item", e.children).map(function(s) {
      var u = s.children, l = { media: jm(u) };
      ze(l, "id", "guid", u), ze(l, "title", "title", u), ze(l, "link", "link", u), ze(l, "description", "description", u);
      var o = fr("pubDate", u) || fr("dc:date", u);
      return o && (l.pubDate = new Date(o)), l;
    })
  };
  ze(a, "title", "title", n), ze(a, "link", "link", n), ze(a, "description", "description", n);
  var i = fr("lastBuildDate", n);
  return i && (a.updated = new Date(i)), ze(a, "author", "managingEditor", n, !0), a;
}
var Xv = ["url", "type", "lang"], Yv = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function jm(e) {
  return (0, rs.getElementsByTagName)("media:content", e).map(function(t) {
    for (var r = t.attribs, n = {
      medium: r.medium,
      isDefault: !!r.isDefault
    }, a = 0, i = Xv; a < i.length; a++) {
      var s = i[a];
      r[s] && (n[s] = r[s]);
    }
    for (var u = 0, l = Yv; u < l.length; u++) {
      var s = l[u];
      r[s] && (n[s] = parseInt(r[s], 10));
    }
    return r.expression && (n.expression = r.expression), n;
  });
}
function Mo(e, t) {
  return (0, rs.getElementsByTagName)(e, t, !0, 1)[0];
}
function fr(e, t, r) {
  return r === void 0 && (r = !1), (0, Gv.textContent)((0, rs.getElementsByTagName)(e, t, r, 1)).trim();
}
function ze(e, t, r, n, a) {
  a === void 0 && (a = !1);
  var i = fr(r, n, a);
  i && (e[t] = i);
}
function Kv(e) {
  return e === "rss" || e === "feed" || e === "rdf:RDF";
}
(function(e) {
  var t = V && V.__createBinding || (Object.create ? function(a, i, s, u) {
    u === void 0 && (u = s);
    var l = Object.getOwnPropertyDescriptor(i, s);
    (!l || ("get" in l ? !i.__esModule : l.writable || l.configurable)) && (l = { enumerable: !0, get: function() {
      return i[s];
    } }), Object.defineProperty(a, u, l);
  } : function(a, i, s, u) {
    u === void 0 && (u = s), a[u] = i[s];
  }), r = V && V.__exportStar || function(a, i) {
    for (var s in a) s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, a, s);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.hasChildren = e.isDocument = e.isComment = e.isText = e.isCDATA = e.isTag = void 0, r(rt, e), r(Pe, e), r(Ge, e), r(qe, e), r(nt, e), r(Um, e), r(iu, e);
  var n = Br;
  Object.defineProperty(e, "isTag", { enumerable: !0, get: function() {
    return n.isTag;
  } }), Object.defineProperty(e, "isCDATA", { enumerable: !0, get: function() {
    return n.isCDATA;
  } }), Object.defineProperty(e, "isText", { enumerable: !0, get: function() {
    return n.isText;
  } }), Object.defineProperty(e, "isComment", { enumerable: !0, get: function() {
    return n.isComment;
  } }), Object.defineProperty(e, "isDocument", { enumerable: !0, get: function() {
    return n.isDocument;
  } }), Object.defineProperty(e, "hasChildren", { enumerable: !0, get: function() {
    return n.hasChildren;
  } });
})(gm);
var Vn = {
  trueFunc: function() {
    return !0;
  },
  falseFunc: function() {
    return !1;
  }
}, br = {}, ae;
(function(e) {
  e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator";
})(ae || (ae = {}));
const Qv = {
  Unknown: null,
  QuirksMode: "quirks",
  IgnoreCase: !0,
  CaseSensitive: !1
};
var ve;
(function(e) {
  e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start";
})(ve || (ve = {}));
const Rd = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Zv = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Jv = /* @__PURE__ */ new Map([
  [126, ve.Element],
  [94, ve.Start],
  [36, ve.End],
  [42, ve.Any],
  [33, ve.Not],
  [124, ve.Hyphen]
]), e2 = /* @__PURE__ */ new Set([
  "has",
  "not",
  "matches",
  "is",
  "where",
  "host",
  "host-context"
]);
function zm(e) {
  switch (e.type) {
    case ae.Adjacent:
    case ae.Child:
    case ae.Descendant:
    case ae.Parent:
    case ae.Sibling:
    case ae.ColumnCombinator:
      return !0;
    default:
      return !1;
  }
}
const t2 = /* @__PURE__ */ new Set(["contains", "icontains"]);
function r2(e, t, r) {
  const n = parseInt(t, 16) - 65536;
  return n !== n || r ? t : n < 0 ? (
    // BMP codepoint
    String.fromCharCode(n + 65536)
  ) : (
    // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
  );
}
function oi(e) {
  return e.replace(Zv, r2);
}
function ul(e) {
  return e === 39 || e === 34;
}
function _d(e) {
  return e === 32 || e === 9 || e === 10 || e === 12 || e === 13;
}
function n2(e) {
  const t = [], r = Gm(t, `${e}`, 0);
  if (r < e.length)
    throw new Error(`Unmatched selector: ${e.slice(r)}`);
  return t;
}
function Gm(e, t, r) {
  let n = [];
  function a(d) {
    const h = t.slice(r + d).match(Rd);
    if (!h)
      throw new Error(`Expected name, found ${t.slice(r)}`);
    const [p] = h;
    return r += d + p.length, oi(p);
  }
  function i(d) {
    for (r += d; r < t.length && _d(t.charCodeAt(r)); )
      r++;
  }
  function s() {
    r += 1;
    const d = r;
    let h = 1;
    for (; h > 0 && r < t.length; r++)
      t.charCodeAt(r) === 40 && !u(r) ? h++ : t.charCodeAt(r) === 41 && !u(r) && h--;
    if (h)
      throw new Error("Parenthesis not matched");
    return oi(t.slice(d, r - 1));
  }
  function u(d) {
    let h = 0;
    for (; t.charCodeAt(--d) === 92; )
      h++;
    return (h & 1) === 1;
  }
  function l() {
    if (n.length > 0 && zm(n[n.length - 1]))
      throw new Error("Did not expect successive traversals.");
  }
  function o(d) {
    if (n.length > 0 && n[n.length - 1].type === ae.Descendant) {
      n[n.length - 1].type = d;
      return;
    }
    l(), n.push({ type: d });
  }
  function c(d, h) {
    n.push({
      type: ae.Attribute,
      name: d,
      action: h,
      value: a(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function f() {
    if (n.length && n[n.length - 1].type === ae.Descendant && n.pop(), n.length === 0)
      throw new Error("Empty sub-selector");
    e.push(n);
  }
  if (i(0), t.length === r)
    return r;
  e: for (; r < t.length; ) {
    const d = t.charCodeAt(r);
    switch (d) {
      case 32:
      case 9:
      case 10:
      case 12:
      case 13: {
        (n.length === 0 || n[0].type !== ae.Descendant) && (l(), n.push({ type: ae.Descendant })), i(1);
        break;
      }
      case 62: {
        o(ae.Child), i(1);
        break;
      }
      case 60: {
        o(ae.Parent), i(1);
        break;
      }
      case 126: {
        o(ae.Sibling), i(1);
        break;
      }
      case 43: {
        o(ae.Adjacent), i(1);
        break;
      }
      case 46: {
        c("class", ve.Element);
        break;
      }
      case 35: {
        c("id", ve.Equals);
        break;
      }
      case 91: {
        i(1);
        let h, p = null;
        t.charCodeAt(r) === 124 ? h = a(1) : t.startsWith("*|", r) ? (p = "*", h = a(2)) : (h = a(0), t.charCodeAt(r) === 124 && t.charCodeAt(r + 1) !== 61 && (p = h, h = a(1))), i(0);
        let g = ve.Exists;
        const x = Jv.get(t.charCodeAt(r));
        if (x) {
          if (g = x, t.charCodeAt(r + 1) !== 61)
            throw new Error("Expected `=`");
          i(2);
        } else t.charCodeAt(r) === 61 && (g = ve.Equals, i(1));
        let C = "", S = null;
        if (g !== "exists") {
          if (ul(t.charCodeAt(r))) {
            const y = t.charCodeAt(r);
            let D = r + 1;
            for (; D < t.length && (t.charCodeAt(D) !== y || u(D)); )
              D += 1;
            if (t.charCodeAt(D) !== y)
              throw new Error("Attribute value didn't end");
            C = oi(t.slice(r + 1, D)), r = D + 1;
          } else {
            const y = r;
            for (; r < t.length && (!_d(t.charCodeAt(r)) && t.charCodeAt(r) !== 93 || u(r)); )
              r += 1;
            C = oi(t.slice(y, r));
          }
          i(0);
          const T = t.charCodeAt(r) | 32;
          T === 115 ? (S = !1, i(1)) : T === 105 && (S = !0, i(1));
        }
        if (t.charCodeAt(r) !== 93)
          throw new Error("Attribute selector didn't terminate");
        r += 1;
        const P = {
          type: ae.Attribute,
          name: h,
          action: g,
          value: C,
          namespace: p,
          ignoreCase: S
        };
        n.push(P);
        break;
      }
      case 58: {
        if (t.charCodeAt(r + 1) === 58) {
          n.push({
            type: ae.PseudoElement,
            name: a(2).toLowerCase(),
            data: t.charCodeAt(r) === 40 ? s() : null
          });
          continue;
        }
        const h = a(1).toLowerCase();
        let p = null;
        if (t.charCodeAt(r) === 40)
          if (e2.has(h)) {
            if (ul(t.charCodeAt(r + 1)))
              throw new Error(`Pseudo-selector ${h} cannot be quoted`);
            if (p = [], r = Gm(p, t, r + 1), t.charCodeAt(r) !== 41)
              throw new Error(`Missing closing parenthesis in :${h} (${t})`);
            r += 1;
          } else {
            if (p = s(), t2.has(h)) {
              const g = p.charCodeAt(0);
              g === p.charCodeAt(p.length - 1) && ul(g) && (p = p.slice(1, -1));
            }
            p = oi(p);
          }
        n.push({ type: ae.Pseudo, name: h, data: p });
        break;
      }
      case 44: {
        f(), n = [], i(1);
        break;
      }
      default: {
        if (t.startsWith("/*", r)) {
          const g = t.indexOf("*/", r + 2);
          if (g < 0)
            throw new Error("Comment was not terminated");
          r = g + 2, n.length === 0 && i(0);
          break;
        }
        let h = null, p;
        if (d === 42)
          r += 1, p = "*";
        else if (d === 124) {
          if (p = "", t.charCodeAt(r + 1) === 124) {
            o(ae.ColumnCombinator), i(2);
            break;
          }
        } else if (Rd.test(t.slice(r)))
          p = a(0);
        else
          break e;
        t.charCodeAt(r) === 124 && t.charCodeAt(r + 1) !== 124 && (h = p, t.charCodeAt(r + 1) === 42 ? (p = "*", r += 2) : p = a(1)), n.push(p === "*" ? { type: ae.Universal, namespace: h } : { type: ae.Tag, name: p, namespace: h });
      }
    }
  }
  return f(), r;
}
const Hm = ["\\", '"'], Vm = [...Hm, "(", ")"], a2 = new Set(Hm.map((e) => e.charCodeAt(0))), Fd = new Set(Vm.map((e) => e.charCodeAt(0))), Nn = new Set([
  ...Vm,
  "~",
  "^",
  "$",
  "*",
  "+",
  "!",
  "|",
  ":",
  "[",
  "]",
  " ",
  "."
].map((e) => e.charCodeAt(0)));
function Wm(e) {
  return e.map((t) => t.map(i2).join("")).join(", ");
}
function i2(e, t, r) {
  switch (e.type) {
    case ae.Child:
      return t === 0 ? "> " : " > ";
    case ae.Parent:
      return t === 0 ? "< " : " < ";
    case ae.Sibling:
      return t === 0 ? "~ " : " ~ ";
    case ae.Adjacent:
      return t === 0 ? "+ " : " + ";
    case ae.Descendant:
      return " ";
    case ae.ColumnCombinator:
      return t === 0 ? "|| " : " || ";
    case ae.Universal:
      return e.namespace === "*" && t + 1 < r.length && "name" in r[t + 1] ? "" : `${Xm(e.namespace)}*`;
    case ae.Tag:
      return Bd(e);
    case ae.PseudoElement:
      return `::${Jt(e.name, Nn)}${e.data === null ? "" : `(${Jt(e.data, Fd)})`}`;
    case ae.Pseudo:
      return `:${Jt(e.name, Nn)}${e.data === null ? "" : `(${typeof e.data == "string" ? Jt(e.data, Fd) : Wm(e.data)})`}`;
    case ae.Attribute: {
      if (e.name === "id" && e.action === ve.Equals && e.ignoreCase === "quirks" && !e.namespace)
        return `#${Jt(e.value, Nn)}`;
      if (e.name === "class" && e.action === ve.Element && e.ignoreCase === "quirks" && !e.namespace)
        return `.${Jt(e.value, Nn)}`;
      const n = Bd(e);
      return e.action === ve.Exists ? `[${n}]` : `[${n}${s2(e.action)}="${Jt(e.value, a2)}"${e.ignoreCase === null ? "" : e.ignoreCase ? " i" : " s"}]`;
    }
  }
}
function s2(e) {
  switch (e) {
    case ve.Equals:
      return "";
    case ve.Element:
      return "~";
    case ve.Start:
      return "^";
    case ve.End:
      return "$";
    case ve.Any:
      return "*";
    case ve.Not:
      return "!";
    case ve.Hyphen:
      return "|";
    case ve.Exists:
      throw new Error("Shouldn't be here");
  }
}
function Bd(e) {
  return `${Xm(e.namespace)}${Jt(e.name, Nn)}`;
}
function Xm(e) {
  return e !== null ? `${e === "*" ? "*" : Jt(e, Nn)}|` : "";
}
function Jt(e, t) {
  let r = 0, n = "";
  for (let a = 0; a < e.length; a++)
    t.has(e.charCodeAt(a)) && (n += `${e.slice(r, a)}\\${e.charAt(a)}`, r = a + 1);
  return n.length > 0 ? n + e.slice(r) : e;
}
const o2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get AttributeAction() {
    return ve;
  },
  IgnoreCaseMode: Qv,
  get SelectorType() {
    return ae;
  },
  isTraversal: zm,
  parse: n2,
  stringify: Wm
}, Symbol.toStringTag, { value: "Module" })), ns = /* @__PURE__ */ um(o2);
var Wn = {};
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.isTraversal = void 0;
var tt = ns, Ym = /* @__PURE__ */ new Map([
  [tt.SelectorType.Universal, 50],
  [tt.SelectorType.Tag, 30],
  [tt.SelectorType.Attribute, 1],
  [tt.SelectorType.Pseudo, 0]
]);
function u2(e) {
  return !Ym.has(e.type);
}
Wn.isTraversal = u2;
var l2 = /* @__PURE__ */ new Map([
  [tt.AttributeAction.Exists, 10],
  [tt.AttributeAction.Equals, 8],
  [tt.AttributeAction.Not, 7],
  [tt.AttributeAction.Start, 6],
  [tt.AttributeAction.End, 6],
  [tt.AttributeAction.Any, 5]
]);
function c2(e) {
  for (var t = e.map(Km), r = 1; r < e.length; r++) {
    var n = t[r];
    if (!(n < 0))
      for (var a = r - 1; a >= 0 && n < t[a]; a--) {
        var i = e[a + 1];
        e[a + 1] = e[a], e[a] = i, t[a + 1] = t[a], t[a] = n;
      }
  }
}
Wn.default = c2;
function Km(e) {
  var t, r, n = (t = Ym.get(e.type)) !== null && t !== void 0 ? t : -1;
  return e.type === tt.SelectorType.Attribute ? (n = (r = l2.get(e.action)) !== null && r !== void 0 ? r : 4, e.action === tt.AttributeAction.Equals && e.name === "id" && (n = 9), e.ignoreCase && (n >>= 1)) : e.type === tt.SelectorType.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? n = 0 : Array.isArray(e.data) ? (n = Math.min.apply(Math, e.data.map(function(a) {
    return Math.min.apply(Math, a.map(Km));
  })), n < 0 && (n = 0)) : n = 2 : n = 3), n;
}
var su = {}, ou = {}, f2 = V && V.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ou, "__esModule", { value: !0 });
ou.attributeRules = void 0;
var Ks = f2(Vn), d2 = /[-[\]{}()*+?.,\\^$|#\s]/g;
function qd(e) {
  return e.replace(d2, "\\$&");
}
var h2 = /* @__PURE__ */ new Set([
  "accept",
  "accept-charset",
  "align",
  "alink",
  "axis",
  "bgcolor",
  "charset",
  "checked",
  "clear",
  "codetype",
  "color",
  "compact",
  "declare",
  "defer",
  "dir",
  "direction",
  "disabled",
  "enctype",
  "face",
  "frame",
  "hreflang",
  "http-equiv",
  "lang",
  "language",
  "link",
  "media",
  "method",
  "multiple",
  "nohref",
  "noresize",
  "noshade",
  "nowrap",
  "readonly",
  "rel",
  "rev",
  "rules",
  "scope",
  "scrolling",
  "selected",
  "shape",
  "target",
  "text",
  "type",
  "valign",
  "valuetype",
  "vlink"
]);
function kr(e, t) {
  return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!t.quirksMode : !t.xmlMode && h2.has(e.name);
}
ou.attributeRules = {
  equals: function(e, t, r) {
    var n = r.adapter, a = t.name, i = t.value;
    return kr(t, r) ? (i = i.toLowerCase(), function(s) {
      var u = n.getAttributeValue(s, a);
      return u != null && u.length === i.length && u.toLowerCase() === i && e(s);
    }) : function(s) {
      return n.getAttributeValue(s, a) === i && e(s);
    };
  },
  hyphen: function(e, t, r) {
    var n = r.adapter, a = t.name, i = t.value, s = i.length;
    return kr(t, r) ? (i = i.toLowerCase(), function(l) {
      var o = n.getAttributeValue(l, a);
      return o != null && (o.length === s || o.charAt(s) === "-") && o.substr(0, s).toLowerCase() === i && e(l);
    }) : function(l) {
      var o = n.getAttributeValue(l, a);
      return o != null && (o.length === s || o.charAt(s) === "-") && o.substr(0, s) === i && e(l);
    };
  },
  element: function(e, t, r) {
    var n = r.adapter, a = t.name, i = t.value;
    if (/\s/.test(i))
      return Ks.default.falseFunc;
    var s = new RegExp("(?:^|\\s)".concat(qd(i), "(?:$|\\s)"), kr(t, r) ? "i" : "");
    return function(l) {
      var o = n.getAttributeValue(l, a);
      return o != null && o.length >= i.length && s.test(o) && e(l);
    };
  },
  exists: function(e, t, r) {
    var n = t.name, a = r.adapter;
    return function(i) {
      return a.hasAttrib(i, n) && e(i);
    };
  },
  start: function(e, t, r) {
    var n = r.adapter, a = t.name, i = t.value, s = i.length;
    return s === 0 ? Ks.default.falseFunc : kr(t, r) ? (i = i.toLowerCase(), function(u) {
      var l = n.getAttributeValue(u, a);
      return l != null && l.length >= s && l.substr(0, s).toLowerCase() === i && e(u);
    }) : function(u) {
      var l;
      return !!(!((l = n.getAttributeValue(u, a)) === null || l === void 0) && l.startsWith(i)) && e(u);
    };
  },
  end: function(e, t, r) {
    var n = r.adapter, a = t.name, i = t.value, s = -i.length;
    return s === 0 ? Ks.default.falseFunc : kr(t, r) ? (i = i.toLowerCase(), function(u) {
      var l;
      return ((l = n.getAttributeValue(u, a)) === null || l === void 0 ? void 0 : l.substr(s).toLowerCase()) === i && e(u);
    }) : function(u) {
      var l;
      return !!(!((l = n.getAttributeValue(u, a)) === null || l === void 0) && l.endsWith(i)) && e(u);
    };
  },
  any: function(e, t, r) {
    var n = r.adapter, a = t.name, i = t.value;
    if (i === "")
      return Ks.default.falseFunc;
    if (kr(t, r)) {
      var s = new RegExp(qd(i), "i");
      return function(l) {
        var o = n.getAttributeValue(l, a);
        return o != null && o.length >= i.length && s.test(o) && e(l);
      };
    }
    return function(u) {
      var l;
      return !!(!((l = n.getAttributeValue(u, a)) === null || l === void 0) && l.includes(i)) && e(u);
    };
  },
  not: function(e, t, r) {
    var n = r.adapter, a = t.name, i = t.value;
    return i === "" ? function(s) {
      return !!n.getAttributeValue(s, a) && e(s);
    } : kr(t, r) ? (i = i.toLowerCase(), function(s) {
      var u = n.getAttributeValue(s, a);
      return (u == null || u.length !== i.length || u.toLowerCase() !== i) && e(s);
    }) : function(s) {
      return n.getAttributeValue(s, a) !== i && e(s);
    };
  }
};
var pf = {}, Qm = {}, Zm = {}, uu = {};
Object.defineProperty(uu, "__esModule", { value: !0 });
uu.parse = void 0;
var p2 = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]), Ud = 48, m2 = 57;
function g2(e) {
  if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0];
  if (e === "odd")
    return [2, 1];
  var t = 0, r = 0, n = i(), a = s();
  if (t < e.length && e.charAt(t) === "n" && (t++, r = n * (a ?? 1), u(), t < e.length ? (n = i(), u(), a = s()) : n = a = 0), a === null || t < e.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(e, "')"));
  return [r, n * a];
  function i() {
    return e.charAt(t) === "-" ? (t++, -1) : (e.charAt(t) === "+" && t++, 1);
  }
  function s() {
    for (var l = t, o = 0; t < e.length && e.charCodeAt(t) >= Ud && e.charCodeAt(t) <= m2; )
      o = o * 10 + (e.charCodeAt(t) - Ud), t++;
    return t === l ? null : o;
  }
  function u() {
    for (; t < e.length && p2.has(e.charCodeAt(t)); )
      t++;
  }
}
uu.parse = g2;
var Bn = {}, b2 = V && V.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Bn, "__esModule", { value: !0 });
Bn.generate = Bn.compile = void 0;
var jd = b2(Vn);
function y2(e) {
  var t = e[0], r = e[1] - 1;
  if (r < 0 && t <= 0)
    return jd.default.falseFunc;
  if (t === -1)
    return function(i) {
      return i <= r;
    };
  if (t === 0)
    return function(i) {
      return i === r;
    };
  if (t === 1)
    return r < 0 ? jd.default.trueFunc : function(i) {
      return i >= r;
    };
  var n = Math.abs(t), a = (r % n + n) % n;
  return t > 1 ? function(i) {
    return i >= r && i % n === a;
  } : function(i) {
    return i <= r && i % n === a;
  };
}
Bn.compile = y2;
function v2(e) {
  var t = e[0], r = e[1] - 1, n = 0;
  if (t < 0) {
    var a = -t, i = (r % a + a) % a;
    return function() {
      var s = i + a * n++;
      return s > r ? null : s;
    };
  }
  return t === 0 ? r < 0 ? (
    // There are no result — always return `null`
    function() {
      return null;
    }
  ) : (
    // Return `b` exactly once
    function() {
      return n++ === 0 ? r : null;
    }
  ) : (r < 0 && (r += t * Math.ceil(-r / t)), function() {
    return t * n++ + r;
  });
}
Bn.generate = v2;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sequence = e.generate = e.compile = e.parse = void 0;
  var t = uu;
  Object.defineProperty(e, "parse", { enumerable: !0, get: function() {
    return t.parse;
  } });
  var r = Bn;
  Object.defineProperty(e, "compile", { enumerable: !0, get: function() {
    return r.compile;
  } }), Object.defineProperty(e, "generate", { enumerable: !0, get: function() {
    return r.generate;
  } });
  function n(i) {
    return (0, r.compile)((0, t.parse)(i));
  }
  e.default = n;
  function a(i) {
    return (0, r.generate)((0, t.parse)(i));
  }
  e.sequence = a;
})(Zm);
(function(e) {
  var t = V && V.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.filters = void 0;
  var r = t(Zm), n = t(Vn);
  function a(s, u) {
    return function(l) {
      var o = u.getParent(l);
      return o != null && u.isTag(o) && s(l);
    };
  }
  e.filters = {
    contains: function(s, u, l) {
      var o = l.adapter;
      return function(f) {
        return s(f) && o.getText(f).includes(u);
      };
    },
    icontains: function(s, u, l) {
      var o = l.adapter, c = u.toLowerCase();
      return function(d) {
        return s(d) && o.getText(d).toLowerCase().includes(c);
      };
    },
    // Location specific methods
    "nth-child": function(s, u, l) {
      var o = l.adapter, c = l.equals, f = (0, r.default)(u);
      return f === n.default.falseFunc ? n.default.falseFunc : f === n.default.trueFunc ? a(s, o) : function(h) {
        for (var p = o.getSiblings(h), g = 0, x = 0; x < p.length && !c(h, p[x]); x++)
          o.isTag(p[x]) && g++;
        return f(g) && s(h);
      };
    },
    "nth-last-child": function(s, u, l) {
      var o = l.adapter, c = l.equals, f = (0, r.default)(u);
      return f === n.default.falseFunc ? n.default.falseFunc : f === n.default.trueFunc ? a(s, o) : function(h) {
        for (var p = o.getSiblings(h), g = 0, x = p.length - 1; x >= 0 && !c(h, p[x]); x--)
          o.isTag(p[x]) && g++;
        return f(g) && s(h);
      };
    },
    "nth-of-type": function(s, u, l) {
      var o = l.adapter, c = l.equals, f = (0, r.default)(u);
      return f === n.default.falseFunc ? n.default.falseFunc : f === n.default.trueFunc ? a(s, o) : function(h) {
        for (var p = o.getSiblings(h), g = 0, x = 0; x < p.length; x++) {
          var C = p[x];
          if (c(h, C))
            break;
          o.isTag(C) && o.getName(C) === o.getName(h) && g++;
        }
        return f(g) && s(h);
      };
    },
    "nth-last-of-type": function(s, u, l) {
      var o = l.adapter, c = l.equals, f = (0, r.default)(u);
      return f === n.default.falseFunc ? n.default.falseFunc : f === n.default.trueFunc ? a(s, o) : function(h) {
        for (var p = o.getSiblings(h), g = 0, x = p.length - 1; x >= 0; x--) {
          var C = p[x];
          if (c(h, C))
            break;
          o.isTag(C) && o.getName(C) === o.getName(h) && g++;
        }
        return f(g) && s(h);
      };
    },
    // TODO determine the actual root element
    root: function(s, u, l) {
      var o = l.adapter;
      return function(c) {
        var f = o.getParent(c);
        return (f == null || !o.isTag(f)) && s(c);
      };
    },
    scope: function(s, u, l, o) {
      var c = l.equals;
      return !o || o.length === 0 ? e.filters.root(s, u, l) : o.length === 1 ? function(f) {
        return c(o[0], f) && s(f);
      } : function(f) {
        return o.includes(f) && s(f);
      };
    },
    hover: i("isHovered"),
    visited: i("isVisited"),
    active: i("isActive")
  };
  function i(s) {
    return function(l, o, c) {
      var f = c.adapter, d = f[s];
      return typeof d != "function" ? n.default.falseFunc : function(p) {
        return d(p) && l(p);
      };
    };
  }
})(Qm);
var qn = {};
Object.defineProperty(qn, "__esModule", { value: !0 });
qn.verifyPseudoArgs = qn.pseudos = void 0;
qn.pseudos = {
  empty: function(e, t) {
    var r = t.adapter;
    return !r.getChildren(e).some(function(n) {
      return r.isTag(n) || r.getText(n) !== "";
    });
  },
  "first-child": function(e, t) {
    var r = t.adapter, n = t.equals;
    if (r.prevElementSibling)
      return r.prevElementSibling(e) == null;
    var a = r.getSiblings(e).find(function(i) {
      return r.isTag(i);
    });
    return a != null && n(e, a);
  },
  "last-child": function(e, t) {
    for (var r = t.adapter, n = t.equals, a = r.getSiblings(e), i = a.length - 1; i >= 0; i--) {
      if (n(e, a[i]))
        return !0;
      if (r.isTag(a[i]))
        break;
    }
    return !1;
  },
  "first-of-type": function(e, t) {
    for (var r = t.adapter, n = t.equals, a = r.getSiblings(e), i = r.getName(e), s = 0; s < a.length; s++) {
      var u = a[s];
      if (n(e, u))
        return !0;
      if (r.isTag(u) && r.getName(u) === i)
        break;
    }
    return !1;
  },
  "last-of-type": function(e, t) {
    for (var r = t.adapter, n = t.equals, a = r.getSiblings(e), i = r.getName(e), s = a.length - 1; s >= 0; s--) {
      var u = a[s];
      if (n(e, u))
        return !0;
      if (r.isTag(u) && r.getName(u) === i)
        break;
    }
    return !1;
  },
  "only-of-type": function(e, t) {
    var r = t.adapter, n = t.equals, a = r.getName(e);
    return r.getSiblings(e).every(function(i) {
      return n(e, i) || !r.isTag(i) || r.getName(i) !== a;
    });
  },
  "only-child": function(e, t) {
    var r = t.adapter, n = t.equals;
    return r.getSiblings(e).every(function(a) {
      return n(e, a) || !r.isTag(a);
    });
  }
};
function x2(e, t, r, n) {
  if (r === null) {
    if (e.length > n)
      throw new Error("Pseudo-class :".concat(t, " requires an argument"));
  } else if (e.length === n)
    throw new Error("Pseudo-class :".concat(t, " doesn't have any arguments"));
}
qn.verifyPseudoArgs = x2;
var lu = {};
Object.defineProperty(lu, "__esModule", { value: !0 });
lu.aliases = void 0;
lu.aliases = {
  // Links
  "any-link": ":is(a, area, link)[href]",
  link: ":any-link:not(:visited)",
  // Forms
  // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
  disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
  enabled: ":not(:disabled)",
  checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
  required: ":is(input, select, textarea)[required]",
  optional: ":is(input, select, textarea):not([required])",
  // JQuery extensions
  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
  selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
  checkbox: "[type=checkbox]",
  file: "[type=file]",
  password: "[type=password]",
  radio: "[type=radio]",
  reset: "[type=reset]",
  image: "[type=image]",
  submit: "[type=submit]",
  parent: ":not(:empty)",
  header: ":is(h1, h2, h3, h4, h5, h6)",
  button: ":is(button, input[type=button])",
  input: ":is(input, textarea, select, button)",
  text: "input:is(:not([type!='']), [type=text])"
};
var cu = {};
(function(e) {
  var t = V && V.__spreadArray || function(o, c, f) {
    if (f || arguments.length === 2) for (var d = 0, h = c.length, p; d < h; d++)
      (p || !(d in c)) && (p || (p = Array.prototype.slice.call(c, 0, d)), p[d] = c[d]);
    return o.concat(p || Array.prototype.slice.call(c));
  }, r = V && V.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.subselects = e.getNextSiblings = e.ensureIsTag = e.PLACEHOLDER_ELEMENT = void 0;
  var n = r(Vn), a = Wn;
  e.PLACEHOLDER_ELEMENT = {};
  function i(o, c) {
    return o === n.default.falseFunc ? n.default.falseFunc : function(f) {
      return c.isTag(f) && o(f);
    };
  }
  e.ensureIsTag = i;
  function s(o, c) {
    var f = c.getSiblings(o);
    if (f.length <= 1)
      return [];
    var d = f.indexOf(o);
    return d < 0 || d === f.length - 1 ? [] : f.slice(d + 1).filter(c.isTag);
  }
  e.getNextSiblings = s;
  function u(o) {
    return {
      xmlMode: !!o.xmlMode,
      lowerCaseAttributeNames: !!o.lowerCaseAttributeNames,
      lowerCaseTags: !!o.lowerCaseTags,
      quirksMode: !!o.quirksMode,
      cacheResults: !!o.cacheResults,
      pseudos: o.pseudos,
      adapter: o.adapter,
      equals: o.equals
    };
  }
  var l = function(o, c, f, d, h) {
    var p = h(c, u(f), d);
    return p === n.default.trueFunc ? o : p === n.default.falseFunc ? n.default.falseFunc : function(g) {
      return p(g) && o(g);
    };
  };
  e.subselects = {
    is: l,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */
    matches: l,
    where: l,
    not: function(o, c, f, d, h) {
      var p = h(c, u(f), d);
      return p === n.default.falseFunc ? o : p === n.default.trueFunc ? n.default.falseFunc : function(g) {
        return !p(g) && o(g);
      };
    },
    has: function(o, c, f, d, h) {
      var p = f.adapter, g = u(f);
      g.relativeSelector = !0;
      var x = c.some(function(y) {
        return y.some(a.isTraversal);
      }) ? (
        // Used as a placeholder. Will be replaced with the actual element.
        [e.PLACEHOLDER_ELEMENT]
      ) : void 0, C = h(c, g, x);
      if (C === n.default.falseFunc)
        return n.default.falseFunc;
      var S = i(C, p);
      if (x && C !== n.default.trueFunc) {
        var P = C.shouldTestNextSiblings, T = P === void 0 ? !1 : P;
        return function(y) {
          if (!o(y))
            return !1;
          x[0] = y;
          var D = p.getChildren(y), I = T ? t(t([], D, !0), s(y, p), !0) : D;
          return p.existsOne(S, I);
        };
      }
      return function(y) {
        return o(y) && p.existsOne(S, p.getChildren(y));
      };
    }
  };
})(cu);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.compilePseudoSelector = e.aliases = e.pseudos = e.filters = void 0;
  var t = ns, r = Qm;
  Object.defineProperty(e, "filters", { enumerable: !0, get: function() {
    return r.filters;
  } });
  var n = qn;
  Object.defineProperty(e, "pseudos", { enumerable: !0, get: function() {
    return n.pseudos;
  } });
  var a = lu;
  Object.defineProperty(e, "aliases", { enumerable: !0, get: function() {
    return a.aliases;
  } });
  var i = cu;
  function s(u, l, o, c, f) {
    var d, h = l.name, p = l.data;
    if (Array.isArray(p)) {
      if (!(h in i.subselects))
        throw new Error("Unknown pseudo-class :".concat(h, "(").concat(p, ")"));
      return i.subselects[h](u, p, o, c, f);
    }
    var g = (d = o.pseudos) === null || d === void 0 ? void 0 : d[h], x = typeof g == "string" ? g : a.aliases[h];
    if (typeof x == "string") {
      if (p != null)
        throw new Error("Pseudo ".concat(h, " doesn't have any arguments"));
      var C = (0, t.parse)(x);
      return i.subselects.is(u, C, o, c, f);
    }
    if (typeof g == "function")
      return (0, n.verifyPseudoArgs)(g, h, p, 1), function(P) {
        return g(P, p) && u(P);
      };
    if (h in r.filters)
      return r.filters[h](u, p, o, c);
    if (h in n.pseudos) {
      var S = n.pseudos[h];
      return (0, n.verifyPseudoArgs)(S, h, p, 2), function(P) {
        return S(P, o, p) && u(P);
      };
    }
    throw new Error("Unknown pseudo-class :".concat(h));
  }
  e.compilePseudoSelector = s;
})(pf);
Object.defineProperty(su, "__esModule", { value: !0 });
su.compileGeneralSelector = void 0;
var k2 = ou, w2 = pf, bt = ns;
function ll(e, t) {
  var r = t.getParent(e);
  return r && t.isTag(r) ? r : null;
}
function S2(e, t, r, n, a) {
  var i = r.adapter, s = r.equals;
  switch (t.type) {
    case bt.SelectorType.PseudoElement:
      throw new Error("Pseudo-elements are not supported by css-select");
    case bt.SelectorType.ColumnCombinator:
      throw new Error("Column combinators are not yet supported by css-select");
    case bt.SelectorType.Attribute: {
      if (t.namespace != null)
        throw new Error("Namespaced attributes are not yet supported by css-select");
      return (!r.xmlMode || r.lowerCaseAttributeNames) && (t.name = t.name.toLowerCase()), k2.attributeRules[t.action](e, t, r);
    }
    case bt.SelectorType.Pseudo:
      return (0, w2.compilePseudoSelector)(e, t, r, n, a);
    case bt.SelectorType.Tag: {
      if (t.namespace != null)
        throw new Error("Namespaced tag names are not yet supported by css-select");
      var u = t.name;
      return (!r.xmlMode || r.lowerCaseTags) && (u = u.toLowerCase()), function(c) {
        return i.getName(c) === u && e(c);
      };
    }
    case bt.SelectorType.Descendant: {
      if (r.cacheResults === !1 || typeof WeakSet > "u")
        return function(c) {
          for (var f = c; f = ll(f, i); )
            if (e(f))
              return !0;
          return !1;
        };
      var l = /* @__PURE__ */ new WeakSet();
      return function(c) {
        for (var f = c; f = ll(f, i); )
          if (!l.has(f)) {
            if (i.isTag(f) && e(f))
              return !0;
            l.add(f);
          }
        return !1;
      };
    }
    case "_flexibleDescendant":
      return function(c) {
        var f = c;
        do
          if (e(f))
            return !0;
        while (f = ll(f, i));
        return !1;
      };
    case bt.SelectorType.Parent:
      return function(c) {
        return i.getChildren(c).some(function(f) {
          return i.isTag(f) && e(f);
        });
      };
    case bt.SelectorType.Child:
      return function(c) {
        var f = i.getParent(c);
        return f != null && i.isTag(f) && e(f);
      };
    case bt.SelectorType.Sibling:
      return function(c) {
        for (var f = i.getSiblings(c), d = 0; d < f.length; d++) {
          var h = f[d];
          if (s(c, h))
            break;
          if (i.isTag(h) && e(h))
            return !0;
        }
        return !1;
      };
    case bt.SelectorType.Adjacent:
      return i.prevElementSibling ? function(c) {
        var f = i.prevElementSibling(c);
        return f != null && e(f);
      } : function(c) {
        for (var f = i.getSiblings(c), d, h = 0; h < f.length; h++) {
          var p = f[h];
          if (s(c, p))
            break;
          i.isTag(p) && (d = p);
        }
        return !!d && e(d);
      };
    case bt.SelectorType.Universal: {
      if (t.namespace != null && t.namespace !== "*")
        throw new Error("Namespaced universal selectors are not yet supported by css-select");
      return e;
    }
  }
}
su.compileGeneralSelector = S2;
var C2 = V && V.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var a = Object.getOwnPropertyDescriptor(t, r);
  (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, a);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), $2 = V && V.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), A2 = V && V.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r in e) r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && C2(t, e, r);
  return $2(t, e), t;
}, E2 = V && V.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(br, "__esModule", { value: !0 });
br.compileToken = br.compileUnsafe = br.compile = void 0;
var tr = ns, dr = E2(Vn), gc = A2(Wn), T2 = su, Jm = cu;
function P2(e, t, r) {
  var n = eg(e, t, r);
  return (0, Jm.ensureIsTag)(n, t.adapter);
}
br.compile = P2;
function eg(e, t, r) {
  var n = typeof e == "string" ? (0, tr.parse)(e) : e;
  return mf(n, t, r);
}
br.compileUnsafe = eg;
function tg(e) {
  return e.type === tr.SelectorType.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function(t) {
    return t.some(tg);
  }));
}
var L2 = { type: tr.SelectorType.Descendant }, N2 = {
  type: "_flexibleDescendant"
}, D2 = {
  type: tr.SelectorType.Pseudo,
  name: "scope",
  data: null
};
function O2(e, t, r) {
  for (var n = t.adapter, a = !!(r != null && r.every(function(l) {
    var o = n.isTag(l) && n.getParent(l);
    return l === Jm.PLACEHOLDER_ELEMENT || o && n.isTag(o);
  })), i = 0, s = e; i < s.length; i++) {
    var u = s[i];
    if (!(u.length > 0 && (0, gc.isTraversal)(u[0]) && u[0].type !== tr.SelectorType.Descendant)) if (a && !u.some(tg))
      u.unshift(L2);
    else
      continue;
    u.unshift(D2);
  }
}
function mf(e, t, r) {
  var n;
  e.forEach(gc.default), r = (n = t.context) !== null && n !== void 0 ? n : r;
  var a = Array.isArray(r), i = r && (Array.isArray(r) ? r : [r]);
  if (t.relativeSelector !== !1)
    O2(e, t, i);
  else if (e.some(function(l) {
    return l.length > 0 && (0, gc.isTraversal)(l[0]);
  }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
  var s = !1, u = e.map(function(l) {
    if (l.length >= 2) {
      var o = l[0], c = l[1];
      o.type !== tr.SelectorType.Pseudo || o.name !== "scope" || (a && c.type === tr.SelectorType.Descendant ? l[1] = N2 : (c.type === tr.SelectorType.Adjacent || c.type === tr.SelectorType.Sibling) && (s = !0));
    }
    return M2(l, t, i);
  }).reduce(I2, dr.default.falseFunc);
  return u.shouldTestNextSiblings = s, u;
}
br.compileToken = mf;
function M2(e, t, r) {
  var n;
  return e.reduce(function(a, i) {
    return a === dr.default.falseFunc ? dr.default.falseFunc : (0, T2.compileGeneralSelector)(a, i, t, r, mf);
  }, (n = t.rootFunc) !== null && n !== void 0 ? n : dr.default.trueFunc);
}
function I2(e, t) {
  return t === dr.default.falseFunc || e === dr.default.trueFunc ? e : e === dr.default.falseFunc || t === dr.default.trueFunc ? t : function(n) {
    return e(n) || t(n);
  };
}
(function(e) {
  var t = V && V.__createBinding || (Object.create ? function(S, P, T, y) {
    y === void 0 && (y = T);
    var D = Object.getOwnPropertyDescriptor(P, T);
    (!D || ("get" in D ? !P.__esModule : D.writable || D.configurable)) && (D = { enumerable: !0, get: function() {
      return P[T];
    } }), Object.defineProperty(S, y, D);
  } : function(S, P, T, y) {
    y === void 0 && (y = T), S[y] = P[T];
  }), r = V && V.__setModuleDefault || (Object.create ? function(S, P) {
    Object.defineProperty(S, "default", { enumerable: !0, value: P });
  } : function(S, P) {
    S.default = P;
  }), n = V && V.__importStar || function(S) {
    if (S && S.__esModule) return S;
    var P = {};
    if (S != null) for (var T in S) T !== "default" && Object.prototype.hasOwnProperty.call(S, T) && t(P, S, T);
    return r(P, S), P;
  }, a = V && V.__importDefault || function(S) {
    return S && S.__esModule ? S : { default: S };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.aliases = e.pseudos = e.filters = e.is = e.selectOne = e.selectAll = e.prepareContext = e._compileToken = e._compileUnsafe = e.compile = void 0;
  var i = n(gm), s = a(Vn), u = br, l = cu, o = function(S, P) {
    return S === P;
  }, c = {
    adapter: i,
    equals: o
  };
  function f(S) {
    var P, T, y, D, I = S ?? c;
    return (P = I.adapter) !== null && P !== void 0 || (I.adapter = i), (T = I.equals) !== null && T !== void 0 || (I.equals = (D = (y = I.adapter) === null || y === void 0 ? void 0 : y.equals) !== null && D !== void 0 ? D : o), I;
  }
  function d(S) {
    return function(T, y, D) {
      var I = f(y);
      return S(T, I, D);
    };
  }
  e.compile = d(u.compile), e._compileUnsafe = d(u.compileUnsafe), e._compileToken = d(u.compileToken);
  function h(S) {
    return function(T, y, D) {
      var I = f(D);
      typeof T != "function" && (T = (0, u.compileUnsafe)(T, I, y));
      var k = p(y, I.adapter, T.shouldTestNextSiblings);
      return S(T, k, I);
    };
  }
  function p(S, P, T) {
    return T === void 0 && (T = !1), T && (S = g(S, P)), Array.isArray(S) ? P.removeSubsets(S) : P.getChildren(S);
  }
  e.prepareContext = p;
  function g(S, P) {
    for (var T = Array.isArray(S) ? S.slice(0) : [S], y = T.length, D = 0; D < y; D++) {
      var I = (0, l.getNextSiblings)(T[D], P);
      T.push.apply(T, I);
    }
    return T;
  }
  e.selectAll = h(function(S, P, T) {
    return S === s.default.falseFunc || !P || P.length === 0 ? [] : T.adapter.findAll(S, P);
  }), e.selectOne = h(function(S, P, T) {
    return S === s.default.falseFunc || !P || P.length === 0 ? null : T.adapter.findOne(S, P);
  });
  function x(S, P, T) {
    var y = f(T);
    return (typeof P == "function" ? P : (0, u.compile)(P, y))(S);
  }
  e.is = x, e.default = e.selectAll;
  var C = pf;
  Object.defineProperty(e, "filters", { enumerable: !0, get: function() {
    return C.filters;
  } }), Object.defineProperty(e, "pseudos", { enumerable: !0, get: function() {
    return C.pseudos;
  } }), Object.defineProperty(e, "aliases", { enumerable: !0, get: function() {
    return C.aliases;
  } });
})(mm);
const fu = (e) => e.type === "element", rg = (e, t) => t.some((r) => fu(r) ? e(r) || rg(e, as(r)) : !1), R2 = (e, t) => e.attributes[t], as = (e) => e.children || [], _2 = (e) => e.name, gf = (e) => e.parentNode || null, F2 = (e) => {
  var t = gf(e);
  return t ? as(t) : [];
}, B2 = (e) => e.children[0].type === "text" && e.children[0].type === "cdata" ? e.children[0].value : "", q2 = (e, t) => e.attributes[t] !== void 0, U2 = (e) => {
  let t = e.length, r, n, a;
  for (; --t > -1; ) {
    for (r = n = e[t], e[t] = null, a = !0; n; ) {
      if (e.includes(n)) {
        a = !1, e.splice(t, 1);
        break;
      }
      n = gf(n);
    }
    a && (e[t] = r);
  }
  return e;
}, ng = (e, t) => {
  const r = [];
  for (const n of t)
    fu(n) && (e(n) && r.push(n), r.push(...ng(e, as(n))));
  return r;
}, ag = (e, t) => {
  for (const r of t)
    if (fu(r)) {
      if (e(r))
        return r;
      const n = ag(e, as(r));
      if (n)
        return n;
    }
  return null;
}, j2 = {
  isTag: fu,
  existsOne: rg,
  getAttributeValue: R2,
  getChildren: as,
  getName: _2,
  getParent: gf,
  getSiblings: F2,
  getText: B2,
  hasAttrib: q2,
  removeSubsets: U2,
  findAll: ng,
  findOne: ag
};
var z2 = j2;
const { selectAll: G2, selectOne: H2, is: V2 } = mm, W2 = z2, bf = {
  xmlMode: !0,
  adapter: W2
}, X2 = (e, t) => G2(t, e, bf);
ne.querySelectorAll = X2;
const Y2 = (e, t) => H2(t, e, bf);
ne.querySelector = Y2;
const K2 = (e, t) => V2(e, t, bf);
ne.matches = K2;
const ig = Symbol();
ne.visitSkip = ig;
const bc = (e, t, r) => {
  const n = t[e.type];
  if (!(n && n.enter && n.enter(e, r) === ig)) {
    if (e.type === "root")
      for (const a of e.children)
        bc(a, t, e);
    if (e.type === "element" && r.children.includes(e))
      for (const a of e.children)
        bc(a, t, e);
    n && n.exit && n.exit(e, r);
  }
};
ne.visit = bc;
const Q2 = (e, t) => {
  t.children = t.children.filter((r) => r !== e);
};
ne.detachNodeFromParent = Q2;
const { visit: Z2 } = ne, sg = (e, t, r, n, a) => {
  for (const i of r) {
    const s = n == null ? void 0 : n[i.name];
    if (s === !1)
      continue;
    const u = { ...i.params, ...a, ...s }, l = i.fn(e, u, t);
    l != null && Z2(e, l);
  }
};
Jo.invokePlugins = sg;
const J2 = ({ name: e, plugins: t }) => ({
  name: e,
  fn: (r, n, a) => {
    const { floatPrecision: i, overrides: s } = n, u = {};
    if (i != null && (u.floatPrecision = i), s) {
      const l = t.map(({ name: o }) => o);
      for (const o of Object.keys(s))
        l.includes(o) || console.warn(
          `You are trying to configure ${o} which is not part of ${e}.
Try to put it before or after, for example

plugins: [
  {
    name: '${e}',
  },
  '${o}'
]
`
        );
    }
    sg(r, a, t, s, u);
  }
});
Jo.createPreset = J2;
var is = {};
const { detachNodeFromParent: ex } = ne;
is.name = "removeDoctype";
is.description = "removes doctype declaration";
is.fn = () => ({
  doctype: {
    enter: (e, t) => {
      ex(e, t);
    }
  }
});
var ss = {};
const { detachNodeFromParent: tx } = ne;
ss.name = "removeXMLProcInst";
ss.description = "removes XML processing instructions";
ss.fn = () => ({
  instruction: {
    enter: (e, t) => {
      e.name === "xml" && tx(e, t);
    }
  }
});
var os = {};
const { detachNodeFromParent: rx } = ne;
os.name = "removeComments";
os.description = "removes comments";
const nx = [/^!/];
os.fn = (e, t) => {
  const { preservePatterns: r = nx } = t;
  return {
    comment: {
      enter: (n, a) => {
        if (r) {
          if (!Array.isArray(r))
            throw Error(
              `Expected array in removeComments preservePatterns parameter but received ${r}`
            );
          if (r.some((s) => new RegExp(s).test(n.value)))
            return;
        }
        rx(n, a);
      }
    }
  };
};
var us = {};
const { detachNodeFromParent: ax } = ne;
us.name = "removeMetadata";
us.description = "removes <metadata>";
us.fn = () => ({
  element: {
    enter: (e, t) => {
      e.name === "metadata" && ax(e, t);
    }
  }
});
var ls = {};
const { detachNodeFromParent: ix } = ne, { editorNamespaces: zd } = be;
ls.name = "removeEditorsNSData";
ls.description = "removes editors namespaces, elements and attributes";
ls.fn = (e, t) => {
  let r = [...zd];
  Array.isArray(t.additionalNamespaces) && (r = [...zd, ...t.additionalNamespaces]);
  const n = [];
  return {
    element: {
      enter: (a, i) => {
        if (a.name === "svg")
          for (const [s, u] of Object.entries(a.attributes))
            s.startsWith("xmlns:") && r.includes(u) && (n.push(s.slice(6)), delete a.attributes[s]);
        for (const s of Object.keys(a.attributes))
          if (s.includes(":")) {
            const [u] = s.split(":");
            n.includes(u) && delete a.attributes[s];
          }
        if (a.name.includes(":")) {
          const [s] = a.name.split(":");
          n.includes(s) && ix(a, i);
        }
      }
    }
  };
};
var cs = {};
cs.name = "cleanupAttrs";
cs.description = "cleanups attributes from newlines, trailing and repeating spaces";
const sx = /(\S)\r?\n(\S)/g, ox = /\r?\n/g, ux = /\s{2,}/g;
cs.fn = (e, t) => {
  const { newlines: r = !0, trim: n = !0, spaces: a = !0 } = t;
  return {
    element: {
      enter: (i) => {
        for (const s of Object.keys(i.attributes))
          r && (i.attributes[s] = i.attributes[s].replace(
            sx,
            (u, l, o) => l + " " + o
          ), i.attributes[s] = i.attributes[s].replace(
            ox,
            ""
          )), n && (i.attributes[s] = i.attributes[s].trim()), a && (i.attributes[s] = i.attributes[s].replace(
            ux,
            " "
          ));
      }
    }
  };
};
var fs = {};
const { visitSkip: lx, detachNodeFromParent: Gd } = ne;
fs.name = "mergeStyles";
fs.description = "merge multiple style elements into one";
fs.fn = () => {
  let e = null, t = "", r = "text";
  return {
    element: {
      enter: (n, a) => {
        if (n.name === "foreignObject")
          return lx;
        if (n.name !== "style" || n.attributes.type != null && n.attributes.type !== "" && n.attributes.type !== "text/css")
          return;
        let i = "";
        for (const s of n.children)
          s.type === "text" && (i += s.value), s.type === "cdata" && (r = "cdata", i += s.value);
        if (i.trim().length === 0) {
          Gd(n, a);
          return;
        }
        if (n.attributes.media == null ? t += i : (t += `@media ${n.attributes.media}{${i}}`, delete n.attributes.media), e == null)
          e = n;
        else {
          Gd(n, a);
          const s = { type: r, value: t };
          Object.defineProperty(s, "parentNode", {
            writable: !0,
            value: e
          }), e.children = [s];
        }
      }
    }
  };
};
var ds = {}, oe = {}, U = {}, R = {};
const cx = 0, fx = 1, dx = 2, hx = 3, px = 4, mx = 5, gx = 6, bx = 7, yx = 8, vx = 9, xx = 10, kx = 11, wx = 12, Sx = 13, Cx = 14, $x = 15, Ax = 16, Ex = 17, Tx = 18, Px = 19, Lx = 20, Nx = 21, Dx = 22, Ox = 23, Mx = 24, Ix = 25;
R.AtKeyword = hx;
R.BadString = gx;
R.BadUrl = yx;
R.CDC = $x;
R.CDO = Cx;
R.Colon = Ax;
R.Comma = Tx;
R.Comment = Ix;
R.Delim = vx;
R.Dimension = wx;
R.EOF = cx;
R.Function = dx;
R.Hash = px;
R.Ident = fx;
R.LeftCurlyBracket = Ox;
R.LeftParenthesis = Nx;
R.LeftSquareBracket = Px;
R.Number = xx;
R.Percentage = kx;
R.RightCurlyBracket = Mx;
R.RightParenthesis = Dx;
R.RightSquareBracket = Lx;
R.Semicolon = Ex;
R.String = mx;
R.Url = bx;
R.WhiteSpace = Sx;
var ie = {};
const Rx = 0;
function hr(e) {
  return e >= 48 && e <= 57;
}
function _x(e) {
  return hr(e) || // 0 .. 9
  e >= 65 && e <= 70 || // A .. F
  e >= 97 && e <= 102;
}
function og(e) {
  return e >= 65 && e <= 90;
}
function ug(e) {
  return e >= 97 && e <= 122;
}
function lg(e) {
  return og(e) || ug(e);
}
function cg(e) {
  return e >= 128;
}
function Vi(e) {
  return lg(e) || cg(e) || e === 95;
}
function Fx(e) {
  return Vi(e) || hr(e) || e === 45;
}
function fg(e) {
  return e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e === 127;
}
function yf(e) {
  return e === 10 || e === 13 || e === 12;
}
function dg(e) {
  return yf(e) || e === 32 || e === 9;
}
function yc(e, t) {
  return !(e !== 92 || yf(t) || t === Rx);
}
function Bx(e, t, r) {
  return e === 45 ? Vi(t) || t === 45 || yc(t, r) : Vi(e) ? !0 : e === 92 ? yc(e, t) : !1;
}
function qx(e, t, r) {
  return e === 43 || e === 45 ? hr(t) ? 2 : t === 46 && hr(r) ? 3 : 0 : e === 46 ? hr(t) ? 2 : 0 : hr(e) ? 1 : 0;
}
function Ux(e) {
  return e === 65279 || e === 65534 ? 1 : 0;
}
const vc = new Array(128), hg = 128, pg = 130, mg = 131, vf = 132, gg = 133;
for (let e = 0; e < vc.length; e++)
  vc[e] = dg(e) && pg || hr(e) && mg || Vi(e) && vf || fg(e) && gg || e || hg;
function jx(e) {
  return e < 128 ? vc[e] : vf;
}
ie.DigitCategory = mg;
ie.EofCategory = hg;
ie.NameStartCategory = vf;
ie.NonPrintableCategory = gg;
ie.WhiteSpaceCategory = pg;
ie.charCodeCategory = jx;
ie.isBOM = Ux;
ie.isDigit = hr;
ie.isHexDigit = _x;
ie.isIdentifierStart = Bx;
ie.isLetter = lg;
ie.isLowercaseLetter = ug;
ie.isName = Fx;
ie.isNameStart = Vi;
ie.isNewline = yf;
ie.isNonAscii = cg;
ie.isNonPrintable = fg;
ie.isNumberStart = qx;
ie.isUppercaseLetter = og;
ie.isValidEscape = yc;
ie.isWhiteSpace = dg;
var Ce = {};
const Ue = ie;
function In(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function bg(e, t, r) {
  return r === 13 && In(e, t + 1) === 10 ? 2 : 1;
}
function yg(e, t, r) {
  let n = e.charCodeAt(t);
  return Ue.isUppercaseLetter(n) && (n = n | 32), n === r;
}
function zx(e, t, r, n) {
  if (r - t !== n.length || t < 0 || r > e.length)
    return !1;
  for (let a = t; a < r; a++) {
    const i = n.charCodeAt(a - t);
    let s = e.charCodeAt(a);
    if (Ue.isUppercaseLetter(s) && (s = s | 32), s !== i)
      return !1;
  }
  return !0;
}
function Gx(e, t) {
  for (; t >= 0 && Ue.isWhiteSpace(e.charCodeAt(t)); t--)
    ;
  return t + 1;
}
function Hx(e, t) {
  for (; t < e.length && Ue.isWhiteSpace(e.charCodeAt(t)); t++)
    ;
  return t;
}
function go(e, t) {
  for (; t < e.length && Ue.isDigit(e.charCodeAt(t)); t++)
    ;
  return t;
}
function xf(e, t) {
  if (t += 2, Ue.isHexDigit(In(e, t - 1))) {
    for (const n = Math.min(e.length, t + 5); t < n && Ue.isHexDigit(In(e, t)); t++)
      ;
    const r = In(e, t);
    Ue.isWhiteSpace(r) && (t += bg(e, t, r));
  }
  return t;
}
function Vx(e, t) {
  for (; t < e.length; t++) {
    const r = e.charCodeAt(t);
    if (!Ue.isName(r)) {
      if (Ue.isValidEscape(r, In(e, t + 1))) {
        t = xf(e, t) - 1;
        continue;
      }
      break;
    }
  }
  return t;
}
function Wx(e, t) {
  let r = e.charCodeAt(t);
  if ((r === 43 || r === 45) && (r = e.charCodeAt(t += 1)), Ue.isDigit(r) && (t = go(e, t + 1), r = e.charCodeAt(t)), r === 46 && Ue.isDigit(e.charCodeAt(t + 1)) && (t += 2, t = go(e, t)), yg(
    e,
    t,
    101
    /* e */
  )) {
    let n = 0;
    r = e.charCodeAt(t + 1), (r === 45 || r === 43) && (n = 1, r = e.charCodeAt(t + 2)), Ue.isDigit(r) && (t = go(e, t + 1 + n + 1));
  }
  return t;
}
function Xx(e, t) {
  for (; t < e.length; t++) {
    const r = e.charCodeAt(t);
    if (r === 41) {
      t++;
      break;
    }
    Ue.isValidEscape(r, In(e, t + 1)) && (t = xf(e, t));
  }
  return t;
}
function Yx(e) {
  if (e.length === 1 && !Ue.isHexDigit(e.charCodeAt(0)))
    return e[0];
  let t = parseInt(e, 16);
  return (t === 0 || // If this number is zero,
  t >= 55296 && t <= 57343 || // or is for a surrogate,
  t > 1114111) && (t = 65533), String.fromCodePoint(t);
}
Ce.cmpChar = yg;
Ce.cmpStr = zx;
Ce.consumeBadUrlRemnants = Xx;
Ce.consumeEscaped = xf;
Ce.consumeName = Vx;
Ce.consumeNumber = Wx;
Ce.decodeEscaped = Yx;
Ce.findDecimalNumberEnd = go;
Ce.findWhiteSpaceEnd = Hx;
Ce.findWhiteSpaceStart = Gx;
Ce.getNewlineLength = bg;
const Kx = [
  "EOF-token",
  "ident-token",
  "function-token",
  "at-keyword-token",
  "hash-token",
  "string-token",
  "bad-string-token",
  "url-token",
  "bad-url-token",
  "delim-token",
  "number-token",
  "percentage-token",
  "dimension-token",
  "whitespace-token",
  "CDO-token",
  "CDC-token",
  "colon-token",
  "semicolon-token",
  "comma-token",
  "[-token",
  "]-token",
  "(-token",
  ")-token",
  "{-token",
  "}-token"
];
var du = Kx, kf = {}, wf = {};
const Qx = 16 * 1024;
function Zx(e = null, t) {
  return e === null || e.length < t ? new Uint32Array(Math.max(t + 1024, Qx)) : e;
}
wf.adoptBuffer = Zx;
const Hd = wf, Jx = ie, Vd = 10, ek = 12, Wd = 13;
function Xd(e) {
  const t = e.source, r = t.length, n = t.length > 0 ? Jx.isBOM(t.charCodeAt(0)) : 0, a = Hd.adoptBuffer(e.lines, r), i = Hd.adoptBuffer(e.columns, r);
  let s = e.startLine, u = e.startColumn;
  for (let l = n; l < r; l++) {
    const o = t.charCodeAt(l);
    a[l] = s, i[l] = u++, (o === Vd || o === Wd || o === ek) && (o === Wd && l + 1 < r && t.charCodeAt(l + 1) === Vd && (l++, a[l] = s, i[l] = u), s++, u = 1);
  }
  a[r] = s, i[r] = u, e.lines = a, e.columns = i, e.computed = !0;
}
let tk = class {
  constructor() {
    this.lines = null, this.columns = null, this.computed = !1;
  }
  setSource(t, r = 0, n = 1, a = 1) {
    this.source = t, this.startOffset = r, this.startLine = n, this.startColumn = a, this.computed = !1;
  }
  getLocation(t, r) {
    return this.computed || Xd(this), {
      source: r,
      offset: this.startOffset + t,
      line: this.lines[t],
      column: this.columns[t]
    };
  }
  getLocationRange(t, r, n) {
    return this.computed || Xd(this), {
      source: n,
      start: {
        offset: this.startOffset + t,
        line: this.lines[t],
        column: this.columns[t]
      },
      end: {
        offset: this.startOffset + r,
        line: this.lines[r],
        column: this.columns[r]
      }
    };
  }
};
kf.OffsetToLocation = tk;
var hu = {};
const Yd = wf, rk = Ce, nk = du, Ee = R, ot = 16777215, ar = 24, ak = /* @__PURE__ */ new Map([
  [Ee.Function, Ee.RightParenthesis],
  [Ee.LeftParenthesis, Ee.RightParenthesis],
  [Ee.LeftSquareBracket, Ee.RightSquareBracket],
  [Ee.LeftCurlyBracket, Ee.RightCurlyBracket]
]);
let ik = class {
  constructor(t, r) {
    this.setSource(t, r);
  }
  reset() {
    this.eof = !1, this.tokenIndex = -1, this.tokenType = 0, this.tokenStart = this.firstCharOffset, this.tokenEnd = this.firstCharOffset;
  }
  setSource(t = "", r = () => {
  }) {
    t = String(t || "");
    const n = t.length, a = Yd.adoptBuffer(this.offsetAndType, t.length + 1), i = Yd.adoptBuffer(this.balance, t.length + 1);
    let s = 0, u = 0, l = 0, o = -1;
    for (this.offsetAndType = null, this.balance = null, r(t, (c, f, d) => {
      switch (c) {
        default:
          i[s] = n;
          break;
        case u: {
          let h = l & ot;
          for (l = i[h], u = l >> ar, i[s] = h, i[h++] = s; h < s; h++)
            i[h] === n && (i[h] = s);
          break;
        }
        case Ee.LeftParenthesis:
        case Ee.Function:
        case Ee.LeftSquareBracket:
        case Ee.LeftCurlyBracket:
          i[s] = l, u = ak.get(c), l = u << ar | s;
          break;
      }
      a[s++] = c << ar | d, o === -1 && (o = f);
    }), a[s] = Ee.EOF << ar | n, i[s] = n, i[n] = n; l !== 0; ) {
      const c = l & ot;
      l = i[c], i[c] = n;
    }
    this.source = t, this.firstCharOffset = o === -1 ? 0 : o, this.tokenCount = s, this.offsetAndType = a, this.balance = i, this.reset(), this.next();
  }
  lookupType(t) {
    return t += this.tokenIndex, t < this.tokenCount ? this.offsetAndType[t] >> ar : Ee.EOF;
  }
  lookupOffset(t) {
    return t += this.tokenIndex, t < this.tokenCount ? this.offsetAndType[t - 1] & ot : this.source.length;
  }
  lookupValue(t, r) {
    return t += this.tokenIndex, t < this.tokenCount ? rk.cmpStr(
      this.source,
      this.offsetAndType[t - 1] & ot,
      this.offsetAndType[t] & ot,
      r
    ) : !1;
  }
  getTokenStart(t) {
    return t === this.tokenIndex ? this.tokenStart : t > 0 ? t < this.tokenCount ? this.offsetAndType[t - 1] & ot : this.offsetAndType[this.tokenCount] & ot : this.firstCharOffset;
  }
  substrToCursor(t) {
    return this.source.substring(t, this.tokenStart);
  }
  isBalanceEdge(t) {
    return this.balance[this.tokenIndex] < t;
  }
  isDelim(t, r) {
    return r ? this.lookupType(r) === Ee.Delim && this.source.charCodeAt(this.lookupOffset(r)) === t : this.tokenType === Ee.Delim && this.source.charCodeAt(this.tokenStart) === t;
  }
  skip(t) {
    let r = this.tokenIndex + t;
    r < this.tokenCount ? (this.tokenIndex = r, this.tokenStart = this.offsetAndType[r - 1] & ot, r = this.offsetAndType[r], this.tokenType = r >> ar, this.tokenEnd = r & ot) : (this.tokenIndex = this.tokenCount, this.next());
  }
  next() {
    let t = this.tokenIndex + 1;
    t < this.tokenCount ? (this.tokenIndex = t, this.tokenStart = this.tokenEnd, t = this.offsetAndType[t], this.tokenType = t >> ar, this.tokenEnd = t & ot) : (this.eof = !0, this.tokenIndex = this.tokenCount, this.tokenType = Ee.EOF, this.tokenStart = this.tokenEnd = this.source.length);
  }
  skipSC() {
    for (; this.tokenType === Ee.WhiteSpace || this.tokenType === Ee.Comment; )
      this.next();
  }
  skipUntilBalanced(t, r) {
    let n = t, a, i;
    e:
      for (; n < this.tokenCount; n++) {
        if (a = this.balance[n], a < t)
          break e;
        switch (i = n > 0 ? this.offsetAndType[n - 1] & ot : this.firstCharOffset, r(this.source.charCodeAt(i))) {
          case 1:
            break e;
          case 2:
            n++;
            break e;
          default:
            this.balance[a] === n && (n = a);
        }
      }
    this.skip(n - this.tokenIndex);
  }
  forEachToken(t) {
    for (let r = 0, n = this.firstCharOffset; r < this.tokenCount; r++) {
      const a = n, i = this.offsetAndType[r], s = i & ot, u = i >> ar;
      n = s, t(u, a, s, r);
    }
  }
  dump() {
    const t = new Array(this.tokenCount);
    return this.forEachToken((r, n, a, i) => {
      t[i] = {
        idx: i,
        type: nk[r],
        chunk: this.source.substring(n, a),
        balance: this.balance[i]
      };
    }), t;
  }
};
hu.TokenStream = ik;
const z = R, X = ie, ue = Ce, sk = du, ok = kf, uk = hu;
function lk(e, t) {
  function r(f) {
    return f < u ? e.charCodeAt(f) : 0;
  }
  function n() {
    if (o = ue.consumeNumber(e, o), X.isIdentifierStart(r(o), r(o + 1), r(o + 2))) {
      c = z.Dimension, o = ue.consumeName(e, o);
      return;
    }
    if (r(o) === 37) {
      c = z.Percentage, o++;
      return;
    }
    c = z.Number;
  }
  function a() {
    const f = o;
    if (o = ue.consumeName(e, o), ue.cmpStr(e, f, o, "url") && r(o) === 40) {
      if (o = ue.findWhiteSpaceEnd(e, o + 1), r(o) === 34 || r(o) === 39) {
        c = z.Function, o = f + 4;
        return;
      }
      s();
      return;
    }
    if (r(o) === 40) {
      c = z.Function, o++;
      return;
    }
    c = z.Ident;
  }
  function i(f) {
    for (f || (f = r(o++)), c = z.String; o < e.length; o++) {
      const d = e.charCodeAt(o);
      switch (X.charCodeCategory(d)) {
        case f:
          o++;
          return;
        case X.WhiteSpaceCategory:
          if (X.isNewline(d)) {
            o += ue.getNewlineLength(e, o, d), c = z.BadString;
            return;
          }
          break;
        case 92:
          if (o === e.length - 1)
            break;
          const h = r(o + 1);
          X.isNewline(h) ? o += ue.getNewlineLength(e, o + 1, h) : X.isValidEscape(d, h) && (o = ue.consumeEscaped(e, o) - 1);
          break;
      }
    }
  }
  function s() {
    for (c = z.Url, o = ue.findWhiteSpaceEnd(e, o); o < e.length; o++) {
      const f = e.charCodeAt(o);
      switch (X.charCodeCategory(f)) {
        case 41:
          o++;
          return;
        case X.WhiteSpaceCategory:
          if (o = ue.findWhiteSpaceEnd(e, o), r(o) === 41 || o >= e.length) {
            o < e.length && o++;
            return;
          }
          o = ue.consumeBadUrlRemnants(e, o), c = z.BadUrl;
          return;
        case 34:
        case 39:
        case 40:
        case X.NonPrintableCategory:
          o = ue.consumeBadUrlRemnants(e, o), c = z.BadUrl;
          return;
        case 92:
          if (X.isValidEscape(f, r(o + 1))) {
            o = ue.consumeEscaped(e, o) - 1;
            break;
          }
          o = ue.consumeBadUrlRemnants(e, o), c = z.BadUrl;
          return;
      }
    }
  }
  e = String(e || "");
  const u = e.length;
  let l = X.isBOM(r(0)), o = l, c;
  for (; o < u; ) {
    const f = e.charCodeAt(o);
    switch (X.charCodeCategory(f)) {
      case X.WhiteSpaceCategory:
        c = z.WhiteSpace, o = ue.findWhiteSpaceEnd(e, o + 1);
        break;
      case 34:
        i();
        break;
      case 35:
        X.isName(r(o + 1)) || X.isValidEscape(r(o + 1), r(o + 2)) ? (c = z.Hash, o = ue.consumeName(e, o + 1)) : (c = z.Delim, o++);
        break;
      case 39:
        i();
        break;
      case 40:
        c = z.LeftParenthesis, o++;
        break;
      case 41:
        c = z.RightParenthesis, o++;
        break;
      case 43:
        X.isNumberStart(f, r(o + 1), r(o + 2)) ? n() : (c = z.Delim, o++);
        break;
      case 44:
        c = z.Comma, o++;
        break;
      case 45:
        X.isNumberStart(f, r(o + 1), r(o + 2)) ? n() : r(o + 1) === 45 && r(o + 2) === 62 ? (c = z.CDC, o = o + 3) : X.isIdentifierStart(f, r(o + 1), r(o + 2)) ? a() : (c = z.Delim, o++);
        break;
      case 46:
        X.isNumberStart(f, r(o + 1), r(o + 2)) ? n() : (c = z.Delim, o++);
        break;
      case 47:
        r(o + 1) === 42 ? (c = z.Comment, o = e.indexOf("*/", o + 2), o = o === -1 ? e.length : o + 2) : (c = z.Delim, o++);
        break;
      case 58:
        c = z.Colon, o++;
        break;
      case 59:
        c = z.Semicolon, o++;
        break;
      case 60:
        r(o + 1) === 33 && r(o + 2) === 45 && r(o + 3) === 45 ? (c = z.CDO, o = o + 4) : (c = z.Delim, o++);
        break;
      case 64:
        X.isIdentifierStart(r(o + 1), r(o + 2), r(o + 3)) ? (c = z.AtKeyword, o = ue.consumeName(e, o + 1)) : (c = z.Delim, o++);
        break;
      case 91:
        c = z.LeftSquareBracket, o++;
        break;
      case 92:
        X.isValidEscape(f, r(o + 1)) ? a() : (c = z.Delim, o++);
        break;
      case 93:
        c = z.RightSquareBracket, o++;
        break;
      case 123:
        c = z.LeftCurlyBracket, o++;
        break;
      case 125:
        c = z.RightCurlyBracket, o++;
        break;
      case X.DigitCategory:
        n();
        break;
      case X.NameStartCategory:
        a();
        break;
      default:
        c = z.Delim, o++;
    }
    t(c, l, l = o);
  }
}
U.AtKeyword = z.AtKeyword;
U.BadString = z.BadString;
U.BadUrl = z.BadUrl;
U.CDC = z.CDC;
U.CDO = z.CDO;
U.Colon = z.Colon;
U.Comma = z.Comma;
U.Comment = z.Comment;
U.Delim = z.Delim;
U.Dimension = z.Dimension;
U.EOF = z.EOF;
U.Function = z.Function;
U.Hash = z.Hash;
U.Ident = z.Ident;
U.LeftCurlyBracket = z.LeftCurlyBracket;
U.LeftParenthesis = z.LeftParenthesis;
U.LeftSquareBracket = z.LeftSquareBracket;
U.Number = z.Number;
U.Percentage = z.Percentage;
U.RightCurlyBracket = z.RightCurlyBracket;
U.RightParenthesis = z.RightParenthesis;
U.RightSquareBracket = z.RightSquareBracket;
U.Semicolon = z.Semicolon;
U.String = z.String;
U.Url = z.Url;
U.WhiteSpace = z.WhiteSpace;
U.tokenTypes = z;
U.DigitCategory = X.DigitCategory;
U.EofCategory = X.EofCategory;
U.NameStartCategory = X.NameStartCategory;
U.NonPrintableCategory = X.NonPrintableCategory;
U.WhiteSpaceCategory = X.WhiteSpaceCategory;
U.charCodeCategory = X.charCodeCategory;
U.isBOM = X.isBOM;
U.isDigit = X.isDigit;
U.isHexDigit = X.isHexDigit;
U.isIdentifierStart = X.isIdentifierStart;
U.isLetter = X.isLetter;
U.isLowercaseLetter = X.isLowercaseLetter;
U.isName = X.isName;
U.isNameStart = X.isNameStart;
U.isNewline = X.isNewline;
U.isNonAscii = X.isNonAscii;
U.isNonPrintable = X.isNonPrintable;
U.isNumberStart = X.isNumberStart;
U.isUppercaseLetter = X.isUppercaseLetter;
U.isValidEscape = X.isValidEscape;
U.isWhiteSpace = X.isWhiteSpace;
U.cmpChar = ue.cmpChar;
U.cmpStr = ue.cmpStr;
U.consumeBadUrlRemnants = ue.consumeBadUrlRemnants;
U.consumeEscaped = ue.consumeEscaped;
U.consumeName = ue.consumeName;
U.consumeNumber = ue.consumeNumber;
U.decodeEscaped = ue.decodeEscaped;
U.findDecimalNumberEnd = ue.findDecimalNumberEnd;
U.findWhiteSpaceEnd = ue.findWhiteSpaceEnd;
U.findWhiteSpaceStart = ue.findWhiteSpaceStart;
U.getNewlineLength = ue.getNewlineLength;
U.tokenNames = sk;
U.OffsetToLocation = ok.OffsetToLocation;
U.TokenStream = uk.TokenStream;
U.tokenize = lk;
var vg = {}, qr = {};
let pn = null, ck = class xt {
  static createItem(t) {
    return {
      prev: null,
      next: null,
      data: t
    };
  }
  constructor() {
    this.head = null, this.tail = null, this.cursor = null;
  }
  createItem(t) {
    return xt.createItem(t);
  }
  // cursor helpers
  allocateCursor(t, r) {
    let n;
    return pn !== null ? (n = pn, pn = pn.cursor, n.prev = t, n.next = r, n.cursor = this.cursor) : n = {
      prev: t,
      next: r,
      cursor: this.cursor
    }, this.cursor = n, n;
  }
  releaseCursor() {
    const { cursor: t } = this;
    this.cursor = t.cursor, t.prev = null, t.next = null, t.cursor = pn, pn = t;
  }
  updateCursors(t, r, n, a) {
    let { cursor: i } = this;
    for (; i !== null; )
      i.prev === t && (i.prev = r), i.next === n && (i.next = a), i = i.cursor;
  }
  *[Symbol.iterator]() {
    for (let t = this.head; t !== null; t = t.next)
      yield t.data;
  }
  // getters
  get size() {
    let t = 0;
    for (let r = this.head; r !== null; r = r.next)
      t++;
    return t;
  }
  get isEmpty() {
    return this.head === null;
  }
  get first() {
    return this.head && this.head.data;
  }
  get last() {
    return this.tail && this.tail.data;
  }
  // convertors
  fromArray(t) {
    let r = null;
    this.head = null;
    for (let n of t) {
      const a = xt.createItem(n);
      r !== null ? r.next = a : this.head = a, a.prev = r, r = a;
    }
    return this.tail = r, this;
  }
  toArray() {
    return [...this];
  }
  toJSON() {
    return [...this];
  }
  // array-like methods
  forEach(t, r = this) {
    const n = this.allocateCursor(null, this.head);
    for (; n.next !== null; ) {
      const a = n.next;
      n.next = a.next, t.call(r, a.data, a, this);
    }
    this.releaseCursor();
  }
  forEachRight(t, r = this) {
    const n = this.allocateCursor(this.tail, null);
    for (; n.prev !== null; ) {
      const a = n.prev;
      n.prev = a.prev, t.call(r, a.data, a, this);
    }
    this.releaseCursor();
  }
  reduce(t, r, n = this) {
    let a = this.allocateCursor(null, this.head), i = r, s;
    for (; a.next !== null; )
      s = a.next, a.next = s.next, i = t.call(n, i, s.data, s, this);
    return this.releaseCursor(), i;
  }
  reduceRight(t, r, n = this) {
    let a = this.allocateCursor(this.tail, null), i = r, s;
    for (; a.prev !== null; )
      s = a.prev, a.prev = s.prev, i = t.call(n, i, s.data, s, this);
    return this.releaseCursor(), i;
  }
  some(t, r = this) {
    for (let n = this.head; n !== null; n = n.next)
      if (t.call(r, n.data, n, this))
        return !0;
    return !1;
  }
  map(t, r = this) {
    const n = new xt();
    for (let a = this.head; a !== null; a = a.next)
      n.appendData(t.call(r, a.data, a, this));
    return n;
  }
  filter(t, r = this) {
    const n = new xt();
    for (let a = this.head; a !== null; a = a.next)
      t.call(r, a.data, a, this) && n.appendData(a.data);
    return n;
  }
  nextUntil(t, r, n = this) {
    if (t === null)
      return;
    const a = this.allocateCursor(null, t);
    for (; a.next !== null; ) {
      const i = a.next;
      if (a.next = i.next, r.call(n, i.data, i, this))
        break;
    }
    this.releaseCursor();
  }
  prevUntil(t, r, n = this) {
    if (t === null)
      return;
    const a = this.allocateCursor(t, null);
    for (; a.prev !== null; ) {
      const i = a.prev;
      if (a.prev = i.prev, r.call(n, i.data, i, this))
        break;
    }
    this.releaseCursor();
  }
  // mutation
  clear() {
    this.head = null, this.tail = null;
  }
  copy() {
    const t = new xt();
    for (let r of this)
      t.appendData(r);
    return t;
  }
  prepend(t) {
    return this.updateCursors(null, t, this.head, t), this.head !== null ? (this.head.prev = t, t.next = this.head) : this.tail = t, this.head = t, this;
  }
  prependData(t) {
    return this.prepend(xt.createItem(t));
  }
  append(t) {
    return this.insert(t);
  }
  appendData(t) {
    return this.insert(xt.createItem(t));
  }
  insert(t, r = null) {
    if (r !== null)
      if (this.updateCursors(r.prev, t, r, t), r.prev === null) {
        if (this.head !== r)
          throw new Error("before doesn't belong to list");
        this.head = t, r.prev = t, t.next = r, this.updateCursors(null, t);
      } else
        r.prev.next = t, t.prev = r.prev, r.prev = t, t.next = r;
    else
      this.updateCursors(this.tail, t, null, t), this.tail !== null ? (this.tail.next = t, t.prev = this.tail) : this.head = t, this.tail = t;
    return this;
  }
  insertData(t, r) {
    return this.insert(xt.createItem(t), r);
  }
  remove(t) {
    if (this.updateCursors(t, t.prev, t, t.next), t.prev !== null)
      t.prev.next = t.next;
    else {
      if (this.head !== t)
        throw new Error("item doesn't belong to list");
      this.head = t.next;
    }
    if (t.next !== null)
      t.next.prev = t.prev;
    else {
      if (this.tail !== t)
        throw new Error("item doesn't belong to list");
      this.tail = t.prev;
    }
    return t.prev = null, t.next = null, t;
  }
  push(t) {
    this.insert(xt.createItem(t));
  }
  pop() {
    return this.tail !== null ? this.remove(this.tail) : null;
  }
  unshift(t) {
    this.prepend(xt.createItem(t));
  }
  shift() {
    return this.head !== null ? this.remove(this.head) : null;
  }
  prependList(t) {
    return this.insertList(t, this.head);
  }
  appendList(t) {
    return this.insertList(t);
  }
  insertList(t, r) {
    return t.head === null ? this : (r != null ? (this.updateCursors(r.prev, t.tail, r, t.head), r.prev !== null ? (r.prev.next = t.head, t.head.prev = r.prev) : this.head = t.head, r.prev = t.tail, t.tail.next = r) : (this.updateCursors(this.tail, t.tail, null, t.head), this.tail !== null ? (this.tail.next = t.head, t.head.prev = this.tail) : this.head = t.head, this.tail = t.tail), t.head = null, t.tail = null, this);
  }
  replace(t, r) {
    "head" in r ? this.insertList(r, t) : this.insert(r, t), this.remove(t);
  }
};
qr.List = ck;
var xg = {}, pu = {};
function fk(e, t) {
  const r = Object.create(SyntaxError.prototype), n = new Error();
  return Object.assign(r, {
    name: e,
    message: t,
    get stack() {
      return (n.stack || "").replace(/^(.+\n){1,3}/, `${e}: ${t}
`);
    }
  });
}
pu.createCustomError = fk;
const dk = pu, cl = 100, Kd = 60, Qd = "    ";
function Zd({ source: e, line: t, column: r }, n) {
  function a(c, f) {
    return i.slice(c, f).map(
      (d, h) => String(c + h + 1).padStart(l) + " |" + d
    ).join(`
`);
  }
  const i = e.split(/\r\n?|\n|\f/), s = Math.max(1, t - n) - 1, u = Math.min(t + n, i.length + 1), l = Math.max(4, String(u).length) + 1;
  let o = 0;
  r += (Qd.length - 1) * (i[t - 1].substr(0, r - 1).match(/\t/g) || []).length, r > cl && (o = r - Kd + 3, r = Kd - 2);
  for (let c = s; c <= u; c++)
    c >= 0 && c < i.length && (i[c] = i[c].replace(/\t/g, Qd), i[c] = (o > 0 && i[c].length > o ? "…" : "") + i[c].substr(o, cl - 2) + (i[c].length > o + cl - 1 ? "…" : ""));
  return [
    a(s, t),
    new Array(r + l + 2).join("-") + "^",
    a(t, u)
  ].filter(Boolean).join(`
`);
}
function hk(e, t, r, n, a) {
  return Object.assign(dk.createCustomError("SyntaxError", e), {
    source: t,
    offset: r,
    line: n,
    column: a,
    sourceFragment(s) {
      return Zd({ source: t, line: n, column: a }, isNaN(s) ? 0 : s);
    },
    get formattedMessage() {
      return `Parse error: ${e}
` + Zd({ source: t, line: n, column: a }, 2);
    }
  });
}
xg.SyntaxError = hk;
var kg = {};
const Jd = R;
function pk(e) {
  const t = this.createList();
  let r = !1;
  const n = {
    recognizer: e
  };
  for (; !this.eof; ) {
    switch (this.tokenType) {
      case Jd.Comment:
        this.next();
        continue;
      case Jd.WhiteSpace:
        r = !0, this.next();
        continue;
    }
    let a = e.getNode.call(this, n);
    if (a === void 0)
      break;
    r && (e.onWhiteSpace && e.onWhiteSpace.call(this, a, t, n), r = !1), t.push(a);
  }
  return r && e.onWhiteSpace && e.onWhiteSpace.call(this, null, t, n), t;
}
kg.readSequence = pk;
const e0 = qr, t0 = xg, mk = U, gk = kg, bk = kf, yk = hu, ui = Ce, Mt = R, vk = du, r0 = () => {
}, xk = 33, kk = 35, fl = 59, n0 = 123, a0 = 0;
function wk(e) {
  return function() {
    return this[e]();
  };
}
function dl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r in e) {
    const n = e[r], a = n.parse || n;
    a && (t[r] = a);
  }
  return t;
}
function Sk(e) {
  const t = {
    context: /* @__PURE__ */ Object.create(null),
    scope: Object.assign(/* @__PURE__ */ Object.create(null), e.scope),
    atrule: dl(e.atrule),
    pseudo: dl(e.pseudo),
    node: dl(e.node)
  };
  for (const r in e.parseContext)
    switch (typeof e.parseContext[r]) {
      case "function":
        t.context[r] = e.parseContext[r];
        break;
      case "string":
        t.context[r] = wk(e.parseContext[r]);
        break;
    }
  return {
    config: t,
    ...t,
    ...t.node
  };
}
function Ck(e) {
  let t = "", r = "<unknown>", n = !1, a = r0, i = !1;
  const s = new bk.OffsetToLocation(), u = Object.assign(new yk.TokenStream(), Sk(e || {}), {
    parseAtrulePrelude: !0,
    parseRulePrelude: !0,
    parseValue: !0,
    parseCustomProperty: !1,
    readSequence: gk.readSequence,
    consumeUntilBalanceEnd: () => 0,
    consumeUntilLeftCurlyBracket(o) {
      return o === n0 ? 1 : 0;
    },
    consumeUntilLeftCurlyBracketOrSemicolon(o) {
      return o === n0 || o === fl ? 1 : 0;
    },
    consumeUntilExclamationMarkOrSemicolon(o) {
      return o === xk || o === fl ? 1 : 0;
    },
    consumeUntilSemicolonIncluded(o) {
      return o === fl ? 2 : 0;
    },
    createList() {
      return new e0.List();
    },
    createSingleNodeList(o) {
      return new e0.List().appendData(o);
    },
    getFirstListNode(o) {
      return o && o.first;
    },
    getLastListNode(o) {
      return o && o.last;
    },
    parseWithFallback(o, c) {
      const f = this.tokenIndex;
      try {
        return o.call(this);
      } catch (d) {
        if (i)
          throw d;
        const h = c.call(this, f);
        return i = !0, a(d, h), i = !1, h;
      }
    },
    lookupNonWSType(o) {
      let c;
      do
        if (c = this.lookupType(o++), c !== Mt.WhiteSpace)
          return c;
      while (c !== a0);
      return a0;
    },
    charCodeAt(o) {
      return o >= 0 && o < t.length ? t.charCodeAt(o) : 0;
    },
    substring(o, c) {
      return t.substring(o, c);
    },
    substrToCursor(o) {
      return this.source.substring(o, this.tokenStart);
    },
    cmpChar(o, c) {
      return ui.cmpChar(t, o, c);
    },
    cmpStr(o, c, f) {
      return ui.cmpStr(t, o, c, f);
    },
    consume(o) {
      const c = this.tokenStart;
      return this.eat(o), this.substrToCursor(c);
    },
    consumeFunctionName() {
      const o = t.substring(this.tokenStart, this.tokenEnd - 1);
      return this.eat(Mt.Function), o;
    },
    consumeNumber(o) {
      const c = t.substring(this.tokenStart, ui.consumeNumber(t, this.tokenStart));
      return this.eat(o), c;
    },
    eat(o) {
      if (this.tokenType !== o) {
        const c = vk[o].slice(0, -6).replace(/-/g, " ").replace(/^./, (h) => h.toUpperCase());
        let f = `${/[[\](){}]/.test(c) ? `"${c}"` : c} is expected`, d = this.tokenStart;
        switch (o) {
          case Mt.Ident:
            this.tokenType === Mt.Function || this.tokenType === Mt.Url ? (d = this.tokenEnd - 1, f = "Identifier is expected but function found") : f = "Identifier is expected";
            break;
          case Mt.Hash:
            this.isDelim(kk) && (this.next(), d++, f = "Name is expected");
            break;
          case Mt.Percentage:
            this.tokenType === Mt.Number && (d = this.tokenEnd, f = "Percent sign is expected");
            break;
        }
        this.error(f, d);
      }
      this.next();
    },
    eatIdent(o) {
      (this.tokenType !== Mt.Ident || this.lookupValue(0, o) === !1) && this.error(`Identifier "${o}" is expected`), this.next();
    },
    eatDelim(o) {
      this.isDelim(o) || this.error(`Delim "${String.fromCharCode(o)}" is expected`), this.next();
    },
    getLocation(o, c) {
      return n ? s.getLocationRange(
        o,
        c,
        r
      ) : null;
    },
    getLocationFromList(o) {
      if (n) {
        const c = this.getFirstListNode(o), f = this.getLastListNode(o);
        return s.getLocationRange(
          c !== null ? c.loc.start.offset - s.startOffset : this.tokenStart,
          f !== null ? f.loc.end.offset - s.startOffset : this.tokenStart,
          r
        );
      }
      return null;
    },
    error(o, c) {
      const f = typeof c < "u" && c < t.length ? s.getLocation(c) : this.eof ? s.getLocation(ui.findWhiteSpaceStart(t, t.length - 1)) : s.getLocation(this.tokenStart);
      throw new t0.SyntaxError(
        o || "Unexpected input",
        t,
        f.offset,
        f.line,
        f.column
      );
    }
  });
  return Object.assign(function(o, c) {
    t = o, c = c || {}, u.setSource(t, mk.tokenize), s.setSource(
      t,
      c.offset,
      c.line,
      c.column
    ), r = c.filename || "<unknown>", n = !!c.positions, a = typeof c.onParseError == "function" ? c.onParseError : r0, i = !1, u.parseAtrulePrelude = "parseAtrulePrelude" in c ? !!c.parseAtrulePrelude : !0, u.parseRulePrelude = "parseRulePrelude" in c ? !!c.parseRulePrelude : !0, u.parseValue = "parseValue" in c ? !!c.parseValue : !0, u.parseCustomProperty = "parseCustomProperty" in c ? !!c.parseCustomProperty : !1;
    const { context: f = "default", onComment: d } = c;
    if (!(f in u.context))
      throw new Error("Unknown context `" + f + "`");
    typeof d == "function" && u.forEachToken((p, g, x) => {
      if (p === Mt.Comment) {
        const C = u.getLocation(g, x), S = ui.cmpStr(t, x - 2, x, "*/") ? t.slice(g + 2, x - 2) : t.slice(g + 2, x);
        d(S, C);
      }
    });
    const h = u.context[f].call(u, c);
    return u.eof || u.error(), h;
  }, {
    SyntaxError: t0.SyntaxError,
    config: u.config
  });
}
vg.createParser = Ck;
var wg = {}, Sg = {}, Sf = {}, Cf = {}, $f = {}, i0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
$f.encode = function(e) {
  if (0 <= e && e < i0.length)
    return i0[e];
  throw new TypeError("Must be between 0 and 63: " + e);
};
$f.decode = function(e) {
  var t = 65, r = 90, n = 97, a = 122, i = 48, s = 57, u = 43, l = 47, o = 26, c = 52;
  return t <= e && e <= r ? e - t : n <= e && e <= a ? e - n + o : i <= e && e <= s ? e - i + c : e == u ? 62 : e == l ? 63 : -1;
};
var Cg = $f, Af = 5, $g = 1 << Af, Ag = $g - 1, Eg = $g;
function $k(e) {
  return e < 0 ? (-e << 1) + 1 : (e << 1) + 0;
}
function Ak(e) {
  var t = (e & 1) === 1, r = e >> 1;
  return t ? -r : r;
}
Cf.encode = function(t) {
  var r = "", n, a = $k(t);
  do
    n = a & Ag, a >>>= Af, a > 0 && (n |= Eg), r += Cg.encode(n);
  while (a > 0);
  return r;
};
Cf.decode = function(t, r, n) {
  var a = t.length, i = 0, s = 0, u, l;
  do {
    if (r >= a)
      throw new Error("Expected more digits in base 64 VLQ value.");
    if (l = Cg.decode(t.charCodeAt(r++)), l === -1)
      throw new Error("Invalid base64 digit: " + t.charAt(r - 1));
    u = !!(l & Eg), l &= Ag, i = i + (l << s), s += Af;
  } while (u);
  n.value = Ak(i), n.rest = r;
};
var mu = {};
(function(e) {
  function t(k, w, L) {
    if (w in k)
      return k[w];
    if (arguments.length === 3)
      return L;
    throw new Error('"' + w + '" is a required argument.');
  }
  e.getArg = t;
  var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, n = /^data:.+\,.+$/;
  function a(k) {
    var w = k.match(r);
    return w ? {
      scheme: w[1],
      auth: w[2],
      host: w[3],
      port: w[4],
      path: w[5]
    } : null;
  }
  e.urlParse = a;
  function i(k) {
    var w = "";
    return k.scheme && (w += k.scheme + ":"), w += "//", k.auth && (w += k.auth + "@"), k.host && (w += k.host), k.port && (w += ":" + k.port), k.path && (w += k.path), w;
  }
  e.urlGenerate = i;
  var s = 32;
  function u(k) {
    var w = [];
    return function(L) {
      for (var v = 0; v < w.length; v++)
        if (w[v].input === L) {
          var O = w[0];
          return w[0] = w[v], w[v] = O, w[0].result;
        }
      var N = k(L);
      return w.unshift({
        input: L,
        result: N
      }), w.length > s && w.pop(), N;
    };
  }
  var l = u(function(w) {
    var L = w, v = a(w);
    if (v) {
      if (!v.path)
        return w;
      L = v.path;
    }
    for (var O = e.isAbsolute(L), N = [], H = 0, q = 0; ; )
      if (H = q, q = L.indexOf("/", H), q === -1) {
        N.push(L.slice(H));
        break;
      } else
        for (N.push(L.slice(H, q)); q < L.length && L[q] === "/"; )
          q++;
    for (var te, J = 0, q = N.length - 1; q >= 0; q--)
      te = N[q], te === "." ? N.splice(q, 1) : te === ".." ? J++ : J > 0 && (te === "" ? (N.splice(q + 1, J), J = 0) : (N.splice(q, 2), J--));
    return L = N.join("/"), L === "" && (L = O ? "/" : "."), v ? (v.path = L, i(v)) : L;
  });
  e.normalize = l;
  function o(k, w) {
    k === "" && (k = "."), w === "" && (w = ".");
    var L = a(w), v = a(k);
    if (v && (k = v.path || "/"), L && !L.scheme)
      return v && (L.scheme = v.scheme), i(L);
    if (L || w.match(n))
      return w;
    if (v && !v.host && !v.path)
      return v.host = w, i(v);
    var O = w.charAt(0) === "/" ? w : l(k.replace(/\/+$/, "") + "/" + w);
    return v ? (v.path = O, i(v)) : O;
  }
  e.join = o, e.isAbsolute = function(k) {
    return k.charAt(0) === "/" || r.test(k);
  };
  function c(k, w) {
    k === "" && (k = "."), k = k.replace(/\/$/, "");
    for (var L = 0; w.indexOf(k + "/") !== 0; ) {
      var v = k.lastIndexOf("/");
      if (v < 0 || (k = k.slice(0, v), k.match(/^([^\/]+:\/)?\/*$/)))
        return w;
      ++L;
    }
    return Array(L + 1).join("../") + w.substr(k.length + 1);
  }
  e.relative = c;
  var f = function() {
    var k = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in k);
  }();
  function d(k) {
    return k;
  }
  function h(k) {
    return g(k) ? "$" + k : k;
  }
  e.toSetString = f ? d : h;
  function p(k) {
    return g(k) ? k.slice(1) : k;
  }
  e.fromSetString = f ? d : p;
  function g(k) {
    if (!k)
      return !1;
    var w = k.length;
    if (w < 9 || k.charCodeAt(w - 1) !== 95 || k.charCodeAt(w - 2) !== 95 || k.charCodeAt(w - 3) !== 111 || k.charCodeAt(w - 4) !== 116 || k.charCodeAt(w - 5) !== 111 || k.charCodeAt(w - 6) !== 114 || k.charCodeAt(w - 7) !== 112 || k.charCodeAt(w - 8) !== 95 || k.charCodeAt(w - 9) !== 95)
      return !1;
    for (var L = w - 10; L >= 0; L--)
      if (k.charCodeAt(L) !== 36)
        return !1;
    return !0;
  }
  function x(k, w, L) {
    var v = T(k.source, w.source);
    return v !== 0 || (v = k.originalLine - w.originalLine, v !== 0) || (v = k.originalColumn - w.originalColumn, v !== 0 || L) || (v = k.generatedColumn - w.generatedColumn, v !== 0) || (v = k.generatedLine - w.generatedLine, v !== 0) ? v : T(k.name, w.name);
  }
  e.compareByOriginalPositions = x;
  function C(k, w, L) {
    var v;
    return v = k.originalLine - w.originalLine, v !== 0 || (v = k.originalColumn - w.originalColumn, v !== 0 || L) || (v = k.generatedColumn - w.generatedColumn, v !== 0) || (v = k.generatedLine - w.generatedLine, v !== 0) ? v : T(k.name, w.name);
  }
  e.compareByOriginalPositionsNoSource = C;
  function S(k, w, L) {
    var v = k.generatedLine - w.generatedLine;
    return v !== 0 || (v = k.generatedColumn - w.generatedColumn, v !== 0 || L) || (v = T(k.source, w.source), v !== 0) || (v = k.originalLine - w.originalLine, v !== 0) || (v = k.originalColumn - w.originalColumn, v !== 0) ? v : T(k.name, w.name);
  }
  e.compareByGeneratedPositionsDeflated = S;
  function P(k, w, L) {
    var v = k.generatedColumn - w.generatedColumn;
    return v !== 0 || L || (v = T(k.source, w.source), v !== 0) || (v = k.originalLine - w.originalLine, v !== 0) || (v = k.originalColumn - w.originalColumn, v !== 0) ? v : T(k.name, w.name);
  }
  e.compareByGeneratedPositionsDeflatedNoLine = P;
  function T(k, w) {
    return k === w ? 0 : k === null ? 1 : w === null ? -1 : k > w ? 1 : -1;
  }
  function y(k, w) {
    var L = k.generatedLine - w.generatedLine;
    return L !== 0 || (L = k.generatedColumn - w.generatedColumn, L !== 0) || (L = T(k.source, w.source), L !== 0) || (L = k.originalLine - w.originalLine, L !== 0) || (L = k.originalColumn - w.originalColumn, L !== 0) ? L : T(k.name, w.name);
  }
  e.compareByGeneratedPositionsInflated = y;
  function D(k) {
    return JSON.parse(k.replace(/^\)]}'[^\n]*\n/, ""));
  }
  e.parseSourceMapInput = D;
  function I(k, w, L) {
    if (w = w || "", k && (k[k.length - 1] !== "/" && w[0] !== "/" && (k += "/"), w = k + w), L) {
      var v = a(L);
      if (!v)
        throw new Error("sourceMapURL could not be parsed");
      if (v.path) {
        var O = v.path.lastIndexOf("/");
        O >= 0 && (v.path = v.path.substring(0, O + 1));
      }
      w = o(i(v), w);
    }
    return l(w);
  }
  e.computeSourceURL = I;
})(mu);
var Tg = {}, Ef = mu, Tf = Object.prototype.hasOwnProperty, _r = typeof Map < "u";
function rr() {
  this._array = [], this._set = _r ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
}
rr.fromArray = function(t, r) {
  for (var n = new rr(), a = 0, i = t.length; a < i; a++)
    n.add(t[a], r);
  return n;
};
rr.prototype.size = function() {
  return _r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
rr.prototype.add = function(t, r) {
  var n = _r ? t : Ef.toSetString(t), a = _r ? this.has(t) : Tf.call(this._set, n), i = this._array.length;
  (!a || r) && this._array.push(t), a || (_r ? this._set.set(t, i) : this._set[n] = i);
};
rr.prototype.has = function(t) {
  if (_r)
    return this._set.has(t);
  var r = Ef.toSetString(t);
  return Tf.call(this._set, r);
};
rr.prototype.indexOf = function(t) {
  if (_r) {
    var r = this._set.get(t);
    if (r >= 0)
      return r;
  } else {
    var n = Ef.toSetString(t);
    if (Tf.call(this._set, n))
      return this._set[n];
  }
  throw new Error('"' + t + '" is not in the set.');
};
rr.prototype.at = function(t) {
  if (t >= 0 && t < this._array.length)
    return this._array[t];
  throw new Error("No element indexed by " + t);
};
rr.prototype.toArray = function() {
  return this._array.slice();
};
Tg.ArraySet = rr;
var Pg = {}, Lg = mu;
function Ek(e, t) {
  var r = e.generatedLine, n = t.generatedLine, a = e.generatedColumn, i = t.generatedColumn;
  return n > r || n == r && i >= a || Lg.compareByGeneratedPositionsInflated(e, t) <= 0;
}
function gu() {
  this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
}
gu.prototype.unsortedForEach = function(t, r) {
  this._array.forEach(t, r);
};
gu.prototype.add = function(t) {
  Ek(this._last, t) ? (this._last = t, this._array.push(t)) : (this._sorted = !1, this._array.push(t));
};
gu.prototype.toArray = function() {
  return this._sorted || (this._array.sort(Lg.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
};
Pg.MappingList = gu;
var li = Cf, we = mu, Io = Tg.ArraySet, Tk = Pg.MappingList;
function gt(e) {
  e || (e = {}), this._file = we.getArg(e, "file", null), this._sourceRoot = we.getArg(e, "sourceRoot", null), this._skipValidation = we.getArg(e, "skipValidation", !1), this._ignoreInvalidMapping = we.getArg(e, "ignoreInvalidMapping", !1), this._sources = new Io(), this._names = new Io(), this._mappings = new Tk(), this._sourcesContents = null;
}
gt.prototype._version = 3;
gt.fromSourceMap = function(t, r) {
  var n = t.sourceRoot, a = new gt(Object.assign(r || {}, {
    file: t.file,
    sourceRoot: n
  }));
  return t.eachMapping(function(i) {
    var s = {
      generated: {
        line: i.generatedLine,
        column: i.generatedColumn
      }
    };
    i.source != null && (s.source = i.source, n != null && (s.source = we.relative(n, s.source)), s.original = {
      line: i.originalLine,
      column: i.originalColumn
    }, i.name != null && (s.name = i.name)), a.addMapping(s);
  }), t.sources.forEach(function(i) {
    var s = i;
    n !== null && (s = we.relative(n, i)), a._sources.has(s) || a._sources.add(s);
    var u = t.sourceContentFor(i);
    u != null && a.setSourceContent(i, u);
  }), a;
};
gt.prototype.addMapping = function(t) {
  var r = we.getArg(t, "generated"), n = we.getArg(t, "original", null), a = we.getArg(t, "source", null), i = we.getArg(t, "name", null);
  !this._skipValidation && this._validateMapping(r, n, a, i) === !1 || (a != null && (a = String(a), this._sources.has(a) || this._sources.add(a)), i != null && (i = String(i), this._names.has(i) || this._names.add(i)), this._mappings.add({
    generatedLine: r.line,
    generatedColumn: r.column,
    originalLine: n != null && n.line,
    originalColumn: n != null && n.column,
    source: a,
    name: i
  }));
};
gt.prototype.setSourceContent = function(t, r) {
  var n = t;
  this._sourceRoot != null && (n = we.relative(this._sourceRoot, n)), r != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[we.toSetString(n)] = r) : this._sourcesContents && (delete this._sourcesContents[we.toSetString(n)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
};
gt.prototype.applySourceMap = function(t, r, n) {
  var a = r;
  if (r == null) {
    if (t.file == null)
      throw new Error(
        `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
      );
    a = t.file;
  }
  var i = this._sourceRoot;
  i != null && (a = we.relative(i, a));
  var s = new Io(), u = new Io();
  this._mappings.unsortedForEach(function(l) {
    if (l.source === a && l.originalLine != null) {
      var o = t.originalPositionFor({
        line: l.originalLine,
        column: l.originalColumn
      });
      o.source != null && (l.source = o.source, n != null && (l.source = we.join(n, l.source)), i != null && (l.source = we.relative(i, l.source)), l.originalLine = o.line, l.originalColumn = o.column, o.name != null && (l.name = o.name));
    }
    var c = l.source;
    c != null && !s.has(c) && s.add(c);
    var f = l.name;
    f != null && !u.has(f) && u.add(f);
  }, this), this._sources = s, this._names = u, t.sources.forEach(function(l) {
    var o = t.sourceContentFor(l);
    o != null && (n != null && (l = we.join(n, l)), i != null && (l = we.relative(i, l)), this.setSourceContent(l, o));
  }, this);
};
gt.prototype._validateMapping = function(t, r, n, a) {
  if (r && typeof r.line != "number" && typeof r.column != "number") {
    var i = "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.";
    if (this._ignoreInvalidMapping)
      return typeof console < "u" && console.warn && console.warn(i), !1;
    throw new Error(i);
  }
  if (!(t && "line" in t && "column" in t && t.line > 0 && t.column >= 0 && !r && !n && !a)) {
    if (t && "line" in t && "column" in t && r && "line" in r && "column" in r && t.line > 0 && t.column >= 0 && r.line > 0 && r.column >= 0 && n)
      return;
    var i = "Invalid mapping: " + JSON.stringify({
      generated: t,
      source: n,
      original: r,
      name: a
    });
    if (this._ignoreInvalidMapping)
      return typeof console < "u" && console.warn && console.warn(i), !1;
    throw new Error(i);
  }
};
gt.prototype._serializeMappings = function() {
  for (var t = 0, r = 1, n = 0, a = 0, i = 0, s = 0, u = "", l, o, c, f, d = this._mappings.toArray(), h = 0, p = d.length; h < p; h++) {
    if (o = d[h], l = "", o.generatedLine !== r)
      for (t = 0; o.generatedLine !== r; )
        l += ";", r++;
    else if (h > 0) {
      if (!we.compareByGeneratedPositionsInflated(o, d[h - 1]))
        continue;
      l += ",";
    }
    l += li.encode(o.generatedColumn - t), t = o.generatedColumn, o.source != null && (f = this._sources.indexOf(o.source), l += li.encode(f - s), s = f, l += li.encode(o.originalLine - 1 - a), a = o.originalLine - 1, l += li.encode(o.originalColumn - n), n = o.originalColumn, o.name != null && (c = this._names.indexOf(o.name), l += li.encode(c - i), i = c)), u += l;
  }
  return u;
};
gt.prototype._generateSourcesContent = function(t, r) {
  return t.map(function(n) {
    if (!this._sourcesContents)
      return null;
    r != null && (n = we.relative(r, n));
    var a = we.toSetString(n);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, a) ? this._sourcesContents[a] : null;
  }, this);
};
gt.prototype.toJSON = function() {
  var t = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  return this._file != null && (t.file = this._file), this._sourceRoot != null && (t.sourceRoot = this._sourceRoot), this._sourcesContents && (t.sourcesContent = this._generateSourcesContent(t.sources, t.sourceRoot)), t;
};
gt.prototype.toString = function() {
  return JSON.stringify(this.toJSON());
};
Sf.SourceMapGenerator = gt;
const Pk = Sf, s0 = /* @__PURE__ */ new Set(["Atrule", "Selector", "Declaration"]);
function Lk(e) {
  const t = new Pk.SourceMapGenerator(), r = {
    line: 1,
    column: 0
  }, n = {
    line: 0,
    // should be zero to add first mapping
    column: 0
  }, a = {
    line: 1,
    column: 0
  }, i = {
    generated: a
  };
  let s = 1, u = 0, l = !1;
  const o = e.node;
  e.node = function(d) {
    if (d.loc && d.loc.start && s0.has(d.type)) {
      const h = d.loc.start.line, p = d.loc.start.column - 1;
      (n.line !== h || n.column !== p) && (n.line = h, n.column = p, r.line = s, r.column = u, l && (l = !1, (r.line !== a.line || r.column !== a.column) && t.addMapping(i)), l = !0, t.addMapping({
        source: d.loc.source,
        original: n,
        generated: r
      }));
    }
    o.call(this, d), l && s0.has(d.type) && (a.line = s, a.column = u);
  };
  const c = e.emit;
  e.emit = function(d, h, p) {
    for (let g = 0; g < d.length; g++)
      d.charCodeAt(g) === 10 ? (s++, u = 0) : u++;
    c(d, h, p);
  };
  const f = e.result;
  return e.result = function() {
    return l && t.addMapping(i), {
      css: f(),
      map: t
    };
  }, e;
}
Sg.generateSourceMap = Lk;
var Pf = {};
const A = R, Nk = 43, Dk = 45, hl = (e, t) => {
  if (e === A.Delim && (e = t), typeof e == "string") {
    const r = e.charCodeAt(0);
    return r > 127 ? 32768 : r << 8;
  }
  return e;
}, Ng = [
  [A.Ident, A.Ident],
  [A.Ident, A.Function],
  [A.Ident, A.Url],
  [A.Ident, A.BadUrl],
  [A.Ident, "-"],
  [A.Ident, A.Number],
  [A.Ident, A.Percentage],
  [A.Ident, A.Dimension],
  [A.Ident, A.CDC],
  [A.Ident, A.LeftParenthesis],
  [A.AtKeyword, A.Ident],
  [A.AtKeyword, A.Function],
  [A.AtKeyword, A.Url],
  [A.AtKeyword, A.BadUrl],
  [A.AtKeyword, "-"],
  [A.AtKeyword, A.Number],
  [A.AtKeyword, A.Percentage],
  [A.AtKeyword, A.Dimension],
  [A.AtKeyword, A.CDC],
  [A.Hash, A.Ident],
  [A.Hash, A.Function],
  [A.Hash, A.Url],
  [A.Hash, A.BadUrl],
  [A.Hash, "-"],
  [A.Hash, A.Number],
  [A.Hash, A.Percentage],
  [A.Hash, A.Dimension],
  [A.Hash, A.CDC],
  [A.Dimension, A.Ident],
  [A.Dimension, A.Function],
  [A.Dimension, A.Url],
  [A.Dimension, A.BadUrl],
  [A.Dimension, "-"],
  [A.Dimension, A.Number],
  [A.Dimension, A.Percentage],
  [A.Dimension, A.Dimension],
  [A.Dimension, A.CDC],
  ["#", A.Ident],
  ["#", A.Function],
  ["#", A.Url],
  ["#", A.BadUrl],
  ["#", "-"],
  ["#", A.Number],
  ["#", A.Percentage],
  ["#", A.Dimension],
  ["#", A.CDC],
  // https://github.com/w3c/csswg-drafts/pull/6874
  ["-", A.Ident],
  ["-", A.Function],
  ["-", A.Url],
  ["-", A.BadUrl],
  ["-", "-"],
  ["-", A.Number],
  ["-", A.Percentage],
  ["-", A.Dimension],
  ["-", A.CDC],
  // https://github.com/w3c/csswg-drafts/pull/6874
  [A.Number, A.Ident],
  [A.Number, A.Function],
  [A.Number, A.Url],
  [A.Number, A.BadUrl],
  [A.Number, A.Number],
  [A.Number, A.Percentage],
  [A.Number, A.Dimension],
  [A.Number, "%"],
  [A.Number, A.CDC],
  // https://github.com/w3c/csswg-drafts/pull/6874
  ["@", A.Ident],
  ["@", A.Function],
  ["@", A.Url],
  ["@", A.BadUrl],
  ["@", "-"],
  ["@", A.CDC],
  // https://github.com/w3c/csswg-drafts/pull/6874
  [".", A.Number],
  [".", A.Percentage],
  [".", A.Dimension],
  ["+", A.Number],
  ["+", A.Percentage],
  ["+", A.Dimension],
  ["/", "*"]
], Ok = Ng.concat([
  [A.Ident, A.Hash],
  [A.Dimension, A.Hash],
  [A.Hash, A.Hash],
  [A.AtKeyword, A.LeftParenthesis],
  [A.AtKeyword, A.String],
  [A.AtKeyword, A.Colon],
  [A.Percentage, A.Percentage],
  [A.Percentage, A.Dimension],
  [A.Percentage, A.Function],
  [A.Percentage, "-"],
  [A.RightParenthesis, A.Ident],
  [A.RightParenthesis, A.Function],
  [A.RightParenthesis, A.Percentage],
  [A.RightParenthesis, A.Dimension],
  [A.RightParenthesis, A.Hash],
  [A.RightParenthesis, "-"]
]);
function Dg(e) {
  const t = new Set(
    e.map(([r, n]) => hl(r) << 16 | hl(n))
  );
  return function(r, n, a) {
    const i = hl(n, a), s = a.charCodeAt(0);
    return (s === Dk && n !== A.Ident && n !== A.Function && n !== A.CDC || s === Nk ? t.has(r << 16 | s << 8) : t.has(r << 16 | i)) && this.emit(" ", A.WhiteSpace, !0), i;
  };
}
const Mk = Dg(Ng), Ik = Dg(Ok);
Pf.safe = Ik;
Pf.spec = Mk;
const Rk = U, _k = Sg, pl = Pf, o0 = R, Fk = 92;
function Bk(e, t) {
  if (typeof t == "function") {
    let r = null;
    e.children.forEach((n) => {
      r !== null && t.call(this, r), this.node(n), r = n;
    });
    return;
  }
  e.children.forEach(this.node, this);
}
function qk(e) {
  Rk.tokenize(e, (t, r, n) => {
    this.token(t, e.slice(r, n));
  });
}
function Uk(e) {
  const t = /* @__PURE__ */ new Map();
  for (let r in e.node) {
    const n = e.node[r];
    typeof (n.generate || n) == "function" && t.set(r, n.generate || n);
  }
  return function(r, n) {
    let a = "", i = 0, s = {
      node(l) {
        if (t.has(l.type))
          t.get(l.type).call(u, l);
        else
          throw new Error("Unknown node type: " + l.type);
      },
      tokenBefore: pl.safe,
      token(l, o) {
        i = this.tokenBefore(i, l, o), this.emit(o, l, !1), l === o0.Delim && o.charCodeAt(0) === Fk && this.emit(`
`, o0.WhiteSpace, !0);
      },
      emit(l) {
        a += l;
      },
      result() {
        return a;
      }
    };
    n && (typeof n.decorator == "function" && (s = n.decorator(s)), n.sourceMap && (s = _k.generateSourceMap(s)), n.mode in pl && (s.tokenBefore = pl[n.mode]));
    const u = {
      node: (l) => s.node(l),
      children: Bk,
      token: (l, o) => s.token(l, o),
      tokenize: qk
    };
    return s.node(r), s.result();
  };
}
wg.createGenerator = Uk;
var Og = {};
const ml = qr;
function jk(e) {
  return {
    fromPlainObject(t) {
      return e(t, {
        enter(r) {
          r.children && !(r.children instanceof ml.List) && (r.children = new ml.List().fromArray(r.children));
        }
      }), t;
    },
    toPlainObject(t) {
      return e(t, {
        leave(r) {
          r.children && r.children instanceof ml.List && (r.children = r.children.toArray());
        }
      }), t;
    }
  };
}
Og.createConvertor = jk;
var Mg = {};
const { hasOwnProperty: Lf } = Object.prototype, Ti = function() {
};
function u0(e) {
  return typeof e == "function" ? e : Ti;
}
function l0(e, t) {
  return function(r, n, a) {
    r.type === t && e.call(this, r, n, a);
  };
}
function zk(e, t) {
  const r = t.structure, n = [];
  for (const a in r) {
    if (Lf.call(r, a) === !1)
      continue;
    let i = r[a];
    const s = {
      name: a,
      type: !1,
      nullable: !1
    };
    Array.isArray(i) || (i = [i]);
    for (const u of i)
      u === null ? s.nullable = !0 : typeof u == "string" ? s.type = "node" : Array.isArray(u) && (s.type = "list");
    s.type && n.push(s);
  }
  return n.length ? {
    context: t.walkContext,
    fields: n
  } : null;
}
function Gk(e) {
  const t = {};
  for (const r in e.node)
    if (Lf.call(e.node, r)) {
      const n = e.node[r];
      if (!n.structure)
        throw new Error("Missed `structure` field in `" + r + "` node type definition");
      t[r] = zk(r, n);
    }
  return t;
}
function c0(e, t) {
  const r = e.fields.slice(), n = e.context, a = typeof n == "string";
  return t && r.reverse(), function(i, s, u, l) {
    let o;
    a && (o = s[n], s[n] = i);
    for (const c of r) {
      const f = i[c.name];
      if (!c.nullable || f) {
        if (c.type === "list") {
          if (t ? f.reduceRight(l, !1) : f.reduce(l, !1))
            return !0;
        } else if (u(f))
          return !0;
      }
    }
    a && (s[n] = o);
  };
}
function f0({
  StyleSheet: e,
  Atrule: t,
  Rule: r,
  Block: n,
  DeclarationList: a
}) {
  return {
    Atrule: {
      StyleSheet: e,
      Atrule: t,
      Rule: r,
      Block: n
    },
    Rule: {
      StyleSheet: e,
      Atrule: t,
      Rule: r,
      Block: n
    },
    Declaration: {
      StyleSheet: e,
      Atrule: t,
      Rule: r,
      Block: n,
      DeclarationList: a
    }
  };
}
function Hk(e) {
  const t = Gk(e), r = {}, n = {}, a = Symbol("break-walk"), i = Symbol("skip-node");
  for (const o in t)
    Lf.call(t, o) && t[o] !== null && (r[o] = c0(t[o], !1), n[o] = c0(t[o], !0));
  const s = f0(r), u = f0(n), l = function(o, c) {
    function f(C, S, P) {
      const T = d.call(x, C, S, P);
      return T === a ? !0 : T === i ? !1 : !!(p.hasOwnProperty(C.type) && p[C.type](C, x, f, g) || h.call(x, C, S, P) === a);
    }
    let d = Ti, h = Ti, p = r, g = (C, S, P, T) => C || f(S, P, T);
    const x = {
      break: a,
      skip: i,
      root: o,
      stylesheet: null,
      atrule: null,
      atrulePrelude: null,
      rule: null,
      selector: null,
      block: null,
      declaration: null,
      function: null
    };
    if (typeof c == "function")
      d = c;
    else if (c && (d = u0(c.enter), h = u0(c.leave), c.reverse && (p = n), c.visit)) {
      if (s.hasOwnProperty(c.visit))
        p = c.reverse ? u[c.visit] : s[c.visit];
      else if (!t.hasOwnProperty(c.visit))
        throw new Error("Bad value `" + c.visit + "` for `visit` option (should be: " + Object.keys(t).sort().join(", ") + ")");
      d = l0(d, c.visit), h = l0(h, c.visit);
    }
    if (d === Ti && h === Ti)
      throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    f(o);
  };
  return l.break = a, l.skip = i, l.find = function(o, c) {
    let f = null;
    return l(o, function(d, h, p) {
      if (c.call(this, d, h, p))
        return f = d, a;
    }), f;
  }, l.findLast = function(o, c) {
    let f = null;
    return l(o, {
      reverse: !0,
      enter(d, h, p) {
        if (c.call(this, d, h, p))
          return f = d, a;
      }
    }), f;
  }, l.findAll = function(o, c) {
    const f = [];
    return l(o, function(d, h, p) {
      c.call(this, d, h, p) && f.push(d);
    }), f;
  }, l;
}
Mg.createWalker = Hk;
var Nf = {}, Df = {}, bu = {};
function Vk(e) {
  return e;
}
function Wk(e) {
  const { min: t, max: r, comma: n } = e;
  return t === 0 && r === 0 ? n ? "#?" : "*" : t === 0 && r === 1 ? "?" : t === 1 && r === 0 ? n ? "#" : "+" : t === 1 && r === 1 ? "" : (n ? "#" : "") + (t === r ? "{" + t + "}" : "{" + t + "," + (r !== 0 ? r : "") + "}");
}
function Xk(e) {
  switch (e.type) {
    case "Range":
      return " [" + (e.min === null ? "-∞" : e.min) + "," + (e.max === null ? "∞" : e.max) + "]";
    default:
      throw new Error("Unknown node type `" + e.type + "`");
  }
}
function Yk(e, t, r, n) {
  const a = e.combinator === " " || n ? e.combinator : " " + e.combinator + " ", i = e.terms.map((s) => Of(s, t, r, n)).join(a);
  return e.explicit || r ? (n || i[0] === "," ? "[" : "[ ") + i + (n ? "]" : " ]") : i;
}
function Of(e, t, r, n) {
  let a;
  switch (e.type) {
    case "Group":
      a = Yk(e, t, r, n) + (e.disallowEmpty ? "!" : "");
      break;
    case "Multiplier":
      return Of(e.term, t, r, n) + t(Wk(e), e);
    case "Type":
      a = "<" + e.name + (e.opts ? t(Xk(e.opts), e.opts) : "") + ">";
      break;
    case "Property":
      a = "<'" + e.name + "'>";
      break;
    case "Keyword":
      a = e.name;
      break;
    case "AtKeyword":
      a = "@" + e.name;
      break;
    case "Function":
      a = e.name + "(";
      break;
    case "String":
    case "Token":
      a = e.value;
      break;
    case "Comma":
      a = ",";
      break;
    default:
      throw new Error("Unknown node type `" + e.type + "`");
  }
  return t(a, e);
}
function Kk(e, t) {
  let r = Vk, n = !1, a = !1;
  return typeof t == "function" ? r = t : t && (n = !!t.forceBraces, a = !!t.compact, typeof t.decorate == "function" && (r = t.decorate)), Of(e, r, n, a);
}
bu.generate = Kk;
const Ig = pu, Qk = bu, d0 = { offset: 0, line: 1, column: 1 };
function Zk(e, t) {
  const r = e.tokens, n = e.longestMatch, a = n < r.length && r[n].node || null, i = a !== t ? a : null;
  let s = 0, u = 0, l = 0, o = "", c, f;
  for (let d = 0; d < r.length; d++) {
    const h = r[d].value;
    d === n && (u = h.length, s = o.length), i !== null && r[d].node === i && (d <= n ? l++ : l = 0), o += h;
  }
  return n === r.length || l > 1 ? (c = Qs(i || t, "end") || Pi(d0, o), f = Pi(c)) : (c = Qs(i, "start") || Pi(Qs(t, "start") || d0, o.slice(0, s)), f = Qs(i, "end") || Pi(c, o.substr(s, u))), {
    css: o,
    mismatchOffset: s,
    mismatchLength: u,
    start: c,
    end: f
  };
}
function Qs(e, t) {
  const r = e && e.loc && e.loc[t];
  return r ? "line" in r ? Pi(r) : r : null;
}
function Pi({ offset: e, line: t, column: r }, n) {
  const a = {
    offset: e,
    line: t,
    column: r
  };
  if (n) {
    const i = n.split(/\n|\r\n?|\f/);
    a.offset += n.length, a.line += i.length - 1, a.column = i.length === 1 ? a.column + n.length : i.pop().length + 1;
  }
  return a;
}
const Jk = function(e, t) {
  const r = Ig.createCustomError(
    "SyntaxReferenceError",
    e + (t ? " `" + t + "`" : "")
  );
  return r.reference = t, r;
}, ew = function(e, t, r, n) {
  const a = Ig.createCustomError("SyntaxMatchError", e), {
    css: i,
    mismatchOffset: s,
    mismatchLength: u,
    start: l,
    end: o
  } = Zk(n, r);
  return a.rawMessage = e, a.syntax = t ? Qk.generate(t) : "<generic>", a.css = i, a.mismatchOffset = s, a.mismatchLength = u, a.message = e + `
  syntax: ` + a.syntax + `
   value: ` + (i || "<empty string>") + `
  --------` + new Array(a.mismatchOffset + 1).join("-") + "^", Object.assign(a, l), a.loc = {
    source: r && r.loc && r.loc.source || "<unknown>",
    start: l,
    end: o
  }, a;
};
Df.SyntaxMatchError = ew;
Df.SyntaxReferenceError = Jk;
var Ur = {};
const Zs = /* @__PURE__ */ new Map(), mn = /* @__PURE__ */ new Map(), Ro = 45, tw = aw, rw = iw, nw = If;
function Mf(e, t) {
  return t = t || 0, e.length - t >= 2 && e.charCodeAt(t) === Ro && e.charCodeAt(t + 1) === Ro;
}
function If(e, t) {
  if (t = t || 0, e.length - t >= 3 && e.charCodeAt(t) === Ro && e.charCodeAt(t + 1) !== Ro) {
    const r = e.indexOf("-", t + 2);
    if (r !== -1)
      return e.substring(t, r + 1);
  }
  return "";
}
function aw(e) {
  if (Zs.has(e))
    return Zs.get(e);
  const t = e.toLowerCase();
  let r = Zs.get(t);
  if (r === void 0) {
    const n = Mf(t, 0), a = n ? "" : If(t, 0);
    r = Object.freeze({
      basename: t.substr(a.length),
      name: t,
      prefix: a,
      vendor: a,
      custom: n
    });
  }
  return Zs.set(e, r), r;
}
function iw(e) {
  if (mn.has(e))
    return mn.get(e);
  let t = e, r = e[0];
  r === "/" ? r = e[1] === "/" ? "//" : "/" : r !== "_" && r !== "*" && r !== "$" && r !== "#" && r !== "+" && r !== "&" && (r = "");
  const n = Mf(t, r.length);
  if (!n && (t = t.toLowerCase(), mn.has(t))) {
    const u = mn.get(t);
    return mn.set(e, u), u;
  }
  const a = n ? "" : If(t, r.length), i = t.substr(0, r.length + a.length), s = Object.freeze({
    basename: t.substr(i.length),
    name: t.substr(r.length),
    hack: r,
    vendor: a,
    prefix: i,
    custom: n
  });
  return mn.set(e, s), s;
}
Ur.isCustomProperty = Mf;
Ur.keyword = tw;
Ur.property = rw;
Ur.vendorPrefix = nw;
var Rf = {};
const sw = [
  "initial",
  "inherit",
  "unset",
  "revert",
  "revert-layer"
];
Rf.cssWideKeywords = sw;
var hs = {};
const Rg = ie, $t = R, gl = Ce, Wi = 43, _t = 45, bl = 110, gn = !0, ow = !1;
function xc(e, t) {
  return e !== null && e.type === $t.Delim && e.value.charCodeAt(0) === t;
}
function ji(e, t, r) {
  for (; e !== null && (e.type === $t.WhiteSpace || e.type === $t.Comment); )
    e = r(++t);
  return t;
}
function ur(e, t, r, n) {
  if (!e)
    return 0;
  const a = e.value.charCodeAt(t);
  if (a === Wi || a === _t) {
    if (r)
      return 0;
    t++;
  }
  for (; t < e.value.length; t++)
    if (!Rg.isDigit(e.value.charCodeAt(t)))
      return 0;
  return n + 1;
}
function yl(e, t, r) {
  let n = !1, a = ji(e, t, r);
  if (e = r(a), e === null)
    return t;
  if (e.type !== $t.Number)
    if (xc(e, Wi) || xc(e, _t)) {
      if (n = !0, a = ji(r(++a), a, r), e = r(a), e === null || e.type !== $t.Number)
        return 0;
    } else
      return t;
  if (!n) {
    const i = e.value.charCodeAt(0);
    if (i !== Wi && i !== _t)
      return 0;
  }
  return ur(e, n ? 0 : 1, n, a);
}
function uw(e, t) {
  let r = 0;
  if (!e)
    return 0;
  if (e.type === $t.Number)
    return ur(e, 0, ow, r);
  if (e.type === $t.Ident && e.value.charCodeAt(0) === _t) {
    if (!gl.cmpChar(e.value, 1, bl))
      return 0;
    switch (e.value.length) {
      case 2:
        return yl(t(++r), r, t);
      case 3:
        return e.value.charCodeAt(2) !== _t ? 0 : (r = ji(t(++r), r, t), e = t(r), ur(e, 0, gn, r));
      default:
        return e.value.charCodeAt(2) !== _t ? 0 : ur(e, 3, gn, r);
    }
  } else if (e.type === $t.Ident || xc(e, Wi) && t(r + 1).type === $t.Ident) {
    if (e.type !== $t.Ident && (e = t(++r)), e === null || !gl.cmpChar(e.value, 0, bl))
      return 0;
    switch (e.value.length) {
      case 1:
        return yl(t(++r), r, t);
      case 2:
        return e.value.charCodeAt(1) !== _t ? 0 : (r = ji(t(++r), r, t), e = t(r), ur(e, 0, gn, r));
      default:
        return e.value.charCodeAt(1) !== _t ? 0 : ur(e, 2, gn, r);
    }
  } else if (e.type === $t.Dimension) {
    let n = e.value.charCodeAt(0), a = n === Wi || n === _t ? 1 : 0, i = a;
    for (; i < e.value.length && Rg.isDigit(e.value.charCodeAt(i)); i++)
      ;
    return i === a || !gl.cmpChar(e.value, i, bl) ? 0 : i + 1 === e.value.length ? yl(t(++r), r, t) : e.value.charCodeAt(i + 1) !== _t ? 0 : i + 2 === e.value.length ? (r = ji(t(++r), r, t), e = t(r), ur(e, 0, gn, r)) : ur(e, i + 2, gn, r);
  }
  return 0;
}
var lw = uw;
const cw = ie, Ar = R, fw = Ce, dw = 43, _g = 45, Fg = 63, hw = 117;
function kc(e, t) {
  return e !== null && e.type === Ar.Delim && e.value.charCodeAt(0) === t;
}
function pw(e, t) {
  return e.value.charCodeAt(0) === t;
}
function Li(e, t, r) {
  let n = 0;
  for (let a = t; a < e.value.length; a++) {
    const i = e.value.charCodeAt(a);
    if (i === _g && r && n !== 0)
      return Li(e, t + n + 1, !1), 6;
    if (!cw.isHexDigit(i) || ++n > 6)
      return 0;
  }
  return n;
}
function Js(e, t, r) {
  if (!e)
    return 0;
  for (; kc(r(t), Fg); ) {
    if (++e > 6)
      return 0;
    t++;
  }
  return t;
}
function mw(e, t) {
  let r = 0;
  if (e === null || e.type !== Ar.Ident || !fw.cmpChar(e.value, 0, hw) || (e = t(++r), e === null))
    return 0;
  if (kc(e, dw))
    return e = t(++r), e === null ? 0 : e.type === Ar.Ident ? Js(Li(e, 0, !0), ++r, t) : kc(e, Fg) ? Js(1, ++r, t) : 0;
  if (e.type === Ar.Number) {
    const n = Li(e, 1, !0);
    return n === 0 ? 0 : (e = t(++r), e === null ? r : e.type === Ar.Dimension || e.type === Ar.Number ? !pw(e, _g) || !Li(e, 1, !1) ? 0 : r + 1 : Js(n, r, t));
  }
  return e.type === Ar.Dimension ? Js(Li(e, 1, !0), ++r, t) : 0;
}
var gw = mw;
const bw = Rf, yw = lw, vw = gw, B = R, yu = ie, _f = Ce, xw = ["calc(", "-moz-calc(", "-webkit-calc("], Ff = /* @__PURE__ */ new Map([
  [B.Function, B.RightParenthesis],
  [B.LeftParenthesis, B.RightParenthesis],
  [B.LeftSquareBracket, B.RightSquareBracket],
  [B.LeftCurlyBracket, B.RightCurlyBracket]
]);
function Lt(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function Bg(e, t) {
  return _f.cmpStr(e, 0, e.length, t);
}
function qg(e, t) {
  for (let r = 0; r < t.length; r++)
    if (Bg(e, t[r]))
      return !0;
  return !1;
}
function Ug(e, t) {
  return t !== e.length - 2 ? !1 : Lt(e, t) === 92 && // U+005C REVERSE SOLIDUS (\)
  yu.isDigit(Lt(e, t + 1));
}
function vu(e, t, r) {
  if (e && e.type === "Range") {
    const n = Number(
      r !== void 0 && r !== t.length ? t.substr(0, r) : t
    );
    if (isNaN(n) || e.min !== null && n < e.min && typeof e.min != "string" || e.max !== null && n > e.max && typeof e.max != "string")
      return !0;
  }
  return !1;
}
function kw(e, t) {
  let r = 0, n = [], a = 0;
  e:
    do {
      switch (e.type) {
        case B.RightCurlyBracket:
        case B.RightParenthesis:
        case B.RightSquareBracket:
          if (e.type !== r)
            break e;
          if (r = n.pop(), n.length === 0) {
            a++;
            break e;
          }
          break;
        case B.Function:
        case B.LeftParenthesis:
        case B.LeftSquareBracket:
        case B.LeftCurlyBracket:
          n.push(r), r = Ff.get(e.type);
          break;
      }
      a++;
    } while (e = t(a));
  return a;
}
function ht(e) {
  return function(t, r, n) {
    return t === null ? 0 : t.type === B.Function && qg(t.value, xw) ? kw(t, r) : e(t, r, n);
  };
}
function me(e) {
  return function(t) {
    return t === null || t.type !== e ? 0 : 1;
  };
}
function ww(e) {
  if (e === null || e.type !== B.Ident)
    return 0;
  const t = e.value.toLowerCase();
  return qg(t, bw.cssWideKeywords) || Bg(t, "default") ? 0 : 1;
}
function Sw(e) {
  return e === null || e.type !== B.Ident || Lt(e.value, 0) !== 45 || Lt(e.value, 1) !== 45 ? 0 : 1;
}
function Cw(e) {
  if (e === null || e.type !== B.Hash)
    return 0;
  const t = e.value.length;
  if (t !== 4 && t !== 5 && t !== 7 && t !== 9)
    return 0;
  for (let r = 1; r < t; r++)
    if (!yu.isHexDigit(Lt(e.value, r)))
      return 0;
  return 1;
}
function $w(e) {
  return e === null || e.type !== B.Hash || !yu.isIdentifierStart(Lt(e.value, 1), Lt(e.value, 2), Lt(e.value, 3)) ? 0 : 1;
}
function Aw(e, t) {
  if (!e)
    return 0;
  let r = 0, n = [], a = 0;
  e:
    do {
      switch (e.type) {
        case B.BadString:
        case B.BadUrl:
          break e;
        case B.RightCurlyBracket:
        case B.RightParenthesis:
        case B.RightSquareBracket:
          if (e.type !== r)
            break e;
          r = n.pop();
          break;
        case B.Semicolon:
          if (r === 0)
            break e;
          break;
        case B.Delim:
          if (r === 0 && e.value === "!")
            break e;
          break;
        case B.Function:
        case B.LeftParenthesis:
        case B.LeftSquareBracket:
        case B.LeftCurlyBracket:
          n.push(r), r = Ff.get(e.type);
          break;
      }
      a++;
    } while (e = t(a));
  return a;
}
function Ew(e, t) {
  if (!e)
    return 0;
  let r = 0, n = [], a = 0;
  e:
    do {
      switch (e.type) {
        case B.BadString:
        case B.BadUrl:
          break e;
        case B.RightCurlyBracket:
        case B.RightParenthesis:
        case B.RightSquareBracket:
          if (e.type !== r)
            break e;
          r = n.pop();
          break;
        case B.Function:
        case B.LeftParenthesis:
        case B.LeftSquareBracket:
        case B.LeftCurlyBracket:
          n.push(r), r = Ff.get(e.type);
          break;
      }
      a++;
    } while (e = t(a));
  return a;
}
function Yt(e) {
  return e && (e = new Set(e)), function(t, r, n) {
    if (t === null || t.type !== B.Dimension)
      return 0;
    const a = _f.consumeNumber(t.value, 0);
    if (e !== null) {
      const i = t.value.indexOf("\\", a), s = i === -1 || !Ug(t.value, i) ? t.value.substr(a) : t.value.substring(a, i);
      if (e.has(s.toLowerCase()) === !1)
        return 0;
    }
    return vu(n, t.value, a) ? 0 : 1;
  };
}
function Tw(e, t, r) {
  return e === null || e.type !== B.Percentage || vu(r, e.value, e.value.length - 1) ? 0 : 1;
}
function jg(e) {
  return typeof e != "function" && (e = function() {
    return 0;
  }), function(t, r, n) {
    return t !== null && t.type === B.Number && Number(t.value) === 0 ? 1 : e(t, r, n);
  };
}
function Pw(e, t, r) {
  if (e === null)
    return 0;
  const n = _f.consumeNumber(e.value, 0);
  return !(n === e.value.length) && !Ug(e.value, n) || vu(r, e.value, n) ? 0 : 1;
}
function Lw(e, t, r) {
  if (e === null || e.type !== B.Number)
    return 0;
  let n = Lt(e.value, 0) === 43 || // U+002B PLUS SIGN (+)
  Lt(e.value, 0) === 45 ? 1 : 0;
  for (; n < e.value.length; n++)
    if (!yu.isDigit(Lt(e.value, n)))
      return 0;
  return vu(r, e.value, n) ? 0 : 1;
}
const zg = {
  "ident-token": me(B.Ident),
  "function-token": me(B.Function),
  "at-keyword-token": me(B.AtKeyword),
  "hash-token": me(B.Hash),
  "string-token": me(B.String),
  "bad-string-token": me(B.BadString),
  "url-token": me(B.Url),
  "bad-url-token": me(B.BadUrl),
  "delim-token": me(B.Delim),
  "number-token": me(B.Number),
  "percentage-token": me(B.Percentage),
  "dimension-token": me(B.Dimension),
  "whitespace-token": me(B.WhiteSpace),
  "CDO-token": me(B.CDO),
  "CDC-token": me(B.CDC),
  "colon-token": me(B.Colon),
  "semicolon-token": me(B.Semicolon),
  "comma-token": me(B.Comma),
  "[-token": me(B.LeftSquareBracket),
  "]-token": me(B.RightSquareBracket),
  "(-token": me(B.LeftParenthesis),
  ")-token": me(B.RightParenthesis),
  "{-token": me(B.LeftCurlyBracket),
  "}-token": me(B.RightCurlyBracket)
}, Gg = {
  // token type aliases
  string: me(B.String),
  ident: me(B.Ident),
  // percentage
  percentage: ht(Tw),
  // numeric
  zero: jg(),
  number: ht(Pw),
  integer: ht(Lw),
  // complex types
  "custom-ident": ww,
  "custom-property-name": Sw,
  "hex-color": Cw,
  "id-selector": $w,
  // element( <id-selector> )
  "an-plus-b": yw,
  urange: vw,
  "declaration-value": Aw,
  "any-value": Ew
};
function Hg(e) {
  const {
    angle: t,
    decibel: r,
    frequency: n,
    flex: a,
    length: i,
    resolution: s,
    semitones: u,
    time: l
  } = e || {};
  return {
    dimension: ht(Yt(null)),
    angle: ht(Yt(t)),
    decibel: ht(Yt(r)),
    frequency: ht(Yt(n)),
    flex: ht(Yt(a)),
    length: ht(jg(Yt(i))),
    resolution: ht(Yt(s)),
    semitones: ht(Yt(u)),
    time: ht(Yt(l))
  };
}
function Nw(e) {
  return {
    ...zg,
    ...Gg,
    ...Hg(e)
  };
}
hs.createDemensionTypes = Hg;
hs.createGenericTypes = Nw;
hs.productionTypes = Gg;
hs.tokenTypes = zg;
var nr = {};
const Dw = [
  // absolute length units https://www.w3.org/TR/css-values-3/#lengths
  "cm",
  "mm",
  "q",
  "in",
  "pt",
  "pc",
  "px",
  // font-relative length units https://drafts.csswg.org/css-values-4/#font-relative-lengths
  "em",
  "rem",
  "ex",
  "rex",
  "cap",
  "rcap",
  "ch",
  "rch",
  "ic",
  "ric",
  "lh",
  "rlh",
  // viewport-percentage lengths https://drafts.csswg.org/css-values-4/#viewport-relative-lengths
  "vw",
  "svw",
  "lvw",
  "dvw",
  "vh",
  "svh",
  "lvh",
  "dvh",
  "vi",
  "svi",
  "lvi",
  "dvi",
  "vb",
  "svb",
  "lvb",
  "dvb",
  "vmin",
  "svmin",
  "lvmin",
  "dvmin",
  "vmax",
  "svmax",
  "lvmax",
  "dvmax",
  // container relative lengths https://drafts.csswg.org/css-contain-3/#container-lengths
  "cqw",
  "cqh",
  "cqi",
  "cqb",
  "cqmin",
  "cqmax"
], Ow = ["deg", "grad", "rad", "turn"], Mw = ["s", "ms"], Iw = ["hz", "khz"], Rw = ["dpi", "dpcm", "dppx", "x"], _w = ["fr"], Fw = ["db"], Bw = ["st"];
nr.angle = Ow;
nr.decibel = Fw;
nr.flex = _w;
nr.frequency = Iw;
nr.length = Dw;
nr.resolution = Rw;
nr.semitones = Bw;
nr.time = Mw;
const qw = U, Uw = {
  decorator(e) {
    const t = [];
    let r = null;
    return {
      ...e,
      node(n) {
        const a = r;
        r = n, e.node.call(this, n), r = a;
      },
      emit(n, a, i) {
        t.push({
          type: a,
          value: n,
          node: i ? null : r
        });
      },
      result() {
        return t;
      }
    };
  }
};
function jw(e) {
  const t = [];
  return qw.tokenize(
    e,
    (r, n, a) => t.push({
      type: r,
      value: e.slice(n, a),
      node: null
    })
  ), t;
}
function zw(e, t) {
  return typeof e == "string" ? jw(e) : t.generate(e, Uw);
}
var Gw = zw, Xn = {}, xu = {}, Vg = {}, Bf = {};
const Hw = pu;
function Vw(e, t, r) {
  return Object.assign(Hw.createCustomError("SyntaxError", e), {
    input: t,
    offset: r,
    rawMessage: e,
    message: e + `
  ` + t + `
--` + new Array((r || t.length) + 1).join("-") + "^"
  });
}
Bf.SyntaxError = Vw;
const Ww = Bf, Xw = 9, Yw = 10, Kw = 12, Qw = 13, Zw = 32;
let Jw = class {
  constructor(t) {
    this.str = t, this.pos = 0;
  }
  charCodeAt(t) {
    return t < this.str.length ? this.str.charCodeAt(t) : 0;
  }
  charCode() {
    return this.charCodeAt(this.pos);
  }
  nextCharCode() {
    return this.charCodeAt(this.pos + 1);
  }
  nextNonWsCode(t) {
    return this.charCodeAt(this.findWsEnd(t));
  }
  findWsEnd(t) {
    for (; t < this.str.length; t++) {
      const r = this.str.charCodeAt(t);
      if (r !== Qw && r !== Yw && r !== Kw && r !== Zw && r !== Xw)
        break;
    }
    return t;
  }
  substringToPos(t) {
    return this.str.substring(this.pos, this.pos = t);
  }
  eat(t) {
    this.charCode() !== t && this.error("Expect `" + String.fromCharCode(t) + "`"), this.pos++;
  }
  peek() {
    return this.pos < this.str.length ? this.str.charAt(this.pos++) : "";
  }
  error(t) {
    throw new Ww.SyntaxError(t, this.str, this.pos);
  }
};
Vg.Tokenizer = Jw;
const eS = Vg, tS = 9, rS = 10, nS = 12, aS = 13, iS = 32, Wg = 33, qf = 35, h0 = 38, _o = 39, Xg = 40, sS = 41, Yg = 42, Uf = 43, jf = 44, p0 = 45, zf = 60, Kg = 62, wc = 63, oS = 64, ku = 91, Gf = 93, Fo = 123, m0 = 124, g0 = 125, b0 = 8734, Xi = new Uint8Array(128).map(
  (e, t) => /[a-zA-Z0-9\-]/.test(String.fromCharCode(t)) ? 1 : 0
), y0 = {
  " ": 1,
  "&&": 2,
  "||": 3,
  "|": 4
};
function Bo(e) {
  return e.substringToPos(
    e.findWsEnd(e.pos)
  );
}
function Un(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    const r = e.str.charCodeAt(t);
    if (r >= 128 || Xi[r] === 0)
      break;
  }
  return e.pos === t && e.error("Expect a keyword"), e.substringToPos(t);
}
function qo(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    const r = e.str.charCodeAt(t);
    if (r < 48 || r > 57)
      break;
  }
  return e.pos === t && e.error("Expect a number"), e.substringToPos(t);
}
function uS(e) {
  const t = e.str.indexOf("'", e.pos + 1);
  return t === -1 && (e.pos = e.str.length, e.error("Expect an apostrophe")), e.substringToPos(t + 1);
}
function v0(e) {
  let t = null, r = null;
  return e.eat(Fo), t = qo(e), e.charCode() === jf ? (e.pos++, e.charCode() !== g0 && (r = qo(e))) : r = t, e.eat(g0), {
    min: Number(t),
    max: r ? Number(r) : 0
  };
}
function lS(e) {
  let t = null, r = !1;
  switch (e.charCode()) {
    case Yg:
      e.pos++, t = {
        min: 0,
        max: 0
      };
      break;
    case Uf:
      e.pos++, t = {
        min: 1,
        max: 0
      };
      break;
    case wc:
      e.pos++, t = {
        min: 0,
        max: 1
      };
      break;
    case qf:
      e.pos++, r = !0, e.charCode() === Fo ? t = v0(e) : e.charCode() === wc ? (e.pos++, t = {
        min: 0,
        max: 0
      }) : t = {
        min: 1,
        max: 0
      };
      break;
    case Fo:
      t = v0(e);
      break;
    default:
      return null;
  }
  return {
    type: "Multiplier",
    comma: r,
    min: t.min,
    max: t.max,
    term: null
  };
}
function jn(e, t) {
  const r = lS(e);
  return r !== null ? (r.term = t, e.charCode() === qf && e.charCodeAt(e.pos - 1) === Uf ? jn(e, r) : r) : t;
}
function vl(e) {
  const t = e.peek();
  return t === "" ? null : {
    type: "Token",
    value: t
  };
}
function cS(e) {
  let t;
  return e.eat(zf), e.eat(_o), t = Un(e), e.eat(_o), e.eat(Kg), jn(e, {
    type: "Property",
    name: t
  });
}
function fS(e) {
  let t = null, r = null, n = 1;
  return e.eat(ku), e.charCode() === p0 && (e.peek(), n = -1), n == -1 && e.charCode() === b0 ? e.peek() : (t = n * Number(qo(e)), Xi[e.charCode()] !== 0 && (t += Un(e))), Bo(e), e.eat(jf), Bo(e), e.charCode() === b0 ? e.peek() : (n = 1, e.charCode() === p0 && (e.peek(), n = -1), r = n * Number(qo(e)), Xi[e.charCode()] !== 0 && (r += Un(e))), e.eat(Gf), {
    type: "Range",
    min: t,
    max: r
  };
}
function dS(e) {
  let t, r = null;
  return e.eat(zf), t = Un(e), e.charCode() === Xg && e.nextCharCode() === sS && (e.pos += 2, t += "()"), e.charCodeAt(e.findWsEnd(e.pos)) === ku && (Bo(e), r = fS(e)), e.eat(Kg), jn(e, {
    type: "Type",
    name: t,
    opts: r
  });
}
function hS(e) {
  const t = Un(e);
  return e.charCode() === Xg ? (e.pos++, {
    type: "Function",
    name: t
  }) : jn(e, {
    type: "Keyword",
    name: t
  });
}
function pS(e, t) {
  function r(a, i) {
    return {
      type: "Group",
      terms: a,
      combinator: i,
      disallowEmpty: !1,
      explicit: !1
    };
  }
  let n;
  for (t = Object.keys(t).sort((a, i) => y0[a] - y0[i]); t.length > 0; ) {
    n = t.shift();
    let a = 0, i = 0;
    for (; a < e.length; a++) {
      const s = e[a];
      s.type === "Combinator" && (s.value === n ? (i === -1 && (i = a - 1), e.splice(a, 1), a--) : (i !== -1 && a - i > 1 && (e.splice(
        i,
        a - i,
        r(e.slice(i, a), n)
      ), a = i + 1), i = -1));
    }
    i !== -1 && t.length && e.splice(
      i,
      a - i,
      r(e.slice(i, a), n)
    );
  }
  return n;
}
function Qg(e) {
  const t = [], r = {};
  let n, a = null, i = e.pos;
  for (; n = gS(e); )
    n.type !== "Spaces" && (n.type === "Combinator" ? ((a === null || a.type === "Combinator") && (e.pos = i, e.error("Unexpected combinator")), r[n.value] = !0) : a !== null && a.type !== "Combinator" && (r[" "] = !0, t.push({
      type: "Combinator",
      value: " "
    })), t.push(n), a = n, i = e.pos);
  return a !== null && a.type === "Combinator" && (e.pos -= i, e.error("Unexpected combinator")), {
    type: "Group",
    terms: t,
    combinator: pS(t, r) || " ",
    disallowEmpty: !1,
    explicit: !1
  };
}
function mS(e) {
  let t;
  return e.eat(ku), t = Qg(e), e.eat(Gf), t.explicit = !0, e.charCode() === Wg && (e.pos++, t.disallowEmpty = !0), t;
}
function gS(e) {
  let t = e.charCode();
  if (t < 128 && Xi[t] === 1)
    return hS(e);
  switch (t) {
    case Gf:
      break;
    case ku:
      return jn(e, mS(e));
    case zf:
      return e.nextCharCode() === _o ? cS(e) : dS(e);
    case m0:
      return {
        type: "Combinator",
        value: e.substringToPos(
          e.pos + (e.nextCharCode() === m0 ? 2 : 1)
        )
      };
    case h0:
      return e.pos++, e.eat(h0), {
        type: "Combinator",
        value: "&&"
      };
    case jf:
      return e.pos++, {
        type: "Comma"
      };
    case _o:
      return jn(e, {
        type: "String",
        value: uS(e)
      });
    case iS:
    case tS:
    case rS:
    case aS:
    case nS:
      return {
        type: "Spaces",
        value: Bo(e)
      };
    case oS:
      return t = e.nextCharCode(), t < 128 && Xi[t] === 1 ? (e.pos++, {
        type: "AtKeyword",
        name: Un(e)
      }) : vl(e);
    case Yg:
    case Uf:
    case wc:
    case qf:
    case Wg:
      break;
    case Fo:
      if (t = e.nextCharCode(), t < 48 || t > 57)
        return vl(e);
      break;
    default:
      return vl(e);
  }
}
function bS(e) {
  const t = new eS.Tokenizer(e), r = Qg(t);
  return t.pos !== e.length && t.error("Unexpected input"), r.terms.length === 1 && r.terms[0].type === "Group" ? r.terms[0] : r;
}
xu.parse = bS;
const yS = xu, xe = { type: "Match" }, Fe = { type: "Mismatch" }, Hf = { type: "DisallowEmpty" }, vS = 40, xS = 41;
function Ie(e, t, r) {
  return t === xe && r === Fe || e === xe && t === xe && r === xe ? e : (e.type === "If" && e.else === Fe && t === xe && (t = e.then, e = e.match), {
    type: "If",
    match: e,
    then: t,
    else: r
  });
}
function Zg(e) {
  return e.length > 2 && e.charCodeAt(e.length - 2) === vS && e.charCodeAt(e.length - 1) === xS;
}
function x0(e) {
  return e.type === "Keyword" || e.type === "AtKeyword" || e.type === "Function" || e.type === "Type" && Zg(e.name);
}
function Sc(e, t, r) {
  switch (e) {
    case " ": {
      let n = xe;
      for (let a = t.length - 1; a >= 0; a--) {
        const i = t[a];
        n = Ie(
          i,
          n,
          Fe
        );
      }
      return n;
    }
    case "|": {
      let n = Fe, a = null;
      for (let i = t.length - 1; i >= 0; i--) {
        let s = t[i];
        if (x0(s) && (a === null && i > 0 && x0(t[i - 1]) && (a = /* @__PURE__ */ Object.create(null), n = Ie(
          {
            type: "Enum",
            map: a
          },
          xe,
          n
        )), a !== null)) {
          const u = (Zg(s.name) ? s.name.slice(0, -1) : s.name).toLowerCase();
          if (!(u in a)) {
            a[u] = s;
            continue;
          }
        }
        a = null, n = Ie(
          s,
          xe,
          n
        );
      }
      return n;
    }
    case "&&": {
      if (t.length > 5)
        return {
          type: "MatchOnce",
          terms: t,
          all: !0
        };
      let n = Fe;
      for (let a = t.length - 1; a >= 0; a--) {
        const i = t[a];
        let s;
        t.length > 1 ? s = Sc(
          e,
          t.filter(function(u) {
            return u !== i;
          }),
          !1
        ) : s = xe, n = Ie(
          i,
          s,
          n
        );
      }
      return n;
    }
    case "||": {
      if (t.length > 5)
        return {
          type: "MatchOnce",
          terms: t,
          all: !1
        };
      let n = r ? xe : Fe;
      for (let a = t.length - 1; a >= 0; a--) {
        const i = t[a];
        let s;
        t.length > 1 ? s = Sc(
          e,
          t.filter(function(u) {
            return u !== i;
          }),
          !0
        ) : s = xe, n = Ie(
          i,
          s,
          n
        );
      }
      return n;
    }
  }
}
function kS(e) {
  let t = xe, r = Vf(e.term);
  if (e.max === 0)
    r = Ie(
      r,
      Hf,
      Fe
    ), t = Ie(
      r,
      null,
      // will be a loop
      Fe
    ), t.then = Ie(
      xe,
      xe,
      t
      // make a loop
    ), e.comma && (t.then.else = Ie(
      { type: "Comma", syntax: e },
      t,
      Fe
    ));
  else
    for (let n = e.min || 1; n <= e.max; n++)
      e.comma && t !== xe && (t = Ie(
        { type: "Comma", syntax: e },
        t,
        Fe
      )), t = Ie(
        r,
        Ie(
          xe,
          xe,
          t
        ),
        Fe
      );
  if (e.min === 0)
    t = Ie(
      xe,
      xe,
      t
    );
  else
    for (let n = 0; n < e.min - 1; n++)
      e.comma && t !== xe && (t = Ie(
        { type: "Comma", syntax: e },
        t,
        Fe
      )), t = Ie(
        r,
        t,
        Fe
      );
  return t;
}
function Vf(e) {
  if (typeof e == "function")
    return {
      type: "Generic",
      fn: e
    };
  switch (e.type) {
    case "Group": {
      let t = Sc(
        e.combinator,
        e.terms.map(Vf),
        !1
      );
      return e.disallowEmpty && (t = Ie(
        t,
        Hf,
        Fe
      )), t;
    }
    case "Multiplier":
      return kS(e);
    case "Type":
    case "Property":
      return {
        type: e.type,
        name: e.name,
        syntax: e
      };
    case "Keyword":
      return {
        type: e.type,
        name: e.name.toLowerCase(),
        syntax: e
      };
    case "AtKeyword":
      return {
        type: e.type,
        name: "@" + e.name.toLowerCase(),
        syntax: e
      };
    case "Function":
      return {
        type: e.type,
        name: e.name.toLowerCase() + "(",
        syntax: e
      };
    case "String":
      return e.value.length === 3 ? {
        type: "Token",
        value: e.value.charAt(1),
        syntax: e
      } : {
        type: e.type,
        value: e.value.substr(1, e.value.length - 2).replace(/\\'/g, "'"),
        syntax: e
      };
    case "Token":
      return {
        type: e.type,
        value: e.value,
        syntax: e
      };
    case "Comma":
      return {
        type: e.type,
        syntax: e
      };
    default:
      throw new Error("Unknown node type:", e.type);
  }
}
function wS(e, t) {
  return typeof e == "string" && (e = yS.parse(e)), {
    type: "MatchGraph",
    match: Vf(e),
    syntax: t || null,
    source: e
  };
}
Xn.DISALLOW_EMPTY = Hf;
Xn.MATCH = xe;
Xn.MISMATCH = Fe;
Xn.buildMatchGraph = wS;
var Wf = {};
const de = Xn, Ve = R, { hasOwnProperty: k0 } = Object.prototype, SS = 0, CS = 1, Uo = 2, Xf = 3, w0 = "Match", $S = "Mismatch", AS = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)", S0 = 15e3;
function Jg(e) {
  let t = null, r = null, n = e;
  for (; n !== null; )
    r = n.prev, n.prev = t, t = n, n = r;
  return t;
}
function xl(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const n = t.charCodeAt(r);
    let a = e.charCodeAt(r);
    if (a >= 65 && a <= 90 && (a = a | 32), a !== n)
      return !1;
  }
  return !0;
}
function ES(e) {
  return e.type !== Ve.Delim ? !1 : e.value !== "?";
}
function C0(e) {
  return e === null ? !0 : e.type === Ve.Comma || e.type === Ve.Function || e.type === Ve.LeftParenthesis || e.type === Ve.LeftSquareBracket || e.type === Ve.LeftCurlyBracket || ES(e);
}
function $0(e) {
  return e === null ? !0 : e.type === Ve.RightParenthesis || e.type === Ve.RightSquareBracket || e.type === Ve.RightCurlyBracket || e.type === Ve.Delim && e.value === "/";
}
function eb(e, t, r) {
  function n() {
    do
      S++, C = S < e.length ? e[S] : null;
    while (C !== null && (C.type === Ve.WhiteSpace || C.type === Ve.Comment));
  }
  function a(y) {
    const D = S + y;
    return D < e.length ? e[D] : null;
  }
  function i(y, D) {
    return {
      nextState: y,
      matchStack: T,
      syntaxStack: f,
      thenStack: d,
      tokenIndex: S,
      prev: D
    };
  }
  function s(y) {
    d = {
      nextState: y,
      matchStack: T,
      syntaxStack: f,
      prev: d
    };
  }
  function u(y) {
    h = i(y, h);
  }
  function l() {
    T = {
      type: CS,
      syntax: t.syntax,
      token: C,
      prev: T
    }, n(), p = null, S > P && (P = S);
  }
  function o() {
    f = {
      syntax: t.syntax,
      opts: t.syntax.opts || f !== null && f.opts || null,
      prev: f
    }, T = {
      type: Uo,
      syntax: t.syntax,
      token: T.token,
      prev: T
    };
  }
  function c() {
    T.type === Uo ? T = T.prev : T = {
      type: Xf,
      syntax: f.syntax,
      token: T.token,
      prev: T
    }, f = f.prev;
  }
  let f = null, d = null, h = null, p = null, g = 0, x = null, C = null, S = -1, P = 0, T = {
    type: SS,
    syntax: null,
    token: null,
    prev: null
  };
  for (n(); x === null && ++g < S0; )
    switch (t.type) {
      case "Match":
        if (d === null) {
          if (C !== null && (S !== e.length - 1 || C.value !== "\\0" && C.value !== "\\9")) {
            t = de.MISMATCH;
            break;
          }
          x = w0;
          break;
        }
        if (t = d.nextState, t === de.DISALLOW_EMPTY)
          if (d.matchStack === T) {
            t = de.MISMATCH;
            break;
          } else
            t = de.MATCH;
        for (; d.syntaxStack !== f; )
          c();
        d = d.prev;
        break;
      case "Mismatch":
        if (p !== null && p !== !1)
          (h === null || S > h.tokenIndex) && (h = p, p = !1);
        else if (h === null) {
          x = $S;
          break;
        }
        t = h.nextState, d = h.thenStack, f = h.syntaxStack, T = h.matchStack, S = h.tokenIndex, C = S < e.length ? e[S] : null, h = h.prev;
        break;
      case "MatchGraph":
        t = t.match;
        break;
      case "If":
        t.else !== de.MISMATCH && u(t.else), t.then !== de.MATCH && s(t.then), t = t.match;
        break;
      case "MatchOnce":
        t = {
          type: "MatchOnceBuffer",
          syntax: t,
          index: 0,
          mask: 0
        };
        break;
      case "MatchOnceBuffer": {
        const I = t.syntax.terms;
        if (t.index === I.length) {
          if (t.mask === 0 || t.syntax.all) {
            t = de.MISMATCH;
            break;
          }
          t = de.MATCH;
          break;
        }
        if (t.mask === (1 << I.length) - 1) {
          t = de.MATCH;
          break;
        }
        for (; t.index < I.length; t.index++) {
          const k = 1 << t.index;
          if (!(t.mask & k)) {
            u(t), s({
              type: "AddMatchOnce",
              syntax: t.syntax,
              mask: t.mask | k
            }), t = I[t.index++];
            break;
          }
        }
        break;
      }
      case "AddMatchOnce":
        t = {
          type: "MatchOnceBuffer",
          syntax: t.syntax,
          index: 0,
          mask: t.mask
        };
        break;
      case "Enum":
        if (C !== null) {
          let I = C.value.toLowerCase();
          if (I.indexOf("\\") !== -1 && (I = I.replace(/\\[09].*$/, "")), k0.call(t.map, I)) {
            t = t.map[I];
            break;
          }
        }
        t = de.MISMATCH;
        break;
      case "Generic": {
        const I = f !== null ? f.opts : null, k = S + Math.floor(t.fn(C, a, I));
        if (!isNaN(k) && k > S) {
          for (; S < k; )
            l();
          t = de.MATCH;
        } else
          t = de.MISMATCH;
        break;
      }
      case "Type":
      case "Property": {
        const I = t.type === "Type" ? "types" : "properties", k = k0.call(r, I) ? r[I][t.name] : null;
        if (!k || !k.match)
          throw new Error(
            "Bad syntax reference: " + (t.type === "Type" ? "<" + t.name + ">" : "<'" + t.name + "'>")
          );
        if (p !== !1 && C !== null && t.type === "Type" && // https://drafts.csswg.org/css-values-4/#custom-idents
        // When parsing positionally-ambiguous keywords in a property value, a <custom-ident> production
        // can only claim the keyword if no other unfulfilled production can claim it.
        (t.name === "custom-ident" && C.type === Ve.Ident || // https://drafts.csswg.org/css-values-4/#lengths
        // ... if a `0` could be parsed as either a <number> or a <length> in a property (such as line-height),
        // it must parse as a <number>
        t.name === "length" && C.value === "0")) {
          p === null && (p = i(t, h)), t = de.MISMATCH;
          break;
        }
        o(), t = k.match;
        break;
      }
      case "Keyword": {
        const I = t.name;
        if (C !== null) {
          let k = C.value;
          if (k.indexOf("\\") !== -1 && (k = k.replace(/\\[09].*$/, "")), xl(k, I)) {
            l(), t = de.MATCH;
            break;
          }
        }
        t = de.MISMATCH;
        break;
      }
      case "AtKeyword":
      case "Function":
        if (C !== null && xl(C.value, t.name)) {
          l(), t = de.MATCH;
          break;
        }
        t = de.MISMATCH;
        break;
      case "Token":
        if (C !== null && C.value === t.value) {
          l(), t = de.MATCH;
          break;
        }
        t = de.MISMATCH;
        break;
      case "Comma":
        C !== null && C.type === Ve.Comma ? C0(T.token) ? t = de.MISMATCH : (l(), t = $0(C) ? de.MISMATCH : de.MATCH) : t = C0(T.token) || $0(C) ? de.MATCH : de.MISMATCH;
        break;
      case "String":
        let y = "", D = S;
        for (; D < e.length && y.length < t.value.length; D++)
          y += e[D].value;
        if (xl(y, t.value)) {
          for (; S < D; )
            l();
          t = de.MATCH;
        } else
          t = de.MISMATCH;
        break;
      default:
        throw new Error("Unknown node type: " + t.type);
    }
  switch (x) {
    case null:
      console.warn("[csstree-match] BREAK after " + S0 + " iterations"), x = AS, T = null;
      break;
    case w0:
      for (; f !== null; )
        c();
      break;
    default:
      T = null;
  }
  return {
    tokens: e,
    reason: x,
    iterations: g,
    match: T,
    longestMatch: P
  };
}
function TS(e, t, r) {
  const n = eb(e, t, r || {});
  if (n.match !== null) {
    let a = Jg(n.match).prev;
    for (n.match = []; a !== null; ) {
      switch (a.type) {
        case Uo:
        case Xf:
          n.match.push({
            type: a.type,
            syntax: a.syntax
          });
          break;
        default:
          n.match.push({
            token: a.token.value,
            node: a.token.node
          });
          break;
      }
      a = a.prev;
    }
  }
  return n;
}
function PS(e, t, r) {
  const n = eb(e, t, r || {});
  if (n.match === null)
    return n;
  let a = n.match, i = n.match = {
    syntax: t.syntax || null,
    match: []
  };
  const s = [i];
  for (a = Jg(a).prev; a !== null; ) {
    switch (a.type) {
      case Uo:
        i.match.push(i = {
          syntax: a.syntax,
          match: []
        }), s.push(i);
        break;
      case Xf:
        s.pop(), i = s[s.length - 1];
        break;
      default:
        i.match.push({
          syntax: a.syntax || null,
          token: a.token.value,
          node: a.token.node
        });
    }
    a = a.prev;
  }
  return n;
}
Wf.matchAsList = TS;
Wf.matchAsTree = PS;
var ps = {};
function tb(e) {
  function t(a) {
    return a === null ? !1 : a.type === "Type" || a.type === "Property" || a.type === "Keyword";
  }
  function r(a) {
    if (Array.isArray(a.match)) {
      for (let i = 0; i < a.match.length; i++)
        if (r(a.match[i]))
          return t(a.syntax) && n.unshift(a.syntax), !0;
    } else if (a.node === e)
      return n = t(a.syntax) ? [a.syntax] : [], !0;
    return !1;
  }
  let n = null;
  return this.matched !== null && r(this.matched), n;
}
function LS(e, t) {
  return Yf(this, e, (r) => r.type === "Type" && r.name === t);
}
function NS(e, t) {
  return Yf(this, e, (r) => r.type === "Property" && r.name === t);
}
function DS(e) {
  return Yf(this, e, (t) => t.type === "Keyword");
}
function Yf(e, t, r) {
  const n = tb.call(e, t);
  return n === null ? !1 : n.some(r);
}
ps.getTrace = tb;
ps.isKeyword = DS;
ps.isProperty = NS;
ps.isType = LS;
var rb = {};
const OS = qr;
function nb(e) {
  return "node" in e ? e.node : nb(e.match[0]);
}
function ab(e) {
  return "node" in e ? e.node : ab(e.match[e.match.length - 1]);
}
function MS(e, t, r, n, a) {
  function i(u) {
    if (u.syntax !== null && u.syntax.type === n && u.syntax.name === a) {
      const l = nb(u), o = ab(u);
      e.syntax.walk(t, function(c, f, d) {
        if (c === l) {
          const h = new OS.List();
          do {
            if (h.appendData(f.data), f.data === o)
              break;
            f = f.next;
          } while (f !== null);
          s.push({
            parent: d,
            nodes: h
          });
        }
      });
    }
    Array.isArray(u.match) && u.match.forEach(i);
  }
  const s = [];
  return r.matched !== null && i(r.matched), s;
}
rb.matchFragments = MS;
var ib = {};
const IS = qr, { hasOwnProperty: zi } = Object.prototype;
function kl(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && e >= 0;
}
function A0(e) {
  return !!e && kl(e.offset) && kl(e.line) && kl(e.column);
}
function RS(e, t) {
  return function(n, a) {
    if (!n || n.constructor !== Object)
      return a(n, "Type of node should be an Object");
    for (let i in n) {
      let s = !0;
      if (zi.call(n, i) !== !1) {
        if (i === "type")
          n.type !== e && a(n, "Wrong node type `" + n.type + "`, expected `" + e + "`");
        else if (i === "loc") {
          if (n.loc === null)
            continue;
          if (n.loc && n.loc.constructor === Object)
            if (typeof n.loc.source != "string")
              i += ".source";
            else if (!A0(n.loc.start))
              i += ".start";
            else if (!A0(n.loc.end))
              i += ".end";
            else
              continue;
          s = !1;
        } else if (t.hasOwnProperty(i)) {
          s = !1;
          for (let u = 0; !s && u < t[i].length; u++) {
            const l = t[i][u];
            switch (l) {
              case String:
                s = typeof n[i] == "string";
                break;
              case Boolean:
                s = typeof n[i] == "boolean";
                break;
              case null:
                s = n[i] === null;
                break;
              default:
                typeof l == "string" ? s = n[i] && n[i].type === l : Array.isArray(l) && (s = n[i] instanceof IS.List);
            }
          }
        } else
          a(n, "Unknown field `" + i + "` for " + e + " node type");
        s || a(n, "Bad value for `" + e + "." + i + "`");
      }
    }
    for (const i in t)
      zi.call(t, i) && zi.call(n, i) === !1 && a(n, "Field `" + e + "." + i + "` is missed");
  };
}
function _S(e, t) {
  const r = t.structure, n = {
    type: String,
    loc: !0
  }, a = {
    type: '"' + e + '"'
  };
  for (const i in r) {
    if (zi.call(r, i) === !1)
      continue;
    const s = [], u = n[i] = Array.isArray(r[i]) ? r[i].slice() : [r[i]];
    for (let l = 0; l < u.length; l++) {
      const o = u[l];
      if (o === String || o === Boolean)
        s.push(o.name);
      else if (o === null)
        s.push("null");
      else if (typeof o == "string")
        s.push("<" + o + ">");
      else if (Array.isArray(o))
        s.push("List");
      else
        throw new Error("Wrong value `" + o + "` in `" + e + "." + i + "` structure definition");
    }
    a[i] = s.join(" | ");
  }
  return {
    docs: a,
    check: RS(e, n)
  };
}
function FS(e) {
  const t = {};
  if (e.node) {
    for (const r in e.node)
      if (zi.call(e.node, r)) {
        const n = e.node[r];
        if (n.structure)
          t[r] = _S(r, n);
        else
          throw new Error("Missed `structure` field in `" + r + "` node type definition");
      }
  }
  return t;
}
ib.getStructureFromConfig = FS;
var Kf = {};
const Ni = function() {
};
function E0(e) {
  return typeof e == "function" ? e : Ni;
}
function BS(e, t, r) {
  function n(s) {
    switch (a.call(r, s), s.type) {
      case "Group":
        s.terms.forEach(n);
        break;
      case "Multiplier":
        n(s.term);
        break;
      case "Type":
      case "Property":
      case "Keyword":
      case "AtKeyword":
      case "Function":
      case "String":
      case "Token":
      case "Comma":
        break;
      default:
        throw new Error("Unknown type: " + s.type);
    }
    i.call(r, s);
  }
  let a = Ni, i = Ni;
  if (typeof t == "function" ? a = t : t && (a = E0(t.enter), i = E0(t.leave)), a === Ni && i === Ni)
    throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
  n(e);
}
Kf.walk = BS;
const An = Df, ci = Ur, qS = Rf, US = hs, T0 = nr, jS = Gw, Cc = Xn, P0 = Wf, zS = ps, L0 = rb, GS = ib, HS = xu, sb = bu, VS = Kf, WS = Cc.buildMatchGraph(qS.cssWideKeywords.join(" | "));
function $c(e, t, r) {
  const n = {};
  for (const a in e)
    e[a].syntax && (n[a] = r ? e[a].syntax : sb.generate(e[a].syntax, { compact: t }));
  return n;
}
function XS(e, t, r) {
  const n = {};
  for (const [a, i] of Object.entries(e))
    n[a] = {
      prelude: i.prelude && (r ? i.prelude.syntax : sb.generate(i.prelude.syntax, { compact: t })),
      descriptors: i.descriptors && $c(i.descriptors, t, r)
    };
  return n;
}
function YS(e) {
  for (let t = 0; t < e.length; t++)
    if (e[t].value.toLowerCase() === "var(")
      return !0;
  return !1;
}
function wt(e, t, r) {
  return {
    matched: e,
    iterations: r,
    error: t,
    ...zS
  };
}
function bn(e, t, r, n) {
  const a = jS(r, e.syntax);
  let i;
  return YS(a) ? wt(null, new Error("Matching for a tree with var() is not supported")) : (n && (i = P0.matchAsTree(a, e.cssWideKeywordsSyntax, e)), (!n || !i.match) && (i = P0.matchAsTree(a, t.match, e), !i.match) ? wt(
    null,
    new An.SyntaxMatchError(i.reason, t.syntax, r, i),
    i.iterations
  ) : wt(i.match, null, i.iterations));
}
let KS = class {
  constructor(t, r, n) {
    if (this.cssWideKeywordsSyntax = WS, this.syntax = r, this.generic = !1, this.units = { ...T0 }, this.atrules = /* @__PURE__ */ Object.create(null), this.properties = /* @__PURE__ */ Object.create(null), this.types = /* @__PURE__ */ Object.create(null), this.structure = n || GS.getStructureFromConfig(t), t) {
      if (t.units)
        for (const a of Object.keys(T0))
          Array.isArray(t.units[a]) && (this.units[a] = t.units[a]);
      if (t.types)
        for (const a in t.types)
          this.addType_(a, t.types[a]);
      if (t.generic) {
        this.generic = !0;
        for (const [a, i] of Object.entries(US.createGenericTypes(this.units)))
          this.addType_(a, i);
      }
      if (t.atrules)
        for (const a in t.atrules)
          this.addAtrule_(a, t.atrules[a]);
      if (t.properties)
        for (const a in t.properties)
          this.addProperty_(a, t.properties[a]);
    }
  }
  checkStructure(t) {
    function r(i, s) {
      a.push({ node: i, message: s });
    }
    const n = this.structure, a = [];
    return this.syntax.walk(t, function(i) {
      n.hasOwnProperty(i.type) ? n[i.type].check(i, r) : r(i, "Unknown node type `" + i.type + "`");
    }), a.length ? a : !1;
  }
  createDescriptor(t, r, n, a = null) {
    const i = {
      type: r,
      name: n
    }, s = {
      type: r,
      name: n,
      parent: a,
      serializable: typeof t == "string" || t && typeof t.type == "string",
      syntax: null,
      match: null
    };
    return typeof t == "function" ? s.match = Cc.buildMatchGraph(t, i) : (typeof t == "string" ? Object.defineProperty(s, "syntax", {
      get() {
        return Object.defineProperty(s, "syntax", {
          value: HS.parse(t)
        }), s.syntax;
      }
    }) : s.syntax = t, Object.defineProperty(s, "match", {
      get() {
        return Object.defineProperty(s, "match", {
          value: Cc.buildMatchGraph(s.syntax, i)
        }), s.match;
      }
    })), s;
  }
  addAtrule_(t, r) {
    r && (this.atrules[t] = {
      type: "Atrule",
      name: t,
      prelude: r.prelude ? this.createDescriptor(r.prelude, "AtrulePrelude", t) : null,
      descriptors: r.descriptors ? Object.keys(r.descriptors).reduce(
        (n, a) => (n[a] = this.createDescriptor(r.descriptors[a], "AtruleDescriptor", a, t), n),
        /* @__PURE__ */ Object.create(null)
      ) : null
    });
  }
  addProperty_(t, r) {
    r && (this.properties[t] = this.createDescriptor(r, "Property", t));
  }
  addType_(t, r) {
    r && (this.types[t] = this.createDescriptor(r, "Type", t));
  }
  checkAtruleName(t) {
    if (!this.getAtrule(t))
      return new An.SyntaxReferenceError("Unknown at-rule", "@" + t);
  }
  checkAtrulePrelude(t, r) {
    const n = this.checkAtruleName(t);
    if (n)
      return n;
    const a = this.getAtrule(t);
    if (!a.prelude && r)
      return new SyntaxError("At-rule `@" + t + "` should not contain a prelude");
    if (a.prelude && !r && !bn(this, a.prelude, "", !1).matched)
      return new SyntaxError("At-rule `@" + t + "` should contain a prelude");
  }
  checkAtruleDescriptorName(t, r) {
    const n = this.checkAtruleName(t);
    if (n)
      return n;
    const a = this.getAtrule(t), i = ci.keyword(r);
    if (!a.descriptors)
      return new SyntaxError("At-rule `@" + t + "` has no known descriptors");
    if (!a.descriptors[i.name] && !a.descriptors[i.basename])
      return new An.SyntaxReferenceError("Unknown at-rule descriptor", r);
  }
  checkPropertyName(t) {
    if (!this.getProperty(t))
      return new An.SyntaxReferenceError("Unknown property", t);
  }
  matchAtrulePrelude(t, r) {
    const n = this.checkAtrulePrelude(t, r);
    if (n)
      return wt(null, n);
    const a = this.getAtrule(t);
    return a.prelude ? bn(this, a.prelude, r || "", !1) : wt(null, null);
  }
  matchAtruleDescriptor(t, r, n) {
    const a = this.checkAtruleDescriptorName(t, r);
    if (a)
      return wt(null, a);
    const i = this.getAtrule(t), s = ci.keyword(r);
    return bn(this, i.descriptors[s.name] || i.descriptors[s.basename], n, !1);
  }
  matchDeclaration(t) {
    return t.type !== "Declaration" ? wt(null, new Error("Not a Declaration node")) : this.matchProperty(t.property, t.value);
  }
  matchProperty(t, r) {
    if (ci.property(t).custom)
      return wt(null, new Error("Lexer matching doesn't applicable for custom properties"));
    const n = this.checkPropertyName(t);
    return n ? wt(null, n) : bn(this, this.getProperty(t), r, !0);
  }
  matchType(t, r) {
    const n = this.getType(t);
    return n ? bn(this, n, r, !1) : wt(null, new An.SyntaxReferenceError("Unknown type", t));
  }
  match(t, r) {
    return typeof t != "string" && (!t || !t.type) ? wt(null, new An.SyntaxReferenceError("Bad syntax")) : ((typeof t == "string" || !t.match) && (t = this.createDescriptor(t, "Type", "anonymous")), bn(this, t, r, !1));
  }
  findValueFragments(t, r, n, a) {
    return L0.matchFragments(this, r, this.matchProperty(t, r), n, a);
  }
  findDeclarationValueFragments(t, r, n) {
    return L0.matchFragments(this, t.value, this.matchDeclaration(t), r, n);
  }
  findAllFragments(t, r, n) {
    const a = [];
    return this.syntax.walk(t, {
      visit: "Declaration",
      enter: (i) => {
        a.push.apply(a, this.findDeclarationValueFragments(i, r, n));
      }
    }), a;
  }
  getAtrule(t, r = !0) {
    const n = ci.keyword(t);
    return (n.vendor && r ? this.atrules[n.name] || this.atrules[n.basename] : this.atrules[n.name]) || null;
  }
  getAtrulePrelude(t, r = !0) {
    const n = this.getAtrule(t, r);
    return n && n.prelude || null;
  }
  getAtruleDescriptor(t, r) {
    return this.atrules.hasOwnProperty(t) && this.atrules.declarators && this.atrules[t].declarators[r] || null;
  }
  getProperty(t, r = !0) {
    const n = ci.property(t);
    return (n.vendor && r ? this.properties[n.name] || this.properties[n.basename] : this.properties[n.name]) || null;
  }
  getType(t) {
    return hasOwnProperty.call(this.types, t) ? this.types[t] : null;
  }
  validate() {
    function t(a, i, s, u) {
      if (s.has(i))
        return s.get(i);
      s.set(i, !1), u.syntax !== null && VS.walk(u.syntax, function(l) {
        if (l.type !== "Type" && l.type !== "Property")
          return;
        const o = l.type === "Type" ? a.types : a.properties, c = l.type === "Type" ? r : n;
        (!hasOwnProperty.call(o, l.name) || t(a, l.name, c, o[l.name])) && s.set(i, !0);
      }, this);
    }
    let r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
    for (const a in this.types)
      t(this, a, r, this.types[a]);
    for (const a in this.properties)
      t(this, a, n, this.properties[a]);
    return r = [...r.keys()].filter((a) => r.get(a)), n = [...n.keys()].filter((a) => n.get(a)), r.length || n.length ? {
      types: r,
      properties: n
    } : null;
  }
  dump(t, r) {
    return {
      generic: this.generic,
      units: this.units,
      types: $c(this.types, !r, t),
      properties: $c(this.properties, !r, t),
      atrules: XS(this.atrules, !r, t)
    };
  }
  toString() {
    return JSON.stringify(this.dump());
  }
};
Nf.Lexer = KS;
function wl(e, t) {
  return typeof t == "string" && /^\s*\|/.test(t) ? typeof e == "string" ? e + t : t.replace(/^\s*\|\s*/, "") : t || null;
}
function N0(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const [n, a] of Object.entries(e))
    if (a) {
      r[n] = {};
      for (const i of Object.keys(a))
        t.includes(i) && (r[n][i] = a[i]);
    }
  return r;
}
function QS(e, t) {
  const r = { ...e };
  for (const [n, a] of Object.entries(t))
    switch (n) {
      case "generic":
        r[n] = !!a;
        break;
      case "units":
        r[n] = { ...e[n] };
        for (const [i, s] of Object.entries(a))
          r[n][i] = Array.isArray(s) ? s : [];
        break;
      case "atrules":
        r[n] = { ...e[n] };
        for (const [i, s] of Object.entries(a)) {
          const u = r[n][i] || {}, l = r[n][i] = {
            prelude: u.prelude || null,
            descriptors: {
              ...u.descriptors
            }
          };
          if (s) {
            l.prelude = s.prelude ? wl(l.prelude, s.prelude) : l.prelude || null;
            for (const [o, c] of Object.entries(s.descriptors || {}))
              l.descriptors[o] = c ? wl(l.descriptors[o], c) : null;
            Object.keys(l.descriptors).length || (l.descriptors = null);
          }
        }
        break;
      case "types":
      case "properties":
        r[n] = { ...e[n] };
        for (const [i, s] of Object.entries(a))
          r[n][i] = wl(r[n][i], s);
        break;
      case "scope":
        r[n] = { ...e[n] };
        for (const [i, s] of Object.entries(a))
          r[n][i] = { ...r[n][i], ...s };
        break;
      case "parseContext":
        r[n] = {
          ...e[n],
          ...a
        };
        break;
      case "atrule":
      case "pseudo":
        r[n] = {
          ...e[n],
          ...N0(a, ["parse"])
        };
        break;
      case "node":
        r[n] = {
          ...e[n],
          ...N0(a, ["name", "structure", "parse", "generate", "walkContext"])
        };
        break;
    }
  return r;
}
var ZS = QS;
const JS = U, e3 = vg, t3 = wg, r3 = Og, n3 = Mg, D0 = Nf, Ac = ZS;
function ob(e) {
  const t = e3.createParser(e), r = n3.createWalker(e), n = t3.createGenerator(e), { fromPlainObject: a, toPlainObject: i } = r3.createConvertor(r), s = {
    lexer: null,
    createLexer: (u) => new D0.Lexer(u, s, s.lexer.structure),
    tokenize: JS.tokenize,
    parse: t,
    generate: n,
    walk: r,
    find: r.find,
    findLast: r.findLast,
    findAll: r.findAll,
    fromPlainObject: a,
    toPlainObject: i,
    fork(u) {
      const l = Ac({}, e);
      return ob(
        typeof u == "function" ? u(l, Object.assign) : Ac(l, u)
      );
    }
  };
  return s.lexer = new D0.Lexer({
    generic: !0,
    units: e.units,
    types: e.types,
    atrules: e.atrules,
    properties: e.properties,
    node: e.node
  }, s), s;
}
const a3 = (e) => ob(Ac({}, e));
var ub = a3, i3 = {
  generic: !0,
  units: {
    angle: [
      "deg",
      "grad",
      "rad",
      "turn"
    ],
    decibel: [
      "db"
    ],
    flex: [
      "fr"
    ],
    frequency: [
      "hz",
      "khz"
    ],
    length: [
      "cm",
      "mm",
      "q",
      "in",
      "pt",
      "pc",
      "px",
      "em",
      "rem",
      "ex",
      "rex",
      "cap",
      "rcap",
      "ch",
      "rch",
      "ic",
      "ric",
      "lh",
      "rlh",
      "vw",
      "svw",
      "lvw",
      "dvw",
      "vh",
      "svh",
      "lvh",
      "dvh",
      "vi",
      "svi",
      "lvi",
      "dvi",
      "vb",
      "svb",
      "lvb",
      "dvb",
      "vmin",
      "svmin",
      "lvmin",
      "dvmin",
      "vmax",
      "svmax",
      "lvmax",
      "dvmax",
      "cqw",
      "cqh",
      "cqi",
      "cqb",
      "cqmin",
      "cqmax"
    ],
    resolution: [
      "dpi",
      "dpcm",
      "dppx",
      "x"
    ],
    semitones: [
      "st"
    ],
    time: [
      "s",
      "ms"
    ]
  },
  types: {
    "abs()": "abs( <calc-sum> )",
    "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
    "acos()": "acos( <calc-sum> )",
    "alpha-value": "<number>|<percentage>",
    "angle-percentage": "<angle>|<percentage>",
    "angular-color-hint": "<angle-percentage>",
    "angular-color-stop": "<color>&&<color-stop-angle>?",
    "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
    "animateable-feature": "scroll-position|contents|<custom-ident>",
    "asin()": "asin( <calc-sum> )",
    "atan()": "atan( <calc-sum> )",
    "atan2()": "atan2( <calc-sum> , <calc-sum> )",
    attachment: "scroll|fixed|local",
    "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
    "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
    "attr-modifier": "i|s",
    "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
    "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
    "auto-track-list": "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
    axis: "block|inline|vertical|horizontal",
    "baseline-position": "[first|last]? baseline",
    "basic-shape": "<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
    "bg-image": "none|<image>",
    "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
    "bg-position": "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
    "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
    "blur()": "blur( <length> )",
    "blend-mode": "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
    box: "border-box|padding-box|content-box",
    "brightness()": "brightness( <number-percentage> )",
    "calc()": "calc( <calc-sum> )",
    "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
    "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
    "calc-value": "<number>|<dimension>|<percentage>|<calc-constant>|( <calc-sum> )",
    "calc-constant": "e|pi|infinity|-infinity|NaN",
    "cf-final-image": "<image>|<color>",
    "cf-mixing-image": "<percentage>?&&<image>",
    "circle()": "circle( [<shape-radius>]? [at <position>]? )",
    "clamp()": "clamp( <calc-sum>#{3} )",
    "class-selector": "'.' <ident-token>",
    "clip-source": "<url>",
    color: "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>",
    "color-stop": "<color-stop-length>|<color-stop-angle>",
    "color-stop-angle": "<angle-percentage>{1,2}",
    "color-stop-length": "<length-percentage>{1,2}",
    "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
    combinator: "'>'|'+'|'~'|['||']",
    "common-lig-values": "[common-ligatures|no-common-ligatures]",
    "compat-auto": "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
    "composite-style": "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
    "compositing-operator": "add|subtract|intersect|exclude",
    "compound-selector": "[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!",
    "compound-selector-list": "<compound-selector>#",
    "complex-selector": "<compound-selector> [<combinator>? <compound-selector>]*",
    "complex-selector-list": "<complex-selector>#",
    "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
    "contextual-alt-values": "[contextual|no-contextual]",
    "content-distribution": "space-between|space-around|space-evenly|stretch",
    "content-list": "[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+",
    "content-position": "center|start|end|flex-start|flex-end",
    "content-replacement": "<image>",
    "contrast()": "contrast( [<number-percentage>] )",
    "cos()": "cos( <calc-sum> )",
    counter: "<counter()>|<counters()>",
    "counter()": "counter( <counter-name> , <counter-style>? )",
    "counter-name": "<custom-ident>",
    "counter-style": "<counter-style-name>|symbols( )",
    "counter-style-name": "<custom-ident>",
    "counters()": "counters( <counter-name> , <string> , <counter-style>? )",
    "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )",
    "cubic-bezier-timing-function": "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
    "deprecated-system-color": "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
    "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]",
    "display-box": "contents|none",
    "display-inside": "flow|flow-root|table|flex|grid|ruby",
    "display-internal": "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
    "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
    "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item",
    "display-outside": "block|inline|run-in",
    "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
    "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]",
    "east-asian-width-values": "[full-width|proportional-width]",
    "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
    "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
    "ending-shape": "circle|ellipse",
    "env()": "env( <custom-ident> , <declaration-value>? )",
    "exp()": "exp( <calc-sum> )",
    "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?",
    "family-name": "<string>|<custom-ident>+",
    "feature-tag-value": "<string> [<integer>|on|off]?",
    "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
    "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'",
    "feature-value-block-list": "<feature-value-block>+",
    "feature-value-declaration": "<custom-ident> : <integer>+ ;",
    "feature-value-declaration-list": "<feature-value-declaration>",
    "feature-value-name": "<custom-ident>",
    "fill-rule": "nonzero|evenodd",
    "filter-function": "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
    "filter-function-list": "[<filter-function>|<url>]+",
    "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
    "fixed-breadth": "<length-percentage>",
    "fixed-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <fixed-size>]+ <line-names>? )",
    "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
    "font-stretch-absolute": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
    "font-variant-css21": "[normal|small-caps]",
    "font-weight-absolute": "normal|bold|<number [1,1000]>",
    "frequency-percentage": "<frequency>|<percentage>",
    "general-enclosed": "[<function-token> <any-value> )]|( <ident> <any-value> )",
    "generic-family": "serif|sans-serif|cursive|fantasy|monospace|-apple-system",
    "generic-name": "serif|sans-serif|cursive|fantasy|monospace",
    "geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
    gradient: "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>",
    "grayscale()": "grayscale( <number-percentage> )",
    "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
    "historical-lig-values": "[historical-ligatures|no-historical-ligatures]",
    "hsl()": "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
    "hsla()": "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
    hue: "<number>|<angle>",
    "hue-rotate()": "hue-rotate( <angle> )",
    "hwb()": "hwb( [<hue>|none] [<percentage>|none] [<percentage>|none] [/ [<alpha-value>|none]]? )",
    "hypot()": "hypot( <calc-sum># )",
    image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
    "image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
    "image-set()": "image-set( <image-set-option># )",
    "image-set-option": "[<image>|<string>] [<resolution>||type( <string> )]",
    "image-src": "<url>|<string>",
    "image-tags": "ltr|rtl",
    "inflexible-breadth": "<length-percentage>|min-content|max-content|auto",
    "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
    "invert()": "invert( <number-percentage> )",
    "keyframes-name": "<custom-ident>|<string>",
    "keyframe-block": "<keyframe-selector># { <declaration-list> }",
    "keyframe-block-list": "<keyframe-block>+",
    "keyframe-selector": "from|to|<percentage>",
    "lab()": "lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
    "layer()": "layer( <layer-name> )",
    "layer-name": "<ident> ['.' <ident>]*",
    "lch()": "lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
    "leader()": "leader( <leader-type> )",
    "leader-type": "dotted|solid|space|<string>",
    "length-percentage": "<length>|<percentage>",
    "line-names": "'[' <custom-ident>* ']'",
    "line-name-list": "[<line-names>|<name-repeat>]+",
    "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
    "line-width": "<length>|thin|medium|thick",
    "linear-color-hint": "<length-percentage>",
    "linear-color-stop": "<color> <color-stop-length>?",
    "linear-gradient()": "linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
    "log()": "log( <calc-sum> , <calc-sum>? )",
    "mask-layer": "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
    "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
    "mask-reference": "none|<image>|<mask-source>",
    "mask-source": "<url>",
    "masking-mode": "alpha|luminance|match-source",
    "matrix()": "matrix( <number>#{6} )",
    "matrix3d()": "matrix3d( <number>#{16} )",
    "max()": "max( <calc-sum># )",
    "media-and": "<media-in-parens> [and <media-in-parens>]+",
    "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>",
    "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>",
    "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
    "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>",
    "media-not": "not <media-in-parens>",
    "media-or": "<media-in-parens> [or <media-in-parens>]+",
    "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
    "media-query-list": "<media-query>#",
    "media-type": "<ident>",
    "mf-boolean": "<mf-name>",
    "mf-name": "<ident>",
    "mf-plain": "<mf-name> : <mf-value>",
    "mf-range": "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
    "mf-value": "<number>|<dimension>|<ident>|<ratio>",
    "min()": "min( <calc-sum># )",
    "minmax()": "minmax( [<length-percentage>|min-content|max-content|auto] , [<length-percentage>|<flex>|min-content|max-content|auto] )",
    "mod()": "mod( <calc-sum> , <calc-sum> )",
    "name-repeat": "repeat( [<integer [1,∞]>|auto-fill] , <line-names>+ )",
    "named-color": "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>",
    "namespace-prefix": "<ident>",
    "ns-prefix": "[<ident-token>|'*']? '|'",
    "number-percentage": "<number>|<percentage>",
    "numeric-figure-values": "[lining-nums|oldstyle-nums]",
    "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
    "numeric-spacing-values": "[proportional-nums|tabular-nums]",
    nth: "<an-plus-b>|even|odd",
    "opacity()": "opacity( [<number-percentage>] )",
    "overflow-position": "unsafe|safe",
    "outline-radius": "<length>|<percentage>",
    "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
    "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'",
    "page-margin-box-type": "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
    "page-selector-list": "[<page-selector>#]?",
    "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
    "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
    "path()": "path( [<fill-rule> ,]? <string> )",
    "paint()": "paint( <ident> , <declaration-value>? )",
    "perspective()": "perspective( [<length [0,∞]>|none] )",
    "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
    position: "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
    "pow()": "pow( <calc-sum> , <calc-sum> )",
    "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'",
    "pseudo-element-selector": "':' <pseudo-class-selector>",
    "pseudo-page": ": [left|right|first|blank]",
    quote: "open-quote|close-quote|no-open-quote|no-close-quote",
    "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
    ratio: "<number [0,∞]> [/ <number [0,∞]>]?",
    "relative-selector": "<combinator>? <complex-selector>",
    "relative-selector-list": "<relative-selector>#",
    "relative-size": "larger|smaller",
    "rem()": "rem( <calc-sum> , <calc-sum> )",
    "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
    "repeating-conic-gradient()": "repeating-conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
    "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
    "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
    "reversed-counter-name": "reversed( <counter-name> )",
    "rgb()": "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
    "rgba()": "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
    "rotate()": "rotate( [<angle>|<zero>] )",
    "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
    "rotateX()": "rotateX( [<angle>|<zero>] )",
    "rotateY()": "rotateY( [<angle>|<zero>] )",
    "rotateZ()": "rotateZ( [<angle>|<zero>] )",
    "round()": "round( <rounding-strategy>? , <calc-sum> , <calc-sum> )",
    "rounding-strategy": "nearest|up|down|to-zero",
    "saturate()": "saturate( <number-percentage> )",
    "scale()": "scale( [<number>|<percentage>]#{1,2} )",
    "scale3d()": "scale3d( [<number>|<percentage>]#{3} )",
    "scaleX()": "scaleX( [<number>|<percentage>] )",
    "scaleY()": "scaleY( [<number>|<percentage>] )",
    "scaleZ()": "scaleZ( [<number>|<percentage>] )",
    scroller: "root|nearest",
    "self-position": "center|start|end|self-start|self-end|flex-start|flex-end",
    "shape-radius": "<length-percentage>|closest-side|farthest-side",
    "sign()": "sign( <calc-sum> )",
    "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
    "skewX()": "skewX( [<angle>|<zero>] )",
    "skewY()": "skewY( [<angle>|<zero>] )",
    "sepia()": "sepia( <number-percentage> )",
    shadow: "inset?&&<length>{2,4}&&<color>?",
    "shadow-t": "[<length>{2,3}&&<color>?]",
    shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
    "shape-box": "<box>|margin-box",
    "side-or-corner": "[left|right]||[top|bottom]",
    "sin()": "sin( <calc-sum> )",
    "single-animation": "<time>||<easing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]",
    "single-animation-direction": "normal|reverse|alternate|alternate-reverse",
    "single-animation-fill-mode": "none|forwards|backwards|both",
    "single-animation-iteration-count": "infinite|<number>",
    "single-animation-play-state": "running|paused",
    "single-animation-timeline": "auto|none|<timeline-name>|scroll( <axis>? <scroller>? )",
    "single-transition": "[none|<single-transition-property>]||<time>||<easing-function>||<time>",
    "single-transition-property": "all|<custom-ident>",
    size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
    "sqrt()": "sqrt( <calc-sum> )",
    "step-position": "jump-start|jump-end|jump-none|jump-both|start|end",
    "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )",
    "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
    "supports-condition": "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
    "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>",
    "supports-feature": "<supports-decl>|<supports-selector-fn>",
    "supports-decl": "( <declaration> )",
    "supports-selector-fn": "selector( <complex-selector> )",
    symbol: "<string>|<image>|<custom-ident>",
    "tan()": "tan( <calc-sum> )",
    target: "<target-counter()>|<target-counters()>|<target-text()>",
    "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
    "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
    "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
    "time-percentage": "<time>|<percentage>",
    "timeline-name": "<custom-ident>|<string>",
    "easing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>",
    "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto",
    "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
    "track-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <track-size>]+ <line-names>? )",
    "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( <length-percentage> )",
    "transform-function": "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
    "transform-list": "<transform-function>+",
    "translate()": "translate( <length-percentage> , <length-percentage>? )",
    "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )",
    "translateX()": "translateX( <length-percentage> )",
    "translateY()": "translateY( <length-percentage> )",
    "translateZ()": "translateZ( <length> )",
    "type-or-unit": "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
    "type-selector": "<wq-name>|<ns-prefix>? '*'",
    "var()": "var( <custom-property-name> , <declaration-value>? )",
    "viewport-length": "auto|<length-percentage>",
    "visual-box": "content-box|padding-box|border-box",
    "wq-name": "<ns-prefix>? <ident-token>",
    "-legacy-gradient": "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
    "-legacy-linear-gradient": "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
    "-legacy-repeating-linear-gradient": "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
    "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>",
    "-legacy-radial-gradient": "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
    "-legacy-repeating-radial-gradient": "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
    "-legacy-radial-gradient-arguments": "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
    "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
    "-legacy-radial-gradient-shape": "circle|ellipse",
    "-non-standard-font": "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
    "-non-standard-color": "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
    "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
    "-non-standard-overflow": "-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
    "-non-standard-width": "fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content",
    "-webkit-gradient()": "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
    "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
    "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
    "-webkit-gradient-radius": "<length>|<percentage>",
    "-webkit-gradient-type": "linear|radial",
    "-webkit-mask-box-repeat": "repeat|stretch|round",
    "-webkit-mask-clip-style": "border|border-box|padding|padding-box|content|content-box|text",
    "-ms-filter-function-list": "<-ms-filter-function>+",
    "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
    "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
    "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )",
    "-ms-filter": "<string>",
    age: "child|young|old",
    "attr-name": "<wq-name>",
    "attr-fallback": "<any-value>",
    "bg-clip": "<box>|border|text",
    bottom: "<length>|auto",
    "generic-voice": "[<age>? <gender> <integer>?]",
    gender: "male|female|neutral",
    left: "<length>|auto",
    "mask-image": "<mask-reference>#",
    paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
    right: "<length>|auto",
    "scroll-timeline-axis": "block|inline|vertical|horizontal",
    "scroll-timeline-name": "none|<custom-ident>",
    "single-animation-composition": "replace|add|accumulate",
    "svg-length": "<percentage>|<length>|<number>",
    "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
    top: "<length>|auto",
    x: "<number>",
    y: "<number>",
    declaration: "<ident-token> : <declaration-value>? ['!' important]?",
    "declaration-list": "[<declaration>? ';']* <declaration>?",
    url: "url( <string> <url-modifier>* )|<url-token>",
    "url-modifier": "<ident>|<function-token> <any-value> )",
    "number-zero-one": "<number [0,1]>",
    "number-one-or-greater": "<number [1,∞]>",
    "-non-standard-display": "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box"
  },
  properties: {
    "--*": "<declaration-value>",
    "-ms-accelerator": "false|true",
    "-ms-block-progression": "tb|rl|bt|lr",
    "-ms-content-zoom-chaining": "none|chained",
    "-ms-content-zooming": "none|zoom",
    "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
    "-ms-content-zoom-limit-max": "<percentage>",
    "-ms-content-zoom-limit-min": "<percentage>",
    "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
    "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
    "-ms-content-zoom-snap-type": "none|proximity|mandatory",
    "-ms-filter": "<string>",
    "-ms-flow-from": "[none|<custom-ident>]#",
    "-ms-flow-into": "[none|<custom-ident>]#",
    "-ms-grid-columns": "none|<track-list>|<auto-track-list>",
    "-ms-grid-rows": "none|<track-list>|<auto-track-list>",
    "-ms-high-contrast-adjust": "auto|none",
    "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
    "-ms-hyphenate-limit-lines": "no-limit|<integer>",
    "-ms-hyphenate-limit-zone": "<percentage>|<length>",
    "-ms-ime-align": "auto|after",
    "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar",
    "-ms-scrollbar-3dlight-color": "<color>",
    "-ms-scrollbar-arrow-color": "<color>",
    "-ms-scrollbar-base-color": "<color>",
    "-ms-scrollbar-darkshadow-color": "<color>",
    "-ms-scrollbar-face-color": "<color>",
    "-ms-scrollbar-highlight-color": "<color>",
    "-ms-scrollbar-shadow-color": "<color>",
    "-ms-scrollbar-track-color": "<color>",
    "-ms-scroll-chaining": "chained|none",
    "-ms-scroll-limit": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
    "-ms-scroll-limit-x-max": "auto|<length>",
    "-ms-scroll-limit-x-min": "<length>",
    "-ms-scroll-limit-y-max": "auto|<length>",
    "-ms-scroll-limit-y-min": "<length>",
    "-ms-scroll-rails": "none|railed",
    "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
    "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
    "-ms-scroll-snap-type": "none|proximity|mandatory",
    "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
    "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
    "-ms-scroll-translation": "none|vertical-to-horizontal",
    "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
    "-ms-touch-select": "grippers|none",
    "-ms-user-select": "none|element|text",
    "-ms-wrap-flow": "auto|both|start|end|maximum|clear",
    "-ms-wrap-margin": "<length>",
    "-ms-wrap-through": "wrap|none",
    "-moz-appearance": "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
    "-moz-binding": "<url>|none",
    "-moz-border-bottom-colors": "<color>+|none",
    "-moz-border-left-colors": "<color>+|none",
    "-moz-border-right-colors": "<color>+|none",
    "-moz-border-top-colors": "<color>+|none",
    "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#",
    "-moz-float-edge": "border-box|content-box|margin-box|padding-box",
    "-moz-force-broken-image-icon": "0|1",
    "-moz-image-region": "<shape>|auto",
    "-moz-orient": "inline|block|horizontal|vertical",
    "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
    "-moz-outline-radius-bottomleft": "<outline-radius>",
    "-moz-outline-radius-bottomright": "<outline-radius>",
    "-moz-outline-radius-topleft": "<outline-radius>",
    "-moz-outline-radius-topright": "<outline-radius>",
    "-moz-stack-sizing": "ignore|stretch-to-fit",
    "-moz-text-blink": "none|blink",
    "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
    "-moz-user-input": "auto|none|enabled|disabled",
    "-moz-user-modify": "read-only|read-write|write-only",
    "-moz-window-dragging": "drag|no-drag",
    "-moz-window-shadow": "default|menu|tooltip|sheet|none",
    "-webkit-appearance": "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
    "-webkit-border-before": "<'border-width'>||<'border-style'>||<color>",
    "-webkit-border-before-color": "<color>",
    "-webkit-border-before-style": "<'border-style'>",
    "-webkit-border-before-width": "<'border-width'>",
    "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?",
    "-webkit-line-clamp": "none|<integer>",
    "-webkit-mask": "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
    "-webkit-mask-attachment": "<attachment>#",
    "-webkit-mask-clip": "[<box>|border|padding|content|text]#",
    "-webkit-mask-composite": "<composite-style>#",
    "-webkit-mask-image": "<mask-reference>#",
    "-webkit-mask-origin": "[<box>|border|padding|content]#",
    "-webkit-mask-position": "<position>#",
    "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#",
    "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#",
    "-webkit-mask-repeat": "<repeat-style>#",
    "-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
    "-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
    "-webkit-mask-size": "<bg-size>#",
    "-webkit-overflow-scrolling": "auto|touch",
    "-webkit-tap-highlight-color": "<color>",
    "-webkit-text-fill-color": "<color>",
    "-webkit-text-stroke": "<length>||<color>",
    "-webkit-text-stroke-color": "<color>",
    "-webkit-text-stroke-width": "<length>",
    "-webkit-touch-callout": "default|none",
    "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only",
    "accent-color": "auto|<color>",
    "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
    "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
    "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
    "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
    all: "initial|inherit|unset|revert|revert-layer",
    animation: "<single-animation>#",
    "animation-composition": "<single-animation-composition>#",
    "animation-delay": "<time>#",
    "animation-direction": "<single-animation-direction>#",
    "animation-duration": "<time>#",
    "animation-fill-mode": "<single-animation-fill-mode>#",
    "animation-iteration-count": "<single-animation-iteration-count>#",
    "animation-name": "[none|<keyframes-name>]#",
    "animation-play-state": "<single-animation-play-state>#",
    "animation-timing-function": "<easing-function>#",
    "animation-timeline": "<single-animation-timeline>#",
    appearance: "none|auto|textfield|menulist-button|<compat-auto>",
    "aspect-ratio": "auto|<ratio>",
    azimuth: "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
    "backdrop-filter": "none|<filter-function-list>",
    "backface-visibility": "visible|hidden",
    background: "[<bg-layer> ,]* <final-bg-layer>",
    "background-attachment": "<attachment>#",
    "background-blend-mode": "<blend-mode>#",
    "background-clip": "<bg-clip>#",
    "background-color": "<color>",
    "background-image": "<bg-image>#",
    "background-origin": "<box>#",
    "background-position": "<bg-position>#",
    "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
    "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
    "background-repeat": "<repeat-style>#",
    "background-size": "<bg-size>#",
    "block-overflow": "clip|ellipsis|<string>",
    "block-size": "<'width'>",
    border: "<line-width>||<line-style>||<color>",
    "border-block": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-color": "<'border-top-color'>{1,2}",
    "border-block-style": "<'border-top-style'>",
    "border-block-width": "<'border-top-width'>",
    "border-block-end": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-end-color": "<'border-top-color'>",
    "border-block-end-style": "<'border-top-style'>",
    "border-block-end-width": "<'border-top-width'>",
    "border-block-start": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-start-color": "<'border-top-color'>",
    "border-block-start-style": "<'border-top-style'>",
    "border-block-start-width": "<'border-top-width'>",
    "border-bottom": "<line-width>||<line-style>||<color>",
    "border-bottom-color": "<'border-top-color'>",
    "border-bottom-left-radius": "<length-percentage>{1,2}",
    "border-bottom-right-radius": "<length-percentage>{1,2}",
    "border-bottom-style": "<line-style>",
    "border-bottom-width": "<line-width>",
    "border-collapse": "collapse|separate",
    "border-color": "<color>{1,4}",
    "border-end-end-radius": "<length-percentage>{1,2}",
    "border-end-start-radius": "<length-percentage>{1,2}",
    "border-image": "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
    "border-image-outset": "[<length>|<number>]{1,4}",
    "border-image-repeat": "[stretch|repeat|round|space]{1,2}",
    "border-image-slice": "<number-percentage>{1,4}&&fill?",
    "border-image-source": "none|<image>",
    "border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
    "border-inline": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-color": "<'border-top-color'>{1,2}",
    "border-inline-style": "<'border-top-style'>",
    "border-inline-width": "<'border-top-width'>",
    "border-inline-end-color": "<'border-top-color'>",
    "border-inline-end-style": "<'border-top-style'>",
    "border-inline-end-width": "<'border-top-width'>",
    "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-start-color": "<'border-top-color'>",
    "border-inline-start-style": "<'border-top-style'>",
    "border-inline-start-width": "<'border-top-width'>",
    "border-left": "<line-width>||<line-style>||<color>",
    "border-left-color": "<color>",
    "border-left-style": "<line-style>",
    "border-left-width": "<line-width>",
    "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
    "border-right": "<line-width>||<line-style>||<color>",
    "border-right-color": "<color>",
    "border-right-style": "<line-style>",
    "border-right-width": "<line-width>",
    "border-spacing": "<length> <length>?",
    "border-start-end-radius": "<length-percentage>{1,2}",
    "border-start-start-radius": "<length-percentage>{1,2}",
    "border-style": "<line-style>{1,4}",
    "border-top": "<line-width>||<line-style>||<color>",
    "border-top-color": "<color>",
    "border-top-left-radius": "<length-percentage>{1,2}",
    "border-top-right-radius": "<length-percentage>{1,2}",
    "border-top-style": "<line-style>",
    "border-top-width": "<line-width>",
    "border-width": "<line-width>{1,4}",
    bottom: "<length>|<percentage>|auto",
    "box-align": "start|center|end|baseline|stretch",
    "box-decoration-break": "slice|clone",
    "box-direction": "normal|reverse|inherit",
    "box-flex": "<number>",
    "box-flex-group": "<integer>",
    "box-lines": "single|multiple",
    "box-ordinal-group": "<integer>",
    "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
    "box-pack": "start|center|end|justify",
    "box-shadow": "none|<shadow>#",
    "box-sizing": "content-box|border-box",
    "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
    "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
    "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
    "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end",
    caret: "<'caret-color'>||<'caret-shape'>",
    "caret-color": "auto|<color>",
    "caret-shape": "auto|bar|block|underscore",
    clear: "none|left|right|both|inline-start|inline-end",
    clip: "<shape>|auto",
    "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
    color: "<color>",
    "print-color-adjust": "economy|exact",
    "color-scheme": "normal|[light|dark|<custom-ident>]+&&only?",
    "column-count": "<integer>|auto",
    "column-fill": "auto|balance|balance-all",
    "column-gap": "normal|<length-percentage>",
    "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
    "column-rule-color": "<color>",
    "column-rule-style": "<'border-style'>",
    "column-rule-width": "<'border-width'>",
    "column-span": "none|all",
    "column-width": "<length>|auto",
    columns: "<'column-width'>||<'column-count'>",
    contain: "none|strict|content|[[size||inline-size]||layout||style||paint]",
    "contain-intrinsic-size": "[none|<length>|auto <length>]{1,2}",
    "contain-intrinsic-block-size": "none|<length>|auto <length>",
    "contain-intrinsic-height": "none|<length>|auto <length>",
    "contain-intrinsic-inline-size": "none|<length>|auto <length>",
    "contain-intrinsic-width": "none|<length>|auto <length>",
    content: "normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?",
    "content-visibility": "visible|auto|hidden",
    "counter-increment": "[<counter-name> <integer>?]+|none",
    "counter-reset": "[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none",
    "counter-set": "[<counter-name> <integer>?]+|none",
    cursor: "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
    direction: "ltr|rtl",
    display: "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
    "empty-cells": "show|hide",
    filter: "none|<filter-function-list>|<-ms-filter-function-list>",
    flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
    "flex-basis": "content|<'width'>",
    "flex-direction": "row|row-reverse|column|column-reverse",
    "flex-flow": "<'flex-direction'>||<'flex-wrap'>",
    "flex-grow": "<number>",
    "flex-shrink": "<number>",
    "flex-wrap": "nowrap|wrap|wrap-reverse",
    float: "left|right|none|inline-start|inline-end",
    font: "[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar",
    "font-family": "[<family-name>|<generic-family>]#",
    "font-feature-settings": "normal|<feature-tag-value>#",
    "font-kerning": "auto|normal|none",
    "font-language-override": "normal|<string>",
    "font-optical-sizing": "auto|none",
    "font-variation-settings": "normal|[<string> <number>]#",
    "font-size": "<absolute-size>|<relative-size>|<length-percentage>",
    "font-size-adjust": "none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]",
    "font-smooth": "auto|never|always|<absolute-size>|<length>",
    "font-stretch": "<font-stretch-absolute>",
    "font-style": "normal|italic|oblique <angle>?",
    "font-synthesis": "none|[weight||style||small-caps]",
    "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
    "font-variant-alternates": "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
    "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
    "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
    "font-variant-ligatures": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
    "font-variant-numeric": "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
    "font-variant-position": "normal|sub|super",
    "font-weight": "<font-weight-absolute>|bolder|lighter",
    "forced-color-adjust": "auto|none",
    gap: "<'row-gap'> <'column-gap'>?",
    grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
    "grid-area": "<grid-line> [/ <grid-line>]{0,3}",
    "grid-auto-columns": "<track-size>+",
    "grid-auto-flow": "[row|column]||dense",
    "grid-auto-rows": "<track-size>+",
    "grid-column": "<grid-line> [/ <grid-line>]?",
    "grid-column-end": "<grid-line>",
    "grid-column-gap": "<length-percentage>",
    "grid-column-start": "<grid-line>",
    "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
    "grid-row": "<grid-line> [/ <grid-line>]?",
    "grid-row-end": "<grid-line>",
    "grid-row-gap": "<length-percentage>",
    "grid-row-start": "<grid-line>",
    "grid-template": "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
    "grid-template-areas": "none|<string>+",
    "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
    "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
    "hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
    height: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "hyphenate-character": "auto|<string>",
    hyphens: "none|manual|auto",
    "image-orientation": "from-image|<angle>|[<angle>? flip]",
    "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
    "image-resolution": "[from-image||<resolution>]&&snap?",
    "ime-mode": "auto|normal|active|inactive|disabled",
    "initial-letter": "normal|[<number> <integer>?]",
    "initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
    "inline-size": "<'width'>",
    "input-security": "auto|none",
    inset: "<'top'>{1,4}",
    "inset-block": "<'top'>{1,2}",
    "inset-block-end": "<'top'>",
    "inset-block-start": "<'top'>",
    "inset-inline": "<'top'>{1,2}",
    "inset-inline-end": "<'top'>",
    "inset-inline-start": "<'top'>",
    isolation: "auto|isolate",
    "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
    "justify-items": "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
    "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
    "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
    left: "<length>|<percentage>|auto",
    "letter-spacing": "normal|<length-percentage>",
    "line-break": "auto|loose|normal|strict|anywhere",
    "line-clamp": "none|<integer>",
    "line-height": "normal|<number>|<length>|<percentage>",
    "line-height-step": "<length>",
    "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
    "list-style-image": "<image>|none",
    "list-style-position": "inside|outside",
    "list-style-type": "<counter-style>|<string>|none",
    margin: "[<length>|<percentage>|auto]{1,4}",
    "margin-block": "<'margin-left'>{1,2}",
    "margin-block-end": "<'margin-left'>",
    "margin-block-start": "<'margin-left'>",
    "margin-bottom": "<length>|<percentage>|auto",
    "margin-inline": "<'margin-left'>{1,2}",
    "margin-inline-end": "<'margin-left'>",
    "margin-inline-start": "<'margin-left'>",
    "margin-left": "<length>|<percentage>|auto",
    "margin-right": "<length>|<percentage>|auto",
    "margin-top": "<length>|<percentage>|auto",
    "margin-trim": "none|in-flow|all",
    mask: "<mask-layer>#",
    "mask-border": "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
    "mask-border-mode": "luminance|alpha",
    "mask-border-outset": "[<length>|<number>]{1,4}",
    "mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
    "mask-border-slice": "<number-percentage>{1,4} fill?",
    "mask-border-source": "none|<image>",
    "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
    "mask-clip": "[<geometry-box>|no-clip]#",
    "mask-composite": "<compositing-operator>#",
    "mask-image": "<mask-reference>#",
    "mask-mode": "<masking-mode>#",
    "mask-origin": "<geometry-box>#",
    "mask-position": "<position>#",
    "mask-repeat": "<repeat-style>#",
    "mask-size": "<bg-size>#",
    "mask-type": "luminance|alpha",
    "masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
    "math-depth": "auto-add|add( <integer> )|<integer>",
    "math-shift": "normal|compact",
    "math-style": "normal|compact",
    "max-block-size": "<'max-width'>",
    "max-height": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "max-inline-size": "<'max-width'>",
    "max-lines": "none|<integer>",
    "max-width": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
    "min-block-size": "<'min-width'>",
    "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "min-inline-size": "<'min-width'>",
    "min-width": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
    "mix-blend-mode": "<blend-mode>|plus-lighter",
    "object-fit": "fill|contain|cover|none|scale-down",
    "object-position": "<position>",
    offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
    "offset-anchor": "auto|<position>",
    "offset-distance": "<length-percentage>",
    "offset-path": "none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]",
    "offset-position": "auto|<position>",
    "offset-rotate": "[auto|reverse]||<angle>",
    opacity: "<alpha-value>",
    order: "<integer>",
    orphans: "<integer>",
    outline: "[<'outline-color'>||<'outline-style'>||<'outline-width'>]",
    "outline-color": "<color>|invert",
    "outline-offset": "<length>",
    "outline-style": "auto|<'border-style'>",
    "outline-width": "<line-width>",
    overflow: "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
    "overflow-anchor": "auto|none",
    "overflow-block": "visible|hidden|clip|scroll|auto",
    "overflow-clip-box": "padding-box|content-box",
    "overflow-clip-margin": "<visual-box>||<length [0,∞]>",
    "overflow-inline": "visible|hidden|clip|scroll|auto",
    "overflow-wrap": "normal|break-word|anywhere",
    "overflow-x": "visible|hidden|clip|scroll|auto",
    "overflow-y": "visible|hidden|clip|scroll|auto",
    "overscroll-behavior": "[contain|none|auto]{1,2}",
    "overscroll-behavior-block": "contain|none|auto",
    "overscroll-behavior-inline": "contain|none|auto",
    "overscroll-behavior-x": "contain|none|auto",
    "overscroll-behavior-y": "contain|none|auto",
    padding: "[<length>|<percentage>]{1,4}",
    "padding-block": "<'padding-left'>{1,2}",
    "padding-block-end": "<'padding-left'>",
    "padding-block-start": "<'padding-left'>",
    "padding-bottom": "<length>|<percentage>",
    "padding-inline": "<'padding-left'>{1,2}",
    "padding-inline-end": "<'padding-left'>",
    "padding-inline-start": "<'padding-left'>",
    "padding-left": "<length>|<percentage>",
    "padding-right": "<length>|<percentage>",
    "padding-top": "<length>|<percentage>",
    "page-break-after": "auto|always|avoid|left|right|recto|verso",
    "page-break-before": "auto|always|avoid|left|right|recto|verso",
    "page-break-inside": "auto|avoid",
    "paint-order": "normal|[fill||stroke||markers]",
    perspective: "none|<length>",
    "perspective-origin": "<position>",
    "place-content": "<'align-content'> <'justify-content'>?",
    "place-items": "<'align-items'> <'justify-items'>?",
    "place-self": "<'align-self'> <'justify-self'>?",
    "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
    position: "static|relative|absolute|sticky|fixed|-webkit-sticky",
    quotes: "none|auto|[<string> <string>]+",
    resize: "none|both|horizontal|vertical|block|inline",
    right: "<length>|<percentage>|auto",
    rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
    "row-gap": "normal|<length-percentage>",
    "ruby-align": "start|center|space-between|space-around",
    "ruby-merge": "separate|collapse|auto",
    "ruby-position": "[alternate||[over|under]]|inter-character",
    scale: "none|<number>{1,3}",
    "scrollbar-color": "auto|<color>{2}",
    "scrollbar-gutter": "auto|stable&&both-edges?",
    "scrollbar-width": "auto|thin|none",
    "scroll-behavior": "auto|smooth",
    "scroll-margin": "<length>{1,4}",
    "scroll-margin-block": "<length>{1,2}",
    "scroll-margin-block-start": "<length>",
    "scroll-margin-block-end": "<length>",
    "scroll-margin-bottom": "<length>",
    "scroll-margin-inline": "<length>{1,2}",
    "scroll-margin-inline-start": "<length>",
    "scroll-margin-inline-end": "<length>",
    "scroll-margin-left": "<length>",
    "scroll-margin-right": "<length>",
    "scroll-margin-top": "<length>",
    "scroll-padding": "[auto|<length-percentage>]{1,4}",
    "scroll-padding-block": "[auto|<length-percentage>]{1,2}",
    "scroll-padding-block-start": "auto|<length-percentage>",
    "scroll-padding-block-end": "auto|<length-percentage>",
    "scroll-padding-bottom": "auto|<length-percentage>",
    "scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
    "scroll-padding-inline-start": "auto|<length-percentage>",
    "scroll-padding-inline-end": "auto|<length-percentage>",
    "scroll-padding-left": "auto|<length-percentage>",
    "scroll-padding-right": "auto|<length-percentage>",
    "scroll-padding-top": "auto|<length-percentage>",
    "scroll-snap-align": "[none|start|end|center]{1,2}",
    "scroll-snap-coordinate": "none|<position>#",
    "scroll-snap-destination": "<position>",
    "scroll-snap-points-x": "none|repeat( <length-percentage> )",
    "scroll-snap-points-y": "none|repeat( <length-percentage> )",
    "scroll-snap-stop": "normal|always",
    "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?",
    "scroll-snap-type-x": "none|mandatory|proximity",
    "scroll-snap-type-y": "none|mandatory|proximity",
    "scroll-timeline": "<scroll-timeline-name>||<scroll-timeline-axis>",
    "scroll-timeline-axis": "block|inline|vertical|horizontal",
    "scroll-timeline-name": "none|<custom-ident>",
    "shape-image-threshold": "<alpha-value>",
    "shape-margin": "<length-percentage>",
    "shape-outside": "none|[<shape-box>||<basic-shape>]|<image>",
    "tab-size": "<integer>|<length>",
    "table-layout": "auto|fixed",
    "text-align": "start|end|left|right|center|justify|match-parent",
    "text-align-last": "auto|start|end|left|right|center|justify",
    "text-combine-upright": "none|all|[digits <integer>?]",
    "text-decoration": "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
    "text-decoration-color": "<color>",
    "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
    "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
    "text-decoration-skip-ink": "auto|all|none",
    "text-decoration-style": "solid|double|dotted|dashed|wavy",
    "text-decoration-thickness": "auto|from-font|<length>|<percentage>",
    "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
    "text-emphasis-color": "<color>",
    "text-emphasis-position": "[over|under]&&[right|left]",
    "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
    "text-indent": "<length-percentage>&&hanging?&&each-line?",
    "text-justify": "auto|inter-character|inter-word|none",
    "text-orientation": "mixed|upright|sideways",
    "text-overflow": "[clip|ellipsis|<string>]{1,2}",
    "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
    "text-shadow": "none|<shadow-t>#",
    "text-size-adjust": "none|auto|<percentage>",
    "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana",
    "text-underline-offset": "auto|<length>|<percentage>",
    "text-underline-position": "auto|from-font|[under||[left|right]]",
    top: "<length>|<percentage>|auto",
    "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
    transform: "none|<transform-list>",
    "transform-box": "content-box|border-box|fill-box|stroke-box|view-box",
    "transform-origin": "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
    "transform-style": "flat|preserve-3d",
    transition: "<single-transition>#",
    "transition-delay": "<time>#",
    "transition-duration": "<time>#",
    "transition-property": "none|<single-transition-property>#",
    "transition-timing-function": "<easing-function>#",
    translate: "none|<length-percentage> [<length-percentage> <length>?]?",
    "unicode-bidi": "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
    "user-select": "auto|text|none|contain|all",
    "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
    visibility: "visible|hidden|collapse",
    "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces",
    widows: "<integer>",
    width: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|fill|stretch|intrinsic|-moz-max-content|-webkit-max-content|-moz-fit-content|-webkit-fit-content",
    "will-change": "auto|<animateable-feature>#",
    "word-break": "normal|break-all|keep-all|break-word",
    "word-spacing": "normal|<length>",
    "word-wrap": "normal|break-word",
    "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
    "z-index": "auto|<integer>",
    zoom: "normal|reset|<number>|<percentage>",
    "-moz-background-clip": "padding|border",
    "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
    "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
    "-moz-border-radius-topleft": "<'border-top-left-radius'>",
    "-moz-border-radius-topright": "<'border-bottom-right-radius'>",
    "-moz-control-character-visibility": "visible|hidden",
    "-moz-osx-font-smoothing": "auto|grayscale",
    "-moz-user-select": "none|text|all|-moz-none",
    "-ms-flex-align": "start|end|center|baseline|stretch",
    "-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
    "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
    "-ms-flex-negative": "<'flex-shrink'>",
    "-ms-flex-pack": "start|end|center|justify|distribute",
    "-ms-flex-order": "<integer>",
    "-ms-flex-positive": "<'flex-grow'>",
    "-ms-flex-preferred-size": "<'flex-basis'>",
    "-ms-interpolation-mode": "nearest-neighbor|bicubic",
    "-ms-grid-column-align": "start|end|center|stretch",
    "-ms-grid-row-align": "start|end|center|stretch",
    "-ms-hyphenate-limit-last": "none|always|column|page|spread",
    "-webkit-background-clip": "[<box>|border|padding|content|text]#",
    "-webkit-column-break-after": "always|auto|avoid",
    "-webkit-column-break-before": "always|auto|avoid",
    "-webkit-column-break-inside": "always|auto|avoid",
    "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased",
    "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
    "-webkit-print-color-adjust": "economy|exact",
    "-webkit-text-security": "none|circle|disc|square",
    "-webkit-user-drag": "none|element|auto",
    "-webkit-user-select": "auto|none|text|all",
    "alignment-baseline": "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
    "baseline-shift": "baseline|sub|super|<svg-length>",
    behavior: "<url>+",
    "clip-rule": "nonzero|evenodd",
    cue: "<'cue-before'> <'cue-after'>?",
    "cue-after": "<url> <decibel>?|none",
    "cue-before": "<url> <decibel>?|none",
    "dominant-baseline": "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
    fill: "<paint>",
    "fill-opacity": "<number-zero-one>",
    "fill-rule": "nonzero|evenodd",
    "glyph-orientation-horizontal": "<angle>",
    "glyph-orientation-vertical": "<angle>",
    kerning: "auto|<svg-length>",
    marker: "none|<url>",
    "marker-end": "none|<url>",
    "marker-mid": "none|<url>",
    "marker-start": "none|<url>",
    pause: "<'pause-before'> <'pause-after'>?",
    "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
    rest: "<'rest-before'> <'rest-after'>?",
    "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision",
    src: "[<url> [format( <string># )]?|local( <family-name> )]#",
    speak: "auto|none|normal",
    "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]",
    stroke: "<paint>",
    "stroke-dasharray": "none|[<svg-length>+]#",
    "stroke-dashoffset": "<svg-length>",
    "stroke-linecap": "butt|round|square",
    "stroke-linejoin": "miter|round|bevel",
    "stroke-miterlimit": "<number-one-or-greater>",
    "stroke-opacity": "<number-zero-one>",
    "stroke-width": "<svg-length>",
    "text-anchor": "start|middle|end",
    "unicode-range": "<urange>#",
    "voice-balance": "<number>|left|center|right|leftwards|rightwards",
    "voice-duration": "auto|<time>",
    "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
    "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
    "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
    "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
    "voice-stress": "normal|strong|moderate|none|reduced",
    "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"
  },
  atrules: {
    charset: {
      prelude: "<string>",
      descriptors: null
    },
    "counter-style": {
      prelude: "<counter-style-name>",
      descriptors: {
        "additive-symbols": "[<integer>&&<symbol>]#",
        fallback: "<counter-style-name>",
        negative: "<symbol> <symbol>?",
        pad: "<integer>&&<symbol>",
        prefix: "<symbol>",
        range: "[[<integer>|infinite]{2}]#|auto",
        "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>",
        suffix: "<symbol>",
        symbols: "<symbol>+",
        system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"
      }
    },
    document: {
      prelude: "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
      descriptors: null
    },
    "font-face": {
      prelude: null,
      descriptors: {
        "ascent-override": "normal|<percentage>",
        "descent-override": "normal|<percentage>",
        "font-display": "[auto|block|swap|fallback|optional]",
        "font-family": "<family-name>",
        "font-feature-settings": "normal|<feature-tag-value>#",
        "font-variation-settings": "normal|[<string> <number>]#",
        "font-stretch": "<font-stretch-absolute>{1,2}",
        "font-style": "normal|italic|oblique <angle>{0,2}",
        "font-weight": "<font-weight-absolute>{1,2}",
        "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
        "line-gap-override": "normal|<percentage>",
        "size-adjust": "<percentage>",
        src: "[<url> [format( <string># )]?|local( <family-name> )]#",
        "unicode-range": "<urange>#"
      }
    },
    "font-feature-values": {
      prelude: "<family-name>#",
      descriptors: null
    },
    import: {
      prelude: "[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",
      descriptors: null
    },
    keyframes: {
      prelude: "<keyframes-name>",
      descriptors: null
    },
    layer: {
      prelude: "[<layer-name>#|<layer-name>?]",
      descriptors: null
    },
    media: {
      prelude: "<media-query-list>",
      descriptors: null
    },
    namespace: {
      prelude: "<namespace-prefix>? [<string>|<url>]",
      descriptors: null
    },
    page: {
      prelude: "<page-selector-list>",
      descriptors: {
        bleed: "auto|<length>",
        marks: "none|[crop||cross]",
        size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"
      }
    },
    property: {
      prelude: "<custom-property-name>",
      descriptors: {
        syntax: "<string>",
        inherits: "true|false",
        "initial-value": "<string>"
      }
    },
    "scroll-timeline": {
      prelude: "<timeline-name>",
      descriptors: null
    },
    supports: {
      prelude: "<supports-condition>",
      descriptors: null
    },
    viewport: {
      prelude: null,
      descriptors: {
        height: "<viewport-length>{1,2}",
        "max-height": "<viewport-length>",
        "max-width": "<viewport-length>",
        "max-zoom": "auto|<number>|<percentage>",
        "min-height": "<viewport-length>",
        "min-width": "<viewport-length>",
        "min-zoom": "auto|<number>|<percentage>",
        orientation: "auto|portrait|landscape",
        "user-zoom": "zoom|fixed",
        "viewport-fit": "auto|contain|cover",
        width: "<viewport-length>{1,2}",
        zoom: "auto|<number>|<percentage>"
      }
    },
    nest: {
      prelude: "<complex-selector-list>",
      descriptors: null
    }
  }
}, K = {}, Yn = {};
const De = R, lb = ie, Bt = 43, Je = 45, bo = 110, Er = !0, s3 = !1;
function yo(e, t) {
  let r = this.tokenStart + e;
  const n = this.charCodeAt(r);
  for ((n === Bt || n === Je) && (t && this.error("Number sign is not allowed"), r++); r < this.tokenEnd; r++)
    lb.isDigit(this.charCodeAt(r)) || this.error("Integer is expected", r);
}
function Dn(e) {
  return yo.call(this, 0, e);
}
function ir(e, t) {
  if (!this.cmpChar(this.tokenStart + e, t)) {
    let r = "";
    switch (t) {
      case bo:
        r = "N is expected";
        break;
      case Je:
        r = "HyphenMinus is expected";
        break;
    }
    this.error(r, this.tokenStart + e);
  }
}
function Sl() {
  let e = 0, t = 0, r = this.tokenType;
  for (; r === De.WhiteSpace || r === De.Comment; )
    r = this.lookupType(++e);
  if (r !== De.Number)
    if (this.isDelim(Bt, e) || this.isDelim(Je, e)) {
      t = this.isDelim(Bt, e) ? Bt : Je;
      do
        r = this.lookupType(++e);
      while (r === De.WhiteSpace || r === De.Comment);
      r !== De.Number && (this.skip(e), Dn.call(this, Er));
    } else
      return null;
  return e > 0 && this.skip(e), t === 0 && (r = this.charCodeAt(this.tokenStart), r !== Bt && r !== Je && this.error("Number sign is expected")), Dn.call(this, t !== 0), t === Je ? "-" + this.consume(De.Number) : this.consume(De.Number);
}
const o3 = "AnPlusB", u3 = {
  a: [String, null],
  b: [String, null]
};
function l3() {
  const e = this.tokenStart;
  let t = null, r = null;
  if (this.tokenType === De.Number)
    Dn.call(this, s3), r = this.consume(De.Number);
  else if (this.tokenType === De.Ident && this.cmpChar(this.tokenStart, Je))
    switch (t = "-1", ir.call(this, 1, bo), this.tokenEnd - this.tokenStart) {
      case 2:
        this.next(), r = Sl.call(this);
        break;
      case 3:
        ir.call(this, 2, Je), this.next(), this.skipSC(), Dn.call(this, Er), r = "-" + this.consume(De.Number);
        break;
      default:
        ir.call(this, 2, Je), yo.call(this, 3, Er), this.next(), r = this.substrToCursor(e + 2);
    }
  else if (this.tokenType === De.Ident || this.isDelim(Bt) && this.lookupType(1) === De.Ident) {
    let n = 0;
    switch (t = "1", this.isDelim(Bt) && (n = 1, this.next()), ir.call(this, 0, bo), this.tokenEnd - this.tokenStart) {
      case 1:
        this.next(), r = Sl.call(this);
        break;
      case 2:
        ir.call(this, 1, Je), this.next(), this.skipSC(), Dn.call(this, Er), r = "-" + this.consume(De.Number);
        break;
      default:
        ir.call(this, 1, Je), yo.call(this, 2, Er), this.next(), r = this.substrToCursor(e + n + 1);
    }
  } else if (this.tokenType === De.Dimension) {
    const n = this.charCodeAt(this.tokenStart), a = n === Bt || n === Je;
    let i = this.tokenStart + a;
    for (; i < this.tokenEnd && lb.isDigit(this.charCodeAt(i)); i++)
      ;
    i === this.tokenStart + a && this.error("Integer is expected", this.tokenStart + a), ir.call(this, i - this.tokenStart, bo), t = this.substring(e, i), i + 1 === this.tokenEnd ? (this.next(), r = Sl.call(this)) : (ir.call(this, i - this.tokenStart + 1, Je), i + 2 === this.tokenEnd ? (this.next(), this.skipSC(), Dn.call(this, Er), r = "-" + this.consume(De.Number)) : (yo.call(this, i - this.tokenStart + 2, Er), this.next(), r = this.substrToCursor(i + 1)));
  } else
    this.error();
  return t !== null && t.charCodeAt(0) === Bt && (t = t.substr(1)), r !== null && r.charCodeAt(0) === Bt && (r = r.substr(1)), {
    type: "AnPlusB",
    loc: this.getLocation(e, this.tokenStart),
    a: t,
    b: r
  };
}
function c3(e) {
  if (e.a) {
    const t = e.a === "+1" && "n" || e.a === "1" && "n" || e.a === "-1" && "-n" || e.a + "n";
    if (e.b) {
      const r = e.b[0] === "-" || e.b[0] === "+" ? e.b : "+" + e.b;
      this.tokenize(t + r);
    } else
      this.tokenize(t);
  } else
    this.tokenize(e.b);
}
Yn.generate = c3;
Yn.name = o3;
Yn.parse = l3;
Yn.structure = u3;
var jr = {};
const qt = R;
function O0(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracketOrSemicolon, !0);
}
function f3() {
  for (let e = 1, t; t = this.lookupType(e); e++) {
    if (t === qt.RightCurlyBracket)
      return !0;
    if (t === qt.LeftCurlyBracket || t === qt.AtKeyword)
      return !1;
  }
  return !1;
}
const d3 = "Atrule", h3 = "atrule", p3 = {
  name: String,
  prelude: ["AtrulePrelude", "Raw", null],
  block: ["Block", null]
};
function m3(e = !1) {
  const t = this.tokenStart;
  let r, n, a = null, i = null;
  switch (this.eat(qt.AtKeyword), r = this.substrToCursor(t + 1), n = r.toLowerCase(), this.skipSC(), this.eof === !1 && this.tokenType !== qt.LeftCurlyBracket && this.tokenType !== qt.Semicolon && (this.parseAtrulePrelude ? a = this.parseWithFallback(this.AtrulePrelude.bind(this, r, e), O0) : a = O0.call(this, this.tokenIndex), this.skipSC()), this.tokenType) {
    case qt.Semicolon:
      this.next();
      break;
    case qt.LeftCurlyBracket:
      hasOwnProperty.call(this.atrule, n) && typeof this.atrule[n].block == "function" ? i = this.atrule[n].block.call(this, e) : i = this.Block(f3.call(this));
      break;
  }
  return {
    type: "Atrule",
    loc: this.getLocation(t, this.tokenStart),
    name: r,
    prelude: a,
    block: i
  };
}
function g3(e) {
  this.token(qt.AtKeyword, "@" + e.name), e.prelude !== null && this.node(e.prelude), e.block ? this.node(e.block) : this.token(qt.Semicolon, ";");
}
jr.generate = g3;
jr.name = d3;
jr.parse = m3;
jr.structure = p3;
jr.walkContext = h3;
var zr = {};
const M0 = R, b3 = "AtrulePrelude", y3 = "atrulePrelude", v3 = {
  children: [[]]
};
function x3(e) {
  let t = null;
  return e !== null && (e = e.toLowerCase()), this.skipSC(), hasOwnProperty.call(this.atrule, e) && typeof this.atrule[e].prelude == "function" ? t = this.atrule[e].prelude.call(this) : t = this.readSequence(this.scope.AtrulePrelude), this.skipSC(), this.eof !== !0 && this.tokenType !== M0.LeftCurlyBracket && this.tokenType !== M0.Semicolon && this.error("Semicolon or block is expected"), {
    type: "AtrulePrelude",
    loc: this.getLocationFromList(t),
    children: t
  };
}
function k3(e) {
  this.children(e);
}
zr.generate = k3;
zr.name = b3;
zr.parse = x3;
zr.structure = v3;
zr.walkContext = y3;
var Kn = {};
const pt = R, w3 = 36, cb = 42, vo = 61, S3 = 94, Ec = 124, C3 = 126;
function $3() {
  this.eof && this.error("Unexpected end of input");
  const e = this.tokenStart;
  let t = !1;
  return this.isDelim(cb) ? (t = !0, this.next()) : this.isDelim(Ec) || this.eat(pt.Ident), this.isDelim(Ec) ? this.charCodeAt(this.tokenStart + 1) !== vo ? (this.next(), this.eat(pt.Ident)) : t && this.error("Identifier is expected", this.tokenEnd) : t && this.error("Vertical line is expected"), {
    type: "Identifier",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e)
  };
}
function A3() {
  const e = this.tokenStart, t = this.charCodeAt(e);
  return t !== vo && // =
  t !== C3 && // ~=
  t !== S3 && // ^=
  t !== w3 && // $=
  t !== cb && // *=
  t !== Ec && this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"), this.next(), t !== vo && (this.isDelim(vo) || this.error("Equal sign is expected"), this.next()), this.substrToCursor(e);
}
const E3 = "AttributeSelector", T3 = {
  name: "Identifier",
  matcher: [String, null],
  value: ["String", "Identifier", null],
  flags: [String, null]
};
function P3() {
  const e = this.tokenStart;
  let t, r = null, n = null, a = null;
  return this.eat(pt.LeftSquareBracket), this.skipSC(), t = $3.call(this), this.skipSC(), this.tokenType !== pt.RightSquareBracket && (this.tokenType !== pt.Ident && (r = A3.call(this), this.skipSC(), n = this.tokenType === pt.String ? this.String() : this.Identifier(), this.skipSC()), this.tokenType === pt.Ident && (a = this.consume(pt.Ident), this.skipSC())), this.eat(pt.RightSquareBracket), {
    type: "AttributeSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: t,
    matcher: r,
    value: n,
    flags: a
  };
}
function L3(e) {
  this.token(pt.Delim, "["), this.node(e.name), e.matcher !== null && (this.tokenize(e.matcher), this.node(e.value)), e.flags !== null && this.token(pt.Ident, e.flags), this.token(pt.Delim, "]");
}
Kn.generate = L3;
Kn.name = E3;
Kn.parse = P3;
Kn.structure = T3;
var Gr = {};
const At = R, N3 = 38;
function fb(e) {
  return this.Raw(e, null, !0);
}
function I0() {
  return this.parseWithFallback(this.Rule, fb);
}
function R0(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
function D3() {
  if (this.tokenType === At.Semicolon)
    return R0.call(this, this.tokenIndex);
  const e = this.parseWithFallback(this.Declaration, R0);
  return this.tokenType === At.Semicolon && this.next(), e;
}
const O3 = "Block", M3 = "block", I3 = {
  children: [[
    "Atrule",
    "Rule",
    "Declaration"
  ]]
};
function R3(e) {
  const t = e ? D3 : I0, r = this.tokenStart;
  let n = this.createList();
  this.eat(At.LeftCurlyBracket);
  e:
    for (; !this.eof; )
      switch (this.tokenType) {
        case At.RightCurlyBracket:
          break e;
        case At.WhiteSpace:
        case At.Comment:
          this.next();
          break;
        case At.AtKeyword:
          n.push(this.parseWithFallback(this.Atrule.bind(this, e), fb));
          break;
        default:
          e && this.isDelim(N3) ? n.push(I0.call(this)) : n.push(t.call(this));
      }
  return this.eof || this.eat(At.RightCurlyBracket), {
    type: "Block",
    loc: this.getLocation(r, this.tokenStart),
    children: n
  };
}
function _3(e) {
  this.token(At.LeftCurlyBracket, "{"), this.children(e, (t) => {
    t.type === "Declaration" && this.token(At.Semicolon, ";");
  }), this.token(At.RightCurlyBracket, "}");
}
Gr.generate = _3;
Gr.name = O3;
Gr.parse = R3;
Gr.structure = I3;
Gr.walkContext = M3;
var Qn = {};
const jo = R, F3 = "Brackets", B3 = {
  children: [[]]
};
function q3(e, t) {
  const r = this.tokenStart;
  let n = null;
  return this.eat(jo.LeftSquareBracket), n = e.call(this, t), this.eof || this.eat(jo.RightSquareBracket), {
    type: "Brackets",
    loc: this.getLocation(r, this.tokenStart),
    children: n
  };
}
function U3(e) {
  this.token(jo.Delim, "["), this.children(e), this.token(jo.Delim, "]");
}
Qn.generate = U3;
Qn.name = F3;
Qn.parse = q3;
Qn.structure = B3;
var Zn = {};
const db = R, j3 = "CDC", z3 = [];
function G3() {
  const e = this.tokenStart;
  return this.eat(db.CDC), {
    type: "CDC",
    loc: this.getLocation(e, this.tokenStart)
  };
}
function H3() {
  this.token(db.CDC, "-->");
}
Zn.generate = H3;
Zn.name = j3;
Zn.parse = G3;
Zn.structure = z3;
var Jn = {};
const hb = R, V3 = "CDO", W3 = [];
function X3() {
  const e = this.tokenStart;
  return this.eat(hb.CDO), {
    type: "CDO",
    loc: this.getLocation(e, this.tokenStart)
  };
}
function Y3() {
  this.token(hb.CDO, "<!--");
}
Jn.generate = Y3;
Jn.name = V3;
Jn.parse = X3;
Jn.structure = W3;
var ea = {};
const Tc = R, K3 = 46, Q3 = "ClassSelector", Z3 = {
  name: String
};
function J3() {
  return this.eatDelim(K3), {
    type: "ClassSelector",
    loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
    name: this.consume(Tc.Ident)
  };
}
function eC(e) {
  this.token(Tc.Delim, "."), this.token(Tc.Ident, e.name);
}
ea.generate = eC;
ea.name = Q3;
ea.parse = J3;
ea.structure = Z3;
var ta = {};
const _0 = R, tC = 43, F0 = 47, rC = 62, nC = 126, aC = "Combinator", iC = {
  name: String
};
function sC() {
  const e = this.tokenStart;
  let t;
  switch (this.tokenType) {
    case _0.WhiteSpace:
      t = " ";
      break;
    case _0.Delim:
      switch (this.charCodeAt(this.tokenStart)) {
        case rC:
        case tC:
        case nC:
          this.next();
          break;
        case F0:
          this.next(), this.eatIdent("deep"), this.eatDelim(F0);
          break;
        default:
          this.error("Combinator is expected");
      }
      t = this.substrToCursor(e);
      break;
  }
  return {
    type: "Combinator",
    loc: this.getLocation(e, this.tokenStart),
    name: t
  };
}
function oC(e) {
  this.tokenize(e.name);
}
ta.generate = oC;
ta.name = aC;
ta.parse = sC;
ta.structure = iC;
var ra = {};
const pb = R, uC = 42, lC = 47, cC = "Comment", fC = {
  value: String
};
function dC() {
  const e = this.tokenStart;
  let t = this.tokenEnd;
  return this.eat(pb.Comment), t - e + 2 >= 2 && this.charCodeAt(t - 2) === uC && this.charCodeAt(t - 1) === lC && (t -= 2), {
    type: "Comment",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substring(e + 2, t)
  };
}
function hC(e) {
  this.token(pb.Comment, "/*" + e.value + "*/");
}
ra.generate = hC;
ra.name = cC;
ra.parse = dC;
ra.structure = fC;
var Hr = {};
const pC = Ur, Xe = R, mb = 33, mC = 35, gC = 36, bC = 38, yC = 42, vC = 43, B0 = 47;
function xC(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !0);
}
function kC(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !1);
}
function wC() {
  const e = this.tokenIndex, t = this.Value();
  return t.type !== "Raw" && this.eof === !1 && this.tokenType !== Xe.Semicolon && this.isDelim(mb) === !1 && this.isBalanceEdge(e) === !1 && this.error(), t;
}
const SC = "Declaration", CC = "declaration", $C = {
  important: [Boolean, String],
  property: String,
  value: ["Value", "Raw"]
};
function AC() {
  const e = this.tokenStart, t = this.tokenIndex, r = TC.call(this), n = pC.isCustomProperty(r), a = n ? this.parseCustomProperty : this.parseValue, i = n ? kC : xC;
  let s = !1, u;
  this.skipSC(), this.eat(Xe.Colon);
  const l = this.tokenIndex;
  if (n || this.skipSC(), a ? u = this.parseWithFallback(wC, i) : u = i.call(this, this.tokenIndex), n && u.type === "Value" && u.children.isEmpty) {
    for (let o = l - this.tokenIndex; o <= 0; o++)
      if (this.lookupType(o) === Xe.WhiteSpace) {
        u.children.appendData({
          type: "WhiteSpace",
          loc: null,
          value: " "
        });
        break;
      }
  }
  return this.isDelim(mb) && (s = PC.call(this), this.skipSC()), this.eof === !1 && this.tokenType !== Xe.Semicolon && this.isBalanceEdge(t) === !1 && this.error(), {
    type: "Declaration",
    loc: this.getLocation(e, this.tokenStart),
    important: s,
    property: r,
    value: u
  };
}
function EC(e) {
  this.token(Xe.Ident, e.property), this.token(Xe.Colon, ":"), this.node(e.value), e.important && (this.token(Xe.Delim, "!"), this.token(Xe.Ident, e.important === !0 ? "important" : e.important));
}
function TC() {
  const e = this.tokenStart;
  if (this.tokenType === Xe.Delim)
    switch (this.charCodeAt(this.tokenStart)) {
      case yC:
      case gC:
      case vC:
      case mC:
      case bC:
        this.next();
        break;
      case B0:
        this.next(), this.isDelim(B0) && this.next();
        break;
    }
  return this.tokenType === Xe.Hash ? this.eat(Xe.Hash) : this.eat(Xe.Ident), this.substrToCursor(e);
}
function PC() {
  this.eat(Xe.Delim), this.skipSC();
  const e = this.consume(Xe.Ident);
  return e === "important" ? !0 : e;
}
Hr.generate = EC;
Hr.name = SC;
Hr.parse = AC;
Hr.structure = $C;
Hr.walkContext = CC;
var na = {};
const Di = R, LC = 38;
function Cl(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
const NC = "DeclarationList", DC = {
  children: [[
    "Declaration",
    "Atrule",
    "Rule"
  ]]
};
function OC() {
  const e = this.createList();
  for (; !this.eof; )
    switch (this.tokenType) {
      case Di.WhiteSpace:
      case Di.Comment:
      case Di.Semicolon:
        this.next();
        break;
      case Di.AtKeyword:
        e.push(this.parseWithFallback(this.Atrule.bind(this, !0), Cl));
        break;
      default:
        this.isDelim(LC) ? e.push(this.parseWithFallback(this.Rule, Cl)) : e.push(this.parseWithFallback(this.Declaration, Cl));
    }
  return {
    type: "DeclarationList",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function MC(e) {
  this.children(e, (t) => {
    t.type === "Declaration" && this.token(Di.Semicolon, ";");
  });
}
na.generate = MC;
na.name = NC;
na.parse = OC;
na.structure = DC;
var aa = {};
const gb = R, IC = "Dimension", RC = {
  value: String,
  unit: String
};
function _C() {
  const e = this.tokenStart, t = this.consumeNumber(gb.Dimension);
  return {
    type: "Dimension",
    loc: this.getLocation(e, this.tokenStart),
    value: t,
    unit: this.substring(e + t.length, this.tokenStart)
  };
}
function FC(e) {
  this.token(gb.Dimension, e.value + e.unit);
}
aa.generate = FC;
aa.name = IC;
aa.parse = _C;
aa.structure = RC;
var Vr = {};
const Pc = R, BC = "Function", qC = "function", UC = {
  name: String,
  children: [[]]
};
function jC(e, t) {
  const r = this.tokenStart, n = this.consumeFunctionName(), a = n.toLowerCase();
  let i;
  return i = t.hasOwnProperty(a) ? t[a].call(this, t) : e.call(this, t), this.eof || this.eat(Pc.RightParenthesis), {
    type: "Function",
    loc: this.getLocation(r, this.tokenStart),
    name: n,
    children: i
  };
}
function zC(e) {
  this.token(Pc.Function, e.name + "("), this.children(e), this.token(Pc.RightParenthesis, ")");
}
Vr.generate = zC;
Vr.name = BC;
Vr.parse = jC;
Vr.structure = UC;
Vr.walkContext = qC;
var Wr = {};
const bb = R, GC = "XXX", HC = "Hash", VC = {
  value: String
};
function WC() {
  const e = this.tokenStart;
  return this.eat(bb.Hash), {
    type: "Hash",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e + 1)
  };
}
function XC(e) {
  this.token(bb.Hash, "#" + e.value);
}
Wr.generate = XC;
Wr.name = HC;
Wr.parse = WC;
Wr.structure = VC;
Wr.xxx = GC;
var ia = {};
const yb = R, YC = "Identifier", KC = {
  name: String
};
function QC() {
  return {
    type: "Identifier",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    name: this.consume(yb.Ident)
  };
}
function ZC(e) {
  this.token(yb.Ident, e.name);
}
ia.generate = ZC;
ia.name = YC;
ia.parse = QC;
ia.structure = KC;
var sa = {};
const vb = R, JC = "IdSelector", e6 = {
  name: String
};
function t6() {
  const e = this.tokenStart;
  return this.eat(vb.Hash), {
    type: "IdSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e + 1)
  };
}
function r6(e) {
  this.token(vb.Delim, "#" + e.name);
}
sa.generate = r6;
sa.name = JC;
sa.parse = t6;
sa.structure = e6;
var oa = {};
const Qe = R, n6 = "MediaFeature", a6 = {
  name: String,
  value: ["Identifier", "Number", "Dimension", "Ratio", null]
};
function i6() {
  const e = this.tokenStart;
  let t, r = null;
  if (this.eat(Qe.LeftParenthesis), this.skipSC(), t = this.consume(Qe.Ident), this.skipSC(), this.tokenType !== Qe.RightParenthesis) {
    switch (this.eat(Qe.Colon), this.skipSC(), this.tokenType) {
      case Qe.Number:
        this.lookupNonWSType(1) === Qe.Delim ? r = this.Ratio() : r = this.Number();
        break;
      case Qe.Dimension:
        r = this.Dimension();
        break;
      case Qe.Ident:
        r = this.Identifier();
        break;
      default:
        this.error("Number, dimension, ratio or identifier is expected");
    }
    this.skipSC();
  }
  return this.eat(Qe.RightParenthesis), {
    type: "MediaFeature",
    loc: this.getLocation(e, this.tokenStart),
    name: t,
    value: r
  };
}
function s6(e) {
  this.token(Qe.LeftParenthesis, "("), this.token(Qe.Ident, e.name), e.value !== null && (this.token(Qe.Colon, ":"), this.node(e.value)), this.token(Qe.RightParenthesis, ")");
}
oa.generate = s6;
oa.name = n6;
oa.parse = i6;
oa.structure = a6;
var ua = {};
const eo = R, o6 = "MediaQuery", u6 = {
  children: [[
    "Identifier",
    "MediaFeature",
    "WhiteSpace"
  ]]
};
function l6() {
  const e = this.createList();
  let t = null;
  this.skipSC();
  e:
    for (; !this.eof; ) {
      switch (this.tokenType) {
        case eo.Comment:
        case eo.WhiteSpace:
          this.next();
          continue;
        case eo.Ident:
          t = this.Identifier();
          break;
        case eo.LeftParenthesis:
          t = this.MediaFeature();
          break;
        default:
          break e;
      }
      e.push(t);
    }
  return t === null && this.error("Identifier or parenthesis is expected"), {
    type: "MediaQuery",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function c6(e) {
  this.children(e);
}
ua.generate = c6;
ua.name = o6;
ua.parse = l6;
ua.structure = u6;
var la = {};
const xb = R, f6 = "MediaQueryList", d6 = {
  children: [[
    "MediaQuery"
  ]]
};
function h6() {
  const e = this.createList();
  for (this.skipSC(); !this.eof && (e.push(this.MediaQuery()), this.tokenType === xb.Comma); )
    this.next();
  return {
    type: "MediaQueryList",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function p6(e) {
  this.children(e, () => this.token(xb.Comma, ","));
}
la.generate = p6;
la.name = f6;
la.parse = h6;
la.structure = d6;
var ca = {};
const m6 = R, g6 = 38, b6 = "NestingSelector", y6 = {};
function v6() {
  const e = this.tokenStart;
  return this.eatDelim(g6), {
    type: "NestingSelector",
    loc: this.getLocation(e, this.tokenStart)
  };
}
function x6() {
  this.token(m6.Delim, "&");
}
ca.generate = x6;
ca.name = b6;
ca.parse = v6;
ca.structure = y6;
var fa = {};
const k6 = R, w6 = "Nth", S6 = {
  nth: ["AnPlusB", "Identifier"],
  selector: ["SelectorList", null]
};
function C6() {
  this.skipSC();
  const e = this.tokenStart;
  let t = e, r = null, n;
  return this.lookupValue(0, "odd") || this.lookupValue(0, "even") ? n = this.Identifier() : n = this.AnPlusB(), t = this.tokenStart, this.skipSC(), this.lookupValue(0, "of") && (this.next(), r = this.SelectorList(), t = this.tokenStart), {
    type: "Nth",
    loc: this.getLocation(e, t),
    nth: n,
    selector: r
  };
}
function $6(e) {
  this.node(e.nth), e.selector !== null && (this.token(k6.Ident, "of"), this.node(e.selector));
}
fa.generate = $6;
fa.name = w6;
fa.parse = C6;
fa.structure = S6;
var da = {};
const kb = R, A6 = "Number", E6 = {
  value: String
};
function T6() {
  return {
    type: "Number",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: this.consume(kb.Number)
  };
}
function P6(e) {
  this.token(kb.Number, e.value);
}
da.generate = P6;
da.name = A6;
da.parse = T6;
da.structure = E6;
var ha = {};
const L6 = "Operator", N6 = {
  value: String
};
function D6() {
  const e = this.tokenStart;
  return this.next(), {
    type: "Operator",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e)
  };
}
function O6(e) {
  this.tokenize(e.value);
}
ha.generate = O6;
ha.name = L6;
ha.parse = D6;
ha.structure = N6;
var pa = {};
const zo = R, M6 = "Parentheses", I6 = {
  children: [[]]
};
function R6(e, t) {
  const r = this.tokenStart;
  let n = null;
  return this.eat(zo.LeftParenthesis), n = e.call(this, t), this.eof || this.eat(zo.RightParenthesis), {
    type: "Parentheses",
    loc: this.getLocation(r, this.tokenStart),
    children: n
  };
}
function _6(e) {
  this.token(zo.LeftParenthesis, "("), this.children(e), this.token(zo.RightParenthesis, ")");
}
pa.generate = _6;
pa.name = M6;
pa.parse = R6;
pa.structure = I6;
var ma = {};
const wb = R, F6 = "Percentage", B6 = {
  value: String
};
function q6() {
  return {
    type: "Percentage",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: this.consumeNumber(wb.Percentage)
  };
}
function U6(e) {
  this.token(wb.Percentage, e.value + "%");
}
ma.generate = U6;
ma.name = F6;
ma.parse = q6;
ma.structure = B6;
var Xr = {};
const pr = R, j6 = "PseudoClassSelector", z6 = "function", G6 = {
  name: String,
  children: [["Raw"], null]
};
function H6() {
  const e = this.tokenStart;
  let t = null, r, n;
  return this.eat(pr.Colon), this.tokenType === pr.Function ? (r = this.consumeFunctionName(), n = r.toLowerCase(), hasOwnProperty.call(this.pseudo, n) ? (this.skipSC(), t = this.pseudo[n].call(this), this.skipSC()) : (t = this.createList(), t.push(
    this.Raw(this.tokenIndex, null, !1)
  )), this.eat(pr.RightParenthesis)) : r = this.consume(pr.Ident), {
    type: "PseudoClassSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: r,
    children: t
  };
}
function V6(e) {
  this.token(pr.Colon, ":"), e.children === null ? this.token(pr.Ident, e.name) : (this.token(pr.Function, e.name + "("), this.children(e), this.token(pr.RightParenthesis, ")"));
}
Xr.generate = V6;
Xr.name = j6;
Xr.parse = H6;
Xr.structure = G6;
Xr.walkContext = z6;
var Yr = {};
const Ut = R, W6 = "PseudoElementSelector", X6 = "function", Y6 = {
  name: String,
  children: [["Raw"], null]
};
function K6() {
  const e = this.tokenStart;
  let t = null, r, n;
  return this.eat(Ut.Colon), this.eat(Ut.Colon), this.tokenType === Ut.Function ? (r = this.consumeFunctionName(), n = r.toLowerCase(), hasOwnProperty.call(this.pseudo, n) ? (this.skipSC(), t = this.pseudo[n].call(this), this.skipSC()) : (t = this.createList(), t.push(
    this.Raw(this.tokenIndex, null, !1)
  )), this.eat(Ut.RightParenthesis)) : r = this.consume(Ut.Ident), {
    type: "PseudoElementSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: r,
    children: t
  };
}
function Q6(e) {
  this.token(Ut.Colon, ":"), this.token(Ut.Colon, ":"), e.children === null ? this.token(Ut.Ident, e.name) : (this.token(Ut.Function, e.name + "("), this.children(e), this.token(Ut.RightParenthesis, ")"));
}
Yr.generate = Q6;
Yr.name = W6;
Yr.parse = K6;
Yr.structure = Y6;
Yr.walkContext = X6;
var ga = {};
const xo = R, Z6 = ie, J6 = 47, e$ = 46;
function q0() {
  this.skipSC();
  const e = this.consume(xo.Number);
  for (let t = 0; t < e.length; t++) {
    const r = e.charCodeAt(t);
    !Z6.isDigit(r) && r !== e$ && this.error("Unsigned number is expected", this.tokenStart - e.length + t);
  }
  return Number(e) === 0 && this.error("Zero number is not allowed", this.tokenStart - e.length), e;
}
const t$ = "Ratio", r$ = {
  left: String,
  right: String
};
function n$() {
  const e = this.tokenStart, t = q0.call(this);
  let r;
  return this.skipSC(), this.eatDelim(J6), r = q0.call(this), {
    type: "Ratio",
    loc: this.getLocation(e, this.tokenStart),
    left: t,
    right: r
  };
}
function a$(e) {
  this.token(xo.Number, e.left), this.token(xo.Delim, "/"), this.token(xo.Number, e.right);
}
ga.generate = a$;
ga.name = t$;
ga.parse = n$;
ga.structure = r$;
var ba = {};
const i$ = R;
function s$() {
  return this.tokenIndex > 0 && this.lookupType(-1) === i$.WhiteSpace ? this.tokenIndex > 1 ? this.getTokenStart(this.tokenIndex - 1) : this.firstCharOffset : this.tokenStart;
}
const o$ = "Raw", u$ = {
  value: String
};
function l$(e, t, r) {
  const n = this.getTokenStart(e);
  let a;
  return this.skipUntilBalanced(e, t || this.consumeUntilBalanceEnd), r && this.tokenStart > n ? a = s$.call(this) : a = this.tokenStart, {
    type: "Raw",
    loc: this.getLocation(n, a),
    value: this.substring(n, a)
  };
}
function c$(e) {
  this.tokenize(e.value);
}
ba.generate = c$;
ba.name = o$;
ba.parse = l$;
ba.structure = u$;
var Kr = {};
const f$ = R;
function U0(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracket, !0);
}
function d$() {
  const e = this.SelectorList();
  return e.type !== "Raw" && this.eof === !1 && this.tokenType !== f$.LeftCurlyBracket && this.error(), e;
}
const h$ = "Rule", p$ = "rule", m$ = {
  prelude: ["SelectorList", "Raw"],
  block: ["Block"]
};
function g$() {
  const e = this.tokenIndex, t = this.tokenStart;
  let r, n;
  return this.parseRulePrelude ? r = this.parseWithFallback(d$, U0) : r = U0.call(this, e), n = this.Block(!0), {
    type: "Rule",
    loc: this.getLocation(t, this.tokenStart),
    prelude: r,
    block: n
  };
}
function b$(e) {
  this.node(e.prelude), this.node(e.block);
}
Kr.generate = b$;
Kr.name = h$;
Kr.parse = g$;
Kr.structure = m$;
Kr.walkContext = p$;
var ya = {};
const y$ = "Selector", v$ = {
  children: [[
    "TypeSelector",
    "IdSelector",
    "ClassSelector",
    "AttributeSelector",
    "PseudoClassSelector",
    "PseudoElementSelector",
    "Combinator",
    "WhiteSpace"
  ]]
};
function x$() {
  const e = this.readSequence(this.scope.Selector);
  return this.getFirstListNode(e) === null && this.error("Selector is expected"), {
    type: "Selector",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function k$(e) {
  this.children(e);
}
ya.generate = k$;
ya.name = y$;
ya.parse = x$;
ya.structure = v$;
var Qr = {};
const Sb = R, w$ = "SelectorList", S$ = "selector", C$ = {
  children: [[
    "Selector",
    "Raw"
  ]]
};
function $$() {
  const e = this.createList();
  for (; !this.eof; ) {
    if (e.push(this.Selector()), this.tokenType === Sb.Comma) {
      this.next();
      continue;
    }
    break;
  }
  return {
    type: "SelectorList",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function A$(e) {
  this.children(e, () => this.token(Sb.Comma, ","));
}
Qr.generate = A$;
Qr.name = w$;
Qr.parse = $$;
Qr.structure = C$;
Qr.walkContext = S$;
var va = {}, ms = {};
const Lc = ie, j0 = Ce, Nc = 92, Cb = 34, $b = 39;
function E$(e) {
  const t = e.length, r = e.charCodeAt(0), n = r === Cb || r === $b ? 1 : 0, a = n === 1 && t > 1 && e.charCodeAt(t - 1) === r ? t - 2 : t - 1;
  let i = "";
  for (let s = n; s <= a; s++) {
    let u = e.charCodeAt(s);
    if (u === Nc) {
      if (s === a) {
        s !== t - 1 && (i = e.substr(s + 1));
        break;
      }
      if (u = e.charCodeAt(++s), Lc.isValidEscape(Nc, u)) {
        const l = s - 1, o = j0.consumeEscaped(e, l);
        s = o - 1, i += j0.decodeEscaped(e.substring(l + 1, o));
      } else
        u === 13 && e.charCodeAt(s + 1) === 10 && s++;
    } else
      i += e[s];
  }
  return i;
}
function T$(e, t) {
  const r = t ? "'" : '"', n = t ? $b : Cb;
  let a = "", i = !1;
  for (let s = 0; s < e.length; s++) {
    const u = e.charCodeAt(s);
    if (u === 0) {
      a += "�";
      continue;
    }
    if (u <= 31 || u === 127) {
      a += "\\" + u.toString(16), i = !0;
      continue;
    }
    u === n || u === Nc ? (a += "\\" + e.charAt(s), i = !1) : (i && (Lc.isHexDigit(u) || Lc.isWhiteSpace(u)) && (a += " "), a += e.charAt(s), i = !1);
  }
  return r + a + r;
}
ms.decode = E$;
ms.encode = T$;
const Ab = ms, Eb = R, P$ = "String", L$ = {
  value: String
};
function N$() {
  return {
    type: "String",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: Ab.decode(this.consume(Eb.String))
  };
}
function D$(e) {
  this.token(Eb.String, Ab.encode(e.value));
}
va.generate = D$;
va.name = P$;
va.parse = N$;
va.structure = L$;
var Zr = {};
const fi = R, O$ = 33;
function z0(e) {
  return this.Raw(e, null, !1);
}
const M$ = "StyleSheet", I$ = "stylesheet", R$ = {
  children: [[
    "Comment",
    "CDO",
    "CDC",
    "Atrule",
    "Rule",
    "Raw"
  ]]
};
function _$() {
  const e = this.tokenStart, t = this.createList();
  let r;
  for (; !this.eof; ) {
    switch (this.tokenType) {
      case fi.WhiteSpace:
        this.next();
        continue;
      case fi.Comment:
        if (this.charCodeAt(this.tokenStart + 2) !== O$) {
          this.next();
          continue;
        }
        r = this.Comment();
        break;
      case fi.CDO:
        r = this.CDO();
        break;
      case fi.CDC:
        r = this.CDC();
        break;
      case fi.AtKeyword:
        r = this.parseWithFallback(this.Atrule, z0);
        break;
      default:
        r = this.parseWithFallback(this.Rule, z0);
    }
    t.push(r);
  }
  return {
    type: "StyleSheet",
    loc: this.getLocation(e, this.tokenStart),
    children: t
  };
}
function F$(e) {
  this.children(e);
}
Zr.generate = F$;
Zr.name = M$;
Zr.parse = _$;
Zr.structure = R$;
Zr.walkContext = I$;
var xa = {};
const B$ = R, q$ = 42, G0 = 124;
function $l() {
  this.tokenType !== B$.Ident && this.isDelim(q$) === !1 && this.error("Identifier or asterisk is expected"), this.next();
}
const U$ = "TypeSelector", j$ = {
  name: String
};
function z$() {
  const e = this.tokenStart;
  return this.isDelim(G0) ? (this.next(), $l.call(this)) : ($l.call(this), this.isDelim(G0) && (this.next(), $l.call(this))), {
    type: "TypeSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e)
  };
}
function G$(e) {
  this.tokenize(e.name);
}
xa.generate = G$;
xa.name = U$;
xa.parse = z$;
xa.structure = j$;
var ka = {};
const di = R, H$ = ie, Tb = 43, Pb = 45, Dc = 63;
function Oi(e, t) {
  let r = 0;
  for (let n = this.tokenStart + e; n < this.tokenEnd; n++) {
    const a = this.charCodeAt(n);
    if (a === Pb && t && r !== 0)
      return Oi.call(this, e + r + 1, !1), -1;
    H$.isHexDigit(a) || this.error(
      t && r !== 0 ? "Hyphen minus" + (r < 6 ? " or hex digit" : "") + " is expected" : r < 6 ? "Hex digit is expected" : "Unexpected input",
      n
    ), ++r > 6 && this.error("Too many hex digits", n);
  }
  return this.next(), r;
}
function to(e) {
  let t = 0;
  for (; this.isDelim(Dc); )
    ++t > e && this.error("Too many question marks"), this.next();
}
function V$(e) {
  this.charCodeAt(this.tokenStart) !== e && this.error((e === Tb ? "Plus sign" : "Hyphen minus") + " is expected");
}
function W$() {
  let e = 0;
  switch (this.tokenType) {
    case di.Number:
      if (e = Oi.call(this, 1, !0), this.isDelim(Dc)) {
        to.call(this, 6 - e);
        break;
      }
      if (this.tokenType === di.Dimension || this.tokenType === di.Number) {
        V$.call(this, Pb), Oi.call(this, 1, !1);
        break;
      }
      break;
    case di.Dimension:
      e = Oi.call(this, 1, !0), e > 0 && to.call(this, 6 - e);
      break;
    default:
      if (this.eatDelim(Tb), this.tokenType === di.Ident) {
        e = Oi.call(this, 0, !0), e > 0 && to.call(this, 6 - e);
        break;
      }
      if (this.isDelim(Dc)) {
        this.next(), to.call(this, 5);
        break;
      }
      this.error("Hex digit or question mark is expected");
  }
}
const X$ = "UnicodeRange", Y$ = {
  value: String
};
function K$() {
  const e = this.tokenStart;
  return this.eatIdent("u"), W$.call(this), {
    type: "UnicodeRange",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e)
  };
}
function Q$(e) {
  this.tokenize(e.value);
}
ka.generate = Q$;
ka.name = X$;
ka.parse = K$;
ka.structure = Y$;
var wa = {}, wu = {};
const ko = ie, H0 = Ce, Z$ = 32, Oc = 92, J$ = 34, e4 = 39, t4 = 40, Lb = 41;
function r4(e) {
  const t = e.length;
  let r = 4, n = e.charCodeAt(t - 1) === Lb ? t - 2 : t - 1, a = "";
  for (; r < n && ko.isWhiteSpace(e.charCodeAt(r)); )
    r++;
  for (; r < n && ko.isWhiteSpace(e.charCodeAt(n)); )
    n--;
  for (let i = r; i <= n; i++) {
    let s = e.charCodeAt(i);
    if (s === Oc) {
      if (i === n) {
        i !== t - 1 && (a = e.substr(i + 1));
        break;
      }
      if (s = e.charCodeAt(++i), ko.isValidEscape(Oc, s)) {
        const u = i - 1, l = H0.consumeEscaped(e, u);
        i = l - 1, a += H0.decodeEscaped(e.substring(u + 1, l));
      } else
        s === 13 && e.charCodeAt(i + 1) === 10 && i++;
    } else
      a += e[i];
  }
  return a;
}
function n4(e) {
  let t = "", r = !1;
  for (let n = 0; n < e.length; n++) {
    const a = e.charCodeAt(n);
    if (a === 0) {
      t += "�";
      continue;
    }
    if (a <= 31 || a === 127) {
      t += "\\" + a.toString(16), r = !0;
      continue;
    }
    a === Z$ || a === Oc || a === J$ || a === e4 || a === t4 || a === Lb ? (t += "\\" + e.charAt(n), r = !1) : (r && ko.isHexDigit(a) && (t += " "), t += e.charAt(n), r = !1);
  }
  return "url(" + t + ")";
}
wu.decode = r4;
wu.encode = n4;
const Nb = wu, a4 = ms, Tr = R, i4 = "Url", s4 = {
  value: String
};
function o4() {
  const e = this.tokenStart;
  let t;
  switch (this.tokenType) {
    case Tr.Url:
      t = Nb.decode(this.consume(Tr.Url));
      break;
    case Tr.Function:
      this.cmpStr(this.tokenStart, this.tokenEnd, "url(") || this.error("Function name must be `url`"), this.eat(Tr.Function), this.skipSC(), t = a4.decode(this.consume(Tr.String)), this.skipSC(), this.eof || this.eat(Tr.RightParenthesis);
      break;
    default:
      this.error("Url or Function is expected");
  }
  return {
    type: "Url",
    loc: this.getLocation(e, this.tokenStart),
    value: t
  };
}
function u4(e) {
  this.token(Tr.Url, Nb.encode(e.value));
}
wa.generate = u4;
wa.name = i4;
wa.parse = o4;
wa.structure = s4;
var Sa = {};
const l4 = "Value", c4 = {
  children: [[]]
};
function f4() {
  const e = this.tokenStart, t = this.readSequence(this.scope.Value);
  return {
    type: "Value",
    loc: this.getLocation(e, this.tokenStart),
    children: t
  };
}
function d4(e) {
  this.children(e);
}
Sa.generate = d4;
Sa.name = l4;
Sa.parse = f4;
Sa.structure = c4;
var Ca = {};
const Db = R, h4 = Object.freeze({
  type: "WhiteSpace",
  loc: null,
  value: " "
}), p4 = "WhiteSpace", m4 = {
  value: String
};
function g4() {
  return this.eat(Db.WhiteSpace), h4;
}
function b4(e) {
  this.token(Db.WhiteSpace, e.value);
}
Ca.generate = b4;
Ca.name = p4;
Ca.parse = g4;
Ca.structure = m4;
const y4 = Yn, v4 = jr, x4 = zr, k4 = Kn, w4 = Gr, S4 = Qn, C4 = Zn, $4 = Jn, A4 = ea, E4 = ta, T4 = ra, P4 = Hr, L4 = na, N4 = aa, D4 = Vr, O4 = Wr, M4 = ia, I4 = sa, R4 = oa, _4 = ua, F4 = la, B4 = ca, q4 = fa, U4 = da, j4 = ha, z4 = pa, G4 = ma, H4 = Xr, V4 = Yr, W4 = ga, X4 = ba, Y4 = Kr, K4 = ya, Q4 = Qr, Z4 = va, J4 = Zr, e8 = xa, t8 = ka, r8 = wa, n8 = Sa, a8 = Ca;
K.AnPlusB = y4;
K.Atrule = v4;
K.AtrulePrelude = x4;
K.AttributeSelector = k4;
K.Block = w4;
K.Brackets = S4;
K.CDC = C4;
K.CDO = $4;
K.ClassSelector = A4;
K.Combinator = E4;
K.Comment = T4;
K.Declaration = P4;
K.DeclarationList = L4;
K.Dimension = N4;
K.Function = D4;
K.Hash = O4;
K.Identifier = M4;
K.IdSelector = I4;
K.MediaFeature = R4;
K.MediaQuery = _4;
K.MediaQueryList = F4;
K.NestingSelector = B4;
K.Nth = q4;
K.Number = U4;
K.Operator = j4;
K.Parentheses = z4;
K.Percentage = G4;
K.PseudoClassSelector = H4;
K.PseudoElementSelector = V4;
K.Ratio = W4;
K.Raw = X4;
K.Rule = Y4;
K.Selector = K4;
K.SelectorList = Q4;
K.String = Z4;
K.StyleSheet = J4;
K.TypeSelector = e8;
K.UnicodeRange = t8;
K.Url = r8;
K.Value = n8;
K.WhiteSpace = a8;
const i8 = i3, s8 = K, o8 = {
  generic: !0,
  ...i8,
  node: s8
};
var u8 = o8, Su = {};
const ut = R, l8 = 35, c8 = 42, V0 = 43, f8 = 45, d8 = 47, h8 = 117;
function p8(e) {
  switch (this.tokenType) {
    case ut.Hash:
      return this.Hash();
    case ut.Comma:
      return this.Operator();
    case ut.LeftParenthesis:
      return this.Parentheses(this.readSequence, e.recognizer);
    case ut.LeftSquareBracket:
      return this.Brackets(this.readSequence, e.recognizer);
    case ut.String:
      return this.String();
    case ut.Dimension:
      return this.Dimension();
    case ut.Percentage:
      return this.Percentage();
    case ut.Number:
      return this.Number();
    case ut.Function:
      return this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e.recognizer);
    case ut.Url:
      return this.Url();
    case ut.Ident:
      return this.cmpChar(this.tokenStart, h8) && this.cmpChar(this.tokenStart + 1, V0) ? this.UnicodeRange() : this.Identifier();
    case ut.Delim: {
      const t = this.charCodeAt(this.tokenStart);
      if (t === d8 || t === c8 || t === V0 || t === f8)
        return this.Operator();
      t === l8 && this.error("Hex or identifier is expected", this.tokenStart + 1);
      break;
    }
  }
}
var Ob = p8;
const m8 = Ob, g8 = {
  getNode: m8
};
var b8 = g8;
const Kt = R, y8 = 35, v8 = 38, x8 = 42, k8 = 43, w8 = 47, W0 = 46, S8 = 62, C8 = 124, $8 = 126;
function A8(e, t) {
  t.last !== null && t.last.type !== "Combinator" && e !== null && e.type !== "Combinator" && t.push({
    // FIXME: this.Combinator() should be used instead
    type: "Combinator",
    loc: null,
    name: " "
  });
}
function E8() {
  switch (this.tokenType) {
    case Kt.LeftSquareBracket:
      return this.AttributeSelector();
    case Kt.Hash:
      return this.IdSelector();
    case Kt.Colon:
      return this.lookupType(1) === Kt.Colon ? this.PseudoElementSelector() : this.PseudoClassSelector();
    case Kt.Ident:
      return this.TypeSelector();
    case Kt.Number:
    case Kt.Percentage:
      return this.Percentage();
    case Kt.Dimension:
      this.charCodeAt(this.tokenStart) === W0 && this.error("Identifier is expected", this.tokenStart + 1);
      break;
    case Kt.Delim: {
      switch (this.charCodeAt(this.tokenStart)) {
        case k8:
        case S8:
        case $8:
        case w8:
          return this.Combinator();
        case W0:
          return this.ClassSelector();
        case x8:
        case C8:
          return this.TypeSelector();
        case y8:
          return this.IdSelector();
        case v8:
          return this.NestingSelector();
      }
      break;
    }
  }
}
const T8 = {
  onWhiteSpace: A8,
  getNode: E8
};
var P8 = T8;
function L8() {
  return this.createSingleNodeList(
    this.Raw(this.tokenIndex, null, !1)
  );
}
var N8 = L8;
const X0 = R;
function D8() {
  const e = this.createList();
  if (this.skipSC(), e.push(this.Identifier()), this.skipSC(), this.tokenType === X0.Comma) {
    e.push(this.Operator());
    const t = this.tokenIndex, r = this.parseCustomProperty ? this.Value(null) : this.Raw(this.tokenIndex, this.consumeUntilExclamationMarkOrSemicolon, !1);
    if (r.type === "Value" && r.children.isEmpty) {
      for (let n = t - this.tokenIndex; n <= 0; n++)
        if (this.lookupType(n) === X0.WhiteSpace) {
          r.children.appendData({
            type: "WhiteSpace",
            loc: null,
            value: " "
          });
          break;
        }
    }
    e.push(r);
  }
  return e;
}
var O8 = D8;
const M8 = Ob, I8 = N8, R8 = O8;
function Y0(e) {
  return e !== null && e.type === "Operator" && (e.value[e.value.length - 1] === "-" || e.value[e.value.length - 1] === "+");
}
const _8 = {
  getNode: M8,
  onWhiteSpace(e, t) {
    Y0(e) && (e.value = " " + e.value), Y0(t.last) && (t.last.value += " ");
  },
  expression: I8,
  var: R8
};
var F8 = _8;
const B8 = b8, q8 = P8, U8 = F8;
Su.AtrulePrelude = B8;
Su.Selector = q8;
Su.Value = U8;
const j8 = {
  parse: {
    prelude: null,
    block() {
      return this.Block(!0);
    }
  }
};
var z8 = j8;
const hi = R, G8 = {
  parse: {
    prelude() {
      const e = this.createList();
      switch (this.skipSC(), this.tokenType) {
        case hi.String:
          e.push(this.String());
          break;
        case hi.Url:
        case hi.Function:
          e.push(this.Url());
          break;
        default:
          this.error("String or url() is expected");
      }
      return (this.lookupNonWSType(0) === hi.Ident || this.lookupNonWSType(0) === hi.LeftParenthesis) && e.push(this.MediaQueryList()), e;
    },
    block: null
  }
};
var H8 = G8;
const V8 = {
  parse: {
    prelude() {
      return this.createSingleNodeList(
        this.MediaQueryList()
      );
    },
    block(e = !1) {
      return this.Block(e);
    }
  }
};
var W8 = V8;
const X8 = {
  parse: {
    prelude() {
      return this.createSingleNodeList(
        this.SelectorList()
      );
    },
    block() {
      return this.Block(!0);
    }
  }
};
var Y8 = X8;
const K8 = {
  parse: {
    prelude() {
      return this.createSingleNodeList(
        this.SelectorList()
      );
    },
    block() {
      return this.Block(!0);
    }
  }
};
var Q8 = K8;
const Or = R;
function Z8() {
  return this.createSingleNodeList(
    this.Raw(this.tokenIndex, null, !1)
  );
}
function J8() {
  return this.skipSC(), this.tokenType === Or.Ident && this.lookupNonWSType(1) === Or.Colon ? this.createSingleNodeList(
    this.Declaration()
  ) : Mb.call(this);
}
function Mb() {
  const e = this.createList();
  let t;
  this.skipSC();
  e:
    for (; !this.eof; ) {
      switch (this.tokenType) {
        case Or.Comment:
        case Or.WhiteSpace:
          this.next();
          continue;
        case Or.Function:
          t = this.Function(Z8, this.scope.AtrulePrelude);
          break;
        case Or.Ident:
          t = this.Identifier();
          break;
        case Or.LeftParenthesis:
          t = this.Parentheses(J8, this.scope.AtrulePrelude);
          break;
        default:
          break e;
      }
      e.push(t);
    }
  return e;
}
const eA = {
  parse: {
    prelude() {
      const e = Mb.call(this);
      return this.getFirstListNode(e) === null && this.error("Condition is expected"), e;
    },
    block(e = !1) {
      return this.Block(e);
    }
  }
};
var tA = eA;
const rA = z8, nA = H8, aA = W8, iA = Y8, sA = Q8, oA = tA, uA = {
  "font-face": rA,
  import: nA,
  media: aA,
  nest: iA,
  page: sA,
  supports: oA
};
var lA = uA;
const wr = {
  parse() {
    return this.createSingleNodeList(
      this.SelectorList()
    );
  }
}, Al = {
  parse() {
    return this.createSingleNodeList(
      this.Selector()
    );
  }
}, K0 = {
  parse() {
    return this.createSingleNodeList(
      this.Identifier()
    );
  }
}, ro = {
  parse() {
    return this.createSingleNodeList(
      this.Nth()
    );
  }
}, cA = {
  dir: K0,
  has: wr,
  lang: K0,
  matches: wr,
  is: wr,
  "-moz-any": wr,
  "-webkit-any": wr,
  where: wr,
  not: wr,
  "nth-child": ro,
  "nth-last-child": ro,
  "nth-last-of-type": ro,
  "nth-of-type": ro,
  slotted: Al,
  host: Al,
  "host-context": Al
};
var fA = cA, Q = {};
const dA = Yn, hA = jr, pA = zr, mA = Kn, gA = Gr, bA = Qn, yA = Zn, vA = Jn, xA = ea, kA = ta, wA = ra, SA = Hr, CA = na, $A = aa, AA = Vr, EA = Wr, TA = ia, PA = sa, LA = oa, NA = ua, DA = la, OA = ca, MA = fa, IA = da, RA = ha, _A = pa, FA = ma, BA = Xr, qA = Yr, UA = ga, jA = ba, zA = Kr, GA = ya, HA = Qr, VA = va, WA = Zr, XA = xa, YA = ka, KA = wa, QA = Sa, ZA = Ca;
Q.AnPlusB = dA.parse;
Q.Atrule = hA.parse;
Q.AtrulePrelude = pA.parse;
Q.AttributeSelector = mA.parse;
Q.Block = gA.parse;
Q.Brackets = bA.parse;
Q.CDC = yA.parse;
Q.CDO = vA.parse;
Q.ClassSelector = xA.parse;
Q.Combinator = kA.parse;
Q.Comment = wA.parse;
Q.Declaration = SA.parse;
Q.DeclarationList = CA.parse;
Q.Dimension = $A.parse;
Q.Function = AA.parse;
Q.Hash = EA.parse;
Q.Identifier = TA.parse;
Q.IdSelector = PA.parse;
Q.MediaFeature = LA.parse;
Q.MediaQuery = NA.parse;
Q.MediaQueryList = DA.parse;
Q.NestingSelector = OA.parse;
Q.Nth = MA.parse;
Q.Number = IA.parse;
Q.Operator = RA.parse;
Q.Parentheses = _A.parse;
Q.Percentage = FA.parse;
Q.PseudoClassSelector = BA.parse;
Q.PseudoElementSelector = qA.parse;
Q.Ratio = UA.parse;
Q.Raw = jA.parse;
Q.Rule = zA.parse;
Q.Selector = GA.parse;
Q.SelectorList = HA.parse;
Q.String = VA.parse;
Q.StyleSheet = WA.parse;
Q.TypeSelector = XA.parse;
Q.UnicodeRange = YA.parse;
Q.Url = KA.parse;
Q.Value = QA.parse;
Q.WhiteSpace = ZA.parse;
const JA = Su, eE = lA, tE = fA, rE = Q, nE = {
  parseContext: {
    default: "StyleSheet",
    stylesheet: "StyleSheet",
    atrule: "Atrule",
    atrulePrelude(e) {
      return this.AtrulePrelude(e.atrule ? String(e.atrule) : null);
    },
    mediaQueryList: "MediaQueryList",
    mediaQuery: "MediaQuery",
    rule: "Rule",
    selectorList: "SelectorList",
    selector: "Selector",
    block() {
      return this.Block(!0);
    },
    declarationList: "DeclarationList",
    declaration: "Declaration",
    value: "Value"
  },
  scope: JA,
  atrule: eE,
  pseudo: tE,
  node: rE
};
var aE = nE;
const iE = K, sE = {
  node: iE
};
var oE = sE;
const uE = ub, lE = u8, cE = aE, fE = oE, dE = uE({
  ...lE,
  ...cE,
  ...fE
});
var hE = dE, pE = "2.3.1", gs = {};
const mE = Bf, gE = bu, bE = xu, yE = Kf;
gs.SyntaxError = mE.SyntaxError;
gs.generate = gE.generate;
gs.parse = bE.parse;
gs.walk = yE.walk;
var Ib = {};
const vE = qr;
function Mc(e) {
  const t = {};
  for (const r in e) {
    let n = e[r];
    n && (Array.isArray(n) || n instanceof vE.List ? n = n.map(Mc) : n.constructor === Object && (n = Mc(n))), t[r] = n;
  }
  return t;
}
Ib.clone = Mc;
var Qf = {};
const Rb = ie, Q0 = Ce, Z0 = 92;
function xE(e) {
  const t = e.length - 1;
  let r = "";
  for (let n = 0; n < e.length; n++) {
    let a = e.charCodeAt(n);
    if (a === Z0) {
      if (n === t)
        break;
      if (a = e.charCodeAt(++n), Rb.isValidEscape(Z0, a)) {
        const i = n - 1, s = Q0.consumeEscaped(e, i);
        n = s - 1, r += Q0.decodeEscaped(e.substring(i + 1, s));
      } else
        a === 13 && e.charCodeAt(n + 1) === 10 && n++;
    } else
      r += e[n];
  }
  return r;
}
function kE(e) {
  let t = "";
  if (e.length === 1 && e.charCodeAt(0) === 45)
    return "\\-";
  for (let r = 0; r < e.length; r++) {
    const n = e.charCodeAt(r);
    if (n === 0) {
      t += "�";
      continue;
    }
    if (
      // If the character is in the range [\1-\1f] (U+0001 to U+001F) or is U+007F ...
      // Note: Do not compare with 0x0001 since 0x0000 is precessed before
      n <= 31 || n === 127 || // [or] ... is in the range [0-9] (U+0030 to U+0039),
      n >= 48 && n <= 57 && // If the character is the first character ...
      (r === 0 || // If the character is the second character ... and the first character is a "-" (U+002D)
      r === 1 && e.charCodeAt(0) === 45)
    ) {
      t += "\\" + n.toString(16) + " ";
      continue;
    }
    Rb.isName(n) ? t += e.charAt(r) : t += "\\" + e.charAt(r);
  }
  return t;
}
Qf.decode = xE;
Qf.encode = kE;
const wE = hE, SE = pE, CE = ub, $E = qr, AE = Nf, EE = gs, TE = Ib, Cu = Ur, PE = Qf, LE = ms, NE = wu, DE = R, OE = du, ME = hu, {
  tokenize: IE,
  parse: RE,
  generate: _E,
  lexer: FE,
  createLexer: BE,
  walk: qE,
  find: UE,
  findLast: jE,
  findAll: zE,
  toPlainObject: GE,
  fromPlainObject: HE,
  fork: VE
} = wE;
oe.version = SE.version;
oe.createSyntax = CE;
oe.List = $E.List;
oe.Lexer = AE.Lexer;
oe.definitionSyntax = EE;
oe.clone = TE.clone;
oe.isCustomProperty = Cu.isCustomProperty;
oe.keyword = Cu.keyword;
oe.property = Cu.property;
oe.vendorPrefix = Cu.vendorPrefix;
oe.ident = PE;
oe.string = LE;
oe.url = NE;
oe.tokenTypes = DE;
oe.tokenNames = OE;
oe.TokenStream = ME.TokenStream;
oe.createLexer = BE;
oe.find = UE;
oe.findAll = zE;
oe.findLast = jE;
oe.fork = VE;
oe.fromPlainObject = HE;
oe.generate = _E;
oe.lexer = FE;
oe.parse = RE;
oe.toPlainObject = GE;
oe.tokenize = IE;
oe.walk = qE;
var vr = {}, WE = "5.0.5", it = {}, W = {}, j = {}, _ = {};
const XE = 0, YE = 1, KE = 2, QE = 3, ZE = 4, JE = 5, eT = 6, tT = 7, rT = 8, nT = 9, aT = 10, iT = 11, sT = 12, oT = 13, uT = 14, lT = 15, cT = 16, fT = 17, dT = 18, hT = 19, pT = 20, mT = 21, gT = 22, bT = 23, yT = 24, vT = 25;
_.AtKeyword = QE;
_.BadString = eT;
_.BadUrl = rT;
_.CDC = lT;
_.CDO = uT;
_.Colon = cT;
_.Comma = dT;
_.Comment = vT;
_.Delim = nT;
_.Dimension = sT;
_.EOF = XE;
_.Function = KE;
_.Hash = ZE;
_.Ident = YE;
_.LeftCurlyBracket = bT;
_.LeftParenthesis = mT;
_.LeftSquareBracket = hT;
_.Number = aT;
_.Percentage = iT;
_.RightCurlyBracket = yT;
_.RightParenthesis = gT;
_.RightSquareBracket = pT;
_.Semicolon = fT;
_.String = JE;
_.Url = tT;
_.WhiteSpace = oT;
var se = {};
const xT = 0;
function mr(e) {
  return e >= 48 && e <= 57;
}
function kT(e) {
  return mr(e) || // 0 .. 9
  e >= 65 && e <= 70 || // A .. F
  e >= 97 && e <= 102;
}
function _b(e) {
  return e >= 65 && e <= 90;
}
function Fb(e) {
  return e >= 97 && e <= 122;
}
function Bb(e) {
  return _b(e) || Fb(e);
}
function qb(e) {
  return e >= 128;
}
function Yi(e) {
  return Bb(e) || qb(e) || e === 95;
}
function wT(e) {
  return Yi(e) || mr(e) || e === 45;
}
function Ub(e) {
  return e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e === 127;
}
function Zf(e) {
  return e === 10 || e === 13 || e === 12;
}
function jb(e) {
  return Zf(e) || e === 32 || e === 9;
}
function Ic(e, t) {
  return !(e !== 92 || Zf(t) || t === xT);
}
function ST(e, t, r) {
  return e === 45 ? Yi(t) || t === 45 || Ic(t, r) : Yi(e) ? !0 : e === 92 ? Ic(e, t) : !1;
}
function CT(e, t, r) {
  return e === 43 || e === 45 ? mr(t) ? 2 : t === 46 && mr(r) ? 3 : 0 : e === 46 ? mr(t) ? 2 : 0 : mr(e) ? 1 : 0;
}
function $T(e) {
  return e === 65279 || e === 65534 ? 1 : 0;
}
const Rc = new Array(128), zb = 128, Gb = 130, Hb = 131, Jf = 132, Vb = 133;
for (let e = 0; e < Rc.length; e++)
  Rc[e] = jb(e) && Gb || mr(e) && Hb || Yi(e) && Jf || Ub(e) && Vb || e || zb;
function AT(e) {
  return e < 128 ? Rc[e] : Jf;
}
se.DigitCategory = Hb;
se.EofCategory = zb;
se.NameStartCategory = Jf;
se.NonPrintableCategory = Vb;
se.WhiteSpaceCategory = Gb;
se.charCodeCategory = AT;
se.isBOM = $T;
se.isDigit = mr;
se.isHexDigit = kT;
se.isIdentifierStart = ST;
se.isLetter = Bb;
se.isLowercaseLetter = Fb;
se.isName = wT;
se.isNameStart = Yi;
se.isNewline = Zf;
se.isNonAscii = qb;
se.isNonPrintable = Ub;
se.isNumberStart = CT;
se.isUppercaseLetter = _b;
se.isValidEscape = Ic;
se.isWhiteSpace = jb;
var $e = {};
const je = se;
function Rn(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function Wb(e, t, r) {
  return r === 13 && Rn(e, t + 1) === 10 ? 2 : 1;
}
function Xb(e, t, r) {
  let n = e.charCodeAt(t);
  return je.isUppercaseLetter(n) && (n = n | 32), n === r;
}
function ET(e, t, r, n) {
  if (r - t !== n.length || t < 0 || r > e.length)
    return !1;
  for (let a = t; a < r; a++) {
    const i = n.charCodeAt(a - t);
    let s = e.charCodeAt(a);
    if (je.isUppercaseLetter(s) && (s = s | 32), s !== i)
      return !1;
  }
  return !0;
}
function TT(e, t) {
  for (; t >= 0 && je.isWhiteSpace(e.charCodeAt(t)); t--)
    ;
  return t + 1;
}
function PT(e, t) {
  for (; t < e.length && je.isWhiteSpace(e.charCodeAt(t)); t++)
    ;
  return t;
}
function wo(e, t) {
  for (; t < e.length && je.isDigit(e.charCodeAt(t)); t++)
    ;
  return t;
}
function ed(e, t) {
  if (t += 2, je.isHexDigit(Rn(e, t - 1))) {
    for (const n = Math.min(e.length, t + 5); t < n && je.isHexDigit(Rn(e, t)); t++)
      ;
    const r = Rn(e, t);
    je.isWhiteSpace(r) && (t += Wb(e, t, r));
  }
  return t;
}
function LT(e, t) {
  for (; t < e.length; t++) {
    const r = e.charCodeAt(t);
    if (!je.isName(r)) {
      if (je.isValidEscape(r, Rn(e, t + 1))) {
        t = ed(e, t) - 1;
        continue;
      }
      break;
    }
  }
  return t;
}
function NT(e, t) {
  let r = e.charCodeAt(t);
  if ((r === 43 || r === 45) && (r = e.charCodeAt(t += 1)), je.isDigit(r) && (t = wo(e, t + 1), r = e.charCodeAt(t)), r === 46 && je.isDigit(e.charCodeAt(t + 1)) && (t += 2, t = wo(e, t)), Xb(
    e,
    t,
    101
    /* e */
  )) {
    let n = 0;
    r = e.charCodeAt(t + 1), (r === 45 || r === 43) && (n = 1, r = e.charCodeAt(t + 2)), je.isDigit(r) && (t = wo(e, t + 1 + n + 1));
  }
  return t;
}
function DT(e, t) {
  for (; t < e.length; t++) {
    const r = e.charCodeAt(t);
    if (r === 41) {
      t++;
      break;
    }
    je.isValidEscape(r, Rn(e, t + 1)) && (t = ed(e, t));
  }
  return t;
}
function OT(e) {
  if (e.length === 1 && !je.isHexDigit(e.charCodeAt(0)))
    return e[0];
  let t = parseInt(e, 16);
  return (t === 0 || // If this number is zero,
  t >= 55296 && t <= 57343 || // or is for a surrogate,
  t > 1114111) && (t = 65533), String.fromCodePoint(t);
}
$e.cmpChar = Xb;
$e.cmpStr = ET;
$e.consumeBadUrlRemnants = DT;
$e.consumeEscaped = ed;
$e.consumeName = LT;
$e.consumeNumber = NT;
$e.decodeEscaped = OT;
$e.findDecimalNumberEnd = wo;
$e.findWhiteSpaceEnd = PT;
$e.findWhiteSpaceStart = TT;
$e.getNewlineLength = Wb;
const MT = [
  "EOF-token",
  "ident-token",
  "function-token",
  "at-keyword-token",
  "hash-token",
  "string-token",
  "bad-string-token",
  "url-token",
  "bad-url-token",
  "delim-token",
  "number-token",
  "percentage-token",
  "dimension-token",
  "whitespace-token",
  "CDO-token",
  "CDC-token",
  "colon-token",
  "semicolon-token",
  "comma-token",
  "[-token",
  "]-token",
  "(-token",
  ")-token",
  "{-token",
  "}-token"
];
var $u = MT, td = {}, rd = {};
const IT = 16 * 1024;
function RT(e = null, t) {
  return e === null || e.length < t ? new Uint32Array(Math.max(t + 1024, IT)) : e;
}
rd.adoptBuffer = RT;
const J0 = rd, _T = se, eh = 10, FT = 12, th = 13;
function rh(e) {
  const t = e.source, r = t.length, n = t.length > 0 ? _T.isBOM(t.charCodeAt(0)) : 0, a = J0.adoptBuffer(e.lines, r), i = J0.adoptBuffer(e.columns, r);
  let s = e.startLine, u = e.startColumn;
  for (let l = n; l < r; l++) {
    const o = t.charCodeAt(l);
    a[l] = s, i[l] = u++, (o === eh || o === th || o === FT) && (o === th && l + 1 < r && t.charCodeAt(l + 1) === eh && (l++, a[l] = s, i[l] = u), s++, u = 1);
  }
  a[r] = s, i[r] = u, e.lines = a, e.columns = i, e.computed = !0;
}
let BT = class {
  constructor() {
    this.lines = null, this.columns = null, this.computed = !1;
  }
  setSource(t, r = 0, n = 1, a = 1) {
    this.source = t, this.startOffset = r, this.startLine = n, this.startColumn = a, this.computed = !1;
  }
  getLocation(t, r) {
    return this.computed || rh(this), {
      source: r,
      offset: this.startOffset + t,
      line: this.lines[t],
      column: this.columns[t]
    };
  }
  getLocationRange(t, r, n) {
    return this.computed || rh(this), {
      source: n,
      start: {
        offset: this.startOffset + t,
        line: this.lines[t],
        column: this.columns[t]
      },
      end: {
        offset: this.startOffset + r,
        line: this.lines[r],
        column: this.columns[r]
      }
    };
  }
};
td.OffsetToLocation = BT;
var Au = {};
const nh = rd, qT = $e, UT = $u, Te = _, lt = 16777215, sr = 24, jT = /* @__PURE__ */ new Map([
  [Te.Function, Te.RightParenthesis],
  [Te.LeftParenthesis, Te.RightParenthesis],
  [Te.LeftSquareBracket, Te.RightSquareBracket],
  [Te.LeftCurlyBracket, Te.RightCurlyBracket]
]);
let zT = class {
  constructor(t, r) {
    this.setSource(t, r);
  }
  reset() {
    this.eof = !1, this.tokenIndex = -1, this.tokenType = 0, this.tokenStart = this.firstCharOffset, this.tokenEnd = this.firstCharOffset;
  }
  setSource(t = "", r = () => {
  }) {
    t = String(t || "");
    const n = t.length, a = nh.adoptBuffer(this.offsetAndType, t.length + 1), i = nh.adoptBuffer(this.balance, t.length + 1);
    let s = 0, u = 0, l = 0, o = -1;
    for (this.offsetAndType = null, this.balance = null, r(t, (c, f, d) => {
      switch (c) {
        default:
          i[s] = n;
          break;
        case u: {
          let h = l & lt;
          for (l = i[h], u = l >> sr, i[s] = h, i[h++] = s; h < s; h++)
            i[h] === n && (i[h] = s);
          break;
        }
        case Te.LeftParenthesis:
        case Te.Function:
        case Te.LeftSquareBracket:
        case Te.LeftCurlyBracket:
          i[s] = l, u = jT.get(c), l = u << sr | s;
          break;
      }
      a[s++] = c << sr | d, o === -1 && (o = f);
    }), a[s] = Te.EOF << sr | n, i[s] = n, i[n] = n; l !== 0; ) {
      const c = l & lt;
      l = i[c], i[c] = n;
    }
    this.source = t, this.firstCharOffset = o === -1 ? 0 : o, this.tokenCount = s, this.offsetAndType = a, this.balance = i, this.reset(), this.next();
  }
  lookupType(t) {
    return t += this.tokenIndex, t < this.tokenCount ? this.offsetAndType[t] >> sr : Te.EOF;
  }
  lookupOffset(t) {
    return t += this.tokenIndex, t < this.tokenCount ? this.offsetAndType[t - 1] & lt : this.source.length;
  }
  lookupValue(t, r) {
    return t += this.tokenIndex, t < this.tokenCount ? qT.cmpStr(
      this.source,
      this.offsetAndType[t - 1] & lt,
      this.offsetAndType[t] & lt,
      r
    ) : !1;
  }
  getTokenStart(t) {
    return t === this.tokenIndex ? this.tokenStart : t > 0 ? t < this.tokenCount ? this.offsetAndType[t - 1] & lt : this.offsetAndType[this.tokenCount] & lt : this.firstCharOffset;
  }
  substrToCursor(t) {
    return this.source.substring(t, this.tokenStart);
  }
  isBalanceEdge(t) {
    return this.balance[this.tokenIndex] < t;
  }
  isDelim(t, r) {
    return r ? this.lookupType(r) === Te.Delim && this.source.charCodeAt(this.lookupOffset(r)) === t : this.tokenType === Te.Delim && this.source.charCodeAt(this.tokenStart) === t;
  }
  skip(t) {
    let r = this.tokenIndex + t;
    r < this.tokenCount ? (this.tokenIndex = r, this.tokenStart = this.offsetAndType[r - 1] & lt, r = this.offsetAndType[r], this.tokenType = r >> sr, this.tokenEnd = r & lt) : (this.tokenIndex = this.tokenCount, this.next());
  }
  next() {
    let t = this.tokenIndex + 1;
    t < this.tokenCount ? (this.tokenIndex = t, this.tokenStart = this.tokenEnd, t = this.offsetAndType[t], this.tokenType = t >> sr, this.tokenEnd = t & lt) : (this.eof = !0, this.tokenIndex = this.tokenCount, this.tokenType = Te.EOF, this.tokenStart = this.tokenEnd = this.source.length);
  }
  skipSC() {
    for (; this.tokenType === Te.WhiteSpace || this.tokenType === Te.Comment; )
      this.next();
  }
  skipUntilBalanced(t, r) {
    let n = t, a, i;
    e:
      for (; n < this.tokenCount; n++) {
        if (a = this.balance[n], a < t)
          break e;
        switch (i = n > 0 ? this.offsetAndType[n - 1] & lt : this.firstCharOffset, r(this.source.charCodeAt(i))) {
          case 1:
            break e;
          case 2:
            n++;
            break e;
          default:
            this.balance[a] === n && (n = a);
        }
      }
    this.skip(n - this.tokenIndex);
  }
  forEachToken(t) {
    for (let r = 0, n = this.firstCharOffset; r < this.tokenCount; r++) {
      const a = n, i = this.offsetAndType[r], s = i & lt, u = i >> sr;
      n = s, t(u, a, s, r);
    }
  }
  dump() {
    const t = new Array(this.tokenCount);
    return this.forEachToken((r, n, a, i) => {
      t[i] = {
        idx: i,
        type: UT[r],
        chunk: this.source.substring(n, a),
        balance: this.balance[i]
      };
    }), t;
  }
};
Au.TokenStream = zT;
const G = _, Y = se, le = $e, GT = $u, HT = td, VT = Au;
function WT(e, t) {
  function r(f) {
    return f < u ? e.charCodeAt(f) : 0;
  }
  function n() {
    if (o = le.consumeNumber(e, o), Y.isIdentifierStart(r(o), r(o + 1), r(o + 2))) {
      c = G.Dimension, o = le.consumeName(e, o);
      return;
    }
    if (r(o) === 37) {
      c = G.Percentage, o++;
      return;
    }
    c = G.Number;
  }
  function a() {
    const f = o;
    if (o = le.consumeName(e, o), le.cmpStr(e, f, o, "url") && r(o) === 40) {
      if (o = le.findWhiteSpaceEnd(e, o + 1), r(o) === 34 || r(o) === 39) {
        c = G.Function, o = f + 4;
        return;
      }
      s();
      return;
    }
    if (r(o) === 40) {
      c = G.Function, o++;
      return;
    }
    c = G.Ident;
  }
  function i(f) {
    for (f || (f = r(o++)), c = G.String; o < e.length; o++) {
      const d = e.charCodeAt(o);
      switch (Y.charCodeCategory(d)) {
        case f:
          o++;
          return;
        case Y.WhiteSpaceCategory:
          if (Y.isNewline(d)) {
            o += le.getNewlineLength(e, o, d), c = G.BadString;
            return;
          }
          break;
        case 92:
          if (o === e.length - 1)
            break;
          const h = r(o + 1);
          Y.isNewline(h) ? o += le.getNewlineLength(e, o + 1, h) : Y.isValidEscape(d, h) && (o = le.consumeEscaped(e, o) - 1);
          break;
      }
    }
  }
  function s() {
    for (c = G.Url, o = le.findWhiteSpaceEnd(e, o); o < e.length; o++) {
      const f = e.charCodeAt(o);
      switch (Y.charCodeCategory(f)) {
        case 41:
          o++;
          return;
        case Y.WhiteSpaceCategory:
          if (o = le.findWhiteSpaceEnd(e, o), r(o) === 41 || o >= e.length) {
            o < e.length && o++;
            return;
          }
          o = le.consumeBadUrlRemnants(e, o), c = G.BadUrl;
          return;
        case 34:
        case 39:
        case 40:
        case Y.NonPrintableCategory:
          o = le.consumeBadUrlRemnants(e, o), c = G.BadUrl;
          return;
        case 92:
          if (Y.isValidEscape(f, r(o + 1))) {
            o = le.consumeEscaped(e, o) - 1;
            break;
          }
          o = le.consumeBadUrlRemnants(e, o), c = G.BadUrl;
          return;
      }
    }
  }
  e = String(e || "");
  const u = e.length;
  let l = Y.isBOM(r(0)), o = l, c;
  for (; o < u; ) {
    const f = e.charCodeAt(o);
    switch (Y.charCodeCategory(f)) {
      case Y.WhiteSpaceCategory:
        c = G.WhiteSpace, o = le.findWhiteSpaceEnd(e, o + 1);
        break;
      case 34:
        i();
        break;
      case 35:
        Y.isName(r(o + 1)) || Y.isValidEscape(r(o + 1), r(o + 2)) ? (c = G.Hash, o = le.consumeName(e, o + 1)) : (c = G.Delim, o++);
        break;
      case 39:
        i();
        break;
      case 40:
        c = G.LeftParenthesis, o++;
        break;
      case 41:
        c = G.RightParenthesis, o++;
        break;
      case 43:
        Y.isNumberStart(f, r(o + 1), r(o + 2)) ? n() : (c = G.Delim, o++);
        break;
      case 44:
        c = G.Comma, o++;
        break;
      case 45:
        Y.isNumberStart(f, r(o + 1), r(o + 2)) ? n() : r(o + 1) === 45 && r(o + 2) === 62 ? (c = G.CDC, o = o + 3) : Y.isIdentifierStart(f, r(o + 1), r(o + 2)) ? a() : (c = G.Delim, o++);
        break;
      case 46:
        Y.isNumberStart(f, r(o + 1), r(o + 2)) ? n() : (c = G.Delim, o++);
        break;
      case 47:
        r(o + 1) === 42 ? (c = G.Comment, o = e.indexOf("*/", o + 2), o = o === -1 ? e.length : o + 2) : (c = G.Delim, o++);
        break;
      case 58:
        c = G.Colon, o++;
        break;
      case 59:
        c = G.Semicolon, o++;
        break;
      case 60:
        r(o + 1) === 33 && r(o + 2) === 45 && r(o + 3) === 45 ? (c = G.CDO, o = o + 4) : (c = G.Delim, o++);
        break;
      case 64:
        Y.isIdentifierStart(r(o + 1), r(o + 2), r(o + 3)) ? (c = G.AtKeyword, o = le.consumeName(e, o + 1)) : (c = G.Delim, o++);
        break;
      case 91:
        c = G.LeftSquareBracket, o++;
        break;
      case 92:
        Y.isValidEscape(f, r(o + 1)) ? a() : (c = G.Delim, o++);
        break;
      case 93:
        c = G.RightSquareBracket, o++;
        break;
      case 123:
        c = G.LeftCurlyBracket, o++;
        break;
      case 125:
        c = G.RightCurlyBracket, o++;
        break;
      case Y.DigitCategory:
        n();
        break;
      case Y.NameStartCategory:
        a();
        break;
      default:
        c = G.Delim, o++;
    }
    t(c, l, l = o);
  }
}
j.AtKeyword = G.AtKeyword;
j.BadString = G.BadString;
j.BadUrl = G.BadUrl;
j.CDC = G.CDC;
j.CDO = G.CDO;
j.Colon = G.Colon;
j.Comma = G.Comma;
j.Comment = G.Comment;
j.Delim = G.Delim;
j.Dimension = G.Dimension;
j.EOF = G.EOF;
j.Function = G.Function;
j.Hash = G.Hash;
j.Ident = G.Ident;
j.LeftCurlyBracket = G.LeftCurlyBracket;
j.LeftParenthesis = G.LeftParenthesis;
j.LeftSquareBracket = G.LeftSquareBracket;
j.Number = G.Number;
j.Percentage = G.Percentage;
j.RightCurlyBracket = G.RightCurlyBracket;
j.RightParenthesis = G.RightParenthesis;
j.RightSquareBracket = G.RightSquareBracket;
j.Semicolon = G.Semicolon;
j.String = G.String;
j.Url = G.Url;
j.WhiteSpace = G.WhiteSpace;
j.tokenTypes = G;
j.DigitCategory = Y.DigitCategory;
j.EofCategory = Y.EofCategory;
j.NameStartCategory = Y.NameStartCategory;
j.NonPrintableCategory = Y.NonPrintableCategory;
j.WhiteSpaceCategory = Y.WhiteSpaceCategory;
j.charCodeCategory = Y.charCodeCategory;
j.isBOM = Y.isBOM;
j.isDigit = Y.isDigit;
j.isHexDigit = Y.isHexDigit;
j.isIdentifierStart = Y.isIdentifierStart;
j.isLetter = Y.isLetter;
j.isLowercaseLetter = Y.isLowercaseLetter;
j.isName = Y.isName;
j.isNameStart = Y.isNameStart;
j.isNewline = Y.isNewline;
j.isNonAscii = Y.isNonAscii;
j.isNonPrintable = Y.isNonPrintable;
j.isNumberStart = Y.isNumberStart;
j.isUppercaseLetter = Y.isUppercaseLetter;
j.isValidEscape = Y.isValidEscape;
j.isWhiteSpace = Y.isWhiteSpace;
j.cmpChar = le.cmpChar;
j.cmpStr = le.cmpStr;
j.consumeBadUrlRemnants = le.consumeBadUrlRemnants;
j.consumeEscaped = le.consumeEscaped;
j.consumeName = le.consumeName;
j.consumeNumber = le.consumeNumber;
j.decodeEscaped = le.decodeEscaped;
j.findDecimalNumberEnd = le.findDecimalNumberEnd;
j.findWhiteSpaceEnd = le.findWhiteSpaceEnd;
j.findWhiteSpaceStart = le.findWhiteSpaceStart;
j.getNewlineLength = le.getNewlineLength;
j.tokenNames = GT;
j.OffsetToLocation = HT.OffsetToLocation;
j.TokenStream = VT.TokenStream;
j.tokenize = WT;
var Yb = {}, Jr = {};
let yn = null, XT = class kt {
  static createItem(t) {
    return {
      prev: null,
      next: null,
      data: t
    };
  }
  constructor() {
    this.head = null, this.tail = null, this.cursor = null;
  }
  createItem(t) {
    return kt.createItem(t);
  }
  // cursor helpers
  allocateCursor(t, r) {
    let n;
    return yn !== null ? (n = yn, yn = yn.cursor, n.prev = t, n.next = r, n.cursor = this.cursor) : n = {
      prev: t,
      next: r,
      cursor: this.cursor
    }, this.cursor = n, n;
  }
  releaseCursor() {
    const { cursor: t } = this;
    this.cursor = t.cursor, t.prev = null, t.next = null, t.cursor = yn, yn = t;
  }
  updateCursors(t, r, n, a) {
    let { cursor: i } = this;
    for (; i !== null; )
      i.prev === t && (i.prev = r), i.next === n && (i.next = a), i = i.cursor;
  }
  *[Symbol.iterator]() {
    for (let t = this.head; t !== null; t = t.next)
      yield t.data;
  }
  // getters
  get size() {
    let t = 0;
    for (let r = this.head; r !== null; r = r.next)
      t++;
    return t;
  }
  get isEmpty() {
    return this.head === null;
  }
  get first() {
    return this.head && this.head.data;
  }
  get last() {
    return this.tail && this.tail.data;
  }
  // convertors
  fromArray(t) {
    let r = null;
    this.head = null;
    for (let n of t) {
      const a = kt.createItem(n);
      r !== null ? r.next = a : this.head = a, a.prev = r, r = a;
    }
    return this.tail = r, this;
  }
  toArray() {
    return [...this];
  }
  toJSON() {
    return [...this];
  }
  // array-like methods
  forEach(t, r = this) {
    const n = this.allocateCursor(null, this.head);
    for (; n.next !== null; ) {
      const a = n.next;
      n.next = a.next, t.call(r, a.data, a, this);
    }
    this.releaseCursor();
  }
  forEachRight(t, r = this) {
    const n = this.allocateCursor(this.tail, null);
    for (; n.prev !== null; ) {
      const a = n.prev;
      n.prev = a.prev, t.call(r, a.data, a, this);
    }
    this.releaseCursor();
  }
  reduce(t, r, n = this) {
    let a = this.allocateCursor(null, this.head), i = r, s;
    for (; a.next !== null; )
      s = a.next, a.next = s.next, i = t.call(n, i, s.data, s, this);
    return this.releaseCursor(), i;
  }
  reduceRight(t, r, n = this) {
    let a = this.allocateCursor(this.tail, null), i = r, s;
    for (; a.prev !== null; )
      s = a.prev, a.prev = s.prev, i = t.call(n, i, s.data, s, this);
    return this.releaseCursor(), i;
  }
  some(t, r = this) {
    for (let n = this.head; n !== null; n = n.next)
      if (t.call(r, n.data, n, this))
        return !0;
    return !1;
  }
  map(t, r = this) {
    const n = new kt();
    for (let a = this.head; a !== null; a = a.next)
      n.appendData(t.call(r, a.data, a, this));
    return n;
  }
  filter(t, r = this) {
    const n = new kt();
    for (let a = this.head; a !== null; a = a.next)
      t.call(r, a.data, a, this) && n.appendData(a.data);
    return n;
  }
  nextUntil(t, r, n = this) {
    if (t === null)
      return;
    const a = this.allocateCursor(null, t);
    for (; a.next !== null; ) {
      const i = a.next;
      if (a.next = i.next, r.call(n, i.data, i, this))
        break;
    }
    this.releaseCursor();
  }
  prevUntil(t, r, n = this) {
    if (t === null)
      return;
    const a = this.allocateCursor(t, null);
    for (; a.prev !== null; ) {
      const i = a.prev;
      if (a.prev = i.prev, r.call(n, i.data, i, this))
        break;
    }
    this.releaseCursor();
  }
  // mutation
  clear() {
    this.head = null, this.tail = null;
  }
  copy() {
    const t = new kt();
    for (let r of this)
      t.appendData(r);
    return t;
  }
  prepend(t) {
    return this.updateCursors(null, t, this.head, t), this.head !== null ? (this.head.prev = t, t.next = this.head) : this.tail = t, this.head = t, this;
  }
  prependData(t) {
    return this.prepend(kt.createItem(t));
  }
  append(t) {
    return this.insert(t);
  }
  appendData(t) {
    return this.insert(kt.createItem(t));
  }
  insert(t, r = null) {
    if (r !== null)
      if (this.updateCursors(r.prev, t, r, t), r.prev === null) {
        if (this.head !== r)
          throw new Error("before doesn't belong to list");
        this.head = t, r.prev = t, t.next = r, this.updateCursors(null, t);
      } else
        r.prev.next = t, t.prev = r.prev, r.prev = t, t.next = r;
    else
      this.updateCursors(this.tail, t, null, t), this.tail !== null ? (this.tail.next = t, t.prev = this.tail) : this.head = t, this.tail = t;
    return this;
  }
  insertData(t, r) {
    return this.insert(kt.createItem(t), r);
  }
  remove(t) {
    if (this.updateCursors(t, t.prev, t, t.next), t.prev !== null)
      t.prev.next = t.next;
    else {
      if (this.head !== t)
        throw new Error("item doesn't belong to list");
      this.head = t.next;
    }
    if (t.next !== null)
      t.next.prev = t.prev;
    else {
      if (this.tail !== t)
        throw new Error("item doesn't belong to list");
      this.tail = t.prev;
    }
    return t.prev = null, t.next = null, t;
  }
  push(t) {
    this.insert(kt.createItem(t));
  }
  pop() {
    return this.tail !== null ? this.remove(this.tail) : null;
  }
  unshift(t) {
    this.prepend(kt.createItem(t));
  }
  shift() {
    return this.head !== null ? this.remove(this.head) : null;
  }
  prependList(t) {
    return this.insertList(t, this.head);
  }
  appendList(t) {
    return this.insertList(t);
  }
  insertList(t, r) {
    return t.head === null ? this : (r != null ? (this.updateCursors(r.prev, t.tail, r, t.head), r.prev !== null ? (r.prev.next = t.head, t.head.prev = r.prev) : this.head = t.head, r.prev = t.tail, t.tail.next = r) : (this.updateCursors(this.tail, t.tail, null, t.head), this.tail !== null ? (this.tail.next = t.head, t.head.prev = this.tail) : this.head = t.head, this.tail = t.tail), t.head = null, t.tail = null, this);
  }
  replace(t, r) {
    "head" in r ? this.insertList(r, t) : this.insert(r, t), this.remove(t);
  }
};
Jr.List = XT;
var Kb = {}, Eu = {};
function YT(e, t) {
  const r = Object.create(SyntaxError.prototype), n = new Error();
  return Object.assign(r, {
    name: e,
    message: t,
    get stack() {
      return (n.stack || "").replace(/^(.+\n){1,3}/, `${e}: ${t}
`);
    }
  });
}
Eu.createCustomError = YT;
const KT = Eu, El = 100, ah = 60, ih = "    ";
function sh({ source: e, line: t, column: r }, n) {
  function a(c, f) {
    return i.slice(c, f).map(
      (d, h) => String(c + h + 1).padStart(l) + " |" + d
    ).join(`
`);
  }
  const i = e.split(/\r\n?|\n|\f/), s = Math.max(1, t - n) - 1, u = Math.min(t + n, i.length + 1), l = Math.max(4, String(u).length) + 1;
  let o = 0;
  r += (ih.length - 1) * (i[t - 1].substr(0, r - 1).match(/\t/g) || []).length, r > El && (o = r - ah + 3, r = ah - 2);
  for (let c = s; c <= u; c++)
    c >= 0 && c < i.length && (i[c] = i[c].replace(/\t/g, ih), i[c] = (o > 0 && i[c].length > o ? "…" : "") + i[c].substr(o, El - 2) + (i[c].length > o + El - 1 ? "…" : ""));
  return [
    a(s, t),
    new Array(r + l + 2).join("-") + "^",
    a(t, u)
  ].filter(Boolean).join(`
`);
}
function QT(e, t, r, n, a) {
  return Object.assign(KT.createCustomError("SyntaxError", e), {
    source: t,
    offset: r,
    line: n,
    column: a,
    sourceFragment(s) {
      return sh({ source: t, line: n, column: a }, isNaN(s) ? 0 : s);
    },
    get formattedMessage() {
      return `Parse error: ${e}
` + sh({ source: t, line: n, column: a }, 2);
    }
  });
}
Kb.SyntaxError = QT;
var Qb = {};
const oh = _;
function ZT(e) {
  const t = this.createList();
  let r = !1;
  const n = {
    recognizer: e
  };
  for (; !this.eof; ) {
    switch (this.tokenType) {
      case oh.Comment:
        this.next();
        continue;
      case oh.WhiteSpace:
        r = !0, this.next();
        continue;
    }
    let a = e.getNode.call(this, n);
    if (a === void 0)
      break;
    r && (e.onWhiteSpace && e.onWhiteSpace.call(this, a, t, n), r = !1), t.push(a);
  }
  return r && e.onWhiteSpace && e.onWhiteSpace.call(this, null, t, n), t;
}
Qb.readSequence = ZT;
const uh = Jr, lh = Kb, JT = j, e5 = Qb, t5 = td, r5 = Au, pi = $e, It = _, n5 = $u, ch = () => {
}, a5 = 33, i5 = 35, Tl = 59, fh = 123, dh = 0;
function s5(e) {
  return function() {
    return this[e]();
  };
}
function Pl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r in e) {
    const n = e[r], a = n.parse || n;
    a && (t[r] = a);
  }
  return t;
}
function o5(e) {
  const t = {
    context: /* @__PURE__ */ Object.create(null),
    scope: Object.assign(/* @__PURE__ */ Object.create(null), e.scope),
    atrule: Pl(e.atrule),
    pseudo: Pl(e.pseudo),
    node: Pl(e.node)
  };
  for (const r in e.parseContext)
    switch (typeof e.parseContext[r]) {
      case "function":
        t.context[r] = e.parseContext[r];
        break;
      case "string":
        t.context[r] = s5(e.parseContext[r]);
        break;
    }
  return {
    config: t,
    ...t,
    ...t.node
  };
}
function u5(e) {
  let t = "", r = "<unknown>", n = !1, a = ch, i = !1;
  const s = new t5.OffsetToLocation(), u = Object.assign(new r5.TokenStream(), o5(e || {}), {
    parseAtrulePrelude: !0,
    parseRulePrelude: !0,
    parseValue: !0,
    parseCustomProperty: !1,
    readSequence: e5.readSequence,
    consumeUntilBalanceEnd: () => 0,
    consumeUntilLeftCurlyBracket(o) {
      return o === fh ? 1 : 0;
    },
    consumeUntilLeftCurlyBracketOrSemicolon(o) {
      return o === fh || o === Tl ? 1 : 0;
    },
    consumeUntilExclamationMarkOrSemicolon(o) {
      return o === a5 || o === Tl ? 1 : 0;
    },
    consumeUntilSemicolonIncluded(o) {
      return o === Tl ? 2 : 0;
    },
    createList() {
      return new uh.List();
    },
    createSingleNodeList(o) {
      return new uh.List().appendData(o);
    },
    getFirstListNode(o) {
      return o && o.first;
    },
    getLastListNode(o) {
      return o && o.last;
    },
    parseWithFallback(o, c) {
      const f = this.tokenIndex;
      try {
        return o.call(this);
      } catch (d) {
        if (i)
          throw d;
        const h = c.call(this, f);
        return i = !0, a(d, h), i = !1, h;
      }
    },
    lookupNonWSType(o) {
      let c;
      do
        if (c = this.lookupType(o++), c !== It.WhiteSpace)
          return c;
      while (c !== dh);
      return dh;
    },
    charCodeAt(o) {
      return o >= 0 && o < t.length ? t.charCodeAt(o) : 0;
    },
    substring(o, c) {
      return t.substring(o, c);
    },
    substrToCursor(o) {
      return this.source.substring(o, this.tokenStart);
    },
    cmpChar(o, c) {
      return pi.cmpChar(t, o, c);
    },
    cmpStr(o, c, f) {
      return pi.cmpStr(t, o, c, f);
    },
    consume(o) {
      const c = this.tokenStart;
      return this.eat(o), this.substrToCursor(c);
    },
    consumeFunctionName() {
      const o = t.substring(this.tokenStart, this.tokenEnd - 1);
      return this.eat(It.Function), o;
    },
    consumeNumber(o) {
      const c = t.substring(this.tokenStart, pi.consumeNumber(t, this.tokenStart));
      return this.eat(o), c;
    },
    eat(o) {
      if (this.tokenType !== o) {
        const c = n5[o].slice(0, -6).replace(/-/g, " ").replace(/^./, (h) => h.toUpperCase());
        let f = `${/[[\](){}]/.test(c) ? `"${c}"` : c} is expected`, d = this.tokenStart;
        switch (o) {
          case It.Ident:
            this.tokenType === It.Function || this.tokenType === It.Url ? (d = this.tokenEnd - 1, f = "Identifier is expected but function found") : f = "Identifier is expected";
            break;
          case It.Hash:
            this.isDelim(i5) && (this.next(), d++, f = "Name is expected");
            break;
          case It.Percentage:
            this.tokenType === It.Number && (d = this.tokenEnd, f = "Percent sign is expected");
            break;
        }
        this.error(f, d);
      }
      this.next();
    },
    eatIdent(o) {
      (this.tokenType !== It.Ident || this.lookupValue(0, o) === !1) && this.error(`Identifier "${o}" is expected`), this.next();
    },
    eatDelim(o) {
      this.isDelim(o) || this.error(`Delim "${String.fromCharCode(o)}" is expected`), this.next();
    },
    getLocation(o, c) {
      return n ? s.getLocationRange(
        o,
        c,
        r
      ) : null;
    },
    getLocationFromList(o) {
      if (n) {
        const c = this.getFirstListNode(o), f = this.getLastListNode(o);
        return s.getLocationRange(
          c !== null ? c.loc.start.offset - s.startOffset : this.tokenStart,
          f !== null ? f.loc.end.offset - s.startOffset : this.tokenStart,
          r
        );
      }
      return null;
    },
    error(o, c) {
      const f = typeof c < "u" && c < t.length ? s.getLocation(c) : this.eof ? s.getLocation(pi.findWhiteSpaceStart(t, t.length - 1)) : s.getLocation(this.tokenStart);
      throw new lh.SyntaxError(
        o || "Unexpected input",
        t,
        f.offset,
        f.line,
        f.column
      );
    }
  });
  return Object.assign(function(o, c) {
    t = o, c = c || {}, u.setSource(t, JT.tokenize), s.setSource(
      t,
      c.offset,
      c.line,
      c.column
    ), r = c.filename || "<unknown>", n = !!c.positions, a = typeof c.onParseError == "function" ? c.onParseError : ch, i = !1, u.parseAtrulePrelude = "parseAtrulePrelude" in c ? !!c.parseAtrulePrelude : !0, u.parseRulePrelude = "parseRulePrelude" in c ? !!c.parseRulePrelude : !0, u.parseValue = "parseValue" in c ? !!c.parseValue : !0, u.parseCustomProperty = "parseCustomProperty" in c ? !!c.parseCustomProperty : !1;
    const { context: f = "default", onComment: d } = c;
    if (!(f in u.context))
      throw new Error("Unknown context `" + f + "`");
    typeof d == "function" && u.forEachToken((p, g, x) => {
      if (p === It.Comment) {
        const C = u.getLocation(g, x), S = pi.cmpStr(t, x - 2, x, "*/") ? t.slice(g + 2, x - 2) : t.slice(g + 2, x);
        d(S, C);
      }
    });
    const h = u.context[f].call(u, c);
    return u.eof || u.error(), h;
  }, {
    SyntaxError: lh.SyntaxError,
    config: u.config
  });
}
Yb.createParser = u5;
var Zb = {}, Jb = {};
const l5 = Sf, hh = /* @__PURE__ */ new Set(["Atrule", "Selector", "Declaration"]);
function c5(e) {
  const t = new l5.SourceMapGenerator(), r = {
    line: 1,
    column: 0
  }, n = {
    line: 0,
    // should be zero to add first mapping
    column: 0
  }, a = {
    line: 1,
    column: 0
  }, i = {
    generated: a
  };
  let s = 1, u = 0, l = !1;
  const o = e.node;
  e.node = function(d) {
    if (d.loc && d.loc.start && hh.has(d.type)) {
      const h = d.loc.start.line, p = d.loc.start.column - 1;
      (n.line !== h || n.column !== p) && (n.line = h, n.column = p, r.line = s, r.column = u, l && (l = !1, (r.line !== a.line || r.column !== a.column) && t.addMapping(i)), l = !0, t.addMapping({
        source: d.loc.source,
        original: n,
        generated: r
      }));
    }
    o.call(this, d), l && hh.has(d.type) && (a.line = s, a.column = u);
  };
  const c = e.emit;
  e.emit = function(d, h, p) {
    for (let g = 0; g < d.length; g++)
      d.charCodeAt(g) === 10 ? (s++, u = 0) : u++;
    c(d, h, p);
  };
  const f = e.result;
  return e.result = function() {
    return l && t.addMapping(i), {
      css: f(),
      map: t
    };
  }, e;
}
Jb.generateSourceMap = c5;
var nd = {};
const E = _, f5 = 43, d5 = 45, Ll = (e, t) => {
  if (e === E.Delim && (e = t), typeof e == "string") {
    const r = e.charCodeAt(0);
    return r > 127 ? 32768 : r << 8;
  }
  return e;
}, e1 = [
  [E.Ident, E.Ident],
  [E.Ident, E.Function],
  [E.Ident, E.Url],
  [E.Ident, E.BadUrl],
  [E.Ident, "-"],
  [E.Ident, E.Number],
  [E.Ident, E.Percentage],
  [E.Ident, E.Dimension],
  [E.Ident, E.CDC],
  [E.Ident, E.LeftParenthesis],
  [E.AtKeyword, E.Ident],
  [E.AtKeyword, E.Function],
  [E.AtKeyword, E.Url],
  [E.AtKeyword, E.BadUrl],
  [E.AtKeyword, "-"],
  [E.AtKeyword, E.Number],
  [E.AtKeyword, E.Percentage],
  [E.AtKeyword, E.Dimension],
  [E.AtKeyword, E.CDC],
  [E.Hash, E.Ident],
  [E.Hash, E.Function],
  [E.Hash, E.Url],
  [E.Hash, E.BadUrl],
  [E.Hash, "-"],
  [E.Hash, E.Number],
  [E.Hash, E.Percentage],
  [E.Hash, E.Dimension],
  [E.Hash, E.CDC],
  [E.Dimension, E.Ident],
  [E.Dimension, E.Function],
  [E.Dimension, E.Url],
  [E.Dimension, E.BadUrl],
  [E.Dimension, "-"],
  [E.Dimension, E.Number],
  [E.Dimension, E.Percentage],
  [E.Dimension, E.Dimension],
  [E.Dimension, E.CDC],
  ["#", E.Ident],
  ["#", E.Function],
  ["#", E.Url],
  ["#", E.BadUrl],
  ["#", "-"],
  ["#", E.Number],
  ["#", E.Percentage],
  ["#", E.Dimension],
  ["#", E.CDC],
  // https://github.com/w3c/csswg-drafts/pull/6874
  ["-", E.Ident],
  ["-", E.Function],
  ["-", E.Url],
  ["-", E.BadUrl],
  ["-", "-"],
  ["-", E.Number],
  ["-", E.Percentage],
  ["-", E.Dimension],
  ["-", E.CDC],
  // https://github.com/w3c/csswg-drafts/pull/6874
  [E.Number, E.Ident],
  [E.Number, E.Function],
  [E.Number, E.Url],
  [E.Number, E.BadUrl],
  [E.Number, E.Number],
  [E.Number, E.Percentage],
  [E.Number, E.Dimension],
  [E.Number, "%"],
  [E.Number, E.CDC],
  // https://github.com/w3c/csswg-drafts/pull/6874
  ["@", E.Ident],
  ["@", E.Function],
  ["@", E.Url],
  ["@", E.BadUrl],
  ["@", "-"],
  ["@", E.CDC],
  // https://github.com/w3c/csswg-drafts/pull/6874
  [".", E.Number],
  [".", E.Percentage],
  [".", E.Dimension],
  ["+", E.Number],
  ["+", E.Percentage],
  ["+", E.Dimension],
  ["/", "*"]
], h5 = e1.concat([
  [E.Ident, E.Hash],
  [E.Dimension, E.Hash],
  [E.Hash, E.Hash],
  [E.AtKeyword, E.LeftParenthesis],
  [E.AtKeyword, E.String],
  [E.AtKeyword, E.Colon],
  [E.Percentage, E.Percentage],
  [E.Percentage, E.Dimension],
  [E.Percentage, E.Function],
  [E.Percentage, "-"],
  [E.RightParenthesis, E.Ident],
  [E.RightParenthesis, E.Function],
  [E.RightParenthesis, E.Percentage],
  [E.RightParenthesis, E.Dimension],
  [E.RightParenthesis, E.Hash],
  [E.RightParenthesis, "-"]
]);
function t1(e) {
  const t = new Set(
    e.map(([r, n]) => Ll(r) << 16 | Ll(n))
  );
  return function(r, n, a) {
    const i = Ll(n, a), s = a.charCodeAt(0);
    return (s === d5 && n !== E.Ident && n !== E.Function && n !== E.CDC || s === f5 ? t.has(r << 16 | s << 8) : t.has(r << 16 | i)) && this.emit(" ", E.WhiteSpace, !0), i;
  };
}
const p5 = t1(e1), m5 = t1(h5);
nd.safe = m5;
nd.spec = p5;
const g5 = j, b5 = Jb, Nl = nd, ph = _, y5 = 92;
function v5(e, t) {
  if (typeof t == "function") {
    let r = null;
    e.children.forEach((n) => {
      r !== null && t.call(this, r), this.node(n), r = n;
    });
    return;
  }
  e.children.forEach(this.node, this);
}
function x5(e) {
  g5.tokenize(e, (t, r, n) => {
    this.token(t, e.slice(r, n));
  });
}
function k5(e) {
  const t = /* @__PURE__ */ new Map();
  for (let r in e.node) {
    const n = e.node[r];
    typeof (n.generate || n) == "function" && t.set(r, n.generate || n);
  }
  return function(r, n) {
    let a = "", i = 0, s = {
      node(l) {
        if (t.has(l.type))
          t.get(l.type).call(u, l);
        else
          throw new Error("Unknown node type: " + l.type);
      },
      tokenBefore: Nl.safe,
      token(l, o) {
        i = this.tokenBefore(i, l, o), this.emit(o, l, !1), l === ph.Delim && o.charCodeAt(0) === y5 && this.emit(`
`, ph.WhiteSpace, !0);
      },
      emit(l) {
        a += l;
      },
      result() {
        return a;
      }
    };
    n && (typeof n.decorator == "function" && (s = n.decorator(s)), n.sourceMap && (s = b5.generateSourceMap(s)), n.mode in Nl && (s.tokenBefore = Nl[n.mode]));
    const u = {
      node: (l) => s.node(l),
      children: v5,
      token: (l, o) => s.token(l, o),
      tokenize: x5
    };
    return s.node(r), s.result();
  };
}
Zb.createGenerator = k5;
var r1 = {};
const Dl = Jr;
function w5(e) {
  return {
    fromPlainObject(t) {
      return e(t, {
        enter(r) {
          r.children && !(r.children instanceof Dl.List) && (r.children = new Dl.List().fromArray(r.children));
        }
      }), t;
    },
    toPlainObject(t) {
      return e(t, {
        leave(r) {
          r.children && r.children instanceof Dl.List && (r.children = r.children.toArray());
        }
      }), t;
    }
  };
}
r1.createConvertor = w5;
var n1 = {};
const { hasOwnProperty: ad } = Object.prototype, Mi = function() {
};
function mh(e) {
  return typeof e == "function" ? e : Mi;
}
function gh(e, t) {
  return function(r, n, a) {
    r.type === t && e.call(this, r, n, a);
  };
}
function S5(e, t) {
  const r = t.structure, n = [];
  for (const a in r) {
    if (ad.call(r, a) === !1)
      continue;
    let i = r[a];
    const s = {
      name: a,
      type: !1,
      nullable: !1
    };
    Array.isArray(i) || (i = [i]);
    for (const u of i)
      u === null ? s.nullable = !0 : typeof u == "string" ? s.type = "node" : Array.isArray(u) && (s.type = "list");
    s.type && n.push(s);
  }
  return n.length ? {
    context: t.walkContext,
    fields: n
  } : null;
}
function C5(e) {
  const t = {};
  for (const r in e.node)
    if (ad.call(e.node, r)) {
      const n = e.node[r];
      if (!n.structure)
        throw new Error("Missed `structure` field in `" + r + "` node type definition");
      t[r] = S5(r, n);
    }
  return t;
}
function bh(e, t) {
  const r = e.fields.slice(), n = e.context, a = typeof n == "string";
  return t && r.reverse(), function(i, s, u, l) {
    let o;
    a && (o = s[n], s[n] = i);
    for (const c of r) {
      const f = i[c.name];
      if (!c.nullable || f) {
        if (c.type === "list") {
          if (t ? f.reduceRight(l, !1) : f.reduce(l, !1))
            return !0;
        } else if (u(f))
          return !0;
      }
    }
    a && (s[n] = o);
  };
}
function yh({
  StyleSheet: e,
  Atrule: t,
  Rule: r,
  Block: n,
  DeclarationList: a
}) {
  return {
    Atrule: {
      StyleSheet: e,
      Atrule: t,
      Rule: r,
      Block: n
    },
    Rule: {
      StyleSheet: e,
      Atrule: t,
      Rule: r,
      Block: n
    },
    Declaration: {
      StyleSheet: e,
      Atrule: t,
      Rule: r,
      Block: n,
      DeclarationList: a
    }
  };
}
function $5(e) {
  const t = C5(e), r = {}, n = {}, a = Symbol("break-walk"), i = Symbol("skip-node");
  for (const o in t)
    ad.call(t, o) && t[o] !== null && (r[o] = bh(t[o], !1), n[o] = bh(t[o], !0));
  const s = yh(r), u = yh(n), l = function(o, c) {
    function f(C, S, P) {
      const T = d.call(x, C, S, P);
      return T === a ? !0 : T === i ? !1 : !!(p.hasOwnProperty(C.type) && p[C.type](C, x, f, g) || h.call(x, C, S, P) === a);
    }
    let d = Mi, h = Mi, p = r, g = (C, S, P, T) => C || f(S, P, T);
    const x = {
      break: a,
      skip: i,
      root: o,
      stylesheet: null,
      atrule: null,
      atrulePrelude: null,
      rule: null,
      selector: null,
      block: null,
      declaration: null,
      function: null
    };
    if (typeof c == "function")
      d = c;
    else if (c && (d = mh(c.enter), h = mh(c.leave), c.reverse && (p = n), c.visit)) {
      if (s.hasOwnProperty(c.visit))
        p = c.reverse ? u[c.visit] : s[c.visit];
      else if (!t.hasOwnProperty(c.visit))
        throw new Error("Bad value `" + c.visit + "` for `visit` option (should be: " + Object.keys(t).sort().join(", ") + ")");
      d = gh(d, c.visit), h = gh(h, c.visit);
    }
    if (d === Mi && h === Mi)
      throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
    f(o);
  };
  return l.break = a, l.skip = i, l.find = function(o, c) {
    let f = null;
    return l(o, function(d, h, p) {
      if (c.call(this, d, h, p))
        return f = d, a;
    }), f;
  }, l.findLast = function(o, c) {
    let f = null;
    return l(o, {
      reverse: !0,
      enter(d, h, p) {
        if (c.call(this, d, h, p))
          return f = d, a;
      }
    }), f;
  }, l.findAll = function(o, c) {
    const f = [];
    return l(o, function(d, h, p) {
      c.call(this, d, h, p) && f.push(d);
    }), f;
  }, l;
}
n1.createWalker = $5;
var id = {}, sd = {}, Tu = {};
function A5(e) {
  return e;
}
function E5(e) {
  const { min: t, max: r, comma: n } = e;
  return t === 0 && r === 0 ? n ? "#?" : "*" : t === 0 && r === 1 ? "?" : t === 1 && r === 0 ? n ? "#" : "+" : t === 1 && r === 1 ? "" : (n ? "#" : "") + (t === r ? "{" + t + "}" : "{" + t + "," + (r !== 0 ? r : "") + "}");
}
function T5(e) {
  switch (e.type) {
    case "Range":
      return " [" + (e.min === null ? "-∞" : e.min) + "," + (e.max === null ? "∞" : e.max) + "]";
    default:
      throw new Error("Unknown node type `" + e.type + "`");
  }
}
function P5(e, t, r, n) {
  const a = e.combinator === " " || n ? e.combinator : " " + e.combinator + " ", i = e.terms.map((s) => od(s, t, r, n)).join(a);
  return e.explicit || r ? (n || i[0] === "," ? "[" : "[ ") + i + (n ? "]" : " ]") : i;
}
function od(e, t, r, n) {
  let a;
  switch (e.type) {
    case "Group":
      a = P5(e, t, r, n) + (e.disallowEmpty ? "!" : "");
      break;
    case "Multiplier":
      return od(e.term, t, r, n) + t(E5(e), e);
    case "Type":
      a = "<" + e.name + (e.opts ? t(T5(e.opts), e.opts) : "") + ">";
      break;
    case "Property":
      a = "<'" + e.name + "'>";
      break;
    case "Keyword":
      a = e.name;
      break;
    case "AtKeyword":
      a = "@" + e.name;
      break;
    case "Function":
      a = e.name + "(";
      break;
    case "String":
    case "Token":
      a = e.value;
      break;
    case "Comma":
      a = ",";
      break;
    default:
      throw new Error("Unknown node type `" + e.type + "`");
  }
  return t(a, e);
}
function L5(e, t) {
  let r = A5, n = !1, a = !1;
  return typeof t == "function" ? r = t : t && (n = !!t.forceBraces, a = !!t.compact, typeof t.decorate == "function" && (r = t.decorate)), od(e, r, n, a);
}
Tu.generate = L5;
const a1 = Eu, N5 = Tu, vh = { offset: 0, line: 1, column: 1 };
function D5(e, t) {
  const r = e.tokens, n = e.longestMatch, a = n < r.length && r[n].node || null, i = a !== t ? a : null;
  let s = 0, u = 0, l = 0, o = "", c, f;
  for (let d = 0; d < r.length; d++) {
    const h = r[d].value;
    d === n && (u = h.length, s = o.length), i !== null && r[d].node === i && (d <= n ? l++ : l = 0), o += h;
  }
  return n === r.length || l > 1 ? (c = no(i || t, "end") || Ii(vh, o), f = Ii(c)) : (c = no(i, "start") || Ii(no(t, "start") || vh, o.slice(0, s)), f = no(i, "end") || Ii(c, o.substr(s, u))), {
    css: o,
    mismatchOffset: s,
    mismatchLength: u,
    start: c,
    end: f
  };
}
function no(e, t) {
  const r = e && e.loc && e.loc[t];
  return r ? "line" in r ? Ii(r) : r : null;
}
function Ii({ offset: e, line: t, column: r }, n) {
  const a = {
    offset: e,
    line: t,
    column: r
  };
  if (n) {
    const i = n.split(/\n|\r\n?|\f/);
    a.offset += n.length, a.line += i.length - 1, a.column = i.length === 1 ? a.column + n.length : i.pop().length + 1;
  }
  return a;
}
const O5 = function(e, t) {
  const r = a1.createCustomError(
    "SyntaxReferenceError",
    e + (t ? " `" + t + "`" : "")
  );
  return r.reference = t, r;
}, M5 = function(e, t, r, n) {
  const a = a1.createCustomError("SyntaxMatchError", e), {
    css: i,
    mismatchOffset: s,
    mismatchLength: u,
    start: l,
    end: o
  } = D5(n, r);
  return a.rawMessage = e, a.syntax = t ? N5.generate(t) : "<generic>", a.css = i, a.mismatchOffset = s, a.mismatchLength = u, a.message = e + `
  syntax: ` + a.syntax + `
   value: ` + (i || "<empty string>") + `
  --------` + new Array(a.mismatchOffset + 1).join("-") + "^", Object.assign(a, l), a.loc = {
    source: r && r.loc && r.loc.source || "<unknown>",
    start: l,
    end: o
  }, a;
};
sd.SyntaxMatchError = M5;
sd.SyntaxReferenceError = O5;
var en = {};
const ao = /* @__PURE__ */ new Map(), vn = /* @__PURE__ */ new Map(), Go = 45, I5 = F5, R5 = B5, _5 = ld;
function ud(e, t) {
  return t = t || 0, e.length - t >= 2 && e.charCodeAt(t) === Go && e.charCodeAt(t + 1) === Go;
}
function ld(e, t) {
  if (t = t || 0, e.length - t >= 3 && e.charCodeAt(t) === Go && e.charCodeAt(t + 1) !== Go) {
    const r = e.indexOf("-", t + 2);
    if (r !== -1)
      return e.substring(t, r + 1);
  }
  return "";
}
function F5(e) {
  if (ao.has(e))
    return ao.get(e);
  const t = e.toLowerCase();
  let r = ao.get(t);
  if (r === void 0) {
    const n = ud(t, 0), a = n ? "" : ld(t, 0);
    r = Object.freeze({
      basename: t.substr(a.length),
      name: t,
      prefix: a,
      vendor: a,
      custom: n
    });
  }
  return ao.set(e, r), r;
}
function B5(e) {
  if (vn.has(e))
    return vn.get(e);
  let t = e, r = e[0];
  r === "/" ? r = e[1] === "/" ? "//" : "/" : r !== "_" && r !== "*" && r !== "$" && r !== "#" && r !== "+" && r !== "&" && (r = "");
  const n = ud(t, r.length);
  if (!n && (t = t.toLowerCase(), vn.has(t))) {
    const u = vn.get(t);
    return vn.set(e, u), u;
  }
  const a = n ? "" : ld(t, r.length), i = t.substr(0, r.length + a.length), s = Object.freeze({
    basename: t.substr(i.length),
    name: t.substr(r.length),
    hack: r,
    vendor: a,
    prefix: i,
    custom: n
  });
  return vn.set(e, s), s;
}
en.isCustomProperty = ud;
en.keyword = I5;
en.property = R5;
en.vendorPrefix = _5;
var cd = {};
const q5 = [
  "initial",
  "inherit",
  "unset",
  "revert",
  "revert-layer"
];
cd.cssWideKeywords = q5;
const i1 = se, Et = _, Ol = $e, Ki = 43, Ft = 45, Ml = 110, xn = !0, U5 = !1;
function _c(e, t) {
  return e !== null && e.type === Et.Delim && e.value.charCodeAt(0) === t;
}
function Gi(e, t, r) {
  for (; e !== null && (e.type === Et.WhiteSpace || e.type === Et.Comment); )
    e = r(++t);
  return t;
}
function lr(e, t, r, n) {
  if (!e)
    return 0;
  const a = e.value.charCodeAt(t);
  if (a === Ki || a === Ft) {
    if (r)
      return 0;
    t++;
  }
  for (; t < e.value.length; t++)
    if (!i1.isDigit(e.value.charCodeAt(t)))
      return 0;
  return n + 1;
}
function Il(e, t, r) {
  let n = !1, a = Gi(e, t, r);
  if (e = r(a), e === null)
    return t;
  if (e.type !== Et.Number)
    if (_c(e, Ki) || _c(e, Ft)) {
      if (n = !0, a = Gi(r(++a), a, r), e = r(a), e === null || e.type !== Et.Number)
        return 0;
    } else
      return t;
  if (!n) {
    const i = e.value.charCodeAt(0);
    if (i !== Ki && i !== Ft)
      return 0;
  }
  return lr(e, n ? 0 : 1, n, a);
}
function j5(e, t) {
  let r = 0;
  if (!e)
    return 0;
  if (e.type === Et.Number)
    return lr(e, 0, U5, r);
  if (e.type === Et.Ident && e.value.charCodeAt(0) === Ft) {
    if (!Ol.cmpChar(e.value, 1, Ml))
      return 0;
    switch (e.value.length) {
      case 2:
        return Il(t(++r), r, t);
      case 3:
        return e.value.charCodeAt(2) !== Ft ? 0 : (r = Gi(t(++r), r, t), e = t(r), lr(e, 0, xn, r));
      default:
        return e.value.charCodeAt(2) !== Ft ? 0 : lr(e, 3, xn, r);
    }
  } else if (e.type === Et.Ident || _c(e, Ki) && t(r + 1).type === Et.Ident) {
    if (e.type !== Et.Ident && (e = t(++r)), e === null || !Ol.cmpChar(e.value, 0, Ml))
      return 0;
    switch (e.value.length) {
      case 1:
        return Il(t(++r), r, t);
      case 2:
        return e.value.charCodeAt(1) !== Ft ? 0 : (r = Gi(t(++r), r, t), e = t(r), lr(e, 0, xn, r));
      default:
        return e.value.charCodeAt(1) !== Ft ? 0 : lr(e, 2, xn, r);
    }
  } else if (e.type === Et.Dimension) {
    let n = e.value.charCodeAt(0), a = n === Ki || n === Ft ? 1 : 0, i = a;
    for (; i < e.value.length && i1.isDigit(e.value.charCodeAt(i)); i++)
      ;
    return i === a || !Ol.cmpChar(e.value, i, Ml) ? 0 : i + 1 === e.value.length ? Il(t(++r), r, t) : e.value.charCodeAt(i + 1) !== Ft ? 0 : i + 2 === e.value.length ? (r = Gi(t(++r), r, t), e = t(r), lr(e, 0, xn, r)) : lr(e, i + 2, xn, r);
  }
  return 0;
}
var z5 = j5;
const G5 = se, Pr = _, H5 = $e, V5 = 43, s1 = 45, o1 = 63, W5 = 117;
function Fc(e, t) {
  return e !== null && e.type === Pr.Delim && e.value.charCodeAt(0) === t;
}
function X5(e, t) {
  return e.value.charCodeAt(0) === t;
}
function Ri(e, t, r) {
  let n = 0;
  for (let a = t; a < e.value.length; a++) {
    const i = e.value.charCodeAt(a);
    if (i === s1 && r && n !== 0)
      return Ri(e, t + n + 1, !1), 6;
    if (!G5.isHexDigit(i) || ++n > 6)
      return 0;
  }
  return n;
}
function io(e, t, r) {
  if (!e)
    return 0;
  for (; Fc(r(t), o1); ) {
    if (++e > 6)
      return 0;
    t++;
  }
  return t;
}
function Y5(e, t) {
  let r = 0;
  if (e === null || e.type !== Pr.Ident || !H5.cmpChar(e.value, 0, W5) || (e = t(++r), e === null))
    return 0;
  if (Fc(e, V5))
    return e = t(++r), e === null ? 0 : e.type === Pr.Ident ? io(Ri(e, 0, !0), ++r, t) : Fc(e, o1) ? io(1, ++r, t) : 0;
  if (e.type === Pr.Number) {
    const n = Ri(e, 1, !0);
    return n === 0 ? 0 : (e = t(++r), e === null ? r : e.type === Pr.Dimension || e.type === Pr.Number ? !X5(e, s1) || !Ri(e, 1, !1) ? 0 : r + 1 : io(n, r, t));
  }
  return e.type === Pr.Dimension ? io(Ri(e, 1, !0), ++r, t) : 0;
}
var K5 = Y5;
const Q5 = cd, Z5 = z5, J5 = K5, F = _, Pu = se, fd = $e, eP = ["calc(", "-moz-calc(", "-webkit-calc("], dd = /* @__PURE__ */ new Map([
  [F.Function, F.RightParenthesis],
  [F.LeftParenthesis, F.RightParenthesis],
  [F.LeftSquareBracket, F.RightSquareBracket],
  [F.LeftCurlyBracket, F.RightCurlyBracket]
]), tP = [
  // absolute length units https://www.w3.org/TR/css-values-3/#lengths
  "cm",
  "mm",
  "q",
  "in",
  "pt",
  "pc",
  "px",
  // font-relative length units https://drafts.csswg.org/css-values-4/#font-relative-lengths
  "em",
  "rem",
  "ex",
  "rex",
  "cap",
  "rcap",
  "ch",
  "rch",
  "ic",
  "ric",
  "lh",
  "rlh",
  // viewport-percentage lengths https://drafts.csswg.org/css-values-4/#viewport-relative-lengths
  "vw",
  "svw",
  "lvw",
  "dvw",
  "vh",
  "svh",
  "lvh",
  "dvh",
  "vi",
  "svi",
  "lvi",
  "dvi",
  "vb",
  "svb",
  "lvb",
  "dvb",
  "vmin",
  "svmin",
  "lvmin",
  "dvmin",
  "vmax",
  "svmax",
  "lvmax",
  "dvmax",
  // container relative lengths https://drafts.csswg.org/css-contain-3/#container-lengths
  "cqw",
  "cqh",
  "cqi",
  "cqb",
  "cqmin",
  "cqmax"
], rP = ["deg", "grad", "rad", "turn"], nP = ["s", "ms"], aP = ["hz", "khz"], iP = ["dpi", "dpcm", "dppx", "x"], sP = ["fr"], oP = ["db"], uP = ["st"];
function Nt(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function u1(e, t) {
  return fd.cmpStr(e, 0, e.length, t);
}
function l1(e, t) {
  for (let r = 0; r < t.length; r++)
    if (u1(e, t[r]))
      return !0;
  return !1;
}
function c1(e, t) {
  return t !== e.length - 2 ? !1 : Nt(e, t) === 92 && // U+005C REVERSE SOLIDUS (\)
  Pu.isDigit(Nt(e, t + 1));
}
function Lu(e, t, r) {
  if (e && e.type === "Range") {
    const n = Number(
      r !== void 0 && r !== t.length ? t.substr(0, r) : t
    );
    if (isNaN(n) || e.min !== null && n < e.min && typeof e.min != "string" || e.max !== null && n > e.max && typeof e.max != "string")
      return !0;
  }
  return !1;
}
function lP(e, t) {
  let r = 0, n = [], a = 0;
  e:
    do {
      switch (e.type) {
        case F.RightCurlyBracket:
        case F.RightParenthesis:
        case F.RightSquareBracket:
          if (e.type !== r)
            break e;
          if (r = n.pop(), n.length === 0) {
            a++;
            break e;
          }
          break;
        case F.Function:
        case F.LeftParenthesis:
        case F.LeftSquareBracket:
        case F.LeftCurlyBracket:
          n.push(r), r = dd.get(e.type);
          break;
      }
      a++;
    } while (e = t(a));
  return a;
}
function ct(e) {
  return function(t, r, n) {
    return t === null ? 0 : t.type === F.Function && l1(t.value, eP) ? lP(t, r) : e(t, r, n);
  };
}
function he(e) {
  return function(t) {
    return t === null || t.type !== e ? 0 : 1;
  };
}
function cP(e) {
  if (e === null || e.type !== F.Ident)
    return 0;
  const t = e.value.toLowerCase();
  return l1(t, Q5.cssWideKeywords) || u1(t, "default") ? 0 : 1;
}
function fP(e) {
  return e === null || e.type !== F.Ident || Nt(e.value, 0) !== 45 || Nt(e.value, 1) !== 45 ? 0 : 1;
}
function dP(e) {
  if (e === null || e.type !== F.Hash)
    return 0;
  const t = e.value.length;
  if (t !== 4 && t !== 5 && t !== 7 && t !== 9)
    return 0;
  for (let r = 1; r < t; r++)
    if (!Pu.isHexDigit(Nt(e.value, r)))
      return 0;
  return 1;
}
function hP(e) {
  return e === null || e.type !== F.Hash || !Pu.isIdentifierStart(Nt(e.value, 1), Nt(e.value, 2), Nt(e.value, 3)) ? 0 : 1;
}
function pP(e, t) {
  if (!e)
    return 0;
  let r = 0, n = [], a = 0;
  e:
    do {
      switch (e.type) {
        case F.BadString:
        case F.BadUrl:
          break e;
        case F.RightCurlyBracket:
        case F.RightParenthesis:
        case F.RightSquareBracket:
          if (e.type !== r)
            break e;
          r = n.pop();
          break;
        case F.Semicolon:
          if (r === 0)
            break e;
          break;
        case F.Delim:
          if (r === 0 && e.value === "!")
            break e;
          break;
        case F.Function:
        case F.LeftParenthesis:
        case F.LeftSquareBracket:
        case F.LeftCurlyBracket:
          n.push(r), r = dd.get(e.type);
          break;
      }
      a++;
    } while (e = t(a));
  return a;
}
function mP(e, t) {
  if (!e)
    return 0;
  let r = 0, n = [], a = 0;
  e:
    do {
      switch (e.type) {
        case F.BadString:
        case F.BadUrl:
          break e;
        case F.RightCurlyBracket:
        case F.RightParenthesis:
        case F.RightSquareBracket:
          if (e.type !== r)
            break e;
          r = n.pop();
          break;
        case F.Function:
        case F.LeftParenthesis:
        case F.LeftSquareBracket:
        case F.LeftCurlyBracket:
          n.push(r), r = dd.get(e.type);
          break;
      }
      a++;
    } while (e = t(a));
  return a;
}
function Qt(e) {
  return e && (e = new Set(e)), function(t, r, n) {
    if (t === null || t.type !== F.Dimension)
      return 0;
    const a = fd.consumeNumber(t.value, 0);
    if (e !== null) {
      const i = t.value.indexOf("\\", a), s = i === -1 || !c1(t.value, i) ? t.value.substr(a) : t.value.substring(a, i);
      if (e.has(s.toLowerCase()) === !1)
        return 0;
    }
    return Lu(n, t.value, a) ? 0 : 1;
  };
}
function gP(e, t, r) {
  return e === null || e.type !== F.Percentage || Lu(r, e.value, e.value.length - 1) ? 0 : 1;
}
function xh(e) {
  return typeof e != "function" && (e = function() {
    return 0;
  }), function(t, r, n) {
    return t !== null && t.type === F.Number && Number(t.value) === 0 ? 1 : e(t, r, n);
  };
}
function bP(e, t, r) {
  if (e === null)
    return 0;
  const n = fd.consumeNumber(e.value, 0);
  return !(n === e.value.length) && !c1(e.value, n) || Lu(r, e.value, n) ? 0 : 1;
}
function yP(e, t, r) {
  if (e === null || e.type !== F.Number)
    return 0;
  let n = Nt(e.value, 0) === 43 || // U+002B PLUS SIGN (+)
  Nt(e.value, 0) === 45 ? 1 : 0;
  for (; n < e.value.length; n++)
    if (!Pu.isDigit(Nt(e.value, n)))
      return 0;
  return Lu(r, e.value, n) ? 0 : 1;
}
const vP = {
  // token types
  "ident-token": he(F.Ident),
  "function-token": he(F.Function),
  "at-keyword-token": he(F.AtKeyword),
  "hash-token": he(F.Hash),
  "string-token": he(F.String),
  "bad-string-token": he(F.BadString),
  "url-token": he(F.Url),
  "bad-url-token": he(F.BadUrl),
  "delim-token": he(F.Delim),
  "number-token": he(F.Number),
  "percentage-token": he(F.Percentage),
  "dimension-token": he(F.Dimension),
  "whitespace-token": he(F.WhiteSpace),
  "CDO-token": he(F.CDO),
  "CDC-token": he(F.CDC),
  "colon-token": he(F.Colon),
  "semicolon-token": he(F.Semicolon),
  "comma-token": he(F.Comma),
  "[-token": he(F.LeftSquareBracket),
  "]-token": he(F.RightSquareBracket),
  "(-token": he(F.LeftParenthesis),
  ")-token": he(F.RightParenthesis),
  "{-token": he(F.LeftCurlyBracket),
  "}-token": he(F.RightCurlyBracket),
  // token type aliases
  string: he(F.String),
  ident: he(F.Ident),
  // complex types
  "custom-ident": cP,
  "custom-property-name": fP,
  "hex-color": dP,
  "id-selector": hP,
  // element( <id-selector> )
  "an-plus-b": Z5,
  urange: J5,
  "declaration-value": pP,
  "any-value": mP,
  // dimensions
  dimension: ct(Qt(null)),
  angle: ct(Qt(rP)),
  decibel: ct(Qt(oP)),
  frequency: ct(Qt(aP)),
  flex: ct(Qt(sP)),
  length: ct(xh(Qt(tP))),
  resolution: ct(Qt(iP)),
  semitones: ct(Qt(uP)),
  time: ct(Qt(nP)),
  // percentage
  percentage: ct(gP),
  // numeric
  zero: xh(),
  number: ct(bP),
  integer: ct(yP)
};
var xP = vP;
const kP = j, wP = {
  decorator(e) {
    const t = [];
    let r = null;
    return {
      ...e,
      node(n) {
        const a = r;
        r = n, e.node.call(this, n), r = a;
      },
      emit(n, a, i) {
        t.push({
          type: a,
          value: n,
          node: i ? null : r
        });
      },
      result() {
        return t;
      }
    };
  }
};
function SP(e) {
  const t = [];
  return kP.tokenize(
    e,
    (r, n, a) => t.push({
      type: r,
      value: e.slice(n, a),
      node: null
    })
  ), t;
}
function CP(e, t) {
  return typeof e == "string" ? SP(e) : t.generate(e, wP);
}
var $P = CP, $a = {}, Nu = {}, f1 = {}, hd = {};
const AP = Eu;
function EP(e, t, r) {
  return Object.assign(AP.createCustomError("SyntaxError", e), {
    input: t,
    offset: r,
    rawMessage: e,
    message: e + `
  ` + t + `
--` + new Array((r || t.length) + 1).join("-") + "^"
  });
}
hd.SyntaxError = EP;
const TP = hd, PP = 9, LP = 10, NP = 12, DP = 13, OP = 32;
class MP {
  constructor(t) {
    this.str = t, this.pos = 0;
  }
  charCodeAt(t) {
    return t < this.str.length ? this.str.charCodeAt(t) : 0;
  }
  charCode() {
    return this.charCodeAt(this.pos);
  }
  nextCharCode() {
    return this.charCodeAt(this.pos + 1);
  }
  nextNonWsCode(t) {
    return this.charCodeAt(this.findWsEnd(t));
  }
  findWsEnd(t) {
    for (; t < this.str.length; t++) {
      const r = this.str.charCodeAt(t);
      if (r !== DP && r !== LP && r !== NP && r !== OP && r !== PP)
        break;
    }
    return t;
  }
  substringToPos(t) {
    return this.str.substring(this.pos, this.pos = t);
  }
  eat(t) {
    this.charCode() !== t && this.error("Expect `" + String.fromCharCode(t) + "`"), this.pos++;
  }
  peek() {
    return this.pos < this.str.length ? this.str.charAt(this.pos++) : "";
  }
  error(t) {
    throw new TP.SyntaxError(t, this.str, this.pos);
  }
}
f1.Tokenizer = MP;
const IP = f1, RP = 9, _P = 10, FP = 12, BP = 13, qP = 32, d1 = 33, pd = 35, kh = 38, Ho = 39, h1 = 40, UP = 41, p1 = 42, md = 43, gd = 44, wh = 45, bd = 60, m1 = 62, Bc = 63, jP = 64, Du = 91, yd = 93, Vo = 123, Sh = 124, Ch = 125, $h = 8734, Qi = new Uint8Array(128).map(
  (e, t) => /[a-zA-Z0-9\-]/.test(String.fromCharCode(t)) ? 1 : 0
), Ah = {
  " ": 1,
  "&&": 2,
  "||": 3,
  "|": 4
};
function Wo(e) {
  return e.substringToPos(
    e.findWsEnd(e.pos)
  );
}
function zn(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    const r = e.str.charCodeAt(t);
    if (r >= 128 || Qi[r] === 0)
      break;
  }
  return e.pos === t && e.error("Expect a keyword"), e.substringToPos(t);
}
function Xo(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    const r = e.str.charCodeAt(t);
    if (r < 48 || r > 57)
      break;
  }
  return e.pos === t && e.error("Expect a number"), e.substringToPos(t);
}
function zP(e) {
  const t = e.str.indexOf("'", e.pos + 1);
  return t === -1 && (e.pos = e.str.length, e.error("Expect an apostrophe")), e.substringToPos(t + 1);
}
function Eh(e) {
  let t = null, r = null;
  return e.eat(Vo), t = Xo(e), e.charCode() === gd ? (e.pos++, e.charCode() !== Ch && (r = Xo(e))) : r = t, e.eat(Ch), {
    min: Number(t),
    max: r ? Number(r) : 0
  };
}
function GP(e) {
  let t = null, r = !1;
  switch (e.charCode()) {
    case p1:
      e.pos++, t = {
        min: 0,
        max: 0
      };
      break;
    case md:
      e.pos++, t = {
        min: 1,
        max: 0
      };
      break;
    case Bc:
      e.pos++, t = {
        min: 0,
        max: 1
      };
      break;
    case pd:
      e.pos++, r = !0, e.charCode() === Vo ? t = Eh(e) : e.charCode() === Bc ? (e.pos++, t = {
        min: 0,
        max: 0
      }) : t = {
        min: 1,
        max: 0
      };
      break;
    case Vo:
      t = Eh(e);
      break;
    default:
      return null;
  }
  return {
    type: "Multiplier",
    comma: r,
    min: t.min,
    max: t.max,
    term: null
  };
}
function Gn(e, t) {
  const r = GP(e);
  return r !== null ? (r.term = t, e.charCode() === pd && e.charCodeAt(e.pos - 1) === md ? Gn(e, r) : r) : t;
}
function Rl(e) {
  const t = e.peek();
  return t === "" ? null : {
    type: "Token",
    value: t
  };
}
function HP(e) {
  let t;
  return e.eat(bd), e.eat(Ho), t = zn(e), e.eat(Ho), e.eat(m1), Gn(e, {
    type: "Property",
    name: t
  });
}
function VP(e) {
  let t = null, r = null, n = 1;
  return e.eat(Du), e.charCode() === wh && (e.peek(), n = -1), n == -1 && e.charCode() === $h ? e.peek() : (t = n * Number(Xo(e)), Qi[e.charCode()] !== 0 && (t += zn(e))), Wo(e), e.eat(gd), Wo(e), e.charCode() === $h ? e.peek() : (n = 1, e.charCode() === wh && (e.peek(), n = -1), r = n * Number(Xo(e)), Qi[e.charCode()] !== 0 && (r += zn(e))), e.eat(yd), {
    type: "Range",
    min: t,
    max: r
  };
}
function WP(e) {
  let t, r = null;
  return e.eat(bd), t = zn(e), e.charCode() === h1 && e.nextCharCode() === UP && (e.pos += 2, t += "()"), e.charCodeAt(e.findWsEnd(e.pos)) === Du && (Wo(e), r = VP(e)), e.eat(m1), Gn(e, {
    type: "Type",
    name: t,
    opts: r
  });
}
function XP(e) {
  const t = zn(e);
  return e.charCode() === h1 ? (e.pos++, {
    type: "Function",
    name: t
  }) : Gn(e, {
    type: "Keyword",
    name: t
  });
}
function YP(e, t) {
  function r(a, i) {
    return {
      type: "Group",
      terms: a,
      combinator: i,
      disallowEmpty: !1,
      explicit: !1
    };
  }
  let n;
  for (t = Object.keys(t).sort((a, i) => Ah[a] - Ah[i]); t.length > 0; ) {
    n = t.shift();
    let a = 0, i = 0;
    for (; a < e.length; a++) {
      const s = e[a];
      s.type === "Combinator" && (s.value === n ? (i === -1 && (i = a - 1), e.splice(a, 1), a--) : (i !== -1 && a - i > 1 && (e.splice(
        i,
        a - i,
        r(e.slice(i, a), n)
      ), a = i + 1), i = -1));
    }
    i !== -1 && t.length && e.splice(
      i,
      a - i,
      r(e.slice(i, a), n)
    );
  }
  return n;
}
function g1(e) {
  const t = [], r = {};
  let n, a = null, i = e.pos;
  for (; n = QP(e); )
    n.type !== "Spaces" && (n.type === "Combinator" ? ((a === null || a.type === "Combinator") && (e.pos = i, e.error("Unexpected combinator")), r[n.value] = !0) : a !== null && a.type !== "Combinator" && (r[" "] = !0, t.push({
      type: "Combinator",
      value: " "
    })), t.push(n), a = n, i = e.pos);
  return a !== null && a.type === "Combinator" && (e.pos -= i, e.error("Unexpected combinator")), {
    type: "Group",
    terms: t,
    combinator: YP(t, r) || " ",
    disallowEmpty: !1,
    explicit: !1
  };
}
function KP(e) {
  let t;
  return e.eat(Du), t = g1(e), e.eat(yd), t.explicit = !0, e.charCode() === d1 && (e.pos++, t.disallowEmpty = !0), t;
}
function QP(e) {
  let t = e.charCode();
  if (t < 128 && Qi[t] === 1)
    return XP(e);
  switch (t) {
    case yd:
      break;
    case Du:
      return Gn(e, KP(e));
    case bd:
      return e.nextCharCode() === Ho ? HP(e) : WP(e);
    case Sh:
      return {
        type: "Combinator",
        value: e.substringToPos(
          e.pos + (e.nextCharCode() === Sh ? 2 : 1)
        )
      };
    case kh:
      return e.pos++, e.eat(kh), {
        type: "Combinator",
        value: "&&"
      };
    case gd:
      return e.pos++, {
        type: "Comma"
      };
    case Ho:
      return Gn(e, {
        type: "String",
        value: zP(e)
      });
    case qP:
    case RP:
    case _P:
    case BP:
    case FP:
      return {
        type: "Spaces",
        value: Wo(e)
      };
    case jP:
      return t = e.nextCharCode(), t < 128 && Qi[t] === 1 ? (e.pos++, {
        type: "AtKeyword",
        name: zn(e)
      }) : Rl(e);
    case p1:
    case md:
    case Bc:
    case pd:
    case d1:
      break;
    case Vo:
      if (t = e.nextCharCode(), t < 48 || t > 57)
        return Rl(e);
      break;
    default:
      return Rl(e);
  }
}
function ZP(e) {
  const t = new IP.Tokenizer(e), r = g1(t);
  return t.pos !== e.length && t.error("Unexpected input"), r.terms.length === 1 && r.terms[0].type === "Group" ? r.terms[0] : r;
}
Nu.parse = ZP;
const JP = Nu, ke = { type: "Match" }, Be = { type: "Mismatch" }, vd = { type: "DisallowEmpty" }, eL = 40, tL = 41;
function Re(e, t, r) {
  return t === ke && r === Be || e === ke && t === ke && r === ke ? e : (e.type === "If" && e.else === Be && t === ke && (t = e.then, e = e.match), {
    type: "If",
    match: e,
    then: t,
    else: r
  });
}
function b1(e) {
  return e.length > 2 && e.charCodeAt(e.length - 2) === eL && e.charCodeAt(e.length - 1) === tL;
}
function Th(e) {
  return e.type === "Keyword" || e.type === "AtKeyword" || e.type === "Function" || e.type === "Type" && b1(e.name);
}
function qc(e, t, r) {
  switch (e) {
    case " ": {
      let n = ke;
      for (let a = t.length - 1; a >= 0; a--) {
        const i = t[a];
        n = Re(
          i,
          n,
          Be
        );
      }
      return n;
    }
    case "|": {
      let n = Be, a = null;
      for (let i = t.length - 1; i >= 0; i--) {
        let s = t[i];
        if (Th(s) && (a === null && i > 0 && Th(t[i - 1]) && (a = /* @__PURE__ */ Object.create(null), n = Re(
          {
            type: "Enum",
            map: a
          },
          ke,
          n
        )), a !== null)) {
          const u = (b1(s.name) ? s.name.slice(0, -1) : s.name).toLowerCase();
          if (!(u in a)) {
            a[u] = s;
            continue;
          }
        }
        a = null, n = Re(
          s,
          ke,
          n
        );
      }
      return n;
    }
    case "&&": {
      if (t.length > 5)
        return {
          type: "MatchOnce",
          terms: t,
          all: !0
        };
      let n = Be;
      for (let a = t.length - 1; a >= 0; a--) {
        const i = t[a];
        let s;
        t.length > 1 ? s = qc(
          e,
          t.filter(function(u) {
            return u !== i;
          }),
          !1
        ) : s = ke, n = Re(
          i,
          s,
          n
        );
      }
      return n;
    }
    case "||": {
      if (t.length > 5)
        return {
          type: "MatchOnce",
          terms: t,
          all: !1
        };
      let n = r ? ke : Be;
      for (let a = t.length - 1; a >= 0; a--) {
        const i = t[a];
        let s;
        t.length > 1 ? s = qc(
          e,
          t.filter(function(u) {
            return u !== i;
          }),
          !0
        ) : s = ke, n = Re(
          i,
          s,
          n
        );
      }
      return n;
    }
  }
}
function rL(e) {
  let t = ke, r = xd(e.term);
  if (e.max === 0)
    r = Re(
      r,
      vd,
      Be
    ), t = Re(
      r,
      null,
      // will be a loop
      Be
    ), t.then = Re(
      ke,
      ke,
      t
      // make a loop
    ), e.comma && (t.then.else = Re(
      { type: "Comma", syntax: e },
      t,
      Be
    ));
  else
    for (let n = e.min || 1; n <= e.max; n++)
      e.comma && t !== ke && (t = Re(
        { type: "Comma", syntax: e },
        t,
        Be
      )), t = Re(
        r,
        Re(
          ke,
          ke,
          t
        ),
        Be
      );
  if (e.min === 0)
    t = Re(
      ke,
      ke,
      t
    );
  else
    for (let n = 0; n < e.min - 1; n++)
      e.comma && t !== ke && (t = Re(
        { type: "Comma", syntax: e },
        t,
        Be
      )), t = Re(
        r,
        t,
        Be
      );
  return t;
}
function xd(e) {
  if (typeof e == "function")
    return {
      type: "Generic",
      fn: e
    };
  switch (e.type) {
    case "Group": {
      let t = qc(
        e.combinator,
        e.terms.map(xd),
        !1
      );
      return e.disallowEmpty && (t = Re(
        t,
        vd,
        Be
      )), t;
    }
    case "Multiplier":
      return rL(e);
    case "Type":
    case "Property":
      return {
        type: e.type,
        name: e.name,
        syntax: e
      };
    case "Keyword":
      return {
        type: e.type,
        name: e.name.toLowerCase(),
        syntax: e
      };
    case "AtKeyword":
      return {
        type: e.type,
        name: "@" + e.name.toLowerCase(),
        syntax: e
      };
    case "Function":
      return {
        type: e.type,
        name: e.name.toLowerCase() + "(",
        syntax: e
      };
    case "String":
      return e.value.length === 3 ? {
        type: "Token",
        value: e.value.charAt(1),
        syntax: e
      } : {
        type: e.type,
        value: e.value.substr(1, e.value.length - 2).replace(/\\'/g, "'"),
        syntax: e
      };
    case "Token":
      return {
        type: e.type,
        value: e.value,
        syntax: e
      };
    case "Comma":
      return {
        type: e.type,
        syntax: e
      };
    default:
      throw new Error("Unknown node type:", e.type);
  }
}
function nL(e, t) {
  return typeof e == "string" && (e = JP.parse(e)), {
    type: "MatchGraph",
    match: xd(e),
    syntax: t || null,
    source: e
  };
}
$a.DISALLOW_EMPTY = vd;
$a.MATCH = ke;
$a.MISMATCH = Be;
$a.buildMatchGraph = nL;
var kd = {};
const pe = $a, We = _, { hasOwnProperty: Ph } = Object.prototype, aL = 0, iL = 1, Yo = 2, wd = 3, Lh = "Match", sL = "Mismatch", oL = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)", Nh = 15e3;
function y1(e) {
  let t = null, r = null, n = e;
  for (; n !== null; )
    r = n.prev, n.prev = t, t = n, n = r;
  return t;
}
function _l(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const n = t.charCodeAt(r);
    let a = e.charCodeAt(r);
    if (a >= 65 && a <= 90 && (a = a | 32), a !== n)
      return !1;
  }
  return !0;
}
function uL(e) {
  return e.type !== We.Delim ? !1 : e.value !== "?";
}
function Dh(e) {
  return e === null ? !0 : e.type === We.Comma || e.type === We.Function || e.type === We.LeftParenthesis || e.type === We.LeftSquareBracket || e.type === We.LeftCurlyBracket || uL(e);
}
function Oh(e) {
  return e === null ? !0 : e.type === We.RightParenthesis || e.type === We.RightSquareBracket || e.type === We.RightCurlyBracket || e.type === We.Delim && e.value === "/";
}
function v1(e, t, r) {
  function n() {
    do
      S++, C = S < e.length ? e[S] : null;
    while (C !== null && (C.type === We.WhiteSpace || C.type === We.Comment));
  }
  function a(y) {
    const D = S + y;
    return D < e.length ? e[D] : null;
  }
  function i(y, D) {
    return {
      nextState: y,
      matchStack: T,
      syntaxStack: f,
      thenStack: d,
      tokenIndex: S,
      prev: D
    };
  }
  function s(y) {
    d = {
      nextState: y,
      matchStack: T,
      syntaxStack: f,
      prev: d
    };
  }
  function u(y) {
    h = i(y, h);
  }
  function l() {
    T = {
      type: iL,
      syntax: t.syntax,
      token: C,
      prev: T
    }, n(), p = null, S > P && (P = S);
  }
  function o() {
    f = {
      syntax: t.syntax,
      opts: t.syntax.opts || f !== null && f.opts || null,
      prev: f
    }, T = {
      type: Yo,
      syntax: t.syntax,
      token: T.token,
      prev: T
    };
  }
  function c() {
    T.type === Yo ? T = T.prev : T = {
      type: wd,
      syntax: f.syntax,
      token: T.token,
      prev: T
    }, f = f.prev;
  }
  let f = null, d = null, h = null, p = null, g = 0, x = null, C = null, S = -1, P = 0, T = {
    type: aL,
    syntax: null,
    token: null,
    prev: null
  };
  for (n(); x === null && ++g < Nh; )
    switch (t.type) {
      case "Match":
        if (d === null) {
          if (C !== null && (S !== e.length - 1 || C.value !== "\\0" && C.value !== "\\9")) {
            t = pe.MISMATCH;
            break;
          }
          x = Lh;
          break;
        }
        if (t = d.nextState, t === pe.DISALLOW_EMPTY)
          if (d.matchStack === T) {
            t = pe.MISMATCH;
            break;
          } else
            t = pe.MATCH;
        for (; d.syntaxStack !== f; )
          c();
        d = d.prev;
        break;
      case "Mismatch":
        if (p !== null && p !== !1)
          (h === null || S > h.tokenIndex) && (h = p, p = !1);
        else if (h === null) {
          x = sL;
          break;
        }
        t = h.nextState, d = h.thenStack, f = h.syntaxStack, T = h.matchStack, S = h.tokenIndex, C = S < e.length ? e[S] : null, h = h.prev;
        break;
      case "MatchGraph":
        t = t.match;
        break;
      case "If":
        t.else !== pe.MISMATCH && u(t.else), t.then !== pe.MATCH && s(t.then), t = t.match;
        break;
      case "MatchOnce":
        t = {
          type: "MatchOnceBuffer",
          syntax: t,
          index: 0,
          mask: 0
        };
        break;
      case "MatchOnceBuffer": {
        const I = t.syntax.terms;
        if (t.index === I.length) {
          if (t.mask === 0 || t.syntax.all) {
            t = pe.MISMATCH;
            break;
          }
          t = pe.MATCH;
          break;
        }
        if (t.mask === (1 << I.length) - 1) {
          t = pe.MATCH;
          break;
        }
        for (; t.index < I.length; t.index++) {
          const k = 1 << t.index;
          if (!(t.mask & k)) {
            u(t), s({
              type: "AddMatchOnce",
              syntax: t.syntax,
              mask: t.mask | k
            }), t = I[t.index++];
            break;
          }
        }
        break;
      }
      case "AddMatchOnce":
        t = {
          type: "MatchOnceBuffer",
          syntax: t.syntax,
          index: 0,
          mask: t.mask
        };
        break;
      case "Enum":
        if (C !== null) {
          let I = C.value.toLowerCase();
          if (I.indexOf("\\") !== -1 && (I = I.replace(/\\[09].*$/, "")), Ph.call(t.map, I)) {
            t = t.map[I];
            break;
          }
        }
        t = pe.MISMATCH;
        break;
      case "Generic": {
        const I = f !== null ? f.opts : null, k = S + Math.floor(t.fn(C, a, I));
        if (!isNaN(k) && k > S) {
          for (; S < k; )
            l();
          t = pe.MATCH;
        } else
          t = pe.MISMATCH;
        break;
      }
      case "Type":
      case "Property": {
        const I = t.type === "Type" ? "types" : "properties", k = Ph.call(r, I) ? r[I][t.name] : null;
        if (!k || !k.match)
          throw new Error(
            "Bad syntax reference: " + (t.type === "Type" ? "<" + t.name + ">" : "<'" + t.name + "'>")
          );
        if (p !== !1 && C !== null && t.type === "Type" && // https://drafts.csswg.org/css-values-4/#custom-idents
        // When parsing positionally-ambiguous keywords in a property value, a <custom-ident> production
        // can only claim the keyword if no other unfulfilled production can claim it.
        (t.name === "custom-ident" && C.type === We.Ident || // https://drafts.csswg.org/css-values-4/#lengths
        // ... if a `0` could be parsed as either a <number> or a <length> in a property (such as line-height),
        // it must parse as a <number>
        t.name === "length" && C.value === "0")) {
          p === null && (p = i(t, h)), t = pe.MISMATCH;
          break;
        }
        o(), t = k.match;
        break;
      }
      case "Keyword": {
        const I = t.name;
        if (C !== null) {
          let k = C.value;
          if (k.indexOf("\\") !== -1 && (k = k.replace(/\\[09].*$/, "")), _l(k, I)) {
            l(), t = pe.MATCH;
            break;
          }
        }
        t = pe.MISMATCH;
        break;
      }
      case "AtKeyword":
      case "Function":
        if (C !== null && _l(C.value, t.name)) {
          l(), t = pe.MATCH;
          break;
        }
        t = pe.MISMATCH;
        break;
      case "Token":
        if (C !== null && C.value === t.value) {
          l(), t = pe.MATCH;
          break;
        }
        t = pe.MISMATCH;
        break;
      case "Comma":
        C !== null && C.type === We.Comma ? Dh(T.token) ? t = pe.MISMATCH : (l(), t = Oh(C) ? pe.MISMATCH : pe.MATCH) : t = Dh(T.token) || Oh(C) ? pe.MATCH : pe.MISMATCH;
        break;
      case "String":
        let y = "", D = S;
        for (; D < e.length && y.length < t.value.length; D++)
          y += e[D].value;
        if (_l(y, t.value)) {
          for (; S < D; )
            l();
          t = pe.MATCH;
        } else
          t = pe.MISMATCH;
        break;
      default:
        throw new Error("Unknown node type: " + t.type);
    }
  switch (x) {
    case null:
      console.warn("[csstree-match] BREAK after " + Nh + " iterations"), x = oL, T = null;
      break;
    case Lh:
      for (; f !== null; )
        c();
      break;
    default:
      T = null;
  }
  return {
    tokens: e,
    reason: x,
    iterations: g,
    match: T,
    longestMatch: P
  };
}
function lL(e, t, r) {
  const n = v1(e, t, r || {});
  if (n.match !== null) {
    let a = y1(n.match).prev;
    for (n.match = []; a !== null; ) {
      switch (a.type) {
        case Yo:
        case wd:
          n.match.push({
            type: a.type,
            syntax: a.syntax
          });
          break;
        default:
          n.match.push({
            token: a.token.value,
            node: a.token.node
          });
          break;
      }
      a = a.prev;
    }
  }
  return n;
}
function cL(e, t, r) {
  const n = v1(e, t, r || {});
  if (n.match === null)
    return n;
  let a = n.match, i = n.match = {
    syntax: t.syntax || null,
    match: []
  };
  const s = [i];
  for (a = y1(a).prev; a !== null; ) {
    switch (a.type) {
      case Yo:
        i.match.push(i = {
          syntax: a.syntax,
          match: []
        }), s.push(i);
        break;
      case wd:
        s.pop(), i = s[s.length - 1];
        break;
      default:
        i.match.push({
          syntax: a.syntax || null,
          token: a.token.value,
          node: a.token.node
        });
    }
    a = a.prev;
  }
  return n;
}
kd.matchAsList = lL;
kd.matchAsTree = cL;
var bs = {};
function x1(e) {
  function t(a) {
    return a === null ? !1 : a.type === "Type" || a.type === "Property" || a.type === "Keyword";
  }
  function r(a) {
    if (Array.isArray(a.match)) {
      for (let i = 0; i < a.match.length; i++)
        if (r(a.match[i]))
          return t(a.syntax) && n.unshift(a.syntax), !0;
    } else if (a.node === e)
      return n = t(a.syntax) ? [a.syntax] : [], !0;
    return !1;
  }
  let n = null;
  return this.matched !== null && r(this.matched), n;
}
function fL(e, t) {
  return Sd(this, e, (r) => r.type === "Type" && r.name === t);
}
function dL(e, t) {
  return Sd(this, e, (r) => r.type === "Property" && r.name === t);
}
function hL(e) {
  return Sd(this, e, (t) => t.type === "Keyword");
}
function Sd(e, t, r) {
  const n = x1.call(e, t);
  return n === null ? !1 : n.some(r);
}
bs.getTrace = x1;
bs.isKeyword = hL;
bs.isProperty = dL;
bs.isType = fL;
var k1 = {};
const pL = Jr;
function w1(e) {
  return "node" in e ? e.node : w1(e.match[0]);
}
function S1(e) {
  return "node" in e ? e.node : S1(e.match[e.match.length - 1]);
}
function mL(e, t, r, n, a) {
  function i(u) {
    if (u.syntax !== null && u.syntax.type === n && u.syntax.name === a) {
      const l = w1(u), o = S1(u);
      e.syntax.walk(t, function(c, f, d) {
        if (c === l) {
          const h = new pL.List();
          do {
            if (h.appendData(f.data), f.data === o)
              break;
            f = f.next;
          } while (f !== null);
          s.push({
            parent: d,
            nodes: h
          });
        }
      });
    }
    Array.isArray(u.match) && u.match.forEach(i);
  }
  const s = [];
  return r.matched !== null && i(r.matched), s;
}
k1.matchFragments = mL;
var C1 = {};
const gL = Jr, { hasOwnProperty: Hi } = Object.prototype;
function Fl(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && e >= 0;
}
function Mh(e) {
  return !!e && Fl(e.offset) && Fl(e.line) && Fl(e.column);
}
function bL(e, t) {
  return function(n, a) {
    if (!n || n.constructor !== Object)
      return a(n, "Type of node should be an Object");
    for (let i in n) {
      let s = !0;
      if (Hi.call(n, i) !== !1) {
        if (i === "type")
          n.type !== e && a(n, "Wrong node type `" + n.type + "`, expected `" + e + "`");
        else if (i === "loc") {
          if (n.loc === null)
            continue;
          if (n.loc && n.loc.constructor === Object)
            if (typeof n.loc.source != "string")
              i += ".source";
            else if (!Mh(n.loc.start))
              i += ".start";
            else if (!Mh(n.loc.end))
              i += ".end";
            else
              continue;
          s = !1;
        } else if (t.hasOwnProperty(i)) {
          s = !1;
          for (let u = 0; !s && u < t[i].length; u++) {
            const l = t[i][u];
            switch (l) {
              case String:
                s = typeof n[i] == "string";
                break;
              case Boolean:
                s = typeof n[i] == "boolean";
                break;
              case null:
                s = n[i] === null;
                break;
              default:
                typeof l == "string" ? s = n[i] && n[i].type === l : Array.isArray(l) && (s = n[i] instanceof gL.List);
            }
          }
        } else
          a(n, "Unknown field `" + i + "` for " + e + " node type");
        s || a(n, "Bad value for `" + e + "." + i + "`");
      }
    }
    for (const i in t)
      Hi.call(t, i) && Hi.call(n, i) === !1 && a(n, "Field `" + e + "." + i + "` is missed");
  };
}
function yL(e, t) {
  const r = t.structure, n = {
    type: String,
    loc: !0
  }, a = {
    type: '"' + e + '"'
  };
  for (const i in r) {
    if (Hi.call(r, i) === !1)
      continue;
    const s = [], u = n[i] = Array.isArray(r[i]) ? r[i].slice() : [r[i]];
    for (let l = 0; l < u.length; l++) {
      const o = u[l];
      if (o === String || o === Boolean)
        s.push(o.name);
      else if (o === null)
        s.push("null");
      else if (typeof o == "string")
        s.push("<" + o + ">");
      else if (Array.isArray(o))
        s.push("List");
      else
        throw new Error("Wrong value `" + o + "` in `" + e + "." + i + "` structure definition");
    }
    a[i] = s.join(" | ");
  }
  return {
    docs: a,
    check: bL(e, n)
  };
}
function vL(e) {
  const t = {};
  if (e.node) {
    for (const r in e.node)
      if (Hi.call(e.node, r)) {
        const n = e.node[r];
        if (n.structure)
          t[r] = yL(r, n);
        else
          throw new Error("Missed `structure` field in `" + r + "` node type definition");
      }
  }
  return t;
}
C1.getStructureFromConfig = vL;
var Cd = {};
const _i = function() {
};
function Ih(e) {
  return typeof e == "function" ? e : _i;
}
function xL(e, t, r) {
  function n(s) {
    switch (a.call(r, s), s.type) {
      case "Group":
        s.terms.forEach(n);
        break;
      case "Multiplier":
        n(s.term);
        break;
      case "Type":
      case "Property":
      case "Keyword":
      case "AtKeyword":
      case "Function":
      case "String":
      case "Token":
      case "Comma":
        break;
      default:
        throw new Error("Unknown type: " + s.type);
    }
    i.call(r, s);
  }
  let a = _i, i = _i;
  if (typeof t == "function" ? a = t : t && (a = Ih(t.enter), i = Ih(t.leave)), a === _i && i === _i)
    throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
  n(e);
}
Cd.walk = xL;
const En = sd, mi = en, kL = cd, Rh = xP, wL = $P, Uc = $a, _h = kd, SL = bs, Fh = k1, CL = C1, $L = Nu, $1 = Tu, AL = Cd, EL = Uc.buildMatchGraph(kL.cssWideKeywords.join(" | "));
function jc(e, t, r) {
  const n = {};
  for (const a in e)
    e[a].syntax && (n[a] = r ? e[a].syntax : $1.generate(e[a].syntax, { compact: t }));
  return n;
}
function TL(e, t, r) {
  const n = {};
  for (const [a, i] of Object.entries(e))
    n[a] = {
      prelude: i.prelude && (r ? i.prelude.syntax : $1.generate(i.prelude.syntax, { compact: t })),
      descriptors: i.descriptors && jc(i.descriptors, t, r)
    };
  return n;
}
function PL(e) {
  for (let t = 0; t < e.length; t++)
    if (e[t].value.toLowerCase() === "var(")
      return !0;
  return !1;
}
function St(e, t, r) {
  return {
    matched: e,
    iterations: r,
    error: t,
    ...SL
  };
}
function kn(e, t, r, n) {
  const a = wL(r, e.syntax);
  let i;
  return PL(a) ? St(null, new Error("Matching for a tree with var() is not supported")) : (n && (i = _h.matchAsTree(a, e.cssWideKeywordsSyntax, e)), (!n || !i.match) && (i = _h.matchAsTree(a, t.match, e), !i.match) ? St(
    null,
    new En.SyntaxMatchError(i.reason, t.syntax, r, i),
    i.iterations
  ) : St(i.match, null, i.iterations));
}
let LL = class {
  constructor(t, r, n) {
    if (this.cssWideKeywordsSyntax = EL, this.syntax = r, this.generic = !1, this.atrules = /* @__PURE__ */ Object.create(null), this.properties = /* @__PURE__ */ Object.create(null), this.types = /* @__PURE__ */ Object.create(null), this.structure = n || CL.getStructureFromConfig(t), t) {
      if (t.types)
        for (const a in t.types)
          this.addType_(a, t.types[a]);
      if (t.generic) {
        this.generic = !0;
        for (const a in Rh)
          this.addType_(a, Rh[a]);
      }
      if (t.atrules)
        for (const a in t.atrules)
          this.addAtrule_(a, t.atrules[a]);
      if (t.properties)
        for (const a in t.properties)
          this.addProperty_(a, t.properties[a]);
    }
  }
  checkStructure(t) {
    function r(i, s) {
      a.push({ node: i, message: s });
    }
    const n = this.structure, a = [];
    return this.syntax.walk(t, function(i) {
      n.hasOwnProperty(i.type) ? n[i.type].check(i, r) : r(i, "Unknown node type `" + i.type + "`");
    }), a.length ? a : !1;
  }
  createDescriptor(t, r, n, a = null) {
    const i = {
      type: r,
      name: n
    }, s = {
      type: r,
      name: n,
      parent: a,
      serializable: typeof t == "string" || t && typeof t.type == "string",
      syntax: null,
      match: null
    };
    return typeof t == "function" ? s.match = Uc.buildMatchGraph(t, i) : (typeof t == "string" ? Object.defineProperty(s, "syntax", {
      get() {
        return Object.defineProperty(s, "syntax", {
          value: $L.parse(t)
        }), s.syntax;
      }
    }) : s.syntax = t, Object.defineProperty(s, "match", {
      get() {
        return Object.defineProperty(s, "match", {
          value: Uc.buildMatchGraph(s.syntax, i)
        }), s.match;
      }
    })), s;
  }
  addAtrule_(t, r) {
    r && (this.atrules[t] = {
      type: "Atrule",
      name: t,
      prelude: r.prelude ? this.createDescriptor(r.prelude, "AtrulePrelude", t) : null,
      descriptors: r.descriptors ? Object.keys(r.descriptors).reduce(
        (n, a) => (n[a] = this.createDescriptor(r.descriptors[a], "AtruleDescriptor", a, t), n),
        /* @__PURE__ */ Object.create(null)
      ) : null
    });
  }
  addProperty_(t, r) {
    r && (this.properties[t] = this.createDescriptor(r, "Property", t));
  }
  addType_(t, r) {
    r && (this.types[t] = this.createDescriptor(r, "Type", t));
  }
  checkAtruleName(t) {
    if (!this.getAtrule(t))
      return new En.SyntaxReferenceError("Unknown at-rule", "@" + t);
  }
  checkAtrulePrelude(t, r) {
    const n = this.checkAtruleName(t);
    if (n)
      return n;
    const a = this.getAtrule(t);
    if (!a.prelude && r)
      return new SyntaxError("At-rule `@" + t + "` should not contain a prelude");
    if (a.prelude && !r && !kn(this, a.prelude, "", !1).matched)
      return new SyntaxError("At-rule `@" + t + "` should contain a prelude");
  }
  checkAtruleDescriptorName(t, r) {
    const n = this.checkAtruleName(t);
    if (n)
      return n;
    const a = this.getAtrule(t), i = mi.keyword(r);
    if (!a.descriptors)
      return new SyntaxError("At-rule `@" + t + "` has no known descriptors");
    if (!a.descriptors[i.name] && !a.descriptors[i.basename])
      return new En.SyntaxReferenceError("Unknown at-rule descriptor", r);
  }
  checkPropertyName(t) {
    if (!this.getProperty(t))
      return new En.SyntaxReferenceError("Unknown property", t);
  }
  matchAtrulePrelude(t, r) {
    const n = this.checkAtrulePrelude(t, r);
    if (n)
      return St(null, n);
    const a = this.getAtrule(t);
    return a.prelude ? kn(this, a.prelude, r || "", !1) : St(null, null);
  }
  matchAtruleDescriptor(t, r, n) {
    const a = this.checkAtruleDescriptorName(t, r);
    if (a)
      return St(null, a);
    const i = this.getAtrule(t), s = mi.keyword(r);
    return kn(this, i.descriptors[s.name] || i.descriptors[s.basename], n, !1);
  }
  matchDeclaration(t) {
    return t.type !== "Declaration" ? St(null, new Error("Not a Declaration node")) : this.matchProperty(t.property, t.value);
  }
  matchProperty(t, r) {
    if (mi.property(t).custom)
      return St(null, new Error("Lexer matching doesn't applicable for custom properties"));
    const n = this.checkPropertyName(t);
    return n ? St(null, n) : kn(this, this.getProperty(t), r, !0);
  }
  matchType(t, r) {
    const n = this.getType(t);
    return n ? kn(this, n, r, !1) : St(null, new En.SyntaxReferenceError("Unknown type", t));
  }
  match(t, r) {
    return typeof t != "string" && (!t || !t.type) ? St(null, new En.SyntaxReferenceError("Bad syntax")) : ((typeof t == "string" || !t.match) && (t = this.createDescriptor(t, "Type", "anonymous")), kn(this, t, r, !1));
  }
  findValueFragments(t, r, n, a) {
    return Fh.matchFragments(this, r, this.matchProperty(t, r), n, a);
  }
  findDeclarationValueFragments(t, r, n) {
    return Fh.matchFragments(this, t.value, this.matchDeclaration(t), r, n);
  }
  findAllFragments(t, r, n) {
    const a = [];
    return this.syntax.walk(t, {
      visit: "Declaration",
      enter: (i) => {
        a.push.apply(a, this.findDeclarationValueFragments(i, r, n));
      }
    }), a;
  }
  getAtrule(t, r = !0) {
    const n = mi.keyword(t);
    return (n.vendor && r ? this.atrules[n.name] || this.atrules[n.basename] : this.atrules[n.name]) || null;
  }
  getAtrulePrelude(t, r = !0) {
    const n = this.getAtrule(t, r);
    return n && n.prelude || null;
  }
  getAtruleDescriptor(t, r) {
    return this.atrules.hasOwnProperty(t) && this.atrules.declarators && this.atrules[t].declarators[r] || null;
  }
  getProperty(t, r = !0) {
    const n = mi.property(t);
    return (n.vendor && r ? this.properties[n.name] || this.properties[n.basename] : this.properties[n.name]) || null;
  }
  getType(t) {
    return hasOwnProperty.call(this.types, t) ? this.types[t] : null;
  }
  validate() {
    function t(a, i, s, u) {
      if (s.has(i))
        return s.get(i);
      s.set(i, !1), u.syntax !== null && AL.walk(u.syntax, function(l) {
        if (l.type !== "Type" && l.type !== "Property")
          return;
        const o = l.type === "Type" ? a.types : a.properties, c = l.type === "Type" ? r : n;
        (!hasOwnProperty.call(o, l.name) || t(a, l.name, c, o[l.name])) && s.set(i, !0);
      }, this);
    }
    let r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
    for (const a in this.types)
      t(this, a, r, this.types[a]);
    for (const a in this.properties)
      t(this, a, n, this.properties[a]);
    return r = [...r.keys()].filter((a) => r.get(a)), n = [...n.keys()].filter((a) => n.get(a)), r.length || n.length ? {
      types: r,
      properties: n
    } : null;
  }
  dump(t, r) {
    return {
      generic: this.generic,
      types: jc(this.types, !r, t),
      properties: jc(this.properties, !r, t),
      atrules: TL(this.atrules, !r, t)
    };
  }
  toString() {
    return JSON.stringify(this.dump());
  }
};
id.Lexer = LL;
const { hasOwnProperty: _n } = Object.prototype, NL = {
  generic: !0,
  types: zc,
  atrules: {
    prelude: qh,
    descriptors: qh
  },
  properties: zc,
  parseContext: DL,
  scope: E1,
  atrule: ["parse"],
  pseudo: ["parse"],
  node: ["name", "structure", "parse", "generate", "walkContext"]
};
function Ou(e) {
  return e && e.constructor === Object;
}
function A1(e) {
  return Ou(e) ? { ...e } : e;
}
function DL(e, t) {
  return Object.assign(e, t);
}
function E1(e, t) {
  for (const r in t)
    _n.call(t, r) && (Ou(e[r]) ? E1(e[r], t[r]) : e[r] = A1(t[r]));
  return e;
}
function Bh(e, t) {
  return typeof t == "string" && /^\s*\|/.test(t) ? typeof e == "string" ? e + t : t.replace(/^\s*\|\s*/, "") : t || null;
}
function zc(e, t) {
  if (typeof t == "string")
    return Bh(e, t);
  const r = { ...e };
  for (let n in t)
    _n.call(t, n) && (r[n] = Bh(_n.call(e, n) ? e[n] : void 0, t[n]));
  return r;
}
function qh(e, t) {
  const r = zc(e, t);
  return !Ou(r) || Object.keys(r).length ? r : null;
}
function Fi(e, t, r) {
  for (const n in r)
    if (_n.call(r, n) !== !1) {
      if (r[n] === !0)
        _n.call(t, n) && (e[n] = A1(t[n]));
      else if (r[n]) {
        if (typeof r[n] == "function") {
          const a = r[n];
          e[n] = a({}, e[n]), e[n] = a(e[n] || {}, t[n]);
        } else if (Ou(r[n])) {
          const a = {};
          for (let i in e[n])
            a[i] = Fi({}, e[n][i], r[n]);
          for (let i in t[n])
            a[i] = Fi(a[i] || {}, t[n][i], r[n]);
          e[n] = a;
        } else if (Array.isArray(r[n])) {
          const a = {}, i = r[n].reduce(function(s, u) {
            return s[u] = !0, s;
          }, {});
          for (const [s, u] of Object.entries(e[n] || {}))
            a[s] = {}, u && Fi(a[s], u, i);
          for (const s in t[n])
            _n.call(t[n], s) && (a[s] || (a[s] = {}), t[n] && t[n][s] && Fi(a[s], t[n][s], i));
          e[n] = a;
        }
      }
    }
  return e;
}
const OL = (e, t) => Fi(e, t, NL);
var ML = OL;
const IL = j, RL = Yb, _L = Zb, FL = r1, BL = n1, Uh = id, Gc = ML;
function T1(e) {
  const t = RL.createParser(e), r = BL.createWalker(e), n = _L.createGenerator(e), { fromPlainObject: a, toPlainObject: i } = FL.createConvertor(r), s = {
    lexer: null,
    createLexer: (u) => new Uh.Lexer(u, s, s.lexer.structure),
    tokenize: IL.tokenize,
    parse: t,
    generate: n,
    walk: r,
    find: r.find,
    findLast: r.findLast,
    findAll: r.findAll,
    fromPlainObject: a,
    toPlainObject: i,
    fork(u) {
      const l = Gc({}, e);
      return T1(
        typeof u == "function" ? u(l, Object.assign) : Gc(l, u)
      );
    }
  };
  return s.lexer = new Uh.Lexer({
    generic: !0,
    types: e.types,
    atrules: e.atrules,
    properties: e.properties,
    node: e.node
  }, s), s;
}
const qL = (e) => T1(Gc({}, e));
var P1 = qL, UL = {
  generic: !0,
  types: {
    "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
    "alpha-value": "<number>|<percentage>",
    "angle-percentage": "<angle>|<percentage>",
    "angular-color-hint": "<angle-percentage>",
    "angular-color-stop": "<color>&&<color-stop-angle>?",
    "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
    "animateable-feature": "scroll-position|contents|<custom-ident>",
    attachment: "scroll|fixed|local",
    "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
    "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
    "attr-modifier": "i|s",
    "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
    "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
    "auto-track-list": "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
    "baseline-position": "[first|last]? baseline",
    "basic-shape": "<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
    "bg-image": "none|<image>",
    "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
    "bg-position": "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
    "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
    "blur()": "blur( <length> )",
    "blend-mode": "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
    box: "border-box|padding-box|content-box",
    "brightness()": "brightness( <number-percentage> )",
    "calc()": "calc( <calc-sum> )",
    "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
    "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
    "calc-value": "<number>|<dimension>|<percentage>|( <calc-sum> )",
    "cf-final-image": "<image>|<color>",
    "cf-mixing-image": "<percentage>?&&<image>",
    "circle()": "circle( [<shape-radius>]? [at <position>]? )",
    "clamp()": "clamp( <calc-sum>#{3} )",
    "class-selector": "'.' <ident-token>",
    "clip-source": "<url>",
    color: "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>",
    "color-stop": "<color-stop-length>|<color-stop-angle>",
    "color-stop-angle": "<angle-percentage>{1,2}",
    "color-stop-length": "<length-percentage>{1,2}",
    "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
    combinator: "'>'|'+'|'~'|['||']",
    "common-lig-values": "[common-ligatures|no-common-ligatures]",
    "compat-auto": "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
    "composite-style": "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
    "compositing-operator": "add|subtract|intersect|exclude",
    "compound-selector": "[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!",
    "compound-selector-list": "<compound-selector>#",
    "complex-selector": "<compound-selector> [<combinator>? <compound-selector>]*",
    "complex-selector-list": "<complex-selector>#",
    "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
    "contextual-alt-values": "[contextual|no-contextual]",
    "content-distribution": "space-between|space-around|space-evenly|stretch",
    "content-list": "[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+",
    "content-position": "center|start|end|flex-start|flex-end",
    "content-replacement": "<image>",
    "contrast()": "contrast( [<number-percentage>] )",
    counter: "<counter()>|<counters()>",
    "counter()": "counter( <counter-name> , <counter-style>? )",
    "counter-name": "<custom-ident>",
    "counter-style": "<counter-style-name>|symbols( )",
    "counter-style-name": "<custom-ident>",
    "counters()": "counters( <counter-name> , <string> , <counter-style>? )",
    "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )",
    "cubic-bezier-timing-function": "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
    "deprecated-system-color": "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
    "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]",
    "display-box": "contents|none",
    "display-inside": "flow|flow-root|table|flex|grid|ruby",
    "display-internal": "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
    "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
    "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item",
    "display-outside": "block|inline|run-in",
    "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
    "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]",
    "east-asian-width-values": "[full-width|proportional-width]",
    "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
    "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
    "ending-shape": "circle|ellipse",
    "env()": "env( <custom-ident> , <declaration-value>? )",
    "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?",
    "family-name": "<string>|<custom-ident>+",
    "feature-tag-value": "<string> [<integer>|on|off]?",
    "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
    "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'",
    "feature-value-block-list": "<feature-value-block>+",
    "feature-value-declaration": "<custom-ident> : <integer>+ ;",
    "feature-value-declaration-list": "<feature-value-declaration>",
    "feature-value-name": "<custom-ident>",
    "fill-rule": "nonzero|evenodd",
    "filter-function": "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
    "filter-function-list": "[<filter-function>|<url>]+",
    "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
    "fit-content()": "fit-content( [<length>|<percentage>] )",
    "fixed-breadth": "<length-percentage>",
    "fixed-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <fixed-size>]+ <line-names>? )",
    "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
    "font-stretch-absolute": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
    "font-variant-css21": "[normal|small-caps]",
    "font-weight-absolute": "normal|bold|<number [1,1000]>",
    "frequency-percentage": "<frequency>|<percentage>",
    "general-enclosed": "[<function-token> <any-value> )]|( <ident> <any-value> )",
    "generic-family": "serif|sans-serif|cursive|fantasy|monospace|-apple-system",
    "generic-name": "serif|sans-serif|cursive|fantasy|monospace",
    "geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
    gradient: "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>",
    "grayscale()": "grayscale( <number-percentage> )",
    "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
    "historical-lig-values": "[historical-ligatures|no-historical-ligatures]",
    "hsl()": "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
    "hsla()": "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
    hue: "<number>|<angle>",
    "hue-rotate()": "hue-rotate( <angle> )",
    "hwb()": "hwb( [<hue>|none] [<percentage>|none] [<percentage>|none] [/ [<alpha-value>|none]]? )",
    image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
    "image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
    "image-set()": "image-set( <image-set-option># )",
    "image-set-option": "[<image>|<string>] [<resolution>||type( <string> )]",
    "image-src": "<url>|<string>",
    "image-tags": "ltr|rtl",
    "inflexible-breadth": "<length>|<percentage>|min-content|max-content|auto",
    "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
    "invert()": "invert( <number-percentage> )",
    "keyframes-name": "<custom-ident>|<string>",
    "keyframe-block": "<keyframe-selector># { <declaration-list> }",
    "keyframe-block-list": "<keyframe-block>+",
    "keyframe-selector": "from|to|<percentage>",
    "layer()": "layer( <layer-name> )",
    "layer-name": "<ident> ['.' <ident>]*",
    "leader()": "leader( <leader-type> )",
    "leader-type": "dotted|solid|space|<string>",
    "length-percentage": "<length>|<percentage>",
    "line-names": "'[' <custom-ident>* ']'",
    "line-name-list": "[<line-names>|<name-repeat>]+",
    "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
    "line-width": "<length>|thin|medium|thick",
    "linear-color-hint": "<length-percentage>",
    "linear-color-stop": "<color> <color-stop-length>?",
    "linear-gradient()": "linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
    "mask-layer": "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
    "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
    "mask-reference": "none|<image>|<mask-source>",
    "mask-source": "<url>",
    "masking-mode": "alpha|luminance|match-source",
    "matrix()": "matrix( <number>#{6} )",
    "matrix3d()": "matrix3d( <number>#{16} )",
    "max()": "max( <calc-sum># )",
    "media-and": "<media-in-parens> [and <media-in-parens>]+",
    "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>",
    "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>",
    "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
    "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>",
    "media-not": "not <media-in-parens>",
    "media-or": "<media-in-parens> [or <media-in-parens>]+",
    "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
    "media-query-list": "<media-query>#",
    "media-type": "<ident>",
    "mf-boolean": "<mf-name>",
    "mf-name": "<ident>",
    "mf-plain": "<mf-name> : <mf-value>",
    "mf-range": "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
    "mf-value": "<number>|<dimension>|<ident>|<ratio>",
    "min()": "min( <calc-sum># )",
    "minmax()": "minmax( [<length>|<percentage>|min-content|max-content|auto] , [<length>|<percentage>|<flex>|min-content|max-content|auto] )",
    "name-repeat": "repeat( [<integer [1,∞]>|auto-fill] , <line-names>+ )",
    "named-color": "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>",
    "namespace-prefix": "<ident>",
    "ns-prefix": "[<ident-token>|'*']? '|'",
    "number-percentage": "<number>|<percentage>",
    "numeric-figure-values": "[lining-nums|oldstyle-nums]",
    "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
    "numeric-spacing-values": "[proportional-nums|tabular-nums]",
    nth: "<an-plus-b>|even|odd",
    "opacity()": "opacity( [<number-percentage>] )",
    "overflow-position": "unsafe|safe",
    "outline-radius": "<length>|<percentage>",
    "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
    "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'",
    "page-margin-box-type": "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
    "page-selector-list": "[<page-selector>#]?",
    "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
    "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
    "path()": "path( [<fill-rule> ,]? <string> )",
    "paint()": "paint( <ident> , <declaration-value>? )",
    "perspective()": "perspective( <length> )",
    "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
    position: "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
    "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'",
    "pseudo-element-selector": "':' <pseudo-class-selector>",
    "pseudo-page": ": [left|right|first|blank]",
    quote: "open-quote|close-quote|no-open-quote|no-close-quote",
    "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
    "relative-selector": "<combinator>? <complex-selector>",
    "relative-selector-list": "<relative-selector>#",
    "relative-size": "larger|smaller",
    "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
    "repeating-conic-gradient()": "repeating-conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
    "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
    "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
    "rgb()": "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
    "rgba()": "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
    "rotate()": "rotate( [<angle>|<zero>] )",
    "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
    "rotateX()": "rotateX( [<angle>|<zero>] )",
    "rotateY()": "rotateY( [<angle>|<zero>] )",
    "rotateZ()": "rotateZ( [<angle>|<zero>] )",
    "saturate()": "saturate( <number-percentage> )",
    "scale()": "scale( <number> , <number>? )",
    "scale3d()": "scale3d( <number> , <number> , <number> )",
    "scaleX()": "scaleX( <number> )",
    "scaleY()": "scaleY( <number> )",
    "scaleZ()": "scaleZ( <number> )",
    "self-position": "center|start|end|self-start|self-end|flex-start|flex-end",
    "shape-radius": "<length-percentage>|closest-side|farthest-side",
    "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
    "skewX()": "skewX( [<angle>|<zero>] )",
    "skewY()": "skewY( [<angle>|<zero>] )",
    "sepia()": "sepia( <number-percentage> )",
    shadow: "inset?&&<length>{2,4}&&<color>?",
    "shadow-t": "[<length>{2,3}&&<color>?]",
    shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
    "shape-box": "<box>|margin-box",
    "side-or-corner": "[left|right]||[top|bottom]",
    "single-animation": "<time>||<easing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]",
    "single-animation-direction": "normal|reverse|alternate|alternate-reverse",
    "single-animation-fill-mode": "none|forwards|backwards|both",
    "single-animation-iteration-count": "infinite|<number>",
    "single-animation-play-state": "running|paused",
    "single-animation-timeline": "auto|none|<timeline-name>",
    "single-transition": "[none|<single-transition-property>]||<time>||<easing-function>||<time>",
    "single-transition-property": "all|<custom-ident>",
    size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
    "step-position": "jump-start|jump-end|jump-none|jump-both|start|end",
    "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )",
    "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
    "supports-condition": "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
    "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>",
    "supports-feature": "<supports-decl>|<supports-selector-fn>",
    "supports-decl": "( <declaration> )",
    "supports-selector-fn": "selector( <complex-selector> )",
    symbol: "<string>|<image>|<custom-ident>",
    target: "<target-counter()>|<target-counters()>|<target-text()>",
    "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
    "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
    "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
    "time-percentage": "<time>|<percentage>",
    "timeline-name": "<custom-ident>|<string>",
    "easing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>",
    "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto",
    "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
    "track-repeat": "repeat( [<integer [1,∞]>] , [<line-names>? <track-size>]+ <line-names>? )",
    "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( [<length>|<percentage>] )",
    "transform-function": "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
    "transform-list": "<transform-function>+",
    "translate()": "translate( <length-percentage> , <length-percentage>? )",
    "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )",
    "translateX()": "translateX( <length-percentage> )",
    "translateY()": "translateY( <length-percentage> )",
    "translateZ()": "translateZ( <length> )",
    "type-or-unit": "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
    "type-selector": "<wq-name>|<ns-prefix>? '*'",
    "var()": "var( <custom-property-name> , <declaration-value>? )",
    "viewport-length": "auto|<length-percentage>",
    "visual-box": "content-box|padding-box|border-box",
    "wq-name": "<ns-prefix>? <ident-token>",
    "-legacy-gradient": "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
    "-legacy-linear-gradient": "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
    "-legacy-repeating-linear-gradient": "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
    "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>",
    "-legacy-radial-gradient": "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
    "-legacy-repeating-radial-gradient": "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
    "-legacy-radial-gradient-arguments": "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
    "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
    "-legacy-radial-gradient-shape": "circle|ellipse",
    "-non-standard-font": "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
    "-non-standard-color": "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
    "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
    "-non-standard-overflow": "-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
    "-non-standard-width": "fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content",
    "-webkit-gradient()": "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
    "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
    "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
    "-webkit-gradient-radius": "<length>|<percentage>",
    "-webkit-gradient-type": "linear|radial",
    "-webkit-mask-box-repeat": "repeat|stretch|round",
    "-webkit-mask-clip-style": "border|border-box|padding|padding-box|content|content-box|text",
    "-ms-filter-function-list": "<-ms-filter-function>+",
    "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
    "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
    "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )",
    "-ms-filter": "<string>",
    age: "child|young|old",
    "attr-name": "<wq-name>",
    "attr-fallback": "<any-value>",
    "bg-clip": "<box>|border|text",
    "border-radius": "<length-percentage>{1,2}",
    bottom: "<length>|auto",
    "generic-voice": "[<age>? <gender> <integer>?]",
    gender: "male|female|neutral",
    "lab()": "lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
    "lch()": "lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
    left: "<length>|auto",
    "mask-image": "<mask-reference>#",
    paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
    ratio: "<number [0,∞]> [/ <number [0,∞]>]?",
    "reversed-counter-name": "reversed( <counter-name> )",
    right: "<length>|auto",
    "svg-length": "<percentage>|<length>|<number>",
    "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
    top: "<length>|auto",
    "track-group": "'(' [<string>* <track-minmax> <string>*]+ ')' ['[' <positive-integer> ']']?|<track-minmax>",
    "track-list-v0": "[<string>* <track-group> <string>*]+|none",
    "track-minmax": "minmax( <track-breadth> , <track-breadth> )|auto|<track-breadth>|fit-content",
    x: "<number>",
    y: "<number>",
    declaration: "<ident-token> : <declaration-value>? ['!' important]?",
    "declaration-list": "[<declaration>? ';']* <declaration>?",
    url: "url( <string> <url-modifier>* )|<url-token>",
    "url-modifier": "<ident>|<function-token> <any-value> )",
    "number-zero-one": "<number [0,1]>",
    "number-one-or-greater": "<number [1,∞]>",
    "positive-integer": "<integer [0,∞]>",
    "-non-standard-display": "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box"
  },
  properties: {
    "--*": "<declaration-value>",
    "-ms-accelerator": "false|true",
    "-ms-block-progression": "tb|rl|bt|lr",
    "-ms-content-zoom-chaining": "none|chained",
    "-ms-content-zooming": "none|zoom",
    "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
    "-ms-content-zoom-limit-max": "<percentage>",
    "-ms-content-zoom-limit-min": "<percentage>",
    "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
    "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
    "-ms-content-zoom-snap-type": "none|proximity|mandatory",
    "-ms-filter": "<string>",
    "-ms-flow-from": "[none|<custom-ident>]#",
    "-ms-flow-into": "[none|<custom-ident>]#",
    "-ms-grid-columns": "none|<track-list>|<auto-track-list>",
    "-ms-grid-rows": "none|<track-list>|<auto-track-list>",
    "-ms-high-contrast-adjust": "auto|none",
    "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
    "-ms-hyphenate-limit-lines": "no-limit|<integer>",
    "-ms-hyphenate-limit-zone": "<percentage>|<length>",
    "-ms-ime-align": "auto|after",
    "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar",
    "-ms-scrollbar-3dlight-color": "<color>",
    "-ms-scrollbar-arrow-color": "<color>",
    "-ms-scrollbar-base-color": "<color>",
    "-ms-scrollbar-darkshadow-color": "<color>",
    "-ms-scrollbar-face-color": "<color>",
    "-ms-scrollbar-highlight-color": "<color>",
    "-ms-scrollbar-shadow-color": "<color>",
    "-ms-scrollbar-track-color": "<color>",
    "-ms-scroll-chaining": "chained|none",
    "-ms-scroll-limit": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
    "-ms-scroll-limit-x-max": "auto|<length>",
    "-ms-scroll-limit-x-min": "<length>",
    "-ms-scroll-limit-y-max": "auto|<length>",
    "-ms-scroll-limit-y-min": "<length>",
    "-ms-scroll-rails": "none|railed",
    "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
    "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
    "-ms-scroll-snap-type": "none|proximity|mandatory",
    "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
    "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
    "-ms-scroll-translation": "none|vertical-to-horizontal",
    "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
    "-ms-touch-select": "grippers|none",
    "-ms-user-select": "none|element|text",
    "-ms-wrap-flow": "auto|both|start|end|maximum|clear",
    "-ms-wrap-margin": "<length>",
    "-ms-wrap-through": "wrap|none",
    "-moz-appearance": "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
    "-moz-binding": "<url>|none",
    "-moz-border-bottom-colors": "<color>+|none",
    "-moz-border-left-colors": "<color>+|none",
    "-moz-border-right-colors": "<color>+|none",
    "-moz-border-top-colors": "<color>+|none",
    "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#",
    "-moz-float-edge": "border-box|content-box|margin-box|padding-box",
    "-moz-force-broken-image-icon": "0|1",
    "-moz-image-region": "<shape>|auto",
    "-moz-orient": "inline|block|horizontal|vertical",
    "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
    "-moz-outline-radius-bottomleft": "<outline-radius>",
    "-moz-outline-radius-bottomright": "<outline-radius>",
    "-moz-outline-radius-topleft": "<outline-radius>",
    "-moz-outline-radius-topright": "<outline-radius>",
    "-moz-stack-sizing": "ignore|stretch-to-fit",
    "-moz-text-blink": "none|blink",
    "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
    "-moz-user-input": "auto|none|enabled|disabled",
    "-moz-user-modify": "read-only|read-write|write-only",
    "-moz-window-dragging": "drag|no-drag",
    "-moz-window-shadow": "default|menu|tooltip|sheet|none",
    "-webkit-appearance": "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
    "-webkit-border-before": "<'border-width'>||<'border-style'>||<color>",
    "-webkit-border-before-color": "<color>",
    "-webkit-border-before-style": "<'border-style'>",
    "-webkit-border-before-width": "<'border-width'>",
    "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?",
    "-webkit-line-clamp": "none|<integer>",
    "-webkit-mask": "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
    "-webkit-mask-attachment": "<attachment>#",
    "-webkit-mask-clip": "[<box>|border|padding|content|text]#",
    "-webkit-mask-composite": "<composite-style>#",
    "-webkit-mask-image": "<mask-reference>#",
    "-webkit-mask-origin": "[<box>|border|padding|content]#",
    "-webkit-mask-position": "<position>#",
    "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#",
    "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#",
    "-webkit-mask-repeat": "<repeat-style>#",
    "-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
    "-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
    "-webkit-mask-size": "<bg-size>#",
    "-webkit-overflow-scrolling": "auto|touch",
    "-webkit-tap-highlight-color": "<color>",
    "-webkit-text-fill-color": "<color>",
    "-webkit-text-stroke": "<length>||<color>",
    "-webkit-text-stroke-color": "<color>",
    "-webkit-text-stroke-width": "<length>",
    "-webkit-touch-callout": "default|none",
    "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only",
    "accent-color": "auto|<color>",
    "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
    "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
    "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
    "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
    all: "initial|inherit|unset|revert|revert-layer",
    animation: "<single-animation>#",
    "animation-delay": "<time>#",
    "animation-direction": "<single-animation-direction>#",
    "animation-duration": "<time>#",
    "animation-fill-mode": "<single-animation-fill-mode>#",
    "animation-iteration-count": "<single-animation-iteration-count>#",
    "animation-name": "[none|<keyframes-name>]#",
    "animation-play-state": "<single-animation-play-state>#",
    "animation-timing-function": "<easing-function>#",
    "animation-timeline": "<single-animation-timeline>#",
    appearance: "none|auto|textfield|menulist-button|<compat-auto>",
    "aspect-ratio": "auto|<ratio>",
    azimuth: "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
    "backdrop-filter": "none|<filter-function-list>",
    "backface-visibility": "visible|hidden",
    background: "[<bg-layer> ,]* <final-bg-layer>",
    "background-attachment": "<attachment>#",
    "background-blend-mode": "<blend-mode>#",
    "background-clip": "<bg-clip>#",
    "background-color": "<color>",
    "background-image": "<bg-image>#",
    "background-origin": "<box>#",
    "background-position": "<bg-position>#",
    "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
    "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
    "background-repeat": "<repeat-style>#",
    "background-size": "<bg-size>#",
    "block-overflow": "clip|ellipsis|<string>",
    "block-size": "<'width'>",
    border: "<line-width>||<line-style>||<color>",
    "border-block": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-color": "<'border-top-color'>{1,2}",
    "border-block-style": "<'border-top-style'>",
    "border-block-width": "<'border-top-width'>",
    "border-block-end": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-end-color": "<'border-top-color'>",
    "border-block-end-style": "<'border-top-style'>",
    "border-block-end-width": "<'border-top-width'>",
    "border-block-start": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-start-color": "<'border-top-color'>",
    "border-block-start-style": "<'border-top-style'>",
    "border-block-start-width": "<'border-top-width'>",
    "border-bottom": "<line-width>||<line-style>||<color>",
    "border-bottom-color": "<'border-top-color'>",
    "border-bottom-left-radius": "<length-percentage>{1,2}",
    "border-bottom-right-radius": "<length-percentage>{1,2}",
    "border-bottom-style": "<line-style>",
    "border-bottom-width": "<line-width>",
    "border-collapse": "collapse|separate",
    "border-color": "<color>{1,4}",
    "border-end-end-radius": "<length-percentage>{1,2}",
    "border-end-start-radius": "<length-percentage>{1,2}",
    "border-image": "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
    "border-image-outset": "[<length>|<number>]{1,4}",
    "border-image-repeat": "[stretch|repeat|round|space]{1,2}",
    "border-image-slice": "<number-percentage>{1,4}&&fill?",
    "border-image-source": "none|<image>",
    "border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
    "border-inline": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-color": "<'border-top-color'>{1,2}",
    "border-inline-style": "<'border-top-style'>",
    "border-inline-width": "<'border-top-width'>",
    "border-inline-end-color": "<'border-top-color'>",
    "border-inline-end-style": "<'border-top-style'>",
    "border-inline-end-width": "<'border-top-width'>",
    "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-start-color": "<'border-top-color'>",
    "border-inline-start-style": "<'border-top-style'>",
    "border-inline-start-width": "<'border-top-width'>",
    "border-left": "<line-width>||<line-style>||<color>",
    "border-left-color": "<color>",
    "border-left-style": "<line-style>",
    "border-left-width": "<line-width>",
    "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
    "border-right": "<line-width>||<line-style>||<color>",
    "border-right-color": "<color>",
    "border-right-style": "<line-style>",
    "border-right-width": "<line-width>",
    "border-spacing": "<length> <length>?",
    "border-start-end-radius": "<length-percentage>{1,2}",
    "border-start-start-radius": "<length-percentage>{1,2}",
    "border-style": "<line-style>{1,4}",
    "border-top": "<line-width>||<line-style>||<color>",
    "border-top-color": "<color>",
    "border-top-left-radius": "<length-percentage>{1,2}",
    "border-top-right-radius": "<length-percentage>{1,2}",
    "border-top-style": "<line-style>",
    "border-top-width": "<line-width>",
    "border-width": "<line-width>{1,4}",
    bottom: "<length>|<percentage>|auto",
    "box-align": "start|center|end|baseline|stretch",
    "box-decoration-break": "slice|clone",
    "box-direction": "normal|reverse|inherit",
    "box-flex": "<number>",
    "box-flex-group": "<integer>",
    "box-lines": "single|multiple",
    "box-ordinal-group": "<integer>",
    "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
    "box-pack": "start|center|end|justify",
    "box-shadow": "none|<shadow>#",
    "box-sizing": "content-box|border-box",
    "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
    "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
    "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
    "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end",
    "caret-color": "auto|<color>",
    clear: "none|left|right|both|inline-start|inline-end",
    clip: "<shape>|auto",
    "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
    color: "<color>",
    "print-color-adjust": "economy|exact",
    "color-scheme": "normal|[light|dark|<custom-ident>]+&&only?",
    "column-count": "<integer>|auto",
    "column-fill": "auto|balance|balance-all",
    "column-gap": "normal|<length-percentage>",
    "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
    "column-rule-color": "<color>",
    "column-rule-style": "<'border-style'>",
    "column-rule-width": "<'border-width'>",
    "column-span": "none|all",
    "column-width": "<length>|auto",
    columns: "<'column-width'>||<'column-count'>",
    contain: "none|strict|content|[size||layout||style||paint]",
    content: "normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?",
    "content-visibility": "visible|auto|hidden",
    "counter-increment": "[<counter-name> <integer>?]+|none",
    "counter-reset": "[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none",
    "counter-set": "[<counter-name> <integer>?]+|none",
    cursor: "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
    direction: "ltr|rtl",
    display: "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
    "empty-cells": "show|hide",
    filter: "none|<filter-function-list>|<-ms-filter-function-list>",
    flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
    "flex-basis": "content|<'width'>",
    "flex-direction": "row|row-reverse|column|column-reverse",
    "flex-flow": "<'flex-direction'>||<'flex-wrap'>",
    "flex-grow": "<number>",
    "flex-shrink": "<number>",
    "flex-wrap": "nowrap|wrap|wrap-reverse",
    float: "left|right|none|inline-start|inline-end",
    font: "[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar",
    "font-family": "[<family-name>|<generic-family>]#",
    "font-feature-settings": "normal|<feature-tag-value>#",
    "font-kerning": "auto|normal|none",
    "font-language-override": "normal|<string>",
    "font-optical-sizing": "auto|none",
    "font-variation-settings": "normal|[<string> <number>]#",
    "font-size": "<absolute-size>|<relative-size>|<length-percentage>",
    "font-size-adjust": "none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]",
    "font-smooth": "auto|never|always|<absolute-size>|<length>",
    "font-stretch": "<font-stretch-absolute>",
    "font-style": "normal|italic|oblique <angle>?",
    "font-synthesis": "none|[weight||style||small-caps]",
    "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
    "font-variant-alternates": "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
    "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
    "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
    "font-variant-ligatures": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
    "font-variant-numeric": "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
    "font-variant-position": "normal|sub|super",
    "font-weight": "<font-weight-absolute>|bolder|lighter",
    "forced-color-adjust": "auto|none",
    gap: "<'row-gap'> <'column-gap'>?",
    grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
    "grid-area": "<grid-line> [/ <grid-line>]{0,3}",
    "grid-auto-columns": "<track-size>+",
    "grid-auto-flow": "[row|column]||dense",
    "grid-auto-rows": "<track-size>+",
    "grid-column": "<grid-line> [/ <grid-line>]?",
    "grid-column-end": "<grid-line>",
    "grid-column-gap": "<length-percentage>",
    "grid-column-start": "<grid-line>",
    "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
    "grid-row": "<grid-line> [/ <grid-line>]?",
    "grid-row-end": "<grid-line>",
    "grid-row-gap": "<length-percentage>",
    "grid-row-start": "<grid-line>",
    "grid-template": "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
    "grid-template-areas": "none|<string>+",
    "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
    "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
    "hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
    height: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "hyphenate-character": "auto|<string>",
    hyphens: "none|manual|auto",
    "image-orientation": "from-image|<angle>|[<angle>? flip]",
    "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
    "image-resolution": "[from-image||<resolution>]&&snap?",
    "ime-mode": "auto|normal|active|inactive|disabled",
    "initial-letter": "normal|[<number> <integer>?]",
    "initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
    "inline-size": "<'width'>",
    "input-security": "auto|none",
    inset: "<'top'>{1,4}",
    "inset-block": "<'top'>{1,2}",
    "inset-block-end": "<'top'>",
    "inset-block-start": "<'top'>",
    "inset-inline": "<'top'>{1,2}",
    "inset-inline-end": "<'top'>",
    "inset-inline-start": "<'top'>",
    isolation: "auto|isolate",
    "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
    "justify-items": "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
    "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
    "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
    left: "<length>|<percentage>|auto",
    "letter-spacing": "normal|<length-percentage>",
    "line-break": "auto|loose|normal|strict|anywhere",
    "line-clamp": "none|<integer>",
    "line-height": "normal|<number>|<length>|<percentage>",
    "line-height-step": "<length>",
    "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
    "list-style-image": "<image>|none",
    "list-style-position": "inside|outside",
    "list-style-type": "<counter-style>|<string>|none",
    margin: "[<length>|<percentage>|auto]{1,4}",
    "margin-block": "<'margin-left'>{1,2}",
    "margin-block-end": "<'margin-left'>",
    "margin-block-start": "<'margin-left'>",
    "margin-bottom": "<length>|<percentage>|auto",
    "margin-inline": "<'margin-left'>{1,2}",
    "margin-inline-end": "<'margin-left'>",
    "margin-inline-start": "<'margin-left'>",
    "margin-left": "<length>|<percentage>|auto",
    "margin-right": "<length>|<percentage>|auto",
    "margin-top": "<length>|<percentage>|auto",
    "margin-trim": "none|in-flow|all",
    mask: "<mask-layer>#",
    "mask-border": "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
    "mask-border-mode": "luminance|alpha",
    "mask-border-outset": "[<length>|<number>]{1,4}",
    "mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
    "mask-border-slice": "<number-percentage>{1,4} fill?",
    "mask-border-source": "none|<image>",
    "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
    "mask-clip": "[<geometry-box>|no-clip]#",
    "mask-composite": "<compositing-operator>#",
    "mask-image": "<mask-reference>#",
    "mask-mode": "<masking-mode>#",
    "mask-origin": "<geometry-box>#",
    "mask-position": "<position>#",
    "mask-repeat": "<repeat-style>#",
    "mask-size": "<bg-size>#",
    "mask-type": "luminance|alpha",
    "masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
    "math-style": "normal|compact",
    "max-block-size": "<'max-width'>",
    "max-height": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "max-inline-size": "<'max-width'>",
    "max-lines": "none|<integer>",
    "max-width": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
    "min-block-size": "<'min-width'>",
    "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "min-inline-size": "<'min-width'>",
    "min-width": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
    "mix-blend-mode": "<blend-mode>|plus-lighter",
    "object-fit": "fill|contain|cover|none|scale-down",
    "object-position": "<position>",
    offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
    "offset-anchor": "auto|<position>",
    "offset-distance": "<length-percentage>",
    "offset-path": "none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]",
    "offset-position": "auto|<position>",
    "offset-rotate": "[auto|reverse]||<angle>",
    opacity: "<alpha-value>",
    order: "<integer>",
    orphans: "<integer>",
    outline: "[<'outline-color'>||<'outline-style'>||<'outline-width'>]",
    "outline-color": "<color>|invert",
    "outline-offset": "<length>",
    "outline-style": "auto|<'border-style'>",
    "outline-width": "<line-width>",
    overflow: "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
    "overflow-anchor": "auto|none",
    "overflow-block": "visible|hidden|clip|scroll|auto",
    "overflow-clip-box": "padding-box|content-box",
    "overflow-clip-margin": "<visual-box>||<length [0,∞]>",
    "overflow-inline": "visible|hidden|clip|scroll|auto",
    "overflow-wrap": "normal|break-word|anywhere",
    "overflow-x": "visible|hidden|clip|scroll|auto",
    "overflow-y": "visible|hidden|clip|scroll|auto",
    "overscroll-behavior": "[contain|none|auto]{1,2}",
    "overscroll-behavior-block": "contain|none|auto",
    "overscroll-behavior-inline": "contain|none|auto",
    "overscroll-behavior-x": "contain|none|auto",
    "overscroll-behavior-y": "contain|none|auto",
    padding: "[<length>|<percentage>]{1,4}",
    "padding-block": "<'padding-left'>{1,2}",
    "padding-block-end": "<'padding-left'>",
    "padding-block-start": "<'padding-left'>",
    "padding-bottom": "<length>|<percentage>",
    "padding-inline": "<'padding-left'>{1,2}",
    "padding-inline-end": "<'padding-left'>",
    "padding-inline-start": "<'padding-left'>",
    "padding-left": "<length>|<percentage>",
    "padding-right": "<length>|<percentage>",
    "padding-top": "<length>|<percentage>",
    "page-break-after": "auto|always|avoid|left|right|recto|verso",
    "page-break-before": "auto|always|avoid|left|right|recto|verso",
    "page-break-inside": "auto|avoid",
    "paint-order": "normal|[fill||stroke||markers]",
    perspective: "none|<length>",
    "perspective-origin": "<position>",
    "place-content": "<'align-content'> <'justify-content'>?",
    "place-items": "<'align-items'> <'justify-items'>?",
    "place-self": "<'align-self'> <'justify-self'>?",
    "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
    position: "static|relative|absolute|sticky|fixed|-webkit-sticky",
    quotes: "none|auto|[<string> <string>]+",
    resize: "none|both|horizontal|vertical|block|inline",
    right: "<length>|<percentage>|auto",
    rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
    "row-gap": "normal|<length-percentage>",
    "ruby-align": "start|center|space-between|space-around",
    "ruby-merge": "separate|collapse|auto",
    "ruby-position": "[alternate||[over|under]]|inter-character",
    scale: "none|<number>{1,3}",
    "scrollbar-color": "auto|<color>{2}",
    "scrollbar-gutter": "auto|stable&&both-edges?",
    "scrollbar-width": "auto|thin|none",
    "scroll-behavior": "auto|smooth",
    "scroll-margin": "<length>{1,4}",
    "scroll-margin-block": "<length>{1,2}",
    "scroll-margin-block-start": "<length>",
    "scroll-margin-block-end": "<length>",
    "scroll-margin-bottom": "<length>",
    "scroll-margin-inline": "<length>{1,2}",
    "scroll-margin-inline-start": "<length>",
    "scroll-margin-inline-end": "<length>",
    "scroll-margin-left": "<length>",
    "scroll-margin-right": "<length>",
    "scroll-margin-top": "<length>",
    "scroll-padding": "[auto|<length-percentage>]{1,4}",
    "scroll-padding-block": "[auto|<length-percentage>]{1,2}",
    "scroll-padding-block-start": "auto|<length-percentage>",
    "scroll-padding-block-end": "auto|<length-percentage>",
    "scroll-padding-bottom": "auto|<length-percentage>",
    "scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
    "scroll-padding-inline-start": "auto|<length-percentage>",
    "scroll-padding-inline-end": "auto|<length-percentage>",
    "scroll-padding-left": "auto|<length-percentage>",
    "scroll-padding-right": "auto|<length-percentage>",
    "scroll-padding-top": "auto|<length-percentage>",
    "scroll-snap-align": "[none|start|end|center]{1,2}",
    "scroll-snap-coordinate": "none|<position>#",
    "scroll-snap-destination": "<position>",
    "scroll-snap-points-x": "none|repeat( <length-percentage> )",
    "scroll-snap-points-y": "none|repeat( <length-percentage> )",
    "scroll-snap-stop": "normal|always",
    "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?",
    "scroll-snap-type-x": "none|mandatory|proximity",
    "scroll-snap-type-y": "none|mandatory|proximity",
    "shape-image-threshold": "<alpha-value>",
    "shape-margin": "<length-percentage>",
    "shape-outside": "none|[<shape-box>||<basic-shape>]|<image>",
    "tab-size": "<integer>|<length>",
    "table-layout": "auto|fixed",
    "text-align": "start|end|left|right|center|justify|match-parent",
    "text-align-last": "auto|start|end|left|right|center|justify",
    "text-combine-upright": "none|all|[digits <integer>?]",
    "text-decoration": "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
    "text-decoration-color": "<color>",
    "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
    "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
    "text-decoration-skip-ink": "auto|all|none",
    "text-decoration-style": "solid|double|dotted|dashed|wavy",
    "text-decoration-thickness": "auto|from-font|<length>|<percentage>",
    "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
    "text-emphasis-color": "<color>",
    "text-emphasis-position": "[over|under]&&[right|left]",
    "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
    "text-indent": "<length-percentage>&&hanging?&&each-line?",
    "text-justify": "auto|inter-character|inter-word|none",
    "text-orientation": "mixed|upright|sideways",
    "text-overflow": "[clip|ellipsis|<string>]{1,2}",
    "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
    "text-shadow": "none|<shadow-t>#",
    "text-size-adjust": "none|auto|<percentage>",
    "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana",
    "text-underline-offset": "auto|<length>|<percentage>",
    "text-underline-position": "auto|from-font|[under||[left|right]]",
    top: "<length>|<percentage>|auto",
    "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
    transform: "none|<transform-list>",
    "transform-box": "content-box|border-box|fill-box|stroke-box|view-box",
    "transform-origin": "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
    "transform-style": "flat|preserve-3d",
    transition: "<single-transition>#",
    "transition-delay": "<time>#",
    "transition-duration": "<time>#",
    "transition-property": "none|<single-transition-property>#",
    "transition-timing-function": "<easing-function>#",
    translate: "none|<length-percentage> [<length-percentage> <length>?]?",
    "unicode-bidi": "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
    "user-select": "auto|text|none|contain|all",
    "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
    visibility: "visible|hidden|collapse",
    "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces",
    widows: "<integer>",
    width: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|fill|stretch|intrinsic|-moz-max-content|-webkit-max-content|-moz-fit-content|-webkit-fit-content",
    "will-change": "auto|<animateable-feature>#",
    "word-break": "normal|break-all|keep-all|break-word",
    "word-spacing": "normal|<length>",
    "word-wrap": "normal|break-word",
    "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
    "z-index": "auto|<integer>",
    zoom: "normal|reset|<number>|<percentage>",
    "-moz-background-clip": "padding|border",
    "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
    "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
    "-moz-border-radius-topleft": "<'border-top-left-radius'>",
    "-moz-border-radius-topright": "<'border-bottom-right-radius'>",
    "-moz-control-character-visibility": "visible|hidden",
    "-moz-osx-font-smoothing": "auto|grayscale",
    "-moz-user-select": "none|text|all|-moz-none",
    "-ms-flex-align": "start|end|center|baseline|stretch",
    "-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
    "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
    "-ms-flex-negative": "<'flex-shrink'>",
    "-ms-flex-pack": "start|end|center|justify|distribute",
    "-ms-flex-order": "<integer>",
    "-ms-flex-positive": "<'flex-grow'>",
    "-ms-flex-preferred-size": "<'flex-basis'>",
    "-ms-interpolation-mode": "nearest-neighbor|bicubic",
    "-ms-grid-column-align": "start|end|center|stretch",
    "-ms-grid-row-align": "start|end|center|stretch",
    "-ms-hyphenate-limit-last": "none|always|column|page|spread",
    "-webkit-background-clip": "[<box>|border|padding|content|text]#",
    "-webkit-column-break-after": "always|auto|avoid",
    "-webkit-column-break-before": "always|auto|avoid",
    "-webkit-column-break-inside": "always|auto|avoid",
    "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased",
    "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
    "-webkit-print-color-adjust": "economy|exact",
    "-webkit-text-security": "none|circle|disc|square",
    "-webkit-user-drag": "none|element|auto",
    "-webkit-user-select": "auto|none|text|all",
    "alignment-baseline": "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
    "baseline-shift": "baseline|sub|super|<svg-length>",
    behavior: "<url>+",
    "clip-rule": "nonzero|evenodd",
    cue: "<'cue-before'> <'cue-after'>?",
    "cue-after": "<url> <decibel>?|none",
    "cue-before": "<url> <decibel>?|none",
    "dominant-baseline": "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
    fill: "<paint>",
    "fill-opacity": "<number-zero-one>",
    "fill-rule": "nonzero|evenodd",
    "glyph-orientation-horizontal": "<angle>",
    "glyph-orientation-vertical": "<angle>",
    kerning: "auto|<svg-length>",
    marker: "none|<url>",
    "marker-end": "none|<url>",
    "marker-mid": "none|<url>",
    "marker-start": "none|<url>",
    pause: "<'pause-before'> <'pause-after'>?",
    "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
    rest: "<'rest-before'> <'rest-after'>?",
    "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision",
    src: "[<url> [format( <string># )]?|local( <family-name> )]#",
    speak: "auto|none|normal",
    "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]",
    stroke: "<paint>",
    "stroke-dasharray": "none|[<svg-length>+]#",
    "stroke-dashoffset": "<svg-length>",
    "stroke-linecap": "butt|round|square",
    "stroke-linejoin": "miter|round|bevel",
    "stroke-miterlimit": "<number-one-or-greater>",
    "stroke-opacity": "<number-zero-one>",
    "stroke-width": "<svg-length>",
    "text-anchor": "start|middle|end",
    "unicode-range": "<urange>#",
    "voice-balance": "<number>|left|center|right|leftwards|rightwards",
    "voice-duration": "auto|<time>",
    "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
    "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
    "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
    "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
    "voice-stress": "normal|strong|moderate|none|reduced",
    "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"
  },
  atrules: {
    charset: {
      prelude: "<string>",
      descriptors: null
    },
    "counter-style": {
      prelude: "<counter-style-name>",
      descriptors: {
        "additive-symbols": "[<integer>&&<symbol>]#",
        fallback: "<counter-style-name>",
        negative: "<symbol> <symbol>?",
        pad: "<integer>&&<symbol>",
        prefix: "<symbol>",
        range: "[[<integer>|infinite]{2}]#|auto",
        "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>",
        suffix: "<symbol>",
        symbols: "<symbol>+",
        system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"
      }
    },
    document: {
      prelude: "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
      descriptors: null
    },
    "font-face": {
      prelude: null,
      descriptors: {
        "ascent-override": "normal|<percentage>",
        "descent-override": "normal|<percentage>",
        "font-display": "[auto|block|swap|fallback|optional]",
        "font-family": "<family-name>",
        "font-feature-settings": "normal|<feature-tag-value>#",
        "font-variation-settings": "normal|[<string> <number>]#",
        "font-stretch": "<font-stretch-absolute>{1,2}",
        "font-style": "normal|italic|oblique <angle>{0,2}",
        "font-weight": "<font-weight-absolute>{1,2}",
        "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
        "line-gap-override": "normal|<percentage>",
        "size-adjust": "<percentage>",
        src: "[<url> [format( <string># )]?|local( <family-name> )]#",
        "unicode-range": "<urange>#"
      }
    },
    "font-feature-values": {
      prelude: "<family-name>#",
      descriptors: null
    },
    import: {
      prelude: "[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",
      descriptors: null
    },
    keyframes: {
      prelude: "<keyframes-name>",
      descriptors: null
    },
    layer: {
      prelude: "[<layer-name>#|<layer-name>?]",
      descriptors: null
    },
    media: {
      prelude: "<media-query-list>",
      descriptors: null
    },
    namespace: {
      prelude: "<namespace-prefix>? [<string>|<url>]",
      descriptors: null
    },
    page: {
      prelude: "<page-selector-list>",
      descriptors: {
        bleed: "auto|<length>",
        marks: "none|[crop||cross]",
        size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"
      }
    },
    property: {
      prelude: "<custom-property-name>",
      descriptors: {
        syntax: "<string>",
        inherits: "true|false",
        "initial-value": "<string>"
      }
    },
    "scroll-timeline": {
      prelude: "<timeline-name>",
      descriptors: null
    },
    supports: {
      prelude: "<supports-condition>",
      descriptors: null
    },
    viewport: {
      prelude: null,
      descriptors: {
        height: "<viewport-length>{1,2}",
        "max-height": "<viewport-length>",
        "max-width": "<viewport-length>",
        "max-zoom": "auto|<number>|<percentage>",
        "min-height": "<viewport-length>",
        "min-width": "<viewport-length>",
        "min-zoom": "auto|<number>|<percentage>",
        orientation: "auto|portrait|landscape",
        "user-zoom": "zoom|fixed",
        "viewport-fit": "auto|contain|cover",
        width: "<viewport-length>{1,2}",
        zoom: "auto|<number>|<percentage>"
      }
    }
  }
}, Z = {}, Aa = {};
const Oe = _, L1 = se, jt = 43, et = 45, So = 110, Lr = !0, jL = !1;
function Co(e, t) {
  let r = this.tokenStart + e;
  const n = this.charCodeAt(r);
  for ((n === jt || n === et) && (t && this.error("Number sign is not allowed"), r++); r < this.tokenEnd; r++)
    L1.isDigit(this.charCodeAt(r)) || this.error("Integer is expected", r);
}
function On(e) {
  return Co.call(this, 0, e);
}
function or(e, t) {
  if (!this.cmpChar(this.tokenStart + e, t)) {
    let r = "";
    switch (t) {
      case So:
        r = "N is expected";
        break;
      case et:
        r = "HyphenMinus is expected";
        break;
    }
    this.error(r, this.tokenStart + e);
  }
}
function Bl() {
  let e = 0, t = 0, r = this.tokenType;
  for (; r === Oe.WhiteSpace || r === Oe.Comment; )
    r = this.lookupType(++e);
  if (r !== Oe.Number)
    if (this.isDelim(jt, e) || this.isDelim(et, e)) {
      t = this.isDelim(jt, e) ? jt : et;
      do
        r = this.lookupType(++e);
      while (r === Oe.WhiteSpace || r === Oe.Comment);
      r !== Oe.Number && (this.skip(e), On.call(this, Lr));
    } else
      return null;
  return e > 0 && this.skip(e), t === 0 && (r = this.charCodeAt(this.tokenStart), r !== jt && r !== et && this.error("Number sign is expected")), On.call(this, t !== 0), t === et ? "-" + this.consume(Oe.Number) : this.consume(Oe.Number);
}
const zL = "AnPlusB", GL = {
  a: [String, null],
  b: [String, null]
};
function HL() {
  const e = this.tokenStart;
  let t = null, r = null;
  if (this.tokenType === Oe.Number)
    On.call(this, jL), r = this.consume(Oe.Number);
  else if (this.tokenType === Oe.Ident && this.cmpChar(this.tokenStart, et))
    switch (t = "-1", or.call(this, 1, So), this.tokenEnd - this.tokenStart) {
      case 2:
        this.next(), r = Bl.call(this);
        break;
      case 3:
        or.call(this, 2, et), this.next(), this.skipSC(), On.call(this, Lr), r = "-" + this.consume(Oe.Number);
        break;
      default:
        or.call(this, 2, et), Co.call(this, 3, Lr), this.next(), r = this.substrToCursor(e + 2);
    }
  else if (this.tokenType === Oe.Ident || this.isDelim(jt) && this.lookupType(1) === Oe.Ident) {
    let n = 0;
    switch (t = "1", this.isDelim(jt) && (n = 1, this.next()), or.call(this, 0, So), this.tokenEnd - this.tokenStart) {
      case 1:
        this.next(), r = Bl.call(this);
        break;
      case 2:
        or.call(this, 1, et), this.next(), this.skipSC(), On.call(this, Lr), r = "-" + this.consume(Oe.Number);
        break;
      default:
        or.call(this, 1, et), Co.call(this, 2, Lr), this.next(), r = this.substrToCursor(e + n + 1);
    }
  } else if (this.tokenType === Oe.Dimension) {
    const n = this.charCodeAt(this.tokenStart), a = n === jt || n === et;
    let i = this.tokenStart + a;
    for (; i < this.tokenEnd && L1.isDigit(this.charCodeAt(i)); i++)
      ;
    i === this.tokenStart + a && this.error("Integer is expected", this.tokenStart + a), or.call(this, i - this.tokenStart, So), t = this.substring(e, i), i + 1 === this.tokenEnd ? (this.next(), r = Bl.call(this)) : (or.call(this, i - this.tokenStart + 1, et), i + 2 === this.tokenEnd ? (this.next(), this.skipSC(), On.call(this, Lr), r = "-" + this.consume(Oe.Number)) : (Co.call(this, i - this.tokenStart + 2, Lr), this.next(), r = this.substrToCursor(i + 1)));
  } else
    this.error();
  return t !== null && t.charCodeAt(0) === jt && (t = t.substr(1)), r !== null && r.charCodeAt(0) === jt && (r = r.substr(1)), {
    type: "AnPlusB",
    loc: this.getLocation(e, this.tokenStart),
    a: t,
    b: r
  };
}
function VL(e) {
  if (e.a) {
    const t = e.a === "+1" && "n" || e.a === "1" && "n" || e.a === "-1" && "-n" || e.a + "n";
    if (e.b) {
      const r = e.b[0] === "-" || e.b[0] === "+" ? e.b : "+" + e.b;
      this.tokenize(t + r);
    } else
      this.tokenize(t);
  } else
    this.tokenize(e.b);
}
Aa.generate = VL;
Aa.name = zL;
Aa.parse = HL;
Aa.structure = GL;
var tn = {};
const zt = _;
function jh(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracketOrSemicolon, !0);
}
function WL() {
  for (let e = 1, t; t = this.lookupType(e); e++) {
    if (t === zt.RightCurlyBracket)
      return !0;
    if (t === zt.LeftCurlyBracket || t === zt.AtKeyword)
      return !1;
  }
  return !1;
}
const XL = "Atrule", YL = "atrule", KL = {
  name: String,
  prelude: ["AtrulePrelude", "Raw", null],
  block: ["Block", null]
};
function QL() {
  const e = this.tokenStart;
  let t, r, n = null, a = null;
  switch (this.eat(zt.AtKeyword), t = this.substrToCursor(e + 1), r = t.toLowerCase(), this.skipSC(), this.eof === !1 && this.tokenType !== zt.LeftCurlyBracket && this.tokenType !== zt.Semicolon && (this.parseAtrulePrelude ? n = this.parseWithFallback(this.AtrulePrelude.bind(this, t), jh) : n = jh.call(this, this.tokenIndex), this.skipSC()), this.tokenType) {
    case zt.Semicolon:
      this.next();
      break;
    case zt.LeftCurlyBracket:
      hasOwnProperty.call(this.atrule, r) && typeof this.atrule[r].block == "function" ? a = this.atrule[r].block.call(this) : a = this.Block(WL.call(this));
      break;
  }
  return {
    type: "Atrule",
    loc: this.getLocation(e, this.tokenStart),
    name: t,
    prelude: n,
    block: a
  };
}
function ZL(e) {
  this.token(zt.AtKeyword, "@" + e.name), e.prelude !== null && this.node(e.prelude), e.block ? this.node(e.block) : this.token(zt.Semicolon, ";");
}
tn.generate = ZL;
tn.name = XL;
tn.parse = QL;
tn.structure = KL;
tn.walkContext = YL;
var rn = {};
const zh = _, JL = "AtrulePrelude", eN = "atrulePrelude", tN = {
  children: [[]]
};
function rN(e) {
  let t = null;
  return e !== null && (e = e.toLowerCase()), this.skipSC(), hasOwnProperty.call(this.atrule, e) && typeof this.atrule[e].prelude == "function" ? t = this.atrule[e].prelude.call(this) : t = this.readSequence(this.scope.AtrulePrelude), this.skipSC(), this.eof !== !0 && this.tokenType !== zh.LeftCurlyBracket && this.tokenType !== zh.Semicolon && this.error("Semicolon or block is expected"), {
    type: "AtrulePrelude",
    loc: this.getLocationFromList(t),
    children: t
  };
}
function nN(e) {
  this.children(e);
}
rn.generate = nN;
rn.name = JL;
rn.parse = rN;
rn.structure = tN;
rn.walkContext = eN;
var Ea = {};
const mt = _, aN = 36, N1 = 42, $o = 61, iN = 94, Hc = 124, sN = 126;
function oN() {
  this.eof && this.error("Unexpected end of input");
  const e = this.tokenStart;
  let t = !1;
  return this.isDelim(N1) ? (t = !0, this.next()) : this.isDelim(Hc) || this.eat(mt.Ident), this.isDelim(Hc) ? this.charCodeAt(this.tokenStart + 1) !== $o ? (this.next(), this.eat(mt.Ident)) : t && this.error("Identifier is expected", this.tokenEnd) : t && this.error("Vertical line is expected"), {
    type: "Identifier",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e)
  };
}
function uN() {
  const e = this.tokenStart, t = this.charCodeAt(e);
  return t !== $o && // =
  t !== sN && // ~=
  t !== iN && // ^=
  t !== aN && // $=
  t !== N1 && // *=
  t !== Hc && this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"), this.next(), t !== $o && (this.isDelim($o) || this.error("Equal sign is expected"), this.next()), this.substrToCursor(e);
}
const lN = "AttributeSelector", cN = {
  name: "Identifier",
  matcher: [String, null],
  value: ["String", "Identifier", null],
  flags: [String, null]
};
function fN() {
  const e = this.tokenStart;
  let t, r = null, n = null, a = null;
  return this.eat(mt.LeftSquareBracket), this.skipSC(), t = oN.call(this), this.skipSC(), this.tokenType !== mt.RightSquareBracket && (this.tokenType !== mt.Ident && (r = uN.call(this), this.skipSC(), n = this.tokenType === mt.String ? this.String() : this.Identifier(), this.skipSC()), this.tokenType === mt.Ident && (a = this.consume(mt.Ident), this.skipSC())), this.eat(mt.RightSquareBracket), {
    type: "AttributeSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: t,
    matcher: r,
    value: n,
    flags: a
  };
}
function dN(e) {
  this.token(mt.Delim, "["), this.node(e.name), e.matcher !== null && (this.tokenize(e.matcher), this.node(e.value)), e.flags !== null && this.token(mt.Ident, e.flags), this.token(mt.Delim, "]");
}
Ea.generate = dN;
Ea.name = lN;
Ea.parse = fN;
Ea.structure = cN;
var nn = {};
const Tt = _;
function D1(e) {
  return this.Raw(e, null, !0);
}
function hN() {
  return this.parseWithFallback(this.Rule, D1);
}
function Gh(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
function pN() {
  if (this.tokenType === Tt.Semicolon)
    return Gh.call(this, this.tokenIndex);
  const e = this.parseWithFallback(this.Declaration, Gh);
  return this.tokenType === Tt.Semicolon && this.next(), e;
}
const mN = "Block", gN = "block", bN = {
  children: [[
    "Atrule",
    "Rule",
    "Declaration"
  ]]
};
function yN(e) {
  const t = e ? pN : hN, r = this.tokenStart;
  let n = this.createList();
  this.eat(Tt.LeftCurlyBracket);
  e:
    for (; !this.eof; )
      switch (this.tokenType) {
        case Tt.RightCurlyBracket:
          break e;
        case Tt.WhiteSpace:
        case Tt.Comment:
          this.next();
          break;
        case Tt.AtKeyword:
          n.push(this.parseWithFallback(this.Atrule, D1));
          break;
        default:
          n.push(t.call(this));
      }
  return this.eof || this.eat(Tt.RightCurlyBracket), {
    type: "Block",
    loc: this.getLocation(r, this.tokenStart),
    children: n
  };
}
function vN(e) {
  this.token(Tt.LeftCurlyBracket, "{"), this.children(e, (t) => {
    t.type === "Declaration" && this.token(Tt.Semicolon, ";");
  }), this.token(Tt.RightCurlyBracket, "}");
}
nn.generate = vN;
nn.name = mN;
nn.parse = yN;
nn.structure = bN;
nn.walkContext = gN;
var Ta = {};
const Ko = _, xN = "Brackets", kN = {
  children: [[]]
};
function wN(e, t) {
  const r = this.tokenStart;
  let n = null;
  return this.eat(Ko.LeftSquareBracket), n = e.call(this, t), this.eof || this.eat(Ko.RightSquareBracket), {
    type: "Brackets",
    loc: this.getLocation(r, this.tokenStart),
    children: n
  };
}
function SN(e) {
  this.token(Ko.Delim, "["), this.children(e), this.token(Ko.Delim, "]");
}
Ta.generate = SN;
Ta.name = xN;
Ta.parse = wN;
Ta.structure = kN;
var Pa = {};
const O1 = _, CN = "CDC", $N = [];
function AN() {
  const e = this.tokenStart;
  return this.eat(O1.CDC), {
    type: "CDC",
    loc: this.getLocation(e, this.tokenStart)
  };
}
function EN() {
  this.token(O1.CDC, "-->");
}
Pa.generate = EN;
Pa.name = CN;
Pa.parse = AN;
Pa.structure = $N;
var La = {};
const M1 = _, TN = "CDO", PN = [];
function LN() {
  const e = this.tokenStart;
  return this.eat(M1.CDO), {
    type: "CDO",
    loc: this.getLocation(e, this.tokenStart)
  };
}
function NN() {
  this.token(M1.CDO, "<!--");
}
La.generate = NN;
La.name = TN;
La.parse = LN;
La.structure = PN;
var Na = {};
const Vc = _, DN = 46, ON = "ClassSelector", MN = {
  name: String
};
function IN() {
  return this.eatDelim(DN), {
    type: "ClassSelector",
    loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
    name: this.consume(Vc.Ident)
  };
}
function RN(e) {
  this.token(Vc.Delim, "."), this.token(Vc.Ident, e.name);
}
Na.generate = RN;
Na.name = ON;
Na.parse = IN;
Na.structure = MN;
var Da = {};
const Hh = _, _N = 43, Vh = 47, FN = 62, BN = 126, qN = "Combinator", UN = {
  name: String
};
function jN() {
  const e = this.tokenStart;
  let t;
  switch (this.tokenType) {
    case Hh.WhiteSpace:
      t = " ";
      break;
    case Hh.Delim:
      switch (this.charCodeAt(this.tokenStart)) {
        case FN:
        case _N:
        case BN:
          this.next();
          break;
        case Vh:
          this.next(), this.eatIdent("deep"), this.eatDelim(Vh);
          break;
        default:
          this.error("Combinator is expected");
      }
      t = this.substrToCursor(e);
      break;
  }
  return {
    type: "Combinator",
    loc: this.getLocation(e, this.tokenStart),
    name: t
  };
}
function zN(e) {
  this.tokenize(e.name);
}
Da.generate = zN;
Da.name = qN;
Da.parse = jN;
Da.structure = UN;
var Oa = {};
const I1 = _, GN = 42, HN = 47, VN = "Comment", WN = {
  value: String
};
function XN() {
  const e = this.tokenStart;
  let t = this.tokenEnd;
  return this.eat(I1.Comment), t - e + 2 >= 2 && this.charCodeAt(t - 2) === GN && this.charCodeAt(t - 1) === HN && (t -= 2), {
    type: "Comment",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substring(e + 2, t)
  };
}
function YN(e) {
  this.token(I1.Comment, "/*" + e.value + "*/");
}
Oa.generate = YN;
Oa.name = VN;
Oa.parse = XN;
Oa.structure = WN;
var an = {};
const KN = en, Ye = _, R1 = 33, QN = 35, ZN = 36, JN = 38, e9 = 42, t9 = 43, Wh = 47;
function r9(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !0);
}
function n9(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !1);
}
function a9() {
  const e = this.tokenIndex, t = this.Value();
  return t.type !== "Raw" && this.eof === !1 && this.tokenType !== Ye.Semicolon && this.isDelim(R1) === !1 && this.isBalanceEdge(e) === !1 && this.error(), t;
}
const i9 = "Declaration", s9 = "declaration", o9 = {
  important: [Boolean, String],
  property: String,
  value: ["Value", "Raw"]
};
function u9() {
  const e = this.tokenStart, t = this.tokenIndex, r = c9.call(this), n = KN.isCustomProperty(r), a = n ? this.parseCustomProperty : this.parseValue, i = n ? n9 : r9;
  let s = !1, u;
  this.skipSC(), this.eat(Ye.Colon);
  const l = this.tokenIndex;
  if (n || this.skipSC(), a ? u = this.parseWithFallback(a9, i) : u = i.call(this, this.tokenIndex), n && u.type === "Value" && u.children.isEmpty) {
    for (let o = l - this.tokenIndex; o <= 0; o++)
      if (this.lookupType(o) === Ye.WhiteSpace) {
        u.children.appendData({
          type: "WhiteSpace",
          loc: null,
          value: " "
        });
        break;
      }
  }
  return this.isDelim(R1) && (s = f9.call(this), this.skipSC()), this.eof === !1 && this.tokenType !== Ye.Semicolon && this.isBalanceEdge(t) === !1 && this.error(), {
    type: "Declaration",
    loc: this.getLocation(e, this.tokenStart),
    important: s,
    property: r,
    value: u
  };
}
function l9(e) {
  this.token(Ye.Ident, e.property), this.token(Ye.Colon, ":"), this.node(e.value), e.important && (this.token(Ye.Delim, "!"), this.token(Ye.Ident, e.important === !0 ? "important" : e.important));
}
function c9() {
  const e = this.tokenStart;
  if (this.tokenType === Ye.Delim)
    switch (this.charCodeAt(this.tokenStart)) {
      case e9:
      case ZN:
      case t9:
      case QN:
      case JN:
        this.next();
        break;
      case Wh:
        this.next(), this.isDelim(Wh) && this.next();
        break;
    }
  return this.tokenType === Ye.Hash ? this.eat(Ye.Hash) : this.eat(Ye.Ident), this.substrToCursor(e);
}
function f9() {
  this.eat(Ye.Delim), this.skipSC();
  const e = this.consume(Ye.Ident);
  return e === "important" ? !0 : e;
}
an.generate = l9;
an.name = i9;
an.parse = u9;
an.structure = o9;
an.walkContext = s9;
var Ma = {};
const Ao = _;
function d9(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
const h9 = "DeclarationList", p9 = {
  children: [[
    "Declaration"
  ]]
};
function m9() {
  const e = this.createList();
  for (; !this.eof; )
    switch (this.tokenType) {
      case Ao.WhiteSpace:
      case Ao.Comment:
      case Ao.Semicolon:
        this.next();
        break;
      default:
        e.push(this.parseWithFallback(this.Declaration, d9));
    }
  return {
    type: "DeclarationList",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function g9(e) {
  this.children(e, (t) => {
    t.type === "Declaration" && this.token(Ao.Semicolon, ";");
  });
}
Ma.generate = g9;
Ma.name = h9;
Ma.parse = m9;
Ma.structure = p9;
var Ia = {};
const _1 = _, b9 = "Dimension", y9 = {
  value: String,
  unit: String
};
function v9() {
  const e = this.tokenStart, t = this.consumeNumber(_1.Dimension);
  return {
    type: "Dimension",
    loc: this.getLocation(e, this.tokenStart),
    value: t,
    unit: this.substring(e + t.length, this.tokenStart)
  };
}
function x9(e) {
  this.token(_1.Dimension, e.value + e.unit);
}
Ia.generate = x9;
Ia.name = b9;
Ia.parse = v9;
Ia.structure = y9;
var sn = {};
const Wc = _, k9 = "Function", w9 = "function", S9 = {
  name: String,
  children: [[]]
};
function C9(e, t) {
  const r = this.tokenStart, n = this.consumeFunctionName(), a = n.toLowerCase();
  let i;
  return i = t.hasOwnProperty(a) ? t[a].call(this, t) : e.call(this, t), this.eof || this.eat(Wc.RightParenthesis), {
    type: "Function",
    loc: this.getLocation(r, this.tokenStart),
    name: n,
    children: i
  };
}
function $9(e) {
  this.token(Wc.Function, e.name + "("), this.children(e), this.token(Wc.RightParenthesis, ")");
}
sn.generate = $9;
sn.name = k9;
sn.parse = C9;
sn.structure = S9;
sn.walkContext = w9;
var on = {};
const F1 = _, A9 = "XXX", E9 = "Hash", T9 = {
  value: String
};
function P9() {
  const e = this.tokenStart;
  return this.eat(F1.Hash), {
    type: "Hash",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e + 1)
  };
}
function L9(e) {
  this.token(F1.Hash, "#" + e.value);
}
on.generate = L9;
on.name = E9;
on.parse = P9;
on.structure = T9;
on.xxx = A9;
var Ra = {};
const B1 = _, N9 = "Identifier", D9 = {
  name: String
};
function O9() {
  return {
    type: "Identifier",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    name: this.consume(B1.Ident)
  };
}
function M9(e) {
  this.token(B1.Ident, e.name);
}
Ra.generate = M9;
Ra.name = N9;
Ra.parse = O9;
Ra.structure = D9;
var _a = {};
const q1 = _, I9 = "IdSelector", R9 = {
  name: String
};
function _9() {
  const e = this.tokenStart;
  return this.eat(q1.Hash), {
    type: "IdSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e + 1)
  };
}
function F9(e) {
  this.token(q1.Delim, "#" + e.name);
}
_a.generate = F9;
_a.name = I9;
_a.parse = _9;
_a.structure = R9;
var Fa = {};
const Ze = _, B9 = "MediaFeature", q9 = {
  name: String,
  value: ["Identifier", "Number", "Dimension", "Ratio", null]
};
function U9() {
  const e = this.tokenStart;
  let t, r = null;
  if (this.eat(Ze.LeftParenthesis), this.skipSC(), t = this.consume(Ze.Ident), this.skipSC(), this.tokenType !== Ze.RightParenthesis) {
    switch (this.eat(Ze.Colon), this.skipSC(), this.tokenType) {
      case Ze.Number:
        this.lookupNonWSType(1) === Ze.Delim ? r = this.Ratio() : r = this.Number();
        break;
      case Ze.Dimension:
        r = this.Dimension();
        break;
      case Ze.Ident:
        r = this.Identifier();
        break;
      default:
        this.error("Number, dimension, ratio or identifier is expected");
    }
    this.skipSC();
  }
  return this.eat(Ze.RightParenthesis), {
    type: "MediaFeature",
    loc: this.getLocation(e, this.tokenStart),
    name: t,
    value: r
  };
}
function j9(e) {
  this.token(Ze.LeftParenthesis, "("), this.token(Ze.Ident, e.name), e.value !== null && (this.token(Ze.Colon, ":"), this.node(e.value)), this.token(Ze.RightParenthesis, ")");
}
Fa.generate = j9;
Fa.name = B9;
Fa.parse = U9;
Fa.structure = q9;
var Ba = {};
const so = _, z9 = "MediaQuery", G9 = {
  children: [[
    "Identifier",
    "MediaFeature",
    "WhiteSpace"
  ]]
};
function H9() {
  const e = this.createList();
  let t = null;
  this.skipSC();
  e:
    for (; !this.eof; ) {
      switch (this.tokenType) {
        case so.Comment:
        case so.WhiteSpace:
          this.next();
          continue;
        case so.Ident:
          t = this.Identifier();
          break;
        case so.LeftParenthesis:
          t = this.MediaFeature();
          break;
        default:
          break e;
      }
      e.push(t);
    }
  return t === null && this.error("Identifier or parenthesis is expected"), {
    type: "MediaQuery",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function V9(e) {
  this.children(e);
}
Ba.generate = V9;
Ba.name = z9;
Ba.parse = H9;
Ba.structure = G9;
var qa = {};
const U1 = _, W9 = "MediaQueryList", X9 = {
  children: [[
    "MediaQuery"
  ]]
};
function Y9() {
  const e = this.createList();
  for (this.skipSC(); !this.eof && (e.push(this.MediaQuery()), this.tokenType === U1.Comma); )
    this.next();
  return {
    type: "MediaQueryList",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function K9(e) {
  this.children(e, () => this.token(U1.Comma, ","));
}
qa.generate = K9;
qa.name = W9;
qa.parse = Y9;
qa.structure = X9;
var Ua = {};
const Q9 = _, Z9 = "Nth", J9 = {
  nth: ["AnPlusB", "Identifier"],
  selector: ["SelectorList", null]
};
function eD() {
  this.skipSC();
  const e = this.tokenStart;
  let t = e, r = null, n;
  return this.lookupValue(0, "odd") || this.lookupValue(0, "even") ? n = this.Identifier() : n = this.AnPlusB(), t = this.tokenStart, this.skipSC(), this.lookupValue(0, "of") && (this.next(), r = this.SelectorList(), t = this.tokenStart), {
    type: "Nth",
    loc: this.getLocation(e, t),
    nth: n,
    selector: r
  };
}
function tD(e) {
  this.node(e.nth), e.selector !== null && (this.token(Q9.Ident, "of"), this.node(e.selector));
}
Ua.generate = tD;
Ua.name = Z9;
Ua.parse = eD;
Ua.structure = J9;
var ja = {};
const j1 = _, rD = "Number", nD = {
  value: String
};
function aD() {
  return {
    type: "Number",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: this.consume(j1.Number)
  };
}
function iD(e) {
  this.token(j1.Number, e.value);
}
ja.generate = iD;
ja.name = rD;
ja.parse = aD;
ja.structure = nD;
var za = {};
const sD = "Operator", oD = {
  value: String
};
function uD() {
  const e = this.tokenStart;
  return this.next(), {
    type: "Operator",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e)
  };
}
function lD(e) {
  this.tokenize(e.value);
}
za.generate = lD;
za.name = sD;
za.parse = uD;
za.structure = oD;
var Ga = {};
const Qo = _, cD = "Parentheses", fD = {
  children: [[]]
};
function dD(e, t) {
  const r = this.tokenStart;
  let n = null;
  return this.eat(Qo.LeftParenthesis), n = e.call(this, t), this.eof || this.eat(Qo.RightParenthesis), {
    type: "Parentheses",
    loc: this.getLocation(r, this.tokenStart),
    children: n
  };
}
function hD(e) {
  this.token(Qo.LeftParenthesis, "("), this.children(e), this.token(Qo.RightParenthesis, ")");
}
Ga.generate = hD;
Ga.name = cD;
Ga.parse = dD;
Ga.structure = fD;
var Ha = {};
const z1 = _, pD = "Percentage", mD = {
  value: String
};
function gD() {
  return {
    type: "Percentage",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: this.consumeNumber(z1.Percentage)
  };
}
function bD(e) {
  this.token(z1.Percentage, e.value + "%");
}
Ha.generate = bD;
Ha.name = pD;
Ha.parse = gD;
Ha.structure = mD;
var un = {};
const gr = _, yD = "PseudoClassSelector", vD = "function", xD = {
  name: String,
  children: [["Raw"], null]
};
function kD() {
  const e = this.tokenStart;
  let t = null, r, n;
  return this.eat(gr.Colon), this.tokenType === gr.Function ? (r = this.consumeFunctionName(), n = r.toLowerCase(), hasOwnProperty.call(this.pseudo, n) ? (this.skipSC(), t = this.pseudo[n].call(this), this.skipSC()) : (t = this.createList(), t.push(
    this.Raw(this.tokenIndex, null, !1)
  )), this.eat(gr.RightParenthesis)) : r = this.consume(gr.Ident), {
    type: "PseudoClassSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: r,
    children: t
  };
}
function wD(e) {
  this.token(gr.Colon, ":"), e.children === null ? this.token(gr.Ident, e.name) : (this.token(gr.Function, e.name + "("), this.children(e), this.token(gr.RightParenthesis, ")"));
}
un.generate = wD;
un.name = yD;
un.parse = kD;
un.structure = xD;
un.walkContext = vD;
var ln = {};
const Gt = _, SD = "PseudoElementSelector", CD = "function", $D = {
  name: String,
  children: [["Raw"], null]
};
function AD() {
  const e = this.tokenStart;
  let t = null, r, n;
  return this.eat(Gt.Colon), this.eat(Gt.Colon), this.tokenType === Gt.Function ? (r = this.consumeFunctionName(), n = r.toLowerCase(), hasOwnProperty.call(this.pseudo, n) ? (this.skipSC(), t = this.pseudo[n].call(this), this.skipSC()) : (t = this.createList(), t.push(
    this.Raw(this.tokenIndex, null, !1)
  )), this.eat(Gt.RightParenthesis)) : r = this.consume(Gt.Ident), {
    type: "PseudoElementSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: r,
    children: t
  };
}
function ED(e) {
  this.token(Gt.Colon, ":"), this.token(Gt.Colon, ":"), e.children === null ? this.token(Gt.Ident, e.name) : (this.token(Gt.Function, e.name + "("), this.children(e), this.token(Gt.RightParenthesis, ")"));
}
ln.generate = ED;
ln.name = SD;
ln.parse = AD;
ln.structure = $D;
ln.walkContext = CD;
var Va = {};
const Eo = _, TD = se, PD = 47, LD = 46;
function Xh() {
  this.skipSC();
  const e = this.consume(Eo.Number);
  for (let t = 0; t < e.length; t++) {
    const r = e.charCodeAt(t);
    !TD.isDigit(r) && r !== LD && this.error("Unsigned number is expected", this.tokenStart - e.length + t);
  }
  return Number(e) === 0 && this.error("Zero number is not allowed", this.tokenStart - e.length), e;
}
const ND = "Ratio", DD = {
  left: String,
  right: String
};
function OD() {
  const e = this.tokenStart, t = Xh.call(this);
  let r;
  return this.skipSC(), this.eatDelim(PD), r = Xh.call(this), {
    type: "Ratio",
    loc: this.getLocation(e, this.tokenStart),
    left: t,
    right: r
  };
}
function MD(e) {
  this.token(Eo.Number, e.left), this.token(Eo.Delim, "/"), this.token(Eo.Number, e.right);
}
Va.generate = MD;
Va.name = ND;
Va.parse = OD;
Va.structure = DD;
var Wa = {};
const ID = _;
function RD() {
  return this.tokenIndex > 0 && this.lookupType(-1) === ID.WhiteSpace ? this.tokenIndex > 1 ? this.getTokenStart(this.tokenIndex - 1) : this.firstCharOffset : this.tokenStart;
}
const _D = "Raw", FD = {
  value: String
};
function BD(e, t, r) {
  const n = this.getTokenStart(e);
  let a;
  return this.skipUntilBalanced(e, t || this.consumeUntilBalanceEnd), r && this.tokenStart > n ? a = RD.call(this) : a = this.tokenStart, {
    type: "Raw",
    loc: this.getLocation(n, a),
    value: this.substring(n, a)
  };
}
function qD(e) {
  this.tokenize(e.value);
}
Wa.generate = qD;
Wa.name = _D;
Wa.parse = BD;
Wa.structure = FD;
var cn = {};
const UD = _;
function Yh(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracket, !0);
}
function jD() {
  const e = this.SelectorList();
  return e.type !== "Raw" && this.eof === !1 && this.tokenType !== UD.LeftCurlyBracket && this.error(), e;
}
const zD = "Rule", GD = "rule", HD = {
  prelude: ["SelectorList", "Raw"],
  block: ["Block"]
};
function VD() {
  const e = this.tokenIndex, t = this.tokenStart;
  let r, n;
  return this.parseRulePrelude ? r = this.parseWithFallback(jD, Yh) : r = Yh.call(this, e), n = this.Block(!0), {
    type: "Rule",
    loc: this.getLocation(t, this.tokenStart),
    prelude: r,
    block: n
  };
}
function WD(e) {
  this.node(e.prelude), this.node(e.block);
}
cn.generate = WD;
cn.name = zD;
cn.parse = VD;
cn.structure = HD;
cn.walkContext = GD;
var Xa = {};
const XD = "Selector", YD = {
  children: [[
    "TypeSelector",
    "IdSelector",
    "ClassSelector",
    "AttributeSelector",
    "PseudoClassSelector",
    "PseudoElementSelector",
    "Combinator",
    "WhiteSpace"
  ]]
};
function KD() {
  const e = this.readSequence(this.scope.Selector);
  return this.getFirstListNode(e) === null && this.error("Selector is expected"), {
    type: "Selector",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function QD(e) {
  this.children(e);
}
Xa.generate = QD;
Xa.name = XD;
Xa.parse = KD;
Xa.structure = YD;
var fn = {};
const G1 = _, ZD = "SelectorList", JD = "selector", e7 = {
  children: [[
    "Selector",
    "Raw"
  ]]
};
function t7() {
  const e = this.createList();
  for (; !this.eof; ) {
    if (e.push(this.Selector()), this.tokenType === G1.Comma) {
      this.next();
      continue;
    }
    break;
  }
  return {
    type: "SelectorList",
    loc: this.getLocationFromList(e),
    children: e
  };
}
function r7(e) {
  this.children(e, () => this.token(G1.Comma, ","));
}
fn.generate = r7;
fn.name = ZD;
fn.parse = t7;
fn.structure = e7;
fn.walkContext = JD;
var Ya = {}, ys = {};
const Xc = se, Kh = $e, Yc = 92, H1 = 34, V1 = 39;
function n7(e) {
  const t = e.length, r = e.charCodeAt(0), n = r === H1 || r === V1 ? 1 : 0, a = n === 1 && t > 1 && e.charCodeAt(t - 1) === r ? t - 2 : t - 1;
  let i = "";
  for (let s = n; s <= a; s++) {
    let u = e.charCodeAt(s);
    if (u === Yc) {
      if (s === a) {
        s !== t - 1 && (i = e.substr(s + 1));
        break;
      }
      if (u = e.charCodeAt(++s), Xc.isValidEscape(Yc, u)) {
        const l = s - 1, o = Kh.consumeEscaped(e, l);
        s = o - 1, i += Kh.decodeEscaped(e.substring(l + 1, o));
      } else
        u === 13 && e.charCodeAt(s + 1) === 10 && s++;
    } else
      i += e[s];
  }
  return i;
}
function a7(e, t) {
  const r = t ? "'" : '"', n = t ? V1 : H1;
  let a = "", i = !1;
  for (let s = 0; s < e.length; s++) {
    const u = e.charCodeAt(s);
    if (u === 0) {
      a += "�";
      continue;
    }
    if (u <= 31 || u === 127) {
      a += "\\" + u.toString(16), i = !0;
      continue;
    }
    u === n || u === Yc ? (a += "\\" + e.charAt(s), i = !1) : (i && (Xc.isHexDigit(u) || Xc.isWhiteSpace(u)) && (a += " "), a += e.charAt(s), i = !1);
  }
  return r + a + r;
}
ys.decode = n7;
ys.encode = a7;
const W1 = ys, X1 = _, i7 = "String", s7 = {
  value: String
};
function o7() {
  return {
    type: "String",
    loc: this.getLocation(this.tokenStart, this.tokenEnd),
    value: W1.decode(this.consume(X1.String))
  };
}
function u7(e) {
  this.token(X1.String, W1.encode(e.value));
}
Ya.generate = u7;
Ya.name = i7;
Ya.parse = o7;
Ya.structure = s7;
var dn = {};
const gi = _, l7 = 33;
function Qh(e) {
  return this.Raw(e, null, !1);
}
const c7 = "StyleSheet", f7 = "stylesheet", d7 = {
  children: [[
    "Comment",
    "CDO",
    "CDC",
    "Atrule",
    "Rule",
    "Raw"
  ]]
};
function h7() {
  const e = this.tokenStart, t = this.createList();
  let r;
  for (; !this.eof; ) {
    switch (this.tokenType) {
      case gi.WhiteSpace:
        this.next();
        continue;
      case gi.Comment:
        if (this.charCodeAt(this.tokenStart + 2) !== l7) {
          this.next();
          continue;
        }
        r = this.Comment();
        break;
      case gi.CDO:
        r = this.CDO();
        break;
      case gi.CDC:
        r = this.CDC();
        break;
      case gi.AtKeyword:
        r = this.parseWithFallback(this.Atrule, Qh);
        break;
      default:
        r = this.parseWithFallback(this.Rule, Qh);
    }
    t.push(r);
  }
  return {
    type: "StyleSheet",
    loc: this.getLocation(e, this.tokenStart),
    children: t
  };
}
function p7(e) {
  this.children(e);
}
dn.generate = p7;
dn.name = c7;
dn.parse = h7;
dn.structure = d7;
dn.walkContext = f7;
var Ka = {};
const m7 = _, g7 = 42, Zh = 124;
function ql() {
  this.tokenType !== m7.Ident && this.isDelim(g7) === !1 && this.error("Identifier or asterisk is expected"), this.next();
}
const b7 = "TypeSelector", y7 = {
  name: String
};
function v7() {
  const e = this.tokenStart;
  return this.isDelim(Zh) ? (this.next(), ql.call(this)) : (ql.call(this), this.isDelim(Zh) && (this.next(), ql.call(this))), {
    type: "TypeSelector",
    loc: this.getLocation(e, this.tokenStart),
    name: this.substrToCursor(e)
  };
}
function x7(e) {
  this.tokenize(e.name);
}
Ka.generate = x7;
Ka.name = b7;
Ka.parse = v7;
Ka.structure = y7;
var Qa = {};
const bi = _, k7 = se, Y1 = 43, K1 = 45, Kc = 63;
function Bi(e, t) {
  let r = 0;
  for (let n = this.tokenStart + e; n < this.tokenEnd; n++) {
    const a = this.charCodeAt(n);
    if (a === K1 && t && r !== 0)
      return Bi.call(this, e + r + 1, !1), -1;
    k7.isHexDigit(a) || this.error(
      t && r !== 0 ? "Hyphen minus" + (r < 6 ? " or hex digit" : "") + " is expected" : r < 6 ? "Hex digit is expected" : "Unexpected input",
      n
    ), ++r > 6 && this.error("Too many hex digits", n);
  }
  return this.next(), r;
}
function oo(e) {
  let t = 0;
  for (; this.isDelim(Kc); )
    ++t > e && this.error("Too many question marks"), this.next();
}
function w7(e) {
  this.charCodeAt(this.tokenStart) !== e && this.error((e === Y1 ? "Plus sign" : "Hyphen minus") + " is expected");
}
function S7() {
  let e = 0;
  switch (this.tokenType) {
    case bi.Number:
      if (e = Bi.call(this, 1, !0), this.isDelim(Kc)) {
        oo.call(this, 6 - e);
        break;
      }
      if (this.tokenType === bi.Dimension || this.tokenType === bi.Number) {
        w7.call(this, K1), Bi.call(this, 1, !1);
        break;
      }
      break;
    case bi.Dimension:
      e = Bi.call(this, 1, !0), e > 0 && oo.call(this, 6 - e);
      break;
    default:
      if (this.eatDelim(Y1), this.tokenType === bi.Ident) {
        e = Bi.call(this, 0, !0), e > 0 && oo.call(this, 6 - e);
        break;
      }
      if (this.isDelim(Kc)) {
        this.next(), oo.call(this, 5);
        break;
      }
      this.error("Hex digit or question mark is expected");
  }
}
const C7 = "UnicodeRange", $7 = {
  value: String
};
function A7() {
  const e = this.tokenStart;
  return this.eatIdent("u"), S7.call(this), {
    type: "UnicodeRange",
    loc: this.getLocation(e, this.tokenStart),
    value: this.substrToCursor(e)
  };
}
function E7(e) {
  this.tokenize(e.value);
}
Qa.generate = E7;
Qa.name = C7;
Qa.parse = A7;
Qa.structure = $7;
var Za = {}, Mu = {};
const To = se, Jh = $e, T7 = 32, Qc = 92, P7 = 34, L7 = 39, N7 = 40, Q1 = 41;
function D7(e) {
  const t = e.length;
  let r = 4, n = e.charCodeAt(t - 1) === Q1 ? t - 2 : t - 1, a = "";
  for (; r < n && To.isWhiteSpace(e.charCodeAt(r)); )
    r++;
  for (; r < n && To.isWhiteSpace(e.charCodeAt(n)); )
    n--;
  for (let i = r; i <= n; i++) {
    let s = e.charCodeAt(i);
    if (s === Qc) {
      if (i === n) {
        i !== t - 1 && (a = e.substr(i + 1));
        break;
      }
      if (s = e.charCodeAt(++i), To.isValidEscape(Qc, s)) {
        const u = i - 1, l = Jh.consumeEscaped(e, u);
        i = l - 1, a += Jh.decodeEscaped(e.substring(u + 1, l));
      } else
        s === 13 && e.charCodeAt(i + 1) === 10 && i++;
    } else
      a += e[i];
  }
  return a;
}
function O7(e) {
  let t = "", r = !1;
  for (let n = 0; n < e.length; n++) {
    const a = e.charCodeAt(n);
    if (a === 0) {
      t += "�";
      continue;
    }
    if (a <= 31 || a === 127) {
      t += "\\" + a.toString(16), r = !0;
      continue;
    }
    a === T7 || a === Qc || a === P7 || a === L7 || a === N7 || a === Q1 ? (t += "\\" + e.charAt(n), r = !1) : (r && To.isHexDigit(a) && (t += " "), t += e.charAt(n), r = !1);
  }
  return "url(" + t + ")";
}
Mu.decode = D7;
Mu.encode = O7;
const Z1 = Mu, M7 = ys, Nr = _, I7 = "Url", R7 = {
  value: String
};
function _7() {
  const e = this.tokenStart;
  let t;
  switch (this.tokenType) {
    case Nr.Url:
      t = Z1.decode(this.consume(Nr.Url));
      break;
    case Nr.Function:
      this.cmpStr(this.tokenStart, this.tokenEnd, "url(") || this.error("Function name must be `url`"), this.eat(Nr.Function), this.skipSC(), t = M7.decode(this.consume(Nr.String)), this.skipSC(), this.eof || this.eat(Nr.RightParenthesis);
      break;
    default:
      this.error("Url or Function is expected");
  }
  return {
    type: "Url",
    loc: this.getLocation(e, this.tokenStart),
    value: t
  };
}
function F7(e) {
  this.token(Nr.Url, Z1.encode(e.value));
}
Za.generate = F7;
Za.name = I7;
Za.parse = _7;
Za.structure = R7;
var Ja = {};
const B7 = "Value", q7 = {
  children: [[]]
};
function U7() {
  const e = this.tokenStart, t = this.readSequence(this.scope.Value);
  return {
    type: "Value",
    loc: this.getLocation(e, this.tokenStart),
    children: t
  };
}
function j7(e) {
  this.children(e);
}
Ja.generate = j7;
Ja.name = B7;
Ja.parse = U7;
Ja.structure = q7;
var ei = {};
const J1 = _, z7 = Object.freeze({
  type: "WhiteSpace",
  loc: null,
  value: " "
}), G7 = "WhiteSpace", H7 = {
  value: String
};
function V7() {
  return this.eat(J1.WhiteSpace), z7;
}
function W7(e) {
  this.token(J1.WhiteSpace, e.value);
}
ei.generate = W7;
ei.name = G7;
ei.parse = V7;
ei.structure = H7;
const X7 = Aa, Y7 = tn, K7 = rn, Q7 = Ea, Z7 = nn, J7 = Ta, eO = Pa, tO = La, rO = Na, nO = Da, aO = Oa, iO = an, sO = Ma, oO = Ia, uO = sn, lO = on, cO = Ra, fO = _a, dO = Fa, hO = Ba, pO = qa, mO = Ua, gO = ja, bO = za, yO = Ga, vO = Ha, xO = un, kO = ln, wO = Va, SO = Wa, CO = cn, $O = Xa, AO = fn, EO = Ya, TO = dn, PO = Ka, LO = Qa, NO = Za, DO = Ja, OO = ei;
Z.AnPlusB = X7;
Z.Atrule = Y7;
Z.AtrulePrelude = K7;
Z.AttributeSelector = Q7;
Z.Block = Z7;
Z.Brackets = J7;
Z.CDC = eO;
Z.CDO = tO;
Z.ClassSelector = rO;
Z.Combinator = nO;
Z.Comment = aO;
Z.Declaration = iO;
Z.DeclarationList = sO;
Z.Dimension = oO;
Z.Function = uO;
Z.Hash = lO;
Z.Identifier = cO;
Z.IdSelector = fO;
Z.MediaFeature = dO;
Z.MediaQuery = hO;
Z.MediaQueryList = pO;
Z.Nth = mO;
Z.Number = gO;
Z.Operator = bO;
Z.Parentheses = yO;
Z.Percentage = vO;
Z.PseudoClassSelector = xO;
Z.PseudoElementSelector = kO;
Z.Ratio = wO;
Z.Raw = SO;
Z.Rule = CO;
Z.Selector = $O;
Z.SelectorList = AO;
Z.String = EO;
Z.StyleSheet = TO;
Z.TypeSelector = PO;
Z.UnicodeRange = LO;
Z.Url = NO;
Z.Value = DO;
Z.WhiteSpace = OO;
const MO = UL, IO = Z, RO = {
  generic: !0,
  ...MO,
  node: IO
};
var _O = RO, Iu = {};
const ft = _, FO = 35, BO = 42, ep = 43, qO = 45, UO = 47, jO = 117;
function zO(e) {
  switch (this.tokenType) {
    case ft.Hash:
      return this.Hash();
    case ft.Comma:
      return this.Operator();
    case ft.LeftParenthesis:
      return this.Parentheses(this.readSequence, e.recognizer);
    case ft.LeftSquareBracket:
      return this.Brackets(this.readSequence, e.recognizer);
    case ft.String:
      return this.String();
    case ft.Dimension:
      return this.Dimension();
    case ft.Percentage:
      return this.Percentage();
    case ft.Number:
      return this.Number();
    case ft.Function:
      return this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e.recognizer);
    case ft.Url:
      return this.Url();
    case ft.Ident:
      return this.cmpChar(this.tokenStart, jO) && this.cmpChar(this.tokenStart + 1, ep) ? this.UnicodeRange() : this.Identifier();
    case ft.Delim: {
      const t = this.charCodeAt(this.tokenStart);
      if (t === UO || t === BO || t === ep || t === qO)
        return this.Operator();
      t === FO && this.error("Hex or identifier is expected", this.tokenStart + 1);
      break;
    }
  }
}
var ey = zO;
const GO = ey, HO = {
  getNode: GO
};
var VO = HO;
const Zt = _, WO = 35, XO = 42, YO = 43, KO = 47, tp = 46, QO = 62, ZO = 124, JO = 126;
function eM(e, t) {
  t.last !== null && t.last.type !== "Combinator" && e !== null && e.type !== "Combinator" && t.push({
    // FIXME: this.Combinator() should be used instead
    type: "Combinator",
    loc: null,
    name: " "
  });
}
function tM() {
  switch (this.tokenType) {
    case Zt.LeftSquareBracket:
      return this.AttributeSelector();
    case Zt.Hash:
      return this.IdSelector();
    case Zt.Colon:
      return this.lookupType(1) === Zt.Colon ? this.PseudoElementSelector() : this.PseudoClassSelector();
    case Zt.Ident:
      return this.TypeSelector();
    case Zt.Number:
    case Zt.Percentage:
      return this.Percentage();
    case Zt.Dimension:
      this.charCodeAt(this.tokenStart) === tp && this.error("Identifier is expected", this.tokenStart + 1);
      break;
    case Zt.Delim: {
      switch (this.charCodeAt(this.tokenStart)) {
        case YO:
        case QO:
        case JO:
        case KO:
          return this.Combinator();
        case tp:
          return this.ClassSelector();
        case XO:
        case ZO:
          return this.TypeSelector();
        case WO:
          return this.IdSelector();
      }
      break;
    }
  }
}
const rM = {
  onWhiteSpace: eM,
  getNode: tM
};
var nM = rM;
function aM() {
  return this.createSingleNodeList(
    this.Raw(this.tokenIndex, null, !1)
  );
}
var iM = aM;
const rp = _;
function sM() {
  const e = this.createList();
  if (this.skipSC(), e.push(this.Identifier()), this.skipSC(), this.tokenType === rp.Comma) {
    e.push(this.Operator());
    const t = this.tokenIndex, r = this.parseCustomProperty ? this.Value(null) : this.Raw(this.tokenIndex, this.consumeUntilExclamationMarkOrSemicolon, !1);
    if (r.type === "Value" && r.children.isEmpty) {
      for (let n = t - this.tokenIndex; n <= 0; n++)
        if (this.lookupType(n) === rp.WhiteSpace) {
          r.children.appendData({
            type: "WhiteSpace",
            loc: null,
            value: " "
          });
          break;
        }
    }
    e.push(r);
  }
  return e;
}
var oM = sM;
const uM = ey, lM = iM, cM = oM;
function np(e) {
  return e !== null && e.type === "Operator" && (e.value[e.value.length - 1] === "-" || e.value[e.value.length - 1] === "+");
}
const fM = {
  getNode: uM,
  onWhiteSpace(e, t) {
    np(e) && (e.value = " " + e.value), np(t.last) && (t.last.value += " ");
  },
  expression: lM,
  var: cM
};
var dM = fM;
const hM = VO, pM = nM, mM = dM;
Iu.AtrulePrelude = hM;
Iu.Selector = pM;
Iu.Value = mM;
const gM = {
  parse: {
    prelude: null,
    block() {
      return this.Block(!0);
    }
  }
};
var bM = gM;
const yi = _, yM = {
  parse: {
    prelude() {
      const e = this.createList();
      switch (this.skipSC(), this.tokenType) {
        case yi.String:
          e.push(this.String());
          break;
        case yi.Url:
        case yi.Function:
          e.push(this.Url());
          break;
        default:
          this.error("String or url() is expected");
      }
      return (this.lookupNonWSType(0) === yi.Ident || this.lookupNonWSType(0) === yi.LeftParenthesis) && e.push(this.MediaQueryList()), e;
    },
    block: null
  }
};
var vM = yM;
const xM = {
  parse: {
    prelude() {
      return this.createSingleNodeList(
        this.MediaQueryList()
      );
    },
    block() {
      return this.Block(!1);
    }
  }
};
var kM = xM;
const wM = {
  parse: {
    prelude() {
      return this.createSingleNodeList(
        this.SelectorList()
      );
    },
    block() {
      return this.Block(!0);
    }
  }
};
var SM = wM;
const Mr = _;
function CM() {
  return this.createSingleNodeList(
    this.Raw(this.tokenIndex, null, !1)
  );
}
function $M() {
  return this.skipSC(), this.tokenType === Mr.Ident && this.lookupNonWSType(1) === Mr.Colon ? this.createSingleNodeList(
    this.Declaration()
  ) : ty.call(this);
}
function ty() {
  const e = this.createList();
  let t;
  this.skipSC();
  e:
    for (; !this.eof; ) {
      switch (this.tokenType) {
        case Mr.Comment:
        case Mr.WhiteSpace:
          this.next();
          continue;
        case Mr.Function:
          t = this.Function(CM, this.scope.AtrulePrelude);
          break;
        case Mr.Ident:
          t = this.Identifier();
          break;
        case Mr.LeftParenthesis:
          t = this.Parentheses($M, this.scope.AtrulePrelude);
          break;
        default:
          break e;
      }
      e.push(t);
    }
  return e;
}
const AM = {
  parse: {
    prelude() {
      const e = ty.call(this);
      return this.getFirstListNode(e) === null && this.error("Condition is expected"), e;
    },
    block() {
      return this.Block(!1);
    }
  }
};
var EM = AM;
const TM = bM, PM = vM, LM = kM, NM = SM, DM = EM, OM = {
  "font-face": TM,
  import: PM,
  media: LM,
  page: NM,
  supports: DM
};
var MM = OM;
const Sr = {
  parse() {
    return this.createSingleNodeList(
      this.SelectorList()
    );
  }
}, IM = {
  parse() {
    return this.createSingleNodeList(
      this.Selector()
    );
  }
}, ap = {
  parse() {
    return this.createSingleNodeList(
      this.Identifier()
    );
  }
}, uo = {
  parse() {
    return this.createSingleNodeList(
      this.Nth()
    );
  }
}, RM = {
  dir: ap,
  has: Sr,
  lang: ap,
  matches: Sr,
  is: Sr,
  "-moz-any": Sr,
  "-webkit-any": Sr,
  where: Sr,
  not: Sr,
  "nth-child": uo,
  "nth-last-child": uo,
  "nth-last-of-type": uo,
  "nth-of-type": uo,
  slotted: IM
};
var _M = RM, ee = {};
const FM = Aa, BM = tn, qM = rn, UM = Ea, jM = nn, zM = Ta, GM = Pa, HM = La, VM = Na, WM = Da, XM = Oa, YM = an, KM = Ma, QM = Ia, ZM = sn, JM = on, eI = Ra, tI = _a, rI = Fa, nI = Ba, aI = qa, iI = Ua, sI = ja, oI = za, uI = Ga, lI = Ha, cI = un, fI = ln, dI = Va, hI = Wa, pI = cn, mI = Xa, gI = fn, bI = Ya, yI = dn, vI = Ka, xI = Qa, kI = Za, wI = Ja, SI = ei;
ee.AnPlusB = FM.parse;
ee.Atrule = BM.parse;
ee.AtrulePrelude = qM.parse;
ee.AttributeSelector = UM.parse;
ee.Block = jM.parse;
ee.Brackets = zM.parse;
ee.CDC = GM.parse;
ee.CDO = HM.parse;
ee.ClassSelector = VM.parse;
ee.Combinator = WM.parse;
ee.Comment = XM.parse;
ee.Declaration = YM.parse;
ee.DeclarationList = KM.parse;
ee.Dimension = QM.parse;
ee.Function = ZM.parse;
ee.Hash = JM.parse;
ee.Identifier = eI.parse;
ee.IdSelector = tI.parse;
ee.MediaFeature = rI.parse;
ee.MediaQuery = nI.parse;
ee.MediaQueryList = aI.parse;
ee.Nth = iI.parse;
ee.Number = sI.parse;
ee.Operator = oI.parse;
ee.Parentheses = uI.parse;
ee.Percentage = lI.parse;
ee.PseudoClassSelector = cI.parse;
ee.PseudoElementSelector = fI.parse;
ee.Ratio = dI.parse;
ee.Raw = hI.parse;
ee.Rule = pI.parse;
ee.Selector = mI.parse;
ee.SelectorList = gI.parse;
ee.String = bI.parse;
ee.StyleSheet = yI.parse;
ee.TypeSelector = vI.parse;
ee.UnicodeRange = xI.parse;
ee.Url = kI.parse;
ee.Value = wI.parse;
ee.WhiteSpace = SI.parse;
const CI = Iu, $I = MM, AI = _M, EI = ee, TI = {
  parseContext: {
    default: "StyleSheet",
    stylesheet: "StyleSheet",
    atrule: "Atrule",
    atrulePrelude(e) {
      return this.AtrulePrelude(e.atrule ? String(e.atrule) : null);
    },
    mediaQueryList: "MediaQueryList",
    mediaQuery: "MediaQuery",
    rule: "Rule",
    selectorList: "SelectorList",
    selector: "Selector",
    block() {
      return this.Block(!0);
    },
    declarationList: "DeclarationList",
    declaration: "Declaration",
    value: "Value"
  },
  scope: CI,
  atrule: $I,
  pseudo: AI,
  node: EI
};
var PI = TI;
const LI = Z, NI = {
  node: LI
};
var DI = NI;
const OI = P1, MI = _O, II = PI, RI = DI, _I = OI({
  ...MI,
  ...II,
  ...RI
});
var FI = _I, BI = "2.2.1", vs = {};
const qI = hd, UI = Tu, jI = Nu, zI = Cd;
vs.SyntaxError = qI.SyntaxError;
vs.generate = UI.generate;
vs.parse = jI.parse;
vs.walk = zI.walk;
var ry = {};
const GI = Jr;
function Zc(e) {
  const t = {};
  for (const r in e) {
    let n = e[r];
    n && (Array.isArray(n) || n instanceof GI.List ? n = n.map(Zc) : n.constructor === Object && (n = Zc(n))), t[r] = n;
  }
  return t;
}
ry.clone = Zc;
var $d = {};
const ny = se, ip = $e, sp = 92;
function HI(e) {
  const t = e.length - 1;
  let r = "";
  for (let n = 0; n < e.length; n++) {
    let a = e.charCodeAt(n);
    if (a === sp) {
      if (n === t)
        break;
      if (a = e.charCodeAt(++n), ny.isValidEscape(sp, a)) {
        const i = n - 1, s = ip.consumeEscaped(e, i);
        n = s - 1, r += ip.decodeEscaped(e.substring(i + 1, s));
      } else
        a === 13 && e.charCodeAt(n + 1) === 10 && n++;
    } else
      r += e[n];
  }
  return r;
}
function VI(e) {
  let t = "";
  if (e.length === 1 && e.charCodeAt(0) === 45)
    return "\\-";
  for (let r = 0; r < e.length; r++) {
    const n = e.charCodeAt(r);
    if (n === 0) {
      t += "�";
      continue;
    }
    if (
      // If the character is in the range [\1-\1f] (U+0001 to U+001F) or is U+007F ...
      // Note: Do not compare with 0x0001 since 0x0000 is precessed before
      n <= 31 || n === 127 || // [or] ... is in the range [0-9] (U+0030 to U+0039),
      n >= 48 && n <= 57 && // If the character is the first character ...
      (r === 0 || // If the character is the second character ... and the first character is a "-" (U+002D)
      r === 1 && e.charCodeAt(0) === 45)
    ) {
      t += "\\" + n.toString(16) + " ";
      continue;
    }
    ny.isName(n) ? t += e.charAt(r) : t += "\\" + e.charAt(r);
  }
  return t;
}
$d.decode = HI;
$d.encode = VI;
const WI = FI, XI = BI, YI = P1, KI = Jr, QI = id, ZI = vs, JI = ry, Ru = en, eR = $d, tR = ys, rR = Mu, nR = _, aR = $u, iR = Au, {
  tokenize: sR,
  parse: oR,
  generate: uR,
  lexer: lR,
  createLexer: cR,
  walk: fR,
  find: dR,
  findLast: hR,
  findAll: pR,
  toPlainObject: mR,
  fromPlainObject: gR,
  fork: bR
} = WI;
W.version = XI.version;
W.createSyntax = YI;
W.List = KI.List;
W.Lexer = QI.Lexer;
W.definitionSyntax = ZI;
W.clone = JI.clone;
W.isCustomProperty = Ru.isCustomProperty;
W.keyword = Ru.keyword;
W.property = Ru.property;
W.vendorPrefix = Ru.vendorPrefix;
W.ident = eR;
W.string = tR;
W.url = rR;
W.tokenTypes = nR;
W.tokenNames = aR;
W.TokenStream = iR.TokenStream;
W.createLexer = cR;
W.find = dR;
W.findAll = pR;
W.findLast = hR;
W.fork = bR;
W.fromPlainObject = gR;
W.generate = uR;
W.lexer = lR;
W.parse = oR;
W.toPlainObject = mR;
W.tokenize = sR;
W.walk = fR;
var ay = {};
const { hasOwnProperty: yR } = Object.prototype;
function Ul(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  if (!Array.isArray(e))
    return null;
  for (let n of e)
    t && (n = n.toLowerCase()), r[n] = !0;
  return r;
}
function op(e) {
  if (!e)
    return null;
  const t = Ul(e.tags, !0), r = Ul(e.ids), n = Ul(e.classes);
  return t === null && r === null && n === null ? null : {
    tags: t,
    ids: r,
    classes: n
  };
}
function vR(e) {
  let t = !1;
  if (e.scopes && Array.isArray(e.scopes)) {
    t = /* @__PURE__ */ Object.create(null);
    for (let r = 0; r < e.scopes.length; r++) {
      const n = e.scopes[r];
      if (!n || !Array.isArray(n))
        throw new Error("Wrong usage format");
      for (const a of n) {
        if (yR.call(t, a))
          throw new Error(`Class can't be used for several scopes: ${a}`);
        t[a] = r + 1;
      }
    }
  }
  return {
    whitelist: op(e),
    blacklist: op(e.blacklist),
    scopes: t
  };
}
ay.buildIndex = vR;
var xs = {};
function xR(e) {
  return !e || !e.children || e.children.isEmpty;
}
function kR(e, t) {
  return e !== null && e.children === t;
}
xs.hasNoChildren = xR;
xs.isNodeChildrenList = kR;
const wR = W, lo = xs;
function SR(e, t, r) {
  if (e.block && (this.stylesheet !== null && (this.stylesheet.firstAtrulesAllowed = !1), lo.hasNoChildren(e.block))) {
    r.remove(t);
    return;
  }
  switch (e.name) {
    case "charset":
      if (lo.hasNoChildren(e.prelude)) {
        r.remove(t);
        return;
      }
      if (t.prev) {
        r.remove(t);
        return;
      }
      break;
    case "import":
      if (this.stylesheet === null || !this.stylesheet.firstAtrulesAllowed) {
        r.remove(t);
        return;
      }
      r.prevUntil(t.prev, function(n) {
        if (!(n.type === "Atrule" && (n.name === "import" || n.name === "charset")))
          return this.root.firstAtrulesAllowed = !1, r.remove(t), !0;
      }, this);
      break;
    default: {
      const n = wR.keyword(e.name).basename;
      (n === "keyframes" || n === "media" || n === "supports") && (lo.hasNoChildren(e.prelude) || lo.hasNoChildren(e.block)) && r.remove(t);
    }
  }
}
var CR = SR;
function $R(e, t, r) {
  r.remove(t);
}
var AR = $R;
const ER = W;
function TR(e, t, r) {
  if (e.value.children && e.value.children.isEmpty) {
    r.remove(t);
    return;
  }
  ER.property(e.property).custom && /\S/.test(e.value.value) && (e.value.value = e.value.value.trim());
}
var PR = TR;
const up = xs;
function LR(e, t, r) {
  (up.isNodeChildrenList(this.stylesheet, r) || up.isNodeChildrenList(this.block, r)) && r.remove(t);
}
var NR = LR;
const iy = W, jl = xs, { hasOwnProperty: wn } = Object.prototype, DR = /* @__PURE__ */ new Set(["keyframes"]);
function sy(e, t) {
  return e.children.forEach((r, n, a) => {
    let i = !1;
    iy.walk(r, function(s) {
      if (this.selector === null || this.selector === e)
        switch (s.type) {
          case "SelectorList":
            (this.function === null || this.function.name.toLowerCase() !== "not") && sy(s, t) && (i = !0);
            break;
          case "ClassSelector":
            t.whitelist !== null && t.whitelist.classes !== null && !wn.call(t.whitelist.classes, s.name) && (i = !0), t.blacklist !== null && t.blacklist.classes !== null && wn.call(t.blacklist.classes, s.name) && (i = !0);
            break;
          case "IdSelector":
            t.whitelist !== null && t.whitelist.ids !== null && !wn.call(t.whitelist.ids, s.name) && (i = !0), t.blacklist !== null && t.blacklist.ids !== null && wn.call(t.blacklist.ids, s.name) && (i = !0);
            break;
          case "TypeSelector":
            s.name.charAt(s.name.length - 1) !== "*" && (t.whitelist !== null && t.whitelist.tags !== null && !wn.call(t.whitelist.tags, s.name.toLowerCase()) && (i = !0), t.blacklist !== null && t.blacklist.tags !== null && wn.call(t.blacklist.tags, s.name.toLowerCase()) && (i = !0));
            break;
        }
    }), i && a.remove(n);
  }), e.children.isEmpty;
}
function OR(e, t, r, n) {
  if (jl.hasNoChildren(e.prelude) || jl.hasNoChildren(e.block)) {
    r.remove(t);
    return;
  }
  if (this.atrule && DR.has(iy.keyword(this.atrule.name).basename))
    return;
  const { usage: a } = n;
  if (a && (a.whitelist !== null || a.blacklist !== null) && (sy(e.prelude, a), jl.hasNoChildren(e.prelude))) {
    r.remove(t);
    return;
  }
}
var MR = OR;
function IR(e, t, r) {
  if (t.data.name !== "*")
    return;
  const a = t.next && t.next.data.type;
  (a === "IdSelector" || a === "ClassSelector" || a === "AttributeSelector" || a === "PseudoClassSelector" || a === "PseudoElementSelector") && r.remove(t);
}
var RR = IR;
function _R(e, t, r) {
  r.remove(t);
}
var FR = _R;
const BR = W, qR = CR, UR = AR, jR = PR, zR = NR, GR = MR, HR = RR, VR = FR, lp = {
  Atrule: qR,
  Comment: UR,
  Declaration: jR,
  Raw: zR,
  Rule: GR,
  TypeSelector: HR,
  WhiteSpace: VR
};
function WR(e, t) {
  BR.walk(e, {
    leave(r, n, a) {
      lp.hasOwnProperty(r.type) && lp[r.type].call(this, r, n, a, t);
    }
  });
}
var XR = WR;
function YR(e) {
  e.block.children.forEach((t) => {
    t.prelude.children.forEach((r) => {
      r.children.forEach((n, a) => {
        n.type === "Percentage" && n.value === "100" ? a.data = {
          type: "TypeSelector",
          loc: n.loc,
          name: "to"
        } : n.type === "TypeSelector" && n.name === "from" && (a.data = {
          type: "Percentage",
          loc: n.loc,
          value: "0"
        });
      });
    });
  });
}
var KR = YR;
const QR = W, ZR = KR;
function JR(e) {
  QR.keyword(e.name).basename === "keyframes" && ZR(e);
}
var e_ = JR;
const t_ = /^(-?\d|--)|[\u0000-\u002c\u002e\u002f\u003A-\u0040\u005B-\u005E\u0060\u007B-\u009f]/;
function r_(e) {
  return e === "" || e === "-" ? !1 : !t_.test(e);
}
function n_(e) {
  const t = e.value;
  !t || t.type !== "String" || r_(t.value) && (e.value = {
    type: "Identifier",
    loc: t.loc,
    name: t.value
  });
}
var a_ = n_;
function i_(e) {
  const t = e.children;
  t.forEachRight(function(r, n) {
    if (r.type === "Identifier") {
      if (r.name === "bold")
        n.data = {
          type: "Number",
          loc: r.loc,
          value: "700"
        };
      else if (r.name === "normal") {
        const a = n.prev;
        a && a.data.type === "Operator" && a.data.value === "/" && this.remove(a), this.remove(n);
      }
    }
  }), t.isEmpty && t.insert(t.createItem({
    type: "Identifier",
    name: "normal"
  }));
}
var s_ = i_;
function o_(e) {
  const t = e.children.head.data;
  if (t.type === "Identifier")
    switch (t.name) {
      case "normal":
        e.children.head.data = {
          type: "Number",
          loc: t.loc,
          value: "400"
        };
        break;
      case "bold":
        e.children.head.data = {
          type: "Number",
          loc: t.loc,
          value: "700"
        };
        break;
    }
}
var u_ = o_;
const l_ = W;
function c_(e) {
  function t() {
    n.length || n.unshift(
      {
        type: "Number",
        loc: null,
        value: "0"
      },
      {
        type: "Number",
        loc: null,
        value: "0"
      }
    ), r.push.apply(r, n), n = [];
  }
  let r = [], n = [];
  e.children.forEach((a) => {
    if (a.type === "Operator" && a.value === ",") {
      t(), r.push(a);
      return;
    }
    a.type === "Identifier" && (a.name === "transparent" || a.name === "none" || a.name === "repeat" || a.name === "scroll") || n.push(a);
  }), t(), e.children = new l_.List().fromArray(r);
}
var f_ = c_;
function d_(e) {
  e.children.forEach((t, r, n) => {
    t.type === "Identifier" && t.name.toLowerCase() === "none" && (n.head === n.tail ? r.data = {
      type: "Number",
      loc: t.loc,
      value: "0"
    } : n.remove(r));
  });
}
var h_ = d_;
const p_ = W, m_ = s_, g_ = u_, b_ = f_, cp = h_, fp = {
  font: m_,
  "font-weight": g_,
  background: b_,
  border: cp,
  outline: cp
};
function y_(e) {
  if (!this.declaration)
    return;
  const t = p_.property(this.declaration.property);
  fp.hasOwnProperty(t.basename) && fp[t.basename](e);
}
var v_ = y_, ti = {};
const x_ = /^(?:\+|(-))?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/, k_ = /^([\+\-])?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/, w_ = /* @__PURE__ */ new Set([
  "Dimension",
  "Hash",
  "Identifier",
  "Number",
  "Raw",
  "UnicodeRange"
]);
function oy(e, t) {
  const r = t && t.prev !== null && w_.has(t.prev.data.type) ? k_ : x_;
  return e = String(e).replace(r, "$1$2$3"), (e === "" || e === "-") && (e = "0"), e;
}
function S_(e) {
  e.value = oy(e.value);
}
ti.Number = S_;
ti.packNumber = oy;
const C_ = ti, $_ = /* @__PURE__ */ new Set([
  "calc",
  "min",
  "max",
  "clamp"
]), A_ = /* @__PURE__ */ new Set([
  // absolute length units
  "px",
  "mm",
  "cm",
  "in",
  "pt",
  "pc",
  // relative length units
  "em",
  "ex",
  "ch",
  "rem",
  // viewport-percentage lengths
  "vh",
  "vw",
  "vmin",
  "vmax",
  "vm"
]);
function E_(e, t) {
  const r = C_.packNumber(e.value);
  if (e.value = r, r === "0" && this.declaration !== null && this.atrulePrelude === null) {
    const n = e.unit.toLowerCase();
    if (!A_.has(n) || this.declaration.property === "-ms-flex" || this.declaration.property === "flex" || this.function && $_.has(this.function.name))
      return;
    t.data = {
      type: "Number",
      loc: e.loc,
      value: r
    };
  }
}
var T_ = E_;
const P_ = W, L_ = ti, N_ = /* @__PURE__ */ new Set([
  // see https://github.com/jakubpawlowicz/clean-css/issues/957
  "width",
  "min-width",
  "max-width",
  "height",
  "min-height",
  "max-height",
  // issue #410: Don’t remove units in flex-basis value for (-ms-)flex shorthand
  // issue #362: shouldn't remove unit in -ms-flex since it breaks flex in IE10/11
  // issue #200: shouldn't remove unit in flex since it breaks flex in IE10/11
  "flex",
  "-ms-flex"
]);
function D_(e, t) {
  e.value = L_.packNumber(e.value), e.value === "0" && this.declaration && !N_.has(this.declaration.property) && (t.data = {
    type: "Number",
    loc: e.loc,
    value: e.value
  }, P_.lexer.matchDeclaration(this.declaration).isType(t.data, "length") || (t.data = e));
}
var O_ = D_;
function M_(e) {
  e.value = e.value.replace(/\\/g, "/");
}
var I_ = M_, _u = {};
const R_ = W, __ = ti, dp = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgrey: "a9a9a9",
  darkgreen: "006400",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  grey: "808080",
  green: "008000",
  greenyellow: "adff2f",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgrey: "d3d3d3",
  lightgreen: "90ee90",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, hp = {
  8e5: "maroon",
  800080: "purple",
  808e3: "olive",
  808080: "gray",
  "00ffff": "cyan",
  f0ffff: "azure",
  f5f5dc: "beige",
  ffe4c4: "bisque",
  "000000": "black",
  "0000ff": "blue",
  a52a2a: "brown",
  ff7f50: "coral",
  ffd700: "gold",
  "008000": "green",
  "4b0082": "indigo",
  fffff0: "ivory",
  f0e68c: "khaki",
  "00ff00": "lime",
  faf0e6: "linen",
  "000080": "navy",
  ffa500: "orange",
  da70d6: "orchid",
  cd853f: "peru",
  ffc0cb: "pink",
  dda0dd: "plum",
  f00: "red",
  ff0000: "red",
  fa8072: "salmon",
  a0522d: "sienna",
  c0c0c0: "silver",
  fffafa: "snow",
  d2b48c: "tan",
  "008080": "teal",
  ff6347: "tomato",
  ee82ee: "violet",
  f5deb3: "wheat",
  ffffff: "white",
  ffff00: "yellow"
};
function zl(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function pp(e, t, r, n) {
  let a, i, s;
  if (t === 0)
    a = i = s = r;
  else {
    const u = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - u;
    a = zl(l, u, e + 1 / 3), i = zl(l, u, e), s = zl(l, u, e - 1 / 3);
  }
  return [
    Math.round(a * 255),
    Math.round(i * 255),
    Math.round(s * 255),
    n
  ];
}
function Gl(e) {
  return e = e.toString(16), e.length === 1 ? "0" + e : e;
}
function Hl(e, t, r) {
  let n = e.head, a = [], i = !1;
  for (; n !== null; ) {
    const { type: s, value: u } = n.data;
    switch (s) {
      case "Number":
      case "Percentage":
        if (i)
          return;
        i = !0, a.push({
          type: s,
          value: Number(u)
        });
        break;
      case "Operator":
        if (u === ",") {
          if (!i)
            return;
          i = !1;
        } else if (i || u !== "+")
          return;
        break;
      default:
        return;
    }
    n = n.next;
  }
  if (a.length === t) {
    if (a.length === 4) {
      if (a[3].type !== "Number")
        return;
      a[3].type = "Alpha";
    }
    if (r) {
      if (a[0].type !== a[1].type || a[0].type !== a[2].type)
        return;
    } else {
      if (a[0].type !== "Number" || a[1].type !== "Percentage" || a[2].type !== "Percentage")
        return;
      a[0].type = "Angle";
    }
    return a.map(function(s) {
      let u = Math.max(0, s.value);
      switch (s.type) {
        case "Number":
          u = Math.min(u, 255);
          break;
        case "Percentage":
          if (u = Math.min(u, 100) / 100, !r)
            return u;
          u = 255 * u;
          break;
        case "Angle":
          return (u % 360 + 360) % 360 / 360;
        case "Alpha":
          return Math.min(u, 1);
      }
      return Math.round(u);
    });
  }
}
function F_(e, t) {
  let r = e.name, n;
  if (r === "rgba" || r === "hsla") {
    if (n = Hl(e.children, 4, r === "rgba"), !n)
      return;
    if (r === "hsla" && (n = pp(...n), e.name = "rgba"), n[3] === 0) {
      const a = this.function && this.function.name;
      if (n[0] === 0 && n[1] === 0 && n[2] === 0 || !/^(?:to|from|color-stop)$|gradient$/i.test(a)) {
        t.data = {
          type: "Identifier",
          loc: e.loc,
          name: "transparent"
        };
        return;
      }
    }
    if (n[3] !== 1) {
      e.children.forEach((a, i, s) => {
        if (a.type === "Operator") {
          a.value !== "," && s.remove(i);
          return;
        }
        i.data = {
          type: "Number",
          loc: a.loc,
          value: __.packNumber(n.shift())
        };
      });
      return;
    }
    r = "rgb";
  }
  if (r === "hsl") {
    if (n = n || Hl(e.children, 3, !1), !n)
      return;
    n = pp(...n), r = "rgb";
  }
  if (r === "rgb") {
    if (n = n || Hl(e.children, 3, !0), !n)
      return;
    t.data = {
      type: "Hash",
      loc: e.loc,
      value: Gl(n[0]) + Gl(n[1]) + Gl(n[2])
    }, uy(t.data, t);
  }
}
function B_(e, t) {
  if (this.declaration === null)
    return;
  let r = e.name.toLowerCase();
  if (dp.hasOwnProperty(r) && R_.lexer.matchDeclaration(this.declaration).isType(e, "color")) {
    const n = dp[r];
    n.length + 1 <= r.length ? t.data = {
      type: "Hash",
      loc: e.loc,
      value: n
    } : (r === "grey" && (r = "gray"), e.name = r);
  }
}
function uy(e, t) {
  let r = e.value.toLowerCase();
  r.length === 6 && r[0] === r[1] && r[2] === r[3] && r[4] === r[5] && (r = r[0] + r[2] + r[4]), hp[r] ? t.data = {
    type: "Identifier",
    loc: e.loc,
    name: hp[r]
  } : e.value = r;
}
_u.compressFunction = F_;
_u.compressHex = uy;
_u.compressIdent = B_;
const q_ = W, U_ = e_, j_ = a_, z_ = v_, G_ = T_, H_ = O_, V_ = ti, W_ = I_, Vl = _u, mp = {
  Atrule: U_,
  AttributeSelector: j_,
  Value: z_,
  Dimension: G_,
  Percentage: H_,
  Number: V_.Number,
  Url: W_,
  Hash: Vl.compressHex,
  Identifier: Vl.compressIdent,
  Function: Vl.compressFunction
};
function X_(e) {
  q_.walk(e, {
    leave(t, r, n) {
      mp.hasOwnProperty(t.type) && mp[t.type].call(this, t, r, n);
    }
  });
}
var Y_ = X_;
const K_ = W;
class Q_ {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  resolve(t) {
    let r = this.map.get(t);
    return r === void 0 && (r = this.map.size + 1, this.map.set(t, r)), r;
  }
}
function Z_() {
  const e = new Q_();
  return function(r) {
    const n = K_.generate(r);
    return r.id = e.resolve(n), r.length = n.length, r.fingerprint = null, r;
  };
}
var J_ = Z_;
const eF = W;
function tF(e) {
  return e.type === "Raw" ? eF.parse(e.value, { context: "selectorList" }) : e;
}
function rF(e, t) {
  for (let r = 0; r < 3; r++)
    if (e[r] !== t[r])
      return e[r] > t[r] ? e : t;
  return e;
}
function gp(e) {
  return tF(e).children.reduce(
    (t, r) => rF(ly(r), t),
    [0, 0, 0]
  );
}
function ly(e) {
  let t = 0, r = 0, n = 0;
  return e.children.forEach((a) => {
    switch (a.type) {
      case "IdSelector":
        t++;
        break;
      case "ClassSelector":
      case "AttributeSelector":
        r++;
        break;
      case "PseudoClassSelector":
        switch (a.name.toLowerCase()) {
          case "not":
          case "has":
          case "is":
          case "matches":
          case "-webkit-any":
          case "-moz-any": {
            const [i, s, u] = gp(a.children.first);
            t += i, r += s, n += u;
            break;
          }
          case "nth-child":
          case "nth-last-child": {
            const i = a.children.first;
            if (i.type === "Nth" && i.selector) {
              const [s, u, l] = gp(i.selector);
              t += s, r += u + 1, n += l;
            } else
              r++;
            break;
          }
          case "where":
            break;
          case "before":
          case "after":
          case "first-line":
          case "first-letter":
            n++;
            break;
          default:
            r++;
        }
        break;
      case "TypeSelector":
        a.name.endsWith("*") || n++;
        break;
      case "PseudoElementSelector":
        n++;
        break;
    }
  }), [t, r, n];
}
var cy = ly;
const bp = W, nF = cy, aF = /* @__PURE__ */ new Set([
  "first-letter",
  "first-line",
  "after",
  "before"
]), iF = /* @__PURE__ */ new Set([
  "link",
  "visited",
  "hover",
  "active",
  "first-letter",
  "first-line",
  "after",
  "before"
]);
function sF(e, t) {
  const r = /* @__PURE__ */ new Set();
  e.prelude.children.forEach(function(n) {
    let a = "*", i = 0;
    n.children.forEach(function(s) {
      switch (s.type) {
        case "ClassSelector":
          if (t && t.scopes) {
            const u = t.scopes[s.name] || 0;
            if (i !== 0 && u !== i)
              throw new Error("Selector can't has classes from different scopes: " + bp.generate(n));
            i = u;
          }
          break;
        case "PseudoClassSelector": {
          const u = s.name.toLowerCase();
          iF.has(u) || r.add(`:${u}`);
          break;
        }
        case "PseudoElementSelector": {
          const u = s.name.toLowerCase();
          aF.has(u) || r.add(`::${u}`);
          break;
        }
        case "TypeSelector":
          a = s.name.toLowerCase();
          break;
        case "AttributeSelector":
          s.flags && r.add(`[${s.flags.toLowerCase()}]`);
          break;
        case "Combinator":
          a = "*";
          break;
      }
    }), n.compareMarker = nF(n).toString(), n.id = null, n.id = bp.generate(n), i && (n.compareMarker += ":" + i), a !== "*" && (n.compareMarker += "," + a);
  }), e.pseudoSignature = r.size > 0 ? [...r].sort().join(",") : !1;
}
var fy = sF;
const co = W, oF = J_, uF = fy;
function lF(e, t) {
  const r = oF();
  return co.walk(e, {
    visit: "Rule",
    enter(n) {
      n.block.children.forEach(r), uF(n, t.usage);
    }
  }), co.walk(e, {
    visit: "Atrule",
    enter(n) {
      n.prelude && (n.prelude.id = null, n.prelude.id = co.generate(n.prelude)), co.keyword(n.name).basename === "keyframes" && (n.block.avoidRulesMerge = !0, n.block.children.forEach(function(a) {
        a.prelude.children.forEach(function(i) {
          i.compareMarker = i.id;
        });
      }));
    }
  }), {
    declaration: r
  };
}
var cF = lF;
const Zo = W, { hasOwnProperty: yp } = Object.prototype;
function vp(e, t, r, n) {
  const a = t.data, i = Zo.keyword(a.name).basename, s = a.name.toLowerCase() + "/" + (a.prelude ? a.prelude.id : null);
  yp.call(e, i) || (e[i] = /* @__PURE__ */ Object.create(null)), n && delete e[i][s], yp.call(e[i], s) || (e[i][s] = new Zo.List()), e[i][s].append(r.remove(t));
}
function fF(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  let n = null;
  e.children.forEach(function(a, i, s) {
    if (a.type === "Atrule") {
      const u = Zo.keyword(a.name).basename;
      switch (u) {
        case "keyframes":
          vp(r, i, s, !0);
          return;
        case "media":
          if (t.forceMediaMerge) {
            vp(r, i, s, !1);
            return;
          }
          break;
      }
      n === null && u !== "charset" && u !== "import" && (n = i);
    } else
      n === null && (n = i);
  });
  for (const a in r)
    for (const i in r[a])
      e.children.insertList(
        r[a][i],
        a === "media" ? null : n
      );
}
function xp(e) {
  return e.type === "Atrule" && e.name === "media";
}
function dF(e, t, r) {
  if (!xp(e))
    return;
  const n = t.prev && t.prev.data;
  !n || !xp(n) || e.prelude && n.prelude && e.prelude.id === n.prelude.id && (n.block.children.appendList(e.block.children), r.remove(t));
}
function hF(e, t) {
  fF(e, t), Zo.walk(e, {
    visit: "Atrule",
    reverse: !0,
    enter: dF
  });
}
var pF = hF, Vt = {};
const { hasOwnProperty: mF } = Object.prototype;
function gF(e, t) {
  let r = e.head, n = t.head;
  for (; r !== null && n !== null && r.data.id === n.data.id; )
    r = r.next, n = n.next;
  return r === null && n === null;
}
function bF(e, t) {
  let r = e.head, n = t.head;
  for (; r !== null && n !== null && r.data.id === n.data.id; )
    r = r.next, n = n.next;
  return r === null && n === null;
}
function yF(e, t) {
  const r = {
    eq: [],
    ne1: [],
    ne2: [],
    ne2overrided: []
  }, n = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (let i = t.head; i; i = i.next)
    a[i.data.id] = !0;
  for (let i = e.head; i; i = i.next) {
    const s = i.data;
    s.fingerprint && (n[s.fingerprint] = s.important), a[s.id] ? (a[s.id] = !1, r.eq.push(s)) : r.ne1.push(s);
  }
  for (let i = t.head; i; i = i.next) {
    const s = i.data;
    a[s.id] && ((!mF.call(n, s.fingerprint) || !n[s.fingerprint] && s.important) && r.ne2.push(s), r.ne2overrided.push(s));
  }
  return r;
}
function vF(e, t) {
  return t.forEach((r) => {
    const n = r.id;
    let a = e.head;
    for (; a; ) {
      const i = a.data.id;
      if (i === n)
        return;
      if (i > n)
        break;
      a = a.next;
    }
    e.insert(e.createItem(r), a);
  }), e;
}
function dy(e, t) {
  let r = e.head;
  for (; r !== null; ) {
    let n = t.head;
    for (; n !== null; ) {
      if (r.data.compareMarker === n.data.compareMarker)
        return !0;
      n = n.next;
    }
    r = r.next;
  }
  return !1;
}
function hy(e) {
  switch (e.type) {
    case "Rule":
      return dy(e.prelude.children, this);
    case "Atrule":
      if (e.block)
        return e.block.children.some(hy, this);
      break;
    case "Declaration":
      return !1;
  }
  return !0;
}
Vt.addSelectors = vF;
Vt.compareDeclarations = yF;
Vt.hasSimilarSelectors = dy;
Vt.isEqualDeclarations = bF;
Vt.isEqualSelectors = gF;
Vt.unsafeToSkipNode = hy;
const xF = W, vi = Vt;
function kF(e, t, r) {
  const n = e.prelude.children, a = e.block.children;
  r.prevUntil(t.prev, function(i) {
    if (i.type !== "Rule")
      return vi.unsafeToSkipNode.call(n, i);
    const s = i.prelude.children, u = i.block.children;
    if (e.pseudoSignature === i.pseudoSignature) {
      if (vi.isEqualSelectors(s, n))
        return u.appendList(a), r.remove(t), !0;
      if (vi.isEqualDeclarations(a, u))
        return vi.addSelectors(s, n), r.remove(t), !0;
    }
    return vi.hasSimilarSelectors(n, s);
  });
}
function wF(e) {
  xF.walk(e, {
    visit: "Rule",
    enter: kF
  });
}
var SF = wF;
const py = W;
function CF(e, t, r) {
  const n = e.prelude.children;
  for (; n.head !== n.tail; ) {
    const a = new py.List();
    a.insert(n.remove(n.head)), r.insert(r.createItem({
      type: "Rule",
      loc: e.loc,
      prelude: {
        type: "SelectorList",
        loc: e.prelude.loc,
        children: a
      },
      block: {
        type: "Block",
        loc: e.block.loc,
        children: e.block.children.copy()
      },
      pseudoSignature: e.pseudoSignature
    }), t);
  }
}
function $F(e) {
  py.walk(e, {
    visit: "Rule",
    reverse: !0,
    enter: CF
  });
}
var AF = $F;
const Tn = W, my = 1, EF = 2, Sn = 0, xi = 1, Wl = 2, fo = 3, kp = ["top", "right", "bottom", "left"], TF = {
  "margin-top": "top",
  "margin-right": "right",
  "margin-bottom": "bottom",
  "margin-left": "left",
  "padding-top": "top",
  "padding-right": "right",
  "padding-bottom": "bottom",
  "padding-left": "left",
  "border-top-color": "top",
  "border-right-color": "right",
  "border-bottom-color": "bottom",
  "border-left-color": "left",
  "border-top-width": "top",
  "border-right-width": "right",
  "border-bottom-width": "bottom",
  "border-left-width": "left",
  "border-top-style": "top",
  "border-right-style": "right",
  "border-bottom-style": "bottom",
  "border-left-style": "left"
}, wp = {
  margin: "margin",
  "margin-top": "margin",
  "margin-right": "margin",
  "margin-bottom": "margin",
  "margin-left": "margin",
  padding: "padding",
  "padding-top": "padding",
  "padding-right": "padding",
  "padding-bottom": "padding",
  "padding-left": "padding",
  "border-color": "border-color",
  "border-top-color": "border-color",
  "border-right-color": "border-color",
  "border-bottom-color": "border-color",
  "border-left-color": "border-color",
  "border-width": "border-width",
  "border-top-width": "border-width",
  "border-right-width": "border-width",
  "border-bottom-width": "border-width",
  "border-left-width": "border-width",
  "border-style": "border-style",
  "border-top-style": "border-style",
  "border-right-style": "border-style",
  "border-bottom-style": "border-style",
  "border-left-style": "border-style"
};
class PF {
  constructor(t) {
    this.name = t, this.loc = null, this.iehack = void 0, this.sides = {
      top: null,
      right: null,
      bottom: null,
      left: null
    };
  }
  getValueSequence(t, r) {
    const n = [];
    let a = "";
    return t.value.type !== "Value" || t.value.children.some(function(s) {
      let u = !1;
      switch (s.type) {
        case "Identifier":
          switch (s.name) {
            case "\\0":
            case "\\9":
              a = s.name;
              return;
            case "inherit":
            case "initial":
            case "unset":
            case "revert":
              u = s.name;
              break;
          }
          break;
        case "Dimension":
          switch (s.unit) {
            case "rem":
            case "vw":
            case "vh":
            case "vmin":
            case "vmax":
            case "vm":
              u = s.unit;
              break;
          }
          break;
        case "Hash":
        case "Number":
        case "Percentage":
          break;
        case "Function":
          if (s.name === "var")
            return !0;
          u = s.name;
          break;
        default:
          return !0;
      }
      n.push({
        node: s,
        special: u,
        important: t.important
      });
    }) || n.length > r || typeof this.iehack == "string" && this.iehack !== a ? !1 : (this.iehack = a, n);
  }
  canOverride(t, r) {
    const n = this.sides[t];
    return !n || r.important && !n.important;
  }
  add(t, r) {
    function n() {
      const a = this.sides, i = TF[t];
      if (i) {
        if (!(i in a))
          return !1;
        const s = this.getValueSequence(r, 1);
        if (!s || !s.length)
          return !1;
        for (const u in a)
          if (a[u] !== null && a[u].special !== s[0].special)
            return !1;
        return this.canOverride(i, s[0]) && (a[i] = s[0]), !0;
      } else if (t === this.name) {
        const s = this.getValueSequence(r, 4);
        if (!s || !s.length)
          return !1;
        switch (s.length) {
          case 1:
            s[xi] = s[Sn], s[Wl] = s[Sn], s[fo] = s[Sn];
            break;
          case 2:
            s[Wl] = s[Sn], s[fo] = s[xi];
            break;
          case 3:
            s[fo] = s[xi];
            break;
        }
        for (let u = 0; u < 4; u++)
          for (const l in a)
            if (a[l] !== null && a[l].special !== s[u].special)
              return !1;
        for (let u = 0; u < 4; u++)
          this.canOverride(kp[u], s[u]) && (a[kp[u]] = s[u]);
        return !0;
      }
    }
    return n.call(this) ? (this.loc || (this.loc = r.loc), !0) : !1;
  }
  isOkToMinimize() {
    const t = this.sides.top, r = this.sides.right, n = this.sides.bottom, a = this.sides.left;
    if (t && r && n && a) {
      const i = t.important + r.important + n.important + a.important;
      return i === 0 || i === 4;
    }
    return !1;
  }
  getValue() {
    const t = new Tn.List(), r = this.sides, n = [
      r.top,
      r.right,
      r.bottom,
      r.left
    ], a = [
      Tn.generate(r.top.node),
      Tn.generate(r.right.node),
      Tn.generate(r.bottom.node),
      Tn.generate(r.left.node)
    ];
    a[fo] === a[xi] && (n.pop(), a[Wl] === a[Sn] && (n.pop(), a[xi] === a[Sn] && n.pop()));
    for (let i = 0; i < n.length; i++)
      t.appendData(n[i].node);
    return this.iehack && t.appendData({
      type: "Identifier",
      loc: null,
      name: this.iehack
    }), {
      type: "Value",
      loc: null,
      children: t
    };
  }
  getDeclaration() {
    return {
      type: "Declaration",
      loc: this.loc,
      important: this.sides.top.important,
      property: this.name,
      value: this.getValue()
    };
  }
}
function LF(e, t, r, n) {
  const a = e.block.children, i = e.prelude.children.first.id;
  return e.block.children.forEachRight(function(s, u) {
    const l = s.property;
    if (!wp.hasOwnProperty(l))
      return;
    const o = wp[l];
    let c, f;
    if ((!n || i === n) && o in t && (f = EF, c = t[o]), (!c || !c.add(l, s)) && (f = my, c = new PF(o), !c.add(l, s))) {
      n = null;
      return;
    }
    t[o] = c, r.push({
      operation: f,
      block: a,
      item: u,
      shorthand: c
    }), n = i;
  }), n;
}
function NF(e, t) {
  e.forEach(function(r) {
    const n = r.shorthand;
    n.isOkToMinimize() && (r.operation === my ? r.item.data = t(n.getDeclaration()) : r.block.remove(r.item));
  });
}
function DF(e, t) {
  const r = {}, n = [];
  Tn.walk(e, {
    visit: "Rule",
    reverse: !0,
    enter(a) {
      const i = this.block || this.stylesheet, s = (a.pseudoSignature || "") + "|" + a.prelude.children.first.id;
      let u, l;
      r.hasOwnProperty(i.id) ? u = r[i.id] : (u = {
        lastShortSelector: null
      }, r[i.id] = u), u.hasOwnProperty(s) ? l = u[s] : (l = {}, u[s] = l), u.lastShortSelector = LF.call(this, a, l, n, u.lastShortSelector);
    }
  }), NF(n, t.declaration);
}
var OF = DF;
const Ir = W;
let MF = 1;
const IF = /* @__PURE__ */ new Set([
  "src"
  // https://github.com/afelix/csso/issues/50
]), Sp = {
  // https://developer.mozilla.org/en-US/docs/Web/CSS/display#Browser_compatibility
  display: /table|ruby|flex|-(flex)?box$|grid|contents|run-in/i,
  // https://developer.mozilla.org/en/docs/Web/CSS/text-align
  "text-align": /^(start|end|match-parent|justify-all)$/i
}, Cp = {
  cursor: [
    "auto",
    "crosshair",
    "default",
    "move",
    "text",
    "wait",
    "help",
    "n-resize",
    "e-resize",
    "s-resize",
    "w-resize",
    "ne-resize",
    "nw-resize",
    "se-resize",
    "sw-resize",
    "pointer",
    "progress",
    "not-allowed",
    "no-drop",
    "vertical-text",
    "all-scroll",
    "col-resize",
    "row-resize"
  ],
  overflow: [
    "hidden",
    "visible",
    "scroll",
    "auto"
  ],
  position: [
    "static",
    "relative",
    "absolute",
    "fixed"
  ]
}, $p = {
  "border-width": ["border"],
  "border-style": ["border"],
  "border-color": ["border"],
  "border-top": ["border"],
  "border-right": ["border"],
  "border-bottom": ["border"],
  "border-left": ["border"],
  "border-top-width": ["border-top", "border-width", "border"],
  "border-right-width": ["border-right", "border-width", "border"],
  "border-bottom-width": ["border-bottom", "border-width", "border"],
  "border-left-width": ["border-left", "border-width", "border"],
  "border-top-style": ["border-top", "border-style", "border"],
  "border-right-style": ["border-right", "border-style", "border"],
  "border-bottom-style": ["border-bottom", "border-style", "border"],
  "border-left-style": ["border-left", "border-style", "border"],
  "border-top-color": ["border-top", "border-color", "border"],
  "border-right-color": ["border-right", "border-color", "border"],
  "border-bottom-color": ["border-bottom", "border-color", "border"],
  "border-left-color": ["border-left", "border-color", "border"],
  "margin-top": ["margin"],
  "margin-right": ["margin"],
  "margin-bottom": ["margin"],
  "margin-left": ["margin"],
  "padding-top": ["padding"],
  "padding-right": ["padding"],
  "padding-bottom": ["padding"],
  "padding-left": ["padding"],
  "font-style": ["font"],
  "font-variant": ["font"],
  "font-weight": ["font"],
  "font-size": ["font"],
  "font-family": ["font"],
  "list-style-type": ["list-style"],
  "list-style-position": ["list-style"],
  "list-style-image": ["list-style"]
};
function gy(e, t, r) {
  const n = Ir.property(e).basename;
  if (n === "background")
    return e + ":" + Ir.generate(t.value);
  const a = t.id;
  let i = r[a];
  if (!i) {
    switch (t.value.type) {
      case "Value":
        const s = {};
        let u = "", l = "", o = !1;
        t.value.children.forEach(function c(f) {
          switch (f.type) {
            case "Value":
            case "Brackets":
            case "Parentheses":
              f.children.forEach(c);
              break;
            case "Raw":
              o = !0;
              break;
            case "Identifier": {
              const { name: d } = f;
              u || (u = Ir.keyword(d).vendor), /\\[09]/.test(d) && (l = RegExp.lastMatch), Cp.hasOwnProperty(n) ? Cp[n].indexOf(d) === -1 && (s[d] = !0) : Sp.hasOwnProperty(n) && Sp[n].test(d) && (s[d] = !0);
              break;
            }
            case "Function": {
              let { name: d } = f;
              u || (u = Ir.keyword(d).vendor), d === "rect" && (f.children.some(
                (p) => p.type === "Operator" && p.value === ","
              ) || (d = "rect-backward")), s[d + "()"] = !0, f.children.forEach(c);
              break;
            }
            case "Dimension": {
              const { unit: d } = f;
              switch (/\\[09]/.test(d) && (l = RegExp.lastMatch), d) {
                case "rem":
                case "vw":
                case "vh":
                case "vmin":
                case "vmax":
                case "vm":
                  s[d] = !0;
                  break;
              }
              break;
            }
          }
        }), i = o ? "!" + MF++ : "!" + Object.keys(s).sort() + "|" + l + u;
        break;
      case "Raw":
        i = "!" + t.value.value;
        break;
      default:
        i = Ir.generate(t.value);
    }
    r[a] = i;
  }
  return e + i;
}
function RF(e, t, r) {
  const n = Ir.property(t.property);
  if ($p.hasOwnProperty(n.basename)) {
    const a = $p[n.basename];
    for (const i of a) {
      const s = gy(n.prefix + i, t, r), u = e.hasOwnProperty(s) ? e[s] : null;
      if (u && (!t.important || u.item.data.important))
        return u;
    }
  }
}
function _F(e, t, r, n, a) {
  const i = e.block.children;
  i.forEachRight(function(s, u) {
    const { property: l } = s, o = gy(l, s, a), c = n[o];
    c && !IF.has(l) ? s.important && !c.item.data.important ? (n[o] = {
      block: i,
      item: u
    }, c.block.remove(c.item)) : i.remove(u) : RF(n, s, a) ? i.remove(u) : (s.fingerprint = o, n[o] = {
      block: i,
      item: u
    });
  }), i.isEmpty && r.remove(t);
}
function FF(e) {
  const t = {}, r = /* @__PURE__ */ Object.create(null);
  Ir.walk(e, {
    visit: "Rule",
    reverse: !0,
    enter(n, a, i) {
      const s = this.block || this.stylesheet, u = (n.pseudoSignature || "") + "|" + n.prelude.children.first.id;
      let l, o;
      t.hasOwnProperty(s.id) ? l = t[s.id] : (l = {}, t[s.id] = l), l.hasOwnProperty(u) ? o = l[u] : (o = {}, l[u] = o), _F.call(this, n, a, i, o, r);
    }
  });
}
var BF = FF;
const qF = W, Ap = Vt;
function UF(e, t, r) {
  const n = e.prelude.children, a = e.block.children, i = n.first.compareMarker, s = {};
  r.nextUntil(t.next, function(u, l) {
    if (u.type !== "Rule")
      return Ap.unsafeToSkipNode.call(n, u);
    if (e.pseudoSignature !== u.pseudoSignature)
      return !0;
    const o = u.prelude.children.head, c = u.block.children, f = o.data.compareMarker;
    if (f in s)
      return !0;
    if (n.head === n.tail && n.first.id === o.data.id) {
      a.appendList(c), r.remove(l);
      return;
    }
    if (Ap.isEqualDeclarations(a, c)) {
      const d = o.data.id;
      n.some((h, p) => {
        const g = h.id;
        if (d < g)
          return n.insert(o, p), !0;
        if (!p.next)
          return n.insert(o), !0;
      }), r.remove(l);
      return;
    }
    if (f === i)
      return !0;
    s[f] = !0;
  });
}
function jF(e) {
  qF.walk(e, {
    visit: "Rule",
    enter: UF
  });
}
var zF = jF;
const Jc = W, Cr = Vt;
function Xl(e) {
  return e.reduce((t, r) => t + r.id.length + 1, 0) - 1;
}
function Yl(e) {
  let t = 0;
  for (const r of e)
    t += r.length;
  return t + // declarations
  e.length - 1;
}
function GF(e, t, r) {
  const n = this.block !== null ? this.block.avoidRulesMerge : !1, a = e.prelude.children, i = e.block, s = /* @__PURE__ */ Object.create(null);
  let u = !0, l = !0;
  r.prevUntil(t.prev, function(o, c) {
    const f = o.block, d = o.type;
    if (d !== "Rule") {
      const g = Cr.unsafeToSkipNode.call(a, o);
      return !g && d === "Atrule" && f && Jc.walk(f, {
        visit: "Rule",
        enter(x) {
          x.prelude.children.forEach((C) => {
            s[C.compareMarker] = !0;
          });
        }
      }), g;
    }
    if (e.pseudoSignature !== o.pseudoSignature)
      return !0;
    const h = o.prelude.children;
    if (l = !h.some(
      (g) => g.compareMarker in s
    ), !l && !u)
      return !0;
    if (u && Cr.isEqualSelectors(h, a))
      return f.children.appendList(i.children), r.remove(t), !0;
    const p = Cr.compareDeclarations(i.children, f.children);
    if (p.eq.length) {
      if (!p.ne1.length && !p.ne2.length)
        return l && (Cr.addSelectors(a, h), r.remove(c)), !0;
      if (!n)
        if (p.ne1.length && !p.ne2.length) {
          const g = Xl(a), x = Yl(p.eq);
          u && g < x && (Cr.addSelectors(h, a), i.children.fromArray(p.ne1));
        } else if (!p.ne1.length && p.ne2.length) {
          const g = Xl(h), x = Yl(p.eq);
          l && g < x && (Cr.addSelectors(a, h), f.children.fromArray(p.ne2));
        } else {
          const g = {
            type: "SelectorList",
            loc: null,
            children: Cr.addSelectors(h.copy(), a)
          }, x = Xl(g.children) + 2;
          if (Yl(p.eq) >= x) {
            const S = r.createItem({
              type: "Rule",
              loc: null,
              prelude: g,
              block: {
                type: "Block",
                loc: null,
                children: new Jc.List().fromArray(p.eq)
              },
              pseudoSignature: e.pseudoSignature
            });
            return i.children.fromArray(p.ne1), f.children.fromArray(p.ne2overrided), u ? r.insert(S, c) : r.insert(S, t), !0;
          }
        }
    }
    u && (u = !h.some(
      (g) => a.some(
        (x) => x.compareMarker === g.compareMarker
      )
    )), h.forEach((g) => {
      s[g.compareMarker] = !0;
    });
  });
}
function HF(e) {
  Jc.walk(e, {
    visit: "Rule",
    reverse: !0,
    enter: GF
  });
}
var VF = HF;
const WF = cF, XF = pF, YF = SF, KF = AF, QF = OF, ZF = BF, JF = zF, eB = VF;
function tB(e, t) {
  const r = WF(e, t);
  t.logger("prepare", e), XF(e, t), t.logger("mergeAtrule", e), YF(e), t.logger("initialMergeRuleset", e), KF(e), t.logger("disjoinRuleset", e), QF(e, r), t.logger("restructShorthand", e), ZF(e), t.logger("restructBlock", e), JF(e), t.logger("mergeRuleset", e), eB(e), t.logger("restructRuleset", e);
}
var rB = tB;
const Pt = W, nB = ay, aB = XR, iB = Y_, sB = rB;
function oB(e, t) {
  const r = new Pt.List();
  let n = !1, a;
  return e.nextUntil(e.head, (i, s, u) => {
    if (i.type === "Comment") {
      if (!t || i.value.charAt(0) !== "!") {
        u.remove(s);
        return;
      }
      if (n || a)
        return !0;
      u.remove(s), a = i;
      return;
    }
    i.type !== "WhiteSpace" && (n = !0), r.insert(u.remove(s));
  }), {
    comment: a,
    stylesheet: {
      type: "StyleSheet",
      loc: null,
      children: r
    }
  };
}
function uB(e, t, r, n) {
  n.logger(`Compress block #${r}`, null, !0);
  let a = 1;
  return e.type === "StyleSheet" && (e.firstAtrulesAllowed = t, e.id = a++), Pt.walk(e, {
    visit: "Atrule",
    enter(i) {
      i.block !== null && (i.block.id = a++);
    }
  }), n.logger("init", e), aB(e, n), n.logger("clean", e), iB(e), n.logger("replace", e), n.restructuring && sB(e, n), e;
}
function lB(e) {
  let t = "comments" in e ? e.comments : "exclamation";
  return typeof t == "boolean" ? t = t ? "exclamation" : !1 : t !== "exclamation" && t !== "first-exclamation" && (t = !1), t;
}
function cB(e) {
  return "restructure" in e ? e.restructure : "restructuring" in e ? e.restructuring : !0;
}
function fB(e) {
  return new Pt.List().appendData({
    type: "Rule",
    loc: null,
    prelude: {
      type: "SelectorList",
      loc: null,
      children: new Pt.List().appendData({
        type: "Selector",
        loc: null,
        children: new Pt.List().appendData({
          type: "TypeSelector",
          loc: null,
          name: "x"
        })
      })
    },
    block: e
  });
}
function dB(e, t) {
  e = e || { type: "StyleSheet", loc: null, children: new Pt.List() }, t = t || {};
  const r = {
    logger: typeof t.logger == "function" ? t.logger : function() {
    },
    restructuring: cB(t),
    forceMediaMerge: !!t.forceMediaMerge,
    usage: t.usage ? nB.buildIndex(t.usage) : !1
  }, n = new Pt.List();
  let a = lB(t), i = !0, s, u, l = 1, o;
  t.clone && (e = Pt.clone(e)), e.type === "StyleSheet" ? (s = e.children, e.children = n) : s = fB(e);
  do {
    if (u = oB(s, !!a), uB(u.stylesheet, i, l++, r), o = u.stylesheet.children, u.comment && (n.isEmpty || n.insert(Pt.List.createItem({
      type: "Raw",
      value: `
`
    })), n.insert(Pt.List.createItem(u.comment)), o.isEmpty || n.insert(Pt.List.createItem({
      type: "Raw",
      value: `
`
    }))), i && !o.isEmpty) {
      const c = o.last;
      (c.type !== "Atrule" || c.name !== "import" && c.name !== "charset") && (i = !1);
    }
    a !== "exclamation" && (a = !1), n.appendList(o);
  } while (!s.isEmpty);
  return {
    ast: e
  };
}
var hB = dB;
const Mn = W, pB = hB, mB = cy;
function Ep(e) {
  const t = Mn.string.encode(e, !0), r = Mn.string.encode(e);
  return t.length < r.length ? t : r;
}
const {
  lexer: gB,
  tokenize: bB,
  parse: yB,
  generate: vB,
  walk: xB,
  find: kB,
  findLast: wB,
  findAll: SB,
  fromPlainObject: CB,
  toPlainObject: $B
} = Mn.fork({
  node: {
    String: {
      generate(e) {
        this.token(Mn.tokenTypes.String, Ep(e.value));
      }
    },
    Url: {
      generate(e) {
        const t = Mn.url.encode(e.value), r = Ep(e.value);
        this.token(
          Mn.tokenTypes.Url,
          t.length <= r.length + 5 ? t : "url(" + r + ")"
        );
      }
    }
  }
});
it.compress = pB;
it.specificity = mB;
it.find = kB;
it.findAll = SB;
it.findLast = wB;
it.fromPlainObject = CB;
it.generate = vB;
it.lexer = gB;
it.parse = yB;
it.toPlainObject = $B;
it.tokenize = bB;
it.walk = xB;
var xr = {};
const AB = fy, ri = Vt;
xr.processSelector = AB;
xr.addSelectors = ri.addSelectors;
xr.compareDeclarations = ri.compareDeclarations;
xr.hasSimilarSelectors = ri.hasSimilarSelectors;
xr.isEqualDeclarations = ri.isEqualDeclarations;
xr.isEqualSelectors = ri.isEqualSelectors;
xr.unsafeToSkipNode = ri.unsafeToSkipNode;
const EB = WE, by = it, TB = xr, { parse: PB, generate: ef, compress: LB } = by;
function Cn(e, t, r, n) {
  return t.debug && console.error(`## ${e} done in %d ms
`, Date.now() - r), n;
}
function NB(e) {
  let t;
  return function(n, a) {
    let i = n;
    if (a && (i = `[${((Date.now() - t) / 1e3).toFixed(3)}s] ${i}`), e > 1 && a) {
      let s = ef(a);
      e === 2 && s.length > 256 && (s = s.substr(0, 256) + "..."), i += `
  ${s}
`;
    }
    console.error(i), t = Date.now();
  };
}
function DB(e) {
  return e = { ...e }, typeof e.logger != "function" && e.debug && (e.logger = NB(e.debug)), e;
}
function Tp(e, t, r) {
  Array.isArray(r) || (r = [r]), r.forEach((n) => n(e, t));
}
function yy(e, t, r) {
  r = r || {};
  const n = r.filename || "<unknown>";
  let a;
  const i = Cn(
    "parsing",
    r,
    Date.now(),
    PB(t, {
      context: e,
      filename: n,
      positions: !!r.sourceMap
    })
  );
  r.beforeCompress && Cn(
    "beforeCompress",
    r,
    Date.now(),
    Tp(i, r, r.beforeCompress)
  );
  const s = Cn(
    "compress",
    r,
    Date.now(),
    LB(i, DB(r))
  );
  return r.afterCompress && Cn(
    "afterCompress",
    r,
    Date.now(),
    Tp(s, r, r.afterCompress)
  ), r.sourceMap ? a = Cn("generate(sourceMap: true)", r, Date.now(), (() => {
    const u = ef(s.ast, { sourceMap: !0 });
    return u.map._file = n, u.map.setSourceContent(n, t), u;
  })()) : a = Cn("generate", r, Date.now(), {
    css: ef(s.ast),
    map: null
  }), a;
}
function OB(e, t) {
  return yy("stylesheet", e, t);
}
function MB(e, t) {
  return yy("declarationList", e, t);
}
vr.version = EB.version;
vr.syntax = by;
vr.utils = TB;
vr.minify = OB;
vr.minifyBlock = MB;
var st = {};
const at = oe, Kl = ns, {
  syntax: { specificity: IB }
} = vr, { visit: RB, matches: _B } = ne, {
  attrsGroups: FB,
  inheritableAttrs: BB,
  presentationNonInheritableGroupAttrs: qB
} = be, ho = at.walk.skip, Pp = (e, t) => {
  const r = [];
  e.block.children.forEach((a) => {
    a.type === "Declaration" && r.push({
      name: a.property,
      value: at.generate(a.value),
      important: a.important === !0
    });
  });
  const n = [];
  return at.walk(e.prelude, (a) => {
    if (a.type === "Selector") {
      const i = at.clone(a);
      let s = !1;
      at.walk(i, (u, l, o) => {
        u.type === "PseudoClassSelector" && (s = !0, o.remove(l));
      }), n.push({
        specificity: IB(a),
        dynamic: s || t,
        // compute specificity from original node to consider pseudo classes
        selector: at.generate(i),
        declarations: r
      });
    }
  }), n;
}, UB = (e, t) => {
  const r = [], n = at.parse(e, {
    parseValue: !1,
    parseAtrulePrelude: !1
  });
  return at.walk(n, (a) => {
    if (a.type === "Rule")
      return r.push(...Pp(a, t || !1)), ho;
    if (a.type === "Atrule")
      return a.name === "keyframes" || a.name === "-webkit-keyframes" || at.walk(a, (i) => {
        if (i.type === "Rule")
          return r.push(...Pp(i, t || !0)), ho;
      }), ho;
  }), r;
}, jB = (e) => {
  const t = [], r = at.parse(e, {
    context: "declarationList",
    parseValue: !1
  });
  return at.walk(r, (n) => {
    n.type === "Declaration" && t.push({
      name: n.property,
      value: at.generate(n.value),
      important: n.important === !0
    });
  }), t;
}, Lp = (e, t) => {
  const r = {}, n = /* @__PURE__ */ new Map();
  for (const [i, s] of Object.entries(t.attributes))
    FB.presentation.has(i) && (r[i] = { type: "static", inherited: !1, value: s }, n.set(i, !1));
  for (const { selector: i, declarations: s, dynamic: u } of e.rules)
    if (_B(t, i))
      for (const { name: l, value: o, important: c } of s) {
        const f = r[l];
        if (!(f && f.type === "dynamic")) {
          if (u) {
            r[l] = { type: "dynamic", inherited: !1 };
            continue;
          }
          (f == null || c === !0 || n.get(l) === !1) && (r[l] = { type: "static", inherited: !1, value: o }, n.set(l, c));
        }
      }
  const a = t.attributes.style == null ? [] : jB(t.attributes.style);
  for (const { name: i, value: s, important: u } of a) {
    const l = r[i];
    l && l.type === "dynamic" || (l == null || u === !0 || n.get(i) === !1) && (r[i] = { type: "static", inherited: !1, value: s }, n.set(i, u));
  }
  return r;
}, vy = (e, t) => {
  for (let r = 0; r < 4; r += 1) {
    if (e[r] < t[r])
      return -1;
    if (e[r] > t[r])
      return 1;
  }
  return 0;
};
st.compareSpecificity = vy;
const zB = (e) => {
  const t = [], r = /* @__PURE__ */ new Map();
  return RB(e, {
    element: {
      enter: (n, a) => {
        if (r.set(n, a), n.name === "style" && (n.attributes.type == null || n.attributes.type === "" || n.attributes.type === "text/css")) {
          const i = n.attributes.media != null && n.attributes.media !== "all";
          for (const s of n.children)
            (s.type === "text" || s.type === "cdata") && t.push(...UB(s.value, i));
        }
      }
    }
  }), t.sort((n, a) => vy(n.specificity, a.specificity)), { rules: t, parents: r };
};
st.collectStylesheet = zB;
const GB = (e, t) => {
  const { parents: r } = e, n = Lp(e, t);
  let a = r.get(t);
  for (; a != null && a.type !== "root"; ) {
    const i = Lp(e, a);
    for (const [s, u] of Object.entries(i))
      n[s] == null && BB.has(s) && !qB.has(s) && (n[s] = { ...u, inherited: !0 });
    a = r.get(a);
  }
  return n;
};
st.computeStyle = GB;
const HB = (e, t, r = null, n = !1) => {
  const a = typeof e == "string" ? Kl.parse(e) : Kl.parse(at.generate(e.data));
  for (const i of a)
    if (i.some((u, l) => n && (l === i.length - 1 || !Kl.isTraversal(i[l + 1])) || u.type !== "attribute" || u.name !== t ? !1 : r == null ? !0 : u.value === r))
      return !0;
  return !1;
};
st.includesAttrSelector = HB;
const dt = oe, {
  syntax: { specificity: Np }
} = vr, {
  visitSkip: VB,
  querySelectorAll: WB,
  detachNodeFromParent: XB
} = ne, { compareSpecificity: YB, includesAttrSelector: Ql } = st, { attrsGroups: KB, pseudoClasses: Dp } = be;
ds.name = "inlineStyles";
ds.description = "inline styles (additional options)";
const QB = [
  ...Dp.functional,
  ...Dp.treeStructural
];
ds.fn = (e, t) => {
  const {
    onlyMatchedOnce: r = !0,
    removeMatchedSelectors: n = !0,
    useMqs: a = ["", "screen"],
    usePseudos: i = [""]
  } = t, s = [];
  let u = [];
  return {
    element: {
      enter: (l, o) => {
        if (l.name === "foreignObject")
          return VB;
        if (l.name !== "style" || l.children.length === 0 || l.attributes.type != null && l.attributes.type !== "" && l.attributes.type !== "text/css")
          return;
        const c = l.children.filter((d) => d.type === "text" || d.type === "cdata").map((d) => d.value).join("");
        let f = null;
        try {
          f = dt.parse(c, {
            parseValue: !1,
            parseCustomProperty: !1
          });
        } catch {
          return;
        }
        f.type === "StyleSheet" && s.push({ node: l, parentNode: o, cssAst: f }), dt.walk(f, {
          visit: "Rule",
          enter(d) {
            const h = this.atrule;
            let p = "";
            h != null && (p = h.name, h.prelude != null && (p += ` ${dt.generate(h.prelude)}`)), a.includes(p) && d.prelude.type === "SelectorList" && d.prelude.children.forEach((g, x) => {
              if (g.type === "Selector") {
                const C = [];
                g.children.forEach(
                  (P, T, y) => {
                    (P.type === "PseudoClassSelector" || P.type === "PseudoElementSelector") && !QB.includes(P.name) && C.push({
                      item: T,
                      list: y
                    });
                  }
                );
                const S = dt.generate({
                  type: "Selector",
                  children: new dt.List().fromArray(
                    C.map((P) => P.item.data)
                  )
                });
                if (i.includes(S))
                  for (const P of C)
                    P.list.remove(P.item);
                u.push({ node: g, rule: d, item: x });
              }
            });
          }
        });
      }
    },
    root: {
      exit: () => {
        if (s.length === 0)
          return;
        const l = u.slice().sort((o, c) => {
          const f = Np(o.item.data), d = Np(c.item.data);
          return YB(f, d);
        }).reverse();
        for (const o of l) {
          const c = dt.generate(o.item.data), f = [];
          try {
            for (const d of WB(e, c))
              d.type === "element" && f.push(d);
          } catch {
            continue;
          }
          if (f.length !== 0 && !(r && f.length > 1)) {
            for (const d of f) {
              const h = dt.parse(
                d.attributes.style ?? "",
                {
                  context: "declarationList",
                  parseValue: !1
                }
              );
              if (h.type !== "DeclarationList")
                continue;
              const p = /* @__PURE__ */ new Map();
              let g;
              dt.walk(h, {
                visit: "Declaration",
                enter(C, S) {
                  g == null && (g = S), p.set(C.property.toLowerCase(), S);
                }
              }), dt.walk(o.rule, {
                visit: "Declaration",
                enter(C) {
                  const S = C.property;
                  KB.presentation.has(S) && !u.some(
                    (y) => Ql(y.item, S)
                  ) && delete d.attributes[S];
                  const P = p.get(S), T = h.children.createItem(C);
                  P == null ? h.children.insert(
                    T,
                    g
                  ) : P.data.important !== !0 && C.important === !0 && (h.children.replace(
                    P,
                    T
                  ), p.set(S, T));
                }
              });
              const x = dt.generate(h);
              x.length !== 0 && (d.attributes.style = x);
            }
            n && f.length !== 0 && o.rule.prelude.type === "SelectorList" && o.rule.prelude.children.remove(o.item), o.matchedElements = f;
          }
        }
        if (n) {
          for (const o of l)
            if (o.matchedElements != null && !(r && o.matchedElements.length > 1))
              for (const c of o.matchedElements) {
                const f = new Set(
                  c.attributes.class == null ? null : c.attributes.class.split(" ")
                );
                for (const h of o.node.children)
                  h.type === "ClassSelector" && !u.some(
                    (p) => Ql(
                      p.item,
                      "class",
                      h.name,
                      !0
                    )
                  ) && f.delete(h.name);
                f.size === 0 ? delete c.attributes.class : c.attributes.class = Array.from(f).join(" ");
                const d = o.node.children.first;
                (d == null ? void 0 : d.type) === "IdSelector" && c.attributes.id === d.name && !u.some(
                  (h) => Ql(
                    h.item,
                    "id",
                    d.name,
                    !0
                  )
                ) && delete c.attributes.id;
              }
          for (const o of s)
            if (dt.walk(o.cssAst, {
              visit: "Rule",
              enter: function(c, f, d) {
                c.type === "Rule" && c.prelude.type === "SelectorList" && c.prelude.children.isEmpty && d.remove(f);
              }
            }), o.cssAst.children.isEmpty)
              XB(o.node, o.parentNode);
            else {
              const c = o.node.children[0];
              (c.type === "text" || c.type === "cdata") && (c.value = dt.generate(o.cssAst));
            }
        }
      }
    }
  };
};
var ks = {}, Se = {};
const { attrsGroups: ki, referencesProps: ZB } = be, xy = /\burl\((["'])?#(.+?)\1\)/g, JB = /^#(.+?)$/, eq = /(\w+)\.[a-zA-Z]/;
Se.encodeSVGDatauri = (e, t) => {
  var r = "data:image/svg+xml";
  return !t || t === "base64" ? (r += ";base64,", e = r + Buffer.from(e).toString("base64")) : t === "enc" ? e = r + "," + encodeURIComponent(e) : t === "unenc" && (e = r + "," + e), e;
};
Se.decodeSVGDatauri = (e) => {
  var t = /data:image\/svg\+xml(;charset=[^;,]*)?(;base64)?,(.*)/, r = t.exec(e);
  if (!r) return e;
  var n = r[3];
  return r[2] ? e = Buffer.from(n, "base64").toString("utf8") : n.charAt(0) === "%" ? e = decodeURIComponent(n) : n.charAt(0) === "<" && (e = n), e;
};
Se.cleanupOutData = (e, t, r) => {
  let n = "", a, i;
  return e.forEach((s, u) => {
    if (a = " ", u == 0 && (a = ""), t.noSpaceAfterFlags && (r == "A" || r == "a")) {
      var l = u % 7;
      (l == 4 || l == 5) && (a = "");
    }
    const o = t.leadingZero ? ky(s) : s.toString();
    t.negativeExtraSpace && a != "" && (s < 0 || o.charAt(0) === "." && i % 1 !== 0) && (a = ""), i = s, n += a + o;
  }), n;
};
const ky = (e) => {
  const t = e.toString();
  return 0 < e && e < 1 && t.startsWith("0") ? t.slice(1) : -1 < e && e < 0 && t[1] === "0" ? t[0] + t.slice(2) : t;
};
Se.removeLeadingZero = ky;
const tq = (e) => e.name === "script" && e.children.length !== 0 || e.name === "a" && Object.entries(e.attributes).some(
  ([n, a]) => (n === "href" || n.endsWith(":href")) && a != null && a.trimStart().startsWith("javascript:")
) ? !0 : [
  ...ki.animationEvent,
  ...ki.documentEvent,
  ...ki.documentElementEvent,
  ...ki.globalEvent,
  ...ki.graphicalEvent
].some((r) => e.attributes[r] != null);
Se.hasScripts = tq;
const rq = (e) => new RegExp(xy).test(e);
Se.includesUrlReference = rq;
const nq = (e, t) => {
  const r = [];
  if (ZB.has(e)) {
    const n = t.matchAll(xy);
    for (const a of n)
      r.push(a[2]);
  }
  if (e === "href" || e.endsWith(":href")) {
    const n = JB.exec(t);
    n != null && r.push(n[1]);
  }
  if (e === "begin") {
    const n = eq.exec(t);
    n != null && r.push(n[1]);
  }
  return r.map((n) => decodeURI(n));
};
Se.findReferences = nq;
const aq = (e, t) => {
  const r = 10 ** t;
  return Math.round(e * r) / r;
};
Se.toFixed = aq;
const Op = vr, { detachNodeFromParent: iq } = ne, { hasScripts: sq } = Se;
ks.name = "minifyStyles";
ks.description = "minifies styles and removes unused styles";
ks.fn = (e, { usage: t, ...r }) => {
  const n = /* @__PURE__ */ new Map(), a = [], i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let l = !0, o = !0, c = !0, f = !1;
  typeof t == "boolean" ? (l = t, o = t, c = t) : t && (l = t.tags == null ? !0 : t.tags, o = t.ids == null ? !0 : t.ids, c = t.classes == null ? !0 : t.classes, f = t.force == null ? !1 : t.force);
  let d = !1;
  return {
    element: {
      enter: (h, p) => {
        if (sq(h) && (d = !0), i.add(h.name), h.attributes.id != null && s.add(h.attributes.id), h.attributes.class != null)
          for (const g of h.attributes.class.split(/\s+/))
            u.add(g);
        h.name === "style" && h.children.length !== 0 ? n.set(h, p) : h.attributes.style != null && a.push(h);
      }
    },
    root: {
      exit: () => {
        const h = {};
        (!d || f) && (l && (h.tags = Array.from(i)), o && (h.ids = Array.from(s)), c && (h.classes = Array.from(u)));
        for (const [p, g] of n.entries())
          if (p.children[0].type === "text" || p.children[0].type === "cdata") {
            const x = p.children[0].value, C = Op.minify(x, {
              ...r,
              usage: h
            }).css;
            if (C.length === 0) {
              iq(p, g);
              continue;
            }
            x.indexOf(">") >= 0 || x.indexOf("<") >= 0 ? (p.children[0].type = "cdata", p.children[0].value = C) : (p.children[0].type = "text", p.children[0].value = C);
          }
        for (const p of a) {
          const g = p.attributes.style;
          p.attributes.style = Op.minifyBlock(g, {
            ...r
          }).css;
        }
      }
    }
  };
};
var ws = {};
const { visitSkip: oq } = ne, { hasScripts: uq, findReferences: lq } = Se;
ws.name = "cleanupIds";
ws.description = "removes unused IDs and minifies used";
const wy = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
], Mp = wy.length - 1, cq = (e, t) => {
  for (const r of t)
    if (e.startsWith(r))
      return !0;
  return !1;
}, fq = (e) => {
  if (e == null)
    return [0];
  e[e.length - 1] += 1;
  for (let t = e.length - 1; t > 0; t--)
    e[t] > Mp && (e[t] = 0, e[t - 1] !== void 0 && e[t - 1]++);
  return e[0] > Mp && (e[0] = 0, e.unshift(0)), e;
}, dq = (e) => e.map((t) => wy[t]).join("");
ws.fn = (e, t) => {
  const {
    remove: r = !0,
    minify: n = !0,
    preserve: a = [],
    preservePrefixes: i = [],
    force: s = !1
  } = t, u = new Set(
    Array.isArray(a) ? a : a ? [a] : []
  ), l = Array.isArray(i) ? i : i ? [i] : [], o = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  let f = !1;
  return {
    element: {
      enter: (d) => {
        if (!s) {
          if (d.name === "style" && d.children.length !== 0 || uq(d)) {
            f = !0;
            return;
          }
          if (d.name === "svg") {
            let h = !0;
            for (const p of d.children)
              if (p.type !== "element" || p.name !== "defs") {
                h = !1;
                break;
              }
            if (h)
              return oq;
          }
        }
        for (const [h, p] of Object.entries(d.attributes))
          if (h === "id") {
            const g = p;
            o.has(g) ? delete d.attributes.id : o.set(g, d);
          } else {
            const g = lq(h, p);
            for (const x of g) {
              let C = c.get(x);
              C == null && (C = [], c.set(x, C)), C.push({ element: d, name: h });
            }
          }
      }
    },
    root: {
      exit: () => {
        if (f)
          return;
        const d = (p) => u.has(p) || cq(p, l);
        let h = null;
        for (const [p, g] of c) {
          const x = o.get(p);
          if (x != null) {
            if (n && d(p) === !1) {
              let C = null;
              do
                h = fq(h), C = dq(h);
              while (d(C) || c.has(C) && o.get(C) == null);
              x.attributes.id = C;
              for (const { element: S, name: P } of g) {
                const T = S.attributes[P];
                T.includes("#") ? S.attributes[P] = T.replace(
                  `#${encodeURI(p)}`,
                  `#${C}`
                ) : S.attributes[P] = T.replace(
                  `${p}.`,
                  `${C}.`
                );
              }
            }
            o.delete(p);
          }
        }
        if (r)
          for (const [p, g] of o)
            d(p) === !1 && delete g.attributes.id;
      }
    }
  };
};
var Ss = {};
const { detachNodeFromParent: Ip } = ne, { elemsGroups: hq } = be;
Ss.name = "removeUselessDefs";
Ss.description = "removes elements in <defs> without id";
Ss.fn = () => ({
  element: {
    enter: (e, t) => {
      if (e.name === "defs") {
        const r = [];
        Sy(e, r), r.length === 0 && Ip(e, t);
        for (const n of r)
          Object.defineProperty(n, "parentNode", {
            writable: !0,
            value: e
          });
        e.children = r;
      } else hq.nonRendering.has(e.name) && e.attributes.id == null && Ip(e, t);
    }
  }
});
const Sy = (e, t) => {
  for (const r of e.children)
    r.type === "element" && (r.attributes.id != null || r.name === "style" ? t.push(r) : Sy(r, t));
};
var Cs = {};
const { removeLeadingZero: pq } = Se;
Cs.name = "cleanupNumericValues";
Cs.description = "rounds numeric values to the fixed precision, removes default ‘px’ units";
const mq = /^([-+]?\d*\.?\d+([eE][-+]?\d+)?)(px|pt|pc|mm|cm|m|in|ft|em|ex|%)?$/, Rp = {
  // relative to px
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  in: 96,
  pt: 4 / 3,
  pc: 16,
  px: 1
};
Cs.fn = (e, t) => {
  const {
    floatPrecision: r = 3,
    leadingZero: n = !0,
    defaultPx: a = !0,
    convertToPx: i = !0
  } = t;
  return {
    element: {
      enter: (s) => {
        if (s.attributes.viewBox != null) {
          const u = s.attributes.viewBox.split(/\s,?\s*|,\s*/g);
          s.attributes.viewBox = u.map((l) => {
            const o = Number(l);
            return Number.isNaN(o) ? l : Number(o.toFixed(r));
          }).join(" ");
        }
        for (const [u, l] of Object.entries(s.attributes)) {
          if (u === "version")
            continue;
          const o = l.match(mq);
          if (o) {
            let c = Number(Number(o[1]).toFixed(r)), d = o[3] || "";
            if (i && d !== "" && d in Rp) {
              const p = Number(
                (Rp[d] * Number(o[1])).toFixed(
                  r
                )
              );
              p.toString().length < o[0].length && (c = p, d = "px");
            }
            let h;
            n ? h = pq(c) : h = c.toString(), a && d === "px" && (d = ""), s.attributes[u] = h + d;
          }
        }
      }
    }
  };
};
var $s = {};
const wi = be;
$s.name = "convertColors";
$s.description = "converts colors: rgb() to #rrggbb and #rrggbb to #rgb";
const Zl = "([+-]?(?:\\d*\\.\\d+|\\d+\\.?)%?)", _p = "\\s*,\\s*", gq = new RegExp(
  "^rgb\\(\\s*" + Zl + _p + Zl + _p + Zl + "\\s*\\)$"
), bq = /^#(([a-fA-F0-9])\2){3}$/, yq = ([e, t, r]) => "#" + // operator precedence is (+) > (<<) > (|)
((256 + // [1][0]
e << // [1][r]
8 | // [1][r][0]
t) << // [1][r][g]
8 | // [1][r][g][0]
r).toString(16).slice(1).toUpperCase();
$s.fn = (e, t) => {
  const {
    currentColor: r = !1,
    names2hex: n = !0,
    rgb2hex: a = !0,
    shorthex: i = !0,
    shortname: s = !0
  } = t;
  return {
    element: {
      enter: (u) => {
        for (const [l, o] of Object.entries(u.attributes))
          if (wi.colorsProps.has(l)) {
            let c = o;
            if (r) {
              let f;
              typeof r == "string" ? f = c === r : r instanceof RegExp ? f = r.exec(c) != null : f = c !== "none", f && (c = "currentColor");
            }
            if (n) {
              const f = c.toLowerCase();
              wi.colorsNames[f] != null && (c = wi.colorsNames[f]);
            }
            if (a) {
              let f = c.match(gq);
              if (f != null) {
                let d = f.slice(1, 4).map((h) => {
                  let p;
                  return h.indexOf("%") > -1 ? p = Math.round(parseFloat(h) * 2.55) : p = Number(h), Math.max(0, Math.min(p, 255));
                });
                c = yq(d);
              }
            }
            if (i) {
              let f = c.match(bq);
              f != null && (c = "#" + f[0][1] + f[0][3] + f[0][5]);
            }
            if (s) {
              const f = c.toLowerCase();
              wi.colorsShortNames[f] != null && (c = wi.colorsShortNames[f]);
            }
            u.attributes[l] = c;
          }
      }
    }
  };
};
var As = {};
const { visitSkip: vq, detachNodeFromParent: Fp } = ne, { collectStylesheet: xq, computeStyle: kq } = st, {
  elems: wq,
  attrsGroups: Sq,
  elemsGroups: Cq,
  attrsGroupsDefaults: $q,
  presentationNonInheritableGroupAttrs: Aq
} = be;
As.name = "removeUnknownsAndDefaults";
As.description = "removes unknown elements content and attributes, removes attrs with default values";
const tf = /* @__PURE__ */ new Map(), Cy = /* @__PURE__ */ new Map(), $y = /* @__PURE__ */ new Map();
for (const [e, t] of Object.entries(wq)) {
  const r = /* @__PURE__ */ new Set();
  if (t.content)
    for (const i of t.content)
      r.add(i);
  if (t.contentGroups)
    for (const i of t.contentGroups) {
      const s = Cq[i];
      if (s)
        for (const u of s)
          r.add(u);
    }
  const n = /* @__PURE__ */ new Set();
  if (t.attrs)
    for (const i of t.attrs)
      n.add(i);
  const a = /* @__PURE__ */ new Map();
  if (t.defaults)
    for (const [i, s] of Object.entries(t.defaults))
      a.set(i, s);
  for (const i of t.attrsGroups) {
    const s = Sq[i];
    if (s)
      for (const l of s)
        n.add(l);
    const u = $q[i];
    if (u)
      for (const [l, o] of Object.entries(u))
        a.set(l, o);
  }
  tf.set(e, r), Cy.set(e, n), $y.set(e, a);
}
As.fn = (e, t) => {
  const {
    unknownContent: r = !0,
    unknownAttrs: n = !0,
    defaultAttrs: a = !0,
    defaultMarkupDeclarations: i = !0,
    uselessOverrides: s = !0,
    keepDataAttrs: u = !0,
    keepAriaAttrs: l = !0,
    keepRoleAttr: o = !1
  } = t, c = xq(e);
  return {
    instruction: {
      enter: (f) => {
        i && (f.value = f.value.replace(/\s*standalone\s*=\s*(["'])no\1/, ""));
      }
    },
    element: {
      enter: (f, d) => {
        if (f.name.includes(":"))
          return;
        if (f.name === "foreignObject")
          return vq;
        if (r && d.type === "element") {
          const x = tf.get(
            d.name
          );
          if (x == null || x.size === 0) {
            if (tf.get(f.name) == null) {
              Fp(f, d);
              return;
            }
          } else if (x.has(f.name) === !1) {
            Fp(f, d);
            return;
          }
        }
        const h = Cy.get(f.name), p = $y.get(f.name), g = d.type === "element" ? kq(c, d) : null;
        for (const [x, C] of Object.entries(f.attributes))
          if (!(u && x.startsWith("data-")) && !(l && x.startsWith("aria-")) && !(o && x === "role") && x !== "xmlns") {
            if (x.includes(":")) {
              const [S] = x.split(":");
              if (S !== "xml" && S !== "xlink")
                continue;
            }
            if (n && h && h.has(x) === !1 && delete f.attributes[x], a && f.attributes.id == null && p && p.get(x) === C && (g == null ? void 0 : g[x]) == null && delete f.attributes[x], s && f.attributes.id == null) {
              const S = g == null ? void 0 : g[x];
              Aq.has(x) === !1 && S != null && S.type === "static" && S.value === C && delete f.attributes[x];
            }
          }
      }
    }
  };
};
var Es = {};
const {
  inheritableAttrs: Eq,
  attrsGroups: Tq,
  presentationNonInheritableGroupAttrs: Pq
} = be;
Es.name = "removeNonInheritableGroupAttrs";
Es.description = "removes non-inheritable group’s presentational attributes";
Es.fn = () => ({
  element: {
    enter: (e) => {
      if (e.name === "g")
        for (const t of Object.keys(e.attributes))
          Tq.presentation.has(t) && !Eq.has(t) && !Pq.has(t) && delete e.attributes[t];
    }
  }
});
var Ts = {};
const { visit: Lq, visitSkip: Nq, detachNodeFromParent: Dq } = ne, { collectStylesheet: Oq, computeStyle: Bp } = st, { hasScripts: Mq } = Se, { elemsGroups: Iq } = be;
Ts.name = "removeUselessStrokeAndFill";
Ts.description = "removes useless stroke and fill attributes";
Ts.fn = (e, t) => {
  const {
    stroke: r = !0,
    fill: n = !0,
    removeNone: a = !1
  } = t;
  let i = !1;
  if (Lq(e, {
    element: {
      enter: (u) => {
        (u.name === "style" || Mq(u)) && (i = !0);
      }
    }
  }), i)
    return null;
  const s = Oq(e);
  return {
    element: {
      enter: (u, l) => {
        if (u.attributes.id != null)
          return Nq;
        if (!Iq.shape.has(u.name))
          return;
        const o = Bp(s, u), c = o.stroke, f = o["stroke-opacity"], d = o["stroke-width"], h = o["marker-end"], p = o.fill, g = o["fill-opacity"], x = l.type === "element" ? Bp(s, l) : null, C = x == null ? null : x.stroke;
        if (r && (c == null || c.type === "static" && c.value == "none" || f != null && f.type === "static" && f.value === "0" || d != null && d.type === "static" && d.value === "0") && (d != null && d.type === "static" && d.value === "0" || h == null)) {
          for (const S of Object.keys(u.attributes))
            S.startsWith("stroke") && delete u.attributes[S];
          C != null && C.type === "static" && C.value !== "none" && (u.attributes.stroke = "none");
        }
        if (n && (p != null && p.type === "static" && p.value === "none" || g != null && g.type === "static" && g.value === "0")) {
          for (const S of Object.keys(u.attributes))
            S.startsWith("fill-") && delete u.attributes[S];
          (p == null || p.type === "static" && p.value !== "none") && (u.attributes.fill = "none");
        }
        a && (c == null || u.attributes.stroke === "none") && (p != null && p.type === "static" && p.value === "none" || u.attributes.fill === "none") && Dq(u, l);
      }
    }
  };
};
var Ps = {};
Ps.name = "removeViewBox";
Ps.description = "removes viewBox attribute when possible";
const Rq = /* @__PURE__ */ new Set(["pattern", "svg", "symbol"]);
Ps.fn = () => ({
  element: {
    enter: (e, t) => {
      if (Rq.has(e.name) && e.attributes.viewBox != null && e.attributes.width != null && e.attributes.height != null) {
        if (e.name === "svg" && t.type !== "root")
          return;
        const r = e.attributes.viewBox.split(/[ ,]+/g);
        r[0] === "0" && r[1] === "0" && e.attributes.width.replace(/px$/, "") === r[2] && // could use parseFloat too
        e.attributes.height.replace(/px$/, "") === r[3] && delete e.attributes.viewBox;
      }
    }
  }
});
var Ls = {};
const Si = oe, { visit: _q } = ne;
Ls.name = "cleanupEnableBackground";
Ls.description = "remove or cleanup enable-background attribute when possible";
const Fq = /^new\s0\s0\s([-+]?\d*\.?\d+([eE][-+]?\d+)?)\s([-+]?\d*\.?\d+([eE][-+]?\d+)?)$/;
Ls.fn = (e) => {
  let t = !1;
  return _q(e, {
    element: {
      enter: (r) => {
        r.name === "filter" && (t = !0);
      }
    }
  }), {
    element: {
      enter: (r) => {
        let n = null, a = null;
        if (r.attributes.style != null && (n = Si.parse(r.attributes.style, {
          context: "declarationList"
        }), n.type === "DeclarationList")) {
          const s = [];
          Si.walk(n, (u, l) => {
            u.type === "Declaration" && u.property === "enable-background" && (s.push(l), a = l);
          });
          for (let u = 0; u < s.length - 1; u++)
            n.children.remove(s[u]);
        }
        if (!t) {
          delete r.attributes["enable-background"], (n == null ? void 0 : n.type) === "DeclarationList" && (a && n.children.remove(a), n.children.isEmpty ? delete r.attributes.style : r.attributes.style = Si.generate(n));
          return;
        }
        const i = r.attributes.width != null && r.attributes.height != null;
        if ((r.name === "svg" || r.name === "mask" || r.name === "pattern") && i) {
          const s = r.attributes["enable-background"], u = qp(
            s,
            r.name,
            r.attributes.width,
            r.attributes.height
          );
          if (u ? r.attributes["enable-background"] = u : delete r.attributes["enable-background"], (n == null ? void 0 : n.type) === "DeclarationList" && a) {
            const l = Si.generate(
              // @ts-ignore
              a.data.value
            ), o = qp(
              l,
              r.name,
              r.attributes.width,
              r.attributes.height
            );
            o ? a.data.value = {
              type: "Raw",
              value: o
            } : n.children.remove(a);
          }
        }
        (n == null ? void 0 : n.type) === "DeclarationList" && (n.children.isEmpty ? delete r.attributes.style : r.attributes.style = Si.generate(n));
      }
    }
  };
};
const qp = (e, t, r, n) => {
  const a = Fq.exec(e);
  return a != null && r === a[1] && n === a[3] ? t === "svg" ? void 0 : "new" : e;
};
var Ns = {}, ni = {};
const { removeLeadingZero: Bq, toFixed: qq } = Se, Ay = {
  M: 2,
  m: 2,
  Z: 0,
  z: 0,
  L: 2,
  l: 2,
  H: 1,
  h: 1,
  V: 1,
  v: 1,
  C: 6,
  c: 6,
  S: 4,
  s: 4,
  Q: 4,
  q: 4,
  T: 2,
  t: 2,
  A: 7,
  a: 7
}, Uq = (e) => e in Ay, jq = (e) => {
  const t = e.codePointAt(0);
  return t === 32 || t === 9 || t === 13 || t === 10;
}, zq = (e) => {
  const t = e.codePointAt(0);
  return t == null ? !1 : 48 <= t && t <= 57;
}, Jl = (e, t) => {
  let r = t, n = "", a = (
    /** @type {ReadNumberState} */
    "none"
  );
  for (; r < e.length; r += 1) {
    const s = e[r];
    if (s === "+" || s === "-") {
      if (a === "none") {
        a = "sign", n += s;
        continue;
      }
      if (a === "e") {
        a = "exponent_sign", n += s;
        continue;
      }
    }
    if (zq(s)) {
      if (a === "none" || a === "sign" || a === "whole") {
        a = "whole", n += s;
        continue;
      }
      if (a === "decimal_point" || a === "decimal") {
        a = "decimal", n += s;
        continue;
      }
      if (a === "e" || a === "exponent_sign" || a === "exponent") {
        a = "exponent", n += s;
        continue;
      }
    }
    if (s === "." && (a === "none" || a === "sign" || a === "whole")) {
      a = "decimal_point", n += s;
      continue;
    }
    if ((s === "E" || s == "e") && (a === "whole" || a === "decimal_point" || a === "decimal")) {
      a = "e", n += s;
      continue;
    }
    break;
  }
  const i = Number.parseFloat(n);
  return Number.isNaN(i) ? [t, null] : [r - 1, i];
}, Gq = (e) => {
  const t = [];
  let r = null, n = (
    /** @type {number[]} */
    []
  ), a = 0, i = !1, s = !1;
  for (let u = 0; u < e.length; u += 1) {
    const l = e.charAt(u);
    if (jq(l))
      continue;
    if (i && l === ",") {
      if (s)
        break;
      s = !0;
      continue;
    }
    if (Uq(l)) {
      if (s)
        return t;
      if (r == null) {
        if (l !== "M" && l !== "m")
          return t;
      } else if (n.length !== 0)
        return t;
      r = l, n = [], a = Ay[r], i = !1, a === 0 && t.push({ command: r, args: n });
      continue;
    }
    if (r == null)
      return t;
    let o = u, c = null;
    if (r === "A" || r === "a") {
      const f = n.length;
      (f === 0 || f === 1) && l !== "+" && l !== "-" && ([o, c] = Jl(e, u)), (f === 2 || f === 5 || f === 6) && ([o, c] = Jl(e, u)), (f === 3 || f === 4) && (l === "0" && (c = 0), l === "1" && (c = 1));
    } else
      [o, c] = Jl(e, u);
    if (c == null)
      return t;
    n.push(c), i = !0, s = !1, u = o, n.length === a && (t.push({ command: r, args: n }), r === "M" && (r = "L"), r === "m" && (r = "l"), n = []);
  }
  return t;
};
ni.parsePathData = Gq;
const Hq = (e, t) => (t != null && (e = qq(e, t)), {
  roundedStr: Bq(e),
  rounded: e
}), po = (e, t, r, n) => {
  let a = "", i;
  for (let s = 0; s < t.length; s++) {
    const { roundedStr: u, rounded: l } = Hq(t[s], r);
    n && (e === "A" || e === "a") && // consider combined arcs
    (s % 7 === 4 || s % 7 === 5) || s === 0 || l < 0 || !Number.isInteger(i) && l != 0 && l < 1 && l > -1 ? a += u : a += ` ${u}`, i = l;
  }
  return a;
}, Vq = ({ pathData: e, precision: t, disableSpaceAfterFlags: r }) => {
  if (e.length === 1) {
    const { command: i, args: s } = e[0];
    return i + po(i, s, t, r);
  }
  let n = "", a = { ...e[0] };
  e[1].command === "L" ? a.command = "M" : e[1].command === "l" && (a.command = "m");
  for (let i = 1; i < e.length; i++) {
    const { command: s, args: u } = e[i];
    a.command === s && a.command !== "M" && a.command !== "m" || // combine matching moveto and lineto sequences
    a.command === "M" && s === "L" || a.command === "m" && s === "l" ? (a.args = [...a.args, ...u], i === e.length - 1 && (n += a.command + po(
      a.command,
      a.args,
      t,
      r
    ))) : (n += a.command + po(
      a.command,
      a.args,
      t,
      r
    ), i === e.length - 1 ? n += s + po(s, u, t, r) : a = { command: s, args: u });
  }
  return n;
};
ni.stringifyPathData = Vq;
const { elemsGroups: Wq } = be, {
  visit: Xq,
  visitSkip: Up,
  querySelector: Yq,
  detachNodeFromParent: Ci
} = ne, { collectStylesheet: Kq, computeStyle: jp } = st, { parsePathData: Qq } = ni, { hasScripts: Zq, findReferences: Jq } = Se, eU = Wq.nonRendering;
Ns.name = "removeHiddenElems";
Ns.description = "removes hidden elements (zero sized, with absent attributes)";
Ns.fn = (e, t) => {
  const {
    isHidden: r = !0,
    displayNone: n = !0,
    opacity0: a = !0,
    circleR0: i = !0,
    ellipseRX0: s = !0,
    ellipseRY0: u = !0,
    rectWidth0: l = !0,
    rectHeight0: o = !0,
    patternWidth0: c = !0,
    patternHeight0: f = !0,
    imageWidth0: d = !0,
    imageHeight0: h = !0,
    pathEmptyD: p = !0,
    polylineEmptyPoints: g = !0,
    polygonEmptyPoints: x = !0
  } = t, C = Kq(e), S = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Map();
  let I = !1;
  function k(w, L) {
    w.type === "element" && w.attributes.id != null && L.type === "element" && L.name === "defs" && P.add(w.attributes.id), Ci(w, L);
  }
  return Xq(e, {
    element: {
      enter: (w, L) => {
        if (eU.has(w.name))
          return w.attributes.id == null ? (Ci(w, L), Up) : (S.set(w, L), Up);
        const v = jp(C, w);
        a && v.opacity && v.opacity.type === "static" && v.opacity.value === "0" && k(w, L);
      }
    }
  }), {
    element: {
      enter: (w, L) => {
        if (w.name === "style" && w.children.length !== 0 || Zq(w)) {
          I = !0;
          return;
        }
        if (w.name === "defs" && T.set(w, L), w.name === "use")
          for (const O of Object.keys(w.attributes)) {
            if (O !== "href" && !O.endsWith(":href")) continue;
            const H = w.attributes[O].slice(1);
            let q = D.get(H);
            q || (q = [], D.set(H, q)), q.push({ node: w, parentNode: L });
          }
        const v = jp(C, w);
        if (r && v.visibility && v.visibility.type === "static" && v.visibility.value === "hidden" && // keep if any descendant enables visibility
        Yq(w, "[visibility=visible]") == null) {
          k(w, L);
          return;
        }
        if (n && v.display && v.display.type === "static" && v.display.value === "none" && // markers with display: none still rendered
        w.name !== "marker") {
          k(w, L);
          return;
        }
        if (i && w.name === "circle" && w.children.length === 0 && w.attributes.r === "0") {
          k(w, L);
          return;
        }
        if (s && w.name === "ellipse" && w.children.length === 0 && w.attributes.rx === "0") {
          k(w, L);
          return;
        }
        if (u && w.name === "ellipse" && w.children.length === 0 && w.attributes.ry === "0") {
          k(w, L);
          return;
        }
        if (l && w.name === "rect" && w.children.length === 0 && w.attributes.width === "0") {
          k(w, L);
          return;
        }
        if (o && l && w.name === "rect" && w.children.length === 0 && w.attributes.height === "0") {
          k(w, L);
          return;
        }
        if (c && w.name === "pattern" && w.attributes.width === "0") {
          k(w, L);
          return;
        }
        if (f && w.name === "pattern" && w.attributes.height === "0") {
          k(w, L);
          return;
        }
        if (d && w.name === "image" && w.attributes.width === "0") {
          k(w, L);
          return;
        }
        if (h && w.name === "image" && w.attributes.height === "0") {
          k(w, L);
          return;
        }
        if (p && w.name === "path") {
          if (w.attributes.d == null) {
            k(w, L);
            return;
          }
          const O = Qq(w.attributes.d);
          if (O.length === 0) {
            k(w, L);
            return;
          }
          if (O.length === 1 && v["marker-start"] == null && v["marker-end"] == null) {
            k(w, L);
            return;
          }
        }
        if (g && w.name === "polyline" && w.attributes.points == null) {
          k(w, L);
          return;
        }
        if (x && w.name === "polygon" && w.attributes.points == null) {
          k(w, L);
          return;
        }
        for (const [O, N] of Object.entries(w.attributes)) {
          const H = Jq(O, N);
          for (const q of H)
            y.add(q);
        }
      }
    },
    root: {
      exit: () => {
        for (const w of P) {
          const L = D.get(w);
          if (L)
            for (const { node: v, parentNode: O } of L)
              Ci(v, O);
        }
        if (!I)
          for (const [
            w,
            L
          ] of S.entries()) {
            const v = w.attributes.id;
            y.has(v) || Ci(w, L);
          }
        for (const [w, L] of T.entries())
          w.children.length === 0 && Ci(w, L);
      }
    }
  };
};
var Ds = {};
const { detachNodeFromParent: ec } = ne;
Ds.name = "removeEmptyText";
Ds.description = "removes empty <text> elements";
Ds.fn = (e, t) => {
  const { text: r = !0, tspan: n = !0, tref: a = !0 } = t;
  return {
    element: {
      enter: (i, s) => {
        r && i.name === "text" && i.children.length === 0 && ec(i, s), n && i.name === "tspan" && i.children.length === 0 && ec(i, s), a && i.name === "tref" && i.attributes["xlink:href"] == null && ec(i, s);
      }
    }
  };
};
var Os = {};
const { stringifyPathData: $i } = ni, { detachNodeFromParent: tU } = ne;
Os.name = "convertShapeToPath";
Os.description = "converts basic shapes to more compact path form";
const rU = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;
Os.fn = (e, t) => {
  const { convertArcs: r = !1, floatPrecision: n } = t;
  return {
    element: {
      enter: (a, i) => {
        if (a.name === "rect" && a.attributes.width != null && a.attributes.height != null && a.attributes.rx == null && a.attributes.ry == null) {
          const s = Number(a.attributes.x || "0"), u = Number(a.attributes.y || "0"), l = Number(a.attributes.width), o = Number(a.attributes.height);
          if (Number.isNaN(s - u + l - o)) return;
          const c = [
            { command: "M", args: [s, u] },
            { command: "H", args: [s + l] },
            { command: "V", args: [u + o] },
            { command: "H", args: [s] },
            { command: "z", args: [] }
          ];
          a.name = "path", a.attributes.d = $i({ pathData: c, precision: n }), delete a.attributes.x, delete a.attributes.y, delete a.attributes.width, delete a.attributes.height;
        }
        if (a.name === "line") {
          const s = Number(a.attributes.x1 || "0"), u = Number(a.attributes.y1 || "0"), l = Number(a.attributes.x2 || "0"), o = Number(a.attributes.y2 || "0");
          if (Number.isNaN(s - u + l - o)) return;
          const c = [
            { command: "M", args: [s, u] },
            { command: "L", args: [l, o] }
          ];
          a.name = "path", a.attributes.d = $i({ pathData: c, precision: n }), delete a.attributes.x1, delete a.attributes.y1, delete a.attributes.x2, delete a.attributes.y2;
        }
        if ((a.name === "polyline" || a.name === "polygon") && a.attributes.points != null) {
          const s = (a.attributes.points.match(rU) || []).map(
            Number
          );
          if (s.length < 4) {
            tU(a, i);
            return;
          }
          const u = [];
          for (let l = 0; l < s.length; l += 2)
            u.push({
              command: l === 0 ? "M" : "L",
              args: s.slice(l, l + 2)
            });
          a.name === "polygon" && u.push({ command: "z", args: [] }), a.name = "path", a.attributes.d = $i({ pathData: u, precision: n }), delete a.attributes.points;
        }
        if (a.name === "circle" && r) {
          const s = Number(a.attributes.cx || "0"), u = Number(a.attributes.cy || "0"), l = Number(a.attributes.r || "0");
          if (Number.isNaN(s - u + l))
            return;
          const o = [
            { command: "M", args: [s, u - l] },
            { command: "A", args: [l, l, 0, 1, 0, s, u + l] },
            { command: "A", args: [l, l, 0, 1, 0, s, u - l] },
            { command: "z", args: [] }
          ];
          a.name = "path", a.attributes.d = $i({ pathData: o, precision: n }), delete a.attributes.cx, delete a.attributes.cy, delete a.attributes.r;
        }
        if (a.name === "ellipse" && r) {
          const s = Number(a.attributes.cx || "0"), u = Number(a.attributes.cy || "0"), l = Number(a.attributes.rx || "0"), o = Number(a.attributes.ry || "0");
          if (Number.isNaN(s - u + l - o))
            return;
          const c = [
            { command: "M", args: [s, u - o] },
            { command: "A", args: [l, o, 0, 1, 0, s, u + o] },
            { command: "A", args: [l, o, 0, 1, 0, s, u - o] },
            { command: "z", args: [] }
          ];
          a.name = "path", a.attributes.d = $i({ pathData: c, precision: n }), delete a.attributes.cx, delete a.attributes.cy, delete a.attributes.rx, delete a.attributes.ry;
        }
      }
    }
  };
};
var Ms = {};
Ms.name = "convertEllipseToCircle";
Ms.description = "converts non-eccentric <ellipse>s to <circle>s";
Ms.fn = () => ({
  element: {
    enter: (e) => {
      if (e.name === "ellipse") {
        const t = e.attributes.rx || "0", r = e.attributes.ry || "0";
        if (t === r || t === "auto" || r === "auto") {
          e.name = "circle";
          const n = t === "auto" ? r : t;
          delete e.attributes.rx, delete e.attributes.ry, e.attributes.r = n;
        }
      }
    }
  }
});
var Is = {};
const { visit: nU } = ne, { inheritableAttrs: aU, pathElems: iU } = be;
Is.name = "moveElemsAttrsToGroup";
Is.description = "Move common attributes of group children to the group";
Is.fn = (e) => {
  let t = !1;
  return nU(e, {
    element: {
      enter: (r) => {
        r.name === "style" && (t = !0);
      }
    }
  }), {
    element: {
      exit: (r) => {
        if (r.name !== "g" || r.children.length <= 1 || t)
          return;
        const n = /* @__PURE__ */ new Map();
        let a = !0, i = !0;
        for (const s of r.children)
          if (s.type === "element")
            if (iU.has(s.name) || (i = !1), a) {
              a = !1;
              for (const [u, l] of Object.entries(s.attributes))
                aU.has(u) && n.set(u, l);
            } else
              for (const [u, l] of n)
                s.attributes[u] !== l && n.delete(u);
        (r.attributes["clip-path"] != null || r.attributes.mask != null) && n.delete("transform"), i && n.delete("transform");
        for (const [s, u] of n)
          s === "transform" ? r.attributes.transform != null ? r.attributes.transform = `${r.attributes.transform} ${u}` : r.attributes.transform = u : r.attributes[s] = u;
        for (const s of r.children)
          if (s.type === "element")
            for (const [u] of n)
              delete s.attributes[u];
      }
    }
  };
};
var Rs = {};
const { pathElems: sU, referencesProps: oU } = be, { includesUrlReference: uU } = Se;
Rs.name = "moveGroupAttrsToElems";
Rs.description = "moves some group attributes to the content elements";
const lU = [...sU, "g", "text"];
Rs.fn = () => ({
  element: {
    enter: (e) => {
      if (e.name === "g" && e.children.length !== 0 && e.attributes.transform != null && Object.entries(e.attributes).some(
        ([t, r]) => oU.has(t) && uU(r)
      ) === !1 && e.children.every(
        (t) => t.type === "element" && lU.includes(t.name) && t.attributes.id == null
      )) {
        for (const t of e.children) {
          const r = e.attributes.transform;
          t.type === "element" && (t.attributes.transform != null ? t.attributes.transform = `${r} ${t.attributes.transform}` : t.attributes.transform = r);
        }
        delete e.attributes.transform;
      }
    }
  }
});
var _s = {};
const { inheritableAttrs: cU, elemsGroups: Ey } = be;
_s.name = "collapseGroups";
_s.description = "collapses useless groups";
const Ty = (e, t) => {
  if (e.type === "element") {
    if (Ey.animation.has(e.name) && e.attributes.attributeName === t)
      return !0;
    for (const r of e.children)
      if (Ty(r, t))
        return !0;
  }
  return !1;
};
_s.fn = () => ({
  element: {
    exit: (e, t) => {
      if (!(t.type === "root" || t.name === "switch") && !(e.name !== "g" || e.children.length === 0)) {
        if (Object.keys(e.attributes).length !== 0 && e.children.length === 1) {
          const r = e.children[0];
          if (r.type === "element" && r.attributes.id == null && e.attributes.filter == null && (e.attributes.class == null || r.attributes.class == null) && (e.attributes["clip-path"] == null && e.attributes.mask == null || r.name === "g" && e.attributes.transform == null && r.attributes.transform == null))
            for (const [n, a] of Object.entries(e.attributes)) {
              if (Ty(r, n))
                return;
              if (r.attributes[n] == null)
                r.attributes[n] = a;
              else if (n === "transform")
                r.attributes[n] = a + " " + r.attributes[n];
              else if (r.attributes[n] === "inherit")
                r.attributes[n] = a;
              else if (cU.has(n) === !1 && r.attributes[n] !== a)
                return;
              delete e.attributes[n];
            }
        }
        if (Object.keys(e.attributes).length === 0) {
          for (const n of e.children)
            if (n.type === "element" && Ey.animation.has(n.name))
              return;
          const r = t.children.indexOf(e);
          t.children.splice(r, 1, ...e.children);
          for (const n of e.children)
            Object.defineProperty(n, "parentNode", {
              writable: !0,
              value: t
            });
        }
      }
    }
  }
});
var Fs = {}, hn = {};
const { parsePathData: fU, stringifyPathData: dU } = ni;
var Rt;
const hU = (e) => {
  if (e.pathJS) return e.pathJS;
  const t = [], r = fU(e.attributes.d);
  for (const { command: n, args: a } of r)
    t.push({ command: n, args: a });
  return t.length && t[0].command == "m" && (t[0].command = "M"), e.pathJS = t, t;
};
hn.path2js = hU;
const zp = (e) => {
  const t = [];
  let r = [0, 0], n = [0, 0];
  for (let { command: a, args: i } of e)
    i = i.slice(), a === "m" && (i[0] += n[0], i[1] += n[1], a = "M"), a === "M" && (n[0] = i[0], n[1] = i[1], r[0] = n[0], r[1] = n[1]), a === "h" && (i[0] += n[0], a = "H"), a === "H" && (n[0] = i[0]), a === "v" && (i[0] += n[1], a = "V"), a === "V" && (n[1] = i[0]), a === "l" && (i[0] += n[0], i[1] += n[1], a = "L"), a === "L" && (n[0] = i[0], n[1] = i[1]), a === "c" && (i[0] += n[0], i[1] += n[1], i[2] += n[0], i[3] += n[1], i[4] += n[0], i[5] += n[1], a = "C"), a === "C" && (n[0] = i[4], n[1] = i[5]), a === "s" && (i[0] += n[0], i[1] += n[1], i[2] += n[0], i[3] += n[1], a = "S"), a === "S" && (n[0] = i[2], n[1] = i[3]), a === "q" && (i[0] += n[0], i[1] += n[1], i[2] += n[0], i[3] += n[1], a = "Q"), a === "Q" && (n[0] = i[2], n[1] = i[3]), a === "t" && (i[0] += n[0], i[1] += n[1], a = "T"), a === "T" && (n[0] = i[0], n[1] = i[1]), a === "a" && (i[5] += n[0], i[6] += n[1], a = "A"), a === "A" && (n[0] = i[5], n[1] = i[6]), (a === "z" || a === "Z") && (n[0] = r[0], n[1] = r[1], a = "z"), t.push({ command: a, args: i });
  return t;
};
hn.js2path = function(e, t, r) {
  e.pathJS = t;
  const n = [];
  for (const a of t) {
    if (n.length !== 0 && (a.command === "M" || a.command === "m")) {
      const i = n[n.length - 1];
      (i.command === "M" || i.command === "m") && n.pop();
    }
    n.push({
      command: a.command,
      args: a.args
    });
  }
  e.attributes.d = dU({
    pathData: n,
    precision: r.floatPrecision,
    disableSpaceAfterFlags: r.noSpaceAfterFlags
  });
};
function $n(e, t) {
  return e[0] = t[t.length - 2], e[1] = t[t.length - 1], e;
}
hn.intersects = function(e, t) {
  const r = Gp(zp(e)), n = Gp(zp(t));
  if (r.maxX <= n.minX || n.maxX <= r.minX || r.maxY <= n.minY || n.maxY <= r.minY || r.list.every((l) => n.list.every((o) => l.list[l.maxX][0] <= o.list[o.minX][0] || o.list[o.maxX][0] <= l.list[l.minX][0] || l.list[l.maxY][1] <= o.list[o.minY][1] || o.list[o.maxY][1] <= l.list[l.minY][1])))
    return !1;
  const a = r.list.map(Hp), i = n.list.map(Hp);
  return a.some(function(l) {
    return l.list.length < 3 ? !1 : i.some(function(o) {
      if (o.list.length < 3) return !1;
      for (var c = [s(l, o, [1, 0])], f = Hn(c[0]), d = 1e4; ; ) {
        if (d-- == 0)
          return console.error(
            "Error: infinite loop while processing mergePaths plugin."
          ), !0;
        if (c.push(s(l, o, f)), cr(f, c[c.length - 1]) <= 0) return !1;
        if (pU(c, f)) return !0;
      }
    });
  });
  function s(l, o, c) {
    return Po(u(l, c), u(o, Hn(c)));
  }
  function u(l, o) {
    for (var c = o[1] >= 0 ? o[0] < 0 ? l.maxY : l.maxX : o[0] < 0 ? l.minX : l.minY, f = -1 / 0, d; (d = cr(l.list[c], o)) > f; )
      f = d, c = ++c % l.list.length;
    return l.list[(c || l.list.length) - 1];
  }
};
function pU(e, t) {
  if (e.length == 2) {
    let r = e[1], n = e[0], a = Hn(e[1]), i = Po(n, r);
    cr(a, i) > 0 ? $n(t, tc(i, r)) : ($n(t, a), e.shift());
  } else {
    let r = e[2], n = e[1], a = e[0], i = Po(n, r), s = Po(a, r), u = Hn(r), l = tc(i, s), o = tc(s, i);
    if (cr(l, u) > 0)
      cr(i, u) > 0 ? ($n(t, l), e.shift()) : ($n(t, u), e.splice(0, 2));
    else if (cr(o, u) > 0)
      cr(s, u) > 0 ? ($n(t, o), e.splice(1, 1)) : ($n(t, u), e.splice(0, 2));
    else return !0;
  }
  return !1;
}
function Hn(e) {
  return [-e[0], -e[1]];
}
function Po(e, t) {
  return [e[0] - t[0], e[1] - t[1]];
}
function cr(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function tc(e, t) {
  var r = [-e[1], e[0]];
  return cr(r, Hn(t)) < 0 ? Hn(r) : r;
}
function Gp(e) {
  const t = { list: [], minX: 0, minY: 0, maxX: 0, maxY: 0 }, r = (i, s) => {
    (!i.list.length || s[1] > i.list[i.maxY][1]) && (i.maxY = i.list.length, t.maxY = t.list.length ? Math.max(s[1], t.maxY) : s[1]), (!i.list.length || s[0] > i.list[i.maxX][0]) && (i.maxX = i.list.length, t.maxX = t.list.length ? Math.max(s[0], t.maxX) : s[0]), (!i.list.length || s[1] < i.list[i.minY][1]) && (i.minY = i.list.length, t.minY = t.list.length ? Math.min(s[1], t.minY) : s[1]), (!i.list.length || s[0] < i.list[i.minX][0]) && (i.minX = i.list.length, t.minX = t.list.length ? Math.min(s[0], t.minX) : s[0]), i.list.push(s);
  };
  for (let i = 0; i < e.length; i += 1) {
    const s = e[i];
    let u = t.list.length === 0 ? { list: [], minX: 0, minY: 0, maxX: 0, maxY: 0 } : t.list[t.list.length - 1], l = i === 0 ? null : e[i - 1], o = u.list.length === 0 ? null : u.list[u.list.length - 1], c = s.args, f = o;
    const d = (h, p) => h + (o == null ? 0 : o[p % 2]);
    switch (s.command) {
      case "M":
        u = { list: [], minX: 0, minY: 0, maxX: 0, maxY: 0 }, t.list.push(u);
        break;
      case "H":
        o != null && r(u, [c[0], o[1]]);
        break;
      case "V":
        o != null && r(u, [o[0], c[0]]);
        break;
      case "Q":
        r(u, c.slice(0, 2)), Rt = [c[2] - c[0], c[3] - c[1]];
        break;
      case "T":
        o != null && l != null && (l.command == "Q" || l.command == "T") && (f = [
          o[0] + Rt[0],
          o[1] + Rt[1]
        ], r(u, f), Rt = [c[0] - f[0], c[1] - f[1]]);
        break;
      case "C":
        o != null && r(u, [
          0.5 * (o[0] + c[0]),
          0.5 * (o[1] + c[1])
        ]), r(u, [
          0.5 * (c[0] + c[2]),
          0.5 * (c[1] + c[3])
        ]), r(u, [
          0.5 * (c[2] + c[4]),
          0.5 * (c[3] + c[5])
        ]), Rt = [c[4] - c[2], c[5] - c[3]];
        break;
      case "S":
        o != null && l != null && (l.command == "C" || l.command == "S") && (r(u, [
          o[0] + 0.5 * Rt[0],
          o[1] + 0.5 * Rt[1]
        ]), f = [
          o[0] + Rt[0],
          o[1] + Rt[1]
        ]), f != null && r(u, [
          0.5 * (f[0] + c[0]),
          0.5 * (f[1] + c[1])
        ]), r(u, [
          0.5 * (c[0] + c[2]),
          0.5 * (c[1] + c[3])
        ]), Rt = [c[2] - c[0], c[3] - c[1]];
        break;
      case "A":
        if (o != null)
          for (var n = Py.apply(0, o.concat(c)), a; (a = n.splice(0, 6).map(d)).length; )
            o != null && r(u, [
              0.5 * (o[0] + a[0]),
              0.5 * (o[1] + a[1])
            ]), r(u, [
              0.5 * (a[0] + a[2]),
              0.5 * (a[1] + a[3])
            ]), r(u, [
              0.5 * (a[2] + a[4]),
              0.5 * (a[3] + a[5])
            ]), n.length && r(u, o = a.slice(-2));
        break;
    }
    c.length >= 2 && r(u, c.slice(-2));
  }
  return t;
}
function Hp(e) {
  e.list.sort(function(o, c) {
    return o[0] == c[0] ? o[1] - c[1] : o[0] - c[0];
  });
  var t = [], r = 0, n = 0;
  for (let o = 0; o < e.list.length; o++) {
    for (; t.length >= 2 && Vp(t[t.length - 2], t[t.length - 1], e.list[o]) <= 0; )
      t.pop();
    e.list[o][1] < e.list[r][1] && (r = o, n = t.length), t.push(e.list[o]);
  }
  var a = [], i = e.list.length - 1, s = 0;
  for (let o = e.list.length; o--; ) {
    for (; a.length >= 2 && Vp(a[a.length - 2], a[a.length - 1], e.list[o]) <= 0; )
      a.pop();
    e.list[o][1] > e.list[i][1] && (i = o, s = a.length), a.push(e.list[o]);
  }
  a.pop(), t.pop();
  const u = t.concat(a);
  return {
    list: u,
    minX: 0,
    // by sorting
    maxX: t.length,
    minY: n,
    maxY: (t.length + s) % u.length
  };
}
function Vp(e, t, r) {
  return (t[0] - e[0]) * (r[1] - e[1]) - (t[1] - e[1]) * (r[0] - e[0]);
}
const Py = (e, t, r, n, a, i, s, u, l, o) => {
  const c = Math.PI * 120 / 180, f = Math.PI / 180 * (+a || 0);
  let d = [];
  const h = (m, M, $) => m * Math.cos($) - M * Math.sin($), p = (m, M, $) => m * Math.sin($) + M * Math.cos($);
  if (o)
    I = o[0], k = o[1], y = o[2], D = o[3];
  else {
    e = h(e, t, -f), t = p(e, t, -f), u = h(u, l, -f), l = p(u, l, -f);
    var g = (e - u) / 2, x = (t - l) / 2, C = g * g / (r * r) + x * x / (n * n);
    C > 1 && (C = Math.sqrt(C), r = C * r, n = C * n);
    var S = r * r, P = n * n, T = (i == s ? -1 : 1) * Math.sqrt(
      Math.abs(
        (S * P - S * x * x - P * g * g) / (S * x * x + P * g * g)
      )
    ), y = T * r * x / n + (e + u) / 2, D = T * -n * g / r + (t + l) / 2, I = Math.asin(Number(((t - D) / n).toFixed(9))), k = Math.asin(Number(((l - D) / n).toFixed(9)));
    I = e < y ? Math.PI - I : I, k = u < y ? Math.PI - k : k, I < 0 && (I = Math.PI * 2 + I), k < 0 && (k = Math.PI * 2 + k), s && I > k && (I = I - Math.PI * 2), !s && k > I && (k = k - Math.PI * 2);
  }
  var w = k - I;
  if (Math.abs(w) > c) {
    var L = k, v = u, O = l;
    k = I + c * (s && k > I ? 1 : -1), u = y + r * Math.cos(k), l = D + n * Math.sin(k), d = Py(u, l, r, n, a, 0, s, v, O, [
      k,
      L,
      y,
      D
    ]);
  }
  w = k - I;
  var N = Math.cos(I), H = Math.sin(I), q = Math.cos(k), te = Math.sin(k), J = Math.tan(w / 4), ge = 4 / 3 * r * J, Le = 4 / 3 * n * J, Ne = [
    -ge * H,
    Le * N,
    u + ge * te - e,
    l - Le * q - t,
    u - e,
    l - t
  ];
  if (o)
    return Ne.concat(d);
  d = Ne.concat(d);
  for (var ce = [], fe = 0, b = d.length; fe < b; fe++)
    ce[fe] = fe % 2 ? p(d[fe - 1], d[fe], f) : h(d[fe], d[fe + 1], f);
  return ce;
};
var Ly = {}, ai = {};
const { toFixed: Rr } = Se, mU = /* @__PURE__ */ new Set([
  "matrix",
  "rotate",
  "scale",
  "skewX",
  "skewY",
  "translate"
]), gU = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/, bU = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;
ai.transform2js = (e) => {
  const t = [];
  let r = null;
  for (const n of e.split(gU))
    if (n)
      if (mU.has(n))
        r = { name: n, data: [] }, t.push(r);
      else {
        let a;
        for (; a = bU.exec(n); )
          a = Number(a), r != null && r.data.push(a);
      }
  return r == null || r.data.length == 0 ? [] : t;
};
ai.transformsMultiply = (e) => {
  const t = e.map((n) => n.name === "matrix" ? n.data : yU(n));
  return {
    name: "matrix",
    data: t.length > 0 ? t.reduce(Ny) : []
  };
};
const He = {
  /**
   * @param {number} deg
   * @returns {number}
   */
  rad: (e) => e * Math.PI / 180,
  /**
   * @param {number} rad
   * @returns {number}
   */
  deg: (e) => e * 180 / Math.PI,
  /**
   * @param {number} deg
   * @returns {number}
   */
  cos: (e) => Math.cos(He.rad(e)),
  /**
   * @param {number} val
   * @param {number} floatPrecision
   * @returns {number}
   */
  acos: (e, t) => Rr(He.deg(Math.acos(e)), t),
  /**
   * @param {number} deg
   * @returns {number}
   */
  sin: (e) => Math.sin(He.rad(e)),
  /**
   * @param {number} val
   * @param {number} floatPrecision
   * @returns {number}
   */
  asin: (e, t) => Rr(He.deg(Math.asin(e)), t),
  /**
   * @param {number} deg
   * @returns {number}
   */
  tan: (e) => Math.tan(He.rad(e)),
  /**
   * @param {number} val
   * @param {number} floatPrecision
   * @returns {number}
   */
  atan: (e, t) => Rr(He.deg(Math.atan(e)), t)
};
ai.matrixToTransform = (e, t) => {
  const r = t.floatPrecision, n = e.data, a = [];
  (n[4] || n[5]) && a.push({
    name: "translate",
    data: n.slice(4, n[5] ? 6 : 5)
  });
  let i = Rr(Math.hypot(n[0], n[1]), t.transformPrecision), s = Rr(
    (n[0] * n[3] - n[1] * n[2]) / i,
    t.transformPrecision
  );
  const u = n[0] * n[2] + n[1] * n[3], l = n[0] * n[1] + n[2] * n[3], o = l !== 0 || i === s;
  if (!n[1] && n[2])
    a.push({
      name: "skewX",
      data: [He.atan(n[2] / s, r)]
    });
  else if (n[1] && !n[2])
    a.push({
      name: "skewY",
      data: [He.atan(n[1] / n[0], r)]
    }), i = n[0], s = n[3];
  else if (!u || i === 1 && s === 1 || !o) {
    o || (i = Math.hypot(n[0], n[2]), s = Math.hypot(n[1], n[3]), Rr(n[0], t.transformPrecision) < 0 && (i = -i), (n[3] < 0 || Math.sign(n[1]) === Math.sign(n[2]) && Rr(n[3], t.transformPrecision) === 0) && (s = -s), a.push({ name: "scale", data: [i, s] }));
    const c = Math.min(Math.max(-1, n[0] / i), 1), f = [
      He.acos(c, r) * ((o ? 1 : s) * n[1] < 0 ? -1 : 1)
    ];
    if (f[0] && a.push({ name: "rotate", data: f }), l && u && a.push({
      name: "skewX",
      data: [He.atan(u / (i * i), r)]
    }), f[0] && (n[4] || n[5])) {
      a.shift();
      const d = 1 - n[0] / i, h = n[1] / (o ? i : s), p = n[4] * (o ? 1 : s), g = n[5] * (o ? 1 : i), x = (d ** 2 + h ** 2) * (o ? 1 : i * s);
      f.push(
        (d * p - h * g) / x,
        (d * g + h * p) / x
      );
    }
  } else if (n[1] || n[2])
    return [e];
  return (o && (i != 1 || s != 1) || !a.length) && a.push({
    name: "scale",
    data: i == s ? [i] : [i, s]
  }), a;
};
const yU = (e) => {
  if (e.name === "matrix")
    return e.data;
  switch (e.name) {
    case "translate":
      return [1, 0, 0, 1, e.data[0], e.data[1] || 0];
    case "scale":
      return [
        e.data[0],
        0,
        0,
        e.data[1] || e.data[0],
        0,
        0
      ];
    case "rotate":
      var t = He.cos(e.data[0]), r = He.sin(e.data[0]), n = e.data[1] || 0, a = e.data[2] || 0;
      return [
        t,
        r,
        -r,
        t,
        (1 - t) * n + r * a,
        (1 - t) * a - r * n
      ];
    case "skewX":
      return [1, 0, He.tan(e.data[0]), 1, 0, 0];
    case "skewY":
      return [1, He.tan(e.data[0]), 0, 1, 0, 0];
    default:
      throw Error(`Unknown transform ${e.name}`);
  }
};
ai.transformArc = (e, t, r) => {
  const n = t[5] - e[0], a = t[6] - e[1];
  let i = t[0], s = t[1];
  const u = t[2] * Math.PI / 180, l = Math.cos(u), o = Math.sin(u);
  if (i > 0 && s > 0) {
    let g = Math.pow(n * l + a * o, 2) / (4 * i * i) + Math.pow(a * l - n * o, 2) / (4 * s * s);
    g > 1 && (g = Math.sqrt(g), i *= g, s *= g);
  }
  const c = [i * l, i * o, -s * o, s * l, 0, 0], f = Ny(r, c), d = f[2] * f[2] + f[3] * f[3], h = f[0] * f[0] + f[1] * f[1] + d, p = Math.hypot(f[0] - f[3], f[1] + f[2]) * Math.hypot(f[0] + f[3], f[1] - f[2]);
  if (!p)
    t[0] = t[1] = Math.sqrt(h / 2), t[2] = 0;
  else {
    const g = (h + p) / 2, x = (h - p) / 2, C = Math.abs(g - d) > 1e-6, S = (C ? g : x) - d, P = f[0] * f[2] + f[1] * f[3], T = f[0] * S + f[2] * P, y = f[1] * S + f[3] * P;
    t[0] = Math.sqrt(g), t[1] = Math.sqrt(x), t[2] = ((C ? y < 0 : T > 0) ? -1 : 1) * Math.acos((C ? T : y) / Math.hypot(T, y)) * 180 / Math.PI;
  }
  return r[0] < 0 != r[3] < 0 && (t[4] = 1 - t[4]), t;
};
const Ny = (e, t) => [
  e[0] * t[0] + e[2] * t[1],
  e[1] * t[0] + e[3] * t[1],
  e[0] * t[2] + e[2] * t[3],
  e[1] * t[2] + e[3] * t[3],
  e[0] * t[4] + e[2] * t[5] + e[4],
  e[1] * t[4] + e[3] * t[5] + e[5]
], { collectStylesheet: vU, computeStyle: xU } = st, {
  transformsMultiply: kU,
  transform2js: wU,
  transformArc: Wp
} = ai, { path2js: SU } = hn, {
  removeLeadingZero: rc,
  includesUrlReference: CU
} = Se, { referencesProps: $U, attrsGroupsDefaults: AU } = be, nc = /[-+]?(\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g, EU = (e, t) => {
  const r = vU(e);
  return {
    element: {
      enter: (n) => {
        var d, h, p, g;
        if (n.attributes.d == null || n.attributes.id != null || n.attributes.transform == null || n.attributes.transform === "" || // styles are not considered when applying transform
        // can be fixed properly with new style engine
        n.attributes.style != null || Object.entries(n.attributes).some(
          ([x, C]) => $U.has(x) && CU(C)
        ))
          return;
        const a = xU(r, n), i = a.transform;
        if (i.type === "static" && i.value !== n.attributes.transform)
          return;
        const s = kU(
          wU(n.attributes.transform)
        ), u = ((d = a.stroke) == null ? void 0 : d.type) === "static" ? a.stroke.value : null, l = ((h = a["stroke-width"]) == null ? void 0 : h.type) === "static" ? a["stroke-width"].value : null, o = t.transformPrecision;
        if (((p = a.stroke) == null ? void 0 : p.type) === "dynamic" || ((g = a["stroke-width"]) == null ? void 0 : g.type) === "dynamic")
          return;
        const c = Number(
          Math.sqrt(
            s.data[0] * s.data[0] + s.data[1] * s.data[1]
          ).toFixed(o)
        );
        if (u && u != "none") {
          if (!t.applyTransformsStroked || (s.data[0] !== s.data[3] || s.data[1] !== -s.data[2]) && (s.data[0] !== -s.data[3] || s.data[1] !== s.data[2]))
            return;
          c !== 1 && n.attributes["vector-effect"] !== "non-scaling-stroke" && (n.attributes["stroke-width"] = (l || AU.presentation["stroke-width"]).trim().replace(
            nc,
            (x) => rc(Number(x) * c)
          ), n.attributes["stroke-dashoffset"] != null && (n.attributes["stroke-dashoffset"] = n.attributes["stroke-dashoffset"].trim().replace(
            nc,
            (x) => rc(Number(x) * c)
          )), n.attributes["stroke-dasharray"] != null && (n.attributes["stroke-dasharray"] = n.attributes["stroke-dasharray"].trim().replace(
            nc,
            (x) => rc(Number(x) * c)
          )));
        }
        const f = SU(n);
        TU(f, s.data), delete n.attributes.transform;
      }
    }
  };
};
Ly.applyTransforms = EU;
const yt = (e, t, r) => {
  const n = e[0] * t + e[2] * r + e[4], a = e[1] * t + e[3] * r + e[5];
  return [n, a];
}, vt = (e, t, r) => {
  const n = e[0] * t + e[2] * r, a = e[1] * t + e[3] * r;
  return [n, a];
}, TU = (e, t) => {
  const r = [0, 0], n = [0, 0];
  for (const a of e) {
    let { command: i, args: s } = a;
    if (i === "M") {
      n[0] = s[0], n[1] = s[1], r[0] = n[0], r[1] = n[1];
      const [u, l] = yt(t, s[0], s[1]);
      s[0] = u, s[1] = l;
    }
    if (i === "m") {
      n[0] += s[0], n[1] += s[1], r[0] = n[0], r[1] = n[1];
      const [u, l] = vt(t, s[0], s[1]);
      s[0] = u, s[1] = l;
    }
    if (i === "H" && (i = "L", s = [s[0], n[1]]), i === "h" && (i = "l", s = [s[0], 0]), i === "V" && (i = "L", s = [n[0], s[0]]), i === "v" && (i = "l", s = [0, s[0]]), i === "L") {
      n[0] = s[0], n[1] = s[1];
      const [u, l] = yt(t, s[0], s[1]);
      s[0] = u, s[1] = l;
    }
    if (i === "l") {
      n[0] += s[0], n[1] += s[1];
      const [u, l] = vt(t, s[0], s[1]);
      s[0] = u, s[1] = l;
    }
    if (i === "C") {
      n[0] = s[4], n[1] = s[5];
      const [u, l] = yt(t, s[0], s[1]), [o, c] = yt(t, s[2], s[3]), [f, d] = yt(t, s[4], s[5]);
      s[0] = u, s[1] = l, s[2] = o, s[3] = c, s[4] = f, s[5] = d;
    }
    if (i === "c") {
      n[0] += s[4], n[1] += s[5];
      const [u, l] = vt(t, s[0], s[1]), [o, c] = vt(t, s[2], s[3]), [f, d] = vt(t, s[4], s[5]);
      s[0] = u, s[1] = l, s[2] = o, s[3] = c, s[4] = f, s[5] = d;
    }
    if (i === "S") {
      n[0] = s[2], n[1] = s[3];
      const [u, l] = yt(t, s[0], s[1]), [o, c] = yt(t, s[2], s[3]);
      s[0] = u, s[1] = l, s[2] = o, s[3] = c;
    }
    if (i === "s") {
      n[0] += s[2], n[1] += s[3];
      const [u, l] = vt(t, s[0], s[1]), [o, c] = vt(t, s[2], s[3]);
      s[0] = u, s[1] = l, s[2] = o, s[3] = c;
    }
    if (i === "Q") {
      n[0] = s[2], n[1] = s[3];
      const [u, l] = yt(t, s[0], s[1]), [o, c] = yt(t, s[2], s[3]);
      s[0] = u, s[1] = l, s[2] = o, s[3] = c;
    }
    if (i === "q") {
      n[0] += s[2], n[1] += s[3];
      const [u, l] = vt(t, s[0], s[1]), [o, c] = vt(t, s[2], s[3]);
      s[0] = u, s[1] = l, s[2] = o, s[3] = c;
    }
    if (i === "T") {
      n[0] = s[0], n[1] = s[1];
      const [u, l] = yt(t, s[0], s[1]);
      s[0] = u, s[1] = l;
    }
    if (i === "t") {
      n[0] += s[0], n[1] += s[1];
      const [u, l] = vt(t, s[0], s[1]);
      s[0] = u, s[1] = l;
    }
    if (i === "A") {
      if (Wp(n, s, t), n[0] = s[5], n[1] = s[6], Math.abs(s[2]) > 80) {
        const o = s[0], c = s[2];
        s[0] = s[1], s[1] = o, s[2] = c + (c > 0 ? -90 : 90);
      }
      const [u, l] = yt(t, s[5], s[6]);
      s[5] = u, s[6] = l;
    }
    if (i === "a") {
      if (Wp([0, 0], s, t), n[0] += s[5], n[1] += s[6], Math.abs(s[2]) > 80) {
        const o = s[0], c = s[2];
        s[0] = s[1], s[1] = o, s[2] = c + (c > 0 ? -90 : 90);
      }
      const [u, l] = vt(t, s[5], s[6]);
      s[5] = u, s[6] = l;
    }
    (i === "z" || i === "Z") && (n[0] = r[0], n[1] = r[1]), a.command = i, a.args = s;
  }
}, { collectStylesheet: PU, computeStyle: LU } = st, { visit: NU } = ne, { pathElems: DU } = be, { path2js: OU, js2path: MU } = hn, { applyTransforms: IU } = Ly, { cleanupOutData: Zi, toFixed: Lo } = Se;
Fs.name = "convertPathData";
Fs.description = "optimizes path data: writes in shorter form, applies transformations";
let er, Ct, ye, Ad, Ed;
Fs.fn = (e, t) => {
  const {
    // TODO convert to separate plugin in v3
    applyTransforms: r = !0,
    applyTransformsStroked: n = !0,
    makeArcs: a = {
      threshold: 2.5,
      // coefficient of rounding error
      tolerance: 0.5
      // percentage of radius
    },
    straightCurves: i = !0,
    convertToQ: s = !0,
    lineShorthands: u = !0,
    convertToZ: l = !0,
    curveSmoothShorthands: o = !0,
    floatPrecision: c = 3,
    transformPrecision: f = 5,
    smartArcRounding: d = !0,
    removeUseless: h = !0,
    collapseRepeated: p = !0,
    utilizeAbsolute: g = !0,
    leadingZero: x = !0,
    negativeExtraSpace: C = !0,
    noSpaceAfterFlags: S = !1,
    // a20 60 45 0 1 30 20 → a20 60 45 0130 20
    forceAbsolutePath: P = !1
  } = t, T = {
    applyTransforms: r,
    applyTransformsStroked: n,
    makeArcs: a,
    straightCurves: i,
    convertToQ: s,
    lineShorthands: u,
    convertToZ: l,
    curveSmoothShorthands: o,
    floatPrecision: c,
    transformPrecision: f,
    smartArcRounding: d,
    removeUseless: h,
    collapseRepeated: p,
    utilizeAbsolute: g,
    leadingZero: x,
    negativeExtraSpace: C,
    noSpaceAfterFlags: S,
    forceAbsolutePath: P
  };
  r && NU(
    e,
    // @ts-ignore
    IU(e, {
      transformPrecision: f,
      applyTransformsStroked: n
    })
  );
  const y = PU(e);
  return {
    element: {
      enter: (D) => {
        var k, w;
        if (DU.has(D.name) && D.attributes.d != null) {
          const L = LU(y, D);
          Ct = c, ye = Ct !== !1 ? +Math.pow(0.1, Ct).toFixed(Ct) : 0.01, er = Ct && Ct > 0 && Ct < 20 ? BU : qU, a && (Ad = a.threshold, Ed = a.tolerance);
          const v = L["marker-mid"] != null, O = L.stroke && (L.stroke.type === "dynamic" || L.stroke.value !== "none"), N = L["stroke-linecap"] && (L["stroke-linecap"].type === "dynamic" || L["stroke-linecap"].value !== "butt"), H = O && N, q = O ? ((k = L["stroke-linecap"]) == null ? void 0 : k.type) === "static" && L["stroke-linecap"].value === "round" && ((w = L["stroke-linejoin"]) == null ? void 0 : w.type) === "static" && L["stroke-linejoin"].value === "round" : !0;
          var I = OU(D);
          I.length && (RU(I), I = _U(I, T, {
            isSafeToUseZ: q,
            maybeHasStrokeAndLinecap: H,
            hasMarkerMid: v
          }), g && (I = FU(I, T)), MU(D, I, T));
        }
      }
    }
  };
};
const RU = (e) => {
  let t = [0, 0], r = [0, 0], n = [0, 0];
  for (let a = 0; a < e.length; a += 1) {
    const i = e[a];
    let { command: s, args: u } = i;
    s === "m" && (r[0] += u[0], r[1] += u[1], t[0] = r[0], t[1] = r[1]), s === "M" && (a !== 0 && (s = "m"), u[0] -= r[0], u[1] -= r[1], r[0] += u[0], r[1] += u[1], t[0] = r[0], t[1] = r[1]), s === "l" && (r[0] += u[0], r[1] += u[1]), s === "L" && (s = "l", u[0] -= r[0], u[1] -= r[1], r[0] += u[0], r[1] += u[1]), s === "h" && (r[0] += u[0]), s === "H" && (s = "h", u[0] -= r[0], r[0] += u[0]), s === "v" && (r[1] += u[0]), s === "V" && (s = "v", u[0] -= r[1], r[1] += u[0]), s === "c" && (r[0] += u[4], r[1] += u[5]), s === "C" && (s = "c", u[0] -= r[0], u[1] -= r[1], u[2] -= r[0], u[3] -= r[1], u[4] -= r[0], u[5] -= r[1], r[0] += u[4], r[1] += u[5]), s === "s" && (r[0] += u[2], r[1] += u[3]), s === "S" && (s = "s", u[0] -= r[0], u[1] -= r[1], u[2] -= r[0], u[3] -= r[1], r[0] += u[2], r[1] += u[3]), s === "q" && (r[0] += u[2], r[1] += u[3]), s === "Q" && (s = "q", u[0] -= r[0], u[1] -= r[1], u[2] -= r[0], u[3] -= r[1], r[0] += u[2], r[1] += u[3]), s === "t" && (r[0] += u[0], r[1] += u[1]), s === "T" && (s = "t", u[0] -= r[0], u[1] -= r[1], r[0] += u[0], r[1] += u[1]), s === "a" && (r[0] += u[5], r[1] += u[6]), s === "A" && (s = "a", u[5] -= r[0], u[6] -= r[1], r[0] += u[5], r[1] += u[6]), (s === "Z" || s === "z") && (r[0] = t[0], r[1] = t[1]), i.command = s, i.args = u, i.base = n, i.coords = [r[0], r[1]], n = i.coords;
  }
  return e;
};
function _U(e, t, { isSafeToUseZ: r, maybeHasStrokeAndLinecap: n, hasMarkerMid: a }) {
  const i = jU.bind(null, t), s = [0, 0], u = [0, 0];
  let l = {}, o;
  return e = e.filter(function(c, f, d) {
    const h = o;
    o = void 0;
    let p = c.command, g = c.args, x = d[f + 1];
    if (p !== "Z" && p !== "z") {
      var C = g, S;
      if (p === "s") {
        C = [0, 0].concat(g);
        const ce = l.args, fe = ce.length;
        C[0] = ce[fe - 2] - ce[fe - 4], C[1] = ce[fe - 1] - ce[fe - 3];
      }
      if (t.makeArcs && (p == "c" || p == "s") && ac(C) && (S = UU(C))) {
        var P = er([S.radius])[0], T = sc(C, S), y = C[5] * C[0] - C[4] * C[1] > 0 ? 1 : 0, D = {
          command: "a",
          args: [P, P, 0, 0, y, C[4], C[5]],
          // @ts-ignore
          coords: c.coords.slice(),
          // @ts-ignore
          base: c.base
        }, I = [D], k = [
          S.center[0] - C[4],
          S.center[1] - C[5]
        ], w = { center: k, radius: S.radius }, L = [c], v = 0, O = "", N;
        if (l.command == "c" && ac(l.args) && Kp(l.args, S) || l.command == "a" && l.sdata && Kp(l.sdata, S)) {
          L.unshift(l), D.base = l.base, D.args[5] = D.coords[0] - D.base[0], D.args[6] = D.coords[1] - D.base[1];
          var H = l.command == "a" ? l.sdata : l.args, q = sc(H, {
            center: [
              H[4] + S.center[0],
              H[5] + S.center[1]
            ],
            radius: S.radius
          });
          T += q, T > Math.PI && (D.args[3] = 1), v = 1;
        }
        for (var te = f; (x = d[++te]) && (x.command === "c" || x.command === "s"); ) {
          var J = x.args;
          if (x.command == "s" && (N = Ai(
            { command: "s", args: x.args.slice() },
            d[te - 1].args
          ), J = N.args, N.args = J.slice(0, 2), O = i([N])), ac(J) && Oy(J, w)) {
            if (T += sc(J, w), T - 2 * Math.PI > 1e-3) break;
            if (T > Math.PI && (D.args[3] = 1), L.push(x), 2 * Math.PI - T > 1e-3)
              D.coords = x.coords, D.args[5] = D.coords[0] - D.base[0], D.args[6] = D.coords[1] - D.base[1];
            else {
              D.args[5] = 2 * (w.center[0] - J[4]), D.args[6] = 2 * (w.center[1] - J[5]), D.coords = [
                // @ts-ignore
                D.base[0] + D.args[5],
                // @ts-ignore
                D.base[1] + D.args[6]
              ], D = {
                command: "a",
                args: [
                  P,
                  P,
                  0,
                  0,
                  y,
                  // @ts-ignore
                  x.coords[0] - D.coords[0],
                  // @ts-ignore
                  x.coords[1] - D.coords[1]
                ],
                // @ts-ignore
                coords: x.coords,
                // @ts-ignore
                base: D.coords
              }, I.push(D), te++;
              break;
            }
            k[0] -= J[4], k[1] -= J[5];
          } else break;
        }
        if ((i(I) + O).length < i(L).length) {
          if (d[te] && d[te].command == "s" && Ai(d[te], d[te - 1].args), v) {
            var ge = I.shift();
            er(ge.args), s[0] += ge.args[5] - l.args[l.args.length - 2], s[1] += ge.args[6] - l.args[l.args.length - 1], l.command = "a", l.args = ge.args, c.base = l.coords = ge.coords;
          }
          if (D = I.shift(), L.length == 1 ? c.sdata = C.slice() : L.length - 1 - v > 0 && d.splice(f + 1, L.length - 1 - v, ...I), !D) return !1;
          p = "a", g = D.args, c.coords = D.coords;
        }
      }
      if (Ct !== !1) {
        if (p === "m" || p === "l" || p === "t" || p === "q" || p === "s" || p === "c")
          for (var Le = g.length; Le--; )
            g[Le] += c.base[Le % 2] - s[Le % 2];
        else p == "h" ? g[0] += c.base[0] - s[0] : p == "v" ? g[0] += c.base[1] - s[1] : p == "a" && (g[5] += c.base[0] - s[0], g[6] += c.base[1] - s[1]);
        er(g), p == "h" ? s[0] += g[0] : p == "v" ? s[1] += g[0] : (s[0] += g[g.length - 2], s[1] += g[g.length - 1]), er(s), (p === "M" || p === "m") && (u[0] = s[0], u[1] = s[1]);
      }
      const Ne = p === "a" ? Xp(g) : void 0;
      if (t.smartArcRounding && Ne !== void 0 && Ct)
        for (let ce = Ct; ce >= 0; ce--) {
          const fe = Lo(g[0], ce), b = (
            /** @type {number} */
            Xp([fe, fe, ...g.slice(2)])
          );
          if (Math.abs(Ne - b) < ye)
            g[0] = fe, g[1] = fe;
          else
            break;
        }
      if (t.straightCurves && (p === "c" && ic(g) || p === "s" && ic(C) ? (x && x.command == "s" && Ai(x, g), p = "l", g = g.slice(-2)) : p === "q" && ic(g) ? (x && x.command == "t" && Ai(x, g), p = "l", g = g.slice(-2)) : (p === "t" && l.command !== "q" && l.command !== "t" || p === "a" && (g[0] === 0 || g[1] === 0 || Ne !== void 0 && Ne < ye)) && (p = "l", g = g.slice(-2))), t.convertToQ && p == "c") {
        const ce = (
          // @ts-ignore
          0.75 * (c.base[0] + g[0]) - 0.25 * c.base[0]
        ), fe = (
          // @ts-ignore
          0.75 * (c.base[0] + g[2]) - 0.25 * (c.base[0] + g[4])
        );
        if (Math.abs(ce - fe) < ye * 2) {
          const b = (
            // @ts-ignore
            0.75 * (c.base[1] + g[1]) - 0.25 * c.base[1]
          ), m = (
            // @ts-ignore
            0.75 * (c.base[1] + g[3]) - 0.25 * (c.base[1] + g[5])
          );
          if (Math.abs(b - m) < ye * 2) {
            const M = g.slice();
            M.splice(
              0,
              4,
              // @ts-ignore
              ce + fe - c.base[0],
              // @ts-ignore
              b + m - c.base[1]
            ), er(M);
            const $ = Zi(g, t).length;
            Zi(M, t).length < $ && (p = "q", g = M, x && x.command == "s" && Ai(x, g));
          }
        }
      }
      if (t.lineShorthands && p === "l" && (g[1] === 0 ? (p = "h", g.pop()) : g[0] === 0 && (p = "v", g.shift())), t.collapseRepeated && a === !1 && (p === "m" || p === "h" || p === "v") && l.command && p == l.command.toLowerCase() && (p != "h" && p != "v" || l.args[0] >= 0 == g[0] >= 0))
        return l.args[0] += g[0], p != "h" && p != "v" && (l.args[1] += g[1]), l.coords = c.coords, d[f] = l, !1;
      if (t.curveSmoothShorthands && l.command) {
        if (p === "c")
          (l.command === "c" && Math.abs(g[0] - -(l.args[2] - l.args[4])) < ye && Math.abs(g[1] - -(l.args[3] - l.args[5])) < ye || l.command === "s" && Math.abs(g[0] - -(l.args[0] - l.args[2])) < ye && Math.abs(g[1] - -(l.args[1] - l.args[3])) < ye || l.command !== "c" && l.command !== "s" && Math.abs(g[0]) < ye && Math.abs(g[1]) < ye) && (p = "s", g = g.slice(2));
        else if (p === "q") {
          if (l.command === "q" && Math.abs(g[0] - (l.args[2] - l.args[0])) < ye && Math.abs(g[1] - (l.args[3] - l.args[1])) < ye)
            p = "t", g = g.slice(2);
          else if (l.command === "t") {
            const ce = Yp(
              // @ts-ignore
              h,
              // @ts-ignore
              c.base
            ), fe = [
              // @ts-ignore
              g[0] + c.base[0],
              // @ts-ignore
              g[1] + c.base[1]
            ];
            Math.abs(ce[0] - fe[0]) < ye && Math.abs(ce[1] - fe[1]) < ye && (p = "t", g = g.slice(2));
          }
        }
      }
      if (t.removeUseless && !n && ((p === "l" || p === "h" || p === "v" || p === "q" || p === "t" || p === "c" || p === "s") && g.every(function(ce) {
        return ce === 0;
      }) || p === "a" && g[5] === 0 && g[6] === 0))
        return d[f] = l, !1;
      t.convertToZ && (r || (x == null ? void 0 : x.command) === "Z" || (x == null ? void 0 : x.command) === "z") && (p === "l" || p === "h" || p === "v") && // @ts-ignore
      Math.abs(u[0] - c.coords[0]) < ye && // @ts-ignore
      Math.abs(u[1] - c.coords[1]) < ye && (p = "z", g = []), c.command = p, c.args = g;
    } else if (s[0] = u[0], s[1] = u[1], l.command === "Z" || l.command === "z") return !1;
    return (p === "Z" || p === "z") && t.removeUseless && r && // @ts-ignore
    Math.abs(c.base[0] - c.coords[0]) < ye / 10 && // @ts-ignore
    Math.abs(c.base[1] - c.coords[1]) < ye / 10 ? !1 : (p === "q" ? o = [g[0] + c.base[0], g[1] + c.base[1]] : p === "t" && (h ? o = Yp(h, c.base) : o = c.coords), l = c, !0);
  }), e;
}
function FU(e, t) {
  var r = e[0];
  return e = e.filter(function(n, a) {
    if (a == 0) return !0;
    if (n.command === "Z" || n.command === "z")
      return r = n, !0;
    var i = n.command, s = n.args, u = s.slice(), l = s.slice();
    if (i === "m" || i === "l" || i === "t" || i === "q" || i === "s" || i === "c")
      for (var o = u.length; o--; )
        u[o] += n.base[o % 2];
    else i == "h" ? u[0] += n.base[0] : i == "v" ? u[0] += n.base[1] : i == "a" && (u[5] += n.base[0], u[6] += n.base[1]);
    er(u), er(l);
    var c = Zi(u, t), f = Zi(l, t);
    return (t.forceAbsolutePath || c.length < f.length && !(t.negativeExtraSpace && i == r.command && r.command.charCodeAt(0) > 96 && c.length == f.length - 1 && (s[0] < 0 || Math.floor(s[0]) === 0 && !Number.isInteger(s[0]) && r.args[r.args.length - 1] % 1))) && (n.command = i.toUpperCase(), n.args = u), r = n, !0;
  }), e;
}
function ac(e) {
  var t = Dy([
    0,
    0,
    e[2],
    e[3],
    e[0],
    e[1],
    e[4],
    e[5]
  ]);
  return t != null && e[2] < t[0] == t[0] < 0 && e[3] < t[1] == t[1] < 0 && e[4] < t[0] == t[0] < e[0] && e[5] < t[1] == t[1] < e[1];
}
function Dy(e) {
  var t = e[1] - e[3], r = e[2] - e[0], n = e[0] * e[3] - e[2] * e[1], a = e[5] - e[7], i = e[6] - e[4], s = e[4] * e[7] - e[5] * e[6], u = t * i - a * r;
  if (u) {
    var l = [(r * s - i * n) / u, (t * s - a * n) / -u];
    if (!isNaN(l[0]) && !isNaN(l[1]) && isFinite(l[0]) && isFinite(l[1]))
      return l;
  }
}
function BU(e) {
  const t = Ct || 0;
  for (let r = e.length; r-- > 0; ) {
    const n = Lo(e[r], t);
    if (n !== e[r]) {
      const a = Lo(e[r], t - 1);
      e[r] = Lo(Math.abs(a - e[r]), t + 1) >= ye ? n : a;
    }
  }
  return e;
}
function qU(e) {
  for (var t = e.length; t-- > 0; )
    e[t] = Math.round(e[t]);
  return e;
}
function ic(e) {
  var t = e.length - 2, r = -e[t + 1], n = e[t], a = 1 / (r * r + n * n);
  if (t <= 1 || !isFinite(a)) return !1;
  for (; (t -= 2) >= 0; )
    if (Math.sqrt(Math.pow(r * e[t] + n * e[t + 1], 2) * a) > ye)
      return !1;
  return !0;
}
function Xp(e) {
  if (e[3] === 1) return;
  const [t, r] = e;
  if (Math.abs(t - r) > ye) return;
  const n = Math.sqrt(e[5] ** 2 + e[6] ** 2);
  if (!(n > t * 2))
    return t - Math.sqrt(t ** 2 - 0.25 * n ** 2);
}
function Ai(e, t) {
  switch (e.command) {
    case "s":
      e.command = "c";
      break;
    case "t":
      e.command = "q";
      break;
  }
  return e.args.unshift(
    t[t.length - 2] - t[t.length - 4],
    t[t.length - 1] - t[t.length - 3]
  ), e;
}
function rf(e, t) {
  return Math.sqrt((e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2);
}
function Yp(e, t) {
  return [2 * t[0] - e[0], 2 * t[1] - e[1]];
}
function nf(e, t) {
  var r = t * t, n = r * t, a = 1 - t, i = a * a;
  return [
    3 * i * t * e[0] + 3 * a * r * e[2] + n * e[4],
    3 * i * t * e[1] + 3 * a * r * e[3] + n * e[5]
  ];
}
function UU(e) {
  var t = nf(e, 0.5), r = [t[0] / 2, t[1] / 2], n = [(t[0] + e[4]) / 2, (t[1] + e[5]) / 2], a = Dy([
    r[0],
    r[1],
    r[0] + r[1],
    r[1] - r[0],
    n[0],
    n[1],
    n[0] + (n[1] - t[1]),
    n[1] - (n[0] - t[0])
  ]), i = a && rf([0, 0], a), s = Math.min(Ad * ye, Ed * i / 100);
  if (a && // @ts-ignore
  i < 1e15 && [1 / 4, 3 / 4].every(function(u) {
    return Math.abs(
      // @ts-ignore
      rf(nf(e, u), a) - i
    ) <= s;
  }))
    return { center: a, radius: i };
}
function Oy(e, t) {
  var r = Math.min(
    Ad * ye,
    Ed * t.radius / 100
  );
  return [0, 1 / 4, 1 / 2, 3 / 4, 1].every(function(n) {
    return Math.abs(
      rf(nf(e, n), t.center) - t.radius
    ) <= r;
  });
}
function Kp(e, t) {
  return Oy(e, {
    center: [t.center[0] + e[4], t.center[1] + e[5]],
    radius: t.radius
  });
}
function sc(e, t) {
  var r = -t.center[0], n = -t.center[1], a = e[4] - t.center[0], i = e[5] - t.center[1];
  return Math.acos(
    (r * a + n * i) / Math.sqrt((r * r + n * n) * (a * a + i * i))
  );
}
function jU(e, t) {
  return t.reduce(function(r, n) {
    var a = "";
    return n.args && (a = Zi(er(n.args.slice()), e)), r + n.command + a;
  }, "");
}
var Bs = {};
const { cleanupOutData: zU, toFixed: GU } = Se, {
  transform2js: HU,
  transformsMultiply: VU,
  matrixToTransform: WU
} = ai;
Bs.name = "convertTransform";
Bs.description = "collapses multiple transformations and optimizes it";
Bs.fn = (e, t) => {
  const {
    convertToShorts: r = !0,
    // degPrecision = 3, // transformPrecision (or matrix precision) - 2 by default
    degPrecision: n,
    floatPrecision: a = 3,
    transformPrecision: i = 5,
    matrixToTransform: s = !0,
    shortTranslate: u = !0,
    shortScale: l = !0,
    shortRotate: o = !0,
    removeUseless: c = !0,
    collapseIntoOne: f = !0,
    leadingZero: d = !0,
    negativeExtraSpace: h = !1
  } = t, p = {
    convertToShorts: r,
    degPrecision: n,
    floatPrecision: a,
    transformPrecision: i,
    matrixToTransform: s,
    shortTranslate: u,
    shortScale: l,
    shortRotate: o,
    removeUseless: c,
    collapseIntoOne: f,
    leadingZero: d,
    negativeExtraSpace: h
  };
  return {
    element: {
      enter: (g) => {
        g.attributes.transform != null && oc(g, "transform", p), g.attributes.gradientTransform != null && oc(g, "gradientTransform", p), g.attributes.patternTransform != null && oc(g, "patternTransform", p);
      }
    }
  };
};
const oc = (e, t, r) => {
  let n = HU(e.attributes[t]);
  r = XU(n, r), r.collapseIntoOne && n.length > 1 && (n = [VU(n)]), r.convertToShorts ? n = KU(n, r) : n.forEach((a) => Td(a, r)), r.removeUseless && (n = QU(n)), n.length ? e.attributes[t] = af(n, r) : delete e.attributes[t];
}, XU = (e, { ...t }) => {
  const r = [];
  for (const a of e)
    a.name == "matrix" && r.push(...a.data.slice(0, 4));
  let n = t.transformPrecision;
  return r.length && (t.transformPrecision = Math.min(
    t.transformPrecision,
    Math.max.apply(Math, r.map(YU)) || t.transformPrecision
  ), n = Math.max.apply(
    Math,
    r.map(
      (a) => a.toString().replace(/\D+/g, "").length
      // Number of digits in a number. 123.45 → 5
    )
  )), t.degPrecision == null && (t.degPrecision = Math.max(
    0,
    Math.min(t.floatPrecision, n - 2)
  )), t;
}, Qp = (e, t) => t.degPrecision != null && t.degPrecision >= 1 && t.floatPrecision < 20 ? Ld(t.degPrecision, e) : Pd(e), uc = (e, t) => t.floatPrecision >= 1 && t.floatPrecision < 20 ? Ld(t.floatPrecision, e) : Pd(e), Zp = (e, t) => t.transformPrecision >= 1 && t.floatPrecision < 20 ? Ld(t.transformPrecision, e) : Pd(e), YU = (e) => {
  const t = e.toString();
  return t.slice(t.indexOf(".")).length - 1;
}, KU = (e, t) => {
  var a;
  for (var r = 0; r < e.length; r++) {
    let i = e[r];
    if (t.matrixToTransform && i.name === "matrix") {
      var n = WU(i, t);
      af(n, t).length <= af([i], t).length && e.splice(r, 1, ...n), i = e[r];
    }
    Td(i, t), t.shortTranslate && i.name === "translate" && i.data.length === 2 && !i.data[1] && i.data.pop(), t.shortScale && i.name === "scale" && i.data.length === 2 && i.data[0] === i.data[1] && i.data.pop(), t.shortRotate && ((a = e[r - 2]) == null ? void 0 : a.name) === "translate" && e[r - 1].name === "rotate" && e[r].name === "translate" && e[r - 2].data[0] === -e[r].data[0] && e[r - 2].data[1] === -e[r].data[1] && (e.splice(r - 2, 3, {
      name: "rotate",
      data: [
        e[r - 1].data[0],
        e[r - 2].data[0],
        e[r - 2].data[1]
      ]
    }), r -= 2);
  }
  return e;
}, QU = (e) => e.filter((t) => !(["translate", "rotate", "skewX", "skewY"].indexOf(t.name) > -1 && (t.data.length == 1 || t.name == "rotate") && !t.data[0] || // translate(0, 0)
t.name == "translate" && !t.data[0] && !t.data[1] || // scale(1)
t.name == "scale" && t.data[0] == 1 && (t.data.length < 2 || t.data[1] == 1) || // matrix(1 0 0 1 0 0)
t.name == "matrix" && t.data[0] == 1 && t.data[3] == 1 && !(t.data[1] || t.data[2] || t.data[4] || t.data[5]))), af = (e, t) => e.map((n) => (Td(n, t), `${n.name}(${zU(n.data, t)})`)).join(""), Td = (e, t) => {
  switch (e.name) {
    case "translate":
      e.data = uc(e.data, t);
      break;
    case "rotate":
      e.data = [
        ...Qp(e.data.slice(0, 1), t),
        ...uc(e.data.slice(1), t)
      ];
      break;
    case "skewX":
    case "skewY":
      e.data = Qp(e.data, t);
      break;
    case "scale":
      e.data = Zp(e.data, t);
      break;
    case "matrix":
      e.data = [
        ...Zp(e.data.slice(0, 4), t),
        ...uc(e.data.slice(4), t)
      ];
      break;
  }
  return e;
}, Pd = (e) => e.map(Math.round), Ld = (e, t) => {
  for (var r = t.length, n = +Math.pow(0.1, e).toFixed(e); r--; )
    if (GU(t[r], e) !== t[r]) {
      var a = +t[r].toFixed(e - 1);
      t[r] = +Math.abs(a - t[r]).toFixed(e + 1) >= n ? +t[r].toFixed(e) : a;
    }
  return t;
};
var qs = {};
const { attrsGroups: ZU } = be;
qs.name = "removeEmptyAttrs";
qs.description = "removes empty attributes";
qs.fn = () => ({
  element: {
    enter: (e) => {
      for (const [t, r] of Object.entries(e.attributes))
        r === "" && // empty conditional processing attributes prevents elements from rendering
        !ZU.conditionalProcessing.has(t) && delete e.attributes[t];
    }
  }
});
var Us = {};
const { detachNodeFromParent: JU } = ne, { elemsGroups: ej } = be;
Us.name = "removeEmptyContainers";
Us.description = "removes empty container elements";
Us.fn = () => ({
  element: {
    exit: (e, t) => {
      e.name === "svg" || !ej.container.has(e.name) || e.children.length !== 0 || e.name === "pattern" && Object.keys(e.attributes).length !== 0 || e.name === "g" && e.attributes.filter != null || e.name === "mask" && e.attributes.id != null || t.type === "element" && t.name === "switch" || JU(e, t);
    }
  }
});
var js = {};
const { collectStylesheet: tj, computeStyle: rj } = st, { path2js: Jp, js2path: nj, intersects: aj } = hn;
js.name = "mergePaths";
js.description = "merges multiple paths in one if possible";
js.fn = (e, t) => {
  const {
    force: r = !1,
    floatPrecision: n,
    noSpaceAfterFlags: a = !1
    // a20 60 45 0 1 30 20 → a20 60 45 0130 20
  } = t, i = tj(e);
  return {
    element: {
      enter: (s) => {
        if (s.children.length <= 1)
          return;
        const u = [];
        let l = s.children[0], o = null;
        const c = (f, d) => {
          nj(f, d, {
            floatPrecision: n,
            noSpaceAfterFlags: a
          }), o = null;
        };
        for (let f = 1; f < s.children.length; f++) {
          const d = s.children[f];
          if (l.type !== "element" || l.name !== "path" || l.children.length !== 0 || l.attributes.d == null) {
            o && l.type === "element" && c(l, o), l = d;
            continue;
          }
          if (d.type !== "element" || d.name !== "path" || d.children.length !== 0 || d.attributes.d == null) {
            o && c(l, o), l = d;
            continue;
          }
          const h = rj(i, d);
          if (h["marker-start"] || h["marker-mid"] || h["marker-end"]) {
            o && c(l, o), l = d;
            continue;
          }
          const p = Object.keys(d.attributes);
          if (p.length !== Object.keys(l.attributes).length) {
            o && c(l, o), l = d;
            continue;
          }
          if (p.some((S) => S !== "d" && l.type === "element" && l.attributes[S] !== d.attributes[S])) {
            o && c(l, o), l = d;
            continue;
          }
          const x = o != null, C = Jp(d);
          if (o = o ?? Jp(l), r || !aj(o, C)) {
            o.push(...C), u.push(d);
            continue;
          }
          x && c(l, o), l = d, o = null;
        }
        o && l.type === "element" && c(l, o), s.children = s.children.filter(
          (f) => !u.includes(f)
        );
      }
    }
  };
};
var zs = {};
zs.name = "removeUnusedNS";
zs.description = "removes unused namespaces declaration";
zs.fn = () => {
  const e = /* @__PURE__ */ new Set();
  return {
    element: {
      enter: (t, r) => {
        if (t.name === "svg" && r.type === "root") {
          for (const n of Object.keys(t.attributes))
            if (n.startsWith("xmlns:")) {
              const a = n.slice(6);
              e.add(a);
            }
        }
        if (e.size !== 0) {
          if (t.name.includes(":")) {
            const [n] = t.name.split(":");
            e.has(n) && e.delete(n);
          }
          for (const n of Object.keys(t.attributes))
            if (n.includes(":")) {
              const [a] = n.split(":");
              e.delete(a);
            }
        }
      },
      exit: (t, r) => {
        if (t.name === "svg" && r.type === "root")
          for (const n of e)
            delete t.attributes[`xmlns:${n}`];
      }
    }
  };
};
var Gs = {};
Gs.name = "sortAttrs";
Gs.description = "Sort element attributes for better compression";
Gs.fn = (e, t) => {
  const {
    order: r = [
      "id",
      "width",
      "height",
      "x",
      "x1",
      "x2",
      "y",
      "y1",
      "y2",
      "cx",
      "cy",
      "r",
      "fill",
      "stroke",
      "marker",
      "d",
      "points"
    ],
    xmlnsOrder: n = "front"
  } = t, a = (s) => {
    if (n === "front") {
      if (s === "xmlns")
        return 3;
      if (s.startsWith("xmlns:"))
        return 2;
    }
    return s.includes(":") ? 1 : 0;
  }, i = ([s], [u]) => {
    const l = a(s), c = a(u) - l;
    if (c !== 0)
      return c;
    const [f] = s.split("-"), [d] = u.split("-");
    if (f !== d) {
      const h = r.includes(f) ? 1 : 0, p = r.includes(d) ? 1 : 0;
      if (h === 1 && p === 1)
        return r.indexOf(f) - r.indexOf(d);
      const g = p - h;
      if (g !== 0)
        return g;
    }
    return s < u ? -1 : 1;
  };
  return {
    element: {
      enter: (s) => {
        const u = Object.entries(s.attributes);
        u.sort(i);
        const l = {};
        for (const [o, c] of u)
          l[o] = c;
        s.attributes = l;
      }
    }
  };
};
var Hs = {};
Hs.name = "sortDefsChildren";
Hs.description = "Sorts children of <defs> to improve compression";
Hs.fn = () => ({
  element: {
    enter: (e) => {
      if (e.name === "defs") {
        const t = /* @__PURE__ */ new Map();
        for (const r of e.children)
          if (r.type === "element") {
            const n = t.get(r.name);
            n == null ? t.set(r.name, 1) : t.set(r.name, n + 1);
          }
        e.children.sort((r, n) => {
          if (r.type !== "element" || n.type !== "element")
            return 0;
          const a = t.get(r.name), i = t.get(n.name);
          if (a != null && i != null) {
            const u = i - a;
            if (u !== 0)
              return u;
          }
          const s = n.name.length - r.name.length;
          return s !== 0 ? s : r.name !== n.name ? r.name > n.name ? -1 : 1 : 0;
        });
      }
    }
  }
});
var Vs = {};
const { detachNodeFromParent: ij } = ne;
Vs.name = "removeTitle";
Vs.description = "removes <title>";
Vs.fn = () => ({
  element: {
    enter: (e, t) => {
      e.name === "title" && ij(e, t);
    }
  }
});
var Ws = {};
const { detachNodeFromParent: sj } = ne;
Ws.name = "removeDesc";
Ws.description = "removes <desc>";
const oj = /^(Created with|Created using)/;
Ws.fn = (e, t) => {
  const { removeAny: r = !1 } = t;
  return {
    element: {
      enter: (n, a) => {
        n.name === "desc" && (r || n.children.length === 0 || n.children[0].type === "text" && oj.test(n.children[0].value)) && sj(n, a);
      }
    }
  };
};
const { createPreset: uj } = Jo, lj = is, cj = ss, fj = os, dj = us, hj = ls, pj = cs, mj = fs, gj = ds, bj = ks, yj = ws, vj = Ss, xj = Cs, kj = $s, wj = As, Sj = Es, Cj = Ts, $j = Ps, Aj = Ls, Ej = Ns, Tj = Ds, Pj = Os, Lj = Ms, Nj = Is, Dj = Rs, Oj = _s, Mj = Fs, Ij = Bs, Rj = qs, _j = Us, Fj = js, Bj = zs, qj = Gs, Uj = Hs, jj = Vs, zj = Ws, Gj = uj({
  name: "preset-default",
  plugins: [
    lj,
    cj,
    fj,
    dj,
    hj,
    pj,
    mj,
    gj,
    bj,
    yj,
    vj,
    xj,
    kj,
    wj,
    Sj,
    Cj,
    $j,
    Aj,
    Ej,
    Tj,
    Pj,
    Lj,
    Nj,
    Dj,
    Oj,
    Mj,
    Ij,
    Rj,
    _j,
    Fj,
    Bj,
    qj,
    Uj,
    jj,
    zj
  ]
});
var Hj = Gj, Fu = {};
Fu.name = "addAttributesToSVGElement";
Fu.description = "adds attributes to an outer <svg> element";
var Vj = `Error in plugin "addAttributesToSVGElement": absent parameters.
It should have a list of "attributes" or one "attribute".
Config example:

plugins: [
  {
    name: 'addAttributesToSVGElement',
    params: {
      attribute: "mySvg"
    }
  }
]

plugins: [
  {
    name: 'addAttributesToSVGElement',
    params: {
      attributes: ["mySvg", "size-big"]
    }
  }
]

plugins: [
  {
    name: 'addAttributesToSVGElement',
    params: {
      attributes: [
        {
          focusable: false
        },
        {
          'data-image': icon
        }
      ]
    }
  }
]
`;
Fu.fn = (e, t) => {
  if (!Array.isArray(t.attributes) && !t.attribute)
    return console.error(Vj), null;
  const r = t.attributes || [t.attribute];
  return {
    element: {
      enter: (n, a) => {
        if (n.name === "svg" && a.type === "root") {
          for (const i of r)
            if (typeof i == "string" && n.attributes[i] == null && (n.attributes[i] = void 0), typeof i == "object")
              for (const s of Object.keys(i))
                n.attributes[s] == null && (n.attributes[s] = i[s]);
        }
      }
    }
  };
};
var Bu = {};
Bu.name = "addClassesToSVGElement";
Bu.description = "adds classnames to an outer <svg> element";
var Wj = `Error in plugin "addClassesToSVGElement": absent parameters.
It should have a list of classes in "classNames" or one "className".
Config example:

plugins: [
  {
    name: "addClassesToSVGElement",
    params: {
      className: "mySvg"
    }
  }
]

plugins: [
  {
    name: "addClassesToSVGElement",
    params: {
      classNames: ["mySvg", "size-big"]
    }
  }
]
`;
Bu.fn = (e, t) => {
  if (!(Array.isArray(t.classNames) && t.classNames.some(String)) && !t.className)
    return console.error(Wj), null;
  const r = t.classNames || [t.className];
  return {
    element: {
      enter: (n, a) => {
        if (n.name === "svg" && a.type === "root") {
          const i = new Set(
            n.attributes.class == null ? null : n.attributes.class.split(" ")
          );
          for (const s of r)
            s != null && i.add(s);
          n.attributes.class = Array.from(i).join(" ");
        }
      }
    }
  };
};
var qu = {};
const { removeLeadingZero: Xj } = Se;
qu.name = "cleanupListOfValues";
qu.description = "rounds list of values to the fixed precision";
const Yj = /^([-+]?\d*\.?\d+([eE][-+]?\d+)?)(px|pt|pc|mm|cm|m|in|ft|em|ex|%)?$/, Kj = /\s+,?\s*|,\s*/, em = {
  // relative to px
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  in: 96,
  pt: 4 / 3,
  pc: 16,
  px: 1
};
qu.fn = (e, t) => {
  const {
    floatPrecision: r = 3,
    leadingZero: n = !0,
    defaultPx: a = !0,
    convertToPx: i = !0
  } = t, s = (u) => {
    const l = [];
    for (const o of u.split(Kj)) {
      const c = o.match(Yj), f = o.match(/new/);
      if (c) {
        let d = Number(Number(c[1]).toFixed(r)), p = c[3] || "";
        if (i && p && p in em) {
          const x = Number(
            (em[p] * Number(c[1])).toFixed(r)
          );
          x.toString().length < c[0].length && (d = x, p = "px");
        }
        let g;
        n ? g = Xj(d) : g = d.toString(), a && p === "px" && (p = ""), l.push(g + p);
      } else f ? l.push("new") : o && l.push(o);
    }
    return l.join(" ");
  };
  return {
    element: {
      enter: (u) => {
        u.attributes.points != null && (u.attributes.points = s(u.attributes.points)), u.attributes["enable-background"] != null && (u.attributes["enable-background"] = s(
          u.attributes["enable-background"]
        )), u.attributes.viewBox != null && (u.attributes.viewBox = s(u.attributes.viewBox)), u.attributes["stroke-dasharray"] != null && (u.attributes["stroke-dasharray"] = s(
          u.attributes["stroke-dasharray"]
        )), u.attributes.dx != null && (u.attributes.dx = s(u.attributes.dx)), u.attributes.dy != null && (u.attributes.dy = s(u.attributes.dy)), u.attributes.x != null && (u.attributes.x = s(u.attributes.x)), u.attributes.y != null && (u.attributes.y = s(u.attributes.y));
      }
    }
  };
};
var Uu = {};
const { attrsGroupsDefaults: Qj, colorsProps: tm } = be, {
  detachNodeFromParent: rm,
  querySelectorAll: nm,
  querySelector: Zj
} = ne, { computeStyle: Jj, collectStylesheet: ez } = st;
Uu.name = "convertOneStopGradients";
Uu.description = "converts one-stop (single color) gradients to a plain color";
Uu.fn = (e) => {
  const t = ez(e), r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  let i = 0;
  return {
    element: {
      enter: (s, u) => {
        if (s.attributes["xlink:href"] != null && i++, s.name === "defs") {
          n.set(s, u);
          return;
        }
        if (s.name !== "linearGradient" && s.name !== "radialGradient")
          return;
        const l = s.children.filter((S) => S.type === "element" && S.name === "stop"), o = s.attributes["xlink:href"] || s.attributes.href;
        let c = l.length === 0 && o != null && o.startsWith("#") ? Zj(e, o) : s;
        if (c == null || c.type !== "element") {
          a.set(s, u);
          return;
        }
        const f = c.children.filter((S) => S.type === "element" && S.name === "stop");
        if (f.length !== 1 || f[0].type !== "element")
          return;
        u.type === "element" && u.name === "defs" && r.add(u), a.set(s, u);
        let d;
        const h = Jj(t, f[0])["stop-color"];
        h != null && h.type === "static" && (d = h.value);
        const p = `url(#${s.attributes.id})`, g = [...tm].map((S) => `[${S}="${p}"]`).join(","), x = nm(e, g);
        for (const S of x)
          if (S.type === "element")
            for (const P of tm)
              S.attributes[P] === p && (d != null ? S.attributes[P] = d : delete S.attributes[P]);
        const C = nm(
          e,
          `[style*=${p}]`
        );
        for (const S of C)
          S.type === "element" && (S.attributes.style = S.attributes.style.replace(
            p,
            d || Qj.presentation["stop-color"]
          ));
      },
      exit: (s) => {
        if (s.name === "svg") {
          for (const [u, l] of a.entries())
            u.attributes["xlink:href"] != null && i--, rm(u, l);
          i === 0 && delete s.attributes["xmlns:xlink"];
          for (const [u, l] of n.entries())
            r.has(u) && u.children.length === 0 && rm(u, l);
        }
      }
    }
  };
};
var ju = {};
const { attrsGroups: tz } = be;
ju.name = "convertStyleToAttrs";
ju.description = "converts style to attributes";
const Xs = (...e) => "(?:" + e.join("|") + ")", rz = tz.presentation, ii = "\\\\(?:[0-9a-f]{1,6}\\s?|\\r\\n|.)", nz = "\\s*(" + Xs("[^:;\\\\]", ii) + "*?)\\s*", zu = "'(?:[^'\\n\\r\\\\]|" + ii + ")*?(?:'|$)", Gu = '"(?:[^"\\n\\r\\\\]|' + ii + ')*?(?:"|$)', az = new RegExp("^" + Xs(zu, Gu) + "$"), iz = "\\(" + Xs(`[^'"()\\\\]+`, ii, zu, Gu) + "*?\\)", sz = "\\s*(" + Xs(
  `[^!'"();\\\\]+?`,
  ii,
  zu,
  Gu,
  iz,
  "[^;]*?"
) + "*?)", oz = "\\s*(?:;\\s*|$)", uz = "(\\s*!important(?![-(\\w]))?", am = new RegExp(
  nz + ":" + sz + uz + oz,
  "ig"
), lz = new RegExp(
  Xs(ii, zu, Gu, "/\\*[^]*?\\*/"),
  "ig"
);
ju.fn = (e, t) => {
  const { keepImportant: r = !1 } = t;
  return {
    element: {
      enter: (n) => {
        if (n.attributes.style != null) {
          let i = [];
          const s = {}, u = n.attributes.style.replace(
            lz,
            (l) => l[0] == "/" ? "" : l[0] == "\\" && /[-g-z]/i.test(l[1]) ? l[1] : l
          );
          am.lastIndex = 0;
          for (var a; a = am.exec(u); )
            (!r || !a[3]) && i.push([a[1], a[2]]);
          i.length && (i = i.filter(function(l) {
            if (l[0]) {
              var o = l[0].toLowerCase(), c = l[1];
              if (az.test(c) && (c = c.slice(1, -1)), rz.has(o))
                return s[o] = c, !1;
            }
            return !0;
          }), Object.assign(n.attributes, s), i.length ? n.attributes.style = i.map((l) => l.join(":")).join(";") : delete n.attributes.style);
        }
      }
    }
  };
};
var Hu = {};
const lc = oe, { referencesProps: cz } = be;
Hu.name = "prefixIds";
Hu.description = "prefix IDs";
const fz = (e) => {
  const t = /[/\\]?([^/\\]+)$/.exec(e);
  return t ? t[1] : "";
}, dz = (e) => e.replace(/[. ]/g, "_"), hz = (e) => e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'") ? e.slice(1, -1) : e, qi = (e, t) => {
  const r = e(t);
  return t.startsWith(r) ? t : r + t;
}, cc = (e, t) => t.startsWith("#") ? "#" + qi(e, t.slice(1)) : null, pz = (e, t, r, n, a, i) => {
  if (typeof n == "function") {
    let s = i.get(e);
    return s != null || (s = n(t, r) + a, i.set(e, s)), s;
  }
  return typeof n == "string" ? n + a : n === !1 ? "" : r.path != null && r.path.length > 0 ? dz(fz(r.path)) + a : "prefix" + a;
};
Hu.fn = (e, t, r) => {
  const {
    delim: n = "__",
    prefix: a,
    prefixIds: i = !0,
    prefixClassNames: s = !0
  } = t, u = /* @__PURE__ */ new Map();
  return {
    element: {
      enter: (l) => {
        const o = (c) => pz(c, l, r, a, n, u);
        if (l.name === "style") {
          if (l.children.length === 0)
            return;
          for (const c of l.children) {
            if (c.type !== "text" && c.type !== "cdata")
              continue;
            const f = c.value;
            let d = null;
            try {
              d = lc.parse(f, {
                parseValue: !0,
                parseCustomProperty: !1
              });
            } catch {
              return;
            }
            lc.walk(d, (h) => {
              if (i && h.type === "IdSelector" || s && h.type === "ClassSelector") {
                h.name = qi(o, h.name);
                return;
              }
              if (h.type === "Url" && h.value.length > 0) {
                const p = cc(
                  o,
                  hz(h.value)
                );
                p != null && (h.value = p);
              }
            }), c.value = lc.generate(d);
            return;
          }
        }
        i && l.attributes.id != null && l.attributes.id.length !== 0 && (l.attributes.id = qi(o, l.attributes.id)), s && l.attributes.class != null && l.attributes.class.length !== 0 && (l.attributes.class = l.attributes.class.split(/\s+/).map((c) => qi(o, c)).join(" "));
        for (const c of ["href", "xlink:href"])
          if (l.attributes[c] != null && l.attributes[c].length !== 0) {
            const f = cc(
              o,
              l.attributes[c]
            );
            f != null && (l.attributes[c] = f);
          }
        for (const c of cz)
          l.attributes[c] != null && l.attributes[c].length !== 0 && (l.attributes[c] = l.attributes[c].replace(
            /\burl\((["'])?(#.+?)\1\)/gi,
            (f, d, h) => {
              const p = cc(o, h);
              return p == null ? f : `url(${p})`;
            }
          ));
        for (const c of ["begin", "end"])
          if (l.attributes[c] != null && l.attributes[c].length !== 0) {
            const f = l.attributes[c].split(/\s*;\s+/).map((d) => {
              if (d.endsWith(".end") || d.endsWith(".start")) {
                const [h, p] = d.split(".");
                return `${qi(o, h)}.${p}`;
              }
              return d;
            });
            l.attributes[c] = f.join("; ");
          }
      }
    }
  };
};
var Vu = {};
const { querySelectorAll: mz } = ne;
Vu.name = "removeAttributesBySelector";
Vu.description = "removes attributes of elements that match a css selector";
Vu.fn = (e, t) => {
  const r = Array.isArray(t.selectors) ? t.selectors : [t];
  for (const { selector: n, attributes: a } of r) {
    const i = mz(e, n);
    for (const s of i)
      if (s.type === "element")
        if (Array.isArray(a))
          for (const u of a)
            delete s.attributes[u];
        else
          delete s.attributes[a];
  }
  return {};
};
var Wu = {};
Wu.name = "removeAttrs";
Wu.description = "removes specified attributes";
const gz = ":", bz = `Warning: The plugin "removeAttrs" requires the "attrs" parameter.
It should have a pattern to remove, otherwise the plugin is a noop.
Config example:

plugins: [
  {
    name: "removeAttrs",
    params: {
      attrs: "(fill|stroke)"
    }
  }
]
`;
Wu.fn = (e, t) => {
  if (typeof t.attrs > "u")
    return console.warn(bz), null;
  const r = typeof t.elemSeparator == "string" ? t.elemSeparator : gz, n = typeof t.preserveCurrentColor == "boolean" ? t.preserveCurrentColor : !1, a = Array.isArray(t.attrs) ? t.attrs : [t.attrs];
  return {
    element: {
      enter: (i) => {
        for (let s of a) {
          s.includes(r) ? s.split(r).length < 3 && (s = [s, ".*"].join(r)) : s = [".*", s, ".*"].join(r);
          const u = s.split(r).map((l) => (l === "*" && (l = ".*"), new RegExp(["^", l, "$"].join(""), "i")));
          if (u[0].test(i.name))
            for (const [l, o] of Object.entries(i.attributes)) {
              const c = n && l == "fill" && o == "currentColor", f = n && l == "stroke" && o == "currentColor";
              !c && !f && // matches attribute name
              u[1].test(l) && // matches attribute value
              u[2].test(o) && delete i.attributes[l];
            }
        }
      }
    }
  };
};
var Xu = {};
Xu.name = "removeDimensions";
Xu.description = "removes width and height in presence of viewBox (opposite to removeViewBox, disable it first)";
Xu.fn = () => ({
  element: {
    enter: (e) => {
      if (e.name === "svg") {
        if (e.attributes.viewBox != null)
          delete e.attributes.width, delete e.attributes.height;
        else if (e.attributes.width != null && e.attributes.height != null && Number.isNaN(Number(e.attributes.width)) === !1 && Number.isNaN(Number(e.attributes.height)) === !1) {
          const t = Number(e.attributes.width), r = Number(e.attributes.height);
          e.attributes.viewBox = `0 0 ${t} ${r}`, delete e.attributes.width, delete e.attributes.height;
        }
      }
    }
  }
});
var Yu = {};
const { detachNodeFromParent: im } = ne;
Yu.name = "removeElementsByAttr";
Yu.description = "removes arbitrary elements by ID or className (disabled by default)";
Yu.fn = (e, t) => {
  const r = t.id == null ? [] : Array.isArray(t.id) ? t.id : [t.id], n = t.class == null ? [] : Array.isArray(t.class) ? t.class : [t.class];
  return {
    element: {
      enter: (a, i) => {
        if (a.attributes.id != null && r.length !== 0 && r.includes(a.attributes.id) && im(a, i), a.attributes.class && n.length !== 0) {
          const s = a.attributes.class.split(" ");
          for (const u of n)
            if (s.includes(u)) {
              im(a, i);
              break;
            }
        }
      }
    }
  };
};
var Ku = {};
const { visitSkip: yz, detachNodeFromParent: vz } = ne, { parsePathData: xz } = ni, { intersects: kz } = hn;
Ku.name = "removeOffCanvasPaths";
Ku.description = "removes elements that are drawn outside of the viewbox (disabled by default)";
Ku.fn = () => {
  let e = null;
  return {
    element: {
      enter: (t, r) => {
        if (t.name === "svg" && r.type === "root") {
          let n = "";
          t.attributes.viewBox != null ? n = t.attributes.viewBox : t.attributes.height != null && t.attributes.width != null && (n = `0 0 ${t.attributes.width} ${t.attributes.height}`), n = n.replace(/[,+]|px/g, " ").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
          const a = /^(-?\d*\.?\d+) (-?\d*\.?\d+) (\d*\.?\d+) (\d*\.?\d+)$/.exec(
            n
          );
          if (a == null)
            return;
          const i = Number.parseFloat(a[1]), s = Number.parseFloat(a[2]), u = Number.parseFloat(a[3]), l = Number.parseFloat(a[4]);
          e = {
            left: i,
            top: s,
            right: i + u,
            bottom: s + l,
            width: u,
            height: l
          };
        }
        if (t.attributes.transform != null)
          return yz;
        if (t.name === "path" && t.attributes.d != null && e != null) {
          const n = xz(t.attributes.d);
          let a = !1;
          for (const c of n)
            if (c.command === "M") {
              const [f, d] = c.args;
              f >= e.left && f <= e.right && d >= e.top && d <= e.bottom && (a = !0);
            }
          if (a)
            return;
          n.length === 2 && n.push({ command: "z", args: [] });
          const { left: i, top: s, width: u, height: l } = e;
          kz([
            { command: "M", args: [i, s] },
            { command: "h", args: [u] },
            { command: "v", args: [l] },
            { command: "H", args: [i] },
            { command: "z", args: [] }
          ], n) === !1 && vz(t, r);
        }
      }
    }
  };
};
var Qu = {};
const { detachNodeFromParent: wz } = ne;
Qu.name = "removeRasterImages";
Qu.description = "removes raster images (disabled by default)";
Qu.fn = () => ({
  element: {
    enter: (e, t) => {
      e.name === "image" && e.attributes["xlink:href"] != null && /(\.|image\/)(jpe?g|png|gif)/.test(e.attributes["xlink:href"]) && wz(e, t);
    }
  }
});
var Zu = {};
const { detachNodeFromParent: Sz } = ne, { attrsGroups: Ei } = be;
Zu.name = "removeScriptElement";
Zu.description = "removes scripts (disabled by default)";
const Cz = [
  ...Ei.animationEvent,
  ...Ei.documentEvent,
  ...Ei.documentElementEvent,
  ...Ei.globalEvent,
  ...Ei.graphicalEvent
];
Zu.fn = () => ({
  element: {
    enter: (e, t) => {
      if (e.name === "script") {
        Sz(e, t);
        return;
      }
      for (const r of Cz)
        e.attributes[r] != null && delete e.attributes[r];
    },
    exit: (e, t) => {
      if (e.name === "a") {
        for (const r of Object.keys(e.attributes))
          if (r === "href" || r.endsWith(":href")) {
            if (e.attributes[r] == null || !e.attributes[r].trimStart().startsWith("javascript:"))
              continue;
            const n = t.children.indexOf(e);
            t.children.splice(n, 1, ...e.children);
            for (const a of e.children)
              Object.defineProperty(a, "parentNode", {
                writable: !0,
                value: t
              });
          }
      }
    }
  }
});
var Ju = {};
const { detachNodeFromParent: $z } = ne;
Ju.name = "removeStyleElement";
Ju.description = "removes <style> element (disabled by default)";
Ju.fn = () => ({
  element: {
    enter: (e, t) => {
      e.name === "style" && $z(e, t);
    }
  }
});
var el = {};
const { elems: Az } = be;
el.name = "removeXlink";
el.description = "remove xlink namespace and replaces attributes with the SVG 2 equivalent where applicable";
const sm = "http://www.w3.org/1999/xlink", Ez = {
  new: "_blank",
  replace: "_self"
}, Tz = /* @__PURE__ */ new Set([
  "cursor",
  "filter",
  "font-face-uri",
  "glyphRef",
  "tref"
]), fc = (e, t, r) => t.map((n) => `${n}:${r}`).filter((n) => e.attributes[n] != null);
el.fn = (e, t) => {
  const { includeLegacy: r } = t, n = [], a = [], i = [];
  return {
    element: {
      enter: (s) => {
        var f, d;
        for (const [h, p] of Object.entries(s.attributes))
          if (h.startsWith("xmlns:")) {
            const g = h.split(":", 2)[1];
            if (p === sm) {
              n.push(g);
              continue;
            }
            n.includes(g) && a.push(g);
          }
        if (a.some((h) => n.includes(h)))
          return;
        const u = fc(s, n, "show");
        let l = s.attributes.target != null;
        for (let h = u.length - 1; h >= 0; h--) {
          const p = u[h], g = s.attributes[p], x = Ez[g];
          if (l || x == null) {
            delete s.attributes[p];
            continue;
          }
          x !== ((d = (f = Az[s.name]) == null ? void 0 : f.defaults) == null ? void 0 : d.target) && (s.attributes.target = x), delete s.attributes[p], l = !0;
        }
        const o = fc(s, n, "title");
        for (let h = o.length - 1; h >= 0; h--) {
          const p = o[h], g = s.attributes[p];
          if (s.children.filter(
            (S) => S.type === "element" && S.name === "title"
          ).length > 0) {
            delete s.attributes[p];
            continue;
          }
          const C = {
            type: "element",
            name: "title",
            attributes: {},
            children: [
              {
                type: "text",
                value: g
              }
            ]
          };
          Object.defineProperty(C, "parentNode", {
            writable: !0,
            value: s
          }), s.children.unshift(C), delete s.attributes[p];
        }
        const c = fc(s, n, "href");
        if (c.length > 0 && Tz.has(s.name) && !r) {
          c.map((h) => h.split(":", 1)[0]).forEach((h) => i.push(h));
          return;
        }
        for (let h = c.length - 1; h >= 0; h--) {
          const p = c[h], g = s.attributes[p];
          if (s.attributes.href != null) {
            delete s.attributes[p];
            continue;
          }
          s.attributes.href = g, delete s.attributes[p];
        }
      },
      exit: (s) => {
        for (const [u, l] of Object.entries(s.attributes)) {
          const [o, c] = u.split(":", 2);
          if (n.includes(o) && !a.includes(o) && !i.includes(o) && !r) {
            delete s.attributes[u];
            continue;
          }
          if (u.startsWith("xmlns:") && !i.includes(c)) {
            if (l === sm) {
              const f = n.indexOf(c);
              n.splice(f, 1), delete s.attributes[u];
              continue;
            }
            if (a.includes(o)) {
              const f = a.indexOf(c);
              a.splice(f, 1);
            }
          }
        }
      }
    }
  };
};
var tl = {};
tl.name = "removeXMLNS";
tl.description = "removes xmlns attribute (for inline svg, disabled by default)";
tl.fn = () => ({
  element: {
    enter: (e) => {
      e.name === "svg" && delete e.attributes.xmlns;
    }
  }
});
var rl = {};
const { collectStylesheet: Pz } = st, { detachNodeFromParent: om, querySelectorAll: Lz } = ne;
rl.name = "reusePaths";
rl.description = "Finds <path> elements with the same d, fill, and stroke, and converts them to <use> elements referencing a single <path> def.";
rl.fn = (e) => {
  const t = Pz(e), r = /* @__PURE__ */ new Map();
  let n;
  const a = /* @__PURE__ */ new Set();
  return {
    element: {
      enter: (i, s) => {
        if (i.name === "path" && i.attributes.d != null) {
          const u = i.attributes.d, l = i.attributes.fill || "", o = i.attributes.stroke || "", c = u + ";s:" + o + ";f:" + l;
          let f = r.get(c);
          f == null && (f = [], r.set(c, f)), f.push(i);
        }
        if (n == null && i.name === "defs" && s.type === "element" && s.name === "svg" && (n = i), i.name === "use")
          for (const u of ["href", "xlink:href"]) {
            const l = i.attributes[u];
            l != null && l.startsWith("#") && l.length > 1 && a.add(l.slice(1));
          }
      },
      exit: (i, s) => {
        if (i.name === "svg" && s.type === "root") {
          let u = n;
          u == null && (u = {
            type: "element",
            name: "defs",
            attributes: {},
            children: []
          }, Object.defineProperty(u, "parentNode", {
            writable: !0,
            value: i
          }));
          let l = 0;
          for (const o of r.values())
            if (o.length > 1) {
              const c = {
                type: "element",
                name: "path",
                attributes: {},
                children: []
              };
              for (const d of ["fill", "stroke", "d"])
                o[0].attributes[d] != null && (c.attributes[d] = o[0].attributes[d]);
              const f = o[0].attributes.id;
              f == null || a.has(f) || t.rules.some(
                (d) => d.selector === `#${f}`
              ) ? c.attributes.id = "reuse-" + l++ : (c.attributes.id = f, delete o[0].attributes.id), Object.defineProperty(c, "parentNode", {
                writable: !0,
                value: u
              }), u.children.push(c);
              for (const d of o) {
                if (delete d.attributes.d, delete d.attributes.stroke, delete d.attributes.fill, u.children.includes(d) && d.children.length === 0) {
                  if (Object.keys(d.attributes).length === 0) {
                    om(d, u);
                    continue;
                  }
                  if (Object.keys(d.attributes).length === 1 && d.attributes.id != null) {
                    om(d, u);
                    const h = `[xlink\\:href=#${d.attributes.id}], [href=#${d.attributes.id}]`;
                    for (const p of Lz(i, h))
                      if (p.type === "element")
                        for (const g of ["href", "xlink:href"])
                          p.attributes[g] != null && (p.attributes[g] = "#" + c.attributes.id);
                    continue;
                  }
                }
                d.name = "use", d.attributes["xlink:href"] = "#" + c.attributes.id;
              }
            }
          u.children.length !== 0 && (i.attributes["xmlns:xlink"] == null && (i.attributes["xmlns:xlink"] = "http://www.w3.org/1999/xlink"), n == null && i.children.unshift(u));
        }
      }
    }
  };
};
pm.builtin = [
  Hj,
  Fu,
  Bu,
  cs,
  Ls,
  ws,
  qu,
  Cs,
  _s,
  $s,
  Ms,
  Uu,
  Fs,
  Os,
  ju,
  Bs,
  fs,
  ds,
  js,
  ks,
  Is,
  Rs,
  Hu,
  Vu,
  Wu,
  os,
  Ws,
  Xu,
  is,
  ls,
  Yu,
  qs,
  Us,
  Ds,
  Ns,
  us,
  Es,
  Ku,
  Qu,
  Zu,
  Ju,
  Vs,
  As,
  zs,
  Ss,
  Ts,
  Ps,
  el,
  tl,
  ss,
  rl,
  Gs,
  Hs
];
const { parseSvg: Nz } = cm, { stringifySvg: Dz } = dm, { builtin: Oz } = pm, { invokePlugins: Mz } = Jo, { encodeSVGDatauri: Iz } = Se, sf = {};
for (const e of Oz)
  sf[e.name] = e;
const Rz = (e) => {
  if (typeof e == "string") {
    const t = sf[e];
    if (t == null)
      throw Error(`Unknown builtin plugin "${e}" specified.`);
    return {
      name: e,
      params: {},
      fn: t.fn
    };
  }
  if (typeof e == "object" && e != null) {
    if (e.name == null)
      throw Error("Plugin name should be specified");
    let t = e.fn;
    if (t == null) {
      const r = sf[e.name];
      if (r == null)
        throw Error(`Unknown builtin plugin "${e.name}" specified.`);
      t = r.fn;
    }
    return {
      name: e.name,
      params: e.params,
      fn: t
    };
  }
  return null;
}, _z = (e, t) => {
  if (t == null && (t = {}), typeof t != "object")
    throw Error("Config should be an object");
  const r = t.multipass ? 10 : 1;
  let n = Number.POSITIVE_INFINITY, a = "";
  const i = {};
  t.path != null && (i.path = t.path);
  for (let s = 0; s < r; s += 1) {
    i.multipassCount = s;
    const u = Nz(e, t.path), l = t.plugins || ["preset-default"];
    if (!Array.isArray(l))
      throw Error(
        "malformed config, `plugins` property must be an array.\nSee more info here: https://github.com/svg/svgo#configuration"
      );
    const o = l.filter((f) => f != null).map(Rz);
    o.length < l.length && console.warn(
      "Warning: plugins list includes null or undefined elements, these will be ignored."
    );
    const c = {};
    if (t.floatPrecision != null && (c.floatPrecision = t.floatPrecision), Mz(u, i, o, null, c), a = Dz(u, t.js2svg), a.length < n)
      e = a, n = a.length;
    else
      break;
  }
  return t.datauri && (a = Iz(a, t.datauri)), {
    data: a
  };
};
lm.optimize = _z;
const Fz = qy, { optimize: Bz } = lm, qz = (e, t) => {
  if (t == null && (t = {}), typeof t != "object")
    throw Error("Config should be an object");
  return Bz(e, {
    ...t,
    js2svg: {
      // platform specific default for end of line
      eol: Fz.EOL === `\r
` ? "crlf" : "lf",
      ...t.js2svg
    }
  });
};
var Uz = qz;
const Qz = ({ stagedSvgFiles: e = [], inlineSVGSourceDirectory: t = "", rootDirectory: r = "", imageDirectory: n = "" }) => {
  console.log(`stagedSvgFiles >>>>>> ${e} 
 inlineSVGSourceDirectory >>>>>> ${t} 
 rootDirectory >>>>>> ${r} `);
  const a = r ? e.filter((u) => u.includes(r)) : e;
  console.log("STAGED_SVG_FILES_TO_VALIDATE>>>>>", a), a.length || process.exit(0);
  let i = (u) => (u / 1024).toFixed(3), s = (u, l) => (100 - u / l * 100).toFixed(2);
  console.log(
    `\x1B[33mWarning: Your SVG file(s) may have been optimised before committing! Visually validate in UI if everything still looks great before pushing.
To revert the last commit, run 'git reset HEAD~1'\x1B[0m
`
  ), a.forEach((u) => {
    console.log("filepath  >>>", u), Iy(u, "utf8", (l, o) => {
      if (l)
        throw console.log("error", l), l;
      let c = i(Od(u).size), f = t.some((g) => u.includes(g));
      c > 2 && f && (console.error(
        `\x1B[31mError: ${u} is too big for inline SVG. They should be 2 KiB or less.
Consider uploading this to ${n} dir. and using as an SVG image.\x1B[0m`
      ), process.exit(1));
      const d = Uz(o, {
        path: u,
        plugins: [{
          name: "preset-default",
          params: {
            overrides: {
              removeViewBox: !1
            }
          }
        }]
      });
      console.log("result >>>>", d);
      let h = u.slice(u.lastIndexOf("/") + 1);
      Ry(u, d.data);
      let p = i(Od(u).size);
      console.log(
        `Optimised ${h} successfully! 🎉
`,
        `${c} KiB - \x1B[32m${s(p, c)}%\x1B[0m = ${p} KiB
`
      ), _y("git add " + u);
    });
  });
};
export {
  Qz as svgOptimizer
};
