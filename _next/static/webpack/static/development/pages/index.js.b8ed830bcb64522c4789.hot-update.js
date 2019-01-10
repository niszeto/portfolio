webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/Navbar */ "./data/Navbar.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ "./components/Icon.js");
var _jsxFileName = "/Users/niszeto/Desktop/development/portfolio/components/Navbar.js";





var Navbar = function Navbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-194421916" + " " + "navbar-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-194421916" + " " + "redirect-link-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, _data_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (navigationLink, index) {
    var redirect = navigationLink.redirect,
        text = navigationLink.text,
        iconURI = navigationLink.iconURI,
        target = navigationLink.target; // might want to create a seperate component called NavbarLink.js

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: redirect,
      target: target,
      key: index,
      id: index,
      className: "jsx-194421916",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-194421916" + " " + "redirect-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      iconURI: iconURI,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-194421916" + " " + "font",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, text)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "194421916",
    css: ".navbar-container.jsx-194421916{margin:10px 0 10px 0;}.redirect-link-container.jsx-194421916{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.redirect-link-container.jsx-194421916 a.jsx-194421916{color:#687864;padding:5px;}.redirect-link-container.jsx-194421916 a.jsx-194421916:hover.jsx-194421916:not(.active){background-color:#5085a5;color:#f7f9fb;}.redirect-link.jsx-194421916{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXN6ZXRvL0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCUyxBQU1rQyxBQUdSLEFBT0MsQUFPVyxBQUtaLGNBWEQsT0FWZCxJQWlCZ0IsQ0FOaEIsYUFPQSxtQ0Fmd0IsQUFvQkgsOEVBbkJyQixlQW9CQSIsImZpbGUiOiIvVXNlcnMvbmlzemV0by9EZXNrdG9wL2RldmVsb3BtZW50L3BvcnRmb2xpby9jb21wb25lbnRzL05hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXJEYXRhIGZyb20gXCIuLi9kYXRhL05hdmJhclwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4vSWNvblwiO1xuXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZGlyZWN0LWxpbmstY29udGFpbmVyXCI+XG4gICAgICAgIHtOYXZiYXJEYXRhLm1hcCgobmF2aWdhdGlvbkxpbmssIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyByZWRpcmVjdCwgdGV4dCwgaWNvblVSSSwgdGFyZ2V0IH0gPSBuYXZpZ2F0aW9uTGluaztcblxuICAgICAgICAgIC8vIG1pZ2h0IHdhbnQgdG8gY3JlYXRlIGEgc2VwZXJhdGUgY29tcG9uZW50IGNhbGxlZCBOYXZiYXJMaW5rLmpzXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGhyZWY9e3JlZGlyZWN0fSB0YXJnZXQ9e3RhcmdldH0ga2V5PXtpbmRleH0gaWQ9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWRpcmVjdC1saW5rXCI+XG4gICAgICAgICAgICAgICAgPEljb24gaWNvblVSST17aWNvblVSSX0gLz5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFwiPnt0ZXh0fTwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm5hdmJhci1jb250YWluZXIge1xuICAgICAgICAgICAgLy8gZmxleDogMjtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmN2Y5ZmI7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjOGZjMWUzO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVkaXJlY3QtbGluay1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlZGlyZWN0LWxpbmstY29udGFpbmVyIGEge1xuICAgICAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAvLyBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBjb2xvcjogIzY4Nzg2NDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVkaXJlY3QtbGluay1jb250YWluZXIgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VmZjBmMTtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM4ZmMxZTM7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA4NWE1O1xuICAgICAgICAgICAgY29sb3I6ICNmN2Y5ZmI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlZGlyZWN0LWxpbmsge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl19 */\n/*@ sourceURL=/Users/niszeto/Desktop/development/portfolio/components/Navbar.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.b8ed830bcb64522c4789.hot-update.js.map