/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_fernando_Documents_repositories_prefreact_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_fernando_Documents_repositories_prefreact_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_fernando_Documents_repositories_prefreact_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_fernando_Documents_repositories_prefreact_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_SearchResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchResult */ \"./components/SearchResult.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/fernando/Documents/repositories/prefreact/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    totalPrice: 0,\n    data: []\n  }),\n      results = _useState2[0],\n      setResults = _useState2[1];\n\n  function handleSearch(_x) {\n    return _handleSearch.apply(this, arguments);\n  }\n\n  function _handleSearch() {\n    _handleSearch = (0,_home_fernando_Documents_repositories_prefreact_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_fernando_Documents_repositories_prefreact_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(event) {\n      var response, data, formater, products, totalPrice;\n      return _home_fernando_Documents_repositories_prefreact_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              event.preventDefault();\n\n              if (search.trim()) {\n                _context2.next = 3;\n                break;\n              }\n\n              return _context2.abrupt(\"return\");\n\n            case 3:\n              _context2.next = 5;\n              return fetch(\"http://localhost:3333/products?q=\".concat(search));\n\n            case 5:\n              response = _context2.sent;\n              _context2.next = 8;\n              return response.json();\n\n            case 8:\n              data = _context2.sent;\n              formater = new Intl.NumberFormat(\"pt-BR\", {\n                style: \"currency\",\n                currency: \"BRL\"\n              });\n              products = data.map(function (product) {\n                return {\n                  id: product.id,\n                  title: product.title,\n                  price: product.price,\n                  priceFormatted: formater.format(product.price)\n                };\n              });\n              totalPrice = data.reduce(function (total, product) {\n                return total + product.price;\n              }, 0);\n              setResults({\n                totalPrice: totalPrice,\n                data: data\n              });\n\n            case 13:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _handleSearch.apply(this, arguments);\n  }\n\n  var addToWishList = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {\n    /*#__PURE__*/\n    (function () {\n      var _ref = (0,_home_fernando_Documents_repositories_prefreact_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_fernando_Documents_repositories_prefreact_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id) {\n        return _home_fernando_Documents_repositories_prefreact_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log(id);\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x2) {\n        return _ref.apply(this, arguments);\n      };\n    })();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Search\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: handleSearch,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: search,\n        onChange: function onChange(e) {\n          return setSearch(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Buscar\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchResult__WEBPACK_IMPORTED_MODULE_4__.SearchResult, {\n      onAddToWishList: addToWishList,\n      results: results.data,\n      totalPrice: results.totalPrice\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"dTK9vZaR6z/L1GtnSkh3L20J/tM=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidG90YWxQcmljZSIsImRhdGEiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImhhbmRsZVNlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJmb3JtYXRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJ0aXRsZSIsInByaWNlIiwicHJpY2VGb3JtYXR0ZWQiLCJmb3JtYXQiLCJyZWR1Y2UiLCJ0b3RhbCIsImFkZFRvV2lzaExpc3QiLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9lLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDREMsK0NBQVEsQ0FBQyxFQUFELENBRFA7QUFBQSxNQUN0QkMsTUFEc0I7QUFBQSxNQUNkQyxTQURjOztBQUFBLG1CQUVDRiwrQ0FBUSxDQUFVO0FBQzlDRyxjQUFVLEVBQUUsQ0FEa0M7QUFFOUNDLFFBQUksRUFBRTtBQUZ3QyxHQUFWLENBRlQ7QUFBQSxNQUV0QkMsT0FGc0I7QUFBQSxNQUViQyxVQUZhOztBQUFBLFdBT2RDLFlBUGM7QUFBQTtBQUFBOztBQUFBO0FBQUEsc1RBTzdCLGtCQUE0QkMsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLG1CQUFLLENBQUNDLGNBQU47O0FBREYsa0JBR09SLE1BQU0sQ0FBQ1MsSUFBUCxFQUhQO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFPeUJDLEtBQUssNENBQXFDVixNQUFyQyxFQVA5Qjs7QUFBQTtBQU9RVyxzQkFQUjtBQUFBO0FBQUEscUJBUXFCQSxRQUFRLENBQUNDLElBQVQsRUFSckI7O0FBQUE7QUFRUVQsa0JBUlI7QUFVUVUsc0JBVlIsR0FVbUIsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQzlDQyxxQkFBSyxFQUFFLFVBRHVDO0FBRTlDQyx3QkFBUSxFQUFFO0FBRm9DLGVBQS9CLENBVm5CO0FBY1FDLHNCQWRSLEdBY21CZixJQUFJLENBQUNnQixHQUFMLENBQVMsVUFBQ0MsT0FBRCxFQUFhO0FBQ3JDLHVCQUFPO0FBQ0xDLG9CQUFFLEVBQUVELE9BQU8sQ0FBQ0MsRUFEUDtBQUVMQyx1QkFBSyxFQUFFRixPQUFPLENBQUNFLEtBRlY7QUFHTEMsdUJBQUssRUFBRUgsT0FBTyxDQUFDRyxLQUhWO0FBSUxDLGdDQUFjLEVBQUVYLFFBQVEsQ0FBQ1ksTUFBVCxDQUFnQkwsT0FBTyxDQUFDRyxLQUF4QjtBQUpYLGlCQUFQO0FBTUQsZUFQZ0IsQ0FkbkI7QUF1QlFyQix3QkF2QlIsR0F1QnFCQyxJQUFJLENBQUN1QixNQUFMLENBQVksVUFBQ0MsS0FBRCxFQUFRUCxPQUFSLEVBQW9CO0FBQ2pELHVCQUFPTyxLQUFLLEdBQUdQLE9BQU8sQ0FBQ0csS0FBdkI7QUFDRCxlQUZrQixFQUVoQixDQUZnQixDQXZCckI7QUEyQkVsQix3QkFBVSxDQUFDO0FBQUVILDBCQUFVLEVBQVZBLFVBQUY7QUFBY0Msb0JBQUksRUFBSkE7QUFBZCxlQUFELENBQVY7O0FBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUDZCO0FBQUE7QUFBQTs7QUFxQzdCLE1BQU15QixhQUFhLEdBQUdDLGtEQUFXLENBQUMsWUFBTTtBQUN0QztBQUFBO0FBQUEsb1VBQU9SLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFUyx1QkFBTyxDQUFDQyxHQUFSLENBQVlWLEVBQVo7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHRCxHQUpnQyxFQUk5QixFQUo4QixDQUFqQztBQU1BLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQU0sY0FBUSxFQUFFZixZQUFoQjtBQUFBLDhCQUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFLLEVBQUVOLE1BRlQ7QUFHRSxnQkFBUSxFQUFFLGtCQUFDZ0MsQ0FBRDtBQUFBLGlCQUFPL0IsU0FBUyxDQUFDK0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQVdFLDhEQUFDLGtFQUFEO0FBQ0UscUJBQWUsRUFBRU4sYUFEbkI7QUFFRSxhQUFPLEVBQUV4QixPQUFPLENBQUNELElBRm5CO0FBR0UsZ0JBQVUsRUFBRUMsT0FBTyxDQUFDRjtBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBOUR1QkosSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1FdmVudCwgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRcIjtcblxudHlwZSBSZXN1bHRzID0ge1xuICB0b3RhbFByaWNlOiBudW1iZXI7XG4gIGRhdGE6IGFueVtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZTxSZXN1bHRzPih7XG4gICAgdG90YWxQcmljZTogMCxcbiAgICBkYXRhOiBbXSxcbiAgfSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKGV2ZW50OiBGb3JtRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCFzZWFyY2gudHJpbSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMzMzL3Byb2R1Y3RzP3E9JHtzZWFyY2h9YCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IGZvcm1hdGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwicHQtQlJcIiwge1xuICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICAgIGN1cnJlbmN5OiBcIkJSTFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHByb2R1Y3RzID0gZGF0YS5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgICB0aXRsZTogcHJvZHVjdC50aXRsZSxcbiAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXG4gICAgICAgIHByaWNlRm9ybWF0dGVkOiBmb3JtYXRlci5mb3JtYXQocHJvZHVjdC5wcmljZSksXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG90YWxQcmljZSA9IGRhdGEucmVkdWNlKCh0b3RhbCwgcHJvZHVjdCkgPT4ge1xuICAgICAgcmV0dXJuIHRvdGFsICsgcHJvZHVjdC5wcmljZTtcbiAgICB9LCAwKTtcblxuICAgIHNldFJlc3VsdHMoeyB0b3RhbFByaWNlLCBkYXRhIH0pO1xuICB9XG5cbiAgY29uc3QgYWRkVG9XaXNoTGlzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+U2VhcmNoPC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkJ1c2NhcjwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8U2VhcmNoUmVzdWx0XG4gICAgICAgIG9uQWRkVG9XaXNoTGlzdD17YWRkVG9XaXNoTGlzdH1cbiAgICAgICAgcmVzdWx0cz17cmVzdWx0cy5kYXRhfVxuICAgICAgICB0b3RhbFByaWNlPXtyZXN1bHRzLnRvdGFsUHJpY2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});