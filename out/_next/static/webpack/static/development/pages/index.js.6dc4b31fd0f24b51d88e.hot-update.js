webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DescriptionsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DescriptionsList */ "./components/DescriptionsList.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/Users/niszeto/Desktop/development/PortfolioWebsite/components/Card.js";





var ExperienceCard = function ExperienceCard(props) {
  var _props$data = props.data,
      logo = _props$data.logo,
      name = _props$data.name,
      website = _props$data.website,
      role = _props$data.role,
      details = _props$data.details,
      startDate = _props$data.startDate,
      endDate = _props$data.endDate,
      city = _props$data.city,
      state = _props$data.state;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1643315379" + " " + "card-container margin-ten padding-ten box-shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    imageURI: logo,
    establishment: name,
    website: website,
    role: role,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "jsx-1643315379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    className: "jsx-1643315379" + " " + "padding-ten",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DescriptionsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    descriptions: details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-1643315379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1643315379" + " " + "font header-font indent margin-ten",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "".concat(startDate, " - ").concat(endDate, " | ").concat(city, ", ").concat(state))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1643315379",
    css: ".card-container.jsx-1643315379{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#f7f9fb;}article.jsx-1643315379{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}@media screen and (max-width.jsx-1643315379:600px) footer{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width.jsx-1643315379:600px) footer h1.jsx-1643315379{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXN6ZXRvL0Rlc2t0b3AvZGV2ZWxvcG1lbnQvUG9ydGZvbGlvV2Vic2l0ZS9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JrQixBQUdzQixBQU9FLEFBY1csQUFNSixXQTFCUCxPQTJCYix3REFwQnNCLElBY0csT0FwQkgsbUVBT3hCLFdBTjJCLGNBb0JKLFdBbkJ2QixrRkFvQkUiLCJmaWxlIjoiL1VzZXJzL25pc3pldG8vRGVza3RvcC9kZXZlbG9wbWVudC9Qb3J0Zm9saW9XZWJzaXRlL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZXNjcmlwdGlvbkxpc3QgZnJvbSBcIi4vRGVzY3JpcHRpb25zTGlzdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcblxuY29uc3QgRXhwZXJpZW5jZUNhcmQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtcbiAgICBsb2dvLFxuICAgIG5hbWUsXG4gICAgd2Vic2l0ZSxcbiAgICByb2xlLFxuICAgIGRldGFpbHMsXG4gICAgc3RhcnREYXRlLFxuICAgIGVuZERhdGUsXG4gICAgY2l0eSxcbiAgICBzdGF0ZVxuICB9ID0gcHJvcHMuZGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXIgbWFyZ2luLXRlbiBwYWRkaW5nLXRlbiBib3gtc2hhZG93XCI+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIGltYWdlVVJJPXtsb2dvfVxuICAgICAgICBlc3RhYmxpc2htZW50PXtuYW1lfVxuICAgICAgICB3ZWJzaXRlPXt3ZWJzaXRlfVxuICAgICAgICByb2xlPXtyb2xlfVxuICAgICAgLz5cbiAgICAgIDxociAvPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicGFkZGluZy10ZW5cIj5cbiAgICAgICAgPERlc2NyaXB0aW9uTGlzdCBkZXNjcmlwdGlvbnM9e2RldGFpbHN9IC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udCBoZWFkZXItZm9udCBpbmRlbnQgbWFyZ2luLXRlblwiPntgJHtzdGFydERhdGV9IC0gJHtlbmREYXRlfSB8ICR7Y2l0eX0sICR7c3RhdGV9YH08L2gxPlxuICAgICAgPC9mb290ZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y5ZmI7XG4gICAgICAgIH1cblxuICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZm9vdGVyIHtcbiAgICAgICAgLy8gICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvLyAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGZvb3RlciBoMSB7XG4gICAgICAgIC8vICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvb3RlciBoMSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlQ2FyZDtcbiJdfQ== */\n/*@ sourceURL=/Users/niszeto/Desktop/development/PortfolioWebsite/components/Card.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ExperienceCard);

/***/ })

})
//# sourceMappingURL=index.js.6dc4b31fd0f24b51d88e.hot-update.js.map