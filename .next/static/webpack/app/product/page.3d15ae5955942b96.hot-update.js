"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product/page",{

/***/ "(app-client)/./src/components/quantityField.tsx":
/*!******************************************!*\
  !*** ./src/components/quantityField.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Add */ \"(app-client)/./node_modules/@mui/icons-material/Add.js\");\n/* harmony import */ var _mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Remove */ \"(app-client)/./node_modules/@mui/icons-material/Remove.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst QuantityField = ()=>{\n    _s();\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    const handleIncrement = ()=>{\n        setQuantity(quantity + 1);\n    };\n    const handleDecrement = ()=>{\n        if (quantity > 0) {\n            setQuantity(quantity - 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        display: \"flex\",\n        alignItems: \"center\",\n        sx: {\n            backgroundColor: \"#f6f6f6\",\n            display: \"inline-block\",\n            padding: \"5px\",\n            borderRadius: \"20px\",\n            fontSize: \"16px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: handleDecrement,\n                sx: {\n                    padding: \"0px 5px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/quantityField.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/quantityField.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: quantity\n            }, void 0, false, {\n                fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/quantityField.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: handleIncrement,\n                sx: {\n                    padding: \"0px 5px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/quantityField.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/quantityField.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/quantityField.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(QuantityField, \"cKCKqnxt6YDpHcbPDfjNegKQqus=\");\n_c = QuantityField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuantityField);\nvar _c;\n$RefreshReg$(_c, \"QuantityField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvcXVhbnRpdHlGaWVsZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNtQjtBQUNiO0FBQ007QUFFcEQsTUFBTU0sZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekMsTUFBTVEsa0JBQWtCO1FBQ3RCRCxZQUFZRCxXQUFXO0lBQ3pCO0lBRUEsTUFBTUcsa0JBQWtCO1FBQ3RCLElBQUlILFdBQVcsR0FBRztZQUNoQkMsWUFBWUQsV0FBVztRQUN6QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNKLHFEQUFHQTtRQUFDUSxTQUFRO1FBQU9DLFlBQVc7UUFBU0MsSUFBSTtZQUN4Q0MsaUJBQWlCO1lBQ2pCSCxTQUFRO1lBQ1JJLFNBQVM7WUFDVEMsY0FBYTtZQUNiQyxVQUFVO1FBQ1o7OzBCQUNBLDhEQUFDZixxREFBVUE7Z0JBQUNnQixTQUFTUjtnQkFBaUJHLElBQUk7b0JBQ3hDRSxTQUFTO2dCQUNYOzBCQUNFLDRFQUFDVixrRUFBVUE7Ozs7Ozs7Ozs7MEJBRWIsOERBQUNjOzBCQUFNWjs7Ozs7OzBCQUNQLDhEQUFDTCxxREFBVUE7Z0JBQUNnQixTQUFTVDtnQkFBaUJJLElBQUk7b0JBQ3hDRSxTQUFTO2dCQUNYOzBCQUNFLDRFQUFDWCwrREFBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEI7R0FsQ01FO0tBQUFBO0FBb0NOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3F1YW50aXR5RmllbGQudHN4P2U2ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb25CdXR0b24sIFRleHRGaWVsZCwgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FkZCc7XG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlbW92ZSc7XG5cbmNvbnN0IFF1YW50aXR5RmllbGQgPSAoKSA9PiB7XG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMTApO1xuXG4gIGNvbnN0IGhhbmRsZUluY3JlbWVudCA9ICgpID0+IHtcbiAgICBzZXRRdWFudGl0eShxdWFudGl0eSArIDEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlY3JlbWVudCA9ICgpID0+IHtcbiAgICBpZiAocXVhbnRpdHkgPiAwKSB7XG4gICAgICBzZXRRdWFudGl0eShxdWFudGl0eSAtIDEpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3g9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y2ZjZmNicsXG4gICAgICAgIGRpc3BsYXk6J2lubGluZS1ibG9jaycsXG4gICAgICAgIHBhZGRpbmc6ICc1cHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6JzIwcHgnLFxuICAgICAgICBmb250U2l6ZTogJzE2cHgnXG4gICAgICB9fT5cbiAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlY3JlbWVudH0gc3g9e3tcbiAgICAgICAgcGFkZGluZzogJzBweCA1cHgnLFxuICAgICAgfX0+XG4gICAgICAgIDxSZW1vdmVJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8c3Bhbj57cXVhbnRpdHl9PC9zcGFuPlxuICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlSW5jcmVtZW50fSBzeD17e1xuICAgICAgICBwYWRkaW5nOiAnMHB4IDVweCdcbiAgICAgIH19PlxuICAgICAgICA8QWRkSWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVhbnRpdHlGaWVsZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkljb25CdXR0b24iLCJCb3giLCJBZGRJY29uIiwiUmVtb3ZlSWNvbiIsIlF1YW50aXR5RmllbGQiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwiaGFuZGxlSW5jcmVtZW50IiwiaGFuZGxlRGVjcmVtZW50IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJzeCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/quantityField.tsx\n"));

/***/ })

});