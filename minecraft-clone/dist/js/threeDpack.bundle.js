"use strict";
(self["webpackChunkminecraft_clone"] = self["webpackChunkminecraft_clone"] || []).push([["threeDpack"],{

/***/ "./src/js/Block.js":
/*!*************************!*\
  !*** ./src/js/Block.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controls": () => (/* binding */ Controls)
/* harmony export */ });
/* harmony import */ var _pages_css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/css/main.css */ "./src/pages/css/main.css");
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
        if (_this.fpv.isLocked) {
          _this.handleMouseDown(event);
        } else {
          _this.fpv.lock();
        }
      });
      document.addEventListener("mouseup", function (event) {
        //console.log(event);

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

      // if (navigator.keyboard) {
      //   const keyboard = navigator.keyboard;
      //   keyboard.getLayoutMap().then((keyboardLayoutMap) => {
      //     //const upKey = keyboardLayoutMap.get("KeyW");
      //     keyboardLayoutMap.forEach((key) => {
      //       console.log(key);
      //     });
      //     console.log(Object.keys(keyboardLayoutMap));
      //     console.log(Object.values(keyboardLayoutMap));
      //     window.alert(`Press ${upKey} to move up.`);
      //   });
      // } else {
      //   // Do something else.
      // }
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

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");
/* harmony import */ var _Controls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controls.js */ "./src/js/Controls.js");
/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene.js */ "./src/js/Scene.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
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
      this.camera.position.copy(this.mesh.position);
    }
  }, {
    key: "getIntersectObj",
    value: function getIntersectObj() {
      this.controls.raycaster.setFromCamera(this.controls.mouse, this.camera);
      var intersects = this.controls.raycaster.intersectObjects(_Scene_js__WEBPACK_IMPORTED_MODULE_1__.scene.children);
      if (intersects.length > 0) {
        return this.objectIsBlock(intersects[0]);
      } else {
        return undefined;
      }
    }
  }, {
    key: "objectIsBlock",
    value: function objectIsBlock(object) {
      try {
        if (object.distance <= 6 && object.object.isBlock) {
          return object;
        }
      } catch (error) {
        console.log(error);
        return undefined;
      }
    }
  }, {
    key: "useAction",
    value: function useAction() {
      if (this.actionMap["jump"] && Math.abs(this.playerBody.velocity.y) < 0.05) {
        this.playerBody.velocity.set(0, this.jumpForce, 0);
      }
      if (this.actionMap["rightClick"]) {
        var intersectObj = this.getIntersectObj();
        if (intersectObj !== undefined) {
          this.placeBlock(intersectObj, "cobblestone");
        }
      }
      if (this.actionMap["leftClick"]) {
        var _intersectObj = this.getIntersectObj();
        if (_intersectObj !== undefined) {
          this.removeBlock(_intersectObj);
        }
      }
      var direction = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
      var frontVector = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, (this.actionMap["moveBackward"] ? 1 : 0) - (this.actionMap["moveForward"] ? 1 : 0));
      var sideVector = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3((this.actionMap["moveRight"] ? 1 : 0) - (this.actionMap["moveLeft"] ? 1 : 0), 0, 0);
      direction.addVectors(frontVector, sideVector);
      direction.normalize();
      direction.multiplyScalar(this.movementSpeed);
      //this.controls.fpv.getDirection(direction);
      direction.applyEuler(this.camera.rotation);
      this.playerBody.velocity.set(direction.x, this.playerBody.velocity.y, direction.z);
    }
  }, {
    key: "placeBlock",
    value: function placeBlock(block, blockType) {
      var position = new three__WEBPACK_IMPORTED_MODULE_3__.Vector3();
      position.addVectors(block.object.position, block.face.normal);
      _main__WEBPACK_IMPORTED_MODULE_2__.blocks.addBlock({
        type: blockType,
        position: position
      });
      this.actionMap["rightClick"] = false;
      return;
    }
  }, {
    key: "removeBlock",
    value: function removeBlock(block) {
      _main__WEBPACK_IMPORTED_MODULE_2__.blocks.removeBlock({
        block: block,
        position: block.object.position
      });
      this.actionMap["leftClick"] = false;
      return;
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scene": () => (/* binding */ scene)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Controls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controls.js */ "./src/js/Controls.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Renderer.js */ "./src/js/Renderer.js");
/* harmony import */ var _Landscape_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Landscape.js */ "./src/js/Landscape.js");
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
  }

  // const gui = new GUI();

  // gui.add(effectController, "turbidity", 0.0, 20.0, 0.1).onChange(guiChanged);
  // gui.add(effectController, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);
  // gui
  //   .add(effectController, "mieCoefficient", 0.0, 0.1, 0.001)
  //   .onChange(guiChanged);
  // gui
  //   .add(effectController, "mieDirectionalG", 0.0, 1, 0.001)
  //   .onChange(guiChanged);
  // gui.add(effectController, "elevation", 0, 90, 0.1).onChange(guiChanged);
  // gui.add(effectController, "azimuth", -180, 180, 0.1).onChange(guiChanged);
  // gui.add(effectController, "exposure", 0, 1, 0.0001).onChange(guiChanged);
  // gui.visible = false;
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlocksArray": () => (/* binding */ BlocksArray),
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _pages_css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/css/main.css */ "./src/pages/css/main.css");
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
    key: "filterByPosition",
    value: function filterByPosition(_ref3) {
      var blocksArray = _ref3.blocksArray,
        position = _ref3.position;
      //console.log("filter By Position");
      var newArray = blocksArray.filter(function (block) {
        if (block.position.x === position.x && block.position.y === position.y && block.position.z === position.z) {
          // console.log(Object.values(block));
          return false;
        } else {
          return true;
        }
      });
      return newArray;
    }
  }, {
    key: "findByPosition",
    value: function findByPosition(_ref4) {
      var blocksArray = _ref4.blocksArray,
        position = _ref4.position;
      var object = blocksArray.find(function (block) {
        if (block.position.x === position.x && block.position.y === position.y && block.position.z === position.z) {
          return true;
        } else {
          return false;
        }
      });
      // console.log("obj " + Object.values(object));
      return object;
    }
  }, {
    key: "addBlock",
    value: function addBlock(_ref5) {
      var type = _ref5.type,
        position = _ref5.position;
      console.log("blocksArray ADD");
      // console.log("position 2 " + Object.values(position));
      var block = new _Block__WEBPACK_IMPORTED_MODULE_1__.Block({
        blockType: type
      });
      var mesh = block.mesh;
      mesh.position.set(position.x, position.y, position.z);
      var blockShape = new cannon_es__WEBPACK_IMPORTED_MODULE_3__.Box(new cannon_es__WEBPACK_IMPORTED_MODULE_3__.Vec3(0.5, 0.5, 0.5));
      var blockBody = new cannon_es__WEBPACK_IMPORTED_MODULE_3__.Body({
        mass: 0
      });
      blockBody.addShape(blockShape);
      blockBody.position.set(position.x, position.y, position.z);
      mesh.isBlock = true;
      this.meshes.push(mesh);
      this.scene.add(mesh);
      this.bodies.push(blockBody);
      this.world.addBody(blockBody);
      return;
    }
  }, {
    key: "removeBlock",
    value: function removeBlock(_ref6) {
      var block = _ref6.block,
        position = _ref6.position;
      console.log("blocksArray RM");
      var blockBody = this.findByPosition({
        blocksArray: this.bodies,
        position: position
      });
      var blockMesh = this.scene.getObjectById(block.object.id);
      this.meshes = this.filterByPosition({
        blocksArray: this.meshes,
        position: position
      });
      this.bodies = this.filterByPosition({
        blocksArray: this.bodies,
        position: position
      });
      this.storage.blocks = this.filterByPosition({
        blocksArray: this.storage.blocks,
        position: position
      });
      this.world.removeBody(blockBody);
      this.scene.remove(blockMesh);
      // blockMesh.geometry.dispose();
      // blockMesh.material.dispose();
      // blockMesh = undefined;
      return;
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
        mesh.isBlock = true;
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blocks": () => (/* binding */ blocks),
/* harmony export */   "bodies": () => (/* binding */ bodies),
/* harmony export */   "meshes": () => (/* binding */ meshes),
/* harmony export */   "scene": () => (/* binding */ scene),
/* harmony export */   "storage": () => (/* binding */ storage),
/* harmony export */   "world": () => (/* binding */ world)
/* harmony export */ });
/* harmony import */ var _pages_css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/css/main.css */ "./src/pages/css/main.css");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene.js */ "./src/js/Scene.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Camera.js */ "./src/js/Camera.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Renderer.js */ "./src/js/Renderer.js");
/* harmony import */ var _Landscape_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Landscape.js */ "./src/js/Landscape.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Player.js */ "./src/js/Player.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Storage */ "./src/js/Storage.js");
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
  // stats = new Stats();
  // stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  // document.body.appendChild(stats.dom);
}
function initCannon() {
  // Setup world
  world = new cannon_es__WEBPACK_IMPORTED_MODULE_8__.World();
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
      x: 3,
      y: 2,
      z: 3
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
  // stats.begin();
  var deltaTime = clock.getDelta();

  //update game
  player.updatePlayer();

  // Step the physics world
  world.fixedStep();
  synchronisedBodiesMeshes();
  renderer.render(scene, camera);

  // stats.update();
  // stats.end();
  requestAnimationFrame(GameLoop);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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

/***/ "./src/pages/css/main.css":
/*!********************************!*\
  !*** ./src/pages/css/main.css ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1678471379609
      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtBQUMzQixnQkFBZ0IsVUFBVTtBQUMxQixzQkFBc0IsY0FBYztBQUNwQyx1QkFBdUIsWUFBWTtBQUNuQyxtQkFBbUIsV0FBVywwQ0FBTyxJQUFJO0FBQ3pDLFVBQVUsV0FBVywwQ0FBTztBQUM1QixFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvQmxvY2suanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL0xhbmRzY2FwZS5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvUGxheWVyLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9qcy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9zcmMvanMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ub3JtYWxpemUtdXJsLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL3NyYy9wYWdlcy9jc3MvbWFpbi5jc3M/MmJiMiIsIndlYnBhY2s6Ly9taW5lY3JhZnQtY2xvbmUvLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWluZWNyYWZ0LWNsb25lLy4vbm9kZV9tb2R1bGVzL3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9Qb2ludGVyTG9ja0NvbnRyb2xzLmpzIiwid2VicGFjazovL21pbmVjcmFmdC1jbG9uZS8uL25vZGVfbW9kdWxlcy90aHJlZS9leGFtcGxlcy9qc20vb2JqZWN0cy9Ta3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxvY2sge1xyXG4gIGNvbnN0cnVjdG9yKHsgYmxvY2tUeXBlIH0pIHtcclxuICAgIGNvbnN0IGJsb2NrR29lbSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuICAgIGNvbnN0IGJsb2NrTWF0ZXJpYWxzID0gbmV3IEJsb2NrTWF0ZXJpYWxzKCk7XHJcbiAgICBjb25zdCByZW5kZXJEaXN0YW5jZSA9IDQ7XHJcbiAgICBjb25zdCBjaHVua1NpemUgPSAxMDtcclxuICAgIGNvbnN0IGRlcHRoID0gNTtcclxuXHJcbiAgICB0aGlzLmJsb2NrR29lbSA9IGJsb2NrR29lbTtcclxuICAgIHRoaXMuYmxvY2tNYXRlcmlhbHMgPSBibG9ja01hdGVyaWFscztcclxuICAgIHRoaXMucmVuZGVyRGlzdGFuY2UgPSByZW5kZXJEaXN0YW5jZTtcclxuICAgIHRoaXMuY2h1bmtTaXplID0gY2h1bmtTaXplO1xyXG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xyXG5cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJncmFzc1wiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy5ncmFzc01hdDtcclxuICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5ncmFzc01hdCk7XHJcblxyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIl07XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwiZGlydFwiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy5kaXJ0TWF0O1xyXG4gICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLmRpcnRNYXQpO1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIl07XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwiY29iYmxlc3RvbmVcIikge1xyXG4gICAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgdGhpcy5tYXRlcmlhbEFycmF5ID0gYmxvY2tNYXRlcmlhbHMuY29iYmxlc3RvbmVNYXQ7XHJcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMuY29iYmxlc3RvbmVNYXQpO1xyXG4gICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgdGhpcy5yYW5nZSA9IFswXTtcclxuICAgICAgdGhpcy5iaW9tZXMgPSBbXCJwbGFpbnNcIiwgXCJkZXNlcnRcIl07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcIm9ha0xvZ1wiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy5vYWtMb2dNYXQ7XHJcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMub2FrTG9nTWF0KTtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSBbMF07XHJcbiAgICAgIHRoaXMuYmlvbWVzID0gW1wicGxhaW5zXCJdO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcIm9ha0xlYXZlc1wiKSB7XHJcbiAgICAgIHRoaXMuYmxvY2tUeXBlID0gYmxvY2tUeXBlO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsQXJyYXkgPSBibG9ja01hdGVyaWFscy5vYWtMZWF2ZXNNYXQ7XHJcbiAgICAgIHRoaXMubWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsb2NrR29lbSwgYmxvY2tNYXRlcmlhbHMub2FrTGVhdmVzTWF0KTtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSBbMF07XHJcbiAgICAgIHRoaXMuYmlvbWVzID0gW1wicGxhaW5zXCJdO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcInNhbmRcIikge1xyXG4gICAgICB0aGlzLmJsb2NrVHlwZSA9IGJsb2NrVHlwZTtcclxuICAgICAgdGhpcy5tYXRlcmlhbEFycmF5ID0gYmxvY2tNYXRlcmlhbHMuc2FuZE1hdDtcclxuICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goYmxvY2tHb2VtLCBibG9ja01hdGVyaWFscy5zYW5kTWF0KTtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSBbMF07XHJcbiAgICAgIHRoaXMuYmlvbWVzID0gW1wicGxhaW5zXCJdO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcIndhdGVyXCIpIHtcclxuICAgICAgdGhpcy5ibG9ja1R5cGUgPSBibG9ja1R5cGU7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWxBcnJheSA9IGJsb2NrTWF0ZXJpYWxzLndhdGVyTWF0O1xyXG4gICAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaChibG9ja0dvZW0sIGJsb2NrTWF0ZXJpYWxzLndhdGVyTWF0KTtcclxuICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSBbMF07XHJcbiAgICAgIHRoaXMuYmlvbWVzID0gW1wicGxhaW5zXCJdO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrTWF0ZXJpYWxzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xyXG5cclxuICAgIHRoaXMuZGlydE1hdCA9IFtcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZGlydC9kaXJ0LnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9kaXJ0L2RpcnQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2RpcnQvZGlydC5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvYmJsZXN0b25lTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9jb2JibGVzdG9uZS9jb2JibGVzdG9uZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvY29iYmxlc3RvbmUvY29iYmxlc3RvbmUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2NvYmJsZXN0b25lL2NvYmJsZXN0b25lLnBuZ1wiLFxyXG4gICAgXS5tYXAoKHBpYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcclxuICAgICAgICBtYXA6IGxvYWRlci5sb2FkKHBpYyksXHJcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMub2FrTG9nTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMb2cvc2lkZS5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTG9nL3NpZGUucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy90b3AuanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9ib3R0b20uanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL29ha0xvZy9zaWRlLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9vYWtMb2cvc2lkZS5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9ha0xlYXZlc01hdCA9IFtcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvb2FrTGVhdmVzL29ha0xlYXZlcy5wbmdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNhbmRNYXQgPSBbXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3NhbmQvc2FuZC5wbmdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvc2FuZC9zYW5kLnBuZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9zYW5kL3NhbmQucG5nXCIsXHJcbiAgICBdLm1hcCgocGljKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIG1hcDogbG9hZGVyLmxvYWQocGljKSxcclxuICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy53YXRlck1hdCA9IFtcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvd2F0ZXIvd2F0ZXIuanBlZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS93YXRlci93YXRlci5qcGVnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL3dhdGVyL3dhdGVyLmpwZWdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdyYXNzTWF0ID0gW1xyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy9zaWRlLmpwZ1wiLFxyXG4gICAgICBcIi9hc3NldHMvdGV4dHVyZS9ncmFzcy90b3AuanBnXCIsXHJcbiAgICAgIFwiL2Fzc2V0cy90ZXh0dXJlL2dyYXNzL2JvdHRvbS5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIixcclxuICAgICAgXCIvYXNzZXRzL3RleHR1cmUvZ3Jhc3Mvc2lkZS5qcGdcIixcclxuICAgIF0ubWFwKChwaWMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgICAgbWFwOiBsb2FkZXIubG9hZChwaWMpLFxyXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZXh0dXJlT3BhY2l0eSgpO1xyXG4gICAgLy90aGlzLnRleHR1cmVJbWFnZXNMb2FkZXIoXCIvYXNzZXRzL3RleHR1cmUvZ3Jhc3NcIik7XHJcbiAgfVxyXG4gIHRleHR1cmVJbWFnZXNMb2FkZXIoZmlsZVVSTCkge1xyXG4gICAgLy9qb2luaW5nIHBhdGggb2YgZGlyZWN0b3J5XHJcbiAgICBjb25zdCBkaXJlY3RvcnlQYXRoID0gZmlsZVVSTDtcclxuICAgIC8vcGFzc3NpbmcgZGlyZWN0b3J5UGF0aCBhbmQgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgIGZzLnJlYWRkaXIoZGlyZWN0b3J5UGF0aCwgZnVuY3Rpb24gKGVyciwgZmlsZXMpIHtcclxuICAgICAgLy9oYW5kbGluZyBlcnJvclxyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIHNjYW4gZGlyZWN0b3J5OiBcIiArIGVycik7XHJcbiAgICAgIH1cclxuICAgICAgLy9saXN0aW5nIGFsbCBmaWxlcyB1c2luZyBmb3JFYWNoXHJcbiAgICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICAvLyBEbyB3aGF0ZXZlciB5b3Ugd2FudCB0byBkbyB3aXRoIHRoZSBmaWxlXHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsZTtcclxuICB9XHJcbiAgdGV4dHVyZU9wYWNpdHkoKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMud2F0ZXJNYXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGkgPT0gMiB8fCBpID09IDMpIHtcclxuICAgICAgICAvLyB0b3AgYW5kIGJvdHRvbVxyXG4gICAgICAgIHRoaXMud2F0ZXJNYXRbaV0udHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2F0ZXJNYXRbaV0ub3BhY2l0eSA9IDAuNztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBzaWRlc1xyXG4gICAgICAgIHRoaXMud2F0ZXJNYXRbaV0udHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2F0ZXJNYXRbaV0ub3BhY2l0eSA9IDAuNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2NrcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmdyYXNzID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcImdyYXNzXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpcnQgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwiZGlydFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb2JibGVzdG9uZSA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJjb2JibGVzdG9uZVwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vYWtMb2cgPSBuZXcgQmxvY2soe1xyXG4gICAgICBibG9ja1R5cGU6IFwib2FrTG9nXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9ha0xlYXZlcyA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJvYWtMZWF2ZXNcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2FuZCA9IG5ldyBCbG9jayh7XHJcbiAgICAgIGJsb2NrVHlwZTogXCJzYW5kXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLndhdGVyID0gbmV3IEJsb2NrKHtcclxuICAgICAgYmxvY2tUeXBlOiBcIndhdGVyXCIsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0QmxvY2tCeVR5cGUoYmxvY2tUeXBlKSB7XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwiZ3Jhc3NcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5ncmFzcztcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJkaXJ0XCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGlydDtcclxuICAgIH1cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJjb2JibGVzdG9uZVwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvYmJsZXN0b25lO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChibG9ja1R5cGUgPT0gXCJvYWtMb2dcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5vYWtMb2c7XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvY2tUeXBlID09IFwib2FrTGVhdmVzXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub2FrTGVhdmVzO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcInNhbmRcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5zYW5kO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrVHlwZSA9PSBcIndhdGVyXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud2F0ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcclxuICA3NSxcclxuICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAwLjEsXHJcbiAgMTAwMFxyXG4pO1xyXG4iLCJpbXBvcnQgXCIuLi9wYWdlcy9jc3MvbWFpbi5jc3NcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcblxyXG5pbXBvcnQgeyBQb2ludGVyTG9ja0NvbnRyb2xzIH0gZnJvbSBcInRocmVlL2FkZG9ucy9jb250cm9scy9Qb2ludGVyTG9ja0NvbnRyb2xzLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbHMge1xyXG4gIGNvbnN0cnVjdG9yKHsgcGxheWVyIH0pIHtcclxuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuICAgIHRoaXMua2V5QWN0aW9uTWFwID0ge1xyXG4gICAgICAwOiBcImxlZnRDbGlja1wiLFxyXG4gICAgICAyOiBcInJpZ2h0Q2xpY2tcIixcclxuICAgICAgS2V5VzogXCJtb3ZlRm9yd2FyZFwiLFxyXG4gICAgICBLZXlTOiBcIm1vdmVCYWNrd2FyZFwiLFxyXG4gICAgICBLZXlBOiBcIm1vdmVMZWZ0XCIsXHJcbiAgICAgIEtleUQ6IFwibW92ZVJpZ2h0XCIsXHJcbiAgICAgIFNwYWNlOiBcImp1bXBcIixcclxuICAgICAgRGlnaXQxOiBcInRleHR1cmUxXCIsXHJcbiAgICAgIERpZ2l0MjogXCJ0ZXh0dXJlM1wiLFxyXG4gICAgICBEaWdpdDM6IFwidGV4dHVyZTRcIixcclxuICAgICAgRGlnaXQ0OiBcInRleHR1cmU1XCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZnB2ID0gbmV3IFBvaW50ZXJMb2NrQ29udHJvbHMoXHJcbiAgICAgIHRoaXMucGxheWVyLmNhbWVyYSxcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZ1wiKVxyXG4gICAgKTtcclxuICAgIHRoaXMubW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigwLCAwKTtcclxuICAgIHRoaXMucmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xyXG4gICAgdGhpcy5pbml0Q29udHJvbHMoKTtcclxuICB9XHJcbiAgaW5pdENvbnRyb2xzKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlS2V5RG93bihldmVudCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVLZXlVcChldmVudCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICBpZiAodGhpcy5mcHYuaXNMb2NrZWQpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlRG93bihldmVudCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mcHYubG9jaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGV2ZW50KTtcclxuXHJcbiAgICAgIHRoaXMuaGFuZGxlTW91c2VVcChldmVudCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZnB2LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2NrXCIsICgpID0+IHtcclxuICAgICAgLy9tZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcImxvY2tlZFwiKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5mcHYuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9ja1wiLCAoKSA9PiB7XHJcbiAgICAgIC8vbWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKFwidW5sb2NrZWRcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpZiAobmF2aWdhdG9yLmtleWJvYXJkKSB7XHJcbiAgICAvLyAgIGNvbnN0IGtleWJvYXJkID0gbmF2aWdhdG9yLmtleWJvYXJkO1xyXG4gICAgLy8gICBrZXlib2FyZC5nZXRMYXlvdXRNYXAoKS50aGVuKChrZXlib2FyZExheW91dE1hcCkgPT4ge1xyXG4gICAgLy8gICAgIC8vY29uc3QgdXBLZXkgPSBrZXlib2FyZExheW91dE1hcC5nZXQoXCJLZXlXXCIpO1xyXG4gICAgLy8gICAgIGtleWJvYXJkTGF5b3V0TWFwLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgLy8gICAgICAgY29uc29sZS5sb2coa2V5KTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhrZXlib2FyZExheW91dE1hcCkpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKE9iamVjdC52YWx1ZXMoa2V5Ym9hcmRMYXlvdXRNYXApKTtcclxuICAgIC8vICAgICB3aW5kb3cuYWxlcnQoYFByZXNzICR7dXBLZXl9IHRvIG1vdmUgdXAuYCk7XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgLy8gRG8gc29tZXRoaW5nIGVsc2UuXHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBhY3Rpb25CeUtleShrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLmtleUFjdGlvbk1hcFtrZXldO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5RG93bihldmVudCkge1xyXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25CeUtleShldmVudC5jb2RlKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJrZXlEb3duIFwiICsgZXZlbnQpO1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICB0aGlzLnBsYXllci5hY3Rpb25NYXBbYWN0aW9uXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYWN0aW9ucyBrZXlEb3duXCIsIHRoaXMucGxheWVyLmFjdGlvbk1hcCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlVcChldmVudCkge1xyXG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3Rpb25CeUtleShldmVudC5jb2RlKTtcclxuICAgIC8vY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICB0aGlzLnBsYXllci5hY3Rpb25NYXBbYWN0aW9uXSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhcImFjdGlvbnMgXCIsIHRoaXMucGxheWVyLmFjdGlvbk1hcCk7XHJcbiAgfVxyXG4gIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xyXG4gICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aW9uQnlLZXkoZXZlbnQuYnV0dG9uKTtcclxuICAgIC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuYWN0aW9uTWFwW2FjdGlvbl0gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVNb3VzZVVwKGV2ZW50KSB7XHJcbiAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGlvbkJ5S2V5KGV2ZW50LmJ1dHRvbik7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmFjdGlvbk1hcFthY3Rpb25dID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgbW4gZnJvbSBcIi4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxhbmRzY2FwZSgpIHtcclxuICAvL2NvbnNvbGUubG9nKFwiaW4gbGFuZHNjYXBlXCIpO1xyXG4gIGZvciAodmFyIHhJbmRleCA9IDA7IHhJbmRleCA8IDU7IHhJbmRleCsrKSB7XHJcbiAgICBmb3IgKHZhciB6SW5kZXggPSAwOyB6SW5kZXggPCA1OyB6SW5kZXgrKykge1xyXG4gICAgICBjb25zdCB6ID0gekluZGV4O1xyXG4gICAgICBjb25zdCB4ID0geEluZGV4O1xyXG4gICAgICBjb25zdCB5ID0gMDtcclxuICAgICAgY29uc3QgcG9zID0gbmV3IFRIUkVFLlZlY3RvcjMoeCwgeSwgeik7XHJcbiAgICAgIG1uLnN0b3JhZ2UuYWRkQmxvY2soeyB0eXBlOiBcImdyYXNzXCIsIHBvc2l0aW9uOiBwb3MgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgKiBhcyBDQU5OT04gZnJvbSBcImNhbm5vbi1lc1wiO1xyXG5pbXBvcnQgKiBhcyBjdCBmcm9tIFwiLi9Db250cm9scy5qc1wiO1xyXG5pbXBvcnQgKiBhcyBzYyBmcm9tIFwiLi9TY2VuZS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBtbiBmcm9tIFwiLi9tYWluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICBwbHJHZW9tID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEuNSk7XHJcbiAgcGxyTWF0ID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCk7XHJcbiAgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRoaXMucGxyR2VvbSwgdGhpcy5wbHJNYXQpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7IGNhbWVyYSwgbWVzaCwgcG9zaXRpb24gfSkge1xyXG4gICAgdGhpcy5hY3Rpb25NYXAgPSB7XHJcbiAgICAgIGxlZnRDbGljazogZmFsc2UsXHJcbiAgICAgIHJpZ2h0Q2xpY2s6IGZhbHNlLFxyXG4gICAgICBtb3ZlRm9yd2FyZDogZmFsc2UsXHJcbiAgICAgIG1vdmVCYWNrd2FyZDogZmFsc2UsXHJcbiAgICAgIG1vdmVMZWZ0OiBmYWxzZSxcclxuICAgICAgbW92ZVJpZ2h0OiBmYWxzZSxcclxuICAgICAganVtcDogZmFsc2UsXHJcbiAgICAgIHRleHR1cmUxOiBmYWxzZSxcclxuICAgICAgdGV4dHVyZTM6IGZhbHNlLFxyXG4gICAgICB0ZXh0dXJlNDogZmFsc2UsXHJcbiAgICAgIHRleHR1cmU1OiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcbiAgICB0aGlzLmNvbnRyb2xzID0gbmV3IGN0LkNvbnRyb2xzKHsgcGxheWVyOiB0aGlzIH0pO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xyXG4gICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2godGhpcy5wbHJHZW9tLCB0aGlzLnBsck1hdCk7XHJcbiAgICB0aGlzLm1hc3MgPSA3MDtcclxuICAgIHRoaXMubW92ZW1lbnRTcGVlZCA9IDQuNTtcclxuICAgIHRoaXMuanVtcEZvcmNlID0gNTtcclxuICAgIHRoaXMucGxheWVyU2hhcGUgPSBuZXcgQ0FOTk9OLlNwaGVyZSgxLjUpO1xyXG4gICAgdGhpcy5wbGF5ZXJCb2R5ID0gbmV3IENBTk5PTi5Cb2R5KHsgbWFzczogdGhpcy5tYXNzIH0pO1xyXG4gICAgdGhpcy5wbGF5ZXJCb2R5LmFkZFNoYXBlKHRoaXMucGxheWVyU2hhcGUpO1xyXG4gICAgdGhpcy5wbGF5ZXJCb2R5LnBvc2l0aW9uLmNvcHkodGhpcy5wb3NpdGlvbik7XHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5jb3B5KHRoaXMucG9zaXRpb24pO1xyXG5cclxuICAgIC8vdGhpcy51cGRhdGVQbGF5ZXIoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBsYXllcigpIHtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIHRoaXMudXNlQWN0aW9uKCk7XHJcbiAgfVxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24uY29weSh0aGlzLm1lc2gucG9zaXRpb24pO1xyXG4gIH1cclxuICBnZXRJbnRlcnNlY3RPYmooKSB7XHJcbiAgICB0aGlzLmNvbnRyb2xzLnJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHRoaXMuY29udHJvbHMubW91c2UsIHRoaXMuY2FtZXJhKTtcclxuICAgIGxldCBpbnRlcnNlY3RzID0gdGhpcy5jb250cm9scy5yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyhcclxuICAgICAgc2Muc2NlbmUuY2hpbGRyZW5cclxuICAgICk7XHJcbiAgICBpZiAoaW50ZXJzZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9iamVjdElzQmxvY2soaW50ZXJzZWN0c1swXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuICBvYmplY3RJc0Jsb2NrKG9iamVjdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKG9iamVjdC5kaXN0YW5jZSA8PSA2ICYmIG9iamVjdC5vYmplY3QuaXNCbG9jaykge1xyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbiAgdXNlQWN0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuYWN0aW9uTWFwW1wianVtcFwiXSAmJiBNYXRoLmFicyh0aGlzLnBsYXllckJvZHkudmVsb2NpdHkueSkgPCAwLjA1KSB7XHJcbiAgICAgIHRoaXMucGxheWVyQm9keS52ZWxvY2l0eS5zZXQoMCwgdGhpcy5qdW1wRm9yY2UsIDApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYWN0aW9uTWFwW1wicmlnaHRDbGlja1wiXSkge1xyXG4gICAgICBsZXQgaW50ZXJzZWN0T2JqID0gdGhpcy5nZXRJbnRlcnNlY3RPYmooKTtcclxuICAgICAgaWYgKGludGVyc2VjdE9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5wbGFjZUJsb2NrKGludGVyc2VjdE9iaiwgXCJjb2JibGVzdG9uZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYWN0aW9uTWFwW1wibGVmdENsaWNrXCJdKSB7XHJcbiAgICAgIGxldCBpbnRlcnNlY3RPYmogPSB0aGlzLmdldEludGVyc2VjdE9iaigpO1xyXG4gICAgICBpZiAoaW50ZXJzZWN0T2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUJsb2NrKGludGVyc2VjdE9iaik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGlyZWN0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICAgIGNvbnN0IGZyb250VmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgICh0aGlzLmFjdGlvbk1hcFtcIm1vdmVCYWNrd2FyZFwiXSA/IDEgOiAwKSAtXHJcbiAgICAgICAgKHRoaXMuYWN0aW9uTWFwW1wibW92ZUZvcndhcmRcIl0gPyAxIDogMClcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc2lkZVZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICAodGhpcy5hY3Rpb25NYXBbXCJtb3ZlUmlnaHRcIl0gPyAxIDogMCkgLVxyXG4gICAgICAgICh0aGlzLmFjdGlvbk1hcFtcIm1vdmVMZWZ0XCJdID8gMSA6IDApLFxyXG4gICAgICAwLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG5cclxuICAgIGRpcmVjdGlvbi5hZGRWZWN0b3JzKGZyb250VmVjdG9yLCBzaWRlVmVjdG9yKTtcclxuICAgIGRpcmVjdGlvbi5ub3JtYWxpemUoKTtcclxuICAgIGRpcmVjdGlvbi5tdWx0aXBseVNjYWxhcih0aGlzLm1vdmVtZW50U3BlZWQpO1xyXG4gICAgLy90aGlzLmNvbnRyb2xzLmZwdi5nZXREaXJlY3Rpb24oZGlyZWN0aW9uKTtcclxuICAgIGRpcmVjdGlvbi5hcHBseUV1bGVyKHRoaXMuY2FtZXJhLnJvdGF0aW9uKTtcclxuXHJcbiAgICB0aGlzLnBsYXllckJvZHkudmVsb2NpdHkuc2V0KFxyXG4gICAgICBkaXJlY3Rpb24ueCxcclxuICAgICAgdGhpcy5wbGF5ZXJCb2R5LnZlbG9jaXR5LnksXHJcbiAgICAgIGRpcmVjdGlvbi56XHJcbiAgICApO1xyXG4gIH1cclxuICBwbGFjZUJsb2NrKGJsb2NrLCBibG9ja1R5cGUpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcbiAgICBwb3NpdGlvbi5hZGRWZWN0b3JzKGJsb2NrLm9iamVjdC5wb3NpdGlvbiwgYmxvY2suZmFjZS5ub3JtYWwpO1xyXG4gICAgbW4uYmxvY2tzLmFkZEJsb2NrKHtcclxuICAgICAgdHlwZTogYmxvY2tUeXBlLFxyXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWN0aW9uTWFwW1wicmlnaHRDbGlja1wiXSA9IGZhbHNlO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQmxvY2soYmxvY2spIHtcclxuICAgIG1uLmJsb2Nrcy5yZW1vdmVCbG9jayh7XHJcbiAgICAgIGJsb2NrOiBibG9jayxcclxuICAgICAgcG9zaXRpb246IGJsb2NrLm9iamVjdC5wb3NpdGlvbixcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hY3Rpb25NYXBbXCJsZWZ0Q2xpY2tcIl0gPSBmYWxzZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgY2FudmFzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcnKSwgcG93ZXJQcmVmZXJlbmNlOiBcImhpZ2gtcGVyZm9ybWFuY2VcIiwgYW50aWFsaWFzOiB0cnVlIFxyXG59KTtcclxuXHJcbnJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nO1xyXG5yZW5kZXJlci50b25lTWFwcGluZyA9IFRIUkVFLkFDRVNGaWxtaWNUb25lTWFwcGluZztcclxucmVuZGVyZXIudG9uZU1hcHBpbmdFeHBvc3VyZSA9IDAuNTtcclxucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcclxucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCAqIGFzIGNtIGZyb20gXCIuL0NhbWVyYS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBjdCBmcm9tIFwiLi9Db250cm9scy5qc1wiO1xyXG5pbXBvcnQgKiBhcyByZCBmcm9tIFwiLi9SZW5kZXJlci5qc1wiO1xyXG5pbXBvcnQgKiBhcyBsZCBmcm9tIFwiLi9MYW5kc2NhcGUuanNcIjtcclxuaW1wb3J0IHsgR1VJIH0gZnJvbSBcInRocmVlL2FkZG9ucy9saWJzL2xpbC1ndWkubW9kdWxlLm1pbi5qc1wiO1xyXG5pbXBvcnQgeyBTa3kgfSBmcm9tIFwidGhyZWUvYWRkb25zL29iamVjdHMvU2t5LmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuY29uc3QgY2FtZXJhID0gY20uY2FtZXJhO1xyXG5jb25zdCByZW5kZXJlciA9IHJkLnJlbmRlcmVyO1xyXG5cclxubGV0IHNreSwgc3VuO1xyXG5cclxuaW5pdCgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdFNreSgpIHtcclxuICAvLyBBZGQgU2t5XHJcbiAgc2t5ID0gbmV3IFNreSgpO1xyXG4gIHNreS5zY2FsZS5zZXRTY2FsYXIoNDUwMDAwKTtcclxuICBzY2VuZS5hZGQoc2t5KTtcclxuXHJcbiAgc3VuID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcbiAgLy8vIEdVSVxyXG5cclxuICBjb25zdCBlZmZlY3RDb250cm9sbGVyID0ge1xyXG4gICAgdHVyYmlkaXR5OiAxMCxcclxuICAgIHJheWxlaWdoOiAzLFxyXG4gICAgbWllQ29lZmZpY2llbnQ6IDAuMDA1LFxyXG4gICAgbWllRGlyZWN0aW9uYWxHOiAwLjcsXHJcbiAgICBlbGV2YXRpb246IDIsXHJcbiAgICBhemltdXRoOiAxODAsXHJcbiAgICBleHBvc3VyZTogcmVuZGVyZXIudG9uZU1hcHBpbmdFeHBvc3VyZSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBndWlDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgdW5pZm9ybXMgPSBza3kubWF0ZXJpYWwudW5pZm9ybXM7XHJcbiAgICB1bmlmb3Jtc1tcInR1cmJpZGl0eVwiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIudHVyYmlkaXR5O1xyXG4gICAgdW5pZm9ybXNbXCJyYXlsZWlnaFwiXS52YWx1ZSA9IGVmZmVjdENvbnRyb2xsZXIucmF5bGVpZ2g7XHJcbiAgICB1bmlmb3Jtc1tcIm1pZUNvZWZmaWNpZW50XCJdLnZhbHVlID0gZWZmZWN0Q29udHJvbGxlci5taWVDb2VmZmljaWVudDtcclxuICAgIHVuaWZvcm1zW1wibWllRGlyZWN0aW9uYWxHXCJdLnZhbHVlID0gZWZmZWN0Q29udHJvbGxlci5taWVEaXJlY3Rpb25hbEc7XHJcblxyXG4gICAgY29uc3QgcGhpID0gVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDkwIC0gZWZmZWN0Q29udHJvbGxlci5lbGV2YXRpb24pO1xyXG4gICAgY29uc3QgdGhldGEgPSBUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQoZWZmZWN0Q29udHJvbGxlci5hemltdXRoKTtcclxuXHJcbiAgICBzdW4uc2V0RnJvbVNwaGVyaWNhbENvb3JkcygxLCBwaGksIHRoZXRhKTtcclxuXHJcbiAgICB1bmlmb3Jtc1tcInN1blBvc2l0aW9uXCJdLnZhbHVlLmNvcHkoc3VuKTtcclxuXHJcbiAgICByZW5kZXJlci50b25lTWFwcGluZ0V4cG9zdXJlID0gZWZmZWN0Q29udHJvbGxlci5leHBvc3VyZTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IGd1aSA9IG5ldyBHVUkoKTtcclxuXHJcbiAgLy8gZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcInR1cmJpZGl0eVwiLCAwLjAsIDIwLjAsIDAuMSkub25DaGFuZ2UoZ3VpQ2hhbmdlZCk7XHJcbiAgLy8gZ3VpLmFkZChlZmZlY3RDb250cm9sbGVyLCBcInJheWxlaWdoXCIsIDAuMCwgNCwgMC4wMDEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIC8vIGd1aVxyXG4gIC8vICAgLmFkZChlZmZlY3RDb250cm9sbGVyLCBcIm1pZUNvZWZmaWNpZW50XCIsIDAuMCwgMC4xLCAwLjAwMSlcclxuICAvLyAgIC5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICAvLyBndWlcclxuICAvLyAgIC5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJtaWVEaXJlY3Rpb25hbEdcIiwgMC4wLCAxLCAwLjAwMSlcclxuICAvLyAgIC5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICAvLyBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwiZWxldmF0aW9uXCIsIDAsIDkwLCAwLjEpLm9uQ2hhbmdlKGd1aUNoYW5nZWQpO1xyXG4gIC8vIGd1aS5hZGQoZWZmZWN0Q29udHJvbGxlciwgXCJhemltdXRoXCIsIC0xODAsIDE4MCwgMC4xKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICAvLyBndWkuYWRkKGVmZmVjdENvbnRyb2xsZXIsIFwiZXhwb3N1cmVcIiwgMCwgMSwgMC4wMDAxKS5vbkNoYW5nZShndWlDaGFuZ2VkKTtcclxuICAvLyBndWkudmlzaWJsZSA9IGZhbHNlO1xyXG4gIGd1aUNoYW5nZWQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBjb25zdCBoZWxwZXIgPSBuZXcgVEhSRUUuR3JpZEhlbHBlcigxMDAwMCwgMiwgMHhmZmZmZmYsIDB4ZmZmZmZmKTtcclxuICBzY2VuZS5hZGQoaGVscGVyKTtcclxuXHJcbiAgaW5pdFNreSgpO1xyXG59XHJcblxyXG4vL3NjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoMHgwMGZmZmYpO1xyXG4vL3NjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2coMHgwMGZmZmYsIDIsIDgwKTtcclxuXHJcbmNvbnN0IHBvaW50TGlnaHRfMSA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmKTtcclxucG9pbnRMaWdodF8xLnBvc2l0aW9uLnNldCg1LCA1LCAwKTtcclxuY29uc3QgcG9pbnRMaWdodF8yID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYpO1xyXG5wb2ludExpZ2h0XzIucG9zaXRpb24uc2V0KC01LCA1LCAwKTtcclxuY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMC4xNSk7XHJcblxyXG5zY2VuZS5hZGQocG9pbnRMaWdodF8xLCBwb2ludExpZ2h0XzIsIGFtYmllbnRMaWdodCk7XHJcblxyXG5yZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiIsImltcG9ydCBcIi4uL3BhZ2VzL2Nzcy9tYWluLmNzc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgQkxLIGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcclxuaW1wb3J0ICogYXMgQ0FOTk9OIGZyb20gXCJjYW5ub24tZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmxvY2tzID0gW107XHJcbiAgICB0aGlzLmluaXRTdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgYWRkQmxvY2soeyB0eXBlOiB0eXAsIHBvc2l0aW9uOiB7IHgsIHksIHogfSB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImFkZGVkIGEgYmxvY2tcIik7XHJcbiAgICB0aGlzLmJsb2Nrcy5wdXNoKHtcclxuICAgICAga2V5OiBuYW5vaWQoKSxcclxuICAgICAgcG9zaXRpb246IHsgeCwgeSwgeiB9LFxyXG4gICAgICB0eXBlOiB0eXAsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFRleHR1cmUoKSB7fVxyXG4gIHNhdmVXb3JsZCgpIHt9XHJcbiAgcmVzZXRXb3JsZCgpIHt9XHJcbiAgaW5pdFN0b3JlKCkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2Nrc0FycmF5IHtcclxuICBjb25zdHJ1Y3Rvcih7IHN0b3JhZ2UsIG1lc2hlcywgYm9kaWVzLCB3b3JsZCwgc2NlbmUgfSkge1xyXG4gICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuICAgIHRoaXMubWVzaGVzID0gbWVzaGVzO1xyXG4gICAgdGhpcy5ib2RpZXMgPSBib2RpZXM7XHJcbiAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcblxyXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgdGhpcy5yZW5kZXJMaXN0ID0gW107XHJcblxyXG4gICAgdGhpcy5pbml0QmxvY2tzKCk7XHJcbiAgfVxyXG5cclxuICBpbml0QmxvY2tzKCkge1xyXG4gICAgdGhpcy51c2VTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJCeVBvc2l0aW9uKHsgYmxvY2tzQXJyYXksIHBvc2l0aW9uIH0pIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJmaWx0ZXIgQnkgUG9zaXRpb25cIik7XHJcbiAgICBsZXQgbmV3QXJyYXkgPSBibG9ja3NBcnJheS5maWx0ZXIoKGJsb2NrKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBibG9jay5wb3NpdGlvbi54ID09PSBwb3NpdGlvbi54ICYmXHJcbiAgICAgICAgYmxvY2sucG9zaXRpb24ueSA9PT0gcG9zaXRpb24ueSAmJlxyXG4gICAgICAgIGJsb2NrLnBvc2l0aW9uLnogPT09IHBvc2l0aW9uLnpcclxuICAgICAgKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coT2JqZWN0LnZhbHVlcyhibG9jaykpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgfVxyXG4gIGZpbmRCeVBvc2l0aW9uKHsgYmxvY2tzQXJyYXksIHBvc2l0aW9uIH0pIHtcclxuICAgIGxldCBvYmplY3QgPSBibG9ja3NBcnJheS5maW5kKChibG9jaykgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgYmxvY2sucG9zaXRpb24ueCA9PT0gcG9zaXRpb24ueCAmJlxyXG4gICAgICAgIGJsb2NrLnBvc2l0aW9uLnkgPT09IHBvc2l0aW9uLnkgJiZcclxuICAgICAgICBibG9jay5wb3NpdGlvbi56ID09PSBwb3NpdGlvbi56XHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIm9iaiBcIiArIE9iamVjdC52YWx1ZXMob2JqZWN0KSk7XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG4gIH1cclxuICBhZGRCbG9jayh7IHR5cGUsIHBvc2l0aW9uIH0pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYmxvY2tzQXJyYXkgQUREXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJwb3NpdGlvbiAyIFwiICsgT2JqZWN0LnZhbHVlcyhwb3NpdGlvbikpO1xyXG4gICAgbGV0IGJsb2NrID0gbmV3IEJMSy5CbG9jayh7IGJsb2NrVHlwZTogdHlwZSB9KTtcclxuICAgIGxldCBtZXNoID0gYmxvY2subWVzaDtcclxuICAgIG1lc2gucG9zaXRpb24uc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnopO1xyXG4gICAgY29uc3QgYmxvY2tTaGFwZSA9IG5ldyBDQU5OT04uQm94KG5ldyBDQU5OT04uVmVjMygwLjUsIDAuNSwgMC41KSk7XHJcbiAgICBsZXQgYmxvY2tCb2R5ID0gbmV3IENBTk5PTi5Cb2R5KHsgbWFzczogMCB9KTtcclxuICAgIGJsb2NrQm9keS5hZGRTaGFwZShibG9ja1NoYXBlKTtcclxuICAgIGJsb2NrQm9keS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueik7XHJcbiAgICBtZXNoLmlzQmxvY2sgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMubWVzaGVzLnB1c2gobWVzaCk7XHJcbiAgICB0aGlzLnNjZW5lLmFkZChtZXNoKTtcclxuICAgIHRoaXMuYm9kaWVzLnB1c2goYmxvY2tCb2R5KTtcclxuICAgIHRoaXMud29ybGQuYWRkQm9keShibG9ja0JvZHkpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQmxvY2soeyBibG9jaywgcG9zaXRpb24gfSkge1xyXG4gICAgY29uc29sZS5sb2coXCJibG9ja3NBcnJheSBSTVwiKTtcclxuXHJcbiAgICBsZXQgYmxvY2tCb2R5ID0gdGhpcy5maW5kQnlQb3NpdGlvbih7XHJcbiAgICAgIGJsb2Nrc0FycmF5OiB0aGlzLmJvZGllcyxcclxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGJsb2NrTWVzaCA9IHRoaXMuc2NlbmUuZ2V0T2JqZWN0QnlJZChibG9jay5vYmplY3QuaWQpO1xyXG5cclxuICAgIHRoaXMubWVzaGVzID0gdGhpcy5maWx0ZXJCeVBvc2l0aW9uKHtcclxuICAgICAgYmxvY2tzQXJyYXk6IHRoaXMubWVzaGVzLFxyXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmJvZGllcyA9IHRoaXMuZmlsdGVyQnlQb3NpdGlvbih7XHJcbiAgICAgIGJsb2Nrc0FycmF5OiB0aGlzLmJvZGllcyxcclxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zdG9yYWdlLmJsb2NrcyA9IHRoaXMuZmlsdGVyQnlQb3NpdGlvbih7XHJcbiAgICAgIGJsb2Nrc0FycmF5OiB0aGlzLnN0b3JhZ2UuYmxvY2tzLFxyXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLndvcmxkLnJlbW92ZUJvZHkoYmxvY2tCb2R5KTtcclxuICAgIHRoaXMuc2NlbmUucmVtb3ZlKGJsb2NrTWVzaCk7XHJcbiAgICAvLyBibG9ja01lc2guZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG4gICAgLy8gYmxvY2tNZXNoLm1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgIC8vIGJsb2NrTWVzaCA9IHVuZGVmaW5lZDtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdXNlU3RvcmFnZSgpIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJzdG9yYWdlIGxlbmd0aCBcIiArIHRoaXMuc3RvcmFnZS5ibG9ja3MubGVuZ3RoKTtcclxuXHJcbiAgICB0aGlzLnN0b3JhZ2UuYmxvY2tzLmZvckVhY2goKHN0b3JlQmxvY2spID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhcInR5cGUgPSBcIiArIHN0b3JlQmxvY2sudHlwZSk7XHJcbiAgICAgIGxldCBibG9jayA9IG5ldyBCTEsuQmxvY2soeyBibG9ja1R5cGU6IHN0b3JlQmxvY2sudHlwZSB9KTtcclxuICAgICAgbGV0IG1lc2ggPSBibG9jay5tZXNoO1xyXG4gICAgICBtZXNoLnBvc2l0aW9uLnNldChcclxuICAgICAgICBzdG9yZUJsb2NrLnBvc2l0aW9uLngsXHJcbiAgICAgICAgc3RvcmVCbG9jay5wb3NpdGlvbi55LFxyXG4gICAgICAgIHN0b3JlQmxvY2sucG9zaXRpb24uelxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBibG9ja1NoYXBlID0gbmV3IENBTk5PTi5Cb3gobmV3IENBTk5PTi5WZWMzKDAuNSwgMC41LCAwLjUpKTtcclxuICAgICAgbGV0IGJsb2NrQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IDAgfSk7XHJcbiAgICAgIGJsb2NrQm9keS5hZGRTaGFwZShibG9ja1NoYXBlKTtcclxuXHJcbiAgICAgIGJsb2NrQm9keS5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgc3RvcmVCbG9jay5wb3NpdGlvbi54LFxyXG4gICAgICAgIHN0b3JlQmxvY2sucG9zaXRpb24ueSxcclxuICAgICAgICBzdG9yZUJsb2NrLnBvc2l0aW9uLnpcclxuICAgICAgKTtcclxuICAgICAgbWVzaC5pc0Jsb2NrID0gdHJ1ZTtcclxuICAgICAgdGhpcy5tZXNoZXMucHVzaChtZXNoKTtcclxuICAgICAgdGhpcy5ib2RpZXMucHVzaChibG9ja0JvZHkpO1xyXG4gICAgICB0aGlzLndvcmxkLmFkZEJvZHkoYmxvY2tCb2R5KTtcclxuICAgICAgdGhpcy5zY2VuZS5hZGQobWVzaCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFwiLi4vcGFnZXMvY3NzL21haW4uY3NzXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCAqIGFzIHNjIGZyb20gXCIuL1NjZW5lLmpzXCI7XG5pbXBvcnQgKiBhcyBjbSBmcm9tIFwiLi9DYW1lcmEuanNcIjtcblxuaW1wb3J0ICogYXMgcmQgZnJvbSBcIi4vUmVuZGVyZXIuanNcIjtcbmltcG9ydCAqIGFzIGxkIGZyb20gXCIuL0xhbmRzY2FwZS5qc1wiO1xuaW1wb3J0ICogYXMgUExSIGZyb20gXCIuL1BsYXllci5qc1wiO1xuaW1wb3J0ICogYXMgQ0FOTk9OIGZyb20gXCJjYW5ub24tZXNcIjtcbmltcG9ydCAqIGFzIHN0IGZyb20gXCIuL1N0b3JhZ2VcIjtcblxuaW1wb3J0IFN0YXRzIGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbGlicy9zdGF0cy5tb2R1bGVcIjtcblxuLy8gVGhyZWUgdmFyaWFibGVzXG5leHBvcnQgbGV0IHNjZW5lID0gc2Muc2NlbmU7XG5sZXQgY2FtZXJhID0gY20uY2FtZXJhO1xubGV0IHJlbmRlcmVyID0gcmQucmVuZGVyZXI7XG5jb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuXG5sZXQgc3RhdHM7XG5cbi8vIE1pbmVjcmFmdCB2YXJpYWJsZXNcbmV4cG9ydCBsZXQgYmxvY2tzO1xubGV0IHBsYXllcjtcblxuZXhwb3J0IGxldCBzdG9yYWdlID0gbmV3IHN0LlN0b3JhZ2UoKTtcblxuLy8gY2Fubm9uLmpzIHZhcmlhYmxlc1xuZXhwb3J0IGxldCB3b3JsZDtcblxuLy8gVG8gYmUgc3luY2VkXG5leHBvcnQgbGV0IG1lc2hlcyA9IFtdO1xuZXhwb3J0IGxldCBib2RpZXMgPSBbXTtcblxuaW5pdFRocmVlKCk7XG5pbml0Q2Fubm9uKCk7XG5pbml0TWluZWNyYWZ0KCk7XG5yZW5kZXJJbmZvKCk7XG5HYW1lTG9vcCgpO1xuXG5mdW5jdGlvbiBpbml0VGhyZWUoKSB7XG4gIC8vIHN0YXRzID0gbmV3IFN0YXRzKCk7XG4gIC8vIHN0YXRzLnNob3dQYW5lbCgwKTsgLy8gMDogZnBzLCAxOiBtcywgMjogbWIsIDMrOiBjdXN0b21cbiAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdGF0cy5kb20pO1xufVxuXG5mdW5jdGlvbiBpbml0Q2Fubm9uKCkge1xuICAvLyBTZXR1cCB3b3JsZFxuICB3b3JsZCA9IG5ldyBDQU5OT04uV29ybGQoKTtcbiAgd29ybGQuZ3Jhdml0eS5zZXQoMCwgLTkuODEsIDApO1xufVxuXG5mdW5jdGlvbiBpbml0TWluZWNyYWZ0KCkge1xuICBsZC5jcmVhdGVMYW5kc2NhcGUoKTtcblxuICBibG9ja3MgPSBuZXcgc3QuQmxvY2tzQXJyYXkoe1xuICAgIHN0b3JhZ2U6IHN0b3JhZ2UsXG4gICAgbWVzaGVzOiBtZXNoZXMsXG4gICAgYm9kaWVzOiBib2RpZXMsXG4gICAgd29ybGQ6IHdvcmxkLFxuICAgIHNjZW5lOiBzY2VuZSxcbiAgfSk7XG5cbiAgcGxheWVyID0gbmV3IFBMUi5QbGF5ZXIoeyBjYW1lcmE6IGNhbWVyYSwgcG9zaXRpb246IHsgeDogMywgeTogMiwgejogMyB9IH0pO1xuXG4gIGJvZGllcy5wdXNoKHBsYXllci5wbGF5ZXJCb2R5KTtcbiAgd29ybGQuYWRkQm9keShwbGF5ZXIucGxheWVyQm9keSk7XG4gIG1lc2hlcy5wdXNoKHBsYXllci5tZXNoKTtcbiAgc2NlbmUuYWRkKHBsYXllci5tZXNoKTtcbn1cbmZ1bmN0aW9uIHJlbmRlckluZm8oKSB7XG4gIGNvbnNvbGUubG9nKFwiU2NlbmUgcG9seWNvdW50OlwiLCByZW5kZXJlci5pbmZvLnJlbmRlci50cmlhbmdsZXMpO1xuICBjb25zb2xlLmxvZyhcIkFjdGl2ZSBEcmF3Y2FsbHM6XCIsIHJlbmRlcmVyLmluZm8ucmVuZGVyLmNhbGxzKTtcbiAgY29uc29sZS5sb2coXCJUZXh0dXJlcyBpbiBNZW1vcnlcIiwgcmVuZGVyZXIuaW5mby5tZW1vcnkudGV4dHVyZXMpO1xuICBjb25zb2xlLmxvZyhcIkdlb21ldHJpZXMgaW4gTWVtb3J5XCIsIHJlbmRlcmVyLmluZm8ubWVtb3J5Lmdlb21ldHJpZXMpO1xufVxuXG4vLyBTeW5jIHRoZSB0aHJlZS5qcyBtZXNoZXMgd2l0aCB0aGUgYm9kaWVzXG5mdW5jdGlvbiBzeW5jaHJvbmlzZWRCb2RpZXNNZXNoZXMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpICE9PSBtZXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBtZXNoZXNbaV0ucG9zaXRpb24uY29weShib2RpZXNbaV0ucG9zaXRpb24pO1xuICAgIG1lc2hlc1tpXS5xdWF0ZXJuaW9uLmNvcHkoYm9kaWVzW2ldLnF1YXRlcm5pb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIEdhbWVMb29wKCkge1xuICAvLyBzdGF0cy5iZWdpbigpO1xuICBjb25zdCBkZWx0YVRpbWUgPSBjbG9jay5nZXREZWx0YSgpO1xuXG4gIC8vdXBkYXRlIGdhbWVcbiAgcGxheWVyLnVwZGF0ZVBsYXllcigpO1xuXG4gIC8vIFN0ZXAgdGhlIHBoeXNpY3Mgd29ybGRcbiAgd29ybGQuZml4ZWRTdGVwKCk7XG4gIHN5bmNocm9uaXNlZEJvZGllc01lc2hlcygpO1xuXG4gIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcblxuICAvLyBzdGF0cy51cGRhdGUoKTtcbiAgLy8gc3RhdHMuZW5kKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShHYW1lTG9vcCk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qXG4gIGVzbGludC1kaXNhYmxlXG4gIG5vLWNvbnNvbGUsXG4gIGZ1bmMtbmFtZXNcbiovXG5cbi8qKiBAdHlwZWRlZiB7YW55fSBUT0RPICovXG52YXIgbm9ybWFsaXplVXJsID0gcmVxdWlyZShcIi4vbm9ybWFsaXplLXVybFwiKTtcblxudmFyIHNyY0J5TW9kdWxlSWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIG5vRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCI7XG52YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcbiAqIEByZXR1cm5zIHsoZnVuY3Rpb24oKTogdm9pZCl8Kn1cbiAqL1xuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgdGltZSkge1xuICB2YXIgdGltZW91dCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHZhciBzZWxmID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgZnVuY3Rpb25DYWxsID0gZnVuY3Rpb24gZnVuY3Rpb25DYWxsKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7IC8vIEB0cy1pZ25vcmVcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uQ2FsbCwgdGltZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IG1vZHVsZUlkXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpIHtcbiAgdmFyIHNyYyA9IHNyY0J5TW9kdWxlSWRbbW9kdWxlSWRdO1xuXG4gIGlmICghc3JjKSB7XG4gICAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAgIHNyYyA9XG4gICAgICAvKiogQHR5cGUge0hUTUxTY3JpcHRFbGVtZW50fSAqL1xuICAgICAgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG4gICAgICB2YXIgbGFzdFNjcmlwdFRhZyA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKGxhc3RTY3JpcHRUYWcpIHtcbiAgICAgICAgc3JjID0gbGFzdFNjcmlwdFRhZy5zcmM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3JjQnlNb2R1bGVJZFttb2R1bGVJZF0gPSBzcmM7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTWFwXG4gICAqIEByZXR1cm5zIHtudWxsIHwgc3RyaW5nW119XG4gICAqL1xuXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmaWxlTWFwKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBzcGxpdFJlc3VsdCA9IHNyYy5zcGxpdCgvKFteXFxcXC9dKylcXC5qcyQvKTtcbiAgICB2YXIgZmlsZW5hbWUgPSBzcGxpdFJlc3VsdCAmJiBzcGxpdFJlc3VsdFsxXTtcblxuICAgIGlmICghZmlsZW5hbWUpIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG5cbiAgICBpZiAoIWZpbGVNYXApIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZU1hcC5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uIChtYXBSdWxlKSB7XG4gICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChmaWxlbmFtZSwgXCJcXFxcLmpzJFwiKSwgXCJnXCIpO1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVybChzcmMucmVwbGFjZShyZWcsIFwiXCIuY29uY2F0KG1hcFJ1bGUucmVwbGFjZSgve2ZpbGVOYW1lfS9nLCBmaWxlbmFtZSksIFwiLmNzc1wiKSkpO1xuICAgIH0pO1xuICB9O1xufVxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF1cbiAqL1xuXG5cbmZ1bmN0aW9uIHVwZGF0ZUNzcyhlbCwgdXJsKSB7XG4gIGlmICghdXJsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG4gICAgdXJsID0gZWwuaHJlZi5zcGxpdChcIj9cIilbMF07XG4gIH1cblxuICBpZiAoIWlzVXJsUmVxdWVzdChcbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIHVybCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWwuaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gV2Ugc2VlbSB0byBiZSBhYm91dCB0byByZXBsYWNlIGEgY3NzIGxpbmsgdGhhdCBoYXNuJ3QgbG9hZGVkIHlldC5cbiAgICAvLyBXZSdyZSBwcm9iYWJseSBjaGFuZ2luZyB0aGUgc2FtZSBmaWxlIG1vcmUgdGhhbiBvbmNlLlxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghdXJsIHx8ICEodXJsLmluZGV4T2YoXCIuY3NzXCIpID4gLTEpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgZWwudmlzaXRlZCA9IHRydWU7XG4gIHZhciBuZXdFbCA9IGVsLmNsb25lTm9kZSgpO1xuICBuZXdFbC5pc0xvYWRlZCA9IGZhbHNlO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5ocmVmID0gXCJcIi5jb25jYXQodXJsLCBcIj9cIikuY29uY2F0KERhdGUubm93KCkpO1xuXG4gIGlmIChlbC5uZXh0U2libGluZykge1xuICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsLCBlbC5uZXh0U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgZWwucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbCk7XG4gIH1cbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWZcbiAqIEBwYXJhbSB7VE9ET30gc3JjXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFJlbG9hZFVybChocmVmLCBzcmMpIHtcbiAgdmFyIHJldDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cbiAgaHJlZiA9IG5vcm1hbGl6ZVVybChocmVmKTtcbiAgc3JjLnNvbWUoXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gIGZ1bmN0aW9uICh1cmwpIHtcbiAgICBpZiAoaHJlZi5pbmRleE9mKHNyYykgPiAtMSkge1xuICAgICAgcmV0ID0gdXJsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3JjXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuXG5mdW5jdGlvbiByZWxvYWRTdHlsZShzcmMpIHtcbiAgaWYgKCFzcmMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgdmFyIGxvYWRlZCA9IGZhbHNlO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB1cmwgPSBnZXRSZWxvYWRVcmwoZWwuaHJlZiwgc3JjKTtcblxuICAgIGlmICghaXNVcmxSZXF1ZXN0KHVybCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh1cmwpIHtcbiAgICAgIHVwZGF0ZUNzcyhlbCwgdXJsKTtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxvYWRlZDtcbn1cblxuZnVuY3Rpb24gcmVsb2FkQWxsKCkge1xuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZUNzcyhlbCk7XG4gIH0pO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVXJsUmVxdWVzdCh1cmwpIHtcbiAgLy8gQW4gVVJMIGlzIG5vdCBhbiByZXF1ZXN0IGlmXG4gIC8vIEl0IGlzIG5vdCBodHRwIG9yIGh0dHBzXG4gIGlmICghL15bYS16QS1aXVthLXpBLVpcXGQrXFwtLl0qOi8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEBwYXJhbSB7VE9ET30gb3B0aW9uc1xuICogQHJldHVybnMge1RPRE99XG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgb3B0aW9ucykge1xuICBpZiAobm9Eb2N1bWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwibm8gd2luZG93LmRvY3VtZW50IGZvdW5kLCB3aWxsIG5vdCBITVIgQ1NTXCIpO1xuICAgIHJldHVybiBub29wO1xuICB9XG5cbiAgdmFyIGdldFNjcmlwdFNyYyA9IGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgc3JjID0gZ2V0U2NyaXB0U3JjKG9wdGlvbnMuZmlsZW5hbWUpO1xuICAgIHZhciByZWxvYWRlZCA9IHJlbG9hZFN0eWxlKHNyYyk7XG5cbiAgICBpZiAob3B0aW9ucy5sb2NhbHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gRGV0ZWN0ZWQgbG9jYWwgY3NzIG1vZHVsZXMuIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlbG9hZGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIGNzcyByZWxvYWQgJXNcIiwgc3JjLmpvaW4oXCIgXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWJvdW5jZSh1cGRhdGUsIDUwKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aENvbXBvbmVudHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVybChwYXRoQ29tcG9uZW50cykge1xuICByZXR1cm4gcGF0aENvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaXRlbSkge1xuICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgY2FzZSBcIi4uXCI6XG4gICAgICAgIGFjY3VtdWxhdG9yLnBvcCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIi5cIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFjY3VtdWxhdG9yLnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9LFxuICAvKiogQHR5cGUge3N0cmluZ1tdfSAqL1xuICBbXSkuam9pbihcIi9cIik7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxTdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmxTdHJpbmcpIHtcbiAgdXJsU3RyaW5nID0gdXJsU3RyaW5nLnRyaW0oKTtcblxuICBpZiAoL15kYXRhOi9pLnRlc3QodXJsU3RyaW5nKSkge1xuICAgIHJldHVybiB1cmxTdHJpbmc7XG4gIH1cblxuICB2YXIgcHJvdG9jb2wgPSB1cmxTdHJpbmcuaW5kZXhPZihcIi8vXCIpICE9PSAtMSA/IHVybFN0cmluZy5zcGxpdChcIi8vXCIpWzBdICsgXCIvL1wiIDogXCJcIjtcbiAgdmFyIGNvbXBvbmVudHMgPSB1cmxTdHJpbmcucmVwbGFjZShuZXcgUmVnRXhwKHByb3RvY29sLCBcImlcIiksIFwiXCIpLnNwbGl0KFwiL1wiKTtcbiAgdmFyIGhvc3QgPSBjb21wb25lbnRzWzBdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwuJC8sIFwiXCIpO1xuICBjb21wb25lbnRzWzBdID0gXCJcIjtcbiAgdmFyIHBhdGggPSBub3JtYWxpemVVcmwoY29tcG9uZW50cyk7XG4gIHJldHVybiBwcm90b2NvbCArIGhvc3QgKyBwYXRoO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjc4NDcxMzc5NjA5XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5sZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5sZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIGxldCBtYXNrID0gKDIgPDwgKE1hdGgubG9nKGFscGhhYmV0Lmxlbmd0aCAtIDEpIC8gTWF0aC5MTjIpKSAtIDFcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09IHNpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxubGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplID0gMjEpID0+XG4gIGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxubGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+XG4gIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpLnJlZHVjZSgoaWQsIGJ5dGUpID0+IHtcbiAgICBieXRlICY9IDYzXG4gICAgaWYgKGJ5dGUgPCAzNikge1xuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgaWQgKz0gKGJ5dGUgLSAyNikudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPiA2Mikge1xuICAgICAgaWQgKz0gJy0nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfSwgJycpXG5leHBvcnQgeyBuYW5vaWQsIGN1c3RvbUFscGhhYmV0LCBjdXN0b21SYW5kb20sIHVybEFscGhhYmV0LCByYW5kb20gfVxuIiwibGV0IHVybEFscGhhYmV0ID1cbiAgJ3VzZWFuZG9tLTI2VDE5ODM0MFBYNzVweEpBQ0tWRVJZTUlOREJVU0hXT0xGX0dRWmJmZ2hqa2xxdnd5enJpY3QnXG5leHBvcnQgeyB1cmxBbHBoYWJldCB9XG4iLCJpbXBvcnQge1xuXHRFdWxlcixcblx0RXZlbnREaXNwYXRjaGVyLFxuXHRWZWN0b3IzXG59IGZyb20gJ3RocmVlJztcblxuY29uc3QgX2V1bGVyID0gbmV3IEV1bGVyKCAwLCAwLCAwLCAnWVhaJyApO1xuY29uc3QgX3ZlY3RvciA9IG5ldyBWZWN0b3IzKCk7XG5cbmNvbnN0IF9jaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcbmNvbnN0IF9sb2NrRXZlbnQgPSB7IHR5cGU6ICdsb2NrJyB9O1xuY29uc3QgX3VubG9ja0V2ZW50ID0geyB0eXBlOiAndW5sb2NrJyB9O1xuXG5jb25zdCBfUElfMiA9IE1hdGguUEkgLyAyO1xuXG5jbGFzcyBQb2ludGVyTG9ja0NvbnRyb2xzIGV4dGVuZHMgRXZlbnREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3RvciggY2FtZXJhLCBkb21FbGVtZW50ICkge1xuXG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cdFx0dGhpcy5pc0xvY2tlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gU2V0IHRvIGNvbnN0cmFpbiB0aGUgcGl0Y2ggb2YgdGhlIGNhbWVyYVxuXHRcdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zXG5cdFx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHRcdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHRcdHRoaXMucG9pbnRlclNwZWVkID0gMS4wO1xuXG5cdFx0Y29uc3Qgc2NvcGUgPSB0aGlzO1xuXG5cdFx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmlzTG9ja2VkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0Y29uc3QgbW92ZW1lbnRYID0gZXZlbnQubW92ZW1lbnRYIHx8IGV2ZW50Lm1vek1vdmVtZW50WCB8fCBldmVudC53ZWJraXRNb3ZlbWVudFggfHwgMDtcblx0XHRcdGNvbnN0IG1vdmVtZW50WSA9IGV2ZW50Lm1vdmVtZW50WSB8fCBldmVudC5tb3pNb3ZlbWVudFkgfHwgZXZlbnQud2Via2l0TW92ZW1lbnRZIHx8IDA7XG5cblx0XHRcdF9ldWxlci5zZXRGcm9tUXVhdGVybmlvbiggY2FtZXJhLnF1YXRlcm5pb24gKTtcblxuXHRcdFx0X2V1bGVyLnkgLT0gbW92ZW1lbnRYICogMC4wMDIgKiBzY29wZS5wb2ludGVyU3BlZWQ7XG5cdFx0XHRfZXVsZXIueCAtPSBtb3ZlbWVudFkgKiAwLjAwMiAqIHNjb3BlLnBvaW50ZXJTcGVlZDtcblxuXHRcdFx0X2V1bGVyLnggPSBNYXRoLm1heCggX1BJXzIgLSBzY29wZS5tYXhQb2xhckFuZ2xlLCBNYXRoLm1pbiggX1BJXzIgLSBzY29wZS5taW5Qb2xhckFuZ2xlLCBfZXVsZXIueCApICk7XG5cblx0XHRcdGNhbWVyYS5xdWF0ZXJuaW9uLnNldEZyb21FdWxlciggX2V1bGVyICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9jaGFuZ2VFdmVudCApO1xuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Qb2ludGVybG9ja0NoYW5nZSgpIHtcblxuXHRcdFx0aWYgKCBzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50ID09PSBzY29wZS5kb21FbGVtZW50ICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIF9sb2NrRXZlbnQgKTtcblxuXHRcdFx0XHRzY29wZS5pc0xvY2tlZCA9IHRydWU7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggX3VubG9ja0V2ZW50ICk7XG5cblx0XHRcdFx0c2NvcGUuaXNMb2NrZWQgPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25Qb2ludGVybG9ja0Vycm9yKCkge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuUG9pbnRlckxvY2tDb250cm9sczogVW5hYmxlIHRvIHVzZSBQb2ludGVyIExvY2sgQVBJJyApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrY2hhbmdlJywgb25Qb2ludGVybG9ja0NoYW5nZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2Vycm9yJywgb25Qb2ludGVybG9ja0Vycm9yICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlICk7XG5cdFx0XHRzY29wZS5kb21FbGVtZW50Lm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJsb2NrY2hhbmdlJywgb25Qb2ludGVybG9ja0NoYW5nZSApO1xuXHRcdFx0c2NvcGUuZG9tRWxlbWVudC5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVybG9ja2Vycm9yJywgb25Qb2ludGVybG9ja0Vycm9yICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLmRpc2Nvbm5lY3QoKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmdldE9iamVjdCA9IGZ1bmN0aW9uICgpIHsgLy8gcmV0YWluaW5nIHRoaXMgbWV0aG9kIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0XHRcdHJldHVybiBjYW1lcmE7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5nZXREaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnN0IGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKCAwLCAwLCAtIDEgKTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uICggdiApIHtcblxuXHRcdFx0XHRyZXR1cm4gdi5jb3B5KCBkaXJlY3Rpb24gKS5hcHBseVF1YXRlcm5pb24oIGNhbWVyYS5xdWF0ZXJuaW9uICk7XG5cblx0XHRcdH07XG5cblx0XHR9KCk7XG5cblx0XHR0aGlzLm1vdmVGb3J3YXJkID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuXHRcdFx0Ly8gbW92ZSBmb3J3YXJkIHBhcmFsbGVsIHRvIHRoZSB4ei1wbGFuZVxuXHRcdFx0Ly8gYXNzdW1lcyBjYW1lcmEudXAgaXMgeS11cFxuXG5cdFx0XHRfdmVjdG9yLnNldEZyb21NYXRyaXhDb2x1bW4oIGNhbWVyYS5tYXRyaXgsIDAgKTtcblxuXHRcdFx0X3ZlY3Rvci5jcm9zc1ZlY3RvcnMoIGNhbWVyYS51cCwgX3ZlY3RvciApO1xuXG5cdFx0XHRjYW1lcmEucG9zaXRpb24uYWRkU2NhbGVkVmVjdG9yKCBfdmVjdG9yLCBkaXN0YW5jZSApO1xuXG5cdFx0fTtcblxuXHRcdHRoaXMubW92ZVJpZ2h0ID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuXHRcdFx0X3ZlY3Rvci5zZXRGcm9tTWF0cml4Q29sdW1uKCBjYW1lcmEubWF0cml4LCAwICk7XG5cblx0XHRcdGNhbWVyYS5wb3NpdGlvbi5hZGRTY2FsZWRWZWN0b3IoIF92ZWN0b3IsIGRpc3RhbmNlICk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy5sb2NrID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0XHR0aGlzLmRvbUVsZW1lbnQucmVxdWVzdFBvaW50ZXJMb2NrKCk7XG5cblx0XHR9O1xuXG5cdFx0dGhpcy51bmxvY2sgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNjb3BlLmRvbUVsZW1lbnQub3duZXJEb2N1bWVudC5leGl0UG9pbnRlckxvY2soKTtcblxuXHRcdH07XG5cblx0XHR0aGlzLmNvbm5lY3QoKTtcblxuXHR9XG5cbn1cblxuZXhwb3J0IHsgUG9pbnRlckxvY2tDb250cm9scyB9O1xuIiwiaW1wb3J0IHtcblx0QmFja1NpZGUsXG5cdEJveEdlb21ldHJ5LFxuXHRNZXNoLFxuXHRTaGFkZXJNYXRlcmlhbCxcblx0VW5pZm9ybXNVdGlscyxcblx0VmVjdG9yM1xufSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQmFzZWQgb24gXCJBIFByYWN0aWNhbCBBbmFseXRpYyBNb2RlbCBmb3IgRGF5bGlnaHRcIlxuICogYWthIFRoZSBQcmVldGhhbSBNb2RlbCwgdGhlIGRlIGZhY3RvIHN0YW5kYXJkIGFuYWx5dGljIHNreWRvbWUgbW9kZWxcbiAqIGh0dHBzOi8vd3d3LnJlc2VhcmNoZ2F0ZS5uZXQvcHVibGljYXRpb24vMjIwNzIwNDQzX0FfUHJhY3RpY2FsX0FuYWx5dGljX01vZGVsX2Zvcl9EYXlsaWdodFxuICpcbiAqIEZpcnN0IGltcGxlbWVudGVkIGJ5IFNpbW9uIFdhbGxuZXJcbiAqIGh0dHA6Ly9zaW1vbndhbGxuZXIuYXQvcHJvamVjdC9hdG1vc3BoZXJpYy1zY2F0dGVyaW5nL1xuICpcbiAqIEltcHJvdmVkIGJ5IE1hcnRpbiBVcGl0aXNcbiAqIGh0dHA6Ly9ibGVuZGVyYXJ0aXN0cy5vcmcvZm9ydW0vc2hvd3RocmVhZC5waHA/MjQ1OTU0LXByZWV0aGFtcy1za3ktaW1wZW1lbnRhdGlvbi1IRFJcbiAqXG4gKiBUaHJlZS5qcyBpbnRlZ3JhdGlvbiBieSB6ejg1IGh0dHA6Ly90d2l0dGVyLmNvbS9ibHVyc3BsaW5lXG4qL1xuXG5jbGFzcyBTa3kgZXh0ZW5kcyBNZXNoIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHRcdGNvbnN0IHNoYWRlciA9IFNreS5Ta3lTaGFkZXI7XG5cblx0XHRjb25zdCBtYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbCgge1xuXHRcdFx0bmFtZTogJ1NreVNoYWRlcicsXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyLFxuXHRcdFx0dmVydGV4U2hhZGVyOiBzaGFkZXIudmVydGV4U2hhZGVyLFxuXHRcdFx0dW5pZm9ybXM6IFVuaWZvcm1zVXRpbHMuY2xvbmUoIHNoYWRlci51bmlmb3JtcyApLFxuXHRcdFx0c2lkZTogQmFja1NpZGUsXG5cdFx0XHRkZXB0aFdyaXRlOiBmYWxzZVxuXHRcdH0gKTtcblxuXHRcdHN1cGVyKCBuZXcgQm94R2VvbWV0cnkoIDEsIDEsIDEgKSwgbWF0ZXJpYWwgKTtcblxuXHRcdHRoaXMuaXNTa3kgPSB0cnVlO1xuXG5cdH1cblxufVxuXG5Ta3kuU2t5U2hhZGVyID0ge1xuXG5cdHVuaWZvcm1zOiB7XG5cdFx0J3R1cmJpZGl0eSc6IHsgdmFsdWU6IDIgfSxcblx0XHQncmF5bGVpZ2gnOiB7IHZhbHVlOiAxIH0sXG5cdFx0J21pZUNvZWZmaWNpZW50JzogeyB2YWx1ZTogMC4wMDUgfSxcblx0XHQnbWllRGlyZWN0aW9uYWxHJzogeyB2YWx1ZTogMC44IH0sXG5cdFx0J3N1blBvc2l0aW9uJzogeyB2YWx1ZTogbmV3IFZlY3RvcjMoKSB9LFxuXHRcdCd1cCc6IHsgdmFsdWU6IG5ldyBWZWN0b3IzKCAwLCAxLCAwICkgfVxuXHR9LFxuXG5cdHZlcnRleFNoYWRlcjogLyogZ2xzbCAqL2Bcblx0XHR1bmlmb3JtIHZlYzMgc3VuUG9zaXRpb247XG5cdFx0dW5pZm9ybSBmbG9hdCByYXlsZWlnaDtcblx0XHR1bmlmb3JtIGZsb2F0IHR1cmJpZGl0eTtcblx0XHR1bmlmb3JtIGZsb2F0IG1pZUNvZWZmaWNpZW50O1xuXHRcdHVuaWZvcm0gdmVjMyB1cDtcblxuXHRcdHZhcnlpbmcgdmVjMyB2V29ybGRQb3NpdGlvbjtcblx0XHR2YXJ5aW5nIHZlYzMgdlN1bkRpcmVjdGlvbjtcblx0XHR2YXJ5aW5nIGZsb2F0IHZTdW5mYWRlO1xuXHRcdHZhcnlpbmcgdmVjMyB2QmV0YVI7XG5cdFx0dmFyeWluZyB2ZWMzIHZCZXRhTTtcblx0XHR2YXJ5aW5nIGZsb2F0IHZTdW5FO1xuXG5cdFx0Ly8gY29uc3RhbnRzIGZvciBhdG1vc3BoZXJpYyBzY2F0dGVyaW5nXG5cdFx0Y29uc3QgZmxvYXQgZSA9IDIuNzE4MjgxODI4NDU5MDQ1MjM1MzYwMjg3NDcxMzUyNjYyNDk3NzU3MjQ3MDkzNjk5OTU5NTc7XG5cdFx0Y29uc3QgZmxvYXQgcGkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY0MzM4MzI3OTUwMjg4NDE5NzE2OTtcblxuXHRcdC8vIHdhdmVsZW5ndGggb2YgdXNlZCBwcmltYXJpZXMsIGFjY29yZGluZyB0byBwcmVldGhhbVxuXHRcdGNvbnN0IHZlYzMgbGFtYmRhID0gdmVjMyggNjgwRS05LCA1NTBFLTksIDQ1MEUtOSApO1xuXHRcdC8vIHRoaXMgcHJlLWNhbGN1YXRpb24gcmVwbGFjZXMgb2xkZXIgVG90YWxSYXlsZWlnaCh2ZWMzIGxhbWJkYSkgZnVuY3Rpb246XG5cdFx0Ly8gKDguMCAqIHBvdyhwaSwgMy4wKSAqIHBvdyhwb3cobiwgMi4wKSAtIDEuMCwgMi4wKSAqICg2LjAgKyAzLjAgKiBwbikpIC8gKDMuMCAqIE4gKiBwb3cobGFtYmRhLCB2ZWMzKDQuMCkpICogKDYuMCAtIDcuMCAqIHBuKSlcblx0XHRjb25zdCB2ZWMzIHRvdGFsUmF5bGVpZ2ggPSB2ZWMzKCA1LjgwNDU0Mjk5NjI2MTA5M0UtNiwgMS4zNTYyOTExNDE5ODQ1NjM1RS01LCAzLjAyNjU5MDI0Njg4MjQ4NzZFLTUgKTtcblxuXHRcdC8vIG1pZSBzdHVmZlxuXHRcdC8vIEsgY29lZmZpY2llbnQgZm9yIHRoZSBwcmltYXJpZXNcblx0XHRjb25zdCBmbG9hdCB2ID0gNC4wO1xuXHRcdGNvbnN0IHZlYzMgSyA9IHZlYzMoIDAuNjg2LCAwLjY3OCwgMC42NjYgKTtcblx0XHQvLyBNaWVDb25zdCA9IHBpICogcG93KCAoIDIuMCAqIHBpICkgLyBsYW1iZGEsIHZlYzMoIHYgLSAyLjAgKSApICogS1xuXHRcdGNvbnN0IHZlYzMgTWllQ29uc3QgPSB2ZWMzKCAxLjgzOTk5MTg1MTQ0MzM5NzhFMTQsIDIuNzc5ODAyMzkxOTY2MDUyOEUxNCwgNC4wNzkwNDc5NTQzODYxMDk0RTE0ICk7XG5cblx0XHQvLyBlYXJ0aCBzaGFkb3cgaGFja1xuXHRcdC8vIGN1dG9mZkFuZ2xlID0gcGkgLyAxLjk1O1xuXHRcdGNvbnN0IGZsb2F0IGN1dG9mZkFuZ2xlID0gMS42MTEwNzMxNTU2ODcwNzM0O1xuXHRcdGNvbnN0IGZsb2F0IHN0ZWVwbmVzcyA9IDEuNTtcblx0XHRjb25zdCBmbG9hdCBFRSA9IDEwMDAuMDtcblxuXHRcdGZsb2F0IHN1bkludGVuc2l0eSggZmxvYXQgemVuaXRoQW5nbGVDb3MgKSB7XG5cdFx0XHR6ZW5pdGhBbmdsZUNvcyA9IGNsYW1wKCB6ZW5pdGhBbmdsZUNvcywgLTEuMCwgMS4wICk7XG5cdFx0XHRyZXR1cm4gRUUgKiBtYXgoIDAuMCwgMS4wIC0gcG93KCBlLCAtKCAoIGN1dG9mZkFuZ2xlIC0gYWNvcyggemVuaXRoQW5nbGVDb3MgKSApIC8gc3RlZXBuZXNzICkgKSApO1xuXHRcdH1cblxuXHRcdHZlYzMgdG90YWxNaWUoIGZsb2F0IFQgKSB7XG5cdFx0XHRmbG9hdCBjID0gKCAwLjIgKiBUICkgKiAxMEUtMTg7XG5cdFx0XHRyZXR1cm4gMC40MzQgKiBjICogTWllQ29uc3Q7XG5cdFx0fVxuXG5cdFx0dm9pZCBtYWluKCkge1xuXG5cdFx0XHR2ZWM0IHdvcmxkUG9zaXRpb24gPSBtb2RlbE1hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcblx0XHRcdHZXb3JsZFBvc2l0aW9uID0gd29ybGRQb3NpdGlvbi54eXo7XG5cblx0XHRcdGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcblx0XHRcdGdsX1Bvc2l0aW9uLnogPSBnbF9Qb3NpdGlvbi53OyAvLyBzZXQgeiB0byBjYW1lcmEuZmFyXG5cblx0XHRcdHZTdW5EaXJlY3Rpb24gPSBub3JtYWxpemUoIHN1blBvc2l0aW9uICk7XG5cblx0XHRcdHZTdW5FID0gc3VuSW50ZW5zaXR5KCBkb3QoIHZTdW5EaXJlY3Rpb24sIHVwICkgKTtcblxuXHRcdFx0dlN1bmZhZGUgPSAxLjAgLSBjbGFtcCggMS4wIC0gZXhwKCAoIHN1blBvc2l0aW9uLnkgLyA0NTAwMDAuMCApICksIDAuMCwgMS4wICk7XG5cblx0XHRcdGZsb2F0IHJheWxlaWdoQ29lZmZpY2llbnQgPSByYXlsZWlnaCAtICggMS4wICogKCAxLjAgLSB2U3VuZmFkZSApICk7XG5cblx0XHRcdC8vIGV4dGluY3Rpb24gKGFic29yYnRpb24gKyBvdXQgc2NhdHRlcmluZylcblx0XHRcdC8vIHJheWxlaWdoIGNvZWZmaWNpZW50c1xuXHRcdFx0dkJldGFSID0gdG90YWxSYXlsZWlnaCAqIHJheWxlaWdoQ29lZmZpY2llbnQ7XG5cblx0XHRcdC8vIG1pZSBjb2VmZmljaWVudHNcblx0XHRcdHZCZXRhTSA9IHRvdGFsTWllKCB0dXJiaWRpdHkgKSAqIG1pZUNvZWZmaWNpZW50O1xuXG5cdFx0fWAsXG5cblx0ZnJhZ21lbnRTaGFkZXI6IC8qIGdsc2wgKi9gXG5cdFx0dmFyeWluZyB2ZWMzIHZXb3JsZFBvc2l0aW9uO1xuXHRcdHZhcnlpbmcgdmVjMyB2U3VuRGlyZWN0aW9uO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bmZhZGU7XG5cdFx0dmFyeWluZyB2ZWMzIHZCZXRhUjtcblx0XHR2YXJ5aW5nIHZlYzMgdkJldGFNO1xuXHRcdHZhcnlpbmcgZmxvYXQgdlN1bkU7XG5cblx0XHR1bmlmb3JtIGZsb2F0IG1pZURpcmVjdGlvbmFsRztcblx0XHR1bmlmb3JtIHZlYzMgdXA7XG5cblx0XHRjb25zdCB2ZWMzIGNhbWVyYVBvcyA9IHZlYzMoIDAuMCwgMC4wLCAwLjAgKTtcblxuXHRcdC8vIGNvbnN0YW50cyBmb3IgYXRtb3NwaGVyaWMgc2NhdHRlcmluZ1xuXHRcdGNvbnN0IGZsb2F0IHBpID0gMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1MDI4ODQxOTcxNjk7XG5cblx0XHRjb25zdCBmbG9hdCBuID0gMS4wMDAzOyAvLyByZWZyYWN0aXZlIGluZGV4IG9mIGFpclxuXHRcdGNvbnN0IGZsb2F0IE4gPSAyLjU0NUUyNTsgLy8gbnVtYmVyIG9mIG1vbGVjdWxlcyBwZXIgdW5pdCB2b2x1bWUgZm9yIGFpciBhdCAyODguMTVLIGFuZCAxMDEzbWIgKHNlYSBsZXZlbCAtNDUgY2Vsc2l1cylcblxuXHRcdC8vIG9wdGljYWwgbGVuZ3RoIGF0IHplbml0aCBmb3IgbW9sZWN1bGVzXG5cdFx0Y29uc3QgZmxvYXQgcmF5bGVpZ2haZW5pdGhMZW5ndGggPSA4LjRFMztcblx0XHRjb25zdCBmbG9hdCBtaWVaZW5pdGhMZW5ndGggPSAxLjI1RTM7XG5cdFx0Ly8gNjYgYXJjIHNlY29uZHMgLT4gZGVncmVlcywgYW5kIHRoZSBjb3NpbmUgb2YgdGhhdFxuXHRcdGNvbnN0IGZsb2F0IHN1bkFuZ3VsYXJEaWFtZXRlckNvcyA9IDAuOTk5OTU2Njc2OTQ2NDQ4NDQzNTUzNTc0NjE5OTA2OTc2NDc4OTI2ODQ4NjkyODczOTAwODU5MzI0O1xuXG5cdFx0Ly8gMy4wIC8gKCAxNi4wICogcGkgKVxuXHRcdGNvbnN0IGZsb2F0IFRIUkVFX09WRVJfU0lYVEVFTlBJID0gMC4wNTk2ODMxMDM2NTk0NjA3NTtcblx0XHQvLyAxLjAgLyAoIDQuMCAqIHBpIClcblx0XHRjb25zdCBmbG9hdCBPTkVfT1ZFUl9GT1VSUEkgPSAwLjA3OTU3NzQ3MTU0NTk0NzY3O1xuXG5cdFx0ZmxvYXQgcmF5bGVpZ2hQaGFzZSggZmxvYXQgY29zVGhldGEgKSB7XG5cdFx0XHRyZXR1cm4gVEhSRUVfT1ZFUl9TSVhURUVOUEkgKiAoIDEuMCArIHBvdyggY29zVGhldGEsIDIuMCApICk7XG5cdFx0fVxuXG5cdFx0ZmxvYXQgaGdQaGFzZSggZmxvYXQgY29zVGhldGEsIGZsb2F0IGcgKSB7XG5cdFx0XHRmbG9hdCBnMiA9IHBvdyggZywgMi4wICk7XG5cdFx0XHRmbG9hdCBpbnZlcnNlID0gMS4wIC8gcG93KCAxLjAgLSAyLjAgKiBnICogY29zVGhldGEgKyBnMiwgMS41ICk7XG5cdFx0XHRyZXR1cm4gT05FX09WRVJfRk9VUlBJICogKCAoIDEuMCAtIGcyICkgKiBpbnZlcnNlICk7XG5cdFx0fVxuXG5cdFx0dm9pZCBtYWluKCkge1xuXG5cdFx0XHR2ZWMzIGRpcmVjdGlvbiA9IG5vcm1hbGl6ZSggdldvcmxkUG9zaXRpb24gLSBjYW1lcmFQb3MgKTtcblxuXHRcdFx0Ly8gb3B0aWNhbCBsZW5ndGhcblx0XHRcdC8vIGN1dG9mZiBhbmdsZSBhdCA5MCB0byBhdm9pZCBzaW5ndWxhcml0eSBpbiBuZXh0IGZvcm11bGEuXG5cdFx0XHRmbG9hdCB6ZW5pdGhBbmdsZSA9IGFjb3MoIG1heCggMC4wLCBkb3QoIHVwLCBkaXJlY3Rpb24gKSApICk7XG5cdFx0XHRmbG9hdCBpbnZlcnNlID0gMS4wIC8gKCBjb3MoIHplbml0aEFuZ2xlICkgKyAwLjE1ICogcG93KCA5My44ODUgLSAoICggemVuaXRoQW5nbGUgKiAxODAuMCApIC8gcGkgKSwgLTEuMjUzICkgKTtcblx0XHRcdGZsb2F0IHNSID0gcmF5bGVpZ2haZW5pdGhMZW5ndGggKiBpbnZlcnNlO1xuXHRcdFx0ZmxvYXQgc00gPSBtaWVaZW5pdGhMZW5ndGggKiBpbnZlcnNlO1xuXG5cdFx0XHQvLyBjb21iaW5lZCBleHRpbmN0aW9uIGZhY3RvclxuXHRcdFx0dmVjMyBGZXggPSBleHAoIC0oIHZCZXRhUiAqIHNSICsgdkJldGFNICogc00gKSApO1xuXG5cdFx0XHQvLyBpbiBzY2F0dGVyaW5nXG5cdFx0XHRmbG9hdCBjb3NUaGV0YSA9IGRvdCggZGlyZWN0aW9uLCB2U3VuRGlyZWN0aW9uICk7XG5cblx0XHRcdGZsb2F0IHJQaGFzZSA9IHJheWxlaWdoUGhhc2UoIGNvc1RoZXRhICogMC41ICsgMC41ICk7XG5cdFx0XHR2ZWMzIGJldGFSVGhldGEgPSB2QmV0YVIgKiByUGhhc2U7XG5cblx0XHRcdGZsb2F0IG1QaGFzZSA9IGhnUGhhc2UoIGNvc1RoZXRhLCBtaWVEaXJlY3Rpb25hbEcgKTtcblx0XHRcdHZlYzMgYmV0YU1UaGV0YSA9IHZCZXRhTSAqIG1QaGFzZTtcblxuXHRcdFx0dmVjMyBMaW4gPSBwb3coIHZTdW5FICogKCAoIGJldGFSVGhldGEgKyBiZXRhTVRoZXRhICkgLyAoIHZCZXRhUiArIHZCZXRhTSApICkgKiAoIDEuMCAtIEZleCApLCB2ZWMzKCAxLjUgKSApO1xuXHRcdFx0TGluICo9IG1peCggdmVjMyggMS4wICksIHBvdyggdlN1bkUgKiAoICggYmV0YVJUaGV0YSArIGJldGFNVGhldGEgKSAvICggdkJldGFSICsgdkJldGFNICkgKSAqIEZleCwgdmVjMyggMS4wIC8gMi4wICkgKSwgY2xhbXAoIHBvdyggMS4wIC0gZG90KCB1cCwgdlN1bkRpcmVjdGlvbiApLCA1LjAgKSwgMC4wLCAxLjAgKSApO1xuXG5cdFx0XHQvLyBuaWdodHNreVxuXHRcdFx0ZmxvYXQgdGhldGEgPSBhY29zKCBkaXJlY3Rpb24ueSApOyAvLyBlbGV2YXRpb24gLS0+IHktYXhpcywgWy1waS8yLCBwaS8yXVxuXHRcdFx0ZmxvYXQgcGhpID0gYXRhbiggZGlyZWN0aW9uLnosIGRpcmVjdGlvbi54ICk7IC8vIGF6aW11dGggLS0+IHgtYXhpcyBbLXBpLzIsIHBpLzJdXG5cdFx0XHR2ZWMyIHV2ID0gdmVjMiggcGhpLCB0aGV0YSApIC8gdmVjMiggMi4wICogcGksIHBpICkgKyB2ZWMyKCAwLjUsIDAuMCApO1xuXHRcdFx0dmVjMyBMMCA9IHZlYzMoIDAuMSApICogRmV4O1xuXG5cdFx0XHQvLyBjb21wb3NpdGlvbiArIHNvbGFyIGRpc2Ncblx0XHRcdGZsb2F0IHN1bmRpc2sgPSBzbW9vdGhzdGVwKCBzdW5Bbmd1bGFyRGlhbWV0ZXJDb3MsIHN1bkFuZ3VsYXJEaWFtZXRlckNvcyArIDAuMDAwMDIsIGNvc1RoZXRhICk7XG5cdFx0XHRMMCArPSAoIHZTdW5FICogMTkwMDAuMCAqIEZleCApICogc3VuZGlzaztcblxuXHRcdFx0dmVjMyB0ZXhDb2xvciA9ICggTGluICsgTDAgKSAqIDAuMDQgKyB2ZWMzKCAwLjAsIDAuMDAwMywgMC4wMDA3NSApO1xuXG5cdFx0XHR2ZWMzIHJldENvbG9yID0gcG93KCB0ZXhDb2xvciwgdmVjMyggMS4wIC8gKCAxLjIgKyAoIDEuMiAqIHZTdW5mYWRlICkgKSApICk7XG5cblx0XHRcdGdsX0ZyYWdDb2xvciA9IHZlYzQoIHJldENvbG9yLCAxLjAgKTtcblxuXHRcdFx0I2luY2x1ZGUgPHRvbmVtYXBwaW5nX2ZyYWdtZW50PlxuXHRcdFx0I2luY2x1ZGUgPGVuY29kaW5nc19mcmFnbWVudD5cblxuXHRcdH1gXG5cbn07XG5cbmV4cG9ydCB7IFNreSB9O1xuIl0sIm5hbWVzIjpbIlRIUkVFIiwiQmxvY2siLCJibG9ja1R5cGUiLCJibG9ja0dvZW0iLCJCb3hHZW9tZXRyeSIsImJsb2NrTWF0ZXJpYWxzIiwiQmxvY2tNYXRlcmlhbHMiLCJyZW5kZXJEaXN0YW5jZSIsImNodW5rU2l6ZSIsImRlcHRoIiwibWF0ZXJpYWxBcnJheSIsImdyYXNzTWF0IiwibWVzaCIsIk1lc2giLCJjb3VudCIsInJhbmdlIiwiYmlvbWVzIiwiZGlydE1hdCIsImNvYmJsZXN0b25lTWF0Iiwib2FrTG9nTWF0Iiwib2FrTGVhdmVzTWF0Iiwic2FuZE1hdCIsIndhdGVyTWF0IiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsIm1hcCIsInBpYyIsIk1lc2hTdGFuZGFyZE1hdGVyaWFsIiwibG9hZCIsInNpZGUiLCJEb3VibGVTaWRlIiwidGV4dHVyZU9wYWNpdHkiLCJmaWxlVVJMIiwiZGlyZWN0b3J5UGF0aCIsImZzIiwicmVhZGRpciIsImVyciIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJmaWxlIiwiaSIsImxlbmd0aCIsInRyYW5zcGFyZW50Iiwib3BhY2l0eSIsIkJsb2NrcyIsImdyYXNzIiwiZGlydCIsImNvYmJsZXN0b25lIiwib2FrTG9nIiwib2FrTGVhdmVzIiwic2FuZCIsIndhdGVyIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJQb2ludGVyTG9ja0NvbnRyb2xzIiwiQ29udHJvbHMiLCJwbGF5ZXIiLCJrZXlBY3Rpb25NYXAiLCJLZXlXIiwiS2V5UyIsIktleUEiLCJLZXlEIiwiU3BhY2UiLCJEaWdpdDEiLCJEaWdpdDIiLCJEaWdpdDMiLCJEaWdpdDQiLCJmcHYiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibW91c2UiLCJWZWN0b3IyIiwicmF5Y2FzdGVyIiwiUmF5Y2FzdGVyIiwiaW5pdENvbnRyb2xzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaGFuZGxlS2V5RG93biIsImhhbmRsZUtleVVwIiwiaXNMb2NrZWQiLCJoYW5kbGVNb3VzZURvd24iLCJsb2NrIiwiaGFuZGxlTW91c2VVcCIsImtleSIsImFjdGlvbiIsImFjdGlvbkJ5S2V5IiwiY29kZSIsImFjdGlvbk1hcCIsImJ1dHRvbiIsIm1uIiwiY3JlYXRlTGFuZHNjYXBlIiwieEluZGV4IiwiekluZGV4IiwieiIsIngiLCJ5IiwicG9zIiwiVmVjdG9yMyIsInN0b3JhZ2UiLCJhZGRCbG9jayIsInR5cGUiLCJwb3NpdGlvbiIsIkNBTk5PTiIsImN0Iiwic2MiLCJQbGF5ZXIiLCJTcGhlcmVHZW9tZXRyeSIsIk1lc2hCYXNpY01hdGVyaWFsIiwicGxyR2VvbSIsInBsck1hdCIsImxlZnRDbGljayIsInJpZ2h0Q2xpY2siLCJtb3ZlRm9yd2FyZCIsIm1vdmVCYWNrd2FyZCIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwianVtcCIsInRleHR1cmUxIiwidGV4dHVyZTMiLCJ0ZXh0dXJlNCIsInRleHR1cmU1IiwiY29udHJvbHMiLCJtYXNzIiwibW92ZW1lbnRTcGVlZCIsImp1bXBGb3JjZSIsInBsYXllclNoYXBlIiwiU3BoZXJlIiwicGxheWVyQm9keSIsIkJvZHkiLCJhZGRTaGFwZSIsImNvcHkiLCJ1cGRhdGVQb3NpdGlvbiIsInVzZUFjdGlvbiIsInNldEZyb21DYW1lcmEiLCJpbnRlcnNlY3RzIiwiaW50ZXJzZWN0T2JqZWN0cyIsInNjZW5lIiwiY2hpbGRyZW4iLCJvYmplY3RJc0Jsb2NrIiwidW5kZWZpbmVkIiwib2JqZWN0IiwiZGlzdGFuY2UiLCJpc0Jsb2NrIiwiZXJyb3IiLCJNYXRoIiwiYWJzIiwidmVsb2NpdHkiLCJzZXQiLCJpbnRlcnNlY3RPYmoiLCJnZXRJbnRlcnNlY3RPYmoiLCJwbGFjZUJsb2NrIiwicmVtb3ZlQmxvY2siLCJkaXJlY3Rpb24iLCJmcm9udFZlY3RvciIsInNpZGVWZWN0b3IiLCJhZGRWZWN0b3JzIiwibm9ybWFsaXplIiwibXVsdGlwbHlTY2FsYXIiLCJhcHBseUV1bGVyIiwicm90YXRpb24iLCJibG9jayIsImZhY2UiLCJub3JtYWwiLCJibG9ja3MiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwicG93ZXJQcmVmZXJlbmNlIiwiYW50aWFsaWFzIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJ0b25lTWFwcGluZyIsIkFDRVNGaWxtaWNUb25lTWFwcGluZyIsInRvbmVNYXBwaW5nRXhwb3N1cmUiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwiY20iLCJyZCIsImxkIiwiR1VJIiwiU2t5IiwiU2NlbmUiLCJza3kiLCJzdW4iLCJpbml0IiwiaW5pdFNreSIsInNjYWxlIiwic2V0U2NhbGFyIiwiYWRkIiwiZWZmZWN0Q29udHJvbGxlciIsInR1cmJpZGl0eSIsInJheWxlaWdoIiwibWllQ29lZmZpY2llbnQiLCJtaWVEaXJlY3Rpb25hbEciLCJlbGV2YXRpb24iLCJhemltdXRoIiwiZXhwb3N1cmUiLCJndWlDaGFuZ2VkIiwidW5pZm9ybXMiLCJtYXRlcmlhbCIsInZhbHVlIiwicGhpIiwiTWF0aFV0aWxzIiwiZGVnVG9SYWQiLCJ0aGV0YSIsInNldEZyb21TcGhlcmljYWxDb29yZHMiLCJoZWxwZXIiLCJHcmlkSGVscGVyIiwicG9pbnRMaWdodF8xIiwiUG9pbnRMaWdodCIsInBvaW50TGlnaHRfMiIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsInJlbmRlciIsIkJMSyIsIm5hbm9pZCIsIlN0b3JhZ2UiLCJpbml0U3RvcmUiLCJ0eXAiLCJwdXNoIiwiQmxvY2tzQXJyYXkiLCJtZXNoZXMiLCJib2RpZXMiLCJ3b3JsZCIsInJlbmRlckxpc3QiLCJpbml0QmxvY2tzIiwidXNlU3RvcmFnZSIsImJsb2Nrc0FycmF5IiwibmV3QXJyYXkiLCJmaWx0ZXIiLCJmaW5kIiwiYmxvY2tTaGFwZSIsIkJveCIsIlZlYzMiLCJibG9ja0JvZHkiLCJhZGRCb2R5IiwiZmluZEJ5UG9zaXRpb24iLCJibG9ja01lc2giLCJnZXRPYmplY3RCeUlkIiwiaWQiLCJmaWx0ZXJCeVBvc2l0aW9uIiwicmVtb3ZlQm9keSIsInJlbW92ZSIsInN0b3JlQmxvY2siLCJQTFIiLCJzdCIsIlN0YXRzIiwiY2xvY2siLCJDbG9jayIsInN0YXRzIiwiaW5pdFRocmVlIiwiaW5pdENhbm5vbiIsImluaXRNaW5lY3JhZnQiLCJyZW5kZXJJbmZvIiwiR2FtZUxvb3AiLCJXb3JsZCIsImdyYXZpdHkiLCJpbmZvIiwidHJpYW5nbGVzIiwiY2FsbHMiLCJtZW1vcnkiLCJ0ZXh0dXJlcyIsImdlb21ldHJpZXMiLCJzeW5jaHJvbmlzZWRCb2RpZXNNZXNoZXMiLCJxdWF0ZXJuaW9uIiwiZGVsdGFUaW1lIiwiZ2V0RGVsdGEiLCJ1cGRhdGVQbGF5ZXIiLCJmaXhlZFN0ZXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9