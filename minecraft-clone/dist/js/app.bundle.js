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
    this.playerShape = new cannon_es__WEBPACK_IMPORTED_MODULE_1__.Box(0.5, 0.5, 0.5);
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

    this.playerBody.velocity.set(
      direction.x,
      this.playerBody.velocity.y,
      direction.z
    );
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
  return canvas;
}

function cursor() {
  const cursor = document.createElement("div");
  //const HorBar = document.createElement("div");
  //const VertBar = document.createElement("div");

  cursor.className = "absolute centered cursor";
  //HorBar.className = "bar horizontal";
  //VertBar.className = "bar vertical";

  //cursor.appendChild(HorBar);
  //cursor.appendChild(VertBar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvY3NzL21haW4uY3NzP2MwOGUiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2Fzc2V0cy8gc3luYyBcXC4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9CbG9jay5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvQ2FtZXJhLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9Db250cm9scy5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvTGFuZHNjYXBlLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL1JlbmRlcmVyLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9Qb2ludGVyTG9ja0NvbnRyb2xzLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vbGlicy9saWwtZ3VpLm1vZHVsZS5taW4uanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9saWJzL3N0YXRzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL29iamVjdHMvU2t5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBtYXAgPSB7XG5cdFwiLi9pbWcvY2xvdWQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9jbG91ZC5qcGdcIixcblx0XCIuL2ltZy9jbG91ZC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL2Nsb3VkLnBuZ1wiLFxuXHRcIi4vaW1nL2Nsb3VkQS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1nL2Nsb3VkQS5qcGdcIixcblx0XCIuL2ltZy9kaXNjLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvZGlzYy5wbmdcIixcblx0XCIuL2ltZy9kaXNjZy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL2Rpc2NnLnBuZ1wiLFxuXHRcIi4vaW1nL2Zhdmljb24uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9mYXZpY29uLnN2Z1wiLFxuXHRcIi4vaW1nL25ldXJvbmEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9uZXVyb25hLmpwZ1wiLFxuXHRcIi4vaW1nL3NoaW55UC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3NoaW55UC5qcGdcIixcblx0XCIuL2ltZy9zaGlueVBCLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvc2hpbnlQQi5wbmdcIixcblx0XCIuL2ltZy9zbW9rZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3Ntb2tlLnBuZ1wiLFxuXHRcIi4vdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcblx0XCIuL3RleHR1cmUvZGlydC9jdXN0b21kaXJ0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL2RpcnQvY3VzdG9tZGlydC5wbmdcIixcblx0XCIuL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcblx0XCIuL3RleHR1cmUvZ3Jhc3MvYm90dG9tLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL2JvdHRvbS5qcGdcIixcblx0XCIuL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxuXHRcIi4vdGV4dHVyZS9ncmFzcy90b3AuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvZ3Jhc3MvdG9wLmpwZ1wiLFxuXHRcIi4vdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXG5cdFwiLi90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXNUcmFuc3BhcmVudC5wbmdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzVHJhbnNwYXJlbnQucG5nXCIsXG5cdFwiLi90ZXh0dXJlL29ha0xvZy9ib3R0b20uanBnXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvb2FrTG9nL2JvdHRvbS5qcGdcIixcblx0XCIuL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXG5cdFwiLi90ZXh0dXJlL29ha0xvZy90b3AuanBnXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3RvcC5qcGdcIixcblx0XCIuL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcblx0XCIuL3RleHR1cmUvdGV4dHVyZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvdGV4dHVyZS90ZXh0dXJlLnBuZ1wiLFxuXHRcIi4vdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCI6IFwiLi9zcmMvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyByZWN1cnNpdmUgXFxcXC4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkXCI7IiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG4vL2ltcG9ydCAqIGFzIEZTIGZyb20gJ2ZzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9jayB7XHJcbiAgY29uc3RydWN0b3IoeyBibG9ja1R5cGUsIG1hdGVyaWFsQXJyYXksIG1lc2gsIGNvdW50LCBiaW9tZXMgfSkge1xyXG4gICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBtYXRlcmlhbEFycmF5O1xyXG4gICAgdGhpcy5tZXNoID0gbWVzaDtcclxuICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgIHRoaXMuYmlvbWVzID0gYmlvbWVzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrTWF0ZXJpYWxzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xyXG5cclxuICAgIHRoaXMuZGlydE1hdCA9IFtcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvYmJsZXN0b25lTWF0ID0gW1xyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub2FrTG9nTWF0ID0gW1xyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL29ha0xvZy90b3AuanBnXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvb2FrTG9nL2JvdHRvbS5qcGdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9vYWtMb2cvc2lkZS5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9vYWtMb2cvc2lkZS5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9ha0xlYXZlc01hdCA9IFtcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL29ha0xlYXZlcy9vYWtMZWF2ZXMucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNhbmRNYXQgPSBbXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy53YXRlck1hdCA9IFtcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdyYXNzTWF0ID0gW1xyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIixcclxuICAgICAgXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9ncmFzcy90b3AuanBnXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZ3Jhc3MvYm90dG9tLmpwZ1wiLFxyXG4gICAgICBcIi9kaXN0L2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCIsXHJcbiAgICAgIFwiL2Rpc3QvYXNzZXRzL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZXh0dXJlT3BhY2l0eSgpO1xyXG4gICAgLy90aGlzLnRleHR1cmVJbWFnZXNMb2FkZXIoXCIvZGlzdC9hc3NldHMvdGV4dHVyZS9ncmFzc1wiKTtcclxuICB9XHJcbiAgdGV4dHVyZUltYWdlc0xvYWRlcihmaWxlVVJMKSB7XHJcbiAgICAvL2pvaW5pbmcgcGF0aCBvZiBkaXJlY3RvcnlcclxuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBmaWxlVVJMO1xyXG4gICAgLy9wYXNzc2luZyBkaXJlY3RvcnlQYXRoIGFuZCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgZnMucmVhZGRpcihkaXJlY3RvcnlQYXRoLCBmdW5jdGlvbiAoZXJyLCBmaWxlcykge1xyXG4gICAgICAvL2hhbmRsaW5nIGVycm9yXHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJVbmFibGUgdG8gc2NhbiBkaXJlY3Rvcnk6IFwiICsgZXJyKTtcclxuICAgICAgfVxyXG4gICAgICAvL2xpc3RpbmcgYWxsIGZpbGVzIHVzaW5nIGZvckVhY2hcclxuICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgIC8vIERvIHdoYXRldmVyIHlvdSB3YW50IHRvIGRvIHdpdGggdGhlIGZpbGVcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWxlO1xyXG4gIH1cclxuICB0ZXh0dXJlT3BhY2l0eSgpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53YXRlck1hdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaSA9PSAyIHx8IGkgPT0gMykge1xyXG4gICAgICAgIC8vIHRvcCBhbmQgYm90dG9tXHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS5vcGFjaXR5ID0gMC43O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHNpZGVzXHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS5vcGFjaXR5ID0gMC40O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHZhciBibG9ja0dvZW0gPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7XHJcbiAgICB2YXIgYmxvY2tNYXRlcmlhbHMgPSBuZXcgQmxvY2tNYXRlcmlhbHMoKTtcclxuICAgIHZhciByZW5kZXJEaXN0YW5jZSA9IDQ7XHJcbiAgICB2YXIgY2h1bmtTaXplID0gMTA7XHJcbiAgICB2YXIgZGVwdGggPSA1O1xyXG5cclxuICAgIHRoaXMuYmxvY2tHb2VtID0gYmxvY2tHb2VtO1xyXG4gICAgdGhpcy5ibG9ja01hdGVyaWFscyA9IGJsb2NrTWF0ZXJpYWxzO1xyXG4gICAgdGhpcy5yZW5kZXJEaXN0YW5jZSA9IHJlbmRlckRpc3RhbmNlO1xyXG4gICAgdGhpcy5jaHVua1NpemUgPSBjaHVua1NpemU7XHJcbiAgICB0aGlzLmRlcHRoID0gZGVwdGg7XHJcblxyXG4gICAgdGhpcy5ncmFzcyA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJncmFzc1wiLFxyXG4gICAgICBtYXRlcmlhbEFycmF5OiBibG9ja01hdGVyaWFscy5ncmFzc01hdCxcclxuICAgICAgbWVzaDogbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5ncmFzc01hdCksXHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICByYW5nZTogWzBdLFxyXG4gICAgICBiaW9tZXM6IFtcInBsYWluc1wiXSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kaXJ0ID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcImRpcnRcIixcclxuICAgICAgbWF0ZXJpYWxBcnJheTogYmxvY2tNYXRlcmlhbHMuZGlydE1hdCxcclxuICAgICAgbWVzaDogbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5kaXJ0TWF0KSxcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHJhbmdlOiBbMSwgMl0sXHJcbiAgICAgIGJpb21lczogW1wicGxhaW5zXCJdLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvYmJsZXN0b25lID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcImNvYmJsZXN0b25lXCIsXHJcbiAgICAgIG1hdGVyaWFsQXJyYXk6IGJsb2NrTWF0ZXJpYWxzLmNvYmJsZXN0b25lTWF0LFxyXG4gICAgICBtZXNoOiBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLmNvYmJsZXN0b25lTWF0KSxcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHJhbmdlOiBbMywgNF0sXHJcbiAgICAgIGJpb21lczogW1wicGxhaW5zXCIsIFwiZGVzZXJ0XCJdLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9ha0xvZyA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJvYWtMb2dcIixcclxuICAgICAgbWF0ZXJpYWxBcnJheTogYmxvY2tNYXRlcmlhbHMub2FrTG9nTWF0LFxyXG4gICAgICBtZXNoOiBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLm9ha0xvZ01hdCksXHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICByYW5nZTogW10sXHJcbiAgICAgIGJpb21lczogW1wicGxhaW5zXCJdLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9ha0xlYXZlcyA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJvYWtMZWF2ZXNcIixcclxuICAgICAgbWF0ZXJpYWxBcnJheTogYmxvY2tNYXRlcmlhbHMub2FrTGVhdmVzTWF0LFxyXG4gICAgICBtZXNoOiBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLm9ha0xlYXZlc01hdCksXHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICByYW5nZTogW10sXHJcbiAgICAgIGJpb21lczogW1wicGxhaW5zXCJdLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNhbmQgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwic2FuZFwiLFxyXG4gICAgICBtYXRlcmlhbEFycmF5OiBibG9ja01hdGVyaWFscy5zYW5kTWF0LFxyXG4gICAgICBtZXNoOiBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLnNhbmRNYXQpLFxyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgcmFuZ2U6IFswLCAxLCAyXSxcclxuICAgICAgYmlvbWVzOiBbXCJkZXNlcnRcIl0sXHJcbiAgICB9KTtcclxuICAgIHRoaXMud2F0ZXIgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwid2F0ZXJcIixcclxuICAgICAgbWF0ZXJpYWxBcnJheTogYmxvY2tNYXRlcmlhbHMud2F0ZXJNYXQsXHJcbiAgICAgIG1lc2g6IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMud2F0ZXJNYXQpLFxyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgcmFuZ2U6IFtdLFxyXG4gICAgICBiaW9tZXM6IFtcInBsYWluc1wiLCBcImRlc2VydFwiXSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmV4cG9ydCB2YXIgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gIDc1LFxyXG4gIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gIDAuMSxcclxuICAxMDAwXHJcbik7XHJcblxyXG5jYW1lcmEucG9zaXRpb24uc2V0WCgyNSk7XHJcbmNhbWVyYS5wb3NpdGlvbi5zZXRaKDc1KTtcclxuY2FtZXJhLnBvc2l0aW9uLnNldFkoMTApO1xyXG4iLCJpbXBvcnQgXCIuLi9jc3MvbWFpbi5jc3NcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IFBvaW50ZXJMb2NrQ29udHJvbHMgfSBmcm9tIFwidGhyZWUvYWRkb25zL2NvbnRyb2xzL1BvaW50ZXJMb2NrQ29udHJvbHMuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9scyB7XHJcbiAgY29uc3RydWN0b3IoeyBwbGF5ZXIgfSkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgdGhpcy5rZXlBY3Rpb25NYXAgPSB7XHJcbiAgICAgIEtleVc6IFwibW92ZUZvcndhcmRcIixcclxuICAgICAgS2V5UzogXCJtb3ZlQmFja3dhcmRcIixcclxuICAgICAgS2V5QTogXCJtb3ZlTGVmdFwiLFxyXG4gICAgICBLZXlEOiBcIm1vdmVSaWdodFwiLFxyXG4gICAgICBTcGFjZTogXCJqdW1wXCIsXHJcbiAgICAgIERpZ2l0MTogXCJ0ZXh0dXJlMVwiLFxyXG4gICAgICBEaWdpdDI6IFwidGV4dHVyZTNcIixcclxuICAgICAgRGlnaXQzOiBcInRleHR1cmU0XCIsXHJcbiAgICAgIERpZ2l0NDogXCJ0ZXh0dXJlNVwiLFxyXG4gICAgfTtcclxuICAgIHRoaXMuZnB2ID0gbmV3IFBvaW50ZXJMb2NrQ29udHJvbHMoXHJcbiAgICAgIHRoaXMucGxheWVyLmNhbWVyYSxcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZ1wiKVxyXG4gICAgKTtcclxuICAgIHRoaXMuaW5pdENvbnRyb2xzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0Q29udHJvbHMoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVLZXlEb3duKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZUtleVVwKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcclxuICAgICAgdGhpcy5mcHYubG9jaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmZwdi5hZGRFdmVudExpc3RlbmVyKFwibG9ja1wiLCAoKSA9PiB7XHJcbiAgICAgIC8vbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9ja2VkXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5mcHYuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9ja1wiLCAoKSA9PiB7XHJcbiAgICAgIC8vbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInVubG9ja2VkXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhY3Rpb25CeUtleShrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLmtleUFjdGlvbk1hcFtrZXldO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5RG93bihldmVudCkge1xyXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25CeUtleShldmVudC5jb2RlKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJrZXlEb3duIFwiICsgZXZlbnQpO1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICB0aGlzLnBsYXllci5hY3Rpb25NYXBbYWN0aW9uXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYWN0aW9ucyBrZXlEb3duXCIsIHRoaXMucGxheWVyLmFjdGlvbk1hcCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlVcChldmVudCkge1xyXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25CeUtleShldmVudC5jb2RlKTtcclxuICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICB0aGlzLnBsYXllci5hY3Rpb25NYXBbYWN0aW9uXSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImFjdGlvbnMgXCIsIHRoaXMucGxheWVyLmFjdGlvbk1hcCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgKiBhcyBCTEsgZnJvbSBcIi4vQmxvY2suanNcIjtcclxuaW1wb3J0ICogYXMgY20gZnJvbSBcIi4vQ2FtZXJhLmpzXCI7XHJcbmltcG9ydCAqIGFzIGN0IGZyb20gXCIuL0NvbnRyb2xzLmpzXCI7XHJcbmltcG9ydCAqIGFzIENBTk5PTiBmcm9tIFwiY2Fubm9uLWVzXCI7XHJcbmltcG9ydCAqIGFzIG1uIGZyb20gXCIuL21haW5cIjtcclxuXHJcbmNvbnN0IGNhbWVyYSA9IGNtLmNhbWVyYTtcclxuXHJcbnZhciBjaHVua1NpemUgPSAxMDtcclxuY29uc3QgbGFuZHNjYXBlID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQmxvY2tzKHNjZW5lKSB7XHJcbiAgdmFyIGJsb2NrcyA9IG5ldyBCTEsuQmxvY2tzKCk7XHJcbiAgdmFyIGN1YmUgPSBibG9ja3MuZ3Jhc3MubWVzaDtcclxuXHJcbiAgLy9jb25zdCBbeCx5LHpdPSBBcnJheSgzKS5maWxsKCkubGFuZHNjYXBlKCgpPT5USFJFRS5NYXRoVXRpbHMucmFuZEZsb2F0U3ByZWFkKCAxMDAgKSApO1xyXG5cclxuICBjdWJlLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcclxuICBjb25zb2xlLmxvZyhjdWJlKTtcclxuICBzY2VuZS5hZGQoY3ViZSk7XHJcbn1cclxuZnVuY3Rpb24gTGFuZHNjYXBlU2V0dXAoc2NlbmUpIHtcclxuICBmb3IgKHZhciB4SW5kZXggPSAwOyB4SW5kZXggPCAxMDsgeEluZGV4KyspIHtcclxuICAgIGZvciAodmFyIHpJbmRleCA9IDA7IHpJbmRleCA8IDEwOyB6SW5kZXgrKykge1xyXG4gICAgICB2YXIgYmxvY2tzID0gbmV3IEJMSy5CbG9ja3MoKTtcclxuICAgICAgdmFyIGJsb2NrID0gYmxvY2tzLmdyYXNzLm1lc2g7XHJcbiAgICAgIHZhciB6ID0gekluZGV4ICogNTtcclxuICAgICAgdmFyIHggPSB4SW5kZXggKiA1O1xyXG4gICAgICB2YXIgeSA9IDA7XHJcbiAgICAgIGJsb2NrLnBvc2l0aW9uLnNldCh4LCB5LCB6KTtcclxuICAgICAgc2NlbmUuYWRkKGJsb2NrKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZGlwbGF5QmxvY2tzQXJvdW5kQ2FtZXJhKCkge1xyXG4gIGNvbnNvbGUubG9nKFwiaW4gUGxhY2VCbG9ja3NBcm91bmRDYW1lcmFcIik7XHJcbiAgLy9jb25zb2xlLmxvZygnY2FtZXJhLnBvc2l0aW9uICcscG9zaXRpb24pXHJcbiAgY29uc3QgZGlwbGF5YWJsZUxhbmRzY2FwZSA9IEFycmF5KCk7XHJcbiAgdmFyIGNhbWVyYUJsb2NrID0gZmluZEJsb2NrVW5kZXJDYW0oKTtcclxuICB2YXIgZmlyc3RCbG9ja1Bvc2l0aW9uID0gZmluZEZpcnN0QmxvY2tJbkRpc3BsYXkoY2FtZXJhQmxvY2spO1xyXG5cclxuICAvL2NvbnNvbGUubG9nKCdjYW1lcmFCbG9jayAnLGNhbWVyYUJsb2NrKVxyXG4gIC8vY29uc29sZS5sb2coJ2ZpcnN0QmxvY2tQb3NpdGlvbiAnLGZpcnN0QmxvY2tQb3NpdGlvbilcclxuXHJcbiAgZm9yICh2YXIgeEluZGV4ID0gMDsgeEluZGV4IDwgMTA7IHhJbmRleCsrKSB7XHJcbiAgICBmb3IgKHZhciB6SW5kZXggPSAwOyB6SW5kZXggPCAxNTsgekluZGV4KyspIHtcclxuICAgICAgdmFyIHogPSBmaXJzdEJsb2NrUG9zaXRpb24ueiArIHpJbmRleDtcclxuICAgICAgdmFyIHggPSBmaXJzdEJsb2NrUG9zaXRpb24ueCArIHhJbmRleDtcclxuICAgICAgLy92YXIgeSA9IDBcclxuXHJcbiAgICAgIC8vbGFuZHNjYXBlW3hdW3pdLnZpc2libGUgPSB0cnVlXHJcbiAgICAgIGRpcGxheWFibGVMYW5kc2NhcGUucHVzaCh4LCB6KTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGRpcGxheWFibGVMYW5kc2NhcGU7XHJcbn1cclxuZnVuY3Rpb24gZmluZEJsb2NrVW5kZXJDYW0oKSB7XHJcbiAgLy9jb25zb2xlLmxvZygnaW4gY2VudGVyTGFuZHNjYXBlJylcclxuICBjb25zdCBwb3NpdGlvbiA9IGNhbWVyYS5wb3NpdGlvbjtcclxuXHJcbiAgdmFyIHBvc1ggPSBwYXJzZUludChwb3NpdGlvbi54IC8gNSk7XHJcbiAgdmFyIHBvc1ogPSBwYXJzZUludChwb3NpdGlvbi56IC8gNSk7XHJcblxyXG4gIHZhciBwb3NCbG9jayA9IHsgeDogcG9zWCwgejogcG9zWiB9O1xyXG4gIHJldHVybiBwb3NCbG9jaztcclxufVxyXG5mdW5jdGlvbiBmaW5kRmlyc3RCbG9ja0luRGlzcGxheShwb3NCbG9ja0NhbSkge1xyXG4gIC8vY29uc29sZS5sb2coJ2luIGNlbnRlckxhbmRzY2FwZScpXHJcblxyXG4gIHZhciBwb3NYID0gcG9zQmxvY2tDYW0ueCAtIDU7XHJcbiAgdmFyIHBvc1ogPSBwb3NCbG9ja0NhbS56IC0gMTU7XHJcblxyXG4gIHZhciBwb3NCbG9jayA9IHsgeDogcG9zWCwgejogcG9zWiB9O1xyXG4gIHJldHVybiBwb3NCbG9jaztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJsb2Nrc1RvU2NlbmUoYWRkTGlzdCkge1xyXG4gIGFkZExpc3QuZm9yRWFjaCgoYmxvY2spID0+IHtcclxuICAgIGJsb2NrLnZpc2libGUgPSB0cnVlO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmxvY2tzRnJvbVNjZW5lKCkge1xyXG4gIGxhbmRzY2FwZS5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xyXG4gICAgcG9zaXRpb24uZm9yRWFjaCgoYmxvY2spID0+IHtcclxuICAgICAgYmxvY2sudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlTGFuZHNjYXBlcyhkaXBsYXlhYmxlTGFuZHNjYXBlKSB7XHJcbiAgdmFyIGJsb2NrVG9LZWVwID0gQXJyYXkoKTtcclxuICB2YXIgYmxvY2tUb0RlbGV0ZSA9IEFycmF5KCk7XHJcbiAgdmFyIGJsb2NrVG9BZGQgPSBBcnJheSgpO1xyXG5cclxuICBibG9ja1RvS2VlcCA9IGdldEludGVyc2VjdGlvbihsYW5kc2NhcGUsIGRpcGxheWFibGVMYW5kc2NhcGUpO1xyXG4gIGJsb2NrVG9EZWxldGUgPSBnZXRFeGNsdXNpb25BKGxhbmRzY2FwZSwgYmxvY2tUb0tlZXApO1xyXG4gIGJsb2NrVG9BZGQgPSBnZXRVbmlvbihkaXBsYXlhYmxlTGFuZHNjYXBlLCBibG9ja1RvS2VlcCk7XHJcbiAgcmV0dXJuIHsgcm1MaXN0OiBibG9ja1RvRGVsZXRlLCBhZGRMaXN0OiBibG9ja1RvQWRkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYW5kc2NhcGUoc2NlbmUpIHtcclxuICBjb25zb2xlLmxvZyhcImluIGxhbmRzY2FwZVwiKTtcclxuICBmb3IgKHZhciB4SW5kZXggPSAwOyB4SW5kZXggPCAxMDsgeEluZGV4KyspIHtcclxuICAgIGxhbmRzY2FwZVt4SW5kZXhdID0gQXJyYXkoKTtcclxuICAgIGZvciAodmFyIHpJbmRleCA9IDA7IHpJbmRleCA8IDEwOyB6SW5kZXgrKykge1xyXG4gICAgICBjb25zdCBibG9ja3MgPSBuZXcgQkxLLkJsb2NrcygpO1xyXG4gICAgICBjb25zdCBibG9jayA9IGJsb2Nrcy5ncmFzcy5tZXNoO1xyXG4gICAgICBjb25zdCB6ID0gekluZGV4O1xyXG4gICAgICBjb25zdCB4ID0geEluZGV4O1xyXG4gICAgICBjb25zdCB5ID0gMDtcclxuICAgICAgYmxvY2sucG9zaXRpb24uc2V0KHgsIHksIHopO1xyXG4gICAgICBjb25zdCBibG9ja1NoYXBlID0gbmV3IENBTk5PTi5Cb3gobmV3IENBTk5PTi5WZWMzKDEsIDEsIDEpKTtcclxuICAgICAgY29uc3QgYmxvY2tCb2R5ID0gbmV3IENBTk5PTi5Cb2R5KHsgbWFzczogMCB9KTtcclxuICAgICAgYmxvY2tCb2R5LnBvc2l0aW9uLnNldCh4LCB5LCB6KTtcclxuICAgICAgbW4ubWVzaGVzLnB1c2goYmxvY2spO1xyXG4gICAgICBibG9ja0JvZHkuYWRkU2hhcGUoYmxvY2tTaGFwZSk7XHJcbiAgICAgIG1uLmJvZGllcy5wdXNoKGJsb2NrQm9keSk7XHJcbiAgICAgIG1uLndvcmxkLmFkZEJvZHkoYmxvY2tCb2R5KTtcclxuICAgICAgc2NlbmUuYWRkKGJsb2NrKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYW5kc2NhcGUoKSB7XHJcbiAgLy9jb25zb2xlLmxvZygnaW4gdXBkYXRlTGFuZHNjYXBlJylcclxuICByZW1vdmVCbG9ja3NGcm9tU2NlbmUoKTtcclxuICBkaXBsYXlCbG9ja3NBcm91bmRDYW1lcmEoKTtcclxuICAvL3ZhciBwcmludGFibGVMYW5kc2NhcGUgPSBkaXBsYXlCbG9ja3NBcm91bmRDYW1lcmEoc2NlbmUpXHJcbiAgLy92YXIgYmxvY2tzID0gY29tcGFyZUxhbmRzY2FwZXMocHJpbnRhYmxlTGFuZHNjYXBlKVxyXG4gIC8vcmVtb3ZlQmxvY2tzRnJvbVNjZW5lKHNjZW5lLCBibG9ja3Mucm1MaXN0KVxyXG4gIC8vYWRkQmxvY2tzVG9TY2VuZShzY2VuZSwgYmxvY2tzLmFkZExpc3QpXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCAqIGFzIENBTk5PTiBmcm9tIFwiY2Fubm9uLWVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICAvL3ZhciBtb3ZlQmFja3dhcmQsIG1vdmVGb3J3YXJkLCBtb3ZlUmlnaHQsIG1vdmVMZWZ0LCBqdW1wID0gdXNlS2V5Ym9hcmQoKVxyXG5cclxuICBwbHJHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCk7XHJcbiAgcGxyTWF0ID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCk7XHJcbiAgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMucGxyR2VvbSwgdGhpcy5wbHJNYXQpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7IGNhbWVyYSwgY29udHJvbHMsIG1lc2ggfSkge1xyXG4gICAgdGhpcy5hY3Rpb25NYXAgPSB7XHJcbiAgICAgIG1vdmVGb3J3YXJkOiBmYWxzZSxcclxuICAgICAgbW92ZUJhY2t3YXJkOiBmYWxzZSxcclxuICAgICAgbW92ZUxlZnQ6IGZhbHNlLFxyXG4gICAgICBtb3ZlUmlnaHQ6IGZhbHNlLFxyXG4gICAgICBqdW1wOiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTE6IGZhbHNlLFxyXG4gICAgICB0ZXh0dXJlMzogZmFsc2UsXHJcbiAgICAgIHRleHR1cmU0OiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTU6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgIHRoaXMuY29udHJvbHMgPSBjb250cm9scztcclxuXHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0aGlzLnBsckdlb20sIHRoaXMucGxyTWF0KTtcclxuICAgIHRoaXMubWFzcyA9IDE7XHJcbiAgICB0aGlzLm1vdmVtZW50U3BlZWQgPSAyLjU7XHJcbiAgICB0aGlzLmp1bXBGb3JjZSA9IDM7XHJcbiAgICB0aGlzLnBsYXllclNoYXBlID0gbmV3IENBTk5PTi5Cb3goMC41LCAwLjUsIDAuNSk7XHJcbiAgICB0aGlzLnBsYXllckJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiB0aGlzLm1hc3MgfSk7XHJcbiAgICB0aGlzLnBsYXllckJvZHkuYWRkU2hhcGUodGhpcy5wbGF5ZXJTaGFwZSk7XHJcblxyXG4gICAgLy90aGlzLnVwZGF0ZVBsYXllcigpO1xyXG4gIH1cclxuICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ3BsYXllciBwb3MgdXBkYXRlID0nLCB0aGlzLm1lc2gucG9zaXRpb24pO1xyXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSh0aGlzLm1lc2gucG9zaXRpb24pO1xyXG4gIH1cclxuICB1cGRhdGVQbGF5ZXIoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLnVzZUFjdGlvbigpO1xyXG4gIH1cclxuICB1c2VBY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5hY3Rpb25NYXBbXCJqdW1wXCJdICYmIE1hdGguYWJzKHRoaXMucGxheWVyQm9keS52ZWxvY2l0eS55KSA8IDAuMDUpIHtcclxuICAgICAgdGhpcy5wbGF5ZXJCb2R5LnZlbG9jaXR5LnNldCgwLCB0aGlzLmp1bXBGb3JjZSwgMCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgIGNvbnN0IGZyb250VmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgICh0aGlzLmFjdGlvbk1hcFtcIm1vdmVCYWNrd2FyZFwiXSA/IDEgOiAwKSAtXHJcbiAgICAgICAgKHRoaXMuYWN0aW9uTWFwW1wibW92ZUZvcndhcmRcIl0gPyAxIDogMClcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2lkZVZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICAodGhpcy5hY3Rpb25NYXBbXCJtb3ZlTGVmdFwiXSA/IDEgOiAwKSAtXHJcbiAgICAgICAgKHRoaXMuYWN0aW9uTWFwW1wibW92ZVJpZ2h0XCJdID8gMSA6IDApLFxyXG4gICAgICAwLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG5cclxuICAgIGRpcmVjdGlvbi5zdWJWZWN0b3JzKGZyb250VmVjdG9yLCBzaWRlVmVjdG9yKTtcclxuICAgIGRpcmVjdGlvbi5ub3JtYWxpemUoKTtcclxuICAgIGRpcmVjdGlvbi5tdWx0aXBseVNjYWxhcih0aGlzLm1vdmVtZW50U3BlZWQpO1xyXG4gICAgZGlyZWN0aW9uLmFwcGx5RXVsZXIodGhpcy5jYW1lcmEucm90YXRpb24pO1xyXG5cclxuICAgIHRoaXMucGxheWVyQm9keS52ZWxvY2l0eS5zZXQoXHJcbiAgICAgIGRpcmVjdGlvbi54LFxyXG4gICAgICB0aGlzLnBsYXllckJvZHkudmVsb2NpdHkueSxcclxuICAgICAgZGlyZWN0aW9uLnpcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgIGNhbnZhczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnJyksIHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIsIGFudGlhbGlhczogdHJ1ZSBcclxufSk7XHJcblxyXG5yZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZztcclxucmVuZGVyZXIudG9uZU1hcHBpbmcgPSBUSFJFRS5BQ0VTRmlsbWljVG9uZU1hcHBpbmc7XHJcbnJlbmRlcmVyLnRvbmVNYXBwaW5nRXhwb3N1cmUgPSAwLjU7XHJcbnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XHJcbnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgKiBhcyBjbSBmcm9tIFwiLi9DYW1lcmEuanNcIjtcclxuaW1wb3J0ICogYXMgY3QgZnJvbSBcIi4vQ29udHJvbHMuanNcIjtcclxuaW1wb3J0ICogYXMgcmQgZnJvbSBcIi4vUmVuZGVyZXIuanNcIjtcclxuaW1wb3J0ICogYXMgbGQgZnJvbSBcIi4vTGFuZHNjYXBlLmpzXCI7XHJcbmltcG9ydCB7IEdVSSB9IGZyb20gXCJ0aHJlZS9hZGRvbnMvbGlicy9saWwtZ3VpLm1vZHVsZS5taW4uanNcIjtcclxuaW1wb3J0IHsgU2t5IH0gZnJvbSBcInRocmVlL2FkZG9ucy9vYmplY3RzL1NreS5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbmNvbnN0IGNhbWVyYSA9IGNtLmNhbWVyYTtcclxuY29uc3QgcmVuZGVyZXIgPSByZC5yZW5kZXJlcjtcclxuXHJcbmxldCBza3ksIHN1bjtcclxuXHJcbmluaXQoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTa3koKSB7XHJcbiAgLy8gQWRkIFNreVxyXG4gIHNreSA9IG5ldyBTa3koKTtcclxuICBza3kuc2NhbGUuc2V0U2NhbGFyKDQ1MDAwMCk7XHJcbiAgc2NlbmUuYWRkKHNreSk7XHJcblxyXG4gIHN1biA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gIC8vLyBHVUlcclxuXHJcbiAgY29uc3QgZWZmZWN0Q29udHJvbGxlciA9IHtcclxuICAgIHR1cmJpZGl0eTogMTAsXHJcbiAgICByYXlsZWlnaDogMyxcclxuICAgIG1pZUNvZWZmaWNpZW50OiAwLjAwNSxcclxuICAgIG1pZURpcmVjdGlvbmFsRzogMC43LFxyXG4gICAgZWxldmF0aW9uOiAyLFxyXG4gICAgYXppbXV0aDogMTgwLFxyXG4gICAgZXhwb3N1cmU6IHJlbmRlcmVyLnRvbmVNYXBwaW5nRXhwb3N1cmUsXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ3VpQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHVuaWZvcm1zID0gc2t5Lm1hdGVyaWFsLnVuaWZvcm1zO1xyXG4gICAgdW5pZm9ybXNbXCJ0dXJiaWRpdHlcIl0udmFsdWUgPSBlZmZlY3RDb250cm9sbGVyLnR1cmJpZGl0eTtcclxuICAgIHVuaWZvcm1zW1wicmF5bGVpZ2hcIl0udmFsdWUgPSBlZmZlY3RDb250cm9sbGVyLnJheWxlaWdoO1xyXG4gICAgdW5pZm9ybXNbXCJtaWVDb2VmZmljaWVudFwiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIubWllQ29lZmZpY2llbnQ7XHJcbiAgICB1bmlmb3Jtc1tcIm1pZURpcmVjdGlvbmFsR1wiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIubWllRGlyZWN0aW9uYWxHO1xyXG5cclxuICAgIGNvbnN0IHBoaSA9IFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCg5MCAtIGVmZmVjdENvbnRyb2xsZXIuZWxldmF0aW9uKTtcclxuICAgIGNvbnN0IHRoZXRhID0gVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKGVmZmVjdENvbnRyb2xsZXIuYXppbXV0aCk7XHJcblxyXG4gICAgc3VuLnNldEZyb21TcGhlcmljYWxDb29yZHMoMSwgcGhpLCB0aGV0YSk7XHJcblxyXG4gICAgdW5pZm9ybXNbXCJzdW5Qb3NpdGlvblwiXS52YWx1ZS5jb3B5KHN1bik7XHJcblxyXG4gICAgcmVuZGVyZXIudG9uZU1hcHBpbmdFeHBvc3VyZSA9IGVmZmVjdENvbnRyb2xsZXIuZXhwb3N1cmU7XHJcbiAgICAvL3JlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGd1aSA9IG5ldyBHVUkoKTtcclxuXHJcbiAgZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcInR1cmJpZGl0eVwiLCAwLjAsIDIwLjAsIDAuMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcInJheWxlaWdoXCIsIDAuMCwgNCwgMC4wMDEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIGd1aVxyXG4gICAgLmFkZChlZmZlY3RDb250cm9sbGVyLCBcIm1pZUNvZWZmaWNpZW50XCIsIDAuMCwgMC4xLCAwLjAwMSlcclxuICAgIC5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICBndWlcclxuICAgIC5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJtaWVEaXJlY3Rpb25hbEdcIiwgMC4wLCAxLCAwLjAwMSlcclxuICAgIC5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwiZWxldmF0aW9uXCIsIDAsIDkwLCAwLjEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJhemltdXRoXCIsIC0xODAsIDE4MCwgMC4xKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwiZXhwb3N1cmVcIiwgMCwgMSwgMC4wMDAxKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuXHJcbiAgZ3VpQ2hhbmdlZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGNvbnN0IGhlbHBlciA9IG5ldyBUSFJFRS5HcmlkSGVscGVyKDEwMDAwLCAyLCAweGZmZmZmZiwgMHhmZmZmZmYpO1xyXG4gIHNjZW5lLmFkZChoZWxwZXIpO1xyXG5cclxuICBpbml0U2t5KCk7XHJcbn1cclxuXHJcbi8vc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcigweDAwZmZmZik7XHJcbi8vc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZygweDAwZmZmZiwgMiwgODApO1xyXG5cclxuY29uc3QgcG9pbnRMaWdodF8xID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYpO1xyXG5wb2ludExpZ2h0XzEucG9zaXRpb24uc2V0KDUsIDUsIDApO1xyXG5jb25zdCBwb2ludExpZ2h0XzIgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZik7XHJcbnBvaW50TGlnaHRfMi5wb3NpdGlvbi5zZXQoLTUsIDUsIDApO1xyXG5jb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjE1KTtcclxuXHJcbnNjZW5lLmFkZChwb2ludExpZ2h0XzEsIHBvaW50TGlnaHRfMiwgYW1iaWVudExpZ2h0KTtcclxuXHJcbnJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgXCIuLi9jc3MvbWFpbi5jc3NcIjtcclxuXHJcbnJlcXVpcmUuY29udGV4dChcIi4uL2Fzc2V0c1wiLCB0cnVlLCAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvKTtcclxuXHJcbmZ1bmN0aW9uIGNhbnZhcygpIHtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gIGNhbnZhcy5pZCA9IFwiYmdcIjtcclxuICByZXR1cm4gY2FudmFzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjdXJzb3IoKSB7XHJcbiAgY29uc3QgY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAvL2NvbnN0IEhvckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgLy9jb25zdCBWZXJ0QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgY3Vyc29yLmNsYXNzTmFtZSA9IFwiYWJzb2x1dGUgY2VudGVyZWQgY3Vyc29yXCI7XHJcbiAgLy9Ib3JCYXIuY2xhc3NOYW1lID0gXCJiYXIgaG9yaXpvbnRhbFwiO1xyXG4gIC8vVmVydEJhci5jbGFzc05hbWUgPSBcImJhciB2ZXJ0aWNhbFwiO1xyXG5cclxuICAvL2N1cnNvci5hcHBlbmRDaGlsZChIb3JCYXIpO1xyXG4gIC8vY3Vyc29yLmFwcGVuZENoaWxkKFZlcnRCYXIpO1xyXG5cclxuICByZXR1cm4gY3Vyc29yO1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcygpKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjdXJzb3IoKSk7XHJcbiIsImltcG9ydCBcIi4uL2Nzcy9tYWluLmNzc1wiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgKiBhcyBzYyBmcm9tIFwiLi9TY2VuZS5qc1wiO1xuaW1wb3J0ICogYXMgY20gZnJvbSBcIi4vQ2FtZXJhLmpzXCI7XG5pbXBvcnQgKiBhcyBjdCBmcm9tIFwiLi9Db250cm9scy5qc1wiO1xuaW1wb3J0ICogYXMgcmQgZnJvbSBcIi4vUmVuZGVyZXIuanNcIjtcbmltcG9ydCAqIGFzIGxkIGZyb20gXCIuL0xhbmRzY2FwZS5qc1wiO1xuaW1wb3J0ICogYXMgQkxLIGZyb20gXCIuL0Jsb2NrLmpzXCI7XG5pbXBvcnQgKiBhcyBQTFIgZnJvbSBcIi4vUGxheWVyLmpzXCI7XG5pbXBvcnQgKiBhcyBDQU5OT04gZnJvbSBcImNhbm5vbi1lc1wiO1xuXG5pbXBvcnQgU3RhdHMgZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9saWJzL3N0YXRzLm1vZHVsZVwiO1xuXG4vLyBUaHJlZSB2YXJpYWJsZXNcbmxldCBzY2VuZSA9IHNjLnNjZW5lO1xubGV0IGNhbWVyYSA9IGNtLmNhbWVyYTtcbmxldCByZW5kZXJlciA9IHJkLnJlbmRlcmVyO1xuY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcbmxldCBzdGF0cztcblxuLy8gTWluZWNyYWZ0IHZhcmlhYmxlc1xubGV0IGJsb2NrcztcbmxldCBwbGF5ZXI7XG5sZXQgY29udHJvbHM7XG5cbi8vIGNhbm5vbi5qcyB2YXJpYWJsZXNcbmV4cG9ydCBsZXQgd29ybGQ7XG5cbi8vIFRvIGJlIHN5bmNlZFxuZXhwb3J0IGNvbnN0IG1lc2hlcyA9IFtdO1xuZXhwb3J0IGNvbnN0IGJvZGllcyA9IFtdO1xuXG5pbml0VGhyZWUoKTtcbmluaXRDYW5ub24oKTtcbmluaXRNaW5lY3JhZnQoKTtcbnJlbmRlckluZm8oKTtcbkdhbWVMb29wKCk7XG5cbmZ1bmN0aW9uIGluaXRUaHJlZSgpIHtcbiAgc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgc3RhdHMuc2hvd1BhbmVsKDApOyAvLyAwOiBmcHMsIDE6IG1zLCAyOiBtYiwgMys6IGN1c3RvbVxuICAvL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tKTtcbn1cblxuZnVuY3Rpb24gaW5pdENhbm5vbigpIHtcbiAgLy8gU2V0dXAgd29ybGRcbiAgd29ybGQgPSBuZXcgQ0FOTk9OLldvcmxkKCk7XG4gIHdvcmxkLmdyYXZpdHkuc2V0KDAsIC05LjgxLCAwKTtcblxuICAvLyBGbG9vclxuICAvKmNvbnN0IGZsb29yU2hhcGUgPSBuZXcgQ0FOTk9OLlBsYW5lKCk7XG4gIGNvbnN0IGZsb29yQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IDAgfSk7XG4gIGZsb29yQm9keS5hZGRTaGFwZShmbG9vclNoYXBlKTtcbiAgd29ybGQuYWRkQm9keShmbG9vckJvZHkpOyovXG59XG5cbmZ1bmN0aW9uIGluaXRNaW5lY3JhZnQoKSB7XG4gIGxkLmNyZWF0ZUxhbmRzY2FwZShzY2VuZSk7XG5cbiAgYmxvY2tzID0gbmV3IEJMSy5CbG9ja3MoKTtcbiAgcGxheWVyID0gbmV3IFBMUi5QbGF5ZXIoeyBjYW1lcmE6IGNhbWVyYSB9KTtcbiAgY29udHJvbHMgPSBuZXcgY3QuQ29udHJvbHMoeyBwbGF5ZXI6IHBsYXllciB9KTtcbiAgcGxheWVyLnBsYXllckJvZHkucG9zaXRpb24uc2V0KDYsIDgsIDYpO1xuICBib2RpZXMucHVzaChwbGF5ZXIucGxheWVyQm9keSk7XG4gIHdvcmxkLmFkZEJvZHkocGxheWVyLnBsYXllckJvZHkpO1xuICBtZXNoZXMucHVzaChwbGF5ZXIubWVzaCk7XG4gIHNjZW5lLmFkZChwbGF5ZXIubWVzaCk7XG59XG5mdW5jdGlvbiByZW5kZXJJbmZvKCkge1xuICBjb25zb2xlLmxvZyhcIlNjZW5lIHBvbHljb3VudDpcIiwgcmVuZGVyZXIuaW5mby5yZW5kZXIudHJpYW5nbGVzKTtcbiAgY29uc29sZS5sb2coXCJBY3RpdmUgRHJhd2NhbGxzOlwiLCByZW5kZXJlci5pbmZvLnJlbmRlci5jYWxscyk7XG4gIGNvbnNvbGUubG9nKFwiVGV4dHVyZXMgaW4gTWVtb3J5XCIsIHJlbmRlcmVyLmluZm8ubWVtb3J5LnRleHR1cmVzKTtcbiAgY29uc29sZS5sb2coXCJHZW9tZXRyaWVzIGluIE1lbW9yeVwiLCByZW5kZXJlci5pbmZvLm1lbW9yeS5nZW9tZXRyaWVzKTtcbn1cblxuLy8gU3luYyB0aGUgdGhyZWUuanMgbWVzaGVzIHdpdGggdGhlIGJvZGllc1xuZnVuY3Rpb24gc3luY2hyb25pc2VkQm9kaWVzTWVzaGVzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSAhPT0gbWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbWVzaGVzW2ldLnBvc2l0aW9uLmNvcHkoYm9kaWVzW2ldLnBvc2l0aW9uKTtcbiAgICBtZXNoZXNbaV0ucXVhdGVybmlvbi5jb3B5KGJvZGllc1tpXS5xdWF0ZXJuaW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBHYW1lTG9vcCgpIHtcbiAgc3RhdHMuYmVnaW4oKTtcbiAgY29uc3QgZGVsdGFUaW1lID0gY2xvY2suZ2V0RGVsdGEoKTtcblxuICAvL3VwZGF0ZSBnYW1lXG4gIHBsYXllci51cGRhdGVQbGF5ZXIoKTtcblxuICAvLyBTdGVwIHRoZSBwaHlzaWNzIHdvcmxkXG4gIHdvcmxkLmZpeGVkU3RlcCgpO1xuICBzeW5jaHJvbmlzZWRCb2RpZXNNZXNoZXMoKTtcblxuICAvLyBSZW5kZXIgdGhyZWUuanNcbiAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuXG4gIHN0YXRzLnVwZGF0ZSgpO1xuICBzdGF0cy5lbmQoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKEdhbWVMb29wKTtcbn1cbiIsImltcG9ydCB7XG5cdEV1bGVyLFxuXHRFdmVudERpc3BhdGNoZXIsXG5cdFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG5jb25zdCBfZXVsZXIgPSBuZXcgRXVsZXIoIDAsIDAsIDAsICdZWFonICk7XG5jb25zdCBfdmVjdG9yID0gbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2NoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuY29uc3QgX2xvY2tFdmVudCA9IHsgdHlwZTogJ2xvY2snIH07XG5jb25zdCBfdW5sb2NrRXZlbnQgPSB7IHR5cGU6ICd1bmxvY2snIH07XG5cbmNvbnN0IF9QSV8yID0gTWF0aC5QSSAvIDI7XG5cbmNsYXNzIFBvaW50ZXJMb2NrQ29udHJvbHMgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBjYW1lcmEsIGRvbUVsZW1lbnQgKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblx0XHR0aGlzLmlzTG9ja2VkID0gZmFsc2U7XG5cblx0XHQvLyBTZXQgdG8gY29uc3RyYWluIHRoZSBwaXRjaCBvZiB0aGUgY2FtZXJhXG5cdFx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnNcblx0XHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdFx0dGhpcy5wb2ludGVyU3BlZWQgPSAxLjA7XG5cblx0XHRjb25zdCBzY29wZSA9IHRoaXM7XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuaXNMb2NrZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRjb25zdCBtb3ZlbWVudFggPSBldmVudC5tb3ZlbWVudFggfHwgZXZlbnQubW96TW92ZW1lbnRYIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WCB8fCAwO1xuXHRcdFx0Y29uc3QgbW92ZW1lbnRZID0gZXZlbnQubW92ZW1lbnRZIHx8IGV2ZW50Lm1vek1vdmVtZW50WSB8fCBldmVudC53ZWJraXRNb3ZlbWVudFkgfHwgMDtcblxuXHRcdFx0X2V1bGVyLnNldEZyb21RdWF0ZXJuaW9uKCBjYW1lcmEucXVhdGVybmlvbiApO1xuXG5cdFx0XHRfZXVsZXIueSAtPSBtb3ZlbWVudFggKiAwLjAwMiAqIHNjb3BlLnBvaW50ZXJTcGVlZDtcblx0XHRcdF9ldWxlci54IC09IG1vdmVtZW50WSAqIDAuMDAyICogc2NvcGUucG9pbnRlclNwZWVkO1xuXG5cdFx0XHRfZXVsZXIueCA9IE1hdGgubWF4KCBfUElfMiAtIHNjb3BlLm1heFBvbGFyQW5nbGUsIE1hdGgubWluKCBfUElfMiAtIHNjb3BlLm1pblBvbGFyQW5nbGUsIF9ldWxlci54ICkgKTtcblxuXHRcdFx0Y2FtZXJhLnF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKCBfZXVsZXIgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJsb2NrQ2hhbmdlKCkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgPT09IHNjb3BlLmRvbUVsZW1lbnQgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2xvY2tFdmVudCApO1xuXG5cdFx0XHRcdHNjb3BlLmlzTG9ja2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfdW5sb2NrRXZlbnQgKTtcblxuXHRcdFx0XHRzY29wZS5pc0xvY2tlZCA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJsb2NrRXJyb3IoKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5Qb2ludGVyTG9ja0NvbnRyb2xzOiBVbmFibGUgdG8gdXNlIFBvaW50ZXIgTG9jayBBUEknICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tjaGFuZ2UnLCBvblBvaW50ZXJsb2NrQ2hhbmdlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrZXJyb3InLCBvblBvaW50ZXJsb2NrRXJyb3IgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tjaGFuZ2UnLCBvblBvaW50ZXJsb2NrQ2hhbmdlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrZXJyb3InLCBvblBvaW50ZXJsb2NrRXJyb3IgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHRoaXMuZGlzY29ubmVjdCgpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0T2JqZWN0ID0gZnVuY3Rpb24gKCkgeyAvLyByZXRhaW5pbmcgdGhpcyBtZXRob2QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRcdFx0cmV0dXJuIGNhbWVyYTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldERpcmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoIDAsIDAsIC0gMSApO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdHJldHVybiB2LmNvcHkoIGRpcmVjdGlvbiApLmFwcGx5UXVhdGVybmlvbiggY2FtZXJhLnF1YXRlcm5pb24gKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHRoaXMubW92ZUZvcndhcmQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG5cdFx0XHQvLyBtb3ZlIGZvcndhcmQgcGFyYWxsZWwgdG8gdGhlIHh6LXBsYW5lXG5cdFx0XHQvLyBhc3N1bWVzIGNhbWVyYS51cCBpcyB5LXVwXG5cblx0XHRcdF92ZWN0b3Iuc2V0RnJvbU1hdHJpeENvbHVtbiggY2FtZXJhLm1hdHJpeCwgMCApO1xuXG5cdFx0XHRfdmVjdG9yLmNyb3NzVmVjdG9ycyggY2FtZXJhLnVwLCBfdmVjdG9yICk7XG5cblx0XHRcdGNhbWVyYS5wb3NpdGlvbi5hZGRTY2FsZWRWZWN0b3IoIF92ZWN0b3IsIGRpc3RhbmNlICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5tb3ZlUmlnaHQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG5cdFx0XHRfdmVjdG9yLnNldEZyb21NYXRyaXhDb2x1bW4oIGNhbWVyYS5tYXRyaXgsIDAgKTtcblxuXHRcdFx0Y2FtZXJhLnBvc2l0aW9uLmFkZFNjYWxlZFZlY3RvciggX3ZlY3RvciwgZGlzdGFuY2UgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmxvY2sgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHRoaXMuZG9tRWxlbWVudC5yZXF1ZXN0UG9pbnRlckxvY2soKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLnVubG9jayA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuY29ubmVjdCgpO1xuXG5cdH1cblxufVxuXG5leHBvcnQgeyBQb2ludGVyTG9ja0NvbnRyb2xzIH07XG4iLCIvKipcbiAqIGxpbC1ndWlcbiAqIGh0dHBzOi8vbGlsLWd1aS5nZW9yZ2VhbHdheXMuY29tXG4gKiBAdmVyc2lvbiAwLjE2LjBcbiAqIEBhdXRob3IgR2VvcmdlIE1pY2hhZWwgQnJvd2VyXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuY2xhc3MgdHtjb25zdHJ1Y3RvcihpLGUscyxuLHI9XCJkaXZcIil7dGhpcy5wYXJlbnQ9aSx0aGlzLm9iamVjdD1lLHRoaXMucHJvcGVydHk9cyx0aGlzLl9kaXNhYmxlZD0hMSx0aGlzLmluaXRpYWxWYWx1ZT10aGlzLmdldFZhbHVlKCksdGhpcy5kb21FbGVtZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb250cm9sbGVyXCIpLHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKG4pLHRoaXMuJG5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLiRuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpLHQubmV4dE5hbWVJRD10Lm5leHROYW1lSUR8fDAsdGhpcy4kbmFtZS5pZD1cImxpbC1ndWktbmFtZS1cIisgKyt0Lm5leHROYW1lSUQsdGhpcy4kd2lkZ2V0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQociksdGhpcy4kd2lkZ2V0LmNsYXNzTGlzdC5hZGQoXCJ3aWRnZXRcIiksdGhpcy4kZGlzYWJsZT10aGlzLiR3aWRnZXQsdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJG5hbWUpLHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiR3aWRnZXQpLHRoaXMucGFyZW50LmNoaWxkcmVuLnB1c2godGhpcyksdGhpcy5wYXJlbnQuY29udHJvbGxlcnMucHVzaCh0aGlzKSx0aGlzLnBhcmVudC4kY2hpbGRyZW4uYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KSx0aGlzLl9saXN0ZW5DYWxsYmFjaz10aGlzLl9saXN0ZW5DYWxsYmFjay5iaW5kKHRoaXMpLHRoaXMubmFtZShzKX1uYW1lKHQpe3JldHVybiB0aGlzLl9uYW1lPXQsdGhpcy4kbmFtZS5pbm5lckhUTUw9dCx0aGlzfW9uQ2hhbmdlKHQpe3JldHVybiB0aGlzLl9vbkNoYW5nZT10LHRoaXN9X2NhbGxPbkNoYW5nZSgpe3RoaXMucGFyZW50Ll9jYWxsT25DaGFuZ2UodGhpcyksdm9pZCAwIT09dGhpcy5fb25DaGFuZ2UmJnRoaXMuX29uQ2hhbmdlLmNhbGwodGhpcyx0aGlzLmdldFZhbHVlKCkpLHRoaXMuX2NoYW5nZWQ9ITB9b25GaW5pc2hDaGFuZ2UodCl7cmV0dXJuIHRoaXMuX29uRmluaXNoQ2hhbmdlPXQsdGhpc31fY2FsbE9uRmluaXNoQ2hhbmdlKCl7dGhpcy5fY2hhbmdlZCYmKHRoaXMucGFyZW50Ll9jYWxsT25GaW5pc2hDaGFuZ2UodGhpcyksdm9pZCAwIT09dGhpcy5fb25GaW5pc2hDaGFuZ2UmJnRoaXMuX29uRmluaXNoQ2hhbmdlLmNhbGwodGhpcyx0aGlzLmdldFZhbHVlKCkpKSx0aGlzLl9jaGFuZ2VkPSExfXJlc2V0KCl7cmV0dXJuIHRoaXMuc2V0VmFsdWUodGhpcy5pbml0aWFsVmFsdWUpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpLHRoaXN9ZW5hYmxlKHQ9ITApe3JldHVybiB0aGlzLmRpc2FibGUoIXQpfWRpc2FibGUodD0hMCl7cmV0dXJuIHQ9PT10aGlzLl9kaXNhYmxlZHx8KHRoaXMuX2Rpc2FibGVkPXQsdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJkaXNhYmxlZFwiLHQpLHRoaXMuJGRpc2FibGUudG9nZ2xlQXR0cmlidXRlKFwiZGlzYWJsZWRcIix0KSksdGhpc31vcHRpb25zKHQpe2NvbnN0IGk9dGhpcy5wYXJlbnQuYWRkKHRoaXMub2JqZWN0LHRoaXMucHJvcGVydHksdCk7cmV0dXJuIGkubmFtZSh0aGlzLl9uYW1lKSx0aGlzLmRlc3Ryb3koKSxpfW1pbih0KXtyZXR1cm4gdGhpc31tYXgodCl7cmV0dXJuIHRoaXN9c3RlcCh0KXtyZXR1cm4gdGhpc31saXN0ZW4odD0hMCl7cmV0dXJuIHRoaXMuX2xpc3RlbmluZz10LHZvaWQgMCE9PXRoaXMuX2xpc3RlbkNhbGxiYWNrSUQmJihjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9saXN0ZW5DYWxsYmFja0lEKSx0aGlzLl9saXN0ZW5DYWxsYmFja0lEPXZvaWQgMCksdGhpcy5fbGlzdGVuaW5nJiZ0aGlzLl9saXN0ZW5DYWxsYmFjaygpLHRoaXN9X2xpc3RlbkNhbGxiYWNrKCl7dGhpcy5fbGlzdGVuQ2FsbGJhY2tJRD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fbGlzdGVuQ2FsbGJhY2spLHRoaXMudXBkYXRlRGlzcGxheSgpfWdldFZhbHVlKCl7cmV0dXJuIHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldfXNldFZhbHVlKHQpe3JldHVybiB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XT10LHRoaXMuX2NhbGxPbkNoYW5nZSgpLHRoaXMudXBkYXRlRGlzcGxheSgpLHRoaXN9dXBkYXRlRGlzcGxheSgpe3JldHVybiB0aGlzfWxvYWQodCl7cmV0dXJuIHRoaXMuc2V0VmFsdWUodCksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCksdGhpc31zYXZlKCl7cmV0dXJuIHRoaXMuZ2V0VmFsdWUoKX1kZXN0cm95KCl7dGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyksMSksdGhpcy5wYXJlbnQuY29udHJvbGxlcnMuc3BsaWNlKHRoaXMucGFyZW50LmNvbnRyb2xsZXJzLmluZGV4T2YodGhpcyksMSksdGhpcy5wYXJlbnQuJGNoaWxkcmVuLnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCl9fWNsYXNzIGkgZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKHQsaSxlKXtzdXBlcih0LGksZSxcImJvb2xlYW5cIixcImxhYmVsXCIpLHRoaXMuJGlucHV0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJjaGVja2JveFwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIix0aGlzLiRuYW1lLmlkKSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kaW5wdXQpLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwoKT0+e3RoaXMuc2V0VmFsdWUodGhpcy4kaW5wdXQuY2hlY2tlZCksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCl9KSx0aGlzLiRkaXNhYmxlPXRoaXMuJGlucHV0LHRoaXMudXBkYXRlRGlzcGxheSgpfXVwZGF0ZURpc3BsYXkoKXtyZXR1cm4gdGhpcy4kaW5wdXQuY2hlY2tlZD10aGlzLmdldFZhbHVlKCksdGhpc319ZnVuY3Rpb24gZSh0KXtsZXQgaSxlO3JldHVybihpPXQubWF0Y2goLygjfDB4KT8oW2EtZjAtOV17Nn0pL2kpKT9lPWlbMl06KGk9dC5tYXRjaCgvcmdiXFwoXFxzKihcXGQqKVxccyosXFxzKihcXGQqKVxccyosXFxzKihcXGQqKVxccypcXCkvKSk/ZT1wYXJzZUludChpWzFdKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwwKStwYXJzZUludChpWzJdKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwwKStwYXJzZUludChpWzNdKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwwKTooaT10Lm1hdGNoKC9eIz8oW2EtZjAtOV0pKFthLWYwLTldKShbYS1mMC05XSkkL2kpKSYmKGU9aVsxXStpWzFdK2lbMl0raVsyXStpWzNdK2lbM10pLCEhZSYmXCIjXCIrZX1jb25zdCBzPXtpc1ByaW1pdGl2ZTohMCxtYXRjaDp0PT5cInN0cmluZ1wiPT10eXBlb2YgdCxmcm9tSGV4U3RyaW5nOmUsdG9IZXhTdHJpbmc6ZX0sbj17aXNQcmltaXRpdmU6ITAsbWF0Y2g6dD0+XCJudW1iZXJcIj09dHlwZW9mIHQsZnJvbUhleFN0cmluZzp0PT5wYXJzZUludCh0LnN1YnN0cmluZygxKSwxNiksdG9IZXhTdHJpbmc6dD0+XCIjXCIrdC50b1N0cmluZygxNikucGFkU3RhcnQoNiwwKX0scj17aXNQcmltaXRpdmU6ITEsbWF0Y2g6QXJyYXkuaXNBcnJheSxmcm9tSGV4U3RyaW5nKHQsaSxlPTEpe2NvbnN0IHM9bi5mcm9tSGV4U3RyaW5nKHQpO2lbMF09KHM+PjE2JjI1NSkvMjU1KmUsaVsxXT0ocz4+OCYyNTUpLzI1NSplLGlbMl09KDI1NSZzKS8yNTUqZX0sdG9IZXhTdHJpbmc6KFt0LGksZV0scz0xKT0+bi50b0hleFN0cmluZyh0KihzPTI1NS9zKTw8MTZeaSpzPDw4XmUqczw8MCl9LGw9e2lzUHJpbWl0aXZlOiExLG1hdGNoOnQ9Pk9iamVjdCh0KT09PXQsZnJvbUhleFN0cmluZyh0LGksZT0xKXtjb25zdCBzPW4uZnJvbUhleFN0cmluZyh0KTtpLnI9KHM+PjE2JjI1NSkvMjU1KmUsaS5nPShzPj44JjI1NSkvMjU1KmUsaS5iPSgyNTUmcykvMjU1KmV9LHRvSGV4U3RyaW5nOih7cjp0LGc6aSxiOmV9LHM9MSk9Pm4udG9IZXhTdHJpbmcodCoocz0yNTUvcyk8PDE2Xmkqczw8OF5lKnM8PDApfSxvPVtzLG4scixsXTtjbGFzcyBhIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcih0LGkscyxuKXt2YXIgcjtzdXBlcih0LGkscyxcImNvbG9yXCIpLHRoaXMuJGlucHV0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJjb2xvclwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLC0xKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIix0aGlzLiRuYW1lLmlkKSx0aGlzLiR0ZXh0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0aGlzLiR0ZXh0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIiksdGhpcy4kdGV4dC5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsXCJmYWxzZVwiKSx0aGlzLiR0ZXh0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLHRoaXMuJG5hbWUuaWQpLHRoaXMuJGRpc3BsYXk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLiRkaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpLHRoaXMuJGRpc3BsYXkuYXBwZW5kQ2hpbGQodGhpcy4kaW5wdXQpLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiRkaXNwbGF5KSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kdGV4dCksdGhpcy5fZm9ybWF0PShyPXRoaXMuaW5pdGlhbFZhbHVlLG8uZmluZCh0PT50Lm1hdGNoKHIpKSksdGhpcy5fcmdiU2NhbGU9bix0aGlzLl9pbml0aWFsVmFsdWVIZXhTdHJpbmc9dGhpcy5zYXZlKCksdGhpcy5fdGV4dEZvY3VzZWQ9ITEsdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsKCk9Pnt0aGlzLl9zZXRWYWx1ZUZyb21IZXhTdHJpbmcodGhpcy4kaW5wdXQudmFsdWUpfSksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoKT0+e3RoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpfSksdGhpcy4kdGV4dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwoKT0+e2NvbnN0IHQ9ZSh0aGlzLiR0ZXh0LnZhbHVlKTt0JiZ0aGlzLl9zZXRWYWx1ZUZyb21IZXhTdHJpbmcodCl9KSx0aGlzLiR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCgpPT57dGhpcy5fdGV4dEZvY3VzZWQ9ITAsdGhpcy4kdGV4dC5zZWxlY3QoKX0pLHRoaXMuJHRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoKT0+e3RoaXMuX3RleHRGb2N1c2VkPSExLHRoaXMudXBkYXRlRGlzcGxheSgpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpfSksdGhpcy4kZGlzYWJsZT10aGlzLiR0ZXh0LHRoaXMudXBkYXRlRGlzcGxheSgpfXJlc2V0KCl7cmV0dXJuIHRoaXMuX3NldFZhbHVlRnJvbUhleFN0cmluZyh0aGlzLl9pbml0aWFsVmFsdWVIZXhTdHJpbmcpLHRoaXN9X3NldFZhbHVlRnJvbUhleFN0cmluZyh0KXtpZih0aGlzLl9mb3JtYXQuaXNQcmltaXRpdmUpe2NvbnN0IGk9dGhpcy5fZm9ybWF0LmZyb21IZXhTdHJpbmcodCk7dGhpcy5zZXRWYWx1ZShpKX1lbHNlIHRoaXMuX2Zvcm1hdC5mcm9tSGV4U3RyaW5nKHQsdGhpcy5nZXRWYWx1ZSgpLHRoaXMuX3JnYlNjYWxlKSx0aGlzLl9jYWxsT25DaGFuZ2UoKSx0aGlzLnVwZGF0ZURpc3BsYXkoKX1zYXZlKCl7cmV0dXJuIHRoaXMuX2Zvcm1hdC50b0hleFN0cmluZyh0aGlzLmdldFZhbHVlKCksdGhpcy5fcmdiU2NhbGUpfWxvYWQodCl7cmV0dXJuIHRoaXMuX3NldFZhbHVlRnJvbUhleFN0cmluZyh0KSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKSx0aGlzfXVwZGF0ZURpc3BsYXkoKXtyZXR1cm4gdGhpcy4kaW5wdXQudmFsdWU9dGhpcy5fZm9ybWF0LnRvSGV4U3RyaW5nKHRoaXMuZ2V0VmFsdWUoKSx0aGlzLl9yZ2JTY2FsZSksdGhpcy5fdGV4dEZvY3VzZWR8fCh0aGlzLiR0ZXh0LnZhbHVlPXRoaXMuJGlucHV0LnZhbHVlLnN1YnN0cmluZygxKSksdGhpcy4kZGlzcGxheS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9dGhpcy4kaW5wdXQudmFsdWUsdGhpc319Y2xhc3MgaCBleHRlbmRzIHR7Y29uc3RydWN0b3IodCxpLGUpe3N1cGVyKHQsaSxlLFwiZnVuY3Rpb25cIiksdGhpcy4kYnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksdGhpcy4kYnV0dG9uLmFwcGVuZENoaWxkKHRoaXMuJG5hbWUpLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiRidXR0b24pLHRoaXMuJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0PT57dC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZ2V0VmFsdWUoKS5jYWxsKHRoaXMub2JqZWN0KX0pLHRoaXMuJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCgpPT57fSksdGhpcy4kZGlzYWJsZT10aGlzLiRidXR0b259fWNsYXNzIGQgZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKHQsaSxlLHMsbixyKXtzdXBlcih0LGksZSxcIm51bWJlclwiKSx0aGlzLl9pbml0SW5wdXQoKSx0aGlzLm1pbihzKSx0aGlzLm1heChuKTtjb25zdCBsPXZvaWQgMCE9PXI7dGhpcy5zdGVwKGw/cjp0aGlzLl9nZXRJbXBsaWNpdFN0ZXAoKSxsKSx0aGlzLnVwZGF0ZURpc3BsYXkoKX1taW4odCl7cmV0dXJuIHRoaXMuX21pbj10LHRoaXMuX29uVXBkYXRlTWluTWF4KCksdGhpc31tYXgodCl7cmV0dXJuIHRoaXMuX21heD10LHRoaXMuX29uVXBkYXRlTWluTWF4KCksdGhpc31zdGVwKHQsaT0hMCl7cmV0dXJuIHRoaXMuX3N0ZXA9dCx0aGlzLl9zdGVwRXhwbGljaXQ9aSx0aGlzfXVwZGF0ZURpc3BsYXkoKXtjb25zdCB0PXRoaXMuZ2V0VmFsdWUoKTtpZih0aGlzLl9oYXNTbGlkZXIpe2xldCBpPSh0LXRoaXMuX21pbikvKHRoaXMuX21heC10aGlzLl9taW4pO2k9TWF0aC5tYXgoMCxNYXRoLm1pbihpLDEpKSx0aGlzLiRmaWxsLnN0eWxlLndpZHRoPTEwMCppK1wiJVwifXJldHVybiB0aGlzLl9pbnB1dEZvY3VzZWR8fCh0aGlzLiRpbnB1dC52YWx1ZT10KSx0aGlzfV9pbml0SW5wdXQoKXt0aGlzLiRpbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwibnVtYmVyXCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcInN0ZXBcIixcImFueVwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIix0aGlzLiRuYW1lLmlkKSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kaW5wdXQpLHRoaXMuJGRpc2FibGU9dGhpcy4kaW5wdXQ7Y29uc3QgdD10PT57Y29uc3QgaT1wYXJzZUZsb2F0KHRoaXMuJGlucHV0LnZhbHVlKTtpc05hTihpKXx8KHRoaXMuX3NuYXBDbGFtcFNldFZhbHVlKGkrdCksdGhpcy4kaW5wdXQudmFsdWU9dGhpcy5nZXRWYWx1ZSgpKX07bGV0IGksZSxzLG4scixsPSExO2NvbnN0IG89dD0+e2lmKGwpe2NvbnN0IHM9dC5jbGllbnRYLWksbj10LmNsaWVudFktZTtNYXRoLmFicyhuKT41Pyh0LnByZXZlbnREZWZhdWx0KCksdGhpcy4kaW5wdXQuYmx1cigpLGw9ITEsdGhpcy5fc2V0RHJhZ2dpbmdTdHlsZSghMCxcInZlcnRpY2FsXCIpKTpNYXRoLmFicyhzKT41JiZhKCl9aWYoIWwpe2NvbnN0IGk9dC5jbGllbnRZLXM7ci09aSp0aGlzLl9zdGVwKnRoaXMuX2Fycm93S2V5TXVsdGlwbGllcih0KSxuK3I+dGhpcy5fbWF4P3I9dGhpcy5fbWF4LW46bityPHRoaXMuX21pbiYmKHI9dGhpcy5fbWluLW4pLHRoaXMuX3NuYXBDbGFtcFNldFZhbHVlKG4rcil9cz10LmNsaWVudFl9LGE9KCk9Pnt0aGlzLl9zZXREcmFnZ2luZ1N0eWxlKCExLFwidmVydGljYWxcIiksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixvKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixhKX07dGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsKCk9Pntjb25zdCB0PXBhcnNlRmxvYXQodGhpcy4kaW5wdXQudmFsdWUpO2lzTmFOKHQpfHx0aGlzLnNldFZhbHVlKHRoaXMuX2NsYW1wKHQpKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsaT0+e1wiRW50ZXJcIj09PWkuY29kZSYmdGhpcy4kaW5wdXQuYmx1cigpLFwiQXJyb3dVcFwiPT09aS5jb2RlJiYoaS5wcmV2ZW50RGVmYXVsdCgpLHQodGhpcy5fc3RlcCp0aGlzLl9hcnJvd0tleU11bHRpcGxpZXIoaSkpKSxcIkFycm93RG93blwiPT09aS5jb2RlJiYoaS5wcmV2ZW50RGVmYXVsdCgpLHQodGhpcy5fc3RlcCp0aGlzLl9hcnJvd0tleU11bHRpcGxpZXIoaSkqLTEpKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLGk9Pnt0aGlzLl9pbnB1dEZvY3VzZWQmJihpLnByZXZlbnREZWZhdWx0KCksdCh0aGlzLl9zdGVwKnRoaXMuX25vcm1hbGl6ZU1vdXNlV2hlZWwoaSkpKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0PT57aT10LmNsaWVudFgsZT1zPXQuY2xpZW50WSxsPSEwLG49dGhpcy5nZXRWYWx1ZSgpLHI9MCx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLG8pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGEpfSksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsKCk9Pnt0aGlzLl9pbnB1dEZvY3VzZWQ9ITB9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCgpPT57dGhpcy5faW5wdXRGb2N1c2VkPSExLHRoaXMudXBkYXRlRGlzcGxheSgpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpfSl9X2luaXRTbGlkZXIoKXt0aGlzLl9oYXNTbGlkZXI9ITAsdGhpcy4kc2xpZGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy4kc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIiksdGhpcy4kZmlsbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuJGZpbGwuY2xhc3NMaXN0LmFkZChcImZpbGxcIiksdGhpcy4kc2xpZGVyLmFwcGVuZENoaWxkKHRoaXMuJGZpbGwpLHRoaXMuJHdpZGdldC5pbnNlcnRCZWZvcmUodGhpcy4kc2xpZGVyLHRoaXMuJGlucHV0KSx0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhhc1NsaWRlclwiKTtjb25zdCB0PXQ9Pntjb25zdCBpPXRoaXMuJHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtsZXQgZT0ocz10LG49aS5sZWZ0LHI9aS5yaWdodCxsPXRoaXMuX21pbixvPXRoaXMuX21heCwocy1uKS8oci1uKSooby1sKStsKTt2YXIgcyxuLHIsbCxvO3RoaXMuX3NuYXBDbGFtcFNldFZhbHVlKGUpfSxpPWk9Pnt0KGkuY2xpZW50WCl9LGU9KCk9Pnt0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKSx0aGlzLl9zZXREcmFnZ2luZ1N0eWxlKCExKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLGkpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGUpfTtsZXQgcyxuLHI9ITE7Y29uc3QgbD1pPT57aS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuX3NldERyYWdnaW5nU3R5bGUoITApLHQoaS50b3VjaGVzWzBdLmNsaWVudFgpLHI9ITF9LG89aT0+e2lmKHIpe2NvbnN0IHQ9aS50b3VjaGVzWzBdLmNsaWVudFgtcyxlPWkudG91Y2hlc1swXS5jbGllbnRZLW47TWF0aC5hYnModCk+TWF0aC5hYnMoZSk/bChpKTood2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixvKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsYSkpfWVsc2UgaS5wcmV2ZW50RGVmYXVsdCgpLHQoaS50b3VjaGVzWzBdLmNsaWVudFgpfSxhPSgpPT57dGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCksdGhpcy5fc2V0RHJhZ2dpbmdTdHlsZSghMSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixvKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsYSl9LGg9dGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlLmJpbmQodGhpcyk7bGV0IGQ7dGhpcy4kc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixzPT57dGhpcy5fc2V0RHJhZ2dpbmdTdHlsZSghMCksdChzLmNsaWVudFgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsaSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsZSl9KSx0aGlzLiRzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0PT57dC50b3VjaGVzLmxlbmd0aD4xfHwodGhpcy5faGFzU2Nyb2xsQmFyPyhzPXQudG91Y2hlc1swXS5jbGllbnRYLG49dC50b3VjaGVzWzBdLmNsaWVudFkscj0hMCk6bCh0KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLG8pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixhKSl9KSx0aGlzLiRzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsdD0+e2lmKE1hdGguYWJzKHQuZGVsdGFYKTxNYXRoLmFicyh0LmRlbHRhWSkmJnRoaXMuX2hhc1Njcm9sbEJhcilyZXR1cm47dC5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0IGk9dGhpcy5fbm9ybWFsaXplTW91c2VXaGVlbCh0KSp0aGlzLl9zdGVwO3RoaXMuX3NuYXBDbGFtcFNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKStpKSx0aGlzLiRpbnB1dC52YWx1ZT10aGlzLmdldFZhbHVlKCksY2xlYXJUaW1lb3V0KGQpLGQ9c2V0VGltZW91dChoLDQwMCl9KX1fc2V0RHJhZ2dpbmdTdHlsZSh0LGk9XCJob3Jpem9udGFsXCIpe3RoaXMuJHNsaWRlciYmdGhpcy4kc2xpZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIix0KSxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsaWwtZ3VpLWRyYWdnaW5nXCIsdCksZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibGlsLWd1aS1cIitpLHQpfV9nZXRJbXBsaWNpdFN0ZXAoKXtyZXR1cm4gdGhpcy5faGFzTWluJiZ0aGlzLl9oYXNNYXg/KHRoaXMuX21heC10aGlzLl9taW4pLzFlMzouMX1fb25VcGRhdGVNaW5NYXgoKXshdGhpcy5faGFzU2xpZGVyJiZ0aGlzLl9oYXNNaW4mJnRoaXMuX2hhc01heCYmKHRoaXMuX3N0ZXBFeHBsaWNpdHx8dGhpcy5zdGVwKHRoaXMuX2dldEltcGxpY2l0U3RlcCgpLCExKSx0aGlzLl9pbml0U2xpZGVyKCksdGhpcy51cGRhdGVEaXNwbGF5KCkpfV9ub3JtYWxpemVNb3VzZVdoZWVsKHQpe2xldHtkZWx0YVg6aSxkZWx0YVk6ZX09dDtNYXRoLmZsb29yKHQuZGVsdGFZKSE9PXQuZGVsdGFZJiZ0LndoZWVsRGVsdGEmJihpPTAsZT0tdC53aGVlbERlbHRhLzEyMCxlKj10aGlzLl9zdGVwRXhwbGljaXQ/MToxMCk7cmV0dXJuIGkrLWV9X2Fycm93S2V5TXVsdGlwbGllcih0KXtsZXQgaT10aGlzLl9zdGVwRXhwbGljaXQ/MToxMDtyZXR1cm4gdC5zaGlmdEtleT9pKj0xMDp0LmFsdEtleSYmKGkvPTEwKSxpfV9zbmFwKHQpe2NvbnN0IGk9TWF0aC5yb3VuZCh0L3RoaXMuX3N0ZXApKnRoaXMuX3N0ZXA7cmV0dXJuIHBhcnNlRmxvYXQoaS50b1ByZWNpc2lvbigxNSkpfV9jbGFtcCh0KXtyZXR1cm4gdDx0aGlzLl9taW4mJih0PXRoaXMuX21pbiksdD50aGlzLl9tYXgmJih0PXRoaXMuX21heCksdH1fc25hcENsYW1wU2V0VmFsdWUodCl7dGhpcy5zZXRWYWx1ZSh0aGlzLl9jbGFtcCh0aGlzLl9zbmFwKHQpKSl9Z2V0IF9oYXNTY3JvbGxCYXIoKXtjb25zdCB0PXRoaXMucGFyZW50LnJvb3QuJGNoaWxkcmVuO3JldHVybiB0LnNjcm9sbEhlaWdodD50LmNsaWVudEhlaWdodH1nZXQgX2hhc01pbigpe3JldHVybiB2b2lkIDAhPT10aGlzLl9taW59Z2V0IF9oYXNNYXgoKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5fbWF4fX1jbGFzcyBjIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcih0LGksZSxzKXtzdXBlcih0LGksZSxcIm9wdGlvblwiKSx0aGlzLiRzZWxlY3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSx0aGlzLiRzZWxlY3Quc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsdGhpcy4kbmFtZS5pZCksdGhpcy4kZGlzcGxheT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuJGRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIiksdGhpcy5fdmFsdWVzPUFycmF5LmlzQXJyYXkocyk/czpPYmplY3QudmFsdWVzKHMpLHRoaXMuX25hbWVzPUFycmF5LmlzQXJyYXkocyk/czpPYmplY3Qua2V5cyhzKSx0aGlzLl9uYW1lcy5mb3JFYWNoKHQ9Pntjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7aS5pbm5lckhUTUw9dCx0aGlzLiRzZWxlY3QuYXBwZW5kQ2hpbGQoaSl9KSx0aGlzLiRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCgpPT57dGhpcy5zZXRWYWx1ZSh0aGlzLl92YWx1ZXNbdGhpcy4kc2VsZWN0LnNlbGVjdGVkSW5kZXhdKSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKX0pLHRoaXMuJHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwoKT0+e3RoaXMuJGRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImZvY3VzXCIpfSksdGhpcy4kc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsKCk9Pnt0aGlzLiRkaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJmb2N1c1wiKX0pLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiRzZWxlY3QpLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiRkaXNwbGF5KSx0aGlzLiRkaXNhYmxlPXRoaXMuJHNlbGVjdCx0aGlzLnVwZGF0ZURpc3BsYXkoKX11cGRhdGVEaXNwbGF5KCl7Y29uc3QgdD10aGlzLmdldFZhbHVlKCksaT10aGlzLl92YWx1ZXMuaW5kZXhPZih0KTtyZXR1cm4gdGhpcy4kc2VsZWN0LnNlbGVjdGVkSW5kZXg9aSx0aGlzLiRkaXNwbGF5LmlubmVySFRNTD0tMT09PWk/dDp0aGlzLl9uYW1lc1tpXSx0aGlzfX1jbGFzcyB1IGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcih0LGksZSl7c3VwZXIodCxpLGUsXCJzdHJpbmdcIiksdGhpcy4kaW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsdGhpcy4kbmFtZS5pZCksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsKCk9Pnt0aGlzLnNldFZhbHVlKHRoaXMuJGlucHV0LnZhbHVlKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdD0+e1wiRW50ZXJcIj09PXQuY29kZSYmdGhpcy4kaW5wdXQuYmx1cigpfSksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoKT0+e3RoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpfSksdGhpcy4kd2lkZ2V0LmFwcGVuZENoaWxkKHRoaXMuJGlucHV0KSx0aGlzLiRkaXNhYmxlPXRoaXMuJGlucHV0LHRoaXMudXBkYXRlRGlzcGxheSgpfXVwZGF0ZURpc3BsYXkoKXtyZXR1cm4gdGhpcy4kaW5wdXQudmFsdWU9dGhpcy5nZXRWYWx1ZSgpLHRoaXN9fWxldCBwPSExO2NsYXNzIGd7Y29uc3RydWN0b3Ioe3BhcmVudDp0LGF1dG9QbGFjZTppPXZvaWQgMD09PXQsY29udGFpbmVyOmUsd2lkdGg6cyx0aXRsZTpuPVwiQ29udHJvbHNcIixpbmplY3RTdHlsZXM6cj0hMCx0b3VjaFN0eWxlczpsPSEwfT17fSl7aWYodGhpcy5wYXJlbnQ9dCx0aGlzLnJvb3Q9dD90LnJvb3Q6dGhpcyx0aGlzLmNoaWxkcmVuPVtdLHRoaXMuY29udHJvbGxlcnM9W10sdGhpcy5mb2xkZXJzPVtdLHRoaXMuX2Nsb3NlZD0hMSx0aGlzLl9oaWRkZW49ITEsdGhpcy5kb21FbGVtZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaWwtZ3VpXCIpLHRoaXMuJHRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy4kdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpLHRoaXMuJHRpdGxlLnNldEF0dHJpYnV0ZShcInJvbGVcIixcImJ1dHRvblwiKSx0aGlzLiR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsITApLHRoaXMuJHRpdGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsMCksdGhpcy4kdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PnRoaXMub3BlbkFuaW1hdGVkKHRoaXMuX2Nsb3NlZCkpLHRoaXMuJHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdD0+e1wiRW50ZXJcIiE9PXQuY29kZSYmXCJTcGFjZVwiIT09dC5jb2RlfHwodC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuJHRpdGxlLmNsaWNrKCkpfSksdGhpcy4kdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwoKT0+e30pLHRoaXMuJGNoaWxkcmVuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy4kY2hpbGRyZW4uY2xhc3NMaXN0LmFkZChcImNoaWxkcmVuXCIpLHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiR0aXRsZSksdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJGNoaWxkcmVuKSx0aGlzLnRpdGxlKG4pLGwmJnRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWxsb3ctdG91Y2gtc3R5bGVzXCIpLHRoaXMucGFyZW50KXJldHVybiB0aGlzLnBhcmVudC5jaGlsZHJlbi5wdXNoKHRoaXMpLHRoaXMucGFyZW50LmZvbGRlcnMucHVzaCh0aGlzKSx2b2lkIHRoaXMucGFyZW50LiRjaGlsZHJlbi5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO3RoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicm9vdFwiKSwhcCYmciYmKCFmdW5jdGlvbih0KXtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtpLmlubmVySFRNTD10O2NvbnN0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWQgbGlua1tyZWw9c3R5bGVzaGVldF0sIGhlYWQgc3R5bGVcIik7ZT9kb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShpLGUpOmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaSl9KCcubGlsLWd1aXstLWJhY2tncm91bmQtY29sb3I6IzFmMWYxZjstLXRleHQtY29sb3I6I2ViZWJlYjstLXRpdGxlLWJhY2tncm91bmQtY29sb3I6IzExMTstLXRpdGxlLXRleHQtY29sb3I6I2ViZWJlYjstLXdpZGdldC1jb2xvcjojNDI0MjQyOy0taG92ZXItY29sb3I6IzRmNGY0ZjstLWZvY3VzLWNvbG9yOiM1OTU5NTk7LS1udW1iZXItY29sb3I6IzJjYzlmZjstLXN0cmluZy1jb2xvcjojYTJkYjNjOy0tZm9udC1zaXplOjExcHg7LS1pbnB1dC1mb250LXNpemU6MTFweDstLWZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjstLWZvbnQtZmFtaWx5LW1vbm86TWVubG8sTW9uYWNvLENvbnNvbGFzLFwiRHJvaWQgU2FucyBNb25vXCIsbW9ub3NwYWNlOy0tcGFkZGluZzo0cHg7LS1zcGFjaW5nOjRweDstLXdpZGdldC1oZWlnaHQ6MjBweDstLW5hbWUtd2lkdGg6NDUlOy0tc2xpZGVyLWtub2Itd2lkdGg6MnB4Oy0tc2xpZGVyLWlucHV0LXdpZHRoOjI3JTstLWNvbG9yLWlucHV0LXdpZHRoOjI3JTstLXNsaWRlci1pbnB1dC1taW4td2lkdGg6NDVweDstLWNvbG9yLWlucHV0LW1pbi13aWR0aDo0NXB4Oy0tZm9sZGVyLWluZGVudDo3cHg7LS13aWRnZXQtcGFkZGluZzowIDAgMCAzcHg7LS13aWRnZXQtYm9yZGVyLXJhZGl1czoycHg7LS1jaGVja2JveC1zaXplOmNhbGModmFyKC0td2lkZ2V0LWhlaWdodCkqMC43NSk7LS1zY3JvbGxiYXItd2lkdGg6NXB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFja2dyb3VuZC1jb2xvcik7Y29sb3I6dmFyKC0tdGV4dC1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxO3RleHQtYWxpZ246bGVmdDt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uO3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lfS5saWwtZ3VpLC5saWwtZ3VpICp7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbjowO3BhZGRpbmc6MH0ubGlsLWd1aS5yb290e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgsMjQ1cHgpfS5saWwtZ3VpLnJvb3Q+LnRpdGxle2JhY2tncm91bmQ6dmFyKC0tdGl0bGUtYmFja2dyb3VuZC1jb2xvcik7Y29sb3I6dmFyKC0tdGl0bGUtdGV4dC1jb2xvcil9LmxpbC1ndWkucm9vdD4uY2hpbGRyZW57b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvfS5saWwtZ3VpLnJvb3Q+LmNoaWxkcmVuOjotd2Via2l0LXNjcm9sbGJhcntiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtY29sb3IpO2hlaWdodDp2YXIoLS1zY3JvbGxiYXItd2lkdGgpO3dpZHRoOnZhcigtLXNjcm9sbGJhci13aWR0aCl9LmxpbC1ndWkucm9vdD4uY2hpbGRyZW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JhY2tncm91bmQ6dmFyKC0tZm9jdXMtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tc2Nyb2xsYmFyLXdpZHRoKX0ubGlsLWd1aS5mb3JjZS10b3VjaC1zdHlsZXN7LS13aWRnZXQtaGVpZ2h0OjI4cHg7LS1wYWRkaW5nOjZweDstLXNwYWNpbmc6NnB4Oy0tZm9udC1zaXplOjEzcHg7LS1pbnB1dC1mb250LXNpemU6MTZweDstLWZvbGRlci1pbmRlbnQ6MTBweDstLXNjcm9sbGJhci13aWR0aDo3cHg7LS1zbGlkZXItaW5wdXQtbWluLXdpZHRoOjUwcHg7LS1jb2xvci1pbnB1dC1taW4td2lkdGg6NjVweH0ubGlsLWd1aS5hdXRvUGxhY2V7bWF4LWhlaWdodDoxMDAlO3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjE1cHg7dG9wOjA7ei1pbmRleDoxMDAxfS5saWwtZ3VpIC5jb250cm9sbGVye2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7bWFyZ2luOnZhcigtLXNwYWNpbmcpIDA7cGFkZGluZzowIHZhcigtLXBhZGRpbmcpfS5saWwtZ3VpIC5jb250cm9sbGVyLmRpc2FibGVke29wYWNpdHk6LjV9LmxpbC1ndWkgLmNvbnRyb2xsZXIuZGlzYWJsZWQsLmxpbC1ndWkgLmNvbnRyb2xsZXIuZGlzYWJsZWQgKntwb2ludGVyLWV2ZW50czpub25lIWltcG9ydGFudH0ubGlsLWd1aSAuY29udHJvbGxlcj4ubmFtZXtmbGV4LXNocmluazowO2xpbmUtaGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO21pbi13aWR0aDp2YXIoLS1uYW1lLXdpZHRoKTtwYWRkaW5nLXJpZ2h0OnZhcigtLXNwYWNpbmcpO3doaXRlLXNwYWNlOnByZX0ubGlsLWd1aSAuY29udHJvbGxlciAud2lkZ2V0e2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7bWluLWhlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5saWwtZ3VpIC5jb250cm9sbGVyLnN0cmluZyBpbnB1dHtjb2xvcjp2YXIoLS1zdHJpbmctY29sb3IpfS5saWwtZ3VpIC5jb250cm9sbGVyLmJvb2xlYW4gLndpZGdldHtjdXJzb3I6cG9pbnRlcn0ubGlsLWd1aSAuY29udHJvbGxlci5jb2xvciAuZGlzcGxheXtib3JkZXItcmFkaXVzOnZhcigtLXdpZGdldC1ib3JkZXItcmFkaXVzKTtoZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX0ubGlsLWd1aSAuY29udHJvbGxlci5jb2xvciBpbnB1dFt0eXBlPWNvbG9yXXtjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6MTAwJTtvcGFjaXR5OjA7d2lkdGg6MTAwJX0ubGlsLWd1aSAuY29udHJvbGxlci5jb2xvciBpbnB1dFt0eXBlPXRleHRde2ZsZXgtc2hyaW5rOjA7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHktbW9ubyk7bWFyZ2luLWxlZnQ6dmFyKC0tc3BhY2luZyk7bWluLXdpZHRoOnZhcigtLWNvbG9yLWlucHV0LW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tY29sb3ItaW5wdXQtd2lkdGgpfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiBzZWxlY3R7bWF4LXdpZHRoOjEwMCU7b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCV9LmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIC5kaXNwbGF5e2JhY2tncm91bmQ6dmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLXdpZGdldC1ib3JkZXItcmFkaXVzKTtoZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7bWF4LXdpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmctbGVmdDouNTVlbTtwYWRkaW5nLXJpZ2h0OjEuNzVlbTtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO3dvcmQtYnJlYWs6YnJlYWstYWxsfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiAuZGlzcGxheS5hY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIC5kaXNwbGF5OmFmdGVye2JvdHRvbTowO2NvbnRlbnQ6XCLihpVcIjtmb250LWZhbWlseTpsaWwtZ3VpO3BhZGRpbmctcmlnaHQ6LjM3NWVtO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjB9LmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIC53aWRnZXQsLmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIHNlbGVjdHtjdXJzb3I6cG9pbnRlcn0ubGlsLWd1aSAuY29udHJvbGxlci5udW1iZXIgaW5wdXR7Y29sb3I6dmFyKC0tbnVtYmVyLWNvbG9yKX0ubGlsLWd1aSAuY29udHJvbGxlci5udW1iZXIuaGFzU2xpZGVyIGlucHV0e2ZsZXgtc2hyaW5rOjA7bWFyZ2luLWxlZnQ6dmFyKC0tc3BhY2luZyk7bWluLXdpZHRoOnZhcigtLXNsaWRlci1pbnB1dC1taW4td2lkdGgpO3dpZHRoOnZhcigtLXNsaWRlci1pbnB1dC13aWR0aCl9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyIC5zbGlkZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0td2lkZ2V0LWJvcmRlci1yYWRpdXMpO2N1cnNvcjpldy1yZXNpemU7aGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nLXJpZ2h0OnZhcigtLXNsaWRlci1rbm9iLXdpZHRoKTt0b3VjaC1hY3Rpb246cGFuLXk7d2lkdGg6MTAwJX0ubGlsLWd1aSAuY29udHJvbGxlci5udW1iZXIgLnNsaWRlci5hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyIC5zbGlkZXIuYWN0aXZlIC5maWxse29wYWNpdHk6Ljk1fS5saWwtZ3VpIC5jb250cm9sbGVyLm51bWJlciAuZmlsbHtib3JkZXItcmlnaHQ6dmFyKC0tc2xpZGVyLWtub2Itd2lkdGgpIHNvbGlkIHZhcigtLW51bWJlci1jb2xvcik7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MTAwJX0ubGlsLWd1aS1kcmFnZ2luZyAubGlsLWd1aXstLWhvdmVyLWNvbG9yOnZhcigtLXdpZGdldC1jb2xvcil9LmxpbC1ndWktZHJhZ2dpbmcgKntjdXJzb3I6ZXctcmVzaXplIWltcG9ydGFudH0ubGlsLWd1aS1kcmFnZ2luZy5saWwtZ3VpLXZlcnRpY2FsICp7Y3Vyc29yOm5zLXJlc2l6ZSFpbXBvcnRhbnR9LmxpbC1ndWkgLnRpdGxley0tdGl0bGUtaGVpZ2h0OmNhbGModmFyKC0td2lkZ2V0LWhlaWdodCkgKyB2YXIoLS1zcGFjaW5nKSoxLjI1KTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dGV4dC1kZWNvcmF0aW9uLXNraXA6b2JqZWN0cztjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDo2MDA7aGVpZ2h0OnZhcigtLXRpdGxlLWhlaWdodCk7bGluZS1oZWlnaHQ6Y2FsYyh2YXIoLS10aXRsZS1oZWlnaHQpIC0gNHB4KTtvdXRsaW5lOm5vbmU7cGFkZGluZzowIHZhcigtLXBhZGRpbmcpfS5saWwtZ3VpIC50aXRsZTpiZWZvcmV7Y29udGVudDpcIuKWvlwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtZmFtaWx5OmxpbC1ndWk7cGFkZGluZy1yaWdodDoycHh9LmxpbC1ndWkgLnRpdGxlOmFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLXRpdGxlLWJhY2tncm91bmQtY29sb3IpO29wYWNpdHk6Ljc1fS5saWwtZ3VpLnJvb3Q+LnRpdGxlOmZvY3Vze3RleHQtZGVjb3JhdGlvbjpub25lIWltcG9ydGFudH0ubGlsLWd1aS5jbG9zZWQ+LnRpdGxlOmJlZm9yZXtjb250ZW50Olwi4pa4XCJ9LmxpbC1ndWkuY2xvc2VkPi5jaGlsZHJlbntvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTdweCl9LmxpbC1ndWkuY2xvc2VkOm5vdCgudHJhbnNpdGlvbik+LmNoaWxkcmVue2Rpc3BsYXk6bm9uZX0ubGlsLWd1aS50cmFuc2l0aW9uPi5jaGlsZHJlbntvdmVyZmxvdzpoaWRkZW47cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4zczt0cmFuc2l0aW9uLXByb3BlcnR5OmhlaWdodCxvcGFjaXR5LHRyYW5zZm9ybTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIsLjYsLjM1LDEpfS5saWwtZ3VpIC5jaGlsZHJlbjplbXB0eTpiZWZvcmV7Y29udGVudDpcIkVtcHR5XCI7ZGlzcGxheTpibG9jaztmb250LXN0eWxlOml0YWxpYztoZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7bWFyZ2luOnZhcigtLXNwYWNpbmcpIDA7b3BhY2l0eTouNTtwYWRkaW5nOjAgdmFyKC0tcGFkZGluZyl9LmxpbC1ndWkucm9vdD4uY2hpbGRyZW4+LmxpbC1ndWk+LnRpdGxle2JvcmRlci13aWR0aDowO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyLWxlZnQ6MCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlci1yaWdodDowIHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0td2lkZ2V0LWNvbG9yKTt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuM3N9LmxpbC1ndWkucm9vdD4uY2hpbGRyZW4+LmxpbC1ndWkuY2xvc2VkPi50aXRsZXtib3JkZXItYm90dG9tLWNvbG9yOnRyYW5zcGFyZW50fS5saWwtZ3VpKy5jb250cm9sbGVye2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7bWFyZ2luLXRvcDowO3BhZGRpbmctdG9wOnZhcigtLXNwYWNpbmcpfS5saWwtZ3VpIC5saWwtZ3VpIC5saWwtZ3VpPi50aXRsZXtib3JkZXI6bm9uZX0ubGlsLWd1aSAubGlsLWd1aSAubGlsLWd1aT4uY2hpbGRyZW57Ym9yZGVyOm5vbmU7Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7bWFyZ2luLWxlZnQ6dmFyKC0tZm9sZGVyLWluZGVudCl9LmxpbC1ndWkgLmxpbC1ndWkgLmNvbnRyb2xsZXJ7Ym9yZGVyOm5vbmV9LmxpbC1ndWkgaW5wdXR7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQ6dmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXI6MDtib3JkZXItcmFkaXVzOnZhcigtLXdpZGdldC1ib3JkZXItcmFkaXVzKTtjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1mb250LWZhbWlseSk7Zm9udC1zaXplOnZhcigtLWlucHV0LWZvbnQtc2l6ZSk7aGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO291dGxpbmU6bm9uZTt3aWR0aDoxMDAlfS5saWwtZ3VpIGlucHV0OmRpc2FibGVke29wYWNpdHk6MX0ubGlsLWd1aSBpbnB1dFt0eXBlPW51bWJlcl0sLmxpbC1ndWkgaW5wdXRbdHlwZT10ZXh0XXtwYWRkaW5nOnZhcigtLXdpZGdldC1wYWRkaW5nKX0ubGlsLWd1aSBpbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMsLmxpbC1ndWkgaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tiYWNrZ3JvdW5kOnZhcigtLWZvY3VzLWNvbG9yKX0ubGlsLWd1aSBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwubGlsLWd1aSBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTttYXJnaW46MH0ubGlsLWd1aSBpbnB1dFt0eXBlPW51bWJlcl17LW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZH0ubGlsLWd1aSBpbnB1dFt0eXBlPWNoZWNrYm94XXthcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7Ym9yZGVyLXJhZGl1czp2YXIoLS13aWRnZXQtYm9yZGVyLXJhZGl1cyk7Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OnZhcigtLWNoZWNrYm94LXNpemUpO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOnZhcigtLWNoZWNrYm94LXNpemUpfS5saWwtZ3VpIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6YmVmb3Jle2NvbnRlbnQ6XCLinJNcIjtmb250LWZhbWlseTpsaWwtZ3VpO2ZvbnQtc2l6ZTp2YXIoLS1jaGVja2JveC1zaXplKTtsaW5lLWhlaWdodDp2YXIoLS1jaGVja2JveC1zaXplKX0ubGlsLWd1aSBidXR0b257LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQ6dmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS13aWRnZXQtYm9yZGVyLXJhZGl1cyk7Y29sb3I6dmFyKC0tdGV4dC1jb2xvcik7Y3Vyc29yOnBvaW50ZXI7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2hlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTtsaW5lLWhlaWdodDpjYWxjKHZhcigtLXdpZGdldC1oZWlnaHQpIC0gNHB4KTtvdXRsaW5lOm5vbmU7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06bm9uZTt3aWR0aDoxMDAlfS5saWwtZ3VpIGJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1mb2N1cy1jb2xvcil9QGZvbnQtZmFjZXtmb250LWZhbWlseTpsaWwtZ3VpO3NyYzp1cmwoXCJkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHUmdBQkFBQUFBQVVzQUFzQUFBQUFDSndBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkhVMVZDQUFBQkNBQUFBSDRBQUFEQUltd21ZRTlUTHpJQUFBR0lBQUFBUHdBQUFHQktxSDVTWTIxaGNBQUFBY2dBQUFEMEFBQUNydWt5eUpCbmJIbG1BQUFDdkFBQUFGOEFBQUNFSVpwV0gyaGxZV1FBQUFNY0FBQUFKd0FBQURaZmNqMnphR2hsWVFBQUEwUUFBQUFZQUFBQUpBQzVBSGhvYlhSNEFBQURYQUFBQUJBQUFBQk1BWkFBQUd4dlkyRUFBQU5zQUFBQUZBQUFBQ2dDRWdJeWJXRjRjQUFBQTRBQUFBQWVBQUFBSUFFZkFCSnVZVzFsQUFBRG9BQUFBU0lBQUFJSzlTVVUvWEJ2YzNRQUFBVEVBQUFBWmdBQUFKQ1RjTWMyZUp4VmpiRU9nakFVUlUraEZSQksxZEdSTCtBTG5BaVRveU1MRXpGcG5Qei9lQXNod1NhOTc1MTdjL013d0ptZUI5a3dQbCswY2Y1K3VHUFpYc3FQdTRudlphYmNTWmxkWjZrZnlXbm9tRlkvZVNjS3FaTld1cEtKTzZrWE4zSzl1Q1ZvTDdpSW5QcjFYNWJhWHMzdGp1TXFDdHpFdWFnbS9BQWx6UWdQQUFCNG5HTmdZUkJsbk1EQXlzREFZTS9nQmlUNW9MUUJBd3VESkFNREV3TXJNd05XRUpEbW1zSndnQ0ZlWFpnaEJjamxaTWdGQ3pPaUtPSUZBQjcxQmI4QWVKeTFrakZ1d2tBUVJaK0R3UkF3QnROUVJVR0tROE9kS0NBV1VoQWdLTGhJdUFzVlNwV3o1QmJrajNkRWdZaVVJc3pxV2RwWmUrWjcvd0Ixb0NZbUlvYm9pd2lMVDJXaktsL2pzY3JIZkdnL3BLZE1reWtsQzVaczJMRWZIWXBqY1JvUHptZTlNV1dtazNkV2JLOU9ia1draWtPZXRKNTU0Zld5b0VzbWRTbHQrdVIwcENKUjM0YjZ0L1RWZzFTWTNzWXZkZjh2dWlLcnB5YURYRElTaWVncDE3cDc1NzlHcDNwKyt5N0hQQWlZOXBtVGlibGpycjg1cVNpZHRsZzQrbDI1R0xDYVM4ZTZyUnhOQm1zbkVSdW5LYmFPT2JSejdONzJqdTV2ZEFqWXBCWEhnSnlsT0FWc01zZURBUEVQOExZb1VIaWNZMkJpQUFFZmhpQUdKZ1pXQmdaN1JuRlJkblZKRUxDUWxCU1JsQVRKTW9MVjJESzRnbFNZczZ1YnE1dmJLckpMU2JHcmdFbW92RHVESlZoZTNWemNYRndOTENPSUxCL0M0SXVRMXhUbjVGUGlsQlRqNUZQbUJBQjRXd29xQUhpY1kyQmtZR0FBNHNrMXNSL2orVzIrTW5BenBEQmdBeUVNUVVDU2c0RUp4QUVBd1VnRkhnQjRuR05nWkdCZ1NHRmdnSk1oREl3TXFFQVlBQnlIQVRKNG5HTmdBSUlVTkV3bUFBQmwzQUdSZUp4allBQUNJUVlsQmlNR0ozd1FBRWNRQkVWNG5HTmdaR0JnRUdaZ1kyQmlBQUVReVFXRURBei93WHdHQUFzUEFUSUFBSGljWGRCTlNzTkFIQVh3bDM1aUEwVVFYWW5NU2hmUzlHUFpBN1Q3TGdJdTAzU1Nwa3d6WVRJdDFCTjRBay9nS1R5QWVDeGZ3MzlqWmtqeW16Y3ZBd21BVy93Z3dIVUVHRGIzNitqUVEzR1hHb3Q3OUwyNGp4Q1A0Z0h6Ri9FSXI0akVJZTd3eGhPQzNnMlRNWXk0UTcrTHUvU0h1RWQvaXZ0NHdKZDR3UHhiUEVLTVgzR0k1K0RKRkdhU240cU56azhtY2JLU1I2eGRYZGhTemFPWkpHdGRhcGQ0dlZQYmk2clArY0w3VEdYT0h0WEtsbDRiWTFYbDdFR25QdHA3WHkybjAwenlLTFZIZmtIQmE0SWNKMm9EM2NnZ2dXdnQvVi9GYkRyVWxFVUpoVG4vMGF6VldiTlROcjBFbnM4ZGUxdGNlSzl4Wm1mQjFDUGpPbVBINGtpdG12T3ViY05wbVZUTjNvRkp5anpDdm5tcndoSlR6cXpWajlqaVNYOTExRmplQUFCNG5HM0hNUktDTUJCQTBmMGdpaUtpNERVOGswVjJHV2JJWkRPaDRQb1dXdnE2SjVWOElmOU5WTlFjYURoeW91WE1oWTRyUFRjRzdqd1ltWGhLcThXeitwNzYyYU5hZVlYb20ybjNtMmRMVFZnc3JDZ0ZKN09UbUlrWWJ3SWJDNnZJQjdXbUZmQUFBQT09XCIpIGZvcm1hdChcIndvZmZcIil9QG1lZGlhIChwb2ludGVyOmNvYXJzZSl7LmxpbC1ndWkuYWxsb3ctdG91Y2gtc3R5bGVzey0td2lkZ2V0LWhlaWdodDoyOHB4Oy0tcGFkZGluZzo2cHg7LS1zcGFjaW5nOjZweDstLWZvbnQtc2l6ZToxM3B4Oy0taW5wdXQtZm9udC1zaXplOjE2cHg7LS1mb2xkZXItaW5kZW50OjEwcHg7LS1zY3JvbGxiYXItd2lkdGg6N3B4Oy0tc2xpZGVyLWlucHV0LW1pbi13aWR0aDo1MHB4Oy0tY29sb3ItaW5wdXQtbWluLXdpZHRoOjY1cHh9fUBtZWRpYSAoaG92ZXI6aG92ZXIpey5saWwtZ3VpIC5jb250cm9sbGVyLmNvbG9yIC5kaXNwbGF5OmhvdmVyOmJlZm9yZXtib3JkZXI6MXB4IHNvbGlkICNmZmY5O2JvcmRlci1yYWRpdXM6dmFyKC0td2lkZ2V0LWJvcmRlci1yYWRpdXMpO2JvdHRvbTowO2NvbnRlbnQ6XCIgXCI7ZGlzcGxheTpibG9jaztsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MH0ubGlsLWd1aSAuY29udHJvbGxlci5vcHRpb24gLmRpc3BsYXkuZm9jdXN7YmFja2dyb3VuZDp2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIC53aWRnZXQ6aG92ZXIgLmRpc3BsYXl7YmFja2dyb3VuZDp2YXIoLS1ob3Zlci1jb2xvcil9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyIC5zbGlkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ob3Zlci1jb2xvcil9Ym9keTpub3QoLmxpbC1ndWktZHJhZ2dpbmcpIC5saWwtZ3VpIC50aXRsZTpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLXRpdGxlLWJhY2tncm91bmQtY29sb3IpO29wYWNpdHk6Ljg1fS5saWwtZ3VpIC50aXRsZTpmb2N1c3t0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIHZhcigtLWZvY3VzLWNvbG9yKX0ubGlsLWd1aSBpbnB1dDpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWhvdmVyLWNvbG9yKX0ubGlsLWd1aSBpbnB1dDphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgaW5wdXRbdHlwZT1jaGVja2JveF06Zm9jdXN7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggdmFyKC0tZm9jdXMtY29sb3IpfS5saWwtZ3VpIGJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWhvdmVyLWNvbG9yKTtib3JkZXItY29sb3I6dmFyKC0taG92ZXItY29sb3IpfS5saWwtZ3VpIGJ1dHRvbjpmb2N1c3tib3JkZXItY29sb3I6dmFyKC0tZm9jdXMtY29sb3IpfX0nKSxwPSEwKSxlP2UuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTppJiYodGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhdXRvUGxhY2VcIiksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpKSxzJiZ0aGlzLmRvbUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdpZHRoXCIscytcInB4XCIpLHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQ9PnQuc3RvcFByb3BhZ2F0aW9uKCkpLHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0PT50LnN0b3BQcm9wYWdhdGlvbigpKX1hZGQodCxlLHMsbixyKXtpZihPYmplY3Qocyk9PT1zKXJldHVybiBuZXcgYyh0aGlzLHQsZSxzKTtjb25zdCBsPXRbZV07c3dpdGNoKHR5cGVvZiBsKXtjYXNlXCJudW1iZXJcIjpyZXR1cm4gbmV3IGQodGhpcyx0LGUscyxuLHIpO2Nhc2VcImJvb2xlYW5cIjpyZXR1cm4gbmV3IGkodGhpcyx0LGUpO2Nhc2VcInN0cmluZ1wiOnJldHVybiBuZXcgdSh0aGlzLHQsZSk7Y2FzZVwiZnVuY3Rpb25cIjpyZXR1cm4gbmV3IGgodGhpcyx0LGUpfWNvbnNvbGUuZXJyb3IoXCJndWkuYWRkIGZhaWxlZFxcblxcdHByb3BlcnR5OlwiLGUsXCJcXG5cXHRvYmplY3Q6XCIsdCxcIlxcblxcdHZhbHVlOlwiLGwpfWFkZENvbG9yKHQsaSxlPTEpe3JldHVybiBuZXcgYSh0aGlzLHQsaSxlKX1hZGRGb2xkZXIodCl7cmV0dXJuIG5ldyBnKHtwYXJlbnQ6dGhpcyx0aXRsZTp0fSl9bG9hZCh0LGk9ITApe3JldHVybiB0LmNvbnRyb2xsZXJzJiZ0aGlzLmNvbnRyb2xsZXJzLmZvckVhY2goaT0+e2kgaW5zdGFuY2VvZiBofHxpLl9uYW1lIGluIHQuY29udHJvbGxlcnMmJmkubG9hZCh0LmNvbnRyb2xsZXJzW2kuX25hbWVdKX0pLGkmJnQuZm9sZGVycyYmdGhpcy5mb2xkZXJzLmZvckVhY2goaT0+e2kuX3RpdGxlIGluIHQuZm9sZGVycyYmaS5sb2FkKHQuZm9sZGVyc1tpLl90aXRsZV0pfSksdGhpc31zYXZlKHQ9ITApe2NvbnN0IGk9e2NvbnRyb2xsZXJzOnt9LGZvbGRlcnM6e319O3JldHVybiB0aGlzLmNvbnRyb2xsZXJzLmZvckVhY2godD0+e2lmKCEodCBpbnN0YW5jZW9mIGgpKXtpZih0Ll9uYW1lIGluIGkuY29udHJvbGxlcnMpdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc2F2ZSBHVUkgd2l0aCBkdXBsaWNhdGUgcHJvcGVydHkgXCIke3QuX25hbWV9XCJgKTtpLmNvbnRyb2xsZXJzW3QuX25hbWVdPXQuc2F2ZSgpfX0pLHQmJnRoaXMuZm9sZGVycy5mb3JFYWNoKHQ9PntpZih0Ll90aXRsZSBpbiBpLmZvbGRlcnMpdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc2F2ZSBHVUkgd2l0aCBkdXBsaWNhdGUgZm9sZGVyIFwiJHt0Ll90aXRsZX1cImApO2kuZm9sZGVyc1t0Ll90aXRsZV09dC5zYXZlKCl9KSxpfW9wZW4odD0hMCl7cmV0dXJuIHRoaXMuX2Nsb3NlZD0hdCx0aGlzLiR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIXRoaXMuX2Nsb3NlZCksdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZWRcIix0aGlzLl9jbG9zZWQpLHRoaXN9Y2xvc2UoKXtyZXR1cm4gdGhpcy5vcGVuKCExKX1zaG93KHQ9ITApe3JldHVybiB0aGlzLl9oaWRkZW49IXQsdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXk9dGhpcy5faGlkZGVuP1wibm9uZVwiOlwiXCIsdGhpc31oaWRlKCl7cmV0dXJuIHRoaXMuc2hvdyghMSl9b3BlbkFuaW1hdGVkKHQ9ITApe3JldHVybiB0aGlzLl9jbG9zZWQ9IXQsdGhpcy4kdGl0bGUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCF0aGlzLl9jbG9zZWQpLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e2NvbnN0IGk9dGhpcy4kY2hpbGRyZW4uY2xpZW50SGVpZ2h0O3RoaXMuJGNoaWxkcmVuLnN0eWxlLmhlaWdodD1pK1wicHhcIix0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb25cIik7Y29uc3QgZT10PT57dC50YXJnZXQ9PT10aGlzLiRjaGlsZHJlbiYmKHRoaXMuJGNoaWxkcmVuLnN0eWxlLmhlaWdodD1cIlwiLHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNpdGlvblwiKSx0aGlzLiRjaGlsZHJlbi5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLGUpKX07dGhpcy4kY2hpbGRyZW4uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIixlKTtjb25zdCBzPXQ/dGhpcy4kY2hpbGRyZW4uc2Nyb2xsSGVpZ2h0OjA7dGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZWRcIiwhdCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57dGhpcy4kY2hpbGRyZW4uc3R5bGUuaGVpZ2h0PXMrXCJweFwifSl9KSx0aGlzfXRpdGxlKHQpe3JldHVybiB0aGlzLl90aXRsZT10LHRoaXMuJHRpdGxlLmlubmVySFRNTD10LHRoaXN9cmVzZXQodD0hMCl7cmV0dXJuKHQ/dGhpcy5jb250cm9sbGVyc1JlY3Vyc2l2ZSgpOnRoaXMuY29udHJvbGxlcnMpLmZvckVhY2godD0+dC5yZXNldCgpKSx0aGlzfW9uQ2hhbmdlKHQpe3JldHVybiB0aGlzLl9vbkNoYW5nZT10LHRoaXN9X2NhbGxPbkNoYW5nZSh0KXt0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQuX2NhbGxPbkNoYW5nZSh0KSx2b2lkIDAhPT10aGlzLl9vbkNoYW5nZSYmdGhpcy5fb25DaGFuZ2UuY2FsbCh0aGlzLHtvYmplY3Q6dC5vYmplY3QscHJvcGVydHk6dC5wcm9wZXJ0eSx2YWx1ZTp0LmdldFZhbHVlKCksY29udHJvbGxlcjp0fSl9b25GaW5pc2hDaGFuZ2UodCl7cmV0dXJuIHRoaXMuX29uRmluaXNoQ2hhbmdlPXQsdGhpc31fY2FsbE9uRmluaXNoQ2hhbmdlKHQpe3RoaXMucGFyZW50JiZ0aGlzLnBhcmVudC5fY2FsbE9uRmluaXNoQ2hhbmdlKHQpLHZvaWQgMCE9PXRoaXMuX29uRmluaXNoQ2hhbmdlJiZ0aGlzLl9vbkZpbmlzaENoYW5nZS5jYWxsKHRoaXMse29iamVjdDp0Lm9iamVjdCxwcm9wZXJ0eTp0LnByb3BlcnR5LHZhbHVlOnQuZ2V0VmFsdWUoKSxjb250cm9sbGVyOnR9KX1kZXN0cm95KCl7dGhpcy5wYXJlbnQmJih0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UodGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKSwxKSx0aGlzLnBhcmVudC5mb2xkZXJzLnNwbGljZSh0aGlzLnBhcmVudC5mb2xkZXJzLmluZGV4T2YodGhpcyksMSkpLHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50JiZ0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpLEFycmF5LmZyb20odGhpcy5jaGlsZHJlbikuZm9yRWFjaCh0PT50LmRlc3Ryb3koKSl9Y29udHJvbGxlcnNSZWN1cnNpdmUoKXtsZXQgdD1BcnJheS5mcm9tKHRoaXMuY29udHJvbGxlcnMpO3JldHVybiB0aGlzLmZvbGRlcnMuZm9yRWFjaChpPT57dD10LmNvbmNhdChpLmNvbnRyb2xsZXJzUmVjdXJzaXZlKCkpfSksdH1mb2xkZXJzUmVjdXJzaXZlKCl7bGV0IHQ9QXJyYXkuZnJvbSh0aGlzLmZvbGRlcnMpO3JldHVybiB0aGlzLmZvbGRlcnMuZm9yRWFjaChpPT57dD10LmNvbmNhdChpLmZvbGRlcnNSZWN1cnNpdmUoKSl9KSx0fX1leHBvcnQgZGVmYXVsdCBnO2V4cG9ydHtpIGFzIEJvb2xlYW5Db250cm9sbGVyLGEgYXMgQ29sb3JDb250cm9sbGVyLHQgYXMgQ29udHJvbGxlcixoIGFzIEZ1bmN0aW9uQ29udHJvbGxlcixnIGFzIEdVSSxkIGFzIE51bWJlckNvbnRyb2xsZXIsYyBhcyBPcHRpb25Db250cm9sbGVyLHUgYXMgU3RyaW5nQ29udHJvbGxlcn07XG4iLCJ2YXIgU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG5cblx0dmFyIG1vZGUgPSAwO1xuXG5cdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTowLjk7ei1pbmRleDoxMDAwMCc7XG5cdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRzaG93UGFuZWwoICsrIG1vZGUgJSBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoICk7XG5cblx0fSwgZmFsc2UgKTtcblxuXHQvL1xuXG5cdGZ1bmN0aW9uIGFkZFBhbmVsKCBwYW5lbCApIHtcblxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCggcGFuZWwuZG9tICk7XG5cdFx0cmV0dXJuIHBhbmVsO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBzaG93UGFuZWwoIGlkICkge1xuXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29udGFpbmVyLmNoaWxkcmVuWyBpIF0uc3R5bGUuZGlzcGxheSA9IGkgPT09IGlkID8gJ2Jsb2NrJyA6ICdub25lJztcblxuXHRcdH1cblxuXHRcdG1vZGUgPSBpZDtcblxuXHR9XG5cblx0Ly9cblxuXHR2YXIgYmVnaW5UaW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCksIHByZXZUaW1lID0gYmVnaW5UaW1lLCBmcmFtZXMgPSAwO1xuXG5cdHZhciBmcHNQYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdGUFMnLCAnIzBmZicsICcjMDAyJyApICk7XG5cdHZhciBtc1BhbmVsID0gYWRkUGFuZWwoIG5ldyBTdGF0cy5QYW5lbCggJ01TJywgJyMwZjAnLCAnIzAyMCcgKSApO1xuXG5cdGlmICggc2VsZi5wZXJmb3JtYW5jZSAmJiBzZWxmLnBlcmZvcm1hbmNlLm1lbW9yeSApIHtcblxuXHRcdHZhciBtZW1QYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdNQicsICcjZjA4JywgJyMyMDEnICkgKTtcblxuXHR9XG5cblx0c2hvd1BhbmVsKCAwICk7XG5cblx0cmV0dXJuIHtcblxuXHRcdFJFVklTSU9OOiAxNixcblxuXHRcdGRvbTogY29udGFpbmVyLFxuXG5cdFx0YWRkUGFuZWw6IGFkZFBhbmVsLFxuXHRcdHNob3dQYW5lbDogc2hvd1BhbmVsLFxuXG5cdFx0YmVnaW46IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0YmVnaW5UaW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCk7XG5cblx0XHR9LFxuXG5cdFx0ZW5kOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGZyYW1lcyArKztcblxuXHRcdFx0dmFyIHRpbWUgPSAoIHBlcmZvcm1hbmNlIHx8IERhdGUgKS5ub3coKTtcblxuXHRcdFx0bXNQYW5lbC51cGRhdGUoIHRpbWUgLSBiZWdpblRpbWUsIDIwMCApO1xuXG5cdFx0XHRpZiAoIHRpbWUgPj0gcHJldlRpbWUgKyAxMDAwICkge1xuXG5cdFx0XHRcdGZwc1BhbmVsLnVwZGF0ZSggKCBmcmFtZXMgKiAxMDAwICkgLyAoIHRpbWUgLSBwcmV2VGltZSApLCAxMDAgKTtcblxuXHRcdFx0XHRwcmV2VGltZSA9IHRpbWU7XG5cdFx0XHRcdGZyYW1lcyA9IDA7XG5cblx0XHRcdFx0aWYgKCBtZW1QYW5lbCApIHtcblxuXHRcdFx0XHRcdHZhciBtZW1vcnkgPSBwZXJmb3JtYW5jZS5tZW1vcnk7XG5cdFx0XHRcdFx0bWVtUGFuZWwudXBkYXRlKCBtZW1vcnkudXNlZEpTSGVhcFNpemUgLyAxMDQ4NTc2LCBtZW1vcnkuanNIZWFwU2l6ZUxpbWl0IC8gMTA0ODU3NiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGltZTtcblxuXHRcdH0sXG5cblx0XHR1cGRhdGU6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0YmVnaW5UaW1lID0gdGhpcy5lbmQoKTtcblxuXHRcdH0sXG5cblx0XHQvLyBCYWNrd2FyZHMgQ29tcGF0aWJpbGl0eVxuXG5cdFx0ZG9tRWxlbWVudDogY29udGFpbmVyLFxuXHRcdHNldE1vZGU6IHNob3dQYW5lbFxuXG5cdH07XG5cbn07XG5cblN0YXRzLlBhbmVsID0gZnVuY3Rpb24gKCBuYW1lLCBmZywgYmcgKSB7XG5cblx0dmFyIG1pbiA9IEluZmluaXR5LCBtYXggPSAwLCByb3VuZCA9IE1hdGgucm91bmQ7XG5cdHZhciBQUiA9IHJvdW5kKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxICk7XG5cblx0dmFyIFdJRFRIID0gODAgKiBQUiwgSEVJR0hUID0gNDggKiBQUixcblx0XHRURVhUX1ggPSAzICogUFIsIFRFWFRfWSA9IDIgKiBQUixcblx0XHRHUkFQSF9YID0gMyAqIFBSLCBHUkFQSF9ZID0gMTUgKiBQUixcblx0XHRHUkFQSF9XSURUSCA9IDc0ICogUFIsIEdSQVBIX0hFSUdIVCA9IDMwICogUFI7XG5cblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XG5cdGNhbnZhcy53aWR0aCA9IFdJRFRIO1xuXHRjYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xuXHRjYW52YXMuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDo4MHB4O2hlaWdodDo0OHB4JztcblxuXHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XG5cdGNvbnRleHQuZm9udCA9ICdib2xkICcgKyAoIDkgKiBQUiApICsgJ3B4IEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJztcblx0Y29udGV4dC50ZXh0QmFzZWxpbmUgPSAndG9wJztcblxuXHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRjb250ZXh0LmZpbGxSZWN0KCAwLCAwLCBXSURUSCwgSEVJR0hUICk7XG5cblx0Y29udGV4dC5maWxsU3R5bGUgPSBmZztcblx0Y29udGV4dC5maWxsVGV4dCggbmFtZSwgVEVYVF9YLCBURVhUX1kgKTtcblx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCwgR1JBUEhfWSwgR1JBUEhfV0lEVEgsIEdSQVBIX0hFSUdIVCApO1xuXG5cdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjk7XG5cdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1gsIEdSQVBIX1ksIEdSQVBIX1dJRFRILCBHUkFQSF9IRUlHSFQgKTtcblxuXHRyZXR1cm4ge1xuXG5cdFx0ZG9tOiBjYW52YXMsXG5cblx0XHR1cGRhdGU6IGZ1bmN0aW9uICggdmFsdWUsIG1heFZhbHVlICkge1xuXG5cdFx0XHRtaW4gPSBNYXRoLm1pbiggbWluLCB2YWx1ZSApO1xuXHRcdFx0bWF4ID0gTWF0aC5tYXgoIG1heCwgdmFsdWUgKTtcblxuXHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0XHRcdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRcdFx0Y29udGV4dC5maWxsUmVjdCggMCwgMCwgV0lEVEgsIEdSQVBIX1kgKTtcblx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gZmc7XG5cdFx0XHRjb250ZXh0LmZpbGxUZXh0KCByb3VuZCggdmFsdWUgKSArICcgJyArIG5hbWUgKyAnICgnICsgcm91bmQoIG1pbiApICsgJy0nICsgcm91bmQoIG1heCApICsgJyknLCBURVhUX1gsIFRFWFRfWSApO1xuXG5cdFx0XHRjb250ZXh0LmRyYXdJbWFnZSggY2FudmFzLCBHUkFQSF9YICsgUFIsIEdSQVBIX1ksIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX0hFSUdIVCwgR1JBUEhfWCwgR1JBUEhfWSwgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfSEVJR0hUICk7XG5cblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1ggKyBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9ZLCBQUiwgR1JBUEhfSEVJR0hUICk7XG5cblx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdFx0XHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMC45O1xuXHRcdFx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCArIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX1ksIFBSLCByb3VuZCggKCAxIC0gKCB2YWx1ZSAvIG1heFZhbHVlICkgKSAqIEdSQVBIX0hFSUdIVCApICk7XG5cblx0XHR9XG5cblx0fTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHM7XG4iLCJpbXBvcnQge1xuXHRCYWNrU2lkZSxcblx0Qm94R2VvbWV0cnksXG5cdE1lc2gsXG5cdFNoYWRlck1hdGVyaWFsLFxuXHRVbmlmb3Jtc1V0aWxzLFxuXHRWZWN0b3IzXG59IGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBCYXNlZCBvbiBcIkEgUHJhY3RpY2FsIEFuYWx5dGljIE1vZGVsIGZvciBEYXlsaWdodFwiXG4gKiBha2EgVGhlIFByZWV0aGFtIE1vZGVsLCB0aGUgZGUgZmFjdG8gc3RhbmRhcmQgYW5hbHl0aWMgc2t5ZG9tZSBtb2RlbFxuICogaHR0cHM6Ly93d3cucmVzZWFyY2hnYXRlLm5ldC9wdWJsaWNhdGlvbi8yMjA3MjA0NDNfQV9QcmFjdGljYWxfQW5hbHl0aWNfTW9kZWxfZm9yX0RheWxpZ2h0XG4gKlxuICogRmlyc3QgaW1wbGVtZW50ZWQgYnkgU2ltb24gV2FsbG5lclxuICogaHR0cDovL3NpbW9ud2FsbG5lci5hdC9wcm9qZWN0L2F0bW9zcGhlcmljLXNjYXR0ZXJpbmcvXG4gKlxuICogSW1wcm92ZWQgYnkgTWFydGluIFVwaXRpc1xuICogaHR0cDovL2JsZW5kZXJhcnRpc3RzLm9yZy9mb3J1bS9zaG93dGhyZWFkLnBocD8yNDU5NTQtcHJlZXRoYW1zLXNreS1pbXBlbWVudGF0aW9uLUhEUlxuICpcbiAqIFRocmVlLmpzIGludGVncmF0aW9uIGJ5IHp6ODUgaHR0cDovL3R3aXR0ZXIuY29tL2JsdXJzcGxpbmVcbiovXG5cbmNsYXNzIFNreSBleHRlbmRzIE1lc2gge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0Y29uc3Qgc2hhZGVyID0gU2t5LlNreVNoYWRlcjtcblxuXHRcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKCB7XG5cdFx0XHRuYW1lOiAnU2t5U2hhZGVyJyxcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBzaGFkZXIuZnJhZ21lbnRTaGFkZXIsXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXG5cdFx0XHR1bmlmb3JtczogVW5pZm9ybXNVdGlscy5jbG9uZSggc2hhZGVyLnVuaWZvcm1zICksXG5cdFx0XHRzaWRlOiBCYWNrU2lkZSxcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlXG5cdFx0fSApO1xuXG5cdFx0c3VwZXIoIG5ldyBCb3hHZW9tZXRyeSggMSwgMSwgMSApLCBtYXRlcmlhbCApO1xuXG5cdFx0dGhpcy5pc1NreSA9IHRydWU7XG5cblx0fVxuXG59XG5cblNreS5Ta3lTaGFkZXIgPSB7XG5cblx0dW5pZm9ybXM6IHtcblx0XHQndHVyYmlkaXR5JzogeyB2YWx1ZTogMiB9LFxuXHRcdCdyYXlsZWlnaCc6IHsgdmFsdWU6IDEgfSxcblx0XHQnbWllQ29lZmZpY2llbnQnOiB7IHZhbHVlOiAwLjAwNSB9LFxuXHRcdCdtaWVEaXJlY3Rpb25hbEcnOiB7IHZhbHVlOiAwLjggfSxcblx0XHQnc3VuUG9zaXRpb24nOiB7IHZhbHVlOiBuZXcgVmVjdG9yMygpIH0sXG5cdFx0J3VwJzogeyB2YWx1ZTogbmV3IFZlY3RvcjMoIDAsIDEsIDAgKSB9XG5cdH0sXG5cblx0dmVydGV4U2hhZGVyOiAvKiBnbHNsICovYFxuXHRcdHVuaWZvcm0gdmVjMyBzdW5Qb3NpdGlvbjtcblx0XHR1bmlmb3JtIGZsb2F0IHJheWxlaWdoO1xuXHRcdHVuaWZvcm0gZmxvYXQgdHVyYmlkaXR5O1xuXHRcdHVuaWZvcm0gZmxvYXQgbWllQ29lZmZpY2llbnQ7XG5cdFx0dW5pZm9ybSB2ZWMzIHVwO1xuXG5cdFx0dmFyeWluZyB2ZWMzIHZXb3JsZFBvc2l0aW9uO1xuXHRcdHZhcnlpbmcgdmVjMyB2U3VuRGlyZWN0aW9uO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bmZhZGU7XG5cdFx0dmFyeWluZyB2ZWMzIHZCZXRhUjtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFNO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bkU7XG5cblx0XHQvLyBjb25zdGFudHMgZm9yIGF0bW9zcGhlcmljIHNjYXR0ZXJpbmdcblx0XHRjb25zdCBmbG9hdCBlID0gMi43MTgyODE4Mjg0NTkwNDUyMzUzNjAyODc0NzEzNTI2NjI0OTc3NTcyNDcwOTM2OTk5NTk1Nztcblx0XHRjb25zdCBmbG9hdCBwaSA9IDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NTAyODg0MTk3MTY5O1xuXG5cdFx0Ly8gd2F2ZWxlbmd0aCBvZiB1c2VkIHByaW1hcmllcywgYWNjb3JkaW5nIHRvIHByZWV0aGFtXG5cdFx0Y29uc3QgdmVjMyBsYW1iZGEgPSB2ZWMzKCA2ODBFLTksIDU1MEUtOSwgNDUwRS05ICk7XG5cdFx0Ly8gdGhpcyBwcmUtY2FsY3VhdGlvbiByZXBsYWNlcyBvbGRlciBUb3RhbFJheWxlaWdoKHZlYzMgbGFtYmRhKSBmdW5jdGlvbjpcblx0XHQvLyAoOC4wICogcG93KHBpLCAzLjApICogcG93KHBvdyhuLCAyLjApIC0gMS4wLCAyLjApICogKDYuMCArIDMuMCAqIHBuKSkgLyAoMy4wICogTiAqIHBvdyhsYW1iZGEsIHZlYzMoNC4wKSkgKiAoNi4wIC0gNy4wICogcG4pKVxuXHRcdGNvbnN0IHZlYzMgdG90YWxSYXlsZWlnaCA9IHZlYzMoIDUuODA0NTQyOTk2MjYxMDkzRS02LCAxLjM1NjI5MTE0MTk4NDU2MzVFLTUsIDMuMDI2NTkwMjQ2ODgyNDg3NkUtNSApO1xuXG5cdFx0Ly8gbWllIHN0dWZmXG5cdFx0Ly8gSyBjb2VmZmljaWVudCBmb3IgdGhlIHByaW1hcmllc1xuXHRcdGNvbnN0IGZsb2F0IHYgPSA0LjA7XG5cdFx0Y29uc3QgdmVjMyBLID0gdmVjMyggMC42ODYsIDAuNjc4LCAwLjY2NiApO1xuXHRcdC8vIE1pZUNvbnN0ID0gcGkgKiBwb3coICggMi4wICogcGkgKSAvIGxhbWJkYSwgdmVjMyggdiAtIDIuMCApICkgKiBLXG5cdFx0Y29uc3QgdmVjMyBNaWVDb25zdCA9IHZlYzMoIDEuODM5OTkxODUxNDQzMzk3OEUxNCwgMi43Nzk4MDIzOTE5NjYwNTI4RTE0LCA0LjA3OTA0Nzk1NDM4NjEwOTRFMTQgKTtcblxuXHRcdC8vIGVhcnRoIHNoYWRvdyBoYWNrXG5cdFx0Ly8gY3V0b2ZmQW5nbGUgPSBwaSAvIDEuOTU7XG5cdFx0Y29uc3QgZmxvYXQgY3V0b2ZmQW5nbGUgPSAxLjYxMTA3MzE1NTY4NzA3MzQ7XG5cdFx0Y29uc3QgZmxvYXQgc3RlZXBuZXNzID0gMS41O1xuXHRcdGNvbnN0IGZsb2F0IEVFID0gMTAwMC4wO1xuXG5cdFx0ZmxvYXQgc3VuSW50ZW5zaXR5KCBmbG9hdCB6ZW5pdGhBbmdsZUNvcyApIHtcblx0XHRcdHplbml0aEFuZ2xlQ29zID0gY2xhbXAoIHplbml0aEFuZ2xlQ29zLCAtMS4wLCAxLjAgKTtcblx0XHRcdHJldHVybiBFRSAqIG1heCggMC4wLCAxLjAgLSBwb3coIGUsIC0oICggY3V0b2ZmQW5nbGUgLSBhY29zKCB6ZW5pdGhBbmdsZUNvcyApICkgLyBzdGVlcG5lc3MgKSApICk7XG5cdFx0fVxuXG5cdFx0dmVjMyB0b3RhbE1pZSggZmxvYXQgVCApIHtcblx0XHRcdGZsb2F0IGMgPSAoIDAuMiAqIFQgKSAqIDEwRS0xODtcblx0XHRcdHJldHVybiAwLjQzNCAqIGMgKiBNaWVDb25zdDtcblx0XHR9XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cblx0XHRcdHZlYzQgd29ybGRQb3NpdGlvbiA9IG1vZGVsTWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xuXHRcdFx0dldvcmxkUG9zaXRpb24gPSB3b3JsZFBvc2l0aW9uLnh5ejtcblxuXHRcdFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xuXHRcdFx0Z2xfUG9zaXRpb24ueiA9IGdsX1Bvc2l0aW9uLnc7IC8vIHNldCB6IHRvIGNhbWVyYS5mYXJcblxuXHRcdFx0dlN1bkRpcmVjdGlvbiA9IG5vcm1hbGl6ZSggc3VuUG9zaXRpb24gKTtcblxuXHRcdFx0dlN1bkUgPSBzdW5JbnRlbnNpdHkoIGRvdCggdlN1bkRpcmVjdGlvbiwgdXAgKSApO1xuXG5cdFx0XHR2U3VuZmFkZSA9IDEuMCAtIGNsYW1wKCAxLjAgLSBleHAoICggc3VuUG9zaXRpb24ueSAvIDQ1MDAwMC4wICkgKSwgMC4wLCAxLjAgKTtcblxuXHRcdFx0ZmxvYXQgcmF5bGVpZ2hDb2VmZmljaWVudCA9IHJheWxlaWdoIC0gKCAxLjAgKiAoIDEuMCAtIHZTdW5mYWRlICkgKTtcblxuXHRcdFx0Ly8gZXh0aW5jdGlvbiAoYWJzb3JidGlvbiArIG91dCBzY2F0dGVyaW5nKVxuXHRcdFx0Ly8gcmF5bGVpZ2ggY29lZmZpY2llbnRzXG5cdFx0XHR2QmV0YVIgPSB0b3RhbFJheWxlaWdoICogcmF5bGVpZ2hDb2VmZmljaWVudDtcblxuXHRcdFx0Ly8gbWllIGNvZWZmaWNpZW50c1xuXHRcdFx0dkJldGFNID0gdG90YWxNaWUoIHR1cmJpZGl0eSApICogbWllQ29lZmZpY2llbnQ7XG5cblx0XHR9YCxcblxuXHRmcmFnbWVudFNoYWRlcjogLyogZ2xzbCAqL2Bcblx0XHR2YXJ5aW5nIHZlYzMgdldvcmxkUG9zaXRpb247XG5cdFx0dmFyeWluZyB2ZWMzIHZTdW5EaXJlY3Rpb247XG5cdFx0dmFyeWluZyBmbG9hdCB2U3VuZmFkZTtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFSO1xuXHRcdHZhcnlpbmcgdmVjMyB2QmV0YU07XG5cdFx0dmFyeWluZyBmbG9hdCB2U3VuRTtcblxuXHRcdHVuaWZvcm0gZmxvYXQgbWllRGlyZWN0aW9uYWxHO1xuXHRcdHVuaWZvcm0gdmVjMyB1cDtcblxuXHRcdGNvbnN0IHZlYzMgY2FtZXJhUG9zID0gdmVjMyggMC4wLCAwLjAsIDAuMCApO1xuXG5cdFx0Ly8gY29uc3RhbnRzIGZvciBhdG1vc3BoZXJpYyBzY2F0dGVyaW5nXG5cdFx0Y29uc3QgZmxvYXQgcGkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTUwMjg4NDE5NzE2OTtcblxuXHRcdGNvbnN0IGZsb2F0IG4gPSAxLjAwMDM7IC8vIHJlZnJhY3RpdmUgaW5kZXggb2YgYWlyXG5cdFx0Y29uc3QgZmxvYXQgTiA9IDIuNTQ1RTI1OyAvLyBudW1iZXIgb2YgbW9sZWN1bGVzIHBlciB1bml0IHZvbHVtZSBmb3IgYWlyIGF0IDI4OC4xNUsgYW5kIDEwMTNtYiAoc2VhIGxldmVsIC00NSBjZWxzaXVzKVxuXG5cdFx0Ly8gb3B0aWNhbCBsZW5ndGggYXQgemVuaXRoIGZvciBtb2xlY3VsZXNcblx0XHRjb25zdCBmbG9hdCByYXlsZWlnaFplbml0aExlbmd0aCA9IDguNEUzO1xuXHRcdGNvbnN0IGZsb2F0IG1pZVplbml0aExlbmd0aCA9IDEuMjVFMztcblx0XHQvLyA2NiBhcmMgc2Vjb25kcyAtPiBkZWdyZWVzLCBhbmQgdGhlIGNvc2luZSBvZiB0aGF0XG5cdFx0Y29uc3QgZmxvYXQgc3VuQW5ndWxhckRpYW1ldGVyQ29zID0gMC45OTk5NTY2NzY5NDY0NDg0NDM1NTM1NzQ2MTk5MDY5NzY0Nzg5MjY4NDg2OTI4NzM5MDA4NTkzMjQ7XG5cblx0XHQvLyAzLjAgLyAoIDE2LjAgKiBwaSApXG5cdFx0Y29uc3QgZmxvYXQgVEhSRUVfT1ZFUl9TSVhURUVOUEkgPSAwLjA1OTY4MzEwMzY1OTQ2MDc1O1xuXHRcdC8vIDEuMCAvICggNC4wICogcGkgKVxuXHRcdGNvbnN0IGZsb2F0IE9ORV9PVkVSX0ZPVVJQSSA9IDAuMDc5NTc3NDcxNTQ1OTQ3Njc7XG5cblx0XHRmbG9hdCByYXlsZWlnaFBoYXNlKCBmbG9hdCBjb3NUaGV0YSApIHtcblx0XHRcdHJldHVybiBUSFJFRV9PVkVSX1NJWFRFRU5QSSAqICggMS4wICsgcG93KCBjb3NUaGV0YSwgMi4wICkgKTtcblx0XHR9XG5cblx0XHRmbG9hdCBoZ1BoYXNlKCBmbG9hdCBjb3NUaGV0YSwgZmxvYXQgZyApIHtcblx0XHRcdGZsb2F0IGcyID0gcG93KCBnLCAyLjAgKTtcblx0XHRcdGZsb2F0IGludmVyc2UgPSAxLjAgLyBwb3coIDEuMCAtIDIuMCAqIGcgKiBjb3NUaGV0YSArIGcyLCAxLjUgKTtcblx0XHRcdHJldHVybiBPTkVfT1ZFUl9GT1VSUEkgKiAoICggMS4wIC0gZzIgKSAqIGludmVyc2UgKTtcblx0XHR9XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cblx0XHRcdHZlYzMgZGlyZWN0aW9uID0gbm9ybWFsaXplKCB2V29ybGRQb3NpdGlvbiAtIGNhbWVyYVBvcyApO1xuXG5cdFx0XHQvLyBvcHRpY2FsIGxlbmd0aFxuXHRcdFx0Ly8gY3V0b2ZmIGFuZ2xlIGF0IDkwIHRvIGF2b2lkIHNpbmd1bGFyaXR5IGluIG5leHQgZm9ybXVsYS5cblx0XHRcdGZsb2F0IHplbml0aEFuZ2xlID0gYWNvcyggbWF4KCAwLjAsIGRvdCggdXAsIGRpcmVjdGlvbiApICkgKTtcblx0XHRcdGZsb2F0IGludmVyc2UgPSAxLjAgLyAoIGNvcyggemVuaXRoQW5nbGUgKSArIDAuMTUgKiBwb3coIDkzLjg4NSAtICggKCB6ZW5pdGhBbmdsZSAqIDE4MC4wICkgLyBwaSApLCAtMS4yNTMgKSApO1xuXHRcdFx0ZmxvYXQgc1IgPSByYXlsZWlnaFplbml0aExlbmd0aCAqIGludmVyc2U7XG5cdFx0XHRmbG9hdCBzTSA9IG1pZVplbml0aExlbmd0aCAqIGludmVyc2U7XG5cblx0XHRcdC8vIGNvbWJpbmVkIGV4dGluY3Rpb24gZmFjdG9yXG5cdFx0XHR2ZWMzIEZleCA9IGV4cCggLSggdkJldGFSICogc1IgKyB2QmV0YU0gKiBzTSApICk7XG5cblx0XHRcdC8vIGluIHNjYXR0ZXJpbmdcblx0XHRcdGZsb2F0IGNvc1RoZXRhID0gZG90KCBkaXJlY3Rpb24sIHZTdW5EaXJlY3Rpb24gKTtcblxuXHRcdFx0ZmxvYXQgclBoYXNlID0gcmF5bGVpZ2hQaGFzZSggY29zVGhldGEgKiAwLjUgKyAwLjUgKTtcblx0XHRcdHZlYzMgYmV0YVJUaGV0YSA9IHZCZXRhUiAqIHJQaGFzZTtcblxuXHRcdFx0ZmxvYXQgbVBoYXNlID0gaGdQaGFzZSggY29zVGhldGEsIG1pZURpcmVjdGlvbmFsRyApO1xuXHRcdFx0dmVjMyBiZXRhTVRoZXRhID0gdkJldGFNICogbVBoYXNlO1xuXG5cdFx0XHR2ZWMzIExpbiA9IHBvdyggdlN1bkUgKiAoICggYmV0YVJUaGV0YSArIGJldGFNVGhldGEgKSAvICggdkJldGFSICsgdkJldGFNICkgKSAqICggMS4wIC0gRmV4ICksIHZlYzMoIDEuNSApICk7XG5cdFx0XHRMaW4gKj0gbWl4KCB2ZWMzKCAxLjAgKSwgcG93KCB2U3VuRSAqICggKCBiZXRhUlRoZXRhICsgYmV0YU1UaGV0YSApIC8gKCB2QmV0YVIgKyB2QmV0YU0gKSApICogRmV4LCB2ZWMzKCAxLjAgLyAyLjAgKSApLCBjbGFtcCggcG93KCAxLjAgLSBkb3QoIHVwLCB2U3VuRGlyZWN0aW9uICksIDUuMCApLCAwLjAsIDEuMCApICk7XG5cblx0XHRcdC8vIG5pZ2h0c2t5XG5cdFx0XHRmbG9hdCB0aGV0YSA9IGFjb3MoIGRpcmVjdGlvbi55ICk7IC8vIGVsZXZhdGlvbiAtLT4geS1heGlzLCBbLXBpLzIsIHBpLzJdXG5cdFx0XHRmbG9hdCBwaGkgPSBhdGFuKCBkaXJlY3Rpb24ueiwgZGlyZWN0aW9uLnggKTsgLy8gYXppbXV0aCAtLT4geC1heGlzIFstcGkvMiwgcGkvMl1cblx0XHRcdHZlYzIgdXYgPSB2ZWMyKCBwaGksIHRoZXRhICkgLyB2ZWMyKCAyLjAgKiBwaSwgcGkgKSArIHZlYzIoIDAuNSwgMC4wICk7XG5cdFx0XHR2ZWMzIEwwID0gdmVjMyggMC4xICkgKiBGZXg7XG5cblx0XHRcdC8vIGNvbXBvc2l0aW9uICsgc29sYXIgZGlzY1xuXHRcdFx0ZmxvYXQgc3VuZGlzayA9IHNtb290aHN0ZXAoIHN1bkFuZ3VsYXJEaWFtZXRlckNvcywgc3VuQW5ndWxhckRpYW1ldGVyQ29zICsgMC4wMDAwMiwgY29zVGhldGEgKTtcblx0XHRcdEwwICs9ICggdlN1bkUgKiAxOTAwMC4wICogRmV4ICkgKiBzdW5kaXNrO1xuXG5cdFx0XHR2ZWMzIHRleENvbG9yID0gKCBMaW4gKyBMMCApICogMC4wNCArIHZlYzMoIDAuMCwgMC4wMDAzLCAwLjAwMDc1ICk7XG5cblx0XHRcdHZlYzMgcmV0Q29sb3IgPSBwb3coIHRleENvbG9yLCB2ZWMzKCAxLjAgLyAoIDEuMiArICggMS4yICogdlN1bmZhZGUgKSApICkgKTtcblxuXHRcdFx0Z2xfRnJhZ0NvbG9yID0gdmVjNCggcmV0Q29sb3IsIDEuMCApO1xuXG5cdFx0XHQjaW5jbHVkZSA8dG9uZW1hcHBpbmdfZnJhZ21lbnQ+XG5cdFx0XHQjaW5jbHVkZSA8ZW5jb2RpbmdzX2ZyYWdtZW50PlxuXG5cdFx0fWBcblxufTtcblxuZXhwb3J0IHsgU2t5IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=