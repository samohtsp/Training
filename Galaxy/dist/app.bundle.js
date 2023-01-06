"use strict";
(self["webpackChunkrayvol"] = self["webpackChunkrayvol"] || []).push([["app"],{

/***/ "./src/html/home.html":
/*!****************************!*\
  !*** ./src/html/home.html ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>Rayvol</title>\n    <script src=\"https://unpkg.com/lodash@4.17.20\"></script>\n  </head>\n  <body>\n    \n  </body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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

/***/ "./src/js/Galaxy.js":
/*!**************************!*\
  !*** ./src/js/Galaxy.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "galaxyRender": () => (/* binding */ galaxyRender),
/* harmony export */   "generateGalaxy": () => (/* binding */ generateGalaxy)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


const params = {
  count: 200000,
  size: 0.01,
  radius: 10,
  branches: 4,
  spin: 0.5,
  randomAmplitude: 1,
  insideColor: "#ff6030",
  outsideColor: "#1b3984",
};

function randomSign() {
  let sign = Math.random() - 0.5;
  if (sign >= 0) {
    return (sign = 1);
  } else {
    return (sign = -1);
  }
}

function generateGalaxy() {
  let geometry = null;
  let material = null;
  let points = null;

  if (points) {
    scene.remove(points);
    material.dispose();
    geometry.dispose();
  }

  const loader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();
  var texture = loader.load("./assets/img/discg.png");

  // Setting up few variables for the main loop
  const group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
  geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
  const positions = new Float32Array(params.count * 3);
  const colors = new Float32Array(params.count * 3);

  const colorInside = new three__WEBPACK_IMPORTED_MODULE_0__.Color(params.insideColor);
  const colorOutside = new three__WEBPACK_IMPORTED_MODULE_0__.Color(params.outsideColor);

  // Galaxy point instanciation and positioning
  for (let i = 0; i < params.count; i++) {
    const i3 = i * 3;
    //Select a random radius for point i
    const r = Math.random() * params.radius;

    //give color to the point i function of radius
    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, r / params.radius);
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

    //randomization of X Y Z coordinates with an amplitude
    let sign = randomSign();
    const randomX = sign * Math.random() * params.randomAmplitude;

    sign = randomSign();
    const randomY = sign * Math.random() * params.randomAmplitude;

    sign = randomSign();
    const randomZ = sign * Math.random() * params.randomAmplitude;

    //Selecting wich branches of the galaxie the point should be
    const branchIndex = i % params.branches;
    const branchAngle = branchIndex / params.branches;
    const rotation = branchAngle * Math.PI * 2;
    const spinAngle = r * params.spin;

    //computing the value X Y Z of the given point those équation will modify the shape of our galaxy
    // X and Z should be on a logarithmique spirale where r = a*exp( k * psy)
    //so basicaly we get those equations
    const a = 2;
    const psy = rotation + spinAngle;
    const k = 0.005;
    const linearRandom = 1;
    positions[i3] =
      r * (a * Math.exp(k * psy) * Math.cos(psy) + randomX * linearRandom);
    positions[i3 + 2] =
      r * (a * Math.exp(k * psy) * Math.sin(psy) + randomZ * linearRandom);

    //Y axis should be on a flat gaussian shape equation y= A * (1 / (theta * Math.sqrt(2 * Math.PI)))*exp( -(r*r)/(theta*theta))
    const theta = 5;
    const A = 30;
    const expo =
      (1 / (theta * Math.sqrt(2 * Math.PI))) *
      Math.exp((-0.5 * (r * r)) / (theta * theta));
    sign = randomSign();
    positions[i3 + 1] = sign * A * expo * randomY + randomY;
  }

  // Branches
  geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(colors, 3));

  material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({
    transparent: true,
    color: "#6359ee",
    map: texture,
    size: params.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: three__WEBPACK_IMPORTED_MODULE_0__.AdditiveBlending,
    vertexColors: true,
  });
  points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(geometry, material);
  group.add(points);

  console.log("generateGalaxy");
  return group;
}

function galaxyRender() {}


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

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _assets_img_smoke_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/smoke.png */ "./src/assets/img/smoke.png");
/* harmony import */ var _assets_img_discg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/discg.png */ "./src/assets/img/discg.png");
/* harmony import */ var _assets_img_disc_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/disc.png */ "./src/assets/img/disc.png");
/* harmony import */ var _assets_img_shinyPB_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/shinyPB.png */ "./src/assets/img/shinyPB.png");
/* harmony import */ var _html_home_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../html/home.html */ "./src/html/home.html");








function component() {
  const element = document.createElement('canvas');
  // const btn = document.createElement('button');
  // Lodash, now imported by this script
  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.id ='bg'
  // element.classList.add('hello');
  //btn.innerHTML = 'Click me and check the console!';
  //btn.onclick = printMe;
  //element.appendChild(btn);
  return element;
}

document.body.appendChild(component());

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Responsive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Responsive.js */ "./src/js/Responsive.js");
/* harmony import */ var three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/libs/stats.module */ "./node_modules/three/examples/jsm/libs/stats.module.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Renderer.js */ "./src/js/Renderer.js");
/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Scene.js */ "./src/js/Scene.js");
/* harmony import */ var _Controls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controls.js */ "./src/js/Controls.js");
/* harmony import */ var _Galaxy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Galaxy.js */ "./src/js/Galaxy.js");
/* harmony import */ var _node_modules_three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/three/examples/jsm/controls/OrbitControls.js */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");











//import Planet from "./Planet.js";
//import { cloud } from './Nebula.js';

//var geometry  = new THREE.SphereBufferGeometry(1,20,20);
//const material = new THREE.MeshStandardMaterial( { color:0xffffff } );
//var planet =  new Planet(scObj.scene);
//console.log(planet.mesh.position)
//planet.mesh.position.set(20,0,0);
//scObj.scene.add(planet);

//const clock = new THREE.Clock();

var stats = new three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_1__["default"]();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
//document.body.appendChild(stats.dom);

const controls = new _node_modules_three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_7__.OrbitControls(_Camera_js__WEBPACK_IMPORTED_MODULE_2__.cmObj.camera, _Renderer_js__WEBPACK_IMPORTED_MODULE_3__.rdObj.renderer.domElement);

const galaxy = (0,_Galaxy_js__WEBPACK_IMPORTED_MODULE_6__.generateGalaxy)();
_Scene_js__WEBPACK_IMPORTED_MODULE_4__.scObj.scene.add(galaxy);
function GameLoop() {
  stats.begin();
  //planet.update()
  //ctrlObj.controls.update(clock.getDelta());

  _Renderer_js__WEBPACK_IMPORTED_MODULE_3__.rdObj.renderer.render(_Scene_js__WEBPACK_IMPORTED_MODULE_4__.scObj.scene, _Camera_js__WEBPACK_IMPORTED_MODULE_2__.cmObj.camera);
  galaxy.rotateY(0.0001);
  controls.update();
  stats.end();
  requestAnimationFrame(GameLoop);
}

requestAnimationFrame(GameLoop);


/***/ }),

/***/ "./src/assets/img/disc.png":
/*!*********************************!*\
  !*** ./src/assets/img/disc.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/disc.png";

/***/ }),

/***/ "./src/assets/img/discg.png":
/*!**********************************!*\
  !*** ./src/assets/img/discg.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/discg.png";

/***/ }),

/***/ "./src/assets/img/shinyPB.png":
/*!************************************!*\
  !*** ./src/assets/img/shinyPB.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/shinyPB.png";

/***/ }),

/***/ "./src/assets/img/smoke.png":
/*!**********************************!*\
  !*** ./src/assets/img/smoke.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/smoke.png";

/***/ }),

/***/ "./node_modules/three/examples/jsm/controls/OrbitControls.js":
/*!*******************************************************************!*\
  !*** ./node_modules/three/examples/jsm/controls/OrbitControls.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapControls": () => (/* binding */ MapControls),
/* harmony export */   "OrbitControls": () => (/* binding */ OrbitControls)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

const _changeEvent = { type: 'change' };
const _startEvent = { type: 'start' };
const _endEvent = { type: 'end' };

class OrbitControls extends three__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher {

	constructor( object, domElement ) {

		super();

		if ( domElement === undefined ) console.warn( 'THREE.OrbitControls: The second parameter "domElement" is now mandatory.' );
		if ( domElement === document ) console.error( 'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.' );

		this.object = object;
		this.domElement = domElement;
		this.domElement.style.touchAction = 'none'; // disable touch scroll

		// Set to false to disable this control
		this.enabled = true;

		// "target" sets the location of focus, where the object orbits around
		this.target = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

		// How far you can dolly in and out ( PerspectiveCamera only )
		this.minDistance = 0;
		this.maxDistance = Infinity;

		// How far you can zoom in and out ( OrthographicCamera only )
		this.minZoom = 0;
		this.maxZoom = Infinity;

		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		// How far you can orbit horizontally, upper and lower limits.
		// If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
		this.minAzimuthAngle = - Infinity; // radians
		this.maxAzimuthAngle = Infinity; // radians

		// Set to true to enable damping (inertia)
		// If damping is enabled, you must call controls.update() in your animation loop
		this.enableDamping = false;
		this.dampingFactor = 0.05;

		// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
		// Set to false to disable zooming
		this.enableZoom = true;
		this.zoomSpeed = 1.0;

		// Set to false to disable rotating
		this.enableRotate = true;
		this.rotateSpeed = 1.0;

		// Set to false to disable panning
		this.enablePan = true;
		this.panSpeed = 1.0;
		this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up
		this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

		// Set to true to automatically rotate around the target
		// If auto-rotate is enabled, you must call controls.update() in your animation loop
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60

		// The four arrow keys
		this.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' };

		// Mouse buttons
		this.mouseButtons = { LEFT: three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.ROTATE, MIDDLE: three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.DOLLY, RIGHT: three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.PAN };

		// Touch fingers
		this.touches = { ONE: three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.ROTATE, TWO: three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.DOLLY_PAN };

		// for reset
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;

		// the target DOM element for key events
		this._domElementKeyEvents = null;

		//
		// public methods
		//

		this.getPolarAngle = function () {

			return spherical.phi;

		};

		this.getAzimuthalAngle = function () {

			return spherical.theta;

		};

		this.getDistance = function () {

			return this.object.position.distanceTo( this.target );

		};

		this.listenToKeyEvents = function ( domElement ) {

			domElement.addEventListener( 'keydown', onKeyDown );
			this._domElementKeyEvents = domElement;

		};

		this.saveState = function () {

			scope.target0.copy( scope.target );
			scope.position0.copy( scope.object.position );
			scope.zoom0 = scope.object.zoom;

		};

		this.reset = function () {

			scope.target.copy( scope.target0 );
			scope.object.position.copy( scope.position0 );
			scope.object.zoom = scope.zoom0;

			scope.object.updateProjectionMatrix();
			scope.dispatchEvent( _changeEvent );

			scope.update();

			state = STATE.NONE;

		};

		// this method is exposed, but perhaps it would be better if we can make it private...
		this.update = function () {

			const offset = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

			// so camera.up is the orbit axis
			const quat = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion().setFromUnitVectors( object.up, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( 0, 1, 0 ) );
			const quatInverse = quat.clone().invert();

			const lastPosition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
			const lastQuaternion = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion();

			const twoPI = 2 * Math.PI;

			return function update() {

				const position = scope.object.position;

				offset.copy( position ).sub( scope.target );

				// rotate offset to "y-axis-is-up" space
				offset.applyQuaternion( quat );

				// angle from z-axis around y-axis
				spherical.setFromVector3( offset );

				if ( scope.autoRotate && state === STATE.NONE ) {

					rotateLeft( getAutoRotationAngle() );

				}

				if ( scope.enableDamping ) {

					spherical.theta += sphericalDelta.theta * scope.dampingFactor;
					spherical.phi += sphericalDelta.phi * scope.dampingFactor;

				} else {

					spherical.theta += sphericalDelta.theta;
					spherical.phi += sphericalDelta.phi;

				}

				// restrict theta to be between desired limits

				let min = scope.minAzimuthAngle;
				let max = scope.maxAzimuthAngle;

				if ( isFinite( min ) && isFinite( max ) ) {

					if ( min < - Math.PI ) min += twoPI; else if ( min > Math.PI ) min -= twoPI;

					if ( max < - Math.PI ) max += twoPI; else if ( max > Math.PI ) max -= twoPI;

					if ( min <= max ) {

						spherical.theta = Math.max( min, Math.min( max, spherical.theta ) );

					} else {

						spherical.theta = ( spherical.theta > ( min + max ) / 2 ) ?
							Math.max( min, spherical.theta ) :
							Math.min( max, spherical.theta );

					}

				}

				// restrict phi to be between desired limits
				spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

				spherical.makeSafe();


				spherical.radius *= scale;

				// restrict radius to be between desired limits
				spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

				// move target to panned location

				if ( scope.enableDamping === true ) {

					scope.target.addScaledVector( panOffset, scope.dampingFactor );

				} else {

					scope.target.add( panOffset );

				}

				offset.setFromSpherical( spherical );

				// rotate offset back to "camera-up-vector-is-up" space
				offset.applyQuaternion( quatInverse );

				position.copy( scope.target ).add( offset );

				scope.object.lookAt( scope.target );

				if ( scope.enableDamping === true ) {

					sphericalDelta.theta *= ( 1 - scope.dampingFactor );
					sphericalDelta.phi *= ( 1 - scope.dampingFactor );

					panOffset.multiplyScalar( 1 - scope.dampingFactor );

				} else {

					sphericalDelta.set( 0, 0, 0 );

					panOffset.set( 0, 0, 0 );

				}

				scale = 1;

				// update condition is:
				// min(camera displacement, camera rotation in radians)^2 > EPS
				// using small-angle approximation cos(x/2) = 1 - x^2 / 8

				if ( zoomChanged ||
					lastPosition.distanceToSquared( scope.object.position ) > EPS ||
					8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

					scope.dispatchEvent( _changeEvent );

					lastPosition.copy( scope.object.position );
					lastQuaternion.copy( scope.object.quaternion );
					zoomChanged = false;

					return true;

				}

				return false;

			};

		}();

		this.dispose = function () {

			scope.domElement.removeEventListener( 'contextmenu', onContextMenu );

			scope.domElement.removeEventListener( 'pointerdown', onPointerDown );
			scope.domElement.removeEventListener( 'pointercancel', onPointerCancel );
			scope.domElement.removeEventListener( 'wheel', onMouseWheel );

			scope.domElement.removeEventListener( 'pointermove', onPointerMove );
			scope.domElement.removeEventListener( 'pointerup', onPointerUp );


			if ( scope._domElementKeyEvents !== null ) {

				scope._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );

			}

			//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

		};

		//
		// internals
		//

		const scope = this;

		const STATE = {
			NONE: - 1,
			ROTATE: 0,
			DOLLY: 1,
			PAN: 2,
			TOUCH_ROTATE: 3,
			TOUCH_PAN: 4,
			TOUCH_DOLLY_PAN: 5,
			TOUCH_DOLLY_ROTATE: 6
		};

		let state = STATE.NONE;

		const EPS = 0.000001;

		// current position in spherical coordinates
		const spherical = new three__WEBPACK_IMPORTED_MODULE_0__.Spherical();
		const sphericalDelta = new three__WEBPACK_IMPORTED_MODULE_0__.Spherical();

		let scale = 1;
		const panOffset = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
		let zoomChanged = false;

		const rotateStart = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();
		const rotateEnd = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();
		const rotateDelta = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();

		const panStart = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();
		const panEnd = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();
		const panDelta = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();

		const dollyStart = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();
		const dollyEnd = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();
		const dollyDelta = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();

		const pointers = [];
		const pointerPositions = {};

		function getAutoRotationAngle() {

			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

		}

		function getZoomScale() {

			return Math.pow( 0.95, scope.zoomSpeed );

		}

		function rotateLeft( angle ) {

			sphericalDelta.theta -= angle;

		}

		function rotateUp( angle ) {

			sphericalDelta.phi -= angle;

		}

		const panLeft = function () {

			const v = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

			return function panLeft( distance, objectMatrix ) {

				v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
				v.multiplyScalar( - distance );

				panOffset.add( v );

			};

		}();

		const panUp = function () {

			const v = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

			return function panUp( distance, objectMatrix ) {

				if ( scope.screenSpacePanning === true ) {

					v.setFromMatrixColumn( objectMatrix, 1 );

				} else {

					v.setFromMatrixColumn( objectMatrix, 0 );
					v.crossVectors( scope.object.up, v );

				}

				v.multiplyScalar( distance );

				panOffset.add( v );

			};

		}();

		// deltaX and deltaY are in pixels; right and down are positive
		const pan = function () {

			const offset = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

			return function pan( deltaX, deltaY ) {

				const element = scope.domElement;

				if ( scope.object.isPerspectiveCamera ) {

					// perspective
					const position = scope.object.position;
					offset.copy( position ).sub( scope.target );
					let targetDistance = offset.length();

					// half of the fov is center to top of screen
					targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

					// we use only clientHeight here so aspect ratio does not distort speed
					panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
					panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

				} else if ( scope.object.isOrthographicCamera ) {

					// orthographic
					panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
					panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

				} else {

					// camera neither orthographic nor perspective
					console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
					scope.enablePan = false;

				}

			};

		}();

		function dollyOut( dollyScale ) {

			if ( scope.object.isPerspectiveCamera ) {

				scale /= dollyScale;

			} else if ( scope.object.isOrthographicCamera ) {

				scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
				scope.object.updateProjectionMatrix();
				zoomChanged = true;

			} else {

				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
				scope.enableZoom = false;

			}

		}

		function dollyIn( dollyScale ) {

			if ( scope.object.isPerspectiveCamera ) {

				scale *= dollyScale;

			} else if ( scope.object.isOrthographicCamera ) {

				scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
				scope.object.updateProjectionMatrix();
				zoomChanged = true;

			} else {

				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
				scope.enableZoom = false;

			}

		}

		//
		// event callbacks - update the object state
		//

		function handleMouseDownRotate( event ) {

			rotateStart.set( event.clientX, event.clientY );

		}

		function handleMouseDownDolly( event ) {

			dollyStart.set( event.clientX, event.clientY );

		}

		function handleMouseDownPan( event ) {

			panStart.set( event.clientX, event.clientY );

		}

		function handleMouseMoveRotate( event ) {

			rotateEnd.set( event.clientX, event.clientY );

			rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

			const element = scope.domElement;

			rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

			rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

			rotateStart.copy( rotateEnd );

			scope.update();

		}

		function handleMouseMoveDolly( event ) {

			dollyEnd.set( event.clientX, event.clientY );

			dollyDelta.subVectors( dollyEnd, dollyStart );

			if ( dollyDelta.y > 0 ) {

				dollyOut( getZoomScale() );

			} else if ( dollyDelta.y < 0 ) {

				dollyIn( getZoomScale() );

			}

			dollyStart.copy( dollyEnd );

			scope.update();

		}

		function handleMouseMovePan( event ) {

			panEnd.set( event.clientX, event.clientY );

			panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

			pan( panDelta.x, panDelta.y );

			panStart.copy( panEnd );

			scope.update();

		}

		function handleMouseWheel( event ) {

			if ( event.deltaY < 0 ) {

				dollyIn( getZoomScale() );

			} else if ( event.deltaY > 0 ) {

				dollyOut( getZoomScale() );

			}

			scope.update();

		}

		function handleKeyDown( event ) {

			let needsUpdate = false;

			switch ( event.code ) {

				case scope.keys.UP:
					pan( 0, scope.keyPanSpeed );
					needsUpdate = true;
					break;

				case scope.keys.BOTTOM:
					pan( 0, - scope.keyPanSpeed );
					needsUpdate = true;
					break;

				case scope.keys.LEFT:
					pan( scope.keyPanSpeed, 0 );
					needsUpdate = true;
					break;

				case scope.keys.RIGHT:
					pan( - scope.keyPanSpeed, 0 );
					needsUpdate = true;
					break;

			}

			if ( needsUpdate ) {

				// prevent the browser from scrolling on cursor keys
				event.preventDefault();

				scope.update();

			}


		}

		function handleTouchStartRotate() {

			if ( pointers.length === 1 ) {

				rotateStart.set( pointers[ 0 ].pageX, pointers[ 0 ].pageY );

			} else {

				const x = 0.5 * ( pointers[ 0 ].pageX + pointers[ 1 ].pageX );
				const y = 0.5 * ( pointers[ 0 ].pageY + pointers[ 1 ].pageY );

				rotateStart.set( x, y );

			}

		}

		function handleTouchStartPan() {

			if ( pointers.length === 1 ) {

				panStart.set( pointers[ 0 ].pageX, pointers[ 0 ].pageY );

			} else {

				const x = 0.5 * ( pointers[ 0 ].pageX + pointers[ 1 ].pageX );
				const y = 0.5 * ( pointers[ 0 ].pageY + pointers[ 1 ].pageY );

				panStart.set( x, y );

			}

		}

		function handleTouchStartDolly() {

			const dx = pointers[ 0 ].pageX - pointers[ 1 ].pageX;
			const dy = pointers[ 0 ].pageY - pointers[ 1 ].pageY;

			const distance = Math.sqrt( dx * dx + dy * dy );

			dollyStart.set( 0, distance );

		}

		function handleTouchStartDollyPan() {

			if ( scope.enableZoom ) handleTouchStartDolly();

			if ( scope.enablePan ) handleTouchStartPan();

		}

		function handleTouchStartDollyRotate() {

			if ( scope.enableZoom ) handleTouchStartDolly();

			if ( scope.enableRotate ) handleTouchStartRotate();

		}

		function handleTouchMoveRotate( event ) {

			if ( pointers.length == 1 ) {

				rotateEnd.set( event.pageX, event.pageY );

			} else {

				const position = getSecondPointerPosition( event );

				const x = 0.5 * ( event.pageX + position.x );
				const y = 0.5 * ( event.pageY + position.y );

				rotateEnd.set( x, y );

			}

			rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

			const element = scope.domElement;

			rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

			rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

			rotateStart.copy( rotateEnd );

		}

		function handleTouchMovePan( event ) {

			if ( pointers.length === 1 ) {

				panEnd.set( event.pageX, event.pageY );

			} else {

				const position = getSecondPointerPosition( event );

				const x = 0.5 * ( event.pageX + position.x );
				const y = 0.5 * ( event.pageY + position.y );

				panEnd.set( x, y );

			}

			panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

			pan( panDelta.x, panDelta.y );

			panStart.copy( panEnd );

		}

		function handleTouchMoveDolly( event ) {

			const position = getSecondPointerPosition( event );

			const dx = event.pageX - position.x;
			const dy = event.pageY - position.y;

			const distance = Math.sqrt( dx * dx + dy * dy );

			dollyEnd.set( 0, distance );

			dollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );

			dollyOut( dollyDelta.y );

			dollyStart.copy( dollyEnd );

		}

		function handleTouchMoveDollyPan( event ) {

			if ( scope.enableZoom ) handleTouchMoveDolly( event );

			if ( scope.enablePan ) handleTouchMovePan( event );

		}

		function handleTouchMoveDollyRotate( event ) {

			if ( scope.enableZoom ) handleTouchMoveDolly( event );

			if ( scope.enableRotate ) handleTouchMoveRotate( event );

		}

		//
		// event handlers - FSM: listen for events and reset state
		//

		function onPointerDown( event ) {

			if ( scope.enabled === false ) return;

			if ( pointers.length === 0 ) {

				scope.domElement.setPointerCapture( event.pointerId );

				scope.domElement.addEventListener( 'pointermove', onPointerMove );
				scope.domElement.addEventListener( 'pointerup', onPointerUp );

			}

			//

			addPointer( event );

			if ( event.pointerType === 'touch' ) {

				onTouchStart( event );

			} else {

				onMouseDown( event );

			}

		}

		function onPointerMove( event ) {

			if ( scope.enabled === false ) return;

			if ( event.pointerType === 'touch' ) {

				onTouchMove( event );

			} else {

				onMouseMove( event );

			}

		}

		function onPointerUp( event ) {

		    removePointer( event );

		    if ( pointers.length === 0 ) {

		        scope.domElement.releasePointerCapture( event.pointerId );

		        scope.domElement.removeEventListener( 'pointermove', onPointerMove );
		        scope.domElement.removeEventListener( 'pointerup', onPointerUp );

		    }

		    scope.dispatchEvent( _endEvent );

		    state = STATE.NONE;

		}

		function onPointerCancel( event ) {

			removePointer( event );

		}

		function onMouseDown( event ) {

			let mouseAction;

			switch ( event.button ) {

				case 0:

					mouseAction = scope.mouseButtons.LEFT;
					break;

				case 1:

					mouseAction = scope.mouseButtons.MIDDLE;
					break;

				case 2:

					mouseAction = scope.mouseButtons.RIGHT;
					break;

				default:

					mouseAction = - 1;

			}

			switch ( mouseAction ) {

				case three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.DOLLY:

					if ( scope.enableZoom === false ) return;

					handleMouseDownDolly( event );

					state = STATE.DOLLY;

					break;

				case three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.ROTATE:

					if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

						if ( scope.enablePan === false ) return;

						handleMouseDownPan( event );

						state = STATE.PAN;

					} else {

						if ( scope.enableRotate === false ) return;

						handleMouseDownRotate( event );

						state = STATE.ROTATE;

					}

					break;

				case three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.PAN:

					if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

						if ( scope.enableRotate === false ) return;

						handleMouseDownRotate( event );

						state = STATE.ROTATE;

					} else {

						if ( scope.enablePan === false ) return;

						handleMouseDownPan( event );

						state = STATE.PAN;

					}

					break;

				default:

					state = STATE.NONE;

			}

			if ( state !== STATE.NONE ) {

				scope.dispatchEvent( _startEvent );

			}

		}

		function onMouseMove( event ) {

			if ( scope.enabled === false ) return;

			switch ( state ) {

				case STATE.ROTATE:

					if ( scope.enableRotate === false ) return;

					handleMouseMoveRotate( event );

					break;

				case STATE.DOLLY:

					if ( scope.enableZoom === false ) return;

					handleMouseMoveDolly( event );

					break;

				case STATE.PAN:

					if ( scope.enablePan === false ) return;

					handleMouseMovePan( event );

					break;

			}

		}

		function onMouseWheel( event ) {

			if ( scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE ) return;

			event.preventDefault();

			scope.dispatchEvent( _startEvent );

			handleMouseWheel( event );

			scope.dispatchEvent( _endEvent );

		}

		function onKeyDown( event ) {

			if ( scope.enabled === false || scope.enablePan === false ) return;

			handleKeyDown( event );

		}

		function onTouchStart( event ) {

			trackPointer( event );

			switch ( pointers.length ) {

				case 1:

					switch ( scope.touches.ONE ) {

						case three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.ROTATE:

							if ( scope.enableRotate === false ) return;

							handleTouchStartRotate();

							state = STATE.TOUCH_ROTATE;

							break;

						case three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.PAN:

							if ( scope.enablePan === false ) return;

							handleTouchStartPan();

							state = STATE.TOUCH_PAN;

							break;

						default:

							state = STATE.NONE;

					}

					break;

				case 2:

					switch ( scope.touches.TWO ) {

						case three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.DOLLY_PAN:

							if ( scope.enableZoom === false && scope.enablePan === false ) return;

							handleTouchStartDollyPan();

							state = STATE.TOUCH_DOLLY_PAN;

							break;

						case three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.DOLLY_ROTATE:

							if ( scope.enableZoom === false && scope.enableRotate === false ) return;

							handleTouchStartDollyRotate();

							state = STATE.TOUCH_DOLLY_ROTATE;

							break;

						default:

							state = STATE.NONE;

					}

					break;

				default:

					state = STATE.NONE;

			}

			if ( state !== STATE.NONE ) {

				scope.dispatchEvent( _startEvent );

			}

		}

		function onTouchMove( event ) {

			trackPointer( event );

			switch ( state ) {

				case STATE.TOUCH_ROTATE:

					if ( scope.enableRotate === false ) return;

					handleTouchMoveRotate( event );

					scope.update();

					break;

				case STATE.TOUCH_PAN:

					if ( scope.enablePan === false ) return;

					handleTouchMovePan( event );

					scope.update();

					break;

				case STATE.TOUCH_DOLLY_PAN:

					if ( scope.enableZoom === false && scope.enablePan === false ) return;

					handleTouchMoveDollyPan( event );

					scope.update();

					break;

				case STATE.TOUCH_DOLLY_ROTATE:

					if ( scope.enableZoom === false && scope.enableRotate === false ) return;

					handleTouchMoveDollyRotate( event );

					scope.update();

					break;

				default:

					state = STATE.NONE;

			}

		}

		function onContextMenu( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

		}

		function addPointer( event ) {

			pointers.push( event );

		}

		function removePointer( event ) {

			delete pointerPositions[ event.pointerId ];

			for ( let i = 0; i < pointers.length; i ++ ) {

				if ( pointers[ i ].pointerId == event.pointerId ) {

					pointers.splice( i, 1 );
					return;

				}

			}

		}

		function trackPointer( event ) {

			let position = pointerPositions[ event.pointerId ];

			if ( position === undefined ) {

				position = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();
				pointerPositions[ event.pointerId ] = position;

			}

			position.set( event.pageX, event.pageY );

		}

		function getSecondPointerPosition( event ) {

			const pointer = ( event.pointerId === pointers[ 0 ].pointerId ) ? pointers[ 1 ] : pointers[ 0 ];

			return pointerPositions[ pointer.pointerId ];

		}

		//

		scope.domElement.addEventListener( 'contextmenu', onContextMenu );

		scope.domElement.addEventListener( 'pointerdown', onPointerDown );
		scope.domElement.addEventListener( 'pointercancel', onPointerCancel );
		scope.domElement.addEventListener( 'wheel', onMouseWheel, { passive: false } );

		// force an update at start

		this.update();

	}

}


// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
// This is very similar to OrbitControls, another set of touch behavior
//
//    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch: two-finger rotate
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - left mouse, or arrow keys / touch: one-finger move

class MapControls extends OrbitControls {

	constructor( object, domElement ) {

		super( object, domElement );

		this.screenSpacePanning = false; // pan orthogonal to world-space direction camera.up

		this.mouseButtons.LEFT = three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.PAN;
		this.mouseButtons.RIGHT = three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.ROTATE;

		this.touches.ONE = three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.PAN;
		this.touches.TWO = three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.DOLLY_ROTATE;

	}

}




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
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


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




/***/ }),

/***/ "./node_modules/three/examples/jsm/libs/stats.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/three/examples/jsm/libs/stats.module.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Stats = function () {

	var mode = 0;

	var container = document.createElement( 'div' );
	container.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000';
	container.addEventListener( 'click', function ( event ) {

		event.preventDefault();
		showPanel( ++ mode % container.children.length );

	}, false );

	//

	function addPanel( panel ) {

		container.appendChild( panel.dom );
		return panel;

	}

	function showPanel( id ) {

		for ( var i = 0; i < container.children.length; i ++ ) {

			container.children[ i ].style.display = i === id ? 'block' : 'none';

		}

		mode = id;

	}

	//

	var beginTime = ( performance || Date ).now(), prevTime = beginTime, frames = 0;

	var fpsPanel = addPanel( new Stats.Panel( 'FPS', '#0ff', '#002' ) );
	var msPanel = addPanel( new Stats.Panel( 'MS', '#0f0', '#020' ) );

	if ( self.performance && self.performance.memory ) {

		var memPanel = addPanel( new Stats.Panel( 'MB', '#f08', '#201' ) );

	}

	showPanel( 0 );

	return {

		REVISION: 16,

		dom: container,

		addPanel: addPanel,
		showPanel: showPanel,

		begin: function () {

			beginTime = ( performance || Date ).now();

		},

		end: function () {

			frames ++;

			var time = ( performance || Date ).now();

			msPanel.update( time - beginTime, 200 );

			if ( time >= prevTime + 1000 ) {

				fpsPanel.update( ( frames * 1000 ) / ( time - prevTime ), 100 );

				prevTime = time;
				frames = 0;

				if ( memPanel ) {

					var memory = performance.memory;
					memPanel.update( memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576 );

				}

			}

			return time;

		},

		update: function () {

			beginTime = this.end();

		},

		// Backwards Compatibility

		domElement: container,
		setMode: showPanel

	};

};

Stats.Panel = function ( name, fg, bg ) {

	var min = Infinity, max = 0, round = Math.round;
	var PR = round( window.devicePixelRatio || 1 );

	var WIDTH = 80 * PR, HEIGHT = 48 * PR,
		TEXT_X = 3 * PR, TEXT_Y = 2 * PR,
		GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR,
		GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;

	var canvas = document.createElement( 'canvas' );
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	canvas.style.cssText = 'width:80px;height:48px';

	var context = canvas.getContext( '2d' );
	context.font = 'bold ' + ( 9 * PR ) + 'px Helvetica,Arial,sans-serif';
	context.textBaseline = 'top';

	context.fillStyle = bg;
	context.fillRect( 0, 0, WIDTH, HEIGHT );

	context.fillStyle = fg;
	context.fillText( name, TEXT_X, TEXT_Y );
	context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

	context.fillStyle = bg;
	context.globalAlpha = 0.9;
	context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

	return {

		dom: canvas,

		update: function ( value, maxValue ) {

			min = Math.min( min, value );
			max = Math.max( max, value );

			context.fillStyle = bg;
			context.globalAlpha = 1;
			context.fillRect( 0, 0, WIDTH, GRAPH_Y );
			context.fillStyle = fg;
			context.fillText( round( value ) + ' ' + name + ' (' + round( min ) + '-' + round( max ) + ')', TEXT_X, TEXT_Y );

			context.drawImage( canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT );

			context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT );

			context.fillStyle = bg;
			context.globalAlpha = 0.9;
			context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round( ( 1 - ( value / maxValue ) ) * GRAPH_HEIGHT ) );

		}

	};

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stats);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/index.js"), __webpack_exec__("./src/js/main.js"), __webpack_exec__("./src/js/Responsive.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxPQUFPO0FBQ1o7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMLElBQUksT0FBTztBQUNYOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUwsSUFBSSxPQUFPO0FBQ1g7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHFFQUFxRTs7QUFFckU7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEscUVBQXFFOztBQUVyRTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxTQUFTLDhDQUFXOztBQUVwQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxTQUFTLCtDQUFZOztBQUVyQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFNBQVMsNENBQVM7O0FBRWxCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLE9BQU87O0FBRVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FB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QUErQjs7QUFFbEQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL2h0bWwvaG9tZS5odG1sIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9jc3MvbWFpbi5jc3M/YzA4ZSIsIndlYnBhY2s6Ly9yYXl2b2wvLi9zcmMvanMvQ2FtZXJhLmpzIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9qcy9Db250cm9scy5qcyIsIndlYnBhY2s6Ly9yYXl2b2wvLi9zcmMvanMvR2FsYXh5LmpzIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9qcy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9yYXl2b2wvLi9zcmMvanMvUmVzcG9uc2l2ZS5qcyIsIndlYnBhY2s6Ly9yYXl2b2wvLi9zcmMvanMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL3JheXZvbC8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scy5qcyIsIndlYnBhY2s6Ly9yYXl2b2wvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL1BvaW50ZXJMb2NrQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vcmF5dm9sLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9saWJzL3N0YXRzLm1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbD5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCIgLz5cXG4gICAgPHRpdGxlPlJheXZvbDwvdGl0bGU+XFxuICAgIDxzY3JpcHQgc3JjPVxcXCJodHRwczovL3VucGtnLmNvbS9sb2Rhc2hANC4xNy4yMFxcXCI+PC9zY3JpcHQ+XFxuICA8L2hlYWQ+XFxuICA8Ym9keT5cXG4gICAgXFxuICA8L2JvZHk+XFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5leHBvcnQgY29uc3QgY21PYmogPSB7XHJcbiAgICBjYW1lcmEgOiBudWxsLFxyXG4gICAgaW5pdENhbWVyYSA6ICgpID0+IHtcclxuICAgICAgICBjbU9iai5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsICh3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCksMC4xLDEwMDApO1xyXG4gICAgICAgIGNtT2JqLmNhbWVyYS5wb3NpdGlvbi5zZXQoIDAsIDAuMiAsIDAuOCApO1xyXG4gICAgICAgIGNtT2JqLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoLTAuOCwwLDApKTtcclxuICAgIH1cclxufTtcclxuY21PYmouaW5pdENhbWVyYSgpO1xyXG4iLCJpbXBvcnQge1BvaW50ZXJMb2NrQ29udHJvbHN9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9Qb2ludGVyTG9ja0NvbnRyb2xzJ1xyXG5pbXBvcnQgeyBjbU9iaiB9IGZyb20gJy4vQ2FtZXJhLmpzJztcclxuaW1wb3J0IHsgcmRPYmogfSBmcm9tICcuL1JlbmRlcmVyLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjdHJsT2JqID0ge1xyXG4gICAgY29udHJvbHM6bnVsbCxcclxuICAgIGluaXRDb250cm9scyA6ICgpPT57XHJcbiAgICAgICAgY3RybE9iai5jb250cm9scyA9IG5ldyBQb2ludGVyTG9ja0NvbnRyb2xzKGNtT2JqLmNhbWVyYSxyZE9iai5yZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICBjdHJsT2JqLmNvbnRyb2xzLm1vdmVtZW50U3BlZWQgPSAxNTA7XHJcbiAgICAgICAgY3RybE9iai5jb250cm9scy5sb29rU3BlZWQgPSAwLjE7XHJcblxyXG4gICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdpbiBldmVudCBsaXN0ZW5lciBlID0nLGUuZGVsdGFZIClcclxuICAgICAgICAgICAgaWYgKGUuZGVsdGFZIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY3RybE9iai5jb250cm9scy5tb3ZlRm9yd2FyZCg1KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY3RybE9iai5jb250cm9scy5tb3ZlRm9yd2FyZCgtNSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBcIndcIikge1xyXG4gICAgICAgICAgICAgICAgY3RybE9iai5jb250cm9scy5tb3ZlRm9yd2FyZCgxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUua2V5ID09IFwic1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjdHJsT2JqLmNvbnRyb2xzLm1vdmVGb3J3YXJkKC0xKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBcclxuICAgICAgICB9KTsqL1xyXG4gICAgfSxcclxufTtcclxuY3RybE9iai5pbml0Q29udHJvbHMoKTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IHBhcmFtcyA9IHtcclxuICBjb3VudDogMjAwMDAwLFxyXG4gIHNpemU6IDAuMDEsXHJcbiAgcmFkaXVzOiAxMCxcclxuICBicmFuY2hlczogNCxcclxuICBzcGluOiAwLjUsXHJcbiAgcmFuZG9tQW1wbGl0dWRlOiAxLFxyXG4gIGluc2lkZUNvbG9yOiBcIiNmZjYwMzBcIixcclxuICBvdXRzaWRlQ29sb3I6IFwiIzFiMzk4NFwiLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmFuZG9tU2lnbigpIHtcclxuICBsZXQgc2lnbiA9IE1hdGgucmFuZG9tKCkgLSAwLjU7XHJcbiAgaWYgKHNpZ24gPj0gMCkge1xyXG4gICAgcmV0dXJuIChzaWduID0gMSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoc2lnbiA9IC0xKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUdhbGF4eSgpIHtcclxuICBsZXQgZ2VvbWV0cnkgPSBudWxsO1xyXG4gIGxldCBtYXRlcmlhbCA9IG51bGw7XHJcbiAgbGV0IHBvaW50cyA9IG51bGw7XHJcblxyXG4gIGlmIChwb2ludHMpIHtcclxuICAgIHNjZW5lLnJlbW92ZShwb2ludHMpO1xyXG4gICAgbWF0ZXJpYWwuZGlzcG9zZSgpO1xyXG4gICAgZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcclxuICB2YXIgdGV4dHVyZSA9IGxvYWRlci5sb2FkKFwiLi9hc3NldHMvaW1nL2Rpc2NnLnBuZ1wiKTtcclxuXHJcbiAgLy8gU2V0dGluZyB1cCBmZXcgdmFyaWFibGVzIGZvciB0aGUgbWFpbiBsb29wXHJcbiAgY29uc3QgZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcclxuICBnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xyXG4gIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkocGFyYW1zLmNvdW50ICogMyk7XHJcbiAgY29uc3QgY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheShwYXJhbXMuY291bnQgKiAzKTtcclxuXHJcbiAgY29uc3QgY29sb3JJbnNpZGUgPSBuZXcgVEhSRUUuQ29sb3IocGFyYW1zLmluc2lkZUNvbG9yKTtcclxuICBjb25zdCBjb2xvck91dHNpZGUgPSBuZXcgVEhSRUUuQ29sb3IocGFyYW1zLm91dHNpZGVDb2xvcik7XHJcblxyXG4gIC8vIEdhbGF4eSBwb2ludCBpbnN0YW5jaWF0aW9uIGFuZCBwb3NpdGlvbmluZ1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1zLmNvdW50OyBpKyspIHtcclxuICAgIGNvbnN0IGkzID0gaSAqIDM7XHJcbiAgICAvL1NlbGVjdCBhIHJhbmRvbSByYWRpdXMgZm9yIHBvaW50IGlcclxuICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogcGFyYW1zLnJhZGl1cztcclxuXHJcbiAgICAvL2dpdmUgY29sb3IgdG8gdGhlIHBvaW50IGkgZnVuY3Rpb24gb2YgcmFkaXVzXHJcbiAgICBjb25zdCBtaXhlZENvbG9yID0gY29sb3JJbnNpZGUuY2xvbmUoKTtcclxuICAgIG1peGVkQ29sb3IubGVycChjb2xvck91dHNpZGUsIHIgLyBwYXJhbXMucmFkaXVzKTtcclxuICAgIGNvbG9yc1tpM10gPSBtaXhlZENvbG9yLnI7XHJcbiAgICBjb2xvcnNbaTMgKyAxXSA9IG1peGVkQ29sb3IuZztcclxuICAgIGNvbG9yc1tpMyArIDJdID0gbWl4ZWRDb2xvci5iO1xyXG5cclxuICAgIC8vcmFuZG9taXphdGlvbiBvZiBYIFkgWiBjb29yZGluYXRlcyB3aXRoIGFuIGFtcGxpdHVkZVxyXG4gICAgbGV0IHNpZ24gPSByYW5kb21TaWduKCk7XHJcbiAgICBjb25zdCByYW5kb21YID0gc2lnbiAqIE1hdGgucmFuZG9tKCkgKiBwYXJhbXMucmFuZG9tQW1wbGl0dWRlO1xyXG5cclxuICAgIHNpZ24gPSByYW5kb21TaWduKCk7XHJcbiAgICBjb25zdCByYW5kb21ZID0gc2lnbiAqIE1hdGgucmFuZG9tKCkgKiBwYXJhbXMucmFuZG9tQW1wbGl0dWRlO1xyXG5cclxuICAgIHNpZ24gPSByYW5kb21TaWduKCk7XHJcbiAgICBjb25zdCByYW5kb21aID0gc2lnbiAqIE1hdGgucmFuZG9tKCkgKiBwYXJhbXMucmFuZG9tQW1wbGl0dWRlO1xyXG5cclxuICAgIC8vU2VsZWN0aW5nIHdpY2ggYnJhbmNoZXMgb2YgdGhlIGdhbGF4aWUgdGhlIHBvaW50IHNob3VsZCBiZVxyXG4gICAgY29uc3QgYnJhbmNoSW5kZXggPSBpICUgcGFyYW1zLmJyYW5jaGVzO1xyXG4gICAgY29uc3QgYnJhbmNoQW5nbGUgPSBicmFuY2hJbmRleCAvIHBhcmFtcy5icmFuY2hlcztcclxuICAgIGNvbnN0IHJvdGF0aW9uID0gYnJhbmNoQW5nbGUgKiBNYXRoLlBJICogMjtcclxuICAgIGNvbnN0IHNwaW5BbmdsZSA9IHIgKiBwYXJhbXMuc3BpbjtcclxuXHJcbiAgICAvL2NvbXB1dGluZyB0aGUgdmFsdWUgWCBZIFogb2YgdGhlIGdpdmVuIHBvaW50IHRob3NlIMOpcXVhdGlvbiB3aWxsIG1vZGlmeSB0aGUgc2hhcGUgb2Ygb3VyIGdhbGF4eVxyXG4gICAgLy8gWCBhbmQgWiBzaG91bGQgYmUgb24gYSBsb2dhcml0aG1pcXVlIHNwaXJhbGUgd2hlcmUgciA9IGEqZXhwKCBrICogcHN5KVxyXG4gICAgLy9zbyBiYXNpY2FseSB3ZSBnZXQgdGhvc2UgZXF1YXRpb25zXHJcbiAgICBjb25zdCBhID0gMjtcclxuICAgIGNvbnN0IHBzeSA9IHJvdGF0aW9uICsgc3BpbkFuZ2xlO1xyXG4gICAgY29uc3QgayA9IDAuMDA1O1xyXG4gICAgY29uc3QgbGluZWFyUmFuZG9tID0gMTtcclxuICAgIHBvc2l0aW9uc1tpM10gPVxyXG4gICAgICByICogKGEgKiBNYXRoLmV4cChrICogcHN5KSAqIE1hdGguY29zKHBzeSkgKyByYW5kb21YICogbGluZWFyUmFuZG9tKTtcclxuICAgIHBvc2l0aW9uc1tpMyArIDJdID1cclxuICAgICAgciAqIChhICogTWF0aC5leHAoayAqIHBzeSkgKiBNYXRoLnNpbihwc3kpICsgcmFuZG9tWiAqIGxpbmVhclJhbmRvbSk7XHJcblxyXG4gICAgLy9ZIGF4aXMgc2hvdWxkIGJlIG9uIGEgZmxhdCBnYXVzc2lhbiBzaGFwZSBlcXVhdGlvbiB5PSBBICogKDEgLyAodGhldGEgKiBNYXRoLnNxcnQoMiAqIE1hdGguUEkpKSkqZXhwKCAtKHIqcikvKHRoZXRhKnRoZXRhKSlcclxuICAgIGNvbnN0IHRoZXRhID0gNTtcclxuICAgIGNvbnN0IEEgPSAzMDtcclxuICAgIGNvbnN0IGV4cG8gPVxyXG4gICAgICAoMSAvICh0aGV0YSAqIE1hdGguc3FydCgyICogTWF0aC5QSSkpKSAqXHJcbiAgICAgIE1hdGguZXhwKCgtMC41ICogKHIgKiByKSkgLyAodGhldGEgKiB0aGV0YSkpO1xyXG4gICAgc2lnbiA9IHJhbmRvbVNpZ24oKTtcclxuICAgIHBvc2l0aW9uc1tpMyArIDFdID0gc2lnbiAqIEEgKiBleHBvICogcmFuZG9tWSArIHJhbmRvbVk7XHJcbiAgfVxyXG5cclxuICAvLyBCcmFuY2hlc1xyXG4gIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSk7XHJcbiAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiY29sb3JcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvcnMsIDMpKTtcclxuXHJcbiAgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuUG9pbnRzTWF0ZXJpYWwoe1xyXG4gICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICBjb2xvcjogXCIjNjM1OWVlXCIsXHJcbiAgICBtYXA6IHRleHR1cmUsXHJcbiAgICBzaXplOiBwYXJhbXMuc2l6ZSxcclxuICAgIHNpemVBdHRlbnVhdGlvbjogdHJ1ZSxcclxuICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxyXG4gICAgYmxlbmRpbmc6IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXHJcbiAgfSk7XHJcbiAgcG9pbnRzID0gbmV3IFRIUkVFLlBvaW50cyhnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gIGdyb3VwLmFkZChwb2ludHMpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcImdlbmVyYXRlR2FsYXh5XCIpO1xyXG4gIHJldHVybiBncm91cDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdhbGF4eVJlbmRlcigpIHt9XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBjb25zdCByZE9iaiA9IHtcclxuICBjYW52YXMgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmcnKSxcclxuICByZW5kZXJlciA6IG51bGwsXHJcbiAgaW5pdFJkIDogKCkgPT4ge1xyXG4gICAgcmRPYmoucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7Y2FudmFzOiByZE9iai5jYW52YXMgLCBwb3dlclByZWZlcmVuY2U6IFwiaGlnaC1wZXJmb3JtYW5jZVwiIH0pXHJcbiAgICByZE9iai5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgcmRPYmoucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG4gIH1cclxufTtcclxucmRPYmouaW5pdFJkKCk7IiwiaW1wb3J0IHsgY21PYmogfSBmcm9tICcuL0NhbWVyYS5qcyc7XHJcbmltcG9ydCB7IHJkT2JqIH0gZnJvbSAnLi9SZW5kZXJlci5qcyc7XHJcbi8vXHJcbi8vU2l6ZXNcclxuLy9cclxuY29uc3Qgc2l6ZXMgPSB7XHJcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gIH07XHJcbiAgXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICAgIC8vIFVwZGF0ZSBzaXplc1xyXG4gICAgc2l6ZXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHNpemVzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAvLyBVcGRhdGUgY2FtZXJhXHJcbiAgICBjbU9iai5jYW1lcmEuYXNwZWN0ID0gc2l6ZXMud2lkdGggLyBzaXplcy5oZWlnaHQ7XHJcbiAgICBjbU9iai5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSByZW5kZXJlclxyXG4gICAgcmRPYmoucmVuZGVyZXIuc2V0U2l6ZShzaXplcy53aWR0aCwgc2l6ZXMuaGVpZ2h0KTtcclxuICAgIHJkT2JqLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8oTWF0aC5taW4od2luZG93LmRldmljZVBpeGVsUmF0aW8sIDIpKTtcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzY09iaiA9IHtcclxuICAgIHNjZW5lOiBudWxsLFxyXG4gIGluaXRTY2VuZSA6ICgpID0+IHtcclxuICAgIHNjT2JqLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICBzY09iai5zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKDB4MUMwMzM5KTtcclxuICAgIC8vc2NPYmouc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZygweGZmZmZmZiwgMCwgNTApO1xyXG4gICAgY29uc3QgcG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmKTtcclxuICAgIGNvbnN0IGRpcmVjdExpZ2h0ID0gbmV3IFRIUkVFLlNwb3RMaWdodCgweDA0RkYwMCwxMDApXHJcbiAgICBwb2ludExpZ2h0LnBvc2l0aW9uLnNldCgwLCAzMCwgLTEwMCk7XHJcbiAgICBwb2ludExpZ2h0Lmxvb2tBdCgwLDAsMClcclxuICAgIGRpcmVjdExpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLDEwMCk7XHJcbiAgICBkaXJlY3RMaWdodC5sb29rQXQoMCwwLDApXHJcbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmKTtcclxuICAgIHNjT2JqLnNjZW5lLmFkZChhbWJpZW50TGlnaHQsZGlyZWN0TGlnaHQpO1xyXG4gIH1cclxufTtcclxuc2NPYmouaW5pdFNjZW5lKCk7XHJcbmxldCBzYyA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5zYy5iIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9pbWcvc21va2UucG5nJztcclxuaW1wb3J0ICcuLi9hc3NldHMvaW1nL2Rpc2NnLnBuZyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL2ltZy9kaXNjLnBuZyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL2ltZy9zaGlueVBCLnBuZyc7XHJcbmltcG9ydCBcIi4uL2h0bWwvaG9tZS5odG1sXCI7XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gIC8vIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIC8vIExvZGFzaCwgbm93IGltcG9ydGVkIGJ5IHRoaXMgc2NyaXB0XHJcbiAgLy9lbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcclxuICBlbGVtZW50LmlkID0nYmcnXHJcbiAgLy8gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xyXG4gIC8vYnRuLmlubmVySFRNTCA9ICdDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhJztcclxuICAvL2J0bi5vbmNsaWNrID0gcHJpbnRNZTtcclxuICAvL2VsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVSZW5kZXIgfSBmcm9tIFwiLi9SZXNwb25zaXZlLmpzXCI7XHJcblxyXG5pbXBvcnQgU3RhdHMgZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9saWJzL3N0YXRzLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBjbU9iaiB9IGZyb20gXCIuL0NhbWVyYS5qc1wiO1xyXG5pbXBvcnQgeyByZE9iaiB9IGZyb20gXCIuL1JlbmRlcmVyLmpzXCI7XHJcbmltcG9ydCB7IHNjT2JqIH0gZnJvbSBcIi4vU2NlbmUuanNcIjtcclxuaW1wb3J0IHsgY3RybE9iaiB9IGZyb20gXCIuL0NvbnRyb2xzLmpzXCI7XHJcbmltcG9ydCB7IGdlbmVyYXRlR2FsYXh5IH0gZnJvbSBcIi4vR2FsYXh5LmpzXCI7XHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzXCI7XHJcbmltcG9ydCB7IERvdWJsZVNpZGUgfSBmcm9tIFwidGhyZWVcIjtcclxuLy9pbXBvcnQgUGxhbmV0IGZyb20gXCIuL1BsYW5ldC5qc1wiO1xyXG4vL2ltcG9ydCB7IGNsb3VkIH0gZnJvbSAnLi9OZWJ1bGEuanMnO1xyXG5cclxuLy92YXIgZ2VvbWV0cnkgID0gbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KDEsMjAsMjApO1xyXG4vL2NvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKCB7IGNvbG9yOjB4ZmZmZmZmIH0gKTtcclxuLy92YXIgcGxhbmV0ID0gIG5ldyBQbGFuZXQoc2NPYmouc2NlbmUpO1xyXG4vL2NvbnNvbGUubG9nKHBsYW5ldC5tZXNoLnBvc2l0aW9uKVxyXG4vL3BsYW5ldC5tZXNoLnBvc2l0aW9uLnNldCgyMCwwLDApO1xyXG4vL3NjT2JqLnNjZW5lLmFkZChwbGFuZXQpO1xyXG5cclxuLy9jb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xyXG5cclxudmFyIHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbnN0YXRzLnNob3dQYW5lbCgwKTsgLy8gMDogZnBzLCAxOiBtcywgMjogbWIsIDMrOiBjdXN0b21cclxuLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XHJcblxyXG5jb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNtT2JqLmNhbWVyYSwgcmRPYmoucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG5jb25zdCBnYWxheHkgPSBnZW5lcmF0ZUdhbGF4eSgpO1xyXG5zY09iai5zY2VuZS5hZGQoZ2FsYXh5KTtcclxuZnVuY3Rpb24gR2FtZUxvb3AoKSB7XHJcbiAgc3RhdHMuYmVnaW4oKTtcclxuICAvL3BsYW5ldC51cGRhdGUoKVxyXG4gIC8vY3RybE9iai5jb250cm9scy51cGRhdGUoY2xvY2suZ2V0RGVsdGEoKSk7XHJcblxyXG4gIHJkT2JqLnJlbmRlcmVyLnJlbmRlcihzY09iai5zY2VuZSwgY21PYmouY2FtZXJhKTtcclxuICBnYWxheHkucm90YXRlWSgwLjAwMDEpO1xyXG4gIGNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gIHN0YXRzLmVuZCgpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShHYW1lTG9vcCk7XHJcbn1cclxuXHJcbnJlcXVlc3RBbmltYXRpb25GcmFtZShHYW1lTG9vcCk7XHJcbiIsImltcG9ydCB7XG5cdEV2ZW50RGlzcGF0Y2hlcixcblx0TU9VU0UsXG5cdFF1YXRlcm5pb24sXG5cdFNwaGVyaWNhbCxcblx0VE9VQ0gsXG5cdFZlY3RvcjIsXG5cdFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZS1maW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28tZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBsZWZ0IG1vdXNlICsgY3RybC9tZXRhL3NoaWZ0S2V5LCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHR3by1maW5nZXIgbW92ZVxuXG5jb25zdCBfY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5jb25zdCBfc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuY29uc3QgX2VuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG5jbGFzcyBPcmJpdENvbnRyb2xzIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvciggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG5cdFx0c3VwZXIoKTtcblxuXHRcdGlmICggZG9tRWxlbWVudCA9PT0gdW5kZWZpbmVkICkgY29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogVGhlIHNlY29uZCBwYXJhbWV0ZXIgXCJkb21FbGVtZW50XCIgaXMgbm93IG1hbmRhdG9yeS4nICk7XG5cdFx0aWYgKCBkb21FbGVtZW50ID09PSBkb2N1bWVudCApIGNvbnNvbGUuZXJyb3IoICdUSFJFRS5PcmJpdENvbnRyb2xzOiBcImRvY3VtZW50XCIgc2hvdWxkIG5vdCBiZSB1c2VkIGFzIHRoZSB0YXJnZXQgXCJkb21FbGVtZW50XCIuIFBsZWFzZSB1c2UgXCJyZW5kZXJlci5kb21FbGVtZW50XCIgaW5zdGVhZC4nICk7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXHRcdHRoaXMuZG9tRWxlbWVudC5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJzsgLy8gZGlzYWJsZSB0b3VjaCBzY3JvbGxcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cblx0XHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0XHR0aGlzLnRhcmdldCA9IG5ldyBWZWN0b3IzKCk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuXHRcdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHRcdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG5cdFx0dGhpcy5taW5ab29tID0gMDtcblx0XHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHRcdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHRcdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHRcdC8vIElmIHNldCwgdGhlIGludGVydmFsIFsgbWluLCBtYXggXSBtdXN0IGJlIGEgc3ViLWludGVydmFsIG9mIFsgLSAyIFBJLCAyIFBJIF0sIHdpdGggKCBtYXggLSBtaW4gPCAyIFBJIClcblx0XHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cblx0XHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0XHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xuXHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMDU7XG5cblx0XHQvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcblx0XHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHRcdHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcm90YXRpbmdcblx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdFx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcblx0XHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdFx0dGhpcy5wYW5TcGVlZCA9IDEuMDtcblx0XHR0aGlzLnNjcmVlblNwYWNlUGFubmluZyA9IHRydWU7IC8vIGlmIGZhbHNlLCBwYW4gb3J0aG9nb25hbCB0byB3b3JsZC1zcGFjZSBkaXJlY3Rpb24gY2FtZXJhLnVwXG5cdFx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuXHRcdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG5cdFx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdFx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdFx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIG9yYml0IHdoZW4gZnBzIGlzIDYwXG5cblx0XHQvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG5cdFx0dGhpcy5rZXlzID0geyBMRUZUOiAnQXJyb3dMZWZ0JywgVVA6ICdBcnJvd1VwJywgUklHSFQ6ICdBcnJvd1JpZ2h0JywgQk9UVE9NOiAnQXJyb3dEb3duJyB9O1xuXG5cdFx0Ly8gTW91c2UgYnV0dG9uc1xuXHRcdHRoaXMubW91c2VCdXR0b25zID0geyBMRUZUOiBNT1VTRS5ST1RBVEUsIE1JRERMRTogTU9VU0UuRE9MTFksIFJJR0hUOiBNT1VTRS5QQU4gfTtcblxuXHRcdC8vIFRvdWNoIGZpbmdlcnNcblx0XHR0aGlzLnRvdWNoZXMgPSB7IE9ORTogVE9VQ0guUk9UQVRFLCBUV086IFRPVUNILkRPTExZX1BBTiB9O1xuXG5cdFx0Ly8gZm9yIHJlc2V0XG5cdFx0dGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcblx0XHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cdFx0dGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XG5cblx0XHQvLyB0aGUgdGFyZ2V0IERPTSBlbGVtZW50IGZvciBrZXkgZXZlbnRzXG5cdFx0dGhpcy5fZG9tRWxlbWVudEtleUV2ZW50cyA9IG51bGw7XG5cblx0XHQvL1xuXHRcdC8vIHB1YmxpYyBtZXRob2RzXG5cdFx0Ly9cblxuXHRcdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHNwaGVyaWNhbC5waGk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHNwaGVyaWNhbC50aGV0YTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldERpc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5vYmplY3QucG9zaXRpb24uZGlzdGFuY2VUbyggdGhpcy50YXJnZXQgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmxpc3RlblRvS2V5RXZlbnRzID0gZnVuY3Rpb24gKCBkb21FbGVtZW50ICkge1xuXG5cdFx0XHRkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duICk7XG5cdFx0XHR0aGlzLl9kb21FbGVtZW50S2V5RXZlbnRzID0gZG9tRWxlbWVudDtcblxuXHRcdH07XG5cblx0XHR0aGlzLnNhdmVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUudGFyZ2V0MC5jb3B5KCBzY29wZS50YXJnZXQgKTtcblx0XHRcdHNjb3BlLnBvc2l0aW9uMC5jb3B5KCBzY29wZS5vYmplY3QucG9zaXRpb24gKTtcblx0XHRcdHNjb3BlLnpvb20wID0gc2NvcGUub2JqZWN0Lnpvb207XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUudGFyZ2V0LmNvcHkoIHNjb3BlLnRhcmdldDAgKTtcblx0XHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KCBzY29wZS5wb3NpdGlvbjAgKTtcblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gc2NvcGUuem9vbTA7XG5cblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH07XG5cblx0XHQvLyB0aGlzIG1ldGhvZCBpcyBleHBvc2VkLCBidXQgcGVyaGFwcyBpdCB3b3VsZCBiZSBiZXR0ZXIgaWYgd2UgY2FuIG1ha2UgaXQgcHJpdmF0ZS4uLlxuXHRcdHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zdCBvZmZzZXQgPSBuZXcgVmVjdG9yMygpO1xuXG5cdFx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblx0XHRcdGNvbnN0IHF1YXQgPSBuZXcgUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVmVjdG9yMyggMCwgMSwgMCApICk7XG5cdFx0XHRjb25zdCBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnQoKTtcblxuXHRcdFx0Y29uc3QgbGFzdFBvc2l0aW9uID0gbmV3IFZlY3RvcjMoKTtcblx0XHRcdGNvbnN0IGxhc3RRdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcblxuXHRcdFx0Y29uc3QgdHdvUEkgPSAyICogTWF0aC5QSTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblxuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblxuXHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuXHRcdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XG5cblx0XHRcdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXHRcdFx0XHRzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMoIG9mZnNldCApO1xuXG5cdFx0XHRcdGlmICggc2NvcGUuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRcdHJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVEYW1waW5nICkge1xuXG5cdFx0XHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhICogc2NvcGUuZGFtcGluZ0ZhY3Rvcjtcblx0XHRcdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaSAqIHNjb3BlLmRhbXBpbmdGYWN0b3I7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHNwaGVyaWNhbC50aGV0YSArPSBzcGhlcmljYWxEZWx0YS50aGV0YTtcblx0XHRcdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXG5cdFx0XHRcdGxldCBtaW4gPSBzY29wZS5taW5BemltdXRoQW5nbGU7XG5cdFx0XHRcdGxldCBtYXggPSBzY29wZS5tYXhBemltdXRoQW5nbGU7XG5cblx0XHRcdFx0aWYgKCBpc0Zpbml0ZSggbWluICkgJiYgaXNGaW5pdGUoIG1heCApICkge1xuXG5cdFx0XHRcdFx0aWYgKCBtaW4gPCAtIE1hdGguUEkgKSBtaW4gKz0gdHdvUEk7IGVsc2UgaWYgKCBtaW4gPiBNYXRoLlBJICkgbWluIC09IHR3b1BJO1xuXG5cdFx0XHRcdFx0aWYgKCBtYXggPCAtIE1hdGguUEkgKSBtYXggKz0gdHdvUEk7IGVsc2UgaWYgKCBtYXggPiBNYXRoLlBJICkgbWF4IC09IHR3b1BJO1xuXG5cdFx0XHRcdFx0aWYgKCBtaW4gPD0gbWF4ICkge1xuXG5cdFx0XHRcdFx0XHRzcGhlcmljYWwudGhldGEgPSBNYXRoLm1heCggbWluLCBNYXRoLm1pbiggbWF4LCBzcGhlcmljYWwudGhldGEgKSApO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gKCBzcGhlcmljYWwudGhldGEgPiAoIG1pbiArIG1heCApIC8gMiApID9cblx0XHRcdFx0XHRcdFx0TWF0aC5tYXgoIG1pbiwgc3BoZXJpY2FsLnRoZXRhICkgOlxuXHRcdFx0XHRcdFx0XHRNYXRoLm1pbiggbWF4LCBzcGhlcmljYWwudGhldGEgKTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KCBzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4UG9sYXJBbmdsZSwgc3BoZXJpY2FsLnBoaSApICk7XG5cblx0XHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cblxuXHRcdFx0XHRzcGhlcmljYWwucmFkaXVzICo9IHNjYWxlO1xuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heCggc2NvcGUubWluRGlzdGFuY2UsIE1hdGgubWluKCBzY29wZS5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cyApICk7XG5cblx0XHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVEYW1waW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0c2NvcGUudGFyZ2V0LmFkZFNjYWxlZFZlY3RvciggcGFuT2Zmc2V0LCBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHNjb3BlLnRhcmdldC5hZGQoIHBhbk9mZnNldCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRvZmZzZXQuc2V0RnJvbVNwaGVyaWNhbCggc3BoZXJpY2FsICk7XG5cblx0XHRcdFx0Ly8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG5cdFx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cblx0XHRcdFx0cG9zaXRpb24uY29weSggc2NvcGUudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuXHRcdFx0XHRzY29wZS5vYmplY3QubG9va0F0KCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZURhbXBpbmcgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cdFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0XHRcdHBhbk9mZnNldC5tdWx0aXBseVNjYWxhciggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdFx0XHRwYW5PZmZzZXQuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNjYWxlID0gMTtcblxuXHRcdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuXHRcdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcblx0XHRcdFx0Ly8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cblx0XHRcdFx0aWYgKCB6b29tQ2hhbmdlZCB8fFxuXHRcdFx0XHRcdGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggc2NvcGUub2JqZWN0LnBvc2l0aW9uICkgPiBFUFMgfHxcblx0XHRcdFx0XHQ4ICogKCAxIC0gbGFzdFF1YXRlcm5pb24uZG90KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApICkgPiBFUFMgKSB7XG5cblx0XHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRcdGxhc3RQb3NpdGlvbi5jb3B5KCBzY29wZS5vYmplY3QucG9zaXRpb24gKTtcblx0XHRcdFx0XHRsYXN0UXVhdGVybmlvbi5jb3B5KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApO1xuXHRcdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUgKTtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVyY2FuY2VsJywgb25Qb2ludGVyQ2FuY2VsICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCApO1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVybW92ZScsIG9uUG9pbnRlck1vdmUgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwICk7XG5cblxuXHRcdFx0aWYgKCBzY29wZS5fZG9tRWxlbWVudEtleUV2ZW50cyAhPT0gbnVsbCApIHtcblxuXHRcdFx0XHRzY29wZS5fZG9tRWxlbWVudEtleUV2ZW50cy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biApO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZGlzcG9zZScgfSApOyAvLyBzaG91bGQgdGhpcyBiZSBhZGRlZCBoZXJlP1xuXG5cdFx0fTtcblxuXHRcdC8vXG5cdFx0Ly8gaW50ZXJuYWxzXG5cdFx0Ly9cblxuXHRcdGNvbnN0IHNjb3BlID0gdGhpcztcblxuXHRcdGNvbnN0IFNUQVRFID0ge1xuXHRcdFx0Tk9ORTogLSAxLFxuXHRcdFx0Uk9UQVRFOiAwLFxuXHRcdFx0RE9MTFk6IDEsXG5cdFx0XHRQQU46IDIsXG5cdFx0XHRUT1VDSF9ST1RBVEU6IDMsXG5cdFx0XHRUT1VDSF9QQU46IDQsXG5cdFx0XHRUT1VDSF9ET0xMWV9QQU46IDUsXG5cdFx0XHRUT1VDSF9ET0xMWV9ST1RBVEU6IDZcblx0XHR9O1xuXG5cdFx0bGV0IHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdGNvbnN0IEVQUyA9IDAuMDAwMDAxO1xuXG5cdFx0Ly8gY3VycmVudCBwb3NpdGlvbiBpbiBzcGhlcmljYWwgY29vcmRpbmF0ZXNcblx0XHRjb25zdCBzcGhlcmljYWwgPSBuZXcgU3BoZXJpY2FsKCk7XG5cdFx0Y29uc3Qgc3BoZXJpY2FsRGVsdGEgPSBuZXcgU3BoZXJpY2FsKCk7XG5cblx0XHRsZXQgc2NhbGUgPSAxO1xuXHRcdGNvbnN0IHBhbk9mZnNldCA9IG5ldyBWZWN0b3IzKCk7XG5cdFx0bGV0IHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRjb25zdCByb3RhdGVTdGFydCA9IG5ldyBWZWN0b3IyKCk7XG5cdFx0Y29uc3Qgcm90YXRlRW5kID0gbmV3IFZlY3RvcjIoKTtcblx0XHRjb25zdCByb3RhdGVEZWx0YSA9IG5ldyBWZWN0b3IyKCk7XG5cblx0XHRjb25zdCBwYW5TdGFydCA9IG5ldyBWZWN0b3IyKCk7XG5cdFx0Y29uc3QgcGFuRW5kID0gbmV3IFZlY3RvcjIoKTtcblx0XHRjb25zdCBwYW5EZWx0YSA9IG5ldyBWZWN0b3IyKCk7XG5cblx0XHRjb25zdCBkb2xseVN0YXJ0ID0gbmV3IFZlY3RvcjIoKTtcblx0XHRjb25zdCBkb2xseUVuZCA9IG5ldyBWZWN0b3IyKCk7XG5cdFx0Y29uc3QgZG9sbHlEZWx0YSA9IG5ldyBWZWN0b3IyKCk7XG5cblx0XHRjb25zdCBwb2ludGVycyA9IFtdO1xuXHRcdGNvbnN0IHBvaW50ZXJQb3NpdGlvbnMgPSB7fTtcblxuXHRcdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG5cdFx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG5cdFx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcm90YXRlTGVmdCggYW5nbGUgKSB7XG5cblx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcm90YXRlVXAoIGFuZ2xlICkge1xuXG5cdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG5cblx0XHR9XG5cblx0XHRjb25zdCBwYW5MZWZ0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zdCB2ID0gbmV3IFZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbkxlZnQoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDAgKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG5cblx0XHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0Y29uc3QgcGFuVXAgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IHYgPSBuZXcgVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuVXAoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5zY3JlZW5TcGFjZVBhbm5pbmcgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMCApO1xuXHRcdFx0XHRcdHYuY3Jvc3NWZWN0b3JzKCBzY29wZS5vYmplY3QudXAsIHYgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0di5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcblxuXHRcdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHQvLyBkZWx0YVggYW5kIGRlbHRhWSBhcmUgaW4gcGl4ZWxzOyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0XHRjb25zdCBwYW4gPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IG9mZnNldCA9IG5ldyBWZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW4oIGRlbHRhWCwgZGVsdGFZICkge1xuXG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRcdGlmICggc2NvcGUub2JqZWN0LmlzUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cdFx0XHRcdFx0bGV0IHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG5cdFx0XHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG5cdFx0XHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG5cdFx0XHRcdFx0Ly8gd2UgdXNlIG9ubHkgY2xpZW50SGVpZ2h0IGhlcmUgc28gYXNwZWN0IHJhdGlvIGRvZXMgbm90IGRpc3RvcnQgc3BlZWRcblx0XHRcdFx0XHRwYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRcdHBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdC5pc09ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRcdC8vIG9ydGhvZ3JhcGhpY1xuXHRcdFx0XHRcdHBhbkxlZnQoIGRlbHRhWCAqICggc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQgKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRcdHBhblVwKCBkZWx0YVkgKiAoIHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdGZ1bmN0aW9uIGRvbGx5T3V0KCBkb2xseVNjYWxlICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdC5pc1BlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdC5pc09ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcblx0XHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGRvbGx5SW4oIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0LmlzUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0LmlzT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuXHRcdC8vXG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApIHtcblxuXHRcdFx0ZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKSB7XG5cblx0XHRcdHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdFx0cm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICkubXVsdGlwbHlTY2FsYXIoIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudEhlaWdodCApOyAvLyB5ZXMsIGhlaWdodFxuXG5cdFx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHRkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdFx0cGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICkubXVsdGlwbHlTY2FsYXIoIHNjb3BlLnBhblNwZWVkICk7XG5cblx0XHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBldmVudC5kZWx0YVkgPCAwICkge1xuXG5cdFx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGV2ZW50LmRlbHRhWSA+IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKCBldmVudCApIHtcblxuXHRcdFx0bGV0IG5lZWRzVXBkYXRlID0gZmFsc2U7XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LmNvZGUgKSB7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxuXHRcdFx0XHRcdHBhbiggMCwgc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0XHRuZWVkc1VwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcblx0XHRcdFx0XHRwYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0XHRuZWVkc1VwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XG5cdFx0XHRcdFx0cGFuKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRcdG5lZWRzVXBkYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG5cdFx0XHRcdFx0cGFuKCAtIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdFx0bmVlZHNVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggbmVlZHNVcGRhdGUgKSB7XG5cblx0XHRcdFx0Ly8gcHJldmVudCB0aGUgYnJvd3NlciBmcm9tIHNjcm9sbGluZyBvbiBjdXJzb3Iga2V5c1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0XHR9XG5cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoKSB7XG5cblx0XHRcdGlmICggcG9pbnRlcnMubGVuZ3RoID09PSAxICkge1xuXG5cdFx0XHRcdHJvdGF0ZVN0YXJ0LnNldCggcG9pbnRlcnNbIDAgXS5wYWdlWCwgcG9pbnRlcnNbIDAgXS5wYWdlWSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnN0IHggPSAwLjUgKiAoIHBvaW50ZXJzWyAwIF0ucGFnZVggKyBwb2ludGVyc1sgMSBdLnBhZ2VYICk7XG5cdFx0XHRcdGNvbnN0IHkgPSAwLjUgKiAoIHBvaW50ZXJzWyAwIF0ucGFnZVkgKyBwb2ludGVyc1sgMSBdLnBhZ2VZICk7XG5cblx0XHRcdFx0cm90YXRlU3RhcnQuc2V0KCB4LCB5ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRQYW4oKSB7XG5cblx0XHRcdGlmICggcG9pbnRlcnMubGVuZ3RoID09PSAxICkge1xuXG5cdFx0XHRcdHBhblN0YXJ0LnNldCggcG9pbnRlcnNbIDAgXS5wYWdlWCwgcG9pbnRlcnNbIDAgXS5wYWdlWSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnN0IHggPSAwLjUgKiAoIHBvaW50ZXJzWyAwIF0ucGFnZVggKyBwb2ludGVyc1sgMSBdLnBhZ2VYICk7XG5cdFx0XHRcdGNvbnN0IHkgPSAwLjUgKiAoIHBvaW50ZXJzWyAwIF0ucGFnZVkgKyBwb2ludGVyc1sgMSBdLnBhZ2VZICk7XG5cblx0XHRcdFx0cGFuU3RhcnQuc2V0KCB4LCB5ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnREb2xseSgpIHtcblxuXHRcdFx0Y29uc3QgZHggPSBwb2ludGVyc1sgMCBdLnBhZ2VYIC0gcG9pbnRlcnNbIDEgXS5wYWdlWDtcblx0XHRcdGNvbnN0IGR5ID0gcG9pbnRlcnNbIDAgXS5wYWdlWSAtIHBvaW50ZXJzWyAxIF0ucGFnZVk7XG5cblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0XHRkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnREb2xseVBhbigpIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tICkgaGFuZGxlVG91Y2hTdGFydERvbGx5KCk7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuICkgaGFuZGxlVG91Y2hTdGFydFBhbigpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5Um90YXRlKCkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gKSBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoKTtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgKSBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHBvaW50ZXJzLmxlbmd0aCA9PSAxICkge1xuXG5cdFx0XHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0gZ2V0U2Vjb25kUG9pbnRlclBvc2l0aW9uKCBldmVudCApO1xuXG5cdFx0XHRcdGNvbnN0IHggPSAwLjUgKiAoIGV2ZW50LnBhZ2VYICsgcG9zaXRpb24ueCApO1xuXHRcdFx0XHRjb25zdCB5ID0gMC41ICogKCBldmVudC5wYWdlWSArIHBvc2l0aW9uLnkgKTtcblxuXHRcdFx0XHRyb3RhdGVFbmQuc2V0KCB4LCB5ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApLm11bHRpcGx5U2NhbGFyKCBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHRjb25zdCBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTsgLy8geWVzLCBoZWlnaHRcblxuXHRcdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBwb2ludGVycy5sZW5ndGggPT09IDEgKSB7XG5cblx0XHRcdFx0cGFuRW5kLnNldCggZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSBnZXRTZWNvbmRQb2ludGVyUG9zaXRpb24oIGV2ZW50ICk7XG5cblx0XHRcdFx0Y29uc3QgeCA9IDAuNSAqICggZXZlbnQucGFnZVggKyBwb3NpdGlvbi54ICk7XG5cdFx0XHRcdGNvbnN0IHkgPSAwLjUgKiAoIGV2ZW50LnBhZ2VZICsgcG9zaXRpb24ueSApO1xuXG5cdFx0XHRcdHBhbkVuZC5zZXQoIHgsIHkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICkubXVsdGlwbHlTY2FsYXIoIHNjb3BlLnBhblNwZWVkICk7XG5cblx0XHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSBnZXRTZWNvbmRQb2ludGVyUG9zaXRpb24oIGV2ZW50ICk7XG5cblx0XHRcdGNvbnN0IGR4ID0gZXZlbnQucGFnZVggLSBwb3NpdGlvbi54O1xuXHRcdFx0Y29uc3QgZHkgPSBldmVudC5wYWdlWSAtIHBvc2l0aW9uLnk7XG5cblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0XHRkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHRcdGRvbGx5RGVsdGEuc2V0KCAwLCBNYXRoLnBvdyggZG9sbHlFbmQueSAvIGRvbGx5U3RhcnQueSwgc2NvcGUuem9vbVNwZWVkICkgKTtcblxuXHRcdFx0ZG9sbHlPdXQoIGRvbGx5RGVsdGEueSApO1xuXG5cdFx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseVBhbiggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSApIGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiApIGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZURvbGx5Um90YXRlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tICkgaGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlICkgaGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdFx0Ly9cblx0XHQvLyBldmVudCBoYW5kbGVycyAtIEZTTTogbGlzdGVuIGZvciBldmVudHMgYW5kIHJlc2V0IHN0YXRlXG5cdFx0Ly9cblxuXHRcdGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRpZiAoIHBvaW50ZXJzLmxlbmd0aCA9PT0gMCApIHtcblxuXHRcdFx0XHRzY29wZS5kb21FbGVtZW50LnNldFBvaW50ZXJDYXB0dXJlKCBldmVudC5wb2ludGVySWQgKTtcblxuXHRcdFx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybW92ZScsIG9uUG9pbnRlck1vdmUgKTtcblx0XHRcdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcnVwJywgb25Qb2ludGVyVXAgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvL1xuXG5cdFx0XHRhZGRQb2ludGVyKCBldmVudCApO1xuXG5cdFx0XHRpZiAoIGV2ZW50LnBvaW50ZXJUeXBlID09PSAndG91Y2gnICkge1xuXG5cdFx0XHRcdG9uVG91Y2hTdGFydCggZXZlbnQgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRvbk1vdXNlRG93biggZXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Qb2ludGVyTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGlmICggZXZlbnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgKSB7XG5cblx0XHRcdFx0b25Ub3VjaE1vdmUoIGV2ZW50ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0b25Nb3VzZU1vdmUoIGV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uUG9pbnRlclVwKCBldmVudCApIHtcblxuXHRcdCAgICByZW1vdmVQb2ludGVyKCBldmVudCApO1xuXG5cdFx0ICAgIGlmICggcG9pbnRlcnMubGVuZ3RoID09PSAwICkge1xuXG5cdFx0ICAgICAgICBzY29wZS5kb21FbGVtZW50LnJlbGVhc2VQb2ludGVyQ2FwdHVyZSggZXZlbnQucG9pbnRlcklkICk7XG5cblx0XHQgICAgICAgIHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSApO1xuXHRcdCAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcnVwJywgb25Qb2ludGVyVXAgKTtcblxuXHRcdCAgICB9XG5cblx0XHQgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggX2VuZEV2ZW50ICk7XG5cblx0XHQgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Qb2ludGVyQ2FuY2VsKCBldmVudCApIHtcblxuXHRcdFx0cmVtb3ZlUG9pbnRlciggZXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuXHRcdFx0bGV0IG1vdXNlQWN0aW9uO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC5idXR0b24gKSB7XG5cblx0XHRcdFx0Y2FzZSAwOlxuXG5cdFx0XHRcdFx0bW91c2VBY3Rpb24gPSBzY29wZS5tb3VzZUJ1dHRvbnMuTEVGVDtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDE6XG5cblx0XHRcdFx0XHRtb3VzZUFjdGlvbiA9IHNjb3BlLm1vdXNlQnV0dG9ucy5NSURETEU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAyOlxuXG5cdFx0XHRcdFx0bW91c2VBY3Rpb24gPSBzY29wZS5tb3VzZUJ1dHRvbnMuUklHSFQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdG1vdXNlQWN0aW9uID0gLSAxO1xuXG5cdFx0XHR9XG5cblx0XHRcdHN3aXRjaCAoIG1vdXNlQWN0aW9uICkge1xuXG5cdFx0XHRcdGNhc2UgTU9VU0UuRE9MTFk6XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBNT1VTRS5ST1RBVEU6XG5cblx0XHRcdFx0XHRpZiAoIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5zaGlmdEtleSApIHtcblxuXHRcdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0XHRoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBNT1VTRS5QQU46XG5cblx0XHRcdFx0XHRpZiAoIGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5zaGlmdEtleSApIHtcblxuXHRcdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0XHRoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9zdGFydEV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0c3dpdGNoICggc3RhdGUgKSB7XG5cblx0XHRcdFx0Y2FzZSBTVEFURS5ST1RBVEU6XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFNUQVRFLkRPTExZOlxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBTVEFURS5QQU46XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSB8fCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX3N0YXJ0RXZlbnQgKTtcblxuXHRcdFx0aGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2VuZEV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZUtleURvd24oIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoIGV2ZW50ICkge1xuXG5cdFx0XHR0cmFja1BvaW50ZXIoIGV2ZW50ICk7XG5cblx0XHRcdHN3aXRjaCAoIHBvaW50ZXJzLmxlbmd0aCApIHtcblxuXHRcdFx0XHRjYXNlIDE6XG5cblx0XHRcdFx0XHRzd2l0Y2ggKCBzY29wZS50b3VjaGVzLk9ORSApIHtcblxuXHRcdFx0XHRcdFx0Y2FzZSBUT1VDSC5ST1RBVEU6XG5cblx0XHRcdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoKTtcblxuXHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0Y2FzZSBUT1VDSC5QQU46XG5cblx0XHRcdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRQYW4oKTtcblxuXHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDI6XG5cblx0XHRcdFx0XHRzd2l0Y2ggKCBzY29wZS50b3VjaGVzLlRXTyApIHtcblxuXHRcdFx0XHRcdFx0Y2FzZSBUT1VDSC5ET0xMWV9QQU46XG5cblx0XHRcdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSAmJiBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnREb2xseVBhbigpO1xuXG5cdFx0XHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFlfUEFOO1xuXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRjYXNlIFRPVUNILkRPTExZX1JPVEFURTpcblxuXHRcdFx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICYmIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5Um90YXRlKCk7XG5cblx0XHRcdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWV9ST1RBVEU7XG5cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9zdGFydEV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcblxuXHRcdFx0dHJhY2tQb2ludGVyKCBldmVudCApO1xuXG5cdFx0XHRzd2l0Y2ggKCBzdGF0ZSApIHtcblxuXHRcdFx0XHRjYXNlIFNUQVRFLlRPVUNIX1JPVEFURTpcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBTVEFURS5UT1VDSF9QQU46XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgU1RBVEUuVE9VQ0hfRE9MTFlfUEFOOlxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSAmJiBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlRG9sbHlQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgU1RBVEUuVE9VQ0hfRE9MTFlfUk9UQVRFOlxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSAmJiBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlRG9sbHlSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYWRkUG9pbnRlciggZXZlbnQgKSB7XG5cblx0XHRcdHBvaW50ZXJzLnB1c2goIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiByZW1vdmVQb2ludGVyKCBldmVudCApIHtcblxuXHRcdFx0ZGVsZXRlIHBvaW50ZXJQb3NpdGlvbnNbIGV2ZW50LnBvaW50ZXJJZCBdO1xuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBwb2ludGVycy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdFx0aWYgKCBwb2ludGVyc1sgaSBdLnBvaW50ZXJJZCA9PSBldmVudC5wb2ludGVySWQgKSB7XG5cblx0XHRcdFx0XHRwb2ludGVycy5zcGxpY2UoIGksIDEgKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmFja1BvaW50ZXIoIGV2ZW50ICkge1xuXG5cdFx0XHRsZXQgcG9zaXRpb24gPSBwb2ludGVyUG9zaXRpb25zWyBldmVudC5wb2ludGVySWQgXTtcblxuXHRcdFx0aWYgKCBwb3NpdGlvbiA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHBvc2l0aW9uID0gbmV3IFZlY3RvcjIoKTtcblx0XHRcdFx0cG9pbnRlclBvc2l0aW9uc1sgZXZlbnQucG9pbnRlcklkIF0gPSBwb3NpdGlvbjtcblxuXHRcdFx0fVxuXG5cdFx0XHRwb3NpdGlvbi5zZXQoIGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0U2Vjb25kUG9pbnRlclBvc2l0aW9uKCBldmVudCApIHtcblxuXHRcdFx0Y29uc3QgcG9pbnRlciA9ICggZXZlbnQucG9pbnRlcklkID09PSBwb2ludGVyc1sgMCBdLnBvaW50ZXJJZCApID8gcG9pbnRlcnNbIDEgXSA6IHBvaW50ZXJzWyAwIF07XG5cblx0XHRcdHJldHVybiBwb2ludGVyUG9zaXRpb25zWyBwb2ludGVyLnBvaW50ZXJJZCBdO1xuXG5cdFx0fVxuXG5cdFx0Ly9cblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmNhbmNlbCcsIG9uUG9pbnRlckNhbmNlbCApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0gKTtcblxuXHRcdC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG5cdFx0dGhpcy51cGRhdGUoKTtcblxuXHR9XG5cbn1cblxuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vLyBUaGlzIGlzIHZlcnkgc2ltaWxhciB0byBPcmJpdENvbnRyb2xzLCBhbm90aGVyIHNldCBvZiB0b3VjaCBiZWhhdmlvclxuLy9cbi8vICAgIE9yYml0IC0gcmlnaHQgbW91c2UsIG9yIGxlZnQgbW91c2UgKyBjdHJsL21ldGEvc2hpZnRLZXkgLyB0b3VjaDogdHdvLWZpbmdlciByb3RhdGVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvLWZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSBsZWZ0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IG9uZS1maW5nZXIgbW92ZVxuXG5jbGFzcyBNYXBDb250cm9scyBleHRlbmRzIE9yYml0Q29udHJvbHMge1xuXG5cdGNvbnN0cnVjdG9yKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cblx0XHRzdXBlciggb2JqZWN0LCBkb21FbGVtZW50ICk7XG5cblx0XHR0aGlzLnNjcmVlblNwYWNlUGFubmluZyA9IGZhbHNlOyAvLyBwYW4gb3J0aG9nb25hbCB0byB3b3JsZC1zcGFjZSBkaXJlY3Rpb24gY2FtZXJhLnVwXG5cblx0XHR0aGlzLm1vdXNlQnV0dG9ucy5MRUZUID0gTU9VU0UuUEFOO1xuXHRcdHRoaXMubW91c2VCdXR0b25zLlJJR0hUID0gTU9VU0UuUk9UQVRFO1xuXG5cdFx0dGhpcy50b3VjaGVzLk9ORSA9IFRPVUNILlBBTjtcblx0XHR0aGlzLnRvdWNoZXMuVFdPID0gVE9VQ0guRE9MTFlfUk9UQVRFO1xuXG5cdH1cblxufVxuXG5leHBvcnQgeyBPcmJpdENvbnRyb2xzLCBNYXBDb250cm9scyB9O1xuIiwiaW1wb3J0IHtcblx0RXVsZXIsXG5cdEV2ZW50RGlzcGF0Y2hlcixcblx0VmVjdG9yM1xufSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IF9ldWxlciA9IG5ldyBFdWxlciggMCwgMCwgMCwgJ1lYWicgKTtcbmNvbnN0IF92ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5jb25zdCBfbG9ja0V2ZW50ID0geyB0eXBlOiAnbG9jaycgfTtcbmNvbnN0IF91bmxvY2tFdmVudCA9IHsgdHlwZTogJ3VubG9jaycgfTtcblxuY29uc3QgX1BJXzIgPSBNYXRoLlBJIC8gMjtcblxuY2xhc3MgUG9pbnRlckxvY2tDb250cm9scyBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IoIGNhbWVyYSwgZG9tRWxlbWVudCApIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAoIGRvbUVsZW1lbnQgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuUG9pbnRlckxvY2tDb250cm9sczogVGhlIHNlY29uZCBwYXJhbWV0ZXIgXCJkb21FbGVtZW50XCIgaXMgbm93IG1hbmRhdG9yeS4nICk7XG5cdFx0XHRkb21FbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcblxuXHRcdH1cblxuXHRcdHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cdFx0dGhpcy5pc0xvY2tlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gU2V0IHRvIGNvbnN0cmFpbiB0aGUgcGl0Y2ggb2YgdGhlIGNhbWVyYVxuXHRcdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zXG5cdFx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHRcdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHRcdHRoaXMucG9pbnRlclNwZWVkID0gMS4wO1xuXG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzO1xuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmlzTG9ja2VkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0Y29uc3QgbW92ZW1lbnRYID0gZXZlbnQubW92ZW1lbnRYIHx8IGV2ZW50Lm1vek1vdmVtZW50WCB8fCBldmVudC53ZWJraXRNb3ZlbWVudFggfHwgMDtcblx0XHRcdGNvbnN0IG1vdmVtZW50WSA9IGV2ZW50Lm1vdmVtZW50WSB8fCBldmVudC5tb3pNb3ZlbWVudFkgfHwgZXZlbnQud2Via2l0TW92ZW1lbnRZIHx8IDA7XG5cblx0XHRcdF9ldWxlci5zZXRGcm9tUXVhdGVybmlvbiggY2FtZXJhLnF1YXRlcm5pb24gKTtcblxuXHRcdFx0X2V1bGVyLnkgLT0gbW92ZW1lbnRYICogMC4wMDIgKiBzY29wZS5wb2ludGVyU3BlZWQ7XG5cdFx0XHRfZXVsZXIueCAtPSBtb3ZlbWVudFkgKiAwLjAwMiAqIHNjb3BlLnBvaW50ZXJTcGVlZDtcblxuXHRcdFx0X2V1bGVyLnggPSBNYXRoLm1heCggX1BJXzIgLSBzY29wZS5tYXhQb2xhckFuZ2xlLCBNYXRoLm1pbiggX1BJXzIgLSBzY29wZS5taW5Qb2xhckFuZ2xlLCBfZXVsZXIueCApICk7XG5cblx0XHRcdGNhbWVyYS5xdWF0ZXJuaW9uLnNldEZyb21FdWxlciggX2V1bGVyICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Qb2ludGVybG9ja0NoYW5nZSgpIHtcblxuXHRcdFx0aWYgKCBzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50ID09PSBzY29wZS5kb21FbGVtZW50ICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9sb2NrRXZlbnQgKTtcblxuXHRcdFx0XHRzY29wZS5pc0xvY2tlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX3VubG9ja0V2ZW50ICk7XG5cblx0XHRcdFx0c2NvcGUuaXNMb2NrZWQgPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Qb2ludGVybG9ja0Vycm9yKCkge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuUG9pbnRlckxvY2tDb250cm9sczogVW5hYmxlIHRvIHVzZSBQb2ludGVyIExvY2sgQVBJJyApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrY2hhbmdlJywgb25Qb2ludGVybG9ja0NoYW5nZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2Vycm9yJywgb25Qb2ludGVybG9ja0Vycm9yICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrY2hhbmdlJywgb25Qb2ludGVybG9ja0NoYW5nZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2Vycm9yJywgb25Qb2ludGVybG9ja0Vycm9yICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLmRpc2Nvbm5lY3QoKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldE9iamVjdCA9IGZ1bmN0aW9uICgpIHsgLy8gcmV0YWluaW5nIHRoaXMgbWV0aG9kIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0XHRcdHJldHVybiBjYW1lcmE7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXREaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKCAwLCAwLCAtIDEgKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICggdiApIHtcblxuXHRcdFx0XHRyZXR1cm4gdi5jb3B5KCBkaXJlY3Rpb24gKS5hcHBseVF1YXRlcm5pb24oIGNhbWVyYS5xdWF0ZXJuaW9uICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHR0aGlzLm1vdmVGb3J3YXJkID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuXHRcdFx0Ly8gbW92ZSBmb3J3YXJkIHBhcmFsbGVsIHRvIHRoZSB4ei1wbGFuZVxuXHRcdFx0Ly8gYXNzdW1lcyBjYW1lcmEudXAgaXMgeS11cFxuXG5cdFx0XHRfdmVjdG9yLnNldEZyb21NYXRyaXhDb2x1bW4oIGNhbWVyYS5tYXRyaXgsIDAgKTtcblxuXHRcdFx0X3ZlY3Rvci5jcm9zc1ZlY3RvcnMoIGNhbWVyYS51cCwgX3ZlY3RvciApO1xuXG5cdFx0XHRjYW1lcmEucG9zaXRpb24uYWRkU2NhbGVkVmVjdG9yKCBfdmVjdG9yLCBkaXN0YW5jZSApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMubW92ZVJpZ2h0ID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuXHRcdFx0X3ZlY3Rvci5zZXRGcm9tTWF0cml4Q29sdW1uKCBjYW1lcmEubWF0cml4LCAwICk7XG5cblx0XHRcdGNhbWVyYS5wb3NpdGlvbi5hZGRTY2FsZWRWZWN0b3IoIF92ZWN0b3IsIGRpc3RhbmNlICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5sb2NrID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLmRvbUVsZW1lbnQucmVxdWVzdFBvaW50ZXJMb2NrKCk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy51bmxvY2sgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5leGl0UG9pbnRlckxvY2soKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmNvbm5lY3QoKTtcblxuXHR9XG5cbn1cblxuZXhwb3J0IHsgUG9pbnRlckxvY2tDb250cm9scyB9O1xuIiwidmFyIFN0YXRzID0gZnVuY3Rpb24gKCkge1xuXG5cdHZhciBtb2RlID0gMDtcblxuXHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0Y29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MC45O3otaW5kZXg6MTAwMDAnO1xuXHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0c2hvd1BhbmVsKCArKyBtb2RlICUgY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCApO1xuXG5cdH0sIGZhbHNlICk7XG5cblx0Ly9cblxuXHRmdW5jdGlvbiBhZGRQYW5lbCggcGFuZWwgKSB7XG5cblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoIHBhbmVsLmRvbSApO1xuXHRcdHJldHVybiBwYW5lbDtcblxuXHR9XG5cblx0ZnVuY3Rpb24gc2hvd1BhbmVsKCBpZCApIHtcblxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGNvbnRhaW5lci5jaGlsZHJlblsgaSBdLnN0eWxlLmRpc3BsYXkgPSBpID09PSBpZCA/ICdibG9jaycgOiAnbm9uZSc7XG5cblx0XHR9XG5cblx0XHRtb2RlID0gaWQ7XG5cblx0fVxuXG5cdC8vXG5cblx0dmFyIGJlZ2luVGltZSA9ICggcGVyZm9ybWFuY2UgfHwgRGF0ZSApLm5vdygpLCBwcmV2VGltZSA9IGJlZ2luVGltZSwgZnJhbWVzID0gMDtcblxuXHR2YXIgZnBzUGFuZWwgPSBhZGRQYW5lbCggbmV3IFN0YXRzLlBhbmVsKCAnRlBTJywgJyMwZmYnLCAnIzAwMicgKSApO1xuXHR2YXIgbXNQYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdNUycsICcjMGYwJywgJyMwMjAnICkgKTtcblxuXHRpZiAoIHNlbGYucGVyZm9ybWFuY2UgJiYgc2VsZi5wZXJmb3JtYW5jZS5tZW1vcnkgKSB7XG5cblx0XHR2YXIgbWVtUGFuZWwgPSBhZGRQYW5lbCggbmV3IFN0YXRzLlBhbmVsKCAnTUInLCAnI2YwOCcsICcjMjAxJyApICk7XG5cblx0fVxuXG5cdHNob3dQYW5lbCggMCApO1xuXG5cdHJldHVybiB7XG5cblx0XHRSRVZJU0lPTjogMTYsXG5cblx0XHRkb206IGNvbnRhaW5lcixcblxuXHRcdGFkZFBhbmVsOiBhZGRQYW5lbCxcblx0XHRzaG93UGFuZWw6IHNob3dQYW5lbCxcblxuXHRcdGJlZ2luOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGJlZ2luVGltZSA9ICggcGVyZm9ybWFuY2UgfHwgRGF0ZSApLm5vdygpO1xuXG5cdFx0fSxcblxuXHRcdGVuZDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRmcmFtZXMgKys7XG5cblx0XHRcdHZhciB0aW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCk7XG5cblx0XHRcdG1zUGFuZWwudXBkYXRlKCB0aW1lIC0gYmVnaW5UaW1lLCAyMDAgKTtcblxuXHRcdFx0aWYgKCB0aW1lID49IHByZXZUaW1lICsgMTAwMCApIHtcblxuXHRcdFx0XHRmcHNQYW5lbC51cGRhdGUoICggZnJhbWVzICogMTAwMCApIC8gKCB0aW1lIC0gcHJldlRpbWUgKSwgMTAwICk7XG5cblx0XHRcdFx0cHJldlRpbWUgPSB0aW1lO1xuXHRcdFx0XHRmcmFtZXMgPSAwO1xuXG5cdFx0XHRcdGlmICggbWVtUGFuZWwgKSB7XG5cblx0XHRcdFx0XHR2YXIgbWVtb3J5ID0gcGVyZm9ybWFuY2UubWVtb3J5O1xuXHRcdFx0XHRcdG1lbVBhbmVsLnVwZGF0ZSggbWVtb3J5LnVzZWRKU0hlYXBTaXplIC8gMTA0ODU3NiwgbWVtb3J5LmpzSGVhcFNpemVMaW1pdCAvIDEwNDg1NzYgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRpbWU7XG5cblx0XHR9LFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGJlZ2luVGltZSA9IHRoaXMuZW5kKCk7XG5cblx0XHR9LFxuXG5cdFx0Ly8gQmFja3dhcmRzIENvbXBhdGliaWxpdHlcblxuXHRcdGRvbUVsZW1lbnQ6IGNvbnRhaW5lcixcblx0XHRzZXRNb2RlOiBzaG93UGFuZWxcblxuXHR9O1xuXG59O1xuXG5TdGF0cy5QYW5lbCA9IGZ1bmN0aW9uICggbmFtZSwgZmcsIGJnICkge1xuXG5cdHZhciBtaW4gPSBJbmZpbml0eSwgbWF4ID0gMCwgcm91bmQgPSBNYXRoLnJvdW5kO1xuXHR2YXIgUFIgPSByb3VuZCggd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSApO1xuXG5cdHZhciBXSURUSCA9IDgwICogUFIsIEhFSUdIVCA9IDQ4ICogUFIsXG5cdFx0VEVYVF9YID0gMyAqIFBSLCBURVhUX1kgPSAyICogUFIsXG5cdFx0R1JBUEhfWCA9IDMgKiBQUiwgR1JBUEhfWSA9IDE1ICogUFIsXG5cdFx0R1JBUEhfV0lEVEggPSA3NCAqIFBSLCBHUkFQSF9IRUlHSFQgPSAzMCAqIFBSO1xuXG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuXHRjYW52YXMud2lkdGggPSBXSURUSDtcblx0Y2FudmFzLmhlaWdodCA9IEhFSUdIVDtcblx0Y2FudmFzLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6ODBweDtoZWlnaHQ6NDhweCc7XG5cblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xuXHRjb250ZXh0LmZvbnQgPSAnYm9sZCAnICsgKCA5ICogUFIgKSArICdweCBIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZic7XG5cdGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG5cblx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0Y29udGV4dC5maWxsUmVjdCggMCwgMCwgV0lEVEgsIEhFSUdIVCApO1xuXG5cdGNvbnRleHQuZmlsbFN0eWxlID0gZmc7XG5cdGNvbnRleHQuZmlsbFRleHQoIG5hbWUsIFRFWFRfWCwgVEVYVF9ZICk7XG5cdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1gsIEdSQVBIX1ksIEdSQVBIX1dJRFRILCBHUkFQSF9IRUlHSFQgKTtcblxuXHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMC45O1xuXHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCwgR1JBUEhfSEVJR0hUICk7XG5cblx0cmV0dXJuIHtcblxuXHRcdGRvbTogY2FudmFzLFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoIHZhbHVlLCBtYXhWYWx1ZSApIHtcblxuXHRcdFx0bWluID0gTWF0aC5taW4oIG1pbiwgdmFsdWUgKTtcblx0XHRcdG1heCA9IE1hdGgubWF4KCBtYXgsIHZhbHVlICk7XG5cblx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdFx0XHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoIDAsIDAsIFdJRFRILCBHUkFQSF9ZICk7XG5cdFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGZnO1xuXHRcdFx0Y29udGV4dC5maWxsVGV4dCggcm91bmQoIHZhbHVlICkgKyAnICcgKyBuYW1lICsgJyAoJyArIHJvdW5kKCBtaW4gKSArICctJyArIHJvdW5kKCBtYXggKSArICcpJywgVEVYVF9YLCBURVhUX1kgKTtcblxuXHRcdFx0Y29udGV4dC5kcmF3SW1hZ2UoIGNhbnZhcywgR1JBUEhfWCArIFBSLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9IRUlHSFQsIEdSQVBIX1gsIEdSQVBIX1ksIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX0hFSUdIVCApO1xuXG5cdFx0XHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YICsgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfWSwgUFIsIEdSQVBIX0hFSUdIVCApO1xuXG5cdFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRcdFx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDAuOTtcblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1ggKyBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9ZLCBQUiwgcm91bmQoICggMSAtICggdmFsdWUgLyBtYXhWYWx1ZSApICkgKiBHUkFQSF9IRUlHSFQgKSApO1xuXG5cdFx0fVxuXG5cdH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9