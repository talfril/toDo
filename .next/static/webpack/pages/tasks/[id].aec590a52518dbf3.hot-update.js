"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tasks/[id]",{

/***/ "./src/pages/tasks/[id].tsx":
/*!**********************************!*\
  !*** ./src/pages/tasks/[id].tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Card,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,Card,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/layout */ \"./src/components/layout/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TaskPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)({\n        \"TaskPage.useSelector[tasks]\": (state)=>state.tasks.tasks\n    }[\"TaskPage.useSelector[tasks]\"]);\n    const task = tasks.find((task)=>task.id === Number(id));\n    if (!task) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                variant: \"h6\",\n                children: \"Задача не найдена\"\n            }, void 0, false, {\n                fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                    variant: \"h2\",\n                    color: \"primary\",\n                    children: [\n                        \"Задача №\",\n                        task.id\n                    ]\n                }, void 0, true, {\n                    fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            variant: \"h6\",\n                            children: task.title\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            variant: \"body1\",\n                            children: [\n                                \"Статус: \",\n                                task.completed ? \"Выполнена\" : \"Не выполнена\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    variant: \"contained\",\n                    onClick: ()=>router.push(\"/\"),\n                    children: \"Вернуться к списку задач\"\n                }, void 0, false, {\n                    fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TaskPage, \"XQ+coCC3b30MkU+CL5YAJX6jyPY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = TaskPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskPage);\nvar _c;\n$RefreshReg$(_c, \"TaskPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGFza3MvW2lkXS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2M7QUFDRTtBQUVvQjtBQUNWO0FBRXBELE1BQU1RLFdBQVc7O0lBQ2YsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsRUFBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFM0IsTUFBTUMsUUFBUVYsd0RBQVdBO3VDQUFDLENBQUNXLFFBQXFCQSxNQUFNRCxLQUFLLENBQUNBLEtBQUs7O0lBQ2pFLE1BQU1FLE9BQU9GLE1BQU1HLElBQUksQ0FBQyxDQUFDRCxPQUFTQSxLQUFLSixFQUFFLEtBQUtNLE9BQU9OO0lBRXJELElBQUksQ0FBQ0ksTUFBTTtRQUNULHFCQUNFLDhEQUFDUCxpRUFBTUE7c0JBQ0wsNEVBQUNILHNHQUFVQTtnQkFBQ2EsU0FBUTswQkFBSzs7Ozs7Ozs7Ozs7SUFHL0I7SUFFQSxxQkFDRSw4REFBQ1YsaUVBQU1BO2tCQUNMLDRFQUFDSiwrRkFBR0E7OzhCQUNGLDhEQUFDQyxzR0FBVUE7b0JBQUNhLFNBQVE7b0JBQUtDLE9BQU07O3dCQUFVO3dCQUM5QkosS0FBS0osRUFBRTs7Ozs7Ozs4QkFFbEIsOERBQUNKLGdHQUFJQTs7c0NBQ0gsOERBQUNGLHNHQUFVQTs0QkFBQ2EsU0FBUTtzQ0FBTUgsS0FBS0ssS0FBSzs7Ozs7O3NDQUNwQyw4REFBQ2Ysc0dBQVVBOzRCQUFDYSxTQUFROztnQ0FBUTtnQ0FDakJILEtBQUtNLFNBQVMsR0FBRyxjQUFjOzs7Ozs7Ozs7Ozs7OzhCQUc1Qyw4REFBQ2Ysa0dBQU1BO29CQUFDWSxTQUFRO29CQUFZSSxTQUFTLElBQU1aLE9BQU9hLElBQUksQ0FBQzs4QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckU7R0FqQ01kOztRQUNXUCxrREFBU0E7UUFHVkMsb0RBQVdBOzs7S0FKckJNO0FBbUNOLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJBOlxcQW5ueVxcQW5ueVByb2dyYW1tZXJcXNGC0LXRgdGC0L7QstGL0LVcXHRvRG9cXHNyY1xccGFnZXNcXHRhc2tzXFxbaWRdLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBCdXR0b24sIENhcmQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXRcIjtcclxuXHJcbmNvbnN0IFRhc2tQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgY29uc3QgdGFza3MgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudGFza3MudGFza3MpO1xyXG4gIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBOdW1iZXIoaWQpKTtcclxuXHJcbiAgaWYgKCF0YXNrKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz7Ql9Cw0LTQsNGH0LAg0L3QtSDQvdCw0LnQtNC10L3QsDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInIGNvbG9yPSdwcmltYXJ5Jz5cclxuICAgICAgICAgINCX0LDQtNCw0YfQsCDihJZ7dGFzay5pZH1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+e3Rhc2sudGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxyXG4gICAgICAgICAgICDQodGC0LDRgtGD0YE6IHt0YXNrLmNvbXBsZXRlZCA/IFwi0JLRi9C/0L7Qu9C90LXQvdCwXCIgOiBcItCd0LUg0LLRi9C/0L7Qu9C90LXQvdCwXCJ9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9PlxyXG4gICAgICAgICAg0JLQtdGA0L3Rg9GC0YzRgdGPINC6INGB0L/QuNGB0LrRgyDQt9Cw0LTQsNGHXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWxlY3RvciIsIkJveCIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJDYXJkIiwiTGF5b3V0IiwiVGFza1BhZ2UiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidGFza3MiLCJzdGF0ZSIsInRhc2siLCJmaW5kIiwiTnVtYmVyIiwidmFyaWFudCIsImNvbG9yIiwidGl0bGUiLCJjb21wbGV0ZWQiLCJvbkNsaWNrIiwicHVzaCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/tasks/[id].tsx\n"));

/***/ })

});