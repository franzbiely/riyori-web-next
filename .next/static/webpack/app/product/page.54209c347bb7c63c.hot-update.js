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

/***/ "(app-client)/./src/components/table.tsx":
/*!**********************************!*\
  !*** ./src/components/table.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/TableContainer/TableContainer.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Paper/Paper.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Table/Table.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/TableHead/TableHead.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/TableRow/TableRow.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/TableCell/TableCell.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/TableBody/TableBody.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst Table = ()=>{\n    // Sample data for the table\n    const drinks = [\n        {\n            name: \"Coffee\",\n            price: \"$2.50\"\n        },\n        {\n            name: \"Tea\",\n            price: \"$1.50\"\n        },\n        {\n            name: \"Orange Juice\",\n            price: \"$3.00\"\n        },\n        {\n            name: \"Soda\",\n            price: \"$2.00\"\n        }\n    ];\n    const cellStyles = {\n        paddingLeft: 0,\n        paddingRight: 0\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        component: _mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        sx: {\n            boxShadow: \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            variant: \"subtitle1\",\n                            fontWeight: \"bold\",\n                            colSpan: 2,\n                            sx: cellStyles,\n                            children: \"Select Drink\"\n                        }, void 0, false, {\n                            fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/table.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/table.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/table.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    children: drinks.map((drink, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    sx: cellStyles,\n                                    children: drink.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/table.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    sx: cellStyles,\n                                    children: drink.price\n                                }, void 0, false, {\n                                    fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/table.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/table.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/table.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/table.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/francisalbores/Work/riyori-web-next/src/components/table.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Table;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvdGFibGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMwQjtBQUN3RjtBQUVsSCxNQUFNQyxRQUFRO0lBQ1osNEJBQTRCO0lBQzVCLE1BQU1RLFNBQVM7UUFDYjtZQUFFQyxNQUFNO1lBQVVDLE9BQU87UUFBUTtRQUNqQztZQUFFRCxNQUFNO1lBQU9DLE9BQU87UUFBUTtRQUM5QjtZQUFFRCxNQUFNO1lBQWdCQyxPQUFPO1FBQVE7UUFDdkM7WUFBRUQsTUFBTTtZQUFRQyxPQUFPO1FBQVE7S0FDaEM7SUFDRCxNQUFNQyxhQUFhO1FBQ2pCQyxhQUFhO1FBQ2JDLGNBQWM7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ1QscURBQWNBO1FBQUNVLFdBQVdQLHFEQUFLQTtRQUFFUSxJQUFJO1lBQ2xDQyxXQUFXO1FBQ2I7a0JBQ0EsNEVBQUNmLHFEQUFNQTs7OEJBQ0wsOERBQUNJLHFEQUFTQTs4QkFDUiw0RUFBQ0MscURBQVFBO2tDQUNQLDRFQUFDSCxxREFBU0E7NEJBQUVjLFNBQVE7NEJBQVlDLFlBQVc7NEJBQU9DLFNBQVM7NEJBQUdKLElBQUlKO3NDQUFZOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUdsRiw4REFBQ1QscURBQVNBOzhCQUNQTSxPQUFPWSxJQUFJLENBQUNDLE9BQU9DLHNCQUNsQiw4REFBQ2hCLHFEQUFRQTs7OENBQ1AsOERBQUNILHFEQUFTQTtvQ0FBQ1ksSUFBSUo7OENBQWFVLE1BQU1aOzs7Ozs7OENBQ2xDLDhEQUFDTixxREFBU0E7b0NBQUNZLElBQUlKOzhDQUFhVSxNQUFNWDs7Ozs7OzsyQkFGckJZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTM0I7S0FsQ010QjtBQW9DTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90YWJsZS50c3g/MGE2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRhYmxlIGFzIF9UYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlQ29udGFpbmVyLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBQYXBlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuICBcbmNvbnN0IFRhYmxlID0gKCkgPT4ge1xuICAvLyBTYW1wbGUgZGF0YSBmb3IgdGhlIHRhYmxlXG4gIGNvbnN0IGRyaW5rcyA9IFtcbiAgICB7IG5hbWU6ICdDb2ZmZWUnLCBwcmljZTogJyQyLjUwJyB9LFxuICAgIHsgbmFtZTogJ1RlYScsIHByaWNlOiAnJDEuNTAnIH0sXG4gICAgeyBuYW1lOiAnT3JhbmdlIEp1aWNlJywgcHJpY2U6ICckMy4wMCcgfSxcbiAgICB7IG5hbWU6ICdTb2RhJywgcHJpY2U6ICckMi4wMCcgfSxcbiAgXTtcbiAgY29uc3QgY2VsbFN0eWxlcyA9IHtcbiAgICBwYWRkaW5nTGVmdDogMCxcbiAgICBwYWRkaW5nUmlnaHQ6IDAsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0gc3g9e3tcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICB9fT5cbiAgICAgIDxfVGFibGU+XG4gICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCAgdmFyaWFudD1cInN1YnRpdGxlMVwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgY29sU3Bhbj17Mn0gc3g9e2NlbGxTdHlsZXN9PlNlbGVjdCBEcmluazwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgIHtkcmlua3MubWFwKChkcmluaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17Y2VsbFN0eWxlc30+e2RyaW5rLm5hbWV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e2NlbGxTdHlsZXN9Pntkcmluay5wcmljZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgPC9fVGFibGU+XG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYmxlIiwiX1RhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlBhcGVyIiwiZHJpbmtzIiwibmFtZSIsInByaWNlIiwiY2VsbFN0eWxlcyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiY29tcG9uZW50Iiwic3giLCJib3hTaGFkb3ciLCJ2YXJpYW50IiwiZm9udFdlaWdodCIsImNvbFNwYW4iLCJtYXAiLCJkcmluayIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/table.tsx\n"));

/***/ })

});