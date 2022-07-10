"use strict";
(self["webpackChunkrayvol"] = self["webpackChunkrayvol"] || []).push([["scene"],{

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
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/Scene.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NlbmUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQy9CO0FBQ087QUFDUDtBQUNBO0FBQ0Esc0JBQXNCLHdDQUFXO0FBQ2pDLGlDQUFpQyx3Q0FBVztBQUM1QztBQUNBLDJCQUEyQiw2Q0FBZ0I7QUFDM0MsNEJBQTRCLDRDQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLCtDQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0NBQVc7QUFDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXl2b2wvLi9zcmMvanMvU2NlbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjT2JqID0ge1xyXG4gICAgc2NlbmU6IG51bGwsXHJcbiAgaW5pdFNjZW5lIDogKCkgPT4ge1xyXG4gICAgc2NPYmouc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIHNjT2JqLnNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoMHgxQzAzMzkpO1xyXG4gICAgLy9zY09iai5zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKDB4ZmZmZmZmLCAwLCA1MCk7XHJcbiAgICBjb25zdCBwb2ludExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYpO1xyXG4gICAgY29uc3QgZGlyZWN0TGlnaHQgPSBuZXcgVEhSRUUuU3BvdExpZ2h0KDB4MDRGRjAwLDEwMClcclxuICAgIHBvaW50TGlnaHQucG9zaXRpb24uc2V0KDAsIDMwLCAtMTAwKTtcclxuICAgIHBvaW50TGlnaHQubG9va0F0KDAsMCwwKVxyXG4gICAgZGlyZWN0TGlnaHQucG9zaXRpb24uc2V0KDAsIDAsMTAwKTtcclxuICAgIGRpcmVjdExpZ2h0Lmxvb2tBdCgwLDAsMClcclxuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYpO1xyXG4gICAgc2NPYmouc2NlbmUuYWRkKGFtYmllbnRMaWdodCxkaXJlY3RMaWdodCk7XHJcbiAgfVxyXG59O1xyXG5zY09iai5pbml0U2NlbmUoKTtcclxubGV0IHNjID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbnNjLmIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=