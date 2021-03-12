import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faCalendarAlt, faHeart, faHamburger, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Highlight, { defaultProps } from 'prism-react-renderer';
import 'normalize.css';

var styles = {"badge":"_2YqXz","badgeIcon":"_OmwvH","badges":"_Qjjav"};

function Badge(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.badge,
    style: props.style
  }, props.children);
}
function IconBadge(props) {
  return /*#__PURE__*/React.createElement(Badge, {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: props.icon,
    className: styles.badgeIcon
  }), /*#__PURE__*/React.createElement("div", null, props.children));
}
function Badges(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.badges
  }, props.children);
}

var styles$1 = {"media":"_1G3qN","title":"_22tKy","slideInner":"_K1QHb","slideLink":"_1j8iQ","slideOuter":"_2jb_c","slides":"_2Dg4F"};

var styles$2 = {"video":"_1MhMm","image":"_TxIhu","tint":"_wKEen"};

var Video = function Video(props) {
  return /*#__PURE__*/React.createElement("video", {
    className: styles$2.video + " " + (props.className || ""),
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true,
    disablePictureInPicture: true
  }, /*#__PURE__*/React.createElement("source", {
    src: props.src,
    type: "video/webm"
  }));
};

var Image = function Image(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$2.image + " " + (props.className || "")
  }, /*#__PURE__*/React.createElement("img", {
    src: props.src,
    alt: "",
    loading: "lazy"
  }));
};

var Tint = function Tint(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$2.tint,
    style: {
      backgroundColor: props.color
    }
  });
};

function Media(props) {
  if (props.video) {
    return /*#__PURE__*/React.createElement(Video, {
      src: props.video,
      className: props.className
    });
  } else if (props.image) {
    return /*#__PURE__*/React.createElement(Image, {
      src: props.image,
      className: props.className
    });
  } else {
    return /*#__PURE__*/React.createElement(Image, {
      src: "https://breq.keybase.pub/branding/pansexual.png"
    });
  }
}

function Title(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.title
  }, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("p", null, props.subtitle));
}

function Slide(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.slideOuter
  }, /*#__PURE__*/React.createElement("a", {
    href: props.url,
    target: "_blank",
    rel: "noreferrer",
    className: styles$1.slideLink
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$1.slideInner
  }, /*#__PURE__*/React.createElement(Media, {
    className: styles$1.media,
    image: props.image,
    video: props.video
  }), /*#__PURE__*/React.createElement(Tint, {
    color: props.color
  }), /*#__PURE__*/React.createElement(Title, {
    title: props.title,
    subtitle: props.subtitle
  }))));
}
function Slides(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.slides
  }, props.children);
}

var styles$3 = {"media":"_2BYob","tint":"_1JcaT","title":"_3tbqJ","cta":"_1QEs0","dateinfo":"_eXZtZ","tileInner":"_ND4H_","tileLink":"_20UsT","tileOuter":"_37b4W","tileContainer":"_3LY-G"};

function Title$1(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.title
  }, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("p", null, props.subtitle));
}

var Cta = function Cta(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.cta
  }, /*#__PURE__*/React.createElement("span", null, props.cta), "\xA0\xA0", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faAngleDoubleRight
  }));
};

var DateInfo = function DateInfo(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.dateinfo
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faCalendarAlt
  }), "\xA0\xA0", /*#__PURE__*/React.createElement("span", null, props.date));
};

function Tile(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.tileOuter
  }, /*#__PURE__*/React.createElement("a", {
    className: styles$3.tileLink,
    href: props.url
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$3.tileInner
  }, /*#__PURE__*/React.createElement(Media, {
    className: styles$3.media,
    image: props.image,
    video: props.video
  }), /*#__PURE__*/React.createElement(Tint, {
    color: props.color
  }), /*#__PURE__*/React.createElement(Title$1, {
    title: props.title,
    subtitle: props.subtitle
  }), /*#__PURE__*/React.createElement(Cta, {
    cta: "More"
  }), props.date & /*#__PURE__*/React.createElement(DateInfo, {
    date: props.date
  }))));
}
function Tiles(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.tileContainer
  }, props.children);
}

var styles$4 = {"container":"_3MUlz"};

function Container(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$4.container,
    style: props.style
  }, props.children);
}

var styles$5 = {"footer":"_19yAG","contactList":"_2H7C0"};

var ContactLink = function ContactLink(props) {
  return /*#__PURE__*/React.createElement("span", {
    className: styles$5.contactLink
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: props.icon
  }), "\xA0", /*#__PURE__*/React.createElement("a", {
    href: props.link,
    target: "_blank",
    rel: "noreferrer"
  }, props.children));
};

function Footer(props) {
  var contact = props.contact.map(function (link) {
    return /*#__PURE__*/React.createElement("li", {
      key: link.text
    }, /*#__PURE__*/React.createElement(ContactLink, {
      icon: link.icon,
      link: link.link
    }, link.text));
  });
  return /*#__PURE__*/React.createElement("footer", {
    className: styles$5.footer
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "made with ", /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faHeart
  }), " by ", props.author, ",", /*#__PURE__*/React.createElement("span", null, " "), /*#__PURE__*/React.createElement(ContactLink, {
    icon: faCopyright
  }, props.copyright, ","), /*#__PURE__*/React.createElement("span", null, " "), /*#__PURE__*/React.createElement(ContactLink, {
    icon: faGithub,
    link: "https://github.com/" + props.repo
  }, props.repo)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("ul", {
    className: styles$5.contactList
  }, contact), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)));
}

var styles$6 = {"navbarOuter":"_1oeE6","navbarInner":"_3YlKD","navbarToggle":"_1hZG2","navbarLinks":"_28Q7e","collapsed":"_wWJAB","navbarBrand":"_1Es7q","navbarLink":"_1IqpR","navbarIcon":"_3I3Uo"};

function Navbar(props) {
  var _React$useState = React.useState(false),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var handleToggle = function handleToggle() {
    return setOpen(!open);
  };

  var links = Object.entries(props.links).map(function (_ref) {
    var name = _ref[0],
        href = _ref[1];
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      key: name,
      className: styles$6.navbarLink
    }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      className: styles$6.navbarIcon,
      icon: faAngleDoubleRight
    }), name);
  });
  var navLinksClassName = styles$6.navbarLinks + " " + (open ? "" : styles$6.collapsed);
  return /*#__PURE__*/React.createElement("div", {
    className: styles$6.navbarOuter
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("nav", {
    className: styles$6.navbarInner
  }, /*#__PURE__*/React.createElement("h1", {
    className: styles$6.navbarBrand
  }, /*#__PURE__*/React.createElement("span", null, props.brand), /*#__PURE__*/React.createElement("button", {
    className: styles$6.navbarToggle,
    onClick: handleToggle
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faHamburger
  }))), /*#__PURE__*/React.createElement("div", {
    className: navLinksClassName
  }, links))));
}

function Page(props) {
  var pageStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: pageStyle
  }, /*#__PURE__*/React.createElement(Navbar, {
    brand: props.brand,
    links: props.links
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      flexGrow: 1
    }
  }, props.children), /*#__PURE__*/React.createElement(Footer, {
    author: props.author,
    copyright: props.copyright,
    repo: props.repo,
    contact: props.contact
  }));
}

var styles$7 = {"heading":"_3aFSY"};

function Heading(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$7.heading
  }, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("p", null, props.subtitle));
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
  return /*#__PURE__*/React.createElement("div", {
    style: containerStyle
  }, /*#__PURE__*/React.createElement("iframe", {
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
  return /*#__PURE__*/React.createElement("button", {
    className: styles$8.copyButton,
    onClick: props.onClick
  }, "Copy");
}

function Code(props) {
  function handleCopy(e) {
    navigator.clipboard.writeText(props.code);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: styles$8.codeWrapper
  }, /*#__PURE__*/React.createElement(Highlight, _extends({}, defaultProps, {
    code: props.code,
    language: props.language
  }), function (_ref) {
    var className = _ref.className,
        style = _ref.style,
        tokens = _ref.tokens,
        getLineProps = _ref.getLineProps,
        getTokenProps = _ref.getTokenProps;
    return /*#__PURE__*/React.createElement("pre", {
      className: className + " " + styles$8.code,
      style: style
    }, tokens.map(function (line, i) {
      return /*#__PURE__*/React.createElement("div", getLineProps({
        line: line,
        key: i
      }), line.map(function (token, key) {
        return /*#__PURE__*/React.createElement("span", getTokenProps({
          token: token,
          key: key
        }));
      }));
    }));
  }), /*#__PURE__*/React.createElement(CopyButton, {
    onClick: handleCopy
  }));
}

var style = {"form":"_Fpmov","formGrid":"_201dH","label":"_1aVFs","input":"_3did1","dropdownWrapper":"_19WHW","dropdown":"_3dpKe","dropdownIcon":"_3nglQ","textArea":"_H3hRd","button":"_2nXpX","buttonGroup":"_1o9Xo"};

function Form(props) {
  return /*#__PURE__*/React.createElement("form", {
    className: style.form + " " + (props.className || ""),
    style: props.style,
    onSubmit: props.onSubmit || function (e) {
      e.preventDefault();
    },
    onChange: props.onChange || function () {}
  }, props.children);
}
function FormGrid(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: style.formGrid + " " + (props.className || "")
  }, props.children);
}
function Input(props) {
  return /*#__PURE__*/React.createElement("input", {
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
    return /*#__PURE__*/React.createElement("option", {
      value: value
    }, name);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: style.dropdownWrapper + " " + (props.className || ""),
    style: props.style
  }, /*#__PURE__*/React.createElement("select", {
    className: style.dropdown,
    name: props.name,
    value: props.value,
    onChange: function onChange(e) {
      return props.onChange(e.target.value);
    }
  }, options), /*#__PURE__*/React.createElement("div", {
    className: style.dropdownIcon
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faChevronDown
  })));
}
function Button(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: style.button + " " + (props.className || ""),
    style: props.style,
    onClick: props.onClick
  }, props.children);
}
function ButtonGroup(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: style.buttonGroup + " " + (props.className || ""),
    style: props.style
  }, props.children);
}
function TextArea(props) {
  return /*#__PURE__*/React.createElement("textarea", {
    className: style.textArea + " " + (props.className || ""),
    style: props.style,
    name: props.name,
    onChange: function onChange(e) {
      return props.onChange(e.target.value);
    }
  }, props.value);
}
function wrapLabel(Component) {
  return function (props) {
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("label", {
      className: style.label + " " + (props.className || ""),
      style: props.style
    }, props.label), /*#__PURE__*/React.createElement(Component, props));
  };
}
var LabelInput = wrapLabel(Input);
var LabelDropdown = wrapLabel(Dropdown);
var LabelTextArea = wrapLabel(TextArea);

export { Badge, Badges, Button, ButtonGroup, Code, Container, Dropdown, Footer, Form, FormGrid, Heading, IconBadge, Input, LabelDropdown, LabelInput, LabelTextArea, Navbar, Page, Slide, Slides, TextArea, Tile, Tiles, YouTube, wrapLabel };
//# sourceMappingURL=index.modern.js.map
