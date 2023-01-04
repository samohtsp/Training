(self["webpackChunkminecraft_clone"] = self["webpackChunkminecraft_clone"] || []).push([["minecraft"],{

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = /*#__PURE__*/_createClass(function Block(_ref) {
  var blockType = _ref.blockType;
  _classCallCheck(this, Block);
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
  if (blockType == "grass") {
    this.blockType = blockType;
    this.materialArray = blockMaterials.grassMat;
    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.grassMat);
    this.count = 0;
    this.range = [0];
    this.biomes = ["plains"];
  }
  if (blockType == "dirt") {
    this.blockType = blockType;
    this.materialArray = blockMaterials.dirtMat;
    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.dirtMat);
    this.count = 0;
    this.range = [0];
    this.biomes = ["plains"];
  }
  if (blockType == "cobblestone") {
    this.blockType = blockType;
    this.materialArray = blockMaterials.cobblestoneMat;
    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.cobblestoneMat);
    this.count = 0;
    this.range = [0];
    this.biomes = ["plains", "desert"];
  }
  if (blockType == "oakLog") {
    this.blockType = blockType;
    this.materialArray = blockMaterials.oakLogMat;
    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.oakLogMat);
    this.count = 0;
    this.range = [0];
    this.biomes = ["plains"];
  }
  if (blockType == "oakLeaves") {
    this.blockType = blockType;
    this.materialArray = blockMaterials.oakLeavesMat;
    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.oakLeavesMat);
    this.count = 0;
    this.range = [0];
    this.biomes = ["plains"];
  }
  if (blockType == "sand") {
    this.blockType = blockType;
    this.materialArray = blockMaterials.sandMat;
    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.sandMat);
    this.count = 0;
    this.range = [0];
    this.biomes = ["plains"];
  }
  if (blockType == "water") {
    this.blockType = blockType;
    this.materialArray = blockMaterials.waterMat;
    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blockGoem, blockMaterials.waterMat);
    this.count = 0;
    this.range = [0];
    this.biomes = ["plains"];
  }
});
var BlockMaterials = /*#__PURE__*/function () {
  function BlockMaterials() {
    _classCallCheck(this, BlockMaterials);
    var loader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();
    this.dirtMat = ["/assets/texture/dirt/dirt.png", "/assets/texture/dirt/dirt.png", "/assets/texture/dirt/dirt.png", "/assets/texture/dirt/dirt.png", "/assets/texture/dirt/dirt.png", "/assets/texture/dirt/dirt.png"].map(function (pic) {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide
      });
    });
    this.cobblestoneMat = ["/assets/texture/cobblestone/cobblestone.png", "/assets/texture/cobblestone/cobblestone.png", "/assets/texture/cobblestone/cobblestone.png", "/assets/texture/cobblestone/cobblestone.png", "/assets/texture/cobblestone/cobblestone.png", "/assets/texture/cobblestone/cobblestone.png"].map(function (pic) {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide
      });
    });
    this.oakLogMat = ["/assets/texture/oakLog/side.png", "/assets/texture/oakLog/side.png", "/assets/texture/oakLog/top.jpg", "/assets/texture/oakLog/bottom.jpg", "/assets/texture/oakLog/side.png", "/assets/texture/oakLog/side.png"].map(function (pic) {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide
      });
    });
    this.oakLeavesMat = ["/assets/texture/oakLeaves/oakLeaves.png", "/assets/texture/oakLeaves/oakLeaves.png", "/assets/texture/oakLeaves/oakLeaves.png", "/assets/texture/oakLeaves/oakLeaves.png", "/assets/texture/oakLeaves/oakLeaves.png", "/assets/texture/oakLeaves/oakLeaves.png"].map(function (pic) {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide
      });
    });
    this.sandMat = ["/assets/texture/sand/sand.png", "/assets/texture/sand/sand.png", "/assets/texture/sand/sand.png", "/assets/texture/sand/sand.png", "/assets/texture/sand/sand.png", "/assets/texture/sand/sand.png"].map(function (pic) {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide
      });
    });
    this.waterMat = ["/assets/texture/water/water.jpeg", "/assets/texture/water/water.jpeg", "/assets/texture/water/water.jpeg", "/assets/texture/water/water.jpeg", "/assets/texture/water/water.jpeg", "/assets/texture/water/water.jpeg"].map(function (pic) {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide
      });
    });
    this.grassMat = ["/assets/texture/grass/side.jpg", "/assets/texture/grass/side.jpg", "/assets/texture/grass/top.jpg", "/assets/texture/grass/bottom.jpg", "/assets/texture/grass/side.jpg", "/assets/texture/grass/side.jpg"].map(function (pic) {
      return new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({
        map: loader.load(pic),
        side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide
      });
    });
    this.textureOpacity();
    //this.textureImagesLoader("/assets/texture/grass");
  }
  _createClass(BlockMaterials, [{
    key: "textureImagesLoader",
    value: function textureImagesLoader(fileURL) {
      //joining path of directory
      var directoryPath = fileURL;
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
  }, {
    key: "textureOpacity",
    value: function textureOpacity() {
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
  }]);
  return BlockMaterials;
}();
var Blocks = /*#__PURE__*/function () {
  function Blocks() {
    _classCallCheck(this, Blocks);
    this.grass = new Block({
      blockType: "grass"
    });
    this.dirt = new Block({
      blockType: "dirt"
    });
    this.cobblestone = new Block({
      blockType: "cobblestone"
    });
    this.oakLog = new Block({
      blockType: "oakLog"
    });
    this.oakLeaves = new Block({
      blockType: "oakLeaves"
    });
    this.sand = new Block({
      blockType: "sand"
    });
    this.water = new Block({
      blockType: "water"
    });
  }
  _createClass(Blocks, [{
    key: "getBlockByType",
    value: function getBlockByType(blockType) {
      if (blockType == "grass") {
        return this.grass;
      }
      if (blockType == "dirt") {
        return this.dirt;
      }
      if (blockType == "cobblestone") {
        return this.cobblestone;
      }
      if (blockType == "oakLog") {
        return this.oakLog;
      }
      if (blockType == "oakLeaves") {
        return this.oakLeaves;
      }
      if (blockType == "sand") {
        return this.sand;
      }
      if (blockType == "water") {
        return this.water;
      }
    }
  }]);
  return Blocks;
}();

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

var camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_addons_controls_PointerLockControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/addons/controls/PointerLockControls.js */ "./node_modules/three/examples/jsm/controls/PointerLockControls.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Controls = /*#__PURE__*/function () {
  function Controls(_ref) {
    var player = _ref.player;
    _classCallCheck(this, Controls);
    this.player = player;
    this.keyActionMap = {
      0: "leftClick",
      2: "rightClick",
      KeyW: "moveForward",
      KeyS: "moveBackward",
      KeyA: "moveLeft",
      KeyD: "moveRight",
      Space: "jump",
      Digit1: "texture1",
      Digit2: "texture3",
      Digit3: "texture4",
      Digit4: "texture5"
    };
    this.fpv = new three_addons_controls_PointerLockControls_js__WEBPACK_IMPORTED_MODULE_1__.PointerLockControls(this.player.camera, document.getElementById("bg"));
    this.mouse = new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(0, 0);
    this.raycaster = new three__WEBPACK_IMPORTED_MODULE_2__.Raycaster();
    this.initControls();
  }
  _createClass(Controls, [{
    key: "initControls",
    value: function initControls() {
      var _this = this;
      document.addEventListener("keydown", function (event) {
        _this.handleKeyDown(event);
      });
      document.addEventListener("keyup", function (event) {
        _this.handleKeyUp(event);
      });
      document.addEventListener("mousedown", function (event) {
        //console.log(event);
        _this.fpv.lock();
        _this.handleMouseDown(event);
      });
      document.addEventListener("mouseup", function (event) {
        //console.log(event);
        _this.fpv.lock();
        _this.handleMouseUp(event);
      });
      this.fpv.addEventListener("lock", function () {
        //menu.style.display = "none";
        //console.log("locked");
      });
      this.fpv.addEventListener("unlock", function () {
        //menu.style.display = "block";
        //console.log("unlocked");
      });
    }
  }, {
    key: "actionByKey",
    value: function actionByKey(key) {
      return this.keyActionMap[key];
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var action = this.actionByKey(event.code);
      //console.log("keyDown " + event);
      if (action) {
        this.player.actionMap[action] = true;
      }
      //console.log("actions keyDown", this.player.actionMap);
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event) {
      var action = this.actionByKey(event.code);
      //console.log(event);
      if (action) {
        this.player.actionMap[action] = false;
      }
      //console.log("actions ", this.player.actionMap);
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      //event.preventDefault();

      var action = this.actionByKey(event.button);
      //console.log(action);
      if (action) {
        this.player.actionMap[action] = true;
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      //event.preventDefault();
      var action = this.actionByKey(event.button);
      //console.log(action);
      if (action) {
        this.player.actionMap[action] = false;
      }
    }
  }]);
  return Controls;
}();

/***/ }),

/***/ "./src/js/Landscape.js":
/*!*****************************!*\
  !*** ./src/js/Landscape.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLandscape": () => (/* binding */ createLandscape)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");


function createLandscape() {
  //console.log("in landscape");
  for (var xIndex = 0; xIndex < 5; xIndex++) {
    for (var zIndex = 0; zIndex < 5; zIndex++) {
      var z = zIndex;
      var x = xIndex;
      var y = 0;
      var pos = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(x, y, z);
      _main__WEBPACK_IMPORTED_MODULE_0__.storage.addBlock({
        type: "grass",
        position: pos
      });
    }
  }
}

/***/ }),

/***/ "./src/js/Plant.js":
/*!*************************!*\
  !*** ./src/js/Plant.js ***!
  \*************************/
/***/ (() => {



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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");
/* harmony import */ var _Controls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controls.js */ "./src/js/Controls.js");
/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene.js */ "./src/js/Scene.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var Player = /*#__PURE__*/function () {
  function Player(_ref) {
    var camera = _ref.camera,
      mesh = _ref.mesh,
      position = _ref.position;
    _classCallCheck(this, Player);
    _defineProperty(this, "plrGeom", new three__WEBPACK_IMPORTED_MODULE_3__.SphereGeometry(1.5));
    _defineProperty(this, "plrMat", new three__WEBPACK_IMPORTED_MODULE_3__.MeshBasicMaterial());
    _defineProperty(this, "mesh", new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(this.plrGeom, this.plrMat));
    this.actionMap = {
      leftClick: false,
      rightClick: false,
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      jump: false,
      texture1: false,
      texture3: false,
      texture4: false,
      texture5: false
    };
    this.camera = camera;
    this.controls = new _Controls_js__WEBPACK_IMPORTED_MODULE_0__.Controls({
      player: this
    });
    this.position = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(position.x, position.y, position.z);
    this.mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(this.plrGeom, this.plrMat);
    this.mass = 70;
    this.movementSpeed = 4.5;
    this.jumpForce = 5;
    this.playerShape = new cannon_es__WEBPACK_IMPORTED_MODULE_4__.Sphere(1.5);
    this.playerBody = new cannon_es__WEBPACK_IMPORTED_MODULE_4__.Body({
      mass: this.mass
    });
    this.playerBody.addShape(this.playerShape);
    this.playerBody.position.copy(this.position);
    this.camera.position.copy(this.position);

    //this.updatePlayer();
  }
  _createClass(Player, [{
    key: "updatePlayer",
    value: function updatePlayer() {
      this.updatePosition();
      this.useAction();
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      //console.log('player pos update =', this.mesh.position);
      this.camera.position.copy(this.mesh.position);
    }
  }, {
    key: "useAction",
    value: function useAction() {
      if (this.actionMap["jump"] && Math.abs(this.playerBody.velocity.y) < 0.05) {
        this.playerBody.velocity.set(0, this.jumpForce, 0);
      }
      if (this.actionMap["rightClick"]) {
        this.controls.raycaster.setFromCamera(this.controls.mouse, this.camera);
        var intersects = this.controls.raycaster.intersectObjects(_Scene_js__WEBPACK_IMPORTED_MODULE_1__.scene.children);
        if (intersects.length > 0) {
          this.placeBlock(intersects[0], "cobblestone");
        }
        _main__WEBPACK_IMPORTED_MODULE_2__.blocks.useStorage();
      }
      if (this.actionMap["leftClick"]) {
        this.controls.raycaster.setFromCamera(this.controls.mouse, this.camera);
        var _intersects = this.controls.raycaster.intersectObjects(_Scene_js__WEBPACK_IMPORTED_MODULE_1__.scene.children);
        if (_intersects.length > 0) {
          this.removeBlock(_intersects[0]);
        }
      }
      var direction = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
      var frontVector = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, (this.actionMap["moveBackward"] ? 1 : 0) - (this.actionMap["moveForward"] ? 1 : 0));
      var sideVector = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3((this.actionMap["moveRight"] ? 1 : 0) - (this.actionMap["moveLeft"] ? 1 : 0), 0, 0);
      direction.addVectors(frontVector, sideVector);
      direction.normalize();
      direction.multiplyScalar(this.movementSpeed);
      direction.applyEuler(this.camera.rotation);
      this.playerBody.velocity.set(direction.x, this.playerBody.velocity.y, direction.z);
    }
  }, {
    key: "placeBlock",
    value: function placeBlock(block, blockType) {
      var position = block.object.position;
      var normal = block.face.normal;
      position.addVectors(position, normal);
      _main__WEBPACK_IMPORTED_MODULE_2__.storage.addBlock({
        type: blockType,
        position: position
      });
    }
  }, {
    key: "removeBlock",
    value: function removeBlock(block) {
      _main__WEBPACK_IMPORTED_MODULE_2__.storage.removeBlock();
    }
  }]);
  return Player;
}();

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

var renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  powerPreference: "high-performance",
  antialias: true
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







var scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();
var camera = _Camera_js__WEBPACK_IMPORTED_MODULE_0__.camera;
var renderer = _Renderer_js__WEBPACK_IMPORTED_MODULE_2__.renderer;
var sky, sun;
init();
function initSky() {
  // Add Sky
  sky = new three_addons_objects_Sky_js__WEBPACK_IMPORTED_MODULE_5__.Sky();
  sky.scale.setScalar(450000);
  scene.add(sky);
  sun = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();

  /// GUI

  var effectController = {
    turbidity: 10,
    rayleigh: 3,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.7,
    elevation: 2,
    azimuth: 180,
    exposure: renderer.toneMappingExposure
  };
  function guiChanged() {
    var uniforms = sky.material.uniforms;
    uniforms["turbidity"].value = effectController.turbidity;
    uniforms["rayleigh"].value = effectController.rayleigh;
    uniforms["mieCoefficient"].value = effectController.mieCoefficient;
    uniforms["mieDirectionalG"].value = effectController.mieDirectionalG;
    var phi = three__WEBPACK_IMPORTED_MODULE_4__.MathUtils.degToRad(90 - effectController.elevation);
    var theta = three__WEBPACK_IMPORTED_MODULE_4__.MathUtils.degToRad(effectController.azimuth);
    sun.setFromSphericalCoords(1, phi, theta);
    uniforms["sunPosition"].value.copy(sun);
    renderer.toneMappingExposure = effectController.exposure;
    //renderer.render(scene, camera);
  }

  var gui = new three_addons_libs_lil_gui_module_min_js__WEBPACK_IMPORTED_MODULE_6__.GUI();
  gui.add(effectController, "turbidity", 0.0, 20.0, 0.1).onChange(guiChanged);
  gui.add(effectController, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);
  gui.add(effectController, "mieCoefficient", 0.0, 0.1, 0.001).onChange(guiChanged);
  gui.add(effectController, "mieDirectionalG", 0.0, 1, 0.001).onChange(guiChanged);
  gui.add(effectController, "elevation", 0, 90, 0.1).onChange(guiChanged);
  gui.add(effectController, "azimuth", -180, 180, 0.1).onChange(guiChanged);
  gui.add(effectController, "exposure", 0, 1, 0.0001).onChange(guiChanged);
  guiChanged();
}
function init() {
  var helper = new three__WEBPACK_IMPORTED_MODULE_4__.GridHelper(10000, 2, 0xffffff, 0xffffff);
  scene.add(helper);
  initSky();
}

//scene.background = new THREE.Color(0x00ffff);
//scene.fog = new THREE.Fog(0x00ffff, 2, 80);

var pointLight_1 = new three__WEBPACK_IMPORTED_MODULE_4__.PointLight(0xffffff);
pointLight_1.position.set(5, 5, 0);
var pointLight_2 = new three__WEBPACK_IMPORTED_MODULE_4__.PointLight(0xffffff);
pointLight_2.position.set(-5, 5, 0);
var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xffffff, 0.15);
scene.add(pointLight_1, pointLight_2, ambientLight);
renderer.render(scene, camera);

/***/ }),

/***/ "./src/js/Storage.js":
/*!***************************!*\
  !*** ./src/js/Storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlocksArray": () => (/* binding */ BlocksArray),
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Block */ "./src/js/Block.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);
    this.blocks = [];
    this.initStore();
  }
  _createClass(Storage, [{
    key: "addBlock",
    value: function addBlock(_ref) {
      var typ = _ref.type,
        _ref$position = _ref.position,
        x = _ref$position.x,
        y = _ref$position.y,
        z = _ref$position.z;
      console.log("added a block");
      this.blocks.push({
        key: (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(),
        position: {
          x: x,
          y: y,
          z: z
        },
        type: typ
      });
    }
  }, {
    key: "removeBlock",
    value: function removeBlock() {}
  }, {
    key: "setTexture",
    value: function setTexture() {}
  }, {
    key: "saveWorld",
    value: function saveWorld() {}
  }, {
    key: "resetWorld",
    value: function resetWorld() {}
  }, {
    key: "initStore",
    value: function initStore() {}
  }]);
  return Storage;
}();
var BlocksArray = /*#__PURE__*/function () {
  function BlocksArray(_ref2) {
    var storage = _ref2.storage,
      meshes = _ref2.meshes,
      bodies = _ref2.bodies,
      world = _ref2.world,
      scene = _ref2.scene;
    _classCallCheck(this, BlocksArray);
    this.storage = storage;
    this.meshes = meshes;
    this.bodies = bodies;
    this.world = world;
    this.scene = scene;
    this.renderList = [];
    this.initBlocks();
  }
  _createClass(BlocksArray, [{
    key: "initBlocks",
    value: function initBlocks() {
      this.useStorage();
    }
  }, {
    key: "useStorage",
    value: function useStorage() {
      var _this = this;
      //console.log("storage length " + this.storage.blocks.length);

      this.storage.blocks.forEach(function (storeBlock) {
        //console.log("type = " + storeBlock.type);
        var block = new _Block__WEBPACK_IMPORTED_MODULE_1__.Block({
          blockType: storeBlock.type
        });
        var mesh = block.mesh;
        mesh.position.set(storeBlock.position.x, storeBlock.position.y, storeBlock.position.z);
        var blockShape = new cannon_es__WEBPACK_IMPORTED_MODULE_3__.Box(new cannon_es__WEBPACK_IMPORTED_MODULE_3__.Vec3(0.5, 0.5, 0.5));
        var blockBody = new cannon_es__WEBPACK_IMPORTED_MODULE_3__.Body({
          mass: 0
        });
        blockBody.addShape(blockShape);
        blockBody.position.set(storeBlock.position.x, storeBlock.position.y, storeBlock.position.z);
        _this.meshes.push(mesh);
        _this.bodies.push(blockBody);
        _this.world.addBody(blockBody);
        _this.scene.add(mesh);
      });
    }
  }]);
  return BlocksArray;
}();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blocks": () => (/* binding */ blocks),
/* harmony export */   "bodies": () => (/* binding */ bodies),
/* harmony export */   "meshes": () => (/* binding */ meshes),
/* harmony export */   "scene": () => (/* binding */ scene),
/* harmony export */   "storage": () => (/* binding */ storage),
/* harmony export */   "world": () => (/* binding */ world)
/* harmony export */ });
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene.js */ "./src/js/Scene.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Renderer.js */ "./src/js/Renderer.js");
/* harmony import */ var _Landscape_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Landscape.js */ "./src/js/Landscape.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Player.js */ "./src/js/Player.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Storage */ "./src/js/Storage.js");
/* harmony import */ var three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three/examples/jsm/libs/stats.module */ "./node_modules/three/examples/jsm/libs/stats.module.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");











// Three variables
var scene = _Scene_js__WEBPACK_IMPORTED_MODULE_1__.scene;
var camera = _Camera_js__WEBPACK_IMPORTED_MODULE_2__.camera;
var renderer = _Renderer_js__WEBPACK_IMPORTED_MODULE_3__.renderer;
var clock = new three__WEBPACK_IMPORTED_MODULE_7__.Clock();
var stats;

// Minecraft variables
var blocks;
var player;
var storage = new _Storage__WEBPACK_IMPORTED_MODULE_6__.Storage();

// cannon.js variables
var world;

// To be synced
var meshes = [];
var bodies = [];
initThree();
initCannon();
initMinecraft();
renderInfo();
GameLoop();
function initThree() {
  stats = new three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_8__["default"]();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild(stats.dom);
}
function initCannon() {
  // Setup world
  world = new cannon_es__WEBPACK_IMPORTED_MODULE_9__.World();
  world.gravity.set(0, -9.81, 0);
}
function initMinecraft() {
  _Landscape_js__WEBPACK_IMPORTED_MODULE_4__.createLandscape();
  blocks = new _Storage__WEBPACK_IMPORTED_MODULE_6__.BlocksArray({
    storage: storage,
    meshes: meshes,
    bodies: bodies,
    world: world,
    scene: scene
  });
  player = new _Player_js__WEBPACK_IMPORTED_MODULE_5__.Player({
    camera: camera,
    position: {
      x: 1,
      y: 3,
      z: 1
    }
  });
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
  for (var i = 0; i !== meshes.length; i++) {
    meshes[i].position.copy(bodies[i].position);
    meshes[i].quaternion.copy(bodies[i].quaternion);
  }
}
function GameLoop() {
  stats.begin();
  var deltaTime = clock.getDelta();

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

/***/ "./src/js/tree.js":
/*!************************!*\
  !*** ./src/js/tree.js ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


/* eslint-env browser */

/*
  eslint-disable
  no-console,
  func-names
*/

/** @typedef {any} TODO */
var normalizeUrl = __webpack_require__(/*! ./normalize-url */ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js");

var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;
/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */

function debounce(fn, time) {
  var timeout = 0;
  return function () {
    // @ts-ignore
    var self = this; // eslint-disable-next-line prefer-rest-params

    var args = arguments;

    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };

    clearTimeout(timeout); // @ts-ignore

    timeout = setTimeout(functionCall, time);
  };
}

function noop() {}
/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */


function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];

  if (!src) {
    if (document.currentScript) {
      src =
      /** @type {HTMLScriptElement} */
      document.currentScript.src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];

      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }

    srcByModuleId[moduleId] = src;
  }
  /**
   * @param {string} fileMap
   * @returns {null | string[]}
   */


  return function (fileMap) {
    if (!src) {
      return null;
    }

    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];

    if (!filename) {
      return [src.replace(".js", ".css")];
    }

    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }

    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}
/**
 * @param {TODO} el
 * @param {string} [url]
 */


function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    } // eslint-disable-next-line


    url = el.href.split("?")[0];
  }

  if (!isUrlRequest(
  /** @type {string} */
  url)) {
    return;
  }

  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }

  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  } // eslint-disable-next-line no-param-reassign


  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }

    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }

    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());

  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}
/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */


function getReloadUrl(href, src) {
  var ret; // eslint-disable-next-line no-param-reassign

  href = normalizeUrl(href);
  src.some(
  /**
   * @param {string} url
   */
  // eslint-disable-next-line array-callback-return
  function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}
/**
 * @param {string} [src]
 * @returns {boolean}
 */


function reloadStyle(src) {
  if (!src) {
    return false;
  }

  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }

    var url = getReloadUrl(el.href, src);

    if (!isUrlRequest(url)) {
      return;
    }

    if (el.visited === true) {
      return;
    }

    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}

function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }

    updateCss(el);
  });
}
/**
 * @param {string} url
 * @returns {boolean}
 */


function isUrlRequest(url) {
  // An URL is not an request if
  // It is not http or https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }

  return true;
}
/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */


module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }

  var getScriptSrc = getCurrentScriptUrl(moduleId);

  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);

    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }

    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }

  return debounce(update, 50);
};

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


/* eslint-disable */

/**
 * @param {string[]} pathComponents
 * @returns {string}
 */
function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;

      case ".":
        break;

      default:
        accumulator.push(item);
    }

    return accumulator;
  },
  /** @type {string[]} */
  []).join("/");
}
/**
 * @param {string} urlString
 * @returns {string}
 */


module.exports = function (urlString) {
  urlString = urlString.trim();

  if (/^data:/i.test(urlString)) {
    return urlString;
  }

  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1672840422512
      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/js/Block.js"), __webpack_exec__("./src/js/Storage.js"), __webpack_exec__("./src/js/Landscape.js"), __webpack_exec__("./src/js/Plant.js"), __webpack_exec__("./src/js/tree.js"), __webpack_exec__("./src/js/Controls.js"), __webpack_exec__("./src/js/Player.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQSwwQkFBMEI7QUFDMUIsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEMsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFZSIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9CbG9jay5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvQ2FtZXJhLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9Db250cm9scy5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvTGFuZHNjYXBlLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL1JlbmRlcmVyLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9TY2VuZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL25vcm1hbGl6ZS11cmwuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2Nzcy9tYWluLmNzcz9jMDhlIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL1BvaW50ZXJMb2NrQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9saWJzL2xpbC1ndWkubW9kdWxlLm1pbi5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2xpYnMvc3RhdHMubW9kdWxlLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vb2JqZWN0cy9Ta3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2sge1xyXG4gIGNvbnN0cnVjdG9yKHsgYmxvY2tUeXBlIH0pIHtcclxuICAgIGNvbnN0IGJsb2NrR29lbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuICAgIGNvbnN0IGJsb2NrTWF0ZXJpYWxzID0gbmV3IEJsb2NrTWF0ZXJpYWxzKCk7XHJcbiAgICBjb25zdCByZW5kZXJEaXN0YW5jZSA9IDQ7XHJcbiAgICBjb25zdCBjaHVua1NpemUgPSAxMDtcclxuICAgIGNvbnN0IGRlcHRoID0gNTtcclxuXHJcbiAgICB0aGlzLmJsb2NrR29lbSA9IGJsb2NrR29lbTtcclxuICAgIHRoaXMuYmxvY2tNYXRlcmlhbHMgPSBibG9ja01hdGVyaWFscztcclxuICAgIHRoaXMucmVuZGVyRGlzdGFuY2UgPSByZW5kZXJEaXN0YW5jZTtcclxuICAgIHRoaXMuY2h1bmtTaXplID0gY2h1bmtTaXplO1xyXG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xyXG5cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJncmFzc1wiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy5ncmFzc01hdDtcclxuICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5ncmFzc01hdCk7XHJcblxyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIl07XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwiZGlydFwiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy5kaXJ0TWF0O1xyXG4gICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLmRpcnRNYXQpO1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIl07XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwiY29iYmxlc3RvbmVcIikge1xyXG4gICAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgdGhpcy5tYXRlcmlhbEFycmF5ID0gYmxvY2tNYXRlcmlhbHMuY29iYmxlc3RvbmVNYXQ7XHJcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMuY29iYmxlc3RvbmVNYXQpO1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIiwgXCJkZXNlcnRcIl07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcIm9ha0xvZ1wiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy5vYWtMb2dNYXQ7XHJcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMub2FrTG9nTWF0KTtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSBbMF07XHJcbiAgICAgIHRoaXMuYmlvbWVzID0gW1wicGxhaW5zXCJdO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcIm9ha0xlYXZlc1wiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy5vYWtMZWF2ZXNNYXQ7XHJcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMub2FrTGVhdmVzTWF0KTtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSBbMF07XHJcbiAgICAgIHRoaXMuYmlvbWVzID0gW1wicGxhaW5zXCJdO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcInNhbmRcIikge1xyXG4gICAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgdGhpcy5tYXRlcmlhbEFycmF5ID0gYmxvY2tNYXRlcmlhbHMuc2FuZE1hdDtcclxuICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5zYW5kTWF0KTtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSBbMF07XHJcbiAgICAgIHRoaXMuYmlvbWVzID0gW1wicGxhaW5zXCJdO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcIndhdGVyXCIpIHtcclxuICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IGJsb2NrTWF0ZXJpYWxzLndhdGVyTWF0O1xyXG4gICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLndhdGVyTWF0KTtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSBbMF07XHJcbiAgICAgIHRoaXMuYmlvbWVzID0gW1wicGxhaW5zXCJdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrTWF0ZXJpYWxzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xyXG5cclxuICAgIHRoaXMuZGlydE1hdCA9IFtcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvYmJsZXN0b25lTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub2FrTG9nTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMb2cvc2lkZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy90b3AuanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9ib3R0b20uanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMb2cvc2lkZS5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9ha0xlYXZlc01hdCA9IFtcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNhbmRNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy53YXRlck1hdCA9IFtcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdyYXNzTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy90b3AuanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL2JvdHRvbS5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZXh0dXJlT3BhY2l0eSgpO1xyXG4gICAgLy90aGlzLnRleHR1cmVJbWFnZXNMb2FkZXIoXCIvYXNzZXRzL3RleHR1cmUvZ3Jhc3NcIik7XHJcbiAgfVxyXG4gIHRleHR1cmVJbWFnZXNMb2FkZXIoZmlsZVVSTCkge1xyXG4gICAgLy9qb2luaW5nIHBhdGggb2YgZGlyZWN0b3J5XHJcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gZmlsZVVSTDtcclxuICAgIC8vcGFzc3NpbmcgZGlyZWN0b3J5UGF0aCBhbmQgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgIGZzLnJlYWRkaXIoZGlyZWN0b3J5UGF0aCwgZnVuY3Rpb24gKGVyciwgZmlsZXMpIHtcclxuICAgICAgLy9oYW5kbGluZyBlcnJvclxyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIHNjYW4gZGlyZWN0b3J5OiBcIiArIGVycik7XHJcbiAgICAgIH1cclxuICAgICAgLy9saXN0aW5nIGFsbCBmaWxlcyB1c2luZyBmb3JFYWNoXHJcbiAgICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICAvLyBEbyB3aGF0ZXZlciB5b3Ugd2FudCB0byBkbyB3aXRoIHRoZSBmaWxlXHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsZTtcclxuICB9XHJcbiAgdGV4dHVyZU9wYWNpdHkoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2F0ZXJNYXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGkgPT0gMiB8fCBpID09IDMpIHtcclxuICAgICAgICAvLyB0b3AgYW5kIGJvdHRvbVxyXG4gICAgICAgIHRoaXMud2F0ZXJNYXRbaV0udHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2F0ZXJNYXRbaV0ub3BhY2l0eSA9IDAuNztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBzaWRlc1xyXG4gICAgICAgIHRoaXMud2F0ZXJNYXRbaV0udHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2F0ZXJNYXRbaV0ub3BhY2l0eSA9IDAuNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmdyYXNzID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcImdyYXNzXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpcnQgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwiZGlydFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb2JibGVzdG9uZSA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJjb2JibGVzdG9uZVwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vYWtMb2cgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwib2FrTG9nXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9ha0xlYXZlcyA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJvYWtMZWF2ZXNcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2FuZCA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJzYW5kXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLndhdGVyID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcIndhdGVyXCIsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0QmxvY2tCeVR5cGUoYmxvY2tUeXBlKSB7XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwiZ3Jhc3NcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5ncmFzcztcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJkaXJ0XCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGlydDtcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJjb2JibGVzdG9uZVwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvYmJsZXN0b25lO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJvYWtMb2dcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5vYWtMb2c7XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwib2FrTGVhdmVzXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub2FrTGVhdmVzO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcInNhbmRcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5zYW5kO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcIndhdGVyXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud2F0ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcclxuICA3NSxcclxuICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAwLjEsXHJcbiAgMTAwMFxyXG4pO1xyXG4iLCJpbXBvcnQgXCIuLi9jc3MvbWFpbi5jc3NcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5pbXBvcnQgeyBQb2ludGVyTG9ja0NvbnRyb2xzIH0gZnJvbSBcInRocmVlL2FkZG9ucy9jb250cm9scy9Qb2ludGVyTG9ja0NvbnRyb2xzLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbHMge1xyXG4gIGNvbnN0cnVjdG9yKHsgcGxheWVyIH0pIHtcclxuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuICAgIHRoaXMua2V5QWN0aW9uTWFwID0ge1xyXG4gICAgICAwOiBcImxlZnRDbGlja1wiLFxyXG4gICAgICAyOiBcInJpZ2h0Q2xpY2tcIixcclxuICAgICAgS2V5VzogXCJtb3ZlRm9yd2FyZFwiLFxyXG4gICAgICBLZXlTOiBcIm1vdmVCYWNrd2FyZFwiLFxyXG4gICAgICBLZXlBOiBcIm1vdmVMZWZ0XCIsXHJcbiAgICAgIEtleUQ6IFwibW92ZVJpZ2h0XCIsXHJcbiAgICAgIFNwYWNlOiBcImp1bXBcIixcclxuICAgICAgRGlnaXQxOiBcInRleHR1cmUxXCIsXHJcbiAgICAgIERpZ2l0MjogXCJ0ZXh0dXJlM1wiLFxyXG4gICAgICBEaWdpdDM6IFwidGV4dHVyZTRcIixcclxuICAgICAgRGlnaXQ0OiBcInRleHR1cmU1XCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZnB2ID0gbmV3IFBvaW50ZXJMb2NrQ29udHJvbHMoXHJcbiAgICAgIHRoaXMucGxheWVyLmNhbWVyYSxcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZ1wiKVxyXG4gICAgKTtcclxuICAgIHRoaXMubW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigwLCAwKTtcclxuICAgIHRoaXMucmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xyXG4gICAgdGhpcy5pbml0Q29udHJvbHMoKTtcclxuICB9XHJcbiAgaW5pdENvbnRyb2xzKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlS2V5RG93bihldmVudCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVLZXlVcChldmVudCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICB0aGlzLmZwdi5sb2NrKCk7XHJcbiAgICAgIHRoaXMuaGFuZGxlTW91c2VEb3duKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICB0aGlzLmZwdi5sb2NrKCk7XHJcbiAgICAgIHRoaXMuaGFuZGxlTW91c2VVcChldmVudCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZnB2LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2NrXCIsICgpID0+IHtcclxuICAgICAgLy9tZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImxvY2tlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZnB2LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvL21lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcInVubG9ja2VkXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhY3Rpb25CeUtleShrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLmtleUFjdGlvbk1hcFtrZXldO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5RG93bihldmVudCkge1xyXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25CeUtleShldmVudC5jb2RlKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJrZXlEb3duIFwiICsgZXZlbnQpO1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICB0aGlzLnBsYXllci5hY3Rpb25NYXBbYWN0aW9uXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYWN0aW9ucyBrZXlEb3duXCIsIHRoaXMucGxheWVyLmFjdGlvbk1hcCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlVcChldmVudCkge1xyXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25CeUtleShldmVudC5jb2RlKTtcclxuICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICB0aGlzLnBsYXllci5hY3Rpb25NYXBbYWN0aW9uXSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImFjdGlvbnMgXCIsIHRoaXMucGxheWVyLmFjdGlvbk1hcCk7XHJcbiAgfVxyXG4gIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xyXG4gICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uQnlLZXkoZXZlbnQuYnV0dG9uKTtcclxuICAgIC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwW2FjdGlvbl0gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVNb3VzZVVwKGV2ZW50KSB7XHJcbiAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbkJ5S2V5KGV2ZW50LmJ1dHRvbik7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmFjdGlvbk1hcFthY3Rpb25dID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgbW4gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxhbmRzY2FwZSgpIHtcclxuICAvL2NvbnNvbGUubG9nKFwiaW4gbGFuZHNjYXBlXCIpO1xyXG4gIGZvciAodmFyIHhJbmRleCA9IDA7IHhJbmRleCA8IDU7IHhJbmRleCsrKSB7XHJcbiAgICBmb3IgKHZhciB6SW5kZXggPSAwOyB6SW5kZXggPCA1OyB6SW5kZXgrKykge1xyXG4gICAgICBjb25zdCB6ID0gekluZGV4O1xyXG4gICAgICBjb25zdCB4ID0geEluZGV4O1xyXG4gICAgICBjb25zdCB5ID0gMDtcclxuICAgICAgY29uc3QgcG9zID0gbmV3IFRIUkVFLlZlY3RvcjMoeCwgeSwgeik7XHJcbiAgICAgIG1uLnN0b3JhZ2UuYWRkQmxvY2soeyB0eXBlOiBcImdyYXNzXCIsIHBvc2l0aW9uOiBwb3MgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgKiBhcyBDQU5OT04gZnJvbSBcImNhbm5vbi1lc1wiO1xyXG5pbXBvcnQgKiBhcyBjdCBmcm9tIFwiLi9Db250cm9scy5qc1wiO1xyXG5pbXBvcnQgKiBhcyBzYyBmcm9tIFwiLi9TY2VuZS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBtbiBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICBwbHJHZW9tID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEuNSk7XHJcbiAgcGxyTWF0ID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCk7XHJcbiAgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMucGxyR2VvbSwgdGhpcy5wbHJNYXQpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7IGNhbWVyYSwgbWVzaCwgcG9zaXRpb24gfSkge1xyXG4gICAgdGhpcy5hY3Rpb25NYXAgPSB7XHJcbiAgICAgIGxlZnRDbGljazogZmFsc2UsXHJcbiAgICAgIHJpZ2h0Q2xpY2s6IGZhbHNlLFxyXG4gICAgICBtb3ZlRm9yd2FyZDogZmFsc2UsXHJcbiAgICAgIG1vdmVCYWNrd2FyZDogZmFsc2UsXHJcbiAgICAgIG1vdmVMZWZ0OiBmYWxzZSxcclxuICAgICAgbW92ZVJpZ2h0OiBmYWxzZSxcclxuICAgICAganVtcDogZmFsc2UsXHJcbiAgICAgIHRleHR1cmUxOiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTM6IGZhbHNlLFxyXG4gICAgICB0ZXh0dXJlNDogZmFsc2UsXHJcbiAgICAgIHRleHR1cmU1OiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICB0aGlzLmNvbnRyb2xzID0gbmV3IGN0LkNvbnRyb2xzKHsgcGxheWVyOiB0aGlzIH0pO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xyXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5wbHJHZW9tLCB0aGlzLnBsck1hdCk7XHJcbiAgICB0aGlzLm1hc3MgPSA3MDtcclxuICAgIHRoaXMubW92ZW1lbnRTcGVlZCA9IDQuNTtcclxuICAgIHRoaXMuanVtcEZvcmNlID0gNTtcclxuICAgIHRoaXMucGxheWVyU2hhcGUgPSBuZXcgQ0FOTk9OLlNwaGVyZSgxLjUpO1xyXG4gICAgdGhpcy5wbGF5ZXJCb2R5ID0gbmV3IENBTk5PTi5Cb2R5KHsgbWFzczogdGhpcy5tYXNzIH0pO1xyXG4gICAgdGhpcy5wbGF5ZXJCb2R5LmFkZFNoYXBlKHRoaXMucGxheWVyU2hhcGUpO1xyXG4gICAgdGhpcy5wbGF5ZXJCb2R5LnBvc2l0aW9uLmNvcHkodGhpcy5wb3NpdGlvbik7XHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KHRoaXMucG9zaXRpb24pO1xyXG5cclxuICAgIC8vdGhpcy51cGRhdGVQbGF5ZXIoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBsYXllcigpIHtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIHRoaXMudXNlQWN0aW9uKCk7XHJcbiAgfVxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygncGxheWVyIHBvcyB1cGRhdGUgPScsIHRoaXMubWVzaC5wb3NpdGlvbik7XHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KHRoaXMubWVzaC5wb3NpdGlvbik7XHJcbiAgfVxyXG4gIHVzZUFjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmFjdGlvbk1hcFtcImp1bXBcIl0gJiYgTWF0aC5hYnModGhpcy5wbGF5ZXJCb2R5LnZlbG9jaXR5LnkpIDwgMC4wNSkge1xyXG4gICAgICB0aGlzLnBsYXllckJvZHkudmVsb2NpdHkuc2V0KDAsIHRoaXMuanVtcEZvcmNlLCAwKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFjdGlvbk1hcFtcInJpZ2h0Q2xpY2tcIl0pIHtcclxuICAgICAgdGhpcy5jb250cm9scy5yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSh0aGlzLmNvbnRyb2xzLm1vdXNlLCB0aGlzLmNhbWVyYSk7XHJcbiAgICAgIGxldCBpbnRlcnNlY3RzID0gdGhpcy5jb250cm9scy5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyhcclxuICAgICAgICBzYy5zY2VuZS5jaGlsZHJlblxyXG4gICAgICApO1xyXG4gICAgICBpZiAoaW50ZXJzZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5wbGFjZUJsb2NrKGludGVyc2VjdHNbMF0sIFwiY29iYmxlc3RvbmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgbW4uYmxvY2tzLnVzZVN0b3JhZ2UoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFjdGlvbk1hcFtcImxlZnRDbGlja1wiXSkge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLnJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHRoaXMuY29udHJvbHMubW91c2UsIHRoaXMuY2FtZXJhKTtcclxuICAgICAgbGV0IGludGVyc2VjdHMgPSB0aGlzLmNvbnRyb2xzLnJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKFxyXG4gICAgICAgIHNjLnNjZW5lLmNoaWxkcmVuXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoaW50ZXJzZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVCbG9jayhpbnRlcnNlY3RzWzBdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGlyZWN0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgICBjb25zdCBmcm9udFZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAodGhpcy5hY3Rpb25NYXBbXCJtb3ZlQmFja3dhcmRcIl0gPyAxIDogMCkgLVxyXG4gICAgICAgICh0aGlzLmFjdGlvbk1hcFtcIm1vdmVGb3J3YXJkXCJdID8gMSA6IDApXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHNpZGVWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgKHRoaXMuYWN0aW9uTWFwW1wibW92ZVJpZ2h0XCJdID8gMSA6IDApIC1cclxuICAgICAgICAodGhpcy5hY3Rpb25NYXBbXCJtb3ZlTGVmdFwiXSA/IDEgOiAwKSxcclxuICAgICAgMCxcclxuICAgICAgMFxyXG4gICAgKTtcclxuXHJcbiAgICBkaXJlY3Rpb24uYWRkVmVjdG9ycyhmcm9udFZlY3Rvciwgc2lkZVZlY3Rvcik7XHJcbiAgICBkaXJlY3Rpb24ubm9ybWFsaXplKCk7XHJcbiAgICBkaXJlY3Rpb24ubXVsdGlwbHlTY2FsYXIodGhpcy5tb3ZlbWVudFNwZWVkKTtcclxuICAgIGRpcmVjdGlvbi5hcHBseUV1bGVyKHRoaXMuY2FtZXJhLnJvdGF0aW9uKTtcclxuXHJcbiAgICB0aGlzLnBsYXllckJvZHkudmVsb2NpdHkuc2V0KFxyXG4gICAgICBkaXJlY3Rpb24ueCxcclxuICAgICAgdGhpcy5wbGF5ZXJCb2R5LnZlbG9jaXR5LnksXHJcbiAgICAgIGRpcmVjdGlvbi56XHJcbiAgICApO1xyXG4gIH1cclxuICBwbGFjZUJsb2NrKGJsb2NrLCBibG9ja1R5cGUpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IGJsb2NrLm9iamVjdC5wb3NpdGlvbjtcclxuICAgIGxldCBub3JtYWwgPSBibG9jay5mYWNlLm5vcm1hbDtcclxuXHJcbiAgICBwb3NpdGlvbi5hZGRWZWN0b3JzKHBvc2l0aW9uLCBub3JtYWwpO1xyXG4gICAgbW4uc3RvcmFnZS5hZGRCbG9jayh7XHJcbiAgICAgIHR5cGU6IGJsb2NrVHlwZSxcclxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlbW92ZUJsb2NrKGJsb2NrKSB7XHJcbiAgICBtbi5zdG9yYWdlLnJlbW92ZUJsb2NrKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgIGNhbnZhczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnJyksIHBvd2VyUHJlZmVyZW5jZTogXCJoaWdoLXBlcmZvcm1hbmNlXCIsIGFudGlhbGlhczogdHJ1ZSBcclxufSk7XHJcblxyXG5yZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZztcclxucmVuZGVyZXIudG9uZU1hcHBpbmcgPSBUSFJFRS5BQ0VTRmlsbWljVG9uZU1hcHBpbmc7XHJcbnJlbmRlcmVyLnRvbmVNYXBwaW5nRXhwb3N1cmUgPSAwLjU7XHJcbnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XHJcbnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgKiBhcyBjbSBmcm9tIFwiLi9DYW1lcmEuanNcIjtcclxuaW1wb3J0ICogYXMgY3QgZnJvbSBcIi4vQ29udHJvbHMuanNcIjtcclxuaW1wb3J0ICogYXMgcmQgZnJvbSBcIi4vUmVuZGVyZXIuanNcIjtcclxuaW1wb3J0ICogYXMgbGQgZnJvbSBcIi4vTGFuZHNjYXBlLmpzXCI7XHJcbmltcG9ydCB7IEdVSSB9IGZyb20gXCJ0aHJlZS9hZGRvbnMvbGlicy9saWwtZ3VpLm1vZHVsZS5taW4uanNcIjtcclxuaW1wb3J0IHsgU2t5IH0gZnJvbSBcInRocmVlL2FkZG9ucy9vYmplY3RzL1NreS5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbmNvbnN0IGNhbWVyYSA9IGNtLmNhbWVyYTtcclxuY29uc3QgcmVuZGVyZXIgPSByZC5yZW5kZXJlcjtcclxuXHJcbmxldCBza3ksIHN1bjtcclxuXHJcbmluaXQoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTa3koKSB7XHJcbiAgLy8gQWRkIFNreVxyXG4gIHNreSA9IG5ldyBTa3koKTtcclxuICBza3kuc2NhbGUuc2V0U2NhbGFyKDQ1MDAwMCk7XHJcbiAgc2NlbmUuYWRkKHNreSk7XHJcblxyXG4gIHN1biA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gIC8vLyBHVUlcclxuXHJcbiAgY29uc3QgZWZmZWN0Q29udHJvbGxlciA9IHtcclxuICAgIHR1cmJpZGl0eTogMTAsXHJcbiAgICByYXlsZWlnaDogMyxcclxuICAgIG1pZUNvZWZmaWNpZW50OiAwLjAwNSxcclxuICAgIG1pZURpcmVjdGlvbmFsRzogMC43LFxyXG4gICAgZWxldmF0aW9uOiAyLFxyXG4gICAgYXppbXV0aDogMTgwLFxyXG4gICAgZXhwb3N1cmU6IHJlbmRlcmVyLnRvbmVNYXBwaW5nRXhwb3N1cmUsXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ3VpQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHVuaWZvcm1zID0gc2t5Lm1hdGVyaWFsLnVuaWZvcm1zO1xyXG4gICAgdW5pZm9ybXNbXCJ0dXJiaWRpdHlcIl0udmFsdWUgPSBlZmZlY3RDb250cm9sbGVyLnR1cmJpZGl0eTtcclxuICAgIHVuaWZvcm1zW1wicmF5bGVpZ2hcIl0udmFsdWUgPSBlZmZlY3RDb250cm9sbGVyLnJheWxlaWdoO1xyXG4gICAgdW5pZm9ybXNbXCJtaWVDb2VmZmljaWVudFwiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIubWllQ29lZmZpY2llbnQ7XHJcbiAgICB1bmlmb3Jtc1tcIm1pZURpcmVjdGlvbmFsR1wiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIubWllRGlyZWN0aW9uYWxHO1xyXG5cclxuICAgIGNvbnN0IHBoaSA9IFRIUkVFLk1hdGhVdGlscy5kZWdUb1JhZCg5MCAtIGVmZmVjdENvbnRyb2xsZXIuZWxldmF0aW9uKTtcclxuICAgIGNvbnN0IHRoZXRhID0gVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKGVmZmVjdENvbnRyb2xsZXIuYXppbXV0aCk7XHJcblxyXG4gICAgc3VuLnNldEZyb21TcGhlcmljYWxDb29yZHMoMSwgcGhpLCB0aGV0YSk7XHJcblxyXG4gICAgdW5pZm9ybXNbXCJzdW5Qb3NpdGlvblwiXS52YWx1ZS5jb3B5KHN1bik7XHJcblxyXG4gICAgcmVuZGVyZXIudG9uZU1hcHBpbmdFeHBvc3VyZSA9IGVmZmVjdENvbnRyb2xsZXIuZXhwb3N1cmU7XHJcbiAgICAvL3JlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGd1aSA9IG5ldyBHVUkoKTtcclxuXHJcbiAgZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcInR1cmJpZGl0eVwiLCAwLjAsIDIwLjAsIDAuMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcInJheWxlaWdoXCIsIDAuMCwgNCwgMC4wMDEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIGd1aVxyXG4gICAgLmFkZChlZmZlY3RDb250cm9sbGVyLCBcIm1pZUNvZWZmaWNpZW50XCIsIDAuMCwgMC4xLCAwLjAwMSlcclxuICAgIC5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICBndWlcclxuICAgIC5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJtaWVEaXJlY3Rpb25hbEdcIiwgMC4wLCAxLCAwLjAwMSlcclxuICAgIC5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwiZWxldmF0aW9uXCIsIDAsIDkwLCAwLjEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJhemltdXRoXCIsIC0xODAsIDE4MCwgMC4xKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwiZXhwb3N1cmVcIiwgMCwgMSwgMC4wMDAxKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuXHJcbiAgZ3VpQ2hhbmdlZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGNvbnN0IGhlbHBlciA9IG5ldyBUSFJFRS5HcmlkSGVscGVyKDEwMDAwLCAyLCAweGZmZmZmZiwgMHhmZmZmZmYpO1xyXG4gIHNjZW5lLmFkZChoZWxwZXIpO1xyXG5cclxuICBpbml0U2t5KCk7XHJcbn1cclxuXHJcbi8vc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5Db2xvcigweDAwZmZmZik7XHJcbi8vc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZygweDAwZmZmZiwgMiwgODApO1xyXG5cclxuY29uc3QgcG9pbnRMaWdodF8xID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYpO1xyXG5wb2ludExpZ2h0XzEucG9zaXRpb24uc2V0KDUsIDUsIDApO1xyXG5jb25zdCBwb2ludExpZ2h0XzIgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZik7XHJcbnBvaW50TGlnaHRfMi5wb3NpdGlvbi5zZXQoLTUsIDUsIDApO1xyXG5jb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjE1KTtcclxuXHJcbnNjZW5lLmFkZChwb2ludExpZ2h0XzEsIHBvaW50TGlnaHRfMiwgYW1iaWVudExpZ2h0KTtcclxuXHJcbnJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuIiwiaW1wb3J0IFwiLi4vY3NzL21haW4uY3NzXCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgQkxLIGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcclxuaW1wb3J0ICogYXMgQ0FOTk9OIGZyb20gXCJjYW5ub24tZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmxvY2tzID0gW107XHJcbiAgICB0aGlzLmluaXRTdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgYWRkQmxvY2soeyB0eXBlOiB0eXAsIHBvc2l0aW9uOiB7IHgsIHksIHogfSB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImFkZGVkIGEgYmxvY2tcIik7XHJcbiAgICB0aGlzLmJsb2Nrcy5wdXNoKHtcclxuICAgICAga2V5OiBuYW5vaWQoKSxcclxuICAgICAgcG9zaXRpb246IHsgeCwgeSwgeiB9LFxyXG4gICAgICB0eXBlOiB0eXAsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVtb3ZlQmxvY2soKSB7fVxyXG4gIHNldFRleHR1cmUoKSB7fVxyXG4gIHNhdmVXb3JsZCgpIHt9XHJcbiAgcmVzZXRXb3JsZCgpIHt9XHJcbiAgaW5pdFN0b3JlKCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2Nrc0FycmF5IHtcclxuICBjb25zdHJ1Y3Rvcih7IHN0b3JhZ2UsIG1lc2hlcywgYm9kaWVzLCB3b3JsZCwgc2NlbmUgfSkge1xyXG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuICAgIHRoaXMubWVzaGVzID0gbWVzaGVzO1xyXG4gICAgdGhpcy5ib2RpZXMgPSBib2RpZXM7XHJcbiAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcblxyXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgdGhpcy5yZW5kZXJMaXN0ID0gW107XHJcblxyXG4gICAgdGhpcy5pbml0QmxvY2tzKCk7XHJcbiAgfVxyXG4gIGluaXRCbG9ja3MoKSB7XHJcbiAgICB0aGlzLnVzZVN0b3JhZ2UoKTtcclxuICB9XHJcbiAgdXNlU3RvcmFnZSgpIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJzdG9yYWdlIGxlbmd0aCBcIiArIHRoaXMuc3RvcmFnZS5ibG9ja3MubGVuZ3RoKTtcclxuXHJcbiAgICB0aGlzLnN0b3JhZ2UuYmxvY2tzLmZvckVhY2goKHN0b3JlQmxvY2spID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcInR5cGUgPSBcIiArIHN0b3JlQmxvY2sudHlwZSk7XHJcbiAgICAgIGxldCBibG9jayA9IG5ldyBCTEsuQmxvY2soeyBibG9ja1R5cGU6IHN0b3JlQmxvY2sudHlwZSB9KTtcclxuICAgICAgbGV0IG1lc2ggPSBibG9jay5tZXNoO1xyXG4gICAgICBtZXNoLnBvc2l0aW9uLnNldChcclxuICAgICAgICBzdG9yZUJsb2NrLnBvc2l0aW9uLngsXHJcbiAgICAgICAgc3RvcmVCbG9jay5wb3NpdGlvbi55LFxyXG4gICAgICAgIHN0b3JlQmxvY2sucG9zaXRpb24uelxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBibG9ja1NoYXBlID0gbmV3IENBTk5PTi5Cb3gobmV3IENBTk5PTi5WZWMzKDAuNSwgMC41LCAwLjUpKTtcclxuICAgICAgY29uc3QgYmxvY2tCb2R5ID0gbmV3IENBTk5PTi5Cb2R5KHsgbWFzczogMCB9KTtcclxuICAgICAgYmxvY2tCb2R5LmFkZFNoYXBlKGJsb2NrU2hhcGUpO1xyXG5cclxuICAgICAgYmxvY2tCb2R5LnBvc2l0aW9uLnNldChcclxuICAgICAgICBzdG9yZUJsb2NrLnBvc2l0aW9uLngsXHJcbiAgICAgICAgc3RvcmVCbG9jay5wb3NpdGlvbi55LFxyXG4gICAgICAgIHN0b3JlQmxvY2sucG9zaXRpb24uelxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5tZXNoZXMucHVzaChtZXNoKTtcclxuICAgICAgdGhpcy5ib2RpZXMucHVzaChibG9ja0JvZHkpO1xyXG4gICAgICB0aGlzLndvcmxkLmFkZEJvZHkoYmxvY2tCb2R5KTtcclxuICAgICAgdGhpcy5zY2VuZS5hZGQobWVzaCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFwiLi4vY3NzL21haW4uY3NzXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCAqIGFzIHNjIGZyb20gXCIuL1NjZW5lLmpzXCI7XG5pbXBvcnQgKiBhcyBjbSBmcm9tIFwiLi9DYW1lcmEuanNcIjtcblxuaW1wb3J0ICogYXMgcmQgZnJvbSBcIi4vUmVuZGVyZXIuanNcIjtcbmltcG9ydCAqIGFzIGxkIGZyb20gXCIuL0xhbmRzY2FwZS5qc1wiO1xuaW1wb3J0ICogYXMgUExSIGZyb20gXCIuL1BsYXllci5qc1wiO1xuaW1wb3J0ICogYXMgQ0FOTk9OIGZyb20gXCJjYW5ub24tZXNcIjtcbmltcG9ydCAqIGFzIHN0IGZyb20gXCIuL1N0b3JhZ2VcIjtcblxuaW1wb3J0IFN0YXRzIGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbGlicy9zdGF0cy5tb2R1bGVcIjtcblxuLy8gVGhyZWUgdmFyaWFibGVzXG5leHBvcnQgbGV0IHNjZW5lID0gc2Muc2NlbmU7XG5sZXQgY2FtZXJhID0gY20uY2FtZXJhO1xubGV0IHJlbmRlcmVyID0gcmQucmVuZGVyZXI7XG5jb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuXG5sZXQgc3RhdHM7XG5cbi8vIE1pbmVjcmFmdCB2YXJpYWJsZXNcbmV4cG9ydCBsZXQgYmxvY2tzO1xubGV0IHBsYXllcjtcblxuZXhwb3J0IGxldCBzdG9yYWdlID0gbmV3IHN0LlN0b3JhZ2UoKTtcblxuLy8gY2Fubm9uLmpzIHZhcmlhYmxlc1xuZXhwb3J0IGxldCB3b3JsZDtcblxuLy8gVG8gYmUgc3luY2VkXG5leHBvcnQgbGV0IG1lc2hlcyA9IFtdO1xuZXhwb3J0IGxldCBib2RpZXMgPSBbXTtcblxuaW5pdFRocmVlKCk7XG5pbml0Q2Fubm9uKCk7XG5pbml0TWluZWNyYWZ0KCk7XG5yZW5kZXJJbmZvKCk7XG5HYW1lTG9vcCgpO1xuXG5mdW5jdGlvbiBpbml0VGhyZWUoKSB7XG4gIHN0YXRzID0gbmV3IFN0YXRzKCk7XG4gIHN0YXRzLnNob3dQYW5lbCgwKTsgLy8gMDogZnBzLCAxOiBtcywgMjogbWIsIDMrOiBjdXN0b21cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xufVxuXG5mdW5jdGlvbiBpbml0Q2Fubm9uKCkge1xuICAvLyBTZXR1cCB3b3JsZFxuICB3b3JsZCA9IG5ldyBDQU5OT04uV29ybGQoKTtcbiAgd29ybGQuZ3Jhdml0eS5zZXQoMCwgLTkuODEsIDApO1xufVxuXG5mdW5jdGlvbiBpbml0TWluZWNyYWZ0KCkge1xuICBsZC5jcmVhdGVMYW5kc2NhcGUoKTtcblxuICBibG9ja3MgPSBuZXcgc3QuQmxvY2tzQXJyYXkoe1xuICAgIHN0b3JhZ2U6IHN0b3JhZ2UsXG4gICAgbWVzaGVzOiBtZXNoZXMsXG4gICAgYm9kaWVzOiBib2RpZXMsXG4gICAgd29ybGQ6IHdvcmxkLFxuICAgIHNjZW5lOiBzY2VuZSxcbiAgfSk7XG5cbiAgcGxheWVyID0gbmV3IFBMUi5QbGF5ZXIoeyBjYW1lcmE6IGNhbWVyYSwgcG9zaXRpb246IHsgeDogMSwgeTogMywgejogMSB9IH0pO1xuXG4gIGJvZGllcy5wdXNoKHBsYXllci5wbGF5ZXJCb2R5KTtcbiAgd29ybGQuYWRkQm9keShwbGF5ZXIucGxheWVyQm9keSk7XG4gIG1lc2hlcy5wdXNoKHBsYXllci5tZXNoKTtcbiAgc2NlbmUuYWRkKHBsYXllci5tZXNoKTtcbn1cbmZ1bmN0aW9uIHJlbmRlckluZm8oKSB7XG4gIGNvbnNvbGUubG9nKFwiU2NlbmUgcG9seWNvdW50OlwiLCByZW5kZXJlci5pbmZvLnJlbmRlci50cmlhbmdsZXMpO1xuICBjb25zb2xlLmxvZyhcIkFjdGl2ZSBEcmF3Y2FsbHM6XCIsIHJlbmRlcmVyLmluZm8ucmVuZGVyLmNhbGxzKTtcbiAgY29uc29sZS5sb2coXCJUZXh0dXJlcyBpbiBNZW1vcnlcIiwgcmVuZGVyZXIuaW5mby5tZW1vcnkudGV4dHVyZXMpO1xuICBjb25zb2xlLmxvZyhcIkdlb21ldHJpZXMgaW4gTWVtb3J5XCIsIHJlbmRlcmVyLmluZm8ubWVtb3J5Lmdlb21ldHJpZXMpO1xufVxuXG4vLyBTeW5jIHRoZSB0aHJlZS5qcyBtZXNoZXMgd2l0aCB0aGUgYm9kaWVzXG5mdW5jdGlvbiBzeW5jaHJvbmlzZWRCb2RpZXNNZXNoZXMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpICE9PSBtZXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBtZXNoZXNbaV0ucG9zaXRpb24uY29weShib2RpZXNbaV0ucG9zaXRpb24pO1xuICAgIG1lc2hlc1tpXS5xdWF0ZXJuaW9uLmNvcHkoYm9kaWVzW2ldLnF1YXRlcm5pb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIEdhbWVMb29wKCkge1xuICBzdGF0cy5iZWdpbigpO1xuICBjb25zdCBkZWx0YVRpbWUgPSBjbG9jay5nZXREZWx0YSgpO1xuXG4gIC8vdXBkYXRlIGdhbWVcbiAgcGxheWVyLnVwZGF0ZVBsYXllcigpO1xuXG4gIC8vIFN0ZXAgdGhlIHBoeXNpY3Mgd29ybGRcbiAgd29ybGQuZml4ZWRTdGVwKCk7XG4gIHN5bmNocm9uaXNlZEJvZGllc01lc2hlcygpO1xuXG4gIC8vIFJlbmRlciB0aHJlZS5qc1xuICAvL2Jsb2Nrcy5yZW5kZXJMaXN0LmZvckVhY2goKG1lc2gpID0+IHtcbiAgLy8gIHNjZW5lLmFkZChtZXNoKTtcbiAgLy99KTtcbiAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuXG4gIHN0YXRzLnVwZGF0ZSgpO1xuICBzdGF0cy5lbmQoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKEdhbWVMb29wKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLypcbiAgZXNsaW50LWRpc2FibGVcbiAgbm8tY29uc29sZSxcbiAgZnVuYy1uYW1lc1xuKi9cblxuLyoqIEB0eXBlZGVmIHthbnl9IFRPRE8gKi9cbnZhciBub3JtYWxpemVVcmwgPSByZXF1aXJlKFwiLi9ub3JtYWxpemUtdXJsXCIpO1xuXG52YXIgc3JjQnlNb2R1bGVJZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgbm9Eb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcbnZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICogQHJldHVybnMgeyhmdW5jdGlvbigpOiB2b2lkKXwqfVxuICovXG5cbmZ1bmN0aW9uIGRlYm91bmNlKGZuLCB0aW1lKSB7XG4gIHZhciB0aW1lb3V0ID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdmFyIHNlbGYgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG5cbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmdW5jdGlvbkNhbGwgPSBmdW5jdGlvbiBmdW5jdGlvbkNhbGwoKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTsgLy8gQHRzLWlnbm9yZVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb25DYWxsLCB0aW1lKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCkge1xuICB2YXIgc3JjID0gc3JjQnlNb2R1bGVJZFttb2R1bGVJZF07XG5cbiAgaWYgKCFzcmMpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgICAgc3JjID1cbiAgICAgIC8qKiBAdHlwZSB7SFRNTFNjcmlwdEVsZW1lbnR9ICovXG4gICAgICBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcbiAgICAgIHZhciBsYXN0U2NyaXB0VGFnID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdFNjcmlwdFRhZykge1xuICAgICAgICBzcmMgPSBsYXN0U2NyaXB0VGFnLnNyYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXSA9IHNyYztcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVNYXBcbiAgICogQHJldHVybnMge251bGwgfCBzdHJpbmdbXX1cbiAgICovXG5cblxuICByZXR1cm4gZnVuY3Rpb24gKGZpbGVNYXApIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHNwbGl0UmVzdWx0ID0gc3JjLnNwbGl0KC8oW15cXFxcL10rKVxcLmpzJC8pO1xuICAgIHZhciBmaWxlbmFtZSA9IHNwbGl0UmVzdWx0ICYmIHNwbGl0UmVzdWx0WzFdO1xuXG4gICAgaWYgKCFmaWxlbmFtZSkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cblxuICAgIGlmICghZmlsZU1hcCkge1xuICAgICAgcmV0dXJuIFtzcmMucmVwbGFjZShcIi5qc1wiLCBcIi5jc3NcIildO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlTWFwLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKG1hcFJ1bGUpIHtcbiAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGZpbGVuYW1lLCBcIlxcXFwuanMkXCIpLCBcImdcIik7XG4gICAgICByZXR1cm4gbm9ybWFsaXplVXJsKHNyYy5yZXBsYWNlKHJlZywgXCJcIi5jb25jYXQobWFwUnVsZS5yZXBsYWNlKC97ZmlsZU5hbWV9L2csIGZpbGVuYW1lKSwgXCIuY3NzXCIpKSk7XG4gICAgfSk7XG4gIH07XG59XG4vKipcbiAqIEBwYXJhbSB7VE9ET30gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXJsXVxuICovXG5cblxuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsLCB1cmwpIHtcbiAgaWYgKCF1cmwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgICB1cmwgPSBlbC5ocmVmLnNwbGl0KFwiP1wiKVswXTtcbiAgfVxuXG4gIGlmICghaXNVcmxSZXF1ZXN0KFxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgdXJsKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5pc0xvYWRlZCA9PT0gZmFsc2UpIHtcbiAgICAvLyBXZSBzZWVtIHRvIGJlIGFib3V0IHRvIHJlcGxhY2UgYSBjc3MgbGluayB0aGF0IGhhc24ndCBsb2FkZWQgeWV0LlxuICAgIC8vIFdlJ3JlIHByb2JhYmx5IGNoYW5naW5nIHRoZSBzYW1lIGZpbGUgbW9yZSB0aGFuIG9uY2UuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCF1cmwgfHwgISh1cmwuaW5kZXhPZihcIi5jc3NcIikgPiAtMSkpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICBlbC52aXNpdGVkID0gdHJ1ZTtcbiAgdmFyIG5ld0VsID0gZWwuY2xvbmVOb2RlKCk7XG4gIG5ld0VsLmlzTG9hZGVkID0gZmFsc2U7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXdFbC5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ld0VsLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgfSk7XG4gIG5ld0VsLmhyZWYgPSBcIlwiLmNvbmNhdCh1cmwsIFwiP1wiKS5jb25jYXQoRGF0ZS5ub3coKSk7XG5cbiAgaWYgKGVsLm5leHRTaWJsaW5nKSB7XG4gICAgZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWwsIGVsLm5leHRTaWJsaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBlbC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0VsKTtcbiAgfVxufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZlxuICogQHBhcmFtIHtUT0RPfSBzcmNcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0UmVsb2FkVXJsKGhyZWYsIHNyYykge1xuICB2YXIgcmV0OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuICBocmVmID0gbm9ybWFsaXplVXJsKGhyZWYpO1xuICBzcmMuc29tZShcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgZnVuY3Rpb24gKHVybCkge1xuICAgIGlmIChocmVmLmluZGV4T2Yoc3JjKSA+IC0xKSB7XG4gICAgICByZXQgPSB1cmw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzcmNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlbG9hZFN0eWxlKHNyYykge1xuICBpZiAoIXNyYykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICB2YXIgbG9hZGVkID0gZmFsc2U7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHVybCA9IGdldFJlbG9hZFVybChlbC5ocmVmLCBzcmMpO1xuXG4gICAgaWYgKCFpc1VybFJlcXVlc3QodXJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHVybCkge1xuICAgICAgdXBkYXRlQ3NzKGVsLCB1cmwpO1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbG9hZGVkO1xufVxuXG5mdW5jdGlvbiByZWxvYWRBbGwoKSB7XG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdXBkYXRlQ3NzKGVsKTtcbiAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cblxuZnVuY3Rpb24gaXNVcmxSZXF1ZXN0KHVybCkge1xuICAvLyBBbiBVUkwgaXMgbm90IGFuIHJlcXVlc3QgaWZcbiAgLy8gSXQgaXMgbm90IGh0dHAgb3IgaHR0cHNcbiAgaWYgKCEvXlthLXpBLVpdW2EtekEtWlxcZCtcXC0uXSo6Ly50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHBhcmFtIHtUT0RPfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBvcHRpb25zKSB7XG4gIGlmIChub0RvY3VtZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJubyB3aW5kb3cuZG9jdW1lbnQgZm91bmQsIHdpbGwgbm90IEhNUiBDU1NcIik7XG4gICAgcmV0dXJuIG5vb3A7XG4gIH1cblxuICB2YXIgZ2V0U2NyaXB0U3JjID0gZ2V0Q3VycmVudFNjcmlwdFVybChtb2R1bGVJZCk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBzcmMgPSBnZXRTY3JpcHRTcmMob3B0aW9ucy5maWxlbmFtZSk7XG4gICAgdmFyIHJlbG9hZGVkID0gcmVsb2FkU3R5bGUoc3JjKTtcblxuICAgIGlmIChvcHRpb25zLmxvY2Fscykge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBEZXRlY3RlZCBsb2NhbCBjc3MgbW9kdWxlcy4gUmVsb2FkIGFsbCBjc3NcIik7XG4gICAgICByZWxvYWRBbGwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVsb2FkZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gY3NzIHJlbG9hZCAlc1wiLCBzcmMuam9pbihcIiBcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlYm91bmNlKHVwZGF0ZSwgNTApO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXRoQ29tcG9uZW50c1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVXJsKHBhdGhDb21wb25lbnRzKSB7XG4gIHJldHVybiBwYXRoQ29tcG9uZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBpdGVtKSB7XG4gICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICBjYXNlIFwiLi5cIjpcbiAgICAgICAgYWNjdW11bGF0b3IucG9wKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiLlwiOlxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYWNjdW11bGF0b3IucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH0sXG4gIC8qKiBAdHlwZSB7c3RyaW5nW119ICovXG4gIFtdKS5qb2luKFwiL1wiKTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybFN0cmluZykge1xuICB1cmxTdHJpbmcgPSB1cmxTdHJpbmcudHJpbSgpO1xuXG4gIGlmICgvXmRhdGE6L2kudGVzdCh1cmxTdHJpbmcpKSB7XG4gICAgcmV0dXJuIHVybFN0cmluZztcbiAgfVxuXG4gIHZhciBwcm90b2NvbCA9IHVybFN0cmluZy5pbmRleE9mKFwiLy9cIikgIT09IC0xID8gdXJsU3RyaW5nLnNwbGl0KFwiLy9cIilbMF0gKyBcIi8vXCIgOiBcIlwiO1xuICB2YXIgY29tcG9uZW50cyA9IHVybFN0cmluZy5yZXBsYWNlKG5ldyBSZWdFeHAocHJvdG9jb2wsIFwiaVwiKSwgXCJcIikuc3BsaXQoXCIvXCIpO1xuICB2YXIgaG9zdCA9IGNvbXBvbmVudHNbMF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC4kLywgXCJcIik7XG4gIGNvbXBvbmVudHNbMF0gPSBcIlwiO1xuICB2YXIgcGF0aCA9IG5vcm1hbGl6ZVVybChjb21wb25lbnRzKTtcbiAgcmV0dXJuIHByb3RvY29sICsgaG9zdCArIHBhdGg7XG59OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NzI4NDA0MjI1MTJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiaW1wb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcbmxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICBsZXQgc3RlcCA9IC1+KCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5sZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5sZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT5cbiAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkucmVkdWNlKChpZCwgYnl0ZSkgPT4ge1xuICAgIGJ5dGUgJj0gNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICBpZCArPSBieXRlLnRvU3RyaW5nKDM2KVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYyKSB7XG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA+IDYyKSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJ18nXG4gICAgfVxuICAgIHJldHVybiBpZFxuICB9LCAnJylcbmV4cG9ydCB7IG5hbm9pZCwgY3VzdG9tQWxwaGFiZXQsIGN1c3RvbVJhbmRvbSwgdXJsQWxwaGFiZXQsIHJhbmRvbSB9XG4iLCJsZXQgdXJsQWxwaGFiZXQgPVxuICAndXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdCdcbmV4cG9ydCB7IHVybEFscGhhYmV0IH1cbiIsImltcG9ydCB7XG5cdEV1bGVyLFxuXHRFdmVudERpc3BhdGNoZXIsXG5cdFZlY3RvcjNcbn0gZnJvbSAndGhyZWUnO1xuXG5jb25zdCBfZXVsZXIgPSBuZXcgRXVsZXIoIDAsIDAsIDAsICdZWFonICk7XG5jb25zdCBfdmVjdG9yID0gbmV3IFZlY3RvcjMoKTtcblxuY29uc3QgX2NoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuY29uc3QgX2xvY2tFdmVudCA9IHsgdHlwZTogJ2xvY2snIH07XG5jb25zdCBfdW5sb2NrRXZlbnQgPSB7IHR5cGU6ICd1bmxvY2snIH07XG5cbmNvbnN0IF9QSV8yID0gTWF0aC5QSSAvIDI7XG5cbmNsYXNzIFBvaW50ZXJMb2NrQ29udHJvbHMgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKCBjYW1lcmEsIGRvbUVsZW1lbnQgKSB7XG5cblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblx0XHR0aGlzLmlzTG9ja2VkID0gZmFsc2U7XG5cblx0XHQvLyBTZXQgdG8gY29uc3RyYWluIHRoZSBwaXRjaCBvZiB0aGUgY2FtZXJhXG5cdFx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnNcblx0XHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdFx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdFx0dGhpcy5wb2ludGVyU3BlZWQgPSAxLjA7XG5cblx0XHRjb25zdCBzY29wZSA9IHRoaXM7XG5cblx0XHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuaXNMb2NrZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRjb25zdCBtb3ZlbWVudFggPSBldmVudC5tb3ZlbWVudFggfHwgZXZlbnQubW96TW92ZW1lbnRYIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WCB8fCAwO1xuXHRcdFx0Y29uc3QgbW92ZW1lbnRZID0gZXZlbnQubW92ZW1lbnRZIHx8IGV2ZW50Lm1vek1vdmVtZW50WSB8fCBldmVudC53ZWJraXRNb3ZlbWVudFkgfHwgMDtcblxuXHRcdFx0X2V1bGVyLnNldEZyb21RdWF0ZXJuaW9uKCBjYW1lcmEucXVhdGVybmlvbiApO1xuXG5cdFx0XHRfZXVsZXIueSAtPSBtb3ZlbWVudFggKiAwLjAwMiAqIHNjb3BlLnBvaW50ZXJTcGVlZDtcblx0XHRcdF9ldWxlci54IC09IG1vdmVtZW50WSAqIDAuMDAyICogc2NvcGUucG9pbnRlclNwZWVkO1xuXG5cdFx0XHRfZXVsZXIueCA9IE1hdGgubWF4KCBfUElfMiAtIHNjb3BlLm1heFBvbGFyQW5nbGUsIE1hdGgubWluKCBfUElfMiAtIHNjb3BlLm1pblBvbGFyQW5nbGUsIF9ldWxlci54ICkgKTtcblxuXHRcdFx0Y2FtZXJhLnF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKCBfZXVsZXIgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2NoYW5nZUV2ZW50ICk7XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJsb2NrQ2hhbmdlKCkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5wb2ludGVyTG9ja0VsZW1lbnQgPT09IHNjb3BlLmRvbUVsZW1lbnQgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX2xvY2tFdmVudCApO1xuXG5cdFx0XHRcdHNjb3BlLmlzTG9ja2VkID0gdHJ1ZTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBfdW5sb2NrRXZlbnQgKTtcblxuXHRcdFx0XHRzY29wZS5pc0xvY2tlZCA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblBvaW50ZXJsb2NrRXJyb3IoKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5Qb2ludGVyTG9ja0NvbnRyb2xzOiBVbmFibGUgdG8gdXNlIFBvaW50ZXIgTG9jayBBUEknICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tjaGFuZ2UnLCBvblBvaW50ZXJsb2NrQ2hhbmdlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrZXJyb3InLCBvblBvaW50ZXJsb2NrRXJyb3IgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUgKTtcblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmxvY2tjaGFuZ2UnLCBvblBvaW50ZXJsb2NrQ2hhbmdlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrZXJyb3InLCBvblBvaW50ZXJsb2NrRXJyb3IgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHRoaXMuZGlzY29ubmVjdCgpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuZ2V0T2JqZWN0ID0gZnVuY3Rpb24gKCkgeyAvLyByZXRhaW5pbmcgdGhpcyBtZXRob2QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRcdFx0cmV0dXJuIGNhbWVyYTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldERpcmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoIDAsIDAsIC0gMSApO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0XHRcdHJldHVybiB2LmNvcHkoIGRpcmVjdGlvbiApLmFwcGx5UXVhdGVybmlvbiggY2FtZXJhLnF1YXRlcm5pb24gKTtcblxuXHRcdFx0fTtcblxuXHRcdH0oKTtcblxuXHRcdHRoaXMubW92ZUZvcndhcmQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG5cdFx0XHQvLyBtb3ZlIGZvcndhcmQgcGFyYWxsZWwgdG8gdGhlIHh6LXBsYW5lXG5cdFx0XHQvLyBhc3N1bWVzIGNhbWVyYS51cCBpcyB5LXVwXG5cblx0XHRcdF92ZWN0b3Iuc2V0RnJvbU1hdHJpeENvbHVtbiggY2FtZXJhLm1hdHJpeCwgMCApO1xuXG5cdFx0XHRfdmVjdG9yLmNyb3NzVmVjdG9ycyggY2FtZXJhLnVwLCBfdmVjdG9yICk7XG5cblx0XHRcdGNhbWVyYS5wb3NpdGlvbi5hZGRTY2FsZWRWZWN0b3IoIF92ZWN0b3IsIGRpc3RhbmNlICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5tb3ZlUmlnaHQgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG5cdFx0XHRfdmVjdG9yLnNldEZyb21NYXRyaXhDb2x1bW4oIGNhbWVyYS5tYXRyaXgsIDAgKTtcblxuXHRcdFx0Y2FtZXJhLnBvc2l0aW9uLmFkZFNjYWxlZFZlY3RvciggX3ZlY3RvciwgZGlzdGFuY2UgKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmxvY2sgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHRoaXMuZG9tRWxlbWVudC5yZXF1ZXN0UG9pbnRlckxvY2soKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLnVubG9jayA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMuY29ubmVjdCgpO1xuXG5cdH1cblxufVxuXG5leHBvcnQgeyBQb2ludGVyTG9ja0NvbnRyb2xzIH07XG4iLCIvKipcbiAqIGxpbC1ndWlcbiAqIGh0dHBzOi8vbGlsLWd1aS5nZW9yZ2VhbHdheXMuY29tXG4gKiBAdmVyc2lvbiAwLjE2LjBcbiAqIEBhdXRob3IgR2VvcmdlIE1pY2hhZWwgQnJvd2VyXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuY2xhc3MgdHtjb25zdHJ1Y3RvcihpLGUscyxuLHI9XCJkaXZcIil7dGhpcy5wYXJlbnQ9aSx0aGlzLm9iamVjdD1lLHRoaXMucHJvcGVydHk9cyx0aGlzLl9kaXNhYmxlZD0hMSx0aGlzLmluaXRpYWxWYWx1ZT10aGlzLmdldFZhbHVlKCksdGhpcy5kb21FbGVtZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb250cm9sbGVyXCIpLHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKG4pLHRoaXMuJG5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLiRuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpLHQubmV4dE5hbWVJRD10Lm5leHROYW1lSUR8fDAsdGhpcy4kbmFtZS5pZD1cImxpbC1ndWktbmFtZS1cIisgKyt0Lm5leHROYW1lSUQsdGhpcy4kd2lkZ2V0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQociksdGhpcy4kd2lkZ2V0LmNsYXNzTGlzdC5hZGQoXCJ3aWRnZXRcIiksdGhpcy4kZGlzYWJsZT10aGlzLiR3aWRnZXQsdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJG5hbWUpLHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiR3aWRnZXQpLHRoaXMucGFyZW50LmNoaWxkcmVuLnB1c2godGhpcyksdGhpcy5wYXJlbnQuY29udHJvbGxlcnMucHVzaCh0aGlzKSx0aGlzLnBhcmVudC4kY2hpbGRyZW4uYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KSx0aGlzLl9saXN0ZW5DYWxsYmFjaz10aGlzLl9saXN0ZW5DYWxsYmFjay5iaW5kKHRoaXMpLHRoaXMubmFtZShzKX1uYW1lKHQpe3JldHVybiB0aGlzLl9uYW1lPXQsdGhpcy4kbmFtZS5pbm5lckhUTUw9dCx0aGlzfW9uQ2hhbmdlKHQpe3JldHVybiB0aGlzLl9vbkNoYW5nZT10LHRoaXN9X2NhbGxPbkNoYW5nZSgpe3RoaXMucGFyZW50Ll9jYWxsT25DaGFuZ2UodGhpcyksdm9pZCAwIT09dGhpcy5fb25DaGFuZ2UmJnRoaXMuX29uQ2hhbmdlLmNhbGwodGhpcyx0aGlzLmdldFZhbHVlKCkpLHRoaXMuX2NoYW5nZWQ9ITB9b25GaW5pc2hDaGFuZ2UodCl7cmV0dXJuIHRoaXMuX29uRmluaXNoQ2hhbmdlPXQsdGhpc31fY2FsbE9uRmluaXNoQ2hhbmdlKCl7dGhpcy5fY2hhbmdlZCYmKHRoaXMucGFyZW50Ll9jYWxsT25GaW5pc2hDaGFuZ2UodGhpcyksdm9pZCAwIT09dGhpcy5fb25GaW5pc2hDaGFuZ2UmJnRoaXMuX29uRmluaXNoQ2hhbmdlLmNhbGwodGhpcyx0aGlzLmdldFZhbHVlKCkpKSx0aGlzLl9jaGFuZ2VkPSExfXJlc2V0KCl7cmV0dXJuIHRoaXMuc2V0VmFsdWUodGhpcy5pbml0aWFsVmFsdWUpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpLHRoaXN9ZW5hYmxlKHQ9ITApe3JldHVybiB0aGlzLmRpc2FibGUoIXQpfWRpc2FibGUodD0hMCl7cmV0dXJuIHQ9PT10aGlzLl9kaXNhYmxlZHx8KHRoaXMuX2Rpc2FibGVkPXQsdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJkaXNhYmxlZFwiLHQpLHRoaXMuJGRpc2FibGUudG9nZ2xlQXR0cmlidXRlKFwiZGlzYWJsZWRcIix0KSksdGhpc31vcHRpb25zKHQpe2NvbnN0IGk9dGhpcy5wYXJlbnQuYWRkKHRoaXMub2JqZWN0LHRoaXMucHJvcGVydHksdCk7cmV0dXJuIGkubmFtZSh0aGlzLl9uYW1lKSx0aGlzLmRlc3Ryb3koKSxpfW1pbih0KXtyZXR1cm4gdGhpc31tYXgodCl7cmV0dXJuIHRoaXN9c3RlcCh0KXtyZXR1cm4gdGhpc31saXN0ZW4odD0hMCl7cmV0dXJuIHRoaXMuX2xpc3RlbmluZz10LHZvaWQgMCE9PXRoaXMuX2xpc3RlbkNhbGxiYWNrSUQmJihjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9saXN0ZW5DYWxsYmFja0lEKSx0aGlzLl9saXN0ZW5DYWxsYmFja0lEPXZvaWQgMCksdGhpcy5fbGlzdGVuaW5nJiZ0aGlzLl9saXN0ZW5DYWxsYmFjaygpLHRoaXN9X2xpc3RlbkNhbGxiYWNrKCl7dGhpcy5fbGlzdGVuQ2FsbGJhY2tJRD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fbGlzdGVuQ2FsbGJhY2spLHRoaXMudXBkYXRlRGlzcGxheSgpfWdldFZhbHVlKCl7cmV0dXJuIHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldfXNldFZhbHVlKHQpe3JldHVybiB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XT10LHRoaXMuX2NhbGxPbkNoYW5nZSgpLHRoaXMudXBkYXRlRGlzcGxheSgpLHRoaXN9dXBkYXRlRGlzcGxheSgpe3JldHVybiB0aGlzfWxvYWQodCl7cmV0dXJuIHRoaXMuc2V0VmFsdWUodCksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCksdGhpc31zYXZlKCl7cmV0dXJuIHRoaXMuZ2V0VmFsdWUoKX1kZXN0cm95KCl7dGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyksMSksdGhpcy5wYXJlbnQuY29udHJvbGxlcnMuc3BsaWNlKHRoaXMucGFyZW50LmNvbnRyb2xsZXJzLmluZGV4T2YodGhpcyksMSksdGhpcy5wYXJlbnQuJGNoaWxkcmVuLnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCl9fWNsYXNzIGkgZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKHQsaSxlKXtzdXBlcih0LGksZSxcImJvb2xlYW5cIixcImxhYmVsXCIpLHRoaXMuJGlucHV0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJjaGVja2JveFwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIix0aGlzLiRuYW1lLmlkKSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kaW5wdXQpLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwoKT0+e3RoaXMuc2V0VmFsdWUodGhpcy4kaW5wdXQuY2hlY2tlZCksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCl9KSx0aGlzLiRkaXNhYmxlPXRoaXMuJGlucHV0LHRoaXMudXBkYXRlRGlzcGxheSgpfXVwZGF0ZURpc3BsYXkoKXtyZXR1cm4gdGhpcy4kaW5wdXQuY2hlY2tlZD10aGlzLmdldFZhbHVlKCksdGhpc319ZnVuY3Rpb24gZSh0KXtsZXQgaSxlO3JldHVybihpPXQubWF0Y2goLygjfDB4KT8oW2EtZjAtOV17Nn0pL2kpKT9lPWlbMl06KGk9dC5tYXRjaCgvcmdiXFwoXFxzKihcXGQqKVxccyosXFxzKihcXGQqKVxccyosXFxzKihcXGQqKVxccypcXCkvKSk/ZT1wYXJzZUludChpWzFdKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwwKStwYXJzZUludChpWzJdKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwwKStwYXJzZUludChpWzNdKS50b1N0cmluZygxNikucGFkU3RhcnQoMiwwKTooaT10Lm1hdGNoKC9eIz8oW2EtZjAtOV0pKFthLWYwLTldKShbYS1mMC05XSkkL2kpKSYmKGU9aVsxXStpWzFdK2lbMl0raVsyXStpWzNdK2lbM10pLCEhZSYmXCIjXCIrZX1jb25zdCBzPXtpc1ByaW1pdGl2ZTohMCxtYXRjaDp0PT5cInN0cmluZ1wiPT10eXBlb2YgdCxmcm9tSGV4U3RyaW5nOmUsdG9IZXhTdHJpbmc6ZX0sbj17aXNQcmltaXRpdmU6ITAsbWF0Y2g6dD0+XCJudW1iZXJcIj09dHlwZW9mIHQsZnJvbUhleFN0cmluZzp0PT5wYXJzZUludCh0LnN1YnN0cmluZygxKSwxNiksdG9IZXhTdHJpbmc6dD0+XCIjXCIrdC50b1N0cmluZygxNikucGFkU3RhcnQoNiwwKX0scj17aXNQcmltaXRpdmU6ITEsbWF0Y2g6QXJyYXkuaXNBcnJheSxmcm9tSGV4U3RyaW5nKHQsaSxlPTEpe2NvbnN0IHM9bi5mcm9tSGV4U3RyaW5nKHQpO2lbMF09KHM+PjE2JjI1NSkvMjU1KmUsaVsxXT0ocz4+OCYyNTUpLzI1NSplLGlbMl09KDI1NSZzKS8yNTUqZX0sdG9IZXhTdHJpbmc6KFt0LGksZV0scz0xKT0+bi50b0hleFN0cmluZyh0KihzPTI1NS9zKTw8MTZeaSpzPDw4XmUqczw8MCl9LGw9e2lzUHJpbWl0aXZlOiExLG1hdGNoOnQ9Pk9iamVjdCh0KT09PXQsZnJvbUhleFN0cmluZyh0LGksZT0xKXtjb25zdCBzPW4uZnJvbUhleFN0cmluZyh0KTtpLnI9KHM+PjE2JjI1NSkvMjU1KmUsaS5nPShzPj44JjI1NSkvMjU1KmUsaS5iPSgyNTUmcykvMjU1KmV9LHRvSGV4U3RyaW5nOih7cjp0LGc6aSxiOmV9LHM9MSk9Pm4udG9IZXhTdHJpbmcodCoocz0yNTUvcyk8PDE2Xmkqczw8OF5lKnM8PDApfSxvPVtzLG4scixsXTtjbGFzcyBhIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcih0LGkscyxuKXt2YXIgcjtzdXBlcih0LGkscyxcImNvbG9yXCIpLHRoaXMuJGlucHV0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJjb2xvclwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLC0xKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIix0aGlzLiRuYW1lLmlkKSx0aGlzLiR0ZXh0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSx0aGlzLiR0ZXh0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIiksdGhpcy4kdGV4dC5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsXCJmYWxzZVwiKSx0aGlzLiR0ZXh0LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLHRoaXMuJG5hbWUuaWQpLHRoaXMuJGRpc3BsYXk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLiRkaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpLHRoaXMuJGRpc3BsYXkuYXBwZW5kQ2hpbGQodGhpcy4kaW5wdXQpLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiRkaXNwbGF5KSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kdGV4dCksdGhpcy5fZm9ybWF0PShyPXRoaXMuaW5pdGlhbFZhbHVlLG8uZmluZCh0PT50Lm1hdGNoKHIpKSksdGhpcy5fcmdiU2NhbGU9bix0aGlzLl9pbml0aWFsVmFsdWVIZXhTdHJpbmc9dGhpcy5zYXZlKCksdGhpcy5fdGV4dEZvY3VzZWQ9ITEsdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsKCk9Pnt0aGlzLl9zZXRWYWx1ZUZyb21IZXhTdHJpbmcodGhpcy4kaW5wdXQudmFsdWUpfSksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoKT0+e3RoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpfSksdGhpcy4kdGV4dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwoKT0+e2NvbnN0IHQ9ZSh0aGlzLiR0ZXh0LnZhbHVlKTt0JiZ0aGlzLl9zZXRWYWx1ZUZyb21IZXhTdHJpbmcodCl9KSx0aGlzLiR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCgpPT57dGhpcy5fdGV4dEZvY3VzZWQ9ITAsdGhpcy4kdGV4dC5zZWxlY3QoKX0pLHRoaXMuJHRleHQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoKT0+e3RoaXMuX3RleHRGb2N1c2VkPSExLHRoaXMudXBkYXRlRGlzcGxheSgpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpfSksdGhpcy4kZGlzYWJsZT10aGlzLiR0ZXh0LHRoaXMudXBkYXRlRGlzcGxheSgpfXJlc2V0KCl7cmV0dXJuIHRoaXMuX3NldFZhbHVlRnJvbUhleFN0cmluZyh0aGlzLl9pbml0aWFsVmFsdWVIZXhTdHJpbmcpLHRoaXN9X3NldFZhbHVlRnJvbUhleFN0cmluZyh0KXtpZih0aGlzLl9mb3JtYXQuaXNQcmltaXRpdmUpe2NvbnN0IGk9dGhpcy5fZm9ybWF0LmZyb21IZXhTdHJpbmcodCk7dGhpcy5zZXRWYWx1ZShpKX1lbHNlIHRoaXMuX2Zvcm1hdC5mcm9tSGV4U3RyaW5nKHQsdGhpcy5nZXRWYWx1ZSgpLHRoaXMuX3JnYlNjYWxlKSx0aGlzLl9jYWxsT25DaGFuZ2UoKSx0aGlzLnVwZGF0ZURpc3BsYXkoKX1zYXZlKCl7cmV0dXJuIHRoaXMuX2Zvcm1hdC50b0hleFN0cmluZyh0aGlzLmdldFZhbHVlKCksdGhpcy5fcmdiU2NhbGUpfWxvYWQodCl7cmV0dXJuIHRoaXMuX3NldFZhbHVlRnJvbUhleFN0cmluZyh0KSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKSx0aGlzfXVwZGF0ZURpc3BsYXkoKXtyZXR1cm4gdGhpcy4kaW5wdXQudmFsdWU9dGhpcy5fZm9ybWF0LnRvSGV4U3RyaW5nKHRoaXMuZ2V0VmFsdWUoKSx0aGlzLl9yZ2JTY2FsZSksdGhpcy5fdGV4dEZvY3VzZWR8fCh0aGlzLiR0ZXh0LnZhbHVlPXRoaXMuJGlucHV0LnZhbHVlLnN1YnN0cmluZygxKSksdGhpcy4kZGlzcGxheS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9dGhpcy4kaW5wdXQudmFsdWUsdGhpc319Y2xhc3MgaCBleHRlbmRzIHR7Y29uc3RydWN0b3IodCxpLGUpe3N1cGVyKHQsaSxlLFwiZnVuY3Rpb25cIiksdGhpcy4kYnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksdGhpcy4kYnV0dG9uLmFwcGVuZENoaWxkKHRoaXMuJG5hbWUpLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiRidXR0b24pLHRoaXMuJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0PT57dC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuZ2V0VmFsdWUoKS5jYWxsKHRoaXMub2JqZWN0KX0pLHRoaXMuJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCgpPT57fSksdGhpcy4kZGlzYWJsZT10aGlzLiRidXR0b259fWNsYXNzIGQgZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKHQsaSxlLHMsbixyKXtzdXBlcih0LGksZSxcIm51bWJlclwiKSx0aGlzLl9pbml0SW5wdXQoKSx0aGlzLm1pbihzKSx0aGlzLm1heChuKTtjb25zdCBsPXZvaWQgMCE9PXI7dGhpcy5zdGVwKGw/cjp0aGlzLl9nZXRJbXBsaWNpdFN0ZXAoKSxsKSx0aGlzLnVwZGF0ZURpc3BsYXkoKX1taW4odCl7cmV0dXJuIHRoaXMuX21pbj10LHRoaXMuX29uVXBkYXRlTWluTWF4KCksdGhpc31tYXgodCl7cmV0dXJuIHRoaXMuX21heD10LHRoaXMuX29uVXBkYXRlTWluTWF4KCksdGhpc31zdGVwKHQsaT0hMCl7cmV0dXJuIHRoaXMuX3N0ZXA9dCx0aGlzLl9zdGVwRXhwbGljaXQ9aSx0aGlzfXVwZGF0ZURpc3BsYXkoKXtjb25zdCB0PXRoaXMuZ2V0VmFsdWUoKTtpZih0aGlzLl9oYXNTbGlkZXIpe2xldCBpPSh0LXRoaXMuX21pbikvKHRoaXMuX21heC10aGlzLl9taW4pO2k9TWF0aC5tYXgoMCxNYXRoLm1pbihpLDEpKSx0aGlzLiRmaWxsLnN0eWxlLndpZHRoPTEwMCppK1wiJVwifXJldHVybiB0aGlzLl9pbnB1dEZvY3VzZWR8fCh0aGlzLiRpbnB1dC52YWx1ZT10KSx0aGlzfV9pbml0SW5wdXQoKXt0aGlzLiRpbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwibnVtYmVyXCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcInN0ZXBcIixcImFueVwiKSx0aGlzLiRpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIix0aGlzLiRuYW1lLmlkKSx0aGlzLiR3aWRnZXQuYXBwZW5kQ2hpbGQodGhpcy4kaW5wdXQpLHRoaXMuJGRpc2FibGU9dGhpcy4kaW5wdXQ7Y29uc3QgdD10PT57Y29uc3QgaT1wYXJzZUZsb2F0KHRoaXMuJGlucHV0LnZhbHVlKTtpc05hTihpKXx8KHRoaXMuX3NuYXBDbGFtcFNldFZhbHVlKGkrdCksdGhpcy4kaW5wdXQudmFsdWU9dGhpcy5nZXRWYWx1ZSgpKX07bGV0IGksZSxzLG4scixsPSExO2NvbnN0IG89dD0+e2lmKGwpe2NvbnN0IHM9dC5jbGllbnRYLWksbj10LmNsaWVudFktZTtNYXRoLmFicyhuKT41Pyh0LnByZXZlbnREZWZhdWx0KCksdGhpcy4kaW5wdXQuYmx1cigpLGw9ITEsdGhpcy5fc2V0RHJhZ2dpbmdTdHlsZSghMCxcInZlcnRpY2FsXCIpKTpNYXRoLmFicyhzKT41JiZhKCl9aWYoIWwpe2NvbnN0IGk9dC5jbGllbnRZLXM7ci09aSp0aGlzLl9zdGVwKnRoaXMuX2Fycm93S2V5TXVsdGlwbGllcih0KSxuK3I+dGhpcy5fbWF4P3I9dGhpcy5fbWF4LW46bityPHRoaXMuX21pbiYmKHI9dGhpcy5fbWluLW4pLHRoaXMuX3NuYXBDbGFtcFNldFZhbHVlKG4rcil9cz10LmNsaWVudFl9LGE9KCk9Pnt0aGlzLl9zZXREcmFnZ2luZ1N0eWxlKCExLFwidmVydGljYWxcIiksdGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixvKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixhKX07dGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsKCk9Pntjb25zdCB0PXBhcnNlRmxvYXQodGhpcy4kaW5wdXQudmFsdWUpO2lzTmFOKHQpfHx0aGlzLnNldFZhbHVlKHRoaXMuX2NsYW1wKHQpKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsaT0+e1wiRW50ZXJcIj09PWkuY29kZSYmdGhpcy4kaW5wdXQuYmx1cigpLFwiQXJyb3dVcFwiPT09aS5jb2RlJiYoaS5wcmV2ZW50RGVmYXVsdCgpLHQodGhpcy5fc3RlcCp0aGlzLl9hcnJvd0tleU11bHRpcGxpZXIoaSkpKSxcIkFycm93RG93blwiPT09aS5jb2RlJiYoaS5wcmV2ZW50RGVmYXVsdCgpLHQodGhpcy5fc3RlcCp0aGlzLl9hcnJvd0tleU11bHRpcGxpZXIoaSkqLTEpKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLGk9Pnt0aGlzLl9pbnB1dEZvY3VzZWQmJihpLnByZXZlbnREZWZhdWx0KCksdCh0aGlzLl9zdGVwKnRoaXMuX25vcm1hbGl6ZU1vdXNlV2hlZWwoaSkpKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIix0PT57aT10LmNsaWVudFgsZT1zPXQuY2xpZW50WSxsPSEwLG49dGhpcy5nZXRWYWx1ZSgpLHI9MCx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLG8pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGEpfSksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsKCk9Pnt0aGlzLl9pbnB1dEZvY3VzZWQ9ITB9KSx0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCgpPT57dGhpcy5faW5wdXRGb2N1c2VkPSExLHRoaXMudXBkYXRlRGlzcGxheSgpLHRoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpfSl9X2luaXRTbGlkZXIoKXt0aGlzLl9oYXNTbGlkZXI9ITAsdGhpcy4kc2xpZGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy4kc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIiksdGhpcy4kZmlsbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuJGZpbGwuY2xhc3NMaXN0LmFkZChcImZpbGxcIiksdGhpcy4kc2xpZGVyLmFwcGVuZENoaWxkKHRoaXMuJGZpbGwpLHRoaXMuJHdpZGdldC5pbnNlcnRCZWZvcmUodGhpcy4kc2xpZGVyLHRoaXMuJGlucHV0KSx0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhhc1NsaWRlclwiKTtjb25zdCB0PXQ9Pntjb25zdCBpPXRoaXMuJHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtsZXQgZT0ocz10LG49aS5sZWZ0LHI9aS5yaWdodCxsPXRoaXMuX21pbixvPXRoaXMuX21heCwocy1uKS8oci1uKSooby1sKStsKTt2YXIgcyxuLHIsbCxvO3RoaXMuX3NuYXBDbGFtcFNldFZhbHVlKGUpfSxpPWk9Pnt0KGkuY2xpZW50WCl9LGU9KCk9Pnt0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKSx0aGlzLl9zZXREcmFnZ2luZ1N0eWxlKCExKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLGkpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLGUpfTtsZXQgcyxuLHI9ITE7Y29uc3QgbD1pPT57aS5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuX3NldERyYWdnaW5nU3R5bGUoITApLHQoaS50b3VjaGVzWzBdLmNsaWVudFgpLHI9ITF9LG89aT0+e2lmKHIpe2NvbnN0IHQ9aS50b3VjaGVzWzBdLmNsaWVudFgtcyxlPWkudG91Y2hlc1swXS5jbGllbnRZLW47TWF0aC5hYnModCk+TWF0aC5hYnMoZSk/bChpKTood2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixvKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsYSkpfWVsc2UgaS5wcmV2ZW50RGVmYXVsdCgpLHQoaS50b3VjaGVzWzBdLmNsaWVudFgpfSxhPSgpPT57dGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlKCksdGhpcy5fc2V0RHJhZ2dpbmdTdHlsZSghMSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixvKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsYSl9LGg9dGhpcy5fY2FsbE9uRmluaXNoQ2hhbmdlLmJpbmQodGhpcyk7bGV0IGQ7dGhpcy4kc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixzPT57dGhpcy5fc2V0RHJhZ2dpbmdTdHlsZSghMCksdChzLmNsaWVudFgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsaSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsZSl9KSx0aGlzLiRzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0PT57dC50b3VjaGVzLmxlbmd0aD4xfHwodGhpcy5faGFzU2Nyb2xsQmFyPyhzPXQudG91Y2hlc1swXS5jbGllbnRYLG49dC50b3VjaGVzWzBdLmNsaWVudFkscj0hMCk6bCh0KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLG8pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixhKSl9KSx0aGlzLiRzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsdD0+e2lmKE1hdGguYWJzKHQuZGVsdGFYKTxNYXRoLmFicyh0LmRlbHRhWSkmJnRoaXMuX2hhc1Njcm9sbEJhcilyZXR1cm47dC5wcmV2ZW50RGVmYXVsdCgpO2NvbnN0IGk9dGhpcy5fbm9ybWFsaXplTW91c2VXaGVlbCh0KSp0aGlzLl9zdGVwO3RoaXMuX3NuYXBDbGFtcFNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKStpKSx0aGlzLiRpbnB1dC52YWx1ZT10aGlzLmdldFZhbHVlKCksY2xlYXJUaW1lb3V0KGQpLGQ9c2V0VGltZW91dChoLDQwMCl9KX1fc2V0RHJhZ2dpbmdTdHlsZSh0LGk9XCJob3Jpem9udGFsXCIpe3RoaXMuJHNsaWRlciYmdGhpcy4kc2xpZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIix0KSxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsaWwtZ3VpLWRyYWdnaW5nXCIsdCksZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibGlsLWd1aS1cIitpLHQpfV9nZXRJbXBsaWNpdFN0ZXAoKXtyZXR1cm4gdGhpcy5faGFzTWluJiZ0aGlzLl9oYXNNYXg/KHRoaXMuX21heC10aGlzLl9taW4pLzFlMzouMX1fb25VcGRhdGVNaW5NYXgoKXshdGhpcy5faGFzU2xpZGVyJiZ0aGlzLl9oYXNNaW4mJnRoaXMuX2hhc01heCYmKHRoaXMuX3N0ZXBFeHBsaWNpdHx8dGhpcy5zdGVwKHRoaXMuX2dldEltcGxpY2l0U3RlcCgpLCExKSx0aGlzLl9pbml0U2xpZGVyKCksdGhpcy51cGRhdGVEaXNwbGF5KCkpfV9ub3JtYWxpemVNb3VzZVdoZWVsKHQpe2xldHtkZWx0YVg6aSxkZWx0YVk6ZX09dDtNYXRoLmZsb29yKHQuZGVsdGFZKSE9PXQuZGVsdGFZJiZ0LndoZWVsRGVsdGEmJihpPTAsZT0tdC53aGVlbERlbHRhLzEyMCxlKj10aGlzLl9zdGVwRXhwbGljaXQ/MToxMCk7cmV0dXJuIGkrLWV9X2Fycm93S2V5TXVsdGlwbGllcih0KXtsZXQgaT10aGlzLl9zdGVwRXhwbGljaXQ/MToxMDtyZXR1cm4gdC5zaGlmdEtleT9pKj0xMDp0LmFsdEtleSYmKGkvPTEwKSxpfV9zbmFwKHQpe2NvbnN0IGk9TWF0aC5yb3VuZCh0L3RoaXMuX3N0ZXApKnRoaXMuX3N0ZXA7cmV0dXJuIHBhcnNlRmxvYXQoaS50b1ByZWNpc2lvbigxNSkpfV9jbGFtcCh0KXtyZXR1cm4gdDx0aGlzLl9taW4mJih0PXRoaXMuX21pbiksdD50aGlzLl9tYXgmJih0PXRoaXMuX21heCksdH1fc25hcENsYW1wU2V0VmFsdWUodCl7dGhpcy5zZXRWYWx1ZSh0aGlzLl9jbGFtcCh0aGlzLl9zbmFwKHQpKSl9Z2V0IF9oYXNTY3JvbGxCYXIoKXtjb25zdCB0PXRoaXMucGFyZW50LnJvb3QuJGNoaWxkcmVuO3JldHVybiB0LnNjcm9sbEhlaWdodD50LmNsaWVudEhlaWdodH1nZXQgX2hhc01pbigpe3JldHVybiB2b2lkIDAhPT10aGlzLl9taW59Z2V0IF9oYXNNYXgoKXtyZXR1cm4gdm9pZCAwIT09dGhpcy5fbWF4fX1jbGFzcyBjIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcih0LGksZSxzKXtzdXBlcih0LGksZSxcIm9wdGlvblwiKSx0aGlzLiRzZWxlY3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSx0aGlzLiRzZWxlY3Quc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsdGhpcy4kbmFtZS5pZCksdGhpcy4kZGlzcGxheT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuJGRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIiksdGhpcy5fdmFsdWVzPUFycmF5LmlzQXJyYXkocyk/czpPYmplY3QudmFsdWVzKHMpLHRoaXMuX25hbWVzPUFycmF5LmlzQXJyYXkocyk/czpPYmplY3Qua2V5cyhzKSx0aGlzLl9uYW1lcy5mb3JFYWNoKHQ9Pntjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7aS5pbm5lckhUTUw9dCx0aGlzLiRzZWxlY3QuYXBwZW5kQ2hpbGQoaSl9KSx0aGlzLiRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCgpPT57dGhpcy5zZXRWYWx1ZSh0aGlzLl92YWx1ZXNbdGhpcy4kc2VsZWN0LnNlbGVjdGVkSW5kZXhdKSx0aGlzLl9jYWxsT25GaW5pc2hDaGFuZ2UoKX0pLHRoaXMuJHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwoKT0+e3RoaXMuJGRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImZvY3VzXCIpfSksdGhpcy4kc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsKCk9Pnt0aGlzLiRkaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJmb2N1c1wiKX0pLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiRzZWxlY3QpLHRoaXMuJHdpZGdldC5hcHBlbmRDaGlsZCh0aGlzLiRkaXNwbGF5KSx0aGlzLiRkaXNhYmxlPXRoaXMuJHNlbGVjdCx0aGlzLnVwZGF0ZURpc3BsYXkoKX11cGRhdGVEaXNwbGF5KCl7Y29uc3QgdD10aGlzLmdldFZhbHVlKCksaT10aGlzLl92YWx1ZXMuaW5kZXhPZih0KTtyZXR1cm4gdGhpcy4kc2VsZWN0LnNlbGVjdGVkSW5kZXg9aSx0aGlzLiRkaXNwbGF5LmlubmVySFRNTD0tMT09PWk/dDp0aGlzLl9uYW1lc1tpXSx0aGlzfX1jbGFzcyB1IGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcih0LGksZSl7c3VwZXIodCxpLGUsXCJzdHJpbmdcIiksdGhpcy4kaW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLHRoaXMuJGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIiksdGhpcy4kaW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIsdGhpcy4kbmFtZS5pZCksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsKCk9Pnt0aGlzLnNldFZhbHVlKHRoaXMuJGlucHV0LnZhbHVlKX0pLHRoaXMuJGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdD0+e1wiRW50ZXJcIj09PXQuY29kZSYmdGhpcy4kaW5wdXQuYmx1cigpfSksdGhpcy4kaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoKT0+e3RoaXMuX2NhbGxPbkZpbmlzaENoYW5nZSgpfSksdGhpcy4kd2lkZ2V0LmFwcGVuZENoaWxkKHRoaXMuJGlucHV0KSx0aGlzLiRkaXNhYmxlPXRoaXMuJGlucHV0LHRoaXMudXBkYXRlRGlzcGxheSgpfXVwZGF0ZURpc3BsYXkoKXtyZXR1cm4gdGhpcy4kaW5wdXQudmFsdWU9dGhpcy5nZXRWYWx1ZSgpLHRoaXN9fWxldCBwPSExO2NsYXNzIGd7Y29uc3RydWN0b3Ioe3BhcmVudDp0LGF1dG9QbGFjZTppPXZvaWQgMD09PXQsY29udGFpbmVyOmUsd2lkdGg6cyx0aXRsZTpuPVwiQ29udHJvbHNcIixpbmplY3RTdHlsZXM6cj0hMCx0b3VjaFN0eWxlczpsPSEwfT17fSl7aWYodGhpcy5wYXJlbnQ9dCx0aGlzLnJvb3Q9dD90LnJvb3Q6dGhpcyx0aGlzLmNoaWxkcmVuPVtdLHRoaXMuY29udHJvbGxlcnM9W10sdGhpcy5mb2xkZXJzPVtdLHRoaXMuX2Nsb3NlZD0hMSx0aGlzLl9oaWRkZW49ITEsdGhpcy5kb21FbGVtZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaWwtZ3VpXCIpLHRoaXMuJHRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy4kdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpLHRoaXMuJHRpdGxlLnNldEF0dHJpYnV0ZShcInJvbGVcIixcImJ1dHRvblwiKSx0aGlzLiR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsITApLHRoaXMuJHRpdGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsMCksdGhpcy4kdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PnRoaXMub3BlbkFuaW1hdGVkKHRoaXMuX2Nsb3NlZCkpLHRoaXMuJHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdD0+e1wiRW50ZXJcIiE9PXQuY29kZSYmXCJTcGFjZVwiIT09dC5jb2RlfHwodC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuJHRpdGxlLmNsaWNrKCkpfSksdGhpcy4kdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwoKT0+e30pLHRoaXMuJGNoaWxkcmVuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy4kY2hpbGRyZW4uY2xhc3NMaXN0LmFkZChcImNoaWxkcmVuXCIpLHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiR0aXRsZSksdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJGNoaWxkcmVuKSx0aGlzLnRpdGxlKG4pLGwmJnRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWxsb3ctdG91Y2gtc3R5bGVzXCIpLHRoaXMucGFyZW50KXJldHVybiB0aGlzLnBhcmVudC5jaGlsZHJlbi5wdXNoKHRoaXMpLHRoaXMucGFyZW50LmZvbGRlcnMucHVzaCh0aGlzKSx2b2lkIHRoaXMucGFyZW50LiRjaGlsZHJlbi5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO3RoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicm9vdFwiKSwhcCYmciYmKCFmdW5jdGlvbih0KXtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtpLmlubmVySFRNTD10O2NvbnN0IGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWQgbGlua1tyZWw9c3R5bGVzaGVldF0sIGhlYWQgc3R5bGVcIik7ZT9kb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShpLGUpOmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaSl9KCcubGlsLWd1aXstLWJhY2tncm91bmQtY29sb3I6IzFmMWYxZjstLXRleHQtY29sb3I6I2ViZWJlYjstLXRpdGxlLWJhY2tncm91bmQtY29sb3I6IzExMTstLXRpdGxlLXRleHQtY29sb3I6I2ViZWJlYjstLXdpZGdldC1jb2xvcjojNDI0MjQyOy0taG92ZXItY29sb3I6IzRmNGY0ZjstLWZvY3VzLWNvbG9yOiM1OTU5NTk7LS1udW1iZXItY29sb3I6IzJjYzlmZjstLXN0cmluZy1jb2xvcjojYTJkYjNjOy0tZm9udC1zaXplOjExcHg7LS1pbnB1dC1mb250LXNpemU6MTFweDstLWZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjstLWZvbnQtZmFtaWx5LW1vbm86TWVubG8sTW9uYWNvLENvbnNvbGFzLFwiRHJvaWQgU2FucyBNb25vXCIsbW9ub3NwYWNlOy0tcGFkZGluZzo0cHg7LS1zcGFjaW5nOjRweDstLXdpZGdldC1oZWlnaHQ6MjBweDstLW5hbWUtd2lkdGg6NDUlOy0tc2xpZGVyLWtub2Itd2lkdGg6MnB4Oy0tc2xpZGVyLWlucHV0LXdpZHRoOjI3JTstLWNvbG9yLWlucHV0LXdpZHRoOjI3JTstLXNsaWRlci1pbnB1dC1taW4td2lkdGg6NDVweDstLWNvbG9yLWlucHV0LW1pbi13aWR0aDo0NXB4Oy0tZm9sZGVyLWluZGVudDo3cHg7LS13aWRnZXQtcGFkZGluZzowIDAgMCAzcHg7LS13aWRnZXQtYm9yZGVyLXJhZGl1czoycHg7LS1jaGVja2JveC1zaXplOmNhbGModmFyKC0td2lkZ2V0LWhlaWdodCkqMC43NSk7LS1zY3JvbGxiYXItd2lkdGg6NXB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFja2dyb3VuZC1jb2xvcik7Y29sb3I6dmFyKC0tdGV4dC1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxO3RleHQtYWxpZ246bGVmdDt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uO3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lfS5saWwtZ3VpLC5saWwtZ3VpICp7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbjowO3BhZGRpbmc6MH0ubGlsLWd1aS5yb290e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgsMjQ1cHgpfS5saWwtZ3VpLnJvb3Q+LnRpdGxle2JhY2tncm91bmQ6dmFyKC0tdGl0bGUtYmFja2dyb3VuZC1jb2xvcik7Y29sb3I6dmFyKC0tdGl0bGUtdGV4dC1jb2xvcil9LmxpbC1ndWkucm9vdD4uY2hpbGRyZW57b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvfS5saWwtZ3VpLnJvb3Q+LmNoaWxkcmVuOjotd2Via2l0LXNjcm9sbGJhcntiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtY29sb3IpO2hlaWdodDp2YXIoLS1zY3JvbGxiYXItd2lkdGgpO3dpZHRoOnZhcigtLXNjcm9sbGJhci13aWR0aCl9LmxpbC1ndWkucm9vdD4uY2hpbGRyZW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JhY2tncm91bmQ6dmFyKC0tZm9jdXMtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0tc2Nyb2xsYmFyLXdpZHRoKX0ubGlsLWd1aS5mb3JjZS10b3VjaC1zdHlsZXN7LS13aWRnZXQtaGVpZ2h0OjI4cHg7LS1wYWRkaW5nOjZweDstLXNwYWNpbmc6NnB4Oy0tZm9udC1zaXplOjEzcHg7LS1pbnB1dC1mb250LXNpemU6MTZweDstLWZvbGRlci1pbmRlbnQ6MTBweDstLXNjcm9sbGJhci13aWR0aDo3cHg7LS1zbGlkZXItaW5wdXQtbWluLXdpZHRoOjUwcHg7LS1jb2xvci1pbnB1dC1taW4td2lkdGg6NjVweH0ubGlsLWd1aS5hdXRvUGxhY2V7bWF4LWhlaWdodDoxMDAlO3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjE1cHg7dG9wOjA7ei1pbmRleDoxMDAxfS5saWwtZ3VpIC5jb250cm9sbGVye2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7bWFyZ2luOnZhcigtLXNwYWNpbmcpIDA7cGFkZGluZzowIHZhcigtLXBhZGRpbmcpfS5saWwtZ3VpIC5jb250cm9sbGVyLmRpc2FibGVke29wYWNpdHk6LjV9LmxpbC1ndWkgLmNvbnRyb2xsZXIuZGlzYWJsZWQsLmxpbC1ndWkgLmNvbnRyb2xsZXIuZGlzYWJsZWQgKntwb2ludGVyLWV2ZW50czpub25lIWltcG9ydGFudH0ubGlsLWd1aSAuY29udHJvbGxlcj4ubmFtZXtmbGV4LXNocmluazowO2xpbmUtaGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO21pbi13aWR0aDp2YXIoLS1uYW1lLXdpZHRoKTtwYWRkaW5nLXJpZ2h0OnZhcigtLXNwYWNpbmcpO3doaXRlLXNwYWNlOnByZX0ubGlsLWd1aSAuY29udHJvbGxlciAud2lkZ2V0e2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7bWluLWhlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5saWwtZ3VpIC5jb250cm9sbGVyLnN0cmluZyBpbnB1dHtjb2xvcjp2YXIoLS1zdHJpbmctY29sb3IpfS5saWwtZ3VpIC5jb250cm9sbGVyLmJvb2xlYW4gLndpZGdldHtjdXJzb3I6cG9pbnRlcn0ubGlsLWd1aSAuY29udHJvbGxlci5jb2xvciAuZGlzcGxheXtib3JkZXItcmFkaXVzOnZhcigtLXdpZGdldC1ib3JkZXItcmFkaXVzKTtoZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX0ubGlsLWd1aSAuY29udHJvbGxlci5jb2xvciBpbnB1dFt0eXBlPWNvbG9yXXtjdXJzb3I6cG9pbnRlcjtoZWlnaHQ6MTAwJTtvcGFjaXR5OjA7d2lkdGg6MTAwJX0ubGlsLWd1aSAuY29udHJvbGxlci5jb2xvciBpbnB1dFt0eXBlPXRleHRde2ZsZXgtc2hyaW5rOjA7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHktbW9ubyk7bWFyZ2luLWxlZnQ6dmFyKC0tc3BhY2luZyk7bWluLXdpZHRoOnZhcigtLWNvbG9yLWlucHV0LW1pbi13aWR0aCk7d2lkdGg6dmFyKC0tY29sb3ItaW5wdXQtd2lkdGgpfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiBzZWxlY3R7bWF4LXdpZHRoOjEwMCU7b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCV9LmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIC5kaXNwbGF5e2JhY2tncm91bmQ6dmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXItcmFkaXVzOnZhcigtLXdpZGdldC1ib3JkZXItcmFkaXVzKTtoZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7bWF4LXdpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmctbGVmdDouNTVlbTtwYWRkaW5nLXJpZ2h0OjEuNzVlbTtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO3dvcmQtYnJlYWs6YnJlYWstYWxsfS5saWwtZ3VpIC5jb250cm9sbGVyLm9wdGlvbiAuZGlzcGxheS5hY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIC5kaXNwbGF5OmFmdGVye2JvdHRvbTowO2NvbnRlbnQ6XCLihpVcIjtmb250LWZhbWlseTpsaWwtZ3VpO3BhZGRpbmctcmlnaHQ6LjM3NWVtO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjB9LmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIC53aWRnZXQsLmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIHNlbGVjdHtjdXJzb3I6cG9pbnRlcn0ubGlsLWd1aSAuY29udHJvbGxlci5udW1iZXIgaW5wdXR7Y29sb3I6dmFyKC0tbnVtYmVyLWNvbG9yKX0ubGlsLWd1aSAuY29udHJvbGxlci5udW1iZXIuaGFzU2xpZGVyIGlucHV0e2ZsZXgtc2hyaW5rOjA7bWFyZ2luLWxlZnQ6dmFyKC0tc3BhY2luZyk7bWluLXdpZHRoOnZhcigtLXNsaWRlci1pbnB1dC1taW4td2lkdGgpO3dpZHRoOnZhcigtLXNsaWRlci1pbnB1dC13aWR0aCl9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyIC5zbGlkZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlci1yYWRpdXM6dmFyKC0td2lkZ2V0LWJvcmRlci1yYWRpdXMpO2N1cnNvcjpldy1yZXNpemU7aGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nLXJpZ2h0OnZhcigtLXNsaWRlci1rbm9iLXdpZHRoKTt0b3VjaC1hY3Rpb246cGFuLXk7d2lkdGg6MTAwJX0ubGlsLWd1aSAuY29udHJvbGxlci5udW1iZXIgLnNsaWRlci5hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyIC5zbGlkZXIuYWN0aXZlIC5maWxse29wYWNpdHk6Ljk1fS5saWwtZ3VpIC5jb250cm9sbGVyLm51bWJlciAuZmlsbHtib3JkZXItcmlnaHQ6dmFyKC0tc2xpZGVyLWtub2Itd2lkdGgpIHNvbGlkIHZhcigtLW51bWJlci1jb2xvcik7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MTAwJX0ubGlsLWd1aS1kcmFnZ2luZyAubGlsLWd1aXstLWhvdmVyLWNvbG9yOnZhcigtLXdpZGdldC1jb2xvcil9LmxpbC1ndWktZHJhZ2dpbmcgKntjdXJzb3I6ZXctcmVzaXplIWltcG9ydGFudH0ubGlsLWd1aS1kcmFnZ2luZy5saWwtZ3VpLXZlcnRpY2FsICp7Y3Vyc29yOm5zLXJlc2l6ZSFpbXBvcnRhbnR9LmxpbC1ndWkgLnRpdGxley0tdGl0bGUtaGVpZ2h0OmNhbGModmFyKC0td2lkZ2V0LWhlaWdodCkgKyB2YXIoLS1zcGFjaW5nKSoxLjI1KTstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dGV4dC1kZWNvcmF0aW9uLXNraXA6b2JqZWN0cztjdXJzb3I6cG9pbnRlcjtmb250LXdlaWdodDo2MDA7aGVpZ2h0OnZhcigtLXRpdGxlLWhlaWdodCk7bGluZS1oZWlnaHQ6Y2FsYyh2YXIoLS10aXRsZS1oZWlnaHQpIC0gNHB4KTtvdXRsaW5lOm5vbmU7cGFkZGluZzowIHZhcigtLXBhZGRpbmcpfS5saWwtZ3VpIC50aXRsZTpiZWZvcmV7Y29udGVudDpcIuKWvlwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtZmFtaWx5OmxpbC1ndWk7cGFkZGluZy1yaWdodDoycHh9LmxpbC1ndWkgLnRpdGxlOmFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLXRpdGxlLWJhY2tncm91bmQtY29sb3IpO29wYWNpdHk6Ljc1fS5saWwtZ3VpLnJvb3Q+LnRpdGxlOmZvY3Vze3RleHQtZGVjb3JhdGlvbjpub25lIWltcG9ydGFudH0ubGlsLWd1aS5jbG9zZWQ+LnRpdGxlOmJlZm9yZXtjb250ZW50Olwi4pa4XCJ9LmxpbC1ndWkuY2xvc2VkPi5jaGlsZHJlbntvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTdweCl9LmxpbC1ndWkuY2xvc2VkOm5vdCgudHJhbnNpdGlvbik+LmNoaWxkcmVue2Rpc3BsYXk6bm9uZX0ubGlsLWd1aS50cmFuc2l0aW9uPi5jaGlsZHJlbntvdmVyZmxvdzpoaWRkZW47cG9pbnRlci1ldmVudHM6bm9uZTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4zczt0cmFuc2l0aW9uLXByb3BlcnR5OmhlaWdodCxvcGFjaXR5LHRyYW5zZm9ybTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIsLjYsLjM1LDEpfS5saWwtZ3VpIC5jaGlsZHJlbjplbXB0eTpiZWZvcmV7Y29udGVudDpcIkVtcHR5XCI7ZGlzcGxheTpibG9jaztmb250LXN0eWxlOml0YWxpYztoZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0td2lkZ2V0LWhlaWdodCk7bWFyZ2luOnZhcigtLXNwYWNpbmcpIDA7b3BhY2l0eTouNTtwYWRkaW5nOjAgdmFyKC0tcGFkZGluZyl9LmxpbC1ndWkucm9vdD4uY2hpbGRyZW4+LmxpbC1ndWk+LnRpdGxle2JvcmRlci13aWR0aDowO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyLWxlZnQ6MCBzb2xpZCB2YXIoLS13aWRnZXQtY29sb3IpO2JvcmRlci1yaWdodDowIHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0td2lkZ2V0LWNvbG9yKTt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuM3N9LmxpbC1ndWkucm9vdD4uY2hpbGRyZW4+LmxpbC1ndWkuY2xvc2VkPi50aXRsZXtib3JkZXItYm90dG9tLWNvbG9yOnRyYW5zcGFyZW50fS5saWwtZ3VpKy5jb250cm9sbGVye2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7bWFyZ2luLXRvcDowO3BhZGRpbmctdG9wOnZhcigtLXNwYWNpbmcpfS5saWwtZ3VpIC5saWwtZ3VpIC5saWwtZ3VpPi50aXRsZXtib3JkZXI6bm9uZX0ubGlsLWd1aSAubGlsLWd1aSAubGlsLWd1aT4uY2hpbGRyZW57Ym9yZGVyOm5vbmU7Ym9yZGVyLWxlZnQ6MnB4IHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7bWFyZ2luLWxlZnQ6dmFyKC0tZm9sZGVyLWluZGVudCl9LmxpbC1ndWkgLmxpbC1ndWkgLmNvbnRyb2xsZXJ7Ym9yZGVyOm5vbmV9LmxpbC1ndWkgaW5wdXR7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQ6dmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXI6MDtib3JkZXItcmFkaXVzOnZhcigtLXdpZGdldC1ib3JkZXItcmFkaXVzKTtjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1mb250LWZhbWlseSk7Zm9udC1zaXplOnZhcigtLWlucHV0LWZvbnQtc2l6ZSk7aGVpZ2h0OnZhcigtLXdpZGdldC1oZWlnaHQpO291dGxpbmU6bm9uZTt3aWR0aDoxMDAlfS5saWwtZ3VpIGlucHV0OmRpc2FibGVke29wYWNpdHk6MX0ubGlsLWd1aSBpbnB1dFt0eXBlPW51bWJlcl0sLmxpbC1ndWkgaW5wdXRbdHlwZT10ZXh0XXtwYWRkaW5nOnZhcigtLXdpZGdldC1wYWRkaW5nKX0ubGlsLWd1aSBpbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMsLmxpbC1ndWkgaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tiYWNrZ3JvdW5kOnZhcigtLWZvY3VzLWNvbG9yKX0ubGlsLWd1aSBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwubGlsLWd1aSBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTttYXJnaW46MH0ubGlsLWd1aSBpbnB1dFt0eXBlPW51bWJlcl17LW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZH0ubGlsLWd1aSBpbnB1dFt0eXBlPWNoZWNrYm94XXthcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7Ym9yZGVyLXJhZGl1czp2YXIoLS13aWRnZXQtYm9yZGVyLXJhZGl1cyk7Y3Vyc29yOnBvaW50ZXI7aGVpZ2h0OnZhcigtLWNoZWNrYm94LXNpemUpO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOnZhcigtLWNoZWNrYm94LXNpemUpfS5saWwtZ3VpIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6YmVmb3Jle2NvbnRlbnQ6XCLinJNcIjtmb250LWZhbWlseTpsaWwtZ3VpO2ZvbnQtc2l6ZTp2YXIoLS1jaGVja2JveC1zaXplKTtsaW5lLWhlaWdodDp2YXIoLS1jaGVja2JveC1zaXplKX0ubGlsLWd1aSBidXR0b257LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQ6dmFyKC0td2lkZ2V0LWNvbG9yKTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLXdpZGdldC1jb2xvcik7Ym9yZGVyLXJhZGl1czp2YXIoLS13aWRnZXQtYm9yZGVyLXJhZGl1cyk7Y29sb3I6dmFyKC0tdGV4dC1jb2xvcik7Y3Vyc29yOnBvaW50ZXI7Zm9udC1mYW1pbHk6dmFyKC0tZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO2hlaWdodDp2YXIoLS13aWRnZXQtaGVpZ2h0KTtsaW5lLWhlaWdodDpjYWxjKHZhcigtLXdpZGdldC1oZWlnaHQpIC0gNHB4KTtvdXRsaW5lOm5vbmU7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06bm9uZTt3aWR0aDoxMDAlfS5saWwtZ3VpIGJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1mb2N1cy1jb2xvcil9QGZvbnQtZmFjZXtmb250LWZhbWlseTpsaWwtZ3VpO3NyYzp1cmwoXCJkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHUmdBQkFBQUFBQVVzQUFzQUFBQUFDSndBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkhVMVZDQUFBQkNBQUFBSDRBQUFEQUltd21ZRTlUTHpJQUFBR0lBQUFBUHdBQUFHQktxSDVTWTIxaGNBQUFBY2dBQUFEMEFBQUNydWt5eUpCbmJIbG1BQUFDdkFBQUFGOEFBQUNFSVpwV0gyaGxZV1FBQUFNY0FBQUFKd0FBQURaZmNqMnphR2hsWVFBQUEwUUFBQUFZQUFBQUpBQzVBSGhvYlhSNEFBQURYQUFBQUJBQUFBQk1BWkFBQUd4dlkyRUFBQU5zQUFBQUZBQUFBQ2dDRWdJeWJXRjRjQUFBQTRBQUFBQWVBQUFBSUFFZkFCSnVZVzFsQUFBRG9BQUFBU0lBQUFJSzlTVVUvWEJ2YzNRQUFBVEVBQUFBWmdBQUFKQ1RjTWMyZUp4VmpiRU9nakFVUlUraEZSQksxZEdSTCtBTG5BaVRveU1MRXpGcG5Qei9lQXNod1NhOTc1MTdjL013d0ptZUI5a3dQbCswY2Y1K3VHUFpYc3FQdTRudlphYmNTWmxkWjZrZnlXbm9tRlkvZVNjS3FaTld1cEtKTzZrWE4zSzl1Q1ZvTDdpSW5QcjFYNWJhWHMzdGp1TXFDdHpFdWFnbS9BQWx6UWdQQUFCNG5HTmdZUkJsbk1EQXlzREFZTS9nQmlUNW9MUUJBd3VESkFNREV3TXJNd05XRUpEbW1zSndnQ0ZlWFpnaEJjamxaTWdGQ3pPaUtPSUZBQjcxQmI4QWVKeTFrakZ1d2tBUVJaK0R3UkF3QnROUVJVR0tROE9kS0NBV1VoQWdLTGhJdUFzVlNwV3o1QmJrajNkRWdZaVVJc3pxV2RwWmUrWjcvd0Ixb0NZbUlvYm9pd2lMVDJXaktsL2pzY3JIZkdnL3BLZE1reWtsQzVaczJMRWZIWXBqY1JvUHptZTlNV1dtazNkV2JLOU9ia1draWtPZXRKNTU0Zld5b0VzbWRTbHQrdVIwcENKUjM0YjZ0L1RWZzFTWTNzWXZkZjh2dWlLcnB5YURYRElTaWVncDE3cDc1NzlHcDNwKyt5N0hQQWlZOXBtVGlibGpycjg1cVNpZHRsZzQrbDI1R0xDYVM4ZTZyUnhOQm1zbkVSdW5LYmFPT2JSejdONzJqdTV2ZEFqWXBCWEhnSnlsT0FWc01zZURBUEVQOExZb1VIaWNZMkJpQUFFZmhpQUdKZ1pXQmdaN1JuRlJkblZKRUxDUWxCU1JsQVRKTW9MVjJESzRnbFNZczZ1YnE1dmJLckpMU2JHcmdFbW92RHVESlZoZTNWemNYRndOTENPSUxCL0M0SXVRMXhUbjVGUGlsQlRqNUZQbUJBQjRXd29xQUhpY1kyQmtZR0FBNHNrMXNSL2orVzIrTW5BenBEQmdBeUVNUVVDU2c0RUp4QUVBd1VnRkhnQjRuR05nWkdCZ1NHRmdnSk1oREl3TXFFQVlBQnlIQVRKNG5HTmdBSUlVTkV3bUFBQmwzQUdSZUp4allBQUNJUVlsQmlNR0ozd1FBRWNRQkVWNG5HTmdaR0JnRUdaZ1kyQmlBQUVReVFXRURBei93WHdHQUFzUEFUSUFBSGljWGRCTlNzTkFIQVh3bDM1aUEwVVFYWW5NU2hmUzlHUFpBN1Q3TGdJdTAzU1Nwa3d6WVRJdDFCTjRBay9nS1R5QWVDeGZ3MzlqWmtqeW16Y3ZBd21BVy93Z3dIVUVHRGIzNitqUVEzR1hHb3Q3OUwyNGp4Q1A0Z0h6Ri9FSXI0akVJZTd3eGhPQzNnMlRNWXk0UTcrTHUvU0h1RWQvaXZ0NHdKZDR3UHhiUEVLTVgzR0k1K0RKRkdhU240cU56azhtY2JLU1I2eGRYZGhTemFPWkpHdGRhcGQ0dlZQYmk2clArY0w3VEdYT0h0WEtsbDRiWTFYbDdFR25QdHA3WHkybjAwenlLTFZIZmtIQmE0SWNKMm9EM2NnZ2dXdnQvVi9GYkRyVWxFVUpoVG4vMGF6VldiTlROcjBFbnM4ZGUxdGNlSzl4Wm1mQjFDUGpPbVBINGtpdG12T3ViY05wbVZUTjNvRkp5anpDdm5tcndoSlR6cXpWajlqaVNYOTExRmplQUFCNG5HM0hNUktDTUJCQTBmMGdpaUtpNERVOGswVjJHV2JJWkRPaDRQb1dXdnE2SjVWOElmOU5WTlFjYURoeW91WE1oWTRyUFRjRzdqd1ltWGhLcThXeitwNzYyYU5hZVlYb20ybjNtMmRMVFZnc3JDZ0ZKN09UbUlrWWJ3SWJDNnZJQjdXbUZmQUFBQT09XCIpIGZvcm1hdChcIndvZmZcIil9QG1lZGlhIChwb2ludGVyOmNvYXJzZSl7LmxpbC1ndWkuYWxsb3ctdG91Y2gtc3R5bGVzey0td2lkZ2V0LWhlaWdodDoyOHB4Oy0tcGFkZGluZzo2cHg7LS1zcGFjaW5nOjZweDstLWZvbnQtc2l6ZToxM3B4Oy0taW5wdXQtZm9udC1zaXplOjE2cHg7LS1mb2xkZXItaW5kZW50OjEwcHg7LS1zY3JvbGxiYXItd2lkdGg6N3B4Oy0tc2xpZGVyLWlucHV0LW1pbi13aWR0aDo1MHB4Oy0tY29sb3ItaW5wdXQtbWluLXdpZHRoOjY1cHh9fUBtZWRpYSAoaG92ZXI6aG92ZXIpey5saWwtZ3VpIC5jb250cm9sbGVyLmNvbG9yIC5kaXNwbGF5OmhvdmVyOmJlZm9yZXtib3JkZXI6MXB4IHNvbGlkICNmZmY5O2JvcmRlci1yYWRpdXM6dmFyKC0td2lkZ2V0LWJvcmRlci1yYWRpdXMpO2JvdHRvbTowO2NvbnRlbnQ6XCIgXCI7ZGlzcGxheTpibG9jaztsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MH0ubGlsLWd1aSAuY29udHJvbGxlci5vcHRpb24gLmRpc3BsYXkuZm9jdXN7YmFja2dyb3VuZDp2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgLmNvbnRyb2xsZXIub3B0aW9uIC53aWRnZXQ6aG92ZXIgLmRpc3BsYXl7YmFja2dyb3VuZDp2YXIoLS1ob3Zlci1jb2xvcil9LmxpbC1ndWkgLmNvbnRyb2xsZXIubnVtYmVyIC5zbGlkZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ob3Zlci1jb2xvcil9Ym9keTpub3QoLmxpbC1ndWktZHJhZ2dpbmcpIC5saWwtZ3VpIC50aXRsZTpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLXRpdGxlLWJhY2tncm91bmQtY29sb3IpO29wYWNpdHk6Ljg1fS5saWwtZ3VpIC50aXRsZTpmb2N1c3t0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIHZhcigtLWZvY3VzLWNvbG9yKX0ubGlsLWd1aSBpbnB1dDpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWhvdmVyLWNvbG9yKX0ubGlsLWd1aSBpbnB1dDphY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1mb2N1cy1jb2xvcil9LmxpbC1ndWkgaW5wdXRbdHlwZT1jaGVja2JveF06Zm9jdXN7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAxcHggdmFyKC0tZm9jdXMtY29sb3IpfS5saWwtZ3VpIGJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kOnZhcigtLWhvdmVyLWNvbG9yKTtib3JkZXItY29sb3I6dmFyKC0taG92ZXItY29sb3IpfS5saWwtZ3VpIGJ1dHRvbjpmb2N1c3tib3JkZXItY29sb3I6dmFyKC0tZm9jdXMtY29sb3IpfX0nKSxwPSEwKSxlP2UuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTppJiYodGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhdXRvUGxhY2VcIiksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpKSxzJiZ0aGlzLmRvbUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdpZHRoXCIscytcInB4XCIpLHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQ9PnQuc3RvcFByb3BhZ2F0aW9uKCkpLHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0PT50LnN0b3BQcm9wYWdhdGlvbigpKX1hZGQodCxlLHMsbixyKXtpZihPYmplY3Qocyk9PT1zKXJldHVybiBuZXcgYyh0aGlzLHQsZSxzKTtjb25zdCBsPXRbZV07c3dpdGNoKHR5cGVvZiBsKXtjYXNlXCJudW1iZXJcIjpyZXR1cm4gbmV3IGQodGhpcyx0LGUscyxuLHIpO2Nhc2VcImJvb2xlYW5cIjpyZXR1cm4gbmV3IGkodGhpcyx0LGUpO2Nhc2VcInN0cmluZ1wiOnJldHVybiBuZXcgdSh0aGlzLHQsZSk7Y2FzZVwiZnVuY3Rpb25cIjpyZXR1cm4gbmV3IGgodGhpcyx0LGUpfWNvbnNvbGUuZXJyb3IoXCJndWkuYWRkIGZhaWxlZFxcblxcdHByb3BlcnR5OlwiLGUsXCJcXG5cXHRvYmplY3Q6XCIsdCxcIlxcblxcdHZhbHVlOlwiLGwpfWFkZENvbG9yKHQsaSxlPTEpe3JldHVybiBuZXcgYSh0aGlzLHQsaSxlKX1hZGRGb2xkZXIodCl7cmV0dXJuIG5ldyBnKHtwYXJlbnQ6dGhpcyx0aXRsZTp0fSl9bG9hZCh0LGk9ITApe3JldHVybiB0LmNvbnRyb2xsZXJzJiZ0aGlzLmNvbnRyb2xsZXJzLmZvckVhY2goaT0+e2kgaW5zdGFuY2VvZiBofHxpLl9uYW1lIGluIHQuY29udHJvbGxlcnMmJmkubG9hZCh0LmNvbnRyb2xsZXJzW2kuX25hbWVdKX0pLGkmJnQuZm9sZGVycyYmdGhpcy5mb2xkZXJzLmZvckVhY2goaT0+e2kuX3RpdGxlIGluIHQuZm9sZGVycyYmaS5sb2FkKHQuZm9sZGVyc1tpLl90aXRsZV0pfSksdGhpc31zYXZlKHQ9ITApe2NvbnN0IGk9e2NvbnRyb2xsZXJzOnt9LGZvbGRlcnM6e319O3JldHVybiB0aGlzLmNvbnRyb2xsZXJzLmZvckVhY2godD0+e2lmKCEodCBpbnN0YW5jZW9mIGgpKXtpZih0Ll9uYW1lIGluIGkuY29udHJvbGxlcnMpdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc2F2ZSBHVUkgd2l0aCBkdXBsaWNhdGUgcHJvcGVydHkgXCIke3QuX25hbWV9XCJgKTtpLmNvbnRyb2xsZXJzW3QuX25hbWVdPXQuc2F2ZSgpfX0pLHQmJnRoaXMuZm9sZGVycy5mb3JFYWNoKHQ9PntpZih0Ll90aXRsZSBpbiBpLmZvbGRlcnMpdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc2F2ZSBHVUkgd2l0aCBkdXBsaWNhdGUgZm9sZGVyIFwiJHt0Ll90aXRsZX1cImApO2kuZm9sZGVyc1t0Ll90aXRsZV09dC5zYXZlKCl9KSxpfW9wZW4odD0hMCl7cmV0dXJuIHRoaXMuX2Nsb3NlZD0hdCx0aGlzLiR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIXRoaXMuX2Nsb3NlZCksdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZWRcIix0aGlzLl9jbG9zZWQpLHRoaXN9Y2xvc2UoKXtyZXR1cm4gdGhpcy5vcGVuKCExKX1zaG93KHQ9ITApe3JldHVybiB0aGlzLl9oaWRkZW49IXQsdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXk9dGhpcy5faGlkZGVuP1wibm9uZVwiOlwiXCIsdGhpc31oaWRlKCl7cmV0dXJuIHRoaXMuc2hvdyghMSl9b3BlbkFuaW1hdGVkKHQ9ITApe3JldHVybiB0aGlzLl9jbG9zZWQ9IXQsdGhpcy4kdGl0bGUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCF0aGlzLl9jbG9zZWQpLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e2NvbnN0IGk9dGhpcy4kY2hpbGRyZW4uY2xpZW50SGVpZ2h0O3RoaXMuJGNoaWxkcmVuLnN0eWxlLmhlaWdodD1pK1wicHhcIix0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb25cIik7Y29uc3QgZT10PT57dC50YXJnZXQ9PT10aGlzLiRjaGlsZHJlbiYmKHRoaXMuJGNoaWxkcmVuLnN0eWxlLmhlaWdodD1cIlwiLHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNpdGlvblwiKSx0aGlzLiRjaGlsZHJlbi5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLGUpKX07dGhpcy4kY2hpbGRyZW4uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIixlKTtjb25zdCBzPXQ/dGhpcy4kY2hpbGRyZW4uc2Nyb2xsSGVpZ2h0OjA7dGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZWRcIiwhdCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57dGhpcy4kY2hpbGRyZW4uc3R5bGUuaGVpZ2h0PXMrXCJweFwifSl9KSx0aGlzfXRpdGxlKHQpe3JldHVybiB0aGlzLl90aXRsZT10LHRoaXMuJHRpdGxlLmlubmVySFRNTD10LHRoaXN9cmVzZXQodD0hMCl7cmV0dXJuKHQ/dGhpcy5jb250cm9sbGVyc1JlY3Vyc2l2ZSgpOnRoaXMuY29udHJvbGxlcnMpLmZvckVhY2godD0+dC5yZXNldCgpKSx0aGlzfW9uQ2hhbmdlKHQpe3JldHVybiB0aGlzLl9vbkNoYW5nZT10LHRoaXN9X2NhbGxPbkNoYW5nZSh0KXt0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQuX2NhbGxPbkNoYW5nZSh0KSx2b2lkIDAhPT10aGlzLl9vbkNoYW5nZSYmdGhpcy5fb25DaGFuZ2UuY2FsbCh0aGlzLHtvYmplY3Q6dC5vYmplY3QscHJvcGVydHk6dC5wcm9wZXJ0eSx2YWx1ZTp0LmdldFZhbHVlKCksY29udHJvbGxlcjp0fSl9b25GaW5pc2hDaGFuZ2UodCl7cmV0dXJuIHRoaXMuX29uRmluaXNoQ2hhbmdlPXQsdGhpc31fY2FsbE9uRmluaXNoQ2hhbmdlKHQpe3RoaXMucGFyZW50JiZ0aGlzLnBhcmVudC5fY2FsbE9uRmluaXNoQ2hhbmdlKHQpLHZvaWQgMCE9PXRoaXMuX29uRmluaXNoQ2hhbmdlJiZ0aGlzLl9vbkZpbmlzaENoYW5nZS5jYWxsKHRoaXMse29iamVjdDp0Lm9iamVjdCxwcm9wZXJ0eTp0LnByb3BlcnR5LHZhbHVlOnQuZ2V0VmFsdWUoKSxjb250cm9sbGVyOnR9KX1kZXN0cm95KCl7dGhpcy5wYXJlbnQmJih0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UodGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKSwxKSx0aGlzLnBhcmVudC5mb2xkZXJzLnNwbGljZSh0aGlzLnBhcmVudC5mb2xkZXJzLmluZGV4T2YodGhpcyksMSkpLHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50JiZ0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpLEFycmF5LmZyb20odGhpcy5jaGlsZHJlbikuZm9yRWFjaCh0PT50LmRlc3Ryb3koKSl9Y29udHJvbGxlcnNSZWN1cnNpdmUoKXtsZXQgdD1BcnJheS5mcm9tKHRoaXMuY29udHJvbGxlcnMpO3JldHVybiB0aGlzLmZvbGRlcnMuZm9yRWFjaChpPT57dD10LmNvbmNhdChpLmNvbnRyb2xsZXJzUmVjdXJzaXZlKCkpfSksdH1mb2xkZXJzUmVjdXJzaXZlKCl7bGV0IHQ9QXJyYXkuZnJvbSh0aGlzLmZvbGRlcnMpO3JldHVybiB0aGlzLmZvbGRlcnMuZm9yRWFjaChpPT57dD10LmNvbmNhdChpLmZvbGRlcnNSZWN1cnNpdmUoKSl9KSx0fX1leHBvcnQgZGVmYXVsdCBnO2V4cG9ydHtpIGFzIEJvb2xlYW5Db250cm9sbGVyLGEgYXMgQ29sb3JDb250cm9sbGVyLHQgYXMgQ29udHJvbGxlcixoIGFzIEZ1bmN0aW9uQ29udHJvbGxlcixnIGFzIEdVSSxkIGFzIE51bWJlckNvbnRyb2xsZXIsYyBhcyBPcHRpb25Db250cm9sbGVyLHUgYXMgU3RyaW5nQ29udHJvbGxlcn07XG4iLCJ2YXIgU3RhdHMgPSBmdW5jdGlvbiAoKSB7XG5cblx0dmFyIG1vZGUgPSAwO1xuXG5cdHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9ICdwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTowLjk7ei1pbmRleDoxMDAwMCc7XG5cdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRzaG93UGFuZWwoICsrIG1vZGUgJSBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoICk7XG5cblx0fSwgZmFsc2UgKTtcblxuXHQvL1xuXG5cdGZ1bmN0aW9uIGFkZFBhbmVsKCBwYW5lbCApIHtcblxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCggcGFuZWwuZG9tICk7XG5cdFx0cmV0dXJuIHBhbmVsO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBzaG93UGFuZWwoIGlkICkge1xuXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdFx0Y29udGFpbmVyLmNoaWxkcmVuWyBpIF0uc3R5bGUuZGlzcGxheSA9IGkgPT09IGlkID8gJ2Jsb2NrJyA6ICdub25lJztcblxuXHRcdH1cblxuXHRcdG1vZGUgPSBpZDtcblxuXHR9XG5cblx0Ly9cblxuXHR2YXIgYmVnaW5UaW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCksIHByZXZUaW1lID0gYmVnaW5UaW1lLCBmcmFtZXMgPSAwO1xuXG5cdHZhciBmcHNQYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdGUFMnLCAnIzBmZicsICcjMDAyJyApICk7XG5cdHZhciBtc1BhbmVsID0gYWRkUGFuZWwoIG5ldyBTdGF0cy5QYW5lbCggJ01TJywgJyMwZjAnLCAnIzAyMCcgKSApO1xuXG5cdGlmICggc2VsZi5wZXJmb3JtYW5jZSAmJiBzZWxmLnBlcmZvcm1hbmNlLm1lbW9yeSApIHtcblxuXHRcdHZhciBtZW1QYW5lbCA9IGFkZFBhbmVsKCBuZXcgU3RhdHMuUGFuZWwoICdNQicsICcjZjA4JywgJyMyMDEnICkgKTtcblxuXHR9XG5cblx0c2hvd1BhbmVsKCAwICk7XG5cblx0cmV0dXJuIHtcblxuXHRcdFJFVklTSU9OOiAxNixcblxuXHRcdGRvbTogY29udGFpbmVyLFxuXG5cdFx0YWRkUGFuZWw6IGFkZFBhbmVsLFxuXHRcdHNob3dQYW5lbDogc2hvd1BhbmVsLFxuXG5cdFx0YmVnaW46IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0YmVnaW5UaW1lID0gKCBwZXJmb3JtYW5jZSB8fCBEYXRlICkubm93KCk7XG5cblx0XHR9LFxuXG5cdFx0ZW5kOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGZyYW1lcyArKztcblxuXHRcdFx0dmFyIHRpbWUgPSAoIHBlcmZvcm1hbmNlIHx8IERhdGUgKS5ub3coKTtcblxuXHRcdFx0bXNQYW5lbC51cGRhdGUoIHRpbWUgLSBiZWdpblRpbWUsIDIwMCApO1xuXG5cdFx0XHRpZiAoIHRpbWUgPj0gcHJldlRpbWUgKyAxMDAwICkge1xuXG5cdFx0XHRcdGZwc1BhbmVsLnVwZGF0ZSggKCBmcmFtZXMgKiAxMDAwICkgLyAoIHRpbWUgLSBwcmV2VGltZSApLCAxMDAgKTtcblxuXHRcdFx0XHRwcmV2VGltZSA9IHRpbWU7XG5cdFx0XHRcdGZyYW1lcyA9IDA7XG5cblx0XHRcdFx0aWYgKCBtZW1QYW5lbCApIHtcblxuXHRcdFx0XHRcdHZhciBtZW1vcnkgPSBwZXJmb3JtYW5jZS5tZW1vcnk7XG5cdFx0XHRcdFx0bWVtUGFuZWwudXBkYXRlKCBtZW1vcnkudXNlZEpTSGVhcFNpemUgLyAxMDQ4NTc2LCBtZW1vcnkuanNIZWFwU2l6ZUxpbWl0IC8gMTA0ODU3NiApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGltZTtcblxuXHRcdH0sXG5cblx0XHR1cGRhdGU6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0YmVnaW5UaW1lID0gdGhpcy5lbmQoKTtcblxuXHRcdH0sXG5cblx0XHQvLyBCYWNrd2FyZHMgQ29tcGF0aWJpbGl0eVxuXG5cdFx0ZG9tRWxlbWVudDogY29udGFpbmVyLFxuXHRcdHNldE1vZGU6IHNob3dQYW5lbFxuXG5cdH07XG5cbn07XG5cblN0YXRzLlBhbmVsID0gZnVuY3Rpb24gKCBuYW1lLCBmZywgYmcgKSB7XG5cblx0dmFyIG1pbiA9IEluZmluaXR5LCBtYXggPSAwLCByb3VuZCA9IE1hdGgucm91bmQ7XG5cdHZhciBQUiA9IHJvdW5kKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxICk7XG5cblx0dmFyIFdJRFRIID0gODAgKiBQUiwgSEVJR0hUID0gNDggKiBQUixcblx0XHRURVhUX1ggPSAzICogUFIsIFRFWFRfWSA9IDIgKiBQUixcblx0XHRHUkFQSF9YID0gMyAqIFBSLCBHUkFQSF9ZID0gMTUgKiBQUixcblx0XHRHUkFQSF9XSURUSCA9IDc0ICogUFIsIEdSQVBIX0hFSUdIVCA9IDMwICogUFI7XG5cblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XG5cdGNhbnZhcy53aWR0aCA9IFdJRFRIO1xuXHRjYW52YXMuaGVpZ2h0ID0gSEVJR0hUO1xuXHRjYW52YXMuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDo4MHB4O2hlaWdodDo0OHB4JztcblxuXHR2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XG5cdGNvbnRleHQuZm9udCA9ICdib2xkICcgKyAoIDkgKiBQUiApICsgJ3B4IEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmJztcblx0Y29udGV4dC50ZXh0QmFzZWxpbmUgPSAndG9wJztcblxuXHRjb250ZXh0LmZpbGxTdHlsZSA9IGJnO1xuXHRjb250ZXh0LmZpbGxSZWN0KCAwLCAwLCBXSURUSCwgSEVJR0hUICk7XG5cblx0Y29udGV4dC5maWxsU3R5bGUgPSBmZztcblx0Y29udGV4dC5maWxsVGV4dCggbmFtZSwgVEVYVF9YLCBURVhUX1kgKTtcblx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCwgR1JBUEhfWSwgR1JBUEhfV0lEVEgsIEdSQVBIX0hFSUdIVCApO1xuXG5cdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjk7XG5cdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1gsIEdSQVBIX1ksIEdSQVBIX1dJRFRILCBHUkFQSF9IRUlHSFQgKTtcblxuXHRyZXR1cm4ge1xuXG5cdFx0ZG9tOiBjYW52YXMsXG5cblx0XHR1cGRhdGU6IGZ1bmN0aW9uICggdmFsdWUsIG1heFZhbHVlICkge1xuXG5cdFx0XHRtaW4gPSBNYXRoLm1pbiggbWluLCB2YWx1ZSApO1xuXHRcdFx0bWF4ID0gTWF0aC5tYXgoIG1heCwgdmFsdWUgKTtcblxuXHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSBiZztcblx0XHRcdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRcdFx0Y29udGV4dC5maWxsUmVjdCggMCwgMCwgV0lEVEgsIEdSQVBIX1kgKTtcblx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gZmc7XG5cdFx0XHRjb250ZXh0LmZpbGxUZXh0KCByb3VuZCggdmFsdWUgKSArICcgJyArIG5hbWUgKyAnICgnICsgcm91bmQoIG1pbiApICsgJy0nICsgcm91bmQoIG1heCApICsgJyknLCBURVhUX1gsIFRFWFRfWSApO1xuXG5cdFx0XHRjb250ZXh0LmRyYXdJbWFnZSggY2FudmFzLCBHUkFQSF9YICsgUFIsIEdSQVBIX1ksIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX0hFSUdIVCwgR1JBUEhfWCwgR1JBUEhfWSwgR1JBUEhfV0lEVEggLSBQUiwgR1JBUEhfSEVJR0hUICk7XG5cblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoIEdSQVBIX1ggKyBHUkFQSF9XSURUSCAtIFBSLCBHUkFQSF9ZLCBQUiwgR1JBUEhfSEVJR0hUICk7XG5cblx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gYmc7XG5cdFx0XHRjb250ZXh0Lmdsb2JhbEFscGhhID0gMC45O1xuXHRcdFx0Y29udGV4dC5maWxsUmVjdCggR1JBUEhfWCArIEdSQVBIX1dJRFRIIC0gUFIsIEdSQVBIX1ksIFBSLCByb3VuZCggKCAxIC0gKCB2YWx1ZSAvIG1heFZhbHVlICkgKSAqIEdSQVBIX0hFSUdIVCApICk7XG5cblx0XHR9XG5cblx0fTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHM7XG4iLCJpbXBvcnQge1xuXHRCYWNrU2lkZSxcblx0Qm94R2VvbWV0cnksXG5cdE1lc2gsXG5cdFNoYWRlck1hdGVyaWFsLFxuXHRVbmlmb3Jtc1V0aWxzLFxuXHRWZWN0b3IzXG59IGZyb20gJ3RocmVlJztcblxuLyoqXG4gKiBCYXNlZCBvbiBcIkEgUHJhY3RpY2FsIEFuYWx5dGljIE1vZGVsIGZvciBEYXlsaWdodFwiXG4gKiBha2EgVGhlIFByZWV0aGFtIE1vZGVsLCB0aGUgZGUgZmFjdG8gc3RhbmRhcmQgYW5hbHl0aWMgc2t5ZG9tZSBtb2RlbFxuICogaHR0cHM6Ly93d3cucmVzZWFyY2hnYXRlLm5ldC9wdWJsaWNhdGlvbi8yMjA3MjA0NDNfQV9QcmFjdGljYWxfQW5hbHl0aWNfTW9kZWxfZm9yX0RheWxpZ2h0XG4gKlxuICogRmlyc3QgaW1wbGVtZW50ZWQgYnkgU2ltb24gV2FsbG5lclxuICogaHR0cDovL3NpbW9ud2FsbG5lci5hdC9wcm9qZWN0L2F0bW9zcGhlcmljLXNjYXR0ZXJpbmcvXG4gKlxuICogSW1wcm92ZWQgYnkgTWFydGluIFVwaXRpc1xuICogaHR0cDovL2JsZW5kZXJhcnRpc3RzLm9yZy9mb3J1bS9zaG93dGhyZWFkLnBocD8yNDU5NTQtcHJlZXRoYW1zLXNreS1pbXBlbWVudGF0aW9uLUhEUlxuICpcbiAqIFRocmVlLmpzIGludGVncmF0aW9uIGJ5IHp6ODUgaHR0cDovL3R3aXR0ZXIuY29tL2JsdXJzcGxpbmVcbiovXG5cbmNsYXNzIFNreSBleHRlbmRzIE1lc2gge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdFx0Y29uc3Qgc2hhZGVyID0gU2t5LlNreVNoYWRlcjtcblxuXHRcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKCB7XG5cdFx0XHRuYW1lOiAnU2t5U2hhZGVyJyxcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBzaGFkZXIuZnJhZ21lbnRTaGFkZXIsXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXG5cdFx0XHR1bmlmb3JtczogVW5pZm9ybXNVdGlscy5jbG9uZSggc2hhZGVyLnVuaWZvcm1zICksXG5cdFx0XHRzaWRlOiBCYWNrU2lkZSxcblx0XHRcdGRlcHRoV3JpdGU6IGZhbHNlXG5cdFx0fSApO1xuXG5cdFx0c3VwZXIoIG5ldyBCb3hHZW9tZXRyeSggMSwgMSwgMSApLCBtYXRlcmlhbCApO1xuXG5cdFx0dGhpcy5pc1NreSA9IHRydWU7XG5cblx0fVxuXG59XG5cblNreS5Ta3lTaGFkZXIgPSB7XG5cblx0dW5pZm9ybXM6IHtcblx0XHQndHVyYmlkaXR5JzogeyB2YWx1ZTogMiB9LFxuXHRcdCdyYXlsZWlnaCc6IHsgdmFsdWU6IDEgfSxcblx0XHQnbWllQ29lZmZpY2llbnQnOiB7IHZhbHVlOiAwLjAwNSB9LFxuXHRcdCdtaWVEaXJlY3Rpb25hbEcnOiB7IHZhbHVlOiAwLjggfSxcblx0XHQnc3VuUG9zaXRpb24nOiB7IHZhbHVlOiBuZXcgVmVjdG9yMygpIH0sXG5cdFx0J3VwJzogeyB2YWx1ZTogbmV3IFZlY3RvcjMoIDAsIDEsIDAgKSB9XG5cdH0sXG5cblx0dmVydGV4U2hhZGVyOiAvKiBnbHNsICovYFxuXHRcdHVuaWZvcm0gdmVjMyBzdW5Qb3NpdGlvbjtcblx0XHR1bmlmb3JtIGZsb2F0IHJheWxlaWdoO1xuXHRcdHVuaWZvcm0gZmxvYXQgdHVyYmlkaXR5O1xuXHRcdHVuaWZvcm0gZmxvYXQgbWllQ29lZmZpY2llbnQ7XG5cdFx0dW5pZm9ybSB2ZWMzIHVwO1xuXG5cdFx0dmFyeWluZyB2ZWMzIHZXb3JsZFBvc2l0aW9uO1xuXHRcdHZhcnlpbmcgdmVjMyB2U3VuRGlyZWN0aW9uO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bmZhZGU7XG5cdFx0dmFyeWluZyB2ZWMzIHZCZXRhUjtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFNO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bkU7XG5cblx0XHQvLyBjb25zdGFudHMgZm9yIGF0bW9zcGhlcmljIHNjYXR0ZXJpbmdcblx0XHRjb25zdCBmbG9hdCBlID0gMi43MTgyODE4Mjg0NTkwNDUyMzUzNjAyODc0NzEzNTI2NjI0OTc3NTcyNDcwOTM2OTk5NTk1Nztcblx0XHRjb25zdCBmbG9hdCBwaSA9IDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NTAyODg0MTk3MTY5O1xuXG5cdFx0Ly8gd2F2ZWxlbmd0aCBvZiB1c2VkIHByaW1hcmllcywgYWNjb3JkaW5nIHRvIHByZWV0aGFtXG5cdFx0Y29uc3QgdmVjMyBsYW1iZGEgPSB2ZWMzKCA2ODBFLTksIDU1MEUtOSwgNDUwRS05ICk7XG5cdFx0Ly8gdGhpcyBwcmUtY2FsY3VhdGlvbiByZXBsYWNlcyBvbGRlciBUb3RhbFJheWxlaWdoKHZlYzMgbGFtYmRhKSBmdW5jdGlvbjpcblx0XHQvLyAoOC4wICogcG93KHBpLCAzLjApICogcG93KHBvdyhuLCAyLjApIC0gMS4wLCAyLjApICogKDYuMCArIDMuMCAqIHBuKSkgLyAoMy4wICogTiAqIHBvdyhsYW1iZGEsIHZlYzMoNC4wKSkgKiAoNi4wIC0gNy4wICogcG4pKVxuXHRcdGNvbnN0IHZlYzMgdG90YWxSYXlsZWlnaCA9IHZlYzMoIDUuODA0NTQyOTk2MjYxMDkzRS02LCAxLjM1NjI5MTE0MTk4NDU2MzVFLTUsIDMuMDI2NTkwMjQ2ODgyNDg3NkUtNSApO1xuXG5cdFx0Ly8gbWllIHN0dWZmXG5cdFx0Ly8gSyBjb2VmZmljaWVudCBmb3IgdGhlIHByaW1hcmllc1xuXHRcdGNvbnN0IGZsb2F0IHYgPSA0LjA7XG5cdFx0Y29uc3QgdmVjMyBLID0gdmVjMyggMC42ODYsIDAuNjc4LCAwLjY2NiApO1xuXHRcdC8vIE1pZUNvbnN0ID0gcGkgKiBwb3coICggMi4wICogcGkgKSAvIGxhbWJkYSwgdmVjMyggdiAtIDIuMCApICkgKiBLXG5cdFx0Y29uc3QgdmVjMyBNaWVDb25zdCA9IHZlYzMoIDEuODM5OTkxODUxNDQzMzk3OEUxNCwgMi43Nzk4MDIzOTE5NjYwNTI4RTE0LCA0LjA3OTA0Nzk1NDM4NjEwOTRFMTQgKTtcblxuXHRcdC8vIGVhcnRoIHNoYWRvdyBoYWNrXG5cdFx0Ly8gY3V0b2ZmQW5nbGUgPSBwaSAvIDEuOTU7XG5cdFx0Y29uc3QgZmxvYXQgY3V0b2ZmQW5nbGUgPSAxLjYxMTA3MzE1NTY4NzA3MzQ7XG5cdFx0Y29uc3QgZmxvYXQgc3RlZXBuZXNzID0gMS41O1xuXHRcdGNvbnN0IGZsb2F0IEVFID0gMTAwMC4wO1xuXG5cdFx0ZmxvYXQgc3VuSW50ZW5zaXR5KCBmbG9hdCB6ZW5pdGhBbmdsZUNvcyApIHtcblx0XHRcdHplbml0aEFuZ2xlQ29zID0gY2xhbXAoIHplbml0aEFuZ2xlQ29zLCAtMS4wLCAxLjAgKTtcblx0XHRcdHJldHVybiBFRSAqIG1heCggMC4wLCAxLjAgLSBwb3coIGUsIC0oICggY3V0b2ZmQW5nbGUgLSBhY29zKCB6ZW5pdGhBbmdsZUNvcyApICkgLyBzdGVlcG5lc3MgKSApICk7XG5cdFx0fVxuXG5cdFx0dmVjMyB0b3RhbE1pZSggZmxvYXQgVCApIHtcblx0XHRcdGZsb2F0IGMgPSAoIDAuMiAqIFQgKSAqIDEwRS0xODtcblx0XHRcdHJldHVybiAwLjQzNCAqIGMgKiBNaWVDb25zdDtcblx0XHR9XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cblx0XHRcdHZlYzQgd29ybGRQb3NpdGlvbiA9IG1vZGVsTWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xuXHRcdFx0dldvcmxkUG9zaXRpb24gPSB3b3JsZFBvc2l0aW9uLnh5ejtcblxuXHRcdFx0Z2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xuXHRcdFx0Z2xfUG9zaXRpb24ueiA9IGdsX1Bvc2l0aW9uLnc7IC8vIHNldCB6IHRvIGNhbWVyYS5mYXJcblxuXHRcdFx0dlN1bkRpcmVjdGlvbiA9IG5vcm1hbGl6ZSggc3VuUG9zaXRpb24gKTtcblxuXHRcdFx0dlN1bkUgPSBzdW5JbnRlbnNpdHkoIGRvdCggdlN1bkRpcmVjdGlvbiwgdXAgKSApO1xuXG5cdFx0XHR2U3VuZmFkZSA9IDEuMCAtIGNsYW1wKCAxLjAgLSBleHAoICggc3VuUG9zaXRpb24ueSAvIDQ1MDAwMC4wICkgKSwgMC4wLCAxLjAgKTtcblxuXHRcdFx0ZmxvYXQgcmF5bGVpZ2hDb2VmZmljaWVudCA9IHJheWxlaWdoIC0gKCAxLjAgKiAoIDEuMCAtIHZTdW5mYWRlICkgKTtcblxuXHRcdFx0Ly8gZXh0aW5jdGlvbiAoYWJzb3JidGlvbiArIG91dCBzY2F0dGVyaW5nKVxuXHRcdFx0Ly8gcmF5bGVpZ2ggY29lZmZpY2llbnRzXG5cdFx0XHR2QmV0YVIgPSB0b3RhbFJheWxlaWdoICogcmF5bGVpZ2hDb2VmZmljaWVudDtcblxuXHRcdFx0Ly8gbWllIGNvZWZmaWNpZW50c1xuXHRcdFx0dkJldGFNID0gdG90YWxNaWUoIHR1cmJpZGl0eSApICogbWllQ29lZmZpY2llbnQ7XG5cblx0XHR9YCxcblxuXHRmcmFnbWVudFNoYWRlcjogLyogZ2xzbCAqL2Bcblx0XHR2YXJ5aW5nIHZlYzMgdldvcmxkUG9zaXRpb247XG5cdFx0dmFyeWluZyB2ZWMzIHZTdW5EaXJlY3Rpb247XG5cdFx0dmFyeWluZyBmbG9hdCB2U3VuZmFkZTtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFSO1xuXHRcdHZhcnlpbmcgdmVjMyB2QmV0YU07XG5cdFx0dmFyeWluZyBmbG9hdCB2U3VuRTtcblxuXHRcdHVuaWZvcm0gZmxvYXQgbWllRGlyZWN0aW9uYWxHO1xuXHRcdHVuaWZvcm0gdmVjMyB1cDtcblxuXHRcdGNvbnN0IHZlYzMgY2FtZXJhUG9zID0gdmVjMyggMC4wLCAwLjAsIDAuMCApO1xuXG5cdFx0Ly8gY29uc3RhbnRzIGZvciBhdG1vc3BoZXJpYyBzY2F0dGVyaW5nXG5cdFx0Y29uc3QgZmxvYXQgcGkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTUwMjg4NDE5NzE2OTtcblxuXHRcdGNvbnN0IGZsb2F0IG4gPSAxLjAwMDM7IC8vIHJlZnJhY3RpdmUgaW5kZXggb2YgYWlyXG5cdFx0Y29uc3QgZmxvYXQgTiA9IDIuNTQ1RTI1OyAvLyBudW1iZXIgb2YgbW9sZWN1bGVzIHBlciB1bml0IHZvbHVtZSBmb3IgYWlyIGF0IDI4OC4xNUsgYW5kIDEwMTNtYiAoc2VhIGxldmVsIC00NSBjZWxzaXVzKVxuXG5cdFx0Ly8gb3B0aWNhbCBsZW5ndGggYXQgemVuaXRoIGZvciBtb2xlY3VsZXNcblx0XHRjb25zdCBmbG9hdCByYXlsZWlnaFplbml0aExlbmd0aCA9IDguNEUzO1xuXHRcdGNvbnN0IGZsb2F0IG1pZVplbml0aExlbmd0aCA9IDEuMjVFMztcblx0XHQvLyA2NiBhcmMgc2Vjb25kcyAtPiBkZWdyZWVzLCBhbmQgdGhlIGNvc2luZSBvZiB0aGF0XG5cdFx0Y29uc3QgZmxvYXQgc3VuQW5ndWxhckRpYW1ldGVyQ29zID0gMC45OTk5NTY2NzY5NDY0NDg0NDM1NTM1NzQ2MTk5MDY5NzY0Nzg5MjY4NDg2OTI4NzM5MDA4NTkzMjQ7XG5cblx0XHQvLyAzLjAgLyAoIDE2LjAgKiBwaSApXG5cdFx0Y29uc3QgZmxvYXQgVEhSRUVfT1ZFUl9TSVhURUVOUEkgPSAwLjA1OTY4MzEwMzY1OTQ2MDc1O1xuXHRcdC8vIDEuMCAvICggNC4wICogcGkgKVxuXHRcdGNvbnN0IGZsb2F0IE9ORV9PVkVSX0ZPVVJQSSA9IDAuMDc5NTc3NDcxNTQ1OTQ3Njc7XG5cblx0XHRmbG9hdCByYXlsZWlnaFBoYXNlKCBmbG9hdCBjb3NUaGV0YSApIHtcblx0XHRcdHJldHVybiBUSFJFRV9PVkVSX1NJWFRFRU5QSSAqICggMS4wICsgcG93KCBjb3NUaGV0YSwgMi4wICkgKTtcblx0XHR9XG5cblx0XHRmbG9hdCBoZ1BoYXNlKCBmbG9hdCBjb3NUaGV0YSwgZmxvYXQgZyApIHtcblx0XHRcdGZsb2F0IGcyID0gcG93KCBnLCAyLjAgKTtcblx0XHRcdGZsb2F0IGludmVyc2UgPSAxLjAgLyBwb3coIDEuMCAtIDIuMCAqIGcgKiBjb3NUaGV0YSArIGcyLCAxLjUgKTtcblx0XHRcdHJldHVybiBPTkVfT1ZFUl9GT1VSUEkgKiAoICggMS4wIC0gZzIgKSAqIGludmVyc2UgKTtcblx0XHR9XG5cblx0XHR2b2lkIG1haW4oKSB7XG5cblx0XHRcdHZlYzMgZGlyZWN0aW9uID0gbm9ybWFsaXplKCB2V29ybGRQb3NpdGlvbiAtIGNhbWVyYVBvcyApO1xuXG5cdFx0XHQvLyBvcHRpY2FsIGxlbmd0aFxuXHRcdFx0Ly8gY3V0b2ZmIGFuZ2xlIGF0IDkwIHRvIGF2b2lkIHNpbmd1bGFyaXR5IGluIG5leHQgZm9ybXVsYS5cblx0XHRcdGZsb2F0IHplbml0aEFuZ2xlID0gYWNvcyggbWF4KCAwLjAsIGRvdCggdXAsIGRpcmVjdGlvbiApICkgKTtcblx0XHRcdGZsb2F0IGludmVyc2UgPSAxLjAgLyAoIGNvcyggemVuaXRoQW5nbGUgKSArIDAuMTUgKiBwb3coIDkzLjg4NSAtICggKCB6ZW5pdGhBbmdsZSAqIDE4MC4wICkgLyBwaSApLCAtMS4yNTMgKSApO1xuXHRcdFx0ZmxvYXQgc1IgPSByYXlsZWlnaFplbml0aExlbmd0aCAqIGludmVyc2U7XG5cdFx0XHRmbG9hdCBzTSA9IG1pZVplbml0aExlbmd0aCAqIGludmVyc2U7XG5cblx0XHRcdC8vIGNvbWJpbmVkIGV4dGluY3Rpb24gZmFjdG9yXG5cdFx0XHR2ZWMzIEZleCA9IGV4cCggLSggdkJldGFSICogc1IgKyB2QmV0YU0gKiBzTSApICk7XG5cblx0XHRcdC8vIGluIHNjYXR0ZXJpbmdcblx0XHRcdGZsb2F0IGNvc1RoZXRhID0gZG90KCBkaXJlY3Rpb24sIHZTdW5EaXJlY3Rpb24gKTtcblxuXHRcdFx0ZmxvYXQgclBoYXNlID0gcmF5bGVpZ2hQaGFzZSggY29zVGhldGEgKiAwLjUgKyAwLjUgKTtcblx0XHRcdHZlYzMgYmV0YVJUaGV0YSA9IHZCZXRhUiAqIHJQaGFzZTtcblxuXHRcdFx0ZmxvYXQgbVBoYXNlID0gaGdQaGFzZSggY29zVGhldGEsIG1pZURpcmVjdGlvbmFsRyApO1xuXHRcdFx0dmVjMyBiZXRhTVRoZXRhID0gdkJldGFNICogbVBoYXNlO1xuXG5cdFx0XHR2ZWMzIExpbiA9IHBvdyggdlN1bkUgKiAoICggYmV0YVJUaGV0YSArIGJldGFNVGhldGEgKSAvICggdkJldGFSICsgdkJldGFNICkgKSAqICggMS4wIC0gRmV4ICksIHZlYzMoIDEuNSApICk7XG5cdFx0XHRMaW4gKj0gbWl4KCB2ZWMzKCAxLjAgKSwgcG93KCB2U3VuRSAqICggKCBiZXRhUlRoZXRhICsgYmV0YU1UaGV0YSApIC8gKCB2QmV0YVIgKyB2QmV0YU0gKSApICogRmV4LCB2ZWMzKCAxLjAgLyAyLjAgKSApLCBjbGFtcCggcG93KCAxLjAgLSBkb3QoIHVwLCB2U3VuRGlyZWN0aW9uICksIDUuMCApLCAwLjAsIDEuMCApICk7XG5cblx0XHRcdC8vIG5pZ2h0c2t5XG5cdFx0XHRmbG9hdCB0aGV0YSA9IGFjb3MoIGRpcmVjdGlvbi55ICk7IC8vIGVsZXZhdGlvbiAtLT4geS1heGlzLCBbLXBpLzIsIHBpLzJdXG5cdFx0XHRmbG9hdCBwaGkgPSBhdGFuKCBkaXJlY3Rpb24ueiwgZGlyZWN0aW9uLnggKTsgLy8gYXppbXV0aCAtLT4geC1heGlzIFstcGkvMiwgcGkvMl1cblx0XHRcdHZlYzIgdXYgPSB2ZWMyKCBwaGksIHRoZXRhICkgLyB2ZWMyKCAyLjAgKiBwaSwgcGkgKSArIHZlYzIoIDAuNSwgMC4wICk7XG5cdFx0XHR2ZWMzIEwwID0gdmVjMyggMC4xICkgKiBGZXg7XG5cblx0XHRcdC8vIGNvbXBvc2l0aW9uICsgc29sYXIgZGlzY1xuXHRcdFx0ZmxvYXQgc3VuZGlzayA9IHNtb290aHN0ZXAoIHN1bkFuZ3VsYXJEaWFtZXRlckNvcywgc3VuQW5ndWxhckRpYW1ldGVyQ29zICsgMC4wMDAwMiwgY29zVGhldGEgKTtcblx0XHRcdEwwICs9ICggdlN1bkUgKiAxOTAwMC4wICogRmV4ICkgKiBzdW5kaXNrO1xuXG5cdFx0XHR2ZWMzIHRleENvbG9yID0gKCBMaW4gKyBMMCApICogMC4wNCArIHZlYzMoIDAuMCwgMC4wMDAzLCAwLjAwMDc1ICk7XG5cblx0XHRcdHZlYzMgcmV0Q29sb3IgPSBwb3coIHRleENvbG9yLCB2ZWMzKCAxLjAgLyAoIDEuMiArICggMS4yICogdlN1bmZhZGUgKSApICkgKTtcblxuXHRcdFx0Z2xfRnJhZ0NvbG9yID0gdmVjNCggcmV0Q29sb3IsIDEuMCApO1xuXG5cdFx0XHQjaW5jbHVkZSA8dG9uZW1hcHBpbmdfZnJhZ21lbnQ+XG5cdFx0XHQjaW5jbHVkZSA8ZW5jb2RpbmdzX2ZyYWdtZW50PlxuXG5cdFx0fWBcblxufTtcblxuZXhwb3J0IHsgU2t5IH07XG4iXSwibmFtZXMiOlsiVEhSRUUiLCJCbG9jayIsImJsb2NrVHlwZSIsImJsb2NrR29lbSIsIkJveEdlb21ldHJ5IiwiYmxvY2tNYXRlcmlhbHMiLCJCbG9ja01hdGVyaWFscyIsInJlbmRlckRpc3RhbmNlIiwiY2h1bmtTaXplIiwiZGVwdGgiLCJtYXRlcmlhbEFycmF5IiwiZ3Jhc3NNYXQiLCJtZXNoIiwiTWVzaCIsImNvdW50IiwicmFuZ2UiLCJiaW9tZXMiLCJkaXJ0TWF0IiwiY29iYmxlc3RvbmVNYXQiLCJvYWtMb2dNYXQiLCJvYWtMZWF2ZXNNYXQiLCJzYW5kTWF0Iiwid2F0ZXJNYXQiLCJsb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwibWFwIiwicGljIiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJsb2FkIiwic2lkZSIsIkRvdWJsZVNpZGUiLCJ0ZXh0dXJlT3BhY2l0eSIsImZpbGVVUkwiLCJkaXJlY3RvcnlQYXRoIiwiZnMiLCJyZWFkZGlyIiwiZXJyIiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImZpbGUiLCJpIiwibGVuZ3RoIiwidHJhbnNwYXJlbnQiLCJvcGFjaXR5IiwiQmxvY2tzIiwiZ3Jhc3MiLCJkaXJ0IiwiY29iYmxlc3RvbmUiLCJvYWtMb2ciLCJvYWtMZWF2ZXMiLCJzYW5kIiwid2F0ZXIiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIlBvaW50ZXJMb2NrQ29udHJvbHMiLCJDb250cm9scyIsInBsYXllciIsImtleUFjdGlvbk1hcCIsIktleVciLCJLZXlTIiwiS2V5QSIsIktleUQiLCJTcGFjZSIsIkRpZ2l0MSIsIkRpZ2l0MiIsIkRpZ2l0MyIsIkRpZ2l0NCIsImZwdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb3VzZSIsIlZlY3RvcjIiLCJyYXljYXN0ZXIiLCJSYXljYXN0ZXIiLCJpbml0Q29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlS2V5VXAiLCJsb2NrIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VVcCIsImtleSIsImFjdGlvbiIsImFjdGlvbkJ5S2V5IiwiY29kZSIsImFjdGlvbk1hcCIsImJ1dHRvbiIsIm1uIiwiY3JlYXRlTGFuZHNjYXBlIiwieEluZGV4IiwiekluZGV4IiwieiIsIngiLCJ5IiwicG9zIiwiVmVjdG9yMyIsInN0b3JhZ2UiLCJhZGRCbG9jayIsInR5cGUiLCJwb3NpdGlvbiIsIkNBTk5PTiIsImN0Iiwic2MiLCJQbGF5ZXIiLCJTcGhlcmVHZW9tZXRyeSIsIk1lc2hCYXNpY01hdGVyaWFsIiwicGxyR2VvbSIsInBsck1hdCIsImxlZnRDbGljayIsInJpZ2h0Q2xpY2siLCJtb3ZlRm9yd2FyZCIsIm1vdmVCYWNrd2FyZCIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwianVtcCIsInRleHR1cmUxIiwidGV4dHVyZTMiLCJ0ZXh0dXJlNCIsInRleHR1cmU1IiwiY29udHJvbHMiLCJtYXNzIiwibW92ZW1lbnRTcGVlZCIsImp1bXBGb3JjZSIsInBsYXllclNoYXBlIiwiU3BoZXJlIiwicGxheWVyQm9keSIsIkJvZHkiLCJhZGRTaGFwZSIsImNvcHkiLCJ1cGRhdGVQb3NpdGlvbiIsInVzZUFjdGlvbiIsIk1hdGgiLCJhYnMiLCJ2ZWxvY2l0eSIsInNldCIsInNldEZyb21DYW1lcmEiLCJpbnRlcnNlY3RzIiwiaW50ZXJzZWN0T2JqZWN0cyIsInNjZW5lIiwiY2hpbGRyZW4iLCJwbGFjZUJsb2NrIiwiYmxvY2tzIiwidXNlU3RvcmFnZSIsInJlbW92ZUJsb2NrIiwiZGlyZWN0aW9uIiwiZnJvbnRWZWN0b3IiLCJzaWRlVmVjdG9yIiwiYWRkVmVjdG9ycyIsIm5vcm1hbGl6ZSIsIm11bHRpcGx5U2NhbGFyIiwiYXBwbHlFdWxlciIsInJvdGF0aW9uIiwiYmxvY2siLCJvYmplY3QiLCJub3JtYWwiLCJmYWNlIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsInBvd2VyUHJlZmVyZW5jZSIsImFudGlhbGlhcyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwidG9uZU1hcHBpbmciLCJBQ0VTRmlsbWljVG9uZU1hcHBpbmciLCJ0b25lTWFwcGluZ0V4cG9zdXJlIiwic2hhZG93TWFwIiwiZW5hYmxlZCIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsImNtIiwicmQiLCJsZCIsIkdVSSIsIlNreSIsIlNjZW5lIiwic2t5Iiwic3VuIiwiaW5pdCIsImluaXRTa3kiLCJzY2FsZSIsInNldFNjYWxhciIsImFkZCIsImVmZmVjdENvbnRyb2xsZXIiLCJ0dXJiaWRpdHkiLCJyYXlsZWlnaCIsIm1pZUNvZWZmaWNpZW50IiwibWllRGlyZWN0aW9uYWxHIiwiZWxldmF0aW9uIiwiYXppbXV0aCIsImV4cG9zdXJlIiwiZ3VpQ2hhbmdlZCIsInVuaWZvcm1zIiwibWF0ZXJpYWwiLCJ2YWx1ZSIsInBoaSIsIk1hdGhVdGlscyIsImRlZ1RvUmFkIiwidGhldGEiLCJzZXRGcm9tU3BoZXJpY2FsQ29vcmRzIiwiZ3VpIiwib25DaGFuZ2UiLCJoZWxwZXIiLCJHcmlkSGVscGVyIiwicG9pbnRMaWdodF8xIiwiUG9pbnRMaWdodCIsInBvaW50TGlnaHRfMiIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsInJlbmRlciIsIkJMSyIsIm5hbm9pZCIsIlN0b3JhZ2UiLCJpbml0U3RvcmUiLCJ0eXAiLCJwdXNoIiwiQmxvY2tzQXJyYXkiLCJtZXNoZXMiLCJib2RpZXMiLCJ3b3JsZCIsInJlbmRlckxpc3QiLCJpbml0QmxvY2tzIiwic3RvcmVCbG9jayIsImJsb2NrU2hhcGUiLCJCb3giLCJWZWMzIiwiYmxvY2tCb2R5IiwiYWRkQm9keSIsIlBMUiIsInN0IiwiU3RhdHMiLCJjbG9jayIsIkNsb2NrIiwic3RhdHMiLCJpbml0VGhyZWUiLCJpbml0Q2Fubm9uIiwiaW5pdE1pbmVjcmFmdCIsInJlbmRlckluZm8iLCJHYW1lTG9vcCIsInNob3dQYW5lbCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsIldvcmxkIiwiZ3Jhdml0eSIsImluZm8iLCJ0cmlhbmdsZXMiLCJjYWxscyIsIm1lbW9yeSIsInRleHR1cmVzIiwiZ2VvbWV0cmllcyIsInN5bmNocm9uaXNlZEJvZGllc01lc2hlcyIsInF1YXRlcm5pb24iLCJiZWdpbiIsImRlbHRhVGltZSIsImdldERlbHRhIiwidXBkYXRlUGxheWVyIiwiZml4ZWRTdGVwIiwidXBkYXRlIiwiZW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==