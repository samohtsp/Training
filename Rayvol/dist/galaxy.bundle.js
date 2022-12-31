"use strict";
(self["webpackChunkrayvol"] = self["webpackChunkrayvol"] || []).push([["galaxy"],{

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

/***/ "./src/js/EventEmitter.js":
/*!********************************!*\
  !*** ./src/js/EventEmitter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class
{
    /**
     * Constructor
     */
    constructor()
    {
        this.callbacks = {}
        this.callbacks.base = {}
    }

    /**
     * On
     */
    on(_names, callback)
    {
        const that = this

        // Errors
        if(typeof _names === 'undefined' || _names === '')
        {
            console.warn('wrong names')
            return false
        }

        if(typeof callback === 'undefined')
        {
            console.warn('wrong callback')
            return false
        }

        // Resolve names
        const names = this.resolveNames(_names)

        // Each name
        names.forEach(function(_name)
        {
            // Resolve name
            const name = that.resolveName(_name)

            // Create namespace if not exist
            if(!(that.callbacks[ name.namespace ] instanceof Object))
                that.callbacks[ name.namespace ] = {}

            // Create callback if not exist
            if(!(that.callbacks[ name.namespace ][ name.value ] instanceof Array))
                that.callbacks[ name.namespace ][ name.value ] = []

            // Add callback
            that.callbacks[ name.namespace ][ name.value ].push(callback)
        })

        return this
    }

    /**
     * Off
     */
    off(_names)
    {
        const that = this

        // Errors
        if(typeof _names === 'undefined' || _names === '')
        {
            console.warn('wrong name')
            return false
        }

        // Resolve names
        const names = this.resolveNames(_names)

        // Each name
        names.forEach(function(_name)
        {
            // Resolve name
            const name = that.resolveName(_name)

            // Remove namespace
            if(name.namespace !== 'base' && name.value === '')
            {
                delete that.callbacks[ name.namespace ]
            }

            // Remove specific callback in namespace
            else
            {
                // Default
                if(name.namespace === 'base')
                {
                    // Try to remove from each namespace
                    for(const namespace in that.callbacks)
                    {
                        if(that.callbacks[ namespace ] instanceof Object && that.callbacks[ namespace ][ name.value ] instanceof Array)
                        {
                            delete that.callbacks[ namespace ][ name.value ]

                            // Remove namespace if empty
                            if(Object.keys(that.callbacks[ namespace ]).length === 0)
                                delete that.callbacks[ namespace ]
                        }
                    }
                }

                // Specified namespace
                else if(that.callbacks[ name.namespace ] instanceof Object && that.callbacks[ name.namespace ][ name.value ] instanceof Array)
                {
                    delete that.callbacks[ name.namespace ][ name.value ]

                    // Remove namespace if empty
                    if(Object.keys(that.callbacks[ name.namespace ]).length === 0)
                        delete that.callbacks[ name.namespace ]
                }
            }
        })

        return this
    }

    /**
     * Trigger
     */
    trigger(_name, _args)
    {
        // Errors
        if(typeof _name === 'undefined' || _name === '')
        {
            console.warn('wrong name')
            return false
        }

        const that = this
        let finalResult = null
        let result = null

        // Default args
        const args = !(_args instanceof Array) ? [] : _args

        // Resolve names (should on have one event)
        let name = this.resolveNames(_name)

        // Resolve name
        name = this.resolveName(name[ 0 ])

        // Default namespace
        if(name.namespace === 'base')
        {
            // Try to find callback in each namespace
            for(const namespace in that.callbacks)
            {
                if(that.callbacks[ namespace ] instanceof Object && that.callbacks[ namespace ][ name.value ] instanceof Array)
                {
                    that.callbacks[ namespace ][ name.value ].forEach(function(callback)
                    {
                        result = callback.apply(that, args)

                        if(typeof finalResult === 'undefined')
                        {
                            finalResult = result
                        }
                    })
                }
            }
        }

        // Specified namespace
        else if(this.callbacks[ name.namespace ] instanceof Object)
        {
            if(name.value === '')
            {
                console.warn('wrong name')
                return this
            }

            that.callbacks[ name.namespace ][ name.value ].forEach(function(callback)
            {
                result = callback.apply(that, args)

                if(typeof finalResult === 'undefined')
                    finalResult = result
            })
        }

        return finalResult
    }

    /**
     * Resolve names
     */
    resolveNames(_names)
    {
        let names = _names
        names = names.replace(/[^a-zA-Z0-9 ,/.]/g, '')
        names = names.replace(/[,/]+/g, ' ')
        names = names.split(' ')

        return names
    }

    /**
     * Resolve name
     */
    resolveName(name)
    {
        const newName = {}
        const parts = name.split('.')

        newName.original  = name
        newName.value     = parts[ 0 ]
        newName.namespace = 'base' // Base namespace

        // Specified namespace
        if(parts.length > 1 && parts[ 1 ] !== '')
        {
            newName.namespace = parts[ 1 ]
        }

        return newName
    }
});


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

/***/ "./src/js/Nebula.js":
/*!**************************!*\
  !*** ./src/js/Nebula.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/*const loader = new THREE.TextureLoader();

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
cloudParticles.forEach( p => {
    p.rotation.z -= 0.001;
    } )*/



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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _shaders_sphere_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaders/sphere/vertex.glsl */ "./src/shaders/sphere/vertex.glsl");
/* harmony import */ var _shaders_sphere_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaders/sphere/fragment.glsl */ "./src/shaders/sphere/fragment.glsl");
/* harmony import */ var _Time_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Time.js */ "./src/js/Time.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");

//import Experience from './Experience'




class Planet
{
    constructor(scene)
    {
        //this.experience = new Experience()
        //this.debug = this.experience.debug
        this.scene = scene
        this.time = new _Time_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
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
        this.lights.a.color.instance = new three__WEBPACK_IMPORTED_MODULE_3__.Color(this.lights.a.color.value)

        this.lights.a.spherical = new three__WEBPACK_IMPORTED_MODULE_3__.Spherical()//1, 0.615, 2.049)

        // Light B
        this.lights.b = {}

        this.lights.b.intensity = 1.4

        this.lights.b.color = {}
        this.lights.b.color.value = '#0063ff'
        this.lights.b.color.instance = new three__WEBPACK_IMPORTED_MODULE_3__.Color(this.lights.b.color.value)

        this.lights.b.spherical = new three__WEBPACK_IMPORTED_MODULE_3__.Spherical()//1, 2.561, - 1.844)

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
        //this.offset.spherical = new THREE.Spherical(1, Math.random() * Math.PI, Math.random() * Math.PI * 2)
        //this.offset.direction = new THREE.Vector3()
        //this.offset.direction.setFromSpherical(this.offset.spherical)
    }

    setGeometry()
    {
        this.geometry = new three__WEBPACK_IMPORTED_MODULE_3__.SphereGeometry(1, 10, 10)
        this.geometry.computeTangents()
    }

    setMaterial()
    {
        this.material = new three__WEBPACK_IMPORTED_MODULE_3__.ShaderMaterial({
            uniforms:
            {
                uLightAColor: { value: this.lights.a.color.instance },
                uLightAPosition: { value: new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(1, 1, 0) },
                uLightAIntensity: { value: this.lights.a.intensity },

                uLightBColor: { value: this.lights.b.color.instance },
                uLightBPosition: { value: new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(- 1, - 1, 0) },
                uLightBIntensity: { value: this.lights.b.intensity },

                uSubdivision: { value: new three__WEBPACK_IMPORTED_MODULE_3__.Vector2(this.geometry.parameters.widthSegments, this.geometry.parameters.heightSegments) },

                uOffset: { value: new three__WEBPACK_IMPORTED_MODULE_3__.Vector3() },

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
        this.mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(this.geometry, this.material)
        //this.mesh.position.set(20,0,0)
        this.scene.add(this.mesh)
        console.log( this.mesh.position )
    }

    update()
    {
        // Update variations
        for(let _variationName in this.variations)
        {
            const variation = this.variations[_variationName]
            variation.target = variation.getDefault()
            
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

/***/ "./src/js/Time.js":
/*!************************!*\
  !*** ./src/js/Time.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Time)
/* harmony export */ });
/* harmony import */ var _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter.js */ "./src/js/EventEmitter.js");


class Time extends _EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__["default"]
{
    /**
     * Constructor
     */
    constructor()
    {
        super()

        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16
        this.playing = true

        this.tick = this.tick.bind(this)
        this.tick()
    }

    play()
    {
        this.playing = true
    }

    pause()
    {
        this.playing = false
    }

    /**
     * Tick
     */
    tick()
    {
        this.ticker = window.requestAnimationFrame(this.tick)

        const current = Date.now()

        this.delta = current - this.current
        this.elapsed += this.playing ? this.delta : 0
        this.current = current

        if(this.delta > 60)
        {
            this.delta = 60
        }

        if(this.playing)
        {
            this.trigger('tick')
        }
    }

    /**
     * Stop
     */
    stop()
    {
        window.cancelAnimationFrame(this.ticker)
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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/Controls.js"), __webpack_exec__("./src/js/Planet.js"), __webpack_exec__("./src/js/Galaxy.js"), __webpack_exec__("./src/js/Nebula.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDMURlOztBQUVmLG1CQUFtQix3Q0FBSztBQUN4QixvQkFBb0IsMENBQU87O0FBRTNCLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsdUJBQXVCOztBQUV2Qjs7QUFFQSxrQ0FBa0Msa0RBQWU7O0FBRWpEOztBQUVBOztBQUVBOztBQUVBLEdBQUcsT0FBTztBQUNWOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixnQ0FBZ0M7O0FBRWhDOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEdBQUcsT0FBTzs7QUFFVjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGlDQUFpQzs7QUFFakM7O0FBRUE7O0FBRUE7O0FBRUEseUJBQXlCLDBDQUFPOztBQUVoQzs7QUFFQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL3NoYWRlcnMvc3BoZXJlL2ZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL3NoYWRlcnMvc3BoZXJlL3ZlcnRleC5nbHNsIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9qcy9DYW1lcmEuanMiLCJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL2pzL0NvbnRyb2xzLmpzIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9qcy9FdmVudEVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL2pzL0dhbGF4eS5qcyIsIndlYnBhY2s6Ly9yYXl2b2wvLi9zcmMvanMvTmVidWxhLmpzIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9qcy9QbGFuZXQuanMiLCJ3ZWJwYWNrOi8vcmF5dm9sLy4vc3JjL2pzL1JlbmRlcmVyLmpzIiwid2VicGFjazovL3JheXZvbC8uL3NyYy9qcy9UaW1lLmpzIiwid2VicGFjazovL3JheXZvbC8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvUG9pbnRlckxvY2tDb250cm9scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIiNkZWZpbmUgR0xTTElGWSAxXFxudmFyeWluZyB2ZWMzIHZDb2xvcjtcXG5cXG52b2lkIG1haW4oKVxcbntcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh2Q29sb3IsIDEuMCk7XFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4jZGVmaW5lIE1fUEkgMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1XFxuXFxudW5pZm9ybSB2ZWMzIHVMaWdodEFDb2xvcjtcXG51bmlmb3JtIHZlYzMgdUxpZ2h0QVBvc2l0aW9uO1xcbnVuaWZvcm0gZmxvYXQgdUxpZ2h0QUludGVuc2l0eTtcXG51bmlmb3JtIHZlYzMgdUxpZ2h0QkNvbG9yO1xcbnVuaWZvcm0gdmVjMyB1TGlnaHRCUG9zaXRpb247XFxudW5pZm9ybSBmbG9hdCB1TGlnaHRCSW50ZW5zaXR5O1xcblxcbnVuaWZvcm0gdmVjMiB1U3ViZGl2aXNpb247XFxuXFxudW5pZm9ybSB2ZWMzIHVPZmZzZXQ7XFxuXFxudW5pZm9ybSBmbG9hdCB1RGlzdG9ydGlvbkZyZXF1ZW5jeTtcXG51bmlmb3JtIGZsb2F0IHVEaXN0b3J0aW9uU3RyZW5ndGg7XFxudW5pZm9ybSBmbG9hdCB1RGlzcGxhY2VtZW50RnJlcXVlbmN5O1xcbnVuaWZvcm0gZmxvYXQgdURpc3BsYWNlbWVudFN0cmVuZ3RoO1xcblxcbnVuaWZvcm0gZmxvYXQgdUZyZXNuZWxPZmZzZXQ7XFxudW5pZm9ybSBmbG9hdCB1RnJlc25lbE11bHRpcGxpZXI7XFxudW5pZm9ybSBmbG9hdCB1RnJlc25lbFBvd2VyO1xcblxcbnVuaWZvcm0gZmxvYXQgdVRpbWU7XFxuXFxudmFyeWluZyB2ZWMzIHZDb2xvcjtcXG5cXG4vL1xcdENsYXNzaWMgUGVybGluIDNEIE5vaXNlIFxcbi8vXFx0YnkgU3RlZmFuIEd1c3RhdnNvblxcbi8vXFxudmVjNCBwZXJtdXRlXzAodmVjNCB4KXtyZXR1cm4gbW9kKCgoeCozNC4wKSsxLjApKngsIDI4OS4wKTt9XFxudmVjNCB0YXlsb3JJbnZTcXJ0XzAodmVjNCByKXtyZXR1cm4gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiByO31cXG52ZWM0IGZhZGVfMCh2ZWM0IHQpIHtyZXR1cm4gdCp0KnQqKHQqKHQqNi4wLTE1LjApKzEwLjApO31cXG5cXG5mbG9hdCBwZXJsaW40ZCh2ZWM0IFApe1xcbiAgdmVjNCBQaTAgPSBmbG9vcihQKTsgLy8gSW50ZWdlciBwYXJ0IGZvciBpbmRleGluZ1xcbiAgdmVjNCBQaTEgPSBQaTAgKyAxLjA7IC8vIEludGVnZXIgcGFydCArIDFcXG4gIFBpMCA9IG1vZChQaTAsIDI4OS4wKTtcXG4gIFBpMSA9IG1vZChQaTEsIDI4OS4wKTtcXG4gIHZlYzQgUGYwID0gZnJhY3QoUCk7IC8vIEZyYWN0aW9uYWwgcGFydCBmb3IgaW50ZXJwb2xhdGlvblxcbiAgdmVjNCBQZjEgPSBQZjAgLSAxLjA7IC8vIEZyYWN0aW9uYWwgcGFydCAtIDEuMFxcbiAgdmVjNCBpeCA9IHZlYzQoUGkwLngsIFBpMS54LCBQaTAueCwgUGkxLngpO1xcbiAgdmVjNCBpeSA9IHZlYzQoUGkwLnl5LCBQaTEueXkpO1xcbiAgdmVjNCBpejAgPSB2ZWM0KFBpMC56enp6KTtcXG4gIHZlYzQgaXoxID0gdmVjNChQaTEuenp6eik7XFxuICB2ZWM0IGl3MCA9IHZlYzQoUGkwLnd3d3cpO1xcbiAgdmVjNCBpdzEgPSB2ZWM0KFBpMS53d3d3KTtcXG5cXG4gIHZlYzQgaXh5ID0gcGVybXV0ZV8wKHBlcm11dGVfMChpeCkgKyBpeSk7XFxuICB2ZWM0IGl4eTAgPSBwZXJtdXRlXzAoaXh5ICsgaXowKTtcXG4gIHZlYzQgaXh5MSA9IHBlcm11dGVfMChpeHkgKyBpejEpO1xcbiAgdmVjNCBpeHkwMCA9IHBlcm11dGVfMChpeHkwICsgaXcwKTtcXG4gIHZlYzQgaXh5MDEgPSBwZXJtdXRlXzAoaXh5MCArIGl3MSk7XFxuICB2ZWM0IGl4eTEwID0gcGVybXV0ZV8wKGl4eTEgKyBpdzApO1xcbiAgdmVjNCBpeHkxMSA9IHBlcm11dGVfMChpeHkxICsgaXcxKTtcXG5cXG4gIHZlYzQgZ3gwMCA9IGl4eTAwIC8gNy4wO1xcbiAgdmVjNCBneTAwID0gZmxvb3IoZ3gwMCkgLyA3LjA7XFxuICB2ZWM0IGd6MDAgPSBmbG9vcihneTAwKSAvIDYuMDtcXG4gIGd4MDAgPSBmcmFjdChneDAwKSAtIDAuNTtcXG4gIGd5MDAgPSBmcmFjdChneTAwKSAtIDAuNTtcXG4gIGd6MDAgPSBmcmFjdChnejAwKSAtIDAuNTtcXG4gIHZlYzQgZ3cwMCA9IHZlYzQoMC43NSkgLSBhYnMoZ3gwMCkgLSBhYnMoZ3kwMCkgLSBhYnMoZ3owMCk7XFxuICB2ZWM0IHN3MDAgPSBzdGVwKGd3MDAsIHZlYzQoMC4wKSk7XFxuICBneDAwIC09IHN3MDAgKiAoc3RlcCgwLjAsIGd4MDApIC0gMC41KTtcXG4gIGd5MDAgLT0gc3cwMCAqIChzdGVwKDAuMCwgZ3kwMCkgLSAwLjUpO1xcblxcbiAgdmVjNCBneDAxID0gaXh5MDEgLyA3LjA7XFxuICB2ZWM0IGd5MDEgPSBmbG9vcihneDAxKSAvIDcuMDtcXG4gIHZlYzQgZ3owMSA9IGZsb29yKGd5MDEpIC8gNi4wO1xcbiAgZ3gwMSA9IGZyYWN0KGd4MDEpIC0gMC41O1xcbiAgZ3kwMSA9IGZyYWN0KGd5MDEpIC0gMC41O1xcbiAgZ3owMSA9IGZyYWN0KGd6MDEpIC0gMC41O1xcbiAgdmVjNCBndzAxID0gdmVjNCgwLjc1KSAtIGFicyhneDAxKSAtIGFicyhneTAxKSAtIGFicyhnejAxKTtcXG4gIHZlYzQgc3cwMSA9IHN0ZXAoZ3cwMSwgdmVjNCgwLjApKTtcXG4gIGd4MDEgLT0gc3cwMSAqIChzdGVwKDAuMCwgZ3gwMSkgLSAwLjUpO1xcbiAgZ3kwMSAtPSBzdzAxICogKHN0ZXAoMC4wLCBneTAxKSAtIDAuNSk7XFxuXFxuICB2ZWM0IGd4MTAgPSBpeHkxMCAvIDcuMDtcXG4gIHZlYzQgZ3kxMCA9IGZsb29yKGd4MTApIC8gNy4wO1xcbiAgdmVjNCBnejEwID0gZmxvb3IoZ3kxMCkgLyA2LjA7XFxuICBneDEwID0gZnJhY3QoZ3gxMCkgLSAwLjU7XFxuICBneTEwID0gZnJhY3QoZ3kxMCkgLSAwLjU7XFxuICBnejEwID0gZnJhY3QoZ3oxMCkgLSAwLjU7XFxuICB2ZWM0IGd3MTAgPSB2ZWM0KDAuNzUpIC0gYWJzKGd4MTApIC0gYWJzKGd5MTApIC0gYWJzKGd6MTApO1xcbiAgdmVjNCBzdzEwID0gc3RlcChndzEwLCB2ZWM0KDAuMCkpO1xcbiAgZ3gxMCAtPSBzdzEwICogKHN0ZXAoMC4wLCBneDEwKSAtIDAuNSk7XFxuICBneTEwIC09IHN3MTAgKiAoc3RlcCgwLjAsIGd5MTApIC0gMC41KTtcXG5cXG4gIHZlYzQgZ3gxMSA9IGl4eTExIC8gNy4wO1xcbiAgdmVjNCBneTExID0gZmxvb3IoZ3gxMSkgLyA3LjA7XFxuICB2ZWM0IGd6MTEgPSBmbG9vcihneTExKSAvIDYuMDtcXG4gIGd4MTEgPSBmcmFjdChneDExKSAtIDAuNTtcXG4gIGd5MTEgPSBmcmFjdChneTExKSAtIDAuNTtcXG4gIGd6MTEgPSBmcmFjdChnejExKSAtIDAuNTtcXG4gIHZlYzQgZ3cxMSA9IHZlYzQoMC43NSkgLSBhYnMoZ3gxMSkgLSBhYnMoZ3kxMSkgLSBhYnMoZ3oxMSk7XFxuICB2ZWM0IHN3MTEgPSBzdGVwKGd3MTEsIHZlYzQoMC4wKSk7XFxuICBneDExIC09IHN3MTEgKiAoc3RlcCgwLjAsIGd4MTEpIC0gMC41KTtcXG4gIGd5MTEgLT0gc3cxMSAqIChzdGVwKDAuMCwgZ3kxMSkgLSAwLjUpO1xcblxcbiAgdmVjNCBnMDAwMCA9IHZlYzQoZ3gwMC54LGd5MDAueCxnejAwLngsZ3cwMC54KTtcXG4gIHZlYzQgZzEwMDAgPSB2ZWM0KGd4MDAueSxneTAwLnksZ3owMC55LGd3MDAueSk7XFxuICB2ZWM0IGcwMTAwID0gdmVjNChneDAwLnosZ3kwMC56LGd6MDAueixndzAwLnopO1xcbiAgdmVjNCBnMTEwMCA9IHZlYzQoZ3gwMC53LGd5MDAudyxnejAwLncsZ3cwMC53KTtcXG4gIHZlYzQgZzAwMTAgPSB2ZWM0KGd4MTAueCxneTEwLngsZ3oxMC54LGd3MTAueCk7XFxuICB2ZWM0IGcxMDEwID0gdmVjNChneDEwLnksZ3kxMC55LGd6MTAueSxndzEwLnkpO1xcbiAgdmVjNCBnMDExMCA9IHZlYzQoZ3gxMC56LGd5MTAueixnejEwLnosZ3cxMC56KTtcXG4gIHZlYzQgZzExMTAgPSB2ZWM0KGd4MTAudyxneTEwLncsZ3oxMC53LGd3MTAudyk7XFxuICB2ZWM0IGcwMDAxID0gdmVjNChneDAxLngsZ3kwMS54LGd6MDEueCxndzAxLngpO1xcbiAgdmVjNCBnMTAwMSA9IHZlYzQoZ3gwMS55LGd5MDEueSxnejAxLnksZ3cwMS55KTtcXG4gIHZlYzQgZzAxMDEgPSB2ZWM0KGd4MDEueixneTAxLnosZ3owMS56LGd3MDEueik7XFxuICB2ZWM0IGcxMTAxID0gdmVjNChneDAxLncsZ3kwMS53LGd6MDEudyxndzAxLncpO1xcbiAgdmVjNCBnMDAxMSA9IHZlYzQoZ3gxMS54LGd5MTEueCxnejExLngsZ3cxMS54KTtcXG4gIHZlYzQgZzEwMTEgPSB2ZWM0KGd4MTEueSxneTExLnksZ3oxMS55LGd3MTEueSk7XFxuICB2ZWM0IGcwMTExID0gdmVjNChneDExLnosZ3kxMS56LGd6MTEueixndzExLnopO1xcbiAgdmVjNCBnMTExMSA9IHZlYzQoZ3gxMS53LGd5MTEudyxnejExLncsZ3cxMS53KTtcXG5cXG4gIHZlYzQgbm9ybTAwID0gdGF5bG9ySW52U3FydF8wKHZlYzQoZG90KGcwMDAwLCBnMDAwMCksIGRvdChnMDEwMCwgZzAxMDApLCBkb3QoZzEwMDAsIGcxMDAwKSwgZG90KGcxMTAwLCBnMTEwMCkpKTtcXG4gIGcwMDAwICo9IG5vcm0wMC54O1xcbiAgZzAxMDAgKj0gbm9ybTAwLnk7XFxuICBnMTAwMCAqPSBub3JtMDAuejtcXG4gIGcxMTAwICo9IG5vcm0wMC53O1xcblxcbiAgdmVjNCBub3JtMDEgPSB0YXlsb3JJbnZTcXJ0XzAodmVjNChkb3QoZzAwMDEsIGcwMDAxKSwgZG90KGcwMTAxLCBnMDEwMSksIGRvdChnMTAwMSwgZzEwMDEpLCBkb3QoZzExMDEsIGcxMTAxKSkpO1xcbiAgZzAwMDEgKj0gbm9ybTAxLng7XFxuICBnMDEwMSAqPSBub3JtMDEueTtcXG4gIGcxMDAxICo9IG5vcm0wMS56O1xcbiAgZzExMDEgKj0gbm9ybTAxLnc7XFxuXFxuICB2ZWM0IG5vcm0xMCA9IHRheWxvckludlNxcnRfMCh2ZWM0KGRvdChnMDAxMCwgZzAwMTApLCBkb3QoZzAxMTAsIGcwMTEwKSwgZG90KGcxMDEwLCBnMTAxMCksIGRvdChnMTExMCwgZzExMTApKSk7XFxuICBnMDAxMCAqPSBub3JtMTAueDtcXG4gIGcwMTEwICo9IG5vcm0xMC55O1xcbiAgZzEwMTAgKj0gbm9ybTEwLno7XFxuICBnMTExMCAqPSBub3JtMTAudztcXG5cXG4gIHZlYzQgbm9ybTExID0gdGF5bG9ySW52U3FydF8wKHZlYzQoZG90KGcwMDExLCBnMDAxMSksIGRvdChnMDExMSwgZzAxMTEpLCBkb3QoZzEwMTEsIGcxMDExKSwgZG90KGcxMTExLCBnMTExMSkpKTtcXG4gIGcwMDExICo9IG5vcm0xMS54O1xcbiAgZzAxMTEgKj0gbm9ybTExLnk7XFxuICBnMTAxMSAqPSBub3JtMTEuejtcXG4gIGcxMTExICo9IG5vcm0xMS53O1xcblxcbiAgZmxvYXQgbjAwMDAgPSBkb3QoZzAwMDAsIFBmMCk7XFxuICBmbG9hdCBuMTAwMCA9IGRvdChnMTAwMCwgdmVjNChQZjEueCwgUGYwLnl6dykpO1xcbiAgZmxvYXQgbjAxMDAgPSBkb3QoZzAxMDAsIHZlYzQoUGYwLngsIFBmMS55LCBQZjAuencpKTtcXG4gIGZsb2F0IG4xMTAwID0gZG90KGcxMTAwLCB2ZWM0KFBmMS54eSwgUGYwLnp3KSk7XFxuICBmbG9hdCBuMDAxMCA9IGRvdChnMDAxMCwgdmVjNChQZjAueHksIFBmMS56LCBQZjAudykpO1xcbiAgZmxvYXQgbjEwMTAgPSBkb3QoZzEwMTAsIHZlYzQoUGYxLngsIFBmMC55LCBQZjEueiwgUGYwLncpKTtcXG4gIGZsb2F0IG4wMTEwID0gZG90KGcwMTEwLCB2ZWM0KFBmMC54LCBQZjEueXosIFBmMC53KSk7XFxuICBmbG9hdCBuMTExMCA9IGRvdChnMTExMCwgdmVjNChQZjEueHl6LCBQZjAudykpO1xcbiAgZmxvYXQgbjAwMDEgPSBkb3QoZzAwMDEsIHZlYzQoUGYwLnh5eiwgUGYxLncpKTtcXG4gIGZsb2F0IG4xMDAxID0gZG90KGcxMDAxLCB2ZWM0KFBmMS54LCBQZjAueXosIFBmMS53KSk7XFxuICBmbG9hdCBuMDEwMSA9IGRvdChnMDEwMSwgdmVjNChQZjAueCwgUGYxLnksIFBmMC56LCBQZjEudykpO1xcbiAgZmxvYXQgbjExMDEgPSBkb3QoZzExMDEsIHZlYzQoUGYxLnh5LCBQZjAueiwgUGYxLncpKTtcXG4gIGZsb2F0IG4wMDExID0gZG90KGcwMDExLCB2ZWM0KFBmMC54eSwgUGYxLnp3KSk7XFxuICBmbG9hdCBuMTAxMSA9IGRvdChnMTAxMSwgdmVjNChQZjEueCwgUGYwLnksIFBmMS56dykpO1xcbiAgZmxvYXQgbjAxMTEgPSBkb3QoZzAxMTEsIHZlYzQoUGYwLngsIFBmMS55encpKTtcXG4gIGZsb2F0IG4xMTExID0gZG90KGcxMTExLCBQZjEpO1xcblxcbiAgdmVjNCBmYWRlX3h5encgPSBmYWRlXzAoUGYwKTtcXG4gIHZlYzQgbl8wdyA9IG1peCh2ZWM0KG4wMDAwLCBuMTAwMCwgbjAxMDAsIG4xMTAwKSwgdmVjNChuMDAwMSwgbjEwMDEsIG4wMTAxLCBuMTEwMSksIGZhZGVfeHl6dy53KTtcXG4gIHZlYzQgbl8xdyA9IG1peCh2ZWM0KG4wMDEwLCBuMTAxMCwgbjAxMTAsIG4xMTEwKSwgdmVjNChuMDAxMSwgbjEwMTEsIG4wMTExLCBuMTExMSksIGZhZGVfeHl6dy53KTtcXG4gIHZlYzQgbl96dyA9IG1peChuXzB3LCBuXzF3LCBmYWRlX3h5encueik7XFxuICB2ZWMyIG5feXp3ID0gbWl4KG5fencueHksIG5fencuencsIGZhZGVfeHl6dy55KTtcXG4gIGZsb2F0IG5feHl6dyA9IG1peChuX3l6dy54LCBuX3l6dy55LCBmYWRlX3h5encueCk7XFxuICByZXR1cm4gMi4yICogbl94eXp3O1xcbn1cXG5cXG4vL1xcdENsYXNzaWMgUGVybGluIDNEIE5vaXNlIFxcbi8vXFx0YnkgU3RlZmFuIEd1c3RhdnNvblxcbi8vXFxudmVjNCBwZXJtdXRlXzEodmVjNCB4KXtyZXR1cm4gbW9kKCgoeCozNC4wKSsxLjApKngsIDI4OS4wKTt9XFxudmVjNCB0YXlsb3JJbnZTcXJ0XzEodmVjNCByKXtyZXR1cm4gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiByO31cXG52ZWMzIGZhZGVfMSh2ZWMzIHQpIHtyZXR1cm4gdCp0KnQqKHQqKHQqNi4wLTE1LjApKzEwLjApO31cXG5cXG5mbG9hdCBwZXJsaW4zZCh2ZWMzIFApXFxue1xcbiAgICB2ZWMzIFBpMCA9IGZsb29yKFApOyAvLyBJbnRlZ2VyIHBhcnQgZm9yIGluZGV4aW5nXFxuICAgIHZlYzMgUGkxID0gUGkwICsgdmVjMygxLjApOyAvLyBJbnRlZ2VyIHBhcnQgKyAxXFxuICAgIFBpMCA9IG1vZChQaTAsIDI4OS4wKTtcXG4gICAgUGkxID0gbW9kKFBpMSwgMjg5LjApO1xcbiAgICB2ZWMzIFBmMCA9IGZyYWN0KFApOyAvLyBGcmFjdGlvbmFsIHBhcnQgZm9yIGludGVycG9sYXRpb25cXG4gICAgdmVjMyBQZjEgPSBQZjAgLSB2ZWMzKDEuMCk7IC8vIEZyYWN0aW9uYWwgcGFydCAtIDEuMFxcbiAgICB2ZWM0IGl4ID0gdmVjNChQaTAueCwgUGkxLngsIFBpMC54LCBQaTEueCk7XFxuICAgIHZlYzQgaXkgPSB2ZWM0KFBpMC55eSwgUGkxLnl5KTtcXG4gICAgdmVjNCBpejAgPSBQaTAuenp6ejtcXG4gICAgdmVjNCBpejEgPSBQaTEuenp6ejtcXG5cXG4gICAgdmVjNCBpeHkgPSBwZXJtdXRlXzEocGVybXV0ZV8xKGl4KSArIGl5KTtcXG4gICAgdmVjNCBpeHkwID0gcGVybXV0ZV8xKGl4eSArIGl6MCk7XFxuICAgIHZlYzQgaXh5MSA9IHBlcm11dGVfMShpeHkgKyBpejEpO1xcblxcbiAgICB2ZWM0IGd4MCA9IGl4eTAgLyA3LjA7XFxuICAgIHZlYzQgZ3kwID0gZnJhY3QoZmxvb3IoZ3gwKSAvIDcuMCkgLSAwLjU7XFxuICAgIGd4MCA9IGZyYWN0KGd4MCk7XFxuICAgIHZlYzQgZ3owID0gdmVjNCgwLjUpIC0gYWJzKGd4MCkgLSBhYnMoZ3kwKTtcXG4gICAgdmVjNCBzejAgPSBzdGVwKGd6MCwgdmVjNCgwLjApKTtcXG4gICAgZ3gwIC09IHN6MCAqIChzdGVwKDAuMCwgZ3gwKSAtIDAuNSk7XFxuICAgIGd5MCAtPSBzejAgKiAoc3RlcCgwLjAsIGd5MCkgLSAwLjUpO1xcblxcbiAgICB2ZWM0IGd4MSA9IGl4eTEgLyA3LjA7XFxuICAgIHZlYzQgZ3kxID0gZnJhY3QoZmxvb3IoZ3gxKSAvIDcuMCkgLSAwLjU7XFxuICAgIGd4MSA9IGZyYWN0KGd4MSk7XFxuICAgIHZlYzQgZ3oxID0gdmVjNCgwLjUpIC0gYWJzKGd4MSkgLSBhYnMoZ3kxKTtcXG4gICAgdmVjNCBzejEgPSBzdGVwKGd6MSwgdmVjNCgwLjApKTtcXG4gICAgZ3gxIC09IHN6MSAqIChzdGVwKDAuMCwgZ3gxKSAtIDAuNSk7XFxuICAgIGd5MSAtPSBzejEgKiAoc3RlcCgwLjAsIGd5MSkgLSAwLjUpO1xcblxcbiAgICB2ZWMzIGcwMDAgPSB2ZWMzKGd4MC54LGd5MC54LGd6MC54KTtcXG4gICAgdmVjMyBnMTAwID0gdmVjMyhneDAueSxneTAueSxnejAueSk7XFxuICAgIHZlYzMgZzAxMCA9IHZlYzMoZ3gwLnosZ3kwLnosZ3owLnopO1xcbiAgICB2ZWMzIGcxMTAgPSB2ZWMzKGd4MC53LGd5MC53LGd6MC53KTtcXG4gICAgdmVjMyBnMDAxID0gdmVjMyhneDEueCxneTEueCxnejEueCk7XFxuICAgIHZlYzMgZzEwMSA9IHZlYzMoZ3gxLnksZ3kxLnksZ3oxLnkpO1xcbiAgICB2ZWMzIGcwMTEgPSB2ZWMzKGd4MS56LGd5MS56LGd6MS56KTtcXG4gICAgdmVjMyBnMTExID0gdmVjMyhneDEudyxneTEudyxnejEudyk7XFxuXFxuICAgIHZlYzQgbm9ybTAgPSB0YXlsb3JJbnZTcXJ0XzEodmVjNChkb3QoZzAwMCwgZzAwMCksIGRvdChnMDEwLCBnMDEwKSwgZG90KGcxMDAsIGcxMDApLCBkb3QoZzExMCwgZzExMCkpKTtcXG4gICAgZzAwMCAqPSBub3JtMC54O1xcbiAgICBnMDEwICo9IG5vcm0wLnk7XFxuICAgIGcxMDAgKj0gbm9ybTAuejtcXG4gICAgZzExMCAqPSBub3JtMC53O1xcbiAgICB2ZWM0IG5vcm0xID0gdGF5bG9ySW52U3FydF8xKHZlYzQoZG90KGcwMDEsIGcwMDEpLCBkb3QoZzAxMSwgZzAxMSksIGRvdChnMTAxLCBnMTAxKSwgZG90KGcxMTEsIGcxMTEpKSk7XFxuICAgIGcwMDEgKj0gbm9ybTEueDtcXG4gICAgZzAxMSAqPSBub3JtMS55O1xcbiAgICBnMTAxICo9IG5vcm0xLno7XFxuICAgIGcxMTEgKj0gbm9ybTEudztcXG5cXG4gICAgZmxvYXQgbjAwMCA9IGRvdChnMDAwLCBQZjApO1xcbiAgICBmbG9hdCBuMTAwID0gZG90KGcxMDAsIHZlYzMoUGYxLngsIFBmMC55eikpO1xcbiAgICBmbG9hdCBuMDEwID0gZG90KGcwMTAsIHZlYzMoUGYwLngsIFBmMS55LCBQZjAueikpO1xcbiAgICBmbG9hdCBuMTEwID0gZG90KGcxMTAsIHZlYzMoUGYxLnh5LCBQZjAueikpO1xcbiAgICBmbG9hdCBuMDAxID0gZG90KGcwMDEsIHZlYzMoUGYwLnh5LCBQZjEueikpO1xcbiAgICBmbG9hdCBuMTAxID0gZG90KGcxMDEsIHZlYzMoUGYxLngsIFBmMC55LCBQZjEueikpO1xcbiAgICBmbG9hdCBuMDExID0gZG90KGcwMTEsIHZlYzMoUGYwLngsIFBmMS55eikpO1xcbiAgICBmbG9hdCBuMTExID0gZG90KGcxMTEsIFBmMSk7XFxuXFxuICAgIHZlYzMgZmFkZV94eXogPSBmYWRlXzEoUGYwKTtcXG4gICAgdmVjNCBuX3ogPSBtaXgodmVjNChuMDAwLCBuMTAwLCBuMDEwLCBuMTEwKSwgdmVjNChuMDAxLCBuMTAxLCBuMDExLCBuMTExKSwgZmFkZV94eXoueik7XFxuICAgIHZlYzIgbl95eiA9IG1peChuX3oueHksIG5fei56dywgZmFkZV94eXoueSk7XFxuICAgIGZsb2F0IG5feHl6ID0gbWl4KG5feXoueCwgbl95ei55LCBmYWRlX3h5ei54KTsgXFxuICAgIHJldHVybiAyLjIgKiBuX3h5ejtcXG59XFxuXFxudmVjMyBnZXREaXNwbGFjZWRQb3NpdGlvbih2ZWMzIF9wb3NpdGlvbilcXG57XFxuICAgIHZlYzMgZGlzdG9yZWRQb3NpdGlvbiA9IF9wb3NpdGlvbjtcXG4gICAgZGlzdG9yZWRQb3NpdGlvbiArPSBwZXJsaW40ZCh2ZWM0KGRpc3RvcmVkUG9zaXRpb24gKiB1RGlzdG9ydGlvbkZyZXF1ZW5jeSArIHVPZmZzZXQsIHVUaW1lKSkgKiB1RGlzdG9ydGlvblN0cmVuZ3RoO1xcblxcbiAgICBmbG9hdCBwZXJsaW5TdHJlbmd0aCA9IHBlcmxpbjRkKHZlYzQoZGlzdG9yZWRQb3NpdGlvbiAqIHVEaXNwbGFjZW1lbnRGcmVxdWVuY3kgKyB1T2Zmc2V0LCB1VGltZSkpO1xcbiAgICBcXG4gICAgdmVjMyBkaXNwbGFjZWRQb3NpdGlvbiA9IF9wb3NpdGlvbjtcXG4gICAgZGlzcGxhY2VkUG9zaXRpb24gKz0gbm9ybWFsaXplKF9wb3NpdGlvbikgKiBwZXJsaW5TdHJlbmd0aCAqIHVEaXNwbGFjZW1lbnRTdHJlbmd0aDtcXG5cXG4gICAgcmV0dXJuIGRpc3BsYWNlZFBvc2l0aW9uO1xcbn1cXG5cXG52b2lkIG1haW4oKVxcbntcXG4gICAgLy8gUG9zaXRpb25cXG4gICAgdmVjMyBkaXNwbGFjZWRQb3NpdGlvbiA9IGdldERpc3BsYWNlZFBvc2l0aW9uKHBvc2l0aW9uKTtcXG4gICAgdmVjNCB2aWV3UG9zaXRpb24gPSB2aWV3TWF0cml4ICogdmVjNChkaXNwbGFjZWRQb3NpdGlvbiwgMS4wKTtcXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogdmlld1Bvc2l0aW9uO1xcblxcbiAgICAvLyBCaSB0YW5nZW50c1xcbiAgICBmbG9hdCBkaXN0YW5jZUEgPSAoTV9QSSAqIDIuMCkgLyB1U3ViZGl2aXNpb24ueDtcXG4gICAgZmxvYXQgZGlzdGFuY2VCID0gTV9QSSAvIHVTdWJkaXZpc2lvbi54O1xcblxcbiAgICB2ZWMzIGJpVGFuZ2VudCA9IGNyb3NzKG5vcm1hbCwgdGFuZ2VudC54eXopO1xcblxcbiAgICB2ZWMzIHBvc2l0aW9uQSA9IHBvc2l0aW9uICsgdGFuZ2VudC54eXogKiBkaXN0YW5jZUE7XFxuICAgIHZlYzMgZGlzcGxhY2VkUG9zaXRpb25BID0gZ2V0RGlzcGxhY2VkUG9zaXRpb24ocG9zaXRpb25BKTtcXG5cXG4gICAgdmVjMyBwb3NpdGlvbkIgPSBwb3NpdGlvbiArIGJpVGFuZ2VudC54eXogKiBkaXN0YW5jZUI7XFxuICAgIHZlYzMgZGlzcGxhY2VkUG9zaXRpb25CID0gZ2V0RGlzcGxhY2VkUG9zaXRpb24ocG9zaXRpb25CKTtcXG5cXG4gICAgdmVjMyBjb21wdXRlZE5vcm1hbCA9IGNyb3NzKGRpc3BsYWNlZFBvc2l0aW9uQSAtIGRpc3BsYWNlZFBvc2l0aW9uLnh5eiwgZGlzcGxhY2VkUG9zaXRpb25CIC0gZGlzcGxhY2VkUG9zaXRpb24ueHl6KTtcXG4gICAgY29tcHV0ZWROb3JtYWwgPSBub3JtYWxpemUoY29tcHV0ZWROb3JtYWwpO1xcblxcbiAgICAvLyBGcmVzbmVsXFxuICAgIHZlYzMgdmlld0RpcmVjdGlvbiA9IG5vcm1hbGl6ZShkaXNwbGFjZWRQb3NpdGlvbi54eXogLSBjYW1lcmFQb3NpdGlvbik7XFxuICAgIGZsb2F0IGZyZXNuZWwgPSB1RnJlc25lbE9mZnNldCArICgxLjAgKyBkb3Qodmlld0RpcmVjdGlvbiwgY29tcHV0ZWROb3JtYWwpKSAqIHVGcmVzbmVsTXVsdGlwbGllcjtcXG4gICAgZnJlc25lbCA9IHBvdyhtYXgoMC4wLCBmcmVzbmVsKSwgdUZyZXNuZWxQb3dlcik7XFxuXFxuICAgIC8vIENvbG9yXFxuICAgIGZsb2F0IGxpZ2h0QUludGVuc2l0eSA9IG1heCgwLjAsIC0gZG90KGNvbXB1dGVkTm9ybWFsLnh5eiwgbm9ybWFsaXplKC0gdUxpZ2h0QVBvc2l0aW9uKSkpICogdUxpZ2h0QUludGVuc2l0eTtcXG4gICAgZmxvYXQgbGlnaHRCSW50ZW5zaXR5ID0gbWF4KDAuMCwgLSBkb3QoY29tcHV0ZWROb3JtYWwueHl6LCBub3JtYWxpemUoLSB1TGlnaHRCUG9zaXRpb24pKSkgKiB1TGlnaHRCSW50ZW5zaXR5O1xcblxcbiAgICB2ZWMzIGNvbG9yID0gdmVjMygwLjApO1xcbiAgICBjb2xvciA9IG1peChjb2xvciwgdUxpZ2h0QUNvbG9yLCBsaWdodEFJbnRlbnNpdHkgKiBmcmVzbmVsKTtcXG4gICAgY29sb3IgPSBtaXgoY29sb3IsIHVMaWdodEJDb2xvciwgbGlnaHRCSW50ZW5zaXR5ICogZnJlc25lbCk7XFxuICAgIGNvbG9yID0gbWl4KGNvbG9yLCB2ZWMzKDEuMCksIGNsYW1wKHBvdyhtYXgoMC4wLCBmcmVzbmVsIC0gMC44KSwgMy4wKSwgMC4wLCAxLjApKTtcXG5cXG4gICAgLy8gVmFyeWluZ1xcbiAgICB2Q29sb3IgPSBjb2xvcjtcXG59XCI7IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNtT2JqID0ge1xyXG4gICAgY2FtZXJhIDogbnVsbCxcclxuICAgIGluaXRDYW1lcmEgOiAoKSA9PiB7XHJcbiAgICAgICAgY21PYmouY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCAod2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQpLDAuMSwxMDAwKTtcclxuICAgICAgICBjbU9iai5jYW1lcmEucG9zaXRpb24uc2V0KCAwLCAwLjIgLCAwLjggKTtcclxuICAgICAgICBjbU9iai5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKC0wLjgsMCwwKSk7XHJcbiAgICB9XHJcbn07XHJcbmNtT2JqLmluaXRDYW1lcmEoKTtcclxuIiwiaW1wb3J0IHtQb2ludGVyTG9ja0NvbnRyb2xzfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvUG9pbnRlckxvY2tDb250cm9scydcclxuaW1wb3J0IHsgY21PYmogfSBmcm9tICcuL0NhbWVyYS5qcyc7XHJcbmltcG9ydCB7IHJkT2JqIH0gZnJvbSAnLi9SZW5kZXJlci5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY3RybE9iaiA9IHtcclxuICAgIGNvbnRyb2xzOm51bGwsXHJcbiAgICBpbml0Q29udHJvbHMgOiAoKT0+e1xyXG4gICAgICAgIGN0cmxPYmouY29udHJvbHMgPSBuZXcgUG9pbnRlckxvY2tDb250cm9scyhjbU9iai5jYW1lcmEscmRPYmoucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgICAgY3RybE9iai5jb250cm9scy5tb3ZlbWVudFNwZWVkID0gMTUwO1xyXG4gICAgICAgIGN0cmxPYmouY29udHJvbHMubG9va1NwZWVkID0gMC4xO1xyXG5cclxuICAgICAgICAvKmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaW4gZXZlbnQgbGlzdGVuZXIgZSA9JyxlLmRlbHRhWSApXHJcbiAgICAgICAgICAgIGlmIChlLmRlbHRhWSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGN0cmxPYmouY29udHJvbHMubW92ZUZvcndhcmQoNSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLmRlbHRhWSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGN0cmxPYmouY29udHJvbHMubW92ZUZvcndhcmQoLTUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT0gXCJ3XCIpIHtcclxuICAgICAgICAgICAgICAgIGN0cmxPYmouY29udHJvbHMubW92ZUZvcndhcmQoMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLmtleSA9PSBcInNcIikge1xyXG4gICAgICAgICAgICAgICAgY3RybE9iai5jb250cm9scy5tb3ZlRm9yd2FyZCgtMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7Ki9cclxuICAgIH0sXHJcbn07XHJcbmN0cmxPYmouaW5pdENvbnRyb2xzKCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Ncclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSB7fVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmJhc2UgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT25cclxuICAgICAqL1xyXG4gICAgb24oX25hbWVzLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG5cclxuICAgICAgICAvLyBFcnJvcnNcclxuICAgICAgICBpZih0eXBlb2YgX25hbWVzID09PSAndW5kZWZpbmVkJyB8fCBfbmFtZXMgPT09ICcnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCd3cm9uZyBuYW1lcycpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignd3JvbmcgY2FsbGJhY2snKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc29sdmUgbmFtZXNcclxuICAgICAgICBjb25zdCBuYW1lcyA9IHRoaXMucmVzb2x2ZU5hbWVzKF9uYW1lcylcclxuXHJcbiAgICAgICAgLy8gRWFjaCBuYW1lXHJcbiAgICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihfbmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFJlc29sdmUgbmFtZVxyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGhhdC5yZXNvbHZlTmFtZShfbmFtZSlcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBuYW1lc3BhY2UgaWYgbm90IGV4aXN0XHJcbiAgICAgICAgICAgIGlmKCEodGhhdC5jYWxsYmFja3NbIG5hbWUubmFtZXNwYWNlIF0gaW5zdGFuY2VvZiBPYmplY3QpKVxyXG4gICAgICAgICAgICAgICAgdGhhdC5jYWxsYmFja3NbIG5hbWUubmFtZXNwYWNlIF0gPSB7fVxyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGNhbGxiYWNrIGlmIG5vdCBleGlzdFxyXG4gICAgICAgICAgICBpZighKHRoYXQuY2FsbGJhY2tzWyBuYW1lLm5hbWVzcGFjZSBdWyBuYW1lLnZhbHVlIF0gaW5zdGFuY2VvZiBBcnJheSkpXHJcbiAgICAgICAgICAgICAgICB0aGF0LmNhbGxiYWNrc1sgbmFtZS5uYW1lc3BhY2UgXVsgbmFtZS52YWx1ZSBdID0gW11cclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBjYWxsYmFja1xyXG4gICAgICAgICAgICB0aGF0LmNhbGxiYWNrc1sgbmFtZS5uYW1lc3BhY2UgXVsgbmFtZS52YWx1ZSBdLnB1c2goY2FsbGJhY2spXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9mZlxyXG4gICAgICovXHJcbiAgICBvZmYoX25hbWVzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcblxyXG4gICAgICAgIC8vIEVycm9yc1xyXG4gICAgICAgIGlmKHR5cGVvZiBfbmFtZXMgPT09ICd1bmRlZmluZWQnIHx8IF9uYW1lcyA9PT0gJycpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dyb25nIG5hbWUnKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc29sdmUgbmFtZXNcclxuICAgICAgICBjb25zdCBuYW1lcyA9IHRoaXMucmVzb2x2ZU5hbWVzKF9uYW1lcylcclxuXHJcbiAgICAgICAgLy8gRWFjaCBuYW1lXHJcbiAgICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihfbmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIFJlc29sdmUgbmFtZVxyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGhhdC5yZXNvbHZlTmFtZShfbmFtZSlcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBuYW1lc3BhY2VcclxuICAgICAgICAgICAgaWYobmFtZS5uYW1lc3BhY2UgIT09ICdiYXNlJyAmJiBuYW1lLnZhbHVlID09PSAnJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoYXQuY2FsbGJhY2tzWyBuYW1lLm5hbWVzcGFjZSBdXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBzcGVjaWZpYyBjYWxsYmFjayBpbiBuYW1lc3BhY2VcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICBpZihuYW1lLm5hbWVzcGFjZSA9PT0gJ2Jhc2UnKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0byByZW1vdmUgZnJvbSBlYWNoIG5hbWVzcGFjZVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBuYW1lc3BhY2UgaW4gdGhhdC5jYWxsYmFja3MpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGF0LmNhbGxiYWNrc1sgbmFtZXNwYWNlIF0gaW5zdGFuY2VvZiBPYmplY3QgJiYgdGhhdC5jYWxsYmFja3NbIG5hbWVzcGFjZSBdWyBuYW1lLnZhbHVlIF0gaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoYXQuY2FsbGJhY2tzWyBuYW1lc3BhY2UgXVsgbmFtZS52YWx1ZSBdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIG5hbWVzcGFjZSBpZiBlbXB0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoT2JqZWN0LmtleXModGhhdC5jYWxsYmFja3NbIG5hbWVzcGFjZSBdKS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoYXQuY2FsbGJhY2tzWyBuYW1lc3BhY2UgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNwZWNpZmllZCBuYW1lc3BhY2VcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhhdC5jYWxsYmFja3NbIG5hbWUubmFtZXNwYWNlIF0gaW5zdGFuY2VvZiBPYmplY3QgJiYgdGhhdC5jYWxsYmFja3NbIG5hbWUubmFtZXNwYWNlIF1bIG5hbWUudmFsdWUgXSBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGF0LmNhbGxiYWNrc1sgbmFtZS5uYW1lc3BhY2UgXVsgbmFtZS52YWx1ZSBdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBuYW1lc3BhY2UgaWYgZW1wdHlcclxuICAgICAgICAgICAgICAgICAgICBpZihPYmplY3Qua2V5cyh0aGF0LmNhbGxiYWNrc1sgbmFtZS5uYW1lc3BhY2UgXSkubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhhdC5jYWxsYmFja3NbIG5hbWUubmFtZXNwYWNlIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VyXHJcbiAgICAgKi9cclxuICAgIHRyaWdnZXIoX25hbWUsIF9hcmdzKVxyXG4gICAge1xyXG4gICAgICAgIC8vIEVycm9yc1xyXG4gICAgICAgIGlmKHR5cGVvZiBfbmFtZSA9PT0gJ3VuZGVmaW5lZCcgfHwgX25hbWUgPT09ICcnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCd3cm9uZyBuYW1lJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgICAgIGxldCBmaW5hbFJlc3VsdCA9IG51bGxcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbFxyXG5cclxuICAgICAgICAvLyBEZWZhdWx0IGFyZ3NcclxuICAgICAgICBjb25zdCBhcmdzID0gIShfYXJncyBpbnN0YW5jZW9mIEFycmF5KSA/IFtdIDogX2FyZ3NcclxuXHJcbiAgICAgICAgLy8gUmVzb2x2ZSBuYW1lcyAoc2hvdWxkIG9uIGhhdmUgb25lIGV2ZW50KVxyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5yZXNvbHZlTmFtZXMoX25hbWUpXHJcblxyXG4gICAgICAgIC8vIFJlc29sdmUgbmFtZVxyXG4gICAgICAgIG5hbWUgPSB0aGlzLnJlc29sdmVOYW1lKG5hbWVbIDAgXSlcclxuXHJcbiAgICAgICAgLy8gRGVmYXVsdCBuYW1lc3BhY2VcclxuICAgICAgICBpZihuYW1lLm5hbWVzcGFjZSA9PT0gJ2Jhc2UnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gVHJ5IHRvIGZpbmQgY2FsbGJhY2sgaW4gZWFjaCBuYW1lc3BhY2VcclxuICAgICAgICAgICAgZm9yKGNvbnN0IG5hbWVzcGFjZSBpbiB0aGF0LmNhbGxiYWNrcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhhdC5jYWxsYmFja3NbIG5hbWVzcGFjZSBdIGluc3RhbmNlb2YgT2JqZWN0ICYmIHRoYXQuY2FsbGJhY2tzWyBuYW1lc3BhY2UgXVsgbmFtZS52YWx1ZSBdIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jYWxsYmFja3NbIG5hbWVzcGFjZSBdWyBuYW1lLnZhbHVlIF0uZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KHRoYXQsIGFyZ3MpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgZmluYWxSZXN1bHQgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFJlc3VsdCA9IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3BlY2lmaWVkIG5hbWVzcGFjZVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5jYWxsYmFja3NbIG5hbWUubmFtZXNwYWNlIF0gaW5zdGFuY2VvZiBPYmplY3QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihuYW1lLnZhbHVlID09PSAnJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd3cm9uZyBuYW1lJylcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoYXQuY2FsbGJhY2tzWyBuYW1lLm5hbWVzcGFjZSBdWyBuYW1lLnZhbHVlIF0uZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2suYXBwbHkodGhhdCwgYXJncylcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgZmluYWxSZXN1bHQgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsUmVzdWx0ID0gcmVzdWx0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmluYWxSZXN1bHRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc29sdmUgbmFtZXNcclxuICAgICAqL1xyXG4gICAgcmVzb2x2ZU5hbWVzKF9uYW1lcylcclxuICAgIHtcclxuICAgICAgICBsZXQgbmFtZXMgPSBfbmFtZXNcclxuICAgICAgICBuYW1lcyA9IG5hbWVzLnJlcGxhY2UoL1teYS16QS1aMC05ICwvLl0vZywgJycpXHJcbiAgICAgICAgbmFtZXMgPSBuYW1lcy5yZXBsYWNlKC9bLC9dKy9nLCAnICcpXHJcbiAgICAgICAgbmFtZXMgPSBuYW1lcy5zcGxpdCgnICcpXHJcblxyXG4gICAgICAgIHJldHVybiBuYW1lc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzb2x2ZSBuYW1lXHJcbiAgICAgKi9cclxuICAgIHJlc29sdmVOYW1lKG5hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IHt9XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KCcuJylcclxuXHJcbiAgICAgICAgbmV3TmFtZS5vcmlnaW5hbCAgPSBuYW1lXHJcbiAgICAgICAgbmV3TmFtZS52YWx1ZSAgICAgPSBwYXJ0c1sgMCBdXHJcbiAgICAgICAgbmV3TmFtZS5uYW1lc3BhY2UgPSAnYmFzZScgLy8gQmFzZSBuYW1lc3BhY2VcclxuXHJcbiAgICAgICAgLy8gU3BlY2lmaWVkIG5hbWVzcGFjZVxyXG4gICAgICAgIGlmKHBhcnRzLmxlbmd0aCA+IDEgJiYgcGFydHNbIDEgXSAhPT0gJycpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuZXdOYW1lLm5hbWVzcGFjZSA9IHBhcnRzWyAxIF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdOYW1lXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBwYXJhbXMgPSB7XHJcbiAgY291bnQ6IDIwMDAwMCxcclxuICBzaXplOiAwLjAxLFxyXG4gIHJhZGl1czogMTAsXHJcbiAgYnJhbmNoZXM6IDQsXHJcbiAgc3BpbjogMC41LFxyXG4gIHJhbmRvbUFtcGxpdHVkZTogMSxcclxuICBpbnNpZGVDb2xvcjogXCIjZmY2MDMwXCIsXHJcbiAgb3V0c2lkZUNvbG9yOiBcIiMxYjM5ODRcIixcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVNpZ24oKSB7XHJcbiAgbGV0IHNpZ24gPSBNYXRoLnJhbmRvbSgpIC0gMC41O1xyXG4gIGlmIChzaWduID49IDApIHtcclxuICAgIHJldHVybiAoc2lnbiA9IDEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKHNpZ24gPSAtMSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVHYWxheHkoKSB7XHJcbiAgbGV0IGdlb21ldHJ5ID0gbnVsbDtcclxuICBsZXQgbWF0ZXJpYWwgPSBudWxsO1xyXG4gIGxldCBwb2ludHMgPSBudWxsO1xyXG5cclxuICBpZiAocG9pbnRzKSB7XHJcbiAgICBzY2VuZS5yZW1vdmUocG9pbnRzKTtcclxuICAgIG1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgIGdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XHJcbiAgdmFyIHRleHR1cmUgPSBsb2FkZXIubG9hZChcIi4vYXNzZXRzL2ltZy9kaXNjZy5wbmdcIik7XHJcblxyXG4gIC8vIFNldHRpbmcgdXAgZmV3IHZhcmlhYmxlcyBmb3IgdGhlIG1haW4gbG9vcFxyXG4gIGNvbnN0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcclxuICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHBhcmFtcy5jb3VudCAqIDMpO1xyXG4gIGNvbnN0IGNvbG9ycyA9IG5ldyBGbG9hdDMyQXJyYXkocGFyYW1zLmNvdW50ICogMyk7XHJcblxyXG4gIGNvbnN0IGNvbG9ySW5zaWRlID0gbmV3IFRIUkVFLkNvbG9yKHBhcmFtcy5pbnNpZGVDb2xvcik7XHJcbiAgY29uc3QgY29sb3JPdXRzaWRlID0gbmV3IFRIUkVFLkNvbG9yKHBhcmFtcy5vdXRzaWRlQ29sb3IpO1xyXG5cclxuICAvLyBHYWxheHkgcG9pbnQgaW5zdGFuY2lhdGlvbiBhbmQgcG9zaXRpb25pbmdcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtcy5jb3VudDsgaSsrKSB7XHJcbiAgICBjb25zdCBpMyA9IGkgKiAzO1xyXG4gICAgLy9TZWxlY3QgYSByYW5kb20gcmFkaXVzIGZvciBwb2ludCBpXHJcbiAgICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHBhcmFtcy5yYWRpdXM7XHJcblxyXG4gICAgLy9naXZlIGNvbG9yIHRvIHRoZSBwb2ludCBpIGZ1bmN0aW9uIG9mIHJhZGl1c1xyXG4gICAgY29uc3QgbWl4ZWRDb2xvciA9IGNvbG9ySW5zaWRlLmNsb25lKCk7XHJcbiAgICBtaXhlZENvbG9yLmxlcnAoY29sb3JPdXRzaWRlLCByIC8gcGFyYW1zLnJhZGl1cyk7XHJcbiAgICBjb2xvcnNbaTNdID0gbWl4ZWRDb2xvci5yO1xyXG4gICAgY29sb3JzW2kzICsgMV0gPSBtaXhlZENvbG9yLmc7XHJcbiAgICBjb2xvcnNbaTMgKyAyXSA9IG1peGVkQ29sb3IuYjtcclxuXHJcbiAgICAvL3JhbmRvbWl6YXRpb24gb2YgWCBZIFogY29vcmRpbmF0ZXMgd2l0aCBhbiBhbXBsaXR1ZGVcclxuICAgIGxldCBzaWduID0gcmFuZG9tU2lnbigpO1xyXG4gICAgY29uc3QgcmFuZG9tWCA9IHNpZ24gKiBNYXRoLnJhbmRvbSgpICogcGFyYW1zLnJhbmRvbUFtcGxpdHVkZTtcclxuXHJcbiAgICBzaWduID0gcmFuZG9tU2lnbigpO1xyXG4gICAgY29uc3QgcmFuZG9tWSA9IHNpZ24gKiBNYXRoLnJhbmRvbSgpICogcGFyYW1zLnJhbmRvbUFtcGxpdHVkZTtcclxuXHJcbiAgICBzaWduID0gcmFuZG9tU2lnbigpO1xyXG4gICAgY29uc3QgcmFuZG9tWiA9IHNpZ24gKiBNYXRoLnJhbmRvbSgpICogcGFyYW1zLnJhbmRvbUFtcGxpdHVkZTtcclxuXHJcbiAgICAvL1NlbGVjdGluZyB3aWNoIGJyYW5jaGVzIG9mIHRoZSBnYWxheGllIHRoZSBwb2ludCBzaG91bGQgYmVcclxuICAgIGNvbnN0IGJyYW5jaEluZGV4ID0gaSAlIHBhcmFtcy5icmFuY2hlcztcclxuICAgIGNvbnN0IGJyYW5jaEFuZ2xlID0gYnJhbmNoSW5kZXggLyBwYXJhbXMuYnJhbmNoZXM7XHJcbiAgICBjb25zdCByb3RhdGlvbiA9IGJyYW5jaEFuZ2xlICogTWF0aC5QSSAqIDI7XHJcbiAgICBjb25zdCBzcGluQW5nbGUgPSByICogcGFyYW1zLnNwaW47XHJcblxyXG4gICAgLy9jb21wdXRpbmcgdGhlIHZhbHVlIFggWSBaIG9mIHRoZSBnaXZlbiBwb2ludCB0aG9zZSDDqXF1YXRpb24gd2lsbCBtb2RpZnkgdGhlIHNoYXBlIG9mIG91ciBnYWxheHlcclxuICAgIC8vIFggYW5kIFogc2hvdWxkIGJlIG9uIGEgbG9nYXJpdGhtaXF1ZSBzcGlyYWxlIHdoZXJlIHIgPSBhKmV4cCggayAqIHBzeSlcclxuICAgIC8vc28gYmFzaWNhbHkgd2UgZ2V0IHRob3NlIGVxdWF0aW9uc1xyXG4gICAgY29uc3QgYSA9IDI7XHJcbiAgICBjb25zdCBwc3kgPSByb3RhdGlvbiArIHNwaW5BbmdsZTtcclxuICAgIGNvbnN0IGsgPSAwLjAwNTtcclxuICAgIGNvbnN0IGxpbmVhclJhbmRvbSA9IDE7XHJcbiAgICBwb3NpdGlvbnNbaTNdID1cclxuICAgICAgciAqIChhICogTWF0aC5leHAoayAqIHBzeSkgKiBNYXRoLmNvcyhwc3kpICsgcmFuZG9tWCAqIGxpbmVhclJhbmRvbSk7XHJcbiAgICBwb3NpdGlvbnNbaTMgKyAyXSA9XHJcbiAgICAgIHIgKiAoYSAqIE1hdGguZXhwKGsgKiBwc3kpICogTWF0aC5zaW4ocHN5KSArIHJhbmRvbVogKiBsaW5lYXJSYW5kb20pO1xyXG5cclxuICAgIC8vWSBheGlzIHNob3VsZCBiZSBvbiBhIGZsYXQgZ2F1c3NpYW4gc2hhcGUgZXF1YXRpb24geT0gQSAqICgxIC8gKHRoZXRhICogTWF0aC5zcXJ0KDIgKiBNYXRoLlBJKSkpKmV4cCggLShyKnIpLyh0aGV0YSp0aGV0YSkpXHJcbiAgICBjb25zdCB0aGV0YSA9IDU7XHJcbiAgICBjb25zdCBBID0gMzA7XHJcbiAgICBjb25zdCBleHBvID1cclxuICAgICAgKDEgLyAodGhldGEgKiBNYXRoLnNxcnQoMiAqIE1hdGguUEkpKSkgKlxyXG4gICAgICBNYXRoLmV4cCgoLTAuNSAqIChyICogcikpIC8gKHRoZXRhICogdGhldGEpKTtcclxuICAgIHNpZ24gPSByYW5kb21TaWduKCk7XHJcbiAgICBwb3NpdGlvbnNbaTMgKyAxXSA9IHNpZ24gKiBBICogZXhwbyAqIHJhbmRvbVkgKyByYW5kb21ZO1xyXG4gIH1cclxuXHJcbiAgLy8gQnJhbmNoZXNcclxuICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgMykpO1xyXG4gIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3JzLCAzKSk7XHJcblxyXG4gIG1hdGVyaWFsID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKHtcclxuICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgY29sb3I6IFwiIzYzNTllZVwiLFxyXG4gICAgbWFwOiB0ZXh0dXJlLFxyXG4gICAgc2l6ZTogcGFyYW1zLnNpemUsXHJcbiAgICBzaXplQXR0ZW51YXRpb246IHRydWUsXHJcbiAgICBkZXB0aFdyaXRlOiBmYWxzZSxcclxuICAgIGJsZW5kaW5nOiBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgdmVydGV4Q29sb3JzOiB0cnVlLFxyXG4gIH0pO1xyXG4gIHBvaW50cyA9IG5ldyBUSFJFRS5Qb2ludHMoZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICBncm91cC5hZGQocG9pbnRzKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJnZW5lcmF0ZUdhbGF4eVwiKTtcclxuICByZXR1cm4gZ3JvdXA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnYWxheHlSZW5kZXIoKSB7fVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vKmNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XHJcblxyXG52YXIgdGV4dHVyZSA9IGxvYWRlci5sb2FkKCAnc21va2UucG5nJyk7XHJcblxyXG5jb25zdCBjbG91ZEdlbyA9IG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KCAzMDAsIDMwMCApO1xyXG5cclxuY29uc3QgY2xvdWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKCB7IFxyXG4gICAgYWxwaGFNYXAgOiB0ZXh0dXJlLFxyXG4gICAgdHJhbnNwYXJlbnQgOiB0cnVlICxcclxuICAgIHNpZGU6IERvdWJsZVNpZGUsXHJcbiAgICBjb2xvciA6MHhmZmZmZmZcclxufSApO1xyXG5cclxubGV0IGNsb3VkUGFydGljbGVzID0gW11cclxuZm9yKGxldCBwPTA7IHA8NTA7IHArKykge1xyXG4gICAgbGV0IGNsb3VkID0gbmV3IFRIUkVFLk1lc2goY2xvdWRHZW8sY2xvdWRNYXRlcmlhbCk7XHJcbiAgICAvL2Nsb3VkLmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgLy9jbG91ZC5zY2FsZS5zZXQoMzAwLDMwMCwxKTsgLy9USFJFRS5WZWN0b3IzKDUwMCw1MDAsMCk7XHJcbiAgICBcclxuICAgIGNsb3VkLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcclxuICAgIGlmKHA+MCl7Y2xvdWQucm90YXRpb24ueCA9IGNsb3VkUGFydGljbGVzW3AtMV0ucm90YXRpb24ueCsrO31cclxuICAgIGVsc2V7Y2xvdWQucm90YXRpb24ueCA9IDEuMX07XHJcbiAgICAvL2Nsb3VkLnJvdGF0aW9uLnogPSBNYXRoLnJhbmRvbSgpKjIqTWF0aC5QSTtcclxuICAgIGNsb3VkLm1hdGVyaWFsLm9wYWNpdHkgPSAwLjc1O1xyXG4gICAgY2xvdWRQYXJ0aWNsZXMucHVzaChjbG91ZCk7XHJcbiAgICBzY09iai5zY2VuZS5hZGQoY2xvdWQpO1xyXG4gICAgY2xvdWRQYXJ0aWNsZXMucHVzaChjbG91ZCk7XHJcbn07XHJcbmNsb3VkUGFydGljbGVzLmZvckVhY2goIHAgPT4ge1xyXG4gICAgcC5yb3RhdGlvbi56IC09IDAuMDAxO1xyXG4gICAgfSApKi9cclxuXHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG4vL2ltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4vRXhwZXJpZW5jZSdcclxuaW1wb3J0IHZlcnRleFNoYWRlciBmcm9tICcuLi9zaGFkZXJzL3NwaGVyZS92ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdtZW50U2hhZGVyIGZyb20gJy4uL3NoYWRlcnMvc3BoZXJlL2ZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCBUaW1lIGZyb20gJy4vVGltZS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5ldFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSlcclxuICAgIHtcclxuICAgICAgICAvL3RoaXMuZXhwZXJpZW5jZSA9IG5ldyBFeHBlcmllbmNlKClcclxuICAgICAgICAvL3RoaXMuZGVidWcgPSB0aGlzLmV4cGVyaWVuY2UuZGVidWdcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmVcclxuICAgICAgICB0aGlzLnRpbWUgPSBuZXcgVGltZSgpXHJcbiAgICAgICAgLy90aGlzLm1pY3JvcGhvbmUgPSB0aGlzLmV4cGVyaWVuY2UubWljcm9waG9uZVxyXG5cclxuICAgICAgICB0aGlzLnRpbWVGcmVxdWVuY3kgPSAwLjAwMDNcclxuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lID0gMFxyXG5cclxuICAgICAgICBpZih0aGlzLmRlYnVnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0ZvbGRlciA9IHRoaXMuZGVidWcuYWRkRm9sZGVyKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnc3BoZXJlJyxcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlYnVnRm9sZGVyLmFkZElucHV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICd0aW1lRnJlcXVlbmN5JyxcclxuICAgICAgICAgICAgICAgIHsgbWluOiAwLCBtYXg6IDAuMDAxLCBzdGVwOiAwLjAwMDAwMSB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRWYXJpYXRpb25zKClcclxuICAgICAgICB0aGlzLnNldEdlb21ldHJ5KClcclxuICAgICAgICB0aGlzLnNldExpZ2h0cygpXHJcbiAgICAgICAgdGhpcy5zZXRPZmZzZXQoKVxyXG4gICAgICAgIHRoaXMuc2V0TWF0ZXJpYWwoKVxyXG4gICAgICAgIHRoaXMuc2V0TWVzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFyaWF0aW9ucygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zID0ge31cclxuXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLnZvbHVtZSA9IHt9XHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLnZvbHVtZS50YXJnZXQgPSAwXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLnZvbHVtZS5jdXJyZW50ID0gMFxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy52b2x1bWUudXBFYXNpbmcgPSAwLjAzXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLnZvbHVtZS5kb3duRWFzaW5nID0gMC4wMDJcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMudm9sdW1lLmdldFZhbHVlID0gKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxldmVsMCA9IHRoaXMubWljcm9waG9uZS5sZXZlbHNbMF0gfHwgMFxyXG4gICAgICAgICAgICBjb25zdCBsZXZlbDEgPSB0aGlzLm1pY3JvcGhvbmUubGV2ZWxzWzFdIHx8IDBcclxuICAgICAgICAgICAgY29uc3QgbGV2ZWwyID0gdGhpcy5taWNyb3Bob25lLmxldmVsc1syXSB8fCAwXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgobGV2ZWwwLCBsZXZlbDEsIGxldmVsMikgKiAwLjNcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLnZvbHVtZS5nZXREZWZhdWx0ID0gKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAwLjE1MlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLmxvd0xldmVsID0ge31cclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMubG93TGV2ZWwudGFyZ2V0ID0gMFxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy5sb3dMZXZlbC5jdXJyZW50ID0gMFxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy5sb3dMZXZlbC51cEVhc2luZyA9IDAuMDA1XHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLmxvd0xldmVsLmRvd25FYXNpbmcgPSAwLjAwMlxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy5sb3dMZXZlbC5nZXRWYWx1ZSA9ICgpID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLm1pY3JvcGhvbmUubGV2ZWxzWzBdIHx8IDBcclxuICAgICAgICAgICAgdmFsdWUgKj0gMC4wMDNcclxuICAgICAgICAgICAgdmFsdWUgKz0gMC4wMDAxXHJcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5tYXgoMCwgdmFsdWUpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLmxvd0xldmVsLmdldERlZmF1bHQgPSAoKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAuMDAwM1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMubWVkaXVtTGV2ZWwgPSB7fVxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy5tZWRpdW1MZXZlbC50YXJnZXQgPSAwXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLm1lZGl1bUxldmVsLmN1cnJlbnQgPSAwXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLm1lZGl1bUxldmVsLnVwRWFzaW5nID0gMC4wMDhcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMubWVkaXVtTGV2ZWwuZG93bkVhc2luZyA9IDAuMDA0XHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLm1lZGl1bUxldmVsLmdldFZhbHVlID0gKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMubWljcm9waG9uZS5sZXZlbHNbMV0gfHwgMFxyXG4gICAgICAgICAgICB2YWx1ZSAqPSAyXHJcbiAgICAgICAgICAgIHZhbHVlICs9IDMuNTg3XHJcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5tYXgoMy41ODcsIHZhbHVlKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy5tZWRpdW1MZXZlbC5nZXREZWZhdWx0ID0gKCkgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAzLjU4N1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMuaGlnaExldmVsID0ge31cclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMuaGlnaExldmVsLnRhcmdldCA9IDBcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMuaGlnaExldmVsLmN1cnJlbnQgPSAwXHJcbiAgICAgICAgdGhpcy52YXJpYXRpb25zLmhpZ2hMZXZlbC51cEVhc2luZyA9IDAuMDJcclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMuaGlnaExldmVsLmRvd25FYXNpbmcgPSAwLjAwMVxyXG4gICAgICAgIHRoaXMudmFyaWF0aW9ucy5oaWdoTGV2ZWwuZ2V0VmFsdWUgPSAoKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5taWNyb3Bob25lLmxldmVsc1syXSB8fCAwXHJcbiAgICAgICAgICAgIHZhbHVlICo9IDVcclxuICAgICAgICAgICAgdmFsdWUgKz0gMC41XHJcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5tYXgoMC41LCB2YWx1ZSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhcmlhdGlvbnMuaGlnaExldmVsLmdldERlZmF1bHQgPSAoKSA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNjVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGlnaHRzKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxpZ2h0cyA9IHt9XHJcblxyXG4gICAgICAgIC8vIExpZ2h0IEFcclxuICAgICAgICB0aGlzLmxpZ2h0cy5hID0ge31cclxuXHJcbiAgICAgICAgdGhpcy5saWdodHMuYS5pbnRlbnNpdHkgPSAxLjg1XHJcblxyXG4gICAgICAgIHRoaXMubGlnaHRzLmEuY29sb3IgPSB7fVxyXG4gICAgICAgIHRoaXMubGlnaHRzLmEuY29sb3IudmFsdWUgPSAnI2ZmM2UwMCdcclxuICAgICAgICB0aGlzLmxpZ2h0cy5hLmNvbG9yLmluc3RhbmNlID0gbmV3IFRIUkVFLkNvbG9yKHRoaXMubGlnaHRzLmEuY29sb3IudmFsdWUpXHJcblxyXG4gICAgICAgIHRoaXMubGlnaHRzLmEuc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpLy8xLCAwLjYxNSwgMi4wNDkpXHJcblxyXG4gICAgICAgIC8vIExpZ2h0IEJcclxuICAgICAgICB0aGlzLmxpZ2h0cy5iID0ge31cclxuXHJcbiAgICAgICAgdGhpcy5saWdodHMuYi5pbnRlbnNpdHkgPSAxLjRcclxuXHJcbiAgICAgICAgdGhpcy5saWdodHMuYi5jb2xvciA9IHt9XHJcbiAgICAgICAgdGhpcy5saWdodHMuYi5jb2xvci52YWx1ZSA9ICcjMDA2M2ZmJ1xyXG4gICAgICAgIHRoaXMubGlnaHRzLmIuY29sb3IuaW5zdGFuY2UgPSBuZXcgVEhSRUUuQ29sb3IodGhpcy5saWdodHMuYi5jb2xvci52YWx1ZSlcclxuXHJcbiAgICAgICAgdGhpcy5saWdodHMuYi5zcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCkvLzEsIDIuNTYxLCAtIDEuODQ0KVxyXG5cclxuICAgICAgICAvLyBEZWJ1Z1xyXG4gICAgICAgIGlmKHRoaXMuZGVidWcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgX2xpZ2h0TmFtZSBpbiB0aGlzLmxpZ2h0cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlnaHQgPSB0aGlzLmxpZ2h0c1tfbGlnaHROYW1lXVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWJ1Z0ZvbGRlciA9IHRoaXMuZGVidWdGb2xkZXIuYWRkRm9sZGVyKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogX2xpZ2h0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBkZWJ1Z0ZvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQuY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdmlldzogJ2NvbG9yJywgbGFiZWw6ICdjb2xvcicgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAub24oJ2NoYW5nZScsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodC5jb2xvci5pbnN0YW5jZS5zZXQobGlnaHQuY29sb3IudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBkZWJ1Z0ZvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlbnNpdHknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG1pbjogMCwgbWF4OiAxMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbYHVMaWdodCR7X2xpZ2h0TmFtZS50b1VwcGVyQ2FzZSgpfUludGVuc2l0eWBdLnZhbHVlID0gbGlnaHQuaW50ZW5zaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBkZWJ1Z0ZvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQuc3BoZXJpY2FsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAncGhpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ3BoaScsIG1pbjogMCwgbWF4OiBNYXRoLlBJLCBzdGVwOiAwLjAwMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXNbYHVMaWdodCR7X2xpZ2h0TmFtZS50b1VwcGVyQ2FzZSgpfVBvc2l0aW9uYF0udmFsdWUuc2V0RnJvbVNwaGVyaWNhbChsaWdodC5zcGhlcmljYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBkZWJ1Z0ZvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQuc3BoZXJpY2FsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGhldGEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiAndGhldGEnLCBtaW46IC0gTWF0aC5QSSwgbWF4OiBNYXRoLlBJLCBzdGVwOiAwLjAwMSB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudUxpZ2h0QVBvc2l0aW9uLnZhbHVlLnNldEZyb21TcGhlcmljYWwobGlnaHQuc3BoZXJpY2FsKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T2Zmc2V0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHt9XHJcbiAgICAgICAgLy90aGlzLm9mZnNldC5zcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKDEsIE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJLCBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDIpXHJcbiAgICAgICAgLy90aGlzLm9mZnNldC5kaXJlY3Rpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpXHJcbiAgICAgICAgLy90aGlzLm9mZnNldC5kaXJlY3Rpb24uc2V0RnJvbVNwaGVyaWNhbCh0aGlzLm9mZnNldC5zcGhlcmljYWwpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0R2VvbWV0cnkoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMSwgMTAsIDEwKVxyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkuY29tcHV0ZVRhbmdlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBzZXRNYXRlcmlhbCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIHVuaWZvcm1zOlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1TGlnaHRBQ29sb3I6IHsgdmFsdWU6IHRoaXMubGlnaHRzLmEuY29sb3IuaW5zdGFuY2UgfSxcclxuICAgICAgICAgICAgICAgIHVMaWdodEFQb3NpdGlvbjogeyB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMCkgfSxcclxuICAgICAgICAgICAgICAgIHVMaWdodEFJbnRlbnNpdHk6IHsgdmFsdWU6IHRoaXMubGlnaHRzLmEuaW50ZW5zaXR5IH0sXHJcblxyXG4gICAgICAgICAgICAgICAgdUxpZ2h0QkNvbG9yOiB7IHZhbHVlOiB0aGlzLmxpZ2h0cy5iLmNvbG9yLmluc3RhbmNlIH0sXHJcbiAgICAgICAgICAgICAgICB1TGlnaHRCUG9zaXRpb246IHsgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IzKC0gMSwgLSAxLCAwKSB9LFxyXG4gICAgICAgICAgICAgICAgdUxpZ2h0QkludGVuc2l0eTogeyB2YWx1ZTogdGhpcy5saWdodHMuYi5pbnRlbnNpdHkgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB1U3ViZGl2aXNpb246IHsgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKHRoaXMuZ2VvbWV0cnkucGFyYW1ldGVycy53aWR0aFNlZ21lbnRzLCB0aGlzLmdlb21ldHJ5LnBhcmFtZXRlcnMuaGVpZ2h0U2VnbWVudHMpIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgdU9mZnNldDogeyB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjMoKSB9LFxyXG5cclxuICAgICAgICAgICAgICAgIHVEaXN0b3J0aW9uRnJlcXVlbmN5OiB7IHZhbHVlOiAxLjUgfSxcclxuICAgICAgICAgICAgICAgIHVEaXN0b3J0aW9uU3RyZW5ndGg6IHsgdmFsdWU6IDAuNjUgfSxcclxuICAgICAgICAgICAgICAgIHVEaXNwbGFjZW1lbnRGcmVxdWVuY3k6IHsgdmFsdWU6IDIuMTIwIH0sXHJcbiAgICAgICAgICAgICAgICB1RGlzcGxhY2VtZW50U3RyZW5ndGg6IHsgdmFsdWU6IDAuMTUyIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgdUZyZXNuZWxPZmZzZXQ6IHsgdmFsdWU6IC0xLjYwOSB9LFxyXG4gICAgICAgICAgICAgICAgdUZyZXNuZWxNdWx0aXBsaWVyOiB7IHZhbHVlOiAzLjU4NyB9LFxyXG4gICAgICAgICAgICAgICAgdUZyZXNuZWxQb3dlcjogeyB2YWx1ZTogMS43OTMgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlZmluZXM6XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFVTRV9UQU5HRU5UOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHZlcnRleFNoYWRlcixcclxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50U2hhZGVyXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51TGlnaHRBUG9zaXRpb24udmFsdWUuc2V0RnJvbVNwaGVyaWNhbCh0aGlzLmxpZ2h0cy5hLnNwaGVyaWNhbClcclxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVMaWdodEJQb3NpdGlvbi52YWx1ZS5zZXRGcm9tU3BoZXJpY2FsKHRoaXMubGlnaHRzLmIuc3BoZXJpY2FsKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZGVidWcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnRm9sZGVyLmFkZElucHV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51RGlzdG9ydGlvbkZyZXF1ZW5jeSxcclxuICAgICAgICAgICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAndURpc3RvcnRpb25GcmVxdWVuY3knLCBtaW46IDAsIG1heDogMTAsIHN0ZXA6IDAuMDAxIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0ZvbGRlci5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudURpc3RvcnRpb25TdHJlbmd0aCxcclxuICAgICAgICAgICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAndURpc3RvcnRpb25TdHJlbmd0aCcsIG1pbjogMCwgbWF4OiAxMCwgc3RlcDogMC4wMDEgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRlYnVnRm9sZGVyLmFkZElucHV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51RGlzcGxhY2VtZW50RnJlcXVlbmN5LFxyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICd1RGlzcGxhY2VtZW50RnJlcXVlbmN5JywgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDAuMDAxIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0ZvbGRlci5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudURpc3BsYWNlbWVudFN0cmVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJyxcclxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICd1RGlzcGxhY2VtZW50U3RyZW5ndGgnLCBtaW46IDAsIG1heDogMSwgc3RlcDogMC4wMDEgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRlYnVnRm9sZGVyLmFkZElucHV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51RnJlc25lbE9mZnNldCxcclxuICAgICAgICAgICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAndUZyZXNuZWxPZmZzZXQnLCBtaW46IC0gMiwgbWF4OiAyLCBzdGVwOiAwLjAwMSB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdGb2xkZXIuYWRkSW5wdXQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVGcmVzbmVsTXVsdGlwbGllcixcclxuICAgICAgICAgICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAndUZyZXNuZWxNdWx0aXBsaWVyJywgbWluOiAwLCBtYXg6IDUsIHN0ZXA6IDAuMDAxIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0ZvbGRlci5hZGRJbnB1dChcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudUZyZXNuZWxQb3dlcixcclxuICAgICAgICAgICAgICAgICd2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAndUZyZXNuZWxQb3dlcicsIG1pbjogMCwgbWF4OiA1LCBzdGVwOiAwLjAwMSB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWVzaCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbClcclxuICAgICAgICAvL3RoaXMubWVzaC5wb3NpdGlvbi5zZXQoMjAsMCwwKVxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubWVzaClcclxuICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5tZXNoLnBvc2l0aW9uIClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFVwZGF0ZSB2YXJpYXRpb25zXHJcbiAgICAgICAgZm9yKGxldCBfdmFyaWF0aW9uTmFtZSBpbiB0aGlzLnZhcmlhdGlvbnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCB2YXJpYXRpb24gPSB0aGlzLnZhcmlhdGlvbnNbX3ZhcmlhdGlvbk5hbWVdXHJcbiAgICAgICAgICAgIHZhcmlhdGlvbi50YXJnZXQgPSB2YXJpYXRpb24uZ2V0RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBlYXNpbmcgPSB2YXJpYXRpb24udGFyZ2V0ID4gdmFyaWF0aW9uLmN1cnJlbnQgPyB2YXJpYXRpb24udXBFYXNpbmcgOiB2YXJpYXRpb24uZG93bkVhc2luZ1xyXG4gICAgICAgICAgICB2YXJpYXRpb24uY3VycmVudCArPSAodmFyaWF0aW9uLnRhcmdldCAtIHZhcmlhdGlvbi5jdXJyZW50KSAqIGVhc2luZyAqIHRoaXMudGltZS5kZWx0YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGltZVxyXG4gICAgICAgIHRoaXMudGltZUZyZXF1ZW5jeSA9IHRoaXMudmFyaWF0aW9ucy5sb3dMZXZlbC5jdXJyZW50XHJcbiAgICAgICAgdGhpcy5lbGFwc2VkVGltZSA9IHRoaXMudGltZS5kZWx0YSAqIHRoaXMudGltZUZyZXF1ZW5jeVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgbWF0ZXJpYWxcclxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVEaXNwbGFjZW1lbnRTdHJlbmd0aC52YWx1ZSA9IHRoaXMudmFyaWF0aW9ucy52b2x1bWUuY3VycmVudFxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudURpc3RvcnRpb25TdHJlbmd0aC52YWx1ZSA9IHRoaXMudmFyaWF0aW9ucy5oaWdoTGV2ZWwuY3VycmVudFxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudUZyZXNuZWxNdWx0aXBsaWVyLnZhbHVlID0gdGhpcy52YXJpYXRpb25zLm1lZGl1bUxldmVsLmN1cnJlbnRcclxuXHJcbiAgICAgICAgLy8gT2Zmc2V0XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0VGltZSA9IHRoaXMuZWxhcHNlZFRpbWUgKiAwLjNcclxuICAgICAgICB0aGlzLm9mZnNldC5zcGhlcmljYWwucGhpID0gKChNYXRoLnNpbihvZmZzZXRUaW1lICogMC4wMDEpICogTWF0aC5zaW4ob2Zmc2V0VGltZSAqIDAuMDAzMjEpKSAqIDAuNSArIDAuNSkgKiBNYXRoLlBJXHJcbiAgICAgICAgdGhpcy5vZmZzZXQuc3BoZXJpY2FsLnRoZXRhID0gKChNYXRoLnNpbihvZmZzZXRUaW1lICogMC4wMDAxKSAqIE1hdGguc2luKG9mZnNldFRpbWUgKiAwLjAwMDMyMSkpICogMC41ICsgMC41KSAqIE1hdGguUEkgKiAyXHJcbiAgICAgICAgdGhpcy5vZmZzZXQuZGlyZWN0aW9uLnNldEZyb21TcGhlcmljYWwodGhpcy5vZmZzZXQuc3BoZXJpY2FsKVxyXG4gICAgICAgIHRoaXMub2Zmc2V0LmRpcmVjdGlvbi5tdWx0aXBseVNjYWxhcih0aGlzLnRpbWVGcmVxdWVuY3kgKiAyKVxyXG5cclxuICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVPZmZzZXQudmFsdWUuYWRkKHRoaXMub2Zmc2V0LmRpcmVjdGlvbilcclxuXHJcbiAgICAgICAgLy8gVGltZVxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudVRpbWUudmFsdWUgKz0gdGhpcy5lbGFwc2VkVGltZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJkT2JqID0ge1xyXG4gIGNhbnZhcyA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZycpLFxyXG4gIHJlbmRlcmVyIDogbnVsbCxcclxuICBpbml0UmQgOiAoKSA9PiB7XHJcbiAgICByZE9iai5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtjYW52YXM6IHJkT2JqLmNhbnZhcyAsIHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIgfSlcclxuICAgIHJkT2JqLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXHJcbiAgICByZE9iai5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgfVxyXG59O1xyXG5yZE9iai5pbml0UmQoKTsiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vRXZlbnRFbWl0dGVyLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZSBleHRlbmRzIEV2ZW50RW1pdHRlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5zdGFydFxyXG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDBcclxuICAgICAgICB0aGlzLmRlbHRhID0gMTZcclxuICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlXHJcblxyXG4gICAgICAgIHRoaXMudGljayA9IHRoaXMudGljay5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50aWNrKClcclxuICAgIH1cclxuXHJcbiAgICBwbGF5KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBsYXlpbmcgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2UoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucGxheWluZyA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaWNrXHJcbiAgICAgKi9cclxuICAgIHRpY2soKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudGlja2VyID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnRpY2spXHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBEYXRlLm5vdygpXHJcblxyXG4gICAgICAgIHRoaXMuZGVsdGEgPSBjdXJyZW50IC0gdGhpcy5jdXJyZW50XHJcbiAgICAgICAgdGhpcy5lbGFwc2VkICs9IHRoaXMucGxheWluZyA/IHRoaXMuZGVsdGEgOiAwXHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxyXG5cclxuICAgICAgICBpZih0aGlzLmRlbHRhID4gNjApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlbHRhID0gNjBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMucGxheWluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigndGljaycpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcFxyXG4gICAgICovXHJcbiAgICBzdG9wKClcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aWNrZXIpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcblx0RXVsZXIsXG5cdEV2ZW50RGlzcGF0Y2hlcixcblx0VmVjdG9yM1xufSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IF9ldWxlciA9IG5ldyBFdWxlciggMCwgMCwgMCwgJ1lYWicgKTtcbmNvbnN0IF92ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5jb25zdCBfbG9ja0V2ZW50ID0geyB0eXBlOiAnbG9jaycgfTtcbmNvbnN0IF91bmxvY2tFdmVudCA9IHsgdHlwZTogJ3VubG9jaycgfTtcblxuY29uc3QgX1BJXzIgPSBNYXRoLlBJIC8gMjtcblxuY2xhc3MgUG9pbnRlckxvY2tDb250cm9scyBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IoIGNhbWVyYSwgZG9tRWxlbWVudCApIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAoIGRvbUVsZW1lbnQgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuUG9pbnRlckxvY2tDb250cm9sczogVGhlIHNlY29uZCBwYXJhbWV0ZXIgXCJkb21FbGVtZW50XCIgaXMgbm93IG1hbmRhdG9yeS4nICk7XG5cdFx0XHRkb21FbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcblxuXHRcdH1cblxuXHRcdHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cdFx0dGhpcy5pc0xvY2tlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gU2V0IHRvIGNvbnN0cmFpbiB0aGUgcGl0Y2ggb2YgdGhlIGNhbWVyYVxuXHRcdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zXG5cdFx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHRcdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHRcdHRoaXMucG9pbnRlclNwZWVkID0gMS4wO1xuXG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzO1xuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmlzTG9ja2VkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0Y29uc3QgbW92ZW1lbnRYID0gZXZlbnQubW92ZW1lbnRYIHx8IGV2ZW50Lm1vek1vdmVtZW50WCB8fCBldmVudC53ZWJraXRNb3ZlbWVudFggfHwgMDtcblx0XHRcdGNvbnN0IG1vdmVtZW50WSA9IGV2ZW50Lm1vdmVtZW50WSB8fCBldmVudC5tb3pNb3ZlbWVudFkgfHwgZXZlbnQud2Via2l0TW92ZW1lbnRZIHx8IDA7XG5cblx0XHRcdF9ldWxlci5zZXRGcm9tUXVhdGVybmlvbiggY2FtZXJhLnF1YXRlcm5pb24gKTtcblxuXHRcdFx0X2V1bGVyLnkgLT0gbW92ZW1lbnRYICogMC4wMDIgKiBzY29wZS5wb2ludGVyU3BlZWQ7XG5cdFx0XHRfZXVsZXIueCAtPSBtb3ZlbWVudFkgKiAwLjAwMiAqIHNjb3BlLnBvaW50ZXJTcGVlZDtcblxuXHRcdFx0X2V1bGVyLnggPSBNYXRoLm1heCggX1BJXzIgLSBzY29wZS5tYXhQb2xhckFuZ2xlLCBNYXRoLm1pbiggX1BJXzIgLSBzY29wZS5taW5Qb2xhckFuZ2xlLCBfZXVsZXIueCApICk7XG5cblx0XHRcdGNhbWVyYS5xdWF0ZXJuaW9uLnNldEZyb21FdWxlciggX2V1bGVyICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Qb2ludGVybG9ja0NoYW5nZSgpIHtcblxuXHRcdFx0aWYgKCBzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50ID09PSBzY29wZS5kb21FbGVtZW50ICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9sb2NrRXZlbnQgKTtcblxuXHRcdFx0XHRzY29wZS5pc0xvY2tlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX3VubG9ja0V2ZW50ICk7XG5cblx0XHRcdFx0c2NvcGUuaXNMb2NrZWQgPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Qb2ludGVybG9ja0Vycm9yKCkge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuUG9pbnRlckxvY2tDb250cm9sczogVW5hYmxlIHRvIHVzZSBQb2ludGVyIExvY2sgQVBJJyApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrY2hhbmdlJywgb25Qb2ludGVybG9ja0NoYW5nZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2Vycm9yJywgb25Qb2ludGVybG9ja0Vycm9yICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrY2hhbmdlJywgb25Qb2ludGVybG9ja0NoYW5nZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2Vycm9yJywgb25Qb2ludGVybG9ja0Vycm9yICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLmRpc2Nvbm5lY3QoKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldE9iamVjdCA9IGZ1bmN0aW9uICgpIHsgLy8gcmV0YWluaW5nIHRoaXMgbWV0aG9kIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0XHRcdHJldHVybiBjYW1lcmE7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXREaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKCAwLCAwLCAtIDEgKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICggdiApIHtcblxuXHRcdFx0XHRyZXR1cm4gdi5jb3B5KCBkaXJlY3Rpb24gKS5hcHBseVF1YXRlcm5pb24oIGNhbWVyYS5xdWF0ZXJuaW9uICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHR0aGlzLm1vdmVGb3J3YXJkID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuXHRcdFx0Ly8gbW92ZSBmb3J3YXJkIHBhcmFsbGVsIHRvIHRoZSB4ei1wbGFuZVxuXHRcdFx0Ly8gYXNzdW1lcyBjYW1lcmEudXAgaXMgeS11cFxuXG5cdFx0XHRfdmVjdG9yLnNldEZyb21NYXRyaXhDb2x1bW4oIGNhbWVyYS5tYXRyaXgsIDAgKTtcblxuXHRcdFx0X3ZlY3Rvci5jcm9zc1ZlY3RvcnMoIGNhbWVyYS51cCwgX3ZlY3RvciApO1xuXG5cdFx0XHRjYW1lcmEucG9zaXRpb24uYWRkU2NhbGVkVmVjdG9yKCBfdmVjdG9yLCBkaXN0YW5jZSApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMubW92ZVJpZ2h0ID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuXHRcdFx0X3ZlY3Rvci5zZXRGcm9tTWF0cml4Q29sdW1uKCBjYW1lcmEubWF0cml4LCAwICk7XG5cblx0XHRcdGNhbWVyYS5wb3NpdGlvbi5hZGRTY2FsZWRWZWN0b3IoIF92ZWN0b3IsIGRpc3RhbmNlICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5sb2NrID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLmRvbUVsZW1lbnQucmVxdWVzdFBvaW50ZXJMb2NrKCk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy51bmxvY2sgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5leGl0UG9pbnRlckxvY2soKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmNvbm5lY3QoKTtcblxuXHR9XG5cbn1cblxuZXhwb3J0IHsgUG9pbnRlckxvY2tDb250cm9scyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9