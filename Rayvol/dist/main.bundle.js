"use strict";
(self["webpackChunkrayvol"] = self["webpackChunkrayvol"] || []).push([["main"],{

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _node_modules_three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/three/examples/jsm/controls/OrbitControls.js */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/*import * as THREE from 'three';

import Stats from 'three/examples/jsm/libs/stats.module'
import { cmObj } from './Camera.js';
import { rdObj } from './Renderer.js';
import { scObj } from './Scene.js';
import { ctrlObj } from './Controls.js';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { DoubleSide } from 'three';
//import { cloud } from './Nebula.js';


var geometry  = new THREE.SphereBufferGeometry(3,20,20);
const material = new THREE.MeshStandardMaterial( { color:0xffffff } );
var planet =  new THREE.Mesh(geometry, material );
planet.position.set(0,0,0);
scObj.scene.add(planet);
const loader = new THREE.TextureLoader();

var texture = loader.load( 'smoke.png');

const cloudGeo = new THREE.PlaneBufferGeometry( 300, 300 );

const cloudMaterial = new THREE.MeshLambertMaterial( { 
    alphaMap : texture,
    transparent : true ,
    side: DoubleSide,
    color :0xffffff
} );

let cloudParticles = []
for(let p=0; p<50; p++) {
    let cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
    //cloud.castShadow = true;
    //cloud.scale.set(300,300,1); //THREE.Vector3(500,500,0);
    
    cloud.position.set(0, 0, 0);
    if(p>0){cloud.rotation.x = cloudParticles[p-1].rotation.x++;}
    else{cloud.rotation.x = 1.1};
    //cloud.rotation.z = Math.random()*2*Math.PI;
    cloud.material.opacity = 0.75;
    cloudParticles.push(cloud);
    scObj.scene.add(cloud);
    cloudParticles.push(cloud);
};

//const clock = new THREE.Clock();

var stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

const controls = new OrbitControls( cmObj.camera, rdObj.renderer.domElement );

function GameLoop () {

    stats.begin();
    //ctrlObj.controls.update(clock.getDelta());
    rdObj.renderer.render(scObj.scene, cmObj.camera);
    cloudParticles.forEach( p => {
        p.rotation.z -= 0.001;
        } )
    controls.update();
    stats.end();
    requestAnimationFrame(GameLoop);
};
requestAnimationFrame( GameLoop );*/



    // Canvas 
    const canvas =document.getElementById('bg');
  
    // Scene
    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
  
    /**
     * Galaxy
     */
    const params = {
      count: 300000,
      size: 0.01,
      radius: 20,
      branches: 5,
      spin: 1,
      randomness: 1,
      randomnessPower: 1,
      insideColor: "#ff6030",
      outsideColor: "#1b3984"
    };
  
    let geometry = null;
    let material = null;
    let points = null;
    const group = new three__WEBPACK_IMPORTED_MODULE_1__.Group()
    const loader = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader();
    var texture = loader.load( 'discg.png');
    const axesHelper = new three__WEBPACK_IMPORTED_MODULE_1__.AxesHelper( 5 );
    scene.add( axesHelper );

    const generateGalaxy = () => {
      if (points) {
        scene.remove(points);
        material.dispose();
        geometry.dispose();
      }
  
      // Galaxy
  
      geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry();
      const positions = new Float32Array(params.count * 3);
      const colors = new Float32Array(params.count * 3);
  
      const colorInside = new three__WEBPACK_IMPORTED_MODULE_1__.Color(params.insideColor);
      const colorOutside = new three__WEBPACK_IMPORTED_MODULE_1__.Color(params.outsideColor);
  
      for (let i = 0; i < params.count; i++) {
        const i3 = i * 3;
  
        const r = Math.random() * params.radius;
  
        const mixedColor = colorInside.clone();
        mixedColor.lerp(colorOutside, r / params.radius);
        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
  
        const branchIndex = i % params.branches;
        const branchAngle = branchIndex / params.branches;
        const rotation = branchAngle * Math.PI * 2;
        const spinAngle = r * params.spin;
  
        const randomX = Math.pow(Math.random(), params.randomnessPower) *(Math.random() - 0.5) * params.randomness * r;
        const randomY = Math.pow(Math.random(), params.randomnessPower) *(Math.random() - 0.5)* 10 * params.randomness * r;
        const randomZ = Math.pow(Math.random(), params.randomnessPower) *(Math.random() - 0.5) * params.randomness * r;
        //const rz = Math.random()
        //const randomZ = Math.cos( (Math.sqrt( randomX*randomX + randomY*randomY)/r)) * params.randomness * r;
  
        positions[i3] = Math.cos(rotation + spinAngle) * r + randomX;
        positions[i3 + 1] = randomY;
        positions[i3 + 2] = Math.sin(rotation + spinAngle) * r + randomZ;
      }
  
      // Branches
      geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(colors, 3));
      
      

      material = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({
        transparent: true,
        color: "#6359ee",
        map:texture,
        size: params.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: three__WEBPACK_IMPORTED_MODULE_1__.AdditiveBlending,
        vertexColors: true
      });
      points = new three__WEBPACK_IMPORTED_MODULE_1__.Points(geometry, material);
      group.add(points);
  
      console.log("generateGalaxy");
    };
    generateGalaxy();
    scene.add(group);
    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  
    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
  
      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
  
      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  
    /**
     * Camera
     */
    // Base camera
    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(0,0,10)// 0.2, 0.5, 1.5 );
    camera.lookAt( 0, 0, 0);
    scene.add(camera);
  
    // Controls
    const controls = new _node_modules_three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.autoRotate = false;
  
    /**
     * Renderer
     */
    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({
      canvas: canvas
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
    /**
     * Animate
     */
    const clock = new three__WEBPACK_IMPORTED_MODULE_1__.Clock();
  
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      // Update controls
      controls.update();
      //group.rotateY(0.001)
      // Render
      renderer.render(scene, camera);
      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };
  
    tick();

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVILHNDQUFzQztBQUN0Qzs7QUFFQSxzQkFBc0IsMENBQU87O0FBRTdCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEscUVBQXFFOztBQUVyRTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxxRUFBcUU7O0FBRXJFOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFNBQVMsOENBQVc7O0FBRXBCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFNBQVMsK0NBQVk7O0FBRXJCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLE9BQU87O0FBRVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUyw0Q0FBUzs7QUFFbEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxXQUFXLCtDQUFZOztBQUV2Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxXQUFXLDRDQUFTOztBQUVwQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxXQUFXLGtEQUFlOztBQUUxQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxXQUFXLHFEQUFrQjs7QUFFN0I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsb0JBQW9CLHFCQUFxQjs7QUFFekM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxtQkFBbUIsMENBQU87QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhEQUE4RCxpQkFBaUI7O0FBRS9FOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxtQ0FBbUM7O0FBRW5DLDJCQUEyQiw0Q0FBUztBQUNwQyw0QkFBNEIsK0NBQVk7O0FBRXhDLHFCQUFxQiw0Q0FBUztBQUM5QixxQkFBcUIscURBQWtCOztBQUV2Qzs7QUFFQTs7QUFFc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXl2b2wvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9yYXl2b2wvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyppbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5pbXBvcnQgU3RhdHMgZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xpYnMvc3RhdHMubW9kdWxlJ1xyXG5pbXBvcnQgeyBjbU9iaiB9IGZyb20gJy4vQ2FtZXJhLmpzJztcclxuaW1wb3J0IHsgcmRPYmogfSBmcm9tICcuL1JlbmRlcmVyLmpzJztcclxuaW1wb3J0IHsgc2NPYmogfSBmcm9tICcuL1NjZW5lLmpzJztcclxuaW1wb3J0IHsgY3RybE9iaiB9IGZyb20gJy4vQ29udHJvbHMuanMnO1xyXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzJztcclxuaW1wb3J0IHsgRG91YmxlU2lkZSB9IGZyb20gJ3RocmVlJztcclxuLy9pbXBvcnQgeyBjbG91ZCB9IGZyb20gJy4vTmVidWxhLmpzJztcclxuXHJcblxyXG52YXIgZ2VvbWV0cnkgID0gbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KDMsMjAsMjApO1xyXG5jb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCggeyBjb2xvcjoweGZmZmZmZiB9ICk7XHJcbnZhciBwbGFuZXQgPSAgbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsICk7XHJcbnBsYW5ldC5wb3NpdGlvbi5zZXQoMCwwLDApO1xyXG5zY09iai5zY2VuZS5hZGQocGxhbmV0KTtcclxuY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcclxuXHJcbnZhciB0ZXh0dXJlID0gbG9hZGVyLmxvYWQoICdzbW9rZS5wbmcnKTtcclxuXHJcbmNvbnN0IGNsb3VkR2VvID0gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoIDMwMCwgMzAwICk7XHJcblxyXG5jb25zdCBjbG91ZE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoIHsgXHJcbiAgICBhbHBoYU1hcCA6IHRleHR1cmUsXHJcbiAgICB0cmFuc3BhcmVudCA6IHRydWUgLFxyXG4gICAgc2lkZTogRG91YmxlU2lkZSxcclxuICAgIGNvbG9yIDoweGZmZmZmZlxyXG59ICk7XHJcblxyXG5sZXQgY2xvdWRQYXJ0aWNsZXMgPSBbXVxyXG5mb3IobGV0IHA9MDsgcDw1MDsgcCsrKSB7XHJcbiAgICBsZXQgY2xvdWQgPSBuZXcgVEhSRUUuTWVzaChjbG91ZEdlbyxjbG91ZE1hdGVyaWFsKTtcclxuICAgIC8vY2xvdWQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAvL2Nsb3VkLnNjYWxlLnNldCgzMDAsMzAwLDEpOyAvL1RIUkVFLlZlY3RvcjMoNTAwLDUwMCwwKTtcclxuICAgIFxyXG4gICAgY2xvdWQucG9zaXRpb24uc2V0KDAsIDAsIDApO1xyXG4gICAgaWYocD4wKXtjbG91ZC5yb3RhdGlvbi54ID0gY2xvdWRQYXJ0aWNsZXNbcC0xXS5yb3RhdGlvbi54Kys7fVxyXG4gICAgZWxzZXtjbG91ZC5yb3RhdGlvbi54ID0gMS4xfTtcclxuICAgIC8vY2xvdWQucm90YXRpb24ueiA9IE1hdGgucmFuZG9tKCkqMipNYXRoLlBJO1xyXG4gICAgY2xvdWQubWF0ZXJpYWwub3BhY2l0eSA9IDAuNzU7XHJcbiAgICBjbG91ZFBhcnRpY2xlcy5wdXNoKGNsb3VkKTtcclxuICAgIHNjT2JqLnNjZW5lLmFkZChjbG91ZCk7XHJcbiAgICBjbG91ZFBhcnRpY2xlcy5wdXNoKGNsb3VkKTtcclxufTtcclxuXHJcbi8vY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcclxuXHJcbnZhciBzdGF0cyA9IG5ldyBTdGF0cygpO1xyXG5zdGF0cy5zaG93UGFuZWwoMCk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcclxuXHJcbmNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoIGNtT2JqLmNhbWVyYSwgcmRPYmoucmVuZGVyZXIuZG9tRWxlbWVudCApO1xyXG5cclxuZnVuY3Rpb24gR2FtZUxvb3AgKCkge1xyXG5cclxuICAgIHN0YXRzLmJlZ2luKCk7XHJcbiAgICAvL2N0cmxPYmouY29udHJvbHMudXBkYXRlKGNsb2NrLmdldERlbHRhKCkpO1xyXG4gICAgcmRPYmoucmVuZGVyZXIucmVuZGVyKHNjT2JqLnNjZW5lLCBjbU9iai5jYW1lcmEpO1xyXG4gICAgY2xvdWRQYXJ0aWNsZXMuZm9yRWFjaCggcCA9PiB7XHJcbiAgICAgICAgcC5yb3RhdGlvbi56IC09IDAuMDAxO1xyXG4gICAgICAgIH0gKVxyXG4gICAgY29udHJvbHMudXBkYXRlKCk7XHJcbiAgICBzdGF0cy5lbmQoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShHYW1lTG9vcCk7XHJcbn07XHJcbnJlcXVlc3RBbmltYXRpb25GcmFtZSggR2FtZUxvb3AgKTsqL1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanMnO1xyXG5cclxuICAgIC8vIENhbnZhcyBcclxuICAgIGNvbnN0IGNhbnZhcyA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JnJyk7XHJcbiAgXHJcbiAgICAvLyBTY2VuZVxyXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICBcclxuICAgIC8qKlxyXG4gICAgICogR2FsYXh5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgY291bnQ6IDMwMDAwMCxcclxuICAgICAgc2l6ZTogMC4wMSxcclxuICAgICAgcmFkaXVzOiAyMCxcclxuICAgICAgYnJhbmNoZXM6IDUsXHJcbiAgICAgIHNwaW46IDEsXHJcbiAgICAgIHJhbmRvbW5lc3M6IDEsXHJcbiAgICAgIHJhbmRvbW5lc3NQb3dlcjogMSxcclxuICAgICAgaW5zaWRlQ29sb3I6IFwiI2ZmNjAzMFwiLFxyXG4gICAgICBvdXRzaWRlQ29sb3I6IFwiIzFiMzk4NFwiXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgbGV0IGdlb21ldHJ5ID0gbnVsbDtcclxuICAgIGxldCBtYXRlcmlhbCA9IG51bGw7XHJcbiAgICBsZXQgcG9pbnRzID0gbnVsbDtcclxuICAgIGNvbnN0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKClcclxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XHJcbiAgICB2YXIgdGV4dHVyZSA9IGxvYWRlci5sb2FkKCAnZGlzY2cucG5nJyk7XHJcbiAgICBjb25zdCBheGVzSGVscGVyID0gbmV3IFRIUkVFLkF4ZXNIZWxwZXIoIDUgKTtcclxuICAgIHNjZW5lLmFkZCggYXhlc0hlbHBlciApO1xyXG5cclxuICAgIGNvbnN0IGdlbmVyYXRlR2FsYXh5ID0gKCkgPT4ge1xyXG4gICAgICBpZiAocG9pbnRzKSB7XHJcbiAgICAgICAgc2NlbmUucmVtb3ZlKHBvaW50cyk7XHJcbiAgICAgICAgbWF0ZXJpYWwuZGlzcG9zZSgpO1xyXG4gICAgICAgIGdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAvLyBHYWxheHlcclxuICBcclxuICAgICAgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShwYXJhbXMuY291bnQgKiAzKTtcclxuICAgICAgY29uc3QgY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheShwYXJhbXMuY291bnQgKiAzKTtcclxuICBcclxuICAgICAgY29uc3QgY29sb3JJbnNpZGUgPSBuZXcgVEhSRUUuQ29sb3IocGFyYW1zLmluc2lkZUNvbG9yKTtcclxuICAgICAgY29uc3QgY29sb3JPdXRzaWRlID0gbmV3IFRIUkVFLkNvbG9yKHBhcmFtcy5vdXRzaWRlQ29sb3IpO1xyXG4gIFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaTMgPSBpICogMztcclxuICBcclxuICAgICAgICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHBhcmFtcy5yYWRpdXM7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgbWl4ZWRDb2xvciA9IGNvbG9ySW5zaWRlLmNsb25lKCk7XHJcbiAgICAgICAgbWl4ZWRDb2xvci5sZXJwKGNvbG9yT3V0c2lkZSwgciAvIHBhcmFtcy5yYWRpdXMpO1xyXG4gICAgICAgIGNvbG9yc1tpM10gPSBtaXhlZENvbG9yLnI7XHJcbiAgICAgICAgY29sb3JzW2kzICsgMV0gPSBtaXhlZENvbG9yLmc7XHJcbiAgICAgICAgY29sb3JzW2kzICsgMl0gPSBtaXhlZENvbG9yLmI7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgYnJhbmNoSW5kZXggPSBpICUgcGFyYW1zLmJyYW5jaGVzO1xyXG4gICAgICAgIGNvbnN0IGJyYW5jaEFuZ2xlID0gYnJhbmNoSW5kZXggLyBwYXJhbXMuYnJhbmNoZXM7XHJcbiAgICAgICAgY29uc3Qgcm90YXRpb24gPSBicmFuY2hBbmdsZSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgIGNvbnN0IHNwaW5BbmdsZSA9IHIgKiBwYXJhbXMuc3BpbjtcclxuICBcclxuICAgICAgICBjb25zdCByYW5kb21YID0gTWF0aC5wb3coTWF0aC5yYW5kb20oKSwgcGFyYW1zLnJhbmRvbW5lc3NQb3dlcikgKihNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHBhcmFtcy5yYW5kb21uZXNzICogcjtcclxuICAgICAgICBjb25zdCByYW5kb21ZID0gTWF0aC5wb3coTWF0aC5yYW5kb20oKSwgcGFyYW1zLnJhbmRvbW5lc3NQb3dlcikgKihNYXRoLnJhbmRvbSgpIC0gMC41KSogMTAgKiBwYXJhbXMucmFuZG9tbmVzcyAqIHI7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tWiA9IE1hdGgucG93KE1hdGgucmFuZG9tKCksIHBhcmFtcy5yYW5kb21uZXNzUG93ZXIpICooTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBwYXJhbXMucmFuZG9tbmVzcyAqIHI7XHJcbiAgICAgICAgLy9jb25zdCByeiA9IE1hdGgucmFuZG9tKClcclxuICAgICAgICAvL2NvbnN0IHJhbmRvbVogPSBNYXRoLmNvcyggKE1hdGguc3FydCggcmFuZG9tWCpyYW5kb21YICsgcmFuZG9tWSpyYW5kb21ZKS9yKSkgKiBwYXJhbXMucmFuZG9tbmVzcyAqIHI7XHJcbiAgXHJcbiAgICAgICAgcG9zaXRpb25zW2kzXSA9IE1hdGguY29zKHJvdGF0aW9uICsgc3BpbkFuZ2xlKSAqIHIgKyByYW5kb21YO1xyXG4gICAgICAgIHBvc2l0aW9uc1tpMyArIDFdID0gcmFuZG9tWTtcclxuICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSA9IE1hdGguc2luKHJvdGF0aW9uICsgc3BpbkFuZ2xlKSAqIHIgKyByYW5kb21aO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC8vIEJyYW5jaGVzXHJcbiAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSk7XHJcbiAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3JzLCAzKSk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuXHJcbiAgICAgIG1hdGVyaWFsID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICBjb2xvcjogXCIjNjM1OWVlXCIsXHJcbiAgICAgICAgbWFwOnRleHR1cmUsXHJcbiAgICAgICAgc2l6ZTogcGFyYW1zLnNpemUsXHJcbiAgICAgICAgc2l6ZUF0dGVudWF0aW9uOiB0cnVlLFxyXG4gICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxyXG4gICAgICAgIGJsZW5kaW5nOiBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgICAgIHZlcnRleENvbG9yczogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgcG9pbnRzID0gbmV3IFRIUkVFLlBvaW50cyhnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgICBncm91cC5hZGQocG9pbnRzKTtcclxuICBcclxuICAgICAgY29uc29sZS5sb2coXCJnZW5lcmF0ZUdhbGF4eVwiKTtcclxuICAgIH07XHJcbiAgICBnZW5lcmF0ZUdhbGF4eSgpO1xyXG4gICAgc2NlbmUuYWRkKGdyb3VwKTtcclxuICAgIC8qKlxyXG4gICAgICogU2l6ZXNcclxuICAgICAqL1xyXG4gICAgY29uc3Qgc2l6ZXMgPSB7XHJcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgIH07XHJcbiAgXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgIC8vIFVwZGF0ZSBzaXplc1xyXG4gICAgICBzaXplcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBzaXplcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgXHJcbiAgICAgIC8vIFVwZGF0ZSBjYW1lcmFcclxuICAgICAgY2FtZXJhLmFzcGVjdCA9IHNpemVzLndpZHRoIC8gc2l6ZXMuaGVpZ2h0O1xyXG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gIFxyXG4gICAgICAvLyBVcGRhdGUgcmVuZGVyZXJcclxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzaXplcy53aWR0aCwgc2l6ZXMuaGVpZ2h0KTtcclxuICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhNYXRoLm1pbih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgMikpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIENhbWVyYVxyXG4gICAgICovXHJcbiAgICAvLyBCYXNlIGNhbWVyYVxyXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgc2l6ZXMud2lkdGggLyBzaXplcy5oZWlnaHQsIDAuMSwgMTAwKTtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwwLDEwKS8vIDAuMiwgMC41LCAxLjUgKTtcclxuICAgIGNhbWVyYS5sb29rQXQoIDAsIDAsIDApO1xyXG4gICAgc2NlbmUuYWRkKGNhbWVyYSk7XHJcbiAgXHJcbiAgICAvLyBDb250cm9sc1xyXG4gICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIGNhbnZhcyk7XHJcbiAgICBjb250cm9scy5lbmFibGVEYW1waW5nID0gdHJ1ZTtcclxuICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcclxuICBcclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyZXJcclxuICAgICAqL1xyXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgIGNhbnZhczogY2FudmFzXHJcbiAgICB9KTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUoc2l6ZXMud2lkdGgsIHNpemVzLmhlaWdodCk7XHJcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKE1hdGgubWluKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAyKSk7XHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGVcclxuICAgICAqL1xyXG4gICAgY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcclxuICBcclxuICAgIGNvbnN0IHRpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsYXBzZWRUaW1lID0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKTtcclxuICAgICAgLy8gVXBkYXRlIGNvbnRyb2xzXHJcbiAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gICAgICAvL2dyb3VwLnJvdGF0ZVkoMC4wMDEpXHJcbiAgICAgIC8vIFJlbmRlclxyXG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgICAgIC8vIENhbGwgdGljayBhZ2FpbiBvbiB0aGUgbmV4dCBmcmFtZVxyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xyXG4gICAgfTtcclxuICBcclxuICAgIHRpY2soKTsiLCJpbXBvcnQge1xuXHRFdmVudERpc3BhdGNoZXIsXG5cdE1PVVNFLFxuXHRRdWF0ZXJuaW9uLFxuXHRTcGhlcmljYWwsXG5cdFRPVUNILFxuXHRWZWN0b3IyLFxuXHRWZWN0b3IzXG59IGZyb20gJ3RocmVlJztcblxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxuLy9cbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUtZmluZ2VyIG1vdmVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvLWZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgbGVmdCBtb3VzZSArIGN0cmwvbWV0YS9zaGlmdEtleSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0d28tZmluZ2VyIG1vdmVcblxuY29uc3QgX2NoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuY29uc3QgX3N0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcbmNvbnN0IF9lbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuY2xhc3MgT3JiaXRDb250cm9scyBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAoIGRvbUVsZW1lbnQgPT09IHVuZGVmaW5lZCApIGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IFRoZSBzZWNvbmQgcGFyYW1ldGVyIFwiZG9tRWxlbWVudFwiIGlzIG5vdyBtYW5kYXRvcnkuJyApO1xuXHRcdGlmICggZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgKSBjb25zb2xlLmVycm9yKCAnVEhSRUUuT3JiaXRDb250cm9sczogXCJkb2N1bWVudFwiIHNob3VsZCBub3QgYmUgdXNlZCBhcyB0aGUgdGFyZ2V0IFwiZG9tRWxlbWVudFwiLiBQbGVhc2UgdXNlIFwicmVuZGVyZXIuZG9tRWxlbWVudFwiIGluc3RlYWQuJyApO1xuXG5cdFx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cdFx0dGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblx0XHR0aGlzLmRvbUVsZW1lbnQuc3R5bGUudG91Y2hBY3Rpb24gPSAnbm9uZSc7IC8vIGRpc2FibGUgdG91Y2ggc2Nyb2xsXG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG5cdFx0Ly8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIG9iamVjdCBvcmJpdHMgYXJvdW5kXG5cdFx0dGhpcy50YXJnZXQgPSBuZXcgVmVjdG9yMygpO1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcblx0XHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcblx0XHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gem9vbSBpbiBhbmQgb3V0ICggT3J0aG9ncmFwaGljQ2FtZXJhIG9ubHkgKVxuXHRcdHRoaXMubWluWm9vbSA9IDA7XG5cdFx0dGhpcy5tYXhab29tID0gSW5maW5pdHk7XG5cblx0XHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0XHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cblx0XHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0XHQvLyBJZiBzZXQsIHRoZSBpbnRlcnZhbCBbIG1pbiwgbWF4IF0gbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiBbIC0gMiBQSSwgMiBQSSBdLCB3aXRoICggbWF4IC0gbWluIDwgMiBQSSApXG5cdFx0dGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXG5cdFx0Ly8gU2V0IHRvIHRydWUgdG8gZW5hYmxlIGRhbXBpbmcgKGluZXJ0aWEpXG5cdFx0Ly8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSBmYWxzZTtcblx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSAwLjA1O1xuXG5cdFx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB6b29taW5nXG5cdFx0dGhpcy5lbmFibGVab29tID0gdHJ1ZTtcblx0XHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuXHRcdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHJvdGF0aW5nXG5cdFx0dGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xuXHRcdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXG5cdFx0dGhpcy5lbmFibGVQYW4gPSB0cnVlO1xuXHRcdHRoaXMucGFuU3BlZWQgPSAxLjA7XG5cdFx0dGhpcy5zY3JlZW5TcGFjZVBhbm5pbmcgPSB0cnVlOyAvLyBpZiBmYWxzZSwgcGFuIG9ydGhvZ29uYWwgdG8gd29ybGQtc3BhY2UgZGlyZWN0aW9uIGNhbWVyYS51cFxuXHRcdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cblx0XHQvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuXHRcdC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHRcdHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciBvcmJpdCB3aGVuIGZwcyBpcyA2MFxuXG5cdFx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHRcdHRoaXMua2V5cyA9IHsgTEVGVDogJ0Fycm93TGVmdCcsIFVQOiAnQXJyb3dVcCcsIFJJR0hUOiAnQXJyb3dSaWdodCcsIEJPVFRPTTogJ0Fycm93RG93bicgfTtcblxuXHRcdC8vIE1vdXNlIGJ1dHRvbnNcblx0XHR0aGlzLm1vdXNlQnV0dG9ucyA9IHsgTEVGVDogTU9VU0UuUk9UQVRFLCBNSURETEU6IE1PVVNFLkRPTExZLCBSSUdIVDogTU9VU0UuUEFOIH07XG5cblx0XHQvLyBUb3VjaCBmaW5nZXJzXG5cdFx0dGhpcy50b3VjaGVzID0geyBPTkU6IFRPVUNILlJPVEFURSwgVFdPOiBUT1VDSC5ET0xMWV9QQU4gfTtcblxuXHRcdC8vIGZvciByZXNldFxuXHRcdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG5cdFx0dGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXHRcdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdFx0Ly8gdGhlIHRhcmdldCBET00gZWxlbWVudCBmb3Iga2V5IGV2ZW50c1xuXHRcdHRoaXMuX2RvbUVsZW1lbnRLZXlFdmVudHMgPSBudWxsO1xuXG5cdFx0Ly9cblx0XHQvLyBwdWJsaWMgbWV0aG9kc1xuXHRcdC8vXG5cblx0XHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBzcGhlcmljYWwucGhpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiBzcGhlcmljYWwudGhldGE7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXREaXN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHRoaXMub2JqZWN0LnBvc2l0aW9uLmRpc3RhbmNlVG8oIHRoaXMudGFyZ2V0ICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5saXN0ZW5Ub0tleUV2ZW50cyA9IGZ1bmN0aW9uICggZG9tRWxlbWVudCApIHtcblxuXHRcdFx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biApO1xuXHRcdFx0dGhpcy5fZG9tRWxlbWVudEtleUV2ZW50cyA9IGRvbUVsZW1lbnQ7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5zYXZlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLnRhcmdldDAuY29weSggc2NvcGUudGFyZ2V0ICk7XG5cdFx0XHRzY29wZS5wb3NpdGlvbjAuY29weSggc2NvcGUub2JqZWN0LnBvc2l0aW9uICk7XG5cdFx0XHRzY29wZS56b29tMCA9IHNjb3BlLm9iamVjdC56b29tO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLnRhcmdldC5jb3B5KCBzY29wZS50YXJnZXQwICk7XG5cdFx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uY29weSggc2NvcGUucG9zaXRpb24wICk7XG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IHNjb3BlLnpvb20wO1xuXG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9O1xuXG5cdFx0Ly8gdGhpcyBtZXRob2QgaXMgZXhwb3NlZCwgYnV0IHBlcmhhcHMgaXQgd291bGQgYmUgYmV0dGVyIGlmIHdlIGNhbiBtYWtlIGl0IHByaXZhdGUuLi5cblx0XHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gbmV3IFZlY3RvcjMoKTtcblxuXHRcdFx0Ly8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXG5cdFx0XHRjb25zdCBxdWF0ID0gbmV3IFF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFZlY3RvcjMoIDAsIDEsIDAgKSApO1xuXHRcdFx0Y29uc3QgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJ0KCk7XG5cblx0XHRcdGNvbnN0IGxhc3RQb3NpdGlvbiA9IG5ldyBWZWN0b3IzKCk7XG5cdFx0XHRjb25zdCBsYXN0UXVhdGVybmlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XG5cblx0XHRcdGNvbnN0IHR3b1BJID0gMiAqIE1hdGguUEk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUoKSB7XG5cblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cblx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2Vcblx0XHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG5cdFx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcblx0XHRcdFx0c3BoZXJpY2FsLnNldEZyb21WZWN0b3IzKCBvZmZzZXQgKTtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0XHRyb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyApIHtcblxuXHRcdFx0XHRcdHNwaGVyaWNhbC50aGV0YSArPSBzcGhlcmljYWxEZWx0YS50aGV0YSAqIHNjb3BlLmRhbXBpbmdGYWN0b3I7XG5cdFx0XHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGkgKiBzY29wZS5kYW1waW5nRmFjdG9yO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGE7XG5cdFx0XHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblxuXHRcdFx0XHRsZXQgbWluID0gc2NvcGUubWluQXppbXV0aEFuZ2xlO1xuXHRcdFx0XHRsZXQgbWF4ID0gc2NvcGUubWF4QXppbXV0aEFuZ2xlO1xuXG5cdFx0XHRcdGlmICggaXNGaW5pdGUoIG1pbiApICYmIGlzRmluaXRlKCBtYXggKSApIHtcblxuXHRcdFx0XHRcdGlmICggbWluIDwgLSBNYXRoLlBJICkgbWluICs9IHR3b1BJOyBlbHNlIGlmICggbWluID4gTWF0aC5QSSApIG1pbiAtPSB0d29QSTtcblxuXHRcdFx0XHRcdGlmICggbWF4IDwgLSBNYXRoLlBJICkgbWF4ICs9IHR3b1BJOyBlbHNlIGlmICggbWF4ID4gTWF0aC5QSSApIG1heCAtPSB0d29QSTtcblxuXHRcdFx0XHRcdGlmICggbWluIDw9IG1heCApIHtcblxuXHRcdFx0XHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gTWF0aC5tYXgoIG1pbiwgTWF0aC5taW4oIG1heCwgc3BoZXJpY2FsLnRoZXRhICkgKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdHNwaGVyaWNhbC50aGV0YSA9ICggc3BoZXJpY2FsLnRoZXRhID4gKCBtaW4gKyBtYXggKSAvIDIgKSA/XG5cdFx0XHRcdFx0XHRcdE1hdGgubWF4KCBtaW4sIHNwaGVyaWNhbC50aGV0YSApIDpcblx0XHRcdFx0XHRcdFx0TWF0aC5taW4oIG1heCwgc3BoZXJpY2FsLnRoZXRhICk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRcdHNwaGVyaWNhbC5waGkgPSBNYXRoLm1heCggc2NvcGUubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heFBvbGFyQW5nbGUsIHNwaGVyaWNhbC5waGkgKSApO1xuXG5cdFx0XHRcdHNwaGVyaWNhbC5tYWtlU2FmZSgpO1xuXG5cblx0XHRcdFx0c3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuXHRcdFx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0XHRzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgoIHNjb3BlLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggc2NvcGUubWF4RGlzdGFuY2UsIHNwaGVyaWNhbC5yYWRpdXMgKSApO1xuXG5cdFx0XHRcdC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdHNjb3BlLnRhcmdldC5hZGRTY2FsZWRWZWN0b3IoIHBhbk9mZnNldCwgc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRzY29wZS50YXJnZXQuYWRkKCBwYW5PZmZzZXQgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0b2Zmc2V0LnNldEZyb21TcGhlcmljYWwoIHNwaGVyaWNhbCApO1xuXG5cdFx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuXHRcdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG5cdFx0XHRcdHBvc2l0aW9uLmNvcHkoIHNjb3BlLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lmxvb2tBdCggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVEYW1waW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cblx0XHRcdFx0XHRwYW5PZmZzZXQubXVsdGlwbHlTY2FsYXIoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHRcdFx0cGFuT2Zmc2V0LnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzY2FsZSA9IDE7XG5cblx0XHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcblx0XHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG5cdFx0XHRcdC8vIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxuXG5cdFx0XHRcdGlmICggem9vbUNoYW5nZWQgfHxcblx0XHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApID4gRVBTIHx8XG5cdFx0XHRcdFx0OCAqICggMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKSApID4gRVBTICkge1xuXG5cdFx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0XHRsYXN0UG9zaXRpb24uY29weSggc2NvcGUub2JqZWN0LnBvc2l0aW9uICk7XG5cdFx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weSggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKTtcblx0XHRcdFx0XHR6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51ICk7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93biApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmNhbmNlbCcsIG9uUG9pbnRlckNhbmNlbCApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwgKTtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVydXAnLCBvblBvaW50ZXJVcCApO1xuXG5cblx0XHRcdGlmICggc2NvcGUuX2RvbUVsZW1lbnRLZXlFdmVudHMgIT09IG51bGwgKSB7XG5cblx0XHRcdFx0c2NvcGUuX2RvbUVsZW1lbnRLZXlFdmVudHMucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24gKTtcblxuXHRcdFx0fVxuXG5cdFx0XHQvL3Njb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cblxuXHRcdH07XG5cblx0XHQvL1xuXHRcdC8vIGludGVybmFsc1xuXHRcdC8vXG5cblx0XHRjb25zdCBzY29wZSA9IHRoaXM7XG5cblx0XHRjb25zdCBTVEFURSA9IHtcblx0XHRcdE5PTkU6IC0gMSxcblx0XHRcdFJPVEFURTogMCxcblx0XHRcdERPTExZOiAxLFxuXHRcdFx0UEFOOiAyLFxuXHRcdFx0VE9VQ0hfUk9UQVRFOiAzLFxuXHRcdFx0VE9VQ0hfUEFOOiA0LFxuXHRcdFx0VE9VQ0hfRE9MTFlfUEFOOiA1LFxuXHRcdFx0VE9VQ0hfRE9MTFlfUk9UQVRFOiA2XG5cdFx0fTtcblxuXHRcdGxldCBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRjb25zdCBFUFMgPSAwLjAwMDAwMTtcblxuXHRcdC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG5cdFx0Y29uc3Qgc3BoZXJpY2FsID0gbmV3IFNwaGVyaWNhbCgpO1xuXHRcdGNvbnN0IHNwaGVyaWNhbERlbHRhID0gbmV3IFNwaGVyaWNhbCgpO1xuXG5cdFx0bGV0IHNjYWxlID0gMTtcblx0XHRjb25zdCBwYW5PZmZzZXQgPSBuZXcgVmVjdG9yMygpO1xuXHRcdGxldCB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0Y29uc3Qgcm90YXRlU3RhcnQgPSBuZXcgVmVjdG9yMigpO1xuXHRcdGNvbnN0IHJvdGF0ZUVuZCA9IG5ldyBWZWN0b3IyKCk7XG5cdFx0Y29uc3Qgcm90YXRlRGVsdGEgPSBuZXcgVmVjdG9yMigpO1xuXG5cdFx0Y29uc3QgcGFuU3RhcnQgPSBuZXcgVmVjdG9yMigpO1xuXHRcdGNvbnN0IHBhbkVuZCA9IG5ldyBWZWN0b3IyKCk7XG5cdFx0Y29uc3QgcGFuRGVsdGEgPSBuZXcgVmVjdG9yMigpO1xuXG5cdFx0Y29uc3QgZG9sbHlTdGFydCA9IG5ldyBWZWN0b3IyKCk7XG5cdFx0Y29uc3QgZG9sbHlFbmQgPSBuZXcgVmVjdG9yMigpO1xuXHRcdGNvbnN0IGRvbGx5RGVsdGEgPSBuZXcgVmVjdG9yMigpO1xuXG5cdFx0Y29uc3QgcG9pbnRlcnMgPSBbXTtcblx0XHRjb25zdCBwb2ludGVyUG9zaXRpb25zID0ge307XG5cblx0XHRmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuXHRcdFx0cmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuXHRcdFx0cmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJvdGF0ZUxlZnQoIGFuZ2xlICkge1xuXG5cdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJvdGF0ZVVwKCBhbmdsZSApIHtcblxuXHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpIC09IGFuZ2xlO1xuXG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFuTGVmdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc3QgdiA9IG5ldyBWZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAwICk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdFx0di5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG5cdFx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdGNvbnN0IHBhblVwID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zdCB2ID0gbmV3IFZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhblVwKCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHRcdGlmICggc2NvcGUuc2NyZWVuU3BhY2VQYW5uaW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDEgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDAgKTtcblx0XHRcdFx0XHR2LmNyb3NzVmVjdG9ycyggc2NvcGUub2JqZWN0LnVwLCB2ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG5cblx0XHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0Ly8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG5cdFx0Y29uc3QgcGFuID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zdCBvZmZzZXQgPSBuZXcgVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuKCBkZWx0YVgsIGRlbHRhWSApIHtcblxuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLm9iamVjdC5pc1BlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcblx0XHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0XHRcdGxldCB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuXHRcdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuXHRcdFx0XHRcdC8vIHdlIHVzZSBvbmx5IGNsaWVudEhlaWdodCBoZXJlIHNvIGFzcGVjdCByYXRpbyBkb2VzIG5vdCBkaXN0b3J0IHNwZWVkXG5cdFx0XHRcdFx0cGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0XHRwYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QuaXNPcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcblx0XHRcdFx0XHRwYW5MZWZ0KCBkZWx0YVggKiAoIHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0ICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0XHRwYW5VcCggZGVsdGFZICogKCBzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgbm9yIHBlcnNwZWN0aXZlXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblx0XHRcdFx0XHRzY29wZS5lbmFibGVQYW4gPSBmYWxzZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHRmdW5jdGlvbiBkb2xseU91dCggZG9sbHlTY2FsZSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QuaXNPcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XG5cdFx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBkb2xseUluKCBkb2xseVNjYWxlICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdC5pc1BlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdC5pc09ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlICkgKTtcblx0XHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gZXZlbnQgY2FsbGJhY2tzIC0gdXBkYXRlIHRoZSBvYmplY3Qgc3RhdGVcblx0XHQvL1xuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApIHtcblxuXHRcdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICkge1xuXG5cdFx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApLm11bHRpcGx5U2NhbGFyKCBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0XHRjb25zdCBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTsgLy8geWVzLCBoZWlnaHRcblxuXHRcdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdFx0ZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHRcdHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApLm11bHRpcGx5U2NhbGFyKCBzY29wZS5wYW5TcGVlZCApO1xuXG5cdFx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggZXZlbnQuZGVsdGFZIDwgMCApIHtcblxuXHRcdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBldmVudC5kZWx0YVkgPiAwICkge1xuXG5cdFx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRcdGxldCBuZWVkc1VwZGF0ZSA9IGZhbHNlO1xuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC5jb2RlICkge1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5VUDpcblx0XHRcdFx0XHRwYW4oIDAsIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdFx0bmVlZHNVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG5cdFx0XHRcdFx0cGFuKCAwLCAtIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdFx0bmVlZHNVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuXHRcdFx0XHRcdHBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0XHRuZWVkc1VwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuXHRcdFx0XHRcdHBhbiggLSBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRcdG5lZWRzVXBkYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIG5lZWRzVXBkYXRlICkge1xuXG5cdFx0XHRcdC8vIHByZXZlbnQgdGhlIGJyb3dzZXIgZnJvbSBzY3JvbGxpbmcgb24gY3Vyc29yIGtleXNcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdFx0fVxuXG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCkge1xuXG5cdFx0XHRpZiAoIHBvaW50ZXJzLmxlbmd0aCA9PT0gMSApIHtcblxuXHRcdFx0XHRyb3RhdGVTdGFydC5zZXQoIHBvaW50ZXJzWyAwIF0ucGFnZVgsIHBvaW50ZXJzWyAwIF0ucGFnZVkgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zdCB4ID0gMC41ICogKCBwb2ludGVyc1sgMCBdLnBhZ2VYICsgcG9pbnRlcnNbIDEgXS5wYWdlWCApO1xuXHRcdFx0XHRjb25zdCB5ID0gMC41ICogKCBwb2ludGVyc1sgMCBdLnBhZ2VZICsgcG9pbnRlcnNbIDEgXS5wYWdlWSApO1xuXG5cdFx0XHRcdHJvdGF0ZVN0YXJ0LnNldCggeCwgeSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0UGFuKCkge1xuXG5cdFx0XHRpZiAoIHBvaW50ZXJzLmxlbmd0aCA9PT0gMSApIHtcblxuXHRcdFx0XHRwYW5TdGFydC5zZXQoIHBvaW50ZXJzWyAwIF0ucGFnZVgsIHBvaW50ZXJzWyAwIF0ucGFnZVkgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zdCB4ID0gMC41ICogKCBwb2ludGVyc1sgMCBdLnBhZ2VYICsgcG9pbnRlcnNbIDEgXS5wYWdlWCApO1xuXHRcdFx0XHRjb25zdCB5ID0gMC41ICogKCBwb2ludGVyc1sgMCBdLnBhZ2VZICsgcG9pbnRlcnNbIDEgXS5wYWdlWSApO1xuXG5cdFx0XHRcdHBhblN0YXJ0LnNldCggeCwgeSApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoKSB7XG5cblx0XHRcdGNvbnN0IGR4ID0gcG9pbnRlcnNbIDAgXS5wYWdlWCAtIHBvaW50ZXJzWyAxIF0ucGFnZVg7XG5cdFx0XHRjb25zdCBkeSA9IHBvaW50ZXJzWyAwIF0ucGFnZVkgLSBwb2ludGVyc1sgMSBdLnBhZ2VZO1xuXG5cdFx0XHRjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHlQYW4oKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSApIGhhbmRsZVRvdWNoU3RhcnREb2xseSgpO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiApIGhhbmRsZVRvdWNoU3RhcnRQYW4oKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnREb2xseVJvdGF0ZSgpIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tICkgaGFuZGxlVG91Y2hTdGFydERvbGx5KCk7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlICkgaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSgpO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBwb2ludGVycy5sZW5ndGggPT0gMSApIHtcblxuXHRcdFx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC5wYWdlWCwgZXZlbnQucGFnZVkgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IGdldFNlY29uZFBvaW50ZXJQb3NpdGlvbiggZXZlbnQgKTtcblxuXHRcdFx0XHRjb25zdCB4ID0gMC41ICogKCBldmVudC5wYWdlWCArIHBvc2l0aW9uLnggKTtcblx0XHRcdFx0Y29uc3QgeSA9IDAuNSAqICggZXZlbnQucGFnZVkgKyBwb3NpdGlvbi55ICk7XG5cblx0XHRcdFx0cm90YXRlRW5kLnNldCggeCwgeSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKS5tdWx0aXBseVNjYWxhciggc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7IC8vIHllcywgaGVpZ2h0XG5cblx0XHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggcG9pbnRlcnMubGVuZ3RoID09PSAxICkge1xuXG5cdFx0XHRcdHBhbkVuZC5zZXQoIGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0gZ2V0U2Vjb25kUG9pbnRlclBvc2l0aW9uKCBldmVudCApO1xuXG5cdFx0XHRcdGNvbnN0IHggPSAwLjUgKiAoIGV2ZW50LnBhZ2VYICsgcG9zaXRpb24ueCApO1xuXHRcdFx0XHRjb25zdCB5ID0gMC41ICogKCBldmVudC5wYWdlWSArIHBvc2l0aW9uLnkgKTtcblxuXHRcdFx0XHRwYW5FbmQuc2V0KCB4LCB5ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApLm11bHRpcGx5U2NhbGFyKCBzY29wZS5wYW5TcGVlZCApO1xuXG5cdFx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gZ2V0U2Vjb25kUG9pbnRlclBvc2l0aW9uKCBldmVudCApO1xuXG5cdFx0XHRjb25zdCBkeCA9IGV2ZW50LnBhZ2VYIC0gcG9zaXRpb24ueDtcblx0XHRcdGNvbnN0IGR5ID0gZXZlbnQucGFnZVkgLSBwb3NpdGlvbi55O1xuXG5cdFx0XHRjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdFx0ZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0XHRkb2xseURlbHRhLnNldCggMCwgTWF0aC5wb3coIGRvbGx5RW5kLnkgLyBkb2xseVN0YXJ0LnksIHNjb3BlLnpvb21TcGVlZCApICk7XG5cblx0XHRcdGRvbGx5T3V0KCBkb2xseURlbHRhLnkgKTtcblxuXHRcdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHlQYW4oIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gKSBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gKSBoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSApIGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSApIGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdC8vXG5cdFx0Ly8gZXZlbnQgaGFuZGxlcnMgLSBGU006IGxpc3RlbiBmb3IgZXZlbnRzIGFuZCByZXNldCBzdGF0ZVxuXHRcdC8vXG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJEb3duKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aWYgKCBwb2ludGVycy5sZW5ndGggPT09IDAgKSB7XG5cblx0XHRcdFx0c2NvcGUuZG9tRWxlbWVudC5zZXRQb2ludGVyQ2FwdHVyZSggZXZlbnQucG9pbnRlcklkICk7XG5cblx0XHRcdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlICk7XG5cdFx0XHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly9cblxuXHRcdFx0YWRkUG9pbnRlciggZXZlbnQgKTtcblxuXHRcdFx0aWYgKCBldmVudC5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyApIHtcblxuXHRcdFx0XHRvblRvdWNoU3RhcnQoIGV2ZW50ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0b25Nb3VzZURvd24oIGV2ZW50ICk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uUG9pbnRlck1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRpZiAoIGV2ZW50LnBvaW50ZXJUeXBlID09PSAndG91Y2gnICkge1xuXG5cdFx0XHRcdG9uVG91Y2hNb3ZlKCBldmVudCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdG9uTW91c2VNb3ZlKCBldmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJVcCggZXZlbnQgKSB7XG5cblx0XHQgICAgcmVtb3ZlUG9pbnRlciggZXZlbnQgKTtcblxuXHRcdCAgICBpZiAoIHBvaW50ZXJzLmxlbmd0aCA9PT0gMCApIHtcblxuXHRcdCAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5yZWxlYXNlUG9pbnRlckNhcHR1cmUoIGV2ZW50LnBvaW50ZXJJZCApO1xuXG5cdFx0ICAgICAgICBzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVybW92ZScsIG9uUG9pbnRlck1vdmUgKTtcblx0XHQgICAgICAgIHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwICk7XG5cblx0XHQgICAgfVxuXG5cdFx0ICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9lbmRFdmVudCApO1xuXG5cdFx0ICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uUG9pbnRlckNhbmNlbCggZXZlbnQgKSB7XG5cblx0XHRcdHJlbW92ZVBvaW50ZXIoIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cblx0XHRcdGxldCBtb3VzZUFjdGlvbjtcblxuXHRcdFx0c3dpdGNoICggZXZlbnQuYnV0dG9uICkge1xuXG5cdFx0XHRcdGNhc2UgMDpcblxuXHRcdFx0XHRcdG1vdXNlQWN0aW9uID0gc2NvcGUubW91c2VCdXR0b25zLkxFRlQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAxOlxuXG5cdFx0XHRcdFx0bW91c2VBY3Rpb24gPSBzY29wZS5tb3VzZUJ1dHRvbnMuTUlERExFO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMjpcblxuXHRcdFx0XHRcdG1vdXNlQWN0aW9uID0gc2NvcGUubW91c2VCdXR0b25zLlJJR0hUO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRtb3VzZUFjdGlvbiA9IC0gMTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggKCBtb3VzZUFjdGlvbiApIHtcblxuXHRcdFx0XHRjYXNlIE1PVVNFLkRPTExZOlxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5ET0xMWTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgTU9VU0UuUk9UQVRFOlxuXG5cdFx0XHRcdFx0aWYgKCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuc2hpZnRLZXkgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdFx0aGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgTU9VU0UuUEFOOlxuXG5cdFx0XHRcdFx0aWYgKCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuc2hpZnRLZXkgKSB7XG5cblx0XHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdFx0aGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfc3RhcnRFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdHN3aXRjaCAoIHN0YXRlICkge1xuXG5cdFx0XHRcdGNhc2UgU1RBVEUuUk9UQVRFOlxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBTVEFURS5ET0xMWTpcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgU1RBVEUuUEFOOlxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgc3RhdGUgIT09IFNUQVRFLk5PTkUgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9zdGFydEV2ZW50ICk7XG5cblx0XHRcdGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9lbmRFdmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVLZXlEb3duKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCBldmVudCApIHtcblxuXHRcdFx0dHJhY2tQb2ludGVyKCBldmVudCApO1xuXG5cdFx0XHRzd2l0Y2ggKCBwb2ludGVycy5sZW5ndGggKSB7XG5cblx0XHRcdFx0Y2FzZSAxOlxuXG5cdFx0XHRcdFx0c3dpdGNoICggc2NvcGUudG91Y2hlcy5PTkUgKSB7XG5cblx0XHRcdFx0XHRcdGNhc2UgVE9VQ0guUk9UQVRFOlxuXG5cdFx0XHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCk7XG5cblx0XHRcdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdGNhc2UgVE9VQ0guUEFOOlxuXG5cdFx0XHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0UGFuKCk7XG5cblx0XHRcdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAyOlxuXG5cdFx0XHRcdFx0c3dpdGNoICggc2NvcGUudG91Y2hlcy5UV08gKSB7XG5cblx0XHRcdFx0XHRcdGNhc2UgVE9VQ0guRE9MTFlfUEFOOlxuXG5cdFx0XHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgJiYgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0RG9sbHlQYW4oKTtcblxuXHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZX1BBTjtcblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0Y2FzZSBUT1VDSC5ET0xMWV9ST1RBVEU6XG5cblx0XHRcdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSAmJiBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnREb2xseVJvdGF0ZSgpO1xuXG5cdFx0XHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFlfUk9UQVRFO1xuXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfc3RhcnRFdmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblRvdWNoTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdHRyYWNrUG9pbnRlciggZXZlbnQgKTtcblxuXHRcdFx0c3dpdGNoICggc3RhdGUgKSB7XG5cblx0XHRcdFx0Y2FzZSBTVEFURS5UT1VDSF9ST1RBVEU6XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgU1RBVEUuVE9VQ0hfUEFOOlxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFNUQVRFLlRPVUNIX0RPTExZX1BBTjpcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgJiYgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5UGFuKCBldmVudCApO1xuXG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFNUQVRFLlRPVUNIX0RPTExZX1JPVEFURTpcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgJiYgc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5Um90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbkNvbnRleHRNZW51KCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGFkZFBvaW50ZXIoIGV2ZW50ICkge1xuXG5cdFx0XHRwb2ludGVycy5wdXNoKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcmVtb3ZlUG9pbnRlciggZXZlbnQgKSB7XG5cblx0XHRcdGRlbGV0ZSBwb2ludGVyUG9zaXRpb25zWyBldmVudC5wb2ludGVySWQgXTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcG9pbnRlcnMubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRcdGlmICggcG9pbnRlcnNbIGkgXS5wb2ludGVySWQgPT0gZXZlbnQucG9pbnRlcklkICkge1xuXG5cdFx0XHRcdFx0cG9pbnRlcnMuc3BsaWNlKCBpLCAxICk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJhY2tQb2ludGVyKCBldmVudCApIHtcblxuXHRcdFx0bGV0IHBvc2l0aW9uID0gcG9pbnRlclBvc2l0aW9uc1sgZXZlbnQucG9pbnRlcklkIF07XG5cblx0XHRcdGlmICggcG9zaXRpb24gPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRwb3NpdGlvbiA9IG5ldyBWZWN0b3IyKCk7XG5cdFx0XHRcdHBvaW50ZXJQb3NpdGlvbnNbIGV2ZW50LnBvaW50ZXJJZCBdID0gcG9zaXRpb247XG5cblx0XHRcdH1cblxuXHRcdFx0cG9zaXRpb24uc2V0KCBldmVudC5wYWdlWCwgZXZlbnQucGFnZVkgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldFNlY29uZFBvaW50ZXJQb3NpdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdGNvbnN0IHBvaW50ZXIgPSAoIGV2ZW50LnBvaW50ZXJJZCA9PT0gcG9pbnRlcnNbIDAgXS5wb2ludGVySWQgKSA/IHBvaW50ZXJzWyAxIF0gOiBwb2ludGVyc1sgMCBdO1xuXG5cdFx0XHRyZXR1cm4gcG9pbnRlclBvc2l0aW9uc1sgcG9pbnRlci5wb2ludGVySWQgXTtcblxuXHRcdH1cblxuXHRcdC8vXG5cblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93biApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJjYW5jZWwnLCBvblBvaW50ZXJDYW5jZWwgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9ICk7XG5cblx0XHQvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcblxuXHRcdHRoaXMudXBkYXRlKCk7XG5cblx0fVxuXG59XG5cblxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxuLy8gVGhpcyBpcyB2ZXJ5IHNpbWlsYXIgdG8gT3JiaXRDb250cm9scywgYW5vdGhlciBzZXQgb2YgdG91Y2ggYmVoYXZpb3Jcbi8vXG4vLyAgICBPcmJpdCAtIHJpZ2h0IG1vdXNlLCBvciBsZWZ0IG1vdXNlICsgY3RybC9tZXRhL3NoaWZ0S2V5IC8gdG91Y2g6IHR3by1maW5nZXIgcm90YXRlXG4vLyAgICBab29tIC0gbWlkZGxlIG1vdXNlLCBvciBtb3VzZXdoZWVsIC8gdG91Y2g6IHR3by1maW5nZXIgc3ByZWFkIG9yIHNxdWlzaFxuLy8gICAgUGFuIC0gbGVmdCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiBvbmUtZmluZ2VyIG1vdmVcblxuY2xhc3MgTWFwQ29udHJvbHMgZXh0ZW5kcyBPcmJpdENvbnRyb2xzIHtcblxuXHRjb25zdHJ1Y3Rvciggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG5cdFx0c3VwZXIoIG9iamVjdCwgZG9tRWxlbWVudCApO1xuXG5cdFx0dGhpcy5zY3JlZW5TcGFjZVBhbm5pbmcgPSBmYWxzZTsgLy8gcGFuIG9ydGhvZ29uYWwgdG8gd29ybGQtc3BhY2UgZGlyZWN0aW9uIGNhbWVyYS51cFxuXG5cdFx0dGhpcy5tb3VzZUJ1dHRvbnMuTEVGVCA9IE1PVVNFLlBBTjtcblx0XHR0aGlzLm1vdXNlQnV0dG9ucy5SSUdIVCA9IE1PVVNFLlJPVEFURTtcblxuXHRcdHRoaXMudG91Y2hlcy5PTkUgPSBUT1VDSC5QQU47XG5cdFx0dGhpcy50b3VjaGVzLlRXTyA9IFRPVUNILkRPTExZX1JPVEFURTtcblxuXHR9XG5cbn1cblxuZXhwb3J0IHsgT3JiaXRDb250cm9scywgTWFwQ29udHJvbHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==