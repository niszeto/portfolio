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
    className: "jsx-3424816454" + " " + "navbar-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3424816454" + " " + "redirect-link-container",
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
      className: "jsx-3424816454",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3424816454" + " " + "redirect-link",
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
      className: "jsx-3424816454" + " " + "font",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, text)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3424816454",
    css: ".navbar-container.jsx-3424816454{margin:10px 0 10px 0;}.redirect-link-container.jsx-3424816454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.redirect-link-container.jsx-3424816454 a.jsx-3424816454{color:#c1c8e4;padding:5px;}.redirect-link-container.jsx-3424816454 a.jsx-3424816454:hover.jsx-3424816454:not(.active){background-color:#5680e9;color:#f7f9fb;}.redirect-link.jsx-3424816454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXN6ZXRvL0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCUyxBQU1rQyxBQUdSLEFBT0MsQUFTVyxBQVVaLGNBbEJELE9BVmQsSUF3QmdCLENBYmhCLGFBY0EsbUNBdEJ3QixBQTJCSCw4RUExQnJCLGVBMkJBIiwiZmlsZSI6Ii9Vc2Vycy9uaXN6ZXRvL0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhckRhdGEgZnJvbSBcIi4uL2RhdGEvTmF2YmFyXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9JY29uXCI7XG5cbmNvbnN0IE5hdmJhciA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVkaXJlY3QtbGluay1jb250YWluZXJcIj5cbiAgICAgICAge05hdmJhckRhdGEubWFwKChuYXZpZ2F0aW9uTGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHJlZGlyZWN0LCB0ZXh0LCBpY29uVVJJLCB0YXJnZXQgfSA9IG5hdmlnYXRpb25MaW5rO1xuXG4gICAgICAgICAgLy8gbWlnaHQgd2FudCB0byBjcmVhdGUgYSBzZXBlcmF0ZSBjb21wb25lbnQgY2FsbGVkIE5hdmJhckxpbmsuanNcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgaHJlZj17cmVkaXJlY3R9IHRhcmdldD17dGFyZ2V0fSBrZXk9e2luZGV4fSBpZD17aW5kZXh9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZGlyZWN0LWxpbmtcIj5cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uVVJJPXtpY29uVVJJfSAvPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250XCI+e3RleHR9PC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2YmFyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAvLyBmbGV4OiAyO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYjtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM4ZmMxZTM7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWRpcmVjdC1saW5rLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVkaXJlY3QtbGluay1jb250YWluZXIgYSB7XG4gICAgICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIC8vIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGNvbG9yOiAjYzFjOGU0O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWRpcmVjdC1saW5rLWNvbnRhaW5lciBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYxO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzhmYzFlMztcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM1MDg1YTU7XG5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NjgwZTk7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjODRjZWViO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzVhYjllYTtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNjMWM4ZTQ7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjODg2MGQwO1xuXG4gICAgICAgICAgICBjb2xvcjogI2Y3ZjlmYjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVkaXJlY3QtbGluayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXX0= */\n/*@ sourceURL=/Users/niszeto/Desktop/development/portfolio/components/Navbar.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.ef60b96a94297c895bcb.hot-update.js.map