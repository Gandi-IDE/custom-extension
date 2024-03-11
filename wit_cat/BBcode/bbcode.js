const obj = window || global || {};
let runtime;
// 以下代码来自github  https://github.com/vishnevskiy/bbcodejs
// Generated by CoffeeScript 1.9.1
(function () {
  this.bbcode = {};

  // if ('undefined' !== typeof module) {
  //   module.exports = this.bbcode;
  // }
}.call(obj));
// Generated by CoffeeScript 1.9.1
(function () {
  let _COSMETIC_DICT;
  let _COSMETIC_RE;
  let _ESCAPE_DICT;
  let _ESCAPE_RE;
  let _URL_RE;
  let bbcode;
  let key;
  const { slice } = [];

  _ESCAPE_RE = /[&<>"]/g;

  _ESCAPE_DICT = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
  };

  _URL_RE =
    /\b((?:([\w-]+):(\/{1,3})|www[.])(?:(?:(?:[^\s&()]|&amp;|&quot;)*(?:[^!"#$%&'()*+,.:;<=>?@\[\]^`{|}~\s]))|(?:\((?:[^\s&()]|&amp;|&quot;)*\)))+)/g;

  _COSMETIC_DICT = {
    '--': '&ndash;',
    '---': '&mdash;',
    '...': '&#8230;',
    '(c)': '&copy;',
    '(reg)': '&reg;',
    '(tm)': '&trade;',
  };

  _COSMETIC_RE = new RegExp(
    (function () {
      let results;
      results = [];
      for (key in _COSMETIC_DICT) {
        results.push(key.replace(/(\.|\)|\()/g, '\\$1'));
      }
      return results;
    })().join('|')
  );

  bbcode = this.bbcode;

  this.bbcode.Renderer = (function () {
    function Renderer(options) {
      options = options || {};

      this._contexts = [];
      this.options = {
        linkify: !!options.linkify,
      };
    }

    Renderer.prototype.context = function (context, func) {
      let k;
      let newOptions;
      let ref;
      let v;
      newOptions = {};
      ref = this.options;
      for (k in ref) {
        v = ref[k];
        newOptions[k] = v;
      }
      for (k in context) {
        v = context[k];
        newOptions[k] = v;
      }
      this._contexts.push(this.options);
      this.options = newOptions;
      v = func();
      this.options = this._contexts.pop();
      return v;
    };

    Renderer.prototype.escape = function (value) {
      return value.replace(_ESCAPE_RE, function (match) {
        return _ESCAPE_DICT[match];
      });
    };

    Renderer.prototype.linkify = function (value) {
      return value.replace(_URL_RE, function () {
        let href;
        let match;
        let proto;
        let url;
        match = arguments.length >= 1 ? slice.call(arguments, 0) : [];
        url = match[1];
        proto = match[2];
        if (proto && proto !== 'http' && proto !== 'https') {
          return url;
        }
        href = match[1];
        if (!proto) {
          href = `http://${href}`;
        }
        return `<a href="${href}" target="_blank">${url}</a>`;
      });
    };

    Renderer.prototype.strip = function (text) {
      return text.replace(/^\s+|\s+$/g, '');
    };

    Renderer.prototype.cosmeticReplace = function (value) {
      return value.replace(_COSMETIC_RE, function () {
        let item;
        let match;
        match = arguments.length >= 1 ? slice.call(arguments, 0) : [];
        item = match[0];
        return _COSMETIC_DICT[item] || item;
      });
    };

    Renderer.prototype.htmlAttributes = function (attributes) {
      let k;
      let v;
      if (!attributes) {
        return '';
      }
      return (function () {
        let results;
        results = [];
        for (k in attributes) {
          v = attributes[k];
          results.push(`${k}="${v}"`);
        }
        return results;
      })().join(' ');
    };

    return Renderer;
  })();
}.call(obj));
// Generated by CoffeeScript 1.9.1
(function () {
  let CenterTag;
  let CodeTag;
  let ColorTag;
  let HorizontalRuleTag;
  let ImageTag;
  let LinkTag;
  let EmailTag;
  let FontTag;
  let BGcolorTag;
  let SpolierTag;
  let HideTag;
  let SpriteTag;
  let MeterTag;
  let ListItemTag;
  let ListTag;
  let TableTag;
  let TrTag;
  let TdTag;
  let DIVTag;
  let QuoteTag;
  let RightTag;
  let SizeTag;
  let _LINE_BREAK;
  let _NEWLINE_RE;
  let bbcode;
  const indexOf =
    [].indexOf ||
    function (item) {
      for (let i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
      }
      return -1;
    };
  const extend = function (child, parent) {
    for (const key in parent) {
      if (hasProp.call(parent, key)) child[key] = parent[key];
    }
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  };
  var hasProp = {}.hasOwnProperty;

  _NEWLINE_RE = /\r?\n/g;

  _LINE_BREAK = '<br />';

  bbcode = this.bbcode;

  this.bbcode.Tag = (function () {
    function Tag(renderer, settings) {
      let i;
      let key;
      let len;
      let ref;
      let ref1;
      let value;
      this.renderer = renderer;
      if (settings == null) {
        settings = {};
      }
      this.CLOSED_BY = [];
      this.SELF_CLOSE = false;
      this.STRIP_INNER = false;
      this.STRIP_OUTER = false;
      this.DISCARD_TEXT = false;
      this.name = settings.name || null;
      this.parent = settings.parent || null;
      this.text = settings.text || '';
      if (this.parent) {
        this.parent.children.push(this);
      }
      if (settings.params == null) {
        settings.params = [];
      }
      this.params = {};
      ref = settings.params;
      for (i = 0, len = ref.length; i < len; i++) {
        (ref1 = ref[i]), (key = ref1[0]), (value = ref1[1]);
        if (value) {
          this.params[key] = this.renderer.escape(value);
        }
      }
      this.children = [];
    }

    Tag.prototype.getContent = function (raw) {
      let child;
      let children;
      let content;
      let i;
      let len;
      let pieces;
      let text;
      if (raw == null) {
        raw = false;
      }
      pieces = [];
      if (this.text) {
        text = this.renderer.escape(this.text);
        if (!raw) {
          if (this.renderer.options.linkify) {
            text = this.renderer.linkify(text);
          }
          text = this.renderer.cosmeticReplace(text.replace(_NEWLINE_RE, _LINE_BREAK));
        }
        pieces.push(text);
      }
      children = this.children;
      for (i = 0, len = children.length; i < len; i++) {
        child = children[i];
        if (raw) {
          pieces.push(child.toText());
        } else {
          if (this.DISCARD_TEXT && child.name === null) {
            continue;
          }
          pieces.push(child.toHTML());
        }
      }
      content = pieces.join('');
      if (!raw && this.STRIP_INNER) {
        content = this.renderer.strip(content);
        while (content.slice(0, _LINE_BREAK.length) === _LINE_BREAK) {
          content = content.slice(_LINE_BREAK.length);
        }
        while (content.slice(-_LINE_BREAK.length) === _LINE_BREAK) {
          content = content.slice(0, -_LINE_BREAK.length);
        }
        content = this.renderer.strip(content);
      }
      return content;
    };

    Tag.prototype.toText = function (contentAsHTML) {
      let k;
      let params;
      let pieces;
      let ref;
      let v;
      if (contentAsHTML == null) {
        contentAsHTML = false;
      }
      pieces = [];
      if (this.name !== null) {
        if (this.params.length) {
          params = function () {
            let ref;
            let results;
            ref = this.params;
            results = [];
            for (k in ref) {
              v = ref[k];
              results.push([k, v].join('='));
            }
            return results;
          }
            .call(this)
            .join(' ');
          if (this.name in this.params) {
            pieces.push(`[${params}]`);
          } else {
            pieces.push(`[${this.name} ${params}]`);
          }
        } else {
          pieces.push(`[${this.name}]`);
        }
      }
      pieces.push(this.getContent(!contentAsHTML));
      if (this.name !== null && ((ref = this.name), indexOf.call(this.CLOSED_BY, ref) < 0)) {
        pieces.push(`[/${this.name}]`);
      }
      return pieces.join('');
    };

    Tag.prototype._toHTML = function () {
      return this.toText(true);
    };

    Tag.prototype.toHTML = function () {
      let pieces;
      pieces = this._toHTML();
      if (typeof pieces === 'string') {
        return pieces;
      }
      return pieces.join('');
    };

    return Tag;
  })();

  CodeTag = (function (superClass) {
    extend(CodeTag, superClass);

    function CodeTag() {
      CodeTag.__super__.constructor.apply(this, arguments);
      this.STRIP_INNER = true;
      this._inline = this.params.code === 'inline';
      if (!this._inline) {
        this.STRIP_OUTER = true;
      }
    }

    CodeTag.prototype._toHTML = function () {
      let lang;
      lang = this.params.lang || this.params[this.name];
      if (lang) {
        return [
          `<code><pre class="prettyprint lang-${lang}" style="background: none;">`,
          this.getContent(true),
          '</pre></code>',
        ];
      }
      return ['<code><pre style="background: none;">', this.getContent(true), '</pre></code>'];
    };

    return CodeTag;
  })(this.bbcode.Tag);

  ImageTag = (function (superClass) {
    extend(ImageTag, superClass);

    function ImageTag() {
      return ImageTag.__super__.constructor.apply(this, arguments);
    }

    ImageTag.prototype._toHTML = function () {
      let attributes;
      attributes = {
        src: this.renderer.strip(this.getContent(true)),
      };
      if ('width' in this.params) {
        attributes.width = this.params.width;
      }
      if ('height' in this.params) {
        attributes.height = this.params.height;
      }
      return `<img ${this.renderer.htmlAttributes(attributes)} />`;
    };

    return ImageTag;
  })(this.bbcode.Tag);

  SizeTag = (function (superClass) {
    extend(SizeTag, superClass);

    function SizeTag() {
      return SizeTag.__super__.constructor.apply(this, arguments);
    }

    SizeTag.prototype._toHTML = function () {
      let size;
      size = this.params.size;
      if (isNaN(size)) {
        return this.getContent();
      }
      return [`<span style="font-size:${size}px;">`, this.getContent(), '</span>'];
    };

    return SizeTag;
  })(this.bbcode.Tag);

  ColorTag = (function (superClass) {
    extend(ColorTag, superClass);

    function ColorTag() {
      return ColorTag.__super__.constructor.apply(this, arguments);
    }

    ColorTag.prototype._toHTML = function () {
      let color;
      color = this.params.color;
      if (color != null) {
        return [`<color style="color:${color}">`, this.getContent(), '</color>'];
      }
      return this.getContent();
    };

    return ColorTag;
  })(this.bbcode.Tag);

  CenterTag = (function (superClass) {
    extend(CenterTag, superClass);

    function CenterTag() {
      return CenterTag.__super__.constructor.apply(this, arguments);
    }

    CenterTag.prototype._toHTML = function () {
      return ['<div style="text-align:center;">', this.getContent(), '</div>'];
    };

    return CenterTag;
  })(this.bbcode.Tag);

  RightTag = (function (superClass) {
    extend(RightTag, superClass);

    function RightTag() {
      return RightTag.__super__.constructor.apply(this, arguments);
    }

    RightTag.prototype._toHTML = function () {
      return ['<div style="float:right;">', this.getContent(), '</div>'];
    };

    return RightTag;
  })(this.bbcode.Tag);

  HorizontalRuleTag = (function (superClass) {
    extend(HorizontalRuleTag, superClass);

    function HorizontalRuleTag() {
      HorizontalRuleTag.__super__.constructor.apply(this, arguments);
      this.SELF_CLOSE = true;
      this.STRIP_OUTER = true;
    }

    HorizontalRuleTag.prototype._toHTML = function () {
      return '<hr />';
    };

    return HorizontalRuleTag;
  })(this.bbcode.Tag);

  ListTag = (function (superClass) {
    extend(ListTag, superClass);

    function ListTag() {
      ListTag.__super__.constructor.apply(this, arguments);
      this.STRIP_INNER = true;
      this.STRIP_OUTER = true;
    }

    ListTag.prototype._toHTML = function () {
      let listType;
      listType = this.params.list;
      if (listType === '1') {
        return ['<ol>', this.getContent(), '</ol>'];
      }
      if (listType === 'a') {
        return ['<ol style="list-style-type:lower-alpha;">', this.getContent(), '</ol>'];
      }
      if (listType === 'A') {
        return ['<ol style="list-style-type:upper-alpha;">', this.getContent(), '</ol>'];
      }
      return ['<ul>', this.getContent(), '</ul>'];
    };

    return ListTag;
  })(this.bbcode.Tag);

  ListItemTag = (function (superClass) {
    extend(ListItemTag, superClass);

    function ListItemTag() {
      ListItemTag.__super__.constructor.apply(this, arguments);
      this.CLOSED_BY = ['*', '/list'];
      this.STRIP_INNER = true;
    }

    ListItemTag.prototype._toHTML = function () {
      return ['<li>', this.getContent(), '</li>'];
    };

    return ListItemTag;
  })(this.bbcode.Tag);

  TableTag = (function (superClass) {
    extend(TableTag, superClass);

    function TableTag() {
      TableTag.__super__.constructor.apply(this, arguments);
    }

    TableTag.prototype._toHTML = function () {
      let style = "";
      let attributes = {};
      if ('cellspacing' in this.params) {
        style += "border-spacing:" + this.params.cellspacing + ';';
      }
      if ('bgcolor' in this.params) {
        style += "background:" + this.params.bgcolor + ';';
      }
      if ('bcolor' in this.params) {
        style += "border-color:" + this.params["bcolor"] + ';';
      }
      if ('bwidth' in this.params) {
        style += "border-width:" + this.params["bwidth"] + ';';
      }
      if ('bstyle' in this.params) {
        style += "border-style:" + this.params["bstyle"] + ';';
      }
      return [`<table class="WitCatBBcodeTable" style="${style}" ${this.renderer.htmlAttributes(attributes)}>`, this.getContent(), '</table>'];
    };

    return TableTag;
  })(this.bbcode.Tag);

  TrTag = (function (superClass) {
    extend(TrTag, superClass);

    function TrTag() {
      TrTag.__super__.constructor.apply(this, arguments);
    }

    TrTag.prototype._toHTML = function () {
      return ['<tr>', this.getContent(), '</tr>'];
    };

    return TrTag;
  })(this.bbcode.Tag);

  TdTag = (function (superClass) {
    extend(TdTag, superClass);

    function TdTag() {
      TdTag.__super__.constructor.apply(this, arguments);
    }

    TdTag.prototype._toHTML = function () {
      let style = "";
      let attributes = {};
      if ('rowspan' in this.params) {
        attributes.rowspan = this.params.rowspan;
      }
      if ('colspan' in this.params) {
        attributes.colspan = this.params.colspan;
      }
      if ('bgcolor' in this.params) {
        style += "background:" + this.params.bgcolor + ';';
      }
      if ('bcolor' in this.params) {
        style += "border-color:" + this.params["bcolor"] + ';';
      }
      if ('bwidth' in this.params) {
        style += "border-width:" + this.params["bwidth"] + ';';
      }
      if ('bstyle' in this.params) {
        style += "border-style:" + this.params["bstyle"] + ';';
      }
      return [`<td style="${style}" ${this.renderer.htmlAttributes(attributes)}>`, this.getContent(), '</td>'];
    };

    return TdTag;
  })(this.bbcode.Tag);

  DIVTag = (function (superClass) {
    extend(DIVTag, superClass);

    function DIVTag() {
      DIVTag.__super__.constructor.apply(this, arguments);
    }

    DIVTag.prototype._toHTML = function () {
      let style = this.params["style"];
      return [`<div style="${style}">`, this.getContent(), '</div>'];
    };

    return DIVTag;
  })(this.bbcode.Tag);

  QuoteTag = (function (superClass) {
    extend(QuoteTag, superClass);

    function QuoteTag() {
      QuoteTag.__super__.constructor.apply(this, arguments);
      this.STRIP_INNER = true;
      this.STRIP_OUTER = true;
    }

    QuoteTag.prototype._toHTML = function () {
      let citation;
      let pieces;
      pieces = ['<blockquote>', this.getContent()];
      citation = this.params.quote;
      if (citation) {
        pieces.push('<small>');
        pieces.push(citation);
        pieces.push('</small>');
      }
      pieces.push('</blockquote>');
      return pieces;
    };

    return QuoteTag;
  })(this.bbcode.Tag);

  LinkTag = (function (superClass) {
    extend(LinkTag, superClass);

    function LinkTag() {
      return LinkTag.__super__.constructor.apply(this, arguments);
    }

    LinkTag.prototype._toHTML = function () {
      let url;
      url = this.renderer.strip(this.params[this.name] || this.getContent(true));
      if (/javascript:/i.test(url)) {
        url = '';
      }
      if (url) {
        return this.renderer.context(
          {
            linkify: false,
          },
          (function (_this) {
            return function () {
              return [`<a href="${url}" target="_blank">`, _this.getContent(), '</a>'];
            };
          })(this)
        );
      }
      return this.getContent();
    };

    return LinkTag;
  })(this.bbcode.Tag);

  EmailTag = (function (superClass) {
    extend(EmailTag, superClass);

    function EmailTag() {
      return EmailTag.__super__.constructor.apply(this, arguments);
    }

    EmailTag.prototype._toHTML = function () {
      let url;
      url = this.renderer.strip(this.params[this.name] || this.getContent(true));
      if (/javascript:/i.test(url)) {
        url = '';
      }
      if (url) {
        return this.renderer.context(
          {
            linkify: false,
          },
          (function (_this) {
            return function () {
              return [`<a href="mailto:${url}" target="_blank">`, _this.getContent(), '</a>'];
            };
          })(this)
        );
      }
      return this.getContent();
    };

    return EmailTag;
  })(this.bbcode.Tag);


  FontTag = (function (superClass) {
    extend(FontTag, superClass);

    function FontTag() {
      return FontTag.__super__.constructor.apply(this, arguments);
    }

    FontTag.prototype._toHTML = function () {
      let font;
      font = this.params[this.name];

      if (font) {
        return [`<span style="font-family:${font}">`, this.getContent(), '</span>'];
      }
      return this.getContent();
    };

    return FontTag;
  })(this.bbcode.Tag);

  BGcolorTag = (function (superClass) {
    extend(BGcolorTag, superClass);

    function BGcolorTag() {
      return BGcolorTag.__super__.constructor.apply(this, arguments);
    }

    BGcolorTag.prototype._toHTML = function () {
      let color;
      color = this.params[this.name];

      if (color) {
        return [`<span style="background-color:${color}">`, this.getContent(), '</span>'];
      }
      return this.getContent();
    };

    return BGcolorTag;
  })(this.bbcode.Tag);

  SpolierTag = (function (superClass) {
    extend(SpolierTag, superClass);

    function SpolierTag() {
      return SpolierTag.__super__.constructor.apply(this, arguments);
    }

    SpolierTag.prototype._toHTML = function () {
      return [`<span class="WitCatBBcodeSpolier" ${this.params.id ? `id="WitCatBBcodeSpolier${this.params.id}"` : ""} ${this.params.height ? `style="height:${Number(this.params.height)}px;" height=${Number(this.params.height)}` : ""}>`, this.getContent(), `${this.params.button ? `<button onclick="showText(this);" style="color:${this.params.button};${this.params.bgcolor ? `background-color:${this.params.bgcolor};` : ""}">${window.localStorage.getItem("xigua_scratch_gui_lang") === 'zh-cn' ? "展开" : "more"}</button>` : ""}</span>`];
    };

    return SpolierTag;
  })(this.bbcode.Tag);

  HideTag = (function (superClass) {
    extend(HideTag, superClass);

    function HideTag() {
      return HideTag.__super__.constructor.apply(this, arguments);
    }

    HideTag.prototype._toHTML = function () {
      return [`<span class="WitCatBBcodeHide">`, this.getContent(), `</span>`];
    };

    return HideTag;
  })(this.bbcode.Tag);

  SpriteTag = (function (superClass) {
    extend(SpriteTag, superClass);

    function SpriteTag() {
      this.SELF_CLOSE = true;
      return SpriteTag.__super__.constructor.apply(this, arguments);
    }

    SpriteTag.prototype._toHTML = function () {
      let attributes = {};
      if ('width' in this.params) {
        attributes.width = this.params.width;
      }
      if ('height' in this.params) {
        attributes.height = this.params.height;
      }
      let svgDataUri = null, num = 0;
      if ('num' in this.params) {
        num = this.params.num - 1;
      }
      const targetSprite = runtime.targets.find((v) => { return v.sprite.name === this.params[this.name] });
      /**
       * 将Uint8Array编码的文本转换为string
       * @param {Uint8Array} fileData 需要转换的文件
       * @returns {string} 转换后的文本
       */
      function Uint8ArrayToString(fileData) {
        var dataString = "";
        for (var i = 0; i < fileData.length; i++) {
          dataString += String.fromCharCode(fileData[i]);
        }
        return dataString
      }
      if (targetSprite) {
        const targetCostume = targetSprite.sprite.costumes_[num];
        const costumeURL = Uint8ArrayToString(targetCostume.asset.data);
        attributes.src = 'data:image/svg+xml;base64,' + btoa(costumeURL);
      }
      return [`<img ${this.renderer.htmlAttributes(attributes)}>`, `</span>`];
    };

    return SpriteTag;
  })(this.bbcode.Tag);

  MeterTag = (function (superClass) {
    extend(MeterTag, superClass);

    function MeterTag() {
      this.SELF_CLOSE = true;
      return MeterTag.__super__.constructor.apply(this, arguments);
    }

    MeterTag.prototype._toHTML = function () {
      let style = "", styles = "";
      let attributes = {};
      let attributess = {};
      if ('width' in this.params) {
        style += "width:" + this.params.width + ';';
      }
      if ('height' in this.params) {
        style += "height:" + this.params.height + ';';
      }
      if ('bgcolor' in this.params) {
        style += "background:" + this.params.bgcolor + ';';
      }
      if ('color' in this.params) {
        styles += "background:" + this.params.color + ';';
      }
      if ('id' in this.params) {
        attributess.id = `WitCatBBcodeMeter${this.params.id}`;
      }
      styles += `width:${this.params[this.name]}%;`;
      attributes.style = style;
      attributess.style = styles;

      return [`<div class="WitCatBBcodeg-container" ${this.renderer.htmlAttributes(attributes)}>`, `<div class="WitCatBBcodeg-progress" ${this.renderer.htmlAttributes(attributess)}></div > `, `</div > `];
    };

    return MeterTag;
  })(this.bbcode.Tag);

  this.bbcode.createSimpleTag = (function (_this) {
    return function (name, attributes) {
      let SimpleTag;
      return (SimpleTag = (function (superClass) {
        extend(SimpleTag, superClass);

        function SimpleTag() {
          let k;
          let v;
          SimpleTag.__super__.constructor.apply(this, arguments);
          for (k in attributes) {
            v = attributes[k];
            this[k] = v;
          }
        }

        SimpleTag.prototype._toHTML = function () {
          let htmlAttributes;
          htmlAttributes = this.renderer.htmlAttributes(this.params);
          if (htmlAttributes) {
            htmlAttributes = ` ${htmlAttributes}`;
          }
          return [`<${name}${htmlAttributes}>`, this.getContent(), `</${name}>`];
        };

        return SimpleTag;
      })(_this.bbcode.Tag));
    };
  })(this);

  this.bbcode.BUILTIN = {
    b: this.bbcode.createSimpleTag('strong'),
    i: this.bbcode.createSimpleTag('em'),
    u: this.bbcode.createSimpleTag('u'),
    s: this.bbcode.createSimpleTag('strike'),
    h1: this.bbcode.createSimpleTag('h1', {
      STRIP_OUTER: true,
    }),
    h2: this.bbcode.createSimpleTag('h2', {
      STRIP_OUTER: true,
    }),
    h3: this.bbcode.createSimpleTag('h3', {
      STRIP_OUTER: true,
    }),
    h4: this.bbcode.createSimpleTag('h4', {
      STRIP_OUTER: true,
    }),
    h5: this.bbcode.createSimpleTag('h5', {
      STRIP_OUTER: true,
    }),
    h6: this.bbcode.createSimpleTag('h6', {
      STRIP_OUTER: true,
    }),
    pre: this.bbcode.createSimpleTag('pre'),
    table: this.bbcode.createSimpleTag('table', {
      DISCARD_TEXT: true,
    }),
    thead: this.bbcode.createSimpleTag('thead', {
      DISCARD_TEXT: true,
    }),
    tbody: this.bbcode.createSimpleTag('tbody', {
      DISCARD_TEXT: true,
    }),
    tr: this.bbcode.createSimpleTag('tr', {
      DISCARD_TEXT: true,
    }),
    th: this.bbcode.createSimpleTag('th'),
    td: this.bbcode.createSimpleTag('td'),
    code: CodeTag,
    img: ImageTag,
    hr: HorizontalRuleTag,
    size: SizeTag,
    center: CenterTag,
    right: RightTag,
    color: ColorTag,
    list: ListTag,
    '*': ListItemTag,
    quote: QuoteTag,
    url: LinkTag,
    link: LinkTag,
    email: EmailTag,
    font: FontTag,
    bgcolor: BGcolorTag,
    spolier: SpolierTag,
    hide: HideTag,
    sprite: SpriteTag,
    meter: MeterTag,
    table: TableTag,
    tr: TrTag,
    td: TdTag,
    div: DIVTag,
  };
}.call(obj));
// Generated by CoffeeScript 1.9.1
(function () {
  let _SPACE_RE;
  let _START_NEWLINE_RE;
  let _TOKEN_RE;
  let bbcode;
  const indexOf =
    [].indexOf ||
    function (item) {
      for (let i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
      }
      return -1;
    };

  _SPACE_RE = /^\s*$/;

  _TOKEN_RE = /(\[\/?.+?\])/;

  _START_NEWLINE_RE = /^\r?\n/;

  bbcode = this.bbcode;

  this.bbcode.Parser = (function () {
    function Parser(allowedTags) {
      let i;
      let len;
      let name;
      let ref;
      let tag;
      if (allowedTags == null) {
        allowedTags = null;
      }
      this.tags = {};
      if (!allowedTags) {
        ref = bbcode.BUILTIN;
        for (name in ref) {
          tag = ref[name];
          this.registerTag(name, tag);
        }
      } else {
        for (i = 0, len = allowedTags.length; i < len; i++) {
          name = allowedTags[i];
          if (indexOf.call(bbcode.BUILTIN, name) >= 0) {
            this.registerTag(name, bbcode.BUILTIN[name]);
          }
        }
      }
      this.renderer = new bbcode.Renderer();
    }

    Parser.prototype.registerTag = function (name, tag) {
      return (this.tags[name] = tag);
    };

    Parser.prototype._parseParams = function (token) {
      let c;
      let i;
      let key;
      let len;
      let params;
      let skipNext;
      let target;
      let terminate;
      let value;
      params = [];
      if (token) {
        target = key = [];
        value = [];
        terminate = ' ';
        skipNext = false;
        for (i = 0, len = token.length; i < len; i++) {
          c = token[i];
          if (skipNext) {
            skipNext = false;
          } else if (target === key && c === '=') {
            target = value;
          } else if (target === key && c === ':') {
            target = value;
          } else if (!value.length && c === '"') {
            terminate = c;
          } else if (c !== terminate) {
            target.push(c);
          } else {
            params.push([key.join('').toLowerCase(), value.join('')]);
            if (!_SPACE_RE.test(terminate)) {
              skipNext = true;
            }
            target = key = [];
            value = [];
            terminate = ' ';
          }
        }
        params.push([key.join('').toLowerCase(), value.join('')]);
      }
      return params;
    };

    Parser.prototype._createTextNode = function (parent, text) {
      let ref;
      if ((ref = parent.children.slice(-1)[0]) != null ? ref.STRIP_OUTER : void 0) {
        text = text.replace(_START_NEWLINE_RE, '');
      }
      return new bbcode.Tag(this.renderer, {
        text,
        parent,
      });
    };

    Parser.prototype.parse = function (input) {
      let cls;
      let current;
      let params;
      let root;
      let tag;
      let tagName;
      let token;
      let tokens;
      current = root = new bbcode.Tag(this.renderer);
      tokens = input.split(_TOKEN_RE);
      let tagNumber = 0;
      let lastTag = null;
      while (tokens.length && tagNumber < 100) {
        tagNumber++;
        token = tokens.shift();
        if (token.match(_TOKEN_RE)) {
          params = this._parseParams(token.slice(1, -1));
          tagName = params[0][0];
          if (indexOf.call(current.CLOSED_BY, tagName) >= 0) {
            tokens.unshift(token);
            tagName = `/${current.name}`;
            params = [];
          }
          if (tagName[0] === '/') {
            tagName = tagName.slice(1);
            if (!(tagName in this.tags)) {
              this._createTextNode(current, token);
              continue;
            }
            if (current.name === tagName) {
              current = current.parent;
            }
          } else {
            cls = this.tags[tagName];
            if (!cls) {
              this._createTextNode(current, token);
              continue;
            }
            tag = new cls(this.renderer, {
              name: tagName,
              parent: current,
              params,
            });
            if (!tag.SELF_CLOSE && (indexOf.call(tag.CLOSED_BY, tagName) < 0 || current.name !== tagName)) {
              current = tag;
            }
          }
        } else {
          this._createTextNode(current, token);
        }
      }
      return root;
    };

    Parser.prototype.toHTML = function (input, runtimes) {
      let html;
      runtime = runtimes;
      return (html = this.parse(input).toHTML());
    };

    return Parser;
  })();
}.call(obj));
// Generated by CoffeeScript 1.9.1
(function () {
  let MARKUP;
  let bbcode;

  bbcode = this.bbcode;

  MARKUP = {
    bold: {
      keyCode: 66,
      title: 'Bold (Ctrl+B)',
      placeholder: 'bold text',
      open: '[b]',
      close: '[/b]',
    },
    italic: {
      keyCode: 73,
      title: 'Italic (Ctrl+I)',
      placeholder: 'italic text',
      open: '[i]',
      close: '[/i]',
    },
    center: {
      keyCode: 69,
      title: 'Center (Ctrl+E)',
      placeholder: 'center text',
      open: '[center]',
      close: '[/center]',
    },
    hyperlink: {
      keyCode: 76,
      title: 'Hyperlink (Ctrl+L)',
      placeholder: 'link text',
      open() {
        let url;
        url = prompt('Please enter the URL of your link', 'http://') || 'link url';
        return `[url=${url}]`;
      },
      close: '[/url]',
    },
    blockquote: {
      keyCode: 190,
      title: 'Blockquote (Ctrl+.)',
      placeholder: 'blockquote',
      open: '[quote]',
      close: '[/quote]',
    },
    code: {
      keyCode: 76,
      title: 'Code (Ctrl+K)',
      placeholder: 'print("code sample");',
      open: '[code]',
      close: '[/code]',
    },
    image: {
      keyCode: 71,
      placeholder: 'image url',
      open: '[img]',
      close: '[/img]',
    },
    nlist: {
      keyCode: 79,
      title: 'Numbered List (Ctrl+O)',
      placeholder: 'list item',
      open(value) {
        let close;
        let open;
        let ref;
        let ref1;
        open = ((ref = value.match(/\[list=1\]/g)) != null ? ref.length : void 0) || 0;
        close = ((ref1 = value.match(/\[\/list\]/g)) != null ? ref1.length : void 0) || 0;
        if (open === close) {
          return '[list=1]\n\t[*]';
        }
        return '\t[*]';
      },
      close(value) {
        let close;
        let open;
        let ref;
        let ref1;
        open = ((ref = value.match(/\[list=1\]/g)) != null ? ref.length : void 0) || 0;
        close = ((ref1 = value.match(/\[\/list\]/g)) != null ? ref1.length : void 0) || 0;
        if (open === close) {
          return '\n[/list]';
        }
      },
    },
    list: {
      keyCode: 85,
      title: 'Bulleted List (Ctrl+O)',
      placeholder: 'list item',
      open(value) {
        let close;
        let open;
        let ref;
        let ref1;
        open = ((ref = value.match(/\[list\]/g)) != null ? ref.length : void 0) || 0;
        close = ((ref1 = value.match(/\[\/list\]/g)) != null ? ref1.length : void 0) || 0;
        if (open === close) {
          return '[list]\n\t[*]';
        }
        return '\t[*]';
      },
      close(value) {
        let close;
        let open;
        let ref;
        let ref1;
        open = ((ref = value.match(/\[list\]/g)) != null ? ref.length : void 0) || 0;
        close = ((ref1 = value.match(/\[\/list\]/g)) != null ? ref1.length : void 0) || 0;
        if (open === close) {
          return '\n[/list]';
        }
      },
    },
    heading: {
      keyCode: 72,
      title: 'Heading (Ctrl+H)',
      placeholder: 'heading',
      open: '[h3]',
      close: '[/h3]',
      before: /\n$/,
      after: /^\n/,
    },
    hrule: {
      keyCode: 82,
      title: 'Hprizontal Rule (Ctrl+R)',
      open: '[hr]\n',
      before: /\n\n$/,
      after: /^\n\n/,
    },
  };

  this.bbcode.Editor = (function () {
    function Editor(textarea, markup) {
      this.markup = markup != null ? markup : MARKUP;
      this.$ = $(textarea);
      this.textarea = this.$[0];
      this.$.on(
        'keydown',
        (function (_this) {
          return function (e) {
            let end;
            let i;
            let len;
            let length;
            let line;
            let lines;
            let offset;
            let ref;
            let ref1;
            let ref2;
            let ref3;
            let selection;
            let start;
            let tab;
            if (e.which === 9) {
              selection = _this.getSelection();
              offset = 0;
              if (selection.start === selection.end && !e.shiftKey) {
                offset++;
                selection.value[1] = `\t${selection.value[1]}`;
                _this.setValue(selection.value.join(''));
              } else {
                length = 0;
                tab = false;
                lines = [];
                ref = _this.textarea.value.split('\n');
                for (i = 0, len = ref.length; i < len; i++) {
                  line = ref[i];
                  (ref1 = [length, (length += line.length + 1)]), (start = ref1[0]), (end = ref1[1]);
                  if (!tab && start <= (ref2 = selection.start) && ref2 < end) {
                    tab = true;
                  }
                  if (tab) {
                    if (e.shiftKey) {
                      if (line[0] === '\t') {
                        line = line.slice(1);
                        offset--;
                      }
                    } else {
                      line = `\t${line}`;
                      offset++;
                    }
                    tab = !(start <= (ref3 = selection.end) && ref3 <= end);
                  }
                  lines.push(line);
                }
                _this.setValue(lines.join('\n'));
              }
              if (offset > 0) {
                selection.start++;
              } else if (offset < 0) {
                selection.start--;
              }
              _this.select(selection.start, selection.end + offset);
            } else if (!e.ctrlKey || e.altKey || _this.getRule(e.which) == null) {
              return true;
            } else {
              _this.replace(e.which);
            }
            return false;
          };
        })(this)
      );
    }

    Editor.prototype._escapeRe = function (pattern) {
      let escaped;
      let special;
      special = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '^', '$'];
      escaped = pattern.replace(new RegExp(`(\\${special.join('|\\')})`, 'g'), '\\$1');
      return new RegExp(`^${escaped.replace(/\d+/, '\\d+')}$`);
    };

    Editor.prototype.getRule = function (keyCode) {
      let key;
      let ref;
      let rule;
      ref = this.markup;
      for (key in ref) {
        rule = ref[key];
        if (rule.keyCode === keyCode) {
          return rule;
        }
      }
    };

    Editor.prototype.replace = function (keyCode, value, text) {
      let close;
      let open;
      let replacement;
      let rule;
      let selection;
      let start;
      this.$.focus();
      selection = this.getSelection();
      rule = this.getRule(keyCode);
      value = this.textarea.value;
      open = (typeof rule.open === 'function' ? rule.open(selection.value[0]) : rule.open) || '';
      close = (typeof rule.close === 'function' ? rule.close(selection.value[2]) : rule.close) || '';
      if (
        this._escapeRe(open).test(value.slice(selection.start - open.length, selection.start)) &&
        this._escapeRe(close).test(value.slice(selection.end, selection.end + close.length))
      ) {
        start = selection.start - open.length;
        this.setValue(
          value.substr(0, start) + selection.value[1] + value.substr(selection.end + close.length, value.length)
        );
        return this.select(start, start + selection.value[1].length);
      }
      replacement = open + (text || selection.value[1] || rule.placeholder || '') + close;
      if (rule.before != null && !rule.before.test(selection.value[0])) {
        replacement = `\n\n${replacement}`;
        selection.start += 2;
      }
      if (rule.after != null && !rule.after.test(selection.value[2])) {
        replacement += '\n\n';
        selection.end += 2;
      }
      this.setValue(selection.value[0] + replacement + selection.value[2]);
      return this.select(selection.start + open.length, selection.start + replacement.length - close.length);
    };

    Editor.prototype.setValue = function (value) {
      let position;
      position = this.$.scrollTop();
      this.$.val(value);
      return this.$.scrollTop(position);
    };

    Editor.prototype.select = function (start, end) {
      let range;
      let ref;
      if (((ref = document.selection) != null ? ref.createRange : void 0) != null) {
        range = this.textarea.createTextRange();
        range.collapse(true);
        range.moveStart('character', start);
        range.moveEnd('character', end - start);
        return range.select();
      }
      this.textarea.selectionStart = start;
      return (this.textarea.selectionEnd = end);
    };

    Editor.prototype.getSelection = function () {
      let close;
      let end;
      let open;
      let range;
      let ref;
      let selection;
      let start;
      let storedRange;
      let value;
      value = this.textarea.value;
      if (((ref = document.selection) != null ? ref.createRange : void 0) != null) {
        selection = document.selection;
        if (!/testarea/i.test(this.textarea.tagName)) {
          range = selection.createRange().duplicate();
          range.moveEnd('character', value.length);
          start = range.text === '' ? value.length : value.lastIndexOf(range.text);
          range = selection.createRange().duplicate();
          range.moveStart('character', -value.length);
          end = range.text.length + 1;
        } else {
          range = selection.createRange();
          storedRange = range.duplicate();
          storedRange.moveToElementText(this.textarea);
          storedRange.setEndPoint('EndToEnd', range);
          start = storedRange.text.length - range.text.length;
          end = start + range.text.length;
        }
      } else {
        start = this.textarea.selectionStart;
        end = this.textarea.selectionEnd;
      }
      open = value.substring(0, start);
      close = value.substring(end, value.length);
      return (selection = {
        start,
        end,
        value: [open, value.substring(start, end), close],
      });
    };

    return Editor;
  })();
}.call(obj));

const { bbcode } = obj;
export default bbcode;
