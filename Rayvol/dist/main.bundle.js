"use strict";
(self["webpackChunkrayvol"] = self["webpackChunkrayvol"] || []).push([["main"],{

/***/ "./src/shaders/sphere/fragment.glsl":
/*!******************************************!*\
  !*** ./src/shaders/sphere/fragment.glsl ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\nvarying vec3 vColor;\n\nvoid main()\n{\n    gl_FragColor = vec4(vColor, 1.0);\n}");

/***/ }),

/***/ "./src/shaders/sphere/vertex.glsl":
/*!****************************************!*\
  !*** ./src/shaders/sphere/vertex.glsl ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\n#define M_PI 3.1415926535897932384626433832795\n\nuniform vec3 uLightAColor;\nuniform vec3 uLightAPosition;\nuniform float uLightAIntensity;\nuniform vec3 uLightBColor;\nuniform vec3 uLightBPosition;\nuniform float uLightBIntensity;\n\nuniform vec2 uSubdivision;\n\nuniform vec3 uOffset;\n\nuniform float uDistortionFrequency;\nuniform float uDistortionStrength;\nuniform float uDisplacementFrequency;\nuniform float uDisplacementStrength;\n\nuniform float uFresnelOffset;\nuniform float uFresnelMultiplier;\nuniform float uFresnelPower;\n\nuniform float uTime;\n\nvarying vec3 vColor;\n\n//\tClassic Perlin 3D Noise \n//\tby Stefan Gustavson\n//\nvec4 permute_0(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt_0(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec4 fade_0(vec4 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat perlin4d(vec4 P){\n  vec4 Pi0 = floor(P); // Integer part for indexing\n  vec4 Pi1 = Pi0 + 1.0; // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec4 Pf0 = fract(P); // Fractional part for interpolation\n  vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = vec4(Pi0.zzzz);\n  vec4 iz1 = vec4(Pi1.zzzz);\n  vec4 iw0 = vec4(Pi0.wwww);\n  vec4 iw1 = vec4(Pi1.wwww);\n\n  vec4 ixy = permute_0(permute_0(ix) + iy);\n  vec4 ixy0 = permute_0(ixy + iz0);\n  vec4 ixy1 = permute_0(ixy + iz1);\n  vec4 ixy00 = permute_0(ixy0 + iw0);\n  vec4 ixy01 = permute_0(ixy0 + iw1);\n  vec4 ixy10 = permute_0(ixy1 + iw0);\n  vec4 ixy11 = permute_0(ixy1 + iw1);\n\n  vec4 gx00 = ixy00 / 7.0;\n  vec4 gy00 = floor(gx00) / 7.0;\n  vec4 gz00 = floor(gy00) / 6.0;\n  gx00 = fract(gx00) - 0.5;\n  gy00 = fract(gy00) - 0.5;\n  gz00 = fract(gz00) - 0.5;\n  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);\n  vec4 sw00 = step(gw00, vec4(0.0));\n  gx00 -= sw00 * (step(0.0, gx00) - 0.5);\n  gy00 -= sw00 * (step(0.0, gy00) - 0.5);\n\n  vec4 gx01 = ixy01 / 7.0;\n  vec4 gy01 = floor(gx01) / 7.0;\n  vec4 gz01 = floor(gy01) / 6.0;\n  gx01 = fract(gx01) - 0.5;\n  gy01 = fract(gy01) - 0.5;\n  gz01 = fract(gz01) - 0.5;\n  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);\n  vec4 sw01 = step(gw01, vec4(0.0));\n  gx01 -= sw01 * (step(0.0, gx01) - 0.5);\n  gy01 -= sw01 * (step(0.0, gy01) - 0.5);\n\n  vec4 gx10 = ixy10 / 7.0;\n  vec4 gy10 = floor(gx10) / 7.0;\n  vec4 gz10 = floor(gy10) / 6.0;\n  gx10 = fract(gx10) - 0.5;\n  gy10 = fract(gy10) - 0.5;\n  gz10 = fract(gz10) - 0.5;\n  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);\n  vec4 sw10 = step(gw10, vec4(0.0));\n  gx10 -= sw10 * (step(0.0, gx10) - 0.5);\n  gy10 -= sw10 * (step(0.0, gy10) - 0.5);\n\n  vec4 gx11 = ixy11 / 7.0;\n  vec4 gy11 = floor(gx11) / 7.0;\n  vec4 gz11 = floor(gy11) / 6.0;\n  gx11 = fract(gx11) - 0.5;\n  gy11 = fract(gy11) - 0.5;\n  gz11 = fract(gz11) - 0.5;\n  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);\n  vec4 sw11 = step(gw11, vec4(0.0));\n  gx11 -= sw11 * (step(0.0, gx11) - 0.5);\n  gy11 -= sw11 * (step(0.0, gy11) - 0.5);\n\n  vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);\n  vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);\n  vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);\n  vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);\n  vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);\n  vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);\n  vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);\n  vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);\n  vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);\n  vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);\n  vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);\n  vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);\n  vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);\n  vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);\n  vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);\n  vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);\n\n  vec4 norm00 = taylorInvSqrt_0(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));\n  g0000 *= norm00.x;\n  g0100 *= norm00.y;\n  g1000 *= norm00.z;\n  g1100 *= norm00.w;\n\n  vec4 norm01 = taylorInvSqrt_0(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));\n  g0001 *= norm01.x;\n  g0101 *= norm01.y;\n  g1001 *= norm01.z;\n  g1101 *= norm01.w;\n\n  vec4 norm10 = taylorInvSqrt_0(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));\n  g0010 *= norm10.x;\n  g0110 *= norm10.y;\n  g1010 *= norm10.z;\n  g1110 *= norm10.w;\n\n  vec4 norm11 = taylorInvSqrt_0(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));\n  g0011 *= norm11.x;\n  g0111 *= norm11.y;\n  g1011 *= norm11.z;\n  g1111 *= norm11.w;\n\n  float n0000 = dot(g0000, Pf0);\n  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));\n  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));\n  float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));\n  float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));\n  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));\n  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));\n  float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));\n  float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));\n  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));\n  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));\n  float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));\n  float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));\n  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));\n  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));\n  float n1111 = dot(g1111, Pf1);\n\n  vec4 fade_xyzw = fade_0(Pf0);\n  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);\n  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);\n  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);\n  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);\n  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);\n  return 2.2 * n_xyzw;\n}\n\n//\tClassic Perlin 3D Noise \n//\tby Stefan Gustavson\n//\nvec4 permute_1(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt_1(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec3 fade_1(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat perlin3d(vec3 P)\n{\n    vec3 Pi0 = floor(P); // Integer part for indexing\n    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n    Pi0 = mod(Pi0, 289.0);\n    Pi1 = mod(Pi1, 289.0);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n\n    vec4 ixy = permute_1(permute_1(ix) + iy);\n    vec4 ixy0 = permute_1(ixy + iz0);\n    vec4 ixy1 = permute_1(ixy + iz1);\n\n    vec4 gx0 = ixy0 / 7.0;\n    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n    vec4 gx1 = ixy1 / 7.0;\n    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n    vec4 norm0 = taylorInvSqrt_1(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt_1(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n\n    vec3 fade_xyz = fade_1(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n    return 2.2 * n_xyz;\n}\n\nvec3 getDisplacedPosition(vec3 _position)\n{\n    vec3 distoredPosition = _position;\n    distoredPosition += perlin4d(vec4(distoredPosition * uDistortionFrequency + uOffset, uTime)) * uDistortionStrength;\n\n    float perlinStrength = perlin4d(vec4(distoredPosition * uDisplacementFrequency + uOffset, uTime));\n    \n    vec3 displacedPosition = _position;\n    displacedPosition += normalize(_position) * perlinStrength * uDisplacementStrength;\n\n    return displacedPosition;\n}\n\nvoid main()\n{\n    // Position\n    vec3 displacedPosition = getDisplacedPosition(position);\n    vec4 viewPosition = viewMatrix * vec4(displacedPosition, 1.0);\n    gl_Position = projectionMatrix * viewPosition;\n\n    // Bi tangents\n    float distanceA = (M_PI * 2.0) / uSubdivision.x;\n    float distanceB = M_PI / uSubdivision.x;\n\n    vec3 biTangent = cross(normal, tangent.xyz);\n\n    vec3 positionA = position + tangent.xyz * distanceA;\n    vec3 displacedPositionA = getDisplacedPosition(positionA);\n\n    vec3 positionB = position + biTangent.xyz * distanceB;\n    vec3 displacedPositionB = getDisplacedPosition(positionB);\n\n    vec3 computedNormal = cross(displacedPositionA - displacedPosition.xyz, displacedPositionB - displacedPosition.xyz);\n    computedNormal = normalize(computedNormal);\n\n    // Fresnel\n    vec3 viewDirection = normalize(displacedPosition.xyz - cameraPosition);\n    float fresnel = uFresnelOffset + (1.0 + dot(viewDirection, computedNormal)) * uFresnelMultiplier;\n    fresnel = pow(max(0.0, fresnel), uFresnelPower);\n\n    // Color\n    float lightAIntensity = max(0.0, - dot(computedNormal.xyz, normalize(- uLightAPosition))) * uLightAIntensity;\n    float lightBIntensity = max(0.0, - dot(computedNormal.xyz, normalize(- uLightBPosition))) * uLightBIntensity;\n\n    vec3 color = vec3(0.0);\n    color = mix(color, uLightAColor, lightAIntensity * fresnel);\n    color = mix(color, uLightBColor, lightBIntensity * fresnel);\n    color = mix(color, vec3(1.0), clamp(pow(max(0.0, fresnel - 0.8), 3.0), 0.0, 1.0));\n\n    // Varying\n    vColor = color;\n}");

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



const params = {
  count: 200000,
  size: 0.01,
  radius: 10,
  branches: 4,
  spin: 0.5,
  randomAmplitude: 1,
  insideColor: "#ff6030",
  outsideColor: "#1b3984"
};

function randomSign() {
  let sign = Math.random() - 0.5;
  if (sign >= 0) { return sign = 1 }
  else { return sign = -1 }
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
  var texture = loader.load('discg.png');


  // Setting up few variables for the main loop
  const group = new three__WEBPACK_IMPORTED_MODULE_0__.Group()
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
    const a = 2 ;
    const psy = rotation + spinAngle;
    const k = 0.005;
    const linearRandom = 1
    positions[i3] = r * ( a * Math.exp(k*psy)*Math.cos(psy) + randomX * linearRandom);
    positions[i3 + 2] = r * ( a * Math.exp(k*psy)*Math.sin(psy) + randomZ * linearRandom);

    //Y axis should be on a flat gaussian shape equation y= A * (1 / (theta * Math.sqrt(2 * Math.PI)))*exp( -(r*r)/(theta*theta))
    const theta = 5;
    const A = 30; 
    const expo = (1 / (theta * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * (r * r) / (theta * theta))
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
    vertexColors: true
  });
  points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(geometry, material);
  group.add(points);

  console.log("generateGalaxy");
  return group;
};

function galaxyRender(){
  
}


/***/ }),

/***/ "./src/js/Planet.js":
/*!**************************!*\
  !*** ./src/js/Planet.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Planet)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _shaders_sphere_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaders/sphere/vertex.glsl */ "./src/shaders/sphere/vertex.glsl");
/* harmony import */ var _shaders_sphere_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaders/sphere/fragment.glsl */ "./src/shaders/sphere/fragment.glsl");

//import Experience from './Experience'



class Planet
{
    constructor(scene)
    {
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = scene
        this.time = new Time()
        //this.microphone = this.experience.microphone

        this.timeFrequency = 0.0003
        this.elapsedTime = 0

        if(this.debug)
        {
            this.debugFolder = this.debug.addFolder({
                title: 'sphere',
                expanded: true
            })

            this.debugFolder.addInput(
                this,
                'timeFrequency',
                { min: 0, max: 0.001, step: 0.000001 }
            )
        }
        
        this.setVariations()
        this.setGeometry()
        this.setLights()
        this.setOffset()
        this.setMaterial()
        this.setMesh()
    }

    setVariations()
    {
        this.variations = {}

        this.variations.volume = {}
        this.variations.volume.target = 0
        this.variations.volume.current = 0
        this.variations.volume.upEasing = 0.03
        this.variations.volume.downEasing = 0.002
        this.variations.volume.getValue = () =>
        {
            const level0 = this.microphone.levels[0] || 0
            const level1 = this.microphone.levels[1] || 0
            const level2 = this.microphone.levels[2] || 0

            return Math.max(level0, level1, level2) * 0.3
        }
        this.variations.volume.getDefault = () =>
        {
            return 0.152
        }

        this.variations.lowLevel = {}
        this.variations.lowLevel.target = 0
        this.variations.lowLevel.current = 0
        this.variations.lowLevel.upEasing = 0.005
        this.variations.lowLevel.downEasing = 0.002
        this.variations.lowLevel.getValue = () =>
        {
            let value = this.microphone.levels[0] || 0
            value *= 0.003
            value += 0.0001
            value = Math.max(0, value)

            return value
        }
        this.variations.lowLevel.getDefault = () =>
        {
            return 0.0003
        }
        
        this.variations.mediumLevel = {}
        this.variations.mediumLevel.target = 0
        this.variations.mediumLevel.current = 0
        this.variations.mediumLevel.upEasing = 0.008
        this.variations.mediumLevel.downEasing = 0.004
        this.variations.mediumLevel.getValue = () =>
        {
            let value = this.microphone.levels[1] || 0
            value *= 2
            value += 3.587
            value = Math.max(3.587, value)

            return value
        }
        this.variations.mediumLevel.getDefault = () =>
        {
            return 3.587
        }
        
        this.variations.highLevel = {}
        this.variations.highLevel.target = 0
        this.variations.highLevel.current = 0
        this.variations.highLevel.upEasing = 0.02
        this.variations.highLevel.downEasing = 0.001
        this.variations.highLevel.getValue = () =>
        {
            let value = this.microphone.levels[2] || 0
            value *= 5
            value += 0.5
            value = Math.max(0.5, value)

            return value
        }
        this.variations.highLevel.getDefault = () =>
        {
            return 0.65
        }
    }

    setLights()
    {
        this.lights = {}

        // Light A
        this.lights.a = {}

        this.lights.a.intensity = 1.85

        this.lights.a.color = {}
        this.lights.a.color.value = '#ff3e00'
        this.lights.a.color.instance = new three__WEBPACK_IMPORTED_MODULE_2__.Color(this.lights.a.color.value)

        this.lights.a.spherical = new three__WEBPACK_IMPORTED_MODULE_2__.Spherical()//1, 0.615, 2.049)

        // Light B
        this.lights.b = {}

        this.lights.b.intensity = 1.4

        this.lights.b.color = {}
        this.lights.b.color.value = '#0063ff'
        this.lights.b.color.instance = new three__WEBPACK_IMPORTED_MODULE_2__.Color(this.lights.b.color.value)

        this.lights.b.spherical = new three__WEBPACK_IMPORTED_MODULE_2__.Spherical()//1, 2.561, - 1.844)

        // Debug
        if(this.debug)
        {
            for(const _lightName in this.lights)
            {
                const light = this.lights[_lightName]
                
                const debugFolder = this.debugFolder.addFolder({
                    title: _lightName,
                    expanded: true
                })

                debugFolder
                    .addInput(
                        light.color,
                        'value',
                        { view: 'color', label: 'color' }
                    )
                    .on('change', () =>
                    {
                        light.color.instance.set(light.color.value)
                    })

                debugFolder
                    .addInput(
                        light,
                        'intensity',
                        { min: 0, max: 10 }
                    )
                    .on('change', () =>
                    {
                        this.material.uniforms[`uLight${_lightName.toUpperCase()}Intensity`].value = light.intensity
                    })

                debugFolder
                    .addInput(
                        light.spherical,
                        'phi',
                        { label: 'phi', min: 0, max: Math.PI, step: 0.001 }
                    )
                    .on('change', () =>
                    {
                        this.material.uniforms[`uLight${_lightName.toUpperCase()}Position`].value.setFromSpherical(light.spherical)
                    })

                debugFolder
                    .addInput(
                        light.spherical,
                        'theta',
                        { label: 'theta', min: - Math.PI, max: Math.PI, step: 0.001 }
                    )
                    .on('change', () =>
                    {
                        this.material.uniforms.uLightAPosition.value.setFromSpherical(light.spherical)
                    })
            }
        }
    }

    setOffset()
    {
        this.offset = {}
        this.offset.spherical = new three__WEBPACK_IMPORTED_MODULE_2__.Spherical(1, Math.random() * Math.PI, Math.random() * Math.PI * 2)
        this.offset.direction = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3()
        this.offset.direction.setFromSpherical(this.offset.spherical)
    }

    setGeometry()
    {
        this.geometry = new three__WEBPACK_IMPORTED_MODULE_2__.SphereGeometry(1, 20, 20)
        this.geometry.computeTangents()
    }

    setMaterial()
    {
        this.material = new three__WEBPACK_IMPORTED_MODULE_2__.ShaderMaterial({
            uniforms:
            {
                uLightAColor: { value: this.lights.a.color.instance },
                uLightAPosition: { value: new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(1, 1, 0) },
                uLightAIntensity: { value: this.lights.a.intensity },

                uLightBColor: { value: this.lights.b.color.instance },
                uLightBPosition: { value: new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(- 1, - 1, 0) },
                uLightBIntensity: { value: this.lights.b.intensity },

                uSubdivision: { value: new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(this.geometry.parameters.widthSegments, this.geometry.parameters.heightSegments) },

                uOffset: { value: new three__WEBPACK_IMPORTED_MODULE_2__.Vector3() },

                uDistortionFrequency: { value: 1.5 },
                uDistortionStrength: { value: 0.65 },
                uDisplacementFrequency: { value: 2.120 },
                uDisplacementStrength: { value: 0.152 },

                uFresnelOffset: { value: -1.609 },
                uFresnelMultiplier: { value: 3.587 },
                uFresnelPower: { value: 1.793 },

                uTime: { value: 0 }
            },
            defines:
            {
                USE_TANGENT: ''
            },
            vertexShader: _shaders_sphere_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
            fragmentShader: _shaders_sphere_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__["default"]
        })

        this.material.uniforms.uLightAPosition.value.setFromSpherical(this.lights.a.spherical)
        this.material.uniforms.uLightBPosition.value.setFromSpherical(this.lights.b.spherical)
        
        if(this.debug)
        {
            this.debugFolder.addInput(
                this.material.uniforms.uDistortionFrequency,
                'value',
                { label: 'uDistortionFrequency', min: 0, max: 10, step: 0.001 }
            )
            
            this.debugFolder.addInput(
                this.material.uniforms.uDistortionStrength,
                'value',
                { label: 'uDistortionStrength', min: 0, max: 10, step: 0.001 }
            )
            
            this.debugFolder.addInput(
                this.material.uniforms.uDisplacementFrequency,
                'value',
                { label: 'uDisplacementFrequency', min: 0, max: 5, step: 0.001 }
            )
            
            this.debugFolder.addInput(
                this.material.uniforms.uDisplacementStrength,
                'value',
                { label: 'uDisplacementStrength', min: 0, max: 1, step: 0.001 }
            )
            
            this.debugFolder.addInput(
                this.material.uniforms.uFresnelOffset,
                'value',
                { label: 'uFresnelOffset', min: - 2, max: 2, step: 0.001 }
            )
            
            this.debugFolder.addInput(
                this.material.uniforms.uFresnelMultiplier,
                'value',
                { label: 'uFresnelMultiplier', min: 0, max: 5, step: 0.001 }
            )
            
            this.debugFolder.addInput(
                this.material.uniforms.uFresnelPower,
                'value',
                { label: 'uFresnelPower', min: 0, max: 5, step: 0.001 }
            )
        }
    }

    setMesh()
    {
        this.mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)
    }

    update()
    {
        // Update variations
        for(let _variationName in this.variations)
        {
            const variation = this.variations[_variationName]
            variation.target = this.microphone.ready ? variation.getValue() : variation.getDefault()
            
            const easing = variation.target > variation.current ? variation.upEasing : variation.downEasing
            variation.current += (variation.target - variation.current) * easing * this.time.delta
        }

        // Time
        this.timeFrequency = this.variations.lowLevel.current
        this.elapsedTime = this.time.delta * this.timeFrequency

        // Update material
        this.material.uniforms.uDisplacementStrength.value = this.variations.volume.current
        this.material.uniforms.uDistortionStrength.value = this.variations.highLevel.current
        this.material.uniforms.uFresnelMultiplier.value = this.variations.mediumLevel.current

        // Offset
        const offsetTime = this.elapsedTime * 0.3
        this.offset.spherical.phi = ((Math.sin(offsetTime * 0.001) * Math.sin(offsetTime * 0.00321)) * 0.5 + 0.5) * Math.PI
        this.offset.spherical.theta = ((Math.sin(offsetTime * 0.0001) * Math.sin(offsetTime * 0.000321)) * 0.5 + 0.5) * Math.PI * 2
        this.offset.direction.setFromSpherical(this.offset.spherical)
        this.offset.direction.multiplyScalar(this.timeFrequency * 2)

        this.material.uniforms.uOffset.value.add(this.offset.direction)

        // Time
        this.material.uniforms.uTime.value += this.elapsedTime
    }
}

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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Responsive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Responsive.js */ "./src/js/Responsive.js");
/* harmony import */ var three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/libs/stats.module */ "./node_modules/three/examples/jsm/libs/stats.module.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Renderer.js */ "./src/js/Renderer.js");
/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Scene.js */ "./src/js/Scene.js");
/* harmony import */ var _Controls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controls.js */ "./src/js/Controls.js");
/* harmony import */ var _Galaxy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Galaxy.js */ "./src/js/Galaxy.js");
/* harmony import */ var _node_modules_three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/three/examples/jsm/controls/OrbitControls.js */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _Planet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Planet.js */ "./src/js/Planet.js");












//import { cloud } from './Nebula.js';

var geometry  = new three__WEBPACK_IMPORTED_MODULE_9__.SphereBufferGeometry(1,20,20);
const material = new three__WEBPACK_IMPORTED_MODULE_9__.MeshStandardMaterial( { color:0xffffff } );
var planet =  new _Planet_js__WEBPACK_IMPORTED_MODULE_8__["default"](_Scene_js__WEBPACK_IMPORTED_MODULE_4__.scObj.scene);
planet.position.set(0,0,0);
//scObj.scene.add(planet);

//const clock = new THREE.Clock();

var stats = new three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_1__["default"]();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
//document.body.appendChild(stats.dom);

const controls = new _node_modules_three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_7__.OrbitControls( _Camera_js__WEBPACK_IMPORTED_MODULE_2__.cmObj.camera, _Renderer_js__WEBPACK_IMPORTED_MODULE_3__.rdObj.renderer.domElement );

const galaxy = (0,_Galaxy_js__WEBPACK_IMPORTED_MODULE_6__.generateGalaxy)();
_Scene_js__WEBPACK_IMPORTED_MODULE_4__.scObj.scene.add(galaxy);
function GameLoop () {

    stats.begin();
    //ctrlObj.controls.update(clock.getDelta());
    //console.log( cmObj.camera.position )
    _Renderer_js__WEBPACK_IMPORTED_MODULE_3__.rdObj.renderer.render(_Scene_js__WEBPACK_IMPORTED_MODULE_4__.scObj.scene, _Camera_js__WEBPACK_IMPORTED_MODULE_2__.cmObj.camera);
    galaxy.rotateY(0.0001);
    controls.update();
    stats.end();
    requestAnimationFrame(GameLoop);
};

requestAnimationFrame( GameLoop );



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
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBLDhDQUE4QztBQUM5Qzs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBLGlCQUFpQiwwQ0FBTzs7QUFFeEI7O0FBRUE7O0FBRUE7O0FBRUEsTUFBTTs7QUFFTjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUgsc0NBQXNDO0FBQ3RDOztBQUVBLHNCQUFzQiwwQ0FBTzs7QUFFN0I7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUEsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxxRUFBcUU7O0FBRXJFOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHFFQUFxRTs7QUFFckU7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUyw4Q0FBVzs7QUFFcEI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUywrQ0FBWTs7QUFFckI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxTQUFTLDRDQUFTOztBQUVsQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFdBQVcsK0NBQVk7O0FBRXZCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFdBQVcsNENBQVM7O0FBRXBCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFdBQVcsa0RBQWU7O0FBRTFCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFdBQVcscURBQWtCOztBQUU3Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0IscUJBQXFCOztBQUV6Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG1CQUFtQiwwQ0FBTztBQUMxQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsOERBQThELGlCQUFpQjs7QUFFL0U7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG1DQUFtQzs7QUFFbkMsMkJBQTJCLDRDQUFTO0FBQ3BDLDRCQUE0QiwrQ0FBWTs7QUFFeEMscUJBQXFCLDRDQUFTO0FBQzlCLHFCQUFxQixxREFBa0I7O0FBRXZDOztBQUVBOztBQUVzQzs7Ozs7Ozs7Ozs7Ozs7OztBQy90Q3ZCOztBQUVmLG1CQUFtQix3Q0FBSztBQUN4QixvQkFBb0IsMENBQU87O0FBRTNCLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsdUJBQXVCOztBQUV2Qjs7QUFFQSxrQ0FBa0Msa0RBQWU7O0FBRWpEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGdDQUFnQzs7QUFFaEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxpQ0FBaUM7O0FBRWpDOztBQUVBOztBQUVBOztBQUVBLHlCQUF5QiwwQ0FBTzs7QUFFaEM7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUUrQjs7Ozs7Ozs7Ozs7Ozs7O0FDbksvQjs7QUFFQTs7QUFFQTtBQUNBLDJDQUEyQyxNQUFNLE9BQU8sZUFBZSxZQUFZO0FBQ25GOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1CQUFtQiwrQkFBK0I7O0FBRWxEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGlFQUFlLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JheXZvbC8uL3NyYy9zaGFkZXJzL3NwaGVyZS9mcmFnbWVudC5nbHNsIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9zaGFkZXJzL3NwaGVyZS92ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly9yYXl2b2wvLi9zcmMvanMvQ2FtZXJhLmpzIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9qcy9Db250cm9scy5qcyIsIndlYnBhY2s6Ly9yYXl2b2wvLi9zcmMvanMvR2FsYXh5LmpzIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9qcy9QbGFuZXQuanMiLCJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL2pzL1JlbmRlcmVyLmpzIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9qcy9SZXNwb25zaXZlLmpzIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9qcy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9yYXl2b2wvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9yYXl2b2wvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vcmF5dm9sLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9Qb2ludGVyTG9ja0NvbnRyb2xzLmpzIiwid2VicGFjazovL3JheXZvbC8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vbGlicy9zdGF0cy5tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnZhcnlpbmcgdmVjMyB2Q29sb3I7XFxuXFxudm9pZCBtYWluKClcXG57XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodkNvbG9yLCAxLjApO1xcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcIiNkZWZpbmUgR0xTTElGWSAxXFxuI2RlZmluZSBNX1BJIDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NVxcblxcbnVuaWZvcm0gdmVjMyB1TGlnaHRBQ29sb3I7XFxudW5pZm9ybSB2ZWMzIHVMaWdodEFQb3NpdGlvbjtcXG51bmlmb3JtIGZsb2F0IHVMaWdodEFJbnRlbnNpdHk7XFxudW5pZm9ybSB2ZWMzIHVMaWdodEJDb2xvcjtcXG51bmlmb3JtIHZlYzMgdUxpZ2h0QlBvc2l0aW9uO1xcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0QkludGVuc2l0eTtcXG5cXG51bmlmb3JtIHZlYzIgdVN1YmRpdmlzaW9uO1xcblxcbnVuaWZvcm0gdmVjMyB1T2Zmc2V0O1xcblxcbnVuaWZvcm0gZmxvYXQgdURpc3RvcnRpb25GcmVxdWVuY3k7XFxudW5pZm9ybSBmbG9hdCB1RGlzdG9ydGlvblN0cmVuZ3RoO1xcbnVuaWZvcm0gZmxvYXQgdURpc3BsYWNlbWVudEZyZXF1ZW5jeTtcXG51bmlmb3JtIGZsb2F0IHVEaXNwbGFjZW1lbnRTdHJlbmd0aDtcXG5cXG51bmlmb3JtIGZsb2F0IHVGcmVzbmVsT2Zmc2V0O1xcbnVuaWZvcm0gZmxvYXQgdUZyZXNuZWxNdWx0aXBsaWVyO1xcbnVuaWZvcm0gZmxvYXQgdUZyZXNuZWxQb3dlcjtcXG5cXG51bmlmb3JtIGZsb2F0IHVUaW1lO1xcblxcbnZhcnlpbmcgdmVjMyB2Q29sb3I7XFxuXFxuLy9cXHRDbGFzc2ljIFBlcmxpbiAzRCBOb2lzZSBcXG4vL1xcdGJ5IFN0ZWZhbiBHdXN0YXZzb25cXG4vL1xcbnZlYzQgcGVybXV0ZV8wKHZlYzQgeCl7cmV0dXJuIG1vZCgoKHgqMzQuMCkrMS4wKSp4LCAyODkuMCk7fVxcbnZlYzQgdGF5bG9ySW52U3FydF8wKHZlYzQgcil7cmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjt9XFxudmVjNCBmYWRlXzAodmVjNCB0KSB7cmV0dXJuIHQqdCp0Kih0Kih0KjYuMC0xNS4wKSsxMC4wKTt9XFxuXFxuZmxvYXQgcGVybGluNGQodmVjNCBQKXtcXG4gIHZlYzQgUGkwID0gZmxvb3IoUCk7IC8vIEludGVnZXIgcGFydCBmb3IgaW5kZXhpbmdcXG4gIHZlYzQgUGkxID0gUGkwICsgMS4wOyAvLyBJbnRlZ2VyIHBhcnQgKyAxXFxuICBQaTAgPSBtb2QoUGkwLCAyODkuMCk7XFxuICBQaTEgPSBtb2QoUGkxLCAyODkuMCk7XFxuICB2ZWM0IFBmMCA9IGZyYWN0KFApOyAvLyBGcmFjdGlvbmFsIHBhcnQgZm9yIGludGVycG9sYXRpb25cXG4gIHZlYzQgUGYxID0gUGYwIC0gMS4wOyAvLyBGcmFjdGlvbmFsIHBhcnQgLSAxLjBcXG4gIHZlYzQgaXggPSB2ZWM0KFBpMC54LCBQaTEueCwgUGkwLngsIFBpMS54KTtcXG4gIHZlYzQgaXkgPSB2ZWM0KFBpMC55eSwgUGkxLnl5KTtcXG4gIHZlYzQgaXowID0gdmVjNChQaTAuenp6eik7XFxuICB2ZWM0IGl6MSA9IHZlYzQoUGkxLnp6enopO1xcbiAgdmVjNCBpdzAgPSB2ZWM0KFBpMC53d3d3KTtcXG4gIHZlYzQgaXcxID0gdmVjNChQaTEud3d3dyk7XFxuXFxuICB2ZWM0IGl4eSA9IHBlcm11dGVfMChwZXJtdXRlXzAoaXgpICsgaXkpO1xcbiAgdmVjNCBpeHkwID0gcGVybXV0ZV8wKGl4eSArIGl6MCk7XFxuICB2ZWM0IGl4eTEgPSBwZXJtdXRlXzAoaXh5ICsgaXoxKTtcXG4gIHZlYzQgaXh5MDAgPSBwZXJtdXRlXzAoaXh5MCArIGl3MCk7XFxuICB2ZWM0IGl4eTAxID0gcGVybXV0ZV8wKGl4eTAgKyBpdzEpO1xcbiAgdmVjNCBpeHkxMCA9IHBlcm11dGVfMChpeHkxICsgaXcwKTtcXG4gIHZlYzQgaXh5MTEgPSBwZXJtdXRlXzAoaXh5MSArIGl3MSk7XFxuXFxuICB2ZWM0IGd4MDAgPSBpeHkwMCAvIDcuMDtcXG4gIHZlYzQgZ3kwMCA9IGZsb29yKGd4MDApIC8gNy4wO1xcbiAgdmVjNCBnejAwID0gZmxvb3IoZ3kwMCkgLyA2LjA7XFxuICBneDAwID0gZnJhY3QoZ3gwMCkgLSAwLjU7XFxuICBneTAwID0gZnJhY3QoZ3kwMCkgLSAwLjU7XFxuICBnejAwID0gZnJhY3QoZ3owMCkgLSAwLjU7XFxuICB2ZWM0IGd3MDAgPSB2ZWM0KDAuNzUpIC0gYWJzKGd4MDApIC0gYWJzKGd5MDApIC0gYWJzKGd6MDApO1xcbiAgdmVjNCBzdzAwID0gc3RlcChndzAwLCB2ZWM0KDAuMCkpO1xcbiAgZ3gwMCAtPSBzdzAwICogKHN0ZXAoMC4wLCBneDAwKSAtIDAuNSk7XFxuICBneTAwIC09IHN3MDAgKiAoc3RlcCgwLjAsIGd5MDApIC0gMC41KTtcXG5cXG4gIHZlYzQgZ3gwMSA9IGl4eTAxIC8gNy4wO1xcbiAgdmVjNCBneTAxID0gZmxvb3IoZ3gwMSkgLyA3LjA7XFxuICB2ZWM0IGd6MDEgPSBmbG9vcihneTAxKSAvIDYuMDtcXG4gIGd4MDEgPSBmcmFjdChneDAxKSAtIDAuNTtcXG4gIGd5MDEgPSBmcmFjdChneTAxKSAtIDAuNTtcXG4gIGd6MDEgPSBmcmFjdChnejAxKSAtIDAuNTtcXG4gIHZlYzQgZ3cwMSA9IHZlYzQoMC43NSkgLSBhYnMoZ3gwMSkgLSBhYnMoZ3kwMSkgLSBhYnMoZ3owMSk7XFxuICB2ZWM0IHN3MDEgPSBzdGVwKGd3MDEsIHZlYzQoMC4wKSk7XFxuICBneDAxIC09IHN3MDEgKiAoc3RlcCgwLjAsIGd4MDEpIC0gMC41KTtcXG4gIGd5MDEgLT0gc3cwMSAqIChzdGVwKDAuMCwgZ3kwMSkgLSAwLjUpO1xcblxcbiAgdmVjNCBneDEwID0gaXh5MTAgLyA3LjA7XFxuICB2ZWM0IGd5MTAgPSBmbG9vcihneDEwKSAvIDcuMDtcXG4gIHZlYzQgZ3oxMCA9IGZsb29yKGd5MTApIC8gNi4wO1xcbiAgZ3gxMCA9IGZyYWN0KGd4MTApIC0gMC41O1xcbiAgZ3kxMCA9IGZyYWN0KGd5MTApIC0gMC41O1xcbiAgZ3oxMCA9IGZyYWN0KGd6MTApIC0gMC41O1xcbiAgdmVjNCBndzEwID0gdmVjNCgwLjc1KSAtIGFicyhneDEwKSAtIGFicyhneTEwKSAtIGFicyhnejEwKTtcXG4gIHZlYzQgc3cxMCA9IHN0ZXAoZ3cxMCwgdmVjNCgwLjApKTtcXG4gIGd4MTAgLT0gc3cxMCAqIChzdGVwKDAuMCwgZ3gxMCkgLSAwLjUpO1xcbiAgZ3kxMCAtPSBzdzEwICogKHN0ZXAoMC4wLCBneTEwKSAtIDAuNSk7XFxuXFxuICB2ZWM0IGd4MTEgPSBpeHkxMSAvIDcuMDtcXG4gIHZlYzQgZ3kxMSA9IGZsb29yKGd4MTEpIC8gNy4wO1xcbiAgdmVjNCBnejExID0gZmxvb3IoZ3kxMSkgLyA2LjA7XFxuICBneDExID0gZnJhY3QoZ3gxMSkgLSAwLjU7XFxuICBneTExID0gZnJhY3QoZ3kxMSkgLSAwLjU7XFxuICBnejExID0gZnJhY3QoZ3oxMSkgLSAwLjU7XFxuICB2ZWM0IGd3MTEgPSB2ZWM0KDAuNzUpIC0gYWJzKGd4MTEpIC0gYWJzKGd5MTEpIC0gYWJzKGd6MTEpO1xcbiAgdmVjNCBzdzExID0gc3RlcChndzExLCB2ZWM0KDAuMCkpO1xcbiAgZ3gxMSAtPSBzdzExICogKHN0ZXAoMC4wLCBneDExKSAtIDAuNSk7XFxuICBneTExIC09IHN3MTEgKiAoc3RlcCgwLjAsIGd5MTEpIC0gMC41KTtcXG5cXG4gIHZlYzQgZzAwMDAgPSB2ZWM0KGd4MDAueCxneTAwLngsZ3owMC54LGd3MDAueCk7XFxuICB2ZWM0IGcxMDAwID0gdmVjNChneDAwLnksZ3kwMC55LGd6MDAueSxndzAwLnkpO1xcbiAgdmVjNCBnMDEwMCA9IHZlYzQoZ3gwMC56LGd5MDAueixnejAwLnosZ3cwMC56KTtcXG4gIHZlYzQgZzExMDAgPSB2ZWM0KGd4MDAudyxneTAwLncsZ3owMC53LGd3MDAudyk7XFxuICB2ZWM0IGcwMDEwID0gdmVjNChneDEwLngsZ3kxMC54LGd6MTAueCxndzEwLngpO1xcbiAgdmVjNCBnMTAxMCA9IHZlYzQoZ3gxMC55LGd5MTAueSxnejEwLnksZ3cxMC55KTtcXG4gIHZlYzQgZzAxMTAgPSB2ZWM0KGd4MTAueixneTEwLnosZ3oxMC56LGd3MTAueik7XFxuICB2ZWM0IGcxMTEwID0gdmVjNChneDEwLncsZ3kxMC53LGd6MTAudyxndzEwLncpO1xcbiAgdmVjNCBnMDAwMSA9IHZlYzQoZ3gwMS54LGd5MDEueCxnejAxLngsZ3cwMS54KTtcXG4gIHZlYzQgZzEwMDEgPSB2ZWM0KGd4MDEueSxneTAxLnksZ3owMS55LGd3MDEueSk7XFxuICB2ZWM0IGcwMTAxID0gdmVjNChneDAxLnosZ3kwMS56LGd6MDEueixndzAxLnopO1xcbiAgdmVjNCBnMTEwMSA9IHZlYzQoZ3gwMS53LGd5MDEudyxnejAxLncsZ3cwMS53KTtcXG4gIHZlYzQgZzAwMTEgPSB2ZWM0KGd4MTEueCxneTExLngsZ3oxMS54LGd3MTEueCk7XFxuICB2ZWM0IGcxMDExID0gdmVjNChneDExLnksZ3kxMS55LGd6MTEueSxndzExLnkpO1xcbiAgdmVjNCBnMDExMSA9IHZlYzQoZ3gxMS56LGd5MTEueixnejExLnosZ3cxMS56KTtcXG4gIHZlYzQgZzExMTEgPSB2ZWM0KGd4MTEudyxneTExLncsZ3oxMS53LGd3MTEudyk7XFxuXFxuICB2ZWM0IG5vcm0wMCA9IHRheWxvckludlNxcnRfMCh2ZWM0KGRvdChnMDAwMCwgZzAwMDApLCBkb3QoZzAxMDAsIGcwMTAwKSwgZG90KGcxMDAwLCBnMTAwMCksIGRvdChnMTEwMCwgZzExMDApKSk7XFxuICBnMDAwMCAqPSBub3JtMDAueDtcXG4gIGcwMTAwICo9IG5vcm0wMC55O1xcbiAgZzEwMDAgKj0gbm9ybTAwLno7XFxuICBnMTEwMCAqPSBub3JtMDAudztcXG5cXG4gIHZlYzQgbm9ybTAxID0gdGF5bG9ySW52U3FydF8wKHZlYzQoZG90KGcwMDAxLCBnMDAwMSksIGRvdChnMDEwMSwgZzAxMDEpLCBkb3QoZzEwMDEsIGcxMDAxKSwgZG90KGcxMTAxLCBnMTEwMSkpKTtcXG4gIGcwMDAxICo9IG5vcm0wMS54O1xcbiAgZzAxMDEgKj0gbm9ybTAxLnk7XFxuICBnMTAwMSAqPSBub3JtMDEuejtcXG4gIGcxMTAxICo9IG5vcm0wMS53O1xcblxcbiAgdmVjNCBub3JtMTAgPSB0YXlsb3JJbnZTcXJ0XzAodmVjNChkb3QoZzAwMTAsIGcwMDEwKSwgZG90KGcwMTEwLCBnMDExMCksIGRvdChnMTAxMCwgZzEwMTApLCBkb3QoZzExMTAsIGcxMTEwKSkpO1xcbiAgZzAwMTAgKj0gbm9ybTEwLng7XFxuICBnMDExMCAqPSBub3JtMTAueTtcXG4gIGcxMDEwICo9IG5vcm0xMC56O1xcbiAgZzExMTAgKj0gbm9ybTEwLnc7XFxuXFxuICB2ZWM0IG5vcm0xMSA9IHRheWxvckludlNxcnRfMCh2ZWM0KGRvdChnMDAxMSwgZzAwMTEpLCBkb3QoZzAxMTEsIGcwMTExKSwgZG90KGcxMDExLCBnMTAxMSksIGRvdChnMTExMSwgZzExMTEpKSk7XFxuICBnMDAxMSAqPSBub3JtMTEueDtcXG4gIGcwMTExICo9IG5vcm0xMS55O1xcbiAgZzEwMTEgKj0gbm9ybTExLno7XFxuICBnMTExMSAqPSBub3JtMTEudztcXG5cXG4gIGZsb2F0IG4wMDAwID0gZG90KGcwMDAwLCBQZjApO1xcbiAgZmxvYXQgbjEwMDAgPSBkb3QoZzEwMDAsIHZlYzQoUGYxLngsIFBmMC55encpKTtcXG4gIGZsb2F0IG4wMTAwID0gZG90KGcwMTAwLCB2ZWM0KFBmMC54LCBQZjEueSwgUGYwLnp3KSk7XFxuICBmbG9hdCBuMTEwMCA9IGRvdChnMTEwMCwgdmVjNChQZjEueHksIFBmMC56dykpO1xcbiAgZmxvYXQgbjAwMTAgPSBkb3QoZzAwMTAsIHZlYzQoUGYwLnh5LCBQZjEueiwgUGYwLncpKTtcXG4gIGZsb2F0IG4xMDEwID0gZG90KGcxMDEwLCB2ZWM0KFBmMS54LCBQZjAueSwgUGYxLnosIFBmMC53KSk7XFxuICBmbG9hdCBuMDExMCA9IGRvdChnMDExMCwgdmVjNChQZjAueCwgUGYxLnl6LCBQZjAudykpO1xcbiAgZmxvYXQgbjExMTAgPSBkb3QoZzExMTAsIHZlYzQoUGYxLnh5eiwgUGYwLncpKTtcXG4gIGZsb2F0IG4wMDAxID0gZG90KGcwMDAxLCB2ZWM0KFBmMC54eXosIFBmMS53KSk7XFxuICBmbG9hdCBuMTAwMSA9IGRvdChnMTAwMSwgdmVjNChQZjEueCwgUGYwLnl6LCBQZjEudykpO1xcbiAgZmxvYXQgbjAxMDEgPSBkb3QoZzAxMDEsIHZlYzQoUGYwLngsIFBmMS55LCBQZjAueiwgUGYxLncpKTtcXG4gIGZsb2F0IG4xMTAxID0gZG90KGcxMTAxLCB2ZWM0KFBmMS54eSwgUGYwLnosIFBmMS53KSk7XFxuICBmbG9hdCBuMDAxMSA9IGRvdChnMDAxMSwgdmVjNChQZjAueHksIFBmMS56dykpO1xcbiAgZmxvYXQgbjEwMTEgPSBkb3QoZzEwMTEsIHZlYzQoUGYxLngsIFBmMC55LCBQZjEuencpKTtcXG4gIGZsb2F0IG4wMTExID0gZG90KGcwMTExLCB2ZWM0KFBmMC54LCBQZjEueXp3KSk7XFxuICBmbG9hdCBuMTExMSA9IGRvdChnMTExMSwgUGYxKTtcXG5cXG4gIHZlYzQgZmFkZV94eXp3ID0gZmFkZV8wKFBmMCk7XFxuICB2ZWM0IG5fMHcgPSBtaXgodmVjNChuMDAwMCwgbjEwMDAsIG4wMTAwLCBuMTEwMCksIHZlYzQobjAwMDEsIG4xMDAxLCBuMDEwMSwgbjExMDEpLCBmYWRlX3h5encudyk7XFxuICB2ZWM0IG5fMXcgPSBtaXgodmVjNChuMDAxMCwgbjEwMTAsIG4wMTEwLCBuMTExMCksIHZlYzQobjAwMTEsIG4xMDExLCBuMDExMSwgbjExMTEpLCBmYWRlX3h5encudyk7XFxuICB2ZWM0IG5fencgPSBtaXgobl8wdywgbl8xdywgZmFkZV94eXp3LnopO1xcbiAgdmVjMiBuX3l6dyA9IG1peChuX3p3Lnh5LCBuX3p3Lnp3LCBmYWRlX3h5encueSk7XFxuICBmbG9hdCBuX3h5encgPSBtaXgobl95encueCwgbl95encueSwgZmFkZV94eXp3LngpO1xcbiAgcmV0dXJuIDIuMiAqIG5feHl6dztcXG59XFxuXFxuLy9cXHRDbGFzc2ljIFBlcmxpbiAzRCBOb2lzZSBcXG4vL1xcdGJ5IFN0ZWZhbiBHdXN0YXZzb25cXG4vL1xcbnZlYzQgcGVybXV0ZV8xKHZlYzQgeCl7cmV0dXJuIG1vZCgoKHgqMzQuMCkrMS4wKSp4LCAyODkuMCk7fVxcbnZlYzQgdGF5bG9ySW52U3FydF8xKHZlYzQgcil7cmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjt9XFxudmVjMyBmYWRlXzEodmVjMyB0KSB7cmV0dXJuIHQqdCp0Kih0Kih0KjYuMC0xNS4wKSsxMC4wKTt9XFxuXFxuZmxvYXQgcGVybGluM2QodmVjMyBQKVxcbntcXG4gICAgdmVjMyBQaTAgPSBmbG9vcihQKTsgLy8gSW50ZWdlciBwYXJ0IGZvciBpbmRleGluZ1xcbiAgICB2ZWMzIFBpMSA9IFBpMCArIHZlYzMoMS4wKTsgLy8gSW50ZWdlciBwYXJ0ICsgMVxcbiAgICBQaTAgPSBtb2QoUGkwLCAyODkuMCk7XFxuICAgIFBpMSA9IG1vZChQaTEsIDI4OS4wKTtcXG4gICAgdmVjMyBQZjAgPSBmcmFjdChQKTsgLy8gRnJhY3Rpb25hbCBwYXJ0IGZvciBpbnRlcnBvbGF0aW9uXFxuICAgIHZlYzMgUGYxID0gUGYwIC0gdmVjMygxLjApOyAvLyBGcmFjdGlvbmFsIHBhcnQgLSAxLjBcXG4gICAgdmVjNCBpeCA9IHZlYzQoUGkwLngsIFBpMS54LCBQaTAueCwgUGkxLngpO1xcbiAgICB2ZWM0IGl5ID0gdmVjNChQaTAueXksIFBpMS55eSk7XFxuICAgIHZlYzQgaXowID0gUGkwLnp6eno7XFxuICAgIHZlYzQgaXoxID0gUGkxLnp6eno7XFxuXFxuICAgIHZlYzQgaXh5ID0gcGVybXV0ZV8xKHBlcm11dGVfMShpeCkgKyBpeSk7XFxuICAgIHZlYzQgaXh5MCA9IHBlcm11dGVfMShpeHkgKyBpejApO1xcbiAgICB2ZWM0IGl4eTEgPSBwZXJtdXRlXzEoaXh5ICsgaXoxKTtcXG5cXG4gICAgdmVjNCBneDAgPSBpeHkwIC8gNy4wO1xcbiAgICB2ZWM0IGd5MCA9IGZyYWN0KGZsb29yKGd4MCkgLyA3LjApIC0gMC41O1xcbiAgICBneDAgPSBmcmFjdChneDApO1xcbiAgICB2ZWM0IGd6MCA9IHZlYzQoMC41KSAtIGFicyhneDApIC0gYWJzKGd5MCk7XFxuICAgIHZlYzQgc3owID0gc3RlcChnejAsIHZlYzQoMC4wKSk7XFxuICAgIGd4MCAtPSBzejAgKiAoc3RlcCgwLjAsIGd4MCkgLSAwLjUpO1xcbiAgICBneTAgLT0gc3owICogKHN0ZXAoMC4wLCBneTApIC0gMC41KTtcXG5cXG4gICAgdmVjNCBneDEgPSBpeHkxIC8gNy4wO1xcbiAgICB2ZWM0IGd5MSA9IGZyYWN0KGZsb29yKGd4MSkgLyA3LjApIC0gMC41O1xcbiAgICBneDEgPSBmcmFjdChneDEpO1xcbiAgICB2ZWM0IGd6MSA9IHZlYzQoMC41KSAtIGFicyhneDEpIC0gYWJzKGd5MSk7XFxuICAgIHZlYzQgc3oxID0gc3RlcChnejEsIHZlYzQoMC4wKSk7XFxuICAgIGd4MSAtPSBzejEgKiAoc3RlcCgwLjAsIGd4MSkgLSAwLjUpO1xcbiAgICBneTEgLT0gc3oxICogKHN0ZXAoMC4wLCBneTEpIC0gMC41KTtcXG5cXG4gICAgdmVjMyBnMDAwID0gdmVjMyhneDAueCxneTAueCxnejAueCk7XFxuICAgIHZlYzMgZzEwMCA9IHZlYzMoZ3gwLnksZ3kwLnksZ3owLnkpO1xcbiAgICB2ZWMzIGcwMTAgPSB2ZWMzKGd4MC56LGd5MC56LGd6MC56KTtcXG4gICAgdmVjMyBnMTEwID0gdmVjMyhneDAudyxneTAudyxnejAudyk7XFxuICAgIHZlYzMgZzAwMSA9IHZlYzMoZ3gxLngsZ3kxLngsZ3oxLngpO1xcbiAgICB2ZWMzIGcxMDEgPSB2ZWMzKGd4MS55LGd5MS55LGd6MS55KTtcXG4gICAgdmVjMyBnMDExID0gdmVjMyhneDEueixneTEueixnejEueik7XFxuICAgIHZlYzMgZzExMSA9IHZlYzMoZ3gxLncsZ3kxLncsZ3oxLncpO1xcblxcbiAgICB2ZWM0IG5vcm0wID0gdGF5bG9ySW52U3FydF8xKHZlYzQoZG90KGcwMDAsIGcwMDApLCBkb3QoZzAxMCwgZzAxMCksIGRvdChnMTAwLCBnMTAwKSwgZG90KGcxMTAsIGcxMTApKSk7XFxuICAgIGcwMDAgKj0gbm9ybTAueDtcXG4gICAgZzAxMCAqPSBub3JtMC55O1xcbiAgICBnMTAwICo9IG5vcm0wLno7XFxuICAgIGcxMTAgKj0gbm9ybTAudztcXG4gICAgdmVjNCBub3JtMSA9IHRheWxvckludlNxcnRfMSh2ZWM0KGRvdChnMDAxLCBnMDAxKSwgZG90KGcwMTEsIGcwMTEpLCBkb3QoZzEwMSwgZzEwMSksIGRvdChnMTExLCBnMTExKSkpO1xcbiAgICBnMDAxICo9IG5vcm0xLng7XFxuICAgIGcwMTEgKj0gbm9ybTEueTtcXG4gICAgZzEwMSAqPSBub3JtMS56O1xcbiAgICBnMTExICo9IG5vcm0xLnc7XFxuXFxuICAgIGZsb2F0IG4wMDAgPSBkb3QoZzAwMCwgUGYwKTtcXG4gICAgZmxvYXQgbjEwMCA9IGRvdChnMTAwLCB2ZWMzKFBmMS54LCBQZjAueXopKTtcXG4gICAgZmxvYXQgbjAxMCA9IGRvdChnMDEwLCB2ZWMzKFBmMC54LCBQZjEueSwgUGYwLnopKTtcXG4gICAgZmxvYXQgbjExMCA9IGRvdChnMTEwLCB2ZWMzKFBmMS54eSwgUGYwLnopKTtcXG4gICAgZmxvYXQgbjAwMSA9IGRvdChnMDAxLCB2ZWMzKFBmMC54eSwgUGYxLnopKTtcXG4gICAgZmxvYXQgbjEwMSA9IGRvdChnMTAxLCB2ZWMzKFBmMS54LCBQZjAueSwgUGYxLnopKTtcXG4gICAgZmxvYXQgbjAxMSA9IGRvdChnMDExLCB2ZWMzKFBmMC54LCBQZjEueXopKTtcXG4gICAgZmxvYXQgbjExMSA9IGRvdChnMTExLCBQZjEpO1xcblxcbiAgICB2ZWMzIGZhZGVfeHl6ID0gZmFkZV8xKFBmMCk7XFxuICAgIHZlYzQgbl96ID0gbWl4KHZlYzQobjAwMCwgbjEwMCwgbjAxMCwgbjExMCksIHZlYzQobjAwMSwgbjEwMSwgbjAxMSwgbjExMSksIGZhZGVfeHl6LnopO1xcbiAgICB2ZWMyIG5feXogPSBtaXgobl96Lnh5LCBuX3ouencsIGZhZGVfeHl6LnkpO1xcbiAgICBmbG9hdCBuX3h5eiA9IG1peChuX3l6LngsIG5feXoueSwgZmFkZV94eXoueCk7IFxcbiAgICByZXR1cm4gMi4yICogbl94eXo7XFxufVxcblxcbnZlYzMgZ2V0RGlzcGxhY2VkUG9zaXRpb24odmVjMyBfcG9zaXRpb24pXFxue1xcbiAgICB2ZWMzIGRpc3RvcmVkUG9zaXRpb24gPSBfcG9zaXRpb247XFxuICAgIGRpc3RvcmVkUG9zaXRpb24gKz0gcGVybGluNGQodmVjNChkaXN0b3JlZFBvc2l0aW9uICogdURpc3RvcnRpb25GcmVxdWVuY3kgKyB1T2Zmc2V0LCB1VGltZSkpICogdURpc3RvcnRpb25TdHJlbmd0aDtcXG5cXG4gICAgZmxvYXQgcGVybGluU3RyZW5ndGggPSBwZXJsaW40ZCh2ZWM0KGRpc3RvcmVkUG9zaXRpb24gKiB1RGlzcGxhY2VtZW50RnJlcXVlbmN5ICsgdU9mZnNldCwgdVRpbWUpKTtcXG4gICAgXFxuICAgIHZlYzMgZGlzcGxhY2VkUG9zaXRpb24gPSBfcG9zaXRpb247XFxuICAgIGRpc3BsYWNlZFBvc2l0aW9uICs9IG5vcm1hbGl6ZShfcG9zaXRpb24pICogcGVybGluU3RyZW5ndGggKiB1RGlzcGxhY2VtZW50U3RyZW5ndGg7XFxuXFxuICAgIHJldHVybiBkaXNwbGFjZWRQb3NpdGlvbjtcXG59XFxuXFxudm9pZCBtYWluKClcXG57XFxuICAgIC8vIFBvc2l0aW9uXFxuICAgIHZlYzMgZGlzcGxhY2VkUG9zaXRpb24gPSBnZXREaXNwbGFjZWRQb3NpdGlvbihwb3NpdGlvbik7XFxuICAgIHZlYzQgdmlld1Bvc2l0aW9uID0gdmlld01hdHJpeCAqIHZlYzQoZGlzcGxhY2VkUG9zaXRpb24sIDEuMCk7XFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIHZpZXdQb3NpdGlvbjtcXG5cXG4gICAgLy8gQmkgdGFuZ2VudHNcXG4gICAgZmxvYXQgZGlzdGFuY2VBID0gKE1fUEkgKiAyLjApIC8gdVN1YmRpdmlzaW9uLng7XFxuICAgIGZsb2F0IGRpc3RhbmNlQiA9IE1fUEkgLyB1U3ViZGl2aXNpb24ueDtcXG5cXG4gICAgdmVjMyBiaVRhbmdlbnQgPSBjcm9zcyhub3JtYWwsIHRhbmdlbnQueHl6KTtcXG5cXG4gICAgdmVjMyBwb3NpdGlvbkEgPSBwb3NpdGlvbiArIHRhbmdlbnQueHl6ICogZGlzdGFuY2VBO1xcbiAgICB2ZWMzIGRpc3BsYWNlZFBvc2l0aW9uQSA9IGdldERpc3BsYWNlZFBvc2l0aW9uKHBvc2l0aW9uQSk7XFxuXFxuICAgIHZlYzMgcG9zaXRpb25CID0gcG9zaXRpb24gKyBiaVRhbmdlbnQueHl6ICogZGlzdGFuY2VCO1xcbiAgICB2ZWMzIGRpc3BsYWNlZFBvc2l0aW9uQiA9IGdldERpc3BsYWNlZFBvc2l0aW9uKHBvc2l0aW9uQik7XFxuXFxuICAgIHZlYzMgY29tcHV0ZWROb3JtYWwgPSBjcm9zcyhkaXNwbGFjZWRQb3NpdGlvbkEgLSBkaXNwbGFjZWRQb3NpdGlvbi54eXosIGRpc3BsYWNlZFBvc2l0aW9uQiAtIGRpc3BsYWNlZFBvc2l0aW9uLnh5eik7XFxuICAgIGNvbXB1dGVkTm9ybWFsID0gbm9ybWFsaXplKGNvbXB1dGVkTm9ybWFsKTtcXG5cXG4gICAgLy8gRnJlc25lbFxcbiAgICB2ZWMzIHZpZXdEaXJlY3Rpb24gPSBub3JtYWxpemUoZGlzcGxhY2VkUG9zaXRpb24ueHl6IC0gY2FtZXJhUG9zaXRpb24pO1xcbiAgICBmbG9hdCBmcmVzbmVsID0gdUZyZXNuZWxPZmZzZXQgKyAoMS4wICsgZG90KHZpZXdEaXJlY3Rpb24sIGNvbXB1dGVkTm9ybWFsKSkgKiB1RnJlc25lbE11bHRpcGxpZXI7XFxuICAgIGZyZXNuZWwgPSBwb3cobWF4KDAuMCwgZnJlc25lbCksIHVGcmVzbmVsUG93ZXIpO1xcblxcbiAgICAvLyBDb2xvclxcbiAgICBmbG9hdCBsaWdodEFJbnRlbnNpdHkgPSBtYXgoMC4wLCAtIGRvdChjb21wdXRlZE5vcm1hbC54eXosIG5vcm1hbGl6ZSgtIHVMaWdodEFQb3NpdGlvbikpKSAqIHVMaWdodEFJbnRlbnNpdHk7XFxuICAgIGZsb2F0IGxpZ2h0QkludGVuc2l0eSA9IG1heCgwLjAsIC0gZG90KGNvbXB1dGVkTm9ybWFsLnh5eiwgbm9ybWFsaXplKC0gdUxpZ2h0QlBvc2l0aW9uKSkpICogdUxpZ2h0QkludGVuc2l0eTtcXG5cXG4gICAgdmVjMyBjb2xvciA9IHZlYzMoMC4wKTtcXG4gICAgY29sb3IgPSBtaXgoY29sb3IsIHVMaWdodEFDb2xvciwgbGlnaHRBSW50ZW5zaXR5ICogZnJlc25lbCk7XFxuICAgIGNvbG9yID0gbWl4KGNvbG9yLCB1TGlnaHRCQ29sb3IsIGxpZ2h0QkludGVuc2l0eSAqIGZyZXNuZWwpO1xcbiAgICBjb2xvciA9IG1peChjb2xvciwgdmVjMygxLjApLCBjbGFtcChwb3cobWF4KDAuMCwgZnJlc25lbCAtIDAuOCksIDMuMCksIDAuMCwgMS4wKSk7XFxuXFxuICAgIC8vIFZhcnlpbmdcXG4gICAgdkNvbG9yID0gY29sb3I7XFxufVwiOyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBjb25zdCBjbU9iaiA9IHtcclxuICAgIGNhbWVyYSA6IG51bGwsXHJcbiAgICBpbml0Q2FtZXJhIDogKCkgPT4ge1xyXG4gICAgICAgIGNtT2JqLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgKHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0KSwwLjEsMTAwMCk7XHJcbiAgICAgICAgY21PYmouY2FtZXJhLnBvc2l0aW9uLnNldCggMCwgMC4yICwgMC44ICk7XHJcbiAgICAgICAgY21PYmouY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygtMC44LDAsMCkpO1xyXG4gICAgfVxyXG59O1xyXG5jbU9iai5pbml0Q2FtZXJhKCk7XHJcbiIsImltcG9ydCB7UG9pbnRlckxvY2tDb250cm9sc30gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL1BvaW50ZXJMb2NrQ29udHJvbHMnXHJcbmltcG9ydCB7IGNtT2JqIH0gZnJvbSAnLi9DYW1lcmEuanMnO1xyXG5pbXBvcnQgeyByZE9iaiB9IGZyb20gJy4vUmVuZGVyZXIuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGN0cmxPYmogPSB7XHJcbiAgICBjb250cm9sczpudWxsLFxyXG4gICAgaW5pdENvbnRyb2xzIDogKCk9PntcclxuICAgICAgICBjdHJsT2JqLmNvbnRyb2xzID0gbmV3IFBvaW50ZXJMb2NrQ29udHJvbHMoY21PYmouY2FtZXJhLHJkT2JqLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgICAgIGN0cmxPYmouY29udHJvbHMubW92ZW1lbnRTcGVlZCA9IDE1MDtcclxuICAgICAgICBjdHJsT2JqLmNvbnRyb2xzLmxvb2tTcGVlZCA9IDAuMTtcclxuXHJcbiAgICAgICAgLypkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2luIGV2ZW50IGxpc3RlbmVyIGUgPScsZS5kZWx0YVkgKVxyXG4gICAgICAgICAgICBpZiAoZS5kZWx0YVkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjdHJsT2JqLmNvbnRyb2xzLm1vdmVGb3J3YXJkKDUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZS5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjdHJsT2JqLmNvbnRyb2xzLm1vdmVGb3J3YXJkKC01KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09IFwid1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjdHJsT2JqLmNvbnRyb2xzLm1vdmVGb3J3YXJkKDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJzXCIpIHtcclxuICAgICAgICAgICAgICAgIGN0cmxPYmouY29udHJvbHMubW92ZUZvcndhcmQoLTEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pOyovXHJcbiAgICB9LFxyXG59O1xyXG5jdHJsT2JqLmluaXRDb250cm9scygpOyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcblxyXG5jb25zdCBwYXJhbXMgPSB7XHJcbiAgY291bnQ6IDIwMDAwMCxcclxuICBzaXplOiAwLjAxLFxyXG4gIHJhZGl1czogMTAsXHJcbiAgYnJhbmNoZXM6IDQsXHJcbiAgc3BpbjogMC41LFxyXG4gIHJhbmRvbUFtcGxpdHVkZTogMSxcclxuICBpbnNpZGVDb2xvcjogXCIjZmY2MDMwXCIsXHJcbiAgb3V0c2lkZUNvbG9yOiBcIiMxYjM5ODRcIlxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmFuZG9tU2lnbigpIHtcclxuICBsZXQgc2lnbiA9IE1hdGgucmFuZG9tKCkgLSAwLjU7XHJcbiAgaWYgKHNpZ24gPj0gMCkgeyByZXR1cm4gc2lnbiA9IDEgfVxyXG4gIGVsc2UgeyByZXR1cm4gc2lnbiA9IC0xIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlR2FsYXh5KCkge1xyXG5cclxuICBsZXQgZ2VvbWV0cnkgPSBudWxsO1xyXG4gIGxldCBtYXRlcmlhbCA9IG51bGw7XHJcbiAgbGV0IHBvaW50cyA9IG51bGw7XHJcblxyXG4gIGlmIChwb2ludHMpIHtcclxuICAgIHNjZW5lLnJlbW92ZShwb2ludHMpO1xyXG4gICAgbWF0ZXJpYWwuZGlzcG9zZSgpO1xyXG4gICAgZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcclxuICB2YXIgdGV4dHVyZSA9IGxvYWRlci5sb2FkKCdkaXNjZy5wbmcnKTtcclxuXHJcblxyXG4gIC8vIFNldHRpbmcgdXAgZmV3IHZhcmlhYmxlcyBmb3IgdGhlIG1haW4gbG9vcFxyXG4gIGNvbnN0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKClcclxuICBnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xyXG4gIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkocGFyYW1zLmNvdW50ICogMyk7XHJcbiAgY29uc3QgY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheShwYXJhbXMuY291bnQgKiAzKTtcclxuXHJcbiAgY29uc3QgY29sb3JJbnNpZGUgPSBuZXcgVEhSRUUuQ29sb3IocGFyYW1zLmluc2lkZUNvbG9yKTtcclxuICBjb25zdCBjb2xvck91dHNpZGUgPSBuZXcgVEhSRUUuQ29sb3IocGFyYW1zLm91dHNpZGVDb2xvcik7XHJcblxyXG4gIC8vIEdhbGF4eSBwb2ludCBpbnN0YW5jaWF0aW9uIGFuZCBwb3NpdGlvbmluZ1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1zLmNvdW50OyBpKyspIHtcclxuICAgIGNvbnN0IGkzID0gaSAqIDM7XHJcbiAgICAvL1NlbGVjdCBhIHJhbmRvbSByYWRpdXMgZm9yIHBvaW50IGlcclxuICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogcGFyYW1zLnJhZGl1cztcclxuXHJcbiAgICAvL2dpdmUgY29sb3IgdG8gdGhlIHBvaW50IGkgZnVuY3Rpb24gb2YgcmFkaXVzXHJcbiAgICBjb25zdCBtaXhlZENvbG9yID0gY29sb3JJbnNpZGUuY2xvbmUoKTtcclxuICAgIG1peGVkQ29sb3IubGVycChjb2xvck91dHNpZGUsIHIgLyBwYXJhbXMucmFkaXVzKTtcclxuICAgIGNvbG9yc1tpM10gPSBtaXhlZENvbG9yLnI7XHJcbiAgICBjb2xvcnNbaTMgKyAxXSA9IG1peGVkQ29sb3IuZztcclxuICAgIGNvbG9yc1tpMyArIDJdID0gbWl4ZWRDb2xvci5iO1xyXG5cclxuICAgIC8vcmFuZG9taXphdGlvbiBvZiBYIFkgWiBjb29yZGluYXRlcyB3aXRoIGFuIGFtcGxpdHVkZVxyXG4gICAgbGV0IHNpZ24gPSByYW5kb21TaWduKCk7XHJcbiAgICBjb25zdCByYW5kb21YID0gc2lnbiAqIE1hdGgucmFuZG9tKCkgKiBwYXJhbXMucmFuZG9tQW1wbGl0dWRlO1xyXG5cclxuICAgIHNpZ24gPSByYW5kb21TaWduKCk7XHJcbiAgICBjb25zdCByYW5kb21ZID0gc2lnbiAqIE1hdGgucmFuZG9tKCkgKiBwYXJhbXMucmFuZG9tQW1wbGl0dWRlO1xyXG5cclxuICAgIHNpZ24gPSByYW5kb21TaWduKCk7XHJcbiAgICBjb25zdCByYW5kb21aID0gc2lnbiAqIE1hdGgucmFuZG9tKCkgKiBwYXJhbXMucmFuZG9tQW1wbGl0dWRlO1xyXG5cclxuICAgIC8vU2VsZWN0aW5nIHdpY2ggYnJhbmNoZXMgb2YgdGhlIGdhbGF4aWUgdGhlIHBvaW50IHNob3VsZCBiZVxyXG4gICAgY29uc3QgYnJhbmNoSW5kZXggPSBpICUgcGFyYW1zLmJyYW5jaGVzO1xyXG4gICAgY29uc3QgYnJhbmNoQW5nbGUgPSBicmFuY2hJbmRleCAvIHBhcmFtcy5icmFuY2hlcztcclxuICAgIGNvbnN0IHJvdGF0aW9uID0gYnJhbmNoQW5nbGUgKiBNYXRoLlBJICogMjtcclxuICAgIGNvbnN0IHNwaW5BbmdsZSA9IHIgKiBwYXJhbXMuc3BpbjtcclxuXHJcbiAgICAvL2NvbXB1dGluZyB0aGUgdmFsdWUgWCBZIFogb2YgdGhlIGdpdmVuIHBvaW50IHRob3NlIMOpcXVhdGlvbiB3aWxsIG1vZGlmeSB0aGUgc2hhcGUgb2Ygb3VyIGdhbGF4eVxyXG4gICAgLy8gWCBhbmQgWiBzaG91bGQgYmUgb24gYSBsb2dhcml0aG1pcXVlIHNwaXJhbGUgd2hlcmUgciA9IGEqZXhwKCBrICogcHN5KVxyXG4gICAgLy9zbyBiYXNpY2FseSB3ZSBnZXQgdGhvc2UgZXF1YXRpb25zXHJcbiAgICBjb25zdCBhID0gMiA7XHJcbiAgICBjb25zdCBwc3kgPSByb3RhdGlvbiArIHNwaW5BbmdsZTtcclxuICAgIGNvbnN0IGsgPSAwLjAwNTtcclxuICAgIGNvbnN0IGxpbmVhclJhbmRvbSA9IDFcclxuICAgIHBvc2l0aW9uc1tpM10gPSByICogKCBhICogTWF0aC5leHAoaypwc3kpKk1hdGguY29zKHBzeSkgKyByYW5kb21YICogbGluZWFyUmFuZG9tKTtcclxuICAgIHBvc2l0aW9uc1tpMyArIDJdID0gciAqICggYSAqIE1hdGguZXhwKGsqcHN5KSpNYXRoLnNpbihwc3kpICsgcmFuZG9tWiAqIGxpbmVhclJhbmRvbSk7XHJcblxyXG4gICAgLy9ZIGF4aXMgc2hvdWxkIGJlIG9uIGEgZmxhdCBnYXVzc2lhbiBzaGFwZSBlcXVhdGlvbiB5PSBBICogKDEgLyAodGhldGEgKiBNYXRoLnNxcnQoMiAqIE1hdGguUEkpKSkqZXhwKCAtKHIqcikvKHRoZXRhKnRoZXRhKSlcclxuICAgIGNvbnN0IHRoZXRhID0gNTtcclxuICAgIGNvbnN0IEEgPSAzMDsgXHJcbiAgICBjb25zdCBleHBvID0gKDEgLyAodGhldGEgKiBNYXRoLnNxcnQoMiAqIE1hdGguUEkpKSkgKiBNYXRoLmV4cCgtMC41ICogKHIgKiByKSAvICh0aGV0YSAqIHRoZXRhKSlcclxuICAgIHNpZ24gPSByYW5kb21TaWduKCk7XHJcbiAgICBwb3NpdGlvbnNbaTMgKyAxXSA9IHNpZ24gKiBBICogZXhwbyAqIHJhbmRvbVkgKyByYW5kb21ZO1xyXG4gIH1cclxuXHJcbiAgLy8gQnJhbmNoZXNcclxuICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgMykpO1xyXG4gIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3JzLCAzKSk7XHJcblxyXG5cclxuXHJcbiAgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuUG9pbnRzTWF0ZXJpYWwoe1xyXG4gICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICBjb2xvcjogXCIjNjM1OWVlXCIsXHJcbiAgICBtYXA6IHRleHR1cmUsXHJcbiAgICBzaXplOiBwYXJhbXMuc2l6ZSxcclxuICAgIHNpemVBdHRlbnVhdGlvbjogdHJ1ZSxcclxuICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxyXG4gICAgYmxlbmRpbmc6IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICB2ZXJ0ZXhDb2xvcnM6IHRydWVcclxuICB9KTtcclxuICBwb2ludHMgPSBuZXcgVEhSRUUuUG9pbnRzKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgZ3JvdXAuYWRkKHBvaW50cyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGVHYWxheHlcIik7XHJcbiAgcmV0dXJuIGdyb3VwO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdhbGF4eVJlbmRlcigpe1xyXG4gIFxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG4vL2ltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4vRXhwZXJpZW5jZSdcclxuaW1wb3J0IHZlcnRleFNoYWRlciBmcm9tICcuLi9zaGFkZXJzL3NwaGVyZS92ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdtZW50U2hhZGVyIGZyb20gJy4uL3NoYWRlcnMvc3BoZXJlL2ZyYWdtZW50Lmdsc2wnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZXRcclxue1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5leHBlcmllbmNlID0gbmV3IEV4cGVyaWVuY2UoKVxyXG4gICAgICAgIHRoaXMuZGVidWcgPSB0aGlzLmV4cGVyaWVuY2UuZGVidWdcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcclxuICAgICAgICB0aGlzLnRpbWUgPSBuZXcgVGltZSgpXHJcbiAgICAgICAgLy90aGlzLm1pY3JvcGhvbmUgPSB0aGlzLmV4cGVyaWVuY2UubWljcm9waG9uZVxyXG5cclxuICAgICAgICB0aGlzLnRpbWVGcmVxdWVuY3kgPSAwLjAwMDNcclxuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMFxyXG5cclxuICAgICAgICBpZih0aGlzLmRlYnVnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0ZvbGRlciA9IHRoaXMuZGVidWcuYWRkRm9sZGVyKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnc3BoZXJlJyxcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlYnVnRm9sZGVyLmFkZElucHV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICd0aW1lRnJlcXVlbmN5JyxcclxuICAgICAgICAgICAgICAgIHsgbWluOiAwLCBtYXg6IDAuMDAxLCBzdGVwOiAwLjAwMDAwMSB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRWYXJpYXRpb25zKClcclxuICAgICAgICB0aGlzLnNldEdlb21ldHJ5KClcclxuICAgICAgICB0aGlzLnNldExpZ2h0cygpXHJcbiAgICAgICAgdGhpcy5zZXRPZmZzZXQoKVxyXG4gICAgICAgIHRoaXMuc2V0TWF0ZXJpYWwoKVxyXG4gICAgICAgIHRoaXMuc2V0TWVzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFyaWF0aW9ucygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zID0ge31cclxuXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLnZvbHVtZSA9IHt9XHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLnZvbHVtZS50YXJnZXQgPSAwXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLnZvbHVtZS5jdXJyZW50ID0gMFxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy52b2x1bWUudXBFYXNpbmcgPSAwLjAzXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLnZvbHVtZS5kb3duRWFzaW5nID0gMC4wMDJcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMudm9sdW1lLmdldFZhbHVlID0gKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxldmVsMCA9IHRoaXMubWljcm9waG9uZS5sZXZlbHNbMF0gfHwgMFxyXG4gICAgICAgICAgICBjb25zdCBsZXZlbDEgPSB0aGlzLm1pY3JvcGhvbmUubGV2ZWxzWzFdIHx8IDBcclxuICAgICAgICAgICAgY29uc3QgbGV2ZWwyID0gdGhpcy5taWNyb3Bob25lLmxldmVsc1syXSB8fCAwXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgobGV2ZWwwLCBsZXZlbDEsIGxldmVsMikgKiAwLjNcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLnZvbHVtZS5nZXREZWZhdWx0ID0gKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjE1MlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLmxvd0xldmVsID0ge31cclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMubG93TGV2ZWwudGFyZ2V0ID0gMFxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy5sb3dMZXZlbC5jdXJyZW50ID0gMFxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy5sb3dMZXZlbC51cEVhc2luZyA9IDAuMDA1XHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLmxvd0xldmVsLmRvd25FYXNpbmcgPSAwLjAwMlxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy5sb3dMZXZlbC5nZXRWYWx1ZSA9ICgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLm1pY3JvcGhvbmUubGV2ZWxzWzBdIHx8IDBcclxuICAgICAgICAgICAgdmFsdWUgKj0gMC4wMDNcclxuICAgICAgICAgICAgdmFsdWUgKz0gMC4wMDAxXHJcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5tYXgoMCwgdmFsdWUpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLmxvd0xldmVsLmdldERlZmF1bHQgPSAoKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAuMDAwM1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMubWVkaXVtTGV2ZWwgPSB7fVxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy5tZWRpdW1MZXZlbC50YXJnZXQgPSAwXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLm1lZGl1bUxldmVsLmN1cnJlbnQgPSAwXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLm1lZGl1bUxldmVsLnVwRWFzaW5nID0gMC4wMDhcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMubWVkaXVtTGV2ZWwuZG93bkVhc2luZyA9IDAuMDA0XHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLm1lZGl1bUxldmVsLmdldFZhbHVlID0gKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMubWljcm9waG9uZS5sZXZlbHNbMV0gfHwgMFxyXG4gICAgICAgICAgICB2YWx1ZSAqPSAyXHJcbiAgICAgICAgICAgIHZhbHVlICs9IDMuNTg3XHJcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5tYXgoMy41ODcsIHZhbHVlKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy5tZWRpdW1MZXZlbC5nZXREZWZhdWx0ID0gKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAzLjU4N1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMuaGlnaExldmVsID0ge31cclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMuaGlnaExldmVsLnRhcmdldCA9IDBcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMuaGlnaExldmVsLmN1cnJlbnQgPSAwXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLmhpZ2hMZXZlbC51cEVhc2luZyA9IDAuMDJcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMuaGlnaExldmVsLmRvd25FYXNpbmcgPSAwLjAwMVxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy5oaWdoTGV2ZWwuZ2V0VmFsdWUgPSAoKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5taWNyb3Bob25lLmxldmVsc1syXSB8fCAwXHJcbiAgICAgICAgICAgIHZhbHVlICo9IDVcclxuICAgICAgICAgICAgdmFsdWUgKz0gMC41XHJcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5tYXgoMC41LCB2YWx1ZSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMuaGlnaExldmVsLmdldERlZmF1bHQgPSAoKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNjVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGlnaHRzKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpZ2h0cyA9IHt9XHJcblxyXG4gICAgICAgIC8vIExpZ2h0IEFcclxuICAgICAgICB0aGlzLmxpZ2h0cy5hID0ge31cclxuXHJcbiAgICAgICAgdGhpcy5saWdodHMuYS5pbnRlbnNpdHkgPSAxLjg1XHJcblxyXG4gICAgICAgIHRoaXMubGlnaHRzLmEuY29sb3IgPSB7fVxyXG4gICAgICAgIHRoaXMubGlnaHRzLmEuY29sb3IudmFsdWUgPSAnI2ZmM2UwMCdcclxuICAgICAgICB0aGlzLmxpZ2h0cy5hLmNvbG9yLmluc3RhbmNlID0gbmV3IFRIUkVFLkNvbG9yKHRoaXMubGlnaHRzLmEuY29sb3IudmFsdWUpXHJcblxyXG4gICAgICAgIHRoaXMubGlnaHRzLmEuc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpLy8xLCAwLjYxNSwgMi4wNDkpXHJcblxyXG4gICAgICAgIC8vIExpZ2h0IEJcclxuICAgICAgICB0aGlzLmxpZ2h0cy5iID0ge31cclxuXHJcbiAgICAgICAgdGhpcy5saWdodHMuYi5pbnRlbnNpdHkgPSAxLjRcclxuXHJcbiAgICAgICAgdGhpcy5saWdodHMuYi5jb2xvciA9IHt9XHJcbiAgICAgICAgdGhpcy5saWdodHMuYi5jb2xvci52YWx1ZSA9ICcjMDA2M2ZmJ1xyXG4gICAgICAgIHRoaXMubGlnaHRzLmIuY29sb3IuaW5zdGFuY2UgPSBuZXcgVEhSRUUuQ29sb3IodGhpcy5saWdodHMuYi5jb2xvci52YWx1ZSlcclxuXHJcbiAgICAgICAgdGhpcy5saWdodHMuYi5zcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCkvLzEsIDIuNTYxLCAtIDEuODQ0KVxyXG5cclxuICAgICAgICAvLyBEZWJ1Z1xyXG4gICAgICAgIGlmKHRoaXMuZGVidWcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgX2xpZ2h0TmFtZSBpbiB0aGlzLmxpZ2h0cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlnaHQgPSB0aGlzLmxpZ2h0c1tfbGlnaHROYW1lXVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWJ1Z0ZvbGRlciA9IHRoaXMuZGVidWdGb2xkZXIuYWRkRm9sZGVyKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogX2xpZ2h0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBkZWJ1Z0ZvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdmlldzogJ2NvbG9yJywgbGFiZWw6ICdjb2xvcicgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAub24oJ2NoYW5nZScsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodC5jb2xvci5pbnN0YW5jZS5zZXQobGlnaHQuY29sb3IudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBkZWJ1Z0ZvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlbnNpdHknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMCwgbWF4OiAxMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbYHVMaWdodCR7X2xpZ2h0TmFtZS50b1VwcGVyQ2FzZSgpfUludGVuc2l0eWBdLnZhbHVlID0gbGlnaHQuaW50ZW5zaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBkZWJ1Z0ZvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQuc3BoZXJpY2FsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncGhpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3BoaScsIG1pbjogMCwgbWF4OiBNYXRoLlBJLCBzdGVwOiAwLjAwMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbYHVMaWdodCR7X2xpZ2h0TmFtZS50b1VwcGVyQ2FzZSgpfVBvc2l0aW9uYF0udmFsdWUuc2V0RnJvbVNwaGVyaWNhbChsaWdodC5zcGhlcmljYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBkZWJ1Z0ZvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQuc3BoZXJpY2FsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGhldGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAndGhldGEnLCBtaW46IC0gTWF0aC5QSSwgbWF4OiBNYXRoLlBJLCBzdGVwOiAwLjAwMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudUxpZ2h0QVBvc2l0aW9uLnZhbHVlLnNldEZyb21TcGhlcmljYWwobGlnaHQuc3BoZXJpY2FsKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T2Zmc2V0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHt9XHJcbiAgICAgICAgdGhpcy5vZmZzZXQuc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgxLCBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSwgTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyKVxyXG4gICAgICAgIHRoaXMub2Zmc2V0LmRpcmVjdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKClcclxuICAgICAgICB0aGlzLm9mZnNldC5kaXJlY3Rpb24uc2V0RnJvbVNwaGVyaWNhbCh0aGlzLm9mZnNldC5zcGhlcmljYWwpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2VvbWV0cnkoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMSwgMjAsIDIwKVxyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuY29tcHV0ZVRhbmdlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBzZXRNYXRlcmlhbCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIHVuaWZvcm1zOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1TGlnaHRBQ29sb3I6IHsgdmFsdWU6IHRoaXMubGlnaHRzLmEuY29sb3IuaW5zdGFuY2UgfSxcclxuICAgICAgICAgICAgICAgIHVMaWdodEFQb3NpdGlvbjogeyB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMCkgfSxcclxuICAgICAgICAgICAgICAgIHVMaWdodEFJbnRlbnNpdHk6IHsgdmFsdWU6IHRoaXMubGlnaHRzLmEuaW50ZW5zaXR5IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgdUxpZ2h0QkNvbG9yOiB7IHZhbHVlOiB0aGlzLmxpZ2h0cy5iLmNvbG9yLmluc3RhbmNlIH0sXHJcbiAgICAgICAgICAgICAgICB1TGlnaHRCUG9zaXRpb246IHsgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IzKC0gMSwgLSAxLCAwKSB9LFxyXG4gICAgICAgICAgICAgICAgdUxpZ2h0QkludGVuc2l0eTogeyB2YWx1ZTogdGhpcy5saWdodHMuYi5pbnRlbnNpdHkgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB1U3ViZGl2aXNpb246IHsgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKHRoaXMuZ2VvbWV0cnkucGFyYW1ldGVycy53aWR0aFNlZ21lbnRzLCB0aGlzLmdlb21ldHJ5LnBhcmFtZXRlcnMuaGVpZ2h0U2VnbWVudHMpIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgdU9mZnNldDogeyB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjMoKSB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHVEaXN0b3J0aW9uRnJlcXVlbmN5OiB7IHZhbHVlOiAxLjUgfSxcclxuICAgICAgICAgICAgICAgIHVEaXN0b3J0aW9uU3RyZW5ndGg6IHsgdmFsdWU6IDAuNjUgfSxcclxuICAgICAgICAgICAgICAgIHVEaXNwbGFjZW1lbnRGcmVxdWVuY3k6IHsgdmFsdWU6IDIuMTIwIH0sXHJcbiAgICAgICAgICAgICAgICB1RGlzcGxhY2VtZW50U3RyZW5ndGg6IHsgdmFsdWU6IDAuMTUyIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgdUZyZXNuZWxPZmZzZXQ6IHsgdmFsdWU6IC0xLjYwOSB9LFxyXG4gICAgICAgICAgICAgICAgdUZyZXNuZWxNdWx0aXBsaWVyOiB7IHZhbHVlOiAzLjU4NyB9LFxyXG4gICAgICAgICAgICAgICAgdUZyZXNuZWxQb3dlcjogeyB2YWx1ZTogMS43OTMgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZmluZXM6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFVTRV9UQU5HRU5UOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHZlcnRleFNoYWRlcixcclxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50U2hhZGVyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51TGlnaHRBUG9zaXRpb24udmFsdWUuc2V0RnJvbVNwaGVyaWNhbCh0aGlzLmxpZ2h0cy5hLnNwaGVyaWNhbClcclxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVMaWdodEJQb3NpdGlvbi52YWx1ZS5zZXRGcm9tU3BoZXJpY2FsKHRoaXMubGlnaHRzLmIuc3BoZXJpY2FsKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGVidWcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnRm9sZGVyLmFkZElucHV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51RGlzdG9ydGlvbkZyZXF1ZW5jeSxcclxuICAgICAgICAgICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAndURpc3RvcnRpb25GcmVxdWVuY3knLCBtaW46IDAsIG1heDogMTAsIHN0ZXA6IDAuMDAxIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0ZvbGRlci5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudURpc3RvcnRpb25TdHJlbmd0aCxcclxuICAgICAgICAgICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAndURpc3RvcnRpb25TdHJlbmd0aCcsIG1pbjogMCwgbWF4OiAxMCwgc3RlcDogMC4wMDEgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRlYnVnRm9sZGVyLmFkZElucHV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51RGlzcGxhY2VtZW50RnJlcXVlbmN5LFxyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICd1RGlzcGxhY2VtZW50RnJlcXVlbmN5JywgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDAuMDAxIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0ZvbGRlci5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudURpc3BsYWNlbWVudFN0cmVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICd1RGlzcGxhY2VtZW50U3RyZW5ndGgnLCBtaW46IDAsIG1heDogMSwgc3RlcDogMC4wMDEgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRlYnVnRm9sZGVyLmFkZElucHV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51RnJlc25lbE9mZnNldCxcclxuICAgICAgICAgICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAndUZyZXNuZWxPZmZzZXQnLCBtaW46IC0gMiwgbWF4OiAyLCBzdGVwOiAwLjAwMSB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdGb2xkZXIuYWRkSW5wdXQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVGcmVzbmVsTXVsdGlwbGllcixcclxuICAgICAgICAgICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAndUZyZXNuZWxNdWx0aXBsaWVyJywgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDAuMDAxIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0ZvbGRlci5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudUZyZXNuZWxQb3dlcixcclxuICAgICAgICAgICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAndUZyZXNuZWxQb3dlcicsIG1pbjogMCwgbWF4OiA1LCBzdGVwOiAwLjAwMSB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWVzaCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbClcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLm1lc2gpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKClcclxuICAgIHtcclxuICAgICAgICAvLyBVcGRhdGUgdmFyaWF0aW9uc1xyXG4gICAgICAgIGZvcihsZXQgX3ZhcmlhdGlvbk5hbWUgaW4gdGhpcy52YXJpYXRpb25zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgdmFyaWF0aW9uID0gdGhpcy52YXJpYXRpb25zW192YXJpYXRpb25OYW1lXVxyXG4gICAgICAgICAgICB2YXJpYXRpb24udGFyZ2V0ID0gdGhpcy5taWNyb3Bob25lLnJlYWR5ID8gdmFyaWF0aW9uLmdldFZhbHVlKCkgOiB2YXJpYXRpb24uZ2V0RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBlYXNpbmcgPSB2YXJpYXRpb24udGFyZ2V0ID4gdmFyaWF0aW9uLmN1cnJlbnQgPyB2YXJpYXRpb24udXBFYXNpbmcgOiB2YXJpYXRpb24uZG93bkVhc2luZ1xyXG4gICAgICAgICAgICB2YXJpYXRpb24uY3VycmVudCArPSAodmFyaWF0aW9uLnRhcmdldCAtIHZhcmlhdGlvbi5jdXJyZW50KSAqIGVhc2luZyAqIHRoaXMudGltZS5kZWx0YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGltZVxyXG4gICAgICAgIHRoaXMudGltZUZyZXF1ZW5jeSA9IHRoaXMudmFyaWF0aW9ucy5sb3dMZXZlbC5jdXJyZW50XHJcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHRoaXMudGltZS5kZWx0YSAqIHRoaXMudGltZUZyZXF1ZW5jeVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgbWF0ZXJpYWxcclxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVEaXNwbGFjZW1lbnRTdHJlbmd0aC52YWx1ZSA9IHRoaXMudmFyaWF0aW9ucy52b2x1bWUuY3VycmVudFxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudURpc3RvcnRpb25TdHJlbmd0aC52YWx1ZSA9IHRoaXMudmFyaWF0aW9ucy5oaWdoTGV2ZWwuY3VycmVudFxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudUZyZXNuZWxNdWx0aXBsaWVyLnZhbHVlID0gdGhpcy52YXJpYXRpb25zLm1lZGl1bUxldmVsLmN1cnJlbnRcclxuXHJcbiAgICAgICAgLy8gT2Zmc2V0XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0VGltZSA9IHRoaXMuZWxhcHNlZFRpbWUgKiAwLjNcclxuICAgICAgICB0aGlzLm9mZnNldC5zcGhlcmljYWwucGhpID0gKChNYXRoLnNpbihvZmZzZXRUaW1lICogMC4wMDEpICogTWF0aC5zaW4ob2Zmc2V0VGltZSAqIDAuMDAzMjEpKSAqIDAuNSArIDAuNSkgKiBNYXRoLlBJXHJcbiAgICAgICAgdGhpcy5vZmZzZXQuc3BoZXJpY2FsLnRoZXRhID0gKChNYXRoLnNpbihvZmZzZXRUaW1lICogMC4wMDAxKSAqIE1hdGguc2luKG9mZnNldFRpbWUgKiAwLjAwMDMyMSkpICogMC41ICsgMC41KSAqIE1hdGguUEkgKiAyXHJcbiAgICAgICAgdGhpcy5vZmZzZXQuZGlyZWN0aW9uLnNldEZyb21TcGhlcmljYWwodGhpcy5vZmZzZXQuc3BoZXJpY2FsKVxyXG4gICAgICAgIHRoaXMub2Zmc2V0LmRpcmVjdGlvbi5tdWx0aXBseVNjYWxhcih0aGlzLnRpbWVGcmVxdWVuY3kgKiAyKVxyXG5cclxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVPZmZzZXQudmFsdWUuYWRkKHRoaXMub2Zmc2V0LmRpcmVjdGlvbilcclxuXHJcbiAgICAgICAgLy8gVGltZVxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudVRpbWUudmFsdWUgKz0gdGhpcy5lbGFwc2VkVGltZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJkT2JqID0ge1xyXG4gIGNhbnZhcyA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZycpLFxyXG4gIHJlbmRlcmVyIDogbnVsbCxcclxuICBpbml0UmQgOiAoKSA9PiB7XHJcbiAgICByZE9iai5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtjYW52YXM6IHJkT2JqLmNhbnZhcyAsIHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIgfSlcclxuICAgIHJkT2JqLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXHJcbiAgICByZE9iai5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgfVxyXG59O1xyXG5yZE9iai5pbml0UmQoKTsiLCJpbXBvcnQgeyBjbU9iaiB9IGZyb20gJy4vQ2FtZXJhLmpzJztcclxuaW1wb3J0IHsgcmRPYmogfSBmcm9tICcuL1JlbmRlcmVyLmpzJztcclxuLy9cclxuLy9TaXplc1xyXG4vL1xyXG5jb25zdCBzaXplcyA9IHtcclxuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XHJcbiAgfTtcclxuICBcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgLy8gVXBkYXRlIHNpemVzXHJcbiAgICBzaXplcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgc2l6ZXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgIC8vIFVwZGF0ZSBjYW1lcmFcclxuICAgIGNtT2JqLmNhbWVyYS5hc3BlY3QgPSBzaXplcy53aWR0aCAvIHNpemVzLmhlaWdodDtcclxuICAgIGNtT2JqLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHJlbmRlcmVyXHJcbiAgICByZE9iai5yZW5kZXJlci5zZXRTaXplKHNpemVzLndpZHRoLCBzaXplcy5oZWlnaHQpO1xyXG4gICAgcmRPYmoucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhNYXRoLm1pbih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgMikpO1xyXG59KTtcclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjT2JqID0ge1xyXG4gICAgc2NlbmU6IG51bGwsXHJcbiAgaW5pdFNjZW5lIDogKCkgPT4ge1xyXG4gICAgc2NPYmouc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIHNjT2JqLnNjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoMHgxQzAzMzkpO1xyXG4gICAgLy9zY09iai5zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKDB4ZmZmZmZmLCAwLCA1MCk7XHJcbiAgICBjb25zdCBwb2ludExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYpO1xyXG4gICAgY29uc3QgZGlyZWN0TGlnaHQgPSBuZXcgVEhSRUUuU3BvdExpZ2h0KDB4MDRGRjAwLDEwMClcclxuICAgIHBvaW50TGlnaHQucG9zaXRpb24uc2V0KDAsIDMwLCAtMTAwKTtcclxuICAgIHBvaW50TGlnaHQubG9va0F0KDAsMCwwKVxyXG4gICAgZGlyZWN0TGlnaHQucG9zaXRpb24uc2V0KDAsIDAsMTAwKTtcclxuICAgIGRpcmVjdExpZ2h0Lmxvb2tBdCgwLDAsMClcclxuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYpO1xyXG4gICAgc2NPYmouc2NlbmUuYWRkKGFtYmllbnRMaWdodCxkaXJlY3RMaWdodCk7XHJcbiAgfVxyXG59O1xyXG5zY09iai5pbml0U2NlbmUoKTtcclxubGV0IHNjID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbnNjLmIiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7UmVzcG9uc2l2ZVJlbmRlcn0gZnJvbScuL1Jlc3BvbnNpdmUuanMnXHJcblxyXG5pbXBvcnQgU3RhdHMgZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xpYnMvc3RhdHMubW9kdWxlJ1xyXG5pbXBvcnQgeyBjbU9iaiB9IGZyb20gJy4vQ2FtZXJhLmpzJztcclxuaW1wb3J0IHsgcmRPYmogfSBmcm9tICcuL1JlbmRlcmVyLmpzJztcclxuaW1wb3J0IHsgc2NPYmogfSBmcm9tICcuL1NjZW5lLmpzJztcclxuaW1wb3J0IHsgY3RybE9iaiB9IGZyb20gJy4vQ29udHJvbHMuanMnO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUdhbGF4eSB9IGZyb20gJy4vR2FsYXh5LmpzJztcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scy5qcyc7XHJcbmltcG9ydCB7IERvdWJsZVNpZGUgfSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCBQbGFuZXQgZnJvbSAnLi9QbGFuZXQuanMnXHJcbi8vaW1wb3J0IHsgY2xvdWQgfSBmcm9tICcuL05lYnVsYS5qcyc7XHJcblxyXG52YXIgZ2VvbWV0cnkgID0gbmV3IFRIUkVFLlNwaGVyZUJ1ZmZlckdlb21ldHJ5KDEsMjAsMjApO1xyXG5jb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCggeyBjb2xvcjoweGZmZmZmZiB9ICk7XHJcbnZhciBwbGFuZXQgPSAgbmV3IFBsYW5ldChzY09iai5zY2VuZSk7XHJcbnBsYW5ldC5wb3NpdGlvbi5zZXQoMCwwLDApO1xyXG4vL3NjT2JqLnNjZW5lLmFkZChwbGFuZXQpO1xyXG5cclxuLy9jb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xyXG5cclxudmFyIHN0YXRzID0gbmV3IFN0YXRzKCk7XHJcbnN0YXRzLnNob3dQYW5lbCgwKTsgLy8gMDogZnBzLCAxOiBtcywgMjogbWIsIDMrOiBjdXN0b21cclxuLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XHJcblxyXG5jb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKCBjbU9iai5jYW1lcmEsIHJkT2JqLnJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcclxuXHJcbmNvbnN0IGdhbGF4eSA9IGdlbmVyYXRlR2FsYXh5KCk7XHJcbnNjT2JqLnNjZW5lLmFkZChnYWxheHkpO1xyXG5mdW5jdGlvbiBHYW1lTG9vcCAoKSB7XHJcblxyXG4gICAgc3RhdHMuYmVnaW4oKTtcclxuICAgIC8vY3RybE9iai5jb250cm9scy51cGRhdGUoY2xvY2suZ2V0RGVsdGEoKSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKCBjbU9iai5jYW1lcmEucG9zaXRpb24gKVxyXG4gICAgcmRPYmoucmVuZGVyZXIucmVuZGVyKHNjT2JqLnNjZW5lLCBjbU9iai5jYW1lcmEpO1xyXG4gICAgZ2FsYXh5LnJvdGF0ZVkoMC4wMDAxKTtcclxuICAgIGNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gICAgc3RhdHMuZW5kKCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoR2FtZUxvb3ApO1xyXG59O1xyXG5cclxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBHYW1lTG9vcCApO1xyXG5cclxuIiwiaW1wb3J0IHtcblx0RXZlbnREaXNwYXRjaGVyLFxuXHRNT1VTRSxcblx0UXVhdGVybmlvbixcblx0U3BoZXJpY2FsLFxuXHRUT1VDSCxcblx0VmVjdG9yMixcblx0VmVjdG9yM1xufSBmcm9tICd0aHJlZSc7XG5cbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLlxuLy8gVW5saWtlIFRyYWNrYmFsbENvbnRyb2xzLCBpdCBtYWludGFpbnMgdGhlIFwidXBcIiBkaXJlY3Rpb24gb2JqZWN0LnVwICgrWSBieSBkZWZhdWx0KS5cbi8vXG4vLyAgICBPcmJpdCAtIGxlZnQgbW91c2UgLyB0b3VjaDogb25lLWZpbmdlciBtb3ZlXG4vLyAgICBab29tIC0gbWlkZGxlIG1vdXNlLCBvciBtb3VzZXdoZWVsIC8gdG91Y2g6IHR3by1maW5nZXIgc3ByZWFkIG9yIHNxdWlzaFxuLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGxlZnQgbW91c2UgKyBjdHJsL21ldGEvc2hpZnRLZXksIG9yIGFycm93IGtleXMgLyB0b3VjaDogdHdvLWZpbmdlciBtb3ZlXG5cbmNvbnN0IF9jaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcbmNvbnN0IF9zdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XG5jb25zdCBfZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cbmNsYXNzIE9yYml0Q29udHJvbHMgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0aWYgKCBkb21FbGVtZW50ID09PSB1bmRlZmluZWQgKSBjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiBUaGUgc2Vjb25kIHBhcmFtZXRlciBcImRvbUVsZW1lbnRcIiBpcyBub3cgbWFuZGF0b3J5LicgKTtcblx0XHRpZiAoIGRvbUVsZW1lbnQgPT09IGRvY3VtZW50ICkgY29uc29sZS5lcnJvciggJ1RIUkVFLk9yYml0Q29udHJvbHM6IFwiZG9jdW1lbnRcIiBzaG91bGQgbm90IGJlIHVzZWQgYXMgdGhlIHRhcmdldCBcImRvbUVsZW1lbnRcIi4gUGxlYXNlIHVzZSBcInJlbmRlcmVyLmRvbUVsZW1lbnRcIiBpbnN0ZWFkLicgKTtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXHRcdHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cdFx0dGhpcy5kb21FbGVtZW50LnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnOyAvLyBkaXNhYmxlIHRvdWNoIHNjcm9sbFxuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHRcdC8vIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBvYmplY3Qgb3JiaXRzIGFyb3VuZFxuXHRcdHRoaXMudGFyZ2V0ID0gbmV3IFZlY3RvcjMoKTtcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG5cdFx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XG5cdFx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcblx0XHR0aGlzLm1pblpvb20gPSAwO1xuXHRcdHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG5cdFx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdFx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXG5cdFx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHRcdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHRcdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdFx0Ly8gSWYgc2V0LCB0aGUgaW50ZXJ2YWwgWyBtaW4sIG1heCBdIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgWyAtIDIgUEksIDIgUEkgXSwgd2l0aCAoIG1heCAtIG1pbiA8IDIgUEkgKVxuXHRcdHRoaXMubWluQXppbXV0aEFuZ2xlID0gLSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXHRcdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuXHRcdC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxuXHRcdC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdFx0dGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG5cdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gMC4wNTtcblxuXHRcdC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuXHRcdHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XG5cdFx0dGhpcy56b29tU3BlZWQgPSAxLjA7XG5cblx0XHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuXHRcdHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcblx0XHR0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xuXG5cdFx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuXHRcdHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcblx0XHR0aGlzLnBhblNwZWVkID0gMS4wO1xuXHRcdHRoaXMuc2NyZWVuU3BhY2VQYW5uaW5nID0gdHJ1ZTsgLy8gaWYgZmFsc2UsIHBhbiBvcnRob2dvbmFsIHRvIHdvcmxkLXNwYWNlIGRpcmVjdGlvbiBjYW1lcmEudXBcblx0XHR0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxuXG5cdFx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcblx0XHQvLyBJZiBhdXRvLXJvdGF0ZSBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0XHR0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcblx0XHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgb3JiaXQgd2hlbiBmcHMgaXMgNjBcblxuXHRcdC8vIFRoZSBmb3VyIGFycm93IGtleXNcblx0XHR0aGlzLmtleXMgPSB7IExFRlQ6ICdBcnJvd0xlZnQnLCBVUDogJ0Fycm93VXAnLCBSSUdIVDogJ0Fycm93UmlnaHQnLCBCT1RUT006ICdBcnJvd0Rvd24nIH07XG5cblx0XHQvLyBNb3VzZSBidXR0b25zXG5cdFx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IExFRlQ6IE1PVVNFLlJPVEFURSwgTUlERExFOiBNT1VTRS5ET0xMWSwgUklHSFQ6IE1PVVNFLlBBTiB9O1xuXG5cdFx0Ly8gVG91Y2ggZmluZ2Vyc1xuXHRcdHRoaXMudG91Y2hlcyA9IHsgT05FOiBUT1VDSC5ST1RBVEUsIFRXTzogVE9VQ0guRE9MTFlfUEFOIH07XG5cblx0XHQvLyBmb3IgcmVzZXRcblx0XHR0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuXHRcdHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblx0XHR0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcblxuXHRcdC8vIHRoZSB0YXJnZXQgRE9NIGVsZW1lbnQgZm9yIGtleSBldmVudHNcblx0XHR0aGlzLl9kb21FbGVtZW50S2V5RXZlbnRzID0gbnVsbDtcblxuXHRcdC8vXG5cdFx0Ly8gcHVibGljIG1ldGhvZHNcblx0XHQvL1xuXG5cdFx0dGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gc3BoZXJpY2FsLnBoaTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRyZXR1cm4gc3BoZXJpY2FsLnRoZXRhO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0RGlzdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHJldHVybiB0aGlzLm9iamVjdC5wb3NpdGlvbi5kaXN0YW5jZVRvKCB0aGlzLnRhcmdldCApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMubGlzdGVuVG9LZXlFdmVudHMgPSBmdW5jdGlvbiAoIGRvbUVsZW1lbnQgKSB7XG5cblx0XHRcdGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24gKTtcblx0XHRcdHRoaXMuX2RvbUVsZW1lbnRLZXlFdmVudHMgPSBkb21FbGVtZW50O1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuc2F2ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS50YXJnZXQwLmNvcHkoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0c2NvcGUucG9zaXRpb24wLmNvcHkoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApO1xuXHRcdFx0c2NvcGUuem9vbTAgPSBzY29wZS5vYmplY3Quem9vbTtcblxuXHRcdH07XG5cblx0XHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS50YXJnZXQuY29weSggc2NvcGUudGFyZ2V0MCApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHNjb3BlLnBvc2l0aW9uMCApO1xuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBzY29wZS56b29tMDtcblxuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fTtcblxuXHRcdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IG9mZnNldCA9IG5ldyBWZWN0b3IzKCk7XG5cblx0XHRcdC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXHRcdFx0Y29uc3QgcXVhdCA9IG5ldyBRdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBWZWN0b3IzKCAwLCAxLCAwICkgKTtcblx0XHRcdGNvbnN0IHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVydCgpO1xuXG5cdFx0XHRjb25zdCBsYXN0UG9zaXRpb24gPSBuZXcgVmVjdG9yMygpO1xuXHRcdFx0Y29uc3QgbGFzdFF1YXRlcm5pb24gPSBuZXcgUXVhdGVybmlvbigpO1xuXG5cdFx0XHRjb25zdCB0d29QSSA9IDIgKiBNYXRoLlBJO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKCkge1xuXG5cdFx0XHRcdGNvbnN0IHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXG5cdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdFx0Ly8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG5cdFx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuXHRcdFx0XHQvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cdFx0XHRcdHNwaGVyaWNhbC5zZXRGcm9tVmVjdG9yMyggb2Zmc2V0ICk7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdFx0cm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZURhbXBpbmcgKSB7XG5cblx0XHRcdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGEgKiBzY29wZS5kYW1waW5nRmFjdG9yO1xuXHRcdFx0XHRcdHNwaGVyaWNhbC5waGkgKz0gc3BoZXJpY2FsRGVsdGEucGhpICogc2NvcGUuZGFtcGluZ0ZhY3RvcjtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuXHRcdFx0XHRcdHNwaGVyaWNhbC5waGkgKz0gc3BoZXJpY2FsRGVsdGEucGhpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cblx0XHRcdFx0bGV0IG1pbiA9IHNjb3BlLm1pbkF6aW11dGhBbmdsZTtcblx0XHRcdFx0bGV0IG1heCA9IHNjb3BlLm1heEF6aW11dGhBbmdsZTtcblxuXHRcdFx0XHRpZiAoIGlzRmluaXRlKCBtaW4gKSAmJiBpc0Zpbml0ZSggbWF4ICkgKSB7XG5cblx0XHRcdFx0XHRpZiAoIG1pbiA8IC0gTWF0aC5QSSApIG1pbiArPSB0d29QSTsgZWxzZSBpZiAoIG1pbiA+IE1hdGguUEkgKSBtaW4gLT0gdHdvUEk7XG5cblx0XHRcdFx0XHRpZiAoIG1heCA8IC0gTWF0aC5QSSApIG1heCArPSB0d29QSTsgZWxzZSBpZiAoIG1heCA+IE1hdGguUEkgKSBtYXggLT0gdHdvUEk7XG5cblx0XHRcdFx0XHRpZiAoIG1pbiA8PSBtYXggKSB7XG5cblx0XHRcdFx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KCBtaW4sIE1hdGgubWluKCBtYXgsIHNwaGVyaWNhbC50aGV0YSApICk7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRzcGhlcmljYWwudGhldGEgPSAoIHNwaGVyaWNhbC50aGV0YSA+ICggbWluICsgbWF4ICkgLyAyICkgP1xuXHRcdFx0XHRcdFx0XHRNYXRoLm1heCggbWluLCBzcGhlcmljYWwudGhldGEgKSA6XG5cdFx0XHRcdFx0XHRcdE1hdGgubWluKCBtYXgsIHNwaGVyaWNhbC50aGV0YSApO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0XHRzcGhlcmljYWwucGhpID0gTWF0aC5tYXgoIHNjb3BlLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpICkgKTtcblxuXHRcdFx0XHRzcGhlcmljYWwubWFrZVNhZmUoKTtcblxuXG5cdFx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgKj0gc2NhbGU7XG5cblx0XHRcdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdFx0c3BoZXJpY2FsLnJhZGl1cyA9IE1hdGgubWF4KCBzY29wZS5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHNjb3BlLm1heERpc3RhbmNlLCBzcGhlcmljYWwucmFkaXVzICkgKTtcblxuXHRcdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZURhbXBpbmcgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHRzY29wZS50YXJnZXQuYWRkU2NhbGVkVmVjdG9yKCBwYW5PZmZzZXQsIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0c2NvcGUudGFyZ2V0LmFkZCggcGFuT2Zmc2V0ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKCBzcGhlcmljYWwgKTtcblxuXHRcdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2Vcblx0XHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuXHRcdFx0XHRwb3NpdGlvbi5jb3B5KCBzY29wZS50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC5sb29rQXQoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHRcdFx0cGFuT2Zmc2V0Lm11bHRpcGx5U2NhbGFyKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0XHRcdHBhbk9mZnNldC5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2NhbGUgPSAxO1xuXG5cdFx0XHRcdC8vIHVwZGF0ZSBjb25kaXRpb24gaXM6XG5cdFx0XHRcdC8vIG1pbihjYW1lcmEgZGlzcGxhY2VtZW50LCBjYW1lcmEgcm90YXRpb24gaW4gcmFkaWFucyleMiA+IEVQU1xuXHRcdFx0XHQvLyB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcblxuXHRcdFx0XHRpZiAoIHpvb21DaGFuZ2VkIHx8XG5cdFx0XHRcdFx0bGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCBzY29wZS5vYmplY3QucG9zaXRpb24gKSA+IEVQUyB8fFxuXHRcdFx0XHRcdDggKiAoIDEgLSBsYXN0UXVhdGVybmlvbi5kb3QoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICkgKSA+IEVQUyApIHtcblxuXHRcdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApO1xuXHRcdFx0XHRcdGxhc3RRdWF0ZXJuaW9uLmNvcHkoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICk7XG5cdFx0XHRcdFx0em9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSApO1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24gKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJjYW5jZWwnLCBvblBvaW50ZXJDYW5jZWwgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsICk7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcnVwJywgb25Qb2ludGVyVXAgKTtcblxuXG5cdFx0XHRpZiAoIHNjb3BlLl9kb21FbGVtZW50S2V5RXZlbnRzICE9PSBudWxsICkge1xuXG5cdFx0XHRcdHNjb3BlLl9kb21FbGVtZW50S2V5RXZlbnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duICk7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly9zY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNwb3NlJyB9ICk7IC8vIHNob3VsZCB0aGlzIGJlIGFkZGVkIGhlcmU/XG5cblx0XHR9O1xuXG5cdFx0Ly9cblx0XHQvLyBpbnRlcm5hbHNcblx0XHQvL1xuXG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzO1xuXG5cdFx0Y29uc3QgU1RBVEUgPSB7XG5cdFx0XHROT05FOiAtIDEsXG5cdFx0XHRST1RBVEU6IDAsXG5cdFx0XHRET0xMWTogMSxcblx0XHRcdFBBTjogMixcblx0XHRcdFRPVUNIX1JPVEFURTogMyxcblx0XHRcdFRPVUNIX1BBTjogNCxcblx0XHRcdFRPVUNIX0RPTExZX1BBTjogNSxcblx0XHRcdFRPVUNIX0RPTExZX1JPVEFURTogNlxuXHRcdH07XG5cblx0XHRsZXQgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0Y29uc3QgRVBTID0gMC4wMDAwMDE7XG5cblx0XHQvLyBjdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuXHRcdGNvbnN0IHNwaGVyaWNhbCA9IG5ldyBTcGhlcmljYWwoKTtcblx0XHRjb25zdCBzcGhlcmljYWxEZWx0YSA9IG5ldyBTcGhlcmljYWwoKTtcblxuXHRcdGxldCBzY2FsZSA9IDE7XG5cdFx0Y29uc3QgcGFuT2Zmc2V0ID0gbmV3IFZlY3RvcjMoKTtcblx0XHRsZXQgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdGNvbnN0IHJvdGF0ZVN0YXJ0ID0gbmV3IFZlY3RvcjIoKTtcblx0XHRjb25zdCByb3RhdGVFbmQgPSBuZXcgVmVjdG9yMigpO1xuXHRcdGNvbnN0IHJvdGF0ZURlbHRhID0gbmV3IFZlY3RvcjIoKTtcblxuXHRcdGNvbnN0IHBhblN0YXJ0ID0gbmV3IFZlY3RvcjIoKTtcblx0XHRjb25zdCBwYW5FbmQgPSBuZXcgVmVjdG9yMigpO1xuXHRcdGNvbnN0IHBhbkRlbHRhID0gbmV3IFZlY3RvcjIoKTtcblxuXHRcdGNvbnN0IGRvbGx5U3RhcnQgPSBuZXcgVmVjdG9yMigpO1xuXHRcdGNvbnN0IGRvbGx5RW5kID0gbmV3IFZlY3RvcjIoKTtcblx0XHRjb25zdCBkb2xseURlbHRhID0gbmV3IFZlY3RvcjIoKTtcblxuXHRcdGNvbnN0IHBvaW50ZXJzID0gW107XG5cdFx0Y29uc3QgcG9pbnRlclBvc2l0aW9ucyA9IHt9O1xuXG5cdFx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cblx0XHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cblx0XHRcdHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiByb3RhdGVMZWZ0KCBhbmdsZSApIHtcblxuXHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgLT0gYW5nbGU7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiByb3RhdGVVcCggYW5nbGUgKSB7XG5cblx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAtPSBhbmdsZTtcblxuXHRcdH1cblxuXHRcdGNvbnN0IHBhbkxlZnQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IHYgPSBuZXcgVmVjdG9yMygpO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuTGVmdCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMCApOyAvLyBnZXQgWCBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcblxuXHRcdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHRjb25zdCBwYW5VcCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc3QgdiA9IG5ldyBWZWN0b3IzKCk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiBwYW5VcCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0XHRpZiAoIHNjb3BlLnNjcmVlblNwYWNlUGFubmluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAxICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAwICk7XG5cdFx0XHRcdFx0di5jcm9zc1ZlY3RvcnMoIHNjb3BlLm9iamVjdC51cCwgdiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuXG5cdFx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdC8vIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBpbiBwaXhlbHM7IHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuXHRcdGNvbnN0IHBhbiA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc3Qgb2Zmc2V0ID0gbmV3IFZlY3RvcjMoKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbiggZGVsdGFYLCBkZWx0YVkgKSB7XG5cblx0XHRcdFx0Y29uc3QgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdFx0aWYgKCBzY29wZS5vYmplY3QuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRcdC8vIHBlcnNwZWN0aXZlXG5cdFx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cdFx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblx0XHRcdFx0XHRsZXQgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cblx0XHRcdFx0XHQvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cblx0XHRcdFx0XHR0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XG5cblx0XHRcdFx0XHQvLyB3ZSB1c2Ugb25seSBjbGllbnRIZWlnaHQgaGVyZSBzbyBhc3BlY3QgcmF0aW8gZG9lcyBub3QgZGlzdG9ydCBzcGVlZFxuXHRcdFx0XHRcdHBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdFx0cGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0LmlzT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdFx0Ly8gb3J0aG9ncmFwaGljXG5cdFx0XHRcdFx0cGFuTGVmdCggZGVsdGFYICogKCBzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudFdpZHRoLCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdFx0cGFuVXAoIGRlbHRhWSAqICggc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20gKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdFx0c2NvcGUuZW5hYmxlUGFuID0gZmFsc2U7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0ZnVuY3Rpb24gZG9sbHlPdXQoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0LmlzUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0LmlzT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZG9sbHlJbiggZG9sbHlTY2FsZSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QuaXNQZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QuaXNPcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG5cdFx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvL1xuXHRcdC8vIGV2ZW50IGNhbGxiYWNrcyAtIHVwZGF0ZSB0aGUgb2JqZWN0IHN0YXRlXG5cdFx0Ly9cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApIHtcblxuXHRcdFx0cGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKS5tdWx0aXBseVNjYWxhciggc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdFx0Y29uc3QgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7IC8vIHllcywgaGVpZ2h0XG5cblx0XHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuXG5cdFx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHRcdGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0XHRwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKS5tdWx0aXBseVNjYWxhciggc2NvcGUucGFuU3BlZWQgKTtcblxuXHRcdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIGV2ZW50LmRlbHRhWSA8IDAgKSB7XG5cblx0XHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fSBlbHNlIGlmICggZXZlbnQuZGVsdGFZID4gMCApIHtcblxuXHRcdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHRsZXQgbmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuXHRcdFx0c3dpdGNoICggZXZlbnQuY29kZSApIHtcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuVVA6XG5cdFx0XHRcdFx0cGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRcdG5lZWRzVXBkYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuXHRcdFx0XHRcdHBhbiggMCwgLSBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRcdG5lZWRzVXBkYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIHNjb3BlLmtleXMuTEVGVDpcblx0XHRcdFx0XHRwYW4oIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdFx0bmVlZHNVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcblx0XHRcdFx0XHRwYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0XHRuZWVkc1VwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBuZWVkc1VwZGF0ZSApIHtcblxuXHRcdFx0XHQvLyBwcmV2ZW50IHRoZSBicm93c2VyIGZyb20gc2Nyb2xsaW5nIG9uIGN1cnNvciBrZXlzXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRcdH1cblxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSgpIHtcblxuXHRcdFx0aWYgKCBwb2ludGVycy5sZW5ndGggPT09IDEgKSB7XG5cblx0XHRcdFx0cm90YXRlU3RhcnQuc2V0KCBwb2ludGVyc1sgMCBdLnBhZ2VYLCBwb2ludGVyc1sgMCBdLnBhZ2VZICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc3QgeCA9IDAuNSAqICggcG9pbnRlcnNbIDAgXS5wYWdlWCArIHBvaW50ZXJzWyAxIF0ucGFnZVggKTtcblx0XHRcdFx0Y29uc3QgeSA9IDAuNSAqICggcG9pbnRlcnNbIDAgXS5wYWdlWSArIHBvaW50ZXJzWyAxIF0ucGFnZVkgKTtcblxuXHRcdFx0XHRyb3RhdGVTdGFydC5zZXQoIHgsIHkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFBhbigpIHtcblxuXHRcdFx0aWYgKCBwb2ludGVycy5sZW5ndGggPT09IDEgKSB7XG5cblx0XHRcdFx0cGFuU3RhcnQuc2V0KCBwb2ludGVyc1sgMCBdLnBhZ2VYLCBwb2ludGVyc1sgMCBdLnBhZ2VZICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc3QgeCA9IDAuNSAqICggcG9pbnRlcnNbIDAgXS5wYWdlWCArIHBvaW50ZXJzWyAxIF0ucGFnZVggKTtcblx0XHRcdFx0Y29uc3QgeSA9IDAuNSAqICggcG9pbnRlcnNbIDAgXS5wYWdlWSArIHBvaW50ZXJzWyAxIF0ucGFnZVkgKTtcblxuXHRcdFx0XHRwYW5TdGFydC5zZXQoIHgsIHkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5KCkge1xuXG5cdFx0XHRjb25zdCBkeCA9IHBvaW50ZXJzWyAwIF0ucGFnZVggLSBwb2ludGVyc1sgMSBdLnBhZ2VYO1xuXHRcdFx0Y29uc3QgZHkgPSBwb2ludGVyc1sgMCBdLnBhZ2VZIC0gcG9pbnRlcnNbIDEgXS5wYWdlWTtcblxuXHRcdFx0Y29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRcdGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5UGFuKCkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gKSBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoKTtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gKSBoYW5kbGVUb3VjaFN0YXJ0UGFuKCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHlSb3RhdGUoKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSApIGhhbmRsZVRvdWNoU3RhcnREb2xseSgpO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSApIGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggcG9pbnRlcnMubGVuZ3RoID09IDEgKSB7XG5cblx0XHRcdFx0cm90YXRlRW5kLnNldCggZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc3QgcG9zaXRpb24gPSBnZXRTZWNvbmRQb2ludGVyUG9zaXRpb24oIGV2ZW50ICk7XG5cblx0XHRcdFx0Y29uc3QgeCA9IDAuNSAqICggZXZlbnQucGFnZVggKyBwb3NpdGlvbi54ICk7XG5cdFx0XHRcdGNvbnN0IHkgPSAwLjUgKiAoIGV2ZW50LnBhZ2VZICsgcG9zaXRpb24ueSApO1xuXG5cdFx0XHRcdHJvdGF0ZUVuZC5zZXQoIHgsIHkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICkubXVsdGlwbHlTY2FsYXIoIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRcdGNvbnN0IGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudEhlaWdodCApOyAvLyB5ZXMsIGhlaWdodFxuXG5cdFx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcblxuXHRcdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHBvaW50ZXJzLmxlbmd0aCA9PT0gMSApIHtcblxuXHRcdFx0XHRwYW5FbmQuc2V0KCBldmVudC5wYWdlWCwgZXZlbnQucGFnZVkgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IGdldFNlY29uZFBvaW50ZXJQb3NpdGlvbiggZXZlbnQgKTtcblxuXHRcdFx0XHRjb25zdCB4ID0gMC41ICogKCBldmVudC5wYWdlWCArIHBvc2l0aW9uLnggKTtcblx0XHRcdFx0Y29uc3QgeSA9IDAuNSAqICggZXZlbnQucGFnZVkgKyBwb3NpdGlvbi55ICk7XG5cblx0XHRcdFx0cGFuRW5kLnNldCggeCwgeSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKS5tdWx0aXBseVNjYWxhciggc2NvcGUucGFuU3BlZWQgKTtcblxuXHRcdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IGdldFNlY29uZFBvaW50ZXJQb3NpdGlvbiggZXZlbnQgKTtcblxuXHRcdFx0Y29uc3QgZHggPSBldmVudC5wYWdlWCAtIHBvc2l0aW9uLng7XG5cdFx0XHRjb25zdCBkeSA9IGV2ZW50LnBhZ2VZIC0gcG9zaXRpb24ueTtcblxuXHRcdFx0Y29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRcdGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdFx0ZG9sbHlEZWx0YS5zZXQoIDAsIE1hdGgucG93KCBkb2xseUVuZC55IC8gZG9sbHlTdGFydC55LCBzY29wZS56b29tU3BlZWQgKSApO1xuXG5cdFx0XHRkb2xseU91dCggZG9sbHlEZWx0YS55ICk7XG5cblx0XHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZURvbGx5UGFuKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tICkgaGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuICkgaGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHlSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gKSBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgKSBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHQvL1xuXHRcdC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcblx0XHQvL1xuXG5cdFx0ZnVuY3Rpb24gb25Qb2ludGVyRG93biggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGlmICggcG9pbnRlcnMubGVuZ3RoID09PSAwICkge1xuXG5cdFx0XHRcdHNjb3BlLmRvbUVsZW1lbnQuc2V0UG9pbnRlckNhcHR1cmUoIGV2ZW50LnBvaW50ZXJJZCApO1xuXG5cdFx0XHRcdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSApO1xuXHRcdFx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVydXAnLCBvblBvaW50ZXJVcCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vXG5cblx0XHRcdGFkZFBvaW50ZXIoIGV2ZW50ICk7XG5cblx0XHRcdGlmICggZXZlbnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgKSB7XG5cblx0XHRcdFx0b25Ub3VjaFN0YXJ0KCBldmVudCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdG9uTW91c2VEb3duKCBldmVudCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aWYgKCBldmVudC5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyApIHtcblxuXHRcdFx0XHRvblRvdWNoTW92ZSggZXZlbnQgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRvbk1vdXNlTW92ZSggZXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Qb2ludGVyVXAoIGV2ZW50ICkge1xuXG5cdFx0ICAgIHJlbW92ZVBvaW50ZXIoIGV2ZW50ICk7XG5cblx0XHQgICAgaWYgKCBwb2ludGVycy5sZW5ndGggPT09IDAgKSB7XG5cblx0XHQgICAgICAgIHNjb3BlLmRvbUVsZW1lbnQucmVsZWFzZVBvaW50ZXJDYXB0dXJlKCBldmVudC5wb2ludGVySWQgKTtcblxuXHRcdCAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlICk7XG5cdFx0ICAgICAgICBzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVydXAnLCBvblBvaW50ZXJVcCApO1xuXG5cdFx0ICAgIH1cblxuXHRcdCAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBfZW5kRXZlbnQgKTtcblxuXHRcdCAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJDYW5jZWwoIGV2ZW50ICkge1xuXG5cdFx0XHRyZW1vdmVQb2ludGVyKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG5cdFx0XHRsZXQgbW91c2VBY3Rpb247XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LmJ1dHRvbiApIHtcblxuXHRcdFx0XHRjYXNlIDA6XG5cblx0XHRcdFx0XHRtb3VzZUFjdGlvbiA9IHNjb3BlLm1vdXNlQnV0dG9ucy5MRUZUO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMTpcblxuXHRcdFx0XHRcdG1vdXNlQWN0aW9uID0gc2NvcGUubW91c2VCdXR0b25zLk1JRERMRTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDI6XG5cblx0XHRcdFx0XHRtb3VzZUFjdGlvbiA9IHNjb3BlLm1vdXNlQnV0dG9ucy5SSUdIVDtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0bW91c2VBY3Rpb24gPSAtIDE7XG5cblx0XHRcdH1cblxuXHRcdFx0c3dpdGNoICggbW91c2VBY3Rpb24gKSB7XG5cblx0XHRcdFx0Y2FzZSBNT1VTRS5ET0xMWTpcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIE1PVVNFLlJPVEFURTpcblxuXHRcdFx0XHRcdGlmICggZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LnNoaWZ0S2V5ICkge1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIE1PVVNFLlBBTjpcblxuXHRcdFx0XHRcdGlmICggZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LnNoaWZ0S2V5ICkge1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX3N0YXJ0RXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRzd2l0Y2ggKCBzdGF0ZSApIHtcblxuXHRcdFx0XHRjYXNlIFNUQVRFLlJPVEFURTpcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgU1RBVEUuRE9MTFk6XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFNUQVRFLlBBTjpcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8IHN0YXRlICE9PSBTVEFURS5OT05FICkgcmV0dXJuO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfc3RhcnRFdmVudCApO1xuXG5cdFx0XHRoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfZW5kRXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlS2V5RG93biggZXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cblx0XHRcdHRyYWNrUG9pbnRlciggZXZlbnQgKTtcblxuXHRcdFx0c3dpdGNoICggcG9pbnRlcnMubGVuZ3RoICkge1xuXG5cdFx0XHRcdGNhc2UgMTpcblxuXHRcdFx0XHRcdHN3aXRjaCAoIHNjb3BlLnRvdWNoZXMuT05FICkge1xuXG5cdFx0XHRcdFx0XHRjYXNlIFRPVUNILlJPVEFURTpcblxuXHRcdFx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFJvdGF0ZSgpO1xuXG5cdFx0XHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRjYXNlIFRPVUNILlBBTjpcblxuXHRcdFx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbigpO1xuXG5cdFx0XHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMjpcblxuXHRcdFx0XHRcdHN3aXRjaCAoIHNjb3BlLnRvdWNoZXMuVFdPICkge1xuXG5cdFx0XHRcdFx0XHRjYXNlIFRPVUNILkRPTExZX1BBTjpcblxuXHRcdFx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICYmIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5UGFuKCk7XG5cblx0XHRcdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWV9QQU47XG5cblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdGNhc2UgVE9VQ0guRE9MTFlfUk9UQVRFOlxuXG5cdFx0XHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgJiYgc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0RG9sbHlSb3RhdGUoKTtcblxuXHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZX1JPVEFURTtcblxuXHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX3N0YXJ0RXZlbnQgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHR0cmFja1BvaW50ZXIoIGV2ZW50ICk7XG5cblx0XHRcdHN3aXRjaCAoIHN0YXRlICkge1xuXG5cdFx0XHRcdGNhc2UgU1RBVEUuVE9VQ0hfUk9UQVRFOlxuXG5cdFx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIFNUQVRFLlRPVUNIX1BBTjpcblxuXHRcdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBTVEFURS5UT1VDSF9ET0xMWV9QQU46XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICYmIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBTVEFURS5UT1VDSF9ET0xMWV9ST1RBVEU6XG5cblx0XHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICYmIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Db250ZXh0TWVudSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBhZGRQb2ludGVyKCBldmVudCApIHtcblxuXHRcdFx0cG9pbnRlcnMucHVzaCggZXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJlbW92ZVBvaW50ZXIoIGV2ZW50ICkge1xuXG5cdFx0XHRkZWxldGUgcG9pbnRlclBvc2l0aW9uc1sgZXZlbnQucG9pbnRlcklkIF07XG5cblx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHBvaW50ZXJzLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0XHRpZiAoIHBvaW50ZXJzWyBpIF0ucG9pbnRlcklkID09IGV2ZW50LnBvaW50ZXJJZCApIHtcblxuXHRcdFx0XHRcdHBvaW50ZXJzLnNwbGljZSggaSwgMSApO1xuXHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyYWNrUG9pbnRlciggZXZlbnQgKSB7XG5cblx0XHRcdGxldCBwb3NpdGlvbiA9IHBvaW50ZXJQb3NpdGlvbnNbIGV2ZW50LnBvaW50ZXJJZCBdO1xuXG5cdFx0XHRpZiAoIHBvc2l0aW9uID09PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cG9zaXRpb24gPSBuZXcgVmVjdG9yMigpO1xuXHRcdFx0XHRwb2ludGVyUG9zaXRpb25zWyBldmVudC5wb2ludGVySWQgXSA9IHBvc2l0aW9uO1xuXG5cdFx0XHR9XG5cblx0XHRcdHBvc2l0aW9uLnNldCggZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXRTZWNvbmRQb2ludGVyUG9zaXRpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRjb25zdCBwb2ludGVyID0gKCBldmVudC5wb2ludGVySWQgPT09IHBvaW50ZXJzWyAwIF0ucG9pbnRlcklkICkgPyBwb2ludGVyc1sgMSBdIDogcG9pbnRlcnNbIDAgXTtcblxuXHRcdFx0cmV0dXJuIHBvaW50ZXJQb3NpdGlvbnNbIHBvaW50ZXIucG9pbnRlcklkIF07XG5cblx0XHR9XG5cblx0XHQvL1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51ICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24gKTtcblx0XHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVyY2FuY2VsJywgb25Qb2ludGVyQ2FuY2VsICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSApO1xuXG5cdFx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG5cblx0XHR0aGlzLnVwZGF0ZSgpO1xuXG5cdH1cblxufVxuXG5cbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLlxuLy8gVW5saWtlIFRyYWNrYmFsbENvbnRyb2xzLCBpdCBtYWludGFpbnMgdGhlIFwidXBcIiBkaXJlY3Rpb24gb2JqZWN0LnVwICgrWSBieSBkZWZhdWx0KS5cbi8vIFRoaXMgaXMgdmVyeSBzaW1pbGFyIHRvIE9yYml0Q29udHJvbHMsIGFub3RoZXIgc2V0IG9mIHRvdWNoIGJlaGF2aW9yXG4vL1xuLy8gICAgT3JiaXQgLSByaWdodCBtb3VzZSwgb3IgbGVmdCBtb3VzZSArIGN0cmwvbWV0YS9zaGlmdEtleSAvIHRvdWNoOiB0d28tZmluZ2VyIHJvdGF0ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28tZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIGxlZnQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogb25lLWZpbmdlciBtb3ZlXG5cbmNsYXNzIE1hcENvbnRyb2xzIGV4dGVuZHMgT3JiaXRDb250cm9scyB7XG5cblx0Y29uc3RydWN0b3IoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuXHRcdHN1cGVyKCBvYmplY3QsIGRvbUVsZW1lbnQgKTtcblxuXHRcdHRoaXMuc2NyZWVuU3BhY2VQYW5uaW5nID0gZmFsc2U7IC8vIHBhbiBvcnRob2dvbmFsIHRvIHdvcmxkLXNwYWNlIGRpcmVjdGlvbiBjYW1lcmEudXBcblxuXHRcdHRoaXMubW91c2VCdXR0b25zLkxFRlQgPSBNT1VTRS5QQU47XG5cdFx0dGhpcy5tb3VzZUJ1dHRvbnMuUklHSFQgPSBNT1VTRS5ST1RBVEU7XG5cblx0XHR0aGlzLnRvdWNoZXMuT05FID0gVE9VQ0guUEFOO1xuXHRcdHRoaXMudG91Y2hlcy5UV08gPSBUT1VDSC5ET0xMWV9ST1RBVEU7XG5cblx0fVxuXG59XG5cbmV4cG9ydCB7IE9yYml0Q29udHJvbHMsIE1hcENvbnRyb2xzIH07XG4iLCJpbXBvcnQge1xuXHRFdWxlcixcblx0RXZlbnREaXNwYXRjaGVyLFxuXHRWZWN0b3IzXG59IGZyb20gJ3RocmVlJztcblxuY29uc3QgX2V1bGVyID0gbmV3IEV1bGVyKCAwLCAwLCAwLCAnWVhaJyApO1xuY29uc3QgX3ZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9jaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcbmNvbnN0IF9sb2NrRXZlbnQgPSB7IHR5cGU6ICdsb2NrJyB9O1xuY29uc3QgX3VubG9ja0V2ZW50ID0geyB0eXBlOiAndW5sb2NrJyB9O1xuXG5jb25zdCBfUElfMiA9IE1hdGguUEkgLyAyO1xuXG5jbGFzcyBQb2ludGVyTG9ja0NvbnRyb2xzIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3RvciggY2FtZXJhLCBkb21FbGVtZW50ICkge1xuXG5cdFx0c3VwZXIoKTtcblxuXHRcdGlmICggZG9tRWxlbWVudCA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5Qb2ludGVyTG9ja0NvbnRyb2xzOiBUaGUgc2Vjb25kIHBhcmFtZXRlciBcImRvbUVsZW1lbnRcIiBpcyBub3cgbWFuZGF0b3J5LicgKTtcblx0XHRcdGRvbUVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblx0XHR0aGlzLmlzTG9ja2VkID0gZmFsc2U7XG5cblx0XHQvLyBTZXQgdG8gY29uc3RyYWluIHRoZSBwaXRjaCBvZiB0aGUgY2FtZXJhXG5cdFx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnNcblx0XHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdFx0dGhpcy5wb2ludGVyU3BlZWQgPSAxLjA7XG5cblx0XHRjb25zdCBzY29wZSA9IHRoaXM7XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuaXNMb2NrZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRjb25zdCBtb3ZlbWVudFggPSBldmVudC5tb3ZlbWVudFggfHwgZXZlbnQubW96TW92ZW1lbnRYIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WCB8fCAwO1xuXHRcdFx0Y29uc3QgbW92ZW1lbnRZID0gZXZlbnQubW92ZW1lbnRZIHx8IGV2ZW50Lm1vek1vdmVtZW50WSB8fCBldmVudC53ZWJraXRNb3ZlbWVudFkgfHwgMDtcblxuXHRcdFx0X2V1bGVyLnNldEZyb21RdWF0ZXJuaW9uKCBjYW1lcmEucXVhdGVybmlvbiApO1xuXG5cdFx0XHRfZXVsZXIueSAtPSBtb3ZlbWVudFggKiAwLjAwMiAqIHNjb3BlLnBvaW50ZXJTcGVlZDtcblx0XHRcdF9ldWxlci54IC09IG1vdmVtZW50WSAqIDAuMDAyICogc2NvcGUucG9pbnRlclNwZWVkO1xuXG5cdFx0XHRfZXVsZXIueCA9IE1hdGgubWF4KCBfUElfMiAtIHNjb3BlLm1heFBvbGFyQW5nbGUsIE1hdGgubWluKCBfUElfMiAtIHNjb3BlLm1pblBvbGFyQW5nbGUsIF9ldWxlci54ICkgKTtcblxuXHRcdFx0Y2FtZXJhLnF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKCBfZXVsZXIgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJsb2NrQ2hhbmdlKCkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgPT09IHNjb3BlLmRvbUVsZW1lbnQgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2xvY2tFdmVudCApO1xuXG5cdFx0XHRcdHNjb3BlLmlzTG9ja2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfdW5sb2NrRXZlbnQgKTtcblxuXHRcdFx0XHRzY29wZS5pc0xvY2tlZCA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJsb2NrRXJyb3IoKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5Qb2ludGVyTG9ja0NvbnRyb2xzOiBVbmFibGUgdG8gdXNlIFBvaW50ZXIgTG9jayBBUEknICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tjaGFuZ2UnLCBvblBvaW50ZXJsb2NrQ2hhbmdlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrZXJyb3InLCBvblBvaW50ZXJsb2NrRXJyb3IgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tjaGFuZ2UnLCBvblBvaW50ZXJsb2NrQ2hhbmdlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrZXJyb3InLCBvblBvaW50ZXJsb2NrRXJyb3IgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHRoaXMuZGlzY29ubmVjdCgpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0T2JqZWN0ID0gZnVuY3Rpb24gKCkgeyAvLyByZXRhaW5pbmcgdGhpcyBtZXRob2QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRcdFx0cmV0dXJuIGNhbWVyYTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldERpcmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoIDAsIDAsIC0gMSApO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdHJldHVybiB2LmNvcHkoIGRpcmVjdGlvbiApLmFwcGx5UXVhdGVybmlvbiggY2FtZXJhLnF1YXRlcm5pb24gKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHRoaXMubW92ZUZvcndhcmQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG5cdFx0XHQvLyBtb3ZlIGZvcndhcmQgcGFyYWxsZWwgdG8gdGhlIHh6LXBsYW5lXG5cdFx0XHQvLyBhc3N1bWVzIGNhbWVyYS51cCBpcyB5LXVwXG5cblx0XHRcdF92ZWN0b3Iuc2V0RnJvbU1hdHJpeENvbHVtbiggY2FtZXJhLm1hdHJpeCwgMCApO1xuXG5cdFx0XHRfdmVjdG9yLmNyb3NzVmVjdG9ycyggY2FtZXJhLnVwLCBfdmVjdG9yICk7XG5cblx0XHRcdGNhbWVyYS5wb3NpdGlvbi5hZGRTY2FsZWRWZWN0b3IoIF92ZWN0b3IsIGRpc3RhbmNlICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5tb3ZlUmlnaHQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG5cdFx0XHRfdmVjdG9yLnNldEZyb21NYXRyaXhDb2x1bW4oIGNhbWVyYS5tYXRyaXgsIDAgKTtcblxuXHRcdFx0Y2FtZXJhLnBvc2l0aW9uLmFkZFNjYWxlZFZlY3RvciggX3ZlY3RvciwgZGlzdGFuY2UgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmxvY2sgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHRoaXMuZG9tRWxlbWVudC5yZXF1ZXN0UG9pbnRlckxvY2soKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLnVubG9jayA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuY29ubmVjdCgpO1xuXG5cdH1cblxufVxuXG5leHBvcnQgeyBQb2ludGVyTG9ja0NvbnRyb2xzIH07XG4iLCJ2YXIgU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG5cblx0dmFyIG1vZGUgPSAwO1xuXG5cdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTowLjk7ei1pbmRleDoxMDAwMCc7XG5cdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRzaG93UGFuZWwoICsrIG1vZGUgJSBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoICk7XG5cblx0fSwgZmFsc2UgKTtcblxuXHQvL1xuXG5cdGZ1bmN0aW9uIGFkZFBhbmVsKCBwYW5lbCApIHtcblxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCggcGFuZWwuZG9tICk7XG5cdFx0cmV0dXJuIHBhbmVsO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBzaG93UGFuZWwoIGlkICkge1xuXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29udGFpbmVyLmNoaWxkcmVuWyBpIF0uc3R5bGUuZGlzcGxheSA9IGkgPT09IGlkID8gJ2Jsb2NrJyA6ICdub25lJztcblxuXHRcdH1cblxuXHRcdG1vZGUgPSBpZDtcblxuXHR9XG5cblx0Ly9cblxuXHR2YXIgYmVnaW5UaW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCksIHByZXZUaW1lID0gYmVnaW5UaW1lLCBmcmFtZXMgPSAwO1xuXG5cdHZhciBmcHNQYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdGUFMnLCAnIzBmZicsICcjMDAyJyApICk7XG5cdHZhciBtc1BhbmVsID0gYWRkUGFuZWwoIG5ldyBTdGF0cy5QYW5lbCggJ01TJywgJyMwZjAnLCAnIzAyMCcgKSApO1xuXG5cdGlmICggc2VsZi5wZXJmb3JtYW5jZSAmJiBzZWxmLnBlcmZvcm1hbmNlLm1lbW9yeSApIHtcblxuXHRcdHZhciBtZW1QYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdNQicsICcjZjA4JywgJyMyMDEnICkgKTtcblxuXHR9XG5cblx0c2hvd1BhbmVsKCAwICk7XG5cblx0cmV0dXJuIHtcblxuXHRcdFJFVklTSU9OOiAxNixcblxuXHRcdGRvbTogY29udGFpbmVyLFxuXG5cdFx0YWRkUGFuZWw6IGFkZFBhbmVsLFxuXHRcdHNob3dQYW5lbDogc2hvd1BhbmVsLFxuXG5cdFx0YmVnaW46IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0YmVnaW5UaW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCk7XG5cblx0XHR9LFxuXG5cdFx0ZW5kOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGZyYW1lcyArKztcblxuXHRcdFx0dmFyIHRpbWUgPSAoIHBlcmZvcm1hbmNlIHx8IERhdGUgKS5ub3coKTtcblxuXHRcdFx0bXNQYW5lbC51cGRhdGUoIHRpbWUgLSBiZWdpblRpbWUsIDIwMCApO1xuXG5cdFx0XHRpZiAoIHRpbWUgPj0gcHJldlRpbWUgKyAxMDAwICkge1xuXG5cdFx0XHRcdGZwc1BhbmVsLnVwZGF0ZSggKCBmcmFtZXMgKiAxMDAwICkgLyAoIHRpbWUgLSBwcmV2VGltZSApLCAxMDAgKTtcblxuXHRcdFx0XHRwcmV2VGltZSA9IHRpbWU7XG5cdFx0XHRcdGZyYW1lcyA9IDA7XG5cblx0XHRcdFx0aWYgKCBtZW1QYW5lbCApIHtcblxuXHRcdFx0XHRcdHZhciBtZW1vcnkgPSBwZXJmb3JtYW5jZS5tZW1vcnk7XG5cdFx0XHRcdFx0bWVtUGFuZWwudXBkYXRlKCBtZW1vcnkudXNlZEpTSGVhcFNpemUgLyAxMDQ4NTc2LCBtZW1vcnkuanNIZWFwU2l6ZUxpbWl0IC8gMTA0ODU3NiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGltZTtcblxuXHRcdH0sXG5cblx0XHR1cGRhdGU6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0YmVnaW5UaW1lID0gdGhpcy5lbmQoKTtcblxuXHRcdH0sXG5cblx0XHQvLyBCYWNrd2FyZHMgQ29tcGF0aWJpbGl0eVxuXG5cdFx0ZG9tRWxlbWVudDogY29udGFpbmVyLFxuXHRcdHNldE1vZGU6IHNob3dQYW5lbFxuXG5cdH07XG5cbn07XG5cblN0YXRzLlBhbmVsID0gZnVuY3Rpb24gKCBuYW1lLCBmZywgYmcgKSB7XG5cblx0dmFyIG1pbiA9IEluZmluaXR5LCBtYXggPSAwLCByb3VuZCA9IE1hdGgucm91bmQ7XG5cdHZhciBQUiA9IHJvdW5kKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxICk7XG5cblx0dmFyIFdJRFRIID0gODAgKiBQUiwgSEVJR0hUID0gNDggKiBQUixcblx0XHRURVhUX1ggPSAzICogUFIsIFRFWFRfWSA9IDIgKiBQUixcblx0XHRHUkFQSF9YID0gMyAqIFBSLCBHUkFQSF9ZID0gMTUgKiBQUixcblx0XHRHUkFQSF9XSURUSCA9IDc0ICogUFIsIEdSQVBIX0hFSUdIVCA9IDMwICogUFI7XG5cblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XG5cdGNhbnZhcy53aWR0aCA9IFdJRFRIO1xuXHRjYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xuXHRjYW52YXMuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDo4MHB4O2hlaWdodDo0OHB4JztcblxuXHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XG5cdGNvbnRleHQuZm9udCA9ICdib2xkICcgKyAoIDkgKiBQUiApICsgJ3B4IEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJztcblx0Y29udGV4dC50ZXh0QmFzZWxpbmUgPSAndG9wJztcblxuXHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRjb250ZXh0LmZpbGxSZWN0KCAwLCAwLCBXSURUSCwgSEVJR0hUICk7XG5cblx0Y29udGV4dC5maWxsU3R5bGUgPSBmZztcblx0Y29udGV4dC5maWxsVGV4dCggbmFtZSwgVEVYVF9YLCBURVhUX1kgKTtcblx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCwgR1JBUEhfWSwgR1JBUEhfV0lEVEgsIEdSQVBIX0hFSUdIVCApO1xuXG5cdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjk7XG5cdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1gsIEdSQVBIX1ksIEdSQVBIX1dJRFRILCBHUkFQSF9IRUlHSFQgKTtcblxuXHRyZXR1cm4ge1xuXG5cdFx0ZG9tOiBjYW52YXMsXG5cblx0XHR1cGRhdGU6IGZ1bmN0aW9uICggdmFsdWUsIG1heFZhbHVlICkge1xuXG5cdFx0XHRtaW4gPSBNYXRoLm1pbiggbWluLCB2YWx1ZSApO1xuXHRcdFx0bWF4ID0gTWF0aC5tYXgoIG1heCwgdmFsdWUgKTtcblxuXHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0XHRcdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRcdFx0Y29udGV4dC5maWxsUmVjdCggMCwgMCwgV0lEVEgsIEdSQVBIX1kgKTtcblx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gZmc7XG5cdFx0XHRjb250ZXh0LmZpbGxUZXh0KCByb3VuZCggdmFsdWUgKSArICcgJyArIG5hbWUgKyAnICgnICsgcm91bmQoIG1pbiApICsgJy0nICsgcm91bmQoIG1heCApICsgJyknLCBURVhUX1gsIFRFWFRfWSApO1xuXG5cdFx0XHRjb250ZXh0LmRyYXdJbWFnZSggY2FudmFzLCBHUkFQSF9YICsgUFIsIEdSQVBIX1ksIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX0hFSUdIVCwgR1JBUEhfWCwgR1JBUEhfWSwgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfSEVJR0hUICk7XG5cblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1ggKyBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9ZLCBQUiwgR1JBUEhfSEVJR0hUICk7XG5cblx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdFx0XHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMC45O1xuXHRcdFx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCArIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX1ksIFBSLCByb3VuZCggKCAxIC0gKCB2YWx1ZSAvIG1heFZhbHVlICkgKSAqIEdSQVBIX0hFSUdIVCApICk7XG5cblx0XHR9XG5cblx0fTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=