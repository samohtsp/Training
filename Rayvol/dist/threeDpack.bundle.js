"use strict";
(self["webpackChunkrayvol"] = self["webpackChunkrayvol"] || []).push([["threeDpack"],{

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


/***/ }),

/***/ "./src/js/Renderer.js":
/*!****************************!*\
  !*** ./src/js/Renderer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rdObj": () => (/* binding */ rdObj)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


const rdObj = {
  canvas : document.getElementById('bg'),
  renderer : null,
  initRd : () => {
    rdObj.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({canvas: rdObj.canvas , powerPreference: "high-performance" })
    rdObj.renderer.setPixelRatio(window.devicePixelRatio)
    rdObj.renderer.setSize(window.innerWidth, window.innerHeight)
  }
};
rdObj.initRd();

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
    _Camera_js__WEBPACK_IMPORTED_MODULE_0__.cmObj.camera.aspect = sizes.width / sizes.height;
    _Camera_js__WEBPACK_IMPORTED_MODULE_0__.cmObj.camera.updateProjectionMatrix();

    // Update renderer
    _Renderer_js__WEBPACK_IMPORTED_MODULE_1__.rdObj.renderer.setSize(sizes.width, sizes.height);
    _Renderer_js__WEBPACK_IMPORTED_MODULE_1__.rdObj.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});


/***/ }),

/***/ "./src/js/Scene.js":
/*!*************************!*\
  !*** ./src/js/Scene.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scObj": () => (/* binding */ scObj)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


const scObj = {
    scene: null,
  initScene : () => {
    scObj.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
    scObj.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0x1C0339);
    //scObj.scene.fog = new THREE.Fog(0xffffff, 0, 50);
    const pointLight = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff);
    const directLight = new three__WEBPACK_IMPORTED_MODULE_0__.SpotLight(0x04FF00,100)
    pointLight.position.set(0, 30, -100);
    pointLight.lookAt(0,0,0)
    directLight.position.set(0, 0,100);
    directLight.lookAt(0,0,0)
    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff);
    scObj.scene.add(ambientLight,directLight);
  }
};
scObj.initScene();
let sc = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
sc.b

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/Camera.js"), __webpack_exec__("./src/js/Scene.js"), __webpack_exec__("./src/js/Renderer.js"), __webpack_exec__("./src/js/Responsive.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZWVEcGFjay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDL0I7QUFDTztBQUNQO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQXVCO0FBQ2xEO0FBQ0EsZ0NBQWdDLDBDQUFhO0FBQzdDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1YrQjtBQUMvQjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFtQixFQUFFLDREQUE0RDtBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWG9DO0FBQ0U7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQW1CO0FBQ3ZCLElBQUksMkVBQW1DO0FBQ3ZDO0FBQ0E7QUFDQSxJQUFJLGdFQUFzQjtBQUMxQixJQUFJLHNFQUE0QjtBQUNoQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEI4QjtBQUMvQjtBQUNPO0FBQ1A7QUFDQTtBQUNBLHNCQUFzQix3Q0FBVztBQUNqQyxpQ0FBaUMsd0NBQVc7QUFDNUM7QUFDQSwyQkFBMkIsNkNBQWdCO0FBQzNDLDRCQUE0Qiw0Q0FBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwrQ0FBa0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHdDQUFXO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL2pzL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly9yYXl2b2wvLi9zcmMvanMvUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL2pzL1Jlc3BvbnNpdmUuanMiLCJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL2pzL1NjZW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBjb25zdCBjbU9iaiA9IHtcclxuICAgIGNhbWVyYSA6IG51bGwsXHJcbiAgICBpbml0Q2FtZXJhIDogKCkgPT4ge1xyXG4gICAgICAgIGNtT2JqLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgKHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0KSwwLjEsMTAwMCk7XHJcbiAgICAgICAgY21PYmouY2FtZXJhLnBvc2l0aW9uLnNldCggMCwgMC4yICwgMC44ICk7XHJcbiAgICAgICAgY21PYmouY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygtMC44LDAsMCkpO1xyXG4gICAgfVxyXG59O1xyXG5jbU9iai5pbml0Q2FtZXJhKCk7XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBjb25zdCByZE9iaiA9IHtcclxuICBjYW52YXMgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmcnKSxcclxuICByZW5kZXJlciA6IG51bGwsXHJcbiAgaW5pdFJkIDogKCkgPT4ge1xyXG4gICAgcmRPYmoucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7Y2FudmFzOiByZE9iai5jYW52YXMgLCBwb3dlclByZWZlcmVuY2U6IFwiaGlnaC1wZXJmb3JtYW5jZVwiIH0pXHJcbiAgICByZE9iai5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgcmRPYmoucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG4gIH1cclxufTtcclxucmRPYmouaW5pdFJkKCk7IiwiaW1wb3J0IHsgY21PYmogfSBmcm9tICcuL0NhbWVyYS5qcyc7XHJcbmltcG9ydCB7IHJkT2JqIH0gZnJvbSAnLi9SZW5kZXJlci5qcyc7XHJcbi8vXHJcbi8vU2l6ZXNcclxuLy9cclxuY29uc3Qgc2l6ZXMgPSB7XHJcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gIH07XHJcbiAgXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICAgIC8vIFVwZGF0ZSBzaXplc1xyXG4gICAgc2l6ZXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHNpemVzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAvLyBVcGRhdGUgY2FtZXJhXHJcbiAgICBjbU9iai5jYW1lcmEuYXNwZWN0ID0gc2l6ZXMud2lkdGggLyBzaXplcy5oZWlnaHQ7XHJcbiAgICBjbU9iai5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSByZW5kZXJlclxyXG4gICAgcmRPYmoucmVuZGVyZXIuc2V0U2l6ZShzaXplcy53aWR0aCwgc2l6ZXMuaGVpZ2h0KTtcclxuICAgIHJkT2JqLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8oTWF0aC5taW4od2luZG93LmRldmljZVBpeGVsUmF0aW8sIDIpKTtcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzY09iaiA9IHtcclxuICAgIHNjZW5lOiBudWxsLFxyXG4gIGluaXRTY2VuZSA6ICgpID0+IHtcclxuICAgIHNjT2JqLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICBzY09iai5zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKDB4MUMwMzM5KTtcclxuICAgIC8vc2NPYmouc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZygweGZmZmZmZiwgMCwgNTApO1xyXG4gICAgY29uc3QgcG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmKTtcclxuICAgIGNvbnN0IGRpcmVjdExpZ2h0ID0gbmV3IFRIUkVFLlNwb3RMaWdodCgweDA0RkYwMCwxMDApXHJcbiAgICBwb2ludExpZ2h0LnBvc2l0aW9uLnNldCgwLCAzMCwgLTEwMCk7XHJcbiAgICBwb2ludExpZ2h0Lmxvb2tBdCgwLDAsMClcclxuICAgIGRpcmVjdExpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLDEwMCk7XHJcbiAgICBkaXJlY3RMaWdodC5sb29rQXQoMCwwLDApXHJcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmKTtcclxuICAgIHNjT2JqLnNjZW5lLmFkZChhbWJpZW50TGlnaHQsZGlyZWN0TGlnaHQpO1xyXG4gIH1cclxufTtcclxuc2NPYmouaW5pdFNjZW5lKCk7XHJcbmxldCBzYyA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5zYy5iIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9