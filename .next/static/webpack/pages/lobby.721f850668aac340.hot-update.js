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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_active_generalbutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/active/_generalbutton */ \"./src/components/active/_generalbutton.js\");\n/* harmony import */ var _components_active_center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/active/_center */ \"./src/components/active/_center.js\");\n/* harmony import */ var _components_active_bannerandsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/active/_bannerandsub */ \"./src/components/active/_bannerandsub.js\");\n/* harmony import */ var _components_active_lobbyparty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/active/_lobbyparty */ \"./src/components/active/_lobbyparty.js\");\n/* harmony import */ var _components_active_mainbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/active/_mainbox */ \"./src/components/active/_mainbox.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const untitledArtwork = \"/landing/logo.png\";\n    const home = \"/dashboard/home.png\";\n    const friend = \"/dashboard/friend.png\";\n    const vibepicker = \"/dashboard/vibepicker.png\";\n    const vector = \"/dashboard/vector.png\";\n    const avatar = \"/dashboard/Avatar.png\";\n    var ready = true;\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const [anchorPlaylist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const openPlaylist = (event)=>{\n        setPlaylist(event.currentTarget);\n    };\n    const closePlaylist = ()=>{\n        setPlaylist(null);\n    };\n    const users = [\n        {\n            id: \"FRIEND1\",\n            avatar: \"/dashboard/Avatar.png\"\n        },\n        {\n            id: \"FRIEND2\",\n            avatar: \"/dashboard/Avatar.png\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_active_mainbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        object1: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_active_bannerandsub__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            main: \"LOBBY\",\n            sub: \"INVITATION LINK:\",\n            more: \"http://localhost:3000/lobby\"\n        }, void 0, false, void 0, void 0),\n        object2: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().dashboardbox),\n            style: {\n                flexDirection: \"column\",\n                marginTop: \"30px\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_active_center__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    object: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_active_lobbyparty__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        users: users\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_active_center__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    object: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_active_generalbutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        name: \"continue\",\n                        loc: \"\\\\vibePicker\"\n                    }, void 0, false, void 0, void 0)\n                }, void 0, false, void 0, void 0)\n            ]\n        }, void 0, true, void 0, void 0)\n    }, void 0, false, {\n        fileName: \"/Users/VanessaWei/Desktop/ui-2/src/pages/lobby.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"qWh29NqCIGbphYJPPGJqgD196BM=\");\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9iYnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDYztBQUNEO0FBQ2U7QUFDVjtBQUNNO0FBQ0M7QUFDTDtBQUVwQyxTQUFTUyxZQUFZOztJQUNoQyxNQUFNQyxrQkFBa0I7SUFDeEIsTUFBTUMsT0FBTztJQUNiLE1BQU1DLFNBQVM7SUFDZixNQUFNQyxhQUFhO0lBQ25CLE1BQU1DLFNBQVM7SUFDZixNQUFNQyxTQUFTO0lBRWYsSUFBSUMsUUFBUSxJQUFJO0lBRWhCLE1BQU1DLGNBQWMsQ0FBQ0MsUUFBVTtRQUMzQkMsWUFBWUQsTUFBTUUsYUFBYTtJQUNuQztJQUVBLE1BQU1DLGNBQWMsSUFBTTtRQUN0QkYsWUFBWSxJQUFJO0lBQ3BCO0lBQ0EsTUFBTSxDQUFDRyxVQUFVSCxZQUFZLEdBQUduQiwyQ0FBYyxDQUFDLElBQUk7SUFFbkQsTUFBTSxDQUFDdUIsZ0JBQWdCQyxZQUFZLEdBQUd0QiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ25ELE1BQU11QixlQUFlLENBQUNQLFFBQVU7UUFDNUJNLFlBQVlOLE1BQU1FLGFBQWE7SUFDbkM7SUFDQSxNQUFNTSxnQkFBZ0IsSUFBTTtRQUN4QkYsWUFBWSxJQUFJO0lBQ3BCO0lBR0EsTUFBTUcsUUFBUTtRQUNWO1lBQUVDLElBQUk7WUFBV2IsUUFBUTtRQUF3QjtRQUNqRDtZQUFFYSxJQUFJO1lBQVdiLFFBQVE7UUFBd0I7S0FFcEQ7SUFFRCxxQkFFSSw4REFBQ1Asa0VBQU9BO1FBQUNxQix1QkFBUyw4REFBQ3ZCLHVFQUFNQTtZQUFDd0IsTUFBSztZQUFRQyxLQUFJO1lBQW1CQyxNQUFLOztRQUMvREMsdUJBQVMsOERBQUNDO1lBQUlDLFdBQVdsQyw2RUFBbUI7WUFBRW9DLE9BQU87Z0JBQUVDLGVBQWU7Z0JBQVVDLFdBQVc7Z0JBQVFDLGdCQUFnQjtZQUFnQjs7OEJBQy9ILDhEQUFDbkMsaUVBQU1BO29CQUFDb0Msc0JBQVEsOERBQUNsQyxxRUFBU0E7d0JBQUNvQixPQUFPQTs7OzhCQUVsQyw4REFBQ3RCLGlFQUFNQTtvQkFBQ29DLHNCQUFRLDhEQUFDckMsd0VBQVVBO3dCQUFDc0MsTUFBSzt3QkFBV0MsS0FBSTs7Ozs7Ozs7OztBQU1oRSxDQUFDO0dBOUN1QmxDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sb2JieS5qcz8wYTRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5CdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9hY3RpdmUvX2dlbmVyYWxidXR0b25cIlxuaW1wb3J0IENlbnRlciBmcm9tIFwiQC9jb21wb25lbnRzL2FjdGl2ZS9fY2VudGVyXCI7XG5pbXBvcnQgQmFubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvYWN0aXZlL19iYW5uZXJhbmRzdWJcIjtcbmltcG9ydCBMb2JieWxpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9hY3RpdmUvX2xvYmJ5cGFydHlcIjtcbmltcG9ydCBNYWluQm94IGZyb20gXCJAL2NvbXBvbmVudHMvYWN0aXZlL19tYWluYm94XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgICBjb25zdCB1bnRpdGxlZEFydHdvcmsgPSBcIi9sYW5kaW5nL2xvZ28ucG5nXCI7XG4gICAgY29uc3QgaG9tZSA9IFwiL2Rhc2hib2FyZC9ob21lLnBuZ1wiO1xuICAgIGNvbnN0IGZyaWVuZCA9IFwiL2Rhc2hib2FyZC9mcmllbmQucG5nXCI7XG4gICAgY29uc3QgdmliZXBpY2tlciA9IFwiL2Rhc2hib2FyZC92aWJlcGlja2VyLnBuZ1wiO1xuICAgIGNvbnN0IHZlY3RvciA9IFwiL2Rhc2hib2FyZC92ZWN0b3IucG5nXCI7XG4gICAgY29uc3QgYXZhdGFyID0gXCIvZGFzaGJvYXJkL0F2YXRhci5wbmdcIjtcblxuICAgIHZhciByZWFkeSA9IHRydWU7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xuICAgIH07XG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IFthbmNob3JQbGF5bGlzdCwgc2V0UGxheWxpc3RdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qgb3BlblBsYXlsaXN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFBsYXlsaXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIH07XG4gICAgY29uc3QgY2xvc2VQbGF5bGlzdCA9ICgpID0+IHtcbiAgICAgICAgc2V0UGxheWxpc3QobnVsbCk7XG4gICAgfTtcblxuXG4gICAgY29uc3QgdXNlcnMgPSBbXG4gICAgICAgIHsgaWQ6IFwiRlJJRU5EMVwiLCBhdmF0YXI6IFwiL2Rhc2hib2FyZC9BdmF0YXIucG5nXCIgfSxcbiAgICAgICAgeyBpZDogXCJGUklFTkQyXCIsIGF2YXRhcjogXCIvZGFzaGJvYXJkL0F2YXRhci5wbmdcIiB9LFxuXG4gICAgXTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPE1haW5Cb3ggb2JqZWN0MT17PEJhbm5lciBtYWluPVwiTE9CQllcIiBzdWI9XCJJTlZJVEFUSU9OIExJTks6XCIgbW9yZT1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2JieVwiIC8+fVxuICAgICAgICAgICAgb2JqZWN0Mj17PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXNoYm9hcmRib3h9IHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIG1hcmdpblRvcDogXCIzMHB4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2VudGVyIG9iamVjdD17PExvYmJ5bGlzdCB1c2Vycz17dXNlcnN9IC8+fSAvPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2PntlbnRlclJvb20oKX08L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPENlbnRlciBvYmplY3Q9ezxNYWluQnV0dG9uIG5hbWU9XCJjb250aW51ZVwiIGxvYz1cIlxcdmliZVBpY2tlclwiIC8+fSAvPlxuICAgICAgICAgICAgPC9kaXY+fSAvPlxuXG5cblxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1haW5CdXR0b24iLCJDZW50ZXIiLCJCYW5uZXIiLCJMb2JieWxpc3QiLCJNYWluQm94IiwiRGFzaGJvYXJkIiwidW50aXRsZWRBcnR3b3JrIiwiaG9tZSIsImZyaWVuZCIsInZpYmVwaWNrZXIiLCJ2ZWN0b3IiLCJhdmF0YXIiLCJyZWFkeSIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJzZXRBbmNob3JFbCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImFuY2hvckVsIiwiYW5jaG9yUGxheWxpc3QiLCJzZXRQbGF5bGlzdCIsIm9wZW5QbGF5bGlzdCIsImNsb3NlUGxheWxpc3QiLCJ1c2VycyIsImlkIiwib2JqZWN0MSIsIm1haW4iLCJzdWIiLCJtb3JlIiwib2JqZWN0MiIsImRpdiIsImNsYXNzTmFtZSIsImRhc2hib2FyZGJveCIsInN0eWxlIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpblRvcCIsImp1c3RpZnlDb250ZW50Iiwib2JqZWN0IiwibmFtZSIsImxvYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/lobby.js\n"));

/***/ })

});