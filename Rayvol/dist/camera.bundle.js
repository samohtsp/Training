"use strict";
(self["webpackChunkrayvol"] = self["webpackChunkrayvol"] || []).push([["camera"],{

/***/ "./src/js/Camera.js":
/*!**************************!*\
  !*** ./src/js/Camera.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cmObj": () => (/* binding */ cmObj)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


const cmObj = {
    camera : null,
    initCamera : () => {
        cmObj.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, (window.innerWidth / window.innerHeight),0.1,1000);
        cmObj.camera.position.set( 0, 0,50 );
        cmObj.camera.lookAt( 0, 0, 0 );
    }
};
cmObj.initCamera();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/Camera.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjtBQUMvQjtBQUNPO0FBQ1A7QUFDQTtBQUNBLDJCQUEyQixvREFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JheXZvbC8uL3NyYy9qcy9DYW1lcmEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNtT2JqID0ge1xyXG4gICAgY2FtZXJhIDogbnVsbCxcclxuICAgIGluaXRDYW1lcmEgOiAoKSA9PiB7XHJcbiAgICAgICAgY21PYmouY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCAod2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQpLDAuMSwxMDAwKTtcclxuICAgICAgICBjbU9iai5jYW1lcmEucG9zaXRpb24uc2V0KCAwLCAwLDUwICk7XHJcbiAgICAgICAgY21PYmouY2FtZXJhLmxvb2tBdCggMCwgMCwgMCApO1xyXG4gICAgfVxyXG59O1xyXG5jbU9iai5pbml0Q2FtZXJhKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9