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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _barrel_optimize_names_Button_Card_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Card,IconButton,Typography!=!@mui/material */ \"__barrel_optimize__?names=Button,Card,IconButton,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ \"./node_modules/@mui/icons-material/esm/CheckCircle.js\");\n/* harmony import */ var _mui_icons_material_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/RadioButtonUnchecked */ \"./node_modules/@mui/icons-material/esm/RadioButtonUnchecked.js\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/esm/Delete.js\");\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/layout */ \"./src/components/layout/layout.tsx\");\n/* harmony import */ var _store_tasksSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/tasksSlice */ \"./src/store/tasksSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst TaskPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    const tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)({\n        \"TaskPage.useSelector[tasks]\": (state)=>state.tasks.tasks\n    }[\"TaskPage.useSelector[tasks]\"]);\n    const task = tasks.find((task)=>task.id === Number(id));\n    if (!task) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                    variant: \"h1\",\n                    component: \"h2\",\n                    color: \"primary\",\n                    children: \"Страница не найдена\"\n                }, void 0, false, {\n                    fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    variant: \"contained\",\n                    onClick: ()=>router.push(\"/\"),\n                    children: \"Вернуться к списку задач\"\n                }, void 0, false, {\n                    fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined);\n    }\n    const toggleTaskStatus = ()=>{\n        dispatch((0,_store_tasksSlice__WEBPACK_IMPORTED_MODULE_4__.updateTask)({\n            ...task,\n            completed: !task.completed\n        }));\n    };\n    const deleteTask = ()=>{\n        dispatch((0,_store_tasksSlice__WEBPACK_IMPORTED_MODULE_4__.removeTask)(task.id));\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                variant: \"h1\",\n                component: \"h2\",\n                color: \"primary\",\n                children: [\n                    \"Задача №\",\n                    task.id\n                ]\n            }, void 0, true, {\n                fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                    variant: \"h6\",\n                    children: task.title\n                }, void 0, false, {\n                    fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                variant: \"body1\",\n                color: \"secondary\",\n                children: [\n                    \"Статус: \",\n                    task.completed ? \"выполнена\" : \"не выполнена\"\n                ]\n            }, void 0, true, {\n                fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                        onClick: toggleTaskStatus,\n                        children: task.completed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            color: \"primary\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_RadioButtonUnchecked__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            color: \"primary\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                        onClick: deleteTask,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            color: \"secondary\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_IconButton_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                variant: \"contained\",\n                onClick: ()=>router.push(\"/\"),\n                children: \"Вернуться к списку задач\"\n            }, void 0, false, {\n                fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"A:\\\\Anny\\\\AnnyProgrammer\\\\тестовые\\\\toDo\\\\src\\\\pages\\\\tasks\\\\[id].tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TaskPage, \"xyvzO/qHX7wjB5ARLB0mjvqlgJc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = TaskPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskPage);\nvar _c;\n$RefreshReg$(_c, \"TaskPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdGFza3MvW2lkXS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBQ2U7QUFFYztBQUNQO0FBQ2tCO0FBQzVCO0FBQ0E7QUFDWTtBQUNoRSxNQUFNYyxXQUFXOztJQUNmLE1BQU1DLFNBQVNkLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVlLEVBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRTNCLE1BQU1DLFdBQVdmLHdEQUFXQTtJQUM1QixNQUFNZ0IsUUFBUWpCLHdEQUFXQTt1Q0FBQyxDQUFDa0IsUUFBcUJBLE1BQU1ELEtBQUssQ0FBQ0EsS0FBSzs7SUFDakUsTUFBTUUsT0FBT0YsTUFBTUcsSUFBSSxDQUFDLENBQUNELE9BQVNBLEtBQUtMLEVBQUUsS0FBS08sT0FBT1A7SUFFckQsSUFBSSxDQUFDSyxNQUFNO1FBQ1QscUJBQ0UsOERBQUNWLGlFQUFNQTs7OEJBQ0wsOERBQUNQLDZHQUFVQTtvQkFBQ29CLFNBQVE7b0JBQUtDLFdBQVU7b0JBQUtDLE9BQU07OEJBQVU7Ozs7Ozs4QkFDeEQsOERBQUNyQix5R0FBTUE7b0JBQUNtQixTQUFRO29CQUFZRyxTQUFTLElBQU1aLE9BQU9hLElBQUksQ0FBQzs4QkFBTTs7Ozs7Ozs7Ozs7O0lBS25FO0lBRUEsTUFBTUMsbUJBQW1CO1FBQ3ZCWCxTQUFTTiw2REFBVUEsQ0FBQztZQUFFLEdBQUdTLElBQUk7WUFBRVMsV0FBVyxDQUFDVCxLQUFLUyxTQUFTO1FBQUM7SUFDNUQ7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCYixTQUFTTCw2REFBVUEsQ0FBQ1EsS0FBS0wsRUFBRTtRQUMzQkQsT0FBT2EsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ2pCLGlFQUFNQTs7MEJBQ0wsOERBQUNQLDZHQUFVQTtnQkFBQ29CLFNBQVE7Z0JBQUtDLFdBQVU7Z0JBQUtDLE9BQU07O29CQUFVO29CQUM3Q0wsS0FBS0wsRUFBRTs7Ozs7OzswQkFFbEIsOERBQUNWLHVHQUFJQTswQkFDSCw0RUFBQ0YsNkdBQVVBO29CQUFDb0IsU0FBUTs4QkFBTUgsS0FBS1csS0FBSzs7Ozs7Ozs7Ozs7MEJBRXRDLDhEQUFDNUIsNkdBQVVBO2dCQUFDb0IsU0FBUTtnQkFBUUUsT0FBTTs7b0JBQVk7b0JBQ25DTCxLQUFLUyxTQUFTLEdBQUcsY0FBYzs7Ozs7OzswQkFHMUMsOERBQUNHOztrQ0FDQyw4REFBQzFCLDZHQUFVQTt3QkFBQ29CLFNBQVNFO2tDQUNsQlIsS0FBS1MsU0FBUyxpQkFDYiw4REFBQ3RCLHVFQUFlQTs0QkFBQ2tCLE9BQU07Ozs7O3NEQUV2Qiw4REFBQ2pCLGdGQUF3QkE7NEJBQUNpQixPQUFNOzs7Ozs7Ozs7OztrQ0FJcEMsOERBQUNuQiw2R0FBVUE7d0JBQUNvQixTQUFTSTtrQ0FDbkIsNEVBQUNyQixrRUFBVUE7NEJBQUNnQixPQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdEIsOERBQUNyQix5R0FBTUE7Z0JBQUNtQixTQUFRO2dCQUFZRyxTQUFTLElBQU1aLE9BQU9hLElBQUksQ0FBQzswQkFBTTs7Ozs7Ozs7Ozs7O0FBS25FO0dBM0RNZDs7UUFDV2Isa0RBQVNBO1FBR1BFLG9EQUFXQTtRQUNkRCxvREFBV0E7OztLQUxyQlk7QUE2RE4saUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIkE6XFxBbm55XFxBbm55UHJvZ3JhbW1lclxc0YLQtdGB0YLQvtCy0YvQtVxcdG9Eb1xcc3JjXFxwYWdlc1xcdGFza3NcXFtpZF0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgQnV0dG9uLCBDYXJkLCBJY29uQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZVwiO1xyXG5pbXBvcnQgUmFkaW9CdXR0b25VbmNoZWNrZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1JhZGlvQnV0dG9uVW5jaGVja2VkXCI7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXRcIjtcclxuaW1wb3J0IHsgdXBkYXRlVGFzaywgcmVtb3ZlVGFzayB9IGZyb20gXCIuLi8uLi9zdG9yZS90YXNrc1NsaWNlXCI7IFxyXG5jb25zdCBUYXNrUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB0YXNrcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcy50YXNrcyk7XHJcbiAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IE51bWJlcihpZCkpO1xyXG5cclxuICBpZiAoIXRhc2spIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNvbXBvbmVudD1cImgyXCIgY29sb3I9XCJwcmltYXJ5XCI+0KHRgtGA0LDQvdC40YbQsCDQvdC1INC90LDQudC00LXQvdCwPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD0nY29udGFpbmVkJyBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9PlxyXG4gICAgICAgICAg0JLQtdGA0L3Rg9GC0YzRgdGPINC6INGB0L/QuNGB0LrRgyDQt9Cw0LTQsNGHXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVRhc2tTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh1cGRhdGVUYXNrKHsgLi4udGFzaywgY29tcGxldGVkOiAhdGFzay5jb21wbGV0ZWQgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChyZW1vdmVUYXNrKHRhc2suaWQpKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTsgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gxJyBjb21wb25lbnQ9XCJoMlwiIGNvbG9yPSdwcmltYXJ5Jz5cclxuICAgICAgICDQl9Cw0LTQsNGH0LAg4oSWe3Rhc2suaWR9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPnt0YXNrLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICDQodGC0LDRgtGD0YE6IHt0YXNrLmNvbXBsZXRlZCA/IFwi0LLRi9C/0L7Qu9C90LXQvdCwXCIgOiBcItC90LUg0LLRi9C/0L7Qu9C90LXQvdCwXCJ9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlVGFza1N0YXR1c30+XHJcbiAgICAgICAgICB7dGFzay5jb21wbGV0ZWQgPyAoXHJcbiAgICAgICAgICAgIDxDaGVja0NpcmNsZUljb24gY29sb3I9XCJwcmltYXJ5XCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxSYWRpb0J1dHRvblVuY2hlY2tlZEljb24gY29sb3I9XCJwcmltYXJ5XCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtkZWxldGVUYXNrfT5cclxuICAgICAgICAgIDxEZWxldGVJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PSdjb250YWluZWQnIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0+XHJcbiAgICAgICAg0JLQtdGA0L3Rg9GC0YzRgdGPINC6INGB0L/QuNGB0LrRgyDQt9Cw0LTQsNGHXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsIkNhcmQiLCJJY29uQnV0dG9uIiwiQ2hlY2tDaXJjbGVJY29uIiwiUmFkaW9CdXR0b25VbmNoZWNrZWRJY29uIiwiRGVsZXRlSWNvbiIsIkxheW91dCIsInVwZGF0ZVRhc2siLCJyZW1vdmVUYXNrIiwiVGFza1BhZ2UiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGlzcGF0Y2giLCJ0YXNrcyIsInN0YXRlIiwidGFzayIsImZpbmQiLCJOdW1iZXIiLCJ2YXJpYW50IiwiY29tcG9uZW50IiwiY29sb3IiLCJvbkNsaWNrIiwicHVzaCIsInRvZ2dsZVRhc2tTdGF0dXMiLCJjb21wbGV0ZWQiLCJkZWxldGVUYXNrIiwidGl0bGUiLCJkaXYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/tasks/[id].tsx\n"));

/***/ })

});