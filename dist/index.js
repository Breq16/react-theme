function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var freeRegularSvgIcons = require('@fortawesome/free-regular-svg-icons');
var freeBrandsSvgIcons = require('@fortawesome/free-brands-svg-icons');
var Highlight = require('prism-react-renderer');
var Highlight__default = _interopDefault(Highlight);

var styles = {"badge":"_2YqXz","badgeIcon":"_OmwvH","badges":"_Qjjav"};

function Badge(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.badge,
    style: props.style
  }, props.children);
}
function IconBadge(props) {
  return /*#__PURE__*/React__default.createElement(Badge, {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: props.icon,
    className: styles.badgeIcon
  }), /*#__PURE__*/React__default.createElement("div", null, props.children));
}
function Badges(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.badges
  }, props.children);
}

var styles$1 = {"media":"_1G3qN","title":"_22tKy","slideInner":"_K1QHb","slideLink":"_1j8iQ","slideOuter":"_2jb_c","slides":"_2Dg4F"};

var styles$2 = {"video":"_1MhMm","image":"_TxIhu","tint":"_wKEen"};

var Video = function Video(props) {
  return /*#__PURE__*/React__default.createElement("video", {
    className: styles$2.video + " " + (props.className || ""),
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true,
    disablePictureInPicture: true
  }, /*#__PURE__*/React__default.createElement("source", {
    src: props.src,
    type: "video/webm"
  }));
};

var Image = function Image(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.image + " " + (props.className || "")
  }, /*#__PURE__*/React__default.createElement("img", {
    src: props.src,
    alt: "",
    loading: "lazy"
  }));
};

var Tint = function Tint(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.tint,
    style: {
      backgroundColor: props.color
    }
  });
};

function Media(props) {
  if (props.video) {
    return /*#__PURE__*/React__default.createElement(Video, {
      src: props.video,
      className: props.className
    });
  } else if (props.image) {
    return /*#__PURE__*/React__default.createElement(Image, {
      src: props.image,
      className: props.className
    });
  } else {
    return /*#__PURE__*/React__default.createElement(Image, {
      src: "https://breq.keybase.pub/branding/pansexual.png"
    });
  }
}

function Title(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.title
  }, /*#__PURE__*/React__default.createElement("h1", null, props.title), /*#__PURE__*/React__default.createElement("p", null, props.subtitle));
}

function Slide(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.slideOuter
  }, /*#__PURE__*/React__default.createElement("a", {
    href: props.url,
    target: "_blank",
    rel: "noreferrer",
    className: styles$1.slideLink
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.slideInner
  }, /*#__PURE__*/React__default.createElement(Media, {
    className: styles$1.media,
    image: props.image,
    video: props.video
  }), /*#__PURE__*/React__default.createElement(Tint, {
    color: props.color
  }), /*#__PURE__*/React__default.createElement(Title, {
    title: props.title,
    subtitle: props.subtitle
  }))));
}
function Slides(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.slides
  }, props.children);
}

var styles$3 = {"media":"_2BYob","tint":"_1JcaT","title":"_3tbqJ","cta":"_1QEs0","dateinfo":"_eXZtZ","tileInner":"_ND4H_","tileLink":"_20UsT","tileOuter":"_37b4W","tileContainer":"_3LY-G"};

function Title$1(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$3.title
  }, /*#__PURE__*/React__default.createElement("h1", null, props.title), /*#__PURE__*/React__default.createElement("p", null, props.subtitle));
}

var Cta = function Cta(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$3.cta
  }, /*#__PURE__*/React__default.createElement("span", null, props.cta), "\xA0\xA0", /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faAngleDoubleRight
  }));
};

var DateInfo = function DateInfo(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$3.dateinfo
  }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faCalendarAlt
  }), "\xA0\xA0", /*#__PURE__*/React__default.createElement("span", null, props.date));
};

function Tile(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$3.tileOuter
  }, /*#__PURE__*/React__default.createElement("a", {
    className: styles$3.tileLink,
    href: props.url
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$3.tileInner
  }, /*#__PURE__*/React__default.createElement(Media, {
    className: styles$3.media,
    image: props.image,
    video: props.video
  }), /*#__PURE__*/React__default.createElement(Tint, {
    color: props.color
  }), /*#__PURE__*/React__default.createElement(Title$1, {
    title: props.title,
    subtitle: props.subtitle
  }), /*#__PURE__*/React__default.createElement(Cta, {
    cta: "More"
  }), props.date & /*#__PURE__*/React__default.createElement(DateInfo, {
    date: props.date
  }))));
}
function Tiles(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$3.tileContainer
  }, props.children);
}

var styles$4 = {"container":"_3MUlz"};

function Container(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$4.container,
    style: props.style
  }, props.children);
}

var styles$5 = {"footer":"_19yAG","contactList":"_2H7C0"};

var ContactLink = function ContactLink(props) {
  return /*#__PURE__*/React__default.createElement("span", {
    className: styles$5.contactLink
  }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: props.icon
  }), "\xA0", /*#__PURE__*/React__default.createElement("a", {
    href: props.link,
    target: "_blank",
    rel: "noreferrer"
  }, props.children));
};

function Footer(props) {
  var contact = props.contact.map(function (link) {
    return /*#__PURE__*/React__default.createElement("li", {
      key: link.text
    }, /*#__PURE__*/React__default.createElement(ContactLink, {
      icon: link.icon,
      link: link.link
    }, link.text));
  });
  return /*#__PURE__*/React__default.createElement("footer", {
    className: styles$5.footer
  }, /*#__PURE__*/React__default.createElement(Container, null, /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("p", null, "made with ", /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faHeart
  }), " by ", props.author, ",", /*#__PURE__*/React__default.createElement("span", null, " "), /*#__PURE__*/React__default.createElement(ContactLink, {
    icon: freeRegularSvgIcons.faCopyright
  }, props.copyright, ","), /*#__PURE__*/React__default.createElement("span", null, " "), /*#__PURE__*/React__default.createElement(ContactLink, {
    icon: freeBrandsSvgIcons.faGithub,
    link: "https://github.com/" + props.repo
  }, props.repo)), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("ul", {
    className: styles$5.contactList
  }, contact), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null)));
}

var styles$6 = {"navbarOuter":"_1oeE6","navbarInner":"_3YlKD","navbarToggle":"_1hZG2","navbarLinks":"_28Q7e","collapsed":"_wWJAB","navbarBrand":"_1Es7q","navbarBrandLink":"_ByDvI","navbarLink":"_1IqpR","navbarIcon":"_3I3Uo"};

var LinkIcon = function LinkIcon(props) {
  return /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    className: styles$6.navbarIcon,
    icon: freeSolidSvgIcons.faAngleDoubleRight
  });
};

function DefaultLinks(props) {
  var links = props.links.map(function (_ref) {
    var name = _ref.name,
        href = _ref.href;
    return /*#__PURE__*/React__default.createElement("a", {
      href: href,
      key: name,
      className: styles$6.navbarLink
    }, /*#__PURE__*/React__default.createElement(LinkIcon, null), name);
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: props.className
  }, links);
}

function CustomLinks(props) {
  var Link = props.component;
  var links = props.links.map(function (_ref2) {
    var name = _ref2.name,
        href = _ref2.href;
    return /*#__PURE__*/React__default.createElement(Link, {
      href: href,
      key: name
    }, /*#__PURE__*/React__default.createElement("a", {
      className: styles$6.navbarLink
    }, /*#__PURE__*/React__default.createElement(LinkIcon, null), name));
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: props.className
  }, links);
}

function Navbar(props) {
  var _React$useState = React__default.useState(false),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var handleToggle = function handleToggle() {
    return setOpen(!open);
  };

  var navLinksClassName = styles$6.navbarLinks + " " + (open ? "" : styles$6.collapsed);
  var links, brand;

  if (props.component) {
    var Link = props.component;
    links = /*#__PURE__*/React__default.createElement(CustomLinks, {
      className: navLinksClassName,
      component: Link,
      links: props.links
    });
    brand = /*#__PURE__*/React__default.createElement(Link, {
      href: "/"
    }, /*#__PURE__*/React__default.createElement("a", {
      className: styles$6.navbarBrandLink
    }, props.brand));
  } else {
    links = /*#__PURE__*/React__default.createElement(DefaultLinks, {
      className: navLinksClassName,
      links: props.links
    });
    brand = /*#__PURE__*/React__default.createElement("a", {
      href: "/",
      className: styles$6.navbarBrandLink
    }, props.brand);
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$6.navbarOuter
  }, /*#__PURE__*/React__default.createElement(Container, null, /*#__PURE__*/React__default.createElement("nav", {
    className: styles$6.navbarInner
  }, /*#__PURE__*/React__default.createElement("h1", {
    className: styles$6.navbarBrand
  }, brand, /*#__PURE__*/React__default.createElement("button", {
    className: styles$6.navbarToggle,
    onClick: handleToggle
  }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faHamburger
  }))), links)));
}

function Page(props) {
  var pageStyle = {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column"
  };
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React__default.createElement(Navbar, {
    brand: props.brand,
    component: props.linkComponent,
    links: props.links
  }), /*#__PURE__*/React__default.createElement("div", {
    style: pageStyle
  }, /*#__PURE__*/React__default.createElement(Container, {
    style: {
      flexGrow: 1
    }
  }, props.children), /*#__PURE__*/React__default.createElement(Footer, {
    author: props.author,
    copyright: props.copyright,
    repo: props.repo,
    contact: props.contact
  })));
}

var styles$7 = {"heading":"_3aFSY"};

function Heading(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$7.heading
  }, /*#__PURE__*/React__default.createElement("h1", null, props.title), /*#__PURE__*/React__default.createElement("p", null, props.subtitle));
}

function YouTube(props) {
  var containerStyle = {
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: "25px",
    height: 0,
    marginBottom: "20px"
  };
  var iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  };
  return /*#__PURE__*/React__default.createElement("div", {
    style: containerStyle
  }, /*#__PURE__*/React__default.createElement("iframe", {
    style: iframeStyle,
    src: "https://www.youtube.com/embed/" + props.id + "?rel=0",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }));
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var styles$8 = {"code":"_21E6_","codeWrapper":"_1PwDm","copyButton":"_1ABUI"};

function CopyButton(props) {
  return /*#__PURE__*/React__default.createElement("button", {
    className: styles$8.copyButton,
    onClick: props.onClick
  }, "Copy");
}

function Code(props) {
  function handleCopy(e) {
    navigator.clipboard.writeText(props.code);
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$8.codeWrapper
  }, /*#__PURE__*/React__default.createElement(Highlight__default, _extends({}, Highlight.defaultProps, {
    code: props.code,
    language: props.language
  }), function (_ref) {
    var className = _ref.className,
        style = _ref.style,
        tokens = _ref.tokens,
        getLineProps = _ref.getLineProps,
        getTokenProps = _ref.getTokenProps;
    return /*#__PURE__*/React__default.createElement("pre", {
      className: className + " " + styles$8.code,
      style: style
    }, tokens.map(function (line, i) {
      return /*#__PURE__*/React__default.createElement("div", getLineProps({
        line: line,
        key: i
      }), line.map(function (token, key) {
        return /*#__PURE__*/React__default.createElement("span", getTokenProps({
          token: token,
          key: key
        }));
      }));
    }));
  }), /*#__PURE__*/React__default.createElement(CopyButton, {
    onClick: handleCopy
  }));
}

var style = {"form":"_Fpmov","formGrid":"_201dH","label":"_1aVFs","input":"_3did1","dropdownWrapper":"_19WHW","dropdown":"_3dpKe","dropdownIcon":"_3nglQ","textArea":"_H3hRd","button":"_2nXpX","buttonGroup":"_1o9Xo"};

function Form(props) {
  return /*#__PURE__*/React__default.createElement("form", {
    className: style.form + " " + (props.className || ""),
    style: props.style,
    onSubmit: props.onSubmit || function (e) {
      e.preventDefault();
    },
    onChange: props.onChange || function () {}
  }, props.children);
}
function FormGrid(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: style.formGrid + " " + (props.className || "")
  }, props.children);
}
function Input(props) {
  return /*#__PURE__*/React__default.createElement("input", {
    className: style.input + " " + (props.className || ""),
    style: props.style,
    name: props.name,
    type: props.type || "text",
    value: props.value,
    disabled: props.disabled,
    onChange: function onChange(e) {
      return props.onChange(e.target.value);
    }
  });
}
function Dropdown(props) {
  var options = Object.entries(props.options).map(function (_ref) {
    var value = _ref[0],
        name = _ref[1];
    return /*#__PURE__*/React__default.createElement("option", {
      value: value,
      key: value
    }, name);
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: style.dropdownWrapper + " " + (props.className || ""),
    style: props.style
  }, /*#__PURE__*/React__default.createElement("select", {
    className: style.dropdown,
    name: props.name,
    value: props.value,
    onChange: function onChange(e) {
      return props.onChange(e.target.value);
    }
  }, options), /*#__PURE__*/React__default.createElement("div", {
    className: style.dropdownIcon
  }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faChevronDown
  })));
}
function Button(props) {
  return /*#__PURE__*/React__default.createElement("button", {
    className: style.button + " " + (props.className || ""),
    style: props.style,
    onClick: props.onClick
  }, props.children);
}
function ButtonGroup(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: style.buttonGroup + " " + (props.className || ""),
    style: props.style
  }, props.children);
}
function TextArea(props) {
  return /*#__PURE__*/React__default.createElement("textarea", {
    className: style.textArea + " " + (props.className || ""),
    style: props.style,
    name: props.name,
    onChange: function onChange(e) {
      return props.onChange(e.target.value);
    },
    value: props.value
  });
}
function wrapLabel(Component) {
  return function (props) {
    return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("label", {
      className: style.label + " " + (props.className || ""),
      style: props.style
    }, props.label), /*#__PURE__*/React__default.createElement(Component, props));
  };
}
var LabelInput = wrapLabel(Input);
var LabelDropdown = wrapLabel(Dropdown);
var LabelTextArea = wrapLabel(TextArea);

exports.Badge = Badge;
exports.Badges = Badges;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Code = Code;
exports.Container = Container;
exports.Dropdown = Dropdown;
exports.Footer = Footer;
exports.Form = Form;
exports.FormGrid = FormGrid;
exports.Heading = Heading;
exports.IconBadge = IconBadge;
exports.Input = Input;
exports.LabelDropdown = LabelDropdown;
exports.LabelInput = LabelInput;
exports.LabelTextArea = LabelTextArea;
exports.Navbar = Navbar;
exports.Page = Page;
exports.Slide = Slide;
exports.Slides = Slides;
exports.TextArea = TextArea;
exports.Tile = Tile;
exports.Tiles = Tiles;
exports.YouTube = YouTube;
exports.wrapLabel = wrapLabel;
//# sourceMappingURL=index.js.map
