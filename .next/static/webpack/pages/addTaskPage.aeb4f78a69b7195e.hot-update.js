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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,TextField!=!@mui/material */ \"__barrel_optimize__?names=Button,TextField!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_tasksSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/tasksSlice */ \"./src/store/tasksSlice.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/layout */ \"./src/components/layout/layout.tsx\");\n/* harmony import */ var _addTaskPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addTaskPage.module.scss */ \"./src/pages/addTaskPage.module.scss\");\n/* harmony import */ var _addTaskPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_addTaskPage_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AddTaskPage = ()=>{\n    _s();\n    const [taskTitle, setTaskTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (taskTitle.trim() === \"\") return;\n        const newTask = {\n            id: Date.now(),\n            title: taskTitle,\n            completed: false\n        };\n        dispatch((0,_store_tasksSlice__WEBPACK_IMPORTED_MODULE_2__.addTask)(newTask));\n        setTaskTitle(\"\");\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: (_addTaskPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().form),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {\n                    label: \"Новая задача\",\n                    variant: \"outlined\",\n                    value: taskTitle,\n                    onChange: (e)=>setTaskTitle(e.target.value)\n                }, void 0, false, {\n                    fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\addTaskPage.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    type: \"submit\",\n                    variant: \"contained\",\n                    color: \"primary\",\n                    className: (_addTaskPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().formButton),\n                    children: \"Добавить задачу\"\n                }, void 0, false, {\n                    fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\addTaskPage.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\addTaskPage.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\addTaskPage.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddTaskPage, \"DD1DbMr6j8KfXNdiqJmAiIm21Xw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AddTaskPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTaskPage);\nvar _c;\n$RefreshReg$(_c, \"AddTaskPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRkVGFza1BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNVO0FBQ1I7QUFDSTtBQUNOO0FBQ1M7QUFDSDtBQUU5QyxNQUFNUyxjQUF3Qjs7SUFDNUIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFTO0lBQ25ELE1BQU1XLFdBQVdSLHdEQUFXQTtJQUM1QixNQUFNUyxTQUFTUCxzREFBU0E7SUFFeEIsTUFBTVEsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJTixVQUFVTyxJQUFJLE9BQU8sSUFBSTtRQUU3QixNQUFNQyxVQUFVO1lBQ2RDLElBQUlDLEtBQUtDLEdBQUc7WUFDWkMsT0FBT1o7WUFDUGEsV0FBVztRQUNiO1FBQ0FYLFNBQVNQLDBEQUFPQSxDQUFDYTtRQUVqQlAsYUFBYTtRQUNiRSxPQUFPVyxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDakIsaUVBQU1BO2tCQUNMLDRFQUFDa0I7WUFBS0MsVUFBVVo7WUFBY2EsV0FBV25CLHNFQUFXOzs4QkFDbEQsOERBQUNOLDJGQUFTQTtvQkFDUjBCLE9BQU07b0JBQ05DLFNBQVE7b0JBQ1JDLE9BQU9wQjtvQkFDUHFCLFVBQVUsQ0FBQ2hCLElBQU1KLGFBQWFJLEVBQUVpQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs4QkFFOUMsOERBQUMzQix3RkFBTUE7b0JBQUM4QixNQUFLO29CQUFTSixTQUFRO29CQUFZSyxPQUFNO29CQUFVUCxXQUFXbkIsNEVBQWlCOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1oRztHQXBDTUM7O1FBRWFMLG9EQUFXQTtRQUNiRSxrREFBU0E7OztLQUhwQkc7QUFzQ04saUVBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIkE6XFxBbm55XFxBbm55UHJvZ3JhbW1lclxc0YLQtdGB0YLQvtCy0YvQtVxcdG9Eb1xcc3JjXFxwYWdlc1xcYWRkVGFza1BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZFRhc2sgfSBmcm9tIFwiLi4vc3RvcmUvdGFza3NTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hZGRUYXNrUGFnZS5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IEFkZFRhc2tQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbdGFza1RpdGxlLCBzZXRUYXNrVGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICh0YXNrVGl0bGUudHJpbSgpID09PSBcIlwiKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbmV3VGFzayA9IHtcclxuICAgICAgaWQ6IERhdGUubm93KCksXHJcbiAgICAgIHRpdGxlOiB0YXNrVGl0bGUsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgZGlzcGF0Y2goYWRkVGFzayhuZXdUYXNrKSk7XHJcblxyXG4gICAgc2V0VGFza1RpdGxlKFwiXCIpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBsYWJlbD0n0J3QvtCy0LDRjyDQt9Cw0LTQsNGH0LAnXHJcbiAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcclxuICAgICAgICAgIHZhbHVlPXt0YXNrVGl0bGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRhc2tUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgdmFyaWFudD0nY29udGFpbmVkJyBjb2xvcj0ncHJpbWFyeScgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUJ1dHRvbn0+XHJcbiAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMINC30LDQtNCw0YfRg1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkVGFza1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGV4dEZpZWxkIiwiQnV0dG9uIiwidXNlRGlzcGF0Y2giLCJhZGRUYXNrIiwidXNlUm91dGVyIiwiTGF5b3V0Iiwic3R5bGVzIiwiQWRkVGFza1BhZ2UiLCJ0YXNrVGl0bGUiLCJzZXRUYXNrVGl0bGUiLCJkaXNwYXRjaCIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJuZXdUYXNrIiwiaWQiLCJEYXRlIiwibm93IiwidGl0bGUiLCJjb21wbGV0ZWQiLCJwdXNoIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJ2YXJpYW50IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInR5cGUiLCJjb2xvciIsImZvcm1CdXR0b24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/addTaskPage.tsx\n"));

/***/ })

});