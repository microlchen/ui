"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/_scrolltracklist.js":
/*!********************************************!*\
  !*** ./src/components/_scrolltracklist.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//import styles from \"./TrackList.module.css\";\n//make individual CSS for each component..\n\nconst TrackList = (param)=>{\n    let { tracks  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().tracklist),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().tracklist__list),\n            children: tracks.map((track)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().tracklist__item),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().tracklist__item_title),\n                            children: track.title\n                        }, void 0, false, {\n                            fileName: \"/Users/samsung/Desktop/ui/src/components/_scrolltracklist.js\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().tracklist__item_artist),\n                            children: track.artist\n                        }, void 0, false, {\n                            fileName: \"/Users/samsung/Desktop/ui/src/components/_scrolltracklist.js\",\n                            lineNumber: 13,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().tracklist__item_duration),\n                            children: track.duration\n                        }, void 0, false, {\n                            fileName: \"/Users/samsung/Desktop/ui/src/components/_scrolltracklist.js\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, track, true, {\n                    fileName: \"/Users/samsung/Desktop/ui/src/components/_scrolltracklist.js\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/samsung/Desktop/ui/src/components/_scrolltracklist.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/samsung/Desktop/ui/src/components/_scrolltracklist.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TrackList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrackList);\nvar _c;\n$RefreshReg$(_c, \"TrackList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9fc2Nyb2xsdHJhY2tsaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQzFCLDhDQUE4QztBQUM5QywwQ0FBMEM7QUFDRztBQUU3QyxNQUFNRSxZQUFZLFNBQWdCO1FBQWYsRUFBRUMsT0FBTSxFQUFFO0lBQzNCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXSiwwRUFBZ0I7a0JBQzlCLDRFQUFDTTtZQUFHRixXQUFXSixnRkFBc0I7c0JBQ2xDRSxPQUFPTSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNDO29CQUFlTixXQUFXSixnRkFBc0I7O3NDQUMvQyw4REFBQ0c7NEJBQUlDLFdBQVdKLHNGQUE0QjtzQ0FBR1MsTUFBTUksS0FBSzs7Ozs7O3NDQUMxRCw4REFBQ1Y7NEJBQUlDLFdBQVdKLHVGQUE2QjtzQ0FBR1MsTUFBTU0sTUFBTTs7Ozs7O3NDQUM1RCw4REFBQ1o7NEJBQUlDLFdBQVdKLHlGQUErQjtzQ0FBR1MsTUFBTVEsUUFBUTs7Ozs7OzttQkFIekRSOzs7Ozs7Ozs7Ozs7Ozs7QUFTbkI7S0FkTVI7QUFnQk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvX3Njcm9sbHRyYWNrbGlzdC5qcz81NjBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UcmFja0xpc3QubW9kdWxlLmNzc1wiO1xuLy9tYWtlIGluZGl2aWR1YWwgQ1NTIGZvciBlYWNoIGNvbXBvbmVudC4uXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3QgVHJhY2tMaXN0ID0gKHsgdHJhY2tzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrbGlzdH0+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudHJhY2tsaXN0X19saXN0fT5cbiAgICAgICAge3RyYWNrcy5tYXAoKHRyYWNrKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dHJhY2t9IGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrbGlzdF9faXRlbX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrbGlzdF9faXRlbV90aXRsZX0+e3RyYWNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmFja2xpc3RfX2l0ZW1fYXJ0aXN0fT57dHJhY2suYXJ0aXN0fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmFja2xpc3RfX2l0ZW1fZHVyYXRpb259Pnt0cmFjay5kdXJhdGlvbn08L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFja0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJUcmFja0xpc3QiLCJ0cmFja3MiLCJkaXYiLCJjbGFzc05hbWUiLCJ0cmFja2xpc3QiLCJ1bCIsInRyYWNrbGlzdF9fbGlzdCIsIm1hcCIsInRyYWNrIiwibGkiLCJ0cmFja2xpc3RfX2l0ZW0iLCJ0cmFja2xpc3RfX2l0ZW1fdGl0bGUiLCJ0aXRsZSIsInRyYWNrbGlzdF9faXRlbV9hcnRpc3QiLCJhcnRpc3QiLCJ0cmFja2xpc3RfX2l0ZW1fZHVyYXRpb24iLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/_scrolltracklist.js\n"));

/***/ })

});