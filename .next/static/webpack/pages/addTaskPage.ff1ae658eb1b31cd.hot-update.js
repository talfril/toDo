"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addTaskPage",{

/***/ "./src/pages/addTaskPage.tsx":
/*!***********************************!*\
  !*** ./src/pages/addTaskPage.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,TextField!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,TextField!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_tasksSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/tasksSlice */ \"./src/store/tasksSlice.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/layout */ \"./src/components/layout/layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst AddTaskPage = ()=>{\n    _s();\n    const [taskTitle, setTaskTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (taskTitle.trim() === \"\") return;\n        const newTask = {\n            id: Date.now(),\n            title: taskTitle,\n            completed: false\n        };\n        dispatch((0,_store_tasksSlice__WEBPACK_IMPORTED_MODULE_2__.addTask)(newTask));\n        setTaskTitle(\"\");\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            component: \"form\",\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                    label: \"Новая задача\",\n                    variant: \"outlined\",\n                    value: taskTitle,\n                    onChange: (e)=>setTaskTitle(e.target.value)\n                }, void 0, false, {\n                    fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\addTaskPage.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    type: \"submit\",\n                    variant: \"contained\",\n                    color: \"primary\",\n                    children: \"Добавить задачу\"\n                }, void 0, false, {\n                    fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\addTaskPage.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\addTaskPage.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\addTaskPage.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddTaskPage, \"DD1DbMr6j8KfXNdiqJmAiIm21Xw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AddTaskPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTaskPage);\nvar _c;\n$RefreshReg$(_c, \"AddTaskPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRkVGFza1BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZTtBQUNiO0FBQ0k7QUFDTjtBQUNTO0FBRWpELE1BQU1TLGNBQXdCOztJQUM1QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQVM7SUFDbkQsTUFBTVcsV0FBV1Asd0RBQVdBO0lBQzVCLE1BQU1RLFNBQVNOLHNEQUFTQTtJQUV4QixNQUFNTyxlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBRWhCLElBQUlOLFVBQVVPLElBQUksT0FBTyxJQUFJO1FBRTdCLE1BQU1DLFVBQVU7WUFDZEMsSUFBSUMsS0FBS0MsR0FBRztZQUNaQyxPQUFPWjtZQUNQYSxXQUFXO1FBQ2I7UUFDQVgsU0FBU04sMERBQU9BLENBQUNZO1FBRWpCUCxhQUFhO1FBQ2JFLE9BQU9XLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUNoQixpRUFBTUE7a0JBQ0wsNEVBQUNKLHlGQUFHQTtZQUFDcUIsV0FBVTtZQUFPQyxVQUFVWjs7OEJBQzlCLDhEQUFDWiwrRkFBU0E7b0JBQ1J5QixPQUFNO29CQUNOQyxTQUFRO29CQUNSQyxPQUFPbkI7b0JBQ1BvQixVQUFVLENBQUNmLElBQU1KLGFBQWFJLEVBQUVnQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs4QkFFOUMsOERBQUMxQiw0RkFBTUE7b0JBQUM2QixNQUFLO29CQUFTSixTQUFRO29CQUFZSyxPQUFNOzhCQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRTtHQXBDTXhCOztRQUVhSixvREFBV0E7UUFDYkUsa0RBQVNBOzs7S0FIcEJFO0FBc0NOLGlFQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJBOlxcQW5ueVxcQW5ueVByb2dyYW1tZXJcXNGC0LXRgdGC0L7QstGL0LVcXHRvRG9cXHNyY1xccGFnZXNcXGFkZFRhc2tQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24sIEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZFRhc2sgfSBmcm9tIFwiLi4vc3RvcmUvdGFza3NTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0XCI7XHJcblxyXG5jb25zdCBBZGRUYXNrUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Rhc2tUaXRsZSwgc2V0VGFza1RpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodGFza1RpdGxlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG5ld1Rhc2sgPSB7XHJcbiAgICAgIGlkOiBEYXRlLm5vdygpLFxyXG4gICAgICB0aXRsZTogdGFza1RpdGxlLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIGRpc3BhdGNoKGFkZFRhc2sobmV3VGFzaykpO1xyXG5cclxuICAgIHNldFRhc2tUaXRsZShcIlwiKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEJveCBjb21wb25lbnQ9J2Zvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgIGxhYmVsPSfQndC+0LLQsNGPINC30LDQtNCw0YfQsCdcclxuICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xyXG4gICAgICAgICAgdmFsdWU9e3Rhc2tUaXRsZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFza1RpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0JyB2YXJpYW50PSdjb250YWluZWQnIGNvbG9yPSdwcmltYXJ5Jz5cclxuICAgICAgICAgINCU0L7QsdCw0LLQuNGC0Ywg0LfQsNC00LDRh9GDXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFRhc2tQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIkJveCIsInVzZURpc3BhdGNoIiwiYWRkVGFzayIsInVzZVJvdXRlciIsIkxheW91dCIsIkFkZFRhc2tQYWdlIiwidGFza1RpdGxlIiwic2V0VGFza1RpdGxlIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwibmV3VGFzayIsImlkIiwiRGF0ZSIsIm5vdyIsInRpdGxlIiwiY29tcGxldGVkIiwicHVzaCIsImNvbXBvbmVudCIsIm9uU3VibWl0IiwibGFiZWwiLCJ2YXJpYW50IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInR5cGUiLCJjb2xvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/addTaskPage.tsx\n"));

/***/ })

});