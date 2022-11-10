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
        cmObj.camera.position.set( 0, 0.2 , 0.8 );
        cmObj.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(-0.8,0,0));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjtBQUMvQjtBQUNPO0FBQ1A7QUFDQTtBQUNBLDJCQUEyQixvREFBdUI7QUFDbEQ7QUFDQSxnQ0FBZ0MsMENBQWE7QUFDN0M7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL2pzL0NhbWVyYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5leHBvcnQgY29uc3QgY21PYmogPSB7XHJcbiAgICBjYW1lcmEgOiBudWxsLFxyXG4gICAgaW5pdENhbWVyYSA6ICgpID0+IHtcclxuICAgICAgICBjbU9iai5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsICh3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCksMC4xLDEwMDApO1xyXG4gICAgICAgIGNtT2JqLmNhbWVyYS5wb3NpdGlvbi5zZXQoIDAsIDAuMiAsIDAuOCApO1xyXG4gICAgICAgIGNtT2JqLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoLTAuOCwwLDApKTtcclxuICAgIH1cclxufTtcclxuY21PYmouaW5pdENhbWVyYSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=