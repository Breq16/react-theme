function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var freeRegularSvgIcons = require('@fortawesome/free-regular-svg-icons');
var freeBrandsSvgIcons = require('@fortawesome/free-brands-svg-icons');
var Highlight = require('prism-react-renderer');
var Highlight__default = _interopDefault(Highlight);
require('normalize.css');

var styles = {"badge":"_Badges-module__badge__2YqXz","badgeIcon":"_Badges-module__badgeIcon__OmwvH","badges":"_Badges-module__badges__Qjjav"};

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

var styles$1 = {"media":"_Slides-module__media__1G3qN","title":"_Slides-module__title__22tKy","slideInner":"_Slides-module__slideInner__K1QHb","slideLink":"_Slides-module__slideLink__1j8iQ","slideOuter":"_Slides-module__slideOuter__2jb_c","slides":"_Slides-module__slides__2Dg4F"};

var styles$2 = {"video":"_Media-module__video__1MhMm","image":"_Media-module__image__TxIhu","tint":"_Media-module__tint__wKEen"};

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

var styles$3 = {"media":"_Tiles-module__media__2BYob","tint":"_Tiles-module__tint__1JcaT","title":"_Tiles-module__title__3tbqJ","cta":"_Tiles-module__cta__1QEs0","dateinfo":"_Tiles-module__dateinfo__eXZtZ","tileInner":"_Tiles-module__tileInner__ND4H_","tileLink":"_Tiles-module__tileLink__20UsT","tileOuter":"_Tiles-module__tileOuter__37b4W","tileContainer":"_Tiles-module__tileContainer__3LY-G"};

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

var styles$4 = {"container":"_Container-module__container__3MUlz"};

function Container(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$4.container,
    style: props.style
  }, props.children);
}

var styles$5 = {"footer":"_Footer-module__footer__19yAG","contactList":"_Footer-module__contactList__2H7C0"};

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

var styles$6 = {"navbarOuter":"_Navbar-module__navbarOuter__1oeE6","navbarInner":"_Navbar-module__navbarInner__3YlKD","navbarToggle":"_Navbar-module__navbarToggle__1hZG2","navbarLinks":"_Navbar-module__navbarLinks__28Q7e","collapsed":"_Navbar-module__collapsed__wWJAB","navbarBrand":"_Navbar-module__navbarBrand__1Es7q","navbarLink":"_Navbar-module__navbarLink__1IqpR","navbarIcon":"_Navbar-module__navbarIcon__3I3Uo"};

function Navbar(props) {
  var _React$useState = React__default.useState(false),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var handleToggle = function handleToggle() {
    return setOpen(!open);
  };

  var links = Object.entries(props.links).map(function (_ref) {
    var name = _ref[0],
        href = _ref[1];
    return /*#__PURE__*/React__default.createElement("a", {
      href: href,
      key: name,
      className: styles$6.navbarLink
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      className: styles$6.navbarIcon,
      icon: freeSolidSvgIcons.faAngleDoubleRight
    }), name);
  });
  var navLinksClassName = styles$6.navbarLinks + " " + (open ? "" : styles$6.collapsed);
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$6.navbarOuter
  }, /*#__PURE__*/React__default.createElement(Container, null, /*#__PURE__*/React__default.createElement("nav", {
    className: styles$6.navbarInner
  }, /*#__PURE__*/React__default.createElement("h1", {
    className: styles$6.navbarBrand
  }, /*#__PURE__*/React__default.createElement("span", null, props.brand), /*#__PURE__*/React__default.createElement("button", {
    className: styles$6.navbarToggle,
    onClick: handleToggle
  }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faHamburger
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: navLinksClassName
  }, links))));
}

function Page(props) {
  var pageStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  };
  return /*#__PURE__*/React__default.createElement("div", {
    style: pageStyle
  }, /*#__PURE__*/React__default.createElement(Navbar, {
    brand: props.brand,
    links: props.links
  }), /*#__PURE__*/React__default.createElement(Container, {
    style: {
      flexGrow: 1
    }
  }, props.children), /*#__PURE__*/React__default.createElement(Footer, {
    author: props.author,
    copyright: props.copyright,
    repo: props.repo,
    contact: props.contact
  }));
}

var styles$7 = {"heading":"_Heading-module__heading__3aFSY"};

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

var styles$8 = {"code":"_Code-module__code__21E6_","codeWrapper":"_Code-module__codeWrapper__1PwDm","copyButton":"_Code-module__copyButton__1ABUI"};

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

var style = {"form":"_Forms-module__form__Fpmov","formGrid":"_Forms-module__formGrid__201dH","label":"_Forms-module__label__1aVFs","input":"_Forms-module__input__3did1","dropdownWrapper":"_Forms-module__dropdownWrapper__19WHW","dropdown":"_Forms-module__dropdown__3dpKe","dropdownIcon":"_Forms-module__dropdownIcon__3nglQ","textArea":"_Forms-module__textArea__H3hRd","button":"_Forms-module__button__2nXpX","buttonGroup":"_Forms-module__buttonGroup__1o9Xo"};

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
    className: style.formGrid
  }, props.children);
}
function Input(props) {
  return /*#__PURE__*/React__default.createElement("input", {
    className: style.input,
    name: props.name,
    type: props.type || "text",
    value: props.value,
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
      value: value
    }, name);
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: style.dropdownWrapper
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
    className: style.button,
    onClick: props.onClick
  }, props.children);
}
function ButtonGroup(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: style.buttonGroup
  }, props.children);
}
function TextArea(props) {
  return /*#__PURE__*/React__default.createElement("textarea", {
    className: style.textArea,
    name: props.name,
    onChange: function onChange(e) {
      return props.onChange(e.target.value);
    }
  }, props.value);
}
function wrapLabel(Component) {
  return function (props) {
    return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("label", {
      className: style.label
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
