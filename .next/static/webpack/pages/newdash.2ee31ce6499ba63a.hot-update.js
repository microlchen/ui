"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/newdash",{

/***/ "./src/components/_avatarmenu.js":
/*!***************************************!*\
  !*** ./src/components/_avatarmenu.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _active_generalbutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active/_generalbutton */ \"./src/components/active/_generalbutton.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\n\n\n\nfunction Menua(props) {\n    const logout = ()=>{\n        alert(\"This will log you out, not integrated yet\");\n    };\n    const deleteuser = ()=>{\n        alert(\"This will delete all tracklist, not integrated yet\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n        id: \"simple-menu\",\n        anchorEl: props.anchor,\n        keepMounted: true,\n        open: Boolean(props.anchor),\n        onClose: props.function,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_active_generalbutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    name: \"Log Out\",\n                    function1: logout\n                }, void 0, false, {\n                    fileName: \"/Users/samsung/Desktop/ui/src/components/_avatarmenu.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/samsung/Desktop/ui/src/components/_avatarmenu.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_active_generalbutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    name: \"Delete User Data\",\n                    function1: deleteuser\n                }, void 0, false, {\n                    fileName: \"/Users/samsung/Desktop/ui/src/components/_avatarmenu.js\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/samsung/Desktop/ui/src/components/_avatarmenu.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/samsung/Desktop/ui/src/components/_avatarmenu.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = Menua;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menua);\nvar _c;\n$RefreshReg$(_c, \"Menua\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9fYXZhdGFybWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMwQjtBQUN1QjtBQU8xQjtBQUV2QixTQUFTTyxNQUFNQyxLQUFLLEVBQUU7SUFFbEIsTUFBTUMsU0FBUyxJQUFNO1FBQ2pCQyxNQUFNO0lBQ1Y7SUFFQSxNQUFNQyxhQUFhLElBQU07UUFDckJELE1BQU07SUFDVjtJQUVBLHFCQUNJLDhEQUFDTiwrQ0FBSUE7UUFDRFEsSUFBRztRQUNIQyxVQUFVTCxNQUFNTSxNQUFNO1FBQ3RCQyxXQUFXO1FBQ1hDLE1BQU1DLFFBQVFULE1BQU1NLE1BQU07UUFDMUJJLFNBQVNWLE1BQU1XLFFBQVE7OzBCQUV2Qiw4REFBQ2QsbURBQVFBOzBCQUNULDRFQUFDSiw2REFBVUE7b0JBQUNtQixNQUFLO29CQUFVQyxXQUFXWjs7Ozs7Ozs7Ozs7MEJBRXRDLDhEQUFDSixtREFBUUE7MEJBQ1QsNEVBQUNKLDZEQUFVQTtvQkFBQ21CLE1BQUs7b0JBQW1CQyxXQUFXVjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0Q7S0E3QlNKO0FBK0JULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL19hdmF0YXJtZW51LmpzPzNjNjciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5CdXR0b24gZnJvbSAnLi9hY3RpdmUvX2dlbmVyYWxidXR0b24nO1xuaW1wb3J0IHtcbiAgICBCdXR0b24sXG4gICAgRHJhd2VyLFxuICAgIE1lbnUsXG4gICAgTWVudUl0ZW0sXG4gICAgQWxlcnRcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZnVuY3Rpb24gTWVudWEocHJvcHMpIHtcblxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJUaGlzIHdpbGwgbG9nIHlvdSBvdXQsIG5vdCBpbnRlZ3JhdGVkIHlldFwiKVxuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGV1c2VyID0gKCkgPT4ge1xuICAgICAgICBhbGVydChcIlRoaXMgd2lsbCBkZWxldGUgYWxsIHRyYWNrbGlzdCwgbm90IGludGVncmF0ZWQgeWV0XCIpXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNZW51XG4gICAgICAgICAgICBpZD1cInNpbXBsZS1tZW51XCJcbiAgICAgICAgICAgIGFuY2hvckVsPXtwcm9wcy5hbmNob3J9XG4gICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihwcm9wcy5hbmNob3IpfVxuICAgICAgICAgICAgb25DbG9zZT17cHJvcHMuZnVuY3Rpb259XG4gICAgICAgID4gICBcbiAgICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgIDxNYWluQnV0dG9uIG5hbWU9XCJMb2cgT3V0XCIgZnVuY3Rpb24xPXtsb2dvdXR9Lz5cbiAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICA8TWFpbkJ1dHRvbiBuYW1lPVwiRGVsZXRlIFVzZXIgRGF0YVwiIGZ1bmN0aW9uMT17ZGVsZXRldXNlcn0vPlxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvTWVudT5cblxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVhO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWFpbkJ1dHRvbiIsIkJ1dHRvbiIsIkRyYXdlciIsIk1lbnUiLCJNZW51SXRlbSIsIkFsZXJ0IiwiTWVudWEiLCJwcm9wcyIsImxvZ291dCIsImFsZXJ0IiwiZGVsZXRldXNlciIsImlkIiwiYW5jaG9yRWwiLCJhbmNob3IiLCJrZWVwTW91bnRlZCIsIm9wZW4iLCJCb29sZWFuIiwib25DbG9zZSIsImZ1bmN0aW9uIiwibmFtZSIsImZ1bmN0aW9uMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/_avatarmenu.js\n"));

/***/ }),

/***/ "./src/components/_lobbytesting.js":
/*!*****************************************!*\
  !*** ./src/components/_lobbytesting.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _active_generalbutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./active/_generalbutton */ \"./src/components/active/_generalbutton.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Lobby2() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            name: \"User\"\n        },\n        {\n            id: 2,\n            name: \"User\"\n        },\n        {\n            id: 3,\n            name: \"User\"\n        }\n    ]);\n    const addUser = (newUser)=>{\n        setUsers([\n            ...users,\n            newUser\n        ]);\n    };\n    const removeUser = (userId)=>{\n        setUsers(users.filter((user)=>user.id !== userId));\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        const newName = event.target.name.value;\n        const newId = users.length + 1;\n        const newUser = {\n            id: newId,\n            name: newName\n        };\n        addUser(newUser);\n        event.target.reset();\n    };\n    const lobbyID = \"LOBBY ID\";\n    const friend = \"/dashboard/friend.png\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().halfsize),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().functionicon),\n                            src: friend\n                        }, void 0, false, {\n                            fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().friendmatch),\n                            children: lobbyID\n                        }, void 0, false, {\n                            fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().innerfilebox),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().textfield),\n                                type: \"text\",\n                                name: \"name\",\n                                required: true,\n                                placeholder: \"Enter Your Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                type: \"submit\",\n                                children: \"Join Lobby\"\n                            }, void 0, false, {\n                                fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().iagreewiththeter),\n                                children: \"Current Party\"\n                            }, void 0, false, {\n                                fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().iagreewiththeter),\n                                        children: [\n                                            user.name,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttontext),\n                                                onClick: ()=>removeUser(user.id),\n                                                children: \"Leave lobby\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, user.id, true, {\n                                        fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/samsung/Desktop/ui/src/components/_lobbytesting.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Lobby2, \"/5ja5lKf4qR7N1LxByc+9oZUj94=\");\n_c = Lobby2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lobby2);\nvar _c;\n$RefreshReg$(_c, \"Lobby2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9fbG9iYnl0ZXN0aW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0s7QUFJdEI7QUFDMEI7QUFFakQsU0FBU00sU0FBUzs7SUFDaEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ2pDO1lBQUVRLElBQUk7WUFBR0MsTUFBTTtRQUFPO1FBQ3RCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFPO1FBQ3RCO1lBQUVELElBQUk7WUFBR0MsTUFBTTtRQUFPO0tBQ3ZCO0lBRUQsTUFBTUMsVUFBVSxDQUFDQyxVQUFZO1FBQzNCSixTQUFTO2VBQUlEO1lBQU9LO1NBQVE7SUFDOUI7SUFFQSxNQUFNQyxhQUFhLENBQUNDLFNBQVc7UUFDN0JOLFNBQVNELE1BQU1RLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLUCxFQUFFLEtBQUtLO0lBQzlDO0lBRUEsTUFBTUcsZUFBZSxDQUFDQyxRQUFVO1FBQzlCQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLFVBQVVGLE1BQU1HLE1BQU0sQ0FBQ1gsSUFBSSxDQUFDWSxLQUFLO1FBQ3ZDLE1BQU1DLFFBQVFoQixNQUFNaUIsTUFBTSxHQUFHO1FBQzdCLE1BQU1aLFVBQVU7WUFBRUgsSUFBSWM7WUFBT2IsTUFBTVU7UUFBUTtRQUMzQ1QsUUFBUUM7UUFDUk0sTUFBTUcsTUFBTSxDQUFDSSxLQUFLO0lBQ3BCO0lBRUEsTUFBTUMsVUFBVTtJQUVoQixNQUFNQyxTQUFTO0lBQ2YscUJBQ0UsOERBQUNDO2tCQUVDLDRFQUFDQTtZQUFJQyxXQUFXM0IseUVBQWU7OzhCQUM3Qiw4REFBQzBCO29CQUFJQyxXQUFXM0Isc0VBQVk7O3NDQUMxQiw4REFBQzhCOzRCQUFJSCxXQUFXM0IsNkVBQW1COzRCQUFFZ0MsS0FBS1A7Ozs7OztzQ0FDMUMsOERBQUNDOzRCQUFJQyxXQUFXM0IsNEVBQWtCO3NDQUFHd0I7Ozs7Ozs7Ozs7Ozs4QkFHdkMsOERBQUNFO29CQUFJQyxXQUFXM0IsNkVBQW1COzhCQUNuQyw0RUFBQ21DO3dCQUFLQyxVQUFVckI7OzBDQUNkLDhEQUFDc0I7Z0NBQU1WLFdBQVczQiwwRUFBZ0I7Z0NBQUV1QyxNQUFLO2dDQUFPL0IsTUFBSztnQ0FBT2dDLFFBQVE7Z0NBQUNDLGFBQVk7Ozs7OzswQ0FDakYsOERBQUN4QyxpREFBTUE7Z0NBQUNzQyxNQUFLOzBDQUFTOzs7Ozs7MENBQ3RCLDhEQUFDYjtnQ0FBSUMsV0FBVzNCLGlGQUF1QjswQ0FBRTs7Ozs7OzBDQUN6Qyw4REFBQzJDOzBDQUNFdEMsTUFBTXVDLEdBQUcsQ0FBQyxDQUFDOUIscUJBQ1YsOERBQUNZO3dDQUFJQyxXQUFXM0IsaUZBQXVCOzs0Q0FFcENjLEtBQUtOLElBQUk7NENBQUM7MERBQUMsOERBQUNxQztnREFBT2xCLFdBQVczQiwyRUFBaUI7Z0RBQUUrQyxTQUFTLElBQU1wQyxXQUFXRyxLQUFLUCxFQUFFOzBEQUFHOzs7Ozs7O3VDQUYxQ08sS0FBS1AsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbkU7R0F4RFNIO0tBQUFBO0FBeURULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL19sb2JieXRlc3RpbmcuanM/OGFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRHJhd2VyLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IE1haW5CdXR0b24gZnJvbSAnLi9hY3RpdmUvX2dlbmVyYWxidXR0b24nO1xuXG5mdW5jdGlvbiBMb2JieTIoKSB7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW1xuICAgIHsgaWQ6IDEsIG5hbWU6ICdVc2VyJyB9LFxuICAgIHsgaWQ6IDIsIG5hbWU6ICdVc2VyJyB9LFxuICAgIHsgaWQ6IDMsIG5hbWU6ICdVc2VyJyB9LFxuICBdKTtcblxuICBjb25zdCBhZGRVc2VyID0gKG5ld1VzZXIpID0+IHtcbiAgICBzZXRVc2VycyhbLi4udXNlcnMsIG5ld1VzZXJdKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVVc2VyID0gKHVzZXJJZCkgPT4ge1xuICAgIHNldFVzZXJzKHVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci5pZCAhPT0gdXNlcklkKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdOYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWUudmFsdWU7XG4gICAgY29uc3QgbmV3SWQgPSB1c2Vycy5sZW5ndGggKyAxO1xuICAgIGNvbnN0IG5ld1VzZXIgPSB7IGlkOiBuZXdJZCwgbmFtZTogbmV3TmFtZSB9O1xuICAgIGFkZFVzZXIobmV3VXNlcik7XG4gICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XG4gIH07XG5cbiAgY29uc3QgbG9iYnlJRCA9IFwiTE9CQlkgSURcIlxuXG4gIGNvbnN0IGZyaWVuZCA9IFwiL2Rhc2hib2FyZC9mcmllbmQucG5nXCI7XG4gIHJldHVybiAoXG4gICAgPGRpdj4gICAgICBcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oYWxmc2l6ZX0gPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmZ1bmN0aW9uaWNvbn0gc3JjPXtmcmllbmR9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mcmllbmRtYXRjaH0+e2xvYmJ5SUR9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJmaWxlYm94fT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLnRleHRmaWVsZH0gdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBOYW1lXCIvPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkpvaW4gTG9iYnk8L0J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlhZ3JlZXdpdGh0aGV0ZXJ9PkN1cnJlbnQgUGFydHk8L2Rpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dXNlcnMubWFwKCh1c2VyKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWFncmVld2l0aHRoZXRlcn0ga2V5PXt1c2VyLmlkfT5cbiAgICAgICAgICAgICAgICB7LyogTkVFRCBUTyBBREQgU1RZTEVTICovfVxuICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9IDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9udGV4dH0gb25DbGljaz17KCkgPT4gcmVtb3ZlVXNlcih1c2VyLmlkKX0+TGVhdmUgbG9iYnk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExvYmJ5MjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkJ1dHRvbiIsIkRyYXdlciIsIk1haW5CdXR0b24iLCJMb2JieTIiLCJ1c2VycyIsInNldFVzZXJzIiwiaWQiLCJuYW1lIiwiYWRkVXNlciIsIm5ld1VzZXIiLCJyZW1vdmVVc2VyIiwidXNlcklkIiwiZmlsdGVyIiwidXNlciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdOYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJuZXdJZCIsImxlbmd0aCIsInJlc2V0IiwibG9iYnlJRCIsImZyaWVuZCIsImRpdiIsImNsYXNzTmFtZSIsImhhbGZzaXplIiwidGl0bGUiLCJpbWciLCJmdW5jdGlvbmljb24iLCJzcmMiLCJmcmllbmRtYXRjaCIsImlubmVyZmlsZWJveCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidGV4dGZpZWxkIiwidHlwZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJpYWdyZWV3aXRodGhldGVyIiwidWwiLCJtYXAiLCJidXR0b24iLCJidXR0b250ZXh0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/_lobbytesting.js\n"));

/***/ }),

/***/ "./src/components/active/_generalbutton.js":
/*!*************************************************!*\
  !*** ./src/components/active/_generalbutton.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\n\n\nconst MainButton = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            flexDirection: \"row\",\n            // width:\"30vw\", \n            // height: \"60px\", \n            // borderRadius:\"30px\",\n            // background: \"#BAC0F1\",\n            alignSelf: \"center\",\n            marginBottom: \"40px\",\n            display: \"flex\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n            variant: \"contained\",\n            href: \"\\\\vibePicker\",\n            sx: {\n                height: 50,\n                width: 150,\n                color: \"primary.textD\"\n            },\n            children: props.name\n        }, void 0, false, {\n            fileName: \"/Users/samsung/Desktop/ui/src/components/active/_generalbutton.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/samsung/Desktop/ui/src/components/active/_generalbutton.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_c = MainButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainButton); //HONESTLY THIS COULD BE ANY GENERAL BUTTON\n //CREATE PLALIST, LOGOUT\nvar _c;\n$RefreshReg$(_c, \"MainButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3RpdmUvX2dlbmVyYWxidXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFHdEI7QUFHdkIsTUFBTUUsYUFBYSxDQUFDQyxRQUFVO0lBRzFCLHFCQUNJLDhEQUFDQztRQUFJQyxPQUFTO1lBQ1ZDLGVBQWM7WUFDZCxpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLHVCQUF1QjtZQUN2Qix5QkFBeUI7WUFDekJDLFdBQVU7WUFDVkMsY0FBYTtZQUNiQyxTQUFTO1FBQU07a0JBQ2YsNEVBQUNSLGlEQUFNQTtZQUFDUyxTQUFRO1lBQVlDLE1BQUs7WUFBY0MsSUFBSTtnQkFBQ0MsUUFBTztnQkFBSUMsT0FBTTtnQkFBSUMsT0FBTTtZQUFlO3NCQUFJWixNQUFNYSxJQUFJOzs7Ozs7Ozs7OztBQUd4SDtLQWhCTWQ7QUFpQk4sK0RBQWVBLFVBQVVBLEVBQUMsQ0FFMUIsMkNBQTJDO0NBRTNDLHdCQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY3RpdmUvX2dlbmVyYWxidXR0b24uanM/MGMyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7XG4gICAgQnV0dG9uLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5cbmNvbnN0IE1haW5CdXR0b24gPSAocHJvcHMpID0+IHtcbiAgICBcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBzdHlsZSA9IHt7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsIFxuICAgICAgICAgICAgLy8gd2lkdGg6XCIzMHZ3XCIsIFxuICAgICAgICAgICAgLy8gaGVpZ2h0OiBcIjYwcHhcIiwgXG4gICAgICAgICAgICAvLyBib3JkZXJSYWRpdXM6XCIzMHB4XCIsXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBcIiNCQUMwRjFcIixcbiAgICAgICAgICAgIGFsaWduU2VsZjpcImNlbnRlclwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOlwiNDBweFwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCJ9fT5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGhyZWY9XCJcXHZpYmVQaWNrZXJcIiBzeD17e2hlaWdodDo1MCwgd2lkdGg6MTUwLGNvbG9yOlwicHJpbWFyeS50ZXh0RFwifX0+e3Byb3BzLm5hbWV9PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBNYWluQnV0dG9uO1xuXG4vL0hPTkVTVExZIFRISVMgQ09VTEQgQkUgQU5ZIEdFTkVSQUwgQlVUVE9OXG5cbi8vQ1JFQVRFIFBMQUxJU1QsIExPR09VVCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJCdXR0b24iLCJNYWluQnV0dG9uIiwicHJvcHMiLCJkaXYiLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnblNlbGYiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwidmFyaWFudCIsImhyZWYiLCJzeCIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/active/_generalbutton.js\n"));

/***/ })

});