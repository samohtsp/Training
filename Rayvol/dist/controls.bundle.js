"use strict";
(self["webpackChunkrayvol"] = self["webpackChunkrayvol"] || []).push([["controls"],{

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

/***/ "./src/js/Controls.js":
/*!****************************!*\
  !*** ./src/js/Controls.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ctrlObj": () => (/* binding */ ctrlObj)
/* harmony export */ });
/* harmony import */ var three_examples_jsm_controls_PointerLockControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/PointerLockControls */ "./node_modules/three/examples/jsm/controls/PointerLockControls.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Renderer.js */ "./src/js/Renderer.js");




const ctrlObj = {
    controls:null,
    initControls : ()=>{
        ctrlObj.controls = new three_examples_jsm_controls_PointerLockControls__WEBPACK_IMPORTED_MODULE_0__.PointerLockControls(_Camera_js__WEBPACK_IMPORTED_MODULE_1__.cmObj.camera,_Renderer_js__WEBPACK_IMPORTED_MODULE_2__.rdObj.renderer.domElement);
        ctrlObj.controls.movementSpeed = 150;
        ctrlObj.controls.lookSpeed = 0.1;

        /*document.addEventListener('wheel', function (e) {
            //console.log('in event listener e =',e.deltaY )
            if (e.deltaY < 0) {
                ctrlObj.controls.moveForward(5)
            }
            else if (e.deltaY > 0) {
                ctrlObj.controls.moveForward(-5)
            }
        })
        document.addEventListener("keyup", function (e) {
            if (e.key == "w") {
                ctrlObj.controls.moveForward(1)
            }
            else if (e.key == "s") {
                ctrlObj.controls.moveForward(-1)
            }
        });
        
        document.addEventListener("keydown", function (e) {
        
        });*/
    },
};
ctrlObj.initControls();

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

/***/ "./node_modules/three/examples/jsm/controls/PointerLockControls.js":
/*!*************************************************************************!*\
  !*** ./node_modules/three/examples/jsm/controls/PointerLockControls.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointerLockControls": () => (/* binding */ PointerLockControls)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


const _euler = new three__WEBPACK_IMPORTED_MODULE_0__.Euler( 0, 0, 0, 'YXZ' );
const _vector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

const _changeEvent = { type: 'change' };
const _lockEvent = { type: 'lock' };
const _unlockEvent = { type: 'unlock' };

const _PI_2 = Math.PI / 2;

class PointerLockControls extends three__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher {

	constructor( camera, domElement ) {

		super();

		if ( domElement === undefined ) {

			console.warn( 'THREE.PointerLockControls: The second parameter "domElement" is now mandatory.' );
			domElement = document.body;

		}

		this.domElement = domElement;
		this.isLocked = false;

		// Set to constrain the pitch of the camera
		// Range is 0 to Math.PI radians
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		this.pointerSpeed = 1.0;

		const scope = this;

		function onMouseMove( event ) {

			if ( scope.isLocked === false ) return;

			const movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
			const movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

			_euler.setFromQuaternion( camera.quaternion );

			_euler.y -= movementX * 0.002 * scope.pointerSpeed;
			_euler.x -= movementY * 0.002 * scope.pointerSpeed;

			_euler.x = Math.max( _PI_2 - scope.maxPolarAngle, Math.min( _PI_2 - scope.minPolarAngle, _euler.x ) );

			camera.quaternion.setFromEuler( _euler );

			scope.dispatchEvent( _changeEvent );

		}

		function onPointerlockChange() {

			if ( scope.domElement.ownerDocument.pointerLockElement === scope.domElement ) {

				scope.dispatchEvent( _lockEvent );

				scope.isLocked = true;

			} else {

				scope.dispatchEvent( _unlockEvent );

				scope.isLocked = false;

			}

		}

		function onPointerlockError() {

			console.error( 'THREE.PointerLockControls: Unable to use Pointer Lock API' );

		}

		this.connect = function () {

			scope.domElement.ownerDocument.addEventListener( 'mousemove', onMouseMove );
			scope.domElement.ownerDocument.addEventListener( 'pointerlockchange', onPointerlockChange );
			scope.domElement.ownerDocument.addEventListener( 'pointerlockerror', onPointerlockError );

		};

		this.disconnect = function () {

			scope.domElement.ownerDocument.removeEventListener( 'mousemove', onMouseMove );
			scope.domElement.ownerDocument.removeEventListener( 'pointerlockchange', onPointerlockChange );
			scope.domElement.ownerDocument.removeEventListener( 'pointerlockerror', onPointerlockError );

		};

		this.dispose = function () {

			this.disconnect();

		};

		this.getObject = function () { // retaining this method for backward compatibility

			return camera;

		};

		this.getDirection = function () {

			const direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( 0, 0, - 1 );

			return function ( v ) {

				return v.copy( direction ).applyQuaternion( camera.quaternion );

			};

		}();

		this.moveForward = function ( distance ) {

			// move forward parallel to the xz-plane
			// assumes camera.up is y-up

			_vector.setFromMatrixColumn( camera.matrix, 0 );

			_vector.crossVectors( camera.up, _vector );

			camera.position.addScaledVector( _vector, distance );

		};

		this.moveRight = function ( distance ) {

			_vector.setFromMatrixColumn( camera.matrix, 0 );

			camera.position.addScaledVector( _vector, distance );

		};

		this.lock = function () {

			this.domElement.requestPointerLock();

		};

		this.unlock = function () {

			scope.domElement.ownerDocument.exitPointerLock();

		};

		this.connect();

	}

}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/Controls.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQy9CO0FBQ087QUFDUDtBQUNBO0FBQ0EsMkJBQTJCLG9EQUF1QjtBQUNsRDtBQUNBLGdDQUFnQywwQ0FBYTtBQUM3QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZtRjtBQUMvQztBQUNFO0FBQ3RDO0FBQ087QUFDUDtBQUNBO0FBQ0EsK0JBQStCLGdHQUFtQixDQUFDLG9EQUFZLENBQUMsbUVBQXlCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xDK0I7QUFDL0I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBbUIsRUFBRSw0REFBNEQ7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUGU7O0FBRWYsbUJBQW1CLHdDQUFLO0FBQ3hCLG9CQUFvQiwwQ0FBTzs7QUFFM0IsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQix1QkFBdUI7O0FBRXZCOztBQUVBLGtDQUFrQyxrREFBZTs7QUFFakQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsZ0NBQWdDOztBQUVoQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGlDQUFpQzs7QUFFakM7O0FBRUE7O0FBRUE7O0FBRUEseUJBQXlCLDBDQUFPOztBQUVoQzs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL2pzL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly9yYXl2b2wvLi9zcmMvanMvQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL2pzL1JlbmRlcmVyLmpzIiwid2VicGFjazovL3JheXZvbC8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvUG9pbnRlckxvY2tDb250cm9scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5leHBvcnQgY29uc3QgY21PYmogPSB7XHJcbiAgICBjYW1lcmEgOiBudWxsLFxyXG4gICAgaW5pdENhbWVyYSA6ICgpID0+IHtcclxuICAgICAgICBjbU9iai5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsICh3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCksMC4xLDEwMDApO1xyXG4gICAgICAgIGNtT2JqLmNhbWVyYS5wb3NpdGlvbi5zZXQoIDAsIDAuMiAsIDAuOCApO1xyXG4gICAgICAgIGNtT2JqLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoLTAuOCwwLDApKTtcclxuICAgIH1cclxufTtcclxuY21PYmouaW5pdENhbWVyYSgpO1xyXG4iLCJpbXBvcnQge1BvaW50ZXJMb2NrQ29udHJvbHN9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9Qb2ludGVyTG9ja0NvbnRyb2xzJ1xyXG5pbXBvcnQgeyBjbU9iaiB9IGZyb20gJy4vQ2FtZXJhLmpzJztcclxuaW1wb3J0IHsgcmRPYmogfSBmcm9tICcuL1JlbmRlcmVyLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjdHJsT2JqID0ge1xyXG4gICAgY29udHJvbHM6bnVsbCxcclxuICAgIGluaXRDb250cm9scyA6ICgpPT57XHJcbiAgICAgICAgY3RybE9iai5jb250cm9scyA9IG5ldyBQb2ludGVyTG9ja0NvbnRyb2xzKGNtT2JqLmNhbWVyYSxyZE9iai5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICBjdHJsT2JqLmNvbnRyb2xzLm1vdmVtZW50U3BlZWQgPSAxNTA7XHJcbiAgICAgICAgY3RybE9iai5jb250cm9scy5sb29rU3BlZWQgPSAwLjE7XHJcblxyXG4gICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdpbiBldmVudCBsaXN0ZW5lciBlID0nLGUuZGVsdGFZIClcclxuICAgICAgICAgICAgaWYgKGUuZGVsdGFZIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY3RybE9iai5jb250cm9scy5tb3ZlRm9yd2FyZCg1KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY3RybE9iai5jb250cm9scy5tb3ZlRm9yd2FyZCgtNSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBcIndcIikge1xyXG4gICAgICAgICAgICAgICAgY3RybE9iai5jb250cm9scy5tb3ZlRm9yd2FyZCgxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUua2V5ID09IFwic1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjdHJsT2JqLmNvbnRyb2xzLm1vdmVGb3J3YXJkKC0xKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBcclxuICAgICAgICB9KTsqL1xyXG4gICAgfSxcclxufTtcclxuY3RybE9iai5pbml0Q29udHJvbHMoKTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcmRPYmogPSB7XHJcbiAgY2FudmFzIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnJyksXHJcbiAgcmVuZGVyZXIgOiBudWxsLFxyXG4gIGluaXRSZCA6ICgpID0+IHtcclxuICAgIHJkT2JqLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2NhbnZhczogcmRPYmouY2FudmFzICwgcG93ZXJQcmVmZXJlbmNlOiBcImhpZ2gtcGVyZm9ybWFuY2VcIiB9KVxyXG4gICAgcmRPYmoucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcclxuICAgIHJkT2JqLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcclxuICB9XHJcbn07XHJcbnJkT2JqLmluaXRSZCgpOyIsImltcG9ydCB7XG5cdEV1bGVyLFxuXHRFdmVudERpc3BhdGNoZXIsXG5cdFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG5jb25zdCBfZXVsZXIgPSBuZXcgRXVsZXIoIDAsIDAsIDAsICdZWFonICk7XG5jb25zdCBfdmVjdG9yID0gbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2NoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuY29uc3QgX2xvY2tFdmVudCA9IHsgdHlwZTogJ2xvY2snIH07XG5jb25zdCBfdW5sb2NrRXZlbnQgPSB7IHR5cGU6ICd1bmxvY2snIH07XG5cbmNvbnN0IF9QSV8yID0gTWF0aC5QSSAvIDI7XG5cbmNsYXNzIFBvaW50ZXJMb2NrQ29udHJvbHMgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBjYW1lcmEsIGRvbUVsZW1lbnQgKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0aWYgKCBkb21FbGVtZW50ID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLlBvaW50ZXJMb2NrQ29udHJvbHM6IFRoZSBzZWNvbmQgcGFyYW1ldGVyIFwiZG9tRWxlbWVudFwiIGlzIG5vdyBtYW5kYXRvcnkuJyApO1xuXHRcdFx0ZG9tRWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG5cblx0XHR9XG5cblx0XHR0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXHRcdHRoaXMuaXNMb2NrZWQgPSBmYWxzZTtcblxuXHRcdC8vIFNldCB0byBjb25zdHJhaW4gdGhlIHBpdGNoIG9mIHRoZSBjYW1lcmFcblx0XHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFuc1xuXHRcdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0XHR0aGlzLnBvaW50ZXJTcGVlZCA9IDEuMDtcblxuXHRcdGNvbnN0IHNjb3BlID0gdGhpcztcblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5pc0xvY2tlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGNvbnN0IG1vdmVtZW50WCA9IGV2ZW50Lm1vdmVtZW50WCB8fCBldmVudC5tb3pNb3ZlbWVudFggfHwgZXZlbnQud2Via2l0TW92ZW1lbnRYIHx8IDA7XG5cdFx0XHRjb25zdCBtb3ZlbWVudFkgPSBldmVudC5tb3ZlbWVudFkgfHwgZXZlbnQubW96TW92ZW1lbnRZIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WSB8fCAwO1xuXG5cdFx0XHRfZXVsZXIuc2V0RnJvbVF1YXRlcm5pb24oIGNhbWVyYS5xdWF0ZXJuaW9uICk7XG5cblx0XHRcdF9ldWxlci55IC09IG1vdmVtZW50WCAqIDAuMDAyICogc2NvcGUucG9pbnRlclNwZWVkO1xuXHRcdFx0X2V1bGVyLnggLT0gbW92ZW1lbnRZICogMC4wMDIgKiBzY29wZS5wb2ludGVyU3BlZWQ7XG5cblx0XHRcdF9ldWxlci54ID0gTWF0aC5tYXgoIF9QSV8yIC0gc2NvcGUubWF4UG9sYXJBbmdsZSwgTWF0aC5taW4oIF9QSV8yIC0gc2NvcGUubWluUG9sYXJBbmdsZSwgX2V1bGVyLnggKSApO1xuXG5cdFx0XHRjYW1lcmEucXVhdGVybmlvbi5zZXRGcm9tRXVsZXIoIF9ldWxlciApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uUG9pbnRlcmxvY2tDaGFuZ2UoKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCA9PT0gc2NvcGUuZG9tRWxlbWVudCApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfbG9ja0V2ZW50ICk7XG5cblx0XHRcdFx0c2NvcGUuaXNMb2NrZWQgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF91bmxvY2tFdmVudCApO1xuXG5cdFx0XHRcdHNjb3BlLmlzTG9ja2VkID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uUG9pbnRlcmxvY2tFcnJvcigpIHtcblxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLlBvaW50ZXJMb2NrQ29udHJvbHM6IFVuYWJsZSB0byB1c2UgUG9pbnRlciBMb2NrIEFQSScgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2NoYW5nZScsIG9uUG9pbnRlcmxvY2tDaGFuZ2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tlcnJvcicsIG9uUG9pbnRlcmxvY2tFcnJvciApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2NoYW5nZScsIG9uUG9pbnRlcmxvY2tDaGFuZ2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tlcnJvcicsIG9uUG9pbnRlcmxvY2tFcnJvciApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dGhpcy5kaXNjb25uZWN0KCk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXRPYmplY3QgPSBmdW5jdGlvbiAoKSB7IC8vIHJldGFpbmluZyB0aGlzIG1ldGhvZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXG5cdFx0XHRyZXR1cm4gY2FtZXJhO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0RGlyZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zdCBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMyggMCwgMCwgLSAxICk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0cmV0dXJuIHYuY29weSggZGlyZWN0aW9uICkuYXBwbHlRdWF0ZXJuaW9uKCBjYW1lcmEucXVhdGVybmlvbiApO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0dGhpcy5tb3ZlRm9yd2FyZCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cblx0XHRcdC8vIG1vdmUgZm9yd2FyZCBwYXJhbGxlbCB0byB0aGUgeHotcGxhbmVcblx0XHRcdC8vIGFzc3VtZXMgY2FtZXJhLnVwIGlzIHktdXBcblxuXHRcdFx0X3ZlY3Rvci5zZXRGcm9tTWF0cml4Q29sdW1uKCBjYW1lcmEubWF0cml4LCAwICk7XG5cblx0XHRcdF92ZWN0b3IuY3Jvc3NWZWN0b3JzKCBjYW1lcmEudXAsIF92ZWN0b3IgKTtcblxuXHRcdFx0Y2FtZXJhLnBvc2l0aW9uLmFkZFNjYWxlZFZlY3RvciggX3ZlY3RvciwgZGlzdGFuY2UgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLm1vdmVSaWdodCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cblx0XHRcdF92ZWN0b3Iuc2V0RnJvbU1hdHJpeENvbHVtbiggY2FtZXJhLm1hdHJpeCwgMCApO1xuXG5cdFx0XHRjYW1lcmEucG9zaXRpb24uYWRkU2NhbGVkVmVjdG9yKCBfdmVjdG9yLCBkaXN0YW5jZSApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMubG9jayA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dGhpcy5kb21FbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jaygpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMudW5sb2NrID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5jb25uZWN0KCk7XG5cblx0fVxuXG59XG5cbmV4cG9ydCB7IFBvaW50ZXJMb2NrQ29udHJvbHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==