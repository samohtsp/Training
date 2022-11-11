"use strict";
(self["webpackChunkminecraft_clone"] = self["webpackChunkminecraft_clone"] || []).push([["threeDpack"],{

/***/ "./src/js/Camera.js":
/*!**************************!*\
  !*** ./src/js/Camera.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "camera": () => (/* binding */ camera)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


var camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.setX(25);
camera.position.setZ(75);
camera.position.setY(10);


/***/ }),

/***/ "./src/js/Renderer.js":
/*!****************************!*\
  !*** ./src/js/Renderer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderer": () => (/* binding */ renderer)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
    canvas: document.querySelector('#bg'), powerPreference: "high-performance", antialias: true 
});

renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_0__.sRGBEncoding;
renderer.toneMapping = three__WEBPACK_IMPORTED_MODULE_0__.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5;
renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


/***/ }),

/***/ "./src/js/Responsive.js":
/*!******************************!*\
  !*** ./src/js/Responsive.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderer.js */ "./src/js/Renderer.js");


//
//Sizes
//
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  
window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    _Camera_js__WEBPACK_IMPORTED_MODULE_0__.camera.aspect = sizes.width / sizes.height;
    _Camera_js__WEBPACK_IMPORTED_MODULE_0__.camera.updateProjectionMatrix();

    // Update renderer
    _Renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderer.setSize(sizes.width, sizes.height);
    _Renderer_js__WEBPACK_IMPORTED_MODULE_1__.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/Camera.js"), __webpack_exec__("./src/js/Renderer.js"), __webpack_exec__("./src/js/Responsive.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdGhyZWVEcGFjay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDL0I7QUFDTyxpQkFBaUIsb0RBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1grQjtBQUMvQjtBQUNPLHFCQUFxQixnREFBbUI7QUFDL0M7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwwQkFBMEIsK0NBQWtCO0FBQzVDLHVCQUF1Qix3REFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWHFDO0FBQ0k7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWE7QUFDakIsSUFBSSxxRUFBNkI7QUFDakM7QUFDQTtBQUNBLElBQUksMERBQWdCO0FBQ3BCLElBQUksZ0VBQXNCO0FBQzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvQ2FtZXJhLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvUmVzcG9uc2l2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmV4cG9ydCB2YXIgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gIDc1LFxyXG4gIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gIDAuMSxcclxuICAxMDAwXHJcbik7XHJcblxyXG5jYW1lcmEucG9zaXRpb24uc2V0WCgyNSk7XHJcbmNhbWVyYS5wb3NpdGlvbi5zZXRaKDc1KTtcclxuY2FtZXJhLnBvc2l0aW9uLnNldFkoMTApO1xyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICBjYW52YXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZycpLCBwb3dlclByZWZlcmVuY2U6IFwiaGlnaC1wZXJmb3JtYW5jZVwiLCBhbnRpYWxpYXM6IHRydWUgXHJcbn0pO1xyXG5cclxucmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2Rpbmc7XHJcbnJlbmRlcmVyLnRvbmVNYXBwaW5nID0gVEhSRUUuQUNFU0ZpbG1pY1RvbmVNYXBwaW5nO1xyXG5yZW5kZXJlci50b25lTWFwcGluZ0V4cG9zdXJlID0gMC41O1xyXG5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XHJcbnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xyXG5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4iLCJpbXBvcnQgeyBjYW1lcmEgfSBmcm9tICcuL0NhbWVyYS5qcyc7XHJcbmltcG9ydCB7IHJlbmRlcmVyIH0gZnJvbSAnLi9SZW5kZXJlci5qcyc7XHJcbi8vXHJcbi8vU2l6ZXNcclxuLy9cclxuY29uc3Qgc2l6ZXMgPSB7XHJcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gIH07XHJcbiAgXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICAgIC8vIFVwZGF0ZSBzaXplc1xyXG4gICAgc2l6ZXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHNpemVzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAvLyBVcGRhdGUgY2FtZXJhXHJcbiAgICBjYW1lcmEuYXNwZWN0ID0gc2l6ZXMud2lkdGggLyBzaXplcy5oZWlnaHQ7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSByZW5kZXJlclxyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZShzaXplcy53aWR0aCwgc2l6ZXMuaGVpZ2h0KTtcclxuICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8oTWF0aC5taW4od2luZG93LmRldmljZVBpeGVsUmF0aW8sIDIpKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==