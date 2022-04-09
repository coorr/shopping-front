webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/Login.js":
/*!****************************!*\
  !*** ./src/pages/Login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_validation_build_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-validation/build/form */ "./node_modules/react-validation/build/form.js");
/* harmony import */ var react_validation_build_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_validation_build_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-validation/build/input */ "./node_modules/react-validation/build/input.js");
/* harmony import */ var react_validation_build_input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_validation_build_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-validation/build/button */ "./node_modules/react-validation/build/button.js");
/* harmony import */ var react_validation_build_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_validation_build_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _service_Auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/Auth.service */ "./service/Auth.service.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\user\\Downloads\\shopping-front\\src\\pages\\Login.js",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




 // import Header from "../components/header";







var required = function required(value) {
  if (!value) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      className: "alert alert-danger",
      role: "alert",
      children: "This field is required!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this);
  }
};

var Login = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, _Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this2 = _super.call(this, props);
    _this2.handleLogin = _this2.handleLogin.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.onChangeUsername = _this2.onChangeUsername.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.onChangePassword = _this2.onChangePassword.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    _this2.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "onChangeUsername",
    value: function onChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
  }, {
    key: "onChangePassword",
    value: function onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }
  }, {
    key: "handleLogin",
    value: function handleLogin(e) {
      var _this3 = this;

      e.preventDefault();
      this.setState({
        message: "",
        loading: true
      });
      this.form.validateAll();

      if (this.checkBtn.context._errors.length === 0) {
        _service_Auth_service__WEBPACK_IMPORTED_MODULE_10__["default"].login(this.state.username, this.state.password).then(function (res) {
          next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/");
        }, function (error) {
          var resMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();

          _this3.setState({
            loading: false,
            message: resMessage
          });
        });
      } else {
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
          className: "col-md-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
            className: "card card-container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("img", {
              src: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
              alt: "profile-img",
              className: "profile-img-card"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_validation_build_form__WEBPACK_IMPORTED_MODULE_7___default.a, {
              onSubmit: this.handleLogin,
              ref: function ref(c) {
                _this4.form = c;
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                className: "form-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("label", {
                  htmlFor: "username",
                  children: "Username"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 15
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_validation_build_input__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  type: "text",
                  className: "form-control",
                  name: "username",
                  value: this.state.username,
                  onChange: this.onChangeUsername,
                  validations: [required]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                className: "form-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("label", {
                  htmlFor: "password",
                  children: "Password"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 15
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_validation_build_input__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  type: "password",
                  className: "form-control",
                  name: "password",
                  value: this.state.password,
                  onChange: this.onChangePassword,
                  validations: [required]
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("button", {
                  className: "btn btn-primary btn-block",
                  disabled: this.state.loading,
                  children: [this.state.loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("span", {
                    className: "spinner-border spinner-border-sm"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("span", {
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 17
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 13
              }, this), this.state.message && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                className: "form-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                  className: "alert alert-danger",
                  role: "alert",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                    style: {
                      fontSize: '17px'
                    },
                    children: this.state.message
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_validation_build_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
                style: {
                  display: "none"
                },
                ref: function ref(c) {
                  _this4.checkBtn = c;
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 7
        }, this)
      }, void 0, false);
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0xvZ2luLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwidmFsdWUiLCJMb2dpbiIsInByb3BzIiwiaGFuZGxlTG9naW4iLCJiaW5kIiwib25DaGFuZ2VVc2VybmFtZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsb2FkaW5nIiwibWVzc2FnZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsInZhbGlkYXRlQWxsIiwiY2hlY2tCdG4iLCJjb250ZXh0IiwiX2Vycm9ycyIsImxlbmd0aCIsIkF1dGhTZXJ2aWNlIiwibG9naW4iLCJ0aGVuIiwicmVzIiwiUm91dGVyIiwicHVzaCIsImVycm9yIiwicmVzTWVzc2FnZSIsInJlc3BvbnNlIiwiZGF0YSIsInRvU3RyaW5nIiwiYyIsImZvbnRTaXplIiwiZGlzcGxheSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxLQUFLLEVBQUk7QUFDeEIsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVix3QkFDRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFvQyxVQUFJLEVBQUMsT0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtEO0FBQ0YsQ0FSRDs7SUFVcUJDLEs7Ozs7O0FBQ25CLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLCtCQUFNQSxLQUFOO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixPQUFLQSxXQUFMLENBQWlCQyxJQUFqQiwwR0FBbkI7QUFDQSxXQUFLQyxnQkFBTCxHQUF3QixPQUFLQSxnQkFBTCxDQUFzQkQsSUFB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QUFDLG9FQUFEO0FBQ0UscUJBQUssRUFBRTtBQUFFd0IseUJBQU8sRUFBRTtBQUFYLGlCQURUO0FBRUUsbUJBQUcsRUFBRSxhQUFBRixDQUFDLEVBQUk7QUFDUix3QkFBSSxDQUFDZixRQUFMLEdBQWdCZSxDQUFoQjtBQUNEO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFuREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRix1QkFEQTtBQXlFRDs7OztFQXhJZ0NHLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVlNmYwZGJmODhmOTllODcyMTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2Zvcm1cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJyZWFjdC12YWxpZGF0aW9uL2J1aWxkL2lucHV0XCI7XHJcbmltcG9ydCBDaGVja0J1dHRvbiBmcm9tIFwicmVhY3QtdmFsaWRhdGlvbi9idWlsZC9idXR0b25cIjtcclxuLy8gaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2aWNlL0F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHJlcXVpcmVkID0gdmFsdWUgPT4ge1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgVGhpcyBmaWVsZCBpcyByZXF1aXJlZCFcclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oYW5kbGVMb2dpbiA9IHRoaXMuaGFuZGxlTG9naW4uYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DaGFuZ2VVc2VybmFtZSA9IHRoaXMub25DaGFuZ2VVc2VybmFtZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbkNoYW5nZVBhc3N3b3JkID0gdGhpcy5vbkNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlVXNlcm5hbWUoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVBhc3N3b3JkKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTG9naW4oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZm9ybS52YWxpZGF0ZUFsbCgpO1xyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrQnRuLmNvbnRleHQuX2Vycm9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgQXV0aFNlcnZpY2UubG9naW4odGhpcy5zdGF0ZS51c2VybmFtZSwgdGhpcy5zdGF0ZS5wYXNzd29yZCkudGhlbihcclxuICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNNZXNzYWdlID1cclxuICAgICAgICAgICAgKGVycm9yLnJlc3BvbnNlICYmXHJcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YSAmJlxyXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSkgfHxcclxuICAgICAgICAgICAgZXJyb3IubWVzc2FnZSB8fFxyXG4gICAgICAgICAgICBlcnJvci50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogcmVzTWVzc2FnZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICB7LyogPEhlYWRlciAvPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPVwiLy9zc2wuZ3N0YXRpYy5jb20vYWNjb3VudHMvdWkvYXZhdGFyXzJ4LnBuZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cInByb2ZpbGUtaW1nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZmlsZS1pbWctY2FyZFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZUxvZ2lufVxyXG4gICAgICAgICAgICByZWY9e2MgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZm9ybSA9IGM7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VVc2VybmFtZX1cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXtbcmVxdWlyZWRdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXtbcmVxdWlyZWRdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Mb2dpbjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTonMTdweCd9fT5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPENoZWNrQnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICByZWY9e2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0J0biA9IGM7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==