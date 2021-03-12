function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactFontawesome = require('@fortawesome/react-fontawesome');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var freeRegularSvgIcons = require('@fortawesome/free-regular-svg-icons');
var freeBrandsSvgIcons = require('@fortawesome/free-brands-svg-icons');
require('normalize.css');

var styles = {"badge":"_Badges-module__badge__2YqXz","badgeIcon":"_Badges-module__badgeIcon__OmwvH","badges":"_Badges-module__badges__Qjjav"};

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
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: props.icon,
    className: styles.badgeIcon
  }), /*#__PURE__*/React.createElement("div", null, props.children));
}
function Badges(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.badges
  }, props.children);
}

var styles$1 = {"media":"_Slides-module__media__1G3qN","title":"_Slides-module__title__22tKy","slideInner":"_Slides-module__slideInner__K1QHb","slideLink":"_Slides-module__slideLink__1j8iQ","slideOuter":"_Slides-module__slideOuter__2jb_c","slides":"_Slides-module__slides__2Dg4F"};

var styles$2 = {"video":"_Media-module__video__1MhMm","image":"_Media-module__image__TxIhu","tint":"_Media-module__tint__wKEen"};

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

var styles$3 = {"media":"_Tiles-module__media__2BYob","tint":"_Tiles-module__tint__1JcaT","title":"_Tiles-module__title__3tbqJ","cta":"_Tiles-module__cta__1QEs0","dateinfo":"_Tiles-module__dateinfo__eXZtZ","tileInner":"_Tiles-module__tileInner__ND4H_","tileLink":"_Tiles-module__tileLink__20UsT","tileOuter":"_Tiles-module__tileOuter__37b4W","tileContainer":"_Tiles-module__tileContainer__3LY-G"};

function Title$1(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.title
  }, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("p", null, props.subtitle));
}

var Cta = function Cta(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.cta
  }, /*#__PURE__*/React.createElement("span", null, props.cta), "\xA0\xA0", /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faAngleDoubleRight
  }));
};

var DateInfo = function DateInfo(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.dateinfo
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faCalendarAlt
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

var styles$4 = {"container":"_Container-module__container__3MUlz"};

function Container(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles$4.container,
    style: props.style
  }, props.children);
}

var styles$5 = {"footer":"_Footer-module__footer__19yAG","contactList":"_Footer-module__contactList__2H7C0"};

var ContactLink = function ContactLink(props) {
  return /*#__PURE__*/React.createElement("span", {
    className: styles$5.contactLink
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
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
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "made with ", /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faHeart
  }), " by ", props.author, ",", /*#__PURE__*/React.createElement("span", null, " "), /*#__PURE__*/React.createElement(ContactLink, {
    icon: freeRegularSvgIcons.faCopyright
  }, props.copyright, ","), /*#__PURE__*/React.createElement("span", null, " "), /*#__PURE__*/React.createElement(ContactLink, {
    icon: freeBrandsSvgIcons.faGithub,
    link: "https://github.com/" + props.repo
  }, props.repo)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("ul", {
    className: styles$5.contactList
  }, contact), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)));
}

var styles$6 = {"navbarOuter":"_Navbar-module__navbarOuter__1oeE6","navbarInner":"_Navbar-module__navbarInner__3YlKD","navbarToggle":"_Navbar-module__navbarToggle__1hZG2","navbarLinks":"_Navbar-module__navbarLinks__28Q7e","collapsed":"_Navbar-module__collapsed__wWJAB","navbarBrand":"_Navbar-module__navbarBrand__1Es7q","navbarLink":"_Navbar-module__navbarLink__1IqpR","navbarIcon":"_Navbar-module__navbarIcon__3I3Uo"};

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
    }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
      className: styles$6.navbarIcon,
      icon: freeSolidSvgIcons.faAngleDoubleRight
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
  }, /*#__PURE__*/React.createElement(reactFontawesome.FontAwesomeIcon, {
    icon: freeSolidSvgIcons.faHamburger
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
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  }));
}

exports.Badge = Badge;
exports.Badges = Badges;
exports.Container = Container;
exports.Footer = Footer;
exports.IconBadge = IconBadge;
exports.Navbar = Navbar;
exports.Page = Page;
exports.Slide = Slide;
exports.Slides = Slides;
exports.Tile = Tile;
exports.Tiles = Tiles;
exports.YouTube = YouTube;
//# sourceMappingURL=index.js.map
