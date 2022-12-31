(self["webpackChunkcecile_website"] = self["webpackChunkcecile_website"] || []).push([["app"],{

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$":
/*!************************************************************!*\
  !*** ./src/assets/ sync \.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$ ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./img/model-1.jpg": "./src/assets/img/model-1.jpg",
	"./img/project-1.jpg": "./src/assets/img/project-1.jpg",
	"./img/project-2.jpg": "./src/assets/img/project-2.jpg",
	"./img/project-3.jpg": "./src/assets/img/project-3.jpg",
	"./img/project-4.jpg": "./src/assets/img/project-4.jpg",
	"./img/project-5.jpg": "./src/assets/img/project-5.jpg",
	"./img/project-6.jpg": "./src/assets/img/project-6.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$";

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");



__webpack_require__("./src/assets sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$");

const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = true;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => {
      item.classList.add("open");
    });
    showMenu = false;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => {
      item.classList.remove("open");
    });
    showMenu = true;
  }
}


/***/ }),

/***/ "./src/assets/img/model-1.jpg":
/*!************************************!*\
  !*** ./src/assets/img/model-1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/model-1.jpg";

/***/ }),

/***/ "./src/assets/img/project-1.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/project-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/project-1.jpg";

/***/ }),

/***/ "./src/assets/img/project-2.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/project-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/project-2.jpg";

/***/ }),

/***/ "./src/assets/img/project-3.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/project-3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/project-3.jpg";

/***/ }),

/***/ "./src/assets/img/project-4.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/project-4.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/project-4.jpg";

/***/ }),

/***/ "./src/assets/img/project-5.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/project-5.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/project-5.jpg";

/***/ }),

/***/ "./src/assets/img/project-6.jpg":
/*!**************************************!*\
  !*** ./src/assets/img/project-6.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/project-6.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVCdUI7QUFDRTtBQUN6QjtBQUNBLHFGQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZWNpbGUtd2Vic2l0ZS8uL3NyYy9jc3MvbWFpbi5jc3M/YzA4ZSIsIndlYnBhY2s6Ly9jZWNpbGUtd2Vic2l0ZS8uL3NyYy9hc3NldHMvIHN5bmMgXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJCIsIndlYnBhY2s6Ly9jZWNpbGUtd2Vic2l0ZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1nL21vZGVsLTEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9tb2RlbC0xLmpwZ1wiLFxuXHRcIi4vaW1nL3Byb2plY3QtMS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3Byb2plY3QtMS5qcGdcIixcblx0XCIuL2ltZy9wcm9qZWN0LTIuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wcm9qZWN0LTIuanBnXCIsXG5cdFwiLi9pbWcvcHJvamVjdC0zLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcHJvamVjdC0zLmpwZ1wiLFxuXHRcIi4vaW1nL3Byb2plY3QtNC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3Byb2plY3QtNC5qcGdcIixcblx0XCIuL2ltZy9wcm9qZWN0LTUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9wcm9qZWN0LTUuanBnXCIsXG5cdFwiLi9pbWcvcHJvamVjdC02LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvcHJvamVjdC02LmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkXCI7IiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgXCIuLi9jc3MvbWFpbi5jc3NcIjtcclxuXHJcbnJlcXVpcmUuY29udGV4dChcIi4uL2Fzc2V0c1wiLCB0cnVlLCAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvKTtcclxuXHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xyXG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuX19idXJnZXJcIik7XHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpO1xyXG5jb25zdCBtZW51TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LW5hdlwiKTtcclxuY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtbmF2X19pdGVtXCIpO1xyXG5cclxubGV0IHNob3dNZW51ID0gdHJ1ZTtcclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU1lbnUpO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuICBpZiAoc2hvd01lbnUpIHtcclxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgIG1lbnVOYXYuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICB9KTtcclxuICAgIHNob3dNZW51ID0gZmFsc2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIG1lbnVOYXYuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICB9KTtcclxuICAgIHNob3dNZW51ID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9