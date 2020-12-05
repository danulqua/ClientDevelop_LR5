/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkclientdevelop_lr5"] = self["webpackChunkclientdevelop_lr5"] || []).push([["js_views_categoriesPage_js"],{

/***/ "./js/views/categoriesPage.js":
/*!************************************!*
  !*** ./js/views/categoriesPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst view = (db) => {\r\n    let result = ``;\r\n    result += `\r\n            <div class=\"mt-4 pt-4\">\r\n                <h2 class=\"text-center text-dark font-weight-bold\">Категорії</h2>\r\n                <div class=\"row\">\r\n    `;\r\n    db.categories.map(category => {\r\n        result += `\r\n                    <div class=\"col-lg-4 col-md-6\">\r\n                        <div class=\"card pt-2 mt-5 ml-auto mr-auto\" style=\"width: 18rem;\">\r\n                            <a href=\"#category/${category.id}\">\r\n                                <img src=\"${db.products[category.productIds[0] - 1].img}\" class=\"card-img-top\" alt=\"${db.products[category.productIds[0] - 1].name}\">\r\n                                <div class=\"card-body\">\r\n                                    <h4 class=\"card-text text-center text-dark\">${category.name}</h4>\r\n                                </div>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n        `;\r\n    });\r\n    result += `\r\n                </div>\r\n            </div>\r\n    `;\r\n    return result;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnRkZXZlbG9wX2xyNS8uL2pzL3ZpZXdzL2NhdGVnb3JpZXNQYWdlLmpzPzcyMzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGLGlEQUFpRCxZQUFZO0FBQzdELDRDQUE0Qyw0Q0FBNEMsOEJBQThCLDZDQUE2QztBQUNuSztBQUNBLGtGQUFrRixjQUFjO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUkiLCJmaWxlIjoiLi9qcy92aWV3cy9jYXRlZ29yaWVzUGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZpZXcgPSAoZGIpID0+IHtcclxuICAgIGxldCByZXN1bHQgPSBgYDtcclxuICAgIHJlc3VsdCArPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC00IHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHRleHQtZGFyayBmb250LXdlaWdodC1ib2xkXCI+0JrQsNGC0LXQs9C+0YDRltGXPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIGA7XHJcbiAgICBkYi5jYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgcHQtMiBtdC01IG1sLWF1dG8gbXItYXV0b1wiIHN0eWxlPVwid2lkdGg6IDE4cmVtO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjYXRlZ29yeS8ke2NhdGVnb3J5LmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkYi5wcm9kdWN0c1tjYXRlZ29yeS5wcm9kdWN0SWRzWzBdIC0gMV0uaW1nfVwiIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiJHtkYi5wcm9kdWN0c1tjYXRlZ29yeS5wcm9kdWN0SWRzWzBdIC0gMV0ubmFtZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LWNlbnRlciB0ZXh0LWRhcmtcIj4ke2NhdGVnb3J5Lm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgIH0pO1xyXG4gICAgcmVzdWx0ICs9IGBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2aWV3OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/views/categoriesPage.js\n");

/***/ })

}]);