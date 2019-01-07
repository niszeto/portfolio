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
    className: "jsx-2124188623" + " " + "card-container margin-ten padding-ten box-shadow",
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
    className: "jsx-2124188623",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    className: "jsx-2124188623" + " " + "padding-ten",
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
    className: "jsx-2124188623",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2124188623" + " " + "font header-font indent margin-ten",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "".concat(startDate, " - ").concat(endDate, " | ").concat(city, ", ").concat(state))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2124188623",
    css: ".card-container.jsx-2124188623{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#f7f9fb;}article.jsx-2124188623{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}@media screen and (max-width:600px){footer.jsx-2124188623{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-2124188623 h1.jsx-2124188623{text-align:center;text-ident:0px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXN6ZXRvL0Rlc2t0b3AvZGV2ZWxvcG1lbnQvUG9ydGZvbGlvV2Vic2l0ZS9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JrQixBQUdzQixBQU9FLEFBTVcsQUFNSixXQWxCUCxPQW1CSSxlQUNqQix5Q0Fic0IsSUFNRyxPQVpILG1FQU94QixXQU4yQixjQVlKLFdBWHZCLGtGQVlFIiwiZmlsZSI6Ii9Vc2Vycy9uaXN6ZXRvL0Rlc2t0b3AvZGV2ZWxvcG1lbnQvUG9ydGZvbGlvV2Vic2l0ZS9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVzY3JpcHRpb25MaXN0IGZyb20gXCIuL0Rlc2NyaXB0aW9uc0xpc3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5cbmNvbnN0IEV4cGVyaWVuY2VDYXJkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgbG9nbyxcbiAgICBuYW1lLFxuICAgIHdlYnNpdGUsXG4gICAgcm9sZSxcbiAgICBkZXRhaWxzLFxuICAgIHN0YXJ0RGF0ZSxcbiAgICBlbmREYXRlLFxuICAgIGNpdHksXG4gICAgc3RhdGVcbiAgfSA9IHByb3BzLmRhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGFpbmVyIG1hcmdpbi10ZW4gcGFkZGluZy10ZW4gYm94LXNoYWRvd1wiPlxuICAgICAgPEhlYWRlclxuICAgICAgICBpbWFnZVVSST17bG9nb31cbiAgICAgICAgZXN0YWJsaXNobWVudD17bmFtZX1cbiAgICAgICAgd2Vic2l0ZT17d2Vic2l0ZX1cbiAgICAgICAgcm9sZT17cm9sZX1cbiAgICAgIC8+XG4gICAgICA8aHIgLz5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBhZGRpbmctdGVuXCI+XG4gICAgICAgIDxEZXNjcmlwdGlvbkxpc3QgZGVzY3JpcHRpb25zPXtkZXRhaWxzfSAvPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQgaGVhZGVyLWZvbnQgaW5kZW50IG1hcmdpbi10ZW5cIj57YCR7c3RhcnREYXRlfSAtICR7ZW5kRGF0ZX0gfCAke2NpdHl9LCAke3N0YXRlfWB9PC9oMT5cbiAgICAgIDwvZm9vdGVyPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2FyZC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZiO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJ0aWNsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb290ZXIgaDEge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1pZGVudDogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZUNhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/niszeto/Desktop/development/PortfolioWebsite/components/Card.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ExperienceCard);

/***/ })

})
//# sourceMappingURL=index.js.e1e122a7bb34b408944e.hot-update.js.map