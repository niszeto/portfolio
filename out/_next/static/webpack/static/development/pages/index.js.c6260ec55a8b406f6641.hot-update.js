webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/analytics */ "./utils/analytics.js");
var _jsxFileName = "/Users/niszeto/Desktop/development/portfolio/components/Layout.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window.GA_INITIALIZED) {
        Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_3__["initGA"])();
        window.GA_INITIALIZED = true;
      }

      Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_3__["logPageView"])();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-52466",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-52466",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-52466",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-52466",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Nicholas Szeto Portfolio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
        className: "jsx-52466",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "52466",
        css: "*{box-sizing:border-box;margin:0;padding:0;}body{background-image:linear-gradient(#8fc1e3,#f7f9fb);}main{background-image:linear-gradient( 0deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent ), linear-gradient( 90deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent );background-size:50px 50px;}a{-webkit-text-decoration:none;text-decoration:none;color:black;}.font{font-family:Helvetica,sans-serif;}.font-size{font-size:1.2em;}.font-color{color:#687864;}.header-font{color:#31708e;}.box-shadow{box-shadow:0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);}.indent{text-indent:10px;}.margin-ten{margin:10px;}.margin-twenty{margin:20px;}.padding-ten{padding:10px;}.padding-twenty{padding:20px;}.rounded-corner{border-radius:5%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaXN6ZXRvL0Rlc2t0b3AvZGV2ZWxvcG1lbnQvcG9ydGZvbGlvL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCMkIsQUFHbUMsQUFNNkIsQUEyQmhELEFBS2tCLEFBS2EsQUFJbEIsQUFJRixBQUlBLEFBS29CLEFBSWpCLEFBSUwsQUFJQSxBQUlDLEFBSUEsQUFJSSxZQWZuQixBQUlBLENBSUEsQUFJQSxDQTdCQSxBQUlBLEVBUkEsQ0FpQkEsQUFvQkEsS0FwRlcsU0FDQyxFQTBDWixRQXpDQSxTQUlBLEFBZ0NjLFlBQ2QsUUFxQkEsdVFBM0I0QiwwQkFDNUIiLCJmaWxlIjoiL1VzZXJzL25pc3pldG8vRGVza3RvcC9kZXZlbG9wbWVudC9wb3J0Zm9saW8vY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tIFwiLi4vdXRpbHMvYW5hbHl0aWNzXCI7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghd2luZG93LkdBX0lOSVRJQUxJWkVEKSB7XG4gICAgICBpbml0R0EoKTtcbiAgICAgIHdpbmRvdy5HQV9JTklUSUFMSVpFRCA9IHRydWU7XG4gICAgfVxuICAgIGxvZ1BhZ2VWaWV3KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPHRpdGxlPk5pY2hvbGFzIFN6ZXRvIFBvcnRmb2xpbzwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM4ZmMxZTMsICNmN2Y5ZmIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAgIDBkZWcsXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjQlLFxuICAgICAgICAgICAgICAgICNmZmZmZmYgMjUlLFxuICAgICAgICAgICAgICAgICNmZmZmZmYgMjYlLFxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50IDI3JSxcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCA3NCUsXG4gICAgICAgICAgICAgICAgI2ZmZmZmZiA3NSUsXG4gICAgICAgICAgICAgICAgI2ZmZmZmZiA3NiUsXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNzclLFxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50XG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICA5MGRlZyxcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAyNCUsXG4gICAgICAgICAgICAgICAgI2ZmZmZmZiAyNSUsXG4gICAgICAgICAgICAgICAgI2ZmZmZmZiAyNiUsXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjclLFxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50IDc0JSxcbiAgICAgICAgICAgICAgICAjZmZmZmZmIDc1JSxcbiAgICAgICAgICAgICAgICAjZmZmZmZmIDc2JSxcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCA3NyUsXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb250IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvbnQtc2l6ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb250LWNvbG9yIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjg3ODY0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oZWFkZXItZm9udCB7XG4gICAgICAgICAgICBjb2xvcjogIzMxNzA4ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm94LXNoYWRvdyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbmRlbnQge1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1hcmdpbi10ZW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tYXJnaW4tdHdlbnR5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFkZGluZy10ZW4ge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFkZGluZy10d2VudHkge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucm91bmRlZC1jb3JuZXIge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuLy8gY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuLy8gcmV0dXJuIChcbi8vICAgPGRpdj5cbi8vICAgICA8SGVhZD5cbi8vICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4vLyAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuLy8gICAgICAgPHRpdGxlPk5pY2hvbGFzIFN6ZXRvIFBvcnRmb2xpbzwvdGl0bGU+XG4vLyAgICAgPC9IZWFkPlxuLy8gICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4vLyAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2Bcbi8vICAgICAgICoge1xuLy8gICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgIHBhZGRpbmc6IDA7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIGJvZHkge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzhmYzFlMywgI2Y3ZjlmYik7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIG1haW4ge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4vLyAgICAgICAgICAgICAwZGVnLFxuLy8gICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjQlLFxuLy8gICAgICAgICAgICAgI2ZmZmZmZiAyNSUsXG4vLyAgICAgICAgICAgICAjZmZmZmZmIDI2JSxcbi8vICAgICAgICAgICAgIHRyYW5zcGFyZW50IDI3JSxcbi8vICAgICAgICAgICAgIHRyYW5zcGFyZW50IDc0JSxcbi8vICAgICAgICAgICAgICNmZmZmZmYgNzUlLFxuLy8gICAgICAgICAgICAgI2ZmZmZmZiA3NiUsXG4vLyAgICAgICAgICAgICB0cmFuc3BhcmVudCA3NyUsXG4vLyAgICAgICAgICAgICB0cmFuc3BhcmVudFxuLy8gICAgICAgICAgICksXG4vLyAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KFxuLy8gICAgICAgICAgICAgOTBkZWcsXG4vLyAgICAgICAgICAgICB0cmFuc3BhcmVudCAyNCUsXG4vLyAgICAgICAgICAgICAjZmZmZmZmIDI1JSxcbi8vICAgICAgICAgICAgICNmZmZmZmYgMjYlLFxuLy8gICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjclLFxuLy8gICAgICAgICAgICAgdHJhbnNwYXJlbnQgNzQlLFxuLy8gICAgICAgICAgICAgI2ZmZmZmZiA3NSUsXG4vLyAgICAgICAgICAgICAjZmZmZmZmIDc2JSxcbi8vICAgICAgICAgICAgIHRyYW5zcGFyZW50IDc3JSxcbi8vICAgICAgICAgICAgIHRyYW5zcGFyZW50XG4vLyAgICAgICAgICAgKTtcbi8vICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDUwcHg7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIGEge1xuLy8gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgICAgIGNvbG9yOiBibGFjaztcbi8vICAgICAgIH1cblxuLy8gICAgICAgLmZvbnQge1xuLy8gICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAuZm9udC1zaXplIHtcbi8vICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgLmZvbnQtY29sb3Ige1xuLy8gICAgICAgICBjb2xvcjogIzY4Nzg2NDtcbi8vICAgICAgIH1cblxuLy8gICAgICAgLmhlYWRlci1mb250IHtcbi8vICAgICAgICAgY29sb3I6ICMzMTcwOGU7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIC5ib3gtc2hhZG93IHtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxuLy8gICAgICAgICAgIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAuaW5kZW50IHtcbi8vICAgICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIC5tYXJnaW4tdGVuIHtcbi8vICAgICAgICAgbWFyZ2luOiAxMHB4O1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAubWFyZ2luLXR3ZW50eSB7XG4vLyAgICAgICAgIG1hcmdpbjogMjBweDtcbi8vICAgICAgIH1cblxuLy8gICAgICAgLnBhZGRpbmctdGVuIHtcbi8vICAgICAgICAgcGFkZGluZzogMTBweDtcbi8vICAgICAgIH1cblxuLy8gICAgICAgLnBhZGRpbmctdHdlbnR5IHtcbi8vICAgICAgICAgcGFkZGluZzogMjBweDtcbi8vICAgICAgIH1cblxuLy8gICAgICAgLnJvdW5kZWQtY29ybmVyIHtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XG4vLyAgICAgICB9XG4vLyAgICAgYH08L3N0eWxlPlxuLy8gICA8L2Rpdj5cbi8vICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/niszeto/Desktop/development/portfolio/components/Layout.js */",
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout); // const Layout = ({ children }) => {
// return (
//   <div>
//     <Head>
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <meta charSet="utf-8" />
//       <title>Nicholas Szeto Portfolio</title>
//     </Head>
//     <main>{children}</main>
//     <style jsx global>{`
//       * {
//         box-sizing: border-box;
//         margin: 0;
//         padding: 0;
//       }
//       body {
//         background-image: linear-gradient(#8fc1e3, #f7f9fb);
//       }
//       main {
//         background-image: linear-gradient(
//             0deg,
//             transparent 24%,
//             #ffffff 25%,
//             #ffffff 26%,
//             transparent 27%,
//             transparent 74%,
//             #ffffff 75%,
//             #ffffff 76%,
//             transparent 77%,
//             transparent
//           ),
//           linear-gradient(
//             90deg,
//             transparent 24%,
//             #ffffff 25%,
//             #ffffff 26%,
//             transparent 27%,
//             transparent 74%,
//             #ffffff 75%,
//             #ffffff 76%,
//             transparent 77%,
//             transparent
//           );
//         background-size: 50px 50px;
//       }
//       a {
//         text-decoration: none;
//         color: black;
//       }
//       .font {
//         font-family: Helvetica, sans-serif;
//       }
//       .font-size {
//         font-size: 1.2em;
//       }
//       .font-color {
//         color: #687864;
//       }
//       .header-font {
//         color: #31708e;
//       }
//       .box-shadow {
//         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
//           0 6px 20px 0 rgba(0, 0, 0, 0.19);
//       }
//       .indent {
//         text-indent: 10px;
//       }
//       .margin-ten {
//         margin: 10px;
//       }
//       .margin-twenty {
//         margin: 20px;
//       }
//       .padding-ten {
//         padding: 10px;
//       }
//       .padding-twenty {
//         padding: 20px;
//       }
//       .rounded-corner {
//         border-radius: 5%;
//       }
//     `}</style>
//   </div>
// );
// };
// export default Layout;

/***/ })

})
//# sourceMappingURL=index.js.c6260ec55a8b406f6641.hot-update.js.map