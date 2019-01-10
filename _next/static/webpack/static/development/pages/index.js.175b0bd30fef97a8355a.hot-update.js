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
    className: "jsx-662118401" + " " + "navbar-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-662118401" + " " + "redirect-link-container",
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
      className: "jsx-662118401",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-662118401" + " " + "redirect-link",
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
      className: "jsx-662118401" + " " + "font",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, text)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "662118401",
    css: ".navbar-container.jsx-662118401{margin:10px 0 10px 0;}.redirect-link-container.jsx-662118401{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.redirect-link-container.jsx-662118401 a.jsx-662118401{color:#c1c8e4;padding:5px;}.redirect-link-container.jsx-662118401 a.jsx-662118401:hover.jsx-662118401:not(.active){background-color:#5680e9;color:#f7f9fb;}.redirect-link.jsx-662118401{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXN6ZXRvL0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCUyxBQU1rQyxBQUdSLEFBT0MsQUFlVyxBQVVaLGNBeEJELE9BVmQsSUE4QmdCLENBbkJoQixhQW9CQSxtQ0E1QndCLEFBaUNILDhFQWhDckIsZUFpQ0EiLCJmaWxlIjoiL1VzZXJzL25pc3pldG8vRGVza3RvcC9kZXZlbG9wbWVudC9wb3J0Zm9saW8vY29tcG9uZW50cy9OYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyRGF0YSBmcm9tIFwiLi4vZGF0YS9OYXZiYXJcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuL0ljb25cIjtcblxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWRpcmVjdC1saW5rLWNvbnRhaW5lclwiPlxuICAgICAgICB7TmF2YmFyRGF0YS5tYXAoKG5hdmlnYXRpb25MaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgcmVkaXJlY3QsIHRleHQsIGljb25VUkksIHRhcmdldCB9ID0gbmF2aWdhdGlvbkxpbms7XG5cbiAgICAgICAgICAvLyBtaWdodCB3YW50IHRvIGNyZWF0ZSBhIHNlcGVyYXRlIGNvbXBvbmVudCBjYWxsZWQgTmF2YmFyTGluay5qc1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBocmVmPXtyZWRpcmVjdH0gdGFyZ2V0PXt0YXJnZXR9IGtleT17aW5kZXh9IGlkPXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVkaXJlY3QtbGlua1wiPlxuICAgICAgICAgICAgICAgIDxJY29uIGljb25VUkk9e2ljb25VUkl9IC8+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnRcIj57dGV4dH08L2gxPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5uYXZiYXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIC8vIGZsZXg6IDI7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZiO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzhmYzFlMztcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlZGlyZWN0LWxpbmstY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWRpcmVjdC1saW5rLWNvbnRhaW5lciBhIHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgLy8gY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgY29sb3I6ICNjMWM4ZTQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzU2ODBlOTtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjODRjZWViO1xuICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM1YWI5ZWE7XG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2MxYzhlNDtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjODg2MGQwO1xuXG4gICAgICAgICAgLnJlZGlyZWN0LWxpbmstY29udGFpbmVyIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjE7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjOGZjMWUzO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzUwODVhNTtcblxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU2ODBlOTtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM4NGNlZWI7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFiOWVhO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2MxYzhlNDtcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM4ODYwZDA7XG5cbiAgICAgICAgICAgIGNvbG9yOiAjZjdmOWZiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWRpcmVjdC1saW5rIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ== */\n/*@ sourceURL=/Users/niszeto/Desktop/development/portfolio/components/Navbar.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.175b0bd30fef97a8355a.hot-update.js.map