"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lobby",{

/***/ "./src/pages/lobby.js":
/*!****************************!*\
  !*** ./src/pages/lobby.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _lobby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lobby */ \"./src/pages/_lobby.js\");\n/* harmony import */ var _components_friendbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/_friendbar */ \"./src/components/_friendbar.js\");\n/* harmony import */ var _components_deleteuserdata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/_deleteuserdata */ \"./src/components/_deleteuserdata.js\");\n/* harmony import */ var _components_generatelistbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/_generatelistbar */ \"./src/components/_generatelistbar.js\");\n/* harmony import */ var _components_scrolltracklist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/_scrolltracklist */ \"./src/components/_scrolltracklist.js\");\n/* harmony import */ var _components_loadingscreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/_loadingscreen */ \"./src/components/_loadingscreen.js\");\n/* harmony import */ var _components_avatarmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/_avatarmenu */ \"./src/components/_avatarmenu.js\");\n/* harmony import */ var _components_lobbytesting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/_lobbytesting */ \"./src/components/_lobbytesting.js\");\n/* harmony import */ var _components_generalbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/_generalbutton */ \"./src/components/_generalbutton.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const untitledArtwork = \"/landing/logo.png\";\n    const home = \"/dashboard/home.png\";\n    const friend = \"/dashboard/friend.png\";\n    const vibepicker = \"/dashboard/vibepicker.png\";\n    const vector = \"/dashboard/vector.png\";\n    const avatar = \"/dashboard/Avatar.png\";\n    var ready = true;\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const [anchorPlaylist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const openPlaylist = (event)=>{\n        setPlaylist(event.currentTarget);\n    };\n    const closePlaylist = ()=>{\n        setPlaylist(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().all),\n        style: {\n            backgroundColor: \"#282634\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashboard),\n            style: {\n                height: \"100vh\",\n                flexDirection: \"column\",\n                backgroundColor: \"#282634\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        flexDirection: \"row\",\n                        width: \"100vw\",\n                        height: \"120px\",\n                        minWidth: \"100vw\",\n                        justifyContent: \"space-around\",\n                        background: \"#494362\",\n                        display: \"flex\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            justifyContent: \"space-around\",\n                            flexDirection: \"column\",\n                            fontFamily: \"Inter, sans-serif\",\n                            fontSize: \"200%\",\n                            fontWeight: \"100\",\n                            color: \"#CAD6FF\",\n                            letterSpacing: \"5px\",\n                            alignSelf: \"center\",\n                            marginTop: \"10px\"\n                        },\n                        children: \"LOBBY\"\n                    }, void 0, false, {\n                        fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        flexDirection: \"row\",\n                        width: \"100vw\",\n                        height: \"30px\",\n                        minWidth: \"100vw\",\n                        justifyContent: \"center\",\n                        boxShadow: \"22px #191722\",\n                        borderRadius: \"0px 0px 30px 30px\",\n                        background: \"#67617C\",\n                        display: \"flex\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                flexDirection: \"column\",\n                                fontFamily: \"Inter, sans-serif\",\n                                fontSize: \"75%\",\n                                fontWeight: \"500\",\n                                color: \"#B5BFDC\",\n                                letterSpacing: \"1px\",\n                                alignSelf: \"center\"\n                            },\n                            children: \"INVITATION LINK:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n                            lineNumber: 72,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                flexDirection: \"column\",\n                                fontFamily: \"Inter, sans-serif\",\n                                fontSize: \"75%\",\n                                fontWeight: \"100\",\n                                color: \"#B5BFDC\",\n                                letterSpacing: \"1px\",\n                                alignSelf: \"center\",\n                                marginLeft: \"10px\"\n                            },\n                            children: \"http://localhost:3000/lobby\"\n                        }, void 0, false, {\n                            fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().dashboardbox),\n                    style: {\n                        flexDirection: \"column\",\n                        marginTop: \"30px\",\n                        justifyContent: \"space-between\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                flexDirection: \"row\",\n                                width: \"30vw\",\n                                height: \"60px\",\n                                borderRadius: \"30px\",\n                                background: \"#BAC0F1\",\n                                alignSelf: \"center\",\n                                display: \"flex\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    classname: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().untitledartworkdash3),\n                                    style: {\n                                        marginTop: \"5px\",\n                                        marginBottom: \"5px\",\n                                        marginRight: \"10px\",\n                                        marginLeft: \"5px\",\n                                        width: \"50px\",\n                                        height: \"auto\"\n                                    },\n                                    src: avatar\n                                }, void 0, false, {\n                                    fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        flexDirection: \"column\",\n                                        fontFamily: \"Inter, sans-serif\",\n                                        fontSize: \"80%\",\n                                        fontWeight: \"500\",\n                                        color: \"#494362\",\n                                        letterSpacing: \"1px\",\n                                        alignSelf: \"center\",\n                                        marginLeft: \"10px\"\n                                    },\n                                    children: \"FRIEND 1\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                flexDirection: \"row\",\n                                width: \"30vw\",\n                                height: \"60px\",\n                                borderRadius: \"30px\",\n                                background: \"#BAC0F1\",\n                                alignSelf: \"center\",\n                                marginBottom: \"30px\",\n                                display: \"flex\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_generalbutton__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n                                lineNumber: 115,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n                            lineNumber: 106,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"qWh29NqCIGbphYJPPGJqgD196BM=\");\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OENBQ3ZLLDhEQUFDWTtvQ0FBSUcsT0FBUzt3Q0FBQ0ksZUFBZTt3Q0FBVU0sWUFBVzt3Q0FBcUJDLFVBQVU7d0NBQU9DLFlBQVc7d0NBQU9DLE9BQU87d0NBQVdDLGVBQWM7d0NBQU9DLFdBQVU7d0NBQVVJLFlBQVk7b0NBQU07OENBQUc7Ozs7Ozs7Ozs7OztzQ0FpQi9MLDhEQUFDdEI7NEJBQUlHLE9BQVM7Z0NBQ1ZJLGVBQWM7Z0NBQ2RDLE9BQU07Z0NBQ05GLFFBQVE7Z0NBQ1JlLGNBQWE7Z0NBQ2JWLFlBQVk7Z0NBQ1pPLFdBQVU7Z0NBQ1ZTLGNBQWE7Z0NBQ2JmLFNBQVM7NEJBQU07c0NBQ2YsNEVBQUMvQixrRUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNuQyxDQUFDO0dBeEd1QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvYmJ5LmpzPzBhNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIERyYXdlcixcbiAgICBNZW51LFxuICAgIE1lbnVJdGVtXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYmJ5IGZyb20gXCIuL19sb2JieVwiO1xuaW1wb3J0IEZyaWVuZExpc3RTaWRlYmFyIGZyb20gXCJAL2NvbXBvbmVudHMvX2ZyaWVuZGJhclwiO1xuaW1wb3J0IEZ1bGxDYW52YXNCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9fZGVsZXRldXNlcmRhdGFcIjtcbmltcG9ydCBQbGF5bGlzdFNpZGViYXIgZnJvbSBcIkAvY29tcG9uZW50cy9fZ2VuZXJhdGVsaXN0YmFyXCI7XG5pbXBvcnQgVHJhY2tMaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvX3Njcm9sbHRyYWNrbGlzdFwiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIkAvY29tcG9uZW50cy9fbG9hZGluZ3NjcmVlblwiO1xuaW1wb3J0IE1lbnVhIGZyb20gXCJAL2NvbXBvbmVudHMvX2F2YXRhcm1lbnVcIjtcbmltcG9ydCBMb2JieTIgZnJvbSBcIkAvY29tcG9uZW50cy9fbG9iYnl0ZXN0aW5nXCI7XG5pbXBvcnQgTWFpbkJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL19nZW5lcmFsYnV0dG9uXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAgIGNvbnN0IHVudGl0bGVkQXJ0d29yayA9IFwiL2xhbmRpbmcvbG9nby5wbmdcIjtcbiAgICBjb25zdCBob21lID0gXCIvZGFzaGJvYXJkL2hvbWUucG5nXCI7XG4gICAgY29uc3QgZnJpZW5kID0gXCIvZGFzaGJvYXJkL2ZyaWVuZC5wbmdcIjtcbiAgICBjb25zdCB2aWJlcGlja2VyID0gXCIvZGFzaGJvYXJkL3ZpYmVwaWNrZXIucG5nXCI7XG4gICAgY29uc3QgdmVjdG9yID0gXCIvZGFzaGJvYXJkL3ZlY3Rvci5wbmdcIjtcbiAgICBjb25zdCBhdmF0YXIgPSBcIi9kYXNoYm9hcmQvQXZhdGFyLnBuZ1wiO1xuICAgIFxuICAgIHZhciByZWFkeSA9IHRydWU7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xuICAgIH07XG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IFthbmNob3JQbGF5bGlzdCwgc2V0UGxheWxpc3RdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qgb3BlblBsYXlsaXN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFBsYXlsaXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIH07XG4gICAgY29uc3QgY2xvc2VQbGF5bGlzdCA9ICgpID0+IHtcbiAgICAgICAgc2V0UGxheWxpc3QobnVsbCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxsfSBzdHlsZSA9IHt7YmFja2dyb3VuZENvbG9yOlwiIzI4MjYzNFwifX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhc2hib2FyZH0gc3R5bGUgPSB7e2hlaWdodDogXCIxMDB2aFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwgYmFja2dyb3VuZENvbG9yOlwiIzI4MjYzNFwifX0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIiwgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOlwiMTAwdndcIiwgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjBweFwiLCBcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6XCIxMDB2d1wiLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwiLCBcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjNDk0MzYyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7eyBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWFyb3VuZFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBmb250RmFtaWx5OlwiSW50ZXIsIHNhbnMtc2VyaWZcIiwgZm9udFNpemU6IFwiMjAwJVwiLCBmb250V2VpZ2h0OlwiMTAwXCIsIGNvbG9yOiBcIiNDQUQ2RkZcIiwgbGV0dGVyU3BhY2luZzpcIjVweFwiLCBhbGlnblNlbGY6XCJjZW50ZXJcIiwgbWFyZ2luVG9wOlwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBMT0JCWVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDpcIjEwMHZ3XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDpcIjEwMHZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCIyMnB4ICMxOTE3MjJcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6XCIwcHggMHB4IDMwcHggMzBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjNjc2MTdDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZm9udEZhbWlseTpcIkludGVyLCBzYW5zLXNlcmlmXCIsIGZvbnRTaXplOiBcIjc1JVwiLCBmb250V2VpZ2h0OlwiNTAwXCIsIGNvbG9yOiBcIiNCNUJGRENcIiwgbGV0dGVyU3BhY2luZzpcIjFweFwiLCBhbGlnblNlbGY6XCJjZW50ZXJcIiwgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSU5WSVRBVElPTiBMSU5LOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgZm9udEZhbWlseTpcIkludGVyLCBzYW5zLXNlcmlmXCIsIGZvbnRTaXplOiBcIjc1JVwiLCBmb250V2VpZ2h0OlwiMTAwXCIsIGNvbG9yOiBcIiNCNUJGRENcIiwgbGV0dGVyU3BhY2luZzpcIjFweFwiLCBhbGlnblNlbGY6XCJjZW50ZXJcIiwgbWFyZ2luTGVmdDogXCIxMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9iYnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhc2hib2FyZGJveH0gc3R5bGUgPSB7e2ZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsbWFyZ2luVG9wOlwiMzBweFwiLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOlwiMzB2d1wiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI2MHB4XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOlwiMzBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjQkFDMEYxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6XCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzbmFtZSA9IHtzdHlsZXMudW50aXRsZWRhcnR3b3JrZGFzaDN9IHN0eWxlID0ge3ttYXJnaW5Ub3A6IFwiNXB4XCIsIG1hcmdpbkJvdHRvbTogXCI1cHhcIiwgbWFyZ2luUmlnaHQ6XCIxMHB4XCIsbWFyZ2luTGVmdDpcIjVweFwiLHdpZHRoOlwiNTBweFwiLCBoZWlnaHQ6XCJhdXRvXCJ9fSBzcmM9e2F2YXRhcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e2ZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGZvbnRGYW1pbHk6XCJJbnRlciwgc2Fucy1zZXJpZlwiLCBmb250U2l6ZTogXCI4MCVcIiwgZm9udFdlaWdodDpcIjUwMFwiLCBjb2xvcjogXCIjNDk0MzYyXCIsIGxldHRlclNwYWNpbmc6XCIxcHhcIiwgYWxpZ25TZWxmOlwiY2VudGVyXCIsIG1hcmdpbkxlZnQ6IFwiMTBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRlJJRU5EIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGUgPSB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XCIyMHB4XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMzAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOlwiMzBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI0UwNzY1RVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjpcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdj57ZW50ZXJSb29tKCl9PC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XCIzMHZ3XCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjYwcHhcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6XCIzMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNCQUMwRjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjpcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOlwiMzBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluQnV0dG9uLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJCdXR0b24iLCJEcmF3ZXIiLCJNZW51IiwiTWVudUl0ZW0iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxvYmJ5IiwiRnJpZW5kTGlzdFNpZGViYXIiLCJGdWxsQ2FudmFzQnV0dG9uIiwiUGxheWxpc3RTaWRlYmFyIiwiVHJhY2tMaXN0IiwiU3Bpbm5lciIsIk1lbnVhIiwiTG9iYnkyIiwiTWFpbkJ1dHRvbiIsIkRhc2hib2FyZCIsInVudGl0bGVkQXJ0d29yayIsImhvbWUiLCJmcmllbmQiLCJ2aWJlcGlja2VyIiwidmVjdG9yIiwiYXZhdGFyIiwicmVhZHkiLCJoYW5kbGVDbGljayIsImV2ZW50Iiwic2V0QW5jaG9yRWwiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJhbmNob3JFbCIsImFuY2hvclBsYXlsaXN0Iiwic2V0UGxheWxpc3QiLCJvcGVuUGxheWxpc3QiLCJjbG9zZVBsYXlsaXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYWxsIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXNoYm9hcmQiLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJtaW5XaWR0aCIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJsZXR0ZXJTcGFjaW5nIiwiYWxpZ25TZWxmIiwibWFyZ2luVG9wIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luTGVmdCIsImRhc2hib2FyZGJveCIsImltZyIsImNsYXNzbmFtZSIsInVudGl0bGVkYXJ0d29ya2Rhc2gzIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/lobby.js\n"));

/***/ })

});