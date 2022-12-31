"use strict";
(self["webpackChunkminecraft_clone"] = self["webpackChunkminecraft_clone"] || []).push([["threeDpack"],{

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/Block.js":
/*!*************************!*\
  !*** ./src/js/Block.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Block": () => (/* binding */ Block),
/* harmony export */   "BlockMap": () => (/* binding */ BlockMap),
/* harmony export */   "BlockMaterials": () => (/* binding */ BlockMaterials)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage.js */ "./src/js/Storage.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");



class BlockMap {
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
    var loader = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader();

    this.dirtMat = [
      "/assets/texture/dirt/dirt.png",
      "/assets/texture/dirt/dirt.png",
      "/assets/texture/dirt/dirt.png",
      "/assets/texture/dirt/dirt.png",
      "/assets/texture/dirt/dirt.png",
      "/assets/texture/dirt/dirt.png",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
      });
    });
    this.cobblestoneMat = [
      "/assets/texture/cobblestone/cobblestone.png",
      "/assets/texture/cobblestone/cobblestone.png",
      "/assets/texture/cobblestone/cobblestone.png",
      "/assets/texture/cobblestone/cobblestone.png",
      "/assets/texture/cobblestone/cobblestone.png",
      "/assets/texture/cobblestone/cobblestone.png",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
      });
    });
    this.oakLogMat = [
      "/assets/texture/oakLog/side.png",
      "/assets/texture/oakLog/side.png",
      "/assets/texture/oakLog/top.jpg",
      "/assets/texture/oakLog/bottom.jpg",
      "/assets/texture/oakLog/side.png",
      "/assets/texture/oakLog/side.png",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
      });
    });
    this.oakLeavesMat = [
      "/assets/texture/oakLeaves/oakLeaves.png",
      "/assets/texture/oakLeaves/oakLeaves.png",
      "/assets/texture/oakLeaves/oakLeaves.png",
      "/assets/texture/oakLeaves/oakLeaves.png",
      "/assets/texture/oakLeaves/oakLeaves.png",
      "/assets/texture/oakLeaves/oakLeaves.png",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
      });
    });
    this.sandMat = [
      "/assets/texture/sand/sand.png",
      "/assets/texture/sand/sand.png",
      "/assets/texture/sand/sand.png",
      "/assets/texture/sand/sand.png",
      "/assets/texture/sand/sand.png",
      "/assets/texture/sand/sand.png",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
      });
    });
    this.waterMat = [
      "/assets/texture/water/water.jpeg",
      "/assets/texture/water/water.jpeg",
      "/assets/texture/water/water.jpeg",
      "/assets/texture/water/water.jpeg",
      "/assets/texture/water/water.jpeg",
      "/assets/texture/water/water.jpeg",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
      });
    });
    this.grassMat = [
      "/assets/texture/grass/side.jpg",
      "/assets/texture/grass/side.jpg",
      "/assets/texture/grass/top.jpg",
      "/assets/texture/grass/bottom.jpg",
      "/assets/texture/grass/side.jpg",
      "/assets/texture/grass/side.jpg",
    ].map((pic) => {
      return new three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
      });
    });

    this.textureOpacity();
    //this.textureImagesLoader("/assets/texture/grass");
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

class Block {
  constructor() {
    var blockGoem = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(1, 1, 1);
    var blockMaterials = new BlockMaterials();
    var renderDistance = 4;
    var chunkSize = 10;
    var depth = 5;

    this.blockGoem = blockGoem;
    this.blockMaterials = blockMaterials;
    this.renderDistance = renderDistance;
    this.chunkSize = chunkSize;
    this.depth = depth;

    this.grass = new BlockMap({
      blockType: "grass",
      materialArray: blockMaterials.grassMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(blockGoem, blockMaterials.grassMat),
      count: 0,
      range: [0],
      biomes: ["plains"],
    });
    this.dirt = new BlockMap({
      blockType: "dirt",
      materialArray: blockMaterials.dirtMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(blockGoem, blockMaterials.dirtMat),
      count: 0,
      range: [1, 2],
      biomes: ["plains"],
    });
    this.cobblestone = new BlockMap({
      blockType: "cobblestone",
      materialArray: blockMaterials.cobblestoneMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(blockGoem, blockMaterials.cobblestoneMat),
      count: 0,
      range: [3, 4],
      biomes: ["plains", "desert"],
    });
    this.oakLog = new BlockMap({
      blockType: "oakLog",
      materialArray: blockMaterials.oakLogMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(blockGoem, blockMaterials.oakLogMat),
      count: 0,
      range: [],
      biomes: ["plains"],
    });
    this.oakLeaves = new BlockMap({
      blockType: "oakLeaves",
      materialArray: blockMaterials.oakLeavesMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(blockGoem, blockMaterials.oakLeavesMat),
      count: 0,
      range: [],
      biomes: ["plains"],
    });
    this.sand = new BlockMap({
      blockType: "sand",
      materialArray: blockMaterials.sandMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(blockGoem, blockMaterials.sandMat),
      count: 0,
      range: [0, 1, 2],
      biomes: ["desert"],
    });
    this.water = new BlockMap({
      blockType: "water",
      materialArray: blockMaterials.waterMat,
      mesh: new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(blockGoem, blockMaterials.waterMat),
      count: 0,
      range: [],
      biomes: ["plains", "desert"],
    });
  }
  getBlockPosition(block) {
    return block.mesh.position;
  }
  getBlockSide(block) {
    //return block.mesh.position
  }

  getBlockByType(type) {
    if (type == "grass") {
      return this.grass.mesh;
    }
    if (type == "dirt") {
      return this.dirt.mesh;
    }
    if (type == "cobblestone") {
      return this.cobblestone.mesh;
    }
    if (type == "oakLog") {
      return this.oakLog.mesh;
    }
    if (type == "oakLeaves") {
      return this.oakLeaves.mesh;
    }
    if (type == "sand") {
      return this.sand.mesh;
    }
    if (type == "water") {
      return this.water.mesh;
    } else {
      return null;
    }
  }
}


/***/ }),

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

/***/ "./src/js/Controls.js":
/*!****************************!*\
  !*** ./src/js/Controls.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    document.addEventListener("click", (event) => {
      console.log(event.which);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLandscape": () => (/* binding */ createLandscape)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Block.js */ "./src/js/Block.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/js/main.js");




function createLandscape() {
  //console.log("in landscape");
  for (var xIndex = 0; xIndex < 10; xIndex++) {
    for (var zIndex = 0; zIndex < 10; zIndex++) {
      const blocks = new _Block_js__WEBPACK_IMPORTED_MODULE_0__.Block();
      const block = blocks.grass.mesh;
      const z = zIndex;
      const x = xIndex;
      const y = 0;
      const pos = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(x, y, z);
      _main__WEBPACK_IMPORTED_MODULE_1__.storage.addBlock({ type: "grass", position: pos });
    }
  }
}


/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    this.playerShape = new cannon_es__WEBPACK_IMPORTED_MODULE_1__.Sphere(0.5);
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

/***/ "./src/js/Storage.js":
/*!***************************!*\
  !*** ./src/js/Storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Blocks": () => (/* binding */ Blocks),
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Block */ "./src/js/Block.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");







class Storage {
  constructor() {
    this.blocks = [
      {
        key: (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)(),
        position: { x: 1, y: 1, z: 1 },
        type: "cobblestone",
      },
    ];
    this.initStore();
  }

  addBlock({ type: typ, position: { x, y, z } }) {
    //console.log("added a block");
    this.blocks.push({
      key: (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)(),
      position: { x, y, z },
      type: typ,
    });
  }
  removeBlock() {}
  setTexture() {}
  saveWorld() {}
  resetWorld() {}
  initStore() {}
}

class Blocks {
  constructor() {
    this.renderList = [];
    this.initBlocks();
  }
  initBlocks() {
    this.useStorage();
  }
  useStorage() {
    const stored = _main__WEBPACK_IMPORTED_MODULE_1__.storage.blocks;
    console.log("store length " + stored.length);
    stored.forEach((storeBlock) => {
      const block = new _Block__WEBPACK_IMPORTED_MODULE_2__.Block();

      const mesh = block.getBlockByType(storeBlock.type);
      //console.log("mesh " + Object.values(mesh));
      mesh.position.set(
        storeBlock.position.x,
        storeBlock.position.y,
        storeBlock.position.z
      );
      const blockShape = new cannon_es__WEBPACK_IMPORTED_MODULE_4__.Box(new cannon_es__WEBPACK_IMPORTED_MODULE_4__.Vec3(0.5, 0.5, 0.5));
      const blockBody = new cannon_es__WEBPACK_IMPORTED_MODULE_4__.Body({ mass: 0 });
      blockBody.addShape(blockShape);

      blockBody.position.set(
        storeBlock.position.x,
        storeBlock.position.y,
        storeBlock.position.z
      );

      _main__WEBPACK_IMPORTED_MODULE_1__.meshes.push(mesh);
      _main__WEBPACK_IMPORTED_MODULE_1__.bodies.push(blockBody);
      _main__WEBPACK_IMPORTED_MODULE_1__.world.addBody(blockBody);
      _main__WEBPACK_IMPORTED_MODULE_1__.scene.add(mesh);
    });
  }
}


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bodies": () => (/* binding */ bodies),
/* harmony export */   "meshes": () => (/* binding */ meshes),
/* harmony export */   "scene": () => (/* binding */ scene),
/* harmony export */   "storage": () => (/* binding */ storage),
/* harmony export */   "world": () => (/* binding */ world)
/* harmony export */ });
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene.js */ "./src/js/Scene.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Controls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controls.js */ "./src/js/Controls.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Renderer.js */ "./src/js/Renderer.js");
/* harmony import */ var _Landscape_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Landscape.js */ "./src/js/Landscape.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Player.js */ "./src/js/Player.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Storage */ "./src/js/Storage.js");
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
let storage = new _Storage__WEBPACK_IMPORTED_MODULE_7__.Storage();

// cannon.js variables
let world;

// To be synced
let meshes = [];
let bodies = [];

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
}

function initMinecraft() {
  _Landscape_js__WEBPACK_IMPORTED_MODULE_5__.createLandscape();

  blocks = new _Storage__WEBPACK_IMPORTED_MODULE_7__.Blocks();
  player = new _Player_js__WEBPACK_IMPORTED_MODULE_6__.Player({ camera: camera });
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
  //blocks.renderList.forEach((mesh) => {
  //  scene.add(mesh);
  //});
  renderer.render(scene, camera);

  stats.update();
  stats.end();
  requestAnimationFrame(GameLoop);
}


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')



/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



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
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/Camera.js"), __webpack_exec__("./src/js/Scene.js"), __webpack_exec__("./src/js/Renderer.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDOztBQUVsQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUIsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEMsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFZSIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9jc3MvbWFpbi5jc3M/YzA4ZSIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvQmxvY2suanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL0xhbmRzY2FwZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5icm93c2VyLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy9uYW5vaWQvdXJsLWFscGhhYmV0L2luZGV4LmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvUG9pbnRlckxvY2tDb250cm9scy5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2xpYnMvbGlsLWd1aS5tb2R1bGUubWluLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vbGlicy9zdGF0cy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9vYmplY3RzL1NreS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0ICogYXMgU3RvcmUgZnJvbSBcIi4vU3RvcmFnZS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrTWFwIHtcclxuICBjb25zdHJ1Y3Rvcih7IGJsb2NrVHlwZSwgbWF0ZXJpYWxBcnJheSwgbWVzaCwgY291bnQsIGJpb21lcyB9KSB7XHJcbiAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IG1hdGVyaWFsQXJyYXk7XHJcbiAgICB0aGlzLm1lc2ggPSBtZXNoO1xyXG4gICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgdGhpcy5iaW9tZXMgPSBiaW9tZXM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2tNYXRlcmlhbHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdmFyIGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XHJcblxyXG4gICAgdGhpcy5kaXJ0TWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29iYmxlc3RvbmVNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vYWtMb2dNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMb2cvc2lkZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3RvcC5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL2JvdHRvbS5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub2FrTGVhdmVzTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMZWF2ZXMvb2FrTGVhdmVzLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2FuZE1hdCA9IFtcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLndhdGVyTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ3Jhc3NNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3NpZGUuanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL3RvcC5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZ3Jhc3MvYm90dG9tLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRleHR1cmVPcGFjaXR5KCk7XHJcbiAgICAvL3RoaXMudGV4dHVyZUltYWdlc0xvYWRlcihcIi9hc3NldHMvdGV4dHVyZS9ncmFzc1wiKTtcclxuICB9XHJcbiAgdGV4dHVyZUltYWdlc0xvYWRlcihmaWxlVVJMKSB7XHJcbiAgICAvL2pvaW5pbmcgcGF0aCBvZiBkaXJlY3RvcnlcclxuICAgIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBmaWxlVVJMO1xyXG4gICAgLy9wYXNzc2luZyBkaXJlY3RvcnlQYXRoIGFuZCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgZnMucmVhZGRpcihkaXJlY3RvcnlQYXRoLCBmdW5jdGlvbiAoZXJyLCBmaWxlcykge1xyXG4gICAgICAvL2hhbmRsaW5nIGVycm9yXHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJVbmFibGUgdG8gc2NhbiBkaXJlY3Rvcnk6IFwiICsgZXJyKTtcclxuICAgICAgfVxyXG4gICAgICAvL2xpc3RpbmcgYWxsIGZpbGVzIHVzaW5nIGZvckVhY2hcclxuICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgIC8vIERvIHdoYXRldmVyIHlvdSB3YW50IHRvIGRvIHdpdGggdGhlIGZpbGVcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWxlO1xyXG4gIH1cclxuICB0ZXh0dXJlT3BhY2l0eSgpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy53YXRlck1hdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoaSA9PSAyIHx8IGkgPT0gMykge1xyXG4gICAgICAgIC8vIHRvcCBhbmQgYm90dG9tXHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS5vcGFjaXR5ID0gMC43O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHNpZGVzXHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53YXRlck1hdFtpXS5vcGFjaXR5ID0gMC40O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2sge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdmFyIGJsb2NrR29lbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuICAgIHZhciBibG9ja01hdGVyaWFscyA9IG5ldyBCbG9ja01hdGVyaWFscygpO1xyXG4gICAgdmFyIHJlbmRlckRpc3RhbmNlID0gNDtcclxuICAgIHZhciBjaHVua1NpemUgPSAxMDtcclxuICAgIHZhciBkZXB0aCA9IDU7XHJcblxyXG4gICAgdGhpcy5ibG9ja0dvZW0gPSBibG9ja0dvZW07XHJcbiAgICB0aGlzLmJsb2NrTWF0ZXJpYWxzID0gYmxvY2tNYXRlcmlhbHM7XHJcbiAgICB0aGlzLnJlbmRlckRpc3RhbmNlID0gcmVuZGVyRGlzdGFuY2U7XHJcbiAgICB0aGlzLmNodW5rU2l6ZSA9IGNodW5rU2l6ZTtcclxuICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcclxuXHJcbiAgICB0aGlzLmdyYXNzID0gbmV3IEJsb2NrTWFwKHtcclxuICAgICAgYmxvY2tUeXBlOiBcImdyYXNzXCIsXHJcbiAgICAgIG1hdGVyaWFsQXJyYXk6IGJsb2NrTWF0ZXJpYWxzLmdyYXNzTWF0LFxyXG4gICAgICBtZXNoOiBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLmdyYXNzTWF0KSxcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHJhbmdlOiBbMF0sXHJcbiAgICAgIGJpb21lczogW1wicGxhaW5zXCJdLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRpcnQgPSBuZXcgQmxvY2tNYXAoe1xyXG4gICAgICBibG9ja1R5cGU6IFwiZGlydFwiLFxyXG4gICAgICBtYXRlcmlhbEFycmF5OiBibG9ja01hdGVyaWFscy5kaXJ0TWF0LFxyXG4gICAgICBtZXNoOiBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLmRpcnRNYXQpLFxyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgcmFuZ2U6IFsxLCAyXSxcclxuICAgICAgYmlvbWVzOiBbXCJwbGFpbnNcIl0sXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29iYmxlc3RvbmUgPSBuZXcgQmxvY2tNYXAoe1xyXG4gICAgICBibG9ja1R5cGU6IFwiY29iYmxlc3RvbmVcIixcclxuICAgICAgbWF0ZXJpYWxBcnJheTogYmxvY2tNYXRlcmlhbHMuY29iYmxlc3RvbmVNYXQsXHJcbiAgICAgIG1lc2g6IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMuY29iYmxlc3RvbmVNYXQpLFxyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgcmFuZ2U6IFszLCA0XSxcclxuICAgICAgYmlvbWVzOiBbXCJwbGFpbnNcIiwgXCJkZXNlcnRcIl0sXHJcbiAgICB9KTtcclxuICAgIHRoaXMub2FrTG9nID0gbmV3IEJsb2NrTWFwKHtcclxuICAgICAgYmxvY2tUeXBlOiBcIm9ha0xvZ1wiLFxyXG4gICAgICBtYXRlcmlhbEFycmF5OiBibG9ja01hdGVyaWFscy5vYWtMb2dNYXQsXHJcbiAgICAgIG1lc2g6IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMub2FrTG9nTWF0KSxcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHJhbmdlOiBbXSxcclxuICAgICAgYmlvbWVzOiBbXCJwbGFpbnNcIl0sXHJcbiAgICB9KTtcclxuICAgIHRoaXMub2FrTGVhdmVzID0gbmV3IEJsb2NrTWFwKHtcclxuICAgICAgYmxvY2tUeXBlOiBcIm9ha0xlYXZlc1wiLFxyXG4gICAgICBtYXRlcmlhbEFycmF5OiBibG9ja01hdGVyaWFscy5vYWtMZWF2ZXNNYXQsXHJcbiAgICAgIG1lc2g6IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMub2FrTGVhdmVzTWF0KSxcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHJhbmdlOiBbXSxcclxuICAgICAgYmlvbWVzOiBbXCJwbGFpbnNcIl0sXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2FuZCA9IG5ldyBCbG9ja01hcCh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJzYW5kXCIsXHJcbiAgICAgIG1hdGVyaWFsQXJyYXk6IGJsb2NrTWF0ZXJpYWxzLnNhbmRNYXQsXHJcbiAgICAgIG1lc2g6IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMuc2FuZE1hdCksXHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICByYW5nZTogWzAsIDEsIDJdLFxyXG4gICAgICBiaW9tZXM6IFtcImRlc2VydFwiXSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy53YXRlciA9IG5ldyBCbG9ja01hcCh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJ3YXRlclwiLFxyXG4gICAgICBtYXRlcmlhbEFycmF5OiBibG9ja01hdGVyaWFscy53YXRlck1hdCxcclxuICAgICAgbWVzaDogbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy53YXRlck1hdCksXHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICByYW5nZTogW10sXHJcbiAgICAgIGJpb21lczogW1wicGxhaW5zXCIsIFwiZGVzZXJ0XCJdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGdldEJsb2NrUG9zaXRpb24oYmxvY2spIHtcclxuICAgIHJldHVybiBibG9jay5tZXNoLnBvc2l0aW9uO1xyXG4gIH1cclxuICBnZXRCbG9ja1NpZGUoYmxvY2spIHtcclxuICAgIC8vcmV0dXJuIGJsb2NrLm1lc2gucG9zaXRpb25cclxuICB9XHJcblxyXG4gIGdldEJsb2NrQnlUeXBlKHR5cGUpIHtcclxuICAgIGlmICh0eXBlID09IFwiZ3Jhc3NcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5ncmFzcy5tZXNoO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT0gXCJkaXJ0XCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGlydC5tZXNoO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT0gXCJjb2JibGVzdG9uZVwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvYmJsZXN0b25lLm1lc2g7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PSBcIm9ha0xvZ1wiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9ha0xvZy5tZXNoO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT0gXCJvYWtMZWF2ZXNcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5vYWtMZWF2ZXMubWVzaDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09IFwic2FuZFwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNhbmQubWVzaDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09IFwid2F0ZXJcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy53YXRlci5tZXNoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IHZhciBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgNzUsXHJcbiAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgMC4xLFxyXG4gIDEwMDBcclxuKTtcclxuXHJcbmNhbWVyYS5wb3NpdGlvbi5zZXRYKDI1KTtcclxuY2FtZXJhLnBvc2l0aW9uLnNldFooNzUpO1xyXG5jYW1lcmEucG9zaXRpb24uc2V0WSgxMCk7XHJcbiIsImltcG9ydCBcIi4uL2Nzcy9tYWluLmNzc1wiO1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgUG9pbnRlckxvY2tDb250cm9scyB9IGZyb20gXCJ0aHJlZS9hZGRvbnMvY29udHJvbHMvUG9pbnRlckxvY2tDb250cm9scy5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xzIHtcclxuICBjb25zdHJ1Y3Rvcih7IHBsYXllciB9KSB7XHJcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICB0aGlzLmtleUFjdGlvbk1hcCA9IHtcclxuICAgICAgS2V5VzogXCJtb3ZlRm9yd2FyZFwiLFxyXG4gICAgICBLZXlTOiBcIm1vdmVCYWNrd2FyZFwiLFxyXG4gICAgICBLZXlBOiBcIm1vdmVMZWZ0XCIsXHJcbiAgICAgIEtleUQ6IFwibW92ZVJpZ2h0XCIsXHJcbiAgICAgIFNwYWNlOiBcImp1bXBcIixcclxuICAgICAgRGlnaXQxOiBcInRleHR1cmUxXCIsXHJcbiAgICAgIERpZ2l0MjogXCJ0ZXh0dXJlM1wiLFxyXG4gICAgICBEaWdpdDM6IFwidGV4dHVyZTRcIixcclxuICAgICAgRGlnaXQ0OiBcInRleHR1cmU1XCIsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5mcHYgPSBuZXcgUG9pbnRlckxvY2tDb250cm9scyhcclxuICAgICAgdGhpcy5wbGF5ZXIuY2FtZXJhLFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJnXCIpXHJcbiAgICApO1xyXG4gICAgdGhpcy5pbml0Q29udHJvbHMoKTtcclxuICB9XHJcblxyXG4gIGluaXRDb250cm9scygpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZUtleURvd24oZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlS2V5VXAoZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LndoaWNoKTtcclxuICAgICAgdGhpcy5mcHYubG9jaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5mcHYuYWRkRXZlbnRMaXN0ZW5lcihcImxvY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvL21lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImxvY2tlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZnB2LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvL21lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgY29uc29sZS5sb2coXCJ1bmxvY2tlZFwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWN0aW9uQnlLZXkoa2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5rZXlBY3Rpb25NYXBba2V5XTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleURvd24oZXZlbnQpIHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uQnlLZXkoZXZlbnQuY29kZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwia2V5RG93biBcIiArIGV2ZW50KTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwW2FjdGlvbl0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImFjdGlvbnMga2V5RG93blwiLCB0aGlzLnBsYXllci5hY3Rpb25NYXApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5VXAoZXZlbnQpIHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uQnlLZXkoZXZlbnQuY29kZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwW2FjdGlvbl0gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2coXCJhY3Rpb25zIFwiLCB0aGlzLnBsYXllci5hY3Rpb25NYXApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0ICogYXMgQkxLIGZyb20gXCIuL0Jsb2NrLmpzXCI7XHJcbmltcG9ydCAqIGFzIG1uIGZyb20gXCIuL21haW5cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYW5kc2NhcGUoKSB7XHJcbiAgLy9jb25zb2xlLmxvZyhcImluIGxhbmRzY2FwZVwiKTtcclxuICBmb3IgKHZhciB4SW5kZXggPSAwOyB4SW5kZXggPCAxMDsgeEluZGV4KyspIHtcclxuICAgIGZvciAodmFyIHpJbmRleCA9IDA7IHpJbmRleCA8IDEwOyB6SW5kZXgrKykge1xyXG4gICAgICBjb25zdCBibG9ja3MgPSBuZXcgQkxLLkJsb2NrKCk7XHJcbiAgICAgIGNvbnN0IGJsb2NrID0gYmxvY2tzLmdyYXNzLm1lc2g7XHJcbiAgICAgIGNvbnN0IHogPSB6SW5kZXg7XHJcbiAgICAgIGNvbnN0IHggPSB4SW5kZXg7XHJcbiAgICAgIGNvbnN0IHkgPSAwO1xyXG4gICAgICBjb25zdCBwb3MgPSBuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KTtcclxuICAgICAgbW4uc3RvcmFnZS5hZGRCbG9jayh7IHR5cGU6IFwiZ3Jhc3NcIiwgcG9zaXRpb246IHBvcyB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCAqIGFzIENBTk5PTiBmcm9tIFwiY2Fubm9uLWVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICAvL3ZhciBtb3ZlQmFja3dhcmQsIG1vdmVGb3J3YXJkLCBtb3ZlUmlnaHQsIG1vdmVMZWZ0LCBqdW1wID0gdXNlS2V5Ym9hcmQoKVxyXG5cclxuICBwbHJHZW9tID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCk7XHJcbiAgcGxyTWF0ID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCk7XHJcbiAgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMucGxyR2VvbSwgdGhpcy5wbHJNYXQpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7IGNhbWVyYSwgY29udHJvbHMsIG1lc2ggfSkge1xyXG4gICAgdGhpcy5hY3Rpb25NYXAgPSB7XHJcbiAgICAgIG1vdmVGb3J3YXJkOiBmYWxzZSxcclxuICAgICAgbW92ZUJhY2t3YXJkOiBmYWxzZSxcclxuICAgICAgbW92ZUxlZnQ6IGZhbHNlLFxyXG4gICAgICBtb3ZlUmlnaHQ6IGZhbHNlLFxyXG4gICAgICBqdW1wOiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTE6IGZhbHNlLFxyXG4gICAgICB0ZXh0dXJlMzogZmFsc2UsXHJcbiAgICAgIHRleHR1cmU0OiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTU6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgIHRoaXMuY29udHJvbHMgPSBjb250cm9scztcclxuXHJcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0aGlzLnBsckdlb20sIHRoaXMucGxyTWF0KTtcclxuICAgIHRoaXMubWFzcyA9IDE7XHJcbiAgICB0aGlzLm1vdmVtZW50U3BlZWQgPSAyLjU7XHJcbiAgICB0aGlzLmp1bXBGb3JjZSA9IDM7XHJcbiAgICB0aGlzLnBsYXllclNoYXBlID0gbmV3IENBTk5PTi5TcGhlcmUoMC41KTtcclxuICAgIHRoaXMucGxheWVyQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IHRoaXMubWFzcyB9KTtcclxuICAgIHRoaXMucGxheWVyQm9keS5hZGRTaGFwZSh0aGlzLnBsYXllclNoYXBlKTtcclxuXHJcbiAgICAvL3RoaXMudXBkYXRlUGxheWVyKCk7XHJcbiAgfVxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygncGxheWVyIHBvcyB1cGRhdGUgPScsIHRoaXMubWVzaC5wb3NpdGlvbik7XHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KHRoaXMubWVzaC5wb3NpdGlvbik7XHJcbiAgfVxyXG4gIHVwZGF0ZVBsYXllcigpIHtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIHRoaXMudXNlQWN0aW9uKCk7XHJcbiAgfVxyXG4gIHVzZUFjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmFjdGlvbk1hcFtcImp1bXBcIl0gJiYgTWF0aC5hYnModGhpcy5wbGF5ZXJCb2R5LnZlbG9jaXR5LnkpIDwgMC4wNSkge1xyXG4gICAgICB0aGlzLnBsYXllckJvZHkudmVsb2NpdHkuc2V0KDAsIHRoaXMuanVtcEZvcmNlLCAwKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgY29uc3QgZnJvbnRWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgKHRoaXMuYWN0aW9uTWFwW1wibW92ZUJhY2t3YXJkXCJdID8gMSA6IDApIC1cclxuICAgICAgICAodGhpcy5hY3Rpb25NYXBbXCJtb3ZlRm9yd2FyZFwiXSA/IDEgOiAwKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBzaWRlVmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgICh0aGlzLmFjdGlvbk1hcFtcIm1vdmVMZWZ0XCJdID8gMSA6IDApIC1cclxuICAgICAgICAodGhpcy5hY3Rpb25NYXBbXCJtb3ZlUmlnaHRcIl0gPyAxIDogMCksXHJcbiAgICAgIDAsXHJcbiAgICAgIDBcclxuICAgICk7XHJcblxyXG4gICAgZGlyZWN0aW9uLnN1YlZlY3RvcnMoZnJvbnRWZWN0b3IsIHNpZGVWZWN0b3IpO1xyXG4gICAgZGlyZWN0aW9uLm5vcm1hbGl6ZSgpO1xyXG4gICAgZGlyZWN0aW9uLm11bHRpcGx5U2NhbGFyKHRoaXMubW92ZW1lbnRTcGVlZCk7XHJcbiAgICBkaXJlY3Rpb24uYXBwbHlFdWxlcih0aGlzLmNhbWVyYS5yb3RhdGlvbik7XHJcblxyXG4gICAgdGhpcy5wbGF5ZXJCb2R5LnZlbG9jaXR5LnNldChcclxuICAgICAgZGlyZWN0aW9uLngsXHJcbiAgICAgIHRoaXMucGxheWVyQm9keS52ZWxvY2l0eS55LFxyXG4gICAgICBkaXJlY3Rpb24uelxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgY2FudmFzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcnKSwgcG93ZXJQcmVmZXJlbmNlOiBcImhpZ2gtcGVyZm9ybWFuY2VcIiwgYW50aWFsaWFzOiB0cnVlIFxyXG59KTtcclxuXHJcbnJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nO1xyXG5yZW5kZXJlci50b25lTWFwcGluZyA9IFRIUkVFLkFDRVNGaWxtaWNUb25lTWFwcGluZztcclxucmVuZGVyZXIudG9uZU1hcHBpbmdFeHBvc3VyZSA9IDAuNTtcclxucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcclxucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCAqIGFzIGNtIGZyb20gXCIuL0NhbWVyYS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBjdCBmcm9tIFwiLi9Db250cm9scy5qc1wiO1xyXG5pbXBvcnQgKiBhcyByZCBmcm9tIFwiLi9SZW5kZXJlci5qc1wiO1xyXG5pbXBvcnQgKiBhcyBsZCBmcm9tIFwiLi9MYW5kc2NhcGUuanNcIjtcclxuaW1wb3J0IHsgR1VJIH0gZnJvbSBcInRocmVlL2FkZG9ucy9saWJzL2xpbC1ndWkubW9kdWxlLm1pbi5qc1wiO1xyXG5pbXBvcnQgeyBTa3kgfSBmcm9tIFwidGhyZWUvYWRkb25zL29iamVjdHMvU2t5LmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuY29uc3QgY2FtZXJhID0gY20uY2FtZXJhO1xyXG5jb25zdCByZW5kZXJlciA9IHJkLnJlbmRlcmVyO1xyXG5cclxubGV0IHNreSwgc3VuO1xyXG5cclxuaW5pdCgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdFNreSgpIHtcclxuICAvLyBBZGQgU2t5XHJcbiAgc2t5ID0gbmV3IFNreSgpO1xyXG4gIHNreS5zY2FsZS5zZXRTY2FsYXIoNDUwMDAwKTtcclxuICBzY2VuZS5hZGQoc2t5KTtcclxuXHJcbiAgc3VuID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgLy8vIEdVSVxyXG5cclxuICBjb25zdCBlZmZlY3RDb250cm9sbGVyID0ge1xyXG4gICAgdHVyYmlkaXR5OiAxMCxcclxuICAgIHJheWxlaWdoOiAzLFxyXG4gICAgbWllQ29lZmZpY2llbnQ6IDAuMDA1LFxyXG4gICAgbWllRGlyZWN0aW9uYWxHOiAwLjcsXHJcbiAgICBlbGV2YXRpb246IDIsXHJcbiAgICBhemltdXRoOiAxODAsXHJcbiAgICBleHBvc3VyZTogcmVuZGVyZXIudG9uZU1hcHBpbmdFeHBvc3VyZSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBndWlDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgdW5pZm9ybXMgPSBza3kubWF0ZXJpYWwudW5pZm9ybXM7XHJcbiAgICB1bmlmb3Jtc1tcInR1cmJpZGl0eVwiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIudHVyYmlkaXR5O1xyXG4gICAgdW5pZm9ybXNbXCJyYXlsZWlnaFwiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIucmF5bGVpZ2g7XHJcbiAgICB1bmlmb3Jtc1tcIm1pZUNvZWZmaWNpZW50XCJdLnZhbHVlID0gZWZmZWN0Q29udHJvbGxlci5taWVDb2VmZmljaWVudDtcclxuICAgIHVuaWZvcm1zW1wibWllRGlyZWN0aW9uYWxHXCJdLnZhbHVlID0gZWZmZWN0Q29udHJvbGxlci5taWVEaXJlY3Rpb25hbEc7XHJcblxyXG4gICAgY29uc3QgcGhpID0gVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDkwIC0gZWZmZWN0Q29udHJvbGxlci5lbGV2YXRpb24pO1xyXG4gICAgY29uc3QgdGhldGEgPSBUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQoZWZmZWN0Q29udHJvbGxlci5hemltdXRoKTtcclxuXHJcbiAgICBzdW4uc2V0RnJvbVNwaGVyaWNhbENvb3JkcygxLCBwaGksIHRoZXRhKTtcclxuXHJcbiAgICB1bmlmb3Jtc1tcInN1blBvc2l0aW9uXCJdLnZhbHVlLmNvcHkoc3VuKTtcclxuXHJcbiAgICByZW5kZXJlci50b25lTWFwcGluZ0V4cG9zdXJlID0gZWZmZWN0Q29udHJvbGxlci5leHBvc3VyZTtcclxuICAgIC8vcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZ3VpID0gbmV3IEdVSSgpO1xyXG5cclxuICBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwidHVyYmlkaXR5XCIsIDAuMCwgMjAuMCwgMC4xKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwicmF5bGVpZ2hcIiwgMC4wLCA0LCAwLjAwMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgZ3VpXHJcbiAgICAuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwibWllQ29lZmZpY2llbnRcIiwgMC4wLCAwLjEsIDAuMDAxKVxyXG4gICAgLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIGd1aVxyXG4gICAgLmFkZChlZmZlY3RDb250cm9sbGVyLCBcIm1pZURpcmVjdGlvbmFsR1wiLCAwLjAsIDEsIDAuMDAxKVxyXG4gICAgLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJlbGV2YXRpb25cIiwgMCwgOTAsIDAuMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcImF6aW11dGhcIiwgLTE4MCwgMTgwLCAwLjEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJleHBvc3VyZVwiLCAwLCAxLCAwLjAwMDEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG5cclxuICBndWlDaGFuZ2VkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgY29uc3QgaGVscGVyID0gbmV3IFRIUkVFLkdyaWRIZWxwZXIoMTAwMDAsIDIsIDB4ZmZmZmZmLCAweGZmZmZmZik7XHJcbiAgc2NlbmUuYWRkKGhlbHBlcik7XHJcblxyXG4gIGluaXRTa3koKTtcclxufVxyXG5cclxuLy9zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkNvbG9yKDB4MDBmZmZmKTtcclxuLy9zY2VuZS5mb2cgPSBuZXcgVEhSRUUuRm9nKDB4MDBmZmZmLCAyLCA4MCk7XHJcblxyXG5jb25zdCBwb2ludExpZ2h0XzEgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZik7XHJcbnBvaW50TGlnaHRfMS5wb3NpdGlvbi5zZXQoNSwgNSwgMCk7XHJcbmNvbnN0IHBvaW50TGlnaHRfMiA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmKTtcclxucG9pbnRMaWdodF8yLnBvc2l0aW9uLnNldCgtNSwgNSwgMCk7XHJcbmNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuMTUpO1xyXG5cclxuc2NlbmUuYWRkKHBvaW50TGlnaHRfMSwgcG9pbnRMaWdodF8yLCBhbWJpZW50TGlnaHQpO1xyXG5cclxucmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4iLCJpbXBvcnQgXCIuLi9jc3MvbWFpbi5jc3NcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCAqIGFzIG1uIGZyb20gXCIuL21haW5cIjtcclxuaW1wb3J0ICogYXMgQkxLIGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcclxuaW1wb3J0ICogYXMgQ0FOTk9OIGZyb20gXCJjYW5ub24tZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmxvY2tzID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiBuYW5vaWQoKSxcclxuICAgICAgICBwb3NpdGlvbjogeyB4OiAxLCB5OiAxLCB6OiAxIH0sXHJcbiAgICAgICAgdHlwZTogXCJjb2JibGVzdG9uZVwiLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICAgIHRoaXMuaW5pdFN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBhZGRCbG9jayh7IHR5cGU6IHR5cCwgcG9zaXRpb246IHsgeCwgeSwgeiB9IH0pIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJhZGRlZCBhIGJsb2NrXCIpO1xyXG4gICAgdGhpcy5ibG9ja3MucHVzaCh7XHJcbiAgICAgIGtleTogbmFub2lkKCksXHJcbiAgICAgIHBvc2l0aW9uOiB7IHgsIHksIHogfSxcclxuICAgICAgdHlwZTogdHlwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlbW92ZUJsb2NrKCkge31cclxuICBzZXRUZXh0dXJlKCkge31cclxuICBzYXZlV29ybGQoKSB7fVxyXG4gIHJlc2V0V29ybGQoKSB7fVxyXG4gIGluaXRTdG9yZSgpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja3Mge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yZW5kZXJMaXN0ID0gW107XHJcbiAgICB0aGlzLmluaXRCbG9ja3MoKTtcclxuICB9XHJcbiAgaW5pdEJsb2NrcygpIHtcclxuICAgIHRoaXMudXNlU3RvcmFnZSgpO1xyXG4gIH1cclxuICB1c2VTdG9yYWdlKCkge1xyXG4gICAgY29uc3Qgc3RvcmVkID0gbW4uc3RvcmFnZS5ibG9ja3M7XHJcbiAgICBjb25zb2xlLmxvZyhcInN0b3JlIGxlbmd0aCBcIiArIHN0b3JlZC5sZW5ndGgpO1xyXG4gICAgc3RvcmVkLmZvckVhY2goKHN0b3JlQmxvY2spID0+IHtcclxuICAgICAgY29uc3QgYmxvY2sgPSBuZXcgQkxLLkJsb2NrKCk7XHJcblxyXG4gICAgICBjb25zdCBtZXNoID0gYmxvY2suZ2V0QmxvY2tCeVR5cGUoc3RvcmVCbG9jay50eXBlKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcIm1lc2ggXCIgKyBPYmplY3QudmFsdWVzKG1lc2gpKTtcclxuICAgICAgbWVzaC5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgc3RvcmVCbG9jay5wb3NpdGlvbi54LFxyXG4gICAgICAgIHN0b3JlQmxvY2sucG9zaXRpb24ueSxcclxuICAgICAgICBzdG9yZUJsb2NrLnBvc2l0aW9uLnpcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYmxvY2tTaGFwZSA9IG5ldyBDQU5OT04uQm94KG5ldyBDQU5OT04uVmVjMygwLjUsIDAuNSwgMC41KSk7XHJcbiAgICAgIGNvbnN0IGJsb2NrQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IDAgfSk7XHJcbiAgICAgIGJsb2NrQm9keS5hZGRTaGFwZShibG9ja1NoYXBlKTtcclxuXHJcbiAgICAgIGJsb2NrQm9keS5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgc3RvcmVCbG9jay5wb3NpdGlvbi54LFxyXG4gICAgICAgIHN0b3JlQmxvY2sucG9zaXRpb24ueSxcclxuICAgICAgICBzdG9yZUJsb2NrLnBvc2l0aW9uLnpcclxuICAgICAgKTtcclxuXHJcbiAgICAgIG1uLm1lc2hlcy5wdXNoKG1lc2gpO1xyXG4gICAgICBtbi5ib2RpZXMucHVzaChibG9ja0JvZHkpO1xyXG4gICAgICBtbi53b3JsZC5hZGRCb2R5KGJsb2NrQm9keSk7XHJcbiAgICAgIG1uLnNjZW5lLmFkZChtZXNoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgXCIuLi9jc3MvbWFpbi5jc3NcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0ICogYXMgc2MgZnJvbSBcIi4vU2NlbmUuanNcIjtcbmltcG9ydCAqIGFzIGNtIGZyb20gXCIuL0NhbWVyYS5qc1wiO1xuaW1wb3J0ICogYXMgY3QgZnJvbSBcIi4vQ29udHJvbHMuanNcIjtcbmltcG9ydCAqIGFzIHJkIGZyb20gXCIuL1JlbmRlcmVyLmpzXCI7XG5pbXBvcnQgKiBhcyBsZCBmcm9tIFwiLi9MYW5kc2NhcGUuanNcIjtcbmltcG9ydCAqIGFzIFBMUiBmcm9tIFwiLi9QbGF5ZXIuanNcIjtcbmltcG9ydCAqIGFzIENBTk5PTiBmcm9tIFwiY2Fubm9uLWVzXCI7XG5pbXBvcnQgKiBhcyBzdCBmcm9tIFwiLi9TdG9yYWdlXCI7XG5cbmltcG9ydCBTdGF0cyBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xpYnMvc3RhdHMubW9kdWxlXCI7XG5cbi8vIFRocmVlIHZhcmlhYmxlc1xuZXhwb3J0IGxldCBzY2VuZSA9IHNjLnNjZW5lO1xubGV0IGNhbWVyYSA9IGNtLmNhbWVyYTtcbmxldCByZW5kZXJlciA9IHJkLnJlbmRlcmVyO1xuY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcblxubGV0IHN0YXRzO1xuXG4vLyBNaW5lY3JhZnQgdmFyaWFibGVzXG5sZXQgYmxvY2tzO1xubGV0IHBsYXllcjtcbmxldCBjb250cm9scztcbmV4cG9ydCBsZXQgc3RvcmFnZSA9IG5ldyBzdC5TdG9yYWdlKCk7XG5cbi8vIGNhbm5vbi5qcyB2YXJpYWJsZXNcbmV4cG9ydCBsZXQgd29ybGQ7XG5cbi8vIFRvIGJlIHN5bmNlZFxuZXhwb3J0IGxldCBtZXNoZXMgPSBbXTtcbmV4cG9ydCBsZXQgYm9kaWVzID0gW107XG5cbmluaXRUaHJlZSgpO1xuaW5pdENhbm5vbigpO1xuaW5pdE1pbmVjcmFmdCgpO1xucmVuZGVySW5mbygpO1xuR2FtZUxvb3AoKTtcblxuZnVuY3Rpb24gaW5pdFRocmVlKCkge1xuICBzdGF0cyA9IG5ldyBTdGF0cygpO1xuICBzdGF0cy5zaG93UGFuZWwoMCk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXG4gIC8vZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xufVxuXG5mdW5jdGlvbiBpbml0Q2Fubm9uKCkge1xuICAvLyBTZXR1cCB3b3JsZFxuICB3b3JsZCA9IG5ldyBDQU5OT04uV29ybGQoKTtcbiAgd29ybGQuZ3Jhdml0eS5zZXQoMCwgLTkuODEsIDApO1xufVxuXG5mdW5jdGlvbiBpbml0TWluZWNyYWZ0KCkge1xuICBsZC5jcmVhdGVMYW5kc2NhcGUoKTtcblxuICBibG9ja3MgPSBuZXcgc3QuQmxvY2tzKCk7XG4gIHBsYXllciA9IG5ldyBQTFIuUGxheWVyKHsgY2FtZXJhOiBjYW1lcmEgfSk7XG4gIGNvbnRyb2xzID0gbmV3IGN0LkNvbnRyb2xzKHsgcGxheWVyOiBwbGF5ZXIgfSk7XG5cbiAgcGxheWVyLnBsYXllckJvZHkucG9zaXRpb24uc2V0KDYsIDgsIDYpO1xuICBib2RpZXMucHVzaChwbGF5ZXIucGxheWVyQm9keSk7XG4gIHdvcmxkLmFkZEJvZHkocGxheWVyLnBsYXllckJvZHkpO1xuICBtZXNoZXMucHVzaChwbGF5ZXIubWVzaCk7XG4gIHNjZW5lLmFkZChwbGF5ZXIubWVzaCk7XG59XG5mdW5jdGlvbiByZW5kZXJJbmZvKCkge1xuICBjb25zb2xlLmxvZyhcIlNjZW5lIHBvbHljb3VudDpcIiwgcmVuZGVyZXIuaW5mby5yZW5kZXIudHJpYW5nbGVzKTtcbiAgY29uc29sZS5sb2coXCJBY3RpdmUgRHJhd2NhbGxzOlwiLCByZW5kZXJlci5pbmZvLnJlbmRlci5jYWxscyk7XG4gIGNvbnNvbGUubG9nKFwiVGV4dHVyZXMgaW4gTWVtb3J5XCIsIHJlbmRlcmVyLmluZm8ubWVtb3J5LnRleHR1cmVzKTtcbiAgY29uc29sZS5sb2coXCJHZW9tZXRyaWVzIGluIE1lbW9yeVwiLCByZW5kZXJlci5pbmZvLm1lbW9yeS5nZW9tZXRyaWVzKTtcbn1cblxuLy8gU3luYyB0aGUgdGhyZWUuanMgbWVzaGVzIHdpdGggdGhlIGJvZGllc1xuZnVuY3Rpb24gc3luY2hyb25pc2VkQm9kaWVzTWVzaGVzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSAhPT0gbWVzaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbWVzaGVzW2ldLnBvc2l0aW9uLmNvcHkoYm9kaWVzW2ldLnBvc2l0aW9uKTtcbiAgICBtZXNoZXNbaV0ucXVhdGVybmlvbi5jb3B5KGJvZGllc1tpXS5xdWF0ZXJuaW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBHYW1lTG9vcCgpIHtcbiAgc3RhdHMuYmVnaW4oKTtcbiAgY29uc3QgZGVsdGFUaW1lID0gY2xvY2suZ2V0RGVsdGEoKTtcblxuICAvL3VwZGF0ZSBnYW1lXG4gIHBsYXllci51cGRhdGVQbGF5ZXIoKTtcblxuICAvLyBTdGVwIHRoZSBwaHlzaWNzIHdvcmxkXG4gIHdvcmxkLmZpeGVkU3RlcCgpO1xuICBzeW5jaHJvbmlzZWRCb2RpZXNNZXNoZXMoKTtcblxuICAvLyBSZW5kZXIgdGhyZWUuanNcbiAgLy9ibG9ja3MucmVuZGVyTGlzdC5mb3JFYWNoKChtZXNoKSA9PiB7XG4gIC8vICBzY2VuZS5hZGQobWVzaCk7XG4gIC8vfSk7XG4gIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcblxuICBzdGF0cy51cGRhdGUoKTtcbiAgc3RhdHMuZW5kKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShHYW1lTG9vcCk7XG59XG4iLCJpbXBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xubGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxubGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmxldCBjdXN0b21BbHBoYWJldCA9IChhbHBoYWJldCwgc2l6ZSA9IDIxKSA9PlxuICBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcbmxldCBuYW5vaWQgPSAoc2l6ZSA9IDIxKSA9PlxuICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKS5yZWR1Y2UoKGlkLCBieXRlKSA9PiB7XG4gICAgYnl0ZSAmPSA2M1xuICAgIGlmIChieXRlIDwgMzYpIHtcbiAgICAgIGlkICs9IGJ5dGUudG9TdHJpbmcoMzYpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjIpIHtcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlID4gNjIpIHtcbiAgICAgIGlkICs9ICctJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnXydcbiAgICB9XG4gICAgcmV0dXJuIGlkXG4gIH0sICcnKVxuZXhwb3J0IHsgbmFub2lkLCBjdXN0b21BbHBoYWJldCwgY3VzdG9tUmFuZG9tLCB1cmxBbHBoYWJldCwgcmFuZG9tIH1cbiIsImxldCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuZXhwb3J0IHsgdXJsQWxwaGFiZXQgfVxuIiwiaW1wb3J0IHtcblx0RXVsZXIsXG5cdEV2ZW50RGlzcGF0Y2hlcixcblx0VmVjdG9yM1xufSBmcm9tICd0aHJlZSc7XG5cbmNvbnN0IF9ldWxlciA9IG5ldyBFdWxlciggMCwgMCwgMCwgJ1lYWicgKTtcbmNvbnN0IF92ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xuXG5jb25zdCBfY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5jb25zdCBfbG9ja0V2ZW50ID0geyB0eXBlOiAnbG9jaycgfTtcbmNvbnN0IF91bmxvY2tFdmVudCA9IHsgdHlwZTogJ3VubG9jaycgfTtcblxuY29uc3QgX1BJXzIgPSBNYXRoLlBJIC8gMjtcblxuY2xhc3MgUG9pbnRlckxvY2tDb250cm9scyBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IoIGNhbWVyYSwgZG9tRWxlbWVudCApIHtcblxuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXHRcdHRoaXMuaXNMb2NrZWQgPSBmYWxzZTtcblxuXHRcdC8vIFNldCB0byBjb25zdHJhaW4gdGhlIHBpdGNoIG9mIHRoZSBjYW1lcmFcblx0XHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFuc1xuXHRcdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0XHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0XHR0aGlzLnBvaW50ZXJTcGVlZCA9IDEuMDtcblxuXHRcdGNvbnN0IHNjb3BlID0gdGhpcztcblxuXHRcdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5pc0xvY2tlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGNvbnN0IG1vdmVtZW50WCA9IGV2ZW50Lm1vdmVtZW50WCB8fCBldmVudC5tb3pNb3ZlbWVudFggfHwgZXZlbnQud2Via2l0TW92ZW1lbnRYIHx8IDA7XG5cdFx0XHRjb25zdCBtb3ZlbWVudFkgPSBldmVudC5tb3ZlbWVudFkgfHwgZXZlbnQubW96TW92ZW1lbnRZIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WSB8fCAwO1xuXG5cdFx0XHRfZXVsZXIuc2V0RnJvbVF1YXRlcm5pb24oIGNhbWVyYS5xdWF0ZXJuaW9uICk7XG5cblx0XHRcdF9ldWxlci55IC09IG1vdmVtZW50WCAqIDAuMDAyICogc2NvcGUucG9pbnRlclNwZWVkO1xuXHRcdFx0X2V1bGVyLnggLT0gbW92ZW1lbnRZICogMC4wMDIgKiBzY29wZS5wb2ludGVyU3BlZWQ7XG5cblx0XHRcdF9ldWxlci54ID0gTWF0aC5tYXgoIF9QSV8yIC0gc2NvcGUubWF4UG9sYXJBbmdsZSwgTWF0aC5taW4oIF9QSV8yIC0gc2NvcGUubWluUG9sYXJBbmdsZSwgX2V1bGVyLnggKSApO1xuXG5cdFx0XHRjYW1lcmEucXVhdGVybmlvbi5zZXRGcm9tRXVsZXIoIF9ldWxlciApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfY2hhbmdlRXZlbnQgKTtcblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uUG9pbnRlcmxvY2tDaGFuZ2UoKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnBvaW50ZXJMb2NrRWxlbWVudCA9PT0gc2NvcGUuZG9tRWxlbWVudCApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfbG9ja0V2ZW50ICk7XG5cblx0XHRcdFx0c2NvcGUuaXNMb2NrZWQgPSB0cnVlO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF91bmxvY2tFdmVudCApO1xuXG5cdFx0XHRcdHNjb3BlLmlzTG9ja2VkID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uUG9pbnRlcmxvY2tFcnJvcigpIHtcblxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLlBvaW50ZXJMb2NrQ29udHJvbHM6IFVuYWJsZSB0byB1c2UgUG9pbnRlciBMb2NrIEFQSScgKTtcblxuXHRcdH1cblxuXHRcdHRoaXMuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2NoYW5nZScsIG9uUG9pbnRlcmxvY2tDaGFuZ2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tlcnJvcicsIG9uUG9pbnRlcmxvY2tFcnJvciApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2NoYW5nZScsIG9uUG9pbnRlcmxvY2tDaGFuZ2UgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tlcnJvcicsIG9uUG9pbnRlcmxvY2tFcnJvciApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dGhpcy5kaXNjb25uZWN0KCk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXRPYmplY3QgPSBmdW5jdGlvbiAoKSB7IC8vIHJldGFpbmluZyB0aGlzIG1ldGhvZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXG5cdFx0XHRyZXR1cm4gY2FtZXJhO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0RGlyZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zdCBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMyggMCwgMCwgLSAxICk7XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRcdFx0cmV0dXJuIHYuY29weSggZGlyZWN0aW9uICkuYXBwbHlRdWF0ZXJuaW9uKCBjYW1lcmEucXVhdGVybmlvbiApO1xuXG5cdFx0XHR9O1xuXG5cdFx0fSgpO1xuXG5cdFx0dGhpcy5tb3ZlRm9yd2FyZCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cblx0XHRcdC8vIG1vdmUgZm9yd2FyZCBwYXJhbGxlbCB0byB0aGUgeHotcGxhbmVcblx0XHRcdC8vIGFzc3VtZXMgY2FtZXJhLnVwIGlzIHktdXBcblxuXHRcdFx0X3ZlY3Rvci5zZXRGcm9tTWF0cml4Q29sdW1uKCBjYW1lcmEubWF0cml4LCAwICk7XG5cblx0XHRcdF92ZWN0b3IuY3Jvc3NWZWN0b3JzKCBjYW1lcmEudXAsIF92ZWN0b3IgKTtcblxuXHRcdFx0Y2FtZXJhLnBvc2l0aW9uLmFkZFNjYWxlZFZlY3RvciggX3ZlY3RvciwgZGlzdGFuY2UgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLm1vdmVSaWdodCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cblx0XHRcdF92ZWN0b3Iuc2V0RnJvbU1hdHJpeENvbHVtbiggY2FtZXJhLm1hdHJpeCwgMCApO1xuXG5cdFx0XHRjYW1lcmEucG9zaXRpb24uYWRkU2NhbGVkVmVjdG9yKCBfdmVjdG9yLCBkaXN0YW5jZSApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMubG9jayA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0dGhpcy5kb21FbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jaygpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMudW5sb2NrID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5jb25uZWN0KCk7XG5cblx0fVxuXG59XG5cbmV4cG9ydCB7IFBvaW50ZXJMb2NrQ29udHJvbHMgfTtcbiIsIi8qKlxuICogbGlsLWd1aVxuICogaHR0cHM6Ly9saWwtZ3VpLmdlb3JnZWFsd2F5cy5jb21cbiAqIEB2ZXJzaW9uIDAuMTYuMFxuICogQGF1dGhvciBHZW9yZ2UgTWljaGFlbCBCcm93ZXJcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5jbGFzcyB0e2NvbnN0cnVjdG9yKGksZSxzLG4scj1cImRpdlwiKXt0aGlzLnBhcmVudD1pLHRoaXMub2JqZWN0PWUsdGhpcy5wcm9wZXJ0eT1zLHRoaXMuX2Rpc2FibGVkPSExLHRoaXMuaW5pdGlhbFZhbHVlPXRoaXMuZ2V0VmFsdWUoKSx0aGlzLmRvbUVsZW1lbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNvbnRyb2xsZXJcIiksdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQobiksdGhpcy4kbmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuJG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIiksdC5uZXh0TmFtZUlEPXQubmV4dE5hbWVJRHx8MCx0aGlzLiRuYW1lLmlkPVwibGlsLWd1aS1uYW1lLVwiKyArK3QubmV4dE5hbWVJRCx0aGlzLiR3aWRnZXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChyKSx0aGlzLiR3aWRnZXQuY2xhc3NMaXN0LmFkZChcIndpZGdldFwiKSx0aGlzLiRkaXNhYmxlPXRoaXMuJHdpZGdldCx0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kbmFtZSksdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJHdpZGdldCksdGhpcy5wYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKSx0aGlzLnBhcmVudC5jb250cm9sbGVycy5wdXNoKHRoaXMpLHRoaXMucGFyZW50LiRjaGlsZHJlbi5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpLHRoaXMuX2xpc3RlbkNhbGxiYWNrPXRoaXMuX2xpc3RlbkNhbGxiYWNrLmJpbmQodGhpcyksdGhpcy5uYW1lKHMpfW5hbWUodCl7cmV0dXJuIHRoaXMuX25hbWU9dCx0aGlzLiRuYW1lLmlubmVySFRNTD10LHRoaXN9b25DaGFuZ2UodCl7cmV0dXJuIHRoaXMuX29uQ2hhbmdlPXQsdGhpc31fY2FsbE9uQ2hhbmdlKCl7dGhpcy5wYXJlbnQuX2NhbGxPbkNoYW5nZSh0aGlzKSx2b2lkIDAhPT10aGlzLl9vbkNoYW5nZSYmdGhpcy5fb25DaGFuZ2UuY2FsbCh0aGlzLHRoaXMuZ2V0VmFsdWUoKSksdGhpcy5fY2hhbmdlZD0hMH1vbkZpbmlzaENoYW5nZSh0KXtyZXR1cm4gdGhpcy5fb25GaW5pc2hDaGFuZ2U9dCx0aGlzfV9jYWxsT25GaW5pc2hDaGFuZ2UoKXt0aGlzLl9jaGFuZ2VkJiYodGhpcy5wYXJlbnQuX2NhbGxPbkZpbmlzaENoYW5nZSh0aGlzKSx2b2lkIDAhPT10aGlzLl9vbkZpbmlzaENoYW5nZSYmdGhpcy5fb25GaW5pc2hDaGFuZ2UuY2FsbCh0aGlzLHRoaXMuZ2V0VmFsdWUoKSkpLHRoaXMuX2NoYW5nZWQ9ITF9cmVzZXQoKXtyZXR1cm4gdGhpcy5zZXRWYWx1ZSh0aGlzLmluaXRpYWxWYWx1ZSksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCksdGhpc31lbmFibGUodD0hMCl7cmV0dXJuIHRoaXMuZGlzYWJsZSghdCl9ZGlzYWJsZSh0PSEwKXtyZXR1cm4gdD09PXRoaXMuX2Rpc2FibGVkfHwodGhpcy5fZGlzYWJsZWQ9dCx0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImRpc2FibGVkXCIsdCksdGhpcy4kZGlzYWJsZS50b2dnbGVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLHQpKSx0aGlzfW9wdGlvbnModCl7Y29uc3QgaT10aGlzLnBhcmVudC5hZGQodGhpcy5vYmplY3QsdGhpcy5wcm9wZXJ0eSx0KTtyZXR1cm4gaS5uYW1lKHRoaXMuX25hbWUpLHRoaXMuZGVzdHJveSgpLGl9bWluKHQpe3JldHVybiB0aGlzfW1heCh0KXtyZXR1cm4gdGhpc31zdGVwKHQpe3JldHVybiB0aGlzfWxpc3Rlbih0PSEwKXtyZXR1cm4gdGhpcy5fbGlzdGVuaW5nPXQsdm9pZCAwIT09dGhpcy5fbGlzdGVuQ2FsbGJhY2tJRCYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2xpc3RlbkNhbGxiYWNrSUQpLHRoaXMuX2xpc3RlbkNhbGxiYWNrSUQ9dm9pZCAwKSx0aGlzLl9saXN0ZW5pbmcmJnRoaXMuX2xpc3RlbkNhbGxiYWNrKCksdGhpc31fbGlzdGVuQ2FsbGJhY2soKXt0aGlzLl9saXN0ZW5DYWxsYmFja0lEPXJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9saXN0ZW5DYWxsYmFjayksdGhpcy51cGRhdGVEaXNwbGF5KCl9Z2V0VmFsdWUoKXtyZXR1cm4gdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV19c2V0VmFsdWUodCl7cmV0dXJuIHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldPXQsdGhpcy5fY2FsbE9uQ2hhbmdlKCksdGhpcy51cGRhdGVEaXNwbGF5KCksdGhpc311cGRhdGVEaXNwbGF5KCl7cmV0dXJuIHRoaXN9bG9hZCh0KXtyZXR1cm4gdGhpcy5zZXRWYWx1ZSh0KSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKSx0aGlzfXNhdmUoKXtyZXR1cm4gdGhpcy5nZXRWYWx1ZSgpfWRlc3Ryb3koKXt0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UodGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKSwxKSx0aGlzLnBhcmVudC5jb250cm9sbGVycy5zcGxpY2UodGhpcy5wYXJlbnQuY29udHJvbGxlcnMuaW5kZXhPZih0aGlzKSwxKSx0aGlzLnBhcmVudC4kY2hpbGRyZW4ucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KX19Y2xhc3MgaSBleHRlbmRzIHR7Y29uc3RydWN0b3IodCxpLGUpe3N1cGVyKHQsaSxlLFwiYm9vbGVhblwiLFwibGFiZWxcIiksdGhpcy4kaW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImNoZWNrYm94XCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLHRoaXMuJG5hbWUuaWQpLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiRpbnB1dCksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCgpPT57dGhpcy5zZXRWYWx1ZSh0aGlzLiRpbnB1dC5jaGVja2VkKSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKX0pLHRoaXMuJGRpc2FibGU9dGhpcy4kaW5wdXQsdGhpcy51cGRhdGVEaXNwbGF5KCl9dXBkYXRlRGlzcGxheSgpe3JldHVybiB0aGlzLiRpbnB1dC5jaGVja2VkPXRoaXMuZ2V0VmFsdWUoKSx0aGlzfX1mdW5jdGlvbiBlKHQpe2xldCBpLGU7cmV0dXJuKGk9dC5tYXRjaCgvKCN8MHgpPyhbYS1mMC05XXs2fSkvaSkpP2U9aVsyXTooaT10Lm1hdGNoKC9yZ2JcXChcXHMqKFxcZCopXFxzKixcXHMqKFxcZCopXFxzKixcXHMqKFxcZCopXFxzKlxcKS8pKT9lPXBhcnNlSW50KGlbMV0pLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLDApK3BhcnNlSW50KGlbMl0pLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLDApK3BhcnNlSW50KGlbM10pLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLDApOihpPXQubWF0Y2goL14jPyhbYS1mMC05XSkoW2EtZjAtOV0pKFthLWYwLTldKSQvaSkpJiYoZT1pWzFdK2lbMV0raVsyXStpWzJdK2lbM10raVszXSksISFlJiZcIiNcIitlfWNvbnN0IHM9e2lzUHJpbWl0aXZlOiEwLG1hdGNoOnQ9Plwic3RyaW5nXCI9PXR5cGVvZiB0LGZyb21IZXhTdHJpbmc6ZSx0b0hleFN0cmluZzplfSxuPXtpc1ByaW1pdGl2ZTohMCxtYXRjaDp0PT5cIm51bWJlclwiPT10eXBlb2YgdCxmcm9tSGV4U3RyaW5nOnQ9PnBhcnNlSW50KHQuc3Vic3RyaW5nKDEpLDE2KSx0b0hleFN0cmluZzp0PT5cIiNcIit0LnRvU3RyaW5nKDE2KS5wYWRTdGFydCg2LDApfSxyPXtpc1ByaW1pdGl2ZTohMSxtYXRjaDpBcnJheS5pc0FycmF5LGZyb21IZXhTdHJpbmcodCxpLGU9MSl7Y29uc3Qgcz1uLmZyb21IZXhTdHJpbmcodCk7aVswXT0ocz4+MTYmMjU1KS8yNTUqZSxpWzFdPShzPj44JjI1NSkvMjU1KmUsaVsyXT0oMjU1JnMpLzI1NSplfSx0b0hleFN0cmluZzooW3QsaSxlXSxzPTEpPT5uLnRvSGV4U3RyaW5nKHQqKHM9MjU1L3MpPDwxNl5pKnM8PDheZSpzPDwwKX0sbD17aXNQcmltaXRpdmU6ITEsbWF0Y2g6dD0+T2JqZWN0KHQpPT09dCxmcm9tSGV4U3RyaW5nKHQsaSxlPTEpe2NvbnN0IHM9bi5mcm9tSGV4U3RyaW5nKHQpO2kucj0ocz4+MTYmMjU1KS8yNTUqZSxpLmc9KHM+PjgmMjU1KS8yNTUqZSxpLmI9KDI1NSZzKS8yNTUqZX0sdG9IZXhTdHJpbmc6KHtyOnQsZzppLGI6ZX0scz0xKT0+bi50b0hleFN0cmluZyh0KihzPTI1NS9zKTw8MTZeaSpzPDw4XmUqczw8MCl9LG89W3MsbixyLGxdO2NsYXNzIGEgZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKHQsaSxzLG4pe3ZhciByO3N1cGVyKHQsaSxzLFwiY29sb3JcIiksdGhpcy4kaW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImNvbG9yXCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsLTEpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLHRoaXMuJG5hbWUuaWQpLHRoaXMuJHRleHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLHRoaXMuJHRleHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKSx0aGlzLiR0ZXh0LnNldEF0dHJpYnV0ZShcInNwZWxsY2hlY2tcIixcImZhbHNlXCIpLHRoaXMuJHRleHQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsdGhpcy4kbmFtZS5pZCksdGhpcy4kZGlzcGxheT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuJGRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIiksdGhpcy4kZGlzcGxheS5hcHBlbmRDaGlsZCh0aGlzLiRpbnB1dCksdGhpcy4kd2lkZ2V0LmFwcGVuZENoaWxkKHRoaXMuJGRpc3BsYXkpLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiR0ZXh0KSx0aGlzLl9mb3JtYXQ9KHI9dGhpcy5pbml0aWFsVmFsdWUsby5maW5kKHQ9PnQubWF0Y2gocikpKSx0aGlzLl9yZ2JTY2FsZT1uLHRoaXMuX2luaXRpYWxWYWx1ZUhleFN0cmluZz10aGlzLnNhdmUoKSx0aGlzLl90ZXh0Rm9jdXNlZD0hMSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwoKT0+e3RoaXMuX3NldFZhbHVlRnJvbUhleFN0cmluZyh0aGlzLiRpbnB1dC52YWx1ZSl9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCgpPT57dGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCl9KSx0aGlzLiR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCgpPT57Y29uc3QgdD1lKHRoaXMuJHRleHQudmFsdWUpO3QmJnRoaXMuX3NldFZhbHVlRnJvbUhleFN0cmluZyh0KX0pLHRoaXMuJHRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsKCk9Pnt0aGlzLl90ZXh0Rm9jdXNlZD0hMCx0aGlzLiR0ZXh0LnNlbGVjdCgpfSksdGhpcy4kdGV4dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCgpPT57dGhpcy5fdGV4dEZvY3VzZWQ9ITEsdGhpcy51cGRhdGVEaXNwbGF5KCksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCl9KSx0aGlzLiRkaXNhYmxlPXRoaXMuJHRleHQsdGhpcy51cGRhdGVEaXNwbGF5KCl9cmVzZXQoKXtyZXR1cm4gdGhpcy5fc2V0VmFsdWVGcm9tSGV4U3RyaW5nKHRoaXMuX2luaXRpYWxWYWx1ZUhleFN0cmluZyksdGhpc31fc2V0VmFsdWVGcm9tSGV4U3RyaW5nKHQpe2lmKHRoaXMuX2Zvcm1hdC5pc1ByaW1pdGl2ZSl7Y29uc3QgaT10aGlzLl9mb3JtYXQuZnJvbUhleFN0cmluZyh0KTt0aGlzLnNldFZhbHVlKGkpfWVsc2UgdGhpcy5fZm9ybWF0LmZyb21IZXhTdHJpbmcodCx0aGlzLmdldFZhbHVlKCksdGhpcy5fcmdiU2NhbGUpLHRoaXMuX2NhbGxPbkNoYW5nZSgpLHRoaXMudXBkYXRlRGlzcGxheSgpfXNhdmUoKXtyZXR1cm4gdGhpcy5fZm9ybWF0LnRvSGV4U3RyaW5nKHRoaXMuZ2V0VmFsdWUoKSx0aGlzLl9yZ2JTY2FsZSl9bG9hZCh0KXtyZXR1cm4gdGhpcy5fc2V0VmFsdWVGcm9tSGV4U3RyaW5nKHQpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpLHRoaXN9dXBkYXRlRGlzcGxheSgpe3JldHVybiB0aGlzLiRpbnB1dC52YWx1ZT10aGlzLl9mb3JtYXQudG9IZXhTdHJpbmcodGhpcy5nZXRWYWx1ZSgpLHRoaXMuX3JnYlNjYWxlKSx0aGlzLl90ZXh0Rm9jdXNlZHx8KHRoaXMuJHRleHQudmFsdWU9dGhpcy4kaW5wdXQudmFsdWUuc3Vic3RyaW5nKDEpKSx0aGlzLiRkaXNwbGF5LnN0eWxlLmJhY2tncm91bmRDb2xvcj10aGlzLiRpbnB1dC52YWx1ZSx0aGlzfX1jbGFzcyBoIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcih0LGksZSl7c3VwZXIodCxpLGUsXCJmdW5jdGlvblwiKSx0aGlzLiRidXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSx0aGlzLiRidXR0b24uYXBwZW5kQ2hpbGQodGhpcy4kbmFtZSksdGhpcy4kd2lkZ2V0LmFwcGVuZENoaWxkKHRoaXMuJGJ1dHRvbiksdGhpcy4kYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHQ9Pnt0LnByZXZlbnREZWZhdWx0KCksdGhpcy5nZXRWYWx1ZSgpLmNhbGwodGhpcy5vYmplY3QpfSksdGhpcy4kYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsKCk9Pnt9KSx0aGlzLiRkaXNhYmxlPXRoaXMuJGJ1dHRvbn19Y2xhc3MgZCBleHRlbmRzIHR7Y29uc3RydWN0b3IodCxpLGUscyxuLHIpe3N1cGVyKHQsaSxlLFwibnVtYmVyXCIpLHRoaXMuX2luaXRJbnB1dCgpLHRoaXMubWluKHMpLHRoaXMubWF4KG4pO2NvbnN0IGw9dm9pZCAwIT09cjt0aGlzLnN0ZXAobD9yOnRoaXMuX2dldEltcGxpY2l0U3RlcCgpLGwpLHRoaXMudXBkYXRlRGlzcGxheSgpfW1pbih0KXtyZXR1cm4gdGhpcy5fbWluPXQsdGhpcy5fb25VcGRhdGVNaW5NYXgoKSx0aGlzfW1heCh0KXtyZXR1cm4gdGhpcy5fbWF4PXQsdGhpcy5fb25VcGRhdGVNaW5NYXgoKSx0aGlzfXN0ZXAodCxpPSEwKXtyZXR1cm4gdGhpcy5fc3RlcD10LHRoaXMuX3N0ZXBFeHBsaWNpdD1pLHRoaXN9dXBkYXRlRGlzcGxheSgpe2NvbnN0IHQ9dGhpcy5nZXRWYWx1ZSgpO2lmKHRoaXMuX2hhc1NsaWRlcil7bGV0IGk9KHQtdGhpcy5fbWluKS8odGhpcy5fbWF4LXRoaXMuX21pbik7aT1NYXRoLm1heCgwLE1hdGgubWluKGksMSkpLHRoaXMuJGZpbGwuc3R5bGUud2lkdGg9MTAwKmkrXCIlXCJ9cmV0dXJuIHRoaXMuX2lucHV0Rm9jdXNlZHx8KHRoaXMuJGlucHV0LnZhbHVlPXQpLHRoaXN9X2luaXRJbnB1dCgpe3RoaXMuJGlucHV0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJudW1iZXJcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwic3RlcFwiLFwiYW55XCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLHRoaXMuJG5hbWUuaWQpLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiRpbnB1dCksdGhpcy4kZGlzYWJsZT10aGlzLiRpbnB1dDtjb25zdCB0PXQ9Pntjb25zdCBpPXBhcnNlRmxvYXQodGhpcy4kaW5wdXQudmFsdWUpO2lzTmFOKGkpfHwodGhpcy5fc25hcENsYW1wU2V0VmFsdWUoaSt0KSx0aGlzLiRpbnB1dC52YWx1ZT10aGlzLmdldFZhbHVlKCkpfTtsZXQgaSxlLHMsbixyLGw9ITE7Y29uc3Qgbz10PT57aWYobCl7Y29uc3Qgcz10LmNsaWVudFgtaSxuPXQuY2xpZW50WS1lO01hdGguYWJzKG4pPjU/KHQucHJldmVudERlZmF1bHQoKSx0aGlzLiRpbnB1dC5ibHVyKCksbD0hMSx0aGlzLl9zZXREcmFnZ2luZ1N0eWxlKCEwLFwidmVydGljYWxcIikpOk1hdGguYWJzKHMpPjUmJmEoKX1pZighbCl7Y29uc3QgaT10LmNsaWVudFktcztyLT1pKnRoaXMuX3N0ZXAqdGhpcy5fYXJyb3dLZXlNdWx0aXBsaWVyKHQpLG4rcj50aGlzLl9tYXg/cj10aGlzLl9tYXgtbjpuK3I8dGhpcy5fbWluJiYocj10aGlzLl9taW4tbiksdGhpcy5fc25hcENsYW1wU2V0VmFsdWUobityKX1zPXQuY2xpZW50WX0sYT0oKT0+e3RoaXMuX3NldERyYWdnaW5nU3R5bGUoITEsXCJ2ZXJ0aWNhbFwiKSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLG8pLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGEpfTt0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwoKT0+e2NvbnN0IHQ9cGFyc2VGbG9hdCh0aGlzLiRpbnB1dC52YWx1ZSk7aXNOYU4odCl8fHRoaXMuc2V0VmFsdWUodGhpcy5fY2xhbXAodCkpfSksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixpPT57XCJFbnRlclwiPT09aS5jb2RlJiZ0aGlzLiRpbnB1dC5ibHVyKCksXCJBcnJvd1VwXCI9PT1pLmNvZGUmJihpLnByZXZlbnREZWZhdWx0KCksdCh0aGlzLl9zdGVwKnRoaXMuX2Fycm93S2V5TXVsdGlwbGllcihpKSkpLFwiQXJyb3dEb3duXCI9PT1pLmNvZGUmJihpLnByZXZlbnREZWZhdWx0KCksdCh0aGlzLl9zdGVwKnRoaXMuX2Fycm93S2V5TXVsdGlwbGllcihpKSotMSkpfSksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsaT0+e3RoaXMuX2lucHV0Rm9jdXNlZCYmKGkucHJldmVudERlZmF1bHQoKSx0KHRoaXMuX3N0ZXAqdGhpcy5fbm9ybWFsaXplTW91c2VXaGVlbChpKSkpfSksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHQ9PntpPXQuY2xpZW50WCxlPXM9dC5jbGllbnRZLGw9ITAsbj10aGlzLmdldFZhbHVlKCkscj0wLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsbyksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsYSl9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwoKT0+e3RoaXMuX2lucHV0Rm9jdXNlZD0hMH0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsKCk9Pnt0aGlzLl9pbnB1dEZvY3VzZWQ9ITEsdGhpcy51cGRhdGVEaXNwbGF5KCksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCl9KX1faW5pdFNsaWRlcigpe3RoaXMuX2hhc1NsaWRlcj0hMCx0aGlzLiRzbGlkZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLiRzbGlkZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlclwiKSx0aGlzLiRmaWxsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy4kZmlsbC5jbGFzc0xpc3QuYWRkKFwiZmlsbFwiKSx0aGlzLiRzbGlkZXIuYXBwZW5kQ2hpbGQodGhpcy4kZmlsbCksdGhpcy4kd2lkZ2V0Lmluc2VydEJlZm9yZSh0aGlzLiRzbGlkZXIsdGhpcy4kaW5wdXQpLHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGFzU2xpZGVyXCIpO2NvbnN0IHQ9dD0+e2NvbnN0IGk9dGhpcy4kc2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2xldCBlPShzPXQsbj1pLmxlZnQscj1pLnJpZ2h0LGw9dGhpcy5fbWluLG89dGhpcy5fbWF4LChzLW4pLyhyLW4pKihvLWwpK2wpO3ZhciBzLG4scixsLG87dGhpcy5fc25hcENsYW1wU2V0VmFsdWUoZSl9LGk9aT0+e3QoaS5jbGllbnRYKX0sZT0oKT0+e3RoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpLHRoaXMuX3NldERyYWdnaW5nU3R5bGUoITEpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsaSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsZSl9O2xldCBzLG4scj0hMTtjb25zdCBsPWk9PntpLnByZXZlbnREZWZhdWx0KCksdGhpcy5fc2V0RHJhZ2dpbmdTdHlsZSghMCksdChpLnRvdWNoZXNbMF0uY2xpZW50WCkscj0hMX0sbz1pPT57aWYocil7Y29uc3QgdD1pLnRvdWNoZXNbMF0uY2xpZW50WC1zLGU9aS50b3VjaGVzWzBdLmNsaWVudFktbjtNYXRoLmFicyh0KT5NYXRoLmFicyhlKT9sKGkpOih3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLG8pLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixhKSl9ZWxzZSBpLnByZXZlbnREZWZhdWx0KCksdChpLnRvdWNoZXNbMF0uY2xpZW50WCl9LGE9KCk9Pnt0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKSx0aGlzLl9zZXREcmFnZ2luZ1N0eWxlKCExKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLG8pLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixhKX0saD10aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UuYmluZCh0aGlzKTtsZXQgZDt0aGlzLiRzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHM9Pnt0aGlzLl9zZXREcmFnZ2luZ1N0eWxlKCEwKSx0KHMuY2xpZW50WCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixpKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixlKX0pLHRoaXMuJHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHQ9Pnt0LnRvdWNoZXMubGVuZ3RoPjF8fCh0aGlzLl9oYXNTY3JvbGxCYXI/KHM9dC50b3VjaGVzWzBdLmNsaWVudFgsbj10LnRvdWNoZXNbMF0uY2xpZW50WSxyPSEwKTpsKHQpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsbyksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLGEpKX0pLHRoaXMuJHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIix0PT57aWYoTWF0aC5hYnModC5kZWx0YVgpPE1hdGguYWJzKHQuZGVsdGFZKSYmdGhpcy5faGFzU2Nyb2xsQmFyKXJldHVybjt0LnByZXZlbnREZWZhdWx0KCk7Y29uc3QgaT10aGlzLl9ub3JtYWxpemVNb3VzZVdoZWVsKHQpKnRoaXMuX3N0ZXA7dGhpcy5fc25hcENsYW1wU2V0VmFsdWUodGhpcy5nZXRWYWx1ZSgpK2kpLHRoaXMuJGlucHV0LnZhbHVlPXRoaXMuZ2V0VmFsdWUoKSxjbGVhclRpbWVvdXQoZCksZD1zZXRUaW1lb3V0KGgsNDAwKX0pfV9zZXREcmFnZ2luZ1N0eWxlKHQsaT1cImhvcml6b250YWxcIil7dGhpcy4kc2xpZGVyJiZ0aGlzLiRzbGlkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiLHQpLGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImxpbC1ndWktZHJhZ2dpbmdcIix0KSxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsaWwtZ3VpLVwiK2ksdCl9X2dldEltcGxpY2l0U3RlcCgpe3JldHVybiB0aGlzLl9oYXNNaW4mJnRoaXMuX2hhc01heD8odGhpcy5fbWF4LXRoaXMuX21pbikvMWUzOi4xfV9vblVwZGF0ZU1pbk1heCgpeyF0aGlzLl9oYXNTbGlkZXImJnRoaXMuX2hhc01pbiYmdGhpcy5faGFzTWF4JiYodGhpcy5fc3RlcEV4cGxpY2l0fHx0aGlzLnN0ZXAodGhpcy5fZ2V0SW1wbGljaXRTdGVwKCksITEpLHRoaXMuX2luaXRTbGlkZXIoKSx0aGlzLnVwZGF0ZURpc3BsYXkoKSl9X25vcm1hbGl6ZU1vdXNlV2hlZWwodCl7bGV0e2RlbHRhWDppLGRlbHRhWTplfT10O01hdGguZmxvb3IodC5kZWx0YVkpIT09dC5kZWx0YVkmJnQud2hlZWxEZWx0YSYmKGk9MCxlPS10LndoZWVsRGVsdGEvMTIwLGUqPXRoaXMuX3N0ZXBFeHBsaWNpdD8xOjEwKTtyZXR1cm4gaSstZX1fYXJyb3dLZXlNdWx0aXBsaWVyKHQpe2xldCBpPXRoaXMuX3N0ZXBFeHBsaWNpdD8xOjEwO3JldHVybiB0LnNoaWZ0S2V5P2kqPTEwOnQuYWx0S2V5JiYoaS89MTApLGl9X3NuYXAodCl7Y29uc3QgaT1NYXRoLnJvdW5kKHQvdGhpcy5fc3RlcCkqdGhpcy5fc3RlcDtyZXR1cm4gcGFyc2VGbG9hdChpLnRvUHJlY2lzaW9uKDE1KSl9X2NsYW1wKHQpe3JldHVybiB0PHRoaXMuX21pbiYmKHQ9dGhpcy5fbWluKSx0PnRoaXMuX21heCYmKHQ9dGhpcy5fbWF4KSx0fV9zbmFwQ2xhbXBTZXRWYWx1ZSh0KXt0aGlzLnNldFZhbHVlKHRoaXMuX2NsYW1wKHRoaXMuX3NuYXAodCkpKX1nZXQgX2hhc1Njcm9sbEJhcigpe2NvbnN0IHQ9dGhpcy5wYXJlbnQucm9vdC4kY2hpbGRyZW47cmV0dXJuIHQuc2Nyb2xsSGVpZ2h0PnQuY2xpZW50SGVpZ2h0fWdldCBfaGFzTWluKCl7cmV0dXJuIHZvaWQgMCE9PXRoaXMuX21pbn1nZXQgX2hhc01heCgpe3JldHVybiB2b2lkIDAhPT10aGlzLl9tYXh9fWNsYXNzIGMgZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKHQsaSxlLHMpe3N1cGVyKHQsaSxlLFwib3B0aW9uXCIpLHRoaXMuJHNlbGVjdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLHRoaXMuJHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIix0aGlzLiRuYW1lLmlkKSx0aGlzLiRkaXNwbGF5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy4kZGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKSx0aGlzLl92YWx1ZXM9QXJyYXkuaXNBcnJheShzKT9zOk9iamVjdC52YWx1ZXMocyksdGhpcy5fbmFtZXM9QXJyYXkuaXNBcnJheShzKT9zOk9iamVjdC5rZXlzKHMpLHRoaXMuX25hbWVzLmZvckVhY2godD0+e2NvbnN0IGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtpLmlubmVySFRNTD10LHRoaXMuJHNlbGVjdC5hcHBlbmRDaGlsZChpKX0pLHRoaXMuJHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsKCk9Pnt0aGlzLnNldFZhbHVlKHRoaXMuX3ZhbHVlc1t0aGlzLiRzZWxlY3Quc2VsZWN0ZWRJbmRleF0pLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpfSksdGhpcy4kc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCgpPT57dGhpcy4kZGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZm9jdXNcIil9KSx0aGlzLiRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoKT0+e3RoaXMuJGRpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImZvY3VzXCIpfSksdGhpcy4kd2lkZ2V0LmFwcGVuZENoaWxkKHRoaXMuJHNlbGVjdCksdGhpcy4kd2lkZ2V0LmFwcGVuZENoaWxkKHRoaXMuJGRpc3BsYXkpLHRoaXMuJGRpc2FibGU9dGhpcy4kc2VsZWN0LHRoaXMudXBkYXRlRGlzcGxheSgpfXVwZGF0ZURpc3BsYXkoKXtjb25zdCB0PXRoaXMuZ2V0VmFsdWUoKSxpPXRoaXMuX3ZhbHVlcy5pbmRleE9mKHQpO3JldHVybiB0aGlzLiRzZWxlY3Quc2VsZWN0ZWRJbmRleD1pLHRoaXMuJGRpc3BsYXkuaW5uZXJIVE1MPS0xPT09aT90OnRoaXMuX25hbWVzW2ldLHRoaXN9fWNsYXNzIHUgZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKHQsaSxlKXtzdXBlcih0LGksZSxcInN0cmluZ1wiKSx0aGlzLiRpbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIix0aGlzLiRuYW1lLmlkKSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwoKT0+e3RoaXMuc2V0VmFsdWUodGhpcy4kaW5wdXQudmFsdWUpfSksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0PT57XCJFbnRlclwiPT09dC5jb2RlJiZ0aGlzLiRpbnB1dC5ibHVyKCl9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCgpPT57dGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCl9KSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kaW5wdXQpLHRoaXMuJGRpc2FibGU9dGhpcy4kaW5wdXQsdGhpcy51cGRhdGVEaXNwbGF5KCl9dXBkYXRlRGlzcGxheSgpe3JldHVybiB0aGlzLiRpbnB1dC52YWx1ZT10aGlzLmdldFZhbHVlKCksdGhpc319bGV0IHA9ITE7Y2xhc3MgZ3tjb25zdHJ1Y3Rvcih7cGFyZW50OnQsYXV0b1BsYWNlOmk9dm9pZCAwPT09dCxjb250YWluZXI6ZSx3aWR0aDpzLHRpdGxlOm49XCJDb250cm9sc1wiLGluamVjdFN0eWxlczpyPSEwLHRvdWNoU3R5bGVzOmw9ITB9PXt9KXtpZih0aGlzLnBhcmVudD10LHRoaXMucm9vdD10P3Qucm9vdDp0aGlzLHRoaXMuY2hpbGRyZW49W10sdGhpcy5jb250cm9sbGVycz1bXSx0aGlzLmZvbGRlcnM9W10sdGhpcy5fY2xvc2VkPSExLHRoaXMuX2hpZGRlbj0hMSx0aGlzLmRvbUVsZW1lbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpbC1ndWlcIiksdGhpcy4kdGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLiR0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIiksdGhpcy4kdGl0bGUuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwiYnV0dG9uXCIpLHRoaXMuJHRpdGxlLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwhMCksdGhpcy4kdGl0bGUuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwwKSx0aGlzLiR0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+dGhpcy5vcGVuQW5pbWF0ZWQodGhpcy5fY2xvc2VkKSksdGhpcy4kdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0PT57XCJFbnRlclwiIT09dC5jb2RlJiZcIlNwYWNlXCIhPT10LmNvZGV8fCh0LnByZXZlbnREZWZhdWx0KCksdGhpcy4kdGl0bGUuY2xpY2soKSl9KSx0aGlzLiR0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCgpPT57fSksdGhpcy4kY2hpbGRyZW49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLiRjaGlsZHJlbi5jbGFzc0xpc3QuYWRkKFwiY2hpbGRyZW5cIiksdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJHRpdGxlKSx0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kY2hpbGRyZW4pLHRoaXMudGl0bGUobiksbCYmdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhbGxvdy10b3VjaC1zdHlsZXNcIiksdGhpcy5wYXJlbnQpcmV0dXJuIHRoaXMucGFyZW50LmNoaWxkcmVuLnB1c2godGhpcyksdGhpcy5wYXJlbnQuZm9sZGVycy5wdXNoKHRoaXMpLHZvaWQgdGhpcy5wYXJlbnQuJGNoaWxkcmVuLmFwcGVuZENoaWxkKHRoaXMuZG9tRWxlbWVudCk7dGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyb290XCIpLCFwJiZyJiYoIWZ1bmN0aW9uKHQpe2NvbnN0IGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2kuaW5uZXJIVE1MPXQ7Y29uc3QgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZCBsaW5rW3JlbD1zdHlsZXNoZWV0XSwgaGVhZCBzdHlsZVwiKTtlP2RvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGksZSk6ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChpKX0oJy5saWwtZ3Vpey0tYmFja2dyb3VuZC1jb2xvcjojMWYxZjFmOy0tdGV4dC1jb2xvcjojZWJlYmViOy0tdGl0bGUtYmFja2dyb3VuZC1jb2xvcjojMTExOy0tdGl0bGUtdGV4dC1jb2xvcjojZWJlYmViOy0td2lkZ2V0LWNvbG9yOiM0MjQyNDI7LS1ob3Zlci1jb2xvcjojNGY0ZjRmOy0tZm9jdXMtY29sb3I6IzU5NTk1OTstLW51bWJlci1jb2xvcjojMmNjOWZmOy0tc3RyaW5nLWNvbG9yOiNhMmRiM2M7LS1mb250LXNpemU6MTFweDstLWlucHV0LWZvbnQtc2l6ZToxMXB4Oy0tZm9udC1mYW1pbHk6LWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxBcmlhbCxzYW5zLXNlcmlmOy0tZm9udC1mYW1pbHktbW9ubzpNZW5sbyxNb25hY28sQ29uc29sYXMsXCJEcm9pZCBTYW5zIE1vbm9cIixtb25vc3BhY2U7LS1wYWRkaW5nOjRweDstLXNwYWNpbmc6NHB4Oy0td2lkZ2V0LWhlaWdodDoyMHB4Oy0tbmFtZS13aWR0aDo0NSU7LS1zbGlkZXIta25vYi13aWR0aDoycHg7LS1zbGlkZXItaW5wdXQtd2lkdGg6MjclOy0tY29sb3ItaW5wdXQtd2lkdGg6MjclOy0tc2xpZGVyLWlucHV0LW1pbi13aWR0aDo0NXB4Oy0tY29sb3ItaW5wdXQtbWluLXdpZHRoOjQ1cHg7LS1mb2xkZXItaW5kZW50OjdweDstLXdpZGdldC1wYWRkaW5nOjAgMCAwIDNweDstLXdpZGdldC1ib3JkZXItcmFkaXVzOjJweDstLWNoZWNrYm94LXNpemU6Y2FsYyh2YXIoLS13aWRnZXQtaGVpZ2h0KSowLjc1KTstLXNjcm9sbGJhci13aWR0aDo1cHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1mb250LWZhbWlseSk7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjE7dGV4dC1hbGlnbjpsZWZ0O3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmV9LmxpbC1ndWksLmxpbC1ndWkgKntib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luOjA7cGFkZGluZzowfS5saWwtZ3VpLnJvb3R7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDp2YXIoLS13aWR0aCwyNDVweCl9LmxpbC1ndWkucm9vdD4udGl0bGV7YmFja2dyb3VuZDp2YXIoLS10aXRsZS1iYWNrZ3JvdW5kLWNvbG9yKTtjb2xvcjp2YXIoLS10aXRsZS10ZXh0LWNvbG9yKX0ubGlsLWd1aS5yb290Pi5jaGlsZHJlbntvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG99LmxpbC1ndWkucm9vdD4uY2hpbGRyZW46Oi13ZWJraXQtc2Nyb2xsYmFye2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1jb2xvcik7aGVpZ2h0OnZhcigtLXNjcm9sbGJhci13aWR0aCk7d2lkdGg6dmFyKC0tc2Nyb2xsYmFyLXdpZHRoKX0ubGlsLWd1aS5yb290Pi5jaGlsZHJlbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7YmFja2dyb3VuZDp2YXIoLS1mb2N1cy1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS1zY3JvbGxiYXItd2lkdGgpfS5saWwtZ3VpLmZvcmNlLXRvdWNoLXN0eWxlc3stLXdpZGdldC1oZWlnaHQ6MjhweDstLXBhZGRpbmc6NnB4Oy0tc3BhY2luZzo2cHg7LS1mb250LXNpemU6MTNweDstLWlucHV0LWZvbnQtc2l6ZToxNnB4Oy0tZm9sZGVyLWluZGVudDoxMHB4Oy0tc2Nyb2xsYmFyLXdpZHRoOjdweDstLXNsaWRlci1pbnB1dC1taW4td2lkdGg6NTBweDstLWNvbG9yLWlucHV0LW1pbi13aWR0aDo2NXB4fS5saWwtZ3VpLmF1dG9QbGFjZXttYXgtaGVpZ2h0OjEwMCU7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MTVweDt0b3A6MDt6LWluZGV4OjEwMDF9LmxpbC1ndWkgLmNvbnRyb2xsZXJ7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDttYXJnaW46dmFyKC0tc3BhY2luZykgMDtwYWRkaW5nOjAgdmFyKC0tcGFkZGluZyl9LmxpbC1ndWkgLmNvbnRyb2xsZXIuZGlzYWJsZWR7b3BhY2l0eTouNX0ubGlsLWd1aSAuY29udHJvbGxlci5kaXNhYmxlZCwubGlsLWd1aSAuY29udHJvbGxlci5kaXNhYmxlZCAqe3BvaW50ZXItZXZlbnRzOm5vbmUhaW1wb3J0YW50fS5saWwtZ3VpIC5jb250cm9sbGVyPi5uYW1le2ZsZXgtc2hyaW5rOjA7bGluZS1oZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7bWluLXdpZHRoOnZhcigtLW5hbWUtd2lkdGgpO3BhZGRpbmctcmlnaHQ6dmFyKC0tc3BhY2luZyk7d2hpdGUtc3BhY2U6cHJlfS5saWwtZ3VpIC5jb250cm9sbGVyIC53aWRnZXR7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6ZmxleDttaW4taGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9LmxpbC1ndWkgLmNvbnRyb2xsZXIuc3RyaW5nIGlucHV0e2NvbG9yOnZhcigtLXN0cmluZy1jb2xvcil9LmxpbC1ndWkgLmNvbnRyb2xsZXIuYm9vbGVhbiAud2lkZ2V0e2N1cnNvcjpwb2ludGVyfS5saWwtZ3VpIC5jb250cm9sbGVyLmNvbG9yIC5kaXNwbGF5e2JvcmRlci1yYWRpdXM6dmFyKC0td2lkZ2V0LWJvcmRlci1yYWRpdXMpO2hlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5saWwtZ3VpIC5jb250cm9sbGVyLmNvbG9yIGlucHV0W3R5cGU9Y29sb3Jde2N1cnNvcjpwb2ludGVyO2hlaWdodDoxMDAlO29wYWNpdHk6MDt3aWR0aDoxMDAlfS5saWwtZ3VpIC5jb250cm9sbGVyLmNvbG9yIGlucHV0W3R5cGU9dGV4dF17ZmxleC1zaHJpbms6MDtmb250LWZhbWlseTp2YXIoLS1mb250LWZhbWlseS1tb25vKTttYXJnaW4tbGVmdDp2YXIoLS1zcGFjaW5nKTttaW4td2lkdGg6dmFyKC0tY29sb3ItaW5wdXQtbWluLXdpZHRoKTt3aWR0aDp2YXIoLS1jb2xvci1pbnB1dC13aWR0aCl9LmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIHNlbGVjdHttYXgtd2lkdGg6MTAwJTtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJX0ubGlsLWd1aSAuY29udHJvbGxlci5vcHRpb24gLmRpc3BsYXl7YmFja2dyb3VuZDp2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0td2lkZ2V0LWJvcmRlci1yYWRpdXMpO2hlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTttYXgtd2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZy1sZWZ0Oi41NWVtO3BhZGRpbmctcmlnaHQ6MS43NWVtO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7d29yZC1icmVhazpicmVhay1hbGx9LmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIC5kaXNwbGF5LmFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWZvY3VzLWNvbG9yKX0ubGlsLWd1aSAuY29udHJvbGxlci5vcHRpb24gLmRpc3BsYXk6YWZ0ZXJ7Ym90dG9tOjA7Y29udGVudDpcIuKGlVwiO2ZvbnQtZmFtaWx5OmxpbC1ndWk7cGFkZGluZy1yaWdodDouMzc1ZW07cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MH0ubGlsLWd1aSAuY29udHJvbGxlci5vcHRpb24gLndpZGdldCwubGlsLWd1aSAuY29udHJvbGxlci5vcHRpb24gc2VsZWN0e2N1cnNvcjpwb2ludGVyfS5saWwtZ3VpIC5jb250cm9sbGVyLm51bWJlciBpbnB1dHtjb2xvcjp2YXIoLS1udW1iZXItY29sb3IpfS5saWwtZ3VpIC5jb250cm9sbGVyLm51bWJlci5oYXNTbGlkZXIgaW5wdXR7ZmxleC1zaHJpbms6MDttYXJnaW4tbGVmdDp2YXIoLS1zcGFjaW5nKTttaW4td2lkdGg6dmFyKC0tc2xpZGVyLWlucHV0LW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tc2xpZGVyLWlucHV0LXdpZHRoKX0ubGlsLWd1aSAuY29udHJvbGxlci5udW1iZXIgLnNsaWRlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS13aWRnZXQtYm9yZGVyLXJhZGl1cyk7Y3Vyc29yOmV3LXJlc2l6ZTtoZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmctcmlnaHQ6dmFyKC0tc2xpZGVyLWtub2Itd2lkdGgpO3RvdWNoLWFjdGlvbjpwYW4teTt3aWR0aDoxMDAlfS5saWwtZ3VpIC5jb250cm9sbGVyLm51bWJlciAuc2xpZGVyLmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWZvY3VzLWNvbG9yKX0ubGlsLWd1aSAuY29udHJvbGxlci5udW1iZXIgLnNsaWRlci5hY3RpdmUgLmZpbGx7b3BhY2l0eTouOTV9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyIC5maWxse2JvcmRlci1yaWdodDp2YXIoLS1zbGlkZXIta25vYi13aWR0aCkgc29saWQgdmFyKC0tbnVtYmVyLWNvbG9yKTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDoxMDAlfS5saWwtZ3VpLWRyYWdnaW5nIC5saWwtZ3Vpey0taG92ZXItY29sb3I6dmFyKC0td2lkZ2V0LWNvbG9yKX0ubGlsLWd1aS1kcmFnZ2luZyAqe2N1cnNvcjpldy1yZXNpemUhaW1wb3J0YW50fS5saWwtZ3VpLWRyYWdnaW5nLmxpbC1ndWktdmVydGljYWwgKntjdXJzb3I6bnMtcmVzaXplIWltcG9ydGFudH0ubGlsLWd1aSAudGl0bGV7LS10aXRsZS1oZWlnaHQ6Y2FsYyh2YXIoLS13aWRnZXQtaGVpZ2h0KSArIHZhcigtLXNwYWNpbmcpKjEuMjUpOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDt0ZXh0LWRlY29yYXRpb24tc2tpcDpvYmplY3RzO2N1cnNvcjpwb2ludGVyO2ZvbnQtd2VpZ2h0OjYwMDtoZWlnaHQ6dmFyKC0tdGl0bGUtaGVpZ2h0KTtsaW5lLWhlaWdodDpjYWxjKHZhcigtLXRpdGxlLWhlaWdodCkgLSA0cHgpO291dGxpbmU6bm9uZTtwYWRkaW5nOjAgdmFyKC0tcGFkZGluZyl9LmxpbC1ndWkgLnRpdGxlOmJlZm9yZXtjb250ZW50Olwi4pa+XCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1mYW1pbHk6bGlsLWd1aTtwYWRkaW5nLXJpZ2h0OjJweH0ubGlsLWd1aSAudGl0bGU6YWN0aXZle2JhY2tncm91bmQ6dmFyKC0tdGl0bGUtYmFja2dyb3VuZC1jb2xvcik7b3BhY2l0eTouNzV9LmxpbC1ndWkucm9vdD4udGl0bGU6Zm9jdXN7dGV4dC1kZWNvcmF0aW9uOm5vbmUhaW1wb3J0YW50fS5saWwtZ3VpLmNsb3NlZD4udGl0bGU6YmVmb3Jle2NvbnRlbnQ6XCLilrhcIn0ubGlsLWd1aS5jbG9zZWQ+LmNoaWxkcmVue29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtN3B4KX0ubGlsLWd1aS5jbG9zZWQ6bm90KC50cmFuc2l0aW9uKT4uY2hpbGRyZW57ZGlzcGxheTpub25lfS5saWwtZ3VpLnRyYW5zaXRpb24+LmNoaWxkcmVue292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb24tZHVyYXRpb246LjNzO3RyYW5zaXRpb24tcHJvcGVydHk6aGVpZ2h0LG9wYWNpdHksdHJhbnNmb3JtO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMiwuNiwuMzUsMSl9LmxpbC1ndWkgLmNoaWxkcmVuOmVtcHR5OmJlZm9yZXtjb250ZW50OlwiRW1wdHlcIjtkaXNwbGF5OmJsb2NrO2ZvbnQtc3R5bGU6aXRhbGljO2hlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTtsaW5lLWhlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTttYXJnaW46dmFyKC0tc3BhY2luZykgMDtvcGFjaXR5Oi41O3BhZGRpbmc6MCB2YXIoLS1wYWRkaW5nKX0ubGlsLWd1aS5yb290Pi5jaGlsZHJlbj4ubGlsLWd1aT4udGl0bGV7Ym9yZGVyLXdpZHRoOjA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXItbGVmdDowIHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyLXJpZ2h0OjAgc29saWQgdmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4zc30ubGlsLWd1aS5yb290Pi5jaGlsZHJlbj4ubGlsLWd1aS5jbG9zZWQ+LnRpdGxle2JvcmRlci1ib3R0b20tY29sb3I6dHJhbnNwYXJlbnR9LmxpbC1ndWkrLmNvbnRyb2xsZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0td2lkZ2V0LWNvbG9yKTttYXJnaW4tdG9wOjA7cGFkZGluZy10b3A6dmFyKC0tc3BhY2luZyl9LmxpbC1ndWkgLmxpbC1ndWkgLmxpbC1ndWk+LnRpdGxle2JvcmRlcjpub25lfS5saWwtZ3VpIC5saWwtZ3VpIC5saWwtZ3VpPi5jaGlsZHJlbntib3JkZXI6bm9uZTtib3JkZXItbGVmdDoycHggc29saWQgdmFyKC0td2lkZ2V0LWNvbG9yKTttYXJnaW4tbGVmdDp2YXIoLS1mb2xkZXItaW5kZW50KX0ubGlsLWd1aSAubGlsLWd1aSAuY29udHJvbGxlcntib3JkZXI6bm9uZX0ubGlsLWd1aSBpbnB1dHstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZDp2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlcjowO2JvcmRlci1yYWRpdXM6dmFyKC0td2lkZ2V0LWJvcmRlci1yYWRpdXMpO2NvbG9yOnZhcigtLXRleHQtY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWZvbnQtZmFtaWx5KTtmb250LXNpemU6dmFyKC0taW5wdXQtZm9udC1zaXplKTtoZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7b3V0bGluZTpub25lO3dpZHRoOjEwMCV9LmxpbC1ndWkgaW5wdXQ6ZGlzYWJsZWR7b3BhY2l0eToxfS5saWwtZ3VpIGlucHV0W3R5cGU9bnVtYmVyXSwubGlsLWd1aSBpbnB1dFt0eXBlPXRleHRde3BhZGRpbmc6dmFyKC0td2lkZ2V0LXBhZGRpbmcpfS5saWwtZ3VpIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cywubGlsLWd1aSBpbnB1dFt0eXBlPXRleHRdOmZvY3Vze2JhY2tncm91bmQ6dmFyKC0tZm9jdXMtY29sb3IpfS5saWwtZ3VpIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLC5saWwtZ3VpIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO21hcmdpbjowfS5saWwtZ3VpIGlucHV0W3R5cGU9bnVtYmVyXXstbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkfS5saWwtZ3VpIGlucHV0W3R5cGU9Y2hlY2tib3hde2FwcGVhcmFuY2U6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtib3JkZXItcmFkaXVzOnZhcigtLXdpZGdldC1ib3JkZXItcmFkaXVzKTtjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6dmFyKC0tY2hlY2tib3gtc2l6ZSk7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6dmFyKC0tY2hlY2tib3gtc2l6ZSl9LmxpbC1ndWkgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZDpiZWZvcmV7Y29udGVudDpcIuKck1wiO2ZvbnQtZmFtaWx5OmxpbC1ndWk7Zm9udC1zaXplOnZhcigtLWNoZWNrYm94LXNpemUpO2xpbmUtaGVpZ2h0OnZhcigtLWNoZWNrYm94LXNpemUpfS5saWwtZ3VpIGJ1dHRvbnstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZDp2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlcjoxcHggc29saWQgdmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLXdpZGdldC1ib3JkZXItcmFkaXVzKTtjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtjdXJzb3I6cG9pbnRlcjtmb250LWZhbWlseTp2YXIoLS1mb250LWZhbWlseSk7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7aGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO2xpbmUtaGVpZ2h0OmNhbGModmFyKC0td2lkZ2V0LWhlaWdodCkgLSA0cHgpO291dGxpbmU6bm9uZTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTpub25lO3dpZHRoOjEwMCV9LmxpbC1ndWkgYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWZvY3VzLWNvbG9yKX1AZm9udC1mYWNle2ZvbnQtZmFtaWx5OmxpbC1ndWk7c3JjOnVybChcImRhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdSZ0FCQUFBQUFBVXNBQXNBQUFBQUNKd0FBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCSFUxVkNBQUFCQ0FBQUFINEFBQURBSW13bVlFOVRMeklBQUFHSUFBQUFQd0FBQUdCS3FINVNZMjFoY0FBQUFjZ0FBQUQwQUFBQ3J1a3l5SkJuYkhsbUFBQUN2QUFBQUY4QUFBQ0VJWnBXSDJobFlXUUFBQU1jQUFBQUp3QUFBRFpmY2oyemFHaGxZUUFBQTBRQUFBQVlBQUFBSkFDNUFIaG9iWFI0QUFBRFhBQUFBQkFBQUFCTUFaQUFBR3h2WTJFQUFBTnNBQUFBRkFBQUFDZ0NFZ0l5YldGNGNBQUFBNEFBQUFBZUFBQUFJQUVmQUJKdVlXMWxBQUFEb0FBQUFTSUFBQUlLOVNVVS9YQnZjM1FBQUFURUFBQUFaZ0FBQUpDVGNNYzJlSnhWamJFT2dqQVVSVStoRlJCSzFkR1JMK0FMbkFpVG95TUxFekZwblB6L2VBc2h3U2E5NzUxN2MvTXd3Sm1lQjlrd1BsKzBjZjUrdUdQWlhzcVB1NG52WmFiY1NabGRaNmtmeVdub21GWS9lU2NLcVpOV3VwS0pPNmtYTjNLOXVDVm9MN2lJblByMVg1YmFYczN0anVNcUN0ekV1YWdtL0FBbHpRZ1BBQUI0bkdOZ1lSQmxuTURBeXNEQVlNL2dCaVQ1b0xRQkF3dURKQU1ERXdNck13TldFSkRtbXNKd2dDRmVYWmdoQmNqbFpNZ0ZDek9pS09JRkFCNzFCYjhBZUp5MWtqRnV3a0FRUlorRHdSQXdCdE5RUlVHS1E4T2RLQ0FXVWhBZ0tMaEl1QXNWU3BXejVCYmtqM2RFZ1lpVUlzenFXZHBaZStaNy93QjFvQ1ltSW9ib2l3aUxUMldqS2wvanNjckhmR2cvcEtkTWt5a2xDNVpzMkxFZkhZcGpjUm9Qem1lOU1XV21rM2RXYks5T2JrV2tpa09ldEo1NTRmV3lvRXNtZFNsdCt1UjBwQ0pSMzRiNnQvVFZnMVNZM3NZdmRmOHZ1aUtycHlhRFhESVNpZWdwMTdwNzU3OUdwM3ArK3k3SFBBaVk5cG1UaWJsanJyODVxU2lkdGxnNCtsMjVHTENhUzhlNnJSeE5CbXNuRVJ1bktiYU9PYlJ6N043Mmp1NXZkQWpZcEJYSGdKeWxPQVZzTXNlREFQRVA4TFlvVUhpY1kyQmlBQUVmaGlBR0pnWldCZ1o3Um5GUmRuVkpFTENRbEJTUmxBVEpNb0xWMkRLNGdsU1lzNnVicTV2YktySkxTYkdyZ0Vtb3ZEdURKVmhlM1Z6Y1hGd05MQ09JTEIvQzRJdVExeFRuNUZQaWxCVGo1RlBtQkFCNFd3b3FBSGljWTJCa1lHQUE0c2sxc1IvaitXMitNbkF6cERCZ0F5RU1RVUNTZzRFSnhBRUF3VWdGSGdCNG5HTmdaR0JnU0dGZ2dKTWhESXdNcUVBWUFCeUhBVEo0bkdOZ0FJSVVORXdtQUFCbDNBR1JlSnhqWUFBQ0lRWWxCaU1HSjN3UUFFY1FCRVY0bkdOZ1pHQmdFR1pnWTJCaUFBRVF5UVdFREF6L3dYd0dBQXNQQVRJQUFIaWNYZEJOU3NOQUhBWHdsMzVpQTBVUVhZbk1TaGZTOUdQWkE3VDdMZ0l1MDNTU3Brd3pZVEl0MUJONEFrL2dLVHlBZUN4ZnczOWpaa2p5bXpjdkF3bUFXL3dnd0hVRUdEYjM2K2pRUTNHWEdvdDc5TDI0anhDUDRnSHpGL0VJcjRqRUllN3d4aE9DM2cyVE1ZeTRRNytMdS9TSHVFZC9pdnQ0d0pkNHdQeGJQRUtNWDNHSTUrREpGR2FTbjRxTnprOG1jYktTUjZ4ZFhkaFN6YU9aSkd0ZGFwZDR2VlBiaTZyUCtjTDdUR1hPSHRYS2xsNGJZMVhsN0VHblB0cDdYeTJuMDB6eUtMVkhma0hCYTRJY0oyb0QzY2dnZ1d2dC9WL0ZiRHJVbEVVSmhUbi8wYXpWV2JOVE5yMEVuczhkZTF0Y2VLOXhabWZCMUNQak9tUEg0a2l0bXZPdWJjTnBtVlROM29GSnlqekN2bm1yd2hKVHpxelZqOWppU1g5MTFGamVBQUI0bkczSE1SS0NNQkJBMGYwZ2lpS2k0RFU4azBWMkdXYklaRE9oNFBvV1d2cTZKNVY4SWY5TlZOUWNhRGh5b3VYTWhZNHJQVGNHN2p3WW1YaEtxOFd6K3A3NjJhTmFlWVhvbTJuM20yZExUVmdzckNnRko3T1RtSWtZYndJYkM2dklCN1dtRmZBQUFBPT1cIikgZm9ybWF0KFwid29mZlwiKX1AbWVkaWEgKHBvaW50ZXI6Y29hcnNlKXsubGlsLWd1aS5hbGxvdy10b3VjaC1zdHlsZXN7LS13aWRnZXQtaGVpZ2h0OjI4cHg7LS1wYWRkaW5nOjZweDstLXNwYWNpbmc6NnB4Oy0tZm9udC1zaXplOjEzcHg7LS1pbnB1dC1mb250LXNpemU6MTZweDstLWZvbGRlci1pbmRlbnQ6MTBweDstLXNjcm9sbGJhci13aWR0aDo3cHg7LS1zbGlkZXItaW5wdXQtbWluLXdpZHRoOjUwcHg7LS1jb2xvci1pbnB1dC1taW4td2lkdGg6NjVweH19QG1lZGlhIChob3Zlcjpob3Zlcil7LmxpbC1ndWkgLmNvbnRyb2xsZXIuY29sb3IgLmRpc3BsYXk6aG92ZXI6YmVmb3Jle2JvcmRlcjoxcHggc29saWQgI2ZmZjk7Ym9yZGVyLXJhZGl1czp2YXIoLS13aWRnZXQtYm9yZGVyLXJhZGl1cyk7Ym90dG9tOjA7Y29udGVudDpcIiBcIjtkaXNwbGF5OmJsb2NrO2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiAuZGlzcGxheS5mb2N1c3tiYWNrZ3JvdW5kOnZhcigtLWZvY3VzLWNvbG9yKX0ubGlsLWd1aSAuY29udHJvbGxlci5vcHRpb24gLndpZGdldDpob3ZlciAuZGlzcGxheXtiYWNrZ3JvdW5kOnZhcigtLWhvdmVyLWNvbG9yKX0ubGlsLWd1aSAuY29udHJvbGxlci5udW1iZXIgLnNsaWRlcjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWhvdmVyLWNvbG9yKX1ib2R5Om5vdCgubGlsLWd1aS1kcmFnZ2luZykgLmxpbC1ndWkgLnRpdGxlOmhvdmVye2JhY2tncm91bmQ6dmFyKC0tdGl0bGUtYmFja2dyb3VuZC1jb2xvcik7b3BhY2l0eTouODV9LmxpbC1ndWkgLnRpdGxlOmZvY3Vze3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgdmFyKC0tZm9jdXMtY29sb3IpfS5saWwtZ3VpIGlucHV0OmhvdmVye2JhY2tncm91bmQ6dmFyKC0taG92ZXItY29sb3IpfS5saWwtZ3VpIGlucHV0OmFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWZvY3VzLWNvbG9yKX0ubGlsLWd1aSBpbnB1dFt0eXBlPWNoZWNrYm94XTpmb2N1c3tib3gtc2hhZG93Omluc2V0IDAgMCAwIDFweCB2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgYnV0dG9uOmhvdmVye2JhY2tncm91bmQ6dmFyKC0taG92ZXItY29sb3IpO2JvcmRlci1jb2xvcjp2YXIoLS1ob3Zlci1jb2xvcil9LmxpbC1ndWkgYnV0dG9uOmZvY3Vze2JvcmRlci1jb2xvcjp2YXIoLS1mb2N1cy1jb2xvcil9fScpLHA9ITApLGU/ZS5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpOmkmJih0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImF1dG9QbGFjZVwiKSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZG9tRWxlbWVudCkpLHMmJnRoaXMuZG9tRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0td2lkdGhcIixzK1wicHhcIiksdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdD0+dC5zdG9wUHJvcGFnYXRpb24oKSksdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHQ9PnQuc3RvcFByb3BhZ2F0aW9uKCkpfWFkZCh0LGUscyxuLHIpe2lmKE9iamVjdChzKT09PXMpcmV0dXJuIG5ldyBjKHRoaXMsdCxlLHMpO2NvbnN0IGw9dFtlXTtzd2l0Y2godHlwZW9mIGwpe2Nhc2VcIm51bWJlclwiOnJldHVybiBuZXcgZCh0aGlzLHQsZSxzLG4scik7Y2FzZVwiYm9vbGVhblwiOnJldHVybiBuZXcgaSh0aGlzLHQsZSk7Y2FzZVwic3RyaW5nXCI6cmV0dXJuIG5ldyB1KHRoaXMsdCxlKTtjYXNlXCJmdW5jdGlvblwiOnJldHVybiBuZXcgaCh0aGlzLHQsZSl9Y29uc29sZS5lcnJvcihcImd1aS5hZGQgZmFpbGVkXFxuXFx0cHJvcGVydHk6XCIsZSxcIlxcblxcdG9iamVjdDpcIix0LFwiXFxuXFx0dmFsdWU6XCIsbCl9YWRkQ29sb3IodCxpLGU9MSl7cmV0dXJuIG5ldyBhKHRoaXMsdCxpLGUpfWFkZEZvbGRlcih0KXtyZXR1cm4gbmV3IGcoe3BhcmVudDp0aGlzLHRpdGxlOnR9KX1sb2FkKHQsaT0hMCl7cmV0dXJuIHQuY29udHJvbGxlcnMmJnRoaXMuY29udHJvbGxlcnMuZm9yRWFjaChpPT57aSBpbnN0YW5jZW9mIGh8fGkuX25hbWUgaW4gdC5jb250cm9sbGVycyYmaS5sb2FkKHQuY29udHJvbGxlcnNbaS5fbmFtZV0pfSksaSYmdC5mb2xkZXJzJiZ0aGlzLmZvbGRlcnMuZm9yRWFjaChpPT57aS5fdGl0bGUgaW4gdC5mb2xkZXJzJiZpLmxvYWQodC5mb2xkZXJzW2kuX3RpdGxlXSl9KSx0aGlzfXNhdmUodD0hMCl7Y29uc3QgaT17Y29udHJvbGxlcnM6e30sZm9sZGVyczp7fX07cmV0dXJuIHRoaXMuY29udHJvbGxlcnMuZm9yRWFjaCh0PT57aWYoISh0IGluc3RhbmNlb2YgaCkpe2lmKHQuX25hbWUgaW4gaS5jb250cm9sbGVycyl0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzYXZlIEdVSSB3aXRoIGR1cGxpY2F0ZSBwcm9wZXJ0eSBcIiR7dC5fbmFtZX1cImApO2kuY29udHJvbGxlcnNbdC5fbmFtZV09dC5zYXZlKCl9fSksdCYmdGhpcy5mb2xkZXJzLmZvckVhY2godD0+e2lmKHQuX3RpdGxlIGluIGkuZm9sZGVycyl0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzYXZlIEdVSSB3aXRoIGR1cGxpY2F0ZSBmb2xkZXIgXCIke3QuX3RpdGxlfVwiYCk7aS5mb2xkZXJzW3QuX3RpdGxlXT10LnNhdmUoKX0pLGl9b3Blbih0PSEwKXtyZXR1cm4gdGhpcy5fY2xvc2VkPSF0LHRoaXMuJHRpdGxlLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwhdGhpcy5fY2xvc2VkKSx0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNsb3NlZFwiLHRoaXMuX2Nsb3NlZCksdGhpc31jbG9zZSgpe3JldHVybiB0aGlzLm9wZW4oITEpfXNob3codD0hMCl7cmV0dXJuIHRoaXMuX2hpZGRlbj0hdCx0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheT10aGlzLl9oaWRkZW4/XCJub25lXCI6XCJcIix0aGlzfWhpZGUoKXtyZXR1cm4gdGhpcy5zaG93KCExKX1vcGVuQW5pbWF0ZWQodD0hMCl7cmV0dXJuIHRoaXMuX2Nsb3NlZD0hdCx0aGlzLiR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIXRoaXMuX2Nsb3NlZCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57Y29uc3QgaT10aGlzLiRjaGlsZHJlbi5jbGllbnRIZWlnaHQ7dGhpcy4kY2hpbGRyZW4uc3R5bGUuaGVpZ2h0PWkrXCJweFwiLHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidHJhbnNpdGlvblwiKTtjb25zdCBlPXQ9Pnt0LnRhcmdldD09PXRoaXMuJGNoaWxkcmVuJiYodGhpcy4kY2hpbGRyZW4uc3R5bGUuaGVpZ2h0PVwiXCIsdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc2l0aW9uXCIpLHRoaXMuJGNoaWxkcmVuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsZSkpfTt0aGlzLiRjaGlsZHJlbi5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLGUpO2NvbnN0IHM9dD90aGlzLiRjaGlsZHJlbi5zY3JvbGxIZWlnaHQ6MDt0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNsb3NlZFwiLCF0KSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9Pnt0aGlzLiRjaGlsZHJlbi5zdHlsZS5oZWlnaHQ9cytcInB4XCJ9KX0pLHRoaXN9dGl0bGUodCl7cmV0dXJuIHRoaXMuX3RpdGxlPXQsdGhpcy4kdGl0bGUuaW5uZXJIVE1MPXQsdGhpc31yZXNldCh0PSEwKXtyZXR1cm4odD90aGlzLmNvbnRyb2xsZXJzUmVjdXJzaXZlKCk6dGhpcy5jb250cm9sbGVycykuZm9yRWFjaCh0PT50LnJlc2V0KCkpLHRoaXN9b25DaGFuZ2UodCl7cmV0dXJuIHRoaXMuX29uQ2hhbmdlPXQsdGhpc31fY2FsbE9uQ2hhbmdlKHQpe3RoaXMucGFyZW50JiZ0aGlzLnBhcmVudC5fY2FsbE9uQ2hhbmdlKHQpLHZvaWQgMCE9PXRoaXMuX29uQ2hhbmdlJiZ0aGlzLl9vbkNoYW5nZS5jYWxsKHRoaXMse29iamVjdDp0Lm9iamVjdCxwcm9wZXJ0eTp0LnByb3BlcnR5LHZhbHVlOnQuZ2V0VmFsdWUoKSxjb250cm9sbGVyOnR9KX1vbkZpbmlzaENoYW5nZSh0KXtyZXR1cm4gdGhpcy5fb25GaW5pc2hDaGFuZ2U9dCx0aGlzfV9jYWxsT25GaW5pc2hDaGFuZ2UodCl7dGhpcy5wYXJlbnQmJnRoaXMucGFyZW50Ll9jYWxsT25GaW5pc2hDaGFuZ2UodCksdm9pZCAwIT09dGhpcy5fb25GaW5pc2hDaGFuZ2UmJnRoaXMuX29uRmluaXNoQ2hhbmdlLmNhbGwodGhpcyx7b2JqZWN0OnQub2JqZWN0LHByb3BlcnR5OnQucHJvcGVydHksdmFsdWU6dC5nZXRWYWx1ZSgpLGNvbnRyb2xsZXI6dH0pfWRlc3Ryb3koKXt0aGlzLnBhcmVudCYmKHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZSh0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpLDEpLHRoaXMucGFyZW50LmZvbGRlcnMuc3BsaWNlKHRoaXMucGFyZW50LmZvbGRlcnMuaW5kZXhPZih0aGlzKSwxKSksdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQmJnRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCksQXJyYXkuZnJvbSh0aGlzLmNoaWxkcmVuKS5mb3JFYWNoKHQ9PnQuZGVzdHJveSgpKX1jb250cm9sbGVyc1JlY3Vyc2l2ZSgpe2xldCB0PUFycmF5LmZyb20odGhpcy5jb250cm9sbGVycyk7cmV0dXJuIHRoaXMuZm9sZGVycy5mb3JFYWNoKGk9Pnt0PXQuY29uY2F0KGkuY29udHJvbGxlcnNSZWN1cnNpdmUoKSl9KSx0fWZvbGRlcnNSZWN1cnNpdmUoKXtsZXQgdD1BcnJheS5mcm9tKHRoaXMuZm9sZGVycyk7cmV0dXJuIHRoaXMuZm9sZGVycy5mb3JFYWNoKGk9Pnt0PXQuY29uY2F0KGkuZm9sZGVyc1JlY3Vyc2l2ZSgpKX0pLHR9fWV4cG9ydCBkZWZhdWx0IGc7ZXhwb3J0e2kgYXMgQm9vbGVhbkNvbnRyb2xsZXIsYSBhcyBDb2xvckNvbnRyb2xsZXIsdCBhcyBDb250cm9sbGVyLGggYXMgRnVuY3Rpb25Db250cm9sbGVyLGcgYXMgR1VJLGQgYXMgTnVtYmVyQ29udHJvbGxlcixjIGFzIE9wdGlvbkNvbnRyb2xsZXIsdSBhcyBTdHJpbmdDb250cm9sbGVyfTtcbiIsInZhciBTdGF0cyA9IGZ1bmN0aW9uICgpIHtcblxuXHR2YXIgbW9kZSA9IDA7XG5cblx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gJ3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjAuOTt6LWluZGV4OjEwMDAwJztcblx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHNob3dQYW5lbCggKysgbW9kZSAlIGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggKTtcblxuXHR9LCBmYWxzZSApO1xuXG5cdC8vXG5cblx0ZnVuY3Rpb24gYWRkUGFuZWwoIHBhbmVsICkge1xuXG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKCBwYW5lbC5kb20gKTtcblx0XHRyZXR1cm4gcGFuZWw7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHNob3dQYW5lbCggaWQgKSB7XG5cblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBpICsrICkge1xuXG5cdFx0XHRjb250YWluZXIuY2hpbGRyZW5bIGkgXS5zdHlsZS5kaXNwbGF5ID0gaSA9PT0gaWQgPyAnYmxvY2snIDogJ25vbmUnO1xuXG5cdFx0fVxuXG5cdFx0bW9kZSA9IGlkO1xuXG5cdH1cblxuXHQvL1xuXG5cdHZhciBiZWdpblRpbWUgPSAoIHBlcmZvcm1hbmNlIHx8IERhdGUgKS5ub3coKSwgcHJldlRpbWUgPSBiZWdpblRpbWUsIGZyYW1lcyA9IDA7XG5cblx0dmFyIGZwc1BhbmVsID0gYWRkUGFuZWwoIG5ldyBTdGF0cy5QYW5lbCggJ0ZQUycsICcjMGZmJywgJyMwMDInICkgKTtcblx0dmFyIG1zUGFuZWwgPSBhZGRQYW5lbCggbmV3IFN0YXRzLlBhbmVsKCAnTVMnLCAnIzBmMCcsICcjMDIwJyApICk7XG5cblx0aWYgKCBzZWxmLnBlcmZvcm1hbmNlICYmIHNlbGYucGVyZm9ybWFuY2UubWVtb3J5ICkge1xuXG5cdFx0dmFyIG1lbVBhbmVsID0gYWRkUGFuZWwoIG5ldyBTdGF0cy5QYW5lbCggJ01CJywgJyNmMDgnLCAnIzIwMScgKSApO1xuXG5cdH1cblxuXHRzaG93UGFuZWwoIDAgKTtcblxuXHRyZXR1cm4ge1xuXG5cdFx0UkVWSVNJT046IDE2LFxuXG5cdFx0ZG9tOiBjb250YWluZXIsXG5cblx0XHRhZGRQYW5lbDogYWRkUGFuZWwsXG5cdFx0c2hvd1BhbmVsOiBzaG93UGFuZWwsXG5cblx0XHRiZWdpbjogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRiZWdpblRpbWUgPSAoIHBlcmZvcm1hbmNlIHx8IERhdGUgKS5ub3coKTtcblxuXHRcdH0sXG5cblx0XHRlbmQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0ZnJhbWVzICsrO1xuXG5cdFx0XHR2YXIgdGltZSA9ICggcGVyZm9ybWFuY2UgfHwgRGF0ZSApLm5vdygpO1xuXG5cdFx0XHRtc1BhbmVsLnVwZGF0ZSggdGltZSAtIGJlZ2luVGltZSwgMjAwICk7XG5cblx0XHRcdGlmICggdGltZSA+PSBwcmV2VGltZSArIDEwMDAgKSB7XG5cblx0XHRcdFx0ZnBzUGFuZWwudXBkYXRlKCAoIGZyYW1lcyAqIDEwMDAgKSAvICggdGltZSAtIHByZXZUaW1lICksIDEwMCApO1xuXG5cdFx0XHRcdHByZXZUaW1lID0gdGltZTtcblx0XHRcdFx0ZnJhbWVzID0gMDtcblxuXHRcdFx0XHRpZiAoIG1lbVBhbmVsICkge1xuXG5cdFx0XHRcdFx0dmFyIG1lbW9yeSA9IHBlcmZvcm1hbmNlLm1lbW9yeTtcblx0XHRcdFx0XHRtZW1QYW5lbC51cGRhdGUoIG1lbW9yeS51c2VkSlNIZWFwU2l6ZSAvIDEwNDg1NzYsIG1lbW9yeS5qc0hlYXBTaXplTGltaXQgLyAxMDQ4NTc2ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aW1lO1xuXG5cdFx0fSxcblxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRiZWdpblRpbWUgPSB0aGlzLmVuZCgpO1xuXG5cdFx0fSxcblxuXHRcdC8vIEJhY2t3YXJkcyBDb21wYXRpYmlsaXR5XG5cblx0XHRkb21FbGVtZW50OiBjb250YWluZXIsXG5cdFx0c2V0TW9kZTogc2hvd1BhbmVsXG5cblx0fTtcblxufTtcblxuU3RhdHMuUGFuZWwgPSBmdW5jdGlvbiAoIG5hbWUsIGZnLCBiZyApIHtcblxuXHR2YXIgbWluID0gSW5maW5pdHksIG1heCA9IDAsIHJvdW5kID0gTWF0aC5yb3VuZDtcblx0dmFyIFBSID0gcm91bmQoIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEgKTtcblxuXHR2YXIgV0lEVEggPSA4MCAqIFBSLCBIRUlHSFQgPSA0OCAqIFBSLFxuXHRcdFRFWFRfWCA9IDMgKiBQUiwgVEVYVF9ZID0gMiAqIFBSLFxuXHRcdEdSQVBIX1ggPSAzICogUFIsIEdSQVBIX1kgPSAxNSAqIFBSLFxuXHRcdEdSQVBIX1dJRFRIID0gNzQgKiBQUiwgR1JBUEhfSEVJR0hUID0gMzAgKiBQUjtcblxuXHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKTtcblx0Y2FudmFzLndpZHRoID0gV0lEVEg7XG5cdGNhbnZhcy5oZWlnaHQgPSBIRUlHSFQ7XG5cdGNhbnZhcy5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOjgwcHg7aGVpZ2h0OjQ4cHgnO1xuXG5cdHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcblx0Y29udGV4dC5mb250ID0gJ2JvbGQgJyArICggOSAqIFBSICkgKyAncHggSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYnO1xuXHRjb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuXG5cdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdGNvbnRleHQuZmlsbFJlY3QoIDAsIDAsIFdJRFRILCBIRUlHSFQgKTtcblxuXHRjb250ZXh0LmZpbGxTdHlsZSA9IGZnO1xuXHRjb250ZXh0LmZpbGxUZXh0KCBuYW1lLCBURVhUX1gsIFRFWFRfWSApO1xuXHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCwgR1JBUEhfSEVJR0hUICk7XG5cblx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDAuOTtcblx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCwgR1JBUEhfWSwgR1JBUEhfV0lEVEgsIEdSQVBIX0hFSUdIVCApO1xuXG5cdHJldHVybiB7XG5cblx0XHRkb206IGNhbnZhcyxcblxuXHRcdHVwZGF0ZTogZnVuY3Rpb24gKCB2YWx1ZSwgbWF4VmFsdWUgKSB7XG5cblx0XHRcdG1pbiA9IE1hdGgubWluKCBtaW4sIHZhbHVlICk7XG5cdFx0XHRtYXggPSBNYXRoLm1heCggbWF4LCB2YWx1ZSApO1xuXG5cdFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRcdFx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IDE7XG5cdFx0XHRjb250ZXh0LmZpbGxSZWN0KCAwLCAwLCBXSURUSCwgR1JBUEhfWSApO1xuXHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSBmZztcblx0XHRcdGNvbnRleHQuZmlsbFRleHQoIHJvdW5kKCB2YWx1ZSApICsgJyAnICsgbmFtZSArICcgKCcgKyByb3VuZCggbWluICkgKyAnLScgKyByb3VuZCggbWF4ICkgKyAnKScsIFRFWFRfWCwgVEVYVF9ZICk7XG5cblx0XHRcdGNvbnRleHQuZHJhd0ltYWdlKCBjYW52YXMsIEdSQVBIX1ggKyBQUiwgR1JBUEhfWSwgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfSEVJR0hULCBHUkFQSF9YLCBHUkFQSF9ZLCBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9IRUlHSFQgKTtcblxuXHRcdFx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCArIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX1ksIFBSLCBHUkFQSF9IRUlHSFQgKTtcblxuXHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0XHRcdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjk7XG5cdFx0XHRjb250ZXh0LmZpbGxSZWN0KCBHUkFQSF9YICsgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfWSwgUFIsIHJvdW5kKCAoIDEgLSAoIHZhbHVlIC8gbWF4VmFsdWUgKSApICogR1JBUEhfSEVJR0hUICkgKTtcblxuXHRcdH1cblxuXHR9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0cztcbiIsImltcG9ydCB7XG5cdEJhY2tTaWRlLFxuXHRCb3hHZW9tZXRyeSxcblx0TWVzaCxcblx0U2hhZGVyTWF0ZXJpYWwsXG5cdFVuaWZvcm1zVXRpbHMsXG5cdFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG4vKipcbiAqIEJhc2VkIG9uIFwiQSBQcmFjdGljYWwgQW5hbHl0aWMgTW9kZWwgZm9yIERheWxpZ2h0XCJcbiAqIGFrYSBUaGUgUHJlZXRoYW0gTW9kZWwsIHRoZSBkZSBmYWN0byBzdGFuZGFyZCBhbmFseXRpYyBza3lkb21lIG1vZGVsXG4gKiBodHRwczovL3d3dy5yZXNlYXJjaGdhdGUubmV0L3B1YmxpY2F0aW9uLzIyMDcyMDQ0M19BX1ByYWN0aWNhbF9BbmFseXRpY19Nb2RlbF9mb3JfRGF5bGlnaHRcbiAqXG4gKiBGaXJzdCBpbXBsZW1lbnRlZCBieSBTaW1vbiBXYWxsbmVyXG4gKiBodHRwOi8vc2ltb253YWxsbmVyLmF0L3Byb2plY3QvYXRtb3NwaGVyaWMtc2NhdHRlcmluZy9cbiAqXG4gKiBJbXByb3ZlZCBieSBNYXJ0aW4gVXBpdGlzXG4gKiBodHRwOi8vYmxlbmRlcmFydGlzdHMub3JnL2ZvcnVtL3Nob3d0aHJlYWQucGhwPzI0NTk1NC1wcmVldGhhbXMtc2t5LWltcGVtZW50YXRpb24tSERSXG4gKlxuICogVGhyZWUuanMgaW50ZWdyYXRpb24gYnkgeno4NSBodHRwOi8vdHdpdHRlci5jb20vYmx1cnNwbGluZVxuKi9cblxuY2xhc3MgU2t5IGV4dGVuZHMgTWVzaCB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0XHRjb25zdCBzaGFkZXIgPSBTa3kuU2t5U2hhZGVyO1xuXG5cdFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoIHtcblx0XHRcdG5hbWU6ICdTa3lTaGFkZXInLFxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlcixcblx0XHRcdHZlcnRleFNoYWRlcjogc2hhZGVyLnZlcnRleFNoYWRlcixcblx0XHRcdHVuaWZvcm1zOiBVbmlmb3Jtc1V0aWxzLmNsb25lKCBzaGFkZXIudW5pZm9ybXMgKSxcblx0XHRcdHNpZGU6IEJhY2tTaWRlLFxuXHRcdFx0ZGVwdGhXcml0ZTogZmFsc2Vcblx0XHR9ICk7XG5cblx0XHRzdXBlciggbmV3IEJveEdlb21ldHJ5KCAxLCAxLCAxICksIG1hdGVyaWFsICk7XG5cblx0XHR0aGlzLmlzU2t5ID0gdHJ1ZTtcblxuXHR9XG5cbn1cblxuU2t5LlNreVNoYWRlciA9IHtcblxuXHR1bmlmb3Jtczoge1xuXHRcdCd0dXJiaWRpdHknOiB7IHZhbHVlOiAyIH0sXG5cdFx0J3JheWxlaWdoJzogeyB2YWx1ZTogMSB9LFxuXHRcdCdtaWVDb2VmZmljaWVudCc6IHsgdmFsdWU6IDAuMDA1IH0sXG5cdFx0J21pZURpcmVjdGlvbmFsRyc6IHsgdmFsdWU6IDAuOCB9LFxuXHRcdCdzdW5Qb3NpdGlvbic6IHsgdmFsdWU6IG5ldyBWZWN0b3IzKCkgfSxcblx0XHQndXAnOiB7IHZhbHVlOiBuZXcgVmVjdG9yMyggMCwgMSwgMCApIH1cblx0fSxcblxuXHR2ZXJ0ZXhTaGFkZXI6IC8qIGdsc2wgKi9gXG5cdFx0dW5pZm9ybSB2ZWMzIHN1blBvc2l0aW9uO1xuXHRcdHVuaWZvcm0gZmxvYXQgcmF5bGVpZ2g7XG5cdFx0dW5pZm9ybSBmbG9hdCB0dXJiaWRpdHk7XG5cdFx0dW5pZm9ybSBmbG9hdCBtaWVDb2VmZmljaWVudDtcblx0XHR1bmlmb3JtIHZlYzMgdXA7XG5cblx0XHR2YXJ5aW5nIHZlYzMgdldvcmxkUG9zaXRpb247XG5cdFx0dmFyeWluZyB2ZWMzIHZTdW5EaXJlY3Rpb247XG5cdFx0dmFyeWluZyBmbG9hdCB2U3VuZmFkZTtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFSO1xuXHRcdHZhcnlpbmcgdmVjMyB2QmV0YU07XG5cdFx0dmFyeWluZyBmbG9hdCB2U3VuRTtcblxuXHRcdC8vIGNvbnN0YW50cyBmb3IgYXRtb3NwaGVyaWMgc2NhdHRlcmluZ1xuXHRcdGNvbnN0IGZsb2F0IGUgPSAyLjcxODI4MTgyODQ1OTA0NTIzNTM2MDI4NzQ3MTM1MjY2MjQ5Nzc1NzI0NzA5MzY5OTk1OTU3O1xuXHRcdGNvbnN0IGZsb2F0IHBpID0gMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1MDI4ODQxOTcxNjk7XG5cblx0XHQvLyB3YXZlbGVuZ3RoIG9mIHVzZWQgcHJpbWFyaWVzLCBhY2NvcmRpbmcgdG8gcHJlZXRoYW1cblx0XHRjb25zdCB2ZWMzIGxhbWJkYSA9IHZlYzMoIDY4MEUtOSwgNTUwRS05LCA0NTBFLTkgKTtcblx0XHQvLyB0aGlzIHByZS1jYWxjdWF0aW9uIHJlcGxhY2VzIG9sZGVyIFRvdGFsUmF5bGVpZ2godmVjMyBsYW1iZGEpIGZ1bmN0aW9uOlxuXHRcdC8vICg4LjAgKiBwb3cocGksIDMuMCkgKiBwb3cocG93KG4sIDIuMCkgLSAxLjAsIDIuMCkgKiAoNi4wICsgMy4wICogcG4pKSAvICgzLjAgKiBOICogcG93KGxhbWJkYSwgdmVjMyg0LjApKSAqICg2LjAgLSA3LjAgKiBwbikpXG5cdFx0Y29uc3QgdmVjMyB0b3RhbFJheWxlaWdoID0gdmVjMyggNS44MDQ1NDI5OTYyNjEwOTNFLTYsIDEuMzU2MjkxMTQxOTg0NTYzNUUtNSwgMy4wMjY1OTAyNDY4ODI0ODc2RS01ICk7XG5cblx0XHQvLyBtaWUgc3R1ZmZcblx0XHQvLyBLIGNvZWZmaWNpZW50IGZvciB0aGUgcHJpbWFyaWVzXG5cdFx0Y29uc3QgZmxvYXQgdiA9IDQuMDtcblx0XHRjb25zdCB2ZWMzIEsgPSB2ZWMzKCAwLjY4NiwgMC42NzgsIDAuNjY2ICk7XG5cdFx0Ly8gTWllQ29uc3QgPSBwaSAqIHBvdyggKCAyLjAgKiBwaSApIC8gbGFtYmRhLCB2ZWMzKCB2IC0gMi4wICkgKSAqIEtcblx0XHRjb25zdCB2ZWMzIE1pZUNvbnN0ID0gdmVjMyggMS44Mzk5OTE4NTE0NDMzOTc4RTE0LCAyLjc3OTgwMjM5MTk2NjA1MjhFMTQsIDQuMDc5MDQ3OTU0Mzg2MTA5NEUxNCApO1xuXG5cdFx0Ly8gZWFydGggc2hhZG93IGhhY2tcblx0XHQvLyBjdXRvZmZBbmdsZSA9IHBpIC8gMS45NTtcblx0XHRjb25zdCBmbG9hdCBjdXRvZmZBbmdsZSA9IDEuNjExMDczMTU1Njg3MDczNDtcblx0XHRjb25zdCBmbG9hdCBzdGVlcG5lc3MgPSAxLjU7XG5cdFx0Y29uc3QgZmxvYXQgRUUgPSAxMDAwLjA7XG5cblx0XHRmbG9hdCBzdW5JbnRlbnNpdHkoIGZsb2F0IHplbml0aEFuZ2xlQ29zICkge1xuXHRcdFx0emVuaXRoQW5nbGVDb3MgPSBjbGFtcCggemVuaXRoQW5nbGVDb3MsIC0xLjAsIDEuMCApO1xuXHRcdFx0cmV0dXJuIEVFICogbWF4KCAwLjAsIDEuMCAtIHBvdyggZSwgLSggKCBjdXRvZmZBbmdsZSAtIGFjb3MoIHplbml0aEFuZ2xlQ29zICkgKSAvIHN0ZWVwbmVzcyApICkgKTtcblx0XHR9XG5cblx0XHR2ZWMzIHRvdGFsTWllKCBmbG9hdCBUICkge1xuXHRcdFx0ZmxvYXQgYyA9ICggMC4yICogVCApICogMTBFLTE4O1xuXHRcdFx0cmV0dXJuIDAuNDM0ICogYyAqIE1pZUNvbnN0O1xuXHRcdH1cblxuXHRcdHZvaWQgbWFpbigpIHtcblxuXHRcdFx0dmVjNCB3b3JsZFBvc2l0aW9uID0gbW9kZWxNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XG5cdFx0XHR2V29ybGRQb3NpdGlvbiA9IHdvcmxkUG9zaXRpb24ueHl6O1xuXG5cdFx0XHRnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XG5cdFx0XHRnbF9Qb3NpdGlvbi56ID0gZ2xfUG9zaXRpb24udzsgLy8gc2V0IHogdG8gY2FtZXJhLmZhclxuXG5cdFx0XHR2U3VuRGlyZWN0aW9uID0gbm9ybWFsaXplKCBzdW5Qb3NpdGlvbiApO1xuXG5cdFx0XHR2U3VuRSA9IHN1bkludGVuc2l0eSggZG90KCB2U3VuRGlyZWN0aW9uLCB1cCApICk7XG5cblx0XHRcdHZTdW5mYWRlID0gMS4wIC0gY2xhbXAoIDEuMCAtIGV4cCggKCBzdW5Qb3NpdGlvbi55IC8gNDUwMDAwLjAgKSApLCAwLjAsIDEuMCApO1xuXG5cdFx0XHRmbG9hdCByYXlsZWlnaENvZWZmaWNpZW50ID0gcmF5bGVpZ2ggLSAoIDEuMCAqICggMS4wIC0gdlN1bmZhZGUgKSApO1xuXG5cdFx0XHQvLyBleHRpbmN0aW9uIChhYnNvcmJ0aW9uICsgb3V0IHNjYXR0ZXJpbmcpXG5cdFx0XHQvLyByYXlsZWlnaCBjb2VmZmljaWVudHNcblx0XHRcdHZCZXRhUiA9IHRvdGFsUmF5bGVpZ2ggKiByYXlsZWlnaENvZWZmaWNpZW50O1xuXG5cdFx0XHQvLyBtaWUgY29lZmZpY2llbnRzXG5cdFx0XHR2QmV0YU0gPSB0b3RhbE1pZSggdHVyYmlkaXR5ICkgKiBtaWVDb2VmZmljaWVudDtcblxuXHRcdH1gLFxuXG5cdGZyYWdtZW50U2hhZGVyOiAvKiBnbHNsICovYFxuXHRcdHZhcnlpbmcgdmVjMyB2V29ybGRQb3NpdGlvbjtcblx0XHR2YXJ5aW5nIHZlYzMgdlN1bkRpcmVjdGlvbjtcblx0XHR2YXJ5aW5nIGZsb2F0IHZTdW5mYWRlO1xuXHRcdHZhcnlpbmcgdmVjMyB2QmV0YVI7XG5cdFx0dmFyeWluZyB2ZWMzIHZCZXRhTTtcblx0XHR2YXJ5aW5nIGZsb2F0IHZTdW5FO1xuXG5cdFx0dW5pZm9ybSBmbG9hdCBtaWVEaXJlY3Rpb25hbEc7XG5cdFx0dW5pZm9ybSB2ZWMzIHVwO1xuXG5cdFx0Y29uc3QgdmVjMyBjYW1lcmFQb3MgPSB2ZWMzKCAwLjAsIDAuMCwgMC4wICk7XG5cblx0XHQvLyBjb25zdGFudHMgZm9yIGF0bW9zcGhlcmljIHNjYXR0ZXJpbmdcblx0XHRjb25zdCBmbG9hdCBwaSA9IDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NTAyODg0MTk3MTY5O1xuXG5cdFx0Y29uc3QgZmxvYXQgbiA9IDEuMDAwMzsgLy8gcmVmcmFjdGl2ZSBpbmRleCBvZiBhaXJcblx0XHRjb25zdCBmbG9hdCBOID0gMi41NDVFMjU7IC8vIG51bWJlciBvZiBtb2xlY3VsZXMgcGVyIHVuaXQgdm9sdW1lIGZvciBhaXIgYXQgMjg4LjE1SyBhbmQgMTAxM21iIChzZWEgbGV2ZWwgLTQ1IGNlbHNpdXMpXG5cblx0XHQvLyBvcHRpY2FsIGxlbmd0aCBhdCB6ZW5pdGggZm9yIG1vbGVjdWxlc1xuXHRcdGNvbnN0IGZsb2F0IHJheWxlaWdoWmVuaXRoTGVuZ3RoID0gOC40RTM7XG5cdFx0Y29uc3QgZmxvYXQgbWllWmVuaXRoTGVuZ3RoID0gMS4yNUUzO1xuXHRcdC8vIDY2IGFyYyBzZWNvbmRzIC0+IGRlZ3JlZXMsIGFuZCB0aGUgY29zaW5lIG9mIHRoYXRcblx0XHRjb25zdCBmbG9hdCBzdW5Bbmd1bGFyRGlhbWV0ZXJDb3MgPSAwLjk5OTk1NjY3Njk0NjQ0ODQ0MzU1MzU3NDYxOTkwNjk3NjQ3ODkyNjg0ODY5Mjg3MzkwMDg1OTMyNDtcblxuXHRcdC8vIDMuMCAvICggMTYuMCAqIHBpIClcblx0XHRjb25zdCBmbG9hdCBUSFJFRV9PVkVSX1NJWFRFRU5QSSA9IDAuMDU5NjgzMTAzNjU5NDYwNzU7XG5cdFx0Ly8gMS4wIC8gKCA0LjAgKiBwaSApXG5cdFx0Y29uc3QgZmxvYXQgT05FX09WRVJfRk9VUlBJID0gMC4wNzk1Nzc0NzE1NDU5NDc2NztcblxuXHRcdGZsb2F0IHJheWxlaWdoUGhhc2UoIGZsb2F0IGNvc1RoZXRhICkge1xuXHRcdFx0cmV0dXJuIFRIUkVFX09WRVJfU0lYVEVFTlBJICogKCAxLjAgKyBwb3coIGNvc1RoZXRhLCAyLjAgKSApO1xuXHRcdH1cblxuXHRcdGZsb2F0IGhnUGhhc2UoIGZsb2F0IGNvc1RoZXRhLCBmbG9hdCBnICkge1xuXHRcdFx0ZmxvYXQgZzIgPSBwb3coIGcsIDIuMCApO1xuXHRcdFx0ZmxvYXQgaW52ZXJzZSA9IDEuMCAvIHBvdyggMS4wIC0gMi4wICogZyAqIGNvc1RoZXRhICsgZzIsIDEuNSApO1xuXHRcdFx0cmV0dXJuIE9ORV9PVkVSX0ZPVVJQSSAqICggKCAxLjAgLSBnMiApICogaW52ZXJzZSApO1xuXHRcdH1cblxuXHRcdHZvaWQgbWFpbigpIHtcblxuXHRcdFx0dmVjMyBkaXJlY3Rpb24gPSBub3JtYWxpemUoIHZXb3JsZFBvc2l0aW9uIC0gY2FtZXJhUG9zICk7XG5cblx0XHRcdC8vIG9wdGljYWwgbGVuZ3RoXG5cdFx0XHQvLyBjdXRvZmYgYW5nbGUgYXQgOTAgdG8gYXZvaWQgc2luZ3VsYXJpdHkgaW4gbmV4dCBmb3JtdWxhLlxuXHRcdFx0ZmxvYXQgemVuaXRoQW5nbGUgPSBhY29zKCBtYXgoIDAuMCwgZG90KCB1cCwgZGlyZWN0aW9uICkgKSApO1xuXHRcdFx0ZmxvYXQgaW52ZXJzZSA9IDEuMCAvICggY29zKCB6ZW5pdGhBbmdsZSApICsgMC4xNSAqIHBvdyggOTMuODg1IC0gKCAoIHplbml0aEFuZ2xlICogMTgwLjAgKSAvIHBpICksIC0xLjI1MyApICk7XG5cdFx0XHRmbG9hdCBzUiA9IHJheWxlaWdoWmVuaXRoTGVuZ3RoICogaW52ZXJzZTtcblx0XHRcdGZsb2F0IHNNID0gbWllWmVuaXRoTGVuZ3RoICogaW52ZXJzZTtcblxuXHRcdFx0Ly8gY29tYmluZWQgZXh0aW5jdGlvbiBmYWN0b3Jcblx0XHRcdHZlYzMgRmV4ID0gZXhwKCAtKCB2QmV0YVIgKiBzUiArIHZCZXRhTSAqIHNNICkgKTtcblxuXHRcdFx0Ly8gaW4gc2NhdHRlcmluZ1xuXHRcdFx0ZmxvYXQgY29zVGhldGEgPSBkb3QoIGRpcmVjdGlvbiwgdlN1bkRpcmVjdGlvbiApO1xuXG5cdFx0XHRmbG9hdCByUGhhc2UgPSByYXlsZWlnaFBoYXNlKCBjb3NUaGV0YSAqIDAuNSArIDAuNSApO1xuXHRcdFx0dmVjMyBiZXRhUlRoZXRhID0gdkJldGFSICogclBoYXNlO1xuXG5cdFx0XHRmbG9hdCBtUGhhc2UgPSBoZ1BoYXNlKCBjb3NUaGV0YSwgbWllRGlyZWN0aW9uYWxHICk7XG5cdFx0XHR2ZWMzIGJldGFNVGhldGEgPSB2QmV0YU0gKiBtUGhhc2U7XG5cblx0XHRcdHZlYzMgTGluID0gcG93KCB2U3VuRSAqICggKCBiZXRhUlRoZXRhICsgYmV0YU1UaGV0YSApIC8gKCB2QmV0YVIgKyB2QmV0YU0gKSApICogKCAxLjAgLSBGZXggKSwgdmVjMyggMS41ICkgKTtcblx0XHRcdExpbiAqPSBtaXgoIHZlYzMoIDEuMCApLCBwb3coIHZTdW5FICogKCAoIGJldGFSVGhldGEgKyBiZXRhTVRoZXRhICkgLyAoIHZCZXRhUiArIHZCZXRhTSApICkgKiBGZXgsIHZlYzMoIDEuMCAvIDIuMCApICksIGNsYW1wKCBwb3coIDEuMCAtIGRvdCggdXAsIHZTdW5EaXJlY3Rpb24gKSwgNS4wICksIDAuMCwgMS4wICkgKTtcblxuXHRcdFx0Ly8gbmlnaHRza3lcblx0XHRcdGZsb2F0IHRoZXRhID0gYWNvcyggZGlyZWN0aW9uLnkgKTsgLy8gZWxldmF0aW9uIC0tPiB5LWF4aXMsIFstcGkvMiwgcGkvMl1cblx0XHRcdGZsb2F0IHBoaSA9IGF0YW4oIGRpcmVjdGlvbi56LCBkaXJlY3Rpb24ueCApOyAvLyBhemltdXRoIC0tPiB4LWF4aXMgWy1waS8yLCBwaS8yXVxuXHRcdFx0dmVjMiB1diA9IHZlYzIoIHBoaSwgdGhldGEgKSAvIHZlYzIoIDIuMCAqIHBpLCBwaSApICsgdmVjMiggMC41LCAwLjAgKTtcblx0XHRcdHZlYzMgTDAgPSB2ZWMzKCAwLjEgKSAqIEZleDtcblxuXHRcdFx0Ly8gY29tcG9zaXRpb24gKyBzb2xhciBkaXNjXG5cdFx0XHRmbG9hdCBzdW5kaXNrID0gc21vb3Roc3RlcCggc3VuQW5ndWxhckRpYW1ldGVyQ29zLCBzdW5Bbmd1bGFyRGlhbWV0ZXJDb3MgKyAwLjAwMDAyLCBjb3NUaGV0YSApO1xuXHRcdFx0TDAgKz0gKCB2U3VuRSAqIDE5MDAwLjAgKiBGZXggKSAqIHN1bmRpc2s7XG5cblx0XHRcdHZlYzMgdGV4Q29sb3IgPSAoIExpbiArIEwwICkgKiAwLjA0ICsgdmVjMyggMC4wLCAwLjAwMDMsIDAuMDAwNzUgKTtcblxuXHRcdFx0dmVjMyByZXRDb2xvciA9IHBvdyggdGV4Q29sb3IsIHZlYzMoIDEuMCAvICggMS4yICsgKCAxLjIgKiB2U3VuZmFkZSApICkgKSApO1xuXG5cdFx0XHRnbF9GcmFnQ29sb3IgPSB2ZWM0KCByZXRDb2xvciwgMS4wICk7XG5cblx0XHRcdCNpbmNsdWRlIDx0b25lbWFwcGluZ19mcmFnbWVudD5cblx0XHRcdCNpbmNsdWRlIDxlbmNvZGluZ3NfZnJhZ21lbnQ+XG5cblx0XHR9YFxuXG59O1xuXG5leHBvcnQgeyBTa3kgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==