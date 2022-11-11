(self["webpackChunkminecraft_clone"] = self["webpackChunkminecraft_clone"] || []).push([["app"],{

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$":
/*!************************************************************!*\
  !*** ./src/assets/ sync \.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$ ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./img/cloud.jpg": "./src/assets/img/cloud.jpg",
	"./img/cloud.png": "./src/assets/img/cloud.png",
	"./img/cloudA.jpg": "./src/assets/img/cloudA.jpg",
	"./img/disc.png": "./src/assets/img/disc.png",
	"./img/discg.png": "./src/assets/img/discg.png",
	"./img/favicon.svg": "./src/assets/img/favicon.svg",
	"./img/neurona.jpg": "./src/assets/img/neurona.jpg",
	"./img/shinyP.jpg": "./src/assets/img/shinyP.jpg",
	"./img/shinyPB.png": "./src/assets/img/shinyPB.png",
	"./img/smoke.png": "./src/assets/img/smoke.png",
	"./texture/cobblestone/cobblestone.png": "./src/assets/texture/cobblestone/cobblestone.png",
	"./texture/dirt/customdirt.png": "./src/assets/texture/dirt/customdirt.png",
	"./texture/dirt/dirt.png": "./src/assets/texture/dirt/dirt.png",
	"./texture/grass/bottom.jpg": "./src/assets/texture/grass/bottom.jpg",
	"./texture/grass/side.jpg": "./src/assets/texture/grass/side.jpg",
	"./texture/grass/top.jpg": "./src/assets/texture/grass/top.jpg",
	"./texture/oakLeaves/oakLeaves.png": "./src/assets/texture/oakLeaves/oakLeaves.png",
	"./texture/oakLeaves/oakLeavesTransparent.png": "./src/assets/texture/oakLeaves/oakLeavesTransparent.png",
	"./texture/oakLog/bottom.jpg": "./src/assets/texture/oakLog/bottom.jpg",
	"./texture/oakLog/side.png": "./src/assets/texture/oakLog/side.png",
	"./texture/oakLog/top.jpg": "./src/assets/texture/oakLog/top.jpg",
	"./texture/sand/sand.png": "./src/assets/texture/sand/sand.png",
	"./texture/texture.png": "./src/assets/texture/texture.png",
	"./texture/water/water.jpeg": "./src/assets/texture/water/water.jpeg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$";

/***/ }),

/***/ "./src/js/Block.js":
/*!*************************!*\
  !*** ./src/js/Block.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Block": () => (/* binding */ Block),
/* harmony export */   "BlockMaterials": () => (/* binding */ BlockMaterials),
/* harmony export */   "Blocks": () => (/* binding */ Blocks)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


//import * as FS from 'fs';

class Block {
  constructor({ blockType, materialArray, mesh, count, biomes }) {
    this.blockType = blockType;
    this.materialArray = materialArray;
    this.mesh = mesh;
    this.count = count;
    this.biomes = biomes;
  }
}

class BlockMaterials {
  constructor() {
    var loader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();

    this.dirtMat = [
      "/dist/assets/texture/dirt/dirt.png",
      "/dist/assets/texture/dirt/dirt.png",
      "/dist/assets/texture/dirt/dirt.png",
      "/dist/assets/texture/dirt/dirt.png",
      "/dist/assets/texture/dirt/dirt.png",
      "/dist/assets/texture/dirt/dirt.png",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
      });
    });
    this.cobblestoneMat = [
      "/dist/assets/texture/cobblestone/cobblestone.png",
      "/dist/assets/texture/cobblestone/cobblestone.png",
      "/dist/assets/texture/cobblestone/cobblestone.png",
      "/dist/assets/texture/cobblestone/cobblestone.png",
      "/dist/assets/texture/cobblestone/cobblestone.png",
      "/dist/assets/texture/cobblestone/cobblestone.png",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
      });
    });
    this.oakLogMat = [
      "/dist/assets/texture/oakLog/side.png",
      "/dist/assets/texture/oakLog/side.png",
      "/dist/assets/texture/oakLog/top.jpg",
      "/dist/assets/texture/oakLog/bottom.jpg",
      "/dist/assets/texture/oakLog/side.png",
      "/dist/assets/texture/oakLog/side.png",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
      });
    });
    this.oakLeavesMat = [
      "/dist/assets/texture/oakLeaves/oakLeaves.png",
      "/dist/assets/texture/oakLeaves/oakLeaves.png",
      "/dist/assets/texture/oakLeaves/oakLeaves.png",
      "/dist/assets/texture/oakLeaves/oakLeaves.png",
      "/dist/assets/texture/oakLeaves/oakLeaves.png",
      "/dist/assets/texture/oakLeaves/oakLeaves.png",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
      });
    });
    this.sandMat = [
      "/dist/assets/texture/sand/sand.png",
      "/dist/assets/texture/sand/sand.png",
      "/dist/assets/texture/sand/sand.png",
      "/dist/assets/texture/sand/sand.png",
      "/dist/assets/texture/sand/sand.png",
      "/dist/assets/texture/sand/sand.png",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
      });
    });
    this.waterMat = [
      "/dist/assets/texture/water/water.jpeg",
      "/dist/assets/texture/water/water.jpeg",
      "/dist/assets/texture/water/water.jpeg",
      "/dist/assets/texture/water/water.jpeg",
      "/dist/assets/texture/water/water.jpeg",
      "/dist/assets/texture/water/water.jpeg",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
      });
    });
    this.grassMat = [
      "/dist/assets/texture/grass/side.jpg",
      "/dist/assets/texture/grass/side.jpg",
      "/dist/assets/texture/grass/top.jpg",
      "/dist/assets/texture/grass/bottom.jpg",
      "/dist/assets/texture/grass/side.jpg",
      "/dist/assets/texture/grass/side.jpg",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
      });
    });

    this.textureOpacity();
    //this.textureImagesLoader("/dist/assets/texture/grass");
  }
  textureImagesLoader(fileURL) {
    //joining path of directory
    const directoryPath = fileURL;
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
        return console.log("Unable to scan directory: " + err);
      }
      //listing all files using forEach
      files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
      });
    });
    return file;
  }
  textureOpacity() {
    for (var i = 0; i < this.waterMat.length; i++) {
      if (i == 2 || i == 3) {
        // top and bottom
        this.waterMat[i].transparent = true;
        this.waterMat[i].opacity = 0.7;
      } else {
        // sides
        this.waterMat[i].transparent = true;
        this.waterMat[i].opacity = 0.4;
      }
    }
  }
}

class Blocks {
  constructor() {
    var blockGoem = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1);
    var blockMaterials = new BlockMaterials();
    var renderDistance = 4;
    var chunkSize = 10;
    var depth = 5;

    this.blockGoem = blockGoem;
    this.blockMaterials = blockMaterials;
    this.renderDistance = renderDistance;
    this.chunkSize = chunkSize;
    this.depth = depth;

    this.grass = new Block({
      blockType: "grass",
      materialArray: blockMaterials.grassMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.grassMat),
      count: 0,
      range: [0],
      biomes: ["plains"],
    });
    this.dirt = new Block({
      blockType: "dirt",
      materialArray: blockMaterials.dirtMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.dirtMat),
      count: 0,
      range: [1, 2],
      biomes: ["plains"],
    });
    this.cobblestone = new Block({
      blockType: "cobblestone",
      materialArray: blockMaterials.cobblestoneMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.cobblestoneMat),
      count: 0,
      range: [3, 4],
      biomes: ["plains", "desert"],
    });
    this.oakLog = new Block({
      blockType: "oakLog",
      materialArray: blockMaterials.oakLogMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.oakLogMat),
      count: 0,
      range: [],
      biomes: ["plains"],
    });
    this.oakLeaves = new Block({
      blockType: "oakLeaves",
      materialArray: blockMaterials.oakLeavesMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.oakLeavesMat),
      count: 0,
      range: [],
      biomes: ["plains"],
    });
    this.sand = new Block({
      blockType: "sand",
      materialArray: blockMaterials.sandMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.sandMat),
      count: 0,
      range: [0, 1, 2],
      biomes: ["desert"],
    });
    this.water = new Block({
      blockType: "water",
      materialArray: blockMaterials.waterMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.waterMat),
      count: 0,
      range: [],
      biomes: ["plains", "desert"],
    });
  }
}


/***/ }),

/***/ "./src/js/Camera.js":
/*!**************************!*\
  !*** ./src/js/Camera.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/js/Controls.js":
/*!****************************!*\
  !*** ./src/js/Controls.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controls": () => (/* binding */ Controls)
/* harmony export */ });
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var three_addons_controls_PointerLockControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/addons/controls/PointerLockControls.js */ "./node_modules/three/examples/jsm/controls/PointerLockControls.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");




class Controls {
  constructor({ player }) {
    this.player = player;

    this.keyActionMap = {
      KeyW: "moveForward",
      KeyS: "moveBackward",
      KeyA: "moveLeft",
      KeyD: "moveRight",
      Space: "jump",
      Digit1: "texture1",
      Digit2: "texture3",
      Digit3: "texture4",
      Digit4: "texture5",
    };
    this.fpv = new three_addons_controls_PointerLockControls_js__WEBPACK_IMPORTED_MODULE_1__.PointerLockControls(
      this.player.camera,
      document.getElementById("bg")
    );
    this.initControls();
  }

  initControls() {
    document.addEventListener("keydown", (event) => {
      this.handleKeyDown(event);
    });
    document.addEventListener("keyup", (event) => {
      this.handleKeyUp(event);
    });
    document.addEventListener("click", () => {
      console.log("click");
      this.fpv.lock();
    });
    this.fpv.addEventListener("lock", () => {
      //menu.style.display = "none";
      console.log("locked");
    });

    this.fpv.addEventListener("unlock", () => {
      //menu.style.display = "block";
      console.log("unlocked");
    });
  }

  actionByKey(key) {
    return this.keyActionMap[key];
  }

  handleKeyDown(event) {
    const action = this.actionByKey(event.code);
    //console.log("keyDown " + event);
    if (action) {
      this.player.actionMap[action] = true;
    }
    //console.log("actions keyDown", this.player.actionMap);
  }

  handleKeyUp(event) {
    const action = this.actionByKey(event.code);
    //console.log(event);
    if (action) {
      this.player.actionMap[action] = false;
    }
    //console.log("actions ", this.player.actionMap);
  }
}


/***/ }),

/***/ "./src/js/Landscape.js":
/*!*****************************!*\
  !*** ./src/js/Landscape.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBlocks": () => (/* binding */ addBlocks),
/* harmony export */   "addBlocksToScene": () => (/* binding */ addBlocksToScene),
/* harmony export */   "compareLandscapes": () => (/* binding */ compareLandscapes),
/* harmony export */   "createLandscape": () => (/* binding */ createLandscape),
/* harmony export */   "removeBlocksFromScene": () => (/* binding */ removeBlocksFromScene),
/* harmony export */   "updateLandscape": () => (/* binding */ updateLandscape)
/* harmony export */ });
/* harmony import */ var _Block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Block.js */ "./src/js/Block.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Controls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controls.js */ "./src/js/Controls.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");







const camera = _Camera_js__WEBPACK_IMPORTED_MODULE_1__.camera;

var chunkSize = 10;
const landscape = [];

function addBlocks(scene) {
  var blocks = new _Block_js__WEBPACK_IMPORTED_MODULE_0__.Blocks();
  var cube = blocks.grass.mesh;

  //const [x,y,z]= Array(3).fill().landscape(()=>THREE.MathUtils.randFloatSpread( 100 ) );

  cube.position.set(0, 0, 0);
  console.log(cube);
  scene.add(cube);
}
function LandscapeSetup(scene) {
  for (var xIndex = 0; xIndex < 10; xIndex++) {
    for (var zIndex = 0; zIndex < 10; zIndex++) {
      var blocks = new _Block_js__WEBPACK_IMPORTED_MODULE_0__.Blocks();
      var block = blocks.grass.mesh;
      var z = zIndex * 5;
      var x = xIndex * 5;
      var y = 0;
      block.position.set(x, y, z);
      scene.add(block);
    }
  }
}
function diplayBlocksAroundCamera() {
  console.log("in PlaceBlocksAroundCamera");
  //console.log('camera.position ',position)
  const diplayableLandscape = Array();
  var cameraBlock = findBlockUnderCam();
  var firstBlockPosition = findFirstBlockInDisplay(cameraBlock);

  //console.log('cameraBlock ',cameraBlock)
  //console.log('firstBlockPosition ',firstBlockPosition)

  for (var xIndex = 0; xIndex < 10; xIndex++) {
    for (var zIndex = 0; zIndex < 15; zIndex++) {
      var z = firstBlockPosition.z + zIndex;
      var x = firstBlockPosition.x + xIndex;
      //var y = 0

      //landscape[x][z].visible = true
      diplayableLandscape.push(x, z);
    }
  }
  return diplayableLandscape;
}
function findBlockUnderCam() {
  //console.log('in centerLandscape')
  const position = camera.position;

  var posX = parseInt(position.x / 5);
  var posZ = parseInt(position.z / 5);

  var posBlock = { x: posX, z: posZ };
  return posBlock;
}
function findFirstBlockInDisplay(posBlockCam) {
  //console.log('in centerLandscape')

  var posX = posBlockCam.x - 5;
  var posZ = posBlockCam.z - 15;

  var posBlock = { x: posX, z: posZ };
  return posBlock;
}

function addBlocksToScene(addList) {
  addList.forEach((block) => {
    block.visible = true;
  });
}

function removeBlocksFromScene() {
  landscape.forEach((position) => {
    position.forEach((block) => {
      block.visible = false;
    });
  });
}

function compareLandscapes(diplayableLandscape) {
  var blockToKeep = Array();
  var blockToDelete = Array();
  var blockToAdd = Array();

  blockToKeep = getIntersection(landscape, diplayableLandscape);
  blockToDelete = getExclusionA(landscape, blockToKeep);
  blockToAdd = getUnion(diplayableLandscape, blockToKeep);
  return { rmList: blockToDelete, addList: blockToAdd };
}

function createLandscape(scene) {
  console.log("in landscape");
  for (var xIndex = 0; xIndex < 10; xIndex++) {
    landscape[xIndex] = Array();
    for (var zIndex = 0; zIndex < 10; zIndex++) {
      const blocks = new _Block_js__WEBPACK_IMPORTED_MODULE_0__.Blocks();
      const block = blocks.grass.mesh;
      const z = zIndex;
      const x = xIndex;
      const y = 0;
      block.position.set(x, y, z);
      const blockShape = new cannon_es__WEBPACK_IMPORTED_MODULE_4__.Box(new cannon_es__WEBPACK_IMPORTED_MODULE_4__.Vec3(1, 1, 1));
      const blockBody = new cannon_es__WEBPACK_IMPORTED_MODULE_4__.Body({ mass: 0 });
      blockBody.position.set(x, y, z);
      _main__WEBPACK_IMPORTED_MODULE_3__.meshes.push(block);
      blockBody.addShape(blockShape);
      _main__WEBPACK_IMPORTED_MODULE_3__.bodies.push(blockBody);
      _main__WEBPACK_IMPORTED_MODULE_3__.world.addBody(blockBody);
      scene.add(block);
    }
  }
}

function updateLandscape() {
  //console.log('in updateLandscape')
  removeBlocksFromScene();
  diplayBlocksAroundCamera();
  //var printableLandscape = diplayBlocksAroundCamera(scene)
  //var blocks = compareLandscapes(printableLandscape)
  //removeBlocksFromScene(scene, blocks.rmList)
  //addBlocksToScene(scene, blocks.addList)
}


/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");



class Player {
  //var moveBackward, moveForward, moveRight, moveLeft, jump = useKeyboard()

  plrGeom = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry();
  plrMat = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial();
  mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.plrGeom, this.plrMat);

  constructor({ camera, controls, mesh }) {
    this.actionMap = {
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      jump: false,
      texture1: false,
      texture3: false,
      texture4: false,
      texture5: false,
    };

    this.camera = camera;
    this.controls = controls;

    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.plrGeom, this.plrMat);
    this.mass = 1;
    this.movementSpeed = 2.5;
    this.jumpForce = 3;
    this.playerShape = new cannon_es__WEBPACK_IMPORTED_MODULE_1__.Sphere(1);
    this.playerBody = new cannon_es__WEBPACK_IMPORTED_MODULE_1__.Body({ mass: this.mass });
    this.playerBody.addShape(this.playerShape);

    //this.updatePlayer();
  }
  updatePosition() {
    //console.log('player pos update =', this.mesh.position);
    this.camera.position.copy(this.mesh.position);
  }
  updatePlayer() {
    this.updatePosition();
    this.useAction();
  }
  useAction() {
    if (this.actionMap["jump"] && Math.abs(this.playerBody.velocity.y) < 0.05) {
      this.playerBody.velocity.set(0, this.jumpForce, 0);
    }
    const direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

    const frontVector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(
      0,
      0,
      (this.actionMap["moveBackward"] ? 1 : 0) -
        (this.actionMap["moveForward"] ? 1 : 0)
    );

    const sideVector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(
      (this.actionMap["moveLeft"] ? 1 : 0) -
        (this.actionMap["moveRight"] ? 1 : 0),
      0,
      0
    );

    direction.subVectors(frontVector, sideVector);
    direction.normalize();
    direction.multiplyScalar(this.movementSpeed);
    direction.applyEuler(this.camera.rotation);

    this.playerBody.velocity.x = direction.x;
    this.playerBody.velocity.z = direction.z;
  }
}


/***/ }),

/***/ "./src/js/Renderer.js":
/*!****************************!*\
  !*** ./src/js/Renderer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/js/Scene.js":
/*!*************************!*\
  !*** ./src/js/Scene.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scene": () => (/* binding */ scene)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Controls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controls.js */ "./src/js/Controls.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Renderer.js */ "./src/js/Renderer.js");
/* harmony import */ var _Landscape_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Landscape.js */ "./src/js/Landscape.js");
/* harmony import */ var three_addons_libs_lil_gui_module_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/addons/libs/lil-gui.module.min.js */ "./node_modules/three/examples/jsm/libs/lil-gui.module.min.js");
/* harmony import */ var three_addons_objects_Sky_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/addons/objects/Sky.js */ "./node_modules/three/examples/jsm/objects/Sky.js");








const scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();
const camera = _Camera_js__WEBPACK_IMPORTED_MODULE_0__.camera;
const renderer = _Renderer_js__WEBPACK_IMPORTED_MODULE_2__.renderer;

let sky, sun;

init();

function initSky() {
  // Add Sky
  sky = new three_addons_objects_Sky_js__WEBPACK_IMPORTED_MODULE_5__.Sky();
  sky.scale.setScalar(450000);
  scene.add(sky);

  sun = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();

  /// GUI

  const effectController = {
    turbidity: 10,
    rayleigh: 3,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.7,
    elevation: 2,
    azimuth: 180,
    exposure: renderer.toneMappingExposure,
  };

  function guiChanged() {
    const uniforms = sky.material.uniforms;
    uniforms["turbidity"].value = effectController.turbidity;
    uniforms["rayleigh"].value = effectController.rayleigh;
    uniforms["mieCoefficient"].value = effectController.mieCoefficient;
    uniforms["mieDirectionalG"].value = effectController.mieDirectionalG;

    const phi = three__WEBPACK_IMPORTED_MODULE_4__.MathUtils.degToRad(90 - effectController.elevation);
    const theta = three__WEBPACK_IMPORTED_MODULE_4__.MathUtils.degToRad(effectController.azimuth);

    sun.setFromSphericalCoords(1, phi, theta);

    uniforms["sunPosition"].value.copy(sun);

    renderer.toneMappingExposure = effectController.exposure;
    //renderer.render(scene, camera);
  }

  const gui = new three_addons_libs_lil_gui_module_min_js__WEBPACK_IMPORTED_MODULE_6__.GUI();

  gui.add(effectController, "turbidity", 0.0, 20.0, 0.1).onChange(guiChanged);
  gui.add(effectController, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);
  gui
    .add(effectController, "mieCoefficient", 0.0, 0.1, 0.001)
    .onChange(guiChanged);
  gui
    .add(effectController, "mieDirectionalG", 0.0, 1, 0.001)
    .onChange(guiChanged);
  gui.add(effectController, "elevation", 0, 90, 0.1).onChange(guiChanged);
  gui.add(effectController, "azimuth", -180, 180, 0.1).onChange(guiChanged);
  gui.add(effectController, "exposure", 0, 1, 0.0001).onChange(guiChanged);

  guiChanged();
}

function init() {
  const helper = new three__WEBPACK_IMPORTED_MODULE_4__.GridHelper(10000, 2, 0xffffff, 0xffffff);
  scene.add(helper);

  initSky();
}

//scene.background = new THREE.Color(0x00ffff);
//scene.fog = new THREE.Fog(0x00ffff, 2, 80);

const pointLight_1 = new three__WEBPACK_IMPORTED_MODULE_4__.PointLight(0xffffff);
pointLight_1.position.set(5, 5, 0);
const pointLight_2 = new three__WEBPACK_IMPORTED_MODULE_4__.PointLight(0xffffff);
pointLight_2.position.set(-5, 5, 0);
const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xffffff, 0.15);

scene.add(pointLight_1, pointLight_2, ambientLight);

renderer.render(scene, camera);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");



__webpack_require__("./src/assets sync recursive \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$");

function canvas() {
  const canvas = document.createElement("canvas");
  canvas.id = "bg";
  //const favicon = document.createElement('link');
  //document.head.append(favicon);
  /*favicon.id = 'ico';
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href= 'https://img.icons8.com/color/48/000000/minecraft-pickaxe.png';*/
  //console.log(texture);
  // const btn = document.createElement('button');
  // Lodash, now imported by this script
  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // element.classList.add('hello');
  //btn.innerHTML = 'Click me and check the console!';
  //btn.onclick = printMe;
  //element.appendChild(btn);
  return canvas;
}

function cursor() {
  const cursor = document.createElement("div");
  cursor.className = "absolute centered cursor";
  cursor.textContent = " ";
  return cursor;
}

document.body.appendChild(canvas());
document.body.appendChild(cursor());


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bodies": () => (/* binding */ bodies),
/* harmony export */   "meshes": () => (/* binding */ meshes),
/* harmony export */   "world": () => (/* binding */ world)
/* harmony export */ });
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene.js */ "./src/js/Scene.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Controls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controls.js */ "./src/js/Controls.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Renderer.js */ "./src/js/Renderer.js");
/* harmony import */ var _Landscape_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Landscape.js */ "./src/js/Landscape.js");
/* harmony import */ var _Block_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Block.js */ "./src/js/Block.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Player.js */ "./src/js/Player.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");
/* harmony import */ var three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! three/examples/jsm/libs/stats.module */ "./node_modules/three/examples/jsm/libs/stats.module.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");













// Three variables
let scene = _Scene_js__WEBPACK_IMPORTED_MODULE_1__.scene;
let camera = _Camera_js__WEBPACK_IMPORTED_MODULE_2__.camera;
let renderer = _Renderer_js__WEBPACK_IMPORTED_MODULE_4__.renderer;
const clock = new three__WEBPACK_IMPORTED_MODULE_8__.Clock();
let stats;

// Minecraft variables
let blocks;
let player;
let controls;

// cannon.js variables
let world;

// To be synced
const meshes = [];
const bodies = [];

initThree();
initCannon();
initMinecraft();
renderInfo();
GameLoop();

function initThree() {
  stats = new three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_9__["default"]();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  //document.body.appendChild(stats.dom);
}

function initCannon() {
  // Setup world
  world = new cannon_es__WEBPACK_IMPORTED_MODULE_10__.World();
  world.gravity.set(0, -9.81, 0);

  // Floor
  /*const floorShape = new CANNON.Plane();
  const floorBody = new CANNON.Body({ mass: 0 });
  floorBody.addShape(floorShape);
  world.addBody(floorBody);*/
}

function initMinecraft() {
  _Landscape_js__WEBPACK_IMPORTED_MODULE_5__.createLandscape(scene);

  blocks = new _Block_js__WEBPACK_IMPORTED_MODULE_6__.Blocks();
  player = new _Player_js__WEBPACK_IMPORTED_MODULE_7__.Player({ camera: camera });
  controls = new _Controls_js__WEBPACK_IMPORTED_MODULE_3__.Controls({ player: player });
  player.playerBody.position.set(6, 8, 6);
  bodies.push(player.playerBody);
  world.addBody(player.playerBody);
  meshes.push(player.mesh);
  scene.add(player.mesh);
}
function renderInfo() {
  console.log("Scene polycount:", renderer.info.render.triangles);
  console.log("Active Drawcalls:", renderer.info.render.calls);
  console.log("Textures in Memory", renderer.info.memory.textures);
  console.log("Geometries in Memory", renderer.info.memory.geometries);
}

// Sync the three.js meshes with the bodies
function synchronisedBodiesMeshes() {
  for (let i = 0; i !== meshes.length; i++) {
    meshes[i].position.copy(bodies[i].position);
    meshes[i].quaternion.copy(bodies[i].quaternion);
  }
}

function GameLoop() {
  stats.begin();
  const deltaTime = clock.getDelta();

  //update game
  player.updatePlayer();

  // Step the physics world
  world.fixedStep();
  synchronisedBodiesMeshes();

  // Render three.js
  renderer.render(scene, camera);

  stats.update();
  stats.end();
  requestAnimationFrame(GameLoop);
}


/***/ }),

/***/ "./src/assets/img/cloud.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/cloud.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/cloud.jpg";

/***/ }),

/***/ "./src/assets/img/cloud.png":
/*!**********************************!*\
  !*** ./src/assets/img/cloud.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/cloud.png";

/***/ }),

/***/ "./src/assets/img/cloudA.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/cloudA.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/cloudA.jpg";

/***/ }),

/***/ "./src/assets/img/disc.png":
/*!*********************************!*\
  !*** ./src/assets/img/disc.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/disc.png";

/***/ }),

/***/ "./src/assets/img/discg.png":
/*!**********************************!*\
  !*** ./src/assets/img/discg.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/discg.png";

/***/ }),

/***/ "./src/assets/img/favicon.svg":
/*!************************************!*\
  !*** ./src/assets/img/favicon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/favicon.svg";

/***/ }),

/***/ "./src/assets/img/neurona.jpg":
/*!************************************!*\
  !*** ./src/assets/img/neurona.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/neurona.jpg";

/***/ }),

/***/ "./src/assets/img/shinyP.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/shinyP.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/shinyP.jpg";

/***/ }),

/***/ "./src/assets/img/shinyPB.png":
/*!************************************!*\
  !*** ./src/assets/img/shinyPB.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/shinyPB.png";

/***/ }),

/***/ "./src/assets/img/smoke.png":
/*!**********************************!*\
  !*** ./src/assets/img/smoke.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/img/smoke.png";

/***/ }),

/***/ "./src/assets/texture/cobblestone/cobblestone.png":
/*!********************************************************!*\
  !*** ./src/assets/texture/cobblestone/cobblestone.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/cobblestone/cobblestone.png";

/***/ }),

/***/ "./src/assets/texture/dirt/customdirt.png":
/*!************************************************!*\
  !*** ./src/assets/texture/dirt/customdirt.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/dirt/customdirt.png";

/***/ }),

/***/ "./src/assets/texture/dirt/dirt.png":
/*!******************************************!*\
  !*** ./src/assets/texture/dirt/dirt.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/dirt/dirt.png";

/***/ }),

/***/ "./src/assets/texture/grass/bottom.jpg":
/*!*********************************************!*\
  !*** ./src/assets/texture/grass/bottom.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/grass/bottom.jpg";

/***/ }),

/***/ "./src/assets/texture/grass/side.jpg":
/*!*******************************************!*\
  !*** ./src/assets/texture/grass/side.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/grass/side.jpg";

/***/ }),

/***/ "./src/assets/texture/grass/top.jpg":
/*!******************************************!*\
  !*** ./src/assets/texture/grass/top.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/grass/top.jpg";

/***/ }),

/***/ "./src/assets/texture/oakLeaves/oakLeaves.png":
/*!****************************************************!*\
  !*** ./src/assets/texture/oakLeaves/oakLeaves.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/oakLeaves/oakLeaves.png";

/***/ }),

/***/ "./src/assets/texture/oakLeaves/oakLeavesTransparent.png":
/*!***************************************************************!*\
  !*** ./src/assets/texture/oakLeaves/oakLeavesTransparent.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/oakLeaves/oakLeavesTransparent.png";

/***/ }),

/***/ "./src/assets/texture/oakLog/bottom.jpg":
/*!**********************************************!*\
  !*** ./src/assets/texture/oakLog/bottom.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/oakLog/bottom.jpg";

/***/ }),

/***/ "./src/assets/texture/oakLog/side.png":
/*!********************************************!*\
  !*** ./src/assets/texture/oakLog/side.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/oakLog/side.png";

/***/ }),

/***/ "./src/assets/texture/oakLog/top.jpg":
/*!*******************************************!*\
  !*** ./src/assets/texture/oakLog/top.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/oakLog/top.jpg";

/***/ }),

/***/ "./src/assets/texture/sand/sand.png":
/*!******************************************!*\
  !*** ./src/assets/texture/sand/sand.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/sand/sand.png";

/***/ }),

/***/ "./src/assets/texture/texture.png":
/*!****************************************!*\
  !*** ./src/assets/texture/texture.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/texture.png";

/***/ }),

/***/ "./src/assets/texture/water/water.jpeg":
/*!*********************************************!*\
  !*** ./src/assets/texture/water/water.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/texture/water/water.jpeg";

/***/ }),

/***/ "./node_modules/three/examples/jsm/controls/PointerLockControls.js":
/*!*************************************************************************!*\
  !*** ./node_modules/three/examples/jsm/controls/PointerLockControls.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/three/examples/jsm/libs/lil-gui.module.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/three/examples/jsm/libs/lil-gui.module.min.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanController": () => (/* binding */ i),
/* harmony export */   "ColorController": () => (/* binding */ a),
/* harmony export */   "Controller": () => (/* binding */ t),
/* harmony export */   "FunctionController": () => (/* binding */ h),
/* harmony export */   "GUI": () => (/* binding */ g),
/* harmony export */   "NumberController": () => (/* binding */ d),
/* harmony export */   "OptionController": () => (/* binding */ c),
/* harmony export */   "StringController": () => (/* binding */ u),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */
class t{constructor(i,e,s,n,r="div"){this.parent=i,this.object=e,this.property=s,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),t.nextNameID=t.nextNameID||0,this.$name.id="lil-gui-name-"+ ++t.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),void 0!==this._onChange&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),void 0!==this._onFinishChange&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}listen(t=!0){return this._listening=t,void 0!==this._listenCallbackID&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class i extends t{constructor(t,i,e){super(t,i,e,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function e(t){let i,e;return(i=t.match(/(#|0x)?([a-f0-9]{6})/i))?e=i[2]:(i=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),!!e&&"#"+e}const s={isPrimitive:!0,match:t=>"string"==typeof t,fromHexString:e,toHexString:e},n={isPrimitive:!0,match:t=>"number"==typeof t,fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},r={isPrimitive:!1,match:Array.isArray,fromHexString(t,i,e=1){const s=n.fromHexString(t);i[0]=(s>>16&255)/255*e,i[1]=(s>>8&255)/255*e,i[2]=(255&s)/255*e},toHexString:([t,i,e],s=1)=>n.toHexString(t*(s=255/s)<<16^i*s<<8^e*s<<0)},l={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,i,e=1){const s=n.fromHexString(t);i.r=(s>>16&255)/255*e,i.g=(s>>8&255)/255*e,i.b=(255&s)/255*e},toHexString:({r:t,g:i,b:e},s=1)=>n.toHexString(t*(s=255/s)<<16^i*s<<8^e*s<<0)},o=[s,n,r,l];class a extends t{constructor(t,i,s,n){var r;super(t,i,s,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,o.find(t=>t.match(r))),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const t=e(this.$text.value);t&&this._setValueFromHexString(t)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class h extends t{constructor(t,i,e){super(t,i,e,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",t=>{t.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class d extends t{constructor(t,i,e,s,n,r){super(t,i,e,"number"),this._initInput(),this.min(s),this.max(n);const l=void 0!==r;this.step(l?r:this._getImplicitStep(),l),this.updateDisplay()}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=100*i+"%"}return this._inputFocused||(this.$input.value=t),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=t=>{const i=parseFloat(this.$input.value);isNaN(i)||(this._snapClampSetValue(i+t),this.$input.value=this.getValue())};let i,e,s,n,r,l=!1;const o=t=>{if(l){const s=t.clientX-i,n=t.clientY-e;Math.abs(n)>5?(t.preventDefault(),this.$input.blur(),l=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(s)>5&&a()}if(!l){const i=t.clientY-s;r-=i*this._step*this._arrowKeyMultiplier(t),n+r>this._max?r=this._max-n:n+r<this._min&&(r=this._min-n),this._snapClampSetValue(n+r)}s=t.clientY},a=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",a)};this.$input.addEventListener("input",()=>{const t=parseFloat(this.$input.value);isNaN(t)||this.setValue(this._clamp(t))}),this.$input.addEventListener("keydown",i=>{"Enter"===i.code&&this.$input.blur(),"ArrowUp"===i.code&&(i.preventDefault(),t(this._step*this._arrowKeyMultiplier(i))),"ArrowDown"===i.code&&(i.preventDefault(),t(this._step*this._arrowKeyMultiplier(i)*-1))}),this.$input.addEventListener("wheel",i=>{this._inputFocused&&(i.preventDefault(),t(this._step*this._normalizeMouseWheel(i)))}),this.$input.addEventListener("mousedown",t=>{i=t.clientX,e=s=t.clientY,l=!0,n=this.getValue(),r=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",a)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=t=>{const i=this.$slider.getBoundingClientRect();let e=(s=t,n=i.left,r=i.right,l=this._min,o=this._max,(s-n)/(r-n)*(o-l)+l);var s,n,r,l,o;this._snapClampSetValue(e)},i=i=>{t(i.clientX)},e=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",e)};let s,n,r=!1;const l=i=>{i.preventDefault(),this._setDraggingStyle(!0),t(i.touches[0].clientX),r=!1},o=i=>{if(r){const t=i.touches[0].clientX-s,e=i.touches[0].clientY-n;Math.abs(t)>Math.abs(e)?l(i):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",a))}else i.preventDefault(),t(i.touches[0].clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",a)},h=this._callOnFinishChange.bind(this);let d;this.$slider.addEventListener("mousedown",s=>{this._setDraggingStyle(!0),t(s.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",e)}),this.$slider.addEventListener("touchstart",t=>{t.touches.length>1||(this._hasScrollBar?(s=t.touches[0].clientX,n=t.touches[0].clientY,r=!0):l(t),window.addEventListener("touchmove",o),window.addEventListener("touchend",a))}),this.$slider.addEventListener("wheel",t=>{if(Math.abs(t.deltaX)<Math.abs(t.deltaY)&&this._hasScrollBar)return;t.preventDefault();const i=this._normalizeMouseWheel(t)*this._step;this._snapClampSetValue(this.getValue()+i),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(h,400)})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+i,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:e}=t;Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,e=-t.wheelDelta/120,e*=this._stepExplicit?1:10);return i+-e}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){const i=Math.round(t/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return void 0!==this._min}get _hasMax(){return void 0!==this._max}}class c extends t{constructor(t,i,e,s){super(t,i,e,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(t=>{const i=document.createElement("option");i.innerHTML=t,this.$select.appendChild(i)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.innerHTML=-1===i?t:this._names[i],this}}class u extends t{constructor(t,i,e){super(t,i,e,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",t=>{"Enter"===t.code&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let p=!1;class g{constructor({parent:t,autoPlace:i=void 0===t,container:e,width:s,title:n="Controls",injectStyles:r=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",t=>{"Enter"!==t.code&&"Space"!==t.code||(t.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),l&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!p&&r&&(!function(t){const i=document.createElement("style");i.innerHTML=t;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(i,e):document.head.appendChild(i)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),p=!0),e?e.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",t=>t.stopPropagation()),this.domElement.addEventListener("keyup",t=>t.stopPropagation())}add(t,e,s,n,r){if(Object(s)===s)return new c(this,t,e,s);const l=t[e];switch(typeof l){case"number":return new d(this,t,e,s,n,r);case"boolean":return new i(this,t,e);case"string":return new u(this,t,e);case"function":return new h(this,t,e)}console.error("gui.add failed\n\tproperty:",e,"\n\tobject:",t,"\n\tvalue:",l)}addColor(t,i,e=1){return new a(this,t,i,e)}addFolder(t){return new g({parent:this,title:t})}load(t,i=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof h||i._name in t.controllers&&i.load(t.controllers[i._name])}),i&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(t=>{if(!(t instanceof h)){if(t._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);i.controllers[t._name]=t.save()}}),t&&this.folders.forEach(t=>{if(t._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);i.folders[t._title]=t.save()}),i}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const e=t=>{t.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",e))};this.$children.addEventListener("transitionend",e);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),void 0!==this._onChange&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),void 0!==this._onFinishChange&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (g);


/***/ }),

/***/ "./node_modules/three/examples/jsm/libs/stats.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/three/examples/jsm/libs/stats.module.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ }),

/***/ "./node_modules/three/examples/jsm/objects/Sky.js":
/*!********************************************************!*\
  !*** ./node_modules/three/examples/jsm/objects/Sky.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sky": () => (/* binding */ Sky)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


/**
 * Based on "A Practical Analytic Model for Daylight"
 * aka The Preetham Model, the de facto standard analytic skydome model
 * https://www.researchgate.net/publication/220720443_A_Practical_Analytic_Model_for_Daylight
 *
 * First implemented by Simon Wallner
 * http://simonwallner.at/project/atmospheric-scattering/
 *
 * Improved by Martin Upitis
 * http://blenderartists.org/forum/showthread.php?245954-preethams-sky-impementation-HDR
 *
 * Three.js integration by zz85 http://twitter.com/blurspline
*/

class Sky extends three__WEBPACK_IMPORTED_MODULE_0__.Mesh {

	constructor() {

		const shader = Sky.SkyShader;

		const material = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial( {
			name: 'SkyShader',
			fragmentShader: shader.fragmentShader,
			vertexShader: shader.vertexShader,
			uniforms: three__WEBPACK_IMPORTED_MODULE_0__.UniformsUtils.clone( shader.uniforms ),
			side: three__WEBPACK_IMPORTED_MODULE_0__.BackSide,
			depthWrite: false
		} );

		super( new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry( 1, 1, 1 ), material );

		this.isSky = true;

	}

}

Sky.SkyShader = {

	uniforms: {
		'turbidity': { value: 2 },
		'rayleigh': { value: 1 },
		'mieCoefficient': { value: 0.005 },
		'mieDirectionalG': { value: 0.8 },
		'sunPosition': { value: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3() },
		'up': { value: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( 0, 1, 0 ) }
	},

	vertexShader: /* glsl */`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,

	fragmentShader: /* glsl */`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPos );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`

};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/index.js"), __webpack_exec__("./src/js/main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QyxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2Nzcy9tYWluLmNzcz9jMDhlIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9hc3NldHMvIHN5bmMgXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJCIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvQmxvY2suanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL0xhbmRzY2FwZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvUG9pbnRlckxvY2tDb250cm9scy5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2xpYnMvbGlsLWd1aS5tb2R1bGUubWluLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vbGlicy9zdGF0cy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9vYmplY3RzL1NreS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1nL2Nsb3VkLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvY2xvdWQuanBnXCIsXG5cdFwiLi9pbWcvY2xvdWQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9jbG91ZC5wbmdcIixcblx0XCIuL2ltZy9jbG91ZEEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9jbG91ZEEuanBnXCIsXG5cdFwiLi9pbWcvZGlzYy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL2Rpc2MucG5nXCIsXG5cdFwiLi9pbWcvZGlzY2cucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9kaXNjZy5wbmdcIixcblx0XCIuL2ltZy9mYXZpY29uLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvZmF2aWNvbi5zdmdcIixcblx0XCIuL2ltZy9uZXVyb25hLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvbmV1cm9uYS5qcGdcIixcblx0XCIuL2ltZy9zaGlueVAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9zaGlueVAuanBnXCIsXG5cdFwiLi9pbWcvc2hpbnlQQi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3NoaW55UEIucG5nXCIsXG5cdFwiLi9pbWcvc21va2UucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9zbW9rZS5wbmdcIixcblx0XCIuL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXG5cdFwiLi90ZXh0dXJlL2RpcnQvY3VzdG9tZGlydC5wbmdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS9kaXJ0L2N1c3RvbWRpcnQucG5nXCIsXG5cdFwiLi90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXG5cdFwiLi90ZXh0dXJlL2dyYXNzL2JvdHRvbS5qcGdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS9ncmFzcy9ib3R0b20uanBnXCIsXG5cdFwiLi90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIixcblx0XCIuL3RleHR1cmUvZ3Jhc3MvdG9wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3RvcC5qcGdcIixcblx0XCIuL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxuXHRcIi4vdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzVHJhbnNwYXJlbnQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlc1RyYW5zcGFyZW50LnBuZ1wiLFxuXHRcIi4vdGV4dHVyZS9vYWtMb2cvYm90dG9tLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9ib3R0b20uanBnXCIsXG5cdFwiLi90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxuXHRcIi4vdGV4dHVyZS9vYWtMb2cvdG9wLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy90b3AuanBnXCIsXG5cdFwiLi90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXG5cdFwiLi90ZXh0dXJlL3RleHR1cmUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvdGV4dHVyZS5wbmdcIixcblx0XCIuL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJFwiOyIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuLy9pbXBvcnQgKiBhcyBGUyBmcm9tICdmcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2sge1xyXG4gIGNvbnN0cnVjdG9yKHsgYmxvY2tUeXBlLCBtYXRlcmlhbEFycmF5LCBtZXNoLCBjb3VudCwgYmlvbWVzIH0pIHtcclxuICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgdGhpcy5tYXRlcmlhbEFycmF5ID0gbWF0ZXJpYWxBcnJheTtcclxuICAgIHRoaXMubWVzaCA9IG1lc2g7XHJcbiAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgICB0aGlzLmJpb21lcyA9IGJpb21lcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja01hdGVyaWFscyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB2YXIgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcclxuXHJcbiAgICB0aGlzLmRpcnRNYXQgPSBbXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb2JibGVzdG9uZU1hdCA9IFtcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9ha0xvZ01hdCA9IFtcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9vYWtMb2cvc2lkZS5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9vYWtMb2cvc2lkZS5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9vYWtMb2cvdG9wLmpwZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9ib3R0b20uanBnXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vYWtMZWF2ZXNNYXQgPSBbXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zYW5kTWF0ID0gW1xyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMud2F0ZXJNYXQgPSBbXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5ncmFzc01hdCA9IFtcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZ3Jhc3MvdG9wLmpwZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2dyYXNzL2JvdHRvbS5qcGdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGV4dHVyZU9wYWNpdHkoKTtcclxuICAgIC8vdGhpcy50ZXh0dXJlSW1hZ2VzTG9hZGVyKFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZ3Jhc3NcIik7XHJcbiAgfVxyXG4gIHRleHR1cmVJbWFnZXNMb2FkZXIoZmlsZVVSTCkge1xyXG4gICAgLy9qb2luaW5nIHBhdGggb2YgZGlyZWN0b3J5XHJcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gZmlsZVVSTDtcclxuICAgIC8vcGFzc3NpbmcgZGlyZWN0b3J5UGF0aCBhbmQgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgIGZzLnJlYWRkaXIoZGlyZWN0b3J5UGF0aCwgZnVuY3Rpb24gKGVyciwgZmlsZXMpIHtcclxuICAgICAgLy9oYW5kbGluZyBlcnJvclxyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIHNjYW4gZGlyZWN0b3J5OiBcIiArIGVycik7XHJcbiAgICAgIH1cclxuICAgICAgLy9saXN0aW5nIGFsbCBmaWxlcyB1c2luZyBmb3JFYWNoXHJcbiAgICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICAvLyBEbyB3aGF0ZXZlciB5b3Ugd2FudCB0byBkbyB3aXRoIHRoZSBmaWxlXHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsZTtcclxuICB9XHJcbiAgdGV4dHVyZU9wYWNpdHkoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2F0ZXJNYXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGkgPT0gMiB8fCBpID09IDMpIHtcclxuICAgICAgICAvLyB0b3AgYW5kIGJvdHRvbVxyXG4gICAgICAgIHRoaXMud2F0ZXJNYXRbaV0udHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2F0ZXJNYXRbaV0ub3BhY2l0eSA9IDAuNztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBzaWRlc1xyXG4gICAgICAgIHRoaXMud2F0ZXJNYXRbaV0udHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2F0ZXJNYXRbaV0ub3BhY2l0eSA9IDAuNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB2YXIgYmxvY2tHb2VtID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xyXG4gICAgdmFyIGJsb2NrTWF0ZXJpYWxzID0gbmV3IEJsb2NrTWF0ZXJpYWxzKCk7XHJcbiAgICB2YXIgcmVuZGVyRGlzdGFuY2UgPSA0O1xyXG4gICAgdmFyIGNodW5rU2l6ZSA9IDEwO1xyXG4gICAgdmFyIGRlcHRoID0gNTtcclxuXHJcbiAgICB0aGlzLmJsb2NrR29lbSA9IGJsb2NrR29lbTtcclxuICAgIHRoaXMuYmxvY2tNYXRlcmlhbHMgPSBibG9ja01hdGVyaWFscztcclxuICAgIHRoaXMucmVuZGVyRGlzdGFuY2UgPSByZW5kZXJEaXN0YW5jZTtcclxuICAgIHRoaXMuY2h1bmtTaXplID0gY2h1bmtTaXplO1xyXG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xyXG5cclxuICAgIHRoaXMuZ3Jhc3MgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwiZ3Jhc3NcIixcclxuICAgICAgbWF0ZXJpYWxBcnJheTogYmxvY2tNYXRlcmlhbHMuZ3Jhc3NNYXQsXHJcbiAgICAgIG1lc2g6IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMuZ3Jhc3NNYXQpLFxyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgcmFuZ2U6IFswXSxcclxuICAgICAgYmlvbWVzOiBbXCJwbGFpbnNcIl0sXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGlydCA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJkaXJ0XCIsXHJcbiAgICAgIG1hdGVyaWFsQXJyYXk6IGJsb2NrTWF0ZXJpYWxzLmRpcnRNYXQsXHJcbiAgICAgIG1lc2g6IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMuZGlydE1hdCksXHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICByYW5nZTogWzEsIDJdLFxyXG4gICAgICBiaW9tZXM6IFtcInBsYWluc1wiXSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb2JibGVzdG9uZSA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJjb2JibGVzdG9uZVwiLFxyXG4gICAgICBtYXRlcmlhbEFycmF5OiBibG9ja01hdGVyaWFscy5jb2JibGVzdG9uZU1hdCxcclxuICAgICAgbWVzaDogbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5jb2JibGVzdG9uZU1hdCksXHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICByYW5nZTogWzMsIDRdLFxyXG4gICAgICBiaW9tZXM6IFtcInBsYWluc1wiLCBcImRlc2VydFwiXSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vYWtMb2cgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwib2FrTG9nXCIsXHJcbiAgICAgIG1hdGVyaWFsQXJyYXk6IGJsb2NrTWF0ZXJpYWxzLm9ha0xvZ01hdCxcclxuICAgICAgbWVzaDogbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5vYWtMb2dNYXQpLFxyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgcmFuZ2U6IFtdLFxyXG4gICAgICBiaW9tZXM6IFtcInBsYWluc1wiXSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vYWtMZWF2ZXMgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwib2FrTGVhdmVzXCIsXHJcbiAgICAgIG1hdGVyaWFsQXJyYXk6IGJsb2NrTWF0ZXJpYWxzLm9ha0xlYXZlc01hdCxcclxuICAgICAgbWVzaDogbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5vYWtMZWF2ZXNNYXQpLFxyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgcmFuZ2U6IFtdLFxyXG4gICAgICBiaW9tZXM6IFtcInBsYWluc1wiXSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zYW5kID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcInNhbmRcIixcclxuICAgICAgbWF0ZXJpYWxBcnJheTogYmxvY2tNYXRlcmlhbHMuc2FuZE1hdCxcclxuICAgICAgbWVzaDogbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5zYW5kTWF0KSxcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHJhbmdlOiBbMCwgMSwgMl0sXHJcbiAgICAgIGJpb21lczogW1wiZGVzZXJ0XCJdLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLndhdGVyID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcIndhdGVyXCIsXHJcbiAgICAgIG1hdGVyaWFsQXJyYXk6IGJsb2NrTWF0ZXJpYWxzLndhdGVyTWF0LFxyXG4gICAgICBtZXNoOiBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLndhdGVyTWF0KSxcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHJhbmdlOiBbXSxcclxuICAgICAgYmlvbWVzOiBbXCJwbGFpbnNcIiwgXCJkZXNlcnRcIl0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5leHBvcnQgdmFyIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcclxuICA3NSxcclxuICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAwLjEsXHJcbiAgMTAwMFxyXG4pO1xyXG5cclxuY2FtZXJhLnBvc2l0aW9uLnNldFgoMjUpO1xyXG5jYW1lcmEucG9zaXRpb24uc2V0Wig3NSk7XHJcbmNhbWVyYS5wb3NpdGlvbi5zZXRZKDEwKTtcclxuIiwiaW1wb3J0IFwiLi4vY3NzL21haW4uY3NzXCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBQb2ludGVyTG9ja0NvbnRyb2xzIH0gZnJvbSBcInRocmVlL2FkZG9ucy9jb250cm9scy9Qb2ludGVyTG9ja0NvbnRyb2xzLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbHMge1xyXG4gIGNvbnN0cnVjdG9yKHsgcGxheWVyIH0pIHtcclxuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuICAgIHRoaXMua2V5QWN0aW9uTWFwID0ge1xyXG4gICAgICBLZXlXOiBcIm1vdmVGb3J3YXJkXCIsXHJcbiAgICAgIEtleVM6IFwibW92ZUJhY2t3YXJkXCIsXHJcbiAgICAgIEtleUE6IFwibW92ZUxlZnRcIixcclxuICAgICAgS2V5RDogXCJtb3ZlUmlnaHRcIixcclxuICAgICAgU3BhY2U6IFwianVtcFwiLFxyXG4gICAgICBEaWdpdDE6IFwidGV4dHVyZTFcIixcclxuICAgICAgRGlnaXQyOiBcInRleHR1cmUzXCIsXHJcbiAgICAgIERpZ2l0MzogXCJ0ZXh0dXJlNFwiLFxyXG4gICAgICBEaWdpdDQ6IFwidGV4dHVyZTVcIixcclxuICAgIH07XHJcbiAgICB0aGlzLmZwdiA9IG5ldyBQb2ludGVyTG9ja0NvbnRyb2xzKFxyXG4gICAgICB0aGlzLnBsYXllci5jYW1lcmEsXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmdcIilcclxuICAgICk7XHJcbiAgICB0aGlzLmluaXRDb250cm9scygpO1xyXG4gIH1cclxuXHJcbiAgaW5pdENvbnRyb2xzKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlS2V5RG93bihldmVudCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVLZXlVcChldmVudCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XHJcbiAgICAgIHRoaXMuZnB2LmxvY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5mcHYuYWRkRXZlbnRMaXN0ZW5lcihcImxvY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvL21lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvY2tlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZnB2LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvL21lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgY29uc29sZS5sb2coXCJ1bmxvY2tlZFwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWN0aW9uQnlLZXkoa2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5rZXlBY3Rpb25NYXBba2V5XTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleURvd24oZXZlbnQpIHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uQnlLZXkoZXZlbnQuY29kZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwia2V5RG93biBcIiArIGV2ZW50KTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwW2FjdGlvbl0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImFjdGlvbnMga2V5RG93blwiLCB0aGlzLnBsYXllci5hY3Rpb25NYXApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5VXAoZXZlbnQpIHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uQnlLZXkoZXZlbnQuY29kZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwW2FjdGlvbl0gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coXCJhY3Rpb25zIFwiLCB0aGlzLnBsYXllci5hY3Rpb25NYXApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0ICogYXMgQkxLIGZyb20gXCIuL0Jsb2NrLmpzXCI7XHJcbmltcG9ydCAqIGFzIGNtIGZyb20gXCIuL0NhbWVyYS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBjdCBmcm9tIFwiLi9Db250cm9scy5qc1wiO1xyXG5pbXBvcnQgKiBhcyBDQU5OT04gZnJvbSBcImNhbm5vbi1lc1wiO1xyXG5pbXBvcnQgKiBhcyBtbiBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5jb25zdCBjYW1lcmEgPSBjbS5jYW1lcmE7XHJcblxyXG52YXIgY2h1bmtTaXplID0gMTA7XHJcbmNvbnN0IGxhbmRzY2FwZSA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJsb2NrcyhzY2VuZSkge1xyXG4gIHZhciBibG9ja3MgPSBuZXcgQkxLLkJsb2NrcygpO1xyXG4gIHZhciBjdWJlID0gYmxvY2tzLmdyYXNzLm1lc2g7XHJcblxyXG4gIC8vY29uc3QgW3gseSx6XT0gQXJyYXkoMykuZmlsbCgpLmxhbmRzY2FwZSgoKT0+VEhSRUUuTWF0aFV0aWxzLnJhbmRGbG9hdFNwcmVhZCggMTAwICkgKTtcclxuXHJcbiAgY3ViZS5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XHJcbiAgY29uc29sZS5sb2coY3ViZSk7XHJcbiAgc2NlbmUuYWRkKGN1YmUpO1xyXG59XHJcbmZ1bmN0aW9uIExhbmRzY2FwZVNldHVwKHNjZW5lKSB7XHJcbiAgZm9yICh2YXIgeEluZGV4ID0gMDsgeEluZGV4IDwgMTA7IHhJbmRleCsrKSB7XHJcbiAgICBmb3IgKHZhciB6SW5kZXggPSAwOyB6SW5kZXggPCAxMDsgekluZGV4KyspIHtcclxuICAgICAgdmFyIGJsb2NrcyA9IG5ldyBCTEsuQmxvY2tzKCk7XHJcbiAgICAgIHZhciBibG9jayA9IGJsb2Nrcy5ncmFzcy5tZXNoO1xyXG4gICAgICB2YXIgeiA9IHpJbmRleCAqIDU7XHJcbiAgICAgIHZhciB4ID0geEluZGV4ICogNTtcclxuICAgICAgdmFyIHkgPSAwO1xyXG4gICAgICBibG9jay5wb3NpdGlvbi5zZXQoeCwgeSwgeik7XHJcbiAgICAgIHNjZW5lLmFkZChibG9jayk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGRpcGxheUJsb2Nrc0Fyb3VuZENhbWVyYSgpIHtcclxuICBjb25zb2xlLmxvZyhcImluIFBsYWNlQmxvY2tzQXJvdW5kQ2FtZXJhXCIpO1xyXG4gIC8vY29uc29sZS5sb2coJ2NhbWVyYS5wb3NpdGlvbiAnLHBvc2l0aW9uKVxyXG4gIGNvbnN0IGRpcGxheWFibGVMYW5kc2NhcGUgPSBBcnJheSgpO1xyXG4gIHZhciBjYW1lcmFCbG9jayA9IGZpbmRCbG9ja1VuZGVyQ2FtKCk7XHJcbiAgdmFyIGZpcnN0QmxvY2tQb3NpdGlvbiA9IGZpbmRGaXJzdEJsb2NrSW5EaXNwbGF5KGNhbWVyYUJsb2NrKTtcclxuXHJcbiAgLy9jb25zb2xlLmxvZygnY2FtZXJhQmxvY2sgJyxjYW1lcmFCbG9jaylcclxuICAvL2NvbnNvbGUubG9nKCdmaXJzdEJsb2NrUG9zaXRpb24gJyxmaXJzdEJsb2NrUG9zaXRpb24pXHJcblxyXG4gIGZvciAodmFyIHhJbmRleCA9IDA7IHhJbmRleCA8IDEwOyB4SW5kZXgrKykge1xyXG4gICAgZm9yICh2YXIgekluZGV4ID0gMDsgekluZGV4IDwgMTU7IHpJbmRleCsrKSB7XHJcbiAgICAgIHZhciB6ID0gZmlyc3RCbG9ja1Bvc2l0aW9uLnogKyB6SW5kZXg7XHJcbiAgICAgIHZhciB4ID0gZmlyc3RCbG9ja1Bvc2l0aW9uLnggKyB4SW5kZXg7XHJcbiAgICAgIC8vdmFyIHkgPSAwXHJcblxyXG4gICAgICAvL2xhbmRzY2FwZVt4XVt6XS52aXNpYmxlID0gdHJ1ZVxyXG4gICAgICBkaXBsYXlhYmxlTGFuZHNjYXBlLnB1c2goeCwgeik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBkaXBsYXlhYmxlTGFuZHNjYXBlO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmRCbG9ja1VuZGVyQ2FtKCkge1xyXG4gIC8vY29uc29sZS5sb2coJ2luIGNlbnRlckxhbmRzY2FwZScpXHJcbiAgY29uc3QgcG9zaXRpb24gPSBjYW1lcmEucG9zaXRpb247XHJcblxyXG4gIHZhciBwb3NYID0gcGFyc2VJbnQocG9zaXRpb24ueCAvIDUpO1xyXG4gIHZhciBwb3NaID0gcGFyc2VJbnQocG9zaXRpb24ueiAvIDUpO1xyXG5cclxuICB2YXIgcG9zQmxvY2sgPSB7IHg6IHBvc1gsIHo6IHBvc1ogfTtcclxuICByZXR1cm4gcG9zQmxvY2s7XHJcbn1cclxuZnVuY3Rpb24gZmluZEZpcnN0QmxvY2tJbkRpc3BsYXkocG9zQmxvY2tDYW0pIHtcclxuICAvL2NvbnNvbGUubG9nKCdpbiBjZW50ZXJMYW5kc2NhcGUnKVxyXG5cclxuICB2YXIgcG9zWCA9IHBvc0Jsb2NrQ2FtLnggLSA1O1xyXG4gIHZhciBwb3NaID0gcG9zQmxvY2tDYW0ueiAtIDE1O1xyXG5cclxuICB2YXIgcG9zQmxvY2sgPSB7IHg6IHBvc1gsIHo6IHBvc1ogfTtcclxuICByZXR1cm4gcG9zQmxvY2s7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRCbG9ja3NUb1NjZW5lKGFkZExpc3QpIHtcclxuICBhZGRMaXN0LmZvckVhY2goKGJsb2NrKSA9PiB7XHJcbiAgICBibG9jay52aXNpYmxlID0gdHJ1ZTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJsb2Nrc0Zyb21TY2VuZSgpIHtcclxuICBsYW5kc2NhcGUuZm9yRWFjaCgocG9zaXRpb24pID0+IHtcclxuICAgIHBvc2l0aW9uLmZvckVhY2goKGJsb2NrKSA9PiB7XHJcbiAgICAgIGJsb2NrLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUxhbmRzY2FwZXMoZGlwbGF5YWJsZUxhbmRzY2FwZSkge1xyXG4gIHZhciBibG9ja1RvS2VlcCA9IEFycmF5KCk7XHJcbiAgdmFyIGJsb2NrVG9EZWxldGUgPSBBcnJheSgpO1xyXG4gIHZhciBibG9ja1RvQWRkID0gQXJyYXkoKTtcclxuXHJcbiAgYmxvY2tUb0tlZXAgPSBnZXRJbnRlcnNlY3Rpb24obGFuZHNjYXBlLCBkaXBsYXlhYmxlTGFuZHNjYXBlKTtcclxuICBibG9ja1RvRGVsZXRlID0gZ2V0RXhjbHVzaW9uQShsYW5kc2NhcGUsIGJsb2NrVG9LZWVwKTtcclxuICBibG9ja1RvQWRkID0gZ2V0VW5pb24oZGlwbGF5YWJsZUxhbmRzY2FwZSwgYmxvY2tUb0tlZXApO1xyXG4gIHJldHVybiB7IHJtTGlzdDogYmxvY2tUb0RlbGV0ZSwgYWRkTGlzdDogYmxvY2tUb0FkZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGFuZHNjYXBlKHNjZW5lKSB7XHJcbiAgY29uc29sZS5sb2coXCJpbiBsYW5kc2NhcGVcIik7XHJcbiAgZm9yICh2YXIgeEluZGV4ID0gMDsgeEluZGV4IDwgMTA7IHhJbmRleCsrKSB7XHJcbiAgICBsYW5kc2NhcGVbeEluZGV4XSA9IEFycmF5KCk7XHJcbiAgICBmb3IgKHZhciB6SW5kZXggPSAwOyB6SW5kZXggPCAxMDsgekluZGV4KyspIHtcclxuICAgICAgY29uc3QgYmxvY2tzID0gbmV3IEJMSy5CbG9ja3MoKTtcclxuICAgICAgY29uc3QgYmxvY2sgPSBibG9ja3MuZ3Jhc3MubWVzaDtcclxuICAgICAgY29uc3QgeiA9IHpJbmRleDtcclxuICAgICAgY29uc3QgeCA9IHhJbmRleDtcclxuICAgICAgY29uc3QgeSA9IDA7XHJcbiAgICAgIGJsb2NrLnBvc2l0aW9uLnNldCh4LCB5LCB6KTtcclxuICAgICAgY29uc3QgYmxvY2tTaGFwZSA9IG5ldyBDQU5OT04uQm94KG5ldyBDQU5OT04uVmVjMygxLCAxLCAxKSk7XHJcbiAgICAgIGNvbnN0IGJsb2NrQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IDAgfSk7XHJcbiAgICAgIGJsb2NrQm9keS5wb3NpdGlvbi5zZXQoeCwgeSwgeik7XHJcbiAgICAgIG1uLm1lc2hlcy5wdXNoKGJsb2NrKTtcclxuICAgICAgYmxvY2tCb2R5LmFkZFNoYXBlKGJsb2NrU2hhcGUpO1xyXG4gICAgICBtbi5ib2RpZXMucHVzaChibG9ja0JvZHkpO1xyXG4gICAgICBtbi53b3JsZC5hZGRCb2R5KGJsb2NrQm9keSk7XHJcbiAgICAgIHNjZW5lLmFkZChibG9jayk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGFuZHNjYXBlKCkge1xyXG4gIC8vY29uc29sZS5sb2coJ2luIHVwZGF0ZUxhbmRzY2FwZScpXHJcbiAgcmVtb3ZlQmxvY2tzRnJvbVNjZW5lKCk7XHJcbiAgZGlwbGF5QmxvY2tzQXJvdW5kQ2FtZXJhKCk7XHJcbiAgLy92YXIgcHJpbnRhYmxlTGFuZHNjYXBlID0gZGlwbGF5QmxvY2tzQXJvdW5kQ2FtZXJhKHNjZW5lKVxyXG4gIC8vdmFyIGJsb2NrcyA9IGNvbXBhcmVMYW5kc2NhcGVzKHByaW50YWJsZUxhbmRzY2FwZSlcclxuICAvL3JlbW92ZUJsb2Nrc0Zyb21TY2VuZShzY2VuZSwgYmxvY2tzLnJtTGlzdClcclxuICAvL2FkZEJsb2Nrc1RvU2NlbmUoc2NlbmUsIGJsb2Nrcy5hZGRMaXN0KVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgKiBhcyBDQU5OT04gZnJvbSBcImNhbm5vbi1lc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgLy92YXIgbW92ZUJhY2t3YXJkLCBtb3ZlRm9yd2FyZCwgbW92ZVJpZ2h0LCBtb3ZlTGVmdCwganVtcCA9IHVzZUtleWJvYXJkKClcclxuXHJcbiAgcGxyR2VvbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgpO1xyXG4gIHBsck1hdCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCgpO1xyXG4gIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0aGlzLnBsckdlb20sIHRoaXMucGxyTWF0KTtcclxuXHJcbiAgY29uc3RydWN0b3IoeyBjYW1lcmEsIGNvbnRyb2xzLCBtZXNoIH0pIHtcclxuICAgIHRoaXMuYWN0aW9uTWFwID0ge1xyXG4gICAgICBtb3ZlRm9yd2FyZDogZmFsc2UsXHJcbiAgICAgIG1vdmVCYWNrd2FyZDogZmFsc2UsXHJcbiAgICAgIG1vdmVMZWZ0OiBmYWxzZSxcclxuICAgICAgbW92ZVJpZ2h0OiBmYWxzZSxcclxuICAgICAganVtcDogZmFsc2UsXHJcbiAgICAgIHRleHR1cmUxOiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTM6IGZhbHNlLFxyXG4gICAgICB0ZXh0dXJlNDogZmFsc2UsXHJcbiAgICAgIHRleHR1cmU1OiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHM7XHJcblxyXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5wbHJHZW9tLCB0aGlzLnBsck1hdCk7XHJcbiAgICB0aGlzLm1hc3MgPSAxO1xyXG4gICAgdGhpcy5tb3ZlbWVudFNwZWVkID0gMi41O1xyXG4gICAgdGhpcy5qdW1wRm9yY2UgPSAzO1xyXG4gICAgdGhpcy5wbGF5ZXJTaGFwZSA9IG5ldyBDQU5OT04uU3BoZXJlKDEpO1xyXG4gICAgdGhpcy5wbGF5ZXJCb2R5ID0gbmV3IENBTk5PTi5Cb2R5KHsgbWFzczogdGhpcy5tYXNzIH0pO1xyXG4gICAgdGhpcy5wbGF5ZXJCb2R5LmFkZFNoYXBlKHRoaXMucGxheWVyU2hhcGUpO1xyXG5cclxuICAgIC8vdGhpcy51cGRhdGVQbGF5ZXIoKTtcclxuICB9XHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdwbGF5ZXIgcG9zIHVwZGF0ZSA9JywgdGhpcy5tZXNoLnBvc2l0aW9uKTtcclxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNvcHkodGhpcy5tZXNoLnBvc2l0aW9uKTtcclxuICB9XHJcbiAgdXBkYXRlUGxheWVyKCkge1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgdGhpcy51c2VBY3Rpb24oKTtcclxuICB9XHJcbiAgdXNlQWN0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuYWN0aW9uTWFwW1wianVtcFwiXSAmJiBNYXRoLmFicyh0aGlzLnBsYXllckJvZHkudmVsb2NpdHkueSkgPCAwLjA1KSB7XHJcbiAgICAgIHRoaXMucGxheWVyQm9keS52ZWxvY2l0eS5zZXQoMCwgdGhpcy5qdW1wRm9yY2UsIDApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlyZWN0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICBjb25zdCBmcm9udFZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAodGhpcy5hY3Rpb25NYXBbXCJtb3ZlQmFja3dhcmRcIl0gPyAxIDogMCkgLVxyXG4gICAgICAgICh0aGlzLmFjdGlvbk1hcFtcIm1vdmVGb3J3YXJkXCJdID8gMSA6IDApXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNpZGVWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgKHRoaXMuYWN0aW9uTWFwW1wibW92ZUxlZnRcIl0gPyAxIDogMCkgLVxyXG4gICAgICAgICh0aGlzLmFjdGlvbk1hcFtcIm1vdmVSaWdodFwiXSA/IDEgOiAwKSxcclxuICAgICAgMCxcclxuICAgICAgMFxyXG4gICAgKTtcclxuXHJcbiAgICBkaXJlY3Rpb24uc3ViVmVjdG9ycyhmcm9udFZlY3Rvciwgc2lkZVZlY3Rvcik7XHJcbiAgICBkaXJlY3Rpb24ubm9ybWFsaXplKCk7XHJcbiAgICBkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIodGhpcy5tb3ZlbWVudFNwZWVkKTtcclxuICAgIGRpcmVjdGlvbi5hcHBseUV1bGVyKHRoaXMuY2FtZXJhLnJvdGF0aW9uKTtcclxuXHJcbiAgICB0aGlzLnBsYXllckJvZHkudmVsb2NpdHkueCA9IGRpcmVjdGlvbi54O1xyXG4gICAgdGhpcy5wbGF5ZXJCb2R5LnZlbG9jaXR5LnogPSBkaXJlY3Rpb24uejtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgY2FudmFzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcnKSwgcG93ZXJQcmVmZXJlbmNlOiBcImhpZ2gtcGVyZm9ybWFuY2VcIiwgYW50aWFsaWFzOiB0cnVlIFxyXG59KTtcclxuXHJcbnJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nO1xyXG5yZW5kZXJlci50b25lTWFwcGluZyA9IFRIUkVFLkFDRVNGaWxtaWNUb25lTWFwcGluZztcclxucmVuZGVyZXIudG9uZU1hcHBpbmdFeHBvc3VyZSA9IDAuNTtcclxucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcclxucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCAqIGFzIGNtIGZyb20gXCIuL0NhbWVyYS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBjdCBmcm9tIFwiLi9Db250cm9scy5qc1wiO1xyXG5pbXBvcnQgKiBhcyByZCBmcm9tIFwiLi9SZW5kZXJlci5qc1wiO1xyXG5pbXBvcnQgKiBhcyBsZCBmcm9tIFwiLi9MYW5kc2NhcGUuanNcIjtcclxuaW1wb3J0IHsgR1VJIH0gZnJvbSBcInRocmVlL2FkZG9ucy9saWJzL2xpbC1ndWkubW9kdWxlLm1pbi5qc1wiO1xyXG5pbXBvcnQgeyBTa3kgfSBmcm9tIFwidGhyZWUvYWRkb25zL29iamVjdHMvU2t5LmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuY29uc3QgY2FtZXJhID0gY20uY2FtZXJhO1xyXG5jb25zdCByZW5kZXJlciA9IHJkLnJlbmRlcmVyO1xyXG5cclxubGV0IHNreSwgc3VuO1xyXG5cclxuaW5pdCgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdFNreSgpIHtcclxuICAvLyBBZGQgU2t5XHJcbiAgc2t5ID0gbmV3IFNreSgpO1xyXG4gIHNreS5zY2FsZS5zZXRTY2FsYXIoNDUwMDAwKTtcclxuICBzY2VuZS5hZGQoc2t5KTtcclxuXHJcbiAgc3VuID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgLy8vIEdVSVxyXG5cclxuICBjb25zdCBlZmZlY3RDb250cm9sbGVyID0ge1xyXG4gICAgdHVyYmlkaXR5OiAxMCxcclxuICAgIHJheWxlaWdoOiAzLFxyXG4gICAgbWllQ29lZmZpY2llbnQ6IDAuMDA1LFxyXG4gICAgbWllRGlyZWN0aW9uYWxHOiAwLjcsXHJcbiAgICBlbGV2YXRpb246IDIsXHJcbiAgICBhemltdXRoOiAxODAsXHJcbiAgICBleHBvc3VyZTogcmVuZGVyZXIudG9uZU1hcHBpbmdFeHBvc3VyZSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBndWlDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgdW5pZm9ybXMgPSBza3kubWF0ZXJpYWwudW5pZm9ybXM7XHJcbiAgICB1bmlmb3Jtc1tcInR1cmJpZGl0eVwiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIudHVyYmlkaXR5O1xyXG4gICAgdW5pZm9ybXNbXCJyYXlsZWlnaFwiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIucmF5bGVpZ2g7XHJcbiAgICB1bmlmb3Jtc1tcIm1pZUNvZWZmaWNpZW50XCJdLnZhbHVlID0gZWZmZWN0Q29udHJvbGxlci5taWVDb2VmZmljaWVudDtcclxuICAgIHVuaWZvcm1zW1wibWllRGlyZWN0aW9uYWxHXCJdLnZhbHVlID0gZWZmZWN0Q29udHJvbGxlci5taWVEaXJlY3Rpb25hbEc7XHJcblxyXG4gICAgY29uc3QgcGhpID0gVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDkwIC0gZWZmZWN0Q29udHJvbGxlci5lbGV2YXRpb24pO1xyXG4gICAgY29uc3QgdGhldGEgPSBUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQoZWZmZWN0Q29udHJvbGxlci5hemltdXRoKTtcclxuXHJcbiAgICBzdW4uc2V0RnJvbVNwaGVyaWNhbENvb3JkcygxLCBwaGksIHRoZXRhKTtcclxuXHJcbiAgICB1bmlmb3Jtc1tcInN1blBvc2l0aW9uXCJdLnZhbHVlLmNvcHkoc3VuKTtcclxuXHJcbiAgICByZW5kZXJlci50b25lTWFwcGluZ0V4cG9zdXJlID0gZWZmZWN0Q29udHJvbGxlci5leHBvc3VyZTtcclxuICAgIC8vcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ3VpID0gbmV3IEdVSSgpO1xyXG5cclxuICBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwidHVyYmlkaXR5XCIsIDAuMCwgMjAuMCwgMC4xKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwicmF5bGVpZ2hcIiwgMC4wLCA0LCAwLjAwMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgZ3VpXHJcbiAgICAuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwibWllQ29lZmZpY2llbnRcIiwgMC4wLCAwLjEsIDAuMDAxKVxyXG4gICAgLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIGd1aVxyXG4gICAgLmFkZChlZmZlY3RDb250cm9sbGVyLCBcIm1pZURpcmVjdGlvbmFsR1wiLCAwLjAsIDEsIDAuMDAxKVxyXG4gICAgLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJlbGV2YXRpb25cIiwgMCwgOTAsIDAuMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcImF6aW11dGhcIiwgLTE4MCwgMTgwLCAwLjEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJleHBvc3VyZVwiLCAwLCAxLCAwLjAwMDEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG5cclxuICBndWlDaGFuZ2VkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgY29uc3QgaGVscGVyID0gbmV3IFRIUkVFLkdyaWRIZWxwZXIoMTAwMDAsIDIsIDB4ZmZmZmZmLCAweGZmZmZmZik7XHJcbiAgc2NlbmUuYWRkKGhlbHBlcik7XHJcblxyXG4gIGluaXRTa3koKTtcclxufVxyXG5cclxuLy9zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKDB4MDBmZmZmKTtcclxuLy9zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKDB4MDBmZmZmLCAyLCA4MCk7XHJcblxyXG5jb25zdCBwb2ludExpZ2h0XzEgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZik7XHJcbnBvaW50TGlnaHRfMS5wb3NpdGlvbi5zZXQoNSwgNSwgMCk7XHJcbmNvbnN0IHBvaW50TGlnaHRfMiA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmKTtcclxucG9pbnRMaWdodF8yLnBvc2l0aW9uLnNldCgtNSwgNSwgMCk7XHJcbmNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuMTUpO1xyXG5cclxuc2NlbmUuYWRkKHBvaW50TGlnaHRfMSwgcG9pbnRMaWdodF8yLCBhbWJpZW50TGlnaHQpO1xyXG5cclxucmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9tYWluLmNzc1wiO1xyXG5cclxucmVxdWlyZS5jb250ZXh0KFwiLi4vYXNzZXRzXCIsIHRydWUsIC9cXC4ocG5nfHN2Z3xqcGd8anBlZ3xnaWYpJC8pO1xyXG5cclxuZnVuY3Rpb24gY2FudmFzKCkge1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgY2FudmFzLmlkID0gXCJiZ1wiO1xyXG4gIC8vY29uc3QgZmF2aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAvL2RvY3VtZW50LmhlYWQuYXBwZW5kKGZhdmljb24pO1xyXG4gIC8qZmF2aWNvbi5pZCA9ICdpY28nO1xyXG4gIGZhdmljb24ucmVsID0gJ2ljb24nO1xyXG4gIGZhdmljb24udHlwZSA9ICdpbWFnZS9zdmcreG1sJztcclxuICBmYXZpY29uLmhyZWY9ICdodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzQ4LzAwMDAwMC9taW5lY3JhZnQtcGlja2F4ZS5wbmcnOyovXHJcbiAgLy9jb25zb2xlLmxvZyh0ZXh0dXJlKTtcclxuICAvLyBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAvLyBMb2Rhc2gsIG5vdyBpbXBvcnRlZCBieSB0aGlzIHNjcmlwdFxyXG4gIC8vZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XHJcblxyXG4gIC8vIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVsbG8nKTtcclxuICAvL2J0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XHJcbiAgLy9idG4ub25jbGljayA9IHByaW50TWU7XHJcbiAgLy9lbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgcmV0dXJuIGNhbnZhcztcclxufVxyXG5cclxuZnVuY3Rpb24gY3Vyc29yKCkge1xyXG4gIGNvbnN0IGN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY3Vyc29yLmNsYXNzTmFtZSA9IFwiYWJzb2x1dGUgY2VudGVyZWQgY3Vyc29yXCI7XHJcbiAgY3Vyc29yLnRleHRDb250ZW50ID0gXCIgXCI7XHJcbiAgcmV0dXJuIGN1cnNvcjtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMoKSk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3Vyc29yKCkpO1xyXG4iLCJpbXBvcnQgXCIuLi9jc3MvbWFpbi5jc3NcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0ICogYXMgc2MgZnJvbSBcIi4vU2NlbmUuanNcIjtcbmltcG9ydCAqIGFzIGNtIGZyb20gXCIuL0NhbWVyYS5qc1wiO1xuaW1wb3J0ICogYXMgY3QgZnJvbSBcIi4vQ29udHJvbHMuanNcIjtcbmltcG9ydCAqIGFzIHJkIGZyb20gXCIuL1JlbmRlcmVyLmpzXCI7XG5pbXBvcnQgKiBhcyBsZCBmcm9tIFwiLi9MYW5kc2NhcGUuanNcIjtcbmltcG9ydCAqIGFzIEJMSyBmcm9tIFwiLi9CbG9jay5qc1wiO1xuaW1wb3J0ICogYXMgUExSIGZyb20gXCIuL1BsYXllci5qc1wiO1xuaW1wb3J0ICogYXMgQ0FOTk9OIGZyb20gXCJjYW5ub24tZXNcIjtcblxuaW1wb3J0IFN0YXRzIGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbGlicy9zdGF0cy5tb2R1bGVcIjtcblxuLy8gVGhyZWUgdmFyaWFibGVzXG5sZXQgc2NlbmUgPSBzYy5zY2VuZTtcbmxldCBjYW1lcmEgPSBjbS5jYW1lcmE7XG5sZXQgcmVuZGVyZXIgPSByZC5yZW5kZXJlcjtcbmNvbnN0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG5sZXQgc3RhdHM7XG5cbi8vIE1pbmVjcmFmdCB2YXJpYWJsZXNcbmxldCBibG9ja3M7XG5sZXQgcGxheWVyO1xubGV0IGNvbnRyb2xzO1xuXG4vLyBjYW5ub24uanMgdmFyaWFibGVzXG5leHBvcnQgbGV0IHdvcmxkO1xuXG4vLyBUbyBiZSBzeW5jZWRcbmV4cG9ydCBjb25zdCBtZXNoZXMgPSBbXTtcbmV4cG9ydCBjb25zdCBib2RpZXMgPSBbXTtcblxuaW5pdFRocmVlKCk7XG5pbml0Q2Fubm9uKCk7XG5pbml0TWluZWNyYWZ0KCk7XG5yZW5kZXJJbmZvKCk7XG5HYW1lTG9vcCgpO1xuXG5mdW5jdGlvbiBpbml0VGhyZWUoKSB7XG4gIHN0YXRzID0gbmV3IFN0YXRzKCk7XG4gIHN0YXRzLnNob3dQYW5lbCgwKTsgLy8gMDogZnBzLCAxOiBtcywgMjogbWIsIDMrOiBjdXN0b21cbiAgLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XG59XG5cbmZ1bmN0aW9uIGluaXRDYW5ub24oKSB7XG4gIC8vIFNldHVwIHdvcmxkXG4gIHdvcmxkID0gbmV3IENBTk5PTi5Xb3JsZCgpO1xuICB3b3JsZC5ncmF2aXR5LnNldCgwLCAtOS44MSwgMCk7XG5cbiAgLy8gRmxvb3JcbiAgLypjb25zdCBmbG9vclNoYXBlID0gbmV3IENBTk5PTi5QbGFuZSgpO1xuICBjb25zdCBmbG9vckJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAwIH0pO1xuICBmbG9vckJvZHkuYWRkU2hhcGUoZmxvb3JTaGFwZSk7XG4gIHdvcmxkLmFkZEJvZHkoZmxvb3JCb2R5KTsqL1xufVxuXG5mdW5jdGlvbiBpbml0TWluZWNyYWZ0KCkge1xuICBsZC5jcmVhdGVMYW5kc2NhcGUoc2NlbmUpO1xuXG4gIGJsb2NrcyA9IG5ldyBCTEsuQmxvY2tzKCk7XG4gIHBsYXllciA9IG5ldyBQTFIuUGxheWVyKHsgY2FtZXJhOiBjYW1lcmEgfSk7XG4gIGNvbnRyb2xzID0gbmV3IGN0LkNvbnRyb2xzKHsgcGxheWVyOiBwbGF5ZXIgfSk7XG4gIHBsYXllci5wbGF5ZXJCb2R5LnBvc2l0aW9uLnNldCg2LCA4LCA2KTtcbiAgYm9kaWVzLnB1c2gocGxheWVyLnBsYXllckJvZHkpO1xuICB3b3JsZC5hZGRCb2R5KHBsYXllci5wbGF5ZXJCb2R5KTtcbiAgbWVzaGVzLnB1c2gocGxheWVyLm1lc2gpO1xuICBzY2VuZS5hZGQocGxheWVyLm1lc2gpO1xufVxuZnVuY3Rpb24gcmVuZGVySW5mbygpIHtcbiAgY29uc29sZS5sb2coXCJTY2VuZSBwb2x5Y291bnQ6XCIsIHJlbmRlcmVyLmluZm8ucmVuZGVyLnRyaWFuZ2xlcyk7XG4gIGNvbnNvbGUubG9nKFwiQWN0aXZlIERyYXdjYWxsczpcIiwgcmVuZGVyZXIuaW5mby5yZW5kZXIuY2FsbHMpO1xuICBjb25zb2xlLmxvZyhcIlRleHR1cmVzIGluIE1lbW9yeVwiLCByZW5kZXJlci5pbmZvLm1lbW9yeS50ZXh0dXJlcyk7XG4gIGNvbnNvbGUubG9nKFwiR2VvbWV0cmllcyBpbiBNZW1vcnlcIiwgcmVuZGVyZXIuaW5mby5tZW1vcnkuZ2VvbWV0cmllcyk7XG59XG5cbi8vIFN5bmMgdGhlIHRocmVlLmpzIG1lc2hlcyB3aXRoIHRoZSBib2RpZXNcbmZ1bmN0aW9uIHN5bmNocm9uaXNlZEJvZGllc01lc2hlcygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgIT09IG1lc2hlcy5sZW5ndGg7IGkrKykge1xuICAgIG1lc2hlc1tpXS5wb3NpdGlvbi5jb3B5KGJvZGllc1tpXS5wb3NpdGlvbik7XG4gICAgbWVzaGVzW2ldLnF1YXRlcm5pb24uY29weShib2RpZXNbaV0ucXVhdGVybmlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gR2FtZUxvb3AoKSB7XG4gIHN0YXRzLmJlZ2luKCk7XG4gIGNvbnN0IGRlbHRhVGltZSA9IGNsb2NrLmdldERlbHRhKCk7XG5cbiAgLy91cGRhdGUgZ2FtZVxuICBwbGF5ZXIudXBkYXRlUGxheWVyKCk7XG5cbiAgLy8gU3RlcCB0aGUgcGh5c2ljcyB3b3JsZFxuICB3b3JsZC5maXhlZFN0ZXAoKTtcbiAgc3luY2hyb25pc2VkQm9kaWVzTWVzaGVzKCk7XG5cbiAgLy8gUmVuZGVyIHRocmVlLmpzXG4gIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcblxuICBzdGF0cy51cGRhdGUoKTtcbiAgc3RhdHMuZW5kKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShHYW1lTG9vcCk7XG59XG4iLCJpbXBvcnQge1xuXHRFdWxlcixcblx0RXZlbnREaXNwYXRjaGVyLFxuXHRWZWN0b3IzXG59IGZyb20gJ3RocmVlJztcblxuY29uc3QgX2V1bGVyID0gbmV3IEV1bGVyKCAwLCAwLCAwLCAnWVhaJyApO1xuY29uc3QgX3ZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9jaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcbmNvbnN0IF9sb2NrRXZlbnQgPSB7IHR5cGU6ICdsb2NrJyB9O1xuY29uc3QgX3VubG9ja0V2ZW50ID0geyB0eXBlOiAndW5sb2NrJyB9O1xuXG5jb25zdCBfUElfMiA9IE1hdGguUEkgLyAyO1xuXG5jbGFzcyBQb2ludGVyTG9ja0NvbnRyb2xzIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3RvciggY2FtZXJhLCBkb21FbGVtZW50ICkge1xuXG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cdFx0dGhpcy5pc0xvY2tlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gU2V0IHRvIGNvbnN0cmFpbiB0aGUgcGl0Y2ggb2YgdGhlIGNhbWVyYVxuXHRcdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zXG5cdFx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHRcdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHRcdHRoaXMucG9pbnRlclNwZWVkID0gMS4wO1xuXG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzO1xuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmlzTG9ja2VkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0Y29uc3QgbW92ZW1lbnRYID0gZXZlbnQubW92ZW1lbnRYIHx8IGV2ZW50Lm1vek1vdmVtZW50WCB8fCBldmVudC53ZWJraXRNb3ZlbWVudFggfHwgMDtcblx0XHRcdGNvbnN0IG1vdmVtZW50WSA9IGV2ZW50Lm1vdmVtZW50WSB8fCBldmVudC5tb3pNb3ZlbWVudFkgfHwgZXZlbnQud2Via2l0TW92ZW1lbnRZIHx8IDA7XG5cblx0XHRcdF9ldWxlci5zZXRGcm9tUXVhdGVybmlvbiggY2FtZXJhLnF1YXRlcm5pb24gKTtcblxuXHRcdFx0X2V1bGVyLnkgLT0gbW92ZW1lbnRYICogMC4wMDIgKiBzY29wZS5wb2ludGVyU3BlZWQ7XG5cdFx0XHRfZXVsZXIueCAtPSBtb3ZlbWVudFkgKiAwLjAwMiAqIHNjb3BlLnBvaW50ZXJTcGVlZDtcblxuXHRcdFx0X2V1bGVyLnggPSBNYXRoLm1heCggX1BJXzIgLSBzY29wZS5tYXhQb2xhckFuZ2xlLCBNYXRoLm1pbiggX1BJXzIgLSBzY29wZS5taW5Qb2xhckFuZ2xlLCBfZXVsZXIueCApICk7XG5cblx0XHRcdGNhbWVyYS5xdWF0ZXJuaW9uLnNldEZyb21FdWxlciggX2V1bGVyICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Qb2ludGVybG9ja0NoYW5nZSgpIHtcblxuXHRcdFx0aWYgKCBzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50ID09PSBzY29wZS5kb21FbGVtZW50ICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9sb2NrRXZlbnQgKTtcblxuXHRcdFx0XHRzY29wZS5pc0xvY2tlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX3VubG9ja0V2ZW50ICk7XG5cblx0XHRcdFx0c2NvcGUuaXNMb2NrZWQgPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Qb2ludGVybG9ja0Vycm9yKCkge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuUG9pbnRlckxvY2tDb250cm9sczogVW5hYmxlIHRvIHVzZSBQb2ludGVyIExvY2sgQVBJJyApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrY2hhbmdlJywgb25Qb2ludGVybG9ja0NoYW5nZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2Vycm9yJywgb25Qb2ludGVybG9ja0Vycm9yICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrY2hhbmdlJywgb25Qb2ludGVybG9ja0NoYW5nZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2Vycm9yJywgb25Qb2ludGVybG9ja0Vycm9yICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLmRpc2Nvbm5lY3QoKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldE9iamVjdCA9IGZ1bmN0aW9uICgpIHsgLy8gcmV0YWluaW5nIHRoaXMgbWV0aG9kIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0XHRcdHJldHVybiBjYW1lcmE7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXREaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKCAwLCAwLCAtIDEgKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICggdiApIHtcblxuXHRcdFx0XHRyZXR1cm4gdi5jb3B5KCBkaXJlY3Rpb24gKS5hcHBseVF1YXRlcm5pb24oIGNhbWVyYS5xdWF0ZXJuaW9uICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHR0aGlzLm1vdmVGb3J3YXJkID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuXHRcdFx0Ly8gbW92ZSBmb3J3YXJkIHBhcmFsbGVsIHRvIHRoZSB4ei1wbGFuZVxuXHRcdFx0Ly8gYXNzdW1lcyBjYW1lcmEudXAgaXMgeS11cFxuXG5cdFx0XHRfdmVjdG9yLnNldEZyb21NYXRyaXhDb2x1bW4oIGNhbWVyYS5tYXRyaXgsIDAgKTtcblxuXHRcdFx0X3ZlY3Rvci5jcm9zc1ZlY3RvcnMoIGNhbWVyYS51cCwgX3ZlY3RvciApO1xuXG5cdFx0XHRjYW1lcmEucG9zaXRpb24uYWRkU2NhbGVkVmVjdG9yKCBfdmVjdG9yLCBkaXN0YW5jZSApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMubW92ZVJpZ2h0ID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuXHRcdFx0X3ZlY3Rvci5zZXRGcm9tTWF0cml4Q29sdW1uKCBjYW1lcmEubWF0cml4LCAwICk7XG5cblx0XHRcdGNhbWVyYS5wb3NpdGlvbi5hZGRTY2FsZWRWZWN0b3IoIF92ZWN0b3IsIGRpc3RhbmNlICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5sb2NrID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLmRvbUVsZW1lbnQucmVxdWVzdFBvaW50ZXJMb2NrKCk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy51bmxvY2sgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5leGl0UG9pbnRlckxvY2soKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmNvbm5lY3QoKTtcblxuXHR9XG5cbn1cblxuZXhwb3J0IHsgUG9pbnRlckxvY2tDb250cm9scyB9O1xuIiwiLyoqXG4gKiBsaWwtZ3VpXG4gKiBodHRwczovL2xpbC1ndWkuZ2VvcmdlYWx3YXlzLmNvbVxuICogQHZlcnNpb24gMC4xNi4wXG4gKiBAYXV0aG9yIEdlb3JnZSBNaWNoYWVsIEJyb3dlclxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmNsYXNzIHR7Y29uc3RydWN0b3IoaSxlLHMsbixyPVwiZGl2XCIpe3RoaXMucGFyZW50PWksdGhpcy5vYmplY3Q9ZSx0aGlzLnByb3BlcnR5PXMsdGhpcy5fZGlzYWJsZWQ9ITEsdGhpcy5pbml0aWFsVmFsdWU9dGhpcy5nZXRWYWx1ZSgpLHRoaXMuZG9tRWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29udHJvbGxlclwiKSx0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChuKSx0aGlzLiRuYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy4kbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKSx0Lm5leHROYW1lSUQ9dC5uZXh0TmFtZUlEfHwwLHRoaXMuJG5hbWUuaWQ9XCJsaWwtZ3VpLW5hbWUtXCIrICsrdC5uZXh0TmFtZUlELHRoaXMuJHdpZGdldD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHIpLHRoaXMuJHdpZGdldC5jbGFzc0xpc3QuYWRkKFwid2lkZ2V0XCIpLHRoaXMuJGRpc2FibGU9dGhpcy4kd2lkZ2V0LHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiRuYW1lKSx0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kd2lkZ2V0KSx0aGlzLnBhcmVudC5jaGlsZHJlbi5wdXNoKHRoaXMpLHRoaXMucGFyZW50LmNvbnRyb2xsZXJzLnB1c2godGhpcyksdGhpcy5wYXJlbnQuJGNoaWxkcmVuLmFwcGVuZENoaWxkKHRoaXMuZG9tRWxlbWVudCksdGhpcy5fbGlzdGVuQ2FsbGJhY2s9dGhpcy5fbGlzdGVuQ2FsbGJhY2suYmluZCh0aGlzKSx0aGlzLm5hbWUocyl9bmFtZSh0KXtyZXR1cm4gdGhpcy5fbmFtZT10LHRoaXMuJG5hbWUuaW5uZXJIVE1MPXQsdGhpc31vbkNoYW5nZSh0KXtyZXR1cm4gdGhpcy5fb25DaGFuZ2U9dCx0aGlzfV9jYWxsT25DaGFuZ2UoKXt0aGlzLnBhcmVudC5fY2FsbE9uQ2hhbmdlKHRoaXMpLHZvaWQgMCE9PXRoaXMuX29uQ2hhbmdlJiZ0aGlzLl9vbkNoYW5nZS5jYWxsKHRoaXMsdGhpcy5nZXRWYWx1ZSgpKSx0aGlzLl9jaGFuZ2VkPSEwfW9uRmluaXNoQ2hhbmdlKHQpe3JldHVybiB0aGlzLl9vbkZpbmlzaENoYW5nZT10LHRoaXN9X2NhbGxPbkZpbmlzaENoYW5nZSgpe3RoaXMuX2NoYW5nZWQmJih0aGlzLnBhcmVudC5fY2FsbE9uRmluaXNoQ2hhbmdlKHRoaXMpLHZvaWQgMCE9PXRoaXMuX29uRmluaXNoQ2hhbmdlJiZ0aGlzLl9vbkZpbmlzaENoYW5nZS5jYWxsKHRoaXMsdGhpcy5nZXRWYWx1ZSgpKSksdGhpcy5fY2hhbmdlZD0hMX1yZXNldCgpe3JldHVybiB0aGlzLnNldFZhbHVlKHRoaXMuaW5pdGlhbFZhbHVlKSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKSx0aGlzfWVuYWJsZSh0PSEwKXtyZXR1cm4gdGhpcy5kaXNhYmxlKCF0KX1kaXNhYmxlKHQ9ITApe3JldHVybiB0PT09dGhpcy5fZGlzYWJsZWR8fCh0aGlzLl9kaXNhYmxlZD10LHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzYWJsZWRcIix0KSx0aGlzLiRkaXNhYmxlLnRvZ2dsZUF0dHJpYnV0ZShcImRpc2FibGVkXCIsdCkpLHRoaXN9b3B0aW9ucyh0KXtjb25zdCBpPXRoaXMucGFyZW50LmFkZCh0aGlzLm9iamVjdCx0aGlzLnByb3BlcnR5LHQpO3JldHVybiBpLm5hbWUodGhpcy5fbmFtZSksdGhpcy5kZXN0cm95KCksaX1taW4odCl7cmV0dXJuIHRoaXN9bWF4KHQpe3JldHVybiB0aGlzfXN0ZXAodCl7cmV0dXJuIHRoaXN9bGlzdGVuKHQ9ITApe3JldHVybiB0aGlzLl9saXN0ZW5pbmc9dCx2b2lkIDAhPT10aGlzLl9saXN0ZW5DYWxsYmFja0lEJiYoY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fbGlzdGVuQ2FsbGJhY2tJRCksdGhpcy5fbGlzdGVuQ2FsbGJhY2tJRD12b2lkIDApLHRoaXMuX2xpc3RlbmluZyYmdGhpcy5fbGlzdGVuQ2FsbGJhY2soKSx0aGlzfV9saXN0ZW5DYWxsYmFjaygpe3RoaXMuX2xpc3RlbkNhbGxiYWNrSUQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2xpc3RlbkNhbGxiYWNrKSx0aGlzLnVwZGF0ZURpc3BsYXkoKX1nZXRWYWx1ZSgpe3JldHVybiB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XX1zZXRWYWx1ZSh0KXtyZXR1cm4gdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV09dCx0aGlzLl9jYWxsT25DaGFuZ2UoKSx0aGlzLnVwZGF0ZURpc3BsYXkoKSx0aGlzfXVwZGF0ZURpc3BsYXkoKXtyZXR1cm4gdGhpc31sb2FkKHQpe3JldHVybiB0aGlzLnNldFZhbHVlKHQpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpLHRoaXN9c2F2ZSgpe3JldHVybiB0aGlzLmdldFZhbHVlKCl9ZGVzdHJveSgpe3RoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZSh0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpLDEpLHRoaXMucGFyZW50LmNvbnRyb2xsZXJzLnNwbGljZSh0aGlzLnBhcmVudC5jb250cm9sbGVycy5pbmRleE9mKHRoaXMpLDEpLHRoaXMucGFyZW50LiRjaGlsZHJlbi5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpfX1jbGFzcyBpIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcih0LGksZSl7c3VwZXIodCxpLGUsXCJib29sZWFuXCIsXCJsYWJlbFwiKSx0aGlzLiRpbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiY2hlY2tib3hcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsdGhpcy4kbmFtZS5pZCksdGhpcy4kd2lkZ2V0LmFwcGVuZENoaWxkKHRoaXMuJGlucHV0KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsKCk9Pnt0aGlzLnNldFZhbHVlKHRoaXMuJGlucHV0LmNoZWNrZWQpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpfSksdGhpcy4kZGlzYWJsZT10aGlzLiRpbnB1dCx0aGlzLnVwZGF0ZURpc3BsYXkoKX11cGRhdGVEaXNwbGF5KCl7cmV0dXJuIHRoaXMuJGlucHV0LmNoZWNrZWQ9dGhpcy5nZXRWYWx1ZSgpLHRoaXN9fWZ1bmN0aW9uIGUodCl7bGV0IGksZTtyZXR1cm4oaT10Lm1hdGNoKC8oI3wweCk/KFthLWYwLTldezZ9KS9pKSk/ZT1pWzJdOihpPXQubWF0Y2goL3JnYlxcKFxccyooXFxkKilcXHMqLFxccyooXFxkKilcXHMqLFxccyooXFxkKilcXHMqXFwpLykpP2U9cGFyc2VJbnQoaVsxXSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsMCkrcGFyc2VJbnQoaVsyXSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsMCkrcGFyc2VJbnQoaVszXSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsMCk6KGk9dC5tYXRjaCgvXiM/KFthLWYwLTldKShbYS1mMC05XSkoW2EtZjAtOV0pJC9pKSkmJihlPWlbMV0raVsxXStpWzJdK2lbMl0raVszXStpWzNdKSwhIWUmJlwiI1wiK2V9Y29uc3Qgcz17aXNQcmltaXRpdmU6ITAsbWF0Y2g6dD0+XCJzdHJpbmdcIj09dHlwZW9mIHQsZnJvbUhleFN0cmluZzplLHRvSGV4U3RyaW5nOmV9LG49e2lzUHJpbWl0aXZlOiEwLG1hdGNoOnQ9PlwibnVtYmVyXCI9PXR5cGVvZiB0LGZyb21IZXhTdHJpbmc6dD0+cGFyc2VJbnQodC5zdWJzdHJpbmcoMSksMTYpLHRvSGV4U3RyaW5nOnQ9PlwiI1wiK3QudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDYsMCl9LHI9e2lzUHJpbWl0aXZlOiExLG1hdGNoOkFycmF5LmlzQXJyYXksZnJvbUhleFN0cmluZyh0LGksZT0xKXtjb25zdCBzPW4uZnJvbUhleFN0cmluZyh0KTtpWzBdPShzPj4xNiYyNTUpLzI1NSplLGlbMV09KHM+PjgmMjU1KS8yNTUqZSxpWzJdPSgyNTUmcykvMjU1KmV9LHRvSGV4U3RyaW5nOihbdCxpLGVdLHM9MSk9Pm4udG9IZXhTdHJpbmcodCoocz0yNTUvcyk8PDE2Xmkqczw8OF5lKnM8PDApfSxsPXtpc1ByaW1pdGl2ZTohMSxtYXRjaDp0PT5PYmplY3QodCk9PT10LGZyb21IZXhTdHJpbmcodCxpLGU9MSl7Y29uc3Qgcz1uLmZyb21IZXhTdHJpbmcodCk7aS5yPShzPj4xNiYyNTUpLzI1NSplLGkuZz0ocz4+OCYyNTUpLzI1NSplLGkuYj0oMjU1JnMpLzI1NSplfSx0b0hleFN0cmluZzooe3I6dCxnOmksYjplfSxzPTEpPT5uLnRvSGV4U3RyaW5nKHQqKHM9MjU1L3MpPDwxNl5pKnM8PDheZSpzPDwwKX0sbz1bcyxuLHIsbF07Y2xhc3MgYSBleHRlbmRzIHR7Y29uc3RydWN0b3IodCxpLHMsbil7dmFyIHI7c3VwZXIodCxpLHMsXCJjb2xvclwiKSx0aGlzLiRpbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiY29sb3JcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwtMSksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsdGhpcy4kbmFtZS5pZCksdGhpcy4kdGV4dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdGhpcy4kdGV4dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpLHRoaXMuJHRleHQuc2V0QXR0cmlidXRlKFwic3BlbGxjaGVja1wiLFwiZmFsc2VcIiksdGhpcy4kdGV4dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIix0aGlzLiRuYW1lLmlkKSx0aGlzLiRkaXNwbGF5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy4kZGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKSx0aGlzLiRkaXNwbGF5LmFwcGVuZENoaWxkKHRoaXMuJGlucHV0KSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kZGlzcGxheSksdGhpcy4kd2lkZ2V0LmFwcGVuZENoaWxkKHRoaXMuJHRleHQpLHRoaXMuX2Zvcm1hdD0ocj10aGlzLmluaXRpYWxWYWx1ZSxvLmZpbmQodD0+dC5tYXRjaChyKSkpLHRoaXMuX3JnYlNjYWxlPW4sdGhpcy5faW5pdGlhbFZhbHVlSGV4U3RyaW5nPXRoaXMuc2F2ZSgpLHRoaXMuX3RleHRGb2N1c2VkPSExLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCgpPT57dGhpcy5fc2V0VmFsdWVGcm9tSGV4U3RyaW5nKHRoaXMuJGlucHV0LnZhbHVlKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsKCk9Pnt0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKX0pLHRoaXMuJHRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsKCk9Pntjb25zdCB0PWUodGhpcy4kdGV4dC52YWx1ZSk7dCYmdGhpcy5fc2V0VmFsdWVGcm9tSGV4U3RyaW5nKHQpfSksdGhpcy4kdGV4dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwoKT0+e3RoaXMuX3RleHRGb2N1c2VkPSEwLHRoaXMuJHRleHQuc2VsZWN0KCl9KSx0aGlzLiR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsKCk9Pnt0aGlzLl90ZXh0Rm9jdXNlZD0hMSx0aGlzLnVwZGF0ZURpc3BsYXkoKSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKX0pLHRoaXMuJGRpc2FibGU9dGhpcy4kdGV4dCx0aGlzLnVwZGF0ZURpc3BsYXkoKX1yZXNldCgpe3JldHVybiB0aGlzLl9zZXRWYWx1ZUZyb21IZXhTdHJpbmcodGhpcy5faW5pdGlhbFZhbHVlSGV4U3RyaW5nKSx0aGlzfV9zZXRWYWx1ZUZyb21IZXhTdHJpbmcodCl7aWYodGhpcy5fZm9ybWF0LmlzUHJpbWl0aXZlKXtjb25zdCBpPXRoaXMuX2Zvcm1hdC5mcm9tSGV4U3RyaW5nKHQpO3RoaXMuc2V0VmFsdWUoaSl9ZWxzZSB0aGlzLl9mb3JtYXQuZnJvbUhleFN0cmluZyh0LHRoaXMuZ2V0VmFsdWUoKSx0aGlzLl9yZ2JTY2FsZSksdGhpcy5fY2FsbE9uQ2hhbmdlKCksdGhpcy51cGRhdGVEaXNwbGF5KCl9c2F2ZSgpe3JldHVybiB0aGlzLl9mb3JtYXQudG9IZXhTdHJpbmcodGhpcy5nZXRWYWx1ZSgpLHRoaXMuX3JnYlNjYWxlKX1sb2FkKHQpe3JldHVybiB0aGlzLl9zZXRWYWx1ZUZyb21IZXhTdHJpbmcodCksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCksdGhpc311cGRhdGVEaXNwbGF5KCl7cmV0dXJuIHRoaXMuJGlucHV0LnZhbHVlPXRoaXMuX2Zvcm1hdC50b0hleFN0cmluZyh0aGlzLmdldFZhbHVlKCksdGhpcy5fcmdiU2NhbGUpLHRoaXMuX3RleHRGb2N1c2VkfHwodGhpcy4kdGV4dC52YWx1ZT10aGlzLiRpbnB1dC52YWx1ZS5zdWJzdHJpbmcoMSkpLHRoaXMuJGRpc3BsYXkuc3R5bGUuYmFja2dyb3VuZENvbG9yPXRoaXMuJGlucHV0LnZhbHVlLHRoaXN9fWNsYXNzIGggZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKHQsaSxlKXtzdXBlcih0LGksZSxcImZ1bmN0aW9uXCIpLHRoaXMuJGJ1dHRvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLHRoaXMuJGJ1dHRvbi5hcHBlbmRDaGlsZCh0aGlzLiRuYW1lKSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kYnV0dG9uKSx0aGlzLiRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdD0+e3QucHJldmVudERlZmF1bHQoKSx0aGlzLmdldFZhbHVlKCkuY2FsbCh0aGlzLm9iamVjdCl9KSx0aGlzLiRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwoKT0+e30pLHRoaXMuJGRpc2FibGU9dGhpcy4kYnV0dG9ufX1jbGFzcyBkIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcih0LGksZSxzLG4scil7c3VwZXIodCxpLGUsXCJudW1iZXJcIiksdGhpcy5faW5pdElucHV0KCksdGhpcy5taW4ocyksdGhpcy5tYXgobik7Y29uc3QgbD12b2lkIDAhPT1yO3RoaXMuc3RlcChsP3I6dGhpcy5fZ2V0SW1wbGljaXRTdGVwKCksbCksdGhpcy51cGRhdGVEaXNwbGF5KCl9bWluKHQpe3JldHVybiB0aGlzLl9taW49dCx0aGlzLl9vblVwZGF0ZU1pbk1heCgpLHRoaXN9bWF4KHQpe3JldHVybiB0aGlzLl9tYXg9dCx0aGlzLl9vblVwZGF0ZU1pbk1heCgpLHRoaXN9c3RlcCh0LGk9ITApe3JldHVybiB0aGlzLl9zdGVwPXQsdGhpcy5fc3RlcEV4cGxpY2l0PWksdGhpc311cGRhdGVEaXNwbGF5KCl7Y29uc3QgdD10aGlzLmdldFZhbHVlKCk7aWYodGhpcy5faGFzU2xpZGVyKXtsZXQgaT0odC10aGlzLl9taW4pLyh0aGlzLl9tYXgtdGhpcy5fbWluKTtpPU1hdGgubWF4KDAsTWF0aC5taW4oaSwxKSksdGhpcy4kZmlsbC5zdHlsZS53aWR0aD0xMDAqaStcIiVcIn1yZXR1cm4gdGhpcy5faW5wdXRGb2N1c2VkfHwodGhpcy4kaW5wdXQudmFsdWU9dCksdGhpc31faW5pdElucHV0KCl7dGhpcy4kaW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcIm51bWJlclwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJzdGVwXCIsXCJhbnlcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsdGhpcy4kbmFtZS5pZCksdGhpcy4kd2lkZ2V0LmFwcGVuZENoaWxkKHRoaXMuJGlucHV0KSx0aGlzLiRkaXNhYmxlPXRoaXMuJGlucHV0O2NvbnN0IHQ9dD0+e2NvbnN0IGk9cGFyc2VGbG9hdCh0aGlzLiRpbnB1dC52YWx1ZSk7aXNOYU4oaSl8fCh0aGlzLl9zbmFwQ2xhbXBTZXRWYWx1ZShpK3QpLHRoaXMuJGlucHV0LnZhbHVlPXRoaXMuZ2V0VmFsdWUoKSl9O2xldCBpLGUscyxuLHIsbD0hMTtjb25zdCBvPXQ9PntpZihsKXtjb25zdCBzPXQuY2xpZW50WC1pLG49dC5jbGllbnRZLWU7TWF0aC5hYnMobik+NT8odC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuJGlucHV0LmJsdXIoKSxsPSExLHRoaXMuX3NldERyYWdnaW5nU3R5bGUoITAsXCJ2ZXJ0aWNhbFwiKSk6TWF0aC5hYnMocyk+NSYmYSgpfWlmKCFsKXtjb25zdCBpPXQuY2xpZW50WS1zO3ItPWkqdGhpcy5fc3RlcCp0aGlzLl9hcnJvd0tleU11bHRpcGxpZXIodCksbityPnRoaXMuX21heD9yPXRoaXMuX21heC1uOm4rcjx0aGlzLl9taW4mJihyPXRoaXMuX21pbi1uKSx0aGlzLl9zbmFwQ2xhbXBTZXRWYWx1ZShuK3IpfXM9dC5jbGllbnRZfSxhPSgpPT57dGhpcy5fc2V0RHJhZ2dpbmdTdHlsZSghMSxcInZlcnRpY2FsXCIpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsbyksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsYSl9O3RoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCgpPT57Y29uc3QgdD1wYXJzZUZsb2F0KHRoaXMuJGlucHV0LnZhbHVlKTtpc05hTih0KXx8dGhpcy5zZXRWYWx1ZSh0aGlzLl9jbGFtcCh0KSl9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGk9PntcIkVudGVyXCI9PT1pLmNvZGUmJnRoaXMuJGlucHV0LmJsdXIoKSxcIkFycm93VXBcIj09PWkuY29kZSYmKGkucHJldmVudERlZmF1bHQoKSx0KHRoaXMuX3N0ZXAqdGhpcy5fYXJyb3dLZXlNdWx0aXBsaWVyKGkpKSksXCJBcnJvd0Rvd25cIj09PWkuY29kZSYmKGkucHJldmVudERlZmF1bHQoKSx0KHRoaXMuX3N0ZXAqdGhpcy5fYXJyb3dLZXlNdWx0aXBsaWVyKGkpKi0xKSl9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIixpPT57dGhpcy5faW5wdXRGb2N1c2VkJiYoaS5wcmV2ZW50RGVmYXVsdCgpLHQodGhpcy5fc3RlcCp0aGlzLl9ub3JtYWxpemVNb3VzZVdoZWVsKGkpKSl9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsdD0+e2k9dC5jbGllbnRYLGU9cz10LmNsaWVudFksbD0hMCxuPXRoaXMuZ2V0VmFsdWUoKSxyPTAsd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixvKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixhKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCgpPT57dGhpcy5faW5wdXRGb2N1c2VkPSEwfSksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoKT0+e3RoaXMuX2lucHV0Rm9jdXNlZD0hMSx0aGlzLnVwZGF0ZURpc3BsYXkoKSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKX0pfV9pbml0U2xpZGVyKCl7dGhpcy5faGFzU2xpZGVyPSEwLHRoaXMuJHNsaWRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuJHNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpLHRoaXMuJGZpbGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLiRmaWxsLmNsYXNzTGlzdC5hZGQoXCJmaWxsXCIpLHRoaXMuJHNsaWRlci5hcHBlbmRDaGlsZCh0aGlzLiRmaWxsKSx0aGlzLiR3aWRnZXQuaW5zZXJ0QmVmb3JlKHRoaXMuJHNsaWRlcix0aGlzLiRpbnB1dCksdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoYXNTbGlkZXJcIik7Y29uc3QgdD10PT57Y29uc3QgaT10aGlzLiRzbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7bGV0IGU9KHM9dCxuPWkubGVmdCxyPWkucmlnaHQsbD10aGlzLl9taW4sbz10aGlzLl9tYXgsKHMtbikvKHItbikqKG8tbCkrbCk7dmFyIHMsbixyLGwsbzt0aGlzLl9zbmFwQ2xhbXBTZXRWYWx1ZShlKX0saT1pPT57dChpLmNsaWVudFgpfSxlPSgpPT57dGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCksdGhpcy5fc2V0RHJhZ2dpbmdTdHlsZSghMSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixpKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixlKX07bGV0IHMsbixyPSExO2NvbnN0IGw9aT0+e2kucHJldmVudERlZmF1bHQoKSx0aGlzLl9zZXREcmFnZ2luZ1N0eWxlKCEwKSx0KGkudG91Y2hlc1swXS5jbGllbnRYKSxyPSExfSxvPWk9PntpZihyKXtjb25zdCB0PWkudG91Y2hlc1swXS5jbGllbnRYLXMsZT1pLnRvdWNoZXNbMF0uY2xpZW50WS1uO01hdGguYWJzKHQpPk1hdGguYWJzKGUpP2woaSk6KHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsbyksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLGEpKX1lbHNlIGkucHJldmVudERlZmF1bHQoKSx0KGkudG91Y2hlc1swXS5jbGllbnRYKX0sYT0oKT0+e3RoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpLHRoaXMuX3NldERyYWdnaW5nU3R5bGUoITEpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsbyksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLGEpfSxoPXRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZS5iaW5kKHRoaXMpO2xldCBkO3RoaXMuJHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIscz0+e3RoaXMuX3NldERyYWdnaW5nU3R5bGUoITApLHQocy5jbGllbnRYKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLGkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGUpfSksdGhpcy4kc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdD0+e3QudG91Y2hlcy5sZW5ndGg+MXx8KHRoaXMuX2hhc1Njcm9sbEJhcj8ocz10LnRvdWNoZXNbMF0uY2xpZW50WCxuPXQudG91Y2hlc1swXS5jbGllbnRZLHI9ITApOmwodCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixvKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsYSkpfSksdGhpcy4kc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLHQ9PntpZihNYXRoLmFicyh0LmRlbHRhWCk8TWF0aC5hYnModC5kZWx0YVkpJiZ0aGlzLl9oYXNTY3JvbGxCYXIpcmV0dXJuO3QucHJldmVudERlZmF1bHQoKTtjb25zdCBpPXRoaXMuX25vcm1hbGl6ZU1vdXNlV2hlZWwodCkqdGhpcy5fc3RlcDt0aGlzLl9zbmFwQ2xhbXBTZXRWYWx1ZSh0aGlzLmdldFZhbHVlKCkraSksdGhpcy4kaW5wdXQudmFsdWU9dGhpcy5nZXRWYWx1ZSgpLGNsZWFyVGltZW91dChkKSxkPXNldFRpbWVvdXQoaCw0MDApfSl9X3NldERyYWdnaW5nU3R5bGUodCxpPVwiaG9yaXpvbnRhbFwiKXt0aGlzLiRzbGlkZXImJnRoaXMuJHNsaWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIsdCksZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibGlsLWd1aS1kcmFnZ2luZ1wiLHQpLGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImxpbC1ndWktXCIraSx0KX1fZ2V0SW1wbGljaXRTdGVwKCl7cmV0dXJuIHRoaXMuX2hhc01pbiYmdGhpcy5faGFzTWF4Pyh0aGlzLl9tYXgtdGhpcy5fbWluKS8xZTM6LjF9X29uVXBkYXRlTWluTWF4KCl7IXRoaXMuX2hhc1NsaWRlciYmdGhpcy5faGFzTWluJiZ0aGlzLl9oYXNNYXgmJih0aGlzLl9zdGVwRXhwbGljaXR8fHRoaXMuc3RlcCh0aGlzLl9nZXRJbXBsaWNpdFN0ZXAoKSwhMSksdGhpcy5faW5pdFNsaWRlcigpLHRoaXMudXBkYXRlRGlzcGxheSgpKX1fbm9ybWFsaXplTW91c2VXaGVlbCh0KXtsZXR7ZGVsdGFYOmksZGVsdGFZOmV9PXQ7TWF0aC5mbG9vcih0LmRlbHRhWSkhPT10LmRlbHRhWSYmdC53aGVlbERlbHRhJiYoaT0wLGU9LXQud2hlZWxEZWx0YS8xMjAsZSo9dGhpcy5fc3RlcEV4cGxpY2l0PzE6MTApO3JldHVybiBpKy1lfV9hcnJvd0tleU11bHRpcGxpZXIodCl7bGV0IGk9dGhpcy5fc3RlcEV4cGxpY2l0PzE6MTA7cmV0dXJuIHQuc2hpZnRLZXk/aSo9MTA6dC5hbHRLZXkmJihpLz0xMCksaX1fc25hcCh0KXtjb25zdCBpPU1hdGgucm91bmQodC90aGlzLl9zdGVwKSp0aGlzLl9zdGVwO3JldHVybiBwYXJzZUZsb2F0KGkudG9QcmVjaXNpb24oMTUpKX1fY2xhbXAodCl7cmV0dXJuIHQ8dGhpcy5fbWluJiYodD10aGlzLl9taW4pLHQ+dGhpcy5fbWF4JiYodD10aGlzLl9tYXgpLHR9X3NuYXBDbGFtcFNldFZhbHVlKHQpe3RoaXMuc2V0VmFsdWUodGhpcy5fY2xhbXAodGhpcy5fc25hcCh0KSkpfWdldCBfaGFzU2Nyb2xsQmFyKCl7Y29uc3QgdD10aGlzLnBhcmVudC5yb290LiRjaGlsZHJlbjtyZXR1cm4gdC5zY3JvbGxIZWlnaHQ+dC5jbGllbnRIZWlnaHR9Z2V0IF9oYXNNaW4oKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5fbWlufWdldCBfaGFzTWF4KCl7cmV0dXJuIHZvaWQgMCE9PXRoaXMuX21heH19Y2xhc3MgYyBleHRlbmRzIHR7Y29uc3RydWN0b3IodCxpLGUscyl7c3VwZXIodCxpLGUsXCJvcHRpb25cIiksdGhpcy4kc2VsZWN0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksdGhpcy4kc2VsZWN0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLHRoaXMuJG5hbWUuaWQpLHRoaXMuJGRpc3BsYXk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLiRkaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpLHRoaXMuX3ZhbHVlcz1BcnJheS5pc0FycmF5KHMpP3M6T2JqZWN0LnZhbHVlcyhzKSx0aGlzLl9uYW1lcz1BcnJheS5pc0FycmF5KHMpP3M6T2JqZWN0LmtleXMocyksdGhpcy5fbmFtZXMuZm9yRWFjaCh0PT57Y29uc3QgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO2kuaW5uZXJIVE1MPXQsdGhpcy4kc2VsZWN0LmFwcGVuZENoaWxkKGkpfSksdGhpcy4kc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwoKT0+e3RoaXMuc2V0VmFsdWUodGhpcy5fdmFsdWVzW3RoaXMuJHNlbGVjdC5zZWxlY3RlZEluZGV4XSksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCl9KSx0aGlzLiRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsKCk9Pnt0aGlzLiRkaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJmb2N1c1wiKX0pLHRoaXMuJHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCgpPT57dGhpcy4kZGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNcIil9KSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kc2VsZWN0KSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kZGlzcGxheSksdGhpcy4kZGlzYWJsZT10aGlzLiRzZWxlY3QsdGhpcy51cGRhdGVEaXNwbGF5KCl9dXBkYXRlRGlzcGxheSgpe2NvbnN0IHQ9dGhpcy5nZXRWYWx1ZSgpLGk9dGhpcy5fdmFsdWVzLmluZGV4T2YodCk7cmV0dXJuIHRoaXMuJHNlbGVjdC5zZWxlY3RlZEluZGV4PWksdGhpcy4kZGlzcGxheS5pbm5lckhUTUw9LTE9PT1pP3Q6dGhpcy5fbmFtZXNbaV0sdGhpc319Y2xhc3MgdSBleHRlbmRzIHR7Y29uc3RydWN0b3IodCxpLGUpe3N1cGVyKHQsaSxlLFwic3RyaW5nXCIpLHRoaXMuJGlucHV0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLHRoaXMuJG5hbWUuaWQpLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCgpPT57dGhpcy5zZXRWYWx1ZSh0aGlzLiRpbnB1dC52YWx1ZSl9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQ9PntcIkVudGVyXCI9PT10LmNvZGUmJnRoaXMuJGlucHV0LmJsdXIoKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsKCk9Pnt0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKX0pLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiRpbnB1dCksdGhpcy4kZGlzYWJsZT10aGlzLiRpbnB1dCx0aGlzLnVwZGF0ZURpc3BsYXkoKX11cGRhdGVEaXNwbGF5KCl7cmV0dXJuIHRoaXMuJGlucHV0LnZhbHVlPXRoaXMuZ2V0VmFsdWUoKSx0aGlzfX1sZXQgcD0hMTtjbGFzcyBne2NvbnN0cnVjdG9yKHtwYXJlbnQ6dCxhdXRvUGxhY2U6aT12b2lkIDA9PT10LGNvbnRhaW5lcjplLHdpZHRoOnMsdGl0bGU6bj1cIkNvbnRyb2xzXCIsaW5qZWN0U3R5bGVzOnI9ITAsdG91Y2hTdHlsZXM6bD0hMH09e30pe2lmKHRoaXMucGFyZW50PXQsdGhpcy5yb290PXQ/dC5yb290OnRoaXMsdGhpcy5jaGlsZHJlbj1bXSx0aGlzLmNvbnRyb2xsZXJzPVtdLHRoaXMuZm9sZGVycz1bXSx0aGlzLl9jbG9zZWQ9ITEsdGhpcy5faGlkZGVuPSExLHRoaXMuZG9tRWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlsLWd1aVwiKSx0aGlzLiR0aXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuJHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKSx0aGlzLiR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJidXR0b25cIiksdGhpcy4kdGl0bGUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCEwKSx0aGlzLiR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLDApLHRoaXMuJHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT50aGlzLm9wZW5BbmltYXRlZCh0aGlzLl9jbG9zZWQpKSx0aGlzLiR0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQ9PntcIkVudGVyXCIhPT10LmNvZGUmJlwiU3BhY2VcIiE9PXQuY29kZXx8KHQucHJldmVudERlZmF1bHQoKSx0aGlzLiR0aXRsZS5jbGljaygpKX0pLHRoaXMuJHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsKCk9Pnt9KSx0aGlzLiRjaGlsZHJlbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuJGNoaWxkcmVuLmNsYXNzTGlzdC5hZGQoXCJjaGlsZHJlblwiKSx0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kdGl0bGUpLHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiRjaGlsZHJlbiksdGhpcy50aXRsZShuKSxsJiZ0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFsbG93LXRvdWNoLXN0eWxlc1wiKSx0aGlzLnBhcmVudClyZXR1cm4gdGhpcy5wYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKSx0aGlzLnBhcmVudC5mb2xkZXJzLnB1c2godGhpcyksdm9pZCB0aGlzLnBhcmVudC4kY2hpbGRyZW4uYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTt0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJvb3RcIiksIXAmJnImJighZnVuY3Rpb24odCl7Y29uc3QgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7aS5pbm5lckhUTUw9dDtjb25zdCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkIGxpbmtbcmVsPXN0eWxlc2hlZXRdLCBoZWFkIHN0eWxlXCIpO2U/ZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoaSxlKTpkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGkpfSgnLmxpbC1ndWl7LS1iYWNrZ3JvdW5kLWNvbG9yOiMxZjFmMWY7LS10ZXh0LWNvbG9yOiNlYmViZWI7LS10aXRsZS1iYWNrZ3JvdW5kLWNvbG9yOiMxMTE7LS10aXRsZS10ZXh0LWNvbG9yOiNlYmViZWI7LS13aWRnZXQtY29sb3I6IzQyNDI0MjstLWhvdmVyLWNvbG9yOiM0ZjRmNGY7LS1mb2N1cy1jb2xvcjojNTk1OTU5Oy0tbnVtYmVyLWNvbG9yOiMyY2M5ZmY7LS1zdHJpbmctY29sb3I6I2EyZGIzYzstLWZvbnQtc2l6ZToxMXB4Oy0taW5wdXQtZm9udC1zaXplOjExcHg7LS1mb250LWZhbWlseTotYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsUm9ib3RvLEFyaWFsLHNhbnMtc2VyaWY7LS1mb250LWZhbWlseS1tb25vOk1lbmxvLE1vbmFjbyxDb25zb2xhcyxcIkRyb2lkIFNhbnMgTW9ub1wiLG1vbm9zcGFjZTstLXBhZGRpbmc6NHB4Oy0tc3BhY2luZzo0cHg7LS13aWRnZXQtaGVpZ2h0OjIwcHg7LS1uYW1lLXdpZHRoOjQ1JTstLXNsaWRlci1rbm9iLXdpZHRoOjJweDstLXNsaWRlci1pbnB1dC13aWR0aDoyNyU7LS1jb2xvci1pbnB1dC13aWR0aDoyNyU7LS1zbGlkZXItaW5wdXQtbWluLXdpZHRoOjQ1cHg7LS1jb2xvci1pbnB1dC1taW4td2lkdGg6NDVweDstLWZvbGRlci1pbmRlbnQ6N3B4Oy0td2lkZ2V0LXBhZGRpbmc6MCAwIDAgM3B4Oy0td2lkZ2V0LWJvcmRlci1yYWRpdXM6MnB4Oy0tY2hlY2tib3gtc2l6ZTpjYWxjKHZhcigtLXdpZGdldC1oZWlnaHQpKjAuNzUpOy0tc2Nyb2xsYmFyLXdpZHRoOjVweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3IpO2NvbG9yOnZhcigtLXRleHQtY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWZvbnQtZmFtaWx5KTtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MTt0ZXh0LWFsaWduOmxlZnQ7dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZX0ubGlsLWd1aSwubGlsLWd1aSAqe2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW46MDtwYWRkaW5nOjB9LmxpbC1ndWkucm9vdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3dpZHRoOnZhcigtLXdpZHRoLDI0NXB4KX0ubGlsLWd1aS5yb290Pi50aXRsZXtiYWNrZ3JvdW5kOnZhcigtLXRpdGxlLWJhY2tncm91bmQtY29sb3IpO2NvbG9yOnZhcigtLXRpdGxlLXRleHQtY29sb3IpfS5saWwtZ3VpLnJvb3Q+LmNoaWxkcmVue292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0b30ubGlsLWd1aS5yb290Pi5jaGlsZHJlbjo6LXdlYmtpdC1zY3JvbGxiYXJ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtoZWlnaHQ6dmFyKC0tc2Nyb2xsYmFyLXdpZHRoKTt3aWR0aDp2YXIoLS1zY3JvbGxiYXItd2lkdGgpfS5saWwtZ3VpLnJvb3Q+LmNoaWxkcmVuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kOnZhcigtLWZvY3VzLWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLXNjcm9sbGJhci13aWR0aCl9LmxpbC1ndWkuZm9yY2UtdG91Y2gtc3R5bGVzey0td2lkZ2V0LWhlaWdodDoyOHB4Oy0tcGFkZGluZzo2cHg7LS1zcGFjaW5nOjZweDstLWZvbnQtc2l6ZToxM3B4Oy0taW5wdXQtZm9udC1zaXplOjE2cHg7LS1mb2xkZXItaW5kZW50OjEwcHg7LS1zY3JvbGxiYXItd2lkdGg6N3B4Oy0tc2xpZGVyLWlucHV0LW1pbi13aWR0aDo1MHB4Oy0tY29sb3ItaW5wdXQtbWluLXdpZHRoOjY1cHh9LmxpbC1ndWkuYXV0b1BsYWNle21heC1oZWlnaHQ6MTAwJTtwb3NpdGlvbjpmaXhlZDtyaWdodDoxNXB4O3RvcDowO3otaW5kZXg6MTAwMX0ubGlsLWd1aSAuY29udHJvbGxlcnthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O21hcmdpbjp2YXIoLS1zcGFjaW5nKSAwO3BhZGRpbmc6MCB2YXIoLS1wYWRkaW5nKX0ubGlsLWd1aSAuY29udHJvbGxlci5kaXNhYmxlZHtvcGFjaXR5Oi41fS5saWwtZ3VpIC5jb250cm9sbGVyLmRpc2FibGVkLC5saWwtZ3VpIC5jb250cm9sbGVyLmRpc2FibGVkICp7cG9pbnRlci1ldmVudHM6bm9uZSFpbXBvcnRhbnR9LmxpbC1ndWkgLmNvbnRyb2xsZXI+Lm5hbWV7ZmxleC1zaHJpbms6MDtsaW5lLWhlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTttaW4td2lkdGg6dmFyKC0tbmFtZS13aWR0aCk7cGFkZGluZy1yaWdodDp2YXIoLS1zcGFjaW5nKTt3aGl0ZS1zcGFjZTpwcmV9LmxpbC1ndWkgLmNvbnRyb2xsZXIgLndpZGdldHthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O21pbi1oZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX0ubGlsLWd1aSAuY29udHJvbGxlci5zdHJpbmcgaW5wdXR7Y29sb3I6dmFyKC0tc3RyaW5nLWNvbG9yKX0ubGlsLWd1aSAuY29udHJvbGxlci5ib29sZWFuIC53aWRnZXR7Y3Vyc29yOnBvaW50ZXJ9LmxpbC1ndWkgLmNvbnRyb2xsZXIuY29sb3IgLmRpc3BsYXl7Ym9yZGVyLXJhZGl1czp2YXIoLS13aWRnZXQtYm9yZGVyLXJhZGl1cyk7aGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9LmxpbC1ndWkgLmNvbnRyb2xsZXIuY29sb3IgaW5wdXRbdHlwZT1jb2xvcl17Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OjEwMCU7b3BhY2l0eTowO3dpZHRoOjEwMCV9LmxpbC1ndWkgLmNvbnRyb2xsZXIuY29sb3IgaW5wdXRbdHlwZT10ZXh0XXtmbGV4LXNocmluazowO2ZvbnQtZmFtaWx5OnZhcigtLWZvbnQtZmFtaWx5LW1vbm8pO21hcmdpbi1sZWZ0OnZhcigtLXNwYWNpbmcpO21pbi13aWR0aDp2YXIoLS1jb2xvci1pbnB1dC1taW4td2lkdGgpO3dpZHRoOnZhcigtLWNvbG9yLWlucHV0LXdpZHRoKX0ubGlsLWd1aSAuY29udHJvbGxlci5vcHRpb24gc2VsZWN0e21heC13aWR0aDoxMDAlO29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiAuZGlzcGxheXtiYWNrZ3JvdW5kOnZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS13aWRnZXQtYm9yZGVyLXJhZGl1cyk7aGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO21heC13aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nLWxlZnQ6LjU1ZW07cGFkZGluZy1yaWdodDoxLjc1ZW07cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTt3b3JkLWJyZWFrOmJyZWFrLWFsbH0ubGlsLWd1aSAuY29udHJvbGxlci5vcHRpb24gLmRpc3BsYXkuYWN0aXZle2JhY2tncm91bmQ6dmFyKC0tZm9jdXMtY29sb3IpfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiAuZGlzcGxheTphZnRlcntib3R0b206MDtjb250ZW50Olwi4oaVXCI7Zm9udC1mYW1pbHk6bGlsLWd1aTtwYWRkaW5nLXJpZ2h0Oi4zNzVlbTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiAud2lkZ2V0LC5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiBzZWxlY3R7Y3Vyc29yOnBvaW50ZXJ9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyIGlucHV0e2NvbG9yOnZhcigtLW51bWJlci1jb2xvcil9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyLmhhc1NsaWRlciBpbnB1dHtmbGV4LXNocmluazowO21hcmdpbi1sZWZ0OnZhcigtLXNwYWNpbmcpO21pbi13aWR0aDp2YXIoLS1zbGlkZXItaW5wdXQtbWluLXdpZHRoKTt3aWR0aDp2YXIoLS1zbGlkZXItaW5wdXQtd2lkdGgpfS5saWwtZ3VpIC5jb250cm9sbGVyLm51bWJlciAuc2xpZGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLXdpZGdldC1ib3JkZXItcmFkaXVzKTtjdXJzb3I6ZXctcmVzaXplO2hlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZy1yaWdodDp2YXIoLS1zbGlkZXIta25vYi13aWR0aCk7dG91Y2gtYWN0aW9uOnBhbi15O3dpZHRoOjEwMCV9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyIC5zbGlkZXIuYWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tZm9jdXMtY29sb3IpfS5saWwtZ3VpIC5jb250cm9sbGVyLm51bWJlciAuc2xpZGVyLmFjdGl2ZSAuZmlsbHtvcGFjaXR5Oi45NX0ubGlsLWd1aSAuY29udHJvbGxlci5udW1iZXIgLmZpbGx7Ym9yZGVyLXJpZ2h0OnZhcigtLXNsaWRlci1rbm9iLXdpZHRoKSBzb2xpZCB2YXIoLS1udW1iZXItY29sb3IpO2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjEwMCV9LmxpbC1ndWktZHJhZ2dpbmcgLmxpbC1ndWl7LS1ob3Zlci1jb2xvcjp2YXIoLS13aWRnZXQtY29sb3IpfS5saWwtZ3VpLWRyYWdnaW5nICp7Y3Vyc29yOmV3LXJlc2l6ZSFpbXBvcnRhbnR9LmxpbC1ndWktZHJhZ2dpbmcubGlsLWd1aS12ZXJ0aWNhbCAqe2N1cnNvcjpucy1yZXNpemUhaW1wb3J0YW50fS5saWwtZ3VpIC50aXRsZXstLXRpdGxlLWhlaWdodDpjYWxjKHZhcigtLXdpZGdldC1oZWlnaHQpICsgdmFyKC0tc3BhY2luZykqMS4yNSk7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O3RleHQtZGVjb3JhdGlvbi1za2lwOm9iamVjdHM7Y3Vyc29yOnBvaW50ZXI7Zm9udC13ZWlnaHQ6NjAwO2hlaWdodDp2YXIoLS10aXRsZS1oZWlnaHQpO2xpbmUtaGVpZ2h0OmNhbGModmFyKC0tdGl0bGUtaGVpZ2h0KSAtIDRweCk7b3V0bGluZTpub25lO3BhZGRpbmc6MCB2YXIoLS1wYWRkaW5nKX0ubGlsLWd1aSAudGl0bGU6YmVmb3Jle2NvbnRlbnQ6XCLilr5cIjtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LWZhbWlseTpsaWwtZ3VpO3BhZGRpbmctcmlnaHQ6MnB4fS5saWwtZ3VpIC50aXRsZTphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS10aXRsZS1iYWNrZ3JvdW5kLWNvbG9yKTtvcGFjaXR5Oi43NX0ubGlsLWd1aS5yb290Pi50aXRsZTpmb2N1c3t0ZXh0LWRlY29yYXRpb246bm9uZSFpbXBvcnRhbnR9LmxpbC1ndWkuY2xvc2VkPi50aXRsZTpiZWZvcmV7Y29udGVudDpcIuKWuFwifS5saWwtZ3VpLmNsb3NlZD4uY2hpbGRyZW57b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC03cHgpfS5saWwtZ3VpLmNsb3NlZDpub3QoLnRyYW5zaXRpb24pPi5jaGlsZHJlbntkaXNwbGF5Om5vbmV9LmxpbC1ndWkudHJhbnNpdGlvbj4uY2hpbGRyZW57b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOm5vbmU7dHJhbnNpdGlvbi1kdXJhdGlvbjouM3M7dHJhbnNpdGlvbi1wcm9wZXJ0eTpoZWlnaHQsb3BhY2l0eSx0cmFuc2Zvcm07dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yLC42LC4zNSwxKX0ubGlsLWd1aSAuY2hpbGRyZW46ZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XCJFbXB0eVwiO2Rpc3BsYXk6YmxvY2s7Zm9udC1zdHlsZTppdGFsaWM7aGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO21hcmdpbjp2YXIoLS1zcGFjaW5nKSAwO29wYWNpdHk6LjU7cGFkZGluZzowIHZhcigtLXBhZGRpbmcpfS5saWwtZ3VpLnJvb3Q+LmNoaWxkcmVuPi5saWwtZ3VpPi50aXRsZXtib3JkZXItd2lkdGg6MDtib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlci1sZWZ0OjAgc29saWQgdmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXItcmlnaHQ6MCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjNzfS5saWwtZ3VpLnJvb3Q+LmNoaWxkcmVuPi5saWwtZ3VpLmNsb3NlZD4udGl0bGV7Ym9yZGVyLWJvdHRvbS1jb2xvcjp0cmFuc3BhcmVudH0ubGlsLWd1aSsuY29udHJvbGxlcntib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO21hcmdpbi10b3A6MDtwYWRkaW5nLXRvcDp2YXIoLS1zcGFjaW5nKX0ubGlsLWd1aSAubGlsLWd1aSAubGlsLWd1aT4udGl0bGV7Ym9yZGVyOm5vbmV9LmxpbC1ndWkgLmxpbC1ndWkgLmxpbC1ndWk+LmNoaWxkcmVue2JvcmRlcjpub25lO2JvcmRlci1sZWZ0OjJweCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO21hcmdpbi1sZWZ0OnZhcigtLWZvbGRlci1pbmRlbnQpfS5saWwtZ3VpIC5saWwtZ3VpIC5jb250cm9sbGVye2JvcmRlcjpub25lfS5saWwtZ3VpIGlucHV0ey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kOnZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czp2YXIoLS13aWRnZXQtYm9yZGVyLXJhZGl1cyk7Y29sb3I6dmFyKC0tdGV4dC1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZTp2YXIoLS1pbnB1dC1mb250LXNpemUpO2hlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTtvdXRsaW5lOm5vbmU7d2lkdGg6MTAwJX0ubGlsLWd1aSBpbnB1dDpkaXNhYmxlZHtvcGFjaXR5OjF9LmxpbC1ndWkgaW5wdXRbdHlwZT1udW1iZXJdLC5saWwtZ3VpIGlucHV0W3R5cGU9dGV4dF17cGFkZGluZzp2YXIoLS13aWRnZXQtcGFkZGluZyl9LmxpbC1ndWkgaW5wdXRbdHlwZT1udW1iZXJdOmZvY3VzLC5saWwtZ3VpIGlucHV0W3R5cGU9dGV4dF06Zm9jdXN7YmFja2dyb3VuZDp2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sLmxpbC1ndWkgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7bWFyZ2luOjB9LmxpbC1ndWkgaW5wdXRbdHlwZT1udW1iZXJdey1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGR9LmxpbC1ndWkgaW5wdXRbdHlwZT1jaGVja2JveF17YXBwZWFyYW5jZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO2JvcmRlci1yYWRpdXM6dmFyKC0td2lkZ2V0LWJvcmRlci1yYWRpdXMpO2N1cnNvcjpwb2ludGVyO2hlaWdodDp2YXIoLS1jaGVja2JveC1zaXplKTt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDp2YXIoLS1jaGVja2JveC1zaXplKX0ubGlsLWd1aSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkOmJlZm9yZXtjb250ZW50Olwi4pyTXCI7Zm9udC1mYW1pbHk6bGlsLWd1aTtmb250LXNpemU6dmFyKC0tY2hlY2tib3gtc2l6ZSk7bGluZS1oZWlnaHQ6dmFyKC0tY2hlY2tib3gtc2l6ZSl9LmxpbC1ndWkgYnV0dG9uey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kOnZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyOjFweCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0td2lkZ2V0LWJvcmRlci1yYWRpdXMpO2NvbG9yOnZhcigtLXRleHQtY29sb3IpO2N1cnNvcjpwb2ludGVyO2ZvbnQtZmFtaWx5OnZhcigtLWZvbnQtZmFtaWx5KTtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKTtoZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7bGluZS1oZWlnaHQ6Y2FsYyh2YXIoLS13aWRnZXQtaGVpZ2h0KSAtIDRweCk7b3V0bGluZTpub25lO3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOm5vbmU7d2lkdGg6MTAwJX0ubGlsLWd1aSBidXR0b246YWN0aXZle2JhY2tncm91bmQ6dmFyKC0tZm9jdXMtY29sb3IpfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6bGlsLWd1aTtzcmM6dXJsKFwiZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsZDA5R1JnQUJBQUFBQUFVc0FBc0FBQUFBQ0p3QUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJIVTFWQ0FBQUJDQUFBQUg0QUFBREFJbXdtWUU5VEx6SUFBQUdJQUFBQVB3QUFBR0JLcUg1U1kyMWhjQUFBQWNnQUFBRDBBQUFDcnVreXlKQm5iSGxtQUFBQ3ZBQUFBRjhBQUFDRUlacFdIMmhsWVdRQUFBTWNBQUFBSndBQUFEWmZjajJ6YUdobFlRQUFBMFFBQUFBWUFBQUFKQUM1QUhob2JYUjRBQUFEWEFBQUFCQUFBQUJNQVpBQUFHeHZZMkVBQUFOc0FBQUFGQUFBQUNnQ0VnSXliV0Y0Y0FBQUE0QUFBQUFlQUFBQUlBRWZBQkp1WVcxbEFBQURvQUFBQVNJQUFBSUs5U1VVL1hCdmMzUUFBQVRFQUFBQVpnQUFBSkNUY01jMmVKeFZqYkVPZ2pBVVJVK2hGUkJLMWRHUkwrQUxuQWlUb3lNTEV6RnBuUHovZUFzaHdTYTk3NTE3Yy9Nd3dKbWVCOWt3UGwrMGNmNSt1R1BaWHNxUHU0bnZaYWJjU1psZFo2a2Z5V25vbUZZL2VTY0txWk5XdXBLSk82a1hOM0s5dUNWb0w3aUluUHIxWDViYVhzM3RqdU1xQ3R6RXVhZ20vQUFselFnUEFBQjRuR05nWVJCbG5NREF5c0RBWU0vZ0JpVDVvTFFCQXd1REpBTURFd01yTXdOV0VKRG1tc0p3Z0NGZVhaZ2hCY2psWk1nRkN6T2lLT0lGQUI3MUJiOEFlSnkxa2pGdXdrQVFSWitEd1JBd0J0TlFSVUdLUThPZEtDQVdVaEFnS0xoSXVBc1ZTcFd6NUJia2ozZEVnWWlVSXN6cVdkcFplK1o3L3dCMW9DWW1Jb2JvaXdpTFQyV2pLbC9qc2NySGZHZy9wS2RNa3lrbEM1WnMyTEVmSFlwamNSb1B6bWU5TVdXbWszZFdiSzlPYmtXa2lrT2V0SjU1NGZXeW9Fc21kU2x0K3VSMHBDSlIzNGI2dC9UVmcxU1kzc1l2ZGY4dnVpS3JweWFEWERJU2llZ3AxN3A3NTc5R3AzcCsreTdIUEFpWTlwbVRpYmxqcnI4NXFTaWR0bGc0K2wyNUdMQ2FTOGU2clJ4TkJtc25FUnVuS2JhT09iUno3TjcyanU1dmRBallwQlhIZ0p5bE9BVnNNc2VEQVBFUDhMWW9VSGljWTJCaUFBRWZoaUFHSmdaV0JnWjdSbkZSZG5WSkVMQ1FsQlNSbEFUSk1vTFYyREs0Z2xTWXM2dWJxNXZiS3JKTFNiR3JnRW1vdkR1REpWaGUzVnpjWEZ3TkxDT0lMQi9DNEl1UTF4VG41RlBpbEJUajVGUG1CQUI0V3dvcUFIaWNZMkJrWUdBQTRzazFzUi9qK1cyK01uQXpwREJnQXlFTVFVQ1NnNEVKeEFFQXdVZ0ZIZ0I0bkdOZ1pHQmdTR0ZnZ0pNaERJd01xRUFZQUJ5SEFUSjRuR05nQUlJVU5Fd21BQUJsM0FHUmVKeGpZQUFDSVFZbEJpTUdKM3dRQUVjUUJFVjRuR05nWkdCZ0VHWmdZMkJpQUFFUXlRV0VEQXovd1h3R0FBc1BBVElBQUhpY1hkQk5Tc05BSEFYd2wzNWlBMFVRWFluTVNoZlM5R1BaQTdUN0xnSXUwM1NTcGt3ellUSXQxQk40QWsvZ0tUeUFlQ3hmdzM5alpranltemN2QXdtQVcvd2d3SFVFR0RiMzYralFRM0dYR290NzlMMjRqeENQNGdIekYvRUlyNGpFSWU3d3hoT0MzZzJUTVl5NFE3K0x1L1NIdUVkL2l2dDR3SmQ0d1B4YlBFS01YM0dJNStESkZHYVNuNHFOems4bWNiS1NSNnhkWGRoU3phT1pKR3RkYXBkNHZWUGJpNnJQK2NMN1RHWE9IdFhLbGw0YlkxWGw3RUduUHRwN1h5Mm4wMHp5S0xWSGZrSEJhNEljSjJvRDNjZ2dnV3Z0L1YvRmJEclVsRVVKaFRuLzBhelZXYk5UTnIwRW5zOGRlMXRjZUs5eFptZkIxQ1BqT21QSDRraXRtdk91YmNOcG1WVE4zb0ZKeWp6Q3ZubXJ3aEpUenF6Vmo5amlTWDkxMUZqZUFBQjRuRzNITVJLQ01CQkEwZjBnaWlLaTREVThrMFYyR1diSVpET2g0UG9XV3ZxNko1VjhJZjlOVk5RY2FEaHlvdVhNaFk0clBUY0c3andZbVhoS3E4V3orcDc2MmFOYWVZWG9tMm4zbTJkTFRWZ3NyQ2dGSjdPVG1Ja1lid0liQzZ2SUI3V21GZkFBQUE9PVwiKSBmb3JtYXQoXCJ3b2ZmXCIpfUBtZWRpYSAocG9pbnRlcjpjb2Fyc2Upey5saWwtZ3VpLmFsbG93LXRvdWNoLXN0eWxlc3stLXdpZGdldC1oZWlnaHQ6MjhweDstLXBhZGRpbmc6NnB4Oy0tc3BhY2luZzo2cHg7LS1mb250LXNpemU6MTNweDstLWlucHV0LWZvbnQtc2l6ZToxNnB4Oy0tZm9sZGVyLWluZGVudDoxMHB4Oy0tc2Nyb2xsYmFyLXdpZHRoOjdweDstLXNsaWRlci1pbnB1dC1taW4td2lkdGg6NTBweDstLWNvbG9yLWlucHV0LW1pbi13aWR0aDo2NXB4fX1AbWVkaWEgKGhvdmVyOmhvdmVyKXsubGlsLWd1aSAuY29udHJvbGxlci5jb2xvciAuZGlzcGxheTpob3ZlcjpiZWZvcmV7Ym9yZGVyOjFweCBzb2xpZCAjZmZmOTtib3JkZXItcmFkaXVzOnZhcigtLXdpZGdldC1ib3JkZXItcmFkaXVzKTtib3R0b206MDtjb250ZW50OlwiIFwiO2Rpc3BsYXk6YmxvY2s7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjB9LmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIC5kaXNwbGF5LmZvY3Vze2JhY2tncm91bmQ6dmFyKC0tZm9jdXMtY29sb3IpfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiAud2lkZ2V0OmhvdmVyIC5kaXNwbGF5e2JhY2tncm91bmQ6dmFyKC0taG92ZXItY29sb3IpfS5saWwtZ3VpIC5jb250cm9sbGVyLm51bWJlciAuc2xpZGVyOmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0taG92ZXItY29sb3IpfWJvZHk6bm90KC5saWwtZ3VpLWRyYWdnaW5nKSAubGlsLWd1aSAudGl0bGU6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS10aXRsZS1iYWNrZ3JvdW5kLWNvbG9yKTtvcGFjaXR5Oi44NX0ubGlsLWd1aSAudGl0bGU6Zm9jdXN7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSB2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgaW5wdXQ6aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1ob3Zlci1jb2xvcil9LmxpbC1ndWkgaW5wdXQ6YWN0aXZle2JhY2tncm91bmQ6dmFyKC0tZm9jdXMtY29sb3IpfS5saWwtZ3VpIGlucHV0W3R5cGU9Y2hlY2tib3hdOmZvY3Vze2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgMXB4IHZhcigtLWZvY3VzLWNvbG9yKX0ubGlsLWd1aSBidXR0b246aG92ZXJ7YmFja2dyb3VuZDp2YXIoLS1ob3Zlci1jb2xvcik7Ym9yZGVyLWNvbG9yOnZhcigtLWhvdmVyLWNvbG9yKX0ubGlsLWd1aSBidXR0b246Zm9jdXN7Ym9yZGVyLWNvbG9yOnZhcigtLWZvY3VzLWNvbG9yKX19JykscD0hMCksZT9lLmFwcGVuZENoaWxkKHRoaXMuZG9tRWxlbWVudCk6aSYmKHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYXV0b1BsYWNlXCIpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KSkscyYmdGhpcy5kb21FbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS13aWR0aFwiLHMrXCJweFwiKSx0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0PT50LnN0b3BQcm9wYWdhdGlvbigpKSx0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdD0+dC5zdG9wUHJvcGFnYXRpb24oKSl9YWRkKHQsZSxzLG4scil7aWYoT2JqZWN0KHMpPT09cylyZXR1cm4gbmV3IGModGhpcyx0LGUscyk7Y29uc3QgbD10W2VdO3N3aXRjaCh0eXBlb2YgbCl7Y2FzZVwibnVtYmVyXCI6cmV0dXJuIG5ldyBkKHRoaXMsdCxlLHMsbixyKTtjYXNlXCJib29sZWFuXCI6cmV0dXJuIG5ldyBpKHRoaXMsdCxlKTtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gbmV3IHUodGhpcyx0LGUpO2Nhc2VcImZ1bmN0aW9uXCI6cmV0dXJuIG5ldyBoKHRoaXMsdCxlKX1jb25zb2xlLmVycm9yKFwiZ3VpLmFkZCBmYWlsZWRcXG5cXHRwcm9wZXJ0eTpcIixlLFwiXFxuXFx0b2JqZWN0OlwiLHQsXCJcXG5cXHR2YWx1ZTpcIixsKX1hZGRDb2xvcih0LGksZT0xKXtyZXR1cm4gbmV3IGEodGhpcyx0LGksZSl9YWRkRm9sZGVyKHQpe3JldHVybiBuZXcgZyh7cGFyZW50OnRoaXMsdGl0bGU6dH0pfWxvYWQodCxpPSEwKXtyZXR1cm4gdC5jb250cm9sbGVycyYmdGhpcy5jb250cm9sbGVycy5mb3JFYWNoKGk9PntpIGluc3RhbmNlb2YgaHx8aS5fbmFtZSBpbiB0LmNvbnRyb2xsZXJzJiZpLmxvYWQodC5jb250cm9sbGVyc1tpLl9uYW1lXSl9KSxpJiZ0LmZvbGRlcnMmJnRoaXMuZm9sZGVycy5mb3JFYWNoKGk9PntpLl90aXRsZSBpbiB0LmZvbGRlcnMmJmkubG9hZCh0LmZvbGRlcnNbaS5fdGl0bGVdKX0pLHRoaXN9c2F2ZSh0PSEwKXtjb25zdCBpPXtjb250cm9sbGVyczp7fSxmb2xkZXJzOnt9fTtyZXR1cm4gdGhpcy5jb250cm9sbGVycy5mb3JFYWNoKHQ9PntpZighKHQgaW5zdGFuY2VvZiBoKSl7aWYodC5fbmFtZSBpbiBpLmNvbnRyb2xsZXJzKXRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNhdmUgR1VJIHdpdGggZHVwbGljYXRlIHByb3BlcnR5IFwiJHt0Ll9uYW1lfVwiYCk7aS5jb250cm9sbGVyc1t0Ll9uYW1lXT10LnNhdmUoKX19KSx0JiZ0aGlzLmZvbGRlcnMuZm9yRWFjaCh0PT57aWYodC5fdGl0bGUgaW4gaS5mb2xkZXJzKXRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNhdmUgR1VJIHdpdGggZHVwbGljYXRlIGZvbGRlciBcIiR7dC5fdGl0bGV9XCJgKTtpLmZvbGRlcnNbdC5fdGl0bGVdPXQuc2F2ZSgpfSksaX1vcGVuKHQ9ITApe3JldHVybiB0aGlzLl9jbG9zZWQ9IXQsdGhpcy4kdGl0bGUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCF0aGlzLl9jbG9zZWQpLHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2VkXCIsdGhpcy5fY2xvc2VkKSx0aGlzfWNsb3NlKCl7cmV0dXJuIHRoaXMub3BlbighMSl9c2hvdyh0PSEwKXtyZXR1cm4gdGhpcy5faGlkZGVuPSF0LHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5PXRoaXMuX2hpZGRlbj9cIm5vbmVcIjpcIlwiLHRoaXN9aGlkZSgpe3JldHVybiB0aGlzLnNob3coITEpfW9wZW5BbmltYXRlZCh0PSEwKXtyZXR1cm4gdGhpcy5fY2xvc2VkPSF0LHRoaXMuJHRpdGxlLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwhdGhpcy5fY2xvc2VkKSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9Pntjb25zdCBpPXRoaXMuJGNoaWxkcmVuLmNsaWVudEhlaWdodDt0aGlzLiRjaGlsZHJlbi5zdHlsZS5oZWlnaHQ9aStcInB4XCIsdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uXCIpO2NvbnN0IGU9dD0+e3QudGFyZ2V0PT09dGhpcy4kY2hpbGRyZW4mJih0aGlzLiRjaGlsZHJlbi5zdHlsZS5oZWlnaHQ9XCJcIix0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb25cIiksdGhpcy4kY2hpbGRyZW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIixlKSl9O3RoaXMuJGNoaWxkcmVuLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsZSk7Y29uc3Qgcz10P3RoaXMuJGNoaWxkcmVuLnNjcm9sbEhlaWdodDowO3RoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2VkXCIsIXQpLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e3RoaXMuJGNoaWxkcmVuLnN0eWxlLmhlaWdodD1zK1wicHhcIn0pfSksdGhpc310aXRsZSh0KXtyZXR1cm4gdGhpcy5fdGl0bGU9dCx0aGlzLiR0aXRsZS5pbm5lckhUTUw9dCx0aGlzfXJlc2V0KHQ9ITApe3JldHVybih0P3RoaXMuY29udHJvbGxlcnNSZWN1cnNpdmUoKTp0aGlzLmNvbnRyb2xsZXJzKS5mb3JFYWNoKHQ9PnQucmVzZXQoKSksdGhpc31vbkNoYW5nZSh0KXtyZXR1cm4gdGhpcy5fb25DaGFuZ2U9dCx0aGlzfV9jYWxsT25DaGFuZ2UodCl7dGhpcy5wYXJlbnQmJnRoaXMucGFyZW50Ll9jYWxsT25DaGFuZ2UodCksdm9pZCAwIT09dGhpcy5fb25DaGFuZ2UmJnRoaXMuX29uQ2hhbmdlLmNhbGwodGhpcyx7b2JqZWN0OnQub2JqZWN0LHByb3BlcnR5OnQucHJvcGVydHksdmFsdWU6dC5nZXRWYWx1ZSgpLGNvbnRyb2xsZXI6dH0pfW9uRmluaXNoQ2hhbmdlKHQpe3JldHVybiB0aGlzLl9vbkZpbmlzaENoYW5nZT10LHRoaXN9X2NhbGxPbkZpbmlzaENoYW5nZSh0KXt0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQuX2NhbGxPbkZpbmlzaENoYW5nZSh0KSx2b2lkIDAhPT10aGlzLl9vbkZpbmlzaENoYW5nZSYmdGhpcy5fb25GaW5pc2hDaGFuZ2UuY2FsbCh0aGlzLHtvYmplY3Q6dC5vYmplY3QscHJvcGVydHk6dC5wcm9wZXJ0eSx2YWx1ZTp0LmdldFZhbHVlKCksY29udHJvbGxlcjp0fSl9ZGVzdHJveSgpe3RoaXMucGFyZW50JiYodGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyksMSksdGhpcy5wYXJlbnQuZm9sZGVycy5zcGxpY2UodGhpcy5wYXJlbnQuZm9sZGVycy5pbmRleE9mKHRoaXMpLDEpKSx0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudCYmdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KSxBcnJheS5mcm9tKHRoaXMuY2hpbGRyZW4pLmZvckVhY2godD0+dC5kZXN0cm95KCkpfWNvbnRyb2xsZXJzUmVjdXJzaXZlKCl7bGV0IHQ9QXJyYXkuZnJvbSh0aGlzLmNvbnRyb2xsZXJzKTtyZXR1cm4gdGhpcy5mb2xkZXJzLmZvckVhY2goaT0+e3Q9dC5jb25jYXQoaS5jb250cm9sbGVyc1JlY3Vyc2l2ZSgpKX0pLHR9Zm9sZGVyc1JlY3Vyc2l2ZSgpe2xldCB0PUFycmF5LmZyb20odGhpcy5mb2xkZXJzKTtyZXR1cm4gdGhpcy5mb2xkZXJzLmZvckVhY2goaT0+e3Q9dC5jb25jYXQoaS5mb2xkZXJzUmVjdXJzaXZlKCkpfSksdH19ZXhwb3J0IGRlZmF1bHQgZztleHBvcnR7aSBhcyBCb29sZWFuQ29udHJvbGxlcixhIGFzIENvbG9yQ29udHJvbGxlcix0IGFzIENvbnRyb2xsZXIsaCBhcyBGdW5jdGlvbkNvbnRyb2xsZXIsZyBhcyBHVUksZCBhcyBOdW1iZXJDb250cm9sbGVyLGMgYXMgT3B0aW9uQ29udHJvbGxlcix1IGFzIFN0cmluZ0NvbnRyb2xsZXJ9O1xuIiwidmFyIFN0YXRzID0gZnVuY3Rpb24gKCkge1xuXG5cdHZhciBtb2RlID0gMDtcblxuXHR2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0Y29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSAncG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MC45O3otaW5kZXg6MTAwMDAnO1xuXHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0c2hvd1BhbmVsKCArKyBtb2RlICUgY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCApO1xuXG5cdH0sIGZhbHNlICk7XG5cblx0Ly9cblxuXHRmdW5jdGlvbiBhZGRQYW5lbCggcGFuZWwgKSB7XG5cblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoIHBhbmVsLmRvbSApO1xuXHRcdHJldHVybiBwYW5lbDtcblxuXHR9XG5cblx0ZnVuY3Rpb24gc2hvd1BhbmVsKCBpZCApIHtcblxuXHRcdGZvciAoIHZhciBpID0gMDsgaSA8IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRcdGNvbnRhaW5lci5jaGlsZHJlblsgaSBdLnN0eWxlLmRpc3BsYXkgPSBpID09PSBpZCA/ICdibG9jaycgOiAnbm9uZSc7XG5cblx0XHR9XG5cblx0XHRtb2RlID0gaWQ7XG5cblx0fVxuXG5cdC8vXG5cblx0dmFyIGJlZ2luVGltZSA9ICggcGVyZm9ybWFuY2UgfHwgRGF0ZSApLm5vdygpLCBwcmV2VGltZSA9IGJlZ2luVGltZSwgZnJhbWVzID0gMDtcblxuXHR2YXIgZnBzUGFuZWwgPSBhZGRQYW5lbCggbmV3IFN0YXRzLlBhbmVsKCAnRlBTJywgJyMwZmYnLCAnIzAwMicgKSApO1xuXHR2YXIgbXNQYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdNUycsICcjMGYwJywgJyMwMjAnICkgKTtcblxuXHRpZiAoIHNlbGYucGVyZm9ybWFuY2UgJiYgc2VsZi5wZXJmb3JtYW5jZS5tZW1vcnkgKSB7XG5cblx0XHR2YXIgbWVtUGFuZWwgPSBhZGRQYW5lbCggbmV3IFN0YXRzLlBhbmVsKCAnTUInLCAnI2YwOCcsICcjMjAxJyApICk7XG5cblx0fVxuXG5cdHNob3dQYW5lbCggMCApO1xuXG5cdHJldHVybiB7XG5cblx0XHRSRVZJU0lPTjogMTYsXG5cblx0XHRkb206IGNvbnRhaW5lcixcblxuXHRcdGFkZFBhbmVsOiBhZGRQYW5lbCxcblx0XHRzaG93UGFuZWw6IHNob3dQYW5lbCxcblxuXHRcdGJlZ2luOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGJlZ2luVGltZSA9ICggcGVyZm9ybWFuY2UgfHwgRGF0ZSApLm5vdygpO1xuXG5cdFx0fSxcblxuXHRcdGVuZDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRmcmFtZXMgKys7XG5cblx0XHRcdHZhciB0aW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCk7XG5cblx0XHRcdG1zUGFuZWwudXBkYXRlKCB0aW1lIC0gYmVnaW5UaW1lLCAyMDAgKTtcblxuXHRcdFx0aWYgKCB0aW1lID49IHByZXZUaW1lICsgMTAwMCApIHtcblxuXHRcdFx0XHRmcHNQYW5lbC51cGRhdGUoICggZnJhbWVzICogMTAwMCApIC8gKCB0aW1lIC0gcHJldlRpbWUgKSwgMTAwICk7XG5cblx0XHRcdFx0cHJldlRpbWUgPSB0aW1lO1xuXHRcdFx0XHRmcmFtZXMgPSAwO1xuXG5cdFx0XHRcdGlmICggbWVtUGFuZWwgKSB7XG5cblx0XHRcdFx0XHR2YXIgbWVtb3J5ID0gcGVyZm9ybWFuY2UubWVtb3J5O1xuXHRcdFx0XHRcdG1lbVBhbmVsLnVwZGF0ZSggbWVtb3J5LnVzZWRKU0hlYXBTaXplIC8gMTA0ODU3NiwgbWVtb3J5LmpzSGVhcFNpemVMaW1pdCAvIDEwNDg1NzYgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRpbWU7XG5cblx0XHR9LFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGJlZ2luVGltZSA9IHRoaXMuZW5kKCk7XG5cblx0XHR9LFxuXG5cdFx0Ly8gQmFja3dhcmRzIENvbXBhdGliaWxpdHlcblxuXHRcdGRvbUVsZW1lbnQ6IGNvbnRhaW5lcixcblx0XHRzZXRNb2RlOiBzaG93UGFuZWxcblxuXHR9O1xuXG59O1xuXG5TdGF0cy5QYW5lbCA9IGZ1bmN0aW9uICggbmFtZSwgZmcsIGJnICkge1xuXG5cdHZhciBtaW4gPSBJbmZpbml0eSwgbWF4ID0gMCwgcm91bmQgPSBNYXRoLnJvdW5kO1xuXHR2YXIgUFIgPSByb3VuZCggd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSApO1xuXG5cdHZhciBXSURUSCA9IDgwICogUFIsIEhFSUdIVCA9IDQ4ICogUFIsXG5cdFx0VEVYVF9YID0gMyAqIFBSLCBURVhUX1kgPSAyICogUFIsXG5cdFx0R1JBUEhfWCA9IDMgKiBQUiwgR1JBUEhfWSA9IDE1ICogUFIsXG5cdFx0R1JBUEhfV0lEVEggPSA3NCAqIFBSLCBHUkFQSF9IRUlHSFQgPSAzMCAqIFBSO1xuXG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuXHRjYW52YXMud2lkdGggPSBXSURUSDtcblx0Y2FudmFzLmhlaWdodCA9IEhFSUdIVDtcblx0Y2FudmFzLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6ODBweDtoZWlnaHQ6NDhweCc7XG5cblx0dmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xuXHRjb250ZXh0LmZvbnQgPSAnYm9sZCAnICsgKCA5ICogUFIgKSArICdweCBIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZic7XG5cdGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG5cblx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0Y29udGV4dC5maWxsUmVjdCggMCwgMCwgV0lEVEgsIEhFSUdIVCApO1xuXG5cdGNvbnRleHQuZmlsbFN0eWxlID0gZmc7XG5cdGNvbnRleHQuZmlsbFRleHQoIG5hbWUsIFRFWFRfWCwgVEVYVF9ZICk7XG5cdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1gsIEdSQVBIX1ksIEdSQVBIX1dJRFRILCBHUkFQSF9IRUlHSFQgKTtcblxuXHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMC45O1xuXHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCwgR1JBUEhfSEVJR0hUICk7XG5cblx0cmV0dXJuIHtcblxuXHRcdGRvbTogY2FudmFzLFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbiAoIHZhbHVlLCBtYXhWYWx1ZSApIHtcblxuXHRcdFx0bWluID0gTWF0aC5taW4oIG1pbiwgdmFsdWUgKTtcblx0XHRcdG1heCA9IE1hdGgubWF4KCBtYXgsIHZhbHVlICk7XG5cblx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdFx0XHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoIDAsIDAsIFdJRFRILCBHUkFQSF9ZICk7XG5cdFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGZnO1xuXHRcdFx0Y29udGV4dC5maWxsVGV4dCggcm91bmQoIHZhbHVlICkgKyAnICcgKyBuYW1lICsgJyAoJyArIHJvdW5kKCBtaW4gKSArICctJyArIHJvdW5kKCBtYXggKSArICcpJywgVEVYVF9YLCBURVhUX1kgKTtcblxuXHRcdFx0Y29udGV4dC5kcmF3SW1hZ2UoIGNhbnZhcywgR1JBUEhfWCArIFBSLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9IRUlHSFQsIEdSQVBIX1gsIEdSQVBIX1ksIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX0hFSUdIVCApO1xuXG5cdFx0XHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YICsgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfWSwgUFIsIEdSQVBIX0hFSUdIVCApO1xuXG5cdFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRcdFx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDAuOTtcblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1ggKyBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9ZLCBQUiwgcm91bmQoICggMSAtICggdmFsdWUgLyBtYXhWYWx1ZSApICkgKiBHUkFQSF9IRUlHSFQgKSApO1xuXG5cdFx0fVxuXG5cdH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzO1xuIiwiaW1wb3J0IHtcblx0QmFja1NpZGUsXG5cdEJveEdlb21ldHJ5LFxuXHRNZXNoLFxuXHRTaGFkZXJNYXRlcmlhbCxcblx0VW5pZm9ybXNVdGlscyxcblx0VmVjdG9yM1xufSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQmFzZWQgb24gXCJBIFByYWN0aWNhbCBBbmFseXRpYyBNb2RlbCBmb3IgRGF5bGlnaHRcIlxuICogYWthIFRoZSBQcmVldGhhbSBNb2RlbCwgdGhlIGRlIGZhY3RvIHN0YW5kYXJkIGFuYWx5dGljIHNreWRvbWUgbW9kZWxcbiAqIGh0dHBzOi8vd3d3LnJlc2VhcmNoZ2F0ZS5uZXQvcHVibGljYXRpb24vMjIwNzIwNDQzX0FfUHJhY3RpY2FsX0FuYWx5dGljX01vZGVsX2Zvcl9EYXlsaWdodFxuICpcbiAqIEZpcnN0IGltcGxlbWVudGVkIGJ5IFNpbW9uIFdhbGxuZXJcbiAqIGh0dHA6Ly9zaW1vbndhbGxuZXIuYXQvcHJvamVjdC9hdG1vc3BoZXJpYy1zY2F0dGVyaW5nL1xuICpcbiAqIEltcHJvdmVkIGJ5IE1hcnRpbiBVcGl0aXNcbiAqIGh0dHA6Ly9ibGVuZGVyYXJ0aXN0cy5vcmcvZm9ydW0vc2hvd3RocmVhZC5waHA/MjQ1OTU0LXByZWV0aGFtcy1za3ktaW1wZW1lbnRhdGlvbi1IRFJcbiAqXG4gKiBUaHJlZS5qcyBpbnRlZ3JhdGlvbiBieSB6ejg1IGh0dHA6Ly90d2l0dGVyLmNvbS9ibHVyc3BsaW5lXG4qL1xuXG5jbGFzcyBTa3kgZXh0ZW5kcyBNZXNoIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdGNvbnN0IHNoYWRlciA9IFNreS5Ta3lTaGFkZXI7XG5cblx0XHRjb25zdCBtYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbCgge1xuXHRcdFx0bmFtZTogJ1NreVNoYWRlcicsXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyLFxuXHRcdFx0dmVydGV4U2hhZGVyOiBzaGFkZXIudmVydGV4U2hhZGVyLFxuXHRcdFx0dW5pZm9ybXM6IFVuaWZvcm1zVXRpbHMuY2xvbmUoIHNoYWRlci51bmlmb3JtcyApLFxuXHRcdFx0c2lkZTogQmFja1NpZGUsXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZVxuXHRcdH0gKTtcblxuXHRcdHN1cGVyKCBuZXcgQm94R2VvbWV0cnkoIDEsIDEsIDEgKSwgbWF0ZXJpYWwgKTtcblxuXHRcdHRoaXMuaXNTa3kgPSB0cnVlO1xuXG5cdH1cblxufVxuXG5Ta3kuU2t5U2hhZGVyID0ge1xuXG5cdHVuaWZvcm1zOiB7XG5cdFx0J3R1cmJpZGl0eSc6IHsgdmFsdWU6IDIgfSxcblx0XHQncmF5bGVpZ2gnOiB7IHZhbHVlOiAxIH0sXG5cdFx0J21pZUNvZWZmaWNpZW50JzogeyB2YWx1ZTogMC4wMDUgfSxcblx0XHQnbWllRGlyZWN0aW9uYWxHJzogeyB2YWx1ZTogMC44IH0sXG5cdFx0J3N1blBvc2l0aW9uJzogeyB2YWx1ZTogbmV3IFZlY3RvcjMoKSB9LFxuXHRcdCd1cCc6IHsgdmFsdWU6IG5ldyBWZWN0b3IzKCAwLCAxLCAwICkgfVxuXHR9LFxuXG5cdHZlcnRleFNoYWRlcjogLyogZ2xzbCAqL2Bcblx0XHR1bmlmb3JtIHZlYzMgc3VuUG9zaXRpb247XG5cdFx0dW5pZm9ybSBmbG9hdCByYXlsZWlnaDtcblx0XHR1bmlmb3JtIGZsb2F0IHR1cmJpZGl0eTtcblx0XHR1bmlmb3JtIGZsb2F0IG1pZUNvZWZmaWNpZW50O1xuXHRcdHVuaWZvcm0gdmVjMyB1cDtcblxuXHRcdHZhcnlpbmcgdmVjMyB2V29ybGRQb3NpdGlvbjtcblx0XHR2YXJ5aW5nIHZlYzMgdlN1bkRpcmVjdGlvbjtcblx0XHR2YXJ5aW5nIGZsb2F0IHZTdW5mYWRlO1xuXHRcdHZhcnlpbmcgdmVjMyB2QmV0YVI7XG5cdFx0dmFyeWluZyB2ZWMzIHZCZXRhTTtcblx0XHR2YXJ5aW5nIGZsb2F0IHZTdW5FO1xuXG5cdFx0Ly8gY29uc3RhbnRzIGZvciBhdG1vc3BoZXJpYyBzY2F0dGVyaW5nXG5cdFx0Y29uc3QgZmxvYXQgZSA9IDIuNzE4MjgxODI4NDU5MDQ1MjM1MzYwMjg3NDcxMzUyNjYyNDk3NzU3MjQ3MDkzNjk5OTU5NTc7XG5cdFx0Y29uc3QgZmxvYXQgcGkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTUwMjg4NDE5NzE2OTtcblxuXHRcdC8vIHdhdmVsZW5ndGggb2YgdXNlZCBwcmltYXJpZXMsIGFjY29yZGluZyB0byBwcmVldGhhbVxuXHRcdGNvbnN0IHZlYzMgbGFtYmRhID0gdmVjMyggNjgwRS05LCA1NTBFLTksIDQ1MEUtOSApO1xuXHRcdC8vIHRoaXMgcHJlLWNhbGN1YXRpb24gcmVwbGFjZXMgb2xkZXIgVG90YWxSYXlsZWlnaCh2ZWMzIGxhbWJkYSkgZnVuY3Rpb246XG5cdFx0Ly8gKDguMCAqIHBvdyhwaSwgMy4wKSAqIHBvdyhwb3cobiwgMi4wKSAtIDEuMCwgMi4wKSAqICg2LjAgKyAzLjAgKiBwbikpIC8gKDMuMCAqIE4gKiBwb3cobGFtYmRhLCB2ZWMzKDQuMCkpICogKDYuMCAtIDcuMCAqIHBuKSlcblx0XHRjb25zdCB2ZWMzIHRvdGFsUmF5bGVpZ2ggPSB2ZWMzKCA1LjgwNDU0Mjk5NjI2MTA5M0UtNiwgMS4zNTYyOTExNDE5ODQ1NjM1RS01LCAzLjAyNjU5MDI0Njg4MjQ4NzZFLTUgKTtcblxuXHRcdC8vIG1pZSBzdHVmZlxuXHRcdC8vIEsgY29lZmZpY2llbnQgZm9yIHRoZSBwcmltYXJpZXNcblx0XHRjb25zdCBmbG9hdCB2ID0gNC4wO1xuXHRcdGNvbnN0IHZlYzMgSyA9IHZlYzMoIDAuNjg2LCAwLjY3OCwgMC42NjYgKTtcblx0XHQvLyBNaWVDb25zdCA9IHBpICogcG93KCAoIDIuMCAqIHBpICkgLyBsYW1iZGEsIHZlYzMoIHYgLSAyLjAgKSApICogS1xuXHRcdGNvbnN0IHZlYzMgTWllQ29uc3QgPSB2ZWMzKCAxLjgzOTk5MTg1MTQ0MzM5NzhFMTQsIDIuNzc5ODAyMzkxOTY2MDUyOEUxNCwgNC4wNzkwNDc5NTQzODYxMDk0RTE0ICk7XG5cblx0XHQvLyBlYXJ0aCBzaGFkb3cgaGFja1xuXHRcdC8vIGN1dG9mZkFuZ2xlID0gcGkgLyAxLjk1O1xuXHRcdGNvbnN0IGZsb2F0IGN1dG9mZkFuZ2xlID0gMS42MTEwNzMxNTU2ODcwNzM0O1xuXHRcdGNvbnN0IGZsb2F0IHN0ZWVwbmVzcyA9IDEuNTtcblx0XHRjb25zdCBmbG9hdCBFRSA9IDEwMDAuMDtcblxuXHRcdGZsb2F0IHN1bkludGVuc2l0eSggZmxvYXQgemVuaXRoQW5nbGVDb3MgKSB7XG5cdFx0XHR6ZW5pdGhBbmdsZUNvcyA9IGNsYW1wKCB6ZW5pdGhBbmdsZUNvcywgLTEuMCwgMS4wICk7XG5cdFx0XHRyZXR1cm4gRUUgKiBtYXgoIDAuMCwgMS4wIC0gcG93KCBlLCAtKCAoIGN1dG9mZkFuZ2xlIC0gYWNvcyggemVuaXRoQW5nbGVDb3MgKSApIC8gc3RlZXBuZXNzICkgKSApO1xuXHRcdH1cblxuXHRcdHZlYzMgdG90YWxNaWUoIGZsb2F0IFQgKSB7XG5cdFx0XHRmbG9hdCBjID0gKCAwLjIgKiBUICkgKiAxMEUtMTg7XG5cdFx0XHRyZXR1cm4gMC40MzQgKiBjICogTWllQ29uc3Q7XG5cdFx0fVxuXG5cdFx0dm9pZCBtYWluKCkge1xuXG5cdFx0XHR2ZWM0IHdvcmxkUG9zaXRpb24gPSBtb2RlbE1hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcblx0XHRcdHZXb3JsZFBvc2l0aW9uID0gd29ybGRQb3NpdGlvbi54eXo7XG5cblx0XHRcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcblx0XHRcdGdsX1Bvc2l0aW9uLnogPSBnbF9Qb3NpdGlvbi53OyAvLyBzZXQgeiB0byBjYW1lcmEuZmFyXG5cblx0XHRcdHZTdW5EaXJlY3Rpb24gPSBub3JtYWxpemUoIHN1blBvc2l0aW9uICk7XG5cblx0XHRcdHZTdW5FID0gc3VuSW50ZW5zaXR5KCBkb3QoIHZTdW5EaXJlY3Rpb24sIHVwICkgKTtcblxuXHRcdFx0dlN1bmZhZGUgPSAxLjAgLSBjbGFtcCggMS4wIC0gZXhwKCAoIHN1blBvc2l0aW9uLnkgLyA0NTAwMDAuMCApICksIDAuMCwgMS4wICk7XG5cblx0XHRcdGZsb2F0IHJheWxlaWdoQ29lZmZpY2llbnQgPSByYXlsZWlnaCAtICggMS4wICogKCAxLjAgLSB2U3VuZmFkZSApICk7XG5cblx0XHRcdC8vIGV4dGluY3Rpb24gKGFic29yYnRpb24gKyBvdXQgc2NhdHRlcmluZylcblx0XHRcdC8vIHJheWxlaWdoIGNvZWZmaWNpZW50c1xuXHRcdFx0dkJldGFSID0gdG90YWxSYXlsZWlnaCAqIHJheWxlaWdoQ29lZmZpY2llbnQ7XG5cblx0XHRcdC8vIG1pZSBjb2VmZmljaWVudHNcblx0XHRcdHZCZXRhTSA9IHRvdGFsTWllKCB0dXJiaWRpdHkgKSAqIG1pZUNvZWZmaWNpZW50O1xuXG5cdFx0fWAsXG5cblx0ZnJhZ21lbnRTaGFkZXI6IC8qIGdsc2wgKi9gXG5cdFx0dmFyeWluZyB2ZWMzIHZXb3JsZFBvc2l0aW9uO1xuXHRcdHZhcnlpbmcgdmVjMyB2U3VuRGlyZWN0aW9uO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bmZhZGU7XG5cdFx0dmFyeWluZyB2ZWMzIHZCZXRhUjtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFNO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bkU7XG5cblx0XHR1bmlmb3JtIGZsb2F0IG1pZURpcmVjdGlvbmFsRztcblx0XHR1bmlmb3JtIHZlYzMgdXA7XG5cblx0XHRjb25zdCB2ZWMzIGNhbWVyYVBvcyA9IHZlYzMoIDAuMCwgMC4wLCAwLjAgKTtcblxuXHRcdC8vIGNvbnN0YW50cyBmb3IgYXRtb3NwaGVyaWMgc2NhdHRlcmluZ1xuXHRcdGNvbnN0IGZsb2F0IHBpID0gMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1MDI4ODQxOTcxNjk7XG5cblx0XHRjb25zdCBmbG9hdCBuID0gMS4wMDAzOyAvLyByZWZyYWN0aXZlIGluZGV4IG9mIGFpclxuXHRcdGNvbnN0IGZsb2F0IE4gPSAyLjU0NUUyNTsgLy8gbnVtYmVyIG9mIG1vbGVjdWxlcyBwZXIgdW5pdCB2b2x1bWUgZm9yIGFpciBhdCAyODguMTVLIGFuZCAxMDEzbWIgKHNlYSBsZXZlbCAtNDUgY2Vsc2l1cylcblxuXHRcdC8vIG9wdGljYWwgbGVuZ3RoIGF0IHplbml0aCBmb3IgbW9sZWN1bGVzXG5cdFx0Y29uc3QgZmxvYXQgcmF5bGVpZ2haZW5pdGhMZW5ndGggPSA4LjRFMztcblx0XHRjb25zdCBmbG9hdCBtaWVaZW5pdGhMZW5ndGggPSAxLjI1RTM7XG5cdFx0Ly8gNjYgYXJjIHNlY29uZHMgLT4gZGVncmVlcywgYW5kIHRoZSBjb3NpbmUgb2YgdGhhdFxuXHRcdGNvbnN0IGZsb2F0IHN1bkFuZ3VsYXJEaWFtZXRlckNvcyA9IDAuOTk5OTU2Njc2OTQ2NDQ4NDQzNTUzNTc0NjE5OTA2OTc2NDc4OTI2ODQ4NjkyODczOTAwODU5MzI0O1xuXG5cdFx0Ly8gMy4wIC8gKCAxNi4wICogcGkgKVxuXHRcdGNvbnN0IGZsb2F0IFRIUkVFX09WRVJfU0lYVEVFTlBJID0gMC4wNTk2ODMxMDM2NTk0NjA3NTtcblx0XHQvLyAxLjAgLyAoIDQuMCAqIHBpIClcblx0XHRjb25zdCBmbG9hdCBPTkVfT1ZFUl9GT1VSUEkgPSAwLjA3OTU3NzQ3MTU0NTk0NzY3O1xuXG5cdFx0ZmxvYXQgcmF5bGVpZ2hQaGFzZSggZmxvYXQgY29zVGhldGEgKSB7XG5cdFx0XHRyZXR1cm4gVEhSRUVfT1ZFUl9TSVhURUVOUEkgKiAoIDEuMCArIHBvdyggY29zVGhldGEsIDIuMCApICk7XG5cdFx0fVxuXG5cdFx0ZmxvYXQgaGdQaGFzZSggZmxvYXQgY29zVGhldGEsIGZsb2F0IGcgKSB7XG5cdFx0XHRmbG9hdCBnMiA9IHBvdyggZywgMi4wICk7XG5cdFx0XHRmbG9hdCBpbnZlcnNlID0gMS4wIC8gcG93KCAxLjAgLSAyLjAgKiBnICogY29zVGhldGEgKyBnMiwgMS41ICk7XG5cdFx0XHRyZXR1cm4gT05FX09WRVJfRk9VUlBJICogKCAoIDEuMCAtIGcyICkgKiBpbnZlcnNlICk7XG5cdFx0fVxuXG5cdFx0dm9pZCBtYWluKCkge1xuXG5cdFx0XHR2ZWMzIGRpcmVjdGlvbiA9IG5vcm1hbGl6ZSggdldvcmxkUG9zaXRpb24gLSBjYW1lcmFQb3MgKTtcblxuXHRcdFx0Ly8gb3B0aWNhbCBsZW5ndGhcblx0XHRcdC8vIGN1dG9mZiBhbmdsZSBhdCA5MCB0byBhdm9pZCBzaW5ndWxhcml0eSBpbiBuZXh0IGZvcm11bGEuXG5cdFx0XHRmbG9hdCB6ZW5pdGhBbmdsZSA9IGFjb3MoIG1heCggMC4wLCBkb3QoIHVwLCBkaXJlY3Rpb24gKSApICk7XG5cdFx0XHRmbG9hdCBpbnZlcnNlID0gMS4wIC8gKCBjb3MoIHplbml0aEFuZ2xlICkgKyAwLjE1ICogcG93KCA5My44ODUgLSAoICggemVuaXRoQW5nbGUgKiAxODAuMCApIC8gcGkgKSwgLTEuMjUzICkgKTtcblx0XHRcdGZsb2F0IHNSID0gcmF5bGVpZ2haZW5pdGhMZW5ndGggKiBpbnZlcnNlO1xuXHRcdFx0ZmxvYXQgc00gPSBtaWVaZW5pdGhMZW5ndGggKiBpbnZlcnNlO1xuXG5cdFx0XHQvLyBjb21iaW5lZCBleHRpbmN0aW9uIGZhY3RvclxuXHRcdFx0dmVjMyBGZXggPSBleHAoIC0oIHZCZXRhUiAqIHNSICsgdkJldGFNICogc00gKSApO1xuXG5cdFx0XHQvLyBpbiBzY2F0dGVyaW5nXG5cdFx0XHRmbG9hdCBjb3NUaGV0YSA9IGRvdCggZGlyZWN0aW9uLCB2U3VuRGlyZWN0aW9uICk7XG5cblx0XHRcdGZsb2F0IHJQaGFzZSA9IHJheWxlaWdoUGhhc2UoIGNvc1RoZXRhICogMC41ICsgMC41ICk7XG5cdFx0XHR2ZWMzIGJldGFSVGhldGEgPSB2QmV0YVIgKiByUGhhc2U7XG5cblx0XHRcdGZsb2F0IG1QaGFzZSA9IGhnUGhhc2UoIGNvc1RoZXRhLCBtaWVEaXJlY3Rpb25hbEcgKTtcblx0XHRcdHZlYzMgYmV0YU1UaGV0YSA9IHZCZXRhTSAqIG1QaGFzZTtcblxuXHRcdFx0dmVjMyBMaW4gPSBwb3coIHZTdW5FICogKCAoIGJldGFSVGhldGEgKyBiZXRhTVRoZXRhICkgLyAoIHZCZXRhUiArIHZCZXRhTSApICkgKiAoIDEuMCAtIEZleCApLCB2ZWMzKCAxLjUgKSApO1xuXHRcdFx0TGluICo9IG1peCggdmVjMyggMS4wICksIHBvdyggdlN1bkUgKiAoICggYmV0YVJUaGV0YSArIGJldGFNVGhldGEgKSAvICggdkJldGFSICsgdkJldGFNICkgKSAqIEZleCwgdmVjMyggMS4wIC8gMi4wICkgKSwgY2xhbXAoIHBvdyggMS4wIC0gZG90KCB1cCwgdlN1bkRpcmVjdGlvbiApLCA1LjAgKSwgMC4wLCAxLjAgKSApO1xuXG5cdFx0XHQvLyBuaWdodHNreVxuXHRcdFx0ZmxvYXQgdGhldGEgPSBhY29zKCBkaXJlY3Rpb24ueSApOyAvLyBlbGV2YXRpb24gLS0+IHktYXhpcywgWy1waS8yLCBwaS8yXVxuXHRcdFx0ZmxvYXQgcGhpID0gYXRhbiggZGlyZWN0aW9uLnosIGRpcmVjdGlvbi54ICk7IC8vIGF6aW11dGggLS0+IHgtYXhpcyBbLXBpLzIsIHBpLzJdXG5cdFx0XHR2ZWMyIHV2ID0gdmVjMiggcGhpLCB0aGV0YSApIC8gdmVjMiggMi4wICogcGksIHBpICkgKyB2ZWMyKCAwLjUsIDAuMCApO1xuXHRcdFx0dmVjMyBMMCA9IHZlYzMoIDAuMSApICogRmV4O1xuXG5cdFx0XHQvLyBjb21wb3NpdGlvbiArIHNvbGFyIGRpc2Ncblx0XHRcdGZsb2F0IHN1bmRpc2sgPSBzbW9vdGhzdGVwKCBzdW5Bbmd1bGFyRGlhbWV0ZXJDb3MsIHN1bkFuZ3VsYXJEaWFtZXRlckNvcyArIDAuMDAwMDIsIGNvc1RoZXRhICk7XG5cdFx0XHRMMCArPSAoIHZTdW5FICogMTkwMDAuMCAqIEZleCApICogc3VuZGlzaztcblxuXHRcdFx0dmVjMyB0ZXhDb2xvciA9ICggTGluICsgTDAgKSAqIDAuMDQgKyB2ZWMzKCAwLjAsIDAuMDAwMywgMC4wMDA3NSApO1xuXG5cdFx0XHR2ZWMzIHJldENvbG9yID0gcG93KCB0ZXhDb2xvciwgdmVjMyggMS4wIC8gKCAxLjIgKyAoIDEuMiAqIHZTdW5mYWRlICkgKSApICk7XG5cblx0XHRcdGdsX0ZyYWdDb2xvciA9IHZlYzQoIHJldENvbG9yLCAxLjAgKTtcblxuXHRcdFx0I2luY2x1ZGUgPHRvbmVtYXBwaW5nX2ZyYWdtZW50PlxuXHRcdFx0I2luY2x1ZGUgPGVuY29kaW5nc19mcmFnbWVudD5cblxuXHRcdH1gXG5cbn07XG5cbmV4cG9ydCB7IFNreSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9